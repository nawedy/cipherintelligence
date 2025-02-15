from supabase import create_client
import uuid
import json
from datetime import datetime

supabase = create_client(os.getenv("SUPABASE_URL"), os.getenv("SUPABASE_KEY"))

async def update_page_content(page_id: str, content: dict, user_id: str):
    # Validate content structure
    if not validate_content_schema(content):
        raise ValueError("Invalid content structure")
    
    # Create version snapshot
    previous = supabase.table("pages").select("*").eq("page_id", page_id).single().execute()
    
    # Store in versions table
    supabase.table("page_versions").insert({
        "page_id": page_id,
        "content": previous.data["content"] if previous.data else None,
        "user_id": user_id,
        "created_at": datetime.now()
    }).execute()
    
    # Update main page
    return supabase.table("pages").upsert({
        "page_id": page_id,
        "content": content,
        "last_modified": datetime.now(),
        "modified_by": user_id
    }).execute()

def validate_content_schema(content: dict) -> bool:
    required_fields = ["blocks", "metadata", "version"]
    return all(field in content for field in required_fields)

async def upload_media(file: UploadFile, user_id: str) -> str:
    file_ext = file.filename.split(".")[-1]
    file_name = f"{uuid.uuid4()}.{file_ext}"
    
    supabase.storage.from_("cms-media").upload(
        file_name,
        await file.read(),
        {
            "content-type": file.content_type,
            "x-upsert": "true"
        }
    )
    
    return supabase.storage.from_("cms-media").get_public_url(file_name) 
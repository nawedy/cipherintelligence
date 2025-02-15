from fastapi import APIRouter, UploadFile, File, Depends
from fastapi.responses import JSONResponse
from ..utils.auth import get_current_user
from ..services.cms import (
    get_page_content,
    update_page_content,
    get_page_versions,
    upload_media,
    restore_version
)

router = APIRouter(prefix="/cms", tags=["CMS"])

@router.post("/pages/{page_id}")
async def save_page(
    page_id: str,
    content: dict,
    user: dict = Depends(get_current_user)
):
    try:
        await update_page_content(
            page_id=page_id,
            content=content,
            user_id=user["id"]
        )
        return JSONResponse({"status": "success"})
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500)

@router.get("/pages/{page_id}")
async def load_page(page_id: str):
    content = await get_page_content(page_id)
    return {"content": content}

@router.post("/media")
async def upload_media_file(
    file: UploadFile = File(...),
    user: dict = Depends(get_current_user)
):
    try:
        file_url = await upload_media(file, user["id"])
        return {"url": file_url}
    except Exception as e:
        return JSONResponse({"error": str(e)}, status_code=500) 
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..models.content import CMSContent
from ..schemas.content import ContentCreate, ContentUpdate
from ..utils.database import get_db
from ..utils.auth import get_current_admin
from pydantic import BaseModel
from sqlalchemy import text
from datetime import datetime

router = APIRouter(prefix="/content", tags=["CMS Content"])

@router.post("/", response_model=CMSContent)
def create_content(
    content: ContentCreate,
    db: Session = Depends(get_db),
    user: dict = Depends(get_current_admin)
):
    new_content = CMSContent(
        title=content.title,
        content=content.content,
        content_type=content.content_type,
        author_id=user.id
    )
    db.add(new_content)
    db.commit()
    db.refresh(new_content)
    return new_content

@router.get("/", response_model=list[CMSContent])
def get_content(
    content_type: str = None,
    page: int = 1,
    limit: int = 10,
    db: Session = Depends(get_db)
):
    query = db.query(CMSContent)
    if content_type:
        query = query.filter(CMSContent.content_type == content_type)
    return query.offset((page-1)*limit).limit(limit).all()

class ContentVersion(BaseModel):
    content_id: str
    version: int
    created_at: datetime
    author: str
    changes: dict

def get_content_history(content_id: str):
    return db.execute(text("""
        SELECT * FROM content_versions 
        WHERE content_id = :content_id 
        ORDER BY version DESC
    """), {'content_id': content_id}).fetchall()

@router.get("/{content_id}/versions", response_model=list[ContentVersion])
def get_content_versions(
    content_id: str,
    db: Session = Depends(get_db),
    user: dict = Depends(get_current_admin)
):
    return db.execute(text("""
        SELECT * FROM content_versions 
        WHERE content_id = :content_id 
        ORDER BY version DESC
    """), {'content_id': content_id}).fetchall() 
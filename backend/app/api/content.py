from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..models.content import CMSContent
from ..schemas.content import ContentCreate, ContentUpdate
from ..utils.database import get_db
from ..utils.auth import get_current_admin

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
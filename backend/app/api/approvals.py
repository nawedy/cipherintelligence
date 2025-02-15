from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from datetime import datetime
from backend.utils.rbac import require_permissions
from backend.database.database import get_db
from backend.models.content import CMSContent

router = APIRouter(prefix="/approvals", tags=["Approvals"])

@router.get("/pending")
def get_pending_content(
    db: Session = Depends(get_db),
    user: dict = Depends(require_permissions(["approve_content"]))
):
    return db.query(CMSContent).filter(CMSContent.status == "pending").all()

@router.post("/{content_id}/approve")
def approve_content(
    content_id: int,
    db: Session = Depends(get_db),
    user: dict = Depends(require_permissions(["approve_content"]))
):
    content = db.query(CMSContent).filter(CMSContent.id == content_id).first()
    content.status = "approved"
    content.approved_by = user.id
    content.approved_at = datetime.utcnow()
    db.commit()
    return content 
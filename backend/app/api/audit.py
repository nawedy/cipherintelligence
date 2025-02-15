from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..models.audit import AuditLog
from ..utils.database import get_db
from ..utils.rbac import require_permissions
from ..models.cms import AuditLog as CMSAuditLog

router = APIRouter(prefix="/audit", tags=["Audit"])

@router.get("/logs/{page_id}")
async def get_audit_logs(
    page_id: str,
    limit: int = 50,
    db: Session = Depends(get_db)
):
    return db.query(CMSAuditLog).filter(
        CMSAuditLog.page_id == page_id
    ).order_by(CMSAuditLog.timestamp.desc()).limit(limit).all()

@router.get("/")
def get_audit_logs(
    page: int = 1,
    limit: int = 50,
    db: Session = Depends(get_db),
    user: dict = Depends(require_permissions(["view_audit_logs"]))
):
    return db.query(AuditLog).order_by(AuditLog.timestamp.desc()).offset((page-1)*limit).limit(limit).all() 
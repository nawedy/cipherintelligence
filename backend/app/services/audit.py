from datetime import datetime
from fastapi import Request

def log_audit_event(
    db: Session,
    request: Request,
    user_id: int,
    action: str,
    resource_type: str,
    resource_id: int,
    details: dict
):
    audit_log = AuditLog(
        user_id=user_id,
        action=action,
        resource_type=resource_type,
        resource_id=resource_id,
        details=details,
        timestamp=datetime.utcnow(),
        ip_address=request.client.host if request.client else None,
        user_agent=request.headers.get("user-agent")
    )
    db.add(audit_log)
    db.commit() 
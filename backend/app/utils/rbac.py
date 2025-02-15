from fastapi import Depends, HTTPException, status
from typing import List, Dict
from jose import JWTError
from sqlalchemy.orm import Session

def require_roles(required_roles: List[str]):
    def role_checker(current_user: dict = Depends(get_current_user)):
        if current_user.role not in required_roles:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Insufficient permissions"
            )
        return current_user
    return role_checker

def require_permissions(required_perms: List[str]):
    async def permission_checker(
        user: dict = Depends(get_current_user),
        db: Session = Depends(get_db)
    ):
        # Get user's permissions from database
        user_perms = await get_user_permissions(user.id, db)
        
        missing_perms = [perm for perm in required_perms if perm not in user_perms]
        if missing_perms:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail=f"Missing permissions: {', '.join(missing_perms)}"
            )
        return user
    return permission_checker

async def get_user_permissions(user_id: int, db: Session):
    # Example implementation - fetch from database
    user = db.query(User).filter(User.id == user_id).first()
    return user.permissions.split(',') if user else []

# Usage in routes:
# @router.post("/", dependencies=[Depends(require_roles(["admin"]))]) 
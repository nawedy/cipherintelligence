from fastapi import APIRouter, Depends, Request, HTTPException
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordRequestForm
from ..utils.database import get_db
from ..utils.rbac import require_permissions
from ..utils.security import authenticate_user, create_access_token
from ..utils.rate_limiter import limiter

router = APIRouter(prefix="/auth", tags=["Authentication"])

@router.post("/login")
@limiter.limit("5/minute")
async def login(
    request: Request,
    form_data: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db)
):
    user = authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(401, "Invalid credentials")
    
    access_token = create_access_token(
        data={"sub": user.email, "twofa_required": user.twofa_enabled}
    )
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "twofa_required": user.twofa_enabled
    } 
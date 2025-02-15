from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
import pyotp
import json

router = APIRouter(prefix="/2fa", tags=["2FA"])

@router.post("/setup")
async def setup_2fa(
    user: dict = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    secret = pyotp.random_base32()
    user.twofa_secret = secret
    recovery_codes = [str(uuid.uuid4()) for _ in range(5)]
    user.twofa_recovery_codes = json.dumps(recovery_codes)
    db.commit()
    
    return {
        "secret": secret,
        "qr_code": pyotp.totp.TOTP(secret).provisioning_uri(user.email),
        "recovery_codes": recovery_codes
    }

@router.post("/verify")
async def verify_2fa(
    code: str,
    user: dict = Depends(get_current_user)
):
    if not user.twofa_secret:
        raise HTTPException(400, "2FA not set up")
    
    if pyotp.TOTP(user.twofa_secret).verify(code):
        return {"verified": True}
    
    raise HTTPException(400, "Invalid code") 
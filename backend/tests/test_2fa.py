import pyotp
from fastapi.testclient import TestClient

def test_full_2fa_flow():
    # Setup 2FA
    setup_res = client.post("/2fa/setup", headers=admin_auth)
    secret = setup_res.json()["secret"]
    
    # Generate valid code
    totp = pyotp.TOTP(secret)
    code = totp.now()
    
    # Verify code
    verify_res = client.post("/2fa/verify", json={"code": code}, headers=admin_auth)
    assert verify_res.status_code == 200 
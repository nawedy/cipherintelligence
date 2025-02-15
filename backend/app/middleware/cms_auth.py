from fastapi import Request, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

class CMSAuth(HTTPBearer):
    async def __call__(self, request: Request):
        credentials: HTTPAuthorizationCredentials = await super().__call__(request)
        if not verify_cms_token(credentials.credentials):
            raise HTTPException(status_code=403, detail="Invalid authentication")
        return credentials

def verify_cms_token(token: str) -> bool:
    # Implement JWT verification with Supabase
    return True 
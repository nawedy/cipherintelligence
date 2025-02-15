from fastapi import APIRouter
from ..utils.limiter import limiter

router = APIRouter(prefix="/public", tags=["Public API"])

@router.get("/news")
@limiter.limit("60/minute")
async def get_public_news():
    return {"news": [...]} 
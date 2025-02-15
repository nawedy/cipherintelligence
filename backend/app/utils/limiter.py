from fastapi import Request
from fastapi.middleware import Middleware
from slowapi import Limiter
from slowapi.util import get_remote_address

limiter = Limiter(key_func=get_remote_address)

def get_rate_limiter():
    return limiter

# Apply to routes using decorator:
# @router.post("/")
# @limiter.limit("5/minute") 
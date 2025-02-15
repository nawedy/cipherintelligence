import logging
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from .utils.limiter import limiter
from .services.audit import log_audit_event
from slowapi.errors import RateLimitExceeded
from fastapi.responses import JSONResponse
from fastapi.middleware.httpsredirect import HTTPSRedirectMiddleware
from fastapi.middleware import Middleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from fastapi.middleware.secure import SecureMiddleware
from fastapi.middleware.content_security_policy import ContentSecurityPolicyMiddleware

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)

app = FastAPI(title="EriEthio CMS API", middleware=[
    Middleware(
        TrustedHostMiddleware,
        allowed_hosts=["eriethio.com", "*.eriethio.com"]
    )
])

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)
app.add_middleware(HTTPSRedirectMiddleware)
app.add_middleware(
    SecureMiddleware,
    ssl_redirect=True,
    hsts_max_age=31536000,
    content_type_nosniff=True,
    xss_protection=True
)
app.add_middleware(
    ContentSecurityPolicyMiddleware,
    policy={
        "default-src": "'self'",
        "script-src": "'self' 'unsafe-inline'",
        "style-src": "'self' 'unsafe-inline'",
        "img-src": "'self' data:",
        "connect-src": "'self'"
    }
)

@app.middleware("http")
async def log_requests(request, call_next):
    logger.info(f"Request: {request.method} {request.url}")
    response = await call_next(request)
    logger.info(f"Response: {response.status_code}")
    return response

@app.middleware("http")
async def audit_middleware(request: Request, call_next):
    response = await call_next(request)
    
    if request.user.is_authenticated:
        log_audit_event(
            request=request,
            user_id=request.user.id,
            action=f"{request.method}_{request.url.path}",
            resource_type="endpoint",
            resource_id=None,
            details={
                "status_code": response.status_code,
                "params": dict(request.query_params)
            }
        )
    
    return response

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

async def _rate_limit_exceeded_handler(request: Request, exc: RateLimitExceeded):
    return JSONResponse(
        status_code=429,
        content={"detail": "Too many requests"}
    ) 
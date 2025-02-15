from sqlalchemy import Column, String, JSON, Boolean, DateTime, ForeignKey
from ..utils.database import Base

class ContentPage(Base):
    __tablename__ = "content_pages"
    
    id = Column(Integer, primary_key=True)
    page_id = Column(String(255), unique=True)
    content = Column(JSON)
    is_draft = Column(Boolean, default=True)
    created_at = Column(DateTime, default=func.now())
    updated_at = Column(DateTime, default=func.now(), onupdate=func.now())

class AuditLog(Base):
    __tablename__ = "cms_audit_logs"
    
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    action = Column(String(50))
    page_id = Column(String(255))
    old_content = Column(JSON)
    new_content = Column(JSON)
    timestamp = Column(DateTime, default=func.now()) 
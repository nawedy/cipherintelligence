from sqlalchemy import Column, Integer, String, DateTime
from .database import Base

class CMSContent(Base):
    __tablename__ = "cms_content"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(200))
    content = Column(String)
    content_type = Column(String(50))  # blog, news, research
    created_at = Column(DateTime)
    updated_at = Column(DateTime)
    author_id = Column(Integer)
    status = Column(String, default="draft")  # draft, pending, approved, rejected
    approved_by = Column(Integer, nullable=True)
    approved_at = Column(DateTime, nullable=True) 
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from .database import Base

class VersionHistory(Base):
    __tablename__ = "version_history"
    
    id = Column(Integer, primary_key=True, index=True)
    content_id = Column(Integer, ForeignKey("cms_content.id"))
    title = Column(String)
    content = Column(String)
    modified_by = Column(Integer)
    modified_at = Column(DateTime)
    version_number = Column(Integer) 
from sqlalchemy import Column, Integer, String, DateTime, JSON
from .database import Base

class AuditLog(Base):
    __tablename__ = "audit_logs"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer)
    action = Column(String)  # e.g., "content_update", "user_delete"
    resource_type = Column(String)
    resource_id = Column(Integer)
    details = Column(JSON)
    timestamp = Column(DateTime)
    ip_address = Column(String)
    user_agent = Column(String) 
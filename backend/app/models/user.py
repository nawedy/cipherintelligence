from sqlalchemy import Column, Integer, String, Boolean
from .database import Base

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    role = Column(String, default="editor")  # 'admin' or 'editor'
    is_active = Column(Boolean, default=True)
    twofa_enabled = Column(Boolean, default=False)
    twofa_secret = Column(String)
    twofa_recovery_codes = Column(String)  # JSON-encoded list 
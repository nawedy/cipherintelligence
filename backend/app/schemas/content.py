from pydantic import BaseModel
from datetime import datetime

class ContentBase(BaseModel):
    title: str
    content: str
    content_type: str

class ContentCreate(ContentBase):
    pass

class ContentUpdate(ContentBase):
    pass

class CMSContent(ContentBase):
    id: int
    created_at: datetime
    updated_at: datetime
    author_id: int

    class Config:
        orm_mode = True 
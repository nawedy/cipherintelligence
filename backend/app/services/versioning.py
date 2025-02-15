from datetime import datetime
from sqlalchemy.orm import Session

def create_version(db: Session, content_id: int, user_id: int, content_data: dict):
    version_count = db.query(VersionHistory).filter_by(content_id=content_id).count()
    
    new_version = VersionHistory(
        content_id=content_id,
        title=content_data["title"],
        content=content_data["content"],
        modified_by=user_id,
        modified_at=datetime.utcnow(),
        version_number=version_count + 1
    )
    
    db.add(new_version)
    db.commit()
    return new_version 
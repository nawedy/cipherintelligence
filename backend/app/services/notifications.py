from fastapi_backend.utils.email import send_email

def send_approval_notification(user_email: str, content_title: str):
    subject = f"Content Approval Required: {content_title}"
    body = f"New content '{content_title}' requires your approval."
    send_email(user_email, subject, body) 
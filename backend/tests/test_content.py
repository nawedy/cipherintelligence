from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_create_content_with_auth():
    # Test authentication and RBAC
    response = client.post(
        "/content/",
        json={"title": "Test", "content": "Test", "content_type": "blog"},
        headers={"Authorization": "Bearer valid_token"}
    )
    assert response.status_code == 200
    assert "id" in response.json()

def test_version_history_creation():
    # Test versioning system
    response = client.get("/content/1/versions")
    assert response.status_code == 200
    assert isinstance(response.json(), list) 
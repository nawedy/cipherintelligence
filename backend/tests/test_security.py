def test_admin_access():
    response = client.get("/admin", headers=editor_auth)
    assert response.status_code == 403

def test_permission_checks():
    response = client.post("/content", json={}, headers=user_auth)
    assert response.status_code == 403

def test_audit_log_access():
    # Test audit log visibility for admins only
    response = client.get("/audit", headers=admin_auth)
    assert response.status_code == 200
    response = client.get("/audit", headers=editor_auth)
    assert response.status_code == 403 
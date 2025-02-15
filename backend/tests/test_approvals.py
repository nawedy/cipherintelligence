def test_content_approval_flow():
    # Test draft → pending → approved states
    pass 

def test_approval_workflow():
    # Create content as editor
    create_res = client.post("/content", json={...}, headers=editor_auth)
    content_id = create_res.json()["id"]
    
    # Approve as admin
    approve_res = client.post(f"/approvals/{content_id}/approve", headers=admin_auth)
    assert approve_res.json()["status"] == "approved" 
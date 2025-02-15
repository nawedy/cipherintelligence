def test_rate_limiting():
    for _ in range(6):
        response = client.get("/public-api")
    assert response.status_code == 429

def test_public_api_rate_limit():
    for _ in range(60):
        client.get("/public/news")
    response = client.get("/public/news")
    assert response.status_code == 429 
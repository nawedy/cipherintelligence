from fastapi import APIRouter
from fastapi.responses import HTMLResponse

router = APIRouter()

@router.get("/preview/{page_id}", response_class=HTMLResponse)
async def get_preview_page(page_id: str):
    return f"""
    <!DOCTYPE html>
    <html>
      <head>
        <title>Preview Mode</title>
        <script src="/preview-script.js"></script>
      </head>
      <body>
        <div id="preview-content" data-page-id="{page_id}"></div>
      </body>
    </html>
    """ 
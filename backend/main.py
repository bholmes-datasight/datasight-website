from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import charts

app = FastAPI(title="DATASIGHT API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://datasightuk.com"],
    allow_methods=["GET"],
    allow_headers=["*"],
)

app.include_router(charts.router, prefix="/api/charts", tags=["charts"])


@app.get("/health")
def health():
    return {"status": "ok"}

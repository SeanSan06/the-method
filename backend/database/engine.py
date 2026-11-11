import os
from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker

from .models import Base

database_url = os.getenv("DATABASE_URL")
if not database_url:
    raise ValueError("DATABASE_URL environment variable is not set")

PSYCOPG_DATABASE_URL = database_url.replace(
    "postgresql://", "postgresql+psycopg2://"
)

engine = create_engine(PSYCOPG_DATABASE_URL)

SessionLocal = sessionmaker(bind=engine, autoflush=False)


def get_db():
    """
    Returns a database session
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def init_db():
    """
    Initializes the database
    """
    with engine.begin() as conn:
        conn.execute(text('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";'))
    Base.metadata.create_all(bind=engine)

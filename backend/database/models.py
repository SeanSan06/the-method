from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column

class Base(DeclarativeBase):
  pass

class User(Base):
  __tablename__ = 'users'

class Resume(Base):
  __tablename__ = 'resumes'
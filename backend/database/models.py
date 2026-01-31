from uuid import UUID
from enum import Enum
from datetime import date, datetime
from typing import List, Optional

from sqlalchemy import Boolean, Numeric, Date, Text, ForeignKey, func, text
from sqlalchemy.dialects.postgresql import UUID as PG_UUID, JSONB as PG_JSONB, ARRAY as PG_ARRAY, ENUM as PG_ENUM
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship


class Base(DeclarativeBase):
    pass


class JobType(Enum):
    FULL_TIME = 'Full-time'
    PART_TIME = 'Part-time'
    CONTRACT = 'Contract'
    INTERNSHIP = 'Internship'
    FREELANCE = 'Freelance'
    VOLUNTEER = 'Volunteer'


class User(Base):
    __tablename__ = 'users'

    id: Mapped[UUID] = mapped_column(PG_UUID(as_uuid=True), primary_key=True, server_default=text('uuid_generate_v4()'))
    email: Mapped[str] = mapped_column(Text, unique=True, nullable=False)
    password_hash: Mapped[str] = mapped_column(Text, nullable=False)
    created_at: Mapped[datetime] = mapped_column(server_default=func.now())
    last_email_update: Mapped[datetime] = mapped_column(server_default=func.now())
    last_password_update: Mapped[datetime] = mapped_column(server_default=func.now())

    user_info: Mapped['UserInfo'] = relationship(back_populates='user', uselist=False, cascade='all, delete-orphan')
    resumes: Mapped[List['Resume']] = relationship(back_populates='user', cascade='all, delete-orphan')


class UserInfo(Base):
    __tablename__ = 'user_infos'

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    user_id: Mapped[UUID] = mapped_column(ForeignKey('users.id', ondelete='CASCADE'), unique=True, nullable=False)
    name: Mapped[Optional[str]] = mapped_column(Text)
    phone_number: Mapped[Optional[str]] = mapped_column(Text)
    us_citizen: Mapped[bool] = mapped_column(Boolean, server_default=text('false'))
    links: Mapped[list] = mapped_column(PG_JSONB, server_default=text('\'[]\'::jsonb'))

    user: Mapped['User'] = relationship(back_populates='user_info')
    educations: Mapped[List['Education']] = relationship(back_populates='user_info', cascade='all, delete-orphan')
    skills: Mapped[List['Skill']] = relationship(back_populates='user_info', cascade='all, delete-orphan')
    experiences: Mapped[List['Experience']] = relationship(back_populates='user_info', cascade='all, delete-orphan')
    projects: Mapped[List['Project']] = relationship(back_populates='user_info', cascade='all, delete-orphan')
    certifications: Mapped[List['Certification']] = relationship(back_populates='user_info', cascade='all, delete-orphan')
    awards: Mapped[List['Award']] = relationship(back_populates='user_info', cascade='all, delete-orphan')


class Education(Base):
    __tablename__ = 'educations'

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    user_info_id: Mapped[int] = mapped_column(ForeignKey('user_infos.id', ondelete='CASCADE'), nullable=False)
    school: Mapped[str] = mapped_column(Text, nullable=False)
    major: Mapped[str] = mapped_column(Text, nullable=False)
    gpa: Mapped[float] = mapped_column(Numeric(3, 2))
    start_date: Mapped[date] = mapped_column(Date, nullable=False)
    end_date: Mapped[Optional[date]] = mapped_column(Date)
    activities: Mapped[Optional[list[str]]] = mapped_column(PG_ARRAY(Text))
    coursework: Mapped[Optional[list[str]]] = mapped_column(PG_ARRAY(Text))

    user_info: Mapped['UserInfo'] = relationship(back_populates='educations')


class Skill(Base):
    __tablename__ = 'skills'

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    user_info_id: Mapped[int] = mapped_column(ForeignKey('user_infos.id', ondelete='CASCADE'), nullable=False)
    category_name: Mapped[str] = mapped_column(Text, nullable=False)
    skill_list: Mapped[list[str]] = mapped_column(PG_ARRAY(Text), nullable=False)

    user_info: Mapped['UserInfo'] = relationship(back_populates='skills')


class Experience(Base):
    __tablename__ = 'experiences'

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    user_info_id: Mapped[int] = mapped_column(ForeignKey('user_infos.id', ondelete='CASCADE'), nullable=False)
    title: Mapped[str] = mapped_column(Text, nullable=False)
    company: Mapped[str] = mapped_column(Text, nullable=False)
    city: Mapped[str] = mapped_column(Text, nullable=False)
    state: Mapped[str] = mapped_column(Text, nullable=False)
    job_type: Mapped[JobType] = mapped_column(PG_ENUM(JobType, name='job_type_enum'), nullable=False)
    start_date: Mapped[date] = mapped_column(Date, nullable=False)
    end_date: Mapped[Optional[date]] = mapped_column(Date)
    description: Mapped[Optional[str]] = mapped_column(Text)

    user_info: Mapped['UserInfo'] = relationship(back_populates='experiences')


class Project(Base):
    __tablename__ = 'projects'

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    user_info_id: Mapped[int] = mapped_column(ForeignKey('user_infos.id', ondelete='CASCADE'), nullable=False)
    name: Mapped[str] = mapped_column(Text, nullable=False)
    start_date: Mapped[date] = mapped_column(Date, nullable=False)
    end_date: Mapped[Optional[date]] = mapped_column(Date)
    description: Mapped[Optional[str]] = mapped_column(Text)

    user_info: Mapped['UserInfo'] = relationship(back_populates='projects')


class Certification(Base):
    __tablename__ = 'certifications'

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    user_info_id: Mapped[int] = mapped_column(ForeignKey('user_infos.id', ondelete='CASCADE'), nullable=False)
    name: Mapped[str] = mapped_column(Text, nullable=False)
    company: Mapped[str] = mapped_column(Text, nullable=False)
    date_issued: Mapped[date] = mapped_column(Date, nullable=False)

    user_info: Mapped['UserInfo'] = relationship(back_populates='certifications')


class Award(Base):
    __tablename__ = 'awards'

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    user_info_id: Mapped[int] = mapped_column(ForeignKey('user_infos.id', ondelete='CASCADE'), nullable=False)
    name: Mapped[str] = mapped_column(Text, nullable=False)
    company: Mapped[str] = mapped_column(Text, nullable=False)
    city: Mapped[Optional[str]] = mapped_column(Text)
    state: Mapped[Optional[str]] = mapped_column(Text)
    date_received: Mapped[date] = mapped_column(Date, nullable=False)

    user_info: Mapped['UserInfo'] = relationship(back_populates='awards')


class Resume(Base):
    __tablename__ = 'resumes'

    id: Mapped[UUID] = mapped_column(PG_UUID(as_uuid=True), primary_key=True, server_default=text('uuid_generate_v4()'))
    user_id: Mapped[UUID] = mapped_column(ForeignKey('users.id', ondelete='CASCADE'), unique=True, nullable=False)
    resume_data: Mapped[str] = mapped_column(Text, nullable=False)
    created_at: Mapped[datetime] = mapped_column(server_default=func.now())
    last_updated: Mapped[datetime] = mapped_column(server_default=func.now(), onupdate=func.now())

    user: Mapped['User'] = relationship(back_populates='resume')
# Backend Documentation

## Overview
FastAPI-based backend for The Method application. Handles resume analysis, interview preparation, job applications, and AI-powered recommendations using LLM integration.

## Setup

### Prerequisites
- Python 3.12.3+
- PostgreSQL w/ SqlAlchemy
- GROQ API key
- Google Developer key(future)

### Installation
```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install -r requirements.txt
pip install -r requirements-dev.txt
```

### Formatting Check
```bash
black . --check
```

### Auto Formatting Python Code
```bash
black .
```

#### Check for errors
```bash
flake8 . --count --select=E9,F63,F7,F82 --show-source --statistics
```

**Selected error codes:**
- `E9` = Syntax errors
- `F63` = Invalid use of `*` in function definition
- `F7` = Undefined name in function definition
- `F82` = Undefined name in code
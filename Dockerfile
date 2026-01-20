FROM python:3.14-slim
WORKDIR /usr/src/app

COPY requirements.txt ./requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
ENV PYTHONPATH=/usr/src/app

COPY backend ./backend
ENV PYTHONPATH=/usr/src/app
CMD ["fastapi", "run", "backend/main.py"]
FROM node:slim AS frontend
WORKDIR /app/frontend
COPY frontend/ .
RUN npm install
RUN npm run build

FROM python:3.14-slim
WORKDIR /app
COPY backend/ ./backend
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
ENV PYTHONPATH=/app

COPY --from=frontend /app/frontend/dist ./static

CMD ["fastapi", "run", "backend/main.py"]
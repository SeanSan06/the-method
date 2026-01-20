FROM python:3.14-slim
WORKDIR /usr/src/app

COPY . .
RUN pip install --no-cache-dir -r requirements.txt
ENV PYTHONPATH=/usr/src/app

CMD ["fastapi", "run", "backend/main.py"]
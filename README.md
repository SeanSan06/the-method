# The Method
A web site that allows users to create, edit, practice interviews, and apply for jobs all in one place.

## Deploy

App can be deployed via two methods through docker:
- **Production**:
  ```
  docker compose up --build -d
  ```
- **Dev** (with hot-reload):
  ```
  docker compose up --build --watch
  ```
This will run the frontend on `localhost:5173` and the api on `localhost:8000`

Take down the deployment by running:
```
docker compose down -v
```

## Credits

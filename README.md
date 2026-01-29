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
  docker compose up --watch
  ```
both of which will run the app on `localhost:8000`

Take down the deployment by running:
```
docker compose down -v
```

## Credits

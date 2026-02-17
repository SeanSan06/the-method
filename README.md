# The Method
A website that allows users to create, optimize, practice behavioral interviews, and apply for jobs all in one place.

## Tech Stack
<h3 style="margin-bottom: 5px;">Frontend</h3>

- React
- CSS

<h3 style="margin-bottom: 5px;">Backend</h3>

- Python + FastAPI
- PostgreSQL + SQLAlchemy

<h3 style="margin-bottom: 5px;">DevOps</h3>

- GitHub Actions for CI/CD
- Docker


## Deploy the website
### App can be deployed via 4 method(3 with Docker & 1 with npm):
  - (1), (2), & (3): Testing frontend & backend logic, up to preference:
  - (4): Designing just frontend
  * **(1) Detached Mode (Recommended):**\
      Frees up your terminal so you can keep working while the app runs in the background.
      ```
      docker compose up --build -d
      ```
  * **(2) Foreground Mode:**\
      Use this if you need to monitor real-time logs or debug startup errors directly in the terminal.
      ```
      docker compose up --build
      ```
  * **(3) Hot reload:**\
      This will auto update your frontend in 10-20 seconds. Now you do not need to retype the compose up --build command.
      ```
      docker compose up --build --watch
      ```
  * **(4) Run Frontend:**\
      To run just the frontend so you can design the fronted more quickly instead of rebuilding each time run these command:\
      Note: You may need to install npm and other dependencies locally.
      ```
      cd frontend
      ```
      ```
      npm run dev
      ```

  - The website runs on `localhost:5173`
  - The api runs on `localhost:8000`(Nothing will return here, this is now just an API)
  - The docs runs on `localhost:8000/docs`

### App can be taken down using this method:
  * **Take down deployed containers:**\
      Use this when you are finished working or if you need to "hard reset" the application state. The -v flag removes volumes which ensures that the next time you run up, you are starting from a completely fresh, clean slate.
      ```
      docker compose down -v
      ```

## Use Linter
### Linters can help ensure code is styled properly, no unused variables, comments are properly placed, etc.
#### Frontend: There are 3 linters you can run. One is for jsx and the other is for CSS. Alternatively, you can use the 3rd approach which runs both linters at the same time. After running there will either be no errors or errors. If there are errors you must fix them.
- (0) First install all depencies so you can run the linter:
```
    npm ci
```

- (1) Eslint(jsx): This runs the linter for jsx code.
```
    npm run lint
```

- (2) stylelint(CSS): This runs the linter for CSS styling
```
    npm run lint:css
```

- (3) Run both: This will run the previous 2 commands for you.
```
    npm run lint:all
```

## Credits
- GROQ for AI models
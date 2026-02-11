# The Method
A web site that allows users to create, edit, practice interviews, and apply for jobs all in one place.

## Deploy the website
### App can be deployed via 4 method(3 with Docker & 1 with npm):
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

  - This will run the website on `localhost:5173`
  - The api on `localhost:8000`
  - The docs on `localhost:8000/docs`

### App can be taken down using this method:
  * **Take down deployed containers:**\
      Use this when you are finished working or if you need to "hard reset" the application state. The -v flag removes volumes which ensures that the next time you run up, you are starting from a completely fresh, clean slate.
      ```
      docker compose down -v
      ```

## Credits
- GROQ for AI models
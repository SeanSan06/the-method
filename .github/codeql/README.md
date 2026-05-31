# CodeQL Setup for the-method

This folder contains the CodeQL configuration for security and code quality scanning in this repository.

## What each file does

- `.github/workflows/codeql.yml`
  - Defines when scans run and how GitHub Actions executes CodeQL for both frontend and backend.
- `.github/codeql/codeql-config.yml`
  - Defines which folders to include and ignore during analysis for all supported languages in this repo.

## CodeQL workflow breakdown (`.github/workflows/codeql.yml`)

### `name: CodeQL`
The display name in the Actions tab.

### `on.pull_request.branches` and `on.push.branches`
```yaml
on:
  pull_request:
    branches: [main]
  push:
    branches: [main]
```
Runs scans when PRs target `main`, and when commits are pushed to `main`.

### `permissions`
```yaml
permissions:
  actions: read
  contents: read
  security-events: write
```
Uses least-privilege permissions. `security-events: write` is required so CodeQL can upload findings.

### Language setup (current)
```yaml
with:
  languages: javascript-typescript, python
```
This workflow currently runs analysis for both JavaScript/TypeScript (frontend) and Python (backend).

### Checkout step
```yaml
with:
  fetch-depth: 0
```
- `fetch-depth: 0` keeps full git history (safe default for analysis and troubleshooting).

### Initialize CodeQL
```yaml
uses: github/codeql-action/init@v3
with:
  config-file: ./.github/codeql/codeql-config.yml
```
Starts the CodeQL engine and loads `.github/codeql/codeql-config.yml`.

### Analyze
```yaml
uses: github/codeql-action/analyze@v3
```
Executes queries and uploads results to GitHub Security.

## Config breakdown (`.github/codeql/codeql-config.yml`)

### `paths-ignore`
Generated/build/runtime artifact paths and cache folders are excluded to reduce noise and runtime:

```yaml
paths-ignore:
  - '**/node_modules/**'
  - '**/dist/**'
  - '**/build/**'
  - '**/coverage/**'
  - '**/logs/**'
  - '**/.venv/**'
  - '**/__pycache__/**'
  - '**/*.min.js'
  - '**/.pytest_cache/**'
  - '**/.mypy_cache/**'
  - '**/.next/**'
```

## Best practices

1. **Keep trigger scope intentional.**
  Use branch filters (`main`) to control cost and noise.
2. **Keep language list explicit.**
   CodeQL should only review languages with meaningful source code.
3. **Exclude generated/vendor artifacts.**
   Keep caches, dependencies, build outputs, logs, and minified files in `paths-ignore`.
4. **Pin to stable major action versions.**
   `@v3` is the current stable major for CodeQL actions.
5. **Review alerts regularly.**
   Handle high/critical findings made by the CodeQL bot first and solve with documented reasoning for accepting or rejecting the recommended fix.

## Maintenance examples
Keeping this updated as code and language coverage evolve is important. Here are common maintenance changes.

### Keep language scope aligned with this repository
This workflow currently analyzes JavaScript/TypeScript and Python:

```yaml
with:
  languages: javascript-typescript, python
```

Only change this value when this repository adds production code in another supported language.

### Exclude another generated folder
Add a glob to `paths-ignore`, for example:

```yaml
- '**/generated/**'
```

# Reception Register WEBUI

Reception Register WEBUI Reference

# How to setup (development)?

Change .env according to your system setup.

_Sample_: `VITE_PUBLIC_API_URL = http://<HOST>:<PORT>/api`

```bash
npm i --location=project  # Install dependencies
npm run dev  # Runs the development server
```

## How to prepare for production?

You need to prepare a build which would give output in dist folder.

```bash
npm run build  # Generates the build
```

## How to run in production?

- Edit the .env according to requirements.
- Gnerate a build.
- Finally mount the dist folder to the NGINX specified location.

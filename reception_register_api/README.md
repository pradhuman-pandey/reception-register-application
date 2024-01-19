# Reception Register API

Reception Register API Reference

## How to setup (development)?

Change .env according to your system setup.

_Sample_: `MONGODB_URI = mongodb://<USER>:<PASSWORD>@<HOST>:<PORT>/<DATABASE>`

```bash
npm i --location=project  # Install dependencies
npm run dev bootstrap  # Runs the development server
```

## How to prepare for production?

You need to prepare a build which would give output in dist folder.

```bash
npm run build  # Generates the build
```

## How to run in production?

- Edit the .env according to requirements.
- Gnerate a build.
- Finally follow the command below.

```bash
npm start bootstrap
```

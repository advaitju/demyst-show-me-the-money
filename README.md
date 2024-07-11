# demyst-show-me-the-money

## Quick Start

1. You need to have the Xero API image running and port forwarded to 3000.
   - The Node server will check `http://localhost:3000` to fetch data.
1. Ensure port `4000` is free as the backend / frontend will use that to communicate.
1. Next run these commands in the root of this repo.
1. Vite will start its server at `http://localhost:4173`
   - Keep that port free to view the app.

```
npm install
npm run install-deps
npm start
```

You should see the below screen:

![screenshot](screenshot.png)

## Comments

1. **Docker:** I didn't have time to set it up in Docker, as I haven't set up two `npm` process running before.
1. **Tests**: I also didn't have enough time to create tests. I would've mocked fetch requests for the backend and mocked incomplete data for the frontend.

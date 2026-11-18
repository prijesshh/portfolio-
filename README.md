# Prijesh Pradhan: Portfolio

React + Vite single-page portfolio. All content is in `src/data.js`; styles are in `src/styles.css`.

## Run locally
```bash
npm install
npm run dev       # http://localhost:5173
```

## Build
```bash
npm run build     # outputs to dist/
npm run preview   # check the production build
```

## Deploy
- **Netlify / Vercel:** import the repo. Build command `npm run build`, publish directory `dist`.
- **GitHub Pages:** push the repo, then upload the contents of `dist/` (or use the Pages "GitHub Actions" Vite workflow). The build uses relative paths, so it works from a sub-path.

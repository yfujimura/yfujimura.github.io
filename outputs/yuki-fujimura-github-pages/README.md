# Yuki Fujimura — Academic Website

A static academic portfolio built with Next.js and designed for GitHub Pages.

## Local preview

```bash
pnpm install
pnpm run dev
```

Open `http://localhost:3000`.

## Publish with GitHub Pages

1. Create a GitHub repository and push this project to its `main` branch.
2. In the repository, open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. The included workflow will build and publish the site automatically.

If this is a project site (for example `yfujimura.github.io/profile`), add `basePath: "/profile"` and `assetPrefix: "/profile/"` to `next.config.ts` before publishing. For the user site repository `yfujimura.github.io`, no base path is needed.

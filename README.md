# Yuki Fujimura — Academic Website

This website uses only HTML and CSS. Node.js and package installation are not required.

## Files

- `index.html`: all website content
- `publication.html`: publication list
- `academic-activities.html`: committee and peer-review activities
- `index.css`: colors and layout
- `assets/`: images and social icons

## Local preview

Double-click `index.html` to open it in a browser.

If images do not appear correctly, open Terminal in this folder and run:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Publish with GitHub Pages

1. Push these files to the `main` branch of the `yfujimura.github.io` repository.
2. Open **Settings → Pages** in GitHub.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select `main` and `/ (root)`, then click **Save**.

Updates are simple: edit `index.html` or `index.css`, commit, and push.

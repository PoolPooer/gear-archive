# Gear Archive

A small static personal music gear archive.

## Run locally

You can simply open `index.html` in a browser.

For a local web server, from this directory run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Edit your gear

Most of the collection data is in `data.js`.

Add or edit objects in the `gear` array. The Fender Cyclone HH is the first fully populated example and includes acquisition details, current/original setup, modification history, maintenance, and financial records.

## GitHub Pages

1. Create a new GitHub repository.
2. Copy these files into the repository root.
3. Commit and push to the `main` branch.
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select `main` and `/ (root)` and save.

Because this project uses plain relative HTML/CSS/JS paths, it works well from a normal GitHub Pages project URL.

## Suggested next steps

- Move each gear item into its own JSON/YAML file once the collection grows.
- Add real instrument photography.
- Add Pedals, Amps, Microphones, Recording Gear, Cables, and Accessories categories.
- Add sold gear and lifetime expenditure views.
- Add automatic totals and optional EUR conversion for historical USD/GBP purchases.

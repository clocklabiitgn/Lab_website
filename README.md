# CLOCK Lab website

The public website for the **Computational Lab of Circadian Komplexes (CLOCK)**,
Biological Sciences & Engineering, IIT Gandhinagar.

It is a plain static website (no build step, no server) hosted for free on
**GitHub Pages**. All of the *content* — people, publications, research themes,
news, and the home/contact text — is edited in a **Google Sheet**, so anyone on
the team can keep it up to date without touching code.

👉 **To edit the site, read [`EDITING_GUIDE.md`](EDITING_GUIDE.md).** It is written
for non-programmers and has click-by-click steps.

---

## What is where

| File / folder | What it is | Do you edit it? |
|---|---|---|
| `index.html` | The page structure | No |
| `site.js` | The site engine (animations, layout, Google-Sheets reader) | No |
| `config.js` | Holds your Google Sheet ID (one line) | **Once**, at setup |
| `favicon.svg` | The little clock icon in the browser tab | No |
| `google-sheet-seed/` | Starter spreadsheet — `CLOCKlab_website_content.xlsx` (all 6 tabs, one file) + individual CSVs as a backup | Used once at setup |
| `images/` | Member photos & figures go here | Ongoing |
| `EDITING_GUIDE.md` | Plain-language instructions | Read it |

## How it works (in one paragraph)

When someone opens the site, it first shows the content built into `site.js`
(so it always works). If a Google Sheet ID has been set in `config.js`, it then
fetches the latest content from that sheet and updates the page. Edit the sheet →
refresh the site → changes appear. No re-deploying, no code.

## Setup checklist (details in the guide)

1. Upload these files to the `Lab_website` repository.
2. Turn on GitHub Pages (Settings → Pages → deploy from `main`).
3. Upload `google-sheet-seed/CLOCKlab_website_content.xlsx` to Google Drive,
   open it as a Google Sheet, share it as "Anyone with the link can view",
   and paste its ID into `config.js`.

The site will be live at:
`https://clocklabiitgn.github.io/Lab_website/`

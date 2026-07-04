# Editing guide — CLOCK Lab website

This guide is for **everyone on the team**, no coding needed. You update a
**Google Sheet**; the website follows. Keep this open in one tab and your
sheet in another.

There are three parts:
- **Part A — First-time setup** (done once, by whoever owns the repo/Google account)
- **Part B — Everyday editing** (add a person, a paper, news, etc.)
- **Part C — Adding photos**

---

## Part A — First-time setup (once)

### A1. Put the website files online (GitHub)

1. Go to the repository: **github.com/clocklabiitgn/Lab_website**
2. Click **Add file → Upload files**.
3. Drag in everything from the `Lab_website` folder you were given —
   `index.html`, `site.js`, `config.js`, `favicon.svg`, `README.md`,
   `EDITING_GUIDE.md`, and the `google-sheet-seed` folder.
4. Scroll down, click **Commit changes**.

### A2. Turn on GitHub Pages (makes it a live website)

1. In the repository, click **Settings** (top menu).
2. In the left menu, click **Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Set **Branch** to `main` and folder to `/ (root)`. Click **Save**.
5. Wait ~1 minute, refresh. GitHub shows the live link, which will be:
   **https://clocklabiitgn.github.io/Lab_website/**

At this point the site is already live with the built-in content. ✅
The next steps connect it to a Google Sheet so you can edit without GitHub.

### A3. Create the Google Sheet from the starter file

The `google-sheet-seed/` folder has **one ready-to-import file**,
`CLOCKlab_website_content.xlsx`, with all 6 tabs already filled in with the
current site content.

1. Go to **drive.google.com**, click **New → File upload**, and upload
   `CLOCKlab_website_content.xlsx`.
2. Once uploaded, double-click it in Drive — it opens in Google Sheets
   automatically (or right-click → **Open with → Google Sheets**).
3. That's it — you'll see all 6 tabs already there: `Home`, `Research`,
   `Members`, `Alumni`, `Publications`, `News`. Rename the file at the top
   to something like *CLOCK Lab — Website Content* if you like.
   ⚠️ Don't rename the **tabs** themselves — the site looks for those exact names.

   *(The individual CSV files in that folder are the same content one tab at
   a time, kept only as a backup import method if you ever need it.)*

### A4. Share the sheet so the website can read it

1. Click the **Share** button (top right).
2. Under **General access**, change to **Anyone with the link**.
3. Set the role to **Viewer**. Click **Done**.
   (This only lets people *read* it; only people you invite can edit.)

### A5. Connect the sheet to the site

1. Look at your sheet's web address. It looks like:
   `https://docs.google.com/spreadsheets/d/`**`1AbCdEf...long...XyZ`**`/edit#gid=0`
   The **bold** part between `/d/` and `/edit` is the **Sheet ID**. Copy it.
2. In the GitHub repo, open **`config.js`**, click the **pencil** (Edit) icon.
3. Put the ID between the quotes so it reads:
   `sheetId: "1AbCdEf...long...XyZ"`
4. Click **Commit changes**.

Done. Open the live site, wait a moment, and it now shows content from your
sheet. From now on, **you only ever edit the Google Sheet.**

---

## Part B — Everyday editing (the part you'll actually use)

Open your Google Sheet. Edit the relevant tab. Save happens automatically.
Refresh the website after a few seconds to see changes.

### Add or edit a group member → **Members** tab
Fill one row per person:

| Column | What to put |
|---|---|
| **Name** | Full name |
| **Category** | `PhD Student`, `M.Tech Student`, `Postdoc`, or `Intern` |
| **Research Area** | Short phrase (used if Bio is blank) |
| **Bio** | 1–2 sentences shown on their card |
| **Photo** | Leave blank for now, or a photo link (see Part C) |
| **LinkedIn** | Full link, or blank |
| **Google Scholar** | Full link, or blank |
| **Github** | Full link, or blank |
| **Themes** | Any of `clock`, `structural`, `network` — comma-separated |

> **The Themes column is what links a person to research topics and papers.**
> Use only these three words: `clock`, `structural`, `network`.
> Example: `clock, structural`

**A new Postdoc appears automatically:** just add a row with Category `Postdoc`,
and a "Postdoctoral Researchers" heading with their card shows up on the site.
The same is true for Interns.

### Add a publication → **Publications** tab
One row per paper: **Year, Title, Authors, Journal, Link, Themes**.
- **Link**: the DOI/journal URL (e.g. `https://doi.org/...`). If filled, the
  paper title becomes clickable. Leave blank if none.
- **Themes**: same three words (`clock`, `structural`, `network`), comma-separated.

### Post news → **News** tab
One row per item: **Date, Title, Link**. The three most recent rows show as
pills on the home page. (Newest should be at the top.)

### Edit research topics → **Research** tab
Three rows by default. Columns: **Key, Title, Label, Description, Image**.
- **Key** is the internal id (`clock` / `structural` / `network`) — it must match
  the words used in the Themes columns. Don't rename keys unless you also update
  every Themes cell that uses them.
- **Label** is the short name shown on the little tag chips.
- **Image** is a picture link for the card (see Part C).

### Alumni → **Alumni** tab
One name per row in the **Name** column.

### Home page, PI details & contact → **Home** tab
This tab is a simple **Field / Value** list. Change the **Value** cell next to:
- `heroIntro` — the paragraph under the title
- `piName`, `piRole`, `piBio`, `piPhoto`, `piScholar`, `piEmail` — the PI block
- `joinText` — the "Join the group" paragraph
- `hiringText` — the orange "We're hiring" line (clear it to hide that box)
- `contactAddress`, `contactEmail` — the contact section
- `accentColor` — the highlight colour (a hex code like `#7fd8c8`)

Don't rename the words in the **Field** column — only edit **Value**.

---

## Part C — Adding photos

Photos need a public web **link**. Two easy ways:

**Option 1 — Put images in the GitHub repo (recommended)**
1. In the repo, open the `images` folder (create it with **Add file → Create new
   file**, type `images/placeholder.txt`, commit — or just upload into a new
   folder).
2. **Add file → Upload files**, drop in the photo (e.g. `shashank.jpg`).
3. In the sheet's Photo cell, write the relative link: `images/shashank.jpg`

**Option 2 — Any public image link**
Paste a direct image URL (must end in `.jpg`/`.png`) into the Photo cell.
Google Drive "share" links do **not** work as image links.

If the Photo cell is blank, the site shows a neat circle with the person's
initials — so it always looks tidy.

---

## Troubleshooting

- **Changes not showing?** Wait ~10 seconds and hard-refresh (Ctrl/Cmd + Shift + R).
  Google caches sheets briefly.
- **A whole section went blank?** You probably renamed a tab or a heading.
  Tab names must be exactly `Home`, `Research`, `Members`, `Alumni`,
  `Publications`, `News`; and column headers must match this guide.
  If in doubt, re-import that one CSV from `google-sheet-seed/`.
- **The site still works even if the sheet breaks** — it falls back to the
  built-in content, so the page is never empty.
- **Themes/links between people and papers not working?** Check the Themes cells
  use only `clock`, `structural`, `network`.

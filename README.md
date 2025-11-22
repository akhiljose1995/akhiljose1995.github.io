# Akhil Jose — Portfolio (Multi-page)


Static multi-page portfolio template (dark theme). Edit HTML files, replace `assets` and push to GitHub.


## Deploy
1. Create a new GitHub repository `portfolio-akhil`.
2. Add files and push to `main` branch.
3. Enable GitHub Pages: Settings → Pages → Source = `main` branch → `/ (root)`.


## Editables
- `index.html`, `about.html`, `projects.html`, `contact.html` (content)
- `css/styles.css` (colors & layout)
- `assets/*` (images & resume)


## Notes
- To switch theme to light: edit `:root` variables in `css/styles.css`.
- Replace `your-email@example.com` and GitHub/LinkedIn links.

portfolio-akhil/ # root folder
├─ index.html # Home
├─ about.html # About / Resume
├─ projects.html # Projects gallery
├─ contact.html # Contact
├─ css/
│ └─ styles.css # Main stylesheet (dark theme)
├─ js/
│ └─ main.js # Optional JS (mobile menu, small interactions)
├─ assets/
│ ├─ avatar.jpg # replace with your photo
│ └─ projects/ # screenshots for projects
│   ├─ trading.png
│   ├─ rag_chat.png
│   └─ fastapi_deploy.png
└─ README.md
```


---


## Usage notes
- Everything is static HTML/CSS/JS and ready for **GitHub Pages**.
- To change displayed name, role, theme, or sections: edit `index.html` and `css/styles.css` (there are comments to help).
- Resume: replace `assets/resume.pdf` or update the `a` tag for the resume download.


---


---
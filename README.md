# Nithesh Yadav — Personal Developer Portfolio

A sleek, modern, single-page personal portfolio website for **Nithesh Yadav**, Information Technology undergraduate at Army Institute of Technology, Pune (expected 2028), targeting Software Engineering Internships.

Built with **pure HTML, CSS, and Vanilla JavaScript** — 0 build steps, 0 dependencies, zero complex framework tooling.

---

## 📁 File Structure

```text
nithesh-yadav-portfolio/
├── index.html         # Semantic HTML structure & section anchors
├── style.css          # Design system, CSS variables, theme toggle & responsive grid
├── content.js         # ONE file holding ALL portfolio text data & content
├── script.js          # DOM rendering engine, theme switcher, filters & scroll animations
└── README.md          # Project guide & deployment instructions
```

---

## ⚡ How to Edit Content (`content.js`)

**You never need to edit HTML or CSS to update your portfolio!** Simply open `content.js` in any code editor (or text editor) and edit the text inside the quotes `""`.

### 1. Update Bio / Personal Info
Locate `personal` in `content.js`:
```js
personal: {
  name: "Nithesh Yadav",
  title: "Software Engineering Student & Full-Stack Developer",
  statusBadge: "Open to Software Engineering Internships",
  resumeUrl: "resume.pdf", // Link to your PDF file
  ...
}
```

### 2. Add a New Project
Copy any project object in `projects` array and paste it:
```js
{
  id: "my-new-project",
  title: "My Awesome App",
  subtitle: "Brief sub-description",
  featured: true,
  description: "Detailed description of what you built...",
  tags: ["Java", "Spring Boot", "React"],
  github: "https://github.com/nitydv/my-new-project",
  demo: null
}
```

### 3. Add a Skill or Achievement
Add strings to `items` under `skills` or objects under `achievements` and `leadership`.

---

## 🚀 How to Run Locally

Double-click `index.html` or open it directly in any browser (Chrome, Edge, Firefox, Safari).

If using VS Code, right-click `index.html` and select **"Open with Live Server"**.

---

## 🌐 How to Deploy to GitHub Pages (Free Hosting)

1. Create a public repository on GitHub named `portfolio` (or `nitydv.github.io`).
2. Push all files in this directory to your repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of portfolio website"
   git branch -M main
   git remote add origin https://github.com/nitydv/portfolio.git
   git push -u origin main
   ```
3. In your GitHub repository settings:
   - Go to **Settings** -> **Pages**.
   - Under **Source**, select `Deploy from a branch`.
   - Choose `main` branch and `/ (root)` folder.
   - Click **Save**.
4. Your website will be live at `https://nitydv.github.io/portfolio` in 1–2 minutes!

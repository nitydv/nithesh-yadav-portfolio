# 🌐 Nithesh Yadav | Personal Developer Portfolio

[![Portfolio Status](https://img.shields.io/badge/Status-Active-success.svg)](#) 
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](#)
[![Tech Stack](https://img.shields.io/badge/Tech-Vanilla_JS_%7C_Three.js-black)](#)

A sleek, modern, single-page personal developer portfolio built for **Nithesh Yadav**, Information Technology undergraduate at Army Institute of Technology, Pune. Designed with an "Apple Liquid Glass" aesthetic, this portfolio targets Software Engineering Internships and showcases full-stack projects, leadership roles, and technical skills.

Built entirely with **Vanilla HTML, CSS, and JavaScript**—featuring zero build steps, zero complex framework tooling, and a lightweight 3D WebGL integration.

---

## ✨ Key Features

*   **Apple Liquid Glass UI**: High-contrast, dual-theme (Dark/Light) glassmorphism design with silky CSS transition physics.
*   **Three.js 3D WebGL Engine**: Interactive, multi-color 3D liquid balloons that react to cursor movement using LERP physics for buttery-smooth parallax.
*   **Dynamic Theme Material Sync**: Seamless switching between Luminous Ice Blue (Light) and Electric Cyan/Magenta (Dark) themes, dynamically updating both DOM elements and WebGL materials.
*   **Zero-Touch HTML**: The entire DOM is hydrated dynamically. You never need to touch `index.html` to update your resume, projects, or bio.
*   **Interactive 3D Tilt Cards**: Project and skill cards feature 3D parallax tilt physics with a glass cursor glow trail.

---

## 📂 File Architecture

The project is designed to be as simple and maintainable as possible.

```text
nithesh-yadav-portfolio/
│
├── index.html         # Semantic HTML structure & section anchors
├── style.css          # Design system, CSS variables, theme toggle & responsive grid
├── content.js         # ONE file holding ALL portfolio text data & content
├── script.js          # DOM rendering engine, theme switcher, filters & scroll animations
├── profile.jpg        # Hero section avatar image
└── README.md          # Project guide & deployment instructions

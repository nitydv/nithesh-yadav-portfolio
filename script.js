
document.addEventListener("DOMContentLoaded", () => {
  const content = window.portfolioContent;

  if (!content) {
    console.error("Portfolio content not found. Ensure content.js is loaded before script.js.");
    return;
  }


  let updateThreeThemeColors = null;

  function initThreeLiquidCanvas() {
    const canvas = document.getElementById("liquid-canvas");
    if (!canvas || typeof THREE === "undefined") return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 16;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const liquidGroup = new THREE.Group();
    scene.add(liquidGroup);

    const darkBalloonColors = {
      balloon1: { color: 0x00f2fe, emissive: 0x0284c7 }, 
      balloon2: { color: 0xf43f5e, emissive: 0xa855f7 }, 
      balloon3: { color: 0xfbbf24, emissive: 0xd97706 }  
    };

    const lightBalloonColors = {
      balloon1: { color: 0x0284c7, emissive: 0x0369a1 }, 
      balloon2: { color: 0xe11d48, emissive: 0x9333ea }, 
      balloon3: { color: 0xd97706, emissive: 0xb45309 }  
    };


    const geo1 = new THREE.IcosahedronGeometry(4.8, 5);
    const mat1 = new THREE.MeshPhysicalMaterial({
      color: darkBalloonColors.balloon1.color,
      emissive: darkBalloonColors.balloon1.emissive,
      emissiveIntensity: 0.08,
      roughness: 0.3,
      metalness: 0.05,
      transmission: 0.35,
      transparent: true,
      opacity: 0.35,
      ior: 1.2,
      clearcoat: 0.5
    });
    const balloon1 = new THREE.Mesh(geo1, mat1);
    balloon1.position.set(4.5, 2.5, -8);
    liquidGroup.add(balloon1);

    const geo2 = new THREE.IcosahedronGeometry(3.5, 5);
    const mat2 = new THREE.MeshPhysicalMaterial({
      color: darkBalloonColors.balloon2.color,
      emissive: darkBalloonColors.balloon2.emissive,
      emissiveIntensity: 0.08,
      roughness: 0.35,
      metalness: 0.05,
      transmission: 0.35,
      transparent: true,
      opacity: 0.35,
      ior: 1.2,
      clearcoat: 0.5
    });
    const balloon2 = new THREE.Mesh(geo2, mat2);
    balloon2.position.set(-5.5, -3, -10);
    liquidGroup.add(balloon2);

    const geo3 = new THREE.IcosahedronGeometry(2.8, 5);
    const mat3 = new THREE.MeshPhysicalMaterial({
      color: darkBalloonColors.balloon3.color,
      emissive: darkBalloonColors.balloon3.emissive,
      emissiveIntensity: 0.06,
      roughness: 0.35,
      metalness: 0.05,
      transmission: 0.35,
      transparent: true,
      opacity: 0.35,
      ior: 1.2,
      clearcoat: 0.5
    });
    const balloon3 = new THREE.Mesh(geo3, mat3);
    balloon3.position.set(2, -4.5, -12);
    liquidGroup.add(balloon3);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const light1 = new THREE.PointLight(0x00f2fe, 3.5, 60);
    light1.position.set(12, 12, 12);
    scene.add(light1);

    const light2 = new THREE.PointLight(0xf43f5e, 3.5, 60);
    light2.position.set(-12, -12, 12);
    scene.add(light2);

    const light3 = new THREE.PointLight(0xfbbf24, 2.5, 50);
    light3.position.set(0, 15, -10);
    scene.add(light3);

    updateThreeThemeColors = (theme) => {
      const palette = theme === "light" ? lightBalloonColors : darkBalloonColors;

      mat1.color.setHex(palette.balloon1.color);
      mat1.emissive.setHex(palette.balloon1.emissive);

      mat2.color.setHex(palette.balloon2.color);
      mat2.emissive.setHex(palette.balloon2.emissive);

      mat3.color.setHex(palette.balloon3.color);
      mat3.emissive.setHex(palette.balloon3.emissive);

      light1.color.setHex(palette.balloon1.color);
      light2.color.setHex(palette.balloon2.color);
      light3.color.setHex(palette.balloon3.color);
    };

    const initialTheme = document.documentElement.getAttribute("data-theme") || "dark";
    updateThreeThemeColors(initialTheme);

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    window.addEventListener("mousemove", (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    const pos1 = geo1.attributes.position;
    const initialPos1 = pos1.clone();

    const clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      liquidGroup.rotation.y = time * 0.14 + targetX * 0.4;
      liquidGroup.rotation.x = time * 0.1 - targetY * 0.4;

      for (let i = 0; i < pos1.count; i++) {
        const u = initialPos1.getX(i);
        const v = initialPos1.getY(i);
        const w = initialPos1.getZ(i);

        const dist = Math.sqrt(u * u + v * v + w * w);
        const wave = Math.sin(dist * 2.2 - time * 1.8) * 0.3;

        pos1.setXYZ(i, u + (u / dist) * wave, v + (v / dist) * wave, w + (w / dist) * wave);
      }
      pos1.needsUpdate = true;

      balloon2.position.y = -3 + Math.sin(time * 0.9) * 0.7;
      balloon2.position.x = -5.5 + Math.cos(time * 0.7) * 0.6;

      balloon3.position.y = -4.5 + Math.cos(time * 1.1) * 0.5;
      balloon3.position.x = 2 + Math.sin(time * 0.8) * 0.6;

      renderer.render(scene, camera);
    }

    animate();

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  initThreeLiquidCanvas();


  function initCursorGlowAnd3DTilt() {

    let cursorGlow = document.querySelector(".cursor-glow");
    if (!cursorGlow) {
      cursorGlow = document.createElement("div");
      cursorGlow.className = "cursor-glow";
      document.body.appendChild(cursorGlow);
    }

    window.addEventListener("mousemove", (e) => {
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;
    });


    function attach3DTilt(card) {
      let reqId = null;
      let targetX = 0, targetY = 0;
      let currentX = 0, currentY = 0;
      let isHovered = false;

      function updateTilt() {
        if (!isHovered && Math.abs(currentX) < 0.01 && Math.abs(currentY) < 0.01) {
          card.style.transform = "";
          reqId = null;
          return;
        }
        currentX += (targetX - currentX) * 0.12;
        currentY += (targetY - currentY) * 0.12;
        card.style.transform = `perspective(1000px) rotateX(${currentX.toFixed(2)}deg) rotateY(${currentY.toFixed(2)}deg) translateY(${isHovered ? -5 : 0}px)`;
        reqId = requestAnimationFrame(updateTilt);
      }

      card.addEventListener("mouseenter", () => {
        isHovered = true;
        if (!reqId) reqId = requestAnimationFrame(updateTilt);
      });

      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        targetX = ((y - centerY) / centerY) * -4;
        targetY = ((x - centerX) / centerX) * 4;
      });

      card.addEventListener("mouseleave", () => {
        isHovered = false;
        targetX = 0;
        targetY = 0;
      });
    }

    document.querySelectorAll(".glass-card").forEach(attach3DTilt);
  }




  const icons = {
    github: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
    linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
    instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
    award: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
    mail: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    phone: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    external: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
    folder: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L8.6 3.3A2 2 0 0 0 6.9 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>`,
    code: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    layout: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
    cloud: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
    database: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    tool: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    trophy: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`,
    checkCircle: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`
  };



  const { personal, contact: contactInfo } = content;

  const statusBadge = document.getElementById("hero-status-badge");
  if (statusBadge) statusBadge.textContent = personal.statusBadge;

  const heroName = document.getElementById("hero-name");
  if (heroName) heroName.textContent = personal.name;

  const handlePill = document.querySelector(".handle-pill");
  if (handlePill) handlePill.textContent = personal.handle || "@nitydv";

  const heroTitle = document.getElementById("hero-title");
  if (heroTitle && personal.title) {
    heroTitle.innerHTML = personal.title;
  }

  const heroTagline = document.getElementById("hero-tagline");
  if (heroTagline) heroTagline.textContent = personal.tagline;

  const resumeButtons = [document.getElementById("nav-resume-btn"), document.getElementById("hero-resume-btn")];
  resumeButtons.forEach((btn) => {
    if (!btn) return;
    const url = personal.resumeUrl || "resume.pdf";
    btn.setAttribute("href", url);
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.open(url, "_blank");
    });
  });



  const heroSocials = document.getElementById("hero-socials");
  if (heroSocials && contactInfo.socials) {
    heroSocials.innerHTML = contactInfo.socials
      .map(
        (s) => `
        <a href="${s.url}" class="social-pill" target="_blank" rel="noopener noreferrer" aria-label="${s.name}">
          ${icons[s.icon] || icons.external}
          <span>${s.name}</span>
        </a>
      `
      )
      .join("");
  }



  const aboutContainer = document.getElementById("about-paragraphs");
  if (aboutContainer && personal.bio) {
    aboutContainer.innerHTML = personal.bio.map((p) => `<p>${p}</p>`).join("");
  }

  const heroAvatar = document.getElementById("hero-avatar-img");
  if (heroAvatar) {
    const avatarSrc = personal.avatarUrl || "profile.jpg";
    heroAvatar.src = avatarSrc;
    heroAvatar.onerror = () => {

      heroAvatar.src = "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 fill=%22%230284c7%22/><text x=%2250%25%22 y=%2257%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22sans-serif%22 font-weight=%22bold%22 font-size=%2238%22 fill=%22%23ffffff%22>NY</text></svg>";
    };
  }


  const eduContainer = document.getElementById("education-card");
  const { education } = content;
  if (eduContainer && education) {
    eduContainer.innerHTML = `
      <div class="edu-header">
        <div>
          <h3 class="edu-degree">${education.degree}</h3>
          <p class="edu-institution">${education.institution}</p>
        </div>
        <span class="edu-timeline">${education.timeline}</span>
      </div>
      <div class="edu-metrics">
        <div class="metric-item">Current CGPA: <strong>${education.cgpa}</strong></div>
        <div class="metric-item">Semesters: <strong>${education.semesters}</strong></div>
      </div>
      <div class="edu-coursework">
        <p class="coursework-title">Relevant Technical Coursework:</p>
        <div class="coursework-tags">
          ${education.coursework.map((c) => `<span class="tech-tag">${c}</span>`).join("")}
        </div>
      </div>
    `;
  }


  const leadershipContainer = document.getElementById("leadership-grid");
  if (leadershipContainer && content.leadership) {
    leadershipContainer.innerHTML = content.leadership
      .map(
        (item) => `
        <div class="glass-card leadership-card scroll-reveal">
          <div>
            <span class="card-badge">${item.badge}</span>
            <h3 class="leadership-title">${item.title}</h3>
            <p class="leadership-org">${item.organization} &bull; ${item.period}</p>
            <p class="leadership-desc">${item.description}</p>
          </div>
          <div class="leadership-highlights">
            ${item.highlights.map((h) => `<span class="tech-tag">${h}</span>`).join("")}
          </div>
        </div>
      `
      )
      .join("");
  }


  const skillsContainer = document.getElementById("skills-grid");
  if (skillsContainer && content.skills) {
    skillsContainer.innerHTML = content.skills
      .map(
        (cat) => `
        <div class="glass-card skill-card scroll-reveal">
          <h3 class="skill-title">
            ${icons[cat.icon] || icons.code}
            ${cat.category}
          </h3>
          <div class="skills-pill-list">
            ${cat.items.map((skill) => `<span class="skill-pill">${skill}</span>`).join("")}
          </div>
        </div>
      `
      )
      .join("");
  }


  const projectsContainer = document.getElementById("projects-grid");
  
  function renderProjects(filter = "all") {
    if (!projectsContainer || !content.projects) return;

    let filteredProjects = content.projects;
    if (filter === "featured") {
      filteredProjects = content.projects.filter((p) => p.featured);
    } else if (filter !== "all") {
      filteredProjects = content.projects.filter((p) =>
        p.tags.some((tag) => tag.toLowerCase().includes(filter.toLowerCase()))
      );
    }

    projectsContainer.innerHTML = filteredProjects
      .map(
        (proj) => `
        <div class="glass-card project-card scroll-reveal" data-id="${proj.id}">
          <div class="project-card-header">
            <div class="folder-icon">${icons.folder}</div>
            <div class="project-links">
              ${
                proj.github
                  ? `<a href="${proj.github}" class="project-link-icon" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">${icons.github}</a>`
                  : ""
              }
              ${
                proj.demo
                  ? `<a href="${proj.demo}" class="project-link-icon" target="_blank" rel="noopener noreferrer" aria-label="Live Demo">${icons.external}</a>`
                  : ""
              }
            </div>
          </div>
          <div>
            <h3 class="project-title">${proj.title}</h3>
            <p class="project-subtitle">${proj.subtitle}</p>
            <p class="project-description">${proj.description}</p>
          </div>
          <div class="project-tags">
            ${proj.tags.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
          </div>
        </div>
      `
      )
      .join("");

    initCursorGlowAnd3DTilt();
    observeScrollReveal();
  }

  renderProjects("all");

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filterValue = btn.getAttribute("data-filter");
      renderProjects(filterValue);
    });
  });


  const achievementsContainer = document.getElementById("achievements-grid");
  if (achievementsContainer && content.achievements) {
    achievementsContainer.innerHTML = content.achievements
      .map(
        (ach) => `
        <div class="glass-card achievement-card scroll-reveal">
          <div class="achievement-icon-box">
            ${icons[ach.icon] || icons.trophy}
          </div>
          <div class="achievement-content">
            <span class="achievement-badge">${ach.badge}</span>
            <h3 class="achievement-title">${ach.title}</h3>
            <p class="achievement-desc">${ach.description}</p>
          </div>
        </div>
      `
      )
      .join("");
  }

  const volunteeringContainer = document.getElementById("volunteering-grid");
  if (volunteeringContainer && content.campusAndVolunteering) {
    volunteeringContainer.innerHTML = content.campusAndVolunteering
      .map(
        (v) => `
        <div class="volunteer-card scroll-reveal">
          <h4 class="volunteer-role">${v.role}</h4>
          <p class="volunteer-org">${v.organization}</p>
          <p class="volunteer-details">${v.details}</p>
        </div>
      `
      )
      .join("");
  }


  const contactDetailsBar = document.getElementById("contact-details-bar");
  if (contactDetailsBar) {
    contactDetailsBar.innerHTML = `
      <div class="contact-item">
        ${icons.mail} ${contactInfo.email}
      </div>
    `;
  }

  const footerSocials = document.getElementById("footer-socials");
  if (footerSocials && contactInfo.socials) {
    footerSocials.innerHTML = contactInfo.socials
      .map(
        (s) => `
        <a href="${s.url}" class="social-link" target="_blank" rel="noopener noreferrer" aria-label="${s.name}" title="${s.name}">
          ${icons[s.icon] || icons.external}
        </a>
      `
      )
      .join("");
  }

  const currentYearSpan = document.getElementById("current-year");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }


  const themeToggleBtn = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;
  const savedTheme = localStorage.getItem("nithesh-portfolio-theme") || "dark";
  htmlElement.setAttribute("data-theme", savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = htmlElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      htmlElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("nithesh-portfolio-theme", newTheme);

      if (updateThreeThemeColors) {
        updateThreeThemeColors(newTheme);
      }
    });
  }


  const mobileToggleBtn = document.getElementById("mobile-menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (mobileToggleBtn && navMenu) {
    mobileToggleBtn.addEventListener("click", () => {
      const isActive = navMenu.classList.contains("is-active");
      if (isActive) {
        navMenu.classList.remove("is-active");
        mobileToggleBtn.classList.remove("is-active");
        mobileToggleBtn.setAttribute("aria-expanded", "false");
      } else {
        navMenu.classList.add("is-active");
        mobileToggleBtn.classList.add("is-active");
        mobileToggleBtn.setAttribute("aria-expanded", "true");
      }
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("is-active");
        mobileToggleBtn.classList.remove("is-active");
        mobileToggleBtn.setAttribute("aria-expanded", "false");
      });
    });
  }


  function observeScrollReveal() {
    const revealElements = document.querySelectorAll(
      ".scroll-reveal, .fade-in, .glass-card, .project-card, .education-card, .leadership-card, .volunteer-card, .achievement-card, .stat-card, .skill-card, .section-heading"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    revealElements.forEach((el) => {
      el.classList.add("scroll-reveal");
      observer.observe(el);
    });
  }

  observeScrollReveal();
  initCursorGlowAnd3DTilt();


  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    let scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(`.glass-nav a[href*=${sectionId}]`)
          ?.classList.add("active");
      } else {
        document
          .querySelector(`.glass-nav a[href*=${sectionId}]`)
          ?.classList.remove("active");
      }
    });
  });


  const copyEmailBtn = document.getElementById("copy-email-btn");
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      const email = copyEmailBtn.getAttribute("data-email");
      if (navigator.clipboard && email) {
        navigator.clipboard.writeText(email).then(() => {
          showToast("Email address copied to clipboard!");
        });
      }
    });
  }

  function showToast(message) {
    let toast = document.querySelector(".toast-notification");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast-notification";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }
});

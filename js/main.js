// ===== Dynamic Year in Footer =====
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ===== Mobile Navigation Toggle =====
const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true" || false;
    navToggle.setAttribute("aria-expanded", !expanded);
    navList.classList.toggle("open");
  });
}

// ===== Typing Animation (only if elements exist) =====
const typedText = document.getElementById("typed-text");
const cursor = document.querySelector(".cursor");

if (typedText && cursor) {
  const phrases = [
    "Building ML systems...",
    "Automating trading workflows...",
    "Deploying FastAPI services...",
    "Designing RAG-powered apps..."
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let currentPhrase = "";
  let isDeleting = false;

  function type() {
    currentPhrase = phrases[phraseIndex];
    if (!isDeleting) {
      typedText.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, 1500); // pause before deleting
        return;
      }
    } else {
      typedText.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }
    setTimeout(type, isDeleting ? 50 : 100);
  }

  type();
}

// ===== Background Canvas Animation =====
const canvas = document.getElementById("bg-canvas");
if (canvas) {
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  let particles = [];
  const numParticles = 60;

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.radius = Math.random() * 2 + 1;
      this.dx = (Math.random() - 0.5) * 1.5;
      this.dy = (Math.random() - 0.5) * 1.5;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = "#00bcd4";
      ctx.fill();
    }
    update() {
      this.x += this.dx;
      this.y += this.dy;
      if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.dy *= -1;
      this.draw();
    }
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => p.update());
    requestAnimationFrame(animate);
  }

  initParticles();
  animate();
}

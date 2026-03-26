// ─── SCROLL REVEAL ───
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

// ─── ACTIVE NAV HIGHLIGHT ON SCROLL ───
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });

  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--cyan)' : '';
  });
});

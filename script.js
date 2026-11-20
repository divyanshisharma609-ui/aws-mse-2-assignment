/* =============================================
   script.js — Divyanshi Sharma Portfolio
   ============================================= */

(function () {
  'use strict';

  // ── Navbar scroll effect ──
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // ── Mobile menu toggle ──
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // close menu on link click
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // ── Active nav link on scroll ──
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');

  function highlightNav() {
    const scrollY = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navItems.forEach((a) => a.classList.remove('active'));
        const active = document.querySelector('.nav-links a[href="#' + id + '"]');
        if (active) active.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', highlightNav);
  highlightNav();

  // ── Scroll-reveal animation ──
  const revealTargets = document.querySelectorAll(
    '.skill-card, .project-card, .detail-card, .about-text, .beyond-text, .beyond-visual, .contact-form, .section-title'
  );

  revealTargets.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  revealTargets.forEach((el) => observer.observe(el));

  // ── Stagger cards ──
  document.querySelectorAll('.skills-grid, .projects-grid, .about-details').forEach((grid) => {
    Array.from(grid.children).forEach((card, i) => {
      card.style.transitionDelay = i * 0.1 + 's';
    });
  });

  // ── Contact form handler ──
  window.handleSubmit = function (e) {
    e.preventDefault();
    const form = document.getElementById('contact-form');
    const success = document.getElementById('form-success');

    var inputs = form.querySelectorAll('input, textarea');
    var valid = true;
    inputs.forEach(function (input) {
      if (!input.value.trim()) {
        valid = false;
        input.style.borderColor = '#c0392b';
      } else {
        input.style.borderColor = '';
      }
    });

    if (!valid) return false;

    form.classList.add('hidden');
    success.classList.remove('hidden');
    return false;
  };

  // ── Smooth-scroll ──
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();

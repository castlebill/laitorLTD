/* ══════════════════════════════════
   LAITOR INVESTMENT LTD — JS
══════════════════════════════════ */

// ── Header sticky ──────────────────
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('stuck', window.scrollY > 50);
}, { passive: true });

// ── Burger menu ────────────────────
const burger = document.getElementById('burger');
const navMobile = document.getElementById('navMobile');

burger.addEventListener('click', () => {
  const open = navMobile.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
  const spans = burger.querySelectorAll('span');
  if (open) {
    spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});

navMobile.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navMobile.classList.remove('open');
    burger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

// ── Smooth scroll ──────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
  });
});

// ── Scroll reveal ──────────────────
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

const revealEls = [
  '.section__head',
  '.services__grid',
  '.tech-section__head',
  '.tech-logos',
  '.tech-features',
  '.projects__grid',
  '.process__head',
  '.process__steps',
  '.about__left',
  '.about__right',
  '.contact__left',
  '.contact__right',
];

revealEls.forEach(sel => {
  document.querySelectorAll(sel).forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    revealObs.observe(el);
  });
});

// ── Stagger service cards ─────────
const servicesObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.service-card').forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(24px)';
        card.style.transition = `opacity 0.5s ease ${i*80}ms, transform 0.5s ease ${i*80}ms, box-shadow 0.3s ease, border-color 0.3s ease`;
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, i * 80 + 50);
      });
      servicesObs.disconnect();
    }
  });
}, { threshold: 0.1 });

const firstService = document.querySelector('.service-card');
if (firstService) servicesObs.observe(firstService);

// ── Stagger project cards ─────────
const projectsObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.project-card').forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(24px)';
        card.style.transition = `opacity 0.5s ease ${i*100}ms, transform 0.5s ease ${i*100}ms, box-shadow 0.3s ease, border-color 0.3s ease`;
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, i * 100 + 50);
      });
      projectsObs.disconnect();
    }
  });
}, { threshold: 0.1 });

const firstProject = document.querySelector('.project-card');
if (firstProject) projectsObs.observe(firstProject);

// ── Stagger tech logos ────────────
const techObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.tech-logo').forEach((logo, i) => {
        logo.style.opacity = '0';
        logo.style.transform = 'scale(0.9)';
        logo.style.transition = `opacity 0.4s ease ${i*50}ms, transform 0.4s ease ${i*50}ms`;
        setTimeout(() => {
          logo.style.opacity = '1';
          logo.style.transform = 'scale(1)';
        }, i * 50 + 50);
      });
      techObs.disconnect();
    }
  });
}, { threshold: 0.1 });

const techGrid = document.querySelector('.tech-logos');
if (techGrid) techObs.observe(techGrid);

// ── Stagger tech features ─────────
const featuresObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.tech-feature').forEach((feat, i) => {
        feat.style.opacity = '0';
        feat.style.transform = 'translateX(-20px)';
        feat.style.transition = `opacity 0.5s ease ${i*100}ms, transform 0.5s ease ${i*100}ms`;
        setTimeout(() => {
          feat.style.opacity = '1';
          feat.style.transform = 'translateX(0)';
        }, i * 100 + 50);
      });
      featuresObs.disconnect();
    }
  });
}, { threshold: 0.1 });

const featuresGrid = document.querySelector('.tech-features');
if (featuresGrid) featuresObs.observe(featuresGrid);

// ── Stagger process steps ─────────
const processObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.process-step').forEach((step, i) => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(20px)';
        step.style.transition = `opacity 0.5s ease ${i*120}ms, transform 0.5s ease ${i*120}ms`;
        setTimeout(() => {
          step.style.opacity = '1';
          step.style.transform = 'translateY(0)';
        }, i * 120 + 50);
      });
      processObs.disconnect();
    }
  });
}, { threshold: 0.1 });

const processSteps = document.querySelector('.process__steps');
if (processSteps) processObs.observe(processSteps);

// ── Stagger contact info ──────────
const contactObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.contact-info__item').forEach((item, i) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = `opacity 0.5s ease ${i*100}ms, transform 0.5s ease ${i*100}ms, border-color 0.3s ease`;
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateX(0)';
        }, i * 100 + 50);
      });
      contactObs.disconnect();
    }
  });
}, { threshold: 0.1 });

const contactInfo = document.querySelector('.contact-info');
if (contactInfo) contactObs.observe(contactInfo);

// ── Form submission ────────────────
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const btnText = btn.querySelector('span');
    
    btnText.textContent = 'Sending...';
    btn.disabled = true;
    btn.style.opacity = '0.7';

    // Simulate submission
    setTimeout(() => {
      btnText.textContent = 'Message Sent!';
      btn.style.opacity = '1';
      btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
      
      setTimeout(() => {
        contactForm.reset();
        btnText.textContent = 'Send Message';
        btn.disabled = false;
        btn.style.background = '';
      }, 3000);
    }, 1200);
  });
}

console.log('%c⚡ LAITOR INVESTMENT LTD', 'color:#00D4FF;font-size:18px;font-weight:bold;font-family:monospace');
console.log('%cSmart Construction · Intelligent Spaces', 'color:#8B9CB8;font-size:11px');

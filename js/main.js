(function () {
  'use strict';

  const navbar  = document.getElementById('navbar');
  const burger  = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  const form    = document.getElementById('contactForm');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    navLinks.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      navLinks.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', e => {
    if (!navbar.contains(e.target)) {
      burger.classList.remove('open');
      navLinks.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -55px 0px' });

  document.querySelectorAll('.fade-up, .fade-left, .fade-right, .scale-in')
    .forEach(el => scrollObserver.observe(el));

  function animateCount(el) {
    const target   = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const start    = performance.now();

    const easeOut = t => 1 - Math.pow(1 - t, 3);

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const value    = Math.floor(easeOut(progress) * target);
      el.textContent = value.toLocaleString('es-AR');
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat__num').forEach(el => counterObserver.observe(el));

  const heroElements = document.querySelectorAll('.anim-hero');
  if (heroElements.length) {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        heroElements.forEach(el => el.classList.add('in'));
      });
    });
  }

  if (form) {
    const required = ['fname', 'fphone', 'fequip'];

    function validate(id) {
      const input = form.querySelector('#' + id);
      const group = input.closest('.form-group');
      const ok    = input.value.trim() !== '';
      group.classList.toggle('error', !ok);
      return ok;
    }

    required.forEach(id => {
      form.querySelector('#' + id).addEventListener('input', () => validate(id));
    });

    form.addEventListener('submit', e => {
      e.preventDefault();
      const allValid = required.map(validate).every(Boolean);
      if (!allValid) return;

      const name    = encodeURIComponent(form.querySelector('#fname').value.trim());
      const phone   = encodeURIComponent(form.querySelector('#fphone').value.trim());
      const equip   = encodeURIComponent(form.querySelector('#fequip').value);
      const msg     = encodeURIComponent(form.querySelector('#fmsg').value.trim());

      const text = `Hola%2C%20soy%20${name}%20(Tel%3A%20${phone}).%20Necesito%20reparar%20mi%20${equip}.%20${msg ? msg + '%20' : ''}Quisiera%20coordinar%20un%20turno.`;
      window.open('https://wa.me/541127137063?text=' + text, '_blank', 'noopener,noreferrer');
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

})();

/* ── Brand Modal ─────────────────────────────────────────────── */
(function () {
  const BRAND_DATA = {
    ariston: {
      name: 'Ariston',
      desc: 'Marca italiana con más de 60 años de trayectoria. Pionera en calefones, termotanques y cocinas de alta eficiencia energética. Sus productos combinan tecnología europea con diseño funcional, siendo un nombre de confianza en los hogares argentinos.',
    },
    ge: {
      name: 'General Electric',
      desc: 'Icónica marca americana con más de 100 años en el mercado. Referente mundial en heladeras, lavarropas y aires acondicionados. Tecnología sólida y duradera, con repuestos siempre disponibles para una reparación rápida y económica.',
    },
    smeg: {
      name: 'SMEG',
      desc: 'Diseño italiano de vanguardia que fusiona estética retro con tecnología de punta. Sus cocinas, hornos y electrodomésticos de línea blanca son el punto focal de cualquier cocina moderna, sin sacrificar rendimiento ni durabilidad.',
    },
    maytag: {
      name: 'Maytag',
      desc: 'Más de 115 años fabricando electrodomésticos robustos y confiables. Sinónimo de durabilidad en el mercado americano. Sus lavarropas, secadoras y heladeras están diseñados para soportar el uso intensivo con el mínimo mantenimiento posible.',
    },
  };

  const APPLIANCES = [
    { label: 'Lavarropas',          id: 'lavarropas'   },
    { label: 'Heladeras',           id: 'heladera'     },
    { label: 'Lavavajillas',        id: 'lavavajillas' },
    { label: 'Cocinas',             id: 'cocina'       },
    { label: 'Aire Acondicionado',  id: 'aire'         },
    { label: 'Cámaras Frigorífico', id: 'camara'       },
    { label: 'Anafe',               id: 'anafe'        },
    { label: 'Termotanque',         id: 'termotanque'  },
    { label: 'Microondas',          id: 'microondas'   },
    { label: 'Freezers',            id: 'freezer'      },
  ];

  const overlay  = document.getElementById('brandModal');
  if (!overlay) return;

  const logoEl   = document.getElementById('brandModalLogo');
  const descEl   = document.getElementById('brandModalDesc');
  const servEl   = document.getElementById('brandModalServices');
  const waEl     = document.getElementById('brandModalWa');
  const closeBtn = document.getElementById('brandModalClose');

  function openModal(imgSrc, imgAlt, brandKey) {
    const data = BRAND_DATA[brandKey];
    if (!data) return;
    logoEl.src = imgSrc;
    logoEl.alt = imgAlt;
    descEl.textContent = data.desc;
    servEl.innerHTML = APPLIANCES.map(a =>
      `<a href="producto.html?id=${a.id}" class="brand-modal__service-link">${a.label}</a>`
    ).join('');
    waEl.href = `https://wa.me/541127137063?text=${encodeURIComponent('Hola, quisiera consultar por reparación de electrodomésticos ' + data.name)}`;
    overlay.classList.add('open');
    document.body.classList.add('modal-open');
    closeBtn.focus();
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.classList.remove('modal-open');
  }

  document.querySelectorAll('.brand-logo[data-brand]').forEach(img => {
    img.addEventListener('click', () => openModal(img.src, img.alt, img.dataset.brand));
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
})();

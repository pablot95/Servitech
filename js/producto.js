(function () {
  'use strict';

  /* ── Datos de cada producto ─────────────────────────────────────────── */
  var PRODUCTOS = {
    lavarropas: {
      title:    'Reparación de Lavarropas',
      category: 'Servicio técnico especializado',
      desc:     'Carga frontal, carga superior y semiautomáticos. Solucionamos todo tipo de fallas con diagnóstico sin cargo, repuestos originales y garantía por escrito en CABA y GBA.',
      img:      'images/lavarropa.jpg',
      imgAlt:   'Reparación de lavarropas a domicilio en Buenos Aires',
      waText:   'Hola%2C%20necesito%20reparar%20mi%20lavarropas',
      tags:     ['Carga frontal', 'Carga superior', 'Semiautomáticos', 'Todas las marcas'],
      fallas:   ['No centrifuga', 'Pierde agua', 'No enciende', 'Errores de pantalla', 'No drena', 'Ruidos extraños', 'No calienta el agua', 'Vibraciones excesivas'],
      detail:   'Nuestros técnicos llegan a tu domicilio equipados con las herramientas y repuestos más frecuentes para lavarropas. Trabajamos con todas las marcas: Samsung, LG, Whirlpool, Drean, Electrolux, Philco, BGH y muchas más. La mayoría de las reparaciones se resuelven en la primera visita.'
    },
    heladera: {
      title:    'Reparación de Heladeras',
      category: 'Servicio técnico especializado',
      desc:     'Familiares, combinadas y No Frost. Diagnóstico preciso en el día, reparación a domicilio con repuestos originales y garantía por escrito.',
      img:      'images/heladera.jpg',
      imgAlt:   'Reparación de heladeras a domicilio en Buenos Aires',
      waText:   'Hola%2C%20necesito%20reparar%20mi%20heladera',
      tags:     ['No Frost', 'Combinadas', 'Familiares', 'Todas las marcas'],
      fallas:   ['No enfría', 'Congela en exceso', 'Hace ruido', 'Pierde agua', 'Luz no enciende', 'Compresor ruidoso', 'Fuga de gas', 'Puerta no cierra'],
      detail:   'Reparamos heladeras de todas las marcas y modelos. Contamos con técnicos especializados en sistemas de refrigeración, carga de gas, compresores, placas electrónicas y termostatos. Llevamos los repuestos necesarios para resolver tu problema en el día.'
    },
    lavavajillas: {
      title:    'Reparación de Lavavajillas',
      category: 'Servicio técnico especializado',
      desc:     'No lava correctamente, no drena, errores de código, fallas eléctricas o mecánicas. Técnicos certificados con repuestos en mano.',
      img:      'images/lavavajillas.webp',
      waText:   'Hola%2C%20necesito%20reparar%20mi%20lavavajillas',
      tags:     ['Todas las marcas', 'A domicilio', 'Repuestos originales'],
      fallas:   ['No enciende', 'No drena el agua', 'No lava correctamente', 'Error en pantalla', 'Pierde agua', 'No cierra la puerta', 'Hace mucho ruido', 'No llena de agua'],
      detail:   'Nuestros técnicos cuentan con formación específica en lavavajillas de todas las marcas. Reparamos fallas eléctricas, de plomería interna, bombas de desagote, resistencias, placas de control y más. Repuestos disponibles para entrega inmediata.'
    },
    cocina: {
      title:    'Reparación de Cocinas',
      category: 'Servicio técnico especializado',
      desc:     'Cocinas a gas y eléctricas de todas las marcas. Quemadores, hornos, encendido electrónico, termostatos y más. Servicio a domicilio en Buenos Aires.',
      img:      'images/cocinas.webp',
      imgAlt:   'Reparación de cocinas a gas a domicilio en Buenos Aires',
      waText:   'Hola%2C%20necesito%20reparar%20mi%20cocina',
      tags:     ['A gas', 'Eléctricas', 'Con horno', 'Empotradas'],
      fallas:   ['Quemador no enciende', 'Horno no calienta', 'Pérdida de gas', 'Encendido roto', 'Termostato dañado', 'Puerta del horno', 'Llama irregular', 'Timer sin función'],
      detail:   'Reparamos cocinas a gas y eléctricas de todas las marcas: Domec, Longvie, Volcan, Columbia, Orbis, Emege, Koh-i-Noor y muchas más. Nuestros técnicos cuentan con habilitación para trabajos con gas y se presentan con las herramientas adecuadas para cada tipo de falla.'
    },
    aire: {
      title:    'Reparación de Aire Acondicionado',
      category: 'Servicio técnico especializado',
      desc:     'Split, ventana y cassette. Carga de gas, limpieza, fallas eléctricas y electrónicas. Servicio técnico a domicilio en CABA y GBA.',
      img:      'images/aire.webp',
      imgAlt:   'Reparación de aire acondicionado split en Buenos Aires',
      waText:   'Hola%2C%20necesito%20reparar%20mi%20aire%20acondicionado',
      tags:     ['Split', 'Ventana', 'Cassette', 'Frío–Calor'],
      fallas:   ['No enfría', 'No calienta', 'Gotea agua', 'Control no funciona', 'Hace ruido', 'Error en pantalla', 'No enciende', 'Carga de gas'],
      detail:   'Servicio técnico de aire acondicionado para equipos split, de ventana y cassette. Realizamos carga de gas refrigerante, limpieza profunda, reparación de plaquetas electrónicas, cambio de capacitor, motor del ventilador y más. Marcas: Samsung, LG, Carrier, Midea, York, BGH.'
    },
    camara: {
      title:    'Reparación de Cámaras Frigorífico',
      category: 'Servicio técnico especializado',
      desc:     'Cámaras de frío comerciales e industriales. Reparación de compresor, carga de gas, sistemas de frío y controles. Servicio urgente disponible.',
      img:      'images/camara.webp',
      imgAlt:   'Reparación de cámara frigorífico en Buenos Aires',
      waText:   'Hola%2C%20necesito%20reparar%20una%20c%C3%A1mara%20frigor%C3%ADfico',
      tags:     ['Comerciales', 'Industriales', 'Urgencias', 'Todas las marcas'],
      fallas:   ['No enfría', 'Temperatura alta', 'Compresor ruidoso', 'Fuga de gas', 'Control de temperatura', 'Desescarche', 'Evaporador con hielo', 'Puerta con problemas'],
      detail:   'Brindamos servicio técnico para cámaras de frío comerciales e industriales. Entendemos que una cámara averiada puede significar pérdida de mercadería, por eso ofrecemos servicio urgente. Carga de gas refrigerante R404A / R134A, reparación de compresores, cambio de termostatos y controles electrónicos.'
    },
    anafe: {
      title:    'Reparación de Anafe',
      category: 'Servicio técnico especializado',
      desc:     'Anafes a gas e inducción de todas las marcas. Reparación de quemadores, encendido, válvulas y placas. Repuestos disponibles.',
      img:      'images/anafes.webp',
      imgAlt:   'Reparación de anafe a gas en Buenos Aires',
      waText:   'Hola%2C%20necesito%20reparar%20mi%20anafe',
      tags:     ['A gas', 'Inducción', 'Vitrocerámica', 'Todas las marcas'],
      fallas:   ['Quemador no enciende', 'Llama irregular', 'Encendido roto', 'Válvula dañada', 'Pérdida de gas', 'Placa de inducción', 'Error de código', 'No reconoce olla'],
      detail:   'Reparamos anafes a gas, por inducción y vitrocerámica de todas las marcas. Cambiamos chisperos de encendido, válvulas de seguridad, placas electrónicas y quemadores. También tenemos repuestos para que puedas hacer la reparación vos mismo.'
    },
    termotanque: {
      title:    'Reparación de Termotanque',
      category: 'Servicio técnico especializado',
      desc:     'Termotanques a gas, eléctricos y solares. Pérdidas, presión, encendido y corrosión. Técnicos habilitados para instalaciones de gas en Buenos Aires.',
      img:      'images/termotanques.webp',
      imgAlt:   'Reparación de termotanque en Buenos Aires',
      waText:   'Hola%2C%20necesito%20reparar%20mi%20termotanque',
      tags:     ['A gas', 'Eléctrico', 'Solar', 'Todas las marcas'],
      fallas:   ['No calienta el agua', 'Pérdida de agua', 'Piloto no enciende', 'Válvula de seguridad', 'Ánodo de sacrificio', 'Corrosión interna', 'Poca presión', 'Encendido eléctrico'],
      detail:   'Nuestros técnicos tienen habilitación para trabajar con instalaciones de gas. Reparamos y hacemos mantenimiento de termotanques a gas, eléctricos y solares de marcas como Rheem, Ariston, Orbis, Peabody, Surrey, Eskabe y más.'
    },
    microondas: {
      title:    'Reparación de Microondas',
      category: 'Servicio técnico especializado',
      desc:     'Microondas de uso doméstico y profesional. No calienta, no gira, pantalla apagada. Diagnóstico rápido con repuestos disponibles.',
      img:      'images/microondas.jpg',
      imgAlt:   'Reparación de microondas a domicilio en Buenos Aires',
      waText:   'Hola%2C%20necesito%20reparar%20mi%20microondas',
      tags:     ['Domésticos', 'Profesionales', 'Con grill', 'Todas las marcas'],
      fallas:   ['No calienta', 'Plato no gira', 'No enciende', 'Chispas internas', 'Pantalla sin luz', 'Puerta no cierra', 'Hace ruidos', 'Funciones bloqueadas'],
      detail:   'Reparamos microondas de todos los tamaños, marcas y modelos. Cambiamos magnetrón, transformador de alta tensión, motor del plato, teclados y puertas. También disponemos de repuestos para autogestión.'
    },
    freezer: {
      title:    'Reparación de Freezers',
      category: 'Servicio técnico especializado',
      desc:     'Freezers verticales y horizontales. No congela, hace ruido, pierde temperatura. Técnicos especializados en frío a domicilio en CABA y GBA.',
      img:      'images/heladera.jpg',
      imgAlt:   'Reparación de freezer a domicilio en Buenos Aires',
      waText:   'Hola%2C%20necesito%20reparar%20mi%20freezer',
      tags:     ['Vertical', 'Horizontal', 'Todas las marcas', 'A domicilio'],
      fallas:   ['No congela', 'Congela en exceso', 'Hace ruido', 'Acumula hielo', 'Compresor caliente', 'Pérdida de gas', 'Puerta no sella', 'Luz interior'],
      detail:   'Reparamos freezers verticales y horizontales. Realizamos carga de gas, cambio de compresor, reparación de placas electrónicas, cambio de termostatos y sellos de puerta. Trabajamos con Gafa, Longvie, Mabe, Electrolux, Samsung, LG y todas las marcas del mercado.'
    }
  };

  var DEFAULT_ID = 'lavarropas';

  function getParam() {
    var params = new URLSearchParams(window.location.search);
    return params.get('id') || DEFAULT_ID;
  }

  function buildWaLink(waText) {
    return 'https://wa.me/541127137063?text=' + waText;
  }

  function renderProduct(id) {
    var prod = PRODUCTOS[id] || PRODUCTOS[DEFAULT_ID];

    /* Meta */
    document.getElementById('page-title').textContent = prod.title + ' | ServitechBA';
    document.getElementById('page-description').setAttribute('content', prod.desc);

    /* Hero */
    document.getElementById('breadcrumb-name').textContent = prod.title;
    document.getElementById('prod-category').textContent   = prod.category;
    document.getElementById('prod-title').innerHTML        = prod.title.replace(/ ([^ ]+)$/, '<br><span class="text-gold">$1</span>');
    document.getElementById('prod-desc').textContent       = prod.desc;

    var img = document.getElementById('prod-img');
    img.src = prod.img;
    img.alt = prod.imgAlt;

    /* Tags */
    var tagsEl = document.getElementById('prod-tags');
    tagsEl.innerHTML = prod.tags.map(function(t) {
      return '<span class="prod-tag">' + t + '</span>';
    }).join('');

    /* WA links */
    var waLink = buildWaLink(prod.waText);
    document.getElementById('wa-cta').href     = waLink;
    document.getElementById('wa-sidebar').href = waLink;
    document.getElementById('wa-float').href   = waLink;

    /* Detail */
    document.getElementById('prod-detail-title').textContent = 'Servicio técnico de ' + prod.title.replace('Reparación de ', '').replace('Reparación de', '').toLowerCase();
    document.getElementById('prod-detail-body').innerHTML    = '<p>' + prod.detail + '</p>';

    /* Fallas */
    var fallasEl = document.getElementById('prod-fallas-list');
    fallasEl.innerHTML = prod.fallas.map(function(f) {
      return '<li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>' + f + '</li>';
    }).join('');

    /* Marcar link activo en sidebar */
    document.querySelectorAll('.prod-otros__link').forEach(function(a) {
      var linkId = new URLSearchParams(a.href.split('?')[1]).get('id');
      a.classList.toggle('active', linkId === id);
    });
  }

  /* Nav burger (reutiliza lógica del main.js) */
  var navbar  = document.getElementById('navbar');
  var burger  = document.getElementById('burger');
  var navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', function() {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  burger.addEventListener('click', function() {
    var open = burger.classList.toggle('open');
    navLinks.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
  });

  document.addEventListener('click', function(e) {
    if (!navbar.contains(e.target)) {
      burger.classList.remove('open');
      navLinks.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });

  renderProduct(getParam());

})();

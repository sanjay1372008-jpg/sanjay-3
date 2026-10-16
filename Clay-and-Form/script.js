/* CLAY & FORM — front-end experience | Project 8112241824 */
(() => {
  'use strict';

  const IMAGE = (id, width = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
  const products = [
    { id: 'forma-vase', name: 'Forma Sculptural Vase', category: 'Vases & Vessels', price: 4800, badge: 'Bestseller', description: 'A quietly expressive vessel with a generous shoulder and softly narrowed mouth. Hand-shaped in a warm, mineral stoneware and finished with a satin sand glaze.', material: 'Stoneware clay', dimensions: 'H 28 × W 18 cm', finish: 'Satin sand glaze', care: 'Wipe with a soft, damp cloth. Not intended for food use.', collection: 'Earth & Form', tags: ['sculptural', 'earth', 'limited'], images: [IMAGE('photo-1578749556568-bc2c40e68b61'), IMAGE('photo-1576021182211-9ea8d4d127e2'), IMAGE('photo-1610701596007-11502861dcfa')] },
    { id: 'earthline-mug', name: 'Earthline Stoneware Mug', category: 'Mugs & Cups', price: 1250, badge: 'Everyday favourite', description: 'A well-balanced daily mug with a generous handle and an earthy, tactile glaze. Each piece carries subtle shifts in tone from the firing.', material: 'High-fired stoneware', dimensions: 'Approx. 9 × 8 cm · 300 ml', finish: 'Moss and oat glaze', care: 'Hand wash recommended. Avoid sudden temperature changes.', collection: 'Everyday Rituals', tags: ['daily', 'tableware'], images: [IMAGE('photo-1576021182211-9ea8d4d127e2'), IMAGE('photo-1610701596007-11502861dcfa'), IMAGE('photo-1578749556568-bc2c40e68b61')] },
    { id: 'solstice-bowl', name: 'Solstice Serving Bowl', category: 'Tableware', price: 2650, badge: 'New arrival', description: 'A broad, gently irregular serving bowl designed to sit at the centre of an unhurried table. The unglazed foot reveals the natural body of the clay.', material: 'Speckled stoneware', dimensions: 'Ø 25 × H 8 cm', finish: 'Chalk glaze with raw clay foot', care: 'Hand wash with a non-abrasive sponge.', collection: 'Quiet Morning Tableware', tags: ['tableware', 'dining'], images: [IMAGE('photo-1610701596007-11502861dcfa'), IMAGE('photo-1578749556568-bc2c40e68b61'), IMAGE('photo-1576021182211-9ea8d4d127e2')] },
    { id: 'dune-pitcher', name: 'Dune Ceramic Pitcher', category: 'Vases & Vessels', price: 3200, badge: '', description: 'A sculptural pitcher with a softened spout and generous loop handle. Made to hold a loose arrangement or bring a little ceremony to everyday water.', material: 'Stoneware clay', dimensions: 'H 22 × W 17 cm · 900 ml', finish: 'Warm ivory glaze', care: 'Hand wash recommended. Food-safe glaze for cool liquids.', collection: 'Earth & Form', tags: ['earth', 'tableware'], images: [IMAGE('photo-1578500494198-246f612d3b3d'), IMAGE('photo-1581783342308-f792dbdd27c5'), IMAGE('photo-1578749556568-bc2c40e68b61')] },
    { id: 'pebble-espresso', name: 'Pebble Espresso Cup', category: 'Mugs & Cups', price: 780, badge: '', description: 'A palm-sized cup with a rounded silhouette and a soft, unglazed base. Small variations in shape and glaze make each cup distinctly its own.', material: 'High-fired stoneware', dimensions: 'H 6 × Ø 7 cm · 100 ml', finish: 'Oat, ash or rust glaze', care: 'Hand wash recommended.', collection: 'Everyday Rituals', tags: ['daily', 'tableware'], images: [IMAGE('photo-1581783342308-f792dbdd27c5'), IMAGE('photo-1610701596007-11502861dcfa'), IMAGE('photo-1576021182211-9ea8d4d127e2')] },
    { id: 'arco-vessel', name: 'Arco Sculptural Vessel', category: 'Sculptural Objects', price: 6200, badge: 'Limited edition', description: 'An architectural vessel that plays with balance, negative space and a softly arched silhouette. A considered statement for a shelf, plinth or quiet corner.', material: 'Dark stoneware', dimensions: 'H 31 × W 20 cm', finish: 'Smoked umber matte', care: 'Decorative use. Dust gently with a dry cloth.', collection: 'Sculptural Statements', tags: ['sculptural', 'limited'], images: [IMAGE('photo-1565193298595-6bdda1f4d218'), IMAGE('photo-1493106641515-6b5631de4bb9'), IMAGE('photo-1578500494198-246f612d3b3d')] },
    { id: 'terra-plates', name: 'Terra Dinner Plate Set', category: 'Tableware', price: 3950, badge: 'Bestseller', description: 'A set of two generous dinner plates with a handmade rim and a fine speckled finish. Made for everyday meals that deserve a little attention.', material: 'Speckled stoneware', dimensions: 'Set of 2 · Ø 27 cm each', finish: 'Chalk with warm clay edge', care: 'Hand wash recommended; stack with care.', collection: 'Quiet Morning Tableware', tags: ['tableware', 'dining'], images: [IMAGE('photo-1612196808214-b7e1d6145a8c'), IMAGE('photo-1610701596061-2ecf227e85b2'), IMAGE('photo-1610701596007-11502861dcfa')] },
    { id: 'stillwater-lamp', name: 'Stillwater Ceramic Lamp', category: 'Home Objects', price: 8900, badge: 'Made to order', description: 'A softly rounded ceramic base paired with a linen shade for warm, atmospheric light. Each base is turned and finished by hand in the studio.', material: 'Stoneware base, linen shade', dimensions: 'H 44 cm including shade', finish: 'Warm chalk glaze', care: 'Dust with a dry cloth. Bulb and electrical fitting details supplied with the piece.', collection: 'Botanical Living', tags: ['home', 'sculptural'], images: [IMAGE('photo-1490312278390-ab64016e0aa9'), IMAGE('photo-1493106641515-6b5631de4bb9'), IMAGE('photo-1578500494198-246f612d3b3d')] },
    { id: 'sandstone-bud-vase', name: 'Sandstone Bud Vase', category: 'Vases & Vessels', price: 1450, badge: '', description: 'A petite vessel for one beautiful stem or a branch gathered on a walk. Its narrow opening gives even the simplest arrangement a sculptural presence.', material: 'Stoneware clay', dimensions: 'H 14 × Ø 8 cm', finish: 'Raw sand texture', care: 'Wipe clean. Use a coaster on delicate surfaces.', collection: 'Botanical Living', tags: ['botanical', 'earth'], images: [IMAGE('photo-1493106641515-6b5631de4bb9'), IMAGE('photo-1578749556568-bc2c40e68b61'), IMAGE('photo-1565193298595-6bdda1f4d218')] },
    { id: 'wabi-tea-bowl', name: 'Wabi Tea Bowl', category: 'Mugs & Cups', price: 1850, badge: 'Hand-finished', description: 'A quiet, tactile tea bowl with a generous curve and a naturally varied glaze. Designed to be held with both hands and used slowly.', material: 'Iron-rich stoneware', dimensions: 'H 8 × Ø 12 cm', finish: 'Ash and celadon glaze', care: 'Rinse after use and dry fully.', collection: 'Everyday Rituals', tags: ['daily', 'ritual'], images: [IMAGE('photo-1610701596061-2ecf227e85b2'), IMAGE('photo-1581783342308-f792dbdd27c5'), IMAGE('photo-1576021182211-9ea8d4d127e2')] },
    { id: 'horizon-tableware', name: 'Horizon Tableware Set', category: 'Tableware', price: 11200, badge: 'Set of 4', description: 'A coordinated four-piece place setting with a dinner plate, side plate and low bowl in a quiet, versatile palette. A thoughtful foundation for gathering.', material: 'High-fired stoneware', dimensions: '12-piece set for four', finish: 'Warm white satin glaze', care: 'Dishwasher use varies by piece; gentle hand washing is recommended.', collection: 'Quiet Morning Tableware', tags: ['tableware', 'dining'], images: [IMAGE('photo-1610701596007-11502861dcfa'), IMAGE('photo-1612196808214-b7e1d6145a8c'), IMAGE('photo-1610701596061-2ecf227e85b2')] },
    { id: 'ember-candle-holder', name: 'Ember Candle Holder', category: 'Home Objects', price: 980, badge: '', description: 'A small, weighty candle holder with a rounded profile and a brushed, earthy surface. Lovely alone or collected in a quiet group.', material: 'Stoneware clay', dimensions: 'H 7 × Ø 8 cm', finish: 'Rust matte glaze', care: 'Remove wax gently once cool. Never leave a burning candle unattended.', collection: 'Botanical Living', tags: ['home', 'earth'], images: [IMAGE('photo-1581783342308-f792dbdd27c5'), IMAGE('photo-1490312278390-ab64016e0aa9'), IMAGE('photo-1578500494198-246f612d3b3d')] },
    { id: 'cloud-planter', name: 'Cloud Ceramic Planter', category: 'Home Objects', price: 2200, badge: 'New arrival', description: 'A softly fluted planter with enough presence to stand alone and enough restraint to let your greenery shine. Drainage details vary by size.', material: 'Stoneware clay', dimensions: 'Ø 18 × H 16 cm', finish: 'Chalk white, satin', care: 'Use a liner for indoor planting if needed; protect delicate surfaces.', collection: 'Botanical Living', tags: ['botanical', 'home'], images: [IMAGE('photo-1493106641515-6b5631de4bb9'), IMAGE('photo-1490312278390-ab64016e0aa9'), IMAGE('photo-1578749556568-bc2c40e68b61')] },
    { id: 'sienna-platter', name: 'Sienna Serving Platter', category: 'Tableware', price: 3350, badge: '', description: 'An elongated platter with a warm sienna glaze and a hand-pressed rim. Designed for shared dishes, fruit and the small rituals of hosting.', material: 'Stoneware clay', dimensions: 'L 36 × W 19 cm', finish: 'Sienna satin glaze', care: 'Hand wash recommended.', collection: 'Quiet Morning Tableware', tags: ['tableware', 'dining'], images: [IMAGE('photo-1612196808214-b7e1d6145a8c'), IMAGE('photo-1610701596061-2ecf227e85b2'), IMAGE('photo-1610701596007-11502861dcfa')] },
    { id: 'drift-vessel', name: 'Drift Decorative Vessel', category: 'Sculptural Objects', price: 5400, badge: 'Small batch', description: 'A softly asymmetrical vessel inspired by weathered stones and wind-shaped landscapes. Each one is finished individually, so no two surfaces are alike.', material: 'Dark stoneware', dimensions: 'H 24 × W 21 cm', finish: 'Charcoal and sand wash', care: 'Decorative use. Clean with a soft dry brush.', collection: 'Sculptural Statements', tags: ['sculptural', 'limited'], images: [IMAGE('photo-1565193298595-6bdda1f4d218'), IMAGE('photo-1578500494198-246f612d3b3d'), IMAGE('photo-1578749556568-bc2c40e68b61')] },
    { id: 'atelier-vase', name: 'Atelier Limited Edition Vase', category: 'Sculptural Objects', price: 14800, badge: 'Limited edition', description: 'A singular studio piece with a layered glaze and an expressive silhouette. Produced in a very small batch and numbered by hand.', material: 'Porcelain and stoneware blend', dimensions: 'H 38 × W 24 cm', finish: 'Layered mineral glaze', care: 'Display away from direct impacts; clean with a soft cloth.', collection: 'Limited Atelier Editions', tags: ['limited', 'sculptural'], images: [IMAGE('photo-1578500494198-246f612d3b3d'), IMAGE('photo-1565193298595-6bdda1f4d218'), IMAGE('photo-1493106641515-6b5631de4bb9')] }
  ];

  const collections = [
    { id: 'earth-form', name: 'Earth & Form', subtitle: 'Sculptural vessels and raw, elemental textures.', description: 'Grounded silhouettes, mineral glazes and the quiet strength of clay in its most expressive forms.', image: IMAGE('photo-1578749556568-bc2c40e68b61'), target: 'earth', count: '04 objects' },
    { id: 'quiet-morning', name: 'Quiet Morning Tableware', subtitle: 'Considered pieces for the everyday table.', description: 'A calm, tactile table setting for slow breakfasts, long lunches and the people gathered around them.', image: IMAGE('photo-1610701596007-11502861dcfa'), target: 'tableware', count: '05 objects' },
    { id: 'sculptural', name: 'Sculptural Statements', subtitle: 'Objects that invite a second look.', description: 'Expressive forms, unusual proportions and small-batch studio pieces made to hold a room.', image: IMAGE('photo-1565193298595-6bdda1f4d218'), target: 'sculptural', count: '03 objects' },
    { id: 'rituals', name: 'Everyday Rituals', subtitle: 'A little ceremony, built into the day.', description: 'Mugs, cups and tea bowls that make familiar moments feel considered and personal.', image: IMAGE('photo-1581783342308-f792dbdd27c5'), target: 'daily', count: '03 objects' },
    { id: 'botanical', name: 'Botanical Living', subtitle: 'A natural home for stems and light.', description: 'Softly sculptural home objects, vessels and planters that bring the natural world indoors.', image: IMAGE('photo-1493106641515-6b5631de4bb9'), target: 'botanical', count: '04 objects' },
    { id: 'atelier', name: 'Limited Atelier Editions', subtitle: 'Small runs, one-of-a-kind character.', description: 'Experimental finishes and limited forms that celebrate the unexpected character of a kiln firing.', image: IMAGE('photo-1578500494198-246f612d3b3d'), target: 'limited', count: '02 objects' }
  ];

  const articles = [
    { id: 'handmade-ceramics', category: 'Materials', title: 'Understanding Handmade Ceramics', date: '12 September 2026', read: '5 min read', author: 'The Studio', image: IMAGE('photo-1610701596007-11502861dcfa'), excerpt: 'A thoughtful introduction to clay bodies, firing, glaze and the small variations that make handmade ceramics feel personal.', body: ['Handmade ceramics begin long before a finished object reaches a shelf. Clay is wedged, shaped, allowed to dry at a patient pace and fired before glaze transforms the surface. Every stage leaves a trace of the maker’s decisions.', 'Unlike factory-made objects, handmade pieces carry small differences in line, tone and texture. These are not defects to be corrected; they are part of the character of a piece made by a person, with material that responds to touch, water and heat.', 'When choosing a handmade object, look for a form you enjoy holding or seeing every day. A good piece is not simply decorative: it becomes part of the rhythm of a home.'] },
    { id: 'imperfect-forms', category: 'Philosophy', title: 'The Beauty of Imperfect Forms', date: '28 August 2026', read: '4 min read', author: 'Mira, Studio Editor', image: IMAGE('photo-1565193298595-6bdda1f4d218'), excerpt: 'Why a softly uneven rim or a glaze that shifts in the light can feel more alive than perfect symmetry.', body: ['The most memorable objects are often those that leave room for the hand. A rim that moves ever so slightly, a surface where the glaze pools or a silhouette that leans into its own rhythm can make an object feel alive.', 'This is the spirit of wabi-sabi often associated with ceramics: an appreciation for the imperfect, transient and quietly incomplete. It is not a style rule. It is a way of noticing material and time.', 'At Clay & Form, we keep the form intentional and allow the process to remain visible. The result is not careless. It is considered work that makes space for difference.'] },
    { id: 'stoneware-care', category: 'Care Guide', title: 'A Guide to Caring for Stoneware', date: '10 August 2026', read: '6 min read', author: 'The Studio', image: IMAGE('photo-1576021182211-9ea8d4d127e2'), excerpt: 'A few gentle habits that help your favourite cups, bowls and vessels stay part of your home for years.', body: ['Stoneware is durable, but handmade objects appreciate thoughtful care. For everyday pieces, a soft sponge and mild soap are often enough. Avoid sudden temperature changes, especially when a vessel has just held something hot or cold.', 'Stack plates with care and consider a thin cloth between pieces with delicate rims. Decorative vessels can be dusted with a soft dry cloth. If a piece is marked as decorative, keep it away from food and liquids.', 'Each glaze and clay body behaves a little differently, so the care notes included with a piece should always take priority. A few minutes of attention can extend the life of objects you love.'] },
    { id: 'thoughtful-table', category: 'Living', title: 'Building a Thoughtful Table Setting', date: '22 July 2026', read: '4 min read', author: 'Mira, Studio Editor', image: IMAGE('photo-1612196808214-b7e1d6145a8c'), excerpt: 'Mix shapes, leave a little breathing room and let everyday food become the centre of the table.', body: ['A thoughtful table begins with how people will gather, not with a rigid set of rules. Start with a few useful shapes: a dinner plate, a small bowl, a serving piece and cups that feel good in the hand.', 'Mixing a handmade platter with simple linen and clear glass creates texture without clutter. A restrained palette allows the food, flowers and conversation to become part of the composition.', 'Most importantly, leave room. A table should invite people to reach, share and stay a little longer.'] },
    { id: 'inside-studio', category: 'Studio Notes', title: 'Inside the Ceramic Studio', date: '04 July 2026', read: '7 min read', author: 'The Studio', image: IMAGE('photo-1610701596061-2ecf227e85b2'), excerpt: 'From wedged clay to the final kiln opening, a glimpse into the slow, practical rhythm behind each object.', body: ['A ceramic studio is a place of repetition, patience and close observation. A morning might begin with preparing clay, followed by throwing, trimming or testing a new glaze. Some days are spent making; others are spent waiting.', 'Drying and firing cannot be hurried without consequences. Pieces move through stages of touch and rest, and the kiln offers both control and uncertainty. The same glaze can respond differently across a shelf, revealing subtle shifts in atmosphere and heat.', 'The studio rhythm is why we work in small batches. It gives us time to pay attention to the work and make choices with care.'] },
    { id: 'vessels-natural-interiors', category: 'Living', title: 'Choosing Vessels for Natural Interiors', date: '16 June 2026', read: '5 min read', author: 'Mira, Studio Editor', image: IMAGE('photo-1493106641515-6b5631de4bb9'), excerpt: 'Use height, negative space and natural texture to make a vase feel at home, with or without flowers.', body: ['A vessel can quietly change the rhythm of a room. Tall, narrow forms draw the eye upward; low, wide forms add a grounded note to a shelf or table. Think about the surrounding shapes before choosing a piece.', 'Natural interiors benefit from contrast. Pair a rough clay surface with smooth timber, linen or glass. Leave some space around a sculptural vessel so the silhouette can be read clearly.', 'Flowers are optional. An empty vessel can be a finished composition in its own right, especially when its surface catches shifting daylight.'] }
  ];

  const workshops = [
    { id: 'intro-pottery', title: 'A First Touch of Clay', category: 'Beginner pottery', duration: '2.5 hours', level: 'Beginners', price: 2200, image: IMAGE('photo-1610701596007-11502861dcfa'), description: 'A relaxed introduction to clay, hand-building and surface texture. Make a small bowl or cup with guidance from a studio practitioner.', details: 'All basic materials and tools are included in this sample experience. Pieces would usually need drying and firing time after the session. This website demo does not reserve a real place.' },
    { id: 'wheel-throwing', title: 'On the Potter’s Wheel', category: 'Wheel-throwing', duration: '3 hours', level: 'All levels', price: 3200, image: IMAGE('photo-1610701596061-2ecf227e85b2'), description: 'Feel the centre of the clay, learn to pull a wall and discover the meditative rhythm of the wheel.', details: 'A guided wheel session with demonstrations and supervised practice. In a real studio, the instructor would confirm the date and advise on collection or delivery of fired pieces.' },
    { id: 'hand-building', title: 'Sculpt by Hand', category: 'Hand-building', duration: '2 hours', level: 'Beginners', price: 1900, image: IMAGE('photo-1578749556568-bc2c40e68b61'), description: 'Explore pinch, coil and slab techniques to build a one-off sculptural form, without a wheel.', details: 'A tactile session exploring basic hand-building methods and finishing marks. Sample pricing is illustrative and subject to confirmation by a real studio.' },
    { id: 'glaze-lab', title: 'The Glaze Lab', category: 'Glazing & surface', duration: '2 hours', level: 'Some experience helpful', price: 2400, image: IMAGE('photo-1576021182211-9ea8d4d127e2'), description: 'Explore slips, brushwork and glaze combinations, and learn why kiln heat adds a final element of surprise.', details: 'This sample workshop focuses on glaze testing and surface design. It is not a real booking and has no live availability.' },
    { id: 'private-group', title: 'Gather Around Clay', category: 'Private groups', duration: '2–3 hours', level: 'Custom group', price: 2800, image: IMAGE('photo-1581783342308-f792dbdd27c5'), description: 'A considered creative gathering for friends, teams or special occasions with a shared clay activity.', details: 'Group size, date, access needs and budget would be discussed in a real enquiry. This demo form only shows a local confirmation.' },
    { id: 'gift-experience', title: 'A Gift of Making', category: 'Gift experience', duration: 'Flexible', level: 'All levels', price: 2500, image: IMAGE('photo-1565193298595-6bdda1f4d218'), description: 'Give someone a few hours to slow down, learn by touch and make a small object of their own.', details: 'This gift experience is a fictional example. No voucher is purchased or sent through this demonstration website.' }
  ];

  const formatPrice = (price) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
  const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const getProduct = (id) => products.find((product) => product.id === id) || products[0];
  const safeRead = (key, fallback) => { try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; } catch { return fallback; } };
  const safeWrite = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage may be unavailable; in-memory interaction still works */ } };

  let cart = safeRead('cf-cart-v1', {});
  let wishlist = safeRead('cf-wishlist-v1', []);
  let recentlyViewed = safeRead('cf-recent-v1', []);
  let activeDrawer = null;
  let previousFocus = null;
  let currentModalCleanup = null;

  function applyTheme(theme) {
    const next = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = next;
    const toggle = document.querySelector('[data-action="theme"]');
    if (toggle) {
      const isDark = next === 'dark';
      toggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
      toggle.setAttribute('title', isDark ? 'Switch to light theme' : 'Switch to dark theme');
      toggle.innerHTML = isDark ? icon('sun') : icon('moon');
    }
  }

  function icon(name) {
    const paths = {
      sun: '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"></path>',
      moon: '<path d="M20.7 13.1A8.7 8.7 0 0 1 10.9 3.3 8.8 8.8 0 1 0 20.7 13.1Z"></path>',
      bag: '<path d="M5 8h14l1 13H4L5 8Z"></path><path d="M9 8V6a3 3 0 0 1 6 0v2"></path>',
      heart: '<path d="M20.8 8.8c0 4.1-8.8 10-8.8 10S3.2 12.9 3.2 8.8a4.6 4.6 0 0 1 8.8-1.6 4.6 4.6 0 0 1 8.8 1.6Z"></path>',
      search: '<circle cx="10.8" cy="10.8" r="6.6"></circle><path d="m16 16 4.5 4.5"></path>',
      menu: '<path d="M3 7h18M3 12h18M3 17h18"></path>',
      close: '<path d="m6 6 12 12M18 6 6 18"></path>',
      leaf: '<path d="M20 4c-8 0-14 3.5-14 10a6 6 0 0 0 6 6c6.5 0 8-8 8-16Z"></path><path d="M3 21c2-5 6-8 12-12"></path>',
      arrow: '<path d="M4 12h15M13 5l7 7-7 7"></path>'
    };
    return `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.arrow}</svg>`;
  }

  function updateHeaderCounts() {
    const cartCount = Object.values(cart).reduce((sum, item) => sum + Number(item.qty || 0), 0);
    const wishlistCount = wishlist.length;
    document.querySelectorAll('[data-cart-count]').forEach((el) => { el.textContent = String(cartCount); el.hidden = cartCount < 1; });
    document.querySelectorAll('[data-wishlist-count]').forEach((el) => { el.textContent = String(wishlistCount); el.hidden = wishlistCount < 1; });
    document.querySelectorAll('[data-action="theme"]').forEach((el) => {
      const isDark = document.documentElement.dataset.theme === 'dark';
      el.innerHTML = isDark ? icon('sun') : icon('moon');
      el.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    });
  }

  function productCard(product) {
    const isWishlisted = wishlist.includes(product.id);
    return `<article class="product-card reveal" data-product-card="${escapeHtml(product.id)}">
      <a class="product-card__image media-wrap" href="product.html?id=${encodeURIComponent(product.id)}" aria-label="View ${escapeHtml(product.name)}">
        <img src="${product.images[0]}" alt="${escapeHtml(product.name)}, handmade ceramic object" loading="lazy" width="800" height="1000">
      </a>
      ${product.badge ? `<span class="product-card__badge">${escapeHtml(product.badge)}</span>` : ''}
      <button class="icon-button product-card__heart ${isWishlisted ? 'is-active' : ''}" data-action="toggle-wishlist" data-product-id="${escapeHtml(product.id)}" aria-label="${isWishlisted ? 'Remove from' : 'Add to'} wishlist: ${escapeHtml(product.name)}" aria-pressed="${isWishlisted}">${icon('heart')}</button>
      <div class="product-card__quick"><button class="button button--small" data-action="quick-view" data-product-id="${escapeHtml(product.id)}">Quick view</button></div>
      <div class="product-card__info"><div><h3><a href="product.html?id=${encodeURIComponent(product.id)}">${escapeHtml(product.name)}</a></h3><p>${escapeHtml(product.category)}</p></div><span class="product-card__price">${formatPrice(product.price)}</span></div>
    </article>`;
  }

  function renderProductCards(target, list) {
    const node = typeof target === 'string' ? document.querySelector(target) : target;
    if (!node) return;
    node.innerHTML = list.length ? list.map(productCard).join('') : '<div class="empty-state"><h3 class="heading-medium">Nothing found, just yet.</h3><p class="small-copy">Try another search or clear your filters to explore the full collection.</p><button class="button button--outline" data-action="clear-shop-filters">Clear filters</button></div>';
  }

  function initHome() {
    const featured = document.querySelector('#featured-products');
    if (featured) renderProductCards(featured, [products[0], products[1], products[2], products[5]]);
    const arrivals = document.querySelector('#new-arrivals');
    if (arrivals) renderProductCards(arrivals, [products[8], products[11], products[12], products[15]]);
  }

  function initShop() {
    const grid = document.querySelector('#shop-products');
    if (!grid) return;
    const params = new URLSearchParams(window.location.search);
    let category = params.get('category') || 'All pieces';
    const requestedCollection = params.get('collection');
    const tagSearch = requestedCollection || '';
    let searchTerm = params.get('q') || '';
    let sort = 'featured';
    const searchInput = document.querySelector('#shop-search');
    const sortSelect = document.querySelector('#shop-sort');
    if (searchInput) searchInput.value = searchTerm;
    const categoryButtons = [...document.querySelectorAll('[data-category-filter]')];
    if (categoryButtons.some((btn) => btn.dataset.categoryFilter === category)) {
      categoryButtons.forEach((btn) => btn.classList.toggle('is-active', btn.dataset.categoryFilter === category));
    } else category = 'All pieces';
    if (requestedCollection) {
      const heading = document.querySelector('#shop-active-filter');
      if (heading) heading.textContent = `Collection: ${requestedCollection.replace(/[-_]/g, ' ')}`;
    }

    function update() {
      const normalizedSearch = searchTerm.trim().toLowerCase();
      let filtered = products.filter((p) => {
        const categoryOk = category === 'All pieces' || p.category === category;
        const searchOk = !normalizedSearch || `${p.name} ${p.category} ${p.description} ${p.collection}`.toLowerCase().includes(normalizedSearch);
        const collectionTag = (p.tags || []).some((tag) => tag.toLowerCase() === tagSearch.toLowerCase()) || p.collection.toLowerCase().replace(/\s+/g, '-') === tagSearch.toLowerCase();
        return categoryOk && searchOk && (!tagSearch || collectionTag);
      });
      if (sort === 'price-asc') filtered.sort((a, b) => a.price - b.price);
      else if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
      else if (sort === 'newest') filtered.sort((a, b) => Number(Boolean(b.badge && /new|limited|small/i.test(b.badge))) - Number(Boolean(a.badge && /new|limited|small/i.test(a.badge))));
      else if (sort === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));
      const count = document.querySelector('#shop-product-count');
      if (count) count.textContent = `${filtered.length} ${filtered.length === 1 ? 'piece' : 'pieces'}`;
      const clear = document.querySelector('#clear-filters');
      if (clear) clear.hidden = !(normalizedSearch || category !== 'All pieces' || tagSearch);
      categoryButtons.forEach((btn) => btn.classList.toggle('is-active', btn.dataset.categoryFilter === category));
      renderProductCards(grid, filtered);
    }
    categoryButtons.forEach((button) => button.addEventListener('click', () => { category = button.dataset.categoryFilter; update(); }));
    searchInput?.addEventListener('input', () => { searchTerm = searchInput.value; update(); });
    sortSelect?.addEventListener('change', () => { sort = sortSelect.value; update(); });
    document.querySelector('#clear-filters')?.addEventListener('click', () => { category = 'All pieces'; searchTerm = ''; sort = 'featured'; if (searchInput) searchInput.value = ''; if (sortSelect) sortSelect.value = 'featured'; window.history.replaceState({}, '', 'shop.html'); const heading = document.querySelector('#shop-active-filter'); if (heading) heading.textContent = 'Explore the complete collection'; update(); });
    update();
  }

  function initProductPage() {
    const root = document.querySelector('#product-detail-root');
    if (!root) return;
    const params = new URLSearchParams(window.location.search);
    const product = products.find((p) => p.id === params.get('id')) || products[0];
    recentlyViewed = [product.id, ...recentlyViewed.filter((id) => id !== product.id)].slice(0, 6);
    safeWrite('cf-recent-v1', recentlyViewed);
    const isWishlisted = wishlist.includes(product.id);
    root.innerHTML = `<div class="product-detail">
      <div class="product-gallery">
        <div class="product-gallery__thumbs" aria-label="Choose product image">${product.images.map((src, index) => `<button class="product-gallery__thumb ${index === 0 ? 'is-active' : ''}" data-gallery-image="${index}" aria-label="View product image ${index + 1}" aria-pressed="${index === 0}"><img src="${src}" alt="" loading="lazy"></button>`).join('')}</div>
        <div class="product-gallery__main media-wrap"><img id="product-main-image" src="${product.images[0]}" alt="${escapeHtml(product.name)}, handmade ceramic product detail" width="1100" height="1300"></div>
      </div>
      <div class="product-info">
        <div class="breadcrumbs"><a href="index.html">Home</a><span>/</span><a href="shop.html">Shop</a><span>/</span><span>${escapeHtml(product.category)}</span></div>
        <span class="product-info__category">${escapeHtml(product.category)}${product.badge ? ` · ${escapeHtml(product.badge)}` : ''}</span>
        <h1 class="product-info__title">${escapeHtml(product.name)}</h1>
        <div class="product-info__price">${formatPrice(product.price)}</div>
        <p class="product-info__desc">${escapeHtml(product.description)}</p>
        <p class="small-copy">Small-batch making means subtle differences are part of each piece’s character.</p>
        <hr class="product-info__rule">
        <div class="small-copy"><strong>Sample availability:</strong> Available in this local catalogue demo</div>
        <div class="purchase-row"><div class="quantity-control" aria-label="Quantity"><button data-action="product-qty-minus" aria-label="Decrease quantity">−</button><output id="product-quantity">1</output><button data-action="product-qty-plus" aria-label="Increase quantity">+</button></div><button class="button" data-action="add-cart" data-product-id="${escapeHtml(product.id)}" data-use-product-quantity="true">Add to bag · ${formatPrice(product.price)}</button></div>
        <button class="text-link" style="margin-top:16px" data-action="toggle-wishlist" data-product-id="${escapeHtml(product.id)}" aria-pressed="${isWishlisted}">${isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}</button>
        <div class="demo-note">Frontend demonstration only: inventory is sample data. Adding to bag updates this browser’s local demo cart; no order, payment or shipment is created.</div>
        <div class="product-detail-list" style="margin-top:26px">
          <details open><summary>Materials & dimensions</summary><p><strong>Material:</strong> ${escapeHtml(product.material)}<br><strong>Dimensions:</strong> ${escapeHtml(product.dimensions)}<br><strong>Finish:</strong> ${escapeHtml(product.finish)}</p></details>
          <details><summary>Care instructions</summary><p>${escapeHtml(product.care)}</p></details>
          <details><summary>Shipping & returns</summary><p>Sample policy: made-to-order timelines and delivery details would be confirmed by a real studio. No shipping service is connected to this demonstration. Contact the studio team for a real order or commission.</p></details>
        </div>
      </div>
    </div>`;
    const related = products.filter((p) => p.id !== product.id && (p.category === product.category || p.collection === product.collection)).slice(0, 4);
    renderProductCards('#related-products', related.length >= 4 ? related : products.filter((p) => p.id !== product.id).slice(0, 4));
    const recentProducts = recentlyViewed.map((id) => products.find((p) => p.id === id)).filter((p) => p && p.id !== product.id);
    const recentWrap = document.querySelector('#recent-products-wrap');
    if (recentWrap && recentProducts.length) { recentWrap.hidden = false; renderProductCards('#recent-products', recentProducts.slice(0, 4)); }
    document.title = `${product.name} | Clay & Form`;
  }

  function initCollections() {
    const root = document.querySelector('#collections-grid');
    if (!root) return;
    root.innerHTML = collections.map((collection, index) => `<article class="collection-feature reveal"><a class="collection-feature__image media-wrap" href="shop.html?collection=${encodeURIComponent(collection.target)}" aria-label="Explore ${escapeHtml(collection.name)}"><img src="${collection.image}" alt="${escapeHtml(collection.name)} ceramic collection" loading="lazy" width="1000" height="700"></a><div class="collection-feature__body"><div><span class="eyebrow">Collection 0${index + 1} · ${escapeHtml(collection.count)}</span><h3>${escapeHtml(collection.name)}</h3><p>${escapeHtml(collection.description)}</p></div><a href="shop.html?collection=${encodeURIComponent(collection.target)}" class="circle-arrow" aria-label="Shop ${escapeHtml(collection.name)}">↗</a></div></article>`).join('');
  }

  function articleCard(article) {
    return `<article class="journal-card reveal"><a href="#article-${escapeHtml(article.id)}" class="journal-card__image media-wrap" data-action="read-article" data-article-id="${escapeHtml(article.id)}" aria-label="Read ${escapeHtml(article.title)}"><img src="${article.image}" alt="${escapeHtml(article.title)}" loading="lazy" width="900" height="630"></a><div class="journal-card__meta"><span>${escapeHtml(article.category)}</span><span>${escapeHtml(article.date)}</span><span>${escapeHtml(article.read)}</span></div><h3><button class="plain-title-button" data-action="read-article" data-article-id="${escapeHtml(article.id)}">${escapeHtml(article.title)}</button></h3><p>${escapeHtml(article.excerpt)}</p><button class="text-link" data-action="read-article" data-article-id="${escapeHtml(article.id)}">Read story</button></article>`;
  }

  function initJournal() {
    const grid = document.querySelector('#journal-grid');
    if (!grid) return;
    let category = 'All stories';
    let term = '';
    const categoryButtons = [...document.querySelectorAll('[data-journal-category]')];
    const search = document.querySelector('#journal-search');
    function update() {
      const value = term.toLowerCase().trim();
      const filtered = articles.filter((article) => (category === 'All stories' || article.category === category) && (!value || `${article.title} ${article.excerpt} ${article.category} ${article.author}`.toLowerCase().includes(value)));
      grid.innerHTML = filtered.length ? filtered.map(articleCard).join('') : '<div class="empty-state"><h3 class="heading-medium">No stories found</h3><p>Try another search phrase or choose a different category.</p></div>';
      categoryButtons.forEach((btn) => btn.classList.toggle('is-active', btn.dataset.journalCategory === category));
      const count = document.querySelector('#journal-count'); if (count) count.textContent = `${filtered.length} ${filtered.length === 1 ? 'story' : 'stories'}`;
    }
    categoryButtons.forEach((btn) => btn.addEventListener('click', () => { category = btn.dataset.journalCategory; update(); }));
    search?.addEventListener('input', () => { term = search.value; update(); });
    const featured = document.querySelector('#featured-article');
    if (featured) {
      const item = articles[0];
      featured.innerHTML = `<a href="#article-${item.id}" class="journal-featured__image media-wrap" data-action="read-article" data-article-id="${item.id}" aria-label="Read ${escapeHtml(item.title)}"><img src="${item.image}" alt="${escapeHtml(item.title)}" width="1100" height="800"></a><div class="journal-featured__copy"><span class="eyebrow">Featured story · ${escapeHtml(item.read)}</span><h2>${escapeHtml(item.title)}</h2><p>${escapeHtml(item.excerpt)}</p><p class="small-copy">${escapeHtml(item.date)} · By ${escapeHtml(item.author)}</p><button class="text-link" data-action="read-article" data-article-id="${item.id}">Read the story</button></div>`;
    }
    update();
  }

  function initWorkshops() {
    const root = document.querySelector('#workshop-grid');
    if (!root) return;
    root.innerHTML = workshops.map((workshop) => `<article class="workshop-card reveal"><a href="#workshop-${workshop.id}" class="workshop-card__image media-wrap" data-action="workshop-details" data-workshop-id="${workshop.id}" aria-label="View ${escapeHtml(workshop.title)}"><img src="${workshop.image}" alt="${escapeHtml(workshop.title)} pottery workshop" loading="lazy" width="1000" height="700"></a><div class="workshop-card__body"><div class="workshop-card__meta"><span>${escapeHtml(workshop.category)}</span><span>${escapeHtml(workshop.duration)}</span><span>${escapeHtml(workshop.level)}</span></div><h3>${escapeHtml(workshop.title)}</h3><p>${escapeHtml(workshop.description)}</p><div class="workshop-card__bottom"><span class="workshop-card__price">${formatPrice(workshop.price)} <small class="small-copy">/ person*</small></span><button class="text-link" data-action="workshop-details" data-workshop-id="${workshop.id}">Details & enquiry</button></div></div></article>`).join('');
  }

  function ensureOverlayRoots() {
    if (!document.querySelector('#overlay-root')) document.body.insertAdjacentHTML('beforeend', '<div class="overlay-root" id="overlay-root" aria-hidden="true"><div class="overlay-backdrop" data-action="close-modal"></div><section class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="modal-title" tabindex="-1"><button class="icon-button modal-close" data-action="close-modal" aria-label="Close dialog">' + icon('close') + '</button><div id="modal-content"></div></section></div>');
    if (!document.querySelector('#drawer-root')) document.body.insertAdjacentHTML('beforeend', '<div class="drawer-root" id="drawer-root" aria-hidden="true"><div class="drawer-backdrop" data-action="close-drawer"></div><aside class="drawer-panel" role="dialog" aria-modal="true" aria-label="Shopping bag" tabindex="-1" id="drawer-panel"></aside></div>');
    if (!document.querySelector('#toast-stack')) document.body.insertAdjacentHTML('beforeend', '<div class="toast-stack" id="toast-stack" aria-live="polite" aria-atomic="true"></div>');
  }

  function toast(message) {
    const stack = document.querySelector('#toast-stack');
    if (!stack) return;
    const el = document.createElement('div'); el.className = 'toast'; el.textContent = message; stack.appendChild(el);
    window.setTimeout(() => el.remove(), 3400);
  }

  function openModal(content, options = {}) {
    ensureOverlayRoots();
    closeDrawer();
    const root = document.querySelector('#overlay-root');
    const panel = root.querySelector('.modal-panel');
    const contentNode = root.querySelector('#modal-content');
    panel.classList.toggle('modal-panel--wide', Boolean(options.wide));
    const closeButton = panel.querySelector('[data-action="close-modal"]');
    if (closeButton) closeButton.innerHTML = icon('close');
    contentNode.innerHTML = content;
    root.classList.add('is-open'); root.setAttribute('aria-hidden', 'false'); document.body.classList.add('no-scroll');
    previousFocus = document.activeElement;
    window.setTimeout(() => { const target = panel.querySelector('input, button, a, select, textarea, [tabindex="0"]') || panel; target.focus?.(); }, 30);
    if (currentModalCleanup) currentModalCleanup();
    currentModalCleanup = options.onOpen ? options.onOpen(panel) : null;
  }

  function closeModal() {
    const root = document.querySelector('#overlay-root');
    if (!root || !root.classList.contains('is-open')) return;
    root.classList.remove('is-open'); root.setAttribute('aria-hidden', 'true'); document.body.classList.remove('no-scroll');
    if (currentModalCleanup) { currentModalCleanup(); currentModalCleanup = null; }
    previousFocus?.focus?.();
  }

  function openDrawer(type = 'cart') {
    ensureOverlayRoots(); closeModal(); activeDrawer = type;
    const root = document.querySelector('#drawer-root'); const panel = root.querySelector('#drawer-panel');
    panel.setAttribute('aria-label', type === 'wishlist' ? 'Wishlist' : 'Shopping bag');
    root.classList.add('is-open'); root.setAttribute('aria-hidden', 'false'); document.body.classList.add('no-scroll');
    renderDrawer();
    previousFocus = document.activeElement;
    window.setTimeout(() => panel.focus(), 30);
  }

  function closeDrawer() {
    const root = document.querySelector('#drawer-root');
    if (!root || !root.classList.contains('is-open')) return;
    root.classList.remove('is-open'); root.setAttribute('aria-hidden', 'true'); document.body.classList.remove('no-scroll'); activeDrawer = null;
    previousFocus?.focus?.();
  }

  function renderDrawer() {
    const panel = document.querySelector('#drawer-panel'); if (!panel) return;
    if (activeDrawer === 'wishlist') {
      const items = wishlist.map((id) => products.find((p) => p.id === id)).filter(Boolean);
      panel.innerHTML = `<div class="drawer-header"><h2>Your saved pieces <span class="small-copy">(${items.length})</span></h2><button class="icon-button" data-action="close-drawer" aria-label="Close wishlist">${icon('close')}</button></div><div class="drawer-items">${items.length ? items.map((p) => `<article class="drawer-item"><a class="drawer-item__image media-wrap" href="product.html?id=${p.id}"><img src="${p.images[0]}" alt="${escapeHtml(p.name)}"></a><div><h3><a href="product.html?id=${p.id}">${escapeHtml(p.name)}</a></h3><div class="drawer-item__meta">${formatPrice(p.price)}</div><button class="text-link" style="margin-top:9px" data-action="add-cart" data-product-id="${p.id}">Add to bag</button></div><button class="drawer-item__remove" data-action="toggle-wishlist" data-product-id="${p.id}" aria-label="Remove ${escapeHtml(p.name)} from wishlist">Remove</button></article>`).join('') : `<div class="drawer-empty"><div>${icon('heart')}</div><h3 class="heading-medium">Keep a piece close</h3><p class="small-copy">Save the pieces you love and return to them later.</p><button class="button button--outline" data-action="close-drawer">Explore ceramics</button></div>`}</div>`;
      return;
    }
    const items = Object.entries(cart).map(([id, item]) => ({ product: products.find((p) => p.id === id), qty: Number(item.qty) || 0 })).filter((entry) => entry.product && entry.qty > 0);
    const subtotal = items.reduce((sum, entry) => sum + entry.product.price * entry.qty, 0);
    panel.innerHTML = `<div class="drawer-header"><h2>Your bag <span class="small-copy">(${items.reduce((sum, item) => sum + item.qty, 0)})</span></h2><button class="icon-button" data-action="close-drawer" aria-label="Close shopping bag">${icon('close')}</button></div><div class="drawer-items">${items.length ? items.map(({ product: p, qty }) => `<article class="drawer-item"><a class="drawer-item__image media-wrap" href="product.html?id=${p.id}"><img src="${p.images[0]}" alt="${escapeHtml(p.name)}"></a><div><h3><a href="product.html?id=${p.id}">${escapeHtml(p.name)}</a></h3><div class="drawer-item__meta">${formatPrice(p.price)} each</div><div class="drawer-item__qty"><button data-action="cart-qty" data-product-id="${p.id}" data-delta="-1" aria-label="Decrease quantity of ${escapeHtml(p.name)}">−</button><span>${qty}</span><button data-action="cart-qty" data-product-id="${p.id}" data-delta="1" aria-label="Increase quantity of ${escapeHtml(p.name)}">+</button></div></div><button class="drawer-item__remove" data-action="remove-cart" data-product-id="${p.id}">Remove</button></article>`).join('') : `<div class="drawer-empty"><div>${icon('bag')}</div><h3 class="heading-medium">Your bag is at rest</h3><p class="small-copy">Find a piece that feels at home in your everyday rituals.</p><button class="button button--outline" data-action="close-drawer">Explore ceramics</button></div>`}</div>${items.length ? `<div class="drawer-footer"><div class="drawer-footer__row"><span class="small-copy">Subtotal</span><strong>${formatPrice(subtotal)}</strong></div><p class="small-copy">Delivery and taxes, if applicable, are not calculated in this demo.</p><button class="button" data-action="demo-checkout">Continue to demo checkout ↗</button><p class="small-copy" style="margin:12px 0 0">Demo only — no payment or order is created.</p></div>` : ''}`;
  }

  function toggleWishlist(id) {
    if (!products.some((p) => p.id === id)) return;
    if (wishlist.includes(id)) { wishlist = wishlist.filter((item) => item !== id); toast('Removed from your wishlist.'); }
    else { wishlist = [...wishlist, id]; toast('Saved to your wishlist.'); }
    safeWrite('cf-wishlist-v1', wishlist); updateHeaderCounts(); refreshWishlistButtons();
    if (activeDrawer === 'wishlist') renderDrawer();
  }

  function refreshWishlistButtons() {
    document.querySelectorAll('[data-action="toggle-wishlist"][data-product-id]').forEach((btn) => {
      const active = wishlist.includes(btn.dataset.productId); btn.classList.toggle('is-active', active); btn.setAttribute('aria-pressed', String(active));
      if (btn.querySelector('svg')) btn.querySelector('svg').style.fill = active ? 'currentColor' : 'none';
      if (btn.classList.contains('product-card__heart')) btn.setAttribute('aria-label', `${active ? 'Remove from' : 'Add to'} wishlist: ${getProduct(btn.dataset.productId).name}`);
      else btn.textContent = active ? 'Remove from wishlist' : 'Add to wishlist';
    });
  }

  function addToCart(id, quantity = 1) {
    const p = products.find((item) => item.id === id); if (!p) return;
    const currentQty = Number(cart[id]?.qty || 0);
    cart[id] = { qty: Math.max(1, Math.min(99, currentQty + quantity)) };
    safeWrite('cf-cart-v1', cart); updateHeaderCounts(); toast(`${p.name} added to your bag.`);
    if (activeDrawer === 'cart') renderDrawer(); else openDrawer('cart');
  }

  function changeCartQty(id, delta) {
    if (!cart[id]) return;
    const next = Number(cart[id].qty) + delta;
    if (next <= 0) delete cart[id]; else cart[id].qty = Math.min(99, next);
    safeWrite('cf-cart-v1', cart); updateHeaderCounts(); renderDrawer();
  }

  function removeCartItem(id) { delete cart[id]; safeWrite('cf-cart-v1', cart); updateHeaderCounts(); renderDrawer(); toast('Piece removed from your bag.'); }

  function openQuickView(id) {
    const p = getProduct(id);
    openModal(`<span class="modal-panel__eyebrow">${escapeHtml(p.category)}${p.badge ? ` · ${escapeHtml(p.badge)}` : ''}</span><div style="display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1fr);gap:26px;align-items:start"><div class="media-wrap" style="aspect-ratio:4/5"><img src="${p.images[0]}" alt="${escapeHtml(p.name)}" width="700" height="900"></div><div><h2 id="modal-title">${escapeHtml(p.name)}</h2><p style="font-size:18px;color:var(--text)">${formatPrice(p.price)}</p><p>${escapeHtml(p.description)}</p><p class="small-copy">${escapeHtml(p.material)} · ${escapeHtml(p.dimensions)}</p><button class="button" data-action="add-cart" data-product-id="${p.id}">Add to bag</button><p style="margin-top:16px"><a class="text-link" href="product.html?id=${p.id}">View full details</a></p></div></div>`, { wide: true });
  }

  function openArticle(id) {
    const article = articles.find((item) => item.id === id); if (!article) return;
    openModal(`<span class="modal-panel__eyebrow">${escapeHtml(article.category)} · ${escapeHtml(article.read)}</span><h2 id="modal-title">${escapeHtml(article.title)}</h2><p class="small-copy">${escapeHtml(article.date)} · By ${escapeHtml(article.author)}</p><div class="media-wrap" style="aspect-ratio:16/8;margin:22px 0"><img src="${article.image}" alt="${escapeHtml(article.title)}" width="1100" height="550"></div>${article.body.map((para) => `<p>${escapeHtml(para)}</p>`).join('')}<p class="small-copy" style="margin-top:25px">A Clay & Form journal note · Fictional studio publication</p>`, { wide: true });
  }

  function openWorkshopDetails(id) {
    const w = workshops.find((item) => item.id === id); if (!w) return;
    openModal(`<span class="modal-panel__eyebrow">${escapeHtml(w.category)} · ${escapeHtml(w.duration)}</span><h2 id="modal-title">${escapeHtml(w.title)}</h2><div class="media-wrap" style="aspect-ratio:16/7;margin:20px 0"><img src="${w.image}" alt="${escapeHtml(w.title)}" width="1000" height="450"></div><p>${escapeHtml(w.description)}</p><p>${escapeHtml(w.details)}</p><div class="demo-note">Sample price: ${formatPrice(w.price)} per person. This is not live availability and no real booking is made.</div><button class="button" data-action="workshop-enquire" data-workshop-id="${w.id}">Make a demo enquiry</button>`, { onOpen: () => null });
  }

  function openWorkshopForm(id) {
    const w = workshops.find((item) => item.id === id); if (!w) return;
    closeModal();
    const target = document.querySelector('#workshop-enquiry');
    if (target) { document.querySelector('#workshop-choice')?.setAttribute('value', w.title); const select = document.querySelector('#workshop-choice'); if (select) select.value = w.title; target.scrollIntoView({ behavior: 'smooth', block: 'start' }); select?.focus({ preventScroll: true }); toast(`${w.title} selected in the enquiry form.`); }
    else openModal(`<span class="modal-panel__eyebrow">Demo enquiry</span><h2 id="modal-title">Ask about ${escapeHtml(w.title)}</h2><p>This booking demonstration does not contact a real studio. Visit the workshops page to use the local enquiry form.</p><a class="button" href="workshops.html#workshop-enquiry">Go to enquiry form</a>`);
  }

  function openGlobalSearch() {
    openModal(`<div class="search-overlay"><div class="search-overlay__bar">${icon('search')}<input type="search" id="global-search-input" placeholder="Search ceramics, collections…" aria-label="Search the catalogue"><button class="icon-button" data-action="close-modal" aria-label="Close search">${icon('close')}</button></div><div class="search-overlay__content"><div class="shop-toolbar"><span class="eyebrow">Find your piece</span><span id="global-search-count" class="small-copy">16 pieces in the catalogue</span></div><div id="global-search-results" class="search-results" style="margin-top:22px"></div></div></div>`, { wide: true, onOpen: (panel) => {
      const input = panel.querySelector('#global-search-input');
      const results = panel.querySelector('#global-search-results');
      const count = panel.querySelector('#global-search-count');
      const render = () => { const q = input.value.toLowerCase().trim(); const found = products.filter((p) => `${p.name} ${p.category} ${p.collection} ${p.description}`.toLowerCase().includes(q)).slice(0, 8); count.textContent = `${found.length} ${found.length === 1 ? 'piece' : 'pieces'} found`; results.innerHTML = found.length ? found.map((p) => `<article class="search-result"><a class="search-result__image media-wrap" href="product.html?id=${p.id}" aria-label="View ${escapeHtml(p.name)}"><img src="${p.images[0]}" alt="${escapeHtml(p.name)}" loading="lazy"></a><h3><a href="product.html?id=${p.id}">${escapeHtml(p.name)}</a></h3><p>${formatPrice(p.price)}</p></article>`).join('') : '<p class="small-copy">No pieces match that search. Try “vase”, “tableware” or “mug”.</p>'; };
      input.addEventListener('input', render); render(); input.focus(); return () => input.removeEventListener('input', render);
    }});
  }

  function demoCheckout() {
    const count = Object.values(cart).reduce((sum, item) => sum + Number(item.qty || 0), 0);
    openModal(`<span class="modal-panel__eyebrow">Frontend demonstration</span><h2 id="modal-title">A considered checkout experience</h2><p>Your bag currently contains ${count} ${count === 1 ? 'item' : 'items'}. This project has no payment provider, shipping integration or order backend, so it cannot take payment or create a real order.</p><p>You can safely continue exploring the interface. No card details are requested or stored.</p><button class="button" data-action="close-modal">Return to the collection</button>`, { onOpen: () => null });
  }

  function handleDemoForm(form) {
    const status = form.querySelector('.form-status');
    if (!form.reportValidity()) return;
    if (status) { status.textContent = form.dataset.successMessage || 'Thank you — your demonstration form has been completed locally. No message was sent or stored by a business.'; status.classList.add('is-visible'); status.setAttribute('role', 'status'); }
    const submit = form.querySelector('[type="submit"]');
    if (submit) { const original = submit.textContent; submit.textContent = 'Submitted locally ✓'; submit.disabled = true; window.setTimeout(() => { submit.textContent = original; submit.disabled = false; }, 2600); }
    if (form.id === 'newsletter-form' || form.classList.contains('newsletter-form')) form.reset();
    if (form.id === 'workshop-enquiry') form.reset();
    toast('Demo complete — no data was sent to a server.');
  }

  function initGlobalEvents() {
    document.addEventListener('click', (event) => {
      const actionElement = event.target.closest('[data-action]');
      if (!actionElement) return;
      const action = actionElement.dataset.action;
      if (action === 'theme') { const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'; applyTheme(next); try { localStorage.setItem('cf-theme-v1', next); } catch { /* preference cannot be persisted in restricted browsing contexts */ } }
      else if (action === 'menu') { const nav = document.querySelector('#primary-navigation'); const open = nav?.classList.toggle('is-open'); actionElement.setAttribute('aria-expanded', String(Boolean(open))); actionElement.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu'); actionElement.innerHTML = open ? icon('close') : icon('menu'); }
      else if (action === 'cart') openDrawer('cart');
      else if (action === 'wishlist') openDrawer('wishlist');
      else if (action === 'search') openGlobalSearch();
      else if (action === 'close-modal') closeModal();
      else if (action === 'close-drawer') closeDrawer();
      else if (action === 'toggle-wishlist') toggleWishlist(actionElement.dataset.productId);
      else if (action === 'quick-view') openQuickView(actionElement.dataset.productId);
      else if (action === 'add-cart') { const quantity = actionElement.hasAttribute('data-use-product-quantity') ? Number(document.querySelector('#product-quantity')?.textContent || 1) : 1; addToCart(actionElement.dataset.productId, quantity); }
      else if (action === 'cart-qty') changeCartQty(actionElement.dataset.productId, Number(actionElement.dataset.delta));
      else if (action === 'remove-cart') removeCartItem(actionElement.dataset.productId);
      else if (action === 'demo-checkout') demoCheckout();
      else if (action === 'read-article') { event.preventDefault(); openArticle(actionElement.dataset.articleId); }
      else if (action === 'workshop-details') { event.preventDefault(); openWorkshopDetails(actionElement.dataset.workshopId); }
      else if (action === 'workshop-enquire') openWorkshopForm(actionElement.dataset.workshopId);
      else if (action === 'product-qty-minus' || action === 'product-qty-plus') { const output = document.querySelector('#product-quantity'); if (output) output.textContent = String(Math.max(1, Math.min(20, Number(output.textContent || 1) + (action === 'product-qty-plus' ? 1 : -1)))); }
      else if (action === 'clear-shop-filters') { document.querySelector('#clear-filters')?.click(); }
    });

    document.addEventListener('click', (event) => {
      const thumb = event.target.closest('[data-gallery-image]'); if (!thumb) return;
      const pageId = new URLSearchParams(window.location.search).get('id'); const product = products.find((p) => p.id === pageId) || products[0];
      const index = Number(thumb.dataset.galleryImage); const main = document.querySelector('#product-main-image'); if (main && product.images[index]) { main.src = product.images[index]; main.alt = `${product.name}, view ${index + 1}`; }
      document.querySelectorAll('[data-gallery-image]').forEach((button) => { const active = button === thumb; button.classList.toggle('is-active', active); button.setAttribute('aria-pressed', String(active)); });
    });

    document.addEventListener('submit', (event) => {
      const form = event.target.closest('form[data-demo-form]'); if (!form) return;
      event.preventDefault(); handleDemoForm(form);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') { closeModal(); closeDrawer(); document.querySelector('#primary-navigation')?.classList.remove('is-open'); }
      const overlay = document.querySelector('#overlay-root.is-open .modal-panel');
      if (event.key === 'Tab' && overlay) {
        const focusables = [...overlay.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex="0"]')].filter((el) => el.offsetParent !== null);
        if (!focusables.length) return;
        const first = focusables[0], last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    });

    document.addEventListener('error', (event) => {
      const image = event.target; if (!(image instanceof HTMLImageElement)) return;
      const wrapper = image.closest('.media-wrap, .drawer-item__image, .product-gallery__thumb, .product-gallery__main, .search-result__image');
      if (wrapper) wrapper.classList.add('is-image-fallback');
      image.alt = image.alt || 'Ceramic product image unavailable';
    }, true);
  }

  function initForms() {
    document.querySelectorAll('form[data-demo-form]').forEach((form) => {
      form.addEventListener('input', (event) => {
        const field = event.target;
        if (field.matches('input[type="email"]') && field.value && !field.validity.valid) field.setAttribute('aria-invalid', 'true');
        else field.removeAttribute('aria-invalid');
      });
    });
  }

  function init() {
    let savedTheme = null; try { savedTheme = localStorage.getItem('cf-theme-v1'); } catch { /* system theme will be used */ }
    if (savedTheme === 'dark' || savedTheme === 'light') applyTheme(savedTheme);
    else applyTheme(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    ensureOverlayRoots();
    initHome(); initShop(); initProductPage(); initCollections(); initJournal(); initWorkshops(); initGlobalEvents(); initForms(); updateHeaderCounts();
    document.documentElement.classList.add('reveal-ready');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();

/* ============================================
   CALOTTÉ — DATA
   ============================================ */
const PRODUCTS = [
  {
    id: 'calotte-001', slug: 'royal-gold-crest-tee',
    name: 'CALOTTÉ Royal Gold Crest Tee', category: 'T-Shirts', catKey: 't-shirts',
    price: 2499,
    description: 'A premium black tee with a refined gold embroidered emblem. Considered proportions and a clean drape.',
    details: 'Heavyweight cotton jersey. Embroidered gold-tone crest at centre front. Ribbed crew neck. Relaxed fit.',
    care: 'Cold hand wash separately. Do not bleach. Iron on reverse, avoiding embroidery. Dry flat in shade.',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80',
    available: false, sizes: ['S','M','L','XL','XXL'], featured: true, isNew: true,
  },
  {
    id: 'calotte-002', slug: 'couture-heavyweight-hoodie',
    name: 'CALOTTÉ Couture Heavyweight Hoodie', category: 'Hoodies', catKey: 'hoodies',
    price: 4999,
    description: 'A black heavyweight hoodie with understated gold details and a substantial, structured silhouette.',
    details: 'Brushed loopback cotton fleece. Double-layer hood. Gold-tone metal eyelets and drawcord tips. Kangaroo pocket.',
    care: 'Machine wash cold, inside out. Do not tumble dry. Cool iron on reverse.',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1000&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1000&q=80',
    available: false, sizes: ['S','M','L','XL','XXL'], featured: true, isNew: true,
  },
  {
    id: 'calotte-003', slug: 'urban-oversized-tee',
    name: 'CALOTTÉ Urban Oversized Tee', category: 'Oversized', catKey: 'oversized',
    price: 2799,
    description: 'A contemporary oversized tee with minimal graphic detailing and a deliberately boxy profile.',
    details: 'Mid-weight cotton jersey. Dropped shoulder. Boxy body. Tonal CALOTTÉ wordmark at back neck.',
    care: 'Cold machine wash. Do not bleach. Tumble dry low. Warm iron if needed.',
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=1000&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=80',
    available: false, sizes: ['S','M','L','XL'], featured: true, isNew: false,
  },
  {
    id: 'calotte-004', slug: 'gold-stitch-denim',
    name: 'CALOTTÉ Gold-Stitch Denim', category: 'Jeans', catKey: 'jeans',
    price: 5999,
    description: 'Premium dark denim with tasteful contrasting stitching and considered hardware.',
    details: 'Rigid cotton denim. Straight relaxed leg. Contrast gold-tone stitching. Engraved metal hardware.',
    care: 'Wash sparingly, inside out, in cold water. Do not bleach. Hang dry.',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1000&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=80',
    available: false, sizes: ['30','32','34','36','38'], featured: true, isNew: true,
  },
  {
    id: 'calotte-005', slug: 'artisanal-chronicle-tee',
    name: 'CALOTTÉ Artisanal Chronicle Tee', category: 'T-Shirts', catKey: 't-shirts',
    price: 2699,
    description: 'An off-white or black tee with refined typographic artwork and a soft, broken-in hand feel.',
    details: 'Garment-dyed cotton jersey. Typographic artwork at front. Ribbed neckline. Relaxed fit.',
    care: 'Cold hand wash. Do not bleach. Iron on reverse. Dry flat in shade.',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1000&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1000&q=80',
    available: false, sizes: ['S','M','L','XL'], featured: true, isNew: false,
  },
  {
    id: 'calotte-006', slug: 'signature-knit-sweatshirt',
    name: 'CALOTTÉ Signature Knit Sweatshirt', category: 'Oversized', catKey: 'oversized',
    price: 4499,
    description: 'Premium knitwear with restrained metallic detailing and a soft, contoured drape.',
    details: 'Fine-gauge knit blend. Subtle metallic yarn accents. Ribbed cuffs and hem. Oversized fit.',
    care: 'Hand wash cold. Do not wring. Dry flat. Store folded.',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1000&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1000&q=80',
    available: false, sizes: ['S','M','L','XL'], featured: true, isNew: false,
  },
];

const FAQS = [
  { q: 'What materials are used in CALOTTÉ garments?', a: 'Material composition will be confirmed for each product before launch. Draft product pages currently describe the intended fabric direction only. Always refer to the care label on the final garment.' },
  { q: 'How should I care for garments with embroidery or metallic details?', a: 'We recommend cold hand washing or professional dry cleaning for embroidered and metallic-detail garments. Do not bleach. Iron on reverse at a low temperature and avoid pressing directly onto embroidery or metal hardware.' },
  { q: 'What does a limited collection mean?', a: 'CALOTTÉ intends to operate through considered, limited releases. Final production quantities and restock policies will be published when the collection launches. We will not claim numbered editions unless that policy is confirmed.' },
  { q: 'What is the return and exchange policy?', a: 'The final return and exchange policy is being confirmed. It will be published before any orders are accepted. No return window or refund entitlement is promised on this pre-launch site.' },
  { q: 'How do I select the correct size?', a: 'A detailed size guide will be published with the launch collection. Until then, please contact the studio for guidance. Our silhouettes are intended to be relaxed and oversized; we will provide measured garment specifications when available.' },
  { q: 'How can I contact customer support?', a: 'Email concierge@calotte.com or use the contact form on this site. Response times will be confirmed when the studio begins full operations.' },
  { q: 'When will pre-launch products become available?', a: 'The debut collection is in development. Join the launch notification list to receive one email when products become available. No launch date is guaranteed until it is officially announced.' },
];

/* ============================================
   STATE (persisted)
   ============================================ */
const LS_CART = 'calotte-cart-v1';
const LS_WISH = 'calotte-wishlist-v1';
const LS_FORMS = 'calotte-forms-v1';

const getLS = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } };
const setLS = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };

let cart = getLS(LS_CART, []);
let wishlist = getLS(LS_WISH, []);

/* ============================================
   HELPERS
   ============================================ */
const fmtINR = (n) => new Intl.NumberFormat('en-IN', { style:'currency', currency:'INR', maximumFractionDigits:0 }).format(n);
const findProduct = (id) => PRODUCTS.find(p => p.id === id);
const findProductBySlug = (slug) => PRODUCTS.find(p => p.slug === slug);
const escape = (s) => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function toast(message, type = 'success') {
  const el = document.createElement('div');
  el.className = 'toast' + (type === 'error' ? ' error' : '');
  el.textContent = message;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 4000);
}

/* ============================================
   CART
   ============================================ */
function addToCart(productId, size) {
  const product = findProduct(productId);
  if (!product || !product.available) { toast('This piece is coming soon', 'error'); return; }
  const existing = cart.find(i => i.productId === productId && i.size === size);
  if (existing) existing.quantity += 1;
  else cart.push({ productId, size, quantity: 1 });
  saveCart();
  renderCart();
  toast('Added to your bag');
}

function removeFromCart(productId, size) {
  cart = cart.filter(i => !(i.productId === productId && i.size === size));
  saveCart();
  renderCart();
}

function updateQty(productId, size, delta) {
  const item = cart.find(i => i.productId === productId && i.size === size);
  if (!item) return;
  item.quantity = Math.max(1, item.quantity + delta);
  saveCart();
  renderCart();
}

function saveCart() {
  setLS(LS_CART, cart);
  const count = cart.reduce((s, i) => s + i.quantity, 0);
  const badge = document.getElementById('cart-badge');
  if (count > 0) { badge.hidden = false; badge.textContent = count; }
  else badge.hidden = true;
  const label = document.getElementById('cart-count-label');
  if (label) label.textContent = count;
}

function renderCart() {
  const body = document.getElementById('cart-body');
  const foot = document.getElementById('cart-foot');
  if (!body) return;

  if (cart.length === 0) {
    body.innerHTML = `
      <div class="cart-empty">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2l-2 5v13a2 2 0 002 2h12a2 2 0 002-2V7l-2-5z"/><path d="M4 7h16M16 11a4 4 0 01-8 0"/></svg>
        <p>Your shopping bag is empty.</p>
        <p class="muted small">The debut collection is coming soon. Join the launch list to be notified.</p>
        <a href="#/shop" class="btn btn-outline mt-4" data-close>Explore the Anthology</a>
      </div>`;
    foot.innerHTML = '';
    return;
  }

  body.innerHTML = cart.map(item => {
    const p = findProduct(item.productId);
    if (!p) return '';
    return `
      <div class="cart-item">
        <img src="${p.image}" alt="${escape(p.name)}" />
        <div class="cart-item-info">
          <div class="cart-item-top">
            <div>
              <p class="cart-item-name">${escape(p.name)}</p>
              <p class="cart-item-size">Size ${escape(item.size)}</p>
            </div>
            <button class="cart-item-remove" data-remove data-id="${p.id}" data-size="${escape(item.size)}" aria-label="Remove ${escape(p.name)}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 6l12 12M18 6L6 18"/></svg>
            </button>
          </div>
          <div class="cart-item-bottom">
            <div class="qty-control">
              <button data-qty data-id="${p.id}" data-size="${escape(item.size)}" data-delta="-1" aria-label="Decrease quantity">−</button>
              <span>${item.quantity}</span>
              <button data-qty data-id="${p.id}" data-size="${escape(item.size)}" data-delta="1" aria-label="Increase quantity">+</button>
            </div>
            <span class="cart-line-price">${fmtINR(p.price * item.quantity)}</span>
          </div>
        </div>
      </div>`;
  }).join('');

  const subtotal = cart.reduce((s, i) => {
    const p = findProduct(i.productId);
    return s + (p ? p.price * i.quantity : 0);
  }, 0);

  foot.innerHTML = `
    <div class="cart-summary"><span>Subtotal</span><strong>${fmtINR(subtotal)}</strong></div>
    <p class="cart-note">Shipping calculated at checkout. Taxes included where applicable.</p>
    <button class="btn btn-gold full" disabled style="margin-top:16px;opacity:.4;cursor:not-allowed">Checkout Coming Soon</button>
    <p class="cart-note" style="text-align:center;margin-top:8px">Purchasing will be enabled when the debut collection launches.</p>`;
}

/* ============================================
   WISHLIST
   ============================================ */
function toggleWish(productId) {
  if (wishlist.includes(productId)) wishlist = wishlist.filter(id => id !== productId);
  else wishlist.push(productId);
  setLS(LS_WISH, wishlist);
  updateWishBadge();
  // Re-render product grids so hearts update
  if (document.querySelector('[data-view="home"]:not([hidden])')) renderFeatured();
  if (document.querySelector('[data-view="shop"]:not([hidden])')) renderShop();
  if (document.querySelector('[data-view="wishlist"]:not([hidden])')) renderWishlist();
  if (document.querySelector('[data-view="product"]:not([hidden])')) renderProductDetail(currentProductSlug);
}

function updateWishBadge() {
  const badge = document.getElementById('wishlist-badge');
  if (wishlist.length > 0) { badge.hidden = false; badge.textContent = wishlist.length; }
  else badge.hidden = true;
}

function renderWishlist() {
  const grid = document.getElementById('wishlist-grid');
  const empty = document.getElementById('wishlist-empty');
  if (!grid) return;
  const items = PRODUCTS.filter(p => wishlist.includes(p.id));
  if (items.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'block';
  } else {
    empty.style.display = 'none';
    grid.innerHTML = items.map(renderProductCard).join('');
    bindProductCardEvents(grid);
  }
}

/* ============================================
   PRODUCT CARD
   ============================================ */
function renderProductCard(p) {
  const wished = wishlist.includes(p.id);
  return `
    <article class="product-card">
      <div class="img-wrap">
        <a href="#/product/${p.slug}" aria-label="View ${escape(p.name)}">
          <img class="main" src="${p.image}" alt="${escape(p.name)}" loading="lazy" />
          <img class="hover" src="${p.hoverImage}" alt="" loading="lazy" />
        </a>
        ${!p.available ? '<span class="product-badge">Coming Soon</span>' : ''}
        <button class="wish-btn ${wished ? 'active' : ''}" data-wish data-id="${p.id}" aria-label="${wished ? 'Remove from wishlist' : 'Add to wishlist'}" aria-pressed="${wished}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 00-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 000-7.8z"/></svg>
        </button>
        <button class="quick-btn" data-quick data-id="${p.id}" aria-label="Quick view ${escape(p.name)}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          Quick View
        </button>
      </div>
      <div class="product-info">
        <p class="product-cat">${p.category}</p>
        <a class="product-name" href="#/product/${p.slug}">${escape(p.name)}</a>
        <p class="product-desc">${escape(p.description)}</p>
        <div class="product-foot">
          <span class="product-price">${fmtINR(p.price)}</span>
          <span class="product-status">${p.available ? 'In Stock' : 'Stock Arriving Soon'}</span>
        </div>
      </div>
    </article>`;
}

function bindProductCardEvents(root) {
  root.querySelectorAll('[data-wish]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleWish(btn.dataset.id);
    });
  });
  root.querySelectorAll('[data-quick]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openQuickView(btn.dataset.id);
    });
  });
}

/* ============================================
   FEATURED
   ============================================ */
function sortProducts(list, mode) {
  const copy = [...list];
  switch (mode) {
    case 'newest': return copy.sort((a, b) => Number(b.isNew) - Number(a.isNew));
    case 'price-asc': return copy.sort((a, b) => a.price - b.price);
    case 'price-desc': return copy.sort((a, b) => b.price - a.price);
    default: return copy.sort((a, b) => Number(b.featured) - Number(a.featured));
  }
}

function renderFeatured() {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;
  const sortEl = document.getElementById('featured-sort');
  const sorted = sortProducts(PRODUCTS, sortEl ? sortEl.value : 'featured');
  grid.innerHTML = sorted.map(renderProductCard).join('');
  bindProductCardEvents(grid);
}

/* ============================================
   SHOP
   ============================================ */
let shopCategory = 'all';

function renderShop() {
  const grid = document.getElementById('shop-grid');
  if (!grid) return;
  const sortEl = document.getElementById('shop-sort');
  const sortMode = sortEl ? sortEl.value : 'featured';

  let list = [...PRODUCTS];
  if (shopCategory !== 'all') list = list.filter(p => p.catKey === shopCategory);
  list = sortProducts(list, sortMode);

  document.getElementById('shop-count').textContent = `${list.length} ${list.length === 1 ? 'piece' : 'pieces'}`;
  grid.innerHTML = list.map(renderProductCard).join('');
  bindProductCardEvents(grid);

  document.querySelectorAll('#shop-filters .filter').forEach(f => {
    f.classList.toggle('active', f.dataset.cat === shopCategory);
  });
}

/* ============================================
   PRODUCT DETAIL
   ============================================ */
let currentProductSlug = null;

function renderProductDetail(slug) {
  currentProductSlug = slug;
  const wrap = document.getElementById('product-detail');
  const p = findProductBySlug(slug);
  if (!wrap) return;
  if (!p) { wrap.innerHTML = '<p style="padding:64px 0;text-align:center">Product not found. <a href="#/shop" style="color:var(--gold)">Return to shop</a></p>'; return; }

  const wished = wishlist.includes(p.id);
  const related = PRODUCTS.filter(x => x.catKey === p.catKey && x.id !== p.id).slice(0, 3);

  wrap.innerHTML = `
    <nav style="font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:var(--muted);padding-top:24px">
      <a href="#/" style="color:inherit">Home</a>
      <span style="margin:0 8px">/</span>
      <a href="#/shop" style="color:inherit">Shop</a>
      <span style="margin:0 8px">/</span>
      <span style="color:var(--ivory)">${escape(p.name)}</span>
    </nav>

    <div class="product-detail-wrap">
      <div class="pd-gallery">
        <div class="pd-main">
          <img src="${p.image}" alt="${escape(p.name)}" />
          ${!p.available ? '<span class="product-badge">Coming Soon</span>' : ''}
        </div>
        <div class="pd-thumbs">
          <div><img src="${p.hoverImage}" alt="${escape(p.name)} detail" /></div>
          <div><img src="${p.image}" alt="${escape(p.name)} alternate" /></div>
        </div>
      </div>

      <div class="pd-info">
        <p class="eyebrow">${escape(p.category)}</p>
        <h1>${escape(p.name)}</h1>
        <p class="pd-price">${fmtINR(p.price)}</p>
        <p class="desc">${escape(p.description)}</p>

        <div class="pd-section">
          <p class="eyebrow">Details</p>
          <p>${escape(p.details)}</p>
        </div>
        <div class="pd-section">
          <p class="eyebrow">Care</p>
          <p>${escape(p.care)}</p>
        </div>
        <div class="pd-section">
          <p class="eyebrow">Sizes</p>
          <div class="pd-sizes">${p.sizes.map(s => `<span class="pd-size">${escape(s)}</span>`).join('')}</div>
          <p style="font-size:9px;margin-top:12px;color:rgba(165,161,154,.6)">A full size guide will be published before launch. Contact the studio for interim guidance.</p>
        </div>

        <div class="pd-actions">
          <button class="btn btn-gold full" disabled style="opacity:.4;cursor:not-allowed">Coming Soon</button>
          <button class="btn btn-outline full ${wished ? 'active' : ''}" data-wish data-id="${p.id}">
            ${wished ? 'Saved to Wishlist' : 'Add to Wishlist'}
          </button>
        </div>
        <p style="font-size:9px;letter-spacing:.15em;text-transform:uppercase;color:rgba(165,161,154,.6);margin-top:16px">Stock arriving soon. Join the launch list on the homepage to be notified.</p>
      </div>
    </div>

    ${related.length ? `
      <div class="pd-related">
        <p class="eyebrow">Continue Exploring</p>
        <h2 class="display" style="font-size:2rem">RELATED PIECES</h2>
        <div class="product-grid">${related.map(renderProductCard).join('')}</div>
      </div>` : ''}
  `;

  bindProductCardEvents(wrap);
}

/* ============================================
   QUICK VIEW
   ============================================ */
function openQuickView(productId) {
  const p = findProduct(productId);
  const modal = document.getElementById('quickview-modal');
  const content = document.getElementById('quickview-content');
  if (!p || !modal) return;
  const wished = wishlist.includes(p.id);

  content.innerHTML = `
    <button class="qv-close" data-close aria-label="Close quick view">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 6l12 12M18 6L6 18"/></svg>
    </button>
    <div class="qv-img"><img src="${p.image}" alt="${escape(p.name)}" /></div>
    <div class="qv-info">
      <p class="eyebrow">${escape(p.category)}</p>
      <h2>${escape(p.name)}</h2>
      <p class="qv-price">${fmtINR(p.price)}</p>
      <p class="qv-desc">${escape(p.description)}</p>
      <p class="qv-details">${escape(p.details)}</p>
      <div class="qv-sizes">${p.sizes.map(s => `<span class="qv-size">${escape(s)}</span>`).join('')}</div>
      <div class="qv-actions">
        <button class="btn btn-gold" disabled style="opacity:.5;cursor:not-allowed">Coming Soon</button>
        <button class="btn btn-outline ${wished ? 'active' : ''}" data-wish data-id="${p.id}">
          ${wished ? 'Saved to Wishlist' : 'Add to Wishlist'}
        </button>
        <a href="#/product/${p.slug}" class="btn btn-outline" data-close style="text-align:center">View Full Details</a>
      </div>
    </div>`;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  bindProductCardEvents(content);
}

/* ============================================
   FAQ
   ============================================ */
function renderFAQs() {
  const list = document.getElementById('faq-list');
  if (!list) return;
  list.innerHTML = FAQS.map((f, i) => `
    <div class="faq-item" data-faq>
      <button class="faq-trigger" aria-expanded="false" aria-controls="faq-panel-${i}" id="faq-trigger-${i}">
        <span>${escape(f.q)}</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-panel" id="faq-panel-${i}" role="region" aria-labelledby="faq-trigger-${i}">
        <div class="faq-panel-inner">${escape(f.a)}</div>
      </div>
    </div>
  `).join('');

  list.querySelectorAll('[data-faq]').forEach((item, i) => {
    const trigger = item.querySelector('.faq-trigger');
    const panel = item.querySelector('.faq-panel');
    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      list.querySelectorAll('[data-faq]').forEach(other => {
        other.classList.remove('open');
        other.querySelector('.faq-panel').style.maxHeight = null;
        other.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
        other.querySelector('.faq-icon').textContent = '+';
      });
      if (!isOpen) {
        item.classList.add('open');
        panel.style.maxHeight = panel.scrollHeight + 'px';
        trigger.setAttribute('aria-expanded', 'true');
        item.querySelector('.faq-icon').textContent = '×';
      }
    });
  });
}

/* ============================================
   FORMS (localStorage + validation)
   ============================================ */
function handleFormSubmit(form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = form.querySelector('[data-msg]');
    const data = new FormData(form);
    const honeypot = data.get('website');
    if (honeypot) { if (msg) { msg.textContent = 'Submission rejected.'; msg.className = 'form-msg error'; } return; }
    if (!data.get('consent')) {
      if (msg) { msg.textContent = 'Please provide consent to continue.'; msg.className = 'form-msg error'; }
      return;
    }
    const email = data.get('email');
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
      if (msg) { msg.textContent = 'Please enter a valid email address.'; msg.className = 'form-msg error'; }
      return;
    }

    const payload = { type: form.dataset.form, timestamp: Date.now(), data: Object.fromEntries(data) };
    const submissions = getLS(LS_FORMS, []);
    submissions.push(payload);
    setLS(LS_FORMS, submissions);

    if (msg) {
      msg.textContent = form.dataset.form === 'contact'
        ? 'Inquiry received. The studio will respond in due course.'
        : 'You are on the list. Welcome to CALOTTÉ.';
      msg.className = 'form-msg success';
    }
    toast(form.dataset.form === 'contact' ? 'Inquiry received' : 'Subscription confirmed');
    form.reset();
  });
}

/* ============================================
   ROUTER
   ============================================ */
function getHashRoute() {
  const hash = location.hash.replace(/^#\/?/, '');
  const [path, query] = hash.split('?');
  return { path: path || '', params: new URLSearchParams(query || '') };
}

function setActiveNav(path) {
  document.querySelectorAll('[data-nav]').forEach(el => el.classList.remove('active'));
  if (path === '' || path === 'home') {
    const home = document.querySelector('[data-nav="home"]'); if (home) home.classList.add('active');
  } else if (path === 'shop') {
    const shop = document.querySelector('[data-nav="shop"]'); if (shop) shop.classList.add('active');
  } else if (path === 'about') {
    const a = document.querySelector('[data-nav="about"]'); if (a) a.classList.add('active');
  } else if (path === 'wishlist') {
    const w = document.querySelector('[data-nav="wishlist"]'); if (w) w.classList.add('active');
  } else if (path === 'contact') {
    const c = document.querySelector('[data-nav="contact"]'); if (c) c.classList.add('active');
  }
}

function showView(name) {
  document.querySelectorAll('[data-view]').forEach(v => {
    v.hidden = v.dataset.view !== name;
  });
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function navigate() {
  const { path, params } = getHashRoute();
  closeAllOverlays();

  if (path === '' || path === 'home') {
    showView('home'); setActiveNav('home');
    renderFeatured();
  } else if (path === 'shop') {
    shopCategory = params.get('cat') || 'all';
    showView('shop'); setActiveNav('shop');
    renderShop();
  } else if (path === 'wishlist') {
    showView('wishlist'); setActiveNav('wishlist');
    renderWishlist();
  } else if (path === 'about') {
    showView('about'); setActiveNav('about');
  } else if (path === 'contact') {
    showView('contact'); setActiveNav('contact');
  } else if (path === 'campaign') {
    showView('campaign'); setActiveNav('campaign');
  } else if (path.startsWith('product/')) {
    const slug = path.replace('product/', '');
    showView('product');
    renderProductDetail(slug);
  } else {
    showView('home'); setActiveNav('home');
    renderFeatured();
  }
}

/* ============================================
   OVERLAYS
   ============================================ */
function closeAllOverlays() {
  ['search-modal','cart-drawer','quickview-modal'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.classList.remove('open'); el.setAttribute('aria-hidden', 'true'); }
  });
  const mn = document.getElementById('mobile-nav');
  if (mn) { mn.classList.remove('open'); mn.setAttribute('aria-hidden', 'true'); }
  document.body.style.overflow = '';
}

function openSearch() {
  const modal = document.getElementById('search-modal');
  if (!modal) return;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  const input = document.getElementById('search-input');
  setTimeout(() => input?.focus(), 60);
  renderSearchResults('');
}

function renderSearchResults(query) {
  const results = document.getElementById('search-results');
  if (!results) return;
  const q = query.toLowerCase().trim();
  const list = q
    ? PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.description.toLowerCase().includes(q))
    : PRODUCTS.slice(0, 4);
  if (list.length === 0) {
    results.innerHTML = `<div class="search-empty">No pieces found.<br><span style="font-size:10px;letter-spacing:0;text-transform:none;color:rgba(165,161,154,.6);display:block;margin-top:8px">Try searching by category, silhouette, or product name.</span></div>`;
    return;
  }
  results.innerHTML = list.map(p => `
    <a href="#/product/${p.slug}" class="search-item" data-close-search>
      <img src="${p.image}" alt="${escape(p.name)}" />
      <div style="min-width:0;flex:1">
        <p class="search-item-name">${escape(p.name)}</p>
        <p class="search-item-cat">${escape(p.category)}</p>
      </div>
      <span class="search-item-price">${fmtINR(p.price)}</span>
    </a>
  `).join('');
  results.querySelectorAll('[data-close-search]').forEach(a => {
    a.addEventListener('click', closeAllOverlays);
  });
}

/* ============================================
   BINDINGS
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  // Router
  window.addEventListener('hashchange', navigate);
  navigate();

  // Mobile nav
  const menuToggle = document.getElementById('menu-toggle');
  const menuClose = document.getElementById('menu-close');
  const mobileNav = document.getElementById('mobile-nav');
  menuToggle?.addEventListener('click', () => {
    mobileNav.classList.add('open');
    mobileNav.setAttribute('aria-hidden', 'false');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  });
  menuClose?.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
  mobileNav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  }));

  // Nav dropdown (click support on desktop)
  const dropdown = document.querySelector('.nav-dropdown');
  const dropdownToggle = document.querySelector('.nav-dropdown-toggle');
  dropdownToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = dropdown.classList.toggle('open');
    dropdownToggle.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', () => dropdown?.classList.remove('open'));

  // Search
  document.getElementById('search-toggle')?.addEventListener('click', openSearch);
  document.getElementById('search-input')?.addEventListener('input', (e) => renderSearchResults(e.target.value));

  // Cart
  document.getElementById('cart-toggle')?.addEventListener('click', () => {
    const d = document.getElementById('cart-drawer');
    d.classList.add('open');
    d.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    renderCart();
  });

  // Close buttons
  document.querySelectorAll('[data-close]').forEach(el => {
    el.addEventListener('click', closeAllOverlays);
  });

  // Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllOverlays();
  });

  // Cart interactions
  document.body.addEventListener('click', (e) => {
    const removeBtn = e.target.closest('[data-remove]');
    if (removeBtn) { removeFromCart(removeBtn.dataset.id, removeBtn.dataset.size); return; }
    const qtyBtn = e.target.closest('[data-qty]');
    if (qtyBtn) { updateQty(qtyBtn.dataset.id, qtyBtn.dataset.size, Number(qtyBtn.dataset.delta)); return; }
  });

  // Featured sort
  document.getElementById('featured-sort')?.addEventListener('change', renderFeatured);

  // Shop sort
  document.getElementById('shop-sort')?.addEventListener('change', renderShop);

  // Shop category filter
  document.querySelectorAll('#shop-filters .filter').forEach(btn => {
    btn.addEventListener('click', () => { shopCategory = btn.dataset.cat; renderShop(); });
  });

  // FAQ
  renderFAQs();

  // Forms
  document.querySelectorAll('[data-form]').forEach(handleFormSubmit);

  // Initial badge
  saveCart();
  updateWishBadge();
});

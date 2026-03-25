/* ============================================================
   main.js — Amare Skincare (Multi‑page version)
   ============================================================ */

// ============================================================
// PRODUCT DATA (unchanged)
// ============================================================

console.log("main.js loaded");

const PRODUCTS = [
  // --- CLEANSERS ---
  {
    id: 'c1', category: 'Cleansers', stock: 40,
    name: 'Amare PureVeil Gentle Cleanser',
    price: 399,
    image: 'images/products/pureveil-cleanser.jpg',
    description: 'A mild, non-irritating cleanser that gently removes dirt while keeping skin soft and hydrated. Key Ingredients: Glycerin, Panthenol, Chamomile Extract. Effects: Hydrates skin, prevents dryness, suitable for sensitive skin.'
  },
  {
    id: 'c2', category: 'Cleansers', stock: 35,
    name: 'Amare HydroFresh Daily Cleanser',
    price: 249,
    image: 'images/products/hydrofresh-cleanser.jpg',
    description: 'A refreshing gel cleanser that cleanses and hydrates without stripping natural moisture. Key Ingredients: Hyaluronic Acid, Aloe Vera, Vitamin B5. Effects: Boosts hydration, refreshes skin, maintains moisture balance.'
  },
  {
    id: 'c3', category: 'Cleansers', stock: 28,
    name: 'Amare ClearBalance Acne Cleanser',
    price: 329,
    image: 'images/products/clearbalance-cleanser.jpg',
    description: 'An acne-fighting cleanser that helps reduce breakouts and unclog pores. Key Ingredients: Salicylic Acid, Tea Tree Oil, Niacinamide. Effects: Controls oil, reduces acne, clears pores.'
  },
  {
    id: 'c4', category: 'Cleansers', stock: 22,
    name: 'Amare Low pH Morning Cleanser',
    price: 349,
    image: 'images/products/lowph-cleanser.jpg',
    description: 'A gentle low pH cleanser that protects the skin barrier while cleansing impurities. Key Ingredients: Green Tea Extract, Centella Asiatica, Mild Surfactants. Effects: Maintains skin barrier, soothes skin, prevents irritation.'
  },

  // --- TONERS ---
  {
    id: 't1', category: 'Toners', stock: 30,
    name: 'Amare AquaLift Hydrating Toner',
    price: 299,
    image: 'images/products/aqualift-toner.jpg',
    description: 'A hydrating toner that preps the skin and enhances absorption of skincare products. Key Ingredients: Hyaluronic Acid, Glycerin, Rice Extract. Effects: Deep hydration, smoother skin, improved absorption.'
  },
  {
    id: 't2', category: 'Toners', stock: 5,
    name: 'Amare GlowRefine Exfoliating Toner',
    price: 399,
    image: 'images/products/glowrefine-toner.jpg',
    description: 'A gentle exfoliating toner that brightens and smoothens skin texture. Key Ingredients: Glycolic Acid, Lactic Acid, Witch Hazel. Effects: Removes dead skin cells, brightens complexion, smooths texture.'
  },
  {
    id: 't3', category: 'Toners', stock: 25,
    name: 'Amare CalmEssence Soothing Toner',
    price: 329,
    image: 'images/products/calmessence-toner.jpg',
    description: 'A calming toner that reduces redness and restores skin balance. Key Ingredients: Centella Asiatica, Aloe Vera, Allantoin. Effects: Soothes irritation, reduces redness, strengthens skin.'
  },
  {
    id: 't4', category: 'Toners', stock: 18,
    name: 'Amare PoreTight Clarifying Toner',
    price: 349,
    image: 'images/products/poretight-toner.jpg',
    description: 'A clarifying toner that tightens pores and controls excess oil. Key Ingredients: Niacinamide, Witch Hazel, Zinc PCA. Effects: Minimizes pores, controls oil, refines skin.'
  },

  // --- MOISTURIZERS ---
  {
    id: 'm1', category: 'Moisturizers', stock: 32,
    name: 'Amare HydroCloud Water Gel Moisturizer',
    price: 499,
    image: 'images/products/hydrocloud-moisturizer.jpg',
    description: 'A lightweight gel moisturizer that delivers deep hydration without heaviness. Key Ingredients: Hyaluronic Acid, Marine Extracts, Glycerin. Effects: Hydrates deeply, lightweight feel, non-greasy.'
  },
  {
    id: 'm2', category: 'Moisturizers', stock: 20,
    name: 'Amare Ceramide Barrier Cream',
    price: 499,
    image: 'images/products/ceramide-cream.jpg',
    description: 'A rich cream that strengthens the skin barrier and locks in moisture. Key Ingredients: Ceramides, Shea Butter, Cholesterol. Effects: Repairs barrier, prevents dryness, long-lasting hydration.'
  },
  {
    id: 'm3', category: 'Moisturizers', stock: 40,
    name: 'Amare Aloe Soothing Gel Moisturizer',
    price: 249,
    image: 'images/products/aloe-gel-moisturizer.jpg',
    description: 'A cooling gel that soothes and hydrates irritated or sun-exposed skin. Key Ingredients: Aloe Vera, Cucumber Extract, Vitamin E. Effects: Soothes skin, reduces redness, cooling effect.'
  },
  {
    id: 'm4', category: 'Moisturizers', stock: 15,
    name: 'Amare DewGlow Daily Moisturizer',
    price: 399,
    image: 'images/products/dewglow-moisturizer.jpg',
    description: 'A daily moisturizer that enhances natural glow while keeping skin hydrated. Key Ingredients: Niacinamide, Vitamin C, Peptides. Effects: Brightens skin, improves texture, gives radiant glow.'
  },

  // --- SERUMS ---
  {
    id: 's1', category: 'Serums', stock: 24,
    name: 'Amare Radiance Boost Serum',
    price: 599,
    image: 'images/products/radiance-serum.jpg',
    description: 'A brightening serum that evens out skin tone and boosts radiance. Key Ingredients: Vitamin C, Ferulic Acid, Niacinamide. Effects: Brightens skin, reduces dark spots, evens tone.'
  },
  {
    id: 's2', category: 'Serums', stock: 38,
    name: 'Amare Niacinamide Balance Serum',
    price: 499,
    image: 'images/products/niacinamide-serum.jpg',
    description: 'A balancing serum that controls oil and reduces blemishes. Key Ingredients: Niacinamide, Zinc PCA, Hyaluronic Acid. Effects: Controls oil, minimizes pores, reduces acne marks.'
  },
  {
    id: 's3', category: 'Serums', stock: 12,
    name: 'Amare Snail Repair Essence Serum',
    price: 649,
    image: 'images/products/snail-serum.jpg',
    description: 'A repairing serum that deeply hydrates and restores damaged skin. Key Ingredients: Snail Mucin, Panthenol, Allantoin. Effects: Repairs skin, improves elasticity, hydrates deeply.'
  },
  {
    id: 's4', category: 'Serums', stock: 19,
    name: 'Amare GlowRenew Glycolic Serum',
    price: 549,
    image: 'images/products/glowrenew-serum.jpg',
    description: 'An exfoliating serum that improves skin texture and promotes renewal. Key Ingredients: Glycolic Acid, Lactic Acid, Aloe Vera. Effects: Smoothens skin, promotes cell renewal, brightens complexion.'
  },

  // --- MASKS ---
  {
    id: 'k1', category: 'Masks', stock: 50,
    name: 'Amare BrightPeel Glow Mask',
    price: 199,
    image: 'images/products/brightpeel-mask.jpg',
    description: 'A peel-off mask that brightens and removes impurities. Key Ingredients: Vitamin C, Fruit Extracts, Collagen. Effects: Brightens skin, removes dirt, smoothens texture.'
  },
  {
    id: 'k2', category: 'Masks', stock: 30,
    name: 'Amare Volcanic Clay Detox Mask',
    price: 399,
    image: 'images/products/volcanic-clay-mask.jpg',
    description: 'A clay mask that deeply cleans pores and removes excess oil. Key Ingredients: Volcanic Ash, Kaolin Clay, Charcoal. Effects: Detoxifies skin, unclogs pores, controls oil.'
  },
  {
    id: 'k3', category: 'Masks', stock: 60,
    name: 'Amare HydraSheet Essence Mask',
    price: 99,
    image: 'images/products/hydrasheet-mask.jpg',
    description: 'A hydrating sheet mask that revitalizes and refreshes the skin. Key Ingredients: Hyaluronic Acid, Aloe Vera, Vitamin E. Effects: Instant hydration, plumps skin, refreshes complexion.'
  },
  {
    id: 'k4', category: 'Masks', stock: 45,
    name: 'Amare Charcoal Purify Mask',
    price: 249,
    image: 'images/products/charcoal-mask.jpg',
    description: 'A detox mask that removes impurities and excess oil. Key Ingredients: Activated Charcoal, Tea Tree Oil, Clay. Effects: Purifies skin, reduces oil, clears pores.'
  },
  {
    id: 'k5', category: 'Masks', stock: 3,
    name: 'Amare CalmSkin Recovery Mask',
    price: 299,
    image: 'images/products/calmskin-mask.jpg',
    description: 'A soothing mask that calms irritated skin and restores moisture. Key Ingredients: Centella Asiatica, Chamomile, Aloe Vera. Effects: Reduces redness, soothes skin, repairs barrier.'
  },

  // --- SUNSCREEN ---
  {
    id: 'p1', category: 'Sunscreen', stock: 35,
    name: 'Amare SunShield SPF50+ Daily Protection',
    price: 399,
    image: 'images/products/sunshield-spf50.jpg',
    description: 'A daily sunscreen that protects against harmful UV rays. Key Ingredients: Zinc Oxide, Titanium Dioxide, Vitamin E. Effects: UV protection, prevents sun damage, protects skin.'
  },
  {
    id: 'p2', category: 'Sunscreen', stock: 22,
    name: 'Amare AquaLight UV Essence',
    price: 449,
    image: 'images/products/aqualight-uv.jpg',
    description: 'A lightweight sunscreen that absorbs quickly without stickiness. Key Ingredients: Chemical UV Filters, Hyaluronic Acid, Green Tea. Effects: Lightweight feel, no white cast, hydrating.'
  },
  {
    id: 'p3', category: 'Sunscreen', stock: 18,
    name: 'Amare BrightDefense Tone-Up Sunscreen',
    price: 499,
    image: 'images/products/brightdefense-sunscreen.jpg',
    description: 'A sunscreen that protects while giving a natural brightening effect. Key Ingredients: Niacinamide, UV Filters, Pearl Extract. Effects: Brightens skin, evens tone, protects from UV.'
  },
  {
    id: 'p4', category: 'Sunscreen', stock: 4,
    name: 'Amare Centella Calm Sunscreen',
    price: 429,
    image: 'images/products/centella-sunscreen.jpg',
    description: 'A gentle sunscreen designed for sensitive skin. Key Ingredients: Centella Asiatica, Madecassoside, Zinc Oxide. Effects: Soothes skin, reduces irritation, provides UV protection.'
  },
];

// ============================================================
// Product data with localStorage persistence
// ============================================================
function getProducts() {
  // Try to load from localStorage, otherwise use the hardcoded PRODUCTS
  const saved = localStorage.getItem('amare_products');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      // Ensure all products are present (in case new products were added)
      // Merge with current PRODUCTS to keep any new product fields
      const merged = PRODUCTS.map(p => {
        const savedProduct = parsed.find(sp => sp.id === p.id);
        return savedProduct ? { ...p, ...savedProduct } : { ...p };
      });
      return merged;
    } catch(e) { console.warn(e); }
  }
  return [...PRODUCTS]; // return a copy
}

function saveProducts(products) {
  localStorage.setItem('amare_products', JSON.stringify(products));
}

// Also override the global PRODUCTS constant for backward compatibility
// (But we'll use getProducts() everywhere)
// Replace all references to PRODUCTS with getProducts() where dynamic stock is needed.

// ============================================================
// TEAM DATA
// ============================================================
const TEAM = {
  executive: [
    {
      name: 'Mary Ann B. Dejoras',
      role: 'Chief Executive Officer',
      bio: 'A results-driven leader with a strong background in business management and strategic planning. Equipped with proven experience in decision-making and brand development, she leads the company with clear vision and direction. Her expertise ensures that the business remains competitive and continuously growing in the skincare industry.',
      image: 'images/team/dejoras.jpg'
    },
  ],
  management: [
    {
      name: 'Anarie V. Villarente',
      role: 'General Manager',
      bio: 'An experienced professional in operations management and team coordination. She is skilled in executing business strategies, managing workflows, and ensuring efficiency across all departments. Her ability to maintain consistency and high standards supports the company\'s daily performance.',
      image: 'images/team/villarente.jpg'
    },
  ],
  staff: [
    {
      name: 'Hacel C. Nadera',
      role: 'Administration Manager',
      bio: 'A highly organized professional with a strong background in administrative management. She is responsible for handling documentation, coordination, and internal processes with accuracy and efficiency. Her attention to detail ensures that operations remain structured and well-managed.',
      image: 'images/team/nadera.jpg'
    },
  ]
};

// ============================================================
// SUPPLIERS DATA
// ============================================================
const SUPPLIERS = [
  { name: 'NaturChem Philippines', category: 'Raw Ingredients', description: 'Supplies certified organic botanical extracts including aloe vera, green tea, chamomile, and rose water. ISO 22716 GMP certified.', location: 'Quezon City, PH' },
  { name: 'PureBase Ingredients Co.', category: 'Chemical Actives', description: 'Provides pharmaceutical-grade active ingredients: hyaluronic acid, niacinamide, retinol, Vitamin C derivatives, and AHAs/BHAs.', location: 'Makati, PH' },
  { name: 'EcoPackage Solutions', category: 'Packaging', description: 'Sustainable packaging manufacturer offering glass bottles, recycled plastic containers, and biodegradable outer packaging.', location: 'Laguna, PH' },
  { name: 'BeautyFormLab', category: 'Contract Manufacturing', description: 'Full-service contract manufacturer specializing in skincare formulations. Handles emulsification, stability testing, and filling.', location: 'Batangas, PH' },
  { name: 'SheetMask Direct', category: 'Sheet Masks', description: 'Korean-based supplier of biocellulose, cotton, and hydrogel sheet mask substrates. Works with private label formulations.', location: 'Seoul, KR' },
  { name: 'Aroma Essentials PH', category: 'Essential Oils & Fragrance', description: 'Ethical sourcing of essential oils and fragrance compounds compliant with IFRA standards. Specializes in skin-safe aromas.', location: 'Davao, PH' },
  { name: 'LogiPack Freight', category: 'Logistics & Fulfillment', description: 'Third-party logistics partner handling warehousing, order fulfillment, and last-mile delivery nationwide.', location: 'Manila, PH' },
  { name: 'DermTest Philippines', category: 'Testing & Certification', description: 'Independent dermatological testing facility providing safety and efficacy assessments for cosmetic products.', location: 'Cebu, PH' },
];

// ============================================================
// ORDER STATUS DATA (simulated)
// ============================================================
const ORDER_STATUSES = {
  'AM-2024-001': { status: 'Delivered', date: 'Jan 15, 2025', items: 'Vitamin C Serum, Rose Toner', steps: [true, true, true, true] },
  'AM-2024-002': { status: 'Out for Delivery', date: 'Jan 22, 2025', items: 'Luminous Glow Cream', steps: [true, true, true, false] },
  'AM-2025-003': { status: 'Processing', date: 'Mar 10, 2025', items: 'Retinol Serum, Night Butter', steps: [true, true, false, false] },
  'AM-2025-004': { status: 'Order Placed', date: 'Mar 18, 2025', items: 'SPF 50+ Sunscreen (x2)', steps: [true, false, false, false] },
};

// ============================================================
// RENDER HELPERS (unchanged)
// ============================================================
function getImage2(img) {
  return img.replace(/(\.[^.]+)$/, '2$1');
}

function parseDescription(desc) {
  const ingMatch = desc.match(/Key Ingredients?:\s*([^.]+)\./i);
  const effMatch = desc.match(/Effects?:\s*([^.]+)\./i);
  const mainDesc = desc.split(/Key Ingredients?:/i)[0].trim();
  return {
    main: mainDesc,
    ingredients: ingMatch ? ingMatch[1].trim() : '',
    effects: effMatch ? effMatch[1].trim() : ''
  };
}

function renderProductCard(p, index = 0) {
  const wishlisted = Wishlist.has(p.id);
  const stockLabel = p.stock === 0 ? 'Out of Stock' : p.stock <= 5 ? `Only ${p.stock} left` : 'In Stock';
  const badgeClass = p.stock === 0 ? 'badge-out' : p.stock <= 5 ? 'badge-low' : '';
  const badgeText = p.stock === 0 ? 'Sold Out' : p.stock <= 5 ? 'Low Stock' : 'New';
  const img2 = getImage2(p.image);
  return `
    <div class="product-card fade-up" style="transition-delay:${index * 0.05}s">
      <div class="product-card-img" data-img1="${p.image}" data-img2="${img2}">
        <img src="${p.image}" alt="${p.name}" loading="lazy"
             onerror="this.src='https://placehold.co/400x500/dce8dc/6b8f71?text=A'">
        <span class="product-badge ${badgeClass}">${badgeText}</span>
        <button class="wishlist-btn card-action-btn ${wishlisted ? 'wishlisted' : ''}"
                data-id="${p.id}" title="Wishlist" style="position:absolute;top:8px;right:8px;opacity:0;">
          <i class="${wishlisted ? 'fas' : 'far'} fa-heart"></i>
        </button>
      </div>
      <div class="product-card-body">
        <div class="product-category">${p.category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-footer">
          <div class="product-price">₱${p.price.toLocaleString()}</div>
          <div class="product-stock ${p.stock === 0 ? 'stock-out' : p.stock <= 5 ? 'stock-low' : ''}">${stockLabel}</div>
        </div>
        <div class="product-card-btns">
          <button class="view-details-btn" data-id="${p.id}">View Details</button>
          <button class="add-to-cart-icon" data-id="${p.id}" ${p.stock === 0 ? 'disabled' : ''}>
            <i class="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

function bindProductCardEvents() {
  // Add to cart via icon button
  document.querySelectorAll('.add-to-cart-icon').forEach(btn => {
    if (btn.disabled) return;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const product = PRODUCTS.find(p => p.id === btn.dataset.id);
      if (product) Cart.addItem(product, 1);
    });
  });

  // Wishlist
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isNow = Wishlist.toggle(btn.dataset.id);
      btn.classList.toggle('wishlisted', isNow);
      btn.querySelector('i').className = isNow ? 'fas fa-heart' : 'far fa-heart';
    });
  });

  // View Details → rich modal
  document.querySelectorAll('.view-details-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openProductModal(btn.dataset.id);
    });
  });

  // Hover: swap to image2, show wishlist heart
  document.querySelectorAll('.product-card-img').forEach(imgBox => {
    const img = imgBox.querySelector('img');
    const heart = imgBox.querySelector('.wishlist-btn');
    const img1 = imgBox.dataset.img1;
    const img2 = imgBox.dataset.img2;

    imgBox.closest('.product-card').addEventListener('mouseenter', () => {
      if (img2) {
        const testImg = new Image();
        testImg.onload = () => { img.src = img2; };
        testImg.onerror = () => {};
        testImg.src = img2;
      }
      if (heart) heart.style.opacity = '1';
    });
    imgBox.closest('.product-card').addEventListener('mouseleave', () => {
      img.src = img1;
      if (heart) heart.style.opacity = '0';
    });
  });
}

// ============================================================
// PRODUCT DETAIL MODAL (unchanged)
// ============================================================
function openProductModal(id) {
  const p = PRODUCTS.find(p => p.id === id);
  if (!p) return;

  const parsed = parseDescription(p.description);
  const img2 = getImage2(p.image);
  const stockLabel = p.stock === 0 ? 'Out of Stock' : p.stock <= 5 ? `Only ${p.stock} left` : 'In Stock';
  const stockClass = p.stock === 0 ? 'stock-out' : p.stock <= 5 ? 'stock-low' : '';

  const ingTags = parsed.ingredients ? parsed.ingredients.split(',').map(i => `<span class="pm-tag">${i.trim()}</span>`).join('') : '';
  const effTags = parsed.effects ? parsed.effects.split(',').map(e => `<span class="pm-effect-tag"><i class="fas fa-check"></i> ${e.trim()}</span>`).join('') : '';

  const old = document.getElementById('product-modal-overlay');
  if (old) old.remove();

  const overlay = document.createElement('div');
  overlay.id = 'product-modal-overlay';
  overlay.innerHTML = `
    <div class="pm-modal" role="dialog" aria-modal="true">
      <button class="pm-close" id="pm-close-btn" aria-label="Close"><i class="fas fa-times"></i></button>
      <div class="pm-images">
        <div style="position: relative;">
          <img class="pm-img-main" id="pm-main-img" src="${p.image}" alt="${p.name}"
               onerror="this.src='https://placehold.co/500x600/dce8dc/6b8f71?text=Amare'">
          <button id="expand-image-btn" class="expand-img-btn" title="View full size"><i class="fas fa-expand"></i></button>
        </div>
        <div class="pm-img-thumbs">
          <img class="pm-thumb pm-thumb-active" src="${p.image}" alt="${p.name} view 1" data-full="${p.image}">
          <img class="pm-thumb" src="${img2}" alt="${p.name} view 2" data-full="${img2}">
        </div>
      </div>
      <div class="pm-info">
        <div class="pm-category">${p.category}</div>
        <h2 class="pm-name">${p.name}</h2>
        <div class="pm-price">₱${p.price.toLocaleString()}</div>
        <div class="pm-stock-row"><span class="product-stock ${stockClass}">${stockLabel}</span></div>
        <p class="pm-desc">${parsed.main}</p>
        ${ingTags ? `<div class="pm-section"><div class="pm-section-label"><i class="fas fa-flask"></i> Key Ingredients</div><div class="pm-tags">${ingTags}</div></div>` : ''}
        ${effTags ? `<div class="pm-section"><div class="pm-section-label"><i class="fas fa-star"></i> Effects & Benefits</div><div class="pm-effects">${effTags}</div></div>` : ''}
        <div class="pm-actions">
          <div class="qty-selector">
            <button class="qty-btn" id="pm-minus">−</button>
            <input type="number" class="qty-input" id="pm-qty" value="1" min="1" max="${p.stock}">
            <button class="qty-btn" id="pm-plus">+</button>
          </div>
          <button class="btn-main pm-add-btn" id="pm-add-btn" ${p.stock === 0 ? 'disabled' : ''}>
            <i class="fas fa-shopping-bag"></i> ${p.stock === 0 ? 'Out of Stock' : 'Add to Bag'}
          </button>
        </div>
      </div>
    </div>`;

  document.body.appendChild(overlay);

  // Thumb switching
  overlay.querySelectorAll('.pm-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      overlay.querySelectorAll('.pm-thumb').forEach(t => t.classList.remove('pm-thumb-active'));
      thumb.classList.add('pm-thumb-active');
      document.getElementById('pm-main-img').src = thumb.dataset.full;
    });
  });

  // Expand image button
  document.getElementById('expand-image-btn').addEventListener('click', () => {
    const currentSrc = document.getElementById('pm-main-img').src;
    openImageViewer(currentSrc);
  });

  // Quantity handlers
  const qtyInput = document.getElementById('pm-qty');
  document.getElementById('pm-minus').onclick = () => { if (+qtyInput.value > 1) qtyInput.value--; };
  document.getElementById('pm-plus').onclick  = () => { if (+qtyInput.value < p.stock) qtyInput.value++; };
  document.getElementById('pm-add-btn').onclick = () => {
    Cart.addItem(p, parseInt(qtyInput.value) || 1);
    overlay.classList.remove('visible');
  };

  document.getElementById('pm-close-btn').onclick = () => overlay.classList.remove('visible');
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('visible'); });
  document.addEventListener('keydown', function esc(e) { if (e.key === 'Escape') { overlay.classList.remove('visible'); document.removeEventListener('keydown', esc); } });
  requestAnimationFrame(() => overlay.classList.add('visible'));
}

// Image lightbox
function openImageViewer(src) {
  const overlay = document.createElement('div');
  overlay.id = 'image-viewer-overlay';
  overlay.innerHTML = `
    <div class="image-viewer">
      <button class="image-viewer-close"><i class="fas fa-times"></i></button>
      <img src="${src}" alt="Full size product image">
    </div>`;
  document.body.appendChild(overlay);
  overlay.classList.add('visible');
  overlay.querySelector('.image-viewer-close').addEventListener('click', () => overlay.remove());
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
}

function openQuickView(id) { openProductModal(id); }

// ============================================================
// PAGE INITIALISATION FUNCTIONS (updated to use normal links)
// ============================================================
function initHome() {
  const grid = document.getElementById('featured-products');
  if (grid) {
    grid.innerHTML = PRODUCTS.slice(0, 8).map((p, i) => renderProductCard(p, i)).join('');
    bindProductCardEvents();
    initFadeUps();
  }
}

function initProducts() {
  const grid = document.getElementById('products-grid');
  const searchInput = document.getElementById('search-input');
  const categoryFilter = document.getElementById('category-filter');
  const priceRange = document.getElementById('price-range');
  const priceVal = document.getElementById('price-range-val');
  const countEl = document.getElementById('products-count');
  const clearBtn = document.getElementById('filter-clear');

  let currentSearch = '';
  let currentCategory = '';
  let currentMaxPrice = 650;

  function render() {
    let filtered = PRODUCTS.filter(p => {
      const matchSearch = !currentSearch ||
        p.name.toLowerCase().includes(currentSearch) ||
        p.description.toLowerCase().includes(currentSearch);
      const matchCat = !currentCategory || p.category === currentCategory;
      const matchPrice = p.price <= currentMaxPrice;
      return matchSearch && matchCat && matchPrice;
    });

    if (grid) {
      grid.innerHTML = filtered.length
        ? filtered.map((p, i) => renderProductCard(p, i)).join('')
        : `<div class="no-products"><i class="fas fa-search" style="font-size:2rem;color:var(--border);margin-bottom:1rem;display:block;"></i>No products match your filters.</div>`;
      bindProductCardEvents();
    }
    if (countEl) countEl.textContent = `Showing ${filtered.length} product${filtered.length !== 1 ? 's' : ''}`;
    initFadeUps();
  }

  if (searchInput) searchInput.addEventListener('input', () => { currentSearch = searchInput.value.toLowerCase(); render(); });
  if (categoryFilter) categoryFilter.addEventListener('change', () => { currentCategory = categoryFilter.value; render(); });
  if (priceRange) {
    priceRange.addEventListener('input', () => {
      currentMaxPrice = +priceRange.value;
      if (priceVal) priceVal.textContent = `₱${currentMaxPrice.toLocaleString()}`;
      render();
    });
  }
  if (clearBtn) clearBtn.addEventListener('click', () => {
    currentSearch = '';
    currentCategory = '';
    currentMaxPrice = 650;
    if (searchInput) searchInput.value = '';
    if (categoryFilter) categoryFilter.value = '';
    if (priceRange) priceRange.value = 5000;
    if (priceVal) priceVal.textContent = '₱5,000';
    render();
  });

  render();
}

function initCart() {
  renderCartPage();
}

function renderCartPage() {
  const items = Cart.getItems();
  const container = document.getElementById('cart-content');
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon"><i class="fas fa-shopping-bag"></i></div>
        <div class="cart-empty-text">Your bag is empty.<br>Time to treat yourself.</div>
        <a href="products.html" class="btn-main" style="width:auto;display:inline-flex;">Browse Products</a>
      </div>`;
    return;
  }

  const total = Cart.getTotal();
  const shipping = total >= 2000 ? 0 : 150;

  container.innerHTML = `
    <div class="cart-layout">
      <div>
        <table class="cart-table">
          <thead>
            <tr><th colspan="2">Product</th><th>Price</th><th>Qty</th><th>Total</th><th></th></tr>
          </thead>
          <tbody id="cart-rows">
            ${items.map(item => `
              <tr>
                <td><img class="cart-item-img" src="${item.image}" alt="${item.name}" onerror="this.src='https://placehold.co/80x80/e4f0e4/6b8f71?text=A'"></td>
                <td><div class="cart-item-name">${item.name}</div><div class="cart-item-cat">${item.category}</div></td>
                <td class="cart-item-price-cell">₱${item.price.toLocaleString()}</td>
                <td><input type="number" class="cart-qty-input" value="${item.qty}" min="1" max="${item.stock}" data-id="${item.id}"></td>
                <td class="cart-item-price-cell">₱${(item.price * item.qty).toLocaleString()}</td>
                <td><button class="cart-remove-btn" data-id="${item.id}"><i class="fas fa-times"></i></button></td>
               </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      <div class="cart-summary">
        <div class="cart-summary-title">Order Summary</div>
        <div class="cart-summary-row"><span>Subtotal</span><span>₱${total.toLocaleString()}</span></div>
        <div class="cart-summary-row"><span>Shipping</span><span>${shipping === 0 ? 'FREE' : '₱' + shipping}</span></div>
        ${shipping > 0 ? `<div style="font-size:0.7rem;color:var(--accent);margin-bottom:.5rem;">Spend ₱${(2000-total).toLocaleString()} more for free shipping!</div>` : ''}
        <div class="cart-summary-row total"><span>Total</span><span>₱${(total + shipping).toLocaleString()}</span></div>
        <a href="checkout.html" class="btn-main cart-checkout-btn">Proceed to Checkout</a>
        <a href="products.html" class="btn-outline" style="margin-top:.75rem;">Continue Shopping</a>
      </div>
    </div>`;

  container.querySelectorAll('.cart-qty-input').forEach(input => {
    input.addEventListener('change', () => {
      Cart.updateQty(input.dataset.id, parseInt(input.value));
      setTimeout(() => renderCartPage(), 50);
    });
  });
  container.querySelectorAll('.cart-remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      Cart.removeItem(btn.dataset.id);
      setTimeout(() => renderCartPage(), 50);
    });
  });
}

function initCheckout() {
  const items = Cart.getItems();
  const summaryEl = document.getElementById('checkout-order-items');
  const subtotalEl = document.getElementById('checkout-subtotal');
  const totalEl = document.getElementById('checkout-total');
  const form = document.getElementById('checkout-form');
  const shippingEl = document.getElementById('checkout-shipping');

  if (items.length === 0 && summaryEl) {
    summaryEl.innerHTML = `<p style="color:var(--text-muted);font-size:.85rem;">Your cart is empty. <a href="products.html" style="color:var(--accent)">Shop now →</a></p>`;
  }

  if (summaryEl) {
    summaryEl.innerHTML = items.map(item => `
      <div class="order-item">
        <img src="${item.image}" alt="${item.name}" onerror="this.src='https://placehold.co/60x60/e4f0e4/6b8f71?text=A'">
        <div>
          <div class="order-item-name">${item.name}</div>
          <div class="order-item-detail">Qty: ${item.qty}</div>
        </div>
        <div class="order-item-price">₱${(item.price * item.qty).toLocaleString()}</div>
      </div>
    `).join('');
  }

  const subtotal = Cart.getTotal();
  const shipping = subtotal >= 2000 ? 0 : 150;
  if (subtotalEl) subtotalEl.textContent = `₱${subtotal.toLocaleString()}`;
  if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : `₱${shipping}`;
  if (totalEl) totalEl.textContent = `₱${(subtotal + shipping).toLocaleString()}`;

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('co-name')?.value || 'Customer';
      const orderId = 'AM-' + Date.now().toString().slice(-6);

      // --- Stock reduction ---
      let currentProducts = getProducts();
      items.forEach(item => {
        const product = currentProducts.find(p => p.id === item.id);
        if (product) {
          product.stock = Math.max(0, product.stock - item.qty);
        }
      });
      saveProducts(currentProducts);
      // --- end stock reduction ---

      Cart.clear();  // Cart is now empty
      const app = document.getElementById('app');
      if (app) {
        app.innerHTML = `
          <div class="order-confirm page-fade-in">
            <div class="order-confirm-icon"><i class="fas fa-check-circle"></i></div>
            <div class="order-confirm-title">Thank You, ${name.split(' ')[0]}!</div>
            <div class="order-confirm-id">Order ID: <strong>${orderId}</strong></div>
            <p style="color:var(--text-muted);font-size:.9rem;max-width:500px;margin:0 auto 2rem;">
              Your order has been placed. You'll receive a confirmation shortly. Use your order ID to track your shipment.
            </p>
            <a href="order-status.html" class="btn-main" style="width:auto;display:inline-flex;">Track Order</a>
          </div>`;
      }
    });
  }
}

function initOrderStatus() {
  const form = document.getElementById('order-status-form');
  const result = document.getElementById('order-status-result');
  const input = document.getElementById('order-id-input');
  const stepLabels = ['Order Placed', 'Processing', 'Out for Delivery', 'Delivered'];

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const id = input?.value.trim().toUpperCase();
      const order = ORDER_STATUSES[id];
      if (!result) return;
      if (!order) {
        result.innerHTML = `<div class="status-result" style="text-align:center;"><i class="fas fa-search" style="font-size:2rem;color:var(--border);margin-bottom:1rem;display:block;"></i><p>No order found with ID: <strong>${id}</strong></p><p style="color:var(--text-muted);font-size:.8rem;margin-top:.5rem;">Try: AM-2024-001, AM-2024-002, AM-2025-003, AM-2025-004</p></div>`;
        return;
      }
      result.innerHTML = `
        <div class="status-result">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:1rem;margin-bottom:1.5rem;">
            <div>
              <div style="font-size:.65rem;letter-spacing:.2em;text-transform:uppercase;color:var(--accent);font-weight:700;">Order ID</div>
              <div style="font-size:1.1rem;font-weight:900;">${id}</div>
            </div>
            <div style="text-align:right;">
              <div style="font-size:.65rem;letter-spacing:.2em;text-transform:uppercase;color:var(--accent);font-weight:700;">Status</div>
              <div style="font-size:1rem;font-weight:900;">${order.status}</div>
            </div>
          </div>
          <div style="font-size:.8rem;color:var(--text-muted);margin-bottom:1.5rem;">Items: ${order.items}</div>
          <div class="status-timeline">
            ${stepLabels.map((label, i) => `
              <div class="status-step">
                <div class="status-dot ${order.steps[i] ? 'done' : ''}"><i class="fas fa-check" style="font-size:.6rem;${order.steps[i] ? '' : 'opacity:0;'}"></i></div>
                <div>
                  <div class="status-step-label">${label}</div>
                  <div class="status-step-desc">${order.steps[i] ? (i === 0 ? order.date : 'Completed') : 'Pending'}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>`;
    });
  }
}

function initReviews() {
  let selectedRating = 0;
  const starBtns = document.querySelectorAll('.star-btn');
  const form = document.getElementById('review-form');

  starBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      selectedRating = parseInt(btn.dataset.star);
      starBtns.forEach(b => b.classList.toggle('active', parseInt(b.dataset.star) <= selectedRating));
    });
    btn.addEventListener('mouseover', () => {
      starBtns.forEach(b => b.classList.toggle('active', parseInt(b.dataset.star) <= parseInt(btn.dataset.star)));
    });
    btn.addEventListener('mouseout', () => {
      starBtns.forEach(b => b.classList.toggle('active', parseInt(b.dataset.star) <= selectedRating));
    });
  });

  renderReviews();

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('review-name')?.value.trim();
      const text = document.getElementById('review-text')?.value.trim();
      if (!name || !text || !selectedRating) {
        showToast('Please fill all fields and select a rating.', 'fas fa-exclamation');
        return;
      }
      const reviews = JSON.parse(localStorage.getItem('amare_reviews') || '[]');
      reviews.unshift({ name, text, rating: selectedRating, date: new Date().toLocaleDateString('en-PH', { year: 'numeric', month: 'long', day: 'numeric' }) });
      localStorage.setItem('amare_reviews', JSON.stringify(reviews));
      form.reset();
      selectedRating = 0;
      starBtns.forEach(b => b.classList.remove('active'));
      showToast('Thank you for your review!', 'fas fa-heart');
      renderReviews();
    });
  }
}

function renderReviews() {
  const list = document.getElementById('review-list');
  if (!list) return;
  const reviews = JSON.parse(localStorage.getItem('amare_reviews') || '[]');
  const defaultReviews = [
    { name: 'Alexa M.', text: 'The Vitamin C serum is absolutely life-changing. My dark spots have faded significantly in just 4 weeks!', rating: 5, date: 'March 1, 2025' },
    { name: 'Jasmine R.', text: 'I\'ve been using the Gentle Foam Cleanser for 2 months and my skin has never been so balanced. Even my oily T-zone is manageable now.', rating: 5, date: 'February 14, 2025' },
    { name: 'Kevin L.', text: 'Pleasantly surprised by the results. Was skeptical at first but the HA serum delivered on its promises. Skin looks plumper!', rating: 4, date: 'February 3, 2025' },
  ];
  const all = [...reviews, ...defaultReviews];
  list.innerHTML = all.map(r => `
    <div class="review-card fade-up">
      <div class="review-header">
        <div class="review-name">${r.name}</div>
        <div class="review-date">${r.date}</div>
      </div>
      <div class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
      <div class="review-text">${r.text}</div>
    </div>
  `).join('');
  initFadeUps();
}

function initTeam() {
  const exec = document.getElementById('team-executive');
  const mgmt = document.getElementById('team-management');
  const staff = document.getElementById('team-staff');
  if (exec) exec.innerHTML = TEAM.executive.map((m, i) => teamCard(m, i)).join('');
  if (mgmt) mgmt.innerHTML = TEAM.management.map((m, i) => teamCard(m, i)).join('');
  if (staff) staff.innerHTML = TEAM.staff.map((m, i) => teamCard(m, i)).join('');
  document.querySelectorAll('.team-view-profile').forEach(btn => {
    btn.addEventListener('click', () => {
      const member = {
        name: btn.dataset.name,
        role: btn.dataset.role,
        bio: btn.dataset.bio,
        image: btn.dataset.img
      };
      openTeamModal(member);
    });
  });
  initFadeUps();
}

function openTeamModal(member) {
  const overlay = document.createElement('div');
  overlay.id = 'team-modal-overlay';
  overlay.innerHTML = `
    <div class="team-modal">
      <button class="team-modal-close"><i class="fas fa-times"></i></button>
      <div class="team-modal-content">
        <div class="team-modal-image">
          <img src="${member.image}" alt="${member.name}">
        </div>
        <div class="team-modal-details">
          <div class="team-modal-role">${member.role}</div>
          <h2 class="team-modal-name">${member.name}</h2>
          <div class="team-modal-bio">${member.bio}</div>
        </div>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  overlay.classList.add('visible');
  overlay.querySelector('.team-modal-close').addEventListener('click', () => overlay.remove());
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
}

function teamCard(m, i) {
  // Truncate bio to 100 chars for card
  const shortBio = m.bio.length > 100 ? m.bio.substring(0, 100) + '...' : m.bio;
  return `<div class="team-card fade-up" style="transition-delay:${i * 0.07}s">
    <div class="team-card-img"><img src="${m.image}" alt="${m.name}" loading="lazy" onerror="this.src='https://placehold.co/300x400/e4f0e4/6b8f71?text=A'"></div>
    <div class="team-card-info">
      <div class="team-role">${m.role}</div>
      <div class="team-name">${m.name}</div>
      <div class="team-bio">${shortBio}</div>
      <button class="btn-text team-view-profile" data-name="${m.name}" data-role="${m.role}" data-bio="${m.bio.replace(/"/g, '&quot;')}" data-img="${m.image}">Read more <i class="fas fa-arrow-right"></i></button>
    </div>
  </div>`;
}

// ============================================================
// GLOBAL UTILITIES
// ============================================================
function initFadeUps() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

// ============================================================
// PAGE LOAD HANDLER – call appropriate init based on page
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // Back to top
  const backTop = document.getElementById('back-to-top');
  if (backTop) backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Mobile hamburger
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  }

  // Newsletter
  document.addEventListener('submit', (e) => {
    if (e.target && e.target.id === 'newsletter-form') {
      e.preventDefault();
      showToast('Subscribed! Thank you.', 'fas fa-envelope');
      e.target.reset();
    }
  });

  // ---------- Determine current page (works with both file:// and http://) ----------
  let path = window.location.pathname;

  // If running from file://, extract just the filename
  if (window.location.protocol === 'file:') {
    // path will be something like "/C:/Users/.../index.html"
    // Get the last part (the file name)
    const parts = path.split('/');
    const fileName = parts[parts.length - 1];
    if (fileName === 'index.html') path = '/';
    else if (fileName.endsWith('.html')) path = '/' + fileName.slice(0, -5);
    else path = '/';
  } else {
    // Normal web server (Netlify or localhost)
    if (path.endsWith('.html')) path = path.slice(0, -5);
    if (path === '') path = '/';
  }

  // Call the appropriate init function
  if (path === '/' || path === '/index') initHome();
  else if (path === '/products') initProducts();
  else if (path === '/cart') initCart();
  else if (path === '/checkout') initCheckout();
  else if (path === '/order-status') initOrderStatus();
  else if (path === '/reviews') initReviews();
  else if (path === '/team') initTeam();
  // About, Contact, Suppliers have no specific init (fade-ups are universal)

  // Initial fade-ups
  initFadeUps();

  // Set active nav link (handles both .html and clean URLs)
  const currentPage = path === '/' ? 'index' : path.split('/').pop();
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage + '.html' || href === currentPage) link.classList.add('active');
  });
});
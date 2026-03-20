/* ============================================================
   main.js — Amare Skincare
   Page initialization, product data, all page scripts
   ============================================================ */

// ============================================================
// PRODUCT DATA
// ============================================================
const PRODUCTS = [
  // --- CLEANSERS ---
  { id: 'c1', name: 'Gentle Foam Cleanser', category: 'Cleansers', price: 650, stock: 42, image: 'https://placehold.co/400x500/e8dbc5/a67c52?text=Foam+Cleanser', description: 'A gentle, sulfate-free foaming cleanser that removes impurities without stripping the skin\'s natural moisture barrier. Enriched with aloe vera and green tea extract.' },
  { id: 'c2', name: 'Micellar Cleansing Water', category: 'Cleansers', price: 550, stock: 5, image: 'https://placehold.co/400x500/dde8c5/a67c52?text=Micellar+Water', description: 'Effortlessly dissolves makeup and sunscreen. Infused with rose water and chamomile for a soothing, residue-free cleanse. Dermatologist-tested.' },
  { id: 'c3', name: 'Exfoliating Clay Cleanser', category: 'Cleansers', price: 720, stock: 18, image: 'https://placehold.co/400x500/c5d8e8/a67c52?text=Clay+Cleanser', description: 'A gentle clay-based cleanser with fine walnut shell powder that buffs away dead skin cells while absorbing excess oil. Leaves skin radiant and smooth.' },

  // --- TONERS ---
  { id: 't1', name: 'Hydrating Rose Toner', category: 'Toners', price: 580, stock: 30, image: 'https://placehold.co/400x500/e8c5d8/a67c52?text=Rose+Toner', description: 'Alcohol-free formula infused with Bulgarian rose water and hyaluronic acid. Restores pH balance, hydrates deeply, and preps skin for serums.' },
  { id: 't2', name: 'Pore-Refining BHA Toner', category: 'Toners', price: 850, stock: 3, image: 'https://placehold.co/400x500/c5e8d8/a67c52?text=BHA+Toner', description: 'Contains 2% salicylic acid to unclog pores, reduce blackheads, and smooth skin texture. Niacinamide brightens and controls shine throughout the day.' },
  { id: 't3', name: 'Soothing Green Tea Toner', category: 'Toners', price: 620, stock: 25, image: 'https://placehold.co/400x500/d8e8c5/a67c52?text=Green+Tea+Toner', description: 'Calms redness and irritation with a concentrated blend of green tea polyphenols and centella asiatica. Ideal for sensitive and reactive skin types.' },

  // --- MOISTURIZERS ---
  { id: 'm1', name: 'Luminous Glow Cream', category: 'Moisturizers', price: 1200, stock: 22, image: 'https://placehold.co/400x500/e8e2c5/a67c52?text=Glow+Cream', description: 'Lightweight, non-greasy moisturizer with ceramides and niacinamide. Provides 48-hour hydration and gives skin a luminous, lit-from-within glow.' },
  { id: 'm2', name: 'Ultra-Rich Night Butter', category: 'Moisturizers', price: 1450, stock: 14, image: 'https://placehold.co/400x500/e8c5c5/a67c52?text=Night+Butter', description: 'Deeply nourishing overnight treatment with shea butter, squalane, and retinol. Wake up to visibly softer, plumper, more youthful-looking skin.' },
  { id: 'm3', name: 'Oil-Free Matte Gel', category: 'Moisturizers', price: 980, stock: 0, image: 'https://placehold.co/400x500/c5c5e8/a67c52?text=Matte+Gel', description: 'A water-gel formula that hydrates without clogging pores. Controls oil production for up to 12 hours. Perfect under makeup for a flawless, matte base.' },

  // --- SERUMS ---
  { id: 's1', name: 'Vitamin C Brightening Serum', category: 'Serums', price: 1800, stock: 19, image: 'https://placehold.co/400x500/e8d4c5/a67c52?text=Vit+C+Serum', description: '20% stabilized Vitamin C with ferulic acid and vitamin E. Fades dark spots, boosts collagen, and shields skin from free radical damage.' },
  { id: 's2', name: 'Hyaluronic Acid Plumping Serum', category: 'Serums', price: 1350, stock: 31, image: 'https://placehold.co/400x500/c5e8e8/a67c52?text=HA+Serum', description: 'Three molecular weights of hyaluronic acid penetrate different layers of skin for multi-depth hydration. Visibly plumps and reduces the appearance of fine lines.' },
  { id: 's3', name: 'Retinol Renewal Serum', category: 'Serums', price: 2200, stock: 8, image: 'https://placehold.co/400x500/d4c5e8/a67c52?text=Retinol+Serum', description: '0.5% encapsulated retinol with bakuchiol for a gentler approach to anti-aging. Smooths texture, minimizes pores, and evens skin tone overnight.' },
  { id: 's4', name: 'Niacinamide 10% Serum', category: 'Serums', price: 890, stock: 45, image: 'https://placehold.co/400x500/e8e8c5/a67c52?text=Niacinamide', description: 'High-strength niacinamide serum that targets enlarged pores, uneven skin tone, and excessive sebum production. Pairs well with any moisturizer.' },

  // --- MASKS ---
  { id: 'k1', name: 'Kaolin Purifying Clay Mask', category: 'Masks', price: 750, stock: 27, image: 'https://placehold.co/400x500/e8c5e0/a67c52?text=Clay+Mask', description: 'Deep-cleansing kaolin and bentonite clay mask that draws out impurities, tightens pores, and leaves skin feeling impossibly smooth.' },
  { id: 'k2', name: 'Honey & Oat Soothing Mask', category: 'Masks', price: 820, stock: 16, image: 'https://placehold.co/400x500/e8dac5/a67c52?text=Honey+Mask', description: 'A creamy, leave-on or wash-off treatment mask with raw manuka honey and colloidal oatmeal. Calms inflammation and restores suppleness to stressed skin.' },
  { id: 'k3', name: 'Sheet Mask Collection (5pcs)', category: 'Masks', price: 450, stock: 60, image: 'https://placehold.co/400x500/c5e8c5/a67c52?text=Sheet+Masks', description: 'Set of 5 essence-soaked sheet masks in different formulas: Brightening, Hydrating, Firming, Soothing, and Anti-Aging. One for every skin concern.' },

  // --- SUNSCREEN ---
  { id: 'p1', name: 'Invisible Shield SPF 50+', category: 'Sunscreen', price: 1100, stock: 38, image: 'https://placehold.co/400x500/e8e8d4/a67c52?text=SPF+50', description: 'Lightweight, invisible, broad-spectrum sunscreen that leaves zero white cast. Water-resistant for 4 hours. Enriched with antioxidants for extra defense.' },
  { id: 'p2', name: 'Dewy Tinted SPF 40', category: 'Sunscreen', price: 950, stock: 12, image: 'https://placehold.co/400x500/d4e8e0/a67c52?text=Tinted+SPF', description: 'A hybrid sunscreen and sheer tinted moisturizer with SPF 40. Evens skin tone, provides protection, and gives a natural dewy finish. Available in 3 shades.' },
];

// ============================================================
// TEAM DATA
// ============================================================
const TEAM = {
  executive: [
    { name: 'Mary Ann Dejoras', role: 'Chief Executive Officer', bio: 'A visionary leader with 10+ years in the beauty industry. Sophia founded Amare to make premium skincare accessible to all.', image: 'https://placehold.co/300x400/d4e0c5/a67c52?text=CEO' },
  ],
  management: [
    { name: 'Marco Santos', role: 'Chief Marketing Officer', bio: 'Drives brand strategy and digital growth. Passionate about storytelling and authentic brand experiences.', image: 'https://placehold.co/300x400/c5d4e0/a67c52?text=CMO' },
    { name: 'Elena Cruz', role: 'Head of Product Development', bio: 'Formulation chemist turned entrepreneur. Elena leads R&D to ensure every product is clinically validated and effective.', image: 'https://placehold.co/300x400/e0c5d4/a67c52?text=Head+Prod' },
    { name: 'Rafael Lim', role: 'Finance Manager', bio: 'Keeps Amare financially healthy and sustainable. Rafael ensures resources are optimized for growth and social impact.', image: 'https://placehold.co/300x400/d4c5e0/a67c52?text=Finance' },
  ],
  staff: [
    { name: 'Ana Villanueva', role: 'Social Media Manager', bio: 'Creates content that resonates and builds community. Ana turns customers into loyal brand advocates.', image: 'https://placehold.co/300x400/c5e0d4/a67c52?text=Social' },
    { name: 'Luis Tan', role: 'E-Commerce Specialist', bio: 'Optimizes the online shopping experience from discovery to checkout. Data-driven and customer-obsessed.', image: 'https://placehold.co/300x400/e0d4c5/a67c52?text=Ecom' },
    { name: 'Camille Bautista', role: 'Customer Experience Lead', bio: 'Ensures every customer interaction reflects Amare\'s values of care and warmth. Camille\'s team earns our 5-star reviews.', image: 'https://placehold.co/300x400/c5c5e0/a67c52?text=CX' },
    { name: 'Diego Aquino', role: 'Logistics & Operations', bio: 'Makes sure orders arrive on time, every time. Diego manages our supply chain and warehouse operations with precision.', image: 'https://placehold.co/300x400/e0c5c5/a67c52?text=Ops' },
    { name: 'Pia Navarro', role: 'Content & Brand Writer', bio: 'Crafts the words behind the brand. Pia writes everything from product descriptions to editorial features.', image: 'https://placehold.co/300x400/d4e0e0/a67c52?text=Writer' },
    { name: 'Miguel Rivera', role: 'Graphic Designer', bio: 'Brings Amare\'s visual identity to life. Miguel designs everything from packaging to campaign visuals.', image: 'https://placehold.co/300x400/e0d4d4/a67c52?text=Design' },
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
// RENDER HELPERS
// ============================================================
function renderProductCard(p, index = 0) {
  const wishlisted = Wishlist.has(p.id);
  const stockLabel = p.stock === 0 ? 'Out of Stock' : p.stock <= 5 ? `Only ${p.stock} left` : 'In Stock';
  const badgeClass = p.stock === 0 ? 'badge-out' : p.stock <= 5 ? 'badge-low' : '';
  const badgeText = p.stock === 0 ? 'Sold Out' : p.stock <= 5 ? 'Low Stock' : 'New';
  return `
    <div class="product-card fade-up" style="transition-delay:${index * 0.05}s">
      <div class="product-card-img">
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://placehold.co/400x500/ecdec1/a67c52?text=A'">
        <span class="product-badge ${badgeClass}">${badgeText}</span>
        <div class="product-card-actions">
          <button class="card-action-btn wishlist-btn ${wishlisted ? 'wishlisted' : ''}" data-id="${p.id}" title="Wishlist">
            <i class="${wishlisted ? 'fas' : 'far'} fa-heart"></i>
          </button>
          <button class="card-action-btn quick-view-btn" data-id="${p.id}" title="Quick View">
            <i class="fas fa-eye"></i>
          </button>
        </div>
      </div>
      <div class="product-card-body">
        <div class="product-category">${p.category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc-short">${p.description}</div>
        <div class="product-footer">
          <div class="product-price">₱${p.price.toLocaleString()}</div>
          <div class="product-stock ${p.stock === 0 ? 'stock-out' : p.stock <= 5 ? 'stock-low' : ''}">${stockLabel}</div>
        </div>
        <button class="add-to-cart-btn" data-id="${p.id}" ${p.stock === 0 ? 'disabled' : ''}>
          ${p.stock === 0 ? 'Out of Stock' : 'Add to Bag'}
        </button>
      </div>
    </div>
  `;
}

function bindProductCardEvents() {
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    if (btn.disabled) return;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const product = PRODUCTS.find(p => p.id === btn.dataset.id);
      if (product) Cart.addItem(product, 1);
    });
  });
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isNow = Wishlist.toggle(btn.dataset.id);
      btn.classList.toggle('wishlisted', isNow);
      btn.querySelector('i').className = isNow ? 'fas fa-heart' : 'far fa-heart';
    });
  });
  document.querySelectorAll('.quick-view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openQuickView(btn.dataset.id);
    });
  });
}

// ============================================================
// QUICK VIEW MODAL
// ============================================================
function openQuickView(id) {
  const p = PRODUCTS.find(p => p.id === id);
  if (!p) return;

  let overlay = document.getElementById('quick-view-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'quick-view-overlay';
    overlay.innerHTML = `
      <div id="quick-view-modal">
        <div class="qv-image"><img id="qv-img" src="" alt=""></div>
        <div class="qv-info">
          <button id="qv-close"><i class="fas fa-times"></i></button>
          <div id="qv-cat" class="qv-category"></div>
          <div id="qv-name" class="qv-name"></div>
          <div id="qv-price" class="qv-price"></div>
          <div id="qv-desc" class="qv-desc"></div>
          <div id="qv-stock" class="qv-stock"></div>
          <div class="qty-selector">
            <button class="qty-btn" id="qv-minus">−</button>
            <input type="number" class="qty-input" id="qv-qty" value="1" min="1">
            <button class="qty-btn" id="qv-plus">+</button>
          </div>
          <button class="btn-primary" id="qv-add-btn">Add to Bag</button>
        </div>
      </div>`;
    document.body.appendChild(overlay);
  }

  document.getElementById('qv-img').src = p.image;
  document.getElementById('qv-img').alt = p.name;
  document.getElementById('qv-cat').textContent = p.category;
  document.getElementById('qv-name').textContent = p.name;
  document.getElementById('qv-price').textContent = `₱${p.price.toLocaleString()}`;
  document.getElementById('qv-desc').textContent = p.description;
  document.getElementById('qv-stock').textContent = `Stock: ${p.stock > 0 ? p.stock + ' available' : 'Out of stock'}`;
  const qtyInput = document.getElementById('qv-qty');
  qtyInput.value = 1;
  qtyInput.max = p.stock;

  const addBtn = document.getElementById('qv-add-btn');
  addBtn.disabled = p.stock === 0;
  addBtn.onclick = () => {
    Cart.addItem(p, parseInt(qtyInput.value) || 1);
    overlay.classList.remove('visible');
  };

  document.getElementById('qv-minus').onclick = () => { if (+qtyInput.value > 1) qtyInput.value--; };
  document.getElementById('qv-plus').onclick = () => { if (+qtyInput.value < p.stock) qtyInput.value++; };
  document.getElementById('qv-close').onclick = () => overlay.classList.remove('visible');
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.remove('visible'); });

  setTimeout(() => overlay.classList.add('visible'), 10);
}

// ============================================================
// PAGE INIT
// ============================================================
function PageInit(path) {
  // Bind nav links inside loaded content
  Router.bindLinks();

  switch (path) {
    case '/': initHome(); break;
    case '/products': initProducts(); break;
    case '/cart': initCart(); break;
    case '/checkout': initCheckout(); break;
    case '/order-status': initOrderStatus(); break;
    case '/reviews': initReviews(); break;
    case '/team': initTeam(); break;
  }
}

// ============================================================
// HOME PAGE
// ============================================================
function initHome() {
  // Render featured products (first 8)
  const grid = document.getElementById('featured-products');
  if (grid) {
    grid.innerHTML = PRODUCTS.slice(0, 8).map((p, i) => renderProductCard(p, i)).join('');
    bindProductCardEvents();
    initFadeUps();
  }
}

// ============================================================
// PRODUCTS PAGE
// ============================================================
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
  let currentMaxPrice = 5000;

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
    currentMaxPrice = 5000;
    if (searchInput) searchInput.value = '';
    if (categoryFilter) categoryFilter.value = '';
    if (priceRange) priceRange.value = 5000;
    if (priceVal) priceVal.textContent = '₱5,000';
    render();
  });

  render();
}

// ============================================================
// CART PAGE
// ============================================================
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
        <a href="/products" data-link class="btn-primary" style="width:auto;display:inline-flex;">Browse Products <i class="fas fa-arrow-right btn-arrow" style="margin-left:.5rem;"></i></a>
      </div>`;
    Router.bindLinks();
    return;
  }

  const total = Cart.getTotal();
  const shipping = total >= 2000 ? 0 : 150;

  container.innerHTML = `
    <div class="cart-layout">
      <div>
        <table class="cart-table">
          <thead>
            <tr>
              <th colspan="2">Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody id="cart-rows">
            ${items.map(item => `
              <tr>
                <td><img class="cart-item-img" src="${item.image}" alt="${item.name}" onerror="this.src='https://placehold.co/80x80/ecdec1/a67c52?text=A'"></td>
                <td>
                  <div class="cart-item-name">${item.name}</div>
                  <div class="cart-item-cat">${item.category}</div>
                </td>
                <td class="cart-item-price">₱${item.price.toLocaleString()}</td>
                <td>
                  <input type="number" class="cart-qty-input" value="${item.qty}" min="1" max="${item.stock}" data-id="${item.id}">
                </td>
                <td class="cart-item-price">₱${(item.price * item.qty).toLocaleString()}</td>
                <td>
                  <button class="cart-remove-btn" data-id="${item.id}"><i class="fas fa-times"></i></button>
                </td>
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
        <a href="/checkout" data-link class="btn-primary cart-checkout-btn">Proceed to Checkout <i class="fas fa-arrow-right btn-arrow"></i></a>
        <a href="/products" data-link class="btn-secondary" style="margin-top:.75rem;">Continue Shopping</a>
      </div>
    </div>`;

  // Bind qty inputs
  container.querySelectorAll('.cart-qty-input').forEach(input => {
    input.addEventListener('change', () => {
      Cart.updateQty(input.dataset.id, parseInt(input.value));
      setTimeout(() => renderCartPage(), 50);
    });
  });
  // Bind remove buttons
  container.querySelectorAll('.cart-remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      Cart.removeItem(btn.dataset.id);
      setTimeout(() => renderCartPage(), 50);
    });
  });
  Router.bindLinks();
}

// ============================================================
// CHECKOUT PAGE
// ============================================================
function initCheckout() {
  const items = Cart.getItems();
  const summaryEl = document.getElementById('checkout-order-items');
  const subtotalEl = document.getElementById('checkout-subtotal');
  const totalEl = document.getElementById('checkout-total');
  const form = document.getElementById('checkout-form');
  const shippingEl = document.getElementById('checkout-shipping');

  if (items.length === 0 && summaryEl) {
    summaryEl.innerHTML = `<p style="color:var(--text-muted);font-size:.85rem;">Your cart is empty. <a href="/products" data-link style="color:var(--accent)">Shop now →</a></p>`;
    Router.bindLinks();
  }

  if (summaryEl) {
    summaryEl.innerHTML = items.map(item => `
      <div class="order-item">
        <img src="${item.image}" alt="${item.name}" onerror="this.src='https://placehold.co/60x60/ecdec1/a67c52?text=A'">
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
      Cart.clear();
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
            <a href="/order-status" data-link class="btn-hero-primary" style="width:auto;display:inline-flex;">Track Order <i class="fas fa-arrow-right btn-arrow" style="margin-left:.5rem;"></i></a>
          </div>`;
        Router.bindLinks();
      }
    });
  }
}

// ============================================================
// ORDER STATUS PAGE
// ============================================================
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

// ============================================================
// REVIEWS PAGE
// ============================================================
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

// ============================================================
// TEAM PAGE
// ============================================================
function initTeam() {
  const exec = document.getElementById('team-executive');
  const mgmt = document.getElementById('team-management');
  const staff = document.getElementById('team-staff');
  if (exec) exec.innerHTML = TEAM.executive.map((m, i) => teamCard(m, i)).join('');
  if (mgmt) mgmt.innerHTML = TEAM.management.map((m, i) => teamCard(m, i)).join('');
  if (staff) staff.innerHTML = TEAM.staff.map((m, i) => teamCard(m, i)).join('');
  initFadeUps();
}
function teamCard(m, i) {
  return `<div class="team-card fade-up" style="transition-delay:${i * 0.07}s">
    <div class="team-card-img"><img src="${m.image}" alt="${m.name}" loading="lazy" onerror="this.src='https://placehold.co/300x400/ecdec1/a67c52?text=A'"></div>
    <div class="team-card-info">
      <div class="team-role">${m.role}</div>
      <div class="team-name">${m.name}</div>
      <div class="team-bio">${m.bio}</div>
    </div>
  </div>`;
}

// ============================================================
// NAVBAR SHRINK ON SCROLL
// ============================================================
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) navbar.classList.toggle('shrunk', window.scrollY > 60);
  const backTop = document.getElementById('back-to-top');
  if (backTop) backTop.classList.toggle('visible', window.scrollY > 400);
});

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
});
/* ============================================================
   cart.js — Amare Skincare
   ============================================================ */

// ---------- CART STATE ----------
const Cart = {
  _key: 'amare_cart',

  getItems() {
    try { return JSON.parse(localStorage.getItem(this._key)) || []; }
    catch { return []; }
  },

  saveItems(items) {
    localStorage.setItem(this._key, JSON.stringify(items));
    this.refresh();
  },

  addItem(product, qty = 1) {
    const items = this.getItems();
    const idx = items.findIndex(i => i.id === product.id);
    if (idx > -1) {
      items[idx].qty = Math.min(items[idx].qty + qty, product.stock);
    } else {
      items.push({ ...product, qty });
    }
    this.saveItems(items);
    showToast(`${product.name} added to bag`, 'fas fa-shopping-bag');
    this.openMiniCart();
  },

  removeItem(id) {
    const items = this.getItems().filter(i => i.id !== id);
    this.saveItems(items);
    showToast('Item removed', 'fas fa-trash');
  },

  updateQty(id, qty) {
    const items = this.getItems();
    const idx = items.findIndex(i => i.id === id);
    if (idx > -1) {
      if (qty <= 0) { items.splice(idx, 1); }
      else { items[idx].qty = qty; }
    }
    this.saveItems(items);
  },

  clear() {
    localStorage.removeItem(this._key);
    this.refresh();
  },

  getTotal() {
    return this.getItems().reduce((sum, i) => sum + i.price * i.qty, 0);
  },

  getCount() {
    return this.getItems().reduce((sum, i) => sum + i.qty, 0);
  },

  // --- UI Updates ---
  refresh() {
    this.updateBadge();
    this.updateMiniCart();
  },

  updateBadge() {
    const count = this.getCount();
    const badge = document.getElementById('cart-count');
    if (!badge) return;
    badge.textContent = count;
    badge.classList.toggle('visible', count > 0);
  },

  updateMiniCart() {
    const items = this.getItems();
    const container = document.getElementById('mini-cart-items');
    const totalEl = document.getElementById('mini-cart-total-price');
    if (!container) return;

    if (items.length === 0) {
      container.innerHTML = `<p class="mini-cart-empty">Your bag is empty.<br><a href="products.html" style="color:var(--accent);">Browse products →</a></p>`;
    } else {
      container.innerHTML = items.map(item => `
        <div class="mini-cart-item">
          <img src="/${item.image}" alt="${item.name}" onerror="this.src='https://placehold.co/70x70/ecdec1/a67c52?text=A'">
          <div class="mini-cart-item-info">
            <div class="mini-cart-item-name">${item.name}</div>
            <div class="mini-cart-item-price">₱${(item.price * item.qty).toLocaleString()}</div>
            <div class="mini-cart-item-qty">Qty: ${item.qty}</div>
          </div>
          <button class="mini-cart-remove" data-id="${item.id}" title="Remove"><i class="fas fa-times"></i></button>
        </div>
      `).join('');
      container.querySelectorAll('.mini-cart-remove').forEach(btn => {
        btn.addEventListener('click', () => Cart.removeItem(btn.dataset.id));
      });
    }
    if (totalEl) totalEl.textContent = `₱${this.getTotal().toLocaleString()}`;
  },

  openMiniCart() {
    const cart = document.getElementById('mini-cart');
    const overlay = document.getElementById('mini-cart-overlay');
    if (cart) cart.classList.add('open');
    if (overlay) overlay.classList.add('visible');
  },

  closeMiniCart() {
    const cart = document.getElementById('mini-cart');
    const overlay = document.getElementById('mini-cart-overlay');
    if (cart) cart.classList.remove('open');
    if (overlay) overlay.classList.remove('visible');
  }
};

// ---------- WISHLIST ----------
const Wishlist = {
  _key: 'amare_wishlist',
  getItems() { try { return JSON.parse(localStorage.getItem(this._key)) || []; } catch { return []; } },
  toggle(id) {
    let items = this.getItems();
    if (items.includes(id)) {
      items = items.filter(i => i !== id);
      showToast('Removed from wishlist', 'fas fa-heart-broken');
    } else {
      items.push(id);
      showToast('Added to wishlist', 'fas fa-heart');
    }
    localStorage.setItem(this._key, JSON.stringify(items));
    return items.includes(id);
  },
  has(id) { return this.getItems().includes(id); }
};

// ---------- INIT ----------
document.addEventListener('DOMContentLoaded', () => {
  Cart.refresh();

  // Cart button
  const cartBtn = document.getElementById('cart-btn');
  if (cartBtn) cartBtn.addEventListener('click', () => Cart.openMiniCart());

  // Close mini cart
  const closeBtn = document.getElementById('close-mini-cart');
  if (closeBtn) closeBtn.addEventListener('click', () => Cart.closeMiniCart());

  const overlay = document.getElementById('mini-cart-overlay');
  if (overlay) overlay.addEventListener('click', () => Cart.closeMiniCart());
});
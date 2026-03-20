let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  updateMiniCart();
  updateCartPage();
}

function updateCartCount() {
  const countEl = document.getElementById('cart-count');
  if (countEl) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    countEl.textContent = totalItems;
  }
}

function addToCart(product, quantity = 1) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }
  saveCart();
  showToast(`${product.name} added to cart!`, 'fa-check-circle');
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  showToast('Item removed', 'fa-trash-alt');
}

function updateMiniCart() {
  const miniCartItems = document.getElementById('mini-cart-items');
  const miniCartTotal = document.getElementById('mini-cart-total');
  if (!miniCartItems) return;

  if (cart.length === 0) {
    miniCartItems.innerHTML = '<p style="text-align: center; color: #666;">Your cart is empty.</p>';
    miniCartTotal.textContent = '0';
    return;
  }

  miniCartItems.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
    const div = document.createElement('div');
    div.className = 'mini-cart-item';
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="mini-cart-item-details">
        <h4>${item.name}</h4>
        <p>₱${item.price} x ${item.quantity}</p>
      </div>
      <button class="mini-cart-item-remove" data-id="${item.id}"><i class="fas fa-times"></i></button>
    `;
    miniCartItems.appendChild(div);
  });
  miniCartTotal.textContent = total.toLocaleString();

  document.querySelectorAll('.mini-cart-item-remove').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      removeFromCart(id);
    });
  });
}

function updateCartPage() {
  const cartContainer = document.getElementById('cart-items');
  const totalSpan = document.getElementById('total-price');
  if (!cartContainer) return;

  if (cart.length === 0) {
    cartContainer.innerHTML = '<div class="empty-cart"><p>Your cart is empty.</p><a href="/products" class="btn btn-outline" data-page="products">Shop Now</a></div>';
    if (totalSpan) totalSpan.textContent = '0';
    return;
  }

  cartContainer.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-details">
        <h4>${item.name}</h4>
        <p>₱${item.price} x ${item.quantity} = ₱${(item.price * item.quantity).toLocaleString()}</p>
      </div>
      <button class="cart-item-remove" data-id="${item.id}">Remove</button>
    `;
    cartContainer.appendChild(div);
  });
  totalSpan.textContent = total.toLocaleString();

  document.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      removeFromCart(id);
    });
  });
}

// Mini cart toggle
document.addEventListener('DOMContentLoaded', () => {
  const cartIcon = document.querySelector('.cart-icon');
  const miniCart = document.getElementById('mini-cart');
  const closeMiniCart = document.getElementById('close-mini-cart');
  const overlay = document.getElementById('overlay');

  if (cartIcon) {
    cartIcon.addEventListener('click', (e) => {
      e.preventDefault();
      miniCart.classList.add('open');
      overlay.classList.add('active');
    });
  }

  if (closeMiniCart) {
    closeMiniCart.addEventListener('click', () => {
      miniCart.classList.remove('open');
      overlay.classList.remove('active');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', () => {
      miniCart.classList.remove('open');
      overlay.classList.remove('active');
    });
  }
});
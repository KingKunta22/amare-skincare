// ========== NAVBAR SHRINK ON SCROLL ==========
let lastScrollTop = 0;
const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    // Scrolling down
    header.classList.add('shrink');
  } else {
    // Scrolling up
    header.classList.remove('shrink');
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});d

ocument.addEventListener('page-loaded', (e) => {
  const page = e.detail;

  if (page === 'cart') {
    updateCartPage();
  }

  if (page === 'products') {
    initProductFilters();
  }

  if (page === 'home') {
    initFeaturedProducts();
  }

  if (page === 'contact') {
    initContactForm();
  }

  if (page === 'reviews') {
    initReviews();
  }

  if (page === 'order-status') {
    initOrderStatus();
  }

  if (page === 'checkout') {
    initCheckout();
  }

  // Initialize add-to-cart buttons on any page that has product cards
  document.querySelectorAll('.product-card button').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.product-card');
      const productId = parseInt(card.dataset.id);
      const product = products.find(p => p.id === productId);
      if (product) addToCart(product);
    });
  });
});

// ========== PRODUCT DATA (with PHP prices) ==========
const products = [
  { id: 1, name: "Gentle Foaming Cleanser", category: "cleansers", price: 450, stock: 10, image: "https://placehold.co/300x300/ecdec1/a67c52?text=Cleanser", description: "Soft foam for daily cleansing." },
  { id: 2, name: "Oil-Control Gel Wash", category: "cleansers", price: 550, stock: 8, image: "https://placehold.co/300x300/ecdec1/a67c52?text=Gel+Wash", description: "For oily and acne-prone skin." },
  { id: 3, name: "Rose Water Toner", category: "toners", price: 380, stock: 15, image: "https://placehold.co/300x300/ecdec1/a67c52?text=Toner", description: "Refreshing and hydrating." },
  { id: 4, name: "Niacinamide Toner", category: "toners", price: 420, stock: 12, image: "https://placehold.co/300x300/ecdec1/a67c52?text=Niacinamide", description: "Brightens and evens skin tone." },
  { id: 5, name: "Daily Moisturizer SPF30", category: "moisturizers", price: 680, stock: 7, image: "https://placehold.co/300x300/ecdec1/a67c52?text=Moisturizer", description: "Lightweight with sun protection." },
  { id: 6, name: "Night Repair Cream", category: "moisturizers", price: 750, stock: 5, image: "https://placehold.co/300x300/ecdec1/a67c52?text=Night+Cream", description: "Rich formula for overnight repair." },
  { id: 7, name: "Vitamin C Serum", category: "serums", price: 890, stock: 6, image: "https://placehold.co/300x300/ecdec1/a67c52?text=Vitamin+C", description: "Brightening and anti-oxidant." },
  { id: 8, name: "Hyaluronic Acid Serum", category: "serums", price: 720, stock: 9, image: "https://placehold.co/300x300/ecdec1/a67c52?text=HA+Serum", description: "Deep hydration." },
  { id: 9, name: "Clay Purifying Mask", category: "masks", price: 520, stock: 11, image: "https://placehold.co/300x300/ecdec1/a67c52?text=Clay+Mask", description: "Draws out impurities." },
  { id: 10, name: "Sheet Mask Set (5 pcs)", category: "masks", price: 650, stock: 4, image: "https://placehold.co/300x300/ecdec1/a67c52?text=Sheet+Masks", description: "Variety of benefits." }
];

// ========== HOME PAGE FEATURED ==========
function initFeaturedProducts() {
  const container = document.getElementById('featured-products');
  if (!container) return;
  const featured = products.slice(0, 4);
  featured.forEach(prod => {
    container.appendChild(createProductCard(prod));
  });
}

// ========== PRODUCT FILTERS ==========
function initProductFilters() {
  const productList = document.getElementById('product-list');
  if (!productList) return;

  const searchInput = document.getElementById('search');
  const categoryFilter = document.getElementById('category-filter');
  const priceFilter = document.getElementById('price-filter');
  const priceSpan = document.getElementById('price-value');

  function filterProducts() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const category = categoryFilter ? categoryFilter.value : 'all';
    const maxPrice = priceFilter ? parseInt(priceFilter.value) : 5000;

    const filtered = products.filter(p => {
      return (p.name.toLowerCase().includes(searchTerm) || p.description.toLowerCase().includes(searchTerm)) &&
             (category === 'all' || p.category === category) &&
             p.price <= maxPrice;
    });

    productList.innerHTML = '';
    filtered.forEach(prod => {
      productList.appendChild(createProductCard(prod));
    });
  }

  filterProducts();

  if (searchInput) searchInput.addEventListener('input', filterProducts);
  if (categoryFilter) categoryFilter.addEventListener('change', filterProducts);
  if (priceFilter) {
    priceFilter.addEventListener('input', function() {
      priceSpan.textContent = this.value;
      filterProducts();
    });
  }
}

// ========== CREATE PRODUCT CARD ==========
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.dataset.id = product.id;
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <p class="price">₱${product.price}</p>
    <p class="stock">In stock: ${product.stock}</p>
    <button>Add to Cart</button>
  `;
  return card;
}

// ========== CONTACT FORM ==========
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Message sent!', 'fa-paper-plane');
      form.reset();
    });
  }
}

// ========== REVIEWS ==========
function initReviews() {
  let reviews = JSON.parse(localStorage.getItem('reviews')) || [
    { name: "Anna", rating: 5, text: "Love the Vitamin C serum! My skin glows." },
    { name: "Ben", rating: 4, text: "Moisturizer is great, but a bit thick for summer." },
    { name: "Carla", rating: 5, text: "The toner is so refreshing, will buy again!" }
  ];

  const reviewsList = document.getElementById('reviews-list');
  const reviewForm = document.getElementById('review-form');

  function displayReviews() {
    reviewsList.innerHTML = '';
    reviews.slice().reverse().forEach(r => {
      const stars = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
      const div = document.createElement('div');
      div.className = 'review-item';
      div.style.background = 'white';
      div.style.padding = '1rem';
      div.style.borderRadius = '16px';
      div.style.marginBottom = '1rem';
      div.innerHTML = `
        <h4>${r.name}</h4>
        <div style="color: #a67c52;">${stars}</div>
        <p>${r.text}</p>
      `;
      reviewsList.appendChild(div);
    });
  }

  displayReviews();

  if (reviewForm) {
    reviewForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('review-name').value;
      const rating = parseInt(document.getElementById('review-rating').value);
      const text = document.getElementById('review-text').value;
      reviews.push({ name, rating, text });
      localStorage.setItem('reviews', JSON.stringify(reviews));
      displayReviews();
      reviewForm.reset();
      showToast('Review submitted!', 'fa-star');
    });
  }
}

// ========== ORDER STATUS ==========
function initOrderStatus() {
  const form = document.getElementById('track-form');
  const result = document.getElementById('track-result');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const orderId = form.querySelector('input').value;
      document.getElementById('order-id').textContent = orderId;
      result.style.display = 'block';
      showToast('Order found!', 'fa-truck');
    });
  }
}

// ========== CHECKOUT ==========
function initCheckout() {
  const form = document.getElementById('checkout-form');
  const confirmation = document.getElementById('order-confirmation');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      confirmation.style.display = 'block';
      form.style.display = 'none';
      cart = [];
      saveCart();
      showToast('Order placed (simulated)!', 'fa-check-circle');
    });
  }
}

// ========== BACK TO TOP ==========
window.addEventListener('scroll', () => {
  const btn = document.getElementById('back-to-top');
  if (window.scrollY > 300) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
});

document.getElementById('back-to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Initialize cart display on load
updateCartCount();
updateMiniCart();

// ========== SCROLL ANIMATIONS ==========
const faders = document.querySelectorAll('.fade-up');

const appearOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -50px 0px'
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Re-run observer after page loads (for SPA)
document.addEventListener('page-loaded', () => {
  setTimeout(() => {
    const newFaders = document.querySelectorAll('.fade-up');
    newFaders.forEach(fader => appearOnScroll.observe(fader));
  }, 500); // slight delay to ensure DOM is ready
});
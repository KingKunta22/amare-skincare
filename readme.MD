# amare. — Skincare E-Commerce Website
### BSBA Class Project

---

## 🌿 About
**Amare** (Latin/Italian for "to love") is a fully front-end skincare e-commerce website built with HTML, CSS, and vanilla JavaScript. No backend, no frameworks — just clean, organized code.

---

## 📁 File Structure

```
amare-skincare/
├── index.html              ← Entry point (SPA shell)
├── css/
│   └── style.css           ← All styles (CSS variables, responsive, animations)
├── js/
│   ├── toast.js            ← Toast notification system
│   ├── cart.js             ← Cart & Wishlist (localStorage)
│   ├── router.js           ← SPA router (fetch + history API)
│   └── main.js             ← All page logic, product data, team data
├── pages/
│   ├── home.html           ← Hero, featured products, newsletter
│   ├── products.html       ← Full catalog with search & filters
│   ├── about.html          ← Brand story, values, stats
│   ├── contact.html        ← Contact form + info
│   ├── team.html           ← Team hierarchy (CEO → Staff)
│   ├── cart.html           ← Full cart with summary
│   ├── checkout.html       ← Checkout form + order summary
│   ├── order-status.html   ← Order tracking with demo IDs
│   ├── suppliers.html      ← Supplier directory
│   └── reviews.html        ← Review form + display
├── fonts/
│   └── futura-futuris-regular.ttf  ← Place font file here
└── images/
    └── hero.jpg            ← Place hero background image here
```

---

## 🚀 How to Run

Because the SPA uses `fetch()` to load page HTML, you **must** run it through a local server (not by opening `index.html` directly).

### Option 1: VS Code Live Server
1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **Open with Live Server**

### Option 2: Python (built-in)
```bash
cd amare-skincare
python -m http.server 8080
# Visit: http://localhost:8080
```

### Option 3: Node.js
```bash
npx serve .
# or
npx http-server .
```

---

## ✅ Features Checklist

| Feature | Status |
|---|---|
| SPA with fetch + history API routing | ✅ |
| 10 pages (Home, Products, About, Contact, Team, Cart, Checkout, Order Status, Suppliers, Reviews) | ✅ |
| 18 products across 6 categories | ✅ |
| Search by name/description | ✅ |
| Filter by category | ✅ |
| Price range slider (₱500–₱5,000) | ✅ |
| Add to Cart (localStorage) | ✅ |
| Mini cart slide-out | ✅ |
| Cart page with qty update & remove | ✅ |
| Wishlist with heart toggle | ✅ |
| Quick View modal | ✅ |
| Checkout form with order confirmation | ✅ |
| Order tracking (demo IDs) | ✅ |
| Review form + localStorage + display | ✅ |
| Team hierarchy (CEO → Management → Staff) | ✅ |
| Supplier directory (8 partners) | ✅ |
| Stock indicator on product cards | ✅ |
| Toast notifications (no alerts) | ✅ |
| Navbar shrink on scroll | ✅ |
| Scroll-triggered fade-up animations | ✅ |
| Hero: left-aligned, two buttons, arrow animation | ✅ |
| Responsive (mobile + desktop) | ✅ |
| Free shipping threshold (₱2,000) | ✅ |
| Back to top button | ✅ |
| Instagram icon link | ✅ |
| Newsletter signup | ✅ |
| Footer with navigation | ✅ |

---

## 🎨 Design Specs

- **Primary Background:** `#ecdec1` (soft beige)
- **Accent:** `#a67c52` (warm brown)
- **Font:** Futura Futuris (fallback: Futura, Century Gothic)
- **Border radius:** 0 (sharp edges)
- **Currency:** Philippine Peso (₱)

---

## 🛒 Demo Data

**Order Tracking IDs:**
- `AM-2024-001` — Delivered
- `AM-2024-002` — Out for Delivery
- `AM-2025-003` — Processing
- `AM-2025-004` — Order Placed

---

## 📝 Notes

- All data (cart, wishlist, reviews) persists in `localStorage`
- Place `futura-futuris-regular.ttf` in `/fonts/` for the custom font
- Place a `hero.jpg` in `/images/` for the hero background
- Placeholder images auto-generate via `placehold.co` (requires internet)
- The font falls back to Futura/Century Gothic if the TTF is not present


AMARE SKINCARE — Images Folder
================================

PRODUCT IMAGES
Place product photos in: images/products/
Required filenames (exactly as listed):

CLEANSERS:
  pureveil-cleanser.jpg
  hydrofresh-cleanser.jpg
  clearbalance-cleanser.jpg
  lowph-cleanser.jpg

TONERS:
  aqualift-toner.jpg
  glowrefine-toner.jpg
  calmessence-toner.jpg
  poretight-toner.jpg

MOISTURIZERS:
  hydrocloud-moisturizer.jpg
  ceramide-cream.jpg
  aloe-gel-moisturizer.jpg
  dewglow-moisturizer.jpg

SERUMS:
  radiance-serum.jpg
  niacinamide-serum.jpg
  snail-serum.jpg
  glowrenew-serum.jpg

MASKS:
  brightpeel-mask.jpg
  volcanic-clay-mask.jpg
  hydrasheet-mask.jpg
  charcoal-mask.jpg
  calmskin-mask.jpg

SUNSCREEN:
  sunshield-spf50.jpg
  aqualight-uv.jpg
  brightdefense-sunscreen.jpg
  centella-sunscreen.jpg

TEAM PHOTOS
Place team photos in: images/team/
Required filenames:
  dejoras.jpg       (Mary Ann B. Dejoras — CEO)
  villarente.jpg    (Anarie V. Villarente — General Manager)
  nadera.jpg        (Hacel C. Nadera — Administration Manager)

HERO IMAGE
Place in: images/
  hero.jpg          (Background image for the home hero section)

NOTE: If images are missing, the site will show a sage-colored placeholder
automatically. Add images anytime and they will appear on refresh.
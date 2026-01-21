// Cart Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Wishlist Management
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// Product Data
const products = [
  { id: 1, name: 'Product 1', price: 100, image: 'product1.jpg', badge: 'bestseller', discount: 10, rating: 4.5, sold: 150, location: 'Jakarta' },
  { id: 2, name: 'Product 2', price: 200, image: 'product2.jpg', badge: 'new', discount: 20, rating: 4.0, sold: 200, location: 'Surabaya' },
  // Add more products here
];

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
  initNavbar();
  initHeroSlider();
  initFlashSaleTimer();
  initProductGrid();
  updateCartCount();
  initMobileMenu();
  initCategoryDropdown();
  initBackToTop();
});

// Navbar scroll effect
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Hero Slider
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.getElementById('prevSlide');
  const nextBtn = document.getElementById('nextSlide');
  
  if (!slides.length) return;
  
  let currentSlide = 0;
  let slideInterval;
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }
  
  function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }
  
  function prevSlide() {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
  }
  
  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 5000);
  }
  
  function stopAutoSlide() {
    clearInterval(slideInterval);
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      stopAutoSlide();
      nextSlide();
      startAutoSlide();
    });
  }
  
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      stopAutoSlide();
      prevSlide();
      startAutoSlide();
    });
  }
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      stopAutoSlide();
      showSlide(index);
      startAutoSlide();
    });
  });
  
  startAutoSlide();
}

// Flash Sale Timer
function initFlashSaleTimer() {
  const hoursEl = document.getElementById('flashHours');
  const minutesEl = document.getElementById('flashMinutes');
  const secondsEl = document.getElementById('flashSeconds');
  
  if (!hoursEl || !minutesEl || !secondsEl) return;
  
  // Set end time (e.g., 3 hours from now)
  let totalSeconds = 3 * 60 * 60;
  
  function updateTimer() {
    if (totalSeconds <= 0) {
      totalSeconds = 3 * 60 * 60; // Reset
    }
    
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    
    hoursEl.textContent = hours.toString().padStart(2, '0');
    minutesEl.textContent = minutes.toString().padStart(2, '0');
    secondsEl.textContent = seconds.toString().padStart(2, '0');
    
    totalSeconds--;
  }
  
  updateTimer();
  setInterval(updateTimer, 1000);
}

// Product Grid
function initProductGrid() {
  const productGrid = document.getElementById('productGrid');
  if (!productGrid) return;
  
  let displayedProducts = 12;
  
  function renderProducts() {
    const productsToShow = products.slice(0, displayedProducts);
    productGrid.innerHTML = productsToShow.map(product => createProductCard(product)).join('');
  }
  
  renderProducts();
  
  // Load More Button
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      displayedProducts += 6;
      if (displayedProducts >= products.length) {
        loadMoreBtn.style.display = 'none';
      }
      renderProducts();
    });
  }
}

// Create Product Card HTML
function createProductCard(product) {
  const badgeHtml = product.badge ? `
    <span class="badge badge-${product.badge} absolute top-2 left-2 z-10">
      ${product.badge === 'bestseller' ? 'Best Seller' : 
        product.badge === 'new' ? 'Baru' : 
        product.badge === 'sale' ? 'Sale' : 
        product.badge === 'official' ? 'Official' : ''}
    </span>
  ` : '';
  
  const discountHtml = product.discount ? `
    <span class="absolute top-2 right-2 bg-danger text-white text-xs px-1.5 py-0.5 rounded font-semibold z-10">
      -${product.discount}%
    </span>
  ` : '';
  
  return `
    <a href="product-detail.html?id=${product.id}" class="product-card group">
      <div class="relative aspect-square overflow-hidden bg-gray-100">
        ${badgeHtml}
        ${discountHtml}
        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover product-image">
        <button onclick="event.preventDefault(); addToWishlist(${product.id})" class="wishlist-btn absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition z-20 ${product.discount ? 'top-10' : ''}">
          <svg class="w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          </svg>
        </button>
      </div>
      <div class="p-3">
        <h3 class="text-sm font-medium text-text-primary mb-1 line-clamp-2 group-hover:text-primary transition">${product.name}</h3>
        <p class="text-base font-bold text-text-primary mb-1">${formatPrice(product.price)}</p>
        ${product.originalPrice ? `
          <p class="text-xs text-text-muted line-through">${formatPrice(product.originalPrice)}</p>
        ` : ''}
        <div class="flex items-center gap-2 mt-2">
          <div class="flex items-center gap-1">
            <svg class="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span class="text-xs text-text-secondary">${product.rating}</span>
          </div>
          <span class="text-xs text-text-muted">|</span>
          <span class="text-xs text-text-muted">Terjual ${formatNumber(product.sold)}</span>
        </div>
        <p class="text-xs text-text-muted mt-1.5 flex items-center gap-1">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          ${product.location}
        </p>
      </div>
    </a>
  `;
}

// Cart Functions
function updateCartCount() {
  const cartCountEl = document.getElementById('cartCount');
  if (cartCountEl) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountEl.textContent = totalItems;
    cartCountEl.style.display = totalItems > 0 ? 'flex' : 'none';
  }
}

function addToCart(productId, quantity = 1) {
  const product = getProductById(productId);
  if (!product) return;
  
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
  }
  
  saveCart();
  updateCartCount();
  showToast('Produk ditambahkan ke keranjang', 'success');
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartCount();
}

function updateCartItemQuantity(productId, quantity) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity = Math.max(1, quantity);
    saveCart();
  }
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartCount();
}

// Wishlist Functions
function addToWishlist(productId) {
  const index = wishlist.indexOf(productId);
  if (index > -1) {
    wishlist.splice(index, 1);
    showToast('Dihapus dari wishlist', 'success');
  } else {
    wishlist.push(productId);
    showToast('Ditambahkan ke wishlist', 'success');
  }
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function isInWishlist(productId) {
  return wishlist.includes(productId);
}

// Helper Functions
function getProductById(productId) {
  return products.find(product => product.id === productId);
}

function formatPrice(price) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
}

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// Toast Notification
function showToast(message, type = 'success') {
  // Remove existing toast
  const existingToast = document.querySelector('.toast');
  if (existingToast) {
    existingToast.remove();
  }
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div class="flex items-center gap-3">
      ${type === 'success' ? `
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
      ` : `
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      `}
      <span>${message}</span>
    </div>
  `;
  
  document.body.appendChild(toast);
  
  // Show toast
  setTimeout(() => toast.classList.add('show'), 10);
  
  // Hide and remove toast
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Mobile Menu
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (!menuBtn || !mobileMenu) return;
  
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Category Dropdown
function initCategoryDropdown() {
  const dropdownBtn = document.getElementById('categoryDropdownBtn');
  const dropdown = document.getElementById('categoryDropdown');
  
  if (!dropdownBtn || !dropdown) return;
  
  dropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('hidden');
  });
  
  document.addEventListener('click', () => {
    dropdown.classList.add('hidden');
  });
}

// Back to Top
function initBackToTop() {
  const backToTopBtn = document.createElement('button');
  backToTopBtn.className = 'fab back-to-top';
  backToTopBtn.innerHTML = `
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
    </svg>
  `;
  backToTopBtn.setAttribute('aria-label', 'Kembali ke atas');
  document.body.appendChild(backToTopBtn);
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Search functionality
const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const query = searchInput.value.trim();
      if (query) {
        window.location.href = `products.html?search=${encodeURIComponent(query)}`;
      }
    }
  });
}

// Line clamp polyfill using CSS
const style = document.createElement('style');
style.textContent = `
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
document.head.appendChild(style);

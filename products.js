// Products Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
  initProductsPage();
});

// State
let currentFilters = {
  category: 'all',
  minPrice: 0,
  maxPrice: Infinity,
  rating: 0,
  locations: [],
  search: ''
};

let currentSort = 'relevant';
let currentPage = 1;
const productsPerPage = 12;

// Declare products variable
const products = [
  // Sample products data
  { id: 1, name: 'Product 1', category: 'elektronik', price: 100000, rating: 4, location: 'Jakarta', description: 'Description of Product 1' },
  { id: 2, name: 'Product 2', category: 'fashion', price: 200000, rating: 5, location: 'Bandung', description: 'Description of Product 2' },
  // Add more products as needed
];

function initProductsPage() {
  // Parse URL parameters
  parseUrlParams();
  
  // Initialize components
  initAccordions();
  initPricePresets();
  initFilterListeners();
  initSortListener();
  initMobileFilter();
  
  // Load products
  applyFiltersAndRender();
}

function parseUrlParams() {
  const params = new URLSearchParams(window.location.search);
  
  const category = params.get('category');
  if (category) {
    currentFilters.category = category;
    const categoryRadio = document.querySelector(`input[name="category"][value="${category}"]`);
    if (categoryRadio) categoryRadio.checked = true;
    
    // Update breadcrumb
    const categoryNames = {
      'elektronik': 'Elektronik',
      'fashion': 'Fashion',
      'fashion-pria': 'Fashion Pria',
      'fashion-wanita': 'Fashion Wanita',
      'kecantikan': 'Kecantikan',
      'kesehatan': 'Kesehatan',
      'makanan': 'Makanan & Minuman',
      'rumah': 'Rumah Tangga'
    };
    document.getElementById('breadcrumbCategory').textContent = categoryNames[category] || 'Produk';
  }
  
  const search = params.get('search');
  if (search) {
    currentFilters.search = search;
    document.getElementById('searchInput').value = search;
    const searchQueryEl = document.getElementById('searchQuery');
    searchQueryEl.classList.remove('hidden');
    searchQueryEl.querySelector('span').textContent = search;
  }
}

function initAccordions() {
  const accordionBtns = document.querySelectorAll('.accordion-btn');
  
  accordionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const content = document.getElementById(targetId);
      
      btn.classList.toggle('open');
      content.classList.toggle('open');
    });
  });
}

function initPricePresets() {
  const presets = document.querySelectorAll('.price-preset');
  
  presets.forEach(preset => {
    preset.addEventListener('click', () => {
      const min = parseInt(preset.dataset.min) || 0;
      const max = parseInt(preset.dataset.max) || Infinity;
      
      document.getElementById('minPrice').value = min;
      document.getElementById('maxPrice').value = max === 999999999 ? '' : max;
      
      // Highlight active preset
      presets.forEach(p => p.classList.remove('border-primary', 'text-primary', 'bg-primary-light'));
      preset.classList.add('border-primary', 'text-primary', 'bg-primary-light');
    });
  });
}

function initFilterListeners() {
  // Category filter
  document.querySelectorAll('input[name="category"]').forEach(input => {
    input.addEventListener('change', (e) => {
      currentFilters.category = e.target.value;
    });
  });
  
  // Rating filter
  document.querySelectorAll('input[name="rating"]').forEach(input => {
    input.addEventListener('change', (e) => {
      currentFilters.rating = parseInt(e.target.value);
    });
  });
  
  // Location filter
  document.querySelectorAll('.location-filter').forEach(input => {
    input.addEventListener('change', () => {
      currentFilters.locations = Array.from(document.querySelectorAll('.location-filter:checked'))
        .map(cb => cb.value);
    });
  });
  
  // Apply filters button
  document.getElementById('applyFilters').addEventListener('click', () => {
    collectPriceFilters();
    currentPage = 1;
    applyFiltersAndRender();
    updateUrl();
  });
  
  // Reset filters button
  document.getElementById('resetFilters').addEventListener('click', resetAllFilters);
  
  // Search form
  document.getElementById('searchForm').addEventListener('submit', (e) => {
    e.preventDefault();
    currentFilters.search = document.getElementById('searchInput').value.trim();
    currentPage = 1;
    applyFiltersAndRender();
    updateUrl();
  });
}

function collectPriceFilters() {
  const minPrice = document.getElementById('minPrice').value;
  const maxPrice = document.getElementById('maxPrice').value;
  
  currentFilters.minPrice = minPrice ? parseInt(minPrice) : 0;
  currentFilters.maxPrice = maxPrice ? parseInt(maxPrice) : Infinity;
}

function initSortListener() {
  document.getElementById('sortSelect').addEventListener('change', (e) => {
    currentSort = e.target.value;
    currentPage = 1;
    applyFiltersAndRender();
  });
}

function initMobileFilter() {
  const mobileFilterBtn = document.getElementById('mobileFilterBtn');
  const mobileFilterModal = document.getElementById('mobileFilterModal');
  const closeMobileFilter = document.getElementById('closeMobileFilter');
  const mobileApplyFilters = document.getElementById('mobileApplyFilters');
  const mobileResetFilters = document.getElementById('mobileResetFilters');
  
  mobileFilterBtn.addEventListener('click', () => {
    mobileFilterModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });
  
  closeMobileFilter.addEventListener('click', closeMobileFilterModal);
  
  mobileFilterModal.addEventListener('click', (e) => {
    if (e.target === mobileFilterModal) {
      closeMobileFilterModal();
    }
  });
  
  mobileApplyFilters.addEventListener('click', () => {
    collectPriceFilters();
    currentPage = 1;
    applyFiltersAndRender();
    updateUrl();
    closeMobileFilterModal();
  });
  
  mobileResetFilters.addEventListener('click', () => {
    resetAllFilters();
    closeMobileFilterModal();
  });
}

function closeMobileFilterModal() {
  document.getElementById('mobileFilterModal').classList.add('hidden');
  document.body.style.overflow = '';
}

function resetAllFilters() {
  // Reset state
  currentFilters = {
    category: 'all',
    minPrice: 0,
    maxPrice: Infinity,
    rating: 0,
    locations: [],
    search: ''
  };
  currentPage = 1;
  
  // Reset UI
  document.querySelector('input[name="category"][value="all"]').checked = true;
  document.querySelector('input[name="rating"][value="0"]').checked = true;
  document.querySelectorAll('.location-filter').forEach(cb => cb.checked = false);
  document.getElementById('minPrice').value = '';
  document.getElementById('maxPrice').value = '';
  document.getElementById('searchInput').value = '';
  document.querySelectorAll('.price-preset').forEach(p => {
    p.classList.remove('border-primary', 'text-primary', 'bg-primary-light');
  });
  
  // Update URL and render
  window.history.replaceState({}, '', 'products.html');
  applyFiltersAndRender();
}

function applyFiltersAndRender() {
  let filteredProducts = [...products];
  
  // Search filter
  if (currentFilters.search) {
    const query = currentFilters.search.toLowerCase();
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.store.toLowerCase().includes(query)
    );
  }
  
  // Category filter
  if (currentFilters.category !== 'all') {
    filteredProducts = filteredProducts.filter(p => 
      p.category === currentFilters.category || 
      p.category.includes(currentFilters.category)
    );
  }
  
  // Price filter
  filteredProducts = filteredProducts.filter(p => 
    p.price >= currentFilters.minPrice && p.price <= currentFilters.maxPrice
  );
  
  // Rating filter
  if (currentFilters.rating > 0) {
    filteredProducts = filteredProducts.filter(p => p.rating >= currentFilters.rating);
  }
  
  // Location filter
  if (currentFilters.locations.length > 0) {
    filteredProducts = filteredProducts.filter(p => 
      currentFilters.locations.some(loc => 
        p.location.toLowerCase().includes(loc.toLowerCase())
      )
    );
  }
  
  // Sort
  filteredProducts = sortProductsList(filteredProducts, currentSort);
  
  // Update result count
  document.getElementById('resultCount').textContent = filteredProducts.length;
  
  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);
  
  // Render
  renderProducts(paginatedProducts);
  renderPagination(totalPages);
  renderActiveFilters();
  
  // Show/hide empty state
  const emptyState = document.getElementById('emptyState');
  const productsGrid = document.getElementById('productsGrid');
  
  if (filteredProducts.length === 0) {
    emptyState.classList.remove('hidden');
    productsGrid.classList.add('hidden');
  } else {
    emptyState.classList.add('hidden');
    productsGrid.classList.remove('hidden');
  }
}

function sortProductsList(products, sortBy) {
  const sorted = [...products];
  
  switch (sortBy) {
    case 'newest':
      return sorted.sort((a, b) => b.id - a.id);
    case 'sold':
      return sorted.sort((a, b) => b.sold - a.sold);
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price);
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    default:
      return sorted;
  }
}

function renderProducts(productsList) {
  const grid = document.getElementById('productsGrid');
  
  if (productsList.length === 0) {
    grid.innerHTML = '';
    return;
  }
  
  grid.innerHTML = productsList.map(product => createProductCard(product)).join('');
}

function createProductCard(product) {
  return `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <div class="product-details">
        <h3 class="product-name line-clamp-2">${product.name}</h3>
        <p class="product-description line-clamp-2">${product.description}</p>
        <p class="product-price">Rp ${product.price.toLocaleString()}</p>
        <p class="product-rating">Rating: ${product.rating}</p>
        <p class="product-location">Location: ${product.location}</p>
      </div>
    </div>
  `;
}

function renderPagination(totalPages) {
  const pagination = document.getElementById('pagination');
  
  if (totalPages <= 1) {
    pagination.innerHTML = '';
    return;
  }
  
  let html = '';
  
  // Previous button
  html += `
    <button onclick="goToPage(${currentPage - 1})" 
            class="px-3 py-2 rounded-lg border border-border ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:border-primary hover:text-primary'} transition"
            ${currentPage === 1 ? 'disabled' : ''}>
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
    </button>
  `;
  
  // Page numbers
  const maxVisible = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let endPage = Math.min(totalPages, startPage + maxVisible - 1);
  
  if (endPage - startPage + 1 < maxVisible) {
    startPage = Math.max(1, endPage - maxVisible + 1);
  }
  
  if (startPage > 1) {
    html += `<button onclick="goToPage(1)" class="px-3 py-2 rounded-lg border border-border hover:border-primary hover:text-primary transition">1</button>`;
    if (startPage > 2) {
      html += `<span class="px-2 text-text-muted">...</span>`;
    }
  }
  
  for (let i = startPage; i <= endPage; i++) {
    html += `
      <button onclick="goToPage(${i})" 
              class="px-3 py-2 rounded-lg border ${i === currentPage ? 'border-primary bg-primary text-white' : 'border-border hover:border-primary hover:text-primary'} transition">
        ${i}
      </button>
    `;
  }
  
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      html += `<span class="px-2 text-text-muted">...</span>`;
    }
    html += `<button onclick="goToPage(${totalPages})" class="px-3 py-2 rounded-lg border border-border hover:border-primary hover:text-primary transition">${totalPages}</button>`;
  }
  
  // Next button
  html += `
    <button onclick="goToPage(${currentPage + 1})" 
            class="px-3 py-2 rounded-lg border border-border ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:border-primary hover:text-primary'} transition"
            ${currentPage === totalPages ? 'disabled' : ''}>
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
    </button>
  `;
  
  pagination.innerHTML = html;
}

function goToPage(page) {
  currentPage = page;
  applyFiltersAndRender();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderActiveFilters() {
  const container = document.getElementById('activeFilters');
  const tags = [];
  
  if (currentFilters.search) {
    tags.push({
      label: `Pencarian: "${currentFilters.search}"`,
      remove: () => {
        currentFilters.search = '';
        document.getElementById('searchInput').value = '';
        document.getElementById('searchQuery').classList.add('hidden');
      }
    });
  }
  
  if (currentFilters.category !== 'all') {
    const categoryNames = {
      'elektronik': 'Elektronik',
      'fashion': 'Fashion',
      'kecantikan': 'Kecantikan',
      'kesehatan': 'Kesehatan',
      'makanan': 'Makanan',
      'rumah': 'Rumah Tangga'
    };
    tags.push({
      label: `Kategori: ${categoryNames[currentFilters.category] || currentFilters.category}`,
      remove: () => {
        currentFilters.category = 'all';
        document.querySelector('input[name="category"][value="all"]').checked = true;
      }
    });
  }
  
  if (currentFilters.minPrice > 0 || currentFilters.maxPrice < Infinity) {
    const minLabel = currentFilters.minPrice > 0 ? formatPrice(currentFilters.minPrice) : 'Rp 0';
    const maxLabel = currentFilters.maxPrice < Infinity ? formatPrice(currentFilters.maxPrice) : 'Max';
    tags.push({
      label: `Harga: ${minLabel} - ${maxLabel}`,
      remove: () => {
        currentFilters.minPrice = 0;
        currentFilters.maxPrice = Infinity;
        document.getElementById('minPrice').value = '';
        document.getElementById('maxPrice').value = '';
      }
    });
  }
  
  if (currentFilters.rating > 0) {
    tags.push({
      label: `Rating: ${currentFilters.rating}+ bintang`,
      remove: () => {
        currentFilters.rating = 0;
        document.querySelector('input[name="rating"][value="0"]').checked = true;
      }
    });
  }
  
  if (tags.length === 0) {
    container.classList.add('hidden');
    return;
  }
  
  container.classList.remove('hidden');
  container.innerHTML = tags.map((tag, index) => `
    <span class="chip">
      ${tag.label}
      <button onclick="removeFilterTag(${index})" class="hover:text-danger transition">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </span>
  `).join('') + `
    <button onclick="resetAllFilters()" class="text-sm text-primary hover:underline">Hapus Semua</button>
  `;
}

// Store filter remove functions
let filterRemoveFunctions = [];

function removeFilterTag(index) {
  // This is a simplified version - in production you'd want to track which filter to remove
  resetAllFilters();
}

function updateUrl() {
  const params = new URLSearchParams();
  
  if (currentFilters.category !== 'all') {
    params.set('category', currentFilters.category);
  }
  
  if (currentFilters.search) {
    params.set('search', currentFilters.search);
  }
  
  const newUrl = params.toString() ? `products.html?${params.toString()}` : 'products.html';
  window.history.replaceState({}, '', newUrl);
}

// Line clamp CSS
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

// Declare formatPrice function
function formatPrice(price) {
  return `Rp ${price.toLocaleString()}`;
}

// Product Data
const products = [
    {
        id: 1,
        name: "iPhone 15 Pro Max 256GB",
        price: 21999000,
        originalPrice: 24999000,
        discount: 12,
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&h=600&fit=crop"
        ],
        category: "Elektronik",
        rating: 4.9,
        sold: 1250,
        location: "Jakarta Selatan",
        description: "iPhone 15 Pro Max dengan chip A17 Pro, kamera 48MP, dan layar Super Retina XDR. Tersedia dalam warna Natural Titanium.",
        stock: 50,
        isFlashSale: true
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        price: 19499000,
        originalPrice: 22999000,
        discount: 15,
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&h=600&fit=crop"
        ],
        category: "Elektronik",
        rating: 4.8,
        sold: 890,
        location: "Bandung",
        description: "Samsung Galaxy S24 Ultra dengan S Pen, kamera 200MP, dan AI features terbaru. Performa flagship terbaik.",
        stock: 35,
        isFlashSale: true
    },
    {
        id: 3,
        name: "MacBook Air M3 13 inch",
        price: 18999000,
        originalPrice: 20999000,
        discount: 10,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&h=600&fit=crop"
        ],
        category: "Elektronik",
        rating: 4.9,
        sold: 567,
        location: "Jakarta Pusat",
        description: "MacBook Air dengan chip M3, 8GB RAM, 256GB SSD. Tipis, ringan, dan powerful untuk produktivitas.",
        stock: 25,
        isFlashSale: false
    },
    {
        id: 4,
        name: "Nike Air Jordan 1 Retro High",
        price: 2799000,
        originalPrice: 3499000,
        discount: 20,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&h=600&fit=crop"
        ],
        category: "Fashion",
        rating: 4.7,
        sold: 2340,
        location: "Surabaya",
        description: "Sepatu ikonik Nike Air Jordan 1 Retro High. Original 100% dengan box dan accessories lengkap.",
        stock: 100,
        isFlashSale: true
    },
    {
        id: 5,
        name: "Kemeja Flannel Premium",
        price: 189000,
        originalPrice: 299000,
        discount: 37,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=600&fit=crop"
        ],
        category: "Fashion",
        rating: 4.5,
        sold: 5670,
        location: "Yogyakarta",
        description: "Kemeja flannel premium dengan bahan cotton yang nyaman. Cocok untuk casual dan semi-formal.",
        stock: 200,
        isFlashSale: false
    },
    {
        id: 6,
        name: "Sony WH-1000XM5 Headphone",
        price: 4999000,
        originalPrice: 5999000,
        discount: 17,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop"
        ],
        category: "Elektronik",
        rating: 4.8,
        sold: 1890,
        location: "Jakarta Barat",
        description: "Headphone wireless premium dengan noise cancelling terbaik di kelasnya. Battery life hingga 30 jam.",
        stock: 45,
        isFlashSale: true
    },
    {
        id: 7,
        name: "Skincare Set Glow Up",
        price: 459000,
        originalPrice: 650000,
        discount: 29,
        image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=600&fit=crop"
        ],
        category: "Kecantikan",
        rating: 4.6,
        sold: 8900,
        location: "Jakarta Selatan",
        description: "Set skincare lengkap untuk kulit glowing. Terdiri dari cleanser, toner, serum, dan moisturizer.",
        stock: 150,
        isFlashSale: false
    },
    {
        id: 8,
        name: "Lipstick Matte Collection",
        price: 129000,
        originalPrice: 179000,
        discount: 28,
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop"
        ],
        category: "Kecantikan",
        rating: 4.7,
        sold: 12500,
        location: "Bandung",
        description: "Lipstick matte dengan formula long-lasting dan moisturizing. Tersedia dalam 12 pilihan warna.",
        stock: 300,
        isFlashSale: true
    },
    {
        id: 9,
        name: "Kursi Gaming RGB Pro",
        price: 2899000,
        originalPrice: 3999000,
        discount: 28,
        image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1616626625495-cd0ca8e4fd43?w=600&h=600&fit=crop"
        ],
        category: "Furniture",
        rating: 4.5,
        sold: 670,
        location: "Tangerang",
        description: "Kursi gaming ergonomis dengan RGB lighting dan lumbar support. Nyaman untuk gaming marathon.",
        stock: 30,
        isFlashSale: false
    },
    {
        id: 10,
        name: "Meja Kerja Minimalis",
        price: 1599000,
        originalPrice: 2199000,
        discount: 27,
        image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop"
        ],
        category: "Furniture",
        rating: 4.6,
        sold: 1230,
        location: "Bekasi",
        description: "Meja kerja minimalis dengan desain modern. Dilengkapi cable management dan drawer.",
        stock: 40,
        isFlashSale: false
    },
    {
        id: 11,
        name: "Protein Whey Premium 2kg",
        price: 899000,
        originalPrice: 1199000,
        discount: 25,
        image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&h=600&fit=crop"
        ],
        category: "Olahraga",
        rating: 4.8,
        sold: 3450,
        location: "Jakarta Utara",
        description: "Whey protein premium dengan 24g protein per serving. Rasa chocolate yang lezat.",
        stock: 80,
        isFlashSale: true
    },
    {
        id: 12,
        name: "Dumbbell Set 20kg",
        price: 1299000,
        originalPrice: 1599000,
        discount: 19,
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop"
        ],
        category: "Olahraga",
        rating: 4.7,
        sold: 890,
        location: "Depok",
        description: "Set dumbbell adjustable 20kg dengan coating anti-slip. Cocok untuk home gym.",
        stock: 60,
        isFlashSale: false
    },
    {
        id: 13,
        name: "Tas Ransel Anti Air",
        price: 349000,
        originalPrice: 499000,
        discount: 30,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&h=600&fit=crop"
        ],
        category: "Fashion",
        rating: 4.6,
        sold: 4560,
        location: "Semarang",
        description: "Tas ransel dengan bahan waterproof dan slot laptop 15.6 inch. Desain minimalis dan fungsional.",
        stock: 120,
        isFlashSale: true
    },
    {
        id: 14,
        name: "Smart Watch Fitness Pro",
        price: 1899000,
        originalPrice: 2499000,
        discount: 24,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&h=600&fit=crop"
        ],
        category: "Elektronik",
        rating: 4.5,
        sold: 2100,
        location: "Medan",
        description: "Smartwatch dengan fitur fitness tracking lengkap, heart rate monitor, dan GPS built-in.",
        stock: 55,
        isFlashSale: false
    },
    {
        id: 15,
        name: "Set Alat Masak Premium",
        price: 2499000,
        originalPrice: 3299000,
        discount: 24,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop"
        ],
        category: "Rumah Tangga",
        rating: 4.8,
        sold: 780,
        location: "Surabaya",
        description: "Set alat masak premium 10 pcs dengan bahan stainless steel dan coating non-stick.",
        stock: 25,
        isFlashSale: false
    },
    {
        id: 16,
        name: "Robot Vacuum Cleaner",
        price: 3299000,
        originalPrice: 4499000,
        discount: 27,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop"
        ],
        category: "Rumah Tangga",
        rating: 4.6,
        sold: 560,
        location: "Jakarta Timur",
        description: "Robot vacuum cleaner dengan mapping technology dan app control. Bersihkan rumah otomatis.",
        stock: 20,
        isFlashSale: true
    }
];

// Categories
const categories = [
    { name: "Semua", icon: "fa-th-large" },
    { name: "Elektronik", icon: "fa-laptop" },
    { name: "Fashion", icon: "fa-tshirt" },
    { name: "Kecantikan", icon: "fa-spa" },
    { name: "Furniture", icon: "fa-couch" },
    { name: "Olahraga", icon: "fa-dumbbell" },
    { name: "Rumah Tangga", icon: "fa-home" }
];

// State
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let selectedCategory = "Semua";
let searchQuery = "";
let sortBy = "default";

// DOM Elements
const categoriesContainer = document.getElementById('categoriesContainer');
const flashSaleContainer = document.getElementById('flashSaleContainer');
const productsContainer = document.getElementById('productsContainer');
const productModal = document.getElementById('productModal');
const modalContent = document.getElementById('modalContent');
const cartSidebar = document.getElementById('cartSidebar');
const cartPanel = document.getElementById('cartPanel');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const toast = document.getElementById('toast');

// Format price
function formatPrice(price) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}

// Format number (for sold count)
function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'rb';
    }
    return num.toString();
}

// Show toast notification
function showToast(message) {
    const toastMessage = document.getElementById('toastMessage');
    toastMessage.textContent = message;
    toast.classList.add('toast-show');
    setTimeout(() => {
        toast.classList.remove('toast-show');
    }, 2500);
}

// Render categories
function renderCategories() {
    categoriesContainer.innerHTML = categories.map(cat => `
        <button class="category-btn flex items-center gap-2 px-5 py-3 border border-gray-200 rounded-xl whitespace-nowrap ${selectedCategory === cat.name ? 'active' : 'bg-white hover:border-primary'}" 
                onclick="filterByCategory('${cat.name}')">
            <i class="fas ${cat.icon} ${selectedCategory === cat.name ? 'text-white' : 'text-primary'}"></i>
            <span class="font-medium">${cat.name}</span>
        </button>
    `).join('');
}

// Create product card HTML
function createProductCard(product) {
    return `
        <div class="product-card bg-white rounded-xl overflow-hidden shadow-sm cursor-pointer border border-gray-100" onclick="openProductModal(${product.id})">
            <div class="relative overflow-hidden aspect-square">
                <img src="${product.image}" alt="${product.name}" class="product-image w-full h-full object-cover">
                ${product.discount ? `<span class="discount-badge absolute top-2 left-2 px-2 py-1 text-white text-xs font-semibold rounded">${product.discount}%</span>` : ''}
                <button class="add-cart-btn absolute bottom-2 right-2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-dark transition-colors"
                        onclick="event.stopPropagation(); addToCart(${product.id})">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
            <div class="p-3">
                <h3 class="text-sm font-medium text-gray-800 line-clamp-2 mb-2 min-h-[40px]">${product.name}</h3>
                <p class="text-primary font-bold mb-1">${formatPrice(product.price)}</p>
                ${product.originalPrice ? `<p class="text-xs text-gray-400 line-through">${formatPrice(product.originalPrice)}</p>` : ''}
                <div class="flex items-center gap-2 mt-2 text-xs text-gray-500">
                    <div class="flex items-center gap-1">
                        <i class="fas fa-star text-yellow-400"></i>
                        <span>${product.rating}</span>
                    </div>
                    <span class="text-gray-300">|</span>
                    <span>Terjual ${formatNumber(product.sold)}</span>
                </div>
                <p class="text-xs text-gray-400 mt-1 flex items-center gap-1">
                    <i class="fas fa-map-marker-alt"></i>
                    ${product.location}
                </p>
            </div>
        </div>
    `;
}

// Render flash sale products
function renderFlashSale() {
    const flashSaleProducts = products.filter(p => p.isFlashSale);
    flashSaleContainer.innerHTML = flashSaleProducts.map(product => createProductCard(product)).join('');
}

// Render products with filter and sort
function renderProducts() {
    let filteredProducts = [...products];

    // Filter by category
    if (selectedCategory !== "Semua") {
        filteredProducts = filteredProducts.filter(p => p.category === selectedCategory);
    }

    // Filter by search
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredProducts = filteredProducts.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.category.toLowerCase().includes(query)
        );
    }

    // Sort
    switch (sortBy) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
    }

    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = `
            <div class="col-span-full flex flex-col items-center justify-center py-12 text-gray-400">
                <i class="fas fa-search text-5xl mb-4"></i>
                <p class="text-lg font-medium">Produk tidak ditemukan</p>
                <p class="text-sm">Coba kata kunci lain atau ubah filter</p>
            </div>
        `;
    } else {
        productsContainer.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    }
}

// Filter by category
function filterByCategory(category) {
    selectedCategory = category;
    renderCategories();
    renderProducts();
}

// Open product modal
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    modalContent.innerHTML = `
        <div class="grid md:grid-cols-2 gap-6 p-6">
            <!-- Image Gallery -->
            <div>
                <div class="aspect-square rounded-xl overflow-hidden mb-4 bg-gray-100">
                    <img id="mainImage" src="${product.images[0]}" alt="${product.name}" class="w-full h-full object-cover">
                </div>
                <div class="flex gap-2 overflow-x-auto pb-2">
                    ${product.images.map((img, idx) => `
                        <button class="gallery-thumb w-20 h-20 rounded-lg overflow-hidden shrink-0 ${idx === 0 ? 'active' : ''}" 
                                onclick="changeMainImage('${img}', this)">
                            <img src="${img}" alt="Thumbnail" class="w-full h-full object-cover">
                        </button>
                    `).join('')}
                </div>
            </div>

            <!-- Product Info -->
            <div class="flex flex-col">
                <h1 class="text-2xl font-bold text-gray-900 mb-2">${product.name}</h1>
                
                <div class="flex items-center gap-3 mb-4">
                    <div class="flex items-center gap-1 text-yellow-400">
                        <i class="fas fa-star"></i>
                        <span class="text-gray-800 font-medium">${product.rating}</span>
                    </div>
                    <span class="text-gray-300">|</span>
                    <span class="text-gray-500">Terjual ${formatNumber(product.sold)}</span>
                    <span class="text-gray-300">|</span>
                    <span class="text-gray-500">${product.category}</span>
                </div>

                <div class="bg-gray-50 rounded-xl p-4 mb-4">
                    <div class="flex items-baseline gap-3">
                        <span class="text-3xl font-bold text-primary">${formatPrice(product.price)}</span>
                        ${product.originalPrice ? `
                            <span class="text-lg text-gray-400 line-through">${formatPrice(product.originalPrice)}</span>
                            <span class="px-2 py-1 bg-red-100 text-red-600 text-sm font-semibold rounded">${product.discount}% OFF</span>
                        ` : ''}
                    </div>
                </div>

                <div class="mb-4">
                    <h3 class="font-semibold text-gray-900 mb-2">Deskripsi</h3>
                    <p class="text-gray-600 leading-relaxed">${product.description}</p>
                </div>

                <div class="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <i class="fas fa-map-marker-alt text-primary"></i>
                    <span>Dikirim dari ${product.location}</span>
                </div>

                <div class="flex items-center gap-2 text-sm mb-6">
                    <span class="text-gray-500">Stok:</span>
                    <span class="font-semibold ${product.stock < 20 ? 'text-red-500' : 'text-green-600'}">${product.stock} tersisa</span>
                </div>

                <!-- Quantity Selector -->
                <div class="flex items-center gap-4 mb-6">
                    <span class="text-gray-600">Jumlah:</span>
                    <div class="flex items-center border border-gray-200 rounded-lg">
                        <button class="qty-btn w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-l-lg" onclick="decreaseModalQty()">
                            <i class="fas fa-minus text-sm"></i>
                        </button>
                        <input type="number" id="modalQty" value="1" min="1" max="${product.stock}" 
                               class="w-16 h-10 text-center border-x border-gray-200 focus:outline-none">
                        <button class="qty-btn w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-r-lg" onclick="increaseModalQty(${product.stock})">
                            <i class="fas fa-plus text-sm"></i>
                        </button>
                    </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex gap-3 mt-auto">
                    <button onclick="addToCartFromModal(${product.id})" 
                            class="flex-1 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-colors">
                        <i class="fas fa-cart-plus mr-2"></i>
                        Keranjang
                    </button>
                    <button onclick="buyNow(${product.id})" 
                            class="flex-1 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors">
                        Beli Sekarang
                    </button>
                </div>
            </div>
        </div>
    `;

    productModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Change main image in modal
function changeMainImage(src, btn) {
    document.getElementById('mainImage').src = src;
    document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
}

// Modal quantity controls
function decreaseModalQty() {
    const input = document.getElementById('modalQty');
    if (input.value > 1) input.value = parseInt(input.value) - 1;
}

function increaseModalQty(max) {
    const input = document.getElementById('modalQty');
    if (parseInt(input.value) < max) input.value = parseInt(input.value) + 1;
}

// Close modal
function closeModal() {
    productModal.classList.add('hidden');
    document.body.style.overflow = '';
}

// Add to cart
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    saveCart();
    updateCartUI();
    showToast(`${product.name} ditambahkan ke keranjang`);
}

// Add to cart from modal
function addToCartFromModal(productId) {
    const qty = parseInt(document.getElementById('modalQty').value);
    addToCart(productId, qty);
    closeModal();
}

// Buy now
function buyNow(productId) {
    const qty = parseInt(document.getElementById('modalQty').value);
    addToCart(productId, qty);
    closeModal();
    openCart();
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Update cart UI
function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Update cart count badge
    if (totalItems > 0) {
        cartCount.textContent = totalItems > 99 ? '99+' : totalItems;
        cartCount.classList.remove('hidden');
    } else {
        cartCount.classList.add('hidden');
    }

    // Update cart total
    cartTotal.textContent = formatPrice(totalPrice);

    // Update checkout button
    document.getElementById('checkoutBtn').disabled = cart.length === 0;

    // Render cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart h-full">
                <i class="fas fa-shopping-cart text-6xl mb-4"></i>
                <p class="text-lg font-medium">Keranjang kosong</p>
                <p class="text-sm">Yuk, mulai belanja!</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item flex gap-4 p-4 bg-gray-50 rounded-xl mb-3">
                <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-lg">
                <div class="flex-1 min-w-0">
                    <h4 class="font-medium text-gray-800 text-sm line-clamp-2">${item.name}</h4>
                    <p class="text-primary font-bold mt-1">${formatPrice(item.price)}</p>
                    <div class="flex items-center justify-between mt-2">
                        <div class="flex items-center border border-gray-200 rounded-lg bg-white">
                            <button class="qty-btn w-8 h-8 flex items-center justify-center text-gray-600 rounded-l-lg" 
                                    onclick="updateCartItemQty(${item.id}, -1)" ${item.quantity <= 1 ? 'disabled' : ''}>
                                <i class="fas fa-minus text-xs"></i>
                            </button>
                            <span class="w-8 text-center text-sm font-medium">${item.quantity}</span>
                            <button class="qty-btn w-8 h-8 flex items-center justify-center text-gray-600 rounded-r-lg" 
                                    onclick="updateCartItemQty(${item.id}, 1)">
                                <i class="fas fa-plus text-xs"></i>
                            </button>
                        </div>
                        <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-600 p-2">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Update cart item quantity
function updateCartItemQty(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;
    if (item.quantity < 1) item.quantity = 1;

    saveCart();
    updateCartUI();
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    showToast('Produk dihapus dari keranjang');
}

// Open cart sidebar
function openCart() {
    cartSidebar.classList.remove('hidden');
    setTimeout(() => {
        cartPanel.classList.remove('translate-x-full');
    }, 10);
    document.body.style.overflow = 'hidden';
}

// Close cart sidebar
function closeCart() {
    cartPanel.classList.add('translate-x-full');
    setTimeout(() => {
        cartSidebar.classList.add('hidden');
    }, 300);
    document.body.style.overflow = '';
}

// Checkout
function checkout() {
    if (cart.length === 0) return;
    showToast('Fitur checkout akan segera hadir!');
}

// Countdown timer for flash sale
function startCountdown() {
    let hours = 8, minutes = 45, seconds = 30;
    
    setInterval(() => {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
            if (minutes < 0) {
                minutes = 59;
                hours--;
                if (hours < 0) {
                    hours = 23;
                }
            }
        }
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }, 1000);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderFlashSale();
    renderProducts();
    updateCartUI();
    startCountdown();
});

// Search input
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderProducts();
});

// Sort select
sortSelect.addEventListener('change', (e) => {
    sortBy = e.target.value;
    renderProducts();
});

// Cart button
document.getElementById('cartBtn').addEventListener('click', openCart);

// Close cart
document.getElementById('closeCart').addEventListener('click', closeCart);
document.getElementById('cartOverlay').addEventListener('click', closeCart);

// Close modal
document.getElementById('closeModal').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', closeModal);

// Checkout button
document.getElementById('checkoutBtn').addEventListener('click', checkout);

// Keyboard events
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (!productModal.classList.contains('hidden')) closeModal();
        if (!cartSidebar.classList.contains('hidden')) closeCart();
    }
});

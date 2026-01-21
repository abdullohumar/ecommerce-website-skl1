// Product Data
const products = [
  {
    id: 1,
    name: "Smart Watch Pro Max",
    price: 1499000,
    originalPrice: 2999000,
    discount: 50,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    category: "elektronik",
    rating: 4.8,
    sold: 1250,
    location: "Jakarta Selatan",
    store: "TechStore ID",
    badge: "bestseller",
    stock: 45,
    description: "Smart Watch Pro Max dengan fitur lengkap untuk kesehatan dan kebugaran. Dilengkapi monitor detak jantung, GPS, dan tahan air hingga 50 meter.",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800",
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800"
    ],
    specifications: {
      "Ukuran Layar": "1.9 inch AMOLED",
      "Baterai": "450mAh (7 hari)",
      "Konektivitas": "Bluetooth 5.0, WiFi",
      "Tahan Air": "5 ATM / 50 meter",
      "Sensor": "Heart Rate, SpO2, GPS",
      "Kompatibilitas": "iOS & Android"
    }
  },
  {
    id: 2,
    name: "Serum Vitamin C Brightening",
    price: 89000,
    originalPrice: 150000,
    discount: 40,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400",
    category: "kecantikan",
    rating: 4.9,
    sold: 5420,
    location: "Bandung",
    store: "BeautyQueen",
    badge: "bestseller",
    stock: 234,
    description: "Serum Vitamin C 20% untuk mencerahkan kulit wajah. Mengurangi noda hitam dan membuat kulit tampak lebih bercahaya.",
    images: [
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800"
    ],
    specifications: {
      "Volume": "30ml",
      "Kandungan": "Vitamin C 20%, Niacinamide",
      "Jenis Kulit": "Semua jenis kulit",
      "Manfaat": "Mencerahkan, Anti-aging",
      "BPOM": "NA18201200XXX"
    }
  },
  {
    id: 3,
    name: "Wireless Headphone Bass",
    price: 325000,
    originalPrice: 500000,
    discount: 35,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    category: "elektronik",
    rating: 4.7,
    sold: 890,
    location: "Jakarta Barat",
    store: "GadgetWorld",
    badge: "new",
    stock: 67,
    description: "Headphone wireless dengan bass yang powerful dan noise cancelling aktif. Baterai tahan hingga 40 jam.",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800"
    ],
    specifications: {
      "Driver": "40mm Dynamic",
      "Baterai": "40 jam",
      "Konektivitas": "Bluetooth 5.2, AUX",
      "Fitur": "ANC, Transparency Mode",
      "Berat": "250g"
    }
  },
  {
    id: 4,
    name: "Sneakers Running Ultra",
    price: 549000,
    originalPrice: 999000,
    discount: 45,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    category: "fashion",
    rating: 4.8,
    sold: 2340,
    location: "Surabaya",
    store: "SportZone",
    badge: "sale",
    stock: 89,
    description: "Sepatu lari ultra ringan dengan teknologi cushioning terbaik. Cocok untuk pelari profesional maupun pemula.",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800"
    ],
    specifications: {
      "Material": "Mesh breathable",
      "Sol": "EVA foam + rubber",
      "Berat": "220g",
      "Ukuran": "39-45",
      "Warna": "Merah, Hitam, Putih"
    }
  },
  {
    id: 5,
    name: "Kamera Mirrorless 4K",
    price: 8500000,
    originalPrice: 12000000,
    discount: 30,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400",
    category: "elektronik",
    rating: 4.9,
    sold: 156,
    location: "Jakarta Pusat",
    store: "CameraHub",
    badge: "official",
    stock: 12,
    description: "Kamera mirrorless profesional dengan kemampuan rekam video 4K 60fps dan sensor APS-C 24MP.",
    images: [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800"
    ],
    specifications: {
      "Sensor": "APS-C 24.2MP",
      "Video": "4K 60fps, Full HD 120fps",
      "ISO": "100-51200",
      "Layar": "3 inch Touchscreen",
      "Konektivitas": "WiFi, Bluetooth"
    }
  },
  {
    id: 6,
    name: "Backpack Anti Maling",
    price: 187000,
    originalPrice: 250000,
    discount: 25,
    image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400",
    category: "fashion",
    rating: 4.6,
    sold: 3450,
    location: "Yogyakarta",
    store: "BagStore",
    badge: null,
    stock: 178,
    description: "Tas punggung anti maling dengan resleting tersembunyi dan port USB untuk charging. Kapasitas laptop hingga 15.6 inch.",
    images: [
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
      "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=800"
    ],
    specifications: {
      "Material": "Polyester waterproof",
      "Kapasitas": "25L",
      "Laptop": "Hingga 15.6 inch",
      "Fitur": "USB port, hidden zipper",
      "Dimensi": "45x30x15 cm"
    }
  },
  {
    id: 7,
    name: "Blender Portable USB",
    price: 125000,
    originalPrice: 200000,
    discount: 37,
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400",
    category: "rumah",
    rating: 4.5,
    sold: 4560,
    location: "Semarang",
    store: "HomeLiving",
    badge: "bestseller",
    stock: 234,
    description: "Blender portable dengan baterai rechargeable USB. Cocok untuk membuat jus, smoothie, dan minuman sehat lainnya.",
    images: [
      "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=800",
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=800"
    ],
    specifications: {
      "Kapasitas": "380ml",
      "Baterai": "2000mAh",
      "Kecepatan": "22000 RPM",
      "Material": "BPA-free plastic",
      "Charging": "USB Type-C"
    }
  },
  {
    id: 8,
    name: "Kemeja Batik Premium",
    price: 289000,
    originalPrice: 450000,
    discount: 36,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400",
    category: "fashion",
    rating: 4.8,
    sold: 1890,
    location: "Solo",
    store: "BatikNusantara",
    badge: "official",
    stock: 56,
    description: "Kemeja batik tulis premium dengan motif khas Solo. Bahan katun premium yang nyaman dipakai seharian.",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800"
    ],
    specifications: {
      "Material": "Katun premium",
      "Motif": "Batik tulis Solo",
      "Ukuran": "S, M, L, XL, XXL",
      "Warna": "Cokelat, Biru, Hitam",
      "Perawatan": "Cuci tangan"
    }
  },
  {
    id: 9,
    name: "Madu Hutan Asli 500ml",
    price: 85000,
    originalPrice: 120000,
    discount: 29,
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400",
    category: "makanan",
    rating: 4.9,
    sold: 8900,
    location: "Kalimantan",
    store: "MaduNusantara",
    badge: "bestseller",
    stock: 567,
    description: "Madu hutan asli dari lebah liar Kalimantan. 100% murni tanpa campuran, kaya akan antioksidan.",
    images: [
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800",
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800"
    ],
    specifications: {
      "Isi": "500ml",
      "Asal": "Hutan Kalimantan",
      "Kemurnian": "100% murni",
      "Sertifikasi": "BPOM, Halal MUI",
      "Expired": "2 tahun"
    }
  },
  {
    id: 10,
    name: "Vitamin D3 1000IU",
    price: 75000,
    originalPrice: 95000,
    discount: 21,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    category: "kesehatan",
    rating: 4.7,
    sold: 6780,
    location: "Jakarta",
    store: "HealthyLife",
    badge: null,
    stock: 890,
    description: "Suplemen Vitamin D3 1000IU untuk menjaga kesehatan tulang dan meningkatkan sistem imun tubuh.",
    images: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800",
      "https://images.unsplash.com/photo-1550572017-edd951b55104?w=800"
    ],
    specifications: {
      "Isi": "60 softgel",
      "Dosis": "1000 IU per softgel",
      "Manfaat": "Tulang, Imunitas",
      "BPOM": "SI123456789",
      "Anjuran": "1x sehari"
    }
  },
  {
    id: 11,
    name: "Kursi Gaming RGB",
    price: 1850000,
    originalPrice: 2500000,
    discount: 26,
    image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400",
    category: "rumah",
    rating: 4.6,
    sold: 345,
    location: "Jakarta Timur",
    store: "GamingZone",
    badge: "new",
    stock: 23,
    description: "Kursi gaming ergonomis dengan lampu RGB dan bantalan memory foam. Dilengkapi sandaran kepala dan lumbar pillow.",
    images: [
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800",
      "https://images.unsplash.com/photo-1596079890744-c1a0462d0975?w=800"
    ],
    specifications: {
      "Material": "PU Leather premium",
      "Kapasitas": "150kg",
      "Fitur": "RGB LED, reclining 180°",
      "Bantalan": "Memory foam",
      "Garansi": "2 tahun"
    }
  },
  {
    id: 12,
    name: "iPhone 15 Pro Max 256GB",
    price: 21500000,
    originalPrice: 24000000,
    discount: 10,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400",
    category: "elektronik",
    rating: 4.9,
    sold: 567,
    location: "Jakarta Selatan",
    store: "AppleStore ID",
    badge: "official",
    stock: 34,
    description: "iPhone 15 Pro Max dengan chip A17 Pro, kamera 48MP, dan bodi titanium premium.",
    images: [
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800"
    ],
    specifications: {
      "Layar": "6.7 inch Super Retina XDR",
      "Chip": "A17 Pro",
      "Storage": "256GB",
      "Kamera": "48MP + 12MP + 12MP",
      "Baterai": "4422mAh"
    }
  },
  {
    id: 13,
    name: "Dress Casual Wanita",
    price: 175000,
    originalPrice: 299000,
    discount: 41,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
    category: "fashion-wanita",
    rating: 4.7,
    sold: 2340,
    location: "Bandung",
    store: "FashionHub",
    badge: "sale",
    stock: 145,
    description: "Dress casual dengan desain elegan dan bahan adem. Cocok untuk hangout atau ke kantor.",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800"
    ],
    specifications: {
      "Material": "Cotton blend",
      "Ukuran": "S, M, L, XL",
      "Warna": "Navy, Cream, Black",
      "Perawatan": "Machine washable"
    }
  },
  {
    id: 14,
    name: "Air Fryer Digital 5L",
    price: 650000,
    originalPrice: 899000,
    discount: 28,
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400",
    category: "rumah",
    rating: 4.8,
    sold: 1234,
    location: "Surabaya",
    store: "HomeLiving",
    badge: "bestseller",
    stock: 67,
    description: "Air fryer digital dengan kapasitas 5L dan 8 preset menu. Memasak tanpa minyak lebih sehat.",
    images: [
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800",
      "https://images.unsplash.com/photo-1585515320310-259814833e62?w=800"
    ],
    specifications: {
      "Kapasitas": "5 Liter",
      "Daya": "1400W",
      "Suhu": "80-200°C",
      "Timer": "60 menit",
      "Fitur": "8 preset, digital display"
    }
  },
  {
    id: 15,
    name: "Protein Whey 2kg",
    price: 485000,
    originalPrice: 650000,
    discount: 25,
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400",
    category: "kesehatan",
    rating: 4.8,
    sold: 3456,
    location: "Jakarta",
    store: "FitStore",
    badge: null,
    stock: 234,
    description: "Whey protein isolate dengan 25g protein per serving. Ideal untuk pembentukan otot dan recovery.",
    images: [
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=800",
      "https://images.unsplash.com/photo-1579722820903-a7be47f953c3?w=800"
    ],
    specifications: {
      "Berat": "2kg (66 servings)",
      "Protein": "25g per serving",
      "Kalori": "120 per serving",
      "Rasa": "Vanilla, Chocolate, Strawberry",
      "BPOM": "SI987654321"
    }
  },
  {
    id: 16,
    name: "Keyboard Mechanical RGB",
    price: 450000,
    originalPrice: 699000,
    discount: 36,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=400",
    category: "elektronik",
    rating: 4.7,
    sold: 890,
    location: "Jakarta Barat",
    store: "GadgetWorld",
    badge: "new",
    stock: 56,
    description: "Keyboard mechanical dengan switch Cherry MX dan backlight RGB. Hot-swappable untuk kustomisasi.",
    images: [
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800"
    ],
    specifications: {
      "Switch": "Cherry MX (Red/Blue/Brown)",
      "Layout": "TKL 87 keys",
      "Konektivitas": "USB-C, Wireless",
      "Backlight": "RGB per-key",
      "Material": "Aluminum frame"
    }
  },
  {
    id: 17,
    name: "Jaket Denim Vintage",
    price: 275000,
    originalPrice: 400000,
    discount: 31,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400",
    category: "fashion-pria",
    rating: 4.6,
    sold: 1567,
    location: "Bandung",
    store: "DenimHouse",
    badge: null,
    stock: 89,
    description: "Jaket denim dengan wash vintage dan detail bordir. Look klasik yang tidak pernah ketinggalan zaman.",
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800"
    ],
    specifications: {
      "Material": "100% Cotton denim",
      "Ukuran": "S, M, L, XL, XXL",
      "Warna": "Blue wash, Black",
      "Perawatan": "Machine wash cold"
    }
  },
  {
    id: 18,
    name: "Kopi Arabica Toraja 500g",
    price: 125000,
    originalPrice: 175000,
    discount: 29,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400",
    category: "makanan",
    rating: 4.9,
    sold: 4567,
    location: "Sulawesi",
    store: "KopiNusantara",
    badge: "bestseller",
    stock: 345,
    description: "Biji kopi Arabica premium dari dataran tinggi Toraja. Medium roast dengan aroma fruity dan body yang seimbang.",
    images: [
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800"
    ],
    specifications: {
      "Berat": "500g",
      "Origin": "Toraja, Sulawesi",
      "Roast": "Medium",
      "Proses": "Wet hulled",
      "Flavor": "Fruity, chocolate, spicy"
    }
  },
  {
    id: 19,
    name: "Sunscreen SPF 50+ PA++++",
    price: 135000,
    originalPrice: 189000,
    discount: 29,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400",
    category: "kecantikan",
    rating: 4.8,
    sold: 7890,
    location: "Jakarta",
    store: "SkincareLab",
    badge: "bestseller",
    stock: 456,
    description: "Sunscreen dengan perlindungan tinggi SPF 50+ PA++++. Ringan, tidak lengket, cocok untuk daily use.",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800"
    ],
    specifications: {
      "Volume": "50ml",
      "SPF": "50+ PA++++",
      "Tekstur": "Gel-cream",
      "Jenis Kulit": "Semua jenis",
      "BPOM": "NA18211200XXX"
    }
  },
  {
    id: 20,
    name: "Mouse Gaming Wireless",
    price: 289000,
    originalPrice: 450000,
    discount: 36,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
    category: "elektronik",
    rating: 4.7,
    sold: 2345,
    location: "Jakarta",
    store: "GamingZone",
    badge: "sale",
    stock: 123,
    description: "Mouse gaming wireless dengan sensor 16000 DPI dan RGB lighting. Baterai tahan hingga 70 jam.",
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800",
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800"
    ],
    specifications: {
      "Sensor": "16000 DPI optical",
      "Baterai": "70 jam",
      "Tombol": "6 programmable",
      "Konektivitas": "2.4GHz wireless, USB",
      "Berat": "95g"
    }
  }
];

// Categories
const categories = [
  { id: "elektronik", name: "Elektronik", icon: "smartphone", count: 2500 },
  { id: "fashion-pria", name: "Fashion Pria", icon: "user", count: 3200 },
  { id: "fashion-wanita", name: "Fashion Wanita", icon: "user", count: 4100 },
  { id: "kesehatan", name: "Kesehatan", icon: "heart", count: 1200 },
  { id: "kecantikan", name: "Kecantikan", icon: "sparkles", count: 2000 },
  { id: "makanan", name: "Makanan & Minuman", icon: "coffee", count: 3000 },
  { id: "rumah", name: "Rumah Tangga", icon: "home", count: 1800 },
  { id: "olahraga", name: "Olahraga", icon: "activity", count: 900 },
  { id: "otomotif", name: "Otomotif", icon: "zap", count: 750 },
  { id: "hobi", name: "Hobi & Koleksi", icon: "grid", count: 1100 }
];

// Flash Sale Products
const flashSaleProducts = products.filter(p => p.discount >= 30).slice(0, 6);

// Reviews
const reviews = [
  {
    id: 1,
    productId: 1,
    user: "Budi Santoso",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    rating: 5,
    date: "2025-01-15",
    comment: "Produk sangat bagus, sesuai deskripsi. Pengiriman cepat dan packing aman. Recommended seller!",
    images: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200"]
  },
  {
    id: 2,
    productId: 1,
    user: "Siti Rahayu",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    rating: 4,
    date: "2025-01-14",
    comment: "Kualitas oke, baterai awet. Cuma box agak penyok sedikit, tapi produknya baik-baik aja.",
    images: []
  },
  {
    id: 3,
    productId: 1,
    user: "Ahmad Fadli",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
    rating: 5,
    date: "2025-01-12",
    comment: "Mantap! Fitur lengkap dengan harga terjangkau. Worth it banget!",
    images: ["https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=200", "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=200"]
  }
];

// Format currency
function formatPrice(price) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
}

// Format number
function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'rb';
  }
  return num.toString();
}

// Get product by ID
function getProductById(id) {
  return products.find(p => p.id === parseInt(id));
}

// Get products by category
function getProductsByCategory(category) {
  if (!category || category === 'all') return products;
  return products.filter(p => p.category === category || p.category.includes(category));
}

// Search products
function searchProducts(query) {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(lowercaseQuery) ||
    p.category.toLowerCase().includes(lowercaseQuery) ||
    p.store.toLowerCase().includes(lowercaseQuery) ||
    p.description.toLowerCase().includes(lowercaseQuery)
  );
}

// Sort products
function sortProducts(products, sortBy) {
  const sorted = [...products];
  switch (sortBy) {
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price);
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'sold':
      return sorted.sort((a, b) => b.sold - a.sold);
    case 'newest':
      return sorted.sort((a, b) => b.id - a.id);
    default:
      return sorted;
  }
}

// Filter products by price range
function filterByPriceRange(products, minPrice, maxPrice) {
  return products.filter(p => p.price >= minPrice && p.price <= maxPrice);
}

// Get reviews for product
function getReviewsByProductId(productId) {
  return reviews.filter(r => r.productId === parseInt(productId));
}

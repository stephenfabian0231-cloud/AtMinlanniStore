// AtMinlannistore - Complete Application Logic

// ==================== DATA ====================
const categories = [
    { id: 'produce', name: 'Fresh Produce', icon: 'fa-carrot' },
    { id: 'meat', name: 'Meat & Seafood', icon: 'fa-drumstick-bite' },
    { id: 'bakery', name: 'Bakery', icon: 'fa-bread-slice' },
    { id: 'dairy', name: 'Dairy & Eggs', icon: 'fa-egg' },
    { id: 'pantry', name: 'Pantry', icon: 'fa-jar' },
    { id: 'beverages', name: 'Beverages', icon: 'fa-wine-bottle' },
    { id: 'frozen', name: 'Frozen', icon: 'fa-snowflake' },
    { id: 'snacks', name: 'Snacks', icon: 'fa-cookie-bite' },
    { id: 'household', name: 'Home Care', icon: 'fa-pump-soap' },
    { id: 'personal-care', name: 'Personal Care', icon: 'fa-soap' },
    { id: 'baby', name: 'Baby Care', icon: 'fa-baby' },
    { id: 'electronics', name: 'Electronics', icon: 'fa-plug' }
];

const products = [
    {
        id: 1,
        name: 'Organic Bananas Bunch',
        category: 'produce',
        price: 2.99,
        originalPrice: 3.99,
        rating: 4.8,
        reviews: 234,
        image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400',
        badges: ['sale', 'organic'],
        description: 'Premium organic bananas sourced from sustainable farms. Perfectly ripened and packed with potassium.'
    },
    {
        id: 2,
        name: 'Fresh Atlantic Salmon',
        category: 'meat',
        price: 14.99,
        originalPrice: 18.99,
        rating: 4.9,
        reviews: 189,
        image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=400',
        badges: ['sale', 'new'],
        description: 'Wild-caught Atlantic salmon, rich in Omega-3 fatty acids. Fresh never frozen.'
    },
    {
        id: 3,
        name: 'Sourdough Bread Loaf',
        category: 'bakery',
        price: 5.49,
        originalPrice: null,
        rating: 4.7,
        reviews: 312,
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400',
        badges: ['new'],
        description: 'Artisan sourdough baked fresh daily using traditional fermentation methods.'
    },
    {
        id: 4,
        name: 'Free-Range Eggs (12ct)',
        category: 'dairy',
        price: 6.99,
        originalPrice: 8.49,
        rating: 4.6,
        reviews: 567,
        image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400',
        badges: ['sale', 'organic'],
        description: 'Farm-fresh free-range eggs from pasture-raised hens. Rich, golden yolks.'
    },
    {
        id: 5,
        name: 'Extra Virgin Olive Oil',
        category: 'pantry',
        price: 12.99,
        originalPrice: null,
        rating: 4.8,
        reviews: 445,
        image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400',
        badges: [],
        description: 'Cold-pressed extra virgin olive oil from Italian groves. Perfect for cooking and dressings.'
    },
    {
        id: 6,
        name: 'Sparkling Water (Pack)',
        category: 'beverages',
        price: 8.99,
        originalPrice: 10.99,
        rating: 4.5,
        reviews: 123,
        image: 'https://images.unsplash.com/photo-1560023907-5f339617ea30?w=400',
        badges: ['sale'],
        description: 'Refreshing sparkling water with natural flavors. Zero calories, zero sugar.'
    },
    {
        id: 7,
        name: 'Organic Spinach Pack',
        category: 'produce',
        price: 3.99,
        originalPrice: null,
        rating: 4.4,
        reviews: 198,
        image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400',
        badges: ['organic'],
        description: 'Pre-washed organic baby spinach. Ready to use in salads, smoothies, or cooking.'
    },
    {
        id: 8,
        name: 'Grass-Fed Ground Beef',
        category: 'meat',
        price: 9.99,
        originalPrice: 11.99,
        rating: 4.7,
        reviews: 334,
        image: 'https://images.unsplash.com/photo-1607623814075-e51df1bd6562?w=400',
        badges: ['sale'],
        description: 'Premium 85% lean ground beef from grass-fed cattle. Perfect for burgers and tacos.'
    },
    {
        id: 9,
        name: 'Croissants (4 Pack)',
        category: 'bakery',
        price: 7.99,
        originalPrice: null,
        rating: 4.9,
        reviews: 256,
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400',
        badges: ['new'],
        description: 'Buttery, flaky French croissants baked fresh every morning. Authentic recipe.'
    },
    {
        id: 10,
        name: 'Greek Yogurt Tub',
        category: 'dairy',
        price: 4.99,
        originalPrice: 6.49,
        rating: 4.6,
        reviews: 412,
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400',
        badges: ['sale'],
        description: 'Thick, creamy Greek yogurt with live cultures. High protein, no added sugar.'
    },
    {
        id: 11,
        name: 'Artisan Pasta Pack',
        category: 'pantry',
        price: 3.49,
        originalPrice: null,
        rating: 4.5,
        reviews: 178,
        image: 'https://images.unsplash.com/photo-1551462147-37885acc36f1?w=400',
        badges: [],
        description: 'Bronze-cut Italian pasta made from durum wheat. Holds sauce perfectly.'
    },
    {
        id: 12,
        name: 'Cold Brew Coffee',
        category: 'beverages',
        price: 5.99,
        originalPrice: null,
        rating: 4.8,
        reviews: 289,
        image: 'https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?w=400',
        badges: ['new'],
        description: 'Smooth, bold cold brew coffee. Steeped for 18 hours for maximum flavor.'
    },
    {
        id: 13,
        name: 'Frozen Berry Mix',
        category: 'frozen',
        price: 7.49,
        originalPrice: 9.99,
        rating: 4.7,
        reviews: 156,
        image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=400',
        badges: ['sale', 'organic'],
        description: 'Antioxidant-rich blend of blueberries, strawberries, and raspberries.'
    },
    {
        id: 14,
        name: 'Gourmet Chocolate Bar',
        category: 'snacks',
        price: 3.99,
        originalPrice: null,
        rating: 4.9,
        reviews: 523,
        image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400',
        badges: ['new'],
        description: 'Single-origin dark chocolate with 70% cacao. Rich, complex flavor profile.'
    },
    {
        id: 15,
        name: 'Avocados (3 Pack)',
        category: 'produce',
        price: 4.99,
        originalPrice: 6.99,
        rating: 4.6,
        reviews: 678,
        image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400',
        badges: ['sale', 'organic'],
        description: 'Creamy Hass avocados at perfect ripeness. Great for toast, salads, or guacamole.'
    },
    {
        id: 16,
        name: 'Chicken Breast (2lb)',
        category: 'meat',
        price: 11.99,
        originalPrice: null,
        rating: 4.5,
        reviews: 445,
        image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400',
        badges: [],
        description: 'Boneless, skinless chicken breasts. Antibiotic-free, farm-raised.'
    },
    {
        id: 17,
        name: 'Dettol Antiseptic Liquid',
        category: 'household',
        price: 4.49,
        originalPrice: 5.49,
        rating: 4.8,
        reviews: 142,
        image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400',
        badges: ['sale'],
        description: 'Trusted antiseptic for everyday home cleaning and personal hygiene. 250ml bottle.'
    },
    {
        id: 18,
        name: 'Ariel Laundry Detergent',
        category: 'household',
        price: 4.49,
        originalPrice: null,
        rating: 4.7,
        reviews: 98,
        image: 'https://images.unsplash.com/photo-1585832770485-e68a5dbfad52?w=400',
        badges: ['new'],
        description: 'Powerful detergent for bright, fresh clothes in every wash. 1kg pack.'
    },
    {
        id: 19,
        name: 'Premium Toilet Tissue (12 Rolls)',
        category: 'household',
        price: 9.99,
        originalPrice: 11.49,
        rating: 4.6,
        reviews: 187,
        image: 'https://images.unsplash.com/photo-1584556812952-905ffd0c611a?w=400',
        badges: ['sale'],
        description: 'Soft, strong and absorbent tissue for your home.'
    },
    {
        id: 20,
        name: 'Coconut Hair Oil',
        category: 'personal-care',
        price: 6.99,
        originalPrice: null,
        rating: 4.8,
        reviews: 215,
        image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400',
        badges: ['organic'],
        description: 'Nourishing coconut oil for healthy hair and moisturised skin.'
    },
    {
        id: 21,
        name: 'Black Soap Body Wash',
        category: 'personal-care',
        price: 10.99,
        originalPrice: null,
        rating: 4.7,
        reviews: 164,
        image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400',
        badges: ['new'],
        description: 'Gentle African black soap body wash for a clean, refreshed feel. 800ml bottle.'
    },
    {
        id: 22,
        name: 'Family Toothpaste Twin Pack',
        category: 'personal-care',
        price: 3.99,
        originalPrice: 4.49,
        rating: 4.5,
        reviews: 121,
        image: 'https://images.unsplash.com/photo-1559591937-e3b3e4c7e4a4?w=400',
        badges: ['sale'],
        description: 'Fresh mint toothpaste for everyday family dental care. Twin pack, 120g each.'
    },
    {
        id: 23,
        name: 'Baby Diapers Mega Pack',
        category: 'baby',
        price: 24.99,
        originalPrice: 28.99,
        rating: 4.9,
        reviews: 301,
        image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400',
        badges: ['sale'],
        description: 'Soft, absorbent diapers with comfortable all-night protection.'
    },
    {
        id: 24,
        name: 'Baby Wipes (3 Pack)',
        category: 'baby',
        price: 8.99,
        originalPrice: null,
        rating: 4.8,
        reviews: 176,
        image: 'https://images.unsplash.com/photo-1604917019110-5e7d6a1f8f5f?w=400',
        badges: ['new'],
        description: 'Gentle fragrance-free wipes for babies and the whole family.'
    },
    {
        id: 25,
        name: 'Rechargeable LED Lantern',
        category: 'electronics',
        price: 18.99,
        originalPrice: 22.99,
        rating: 4.6,
        reviews: 89,
        image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400',
        badges: ['sale'],
        description: 'Bright rechargeable lantern for power cuts, camping and emergencies.'
    },
    {
        id: 26,
        name: 'USB Phone Charger',
        category: 'electronics',
        price: 7.99,
        originalPrice: null,
        rating: 4.4,
        reviews: 134,
        image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400',
        badges: [],
        description: 'Compact fast-charging USB adapter for phones and everyday devices.'
    },
    {
        id: 27,
        name: 'Extension Box with 4 Sockets',
        category: 'electronics',
        price: 14.99,
        originalPrice: null,
        rating: 4.5,
        reviews: 76,
        image: 'https://images.unsplash.com/photo-1558008258-3256797b43f3?w=400',
        badges: ['new'],
        description: 'Durable extension box with multiple sockets for home and office use.'
    },
    {
        id: 28,
        name: 'Microfiber Cleaning Cloths',
        category: 'household',
        price: 4.49,
        originalPrice: null,
        rating: 4.6,
        reviews: 111,
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400',
        badges: [],
        description: 'Reusable, lint-free cloths for kitchens, windows and everyday cleaning.'
    }
];

// Category keywords for similarity matching
const categoryKeywords = {
    produce: ['fruit', 'vegetable', 'fresh', 'green', 'salad', 'organic', 'healthy', 'vitamin', 'banana', 'apple', 'spinach', 'avocado', 'tomato', 'lettuce'],
    meat: ['chicken', 'beef', 'pork', 'fish', 'salmon', 'protein', 'grill', 'bbq', 'steak', 'meat', 'seafood', 'bacon'],
    bakery: ['bread', 'cake', 'pastry', 'croissant', 'muffin', 'bake', 'flour', 'dough', 'sweet', 'dessert'],
    dairy: ['milk', 'cheese', 'yogurt', 'butter', 'cream', 'egg', 'dairy', 'calcium', 'protein'],
    pantry: ['oil', 'pasta', 'rice', 'sauce', 'spice', 'can', 'jar', 'cereal', 'grain', 'cook'],
    beverages: ['drink', 'water', 'juice', 'soda', 'coffee', 'tea', 'wine', 'beer', 'thirst', 'refresh'],
    frozen: ['ice', 'frozen', 'pizza', 'dessert', 'cold', 'freeze', 'convenient', 'quick'],
    snacks: ['chip', 'cracker', 'chocolate', 'candy', 'nut', 'popcorn', 'sweet', 'savory', 'treat'],
    household: ['clean', 'detergent', 'soap', 'tissue', 'toilet', 'laundry', 'home', 'antiseptic', 'cloth'],
    'personal-care': ['hair', 'skin', 'body', 'toothpaste', 'bath', 'beauty', 'coconut', 'shampoo'],
    baby: ['baby', 'diaper', 'wipe', 'infant', 'child', 'toddler'],
    electronics: ['charger', 'lantern', 'phone', 'usb', 'extension', 'socket', 'light', 'power']
};

// ==================== STATE ====================
let cart = [];
let currentCategory = 'all';
let searchQuery = '';
let sortBy = 'featured';
let dealsOnly = false;
const priceFormatter = new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 });

products.forEach(product => {
    product.price = Math.round(product.price * 1000);
    if (product.originalPrice) product.originalPrice = Math.round(product.originalPrice * 1000);
});

function formatPrice(amount) { return priceFormatter.format(amount); }

// ==================== DOM ELEMENTS ====================
const productsGrid = document.getElementById('productsGrid');
const categoryPills = document.getElementById('categoryPills');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchDropdown = document.getElementById('searchDropdown');
const searchSuggestions = document.getElementById('searchSuggestions');
const noResults = document.getElementById('noResults');
const similarGrid = document.getElementById('similarGrid');
const searchTerm = document.getElementById('searchTerm');
const resultsCount = document.getElementById('resultsCount');
const sortSelect = document.getElementById('sortSelect');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartBadge = document.getElementById('cartBadge');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartTax = document.getElementById('cartTax');
const cartTotal = document.getElementById('cartTotal');
const modalOverlay = document.getElementById('modalOverlay');
const productModal = document.getElementById('productModal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');
const toastContainer = document.getElementById('toastContainer');
const mobileMenu = document.getElementById('mobileMenu');
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const mobileCategories = document.getElementById('mobileCategories');
const navbar = document.getElementById('navbar');
const heroCta = document.getElementById('heroCta');

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    // Simulate loading
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
        animateCounters();
    }, 2000);

    renderCategories();
    renderProducts();
    setupEventListeners();
    setupScrollEffects();
});

// ==================== RENDERING ====================
function renderCategories() {
    // Desktop pills
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = 'category-pill';
        btn.dataset.category = cat.id;
        btn.innerHTML = `<i class="fas ${cat.icon}"></i><span>${cat.name}</span>`;
        btn.addEventListener('click', () => selectCategory(cat.id));
        categoryPills.appendChild(btn);

        const mobileBtn = document.createElement('button');
        mobileBtn.className = 'mobile-category';
        mobileBtn.dataset.category = cat.id;
        mobileBtn.innerHTML = `<i class="fas ${cat.icon}"></i><span>${cat.name}</span>`;
        mobileBtn.addEventListener('click', () => { selectCategory(cat.id); closeMobileMenu(); });
        mobileCategories.appendChild(mobileBtn);
    });
    updateCategoryButtons();
}

function getVisibleProducts() {
    const query = searchQuery.trim().toLowerCase();
    return products.filter(product => {
        const text = `${product.name} ${product.description} ${product.category}`.toLowerCase();
        return (currentCategory === 'all' || product.category === currentCategory) && (!dealsOnly || product.badges.includes('sale')) && (!query || text.includes(query));
    }).sort((first, second) => {
        if (sortBy === 'price-low') return first.price - second.price;
        if (sortBy === 'price-high') return second.price - first.price;
        if (sortBy === 'name') return first.name.localeCompare(second.name);
        if (sortBy === 'rating') return second.rating - first.rating;
        return first.id - second.id;
    });
}

function productCard(product) {
    const category = categories.find(item => item.id === product.category);
    const badges = product.badges.map(badge => `<span class="badge badge-${badge}">${badge}</span>`).join('');
    const stars = Array.from({ length: 5 }, (_, index) => `<i class="fas fa-star${index < Math.round(product.rating) ? '' : '-half-alt'}"></i>`).join('');
    return `<article class="product-card" data-product-id="${product.id}"><div class="product-image"><img src="${product.image}" alt="${product.name}" loading="lazy"><div class="product-badges">${badges}</div><button class="wishlist-btn" type="button" aria-label="Save ${product.name}"><i class="far fa-heart"></i></button></div><div class="product-info"><div class="product-category">${category ? category.name : product.category}</div><h3 class="product-name">${product.name}</h3><div class="product-rating"><span class="stars" aria-label="${product.rating} out of 5">${stars}</span><span class="rating-count">(${product.reviews})</span></div><div class="product-footer"><div class="product-price"><span class="current-price">${formatPrice(product.price)}</span>${product.originalPrice ? `<span class="original-price">${formatPrice(product.originalPrice)}</span>` : ''}</div><button class="add-to-cart" type="button" aria-label="Add ${product.name} to cart"><i class="fas fa-plus"></i></button></div></div></article>`;
}

function renderProducts() {
    const visibleProducts = getVisibleProducts();
    productsGrid.innerHTML = visibleProducts.map(productCard).join('');
    productsGrid.style.display = visibleProducts.length ? 'grid' : 'none';
    noResults.style.display = visibleProducts.length ? 'none' : 'block';
    resultsCount.textContent = `${visibleProducts.length} item${visibleProducts.length === 1 ? '' : 's'} found`;
    bindProductActions(productsGrid);
    if (!visibleProducts.length) {
        searchTerm.textContent = searchQuery;
        const suggestions = products.filter(product => currentCategory === 'all' || product.category === currentCategory).slice(0, 4);
        similarGrid.innerHTML = suggestions.map(productCard).join('');
        bindProductActions(similarGrid);
    }
}

function bindProductActions(container) {
    container.querySelectorAll('.product-card').forEach(card => {
        const productId = Number(card.dataset.productId);
        card.addEventListener('click', event => { if (!event.target.closest('button')) openProductModal(productId); });
        card.querySelector('.add-to-cart').addEventListener('click', event => { event.stopPropagation(); addToCart(productId); });
        card.querySelector('.wishlist-btn').addEventListener('click', event => {
            event.stopPropagation();
            const button = event.currentTarget;
            button.classList.toggle('active');
            button.innerHTML = button.classList.contains('active') ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';
        });
    });
}

function updateCategoryButtons() {
    categoryPills.querySelectorAll('.category-pill').forEach(button => button.classList.toggle('active', button.dataset.category === currentCategory));
    mobileCategories.querySelectorAll('.mobile-category').forEach(button => button.classList.toggle('active', button.dataset.category === currentCategory));
}

function selectCategory(category) {
    currentCategory = category;
    searchQuery = '';
    dealsOnly = false;
    searchInput.value = '';
    closeSearchDropdown();
    updateCategoryButtons();
    renderProducts();
}

function setupEventListeners() {
    searchInput.addEventListener('input', showSearchSuggestions);
    searchInput.addEventListener('keydown', event => { if (event.key === 'Enter') applySearch(); if (event.key === 'Escape') closeSearchDropdown(); });
    searchBtn.addEventListener('click', applySearch);
    sortSelect.addEventListener('change', event => { sortBy = event.target.value; renderProducts(); });
    cartBtn.addEventListener('click', openCart);
    closeCart.addEventListener('click', closeCartSidebar);
    cartOverlay.addEventListener('click', closeCartSidebar);
    modalClose.addEventListener('click', closeProductModal);
    modalOverlay.addEventListener('click', closeProductModal);
    menuToggle.addEventListener('click', () => mobileMenu.classList.add('active'));
    closeMenu.addEventListener('click', closeMobileMenu);
    heroCta.addEventListener('click', () => document.querySelector('.categories-section').scrollIntoView({ behavior: 'smooth' }));
    document.querySelector('.view-all-btn').addEventListener('click', () => selectCategory('all'));
    document.getElementById('dealsBtn').addEventListener('click', () => { searchQuery = ''; searchInput.value = ''; currentCategory = 'all'; dealsOnly = true; updateCategoryButtons(); renderProducts(); document.querySelector('.products-container').scrollIntoView({ behavior: 'smooth' }); });
    document.getElementById('checkoutBtn').addEventListener('click', checkout);
    document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeCartSidebar(); closeProductModal(); closeMobileMenu(); closeSearchDropdown(); } });
    document.addEventListener('click', event => { if (!event.target.closest('.nav-search')) closeSearchDropdown(); });
}

function showSearchSuggestions() {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) return closeSearchDropdown();
    const matches = products.filter(product => product.name.toLowerCase().includes(query)).slice(0, 5);
    searchSuggestions.innerHTML = matches.length ? matches.map(product => `<div class="suggestion-item" data-product-id="${product.id}"><img src="${product.image}" alt=""><div class="suggestion-info"><div class="suggestion-name">${product.name}</div><div class="suggestion-category">${product.category}</div></div><span class="suggestion-price">${formatPrice(product.price)}</span></div>`).join('') : '<div class="suggestion-item">No matching items</div>';
    searchSuggestions.querySelectorAll('[data-product-id]').forEach(item => item.addEventListener('click', () => openProductModal(Number(item.dataset.productId))));
    searchDropdown.classList.add('active');
}

function applySearch() { searchQuery = searchInput.value; currentCategory = 'all'; dealsOnly = false; updateCategoryButtons(); closeSearchDropdown(); renderProducts(); }
function closeSearchDropdown() { searchDropdown.classList.remove('active'); }
function closeMobileMenu() { mobileMenu.classList.remove('active'); }

function addToCart(productId, quantity = 1) {
    const product = products.find(item => item.id === productId);
    if (!product) return;
    const existing = cart.find(item => item.id === productId);
    if (existing) existing.quantity += quantity; else cart.push({ ...product, quantity });
    updateCart();
    showToast(`${product.name} added to cart`);
}

function updateCart() {
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = itemCount;
    cartBadge.style.display = itemCount ? 'flex' : 'none';
    cartItems.innerHTML = cart.length ? cart.map(item => `<div class="cart-item"><img src="${item.image}" alt="${item.name}"><div class="cart-item-details"><div class="cart-item-name">${item.name}</div><div class="cart-item-price">${formatPrice(item.price)}</div><div class="cart-item-controls"><button class="qty-btn" data-action="decrease" data-id="${item.id}">-</button><span>${item.quantity}</span><button class="qty-btn" data-action="increase" data-id="${item.id}">+</button><button class="remove-item" data-action="remove" data-id="${item.id}" aria-label="Remove ${item.name}"><i class="fas fa-trash"></i></button></div></div></div>`).join('') : '<div class="cart-empty"><i class="fas fa-basket-shopping"></i><p>Your cart is empty</p><span>Add some fresh items!</span></div>';
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartSubtotal.textContent = formatPrice(subtotal);
    cartTax.textContent = formatPrice(subtotal * 0.075);
    cartTotal.textContent = formatPrice(subtotal * 1.075);
    cartItems.querySelectorAll('[data-action]').forEach(button => button.addEventListener('click', () => changeCartItem(Number(button.dataset.id), button.dataset.action)));
}

function changeCartItem(productId, action) {
    const item = cart.find(product => product.id === productId);
    if (!item) return;
    if (action === 'increase') item.quantity += 1;
    if (action === 'decrease') item.quantity -= 1;
    if (action === 'remove' || item.quantity < 1) cart = cart.filter(product => product.id !== productId);
    updateCart();
}

function openCart() { cartSidebar.classList.add('active'); cartOverlay.classList.add('active'); document.body.style.overflow = 'hidden'; }
function closeCartSidebar() { cartSidebar.classList.remove('active'); cartOverlay.classList.remove('active'); document.body.style.overflow = ''; }

function openProductModal(productId) {
    const product = products.find(item => item.id === productId);
    if (!product) return;
    modalContent.innerHTML = `<div class="modal-image"><img src="${product.image}" alt="${product.name}"></div><div class="modal-details"><div class="modal-category">${product.category}</div><h2 class="modal-title">${product.name}</h2><div class="modal-rating"><span class="stars">${product.rating} / 5</span><span>${product.reviews} reviews</span></div><div class="modal-price">${formatPrice(product.price)}</div><p class="modal-description">${product.description}</p><div class="modal-actions"><div class="modal-qty"><button type="button" data-qty="down">-</button><span id="modalQuantity">1</span><button type="button" data-qty="up">+</button></div><button class="modal-add-cart" type="button">Add to Cart</button></div></div>`;
    modalContent.querySelectorAll('[data-qty]').forEach(button => button.addEventListener('click', () => { const quantity = document.getElementById('modalQuantity'); quantity.textContent = Math.max(1, Number(quantity.textContent) + (button.dataset.qty === 'up' ? 1 : -1)); }));
    modalContent.querySelector('.modal-add-cart').addEventListener('click', () => { addToCart(product.id, Number(document.getElementById('modalQuantity').textContent)); closeProductModal(); });
    modalOverlay.classList.add('active');
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() { modalOverlay.classList.remove('active'); productModal.classList.remove('active'); document.body.style.overflow = ''; }
function showToast(message, type = 'success') { const toast = document.createElement('div'); toast.className = `toast ${type === 'error' ? 'error' : ''}`; toast.innerHTML = `<div class="toast-icon"><i class="fas fa-check"></i></div><div class="toast-content"><h4>Done</h4><p>${message}</p></div>`; toastContainer.appendChild(toast); setTimeout(() => toast.remove(), 3200); }
function checkout() { if (!cart.length) return showToast('Add an item before checking out', 'error'); showToast('Checkout is ready for your order'); }

function animateCounters() {
    document.querySelectorAll('.stat-number').forEach(counter => {
        const target = Number(counter.dataset.target);
        const started = performance.now();
        const update = now => { const progress = Math.min((now - started) / 1200, 1); counter.textContent = Math.floor(progress * target).toLocaleString(); if (progress < 1) requestAnimationFrame(update); };
        requestAnimationFrame(update);
    });
}

function setupScrollEffects() { window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 20), { passive: true }); }
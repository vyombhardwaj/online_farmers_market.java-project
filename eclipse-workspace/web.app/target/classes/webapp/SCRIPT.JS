// Product Data
const products = [
    { id: 1, name: 'Apple', price: 100, image: 'apple.JPEG' },
    { id: 2, name: 'Banana', price: 50, image: 'banana.JPEG' },
    { id: 3, name: 'Carrot', price: 30, image: 'carrot.JPEG' },
    { id: 4, name: 'Tomato', price: 25, image: 'tomato.JPEG' },
    { id: 5, name: 'Potato', price: 20, image: 'potato.JPEG' },
    { id: 6, name: 'Mango', price: 80, image: 'mango.JPEG' },
    { id: 7, name: 'Grapes', price: 120, image: 'grapes.JPEG' },
    { id: 8, name: 'Watermelon', price: 90, image: 'watermelon.JPEG' },
    { id: 9, name: 'Orange', price: 60, image: 'orange.JPEG' },
    { id: 10, name: 'Cucumber', price: 40, image: 'cucumber.JPEG' },
    { id: 11, name: 'Strawberry', price: 150, image: 'strawberry.JPEG' },
    { id: 12, name: 'Peach', price: 100, image: 'peach.JPEG' },
];

// Login Page
function handleLogin(event) {
    event.preventDefault();
    window.location.href = 'products.html'; // Redirect to Products page
}

// Product Listing Page
function loadProducts() {
    const productList = document.getElementById('productList');
    if (productList) {
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
                <button onclick="viewProduct(${product.id})">View</button>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productList.appendChild(productCard);
        });
    }
}

function viewProduct(id) {
    const product = products.find(p => p.id === id);
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    window.location.href = 'product-details.html'; // Redirect to Product Details page
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
}

// Product Details Page
function loadProductDetails() {
    const product = JSON.parse(localStorage.getItem('selectedProduct'));
    const container = document.getElementById('productDetailsContainer');
    if (product && container) {
        container.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h1>${product.name}</h1>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
            <button class="buy-now" onclick="buyNow()">Buy Now</button>
            <a href="products.html">Back to Products</a>
        `;
    }
}

// Cart Page
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.getElementById('cartItems');
    const totalPriceElement = document.getElementById('totalPrice');
    let totalPrice = 0;

    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = `<p>Your cart is empty!</p>`;
            return;
        }

        cart.forEach((product, index) => {
            const item = document.createElement('div');
            item.classList.add('cart-item');
            item.innerHTML = `
                <div class="cart-item-content">
                    <img src="${product.image}" alt="${product.name}">
                    <div>
                        <h3>${product.name}</h3>
                        <p>Price: ₹${product.price}</p>
                        <button class="remove-button" onclick="removeFromCart(${index})">Remove</button>
                    </div>
                </div>
            `;
            cartItems.appendChild(item);
            totalPrice += product.price;
        });

        totalPriceElement.textContent = totalPrice;
    }
}

function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); // Remove item at the given index
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item removed from cart.');
    location.reload(); // Reload the page to update the cart
}

function buyNow() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Your cart is empty. Add some items to proceed.');
        return;
    }

    alert('Thank you for your purchase!');
    localStorage.removeItem('cart'); // Clear the cart after purchase
    window.location.href = 'products.html'; // Redirect to Products page
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('loginForm')) {
        document.getElementById('loginForm').addEventListener('submit', handleLogin);
    }

    if (document.getElementById('productList')) {
        loadProducts();
    }

    if (document.getElementById('productDetailsContainer')) {
        loadProductDetails();
    }

    if (document.getElementById('cartItems')) {
        loadCart();
    }
});

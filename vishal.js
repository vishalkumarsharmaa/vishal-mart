// Dummy data for demonstration (updated with image URLs)
const products = [
    { id: 1, name: "pink T-Shirt", category: "clothes", price: 20, image: "/pink.jpeg" },
    { id: 2, name: "Smartphone", category: "electronics", price: 500, image: "/smart.jpeg" },
    { id: 3, name: "Apples", category: "grocery", price: 5, image: "apple.jpeg" },
    { id: 4, name: "Sofa", category: "furniture", price: 300, image: "sofa.jpg" },
    { id: 5, name: "jeans", category: "clothes", price: 21, image: "/download(1).jpeg"},
    { id: 6, name: "blue T-Shirt", category: "clothes", price: 20, image: "/tshirt2.jpeg" },
    { id: 7, name: "black T-Shirt", category: "clothes", price: 20, image: "/tshirt3black.jpeg" },
    { id: 8, name: "white T-Shirt", category: "clothes", price: 20, image: "/tshirt4white.jpeg" },
    { id: 9, name: "red T-Shirt", category: "clothes", price: 20, image: "/tshirt5red.jpeg" },
    { id: 10, name: "printed T-Shirt", category: "clothes", price: 20, image: "/tshirt6printed.jpeg" },
    { id: 11, name: "green T-Shirt", category: "clothes", price: 20, image: "/tshirt9green.jpeg" },
    { id: 12, name: " brown T-Shirt", category: "clothes", price: 20, image: "/thirt8brown.jpeg" },
    { id: 13, name: "msilaptop", category: "electronics", price: 20, image: "/msi.jpeg" },
    { id: 14, name: "mi laptop", category: "electronics", price: 20, image: "/mi.jpeg" },
    { id: 15, name: "samsung phone", category: "electronics", price: 20, image: "/samsung.jpeg" },
     { id: 16, name: " acer laptop", category: "electronics", price: 20, image: "/acer.jpeg" },
     { id: 17, name: " dull laptop", category: "electronics", price: 20, image: "/dull.jpeg" },
     { id: 18, name: "mi phone", category: "electronics", price: 20, image: "/mi phone.jpeg" },
     { id: 19, name: "nokia phone", category: "electronics", price: 20, image: "/nokia.jpeg" },
     { id: 20, name: "nothing phone", category: "electronics", price: 20, image: "/nothing.jpeg" },
     { id: 21, name: "poco phone", category: "electronics", price: 20, image: "/poco.jpeg" },
     { id: 22, name: "1seatersofa", category: "furniture", price: 20, image: "/1seatersofa.jpeg" },
     { id: 23, name: "2seatersofa.jpeg", category: "furniture", price: 20, image: "/2seatersofa.jpeg" },
     { id: 24, name: "3seatersofa.jpeg", category: "furniture", price: 20, image: "/3seatersofa.jpeg" },
     { id: 25, name: "4seatersofa.jpeg", category: "furniture", price: 20, image: "/4seater sofa.jpeg" },
     { id: 26, name: "gaming chair", category: "furniture", price: 20, image: "/gaming chair.jpeg" },
     { id: 27, name: "study table", category: "furniture", price: 20, image: "/studytable.jpeg" },
     { id: 28, name: "iphone", category: "electronics", price: 20, image: "/iphone.jpeg" },
     { id: 29, name: "Bed", category: "furniture", price: 20, image: "/bed.jpeg" },
     { id: 30, name: "adidas", category: "Shoes", price: 20, image: "/adidas.jpeg" },
     { id: 31, name: "air", category: "Shoes", price: 20, image: "/air.jpeg" },
     { id: 32, name: "bata", category: "Shoes", price: 20, image: "/bata.jpeg" },
     { id: 33, name: "jordan", category: "Shoes", price: 20, image: "/jordan.jpeg" },
     { id: 34, name: "puma", category: "Shoes", price: 20, image: "/puma.jpeg" },
     { id: 35, name: "reebok", category: "Shoes", price: 20, image: "/reebok.jpeg" },
     { id: 36, name: "skechers", category: "Shoes", price: 20, image: "/skechers.jpeg" },
     { id: 37, name: "spark", category: "Shoes", price: 20, image: "/spark.jpeg" },
     { id: 38, name: "woodland", category: "Shoes", price: 20, image: "/woodland.jpeg" },
     { id: 39, name: "clinic plus", category: "personalcare", price: 20, image: "/clinic lpus.jpeg" },
     { id: 40, name: "dove", category: "personalcare", price: 20, image: "/dove.jpeg" },
     { id: 41, name: "everyuth", category: "personalcare", price: 20, image: "/everyuth.jpeg" },
     { id: 42, name: "fair and lovely", category: "personalcare", price: 20, image: "/fair and lovely.jpeg" },
     { id: 43, name: "garnier", category: "personalcare", price: 20, image: "/garnier facewah.jpeg" },
     { id: 44, name: "head and shoulder", category: "personalcare", price: 20, image: "/head and shoulder.jpeg" },
     { id: 45, name: "himalyan", category: "personalcare", price: 20, image: "/himalyan facewash.jpeg" },
     { id: 46, name: "joy", category: "personalcare", price: 20, image: "/joy.jpeg" },
     { id: 47, name: "funky", category: "Shoes", price: 20, image: "/funky.jpeg" },
     { id: 48, name: "leather", category: "Shoes", price: 20, image: "/leather.jpeg" },
];
let cart = [];
 // Function to display products based on category
 function displayProducts(category) {
    const productsContainer = document.getElementById('products-container');
    if (!productsContainer) {
        console.error("Products container not found.");
        return;
    }
    productsContainer.innerHTML = ''; // Clear previous products

    const filteredProducts = products.filter(product => product.category === category);
    if (filteredProducts.length === 0) {
        productsContainer.innerHTML = "<p>No products found in this category.</p>";
        return;
    }

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card'); // Apply card-like styling

        productCard.innerHTML = `
            <div class="product-image">
                <img src="/images${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        productsContainer.appendChild(productCard);
    });
}





// Function to add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        // Retrieve cart from localStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        // Add product to cart
        cart.push(product);
        // Store updated cart in localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        // Update cart display
        updateCart();
        showAlert(`${product.name} added to cart!`);
    }
}
// Function to show alert message
function showAlert(message) {
    alert(message);
}

// Function to update cart
function updateCart() {
    const cartContainer = document.querySelector('.cart-items');
    if (!cartContainer) {
        console.error("Cart container not found.");
        return;
    }
    cartContainer.innerHTML = ''; // Clear previous cart items

    // Retrieve cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `
            <p>${item.name}</p>
            <p>$${item.price}</p>
        `;
        cartContainer.appendChild(cartItemDiv);
    });
}

// Call updateCart() when cart.html loads to display cart items
window.addEventListener('DOMContentLoaded', updateCart);


// Function to handle login form submission (unchanged)
function handleLogin() {
    // Redirect to main page
    window.location.href = "main.html";
}

// Function to initialize the main page (unchanged)
function initializeMainPage() {
    // Display products based on default category
    displayProducts('clothes');
}

// Call initialize function based on the current page (unchanged)
if (window.location.pathname.includes("main.html")) {
    initializeMainPage();
}
// Function to handle cart button click and navigate to cart page
function goToCart() {
    window.location.href = "cart.html";
}

// Function to handle payment
function makePayment() {
    const totalPrice = calculateTotalPrice();
    // Dummy payment logic (you can replace this with your actual payment logic)
    console.log(`Payment of $${totalPrice} successfully processed.`);
    alert(`Payment of $${totalPrice} successfully processed.`);
    
    // Clear the cart after successful payment
    localStorage.removeItem('cart');
    
    // Update cart display
    updateCart();
}
// Function to calculate total price of items in cart
function calculateTotalPrice() {
    let totalPrice = 0;
    // Retrieve cart from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Calculate total price by summing up the prices of all items in the cart
    cart.forEach(item => {
        totalPrice += item.price;
    });

    return totalPrice;
}



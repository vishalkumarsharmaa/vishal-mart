document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".login-form");
    const mainPage = document.querySelector(".main-page");
    const cartPage = document.querySelector(".cart-page");
    const viewCartButton = document.querySelector(".view-cart");
    const paymentButton = document.querySelector(".payment-button");
    const paymentMessage = document.querySelector(".payment-message");
    const productsContainer = document.querySelector(".products");

    // Mock categories data with images
    const categories = [
        { name: "Clothes", image: "images/clothes.jpeg" },
        { name: "Electronics", image: "images/electronics.jpeg" },
        { name: "Grocery", image: "images/grocery.jpeg" },
        { name: "Furniture", image: "images/furniture.jpeg" }
    ];

    // Mock products data for each category
    const productsByCategory = {
        Clothes: [
            { name: "T-shirt", price: 20, image: "images/t-shirt.jpeg" },
            { name: "Jeans", price: 30, image: "images/jeans.jpeg" },
            { name: "Dress", price: 40, image: "images/dress.jpeg" }
        ],
        Electronics: [
            { name: "Smartphone", price: 300, image: "images/smartphone.jpeg" },
            { name: "Laptop", price: 800, image: "images/laptop.jpeg" },
            { name: "Headphones", price: 50, image: "images/headphones.jpeg" }
        ],
        Grocery: [
            { name: "Apples", price: 2, image: "images/apples.jpeg" },
            { name: "Bananas", price: 1.5, image: "images/bananas.jpeg" },
            { name: "Milk", price: 3, image: "images/milk.jpeg" }
        ],
        Furniture: [
            { name: "Chair", price: 50, image: "images/chair.jpeg" },
            { name: "Table", price: 100, image: "images/table.jpeg" },
            { name: "Sofa", price: 200, image: "images/sofa.jpeg" }
        ]
    };

    // Function to display categories
    function displayCategories() {
        productsContainer.innerHTML = "";
        categories.forEach(category => {
            const categoryElement = document.createElement("div");
            categoryElement.innerHTML = `
                <img src="${category.image}" alt="${category.name}">
                <div>${category.name}</div>
            `;
            categoryElement.classList.add("category");
            productsContainer.appendChild(categoryElement);
        });
    }

    // Function to show/hide pages
    function showPage(pageToShow) {
        const pages = document.querySelectorAll(".page");
        pages.forEach(page => {
            if (page === pageToShow) {
                page.classList.remove("hidden");
            } else {
                page.classList.add("hidden");
            }
        });
    }

    // Function to navigate to the product page for the selected category
    function navigateToCategory(categoryName) {
        const products = productsByCategory[categoryName];
        productsContainer.innerHTML = "";
        products.forEach(product => {
            const productElement = document.createElement("div");
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div>Name: ${product.name}</div>
                <div>Price: $${product.price}</div>
                <button class="add-to-cart">Add to Cart</button>
            `;
            productsContainer.appendChild(productElement);
        });
    }

    // Event listener for login form submission
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Simulate successful login
        showPage(mainPage);
    });

    // Event listener for category click
    productsContainer.addEventListener("click", function(event) {
        if (event.target.classList.contains("category")) {
            const categoryName = event.target.querySelector("div").textContent;
            navigateToCategory(categoryName);
        }
    });

    // Event listener for view cart button
    viewCartButton.addEventListener("click", function() {
        showPage(cartPage);
    });

    // Event listener for payment button
    paymentButton.addEventListener("click", function() {
        // Payment logic here
        paymentMessage.classList.remove("hidden");
    });

    // Display categories on main page
    displayCategories();
});


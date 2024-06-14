const products = {
    clothes: [
        { name: "T-Shirt", price: "$15", image: "/download.jpeg" },
        { name: "Jeans", price: "$30", image: "/download(1).jpeg" },
        { name: "Dress", price: "$25", image: "/dress.jpeg" }
    ],
    electronics: [
        { name: "Smartphone", price: "$400", image: "/smart.jpeg" },
        { name: "Laptop", price: "$800", image: "/laptop.jpeg" },
        { name: "Headphones", price: "$50", image: "/headphone.jpeg" }
    ],
    grocery: [
        { name: "Rice", price: "$10", image: "/rice.jpeg" },
        { name: "Vegetables", price: "$5", image: "/vegetables.jpeg" },
        { name: "Fruits", price: "$8", image: "/fruit.jpeg" }
    ],
    laptops: [
        { name: "Dell Inspiron", price: "$1000", image: "/dull.jpeg" },
        { name: "HP Pavilion", price: "$900", image: "/hp.jpeg" },
        { name: "MacBook Pro", price: "$1500", image: "/laptop.jpeg" }
    ],
    phones: [
        { name: "Samsung Galaxy", price: "$600", image: "/samsung.jpeg" },
        { name: "iPhone", price: "$1000", image: "/iphone.jpeg" },
        { name: "OnePlus", price: "$700", image: "/onepkus.jpeg" }
    ]
};

// Function to display products
function displayProducts(category) {
    const section = document.getElementById(category);
    const productList = products[category];

    if (productList) {
        productList.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product');
            productItem.innerHTML = `
                <img src="/images${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            `;
            section.appendChild(productItem);
        });
    }
}

// Load products for each category
displayProducts('clothes');
displayProducts('electronics');
displayProducts('grocery');
displayProducts('laptops');
displayProducts('phones');

// cart.js

// Function to display added products in the cart
function displayCartItems(cartItems) {
    const cartItemsContainer = document.getElementById("cartItems");

    cartItemsContainer.innerHTML = ""; // Clear previous content

    cartItems.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <div class="cart-item-title">${item.title}</div>
            <div class="cart-item-price">$${item.price.toFixed(2)}</div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
}

// Example data for cart items
const cartItems = [
    { title: "Product 1", price: 15.0 },
    { title: "Product 2", price: 20.0 },
    // ... Add more cart items here
];

// Call the function to display cart items when the page loads
window.addEventListener("load", () => {
    displayCartItems(cartItems);
});


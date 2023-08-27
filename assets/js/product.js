
const products = [
    {
      title: "Product 1",
      description: "Description for Product 1.",
      price: 15.0,
      image: "./assets/images/product8.jpg",
    },
    {
        title: "Product 2",
        description: "Description for Product 1.",
        price: 15.0,
        image: "./assets/images/product7.jpg",
      },
      {
        title: "Product 3",
        description: "Description for Product 1.",
        price: 15.0,
        image: "./assets/images/product6.jpg",
      },
      {
        title: "Product 4",
        description: "Description for Product 1.",
        price: 15.0,
        image: "./assets/images/product5.jpg",
      },
      {
        title: "Product 5",
        description: "Description for Product 1.",
        price: 15.0,
        image: "./assets/images/product1.jpg",
      },
      {
        title: "Product 6",
        description: "Description for Product 1.",
        price: 15.0,
        image: "./assets/images/product2.jpg",
      },
      {
        title: "Product 7",
        description: "Description for Product 1.",
        price: 15.0,
        image: "./assets/images/product3.jpg",
      },{
        title: "Product 8",
        description: "Description for Product 1.",
        price: 15.0,
        image: "./assets/images/product4.jpg",
      }
    
  ];
  
  // Function to generate product cards dynamically
  function generateProductCards() {
    const productGrid = document.getElementById("productGrid");
  
    products.forEach((product) => {
      const productCard = document.createElement("li");
      productCard.innerHTML = `
        <div class="product-card">
          <div class="card-banner img-holder" style="--width: 360; --height: 360">
            <img src="${product.image}" width="360" height="360" loading="lazy" alt="${product.title}" class="img-cover default" />
          </div>
  
          <div class="card-content">
            <h3 class="h3">
              <a href="#" class="card-title">${product.title}</a>
            </h3>
            <p>${product.description}</p>
            <data class="card-price" value="${product.price}">$${product.price.toFixed(2)}</data>
            <button class="card-action-btn" aria-label="add to cart" title="Add To Cart">Add To Cart</button>
            </div>
        </div>
      `;
  
      productGrid.appendChild(productCard);
    });
  }
  
  // Call the function to generate product cards
  generateProductCards();


  
// Function to handle the "Add to Cart" button click
function handleAddToCartClick(event) {
    const productCard = event.target.closest('.product-card');
    if (productCard) {
      const productName = productCard.querySelector('.card-title').textContent;
      const productPrice = parseFloat(productCard.querySelector('.card-price').getAttribute('value'));
  
      // You can customize this part to add the product to the cart
      // For now, let's log the product details to the console
      console.log(`Added to cart: ${productName} - $${productPrice.toFixed(2)}`);
    }
  }
  
  // Add event listener to "Add to Cart" buttons
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('card-action-btn')) {
      handleAddToCartClick(event);
    }
  });
  
  
  
  
  
  
  

const products = [
    {
      title: "Product 1",
      description: "Description for Product 1.",
      price: 15.0,
      image: "./assets/images/product8.jpg",
    },
    {
        title: "Product 1",
        description: "Description for Product 1.",
        price: 15.0,
        image: "./assets/images/product7.jpg",
      },
      {
        title: "Product 1",
        description: "Description for Product 1.",
        price: 15.0,
        image: "./assets/images/product6.jpg",
      },
      {
        title: "Product 1",
        description: "Description for Product 1.",
        price: 15.0,
        image: "./assets/images/product5.jpg",
      },
      {
        title: "Product 1",
        description: "Description for Product 1.",
        price: 15.0,
        image: "./assets/images/product1.jpg",
      },
      {
        title: "Product 1",
        description: "Description for Product 1.",
        price: 15.0,
        image: "./assets/images/product2.jpg",
      },
      {
        title: "Product 1",
        description: "Description for Product 1.",
        price: 15.0,
        image: "./assets/images/product3.jpg",
      },{
        title: "Product 1",
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
  
export default function Products() {
  return /*html*/ `
  <section class="bestselling-section">
  
  <h1 class="bestselling-title">
  Bestselling Products
  </h1>
  
  <div class="carousel-wrapper">
  
  <button id="prevBtn" class="carousel-btn">
  &#10094;
  </button>
  
  <div class="products-carousel">

  <div id="productsTrack" class="products-track">
  </div>

  </div>

  
  <button id="nextBtn" class="carousel-btn">
  &#10095;
  </button>

  </div>

  <section class="all-products">

  <h2 class="all-products-title">
  All products</h2>

  <div id="productsGrid" class="products-grid"></div>

  </section>

  </section>
  `;
}

export async function initProducts() {

  const productsTrack = document.getElementById("productsTrack");
  const productsGrid = document.getElementById("productsGrid");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  async function getProducts() {

    try {

      const response = await fetch(
        "https://v2.api.noroff.dev/online-shop"
      );

      const data = await response.json();

      const products = data.data.slice(0, 12);

      displayProducts(products);

    } catch (error) {

      productsTrack.innerHTML = `
        <p>Failed to load products</p>
      `;

      console.error(error);
    }
  }

  function displayProducts(products) {

    productsTrack.innerHTML = "";
    productsGrid.innerHTML ="";

    products.forEach((product) => {

      const productHTML = `

        <article class="product-card">

          <a href="/product-detail?id=${product.id}">
          <img
            src="${product.image.url}"
            alt="${product.title}"
            class="product-image"
          >
          </a>

          <h2 class="product-title">
            ${product.title}
          </h2>

          <div class="product-prices">

            <span class="discount-price">
              ${product.discountedPrice.toFixed(2)} NOK
            </span>

            <span class="original-price">
              ${product.price.toFixed(2)} NOK
            </span>

          </div>

          <button class="add-to-cart-btn" data-id="${product.id}">
            Add to cart
          </button>

        </article>
      `;

      productsTrack.innerHTML += productHTML
      productsGrid.innerHTML += productHTML;
    });

       const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

  addToCartButtons.forEach((button) => {
    
    button.addEventListener("click",() => {

      const productId = button.dataset.id;

      const selectedProduct = products.find((product) => {

        return product.id === productId;
      });

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      const existingProduct = cart.find((product) => {
        return product.id === productId;
      });

      if (existingProduct) {
        existingProduct.quantity =
        (existingProduct.quantity || 1) + 1;

      } else {

      cart.push({...selectedProduct, quantity: 1,

      });
    }

      localStorage.setItem("cart", JSON.stringify(cart));

      console.log("added to cart");
      alert("added to cart");

    });
  });
  }
  nextBtn.addEventListener("click", () => {
    const maxScroll = productsTrack.scrollWidth - productsTrack.clientWidth;

    if(productsTrack.scrollLeft>= maxScroll -10) {
      productsTrack.scrollLeft = 0;
    } else {
       productsTrack.scrollLeft += 300;
    }
  });

  prevBtn.addEventListener("click", () => {
    const maxScroll = productsTrack.scrollWidth - productsTrack.clientWidth;

       if (productsTrack.scrollLeft <= 0) {
        productsTrack.scrollLeft = maxScroll;
       } else {

       productsTrack.scrollLeft -= 300;

   }
});
getProducts();
}

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
  </section>
  `;
}

export async function initProducts() {

  const productsTrack = document.getElementById("productsTrack");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;

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

    products.forEach((product) => {

      productsTrack.innerHTML += `
        <article class="product-card">

          <img
            src="${product.image.url}"
            alt="${product.title}"
            class="product-image"
          >

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

          <button class="add-to-cart-btn">
            Add to cart
          </button>

        </article>
      `;
    });
  }

  nextBtn.addEventListener("click", () => {
    productsTrack.scrollLeft += 900;
  });

  prevBtn.addEventListener("click", () => {
  productsTrack.scrollLeft -= 900;
  });

  getProducts();
}
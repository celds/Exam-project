export default function ProductDetail() {
  return /*html*/ `
  
<section class="product-detail-page">

<div id="productDetailContainer"></div>

</section>
  `;
}

export async function initProductDetail() {
  const productContainer = document.getElementById("productDetailContainer");

  const params = new URLSearchParams(window.location.search);

  const productId = params.get("id");

  if (!productId) {
    productContainer.innerHTML = `
      <p>Product not found</p>
    `;

    return;
  }

  try {
    const response = await fetch(
      `https://v2.api.noroff.dev/online-shop/${productId}`,
    );

    const result = await response.json();

    const product = result.data;

    renderProductDetail(product);
  } catch (error) {
    console.error(error);

    productContainer.innerHTML = `
      <p>Failed to load product</p>
    `;
  }
  
  function renderProductDetail(product) {
    const stars = "★".repeat(product.rating) + "☆".repeat(5 - product.rating);
    
    const reviewsHTML = product.reviews.length
    ? product.reviews
    .map((review) => {
      const reviewStars =
      "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
      return `
      <div class="detail-review-card">
      
      <h3 class="detail-review-username">
      ${review.username}
      </h3>
      
      <p class="detail-review-stars">
      ${reviewStars}
      </p>

       <p class="detail-review-description">
       ${review.description}
       </p>

      </div>
      `;
     })
      .join("")
       : `<p class="detail-no-reviews">
       No reviews yet
     </p>`;

    productContainer.innerHTML = `

  <article class="detail-product-wrapper">

  <div class="detail-product-image-box">

  <img
  src="${product.image.url}"
  alt="${product.image.alt || product.title}"
  class="detail-product-image"
  >

  </div>

   <div class="detail-product-content">

   <h1 class="detail-product-heading">
   ${product.title}
   </h1>

  <p class="detail-product-text">
  ${product.description}
  </p>

  <div class="detail-product-price-box">

  <span class="detail-product-sale-price">
  ${product.discountedPrice.toFixed(2)} NOK
  </span>

  <span class="detail-product-old-price">
  ${product.price.toFixed(2)} NOK
  </span>

  </div>

  <p class="detail-product-stars">
  ${stars}
  </p>

  <p class="detail-product-tags">
  Tags:
   ${product.tags.join(", ")}
  </p>

  <button
  class="detail-cart-button"
  data-id="${product.id}"
  >
  Add to cart
  </button>

  </div>

  <button class="detail-share-button">

  <img
  src="/assets/img/share.png"
  alt="Share product"
  class="detail-share-icon"
   >

  </button>

  </article>

  <section class="detail-reviews-section">

  <h2 class="detail-reviews-title">
  Reviews
  </h2>

  <div class="detail-reviews-wrapper">

   ${reviewsHTML}

  </div>

  </section>
    `;

    const addToCartButton = document.querySelector(".detail-cart-button");

    addToCartButton.addEventListener("click", () => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      const existingProduct = cart.find((item) => {
        return item.id === product.id;
      });

      if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
      } else {
        cart.push({
          id: product.id,
          title: product.title,
          price: product.price,
          discountedPrice: product.discountedPrice,
          image: product.image,
          quantity: 1,
        });
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      alert("Added to cart");
    });
  }
}

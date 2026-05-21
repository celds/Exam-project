

export default function Cart() {

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const itemsCount = cart.length;

  let totalPrice = 0;
  let totalDiscounted = 0;

  cart.forEach((product) => {
    totalPrice += product.price;
    totalDiscounted += product.discountedPrice;
  });
  const discount = totalPrice - totalDiscounted;

  return /*html*/ `
    <main id="cart-page">

    <section class="cart-container">

    <section class="cart-section">

    <h1>Checkout</h1>

    ${
      cart.length === 0
      ?`<p>Cart is empty</p>`
      : cart.map((product) => {
        return`

    <article class="cart-items">

    <img src="${product.image.url}" alt="${product.title}"/>

    <section class="cart-item-info">

    <h2>${product.title}</h2>

    <p class="old-price">
    ${product.price} NOK
        </p>

    <p class="new-price"> 
    ${product.discountedPrice} NOK
    </p>

    <p>${product.description}</p>

    <div class="quantity">

    <button type="button">-</button>
    <span>1</span>
    <button type="button">+</button>

    </div>
    </section>
    </article>
    `;
      }).join("")
    }

    <button type="button" class="clear-cart-btn">Clear cart</button>
    </section>

    <aside class="summary section">
    <h2>Summary</h2>
    
    <section class="summary-info">

    <p>
    <span>Items (${itemsCount})</span>
    <span>${totalPrice}</span>
    </p>

    <p>
    <span>Shipping</span>
    <span>Free</span>
    </p>

    <p>
    <span>Discounts:</span>
    <span>-${discount}</span>
    </p>

    </section>
    <hr/>

    <section class="summary-total">

    <p>
    <span>Total</span>
    <span>${totalDiscounted}</span>
    </p>

    <button type="button" class="checkout-btn">Checkout</button>
    </section>
    </aside>
    </section>
    </main>
    `;
}

export function initCart() {

  const clearCartBtn = document.querySelector(".clear-cart-btn");

  clearCartBtn.addEventListener("click", () => {

    localStorage.removeItem("cart");

      document.querySelector("#app").innerHTML = Cart();

      initCart();
  });

}
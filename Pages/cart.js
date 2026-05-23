export default function Cart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const itemsCount = cart.reduce((total, product) => {
    return total + (product.quantity || 1);
  }, 0);

  let totalPrice = 0;
  let totalDiscounted = 0;

  cart.forEach((product) => {
    totalPrice += product.price * (product.quantity || 1);
    totalDiscounted += product.discountedPrice * (product.quantity || 1);
  });

  const discount = totalPrice - totalDiscounted;

  return /*html*/ `
    <main id="cart-page">

     <section class="cart-container">

      <section class="cart-section">

       <h1>Cart</h1>

         ${
         cart.length === 0
           ? `<p>Cart is empty</p>`
           : cart
             .map((product, index) => {
              return `


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

        <button type="button" class="minus-btn" data-index="${index}">-</button>

          <span>${product.quantity || 1}</span>

           <button type="button" class="plus-btn" data-index="${index}">+</button>

        </div>

      </section>
      
    </article>
    `;
            })
            .join("")
    }

    <button type="button" class="clear-cart-btn">Clear cart</button>
    </section>

    <aside class="summary section">
    <h2>Summary</h2>
    
    <section class="summary-info">

    <p>
    <span>Items: (${itemsCount})</span>
    <span>${totalPrice.toFixed(2)} NOK</span>
    </p>

    <p>
    <span>Shipping:</span>
    <span>Free</span>
    </p>

    <p>
    <span>Discounts:</span>
    <span>-${discount.toFixed(2)} NOK</span>
    </p>

    </section>
    <hr/>

    <section class="summary-total">

    <p>
    <span>Total:</span>
    <span>${totalDiscounted.toFixed(2)} NOK</span>
    </p>

    <button type="button" class="checkout-btn">Checkout</button>
    </section>
    </aside>
    </section>
    </main>
    `;
}

export function initCart() {
  const checkoutBtn = document.querySelector(".checkout-btn");

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      history.pushState({}, "", "/checkout");
      window.dispatchEvent(new PopStateEvent("popstate"));
    });
  }

  const clearCartBtn = document.querySelector(".clear-cart-btn");

  clearCartBtn.addEventListener("click", () => {
    localStorage.removeItem("cart");

    document.querySelector("#app").innerHTML = Cart();

    initCart();
  });

  const plusButtons = document.querySelectorAll(".plus-btn");

  const minusButtons = document.querySelectorAll(".minus-btn");

  plusButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      const index = button.dataset.index;

      if (!cart[index].quantity) {
        cart[index].quantity = 1;
      }

      cart[index].quantity++;

      localStorage.setItem("cart", JSON.stringify(cart));

      document.querySelector("#app").innerHTML = Cart();

      initCart();
    });
  });

  minusButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      const index = button.dataset.index;

      if (!cart[index].quantity) {
        cart[index].quantity = 1;
      }

      if (cart[index].quantity > 1) {
        cart[index].quantity--;
      } else {
        cart.splice(index, 1);
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      document.querySelector("#app").innerHTML = Cart();

      initCart();
    });
  });
}

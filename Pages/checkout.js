export default function Checkout() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  let total = 0;

  const orderItemsHTML = cart
    .map((product) => {
      const quantity = product.quantity || 1;
      const itemTotal = product.discountedPrice * quantity;

      total += itemTotal;

      return `
  
   <div class="summary-item">

  <span>${quantity}x ${product.title}</span>
  <span>${itemTotal.toFixed(2)} NOK</span>

  </div>
   `;
    })
    .join("");

  return /*html*/ `

 
  <section class="checkout-page">
  
   <form id="checkout-form" class="checkout-container">

    <div class="checkout-left">

     <div class="checkout-card">

  <h1>Checkout information</h1>

  <div class="form-section">
  <h3>Contact information</h3>

  <input 
  type="text"
  id="name"
  class="input-field"
  placeholder="Name"
  required/>

  <input 
  type="email"
  id="email"
  class="input-field"
  placeholder="Email"
  required/>

  </div>

  
  <div class="form-section">
  <h3>Shipping address</h3>

  <input
  type="text"
  id="address"
  class="input-field"
  placeholder="Address"
  required/>

  <input
  type="text"
  id="city"
  class="input-field"
  placeholder="City/Region"
  required/>

  <input
  type="text"
  id="postal"
  class="input-field"
  placeholder="Postal code"
  required/>

  </div>

  </div>


  <div class="checkout-card">
  <h2>Payment method</h2>

  <label class="payment-option">
  <input type="Radio" name="payment" value="card"/>
  <span>Pay with card</span>
  </label>

  <div class="card-fields">

  <input
  type="text"
  id="cardNumber"
  class="input-field"
  placeholder="Card number"/>

  <div class="card-row">
  <input
  type="text"
  id="expiration"
  class="input-field"
  placeholder="Expiration date"/>

  <input
  type="text"
  id="securityCode"
  class="input-field"
  placeholder="Security code"/>

  </div>

  </div>


  <label class="payment-option">
  <input type="radio" name="payment" value="klarna"/>
  <span>Pay with klarna</span>

  </label>

  <label class="payment-option">
  <input type="radio" name="payment" value="googlepay"/>
  <span>Pay with Google Pay</span>

  </label>

  <p id="form-message"></p>
  <button type="submit" class="btn pay-btn">Complete purchase</button>

  </div>

  </div>


  <aside class="order-summary">

  <h2>Order summary</h2>

  <div id="order-items">${orderItemsHTML}</div>

  <div class="summary-row">
  <span>Shipping</span>
  <span id="shipping-price">Free</span>
  </div>

  <hr/>

  <div class="summary-row total">
  <span>Total</span>
  <span>${total.toFixed(2)} NOK</span>
  </div>

  </aside>

  </form>

  </section>
  `;
}
export function initCheckout() {
  const form = document.getElementById("checkout-form");
  const message = document.getElementById("form-message");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const postal = document.getElementById("postal").value.trim();

    const paymentMethod = document.querySelector(
      'input[name="payment"]:checked',
    );

    if (!name || !email || !address || !city || !postal || !paymentMethod) {
      message.textContent = "Please fill out all fields before paying.";
      message.style.color = "red";
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    let total = cart.reduce((sum, product) => {
      const quantity = product.quantity || 1;
      return sum + product.discountedPrice * quantity;
    }, 0);

     localStorage.setItem("orderTotal", total.toFixed(2));
     localStorage.setItem("lastOrder", JSON.stringify(cart));

    message.textContent = "Payment successful!";
    message.style.color = "green";

    localStorage.removeItem("cart");

    setTimeout(() => {
     window.location.hash = "#/success";
    }, 200);
  });
}

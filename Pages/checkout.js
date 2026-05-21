export default function Checkout() {
  return /*html*/ `
  <section class="checkout-page">

  <div class="checkout-container">

  <div class="checkout-left">

  <div class="checkout-card">

  <h1>Checkout information</h1>

  <form id="checkout-form">

  <div class="form-section">
  <h3>Contact information</h3>

  <input type="text"
  id="name"
  placeholder="Name"
  required/>

    <input type="email"
  id="email"
  placeholder="Email"
  required/>

  </div>

  
  <div class="form-section">
  <h3>Shipping address</h3>

  <input
  type="text"
  id="address"
  placeholder="Address"
  required/>

  </div>

  </form>

  </div>


  <div class="checkout-card">
  <payment method</h2>

  <form id="payment-form">

  <label class="payment-option">
  <input type="Radio" name"payment" value="card" checked/>
  <span> Pay with card</span>
  </label>

  <div class="card-fields">
  <input
  type="text"
  id="cardNumber"
  placeholder="Card number"/>

  <div class="card-row">
  <input
  type="text"
  id="expiration"
  placeholder="Expiration date"/>

  <input
  type="text"
  id="securityCode"
  placeholder="Security code"/>

  </div>

  </div>


  <label class="payment-option">
  <input type="radio" name="payment" value="klarna"/>
  <span>Pay with klarna</span>

  </label>

  <label class="payment-option">
  <input type="radio" name="payment" value="googleplay"/>
  <span>Pay with Google</span>

  </label>

  <button type "submit" class="pay-btn">Pay</button>

  </form>

  </div>

  </div>


  <aside class="order-summary">

  <h2>Order summary</h2>

  <div id="order-items"</div>

  <div class="summary-row">
  <span>Shipping</span>
  <span id="shipping-price">Free</span>
  </div>

  <hr/>

  <div class="summary-row total">
  <span>Total</span>
  <span id="total-price">1 NOK</span>
  </div>

  </aside>

  </div>

  </section>
  `;
}

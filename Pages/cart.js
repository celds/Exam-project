export default function Cart() {
  return /*html*/ `
    <main id="cart-page">

    <section class="cart-container">

    <section class="cart-section">

    <h1>Checkout</h1>

    <article class="cart-items">
    <img src="no" alt="no image"/>

    <section class="cart-item-info">

    <h2>Gold Headphones</h2>

    <p class="old-price">
    600 NOK
    </p>

    <p class="new-price">
    449.99 NOK
    </p>

    <p> Professional headphones with gold trim</p>

    <div class="quantity">

    <button type="button">-</button>
    <span>2</span>
    <button type="button">+</button>

    </div>
    </section>
    </article>

    <button type="button" class="clear-cart-button">Clear cart</button>
    </section>

    <aside class="summary section">
    <h2>Summary</h2>
    
    <section class="summary-info">

    <p>
    <span>Items (3)</span>
    <span>5000 NOK</span>
    </p>

    <p>
    <span>Shipping</span>
    <span>Free</span>
    </p>

    <p>
    <span>Discounts:</span>
    <span>-500 NOK</span>
    </p>

    </section>
    <hr/>

    <section class="summary-total">

    <p>
    <span>Total</span>
    <span>4500 NOK</span>
    </p>

    <button type="button" class="checkout-button">Checkout</button>
    </section>
    </aside>
    </section>
    </main>
    `;
}

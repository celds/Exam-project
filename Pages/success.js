export default function Success() {
  const amount = localStorage.getItem("orderTotal");

  return /*html*/ `

    <main class="page-center">

    <section class="auth-container success-container">
    
    <h1>Payment Confirmed</h1>

    <section class="payment-things">

    <p>Amount: ${amount ? Number(amount).toFixed(2) + "NOK" : "0.00 NOK"}</p>

    <p>Date: ${new Date().toLocaleDateString()}</p>

    <p>Transaction ID: 123456789</p>

    </section>

    <a href="/products" data-link class="btn">Done</a>

    </section>
    </main>

    

    `;
}

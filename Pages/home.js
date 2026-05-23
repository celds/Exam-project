export default function Home() {
  return /*html*/ `
  
  <main class="home-page">
  
  <section class="hero-banner" aria-label="Season deals banner">

  <img src="./assets/img/banner.png"alt="Season deals banner"class="hero-img"/>

  <div class="hero-overlay">
  <h1>New Season deals!<br />Up to 30% off</h1>
  </div>
  </section>
  
  <section class="pay-section" aria-label="Shopping benefits">
  
  <article class="pay-card">
  <img
  src="./assets/img/payg.png"
  alt="Mobile phone showing secure payment"
  />

  <div class="cardg-text">
  <h2>Fast &<br />Secure<br />Payments!</h2>
  </div>
  </article>

  <article class="pay-card">
  <img
  src="./assets/img/payp.png"
  alt="Shopping cart with products"
  />

  <div class="cardg-text">
  <h2>Save more on<br />your favorite<br />products!</h2>
  </div>
  </article>

  </section>

  </main>
  
  `;
}

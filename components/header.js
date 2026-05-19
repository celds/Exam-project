export default function Header() {
  const loggedInUser = localStorage.getItem("loggedInUser");

  const IsLoggedIn = !!loggedInUser;

  return `
    <header id="header">

    <div class="logo-container">
    <a href="/" data-link><img src="assets/img/E-buyw.png" alt="white e-buy logo" class="white-logo"/>
    </a> 
    </div>

    <nav class="nav-container">
    <a href="/success" data-link>success</a>
    <a href="/products" data-link>Products</a>
    <a href="/about-us" data-link>About us</a>

    ${
      !IsLoggedIn
        ? `<a href="/register" data-link>Register</a>
        <a href="/login" data-link>Log in</a>
        `
        : `
        <a href ="/profile" data-link>
        <img src="./assets/img/userw.png" alt="user icon" class="nav-icon"/>
        </a>
        `
    }
    <a href="/cart" data-link>
    <img src="./assets/img/cartw.png" alt="cart icon" class="nav-icon"/>
    </a>

    </nav>
    </header>
    `;
}

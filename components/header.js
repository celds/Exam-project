export default function Header() {
  const user = JSON.parse(localStorage.getItem("user"));

  return `
    <header id="header">

    <div class="logo-container">
    <a href="#/" data-link>
    <img src="./assets/img/E-buyw.png" alt="white e-buy logo" class="white-logo"/>
    </a> 
    </div>

    <button class="ham-btn" id="ham-btn">
    <img src="./assets/img/hamw.png" alt= "hamburger menu" class="ham-icon">
    </button>

    <nav class="nav-container" id="nav-menu">

    <a href="#/" data-link>Home</a>
    <a href="#/products" data-link>Products</a>
    <a href="#/about-us" data-link>About us</a>

    ${
      !user
        ? `

        <a href="#/register" data-link>Register</a>
        <a href="#/login" data-link>Log in</a>

         `
        : `
        
        <a href="#/cart" data-link>
        <img src="./assets/img/cartw.png" alt="cart icon" class="nav-icon"/>
        </a>

        <div class="profile-wrapper">

          <img src="./assets/img/userw.png" alt="user icon" class="nav-icon" id="profile-icon"/>

             <div id="profile-card" class="profile-card hidden">
    <p>${user.name}</p>
    <p>${user.email}</p>

     <button id="logout-btn">Log out</button>
    </div>

    </div>
       
  
     `
    }

    </nav>
    </header>
    `;
}

export function initHeader() {
  const icon = document.getElementById("profile-icon");
  const card = document.getElementById("profile-card");
  const logoutBtn = document.getElementById("logout-btn");
  const hamBtn = document.getElementById("ham-btn");
  const navMenu = document.getElementById("nav-menu");

  if (hamBtn && navMenu) {
    hamBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  if (icon && card) {
    icon.addEventListener("click", () => {
      card.classList.toggle("hidden");
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.clear();
      window.location.hash = "#/";
    });
  }
}

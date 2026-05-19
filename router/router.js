import routes from "./routes.js";
import renderHeader from "../components/header.js";
import renderFooter from "../components/footer.js";
import cart from "../pages/cart.js";
import checkOut from "../pages/checkout.js";
import login from "../pages/login.js";
import register from "../pages/register.js";
import productDetail from "../pages/product-detail.js";
import products from "../pages/products.js";
import aboutUs from "../pages/about-us.js";

const NotFound = () => `
  <div>
    <h1>404 - Page Not Found</h1>
    <a href="/" data-link>Home</a>
  </div>
`;

export function initRouter() {
  function renderPage() {

    const path = window.location.pathname;

    const route = routes.find(
      (route) => route.path === path
    );
    
    const page = route ? route.view : NotFound;
    document.getElementById("app").innerHTML = page();
  }

  renderPage();

  document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-link]");
    if (link) {
      event.preventDefault();
      history.pushState({}, "", link.href);
      renderPage();
    }
  });
}
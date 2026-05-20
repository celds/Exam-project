import routes from "./routes.js";
import renderHeader, {initHeader} from "../components/header.js";
import renderFooter from "../components/footer.js";

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
    document.getElementById("header").innerHTML = renderHeader(); 
    initHeader();
    document.getElementById("footer").innerHTML = renderFooter();

    if (route && route.init) {
      route.init();
    }
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
  window.addEventListener("popstate", renderPage);
}
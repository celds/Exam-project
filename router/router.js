import routes from "./routes.js";   /*this previous project helped with router.js https://github.com/NoroffFEU/edugate-team-div/blob/develop/router/router.js */
import renderHeader, {initHeader} from "../components/header.js";
import renderFooter from "../components/footer.js";

const NotFound = () => `
  <div>
    <h1>404 - Page Not Found</h1>
    <a href="#/" data-link>Home</a>
  </div>
`;

export function initRouter() {
  function renderPage() {

    const path = window.location.hash  ||  "#/";

    const currentPath = path.split("?")[0];

    const route = routes.find(
      (route) => route.path === currentPath
    );
    
    const page = route ? route.view : NotFound;
    
    document.getElementById("app").innerHTML = `
    <div class="loader"></div>
    `;
    setTimeout(() => {

    document.getElementById("app").innerHTML = page();
    document.getElementById("header").innerHTML = renderHeader(); 
    initHeader();
    document.getElementById("footer").innerHTML = renderFooter();

    if (route && route.init) {
      route.init();
    }
  }, 300);
}

  renderPage();

  document.addEventListener("click", (event) => {

    const link = event.target.closest("[data-link]");

    if (link) {
      
      event.preventDefault();

      window.location.hash = link.hash;
    }
  });
  window.addEventListener("hashchange", renderPage);
}
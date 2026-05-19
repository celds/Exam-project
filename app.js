import { initRouter } from "./router/router.js";
import header from "./components/header.js";
import Footer from "./components/footer.js";

function initApp() {
  document.getElementById("header").innerHTML = header();
  document.getElementById("footer").innerHTML = Footer();
  initRouter();
}
document.addEventListener("DOMContentLoaded", initApp);

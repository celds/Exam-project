import { initRouter } from "./router/router.js"; /* helped me with app.js. https://github.com/NoroffFEU/edugate-team-div/blob/develop/app.js*/
import header from "./components/header.js";
import Footer from "./components/footer.js";

function initApp() {
  document.getElementById("header").innerHTML = header();
  document.getElementById("footer").innerHTML = Footer();
  initRouter();
}
document.addEventListener("DOMContentLoaded", initApp);

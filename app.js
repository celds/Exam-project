import { initRouter } from "./router/router.js"; /* helped me with app.js. https://github.com/NoroffFEU/edugate-team-div/blob/develop/app.js*/


function initApp() {

  initRouter();
}
document.addEventListener("DOMContentLoaded", initApp);

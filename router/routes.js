import Home from "../Pages/home.js";    /* this previous repository helped with routes.js https://github.com/NoroffFEU/edugate-team-div/blob/develop/router/routes.js */
import Products, { initProducts } from "../Pages/products.js";
import ProductDetail, { initProductDetail } from "../Pages/product-detail.js";
import Checkout, { initCheckout } from "../Pages/checkout.js";
import Cart, { initCart } from "../Pages/cart.js";
import Login, { initLogin } from "../Pages/login.js";
import Register, { initRegister } from "../Pages/register.js";
import Success from "../Pages/success.js";
import AboutUs from "../Pages/about-us.js";

const routes = [
  { path: "#/", view: Home },
  { path: "#/products", view: Products, init:initProducts },
  { path: "#/product-detail", view: ProductDetail, init: initProductDetail },
  { path: "#/checkout", view: Checkout, init: initCheckout },
  { path: "#/cart", view: Cart, init:initCart },
  { path: "#/login", view: Login, init:initLogin },
  { path: "#/register", view: Register, init:initRegister },
  { path: "#/success", view: Success },
  { path: "#/about-us", view: AboutUs },
];

export default routes;

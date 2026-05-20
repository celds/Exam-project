import home from "../pages/home.js";
import products, { initProducts } from "../Pages/products.js";
import productDetail from "../pages/product-detail.js";
import checkout from "../pages/checkout.js";
import cart from "../pages/cart.js";
import login, { initLogin } from "../pages/login.js";
import register, { initRegister } from "../pages/register.js";
import success from "../pages/success.js";
import aboutUs from "../pages/about-us.js";

const routes = [
  { path: "/", view: home },
  { path: "/products", view: products, init:initProducts },
  { path: "/productDetail", view: productDetail },
  { path: "/checkout", view: checkout },
  { path: "/cart", view: cart },
  { path: "/login", view: login, init:initLogin },
  { path: "/register", view: register, init:initRegister },
  { path: "/success", view: success },
  { path: "/about-us", view: aboutUs },
];

export default routes;

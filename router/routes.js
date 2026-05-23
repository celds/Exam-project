import Home from "../pages/home.js";
import Products, { initProducts } from "../Pages/products.js";
import ProductDetail, { initProductDetail } from "../pages/product-detail.js";
import Checkout, { initCheckout } from "../pages/checkout.js";
import Cart, { initCart } from "../pages/cart.js";
import Login, { initLogin } from "../pages/login.js";
import Register, { initRegister } from "../pages/register.js";
import Success from "../pages/success.js";
import AboutUs from "../pages/about-us.js";

const routes = [
  { path: "/", view: Home },
  { path: "/products", view: Products, init:initProducts },
  { path: "/product-detail", view: ProductDetail, init: initProductDetail },
  { path: "/checkout", view: Checkout, init: initCheckout },
  { path: "/cart", view: Cart, init:initCart },
  { path: "/login", view: Login, init:initLogin },
  { path: "/register", view: Register, init:initRegister },
  { path: "/success", view: Success },
  { path: "/about-us", view: AboutUs },
];

export default routes;

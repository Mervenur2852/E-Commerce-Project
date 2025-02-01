import { addToCart, displayCartTotal, renderCartItems } from "./cart.js";
import { fetchProducts, renderProducts } from "./product.js";
import { getFromLocalStorage, updateCartIcon } from "./utils.js";

const menuIcon = document.querySelector("#menu-icon");
const menu = document.querySelector(".navbar");

// menuIcon a tıklanınca manu ye bir class ekle-çıkar

menuIcon.addEventListener("click", () => {
  menu.classList.toggle("open-menu");
});

document.addEventListener("DOMContentLoaded", async () => {

  // localstroage den cart verisini al
 let cart =  getFromLocalStorage()

  if (window.location.pathname.includes("/cart.html")) {
    // eğer sepet sayfasındaysak sepete eklenen ürünleri render et
    renderCartItems();
    displayCartTotal();
  } else {
    // eğer anasayfadaysak api a istek at verileri al
    const products = await fetchProducts();
    console.log(products);
    // api dan gelen verileri ekrana render et
    renderProducts(products, (e) => {
      addToCart(e, products);
    });
  }

  // sepet iconunu güncelle
  updateCartIcon(cart)
});

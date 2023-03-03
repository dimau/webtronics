// Initialize nav menu for mobile devices
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const menuBtn = document.querySelector(".nav__burger");
const menuMobile = document.querySelector(".nav__list");

menuBtn.addEventListener("click", () => {
  // Disable page scroll when open the mobile menu
  if (menuMobile.classList.contains("open")) {
    enablePageScroll(menuMobile);
  } else {
    disablePageScroll(menuMobile);
  }

  // Add class to show the menu
  menuMobile.classList.toggle("open");
});

menuMobile.addEventListener("click", () => {
  if (menuMobile.classList.contains("open")) {
    enablePageScroll(menuMobile);
    menuMobile.classList.remove("open");
  }
});

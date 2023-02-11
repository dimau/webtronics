import "../styles/index.scss";

/* Import styles and js for accordion module */
import "../styles/accordion.scss";
import { Accordion } from "./accordion";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

/* Import styles and js for swiper slider module */
// import "swiper/css/bundle";
// import Swiper from "swiper/bundle";

/* Import styles for each section on the site */
import "../styles/header.scss";
import "../styles/promo.scss";
import "../styles/about.scss";
import "../styles/technologies.scss";
import "../styles/steps.scss";
import "../styles/faq.scss";
import "../styles/review.scss";
import "../styles/gallery.scss";
import "../styles/contact-us.scss";
import "../styles/footer.scss";

// Initialize accordion
new Accordion(document.querySelector(".accordion"), {
  alwaysOpen: false,
});

// Initialize slider
// const swiper = new Swiper(".slider", {
//   loop: true,
//   spaceBetween: 25,
//   slidesPerView: 2,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// Initialize nav menu for mobile devices
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

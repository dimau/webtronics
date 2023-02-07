import "../styles/index.scss";

/* Import styles and js for accordion module */
import "../styles/accordion.scss";
import { Accordion } from "./accordion";

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

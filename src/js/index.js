import "../styles/index.scss";
import "../styles/header.scss";
import "../styles/promo.scss";
import "../styles/about.scss";
import "../styles/technologies.scss";
import "../styles/steps.scss";
import "../styles/accordion.scss";
import "../styles/faq.scss";

import { Accordion } from "./accordion";

new Accordion(document.querySelector(".accordion"), {
  alwaysOpen: false,
});

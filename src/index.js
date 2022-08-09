import "bootstrap";

import { initNavBar, initVerticalNavBar } from "./nav-bar/nav-bar";
import { initMobileNav } from "./nav-bar/mobile-nav";
import { initBackToTopButton } from "./button-back-to-top/button-back-to-top";
import { initSelect } from "./form-elements/SelectElement";
import { initCarousel } from "./carousel/default-carousel";

initMobileNav();
initNavBar();
initVerticalNavBar();
initBackToTopButton();
initSelect();
initCarousel();

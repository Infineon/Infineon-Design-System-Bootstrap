import "bootstrap";

import { initMobileNav } from "./nav-bar/mobile-nav";
import { initNavBar, initVerticalNavBar } from "./nav-bar/nav-bar";
import { initBackToTopButton } from "./button-back-to-top/button-back-to-top";
import {
  initSelect
} from "./form-elements/SelectElement";

setTimeout(( ) => {
  initMobileNav();
  initNavBar();
  initVerticalNavBar();
  initBackToTopButton();
  initSelect();
}, 100)

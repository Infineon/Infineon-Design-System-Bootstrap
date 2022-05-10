import { createElement, useEffect } from "react";
import { run as runHolder } from "holderjs/holder";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faCoffee, faMapMarkerAlt, faChartPie, faBell, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle, faCheckCircle, faTriangleExclamation, faCircleExclamation, faXmark, faCheck, faChevronUp, faChevronDown, faChevronLeft, faChevronsLeft, faChevronRight, faChevronsRight, faMagnifyingGlass, faUser, faGlobe, faShoppingCart, faCompass, faChartColumn, faHouse, faGaugeMin, faArrowRight, faCartShopping } from '@fortawesome/pro-light-svg-icons'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter, faXing, faYoutube } from '@fortawesome/free-brands-svg-icons'
import "./index.scss";

library.add(
  faInfoCircle,
  faCheckCircle,
  faTriangleExclamation,
  faCircleExclamation,
  faXmark,
  faStar,
  faCoffee,
  faCheck,
  faChevronUp,
  faChevronDown,
  faChevronLeft,
  faChevronsLeft,
  faChevronRight,
  faChevronsRight,
  faMagnifyingGlass,
  faUser,
  faGlobe,
  faShoppingCart,
  faCompass,
  faChartColumn,
  faHouse,
  faGaugeMin,
  faMapMarkerAlt,
  faChartPie,
  faBell,
  faCalendar,
  faArrowRight,
  faCartShopping,
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faXing,
  faYoutube,
)

const PreviewImageDecorator = (Story) => {
  useEffect(runHolder);
  return createElement(Story);
};

const tokenContext = require.context(
  "!!raw-loader!../node_modules/@infineon/design-system-tokens/dist",
  true,
  /.\.(css|less|scss|svg)$/
);
const tokenFiles = tokenContext
  .keys()
  .map((filename) => ({ filename, content: tokenContext(filename).default }));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  html: {
    prettier: {
      tabWidth: 2,
    },
  },
  designToken: {
    files: tokenFiles,
  },
};

export const decorators = [PreviewImageDecorator];

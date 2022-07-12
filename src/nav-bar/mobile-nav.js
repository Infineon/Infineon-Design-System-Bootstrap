import { initNavBar } from "./nav-bar";

export function initMobileNav() {
  let desktopShowNav = document.querySelector(".ifx__desktop-show");

  if ( !desktopShowNav || desktopShowNav._ifx_desktopShowNav_initialised) {
    return
  } else {
    desktopShowNav._ifx_desktopShowNav_initialised = true;
  }

  let mobileClone = document.querySelector(".ifx__mobile-clone");

  if ( mobileClone) {
    mobileClone.parentElement.removeChild(mobileClone);
  }

  var subLvlLinkTemplate = document.querySelector("#ifx__sublvl-link");
  
  function createSubLvlLink(labelText) {
    const a = subLvlLinkTemplate.content.cloneNode(true).firstElementChild;
    let linkLabel = a.querySelector(".ifx__sublvl-link-label");
    linkLabel.textContent = labelText;

    return a;
  }

  var LinkLastLayerTemplate = document.querySelector("#ifx__link-last-layer");

  function createLinkLastLayer(labelText) {
    const div = LinkLastLayerTemplate.content.cloneNode(true).firstElementChild;
    let linkLabel = div.querySelector(".ifx__link-last-layer-label");
    linkLabel.textContent = labelText;

    return div;
  }

  function createDirectLink(Link) {
    const a = document.createElement("a");
    a.classList.add("nav-link", "ifx__nav-mega-dropdown-next-layer");
    a.href = Link.href;
    a.textContent = Link.textContent;

    return a;
  }
  


  /*
    THIRD LEVEL NAVIGATION
  */
  function thirdFunction(oldUls, aTextContent) {
    let ulThirdLevelNav = document.createElement("ul");
    ulThirdLevelNav.classList.add("w-100", "ifx__third-level-nav", "ifx__nav-mega-dropdown-mobile", "ifx__nav-wrapper");

    let divNavMegaDropdownMobileContent = document.createElement("div");
    ulThirdLevelNav.appendChild(divNavMegaDropdownMobileContent);
    divNavMegaDropdownMobileContent.classList.add("ifx__nav-mega-dropdown-mobile-content");

    let lastLayer = createLinkLastLayer(aTextContent);

    divNavMegaDropdownMobileContent.appendChild(lastLayer);

    let divrow = document.createElement("div");
    divNavMegaDropdownMobileContent.appendChild(divrow);
    divrow.classList.add("row");

    oldUls.forEach(function(oldUl) {
      const thirdLvlCols = oldUl.querySelectorAll(".ifx__third-lvl-col");

      thirdLvlCols.forEach(function(thirdLvlCol) {
        const divcolSm6 = document.createElement("div");
        divcolSm6.classList.add("col-sm-6");
        divrow.appendChild(divcolSm6);

        let ul = document.createElement("ul");
        divcolSm6.appendChild(ul);

        const thirdvlLinks = thirdLvlCol.querySelectorAll(".ifx__third-lvl-link");
        thirdvlLinks.forEach(function(thirdLvlLink) {
          let li = document.createElement("li");
          ul.appendChild(li);

          let a = thirdLvlLink.cloneNode(true);
          li.appendChild(a);
        });
      });
    });

    return ulThirdLevelNav;
  }



  /*
    SECOND LEVEL NAVIGATION
  */
  function secondFunction(oldUls, aTextContent) {
    let ulSecondLevelNav = document.createElement("ul");
    ulSecondLevelNav.classList.add("w-100", "ifx__second-level-nav", "ifx__nav-mega-dropdown-mobile", "ifx__nav-wrapper");

    let divNavMegaDropdownMobileContent = document.createElement("div");
    ulSecondLevelNav.appendChild(divNavMegaDropdownMobileContent);
    divNavMegaDropdownMobileContent.classList.add("ifx__nav-mega-dropdown-mobile-content");

    let lastLayer = createLinkLastLayer(aTextContent);

    divNavMegaDropdownMobileContent.appendChild(lastLayer);

    let divrow = document.createElement("div");
    divNavMegaDropdownMobileContent.appendChild(divrow);
    divrow.classList.add("row");

    oldUls.forEach(function(oldUl) {
      const secondLvlCols = oldUl.querySelectorAll(".ifx__second-lvl-col");

      secondLvlCols.forEach(function(secondLvlCol) {
        const divcolSm6 = document.createElement("div");
        divcolSm6.classList.add("col-sm-6");
        divrow.appendChild(divcolSm6);

        let ul = document.createElement("ul");
        divcolSm6.appendChild(ul);

        const secondLvlLinks = secondLvlCol.querySelectorAll(".ifx__second-lvl-link");
        secondLvlLinks.forEach(function(secondLvlLink) {
          let li = document.createElement("li");
          ul.appendChild(li);

          let a;

          let thirdLvlNavUls = secondLvlLink.parentElement.querySelectorAll(".ifx__third-level-nav");
    
          if ( thirdLvlNavUls.length) {
            a = createSubLvlLink(secondLvlLink.textContent)
    
            let thirdMarkup = thirdFunction(thirdLvlNavUls, a.textContent);
            li.replaceChildren(a);
    
            a.after(thirdMarkup);
          } else {
            a = createDirectLink(secondLvlLink);
            li.replaceChildren(a);
          }
        });
      });
    });

    return ulSecondLevelNav;
  }



  /*
    FIRST LEVEL NAVIGATION
  */
  function firstFunction(oldUl) {
    let ulFirstLevelNav = document.createElement("ul");
    ulFirstLevelNav.classList.add("ifx__first-level-nav");

    const FirstLvlLinks = oldUl.querySelectorAll(".ifx__first-lvl-link");

    FirstLvlLinks.forEach(function(firstLvlLink) {
      let li = document.createElement("li");
      ulFirstLevelNav.appendChild(li);

      let a;

      let secondLvlNavUls = firstLvlLink.parentElement.querySelectorAll(".ifx__second-level-nav");

      if ( secondLvlNavUls.length) {
        a = createSubLvlLink(firstLvlLink.textContent)

        let secondMarkup = secondFunction(secondLvlNavUls, a.textContent);
        li.replaceChildren(a);

        a.after(secondMarkup);
      } else {
        a = createDirectLink(firstLvlLink);
        li.replaceChildren(a);
      }
    });

    return ulFirstLevelNav;
  }

  let SearchBarMetalinkWrapper = document.querySelector(".ifx__searchbar-metalink-wrapper");
  let mobileShow = document.createElement("div");
  mobileShow.classList.add("ifx__mobile-show", "ifx__nav-wrapper", "ifx__mobile-clone", "ifx__nav-link-wrapper");
  SearchBarMetalinkWrapper.after(mobileShow);

  let menuLayer = document.createElement("div");
  menuLayer.classList.add("ifx__menu");
  let menuText = document.createTextNode("Menu");
  menuLayer.appendChild(menuText);
  mobileShow.appendChild(menuLayer);

  const firstLvlRow = document.createElement("div");
  firstLvlRow.classList.add("row");
  mobileShow.appendChild(firstLvlRow);

  const firstLvlCol = document.createElement("div");
  firstLvlCol.classList.add("col-sm-6");
  firstLvlRow.appendChild(firstLvlCol);

  const desktopFirstLvlUl = document.querySelector(".ifx__desktop-show .ifx__first-level-nav");
  const mobileFirstLvlUl = firstFunction(desktopFirstLvlUl);
  firstLvlCol.appendChild(mobileFirstLvlUl);
}

initNavBar();

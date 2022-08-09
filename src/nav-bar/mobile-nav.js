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



  // #ifx__sublvl-link Template
  var subLvlLinkTemplate = document.querySelector("#ifx__sublvl-link");
  
  function createSubLvlLink(labelText) {
    const a = subLvlLinkTemplate.content.cloneNode(true).firstElementChild;
    let linkLabel = a.querySelector(".ifx__sublvl-link-label");
    linkLabel.textContent = labelText;

    return a;
  }
  // #ifx__sublvl-link Template End



  // #ifx__link-last-layer Template
  var LinkLastLayerTemplate = document.querySelector("#ifx__link-last-layer");

  function createLinkLastLayer(labelText) {
    const div = LinkLastLayerTemplate.content.cloneNode(true).firstElementChild;
    let linkLabel = div.querySelector(".ifx__link-last-layer-label");
    linkLabel.textContent = labelText;

    return div;
  }
  // #ifx__link-last-layer Template End



  // #ifx__sub-level-nav Template
  var subLvlNavTemplate = document.querySelector("#ifx__sub-level-nav");

  function createSubLvlNav(className) {
    const subLvlNav = subLvlNavTemplate.content.cloneNode(true).firstElementChild;
    subLvlNav.classList.add(className);
    return subLvlNav;
  }
  // #ifx__sub-level-nav Template End



  // #ifx__sub-lvl-col Template
  var subLvlColTemplate = document.querySelector("#ifx__sub-lvl-col");

  function createSubLvlCol() {
    const subLvlCol = subLvlColTemplate.content.cloneNode(true).firstElementChild;

    return subLvlCol;
  }
  // #ifx__sub-lvl-col Template End



  // #ifx__nav-wrapper Template
  var navWrapperTemplate = document.querySelector("#ifx__nav-wrapper");

  function createNavWrapper() {
    const navWrapper = navWrapperTemplate.content.cloneNode(true).firstElementChild;

    return navWrapper;
  }
  // #ifx__nav-wrapper Template End


  
  // createDirectLink Template
  function createDirectLink(Link) {
    const a = document.createElement("a");
    a.classList.add("nav-link", "ifx__nav-mega-dropdown-next-layer");
    a.href = Link.href;
    a.textContent = Link.textContent;

    return a;
  }
  // createDirectLink Template End



  /*
    THIRD LEVEL NAVIGATION
  */
  function thirdFunction(oldUls, aTextContent) {
    let ulThirdLevelNav = createSubLvlNav("ifx__third-level-nav");

    let divNavMegaDropdownMobileContent = ulThirdLevelNav.firstElementChild;

    let divrow = ulThirdLevelNav.querySelector(".row");

    let lastLayer = createLinkLastLayer(aTextContent);

    divNavMegaDropdownMobileContent.insertBefore(lastLayer, divrow);

    oldUls.forEach(function(oldUl) {
      const thirdLvlCols = oldUl.querySelectorAll(".ifx__third-lvl-col");

      thirdLvlCols.forEach(function(thirdLvlCol) {
        const divcolSm6 = createSubLvlCol();
        divrow.appendChild(divcolSm6);

        let ul = divcolSm6.firstElementChild;

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
    let ulSecondLevelNav = createSubLvlNav("ifx__second-level-nav");

    let divNavMegaDropdownMobileContent = ulSecondLevelNav.firstElementChild;

    let divrow = ulSecondLevelNav.querySelector(".row");

    let lastLayer = createLinkLastLayer(aTextContent);

    divNavMegaDropdownMobileContent.insertBefore(lastLayer, divrow);

    oldUls.forEach(function(oldUl) {
      const secondLvlCols = oldUl.querySelectorAll(".ifx__second-lvl-col");

      secondLvlCols.forEach(function(secondLvlCol) {
        const divcolSm6 = createSubLvlCol();
        divrow.appendChild(divcolSm6);

        let ul = divcolSm6.firstElementChild;

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
  function firstFunction(oldUl, ulFirstLevelNav) {
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
  let mobileShow = createNavWrapper();
  SearchBarMetalinkWrapper.after(mobileShow);

  const firstLvlRow = mobileShow.querySelector(".row");

  const firstLvlCol = createSubLvlCol();
  firstLvlRow.appendChild(firstLvlCol);

  const ulFirstLevelNav = firstLvlCol.firstElementChild;

  const desktopFirstLvlUl = document.querySelector(".ifx__desktop-show .ifx__first-level-nav");
  const mobileFirstLvlUl = firstFunction(desktopFirstLvlUl, ulFirstLevelNav);
  firstLvlCol.appendChild(mobileFirstLvlUl);
}

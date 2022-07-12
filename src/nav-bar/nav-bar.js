let navBar;
let navBarHeight;
let currentContent;

function slideNav(mobileShow) {
  if (mobileShow._ifx_slideNav_initialised) {
    return
  } else {
    mobileShow._ifx_slideNav_initialised = true;
  }

  mobileShow.addEventListener('click', toggleMenu);
  window.addEventListener('resize', updateNavHeight, {passive: true});

  function updateNavHeight() {
    navBarHeight = navBar.offsetHeight;

    if (currentContent) {
      mobileShow.style.minHeight = currentContent.offsetHeight + "px";
    } else {
      mobileShow.style.minHeight = null;
    }
  }

  function toggleMenu(e) {
    const link = e.target && e.target.closest("A");

    if(link) {
      if(link.matches('.ifx__nav-mega-dropdown-last-layer')) {
        const navMegaDropdownMobile = link.closest('.ifx__nav-mega-dropdown-mobile');
        const navMegaWrapper = link.closest(".ifx__nav-wrapper.open");

        navMegaDropdownMobile.classList.remove('show');

        if (navMegaWrapper) {
          navMegaWrapper.classList.remove('open');
        }

        currentContent = undefined;
        updateNavHeight();

      } else if(link.matches('.ifx__nav-mega-dropdown-next-layer')) {
        const navMegaDropdownMobile = link.nextElementSibling;
        const navMegaWrapper = link.closest(".ifx__nav-wrapper");

        if (navMegaDropdownMobile && navMegaWrapper) {
          navMegaDropdownMobile.classList.add('show');
          navMegaWrapper.classList.add('open');
          currentContent = navMegaDropdownMobile.firstElementChild;
          updateNavHeight();
        }
      }
    }
  }
}

export function initNavBar() {
  navBar = document.querySelector(".ifx__navbar");

  if ( !navBar || navBar._ifx_NavBar_initialised) {
    return
  } else {
    navBar._ifx_NavBar_initialised = true;
  }

  navBarHeight = navBar.offsetHeight;

  function setShadow() {
    const scrollY = window.scrollY;

    if (scrollY >= navBarHeight) {
      navBar.classList.add('scrolling');
    } else {
      navBar.classList.remove('scrolling');
    }
  }

  document.addEventListener("scroll", setShadow, {passive: true});

  const mobileShow = document.querySelector('.ifx__nav-link-wrapper.ifx__mobile-show');
  if ( mobileShow ) {
    slideNav(mobileShow);
  }

  const desktopShow = document.querySelector('.ifx__nav-list');
  if (!desktopShow) {
    return
  }

  desktopShow.removeEventListener('click', toggleMenuDesktop);
  desktopShow.addEventListener('click', toggleMenuDesktop);

  desktopShow.addEventListener('focusout', toggleMenuItem);

  const dropdowns = desktopShow.childNodes;
  const navLinks = desktopShow.querySelectorAll('.nav-link');

  const secondLvlCols = desktopShow.querySelectorAll('.ifx__second-lvl-col');
  const thirdLvlTrigger = Array.from(secondLvlCols)
    .map(function(secondLvlCol) {
      return Array.from(secondLvlCol.childNodes);
    })
    .flat();
  
  function toggleMenuDesktop(e) {
    const dropdownLink = e.target && e.target.closest(".ifx__nav-link");

    if (dropdownLink) {
      const currentListItem = dropdownLink.parentElement;

      dropdowns.forEach( function(element) {
        if(element !== currentListItem) {
          element.classList.remove("show");
        }
      })

      navLinks.forEach( function(element) {
        element.classList.remove("show");
      })

      currentListItem.classList.toggle("show");

      return
    }

    const subMenuLink = e.target && e.target.closest(".ifx__nav-link-with-icon");

    if (subMenuLink) {
      const currentNavLink = subMenuLink.parentElement;
      thirdLvlTrigger.forEach( function(element) {
        if(element !== currentNavLink) {
          element.classList.remove("show");
        }
      })
      currentNavLink.classList.toggle("show");

      return
    }
  }

  function toggleMenuItem(e) {
    const newTarget = e.relatedTarget;

    if (!desktopShow.contains(newTarget)) {
      dropdowns.forEach( function(element) {
        element.classList.remove("show");
      });

      thirdLvlTrigger.forEach( function(element) {
        element.classList.remove("show");
      });
    }
  }
}

export function initVerticalNavBar() {
  const mobileShow = document.querySelector('.ifx__nav-link-wrapper.ifx__mobile-show');

  if ( mobileShow ) {
    slideNav(mobileShow);
  }

  const verticalNavBtn = document.querySelector(".ifx__vertical-nav-icons-btn");

  if ( !verticalNavBtn || verticalNavBtn._ifx_VerticalNavBar_initialised) {
    return
  } else {
    verticalNavBtn._ifx_VerticalNavBar_initialised = true;
  }

  const navBarVerticalCollapsible = document.querySelector(".ifx__nav-bar-vertical-collapsible");
  if (!navBarVerticalCollapsible) {
    return
  }

  verticalNavBtn.addEventListener("click", toggleVerticalNav);

  function toggleVerticalNav() {
    navBarVerticalCollapsible.classList.toggle("show");
  }
}

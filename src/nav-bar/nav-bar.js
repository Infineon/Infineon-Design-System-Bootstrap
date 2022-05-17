let navBar;
let navBarHeight;
let currentContent;
let desktopShow;
let dropdowns;
let navLinks;
let verticalNavBtn;
let navBarVerticalCollapsible;

function slideNav(mobileShow) {
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

  if ( !navBar ) {
    return
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

  desktopShow = document.querySelector('.ifx__nav-list');
  if (!desktopShow) {
    return
  }

  desktopShow.removeEventListener('click', toggleMenuDesktop);
  desktopShow.addEventListener('click', toggleMenuDesktop);

  desktopShow.addEventListener('focusout', toggleMenuItem);

  dropdowns = desktopShow.childNodes;
  navLinks = desktopShow.querySelectorAll('.nav-link');

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

      navLinks.forEach( function(element) {
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
    }
  }
}

export function initVerticalNavBar() {
  const mobileShow = document.querySelector('.ifx__nav-link-wrapper.ifx__mobile-show');

  if ( mobileShow ) {
    slideNav(mobileShow);
  }

  verticalNavBtn = document.querySelector(".ifx__vertical-nav-icons-btn");
  console.log(verticalNavBtn);
  if (!verticalNavBtn) {
    return
  }

  navBarVerticalCollapsible = document.querySelector(".ifx__nav-bar-vertical-collapsible");
  if (!navBarVerticalCollapsible) {
    return
  }

  verticalNavBtn.addEventListener("click", toggleVerticalNav);

  function toggleVerticalNav() {
    navBarVerticalCollapsible.classList.toggle("show");
  }
}

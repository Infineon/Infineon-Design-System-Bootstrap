export function initNavBar() {
  const navBar = document.querySelector(".ifx__navbar");
  let navBarHeight = navBar.offsetHeight;

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
  let currentContent;
  mobileShow.addEventListener('click', toggleMenu);
  window.addEventListener('resize', updateNavHeight);

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

  const desktopShow = document.querySelector('.ifx__nav-list');
  if (!desktopShow) {
    return
  }

  desktopShow.addEventListener('click', toggleMenuDesktop);
  desktopShow.addEventListener('focusout', toggleMenuItem);

  const dropdowns = desktopShow.childNodes;
  const navLinks = desktopShow.querySelectorAll('.nav-link');

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

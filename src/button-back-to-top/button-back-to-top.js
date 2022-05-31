export function initBackToTopButton() {
  let backToTopButton = document.querySelector(".ifx__btn-back-to-top");

  if ( !backToTopButton ) {
    return
  }

  window.onscroll = function () {
    scroll();
  };

  function scroll() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      backToTopButton.classList.add('scroll-down');

    } else {
      backToTopButton.classList.remove('scroll-down'); 
    }
  }

  backToTopButton.addEventListener("click", backToTop);

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}

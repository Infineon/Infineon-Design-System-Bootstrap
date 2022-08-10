export function initCarousel() {

  document.querySelectorAll('.carousel').forEach(function (element) {
    
    const caption = element.querySelector('.carousel-item:nth-child(1) .carousel-caption').cloneNode(true);
    const newCaptionContainer = element.nextElementSibling;
    
    newCaptionContainer.replaceChildren(...caption.children);
 
    element.addEventListener('slide.bs.carousel', function (ev) {
      const updateCaption = ev.relatedTarget.querySelector('.carousel-caption');
    
      if (updateCaption) {
        const updateCaptionContent = updateCaption.cloneNode(true);
        newCaptionContainer.replaceChildren(...updateCaptionContent.children);
      } else {
        newCaptionContainer.replaceChildren();
      }
    });

  });

}


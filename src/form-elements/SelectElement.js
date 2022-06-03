export function initSelect() {
  
  document.querySelectorAll('.form-select').forEach(function(element) {

    if(element.options[element.selectedIndex].value) { 
      element.classList.add("ifx__form-select--selected");
    } else {
      element.addEventListener("change", function changeHandler() {
        element.classList.add("ifx__form-select--selected");
        element.removeEventListener("change", changeHandler);
      });
    }

  });

}
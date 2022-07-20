let tableBtns = document.getElementById('table__nav-btns');

window.addEventListener('resize', () => {
    if (window.matchMedia("(min-width: 768px)").matches) {
        if(tableBtns.classList.contains('btn-group-sm')) {
            tableBtns.classList.remove('btn-group-sm')
        }
       
    } else { 
        if(!tableBtns.classList.contains('btn-group-sm')) {
            tableBtns.classList.add('btn-group-sm')
        }
    }
})


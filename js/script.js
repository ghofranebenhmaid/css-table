const btnHamburger = document.querySelector('#btnHamburger');
const menu = document.querySelector('#menu');

btnHamburger.addEventListener('click', function ()
{
    
    if (btnHamburger.classList.contains('open')) {

        btnHamburger.classList.remove('open');
        menu.classList.remove('open-menu');
    } else {
        menu.classList.add('open-menu');
        btnHamburger.classList.add('open');
        
    }
})
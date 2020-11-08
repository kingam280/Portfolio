const burgerIcon = document.querySelector('header i.fa-bars');
const menu = document.querySelector('header nav');
const menuPositions = document.querySelectorAll('header nav a');
const xIcon = document.querySelector('header i.fa-times');


//pokazanie/chowanie menu
function showMenu() {
    burgerIcon.classList.toggle('active')
    menu.classList.toggle('active')
    burgerIcon.classList.toggle('show')
    xIcon.classList.toggle('show')
}

burgerIcon.addEventListener('click', showMenu);
xIcon.addEventListener('click', showMenu);


//zamkniecie menu po wybraniu pozycji
menuPositions.forEach(function (menuPosition) {
    menuPosition.addEventListener('click', showMenu)
});


//pojawianie sie strzalki goBack
document.addEventListener('scroll', function () {
    const scrollValue = window.scrollY;
    const goBack = document.querySelector('.goback');
    const goBackHeight = goBack.clientHeight;

    if (scrollValue > goBackHeight) {
        goBack.classList.add('active');
    } else {
        goBack.classList.remove('active');
    }
})
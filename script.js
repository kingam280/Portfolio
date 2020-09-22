const burgerIcon = document.querySelector('header i.fa-bars');
const menu = document.querySelector('header nav');
const menuPositions = document.querySelectorAll('header nav a');
const xIcon = document.querySelector('header i.fa-times');


function showMenu() {
    burgerIcon.classList.toggle('active')
    menu.classList.toggle('active')
    burgerIcon.classList.toggle('show')
    xIcon.classList.toggle('show')
}

burgerIcon.addEventListener('click', showMenu);

xIcon.addEventListener('click', showMenu);



menuPositions.forEach(function (menuPosition) {
    menuPosition.addEventListener('click', showMenu)

})
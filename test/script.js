document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.burger-menu').addEventListener('click', function () {
        document.querySelector('.menu-block').classList.toggle('show');
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const customersSection = document.getElementById('customersSection');

    burgerMenu.addEventListener('click', function () {
        burgerMenu.classList.toggle('active');
        customersSection.classList.toggle('hide');
    });
});
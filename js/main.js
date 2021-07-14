$(function() {




});

window.addEventListener("scroll", function() {
    let top = this.document.querySelector('.header__top');
    top.classList.toggle('top-fixed', window.scrollY > 0);
})

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
    });
});
$(document).ready(function () {
        $('.menu-toggler').on('click', function () {
            $(this).toggleClass('open');
            $('.top-nav').toggleClass('open');
        });
        $('.nav-link').on('click', function () {
            $('.top-nav').toggleClass('open');
        });
    });
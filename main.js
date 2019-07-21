$(document).ready(function () {

        //clivk of toggle menu button
        $('.menu-toggler').on('click', function () {
            $(this).toggleClass('open');
            $('.top-nav').toggleClass('open');
        });

        //close the menu and return toggle menu to normal when a menu link is clicked
        $('.nav-link').on('click', function () {
            $('.top-nav').removeClass('open');
            $('.menu-toggler').removeClass('open');
        });

        //give scroll effect when clicking on a menu link
        $('nav a[href*="#"]').on('click', function () {
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top -100
            }, 2000);
        });

        //used to scroll up from the bottom of the page
        $('#up').on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 2000);
        });

        AOS.init({
            easing: 'ease',
            duration : 1800,
        }); 
    });
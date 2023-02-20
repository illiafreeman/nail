$(document).ready(function () {

    /*top menu toggle*/

    $('.header__btn').click(function () {
        $(this).toggleClass('close');
        $('.nav').toggleClass('vis');
        $('body').toggleClass('oh');
        $('#hamburger').toggleClass('open');
        $('li.vis').removeClass('vis');
    });

    /*end top menu toggle*/


    $('#slick_1').slick({
        slidesToShow: 1,
        dots: false,
        adaptiveHeight: true,
        //autoplay: true,
        autoplaySpeed: 10000,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: true
                }
            }
        ]
    });
    $('#slick_3').slick({
        slidesToShow: 4,
        dots: false,
        //autoplay: true,
        autoplaySpeed: 7000,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    adaptiveHeight: true
                }
            }
        ]
    });
    $('#slick_2').slick({
        slidesToShow: 4,
        dots: false,
        //autoplay: true,
        autoplaySpeed: 7000,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 1,
                    adaptiveHeight: true
                }
            }
        ]
    });
    $('.adv__desc-item').hover(function() {
        $('.adv__pic-item').removeClass('vis');
        var activeTab = $(this).attr('data-id');
        console.log(activeTab);
        $('#'+activeTab).addClass('vis');
        return false;
    });

});









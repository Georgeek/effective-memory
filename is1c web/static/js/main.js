$(function() {

    /*
     *   Initing Stickyfill
     */

    // $('.sticky').Stickyfill();

    /*
     *   Initing the Slick slider
     */
    $(document).ready(function() {
        $('.carousel').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            rows: 2,
            speed: 300,
            arrows: true
                // prevArrow: '<div class="common-slider-arrow left"></div>',
                // nextArrow: '<div class="common-slider-arrow right"></div>'
        });

    });

    /*
     *   Initing the Fotorama slider
     */
    $('.slider_init--common-slider').on('fotorama:ready ' + 'fotorama:showend', function() {
        var sliderRama = $(this).data('fotorama');

        sliderRama.resize({
            width: '100%',
            maxwidth: "100%",
            height: "100%",
            maxheight: "100%",
            ratio: "16/9"
        }, 200);

        sliderRama.setOptions({
            nav: 'dots',
            click: false,
            swipe: true,
            trackpad: true,
            arrows: false,
            loop: true,
            autoplay: false,
            stopautoplayontouch: true,
            allowfullscreen: false,
            fit: 'cover',
            transition: 'slide'
        });

        if (sliderRama.size == 1) {
            $('.common-slider-arrow').hide();
        }
    }).on('fotorama:ready', function() {
        var fotoramaStage = $(this).find('.fotorama__wrap');
        $("<div class=\"common-slider-arrow left\"></div>").appendTo(fotoramaStage);
        $("<div class=\"common-slider-arrow right\"></div>").appendTo(fotoramaStage);
        var h1 = $(".fotorama__stage").height();
        var h2 = $(".fotorama__nav-wrap").outerHeight(true);
        var h3 = $('.common-slider-arrow').height();
        $(this).find('.common-slider-arrow').css({ 'top': (h1 + h2) / 2 - h3 });
    }).fotorama();


    $('.common-slider-arrow.left').click(function() {
        $(this).closest('.common-slider-wr').find('.slider_init--common-slider').data('fotorama').show('<');

    });
    $('.common-slider-arrow.right').click(function() {
        $(this).closest('.common-slider-wr').find('.slider_init--common-slider').data('fotorama').show('>');
    });

    //Программа обучения
    $('.course-program-item').click(function() {
        $(this).toggleClass('st-active');
        $(this).find('.course-program-text').stop().slideToggle('medium');
    });

    $('.certificate-box').click(function() {
        $('body').addClass('hidden');
        $('.certificate_popup').fadeIn();
    });

    $('.close_btn, .close_zone').click(function() {
        $('body').removeClass('hidden');
        $('.popup').fadeOut()
    });


    $('.tabs li').click(function() {
        if ($(this).hasClass('active')) return false;

        $(this).parents('.tabs').find('li').removeClass('active');
        $(this).addClass('active');
    });


    $('.clients-fotorama').fotorama({
        width: '100%',
        shadow: false,
        arrows: false,
        nav: false,
        loop: true
    });

    $('.clients-fotorama-wp .prev-arrow').click(function(event) {
         $('.clients-fotorama').data('fotorama').show('<');
    });
     $('.clients-fotorama-wp .next-arrow').click(function(event) {
         $('.clients-fotorama').data('fotorama').show('>');
    });




});








































$(function(){
/* обрабатываем клик по ссылка меню */
$('.header-nav-items a').click(function(){
    var index = parseInt($(this).data('index'));/* получаем индекс ссылки */
    console.log(index);
    var ot = $('.js-screen').eq(index).offset().top; /* получаем отступ сверху от нужного нам экрана*/
    var bt = ot - 60;
    // console.log(ot);
    $('body, html').animate({ /* анимируем страницу на отступ ot */
        scrollTop: bt}, 400);
});

$(function(){
/* обрабатываем клик по лого */
$('#registrationForm').click(function(){
    var ot = $('.registrationForm-wr').offset().top; //получаем отступ сверху от нужного нам экрана
    $('body, html').animate({ /* анимируем страницу на отступ ot */
        scrollTop: ot}, 400);
});

});


/* функция возвращает индекс текущего экрана */
// function currentScreen() {
//         var min = 1 / 0,
//             minIndex = 0;
//         $(".js-screen").each(function(i) {
//             var tTop = $(this).position().top,
//                 sTop = $(document).scrollTop(),
//                 current = parseInt(sTop - tTop);
//             current = Math.abs(current), 
//             min > current && (minIndex = i, min = current)
//         // console.log(current, i);
//         }); 

//         $(".js-screen").not($(".js-screen").eq(minIndex).addClass("active")).removeClass("active");
//         $(".header-nav-items").not($(".header-nav-items").eq(minIndex).addClass("active")).removeClass("active");
//         return minIndex;
//     }


/* обрабатываес скролл документа */
// $(document).scroll(function(event) {

//     $('.header-nav-items').removeClass('active').eq(currentScreen()).addClass('active'); /* меняем текущий пункт меню */

// });

});




function fixMenuUpdate(){
   if(jQuery(document).scrollTop() >= jQuery('.courseDirectionHeader-wr').offset().top){
    jQuery('.top-line-wrapper').addClass('show');
   } else {
    jQuery('.top-line-wrapper').removeClass('show');
   }
  }
  fixMenuUpdate();
jQuery(document).scroll(fixMenuUpdate);













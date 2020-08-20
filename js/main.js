$(document).ready(function () {
    //Кнопка прокрутки наверх
    $(window).scroll(function () {
        // Если отступ сверху больше 50px то показываем кнопку "Наверх"
        if ($(this).scrollTop() > 150) {
            $('.button-up').fadeIn();
        } else {
            $('.button-up').fadeOut();
        }
    });
    
    /** При нажатии на кнопку мы перемещаемся к началу страницы */
    $('.button-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    //wowJS
    new WOW().init();
    //slider
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.portfolio__pagination',
          bulletClass: 'portfolio__bullet',
          bulletActiveClass: 'portfolio__bullet--active',
          clickable: true,
        },
      });
});
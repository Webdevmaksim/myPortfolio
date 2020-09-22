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
        spaceBetween: 40,
      
        // If we need pagination
        pagination: {
          el: '.portfolio__pagination',
          bulletClass: 'portfolio__bullet',
          bulletActiveClass: 'portfolio__bullet--active',
          clickable: true,
        },
      });
    //Form validation
    $('.footer__form').validate({
        errorClass: "invalid",
        errorElement: "div",
        rules: {
            //error message to div
            // errorElement: "div",
            // simple rule, converted to {required:true}
            userName: {
                required: true,
                minlength: 2
            },
            userPhone: {
                required: true,
                minlength: 18
            },
            userMail: {
                required: true,
                email: true
            }
          },
        //messages
        messages: {
            userName: {
                required: "Пожалуйста представьтесь.",
                minlength: " Имя не короче двух букв",
            }, 
            userPhone: {
                required: "Пожалуйста укажите свой телефон.",
                minlength: "телефон не короче 9 цифр",
            },
            userMail: {
                required: " Пожалуйста введите email",
                email: "Почта в формате domain@mail.com",
            }
          },
          submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "../php/send.php",
                data: $(form).serialize(),
                success: function (response) {
                    tModal.toggleClass('t-modal--visible');
                    $(form)[0].reset();
                    ym('66611101', 'reachGoal', 'form-submit'); return true;
                },
                    error: function(response){
                    console.log('Ошибка запроса ' + response);
                }
            });
          }
    });
    //Phone mask
    $('[type=tel]').mask('+375(00) 000-00-00', {placeholder: '+375 ( __ ) ___-__-__'});
    //Thank u modal
    
     
        //Модальное окно благодарности
    var tModal = $('.t-modal'),
        TcloseBtn = $('.t-modal__close');

        TcloseBtn.on('click', function(){
          tModal.removeClass('t-modal--visible');
      });

      $(document).keydown(function(event) { 
        if (event.keyCode == 27) { 
        $('.t-modal').removeClass('t-modal--visible');
        }
        });
        //Закрытие на клик за пределами поля!!!
        $('.t-modal').click(function(e) {
          if ($(e.target).closest('.t-modal__dialog').length == 0){
            $(this).removeClass('t-modal--visible');					
          }
        });
});
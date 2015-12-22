var app = {

    init: function() {
        this.animate();
        this.scrollToBlock();
        this.popUp();
    },

    animate: function() {
        var scrollAnimation = this.scrollAnimation;
        var headerAnimation = this.headerAnimation;

        $(window).one('load', function() {
            headerAnimation();
            scrollAnimation();

            if ($(window).scrollTop() > 150) {
                $('.logo').addClass('logo-animated');
                $('.menu-wrapper').addClass('menu-wrapper-animated');
            }
        });
    },

    scrollAnimation: function() {
        var scroll;

        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            var btnpos = scroll + $('header').height() - $('.scroll-top').height();

            if (btnpos >= $('footer').offset().top - $('.scroll-top').height()) {

                btnpos = $('footer').offset().top - $('.scroll-top').outerHeight() - 10;
            }

            if (scroll > 150) {
                $('.logo').addClass('logo-animated');
                $('.menu-wrapper').addClass('menu-wrapper-animated');
                $('.scroll-top').fadeIn(500);
                $('.scroll-top').css({
                    top: btnpos
                });
            } else {
                $('.logo').removeClass('logo-animated');
                $('.menu-wrapper').removeClass('menu-wrapper-animated');
                $('.scroll-top').fadeOut();
            }
        });
    },

    scrollToBlock: function() {
        var element = $('.block-link');
        var scrollbtn = $('.scroll-top');

        scrollbtn.click(function() {
            $('html,body').animate({
                scrollTop: 0
            }, 1000, 'easeInOutSine');
        });

        element.click(function(e) {
            e.preventDefault();
            var link = $('.' + $(this).attr('href'));
            $('html,body').stop().animate({
                scrollTop: link.offset().top - 50
            }, 1500, 'easeInOutSine');
        });
    },

    headerAnimation: function() {
        $('.logo').stop().delay(300).animate({
            opacity: 0.8
        }, 1000, function() {
            var delay = 0;
            $('.global-nav ul li').each(function() {
                $(this).stop().delay(delay).animate({
                    marginTop: 0
                }, 300);
                delay += 100;
            });
        });
    },

    popUp: function() {
        var services = $('.service-content');
        var img_container = $('.img-container');
        var popup_container = $('.popup');
        var popup_content = $('.popup-content');

        services.click(function() {
            var data = $(this).find('.data').val();
            popup_container.addClass('text-popup');
            popup_content.append('<p class="data-content">' + data + '</p>');
            show_popup();
        });

        img_container.click(function() {
            var img_url = $(this).find('img').attr('src');
            popup_container.addClass('img-popup');
            popup_content.append('<img src=' + img_url + '>');
            show_popup(true);
        });

        $('.hover, .popup').click(function() {
            hide_popup();
        });

        function show_popup(is_img) {
            var extra = 100;

            if (is_img) {
                extra = 25;
            }

            $('.hover, .popup').fadeIn();
            $('#main').addClass('blur');

            $('.popup').css({
                top: $(window).scrollTop() + extra + 'px'
            });

            $('body').css({
                overflow: 'hidden'
            });
        }

        function hide_popup() {
            $('.hover, .popup').hide();
            $('#main').removeClass('blur');

            $('body').css({
                overflow: 'auto'
            });

            popup_content.empty();
            popup_container.removeClass('img-popup text-popup');
        }
    }
};

app.init();

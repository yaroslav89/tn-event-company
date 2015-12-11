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
        });
    },

    scrollAnimation: function() {
        var scroll;
        var val = 150;

        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            
            if (scroll > val) {
                $('.logo').addClass('logo-animated');
                $('.menu-wrapper').addClass('menu-wrapper-animated');
            } else {
                $('.logo').removeClass('logo-animated');
                $('.menu-wrapper').removeClass('menu-wrapper-animated');
            }
        });
    },

    scrollToBlock: function() {
        var element = $('.block-link');

        element.click(function(e) {
            e.preventDefault();
            var link = $('.' + $(this).attr('href'));
            $('html,body').animate({
                scrollTop: link.offset().top - 20
            }, 600);
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
        var item = $('.service-content');

        item.click(function() {
            var data = $(this).find('.data').val();
            var positionTop = $(window).scrollTop();

            $('.popup').css({
                top: positionTop + 200 + 'px'
            });

            $('.popup').find('.data-content').text(data);
            show();
        });

        $('.hover, .popup').click(hide);

        function show() {
            $('.hover, .popup').fadeIn();
            $('#main').addClass('blur');
            $('body').css({
                overflow: 'hidden'
            });
        }

        function hide() {
            $('.hover, .popup').fadeOut();
            $('#main').removeClass('blur');
            $('body').css({
                overflow: 'auto'
            });
        }
    }
};

app.init();

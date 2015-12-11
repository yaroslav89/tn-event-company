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
            var btnpos = scroll + $('header').height() - $('.scroll-top').height();

            if (btnpos > $('footer').offset().top) {
                btnpos = scroll + $('header').height() - $('.scroll-top').height() - $('footer').height();
            }

            if (scroll > val) {
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

        scrollbtn.click(function(){
            $('html,body').animate({
                scrollTop: 0
            },1000, 'easeInOutSine');
        });

        element.click(function(e) {
            e.preventDefault();
            var link = $('.' + $(this).attr('href'));
            $('html,body').stop().animate({
                scrollTop: link.offset().top - 30
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
        var item = $('.service-content');
        
        item.click(function() {
            var data = $(this).find('.data').val();
            var positionTop = $(window).scrollTop();

            $('.popup').find('.data-content').text(data);
            show();
        });

        $('.hover, .popup').click(function(){
            $('.popup').find('.data-content').text('');
            hide();
        });

        function show() {
            $('.hover, .popup').fadeIn();
            $('#main').addClass('blur');

            $('.popup').css({
                top: $(window).scrollTop() + 200 + 'px'
            });
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

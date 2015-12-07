var app = {

    menuScroll: function(val) {
        var flag = false;
        var scroll;

        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll > val) {
                if (!flag) {
                    $('.logo').addClass('logo-animated');

                    $('.menu-wrapper').addClass('menu-wrapper-animated');
                    flag = true;
                }
            } else {
                if (flag) {
                    $('.logo').removeClass('logo-animated');

                    $('.menu-wrapper').removeClass('menu-wrapper-animated');
                    flag = false;
                }
            }
        });
    },

    scrollToBlock: function() {
        var element = $('.block-link');
            element.click(function(e){
                e.preventDefault();
                var link = $('.' + $(this).attr('href'));
                $('html,body').animate({
                    scrollTop: link.offset().top - $('.menu-wrapper').height()
                },600);
            });
    },

    startAnimate: function() {
        $(window).one('load', function() {
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
        });
    }
};

app.scrollToBlock();
app.startAnimate();
app.menuScroll(100);

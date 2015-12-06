var app = {

    scroll: function(val) {
        var flag = false;
        var scroll;

        $(window).scroll(function() {
            scroll = $(window).scrollTop();

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
    
    scrollTo: function() {}
};

app.scroll(100);

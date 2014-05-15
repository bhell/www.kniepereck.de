// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
(function ($) {
    $.fn.stickyFooter = function (options) {
        var settings = $.extend({
            sticky: '#footer',
            padding: 0
        }, options);

        return this.each(function () {
            var container = $(this);
            var footer = $(settings.sticky, container);

            if (footer.length === 0) {
                return true;
            }

            var originalCss = {
                position: footer.css('position'),
                top: footer.css('top'),
                width: footer.css('width'),
                margin: footer.css('margin')
            };

            var footerHeight = footer.outerHeight();
            var windowHeight = $(window).height();
            var containerHeight = container.outerHeight();
            var documentHeight = $(document).height();
            var pageOffset = $(window).scrollTop() + settings.padding;

            $(window).resize(function () {
                footerHeight = footer.outerHeight();
                windowHeight = $(window).height();
                containerHeight = container.outerHeight();
                footer.css(originalCss);
            });

            $(window).scroll(function () {
                pageOffset = $(window).scrollTop() + settings.padding;
                var html = [];
                //var footerMarginBottom = footer.css('margin-bottom');
                html.push('po=' + pageOffset);
                html.push('wh=' + windowHeight);
                html.push('dh=' + documentHeight);
                html.push('fh=' + footerHeight);
                $(".pageFooter").replaceWith('<p class="pageFooter">' + html.join( ", " ) + '</p>');
                if (pageOffset < documentHeight) {
                    footer.css('position', 'fixed');
                    footer.css('bottom', 0);
                    //footer.css('margin-bottom', 0);
                    //-containerHeight + windowHeight + pageOffset);
                    //footer.css('-webkit-transform', 'translateY(' + (-containerHeight + windowHeight + pageOffset) + 'px)');
                    // -webkit-transform: translateY(5px);
                    // -moz-transform: translateY(5px);
                    // -ms-transform: translateY(5px);
                    // -o-transform: translateY(5px);
                    // transform: translateY(5px);
                    //alert('translateY(' + windowHeight + 'px);');
                    //footer.css('-webkit-transform', 'translateY(100px)');
                    //footer.css('margin-top', -containerHeight + windowHeight + pageOffset);
                } else {
                   footer.css(originalCss);
                }
            });
        });
    };
})(jQuery);
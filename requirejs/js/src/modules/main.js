require.config({
    baseUrl: './js/src/modules',
    paths: {
        jquery: '../../lib/jquery/jquery.min'
    }
});

require(['jquery', 'carousel', 'getAndWaterfallNews', 'goTop'], function ($, carousel, getAndWaterfallNews, goTop) {
    $('.navbar .navbar-nav').on('click', 'li', function () {
        $(this).addClass('active')
            .siblings('li').removeClass('active');
    });

    $('.carousel .image-wrap li').width($('body').width());
    carousel.init($('.carousel'), 3000)

    getAndWaterfallNews();

    goTop();
});
$(function () {
    let $images = $('.image-wrap img');
    let windowH = $(window).height();
    let imgH = $images.height();
    var timeID;
    $(window).on('scroll', function () {
        if(timeID) {
            clearTimeout(timeID);
        }
        timeID = setTimeout(function () {
            console.log(timeID)
            lazyRender();
        }, 300);
    })

    function isBeingShow($image) {
        var scrollTop = $(window).scrollTop();
        var offsetTop = $image.offset().top;
        return (offsetTop <= scrollTop + windowH) && (offsetTop + imgH > scrollTop);
    }

    function lazyRender() {
        $images.filter('[data-src]').each(function () {
            if(isBeingShow($(this))) {
                $(this).attr("src", $(this).attr("data-src"));
                $(this).removeAttr('data-src');
            }
        });
    }
    $(window).trigger('scroll');

});
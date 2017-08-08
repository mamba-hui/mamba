define(['jquery'], function ($) {
    function goTop() {
        let $node = $('<div class="goTop"></div>');
        $('body').append($node);
        let timeoutID;
        $(window).on('scroll', function () {
            timeoutID && clearTimeout(timeoutID);
            setTimeout(function () {
                document.body.scrollTop > 100 ? $node.show() : $node.hide();
            }, 200)
        });
        $node.click(function () {
            document.body.scrollTop = 0;
        })
    }


    return goTop;
})
$(function () {
   let $items = $('.items li');
   $(window).on('resize', function () {
       waterfull($items);
   });
   waterfull($items);

    function waterfull($nodes) {
        let columnW = $nodes.outerWidth(true),
            parentW = $nodes.parent().width(),
            columnNum = parseInt(parentW / columnW);
        console.log(parentW);
        let columnH = [];
        // 初始化每栏高度
        for(let i = 0; i < columnNum; i++) {
            columnH[i] = 0;
        }
        $nodes.each(function () {
            let minHeight = Math.min.apply(Math, columnH),
                idx = columnH.indexOf(minHeight);
            $(this).css({
                'left': parseInt(parentW / columnNum * (idx + 0.5) - columnW / 2),
                'top' : minHeight
            });
            columnH[idx] += $(this).outerHeight(true);
        });
    }
});

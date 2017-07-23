$(function () {
    var $imgWrap = $('.carousel .images-wrap'),
        $imgs = $imgWrap.find('li'),
        $bullets = $('.bullet li'),
        $next = $('.arrow.next'),
        imgW = $imgs.width(),     //图片宽度
        imgCount = $imgs.length,    //图片数量
        idx = 0,  // 跟随显示图片的索引
        isAnimated = false;

    // 添加第一张和最后一张，并设置图片容器的初始位置和宽度
    $imgWrap.append($imgs.eq(0).clone())
        .prepend($imgs.last().clone())
        .css({left: -imgW, width: imgW * (imgCount + 2)});

    // 当鼠标放在轮播上时，取消自动播放
    $('.carousel').hover(stopAuto, function () {
    	timeoutID = setTimeout(autoPlay, 3000);
    });
    // autoplay
    var timeoutID = setTimeout(autoPlay, 3000);
    function autoPlay() {
        play(1);
        timeoutID = setTimeout(autoPlay, 3000);
    }
    function stopAuto() {
        clearTimeout(timeoutID);
    }
    // 前进事件
    $('.arrow.prev').click(function () {
        play(-1);
    });
    // 后退事件
    $next.click(function () {
        play(1);
    });
    // 直接跳转事件
    $bullets.parent().on('click', 'li', function () {
       play($(this).index() - idx);
    });

    // 滚动动画
    function play(num) {
        if(!isAnimated) {
            isAnimated = true;
            $imgWrap.animate({left: '-=' + num * imgW}, function () {
            	idx = (idx + num + imgCount) % imgCount;
            	console.log(idx);
                $imgWrap.css({left: -imgW * (idx + 1)});
            	setBullet();
            	isAnimated = false;
            });
        }
    }
    // bullets跟随滚动
    function setBullet() {
        $bullets.removeClass('active')
            .eq(idx).addClass('active');
    }
});
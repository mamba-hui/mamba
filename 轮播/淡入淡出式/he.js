$(function () {
    var idx = 0,    //跟随显示图片的索引
        isAnimated = false;    //跟随当前是否处于动画中
    var $carousel = $('.carousel'),
        $bullets = $carousel.find('.bullets'),
        $imgs = $('.carousel .imgs-ct li');
    var imgCount = $imgs.length;
// 初始化轮播效果
    play(0);
// 一些绑定函数
    $carousel.find('.prev').click(function () {
        play(-1);
    });
    $carousel.find('.next').click(function () {
        play(1);
    });
    $bullets.on('click', 'li', function () {
        play($(this).index() - idx);
    });
// 当鼠标放在轮播上时，取消自动播放
    $carousel.hover(stopAuto, function () {
        timeoutID = setTimeout(autoPlay, 2000);
    });
// Autoplay
    var timeoutID = setTimeout(autoPlay, 2000);
    function autoPlay() {
        play(1);
        timeoutID = setTimeout(autoPlay, 2000);
    }
    function stopAuto() {
        clearTimeout(timeoutID);
    }
// 主体轮播函数
    function play(num) {
        if(!isAnimated) {
            isAnimated = true;
            idx = (idx + num + imgCount) % imgCount; //注意利用取余方法简化idx值的计算
            console.log(idx);
            $imgs.fadeOut(500)
                .eq(idx).fadeIn(500, function () {
                setbullet();
                isAnimated = false;
            });
        }
    }
// bullets样式变换
    function setbullet() {
        $('.bullets li').removeClass('active')
            .eq(idx).addClass('active');
    }
});
$(function () {
    var $news = $('.news'),
        $loadMore = $('.container .load-more'),
        windowH = $(window).height(),
        nodeH = $loadMore.height(),
        idx = 0,   // 新闻的索引值
        len = 3,    // 每次获取个数
        isloading = false,     //是否正在获取
        isNoMore = false;    //是否没有新闻可加载
    getNews();
    $(window).on('scroll', function() {
            checkNews();
        }
    );
    
    function checkNews() {
        if(!isloading && !isNoMore && isInView($loadMore)) {
            getNews();
        }
    }
    
    function getNews() {
        isloading = true;
        $.ajax({
            url: './getNews',
            type: 'get',
            dataType: 'json',
            data: {
                idx: idx,
                len: len
            },
            success: function (json) {
                isloading = false;
                if(json.status === 0) {
                    idx += len;
                    appendHtml(json.data);
                    checkNews();
                } else {
                    console.log('获取新闻出错');
                }
            },
            error: function () {
                isloading = false;
                console.log('系统异常');
            }
        });
    }
    
    function isInView($node) {
        var scrollTop = $(window).scrollTop();
        var offsetTop = $node.offset().top;
        return (offsetTop < scrollTop + windowH) && (offsetTop + nodeH > scrollTop);
    }

    function appendHtml(news) {
        console.log(idx, news.length);
        if(news.length === 0) {
            isNoMore = true;
            $('.container>p').css('visibility', 'visible');
            return;
        }
        var html = '';
        news.forEach(function (item) {
            html += '<li>';
            html += '<a class="clearfix" href="' + item.link + '">';
            html += '<div class="image-wrap"><img src="' + item.img + '"></div> ';
            html += '<h2>' + item.title + '</h2>';
            html += '<p>' + item.brif + '</p>';
            html += '</a></li>'
        });
        $news.append(html);
    }
});



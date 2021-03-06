$(function () {
    let $newsCt = $('.waterfall-ct .news'),
        $loadMore = $('#load-more');
    let curPage = 1,
        perPageCount = 5,
        isLoading = false,
        timeoutID;

    (function () {
        let $waterfallDemo = $('<li id="hide"></li>');
        $newsCt.append($waterfallDemo);
        waterfall($waterfallDemo);
        getNews();
    })();

    $(window).on({
        'scroll': function () {
            if(timeoutID) {
                clearTimeout(timeoutID);
            }
            timeoutID = setTimeout(getNews, 300);
        },
        'resize': function () {
            waterfall($('.item'));
            getNews();
        }
    });

    function getNews() {
        if(!isLoading && isInview($loadMore)) {
            isLoading = true;
            $.ajax({
                url: 'https://platform.sina.com.cn/slide/album_tech',
                type: 'get',
                dataType: 'jsonp',
                jsonp: 'jsoncallback',
                data: {
                    app_key: '1271687855',
                    page: curPage,
                    num: perPageCount
                }
            }).done(function (ret) {
                if(ret && ret.status && ret.status.code === '0') {
                    placeAndWaterfall(ret.data);
                }else {
                    console.log('数据错误');
                    curPage++;
                    isLoading = false;
                }
            }).fail(function () {
                alert('请求发送错误');
            })
        }
    }

    function placeAndWaterfall(data) {
        let $nodeList = getNodes(data);
        let defers = [];
        $nodeList.find('img').each(function () {
            let defer = $.Deferred();
            $(this).load(function () {
                defer.resolve();
            });
            defers.push(defer)
        });
        $.when.apply(null, defers).done(function () {
            $newsCt.append($nodeList);
            waterfall.part($nodeList);
            curPage++;
            isLoading = false;
            getNews();
        }).fail(function () {
            console.log('加载图片失败');
            curPage++;
            isLoading = false;
            getNews();
        })
    }

    function waterfall($nodes) {
        let $parentnode = $nodes.parent(),
            colWidth = $nodes.outerWidth(true),
            parentWidth = $parentnode.innerWidth(),
            colCount = parseInt(parentWidth / colWidth),
            colHeight = [];
        for(let i = 0; i < colCount; i++) {
            colHeight[i] = 0;
        }
        waterfall.part = function ($nodes) {
            $nodes.each(function () {
                let minHeight = Math.min.apply(Math, colHeight),
                    idx = colHeight.indexOf(minHeight);
                $(this).css({
                    'top': minHeight,
                    'left': parseInt(parentWidth/colCount*(idx+0.5) - colWidth/2)
                });
                colHeight[idx] += $(this).outerHeight(true);
                $parentnode.height(Math.max.apply(Math, colHeight));
            });
        };
        waterfall.part($nodes);
    }

    function getNodes(data) {
        let html = '';
        data.forEach(function (item) {
            html += '<li class="item">';
            html += '<a class="img-ct" href="' + item.url + '">';
            html += '<img src="' + item.img_url + '">';
            html += '</a>';
            html += '<h4><a href="' + item.url + '">' + item.short_name + '</a></h4>';
            html += '<p class="brief">' + item.short_intro + '</p></li>';
        });
        return $(html);
    }

    function isInview($node) {
        let top = $node[0].getBoundingClientRect().top,
            winHeight = window.innerHeight;
        return top - winHeight < 50;
    }
});

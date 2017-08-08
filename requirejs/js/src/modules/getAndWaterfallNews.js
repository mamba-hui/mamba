define(['jquery', 'waterfall'], function ($, waterfall) {
    let $newsCt = $('.waterfall-ct .news'),
        $loadMore = $('#load-more');
    let curPage = 1,
        perPageCount = 6,
        isLoading = false;


    let $waterfallDemo = $('<li id="hide"></li>');
    $newsCt.append($waterfallDemo);
    let waterfallObj = waterfall($waterfallDemo);

    $loadMore.click(function () {
        checkNews();
    });

    function checkNews() {
        if(!isLoading) {
            isLoading = true;
            getNews();
        }
    }

    function getNews() {
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

    function placeAndWaterfall(data) {
        let $nodeList = getNodes(data);
        let defers = [];
        $nodeList.find('img').each(function () {
            let defer = $.Deferred();
            $(this).on('load' ,function () {
                defer.resolve();
            });
            defers.push(defer)
        });
        $.when.apply(null, defers).done(function () {
            $newsCt.append($nodeList);
            waterfallObj.part($nodeList);
            curPage++;
            isLoading = false;
        }).fail(function () {
            console.log('加载图片失败');
            curPage++;
            isLoading = false;
        })
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

    return checkNews;
})
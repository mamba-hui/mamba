$(function () {
    var current = 3;

    $('#news').on({
        'mouseenter': function () {
            $(this).addClass('hover');
        },
        'mouseleave': function () {
            $(this).removeClass('hover');
        }
    }, 'li');

    $('#loadmore').click(function (e) {
        e.preventDefault();
        if ($(this).data('isLoading')) {
            return;
        }
        $(this).data('isLoading', true)
            .html('<img src="./image/loading.gif">');

        $.ajax({
            url: './loadmore',
            type: 'get',
            dataType: 'json',
            data: {
                start: current,
                len: 6
            },
            success: function (json) {
                onSuccess(json);
            },
            error: function (json) {
                onError(json);
            }
        });
    });

    function onSuccess(json) {
        if (json.status === 1) {
            append(json.data);
            current += 6;
        } else {
            alert('获取数据失败');
        }
        $('#loadmore').data('isLoading', false)
            .text('加载更多');
    }

    function onError(json) {
        alert('系统异常');
        $('#loadmore').data('isLoading', false)
            .text('加载更多');
    }

    function append(data) {
        var html = "";
        $.each(data, function (index, item) {
            html += "<li>" + item + "</li>";
        });
        $('#news').append(html);
    }
});
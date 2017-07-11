var items = document.querySelector('#items');
var btn = document.querySelector('#load-more .btn');
var index = 3,
    length = 5,
    isLoading = false;

btn.addEventListener('click', function (e) {
    e.preventDefault();      //阻止a链接的默认跳转
    if (isLoading) {           // 如果正在加载，不再发送请求
        return;
    }
    isLoading = true;         //即将开始创建和发送请求，开启加载状态
    ajax({
        type: 'get',
        url: '/readMore',
        successFn: function (resObj) {
            var fragment = document.createDocumentFragment();
            for (var i = 0; i < resObj.length; i++) {
                var item = document.createElement('li');
                item.innerText = resObj[i];
                fragment.appendChild(item);
            }
            items.appendChild(fragment);
            index += length;
            isLoading = false;            //此时，从服务器端收到的数据被成功处理，加载完成
        },
        errorFn: errorFn,
        data: {
            index: index,
            length: length
        }
    });
    console.log('sss');
});

function errorFn(statusCode) {
    console.log('产生错误', statusCode);
}

function ajax(obj) {
    var type = obj.type || 'get';           //传输方法
    var successFn = obj.successFn || function () {
        };
    var errorFn = obj.errorFn || function () {
        };
    var acceptDataType = obj.acceptDataType || 'json';     // 从服务器端传来的数据格式
    var data = obj.data || {};          // 向服务器发送的数据，
    var dataStr = '';         //查询字符串
    for (var key in data) {
        dataStr += key + '=' + data[key] + '&';
    }
    dataStr = dataStr.slice(0, dataStr.length - 1);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 304) {
                // 如果数据类型是text，则不解析
                if (acceptDataType === 'text') {
                    successFn(xhr.responseText);
                } else if (acceptDataType === 'json') {
                    var resObj = JSON.parse(xhr.responseText);
                    successFn(resObj);
                }
            } else {
                errorFn(xhr.status);
            }
        }
    };
    if (type.toLowerCase() === 'get') {
        xhr.open('get', obj.url + '?' + dataStr, true);
        xhr.send(null);
    } else if (type.toLowerCase() === 'post') {
        xhr.open('post', obj.url, true);
        xhr.send(dataStr);
    }
}
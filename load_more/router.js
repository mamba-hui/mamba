router.get('/readMore', function(req, res) {
    var index = req.query.index // 通过 req.query获取请求参数
    var length = req.query.length;

    //根据请求参数mock数据
    var data = [];
    for(var i = 0; i < length; i++) {
        data.push('内容' + (parseInt(index) + i));
    }
    setTimeout(function () {
        res.send(JSON.stringify(data));
    }, 3000);
});
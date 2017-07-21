/**
 * Created by mamba on 2017/7/12.
 */
router.get('/loadmore', function (req, res) {
    var start = req.query.start;
    var len = req.query.len;

    var data = [];
    for (var i = 0; i < len; i++) {
        data.push('内容' + (parseInt(start) + i))
    }

    setTimeout(function () {
        res.send({"data": data, "status": 1});
    }, 3000);
})
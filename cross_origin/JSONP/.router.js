function setRouter(app){ 
 var router = app; 

/**
 * Created by mamba on 2017/7/13.
 */
router.get('/getNews', function(req, res) {
    var callback = req.query.callback; // 通过 req.query获取请求参数

    var news = [
        "第11日前瞻：中国冲击4金 博尔特再战200米羽球",
        "正直播柴飚/洪炜出战 男双力争会师决赛",
        "女排将死磕巴西！郎平安排男陪练模仿对方核心",
        "没有中国选手和巨星的110米栏 我们还看吗？",
        "中英上演奥运金牌大战",
        "博彩赔率挺中国夺回第二纽约时报：中国因对手服禁药而丢失的奖牌最多",
        "最“出柜”奥运？同性之爱闪耀里约",
        "下跪拜谢与洪荒之力一样 都是真情流露"
    ];
    //根据请求参数mock数据
    var data = [];
    for (var i = 0; i < 3; i++) {
        var index = Math.floor(Math.random() * news.length);
        data.push(news[index]);
        news.splice(index, 1);
    }
    if (callback) {           //查看查询字符串中是否包含callback
        res.send(callback + '(' + JSON.stringify(data) + ')'); //注意一定把数据转化为json字符串
    } else {
        res.send(data)
    }
});}
 module.exports.setRouter = setRouter
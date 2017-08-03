let exposure = (function () {
    let winHeight = window.innerHeight;

    function Exposure($nodes, callback, onlyonce) {
        this.$nodes = $nodes;
        this.callback = callback;
        this.onlyonce = onlyonce;
        this.bind();
        this.checkShow();
    }

    Exposure.prototype.bind = function () {
        let self = this;
        $(window).on('scroll', function () {
            if(self.timeoutID) clearTimeout(self.timeoutID);
            self.timeoutID = setTimeout(function () {
                self.checkShow()
            }, 200)
        })
    }
    Exposure.prototype.checkShow = function () {
        let self = this;
        this.$nodes.each(function () {
            let $cur = $(this);
            if(self.isInView($cur)) {
                switch (self.onlyonce) {
                    case true:
                        if(!self.isLoaded($cur)) {
                            self.callback($cur)
                            $cur.data('loaded', true)
                        }
                        break;
                    case false:
                        self.callback($cur)
                        break;
                }
            }
        })
    }
    Exposure.prototype.isInView = function ($node) {
        let nodeHeight = $node.outerHeight();
        let offsetTop = $node.offset().top;
        let scrollTop = $(window).scrollTop();
        return offsetTop < winHeight + scrollTop && offsetTop + nodeHeight > scrollTop;
    }
    Exposure.prototype.isLoaded = function ($node) {
        return $node.data('loaded') || false;
    }
    return {
        one: function ($nodes, callback) {
            new Exposure($nodes, callback, true)
        },
        init: function ($nodes, callback) {
            new Exposure($nodes, callback, false)
        }
    }
})()

exposure.one($('.images img'), function ($node) {
    $node.attr('src', $node.data('src'))
});
exposure.init($('.text'), function ($node) {
    $node.text($node.text() + '哈')
})
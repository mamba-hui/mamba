define(['jquery'], function ($) {
    function Waterfall($nodes) {
        this.$nodes = $nodes;
        this.$parentnode = $nodes.parent();
        this.init()
        this.part($nodes)
    }

    Waterfall.prototype.init = function () {
        this.colWidth = this.$nodes.outerWidth(true);
        this.parentWidth = this.$parentnode.innerWidth();
        this.colCount = parseInt(this.parentWidth / this.colWidth);
        this.colHeight = [];
        for(let i = 0; i < this.colCount; i++) {
            this.colHeight[i] = 0;
        }
    };

    Waterfall.prototype.part = function ($nodes) {
        this.$nodes = $nodes;
        let self = this;
        this.$nodes.each(function () {
            let minHeight = Math.min.apply(null, self.colHeight),
                idx = self.colHeight.indexOf(minHeight);
            $(this).css({
                top: minHeight,
                left: (self.parentWidth / self.colCount * (idx + 0.5) - self.colWidth / 2)
            });
            self.colHeight[idx] += $(this).outerHeight(true);
            self.$parentnode.height(Math.max.apply(null, self.colHeight));
        })
    };

    return  function ($nodes) {
            return new Waterfall($nodes);
        };
});
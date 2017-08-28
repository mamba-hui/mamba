import $ from 'jquery'

class Waterfull {
    constructor($nodes) {
        this.$nodes = $nodes;
        this.$parentnode = $nodes.parent();
        this.init();
        this.push($nodes);
    }
    init() {
        this.colWidth = this.$nodes.outerWidth(true);
        this.parentwidth = this.$parentnode.width();
        this.colCount = Math.floor(this.parentwidth / this.colWidth);
        this.colHeight = new Array(3).fill(0);
    }
    push($nodes) {
        $nodes.each((i, node) => {
            let minHeight = Math.min(...this.colHeight),
                idx = this.colHeight.indexOf(minHeight);
            $(node).css({
                top: minHeight,
                left: (this.parentwidth / this.colCount * (0.5 + idx) - this.colWidth/2)
            });
            this.colHeight[idx] += $(node).outerHeight(true);
            this.$parentnode.height(Math.max(...this.colHeight));
        })
    }
}
export default Waterfull;
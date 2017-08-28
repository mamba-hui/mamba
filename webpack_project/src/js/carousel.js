import $ from 'jquery'
import css from '../css/carousel-module.css';

class Carousel {
    constructor($ct, interval) {
        this.interval = interval;
        this.$ct = $ct;
        this.createDom();
        this.init();
        this.bind();
        this.autoplay();
    }
    createDom() {
        let template = `
            <ul class=${css.imageWrap}><li></li><li></li><li></li><li></li><li></li></ul>
            <div class=\"${[css.arrow, css.prev].join(' ')}\">&lt;</div>
            <div class=\"${[css.arrow, css.next].join(' ')}\">&gt;</div>
            <ul class=${css.indicator}>
                <li class=${css.active}></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        `;
        this.$ct.html(template);
        this.$imgWrap = this.$ct.find('.' + css.imageWrap);
        this.$imgs = this.$imgWrap.children();
        this.$prevBtn = this.$ct.find('.' + css.prev);
        this.$nextBtn = this.$ct.find('.' + css.next);
        this.$indicator = this.$ct.find('.' + css.indicator);
        this.imgCount = this.$imgs.length;
        this.$ct.addClass(css.carousel);
        this.$imgWrap.prepend(this.$imgs.last().clone())
            .append(this.$imgs.first().clone())
    }
    init() {
        this.imgWidth = this.$imgWrap.find('li').width(this.$ct.width()).width();
        this.$imgWrap.css({
                'left': -this.imgWidth,
                'width': this.imgWidth * (this.imgCount + 2)
            });
        this.idx = 0;
        this.isAinmated = false;
    }
    bind() {
        let self = this;
        $(window).on('resize', () => {
            this.init();
        })
        this.$prevBtn.click(() => {
            this.checkPlay(-1)
        });
        this.$nextBtn.click(() => {
            this.checkPlay(1)
        });
        this.$indicator.on('click', 'li', function () {
            self.checkPlay($(this).index() - self.idx)
        });
    }
    checkPlay(num) {
        if(!this.isAinmated) {
            this.isAinmated = true
            this.play(num)
        }
    }
    play(num) {
        this.$imgWrap.animate({ 'left': '-=' + this.imgWidth * num }, () => {
            this.idx = (this.idx + num + this.imgCount) % this.imgCount;
            this.$imgWrap.css({ 'left': -this.imgWidth * (this.idx + 1) });
            this.setIndicator();
            this.isAinmated = false;
        })
    }
    setIndicator() {
        this.$indicator.find('li').removeClass(css.active)
            .eq(this.idx).addClass(css.active);
    }
    autoplay() {
        this.timeoutID = setTimeout(() => {
            this.checkPlay(1);
            this.autoplay();
        }, this.interval)
    }
    stopAuto() {
        clearTimeout(this.timeoutID);
    }
}

export default Carousel;
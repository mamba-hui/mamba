let carousel = (function () {
    function Carousel($ct, interval) {
        this.interval = interval
        this.$ct = $ct
        this.$imgWrap = $ct.find('.image-wrap')
        this.$imgs = this.$imgWrap.children()
        this.$prevBtn = $ct.find('.prev')
        this.$nextBtn = $ct.find('.next')
        this.$indicator = $ct.find('.indicator')

        this.imgWidth = this.$imgs.width()
        this.imgCount = this.$imgs.length
        this.idx = 0
        this.isAnimated = false

        this.init()
        this.bind()
    }

    Carousel.prototype.init = function () {
        this.$imgWrap.prepend(this.$imgs.last().clone())
            .append(this.$imgs.first().clone())
            .css({
                left: -this.imgWidth,
                width: (this.imgCount + 2) * this.imgWidth
            })
    }

    Carousel.prototype.bind = function () {
        let self = this;
        this.$prevBtn.click(function () {
            self.checkPlay(-1)
        })
        this.$nextBtn.click(function () {
            self.checkPlay(1)
        })
        if (this.$indicator) {
            this.$indicator.on('click', 'li', function () {
                self.checkPlay($(this).index() - self.idx)
            })
        }
        if (this.interval) {
            this.autoplay()
            this.$ct.hover(this.stopAuto.bind(this), this.autoplay.bind(this))
        }
    }

    Carousel.prototype.checkPlay = function (num) {
        if (!this.isAnimated) {
            this.isAnimated = true
            this.play(num)
        }
    }

    Carousel.prototype.play = function (num) {
        let self = this
        this.$imgWrap.animate({ left: '-=' + self.imgWidth * num }, function () {
            self.idx = (self.idx + num + self.imgCount) % self.imgCount
            self.$imgWrap.css({ left: -self.imgWidth * (self.idx + 1) })
            self.$indicator && self.setIndicator()
            self.isAnimated = false
        })
    }

    Carousel.prototype.setIndicator = function () {
        this.$indicator.find('li').removeClass('active')
            .eq(this.idx).addClass('active')
    }

    Carousel.prototype.stopAuto = function () {
        clearTimeout(this.timeoutID)
    }

    Carousel.prototype.autoplay = function () {
        this.timeoutID = setTimeout(() => {
            this.checkPlay(1)
            this.autoplay()
        }, this.interval)
    }

    return {
        init: function ($ct, interval) {
            $ct.each(function () {
                new Carousel($(this), interval)
            })
        }
    }
})()

carousel.init($('.carousel'), 2000)

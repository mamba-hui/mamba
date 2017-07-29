$(function () {
    function Barrel($ct) {
        this.$ct = $ct;
        this.ctWidth = this.$ct.width();
        this.imgRow = [];
        this.imgRow.width = 0;
        this.isLoading = false;
        // 可修改部分
        this.loadMore = document.querySelector('.load-more');
        this.baseHeigh = 120;
        this.imgSpace = 10;
        this.imgNum = 8 ;
        this.bindEvent();

    }

    Barrel.prototype = {
        constructor: Barrel,

        bindEvent: function () {
            let self = this;
            let timeoutID;
            $(window).on('scroll', function () {
                if (timeoutID) {
                    clearTimeout(timeoutID);
                }
                timeoutID = setTimeout(function () {
                    self.init();
                },300)
            })
        },

        init: function () {
            if(this.isLoading === false && this.isInView(this.loadMore)) {
                this.isLoading = true;
                let imgList = [], deferList = [],
                    imgUrls = this.getImgUrl();
                imgUrls.forEach((item) => {
                    let defer = new $.Deferred();
                    deferList.push(defer);
                    let img = new Image();
                    img.src = item;
                    img.addEventListener('load', () => {
                        img.dataset.baseWidth = this.baseHeigh * img.width / img.height;
                        imgList.push(img);
                        defer.resolve();
                    });
                });
                $.when.apply(null, deferList).done(() => {
                    this.barrelLayout(imgList);
                    this.isLoading = false;
                    this.init();
                });
            }
        },

        barrelLayout: function (imgList) {
            imgList.forEach((img) => {
                let imgTrueWidth = +img.dataset.baseWidth + this.imgSpace;
                if(this.imgRow.width + imgTrueWidth <= this.ctWidth) {
                    this.imgRow.push(img);
                    this.imgRow.width += imgTrueWidth;
                } else {
                    this.appendNode(this.imgRow);
                    this.imgRow = [];
                    this.imgRow.width = 0;
                }
            });

        },

        appendNode: function (imglist) {
            let spaceWidth = imglist.length * this.imgSpace;
            let height = (this.ctWidth - spaceWidth) / (imglist.width - spaceWidth) * this.baseHeigh;
            let $imgRow = $('<div class="img-row clearfix"></div>');
            imglist.forEach((img) => {
                $(img).height(height);
                let $imgBox = $('<a class="img-box" href="javascript:void(0)">');
                $imgBox[0].appendChild(img);
                $imgRow.append($imgBox);
            });
            this.$ct.append($imgRow);
        },

        getImgUrl: function () {
            let width, height, color,
                urls = [];
            for(let i = 0; i < this.imgNum; i++) {
                width = Math.floor(Math.random()*200 + 200);
                height = Math.floor(Math.random()*60 + 120);
                color = Math.random().toString(16).slice(2, 8);
                urls.push(`https://via.placeholder.com/${width}x${height}/${color}/fff`)
            }
            return urls;
        },

        isInView: function (node) {
            let top = node.getBoundingClientRect().top;
            let winHeight = window.innerHeight;
            return top - winHeight < 300;
        }
    };

   let barrel1 = new Barrel($('.img-container'));
   barrel1.init();
});
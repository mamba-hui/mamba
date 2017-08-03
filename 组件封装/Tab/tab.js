let tab = (function () {
    function Tab($tab) {
        this.$header = $tab.find('.tab-header');
        this.$headers = this.$header.find('li');
        this.$bodise = $tab.find('.tab-body li');
        this.bind()
    }

    Tab.prototype.bind = function () {
        let self = this;
        this.$header.on('click', 'li', function () {
            $(this).addClass('active')
                .siblings('li').removeClass('active');
            self.$bodise.removeClass('active')
                .eq($(this).index()).addClass('active');
        })
    }

    return {
        init: function ($tabs) {
            $tabs.each(function () {
                new Tab($(this))
            })
        }
    }
})()

tab.init($('.tab'))
function Dialog() {
    this.opts = null;
    this.$dialog = null;

    this.createDialog();
    this.bind();
}

Dialog.prototype = {
    constructor: Dialog,

    defaultOpts: {
        title: '',
        message: '',
        isShowCloseBtn: true,
        isShowConfirmBtn: false,
        onclose: function () {},
        onconfirm: function () {}
    },

    createDialog: function () {
        let tpl = '<div class="dialog"><div class="dialog-box">' +
            '<div class="dialog-header"><h3></h3>' +
            '<span class="btn-close">×</span></div>' +
            '<div class="dialog-content"></div>' +
            '<div class="dialog-footer">' +
            '<div class="btn btn-close">取消</div><div class="btn btn-confirm">确定</div>' +
            '</div></div></div>';
        this.$dialog = $(tpl);
    },

    open: function (opts) {
        this.setOpts(opts);
        this.setDialog();
        this.appendDialog();
    },

    setOpts: function (opts) {
        if (typeof opts === 'string') {
            this.opts = $.extend({}, this.defaultOpts, {message: opts});
        } else if (typeof opts === 'object') {
            this.opts = $.extend({}, this.defaultOpts, opts);
        }
    },

    setDialog: function () {
        let $dialog = this.$dialog,
            opts = this.opts;
        $dialog.find('.dialog-header h3').text(opts.title);
        $dialog.find('.dialog-content').html(opts.message);
        !opts.title && $dialog.find('.dialog-header').remove();
        !opts.isShowCloseBtn && $dialog.find('.dialog-footer .btn-close').remove();
        !opts.isShowConfirmBtn && $dialog.find('.dialog-footer .btn-confirm').remove();
    },

    appendDialog: function () {
        $('body').append(this.$dialog);
    },

    bind: function () {
        let self = this,
            $dialog = this.$dialog;
        $dialog.find('.btn-close').on({
            'click': function () {
                self.opts.onclose();
                $dialog.remove();
            },
            'mousedown': function (e) {
                e.stopPropagation();
            }
        });
        $dialog.find('.btn-confirm').on({
            'click': function () {
                self.opts.onconfirm();
                $dialog.remove();
            },
            'mousedown': function (e) {
                e.stopPropagation();
            }
        });
        $dialog.on({
            'mousedown': function (e) {
                let evtX = e.pageX - $dialog.offset().left;
                let evtY = e.pageY - $dialog.offset().top;
                $dialog.addClass('draggable').data('evtPos', {
                    x: evtX,
                    y: evtY
                });
            },
            'mousemove': function (e) {
                $dialog.data('evtPos') && $dialog.offset({
                    top: e.pageY - $dialog.data('evtPos').y,
                    left: e.pageX - $dialog.data('evtPos').x
                })
            },
            'mouseup': function () {
                $dialog.data('evtPos') && $dialog.removeClass('draggable').removeData('evtPos');
            }
        })
    }
};



$('#open1').on('click', function() {
    var dialog1 = new Dialog();
    dialog1.open('hello, 这里是Dialog');
});

$('#open2').on('click', function() {
    var dialog2 = new Dialog();
    dialog2.open('<a href="http://jirengu.com">Dialog</a>');
});

$('#open3').on('click', function() {
    var dialog3 = new Dialog();
    dialog3.open({
        title: '欢迎来到Dialog',
        message: 'hello',
        isShowCloseBtn: true,
        isShowConfirmBtn: true,
        onclose: function() {
            alert('close')
        },
        onconfirm: function() {
            alert('确定');
        }
    });
});

var tpl = '<ul><li>列表1</li><li>列表2</li><li>列表1</li><li>列表1</li></ul>';
$('#open4').on('click', function() {
    var dialog4 = new Dialog();
    dialog4.open({
        title: '欢迎来到Dialog',
        message: tpl,
        isShowCloseBtn: true,
        isShowConfirmBtn: true,
        onclose: function() {
            alert('close')
        },
        onconfirm: function() {
            alert('确定');
        }
    });
});
$('#open5').on('click', function() {
    var dialog5 = new Dialog();
    dialog5.open({
        title: '欢迎来到Dialog',
        message: 'hello',
        isShowCloseBtn: false,
        isShowConfirmBtn: false
    });
});

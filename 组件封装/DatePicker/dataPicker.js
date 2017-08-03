let calendar = (function () {
    function Calendar($ct) {
        this.$ct = $ct;
        // 做数据的初始化
        this.init();
        // 初步渲染
        this.render();
        this.setData();
        this.bind();
    }

    Calendar.prototype = {
        init: function () {
            let date = this.$ct.data('init');
            this.date = date ? new Date(date) : new Date();
            this.watchDate = date ? new Date(date) : new Date();
            let dateObj = this.getYYMMDD(this.date);
            this.dateStr = dateObj.yy + '/' + dateObj.mm + '/' + dateObj.dd;
        },

        render: function () {
            let tpl = '<div class="header">' +
                '<span class="arrow prev"></span><span class="cur"></span><span class="arrow next"></span>' +
                '</div>' +
                '<table class="panel"><thead><tr>' +
                '<th>日</th> <th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th>' +
                '</tr></thead><tbody></tbody></table>';
            this.$calendar = $(tpl);
        },

        bind: function () {
            let self = this;
            this.$calendar.find('.prev').click(function () {
                self.watchDate = self.getMonth(-1);
                self.setData();
            });
            this.$calendar.find('.next').click(function () {
                self.watchDate = self.getMonth(1);
                self.setData();
            });
        },

        setData: function () {
            let dateArr = this.getData(),
                tpl = '';
            this.$calendar.find('.cur').text(this.watchDate.getFullYear() + '年' + (this.watchDate.getMonth() + 1) + '月');
            dateArr.forEach((item, idx) => {
                let dateStr = item.date.yy + '/' + item.date.mm + '/' + item.date.dd;
                if (idx % 7 === 0) {
                    tpl += '<tr>'
                }
                tpl += '<td class="' + item.type + '-month ';
                if (dateStr === this.dateStr) {
                    tpl += 'cur-date';
                }
                tpl += '" data-date="' + dateStr + '">';
                tpl += item.date.dd + '</td>';
                if (idx % 7 === 6) {
                    tpl += '</tr>'
                }
            });
            this.$calendar.find('tbody').html(tpl);
            this.$ct.append(this.$calendar);
        },

        getData: function () {
            let firstday = this.getFirstday(),
                lastday = this.getLastday(),
                arr = [];
            for (let i = firstday.getDay(); i > 0; i--) {
                let d = new Date(firstday.getTime() - 86400000 * i);
                arr.push({type: 'pre', date: this.getYYMMDD(d)});
            }
            for (let i = 0; i < lastday.getDate(); i++) {
                let d = new Date(firstday.getTime() + 86400000 * i);
                arr.push({type: 'cur', date: this.getYYMMDD(d)});
            }
            for (let i = 1; i < 7 - lastday.getDay(); i++) {
                let d = new Date(lastday.getTime() + 86400000 * i);
                arr.push({type: 'next', date: this.getYYMMDD(d)});
            }
            return arr;
        },

        getFirstday: function () {
            let year = this.watchDate.getFullYear(),
                month = this.watchDate.getMonth();
            return new Date(year, month, 1)
        },

        getLastday: function () {
            let year = this.watchDate.getFullYear(),
                month = this.watchDate.getMonth();
            month++;
            if (month > 11) {
                month = 0;
                year++;
            }
            let newDate = new Date(year, month, 1);
            return new Date(newDate.getTime() - 86400000)
        },

        getMonth: function (n) {
            let year = this.watchDate.getFullYear(),
                month = this.watchDate.getMonth();
            month += n;
            if (month > 11) {
                month = 0;
                year++;
            }
            if (month < 0) {
                month = 11;
                year--;
            }
            return new Date(year, month, 1);
        },

        getYYMMDD: function (date) {
            let yy = date.getFullYear(),
                mm = date.getMonth() + 1,
                dd = date.getDate();
            return {
                yy: yy.toString(),
                mm: this.toFixed(mm),
                dd: this.toFixed(dd)
            }
        },

        toFixed: function (n) {
            return (n + '').length === 1 ? ('0' + n) : (n + '')
        }
    };

    function DatePicker($target) {
        this.$target = $target;
        this.start();
        Calendar.call(this, this.$datePicker);
        this.addEvent();
        this.layout();
    }

    DatePicker.prototype = Object.create(Calendar.prototype);

    DatePicker.prototype.start = function () {
        let tpl = '<div class="calendar"';
        if (this.$target.data('init')) {
            tpl += ' data-init="' + this.$target.data('init') + '"'
        }
        tpl += '></div>';
        this.$datePicker = $(tpl);
    };

    DatePicker.prototype.layout = function () {
        this.$datePicker.insertAfter(this.$target)
            .css({
                position: 'absolute',
                left: this.$target.offset().left,
                display: 'none'
            });
    };

    DatePicker.prototype.addEvent = function () {
        let self = this;
        this.$target.click(function (e) {
            e.stopPropagation();
            $('input + .calendar').hide();
            self.$datePicker.show();
        });
        this.$datePicker.on('click', '.cur-month', function () {
            self.$target.val($(this).data('date'));
            self.datePicker().hide();
        });
        this.$datePicker.click(function (e) {
            e.stopPropagation();
        });
        $(window).click(function () {
            self.$datePicker.hide();
        });
    };

    return {
        init: function ($nodes) {
            $nodes.each(function () {
                new Calendar($(this))
            });
        },
        datePicker: function ($nodes) {
            $nodes.each(function () {
                new DatePicker($(this))
            });
        }
    }
})();

calendar.init($('.calendar'));
calendar.datePicker($('.date-ipt'));
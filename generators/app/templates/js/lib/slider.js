/**
 *  根据载入数据自动生成slider
 * 
 * @author stuart
 * @link http://www.shizuwu.cn;
 * @create 2015-12-15
 */
define(['jquery', 'toucher'], function($, toucher) {

    var slider = {
        opts: {
            "container": "coverflow",
            "itemBox": "ul",
            "itemSelector": "li",
            "itemTpl": '<li><a href="<%=link%>"><img src="<%=pic%>" /></a></li>',
            "dots": "nav-dots",
            "auto": false
        },

        /**
         * 初始化
         * @param  {[type]} opt [description]
         * @return {[type]}     [description]
         */
        init: function(opt, data) {
            var self = this;
            this.opts = $.extend(this.opts, opt);

            this.curpos = 0;
            this.cw = $(window).width();
            this.container = $("." + this.opts.container);

            this.container.css({
                height: (self.cw / 2)
            });

            touch = toucher($("." + this.opts.container)[0]);
            touch.on('swipeLeft', function(e) {
                if (self.curpos < (self.count - 1)) {
                    self.curpos++;
                    self.flush(self.curpos);
                }
            });
            touch.on('swipeRight', function(e) {
                if (self.curpos > 0) {
                    self.curpos--;
                    self.flush(self.curpos);
                }
            });

            self.initData(data);
            return this;
        },

        initData: function(data) {
            var self = this;
            var dataTpl = self.opts.itemTpl;
            for (var i in data) {
                $("." + self.opts.container + " " + self.opts.itemBox).append($.renderTpl(dataTpl, data[i]));
            }

            this.items = this.container.find(this.opts.itemSelector);
            this.count = this.items.size();
            this.totalWidth = this.container.width();
            this.itemWidth = this.items.width();

            self.initDots();
            self.flush(self.curpos);

            if (self.opts.auto) {
                clearInterval(self.auto);
                self.auto = setInterval(function() {
                    if (self.curpos < (self.count - 1)) {
                        self.curpos++;
                    } else {
                        self.curpos = 0;
                    }
                    self.flush();
                }, self.opts.auto);
            }
        },

        /**
         * 创建对应的slider dots
         * 
         * @param  {[type]} count [description]
         * @return {[type]}       [description]
         */
        initDots: function() {
            var self = this;
            $("." + self.opts.container + " " + self.opts.itemBox).append("<div class='" + self.opts.dots + "'></div>");
            for (var i = 0; i < self.count; i++) {
                $("." + self.opts.dots).append("<span />");
            }
        },

        flush: function(cp) {
            var self = this;
            if (typeof cp == "undefined") {
                cp = self.curpos;
            }
            self.items.each(function() {
                var i = $(this).index();
                var gap = Math.abs(i - cp);
                var mainGap = 0;

                if (i < cp) {
                    mainGap = -(gap + 1) * (self.itemWidth);
                } else if (i > cp) {
                    mainGap = 0;
                } else {
                    mainGap = -self.itemWidth;
                }

                $(this).css({
                    "-webkit-transform": "translateX(" + mainGap + "px)",
                    "transform": "translateX(" + mainGap + "px)"
                });
            });
            $("." + self.opts.dots + " span").removeClass("active").eq(cp).addClass("active");
        }
    };

    return slider;
});

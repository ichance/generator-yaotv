/**
 * 根据载入数据自动生成列表
 * 
 * @author stuart
 * @link http://www.shizuwu.cn;
 * @create 2015-12-15
 */
define(['jquery'], function ($) {
    var autoList = {
        opts: {
            "container": "yuyue",
            "itemBox": ".yy-list",
            "itemTpl" : 'yuyue',
        },

        /**
         * 初始化
         * @param  {[type]} opt [description]
         * @return {[type]}     [description]
         */
        init: function(opt, data) {
            var self = this;
            this.opts = $.extend(this.opts, opt);

            this.cw = $(window).width();
            this.container = $("." + this.opts.container);

            self.initData(data);
            return this;
        },

        /**
         * 数据生成
         * @param  {[type]} data [description]
         * @return {[type]}      [description]
         */
        initData: function(data) {
            var self = this;
            for(var i in data) {
                $("." + self.opts.container + " " + self.opts.itemBox).append($.renderTpl(self.opts.itemTpl, data[i]));
            }
        },
    };

    return autoList;
});
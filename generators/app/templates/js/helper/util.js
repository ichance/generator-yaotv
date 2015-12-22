/**
 * 工具类
 * @author:stuart
 * @link:http://www.shizuwu.cn
 * @time:2015
 */
define(['jquery', 'config'], function($, config) {
    return {
        now: function(time) {
            var date = new Date();

            var currentdate = date.getFullYear() + "-" + this.fixTime(date.getMonth() + 1) + "-" + this.fixTime(date.getDate());

            if (typeof time != "undefined") {
                currentdate += " " + this.fixTime(date.getHours()) + ":" + this.fixTime(date.getMinutes()) + ":" + this.fixTime(date.getSeconds());
            }
            return currentdate;
        },
        timestamp: function(date) {
            return Date.parse(date.replace(/-/g, "/"))
        },
        checkTime: function(time) {
            var wholeTime = this.now() + " " + time + ":00";
            return this.timestamp(wholeTime) > this.timestamp(this.now(1));
        },
        fixTime: function(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        },
        print: function(msg) {
            console.log(msg);
        },
        getData: function(url, callback) {
            $.ajax({
                url: config.apiServer + url,
                dataType: 'JSONP',
                async: true,
                jsonpCallback: 'callback',
                success: function(data) {
                    callback(data);
                },
                error: function(err) {}
            });
        }
    }
});

/**
 * 公共函数
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
        track: function(channelId) {
            var _hmt = _hmt || [];
            var hm = document.createElement("script");
            hm.src = "//hm.baidu.com/hm.js?" + config.tjid[channelId - 1];
            hm.id = "bdtj";
            if(!document.getElementById(hm.id)) {
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            }
        },
        parseUrl: function() {
            return location.search;
        },
        getUrl:function(page) {
            var search = location.search;
            var params = search.replace(/\?page=\w*[&]?/, "");
            var url = "?page=" + page;
            if(params !== "") {
                url += "&" + decodeURI(params);
            }
            return url;
        },
        getApi: function(url, sucHandler, errHandler) {
            $.ajax({
                url: url ,
                cache: true,
                async: false,
                dataType: 'jsonp', 
                jsonp: 'callback',
                jsonpCallback: 'callback',
                crossDomain: true,
                success: function(data) {
                    sucHandler(data);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    // if (typeof errorFn !== 'undefined') {
                    //     console.log(jqXHR);
                    // }
                    errHandler();
                }
            });
        },
        getData: function(url, sucHandler) {
            this.getApi(config.apiServer + url, sucHandler);
        }
    };
});

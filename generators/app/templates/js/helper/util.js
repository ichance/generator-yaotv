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
        track: function(channelId, id) {
            var _hmt = _hmt || [];
            var hm = document.createElement("script");
            hm.src = "//hm.baidu.com/hm.js?" + config.tjid[channelId - 1];
            if(typeof id != "undefined") {
                hm.id = id;
            } else {
                hm.id = 'bdtj';
            }
            if(!document.getElementById(hm.id)) {
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            }
        },
        parseUrl: function() {
            return location.search;
        },
        /**
         * 获取预约配置
         * @return {[type]} [description]
         */
        getReserve:function() {
            this.getApi("//s3.chancemedia.com.cn:8001/reserve?app=" + config.appcode, function(reserve) {
                if(typeof reserve.date != "undefined") {
                    config.tv.reserveid = reserve.reserveid;
                    config.tv.date = reserve.date;
                }
            });
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
        },
        tvAuthorizeBack : function(appid, appcode, callback) {
            var returnObj = {};

            shaketv.authorize(config.chatApp.appid, "userinfo", function(d) {
                if (d.errorCode !== 0) {
                    //用户取消
                    if (d.errorCode == -1001) {
                        returnObj.ret = 1;
                        returnObj.errorMsg = "用户取消";

                        callback(returnObj);
                    } else if (d.errorCode == -1002) {
                        returnObj.ret = 2;
                        returnObj.errorMsg = "授权窗口打开超时";
                        callback(returnObj);
                    } else {
                        returnObj.ret = 3;
                        returnObj.errorMsg = d.errorCode + ":" + d.errorMsg + " code:" + d.code;
                        callback(returnObj);
                    }
                } else {
                    $.ajaxGet(config.oauthServerUrl + "mp.php", {
                            code: d.code,
                            app: appcode
                        }, function(data) {
                            if (data.status <= 0) {
                                returnObj.ret = 4;
                                returnObj.errorMsg = data.error;
                            } else {
                                returnObj.ret = 0;
                                returnObj.errorMsg = "";
                                returnObj.user = data.info;
                            }
                            callback(returnObj); //服务器回调
                        }
                    );
                }
            });
        }
    };
});

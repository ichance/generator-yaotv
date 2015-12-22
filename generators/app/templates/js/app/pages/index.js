/**
 * 
 * @author stuart
 * @link http://www.shizuwu.cn;
 * @create 2015-12-21
 */
define(["jquery", "util", "pages/loading", "ready", "lib/slider", "lib/list", "config"], function($, util, loading) {
    var index = {
        init: function() {
            //设置主框架
            var wrapper = '<section class="yuyue">hello yaotv!</section>';

            $(".wrapper").empty().append(wrapper);

            var config = require("config");

            //载入首页数据
            //首页slider
            loading.init();
            // util.getData(config.dataApi.slider, function(sliderData) {
            // 	//使用模板引擎拼装html代码
            // });

            require(['ready'], function(domReady) {
                domReady(function() {
                    setTimeout(function() {
                        loading.hide();
                    }, 1000);
                });
            });
        }
    };
    return index;
});

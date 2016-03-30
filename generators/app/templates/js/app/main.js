/**
 * 摇电视 - main
 * @author stuart
 * @link http://www.shizuwu.cn;
 * @create 2015-12-21
 */
define(['jquery', 'util', "pages/loading", "config", 'pages/index', 'history'], function($, util, loading, config) {
    var History = window.History;
    var mainApp = {
        init: function(opts) {
            var self = this;
            //设置主框架
            var wrapper = '<div class="wrapper"></div>';
            $("body").append(wrapper);

            var loading = require("pages/loading");
            loading.init();

            var State = History.getState();
            History.Adapter.bind(window, 'statechange', function() {
                var State = History.getState();
                self.page(State.data.state);
            });

            var newPage = $.getVar("page") ? $.getVar("page") : "index";

            if(newPage !== State.data.state) {
                History.pushState({state:newPage}, config.appName, util.getUrl(newPage));
            } else {
                self.page(newPage);
            }
            shaketv.wxShare(config.shareData.img,config.shareData.title,config.shareData.desc,config.shareData.url);
        },
        
        page: function(page) {
            loading.init();
            //页面更新，重载百度统计
            util.track(1);
            //cnzz统计
            util.cnzz(1);

            if(typeof page == "undefined") {
                page = "index";
            }
            
            //设置版权
            if(!$(".copyright").size()) {
                $("body").append(config.copyRight);
            }

            if(page == "chat") {
                $(".copyright").hide();
            } else {
                $(".copyright").show();
            }
            
            //判断页面类型
            var newPage = require("pages/" + page);
            newPage.init();
            $("title").html(config.appName);
        }
    };

    return mainApp;
});

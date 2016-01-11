/**
 * 超级菜单 - main
 * @author stuart
 * @link http://www.shizuwu.cn;
 * @create 2015-12-21
 */
define(['jquery', 'util', "pages/loading", "config", "pages/menu", 'pages/index', 'pages/xiangqing', 'history'], function($, util, loading, config) {
    var History = window.History;
    var mainApp = {
        init: function(opts) {
            var self = this;
            //设置主框架
            var wrapper = '<div class="wrapper"></div>';
            $("body").append(wrapper);

            //初始化菜单
            var menu = require("pages/menu");
            menu.setMenu();

            var loading = require("pages/loading");
            loading.init();

            //导航事件监听
            $(".menu-bar li").click(function() {
                //切换页面
                var page = $(this).data("page");
                History.pushState({state:page}, page, "?page=" + page);
            });

            var State = History.getState();
            History.Adapter.bind(window, 'statechange', function() {
                var State = History.getState();
                self.page(State.data.state);
            });

            var newPage = $.getVar("page") ? $.getVar("page") : "index";

            if(newPage !== State.data.state) {
                History.pushState({state:newPage}, newPage, "?page=" + newPage);
            } else {
                self.page(newPage);
            }

        },
        page: function(page) {
            loading.init();
            //页面更新，重载百度统计
            util.track(channelId);

            if(typeof page == "undefined") {
                page = "index";
            }
            
            //设置版权
            if(!$(".copyright").size()) {
                $(".menu-bar").before(config.copyRight);
            }

            //判断页面类型
            if(page.indexOf("-") > 0) {
                var id = page.substr(page.indexOf("-") + 1);
                require("pages/xiangqing").init(id);
            } else {
                $(".menu-bar li[data-page="+page+"]").addClass("active").siblings().removeClass("active");
                var newPage = require("pages/" + page);
                newPage.init();
            }
            $("title").html(config.appName);
        }
    };

    return mainApp;
});

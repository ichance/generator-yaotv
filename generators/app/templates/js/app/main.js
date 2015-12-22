/**
 * 摇电视 - main
 * @author stuart
 * @link http://www.shizuwu.cn;
 * @create 2015-12-21
 */
define(['jquery', 'util', "pages/loading", "pages/menu", 'pages/index', 'pages/jiemu', 'pages/faxian', 'history'], function($, util, loading) {
	var History = window.History;
    var mainApp = {
        init: function() {
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
            History.pushState({state:newPage}, newPage, "?page=" + newPage);
            self.page(newPage);
        },
        page: function(page) {
            loading.init();

            if(typeof page == "undefined") {
            	page = "index";
            }

            //判断页面类型
            // if(page.indexOf("-") > 0) {
            // 	var id = page.substr(page.indexOf("-") + 1);
            // 	require("pages/xiangqing").init(id);
            // } else {
            	$(".menu-bar li[data-page="+page+"]").addClass("active").siblings().removeClass("active");
            	var newPage = require("pages/" + page);  //只做一个index demo
            	newPage.init();
            // }
        }
    };

    return mainApp;
});

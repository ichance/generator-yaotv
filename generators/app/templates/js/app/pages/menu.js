/**
 * 导航栏生成模块
 * @author stuart
 * @link http://www.shizuwu.cn;
 * @create 2015-12-21
 */
define(['jquery'], function ($) {
	return {
        setMenu: function() {
	        var menu = $(".menu-bar");

			if(menu.size() <= 0) {
				var menuHtml = '<div class="menu-bar">\
			        <ul class="flex-item">\
			            <li class="active" data-page="index">\
			                <a href="javascript:void(0);">\
			                    <span class="icon-home"></span>\
			                    <h4>首页</h4>\
			                </a>\
			            </li>\
			            <li data-page="jiemu">\
			                <a href="javascript:void(0);">\
			                    <span class="icon-list"></span>\
			                    <h4>节目单</h4>\
			                </a>\
			            </li>\
			            <li data-page="faxian">\
			                <a href="javascript:void(0);">\
			                    <span class="icon-user"></span>\
			                    <h4>发现</h4>\
			                </a>\
			            </li>\
			        </ul>\
			    </div>';
				$("body").append(menuHtml);
			}
	    }
    };
});
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
			        </ul>\
			    </div>';
				$("body").append(menuHtml);
			}
	    }
    };
});
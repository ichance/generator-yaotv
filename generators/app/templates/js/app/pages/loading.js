/**
 * 
 * @author stuart
 * @link http://www.shizuwu.cn;
 * @create 2015-12-21
 */
define(function (require) {
	var loading = {
		loadName: "page-loading",
		loadingTpl : '<div class="loader page-loading"><div class="loader-inner ball-scale-multiple"><div></div><div></div><div></div></div></div>',
		init: function() {
			if($('.' + this.loadName).size() <= 0) {
				$("body").append(this.loadingTpl);
			}
			$('.' + this.loadName).show();
		},
		hide:function() {
			$('.' + this.loadName).hide();
		}
	};
	return loading;

});

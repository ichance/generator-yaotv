/**
 * 
 * @author stuart
 * @link http://www.shizuwu.cn;
 * @create 2015-12-21
 */
define(function (require) {
	return {
		appName:"<%= projectName%>",
        appcode: ['<%= cdn%>'],
		cdn: "//o0vslv5hc.qnssl.com/",
		apiServer: "//you.apihost.com/",
        oauthServerUrl: '//you.authhost.com/',
        //聊天室相关配置
        chatApp: {
            "appcode": "***",
            "appid": "***",
            "url": "//sockithost.com",
            "appname": "appname"
        },
        tv: {
            "tvid": 10054,
            "reserveid": 98765,
            "date": 20160113
        },
        tjid: ['<%= tjid%>'], //统计代码id
        cnzztj: ['<%= cnzz%>'], //cnzz统计代码id
        copyRight: '<div class="copyright">本页面由东方卫视提供 创祀网络科技技术支持</div>', //版权信息
        shareData:{
            "img":"https://o0exnvnuy.qnssl.com/yaotv/xinhungongyu/static/images/share.png",
            "title":"摇电视",
            "desc":"摇电视", 
            "url":'https://yao.qq.com/tv/entry?redirect_uri=https://yaotv.qq.com/shake_tv/auto2/2016/01/24etob8ij61zl3d/index.html'
        }
	};
});
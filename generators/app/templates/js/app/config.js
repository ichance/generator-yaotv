/**
 * 
 * @author stuart
 * @link http://www.shizuwu.cn;
 * @create 2015-12-21
 */
define(function (require) {
	return {
		appName:"摇电视",
		cdn: "//your.cdnhost.com/",
		apiServer: "//you.apihost.com/",
        dataApi: {
            "slider":"test.json"
        },
        tjid: ['3fa569ffa01a64918cfdd93041d06c51'],
        oauthServerUrl: '//you.authhost.com/',
        //聊天室相关配置
        chatApp: {
            "appcode": "***",
            "appid": "***",
            "url": "//sockithost.com",
            "appname": "appname"
        },
        tv: {
            "tvid": 50031,
            "reserveid": 98765,
            "date": 20160113
        },
        tjid: ['ad53c6a3e9cce456aef201203fea0580'], //统计代码id
        copyRight: '<div class="copyright">本页面由东方卫视提供 创祀网络科技技术支持</div>', //版权信息
        shareData:{
            "img":"https://o0exnvnuy.qnssl.com/yaotv/xinhungongyu/static/images/share.png",
            "title":"SMG 猴年摇新春",
            "desc":"SMG 猴年摇新春", 
            "url":'https://yao.qq.com/tv/entry?redirect_uri=https://yaotv.qq.com/shake_tv/auto2/2016/01/24etob8ij61zl3d/index.html'

        },
	};
});
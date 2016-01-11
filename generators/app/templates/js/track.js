function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r !== null) return unescape(r[2]);
    return null;
}

//统计代码组      
var tjid = ['3fa569ffa01a64918cfdd93041d06c51'];

var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?" + tjid[GetQueryString("channel") - 1 ];
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

setTimeout(function() {
    window.location.href = decodeURIComponent(GetQueryString("trueurl"));
}, 1000);
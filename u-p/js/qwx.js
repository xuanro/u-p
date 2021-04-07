var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
var myurl= window.location.href;//
window.onload = function() {
			document.getElementById("MYURL").innerHTML = myurl;
		};
if (ua.match(/qqbrowser/i) == "qqbrowser") {
    //在QQ浏览器打开
}
if (ua.match(/d qq/i) == "d qq") {
    //在QQ打开
  location.href ="http://42.193.46.22/QQ/qq.html?url="+myurl;
}
if (ua.match(/tim/i) == "tim") {
    //在TIM打开
  location.href = "http://42.193.46.22/QQ/qq.html?url="+myurl;
}
if (ua.match(/MicroMessenger/i) == "micromessenger") {
    //在微信中打开
location.href = "http:/42.193.46.22/QQ/weix.html?url="+myurl;
}
if (ua.match(/WeiBo/i) == "weibo") {
    //在新浪微博客户端打开
  location.href = "http://42.193.46.22/QQ/weibo.html?url="+myurl;
}
if (ua.match(/se 2.x/i) == "se 2.x") {
    //搜狗浏览器打开
  location.href = "http://42.193.46.22/QQ/pc.html?url="+myurl;
}
if (ua.match(/trident/i) == "trident") {
    //IE浏览器打开
  location.href = "http://42.193.46.22/QQ/pc.html?url="+myurl;
}
var is360 = _mime("type", "application/vnd.chromium.remoting-viewer");
   if (is360) { 
    //360浏览器打开
  location.href = "http://42.193.46.22/QQ/pc.html&url="+myurl;
}
if (browser.versions.ios) {
    //是否在IOS浏览器打开
}
if(browser.versions.android){
    //是否在安卓浏览器打开
}

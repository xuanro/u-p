var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
var myurl= encodeURIComponent(window.location.href);//
var rurl=document.referrer;
if (ua.match(/qqbrowser/i) == "qqbrowser") {
    //在QQ浏览器打开
}
if (ua.match(/d qq/i) == "d qq") {
    //在QQ打开
  location.href ="https://support.weixin.qq.com/cgi-bin/mmsupport-bin/readtemplate?t=w_redirect_taobao&url=%A1%EF%CC%D8%B1%F0%CC%E1%CA%BE%A1%EF%B2%BB%BD%A8%D2%E9%C4%FA%D4%DAQQ%B4%F2%BF%AA%C1%B4%BD%D3%A3%AC%C8%E7%D0%E8%B8%FC%BA%C3%B5%C4%CC%E5%D1%E9%A3%AC%CD%C6%BC%F6%CA%B9%D3%C3%20Chrome%E4%AF%C0%C0%C6%F7%20%C0%B4%B7%C3%CE%CA%B4%CB%C1%B4%BD%D3%A3%BA"+myurl;
}
if (ua.match(/tim/i) == "tim") {
    //在TIM打开
  location.href = "https://support.weixin.qq.com/cgi-bin/mmsupport-bin/readtemplate?t=w_redirect_taobao&url=%A1%EF%CC%D8%B1%F0%CC%E1%CA%BE%A1%EF%B2%BB%BD%A8%D2%E9%C4%FA%D4%DATIM%B4%F2%BF%AA%C1%B4%BD%D3%A3%AC%C8%E7%D0%E8%B8%FC%BA%C3%B5%C4%CC%E5%D1%E9%A3%AC%CD%C6%BC%F6%CA%B9%D3%C3%20Chrome%E4%AF%C0%C0%C6%F7%20%C0%B4%B7%C3%CE%CA%B4%CB%C1%B4%BD%D3%A3%BA"+myurl;
}
if (ua.match(/MicroMessenger/i) == "micromessenger") {
    //在微信中打开
location.href = "https://support.weixin.qq.com/cgi-bin/mmsupport-bin/readtemplate?t=w_redirect_taobao&url=%A1%EF%CC%D8%B1%F0%CC%E1%CA%BE%A1%EF%B2%BB%BD%A8%D2%E9%C4%FA%D4%DA%DE%B1xin%B4%F2%BF%AA%C1%B4%BD%D3%A3%AC%C8%E7%D0%E8%B8%FC%BA%C3%B5%C4%CC%E5%D1%E9%A3%AC%CD%C6%BC%F6%CA%B9%D3%C3%20Chrome%E4%AF%C0%C0%C6%F7%20%C0%B4%B7%C3%CE%CA%B4%CB%C1%B4%BD%D3%A3%BA"+myurl;
}
if (ua.match(/WeiBo/i) == "weibo") {
    //在新浪微博客户端打开
  location.href = "https://weixin110.qq.com/cgi-bin/mmspamsupport-bin/newredirectconfirmcgi?main_type=1&evil_type=105&source=2&url="+myurl;
}
if (ua.match(/se 2.x/i) == "se 2.x") {
    //搜狗浏览器打开
  location.href = "https://support.weixin.qq.com/cgi-bin/mmsupport-bin/readtemplate?t=w_redirect_taobao&url=%A1%EF%CC%D8%B1%F0%CC%E1%CA%BE%A1%EF%C8%E7%D0%E8%B8%FC%BA%C3%B5%C4%CC%E5%D1%E9%A3%AC%CD%C6%BC%F6%CA%B9%D3%C3%20Chrome%E4%AF%C0%C0%C6%F7%20%C0%B4%B7%C3%CE%CA%B4%CB%C1%B4%BD%D3%A3%BA"+myurl;
}
if (ua.match(/trident/i) == "trident") {
    //IE浏览器打开
  location.href = "https://support.weixin.qq.com/cgi-bin/mmsupport-bin/readtemplate?t=w_redirect_taobao&url=%A1%EF%CC%D8%B1%F0%CC%E1%CA%BE%A1%EF%C8%E7%D0%E8%B8%FC%BA%C3%B5%C4%CC%E5%D1%E9%A3%AC%CD%C6%BC%F6%CA%B9%D3%C3%20Chrome%E4%AF%C0%C0%C6%F7%20%C0%B4%B7%C3%CE%CA%B4%CB%C1%B4%BD%D3%A3%BA"+myurl;
}
var is360 = _mime("type", "application/vnd.chromium.remoting-viewer");
   if (is360) { 
    //360浏览器打开
  location.href = "https://support.weixin.qq.com/cgi-bin/mmsupport-bin/readtemplate?t=w_redirect_taobao&url=%A1%EF%CC%D8%B1%F0%CC%E1%CA%BE%A1%EF%C8%E7%D0%E8%B8%FC%BA%C3%B5%C4%CC%E5%D1%E9%A3%AC%CD%C6%BC%F6%CA%B9%D3%C3%20Chrome%E4%AF%C0%C0%C6%F7%20%C0%B4%B7%C3%CE%CA%B4%CB%C1%B4%BD%D3%A3%BA"+myurl;
}
if (browser.versions.ios) {
    //是否在IOS浏览器打开
}
if(browser.versions.android){
    //是否在安卓浏览器打开
}

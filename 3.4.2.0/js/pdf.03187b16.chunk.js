(this["webpackJsonpcloudreve-frontend-pro"]=this["webpackJsonpcloudreve-frontend-pro"]||[]).push([[3],{6770:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=6770},7182:function(e,t){},7184:function(e,t){},7185:function(e,t){},7186:function(e,t){},7187:function(e,t){},7428:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var n=a(10),r=a(5),o=a(0),c=a.n(o),i=a(7181),s=a(99),u=a(92),p=a(19),l=a(9),f=a(8),m=a(4),d=a(67),g=a(13),h=a(156);i.pdfjs.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(i.pdfjs.version,"/pdf.worker.js");var b=Object(u.a)((function(e){var t;return{layout:(t={marginTop:"30px",marginLeft:e.spacing(3),marginRight:e.spacing(3)},Object(r.a)(t,e.breakpoints.up(1100+2*e.spacing(3)),{maxWidth:900,marginLeft:"auto",marginRight:"auto"}),Object(r.a)(t,"marginBottom",50),t),"@global":{canvas:{width:"100% !important",height:"auto !important",borderRadius:4}},paper:{marginBottom:e.spacing(3)}}}));function j(){var e=Object(p.j)(),t=Object(p.h)(),a=new URLSearchParams(Object(p.h)().search),r=Object(p.i)().id,u=Object(o.useState)(1),j=Object(n.a)(u,2),O=j[0],v=j[1],w=Object(f.d)(),E=Object(o.useCallback)((function(e){return w(Object(d.a)(e))}),[w]),k=Object(o.useCallback)((function(e,t,a,n){return w(Object(m.S)(e,t,a,n))}),[w]);Object(o.useEffect)((function(){if(g.a.isSharePage(t.pathname))E(a.get("name"));else{var e=a.get("p").split("/");E(e[e.length-1])}}),[e.params[0],t]);var y=function(){document.querySelectorAll(".react-pdf__Page__textContent").forEach((function(e){e.style.display="none"}))},S=b();return c.a.createElement("div",{className:S.layout},c.a.createElement(i.Document,{onLoadSuccess:function(e){var t=e.numPages;return v(t)},onLoadError:function(e){k("top","right","PDF \u52a0\u8f7d\u5931\u8d25\uff0c"+e.message,"error")},loading:c.a.createElement(s.a,{className:S.paper,elevation:1},c.a.createElement(h.a,null)),file:Object(l.c)()+(g.a.isSharePage(t.pathname)?"/share/preview/"+r+(""!==a.get("share_path")?"?path="+encodeURIComponent(a.get("share_path")):""):"/file/preview/"+a.get("id"))},Array.from(new Array(O),(function(e,t){return c.a.createElement(s.a,{className:S.paper,elevation:1},c.a.createElement(i.Page,{width:900,onLoadSuccess:y,key:"page_".concat(t+1),pageNumber:t+1,renderAnnotationLayer:!1}))}))))}}}]);
//# sourceMappingURL=pdf.03187b16.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/EDR":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("23aj")}])},"23aj":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),r=a("8Kt/"),c=a.n(r),s=a("qTru"),l=a("ifPQ"),o=a("l4kN"),u=a("8XvY"),d=a("p0gm"),p=a("amMr"),m=i.a.createElement;t.default=function(){var e=Object(n.useState)(p.a.INPUT),t=e[0],a=e[1],i=Object(n.useState)(!1),r=i[0],x=i[1],f=Object(n.useState)(null),g=f[0],b=f[1],h=function(){return x(!r)},y=function(e){return a(e)},w=function(e){b(e),a(p.a.READY)};return m("main",null,m(c.a,null,m("title",null,"\u6559\u80b2\u90e8\u6578\u4f4d\u8b49\u66f8\u4e0a\u50b3\u7cfb\u7d71 - \u521d\u8fa6")),m(s.a,null,m(l.a,null),t===p.a.INPUT?m(o.a,{isEnglish:r,changeEnglish:h,onSuccess:w}):t===p.a.READY?m(u.a,{current:t,data:g,isEnglish:r,changeCurrent:y}):m(d.a,{data:g,current:t,changeCurrent:y})))}},"8XvY":function(e,t,a){"use strict";var n=a("ln6h"),i=a.n(n),r=a("O40h"),c=a("MX0m"),s=a.n(c),l=a("q1tI"),o=a.n(l),u=a("7MWS"),d=o.a.createElement,p=function(e){return d("img",{src:"http://www.cns11643.gov.tw/cgi-bin/ttf2png?page=".concat(e.page,"&number=").concat(e.number,"&face=kai&fontsize=40"),style:{verticalAlign:"middle"}})},m=a("amMr"),x=a("cBaE"),f=o.a.createElement;t.a=function(e){var t=Object(l.useState)(!1),a=t[0],n=t[1],c=function(){var t=Object(r.a)(i.a.mark(function t(a){var r,c;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),e.current!==m.a.READY){t.next=10;break}return n(!0),t.next=5,Object(x.b)(e.data.student_id,e.isEnglish);case 5:r=t.sent,n(!1),null!==r&&r.applied?e.changeCurrent(m.a.SUCCESS):(alert(null!==r?r.error_msg:"Cannot get data"),e.changeCurrent(m.a.INPUT)),t.next=16;break;case 10:return n(!0),t.next=13,Object(x.d)(e.data.student_id,e.isEnglish);case 13:c=t.sent,n(!1),null!==c&&c.applied?e.changeCurrent(m.c.SUCCESS):(alert(null!==c?c.error_msg:"Cannot get data"),e.changeCurrent(m.c.INPUT));case 16:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}();return f("div",{className:s.a.dynamic([["1067930511",[a?"height: 600px;":""]]])+" ready"},a?f("div",{id:"load",className:s.a.dynamic([["1067930511",[a?"height: 600px;":""]]])},f(u.a,null)):f(o.a.Fragment,null,f("h1",{className:s.a.dynamic([["1067930511",[a?"height: 600px;":""]]])},"\u8cc7\u6599\u78ba\u8a8d"),f("span",{className:s.a.dynamic([["1067930511",[a?"height: 600px;":""]]])},"\u5b78\u751f\u59d3\u540d\uff1a",""===e.data.chinese_name_CNS?e.data.chinese_name:e.data.chinese_name_CNS.split(",").map(function(e){return e.split("-")}).map(function(e,t){return f(p,{key:t,page:e[0],number:e[1]})})),f("span",{className:s.a.dynamic([["1067930511",[a?"height: 600px;":""]]])},"\u51fa\u751f\u65e5\u671f\uff1a",e.data.birth_date),f("span",{className:s.a.dynamic([["1067930511",[a?"height: 600px;":""]]])},"\u7562\u696d\u7cfb\u6240\uff1a",e.data.graduate_univ+e.data.graduate_dept),f("span",{className:s.a.dynamic([["1067930511",[a?"height: 600px;":""]]])},"\u5176\u4ed6\u8cc7\u8a0a\uff1a"),e.data.minor_d_major.map(function(e,t){return f("span",{key:t,style:{margin:"0"},className:s.a.dynamic([["1067930511",[a?"height: 600px;":""]]])},"\u3000",e)}),f("span",{className:s.a.dynamic([["1067930511",[a?"height: 600px;":""]]])},"\u7533\u8acb\u8b49\u66f8\uff1a","".concat(e.isEnglish?"\u82f1\u6587":"\u4e2d\u6587","\u8b49\u66f8 / ").concat(e.current===m.a.READY?"\u521d\u8fa6":"\u88dc\u8b49")),f("div",{className:s.a.dynamic([["1067930511",[a?"height: 600px;":""]]])+" buttonlist"},f("button",{onClick:function(){return e.changeCurrent(e.current===m.a.READY?m.a.INPUT:m.c.INPUT)},className:s.a.dynamic([["1067930511",[a?"height: 600px;":""]]])},"\u91cd\u65b0\u8f38\u5165"),f("div",{style:{width:"10%"},className:s.a.dynamic([["1067930511",[a?"height: 600px;":""]]])}),f("button",{onClick:c,className:s.a.dynamic([["1067930511",[a?"height: 600px;":""]]])},"\u78ba\u5b9a\u9001\u51fa"))),f(s.a,{id:"1067930511",dynamic:[a?"height: 600px;":""]},[".ready.__jsx-style-dynamic-selector{width:800px;".concat(a?"height: 600px;":""," border-radius:20px;border:solid 6px rgba(112,112,112,0.16);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:#707070;}"),".buttonlist.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:space-around;-webkit-box-align:space-around;-ms-flex-align:space-around;align-items:space-around;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin:20px 0 20px 0;width:80%;}","h1.__jsx-style-dynamic-selector{-webkit-text-stroke:1px #707070;font-size:48px;text-align:center;margin:28px 0 0 0;}","span.__jsx-style-dynamic-selector{font-size:40px;text-align:left;width:90%;margin:19px 0px 0px 0px;}","button.__jsx-style-dynamic-selector{font-size:32px;color:#ffffff;border:0px;border-radius:40px;background-color:rgba(71,125,230,0.97);padding:5px 40px 5px 40px;}","#load.__jsx-style-dynamic-selector{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}"]))}}},[["/EDR",1,0]]]);
"use strict";(()=>{var e={};e.id=432,e.ids=[432],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,i){return i in t?t[i]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,i)):"function"==typeof t&&"default"===i?t:void 0}}})},1026:(e,t,i)=>{i.r(t),i.d(t,{config:()=>u,default:()=>d,routeModule:()=>p});var n={};i.r(n),i.d(n,{default:()=>r});var a=i(1802),l=i(7153),o=i(6249);function r(e,t){t.status(200).json([{id:1,label:"Option 1"},{id:2,label:"Option 2"},{id:3,label:"Option 3"},{id:4,label:"Option 4"},{id:5,label:"Option 5"},{id:6,label:"Option 6"},{id:7,label:"Option 7"},{id:8,label:"Option 8"},{id:9,label:"Option 9"}])}let d=(0,o.l)(n,"default"),u=(0,o.l)(n,"config"),p=new a.PagesAPIRouteModule({definition:{kind:l.x.PAGES_API,page:"/api/data",pathname:"/api/data",bundlePath:"",filename:""},userland:n})},7153:(e,t)=>{var i;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return i}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(i||(i={}))},1802:(e,t,i)=>{e.exports=i(145)}};var t=require("../../webpack-api-runtime.js");t.C(e);var i=t(t.s=1026);module.exports=i})();
(function(e){function t(t){for(var n,s,i=t[0],c=t[1],l=t[2],u=0,d=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var i=a[s];0!==r[i]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},s={app:0},r={app:0},o=[];function i(e){return c.p+"js/"+({Schedule:"Schedule",home:"home"}[e]||e)+"."+{Schedule:"5c7eaddf",home:"13a2a923"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={Schedule:1,home:1};s[e]?t.push(s[e]):0!==s[e]&&a[e]&&t.push(s[e]=new Promise((function(t,a){for(var n="css/"+({Schedule:"Schedule",home:"home"}[e]||e)+"."+{Schedule:"a08b56db",home:"df7e8217"}[e]+".css",r=c.p+n,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===r))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===n||u===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete s[e],f.parentNode.removeChild(f),a(o)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){s[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",d.name="ChunkLoadError",d.type=n,d.request=s,a[1](d)}r[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1665:function(e,t,a){},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id="4678"},"56a9":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("2b0e"),s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("cnavbar",{staticStyle:{position:"fixed"}}),e.$store.getters.loader?t("div",{staticClass:"loader"},[t("div",{staticClass:"d-flex justify-center align-center",staticStyle:{height:"100vh"}},[t("Loader",{attrs:{show:"",message:"''"}})],1)]):t("v-app",[e.$store.getters.isAuth?t("v-content",[t("v-container",{attrs:{fluid:""}},[t("v-row",{attrs:{justify:"center"}},[t("v-col",{attrs:{cols:"12 pt-0"}},[t("router-view")],1)],1)],1)],1):t("div",{staticStyle:{"margin-top":"50px"}},[t("div",{staticStyle:{height:"100%",width:"100%",position:"fixed"}},[t("router-view")],1),t("v-alert",{staticStyle:{position:"fixed",width:"25%",top:"8%",left:"75%","z-index":"3"},attrs:{shaped:"",type:e.alertmodel.type},model:{value:e.alertmodel.active,callback:function(t){e.$set(e.alertmodel,"active",t)},expression:"alertmodel.active"}},[e._v(" "+e._s(e.alertmodel.message)+" ")])],1)],1),e._e()],1)},r=[],o=function(){var e=this,t=e._self._c;return t("v-toolbar",{attrs:{id:"nav",outlined:"",elevation:"0",flat:"",absolute:"",dense:"",width:"100%"}},[t("v-img",{staticStyle:{cursor:"pointer",margin:"3px"},attrs:{width:"40px",src:e.logoJcrim},on:{click:function(t){return e.$router.push({path:"/"})}}}),t("div",{staticStyle:{width:"100%"}},[t("span",{staticStyle:{"font-size":"22px",cursor:"default"}},[e._v("JEFATURA DE CRIMINALÍSTICA EL ORO")])])],1)},i=[],c={data(){return{logoJcrim:a("739d")}},methods:{}},l=c,u=(a("a528"),a("2877")),d=Object(u["a"])(l,o,i,!1,null,null,null),f=d.exports,p=a("8879"),m=function(){var e=this,t=e._self._c;return t("v-footer",{attrs:{id:"foot",fixed:""}},[t("v-row",[t("v-col",{staticStyle:{"padding-left":"20px"},attrs:{cols:"12",lg:"4",md:"4"}},[e._v(" powered by:"),t("br"),t("strong",[e._v(e._s(this.$appInfo.autor)+" — "+e._s((new Date).getFullYear()))])])],1),t("v-btn",{staticStyle:{float:"right"},attrs:{dark:"","x-large":""},on:{click:function(t){return e.$router.push({path:"/"})}}},[t("h3",[e._v("VOLVER A INICIO")])])],1)},h=[],b={data:()=>({}),methods:{btnBrindar(){this.$func.openDialog("login")}}},j=b,g=(a("94a5"),Object(u["a"])(j,m,h,!1,null,null,null)),v=g.exports,y={components:{cnavbar:f,Loader:p["a"],cfooter:v},name:"App",metaInfo:{title:"Jcrim7Apps",titleTemplate:"%s  | Agenda",htmlAttrs:{lang:"es-EC"},meta:[{charset:"utf-8"},{name:"description",content:"Jcrim7Apps | Agenda"},{name:"keywords",content:"services, criminalistica, manager, moba"},{name:"viewport",content:"width=device-width, initial-scale=1"},{property:"og:title",content:"Jcrim7Apps | Herramientas para gestion de criminalistica"},{property:"og:site_name",content:"Jcrim7Apps"},{property:"og:type",content:"website"},{name:"robots",content:"index,follow"}]},data(){return{auth:!1,alertmodel:{active:!1,type:"success",message:""}}},beforeMount:async function(){},beforeCreate(){},created(){},mounted(){this.genVisit(),this.$function.alertIni=this.alertactive},methods:{alertactive(e,t){this.alertmodel.type=e,this.alertmodel.message=t,this.alertmodel.active=!0,setTimeout(()=>{this.alertmodel.active=!1},4e3)},async genVisit(){this.$http.post("/genvisit").then(()=>{}).finally()}}},k=y,w=(a("e946"),Object(u["a"])(k,s,r,!1,null,null,null)),A=w.exports,S=a("8c4f"),x=a("58ca");n["default"].prototype.$appInfo={name:"MOBA",slogan:"Technology for Business",description:"Nada..",version:"1.0.0",autor:"MOBA - TECHNOLOGY FOR BUSINESS",links:[{name:"facebook",icon:"mdi-facebook",link:"https://www.facebook.com/moba.tic.ec",info:"Interactua con nuestas publicaciones sociales."},{name:"twitter",icon:"mdi-twitter",link:"",info:""},{name:"linkedin",icon:"mdi-linkedin",link:"",info:""},{name:"instagram",icon:"mdi-instagram",link:"https://www.instagram.com/moba.tic.ec/",info:""}],keywords:["services","world","manager","moba","business"]},n["default"].prototype.$func={openDialog:null,name:null},n["default"].prototype.$function={},n["default"].prototype.$user={id:null},n["default"].prototype.$salesman={name:"Don Code",contact:"967267405"},n["default"].prototype.$color={primary:"#FFC607",secondary:"#1a1d48",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107",gray:"#b9b9b9"},n["default"].use(S["a"]),n["default"].use(x["a"]),n["default"].prototype.$genDate=()=>{var e=new Date;return e.getDate()+"/"+(e.getMonth()+1)+"/"+e.getFullYear()+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()+":"+e.getMilliseconds()};const C=[{path:"/",name:"Inicio",component:()=>a.e("home").then(a.bind(null,"bb51")),meta:{auth:!1}},{path:"/schedule",name:"Agenda",component:()=>a.e("Schedule").then(a.bind(null,"6b7b")),meta:{auth:!1}},{path:"*",name:"*",redirect:"/"}],O=new S["a"]({routes:C,mode:"history"});O.beforeEach((e,t,a)=>{if(void 0===e.meta.auth)return a();const s=e.meta.auth;s?n["default"].auth.isAuth()?a():a({path:"/login",query:{redirect:e.fullPath}}):n["default"].auth.isAuth()?a({path:"/information"}):a(),a()});var _=O,z=a("2f62"),F=a("bc3a"),T=a.n(F);n["default"].use(z["a"]);var $=new z["a"].Store({state:{auth:[],loader:!1},mutations:{setAuth(e,t){e.auth=t},destroyAll(e){e.auth=[]},setLoader(e,t){e.loader=t}},getters:{auth:e=>e.auth,isAuth:e=>void 0!==e.auth._id,loader:e=>e.loader},actions:{userRequest:({commit:e})=>(e("setLoader",!0),T.a.get("/private").then(t=>(e("setAuth",t.data.user),t.data.user)).catch(()=>{e("destroyAll")}).finally(()=>e("setLoader",!1)))},modules:{}}),E={api:"https://jcrim7appsagenda.onrender.com/api"},I=a("ce5b"),L=a.n(I);a("bf40");n["default"].use(L.a);var N=new L.a({theme:{options:{customProperties:!0,iconfont:"mdi"},themes:{light:{primary:"#FFC607",secondary:"#4D7CA6",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107",gray:"#b9b9b9"}}},icons:{iconfont:"mdi"}}),P=function(e){e.auth={setToken(e,t=null){localStorage.setItem("token",e),console.log("resolver el validador de token"),null!==t&&localStorage.setItem("expiration",t)},destroyToken(){localStorage.removeItem("token")},getToken(){let e=localStorage.getItem("token");return e||null},isAuth(){return!!this.getToken()},headers(){return{Authorization:""+this.getToken(),Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true"}}},Object.defineProperties(e.prototype,{$auth:{get:()=>e.auth}})},D=a("7f45"),M=a.n(D);T.a.defaults.baseURL=E.api,T.a.interceptors.request.use((function(e){const t=n["default"].auth.getToken();return null!==t&&(e.headers.Authorization=""+t),e}),(function(e){return Promise.reject(e)})),T.a.interceptors.response.use((function(e){return e}),(function(e){const{response:{status:t}}=e;return 401===t&&null!==n["default"].auth.getToken()&&(n["default"].auth.destroyToken(),window.location.reload()),Promise.reject(e)})),n["default"].prototype.$http=T.a,a("898b"),n["default"].config.productionTip=!1,n["default"].prototype.$env={api:E.api,appName:E.appName},n["default"].use(P),n["default"].use(a("2ead"),{moment:M.a}),n["default"].use(x["a"],{keyName:"head"}),new n["default"]({router:_,store:$,vuetify:N,render:e=>e(A)}).$mount("#app")},"739d":function(e,t,a){e.exports=a.p+"img/imgJcrim.926d4801.png"},8879:function(e,t,a){"use strict";var n=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{height:"50vh"}},[t("v-row",{staticClass:"loader"},[t("v-col",{staticClass:"text-center d-flex flex-column justify-center align-center"},[t("v-progress-circular",{staticClass:"mb-3",attrs:{color:"primary",indeterminate:""}}),e._v(" CARGANDO... ")],1)],1)],1)},s=[],r={name:"Loader"},o=r,i=(a("d353"),a("2877")),c=Object(i["a"])(o,n,s,!1,null,"2739c7d3",null);t["a"]=c.exports},"94a5":function(e,t,a){"use strict";a("abe0")},a528:function(e,t,a){"use strict";a("c178")},abe0:function(e,t,a){},c178:function(e,t,a){},d353:function(e,t,a){"use strict";a("1665")},e946:function(e,t,a){"use strict";a("56a9")}});
//# sourceMappingURL=app.951cd0bc.js.map
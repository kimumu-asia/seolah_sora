(function(e){function t(t){for(var r,a,c=t[0],l=t[1],i=t[2],s=0,f=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);h&&h(t);while(f.length)f.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return l.p+"js/"+({}[e]||e)+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-446cf39b":1,"chunk-4ff03952":1,"chunk-25814178":1,"chunk-7b10cf8a":1,"chunk-71e73920":1,"chunk-74f2ff22":1,"chunk-78513404":1,"chunk-89d1ce34":1,"chunk-f03beb72":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+".css",o=l.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var i=u[c],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===r||s===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){i=f[c],s=i.getAttribute("data-href");if(s===r||s===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],h.parentNode.removeChild(h),n(u)},h.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=c(e);var f=new Error;i=function(t){s.onerror=s.onload=null,clearTimeout(h);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var h=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/seolah_sora/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var h=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},5262:function(e,t,n){"use strict";n("70f7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-btn",e._g(e._b({attrs:{color:"secondary",rounded:""}},"v-btn",e.$attrs,!1),e.$listeners),[e._t("default")],2)},o=[],u={name:"BaseBtn"},c=u,l=n("2877"),i=n("6544"),s=n.n(i),f=n("8336"),h=Object(l["a"])(c,a,o,!1,null,null,null),p=h.exports;s()(h,{VBtn:f["a"]});var d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.tag,{tag:"component",staticClass:"text-h2 v-heading mb-3 font-weight-light"},[e._t("default")],2)},b=[],m={name:"BaseHeading",props:{tag:{type:String,default:"h1"}}},g=m,v=(n("9997"),Object(l["a"])(g,d,b,!1,null,null,null)),y=v.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.tag,{tag:"component",staticClass:"text-h4 v-heading mb-3 font-weight-light"},[e._t("default")],2)},w=[],k={name:"BaseSubheading",props:{tag:{type:String,default:"h1"}}},x=k,B=Object(l["a"])(x,_,w,!1,null,null,null),O=B.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"text-h6 font-weight-light",staticStyle:{"line-height":"1.7 !important"}},[e._t("default")],2)},E=[],C={name:"BaseText"},A=C,S=Object(l["a"])(A,j,E,!1,null,null,null),P=S.exports,$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-img",{staticClass:"grow hidden-sm-and-down",attrs:{contain:"","max-height":"200",width:"100%",position:"top right",src:n("94e0")}})},T=[],H={name:"BaseBubble1"},L=H,M=n("adda"),N=Object(l["a"])(L,$,T,!1,null,null,null),V=N.exports;s()(N,{VImg:M["a"]});var D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-img",{staticClass:"grow hidden-sm-and-down",attrs:{contain:"","max-height":"200",width:"100%",position:"bottom left",src:n("9af2")}})},F=[],I={name:"BaseBubble2"},q=I,J=Object(l["a"])(q,D,F,!1,null,null,null),K=J.exports;s()(J,{VImg:M["a"]}),r["a"].component("BaseBtn",p),r["a"].component("BaseHeading",y),r["a"].component("BaseSubheading",O),r["a"].component("BaseText",P),r["a"].component("BaseBubble1",V),r["a"].component("BaseBubble2",K);var U=n("f309");n("6287");r["a"].use(U["a"]);var W=new U["a"]({theme:{themes:{light:{primary:"#bbbaaa",secondary:"#BFADA5",accent:"#D8EBF1",info:"#1d62ff",grey:"#fafafa"}}}}),Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("core-app-bar"),n("router-view"),n("core-footer")],1)},z=[],G=(n("d3b7"),n("3ca3"),n("ddb0"),{name:"App",components:{CoreAppBar:function(){return n.e("chunk-78513404").then(n.bind(null,"dc21"))},CoreFooter:function(){return n.e("chunk-446cf39b").then(n.bind(null,"7a74"))}}}),Q=G,R=n("7496"),X=Object(l["a"])(Q,Y,z,!1,null,null,null),Z=X.exports;s()(X,{VApp:R["a"]});var ee=n("8c4f"),te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("welcome"),n("hobonichi"),n("ymobile"),n("arine"),n("minkabu")],1)},ne=[],re={name:"CoreView",components:{Arine:function(){return n.e("chunk-89d1ce34").then(n.bind(null,"bc78"))},Minkabu:function(){return n.e("chunk-71e73920").then(n.bind(null,"8cbf"))},Hobonichi:function(){return n.e("chunk-f03beb72").then(n.bind(null,"2376"))},Ymobile:function(){return n.e("chunk-74f2ff22").then(n.bind(null,"18f1"))},Welcome:function(){return Promise.all([n.e("chunk-4ff03952"),n.e("chunk-7b10cf8a")]).then(n.bind(null,"1ddd"))}}},ae=re,oe=(n("5262"),Object(l["a"])(ae,te,ne,!1,null,null,null)),ue=oe.exports,ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("about")],1)},le=[],ie={name:"CoreAbout",components:{about:function(){return Promise.all([n.e("chunk-4ff03952"),n.e("chunk-25814178")]).then(n.bind(null,"2561"))}}},se=ie,fe=(n("c9b5"),Object(l["a"])(se,ce,le,!1,null,null,null)),he=fe.exports;r["a"].use(ee["a"]);var pe=[{path:"/",name:"Home",component:ue},{path:"/about",name:"About",component:he}],de=new ee["a"]({mode:"history",base:"/seolah_sora/",routes:pe}),be=de;r["a"].config.productionTip=!1,new r["a"]({vuetify:W,router:be,render:function(e){return e(Z)}}).$mount("#app")},6287:function(e,t,n){},"70bc":function(e,t,n){},"70f7":function(e,t,n){},"94e0":function(e,t,n){e.exports=n.p+"img/bubbles1.png"},9997:function(e,t,n){"use strict";n("70bc")},"9af2":function(e,t,n){e.exports=n.p+"img/bubbles2.png"},c9b5:function(e,t,n){"use strict";n("ff48")},ff48:function(e,t,n){}});
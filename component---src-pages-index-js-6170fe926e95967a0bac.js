(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[293],{7473:function(t,e,r){var n=r(8420),o=String,a=TypeError;t.exports=function(t){if("object"==typeof t||n(t))return t;throw a("Can't set "+o(t)+" as a prototype")}},6004:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},5343:function(t,e,r){"use strict";var n,o,a,i=r(6004),c=r(5077),s=r(200),l=r(8420),u=r(5335),f=r(6490),p=r(3062),y=r(3838),m=r(7712),d=r(7485),h=r(6477),v=r(7658),g=r(7970),A=r(9686),E=r(1602),x=r(665),b=r(9206),T=b.enforce,w=b.get,N=s.Int8Array,_=N&&N.prototype,S=s.Uint8ClampedArray,M=S&&S.prototype,O=N&&g(N),k=_&&g(_),C=Object.prototype,R=s.TypeError,B=E("toStringTag"),I=x("TYPED_ARRAY_TAG"),j="TypedArrayConstructor",F=i&&!!A&&"Opera"!==p(s.opera),P=!1,U={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},W={BigInt64Array:8,BigUint64Array:8},V=function(t){var e=g(t);if(u(e)){var r=w(e);return r&&f(r,j)?r[j]:V(e)}},D=function(t){if(!u(t))return!1;var e=p(t);return f(U,e)||f(W,e)};for(n in U)(a=(o=s[n])&&o.prototype)?T(a)[j]=o:F=!1;for(n in W)(a=(o=s[n])&&o.prototype)&&(T(a)[j]=o);if((!F||!l(O)||O===Function.prototype)&&(O=function(){throw R("Incorrect invocation")},F))for(n in U)s[n]&&A(s[n],O);if((!F||!k||k===C)&&(k=O.prototype,F))for(n in U)s[n]&&A(s[n].prototype,k);if(F&&g(M)!==k&&A(M,k),c&&!f(k,B))for(n in P=!0,h(k,B,{configurable:!0,get:function(){return u(this)?this[I]:void 0}}),U)s[n]&&m(s[n],I,n);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:F,TYPED_ARRAY_TAG:P&&I,aTypedArray:function(t){if(D(t))return t;throw R("Target is not a typed array")},aTypedArrayConstructor:function(t){if(l(t)&&(!A||v(O,t)))return t;throw R(y(t)+" is not a typed array constructor")},exportTypedArrayMethod:function(t,e,r,n){if(c){if(r)for(var o in U){var a=s[o];if(a&&f(a.prototype,t))try{delete a.prototype[t]}catch(i){try{a.prototype[t]=e}catch(l){}}}k[t]&&!r||d(k,t,r?e:F&&_[t]||e,n)}},exportTypedArrayStaticMethod:function(t,e,r){var n,o;if(c){if(A){if(r)for(n in U)if((o=s[n])&&f(o,t))try{delete o[t]}catch(a){}if(O[t]&&!r)return;try{return d(O,t,r?e:F&&O[t]||e)}catch(a){}}for(n in U)!(o=s[n])||o[t]&&!r||d(o,t,e)}},getTypedArrayConstructor:V,isView:function(t){if(!u(t))return!1;var e=p(t);return"DataView"===e||f(U,e)||f(W,e)},isTypedArray:D,TypedArray:O,TypedArrayPrototype:k}},6056:function(t,e,r){var n=r(6539),o=r(3493),a=r(2057),i=Array,c=Math.max;t.exports=function(t,e,r){for(var s=o(t),l=n(e,s),u=n(void 0===r?s:r,s),f=i(c(u-l,0)),p=0;l<u;l++,p++)a(f,p,t[l]);return f.length=p,f}},8039:function(t,e,r){var n=r(6056),o=Math.floor,a=function(t,e){var r=t.length,s=o(r/2);return r<8?i(t,e):c(t,a(n(t,0,s),e),a(n(t,s),e),e)},i=function(t,e){for(var r,n,o=t.length,a=1;a<o;){for(n=a,r=t[a];n&&e(t[n-1],r)>0;)t[n]=t[--n];n!==a++&&(t[n]=r)}return t},c=function(t,e,r,n){for(var o=e.length,a=r.length,i=0,c=0;i<o||c<a;)t[i+c]=i<o&&c<a?n(e[i],r[c])<=0?e[i++]:r[c++]:i<o?e[i++]:r[c++];return t};t.exports=a},8569:function(t,e,r){var n=r(281),o=n({}.toString),a=n("".slice);t.exports=function(t){return a(o(t),8,-1)}},3062:function(t,e,r){var n=r(3129),o=r(8420),a=r(8569),i=r(1602)("toStringTag"),c=Object,s="Arguments"==a(function(){return arguments}());t.exports=n?a:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(r){}}(e=c(t),i))?r:s?a(e):"Object"==(n=a(e))&&o(e.callee)?"Arguments":n}},7168:function(t,e,r){var n=r(2074);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},2057:function(t,e,r){"use strict";var n=r(6032),o=r(3610),a=r(6843);t.exports=function(t,e,r){var i=n(e);i in t?o.f(t,i,a(0,r)):t[i]=r}},7485:function(t,e,r){var n=r(8420),o=r(3610),a=r(8218),i=r(9430);t.exports=function(t,e,r,c){c||(c={});var s=c.enumerable,l=void 0!==c.name?c.name:e;if(n(r)&&a(r,l,c),c.global)s?t[e]=r:i(e,r);else{try{c.unsafe?t[e]&&(s=!0):delete t[e]}catch(u){}s?t[e]=r:o.f(t,e,{value:r,enumerable:!1,configurable:!c.nonConfigurable,writable:!c.nonWritable})}return t}},3727:function(t,e,r){var n=r(7061).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},7413:function(t,e,r){var n=r(7061);t.exports=/MSIE|Trident/.test(n)},2346:function(t,e,r){var n=r(7061).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},1385:function(t,e,r){var n=r(281),o=r(4601);t.exports=function(t,e,r){try{return n(o(Object.getOwnPropertyDescriptor(t,e)[r]))}catch(a){}}},3091:function(t,e,r){var n=r(8569),o=r(281);t.exports=function(t){if("Function"===n(t))return o(t)}},3493:function(t,e,r){var n=r(3747);t.exports=function(t){return n(t.length)}},9830:function(t){var e=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var n=+t;return(n>0?r:e)(n)}},7970:function(t,e,r){var n=r(6490),o=r(8420),a=r(2612),i=r(5904),c=r(7168),s=i("IE_PROTO"),l=Object,u=l.prototype;t.exports=c?l.getPrototypeOf:function(t){var e=a(t);if(n(e,s))return e[s];var r=e.constructor;return o(r)&&e instanceof r?r.prototype:e instanceof l?u:null}},9686:function(t,e,r){var n=r(1385),o=r(3938),a=r(7473);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=n(Object.prototype,"__proto__","set"))(r,[]),e=r instanceof Array}catch(i){}return function(r,n){return o(r),a(n),e?t(r,n):r.__proto__=n,r}}():void 0)},6539:function(t,e,r){var n=r(9328),o=Math.max,a=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):a(r,e)}},9328:function(t,e,r){var n=r(9830);t.exports=function(t){var e=+t;return e!=e||0===e?0:n(e)}},3747:function(t,e,r){var n=r(9328),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},3720:function(t,e,r){var n=r(5955),o=RangeError;t.exports=function(t,e){var r=n(t);if(r%e)throw o("Wrong offset");return r}},5955:function(t,e,r){var n=r(9328),o=RangeError;t.exports=function(t){var e=n(t);if(e<0)throw o("The argument can't be less than 0");return e}},3129:function(t,e,r){var n={};n[r(1602)("toStringTag")]="z",t.exports="[object z]"===String(n)},3266:function(t,e,r){"use strict";var n=r(200),o=r(2368),a=r(5343),i=r(3493),c=r(3720),s=r(2612),l=r(2074),u=n.RangeError,f=n.Int8Array,p=f&&f.prototype,y=p&&p.set,m=a.aTypedArray,d=a.exportTypedArrayMethod,h=!l((function(){var t=new Uint8ClampedArray(2);return o(y,t,{length:1,0:3},1),3!==t[1]})),v=h&&a.NATIVE_ARRAY_BUFFER_VIEWS&&l((function(){var t=new f(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]}));d("set",(function(t){m(this);var e=c(arguments.length>1?arguments[1]:void 0,1),r=s(t);if(h)return o(y,this,r,e);var n=this.length,a=i(r),l=0;if(a+e>n)throw u("Wrong length");for(;l<a;)this[e+l]=r[l++]}),!h||v)},2432:function(t,e,r){"use strict";var n=r(200),o=r(3091),a=r(2074),i=r(4601),c=r(8039),s=r(5343),l=r(3727),u=r(7413),f=r(6845),p=r(2346),y=s.aTypedArray,m=s.exportTypedArrayMethod,d=n.Uint16Array,h=d&&o(d.prototype.sort),v=!(!h||a((function(){h(new d(2),null)}))&&a((function(){h(new d(2),{})}))),g=!!h&&!a((function(){if(f)return f<74;if(l)return l<67;if(u)return!0;if(p)return p<602;var t,e,r=new d(516),n=Array(516);for(t=0;t<516;t++)e=t%4,r[t]=515-t,n[t]=t-2*e+3;for(h(r,(function(t,e){return(t/4|0)-(e/4|0)})),t=0;t<516;t++)if(r[t]!==n[t])return!0}));m("sort",(function(t){return void 0!==t&&i(t),g?h(this,t):c(y(this),function(t){return function(e,r){return void 0!==t?+t(e,r)||0:r!=r?-1:e!=e?1:0===e&&0===r?1/e>0&&1/r<0?1:-1:e>r}}(t))}),!g||v)},2610:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return m}});var n=r(7387),o=r(6540),a=r(2727),i=r(7469),c=r(4506),s=r(9913),l=r(4794),u="1.4.5";const f=`<p>SmartBlock is a block styled editor created by JavaScript. Which gives you nice experience of editing contents at touchscreen. On this page you can see it in action. Try to edit this text ! :)</p>\n<h2>Features</h2>\n<ul>\n  <li>Easy to use with touchscreen device (e.g. smartphone, tablet)</li>\n  <li>Fully customizable</li>\n  <li>Block styled editor</li>\n  <li>Keep clean HTML and wipe out unnecessary tags</li>\n  <li>Get the result as HTML or JSON</li>\n  <li>Keep style when copy and paste contents</li>\n</ul>\n<p style="text-align:center;">SmartBlock is provided with MIT license. <br/>Made by : @appleple ♥ OSS</p>\n<img src="${(0,l.withPrefix)("/footer.svg")}" />\n`;function p(t){const e="undefined"==typeof window,{data:r}=t,{markdownRemark:n}=r,[a,i]=o.useState(""),[p,y]=o.useState(""),[m,d]=o.useState("html");return o.createElement(o.Fragment,null,o.createElement("section",{className:"hero is-center firstview"},o.createElement("div",{className:"inner is-small"},o.createElement("div",{className:"box",style:{textAlign:"center"}},o.createElement("p",{className:"margin-top-medium lead"},"Modern block styled editor ",o.createElement("br",null),"powered with React and ProseMirror",o.createElement("br",null)," Easier to edit on touchscreen."))),o.createElement("div",{className:"inner hero-inner",style:{textAlign:"center"}},o.createElement(l.Link,{to:"/get-started",className:"button"},"Get Started"),o.createElement("p",{className:"small"},"Current Version : Ver.",u))),o.createElement("main",{className:"main"},o.createElement("div",{className:"content"},o.createElement("section",{className:"section",style:{paddingTop:"0"}},o.createElement("div",{className:"inner is-small"},o.createElement("div",{className:"app-frame"},o.createElement("div",{className:"app-frame-inner"},!e&&o.createElement(s.SmartBlock,{showTitle:!0,titleText:"What is SmartBlock?",extensions:[].concat((0,c.A)(s.Extensions),[new s.Code,new s.Image({withCaption:!1,imgFullClassName:"full",imgClassName:"small"})]),html:f,onChange:t=>{let{html:e,json:r}=t;i(e),y(r)}}))),o.createElement("h2",{style:{marginTop:"-50px"}},"Output Result"),o.createElement("div",{className:"tab",style:{marginBottom:"50px"}},o.createElement("div",{className:"tab-list"},o.createElement("a",{href:"#",className:"html"===m?"is-current":"",onClick:t=>{t.preventDefault(),d("html")}},"HTML"),o.createElement("a",{href:"#",className:"json"===m?"is-current":"",onClick:t=>{t.preventDefault(),d("json")}},"JSON")),o.createElement("div",{className:"tab-content"},o.createElement("div",{className:"is-active"},"html"===m&&o.createElement("pre",{className:"language-html"},o.createElement("code",null,a)),"json"===m&&o.createElement("pre",{className:"language-html"},o.createElement("code",null,JSON.stringify(p)))))),o.createElement("div",{dangerouslySetInnerHTML:{__html:n.html}}))))))}let y=function(t){function e(){return t.apply(this,arguments)||this}return(0,n.A)(e,t),e.prototype.render=function(){const{data:t}=this.props,e=t.site.siteMetadata.title;return o.createElement(a.A,{location:this.props.location,title:e},o.createElement(i.A,{title:"SmartBlock - A Modern Block Based Wysiwyg Editor using React and ProseMirror",description:"SmartBlock - A Modern Block Based Wysiwyg Editor using React and ProseMirror"}),o.createElement(p,{data:t}))},e}(o.Component);var m=y}}]);
//# sourceMappingURL=component---src-pages-index-js-6170fe926e95967a0bac.js.map
(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[293],{4601:function(e,t,r){var n=r(8420),o=r(3838),a=TypeError;e.exports=function(e){if(n(e))return e;throw a(o(e)+" is not a function")}},7473:function(e,t,r){var n=r(8420),o=String,a=TypeError;e.exports=function(e){if("object"==typeof e||n(e))return e;throw a("Can't set "+o(e)+" as a prototype")}},3938:function(e,t,r){var n=r(5335),o=String,a=TypeError;e.exports=function(e){if(n(e))return e;throw a(o(e)+" is not an object")}},6004:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},5343:function(e,t,r){"use strict";var n,o,a,i=r(6004),c=r(5077),s=r(200),u=r(8420),l=r(5335),p=r(6490),f=r(3062),m=r(3838),y=r(7712),d=r(7485),v=r(6477),M=r(7658),E=r(7970),h=r(9686),x=r(1602),g=r(665),b=r(9206),w=b.enforce,N=b.get,L=s.Int8Array,S=L&&L.prototype,T=s.Uint8ClampedArray,j=T&&T.prototype,D=L&&E(L),O=S&&E(S),A=Object.prototype,I=s.TypeError,C=x("toStringTag"),z=g("TYPED_ARRAY_TAG"),k="TypedArrayConstructor",_=i&&!!h&&"Opera"!==f(s.opera),P=!1,U={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},Y={BigInt64Array:8,BigUint64Array:8},R=function(e){var t=E(e);if(l(t)){var r=N(t);return r&&p(r,k)?r[k]:R(t)}},Q=function(e){if(!l(e))return!1;var t=f(e);return p(U,t)||p(Y,t)};for(n in U)(a=(o=s[n])&&o.prototype)?w(a)[k]=o:_=!1;for(n in Y)(a=(o=s[n])&&o.prototype)&&(w(a)[k]=o);if((!_||!u(D)||D===Function.prototype)&&(D=function(){throw I("Incorrect invocation")},_))for(n in U)s[n]&&h(s[n],D);if((!_||!O||O===A)&&(O=D.prototype,_))for(n in U)s[n]&&h(s[n].prototype,O);if(_&&E(j)!==O&&h(j,O),c&&!p(O,C))for(n in P=!0,v(O,C,{configurable:!0,get:function(){return l(this)?this[z]:void 0}}),U)s[n]&&y(s[n],z,n);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:_,TYPED_ARRAY_TAG:P&&z,aTypedArray:function(e){if(Q(e))return e;throw I("Target is not a typed array")},aTypedArrayConstructor:function(e){if(u(e)&&(!h||M(D,e)))return e;throw I(m(e)+" is not a typed array constructor")},exportTypedArrayMethod:function(e,t,r,n){if(c){if(r)for(var o in U){var a=s[o];if(a&&p(a.prototype,e))try{delete a.prototype[e]}catch(i){try{a.prototype[e]=t}catch(u){}}}O[e]&&!r||d(O,e,r?t:_&&S[e]||t,n)}},exportTypedArrayStaticMethod:function(e,t,r){var n,o;if(c){if(h){if(r)for(n in U)if((o=s[n])&&p(o,e))try{delete o[e]}catch(a){}if(D[e]&&!r)return;try{return d(D,e,r?t:_&&D[e]||t)}catch(a){}}for(n in U)!(o=s[n])||o[e]&&!r||d(o,e,t)}},getTypedArrayConstructor:R,isView:function(e){if(!l(e))return!1;var t=f(e);return"DataView"===t||p(U,t)||p(Y,t)},isTypedArray:Q,TypedArray:D,TypedArrayPrototype:O}},6056:function(e,t,r){var n=r(6539),o=r(3493),a=r(2057),i=Array,c=Math.max;e.exports=function(e,t,r){for(var s=o(e),u=n(t,s),l=n(void 0===r?s:r,s),p=i(c(l-u,0)),f=0;u<l;u++,f++)a(p,f,e[u]);return p.length=f,p}},8039:function(e,t,r){var n=r(6056),o=Math.floor,a=function(e,t){var r=e.length,s=o(r/2);return r<8?i(e,t):c(e,a(n(e,0,s),t),a(n(e,s),t),t)},i=function(e,t){for(var r,n,o=e.length,a=1;a<o;){for(n=a,r=e[a];n&&t(e[n-1],r)>0;)e[n]=e[--n];n!==a++&&(e[n]=r)}return e},c=function(e,t,r,n){for(var o=t.length,a=r.length,i=0,c=0;i<o||c<a;)e[i+c]=i<o&&c<a?n(t[i],r[c])<=0?t[i++]:r[c++]:i<o?t[i++]:r[c++];return e};e.exports=a},8569:function(e,t,r){var n=r(281),o=n({}.toString),a=n("".slice);e.exports=function(e){return a(o(e),8,-1)}},3062:function(e,t,r){var n=r(3129),o=r(8420),a=r(8569),i=r(1602)("toStringTag"),c=Object,s="Arguments"==a(function(){return arguments}());e.exports=n?a:function(e){var t,r,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(r){}}(t=c(e),i))?r:s?a(t):"Object"==(n=a(t))&&o(t.callee)?"Arguments":n}},7168:function(e,t,r){var n=r(2074);e.exports=!n((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},7712:function(e,t,r){var n=r(5077),o=r(3610),a=r(6843);e.exports=n?function(e,t,r){return o.f(e,t,a(1,r))}:function(e,t,r){return e[t]=r,e}},6843:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},2057:function(e,t,r){"use strict";var n=r(6032),o=r(3610),a=r(6843);e.exports=function(e,t,r){var i=n(t);i in e?o.f(e,i,a(0,r)):e[i]=r}},6477:function(e,t,r){var n=r(8218),o=r(3610);e.exports=function(e,t,r){return r.get&&n(r.get,t,{getter:!0}),r.set&&n(r.set,t,{setter:!0}),o.f(e,t,r)}},7485:function(e,t,r){var n=r(8420),o=r(3610),a=r(8218),i=r(9430);e.exports=function(e,t,r,c){c||(c={});var s=c.enumerable,u=void 0!==c.name?c.name:t;if(n(r)&&a(r,u,c),c.global)s?e[t]=r:i(t,r);else{try{c.unsafe?e[t]&&(s=!0):delete e[t]}catch(l){}s?e[t]=r:o.f(e,t,{value:r,enumerable:!1,configurable:!c.nonConfigurable,writable:!c.nonWritable})}return e}},9430:function(e,t,r){var n=r(200),o=Object.defineProperty;e.exports=function(e,t){try{o(n,e,{value:t,configurable:!0,writable:!0})}catch(r){n[e]=t}return t}},5077:function(e,t,r){var n=r(2074);e.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},6568:function(e){var t="object"==typeof document&&document.all,r=void 0===t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:r}},3262:function(e,t,r){var n=r(200),o=r(5335),a=n.document,i=o(a)&&o(a.createElement);e.exports=function(e){return i?a.createElement(e):{}}},3727:function(e,t,r){var n=r(7061).match(/firefox\/(\d+)/i);e.exports=!!n&&+n[1]},7413:function(e,t,r){var n=r(7061);e.exports=/MSIE|Trident/.test(n)},7061:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},6845:function(e,t,r){var n,o,a=r(200),i=r(7061),c=a.process,s=a.Deno,u=c&&c.versions||s&&s.version,l=u&&u.v8;l&&(o=(n=l.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&i&&(!(n=i.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=i.match(/Chrome\/(\d+)/))&&(o=+n[1]),e.exports=o},2346:function(e,t,r){var n=r(7061).match(/AppleWebKit\/(\d+)\./);e.exports=!!n&&+n[1]},2074:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},8823:function(e,t,r){var n=r(2074);e.exports=!n((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},2368:function(e,t,r){var n=r(8823),o=Function.prototype.call;e.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},2071:function(e,t,r){var n=r(5077),o=r(6490),a=Function.prototype,i=n&&Object.getOwnPropertyDescriptor,c=o(a,"name"),s=c&&"something"===function(){}.name,u=c&&(!n||n&&i(a,"name").configurable);e.exports={EXISTS:c,PROPER:s,CONFIGURABLE:u}},1385:function(e,t,r){var n=r(281),o=r(4601);e.exports=function(e,t,r){try{return n(o(Object.getOwnPropertyDescriptor(e,t)[r]))}catch(a){}}},3091:function(e,t,r){var n=r(8569),o=r(281);e.exports=function(e){if("Function"===n(e))return o(e)}},281:function(e,t,r){var n=r(8823),o=Function.prototype,a=o.call,i=n&&o.bind.bind(a,a);e.exports=n?i:function(e){return function(){return a.apply(e,arguments)}}},6492:function(e,t,r){var n=r(200),o=r(8420);e.exports=function(e,t){return arguments.length<2?(r=n[e],o(r)?r:void 0):n[e]&&n[e][t];var r}},6457:function(e,t,r){var n=r(4601),o=r(8406);e.exports=function(e,t){var r=e[t];return o(r)?void 0:n(r)}},200:function(e,t,r){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||this||Function("return this")()},6490:function(e,t,r){var n=r(281),o=r(2612),a=n({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return a(o(e),t)}},7708:function(e){e.exports={}},7694:function(e,t,r){var n=r(5077),o=r(2074),a=r(3262);e.exports=!n&&!o((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},9965:function(e,t,r){var n=r(281),o=r(8420),a=r(9310),i=n(Function.toString);o(a.inspectSource)||(a.inspectSource=function(e){return i(e)}),e.exports=a.inspectSource},9206:function(e,t,r){var n,o,a,i=r(8369),c=r(200),s=r(5335),u=r(7712),l=r(6490),p=r(9310),f=r(5904),m=r(7708),y="Object already initialized",d=c.TypeError,v=c.WeakMap;if(i||p.state){var M=p.state||(p.state=new v);M.get=M.get,M.has=M.has,M.set=M.set,n=function(e,t){if(M.has(e))throw d(y);return t.facade=e,M.set(e,t),t},o=function(e){return M.get(e)||{}},a=function(e){return M.has(e)}}else{var E=f("state");m[E]=!0,n=function(e,t){if(l(e,E))throw d(y);return t.facade=e,u(e,E,t),t},o=function(e){return l(e,E)?e[E]:{}},a=function(e){return l(e,E)}}e.exports={set:n,get:o,has:a,enforce:function(e){return a(e)?o(e):n(e,{})},getterFor:function(e){return function(t){var r;if(!s(t)||(r=o(t)).type!==e)throw d("Incompatible receiver, "+e+" required");return r}}}},8420:function(e,t,r){var n=r(6568),o=n.all;e.exports=n.IS_HTMLDDA?function(e){return"function"==typeof e||e===o}:function(e){return"function"==typeof e}},8406:function(e){e.exports=function(e){return null==e}},5335:function(e,t,r){var n=r(8420),o=r(6568),a=o.all;e.exports=o.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:n(e)||e===a}:function(e){return"object"==typeof e?null!==e:n(e)}},6926:function(e){e.exports=!1},2328:function(e,t,r){var n=r(6492),o=r(8420),a=r(7658),i=r(5225),c=Object;e.exports=i?function(e){return"symbol"==typeof e}:function(e){var t=n("Symbol");return o(t)&&a(t.prototype,c(e))}},3493:function(e,t,r){var n=r(3747);e.exports=function(e){return n(e.length)}},8218:function(e,t,r){var n=r(281),o=r(2074),a=r(8420),i=r(6490),c=r(5077),s=r(2071).CONFIGURABLE,u=r(9965),l=r(9206),p=l.enforce,f=l.get,m=String,y=Object.defineProperty,d=n("".slice),v=n("".replace),M=n([].join),E=c&&!o((function(){return 8!==y((function(){}),"length",{value:8}).length})),h=String(String).split("String"),x=e.exports=function(e,t,r){"Symbol("===d(m(t),0,7)&&(t="["+v(m(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!i(e,"name")||s&&e.name!==t)&&(c?y(e,"name",{value:t,configurable:!0}):e.name=t),E&&r&&i(r,"arity")&&e.length!==r.arity&&y(e,"length",{value:r.arity});try{r&&i(r,"constructor")&&r.constructor?c&&y(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(o){}var n=p(e);return i(n,"source")||(n.source=M(h,"string"==typeof t?t:"")),e};Function.prototype.toString=x((function(){return a(this)&&f(this).source||u(this)}),"toString")},9830:function(e){var t=Math.ceil,r=Math.floor;e.exports=Math.trunc||function(e){var n=+e;return(n>0?r:t)(n)}},3610:function(e,t,r){var n=r(5077),o=r(7694),a=r(4491),i=r(3938),c=r(6032),s=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,p="enumerable",f="configurable",m="writable";t.f=n?a?function(e,t,r){if(i(e),t=c(t),i(r),"function"==typeof e&&"prototype"===t&&"value"in r&&m in r&&!r[m]){var n=l(e,t);n&&n[m]&&(e[t]=r.value,r={configurable:f in r?r[f]:n[f],enumerable:p in r?r[p]:n[p],writable:!1})}return u(e,t,r)}:u:function(e,t,r){if(i(e),t=c(t),i(r),o)try{return u(e,t,r)}catch(n){}if("get"in r||"set"in r)throw s("Accessors not supported");return"value"in r&&(e[t]=r.value),e}},7970:function(e,t,r){var n=r(6490),o=r(8420),a=r(2612),i=r(5904),c=r(7168),s=i("IE_PROTO"),u=Object,l=u.prototype;e.exports=c?u.getPrototypeOf:function(e){var t=a(e);if(n(t,s))return t[s];var r=t.constructor;return o(r)&&t instanceof r?r.prototype:t instanceof u?l:null}},7658:function(e,t,r){var n=r(281);e.exports=n({}.isPrototypeOf)},9686:function(e,t,r){var n=r(1385),o=r(3938),a=r(7473);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{(e=n(Object.prototype,"__proto__","set"))(r,[]),t=r instanceof Array}catch(i){}return function(r,n){return o(r),a(n),t?e(r,n):r.__proto__=n,r}}():void 0)},9751:function(e,t,r){var n=r(2368),o=r(8420),a=r(5335),i=TypeError;e.exports=function(e,t){var r,c;if("string"===t&&o(r=e.toString)&&!a(c=n(r,e)))return c;if(o(r=e.valueOf)&&!a(c=n(r,e)))return c;if("string"!==t&&o(r=e.toString)&&!a(c=n(r,e)))return c;throw i("Can't convert object to primitive value")}},1229:function(e,t,r){var n=r(8406),o=TypeError;e.exports=function(e){if(n(e))throw o("Can't call method on "+e);return e}},5904:function(e,t,r){var n=r(2),o=r(665),a=n("keys");e.exports=function(e){return a[e]||(a[e]=o(e))}},9310:function(e,t,r){var n=r(200),o=r(9430),a="__core-js_shared__",i=n[a]||o(a,{});e.exports=i},2:function(e,t,r){var n=r(6926),o=r(9310);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.31.1",mode:n?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.31.1/LICENSE",source:"https://github.com/zloirock/core-js"})},2072:function(e,t,r){var n=r(6845),o=r(2074),a=r(200).String;e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!a(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},6539:function(e,t,r){var n=r(9328),o=Math.max,a=Math.min;e.exports=function(e,t){var r=n(e);return r<0?o(r+t,0):a(r,t)}},9328:function(e,t,r){var n=r(9830);e.exports=function(e){var t=+e;return t!=t||0===t?0:n(t)}},3747:function(e,t,r){var n=r(9328),o=Math.min;e.exports=function(e){return e>0?o(n(e),9007199254740991):0}},2612:function(e,t,r){var n=r(1229),o=Object;e.exports=function(e){return o(n(e))}},3720:function(e,t,r){var n=r(5955),o=RangeError;e.exports=function(e,t){var r=n(e);if(r%t)throw o("Wrong offset");return r}},5955:function(e,t,r){var n=r(9328),o=RangeError;e.exports=function(e){var t=n(e);if(t<0)throw o("The argument can't be less than 0");return t}},874:function(e,t,r){var n=r(2368),o=r(5335),a=r(2328),i=r(6457),c=r(9751),s=r(1602),u=TypeError,l=s("toPrimitive");e.exports=function(e,t){if(!o(e)||a(e))return e;var r,s=i(e,l);if(s){if(void 0===t&&(t="default"),r=n(s,e,t),!o(r)||a(r))return r;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},6032:function(e,t,r){var n=r(874),o=r(2328);e.exports=function(e){var t=n(e,"string");return o(t)?t:t+""}},3129:function(e,t,r){var n={};n[r(1602)("toStringTag")]="z",e.exports="[object z]"===String(n)},3838:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(r){return"Object"}}},665:function(e,t,r){var n=r(281),o=0,a=Math.random(),i=n(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+i(++o+a,36)}},5225:function(e,t,r){var n=r(2072);e.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},4491:function(e,t,r){var n=r(5077),o=r(2074);e.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8369:function(e,t,r){var n=r(200),o=r(8420),a=n.WeakMap;e.exports=o(a)&&/native code/.test(String(a))},1602:function(e,t,r){var n=r(200),o=r(2),a=r(6490),i=r(665),c=r(2072),s=r(5225),u=n.Symbol,l=o("wks"),p=s?u.for||u:u&&u.withoutSetter||i;e.exports=function(e){return a(l,e)||(l[e]=c&&a(u,e)?u[e]:p("Symbol."+e)),l[e]}},3266:function(e,t,r){"use strict";var n=r(200),o=r(2368),a=r(5343),i=r(3493),c=r(3720),s=r(2612),u=r(2074),l=n.RangeError,p=n.Int8Array,f=p&&p.prototype,m=f&&f.set,y=a.aTypedArray,d=a.exportTypedArrayMethod,v=!u((function(){var e=new Uint8ClampedArray(2);return o(m,e,{length:1,0:3},1),3!==e[1]})),M=v&&a.NATIVE_ARRAY_BUFFER_VIEWS&&u((function(){var e=new p(2);return e.set(1),e.set("2",1),0!==e[0]||2!==e[1]}));d("set",(function(e){y(this);var t=c(arguments.length>1?arguments[1]:void 0,1),r=s(e);if(v)return o(m,this,r,t);var n=this.length,a=i(r),u=0;if(a+t>n)throw l("Wrong length");for(;u<a;)this[t+u]=r[u++]}),!v||M)},2432:function(e,t,r){"use strict";var n=r(200),o=r(3091),a=r(2074),i=r(4601),c=r(8039),s=r(5343),u=r(3727),l=r(7413),p=r(6845),f=r(2346),m=s.aTypedArray,y=s.exportTypedArrayMethod,d=n.Uint16Array,v=d&&o(d.prototype.sort),M=!(!v||a((function(){v(new d(2),null)}))&&a((function(){v(new d(2),{})}))),E=!!v&&!a((function(){if(p)return p<74;if(u)return u<67;if(l)return!0;if(f)return f<602;var e,t,r=new d(516),n=Array(516);for(e=0;e<516;e++)t=e%4,r[e]=515-e,n[e]=e-2*t+3;for(v(r,(function(e,t){return(e/4|0)-(t/4|0)})),e=0;e<516;e++)if(r[e]!==n[e])return!0}));y("sort",(function(e){return void 0!==e&&i(e),E?v(this,e):c(m(this),function(e){return function(t,r){return void 0!==e?+e(t,r)||0:r!=r?-1:t!=t?1:0===t&&0===r?1/t>0&&1/r<0?1:-1:t>r}}(e))}),!E||M)},2727:function(e,t,r){"use strict";r.d(t,{A:function(){return p}});var n=r(7387),o=r(6540),a=r(4794),i=r(8204);function c(e){const{post:t}=e;return o.createElement("div",{className:e.isOpen?"offcanvas is-active":"offcanvas"},o.createElement("div",{className:"offcanvas-overlay offcanvas-close"}),o.createElement("div",{className:"offcanvas-content"},o.createElement("button",{className:"button is-close offcanvas-close",onClick:()=>{e.onClose()}},o.createElement("span",null),o.createElement("span",null),o.createElement("span",null)),o.createElement("div",{className:"inner"},o.createElement("div",{className:"offcanvas-menu"},o.createElement(i.A,{active:t&&t.fields?t.fields.slug:""})),o.createElement("hr",null),o.createElement("div",{className:"offcanvas-menu"},o.createElement("a",{href:"https://github.com/appleple/smartblock",className:"button is-white is-small"},o.createElement("i",{className:"fa fa-github"})," GitHub"),o.createElement("a",{href:"https://github.com/appleple/smartblock/archive/master.zip",className:"button is-small"},o.createElement("i",{className:"fa fa-download"})," Download"),o.createElement("hr",null),o.createElement("p",null,"version 1.3.2")))))}function s(e){const[t,r]=o.useState(!1);return o.createElement(o.Fragment,null,o.createElement(c,{post:e.post,isOpen:t,onClose:()=>{r(!1)}}),o.createElement("header",{className:e.className},o.createElement("h1",{className:"logo is-small"},o.createElement(a.Link,{to:"/"},o.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzEuMTA2IiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTcxLjEwNiAzMCI+PGRlZnM+PHN0eWxlPi5hLC5ie2ZpbGw6I2ZmZjt9LmJ7Zm9udC1zaXplOjIzcHg7Zm9udC1mYW1pbHk6RnV0dXJhLUJvbGQsIEZ1dHVyYTtmb250LXdlaWdodDo3MDA7fTwvc3R5bGU+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03NTguOTYyIDI4Ni4wNzQpIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3NTguOTYyIC0yODMuMjY0KSI+PHBhdGggY2xhc3M9ImEiIGQ9Ik03ODEuMi0yODAuMjU4bC0xMC4wNDYtNS44YTEuNDMzLDEuNDMzLDAsMCwwLTEuNDM0LDBsLTEwLjA0Niw1LjhhMS40MzMsMS40MzMsMCwwLDAtLjcxNywxLjI0MnYxMS42YTEuNDMzLDEuNDMzLDAsMCwwLC43MTcsMS4yNDJsMTAuMDQ2LDUuOGExLjQzNCwxLjQzNCwwLDAsMCwuNzE3LjE5MiwxLjQzNCwxLjQzNCwwLDAsMCwuNzE3LS4xOTJsMTAuMDQ2LTUuOGExLjQzMywxLjQzMywwLDAsMCwuNzE3LTEuMjQydi0xMS42QTEuNDMzLDEuNDMzLDAsMCwwLDc4MS4yLTI4MC4yNThabS00LjI3OSwxMS43LTUuNjk1LDMuMjg4YTEuNTc1LDEuNTc1LDAsMCwxLS43ODkuMjExLDEuNTc3LDEuNTc3LDAsMCwxLS43ODktLjIxMWwtNS42OTUtMy4yODhhMS41NzgsMS41NzgsMCwwLDEtLjc4Ny0xLjQ0NmwuMTE5LTIuMzY1LDMuMTUzLjE1OC0uMDcsMS40LDQuMDcsMi4zNSwyLjUzOC0xLjQ2NS05LjAyMi01LjIwOWExLjU3OCwxLjU3OCwwLDAsMS0uNzg5LTEuMzY3LDEuNTc4LDEuNTc4LDAsMCwxLC43ODktMS4zNjdsNS42OTUtMy4yODhhMS41NzgsMS41NzgsMCwwLDEsMS41NzgsMGw1LjY5NSwzLjI4OGExLjU3OCwxLjU3OCwwLDAsMSwuNzg3LDEuNDQ2bC0uMTE5LDIuMzY1LTMuMTUyLS4xNTguMDctMS40LTQuMDctMi4zNUw3NjcuOS0yNzYuNWw5LjAyMiw1LjIwOWExLjU3NywxLjU3NywwLDAsMSwuNzg5LDEuMzY3QTEuNTc3LDEuNTc3LDAsMCwxLDc3Ni45MjUtMjY4LjU2MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03NTguOTYyIDI4Ni4yNSkiLz48L2c+PHRleHQgY2xhc3M9ImIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc4OS4wNjggLTI2Mi4wNzQpIj48dHNwYW4geD0iMCIgeT0iMCI+U21hcnRCbG9jazwvdHNwYW4+PC90ZXh0PjwvZz48L3N2Zz4=",alt:"SmartBlock"}))),o.createElement("nav",{className:"header-menu"},o.createElement("div",{className:"pulldown"},o.createElement(a.Link,{to:"/get-started"},"Document")),o.createElement("a",{href:"https://github.com/appleple/smartblock/",className:"button is-white is-small"},o.createElement("i",{className:"fa fa-github"}),"GitHub")),o.createElement("button",{className:"button is-burger hide-on-medium hide-on-large offcanvas-open",onClick:()=>{r(!0)}},o.createElement("span",null),o.createElement("span",null),o.createElement("span",null))))}function u(){return o.createElement(o.Fragment,null,o.createElement("div",{className:"section-devider"},o.createElement("section",{className:"section"},o.createElement("div",{className:"inner is-small"},o.createElement("h2",null,o.createElement("i",{className:"fa fa-book"})," Document"),o.createElement("p",null,"Usage, introduction of other functions, component introduction etc. ",o.createElement("br",null),"are described in detail in the document. "),o.createElement("p",null,o.createElement(a.Link,{to:"/get-started",className:"button"},o.createElement("i",{className:"fa fa-book"}),"Get Started")))),o.createElement("section",{className:"section"},o.createElement("div",{className:"inner is-small"},o.createElement("h2",null,o.createElement("i",{className:"fa fa-github"})," View on GitHub"),o.createElement("p",null,"SmartBlock was developed by ",o.createElement("a",{href:"https://twitter.com/appleplecom"},"@appleplecom")," and is open source (MIT license) on GitHub.",o.createElement("br",null),"Please send us feedback, requests, bug reports and pull requests!"),o.createElement("p",null,"If you like it, please press Star ;)"),o.createElement("p",{style:{marginTop:"10px"}},o.createElement("a",{href:"https://github.com/appleple/SmartBlock",className:"button is-white"},o.createElement("i",{className:"fa fa-github"})," GitHub page"))))),o.createElement("section",{className:"section github-section"},o.createElement("div",{className:"inner is-small"},o.createElement("p",null,"If you like our project, we glad to have star! :)"),o.createElement("a",{href:"https://github.com/appleple/smartblock/",className:"button is-white is-small"},o.createElement("i",{className:"fa fa-github"})," GitHub"))),o.createElement("footer",{className:"footer"},o.createElement("div",null,o.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNi42NDYiIGhlaWdodD0iNDEuNjA3IiB2aWV3Qm94PSIwIDAgMzYuNjQ2IDQxLjYwNyI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTc1OC45NjIgMjg2LjI1KSI+PHBhdGggY2xhc3M9ImEiIGQ9Ik03OTQuNDY0LTI3Ni42ODZsLTE2LjAzNS05LjI1OGEyLjI4NywyLjI4NywwLDAsMC0yLjI4OCwwbC0xNi4wMzUsOS4yNThhMi4yODgsMi4yODgsMCwwLDAtMS4xNDQsMS45ODJ2MTguNTE1YTIuMjg4LDIuMjg4LDAsMCwwLDEuMTQ0LDEuOTgybDE2LjAzNSw5LjI1OGEyLjI4OSwyLjI4OSwwLDAsMCwxLjE0NC4zMDcsMi4yODksMi4yODksMCwwLDAsMS4xNDQtLjMwN2wxNi4wMzUtOS4yNThhMi4yODgsMi4yODgsMCwwLDAsMS4xNDQtMS45ODJWLTI3NC43QTIuMjg4LDIuMjg4LDAsMCwwLDc5NC40NjQtMjc2LjY4NlptLTYuODMsMTguNjY5LTkuMDg5LDUuMjQ4YTIuNTE1LDIuNTE1LDAsMCwxLTEuMjU5LjMzNywyLjUxNiwyLjUxNiwwLDAsMS0xLjI1OS0uMzM3bC05LjA5LTUuMjQ4YTIuNTE5LDIuNTE5LDAsMCwxLTEuMjU2LTIuMzA4bC4xODktMy43NzUsNS4wMzIuMjUzLS4xMTIsMi4yMzcsNi41LDMuNzUxLDQuMDUyLTIuMzM5LTE0LjQtOC4zMTRhMi41MTksMi41MTksMCwwLDEtMS4yNTktMi4xODEsMi41MTksMi41MTksMCwwLDEsMS4yNTktMi4xODFsOS4wOS01LjI0OGEyLjUxOSwyLjUxOSwwLDAsMSwyLjUxOSwwbDkuMDg5LDUuMjQ4YTIuNTE5LDIuNTE5LDAsMCwxLDEuMjU3LDIuMzA4bC0uMTg5LDMuNzc1LTUuMDMyLS4yNTMuMTEyLTIuMjM3LTYuNS0zLjc1MS00LjA1MiwyLjMzOSwxNC40LDguMzE0YTIuNTE4LDIuNTE4LDAsMCwxLDEuMjU5LDIuMTgxQTIuNTE4LDIuNTE4LDAsMCwxLDc4Ny42MzQtMjU4LjAxN1oiLz48L2c+PC9zdmc+",alt:"SmartBlock"}),o.createElement("p",null,"A modern block styled editor built with React.",o.createElement("br",null)," SmartBlock is provided with MIT license. Made by @appleple ♥ OSS"))))}let l=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.A)(t,e),t.prototype.render=function(){const{children:e,post:t}=this.props;return o.createElement(o.Fragment,null,o.createElement(s,{className:`header is-sticky ${t&&"is-colored"}`,post:t}),e,o.createElement(u,null))},t}(o.Component);var p=l},7528:function(e,t,r){"use strict";var n=r(6540),o=r(4794);t.A=function(e){let{description:t="",title:r=""}=e;const{site:a}=(0,o.useStaticQuery)("63159454"),i=t||a.siteMetadata.description;return n.createElement(n.Fragment,null,n.createElement("title",null,`${r} | ${a.siteMetadata.title}`),n.createElement("meta",{name:"description",content:i}),n.createElement("meta",{property:"og:title",content:r}),n.createElement("meta",{property:"og:description",content:i}),n.createElement("meta",{property:"og:image",content:`http://appleple.github.io${(0,o.withPrefix)("/ogp.png")}`}),n.createElement("meta",{property:"og:image:secure_url",content:`https://appleple.github.io${(0,o.withPrefix)("/ogp.png")}`}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:image",content:`https://appleple.github.io${(0,o.withPrefix)("/ogp.png")}`}),n.createElement("meta",{name:"twitter:creator",content:a.siteMetadata.author}),n.createElement("meta",{name:"twitter:title",content:r}),n.createElement("meta",{name:"twitter:description",content:i}),n.createElement("link",{rel:"stylesheet",href:"https://unpkg.com/uny@0.2.9/dist/css/uny.min.css"}),n.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"}),n.createElement("link",{rel:"stylesheet",href:(0,o.withPrefix)("/prism.css")}),n.createElement("link",{rel:"stylesheet",href:(0,o.withPrefix)("/layout.css")}))}},8204:function(e,t,r){"use strict";r.d(t,{A:function(){return a}});var n=r(6540),o=r(4794);function a(e){return n.createElement("div",{style:{marginBottom:"2rem"}},n.createElement("div",{className:"type-h3"},n.createElement("span",null,"Getting Started")),n.createElement("div",{className:"tree"},n.createElement("ul",null,n.createElement("li",{className:-1!==e.active.indexOf("get-started")?"is-current":""},n.createElement(o.Link,{to:"/get-started"},"Installation")),n.createElement("li",{className:-1!==e.active.indexOf("usage")?"is-current":""},n.createElement(o.Link,{to:"/usage"},"Usage")))),n.createElement("div",{className:"type-h3"},n.createElement("span",null,"Extensions")),n.createElement("div",{className:"tree"},n.createElement("ul",null,n.createElement("li",{className:-1!==e.active.indexOf("blocks")?"is-current":""},n.createElement(o.Link,{to:"/blocks"},"Blocks")),n.createElement("li",{className:-1!==e.active.indexOf("marks")?"is-current":""},n.createElement(o.Link,{to:"/marks"},"Marks")),n.createElement("li",{className:-1!==e.active.indexOf("utils")?"is-current":""},n.createElement(o.Link,{to:"/utils"},"Utils")))),n.createElement("div",{className:"type-h3"},n.createElement("span",null,"API")),n.createElement("div",{className:"tree"},n.createElement("ul",null,n.createElement("li",{className:-1!==e.active.indexOf("props")?"is-current":""},n.createElement(o.Link,{to:"/props"},"Props")),n.createElement("li",{className:-1!==e.active.indexOf("customize")?"is-current":""},n.createElement(o.Link,{to:"/customize"},"Customize")))),n.createElement("div",{className:"type-h3"},n.createElement("span",null,"Community")),n.createElement("div",{className:"tree"},n.createElement("ul",null,n.createElement("li",{className:-1!==e.active.indexOf("qa")?"is-current":""},n.createElement(o.Link,{to:"/qa"},"Q&A")))))}},2610:function(e,t,r){"use strict";r.r(t),r.d(t,{Head:function(){return v},default:function(){return d}});var n=r(7387),o=r(6540),a=r(2727),i=r(7528),c=r(4506),s=r(2143),u=r(4794),l="1.4.5";const p=(0,o.lazy)((()=>Promise.resolve().then(r.t.bind(r,2143,23)).then((e=>({default:e.SmartBlock}))))),f=`<p>SmartBlock is a block styled editor created by JavaScript. Which gives you nice experience of editing contents at touchscreen. On this page you can see it in action. Try to edit this text ! :)</p>\n<h2>Features</h2>\n<ul>\n  <li>Easy to use with touchscreen device (e.g. smartphone, tablet)</li>\n  <li>Fully customizable</li>\n  <li>Block styled editor</li>\n  <li>Keep clean HTML and wipe out unnecessary tags</li>\n  <li>Get the result as HTML or JSON</li>\n  <li>Keep style when copy and paste contents</li>\n</ul>\n<p style="text-align:center;">SmartBlock is provided with MIT license. <br/>Made by : @appleple ♥ OSS</p>\n<img src="${(0,u.withPrefix)("/footer.svg")}" />\n`;function m(e){const t="undefined"==typeof window,{data:r}=e,{markdownRemark:n}=r,[a,i]=o.useState(""),[m,y]=o.useState(""),[d,v]=o.useState("html");return o.createElement(o.Fragment,null,o.createElement("section",{className:"hero is-center firstview"},o.createElement("div",{className:"inner is-small"},o.createElement("div",{className:"box",style:{textAlign:"center"}},o.createElement("p",{className:"margin-top-medium lead"},"Modern block styled editor ",o.createElement("br",null),"powered with React and ProseMirror",o.createElement("br",null)," Easier to edit on touchscreen."))),o.createElement("div",{className:"inner hero-inner",style:{textAlign:"center"}},o.createElement(u.Link,{to:"/get-started",className:"button"},"Get Started"),o.createElement("p",{className:"small"},"Current Version : Ver.",l))),o.createElement("main",{className:"main"},o.createElement("div",{className:"content"},o.createElement("section",{className:"section",style:{paddingTop:"0"}},o.createElement("div",{className:"inner is-small"},o.createElement("div",{className:"app-frame"},o.createElement("div",{className:"app-frame-inner"},!t&&o.createElement(o.Suspense,{fallback:o.createElement("div",null)},o.createElement(p,{showTitle:!0,titleText:"What is SmartBlock?",extensions:[].concat((0,c.A)(s.Extensions),[new s.Code,new s.Image({withCaption:!1,imgFullClassName:"full",imgClassName:"small"})]),html:f,onChange:e=>{let{html:t,json:r}=e;i(t),y(r)}})))),o.createElement("h2",{style:{marginTop:"-50px"}},"Output Result"),o.createElement("div",{className:"tab",style:{marginBottom:"50px"}},o.createElement("div",{className:"tab-list"},o.createElement("a",{href:"#",className:"html"===d?"is-current":"",onClick:e=>{e.preventDefault(),v("html")}},"HTML"),o.createElement("a",{href:"#",className:"json"===d?"is-current":"",onClick:e=>{e.preventDefault(),v("json")}},"JSON")),o.createElement("div",{className:"tab-content"},o.createElement("div",{className:"is-active"},"html"===d&&o.createElement("pre",{className:"language-html"},o.createElement("code",null,a)),"json"===d&&o.createElement("pre",{className:"language-html"},o.createElement("code",null,JSON.stringify(m)))))),o.createElement("div",{dangerouslySetInnerHTML:{__html:n.html}}))))))}let y=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.A)(t,e),t.prototype.render=function(){const{data:e}=this.props,t=e.site.siteMetadata.title;return o.createElement(a.A,{location:this.props.location,title:t},o.createElement(m,{data:e}))},t}(o.Component);var d=y;const v=()=>o.createElement(i.A,{title:"SmartBlock - A Modern Block Based Wysiwyg Editor using React and ProseMirror",description:"SmartBlock - A Modern Block Based Wysiwyg Editor using React and ProseMirror"})},79:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},5901:function(e,t,r){var n=r(79);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9646:function(e,t,r){var n=r(5636),o=r(7550);function a(t,r,i){return o()?(e.exports=a=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},4579:function(e,t,r){var n=r(7736);function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,n(o.key),o)}}e.exports=function(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},3072:function(e){function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},691:function(e){e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")},e.exports.__esModule=!0,e.exports.default=e.exports},7550:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},9291:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},1869:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},1132:function(e,t,r){var n=r(5901),o=r(9291),a=r(7122),i=r(1869);e.exports=function(e){return n(e)||o(e)||a(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},9045:function(e,t,r){var n=r(3738).default;e.exports=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},7736:function(e,t,r){var n=r(3738).default,o=r(9045);e.exports=function(e){var t=o(e,"string");return"symbol"===n(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},3738:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7122:function(e,t,r){var n=r(79);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},1837:function(e,t,r){var n=r(3072),o=r(5636),a=r(691),i=r(9646);function c(t){var r="function"==typeof Map?new Map:void 0;return e.exports=c=function(e){if(null===e||!a(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(e))return r.get(e);r.set(e,t)}function t(){return i(e,arguments,n(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),o(t,e)},e.exports.__esModule=!0,e.exports.default=e.exports,c(t)}e.exports=c,e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-index-js-920aeefde619cdfa5b21.js.map
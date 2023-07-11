(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=n("q1tI"),i=r(a),o=r(n("Gytx"));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function T(){l=e(u.map((function(e){return e.props}))),E.canUseDOM?t(l):n&&(l=n(l))}var E=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var c=a.prototype;return c.shouldComponentUpdate=function(e){return!o(e,this.props)},c.componentWillMount=function(){u.push(this),T()},c.componentDidUpdate=function(){T()},c.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),T()},c.render=function(){return i.createElement(r,this.props)},a}(a.Component);return c(E,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(E,"canUseDOM",s),E}}},Bl7J:function(e,t,n){"use strict";var r=n("dI71"),a=n("q1tI"),i=n.n(a),o=n("Wbzz"),c=n("kzbP"),s=n.n(c),l=n("DIdi"),u=function(e){var t=e.post;return i.a.createElement("div",{className:e.isOpen?"offcanvas is-active":"offcanvas"},i.a.createElement("div",{className:"offcanvas-overlay offcanvas-close"}),i.a.createElement("div",{className:"offcanvas-content"},i.a.createElement("button",{className:"button is-close offcanvas-close",onClick:function(){e.onClose()}},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null)),i.a.createElement("div",{className:"inner"},i.a.createElement("div",{class:"offcanvas-menu"},i.a.createElement(l.a,{active:t&&t.fields?t.fields.slug:""})),i.a.createElement("hr",null),i.a.createElement("div",{className:"offcanvas-menu"},i.a.createElement("a",{href:"https://github.com/appleple/smartblock",className:"button is-white is-small"},i.a.createElement("i",{className:"fa fa-github"})," GitHub"),i.a.createElement("a",{href:"https://github.com/appleple/smartblock/archive/master.zip",className:"button is-small"},i.a.createElement("i",{className:"fa fa-download"})," Download"),i.a.createElement("hr",null),i.a.createElement("p",null,"version 1.3.2")))))},T=function(e){var t=i.a.useState(e.className?e.className:"header is-sticky is-ghost"),n=t[0],r=t[1],a=i.a.useState(!1),c=a[0],l=a[1];return e.className||i.a.useEffect((function(){window.addEventListener("scroll",(function(){window.pageYOffset>50?r("header is-sticky is-ghost active"):r("header is-sticky is-ghost")}))}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{post:e.post,isOpen:c,onClose:function(){l(!1)}}),i.a.createElement("header",{className:n},i.a.createElement("h1",{className:"logo is-small"},i.a.createElement(o.Link,{to:"/"},i.a.createElement("img",{src:s.a}))),i.a.createElement("nav",{className:"header-menu"},i.a.createElement("div",{className:"pulldown"},i.a.createElement(o.Link,{to:"/get-started"},"Document")),i.a.createElement("a",{href:"https://github.com/appleple/smartblock/",className:"button is-white is-small"},i.a.createElement("i",{className:"fa fa-github"}),"GitHub")),i.a.createElement("button",{className:"button is-burger hide-on-medium hide-on-large offcanvas-open",onClick:function(){l(!0)}},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null))))},E=n("nzU5"),f=n.n(E),p=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"section-devider"},i.a.createElement("section",{className:"section"},i.a.createElement("div",{className:"inner is-small"},i.a.createElement("h2",null,i.a.createElement("i",{className:"fa fa-book"})," Document"),i.a.createElement("p",null,"Usage, introduction of other functions, component introduction etc. ",i.a.createElement("br",null),"are described in detail in the document. "),i.a.createElement("p",null,i.a.createElement(o.Link,{to:"/get-started",className:"button"},i.a.createElement("i",{className:"fa fa-book"}),"Get Started")))),i.a.createElement("section",{className:"section"},i.a.createElement("div",{className:"inner is-small"},i.a.createElement("h2",null,i.a.createElement("i",{className:"fa fa-github"})," View on GitHub"),i.a.createElement("p",null,"SmartBlock was developed by ",i.a.createElement("a",{href:"https://twitter.com/appleplecom"},"@appleplecom")," and is open source (MIT license) on GitHub.",i.a.createElement("br",null),"Please send us feedback, requests, bug reports and pull requests!"),i.a.createElement("p",null,"If you like it, please press Star ;)"),i.a.createElement("p",{style:{marginTop:"10px"}},i.a.createElement("a",{href:"https://github.com/appleple/SmartBlock",className:"button is-white"},i.a.createElement("i",{className:"fa fa-github"})," GitHub page"))))),i.a.createElement("section",{className:"section github-section"},i.a.createElement("div",{className:"inner is-small"},i.a.createElement("p",null,"If you like our project, we glad to have star! :)"),i.a.createElement("a",{href:"https://github.com/appleple/smartblock/",className:"button is-white is-small"},i.a.createElement("i",{className:"fa fa-github"})," GitHub"))),i.a.createElement("footer",{className:"footer"},i.a.createElement("div",null,i.a.createElement("img",{src:f.a}),i.a.createElement("p",null,"A modern block styled editor built with React.",i.a.createElement("br",null)," SmartBlock is provided with MIT license. Made by @appleple ♥ OSS"))))},m=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props,t=(e.location,e.title,e.children),n=e.post,r=n?"header is-sticky is-ghost is-colored":"";return i.a.createElement(i.a.Fragment,null,i.a.createElement(T,{className:r,post:n}),t,i.a.createElement(p,null))},t}(i.a.Component);t.a=m},DIdi:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("Wbzz");t.a=function(e){return a.a.createElement("div",{style:{marginBottom:"2rem"}},a.a.createElement("div",{className:"type-h3"},a.a.createElement("span",null,"Getting Started")),a.a.createElement("div",{className:"tree"},a.a.createElement("ul",null,a.a.createElement("li",{className:-1!==e.active.indexOf("get-started")?"is-current":""},a.a.createElement(i.Link,{to:"/get-started"},"Installation")),a.a.createElement("li",{className:-1!==e.active.indexOf("usage")?"is-current":""},a.a.createElement(i.Link,{to:"/usage"},"Usage")))),a.a.createElement("div",{className:"type-h3"},a.a.createElement("span",null,"Extensions")),a.a.createElement("div",{className:"tree"},a.a.createElement("ul",null,a.a.createElement("li",{className:-1!==e.active.indexOf("blocks")?"is-current":""},a.a.createElement(i.Link,{to:"/blocks"},"Blocks")),a.a.createElement("li",{className:-1!==e.active.indexOf("marks")?"is-current":""},a.a.createElement(i.Link,{to:"/marks"},"Marks")),a.a.createElement("li",{className:-1!==e.active.indexOf("utils")?"is-current":""},a.a.createElement(i.Link,{to:"/utils"},"Utils")))),a.a.createElement("div",{className:"type-h3"},a.a.createElement("span",null,"API")),a.a.createElement("div",{className:"tree"},a.a.createElement("ul",null,a.a.createElement("li",{className:-1!==e.active.indexOf("props")?"is-current":""},a.a.createElement(i.Link,{to:"/props"},"Props")),a.a.createElement("li",{className:-1!==e.active.indexOf("customize")?"is-current":""},a.a.createElement(i.Link,{to:"/customize"},"Customize")))))}},Gytx:function(e,t){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var l=i[s];if(!c(l))return!1;var u=e[l],T=t[l];if(!1===(a=n?n.call(r,u,T,l):void 0)||void 0===a&&u!==T)return!1}return!0}},TJpk:function(e,t,n){t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=T(n("q1tI")),o=T(n("17x9")),c=T(n("8+s/")),s=T(n("bmMU")),l=n("v1p5"),u=n("hFT/");function T(e){return e&&e.__esModule?e:{default:e}}function E(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m,d,M,A=(0,c.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)((function(){return null})),L=(m=A,M=d=function(e){function t(){return f(this,t),p(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,s.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,i=e.newProps,o=e.newChildProps,c=e.nestedChildren;switch(a.type){case u.TAG_NAMES.TITLE:return r({},i,((t={})[a.type]=c,t.titleAttributes=r({},o),t));case u.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},o)});case u.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},o)})}return r({},i,((n={})[a.type]=r({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=E(a,["children"]),c=(0,l.convertReactPropstoHtmlAttributes)(o);switch(n.warnOnInvalidChildren(e,i),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=E(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),i.default.createElement(m,a)},a(t,null,[{key:"canUseDOM",set:function(e){m.canUseDOM=e}}]),t}(i.default.Component),d.propTypes={base:o.default.object,bodyAttributes:o.default.object,children:o.default.oneOfType([o.default.arrayOf(o.default.node),o.default.node]),defaultTitle:o.default.string,defer:o.default.bool,encodeSpecialCharacters:o.default.bool,htmlAttributes:o.default.object,link:o.default.arrayOf(o.default.object),meta:o.default.arrayOf(o.default.object),noscript:o.default.arrayOf(o.default.object),onChangeClientState:o.default.func,script:o.default.arrayOf(o.default.object),style:o.default.arrayOf(o.default.object),title:o.default.string,titleAttributes:o.default.object,titleTemplate:o.default.string},d.defaultProps={defer:!0,encodeSpecialCharacters:!0},d.peek=m.peek,d.rewind=function(){var e=m.rewind();return e||(e=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},M);L.renderStatic=L.rewind,t.Helmet=L,t.default=L},bmMU:function(e,t,n){"use strict";var r=Array.isArray,a=Object.keys,i=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,s,l,u=r(t),T=r(n);if(u&&T){if((s=t.length)!=n.length)return!1;for(c=s;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(u!=T)return!1;var E=t instanceof Date,f=n instanceof Date;if(E!=f)return!1;if(E&&f)return t.getTime()==n.getTime();var p=t instanceof RegExp,m=n instanceof RegExp;if(p!=m)return!1;if(p&&m)return t.toString()==n.toString();var d=a(t);if((s=d.length)!==a(n).length)return!1;for(c=s;0!=c--;)if(!i.call(n,d[c]))return!1;if(o&&t instanceof Element&&n instanceof Element)return t===n;for(c=s;0!=c--;)if(!("_owner"===(l=d[c])&&t.$$typeof||e(t[l],n[l])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t,n){n("E9XD"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},kzbP:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzEuMTA2IiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTcxLjEwNiAzMCI+PGRlZnM+PHN0eWxlPi5hLC5ie2ZpbGw6I2ZmZjt9LmJ7Zm9udC1zaXplOjIzcHg7Zm9udC1mYW1pbHk6RnV0dXJhLUJvbGQsIEZ1dHVyYTtmb250LXdlaWdodDo3MDA7fTwvc3R5bGU+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03NTguOTYyIDI4Ni4wNzQpIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3NTguOTYyIC0yODMuMjY0KSI+PHBhdGggY2xhc3M9ImEiIGQ9Ik03ODEuMi0yODAuMjU4bC0xMC4wNDYtNS44YTEuNDMzLDEuNDMzLDAsMCwwLTEuNDM0LDBsLTEwLjA0Niw1LjhhMS40MzMsMS40MzMsMCwwLDAtLjcxNywxLjI0MnYxMS42YTEuNDMzLDEuNDMzLDAsMCwwLC43MTcsMS4yNDJsMTAuMDQ2LDUuOGExLjQzNCwxLjQzNCwwLDAsMCwuNzE3LjE5MiwxLjQzNCwxLjQzNCwwLDAsMCwuNzE3LS4xOTJsMTAuMDQ2LTUuOGExLjQzMywxLjQzMywwLDAsMCwuNzE3LTEuMjQydi0xMS42QTEuNDMzLDEuNDMzLDAsMCwwLDc4MS4yLTI4MC4yNThabS00LjI3OSwxMS43LTUuNjk1LDMuMjg4YTEuNTc1LDEuNTc1LDAsMCwxLS43ODkuMjExLDEuNTc3LDEuNTc3LDAsMCwxLS43ODktLjIxMWwtNS42OTUtMy4yODhhMS41NzgsMS41NzgsMCwwLDEtLjc4Ny0xLjQ0NmwuMTE5LTIuMzY1LDMuMTUzLjE1OC0uMDcsMS40LDQuMDcsMi4zNSwyLjUzOC0xLjQ2NS05LjAyMi01LjIwOWExLjU3OCwxLjU3OCwwLDAsMS0uNzg5LTEuMzY3LDEuNTc4LDEuNTc4LDAsMCwxLC43ODktMS4zNjdsNS42OTUtMy4yODhhMS41NzgsMS41NzgsMCwwLDEsMS41NzgsMGw1LjY5NSwzLjI4OGExLjU3OCwxLjU3OCwwLDAsMSwuNzg3LDEuNDQ2bC0uMTE5LDIuMzY1LTMuMTUyLS4xNTguMDctMS40LTQuMDctMi4zNUw3NjcuOS0yNzYuNWw5LjAyMiw1LjIwOWExLjU3NywxLjU3NywwLDAsMSwuNzg5LDEuMzY3QTEuNTc3LDEuNTc3LDAsMCwxLDc3Ni45MjUtMjY4LjU2MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03NTguOTYyIDI4Ni4yNSkiLz48L2c+PHRleHQgY2xhc3M9ImIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc4OS4wNjggLTI2Mi4wNzQpIj48dHNwYW4geD0iMCIgeT0iMCI+U21hcnRCbG9jazwvdHNwYW4+PC90ZXh0PjwvZz48L3N2Zz4="},nzU5:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNi42NDYiIGhlaWdodD0iNDEuNjA3IiB2aWV3Qm94PSIwIDAgMzYuNjQ2IDQxLjYwNyI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTc1OC45NjIgMjg2LjI1KSI+PHBhdGggY2xhc3M9ImEiIGQ9Ik03OTQuNDY0LTI3Ni42ODZsLTE2LjAzNS05LjI1OGEyLjI4NywyLjI4NywwLDAsMC0yLjI4OCwwbC0xNi4wMzUsOS4yNThhMi4yODgsMi4yODgsMCwwLDAtMS4xNDQsMS45ODJ2MTguNTE1YTIuMjg4LDIuMjg4LDAsMCwwLDEuMTQ0LDEuOTgybDE2LjAzNSw5LjI1OGEyLjI4OSwyLjI4OSwwLDAsMCwxLjE0NC4zMDcsMi4yODksMi4yODksMCwwLDAsMS4xNDQtLjMwN2wxNi4wMzUtOS4yNThhMi4yODgsMi4yODgsMCwwLDAsMS4xNDQtMS45ODJWLTI3NC43QTIuMjg4LDIuMjg4LDAsMCwwLDc5NC40NjQtMjc2LjY4NlptLTYuODMsMTguNjY5LTkuMDg5LDUuMjQ4YTIuNTE1LDIuNTE1LDAsMCwxLTEuMjU5LjMzNywyLjUxNiwyLjUxNiwwLDAsMS0xLjI1OS0uMzM3bC05LjA5LTUuMjQ4YTIuNTE5LDIuNTE5LDAsMCwxLTEuMjU2LTIuMzA4bC4xODktMy43NzUsNS4wMzIuMjUzLS4xMTIsMi4yMzcsNi41LDMuNzUxLDQuMDUyLTIuMzM5LTE0LjQtOC4zMTRhMi41MTksMi41MTksMCwwLDEtMS4yNTktMi4xODEsMi41MTksMi41MTksMCwwLDEsMS4yNTktMi4xODFsOS4wOS01LjI0OGEyLjUxOSwyLjUxOSwwLDAsMSwyLjUxOSwwbDkuMDg5LDUuMjQ4YTIuNTE5LDIuNTE5LDAsMCwxLDEuMjU3LDIuMzA4bC0uMTg5LDMuNzc1LTUuMDMyLS4yNTMuMTEyLTIuMjM3LTYuNS0zLjc1MS00LjA1MiwyLjMzOSwxNC40LDguMzE0YTIuNTE4LDIuNTE4LDAsMCwxLDEuMjU5LDIuMTgxQTIuNTE4LDIuNTE4LDAsMCwxLDc4Ny42MzQtMjU4LjAxN1oiLz48L2c+PC9zdmc+"},v1p5:function(e,t,n){(function(e){n("E9XD"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=s(n("q1tI")),o=s(n("YVoz")),c=n("hFT/");function s(e){return e&&e.__esModule?e:{default:e}}var l,u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},T=function(e){var t=d(e,c.TAG_NAMES.TITLE),n=d(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=d(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},E=function(e){return d(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},f=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},p=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},m=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&h("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var s=i[o],l=s.toLowerCase();-1===t.indexOf(l)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===c.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(s)||s!==c.TAG_PROPERTIES.INNER_HTML&&s!==c.TAG_PROPERTIES.CSS_TEXT&&s!==c.TAG_PROPERTIES.ITEM_PROP||(n=s)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][u]&&(r[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),s=0;s<i.length;s++){var l=i[s],u=(0,o.default)({},a[l],r[l]);a[l]=u}return e}),[]).reverse()},d=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},M=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout((function(){M(e)}),0)}),A=function(e){return clearTimeout(e)},L="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||M:e.requestAnimationFrame||M,N="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||A:e.cancelAnimationFrame||A,h=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},y=null,S=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,T=e.styleTags,E=e.title,f=e.titleAttributes;g(c.TAG_NAMES.BODY,r),g(c.TAG_NAMES.HTML,a),b(E,f);var p={baseTag:I(c.TAG_NAMES.BASE,n),linkTags:I(c.TAG_NAMES.LINK,i),metaTags:I(c.TAG_NAMES.META,o),noscriptTags:I(c.TAG_NAMES.NOSCRIPT,s),scriptTags:I(c.TAG_NAMES.SCRIPT,u),styleTags:I(c.TAG_NAMES.STYLE,T)},m={},d={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(d[e]=p[e].oldTags)})),t&&t(),l(e,m,d)},w=function(e){return Array.isArray(e)?e.join(""):e},b=function(e,t){void 0!==e&&document.title!==e&&(document.title=w(e)),g(c.TAG_NAMES.TITLE,t)},g=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),s=0;s<o.length;s++){var l=o[s],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===a.indexOf(l)&&a.push(l);var T=i.indexOf(l);-1!==T&&i.splice(T,1)}for(var E=i.length-1;E>=0;E--)n.removeAttribute(i[E]);a.length===i.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==o.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,o.join(","))}},I=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},O=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},C=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,a=v(n,r),[i.default.createElement(c.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=O(n),i=w(t);return a?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+">"+u(i,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+u(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return v(t)},toString:function(){return O(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),i.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+u(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){y&&N(y),e.defer?y=L((function(){S(e,(function(){y=null}))})):(S(e),y=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,l=e.scriptTags,u=e.styleTags,T=e.title,E=void 0===T?"":T,f=e.titleAttributes;return{base:C(c.TAG_NAMES.BASE,t,r),bodyAttributes:C(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:C(c.ATTRIBUTE_NAMES.HTML,a,r),link:C(c.TAG_NAMES.LINK,i,r),meta:C(c.TAG_NAMES.META,o,r),noscript:C(c.TAG_NAMES.NOSCRIPT,s,r),script:C(c.TAG_NAMES.SCRIPT,l,r),style:C(c.TAG_NAMES.STYLE,u,r),title:C(c.TAG_NAMES.TITLE,{title:E,titleAttributes:f},r)}},t.reducePropsToState=function(e){return{baseTag:p([c.TAG_PROPERTIES.HREF],e),bodyAttributes:f(c.ATTRIBUTE_NAMES.BODY,e),defer:d(e,c.HELMET_PROPS.DEFER),encode:d(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:f(c.ATTRIBUTE_NAMES.HTML,e),linkTags:m(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:m(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:E(e),scriptTags:m(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:T(e),titleAttributes:f(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=L,t.warn=h}).call(this,n("yLpj"))},vrFN:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("TJpk"),o=n.n(i),c=n("Wbzz");function s(e){var t=e.description,n=e.lang,r=e.meta,i=e.title,s=Object(c.useStaticQuery)("63159454").site,l=t||s.siteMetadata.description;return a.a.createElement(o.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:i},{property:"og:description",content:l},{property:"og:image",content:"http://appleple.github.io"+Object(c.withPrefix)("/ogp.png")},{property:"og:image:secure_url",content:"https://appleple.github.io"+Object(c.withPrefix)("/ogp.png")},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:image",content:"https://appleple.github.io"+Object(c.withPrefix)("/ogp.png")},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:l}].concat(r),link:[{rel:"stylesheet",href:"https://unpkg.com/uny@0.2.9/dist/css/uny.min.css"},{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"},{rel:"stylesheet",href:Object(c.withPrefix)("/prism.css")},{rel:"stylesheet",href:Object(c.withPrefix)("/layout.css")}]})}s.defaultProps={lang:"en",meta:[],description:""},t.a=s}}]);
//# sourceMappingURL=commons-7b4cd06a3f288e9c7529.js.map
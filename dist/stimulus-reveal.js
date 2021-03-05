!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("stimulus")):"function"==typeof define&&define.amd?define(["stimulus"],e):"object"==typeof exports?exports.stimulusReveal=e(require("stimulus")):t.stimulusReveal=e(t.stimulus)}(window,(function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=10)}([function(t,e,n){var r=n(11),o=n(12),i=n(13),a=n(14);t.exports=function(t){return r(t)||o(t)||i(t)||a()}},function(t,e,n){t.exports=n(15)},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},function(t,e){function n(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function s(t){n(a,o,i,s,c,"next",t)}function c(t){n(a,o,i,s,c,"throw",t)}s(void 0)}))}}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e,n){var r=n(16);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},function(t,e,n){var r=n(17),o=n(18);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},function(e,n){e.exports=t},function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return _})),n.d(e,"RevealController",(function(){return _}));var r=n(0),o=n.n(r),i=n(1),a=n.n(i),s=n(4),c=n.n(s),u=n(5),l=n.n(u),f=n(6),h=n.n(f),p=n(7),d=n.n(p),y=n(8),v=n.n(y),g=n(2),m=n.n(g),b=n(9);function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=m()(t);if(e){var o=m()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v()(this,n)}}var _=function(t){d()(r,t);var e,n=w(r);function r(){return l()(this,r),n.apply(this,arguments)}return h()(r,[{key:"connect",value:function(){this._initCloseKeypressListener(),this._initToggleKeypressListener(),this._initShowKeypressListener()}},{key:"show",value:function(t){this.openValue||this.transitioningValue||this._init(t,!0)}},{key:"hide",value:function(t){this.openValue&&!this.transitioningValue&&this._init(t,!1)}},{key:"toggle",value:function(t){this.transitioningValue||this._init(t,!this.openValue)}},{key:"_init",value:(e=c()(a.a.mark((function t(e,n){var r,o,i,s,c,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e&&e.currentTarget&&e.currentTarget.dataset&&("revealPreventDefault"in e.currentTarget.dataset&&e.preventDefault(),"revealStopPropagation"in e.currentTarget.dataset&&e.stopPropagation()),r="".concat(this.selector,"[data-").concat(n?"enter":"leave","-start]"),o=this._didInitWithPromise(r,n),t.next=5,Promise.all(o);case 5:return i="".concat(this.selector,":not([data-").concat(n?"enter":"leave","-start]):not([data-").concat(n?"enter":"leave","-end])"),s=this._didInitWithPromise(i,n),t.next=9,Promise.all(s);case 9:return c="".concat(this.selector,"[data-").concat(n?"enter":"leave","-end]"),u=this._didInitWithPromise(c,n),t.next=13,Promise.all(u);case 13:case"end":return t.stop()}}),t,this)}))),function(t,n){return e.apply(this,arguments)})},{key:"_didInitWithPromise",value:function(t,e){var n=this;return this._debug("selecting",t,this.element.querySelectorAll(t)),Array.from(this.element.querySelectorAll(t)).map((function(t){return n._doInitTransition(t,e)}))}},{key:"_initCloseKeypressListener",value:function(){var t=this;this.hasHideKeysValue&&document.addEventListener("keydown",(function(e){t.openValue&&t.hideKeysValue.split(",").includes(e.key.toLowerCase())&&(e.stopPropagation(),t.toggle(e))}))}},{key:"_initToggleKeypressListener",value:function(){var t=this;this.hasToggleKeysValue&&document.addEventListener("keydown",(function(e){t.toggleKeysValue.split(",").includes(e.key.toLowerCase())&&(e.stopPropagation(),t.toggle(e))}))}},{key:"_initShowKeypressListener",value:function(){var t=this;this.hasShowKeysValue&&document.addEventListener("keydown",(function(e){t.openValue||t.showKeysValue.split(",").includes(e.key.toLowerCase())&&(e.stopPropagation(),t.toggle(e))}))}},{key:"_awayHandler",value:function(t){return this.element.contains(t.target)||this.hide(t),!0}},{key:"_doInitTransition",value:function(t,e){var n=this;return this._debug("init transition","".concat(e?"open":"closed"),t),this._debug("dispatching event","reveal:".concat(e?"show":"hide"),t),t.dispatchEvent(new Event("reveal:".concat(e?"show":"hide"),{bubbles:!0,cancelable:!1})),new Promise((function(r,o){"transition"in t.dataset&&null!==n.element.offsetParent?requestAnimationFrame((function(){n._transitionSetup(t,e);var o=n._didEndTransition.bind(n);t.addEventListener("transitionend",(function n(){o(t,e),t.removeEventListener("transitionend",n),r()})),requestAnimationFrame((function(){n._doStartTransition(t,e)}))})):(e&&(n._debug("force hidden - init","".concat(e?"open":"closed"),t),t.hidden=!t.hidden),n._doCompleteTransition(t,e),r())}))}},{key:"_doStartTransition",value:function(t,e){if(this._debug("start transition","".concat(e?"open":"closed"),t),this.transitioningValue=!0,"true"===t.dataset.useTransitionClasses){var n,r,i=this._transitionClasses(t,this.transitionType);(n=t.classList).add.apply(n,o()(i.end.split(" "))),(r=t.classList).remove.apply(r,o()(i.start.split(" ")))}else{var a=this._transitionDefaults(e);t.style.transformOrigin=a.origin,t.style.transitionProperty="opacity transform",t.style.transitionDuration="".concat(a.duration/1e3,"s"),t.style.transitionTimingFunction="cubic-bezier(0.4, 0.0, 0.2, 1)",t.style.opacity=a.to.opacity,t.style.transform="scale(".concat(a.to.scale/100,")")}}},{key:"_didEndTransition",value:function(t,e){if(this._debug("end transition","".concat(e?"open":"closed"),t),"true"===t.dataset.useTransitionClasses){var n,r=this._transitionClasses(t,this.transitionType);(n=t.classList).remove.apply(n,o()(r.before.split(" ")))}else t.style.opacity=t.dataset.opacityCache,t.style.transform=t.dataset.transformCache,t.style.transformOrigin=t.dataset.transformOriginCache;this._doCompleteTransition(t,e)}},{key:"_doCompleteTransition",value:function(t,e){this._debug("complete transition","".concat(e?"open":"closed"),t),this.transitioningValue=!1,e||(this._debug("force hidden - complete","".concat(e?"open":"closed"),t),t.hidden=!t.hidden),this.openValue=e,this._debug("dispatching event","reveal:".concat(e?"shown":"hidden"),t),t.dispatchEvent(new Event("reveal:".concat(e?"shown":"hidden"),{bubbles:!0,cancelable:!1})),this.hasAwayValue&&e&&(this.awayHandler=this._awayHandler.bind(this),document.addEventListener("click",this.awayHandler,{once:!0})),this._debug("dispatching event","reveal:complete",t),t.dispatchEvent(new Event("reveal:complete",{bubbles:!0,cancelable:!1}))}},{key:"_transitionSetup",value:function(t,e){if(this.transitionType=e?"transitionEnter":"transitionLeave",this.transitionType in t.dataset){var n,r;t.dataset.useTransitionClasses=!0;var i=this._transitionClasses(t,this.transitionType);(n=t.classList).add.apply(n,o()(i.before.split(" "))),(r=t.classList).add.apply(r,o()(i.start.split(" ")))}else{t.dataset.useTransitionClasses=!1;var a=this._transitionDefaults(e);t.dataset.opacityCache=t.style.opacity,t.dataset.transformCache=t.style.transform,t.dataset.transformOriginCache=t.style.transformOrigin,t.style.opacity=a.from.opacity,t.style.transform="scale(".concat(a.from.scale/100,")")}e&&(this._debug("opening with transition",t),t.hidden=!t.hidden)}},{key:"_transitionDefaults",value:function(t){return{duration:t?200:150,origin:"center",from:{opacity:t?0:1,scale:t?95:100},to:{opacity:t?1:0,scale:t?100:95}}}},{key:"_transitionClasses",value:function(t,e){return{before:t.dataset[e],start:t.dataset["".concat(e,"Start")],end:t.dataset["".concat(e,"End")]}}},{key:"_debug",value:function(){var t;this.debugValue&&(t=console).log.apply(t,arguments)}},{key:"selector",get:function(){return this.hasTargetSelectorValue?this.targetSelectorValue:"[data-reveal]"}}]),r}(b.Controller);_.values={open:Boolean,transitioning:Boolean,targetSelector:String,toggleKeys:String,showKeys:String,hideKeys:String,away:Boolean,debug:Boolean}},function(t,e,n){var r=n(3);t.exports=function(t){if(Array.isArray(t))return r(t)}},function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},function(t,e,n){var r=n(3);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new L(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return S()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=w(a,n);if(s){if(s===l)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=u(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var l={};function f(){}function h(){}function p(){}var d={};d[o]=function(){return this};var y=Object.getPrototypeOf,v=y&&y(y(E([])));v&&v!==e&&n.call(v,o)&&(d=v);var g=p.prototype=f.prototype=Object.create(d);function m(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var r;this._invoke=function(o,i){function a(){return new e((function(r,a){!function r(o,i,a,s){var c=u(t[o],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,s)}))}s(c.arg)}(o,i,r,a)}))}return r=r?r.then(a,a):a()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return h.prototype=g.constructor=p,p.constructor=h,h.displayName=s(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,s(t,a,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},m(b.prototype),b.prototype[i]=function(){return this},t.AsyncIterator=b,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new b(c(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},m(g),s(g,a,"Generator"),g[o]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=E,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}}])}));
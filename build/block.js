!function(){var e={143:function(e){"use strict";e.exports=function(e,t,n,r,i,o,a,l){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,o,a,l],u=0;(s=new Error(t.replace(/%s/g,(function(){return c[u++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},703:function(e,t,n){"use strict";var r=n(414);function i(){}function o(){}o.resetWarningCache=i,e.exports=function(){function e(e,t,n,i,o,a){if(a!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:i};return n.PropTypes=n,n}},697:function(e,t,n){e.exports=n(703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var t=window.wp.element,r=window.React;function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],_n=!0,a=!1;try{for(n=n.call(e);!(_n=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);_n=!0);}catch(e){a=!0,i=e}finally{try{_n||null==n.return||n.return()}finally{if(a)throw i}}return o}}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?Object(arguments[n]):{},i=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&i.push.apply(i,Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),i.forEach((function(n){e(t,n,r[n])}))}return t}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function y(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}var v=window.ReactDOM,b=n(143),x=n.n(b);var w=n(697),S=n.n(w),O=function(){function t(){c(this,t),e(this,"refs",{})}return d(t,[{key:"add",value:function(e,t){this.refs[e]||(this.refs[e]=[]),this.refs[e].push(t)}},{key:"remove",value:function(e,t){var n=this.getIndex(e,t);-1!==n&&this.refs[e].splice(n,1)}},{key:"isActive",value:function(){return this.active}},{key:"getActive",value:function(){var e=this;return this.refs[this.active.collection].find((function(t){return t.node.sortableInfo.index==e.active.index}))}},{key:"getIndex",value:function(e,t){return this.refs[e].indexOf(t)}},{key:"getOrderedRefs",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.active.collection;return this.refs[e].sort(k)}}]),t}();function k(e,t){return e.node.sortableInfo.index-t.node.sortableInfo.index}function C(e,t,n){return(e=e.slice()).splice(n<0?e.length+n:n,0,e.splice(t,1)[0]),e}function E(e,t){return Object.keys(e).reduce((function(n,r){return-1===t.indexOf(r)&&(n[r]=e[r]),n}),{})}var T={end:["touchend","touchcancel","mouseup"],move:["touchmove","mousemove"],start:["touchstart","mousedown"]},I=function(){if("undefined"==typeof window||"undefined"==typeof document)return"";var e=window.getComputedStyle(document.documentElement,"")||["-moz-hidden-iframe"],t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1];return"ms"===t?"ms":t&&t.length?t[0].toUpperCase()+t.substr(1):""}();function R(e,t){Object.keys(t).forEach((function(n){e.style[n]=t[n]}))}function D(e,t){e.style["".concat(I,"Transform")]=null==t?"":"translate3d(".concat(t.x,"px,").concat(t.y,"px,0)")}function A(e,t){e.style["".concat(I,"TransitionDuration")]=null==t?"":"".concat(t,"ms")}function N(e,t){for(;e;){if(t(e))return e;e=e.parentNode}return null}function P(e,t,n){return Math.max(e,Math.min(n,t))}function M(e){return"px"===e.substr(-2)?parseFloat(e):0}function j(e){var t=window.getComputedStyle(e);return{bottom:M(t.marginBottom),left:M(t.marginLeft),right:M(t.marginRight),top:M(t.marginTop)}}function W(e,t){var n=t.displayName||t.name;return n?"".concat(e,"(").concat(n,")"):e}function _(e,t){var n=e.getBoundingClientRect();return{top:n.top+t.top,left:n.left+t.left}}function L(e){return e.touches&&e.touches.length?{x:e.touches[0].pageX,y:e.touches[0].pageY}:e.changedTouches&&e.changedTouches.length?{x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY}:{x:e.pageX,y:e.pageY}}function K(e){return e.touches&&e.touches.length||e.changedTouches&&e.changedTouches.length}function H(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{left:0,top:0};if(e){var r={left:n.left+e.offsetLeft,top:n.top+e.offsetTop};return e.parentNode===t?r:H(e.parentNode,t,r)}}function B(e,t,n){return e<n&&e>t?e-1:e>n&&e<t?e+1:e}function G(e){var t=e.lockOffset,n=e.width,r=e.height,i=t,o=t,a="px";if("string"==typeof t){var l=/^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(t);x()(null!==l,'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s',t),i=parseFloat(t),o=parseFloat(t),a=l[1]}return x()(isFinite(i)&&isFinite(o),"lockOffset value should be a finite. Given %s",t),"%"===a&&(i=i*n/100,o=o*r/100),{x:i,y:o}}function U(e){var t=e.height,n=e.width,r=e.lockOffset,i=Array.isArray(r)?r:[r,r];x()(2===i.length,"lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s",r);var o=l(i,2),a=o[0],s=o[1];return[G({height:t,lockOffset:a,width:n}),G({height:t,lockOffset:s,width:n})]}function F(e){return e instanceof HTMLElement?function(e){var t=window.getComputedStyle(e),n=/(auto|scroll)/;return["overflow","overflowX","overflowY"].find((function(e){return n.test(t[e])}))}(e)?e:F(e.parentNode):null}function X(e){var t=window.getComputedStyle(e);return"grid"===t.display?{x:M(t.gridColumnGap),y:M(t.gridRowGap)}:{x:0,y:0}}var Y="BUTTON",V="INPUT",q="OPTION",z="TEXTAREA",$="SELECT";function J(e){var t,n="input, textarea, select, canvas, [contenteditable]",r=e.querySelectorAll(n),i=e.cloneNode(!0);return(t=i.querySelectorAll(n),function(e){if(Array.isArray(e))return o(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||a(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e,t){"file"!==e.type&&(e.value=r[t].value),"radio"===e.type&&e.name&&(e.name="__sortableClone__".concat(e.name)),"CANVAS"===e.tagName&&r[t].width>0&&r[t].height>0&&e.getContext("2d").drawImage(r[t],0,0)})),i}function Q(e){return null!=e.sortableHandle}var Z=function(){function e(t,n){c(this,e),this.container=t,this.onScrollCallback=n}return d(e,[{key:"clear",value:function(){null!=this.interval&&(clearInterval(this.interval),this.interval=null)}},{key:"update",value:function(e){var t=this,n=e.translate,r=e.minTranslate,i=e.maxTranslate,o=e.width,a=e.height,l={x:0,y:0},s={x:1,y:1},c=this.container,u=c.scrollTop,d=c.scrollLeft,f=c.scrollHeight,h=c.scrollWidth,p=0===u,g=f-u-c.clientHeight==0,m=0===d,y=h-d-c.clientWidth==0;n.y>=i.y-a/2&&!g?(l.y=1,s.y=10*Math.abs((i.y-a/2-n.y)/a)):n.x>=i.x-o/2&&!y?(l.x=1,s.x=10*Math.abs((i.x-o/2-n.x)/o)):n.y<=r.y+a/2&&!p?(l.y=-1,s.y=10*Math.abs((n.y-a/2-r.y)/a)):n.x<=r.x+o/2&&!m&&(l.x=-1,s.x=10*Math.abs((n.x-o/2-r.x)/o)),this.interval&&(this.clear(),this.isAutoScrolling=!1),0===l.x&&0===l.y||(this.interval=setInterval((function(){t.isAutoScrolling=!0;var e={left:s.x*l.x,top:s.y*l.y};t.container.scrollTop+=e.top,t.container.scrollLeft+=e.left,t.onScrollCallback(e)}),5))}}]),e}(),ee={axis:S().oneOf(["x","y","xy"]),contentWindow:S().any,disableAutoscroll:S().bool,distance:S().number,getContainer:S().func,getHelperDimensions:S().func,helperClass:S().string,helperContainer:S().oneOfType([S().func,"undefined"==typeof HTMLElement?S().any:S().instanceOf(HTMLElement)]),hideSortableGhost:S().bool,keyboardSortingTransitionDuration:S().number,lockAxis:S().string,lockOffset:S().oneOfType([S().number,S().string,S().arrayOf(S().oneOfType([S().number,S().string]))]),lockToContainerEdges:S().bool,onSortEnd:S().func,onSortMove:S().func,onSortOver:S().func,onSortStart:S().func,pressDelay:S().number,pressThreshold:S().number,keyCodes:S().shape({lift:S().arrayOf(S().number),drop:S().arrayOf(S().number),cancel:S().arrayOf(S().number),up:S().arrayOf(S().number),down:S().arrayOf(S().number)}),shouldCancelStart:S().func,transitionDuration:S().number,updateBeforeSortStart:S().func,useDragHandle:S().bool,useWindowAsScrollContainer:S().bool},te={lift:[32],drop:[32],cancel:[27],up:[38,37],down:[40,39]},ne={axis:"y",disableAutoscroll:!1,distance:0,getHelperDimensions:function(e){var t=e.node;return{height:t.offsetHeight,width:t.offsetWidth}},hideSortableGhost:!0,lockOffset:"50%",lockToContainerEdges:!1,pressDelay:0,pressThreshold:5,keyCodes:te,shouldCancelStart:function(e){return-1!==[V,z,$,q,Y].indexOf(e.target.tagName)||!!N(e.target,(function(e){return"true"===e.contentEditable}))},transitionDuration:300,useWindowAsScrollContainer:!1},re=Object.keys(ee);function ie(e){x()(!(e.distance&&e.pressDelay),"Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.")}function oe(e,t){try{var n=e()}catch(e){return t(!0,e)}return n&&n.then?n.then(t.bind(null,!1),t.bind(null,!0)):t(!1,value)}var ae=(0,r.createContext)({manager:{}}),le={index:S().number.isRequired,collection:S().oneOfType([S().number,S().string]),disabled:S().bool},se=Object.keys(le),ce=window.wp.components,ue=window.wp.blockEditor;const __=wp.i18n.__;wp.blocks.registerBlockType("bps-blocks/slider",{title:"Splide "+__("slider","bps-slider-block"),icon:"images-alt",category:"common",edit:function(n){console.log(n);let o=n.attributes.images.map((e=>e.id));const a=function(t){var n,o,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{withRef:!1};return o=n=function(n){function o(){var t,n;c(this,o);for(var i=arguments.length,a=new Array(i),l=0;l<i;l++)a[l]=arguments[l];return e(h(h(n=p(this,(t=g(o)).call.apply(t,[this].concat(a))))),"wrappedInstance",(0,r.createRef)()),n}return y(o,n),d(o,[{key:"componentDidMount",value:function(){this.register()}},{key:"componentDidUpdate",value:function(e){this.node&&(e.index!==this.props.index&&(this.node.sortableInfo.index=this.props.index),e.disabled!==this.props.disabled&&(this.node.sortableInfo.disabled=this.props.disabled)),e.collection!==this.props.collection&&(this.unregister(e.collection),this.register())}},{key:"componentWillUnmount",value:function(){this.unregister()}},{key:"register",value:function(){var e=this.props,t=e.collection,n=e.disabled,r=e.index,i=(0,v.findDOMNode)(this);i.sortableInfo={collection:t,disabled:n,index:r,manager:this.context.manager},this.node=i,this.ref={node:i},this.context.manager.add(t,this.ref)}},{key:"unregister",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.collection;this.context.manager.remove(e,this.ref)}},{key:"getWrappedInstance",value:function(){return x()(a.withRef,"To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call"),this.wrappedInstance.current}},{key:"render",value:function(){var e=a.withRef?this.wrappedInstance:null;return(0,r.createElement)(t,i({ref:e},E(this.props,se)))}}]),o}(r.Component),e(n,"displayName",W("sortableElement",t)),e(n,"contextType",ae),e(n,"propTypes",le),e(n,"defaultProps",{collection:0}),o}((e=>{let{value:r}=e;const i=n.attributes.images.filter((e=>e.id==r))[0],o=n.attributes.images.map((e=>e.id)).indexOf(i.id);return(0,t.createElement)(ce.FlexItem,null,(0,t.createElement)("div",{className:"slider-edit-block-element"},(0,t.createElement)(ue.MediaUpload,{type:"image",value:i.id,onSelect:e=>{const t=n.attributes.images.concat([]);t[o].id=e.id,t[o].front_url=e.url,t[o].block_url=e.sizes.thumbnail.url,n.setAttributes({images:t})},render:e=>(0,t.createElement)("div",null,(0,t.createElement)(ce.Button,{onClick:e.open,style:{display:"inline-block"}},i.id?(0,t.createElement)("img",{src:i.block_url,onClick:e.open}):__("Select image","bps-slider-block")))}),(0,t.createElement)(ce.Button,{isDestructive:!0,onClick:()=>{n.setAttributes({images:n.attributes.images.filter(((e,t)=>o!==t))})}},__("Remove image","bps-slider-block"))))})),u=function(t){var n,o,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{withRef:!1};return o=n=function(n){function o(t){var n;c(this,o),e(h(h(n=p(this,g(o).call(this,t)))),"state",{}),e(h(h(n)),"handleStart",(function(e){var t=n.props,r=t.distance,i=t.shouldCancelStart;if(2!==e.button&&!i(e)){n.touched=!0,n.position=L(e);var o=N(e.target,(function(e){return null!=e.sortableInfo}));if(o&&o.sortableInfo&&n.nodeIsChild(o)&&!n.state.sorting){var a=n.props.useDragHandle,l=o.sortableInfo,s=l.index,c=l.collection;if(l.disabled)return;if(a&&!N(e.target,Q))return;n.manager.active={collection:c,index:s},K(e)||"A"!==e.target.tagName||e.preventDefault(),r||(0===n.props.pressDelay?n.handlePress(e):n.pressTimer=setTimeout((function(){return n.handlePress(e)}),n.props.pressDelay))}}})),e(h(h(n)),"nodeIsChild",(function(e){return e.sortableInfo.manager===n.manager})),e(h(h(n)),"handleMove",(function(e){var t=n.props,r=t.distance,i=t.pressThreshold;if(!n.state.sorting&&n.touched&&!n._awaitingUpdateBeforeSortStart){var o=L(e),a={x:n.position.x-o.x,y:n.position.y-o.y},l=Math.abs(a.x)+Math.abs(a.y);n.delta=a,r||i&&!(l>=i)?r&&l>=r&&n.manager.isActive()&&n.handlePress(e):(clearTimeout(n.cancelTimer),n.cancelTimer=setTimeout(n.cancel,0))}})),e(h(h(n)),"handleEnd",(function(){n.touched=!1,n.cancel()})),e(h(h(n)),"cancel",(function(){var e=n.props.distance;n.state.sorting||(e||clearTimeout(n.pressTimer),n.manager.active=null)})),e(h(h(n)),"handlePress",(function(e){try{var t=n.manager.getActive(),r=function(){if(t){var r=function(){var t=h.sortableInfo.index,r=j(h),i=X(n.container),u=n.scrollContainer.getBoundingClientRect(),m=a({index:t,node:h,collection:p});if(n.node=h,n.margin=r,n.gridGap=i,n.width=m.width,n.height=m.height,n.marginOffset={x:n.margin.left+n.margin.right+n.gridGap.x,y:Math.max(n.margin.top,n.margin.bottom,n.gridGap.y)},n.boundingClientRect=h.getBoundingClientRect(),n.containerBoundingRect=u,n.index=t,n.newIndex=t,n.axis={x:o.indexOf("x")>=0,y:o.indexOf("y")>=0},n.offsetEdge=H(h,n.container),n.initialOffset=L(g?s({},e,{pageX:n.boundingClientRect.left,pageY:n.boundingClientRect.top}):e),n.initialScroll={left:n.scrollContainer.scrollLeft,top:n.scrollContainer.scrollTop},n.initialWindowScroll={left:window.pageXOffset,top:window.pageYOffset},n.helper=n.helperContainer.appendChild(J(h)),R(n.helper,{boxSizing:"border-box",height:"".concat(n.height,"px"),left:"".concat(n.boundingClientRect.left-r.left,"px"),pointerEvents:"none",position:"fixed",top:"".concat(n.boundingClientRect.top-r.top,"px"),width:"".concat(n.width,"px")}),g&&n.helper.focus(),c&&(n.sortableGhost=h,R(h,{opacity:0,visibility:"hidden"})),n.minTranslate={},n.maxTranslate={},g){var y=f?{top:0,left:0,width:n.contentWindow.innerWidth,height:n.contentWindow.innerHeight}:n.containerBoundingRect,v=y.top,b=y.left,x=y.width,w=v+y.height,S=b+x;n.axis.x&&(n.minTranslate.x=b-n.boundingClientRect.left,n.maxTranslate.x=S-(n.boundingClientRect.left+n.width)),n.axis.y&&(n.minTranslate.y=v-n.boundingClientRect.top,n.maxTranslate.y=w-(n.boundingClientRect.top+n.height))}else n.axis.x&&(n.minTranslate.x=(f?0:u.left)-n.boundingClientRect.left-n.width/2,n.maxTranslate.x=(f?n.contentWindow.innerWidth:u.left+u.width)-n.boundingClientRect.left-n.width/2),n.axis.y&&(n.minTranslate.y=(f?0:u.top)-n.boundingClientRect.top-n.height/2,n.maxTranslate.y=(f?n.contentWindow.innerHeight:u.top+u.height)-n.boundingClientRect.top-n.height/2);l&&l.split(" ").forEach((function(e){return n.helper.classList.add(e)})),n.listenerNode=e.touches?e.target:n.contentWindow,g?(n.listenerNode.addEventListener("wheel",n.handleKeyEnd,!0),n.listenerNode.addEventListener("mousedown",n.handleKeyEnd,!0),n.listenerNode.addEventListener("keydown",n.handleKeyDown)):(T.move.forEach((function(e){return n.listenerNode.addEventListener(e,n.handleSortMove,!1)})),T.end.forEach((function(e){return n.listenerNode.addEventListener(e,n.handleSortEnd,!1)}))),n.setState({sorting:!0,sortingIndex:t}),d&&d({node:h,index:t,collection:p,isKeySorting:g,nodes:n.manager.getOrderedRefs(),helper:n.helper},e),g&&n.keyMove(0)},i=n.props,o=i.axis,a=i.getHelperDimensions,l=i.helperClass,c=i.hideSortableGhost,u=i.updateBeforeSortStart,d=i.onSortStart,f=i.useWindowAsScrollContainer,h=t.node,p=t.collection,g=n.manager.isKeySorting,m=function(){if("function"==typeof u){n._awaitingUpdateBeforeSortStart=!0;var t=oe((function(){var t=h.sortableInfo.index;return Promise.resolve(u({collection:p,index:t,node:h,isKeySorting:g},e)).then((function(){}))}),(function(e,t){if(n._awaitingUpdateBeforeSortStart=!1,e)throw t;return t}));if(t&&t.then)return t.then((function(){}))}}();return m&&m.then?m.then(r):r()}}();return Promise.resolve(r&&r.then?r.then((function(){})):void 0)}catch(e){return Promise.reject(e)}})),e(h(h(n)),"handleSortMove",(function(e){var t=n.props.onSortMove;"function"==typeof e.preventDefault&&e.cancelable&&e.preventDefault(),n.updateHelperPosition(e),n.animateNodes(),n.autoscroll(),t&&t(e)})),e(h(h(n)),"handleSortEnd",(function(e){var t=n.props,r=t.hideSortableGhost,i=t.onSortEnd,o=n.manager,a=o.active.collection,l=o.isKeySorting,s=n.manager.getOrderedRefs();n.listenerNode&&(l?(n.listenerNode.removeEventListener("wheel",n.handleKeyEnd,!0),n.listenerNode.removeEventListener("mousedown",n.handleKeyEnd,!0),n.listenerNode.removeEventListener("keydown",n.handleKeyDown)):(T.move.forEach((function(e){return n.listenerNode.removeEventListener(e,n.handleSortMove)})),T.end.forEach((function(e){return n.listenerNode.removeEventListener(e,n.handleSortEnd)})))),n.helper.parentNode.removeChild(n.helper),r&&n.sortableGhost&&R(n.sortableGhost,{opacity:"",visibility:""});for(var c=0,u=s.length;c<u;c++){var d=s[c],f=d.node;d.edgeOffset=null,d.boundingClientRect=null,D(f,null),A(f,null),d.translate=null}n.autoScroller.clear(),n.manager.active=null,n.manager.isKeySorting=!1,n.setState({sorting:!1,sortingIndex:null}),"function"==typeof i&&i({collection:a,newIndex:n.newIndex,oldIndex:n.index,isKeySorting:l,nodes:s},e),n.touched=!1})),e(h(h(n)),"autoscroll",(function(){var e=n.props.disableAutoscroll,t=n.manager.isKeySorting;if(e)n.autoScroller.clear();else{if(t){var r=s({},n.translate),i=0,o=0;return n.axis.x&&(r.x=Math.min(n.maxTranslate.x,Math.max(n.minTranslate.x,n.translate.x)),i=n.translate.x-r.x),n.axis.y&&(r.y=Math.min(n.maxTranslate.y,Math.max(n.minTranslate.y,n.translate.y)),o=n.translate.y-r.y),n.translate=r,D(n.helper,n.translate),n.scrollContainer.scrollLeft+=i,void(n.scrollContainer.scrollTop+=o)}n.autoScroller.update({height:n.height,maxTranslate:n.maxTranslate,minTranslate:n.minTranslate,translate:n.translate,width:n.width})}})),e(h(h(n)),"onAutoScroll",(function(e){n.translate.x+=e.left,n.translate.y+=e.top,n.animateNodes()})),e(h(h(n)),"handleKeyDown",(function(e){var t=e.keyCode,r=n.props,i=r.shouldCancelStart,o=r.keyCodes,a=s({},te,void 0===o?{}:o);n.manager.active&&!n.manager.isKeySorting||!(n.manager.active||a.lift.includes(t)&&!i(e)&&n.isValidSortingTarget(e))||(e.stopPropagation(),e.preventDefault(),a.lift.includes(t)&&!n.manager.active?n.keyLift(e):a.drop.includes(t)&&n.manager.active?n.keyDrop(e):a.cancel.includes(t)?(n.newIndex=n.manager.active.index,n.keyDrop(e)):a.up.includes(t)?n.keyMove(-1):a.down.includes(t)&&n.keyMove(1))})),e(h(h(n)),"keyLift",(function(e){var t=e.target,r=N(t,(function(e){return null!=e.sortableInfo})).sortableInfo,i=r.index,o=r.collection;n.initialFocusedNode=t,n.manager.isKeySorting=!0,n.manager.active={index:i,collection:o},n.handlePress(e)})),e(h(h(n)),"keyMove",(function(e){var t=n.manager.getOrderedRefs(),r=t[t.length-1].node.sortableInfo.index,i=n.newIndex+e,o=n.newIndex;if(!(i<0||i>r)){n.prevIndex=o,n.newIndex=i;var a=B(n.newIndex,n.prevIndex,n.index),l=t.find((function(e){return e.node.sortableInfo.index===a})),s=l.node,c=n.containerScrollDelta,u=l.boundingClientRect||_(s,c),d=l.translate||{x:0,y:0},f=u.top+d.y-c.top,h=u.left+d.x-c.left,p=o<i,g=p&&n.axis.x?s.offsetWidth-n.width:0,m=p&&n.axis.y?s.offsetHeight-n.height:0;n.handleSortMove({pageX:h+g,pageY:f+m,ignoreTransition:0===e})}})),e(h(h(n)),"keyDrop",(function(e){n.handleSortEnd(e),n.initialFocusedNode&&n.initialFocusedNode.focus()})),e(h(h(n)),"handleKeyEnd",(function(e){n.manager.active&&n.keyDrop(e)})),e(h(h(n)),"isValidSortingTarget",(function(e){var t=n.props.useDragHandle,r=e.target,i=N(r,(function(e){return null!=e.sortableInfo}));return i&&i.sortableInfo&&!i.sortableInfo.disabled&&(t?Q(r):r.sortableInfo)}));var i=new O;return ie(t),n.manager=i,n.wrappedInstance=(0,r.createRef)(),n.sortableContextValue={manager:i},n.events={end:n.handleEnd,move:n.handleMove,start:n.handleStart},n}return y(o,n),d(o,[{key:"componentDidMount",value:function(){var e=this,t=this.props.useWindowAsScrollContainer,n=this.getContainer();Promise.resolve(n).then((function(n){e.container=n,e.document=e.container.ownerDocument||document;var r=e.props.contentWindow||e.document.defaultView||window;e.contentWindow="function"==typeof r?r():r,e.scrollContainer=t?e.document.scrollingElement||e.document.documentElement:F(e.container)||e.container,e.autoScroller=new Z(e.scrollContainer,e.onAutoScroll),Object.keys(e.events).forEach((function(t){return T[t].forEach((function(n){return e.container.addEventListener(n,e.events[t],!1)}))})),e.container.addEventListener("keydown",e.handleKeyDown)}))}},{key:"componentWillUnmount",value:function(){var e=this;this.helper&&this.helper.parentNode&&this.helper.parentNode.removeChild(this.helper),this.container&&(Object.keys(this.events).forEach((function(t){return T[t].forEach((function(n){return e.container.removeEventListener(n,e.events[t])}))})),this.container.removeEventListener("keydown",this.handleKeyDown))}},{key:"updateHelperPosition",value:function(e){var t=this.props,n=t.lockAxis,r=t.lockOffset,i=t.lockToContainerEdges,o=t.transitionDuration,a=t.keyboardSortingTransitionDuration,s=void 0===a?o:a,c=this.manager.isKeySorting,u=e.ignoreTransition,d=L(e),f={x:d.x-this.initialOffset.x,y:d.y-this.initialOffset.y};if(f.y-=window.pageYOffset-this.initialWindowScroll.top,f.x-=window.pageXOffset-this.initialWindowScroll.left,this.translate=f,i){var h=l(U({height:this.height,lockOffset:r,width:this.width}),2),p=h[0],g=h[1],m={x:this.width/2-p.x,y:this.height/2-p.y},y={x:this.width/2-g.x,y:this.height/2-g.y};f.x=P(this.minTranslate.x+m.x,this.maxTranslate.x-y.x,f.x),f.y=P(this.minTranslate.y+m.y,this.maxTranslate.y-y.y,f.y)}"x"===n?f.y=0:"y"===n&&(f.x=0),c&&s&&!u&&A(this.helper,s),D(this.helper,f)}},{key:"animateNodes",value:function(){var e=this.props,t=e.transitionDuration,n=e.hideSortableGhost,r=e.onSortOver,i=this.containerScrollDelta,o=this.windowScrollDelta,a=this.manager.getOrderedRefs(),l=this.offsetEdge.left+this.translate.x+i.left,s=this.offsetEdge.top+this.translate.y+i.top,c=this.manager.isKeySorting,u=this.newIndex;this.newIndex=null;for(var d=0,f=a.length;d<f;d++){var h=a[d].node,p=h.sortableInfo.index,g=h.offsetWidth,m=h.offsetHeight,y={height:this.height>m?m/2:this.height/2,width:this.width>g?g/2:this.width/2},v=c&&p>this.index&&p<=u,b=c&&p<this.index&&p>=u,x={x:0,y:0},w=a[d].edgeOffset;w||(w=H(h,this.container),a[d].edgeOffset=w,c&&(a[d].boundingClientRect=_(h,i)));var S=d<a.length-1&&a[d+1],O=d>0&&a[d-1];S&&!S.edgeOffset&&(S.edgeOffset=H(S.node,this.container),c&&(S.boundingClientRect=_(S.node,i))),p!==this.index?(t&&A(h,t),this.axis.x?this.axis.y?b||p<this.index&&(l+o.left-y.width<=w.left&&s+o.top<=w.top+y.height||s+o.top+y.height<=w.top)?(x.x=this.width+this.marginOffset.x,w.left+x.x>this.containerBoundingRect.width-y.width&&S&&(x.x=S.edgeOffset.left-w.left,x.y=S.edgeOffset.top-w.top),null===this.newIndex&&(this.newIndex=p)):(v||p>this.index&&(l+o.left+y.width>=w.left&&s+o.top+y.height>=w.top||s+o.top+y.height>=w.top+m))&&(x.x=-(this.width+this.marginOffset.x),w.left+x.x<this.containerBoundingRect.left+y.width&&O&&(x.x=O.edgeOffset.left-w.left,x.y=O.edgeOffset.top-w.top),this.newIndex=p):v||p>this.index&&l+o.left+y.width>=w.left?(x.x=-(this.width+this.marginOffset.x),this.newIndex=p):(b||p<this.index&&l+o.left<=w.left+y.width)&&(x.x=this.width+this.marginOffset.x,null==this.newIndex&&(this.newIndex=p)):this.axis.y&&(v||p>this.index&&s+o.top+y.height>=w.top?(x.y=-(this.height+this.marginOffset.y),this.newIndex=p):(b||p<this.index&&s+o.top<=w.top+y.height)&&(x.y=this.height+this.marginOffset.y,null==this.newIndex&&(this.newIndex=p))),D(h,x),a[d].translate=x):n&&(this.sortableGhost=h,R(h,{opacity:0,visibility:"hidden"}))}null==this.newIndex&&(this.newIndex=this.index),c&&(this.newIndex=u);var k=c?this.prevIndex:u;r&&this.newIndex!==k&&r({collection:this.manager.active.collection,index:this.index,newIndex:this.newIndex,oldIndex:k,isKeySorting:c,nodes:a,helper:this.helper})}},{key:"getWrappedInstance",value:function(){return x()(a.withRef,"To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call"),this.wrappedInstance.current}},{key:"getContainer",value:function(){var e=this.props.getContainer;return"function"!=typeof e?(0,v.findDOMNode)(this):e(a.withRef?this.getWrappedInstance():void 0)}},{key:"render",value:function(){var e=a.withRef?this.wrappedInstance:null;return(0,r.createElement)(ae.Provider,{value:this.sortableContextValue},(0,r.createElement)(t,i({ref:e},E(this.props,re))))}},{key:"helperContainer",get:function(){var e=this.props.helperContainer;return"function"==typeof e?e():this.props.helperContainer||this.document.body}},{key:"containerScrollDelta",get:function(){return this.props.useWindowAsScrollContainer?{left:0,top:0}:{left:this.scrollContainer.scrollLeft-this.initialScroll.left,top:this.scrollContainer.scrollTop-this.initialScroll.top}}},{key:"windowScrollDelta",get:function(){return{left:this.contentWindow.pageXOffset-this.initialWindowScroll.left,top:this.contentWindow.pageYOffset-this.initialWindowScroll.top}}}]),o}(r.Component),e(n,"displayName",W("sortableList",t)),e(n,"defaultProps",ne),e(n,"propTypes",ee),o}((e=>{let{items:r}=e;return(0,t.createElement)("div",{className:"slider-edit-block"},(0,t.createElement)("h4",null,__("Slider images","bps-slider-block"),":"),(0,t.createElement)(ce.Flex,{justify:"flex-start",wrap:"true"},r.map(((e,n)=>(0,t.createElement)(a,{key:`item-${e}`,index:n,value:e})))),(0,t.createElement)(ce.Button,{isPrimary:!0,onClick:()=>{n.setAttributes({images:n.attributes.images.concat([{}])})}},__("Add image","bps-slider-block")))}));class f extends r.Component{constructor(){super(...arguments),e(this,"state",{items:o}),e(this,"onSortEnd",(e=>{let{oldIndex:t,newIndex:r}=e;const i=C(o,t,r);this.setState((e=>{let{items:n}=e;return{items:C(n,t,r)}}));const a=n.attributes.images.concat([]);a.sort((function(e,t){return i.indexOf(e.id)-i.indexOf(t.id)})),n.setAttributes({images:a})}))}render(){return(0,t.createElement)(u,{items:this.state.items,onSortEnd:this.onSortEnd,axis:"xy"})}}class m extends r.Component{render(){return(0,t.createElement)(ue.InspectorControls,null,(0,t.createElement)(ce.PanelBody,{title:__("Slider settings","bps-slider-block"),initialOpen:!0},(0,t.createElement)(ce.RangeControl,{label:__("Height ratio","bps-slider-block"),value:n.attributes.height_ratio,onChange:e=>n.setAttributes({height_ratio:e.toString()}),initialPosition:Number(n.attributes.height_ratio),min:.4,max:1,step:.1}),(0,t.createElement)(ce.RangeControl,{label:__("Gap in px","bps-slider-block"),value:n.attributes.gap,onChange:e=>n.setAttributes({gap:e.toString()}),initialPosition:Number(n.attributes.gap),min:0,max:100,step:5}),(0,t.createElement)(ce.RangeControl,{label:__("Padding in %","bps-slider-block"),value:n.attributes.padding,onChange:e=>n.setAttributes({padding:e.toString()}),initialPosition:Number(n.attributes.padding),min:0,max:30,step:2})))}}return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(m,null),(0,t.createElement)(f,null))},save:function(e){return null}})}()}();
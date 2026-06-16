(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Sy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Yf={exports:{}},sl={},Xf={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var as=Symbol.for("react.element"),Ey=Symbol.for("react.portal"),Iy=Symbol.for("react.fragment"),ky=Symbol.for("react.strict_mode"),xy=Symbol.for("react.profiler"),Ty=Symbol.for("react.provider"),Ry=Symbol.for("react.context"),Ny=Symbol.for("react.forward_ref"),Py=Symbol.for("react.suspense"),Ay=Symbol.for("react.memo"),Dy=Symbol.for("react.lazy"),Id=Symbol.iterator;function Oy(t){return t===null||typeof t!="object"?null:(t=Id&&t[Id]||t["@@iterator"],typeof t=="function"?t:null)}var Jf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zf=Object.assign,ep={};function Gr(t,e,n){this.props=t,this.context=e,this.refs=ep,this.updater=n||Jf}Gr.prototype.isReactComponent={};Gr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Gr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function tp(){}tp.prototype=Gr.prototype;function Lu(t,e,n){this.props=t,this.context=e,this.refs=ep,this.updater=n||Jf}var Mu=Lu.prototype=new tp;Mu.constructor=Lu;Zf(Mu,Gr.prototype);Mu.isPureReactComponent=!0;var kd=Array.isArray,np=Object.prototype.hasOwnProperty,bu={current:null},rp={key:!0,ref:!0,__self:!0,__source:!0};function ip(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)np.call(e,r)&&!rp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:as,type:t,key:s,ref:o,props:i,_owner:bu.current}}function Ly(t,e){return{$$typeof:as,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Fu(t){return typeof t=="object"&&t!==null&&t.$$typeof===as}function My(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xd=/\/+/g;function Ol(t,e){return typeof t=="object"&&t!==null&&t.key!=null?My(""+t.key):e.toString(36)}function Qs(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case as:case Ey:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ol(o,0):r,kd(i)?(n="",t!=null&&(n=t.replace(xd,"$&/")+"/"),Qs(i,e,n,"",function(u){return u})):i!=null&&(Fu(i)&&(i=Ly(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(xd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",kd(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Ol(s,l);o+=Qs(s,e,n,a,i)}else if(a=Oy(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Ol(s,l++),o+=Qs(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ts(t,e,n){if(t==null)return t;var r=[],i=0;return Qs(t,r,"","",function(s){return e.call(n,s,i++)}),r}function by(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ae={current:null},qs={transition:null},Fy={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:qs,ReactCurrentOwner:bu};function sp(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Ts,forEach:function(t,e,n){Ts(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ts(t,function(){e++}),e},toArray:function(t){return Ts(t,function(e){return e})||[]},only:function(t){if(!Fu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};U.Component=Gr;U.Fragment=Iy;U.Profiler=xy;U.PureComponent=Lu;U.StrictMode=ky;U.Suspense=Py;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fy;U.act=sp;U.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Zf({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=bu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)np.call(e,a)&&!rp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:as,type:t.type,key:i,ref:s,props:r,_owner:o}};U.createContext=function(t){return t={$$typeof:Ry,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ty,_context:t},t.Consumer=t};U.createElement=ip;U.createFactory=function(t){var e=ip.bind(null,t);return e.type=t,e};U.createRef=function(){return{current:null}};U.forwardRef=function(t){return{$$typeof:Ny,render:t}};U.isValidElement=Fu;U.lazy=function(t){return{$$typeof:Dy,_payload:{_status:-1,_result:t},_init:by}};U.memo=function(t,e){return{$$typeof:Ay,type:t,compare:e===void 0?null:e}};U.startTransition=function(t){var e=qs.transition;qs.transition={};try{t()}finally{qs.transition=e}};U.unstable_act=sp;U.useCallback=function(t,e){return Ae.current.useCallback(t,e)};U.useContext=function(t){return Ae.current.useContext(t)};U.useDebugValue=function(){};U.useDeferredValue=function(t){return Ae.current.useDeferredValue(t)};U.useEffect=function(t,e){return Ae.current.useEffect(t,e)};U.useId=function(){return Ae.current.useId()};U.useImperativeHandle=function(t,e,n){return Ae.current.useImperativeHandle(t,e,n)};U.useInsertionEffect=function(t,e){return Ae.current.useInsertionEffect(t,e)};U.useLayoutEffect=function(t,e){return Ae.current.useLayoutEffect(t,e)};U.useMemo=function(t,e){return Ae.current.useMemo(t,e)};U.useReducer=function(t,e,n){return Ae.current.useReducer(t,e,n)};U.useRef=function(t){return Ae.current.useRef(t)};U.useState=function(t){return Ae.current.useState(t)};U.useSyncExternalStore=function(t,e,n){return Ae.current.useSyncExternalStore(t,e,n)};U.useTransition=function(){return Ae.current.useTransition()};U.version="18.3.1";Xf.exports=U;var ie=Xf.exports;const jy=Sy(ie);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zy=ie,Uy=Symbol.for("react.element"),By=Symbol.for("react.fragment"),Wy=Object.prototype.hasOwnProperty,Hy=zy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vy={key:!0,ref:!0,__self:!0,__source:!0};function op(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Wy.call(e,r)&&!Vy.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Uy,type:t,key:s,ref:o,props:i,_owner:Hy.current}}sl.Fragment=By;sl.jsx=op;sl.jsxs=op;Yf.exports=sl;var f=Yf.exports,wa={},lp={exports:{}},Ge={},ap={exports:{}},up={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(m,v){var x=m.length;m.push(v);e:for(;0<x;){var B=x-1>>>1,Z=m[B];if(0<i(Z,v))m[B]=v,m[x]=Z,x=B;else break e}}function n(m){return m.length===0?null:m[0]}function r(m){if(m.length===0)return null;var v=m[0],x=m.pop();if(x!==v){m[0]=x;e:for(var B=0,Z=m.length,tr=Z>>>1;B<tr;){var Te=2*(B+1)-1,nr=m[Te],qe=Te+1,It=m[qe];if(0>i(nr,x))qe<Z&&0>i(It,nr)?(m[B]=It,m[qe]=x,B=qe):(m[B]=nr,m[Te]=x,B=Te);else if(qe<Z&&0>i(It,x))m[B]=It,m[qe]=x,B=qe;else break e}}return v}function i(m,v){var x=m.sortIndex-v.sortIndex;return x!==0?x:m.id-v.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,d=null,h=3,y=!1,w=!1,C=!1,O=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(m){for(var v=n(u);v!==null;){if(v.callback===null)r(u);else if(v.startTime<=m)r(u),v.sortIndex=v.expirationTime,e(a,v);else break;v=n(u)}}function S(m){if(C=!1,_(m),!w)if(n(a)!==null)w=!0,ni(R);else{var v=n(u);v!==null&&er(S,v.startTime-m)}}function R(m,v){w=!1,C&&(C=!1,g(E),E=-1),y=!0;var x=h;try{for(_(v),d=n(a);d!==null&&(!(d.expirationTime>v)||m&&!ue());){var B=d.callback;if(typeof B=="function"){d.callback=null,h=d.priorityLevel;var Z=B(d.expirationTime<=v);v=t.unstable_now(),typeof Z=="function"?d.callback=Z:d===n(a)&&r(a),_(v)}else r(a);d=n(a)}if(d!==null)var tr=!0;else{var Te=n(u);Te!==null&&er(S,Te.startTime-v),tr=!1}return tr}finally{d=null,h=x,y=!1}}var A=!1,N=null,E=-1,P=5,b=-1;function ue(){return!(t.unstable_now()-b<P)}function kn(){if(N!==null){var m=t.unstable_now();b=m;var v=!0;try{v=N(!0,m)}finally{v?xn():(A=!1,N=null)}}else A=!1}var xn;if(typeof p=="function")xn=function(){p(kn)};else if(typeof MessageChannel<"u"){var Is=new MessageChannel,ks=Is.port2;Is.port1.onmessage=kn,xn=function(){ks.postMessage(null)}}else xn=function(){O(kn,0)};function ni(m){N=m,A||(A=!0,xn())}function er(m,v){E=O(function(){m(t.unstable_now())},v)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(m){m.callback=null},t.unstable_continueExecution=function(){w||y||(w=!0,ni(R))},t.unstable_forceFrameRate=function(m){0>m||125<m?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<m?Math.floor(1e3/m):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(m){switch(h){case 1:case 2:case 3:var v=3;break;default:v=h}var x=h;h=v;try{return m()}finally{h=x}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(m,v){switch(m){case 1:case 2:case 3:case 4:case 5:break;default:m=3}var x=h;h=m;try{return v()}finally{h=x}},t.unstable_scheduleCallback=function(m,v,x){var B=t.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?B+x:B):x=B,m){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=x+Z,m={id:c++,callback:v,priorityLevel:m,startTime:x,expirationTime:Z,sortIndex:-1},x>B?(m.sortIndex=x,e(u,m),n(a)===null&&m===n(u)&&(C?(g(E),E=-1):C=!0,er(S,x-B))):(m.sortIndex=Z,e(a,m),w||y||(w=!0,ni(R))),m},t.unstable_shouldYield=ue,t.unstable_wrapCallback=function(m){var v=h;return function(){var x=h;h=v;try{return m.apply(this,arguments)}finally{h=x}}}})(up);ap.exports=up;var $y=ap.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gy=ie,$e=$y;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cp=new Set,bi={};function Xn(t,e){Or(t,e),Or(t+"Capture",e)}function Or(t,e){for(bi[t]=e,t=0;t<e.length;t++)cp.add(e[t])}var Mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ca=Object.prototype.hasOwnProperty,Ky=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Td={},Rd={};function Qy(t){return Ca.call(Rd,t)?!0:Ca.call(Td,t)?!1:Ky.test(t)?Rd[t]=!0:(Td[t]=!0,!1)}function qy(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Yy(t,e,n,r){if(e===null||typeof e>"u"||qy(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function De(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ce[t]=new De(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ce[e]=new De(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ce[t]=new De(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ce[t]=new De(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ce[t]=new De(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ce[t]=new De(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ce[t]=new De(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ce[t]=new De(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ce[t]=new De(t,5,!1,t.toLowerCase(),null,!1,!1)});var ju=/[\-:]([a-z])/g;function zu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ju,zu);Ce[e]=new De(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ju,zu);Ce[e]=new De(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ju,zu);Ce[e]=new De(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ce[t]=new De(t,1,!1,t.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ce[t]=new De(t,1,!1,t.toLowerCase(),null,!0,!0)});function Uu(t,e,n,r){var i=Ce.hasOwnProperty(e)?Ce[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Yy(e,n,i,r)&&(n=null),r||i===null?Qy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ht=Gy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Rs=Symbol.for("react.element"),lr=Symbol.for("react.portal"),ar=Symbol.for("react.fragment"),Bu=Symbol.for("react.strict_mode"),Sa=Symbol.for("react.profiler"),dp=Symbol.for("react.provider"),hp=Symbol.for("react.context"),Wu=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Ia=Symbol.for("react.suspense_list"),Hu=Symbol.for("react.memo"),Kt=Symbol.for("react.lazy"),fp=Symbol.for("react.offscreen"),Nd=Symbol.iterator;function ri(t){return t===null||typeof t!="object"?null:(t=Nd&&t[Nd]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,Ll;function _i(t){if(Ll===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ll=e&&e[1]||""}return`
`+Ll+t}var Ml=!1;function bl(t,e){if(!t||Ml)return"";Ml=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Ml=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_i(t):""}function Xy(t){switch(t.tag){case 5:return _i(t.type);case 16:return _i("Lazy");case 13:return _i("Suspense");case 19:return _i("SuspenseList");case 0:case 2:case 15:return t=bl(t.type,!1),t;case 11:return t=bl(t.type.render,!1),t;case 1:return t=bl(t.type,!0),t;default:return""}}function ka(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ar:return"Fragment";case lr:return"Portal";case Sa:return"Profiler";case Bu:return"StrictMode";case Ea:return"Suspense";case Ia:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case hp:return(t.displayName||"Context")+".Consumer";case dp:return(t._context.displayName||"Context")+".Provider";case Wu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Hu:return e=t.displayName||null,e!==null?e:ka(t.type)||"Memo";case Kt:e=t._payload,t=t._init;try{return ka(t(e))}catch{}}return null}function Jy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ka(e);case 8:return e===Bu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pp(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Zy(t){var e=pp(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ns(t){t._valueTracker||(t._valueTracker=Zy(t))}function gp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=pp(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ho(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xa(t,e){var n=e.checked;return re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Pd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=mn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function mp(t,e){e=e.checked,e!=null&&Uu(t,"checked",e,!1)}function Ta(t,e){mp(t,e);var n=mn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ra(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ra(t,e.type,mn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ad(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ra(t,e,n){(e!=="number"||ho(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var yi=Array.isArray;function Cr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+mn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Na(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Dd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(yi(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:mn(n)}}function _p(t,e){var n=mn(e.value),r=mn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Od(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function yp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pa(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?yp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ps,vp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ps=Ps||document.createElement("div"),Ps.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ps.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ci={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ev=["Webkit","ms","Moz","O"];Object.keys(Ci).forEach(function(t){ev.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ci[e]=Ci[t]})});function wp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ci.hasOwnProperty(t)&&Ci[t]?(""+e).trim():e+"px"}function Cp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=wp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var tv=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Aa(t,e){if(e){if(tv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function Da(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oa=null;function Vu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var La=null,Sr=null,Er=null;function Ld(t){if(t=ds(t)){if(typeof La!="function")throw Error(I(280));var e=t.stateNode;e&&(e=cl(e),La(t.stateNode,t.type,e))}}function Sp(t){Sr?Er?Er.push(t):Er=[t]:Sr=t}function Ep(){if(Sr){var t=Sr,e=Er;if(Er=Sr=null,Ld(t),e)for(t=0;t<e.length;t++)Ld(e[t])}}function Ip(t,e){return t(e)}function kp(){}var Fl=!1;function xp(t,e,n){if(Fl)return t(e,n);Fl=!0;try{return Ip(t,e,n)}finally{Fl=!1,(Sr!==null||Er!==null)&&(kp(),Ep())}}function ji(t,e){var n=t.stateNode;if(n===null)return null;var r=cl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var Ma=!1;if(Mt)try{var ii={};Object.defineProperty(ii,"passive",{get:function(){Ma=!0}}),window.addEventListener("test",ii,ii),window.removeEventListener("test",ii,ii)}catch{Ma=!1}function nv(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Si=!1,fo=null,po=!1,ba=null,rv={onError:function(t){Si=!0,fo=t}};function iv(t,e,n,r,i,s,o,l,a){Si=!1,fo=null,nv.apply(rv,arguments)}function sv(t,e,n,r,i,s,o,l,a){if(iv.apply(this,arguments),Si){if(Si){var u=fo;Si=!1,fo=null}else throw Error(I(198));po||(po=!0,ba=u)}}function Jn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Tp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Md(t){if(Jn(t)!==t)throw Error(I(188))}function ov(t){var e=t.alternate;if(!e){if(e=Jn(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Md(i),t;if(s===r)return Md(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function Rp(t){return t=ov(t),t!==null?Np(t):null}function Np(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Np(t);if(e!==null)return e;t=t.sibling}return null}var Pp=$e.unstable_scheduleCallback,bd=$e.unstable_cancelCallback,lv=$e.unstable_shouldYield,av=$e.unstable_requestPaint,le=$e.unstable_now,uv=$e.unstable_getCurrentPriorityLevel,$u=$e.unstable_ImmediatePriority,Ap=$e.unstable_UserBlockingPriority,go=$e.unstable_NormalPriority,cv=$e.unstable_LowPriority,Dp=$e.unstable_IdlePriority,ol=null,vt=null;function dv(t){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(ol,t,void 0,(t.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:pv,hv=Math.log,fv=Math.LN2;function pv(t){return t>>>=0,t===0?32:31-(hv(t)/fv|0)|0}var As=64,Ds=4194304;function vi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function mo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=vi(l):(s&=o,s!==0&&(r=vi(s)))}else o=n&~i,o!==0?r=vi(o):s!==0&&(r=vi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ht(e),i=1<<n,r|=t[n],e&=~i;return r}function gv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mv(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ht(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=gv(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Fa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Op(){var t=As;return As<<=1,!(As&4194240)&&(As=64),t}function jl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function us(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ht(e),t[e]=n}function _v(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ht(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Gu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ht(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var V=0;function Lp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Mp,Ku,bp,Fp,jp,ja=!1,Os=[],nn=null,rn=null,sn=null,zi=new Map,Ui=new Map,qt=[],yv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fd(t,e){switch(t){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":sn=null;break;case"pointerover":case"pointerout":zi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ui.delete(e.pointerId)}}function si(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ds(e),e!==null&&Ku(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function vv(t,e,n,r,i){switch(e){case"focusin":return nn=si(nn,t,e,n,r,i),!0;case"dragenter":return rn=si(rn,t,e,n,r,i),!0;case"mouseover":return sn=si(sn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return zi.set(s,si(zi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ui.set(s,si(Ui.get(s)||null,t,e,n,r,i)),!0}return!1}function zp(t){var e=Dn(t.target);if(e!==null){var n=Jn(e);if(n!==null){if(e=n.tag,e===13){if(e=Tp(n),e!==null){t.blockedOn=e,jp(t.priority,function(){bp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ys(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=za(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Oa=r,n.target.dispatchEvent(r),Oa=null}else return e=ds(n),e!==null&&Ku(e),t.blockedOn=n,!1;e.shift()}return!0}function jd(t,e,n){Ys(t)&&n.delete(e)}function wv(){ja=!1,nn!==null&&Ys(nn)&&(nn=null),rn!==null&&Ys(rn)&&(rn=null),sn!==null&&Ys(sn)&&(sn=null),zi.forEach(jd),Ui.forEach(jd)}function oi(t,e){t.blockedOn===e&&(t.blockedOn=null,ja||(ja=!0,$e.unstable_scheduleCallback($e.unstable_NormalPriority,wv)))}function Bi(t){function e(i){return oi(i,t)}if(0<Os.length){oi(Os[0],t);for(var n=1;n<Os.length;n++){var r=Os[n];r.blockedOn===t&&(r.blockedOn=null)}}for(nn!==null&&oi(nn,t),rn!==null&&oi(rn,t),sn!==null&&oi(sn,t),zi.forEach(e),Ui.forEach(e),n=0;n<qt.length;n++)r=qt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<qt.length&&(n=qt[0],n.blockedOn===null);)zp(n),n.blockedOn===null&&qt.shift()}var Ir=Ht.ReactCurrentBatchConfig,_o=!0;function Cv(t,e,n,r){var i=V,s=Ir.transition;Ir.transition=null;try{V=1,Qu(t,e,n,r)}finally{V=i,Ir.transition=s}}function Sv(t,e,n,r){var i=V,s=Ir.transition;Ir.transition=null;try{V=4,Qu(t,e,n,r)}finally{V=i,Ir.transition=s}}function Qu(t,e,n,r){if(_o){var i=za(t,e,n,r);if(i===null)Ql(t,e,r,yo,n),Fd(t,r);else if(vv(i,t,e,n,r))r.stopPropagation();else if(Fd(t,r),e&4&&-1<yv.indexOf(t)){for(;i!==null;){var s=ds(i);if(s!==null&&Mp(s),s=za(t,e,n,r),s===null&&Ql(t,e,r,yo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ql(t,e,r,null,n)}}var yo=null;function za(t,e,n,r){if(yo=null,t=Vu(r),t=Dn(t),t!==null)if(e=Jn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Tp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yo=t,null}function Up(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uv()){case $u:return 1;case Ap:return 4;case go:case cv:return 16;case Dp:return 536870912;default:return 16}default:return 16}}var en=null,qu=null,Xs=null;function Bp(){if(Xs)return Xs;var t,e=qu,n=e.length,r,i="value"in en?en.value:en.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Xs=i.slice(t,1<r?1-r:void 0)}function Js(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ls(){return!0}function zd(){return!1}function Ke(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ls:zd,this.isPropagationStopped=zd,this}return re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ls)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ls)},persist:function(){},isPersistent:Ls}),e}var Kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yu=Ke(Kr),cs=re({},Kr,{view:0,detail:0}),Ev=Ke(cs),zl,Ul,li,ll=re({},cs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==li&&(li&&t.type==="mousemove"?(zl=t.screenX-li.screenX,Ul=t.screenY-li.screenY):Ul=zl=0,li=t),zl)},movementY:function(t){return"movementY"in t?t.movementY:Ul}}),Ud=Ke(ll),Iv=re({},ll,{dataTransfer:0}),kv=Ke(Iv),xv=re({},cs,{relatedTarget:0}),Bl=Ke(xv),Tv=re({},Kr,{animationName:0,elapsedTime:0,pseudoElement:0}),Rv=Ke(Tv),Nv=re({},Kr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Pv=Ke(Nv),Av=re({},Kr,{data:0}),Bd=Ke(Av),Dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ov={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Lv[t])?!!e[t]:!1}function Xu(){return Mv}var bv=re({},cs,{key:function(t){if(t.key){var e=Dv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Js(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ov[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xu,charCode:function(t){return t.type==="keypress"?Js(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Js(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Fv=Ke(bv),jv=re({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wd=Ke(jv),zv=re({},cs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xu}),Uv=Ke(zv),Bv=re({},Kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wv=Ke(Bv),Hv=re({},ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vv=Ke(Hv),$v=[9,13,27,32],Ju=Mt&&"CompositionEvent"in window,Ei=null;Mt&&"documentMode"in document&&(Ei=document.documentMode);var Gv=Mt&&"TextEvent"in window&&!Ei,Wp=Mt&&(!Ju||Ei&&8<Ei&&11>=Ei),Hd=" ",Vd=!1;function Hp(t,e){switch(t){case"keyup":return $v.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ur=!1;function Kv(t,e){switch(t){case"compositionend":return Vp(e);case"keypress":return e.which!==32?null:(Vd=!0,Hd);case"textInput":return t=e.data,t===Hd&&Vd?null:t;default:return null}}function Qv(t,e){if(ur)return t==="compositionend"||!Ju&&Hp(t,e)?(t=Bp(),Xs=qu=en=null,ur=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Wp&&e.locale!=="ko"?null:e.data;default:return null}}var qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $d(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!qv[t.type]:e==="textarea"}function $p(t,e,n,r){Sp(r),e=vo(e,"onChange"),0<e.length&&(n=new Yu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ii=null,Wi=null;function Yv(t){ng(t,0)}function al(t){var e=hr(t);if(gp(e))return t}function Xv(t,e){if(t==="change")return e}var Gp=!1;if(Mt){var Wl;if(Mt){var Hl="oninput"in document;if(!Hl){var Gd=document.createElement("div");Gd.setAttribute("oninput","return;"),Hl=typeof Gd.oninput=="function"}Wl=Hl}else Wl=!1;Gp=Wl&&(!document.documentMode||9<document.documentMode)}function Kd(){Ii&&(Ii.detachEvent("onpropertychange",Kp),Wi=Ii=null)}function Kp(t){if(t.propertyName==="value"&&al(Wi)){var e=[];$p(e,Wi,t,Vu(t)),xp(Yv,e)}}function Jv(t,e,n){t==="focusin"?(Kd(),Ii=e,Wi=n,Ii.attachEvent("onpropertychange",Kp)):t==="focusout"&&Kd()}function Zv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return al(Wi)}function ew(t,e){if(t==="click")return al(e)}function tw(t,e){if(t==="input"||t==="change")return al(e)}function nw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gt=typeof Object.is=="function"?Object.is:nw;function Hi(t,e){if(gt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ca.call(e,i)||!gt(t[i],e[i]))return!1}return!0}function Qd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qd(t,e){var n=Qd(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qd(n)}}function Qp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Qp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function qp(){for(var t=window,e=ho();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ho(t.document)}return e}function Zu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function rw(t){var e=qp(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Qp(n.ownerDocument.documentElement,n)){if(r!==null&&Zu(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=qd(n,s);var o=qd(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var iw=Mt&&"documentMode"in document&&11>=document.documentMode,cr=null,Ua=null,ki=null,Ba=!1;function Yd(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ba||cr==null||cr!==ho(r)||(r=cr,"selectionStart"in r&&Zu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ki&&Hi(ki,r)||(ki=r,r=vo(Ua,"onSelect"),0<r.length&&(e=new Yu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=cr)))}function Ms(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var dr={animationend:Ms("Animation","AnimationEnd"),animationiteration:Ms("Animation","AnimationIteration"),animationstart:Ms("Animation","AnimationStart"),transitionend:Ms("Transition","TransitionEnd")},Vl={},Yp={};Mt&&(Yp=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function ul(t){if(Vl[t])return Vl[t];if(!dr[t])return t;var e=dr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Yp)return Vl[t]=e[n];return t}var Xp=ul("animationend"),Jp=ul("animationiteration"),Zp=ul("animationstart"),eg=ul("transitionend"),tg=new Map,Xd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wn(t,e){tg.set(t,e),Xn(e,[t])}for(var $l=0;$l<Xd.length;$l++){var Gl=Xd[$l],sw=Gl.toLowerCase(),ow=Gl[0].toUpperCase()+Gl.slice(1);wn(sw,"on"+ow)}wn(Xp,"onAnimationEnd");wn(Jp,"onAnimationIteration");wn(Zp,"onAnimationStart");wn("dblclick","onDoubleClick");wn("focusin","onFocus");wn("focusout","onBlur");wn(eg,"onTransitionEnd");Or("onMouseEnter",["mouseout","mouseover"]);Or("onMouseLeave",["mouseout","mouseover"]);Or("onPointerEnter",["pointerout","pointerover"]);Or("onPointerLeave",["pointerout","pointerover"]);Xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lw=new Set("cancel close invalid load scroll toggle".split(" ").concat(wi));function Jd(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,sv(r,e,void 0,t),t.currentTarget=null}function ng(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Jd(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Jd(i,l,u),s=a}}}if(po)throw t=ba,po=!1,ba=null,t}function q(t,e){var n=e[Ga];n===void 0&&(n=e[Ga]=new Set);var r=t+"__bubble";n.has(r)||(rg(e,t,2,!1),n.add(r))}function Kl(t,e,n){var r=0;e&&(r|=4),rg(n,t,r,e)}var bs="_reactListening"+Math.random().toString(36).slice(2);function Vi(t){if(!t[bs]){t[bs]=!0,cp.forEach(function(n){n!=="selectionchange"&&(lw.has(n)||Kl(n,!1,t),Kl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[bs]||(e[bs]=!0,Kl("selectionchange",!1,e))}}function rg(t,e,n,r){switch(Up(e)){case 1:var i=Cv;break;case 4:i=Sv;break;default:i=Qu}n=i.bind(null,e,n,t),i=void 0,!Ma||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ql(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Dn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}xp(function(){var u=s,c=Vu(n),d=[];e:{var h=tg.get(t);if(h!==void 0){var y=Yu,w=t;switch(t){case"keypress":if(Js(n)===0)break e;case"keydown":case"keyup":y=Fv;break;case"focusin":w="focus",y=Bl;break;case"focusout":w="blur",y=Bl;break;case"beforeblur":case"afterblur":y=Bl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ud;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Uv;break;case Xp:case Jp:case Zp:y=Rv;break;case eg:y=Wv;break;case"scroll":y=Ev;break;case"wheel":y=Vv;break;case"copy":case"cut":case"paste":y=Pv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Wd}var C=(e&4)!==0,O=!C&&t==="scroll",g=C?h!==null?h+"Capture":null:h;C=[];for(var p=u,_;p!==null;){_=p;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,g!==null&&(S=ji(p,g),S!=null&&C.push($i(p,S,_)))),O)break;p=p.return}0<C.length&&(h=new y(h,w,null,n,c),d.push({event:h,listeners:C}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",h&&n!==Oa&&(w=n.relatedTarget||n.fromElement)&&(Dn(w)||w[bt]))break e;if((y||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,y?(w=n.relatedTarget||n.toElement,y=u,w=w?Dn(w):null,w!==null&&(O=Jn(w),w!==O||w.tag!==5&&w.tag!==6)&&(w=null)):(y=null,w=u),y!==w)){if(C=Ud,S="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(C=Wd,S="onPointerLeave",g="onPointerEnter",p="pointer"),O=y==null?h:hr(y),_=w==null?h:hr(w),h=new C(S,p+"leave",y,n,c),h.target=O,h.relatedTarget=_,S=null,Dn(c)===u&&(C=new C(g,p+"enter",w,n,c),C.target=_,C.relatedTarget=O,S=C),O=S,y&&w)t:{for(C=y,g=w,p=0,_=C;_;_=rr(_))p++;for(_=0,S=g;S;S=rr(S))_++;for(;0<p-_;)C=rr(C),p--;for(;0<_-p;)g=rr(g),_--;for(;p--;){if(C===g||g!==null&&C===g.alternate)break t;C=rr(C),g=rr(g)}C=null}else C=null;y!==null&&Zd(d,h,y,C,!1),w!==null&&O!==null&&Zd(d,O,w,C,!0)}}e:{if(h=u?hr(u):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var R=Xv;else if($d(h))if(Gp)R=tw;else{R=Zv;var A=Jv}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=ew);if(R&&(R=R(t,u))){$p(d,R,n,c);break e}A&&A(t,h,u),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Ra(h,"number",h.value)}switch(A=u?hr(u):window,t){case"focusin":($d(A)||A.contentEditable==="true")&&(cr=A,Ua=u,ki=null);break;case"focusout":ki=Ua=cr=null;break;case"mousedown":Ba=!0;break;case"contextmenu":case"mouseup":case"dragend":Ba=!1,Yd(d,n,c);break;case"selectionchange":if(iw)break;case"keydown":case"keyup":Yd(d,n,c)}var N;if(Ju)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else ur?Hp(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Wp&&n.locale!=="ko"&&(ur||E!=="onCompositionStart"?E==="onCompositionEnd"&&ur&&(N=Bp()):(en=c,qu="value"in en?en.value:en.textContent,ur=!0)),A=vo(u,E),0<A.length&&(E=new Bd(E,t,null,n,c),d.push({event:E,listeners:A}),N?E.data=N:(N=Vp(n),N!==null&&(E.data=N)))),(N=Gv?Kv(t,n):Qv(t,n))&&(u=vo(u,"onBeforeInput"),0<u.length&&(c=new Bd("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=N))}ng(d,e)})}function $i(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ji(t,n),s!=null&&r.unshift($i(t,s,i)),s=ji(t,e),s!=null&&r.push($i(t,s,i))),t=t.return}return r}function rr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Zd(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=ji(n,s),a!=null&&o.unshift($i(n,a,l))):i||(a=ji(n,s),a!=null&&o.push($i(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var aw=/\r\n?/g,uw=/\u0000|\uFFFD/g;function eh(t){return(typeof t=="string"?t:""+t).replace(aw,`
`).replace(uw,"")}function Fs(t,e,n){if(e=eh(e),eh(t)!==e&&n)throw Error(I(425))}function wo(){}var Wa=null,Ha=null;function Va(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $a=typeof setTimeout=="function"?setTimeout:void 0,cw=typeof clearTimeout=="function"?clearTimeout:void 0,th=typeof Promise=="function"?Promise:void 0,dw=typeof queueMicrotask=="function"?queueMicrotask:typeof th<"u"?function(t){return th.resolve(null).then(t).catch(hw)}:$a;function hw(t){setTimeout(function(){throw t})}function ql(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Bi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Bi(e)}function on(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function nh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qr=Math.random().toString(36).slice(2),yt="__reactFiber$"+Qr,Gi="__reactProps$"+Qr,bt="__reactContainer$"+Qr,Ga="__reactEvents$"+Qr,fw="__reactListeners$"+Qr,pw="__reactHandles$"+Qr;function Dn(t){var e=t[yt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bt]||n[yt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=nh(t);t!==null;){if(n=t[yt])return n;t=nh(t)}return e}t=n,n=t.parentNode}return null}function ds(t){return t=t[yt]||t[bt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function cl(t){return t[Gi]||null}var Ka=[],fr=-1;function Cn(t){return{current:t}}function X(t){0>fr||(t.current=Ka[fr],Ka[fr]=null,fr--)}function Q(t,e){fr++,Ka[fr]=t.current,t.current=e}var _n={},xe=Cn(_n),Fe=Cn(!1),zn=_n;function Lr(t,e){var n=t.type.contextTypes;if(!n)return _n;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function je(t){return t=t.childContextTypes,t!=null}function Co(){X(Fe),X(xe)}function rh(t,e,n){if(xe.current!==_n)throw Error(I(168));Q(xe,e),Q(Fe,n)}function ig(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,Jy(t)||"Unknown",i));return re({},n,r)}function So(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_n,zn=xe.current,Q(xe,t),Q(Fe,Fe.current),!0}function ih(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=ig(t,e,zn),r.__reactInternalMemoizedMergedChildContext=t,X(Fe),X(xe),Q(xe,t)):X(Fe),Q(Fe,n)}var xt=null,dl=!1,Yl=!1;function sg(t){xt===null?xt=[t]:xt.push(t)}function gw(t){dl=!0,sg(t)}function Sn(){if(!Yl&&xt!==null){Yl=!0;var t=0,e=V;try{var n=xt;for(V=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}xt=null,dl=!1}catch(i){throw xt!==null&&(xt=xt.slice(t+1)),Pp($u,Sn),i}finally{V=e,Yl=!1}}return null}var pr=[],gr=0,Eo=null,Io=0,Xe=[],Je=0,Un=null,Rt=1,Nt="";function Tn(t,e){pr[gr++]=Io,pr[gr++]=Eo,Eo=t,Io=e}function og(t,e,n){Xe[Je++]=Rt,Xe[Je++]=Nt,Xe[Je++]=Un,Un=t;var r=Rt;t=Nt;var i=32-ht(r)-1;r&=~(1<<i),n+=1;var s=32-ht(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Rt=1<<32-ht(e)+i|n<<i|r,Nt=s+t}else Rt=1<<s|n<<i|r,Nt=t}function ec(t){t.return!==null&&(Tn(t,1),og(t,1,0))}function tc(t){for(;t===Eo;)Eo=pr[--gr],pr[gr]=null,Io=pr[--gr],pr[gr]=null;for(;t===Un;)Un=Xe[--Je],Xe[Je]=null,Nt=Xe[--Je],Xe[Je]=null,Rt=Xe[--Je],Xe[Je]=null}var Ve=null,He=null,J=!1,ot=null;function lg(t,e){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function sh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ve=t,He=on(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ve=t,He=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Un!==null?{id:Rt,overflow:Nt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ve=t,He=null,!0):!1;default:return!1}}function Qa(t){return(t.mode&1)!==0&&(t.flags&128)===0}function qa(t){if(J){var e=He;if(e){var n=e;if(!sh(t,e)){if(Qa(t))throw Error(I(418));e=on(n.nextSibling);var r=Ve;e&&sh(t,e)?lg(r,n):(t.flags=t.flags&-4097|2,J=!1,Ve=t)}}else{if(Qa(t))throw Error(I(418));t.flags=t.flags&-4097|2,J=!1,Ve=t}}}function oh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ve=t}function js(t){if(t!==Ve)return!1;if(!J)return oh(t),J=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Va(t.type,t.memoizedProps)),e&&(e=He)){if(Qa(t))throw ag(),Error(I(418));for(;e;)lg(t,e),e=on(e.nextSibling)}if(oh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){He=on(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}He=null}}else He=Ve?on(t.stateNode.nextSibling):null;return!0}function ag(){for(var t=He;t;)t=on(t.nextSibling)}function Mr(){He=Ve=null,J=!1}function nc(t){ot===null?ot=[t]:ot.push(t)}var mw=Ht.ReactCurrentBatchConfig;function ai(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function zs(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function lh(t){var e=t._init;return e(t._payload)}function ug(t){function e(g,p){if(t){var _=g.deletions;_===null?(g.deletions=[p],g.flags|=16):_.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=cn(g,p),g.index=0,g.sibling=null,g}function s(g,p,_){return g.index=_,t?(_=g.alternate,_!==null?(_=_.index,_<p?(g.flags|=2,p):_):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function l(g,p,_,S){return p===null||p.tag!==6?(p=ra(_,g.mode,S),p.return=g,p):(p=i(p,_),p.return=g,p)}function a(g,p,_,S){var R=_.type;return R===ar?c(g,p,_.props.children,S,_.key):p!==null&&(p.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Kt&&lh(R)===p.type)?(S=i(p,_.props),S.ref=ai(g,p,_),S.return=g,S):(S=so(_.type,_.key,_.props,null,g.mode,S),S.ref=ai(g,p,_),S.return=g,S)}function u(g,p,_,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==_.containerInfo||p.stateNode.implementation!==_.implementation?(p=ia(_,g.mode,S),p.return=g,p):(p=i(p,_.children||[]),p.return=g,p)}function c(g,p,_,S,R){return p===null||p.tag!==7?(p=jn(_,g.mode,S,R),p.return=g,p):(p=i(p,_),p.return=g,p)}function d(g,p,_){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ra(""+p,g.mode,_),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Rs:return _=so(p.type,p.key,p.props,null,g.mode,_),_.ref=ai(g,null,p),_.return=g,_;case lr:return p=ia(p,g.mode,_),p.return=g,p;case Kt:var S=p._init;return d(g,S(p._payload),_)}if(yi(p)||ri(p))return p=jn(p,g.mode,_,null),p.return=g,p;zs(g,p)}return null}function h(g,p,_,S){var R=p!==null?p.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return R!==null?null:l(g,p,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Rs:return _.key===R?a(g,p,_,S):null;case lr:return _.key===R?u(g,p,_,S):null;case Kt:return R=_._init,h(g,p,R(_._payload),S)}if(yi(_)||ri(_))return R!==null?null:c(g,p,_,S,null);zs(g,_)}return null}function y(g,p,_,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(_)||null,l(p,g,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Rs:return g=g.get(S.key===null?_:S.key)||null,a(p,g,S,R);case lr:return g=g.get(S.key===null?_:S.key)||null,u(p,g,S,R);case Kt:var A=S._init;return y(g,p,_,A(S._payload),R)}if(yi(S)||ri(S))return g=g.get(_)||null,c(p,g,S,R,null);zs(p,S)}return null}function w(g,p,_,S){for(var R=null,A=null,N=p,E=p=0,P=null;N!==null&&E<_.length;E++){N.index>E?(P=N,N=null):P=N.sibling;var b=h(g,N,_[E],S);if(b===null){N===null&&(N=P);break}t&&N&&b.alternate===null&&e(g,N),p=s(b,p,E),A===null?R=b:A.sibling=b,A=b,N=P}if(E===_.length)return n(g,N),J&&Tn(g,E),R;if(N===null){for(;E<_.length;E++)N=d(g,_[E],S),N!==null&&(p=s(N,p,E),A===null?R=N:A.sibling=N,A=N);return J&&Tn(g,E),R}for(N=r(g,N);E<_.length;E++)P=y(N,g,E,_[E],S),P!==null&&(t&&P.alternate!==null&&N.delete(P.key===null?E:P.key),p=s(P,p,E),A===null?R=P:A.sibling=P,A=P);return t&&N.forEach(function(ue){return e(g,ue)}),J&&Tn(g,E),R}function C(g,p,_,S){var R=ri(_);if(typeof R!="function")throw Error(I(150));if(_=R.call(_),_==null)throw Error(I(151));for(var A=R=null,N=p,E=p=0,P=null,b=_.next();N!==null&&!b.done;E++,b=_.next()){N.index>E?(P=N,N=null):P=N.sibling;var ue=h(g,N,b.value,S);if(ue===null){N===null&&(N=P);break}t&&N&&ue.alternate===null&&e(g,N),p=s(ue,p,E),A===null?R=ue:A.sibling=ue,A=ue,N=P}if(b.done)return n(g,N),J&&Tn(g,E),R;if(N===null){for(;!b.done;E++,b=_.next())b=d(g,b.value,S),b!==null&&(p=s(b,p,E),A===null?R=b:A.sibling=b,A=b);return J&&Tn(g,E),R}for(N=r(g,N);!b.done;E++,b=_.next())b=y(N,g,E,b.value,S),b!==null&&(t&&b.alternate!==null&&N.delete(b.key===null?E:b.key),p=s(b,p,E),A===null?R=b:A.sibling=b,A=b);return t&&N.forEach(function(kn){return e(g,kn)}),J&&Tn(g,E),R}function O(g,p,_,S){if(typeof _=="object"&&_!==null&&_.type===ar&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Rs:e:{for(var R=_.key,A=p;A!==null;){if(A.key===R){if(R=_.type,R===ar){if(A.tag===7){n(g,A.sibling),p=i(A,_.props.children),p.return=g,g=p;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Kt&&lh(R)===A.type){n(g,A.sibling),p=i(A,_.props),p.ref=ai(g,A,_),p.return=g,g=p;break e}n(g,A);break}else e(g,A);A=A.sibling}_.type===ar?(p=jn(_.props.children,g.mode,S,_.key),p.return=g,g=p):(S=so(_.type,_.key,_.props,null,g.mode,S),S.ref=ai(g,p,_),S.return=g,g=S)}return o(g);case lr:e:{for(A=_.key;p!==null;){if(p.key===A)if(p.tag===4&&p.stateNode.containerInfo===_.containerInfo&&p.stateNode.implementation===_.implementation){n(g,p.sibling),p=i(p,_.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=ia(_,g.mode,S),p.return=g,g=p}return o(g);case Kt:return A=_._init,O(g,p,A(_._payload),S)}if(yi(_))return w(g,p,_,S);if(ri(_))return C(g,p,_,S);zs(g,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,_),p.return=g,g=p):(n(g,p),p=ra(_,g.mode,S),p.return=g,g=p),o(g)):n(g,p)}return O}var br=ug(!0),cg=ug(!1),ko=Cn(null),xo=null,mr=null,rc=null;function ic(){rc=mr=xo=null}function sc(t){var e=ko.current;X(ko),t._currentValue=e}function Ya(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function kr(t,e){xo=t,rc=mr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Le=!0),t.firstContext=null)}function tt(t){var e=t._currentValue;if(rc!==t)if(t={context:t,memoizedValue:e,next:null},mr===null){if(xo===null)throw Error(I(308));mr=t,xo.dependencies={lanes:0,firstContext:t}}else mr=mr.next=t;return e}var On=null;function oc(t){On===null?On=[t]:On.push(t)}function dg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,oc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ft(t,r)}function Ft(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qt=!1;function lc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ot(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ln(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ft(t,n)}return i=r.interleaved,i===null?(e.next=e,oc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ft(t,n)}function Zs(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gu(t,n)}}function ah(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function To(t,e,n,r){var i=t.updateQueue;Qt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,c=u=a=null,l=s;do{var h=l.lane,y=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=t,C=l;switch(h=e,y=n,C.tag){case 1:if(w=C.payload,typeof w=="function"){d=w.call(y,d,h);break e}d=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=C.payload,h=typeof w=="function"?w.call(y,d,h):w,h==null)break e;d=re({},d,h);break e;case 2:Qt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else y={eventTime:y,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=y,a=d):c=c.next=y,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Wn|=o,t.lanes=o,t.memoizedState=d}}function uh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var hs={},wt=Cn(hs),Ki=Cn(hs),Qi=Cn(hs);function Ln(t){if(t===hs)throw Error(I(174));return t}function ac(t,e){switch(Q(Qi,e),Q(Ki,t),Q(wt,hs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pa(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pa(e,t)}X(wt),Q(wt,e)}function Fr(){X(wt),X(Ki),X(Qi)}function fg(t){Ln(Qi.current);var e=Ln(wt.current),n=Pa(e,t.type);e!==n&&(Q(Ki,t),Q(wt,n))}function uc(t){Ki.current===t&&(X(wt),X(Ki))}var te=Cn(0);function Ro(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xl=[];function cc(){for(var t=0;t<Xl.length;t++)Xl[t]._workInProgressVersionPrimary=null;Xl.length=0}var eo=Ht.ReactCurrentDispatcher,Jl=Ht.ReactCurrentBatchConfig,Bn=0,ne=null,ce=null,pe=null,No=!1,xi=!1,qi=0,_w=0;function Se(){throw Error(I(321))}function dc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gt(t[n],e[n]))return!1;return!0}function hc(t,e,n,r,i,s){if(Bn=s,ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,eo.current=t===null||t.memoizedState===null?Cw:Sw,t=n(r,i),xi){s=0;do{if(xi=!1,qi=0,25<=s)throw Error(I(301));s+=1,pe=ce=null,e.updateQueue=null,eo.current=Ew,t=n(r,i)}while(xi)}if(eo.current=Po,e=ce!==null&&ce.next!==null,Bn=0,pe=ce=ne=null,No=!1,e)throw Error(I(300));return t}function fc(){var t=qi!==0;return qi=0,t}function _t(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?ne.memoizedState=pe=t:pe=pe.next=t,pe}function nt(){if(ce===null){var t=ne.alternate;t=t!==null?t.memoizedState:null}else t=ce.next;var e=pe===null?ne.memoizedState:pe.next;if(e!==null)pe=e,ce=t;else{if(t===null)throw Error(I(310));ce=t,t={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},pe===null?ne.memoizedState=pe=t:pe=pe.next=t}return pe}function Yi(t,e){return typeof e=="function"?e(t):e}function Zl(t){var e=nt(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=ce,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((Bn&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,ne.lanes|=c,Wn|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,gt(r,e.memoizedState)||(Le=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ne.lanes|=s,Wn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ea(t){var e=nt(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);gt(s,e.memoizedState)||(Le=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function pg(){}function gg(t,e){var n=ne,r=nt(),i=e(),s=!gt(r.memoizedState,i);if(s&&(r.memoizedState=i,Le=!0),r=r.queue,pc(yg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,Xi(9,_g.bind(null,n,r,i,e),void 0,null),_e===null)throw Error(I(349));Bn&30||mg(n,e,i)}return i}function mg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ne.updateQueue,e===null?(e={lastEffect:null,stores:null},ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function _g(t,e,n,r){e.value=n,e.getSnapshot=r,vg(e)&&wg(t)}function yg(t,e,n){return n(function(){vg(e)&&wg(t)})}function vg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gt(t,n)}catch{return!0}}function wg(t){var e=Ft(t,1);e!==null&&ft(e,t,1,-1)}function ch(t){var e=_t();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:t},e.queue=t,t=t.dispatch=ww.bind(null,ne,t),[e.memoizedState,t]}function Xi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ne.updateQueue,e===null?(e={lastEffect:null,stores:null},ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Cg(){return nt().memoizedState}function to(t,e,n,r){var i=_t();ne.flags|=t,i.memoizedState=Xi(1|e,n,void 0,r===void 0?null:r)}function hl(t,e,n,r){var i=nt();r=r===void 0?null:r;var s=void 0;if(ce!==null){var o=ce.memoizedState;if(s=o.destroy,r!==null&&dc(r,o.deps)){i.memoizedState=Xi(e,n,s,r);return}}ne.flags|=t,i.memoizedState=Xi(1|e,n,s,r)}function dh(t,e){return to(8390656,8,t,e)}function pc(t,e){return hl(2048,8,t,e)}function Sg(t,e){return hl(4,2,t,e)}function Eg(t,e){return hl(4,4,t,e)}function Ig(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function kg(t,e,n){return n=n!=null?n.concat([t]):null,hl(4,4,Ig.bind(null,e,t),n)}function gc(){}function xg(t,e){var n=nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Tg(t,e){var n=nt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Rg(t,e,n){return Bn&21?(gt(n,e)||(n=Op(),ne.lanes|=n,Wn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Le=!0),t.memoizedState=n)}function yw(t,e){var n=V;V=n!==0&&4>n?n:4,t(!0);var r=Jl.transition;Jl.transition={};try{t(!1),e()}finally{V=n,Jl.transition=r}}function Ng(){return nt().memoizedState}function vw(t,e,n){var r=un(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Pg(t))Ag(e,n);else if(n=dg(t,e,n,r),n!==null){var i=Ne();ft(n,t,r,i),Dg(n,e,r)}}function ww(t,e,n){var r=un(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pg(t))Ag(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,gt(l,o)){var a=e.interleaved;a===null?(i.next=i,oc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=dg(t,e,i,r),n!==null&&(i=Ne(),ft(n,t,r,i),Dg(n,e,r))}}function Pg(t){var e=t.alternate;return t===ne||e!==null&&e===ne}function Ag(t,e){xi=No=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Dg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gu(t,n)}}var Po={readContext:tt,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},Cw={readContext:tt,useCallback:function(t,e){return _t().memoizedState=[t,e===void 0?null:e],t},useContext:tt,useEffect:dh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,to(4194308,4,Ig.bind(null,e,t),n)},useLayoutEffect:function(t,e){return to(4194308,4,t,e)},useInsertionEffect:function(t,e){return to(4,2,t,e)},useMemo:function(t,e){var n=_t();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=_t();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=vw.bind(null,ne,t),[r.memoizedState,t]},useRef:function(t){var e=_t();return t={current:t},e.memoizedState=t},useState:ch,useDebugValue:gc,useDeferredValue:function(t){return _t().memoizedState=t},useTransition:function(){var t=ch(!1),e=t[0];return t=yw.bind(null,t[1]),_t().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ne,i=_t();if(J){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),_e===null)throw Error(I(349));Bn&30||mg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,dh(yg.bind(null,r,s,t),[t]),r.flags|=2048,Xi(9,_g.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=_t(),e=_e.identifierPrefix;if(J){var n=Nt,r=Rt;n=(r&~(1<<32-ht(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=qi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_w++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Sw={readContext:tt,useCallback:xg,useContext:tt,useEffect:pc,useImperativeHandle:kg,useInsertionEffect:Sg,useLayoutEffect:Eg,useMemo:Tg,useReducer:Zl,useRef:Cg,useState:function(){return Zl(Yi)},useDebugValue:gc,useDeferredValue:function(t){var e=nt();return Rg(e,ce.memoizedState,t)},useTransition:function(){var t=Zl(Yi)[0],e=nt().memoizedState;return[t,e]},useMutableSource:pg,useSyncExternalStore:gg,useId:Ng,unstable_isNewReconciler:!1},Ew={readContext:tt,useCallback:xg,useContext:tt,useEffect:pc,useImperativeHandle:kg,useInsertionEffect:Sg,useLayoutEffect:Eg,useMemo:Tg,useReducer:ea,useRef:Cg,useState:function(){return ea(Yi)},useDebugValue:gc,useDeferredValue:function(t){var e=nt();return ce===null?e.memoizedState=t:Rg(e,ce.memoizedState,t)},useTransition:function(){var t=ea(Yi)[0],e=nt().memoizedState;return[t,e]},useMutableSource:pg,useSyncExternalStore:gg,useId:Ng,unstable_isNewReconciler:!1};function it(t,e){if(t&&t.defaultProps){e=re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Xa(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fl={isMounted:function(t){return(t=t._reactInternals)?Jn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ne(),i=un(t),s=Ot(r,i);s.payload=e,n!=null&&(s.callback=n),e=ln(t,s,i),e!==null&&(ft(e,t,i,r),Zs(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ne(),i=un(t),s=Ot(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ln(t,s,i),e!==null&&(ft(e,t,i,r),Zs(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ne(),r=un(t),i=Ot(n,r);i.tag=2,e!=null&&(i.callback=e),e=ln(t,i,r),e!==null&&(ft(e,t,r,n),Zs(e,t,r))}};function hh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Hi(n,r)||!Hi(i,s):!0}function Og(t,e,n){var r=!1,i=_n,s=e.contextType;return typeof s=="object"&&s!==null?s=tt(s):(i=je(e)?zn:xe.current,r=e.contextTypes,s=(r=r!=null)?Lr(t,i):_n),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function fh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&fl.enqueueReplaceState(e,e.state,null)}function Ja(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},lc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=tt(s):(s=je(e)?zn:xe.current,i.context=Lr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Xa(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&fl.enqueueReplaceState(i,i.state,null),To(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function jr(t,e){try{var n="",r=e;do n+=Xy(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ta(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Za(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Iw=typeof WeakMap=="function"?WeakMap:Map;function Lg(t,e,n){n=Ot(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Do||(Do=!0,uu=r),Za(t,e)},n}function Mg(t,e,n){n=Ot(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Za(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Za(t,e),typeof r!="function"&&(an===null?an=new Set([this]):an.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ph(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Iw;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=jw.bind(null,t,e,n),e.then(t,t))}function gh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function mh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ot(-1,1),e.tag=2,ln(n,e,1))),n.lanes|=1),t)}var kw=Ht.ReactCurrentOwner,Le=!1;function Re(t,e,n,r){e.child=t===null?cg(e,null,n,r):br(e,t.child,n,r)}function _h(t,e,n,r,i){n=n.render;var s=e.ref;return kr(e,i),r=hc(t,e,n,r,s,i),n=fc(),t!==null&&!Le?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jt(t,e,i)):(J&&n&&ec(e),e.flags|=1,Re(t,e,r,i),e.child)}function yh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ec(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,bg(t,e,s,r,i)):(t=so(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Hi,n(o,r)&&t.ref===e.ref)return jt(t,e,i)}return e.flags|=1,t=cn(s,r),t.ref=e.ref,t.return=e,e.child=t}function bg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Hi(s,r)&&t.ref===e.ref)if(Le=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Le=!0);else return e.lanes=t.lanes,jt(t,e,i)}return eu(t,e,n,r,i)}function Fg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(yr,We),We|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Q(yr,We),We|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Q(yr,We),We|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Q(yr,We),We|=r;return Re(t,e,i,n),e.child}function jg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function eu(t,e,n,r,i){var s=je(n)?zn:xe.current;return s=Lr(e,s),kr(e,i),n=hc(t,e,n,r,s,i),r=fc(),t!==null&&!Le?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jt(t,e,i)):(J&&r&&ec(e),e.flags|=1,Re(t,e,n,i),e.child)}function vh(t,e,n,r,i){if(je(n)){var s=!0;So(e)}else s=!1;if(kr(e,i),e.stateNode===null)no(t,e),Og(e,n,r),Ja(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=tt(u):(u=je(n)?zn:xe.current,u=Lr(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&fh(e,o,r,u),Qt=!1;var h=e.memoizedState;o.state=h,To(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Fe.current||Qt?(typeof c=="function"&&(Xa(e,n,c,r),a=e.memoizedState),(l=Qt||hh(e,n,l,r,h,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,hg(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:it(e.type,l),o.props=u,d=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=tt(a):(a=je(n)?zn:xe.current,a=Lr(e,a));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==a)&&fh(e,o,r,a),Qt=!1,h=e.memoizedState,o.state=h,To(e,r,o,i);var w=e.memoizedState;l!==d||h!==w||Fe.current||Qt?(typeof y=="function"&&(Xa(e,n,y,r),w=e.memoizedState),(u=Qt||hh(e,n,u,r,h,w,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return tu(t,e,n,r,s,i)}function tu(t,e,n,r,i,s){jg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ih(e,n,!1),jt(t,e,s);r=e.stateNode,kw.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=br(e,t.child,null,s),e.child=br(e,null,l,s)):Re(t,e,l,s),e.memoizedState=r.state,i&&ih(e,n,!0),e.child}function zg(t){var e=t.stateNode;e.pendingContext?rh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&rh(t,e.context,!1),ac(t,e.containerInfo)}function wh(t,e,n,r,i){return Mr(),nc(i),e.flags|=256,Re(t,e,n,r),e.child}var nu={dehydrated:null,treeContext:null,retryLane:0};function ru(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ug(t,e,n){var r=e.pendingProps,i=te.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Q(te,i&1),t===null)return qa(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ml(o,r,0,null),t=jn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ru(n),e.memoizedState=nu,t):mc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return xw(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=cn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=cn(l,s):(s=jn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ru(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=nu,r}return s=t.child,t=s.sibling,r=cn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function mc(t,e){return e=ml({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Us(t,e,n,r){return r!==null&&nc(r),br(e,t.child,null,n),t=mc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function xw(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ta(Error(I(422))),Us(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ml({mode:"visible",children:r.children},i,0,null),s=jn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&br(e,t.child,null,o),e.child.memoizedState=ru(o),e.memoizedState=nu,s);if(!(e.mode&1))return Us(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(I(419)),r=ta(s,r,void 0),Us(t,e,o,r)}if(l=(o&t.childLanes)!==0,Le||l){if(r=_e,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ft(t,i),ft(r,t,i,-1))}return Sc(),r=ta(Error(I(421))),Us(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=zw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,He=on(i.nextSibling),Ve=e,J=!0,ot=null,t!==null&&(Xe[Je++]=Rt,Xe[Je++]=Nt,Xe[Je++]=Un,Rt=t.id,Nt=t.overflow,Un=e),e=mc(e,r.children),e.flags|=4096,e)}function Ch(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ya(t.return,e,n)}function na(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Bg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Re(t,e,r.children,n),r=te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ch(t,n,e);else if(t.tag===19)Ch(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Q(te,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ro(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),na(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ro(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}na(e,!0,n,null,s);break;case"together":na(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function no(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function jt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Wn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=cn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Tw(t,e,n){switch(e.tag){case 3:zg(e),Mr();break;case 5:fg(e);break;case 1:je(e.type)&&So(e);break;case 4:ac(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Q(ko,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Q(te,te.current&1),e.flags|=128,null):n&e.child.childLanes?Ug(t,e,n):(Q(te,te.current&1),t=jt(t,e,n),t!==null?t.sibling:null);Q(te,te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Bg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(te,te.current),r)break;return null;case 22:case 23:return e.lanes=0,Fg(t,e,n)}return jt(t,e,n)}var Wg,iu,Hg,Vg;Wg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};iu=function(){};Hg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ln(wt.current);var s=null;switch(n){case"input":i=xa(t,i),r=xa(t,r),s=[];break;case"select":i=re({},i,{value:void 0}),r=re({},r,{value:void 0}),s=[];break;case"textarea":i=Na(t,i),r=Na(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=wo)}Aa(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(bi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(bi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&q("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Vg=function(t,e,n,r){n!==r&&(e.flags|=4)};function ui(t,e){if(!J)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ee(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Rw(t,e,n){var r=e.pendingProps;switch(tc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(e),null;case 1:return je(e.type)&&Co(),Ee(e),null;case 3:return r=e.stateNode,Fr(),X(Fe),X(xe),cc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(js(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ot!==null&&(hu(ot),ot=null))),iu(t,e),Ee(e),null;case 5:uc(e);var i=Ln(Qi.current);if(n=e.type,t!==null&&e.stateNode!=null)Hg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return Ee(e),null}if(t=Ln(wt.current),js(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[yt]=e,r[Gi]=s,t=(e.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(i=0;i<wi.length;i++)q(wi[i],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":Pd(r,s),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},q("invalid",r);break;case"textarea":Dd(r,s),q("invalid",r)}Aa(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Fs(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Fs(r.textContent,l,t),i=["children",""+l]):bi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&q("scroll",r)}switch(n){case"input":Ns(r),Ad(r,s,!0);break;case"textarea":Ns(r),Od(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=wo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=yp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[yt]=e,t[Gi]=r,Wg(t,e,!1,!1),e.stateNode=t;e:{switch(o=Da(n,r),n){case"dialog":q("cancel",t),q("close",t),i=r;break;case"iframe":case"object":case"embed":q("load",t),i=r;break;case"video":case"audio":for(i=0;i<wi.length;i++)q(wi[i],t);i=r;break;case"source":q("error",t),i=r;break;case"img":case"image":case"link":q("error",t),q("load",t),i=r;break;case"details":q("toggle",t),i=r;break;case"input":Pd(t,r),i=xa(t,r),q("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=re({},r,{value:void 0}),q("invalid",t);break;case"textarea":Dd(t,r),i=Na(t,r),q("invalid",t);break;default:i=r}Aa(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Cp(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&vp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Fi(t,a):typeof a=="number"&&Fi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&q("scroll",t):a!=null&&Uu(t,s,a,o))}switch(n){case"input":Ns(t),Ad(t,r,!1);break;case"textarea":Ns(t),Od(t);break;case"option":r.value!=null&&t.setAttribute("value",""+mn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Cr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Cr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=wo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ee(e),null;case 6:if(t&&e.stateNode!=null)Vg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=Ln(Qi.current),Ln(wt.current),js(e)){if(r=e.stateNode,n=e.memoizedProps,r[yt]=e,(s=r.nodeValue!==n)&&(t=Ve,t!==null))switch(t.tag){case 3:Fs(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Fs(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yt]=e,e.stateNode=r}return Ee(e),null;case 13:if(X(te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(J&&He!==null&&e.mode&1&&!(e.flags&128))ag(),Mr(),e.flags|=98560,s=!1;else if(s=js(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[yt]=e}else Mr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ee(e),s=!1}else ot!==null&&(hu(ot),ot=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||te.current&1?he===0&&(he=3):Sc())),e.updateQueue!==null&&(e.flags|=4),Ee(e),null);case 4:return Fr(),iu(t,e),t===null&&Vi(e.stateNode.containerInfo),Ee(e),null;case 10:return sc(e.type._context),Ee(e),null;case 17:return je(e.type)&&Co(),Ee(e),null;case 19:if(X(te),s=e.memoizedState,s===null)return Ee(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ui(s,!1);else{if(he!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ro(t),o!==null){for(e.flags|=128,ui(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Q(te,te.current&1|2),e.child}t=t.sibling}s.tail!==null&&le()>zr&&(e.flags|=128,r=!0,ui(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ro(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ui(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!J)return Ee(e),null}else 2*le()-s.renderingStartTime>zr&&n!==1073741824&&(e.flags|=128,r=!0,ui(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=le(),e.sibling=null,n=te.current,Q(te,r?n&1|2:n&1),e):(Ee(e),null);case 22:case 23:return Cc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?We&1073741824&&(Ee(e),e.subtreeFlags&6&&(e.flags|=8192)):Ee(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function Nw(t,e){switch(tc(e),e.tag){case 1:return je(e.type)&&Co(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Fr(),X(Fe),X(xe),cc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return uc(e),null;case 13:if(X(te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));Mr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return X(te),null;case 4:return Fr(),null;case 10:return sc(e.type._context),null;case 22:case 23:return Cc(),null;case 24:return null;default:return null}}var Bs=!1,Ie=!1,Pw=typeof WeakSet=="function"?WeakSet:Set,D=null;function _r(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){se(t,e,r)}else n.current=null}function su(t,e,n){try{n()}catch(r){se(t,e,r)}}var Sh=!1;function Aw(t,e){if(Wa=_o,t=qp(),Zu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(y=d.firstChild)!==null;)h=d,d=y;for(;;){if(d===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++c===r&&(a=o),(y=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=y}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ha={focusedElem:t,selectionRange:n},_o=!1,D=e;D!==null;)if(e=D,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,D=t;else for(;D!==null;){e=D;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var C=w.memoizedProps,O=w.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?C:it(e.type,C),O);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(S){se(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,D=t;break}D=e.return}return w=Sh,Sh=!1,w}function Ti(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&su(e,n,s)}i=i.next}while(i!==r)}}function pl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ou(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function $g(t){var e=t.alternate;e!==null&&(t.alternate=null,$g(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[yt],delete e[Gi],delete e[Ga],delete e[fw],delete e[pw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Gg(t){return t.tag===5||t.tag===3||t.tag===4}function Eh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Gg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wo));else if(r!==4&&(t=t.child,t!==null))for(lu(t,e,n),t=t.sibling;t!==null;)lu(t,e,n),t=t.sibling}function au(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(au(t,e,n),t=t.sibling;t!==null;)au(t,e,n),t=t.sibling}var ye=null,st=!1;function $t(t,e,n){for(n=n.child;n!==null;)Kg(t,e,n),n=n.sibling}function Kg(t,e,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(ol,n)}catch{}switch(n.tag){case 5:Ie||_r(n,e);case 6:var r=ye,i=st;ye=null,$t(t,e,n),ye=r,st=i,ye!==null&&(st?(t=ye,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(st?(t=ye,n=n.stateNode,t.nodeType===8?ql(t.parentNode,n):t.nodeType===1&&ql(t,n),Bi(t)):ql(ye,n.stateNode));break;case 4:r=ye,i=st,ye=n.stateNode.containerInfo,st=!0,$t(t,e,n),ye=r,st=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&su(n,e,o),i=i.next}while(i!==r)}$t(t,e,n);break;case 1:if(!Ie&&(_r(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){se(n,e,l)}$t(t,e,n);break;case 21:$t(t,e,n);break;case 22:n.mode&1?(Ie=(r=Ie)||n.memoizedState!==null,$t(t,e,n),Ie=r):$t(t,e,n);break;default:$t(t,e,n)}}function Ih(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Pw),e.forEach(function(r){var i=Uw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function rt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ye=l.stateNode,st=!1;break e;case 3:ye=l.stateNode.containerInfo,st=!0;break e;case 4:ye=l.stateNode.containerInfo,st=!0;break e}l=l.return}if(ye===null)throw Error(I(160));Kg(s,o,i),ye=null,st=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){se(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Qg(e,t),e=e.sibling}function Qg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(rt(e,t),mt(t),r&4){try{Ti(3,t,t.return),pl(3,t)}catch(C){se(t,t.return,C)}try{Ti(5,t,t.return)}catch(C){se(t,t.return,C)}}break;case 1:rt(e,t),mt(t),r&512&&n!==null&&_r(n,n.return);break;case 5:if(rt(e,t),mt(t),r&512&&n!==null&&_r(n,n.return),t.flags&32){var i=t.stateNode;try{Fi(i,"")}catch(C){se(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&mp(i,s),Da(l,o);var u=Da(l,s);for(o=0;o<a.length;o+=2){var c=a[o],d=a[o+1];c==="style"?Cp(i,d):c==="dangerouslySetInnerHTML"?vp(i,d):c==="children"?Fi(i,d):Uu(i,c,d,u)}switch(l){case"input":Ta(i,s);break;case"textarea":_p(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Cr(i,!!s.multiple,y,!1):h!==!!s.multiple&&(s.defaultValue!=null?Cr(i,!!s.multiple,s.defaultValue,!0):Cr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Gi]=s}catch(C){se(t,t.return,C)}}break;case 6:if(rt(e,t),mt(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(C){se(t,t.return,C)}}break;case 3:if(rt(e,t),mt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bi(e.containerInfo)}catch(C){se(t,t.return,C)}break;case 4:rt(e,t),mt(t);break;case 13:rt(e,t),mt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(vc=le())),r&4&&Ih(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ie=(u=Ie)||c,rt(e,t),Ie=u):rt(e,t),mt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(D=t,c=t.child;c!==null;){for(d=D=c;D!==null;){switch(h=D,y=h.child,h.tag){case 0:case 11:case 14:case 15:Ti(4,h,h.return);break;case 1:_r(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(C){se(r,n,C)}}break;case 5:_r(h,h.return);break;case 22:if(h.memoizedState!==null){xh(d);continue}}y!==null?(y.return=h,D=y):xh(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=wp("display",o))}catch(C){se(t,t.return,C)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(C){se(t,t.return,C)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:rt(e,t),mt(t),r&4&&Ih(t);break;case 21:break;default:rt(e,t),mt(t)}}function mt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Gg(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fi(i,""),r.flags&=-33);var s=Eh(t);au(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Eh(t);lu(t,l,o);break;default:throw Error(I(161))}}catch(a){se(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Dw(t,e,n){D=t,qg(t)}function qg(t,e,n){for(var r=(t.mode&1)!==0;D!==null;){var i=D,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Bs;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ie;l=Bs;var u=Ie;if(Bs=o,(Ie=a)&&!u)for(D=i;D!==null;)o=D,a=o.child,o.tag===22&&o.memoizedState!==null?Th(i):a!==null?(a.return=o,D=a):Th(i);for(;s!==null;)D=s,qg(s),s=s.sibling;D=i,Bs=l,Ie=u}kh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,D=s):kh(t)}}function kh(t){for(;D!==null;){var e=D;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ie||pl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ie)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:it(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&uh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}uh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Bi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Ie||e.flags&512&&ou(e)}catch(h){se(e,e.return,h)}}if(e===t){D=null;break}if(n=e.sibling,n!==null){n.return=e.return,D=n;break}D=e.return}}function xh(t){for(;D!==null;){var e=D;if(e===t){D=null;break}var n=e.sibling;if(n!==null){n.return=e.return,D=n;break}D=e.return}}function Th(t){for(;D!==null;){var e=D;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{pl(4,e)}catch(a){se(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){se(e,i,a)}}var s=e.return;try{ou(e)}catch(a){se(e,s,a)}break;case 5:var o=e.return;try{ou(e)}catch(a){se(e,o,a)}}}catch(a){se(e,e.return,a)}if(e===t){D=null;break}var l=e.sibling;if(l!==null){l.return=e.return,D=l;break}D=e.return}}var Ow=Math.ceil,Ao=Ht.ReactCurrentDispatcher,_c=Ht.ReactCurrentOwner,et=Ht.ReactCurrentBatchConfig,W=0,_e=null,ae=null,we=0,We=0,yr=Cn(0),he=0,Ji=null,Wn=0,gl=0,yc=0,Ri=null,Oe=null,vc=0,zr=1/0,kt=null,Do=!1,uu=null,an=null,Ws=!1,tn=null,Oo=0,Ni=0,cu=null,ro=-1,io=0;function Ne(){return W&6?le():ro!==-1?ro:ro=le()}function un(t){return t.mode&1?W&2&&we!==0?we&-we:mw.transition!==null?(io===0&&(io=Op()),io):(t=V,t!==0||(t=window.event,t=t===void 0?16:Up(t.type)),t):1}function ft(t,e,n,r){if(50<Ni)throw Ni=0,cu=null,Error(I(185));us(t,n,r),(!(W&2)||t!==_e)&&(t===_e&&(!(W&2)&&(gl|=n),he===4&&Yt(t,we)),ze(t,r),n===1&&W===0&&!(e.mode&1)&&(zr=le()+500,dl&&Sn()))}function ze(t,e){var n=t.callbackNode;mv(t,e);var r=mo(t,t===_e?we:0);if(r===0)n!==null&&bd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&bd(n),e===1)t.tag===0?gw(Rh.bind(null,t)):sg(Rh.bind(null,t)),dw(function(){!(W&6)&&Sn()}),n=null;else{switch(Lp(r)){case 1:n=$u;break;case 4:n=Ap;break;case 16:n=go;break;case 536870912:n=Dp;break;default:n=go}n=rm(n,Yg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Yg(t,e){if(ro=-1,io=0,W&6)throw Error(I(327));var n=t.callbackNode;if(xr()&&t.callbackNode!==n)return null;var r=mo(t,t===_e?we:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Lo(t,r);else{e=r;var i=W;W|=2;var s=Jg();(_e!==t||we!==e)&&(kt=null,zr=le()+500,Fn(t,e));do try{bw();break}catch(l){Xg(t,l)}while(!0);ic(),Ao.current=s,W=i,ae!==null?e=0:(_e=null,we=0,e=he)}if(e!==0){if(e===2&&(i=Fa(t),i!==0&&(r=i,e=du(t,i))),e===1)throw n=Ji,Fn(t,0),Yt(t,r),ze(t,le()),n;if(e===6)Yt(t,r);else{if(i=t.current.alternate,!(r&30)&&!Lw(i)&&(e=Lo(t,r),e===2&&(s=Fa(t),s!==0&&(r=s,e=du(t,s))),e===1))throw n=Ji,Fn(t,0),Yt(t,r),ze(t,le()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:Rn(t,Oe,kt);break;case 3:if(Yt(t,r),(r&130023424)===r&&(e=vc+500-le(),10<e)){if(mo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ne(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=$a(Rn.bind(null,t,Oe,kt),e);break}Rn(t,Oe,kt);break;case 4:if(Yt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ht(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ow(r/1960))-r,10<r){t.timeoutHandle=$a(Rn.bind(null,t,Oe,kt),r);break}Rn(t,Oe,kt);break;case 5:Rn(t,Oe,kt);break;default:throw Error(I(329))}}}return ze(t,le()),t.callbackNode===n?Yg.bind(null,t):null}function du(t,e){var n=Ri;return t.current.memoizedState.isDehydrated&&(Fn(t,e).flags|=256),t=Lo(t,e),t!==2&&(e=Oe,Oe=n,e!==null&&hu(e)),t}function hu(t){Oe===null?Oe=t:Oe.push.apply(Oe,t)}function Lw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!gt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yt(t,e){for(e&=~yc,e&=~gl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ht(e),r=1<<n;t[n]=-1,e&=~r}}function Rh(t){if(W&6)throw Error(I(327));xr();var e=mo(t,0);if(!(e&1))return ze(t,le()),null;var n=Lo(t,e);if(t.tag!==0&&n===2){var r=Fa(t);r!==0&&(e=r,n=du(t,r))}if(n===1)throw n=Ji,Fn(t,0),Yt(t,e),ze(t,le()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Rn(t,Oe,kt),ze(t,le()),null}function wc(t,e){var n=W;W|=1;try{return t(e)}finally{W=n,W===0&&(zr=le()+500,dl&&Sn())}}function Hn(t){tn!==null&&tn.tag===0&&!(W&6)&&xr();var e=W;W|=1;var n=et.transition,r=V;try{if(et.transition=null,V=1,t)return t()}finally{V=r,et.transition=n,W=e,!(W&6)&&Sn()}}function Cc(){We=yr.current,X(yr)}function Fn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cw(n)),ae!==null)for(n=ae.return;n!==null;){var r=n;switch(tc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Co();break;case 3:Fr(),X(Fe),X(xe),cc();break;case 5:uc(r);break;case 4:Fr();break;case 13:X(te);break;case 19:X(te);break;case 10:sc(r.type._context);break;case 22:case 23:Cc()}n=n.return}if(_e=t,ae=t=cn(t.current,null),we=We=e,he=0,Ji=null,yc=gl=Wn=0,Oe=Ri=null,On!==null){for(e=0;e<On.length;e++)if(n=On[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}On=null}return t}function Xg(t,e){do{var n=ae;try{if(ic(),eo.current=Po,No){for(var r=ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}No=!1}if(Bn=0,pe=ce=ne=null,xi=!1,qi=0,_c.current=null,n===null||n.return===null){he=1,Ji=e,ae=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=we,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=gh(o);if(y!==null){y.flags&=-257,mh(y,o,l,s,e),y.mode&1&&ph(s,u,e),e=y,a=u;var w=e.updateQueue;if(w===null){var C=new Set;C.add(a),e.updateQueue=C}else w.add(a);break e}else{if(!(e&1)){ph(s,u,e),Sc();break e}a=Error(I(426))}}else if(J&&l.mode&1){var O=gh(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),mh(O,o,l,s,e),nc(jr(a,l));break e}}s=a=jr(a,l),he!==4&&(he=2),Ri===null?Ri=[s]:Ri.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=Lg(s,a,e);ah(s,g);break e;case 1:l=a;var p=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(an===null||!an.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Mg(s,l,e);ah(s,S);break e}}s=s.return}while(s!==null)}em(n)}catch(R){e=R,ae===n&&n!==null&&(ae=n=n.return);continue}break}while(!0)}function Jg(){var t=Ao.current;return Ao.current=Po,t===null?Po:t}function Sc(){(he===0||he===3||he===2)&&(he=4),_e===null||!(Wn&268435455)&&!(gl&268435455)||Yt(_e,we)}function Lo(t,e){var n=W;W|=2;var r=Jg();(_e!==t||we!==e)&&(kt=null,Fn(t,e));do try{Mw();break}catch(i){Xg(t,i)}while(!0);if(ic(),W=n,Ao.current=r,ae!==null)throw Error(I(261));return _e=null,we=0,he}function Mw(){for(;ae!==null;)Zg(ae)}function bw(){for(;ae!==null&&!lv();)Zg(ae)}function Zg(t){var e=nm(t.alternate,t,We);t.memoizedProps=t.pendingProps,e===null?em(t):ae=e,_c.current=null}function em(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Nw(n,e),n!==null){n.flags&=32767,ae=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{he=6,ae=null;return}}else if(n=Rw(n,e,We),n!==null){ae=n;return}if(e=e.sibling,e!==null){ae=e;return}ae=e=t}while(e!==null);he===0&&(he=5)}function Rn(t,e,n){var r=V,i=et.transition;try{et.transition=null,V=1,Fw(t,e,n,r)}finally{et.transition=i,V=r}return null}function Fw(t,e,n,r){do xr();while(tn!==null);if(W&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_v(t,s),t===_e&&(ae=_e=null,we=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ws||(Ws=!0,rm(go,function(){return xr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=et.transition,et.transition=null;var o=V;V=1;var l=W;W|=4,_c.current=null,Aw(t,n),Qg(n,t),rw(Ha),_o=!!Wa,Ha=Wa=null,t.current=n,Dw(n),av(),W=l,V=o,et.transition=s}else t.current=n;if(Ws&&(Ws=!1,tn=t,Oo=i),s=t.pendingLanes,s===0&&(an=null),dv(n.stateNode),ze(t,le()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Do)throw Do=!1,t=uu,uu=null,t;return Oo&1&&t.tag!==0&&xr(),s=t.pendingLanes,s&1?t===cu?Ni++:(Ni=0,cu=t):Ni=0,Sn(),null}function xr(){if(tn!==null){var t=Lp(Oo),e=et.transition,n=V;try{if(et.transition=null,V=16>t?16:t,tn===null)var r=!1;else{if(t=tn,tn=null,Oo=0,W&6)throw Error(I(331));var i=W;for(W|=4,D=t.current;D!==null;){var s=D,o=s.child;if(D.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(D=u;D!==null;){var c=D;switch(c.tag){case 0:case 11:case 15:Ti(8,c,s)}var d=c.child;if(d!==null)d.return=c,D=d;else for(;D!==null;){c=D;var h=c.sibling,y=c.return;if($g(c),c===u){D=null;break}if(h!==null){h.return=y,D=h;break}D=y}}}var w=s.alternate;if(w!==null){var C=w.child;if(C!==null){w.child=null;do{var O=C.sibling;C.sibling=null,C=O}while(C!==null)}}D=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,D=o;else e:for(;D!==null;){if(s=D,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ti(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,D=g;break e}D=s.return}}var p=t.current;for(D=p;D!==null;){o=D;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,D=_;else e:for(o=p;D!==null;){if(l=D,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:pl(9,l)}}catch(R){se(l,l.return,R)}if(l===o){D=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,D=S;break e}D=l.return}}if(W=i,Sn(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(ol,t)}catch{}r=!0}return r}finally{V=n,et.transition=e}}return!1}function Nh(t,e,n){e=jr(n,e),e=Lg(t,e,1),t=ln(t,e,1),e=Ne(),t!==null&&(us(t,1,e),ze(t,e))}function se(t,e,n){if(t.tag===3)Nh(t,t,n);else for(;e!==null;){if(e.tag===3){Nh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(an===null||!an.has(r))){t=jr(n,t),t=Mg(e,t,1),e=ln(e,t,1),t=Ne(),e!==null&&(us(e,1,t),ze(e,t));break}}e=e.return}}function jw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ne(),t.pingedLanes|=t.suspendedLanes&n,_e===t&&(we&n)===n&&(he===4||he===3&&(we&130023424)===we&&500>le()-vc?Fn(t,0):yc|=n),ze(t,e)}function tm(t,e){e===0&&(t.mode&1?(e=Ds,Ds<<=1,!(Ds&130023424)&&(Ds=4194304)):e=1);var n=Ne();t=Ft(t,e),t!==null&&(us(t,e,n),ze(t,n))}function zw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),tm(t,n)}function Uw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),tm(t,n)}var nm;nm=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Fe.current)Le=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Le=!1,Tw(t,e,n);Le=!!(t.flags&131072)}else Le=!1,J&&e.flags&1048576&&og(e,Io,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;no(t,e),t=e.pendingProps;var i=Lr(e,xe.current);kr(e,n),i=hc(null,e,r,t,i,n);var s=fc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,je(r)?(s=!0,So(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,lc(e),i.updater=fl,e.stateNode=i,i._reactInternals=e,Ja(e,r,t,n),e=tu(null,e,r,!0,s,n)):(e.tag=0,J&&s&&ec(e),Re(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(no(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Ww(r),t=it(r,t),i){case 0:e=eu(null,e,r,t,n);break e;case 1:e=vh(null,e,r,t,n);break e;case 11:e=_h(null,e,r,t,n);break e;case 14:e=yh(null,e,r,it(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),eu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),vh(t,e,r,i,n);case 3:e:{if(zg(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,hg(t,e),To(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=jr(Error(I(423)),e),e=wh(t,e,r,n,i);break e}else if(r!==i){i=jr(Error(I(424)),e),e=wh(t,e,r,n,i);break e}else for(He=on(e.stateNode.containerInfo.firstChild),Ve=e,J=!0,ot=null,n=cg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mr(),r===i){e=jt(t,e,n);break e}Re(t,e,r,n)}e=e.child}return e;case 5:return fg(e),t===null&&qa(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Va(r,i)?o=null:s!==null&&Va(r,s)&&(e.flags|=32),jg(t,e),Re(t,e,o,n),e.child;case 6:return t===null&&qa(e),null;case 13:return Ug(t,e,n);case 4:return ac(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=br(e,null,r,n):Re(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),_h(t,e,r,i,n);case 7:return Re(t,e,e.pendingProps,n),e.child;case 8:return Re(t,e,e.pendingProps.children,n),e.child;case 12:return Re(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Q(ko,r._currentValue),r._currentValue=o,s!==null)if(gt(s.value,o)){if(s.children===i.children&&!Fe.current){e=jt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Ot(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ya(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ya(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Re(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,kr(e,n),i=tt(i),r=r(i),e.flags|=1,Re(t,e,r,n),e.child;case 14:return r=e.type,i=it(r,e.pendingProps),i=it(r.type,i),yh(t,e,r,i,n);case 15:return bg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:it(r,i),no(t,e),e.tag=1,je(r)?(t=!0,So(e)):t=!1,kr(e,n),Og(e,r,i),Ja(e,r,i,n),tu(null,e,r,!0,t,n);case 19:return Bg(t,e,n);case 22:return Fg(t,e,n)}throw Error(I(156,e.tag))};function rm(t,e){return Pp(t,e)}function Bw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(t,e,n,r){return new Bw(t,e,n,r)}function Ec(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ww(t){if(typeof t=="function")return Ec(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wu)return 11;if(t===Hu)return 14}return 2}function cn(t,e){var n=t.alternate;return n===null?(n=Ze(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function so(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ec(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ar:return jn(n.children,i,s,e);case Bu:o=8,i|=8;break;case Sa:return t=Ze(12,n,e,i|2),t.elementType=Sa,t.lanes=s,t;case Ea:return t=Ze(13,n,e,i),t.elementType=Ea,t.lanes=s,t;case Ia:return t=Ze(19,n,e,i),t.elementType=Ia,t.lanes=s,t;case fp:return ml(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case dp:o=10;break e;case hp:o=9;break e;case Wu:o=11;break e;case Hu:o=14;break e;case Kt:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=Ze(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function jn(t,e,n,r){return t=Ze(7,t,r,e),t.lanes=n,t}function ml(t,e,n,r){return t=Ze(22,t,r,e),t.elementType=fp,t.lanes=n,t.stateNode={isHidden:!1},t}function ra(t,e,n){return t=Ze(6,t,null,e),t.lanes=n,t}function ia(t,e,n){return e=Ze(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Hw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jl(0),this.expirationTimes=jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ic(t,e,n,r,i,s,o,l,a){return t=new Hw(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ze(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lc(s),t}function Vw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:lr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function im(t){if(!t)return _n;t=t._reactInternals;e:{if(Jn(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(je(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(je(n))return ig(t,n,e)}return e}function sm(t,e,n,r,i,s,o,l,a){return t=Ic(n,r,!0,t,i,s,o,l,a),t.context=im(null),n=t.current,r=Ne(),i=un(n),s=Ot(r,i),s.callback=e??null,ln(n,s,i),t.current.lanes=i,us(t,i,r),ze(t,r),t}function _l(t,e,n,r){var i=e.current,s=Ne(),o=un(i);return n=im(n),e.context===null?e.context=n:e.pendingContext=n,e=Ot(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ln(i,e,o),t!==null&&(ft(t,i,o,s),Zs(t,i,o)),o}function Mo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ph(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function kc(t,e){Ph(t,e),(t=t.alternate)&&Ph(t,e)}function $w(){return null}var om=typeof reportError=="function"?reportError:function(t){console.error(t)};function xc(t){this._internalRoot=t}yl.prototype.render=xc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));_l(t,e,null,null)};yl.prototype.unmount=xc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Hn(function(){_l(null,t,null,null)}),e[bt]=null}};function yl(t){this._internalRoot=t}yl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Fp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qt.length&&e!==0&&e<qt[n].priority;n++);qt.splice(n,0,t),n===0&&zp(t)}};function Tc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ah(){}function Gw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Mo(o);s.call(u)}}var o=sm(e,r,t,0,null,!1,!1,"",Ah);return t._reactRootContainer=o,t[bt]=o.current,Vi(t.nodeType===8?t.parentNode:t),Hn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Mo(a);l.call(u)}}var a=Ic(t,0,!1,null,null,!1,!1,"",Ah);return t._reactRootContainer=a,t[bt]=a.current,Vi(t.nodeType===8?t.parentNode:t),Hn(function(){_l(e,a,n,r)}),a}function wl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Mo(o);l.call(a)}}_l(e,o,t,i)}else o=Gw(n,e,t,i,r);return Mo(o)}Mp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=vi(e.pendingLanes);n!==0&&(Gu(e,n|1),ze(e,le()),!(W&6)&&(zr=le()+500,Sn()))}break;case 13:Hn(function(){var r=Ft(t,1);if(r!==null){var i=Ne();ft(r,t,1,i)}}),kc(t,1)}};Ku=function(t){if(t.tag===13){var e=Ft(t,134217728);if(e!==null){var n=Ne();ft(e,t,134217728,n)}kc(t,134217728)}};bp=function(t){if(t.tag===13){var e=un(t),n=Ft(t,e);if(n!==null){var r=Ne();ft(n,t,e,r)}kc(t,e)}};Fp=function(){return V};jp=function(t,e){var n=V;try{return V=t,e()}finally{V=n}};La=function(t,e,n){switch(e){case"input":if(Ta(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=cl(r);if(!i)throw Error(I(90));gp(r),Ta(r,i)}}}break;case"textarea":_p(t,n);break;case"select":e=n.value,e!=null&&Cr(t,!!n.multiple,e,!1)}};Ip=wc;kp=Hn;var Kw={usingClientEntryPoint:!1,Events:[ds,hr,cl,Sp,Ep,wc]},ci={findFiberByHostInstance:Dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qw={bundleType:ci.bundleType,version:ci.version,rendererPackageName:ci.rendererPackageName,rendererConfig:ci.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Rp(t),t===null?null:t.stateNode},findFiberByHostInstance:ci.findFiberByHostInstance||$w,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hs.isDisabled&&Hs.supportsFiber)try{ol=Hs.inject(Qw),vt=Hs}catch{}}Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kw;Ge.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tc(e))throw Error(I(200));return Vw(t,e,null,n)};Ge.createRoot=function(t,e){if(!Tc(t))throw Error(I(299));var n=!1,r="",i=om;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ic(t,1,!1,null,null,n,!1,r,i),t[bt]=e.current,Vi(t.nodeType===8?t.parentNode:t),new xc(e)};Ge.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=Rp(e),t=t===null?null:t.stateNode,t};Ge.flushSync=function(t){return Hn(t)};Ge.hydrate=function(t,e,n){if(!vl(e))throw Error(I(200));return wl(null,t,e,!0,n)};Ge.hydrateRoot=function(t,e,n){if(!Tc(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=om;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=sm(e,null,t,1,n??null,i,!1,s,o),t[bt]=e.current,Vi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new yl(e)};Ge.render=function(t,e,n){if(!vl(e))throw Error(I(200));return wl(null,t,e,!1,n)};Ge.unmountComponentAtNode=function(t){if(!vl(t))throw Error(I(40));return t._reactRootContainer?(Hn(function(){wl(null,null,t,!1,function(){t._reactRootContainer=null,t[bt]=null})}),!0):!1};Ge.unstable_batchedUpdates=wc;Ge.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!vl(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return wl(t,e,n,!1,r)};Ge.version="18.3.1-next-f1338f8080-20240426";function lm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lm)}catch(t){console.error(t)}}lm(),lp.exports=Ge;var qw=lp.exports,Dh=qw;wa.createRoot=Dh.createRoot,wa.hydrateRoot=Dh.hydrateRoot;const Yw=()=>{};var Oh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=function(t,e){if(!t)throw qr(e)},qr=function(t){return new Error("Firebase Database ("+am.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Xw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Rc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=s>>2,d=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,y=u&63;a||(y=64,o||(h=64)),r.push(n[c],n[d],n[h],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(um(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Xw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||d==null)throw new Jw;const h=s<<2|l>>4;if(r.push(h),u!==64){const y=l<<4&240|u>>2;if(r.push(y),d!==64){const w=u<<6&192|d;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Jw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cm=function(t){const e=um(t);return Rc.encodeByteArray(e,!0)},bo=function(t){return cm(t).replace(/\./g,"")},Fo=function(t){try{return Rc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(t){return dm(void 0,t)}function dm(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!e0(n)||(t[n]=dm(t[n],e[n]));return t}function e0(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0=()=>t0().__FIREBASE_DEFAULTS__,r0=()=>{if(typeof process>"u"||typeof Oh>"u")return;const t=Oh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},i0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Fo(t[1]);return e&&JSON.parse(e)},Nc=()=>{try{return Yw()||n0()||r0()||i0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},hm=t=>{var e,n;return(n=(e=Nc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},s0=t=>{const e=hm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},fm=()=>{var t;return(t=Nc())==null?void 0:t.config},pm=t=>{var e;return(e=Nc())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[bo(JSON.stringify(n)),bo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function l0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function a0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function u0(){const t=Pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function c0(){return am.NODE_ADMIN===!0}function d0(){try{return typeof indexedDB=="object"}catch{return!1}}function h0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0="FirebaseError";class En extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=f0,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fs.prototype.create)}}class fs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?p0(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new En(i,l,r)}}function p0(t,e){return t.replace(g0,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const g0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t){return JSON.parse(t)}function me(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Zi(Fo(s[0])||""),n=Zi(Fo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},m0=function(t){const e=mm(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},_0=function(t){const e=mm(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ur(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function fu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function jo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Vn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Lh(s)&&Lh(o)){if(!Vn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Lh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=l^s&(o^l),c=1518500249):(u=s^o^l,c=1859775393):d<60?(u=s&o|l&(s|o),c=2400959708):(u=s^o^l,c=3395469782);const h=(i<<5|i>>>27)+u+a+c+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function v0(t,e){const n=new w0(t,e);return n.subscribe.bind(n)}class w0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");C0(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=sa),i.error===void 0&&(i.error=sa),i.complete===void 0&&(i.complete=sa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function C0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sa(){}function Ac(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,k(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Sl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function _m(t){return(await fetch(t,{credentials:"include"})).ok}class $n{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Cl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(k0(e))try{this.getOrInitializeService({instanceIdentifier:Nn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Nn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nn){return this.instances.has(e)}getOptions(e=Nn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:I0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Nn){return this.component?this.component.multipleInstances?e:Nn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function I0(t){return t===Nn?void 0:t}function k0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new E0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})($||($={}));const T0={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},R0=$.INFO,N0={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},P0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=N0[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dc{constructor(e){this.name=e,this._logLevel=R0,this._logHandler=P0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?T0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const A0=(t,e)=>e.some(n=>t instanceof n);let Mh,bh;function D0(){return Mh||(Mh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function O0(){return bh||(bh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ym=new WeakMap,pu=new WeakMap,vm=new WeakMap,oa=new WeakMap,Oc=new WeakMap;function L0(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(dn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ym.set(n,t)}).catch(()=>{}),Oc.set(e,t),e}function M0(t){if(pu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});pu.set(t,e)}let gu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function b0(t){gu=t(gu)}function F0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(la(this),e,...n);return vm.set(r,e.sort?e.sort():[e]),dn(r)}:O0().includes(t)?function(...e){return t.apply(la(this),e),dn(ym.get(this))}:function(...e){return dn(t.apply(la(this),e))}}function j0(t){return typeof t=="function"?F0(t):(t instanceof IDBTransaction&&M0(t),A0(t,D0())?new Proxy(t,gu):t)}function dn(t){if(t instanceof IDBRequest)return L0(t);if(oa.has(t))return oa.get(t);const e=j0(t);return e!==t&&(oa.set(t,e),Oc.set(e,t)),e}const la=t=>Oc.get(t);function z0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=dn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(dn(o.result),a.oldVersion,a.newVersion,dn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const U0=["get","getKey","getAll","getAllKeys","count"],B0=["put","add","delete","clear"],aa=new Map;function Fh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(aa.get(e))return aa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=B0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||U0.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return aa.set(e,s),s}b0(t=>({...t,get:(e,n,r)=>Fh(e,n)||t.get(e,n,r),has:(e,n)=>!!Fh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(H0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function H0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mu="@firebase/app",jh="0.14.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt=new Dc("@firebase/app"),V0="@firebase/app-compat",$0="@firebase/analytics-compat",G0="@firebase/analytics",K0="@firebase/app-check-compat",Q0="@firebase/app-check",q0="@firebase/auth",Y0="@firebase/auth-compat",X0="@firebase/database",J0="@firebase/data-connect",Z0="@firebase/database-compat",eC="@firebase/functions",tC="@firebase/functions-compat",nC="@firebase/installations",rC="@firebase/installations-compat",iC="@firebase/messaging",sC="@firebase/messaging-compat",oC="@firebase/performance",lC="@firebase/performance-compat",aC="@firebase/remote-config",uC="@firebase/remote-config-compat",cC="@firebase/storage",dC="@firebase/storage-compat",hC="@firebase/firestore",fC="@firebase/ai",pC="@firebase/firestore-compat",gC="firebase",mC="12.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u="[DEFAULT]",_C={[mu]:"fire-core",[V0]:"fire-core-compat",[G0]:"fire-analytics",[$0]:"fire-analytics-compat",[Q0]:"fire-app-check",[K0]:"fire-app-check-compat",[q0]:"fire-auth",[Y0]:"fire-auth-compat",[X0]:"fire-rtdb",[J0]:"fire-data-connect",[Z0]:"fire-rtdb-compat",[eC]:"fire-fn",[tC]:"fire-fn-compat",[nC]:"fire-iid",[rC]:"fire-iid-compat",[iC]:"fire-fcm",[sC]:"fire-fcm-compat",[oC]:"fire-perf",[lC]:"fire-perf-compat",[aC]:"fire-rc",[uC]:"fire-rc-compat",[cC]:"fire-gcs",[dC]:"fire-gcs-compat",[hC]:"fire-fst",[pC]:"fire-fst-compat",[fC]:"fire-vertex","fire-js":"fire-js",[gC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=new Map,yC=new Map,yu=new Map;function zh(t,e){try{t.container.addComponent(e)}catch(n){zt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Br(t){const e=t.name;if(yu.has(e))return zt.debug(`There were multiple attempts to register component ${e}.`),!1;yu.set(e,t);for(const n of zo.values())zh(n,t);for(const n of yC.values())zh(n,t);return!0}function Lc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function lt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hn=new fs("app","Firebase",vC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=mC;function wm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:_u,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw hn.create("bad-app-name",{appName:String(i)});if(n||(n=fm()),!n)throw hn.create("no-options");const s=zo.get(i);if(s){if(Vn(n,s.options)&&Vn(r,s.config))return s;throw hn.create("duplicate-app",{appName:i})}const o=new x0(i);for(const a of yu.values())o.addComponent(a);const l=new wC(n,r,o);return zo.set(i,l),l}function Cm(t=_u){const e=zo.get(t);if(!e&&t===_u&&fm())return wm();if(!e)throw hn.create("no-app",{appName:t});return e}function fn(t,e,n){let r=_C[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zt.warn(o.join(" "));return}Br(new $n(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC="firebase-heartbeat-database",SC=1,es="firebase-heartbeat-store";let ua=null;function Sm(){return ua||(ua=z0(CC,SC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(es)}catch(n){console.warn(n)}}}}).catch(t=>{throw hn.create("idb-open",{originalErrorMessage:t.message})})),ua}async function EC(t){try{const n=(await Sm()).transaction(es),r=await n.objectStore(es).get(Em(t));return await n.done,r}catch(e){if(e instanceof En)zt.warn(e.message);else{const n=hn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zt.warn(n.message)}}}async function Uh(t,e){try{const r=(await Sm()).transaction(es,"readwrite");await r.objectStore(es).put(e,Em(t)),await r.done}catch(n){if(n instanceof En)zt.warn(n.message);else{const r=hn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zt.warn(r.message)}}}function Em(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=1024,kC=30;class xC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new RC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Bh();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>kC){const o=NC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){zt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Bh(),{heartbeatsToSend:r,unsentEntries:i}=TC(this._heartbeatsCache.heartbeats),s=bo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return zt.warn(n),""}}}function Bh(){return new Date().toISOString().substring(0,10)}function TC(t,e=IC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Wh(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Wh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class RC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return d0()?h0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await EC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Uh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Uh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Wh(t){return bo(JSON.stringify({version:2,heartbeats:t})).length}function NC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PC(t){Br(new $n("platform-logger",e=>new W0(e),"PRIVATE")),Br(new $n("heartbeat",e=>new xC(e),"PRIVATE")),fn(mu,jh,t),fn(mu,jh,"esm2020"),fn("fire-js","")}PC("");var AC="firebase",DC="12.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fn(AC,DC,"app");var Hh={};const Vh="@firebase/database",$h="1.1.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Im="";function OC(t){Im=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Zi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Vt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new LC(e)}}catch{}return new MC},Mn=km("localStorage"),bC=km("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new Dc("@firebase/database"),FC=function(){let t=1;return function(){return t++}}(),xm=function(t){const e=S0(t),n=new y0;n.update(e);const r=n.digest();return Rc.encodeByteArray(r)},gs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=gs.apply(null,r):typeof r=="object"?e+=me(r):e+=r,e+=" "}return e};let Pi=null,Gh=!0;const jC=function(t,e){k(!0,"Can't turn on custom loggers persistently."),Tr.logLevel=$.VERBOSE,Pi=Tr.log.bind(Tr)},ke=function(...t){if(Gh===!0&&(Gh=!1,Pi===null&&bC.get("logging_enabled")===!0&&jC()),Pi){const e=gs.apply(null,t);Pi(e)}},ms=function(t){return function(...e){ke(t,...e)}},vu=function(...t){const e="FIREBASE INTERNAL ERROR: "+gs(...t);Tr.error(e)},Ut=function(...t){const e=`FIREBASE FATAL ERROR: ${gs(...t)}`;throw Tr.error(e),new Error(e)},Ue=function(...t){const e="FIREBASE WARNING: "+gs(...t);Tr.warn(e)},zC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ue("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Tm=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},UC=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Wr="[MIN_NAME]",Gn="[MAX_NAME]",Jr=function(t,e){if(t===e)return 0;if(t===Wr||e===Gn)return-1;if(e===Wr||t===Gn)return 1;{const n=Kh(t),r=Kh(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},BC=function(t,e){return t===e?0:t<e?-1:1},di=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+me(e))},Mc=function(t){if(typeof t!="object"||t===null)return me(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=me(e[r]),n+=":",n+=Mc(t[e[r]]);return n+="}",n},Rm=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Be(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Nm=function(t){k(!Tm(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(a=0;a<64;a+=8){let h=parseInt(c.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},WC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},HC=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function VC(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const $C=new RegExp("^-?(0*)\\d{1,10}$"),GC=-2147483648,KC=2147483647,Kh=function(t){if($C.test(t)){const e=Number(t);if(e>=GC&&e<=KC)return e}return null},Zr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ue("Exception was thrown by user callback.",n),e},Math.floor(0))}},QC=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ai=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,lt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ue(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YC{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ke("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ue(e)}}class oo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}oo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc="5",Pm="v",Am="s",Dm="r",Om="f",Lm=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Mm="ls",bm="p",wu="ac",Fm="websocket",jm="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1,u=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Mn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Mn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function XC(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Um(t,e,n){k(typeof e=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let r;if(e===Fm)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===jm)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);XC(t)&&(n.ns=t.namespace);const i=[];return Be(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(){this.counters_={}}incrementCounter(e,n=1){Vt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Zw(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca={},da={};function Fc(t){const e=t.toString();return ca[e]||(ca[e]=new JC),ca[e]}function ZC(t,e){const n=t.toString();return da[n]||(da[n]=e()),da[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Zr(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh="start",tS="close",nS="pLPCommand",rS="pRTLPCB",Bm="id",Wm="pw",Hm="ser",iS="cb",sS="seg",oS="ts",lS="d",aS="dframe",Vm=1870,$m=30,uS=Vm-$m,cS=25e3,dS=3e4;class vr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ms(e),this.stats_=Fc(n),this.urlFn=a=>(this.appCheckToken&&(a[wu]=this.appCheckToken),Um(n,jm,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new eS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(dS)),UC(()=>{if(this.isClosed_)return;this.scriptTagHolder=new jc((...s)=>{const[o,l,a,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Qh)this.id=l,this.password=a;else if(o===tS)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Qh]="t",r[Hm]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[iS]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Pm]=bc,this.transportSessionId&&(r[Am]=this.transportSessionId),this.lastSessionId&&(r[Mm]=this.lastSessionId),this.applicationId&&(r[bm]=this.applicationId),this.appCheckToken&&(r[wu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Lm.test(location.hostname)&&(r[Dm]=Om);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){vr.forceAllow_=!0}static forceDisallow(){vr.forceDisallow_=!0}static isAvailable(){return vr.forceAllow_?!0:!vr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!WC()&&!HC()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=cm(n),i=Rm(r,uS);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[aS]="t",r[Bm]=e,r[Wm]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class jc{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=FC(),window[nS+this.uniqueCallbackIdentifier]=e,window[rS+this.uniqueCallbackIdentifier]=n,this.myIFrame=jc.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ke("frame writing exception"),l.stack&&ke(l.stack),ke(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ke("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Bm]=this.myID,e[Wm]=this.myPW,e[Hm]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+$m+r.length<=Vm;){const o=this.pendingSegs.shift();r=r+"&"+sS+i+"="+o.seg+"&"+oS+i+"="+o.ts+"&"+lS+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(cS)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ke("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS=16384,fS=45e3;let Uo=null;typeof MozWebSocket<"u"?Uo=MozWebSocket:typeof WebSocket<"u"&&(Uo=WebSocket);class at{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ms(this.connId),this.stats_=Fc(n),this.connURL=at.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Pm]=bc,typeof location<"u"&&location.hostname&&Lm.test(location.hostname)&&(o[Dm]=Om),n&&(o[Am]=n),r&&(o[Mm]=r),i&&(o[wu]=i),s&&(o[bm]=s),Um(e,Fm,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Mn.set("previous_websocket_failure",!0);try{let r;c0(),this.mySock=new Uo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){at.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Uo!==null&&!at.forceDisallow_}static previouslyFailed(){return Mn.isInMemoryStorage||Mn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Mn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Zi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Rm(n,hS);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(fS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}at.responsesRequiredToBeHealthy=2;at.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{static get ALL_TRANSPORTS(){return[vr,at]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=at&&at.isAvailable();let r=n&&!at.previouslyFailed();if(e.webSocketOnly&&(n||Ue("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[at];else{const i=this.transports_=[];for(const s of ts.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ts.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ts.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS=6e4,gS=5e3,mS=10*1024,_S=100*1024,ha="t",qh="d",yS="s",Yh="r",vS="e",Xh="o",Jh="a",Zh="n",ef="p",wS="h";class CS{constructor(e,n,r,i,s,o,l,a,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ms("c:"+this.id+":"),this.transportManager_=new ts(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ai(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>_S?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>mS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ha in e){const n=e[ha];n===Jh?this.upgradeIfSecondaryHealthy_():n===Yh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Xh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=di("t",e),r=di("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ef,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Jh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Zh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=di("t",e),r=di("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=di(ha,e);if(qh in e){const r=e[qh];if(n===wS){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Zh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===yS?this.onConnectionShutdown_(r):n===Yh?this.onReset_(r):n===vS?vu("Server Error: "+r):n===Xh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):vu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),bc!==r&&Ue("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ai(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(pS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ai(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(gS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ef,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Mn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){k(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo extends Km{static getInstance(){return new Bo}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Pc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf=32,nf=768;class G{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function H(){return new G("")}function F(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function yn(t){return t.pieces_.length-t.pieceNum_}function K(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new G(t.pieces_,e)}function Qm(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function SS(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function qm(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Ym(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new G(e,0)}function de(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof G)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new G(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function Me(t,e){const n=F(t),r=F(e);if(n===null)return e;if(n===r)return Me(K(t),K(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function zc(t,e){if(yn(t)!==yn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ut(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(yn(t)>yn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class ES{constructor(e,n){this.errorPrefix_=n,this.parts_=qm(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Sl(this.parts_[r]);Xm(this)}}function IS(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Sl(e),Xm(t)}function kS(t){const e=t.parts_.pop();t.byteLength_-=Sl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Xm(t){if(t.byteLength_>nf)throw new Error(t.errorPrefix_+"has a key path longer than "+nf+" bytes ("+t.byteLength_+").");if(t.parts_.length>tf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+tf+") or object contains a cycle "+Pn(t))}function Pn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc extends Km{static getInstance(){return new Uc}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=1e3,xS=60*5*1e3,rf=30*1e3,TS=1.3,RS=3e4,NS="server_kill",sf=3;class Lt extends Gm{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Lt.nextPersistentConnectionId_++,this.log_=ms("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=hi,this.maxReconnectDelay_=xS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Uc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Bo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(me(s)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Cl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Lt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Vt(e,"w")){const r=Ur(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ue(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||_0(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=rf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=m0(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+me(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):vu("Unrecognized action received from server: "+me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=hi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=hi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>RS&&(this.reconnectDelay_=hi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*TS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Lt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){k(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?ke("getToken() completed but was canceled"):(ke("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,l=new CS(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,y=>{Ue(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(NS)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Ue(d),a())}}}interrupt(e){ke("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ke("Resuming connection for reason: "+e),delete this.interruptReasons_[e],fu(this.interruptReasons_)&&(this.reconnectDelay_=hi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Mc(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new G(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ke("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=sf&&(this.reconnectDelay_=rf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ke("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=sf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Im.replace(/\./g,"-")]=1,Pc()?e["framework.cordova"]=1:gm()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Bo.getInstance().currentlyOnline();return fu(this.interruptReasons_)&&e}}Lt.nextPersistentConnectionId_=0;Lt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new j(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new j(Wr,e),i=new j(Wr,n);return this.compare(r,i)!==0}minPost(){return j.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vs;class Jm extends El{static get __EMPTY_NODE(){return Vs}static set __EMPTY_NODE(e){Vs=e}compare(e,n){return Jr(e.name,n.name)}isDefinedOn(e){throw qr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(Gn,Vs)}makePost(e,n){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,Vs)}toString(){return".key"}}const Rr=new Jm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ge{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ge.RED,this.left=i??be.EMPTY_NODE,this.right=s??be.EMPTY_NODE}copy(e,n,r,i,s){return new ge(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return be.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return be.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ge.RED=!0;ge.BLACK=!1;class PS{copy(e,n,r,i,s){return this}insert(e,n,r){return new ge(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class be{constructor(e,n=be.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new be(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ge.BLACK,null,null))}remove(e){return new be(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ge.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new $s(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new $s(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new $s(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new $s(this.root_,null,this.comparator_,!0,e)}}be.EMPTY_NODE=new PS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AS(t,e){return Jr(t.name,e.name)}function Bc(t,e){return Jr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cu;function DS(t){Cu=t}const Zm=function(t){return typeof t=="number"?"number:"+Nm(t):"string:"+t},e_=function(t){if(t.isLeafNode()){const e=t.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Vt(e,".sv"),"Priority must be a string or number.")}else k(t===Cu||t.isEmpty(),"priority of unexpected type.");k(t===Cu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let of;class fe{static set __childrenNodeConstructor(e){of=e}static get __childrenNodeConstructor(){return of}constructor(e,n=fe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),e_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new fe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:fe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:F(e)===".priority"?this.priorityNode_:fe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:fe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=F(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(k(r!==".priority"||yn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,fe.__childrenNodeConstructor.EMPTY_NODE.updateChild(K(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Zm(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Nm(this.value_):e+=this.value_,this.lazyHash_=xm(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===fe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof fe.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=fe.VALUE_TYPE_ORDER.indexOf(n),s=fe.VALUE_TYPE_ORDER.indexOf(r);return k(i>=0,"Unknown leaf type: "+n),k(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}fe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t_,n_;function OS(t){t_=t}function LS(t){n_=t}class MS extends El{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Jr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(Gn,new fe("[PRIORITY-POST]",n_))}makePost(e,n){const r=t_(e);return new j(n,new fe("[PRIORITY-POST]",r))}toString(){return".priority"}}const oe=new MS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS=Math.log(2);class FS{constructor(e){const n=s=>parseInt(Math.log(s)/bS,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Wo=function(t,e,n,r){t.sort(e);const i=function(a,u){const c=u-a;let d,h;if(c===0)return null;if(c===1)return d=t[a],h=n?n(d):d,new ge(h,d.node,ge.BLACK,null,null);{const y=parseInt(c/2,10)+a,w=i(a,y),C=i(y+1,u);return d=t[y],h=n?n(d):d,new ge(h,d.node,ge.BLACK,w,C)}},s=function(a){let u=null,c=null,d=t.length;const h=function(w,C){const O=d-w,g=d;d-=w;const p=i(O+1,g),_=t[O],S=n?n(_):_;y(new ge(S,_.node,C,null,p))},y=function(w){u?(u.left=w,u=w):(c=w,u=w)};for(let w=0;w<a.count;++w){const C=a.nextBitIsOne(),O=Math.pow(2,a.count-(w+1));C?h(O,ge.BLACK):(h(O,ge.BLACK),h(O,ge.RED))}return c},o=new FS(t.length),l=s(o);return new be(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fa;const ir={};class Pt{static get Default(){return k(ir&&oe,"ChildrenNode.ts has not been loaded"),fa=fa||new Pt({".priority":ir},{".priority":oe}),fa}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Ur(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof be?n:null}hasIndex(e){return Vt(this.indexSet_,e.toString())}addIndex(e,n){k(e!==Rr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(j.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Wo(r,e.getCompare()):l=ir;const a=e.toString(),u={...this.indexSet_};u[a]=e;const c={...this.indexes_};return c[a]=l,new Pt(c,u)}addToIndexes(e,n){const r=jo(this.indexes_,(i,s)=>{const o=Ur(this.indexSet_,s);if(k(o,"Missing index implementation for "+s),i===ir)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(j.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Wo(l,o.getCompare())}else return ir;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new j(e.name,l))),a.insert(e,e.node)}});return new Pt(r,this.indexSet_)}removeFromIndexes(e,n){const r=jo(this.indexes_,i=>{if(i===ir)return i;{const s=n.get(e.name);return s?i.remove(new j(e.name,s)):i}});return new Pt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fi;class L{static get EMPTY_NODE(){return fi||(fi=new L(new be(Bc),null,Pt.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&e_(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fi}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?fi:n}}getChild(e){const n=F(e);return n===null?this:this.getImmediateChild(n).getChild(K(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(k(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new j(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?fi:this.priorityNode_;return new L(i,o,s)}}updateChild(e,n){const r=F(e);if(r===null)return n;{k(F(e)!==".priority"||yn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(K(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(oe,(o,l)=>{n[o]=l.val(e),r++,s&&L.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Zm(this.getPriority().val())+":"),this.forEachChild(oe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":xm(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new j(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===_s?-1:0}withIndex(e){if(e===Rr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Rr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(oe),i=n.getIterator(oe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Rr?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class jS extends L{constructor(){super(new be(Bc),L.EMPTY_NODE,Pt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const _s=new jS;Object.defineProperties(j,{MIN:{value:new j(Wr,L.EMPTY_NODE)},MAX:{value:new j(Gn,_s)}});Jm.__EMPTY_NODE=L.EMPTY_NODE;fe.__childrenNodeConstructor=L;DS(_s);LS(_s);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=!0;function ve(t,e=null){if(t===null)return L.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new fe(n,ve(e))}if(!(t instanceof Array)&&zS){const n=[];let r=!1;if(Be(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ve(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new j(o,a)))}}),n.length===0)return L.EMPTY_NODE;const s=Wo(n,AS,o=>o.name,Bc);if(r){const o=Wo(n,oe.getCompare());return new L(s,ve(e),new Pt({".priority":o},{".priority":oe}))}else return new L(s,ve(e),Pt.Default)}else{let n=L.EMPTY_NODE;return Be(t,(r,i)=>{if(Vt(t,r)&&r.substring(0,1)!=="."){const s=ve(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ve(e))}}OS(ve);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US extends El{constructor(e){super(),this.indexPath_=e,k(!z(e)&&F(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Jr(e.name,n.name):s}makePost(e,n){const r=ve(e),i=L.EMPTY_NODE.updateChild(this.indexPath_,r);return new j(n,i)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,_s);return new j(Gn,e)}toString(){return qm(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS extends El{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Jr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const r=ve(e);return new j(n,r)}toString(){return".value"}}const WS=new BS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(t){return{type:"value",snapshotNode:t}}function Hr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ns(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function rs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function HS(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){k(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ns(n,l)):k(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Hr(n,r)):o.trackChildChange(rs(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(oe,(i,s)=>{n.hasChild(i)||r.trackChildChange(ns(i,s))}),n.isLeafNode()||n.forEachChild(oe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(rs(i,s,o))}else r.trackChildChange(Hr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.indexedFilter_=new Wc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=is.getStartPost_(e),this.endPost_=is.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new j(n,r))||(r=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=L.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(L.EMPTY_NODE);const s=this;return n.forEachChild(oe,(o,l)=>{s.matches(new j(o,l))||(i=i.updateImmediateChild(o,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new is(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new j(n,r))||(r=L.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=L.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(L.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,y)=>d(y,h)}else o=this.index_.getCompare();const l=e;k(l.numChildren()===this.limit_,"");const a=new j(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const y=h==null?1:o(h,a);if(c&&!r.isEmpty()&&y>=0)return s!=null&&s.trackChildChange(rs(n,r,d)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ns(n,d));const C=l.updateImmediateChild(n,L.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(Hr(h.name,h.node)),C.updateImmediateChild(h.name,h.node)):C}}else return r.isEmpty()?e:c&&o(u,a)>=0?(s!=null&&(s.trackChildChange(ns(u.name,u.node)),s.trackChildChange(Hr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,L.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=oe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Wr}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Gn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===oe}copy(){const e=new Hc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function $S(t){return t.loadsAllData()?new Wc(t.getIndex()):t.hasLimit()?new VS(t):new is(t)}function lf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===oe?n="$priority":t.index_===WS?n="$value":t.index_===Rr?n="$key":(k(t.index_ instanceof US,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=me(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=me(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+me(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=me(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+me(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function af(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==oe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho extends Gm{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ms("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ho.getListenId_(e,r),l={};this.listens_[o]=l;const a=lf(e._queryParams);this.restRequest_(s+".json",a,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Ur(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Ho.getListenId_(e,n);delete this.listens_[r]}get(e){const n=lf(e._queryParams),r=e._path.toString(),i=new Cl;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Yr(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Zi(l.responseText)}catch{Ue("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Ue("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(){return{value:null,children:new Map}}function i_(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=F(e);t.children.has(r)||t.children.set(r,Vo());const i=t.children.get(r);e=K(e),i_(i,e,n)}}function Su(t,e,n){t.value!==null?n(e,t.value):KS(t,(r,i)=>{const s=new G(e.toString()+"/"+r);Su(i,s,n)})}function KS(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&Be(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf=10*1e3,qS=30*1e3,YS=5*60*1e3;class XS{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new QS(e);const r=uf+(qS-uf)*Math.random();Ai(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Be(e,(i,s)=>{s>0&&Vt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ai(this.reportStats_.bind(this),Math.floor(Math.random()*2*YS))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ct||(ct={}));function s_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Vc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function $c(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ct.ACK_USER_WRITE,this.source=s_()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new G(e));return new $o(H(),n,this.revert)}}else return k(F(this.path)===e,"operationForChild called for unrelated child."),new $o(K(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n){this.source=e,this.path=n,this.type=ct.LISTEN_COMPLETE}operationForChild(e){return z(this.path)?new ss(this.source,H()):new ss(this.source,K(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ct.OVERWRITE}operationForChild(e){return z(this.path)?new Kn(this.source,H(),this.snap.getImmediateChild(e)):new Kn(this.source,K(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ct.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new G(e));return n.isEmpty()?null:n.value?new Kn(this.source,H(),n.value):new os(this.source,H(),n)}else return k(F(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new os(this.source,K(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const n=F(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ZS(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(HS(o.childName,o.snapshotNode))}),pi(t,i,"child_removed",e,r,n),pi(t,i,"child_added",e,r,n),pi(t,i,"child_moved",s,r,n),pi(t,i,"child_changed",e,r,n),pi(t,i,"value",e,r,n),i}function pi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>tE(t,l,a)),o.forEach(l=>{const a=eE(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function eE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function tE(t,e,n){if(e.childName==null||n.childName==null)throw qr("Should only compare child_ events.");const r=new j(e.childName,e.snapshotNode),i=new j(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(t,e){return{eventCache:t,serverCache:e}}function Di(t,e,n,r){return Il(new Qn(e,n,r),t.serverCache)}function o_(t,e,n,r){return Il(t.eventCache,new Qn(e,n,r))}function Eu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function qn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pa;const nE=()=>(pa||(pa=new be(BC)),pa);class Y{static fromObject(e){let n=new Y(null);return Be(e,(r,i)=>{n=n.set(new G(r),i)}),n}constructor(e,n=nE()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:H(),value:this.value};if(z(e))return null;{const r=F(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(K(e),n);return s!=null?{path:de(new G(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=F(e),r=this.children.get(n);return r!==null?r.subtree(K(e)):new Y(null)}}set(e,n){if(z(e))return new Y(n,this.children);{const r=F(e),s=(this.children.get(r)||new Y(null)).set(K(e),n),o=this.children.insert(r,s);return new Y(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new Y(null):new Y(null,this.children);{const n=F(e),r=this.children.get(n);if(r){const i=r.remove(K(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Y(null):new Y(this.value,s)}else return this}}get(e){if(z(e))return this.value;{const n=F(e),r=this.children.get(n);return r?r.get(K(e)):null}}setTree(e,n){if(z(e))return n;{const r=F(e),s=(this.children.get(r)||new Y(null)).setTree(K(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Y(this.value,o)}}fold(e){return this.fold_(H(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(de(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,H(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(z(e))return null;{const s=F(e),o=this.children.get(s);return o?o.findOnPath_(K(e),de(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,H(),n)}foreachOnPath_(e,n,r){if(z(e))return this;{this.value&&r(n,this.value);const i=F(e),s=this.children.get(i);return s?s.foreachOnPath_(K(e),de(n,i),r):new Y(null)}}foreach(e){this.foreach_(H(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(de(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.writeTree_=e}static empty(){return new pt(new Y(null))}}function Oi(t,e,n){if(z(e))return new pt(new Y(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Me(i,e);return s=s.updateChild(o,n),new pt(t.writeTree_.set(i,s))}else{const i=new Y(n),s=t.writeTree_.setTree(e,i);return new pt(s)}}}function cf(t,e,n){let r=t;return Be(n,(i,s)=>{r=Oi(r,de(e,i),s)}),r}function df(t,e){if(z(e))return pt.empty();{const n=t.writeTree_.setTree(e,new Y(null));return new pt(n)}}function Iu(t,e){return Zn(t,e)!=null}function Zn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Me(n.path,e)):null}function hf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(oe,(r,i)=>{e.push(new j(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new j(r,i.value))}),e}function pn(t,e){if(z(e))return t;{const n=Zn(t,e);return n!=null?new pt(new Y(n)):new pt(t.writeTree_.subtree(e))}}function ku(t){return t.writeTree_.isEmpty()}function Vr(t,e){return l_(H(),t.writeTree_,e)}function l_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(k(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=l_(de(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(de(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(t,e){return d_(e,t)}function rE(t,e,n,r,i){k(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Oi(t.visibleWrites,e,n)),t.lastWriteId=r}function iE(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function sE(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);k(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&oE(l,r.path)?i=!1:ut(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return lE(t),!0;if(r.snap)t.visibleWrites=df(t.visibleWrites,r.path);else{const l=r.children;Be(l,a=>{t.visibleWrites=df(t.visibleWrites,de(r.path,a))})}return!0}else return!1}function oE(t,e){if(t.snap)return ut(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ut(de(t.path,n),e))return!0;return!1}function lE(t){t.visibleWrites=a_(t.allWrites,aE,H()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function aE(t){return t.visible}function a_(t,e,n){let r=pt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)ut(n,o)?(l=Me(n,o),r=Oi(r,l,s.snap)):ut(o,n)&&(l=Me(o,n),r=Oi(r,H(),s.snap.getChild(l)));else if(s.children){if(ut(n,o))l=Me(n,o),r=cf(r,l,s.children);else if(ut(o,n))if(l=Me(o,n),z(l))r=cf(r,H(),s.children);else{const a=Ur(s.children,F(l));if(a){const u=a.getChild(K(l));r=Oi(r,H(),u)}}}else throw qr("WriteRecord should have .snap or .children")}}return r}function u_(t,e,n,r,i){if(!r&&!i){const s=Zn(t.visibleWrites,e);if(s!=null)return s;{const o=pn(t.visibleWrites,e);if(ku(o))return n;if(n==null&&!Iu(o,H()))return null;{const l=n||L.EMPTY_NODE;return Vr(o,l)}}}else{const s=pn(t.visibleWrites,e);if(!i&&ku(s))return n;if(!i&&n==null&&!Iu(s,H()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(ut(u.path,e)||ut(e,u.path))},l=a_(t.allWrites,o,e),a=n||L.EMPTY_NODE;return Vr(l,a)}}}function uE(t,e,n){let r=L.EMPTY_NODE;const i=Zn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(oe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=pn(t.visibleWrites,e);return n.forEachChild(oe,(o,l)=>{const a=Vr(pn(s,new G(o)),l);r=r.updateImmediateChild(o,a)}),hf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=pn(t.visibleWrites,e);return hf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function cE(t,e,n,r,i){k(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=de(e,n);if(Iu(t.visibleWrites,s))return null;{const o=pn(t.visibleWrites,s);return ku(o)?i.getChild(n):Vr(o,i.getChild(n))}}function dE(t,e,n,r){const i=de(e,n),s=Zn(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=pn(t.visibleWrites,i);return Vr(o,r.getNode().getImmediateChild(n))}else return null}function hE(t,e){return Zn(t.visibleWrites,e)}function fE(t,e,n,r,i,s,o){let l;const a=pn(t.visibleWrites,e),u=Zn(a,H());if(u!=null)l=u;else if(n!=null)l=Vr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],d=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let y=h.getNext();for(;y&&c.length<i;)d(y,r)!==0&&c.push(y),y=h.getNext();return c}else return[]}function pE(){return{visibleWrites:pt.empty(),allWrites:[],lastWriteId:-1}}function Go(t,e,n,r){return u_(t.writeTree,t.treePath,e,n,r)}function Kc(t,e){return uE(t.writeTree,t.treePath,e)}function ff(t,e,n,r){return cE(t.writeTree,t.treePath,e,n,r)}function Ko(t,e){return hE(t.writeTree,de(t.treePath,e))}function gE(t,e,n,r,i,s){return fE(t.writeTree,t.treePath,e,n,r,i,s)}function Qc(t,e,n){return dE(t.writeTree,t.treePath,e,n)}function c_(t,e){return d_(de(t.treePath,e),t.writeTree)}function d_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,rs(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ns(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Hr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,rs(r,e.snapshotNode,i.oldSnap));else throw qr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const h_=new _E;class qc{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Qn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Qc(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:qn(this.viewCache_),s=gE(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(t){return{filter:t}}function vE(t,e){k(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function wE(t,e,n,r,i){const s=new mE;let o,l;if(n.type===ct.OVERWRITE){const u=n;u.source.fromUser?o=xu(t,e,u.path,u.snap,r,i,s):(k(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!z(u.path),o=Qo(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===ct.MERGE){const u=n;u.source.fromUser?o=SE(t,e,u.path,u.children,r,i,s):(k(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Tu(t,e,u.path,u.children,r,i,l,s))}else if(n.type===ct.ACK_USER_WRITE){const u=n;u.revert?o=kE(t,e,u.path,r,i,s):o=EE(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===ct.LISTEN_COMPLETE)o=IE(t,e,n.path,r,s);else throw qr("Unknown operation type: "+n.type);const a=s.getChanges();return CE(e,o,a),{viewCache:o,changes:a}}function CE(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Eu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(r_(Eu(e)))}}function f_(t,e,n,r,i,s){const o=e.eventCache;if(Ko(r,n)!=null)return e;{let l,a;if(z(n))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=qn(e),c=u instanceof L?u:L.EMPTY_NODE,d=Kc(r,c);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Go(r,qn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=F(n);if(u===".priority"){k(yn(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const d=ff(r,n,c,a);d!=null?l=t.filter.updatePriority(c,d):l=o.getNode()}else{const c=K(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=ff(r,n,o.getNode(),a);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=Qc(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,c,i,s):l=o.getNode()}}return Di(e,l,o.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function Qo(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(z(n))u=c.updateFullNode(a.getNode(),r,null);else if(c.filtersNodes()&&!a.isFiltered()){const y=a.getNode().updateChild(n,r);u=c.updateFullNode(a.getNode(),y,null)}else{const y=F(n);if(!a.isCompleteForPath(n)&&yn(n)>1)return e;const w=K(n),O=a.getNode().getImmediateChild(y).updateChild(w,r);y===".priority"?u=c.updatePriority(a.getNode(),O):u=c.updateChild(a.getNode(),y,O,w,h_,null)}const d=o_(e,u,a.isFullyInitialized()||z(n),c.filtersNodes()),h=new qc(i,d,s);return f_(t,d,n,i,h,l)}function xu(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const c=new qc(i,e,s);if(z(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Di(e,u,!0,t.filter.filtersNodes());else{const d=F(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Di(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=K(n),y=l.getNode().getImmediateChild(d);let w;if(z(h))w=r;else{const C=c.getCompleteChild(d);C!=null?Qm(h)===".priority"&&C.getChild(Ym(h)).isEmpty()?w=C:w=C.updateChild(h,r):w=L.EMPTY_NODE}if(y.equals(w))a=e;else{const C=t.filter.updateChild(l.getNode(),d,w,h,c,o);a=Di(e,C,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function pf(t,e){return t.eventCache.isCompleteForChild(e)}function SE(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const c=de(n,a);pf(e,F(c))&&(l=xu(t,l,c,u,i,s,o))}),r.foreach((a,u)=>{const c=de(n,a);pf(e,F(c))||(l=xu(t,l,c,u,i,s,o))}),l}function gf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Tu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;z(n)?u=r:u=new Y(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const y=e.serverCache.getNode().getImmediateChild(d),w=gf(t,y,h);a=Qo(t,a,new G(d),w,i,s,o,l)}}),u.children.inorderTraversal((d,h)=>{const y=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!y){const w=e.serverCache.getNode().getImmediateChild(d),C=gf(t,w,h);a=Qo(t,a,new G(d),C,i,s,o,l)}}),a}function EE(t,e,n,r,i,s,o){if(Ko(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(z(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Qo(t,e,n,a.getNode().getChild(n),i,s,l,o);if(z(n)){let u=new Y(null);return a.getNode().forEachChild(Rr,(c,d)=>{u=u.set(new G(c),d)}),Tu(t,e,n,u,i,s,l,o)}else return e}else{let u=new Y(null);return r.foreach((c,d)=>{const h=de(n,c);a.isCompleteForPath(h)&&(u=u.set(c,a.getNode().getChild(h)))}),Tu(t,e,n,u,i,s,l,o)}}function IE(t,e,n,r,i){const s=e.serverCache,o=o_(e,s.getNode(),s.isFullyInitialized()||z(n),s.isFiltered());return f_(t,o,n,r,h_,i)}function kE(t,e,n,r,i,s){let o;if(Ko(r,n)!=null)return e;{const l=new qc(r,e,i),a=e.eventCache.getNode();let u;if(z(n)||F(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Go(r,qn(e));else{const d=e.serverCache.getNode();k(d instanceof L,"serverChildren would be complete if leaf node"),c=Kc(r,d)}c=c,u=t.filter.updateFullNode(a,c,s)}else{const c=F(n);let d=Qc(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=a.getImmediateChild(c)),d!=null?u=t.filter.updateChild(a,c,d,K(n),l,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(a,c,L.EMPTY_NODE,K(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Go(r,qn(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Ko(r,H())!=null,Di(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Wc(r.getIndex()),s=$S(r);this.processor_=yE(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(L.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(L.EMPTY_NODE,l.getNode(),null),c=new Qn(a,o.isFullyInitialized(),i.filtersNodes()),d=new Qn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Il(d,c),this.eventGenerator_=new JS(this.query_)}get query(){return this.query_}}function TE(t){return t.viewCache_.serverCache.getNode()}function RE(t,e){const n=qn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(F(e)).isEmpty())?n.getChild(e):null}function mf(t){return t.eventRegistrations_.length===0}function NE(t,e){t.eventRegistrations_.push(e)}function _f(t,e,n){const r=[];if(n){k(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function yf(t,e,n,r){e.type===ct.MERGE&&e.source.queryId!==null&&(k(qn(t.viewCache_),"We should always have a full cache before handling merges"),k(Eu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=wE(t.processor_,i,e,n,r);return vE(t.processor_,s.viewCache),k(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,p_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function PE(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(oe,(s,o)=>{r.push(Hr(s,o))}),n.isFullyInitialized()&&r.push(r_(n.getNode())),p_(t,r,n.getNode(),e)}function p_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return ZS(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qo;class AE{constructor(){this.views=new Map}}function DE(t){k(!qo,"__referenceConstructor has already been defined"),qo=t}function OE(){return k(qo,"Reference.ts has not been loaded"),qo}function LE(t){return t.views.size===0}function Yc(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return k(s!=null,"SyncTree gave us an op for an invalid query."),yf(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(yf(o,e,n,r));return s}}function ME(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Go(n,i?r:null),a=!1;l?a=!0:r instanceof L?(l=Kc(n,r),a=!1):(l=L.EMPTY_NODE,a=!1);const u=Il(new Qn(l,a,!1),new Qn(r,i,!1));return new xE(e,u)}return o}function bE(t,e,n,r,i,s){const o=ME(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),NE(o,n),PE(o,n)}function FE(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=vn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(_f(u,n,r)),mf(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(_f(a,n,r)),mf(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!vn(t)&&s.push(new(OE())(e._repo,e._path)),{removed:s,events:o}}function g_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Nr(t,e){let n=null;for(const r of t.views.values())n=n||RE(r,e);return n}function m_(t,e){if(e._queryParams.loadsAllData())return kl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function __(t,e){return m_(t,e)!=null}function vn(t){return kl(t)!=null}function kl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yo;function jE(t){k(!Yo,"__referenceConstructor has already been defined"),Yo=t}function zE(){return k(Yo,"Reference.ts has not been loaded"),Yo}let UE=1;class vf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Y(null),this.pendingWriteTree_=pE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function y_(t,e,n,r,i){return rE(t.pendingWriteTree_,e,n,r,i),i?ys(t,new Kn(s_(),e,n)):[]}function bn(t,e,n=!1){const r=iE(t.pendingWriteTree_,e);if(sE(t.pendingWriteTree_,e)){let s=new Y(null);return r.snap!=null?s=s.set(H(),!0):Be(r.children,o=>{s=s.set(new G(o),!0)}),ys(t,new $o(r.path,s,n))}else return[]}function xl(t,e,n){return ys(t,new Kn(Vc(),e,n))}function BE(t,e,n){const r=Y.fromObject(n);return ys(t,new os(Vc(),e,r))}function WE(t,e){return ys(t,new ss(Vc(),e))}function HE(t,e,n){const r=Jc(t,n);if(r){const i=Zc(r),s=i.path,o=i.queryId,l=Me(s,e),a=new ss($c(o),l);return ed(t,s,a)}else return[]}function Ru(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||__(o,e))){const a=FE(o,e,n,r);LE(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const c=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,y)=>vn(y));if(c&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const y=GE(h);for(let w=0;w<y.length;++w){const C=y[w],O=C.query,g=C_(t,C);t.listenProvider_.startListening(Li(O),Xo(t,O),g.hashFn,g.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Li(e),null):u.forEach(h=>{const y=t.queryToTagMap.get(Tl(h));t.listenProvider_.stopListening(Li(h),y)}))}KE(t,u)}return l}function VE(t,e,n,r){const i=Jc(t,r);if(i!=null){const s=Zc(i),o=s.path,l=s.queryId,a=Me(o,e),u=new Kn($c(l),a,n);return ed(t,o,u)}else return[]}function $E(t,e,n,r){const i=Jc(t,r);if(i){const s=Zc(i),o=s.path,l=s.queryId,a=Me(o,e),u=Y.fromObject(n),c=new os($c(l),a,u);return ed(t,o,c)}else return[]}function wf(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,y)=>{const w=Me(h,i);s=s||Nr(y,w),o=o||vn(y)});let l=t.syncPointTree_.get(i);l?(o=o||vn(l),s=s||Nr(l,H())):(l=new AE,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=L.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((y,w)=>{const C=Nr(w,H());C&&(s=s.updateImmediateChild(y,C))}));const u=__(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=Tl(e);k(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const y=QE();t.queryToTagMap.set(h,y),t.tagToQueryMap.set(y,h)}const c=Gc(t.pendingWriteTree_,i);let d=bE(l,e,n,c,s,a);if(!u&&!o&&!r){const h=m_(l,e);d=d.concat(qE(t,e,h))}return d}function Xc(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Me(o,e),u=Nr(l,a);if(u)return u});return u_(i,e,s,n,!0)}function ys(t,e){return v_(e,t.syncPointTree_,null,Gc(t.pendingWriteTree_,H()))}function v_(t,e,n,r){if(z(t.path))return w_(t,e,n,r);{const i=e.get(H());n==null&&i!=null&&(n=Nr(i,H()));let s=[];const o=F(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=c_(r,o);s=s.concat(v_(l,a,u,c))}return i&&(s=s.concat(Yc(i,t,r,n))),s}}function w_(t,e,n,r){const i=e.get(H());n==null&&i!=null&&(n=Nr(i,H()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=c_(r,o),c=t.operationForChild(o);c&&(s=s.concat(w_(c,l,a,u)))}),i&&(s=s.concat(Yc(i,t,r,n))),s}function C_(t,e){const n=e.query,r=Xo(t,n);return{hashFn:()=>(TE(e)||L.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?HE(t,n._path,r):WE(t,n._path);{const s=VC(i,n);return Ru(t,n,null,s)}}}}function Xo(t,e){const n=Tl(e);return t.queryToTagMap.get(n)}function Tl(t){return t._path.toString()+"$"+t._queryIdentifier}function Jc(t,e){return t.tagToQueryMap.get(e)}function Zc(t){const e=t.indexOf("$");return k(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new G(t.substr(0,e))}}function ed(t,e,n){const r=t.syncPointTree_.get(e);k(r,"Missing sync point for query tag that we're tracking");const i=Gc(t.pendingWriteTree_,e);return Yc(r,n,i,null)}function GE(t){return t.fold((e,n,r)=>{if(n&&vn(n))return[kl(n)];{let i=[];return n&&(i=g_(n)),Be(r,(s,o)=>{i=i.concat(o)}),i}})}function Li(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(zE())(t._repo,t._path):t}function KE(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Tl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function QE(){return UE++}function qE(t,e,n){const r=e._path,i=Xo(t,e),s=C_(t,n),o=t.listenProvider_.startListening(Li(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)k(!vn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,c,d)=>{if(!z(u)&&c&&vn(c))return[kl(c).query];{let h=[];return c&&(h=h.concat(g_(c).map(y=>y.query))),Be(d,(y,w)=>{h=h.concat(w)}),h}});for(let u=0;u<a.length;++u){const c=a[u];t.listenProvider_.stopListening(Li(c),Xo(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new td(n)}node(){return this.node_}}class nd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=de(this.path_,e);return new nd(this.syncTree_,n)}node(){return Xc(this.syncTree_,this.path_)}}const YE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Cf=function(t,e,n){if(!t||typeof t!="object")return t;if(k(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return XE(t[".sv"],e,n);if(typeof t[".sv"]=="object")return JE(t[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},XE=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+t)}},JE=function(t,e,n){t.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&k(!1,"Unexpected increment value: "+r);const i=e.node();if(k(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},ZE=function(t,e,n,r){return rd(e,new nd(n,t),r)},S_=function(t,e,n){return rd(t,new td(e),n)};function rd(t,e,n){const r=t.getPriority().val(),i=Cf(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Cf(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new fe(l,ve(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new fe(i))),o.forEachChild(oe,(l,a)=>{const u=rd(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function sd(t,e){let n=e instanceof G?e:new G(e),r=t,i=F(n);for(;i!==null;){const s=Ur(r.node.children,i)||{children:{},childCount:0};r=new id(i,r,s),n=K(n),i=F(n)}return r}function ei(t){return t.node.value}function E_(t,e){t.node.value=e,Nu(t)}function I_(t){return t.node.childCount>0}function eI(t){return ei(t)===void 0&&!I_(t)}function Rl(t,e){Be(t.node.children,(n,r)=>{e(new id(n,t,r))})}function k_(t,e,n,r){n&&e(t),Rl(t,i=>{k_(i,e,!0)})}function tI(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function vs(t){return new G(t.parent===null?t.name:vs(t.parent)+"/"+t.name)}function Nu(t){t.parent!==null&&nI(t.parent,t.name,t)}function nI(t,e,n){const r=eI(n),i=Vt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Nu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Nu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI=/[\[\].#$\/\u0000-\u001F\u007F]/,iI=/[\[\].#$\u0000-\u001F\u007F]/,ga=10*1024*1024,x_=function(t){return typeof t=="string"&&t.length!==0&&!rI.test(t)},T_=function(t){return typeof t=="string"&&t.length!==0&&!iI.test(t)},sI=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),T_(t)},oI=function(t,e,n,r){od(Ac(t,"value"),e,n)},od=function(t,e,n){const r=n instanceof G?new ES(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Pn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Pn(r)+" with contents = "+e.toString());if(Tm(e))throw new Error(t+"contains "+e.toString()+" "+Pn(r));if(typeof e=="string"&&e.length>ga/3&&Sl(e)>ga)throw new Error(t+"contains a string greater than "+ga+" utf8 bytes "+Pn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Be(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!x_(o)))throw new Error(t+" contains an invalid key ("+o+") "+Pn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);IS(r,o),od(t,l,r),kS(r)}),i&&s)throw new Error(t+' contains ".value" child '+Pn(r)+" in addition to actual children.")}},R_=function(t,e,n,r){if(!T_(n))throw new Error(Ac(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},lI=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),R_(t,e,n)},aI=function(t,e){if(F(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},uI=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!x_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!sI(n))throw new Error(Ac(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ld(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!zc(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function N_(t,e,n){ld(t,n),P_(t,r=>zc(r,e))}function Bt(t,e,n){ld(t,n),P_(t,r=>ut(r,e)||ut(e,r))}function P_(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(dI(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function dI(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Pi&&ke("event: "+n.toString()),Zr(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI="repo_interrupt",fI=25;class pI{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new cI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Vo(),this.transactionQueueTree_=new id,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function gI(t,e,n){if(t.stats_=Fc(t.repoInfo_),t.forceRestClient_||QC())t.server_=new Ho(t.repoInfo_,(r,i,s,o)=>{Sf(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ef(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{me(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Lt(t.repoInfo_,e,(r,i,s,o)=>{Sf(t,r,i,s,o)},r=>{Ef(t,r)},r=>{_I(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=ZC(t.repoInfo_,()=>new XS(t.stats_,t.server_)),t.infoData_=new GS,t.infoSyncTree_=new vf({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=xl(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),ud(t,"connected",!1),t.serverSyncTree_=new vf({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Bt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function mI(t){const n=t.infoData_.getNode(new G(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ad(t){return YE({timestamp:mI(t)})}function Sf(t,e,n,r,i){t.dataUpdateCount++;const s=new G(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=jo(n,u=>ve(u));o=$E(t.serverSyncTree_,s,a,i)}else{const a=ve(n);o=VE(t.serverSyncTree_,s,a,i)}else if(r){const a=jo(n,u=>ve(u));o=BE(t.serverSyncTree_,s,a)}else{const a=ve(n);o=xl(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Nl(t,s)),Bt(t.eventQueue_,l,o)}function Ef(t,e){ud(t,"connected",e),e===!1&&vI(t)}function _I(t,e){Be(e,(n,r)=>{ud(t,n,r)})}function ud(t,e,n){const r=new G("/.info/"+e),i=ve(n);t.infoData_.updateSnapshot(r,i);const s=xl(t.infoSyncTree_,r,i);Bt(t.eventQueue_,r,s)}function A_(t){return t.nextWriteId_++}function yI(t,e,n,r,i){cd(t,"set",{path:e.toString(),value:n,priority:r});const s=ad(t),o=ve(n,r),l=Xc(t.serverSyncTree_,e),a=S_(o,l,s),u=A_(t),c=y_(t.serverSyncTree_,e,a,u,!0);ld(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(h,y)=>{const w=h==="ok";w||Ue("set at "+e+" failed: "+h);const C=bn(t.serverSyncTree_,u,!w);Bt(t.eventQueue_,e,C),SI(t,i,h,y)});const d=b_(t,e);Nl(t,d),Bt(t.eventQueue_,d,[])}function vI(t){cd(t,"onDisconnectEvents");const e=ad(t),n=Vo();Su(t.onDisconnect_,H(),(i,s)=>{const o=ZE(i,s,t.serverSyncTree_,e);i_(n,i,o)});let r=[];Su(n,H(),(i,s)=>{r=r.concat(xl(t.serverSyncTree_,i,s));const o=b_(t,i);Nl(t,o)}),t.onDisconnect_=Vo(),Bt(t.eventQueue_,H(),r)}function wI(t,e,n){let r;F(e._path)===".info"?r=wf(t.infoSyncTree_,e,n):r=wf(t.serverSyncTree_,e,n),N_(t.eventQueue_,e._path,r)}function If(t,e,n){let r;F(e._path)===".info"?r=Ru(t.infoSyncTree_,e,n):r=Ru(t.serverSyncTree_,e,n),N_(t.eventQueue_,e._path,r)}function CI(t){t.persistentConnection_&&t.persistentConnection_.interrupt(hI)}function cd(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ke(n,...e)}function SI(t,e,n,r){e&&Zr(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function D_(t,e,n){return Xc(t.serverSyncTree_,e,n)||L.EMPTY_NODE}function dd(t,e=t.transactionQueueTree_){if(e||Pl(t,e),ei(e)){const n=L_(t,e);k(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&EI(t,vs(e),n)}else I_(e)&&Rl(e,n=>{dd(t,n)})}function EI(t,e,n){const r=n.map(u=>u.currentWriteId),i=D_(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];k(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=Me(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{cd(t,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(bn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Pl(t,sd(t.transactionQueueTree_,e)),dd(t,t.transactionQueueTree_),Bt(t.eventQueue_,e,c);for(let h=0;h<d.length;h++)Zr(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Ue("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Nl(t,e)}},o)}function Nl(t,e){const n=O_(t,e),r=vs(n),i=L_(t,n);return II(t,i,r),r}function II(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Me(n,a.path);let c=!1,d;if(k(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,d=a.abortReason,i=i.concat(bn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=fI)c=!0,d="maxretry",i=i.concat(bn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=D_(t,a.path,o);a.currentInputSnapshot=h;const y=e[l].update(h.val());if(y!==void 0){od("transaction failed: Data returned ",y,a.path);let w=ve(y);typeof y=="object"&&y!=null&&Vt(y,".priority")||(w=w.updatePriority(h.getPriority()));const O=a.currentWriteId,g=ad(t),p=S_(w,h,g);a.currentOutputSnapshotRaw=w,a.currentOutputSnapshotResolved=p,a.currentWriteId=A_(t),o.splice(o.indexOf(O),1),i=i.concat(y_(t.serverSyncTree_,a.path,p,a.currentWriteId,a.applyLocally)),i=i.concat(bn(t.serverSyncTree_,O,!0))}else c=!0,d="nodata",i=i.concat(bn(t.serverSyncTree_,a.currentWriteId,!0))}Bt(t.eventQueue_,n,i),i=[],c&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}Pl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Zr(r[l]);dd(t,t.transactionQueueTree_)}function O_(t,e){let n,r=t.transactionQueueTree_;for(n=F(e);n!==null&&ei(r)===void 0;)r=sd(r,n),e=K(e),n=F(e);return r}function L_(t,e){const n=[];return M_(t,e,n),n.sort((r,i)=>r.order-i.order),n}function M_(t,e,n){const r=ei(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Rl(e,i=>{M_(t,i,n)})}function Pl(t,e){const n=ei(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,E_(e,n.length>0?n:void 0)}Rl(e,r=>{Pl(t,r)})}function b_(t,e){const n=vs(O_(t,e)),r=sd(t.transactionQueueTree_,e);return tI(r,i=>{ma(t,i)}),ma(t,r),k_(r,i=>{ma(t,i)}),n}function ma(t,e){const n=ei(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(bn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?E_(e,void 0):n.length=s+1,Bt(t.eventQueue_,vs(e),i);for(let o=0;o<r.length;o++)Zr(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function xI(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ue(`Invalid query segment '${n}' in query '${t}'`)}return e}const kf=function(t,e){const n=TI(t),r=n.namespace;n.domain==="firebase.com"&&Ut(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Ut("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||zC();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new zm(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new G(n.pathString)}},TI=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=kI(t.substring(c,d)));const h=xI(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const y=e.slice(0,u);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const w=e.indexOf(".");r=e.substring(0,w).toLowerCase(),n=e.substring(w+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+me(this.snapshot.exportVal())}}class NI{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return z(this._path)?null:Qm(this._path)}get ref(){return new In(this._repo,this._path)}get _queryIdentifier(){const e=af(this._queryParams),n=Mc(e);return n==="{}"?"default":n}get _queryObject(){return af(this._queryParams)}isEqual(e){if(e=Qe(e),!(e instanceof hd))return!1;const n=this._repo===e._repo,r=zc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+SS(this._path)}}class In extends hd{constructor(e,n){super(e,n,new Hc,!1)}get parent(){const e=Ym(this._path);return e===null?null:new In(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Jo{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new G(e),r=Pu(this.ref,e);return new Jo(this._node.getChild(n),r,oe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Jo(i,Pu(this.ref,r),oe)))}hasChild(e){const n=new G(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function xf(t,e){return t=Qe(t),t._checkNotDeleted("ref"),Pu(t._root,e)}function Pu(t,e){return t=Qe(t),F(t._path)===null?lI("child","path",e):R_("child","path",e),new In(t._repo,de(t._path,e))}function Tf(t,e){t=Qe(t),aI("set",t._path),oI("set",e,t._path);const n=new Cl;return yI(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class fd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new RI("value",this,new Jo(e.snapshotNode,new In(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new NI(this,e,n):null}matches(e){return e instanceof fd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function AI(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(c,d)=>{If(t._repo,t,l),a(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new PI(n,s||void 0),l=new fd(o);return wI(t._repo,t,l),()=>If(t._repo,t,l)}function DI(t,e,n,r){return AI(t,"value",e,n,r)}DE(In);jE(In);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI="FIREBASE_DATABASE_EMULATOR_HOST",Au={};let LI=!1;function MI(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=ps(s);t.repoInfo_=new zm(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function bI(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Ut("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ke("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=kf(s,i),l=o.repoInfo,a;typeof process<"u"&&Hh&&(a=Hh[OI]),a?(s=`http://${a}?ns=${l.namespace}`,o=kf(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new YC(t.name,t.options,e);uI("Invalid Firebase Database URL",o),z(o.path)||Ut("Database URL must point to the root of a Firebase Database (not including a child path).");const c=jI(l,t,u,new qC(t,n));return new zI(c,t)}function FI(t,e){const n=Au[e];(!n||n[t.key]!==t)&&Ut(`Database ${e}(${t.repoInfo_}) has already been deleted.`),CI(t),delete n[t.key]}function jI(t,e,n,r){let i=Au[e.name];i||(i={},Au[e.name]=i);let s=i[t.toURLString()];return s&&Ut("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new pI(t,LI,n,r),i[t.toURLString()]=s,s}class zI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(gI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new In(this._repo,H())),this._rootInternal}_delete(){return this._rootInternal!==null&&(FI(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ut("Cannot call "+e+" on a deleted database.")}}function UI(t=Cm(),e){const n=Lc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=s0("database");r&&BI(n,...r)}return n}function BI(t,e,n,r={}){t=Qe(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Vn(r,s.repoInfo_.emulatorOptions))return;Ut("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&Ut('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new oo(oo.OWNER);else if(r.mockUserToken){const l=typeof r.mockUserToken=="string"?r.mockUserToken:o0(r.mockUserToken,t.app.options.projectId);o=new oo(l)}ps(e)&&_m(e),MI(s,i,r,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(t){OC(Xr),Br(new $n("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return bI(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),fn(Vh,$h,t),fn(Vh,$h,"esm2020")}Lt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Lt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};WI();function F_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HI=F_,j_=new fs("auth","Firebase",F_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=new Dc("@firebase/auth");function VI(t,...e){Zo.logLevel<=$.WARN&&Zo.warn(`Auth (${Xr}): ${t}`,...e)}function lo(t,...e){Zo.logLevel<=$.ERROR&&Zo.error(`Auth (${Xr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t,...e){throw gd(t,...e)}function Ct(t,...e){return gd(t,...e)}function pd(t,e,n){const r={...HI(),[e]:n};return new fs("auth","Firebase",r).create(e,{appName:t.name})}function gn(t){return pd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $I(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Et(t,"argument-error"),pd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function gd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return j_.create(t,...e)}function M(t,e,...n){if(!t)throw gd(e,...n)}function At(t){const e="INTERNAL ASSERTION FAILED: "+t;throw lo(e),new Error(e)}function Wt(t,e){t||At(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function GI(){return Rf()==="http:"||Rf()==="https:"}function Rf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(GI()||a0()||"connection"in navigator)?navigator.onLine:!0}function QI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wt(n>e,"Short delay should be less than long delay!"),this.isMobile=Pc()||gm()}get(){return KI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(t,e){Wt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;At("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;At("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;At("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],XI=new ws(3e4,6e4);function _d(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ti(t,e,n,r,i={}){return U_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Yr({key:t.config.apiKey,...o}).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:a,...s};return l0()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&ps(t.emulatorConfig.host)&&(u.credentials="include"),z_.fetch()(await B_(t,t.config.apiHost,n,l),u)})}async function U_(t,e,n){t._canInitEmulator=!1;const r={...qI,...e};try{const i=new ZI(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Gs(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gs(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Gs(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Gs(t,"user-disabled",o);const c=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw pd(t,c,u);Et(t,c)}}catch(i){if(i instanceof En)throw i;Et(t,"network-request-failed",{message:String(i)})}}async function JI(t,e,n,r,i={}){const s=await ti(t,e,n,r,i);return"mfaPendingCredential"in s&&Et(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function B_(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?md(t.config,i):`${t.config.apiScheme}://${i}`;return YI.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class ZI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ct(this.auth,"network-request-failed")),XI.get())})}}function Gs(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ct(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ek(t,e){return ti(t,"POST","/v1/accounts:delete",e)}async function el(t,e){return ti(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tk(t,e=!1){const n=Qe(t),r=await n.getIdToken(e),i=yd(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Mi(_a(i.auth_time)),issuedAtTime:Mi(_a(i.iat)),expirationTime:Mi(_a(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function _a(t){return Number(t)*1e3}function yd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return lo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Fo(n);return i?JSON.parse(i):(lo("Failed to decode base64 JWT payload"),null)}catch(i){return lo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Nf(t){const e=yd(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ls(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof En&&nk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mi(this.lastLoginAt),this.creationTime=Mi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tl(t){var d;const e=t.auth,n=await t.getIdToken(),r=await ls(t,el(e,{idToken:n}));M(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(d=i.providerUserInfo)!=null&&d.length?W_(i.providerUserInfo):[],o=sk(t.providerData,s),l=t.isAnonymous,a=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),u=l?a:!1,c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Ou(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,c)}async function ik(t){const e=Qe(t);await tl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function W_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ok(t,e){const n=await U_(t,{},async()=>{const r=Yr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await B_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const a={method:"POST",headers:l,body:r};return t.emulatorConfig&&ps(t.emulatorConfig.host)&&(a.credentials="include"),z_.fetch()(o,a)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function lk(t,e){return ti(t,"POST","/v2/accounts:revokeToken",_d(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Nf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){M(e.length!==0,"internal-error");const n=Nf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await ok(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Pr;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pr,this.toJSON())}_performRefresh(){return At("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class dt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new rk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ou(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ls(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tk(this,e)}reload(){return ik(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new dt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await tl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(lt(this.auth.app))return Promise.reject(gn(this.auth));const e=await this.getIdToken();return await ls(this,ek(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,a=n._redirectEventId??void 0,u=n.createdAt??void 0,c=n.lastLoginAt??void 0,{uid:d,emailVerified:h,isAnonymous:y,providerData:w,stsTokenManager:C}=n;M(d&&C,e,"internal-error");const O=Pr.fromJSON(this.name,C);M(typeof d=="string",e,"internal-error"),Gt(r,e.name),Gt(i,e.name),M(typeof h=="boolean",e,"internal-error"),M(typeof y=="boolean",e,"internal-error"),Gt(s,e.name),Gt(o,e.name),Gt(l,e.name),Gt(a,e.name),Gt(u,e.name),Gt(c,e.name);const g=new dt({uid:d,auth:e,email:i,emailVerified:h,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:O,createdAt:u,lastLoginAt:c});return w&&Array.isArray(w)&&(g.providerData=w.map(p=>({...p}))),a&&(g._redirectEventId=a),g}static async _fromIdTokenResponse(e,n,r=!1){const i=new Pr;i.updateFromServerResponse(n);const s=new dt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await tl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];M(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?W_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Pr;l.updateFromIdToken(r);const a=new dt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ou(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,u),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=new Map;function Dt(t){Wt(t instanceof Function,"Expected a class definition");let e=Pf.get(t);return e?(Wt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}H_.type="NONE";const Af=H_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(t,e,n){return`firebase:${t}:${e}:${n}`}class Ar{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ao(this.userKey,i.apiKey,s),this.fullPersistenceKey=ao("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await el(this.auth,{idToken:e}).catch(()=>{});return n?dt._fromGetAccountInfoResponse(this.auth,n,e):null}return dt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ar(Dt(Af),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Dt(Af);const o=ao(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const c=await u._get(o);if(c){let d;if(typeof c=="string"){const h=await el(e,{idToken:c}).catch(()=>{});if(!h)break;d=await dt._fromGetAccountInfoResponse(e,h,c)}else d=dt._fromJSON(e,c);u!==s&&(l=d),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Ar(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ar(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(K_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(V_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(q_(e))return"Blackberry";if(Y_(e))return"Webos";if($_(e))return"Safari";if((e.includes("chrome/")||G_(e))&&!e.includes("edge/"))return"Chrome";if(Q_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function V_(t=Pe()){return/firefox\//i.test(t)}function $_(t=Pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function G_(t=Pe()){return/crios\//i.test(t)}function K_(t=Pe()){return/iemobile/i.test(t)}function Q_(t=Pe()){return/android/i.test(t)}function q_(t=Pe()){return/blackberry/i.test(t)}function Y_(t=Pe()){return/webos/i.test(t)}function vd(t=Pe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ak(t=Pe()){var e;return vd(t)&&!!((e=window.navigator)!=null&&e.standalone)}function uk(){return u0()&&document.documentMode===10}function X_(t=Pe()){return vd(t)||Q_(t)||Y_(t)||q_(t)||/windows phone/i.test(t)||K_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_(t,e=[]){let n;switch(t){case"Browser":n=Df(Pe());break;case"Worker":n=`${Df(Pe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dk(t,e={}){return ti(t,"GET","/v2/passwordPolicy",_d(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk=6;class fk{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??hk,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Of(this),this.idTokenSubscription=new Of(this),this.beforeStateQueue=new ck(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=j_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Dt(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Ar.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await el(this,{idToken:e}),r=await dt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(lt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await tl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=QI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(lt(this.app))return Promise.reject(gn(this));const n=e?Qe(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return lt(this.app)?Promise.reject(gn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return lt(this.app)?Promise.reject(gn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dk(this),n=new fk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await lk(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Dt(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await Ar.create(this,[Dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=J_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(lt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&VI(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Cs(t){return Qe(t)}class Of{constructor(e){this.auth=e,this.observer=null,this.addObserver=v0(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gk(t){wd=t}function mk(t){return wd.loadJS(t)}function _k(){return wd.gapiScript}function yk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vk(t,e){const n=Lc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Vn(s,e??{}))return i;Et(i,"already-initialized")}return n.initialize({options:e})}function wk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Dt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ck(t,e,n){const r=Cs(t);M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Z_(e),{host:o,port:l}=Sk(e),a=l===null?"":`:${l}`,u={url:`${s}//${o}${a}/`},c=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){M(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),M(Vn(u,r.config.emulator)&&Vn(c,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=c,r.settings.appVerificationDisabledForTesting=!0,ps(o)?_m(`${s}//${o}${a}`):Ek()}function Z_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Sk(t){const e=Z_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Lf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Lf(o)}}}function Lf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ek(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return At("not implemented")}_getIdTokenResponse(e){return At("not implemented")}_linkToIdToken(e,n){return At("not implemented")}_getReauthenticationResolver(e){return At("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dr(t,e){return JI(t,"POST","/v1/accounts:signInWithIdp",_d(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik="http://localhost";class Yn extends ey{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Yn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Dr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Dr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Dr(e,n)}buildRequest(){const e={requestUri:Ik,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Yr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss extends Cd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends Ss{constructor(){super("facebook.com")}static credential(e){return Yn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch{return null}}}Xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends Ss{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yn._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Tt.credential(n,r)}catch{return null}}}Tt.GOOGLE_SIGN_IN_METHOD="google.com";Tt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Ss{constructor(){super("github.com")}static credential(e){return Yn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jt.credential(e.oauthAccessToken)}catch{return null}}}Jt.GITHUB_SIGN_IN_METHOD="github.com";Jt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Ss{constructor(){super("twitter.com")}static credential(e,n){return Yn._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zt.credential(n,r)}catch{return null}}}Zt.TWITTER_SIGN_IN_METHOD="twitter.com";Zt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await dt._fromIdTokenResponse(e,r,i),o=Mf(r);return new $r({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Mf(r);return new $r({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Mf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl extends En{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,nl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new nl(e,n,r,i)}}function ty(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?nl._fromErrorAndOperation(t,s,e,r):s})}async function kk(t,e,n=!1){const r=await ls(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $r._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xk(t,e,n=!1){const{auth:r}=t;if(lt(r.app))return Promise.reject(gn(r));const i="reauthenticate";try{const s=await ls(t,ty(r,i,e,t),n);M(s.idToken,r,"internal-error");const o=yd(s.idToken);M(o,r,"internal-error");const{sub:l}=o;return M(t.uid===l,r,"user-mismatch"),$r._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Et(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tk(t,e,n=!1){if(lt(t.app))return Promise.reject(gn(t));const r="signIn",i=await ty(t,r,e),s=await $r._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function Rk(t,e,n,r){return Qe(t).onIdTokenChanged(e,n,r)}function Nk(t,e,n){return Qe(t).beforeAuthStateChanged(e,n)}function Pk(t,e,n,r){return Qe(t).onAuthStateChanged(e,n,r)}function Ak(t){return Qe(t).signOut()}const rl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(rl,"1"),this.storage.removeItem(rl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk=1e3,Ok=10;class ry extends ny{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=X_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);uk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ok):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Dk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ry.type="LOCAL";const Lk=ry;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy extends ny{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}iy.type="SESSION";const sy=iy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Al(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await Mk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Al.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Sd("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return window}function Fk(t){St().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(){return typeof St().WorkerGlobalScope<"u"&&typeof St().importScripts=="function"}async function jk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Uk(){return oy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly="firebaseLocalStorageDb",Bk=1,il="firebaseLocalStorage",ay="fbase_key";class Es{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Dl(t,e){return t.transaction([il],e?"readwrite":"readonly").objectStore(il)}function Wk(){const t=indexedDB.deleteDatabase(ly);return new Es(t).toPromise()}function uy(){const t=indexedDB.open(ly,Bk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(il,{keyPath:ay})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(il)?e(r):(r.close(),await Wk(),e(await uy()))})})}async function bf(t,e,n){const r=Dl(t,!0).put({[ay]:e,value:n});return new Es(r).toPromise()}async function Hk(t,e){const n=Dl(t,!1).get(e),r=await new Es(n).toPromise();return r===void 0?null:r.value}function Ff(t,e){const n=Dl(t,!0).delete(e);return new Es(n).toPromise()}const Vk=800,$k=3;class cy{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=uy(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>$k)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return oy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Al._getInstance(Uk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await jk(),!this.activeServiceWorker)return;this.sender=new bk(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await bf(e,rl,"1"),await Ff(e,rl)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>bf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Hk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ff(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Dl(i,!1).getAll();return new Es(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Vk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cy.type="LOCAL";const Gk=cy;new ws(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(t,e){return e?Dt(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed extends ey{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Dr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Dr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Dr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Kk(t){return Tk(t.auth,new Ed(t),t.bypassAuthState)}function Qk(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),xk(n,new Ed(t),t.bypassAuthState)}async function qk(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),kk(n,new Ed(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Kk;case"linkViaPopup":case"linkViaRedirect":return qk;case"reauthViaPopup":case"reauthViaRedirect":return Qk;default:Et(this.auth,"internal-error")}}resolve(e){Wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk=new ws(2e3,1e4);class wr extends hy{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,wr.currentPopupAction&&wr.currentPopupAction.cancel(),wr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){Wt(this.filter.length===1,"Popup operations only handle one event");const e=Sd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Yk.get())};e()}}wr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk="pendingRedirect",uo=new Map;class Jk extends hy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=uo.get(this.auth._key());if(!e){try{const r=await Zk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}uo.set(this.auth._key(),e)}return this.bypassAuthState||uo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Zk(t,e){const n=py(e),r=fy(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function e1(t,e){return fy(t)._set(py(e),"true")}function t1(t,e){uo.set(t._key(),e)}function fy(t){return Dt(t._redirectPersistence)}function py(t){return ao(Xk,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(t,e,n){return r1(t,e,n)}async function r1(t,e,n){if(lt(t.app))return Promise.reject(gn(t));const r=Cs(t);$I(t,e,Cd),await r._initializationPromise;const i=dy(r,n);return await e1(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function i1(t,e){return await Cs(t)._initializationPromise,gy(t,e,!1)}async function gy(t,e,n=!1){if(lt(t.app))return Promise.reject(gn(t));const r=Cs(t),i=dy(r,e),o=await new Jk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1=10*60*1e3;class o1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!l1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!my(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ct(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=s1&&this.cachedEventUids.clear(),this.cachedEventUids.has(jf(e))}saveEventToCache(e){this.cachedEventUids.add(jf(e)),this.lastProcessedEventTime=Date.now()}}function jf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function my({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function l1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return my(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a1(t,e={}){return ti(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,c1=/^https?/;async function d1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await a1(t);for(const n of e)try{if(h1(n))return}catch{}Et(t,"unauthorized-domain")}function h1(t){const e=Du(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!c1.test(n))return!1;if(u1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1=new ws(3e4,6e4);function zf(){const t=St().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function p1(t){return new Promise((e,n)=>{var i,s,o;function r(){zf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zf(),n(Ct(t,"network-request-failed"))},timeout:f1.get()})}if((s=(i=St().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=St().gapi)!=null&&o.load)r();else{const l=yk("iframefcb");return St()[l]=()=>{gapi.load?r():n(Ct(t,"network-request-failed"))},mk(`${_k()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw co=null,e})}let co=null;function g1(t){return co=co||p1(t),co}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1=new ws(5e3,15e3),_1="__/auth/iframe",y1="emulator/auth/iframe",v1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},w1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function C1(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?md(e,y1):`https://${t.config.authDomain}/${_1}`,r={apiKey:e.apiKey,appName:t.name,v:Xr},i=w1.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Yr(r).slice(1)}`}async function S1(t){const e=await g1(t),n=St().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:C1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:v1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ct(t,"network-request-failed"),l=St().setTimeout(()=>{s(o)},m1.get());function a(){St().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},I1=500,k1=600,x1="_blank",T1="http://localhost";class Uf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function R1(t,e,n,r=I1,i=k1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a={...E1,width:r.toString(),height:i.toString(),top:s,left:o},u=Pe().toLowerCase();n&&(l=G_(u)?x1:n),V_(u)&&(e=e||T1,a.scrollbars="yes");const c=Object.entries(a).reduce((h,[y,w])=>`${h}${y}=${w},`,"");if(ak(u)&&l!=="_self")return N1(e||"",l),new Uf(null);const d=window.open(e||"",l,c);M(d,t,"popup-blocked");try{d.focus()}catch{}return new Uf(d)}function N1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1="__/auth/handler",A1="emulator/auth/handler",D1=encodeURIComponent("fac");async function Bf(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Xr,eventId:i};if(e instanceof Cd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries({}))o[c]=d}if(e instanceof Ss){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const c of Object.keys(l))l[c]===void 0&&delete l[c];const a=await t._getAppCheckToken(),u=a?`#${D1}=${encodeURIComponent(a)}`:"";return`${O1(t)}?${Yr(l).slice(1)}${u}`}function O1({config:t}){return t.emulator?md(t,A1):`https://${t.authDomain}/${P1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya="webStorageSupport";class L1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sy,this._completeRedirectFn=gy,this._overrideRedirectResult=t1}async _openPopup(e,n,r,i){var o;Wt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Bf(e,n,r,Du(),i);return R1(e,s,Sd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Bf(e,n,r,Du(),i);return Fk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Wt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await S1(e),r=new o1(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ya,{type:ya},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[ya];s!==void 0&&n(!!s),Et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=d1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return X_()||$_()||vd()}}const M1=L1;var Wf="@firebase/auth",Hf="1.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function j1(t){Br(new $n("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:J_(t)},u=new pk(r,i,s,a);return wk(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Br(new $n("auth-internal",e=>{const n=Cs(e.getProvider("auth").getImmediate());return(r=>new b1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fn(Wf,Hf,F1(t)),fn(Wf,Hf,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1=5*60,U1=pm("authIdTokenMaxAge")||z1;let Vf=null;const B1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>U1)return;const i=n==null?void 0:n.token;Vf!==i&&(Vf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function W1(t=Cm()){const e=Lc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=vk(t,{popupRedirectResolver:M1,persistence:[Gk,Lk,sy]}),r=pm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=B1(s.toString());Nk(n,o,()=>o(n.currentUser)),Rk(n,l=>o(l))}}const i=hm("auth");return i&&Ck(n,`http://${i}`),n}function H1(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}gk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ct("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",H1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});j1("Browser");const V1={apiKey:"AIzaSyC_PyhOAYkErvH87y8FHfizZgGEfPWQHKQ",authDomain:"pet-health-book-de9d1.firebaseapp.com",databaseURL:"https://pet-health-book-f8fe5-default-rtdb.firebaseio.com",projectId:"pet-health-book-de9d1",storageBucket:"pet-health-book-de9d1.firebasestorage.app",messagingSenderId:"6969550051",appId:"1:6969550051:web:afbf58dd0eff9a7dcd91d6"},_y=wm(V1),$f=UI(_y),Ks=W1(_y),$1=new Tt,Ye={診察:"🏥",ワクチン:"💉",薬:"💊",体重:"⚖️",フード:"🍖",その他:"📝"},An={診察:"#EF4444",ワクチン:"#8B5CF6",薬:"#3B82F6",体重:"#10B981",フード:"#F59E0B",その他:"#6B7280"},gi={猫:"🐱",犬:"🐶",うさぎ:"🐰",ハムスター:"🐹",鳥:"🐦",魚:"🐠",その他:"🐾"},va={pets:[{id:1,name:"じゅうべい",species:"猫",breed:"",birthdate:"",color:"#C49A6C",icon:"🐱"}],records:[],nextPetId:2,nextRecordId:1},Gf="pet-health-book/data";function Kf(t){if(!t)return"";const e=new Date(t),n=new Date,r=n.getFullYear()-e.getFullYear(),i=n.getMonth()-e.getMonth(),s=r*12+i;return s<12?`${s}ヶ月`:`${Math.floor(s/12)}歳${s%12>0?s%12+"ヶ月":""}`}function G1(){var er;const[t,e]=ie.useState("loading"),[n,r]=ie.useState(null),[i,s]=ie.useState(!1),[o,l]=ie.useState("home"),[a,u]=ie.useState(null),[c,d]=ie.useState({}),[h,y]=ie.useState({}),[w,C]=ie.useState("すべて"),[O,g]=ie.useState(""),[p,_]=ie.useState([]),[S,R]=ie.useState(!1);ie.useEffect(()=>{i1(Ks).catch(v=>console.error("redirect result error:",v));const m=Pk(Ks,v=>{e(v)});return()=>m()},[]),ie.useEffect(()=>{const m=xf($f,Gf),v=DI(m,x=>{const B=x.val();if(B){const Z={...B,pets:B.pets?Array.isArray(B.pets)?B.pets:Object.values(B.pets):[],records:B.records?Array.isArray(B.records)?B.records:Object.values(B.records):[]};r(Z)}else Tf(m,va),r(va)},x=>{console.error("Firebase sync error:",x),E("⚠️ 同期エラー。オフラインで動作中"),r(va)});return()=>v()},[]);function A(m){s(!0);const v=xf($f,Gf);Tf(v,m).then(()=>s(!1)).catch(x=>{console.error("Save error:",x),s(!1),E("⚠️ 保存に失敗しました")})}function N(m){r(v=>{if(!v)return v;const x=m(v);return A(x),x})}const E=m=>{g(m),setTimeout(()=>g(""),2500)};if(t==="loading")return f.jsxs("div",{style:{minHeight:"100vh",background:"#FDF6EE",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:16},children:[f.jsx("div",{style:{fontSize:48},children:"🐾"}),f.jsx("div",{style:{color:"#9A7A5C",fontSize:16},children:"読み込み中..."})]});if(!t)return f.jsx("div",{style:{minHeight:"100vh",background:"#FDF6EE",display:"flex",alignItems:"center",justifyContent:"center",padding:24},children:f.jsxs("div",{style:{background:"#FFF",borderRadius:24,padding:"40px 32px",maxWidth:360,width:"100%",textAlign:"center",boxShadow:"0 4px 24px rgba(0,0,0,0.08)"},children:[f.jsx("div",{style:{fontSize:64,marginBottom:16},children:"🐾"}),f.jsx("h1",{style:{fontSize:24,fontWeight:700,color:"#3D2B1A",margin:"0 0 8px"},children:"ペット健康手帳"}),f.jsxs("p",{style:{color:"#9A7A5C",fontSize:14,margin:"0 0 32px",lineHeight:1.6},children:["大切な家族の健康を記録しよう。",f.jsx("br",{}),"Googleアカウントでログインしてください。"]}),f.jsxs("button",{onClick:()=>n1(Ks,$1),style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,width:"100%",background:"#FFF",border:"1.5px solid #E0D5C8",borderRadius:12,padding:"14px 20px",fontSize:15,fontWeight:600,color:"#3D2B1A",cursor:"pointer",boxShadow:"0 2px 8px rgba(0,0,0,0.06)"},children:[f.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 48 48",children:[f.jsx("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),f.jsx("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),f.jsx("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),f.jsx("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"})]}),"Googleでログイン"]}),f.jsx("p",{style:{color:"#BBA08A",fontSize:12,marginTop:20},children:"ログインした方のみデータにアクセスできます"})]})});if(!n)return f.jsxs("div",{style:{minHeight:"100vh",background:"#FDF6EE",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:16},children:[f.jsx("div",{style:{fontSize:48},children:"🐾"}),f.jsx("div",{style:{color:"#9A7A5C",fontSize:16},children:"データを読み込み中..."})]});const P=n.pets.find(m=>m.id===a)??null,b=n.records.filter(m=>m.petId===a).filter(m=>w==="すべて"||m.category===w).sort((m,v)=>v.date.localeCompare(m.date));function ue(){const m={id:n.nextPetId,name:c.name||"名前未設定",species:c.species||"その他",breed:c.breed||"",birthdate:c.birthdate||"",color:c.color||"#C49A6C",icon:gi[c.species||""]||"🐾",photo:c.photo||"",weight:c.weight||"",microchip:c.microchip||"",insurance:c.insurance||"",vet:c.vet||"",notes:c.notes||""};N(v=>({...v,pets:[...v.pets,m],nextPetId:v.nextPetId+1})),E(`${m.name}を追加しました 🎉`),l("home")}function kn(){N(m=>({...m,pets:m.pets.map(v=>v.id===a?{...v,...c,icon:gi[c.species||v.species]||v.icon,photo:c.photo??v.photo}:v)})),E("プロフィールを更新しました ✅"),l("petDetail")}function xn(m){confirm("このペットと全記録を削除しますか？")&&(N(v=>({...v,pets:v.pets.filter(x=>x.id!==m),records:v.records.filter(x=>x.petId!==m)})),l("home"),E("削除しました"))}function Is(){const m={id:n.nextRecordId,petId:a,date:h.date||new Date().toISOString().slice(0,10),category:h.category||"その他",title:h.title||"記録",description:h.description||"",weight:h.weight||"",nextDate:h.nextDate||""};N(v=>({...v,records:[...v.records,m],nextRecordId:v.nextRecordId+1})),E("記録を追加しました 📝"),l("recordList")}function ks(m){N(v=>({...v,records:v.records.filter(x=>x.id!==m)})),E("記録を削除しました")}function ni(){N(m=>({...m,records:m.records.map(v=>v.id===h.id?{...v,...h}:v)})),E("記録を更新しました ✅"),l("recordList")}if(o==="home")return f.jsxs(sr,{children:[f.jsxs("div",{style:T.header,children:[f.jsx("div",{style:T.logo,children:"🐾"}),f.jsx("h1",{style:T.title,children:"ペット健康手帳"}),f.jsx("p",{style:T.subtitle,children:"大切な家族の健康を記録しよう"}),i&&f.jsx("div",{style:T.syncBadge,children:"☁️ 同期中..."}),f.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,marginTop:12},children:[t.photoURL&&f.jsx("img",{src:t.photoURL,alt:"avatar",style:{width:28,height:28,borderRadius:"50%"}}),f.jsx("span",{style:{fontSize:13,color:"#9A7A5C"},children:t.displayName||t.email}),f.jsx("button",{onClick:()=>Ak(Ks),style:{background:"none",border:"1px solid #E8D5BC",borderRadius:20,padding:"3px 12px",fontSize:12,color:"#9A7A5C",cursor:"pointer"},children:"ログアウト"})]})]}),f.jsxs("div",{style:T.petGrid,children:[n.pets.map(m=>f.jsxs("button",{style:T.petCard,onClick:()=>{u(m.id),l("petDetail")},children:[f.jsx("div",{style:{...T.petCardIcon,background:m.color+"33",overflow:"hidden"},children:m.photo?f.jsx("img",{src:m.photo,alt:m.name,style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"50%"}}):f.jsx("span",{style:{fontSize:40},children:m.icon})}),f.jsx("div",{style:T.petCardName,children:m.name}),f.jsxs("div",{style:T.petCardSub,children:[m.species,m.breed?` / ${m.breed}`:""]}),m.birthdate&&f.jsx("div",{style:T.petCardAge,children:Kf(m.birthdate)}),f.jsxs("div",{style:T.petCardRecords,children:["記録 ",n.records.filter(v=>v.petId===m.id).length,"件"]})]},m.id)),f.jsxs("button",{style:T.addPetCard,onClick:()=>{d({}),l("addPet")},children:[f.jsx("span",{style:{fontSize:32},children:"➕"}),f.jsx("div",{style:{marginTop:8,fontWeight:600,color:"#C49A6C"},children:"ペットを追加"})]})]}),f.jsx(or,{message:O})]});if(o==="petDetail"&&P)return f.jsxs(sr,{children:[f.jsx(mi,{onClick:()=>l("home")}),f.jsxs("div",{style:{...T.petBanner,background:`linear-gradient(135deg, ${P.color}44, ${P.color}22)`},children:[P.photo?f.jsx("img",{src:P.photo,alt:P.name,style:{width:80,height:80,borderRadius:"50%",objectFit:"cover",flexShrink:0}}):f.jsx("span",{style:{fontSize:64},children:P.icon}),f.jsxs("div",{children:[f.jsx("h2",{style:{margin:0,fontSize:28,color:"#3D2B1A"},children:P.name}),f.jsxs("div",{style:{color:"#7A5C3A",marginTop:4},children:[P.species,P.breed?` / ${P.breed}`:"",P.birthdate&&f.jsxs("span",{style:{marginLeft:12},children:["🎂 ",Kf(P.birthdate)]})]})]}),f.jsxs("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[f.jsx(Qf,{onClick:()=>{d({...P}),l("editPet")},title:"編集",children:"✏️"}),f.jsx(Qf,{onClick:()=>xn(P.id),title:"削除",danger:!0,children:"🗑️"})]})]}),f.jsxs("div",{style:T.infoGrid,children:[f.jsx(q1,{records:n.records,petId:P.id}),f.jsx(Q1,{pet:P,onSave:m=>{N(v=>({...v,pets:v.pets.map(x=>x.id===P.id?{...x,...m}:x)})),E("病院情報を更新しました ✅")}}),[{label:"マイクロチップ",value:P.microchip||"—"},{label:"保険",value:P.insurance||"—"}].map(m=>f.jsxs("div",{style:T.infoCard,children:[f.jsx("div",{style:T.infoLabel,children:m.label}),f.jsx("div",{style:T.infoValue,children:m.value})]},m.label))]}),P.notes&&f.jsxs("div",{style:T.notesBox,children:[f.jsx("span",{style:{marginRight:6},children:"📌"}),P.notes]}),f.jsx("div",{style:T.sectionHeader,children:f.jsx("span",{children:"📊 カテゴリ別"})}),f.jsx("div",{style:T.categoryRow,children:Object.keys(Ye).map(m=>{const v=n.records.filter(x=>x.petId===P.id&&x.category===m).length;return f.jsxs("button",{style:T.catChip,onClick:()=>{C(m),l("recordList")},children:[f.jsx("span",{children:Ye[m]}),f.jsx("span",{style:{fontSize:11,color:"#7A5C3A"},children:m}),f.jsx("span",{style:{...T.catCount,background:An[m]},children:v})]},m)})}),f.jsxs("div",{style:T.sectionHeader,children:[f.jsx("span",{children:"📅 カレンダー"}),f.jsx("button",{style:T.linkBtn,onClick:()=>{C("すべて"),l("recordList")},children:"一覧で見る →"})]}),f.jsx(K1,{records:n.records.filter(m=>m.petId===P.id),onDayClick:m=>{m.length!==0&&(_(m),R(!0))}}),f.jsx("div",{style:T.fab,children:f.jsx("button",{style:T.fabBtn,onClick:()=>{y({date:new Date().toISOString().slice(0,10)}),l("addRecord")},children:"＋ 記録を追加"})}),S&&f.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:200,display:"flex",alignItems:"flex-end",justifyContent:"center"},onClick:()=>R(!1),children:f.jsxs("div",{style:{background:"#FDF6EE",borderRadius:"20px 20px 0 0",padding:24,width:"100%",maxWidth:600,maxHeight:"70vh",overflowY:"auto"},onClick:m=>m.stopPropagation(),children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16},children:[f.jsxs("div",{style:{fontWeight:700,fontSize:16,color:"#3D2B1A"},children:["📋 ",(er=p[0])==null?void 0:er.date,"の記録"]}),f.jsx("button",{onClick:()=>R(!1),style:{background:"none",border:"none",fontSize:20,cursor:"pointer",color:"#9A7A5C"},children:"✕"})]}),p.map(m=>f.jsx(qf,{record:m,onDelete:v=>{ks(v),R(!1)},onEdit:v=>{y({...v}),R(!1),l("editRecord")},expanded:!0},m.id))]})}),f.jsx(or,{message:O})]});if(o==="addPet"||o==="editPet"){const m=o==="editPet";return f.jsxs(sr,{children:[f.jsx(mi,{onClick:()=>l(m?"petDetail":"home")}),f.jsx("h2",{style:T.formTitle,children:m?"プロフィール編集":"新しいペットを追加"}),f.jsxs("div",{style:T.form,children:[f.jsx(ee,{label:"アイコン写真",children:f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[f.jsx("div",{style:{width:80,height:80,borderRadius:"50%",background:c.color?c.color+"33":"#C49A6C33",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,border:"2px dashed #C49A6C"},children:c.photo?f.jsx("img",{src:c.photo,alt:"preview",style:{width:"100%",height:"100%",objectFit:"cover"}}):f.jsx("span",{style:{fontSize:36},children:gi[c.species||""]||"🐾"})}),f.jsxs("div",{style:{flex:1},children:[f.jsxs("label",{style:{display:"inline-block",background:"#C49A6C",color:"#FFF",borderRadius:10,padding:"10px 16px",cursor:"pointer",fontSize:14,fontWeight:600},children:["📷 写真を選択",f.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:v=>{var Z;const x=(Z=v.target.files)==null?void 0:Z[0];if(!x)return;const B=new FileReader;B.onload=tr=>{var nr;const Te=new Image;Te.onload=()=>{const qe=document.createElement("canvas"),It=200;qe.width=It,qe.height=It;const yy=qe.getContext("2d"),xs=Math.min(Te.width,Te.height),vy=(Te.width-xs)/2,wy=(Te.height-xs)/2;yy.drawImage(Te,vy,wy,xs,xs,0,0,It,It),d(Cy=>({...Cy,photo:qe.toDataURL("image/jpeg",.7)}))},Te.src=(nr=tr.target)==null?void 0:nr.result},B.readAsDataURL(x)}})]}),c.photo&&f.jsx("button",{style:{display:"block",marginTop:8,background:"none",border:"none",color:"#EF4444",cursor:"pointer",fontSize:13},onClick:()=>d(v=>({...v,photo:""})),children:"🗑️ 写真を削除"})]})]})}),f.jsx(ee,{label:"名前 *",children:f.jsx("input",{style:T.input,value:c.name||"",onChange:v=>d(x=>({...x,name:v.target.value})),placeholder:"例: じゅうべい"})}),f.jsx(ee,{label:"種類",children:f.jsxs("select",{style:T.input,value:c.species||"",onChange:v=>d(x=>({...x,species:v.target.value})),children:[f.jsx("option",{value:"",children:"選択してください"}),Object.keys(gi).map(v=>f.jsxs("option",{value:v,children:[gi[v]," ",v]},v))]})}),f.jsx(ee,{label:"品種",children:f.jsx("input",{style:T.input,value:c.breed||"",onChange:v=>d(x=>({...x,breed:v.target.value})),placeholder:"例: アメリカンショートヘア"})}),f.jsx(ee,{label:"生年月日",children:f.jsx("input",{type:"date",style:T.input,value:c.birthdate||"",onChange:v=>d(x=>({...x,birthdate:v.target.value}))})}),f.jsx(ee,{label:"体重 (kg)",children:f.jsx("input",{type:"number",step:"0.1",style:T.input,value:c.weight||"",onChange:v=>d(x=>({...x,weight:v.target.value})),placeholder:"例: 4.2"})}),f.jsx(ee,{label:"かかりつけ病院",children:f.jsx("input",{style:T.input,value:c.vet||"",onChange:v=>d(x=>({...x,vet:v.target.value})),placeholder:"例: ○○動物病院"})}),f.jsx(ee,{label:"マイクロチップ番号",children:f.jsx("input",{style:T.input,value:c.microchip||"",onChange:v=>d(x=>({...x,microchip:v.target.value}))})}),f.jsx(ee,{label:"ペット保険",children:f.jsx("input",{style:T.input,value:c.insurance||"",onChange:v=>d(x=>({...x,insurance:v.target.value})),placeholder:"例: アニコム"})}),f.jsx(ee,{label:"テーマカラー",children:f.jsx("input",{type:"color",style:{...T.input,height:44,padding:4},value:c.color||"#C49A6C",onChange:v=>d(x=>({...x,color:v.target.value}))})}),f.jsx(ee,{label:"メモ",children:f.jsx("textarea",{style:{...T.input,height:80,resize:"vertical"},value:c.notes||"",onChange:v=>d(x=>({...x,notes:v.target.value})),placeholder:"アレルギー、好き嫌いなど"})}),f.jsx("button",{style:T.primaryBtn,onClick:m?kn:ue,children:m?"✅ 更新する":"🎉 追加する"})]}),f.jsx(or,{message:O})]})}return o==="addRecord"&&P?f.jsxs(sr,{children:[f.jsx(mi,{onClick:()=>l("petDetail")}),f.jsx("h2",{style:T.formTitle,children:"記録を追加"}),f.jsxs("p",{style:{textAlign:"center",color:"#7A5C3A",marginTop:-16,marginBottom:24},children:[P.icon," ",P.name]}),f.jsxs("div",{style:T.form,children:[f.jsx(ee,{label:"日付 *",children:f.jsx("input",{type:"date",style:T.input,value:h.date||"",onChange:m=>y(v=>({...v,date:m.target.value}))})}),f.jsx(ee,{label:"カテゴリ",children:f.jsx("div",{style:T.catSelector,children:Object.keys(Ye).map(m=>f.jsxs("button",{style:{...T.catOption,background:h.category===m?An[m]+"33":"#FFF7EE",border:h.category===m?`2px solid ${An[m]}`:"2px solid transparent"},onClick:()=>y(v=>({...v,category:m})),children:[f.jsx("span",{children:Ye[m]}),f.jsx("span",{style:{fontSize:12},children:m})]},m))})}),f.jsx(ee,{label:"タイトル *",children:f.jsx("input",{style:T.input,value:h.title||"",onChange:m=>y(v=>({...v,title:m.target.value})),placeholder:"例: 年次健診"})}),f.jsx(ee,{label:"詳細メモ",children:f.jsx("textarea",{style:{...T.input,height:100,resize:"vertical"},value:h.description||"",onChange:m=>y(v=>({...v,description:m.target.value})),placeholder:"診断内容、投薬量、気づいたことなど"})}),h.category==="体重"&&f.jsx(ee,{label:"体重 (kg)",children:f.jsx("input",{type:"number",step:"0.1",style:T.input,value:h.weight||"",onChange:m=>y(v=>({...v,weight:m.target.value})),placeholder:"例: 4.2"})}),f.jsx(ee,{label:"次回予定日",children:f.jsx("input",{type:"date",style:T.input,value:h.nextDate||"",onChange:m=>y(v=>({...v,nextDate:m.target.value}))})}),f.jsx("button",{style:T.primaryBtn,onClick:Is,children:"📝 記録する"})]}),f.jsx(or,{message:O})]}):o==="editRecord"&&P?f.jsxs(sr,{children:[f.jsx(mi,{onClick:()=>l("recordList")}),f.jsx("h2",{style:T.formTitle,children:"記録を編集"}),f.jsxs("p",{style:{textAlign:"center",color:"#7A5C3A",marginTop:-16,marginBottom:24},children:[P.icon," ",P.name]}),f.jsxs("div",{style:T.form,children:[f.jsx(ee,{label:"日付 *",children:f.jsx("input",{type:"date",style:T.input,value:h.date||"",onChange:m=>y(v=>({...v,date:m.target.value}))})}),f.jsx(ee,{label:"カテゴリ",children:f.jsx("div",{style:T.catSelector,children:Object.keys(Ye).map(m=>f.jsxs("button",{style:{...T.catOption,background:h.category===m?An[m]+"33":"#FFF7EE",border:h.category===m?`2px solid ${An[m]}`:"2px solid transparent"},onClick:()=>y(v=>({...v,category:m})),children:[f.jsx("span",{children:Ye[m]}),f.jsx("span",{style:{fontSize:12},children:m})]},m))})}),f.jsx(ee,{label:"タイトル *",children:f.jsx("input",{style:T.input,value:h.title||"",onChange:m=>y(v=>({...v,title:m.target.value})),placeholder:"例: 年次健診"})}),f.jsx(ee,{label:"詳細メモ",children:f.jsx("textarea",{style:{...T.input,height:100,resize:"vertical"},value:h.description||"",onChange:m=>y(v=>({...v,description:m.target.value})),placeholder:"診断内容、投薬量、気づいたことなど"})}),h.category==="体重"&&f.jsx(ee,{label:"体重 (kg)",children:f.jsx("input",{type:"number",step:"0.1",style:T.input,value:h.weight||"",onChange:m=>y(v=>({...v,weight:m.target.value})),placeholder:"例: 4.2"})}),f.jsx(ee,{label:"次回予定日",children:f.jsx("input",{type:"date",style:T.input,value:h.nextDate||"",onChange:m=>y(v=>({...v,nextDate:m.target.value}))})}),f.jsx("button",{style:T.primaryBtn,onClick:ni,children:"✅ 更新する"})]}),f.jsx(or,{message:O})]}):o==="recordList"&&P?f.jsxs(sr,{children:[f.jsx(mi,{onClick:()=>l("petDetail")}),f.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},children:[f.jsxs("h2",{style:{margin:0,fontSize:20,color:"#3D2B1A"},children:[P.icon," ",P.name,"の記録"]}),f.jsx("button",{style:T.primaryBtn,onClick:()=>{y({date:new Date().toISOString().slice(0,10)}),l("addRecord")},children:"＋ 追加"})]}),f.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:20},children:["すべて",...Object.keys(Ye)].map(m=>f.jsxs("button",{style:{...T.filterChip,background:w===m?"#C49A6C":"#FFF0DC",color:w===m?"#FFF":"#7A5C3A"},onClick:()=>C(m),children:[m!=="すべて"&&Ye[m]+" ",m]},m))}),b.length===0?f.jsx(X1,{icon:"📭",msg:"該当する記録がありません"}):b.map(m=>f.jsx(qf,{record:m,onDelete:ks,onEdit:v=>{y({...v}),l("editRecord")},expanded:!0},m.id)),f.jsx(or,{message:O})]}):f.jsx("div",{style:{padding:40,textAlign:"center"},children:"読み込み中..."})}function K1({records:t,onDayClick:e}){const n=new Date,[r,i]=ie.useState(n.getFullYear()),[s,o]=ie.useState(n.getMonth()),l=new Date(r,s,1).getDay(),a=new Date(r,s+1,0).getDate(),u={};t.forEach(p=>{u[p.date]||(u[p.date]=[]),u[p.date].push(p)});const c=`${r}-${String(s+1).padStart(2,"0")}`,d=n.toISOString().slice(0,10),h=()=>{s===0?(i(p=>p-1),o(11)):o(p=>p-1)},y=()=>{s===11?(i(p=>p+1),o(0)):o(p=>p+1)},w=()=>{const p=t.map(S=>S.date).filter(Boolean).sort();if(p.length===0)return;const _=p[0];i(parseInt(_.slice(0,4))),o(parseInt(_.slice(5,7))-1)},C=()=>{i(n.getFullYear()),o(n.getMonth())},O=r===n.getFullYear()&&s===n.getMonth(),g=["日","月","火","水","木","金","土"];return f.jsxs("div",{style:{background:"#FFF",borderRadius:16,padding:"16px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",marginBottom:80},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8},children:[f.jsx("button",{onClick:h,style:{background:"#FFF0DC",border:"none",borderRadius:10,fontSize:18,cursor:"pointer",color:"#C49A6C",padding:"8px 14px",fontWeight:700,lineHeight:1},children:"‹"}),f.jsx("div",{style:{textAlign:"center"},children:f.jsxs("div",{style:{fontWeight:700,fontSize:16,color:"#3D2B1A"},children:[r,"年 ",s+1,"月"]})}),f.jsx("button",{onClick:y,style:{background:"#FFF0DC",border:"none",borderRadius:10,fontSize:18,cursor:"pointer",color:"#C49A6C",padding:"8px 14px",fontWeight:700,lineHeight:1},children:"›"})]}),f.jsxs("div",{style:{display:"flex",gap:8,marginBottom:12,justifyContent:"center"},children:[f.jsx("button",{onClick:w,style:{background:"none",border:"1px solid #E8D5BC",borderRadius:20,padding:"4px 12px",fontSize:12,color:"#7A5C3A",cursor:"pointer"},children:"⏮ 最古の記録"}),!O&&f.jsx("button",{onClick:C,style:{background:"#C49A6C",border:"none",borderRadius:20,padding:"4px 12px",fontSize:12,color:"#FFF",cursor:"pointer",fontWeight:600},children:"今月へ戻る"})]}),f.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,marginBottom:4},children:g.map((p,_)=>f.jsx("div",{style:{textAlign:"center",fontSize:11,fontWeight:700,color:_===0?"#EF4444":_===6?"#3B82F6":"#9A7A5C",padding:"4px 0"},children:p},p))}),f.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2},children:[Array.from({length:l}).map((p,_)=>f.jsx("div",{},`e${_}`)),Array.from({length:a}).map((p,_)=>{const S=_+1,R=`${c}-${String(S).padStart(2,"0")}`,A=u[R]||[],N=R===d,E=(l+_)%7,P=A.length>0,b=[...new Set(A.map(ue=>ue.category))].slice(0,3);return f.jsxs("div",{onClick:()=>e(A),style:{borderRadius:10,padding:"6px 2px 4px",textAlign:"center",cursor:P?"pointer":"default",background:N?"#C49A6C22":P?"#FFF7EE":"transparent",border:N?"2px solid #C49A6C":P?"1px solid #F0D9B0":"1px solid transparent",minHeight:52,display:"flex",flexDirection:"column",alignItems:"center",gap:2,transition:"background .15s"},children:[f.jsx("div",{style:{fontSize:13,fontWeight:N?700:400,color:E===0?"#EF4444":E===6?"#3B82F6":"#3D2B1A"},children:S}),f.jsx("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:1},children:b.map(ue=>f.jsx("span",{style:{fontSize:11,background:An[ue]+"33",borderRadius:4,padding:"0 2px",lineHeight:1.4},children:Ye[ue]},ue))}),A.length>0&&f.jsxs("div",{style:{fontSize:9,color:"#C49A6C",fontWeight:700},children:[A.length,"件"]})]},S)})]}),f.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginTop:14,paddingTop:12,borderTop:"1px solid #F0E8DC"},children:Object.keys(Ye).map(p=>f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:3,fontSize:11,color:"#7A5C3A"},children:[f.jsx("span",{children:Ye[p]}),p]},p))})]})}function Q1({pet:t,onSave:e}){const[n,r]=ie.useState(!1),[i,s]=ie.useState({vet:t.vet||"",vetPhone:t.vetPhone||"",vetAddress:t.vetAddress||"",vetHours:t.vetHours||"",vetNote:t.vetNote||""}),o=t.vet||t.vetPhone||t.vetAddress;function l(){e(i),r(!1)}return f.jsxs(f.Fragment,{children:[f.jsxs("div",{style:{...T.infoCard,cursor:"pointer"},onClick:()=>{s({vet:t.vet||"",vetPhone:t.vetPhone||"",vetAddress:t.vetAddress||"",vetHours:t.vetHours||"",vetNote:t.vetNote||""}),r(!0)},children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[f.jsx("div",{style:T.infoLabel,children:"かかりつけ病院"}),f.jsx("span",{style:{fontSize:11,color:"#C49A6C"},children:"✏️ 編集"})]}),f.jsx("div",{style:{fontSize:14,fontWeight:600,color:"#3D2B1A",marginTop:4},children:t.vet||"—"}),t.vetPhone&&f.jsxs("div",{style:{fontSize:12,color:"#7A5C3A",marginTop:3},children:["📞 ",t.vetPhone]}),t.vetAddress&&f.jsxs("div",{style:{fontSize:11,color:"#9A7A5C",marginTop:2},children:["📍 ",t.vetAddress]}),!o&&f.jsx("div",{style:{fontSize:12,color:"#BBA08A",marginTop:4},children:"タップして追加"})]}),n&&f.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:200,display:"flex",alignItems:"flex-end",justifyContent:"center"},onClick:()=>r(!1),children:f.jsxs("div",{style:{background:"#FDF6EE",borderRadius:"20px 20px 0 0",padding:24,width:"100%",maxWidth:600,maxHeight:"85vh",overflowY:"auto"},onClick:a=>a.stopPropagation(),children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20},children:[f.jsx("div",{style:{fontWeight:700,fontSize:17,color:"#3D2B1A"},children:"🏥 病院情報を編集"}),f.jsx("button",{onClick:()=>r(!1),style:{background:"none",border:"none",fontSize:20,cursor:"pointer",color:"#9A7A5C"},children:"✕"})]}),f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[{key:"vet",label:"病院名",placeholder:"例: アシスト動物病院",icon:"🏥"},{key:"vetPhone",label:"電話番号",placeholder:"例: 03-1234-5678",icon:"📞"},{key:"vetAddress",label:"住所",placeholder:"例: 東京都渋谷区...",icon:"📍"},{key:"vetHours",label:"診療時間",placeholder:"例: 9:00〜19:00 (水休)",icon:"🕐"},{key:"vetNote",label:"メモ",placeholder:"担当医の名前など",icon:"📝"}].map(({key:a,label:u,placeholder:c,icon:d})=>f.jsxs("div",{children:[f.jsxs("label",{style:{display:"block",fontSize:13,fontWeight:600,color:"#5C3A1E",marginBottom:5},children:[d," ",u]}),a==="vetNote"?f.jsx("textarea",{style:{...T.input,height:72,resize:"vertical"},value:i[a],onChange:h=>s(y=>({...y,[a]:h.target.value})),placeholder:c}):f.jsx("input",{style:T.input,value:i[a],onChange:h=>s(y=>({...y,[a]:h.target.value})),placeholder:c})]},a))}),f.jsx("button",{style:{...T.primaryBtn,marginTop:20},onClick:l,children:"✅ 保存する"})]})})]})}function q1({records:t,petId:e}){const[n,r]=ie.useState(!1),i=new Date;i.setMonth(i.getMonth()-3);const s=i.toISOString().slice(0,10),o=t.filter(c=>c.petId===e&&c.category==="体重"&&c.weight&&c.date>=s).map(c=>({date:c.date,kg:parseFloat(c.weight)})).filter(c=>!isNaN(c.kg)).sort((c,d)=>c.date.localeCompare(d.date));if(o.length===0)return f.jsxs("div",{style:T.infoCard,children:[f.jsx("div",{style:T.infoLabel,children:"体重（3ヶ月）"}),f.jsx("div",{style:T.infoValue,children:"—"})]});const l=o.reduce((c,d)=>c.kg>=d.kg?c:d),a=o.reduce((c,d)=>c.kg<=d.kg?c:d),u=[...o].sort((c,d)=>d.date.localeCompare(c.date))[0];return f.jsxs(f.Fragment,{children:[f.jsxs("div",{style:{...T.infoCard,cursor:"pointer",gridColumn:"span 1"},onClick:()=>r(!0),children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[f.jsx("div",{style:T.infoLabel,children:"体重（3ヶ月）"}),f.jsx("span",{style:{fontSize:11,color:"#C49A6C"},children:"📈 グラフ"})]}),f.jsxs("div",{style:{fontSize:18,fontWeight:700,color:"#3D2B1A",margin:"4px 0"},children:[u.kg.toFixed(2)," kg"]}),f.jsxs("div",{style:{fontSize:11,color:"#9A7A5C",marginTop:2},children:["最終: ",u.date]}),f.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[f.jsxs("div",{style:{flex:1,background:"#FFF0F0",borderRadius:8,padding:"5px 8px"},children:[f.jsx("div",{style:{fontSize:10,color:"#EF4444",fontWeight:700},children:"▲ 最高"}),f.jsxs("div",{style:{fontSize:13,fontWeight:700,color:"#3D2B1A"},children:[l.kg.toFixed(2)," kg"]}),f.jsx("div",{style:{fontSize:10,color:"#9A7A5C"},children:l.date})]}),f.jsxs("div",{style:{flex:1,background:"#F0F8FF",borderRadius:8,padding:"5px 8px"},children:[f.jsx("div",{style:{fontSize:10,color:"#3B82F6",fontWeight:700},children:"▼ 最低"}),f.jsxs("div",{style:{fontSize:13,fontWeight:700,color:"#3D2B1A"},children:[a.kg.toFixed(2)," kg"]}),f.jsx("div",{style:{fontSize:10,color:"#9A7A5C"},children:a.date})]})]})]}),n&&f.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",padding:16},onClick:()=>r(!1),children:f.jsxs("div",{style:{background:"#FFF",borderRadius:20,padding:24,width:"100%",maxWidth:600,maxHeight:"80vh",overflow:"auto"},onClick:c=>c.stopPropagation(),children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20},children:[f.jsx("div",{style:{fontWeight:700,fontSize:16,color:"#3D2B1A"},children:"⚖️ 体重推移（過去3ヶ月）"}),f.jsx("button",{onClick:()=>r(!1),style:{background:"none",border:"none",fontSize:20,cursor:"pointer",color:"#9A7A5C"},children:"✕"})]}),f.jsx(Y1,{data:o}),f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:16,fontSize:12,color:"#9A7A5C"},children:[f.jsx("span",{children:o[0].date}),f.jsxs("span",{children:[o.length,"件のデータ"]}),f.jsx("span",{children:o[o.length-1].date})]})]})})]})}function Y1({data:t}){const u=t.map(E=>E.kg),c=Math.min(...u),d=Math.max(...u),y=(d-c||.1)*.15,w=c-y,C=d+y,O=E=>48+E/(t.length-1)*456,g=E=>16+(1-(E-w)/(C-w))*152,p=t.map((E,P)=>`${O(P)},${g(E.kg)}`).join(" "),_=`M${O(0)},${g(t[0].kg)} `+t.map((E,P)=>`L${O(P)},${g(E.kg)}`).join(" ")+` L${O(t.length-1)},168 L${O(0)},168 Z`,S=Array.from({length:4},(E,P)=>w+(C-w)*(P/3)),R=[0,Math.floor((t.length-1)/2),t.length-1].filter((E,P,b)=>b.indexOf(E)===P),A=t.indexOf(t.reduce((E,P)=>E.kg>=P.kg?E:P)),N=t.indexOf(t.reduce((E,P)=>E.kg<=P.kg?E:P));return f.jsxs("svg",{viewBox:"0 0 520 200",style:{width:"100%",height:"auto",overflow:"visible"},children:[S.map((E,P)=>f.jsxs("g",{children:[f.jsx("line",{x1:48,y1:g(E),x2:504,y2:g(E),stroke:"#F0E8DC",strokeWidth:"1"}),f.jsx("text",{x:42,y:g(E)+4,textAnchor:"end",fontSize:"9",fill:"#9A7A5C",children:E.toFixed(2)})]},P)),f.jsx("path",{d:_,fill:"#C49A6C22"}),f.jsx("polyline",{points:p,fill:"none",stroke:"#C49A6C",strokeWidth:"2",strokeLinejoin:"round"}),f.jsx("circle",{cx:O(A),cy:g(t[A].kg),r:"5",fill:"#EF4444"}),f.jsxs("text",{x:O(A),y:g(t[A].kg)-8,textAnchor:"middle",fontSize:"9",fill:"#EF4444",fontWeight:"bold",children:["▲",t[A].kg.toFixed(2)]}),f.jsx("circle",{cx:O(N),cy:g(t[N].kg),r:"5",fill:"#3B82F6"}),f.jsxs("text",{x:O(N),y:g(t[N].kg)+16,textAnchor:"middle",fontSize:"9",fill:"#3B82F6",fontWeight:"bold",children:["▼",t[N].kg.toFixed(2)]}),f.jsx("circle",{cx:O(t.length-1),cy:g(t[t.length-1].kg),r:"4",fill:"#C49A6C",stroke:"#FFF",strokeWidth:"2"}),R.map(E=>f.jsx("text",{x:O(E),y:196,textAnchor:"middle",fontSize:"9",fill:"#9A7A5C",children:t[E].date.slice(5)},E)),f.jsx("line",{x1:48,y1:16,x2:48,y2:168,stroke:"#E8D5BC",strokeWidth:"1"}),f.jsx("line",{x1:48,y1:168,x2:504,y2:168,stroke:"#E8D5BC",strokeWidth:"1"})]})}function sr({children:t}){return f.jsx("div",{style:{minHeight:"100vh",background:"#FDF6EE",fontFamily:"system-ui, 'Hiragino Sans', sans-serif"},children:f.jsx("div",{style:{maxWidth:680,margin:"0 auto",padding:"20px 16px 80px"},children:t})})}function mi({onClick:t}){return f.jsx("button",{style:T.backBtn,onClick:t,children:"← 戻る"})}function Qf({onClick:t,title:e,danger:n,children:r}){return f.jsx("button",{title:e,style:{background:n?"#FEE2E2":"#FFF0DC",border:"none",borderRadius:8,padding:"8px 12px",cursor:"pointer",fontSize:18},onClick:t,children:r})}function ee({label:t,children:e}){return f.jsxs("div",{style:{marginBottom:16},children:[f.jsx("label",{style:{display:"block",fontWeight:600,color:"#5C3A1E",marginBottom:6,fontSize:14},children:t}),e]})}function qf({record:t,onDelete:e,onEdit:n,expanded:r}){const[i,s]=ie.useState(!!r);return f.jsxs("div",{style:T.recordCard,onClick:()=>s(o=>!o),children:[f.jsxs("div",{style:T.recordHeader,children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[f.jsx("span",{style:{...T.catBadge,background:An[t.category]},children:Ye[t.category]}),f.jsxs("div",{children:[f.jsx("div",{style:{fontWeight:600,color:"#3D2B1A"},children:t.title}),f.jsxs("div",{style:{fontSize:12,color:"#9A7A5C"},children:[t.date,t.category&&` · ${t.category}`]})]})]}),f.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center"},children:[t.nextDate&&f.jsxs("span",{style:T.nextDateBadge,children:["📅 ",t.nextDate]}),f.jsx("button",{style:{...T.deleteBtn,opacity:.7},onClick:o=>{o.stopPropagation(),n(t)},children:"✏️"}),f.jsx("button",{style:T.deleteBtn,onClick:o=>{o.stopPropagation(),e(t.id)},children:"🗑️"})]})]}),i&&(t.description||t.weight)&&f.jsxs("div",{style:T.recordBody,children:[t.weight&&f.jsxs("div",{style:{marginBottom:4},children:["⚖️ ",t.weight," kg"]}),t.description&&f.jsx("div",{style:{color:"#5C3A1E",whiteSpace:"pre-wrap"},children:t.description})]})]})}function X1({icon:t,msg:e}){return f.jsxs("div",{style:{textAlign:"center",padding:"48px 20px",color:"#9A7A5C"},children:[f.jsx("div",{style:{fontSize:48,marginBottom:12},children:t}),f.jsx("div",{children:e})]})}function or({message:t}){return t?f.jsx("div",{style:T.toast,children:t}):null}const T={header:{textAlign:"center",paddingTop:32,paddingBottom:24},logo:{fontSize:48,marginBottom:8},title:{margin:0,fontSize:28,fontWeight:700,color:"#3D2B1A"},subtitle:{margin:"8px 0 0",color:"#9A7A5C"},syncBadge:{display:"inline-block",marginTop:8,fontSize:12,color:"#9A7A5C",background:"#F0E8DC",borderRadius:20,padding:"4px 12px"},petGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(160px, 1fr))",gap:16},petCard:{background:"#FFF",borderRadius:16,border:"none",padding:"20px 16px",cursor:"pointer",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",transition:"transform .15s",textAlign:"center"},petCardIcon:{borderRadius:"50%",width:72,height:72,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px"},petCardName:{fontWeight:700,fontSize:16,color:"#3D2B1A"},petCardSub:{fontSize:12,color:"#9A7A5C",marginTop:2},petCardAge:{fontSize:12,color:"#C49A6C",marginTop:4},petCardRecords:{fontSize:11,color:"#BBA08A",marginTop:6},addPetCard:{background:"#FFF7EE",borderRadius:16,border:"2px dashed #C49A6C",padding:"20px 16px",cursor:"pointer",textAlign:"center",minHeight:140,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},petBanner:{borderRadius:16,padding:"20px 24px",display:"flex",alignItems:"center",gap:16,marginBottom:20},infoGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:20},infoCard:{background:"#FFF",borderRadius:12,padding:"12px 16px"},infoLabel:{fontSize:11,color:"#9A7A5C",fontWeight:600,textTransform:"uppercase",marginBottom:4},infoValue:{fontSize:14,color:"#3D2B1A",fontWeight:500},notesBox:{background:"#FFFBF0",border:"1px solid #F0D9B0",borderRadius:12,padding:"12px 16px",marginBottom:20,color:"#5C3A1E",fontSize:14},sectionHeader:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12,fontWeight:700,color:"#3D2B1A"},linkBtn:{background:"none",border:"none",color:"#C49A6C",cursor:"pointer",fontSize:14,fontWeight:600},categoryRow:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:24},catChip:{background:"#FFF",border:"none",borderRadius:10,padding:"8px 12px",display:"flex",flexDirection:"column",alignItems:"center",gap:4,cursor:"pointer",boxShadow:"0 1px 6px rgba(0,0,0,0.06)",minWidth:60,fontSize:18},catCount:{fontSize:11,color:"#FFF",borderRadius:10,padding:"1px 7px",fontWeight:700},recordCard:{background:"#FFF",borderRadius:14,marginBottom:10,overflow:"hidden",boxShadow:"0 1px 8px rgba(0,0,0,0.05)",cursor:"pointer"},recordHeader:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 16px"},catBadge:{width:36,height:36,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0},nextDateBadge:{fontSize:11,background:"#FFF0DC",color:"#7A5C3A",borderRadius:8,padding:"3px 8px"},deleteBtn:{background:"none",border:"none",cursor:"pointer",fontSize:16,opacity:.6,padding:"4px 6px"},recordBody:{padding:"0 16px 14px",fontSize:14,borderTop:"1px solid #FDF0E4",marginTop:4,paddingTop:12},fab:{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)"},fabBtn:{background:"#C49A6C",color:"#FFF",border:"none",borderRadius:30,padding:"14px 32px",fontSize:16,fontWeight:700,cursor:"pointer",boxShadow:"0 4px 20px rgba(0,0,0,0.2)"},form:{background:"#FFF",borderRadius:16,padding:"24px 20px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)"},formTitle:{textAlign:"center",color:"#3D2B1A",marginBottom:24},input:{width:"100%",padding:"10px 14px",borderRadius:10,border:"1.5px solid #E8D5BC",background:"#FFFBF7",fontSize:15,color:"#3D2B1A",boxSizing:"border-box"},catSelector:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8},catOption:{border:"2px solid transparent",borderRadius:12,padding:"10px 8px",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:4,fontSize:20,transition:"all .15s"},filterChip:{border:"none",borderRadius:20,padding:"6px 14px",cursor:"pointer",fontSize:13,fontWeight:600},primaryBtn:{width:"100%",background:"#C49A6C",color:"#FFF",border:"none",borderRadius:12,padding:"14px",fontSize:16,fontWeight:700,cursor:"pointer",marginTop:8},backBtn:{background:"none",border:"none",color:"#C49A6C",cursor:"pointer",fontSize:15,fontWeight:600,marginBottom:16,padding:0},toast:{position:"fixed",bottom:80,left:"50%",transform:"translateX(-50%)",background:"#3D2B1A",color:"#FFF",borderRadius:24,padding:"12px 24px",fontSize:14,fontWeight:600,zIndex:1e3,boxShadow:"0 4px 20px rgba(0,0,0,0.3)",whiteSpace:"nowrap"}};wa.createRoot(document.getElementById("root")).render(f.jsx(jy.StrictMode,{children:f.jsx(G1,{})}));

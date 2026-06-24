(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function U_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var fp={exports:{}},yl={},pp={exports:{}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cs=Symbol.for("react.element"),W_=Symbol.for("react.portal"),H_=Symbol.for("react.fragment"),$_=Symbol.for("react.strict_mode"),V_=Symbol.for("react.profiler"),G_=Symbol.for("react.provider"),K_=Symbol.for("react.context"),Q_=Symbol.for("react.forward_ref"),Y_=Symbol.for("react.suspense"),q_=Symbol.for("react.memo"),X_=Symbol.for("react.lazy"),$d=Symbol.iterator;function J_(t){return t===null||typeof t!="object"?null:(t=$d&&t[$d]||t["@@iterator"],typeof t=="function"?t:null)}var gp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mp=Object.assign,yp={};function li(t,e,n){this.props=t,this.context=e,this.refs=yp,this.updater=n||gp}li.prototype.isReactComponent={};li.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};li.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function _p(){}_p.prototype=li.prototype;function Xu(t,e,n){this.props=t,this.context=e,this.refs=yp,this.updater=n||gp}var Ju=Xu.prototype=new _p;Ju.constructor=Xu;mp(Ju,li.prototype);Ju.isPureReactComponent=!0;var Vd=Array.isArray,vp=Object.prototype.hasOwnProperty,Zu={current:null},wp={key:!0,ref:!0,__self:!0,__source:!0};function Cp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)vp.call(e,r)&&!wp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Cs,type:t,key:s,ref:o,props:i,_owner:Zu.current}}function Z_(t,e){return{$$typeof:Cs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ec(t){return typeof t=="object"&&t!==null&&t.$$typeof===Cs}function ev(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Gd=/\/+/g;function Kl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ev(""+t.key):e.toString(36)}function oo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Cs:case W_:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Kl(o,0):r,Vd(i)?(n="",t!=null&&(n=t.replace(Gd,"$&/")+"/"),oo(i,e,n,"",function(u){return u})):i!=null&&(ec(i)&&(i=Z_(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Gd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Vd(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Kl(s,l);o+=oo(s,e,n,a,i)}else if(a=J_(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Kl(s,l++),o+=oo(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function zs(t,e,n){if(t==null)return t;var r=[],i=0;return oo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function tv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ve={current:null},lo={transition:null},nv={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:lo,ReactCurrentOwner:Zu};function Sp(){throw Error("act(...) is not supported in production builds of React.")}K.Children={map:zs,forEach:function(t,e,n){zs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return zs(t,function(){e++}),e},toArray:function(t){return zs(t,function(e){return e})||[]},only:function(t){if(!ec(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};K.Component=li;K.Fragment=H_;K.Profiler=V_;K.PureComponent=Xu;K.StrictMode=$_;K.Suspense=Y_;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nv;K.act=Sp;K.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=mp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Zu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)vp.call(e,a)&&!wp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Cs,type:t.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(t){return t={$$typeof:K_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:G_,_context:t},t.Consumer=t};K.createElement=Cp;K.createFactory=function(t){var e=Cp.bind(null,t);return e.type=t,e};K.createRef=function(){return{current:null}};K.forwardRef=function(t){return{$$typeof:Q_,render:t}};K.isValidElement=ec;K.lazy=function(t){return{$$typeof:X_,_payload:{_status:-1,_result:t},_init:tv}};K.memo=function(t,e){return{$$typeof:q_,type:t,compare:e===void 0?null:e}};K.startTransition=function(t){var e=lo.transition;lo.transition={};try{t()}finally{lo.transition=e}};K.unstable_act=Sp;K.useCallback=function(t,e){return Ve.current.useCallback(t,e)};K.useContext=function(t){return Ve.current.useContext(t)};K.useDebugValue=function(){};K.useDeferredValue=function(t){return Ve.current.useDeferredValue(t)};K.useEffect=function(t,e){return Ve.current.useEffect(t,e)};K.useId=function(){return Ve.current.useId()};K.useImperativeHandle=function(t,e,n){return Ve.current.useImperativeHandle(t,e,n)};K.useInsertionEffect=function(t,e){return Ve.current.useInsertionEffect(t,e)};K.useLayoutEffect=function(t,e){return Ve.current.useLayoutEffect(t,e)};K.useMemo=function(t,e){return Ve.current.useMemo(t,e)};K.useReducer=function(t,e,n){return Ve.current.useReducer(t,e,n)};K.useRef=function(t){return Ve.current.useRef(t)};K.useState=function(t){return Ve.current.useState(t)};K.useSyncExternalStore=function(t,e,n){return Ve.current.useSyncExternalStore(t,e,n)};K.useTransition=function(){return Ve.current.useTransition()};K.version="18.3.1";pp.exports=K;var Q=pp.exports;const rv=U_(Q);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv=Q,sv=Symbol.for("react.element"),ov=Symbol.for("react.fragment"),lv=Object.prototype.hasOwnProperty,av=iv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,uv={key:!0,ref:!0,__self:!0,__source:!0};function xp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)lv.call(e,r)&&!uv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:sv,type:t,key:s,ref:o,props:i,_owner:av.current}}yl.Fragment=ov;yl.jsx=xp;yl.jsxs=xp;fp.exports=yl;var c=fp.exports,Ma={},Ep={exports:{}},ot={},kp={exports:{}},Ip={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,O){var B=N.length;N.push(O);e:for(;0<B;){var ce=B-1>>>1,ve=N[ce];if(0<i(ve,O))N[ce]=O,N[B]=ve,B=ce;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var O=N[0],B=N.pop();if(B!==O){N[0]=B;e:for(var ce=0,ve=N.length,yr=ve>>>1;ce<yr;){var Oe=2*(ce+1)-1,Ue=N[Oe],Nt=Oe+1,Un=N[Nt];if(0>i(Ue,B))Nt<ve&&0>i(Un,Ue)?(N[ce]=Un,N[Nt]=B,ce=Nt):(N[ce]=Ue,N[Oe]=B,ce=Oe);else if(Nt<ve&&0>i(Un,B))N[ce]=Un,N[Nt]=B,ce=Nt;else break e}}return O}function i(N,O){var B=N.sortIndex-O.sortIndex;return B!==0?B:N.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],f=1,d=null,h=3,y=!1,_=!1,w=!1,A=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(N){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=N)r(u),O.sortIndex=O.expirationTime,e(a,O);else break;O=n(u)}}function S(N){if(w=!1,m(N),!_)if(n(a)!==null)_=!0,q(k);else{var O=n(u);O!==null&&zt(S,O.startTime-N)}}function k(N,O){_=!1,w&&(w=!1,g(x),x=-1),y=!0;var B=h;try{for(m(O),d=n(a);d!==null&&(!(d.expirationTime>O)||N&&!ee());){var ce=d.callback;if(typeof ce=="function"){d.callback=null,h=d.priorityLevel;var ve=ce(d.expirationTime<=O);O=t.unstable_now(),typeof ve=="function"?d.callback=ve:d===n(a)&&r(a),m(O)}else r(a);d=n(a)}if(d!==null)var yr=!0;else{var Oe=n(u);Oe!==null&&zt(S,Oe.startTime-O),yr=!1}return yr}finally{d=null,h=B,y=!1}}var P=!1,I=null,x=-1,j=5,z=-1;function ee(){return!(t.unstable_now()-z<j)}function Re(){if(I!==null){var N=t.unstable_now();z=N;var O=!0;try{O=I(!0,N)}finally{O?b():(P=!1,I=null)}}else P=!1}var b;if(typeof p=="function")b=function(){p(Re)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,_e=re.port2;re.port1.onmessage=Re,b=function(){_e.postMessage(null)}}else b=function(){A(Re,0)};function q(N){I=N,P||(P=!0,b())}function zt(N,O){x=A(function(){N(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||y||(_=!0,q(k))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var B=h;h=O;try{return N()}finally{h=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,O){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var B=h;h=N;try{return O()}finally{h=B}},t.unstable_scheduleCallback=function(N,O,B){var ce=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?ce+B:ce):B=ce,N){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=B+ve,N={id:f++,callback:O,priorityLevel:N,startTime:B,expirationTime:ve,sortIndex:-1},B>ce?(N.sortIndex=B,e(u,N),n(a)===null&&N===n(u)&&(w?(g(x),x=-1):w=!0,zt(S,B-ce))):(N.sortIndex=ve,e(a,N),_||y||(_=!0,q(k))),N},t.unstable_shouldYield=ee,t.unstable_wrapCallback=function(N){var O=h;return function(){var B=h;h=O;try{return N.apply(this,arguments)}finally{h=B}}}})(Ip);kp.exports=Ip;var cv=kp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dv=Q,st=cv;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tp=new Set,Yi={};function pr(t,e){Qr(t,e),Qr(t+"Capture",e)}function Qr(t,e){for(Yi[t]=e,t=0;t<e.length;t++)Tp.add(e[t])}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ja=Object.prototype.hasOwnProperty,hv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kd={},Qd={};function fv(t){return ja.call(Qd,t)?!0:ja.call(Kd,t)?!1:hv.test(t)?Qd[t]=!0:(Kd[t]=!0,!1)}function pv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function gv(t,e,n,r){if(e===null||typeof e>"u"||pv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ge(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Fe[t]=new Ge(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Fe[e]=new Ge(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Fe[t]=new Ge(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Fe[t]=new Ge(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Fe[t]=new Ge(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Fe[t]=new Ge(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Fe[t]=new Ge(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Fe[t]=new Ge(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Fe[t]=new Ge(t,5,!1,t.toLowerCase(),null,!1,!1)});var tc=/[\-:]([a-z])/g;function nc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(tc,nc);Fe[e]=new Ge(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(tc,nc);Fe[e]=new Ge(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(tc,nc);Fe[e]=new Ge(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Fe[t]=new Ge(t,1,!1,t.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Fe[t]=new Ge(t,1,!1,t.toLowerCase(),null,!0,!0)});function rc(t,e,n,r){var i=Fe.hasOwnProperty(e)?Fe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(gv(e,n,i,r)&&(n=null),r||i===null?fv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var sn=dv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bs=Symbol.for("react.element"),xr=Symbol.for("react.portal"),Er=Symbol.for("react.fragment"),ic=Symbol.for("react.strict_mode"),za=Symbol.for("react.profiler"),Ap=Symbol.for("react.provider"),Rp=Symbol.for("react.context"),sc=Symbol.for("react.forward_ref"),Ba=Symbol.for("react.suspense"),Ua=Symbol.for("react.suspense_list"),oc=Symbol.for("react.memo"),dn=Symbol.for("react.lazy"),Pp=Symbol.for("react.offscreen"),Yd=Symbol.iterator;function yi(t){return t===null||typeof t!="object"?null:(t=Yd&&t[Yd]||t["@@iterator"],typeof t=="function"?t:null)}var pe=Object.assign,Ql;function Pi(t){if(Ql===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ql=e&&e[1]||""}return`
`+Ql+t}var Yl=!1;function ql(t,e){if(!t||Yl)return"";Yl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Yl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Pi(t):""}function mv(t){switch(t.tag){case 5:return Pi(t.type);case 16:return Pi("Lazy");case 13:return Pi("Suspense");case 19:return Pi("SuspenseList");case 0:case 2:case 15:return t=ql(t.type,!1),t;case 11:return t=ql(t.type.render,!1),t;case 1:return t=ql(t.type,!0),t;default:return""}}function Wa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Er:return"Fragment";case xr:return"Portal";case za:return"Profiler";case ic:return"StrictMode";case Ba:return"Suspense";case Ua:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Rp:return(t.displayName||"Context")+".Consumer";case Ap:return(t._context.displayName||"Context")+".Provider";case sc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case oc:return e=t.displayName||null,e!==null?e:Wa(t.type)||"Memo";case dn:e=t._payload,t=t._init;try{return Wa(t(e))}catch{}}return null}function yv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wa(e);case 8:return e===ic?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function bn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Np(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _v(t){var e=Np(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Us(t){t._valueTracker||(t._valueTracker=_v(t))}function bp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Np(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Eo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ha(t,e){var n=e.checked;return pe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function qd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=bn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Dp(t,e){e=e.checked,e!=null&&rc(t,"checked",e,!1)}function $a(t,e){Dp(t,e);var n=bn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Va(t,e.type,n):e.hasOwnProperty("defaultValue")&&Va(t,e.type,bn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Xd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Va(t,e,n){(e!=="number"||Eo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ni=Array.isArray;function Lr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+bn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ga(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return pe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Jd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(Ni(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:bn(n)}}function Fp(t,e){var n=bn(e.value),r=bn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Zd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Op(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ka(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Op(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ws,Lp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ws=Ws||document.createElement("div"),Ws.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ws.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vv=["Webkit","ms","Moz","O"];Object.keys(Fi).forEach(function(t){vv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Fi[e]=Fi[t]})});function Mp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Fi.hasOwnProperty(t)&&Fi[t]?(""+e).trim():e+"px"}function jp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Mp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var wv=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qa(t,e){if(e){if(wv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function Ya(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qa=null;function lc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xa=null,Mr=null,jr=null;function eh(t){if(t=Es(t)){if(typeof Xa!="function")throw Error(E(280));var e=t.stateNode;e&&(e=Sl(e),Xa(t.stateNode,t.type,e))}}function zp(t){Mr?jr?jr.push(t):jr=[t]:Mr=t}function Bp(){if(Mr){var t=Mr,e=jr;if(jr=Mr=null,eh(t),e)for(t=0;t<e.length;t++)eh(e[t])}}function Up(t,e){return t(e)}function Wp(){}var Xl=!1;function Hp(t,e,n){if(Xl)return t(e,n);Xl=!0;try{return Up(t,e,n)}finally{Xl=!1,(Mr!==null||jr!==null)&&(Wp(),Bp())}}function Xi(t,e){var n=t.stateNode;if(n===null)return null;var r=Sl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var Ja=!1;if(qt)try{var _i={};Object.defineProperty(_i,"passive",{get:function(){Ja=!0}}),window.addEventListener("test",_i,_i),window.removeEventListener("test",_i,_i)}catch{Ja=!1}function Cv(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Oi=!1,ko=null,Io=!1,Za=null,Sv={onError:function(t){Oi=!0,ko=t}};function xv(t,e,n,r,i,s,o,l,a){Oi=!1,ko=null,Cv.apply(Sv,arguments)}function Ev(t,e,n,r,i,s,o,l,a){if(xv.apply(this,arguments),Oi){if(Oi){var u=ko;Oi=!1,ko=null}else throw Error(E(198));Io||(Io=!0,Za=u)}}function gr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $p(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function th(t){if(gr(t)!==t)throw Error(E(188))}function kv(t){var e=t.alternate;if(!e){if(e=gr(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return th(i),t;if(s===r)return th(i),e;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function Vp(t){return t=kv(t),t!==null?Gp(t):null}function Gp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Gp(t);if(e!==null)return e;t=t.sibling}return null}var Kp=st.unstable_scheduleCallback,nh=st.unstable_cancelCallback,Iv=st.unstable_shouldYield,Tv=st.unstable_requestPaint,ye=st.unstable_now,Av=st.unstable_getCurrentPriorityLevel,ac=st.unstable_ImmediatePriority,Qp=st.unstable_UserBlockingPriority,To=st.unstable_NormalPriority,Rv=st.unstable_LowPriority,Yp=st.unstable_IdlePriority,_l=null,Ot=null;function Pv(t){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(_l,t,void 0,(t.current.flags&128)===128)}catch{}}var It=Math.clz32?Math.clz32:Dv,Nv=Math.log,bv=Math.LN2;function Dv(t){return t>>>=0,t===0?32:31-(Nv(t)/bv|0)|0}var Hs=64,$s=4194304;function bi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ao(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=bi(l):(s&=o,s!==0&&(r=bi(s)))}else o=n&~i,o!==0?r=bi(o):s!==0&&(r=bi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-It(e),i=1<<n,r|=t[n],e&=~i;return r}function Fv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ov(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-It(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=Fv(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function eu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qp(){var t=Hs;return Hs<<=1,!(Hs&4194240)&&(Hs=64),t}function Jl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ss(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-It(e),t[e]=n}function Lv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-It(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function uc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-It(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var J=0;function Xp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Jp,cc,Zp,eg,tg,tu=!1,Vs=[],wn=null,Cn=null,Sn=null,Ji=new Map,Zi=new Map,fn=[],Mv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rh(t,e){switch(t){case"focusin":case"focusout":wn=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":Ji.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zi.delete(e.pointerId)}}function vi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Es(e),e!==null&&cc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function jv(t,e,n,r,i){switch(e){case"focusin":return wn=vi(wn,t,e,n,r,i),!0;case"dragenter":return Cn=vi(Cn,t,e,n,r,i),!0;case"mouseover":return Sn=vi(Sn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ji.set(s,vi(Ji.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Zi.set(s,vi(Zi.get(s)||null,t,e,n,r,i)),!0}return!1}function ng(t){var e=Kn(t.target);if(e!==null){var n=gr(e);if(n!==null){if(e=n.tag,e===13){if(e=$p(n),e!==null){t.blockedOn=e,tg(t.priority,function(){Zp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ao(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=nu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);qa=r,n.target.dispatchEvent(r),qa=null}else return e=Es(n),e!==null&&cc(e),t.blockedOn=n,!1;e.shift()}return!0}function ih(t,e,n){ao(t)&&n.delete(e)}function zv(){tu=!1,wn!==null&&ao(wn)&&(wn=null),Cn!==null&&ao(Cn)&&(Cn=null),Sn!==null&&ao(Sn)&&(Sn=null),Ji.forEach(ih),Zi.forEach(ih)}function wi(t,e){t.blockedOn===e&&(t.blockedOn=null,tu||(tu=!0,st.unstable_scheduleCallback(st.unstable_NormalPriority,zv)))}function es(t){function e(i){return wi(i,t)}if(0<Vs.length){wi(Vs[0],t);for(var n=1;n<Vs.length;n++){var r=Vs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(wn!==null&&wi(wn,t),Cn!==null&&wi(Cn,t),Sn!==null&&wi(Sn,t),Ji.forEach(e),Zi.forEach(e),n=0;n<fn.length;n++)r=fn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<fn.length&&(n=fn[0],n.blockedOn===null);)ng(n),n.blockedOn===null&&fn.shift()}var zr=sn.ReactCurrentBatchConfig,Ro=!0;function Bv(t,e,n,r){var i=J,s=zr.transition;zr.transition=null;try{J=1,dc(t,e,n,r)}finally{J=i,zr.transition=s}}function Uv(t,e,n,r){var i=J,s=zr.transition;zr.transition=null;try{J=4,dc(t,e,n,r)}finally{J=i,zr.transition=s}}function dc(t,e,n,r){if(Ro){var i=nu(t,e,n,r);if(i===null)aa(t,e,r,Po,n),rh(t,r);else if(jv(i,t,e,n,r))r.stopPropagation();else if(rh(t,r),e&4&&-1<Mv.indexOf(t)){for(;i!==null;){var s=Es(i);if(s!==null&&Jp(s),s=nu(t,e,n,r),s===null&&aa(t,e,r,Po,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else aa(t,e,r,null,n)}}var Po=null;function nu(t,e,n,r){if(Po=null,t=lc(r),t=Kn(t),t!==null)if(e=gr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$p(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Po=t,null}function rg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Av()){case ac:return 1;case Qp:return 4;case To:case Rv:return 16;case Yp:return 536870912;default:return 16}default:return 16}}var _n=null,hc=null,uo=null;function ig(){if(uo)return uo;var t,e=hc,n=e.length,r,i="value"in _n?_n.value:_n.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return uo=i.slice(t,1<r?1-r:void 0)}function co(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Gs(){return!0}function sh(){return!1}function lt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Gs:sh,this.isPropagationStopped=sh,this}return pe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gs)},persist:function(){},isPersistent:Gs}),e}var ai={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fc=lt(ai),xs=pe({},ai,{view:0,detail:0}),Wv=lt(xs),Zl,ea,Ci,vl=pe({},xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ci&&(Ci&&t.type==="mousemove"?(Zl=t.screenX-Ci.screenX,ea=t.screenY-Ci.screenY):ea=Zl=0,Ci=t),Zl)},movementY:function(t){return"movementY"in t?t.movementY:ea}}),oh=lt(vl),Hv=pe({},vl,{dataTransfer:0}),$v=lt(Hv),Vv=pe({},xs,{relatedTarget:0}),ta=lt(Vv),Gv=pe({},ai,{animationName:0,elapsedTime:0,pseudoElement:0}),Kv=lt(Gv),Qv=pe({},ai,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Yv=lt(Qv),qv=pe({},ai,{data:0}),lh=lt(qv),Xv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function e0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Zv[t])?!!e[t]:!1}function pc(){return e0}var t0=pe({},xs,{key:function(t){if(t.key){var e=Xv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=co(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Jv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pc,charCode:function(t){return t.type==="keypress"?co(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?co(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),n0=lt(t0),r0=pe({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ah=lt(r0),i0=pe({},xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pc}),s0=lt(i0),o0=pe({},ai,{propertyName:0,elapsedTime:0,pseudoElement:0}),l0=lt(o0),a0=pe({},vl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),u0=lt(a0),c0=[9,13,27,32],gc=qt&&"CompositionEvent"in window,Li=null;qt&&"documentMode"in document&&(Li=document.documentMode);var d0=qt&&"TextEvent"in window&&!Li,sg=qt&&(!gc||Li&&8<Li&&11>=Li),uh=" ",ch=!1;function og(t,e){switch(t){case"keyup":return c0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var kr=!1;function h0(t,e){switch(t){case"compositionend":return lg(e);case"keypress":return e.which!==32?null:(ch=!0,uh);case"textInput":return t=e.data,t===uh&&ch?null:t;default:return null}}function f0(t,e){if(kr)return t==="compositionend"||!gc&&og(t,e)?(t=ig(),uo=hc=_n=null,kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sg&&e.locale!=="ko"?null:e.data;default:return null}}var p0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!p0[t.type]:e==="textarea"}function ag(t,e,n,r){zp(r),e=No(e,"onChange"),0<e.length&&(n=new fc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Mi=null,ts=null;function g0(t){vg(t,0)}function wl(t){var e=Ar(t);if(bp(e))return t}function m0(t,e){if(t==="change")return e}var ug=!1;if(qt){var na;if(qt){var ra="oninput"in document;if(!ra){var hh=document.createElement("div");hh.setAttribute("oninput","return;"),ra=typeof hh.oninput=="function"}na=ra}else na=!1;ug=na&&(!document.documentMode||9<document.documentMode)}function fh(){Mi&&(Mi.detachEvent("onpropertychange",cg),ts=Mi=null)}function cg(t){if(t.propertyName==="value"&&wl(ts)){var e=[];ag(e,ts,t,lc(t)),Hp(g0,e)}}function y0(t,e,n){t==="focusin"?(fh(),Mi=e,ts=n,Mi.attachEvent("onpropertychange",cg)):t==="focusout"&&fh()}function _0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wl(ts)}function v0(t,e){if(t==="click")return wl(e)}function w0(t,e){if(t==="input"||t==="change")return wl(e)}function C0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Pt=typeof Object.is=="function"?Object.is:C0;function ns(t,e){if(Pt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ja.call(e,i)||!Pt(t[i],e[i]))return!1}return!0}function ph(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gh(t,e){var n=ph(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ph(n)}}function dg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?dg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function hg(){for(var t=window,e=Eo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Eo(t.document)}return e}function mc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function S0(t){var e=hg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&dg(n.ownerDocument.documentElement,n)){if(r!==null&&mc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=gh(n,s);var o=gh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var x0=qt&&"documentMode"in document&&11>=document.documentMode,Ir=null,ru=null,ji=null,iu=!1;function mh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;iu||Ir==null||Ir!==Eo(r)||(r=Ir,"selectionStart"in r&&mc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ji&&ns(ji,r)||(ji=r,r=No(ru,"onSelect"),0<r.length&&(e=new fc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ir)))}function Ks(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Tr={animationend:Ks("Animation","AnimationEnd"),animationiteration:Ks("Animation","AnimationIteration"),animationstart:Ks("Animation","AnimationStart"),transitionend:Ks("Transition","TransitionEnd")},ia={},fg={};qt&&(fg=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function Cl(t){if(ia[t])return ia[t];if(!Tr[t])return t;var e=Tr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in fg)return ia[t]=e[n];return t}var pg=Cl("animationend"),gg=Cl("animationiteration"),mg=Cl("animationstart"),yg=Cl("transitionend"),_g=new Map,yh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ln(t,e){_g.set(t,e),pr(e,[t])}for(var sa=0;sa<yh.length;sa++){var oa=yh[sa],E0=oa.toLowerCase(),k0=oa[0].toUpperCase()+oa.slice(1);Ln(E0,"on"+k0)}Ln(pg,"onAnimationEnd");Ln(gg,"onAnimationIteration");Ln(mg,"onAnimationStart");Ln("dblclick","onDoubleClick");Ln("focusin","onFocus");Ln("focusout","onBlur");Ln(yg,"onTransitionEnd");Qr("onMouseEnter",["mouseout","mouseover"]);Qr("onMouseLeave",["mouseout","mouseover"]);Qr("onPointerEnter",["pointerout","pointerover"]);Qr("onPointerLeave",["pointerout","pointerover"]);pr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pr("onBeforeInput",["compositionend","keypress","textInput","paste"]);pr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Di));function _h(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Ev(r,e,void 0,t),t.currentTarget=null}function vg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;_h(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;_h(i,l,u),s=a}}}if(Io)throw t=Za,Io=!1,Za=null,t}function oe(t,e){var n=e[uu];n===void 0&&(n=e[uu]=new Set);var r=t+"__bubble";n.has(r)||(wg(e,t,2,!1),n.add(r))}function la(t,e,n){var r=0;e&&(r|=4),wg(n,t,r,e)}var Qs="_reactListening"+Math.random().toString(36).slice(2);function rs(t){if(!t[Qs]){t[Qs]=!0,Tp.forEach(function(n){n!=="selectionchange"&&(I0.has(n)||la(n,!1,t),la(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qs]||(e[Qs]=!0,la("selectionchange",!1,e))}}function wg(t,e,n,r){switch(rg(e)){case 1:var i=Bv;break;case 4:i=Uv;break;default:i=dc}n=i.bind(null,e,n,t),i=void 0,!Ja||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function aa(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Kn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Hp(function(){var u=s,f=lc(n),d=[];e:{var h=_g.get(t);if(h!==void 0){var y=fc,_=t;switch(t){case"keypress":if(co(n)===0)break e;case"keydown":case"keyup":y=n0;break;case"focusin":_="focus",y=ta;break;case"focusout":_="blur",y=ta;break;case"beforeblur":case"afterblur":y=ta;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=oh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=$v;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=s0;break;case pg:case gg:case mg:y=Kv;break;case yg:y=l0;break;case"scroll":y=Wv;break;case"wheel":y=u0;break;case"copy":case"cut":case"paste":y=Yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=ah}var w=(e&4)!==0,A=!w&&t==="scroll",g=w?h!==null?h+"Capture":null:h;w=[];for(var p=u,m;p!==null;){m=p;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,g!==null&&(S=Xi(p,g),S!=null&&w.push(is(p,S,m)))),A)break;p=p.return}0<w.length&&(h=new y(h,_,null,n,f),d.push({event:h,listeners:w}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",h&&n!==qa&&(_=n.relatedTarget||n.fromElement)&&(Kn(_)||_[Xt]))break e;if((y||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,y?(_=n.relatedTarget||n.toElement,y=u,_=_?Kn(_):null,_!==null&&(A=gr(_),_!==A||_.tag!==5&&_.tag!==6)&&(_=null)):(y=null,_=u),y!==_)){if(w=oh,S="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(w=ah,S="onPointerLeave",g="onPointerEnter",p="pointer"),A=y==null?h:Ar(y),m=_==null?h:Ar(_),h=new w(S,p+"leave",y,n,f),h.target=A,h.relatedTarget=m,S=null,Kn(f)===u&&(w=new w(g,p+"enter",_,n,f),w.target=m,w.relatedTarget=A,S=w),A=S,y&&_)t:{for(w=y,g=_,p=0,m=w;m;m=_r(m))p++;for(m=0,S=g;S;S=_r(S))m++;for(;0<p-m;)w=_r(w),p--;for(;0<m-p;)g=_r(g),m--;for(;p--;){if(w===g||g!==null&&w===g.alternate)break t;w=_r(w),g=_r(g)}w=null}else w=null;y!==null&&vh(d,h,y,w,!1),_!==null&&A!==null&&vh(d,A,_,w,!0)}}e:{if(h=u?Ar(u):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var k=m0;else if(dh(h))if(ug)k=w0;else{k=_0;var P=y0}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(k=v0);if(k&&(k=k(t,u))){ag(d,k,n,f);break e}P&&P(t,h,u),t==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&Va(h,"number",h.value)}switch(P=u?Ar(u):window,t){case"focusin":(dh(P)||P.contentEditable==="true")&&(Ir=P,ru=u,ji=null);break;case"focusout":ji=ru=Ir=null;break;case"mousedown":iu=!0;break;case"contextmenu":case"mouseup":case"dragend":iu=!1,mh(d,n,f);break;case"selectionchange":if(x0)break;case"keydown":case"keyup":mh(d,n,f)}var I;if(gc)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else kr?og(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(sg&&n.locale!=="ko"&&(kr||x!=="onCompositionStart"?x==="onCompositionEnd"&&kr&&(I=ig()):(_n=f,hc="value"in _n?_n.value:_n.textContent,kr=!0)),P=No(u,x),0<P.length&&(x=new lh(x,t,null,n,f),d.push({event:x,listeners:P}),I?x.data=I:(I=lg(n),I!==null&&(x.data=I)))),(I=d0?h0(t,n):f0(t,n))&&(u=No(u,"onBeforeInput"),0<u.length&&(f=new lh("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=I))}vg(d,e)})}function is(t,e,n){return{instance:t,listener:e,currentTarget:n}}function No(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Xi(t,n),s!=null&&r.unshift(is(t,s,i)),s=Xi(t,e),s!=null&&r.push(is(t,s,i))),t=t.return}return r}function _r(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Xi(n,s),a!=null&&o.unshift(is(n,a,l))):i||(a=Xi(n,s),a!=null&&o.push(is(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var T0=/\r\n?/g,A0=/\u0000|\uFFFD/g;function wh(t){return(typeof t=="string"?t:""+t).replace(T0,`
`).replace(A0,"")}function Ys(t,e,n){if(e=wh(e),wh(t)!==e&&n)throw Error(E(425))}function bo(){}var su=null,ou=null;function lu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var au=typeof setTimeout=="function"?setTimeout:void 0,R0=typeof clearTimeout=="function"?clearTimeout:void 0,Ch=typeof Promise=="function"?Promise:void 0,P0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ch<"u"?function(t){return Ch.resolve(null).then(t).catch(N0)}:au;function N0(t){setTimeout(function(){throw t})}function ua(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),es(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);es(e)}function xn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Sh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ui=Math.random().toString(36).slice(2),Ft="__reactFiber$"+ui,ss="__reactProps$"+ui,Xt="__reactContainer$"+ui,uu="__reactEvents$"+ui,b0="__reactListeners$"+ui,D0="__reactHandles$"+ui;function Kn(t){var e=t[Ft];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Xt]||n[Ft]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Sh(t);t!==null;){if(n=t[Ft])return n;t=Sh(t)}return e}t=n,n=t.parentNode}return null}function Es(t){return t=t[Ft]||t[Xt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ar(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function Sl(t){return t[ss]||null}var cu=[],Rr=-1;function Mn(t){return{current:t}}function ae(t){0>Rr||(t.current=cu[Rr],cu[Rr]=null,Rr--)}function se(t,e){Rr++,cu[Rr]=t.current,t.current=e}var Dn={},Be=Mn(Dn),Xe=Mn(!1),nr=Dn;function Yr(t,e){var n=t.type.contextTypes;if(!n)return Dn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Je(t){return t=t.childContextTypes,t!=null}function Do(){ae(Xe),ae(Be)}function xh(t,e,n){if(Be.current!==Dn)throw Error(E(168));se(Be,e),se(Xe,n)}function Cg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,yv(t)||"Unknown",i));return pe({},n,r)}function Fo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dn,nr=Be.current,se(Be,t),se(Xe,Xe.current),!0}function Eh(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=Cg(t,e,nr),r.__reactInternalMemoizedMergedChildContext=t,ae(Xe),ae(Be),se(Be,t)):ae(Xe),se(Xe,n)}var Ut=null,xl=!1,ca=!1;function Sg(t){Ut===null?Ut=[t]:Ut.push(t)}function F0(t){xl=!0,Sg(t)}function jn(){if(!ca&&Ut!==null){ca=!0;var t=0,e=J;try{var n=Ut;for(J=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ut=null,xl=!1}catch(i){throw Ut!==null&&(Ut=Ut.slice(t+1)),Kp(ac,jn),i}finally{J=e,ca=!1}}return null}var Pr=[],Nr=0,Oo=null,Lo=0,ct=[],dt=0,rr=null,Ht=1,$t="";function Wn(t,e){Pr[Nr++]=Lo,Pr[Nr++]=Oo,Oo=t,Lo=e}function xg(t,e,n){ct[dt++]=Ht,ct[dt++]=$t,ct[dt++]=rr,rr=t;var r=Ht;t=$t;var i=32-It(r)-1;r&=~(1<<i),n+=1;var s=32-It(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ht=1<<32-It(e)+i|n<<i|r,$t=s+t}else Ht=1<<s|n<<i|r,$t=t}function yc(t){t.return!==null&&(Wn(t,1),xg(t,1,0))}function _c(t){for(;t===Oo;)Oo=Pr[--Nr],Pr[Nr]=null,Lo=Pr[--Nr],Pr[Nr]=null;for(;t===rr;)rr=ct[--dt],ct[dt]=null,$t=ct[--dt],ct[dt]=null,Ht=ct[--dt],ct[dt]=null}var it=null,rt=null,ue=!1,wt=null;function Eg(t,e){var n=ht(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function kh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,it=t,rt=xn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,it=t,rt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=rr!==null?{id:Ht,overflow:$t}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ht(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,it=t,rt=null,!0):!1;default:return!1}}function du(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hu(t){if(ue){var e=rt;if(e){var n=e;if(!kh(t,e)){if(du(t))throw Error(E(418));e=xn(n.nextSibling);var r=it;e&&kh(t,e)?Eg(r,n):(t.flags=t.flags&-4097|2,ue=!1,it=t)}}else{if(du(t))throw Error(E(418));t.flags=t.flags&-4097|2,ue=!1,it=t}}}function Ih(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;it=t}function qs(t){if(t!==it)return!1;if(!ue)return Ih(t),ue=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!lu(t.type,t.memoizedProps)),e&&(e=rt)){if(du(t))throw kg(),Error(E(418));for(;e;)Eg(t,e),e=xn(e.nextSibling)}if(Ih(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){rt=xn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}rt=null}}else rt=it?xn(t.stateNode.nextSibling):null;return!0}function kg(){for(var t=rt;t;)t=xn(t.nextSibling)}function qr(){rt=it=null,ue=!1}function vc(t){wt===null?wt=[t]:wt.push(t)}var O0=sn.ReactCurrentBatchConfig;function Si(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function Xs(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Th(t){var e=t._init;return e(t._payload)}function Ig(t){function e(g,p){if(t){var m=g.deletions;m===null?(g.deletions=[p],g.flags|=16):m.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=Tn(g,p),g.index=0,g.sibling=null,g}function s(g,p,m){return g.index=m,t?(m=g.alternate,m!==null?(m=m.index,m<p?(g.flags|=2,p):m):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function l(g,p,m,S){return p===null||p.tag!==6?(p=ya(m,g.mode,S),p.return=g,p):(p=i(p,m),p.return=g,p)}function a(g,p,m,S){var k=m.type;return k===Er?f(g,p,m.props.children,S,m.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===dn&&Th(k)===p.type)?(S=i(p,m.props),S.ref=Si(g,p,m),S.return=g,S):(S=_o(m.type,m.key,m.props,null,g.mode,S),S.ref=Si(g,p,m),S.return=g,S)}function u(g,p,m,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=_a(m,g.mode,S),p.return=g,p):(p=i(p,m.children||[]),p.return=g,p)}function f(g,p,m,S,k){return p===null||p.tag!==7?(p=er(m,g.mode,S,k),p.return=g,p):(p=i(p,m),p.return=g,p)}function d(g,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ya(""+p,g.mode,m),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Bs:return m=_o(p.type,p.key,p.props,null,g.mode,m),m.ref=Si(g,null,p),m.return=g,m;case xr:return p=_a(p,g.mode,m),p.return=g,p;case dn:var S=p._init;return d(g,S(p._payload),m)}if(Ni(p)||yi(p))return p=er(p,g.mode,m,null),p.return=g,p;Xs(g,p)}return null}function h(g,p,m,S){var k=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:l(g,p,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Bs:return m.key===k?a(g,p,m,S):null;case xr:return m.key===k?u(g,p,m,S):null;case dn:return k=m._init,h(g,p,k(m._payload),S)}if(Ni(m)||yi(m))return k!==null?null:f(g,p,m,S,null);Xs(g,m)}return null}function y(g,p,m,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(m)||null,l(p,g,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Bs:return g=g.get(S.key===null?m:S.key)||null,a(p,g,S,k);case xr:return g=g.get(S.key===null?m:S.key)||null,u(p,g,S,k);case dn:var P=S._init;return y(g,p,m,P(S._payload),k)}if(Ni(S)||yi(S))return g=g.get(m)||null,f(p,g,S,k,null);Xs(p,S)}return null}function _(g,p,m,S){for(var k=null,P=null,I=p,x=p=0,j=null;I!==null&&x<m.length;x++){I.index>x?(j=I,I=null):j=I.sibling;var z=h(g,I,m[x],S);if(z===null){I===null&&(I=j);break}t&&I&&z.alternate===null&&e(g,I),p=s(z,p,x),P===null?k=z:P.sibling=z,P=z,I=j}if(x===m.length)return n(g,I),ue&&Wn(g,x),k;if(I===null){for(;x<m.length;x++)I=d(g,m[x],S),I!==null&&(p=s(I,p,x),P===null?k=I:P.sibling=I,P=I);return ue&&Wn(g,x),k}for(I=r(g,I);x<m.length;x++)j=y(I,g,x,m[x],S),j!==null&&(t&&j.alternate!==null&&I.delete(j.key===null?x:j.key),p=s(j,p,x),P===null?k=j:P.sibling=j,P=j);return t&&I.forEach(function(ee){return e(g,ee)}),ue&&Wn(g,x),k}function w(g,p,m,S){var k=yi(m);if(typeof k!="function")throw Error(E(150));if(m=k.call(m),m==null)throw Error(E(151));for(var P=k=null,I=p,x=p=0,j=null,z=m.next();I!==null&&!z.done;x++,z=m.next()){I.index>x?(j=I,I=null):j=I.sibling;var ee=h(g,I,z.value,S);if(ee===null){I===null&&(I=j);break}t&&I&&ee.alternate===null&&e(g,I),p=s(ee,p,x),P===null?k=ee:P.sibling=ee,P=ee,I=j}if(z.done)return n(g,I),ue&&Wn(g,x),k;if(I===null){for(;!z.done;x++,z=m.next())z=d(g,z.value,S),z!==null&&(p=s(z,p,x),P===null?k=z:P.sibling=z,P=z);return ue&&Wn(g,x),k}for(I=r(g,I);!z.done;x++,z=m.next())z=y(I,g,x,z.value,S),z!==null&&(t&&z.alternate!==null&&I.delete(z.key===null?x:z.key),p=s(z,p,x),P===null?k=z:P.sibling=z,P=z);return t&&I.forEach(function(Re){return e(g,Re)}),ue&&Wn(g,x),k}function A(g,p,m,S){if(typeof m=="object"&&m!==null&&m.type===Er&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Bs:e:{for(var k=m.key,P=p;P!==null;){if(P.key===k){if(k=m.type,k===Er){if(P.tag===7){n(g,P.sibling),p=i(P,m.props.children),p.return=g,g=p;break e}}else if(P.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===dn&&Th(k)===P.type){n(g,P.sibling),p=i(P,m.props),p.ref=Si(g,P,m),p.return=g,g=p;break e}n(g,P);break}else e(g,P);P=P.sibling}m.type===Er?(p=er(m.props.children,g.mode,S,m.key),p.return=g,g=p):(S=_o(m.type,m.key,m.props,null,g.mode,S),S.ref=Si(g,p,m),S.return=g,g=S)}return o(g);case xr:e:{for(P=m.key;p!==null;){if(p.key===P)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(g,p.sibling),p=i(p,m.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=_a(m,g.mode,S),p.return=g,g=p}return o(g);case dn:return P=m._init,A(g,p,P(m._payload),S)}if(Ni(m))return _(g,p,m,S);if(yi(m))return w(g,p,m,S);Xs(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,m),p.return=g,g=p):(n(g,p),p=ya(m,g.mode,S),p.return=g,g=p),o(g)):n(g,p)}return A}var Xr=Ig(!0),Tg=Ig(!1),Mo=Mn(null),jo=null,br=null,wc=null;function Cc(){wc=br=jo=null}function Sc(t){var e=Mo.current;ae(Mo),t._currentValue=e}function fu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Br(t,e){jo=t,wc=br=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qe=!0),t.firstContext=null)}function pt(t){var e=t._currentValue;if(wc!==t)if(t={context:t,memoizedValue:e,next:null},br===null){if(jo===null)throw Error(E(308));br=t,jo.dependencies={lanes:0,firstContext:t}}else br=br.next=t;return e}var Qn=null;function xc(t){Qn===null?Qn=[t]:Qn.push(t)}function Ag(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,xc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Jt(t,r)}function Jt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var hn=!1;function Ec(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Qt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function En(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Jt(t,n)}return i=r.interleaved,i===null?(e.next=e,xc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Jt(t,n)}function ho(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,uc(t,n)}}function Ah(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function zo(t,e,n,r){var i=t.updateQueue;hn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,f=u=a=null,l=s;do{var h=l.lane,y=l.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,w=l;switch(h=e,y=n,w.tag){case 1:if(_=w.payload,typeof _=="function"){d=_.call(y,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=w.payload,h=typeof _=="function"?_.call(y,d,h):_,h==null)break e;d=pe({},d,h);break e;case 2:hn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else y={eventTime:y,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=y,a=d):f=f.next=y,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(f===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);sr|=o,t.lanes=o,t.memoizedState=d}}function Rh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var ks={},Lt=Mn(ks),os=Mn(ks),ls=Mn(ks);function Yn(t){if(t===ks)throw Error(E(174));return t}function kc(t,e){switch(se(ls,e),se(os,t),se(Lt,ks),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ka(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ka(e,t)}ae(Lt),se(Lt,e)}function Jr(){ae(Lt),ae(os),ae(ls)}function Pg(t){Yn(ls.current);var e=Yn(Lt.current),n=Ka(e,t.type);e!==n&&(se(os,t),se(Lt,n))}function Ic(t){os.current===t&&(ae(Lt),ae(os))}var he=Mn(0);function Bo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var da=[];function Tc(){for(var t=0;t<da.length;t++)da[t]._workInProgressVersionPrimary=null;da.length=0}var fo=sn.ReactCurrentDispatcher,ha=sn.ReactCurrentBatchConfig,ir=0,fe=null,Ce=null,ke=null,Uo=!1,zi=!1,as=0,L0=0;function Le(){throw Error(E(321))}function Ac(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Pt(t[n],e[n]))return!1;return!0}function Rc(t,e,n,r,i,s){if(ir=s,fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fo.current=t===null||t.memoizedState===null?B0:U0,t=n(r,i),zi){s=0;do{if(zi=!1,as=0,25<=s)throw Error(E(301));s+=1,ke=Ce=null,e.updateQueue=null,fo.current=W0,t=n(r,i)}while(zi)}if(fo.current=Wo,e=Ce!==null&&Ce.next!==null,ir=0,ke=Ce=fe=null,Uo=!1,e)throw Error(E(300));return t}function Pc(){var t=as!==0;return as=0,t}function Dt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?fe.memoizedState=ke=t:ke=ke.next=t,ke}function gt(){if(Ce===null){var t=fe.alternate;t=t!==null?t.memoizedState:null}else t=Ce.next;var e=ke===null?fe.memoizedState:ke.next;if(e!==null)ke=e,Ce=t;else{if(t===null)throw Error(E(310));Ce=t,t={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},ke===null?fe.memoizedState=ke=t:ke=ke.next=t}return ke}function us(t,e){return typeof e=="function"?e(t):e}function fa(t){var e=gt(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=Ce,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var f=u.lane;if((ir&f)===f)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,fe.lanes|=f,sr|=f}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,Pt(r,e.memoizedState)||(Qe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,fe.lanes|=s,sr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function pa(t){var e=gt(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Pt(s,e.memoizedState)||(Qe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Ng(){}function bg(t,e){var n=fe,r=gt(),i=e(),s=!Pt(r.memoizedState,i);if(s&&(r.memoizedState=i,Qe=!0),r=r.queue,Nc(Og.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,cs(9,Fg.bind(null,n,r,i,e),void 0,null),Ae===null)throw Error(E(349));ir&30||Dg(n,e,i)}return i}function Dg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=fe.updateQueue,e===null?(e={lastEffect:null,stores:null},fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Fg(t,e,n,r){e.value=n,e.getSnapshot=r,Lg(e)&&Mg(t)}function Og(t,e,n){return n(function(){Lg(e)&&Mg(t)})}function Lg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Pt(t,n)}catch{return!0}}function Mg(t){var e=Jt(t,1);e!==null&&Tt(e,t,1,-1)}function Ph(t){var e=Dt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:us,lastRenderedState:t},e.queue=t,t=t.dispatch=z0.bind(null,fe,t),[e.memoizedState,t]}function cs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=fe.updateQueue,e===null?(e={lastEffect:null,stores:null},fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function jg(){return gt().memoizedState}function po(t,e,n,r){var i=Dt();fe.flags|=t,i.memoizedState=cs(1|e,n,void 0,r===void 0?null:r)}function El(t,e,n,r){var i=gt();r=r===void 0?null:r;var s=void 0;if(Ce!==null){var o=Ce.memoizedState;if(s=o.destroy,r!==null&&Ac(r,o.deps)){i.memoizedState=cs(e,n,s,r);return}}fe.flags|=t,i.memoizedState=cs(1|e,n,s,r)}function Nh(t,e){return po(8390656,8,t,e)}function Nc(t,e){return El(2048,8,t,e)}function zg(t,e){return El(4,2,t,e)}function Bg(t,e){return El(4,4,t,e)}function Ug(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Wg(t,e,n){return n=n!=null?n.concat([t]):null,El(4,4,Ug.bind(null,e,t),n)}function bc(){}function Hg(t,e){var n=gt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ac(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function $g(t,e){var n=gt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ac(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Vg(t,e,n){return ir&21?(Pt(n,e)||(n=qp(),fe.lanes|=n,sr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qe=!0),t.memoizedState=n)}function M0(t,e){var n=J;J=n!==0&&4>n?n:4,t(!0);var r=ha.transition;ha.transition={};try{t(!1),e()}finally{J=n,ha.transition=r}}function Gg(){return gt().memoizedState}function j0(t,e,n){var r=In(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Kg(t))Qg(e,n);else if(n=Ag(t,e,n,r),n!==null){var i=He();Tt(n,t,r,i),Yg(n,e,r)}}function z0(t,e,n){var r=In(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kg(t))Qg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Pt(l,o)){var a=e.interleaved;a===null?(i.next=i,xc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Ag(t,e,i,r),n!==null&&(i=He(),Tt(n,t,r,i),Yg(n,e,r))}}function Kg(t){var e=t.alternate;return t===fe||e!==null&&e===fe}function Qg(t,e){zi=Uo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Yg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,uc(t,n)}}var Wo={readContext:pt,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},B0={readContext:pt,useCallback:function(t,e){return Dt().memoizedState=[t,e===void 0?null:e],t},useContext:pt,useEffect:Nh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,po(4194308,4,Ug.bind(null,e,t),n)},useLayoutEffect:function(t,e){return po(4194308,4,t,e)},useInsertionEffect:function(t,e){return po(4,2,t,e)},useMemo:function(t,e){var n=Dt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Dt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=j0.bind(null,fe,t),[r.memoizedState,t]},useRef:function(t){var e=Dt();return t={current:t},e.memoizedState=t},useState:Ph,useDebugValue:bc,useDeferredValue:function(t){return Dt().memoizedState=t},useTransition:function(){var t=Ph(!1),e=t[0];return t=M0.bind(null,t[1]),Dt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=fe,i=Dt();if(ue){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),Ae===null)throw Error(E(349));ir&30||Dg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Nh(Og.bind(null,r,s,t),[t]),r.flags|=2048,cs(9,Fg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Dt(),e=Ae.identifierPrefix;if(ue){var n=$t,r=Ht;n=(r&~(1<<32-It(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=as++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=L0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},U0={readContext:pt,useCallback:Hg,useContext:pt,useEffect:Nc,useImperativeHandle:Wg,useInsertionEffect:zg,useLayoutEffect:Bg,useMemo:$g,useReducer:fa,useRef:jg,useState:function(){return fa(us)},useDebugValue:bc,useDeferredValue:function(t){var e=gt();return Vg(e,Ce.memoizedState,t)},useTransition:function(){var t=fa(us)[0],e=gt().memoizedState;return[t,e]},useMutableSource:Ng,useSyncExternalStore:bg,useId:Gg,unstable_isNewReconciler:!1},W0={readContext:pt,useCallback:Hg,useContext:pt,useEffect:Nc,useImperativeHandle:Wg,useInsertionEffect:zg,useLayoutEffect:Bg,useMemo:$g,useReducer:pa,useRef:jg,useState:function(){return pa(us)},useDebugValue:bc,useDeferredValue:function(t){var e=gt();return Ce===null?e.memoizedState=t:Vg(e,Ce.memoizedState,t)},useTransition:function(){var t=pa(us)[0],e=gt().memoizedState;return[t,e]},useMutableSource:Ng,useSyncExternalStore:bg,useId:Gg,unstable_isNewReconciler:!1};function _t(t,e){if(t&&t.defaultProps){e=pe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function pu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:pe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var kl={isMounted:function(t){return(t=t._reactInternals)?gr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=He(),i=In(t),s=Qt(r,i);s.payload=e,n!=null&&(s.callback=n),e=En(t,s,i),e!==null&&(Tt(e,t,i,r),ho(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=He(),i=In(t),s=Qt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=En(t,s,i),e!==null&&(Tt(e,t,i,r),ho(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=He(),r=In(t),i=Qt(n,r);i.tag=2,e!=null&&(i.callback=e),e=En(t,i,r),e!==null&&(Tt(e,t,r,n),ho(e,t,r))}};function bh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ns(n,r)||!ns(i,s):!0}function qg(t,e,n){var r=!1,i=Dn,s=e.contextType;return typeof s=="object"&&s!==null?s=pt(s):(i=Je(e)?nr:Be.current,r=e.contextTypes,s=(r=r!=null)?Yr(t,i):Dn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=kl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Dh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&kl.enqueueReplaceState(e,e.state,null)}function gu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ec(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=pt(s):(s=Je(e)?nr:Be.current,i.context=Yr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(pu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&kl.enqueueReplaceState(i,i.state,null),zo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Zr(t,e){try{var n="",r=e;do n+=mv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ga(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function mu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var H0=typeof WeakMap=="function"?WeakMap:Map;function Xg(t,e,n){n=Qt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){$o||($o=!0,Iu=r),mu(t,e)},n}function Jg(t,e,n){n=Qt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){mu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){mu(t,e),typeof r!="function"&&(kn===null?kn=new Set([this]):kn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Fh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new H0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=rw.bind(null,t,e,n),e.then(t,t))}function Oh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Lh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Qt(-1,1),e.tag=2,En(n,e,1))),n.lanes|=1),t)}var $0=sn.ReactCurrentOwner,Qe=!1;function We(t,e,n,r){e.child=t===null?Tg(e,null,n,r):Xr(e,t.child,n,r)}function Mh(t,e,n,r,i){n=n.render;var s=e.ref;return Br(e,i),r=Rc(t,e,n,r,s,i),n=Pc(),t!==null&&!Qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zt(t,e,i)):(ue&&n&&yc(e),e.flags|=1,We(t,e,r,i),e.child)}function jh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Bc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Zg(t,e,s,r,i)):(t=_o(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ns,n(o,r)&&t.ref===e.ref)return Zt(t,e,i)}return e.flags|=1,t=Tn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Zg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ns(s,r)&&t.ref===e.ref)if(Qe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Qe=!0);else return e.lanes=t.lanes,Zt(t,e,i)}return yu(t,e,n,r,i)}function em(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(Fr,nt),nt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,se(Fr,nt),nt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,se(Fr,nt),nt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,se(Fr,nt),nt|=r;return We(t,e,i,n),e.child}function tm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yu(t,e,n,r,i){var s=Je(n)?nr:Be.current;return s=Yr(e,s),Br(e,i),n=Rc(t,e,n,r,s,i),r=Pc(),t!==null&&!Qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zt(t,e,i)):(ue&&r&&yc(e),e.flags|=1,We(t,e,n,i),e.child)}function zh(t,e,n,r,i){if(Je(n)){var s=!0;Fo(e)}else s=!1;if(Br(e,i),e.stateNode===null)go(t,e),qg(e,n,r),gu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=pt(u):(u=Je(n)?nr:Be.current,u=Yr(e,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Dh(e,o,r,u),hn=!1;var h=e.memoizedState;o.state=h,zo(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Xe.current||hn?(typeof f=="function"&&(pu(e,n,f,r),a=e.memoizedState),(l=hn||bh(e,n,l,r,h,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Rg(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:_t(e.type,l),o.props=u,d=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=pt(a):(a=Je(n)?nr:Be.current,a=Yr(e,a));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==a)&&Dh(e,o,r,a),hn=!1,h=e.memoizedState,o.state=h,zo(e,r,o,i);var _=e.memoizedState;l!==d||h!==_||Xe.current||hn?(typeof y=="function"&&(pu(e,n,y,r),_=e.memoizedState),(u=hn||bh(e,n,u,r,h,_,a)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return _u(t,e,n,r,s,i)}function _u(t,e,n,r,i,s){tm(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Eh(e,n,!1),Zt(t,e,s);r=e.stateNode,$0.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Xr(e,t.child,null,s),e.child=Xr(e,null,l,s)):We(t,e,l,s),e.memoizedState=r.state,i&&Eh(e,n,!0),e.child}function nm(t){var e=t.stateNode;e.pendingContext?xh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&xh(t,e.context,!1),kc(t,e.containerInfo)}function Bh(t,e,n,r,i){return qr(),vc(i),e.flags|=256,We(t,e,n,r),e.child}var vu={dehydrated:null,treeContext:null,retryLane:0};function wu(t){return{baseLanes:t,cachePool:null,transitions:null}}function rm(t,e,n){var r=e.pendingProps,i=he.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),se(he,i&1),t===null)return hu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Al(o,r,0,null),t=er(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=wu(n),e.memoizedState=vu,t):Dc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return V0(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=Tn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Tn(l,s):(s=er(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?wu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=vu,r}return s=t.child,t=s.sibling,r=Tn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Dc(t,e){return e=Al({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Js(t,e,n,r){return r!==null&&vc(r),Xr(e,t.child,null,n),t=Dc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function V0(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ga(Error(E(422))),Js(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Al({mode:"visible",children:r.children},i,0,null),s=er(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Xr(e,t.child,null,o),e.child.memoizedState=wu(o),e.memoizedState=vu,s);if(!(e.mode&1))return Js(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(E(419)),r=ga(s,r,void 0),Js(t,e,o,r)}if(l=(o&t.childLanes)!==0,Qe||l){if(r=Ae,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Jt(t,i),Tt(r,t,i,-1))}return zc(),r=ga(Error(E(421))),Js(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=iw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,rt=xn(i.nextSibling),it=e,ue=!0,wt=null,t!==null&&(ct[dt++]=Ht,ct[dt++]=$t,ct[dt++]=rr,Ht=t.id,$t=t.overflow,rr=e),e=Dc(e,r.children),e.flags|=4096,e)}function Uh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),fu(t.return,e,n)}function ma(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function im(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(We(t,e,r.children,n),r=he.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Uh(t,n,e);else if(t.tag===19)Uh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(se(he,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Bo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ma(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Bo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ma(e,!0,n,null,s);break;case"together":ma(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function go(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Zt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),sr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=Tn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Tn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function G0(t,e,n){switch(e.tag){case 3:nm(e),qr();break;case 5:Pg(e);break;case 1:Je(e.type)&&Fo(e);break;case 4:kc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;se(Mo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(se(he,he.current&1),e.flags|=128,null):n&e.child.childLanes?rm(t,e,n):(se(he,he.current&1),t=Zt(t,e,n),t!==null?t.sibling:null);se(he,he.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return im(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),se(he,he.current),r)break;return null;case 22:case 23:return e.lanes=0,em(t,e,n)}return Zt(t,e,n)}var sm,Cu,om,lm;sm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cu=function(){};om=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Yn(Lt.current);var s=null;switch(n){case"input":i=Ha(t,i),r=Ha(t,r),s=[];break;case"select":i=pe({},i,{value:void 0}),r=pe({},r,{value:void 0}),s=[];break;case"textarea":i=Ga(t,i),r=Ga(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=bo)}Qa(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Yi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Yi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&oe("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};lm=function(t,e,n,r){n!==r&&(e.flags|=4)};function xi(t,e){if(!ue)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Me(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function K0(t,e,n){var r=e.pendingProps;switch(_c(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(e),null;case 1:return Je(e.type)&&Do(),Me(e),null;case 3:return r=e.stateNode,Jr(),ae(Xe),ae(Be),Tc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(qs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,wt!==null&&(Ru(wt),wt=null))),Cu(t,e),Me(e),null;case 5:Ic(e);var i=Yn(ls.current);if(n=e.type,t!==null&&e.stateNode!=null)om(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return Me(e),null}if(t=Yn(Lt.current),qs(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ft]=e,r[ss]=s,t=(e.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(i=0;i<Di.length;i++)oe(Di[i],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":qd(r,s),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},oe("invalid",r);break;case"textarea":Jd(r,s),oe("invalid",r)}Qa(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ys(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ys(r.textContent,l,t),i=["children",""+l]):Yi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&oe("scroll",r)}switch(n){case"input":Us(r),Xd(r,s,!0);break;case"textarea":Us(r),Zd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=bo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Op(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ft]=e,t[ss]=r,sm(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ya(n,r),n){case"dialog":oe("cancel",t),oe("close",t),i=r;break;case"iframe":case"object":case"embed":oe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Di.length;i++)oe(Di[i],t);i=r;break;case"source":oe("error",t),i=r;break;case"img":case"image":case"link":oe("error",t),oe("load",t),i=r;break;case"details":oe("toggle",t),i=r;break;case"input":qd(t,r),i=Ha(t,r),oe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=pe({},r,{value:void 0}),oe("invalid",t);break;case"textarea":Jd(t,r),i=Ga(t,r),oe("invalid",t);break;default:i=r}Qa(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?jp(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Lp(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&qi(t,a):typeof a=="number"&&qi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Yi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&oe("scroll",t):a!=null&&rc(t,s,a,o))}switch(n){case"input":Us(t),Xd(t,r,!1);break;case"textarea":Us(t),Zd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+bn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Lr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Lr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=bo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Me(e),null;case 6:if(t&&e.stateNode!=null)lm(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=Yn(ls.current),Yn(Lt.current),qs(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ft]=e,(s=r.nodeValue!==n)&&(t=it,t!==null))switch(t.tag){case 3:Ys(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ys(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ft]=e,e.stateNode=r}return Me(e),null;case 13:if(ae(he),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ue&&rt!==null&&e.mode&1&&!(e.flags&128))kg(),qr(),e.flags|=98560,s=!1;else if(s=qs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[Ft]=e}else qr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Me(e),s=!1}else wt!==null&&(Ru(wt),wt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||he.current&1?xe===0&&(xe=3):zc())),e.updateQueue!==null&&(e.flags|=4),Me(e),null);case 4:return Jr(),Cu(t,e),t===null&&rs(e.stateNode.containerInfo),Me(e),null;case 10:return Sc(e.type._context),Me(e),null;case 17:return Je(e.type)&&Do(),Me(e),null;case 19:if(ae(he),s=e.memoizedState,s===null)return Me(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)xi(s,!1);else{if(xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Bo(t),o!==null){for(e.flags|=128,xi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return se(he,he.current&1|2),e.child}t=t.sibling}s.tail!==null&&ye()>ei&&(e.flags|=128,r=!0,xi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Bo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ue)return Me(e),null}else 2*ye()-s.renderingStartTime>ei&&n!==1073741824&&(e.flags|=128,r=!0,xi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ye(),e.sibling=null,n=he.current,se(he,r?n&1|2:n&1),e):(Me(e),null);case 22:case 23:return jc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?nt&1073741824&&(Me(e),e.subtreeFlags&6&&(e.flags|=8192)):Me(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function Q0(t,e){switch(_c(e),e.tag){case 1:return Je(e.type)&&Do(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Jr(),ae(Xe),ae(Be),Tc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ic(e),null;case 13:if(ae(he),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));qr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ae(he),null;case 4:return Jr(),null;case 10:return Sc(e.type._context),null;case 22:case 23:return jc(),null;case 24:return null;default:return null}}var Zs=!1,je=!1,Y0=typeof WeakSet=="function"?WeakSet:Set,F=null;function Dr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ge(t,e,r)}else n.current=null}function Su(t,e,n){try{n()}catch(r){ge(t,e,r)}}var Wh=!1;function q0(t,e){if(su=Ro,t=hg(),mc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,f=0,d=t,h=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(y=d.firstChild)!==null;)h=d,d=y;for(;;){if(d===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++f===r&&(a=o),(y=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=y}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ou={focusedElem:t,selectionRange:n},Ro=!1,F=e;F!==null;)if(e=F,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,F=t;else for(;F!==null;){e=F;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var w=_.memoizedProps,A=_.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?w:_t(e.type,w),A);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(S){ge(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,F=t;break}F=e.return}return _=Wh,Wh=!1,_}function Bi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Su(e,n,s)}i=i.next}while(i!==r)}}function Il(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function xu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function am(t){var e=t.alternate;e!==null&&(t.alternate=null,am(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ft],delete e[ss],delete e[uu],delete e[b0],delete e[D0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function um(t){return t.tag===5||t.tag===3||t.tag===4}function Hh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||um(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Eu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=bo));else if(r!==4&&(t=t.child,t!==null))for(Eu(t,e,n),t=t.sibling;t!==null;)Eu(t,e,n),t=t.sibling}function ku(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ku(t,e,n),t=t.sibling;t!==null;)ku(t,e,n),t=t.sibling}var Ne=null,vt=!1;function ln(t,e,n){for(n=n.child;n!==null;)cm(t,e,n),n=n.sibling}function cm(t,e,n){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(_l,n)}catch{}switch(n.tag){case 5:je||Dr(n,e);case 6:var r=Ne,i=vt;Ne=null,ln(t,e,n),Ne=r,vt=i,Ne!==null&&(vt?(t=Ne,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(vt?(t=Ne,n=n.stateNode,t.nodeType===8?ua(t.parentNode,n):t.nodeType===1&&ua(t,n),es(t)):ua(Ne,n.stateNode));break;case 4:r=Ne,i=vt,Ne=n.stateNode.containerInfo,vt=!0,ln(t,e,n),Ne=r,vt=i;break;case 0:case 11:case 14:case 15:if(!je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Su(n,e,o),i=i.next}while(i!==r)}ln(t,e,n);break;case 1:if(!je&&(Dr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ge(n,e,l)}ln(t,e,n);break;case 21:ln(t,e,n);break;case 22:n.mode&1?(je=(r=je)||n.memoizedState!==null,ln(t,e,n),je=r):ln(t,e,n);break;default:ln(t,e,n)}}function $h(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Y0),e.forEach(function(r){var i=sw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function yt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ne=l.stateNode,vt=!1;break e;case 3:Ne=l.stateNode.containerInfo,vt=!0;break e;case 4:Ne=l.stateNode.containerInfo,vt=!0;break e}l=l.return}if(Ne===null)throw Error(E(160));cm(s,o,i),Ne=null,vt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ge(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)dm(e,t),e=e.sibling}function dm(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(yt(e,t),bt(t),r&4){try{Bi(3,t,t.return),Il(3,t)}catch(w){ge(t,t.return,w)}try{Bi(5,t,t.return)}catch(w){ge(t,t.return,w)}}break;case 1:yt(e,t),bt(t),r&512&&n!==null&&Dr(n,n.return);break;case 5:if(yt(e,t),bt(t),r&512&&n!==null&&Dr(n,n.return),t.flags&32){var i=t.stateNode;try{qi(i,"")}catch(w){ge(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Dp(i,s),Ya(l,o);var u=Ya(l,s);for(o=0;o<a.length;o+=2){var f=a[o],d=a[o+1];f==="style"?jp(i,d):f==="dangerouslySetInnerHTML"?Lp(i,d):f==="children"?qi(i,d):rc(i,f,d,u)}switch(l){case"input":$a(i,s);break;case"textarea":Fp(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Lr(i,!!s.multiple,y,!1):h!==!!s.multiple&&(s.defaultValue!=null?Lr(i,!!s.multiple,s.defaultValue,!0):Lr(i,!!s.multiple,s.multiple?[]:"",!1))}i[ss]=s}catch(w){ge(t,t.return,w)}}break;case 6:if(yt(e,t),bt(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){ge(t,t.return,w)}}break;case 3:if(yt(e,t),bt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{es(e.containerInfo)}catch(w){ge(t,t.return,w)}break;case 4:yt(e,t),bt(t);break;case 13:yt(e,t),bt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Lc=ye())),r&4&&$h(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(je=(u=je)||f,yt(e,t),je=u):yt(e,t),bt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(F=t,f=t.child;f!==null;){for(d=F=f;F!==null;){switch(h=F,y=h.child,h.tag){case 0:case 11:case 14:case 15:Bi(4,h,h.return);break;case 1:Dr(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(w){ge(r,n,w)}}break;case 5:Dr(h,h.return);break;case 22:if(h.memoizedState!==null){Gh(d);continue}}y!==null?(y.return=h,F=y):Gh(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Mp("display",o))}catch(w){ge(t,t.return,w)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){ge(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:yt(e,t),bt(t),r&4&&$h(t);break;case 21:break;default:yt(e,t),bt(t)}}function bt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(um(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(qi(i,""),r.flags&=-33);var s=Hh(t);ku(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Hh(t);Eu(t,l,o);break;default:throw Error(E(161))}}catch(a){ge(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function X0(t,e,n){F=t,hm(t)}function hm(t,e,n){for(var r=(t.mode&1)!==0;F!==null;){var i=F,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Zs;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||je;l=Zs;var u=je;if(Zs=o,(je=a)&&!u)for(F=i;F!==null;)o=F,a=o.child,o.tag===22&&o.memoizedState!==null?Kh(i):a!==null?(a.return=o,F=a):Kh(i);for(;s!==null;)F=s,hm(s),s=s.sibling;F=i,Zs=l,je=u}Vh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,F=s):Vh(t)}}function Vh(t){for(;F!==null;){var e=F;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:je||Il(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!je)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:_t(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Rh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Rh(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&es(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}je||e.flags&512&&xu(e)}catch(h){ge(e,e.return,h)}}if(e===t){F=null;break}if(n=e.sibling,n!==null){n.return=e.return,F=n;break}F=e.return}}function Gh(t){for(;F!==null;){var e=F;if(e===t){F=null;break}var n=e.sibling;if(n!==null){n.return=e.return,F=n;break}F=e.return}}function Kh(t){for(;F!==null;){var e=F;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Il(4,e)}catch(a){ge(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){ge(e,i,a)}}var s=e.return;try{xu(e)}catch(a){ge(e,s,a)}break;case 5:var o=e.return;try{xu(e)}catch(a){ge(e,o,a)}}}catch(a){ge(e,e.return,a)}if(e===t){F=null;break}var l=e.sibling;if(l!==null){l.return=e.return,F=l;break}F=e.return}}var J0=Math.ceil,Ho=sn.ReactCurrentDispatcher,Fc=sn.ReactCurrentOwner,ft=sn.ReactCurrentBatchConfig,Y=0,Ae=null,we=null,De=0,nt=0,Fr=Mn(0),xe=0,ds=null,sr=0,Tl=0,Oc=0,Ui=null,Ke=null,Lc=0,ei=1/0,Bt=null,$o=!1,Iu=null,kn=null,eo=!1,vn=null,Vo=0,Wi=0,Tu=null,mo=-1,yo=0;function He(){return Y&6?ye():mo!==-1?mo:mo=ye()}function In(t){return t.mode&1?Y&2&&De!==0?De&-De:O0.transition!==null?(yo===0&&(yo=qp()),yo):(t=J,t!==0||(t=window.event,t=t===void 0?16:rg(t.type)),t):1}function Tt(t,e,n,r){if(50<Wi)throw Wi=0,Tu=null,Error(E(185));Ss(t,n,r),(!(Y&2)||t!==Ae)&&(t===Ae&&(!(Y&2)&&(Tl|=n),xe===4&&pn(t,De)),Ze(t,r),n===1&&Y===0&&!(e.mode&1)&&(ei=ye()+500,xl&&jn()))}function Ze(t,e){var n=t.callbackNode;Ov(t,e);var r=Ao(t,t===Ae?De:0);if(r===0)n!==null&&nh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&nh(n),e===1)t.tag===0?F0(Qh.bind(null,t)):Sg(Qh.bind(null,t)),P0(function(){!(Y&6)&&jn()}),n=null;else{switch(Xp(r)){case 1:n=ac;break;case 4:n=Qp;break;case 16:n=To;break;case 536870912:n=Yp;break;default:n=To}n=wm(n,fm.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function fm(t,e){if(mo=-1,yo=0,Y&6)throw Error(E(327));var n=t.callbackNode;if(Ur()&&t.callbackNode!==n)return null;var r=Ao(t,t===Ae?De:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Go(t,r);else{e=r;var i=Y;Y|=2;var s=gm();(Ae!==t||De!==e)&&(Bt=null,ei=ye()+500,Zn(t,e));do try{tw();break}catch(l){pm(t,l)}while(!0);Cc(),Ho.current=s,Y=i,we!==null?e=0:(Ae=null,De=0,e=xe)}if(e!==0){if(e===2&&(i=eu(t),i!==0&&(r=i,e=Au(t,i))),e===1)throw n=ds,Zn(t,0),pn(t,r),Ze(t,ye()),n;if(e===6)pn(t,r);else{if(i=t.current.alternate,!(r&30)&&!Z0(i)&&(e=Go(t,r),e===2&&(s=eu(t),s!==0&&(r=s,e=Au(t,s))),e===1))throw n=ds,Zn(t,0),pn(t,r),Ze(t,ye()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:Hn(t,Ke,Bt);break;case 3:if(pn(t,r),(r&130023424)===r&&(e=Lc+500-ye(),10<e)){if(Ao(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){He(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=au(Hn.bind(null,t,Ke,Bt),e);break}Hn(t,Ke,Bt);break;case 4:if(pn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-It(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*J0(r/1960))-r,10<r){t.timeoutHandle=au(Hn.bind(null,t,Ke,Bt),r);break}Hn(t,Ke,Bt);break;case 5:Hn(t,Ke,Bt);break;default:throw Error(E(329))}}}return Ze(t,ye()),t.callbackNode===n?fm.bind(null,t):null}function Au(t,e){var n=Ui;return t.current.memoizedState.isDehydrated&&(Zn(t,e).flags|=256),t=Go(t,e),t!==2&&(e=Ke,Ke=n,e!==null&&Ru(e)),t}function Ru(t){Ke===null?Ke=t:Ke.push.apply(Ke,t)}function Z0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Pt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pn(t,e){for(e&=~Oc,e&=~Tl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-It(e),r=1<<n;t[n]=-1,e&=~r}}function Qh(t){if(Y&6)throw Error(E(327));Ur();var e=Ao(t,0);if(!(e&1))return Ze(t,ye()),null;var n=Go(t,e);if(t.tag!==0&&n===2){var r=eu(t);r!==0&&(e=r,n=Au(t,r))}if(n===1)throw n=ds,Zn(t,0),pn(t,e),Ze(t,ye()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Hn(t,Ke,Bt),Ze(t,ye()),null}function Mc(t,e){var n=Y;Y|=1;try{return t(e)}finally{Y=n,Y===0&&(ei=ye()+500,xl&&jn())}}function or(t){vn!==null&&vn.tag===0&&!(Y&6)&&Ur();var e=Y;Y|=1;var n=ft.transition,r=J;try{if(ft.transition=null,J=1,t)return t()}finally{J=r,ft.transition=n,Y=e,!(Y&6)&&jn()}}function jc(){nt=Fr.current,ae(Fr)}function Zn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,R0(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(_c(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Do();break;case 3:Jr(),ae(Xe),ae(Be),Tc();break;case 5:Ic(r);break;case 4:Jr();break;case 13:ae(he);break;case 19:ae(he);break;case 10:Sc(r.type._context);break;case 22:case 23:jc()}n=n.return}if(Ae=t,we=t=Tn(t.current,null),De=nt=e,xe=0,ds=null,Oc=Tl=sr=0,Ke=Ui=null,Qn!==null){for(e=0;e<Qn.length;e++)if(n=Qn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Qn=null}return t}function pm(t,e){do{var n=we;try{if(Cc(),fo.current=Wo,Uo){for(var r=fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Uo=!1}if(ir=0,ke=Ce=fe=null,zi=!1,as=0,Fc.current=null,n===null||n.return===null){xe=1,ds=e,we=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=De,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,f=l,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=Oh(o);if(y!==null){y.flags&=-257,Lh(y,o,l,s,e),y.mode&1&&Fh(s,u,e),e=y,a=u;var _=e.updateQueue;if(_===null){var w=new Set;w.add(a),e.updateQueue=w}else _.add(a);break e}else{if(!(e&1)){Fh(s,u,e),zc();break e}a=Error(E(426))}}else if(ue&&l.mode&1){var A=Oh(o);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Lh(A,o,l,s,e),vc(Zr(a,l));break e}}s=a=Zr(a,l),xe!==4&&(xe=2),Ui===null?Ui=[s]:Ui.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=Xg(s,a,e);Ah(s,g);break e;case 1:l=a;var p=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(kn===null||!kn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Jg(s,l,e);Ah(s,S);break e}}s=s.return}while(s!==null)}ym(n)}catch(k){e=k,we===n&&n!==null&&(we=n=n.return);continue}break}while(!0)}function gm(){var t=Ho.current;return Ho.current=Wo,t===null?Wo:t}function zc(){(xe===0||xe===3||xe===2)&&(xe=4),Ae===null||!(sr&268435455)&&!(Tl&268435455)||pn(Ae,De)}function Go(t,e){var n=Y;Y|=2;var r=gm();(Ae!==t||De!==e)&&(Bt=null,Zn(t,e));do try{ew();break}catch(i){pm(t,i)}while(!0);if(Cc(),Y=n,Ho.current=r,we!==null)throw Error(E(261));return Ae=null,De=0,xe}function ew(){for(;we!==null;)mm(we)}function tw(){for(;we!==null&&!Iv();)mm(we)}function mm(t){var e=vm(t.alternate,t,nt);t.memoizedProps=t.pendingProps,e===null?ym(t):we=e,Fc.current=null}function ym(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Q0(n,e),n!==null){n.flags&=32767,we=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xe=6,we=null;return}}else if(n=K0(n,e,nt),n!==null){we=n;return}if(e=e.sibling,e!==null){we=e;return}we=e=t}while(e!==null);xe===0&&(xe=5)}function Hn(t,e,n){var r=J,i=ft.transition;try{ft.transition=null,J=1,nw(t,e,n,r)}finally{ft.transition=i,J=r}return null}function nw(t,e,n,r){do Ur();while(vn!==null);if(Y&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Lv(t,s),t===Ae&&(we=Ae=null,De=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||eo||(eo=!0,wm(To,function(){return Ur(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ft.transition,ft.transition=null;var o=J;J=1;var l=Y;Y|=4,Fc.current=null,q0(t,n),dm(n,t),S0(ou),Ro=!!su,ou=su=null,t.current=n,X0(n),Tv(),Y=l,J=o,ft.transition=s}else t.current=n;if(eo&&(eo=!1,vn=t,Vo=i),s=t.pendingLanes,s===0&&(kn=null),Pv(n.stateNode),Ze(t,ye()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if($o)throw $o=!1,t=Iu,Iu=null,t;return Vo&1&&t.tag!==0&&Ur(),s=t.pendingLanes,s&1?t===Tu?Wi++:(Wi=0,Tu=t):Wi=0,jn(),null}function Ur(){if(vn!==null){var t=Xp(Vo),e=ft.transition,n=J;try{if(ft.transition=null,J=16>t?16:t,vn===null)var r=!1;else{if(t=vn,vn=null,Vo=0,Y&6)throw Error(E(331));var i=Y;for(Y|=4,F=t.current;F!==null;){var s=F,o=s.child;if(F.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(F=u;F!==null;){var f=F;switch(f.tag){case 0:case 11:case 15:Bi(8,f,s)}var d=f.child;if(d!==null)d.return=f,F=d;else for(;F!==null;){f=F;var h=f.sibling,y=f.return;if(am(f),f===u){F=null;break}if(h!==null){h.return=y,F=h;break}F=y}}}var _=s.alternate;if(_!==null){var w=_.child;if(w!==null){_.child=null;do{var A=w.sibling;w.sibling=null,w=A}while(w!==null)}}F=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,F=o;else e:for(;F!==null;){if(s=F,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Bi(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,F=g;break e}F=s.return}}var p=t.current;for(F=p;F!==null;){o=F;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,F=m;else e:for(o=p;F!==null;){if(l=F,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Il(9,l)}}catch(k){ge(l,l.return,k)}if(l===o){F=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,F=S;break e}F=l.return}}if(Y=i,jn(),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(_l,t)}catch{}r=!0}return r}finally{J=n,ft.transition=e}}return!1}function Yh(t,e,n){e=Zr(n,e),e=Xg(t,e,1),t=En(t,e,1),e=He(),t!==null&&(Ss(t,1,e),Ze(t,e))}function ge(t,e,n){if(t.tag===3)Yh(t,t,n);else for(;e!==null;){if(e.tag===3){Yh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kn===null||!kn.has(r))){t=Zr(n,t),t=Jg(e,t,1),e=En(e,t,1),t=He(),e!==null&&(Ss(e,1,t),Ze(e,t));break}}e=e.return}}function rw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=He(),t.pingedLanes|=t.suspendedLanes&n,Ae===t&&(De&n)===n&&(xe===4||xe===3&&(De&130023424)===De&&500>ye()-Lc?Zn(t,0):Oc|=n),Ze(t,e)}function _m(t,e){e===0&&(t.mode&1?(e=$s,$s<<=1,!($s&130023424)&&($s=4194304)):e=1);var n=He();t=Jt(t,e),t!==null&&(Ss(t,e,n),Ze(t,n))}function iw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_m(t,n)}function sw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),_m(t,n)}var vm;vm=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Xe.current)Qe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Qe=!1,G0(t,e,n);Qe=!!(t.flags&131072)}else Qe=!1,ue&&e.flags&1048576&&xg(e,Lo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;go(t,e),t=e.pendingProps;var i=Yr(e,Be.current);Br(e,n),i=Rc(null,e,r,t,i,n);var s=Pc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Je(r)?(s=!0,Fo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ec(e),i.updater=kl,e.stateNode=i,i._reactInternals=e,gu(e,r,t,n),e=_u(null,e,r,!0,s,n)):(e.tag=0,ue&&s&&yc(e),We(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(go(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=lw(r),t=_t(r,t),i){case 0:e=yu(null,e,r,t,n);break e;case 1:e=zh(null,e,r,t,n);break e;case 11:e=Mh(null,e,r,t,n);break e;case 14:e=jh(null,e,r,_t(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_t(r,i),yu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_t(r,i),zh(t,e,r,i,n);case 3:e:{if(nm(e),t===null)throw Error(E(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Rg(t,e),zo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Zr(Error(E(423)),e),e=Bh(t,e,r,n,i);break e}else if(r!==i){i=Zr(Error(E(424)),e),e=Bh(t,e,r,n,i);break e}else for(rt=xn(e.stateNode.containerInfo.firstChild),it=e,ue=!0,wt=null,n=Tg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qr(),r===i){e=Zt(t,e,n);break e}We(t,e,r,n)}e=e.child}return e;case 5:return Pg(e),t===null&&hu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,lu(r,i)?o=null:s!==null&&lu(r,s)&&(e.flags|=32),tm(t,e),We(t,e,o,n),e.child;case 6:return t===null&&hu(e),null;case 13:return rm(t,e,n);case 4:return kc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Xr(e,null,r,n):We(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_t(r,i),Mh(t,e,r,i,n);case 7:return We(t,e,e.pendingProps,n),e.child;case 8:return We(t,e,e.pendingProps.children,n),e.child;case 12:return We(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,se(Mo,r._currentValue),r._currentValue=o,s!==null)if(Pt(s.value,o)){if(s.children===i.children&&!Xe.current){e=Zt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Qt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?a.next=a:(a.next=f.next,f.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),fu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),fu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}We(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Br(e,n),i=pt(i),r=r(i),e.flags|=1,We(t,e,r,n),e.child;case 14:return r=e.type,i=_t(r,e.pendingProps),i=_t(r.type,i),jh(t,e,r,i,n);case 15:return Zg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:_t(r,i),go(t,e),e.tag=1,Je(r)?(t=!0,Fo(e)):t=!1,Br(e,n),qg(e,r,i),gu(e,r,i,n),_u(null,e,r,!0,t,n);case 19:return im(t,e,n);case 22:return em(t,e,n)}throw Error(E(156,e.tag))};function wm(t,e){return Kp(t,e)}function ow(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(t,e,n,r){return new ow(t,e,n,r)}function Bc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function lw(t){if(typeof t=="function")return Bc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sc)return 11;if(t===oc)return 14}return 2}function Tn(t,e){var n=t.alternate;return n===null?(n=ht(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function _o(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Bc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Er:return er(n.children,i,s,e);case ic:o=8,i|=8;break;case za:return t=ht(12,n,e,i|2),t.elementType=za,t.lanes=s,t;case Ba:return t=ht(13,n,e,i),t.elementType=Ba,t.lanes=s,t;case Ua:return t=ht(19,n,e,i),t.elementType=Ua,t.lanes=s,t;case Pp:return Al(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ap:o=10;break e;case Rp:o=9;break e;case sc:o=11;break e;case oc:o=14;break e;case dn:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=ht(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function er(t,e,n,r){return t=ht(7,t,r,e),t.lanes=n,t}function Al(t,e,n,r){return t=ht(22,t,r,e),t.elementType=Pp,t.lanes=n,t.stateNode={isHidden:!1},t}function ya(t,e,n){return t=ht(6,t,null,e),t.lanes=n,t}function _a(t,e,n){return e=ht(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function aw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jl(0),this.expirationTimes=Jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Uc(t,e,n,r,i,s,o,l,a){return t=new aw(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ht(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ec(s),t}function uw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Cm(t){if(!t)return Dn;t=t._reactInternals;e:{if(gr(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Je(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(Je(n))return Cg(t,n,e)}return e}function Sm(t,e,n,r,i,s,o,l,a){return t=Uc(n,r,!0,t,i,s,o,l,a),t.context=Cm(null),n=t.current,r=He(),i=In(n),s=Qt(r,i),s.callback=e??null,En(n,s,i),t.current.lanes=i,Ss(t,i,r),Ze(t,r),t}function Rl(t,e,n,r){var i=e.current,s=He(),o=In(i);return n=Cm(n),e.context===null?e.context=n:e.pendingContext=n,e=Qt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=En(i,e,o),t!==null&&(Tt(t,i,o,s),ho(t,i,o)),o}function Ko(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Wc(t,e){qh(t,e),(t=t.alternate)&&qh(t,e)}function cw(){return null}var xm=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hc(t){this._internalRoot=t}Pl.prototype.render=Hc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));Rl(t,e,null,null)};Pl.prototype.unmount=Hc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;or(function(){Rl(null,t,null,null)}),e[Xt]=null}};function Pl(t){this._internalRoot=t}Pl.prototype.unstable_scheduleHydration=function(t){if(t){var e=eg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fn.length&&e!==0&&e<fn[n].priority;n++);fn.splice(n,0,t),n===0&&ng(t)}};function $c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Nl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Xh(){}function dw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ko(o);s.call(u)}}var o=Sm(e,r,t,0,null,!1,!1,"",Xh);return t._reactRootContainer=o,t[Xt]=o.current,rs(t.nodeType===8?t.parentNode:t),or(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Ko(a);l.call(u)}}var a=Uc(t,0,!1,null,null,!1,!1,"",Xh);return t._reactRootContainer=a,t[Xt]=a.current,rs(t.nodeType===8?t.parentNode:t),or(function(){Rl(e,a,n,r)}),a}function bl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Ko(o);l.call(a)}}Rl(e,o,t,i)}else o=dw(n,e,t,i,r);return Ko(o)}Jp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=bi(e.pendingLanes);n!==0&&(uc(e,n|1),Ze(e,ye()),!(Y&6)&&(ei=ye()+500,jn()))}break;case 13:or(function(){var r=Jt(t,1);if(r!==null){var i=He();Tt(r,t,1,i)}}),Wc(t,1)}};cc=function(t){if(t.tag===13){var e=Jt(t,134217728);if(e!==null){var n=He();Tt(e,t,134217728,n)}Wc(t,134217728)}};Zp=function(t){if(t.tag===13){var e=In(t),n=Jt(t,e);if(n!==null){var r=He();Tt(n,t,e,r)}Wc(t,e)}};eg=function(){return J};tg=function(t,e){var n=J;try{return J=t,e()}finally{J=n}};Xa=function(t,e,n){switch(e){case"input":if($a(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Sl(r);if(!i)throw Error(E(90));bp(r),$a(r,i)}}}break;case"textarea":Fp(t,n);break;case"select":e=n.value,e!=null&&Lr(t,!!n.multiple,e,!1)}};Up=Mc;Wp=or;var hw={usingClientEntryPoint:!1,Events:[Es,Ar,Sl,zp,Bp,Mc]},Ei={findFiberByHostInstance:Kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fw={bundleType:Ei.bundleType,version:Ei.version,rendererPackageName:Ei.rendererPackageName,rendererConfig:Ei.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Vp(t),t===null?null:t.stateNode},findFiberByHostInstance:Ei.findFiberByHostInstance||cw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var to=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!to.isDisabled&&to.supportsFiber)try{_l=to.inject(fw),Ot=to}catch{}}ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hw;ot.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$c(e))throw Error(E(200));return uw(t,e,null,n)};ot.createRoot=function(t,e){if(!$c(t))throw Error(E(299));var n=!1,r="",i=xm;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Uc(t,1,!1,null,null,n,!1,r,i),t[Xt]=e.current,rs(t.nodeType===8?t.parentNode:t),new Hc(e)};ot.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=Vp(e),t=t===null?null:t.stateNode,t};ot.flushSync=function(t){return or(t)};ot.hydrate=function(t,e,n){if(!Nl(e))throw Error(E(200));return bl(null,t,e,!0,n)};ot.hydrateRoot=function(t,e,n){if(!$c(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=xm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Sm(e,null,t,1,n??null,i,!1,s,o),t[Xt]=e.current,rs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Pl(e)};ot.render=function(t,e,n){if(!Nl(e))throw Error(E(200));return bl(null,t,e,!1,n)};ot.unmountComponentAtNode=function(t){if(!Nl(t))throw Error(E(40));return t._reactRootContainer?(or(function(){bl(null,null,t,!1,function(){t._reactRootContainer=null,t[Xt]=null})}),!0):!1};ot.unstable_batchedUpdates=Mc;ot.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Nl(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return bl(t,e,n,!1,r)};ot.version="18.3.1-next-f1338f8080-20240426";function Em(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Em)}catch(t){console.error(t)}}Em(),Ep.exports=ot;var pw=Ep.exports,Jh=pw;Ma.createRoot=Jh.createRoot,Ma.hydrateRoot=Jh.hydrateRoot;const gw=()=>{};var Zh={};/**
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
 */const km={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const T=function(t,e){if(!t)throw ci(e)},ci=function(t){return new Error("Firebase Database ("+km.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Im=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},mw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Vc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,f=s>>2,d=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,y=u&63;a||(y=64,o||(h=64)),r.push(n[f],n[d],n[h],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Im(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):mw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||d==null)throw new yw;const h=s<<2|l>>4;if(r.push(h),u!==64){const y=l<<4&240|u>>2;if(r.push(y),d!==64){const _=u<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class yw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tm=function(t){const e=Im(t);return Vc.encodeByteArray(e,!0)},Qo=function(t){return Tm(t).replace(/\./g,"")},Yo=function(t){try{return Vc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function _w(t){return Am(void 0,t)}function Am(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!vw(n)||(t[n]=Am(t[n],e[n]));return t}function vw(t){return t!=="__proto__"}/**
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
 */function ww(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cw=()=>ww().__FIREBASE_DEFAULTS__,Sw=()=>{if(typeof process>"u"||typeof Zh>"u")return;const t=Zh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Yo(t[1]);return e&&JSON.parse(e)},Gc=()=>{try{return gw()||Cw()||Sw()||xw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Rm=t=>{var e,n;return(n=(e=Gc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Ew=t=>{const e=Rm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Pm=()=>{var t;return(t=Gc())==null?void 0:t.config},Nm=t=>{var e;return(e=Gc())==null?void 0:e[`_${t}`]};/**
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
 */class Dl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function kw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Qo(JSON.stringify(n)),Qo(JSON.stringify(o)),""].join(".")}/**
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
 */function $e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($e())}function Iw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Tw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Aw(){const t=$e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Rw(){return km.NODE_ADMIN===!0}function Pw(){try{return typeof indexedDB=="object"}catch{return!1}}function Nw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const bw="FirebaseError";class zn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=bw,Object.setPrototypeOf(this,zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Is.prototype.create)}}class Is{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Dw(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new zn(i,l,r)}}function Dw(t,e){return t.replace(Fw,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Fw=/\{\$([^}]+)}/g;/**
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
 */function hs(t){return JSON.parse(t)}function Te(t){return JSON.stringify(t)}/**
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
 */const Dm=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=hs(Yo(s[0])||""),n=hs(Yo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Ow=function(t){const e=Dm(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Lw=function(t){const e=Dm(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function on(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ti(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Pu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function lr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ef(s)&&ef(o)){if(!lr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ef(t){return t!==null&&typeof t=="object"}/**
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
 */function di(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class Mw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,f;for(let d=0;d<80;d++){d<40?d<20?(u=l^s&(o^l),f=1518500249):(u=s^o^l,f=1859775393):d<60?(u=s&o|l&(s|o),f=2400959708):(u=s^o^l,f=3395469782);const h=(i<<5|i>>>27)+u+a+f+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function jw(t,e){const n=new zw(t,e);return n.subscribe.bind(n)}class zw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Bw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=va),i.error===void 0&&(i.error=va),i.complete===void 0&&(i.complete=va);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function va(){}function Qc(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Uw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,T(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Fl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function at(t){return t&&t._delegate?t._delegate:t}/**
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
 */function Ts(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Fm(t){return(await fetch(t,{credentials:"include"})).ok}class ar{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const $n="[DEFAULT]";/**
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
 */class Ww{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Dl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($w(e))try{this.getOrInitializeService({instanceIdentifier:$n})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=$n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$n){return this.instances.has(e)}getOptions(e=$n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Hw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=$n){return this.component?this.component.multipleInstances?e:$n:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hw(t){return t===$n?void 0:t}function $w(t){return t.instantiationMode==="EAGER"}/**
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
 */class Vw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ww(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const Gw={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},Kw=Z.INFO,Qw={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},Yw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Qw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yc{constructor(e){this.name=e,this._logLevel=Kw,this._logHandler=Yw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const qw=(t,e)=>e.some(n=>t instanceof n);let tf,nf;function Xw(){return tf||(tf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jw(){return nf||(nf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Om=new WeakMap,Nu=new WeakMap,Lm=new WeakMap,wa=new WeakMap,qc=new WeakMap;function Zw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(An(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Om.set(n,t)}).catch(()=>{}),qc.set(e,t),e}function eC(t){if(Nu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Nu.set(t,e)}let bu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Lm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return An(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tC(t){bu=t(bu)}function nC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ca(this),e,...n);return Lm.set(r,e.sort?e.sort():[e]),An(r)}:Jw().includes(t)?function(...e){return t.apply(Ca(this),e),An(Om.get(this))}:function(...e){return An(t.apply(Ca(this),e))}}function rC(t){return typeof t=="function"?nC(t):(t instanceof IDBTransaction&&eC(t),qw(t,Xw())?new Proxy(t,bu):t)}function An(t){if(t instanceof IDBRequest)return Zw(t);if(wa.has(t))return wa.get(t);const e=rC(t);return e!==t&&(wa.set(t,e),qc.set(e,t)),e}const Ca=t=>qc.get(t);function iC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=An(o);return r&&o.addEventListener("upgradeneeded",a=>{r(An(o.result),a.oldVersion,a.newVersion,An(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const sC=["get","getKey","getAll","getAllKeys","count"],oC=["put","add","delete","clear"],Sa=new Map;function rf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sa.get(e))return Sa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=oC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||sC.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Sa.set(e,s),s}tC(t=>({...t,get:(e,n,r)=>rf(e,n)||t.get(e,n,r),has:(e,n)=>!!rf(e,n)||t.has(e,n)}));/**
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
 */class lC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(aC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function aC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Du="@firebase/app",sf="0.14.13";/**
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
 */const en=new Yc("@firebase/app"),uC="@firebase/app-compat",cC="@firebase/analytics-compat",dC="@firebase/analytics",hC="@firebase/app-check-compat",fC="@firebase/app-check",pC="@firebase/auth",gC="@firebase/auth-compat",mC="@firebase/database",yC="@firebase/data-connect",_C="@firebase/database-compat",vC="@firebase/functions",wC="@firebase/functions-compat",CC="@firebase/installations",SC="@firebase/installations-compat",xC="@firebase/messaging",EC="@firebase/messaging-compat",kC="@firebase/performance",IC="@firebase/performance-compat",TC="@firebase/remote-config",AC="@firebase/remote-config-compat",RC="@firebase/storage",PC="@firebase/storage-compat",NC="@firebase/firestore",bC="@firebase/ai",DC="@firebase/firestore-compat",FC="firebase",OC="12.14.0";/**
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
 */const Fu="[DEFAULT]",LC={[Du]:"fire-core",[uC]:"fire-core-compat",[dC]:"fire-analytics",[cC]:"fire-analytics-compat",[fC]:"fire-app-check",[hC]:"fire-app-check-compat",[pC]:"fire-auth",[gC]:"fire-auth-compat",[mC]:"fire-rtdb",[yC]:"fire-data-connect",[_C]:"fire-rtdb-compat",[vC]:"fire-fn",[wC]:"fire-fn-compat",[CC]:"fire-iid",[SC]:"fire-iid-compat",[xC]:"fire-fcm",[EC]:"fire-fcm-compat",[kC]:"fire-perf",[IC]:"fire-perf-compat",[TC]:"fire-rc",[AC]:"fire-rc-compat",[RC]:"fire-gcs",[PC]:"fire-gcs-compat",[NC]:"fire-fst",[DC]:"fire-fst-compat",[bC]:"fire-vertex","fire-js":"fire-js",[FC]:"fire-js-all"};/**
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
 */const Xo=new Map,MC=new Map,Ou=new Map;function of(t,e){try{t.container.addComponent(e)}catch(n){en.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ni(t){const e=t.name;if(Ou.has(e))return en.debug(`There were multiple attempts to register component ${e}.`),!1;Ou.set(e,t);for(const n of Xo.values())of(n,t);for(const n of MC.values())of(n,t);return!0}function Xc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ct(t){return t==null?!1:t.settings!==void 0}/**
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
 */const jC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rn=new Is("app","Firebase",jC);/**
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
 */class zC{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rn.create("app-deleted",{appName:this._name})}}/**
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
 */const hi=OC;function Mm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Fu,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Rn.create("bad-app-name",{appName:String(i)});if(n||(n=Pm()),!n)throw Rn.create("no-options");const s=Xo.get(i);if(s){if(lr(n,s.options)&&lr(r,s.config))return s;throw Rn.create("duplicate-app",{appName:i})}const o=new Vw(i);for(const a of Ou.values())o.addComponent(a);const l=new zC(n,r,o);return Xo.set(i,l),l}function jm(t=Fu){const e=Xo.get(t);if(!e&&t===Fu&&Pm())return Mm();if(!e)throw Rn.create("no-app",{appName:t});return e}function Pn(t,e,n){let r=LC[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),en.warn(o.join(" "));return}ni(new ar(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const BC="firebase-heartbeat-database",UC=1,fs="firebase-heartbeat-store";let xa=null;function zm(){return xa||(xa=iC(BC,UC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(fs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Rn.create("idb-open",{originalErrorMessage:t.message})})),xa}async function WC(t){try{const n=(await zm()).transaction(fs),r=await n.objectStore(fs).get(Bm(t));return await n.done,r}catch(e){if(e instanceof zn)en.warn(e.message);else{const n=Rn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});en.warn(n.message)}}}async function lf(t,e){try{const r=(await zm()).transaction(fs,"readwrite");await r.objectStore(fs).put(e,Bm(t)),await r.done}catch(n){if(n instanceof zn)en.warn(n.message);else{const r=Rn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});en.warn(r.message)}}}function Bm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const HC=1024,$C=30;class VC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new KC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=af();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>$C){const o=QC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){en.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=af(),{heartbeatsToSend:r,unsentEntries:i}=GC(this._heartbeatsCache.heartbeats),s=Qo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return en.warn(n),""}}}function af(){return new Date().toISOString().substring(0,10)}function GC(t,e=HC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),uf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),uf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class KC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pw()?Nw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await WC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return lf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return lf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function uf(t){return Qo(JSON.stringify({version:2,heartbeats:t})).length}function QC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function YC(t){ni(new ar("platform-logger",e=>new lC(e),"PRIVATE")),ni(new ar("heartbeat",e=>new VC(e),"PRIVATE")),Pn(Du,sf,t),Pn(Du,sf,"esm2020"),Pn("fire-js","")}YC("");var qC="firebase",XC="12.14.0";/**
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
 */Pn(qC,XC,"app");var cf={};const df="@firebase/database",hf="1.1.3";/**
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
 */let Um="";function JC(t){Um=t}/**
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
 */class ZC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Te(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:hs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class eS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return on(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Wm=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ZC(e)}}catch{}return new eS},qn=Wm("localStorage"),tS=Wm("sessionStorage");/**
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
 */const Wr=new Yc("@firebase/database"),nS=function(){let t=1;return function(){return t++}}(),Hm=function(t){const e=Uw(t),n=new Mw;n.update(e);const r=n.digest();return Vc.encodeByteArray(r)},As=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=As.apply(null,r):typeof r=="object"?e+=Te(r):e+=r,e+=" "}return e};let Hi=null,ff=!0;const rS=function(t,e){T(!0,"Can't turn on custom loggers persistently."),Wr.logLevel=Z.VERBOSE,Hi=Wr.log.bind(Wr)},ze=function(...t){if(ff===!0&&(ff=!1,Hi===null&&tS.get("logging_enabled")===!0&&rS()),Hi){const e=As.apply(null,t);Hi(e)}},Rs=function(t){return function(...e){ze(t,...e)}},Lu=function(...t){const e="FIREBASE INTERNAL ERROR: "+As(...t);Wr.error(e)},tn=function(...t){const e=`FIREBASE FATAL ERROR: ${As(...t)}`;throw Wr.error(e),new Error(e)},et=function(...t){const e="FIREBASE WARNING: "+As(...t);Wr.warn(e)},iS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&et("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},$m=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},sS=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ri="[MIN_NAME]",ur="[MAX_NAME]",fi=function(t,e){if(t===e)return 0;if(t===ri||e===ur)return-1;if(e===ri||t===ur)return 1;{const n=pf(t),r=pf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},oS=function(t,e){return t===e?0:t<e?-1:1},ki=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Te(e))},Jc=function(t){if(typeof t!="object"||t===null)return Te(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Te(e[r]),n+=":",n+=Jc(t[e[r]]);return n+="}",n},Vm=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function tt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Gm=function(t){T(!$m(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const f=u.join("");let d="";for(a=0;a<64;a+=8){let h=parseInt(f.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},lS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},aS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function uS(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const cS=new RegExp("^-?(0*)\\d{1,10}$"),dS=-2147483648,hS=2147483647,pf=function(t){if(cS.test(t)){const e=Number(t);if(e>=dS&&e<=hS)return e}return null},pi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw et("Exception was thrown by user callback.",n),e},Math.floor(0))}},fS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},$i=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class pS{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Ct(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){et(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class gS{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ze("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',et(e)}}class vo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}vo.OWNER="owner";/**
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
 */const Zc="5",Km="v",Qm="s",Ym="r",qm="f",Xm=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Jm="ls",Zm="p",Mu="ac",ey="websocket",ty="long_polling";/**
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
 */class ny{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1,u=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=qn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&qn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function mS(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ry(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let r;if(e===ey)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===ty)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);mS(t)&&(n.ns=t.namespace);const i=[];return tt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class yS{constructor(){this.counters_={}}incrementCounter(e,n=1){on(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return _w(this.counters_)}}/**
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
 */const Ea={},ka={};function ed(t){const e=t.toString();return Ea[e]||(Ea[e]=new yS),Ea[e]}function _S(t,e){const n=t.toString();return ka[n]||(ka[n]=e()),ka[n]}/**
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
 */class vS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&pi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const gf="start",wS="close",CS="pLPCommand",SS="pRTLPCB",iy="id",sy="pw",oy="ser",xS="cb",ES="seg",kS="ts",IS="d",TS="dframe",ly=1870,ay=30,AS=ly-ay,RS=25e3,PS=3e4;class Or{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Rs(e),this.stats_=ed(n),this.urlFn=a=>(this.appCheckToken&&(a[Mu]=this.appCheckToken),ry(n,ty,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new vS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(PS)),sS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new td((...s)=>{const[o,l,a,u,f]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===gf)this.id=l,this.password=a;else if(o===wS)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[gf]="t",r[oy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[xS]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Km]=Zc,this.transportSessionId&&(r[Qm]=this.transportSessionId),this.lastSessionId&&(r[Jm]=this.lastSessionId),this.applicationId&&(r[Zm]=this.applicationId),this.appCheckToken&&(r[Mu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Xm.test(location.hostname)&&(r[Ym]=qm);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Or.forceAllow_=!0}static forceDisallow(){Or.forceDisallow_=!0}static isAvailable(){return Or.forceAllow_?!0:!Or.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!lS()&&!aS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Te(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Tm(n),i=Vm(r,AS);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[TS]="t",r[iy]=e,r[sy]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Te(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class td{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=nS(),window[CS+this.uniqueCallbackIdentifier]=e,window[SS+this.uniqueCallbackIdentifier]=n,this.myIFrame=td.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ze("frame writing exception"),l.stack&&ze(l.stack),ze(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ze("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[iy]=this.myID,e[sy]=this.myPW,e[oy]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ay+r.length<=ly;){const o=this.pendingSegs.shift();r=r+"&"+ES+i+"="+o.seg+"&"+kS+i+"="+o.ts+"&"+IS+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(RS)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ze("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const NS=16384,bS=45e3;let Jo=null;typeof MozWebSocket<"u"?Jo=MozWebSocket:typeof WebSocket<"u"&&(Jo=WebSocket);class St{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Rs(this.connId),this.stats_=ed(n),this.connURL=St.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Km]=Zc,typeof location<"u"&&location.hostname&&Xm.test(location.hostname)&&(o[Ym]=qm),n&&(o[Qm]=n),r&&(o[Jm]=r),i&&(o[Mu]=i),s&&(o[Zm]=s),ry(e,ey,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,qn.set("previous_websocket_failure",!0);try{let r;Rw(),this.mySock=new Jo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){St.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Jo!==null&&!St.forceDisallow_}static previouslyFailed(){return qn.isInMemoryStorage||qn.get("previous_websocket_failure")===!0}markConnectionHealthy(){qn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=hs(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Te(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Vm(n,NS);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(bS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}St.responsesRequiredToBeHealthy=2;St.healthyTimeout=3e4;/**
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
 */class ps{static get ALL_TRANSPORTS(){return[Or,St]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=St&&St.isAvailable();let r=n&&!St.previouslyFailed();if(e.webSocketOnly&&(n||et("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[St];else{const i=this.transports_=[];for(const s of ps.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ps.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ps.globalTransportInitialized_=!1;/**
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
 */const DS=6e4,FS=5e3,OS=10*1024,LS=100*1024,Ia="t",mf="d",MS="s",yf="r",jS="e",_f="o",vf="a",wf="n",Cf="p",zS="h";class BS{constructor(e,n,r,i,s,o,l,a,u,f){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Rs("c:"+this.id+":"),this.transportManager_=new ps(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=$i(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>LS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>OS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ia in e){const n=e[Ia];n===vf?this.upgradeIfSecondaryHealthy_():n===yf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===_f&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ki("t",e),r=ki("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Cf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:vf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:wf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ki("t",e),r=ki("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ki(Ia,e);if(mf in e){const r=e[mf];if(n===zS){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===wf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===MS?this.onConnectionShutdown_(r):n===yf?this.onReset_(r):n===jS?Lu("Server Error: "+r):n===_f?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Lu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Zc!==r&&et("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),$i(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(DS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):$i(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(FS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Cf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(qn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class uy{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class cy{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Zo extends cy{static getInstance(){return new Zo}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Kc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Sf=32,xf=768;class ne{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function X(){return new ne("")}function H(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Fn(t){return t.pieces_.length-t.pieceNum_}function ie(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ne(t.pieces_,e)}function dy(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function US(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function hy(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function fy(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ne(e,0)}function Se(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ne)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ne(n,0)}function G(t){return t.pieceNum_>=t.pieces_.length}function Ye(t,e){const n=H(t),r=H(e);if(n===null)return e;if(n===r)return Ye(ie(t),ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function nd(t,e){if(Fn(t)!==Fn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function xt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Fn(t)>Fn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class WS{constructor(e,n){this.errorPrefix_=n,this.parts_=hy(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Fl(this.parts_[r]);py(this)}}function HS(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Fl(e),py(t)}function $S(t){const e=t.parts_.pop();t.byteLength_-=Fl(e),t.parts_.length>0&&(t.byteLength_-=1)}function py(t){if(t.byteLength_>xf)throw new Error(t.errorPrefix_+"has a key path longer than "+xf+" bytes ("+t.byteLength_+").");if(t.parts_.length>Sf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Sf+") or object contains a cycle "+Vn(t))}function Vn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class rd extends cy{static getInstance(){return new rd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ii=1e3,VS=60*5*1e3,Ef=30*1e3,GS=1.3,KS=3e4,QS="server_kill",kf=3;class Yt extends uy{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Yt.nextPersistentConnectionId_++,this.log_=Rs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ii,this.maxReconnectDelay_=VS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");rd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Zo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Te(s)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Dl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Yt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&on(e,"w")){const r=ti(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();et(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Lw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ef)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Ow(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Te(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Lu("Unrecognized action received from server: "+Te(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ii,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ii,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>KS&&(this.reconnectDelay_=Ii),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*GS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Yt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){T(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?ze("getToken() completed but was canceled"):(ze("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,l=new BS(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,y=>{et(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(QS)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&et(d),a())}}}interrupt(e){ze("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ze("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Pu(this.interruptReasons_)&&(this.reconnectDelay_=Ii,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Jc(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ne(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ze("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=kf&&(this.reconnectDelay_=Ef,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ze("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=kf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Um.replace(/\./g,"-")]=1,Kc()?e["framework.cordova"]=1:bm()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Zo.getInstance().currentlyOnline();return Pu(this.interruptReasons_)&&e}}Yt.nextPersistentConnectionId_=0;Yt.nextConnectionId_=0;/**
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
 */class ${constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new $(e,n)}}/**
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
 */class Ol{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new $(ri,e),i=new $(ri,n);return this.compare(r,i)!==0}minPost(){return $.MIN}}/**
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
 */let no;class gy extends Ol{static get __EMPTY_NODE(){return no}static set __EMPTY_NODE(e){no=e}compare(e,n){return fi(e.name,n.name)}isDefinedOn(e){throw ci("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return $.MIN}maxPost(){return new $(ur,no)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new $(e,no)}toString(){return".key"}}const Hr=new gy;/**
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
 */class ro{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ie{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ie.RED,this.left=i??qe.EMPTY_NODE,this.right=s??qe.EMPTY_NODE}copy(e,n,r,i,s){return new Ie(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return qe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return qe.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ie.RED=!0;Ie.BLACK=!1;class YS{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ie(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class qe{constructor(e,n=qe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new qe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ie.BLACK,null,null))}remove(e){return new qe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ie.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ro(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ro(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ro(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ro(this.root_,null,this.comparator_,!0,e)}}qe.EMPTY_NODE=new YS;/**
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
 */function qS(t,e){return fi(t.name,e.name)}function id(t,e){return fi(t,e)}/**
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
 */let ju;function XS(t){ju=t}const my=function(t){return typeof t=="number"?"number:"+Gm(t):"string:"+t},yy=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&on(e,".sv"),"Priority must be a string or number.")}else T(t===ju||t.isEmpty(),"priority of unexpected type.");T(t===ju||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let If;class Ee{static set __childrenNodeConstructor(e){If=e}static get __childrenNodeConstructor(){return If}constructor(e,n=Ee.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),yy(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ee(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:H(e)===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ee.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=H(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(T(r!==".priority"||Fn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ee.__childrenNodeConstructor.EMPTY_NODE.updateChild(ie(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+my(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Gm(this.value_):e+=this.value_,this.lazyHash_=Hm(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ee.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ee.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ee.VALUE_TYPE_ORDER.indexOf(n),s=Ee.VALUE_TYPE_ORDER.indexOf(r);return T(i>=0,"Unknown leaf type: "+n),T(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ee.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let _y,vy;function JS(t){_y=t}function ZS(t){vy=t}class ex extends Ol{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?fi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return $.MIN}maxPost(){return new $(ur,new Ee("[PRIORITY-POST]",vy))}makePost(e,n){const r=_y(e);return new $(n,new Ee("[PRIORITY-POST]",r))}toString(){return".priority"}}const me=new ex;/**
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
 */const tx=Math.log(2);class nx{constructor(e){const n=s=>parseInt(Math.log(s)/tx,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const el=function(t,e,n,r){t.sort(e);const i=function(a,u){const f=u-a;let d,h;if(f===0)return null;if(f===1)return d=t[a],h=n?n(d):d,new Ie(h,d.node,Ie.BLACK,null,null);{const y=parseInt(f/2,10)+a,_=i(a,y),w=i(y+1,u);return d=t[y],h=n?n(d):d,new Ie(h,d.node,Ie.BLACK,_,w)}},s=function(a){let u=null,f=null,d=t.length;const h=function(_,w){const A=d-_,g=d;d-=_;const p=i(A+1,g),m=t[A],S=n?n(m):m;y(new Ie(S,m.node,w,null,p))},y=function(_){u?(u.left=_,u=_):(f=_,u=_)};for(let _=0;_<a.count;++_){const w=a.nextBitIsOne(),A=Math.pow(2,a.count-(_+1));w?h(A,Ie.BLACK):(h(A,Ie.BLACK),h(A,Ie.RED))}return f},o=new nx(t.length),l=s(o);return new qe(r||e,l)};/**
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
 */let Ta;const vr={};class Vt{static get Default(){return T(vr&&me,"ChildrenNode.ts has not been loaded"),Ta=Ta||new Vt({".priority":vr},{".priority":me}),Ta}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=ti(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof qe?n:null}hasIndex(e){return on(this.indexSet_,e.toString())}addIndex(e,n){T(e!==Hr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator($.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=el(r,e.getCompare()):l=vr;const a=e.toString(),u={...this.indexSet_};u[a]=e;const f={...this.indexes_};return f[a]=l,new Vt(f,u)}addToIndexes(e,n){const r=qo(this.indexes_,(i,s)=>{const o=ti(this.indexSet_,s);if(T(o,"Missing index implementation for "+s),i===vr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator($.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),el(l,o.getCompare())}else return vr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new $(e.name,l))),a.insert(e,e.node)}});return new Vt(r,this.indexSet_)}removeFromIndexes(e,n){const r=qo(this.indexes_,i=>{if(i===vr)return i;{const s=n.get(e.name);return s?i.remove(new $(e.name,s)):i}});return new Vt(r,this.indexSet_)}}/**
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
 */let Ti;class L{static get EMPTY_NODE(){return Ti||(Ti=new L(new qe(id),null,Vt.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&yy(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ti}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ti:n}}getChild(e){const n=H(e);return n===null?this:this.getImmediateChild(n).getChild(ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new $(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ti:this.priorityNode_;return new L(i,o,s)}}updateChild(e,n){const r=H(e);if(r===null)return n;{T(H(e)!==".priority"||Fn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ie(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(me,(o,l)=>{n[o]=l.val(e),r++,s&&L.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+my(this.getPriority().val())+":"),this.forEachChild(me,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Hm(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new $(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new $(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new $(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,$.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,$.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ps?-1:0}withIndex(e){if(e===Hr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Hr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(me),i=n.getIterator(me);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Hr?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class rx extends L{constructor(){super(new qe(id),L.EMPTY_NODE,Vt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const Ps=new rx;Object.defineProperties($,{MIN:{value:new $(ri,L.EMPTY_NODE)},MAX:{value:new $(ur,Ps)}});gy.__EMPTY_NODE=L.EMPTY_NODE;Ee.__childrenNodeConstructor=L;XS(Ps);ZS(Ps);/**
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
 */const ix=!0;function be(t,e=null){if(t===null)return L.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ee(n,be(e))}if(!(t instanceof Array)&&ix){const n=[];let r=!1;if(tt(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=be(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new $(o,a)))}}),n.length===0)return L.EMPTY_NODE;const s=el(n,qS,o=>o.name,id);if(r){const o=el(n,me.getCompare());return new L(s,be(e),new Vt({".priority":o},{".priority":me}))}else return new L(s,be(e),Vt.Default)}else{let n=L.EMPTY_NODE;return tt(t,(r,i)=>{if(on(t,r)&&r.substring(0,1)!=="."){const s=be(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(be(e))}}JS(be);/**
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
 */class sx extends Ol{constructor(e){super(),this.indexPath_=e,T(!G(e)&&H(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?fi(e.name,n.name):s}makePost(e,n){const r=be(e),i=L.EMPTY_NODE.updateChild(this.indexPath_,r);return new $(n,i)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,Ps);return new $(ur,e)}toString(){return hy(this.indexPath_,0).join("/")}}/**
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
 */class ox extends Ol{compare(e,n){const r=e.node.compareTo(n.node);return r===0?fi(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return $.MIN}maxPost(){return $.MAX}makePost(e,n){const r=be(e);return new $(n,r)}toString(){return".value"}}const lx=new ox;/**
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
 */function wy(t){return{type:"value",snapshotNode:t}}function ii(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function gs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ms(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function ax(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class sd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(gs(n,l)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(ii(n,r)):o.trackChildChange(ms(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(me,(i,s)=>{n.hasChild(i)||r.trackChildChange(gs(i,s))}),n.isLeafNode()||n.forEachChild(me,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ms(i,s,o))}else r.trackChildChange(ii(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ys{constructor(e){this.indexedFilter_=new sd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ys.getStartPost_(e),this.endPost_=ys.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new $(n,r))||(r=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=L.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(L.EMPTY_NODE);const s=this;return n.forEachChild(me,(o,l)=>{s.matches(new $(o,l))||(i=i.updateImmediateChild(o,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class ux{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ys(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new $(n,r))||(r=L.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=L.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(L.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,y)=>d(y,h)}else o=this.index_.getCompare();const l=e;T(l.numChildren()===this.limit_,"");const a=new $(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),f=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const y=h==null?1:o(h,a);if(f&&!r.isEmpty()&&y>=0)return s!=null&&s.trackChildChange(ms(n,r,d)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(gs(n,d));const w=l.updateImmediateChild(n,L.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(ii(h.name,h.node)),w.updateImmediateChild(h.name,h.node)):w}}else return r.isEmpty()?e:f&&o(u,a)>=0?(s!=null&&(s.trackChildChange(gs(u.name,u.node)),s.trackChildChange(ii(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,L.EMPTY_NODE)):e}}/**
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
 */class od{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ri}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ur}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===me}copy(){const e=new od;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function cx(t){return t.loadsAllData()?new sd(t.getIndex()):t.hasLimit()?new ux(t):new ys(t)}function Tf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===me?n="$priority":t.index_===lx?n="$value":t.index_===Hr?n="$key":(T(t.index_ instanceof sx,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Te(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Te(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Te(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Te(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Te(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Af(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==me&&(e.i=t.index_.toString()),e}/**
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
 */class tl extends uy{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Rs("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=tl.getListenId_(e,r),l={};this.listens_[o]=l;const a=Tf(e._queryParams);this.restRequest_(s+".json",a,(u,f)=>{let d=f;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),ti(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=tl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Tf(e._queryParams),r=e._path.toString(),i=new Dl;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+di(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=hs(l.responseText)}catch{et("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&et("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class dx{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function nl(){return{value:null,children:new Map}}function Cy(t,e,n){if(G(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=H(e);t.children.has(r)||t.children.set(r,nl());const i=t.children.get(r);e=ie(e),Cy(i,e,n)}}function zu(t,e,n){t.value!==null?n(e,t.value):hx(t,(r,i)=>{const s=new ne(e.toString()+"/"+r);zu(i,s,n)})}function hx(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class fx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&tt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Rf=10*1e3,px=30*1e3,gx=5*60*1e3;class mx{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new fx(e);const r=Rf+(px-Rf)*Math.random();$i(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;tt(e,(i,s)=>{s>0&&on(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),$i(this.reportStats_.bind(this),Math.floor(Math.random()*2*gx))}}/**
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
 */var Et;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Et||(Et={}));function Sy(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ld(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ad(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class rl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Et.ACK_USER_WRITE,this.source=Sy()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ne(e));return new rl(X(),n,this.revert)}}else return T(H(this.path)===e,"operationForChild called for unrelated child."),new rl(ie(this.path),this.affectedTree,this.revert)}}/**
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
 */class _s{constructor(e,n){this.source=e,this.path=n,this.type=Et.LISTEN_COMPLETE}operationForChild(e){return G(this.path)?new _s(this.source,X()):new _s(this.source,ie(this.path))}}/**
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
 */class cr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Et.OVERWRITE}operationForChild(e){return G(this.path)?new cr(this.source,X(),this.snap.getImmediateChild(e)):new cr(this.source,ie(this.path),this.snap)}}/**
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
 */class vs{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Et.MERGE}operationForChild(e){if(G(this.path)){const n=this.children.subtree(new ne(e));return n.isEmpty()?null:n.value?new cr(this.source,X(),n.value):new vs(this.source,X(),n)}else return T(H(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new vs(this.source,ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class dr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const n=H(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class yx{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function _x(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(ax(o.childName,o.snapshotNode))}),Ai(t,i,"child_removed",e,r,n),Ai(t,i,"child_added",e,r,n),Ai(t,i,"child_moved",s,r,n),Ai(t,i,"child_changed",e,r,n),Ai(t,i,"value",e,r,n),i}function Ai(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>wx(t,l,a)),o.forEach(l=>{const a=vx(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function vx(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function wx(t,e,n){if(e.childName==null||n.childName==null)throw ci("Should only compare child_ events.");const r=new $(e.childName,e.snapshotNode),i=new $(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Ll(t,e){return{eventCache:t,serverCache:e}}function Vi(t,e,n,r){return Ll(new dr(e,n,r),t.serverCache)}function xy(t,e,n,r){return Ll(t.eventCache,new dr(e,n,r))}function Bu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function hr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Aa;const Cx=()=>(Aa||(Aa=new qe(oS)),Aa);class le{static fromObject(e){let n=new le(null);return tt(e,(r,i)=>{n=n.set(new ne(r),i)}),n}constructor(e,n=Cx()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:X(),value:this.value};if(G(e))return null;{const r=H(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ie(e),n);return s!=null?{path:Se(new ne(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const n=H(e),r=this.children.get(n);return r!==null?r.subtree(ie(e)):new le(null)}}set(e,n){if(G(e))return new le(n,this.children);{const r=H(e),s=(this.children.get(r)||new le(null)).set(ie(e),n),o=this.children.insert(r,s);return new le(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new le(null):new le(null,this.children);{const n=H(e),r=this.children.get(n);if(r){const i=r.remove(ie(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new le(null):new le(this.value,s)}else return this}}get(e){if(G(e))return this.value;{const n=H(e),r=this.children.get(n);return r?r.get(ie(e)):null}}setTree(e,n){if(G(e))return n;{const r=H(e),s=(this.children.get(r)||new le(null)).setTree(ie(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new le(this.value,o)}}fold(e){return this.fold_(X(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Se(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,X(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(G(e))return null;{const s=H(e),o=this.children.get(s);return o?o.findOnPath_(ie(e),Se(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,X(),n)}foreachOnPath_(e,n,r){if(G(e))return this;{this.value&&r(n,this.value);const i=H(e),s=this.children.get(i);return s?s.foreachOnPath_(ie(e),Se(n,i),r):new le(null)}}foreach(e){this.foreach_(X(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Se(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class At{constructor(e){this.writeTree_=e}static empty(){return new At(new le(null))}}function Gi(t,e,n){if(G(e))return new At(new le(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ye(i,e);return s=s.updateChild(o,n),new At(t.writeTree_.set(i,s))}else{const i=new le(n),s=t.writeTree_.setTree(e,i);return new At(s)}}}function Pf(t,e,n){let r=t;return tt(n,(i,s)=>{r=Gi(r,Se(e,i),s)}),r}function Nf(t,e){if(G(e))return At.empty();{const n=t.writeTree_.setTree(e,new le(null));return new At(n)}}function Uu(t,e){return mr(t,e)!=null}function mr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ye(n.path,e)):null}function bf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(me,(r,i)=>{e.push(new $(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new $(r,i.value))}),e}function Nn(t,e){if(G(e))return t;{const n=mr(t,e);return n!=null?new At(new le(n)):new At(t.writeTree_.subtree(e))}}function Wu(t){return t.writeTree_.isEmpty()}function si(t,e){return Ey(X(),t.writeTree_,e)}function Ey(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(T(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Ey(Se(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Se(t,".priority"),r)),n}}/**
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
 */function ud(t,e){return Ay(e,t)}function Sx(t,e,n,r,i){T(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Gi(t.visibleWrites,e,n)),t.lastWriteId=r}function xx(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Ex(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&kx(l,r.path)?i=!1:xt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return Ix(t),!0;if(r.snap)t.visibleWrites=Nf(t.visibleWrites,r.path);else{const l=r.children;tt(l,a=>{t.visibleWrites=Nf(t.visibleWrites,Se(r.path,a))})}return!0}else return!1}function kx(t,e){if(t.snap)return xt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&xt(Se(t.path,n),e))return!0;return!1}function Ix(t){t.visibleWrites=ky(t.allWrites,Tx,X()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Tx(t){return t.visible}function ky(t,e,n){let r=At.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)xt(n,o)?(l=Ye(n,o),r=Gi(r,l,s.snap)):xt(o,n)&&(l=Ye(o,n),r=Gi(r,X(),s.snap.getChild(l)));else if(s.children){if(xt(n,o))l=Ye(n,o),r=Pf(r,l,s.children);else if(xt(o,n))if(l=Ye(o,n),G(l))r=Pf(r,X(),s.children);else{const a=ti(s.children,H(l));if(a){const u=a.getChild(ie(l));r=Gi(r,X(),u)}}}else throw ci("WriteRecord should have .snap or .children")}}return r}function Iy(t,e,n,r,i){if(!r&&!i){const s=mr(t.visibleWrites,e);if(s!=null)return s;{const o=Nn(t.visibleWrites,e);if(Wu(o))return n;if(n==null&&!Uu(o,X()))return null;{const l=n||L.EMPTY_NODE;return si(o,l)}}}else{const s=Nn(t.visibleWrites,e);if(!i&&Wu(s))return n;if(!i&&n==null&&!Uu(s,X()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(xt(u.path,e)||xt(e,u.path))},l=ky(t.allWrites,o,e),a=n||L.EMPTY_NODE;return si(l,a)}}}function Ax(t,e,n){let r=L.EMPTY_NODE;const i=mr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(me,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Nn(t.visibleWrites,e);return n.forEachChild(me,(o,l)=>{const a=si(Nn(s,new ne(o)),l);r=r.updateImmediateChild(o,a)}),bf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Nn(t.visibleWrites,e);return bf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function Rx(t,e,n,r,i){T(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Se(e,n);if(Uu(t.visibleWrites,s))return null;{const o=Nn(t.visibleWrites,s);return Wu(o)?i.getChild(n):si(o,i.getChild(n))}}function Px(t,e,n,r){const i=Se(e,n),s=mr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Nn(t.visibleWrites,i);return si(o,r.getNode().getImmediateChild(n))}else return null}function Nx(t,e){return mr(t.visibleWrites,e)}function bx(t,e,n,r,i,s,o){let l;const a=Nn(t.visibleWrites,e),u=mr(a,X());if(u!=null)l=u;else if(n!=null)l=si(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const f=[],d=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let y=h.getNext();for(;y&&f.length<i;)d(y,r)!==0&&f.push(y),y=h.getNext();return f}else return[]}function Dx(){return{visibleWrites:At.empty(),allWrites:[],lastWriteId:-1}}function il(t,e,n,r){return Iy(t.writeTree,t.treePath,e,n,r)}function cd(t,e){return Ax(t.writeTree,t.treePath,e)}function Df(t,e,n,r){return Rx(t.writeTree,t.treePath,e,n,r)}function sl(t,e){return Nx(t.writeTree,Se(t.treePath,e))}function Fx(t,e,n,r,i,s){return bx(t.writeTree,t.treePath,e,n,r,i,s)}function dd(t,e,n){return Px(t.writeTree,t.treePath,e,n)}function Ty(t,e){return Ay(Se(t.treePath,e),t.writeTree)}function Ay(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Ox{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ms(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,gs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ii(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ms(r,e.snapshotNode,i.oldSnap));else throw ci("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Lx{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Ry=new Lx;class hd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new dr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return dd(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:hr(this.viewCache_),s=Fx(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function Mx(t){return{filter:t}}function jx(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function zx(t,e,n,r,i){const s=new Ox;let o,l;if(n.type===Et.OVERWRITE){const u=n;u.source.fromUser?o=Hu(t,e,u.path,u.snap,r,i,s):(T(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!G(u.path),o=ol(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===Et.MERGE){const u=n;u.source.fromUser?o=Ux(t,e,u.path,u.children,r,i,s):(T(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=$u(t,e,u.path,u.children,r,i,l,s))}else if(n.type===Et.ACK_USER_WRITE){const u=n;u.revert?o=$x(t,e,u.path,r,i,s):o=Wx(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Et.LISTEN_COMPLETE)o=Hx(t,e,n.path,r,s);else throw ci("Unknown operation type: "+n.type);const a=s.getChanges();return Bx(e,o,a),{viewCache:o,changes:a}}function Bx(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Bu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(wy(Bu(e)))}}function Py(t,e,n,r,i,s){const o=e.eventCache;if(sl(r,n)!=null)return e;{let l,a;if(G(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=hr(e),f=u instanceof L?u:L.EMPTY_NODE,d=cd(r,f);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=il(r,hr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=H(n);if(u===".priority"){T(Fn(n)===1,"Can't have a priority with additional path components");const f=o.getNode();a=e.serverCache.getNode();const d=Df(r,n,f,a);d!=null?l=t.filter.updatePriority(f,d):l=o.getNode()}else{const f=ie(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=Df(r,n,o.getNode(),a);h!=null?d=o.getNode().getImmediateChild(u).updateChild(f,h):d=o.getNode().getImmediateChild(u)}else d=dd(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,f,i,s):l=o.getNode()}}return Vi(e,l,o.isFullyInitialized()||G(n),t.filter.filtersNodes())}}function ol(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const f=o?t.filter:t.filter.getIndexedFilter();if(G(n))u=f.updateFullNode(a.getNode(),r,null);else if(f.filtersNodes()&&!a.isFiltered()){const y=a.getNode().updateChild(n,r);u=f.updateFullNode(a.getNode(),y,null)}else{const y=H(n);if(!a.isCompleteForPath(n)&&Fn(n)>1)return e;const _=ie(n),A=a.getNode().getImmediateChild(y).updateChild(_,r);y===".priority"?u=f.updatePriority(a.getNode(),A):u=f.updateChild(a.getNode(),y,A,_,Ry,null)}const d=xy(e,u,a.isFullyInitialized()||G(n),f.filtersNodes()),h=new hd(i,d,s);return Py(t,d,n,i,h,l)}function Hu(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const f=new hd(i,e,s);if(G(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Vi(e,u,!0,t.filter.filtersNodes());else{const d=H(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Vi(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=ie(n),y=l.getNode().getImmediateChild(d);let _;if(G(h))_=r;else{const w=f.getCompleteChild(d);w!=null?dy(h)===".priority"&&w.getChild(fy(h)).isEmpty()?_=w:_=w.updateChild(h,r):_=L.EMPTY_NODE}if(y.equals(_))a=e;else{const w=t.filter.updateChild(l.getNode(),d,_,h,f,o);a=Vi(e,w,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Ff(t,e){return t.eventCache.isCompleteForChild(e)}function Ux(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const f=Se(n,a);Ff(e,H(f))&&(l=Hu(t,l,f,u,i,s,o))}),r.foreach((a,u)=>{const f=Se(n,a);Ff(e,H(f))||(l=Hu(t,l,f,u,i,s,o))}),l}function Of(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function $u(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;G(n)?u=r:u=new le(null).setTree(n,r);const f=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(f.hasChild(d)){const y=e.serverCache.getNode().getImmediateChild(d),_=Of(t,y,h);a=ol(t,a,new ne(d),_,i,s,o,l)}}),u.children.inorderTraversal((d,h)=>{const y=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!f.hasChild(d)&&!y){const _=e.serverCache.getNode().getImmediateChild(d),w=Of(t,_,h);a=ol(t,a,new ne(d),w,i,s,o,l)}}),a}function Wx(t,e,n,r,i,s,o){if(sl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(G(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return ol(t,e,n,a.getNode().getChild(n),i,s,l,o);if(G(n)){let u=new le(null);return a.getNode().forEachChild(Hr,(f,d)=>{u=u.set(new ne(f),d)}),$u(t,e,n,u,i,s,l,o)}else return e}else{let u=new le(null);return r.foreach((f,d)=>{const h=Se(n,f);a.isCompleteForPath(h)&&(u=u.set(f,a.getNode().getChild(h)))}),$u(t,e,n,u,i,s,l,o)}}function Hx(t,e,n,r,i){const s=e.serverCache,o=xy(e,s.getNode(),s.isFullyInitialized()||G(n),s.isFiltered());return Py(t,o,n,r,Ry,i)}function $x(t,e,n,r,i,s){let o;if(sl(r,n)!=null)return e;{const l=new hd(r,e,i),a=e.eventCache.getNode();let u;if(G(n)||H(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=il(r,hr(e));else{const d=e.serverCache.getNode();T(d instanceof L,"serverChildren would be complete if leaf node"),f=cd(r,d)}f=f,u=t.filter.updateFullNode(a,f,s)}else{const f=H(n);let d=dd(r,f,e.serverCache);d==null&&e.serverCache.isCompleteForChild(f)&&(d=a.getImmediateChild(f)),d!=null?u=t.filter.updateChild(a,f,d,ie(n),l,s):e.eventCache.getNode().hasChild(f)?u=t.filter.updateChild(a,f,L.EMPTY_NODE,ie(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=il(r,hr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||sl(r,X())!=null,Vi(e,u,o,t.filter.filtersNodes())}}/**
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
 */class Vx{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new sd(r.getIndex()),s=cx(r);this.processor_=Mx(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(L.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(L.EMPTY_NODE,l.getNode(),null),f=new dr(a,o.isFullyInitialized(),i.filtersNodes()),d=new dr(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Ll(d,f),this.eventGenerator_=new yx(this.query_)}get query(){return this.query_}}function Gx(t){return t.viewCache_.serverCache.getNode()}function Kx(t,e){const n=hr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!G(e)&&!n.getImmediateChild(H(e)).isEmpty())?n.getChild(e):null}function Lf(t){return t.eventRegistrations_.length===0}function Qx(t,e){t.eventRegistrations_.push(e)}function Mf(t,e,n){const r=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function jf(t,e,n,r){e.type===Et.MERGE&&e.source.queryId!==null&&(T(hr(t.viewCache_),"We should always have a full cache before handling merges"),T(Bu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=zx(t.processor_,i,e,n,r);return jx(t.processor_,s.viewCache),T(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Ny(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Yx(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(me,(s,o)=>{r.push(ii(s,o))}),n.isFullyInitialized()&&r.push(wy(n.getNode())),Ny(t,r,n.getNode(),e)}function Ny(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return _x(t.eventGenerator_,e,n,i)}/**
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
 */let ll;class qx{constructor(){this.views=new Map}}function Xx(t){T(!ll,"__referenceConstructor has already been defined"),ll=t}function Jx(){return T(ll,"Reference.ts has not been loaded"),ll}function Zx(t){return t.views.size===0}function fd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return T(s!=null,"SyncTree gave us an op for an invalid query."),jf(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(jf(o,e,n,r));return s}}function eE(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=il(n,i?r:null),a=!1;l?a=!0:r instanceof L?(l=cd(n,r),a=!1):(l=L.EMPTY_NODE,a=!1);const u=Ll(new dr(l,a,!1),new dr(r,i,!1));return new Vx(e,u)}return o}function tE(t,e,n,r,i,s){const o=eE(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Qx(o,n),Yx(o,n)}function nE(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=On(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Mf(u,n,r)),Lf(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Mf(a,n,r)),Lf(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!On(t)&&s.push(new(Jx())(e._repo,e._path)),{removed:s,events:o}}function by(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function $r(t,e){let n=null;for(const r of t.views.values())n=n||Kx(r,e);return n}function Dy(t,e){if(e._queryParams.loadsAllData())return Ml(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Fy(t,e){return Dy(t,e)!=null}function On(t){return Ml(t)!=null}function Ml(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let al;function rE(t){T(!al,"__referenceConstructor has already been defined"),al=t}function iE(){return T(al,"Reference.ts has not been loaded"),al}let sE=1;class zf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new le(null),this.pendingWriteTree_=Dx(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Oy(t,e,n,r,i){return Sx(t.pendingWriteTree_,e,n,r,i),i?Ns(t,new cr(Sy(),e,n)):[]}function Xn(t,e,n=!1){const r=xx(t.pendingWriteTree_,e);if(Ex(t.pendingWriteTree_,e)){let s=new le(null);return r.snap!=null?s=s.set(X(),!0):tt(r.children,o=>{s=s.set(new ne(o),!0)}),Ns(t,new rl(r.path,s,n))}else return[]}function jl(t,e,n){return Ns(t,new cr(ld(),e,n))}function oE(t,e,n){const r=le.fromObject(n);return Ns(t,new vs(ld(),e,r))}function lE(t,e){return Ns(t,new _s(ld(),e))}function aE(t,e,n){const r=gd(t,n);if(r){const i=md(r),s=i.path,o=i.queryId,l=Ye(s,e),a=new _s(ad(o),l);return yd(t,s,a)}else return[]}function Vu(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Fy(o,e))){const a=nE(o,e,n,r);Zx(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const f=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,y)=>On(y));if(f&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const y=dE(h);for(let _=0;_<y.length;++_){const w=y[_],A=w.query,g=jy(t,w);t.listenProvider_.startListening(Ki(A),ul(t,A),g.hashFn,g.onComplete)}}}!d&&u.length>0&&!r&&(f?t.listenProvider_.stopListening(Ki(e),null):u.forEach(h=>{const y=t.queryToTagMap.get(zl(h));t.listenProvider_.stopListening(Ki(h),y)}))}hE(t,u)}return l}function uE(t,e,n,r){const i=gd(t,r);if(i!=null){const s=md(i),o=s.path,l=s.queryId,a=Ye(o,e),u=new cr(ad(l),a,n);return yd(t,o,u)}else return[]}function cE(t,e,n,r){const i=gd(t,r);if(i){const s=md(i),o=s.path,l=s.queryId,a=Ye(o,e),u=le.fromObject(n),f=new vs(ad(l),a,u);return yd(t,o,f)}else return[]}function Bf(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,y)=>{const _=Ye(h,i);s=s||$r(y,_),o=o||On(y)});let l=t.syncPointTree_.get(i);l?(o=o||On(l),s=s||$r(l,X())):(l=new qx,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=L.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((y,_)=>{const w=$r(_,X());w&&(s=s.updateImmediateChild(y,w))}));const u=Fy(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=zl(e);T(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const y=fE();t.queryToTagMap.set(h,y),t.tagToQueryMap.set(y,h)}const f=ud(t.pendingWriteTree_,i);let d=tE(l,e,n,f,s,a);if(!u&&!o&&!r){const h=Dy(l,e);d=d.concat(pE(t,e,h))}return d}function pd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ye(o,e),u=$r(l,a);if(u)return u});return Iy(i,e,s,n,!0)}function Ns(t,e){return Ly(e,t.syncPointTree_,null,ud(t.pendingWriteTree_,X()))}function Ly(t,e,n,r){if(G(t.path))return My(t,e,n,r);{const i=e.get(X());n==null&&i!=null&&(n=$r(i,X()));let s=[];const o=H(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,f=Ty(r,o);s=s.concat(Ly(l,a,u,f))}return i&&(s=s.concat(fd(i,t,r,n))),s}}function My(t,e,n,r){const i=e.get(X());n==null&&i!=null&&(n=$r(i,X()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=Ty(r,o),f=t.operationForChild(o);f&&(s=s.concat(My(f,l,a,u)))}),i&&(s=s.concat(fd(i,t,r,n))),s}function jy(t,e){const n=e.query,r=ul(t,n);return{hashFn:()=>(Gx(e)||L.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?aE(t,n._path,r):lE(t,n._path);{const s=uS(i,n);return Vu(t,n,null,s)}}}}function ul(t,e){const n=zl(e);return t.queryToTagMap.get(n)}function zl(t){return t._path.toString()+"$"+t._queryIdentifier}function gd(t,e){return t.tagToQueryMap.get(e)}function md(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ne(t.substr(0,e))}}function yd(t,e,n){const r=t.syncPointTree_.get(e);T(r,"Missing sync point for query tag that we're tracking");const i=ud(t.pendingWriteTree_,e);return fd(r,n,i,null)}function dE(t){return t.fold((e,n,r)=>{if(n&&On(n))return[Ml(n)];{let i=[];return n&&(i=by(n)),tt(r,(s,o)=>{i=i.concat(o)}),i}})}function Ki(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(iE())(t._repo,t._path):t}function hE(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=zl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function fE(){return sE++}function pE(t,e,n){const r=e._path,i=ul(t,e),s=jy(t,n),o=t.listenProvider_.startListening(Ki(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)T(!On(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,f,d)=>{if(!G(u)&&f&&On(f))return[Ml(f).query];{let h=[];return f&&(h=h.concat(by(f).map(y=>y.query))),tt(d,(y,_)=>{h=h.concat(_)}),h}});for(let u=0;u<a.length;++u){const f=a[u];t.listenProvider_.stopListening(Ki(f),ul(t,f))}}return o}/**
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
 */class _d{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new _d(n)}node(){return this.node_}}class vd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Se(this.path_,e);return new vd(this.syncTree_,n)}node(){return pd(this.syncTree_,this.path_)}}const gE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Uf=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return mE(t[".sv"],e,n);if(typeof t[".sv"]=="object")return yE(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},mE=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},yE=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&T(!1,"Unexpected increment value: "+r);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},_E=function(t,e,n,r){return wd(e,new vd(n,t),r)},zy=function(t,e,n){return wd(t,new _d(e),n)};function wd(t,e,n){const r=t.getPriority().val(),i=Uf(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=Uf(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Ee(l,be(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ee(i))),o.forEachChild(me,(l,a)=>{const u=wd(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class Cd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Sd(t,e){let n=e instanceof ne?e:new ne(e),r=t,i=H(n);for(;i!==null;){const s=ti(r.node.children,i)||{children:{},childCount:0};r=new Cd(i,r,s),n=ie(n),i=H(n)}return r}function gi(t){return t.node.value}function By(t,e){t.node.value=e,Gu(t)}function Uy(t){return t.node.childCount>0}function vE(t){return gi(t)===void 0&&!Uy(t)}function Bl(t,e){tt(t.node.children,(n,r)=>{e(new Cd(n,t,r))})}function Wy(t,e,n,r){n&&e(t),Bl(t,i=>{Wy(i,e,!0)})}function wE(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function bs(t){return new ne(t.parent===null?t.name:bs(t.parent)+"/"+t.name)}function Gu(t){t.parent!==null&&CE(t.parent,t.name,t)}function CE(t,e,n){const r=vE(n),i=on(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Gu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Gu(t))}/**
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
 */const SE=/[\[\].#$\/\u0000-\u001F\u007F]/,xE=/[\[\].#$\u0000-\u001F\u007F]/,Ra=10*1024*1024,Hy=function(t){return typeof t=="string"&&t.length!==0&&!SE.test(t)},$y=function(t){return typeof t=="string"&&t.length!==0&&!xE.test(t)},EE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),$y(t)},kE=function(t,e,n,r){xd(Qc(t,"value"),e,n)},xd=function(t,e,n){const r=n instanceof ne?new WS(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Vn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Vn(r)+" with contents = "+e.toString());if($m(e))throw new Error(t+"contains "+e.toString()+" "+Vn(r));if(typeof e=="string"&&e.length>Ra/3&&Fl(e)>Ra)throw new Error(t+"contains a string greater than "+Ra+" utf8 bytes "+Vn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(tt(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Hy(o)))throw new Error(t+" contains an invalid key ("+o+") "+Vn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);HS(r,o),xd(t,l,r),$S(r)}),i&&s)throw new Error(t+' contains ".value" child '+Vn(r)+" in addition to actual children.")}},Vy=function(t,e,n,r){if(!$y(n))throw new Error(Qc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},IE=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Vy(t,e,n)},TE=function(t,e){if(H(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},AE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Hy(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!EE(n))throw new Error(Qc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class RE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ed(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!nd(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Gy(t,e,n){Ed(t,n),Ky(t,r=>nd(r,e))}function nn(t,e,n){Ed(t,n),Ky(t,r=>xt(r,e)||xt(e,r))}function Ky(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(PE(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function PE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Hi&&ze("event: "+n.toString()),pi(r)}}}/**
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
 */const NE="repo_interrupt",bE=25;class DE{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new RE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=nl(),this.transactionQueueTree_=new Cd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function FE(t,e,n){if(t.stats_=ed(t.repoInfo_),t.forceRestClient_||fS())t.server_=new tl(t.repoInfo_,(r,i,s,o)=>{Wf(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Hf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Te(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Yt(t.repoInfo_,e,(r,i,s,o)=>{Wf(t,r,i,s,o)},r=>{Hf(t,r)},r=>{LE(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=_S(t.repoInfo_,()=>new mx(t.stats_,t.server_)),t.infoData_=new dx,t.infoSyncTree_=new zf({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=jl(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Id(t,"connected",!1),t.serverSyncTree_=new zf({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);nn(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function OE(t){const n=t.infoData_.getNode(new ne(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function kd(t){return gE({timestamp:OE(t)})}function Wf(t,e,n,r,i){t.dataUpdateCount++;const s=new ne(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=qo(n,u=>be(u));o=cE(t.serverSyncTree_,s,a,i)}else{const a=be(n);o=uE(t.serverSyncTree_,s,a,i)}else if(r){const a=qo(n,u=>be(u));o=oE(t.serverSyncTree_,s,a)}else{const a=be(n);o=jl(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Ul(t,s)),nn(t.eventQueue_,l,o)}function Hf(t,e){Id(t,"connected",e),e===!1&&jE(t)}function LE(t,e){tt(e,(n,r)=>{Id(t,n,r)})}function Id(t,e,n){const r=new ne("/.info/"+e),i=be(n);t.infoData_.updateSnapshot(r,i);const s=jl(t.infoSyncTree_,r,i);nn(t.eventQueue_,r,s)}function Qy(t){return t.nextWriteId_++}function ME(t,e,n,r,i){Td(t,"set",{path:e.toString(),value:n,priority:r});const s=kd(t),o=be(n,r),l=pd(t.serverSyncTree_,e),a=zy(o,l,s),u=Qy(t),f=Oy(t.serverSyncTree_,e,a,u,!0);Ed(t.eventQueue_,f),t.server_.put(e.toString(),o.val(!0),(h,y)=>{const _=h==="ok";_||et("set at "+e+" failed: "+h);const w=Xn(t.serverSyncTree_,u,!_);nn(t.eventQueue_,e,w),UE(t,i,h,y)});const d=Zy(t,e);Ul(t,d),nn(t.eventQueue_,d,[])}function jE(t){Td(t,"onDisconnectEvents");const e=kd(t),n=nl();zu(t.onDisconnect_,X(),(i,s)=>{const o=_E(i,s,t.serverSyncTree_,e);Cy(n,i,o)});let r=[];zu(n,X(),(i,s)=>{r=r.concat(jl(t.serverSyncTree_,i,s));const o=Zy(t,i);Ul(t,o)}),t.onDisconnect_=nl(),nn(t.eventQueue_,X(),r)}function zE(t,e,n){let r;H(e._path)===".info"?r=Bf(t.infoSyncTree_,e,n):r=Bf(t.serverSyncTree_,e,n),Gy(t.eventQueue_,e._path,r)}function $f(t,e,n){let r;H(e._path)===".info"?r=Vu(t.infoSyncTree_,e,n):r=Vu(t.serverSyncTree_,e,n),Gy(t.eventQueue_,e._path,r)}function BE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(NE)}function Td(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ze(n,...e)}function UE(t,e,n,r){e&&pi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Yy(t,e,n){return pd(t.serverSyncTree_,e,n)||L.EMPTY_NODE}function Ad(t,e=t.transactionQueueTree_){if(e||Wl(t,e),gi(e)){const n=Xy(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&WE(t,bs(e),n)}else Uy(e)&&Bl(e,n=>{Ad(t,n)})}function WE(t,e,n){const r=n.map(u=>u.currentWriteId),i=Yy(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const f=n[u];T(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const d=Ye(e,f.path);s=s.updateChild(d,f.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Td(t,"transaction put response",{path:a.toString(),status:u});let f=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,f=f.concat(Xn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Wl(t,Sd(t.transactionQueueTree_,e)),Ad(t,t.transactionQueueTree_),nn(t.eventQueue_,e,f);for(let h=0;h<d.length;h++)pi(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{et("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Ul(t,e)}},o)}function Ul(t,e){const n=qy(t,e),r=bs(n),i=Xy(t,n);return HE(t,i,r),r}function HE(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Ye(n,a.path);let f=!1,d;if(T(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)f=!0,d=a.abortReason,i=i.concat(Xn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=bE)f=!0,d="maxretry",i=i.concat(Xn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=Yy(t,a.path,o);a.currentInputSnapshot=h;const y=e[l].update(h.val());if(y!==void 0){xd("transaction failed: Data returned ",y,a.path);let _=be(y);typeof y=="object"&&y!=null&&on(y,".priority")||(_=_.updatePriority(h.getPriority()));const A=a.currentWriteId,g=kd(t),p=zy(_,h,g);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=p,a.currentWriteId=Qy(t),o.splice(o.indexOf(A),1),i=i.concat(Oy(t.serverSyncTree_,a.path,p,a.currentWriteId,a.applyLocally)),i=i.concat(Xn(t.serverSyncTree_,A,!0))}else f=!0,d="nodata",i=i.concat(Xn(t.serverSyncTree_,a.currentWriteId,!0))}nn(t.eventQueue_,n,i),i=[],f&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}Wl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)pi(r[l]);Ad(t,t.transactionQueueTree_)}function qy(t,e){let n,r=t.transactionQueueTree_;for(n=H(e);n!==null&&gi(r)===void 0;)r=Sd(r,n),e=ie(e),n=H(e);return r}function Xy(t,e){const n=[];return Jy(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Jy(t,e,n){const r=gi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Bl(e,i=>{Jy(t,i,n)})}function Wl(t,e){const n=gi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,By(e,n.length>0?n:void 0)}Bl(e,r=>{Wl(t,r)})}function Zy(t,e){const n=bs(qy(t,e)),r=Sd(t.transactionQueueTree_,e);return wE(r,i=>{Pa(t,i)}),Pa(t,r),Wy(r,i=>{Pa(t,i)}),n}function Pa(t,e){const n=gi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Xn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?By(e,void 0):n.length=s+1,nn(t.eventQueue_,bs(e),i);for(let o=0;o<r.length;o++)pi(r[o])}}/**
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
 */function $E(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function VE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):et(`Invalid query segment '${n}' in query '${t}'`)}return e}const Vf=function(t,e){const n=GE(t),r=n.namespace;n.domain==="firebase.com"&&tn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&tn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||iS();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new ny(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ne(n.pathString)}},GE=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let f=t.indexOf("/");f===-1&&(f=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(f,d)),f<d&&(i=$E(t.substring(f,d)));const h=VE(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const y=e.slice(0,u);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */class KE{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Te(this.snapshot.exportVal())}}class QE{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class YE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Rd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return G(this._path)?null:dy(this._path)}get ref(){return new Bn(this._repo,this._path)}get _queryIdentifier(){const e=Af(this._queryParams),n=Jc(e);return n==="{}"?"default":n}get _queryObject(){return Af(this._queryParams)}isEqual(e){if(e=at(e),!(e instanceof Rd))return!1;const n=this._repo===e._repo,r=nd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+US(this._path)}}class Bn extends Rd{constructor(e,n){super(e,n,new od,!1)}get parent(){const e=fy(this._path);return e===null?null:new Bn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class cl{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ne(e),r=Ku(this.ref,e);return new cl(this._node.getChild(n),r,me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new cl(i,Ku(this.ref,r),me)))}hasChild(e){const n=new ne(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function an(t,e){return t=at(t),t._checkNotDeleted("ref"),e!==void 0?Ku(t._root,e):t._root}function Ku(t,e){return t=at(t),H(t._path)===null?IE("child","path",e):Vy("child","path",e),new Bn(t._repo,Se(t._path,e))}function wr(t,e){t=at(t),TE("set",t._path),kE("set",e,t._path);const n=new Dl;return ME(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Pd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new KE("value",this,new cl(e.snapshotNode,new Bn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new QE(this,e,n):null}matches(e){return e instanceof Pd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function qE(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(f,d)=>{$f(t._repo,t,l),a(f,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new YE(n,s||void 0),l=new Pd(o);return zE(t._repo,t,l),()=>$f(t._repo,t,l)}function Na(t,e,n,r){return qE(t,"value",e,n,r)}Xx(Bn);rE(Bn);/**
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
 */const XE="FIREBASE_DATABASE_EMULATOR_HOST",Qu={};let JE=!1;function ZE(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=Ts(s);t.repoInfo_=new ny(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function e1(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||tn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ze("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Vf(s,i),l=o.repoInfo,a;typeof process<"u"&&cf&&(a=cf[XE]),a?(s=`http://${a}?ns=${l.namespace}`,o=Vf(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new gS(t.name,t.options,e);AE("Invalid Firebase Database URL",o),G(o.path)||tn("Database URL must point to the root of a Firebase Database (not including a child path).");const f=n1(l,t,u,new pS(t,n));return new r1(f,t)}function t1(t,e){const n=Qu[e];(!n||n[t.key]!==t)&&tn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),BE(t),delete n[t.key]}function n1(t,e,n,r){let i=Qu[e.name];i||(i={},Qu[e.name]=i);let s=i[t.toURLString()];return s&&tn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new DE(t,JE,n,r),i[t.toURLString()]=s,s}class r1{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(FE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Bn(this._repo,X())),this._rootInternal}_delete(){return this._rootInternal!==null&&(t1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&tn("Cannot call "+e+" on a deleted database.")}}function i1(t=jm(),e){const n=Xc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Ew("database");r&&s1(n,...r)}return n}function s1(t,e,n,r={}){t=at(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&lr(r,s.repoInfo_.emulatorOptions))return;tn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&tn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new vo(vo.OWNER);else if(r.mockUserToken){const l=typeof r.mockUserToken=="string"?r.mockUserToken:kw(r.mockUserToken,t.app.options.projectId);o=new vo(l)}Ts(e)&&Fm(e),ZE(s,i,r,o)}/**
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
 */function o1(t){JC(hi),ni(new ar("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return e1(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Pn(df,hf,t),Pn(df,hf,"esm2020")}Yt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Yt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};o1();function e_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l1=e_,t_=new Is("auth","Firebase",e_());/**
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
 */const dl=new Yc("@firebase/auth");function a1(t,...e){dl.logLevel<=Z.WARN&&dl.warn(`Auth (${hi}): ${t}`,...e)}function wo(t,...e){dl.logLevel<=Z.ERROR&&dl.error(`Auth (${hi}): ${t}`,...e)}/**
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
 */function jt(t,...e){throw bd(t,...e)}function Rt(t,...e){return bd(t,...e)}function Nd(t,e,n){const r={...l1(),[e]:n};return new Is("auth","Firebase",r).create(e,{appName:t.name})}function tr(t){return Nd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function u1(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&jt(t,"argument-error"),Nd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function bd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return t_.create(t,...e)}function M(t,e,...n){if(!t)throw bd(e,...n)}function Gt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wo(e),new Error(e)}function rn(t,e){t||Gt(e)}/**
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
 */function Yu(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function c1(){return Gf()==="http:"||Gf()==="https:"}function Gf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function d1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(c1()||Tw()||"connection"in navigator)?navigator.onLine:!0}function h1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ds{constructor(e,n){this.shortDelay=e,this.longDelay=n,rn(n>e,"Short delay should be less than long delay!"),this.isMobile=Kc()||bm()}get(){return d1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Dd(t,e){rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class n_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const f1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const p1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],g1=new Ds(3e4,6e4);function Fd(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function mi(t,e,n,r,i={}){return r_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=di({key:t.config.apiKey,...o}).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:a,...s};return Iw()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Ts(t.emulatorConfig.host)&&(u.credentials="include"),n_.fetch()(await i_(t,t.config.apiHost,n,l),u)})}async function r_(t,e,n){t._canInitEmulator=!1;const r={...f1,...e};try{const i=new y1(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw io(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw io(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw io(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw io(t,"user-disabled",o);const f=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Nd(t,f,u);jt(t,f)}}catch(i){if(i instanceof zn)throw i;jt(t,"network-request-failed",{message:String(i)})}}async function m1(t,e,n,r,i={}){const s=await mi(t,e,n,r,i);return"mfaPendingCredential"in s&&jt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function i_(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Dd(t.config,i):`${t.config.apiScheme}://${i}`;return p1.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class y1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Rt(this.auth,"network-request-failed")),g1.get())})}}function io(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Rt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function _1(t,e){return mi(t,"POST","/v1/accounts:delete",e)}async function hl(t,e){return mi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Qi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function v1(t,e=!1){const n=at(t),r=await n.getIdToken(e),i=Od(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Qi(ba(i.auth_time)),issuedAtTime:Qi(ba(i.iat)),expirationTime:Qi(ba(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ba(t){return Number(t)*1e3}function Od(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return wo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Yo(n);return i?JSON.parse(i):(wo("Failed to decode base64 JWT payload"),null)}catch(i){return wo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Kf(t){const e=Od(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ws(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof zn&&w1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function w1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class C1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class qu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qi(this.lastLoginAt),this.creationTime=Qi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function fl(t){var d;const e=t.auth,n=await t.getIdToken(),r=await ws(t,hl(e,{idToken:n}));M(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(d=i.providerUserInfo)!=null&&d.length?s_(i.providerUserInfo):[],o=x1(t.providerData,s),l=t.isAnonymous,a=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),u=l?a:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new qu(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function S1(t){const e=at(t);await fl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function x1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function s_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function E1(t,e){const n=await r_(t,{},async()=>{const r=di({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await i_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const a={method:"POST",headers:l,body:r};return t.emulatorConfig&&Ts(t.emulatorConfig.host)&&(a.credentials="include"),n_.fetch()(o,a)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function k1(t,e){return mi(t,"POST","/v2/accounts:revokeToken",Fd(t,e))}/**
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
 */class Vr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Kf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){M(e.length!==0,"internal-error");const n=Kf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await E1(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Vr;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vr,this.toJSON())}_performRefresh(){return Gt("not implemented")}}/**
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
 */function un(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class kt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new C1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new qu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ws(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return v1(this,e)}reload(){return S1(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new kt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await fl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ct(this.auth.app))return Promise.reject(tr(this.auth));const e=await this.getIdToken();return await ws(this,_1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,a=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:d,emailVerified:h,isAnonymous:y,providerData:_,stsTokenManager:w}=n;M(d&&w,e,"internal-error");const A=Vr.fromJSON(this.name,w);M(typeof d=="string",e,"internal-error"),un(r,e.name),un(i,e.name),M(typeof h=="boolean",e,"internal-error"),M(typeof y=="boolean",e,"internal-error"),un(s,e.name),un(o,e.name),un(l,e.name),un(a,e.name),un(u,e.name),un(f,e.name);const g=new kt({uid:d,auth:e,email:i,emailVerified:h,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:A,createdAt:u,lastLoginAt:f});return _&&Array.isArray(_)&&(g.providerData=_.map(p=>({...p}))),a&&(g._redirectEventId=a),g}static async _fromIdTokenResponse(e,n,r=!1){const i=new Vr;i.updateFromServerResponse(n);const s=new kt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await fl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];M(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?s_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Vr;l.updateFromIdToken(r);const a=new kt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new qu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,u),a}}/**
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
 */const Qf=new Map;function Kt(t){rn(t instanceof Function,"Expected a class definition");let e=Qf.get(t);return e?(rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Qf.set(t,e),e)}/**
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
 */class o_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}o_.type="NONE";const Yf=o_;/**
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
 */function Co(t,e,n){return`firebase:${t}:${e}:${n}`}class Gr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Co(this.userKey,i.apiKey,s),this.fullPersistenceKey=Co("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await hl(this.auth,{idToken:e}).catch(()=>{});return n?kt._fromGetAccountInfoResponse(this.auth,n,e):null}return kt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Gr(Kt(Yf),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Kt(Yf);const o=Co(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let d;if(typeof f=="string"){const h=await hl(e,{idToken:f}).catch(()=>{});if(!h)break;d=await kt._fromGetAccountInfoResponse(e,h,f)}else d=kt._fromJSON(e,f);u!==s&&(l=d),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Gr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Gr(s,e,r))}}/**
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
 */function qf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(c_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(l_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(h_(e))return"Blackberry";if(f_(e))return"Webos";if(a_(e))return"Safari";if((e.includes("chrome/")||u_(e))&&!e.includes("edge/"))return"Chrome";if(d_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function l_(t=$e()){return/firefox\//i.test(t)}function a_(t=$e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function u_(t=$e()){return/crios\//i.test(t)}function c_(t=$e()){return/iemobile/i.test(t)}function d_(t=$e()){return/android/i.test(t)}function h_(t=$e()){return/blackberry/i.test(t)}function f_(t=$e()){return/webos/i.test(t)}function Ld(t=$e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function I1(t=$e()){var e;return Ld(t)&&!!((e=window.navigator)!=null&&e.standalone)}function T1(){return Aw()&&document.documentMode===10}function p_(t=$e()){return Ld(t)||d_(t)||f_(t)||h_(t)||/windows phone/i.test(t)||c_(t)}/**
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
 */function g_(t,e=[]){let n;switch(t){case"Browser":n=qf($e());break;case"Worker":n=`${qf($e())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hi}/${r}`}/**
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
 */class A1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function R1(t,e={}){return mi(t,"GET","/v2/passwordPolicy",Fd(t,e))}/**
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
 */const P1=6;class N1{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??P1,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class b1{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xf(this),this.idTokenSubscription=new Xf(this),this.beforeStateQueue=new A1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=t_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kt(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Gr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await hl(this,{idToken:e}),r=await kt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Ct(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=h1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ct(this.app))return Promise.reject(tr(this));const n=e?at(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ct(this.app)?Promise.reject(tr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ct(this.app)?Promise.reject(tr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Kt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await R1(this),n=new N1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Is("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await k1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kt(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await Gr.create(this,[Kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=g_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Ct(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&a1(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Hl(t){return at(t)}class Xf{constructor(e){this.auth=e,this.observer=null,this.addObserver=jw(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Md={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function D1(t){Md=t}function F1(t){return Md.loadJS(t)}function O1(){return Md.gapiScript}function L1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function M1(t,e){const n=Xc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(lr(s,e??{}))return i;jt(i,"already-initialized")}return n.initialize({options:e})}function j1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Kt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function z1(t,e,n){const r=Hl(t);M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=m_(e),{host:o,port:l}=B1(e),a=l===null?"":`:${l}`,u={url:`${s}//${o}${a}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){M(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),M(lr(u,r.config.emulator)&&lr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ts(o)?Fm(`${s}//${o}${a}`):U1()}function m_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function B1(t){const e=m_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Jf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Jf(o)}}}function Jf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function U1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class y_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Gt("not implemented")}_getIdTokenResponse(e){return Gt("not implemented")}_linkToIdToken(e,n){return Gt("not implemented")}_getReauthenticationResolver(e){return Gt("not implemented")}}/**
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
 */async function Kr(t,e){return m1(t,"POST","/v1/accounts:signInWithIdp",Fd(t,e))}/**
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
 */const W1="http://localhost";class fr extends y_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new fr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Kr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Kr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Kr(e,n)}buildRequest(){const e={requestUri:W1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=di(n)}return e}}/**
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
 */class jd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fs extends jd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class gn extends Fs{constructor(){super("facebook.com")}static credential(e){return fr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";gn.PROVIDER_ID="facebook.com";/**
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
 */class Wt extends Fs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fr._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Wt.credential(n,r)}catch{return null}}}Wt.GOOGLE_SIGN_IN_METHOD="google.com";Wt.PROVIDER_ID="google.com";/**
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
 */class mn extends Fs{constructor(){super("github.com")}static credential(e){return fr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.GITHUB_SIGN_IN_METHOD="github.com";mn.PROVIDER_ID="github.com";/**
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
 */class yn extends Fs{constructor(){super("twitter.com")}static credential(e,n){return fr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yn.credential(n,r)}catch{return null}}}yn.TWITTER_SIGN_IN_METHOD="twitter.com";yn.PROVIDER_ID="twitter.com";/**
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
 */class oi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await kt._fromIdTokenResponse(e,r,i),o=Zf(r);return new oi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Zf(r);return new oi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Zf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class pl extends zn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,pl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new pl(e,n,r,i)}}function __(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?pl._fromErrorAndOperation(t,s,e,r):s})}async function H1(t,e,n=!1){const r=await ws(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return oi._forOperation(t,"link",r)}/**
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
 */async function $1(t,e,n=!1){const{auth:r}=t;if(Ct(r.app))return Promise.reject(tr(r));const i="reauthenticate";try{const s=await ws(t,__(r,i,e,t),n);M(s.idToken,r,"internal-error");const o=Od(s.idToken);M(o,r,"internal-error");const{sub:l}=o;return M(t.uid===l,r,"user-mismatch"),oi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&jt(r,"user-mismatch"),s}}/**
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
 */async function V1(t,e,n=!1){if(Ct(t.app))return Promise.reject(tr(t));const r="signIn",i=await __(t,r,e),s=await oi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function G1(t,e,n,r){return at(t).onIdTokenChanged(e,n,r)}function K1(t,e,n){return at(t).beforeAuthStateChanged(e,n)}function Q1(t,e,n,r){return at(t).onAuthStateChanged(e,n,r)}function ep(t){return at(t).signOut()}const gl="__sak";/**
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
 */class v_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gl,"1"),this.storage.removeItem(gl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Y1=1e3,q1=10;class w_ extends v_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=p_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);T1()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,q1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Y1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}w_.type="LOCAL";const X1=w_;/**
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
 */class C_ extends v_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}C_.type="SESSION";const S_=C_;/**
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
 */function J1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class $l{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new $l(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await J1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$l.receivers=[];/**
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
 */function zd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Z1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=zd("",20);i.port1.start();const f=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(f),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Mt(){return window}function ek(t){Mt().location.href=t}/**
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
 */function x_(){return typeof Mt().WorkerGlobalScope<"u"&&typeof Mt().importScripts=="function"}async function tk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function rk(){return x_()?self:null}/**
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
 */const E_="firebaseLocalStorageDb",ik=1,ml="firebaseLocalStorage",k_="fbase_key";class Os{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vl(t,e){return t.transaction([ml],e?"readwrite":"readonly").objectStore(ml)}function sk(){const t=indexedDB.deleteDatabase(E_);return new Os(t).toPromise()}function I_(){const t=indexedDB.open(E_,ik);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ml,{keyPath:k_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ml)?e(r):(r.close(),await sk(),e(await I_()))})})}async function tp(t,e,n){const r=Vl(t,!0).put({[k_]:e,value:n});return new Os(r).toPromise()}async function ok(t,e){const n=Vl(t,!1).get(e),r=await new Os(n).toPromise();return r===void 0?null:r.value}function np(t,e){const n=Vl(t,!0).delete(e);return new Os(n).toPromise()}const lk=800,ak=3;class T_{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=I_(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ak)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return x_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$l._getInstance(rk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await tk(),!this.activeServiceWorker)return;this.sender=new Z1(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await tp(e,gl,"1"),await np(e,gl)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>tp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ok(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>np(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Vl(i,!1).getAll();return new Os(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}T_.type="LOCAL";const uk=T_;new Ds(3e4,6e4);/**
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
 */function A_(t,e){return e?Kt(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Bd extends y_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Kr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Kr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ck(t){return V1(t.auth,new Bd(t),t.bypassAuthState)}function dk(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),$1(n,new Bd(t),t.bypassAuthState)}async function hk(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),H1(n,new Bd(t),t.bypassAuthState)}/**
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
 */class R_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ck;case"linkViaPopup":case"linkViaRedirect":return hk;case"reauthViaPopup":case"reauthViaRedirect":return dk;default:jt(this.auth,"internal-error")}}resolve(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const fk=new Ds(2e3,1e4);async function pk(t,e,n){if(Ct(t.app))return Promise.reject(Rt(t,"operation-not-supported-in-this-environment"));const r=Hl(t);u1(t,e,jd);const i=A_(r,n);return new Jn(r,"signInViaPopup",e,i).executeNotNull()}class Jn extends R_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Jn.currentPopupAction&&Jn.currentPopupAction.cancel(),Jn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){rn(this.filter.length===1,"Popup operations only handle one event");const e=zd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fk.get())};e()}}Jn.currentPopupAction=null;/**
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
 */const gk="pendingRedirect",So=new Map;class mk extends R_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=So.get(this.auth._key());if(!e){try{const r=await yk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}So.set(this.auth._key(),e)}return this.bypassAuthState||So.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yk(t,e){const n=wk(e),r=vk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function _k(t,e){So.set(t._key(),e)}function vk(t){return Kt(t._redirectPersistence)}function wk(t){return Co(gk,t.config.apiKey,t.name)}async function Ck(t,e,n=!1){if(Ct(t.app))return Promise.reject(tr(t));const r=Hl(t),i=A_(r,e),o=await new mk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Sk=10*60*1e3;class xk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ek(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!P_(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Rt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Sk&&this.cachedEventUids.clear(),this.cachedEventUids.has(rp(e))}saveEventToCache(e){this.cachedEventUids.add(rp(e)),this.lastProcessedEventTime=Date.now()}}function rp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function P_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ek(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return P_(t);default:return!1}}/**
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
 */async function kk(t,e={}){return mi(t,"GET","/v1/projects",e)}/**
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
 */const Ik=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tk=/^https?/;async function Ak(t){if(t.config.emulator)return;const{authorizedDomains:e}=await kk(t);for(const n of e)try{if(Rk(n))return}catch{}jt(t,"unauthorized-domain")}function Rk(t){const e=Yu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Tk.test(n))return!1;if(Ik.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Pk=new Ds(3e4,6e4);function ip(){const t=Mt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Nk(t){return new Promise((e,n)=>{var i,s,o;function r(){ip(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ip(),n(Rt(t,"network-request-failed"))},timeout:Pk.get()})}if((s=(i=Mt().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Mt().gapi)!=null&&o.load)r();else{const l=L1("iframefcb");return Mt()[l]=()=>{gapi.load?r():n(Rt(t,"network-request-failed"))},F1(`${O1()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw xo=null,e})}let xo=null;function bk(t){return xo=xo||Nk(t),xo}/**
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
 */const Dk=new Ds(5e3,15e3),Fk="__/auth/iframe",Ok="emulator/auth/iframe",Lk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Mk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jk(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Dd(e,Ok):`https://${t.config.authDomain}/${Fk}`,r={apiKey:e.apiKey,appName:t.name,v:hi},i=Mk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${di(r).slice(1)}`}async function zk(t){const e=await bk(t),n=Mt().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:jk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Lk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Rt(t,"network-request-failed"),l=Mt().setTimeout(()=>{s(o)},Dk.get());function a(){Mt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const Bk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Uk=500,Wk=600,Hk="_blank",$k="http://localhost";class sp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Vk(t,e,n,r=Uk,i=Wk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a={...Bk,width:r.toString(),height:i.toString(),top:s,left:o},u=$e().toLowerCase();n&&(l=u_(u)?Hk:n),l_(u)&&(e=e||$k,a.scrollbars="yes");const f=Object.entries(a).reduce((h,[y,_])=>`${h}${y}=${_},`,"");if(I1(u)&&l!=="_self")return Gk(e||"",l),new sp(null);const d=window.open(e||"",l,f);M(d,t,"popup-blocked");try{d.focus()}catch{}return new sp(d)}function Gk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Kk="__/auth/handler",Qk="emulator/auth/handler",Yk=encodeURIComponent("fac");async function op(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hi,eventId:i};if(e instanceof jd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Pu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,d]of Object.entries({}))o[f]=d}if(e instanceof Fs){const f=e.getScopes().filter(d=>d!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const a=await t._getAppCheckToken(),u=a?`#${Yk}=${encodeURIComponent(a)}`:"";return`${qk(t)}?${di(l).slice(1)}${u}`}function qk({config:t}){return t.emulator?Dd(t,Qk):`https://${t.authDomain}/${Kk}`}/**
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
 */const Da="webStorageSupport";class Xk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=S_,this._completeRedirectFn=Ck,this._overrideRedirectResult=_k}async _openPopup(e,n,r,i){var o;rn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await op(e,n,r,Yu(),i);return Vk(e,s,zd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await op(e,n,r,Yu(),i);return ek(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(rn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await zk(e),r=new xk(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Da,{type:Da},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Da];s!==void 0&&n(!!s),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ak(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return p_()||a_()||Ld()}}const Jk=Xk;var lp="@firebase/auth",ap="1.13.2";/**
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
 */class Zk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function eI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tI(t){ni(new ar("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:g_(t)},u=new b1(r,i,s,a);return j1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ni(new ar("auth-internal",e=>{const n=Hl(e.getProvider("auth").getImmediate());return(r=>new Zk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pn(lp,ap,eI(t)),Pn(lp,ap,"esm2020")}/**
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
 */const nI=5*60,rI=Nm("authIdTokenMaxAge")||nI;let up=null;const iI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>rI)return;const i=n==null?void 0:n.token;up!==i&&(up=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function sI(t=jm()){const e=Xc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=M1(t,{popupRedirectResolver:Jk,persistence:[uk,X1,S_]}),r=Nm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=iI(s.toString());K1(n,o,()=>o(n.currentUser)),G1(n,l=>o(l))}}const i=Rm("auth");return i&&z1(n,`http://${i}`),n}function oI(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}D1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Rt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",oI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tI("Browser");const lI={apiKey:"AIzaSyBBsCbQtT7NuCCI6owVaGH7kNWpNbPJirA",authDomain:"pet-health-book-f8fe5.firebaseapp.com",databaseURL:"https://pet-health-book-f8fe5-default-rtdb.firebaseio.com",projectId:"pet-health-book-f8fe5",storageBucket:"pet-health-book-f8fe5.firebasestorage.app",messagingSenderId:"760283215334",appId:"1:760283215334:web:4aeb51a4c2cf2a288d1227"},N_=Mm(lI),cn=i1(N_),so=sI(N_),aI=new Wt,ut={病院:"🏥",ワクチン:"💉",薬:"💊",体重:"⚖️",フード:"🍖",その他:"📝"},Gn={病院:"#EF4444",ワクチン:"#8B5CF6",薬:"#3B82F6",体重:"#10B981",フード:"#F59E0B",その他:"#6B7280"},Ri={猫:"🐱",犬:"🐶",うさぎ:"🐰",ハムスター:"🐹",鳥:"🐦",魚:"🐠",その他:"🐾"},Fa={pets:[],records:[],nextPetId:1,nextRecordId:1};function uI(t){return t.map(e=>({...e,category:e.category==="診察"?"病院":e.category}))}function Oa(t){if(!t)return"";const e=new Date(t),n=new Date,r=n.getFullYear()-e.getFullYear(),i=n.getMonth()-e.getMonth(),s=r*12+i;return s<12?`${s}ヶ月`:`${Math.floor(s/12)}歳${s%12>0?s%12+"ヶ月":""}`}function cI(){var Hd;const[t,e]=Q.useState("loading"),[n,r]=Q.useState("loading"),[i,s]=Q.useState(null),[o,l]=Q.useState(!1),[a,u]=Q.useState("home"),[f,d]=Q.useState(null),[h,y]=Q.useState({}),[_,w]=Q.useState({}),[A,g]=Q.useState("すべて"),[p,m]=Q.useState(""),[S,k]=Q.useState([]),[P,I]=Q.useState(!1),[x,j]=Q.useState(""),[z,ee]=Q.useState(""),[Re,b]=Q.useState(""),[re,_e]=Q.useState(!1),[q,zt]=Q.useState(!1),[N,O]=Q.useState(!1);Q.useEffect(()=>{const C=Q1(so,v=>{e(v),v||(r(null),s(null))});return()=>C()},[]),Q.useEffect(()=>{if(!t||t==="loading")return;const C=an(cn,`pet-health-book/members/${t.uid}`),v=Na(C,D=>{const W=D.val();r(W||null)});return()=>v()},[t]),Q.useEffect(()=>{if(!n||n==="loading")return;const C=an(cn,`pet-health-book/groups/${n}/data`),v=Na(C,D=>{const W=D.val();if(W){const mt=W.records?Array.isArray(W.records)?W.records:Object.values(W.records):[],U={...W,pets:W.pets?Array.isArray(W.pets)?W.pets:Object.values(W.pets):[],records:uI(mt)};s(U)}else wr(C,Fa),s(Fa)},D=>{console.error("Firebase sync error:",D),Ue("⚠️ 同期エラー。オフラインで動作中"),s(Fa)});return()=>v()},[n]);async function B(){if(!t||t==="loading")return;const C=Math.random().toString(36).slice(2,10).toUpperCase();await wr(an(cn,`pet-health-book/groups/${C}/info`),{createdBy:t.uid,createdAt:new Date().toISOString()}),await wr(an(cn,`pet-health-book/members/${t.uid}`),C),r(C),Ue("グループを作成しました 🎉")}async function ce(){if(!t||t==="loading")return;const C=x.trim().toUpperCase();if(!C){ee("招待コードを入力してください");return}const v=an(cn,`pet-health-book/groups/${C}/info`);if(!(await new Promise(W=>Na(v,W,{onlyOnce:!0}))).val()){ee("招待コードが見つかりません");return}await wr(an(cn,`pet-health-book/members/${t.uid}`),C),r(C),Ue("グループに参加しました 🎉")}async function ve(){!t||t==="loading"||confirm("このグループから抜けますか？（データは残ります）")&&(await wr(an(cn,`pet-health-book/members/${t.uid}`),null),r(null),s(null))}function yr(C){if(!n||n==="loading")return;l(!0);const v=an(cn,`pet-health-book/groups/${n}/data`);wr(v,C).then(()=>l(!1)).catch(D=>{console.error("Save error:",D),l(!1),Ue("⚠️ 保存に失敗しました")})}function Oe(C){s(v=>{if(!v)return v;const D=C(v);return yr(D),D})}const Ue=C=>{m(C),setTimeout(()=>m(""),2500)};function Nt(C,v){if(!i)return;const D=Un(i.pets),W=D.findIndex(te=>te.id===C);if(v==="up"&&W===0||v==="down"&&W===D.length-1)return;const mt=v==="up"?W-1:W+1,U=D.map((te,Pe)=>Pe===W?{...te,order:mt}:Pe===mt?{...te,order:W}:{...te,order:Pe});Oe(te=>({...te,pets:U}))}function Un(C){return[...C].sort((v,D)=>{const W=v.order!==void 0?v.order:v.id,mt=D.order!==void 0?D.order:D.id;return W-mt})}if(t==="loading")return c.jsxs("div",{style:{minHeight:"100vh",background:"#FDF6EE",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:16},children:[c.jsx("div",{style:{fontSize:48},children:"🐾"}),c.jsx("div",{style:{color:"#9A7A5C",fontSize:16},children:"読み込み中..."})]});if(!t)return c.jsx("div",{style:{minHeight:"100vh",background:"#FDF6EE",display:"flex",alignItems:"center",justifyContent:"center",padding:24},children:c.jsxs("div",{style:{background:"#FFF",borderRadius:24,padding:"40px 32px",maxWidth:360,width:"100%",textAlign:"center",boxShadow:"0 4px 24px rgba(0,0,0,0.08)"},children:[c.jsx("div",{style:{fontSize:64,marginBottom:16},children:"🐾"}),c.jsx("h1",{style:{fontSize:24,fontWeight:700,color:"#3D2B1A",margin:"0 0 8px"},children:"ペット健康手帳"}),c.jsxs("p",{style:{color:"#9A7A5C",fontSize:14,margin:"0 0 32px",lineHeight:1.6},children:["大切な家族の健康を記録しよう。",c.jsx("br",{}),"Googleアカウントでログインしてください。"]}),c.jsxs("button",{onClick:async()=>{try{await pk(so,aI)}catch(C){console.error(C),alert("ログインに失敗しました: "+((C==null?void 0:C.message)||C))}},style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,width:"100%",background:"#FFF",border:"1.5px solid #E0D5C8",borderRadius:12,padding:"14px 20px",fontSize:15,fontWeight:600,color:"#3D2B1A",cursor:"pointer",boxShadow:"0 2px 8px rgba(0,0,0,0.06)"},children:[c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 48 48",children:[c.jsx("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),c.jsx("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),c.jsx("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),c.jsx("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"})]}),"Googleでログイン"]}),c.jsx("p",{style:{color:"#BBA08A",fontSize:12,marginTop:20},children:"ログインした方のみデータにアクセスできます"})]})});if(n==="loading")return c.jsxs("div",{style:{minHeight:"100vh",background:"#FDF6EE",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:16},children:[c.jsx("div",{style:{fontSize:48},children:"🐾"}),c.jsx("div",{style:{color:"#9A7A5C",fontSize:16},children:"読み込み中..."})]});if(!n)return c.jsx("div",{style:{minHeight:"100vh",background:"#FDF6EE",display:"flex",alignItems:"center",justifyContent:"center",padding:24},children:c.jsxs("div",{style:{background:"#FFF",borderRadius:24,padding:"36px 28px",maxWidth:380,width:"100%",boxShadow:"0 4px 24px rgba(0,0,0,0.08)"},children:[c.jsxs("div",{style:{textAlign:"center",marginBottom:28},children:[c.jsx("div",{style:{fontSize:48},children:"🏠"}),c.jsx("h2",{style:{fontSize:20,fontWeight:700,color:"#3D2B1A",margin:"12px 0 6px"},children:"グループを設定"}),c.jsxs("p",{style:{color:"#9A7A5C",fontSize:13,lineHeight:1.6},children:["家族で同じグループに入ると",c.jsx("br",{}),"データを共有できます"]})]}),c.jsx("button",{onClick:B,style:{width:"100%",background:"#C49A6C",color:"#FFF",border:"none",borderRadius:14,padding:"16px",fontSize:15,fontWeight:700,cursor:"pointer",marginBottom:12},children:"🆕 新しいグループを作る"}),c.jsx("div",{style:{textAlign:"center",color:"#BBA08A",fontSize:13,margin:"4px 0 12px"},children:"または"}),c.jsxs("div",{style:{background:"#FFF8F0",borderRadius:14,padding:16},children:[c.jsx("div",{style:{fontWeight:700,color:"#3D2B1A",fontSize:14,marginBottom:10},children:"👨‍👩‍👧 招待コードで参加"}),c.jsx("input",{style:{width:"100%",padding:"10px 14px",borderRadius:10,border:"1.5px solid #E8D5BC",fontSize:16,letterSpacing:4,textTransform:"uppercase",boxSizing:"border-box",textAlign:"center"},placeholder:"例: AB12CD34",value:x,onChange:C=>{j(C.target.value),ee("")},maxLength:8}),z&&c.jsx("div",{style:{color:"#EF4444",fontSize:12,marginTop:6},children:z}),c.jsx("button",{onClick:ce,style:{width:"100%",background:"#3D2B1A",color:"#FFF",border:"none",borderRadius:10,padding:"12px",fontSize:14,fontWeight:700,cursor:"pointer",marginTop:10},children:"参加する"})]}),c.jsx("button",{onClick:()=>ep(so),style:{width:"100%",background:"none",border:"none",color:"#BBA08A",fontSize:13,cursor:"pointer",marginTop:20},children:"ログアウト"})]})});if(!i)return c.jsxs("div",{style:{minHeight:"100vh",background:"#FDF6EE",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:16},children:[c.jsx("div",{style:{fontSize:48},children:"🐾"}),c.jsx("div",{style:{color:"#9A7A5C",fontSize:16},children:"データを読み込み中..."})]});const V=i.pets.find(C=>C.id===f)??null,Gl=i.records.filter(C=>C.petId===f).filter(C=>A==="すべて"||C.category===A).filter(C=>{if(!Re.trim())return!0;const v=Re.trim().toLowerCase();return C.title.toLowerCase().includes(v)||C.description.toLowerCase().includes(v)||C.date.includes(v)}).sort((C,v)=>v.date.localeCompare(C.date));function b_(){const C=i.pets.length,v={id:i.nextPetId,name:h.name||"名前未設定",species:h.species||"その他",breed:h.breed||"",birthdate:h.birthdate||"",color:h.color||"#C49A6C",icon:Ri[h.species||""]||"🐾",photo:h.photo||"",weight:h.weight||"",microchip:h.microchip||"",insurance:h.insurance||"",vet:h.vet||"",notes:h.notes||"",order:C};Oe(D=>({...D,pets:[...D.pets,v],nextPetId:D.nextPetId+1})),Ue(`${v.name}を追加しました 🎉`),u("home")}function D_(){Oe(C=>({...C,pets:C.pets.map(v=>v.id===f?{...v,...h,icon:Ri[h.species||v.species]||v.icon,photo:h.photo??v.photo}:v)})),Ue("プロフィールを更新しました ✅"),u("petDetail")}function F_(C){confirm("このペットと全記録を削除しますか？")&&(Oe(v=>({...v,pets:v.pets.filter(D=>D.id!==C),records:v.records.filter(D=>D.petId!==C)})),u("home"),Ue("削除しました"))}function O_(){const C={id:i.nextRecordId,petId:f,date:_.date||new Date().toISOString().slice(0,10),category:_.category||"その他",title:_.title||"記録",description:_.description||"",weight:_.weight||"",nextDate:_.nextDate||""};Oe(v=>({...v,records:[...v.records,C],nextRecordId:v.nextRecordId+1})),Ue("記録を追加しました 📝"),u("recordList")}function Wd(C){Oe(v=>({...v,records:v.records.filter(D=>D.id!==C)})),Ue("記録を削除しました")}function L_(){Oe(C=>({...C,records:C.records.map(v=>v.id===_.id?{...v,..._}:v)})),Ue("記録を更新しました ✅"),u("recordList")}if(a==="home"){const C=Un(i.pets);return c.jsxs(Cr,{children:[c.jsxs("div",{style:{background:"linear-gradient(135deg, #FFF5E9, #FDE8D0)",borderRadius:20,padding:"24px 20px 20px",marginBottom:20,textAlign:"center",position:"relative",overflow:"hidden"},children:[c.jsx("div",{style:{position:"absolute",top:-10,right:-10,fontSize:80,opacity:.08,lineHeight:1},children:"🐾"}),c.jsx("div",{style:{position:"absolute",bottom:-10,left:-10,fontSize:60,opacity:.06,lineHeight:1},children:"🐱"}),c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,marginBottom:4},children:[c.jsx("span",{style:{fontSize:28},children:"🐾"}),c.jsx("h1",{style:{margin:0,fontSize:22,fontWeight:700,color:"#3D2B1A"},children:"ペット健康手帳"})]}),c.jsx("p",{style:{margin:"0 0 14px",color:"#9A7A5C",fontSize:13},children:"大切な家族の健康を記録しよう"}),c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,flexWrap:"wrap"},children:[t.photoURL&&c.jsx("img",{src:t.photoURL,alt:"avatar",style:{width:24,height:24,borderRadius:"50%",border:"2px solid #FFF"}}),c.jsx("span",{style:{fontSize:12,color:"#7A5C3A",fontWeight:600},children:t.displayName||t.email}),c.jsx("span",{style:{color:"#C49A6C",fontSize:10},children:"|"}),c.jsx("button",{onClick:()=>ep(so),style:{background:"none",border:"none",fontSize:12,color:"#9A7A5C",cursor:"pointer",padding:0},children:"ログアウト"})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginTop:10,flexWrap:"wrap"},children:[c.jsxs("div",{style:{background:"#FFF",borderRadius:20,padding:"4px 12px",fontSize:11,color:"#7A5C3A",fontWeight:600,letterSpacing:1,boxShadow:"0 1px 4px rgba(0,0,0,0.08)"},children:["🏠 ",n]}),o&&c.jsx("div",{style:{fontSize:11,color:"#9A7A5C",background:"#FFF",borderRadius:20,padding:"4px 10px"},children:"☁️ 同期中"}),c.jsx("button",{onClick:ve,style:{background:"none",border:"none",fontSize:11,color:"#BBA08A",cursor:"pointer",padding:0},children:"グループを抜ける"})]})]}),(()=>{if(N)return null;const v=new Date().toISOString().slice(5,10),D=i.pets.filter(W=>W.birthdate&&W.birthdate.slice(5)===v);return D.length===0?null:c.jsxs("div",{style:{background:"linear-gradient(135deg, #FFF0DC, #FFD9A0)",border:"2px solid #C49A6C",borderRadius:16,padding:"16px 20px",marginBottom:16,position:"relative"},children:[c.jsx("button",{onClick:()=>O(!0),style:{position:"absolute",top:10,right:12,background:"none",border:"none",fontSize:18,cursor:"pointer",color:"#9A7A5C"},children:"✕"}),c.jsx("div",{style:{fontSize:28,marginBottom:6},children:"🎂🎉"}),c.jsxs("div",{style:{fontWeight:700,fontSize:16,color:"#3D2B1A",marginBottom:4},children:["今日は",D.map(W=>W.name).join("・"),"の誕生日！"]}),c.jsxs("div",{style:{fontSize:13,color:"#7A5C3A"},children:[D.map(W=>`${W.name}（${Oa(W.birthdate)}）`).join("、"),"、お誕生日おめでとう🐾"]})]})})(),c.jsxs("div",{style:{display:"flex",gap:8,marginBottom:16,justifyContent:"flex-end"},children:[i.pets.length>=2&&c.jsx("button",{onClick:()=>_e(!0),style:{background:"#FFF0DC",border:"none",borderRadius:20,padding:"8px 14px",fontSize:13,fontWeight:600,color:"#7A5C3A",cursor:"pointer"},children:"📊 体重比較"}),i.pets.length>=2&&c.jsx("button",{onClick:()=>zt(v=>!v),style:{background:q?"#C49A6C":"#FFF0DC",border:"none",borderRadius:20,padding:"8px 14px",fontSize:13,fontWeight:600,color:q?"#FFF":"#7A5C3A",cursor:"pointer"},children:q?"✅ 完了":"↕️ 並び替え"})]}),q&&c.jsx("div",{style:{background:"#FFF8EE",border:"1px solid #F0D9B0",borderRadius:12,padding:"10px 14px",marginBottom:12,fontSize:13,color:"#7A5C3A",textAlign:"center"},children:"↑↓ ボタンでペットの順番を変更できます"}),i.pets.length===0&&c.jsx(dI,{onStart:()=>{y({}),u("addPet")}}),c.jsxs("div",{style:R.petGrid,children:[C.map((v,D)=>c.jsxs("div",{style:{position:"relative"},children:[c.jsxs("button",{style:R.petCard,onClick:()=>{q||(d(v.id),u("petDetail"))},children:[c.jsx("div",{style:{...R.petCardIcon,background:v.color+"33",overflow:"hidden"},children:v.photo?c.jsx("img",{src:v.photo,alt:v.name,style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"50%"}}):c.jsx("span",{style:{fontSize:40},children:v.icon})}),c.jsx("div",{style:R.petCardName,children:v.name}),c.jsxs("div",{style:R.petCardSub,children:[v.species,v.breed?` / ${v.breed}`:""]}),v.birthdate&&c.jsx("div",{style:R.petCardAge,children:Oa(v.birthdate)}),c.jsxs("div",{style:R.petCardRecords,children:["記録 ",i.records.filter(W=>W.petId===v.id).length,"件"]})]}),q&&c.jsxs("div",{style:{position:"absolute",top:6,right:6,display:"flex",flexDirection:"column",gap:3},children:[c.jsx("button",{onClick:()=>Nt(v.id,"up"),disabled:D===0,style:{background:D===0?"#E8D5BC":"#C49A6C",border:"none",borderRadius:6,width:26,height:26,color:"#FFF",cursor:D===0?"default":"pointer",fontSize:13,display:"flex",alignItems:"center",justifyContent:"center"},children:"↑"}),c.jsx("button",{onClick:()=>Nt(v.id,"down"),disabled:D===C.length-1,style:{background:D===C.length-1?"#E8D5BC":"#C49A6C",border:"none",borderRadius:6,width:26,height:26,color:"#FFF",cursor:D===C.length-1?"default":"pointer",fontSize:13,display:"flex",alignItems:"center",justifyContent:"center"},children:"↓"})]})]},v.id)),!q&&c.jsxs("button",{style:R.addPetCard,onClick:()=>{y({}),u("addPet")},children:[c.jsx("span",{style:{fontSize:32},children:"➕"}),c.jsx("div",{style:{marginTop:8,fontWeight:600,color:"#C49A6C"},children:"ペットを追加"})]})]}),re&&c.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",padding:16},onClick:()=>_e(!1),children:c.jsxs("div",{style:{background:"#FFF",borderRadius:20,padding:24,width:"100%",maxWidth:640,maxHeight:"85vh",overflowY:"auto"},onClick:v=>v.stopPropagation(),children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20},children:[c.jsx("div",{style:{fontWeight:700,fontSize:17,color:"#3D2B1A"},children:"📊 体重比較グラフ"}),c.jsx("button",{onClick:()=>_e(!1),style:{background:"none",border:"none",fontSize:20,cursor:"pointer",color:"#9A7A5C"},children:"✕"})]}),c.jsx(hI,{pets:i.pets,records:i.records})]})}),c.jsx(Sr,{message:p})]})}if(a==="petDetail"&&V){const C=i.pets.findIndex(U=>U.id===V.id),v=i.pets[C-1]??null,D=i.pets[C+1]??null,W=U=>{window._swipeStartX=U.touches[0].clientX},mt=U=>{const te=window._swipeStartX??null;if(te===null)return;const Pe=te-U.changedTouches[0].clientX;Math.abs(Pe)<60||(Pe>0&&D&&d(D.id),Pe<0&&v&&d(v.id))};return c.jsxs(Cr,{children:[i.pets.length>1&&c.jsx("div",{style:{display:"flex",justifyContent:"center",gap:6,marginBottom:12},children:i.pets.map(U=>c.jsx("button",{onClick:()=>d(U.id),style:{width:U.id===V.id?20:8,height:8,borderRadius:4,border:"none",cursor:"pointer",transition:"width 0.2s",background:U.id===V.id?V.color||"#C49A6C":"#E8D5BC",padding:0}},U.id))}),c.jsxs("div",{onTouchStart:W,onTouchEnd:mt,children:[c.jsxs("div",{style:{...R.petBanner,background:`linear-gradient(135deg, ${V.color}44, ${V.color}22)`},children:[V.photo?c.jsx("img",{src:V.photo,alt:V.name,style:{width:80,height:80,borderRadius:"50%",objectFit:"cover",flexShrink:0}}):c.jsx("span",{style:{fontSize:64},children:V.icon}),c.jsxs("div",{children:[c.jsx("h2",{style:{margin:0,fontSize:28,color:"#3D2B1A"},children:V.name}),c.jsxs("div",{style:{color:"#7A5C3A",marginTop:4},children:[V.species,V.breed?` / ${V.breed}`:"",V.birthdate&&c.jsxs("span",{style:{marginLeft:12},children:["🎂 ",Oa(V.birthdate)]})]})]}),c.jsxs("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[c.jsx(dp,{onClick:()=>{y({...V}),u("editPet")},title:"編集",children:"✏️"}),c.jsx(dp,{onClick:()=>F_(V.id),title:"削除",danger:!0,children:"🗑️"})]})]}),c.jsxs("div",{style:R.infoGrid,children:[c.jsx(gI,{records:i.records,petId:V.id}),c.jsx(pI,{pet:V,onSave:U=>{Oe(te=>({...te,pets:te.pets.map(Pe=>Pe.id===V.id?{...Pe,...U}:Pe)})),Ue("病院情報を更新しました ✅")}}),[{label:"マイクロチップ",value:V.microchip||"—"},{label:"保険",value:V.insurance||"—"}].map(U=>c.jsxs("div",{style:R.infoCard,children:[c.jsx("div",{style:R.infoLabel,children:U.label}),c.jsx("div",{style:R.infoValue,children:U.value})]},U.label))]}),V.notes&&c.jsxs("div",{style:R.notesBox,children:[c.jsx("span",{style:{marginRight:6},children:"📌"}),c.jsx(Ud,{text:V.notes})]}),c.jsx("div",{style:R.sectionHeader,children:c.jsx("span",{children:"📊 カテゴリ別"})}),c.jsx("div",{style:R.categoryRow,children:Object.keys(ut).map(U=>{const te=i.records.filter(Pe=>Pe.petId===V.id&&Pe.category===U).length;return c.jsxs("button",{style:R.catChip,onClick:()=>{g(U),b(""),u("recordList")},children:[c.jsx("span",{children:ut[U]}),c.jsx("span",{style:{fontSize:11,color:"#7A5C3A"},children:U}),c.jsx("span",{style:{...R.catCount,background:Gn[U]},children:te})]},U)})}),c.jsxs("div",{style:R.sectionHeader,children:[c.jsx("span",{children:"📅 カレンダー"}),c.jsx("button",{style:R.linkBtn,onClick:()=>{g("すべて"),b(""),u("recordList")},children:"一覧で見る →"})]}),c.jsx(fI,{records:i.records.filter(U=>U.petId===V.id),onDayClick:U=>{U.length!==0&&(k(U),I(!0))}})]}),c.jsx("div",{style:R.fab,children:c.jsxs("div",{style:{display:"flex",gap:12},children:[c.jsx("button",{style:R.fabBtnBack,onClick:()=>u("home"),children:"← 戻る"}),c.jsx("button",{style:R.fabBtn,onClick:()=>{w({date:new Date().toISOString().slice(0,10)}),u("addRecord")},children:"＋ 記録を追加"})]})}),P&&c.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:200,display:"flex",alignItems:"flex-end",justifyContent:"center"},onClick:()=>I(!1),children:c.jsxs("div",{style:{background:"#FDF6EE",borderRadius:"20px 20px 0 0",padding:24,width:"100%",maxWidth:600,maxHeight:"70vh",overflowY:"auto"},onClick:U=>U.stopPropagation(),children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16},children:[c.jsxs("div",{style:{fontWeight:700,fontSize:16,color:"#3D2B1A"},children:["📋 ",(Hd=S[0])==null?void 0:Hd.date,"の記録"]}),c.jsx("button",{onClick:()=>I(!1),style:{background:"none",border:"none",fontSize:20,cursor:"pointer",color:"#9A7A5C"},children:"✕"})]}),S.map(U=>c.jsx(hp,{record:U,onDelete:te=>{Wd(te),I(!1)},onEdit:te=>{w({...te}),I(!1),u("editRecord")},expanded:!0},U.id))]})}),c.jsx(Sr,{message:p})]})}if(a==="addPet"||a==="editPet"){const C=a==="editPet";return c.jsxs(Cr,{children:[c.jsx(La,{onClick:()=>u(C?"petDetail":"home")}),c.jsx("h2",{style:R.formTitle,children:C?"プロフィール編集":"新しいペットを追加"}),c.jsxs("div",{style:R.form,children:[c.jsx(de,{label:"アイコン写真",children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[c.jsx("div",{style:{width:80,height:80,borderRadius:"50%",background:h.color?h.color+"33":"#C49A6C33",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,border:"2px dashed #C49A6C"},children:h.photo?c.jsx("img",{src:h.photo,alt:"preview",style:{width:"100%",height:"100%",objectFit:"cover"}}):c.jsx("span",{style:{fontSize:36},children:Ri[h.species||""]||"🐾"})}),c.jsxs("div",{style:{flex:1},children:[c.jsxs("label",{style:{display:"inline-block",background:"#C49A6C",color:"#FFF",borderRadius:10,padding:"10px 16px",cursor:"pointer",fontSize:14,fontWeight:600},children:["📷 写真を選択",c.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:v=>{var mt;const D=(mt=v.target.files)==null?void 0:mt[0];if(!D)return;const W=new FileReader;W.onload=U=>{var Pe;const te=new Image;te.onload=()=>{const Ls=document.createElement("canvas"),Ms=200;Ls.width=Ms,Ls.height=Ms;const M_=Ls.getContext("2d"),js=Math.min(te.width,te.height),j_=(te.width-js)/2,z_=(te.height-js)/2;M_.drawImage(te,j_,z_,js,js,0,0,Ms,Ms),y(B_=>({...B_,photo:Ls.toDataURL("image/jpeg",.7)}))},te.src=(Pe=U.target)==null?void 0:Pe.result},W.readAsDataURL(D)}})]}),h.photo&&c.jsx("button",{style:{display:"block",marginTop:8,background:"none",border:"none",color:"#EF4444",cursor:"pointer",fontSize:13},onClick:()=>y(v=>({...v,photo:""})),children:"🗑️ 写真を削除"})]})]})}),c.jsx(de,{label:"名前 *",children:c.jsx("input",{style:R.input,value:h.name||"",onChange:v=>y(D=>({...D,name:v.target.value})),placeholder:"例: じゅうべい"})}),c.jsx(de,{label:"種類",children:c.jsxs("select",{style:R.input,value:h.species||"",onChange:v=>y(D=>({...D,species:v.target.value})),children:[c.jsx("option",{value:"",children:"選択してください"}),Object.keys(Ri).map(v=>c.jsxs("option",{value:v,children:[Ri[v]," ",v]},v))]})}),c.jsx(de,{label:"品種",children:c.jsx("input",{style:R.input,value:h.breed||"",onChange:v=>y(D=>({...D,breed:v.target.value})),placeholder:"例: アメリカンショートヘア"})}),c.jsx(de,{label:"生年月日",children:c.jsx("input",{type:"date",style:R.input,value:h.birthdate||"",onChange:v=>y(D=>({...D,birthdate:v.target.value}))})}),c.jsx(de,{label:"体重 (kg)",children:c.jsx("input",{type:"number",step:"0.1",style:R.input,value:h.weight||"",onChange:v=>y(D=>({...D,weight:v.target.value})),placeholder:"例: 4.2"})}),c.jsx(de,{label:"かかりつけ病院",children:c.jsx("input",{style:R.input,value:h.vet||"",onChange:v=>y(D=>({...D,vet:v.target.value})),placeholder:"例: ○○動物病院"})}),c.jsx(de,{label:"マイクロチップ番号",children:c.jsx("input",{style:R.input,value:h.microchip||"",onChange:v=>y(D=>({...D,microchip:v.target.value}))})}),c.jsx(de,{label:"ペット保険",children:c.jsx("input",{style:R.input,value:h.insurance||"",onChange:v=>y(D=>({...D,insurance:v.target.value})),placeholder:"例: アニコム"})}),c.jsx(de,{label:"テーマカラー",children:c.jsx("input",{type:"color",style:{...R.input,height:44,padding:4},value:h.color||"#C49A6C",onChange:v=>y(D=>({...D,color:v.target.value}))})}),c.jsx(de,{label:"メモ",children:c.jsx("textarea",{style:{...R.input,height:80,resize:"vertical"},value:h.notes||"",onChange:v=>y(D=>({...D,notes:v.target.value})),placeholder:"アレルギー、好き嫌いなど"})}),c.jsx("button",{style:R.primaryBtn,onClick:C?D_:b_,children:C?"✅ 更新する":"🎉 追加する"})]}),c.jsx(Sr,{message:p})]})}return a==="addRecord"&&V?c.jsxs(Cr,{children:[c.jsx(La,{onClick:()=>u("petDetail")}),c.jsx("h2",{style:R.formTitle,children:"記録を追加"}),c.jsxs("p",{style:{textAlign:"center",color:"#7A5C3A",marginTop:-16,marginBottom:24},children:[V.icon," ",V.name]}),c.jsxs("div",{style:R.form,children:[c.jsx(de,{label:"日付 *",children:c.jsx("input",{type:"date",style:R.input,value:_.date||"",onChange:C=>w(v=>({...v,date:C.target.value}))})}),c.jsx(de,{label:"カテゴリ",children:c.jsx("div",{style:R.catSelector,children:Object.keys(ut).map(C=>c.jsxs("button",{style:{...R.catOption,background:_.category===C?Gn[C]+"33":"#FFF7EE",border:_.category===C?`2px solid ${Gn[C]}`:"2px solid transparent"},onClick:()=>w(v=>({...v,category:C})),children:[c.jsx("span",{children:ut[C]}),c.jsx("span",{style:{fontSize:12},children:C})]},C))})}),c.jsx(de,{label:"タイトル *",children:c.jsx("input",{style:R.input,value:_.title||"",onChange:C=>w(v=>({...v,title:C.target.value})),placeholder:"例: 年次健診"})}),c.jsx(de,{label:"詳細メモ",children:c.jsx("textarea",{style:{...R.input,height:100,resize:"vertical"},value:_.description||"",onChange:C=>w(v=>({...v,description:C.target.value})),placeholder:"診断内容、投薬量、気づいたことなど"})}),_.category==="体重"&&c.jsx(de,{label:"体重 (kg)",children:c.jsx("input",{type:"number",step:"0.1",style:R.input,value:_.weight||"",onChange:C=>w(v=>({...v,weight:C.target.value})),placeholder:"例: 4.2"})}),c.jsx(de,{label:"次回予定日",children:c.jsx("input",{type:"date",style:R.input,value:_.nextDate||"",onChange:C=>w(v=>({...v,nextDate:C.target.value}))})}),c.jsx("button",{style:R.primaryBtn,onClick:O_,children:"📝 記録する"})]}),c.jsx(Sr,{message:p})]}):a==="editRecord"&&V?c.jsxs(Cr,{children:[c.jsx(La,{onClick:()=>u("recordList")}),c.jsx("h2",{style:R.formTitle,children:"記録を編集"}),c.jsxs("p",{style:{textAlign:"center",color:"#7A5C3A",marginTop:-16,marginBottom:24},children:[V.icon," ",V.name]}),c.jsxs("div",{style:R.form,children:[c.jsx(de,{label:"日付 *",children:c.jsx("input",{type:"date",style:R.input,value:_.date||"",onChange:C=>w(v=>({...v,date:C.target.value}))})}),c.jsx(de,{label:"カテゴリ",children:c.jsx("div",{style:R.catSelector,children:Object.keys(ut).map(C=>c.jsxs("button",{style:{...R.catOption,background:_.category===C?Gn[C]+"33":"#FFF7EE",border:_.category===C?`2px solid ${Gn[C]}`:"2px solid transparent"},onClick:()=>w(v=>({...v,category:C})),children:[c.jsx("span",{children:ut[C]}),c.jsx("span",{style:{fontSize:12},children:C})]},C))})}),c.jsx(de,{label:"タイトル *",children:c.jsx("input",{style:R.input,value:_.title||"",onChange:C=>w(v=>({...v,title:C.target.value})),placeholder:"例: 年次健診"})}),c.jsx(de,{label:"詳細メモ",children:c.jsx("textarea",{style:{...R.input,height:100,resize:"vertical"},value:_.description||"",onChange:C=>w(v=>({...v,description:C.target.value})),placeholder:"診断内容、投薬量、気づいたことなど"})}),_.category==="体重"&&c.jsx(de,{label:"体重 (kg)",children:c.jsx("input",{type:"number",step:"0.1",style:R.input,value:_.weight||"",onChange:C=>w(v=>({...v,weight:C.target.value})),placeholder:"例: 4.2"})}),c.jsx(de,{label:"次回予定日",children:c.jsx("input",{type:"date",style:R.input,value:_.nextDate||"",onChange:C=>w(v=>({...v,nextDate:C.target.value}))})}),c.jsx("button",{style:R.primaryBtn,onClick:L_,children:"✅ 更新する"})]}),c.jsx(Sr,{message:p})]}):a==="recordList"&&V?c.jsxs(Cr,{children:[c.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},children:c.jsxs("h2",{style:{margin:0,fontSize:20,color:"#3D2B1A"},children:[V.icon," ",V.name,"の記録"]})}),c.jsxs("div",{style:{position:"relative",marginBottom:14},children:[c.jsx("span",{style:{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",fontSize:16,color:"#BBA08A",pointerEvents:"none"},children:"🔍"}),c.jsx("input",{style:{...R.input,paddingLeft:36,paddingRight:Re?36:14},placeholder:"タイトル・メモ・日付で検索...",value:Re,onChange:C=>b(C.target.value)}),Re&&c.jsx("button",{onClick:()=>b(""),style:{position:"absolute",right:10,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",fontSize:16,color:"#BBA08A",cursor:"pointer",padding:2},children:"✕"})]}),c.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:20},children:["すべて",...Object.keys(ut)].map(C=>c.jsxs("button",{style:{...R.filterChip,background:A===C?"#C49A6C":"#FFF0DC",color:A===C?"#FFF":"#7A5C3A"},onClick:()=>g(C),children:[C!=="すべて"&&ut[C]+" ",C]},C))}),(Re||A!=="すべて")&&c.jsxs("div",{style:{fontSize:12,color:"#9A7A5C",marginBottom:12,paddingLeft:4},children:[Gl.length,"件の記録",Re&&c.jsxs("span",{children:[" 「",Re,"」"]}),A!=="すべて"&&c.jsxs("span",{children:[" [",A,"]"]})]}),Gl.length===0?c.jsx(yI,{icon:"📭",msg:Re?"検索結果がありません":"該当する記録がありません"}):Gl.map(C=>c.jsx(hp,{record:C,onDelete:Wd,onEdit:v=>{w({...v}),u("editRecord")},expanded:!0},C.id)),c.jsxs("div",{style:{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)",display:"flex",gap:12,zIndex:100},children:[c.jsx("button",{style:{background:"#FFF",color:"#7A5C3A",border:"1.5px solid #E8D5BC",borderRadius:30,padding:"14px 22px",fontSize:15,fontWeight:700,cursor:"pointer",boxShadow:"0 4px 20px rgba(0,0,0,0.12)",whiteSpace:"nowrap"},onClick:()=>u("petDetail"),children:"← 戻る"}),c.jsx("button",{style:{background:"#C49A6C",color:"#FFF",border:"none",borderRadius:30,padding:"14px 22px",fontSize:15,fontWeight:700,cursor:"pointer",boxShadow:"0 4px 20px rgba(196,154,108,0.4)",whiteSpace:"nowrap"},onClick:()=>{w({date:new Date().toISOString().slice(0,10)}),u("addRecord")},children:"＋ 記録を追加"})]}),c.jsx(Sr,{message:p})]}):c.jsx("div",{style:{padding:40,textAlign:"center"},children:"読み込み中..."})}function dI({onStart:t}){const e=[{icon:"🐾",title:"ペットを登録する",desc:"名前・種類・生年月日・写真などのプロフィールを登録します。複数のペットを管理できます。"},{icon:"📝",title:"健康記録をつける",desc:"病院・ワクチン・薬・体重・フードなどをカテゴリごとに記録。カレンダーで一覧確認できます。"},{icon:"⚖️",title:"体重の変化を確認する",desc:"体重記録をグラフで可視化。3匹まとめて比較グラフも見られます。"},{icon:"👨‍👩‍👧",title:"家族と共有する",desc:"グループコードを共有するだけで、家族全員がリアルタイムでデータを閲覧・更新できます。"}];return c.jsxs("div",{style:{marginBottom:28},children:[c.jsxs("div",{style:{background:"linear-gradient(135deg, #FFF0DC, #FDE8D0)",borderRadius:16,padding:"20px 20px 16px",marginBottom:16,textAlign:"center",border:"1.5px dashed #C49A6C"},children:[c.jsx("div",{style:{fontSize:40,marginBottom:8},children:"🎉"}),c.jsx("div",{style:{fontWeight:700,fontSize:16,color:"#3D2B1A",marginBottom:6},children:"ペット健康手帳へようこそ！"}),c.jsxs("div",{style:{fontSize:13,color:"#7A5C3A",lineHeight:1.7},children:["大切なペットの健康情報を家族みんなで管理できます。",c.jsx("br",{}),"まずはペットを登録してみましょう。"]}),c.jsx("button",{onClick:t,style:{marginTop:14,background:"#C49A6C",color:"#FFF",border:"none",borderRadius:24,padding:"12px 28px",fontSize:15,fontWeight:700,cursor:"pointer",boxShadow:"0 3px 12px rgba(196,154,108,0.4)"},children:"🐾 最初のペットを登録する"})]}),c.jsx("div",{style:{fontSize:12,fontWeight:700,color:"#9A7A5C",textTransform:"uppercase",letterSpacing:1,marginBottom:10,paddingLeft:4},children:"できること"}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:e.map((n,r)=>c.jsxs("div",{style:{background:"#FFF",borderRadius:14,padding:"14px 16px",display:"flex",alignItems:"flex-start",gap:14,boxShadow:"0 1px 8px rgba(0,0,0,0.05)"},children:[c.jsx("div",{style:{fontSize:28,lineHeight:1,flexShrink:0,marginTop:2},children:n.icon}),c.jsxs("div",{children:[c.jsxs("div",{style:{fontWeight:700,fontSize:14,color:"#3D2B1A",marginBottom:3},children:[c.jsx("span",{style:{background:"#C49A6C",color:"#FFF",borderRadius:10,fontSize:10,fontWeight:700,padding:"1px 7px",marginRight:7},children:r+1}),n.title]}),c.jsx("div",{style:{fontSize:13,color:"#7A5C3A",lineHeight:1.6},children:n.desc})]})]},r))}),c.jsx("div",{style:{textAlign:"center",marginTop:14,fontSize:12,color:"#BBA08A"},children:"ペットを登録すると、この案内は消えます"})]})}const cp=["#C49A6C","#EF4444","#3B82F6","#10B981","#8B5CF6"];function hI({pets:t,records:e}){const[n,r]=Q.useState(3),[i,s]=Q.useState(!1),o=(()=>{if(n===0)return"";const b=new Date;return b.setMonth(b.getMonth()-n),b.toISOString().slice(0,10)})(),l=t.map((b,re)=>{const _e=e.filter(q=>q.petId===b.id&&q.category==="体重"&&q.weight).filter(q=>n===0||q.date>=o).map(q=>({date:q.date,kg:parseFloat(q.weight)})).filter(q=>!isNaN(q.kg)).sort((q,zt)=>q.date.localeCompare(zt.date));return{pet:b,data:_e,color:cp[re%cp.length]}}).filter(b=>b.data.length>0);if(l.length===0)return c.jsxs("div",{style:{textAlign:"center",padding:"40px 0",color:"#9A7A5C"},children:[c.jsx("div",{style:{fontSize:40,marginBottom:12},children:"⚖️"}),c.jsx("div",{children:"体重記録がありません"}),c.jsx("div",{style:{fontSize:12,marginTop:8},children:"各ペットの「体重」カテゴリで記録を追加してください"})]});const a=l.flatMap(b=>b.data.map(re=>re.date)).sort(),u=l.flatMap(b=>b.data.map(re=>re.kg)),f=a[0],d=a[a.length-1],h=Math.min(...u),y=Math.max(...u),_=520,w=220,A=52,g=16,p=20,m=36,S=_-A-g,k=w-p-m,I=(y-h||.5)*.15,x=h-I,j=y+I,z=b=>{if(f===d)return A+S/2;const re=new Date(f).getTime(),_e=new Date(d).getTime(),q=(new Date(b).getTime()-re)/(_e-re);return A+q*S},ee=b=>p+(1-(b-x)/(j-x))*k,Re=Array.from({length:4},(b,re)=>x+(j-x)*(re/3));return c.jsxs("div",{children:[c.jsx("div",{style:{display:"flex",gap:6,marginBottom:16,justifyContent:"center"},children:[1,3,6,0].map(b=>c.jsx("button",{onClick:()=>r(b),style:{background:n===b?"#C49A6C":"#FFF0DC",border:"none",borderRadius:16,padding:"6px 14px",fontSize:13,fontWeight:600,color:n===b?"#FFF":"#7A5C3A",cursor:"pointer"},children:b===0?"全期間":`${b}ヶ月`},b))}),c.jsx("div",{style:{display:"flex",gap:12,flexWrap:"wrap",marginBottom:12,justifyContent:"center"},children:l.map(b=>c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"#3D2B1A"},children:[c.jsx("div",{style:{width:28,height:3,background:b.color,borderRadius:2}}),c.jsx("span",{style:{fontWeight:600},children:b.pet.name}),b.data.length>0&&c.jsxs("span",{style:{color:"#9A7A5C",fontSize:12},children:["(",b.data[b.data.length-1].kg.toFixed(2),"kg)"]})]},b.pet.id))}),c.jsxs("svg",{viewBox:`0 0 ${_} ${w}`,style:{width:"100%",height:"auto",overflow:"visible"},children:[Re.map((b,re)=>c.jsxs("g",{children:[c.jsx("line",{x1:A,y1:ee(b),x2:A+S,y2:ee(b),stroke:"#F0E8DC",strokeWidth:"1"}),c.jsx("text",{x:A-6,y:ee(b)+4,textAnchor:"end",fontSize:"9",fill:"#9A7A5C",children:b.toFixed(2)})]},re)),c.jsx("line",{x1:A,y1:p,x2:A,y2:p+k,stroke:"#E8D5BC",strokeWidth:"1"}),c.jsx("line",{x1:A,y1:p+k,x2:A+S,y2:p+k,stroke:"#E8D5BC",strokeWidth:"1"}),l.map(b=>{if(b.data.length===0)return null;const re=b.data.map(_e=>`${z(_e.date)},${ee(_e.kg)}`).join(" ");return c.jsxs("g",{children:[c.jsx("polyline",{points:re,fill:"none",stroke:b.color,strokeWidth:"2.5",strokeLinejoin:"round",strokeLinecap:"round"}),b.data.map((_e,q)=>c.jsx("circle",{cx:z(_e.date),cy:ee(_e.kg),r:"4",fill:b.color,stroke:"#FFF",strokeWidth:"1.5"},q))]},b.pet.id)}),f&&c.jsxs(c.Fragment,{children:[c.jsx("text",{x:A,y:w-4,textAnchor:"start",fontSize:"9",fill:"#9A7A5C",children:f.slice(5)}),f!==d&&c.jsx("text",{x:A+S,y:w-4,textAnchor:"end",fontSize:"9",fill:"#9A7A5C",children:d.slice(5)})]})]}),t.filter(b=>!l.find(re=>re.pet.id===b.id)).length>0&&c.jsxs("div",{style:{fontSize:12,color:"#BBA08A",textAlign:"center",marginTop:8},children:["※ ",t.filter(b=>!l.find(re=>re.pet.id===b.id)).map(b=>b.name).join("・")," は体重記録なし"]}),l.length>0&&c.jsxs("button",{onClick:()=>s(b=>!b),style:{display:"flex",alignItems:"center",gap:6,marginTop:20,background:"none",border:"none",cursor:"pointer",color:"#C49A6C",fontWeight:700,fontSize:14,padding:"4px 0"},children:[c.jsx("span",{style:{fontSize:12,display:"inline-block",transform:i?"rotate(90deg)":"rotate(0deg)",transition:"transform 0.2s"},children:"▶"}),"📋 リスト"]}),i&&l.map(b=>{const re=b.data.slice().reverse();return c.jsxs("div",{style:{marginTop:14},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:6},children:[c.jsx("div",{style:{width:14,height:14,borderRadius:"50%",background:b.color}}),c.jsx("span",{style:{fontWeight:700,fontSize:14,color:"#3D2B1A"},children:b.pet.name}),c.jsxs("span",{style:{fontSize:12,color:"#9A7A5C"},children:[re.length,"件"]})]}),c.jsxs("div",{style:{border:"1px solid #E8D5BC",borderRadius:10,overflow:"hidden"},children:[c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto auto",background:"#FDF6EE",padding:"6px 12px",fontSize:11,fontWeight:700,color:"#7A5C3A",gap:8},children:[c.jsx("span",{children:"日付"}),c.jsx("span",{style:{textAlign:"right",minWidth:70},children:"体重"}),c.jsx("span",{style:{textAlign:"right",minWidth:56},children:"前回比"})]}),re.map((_e,q,zt)=>{const N=zt[q+1],O=N?_e.kg-N.kg:null;return c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto auto",padding:"8px 12px",fontSize:13,gap:8,borderTop:"1px solid #F0E8DC",background:q%2===0?"#FFF":"#FFFBF7",alignItems:"center"},children:[c.jsx("span",{style:{color:"#5C3A1E"},children:_e.date}),c.jsxs("span",{style:{fontWeight:700,color:"#3D2B1A",textAlign:"right",minWidth:70},children:[_e.kg.toFixed(2)," kg"]}),c.jsx("span",{style:{fontSize:11,textAlign:"right",minWidth:56,fontWeight:600,color:O===null?"#BBA08A":O>0?"#EF4444":O<0?"#3B82F6":"#BBA08A"},children:O===null?"—":O>0?`▲${O.toFixed(2)}`:O<0?`▼${Math.abs(O).toFixed(2)}`:"±0.00"})]},_e.date)})]})]},b.pet.id)})]})}function fI({records:t,onDayClick:e}){const n=new Date,[r,i]=Q.useState(n.getFullYear()),[s,o]=Q.useState(n.getMonth()),l=new Date(r,s,1).getDay(),a=new Date(r,s+1,0).getDate(),u={};t.forEach(p=>{u[p.date]||(u[p.date]=[]),u[p.date].push(p)});const f=`${r}-${String(s+1).padStart(2,"0")}`,d=n.toISOString().slice(0,10),h=()=>{s===0?(i(p=>p-1),o(11)):o(p=>p-1)},y=()=>{s===11?(i(p=>p+1),o(0)):o(p=>p+1)},_=()=>{const p=t.map(S=>S.date).filter(Boolean).sort();if(p.length===0)return;const m=p[0];i(parseInt(m.slice(0,4))),o(parseInt(m.slice(5,7))-1)},w=()=>{i(n.getFullYear()),o(n.getMonth())},A=r===n.getFullYear()&&s===n.getMonth(),g=["日","月","火","水","木","金","土"];return c.jsxs("div",{style:{background:"#FFF",borderRadius:16,padding:"16px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",marginBottom:80},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8},children:[c.jsx("button",{onClick:h,style:{background:"#FFF0DC",border:"none",borderRadius:10,fontSize:18,cursor:"pointer",color:"#C49A6C",padding:"8px 14px",fontWeight:700,lineHeight:1},children:"‹"}),c.jsx("div",{style:{textAlign:"center"},children:c.jsxs("div",{style:{fontWeight:700,fontSize:16,color:"#3D2B1A"},children:[r,"年 ",s+1,"月"]})}),c.jsx("button",{onClick:y,style:{background:"#FFF0DC",border:"none",borderRadius:10,fontSize:18,cursor:"pointer",color:"#C49A6C",padding:"8px 14px",fontWeight:700,lineHeight:1},children:"›"})]}),c.jsxs("div",{style:{display:"flex",gap:8,marginBottom:12,justifyContent:"center"},children:[c.jsx("button",{onClick:_,style:{background:"none",border:"1px solid #E8D5BC",borderRadius:20,padding:"4px 12px",fontSize:12,color:"#7A5C3A",cursor:"pointer"},children:"⏮ 最古の記録"}),!A&&c.jsx("button",{onClick:w,style:{background:"#C49A6C",border:"none",borderRadius:20,padding:"4px 12px",fontSize:12,color:"#FFF",cursor:"pointer",fontWeight:600},children:"今月へ戻る"})]}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,marginBottom:4},children:g.map((p,m)=>c.jsx("div",{style:{textAlign:"center",fontSize:11,fontWeight:700,color:m===0?"#EF4444":m===6?"#3B82F6":"#9A7A5C",padding:"4px 0"},children:p},p))}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2},children:[Array.from({length:l}).map((p,m)=>c.jsx("div",{},`e${m}`)),Array.from({length:a}).map((p,m)=>{const S=m+1,k=`${f}-${String(S).padStart(2,"0")}`,P=u[k]||[],I=k===d,x=(l+m)%7,j=P.length>0,z=[...new Set(P.map(ee=>ee.category))].slice(0,3);return c.jsxs("div",{onClick:()=>e(P),style:{borderRadius:10,padding:"6px 2px 4px",textAlign:"center",cursor:j?"pointer":"default",background:I?"#C49A6C22":j?"#FFF7EE":"transparent",border:I?"2px solid #C49A6C":j?"1px solid #F0D9B0":"1px solid transparent",minHeight:52,display:"flex",flexDirection:"column",alignItems:"center",gap:2,transition:"background .15s"},children:[c.jsx("div",{style:{fontSize:13,fontWeight:I?700:400,color:x===0?"#EF4444":x===6?"#3B82F6":"#3D2B1A"},children:S}),c.jsx("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:1},children:z.map(ee=>c.jsx("span",{style:{fontSize:11,background:Gn[ee]+"33",borderRadius:4,padding:"0 2px",lineHeight:1.4},children:ut[ee]},ee))}),P.length>0&&c.jsxs("div",{style:{fontSize:9,color:"#C49A6C",fontWeight:700},children:[P.length,"件"]})]},S)})]}),c.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginTop:14,paddingTop:12,borderTop:"1px solid #F0E8DC"},children:Object.keys(ut).map(p=>c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:3,fontSize:11,color:"#7A5C3A"},children:[c.jsx("span",{children:ut[p]}),p]},p))})]})}function Ud({text:t,style:e}){const n=/(https?:\/\/[^\s]+)/g,r=t.split(n);return c.jsx("span",{style:e,children:r.map((i,s)=>n.test(i)?c.jsx("a",{href:i,target:"_blank",rel:"noopener noreferrer",style:{color:"#C49A6C",textDecoration:"underline",wordBreak:"break-all"},onClick:o=>o.stopPropagation(),children:i},s):i)})}function pI({pet:t,onSave:e}){const[n,r]=Q.useState(!1),[i,s]=Q.useState({vet:t.vet||"",vetPhone:t.vetPhone||"",vetAddress:t.vetAddress||"",vetHours:t.vetHours||"",vetNote:t.vetNote||""}),o=t.vet||t.vetPhone||t.vetAddress;function l(){e(i),r(!1)}const a=t.vetPhone?"tel:"+t.vetPhone.replace(/[^\d+]/g,""):"";return c.jsxs(c.Fragment,{children:[c.jsxs("div",{style:{...R.infoCard,cursor:"pointer"},onClick:()=>{s({vet:t.vet||"",vetPhone:t.vetPhone||"",vetAddress:t.vetAddress||"",vetHours:t.vetHours||"",vetNote:t.vetNote||""}),r(!0)},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[c.jsx("div",{style:R.infoLabel,children:"かかりつけ病院"}),c.jsx("span",{style:{fontSize:11,color:"#C49A6C"},children:"✏️ 編集"})]}),c.jsx("div",{style:{fontSize:14,fontWeight:600,color:"#3D2B1A",marginTop:4},children:t.vet||"—"}),t.vetPhone&&c.jsxs("div",{style:{fontSize:12,color:"#7A5C3A",marginTop:3},children:["📞"," ",c.jsx("a",{href:a,onClick:u=>u.stopPropagation(),style:{color:"#3B82F6",textDecoration:"none",fontWeight:600},children:t.vetPhone})]}),t.vetAddress&&c.jsxs("div",{style:{fontSize:11,color:"#9A7A5C",marginTop:2},children:["📍"," ",c.jsx("a",{href:`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t.vetAddress)}`,target:"_blank",rel:"noopener noreferrer",onClick:u=>u.stopPropagation(),style:{color:"#3B82F6",textDecoration:"none"},children:t.vetAddress})]}),t.vetHours&&c.jsxs("div",{style:{fontSize:11,color:"#9A7A5C",marginTop:2},children:["🕐 ",t.vetHours]}),t.vetNote&&c.jsxs("div",{style:{fontSize:11,color:"#9A7A5C",marginTop:2},children:["📝 ",c.jsx(Ud,{text:t.vetNote})]}),!o&&c.jsx("div",{style:{fontSize:12,color:"#BBA08A",marginTop:4},children:"タップして追加"})]}),n&&c.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:200,display:"flex",alignItems:"flex-end",justifyContent:"center"},onClick:()=>r(!1),children:c.jsxs("div",{style:{background:"#FDF6EE",borderRadius:"20px 20px 0 0",padding:24,width:"100%",maxWidth:600,maxHeight:"85vh",overflowY:"auto"},onClick:u=>u.stopPropagation(),children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20},children:[c.jsx("div",{style:{fontWeight:700,fontSize:17,color:"#3D2B1A"},children:"🏥 病院情報を編集"}),c.jsx("button",{onClick:()=>r(!1),style:{background:"none",border:"none",fontSize:20,cursor:"pointer",color:"#9A7A5C"},children:"✕"})]}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[{key:"vet",label:"病院名",placeholder:"例: アシスト動物病院",icon:"🏥"},{key:"vetPhone",label:"電話番号",placeholder:"例: 03-1234-5678",icon:"📞"},{key:"vetAddress",label:"住所",placeholder:"例: 東京都渋谷区...",icon:"📍"},{key:"vetHours",label:"診療時間",placeholder:"例: 9:00〜19:00 (水休)",icon:"🕐"},{key:"vetNote",label:"メモ",placeholder:"担当医の名前など",icon:"📝"}].map(({key:u,label:f,placeholder:d,icon:h})=>c.jsxs("div",{children:[c.jsxs("label",{style:{display:"block",fontSize:13,fontWeight:600,color:"#5C3A1E",marginBottom:5},children:[h," ",f]}),u==="vetNote"?c.jsx("textarea",{style:{...R.input,height:72,resize:"vertical"},value:i[u],onChange:y=>s(_=>({..._,[u]:y.target.value})),placeholder:d}):c.jsx("input",{style:R.input,value:i[u],onChange:y=>s(_=>({..._,[u]:y.target.value})),placeholder:d})]},u))}),c.jsx("button",{style:{...R.primaryBtn,marginTop:20},onClick:l,children:"✅ 保存する"})]})})]})}function gI({records:t,petId:e}){const[n,r]=Q.useState(!1),[i,s]=Q.useState(3),[o,l]=Q.useState(!1),a=(()=>{if(i===0)return"";const g=new Date;return g.setMonth(g.getMonth()-i),g.toISOString().slice(0,10)})(),u=t.filter(g=>g.petId===e&&g.category==="体重"&&g.weight).map(g=>({date:g.date,kg:parseFloat(g.weight)})).filter(g=>!isNaN(g.kg)).sort((g,p)=>g.date.localeCompare(p.date)),f=u.filter(g=>i===0||g.date>=a),d=f.length>0?f:u;if(u.length===0)return c.jsxs("div",{style:R.infoCard,children:[c.jsx("div",{style:R.infoLabel,children:"体重（最新）"}),c.jsx("div",{style:R.infoValue,children:"—"})]});const h=u[u.length-1],y=d.reduce((g,p)=>g.kg>=p.kg?g:p),_=d.reduce((g,p)=>g.kg<=p.kg?g:p),w=()=>{const g=d.slice().reverse().map((m,S,k)=>{const P=k[S+1],I=P?m.kg-P.kg:null,x=I===null?"—":I>0?`+${I.toFixed(2)}`:I.toFixed(2);return`<tr>
        <td>${m.date}</td>
        <td style="text-align:right;font-weight:600;">${m.kg.toFixed(2)} kg</td>
        <td style="text-align:right;color:${I===null?"#666":I>0?"#EF4444":I<0?"#3B82F6":"#666"};">${x}</td>
      </tr>`}).join(""),p=window.open("","_blank");p&&(p.document.write(`<html><head><meta charset="utf-8"><title>体重記録</title>
      <style>body{font-family:'Hiragino Sans',sans-serif;padding:24px;color:#3D2B1A;}
      table{width:100%;border-collapse:collapse;font-size:14px;}
      th{background:#FDF6EE;color:#7A5C3A;padding:8px 12px;border:1px solid #E8D5BC;text-align:left;}
      td{padding:8px 12px;border:1px solid #E8D5BC;}tr:nth-child(even){background:#FFFBF7;}
      @media print{button{display:none;}}</style></head>
      <body><h2>⚖️ 体重記録</h2>
      <p style="color:#9A7A5C;font-size:13px;">${d.length}件</p>
      <table><thead><tr><th>日付</th><th style="text-align:right;">体重</th><th style="text-align:right;">前回比</th></tr></thead>
      <tbody>${g}</tbody></table>
      <p style="margin-top:16px;font-size:12px;color:#BBA08A;">印刷日: ${new Date().toLocaleDateString("ja-JP")}</p>
      <button onclick="window.print()" style="margin-top:12px;padding:10px 24px;background:#C49A6C;color:#FFF;border:none;border-radius:8px;font-size:15px;cursor:pointer;">🖨️ 印刷する</button>
      </body></html>`),p.document.close())},A={3:"3ヶ月",6:"6ヶ月",12:"1年",24:"2年",0:"全期間"};return c.jsxs(c.Fragment,{children:[c.jsxs("div",{style:R.infoCard,children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[c.jsx("div",{style:R.infoLabel,children:"体重（最新）"}),c.jsxs("div",{style:{display:"flex",gap:8},children:[c.jsx("button",{onClick:()=>r(!0),style:{background:"none",border:"none",cursor:"pointer",fontSize:11,color:"#C49A6C",fontWeight:600,padding:0},children:"📈 グラフ"}),c.jsx("button",{onClick:()=>l(!0),style:{background:"none",border:"none",cursor:"pointer",fontSize:11,color:"#C49A6C",fontWeight:600,padding:0},children:"📋 リスト"})]})]}),c.jsxs("div",{style:{fontSize:18,fontWeight:700,color:"#3D2B1A",margin:"4px 0"},children:[h.kg.toFixed(2)," kg"]}),c.jsxs("div",{style:{fontSize:11,color:"#9A7A5C",marginTop:2},children:["最終: ",h.date]}),c.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[c.jsxs("div",{style:{flex:1,background:"#FFF0F0",borderRadius:8,padding:"5px 8px"},children:[c.jsx("div",{style:{fontSize:10,color:"#EF4444",fontWeight:700},children:"▲ 最高"}),c.jsxs("div",{style:{fontSize:13,fontWeight:700,color:"#3D2B1A"},children:[y.kg.toFixed(2)," kg"]}),c.jsx("div",{style:{fontSize:10,color:"#9A7A5C"},children:y.date})]}),c.jsxs("div",{style:{flex:1,background:"#F0F8FF",borderRadius:8,padding:"5px 8px"},children:[c.jsx("div",{style:{fontSize:10,color:"#3B82F6",fontWeight:700},children:"▼ 最低"}),c.jsxs("div",{style:{fontSize:13,fontWeight:700,color:"#3D2B1A"},children:[_.kg.toFixed(2)," kg"]}),c.jsx("div",{style:{fontSize:10,color:"#9A7A5C"},children:_.date})]})]})]}),n&&c.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",padding:16},onClick:()=>r(!1),children:c.jsxs("div",{style:{background:"#FFF",borderRadius:20,padding:24,width:"100%",maxWidth:600,maxHeight:"85vh",overflow:"auto"},onClick:g=>g.stopPropagation(),children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16},children:[c.jsx("div",{style:{fontWeight:700,fontSize:16,color:"#3D2B1A"},children:"📈 体重グラフ"}),c.jsx("button",{onClick:()=>r(!1),style:{background:"none",border:"none",fontSize:20,cursor:"pointer",color:"#9A7A5C"},children:"✕"})]}),c.jsx("div",{style:{display:"flex",gap:6,marginBottom:16,flexWrap:"wrap",justifyContent:"center"},children:[3,6,12,24,0].map(g=>c.jsx("button",{onClick:()=>s(g),style:{background:i===g?"#C49A6C":"#FFF0DC",border:"none",borderRadius:16,padding:"6px 14px",fontSize:12,fontWeight:600,color:i===g?"#FFF":"#7A5C3A",cursor:"pointer"},children:A[g]},g))}),d.length<2?c.jsx("div",{style:{textAlign:"center",padding:"32px 0",color:"#9A7A5C"},children:"データが2件以上になるとグラフが表示されます"}):c.jsxs(c.Fragment,{children:[c.jsx(mI,{data:d}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:8,fontSize:11,color:"#9A7A5C"},children:[c.jsx("span",{children:d[0].date}),c.jsxs("span",{children:[d.length,"件"]}),c.jsx("span",{children:d[d.length-1].date})]})]})]})}),o&&c.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",padding:16},onClick:()=>l(!1),children:c.jsxs("div",{style:{background:"#FFF",borderRadius:20,padding:24,width:"100%",maxWidth:600,maxHeight:"85vh",overflow:"auto"},onClick:g=>g.stopPropagation(),children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16},children:[c.jsx("div",{style:{fontWeight:700,fontSize:16,color:"#3D2B1A"},children:"📋 体重リスト"}),c.jsx("button",{onClick:()=>l(!1),style:{background:"none",border:"none",fontSize:20,cursor:"pointer",color:"#9A7A5C"},children:"✕"})]}),c.jsx("div",{style:{display:"flex",gap:6,marginBottom:16,flexWrap:"wrap",justifyContent:"center"},children:[3,6,12,24,0].map(g=>c.jsx("button",{onClick:()=>s(g),style:{background:i===g?"#C49A6C":"#FFF0DC",border:"none",borderRadius:16,padding:"6px 14px",fontSize:12,fontWeight:600,color:i===g?"#FFF":"#7A5C3A",cursor:"pointer"},children:A[g]},g))}),c.jsxs("div",{style:{border:"1px solid #E8D5BC",borderRadius:10,overflow:"hidden",marginBottom:16},children:[c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto auto",background:"#FDF6EE",padding:"7px 14px",fontSize:12,fontWeight:700,color:"#7A5C3A",gap:8},children:[c.jsx("span",{children:"日付"}),c.jsx("span",{style:{textAlign:"right",minWidth:70},children:"体重"}),c.jsx("span",{style:{textAlign:"right",minWidth:56},children:"前回比"})]}),d.slice().reverse().map((g,p,m)=>{const S=m[p+1],k=S?g.kg-S.kg:null;return c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr auto auto",padding:"9px 14px",fontSize:13,gap:8,borderTop:"1px solid #F0E8DC",background:p%2===0?"#FFF":"#FFFBF7",alignItems:"center"},children:[c.jsx("span",{style:{color:"#5C3A1E"},children:g.date}),c.jsxs("span",{style:{fontWeight:700,color:"#3D2B1A",textAlign:"right",minWidth:70},children:[g.kg.toFixed(2)," kg"]}),c.jsx("span",{style:{fontSize:12,textAlign:"right",minWidth:56,fontWeight:600,color:k===null?"#BBA08A":k>0?"#EF4444":k<0?"#3B82F6":"#BBA08A"},children:k===null?"—":k>0?`▲${k.toFixed(2)}`:k<0?`▼${Math.abs(k).toFixed(2)}`:"±0.00"})]},g.date)})]}),c.jsx("button",{onClick:w,style:{width:"100%",background:"#3D2B1A",color:"#FFF",border:"none",borderRadius:12,padding:"12px",fontSize:14,fontWeight:700,cursor:"pointer"},children:"🖨️ 印刷用ページを開く"})]})})]})}function mI({data:t}){const u=t.map(x=>x.kg),f=Math.min(...u),d=Math.max(...u),y=(d-f||.1)*.15,_=f-y,w=d+y,A=x=>48+x/(t.length-1)*456,g=x=>16+(1-(x-_)/(w-_))*152,p=t.map((x,j)=>`${A(j)},${g(x.kg)}`).join(" "),m=`M${A(0)},${g(t[0].kg)} `+t.map((x,j)=>`L${A(j)},${g(x.kg)}`).join(" ")+` L${A(t.length-1)},168 L${A(0)},168 Z`,S=Array.from({length:4},(x,j)=>_+(w-_)*(j/3)),k=[0,Math.floor((t.length-1)/2),t.length-1].filter((x,j,z)=>z.indexOf(x)===j),P=t.indexOf(t.reduce((x,j)=>x.kg>=j.kg?x:j)),I=t.indexOf(t.reduce((x,j)=>x.kg<=j.kg?x:j));return c.jsxs("svg",{viewBox:"0 0 520 200",style:{width:"100%",height:"auto",overflow:"visible"},children:[S.map((x,j)=>c.jsxs("g",{children:[c.jsx("line",{x1:48,y1:g(x),x2:504,y2:g(x),stroke:"#F0E8DC",strokeWidth:"1"}),c.jsx("text",{x:42,y:g(x)+4,textAnchor:"end",fontSize:"9",fill:"#9A7A5C",children:x.toFixed(2)})]},j)),c.jsx("path",{d:m,fill:"#C49A6C22"}),c.jsx("polyline",{points:p,fill:"none",stroke:"#C49A6C",strokeWidth:"2",strokeLinejoin:"round"}),c.jsx("circle",{cx:A(P),cy:g(t[P].kg),r:"5",fill:"#EF4444"}),c.jsxs("text",{x:A(P),y:g(t[P].kg)-8,textAnchor:"middle",fontSize:"9",fill:"#EF4444",fontWeight:"bold",children:["▲",t[P].kg.toFixed(2)]}),c.jsx("circle",{cx:A(I),cy:g(t[I].kg),r:"5",fill:"#3B82F6"}),c.jsxs("text",{x:A(I),y:g(t[I].kg)+16,textAnchor:"middle",fontSize:"9",fill:"#3B82F6",fontWeight:"bold",children:["▼",t[I].kg.toFixed(2)]}),c.jsx("circle",{cx:A(t.length-1),cy:g(t[t.length-1].kg),r:"4",fill:"#C49A6C",stroke:"#FFF",strokeWidth:"2"}),k.map(x=>c.jsx("text",{x:A(x),y:196,textAnchor:"middle",fontSize:"9",fill:"#9A7A5C",children:t[x].date.slice(5)},x)),c.jsx("line",{x1:48,y1:16,x2:48,y2:168,stroke:"#E8D5BC",strokeWidth:"1"}),c.jsx("line",{x1:48,y1:168,x2:504,y2:168,stroke:"#E8D5BC",strokeWidth:"1"})]})}function Cr({children:t}){return c.jsx("div",{style:{minHeight:"100vh",background:"#FDF6EE",fontFamily:"system-ui, 'Hiragino Sans', sans-serif"},children:c.jsx("div",{style:{maxWidth:680,margin:"0 auto",padding:"20px 16px 80px"},children:t})})}function La({onClick:t}){return c.jsx("button",{style:R.backBtn,onClick:t,children:"← 戻る"})}function dp({onClick:t,title:e,danger:n,children:r}){return c.jsx("button",{title:e,style:{background:n?"#FEE2E2":"#FFF0DC",border:"none",borderRadius:8,padding:"8px 12px",cursor:"pointer",fontSize:18},onClick:t,children:r})}function de({label:t,children:e}){return c.jsxs("div",{style:{marginBottom:16},children:[c.jsx("label",{style:{display:"block",fontWeight:600,color:"#5C3A1E",marginBottom:6,fontSize:14},children:t}),e]})}function hp({record:t,onDelete:e,onEdit:n,expanded:r}){const[i,s]=Q.useState(!!r);return c.jsxs("div",{style:R.recordCard,onClick:()=>s(o=>!o),children:[c.jsxs("div",{style:R.recordHeader,children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[c.jsx("span",{style:{...R.catBadge,background:Gn[t.category]},children:ut[t.category]}),c.jsxs("div",{children:[c.jsx("div",{style:{fontWeight:600,color:"#3D2B1A"},children:t.title}),c.jsxs("div",{style:{fontSize:12,color:"#9A7A5C"},children:[t.date,t.category&&` · ${t.category}`]})]})]}),c.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center"},children:[t.nextDate&&c.jsxs("span",{style:R.nextDateBadge,children:["📅 ",t.nextDate]}),c.jsx("button",{style:{...R.deleteBtn,opacity:.7},onClick:o=>{o.stopPropagation(),n(t)},children:"✏️"}),c.jsx("button",{style:R.deleteBtn,onClick:o=>{o.stopPropagation(),e(t.id)},children:"🗑️"})]})]}),i&&(t.description||t.weight)&&c.jsxs("div",{style:R.recordBody,children:[t.weight&&c.jsxs("div",{style:{marginBottom:4},children:["⚖️ ",t.weight," kg"]}),t.description&&c.jsx("div",{style:{color:"#5C3A1E",whiteSpace:"pre-wrap"},children:c.jsx(Ud,{text:t.description})})]})]})}function yI({icon:t,msg:e}){return c.jsxs("div",{style:{textAlign:"center",padding:"48px 20px",color:"#9A7A5C"},children:[c.jsx("div",{style:{fontSize:48,marginBottom:12},children:t}),c.jsx("div",{children:e})]})}function Sr({message:t}){return t?c.jsx("div",{style:R.toast,children:t}):null}const R={petGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(160px, 1fr))",gap:16},petCard:{background:"#FFF",borderRadius:16,border:"none",padding:"20px 16px",cursor:"pointer",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",transition:"transform .15s",textAlign:"center",width:"100%"},petCardIcon:{borderRadius:"50%",width:72,height:72,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px"},petCardName:{fontWeight:700,fontSize:16,color:"#3D2B1A"},petCardSub:{fontSize:12,color:"#9A7A5C",marginTop:2},petCardAge:{fontSize:12,color:"#C49A6C",marginTop:4},petCardRecords:{fontSize:11,color:"#BBA08A",marginTop:6},addPetCard:{background:"#FFF7EE",borderRadius:16,border:"2px dashed #C49A6C",padding:"20px 16px",cursor:"pointer",textAlign:"center",minHeight:140,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},petBanner:{borderRadius:16,padding:"20px 24px",display:"flex",alignItems:"center",gap:16,marginBottom:20},infoGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:20},infoCard:{background:"#FFF",borderRadius:12,padding:"12px 16px"},infoLabel:{fontSize:11,color:"#9A7A5C",fontWeight:600,textTransform:"uppercase",marginBottom:4},infoValue:{fontSize:14,color:"#3D2B1A",fontWeight:500},notesBox:{background:"#FFFBF0",border:"1px solid #F0D9B0",borderRadius:12,padding:"12px 16px",marginBottom:20,color:"#5C3A1E",fontSize:14},sectionHeader:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12,fontWeight:700,color:"#3D2B1A"},linkBtn:{background:"none",border:"none",color:"#C49A6C",cursor:"pointer",fontSize:14,fontWeight:600},categoryRow:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:24},catChip:{background:"#FFF",border:"none",borderRadius:10,padding:"8px 12px",display:"flex",flexDirection:"column",alignItems:"center",gap:4,cursor:"pointer",boxShadow:"0 1px 6px rgba(0,0,0,0.06)",minWidth:60,fontSize:18},catCount:{fontSize:11,color:"#FFF",borderRadius:10,padding:"1px 7px",fontWeight:700},recordCard:{background:"#FFF",borderRadius:14,marginBottom:10,overflow:"hidden",boxShadow:"0 1px 8px rgba(0,0,0,0.05)",cursor:"pointer"},recordHeader:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 16px"},catBadge:{width:36,height:36,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0},nextDateBadge:{fontSize:11,background:"#FFF0DC",color:"#7A5C3A",borderRadius:8,padding:"3px 8px"},deleteBtn:{background:"none",border:"none",cursor:"pointer",fontSize:16,opacity:.6,padding:"4px 6px"},recordBody:{padding:"0 16px 14px",fontSize:14,borderTop:"1px solid #FDF0E4",marginTop:4,paddingTop:12},fab:{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)"},fabBtn:{background:"#C49A6C",color:"#FFF",border:"none",borderRadius:30,padding:"14px 32px",fontSize:16,fontWeight:700,cursor:"pointer",boxShadow:"0 4px 20px rgba(0,0,0,0.2)"},fabBtnBack:{background:"#FFF",color:"#3D2B1A",border:"none",borderRadius:30,padding:"14px 28px",fontSize:16,fontWeight:700,cursor:"pointer",boxShadow:"0 4px 20px rgba(0,0,0,0.2)"},form:{background:"#FFF",borderRadius:16,padding:"24px 20px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)"},formTitle:{textAlign:"center",color:"#3D2B1A",marginBottom:24},input:{width:"100%",padding:"10px 14px",borderRadius:10,border:"1.5px solid #E8D5BC",background:"#FFFBF7",fontSize:15,color:"#3D2B1A",boxSizing:"border-box"},catSelector:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8},catOption:{border:"2px solid transparent",borderRadius:12,padding:"10px 8px",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:4,fontSize:20,transition:"all .15s"},filterChip:{border:"none",borderRadius:20,padding:"6px 14px",cursor:"pointer",fontSize:13,fontWeight:600},primaryBtn:{background:"#C49A6C",color:"#FFF",border:"none",borderRadius:12,padding:"14px",fontSize:16,fontWeight:700,cursor:"pointer",marginTop:8},backBtn:{background:"none",border:"none",color:"#C49A6C",cursor:"pointer",fontSize:15,fontWeight:600,marginBottom:16,padding:0},toast:{position:"fixed",bottom:80,left:"50%",transform:"translateX(-50%)",background:"#3D2B1A",color:"#FFF",borderRadius:24,padding:"12px 24px",fontSize:14,fontWeight:600,zIndex:1e3,boxShadow:"0 4px 20px rgba(0,0,0,0.3)",whiteSpace:"nowrap"}};Ma.createRoot(document.getElementById("root")).render(c.jsx(rv.StrictMode,{children:c.jsx(cI,{})}));

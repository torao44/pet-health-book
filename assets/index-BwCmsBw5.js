(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function zy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var dp={exports:{}},_l={},hp={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cs=Symbol.for("react.element"),Uy=Symbol.for("react.portal"),By=Symbol.for("react.fragment"),Wy=Symbol.for("react.strict_mode"),Hy=Symbol.for("react.profiler"),$y=Symbol.for("react.provider"),Vy=Symbol.for("react.context"),Gy=Symbol.for("react.forward_ref"),Ky=Symbol.for("react.suspense"),Qy=Symbol.for("react.memo"),Yy=Symbol.for("react.lazy"),Bd=Symbol.iterator;function qy(t){return t===null||typeof t!="object"?null:(t=Bd&&t[Bd]||t["@@iterator"],typeof t=="function"?t:null)}var fp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pp=Object.assign,gp={};function ii(t,e,n){this.props=t,this.context=e,this.refs=gp,this.updater=n||fp}ii.prototype.isReactComponent={};ii.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ii.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function mp(){}mp.prototype=ii.prototype;function Qu(t,e,n){this.props=t,this.context=e,this.refs=gp,this.updater=n||fp}var Yu=Qu.prototype=new mp;Yu.constructor=Qu;pp(Yu,ii.prototype);Yu.isPureReactComponent=!0;var Wd=Array.isArray,_p=Object.prototype.hasOwnProperty,qu={current:null},yp={key:!0,ref:!0,__self:!0,__source:!0};function vp(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)_p.call(e,r)&&!yp.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Cs,type:t,key:s,ref:o,props:i,_owner:qu.current}}function Xy(t,e){return{$$typeof:Cs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Xu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Cs}function Jy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Hd=/\/+/g;function Gl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Jy(""+t.key):e.toString(36)}function oo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Cs:case Uy:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Gl(o,0):r,Wd(i)?(n="",t!=null&&(n=t.replace(Hd,"$&/")+"/"),oo(i,e,n,"",function(u){return u})):i!=null&&(Xu(i)&&(i=Xy(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Hd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Wd(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Gl(s,l);o+=oo(s,e,n,a,i)}else if(a=qy(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Gl(s,l++),o+=oo(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function zs(t,e,n){if(t==null)return t;var r=[],i=0;return oo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Zy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ue={current:null},lo={transition:null},ev={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:lo,ReactCurrentOwner:qu};function wp(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:zs,forEach:function(t,e,n){zs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return zs(t,function(){e++}),e},toArray:function(t){return zs(t,function(e){return e})||[]},only:function(t){if(!Xu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};V.Component=ii;V.Fragment=By;V.Profiler=Hy;V.PureComponent=Qu;V.StrictMode=Wy;V.Suspense=Ky;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ev;V.act=wp;V.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=pp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=qu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)_p.call(e,a)&&!yp.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Cs,type:t.type,key:i,ref:s,props:r,_owner:o}};V.createContext=function(t){return t={$$typeof:Vy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$y,_context:t},t.Consumer=t};V.createElement=vp;V.createFactory=function(t){var e=vp.bind(null,t);return e.type=t,e};V.createRef=function(){return{current:null}};V.forwardRef=function(t){return{$$typeof:Gy,render:t}};V.isValidElement=Xu;V.lazy=function(t){return{$$typeof:Yy,_payload:{_status:-1,_result:t},_init:Zy}};V.memo=function(t,e){return{$$typeof:Qy,type:t,compare:e===void 0?null:e}};V.startTransition=function(t){var e=lo.transition;lo.transition={};try{t()}finally{lo.transition=e}};V.unstable_act=wp;V.useCallback=function(t,e){return Ue.current.useCallback(t,e)};V.useContext=function(t){return Ue.current.useContext(t)};V.useDebugValue=function(){};V.useDeferredValue=function(t){return Ue.current.useDeferredValue(t)};V.useEffect=function(t,e){return Ue.current.useEffect(t,e)};V.useId=function(){return Ue.current.useId()};V.useImperativeHandle=function(t,e,n){return Ue.current.useImperativeHandle(t,e,n)};V.useInsertionEffect=function(t,e){return Ue.current.useInsertionEffect(t,e)};V.useLayoutEffect=function(t,e){return Ue.current.useLayoutEffect(t,e)};V.useMemo=function(t,e){return Ue.current.useMemo(t,e)};V.useReducer=function(t,e,n){return Ue.current.useReducer(t,e,n)};V.useRef=function(t){return Ue.current.useRef(t)};V.useState=function(t){return Ue.current.useState(t)};V.useSyncExternalStore=function(t,e,n){return Ue.current.useSyncExternalStore(t,e,n)};V.useTransition=function(){return Ue.current.useTransition()};V.version="18.3.1";hp.exports=V;var Q=hp.exports;const tv=zy(Q);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv=Q,rv=Symbol.for("react.element"),iv=Symbol.for("react.fragment"),sv=Object.prototype.hasOwnProperty,ov=nv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lv={key:!0,ref:!0,__self:!0,__source:!0};function Cp(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)sv.call(e,r)&&!lv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:rv,type:t,key:s,ref:o,props:i,_owner:ov.current}}_l.Fragment=iv;_l.jsx=Cp;_l.jsxs=Cp;dp.exports=_l;var c=dp.exports,Oa={},Sp={exports:{}},tt={},Ep={exports:{}},xp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,z){var B=D.length;D.push(z);e:for(;0<B;){var le=B-1>>>1,Z=D[le];if(0<i(Z,z))D[le]=z,D[B]=Z,B=le;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var z=D[0],B=D.pop();if(B!==z){D[0]=B;e:for(var le=0,Z=D.length,Pe=Z>>>1;le<Pe;){var It=2*(le+1)-1,fr=D[It],U=It+1,tn=D[U];if(0>i(fr,B))U<Z&&0>i(tn,fr)?(D[le]=tn,D[U]=B,le=U):(D[le]=fr,D[It]=B,le=It);else if(U<Z&&0>i(tn,B))D[le]=tn,D[U]=B,le=U;else break e}}return z}function i(D,z){var B=D.sortIndex-z.sortIndex;return B!==0?B:D.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],f=1,h=null,d=3,y=!1,g=!1,C=!1,P=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(D){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=D)r(u),z.sortIndex=z.expirationTime,e(a,z);else break;z=n(u)}}function S(D){if(C=!1,_(D),!g)if(n(a)!==null)g=!0,dt(A);else{var z=n(u);z!==null&&pi(S,z.startTime-D)}}function A(D,z){g=!1,C&&(C=!1,m(x),x=-1),y=!0;var B=d;try{for(_(z),h=n(a);h!==null&&(!(h.expirationTime>z)||D&&!N());){var le=h.callback;if(typeof le=="function"){h.callback=null,d=h.priorityLevel;var Z=le(h.expirationTime<=z);z=t.unstable_now(),typeof Z=="function"?h.callback=Z:h===n(a)&&r(a),_(z)}else r(a);h=n(a)}if(h!==null)var Pe=!0;else{var It=n(u);It!==null&&pi(S,It.startTime-z),Pe=!1}return Pe}finally{h=null,d=B,y=!1}}var T=!1,R=null,x=-1,L=5,j=-1;function N(){return!(t.unstable_now()-j<L)}function G(){if(R!==null){var D=t.unstable_now();j=D;var z=!0;try{z=R(!0,D)}finally{z?we():(T=!1,R=null)}}else T=!1}var we;if(typeof p=="function")we=function(){p(G)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,Mn=me.port2;me.port1.onmessage=G,we=function(){Mn.postMessage(null)}}else we=function(){P(G,0)};function dt(D){R=D,T||(T=!0,we())}function pi(D,z){x=P(function(){D(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){g||y||(g=!0,dt(A))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var z=3;break;default:z=d}var B=d;d=z;try{return D()}finally{d=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,z){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var B=d;d=D;try{return z()}finally{d=B}},t.unstable_scheduleCallback=function(D,z,B){var le=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?le+B:le):B=le,D){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=B+Z,D={id:f++,callback:z,priorityLevel:D,startTime:B,expirationTime:Z,sortIndex:-1},B>le?(D.sortIndex=B,e(u,D),n(a)===null&&D===n(u)&&(C?(m(x),x=-1):C=!0,pi(S,B-le))):(D.sortIndex=Z,e(a,D),g||y||(g=!0,dt(A))),D},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(D){var z=d;return function(){var B=d;d=z;try{return D.apply(this,arguments)}finally{d=B}}}})(xp);Ep.exports=xp;var av=Ep.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv=Q,et=av;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var kp=new Set,Yi={};function cr(t,e){Vr(t,e),Vr(t+"Capture",e)}function Vr(t,e){for(Yi[t]=e,t=0;t<e.length;t++)kp.add(e[t])}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),La=Object.prototype.hasOwnProperty,cv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$d={},Vd={};function dv(t){return La.call(Vd,t)?!0:La.call($d,t)?!1:cv.test(t)?Vd[t]=!0:($d[t]=!0,!1)}function hv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function fv(t,e,n,r){if(e===null||typeof e>"u"||hv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Be(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ae[t]=new Be(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ae[e]=new Be(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ae[t]=new Be(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ae[t]=new Be(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ae[t]=new Be(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ae[t]=new Be(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ae[t]=new Be(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ae[t]=new Be(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ae[t]=new Be(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ju=/[\-:]([a-z])/g;function Zu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ju,Zu);Ae[e]=new Be(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ju,Zu);Ae[e]=new Be(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ju,Zu);Ae[e]=new Be(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ae[t]=new Be(t,1,!1,t.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ae[t]=new Be(t,1,!1,t.toLowerCase(),null,!0,!0)});function ec(t,e,n,r){var i=Ae.hasOwnProperty(e)?Ae[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(fv(e,n,i,r)&&(n=null),r||i===null?dv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Zt=uv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Us=Symbol.for("react.element"),wr=Symbol.for("react.portal"),Cr=Symbol.for("react.fragment"),tc=Symbol.for("react.strict_mode"),Fa=Symbol.for("react.profiler"),Ip=Symbol.for("react.provider"),Tp=Symbol.for("react.context"),nc=Symbol.for("react.forward_ref"),Ma=Symbol.for("react.suspense"),ja=Symbol.for("react.suspense_list"),rc=Symbol.for("react.memo"),ln=Symbol.for("react.lazy"),Rp=Symbol.for("react.offscreen"),Gd=Symbol.iterator;function mi(t){return t===null||typeof t!="object"?null:(t=Gd&&t[Gd]||t["@@iterator"],typeof t=="function"?t:null)}var de=Object.assign,Kl;function Pi(t){if(Kl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Kl=e&&e[1]||""}return`
`+Kl+t}var Ql=!1;function Yl(t,e){if(!t||Ql)return"";Ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Ql=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Pi(t):""}function pv(t){switch(t.tag){case 5:return Pi(t.type);case 16:return Pi("Lazy");case 13:return Pi("Suspense");case 19:return Pi("SuspenseList");case 0:case 2:case 15:return t=Yl(t.type,!1),t;case 11:return t=Yl(t.type.render,!1),t;case 1:return t=Yl(t.type,!0),t;default:return""}}function za(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Cr:return"Fragment";case wr:return"Portal";case Fa:return"Profiler";case tc:return"StrictMode";case Ma:return"Suspense";case ja:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Tp:return(t.displayName||"Context")+".Consumer";case Ip:return(t._context.displayName||"Context")+".Provider";case nc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rc:return e=t.displayName||null,e!==null?e:za(t.type)||"Memo";case ln:e=t._payload,t=t._init;try{return za(t(e))}catch{}}return null}function gv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return za(e);case 8:return e===tc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Rn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ap(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function mv(t){var e=Ap(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Bs(t){t._valueTracker||(t._valueTracker=mv(t))}function Pp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ap(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function xo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ua(t,e){var n=e.checked;return de({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Kd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Rn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Np(t,e){e=e.checked,e!=null&&ec(t,"checked",e,!1)}function Ba(t,e){Np(t,e);var n=Rn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wa(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wa(t,e.type,Rn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wa(t,e,n){(e!=="number"||xo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ni=Array.isArray;function br(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Rn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ha(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return de({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Yd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(Ni(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Rn(n)}}function Dp(t,e){var n=Rn(e.value),r=Rn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function qd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function bp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $a(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?bp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ws,Op=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ws=Ws||document.createElement("div"),Ws.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ws.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Oi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_v=["Webkit","ms","Moz","O"];Object.keys(Oi).forEach(function(t){_v.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Oi[e]=Oi[t]})});function Lp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Oi.hasOwnProperty(t)&&Oi[t]?(""+e).trim():e+"px"}function Fp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Lp(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var yv=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Va(t,e){if(e){if(yv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function Ga(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ka=null;function ic(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qa=null,Or=null,Lr=null;function Xd(t){if(t=xs(t)){if(typeof Qa!="function")throw Error(E(280));var e=t.stateNode;e&&(e=Sl(e),Qa(t.stateNode,t.type,e))}}function Mp(t){Or?Lr?Lr.push(t):Lr=[t]:Or=t}function jp(){if(Or){var t=Or,e=Lr;if(Lr=Or=null,Xd(t),e)for(t=0;t<e.length;t++)Xd(e[t])}}function zp(t,e){return t(e)}function Up(){}var ql=!1;function Bp(t,e,n){if(ql)return t(e,n);ql=!0;try{return zp(t,e,n)}finally{ql=!1,(Or!==null||Lr!==null)&&(Up(),jp())}}function Xi(t,e){var n=t.stateNode;if(n===null)return null;var r=Sl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var Ya=!1;if(Vt)try{var _i={};Object.defineProperty(_i,"passive",{get:function(){Ya=!0}}),window.addEventListener("test",_i,_i),window.removeEventListener("test",_i,_i)}catch{Ya=!1}function vv(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Li=!1,ko=null,Io=!1,qa=null,wv={onError:function(t){Li=!0,ko=t}};function Cv(t,e,n,r,i,s,o,l,a){Li=!1,ko=null,vv.apply(wv,arguments)}function Sv(t,e,n,r,i,s,o,l,a){if(Cv.apply(this,arguments),Li){if(Li){var u=ko;Li=!1,ko=null}else throw Error(E(198));Io||(Io=!0,qa=u)}}function dr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Wp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Jd(t){if(dr(t)!==t)throw Error(E(188))}function Ev(t){var e=t.alternate;if(!e){if(e=dr(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Jd(i),t;if(s===r)return Jd(i),e;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function Hp(t){return t=Ev(t),t!==null?$p(t):null}function $p(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=$p(t);if(e!==null)return e;t=t.sibling}return null}var Vp=et.unstable_scheduleCallback,Zd=et.unstable_cancelCallback,xv=et.unstable_shouldYield,kv=et.unstable_requestPaint,pe=et.unstable_now,Iv=et.unstable_getCurrentPriorityLevel,sc=et.unstable_ImmediatePriority,Gp=et.unstable_UserBlockingPriority,To=et.unstable_NormalPriority,Tv=et.unstable_LowPriority,Kp=et.unstable_IdlePriority,yl=null,Pt=null;function Rv(t){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(yl,t,void 0,(t.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:Nv,Av=Math.log,Pv=Math.LN2;function Nv(t){return t>>>=0,t===0?32:31-(Av(t)/Pv|0)|0}var Hs=64,$s=4194304;function Di(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ro(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Di(l):(s&=o,s!==0&&(r=Di(s)))}else o=n&~i,o!==0?r=Di(o):s!==0&&(r=Di(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ct(e),i=1<<n,r|=t[n],e&=~i;return r}function Dv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bv(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ct(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=Dv(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Xa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Qp(){var t=Hs;return Hs<<=1,!(Hs&4194240)&&(Hs=64),t}function Xl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ss(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ct(e),t[e]=n}function Ov(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ct(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function oc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ct(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var q=0;function Yp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var qp,lc,Xp,Jp,Zp,Ja=!1,Vs=[],mn=null,_n=null,yn=null,Ji=new Map,Zi=new Map,un=[],Lv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function eh(t,e){switch(t){case"focusin":case"focusout":mn=null;break;case"dragenter":case"dragleave":_n=null;break;case"mouseover":case"mouseout":yn=null;break;case"pointerover":case"pointerout":Ji.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zi.delete(e.pointerId)}}function yi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=xs(e),e!==null&&lc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Fv(t,e,n,r,i){switch(e){case"focusin":return mn=yi(mn,t,e,n,r,i),!0;case"dragenter":return _n=yi(_n,t,e,n,r,i),!0;case"mouseover":return yn=yi(yn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ji.set(s,yi(Ji.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Zi.set(s,yi(Zi.get(s)||null,t,e,n,r,i)),!0}return!1}function eg(t){var e=Hn(t.target);if(e!==null){var n=dr(e);if(n!==null){if(e=n.tag,e===13){if(e=Wp(n),e!==null){t.blockedOn=e,Zp(t.priority,function(){Xp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ao(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Za(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ka=r,n.target.dispatchEvent(r),Ka=null}else return e=xs(n),e!==null&&lc(e),t.blockedOn=n,!1;e.shift()}return!0}function th(t,e,n){ao(t)&&n.delete(e)}function Mv(){Ja=!1,mn!==null&&ao(mn)&&(mn=null),_n!==null&&ao(_n)&&(_n=null),yn!==null&&ao(yn)&&(yn=null),Ji.forEach(th),Zi.forEach(th)}function vi(t,e){t.blockedOn===e&&(t.blockedOn=null,Ja||(Ja=!0,et.unstable_scheduleCallback(et.unstable_NormalPriority,Mv)))}function es(t){function e(i){return vi(i,t)}if(0<Vs.length){vi(Vs[0],t);for(var n=1;n<Vs.length;n++){var r=Vs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(mn!==null&&vi(mn,t),_n!==null&&vi(_n,t),yn!==null&&vi(yn,t),Ji.forEach(e),Zi.forEach(e),n=0;n<un.length;n++)r=un[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)eg(n),n.blockedOn===null&&un.shift()}var Fr=Zt.ReactCurrentBatchConfig,Ao=!0;function jv(t,e,n,r){var i=q,s=Fr.transition;Fr.transition=null;try{q=1,ac(t,e,n,r)}finally{q=i,Fr.transition=s}}function zv(t,e,n,r){var i=q,s=Fr.transition;Fr.transition=null;try{q=4,ac(t,e,n,r)}finally{q=i,Fr.transition=s}}function ac(t,e,n,r){if(Ao){var i=Za(t,e,n,r);if(i===null)la(t,e,r,Po,n),eh(t,r);else if(Fv(i,t,e,n,r))r.stopPropagation();else if(eh(t,r),e&4&&-1<Lv.indexOf(t)){for(;i!==null;){var s=xs(i);if(s!==null&&qp(s),s=Za(t,e,n,r),s===null&&la(t,e,r,Po,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else la(t,e,r,null,n)}}var Po=null;function Za(t,e,n,r){if(Po=null,t=ic(r),t=Hn(t),t!==null)if(e=dr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Wp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Po=t,null}function tg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Iv()){case sc:return 1;case Gp:return 4;case To:case Tv:return 16;case Kp:return 536870912;default:return 16}default:return 16}}var pn=null,uc=null,uo=null;function ng(){if(uo)return uo;var t,e=uc,n=e.length,r,i="value"in pn?pn.value:pn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return uo=i.slice(t,1<r?1-r:void 0)}function co(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Gs(){return!0}function nh(){return!1}function nt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Gs:nh,this.isPropagationStopped=nh,this}return de(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gs)},persist:function(){},isPersistent:Gs}),e}var si={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cc=nt(si),Es=de({},si,{view:0,detail:0}),Uv=nt(Es),Jl,Zl,wi,vl=de({},Es,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wi&&(wi&&t.type==="mousemove"?(Jl=t.screenX-wi.screenX,Zl=t.screenY-wi.screenY):Zl=Jl=0,wi=t),Jl)},movementY:function(t){return"movementY"in t?t.movementY:Zl}}),rh=nt(vl),Bv=de({},vl,{dataTransfer:0}),Wv=nt(Bv),Hv=de({},Es,{relatedTarget:0}),ea=nt(Hv),$v=de({},si,{animationName:0,elapsedTime:0,pseudoElement:0}),Vv=nt($v),Gv=de({},si,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Kv=nt(Gv),Qv=de({},si,{data:0}),ih=nt(Qv),Yv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Xv[t])?!!e[t]:!1}function dc(){return Jv}var Zv=de({},Es,{key:function(t){if(t.key){var e=Yv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=co(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dc,charCode:function(t){return t.type==="keypress"?co(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?co(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),e0=nt(Zv),t0=de({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sh=nt(t0),n0=de({},Es,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dc}),r0=nt(n0),i0=de({},si,{propertyName:0,elapsedTime:0,pseudoElement:0}),s0=nt(i0),o0=de({},vl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),l0=nt(o0),a0=[9,13,27,32],hc=Vt&&"CompositionEvent"in window,Fi=null;Vt&&"documentMode"in document&&(Fi=document.documentMode);var u0=Vt&&"TextEvent"in window&&!Fi,rg=Vt&&(!hc||Fi&&8<Fi&&11>=Fi),oh=" ",lh=!1;function ig(t,e){switch(t){case"keyup":return a0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Sr=!1;function c0(t,e){switch(t){case"compositionend":return sg(e);case"keypress":return e.which!==32?null:(lh=!0,oh);case"textInput":return t=e.data,t===oh&&lh?null:t;default:return null}}function d0(t,e){if(Sr)return t==="compositionend"||!hc&&ig(t,e)?(t=ng(),uo=uc=pn=null,Sr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return rg&&e.locale!=="ko"?null:e.data;default:return null}}var h0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ah(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!h0[t.type]:e==="textarea"}function og(t,e,n,r){Mp(r),e=No(e,"onChange"),0<e.length&&(n=new cc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Mi=null,ts=null;function f0(t){_g(t,0)}function wl(t){var e=kr(t);if(Pp(e))return t}function p0(t,e){if(t==="change")return e}var lg=!1;if(Vt){var ta;if(Vt){var na="oninput"in document;if(!na){var uh=document.createElement("div");uh.setAttribute("oninput","return;"),na=typeof uh.oninput=="function"}ta=na}else ta=!1;lg=ta&&(!document.documentMode||9<document.documentMode)}function ch(){Mi&&(Mi.detachEvent("onpropertychange",ag),ts=Mi=null)}function ag(t){if(t.propertyName==="value"&&wl(ts)){var e=[];og(e,ts,t,ic(t)),Bp(f0,e)}}function g0(t,e,n){t==="focusin"?(ch(),Mi=e,ts=n,Mi.attachEvent("onpropertychange",ag)):t==="focusout"&&ch()}function m0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return wl(ts)}function _0(t,e){if(t==="click")return wl(e)}function y0(t,e){if(t==="input"||t==="change")return wl(e)}function v0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kt=typeof Object.is=="function"?Object.is:v0;function ns(t,e){if(kt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!La.call(e,i)||!kt(t[i],e[i]))return!1}return!0}function dh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hh(t,e){var n=dh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dh(n)}}function ug(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ug(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cg(){for(var t=window,e=xo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xo(t.document)}return e}function fc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function w0(t){var e=cg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ug(n.ownerDocument.documentElement,n)){if(r!==null&&fc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=hh(n,s);var o=hh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var C0=Vt&&"documentMode"in document&&11>=document.documentMode,Er=null,eu=null,ji=null,tu=!1;function fh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;tu||Er==null||Er!==xo(r)||(r=Er,"selectionStart"in r&&fc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ji&&ns(ji,r)||(ji=r,r=No(eu,"onSelect"),0<r.length&&(e=new cc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Er)))}function Ks(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xr={animationend:Ks("Animation","AnimationEnd"),animationiteration:Ks("Animation","AnimationIteration"),animationstart:Ks("Animation","AnimationStart"),transitionend:Ks("Transition","TransitionEnd")},ra={},dg={};Vt&&(dg=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function Cl(t){if(ra[t])return ra[t];if(!xr[t])return t;var e=xr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in dg)return ra[t]=e[n];return t}var hg=Cl("animationend"),fg=Cl("animationiteration"),pg=Cl("animationstart"),gg=Cl("transitionend"),mg=new Map,ph="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dn(t,e){mg.set(t,e),cr(e,[t])}for(var ia=0;ia<ph.length;ia++){var sa=ph[ia],S0=sa.toLowerCase(),E0=sa[0].toUpperCase()+sa.slice(1);Dn(S0,"on"+E0)}Dn(hg,"onAnimationEnd");Dn(fg,"onAnimationIteration");Dn(pg,"onAnimationStart");Dn("dblclick","onDoubleClick");Dn("focusin","onFocus");Dn("focusout","onBlur");Dn(gg,"onTransitionEnd");Vr("onMouseEnter",["mouseout","mouseover"]);Vr("onMouseLeave",["mouseout","mouseover"]);Vr("onPointerEnter",["pointerout","pointerover"]);Vr("onPointerLeave",["pointerout","pointerover"]);cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),x0=new Set("cancel close invalid load scroll toggle".split(" ").concat(bi));function gh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Sv(r,e,void 0,t),t.currentTarget=null}function _g(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;gh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;gh(i,l,u),s=a}}}if(Io)throw t=qa,Io=!1,qa=null,t}function re(t,e){var n=e[ou];n===void 0&&(n=e[ou]=new Set);var r=t+"__bubble";n.has(r)||(yg(e,t,2,!1),n.add(r))}function oa(t,e,n){var r=0;e&&(r|=4),yg(n,t,r,e)}var Qs="_reactListening"+Math.random().toString(36).slice(2);function rs(t){if(!t[Qs]){t[Qs]=!0,kp.forEach(function(n){n!=="selectionchange"&&(x0.has(n)||oa(n,!1,t),oa(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qs]||(e[Qs]=!0,oa("selectionchange",!1,e))}}function yg(t,e,n,r){switch(tg(e)){case 1:var i=jv;break;case 4:i=zv;break;default:i=ac}n=i.bind(null,e,n,t),i=void 0,!Ya||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function la(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Hn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Bp(function(){var u=s,f=ic(n),h=[];e:{var d=mg.get(t);if(d!==void 0){var y=cc,g=t;switch(t){case"keypress":if(co(n)===0)break e;case"keydown":case"keyup":y=e0;break;case"focusin":g="focus",y=ea;break;case"focusout":g="blur",y=ea;break;case"beforeblur":case"afterblur":y=ea;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=rh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=r0;break;case hg:case fg:case pg:y=Vv;break;case gg:y=s0;break;case"scroll":y=Uv;break;case"wheel":y=l0;break;case"copy":case"cut":case"paste":y=Kv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=sh}var C=(e&4)!==0,P=!C&&t==="scroll",m=C?d!==null?d+"Capture":null:d;C=[];for(var p=u,_;p!==null;){_=p;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,m!==null&&(S=Xi(p,m),S!=null&&C.push(is(p,S,_)))),P)break;p=p.return}0<C.length&&(d=new y(d,g,null,n,f),h.push({event:d,listeners:C}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",d&&n!==Ka&&(g=n.relatedTarget||n.fromElement)&&(Hn(g)||g[Gt]))break e;if((y||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,y?(g=n.relatedTarget||n.toElement,y=u,g=g?Hn(g):null,g!==null&&(P=dr(g),g!==P||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=u),y!==g)){if(C=rh,S="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(C=sh,S="onPointerLeave",m="onPointerEnter",p="pointer"),P=y==null?d:kr(y),_=g==null?d:kr(g),d=new C(S,p+"leave",y,n,f),d.target=P,d.relatedTarget=_,S=null,Hn(f)===u&&(C=new C(m,p+"enter",g,n,f),C.target=_,C.relatedTarget=P,S=C),P=S,y&&g)t:{for(C=y,m=g,p=0,_=C;_;_=gr(_))p++;for(_=0,S=m;S;S=gr(S))_++;for(;0<p-_;)C=gr(C),p--;for(;0<_-p;)m=gr(m),_--;for(;p--;){if(C===m||m!==null&&C===m.alternate)break t;C=gr(C),m=gr(m)}C=null}else C=null;y!==null&&mh(h,d,y,C,!1),g!==null&&P!==null&&mh(h,P,g,C,!0)}}e:{if(d=u?kr(u):window,y=d.nodeName&&d.nodeName.toLowerCase(),y==="select"||y==="input"&&d.type==="file")var A=p0;else if(ah(d))if(lg)A=y0;else{A=m0;var T=g0}else(y=d.nodeName)&&y.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=_0);if(A&&(A=A(t,u))){og(h,A,n,f);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Wa(d,"number",d.value)}switch(T=u?kr(u):window,t){case"focusin":(ah(T)||T.contentEditable==="true")&&(Er=T,eu=u,ji=null);break;case"focusout":ji=eu=Er=null;break;case"mousedown":tu=!0;break;case"contextmenu":case"mouseup":case"dragend":tu=!1,fh(h,n,f);break;case"selectionchange":if(C0)break;case"keydown":case"keyup":fh(h,n,f)}var R;if(hc)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Sr?ig(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(rg&&n.locale!=="ko"&&(Sr||x!=="onCompositionStart"?x==="onCompositionEnd"&&Sr&&(R=ng()):(pn=f,uc="value"in pn?pn.value:pn.textContent,Sr=!0)),T=No(u,x),0<T.length&&(x=new ih(x,t,null,n,f),h.push({event:x,listeners:T}),R?x.data=R:(R=sg(n),R!==null&&(x.data=R)))),(R=u0?c0(t,n):d0(t,n))&&(u=No(u,"onBeforeInput"),0<u.length&&(f=new ih("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=R))}_g(h,e)})}function is(t,e,n){return{instance:t,listener:e,currentTarget:n}}function No(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Xi(t,n),s!=null&&r.unshift(is(t,s,i)),s=Xi(t,e),s!=null&&r.push(is(t,s,i))),t=t.return}return r}function gr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Xi(n,s),a!=null&&o.unshift(is(n,a,l))):i||(a=Xi(n,s),a!=null&&o.push(is(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var k0=/\r\n?/g,I0=/\u0000|\uFFFD/g;function _h(t){return(typeof t=="string"?t:""+t).replace(k0,`
`).replace(I0,"")}function Ys(t,e,n){if(e=_h(e),_h(t)!==e&&n)throw Error(E(425))}function Do(){}var nu=null,ru=null;function iu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var su=typeof setTimeout=="function"?setTimeout:void 0,T0=typeof clearTimeout=="function"?clearTimeout:void 0,yh=typeof Promise=="function"?Promise:void 0,R0=typeof queueMicrotask=="function"?queueMicrotask:typeof yh<"u"?function(t){return yh.resolve(null).then(t).catch(A0)}:su;function A0(t){setTimeout(function(){throw t})}function aa(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),es(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);es(e)}function vn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function vh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var oi=Math.random().toString(36).slice(2),At="__reactFiber$"+oi,ss="__reactProps$"+oi,Gt="__reactContainer$"+oi,ou="__reactEvents$"+oi,P0="__reactListeners$"+oi,N0="__reactHandles$"+oi;function Hn(t){var e=t[At];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Gt]||n[At]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vh(t);t!==null;){if(n=t[At])return n;t=vh(t)}return e}t=n,n=t.parentNode}return null}function xs(t){return t=t[At]||t[Gt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function kr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function Sl(t){return t[ss]||null}var lu=[],Ir=-1;function bn(t){return{current:t}}function se(t){0>Ir||(t.current=lu[Ir],lu[Ir]=null,Ir--)}function ne(t,e){Ir++,lu[Ir]=t.current,t.current=e}var An={},Le=bn(An),Ge=bn(!1),Jn=An;function Gr(t,e){var n=t.type.contextTypes;if(!n)return An;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ke(t){return t=t.childContextTypes,t!=null}function bo(){se(Ge),se(Le)}function wh(t,e,n){if(Le.current!==An)throw Error(E(168));ne(Le,e),ne(Ge,n)}function vg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,gv(t)||"Unknown",i));return de({},n,r)}function Oo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||An,Jn=Le.current,ne(Le,t),ne(Ge,Ge.current),!0}function Ch(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=vg(t,e,Jn),r.__reactInternalMemoizedMergedChildContext=t,se(Ge),se(Le),ne(Le,t)):se(Ge),ne(Ge,n)}var Ft=null,El=!1,ua=!1;function wg(t){Ft===null?Ft=[t]:Ft.push(t)}function D0(t){El=!0,wg(t)}function On(){if(!ua&&Ft!==null){ua=!0;var t=0,e=q;try{var n=Ft;for(q=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ft=null,El=!1}catch(i){throw Ft!==null&&(Ft=Ft.slice(t+1)),Vp(sc,On),i}finally{q=e,ua=!1}}return null}var Tr=[],Rr=0,Lo=null,Fo=0,st=[],ot=0,Zn=null,jt=1,zt="";function jn(t,e){Tr[Rr++]=Fo,Tr[Rr++]=Lo,Lo=t,Fo=e}function Cg(t,e,n){st[ot++]=jt,st[ot++]=zt,st[ot++]=Zn,Zn=t;var r=jt;t=zt;var i=32-Ct(r)-1;r&=~(1<<i),n+=1;var s=32-Ct(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,jt=1<<32-Ct(e)+i|n<<i|r,zt=s+t}else jt=1<<s|n<<i|r,zt=t}function pc(t){t.return!==null&&(jn(t,1),Cg(t,1,0))}function gc(t){for(;t===Lo;)Lo=Tr[--Rr],Tr[Rr]=null,Fo=Tr[--Rr],Tr[Rr]=null;for(;t===Zn;)Zn=st[--ot],st[ot]=null,zt=st[--ot],st[ot]=null,jt=st[--ot],st[ot]=null}var Ze=null,Je=null,oe=!1,gt=null;function Sg(t,e){var n=lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Sh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ze=t,Je=vn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ze=t,Je=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zn!==null?{id:jt,overflow:zt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ze=t,Je=null,!0):!1;default:return!1}}function au(t){return(t.mode&1)!==0&&(t.flags&128)===0}function uu(t){if(oe){var e=Je;if(e){var n=e;if(!Sh(t,e)){if(au(t))throw Error(E(418));e=vn(n.nextSibling);var r=Ze;e&&Sh(t,e)?Sg(r,n):(t.flags=t.flags&-4097|2,oe=!1,Ze=t)}}else{if(au(t))throw Error(E(418));t.flags=t.flags&-4097|2,oe=!1,Ze=t}}}function Eh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ze=t}function qs(t){if(t!==Ze)return!1;if(!oe)return Eh(t),oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!iu(t.type,t.memoizedProps)),e&&(e=Je)){if(au(t))throw Eg(),Error(E(418));for(;e;)Sg(t,e),e=vn(e.nextSibling)}if(Eh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Je=vn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Je=null}}else Je=Ze?vn(t.stateNode.nextSibling):null;return!0}function Eg(){for(var t=Je;t;)t=vn(t.nextSibling)}function Kr(){Je=Ze=null,oe=!1}function mc(t){gt===null?gt=[t]:gt.push(t)}var b0=Zt.ReactCurrentBatchConfig;function Ci(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function Xs(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xh(t){var e=t._init;return e(t._payload)}function xg(t){function e(m,p){if(t){var _=m.deletions;_===null?(m.deletions=[p],m.flags|=16):_.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=En(m,p),m.index=0,m.sibling=null,m}function s(m,p,_){return m.index=_,t?(_=m.alternate,_!==null?(_=_.index,_<p?(m.flags|=2,p):_):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function l(m,p,_,S){return p===null||p.tag!==6?(p=ma(_,m.mode,S),p.return=m,p):(p=i(p,_),p.return=m,p)}function a(m,p,_,S){var A=_.type;return A===Cr?f(m,p,_.props.children,S,_.key):p!==null&&(p.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ln&&xh(A)===p.type)?(S=i(p,_.props),S.ref=Ci(m,p,_),S.return=m,S):(S=yo(_.type,_.key,_.props,null,m.mode,S),S.ref=Ci(m,p,_),S.return=m,S)}function u(m,p,_,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==_.containerInfo||p.stateNode.implementation!==_.implementation?(p=_a(_,m.mode,S),p.return=m,p):(p=i(p,_.children||[]),p.return=m,p)}function f(m,p,_,S,A){return p===null||p.tag!==7?(p=qn(_,m.mode,S,A),p.return=m,p):(p=i(p,_),p.return=m,p)}function h(m,p,_){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ma(""+p,m.mode,_),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Us:return _=yo(p.type,p.key,p.props,null,m.mode,_),_.ref=Ci(m,null,p),_.return=m,_;case wr:return p=_a(p,m.mode,_),p.return=m,p;case ln:var S=p._init;return h(m,S(p._payload),_)}if(Ni(p)||mi(p))return p=qn(p,m.mode,_,null),p.return=m,p;Xs(m,p)}return null}function d(m,p,_,S){var A=p!==null?p.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return A!==null?null:l(m,p,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Us:return _.key===A?a(m,p,_,S):null;case wr:return _.key===A?u(m,p,_,S):null;case ln:return A=_._init,d(m,p,A(_._payload),S)}if(Ni(_)||mi(_))return A!==null?null:f(m,p,_,S,null);Xs(m,_)}return null}function y(m,p,_,S,A){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(_)||null,l(p,m,""+S,A);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Us:return m=m.get(S.key===null?_:S.key)||null,a(p,m,S,A);case wr:return m=m.get(S.key===null?_:S.key)||null,u(p,m,S,A);case ln:var T=S._init;return y(m,p,_,T(S._payload),A)}if(Ni(S)||mi(S))return m=m.get(_)||null,f(p,m,S,A,null);Xs(p,S)}return null}function g(m,p,_,S){for(var A=null,T=null,R=p,x=p=0,L=null;R!==null&&x<_.length;x++){R.index>x?(L=R,R=null):L=R.sibling;var j=d(m,R,_[x],S);if(j===null){R===null&&(R=L);break}t&&R&&j.alternate===null&&e(m,R),p=s(j,p,x),T===null?A=j:T.sibling=j,T=j,R=L}if(x===_.length)return n(m,R),oe&&jn(m,x),A;if(R===null){for(;x<_.length;x++)R=h(m,_[x],S),R!==null&&(p=s(R,p,x),T===null?A=R:T.sibling=R,T=R);return oe&&jn(m,x),A}for(R=r(m,R);x<_.length;x++)L=y(R,m,x,_[x],S),L!==null&&(t&&L.alternate!==null&&R.delete(L.key===null?x:L.key),p=s(L,p,x),T===null?A=L:T.sibling=L,T=L);return t&&R.forEach(function(N){return e(m,N)}),oe&&jn(m,x),A}function C(m,p,_,S){var A=mi(_);if(typeof A!="function")throw Error(E(150));if(_=A.call(_),_==null)throw Error(E(151));for(var T=A=null,R=p,x=p=0,L=null,j=_.next();R!==null&&!j.done;x++,j=_.next()){R.index>x?(L=R,R=null):L=R.sibling;var N=d(m,R,j.value,S);if(N===null){R===null&&(R=L);break}t&&R&&N.alternate===null&&e(m,R),p=s(N,p,x),T===null?A=N:T.sibling=N,T=N,R=L}if(j.done)return n(m,R),oe&&jn(m,x),A;if(R===null){for(;!j.done;x++,j=_.next())j=h(m,j.value,S),j!==null&&(p=s(j,p,x),T===null?A=j:T.sibling=j,T=j);return oe&&jn(m,x),A}for(R=r(m,R);!j.done;x++,j=_.next())j=y(R,m,x,j.value,S),j!==null&&(t&&j.alternate!==null&&R.delete(j.key===null?x:j.key),p=s(j,p,x),T===null?A=j:T.sibling=j,T=j);return t&&R.forEach(function(G){return e(m,G)}),oe&&jn(m,x),A}function P(m,p,_,S){if(typeof _=="object"&&_!==null&&_.type===Cr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Us:e:{for(var A=_.key,T=p;T!==null;){if(T.key===A){if(A=_.type,A===Cr){if(T.tag===7){n(m,T.sibling),p=i(T,_.props.children),p.return=m,m=p;break e}}else if(T.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ln&&xh(A)===T.type){n(m,T.sibling),p=i(T,_.props),p.ref=Ci(m,T,_),p.return=m,m=p;break e}n(m,T);break}else e(m,T);T=T.sibling}_.type===Cr?(p=qn(_.props.children,m.mode,S,_.key),p.return=m,m=p):(S=yo(_.type,_.key,_.props,null,m.mode,S),S.ref=Ci(m,p,_),S.return=m,m=S)}return o(m);case wr:e:{for(T=_.key;p!==null;){if(p.key===T)if(p.tag===4&&p.stateNode.containerInfo===_.containerInfo&&p.stateNode.implementation===_.implementation){n(m,p.sibling),p=i(p,_.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=_a(_,m.mode,S),p.return=m,m=p}return o(m);case ln:return T=_._init,P(m,p,T(_._payload),S)}if(Ni(_))return g(m,p,_,S);if(mi(_))return C(m,p,_,S);Xs(m,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,_),p.return=m,m=p):(n(m,p),p=ma(_,m.mode,S),p.return=m,m=p),o(m)):n(m,p)}return P}var Qr=xg(!0),kg=xg(!1),Mo=bn(null),jo=null,Ar=null,_c=null;function yc(){_c=Ar=jo=null}function vc(t){var e=Mo.current;se(Mo),t._currentValue=e}function cu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Mr(t,e){jo=t,_c=Ar=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(He=!0),t.firstContext=null)}function ut(t){var e=t._currentValue;if(_c!==t)if(t={context:t,memoizedValue:e,next:null},Ar===null){if(jo===null)throw Error(E(308));Ar=t,jo.dependencies={lanes:0,firstContext:t}}else Ar=Ar.next=t;return e}var $n=null;function wc(t){$n===null?$n=[t]:$n.push(t)}function Ig(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,wc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Kt(t,r)}function Kt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var an=!1;function Cc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ht(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function wn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Kt(t,n)}return i=r.interleaved,i===null?(e.next=e,wc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Kt(t,n)}function ho(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,oc(t,n)}}function kh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function zo(t,e,n,r){var i=t.updateQueue;an=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=a))}if(s!==null){var h=i.baseState;o=0,f=u=a=null,l=s;do{var d=l.lane,y=l.eventTime;if((r&d)===d){f!==null&&(f=f.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=t,C=l;switch(d=e,y=n,C.tag){case 1:if(g=C.payload,typeof g=="function"){h=g.call(y,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=C.payload,d=typeof g=="function"?g.call(y,h,d):g,d==null)break e;h=de({},h,d);break e;case 2:an=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[l]:d.push(l))}else y={eventTime:y,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=y,a=h):f=f.next=y,o|=d;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;d=l,l=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(f===null&&(a=h),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);tr|=o,t.lanes=o,t.memoizedState=h}}function Ih(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var ks={},Nt=bn(ks),os=bn(ks),ls=bn(ks);function Vn(t){if(t===ks)throw Error(E(174));return t}function Sc(t,e){switch(ne(ls,e),ne(os,t),ne(Nt,ks),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$a(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$a(e,t)}se(Nt),ne(Nt,e)}function Yr(){se(Nt),se(os),se(ls)}function Rg(t){Vn(ls.current);var e=Vn(Nt.current),n=$a(e,t.type);e!==n&&(ne(os,t),ne(Nt,n))}function Ec(t){os.current===t&&(se(Nt),se(os))}var ue=bn(0);function Uo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ca=[];function xc(){for(var t=0;t<ca.length;t++)ca[t]._workInProgressVersionPrimary=null;ca.length=0}var fo=Zt.ReactCurrentDispatcher,da=Zt.ReactCurrentBatchConfig,er=0,ce=null,_e=null,Se=null,Bo=!1,zi=!1,as=0,O0=0;function Ne(){throw Error(E(321))}function kc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kt(t[n],e[n]))return!1;return!0}function Ic(t,e,n,r,i,s){if(er=s,ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fo.current=t===null||t.memoizedState===null?j0:z0,t=n(r,i),zi){s=0;do{if(zi=!1,as=0,25<=s)throw Error(E(301));s+=1,Se=_e=null,e.updateQueue=null,fo.current=U0,t=n(r,i)}while(zi)}if(fo.current=Wo,e=_e!==null&&_e.next!==null,er=0,Se=_e=ce=null,Bo=!1,e)throw Error(E(300));return t}function Tc(){var t=as!==0;return as=0,t}function Rt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?ce.memoizedState=Se=t:Se=Se.next=t,Se}function ct(){if(_e===null){var t=ce.alternate;t=t!==null?t.memoizedState:null}else t=_e.next;var e=Se===null?ce.memoizedState:Se.next;if(e!==null)Se=e,_e=t;else{if(t===null)throw Error(E(310));_e=t,t={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Se===null?ce.memoizedState=Se=t:Se=Se.next=t}return Se}function us(t,e){return typeof e=="function"?e(t):e}function ha(t){var e=ct(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=_e,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var f=u.lane;if((er&f)===f)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=h,o=r):a=a.next=h,ce.lanes|=f,tr|=f}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,kt(r,e.memoizedState)||(He=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ce.lanes|=s,tr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function fa(t){var e=ct(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);kt(s,e.memoizedState)||(He=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Ag(){}function Pg(t,e){var n=ce,r=ct(),i=e(),s=!kt(r.memoizedState,i);if(s&&(r.memoizedState=i,He=!0),r=r.queue,Rc(bg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,cs(9,Dg.bind(null,n,r,i,e),void 0,null),ke===null)throw Error(E(349));er&30||Ng(n,e,i)}return i}function Ng(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ce.updateQueue,e===null?(e={lastEffect:null,stores:null},ce.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Dg(t,e,n,r){e.value=n,e.getSnapshot=r,Og(e)&&Lg(t)}function bg(t,e,n){return n(function(){Og(e)&&Lg(t)})}function Og(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kt(t,n)}catch{return!0}}function Lg(t){var e=Kt(t,1);e!==null&&St(e,t,1,-1)}function Th(t){var e=Rt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:us,lastRenderedState:t},e.queue=t,t=t.dispatch=M0.bind(null,ce,t),[e.memoizedState,t]}function cs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ce.updateQueue,e===null?(e={lastEffect:null,stores:null},ce.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Fg(){return ct().memoizedState}function po(t,e,n,r){var i=Rt();ce.flags|=t,i.memoizedState=cs(1|e,n,void 0,r===void 0?null:r)}function xl(t,e,n,r){var i=ct();r=r===void 0?null:r;var s=void 0;if(_e!==null){var o=_e.memoizedState;if(s=o.destroy,r!==null&&kc(r,o.deps)){i.memoizedState=cs(e,n,s,r);return}}ce.flags|=t,i.memoizedState=cs(1|e,n,s,r)}function Rh(t,e){return po(8390656,8,t,e)}function Rc(t,e){return xl(2048,8,t,e)}function Mg(t,e){return xl(4,2,t,e)}function jg(t,e){return xl(4,4,t,e)}function zg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ug(t,e,n){return n=n!=null?n.concat([t]):null,xl(4,4,zg.bind(null,e,t),n)}function Ac(){}function Bg(t,e){var n=ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&kc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Wg(t,e){var n=ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&kc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Hg(t,e,n){return er&21?(kt(n,e)||(n=Qp(),ce.lanes|=n,tr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,He=!0),t.memoizedState=n)}function L0(t,e){var n=q;q=n!==0&&4>n?n:4,t(!0);var r=da.transition;da.transition={};try{t(!1),e()}finally{q=n,da.transition=r}}function $g(){return ct().memoizedState}function F0(t,e,n){var r=Sn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Vg(t))Gg(e,n);else if(n=Ig(t,e,n,r),n!==null){var i=je();St(n,t,r,i),Kg(n,e,r)}}function M0(t,e,n){var r=Sn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vg(t))Gg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,kt(l,o)){var a=e.interleaved;a===null?(i.next=i,wc(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Ig(t,e,i,r),n!==null&&(i=je(),St(n,t,r,i),Kg(n,e,r))}}function Vg(t){var e=t.alternate;return t===ce||e!==null&&e===ce}function Gg(t,e){zi=Bo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Kg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,oc(t,n)}}var Wo={readContext:ut,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},j0={readContext:ut,useCallback:function(t,e){return Rt().memoizedState=[t,e===void 0?null:e],t},useContext:ut,useEffect:Rh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,po(4194308,4,zg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return po(4194308,4,t,e)},useInsertionEffect:function(t,e){return po(4,2,t,e)},useMemo:function(t,e){var n=Rt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Rt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=F0.bind(null,ce,t),[r.memoizedState,t]},useRef:function(t){var e=Rt();return t={current:t},e.memoizedState=t},useState:Th,useDebugValue:Ac,useDeferredValue:function(t){return Rt().memoizedState=t},useTransition:function(){var t=Th(!1),e=t[0];return t=L0.bind(null,t[1]),Rt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ce,i=Rt();if(oe){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),ke===null)throw Error(E(349));er&30||Ng(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Rh(bg.bind(null,r,s,t),[t]),r.flags|=2048,cs(9,Dg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Rt(),e=ke.identifierPrefix;if(oe){var n=zt,r=jt;n=(r&~(1<<32-Ct(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=as++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=O0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},z0={readContext:ut,useCallback:Bg,useContext:ut,useEffect:Rc,useImperativeHandle:Ug,useInsertionEffect:Mg,useLayoutEffect:jg,useMemo:Wg,useReducer:ha,useRef:Fg,useState:function(){return ha(us)},useDebugValue:Ac,useDeferredValue:function(t){var e=ct();return Hg(e,_e.memoizedState,t)},useTransition:function(){var t=ha(us)[0],e=ct().memoizedState;return[t,e]},useMutableSource:Ag,useSyncExternalStore:Pg,useId:$g,unstable_isNewReconciler:!1},U0={readContext:ut,useCallback:Bg,useContext:ut,useEffect:Rc,useImperativeHandle:Ug,useInsertionEffect:Mg,useLayoutEffect:jg,useMemo:Wg,useReducer:fa,useRef:Fg,useState:function(){return fa(us)},useDebugValue:Ac,useDeferredValue:function(t){var e=ct();return _e===null?e.memoizedState=t:Hg(e,_e.memoizedState,t)},useTransition:function(){var t=fa(us)[0],e=ct().memoizedState;return[t,e]},useMutableSource:Ag,useSyncExternalStore:Pg,useId:$g,unstable_isNewReconciler:!1};function ft(t,e){if(t&&t.defaultProps){e=de({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function du(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:de({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var kl={isMounted:function(t){return(t=t._reactInternals)?dr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=je(),i=Sn(t),s=Ht(r,i);s.payload=e,n!=null&&(s.callback=n),e=wn(t,s,i),e!==null&&(St(e,t,i,r),ho(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=je(),i=Sn(t),s=Ht(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=wn(t,s,i),e!==null&&(St(e,t,i,r),ho(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=je(),r=Sn(t),i=Ht(n,r);i.tag=2,e!=null&&(i.callback=e),e=wn(t,i,r),e!==null&&(St(e,t,r,n),ho(e,t,r))}};function Ah(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ns(n,r)||!ns(i,s):!0}function Qg(t,e,n){var r=!1,i=An,s=e.contextType;return typeof s=="object"&&s!==null?s=ut(s):(i=Ke(e)?Jn:Le.current,r=e.contextTypes,s=(r=r!=null)?Gr(t,i):An),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=kl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ph(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&kl.enqueueReplaceState(e,e.state,null)}function hu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Cc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ut(s):(s=Ke(e)?Jn:Le.current,i.context=Gr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(du(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&kl.enqueueReplaceState(i,i.state,null),zo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function qr(t,e){try{var n="",r=e;do n+=pv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function pa(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function fu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var B0=typeof WeakMap=="function"?WeakMap:Map;function Yg(t,e,n){n=Ht(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){$o||($o=!0,Eu=r),fu(t,e)},n}function qg(t,e,n){n=Ht(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){fu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){fu(t,e),typeof r!="function"&&(Cn===null?Cn=new Set([this]):Cn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Nh(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new B0;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=tw.bind(null,t,e,n),e.then(t,t))}function Dh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function bh(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ht(-1,1),e.tag=2,wn(n,e,1))),n.lanes|=1),t)}var W0=Zt.ReactCurrentOwner,He=!1;function Me(t,e,n,r){e.child=t===null?kg(e,null,n,r):Qr(e,t.child,n,r)}function Oh(t,e,n,r,i){n=n.render;var s=e.ref;return Mr(e,i),r=Ic(t,e,n,r,s,i),n=Tc(),t!==null&&!He?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qt(t,e,i)):(oe&&n&&pc(e),e.flags|=1,Me(t,e,r,i),e.child)}function Lh(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Mc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Xg(t,e,s,r,i)):(t=yo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ns,n(o,r)&&t.ref===e.ref)return Qt(t,e,i)}return e.flags|=1,t=En(s,r),t.ref=e.ref,t.return=e,e.child=t}function Xg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ns(s,r)&&t.ref===e.ref)if(He=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(He=!0);else return e.lanes=t.lanes,Qt(t,e,i)}return pu(t,e,n,r,i)}function Jg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Nr,Xe),Xe|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ne(Nr,Xe),Xe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ne(Nr,Xe),Xe|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ne(Nr,Xe),Xe|=r;return Me(t,e,i,n),e.child}function Zg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function pu(t,e,n,r,i){var s=Ke(n)?Jn:Le.current;return s=Gr(e,s),Mr(e,i),n=Ic(t,e,n,r,s,i),r=Tc(),t!==null&&!He?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qt(t,e,i)):(oe&&r&&pc(e),e.flags|=1,Me(t,e,n,i),e.child)}function Fh(t,e,n,r,i){if(Ke(n)){var s=!0;Oo(e)}else s=!1;if(Mr(e,i),e.stateNode===null)go(t,e),Qg(e,n,r),hu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ut(u):(u=Ke(n)?Jn:Le.current,u=Gr(e,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Ph(e,o,r,u),an=!1;var d=e.memoizedState;o.state=d,zo(e,r,o,i),a=e.memoizedState,l!==r||d!==a||Ge.current||an?(typeof f=="function"&&(du(e,n,f,r),a=e.memoizedState),(l=an||Ah(e,n,l,r,d,a,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Tg(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:ft(e.type,l),o.props=u,h=e.pendingProps,d=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=ut(a):(a=Ke(n)?Jn:Le.current,a=Gr(e,a));var y=n.getDerivedStateFromProps;(f=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==h||d!==a)&&Ph(e,o,r,a),an=!1,d=e.memoizedState,o.state=d,zo(e,r,o,i);var g=e.memoizedState;l!==h||d!==g||Ge.current||an?(typeof y=="function"&&(du(e,n,y,r),g=e.memoizedState),(u=an||Ah(e,n,u,r,d,g,a)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return gu(t,e,n,r,s,i)}function gu(t,e,n,r,i,s){Zg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ch(e,n,!1),Qt(t,e,s);r=e.stateNode,W0.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Qr(e,t.child,null,s),e.child=Qr(e,null,l,s)):Me(t,e,l,s),e.memoizedState=r.state,i&&Ch(e,n,!0),e.child}function em(t){var e=t.stateNode;e.pendingContext?wh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wh(t,e.context,!1),Sc(t,e.containerInfo)}function Mh(t,e,n,r,i){return Kr(),mc(i),e.flags|=256,Me(t,e,n,r),e.child}var mu={dehydrated:null,treeContext:null,retryLane:0};function _u(t){return{baseLanes:t,cachePool:null,transitions:null}}function tm(t,e,n){var r=e.pendingProps,i=ue.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ne(ue,i&1),t===null)return uu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Rl(o,r,0,null),t=qn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=_u(n),e.memoizedState=mu,t):Pc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return H0(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=En(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=En(l,s):(s=qn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?_u(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=mu,r}return s=t.child,t=s.sibling,r=En(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Pc(t,e){return e=Rl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Js(t,e,n,r){return r!==null&&mc(r),Qr(e,t.child,null,n),t=Pc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function H0(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=pa(Error(E(422))),Js(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Rl({mode:"visible",children:r.children},i,0,null),s=qn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Qr(e,t.child,null,o),e.child.memoizedState=_u(o),e.memoizedState=mu,s);if(!(e.mode&1))return Js(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(E(419)),r=pa(s,r,void 0),Js(t,e,o,r)}if(l=(o&t.childLanes)!==0,He||l){if(r=ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Kt(t,i),St(r,t,i,-1))}return Fc(),r=pa(Error(E(421))),Js(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=nw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Je=vn(i.nextSibling),Ze=e,oe=!0,gt=null,t!==null&&(st[ot++]=jt,st[ot++]=zt,st[ot++]=Zn,jt=t.id,zt=t.overflow,Zn=e),e=Pc(e,r.children),e.flags|=4096,e)}function jh(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),cu(t.return,e,n)}function ga(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function nm(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Me(t,e,r.children,n),r=ue.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jh(t,n,e);else if(t.tag===19)jh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ne(ue,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Uo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ga(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Uo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ga(e,!0,n,null,s);break;case"together":ga(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function go(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Qt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),tr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=En(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=En(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $0(t,e,n){switch(e.tag){case 3:em(e),Kr();break;case 5:Rg(e);break;case 1:Ke(e.type)&&Oo(e);break;case 4:Sc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ne(Mo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ne(ue,ue.current&1),e.flags|=128,null):n&e.child.childLanes?tm(t,e,n):(ne(ue,ue.current&1),t=Qt(t,e,n),t!==null?t.sibling:null);ne(ue,ue.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return nm(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(ue,ue.current),r)break;return null;case 22:case 23:return e.lanes=0,Jg(t,e,n)}return Qt(t,e,n)}var rm,yu,im,sm;rm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yu=function(){};im=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Vn(Nt.current);var s=null;switch(n){case"input":i=Ua(t,i),r=Ua(t,r),s=[];break;case"select":i=de({},i,{value:void 0}),r=de({},r,{value:void 0}),s=[];break;case"textarea":i=Ha(t,i),r=Ha(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Do)}Va(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Yi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Yi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&re("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};sm=function(t,e,n,r){n!==r&&(e.flags|=4)};function Si(t,e){if(!oe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function De(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function V0(t,e,n){var r=e.pendingProps;switch(gc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(e),null;case 1:return Ke(e.type)&&bo(),De(e),null;case 3:return r=e.stateNode,Yr(),se(Ge),se(Le),xc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(qs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,gt!==null&&(Iu(gt),gt=null))),yu(t,e),De(e),null;case 5:Ec(e);var i=Vn(ls.current);if(n=e.type,t!==null&&e.stateNode!=null)im(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return De(e),null}if(t=Vn(Nt.current),qs(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[At]=e,r[ss]=s,t=(e.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(i=0;i<bi.length;i++)re(bi[i],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":Kd(r,s),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},re("invalid",r);break;case"textarea":Yd(r,s),re("invalid",r)}Va(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ys(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ys(r.textContent,l,t),i=["children",""+l]):Yi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&re("scroll",r)}switch(n){case"input":Bs(r),Qd(r,s,!0);break;case"textarea":Bs(r),qd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Do)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=bp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[At]=e,t[ss]=r,rm(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ga(n,r),n){case"dialog":re("cancel",t),re("close",t),i=r;break;case"iframe":case"object":case"embed":re("load",t),i=r;break;case"video":case"audio":for(i=0;i<bi.length;i++)re(bi[i],t);i=r;break;case"source":re("error",t),i=r;break;case"img":case"image":case"link":re("error",t),re("load",t),i=r;break;case"details":re("toggle",t),i=r;break;case"input":Kd(t,r),i=Ua(t,r),re("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=de({},r,{value:void 0}),re("invalid",t);break;case"textarea":Yd(t,r),i=Ha(t,r),re("invalid",t);break;default:i=r}Va(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Fp(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Op(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&qi(t,a):typeof a=="number"&&qi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Yi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&re("scroll",t):a!=null&&ec(t,s,a,o))}switch(n){case"input":Bs(t),Qd(t,r,!1);break;case"textarea":Bs(t),qd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Rn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?br(t,!!r.multiple,s,!1):r.defaultValue!=null&&br(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Do)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return De(e),null;case 6:if(t&&e.stateNode!=null)sm(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=Vn(ls.current),Vn(Nt.current),qs(e)){if(r=e.stateNode,n=e.memoizedProps,r[At]=e,(s=r.nodeValue!==n)&&(t=Ze,t!==null))switch(t.tag){case 3:Ys(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ys(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[At]=e,e.stateNode=r}return De(e),null;case 13:if(se(ue),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(oe&&Je!==null&&e.mode&1&&!(e.flags&128))Eg(),Kr(),e.flags|=98560,s=!1;else if(s=qs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[At]=e}else Kr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;De(e),s=!1}else gt!==null&&(Iu(gt),gt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ue.current&1?ve===0&&(ve=3):Fc())),e.updateQueue!==null&&(e.flags|=4),De(e),null);case 4:return Yr(),yu(t,e),t===null&&rs(e.stateNode.containerInfo),De(e),null;case 10:return vc(e.type._context),De(e),null;case 17:return Ke(e.type)&&bo(),De(e),null;case 19:if(se(ue),s=e.memoizedState,s===null)return De(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Si(s,!1);else{if(ve!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Uo(t),o!==null){for(e.flags|=128,Si(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ne(ue,ue.current&1|2),e.child}t=t.sibling}s.tail!==null&&pe()>Xr&&(e.flags|=128,r=!0,Si(s,!1),e.lanes=4194304)}else{if(!r)if(t=Uo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Si(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!oe)return De(e),null}else 2*pe()-s.renderingStartTime>Xr&&n!==1073741824&&(e.flags|=128,r=!0,Si(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=pe(),e.sibling=null,n=ue.current,ne(ue,r?n&1|2:n&1),e):(De(e),null);case 22:case 23:return Lc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Xe&1073741824&&(De(e),e.subtreeFlags&6&&(e.flags|=8192)):De(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function G0(t,e){switch(gc(e),e.tag){case 1:return Ke(e.type)&&bo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Yr(),se(Ge),se(Le),xc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ec(e),null;case 13:if(se(ue),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));Kr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return se(ue),null;case 4:return Yr(),null;case 10:return vc(e.type._context),null;case 22:case 23:return Lc(),null;case 24:return null;default:return null}}var Zs=!1,be=!1,K0=typeof WeakSet=="function"?WeakSet:Set,O=null;function Pr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(t,e,r)}else n.current=null}function vu(t,e,n){try{n()}catch(r){he(t,e,r)}}var zh=!1;function Q0(t,e){if(nu=Ao,t=cg(),fc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,f=0,h=t,d=null;t:for(;;){for(var y;h!==n||i!==0&&h.nodeType!==3||(l=o+i),h!==s||r!==0&&h.nodeType!==3||(a=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(y=h.firstChild)!==null;)d=h,h=y;for(;;){if(h===t)break t;if(d===n&&++u===i&&(l=o),d===s&&++f===r&&(a=o),(y=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=y}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ru={focusedElem:t,selectionRange:n},Ao=!1,O=e;O!==null;)if(e=O,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,O=t;else for(;O!==null;){e=O;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var C=g.memoizedProps,P=g.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?C:ft(e.type,C),P);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(S){he(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,O=t;break}O=e.return}return g=zh,zh=!1,g}function Ui(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&vu(e,n,s)}i=i.next}while(i!==r)}}function Il(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function wu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function om(t){var e=t.alternate;e!==null&&(t.alternate=null,om(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[At],delete e[ss],delete e[ou],delete e[P0],delete e[N0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function lm(t){return t.tag===5||t.tag===3||t.tag===4}function Uh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Do));else if(r!==4&&(t=t.child,t!==null))for(Cu(t,e,n),t=t.sibling;t!==null;)Cu(t,e,n),t=t.sibling}function Su(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Su(t,e,n),t=t.sibling;t!==null;)Su(t,e,n),t=t.sibling}var Ie=null,pt=!1;function nn(t,e,n){for(n=n.child;n!==null;)am(t,e,n),n=n.sibling}function am(t,e,n){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(yl,n)}catch{}switch(n.tag){case 5:be||Pr(n,e);case 6:var r=Ie,i=pt;Ie=null,nn(t,e,n),Ie=r,pt=i,Ie!==null&&(pt?(t=Ie,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ie.removeChild(n.stateNode));break;case 18:Ie!==null&&(pt?(t=Ie,n=n.stateNode,t.nodeType===8?aa(t.parentNode,n):t.nodeType===1&&aa(t,n),es(t)):aa(Ie,n.stateNode));break;case 4:r=Ie,i=pt,Ie=n.stateNode.containerInfo,pt=!0,nn(t,e,n),Ie=r,pt=i;break;case 0:case 11:case 14:case 15:if(!be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&vu(n,e,o),i=i.next}while(i!==r)}nn(t,e,n);break;case 1:if(!be&&(Pr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){he(n,e,l)}nn(t,e,n);break;case 21:nn(t,e,n);break;case 22:n.mode&1?(be=(r=be)||n.memoizedState!==null,nn(t,e,n),be=r):nn(t,e,n);break;default:nn(t,e,n)}}function Bh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new K0),e.forEach(function(r){var i=rw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ht(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ie=l.stateNode,pt=!1;break e;case 3:Ie=l.stateNode.containerInfo,pt=!0;break e;case 4:Ie=l.stateNode.containerInfo,pt=!0;break e}l=l.return}if(Ie===null)throw Error(E(160));am(s,o,i),Ie=null,pt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){he(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)um(e,t),e=e.sibling}function um(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ht(e,t),Tt(t),r&4){try{Ui(3,t,t.return),Il(3,t)}catch(C){he(t,t.return,C)}try{Ui(5,t,t.return)}catch(C){he(t,t.return,C)}}break;case 1:ht(e,t),Tt(t),r&512&&n!==null&&Pr(n,n.return);break;case 5:if(ht(e,t),Tt(t),r&512&&n!==null&&Pr(n,n.return),t.flags&32){var i=t.stateNode;try{qi(i,"")}catch(C){he(t,t.return,C)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Np(i,s),Ga(l,o);var u=Ga(l,s);for(o=0;o<a.length;o+=2){var f=a[o],h=a[o+1];f==="style"?Fp(i,h):f==="dangerouslySetInnerHTML"?Op(i,h):f==="children"?qi(i,h):ec(i,f,h,u)}switch(l){case"input":Ba(i,s);break;case"textarea":Dp(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?br(i,!!s.multiple,y,!1):d!==!!s.multiple&&(s.defaultValue!=null?br(i,!!s.multiple,s.defaultValue,!0):br(i,!!s.multiple,s.multiple?[]:"",!1))}i[ss]=s}catch(C){he(t,t.return,C)}}break;case 6:if(ht(e,t),Tt(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(C){he(t,t.return,C)}}break;case 3:if(ht(e,t),Tt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{es(e.containerInfo)}catch(C){he(t,t.return,C)}break;case 4:ht(e,t),Tt(t);break;case 13:ht(e,t),Tt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(bc=pe())),r&4&&Bh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(be=(u=be)||f,ht(e,t),be=u):ht(e,t),Tt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(O=t,f=t.child;f!==null;){for(h=O=f;O!==null;){switch(d=O,y=d.child,d.tag){case 0:case 11:case 14:case 15:Ui(4,d,d.return);break;case 1:Pr(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(C){he(r,n,C)}}break;case 5:Pr(d,d.return);break;case 22:if(d.memoizedState!==null){Hh(h);continue}}y!==null?(y.return=d,O=y):Hh(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=h.stateNode,a=h.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Lp("display",o))}catch(C){he(t,t.return,C)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(C){he(t,t.return,C)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ht(e,t),Tt(t),r&4&&Bh(t);break;case 21:break;default:ht(e,t),Tt(t)}}function Tt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(lm(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(qi(i,""),r.flags&=-33);var s=Uh(t);Su(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Uh(t);Cu(t,l,o);break;default:throw Error(E(161))}}catch(a){he(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Y0(t,e,n){O=t,cm(t)}function cm(t,e,n){for(var r=(t.mode&1)!==0;O!==null;){var i=O,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Zs;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||be;l=Zs;var u=be;if(Zs=o,(be=a)&&!u)for(O=i;O!==null;)o=O,a=o.child,o.tag===22&&o.memoizedState!==null?$h(i):a!==null?(a.return=o,O=a):$h(i);for(;s!==null;)O=s,cm(s),s=s.sibling;O=i,Zs=l,be=u}Wh(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,O=s):Wh(t)}}function Wh(t){for(;O!==null;){var e=O;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:be||Il(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!be)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ft(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ih(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ih(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&es(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}be||e.flags&512&&wu(e)}catch(d){he(e,e.return,d)}}if(e===t){O=null;break}if(n=e.sibling,n!==null){n.return=e.return,O=n;break}O=e.return}}function Hh(t){for(;O!==null;){var e=O;if(e===t){O=null;break}var n=e.sibling;if(n!==null){n.return=e.return,O=n;break}O=e.return}}function $h(t){for(;O!==null;){var e=O;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Il(4,e)}catch(a){he(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){he(e,i,a)}}var s=e.return;try{wu(e)}catch(a){he(e,s,a)}break;case 5:var o=e.return;try{wu(e)}catch(a){he(e,o,a)}}}catch(a){he(e,e.return,a)}if(e===t){O=null;break}var l=e.sibling;if(l!==null){l.return=e.return,O=l;break}O=e.return}}var q0=Math.ceil,Ho=Zt.ReactCurrentDispatcher,Nc=Zt.ReactCurrentOwner,at=Zt.ReactCurrentBatchConfig,K=0,ke=null,ge=null,Re=0,Xe=0,Nr=bn(0),ve=0,ds=null,tr=0,Tl=0,Dc=0,Bi=null,We=null,bc=0,Xr=1/0,Lt=null,$o=!1,Eu=null,Cn=null,eo=!1,gn=null,Vo=0,Wi=0,xu=null,mo=-1,_o=0;function je(){return K&6?pe():mo!==-1?mo:mo=pe()}function Sn(t){return t.mode&1?K&2&&Re!==0?Re&-Re:b0.transition!==null?(_o===0&&(_o=Qp()),_o):(t=q,t!==0||(t=window.event,t=t===void 0?16:tg(t.type)),t):1}function St(t,e,n,r){if(50<Wi)throw Wi=0,xu=null,Error(E(185));Ss(t,n,r),(!(K&2)||t!==ke)&&(t===ke&&(!(K&2)&&(Tl|=n),ve===4&&cn(t,Re)),Qe(t,r),n===1&&K===0&&!(e.mode&1)&&(Xr=pe()+500,El&&On()))}function Qe(t,e){var n=t.callbackNode;bv(t,e);var r=Ro(t,t===ke?Re:0);if(r===0)n!==null&&Zd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Zd(n),e===1)t.tag===0?D0(Vh.bind(null,t)):wg(Vh.bind(null,t)),R0(function(){!(K&6)&&On()}),n=null;else{switch(Yp(r)){case 1:n=sc;break;case 4:n=Gp;break;case 16:n=To;break;case 536870912:n=Kp;break;default:n=To}n=ym(n,dm.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function dm(t,e){if(mo=-1,_o=0,K&6)throw Error(E(327));var n=t.callbackNode;if(jr()&&t.callbackNode!==n)return null;var r=Ro(t,t===ke?Re:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Go(t,r);else{e=r;var i=K;K|=2;var s=fm();(ke!==t||Re!==e)&&(Lt=null,Xr=pe()+500,Yn(t,e));do try{Z0();break}catch(l){hm(t,l)}while(!0);yc(),Ho.current=s,K=i,ge!==null?e=0:(ke=null,Re=0,e=ve)}if(e!==0){if(e===2&&(i=Xa(t),i!==0&&(r=i,e=ku(t,i))),e===1)throw n=ds,Yn(t,0),cn(t,r),Qe(t,pe()),n;if(e===6)cn(t,r);else{if(i=t.current.alternate,!(r&30)&&!X0(i)&&(e=Go(t,r),e===2&&(s=Xa(t),s!==0&&(r=s,e=ku(t,s))),e===1))throw n=ds,Yn(t,0),cn(t,r),Qe(t,pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:zn(t,We,Lt);break;case 3:if(cn(t,r),(r&130023424)===r&&(e=bc+500-pe(),10<e)){if(Ro(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){je(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=su(zn.bind(null,t,We,Lt),e);break}zn(t,We,Lt);break;case 4:if(cn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ct(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*q0(r/1960))-r,10<r){t.timeoutHandle=su(zn.bind(null,t,We,Lt),r);break}zn(t,We,Lt);break;case 5:zn(t,We,Lt);break;default:throw Error(E(329))}}}return Qe(t,pe()),t.callbackNode===n?dm.bind(null,t):null}function ku(t,e){var n=Bi;return t.current.memoizedState.isDehydrated&&(Yn(t,e).flags|=256),t=Go(t,e),t!==2&&(e=We,We=n,e!==null&&Iu(e)),t}function Iu(t){We===null?We=t:We.push.apply(We,t)}function X0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!kt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cn(t,e){for(e&=~Dc,e&=~Tl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ct(e),r=1<<n;t[n]=-1,e&=~r}}function Vh(t){if(K&6)throw Error(E(327));jr();var e=Ro(t,0);if(!(e&1))return Qe(t,pe()),null;var n=Go(t,e);if(t.tag!==0&&n===2){var r=Xa(t);r!==0&&(e=r,n=ku(t,r))}if(n===1)throw n=ds,Yn(t,0),cn(t,e),Qe(t,pe()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zn(t,We,Lt),Qe(t,pe()),null}function Oc(t,e){var n=K;K|=1;try{return t(e)}finally{K=n,K===0&&(Xr=pe()+500,El&&On())}}function nr(t){gn!==null&&gn.tag===0&&!(K&6)&&jr();var e=K;K|=1;var n=at.transition,r=q;try{if(at.transition=null,q=1,t)return t()}finally{q=r,at.transition=n,K=e,!(K&6)&&On()}}function Lc(){Xe=Nr.current,se(Nr)}function Yn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,T0(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch(gc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bo();break;case 3:Yr(),se(Ge),se(Le),xc();break;case 5:Ec(r);break;case 4:Yr();break;case 13:se(ue);break;case 19:se(ue);break;case 10:vc(r.type._context);break;case 22:case 23:Lc()}n=n.return}if(ke=t,ge=t=En(t.current,null),Re=Xe=e,ve=0,ds=null,Dc=Tl=tr=0,We=Bi=null,$n!==null){for(e=0;e<$n.length;e++)if(n=$n[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}$n=null}return t}function hm(t,e){do{var n=ge;try{if(yc(),fo.current=Wo,Bo){for(var r=ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Bo=!1}if(er=0,Se=_e=ce=null,zi=!1,as=0,Nc.current=null,n===null||n.return===null){ve=1,ds=e,ge=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Re,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,f=l,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var y=Dh(o);if(y!==null){y.flags&=-257,bh(y,o,l,s,e),y.mode&1&&Nh(s,u,e),e=y,a=u;var g=e.updateQueue;if(g===null){var C=new Set;C.add(a),e.updateQueue=C}else g.add(a);break e}else{if(!(e&1)){Nh(s,u,e),Fc();break e}a=Error(E(426))}}else if(oe&&l.mode&1){var P=Dh(o);if(P!==null){!(P.flags&65536)&&(P.flags|=256),bh(P,o,l,s,e),mc(qr(a,l));break e}}s=a=qr(a,l),ve!==4&&(ve=2),Bi===null?Bi=[s]:Bi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Yg(s,a,e);kh(s,m);break e;case 1:l=a;var p=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Cn===null||!Cn.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=qg(s,l,e);kh(s,S);break e}}s=s.return}while(s!==null)}gm(n)}catch(A){e=A,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(!0)}function fm(){var t=Ho.current;return Ho.current=Wo,t===null?Wo:t}function Fc(){(ve===0||ve===3||ve===2)&&(ve=4),ke===null||!(tr&268435455)&&!(Tl&268435455)||cn(ke,Re)}function Go(t,e){var n=K;K|=2;var r=fm();(ke!==t||Re!==e)&&(Lt=null,Yn(t,e));do try{J0();break}catch(i){hm(t,i)}while(!0);if(yc(),K=n,Ho.current=r,ge!==null)throw Error(E(261));return ke=null,Re=0,ve}function J0(){for(;ge!==null;)pm(ge)}function Z0(){for(;ge!==null&&!xv();)pm(ge)}function pm(t){var e=_m(t.alternate,t,Xe);t.memoizedProps=t.pendingProps,e===null?gm(t):ge=e,Nc.current=null}function gm(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=G0(n,e),n!==null){n.flags&=32767,ge=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ve=6,ge=null;return}}else if(n=V0(n,e,Xe),n!==null){ge=n;return}if(e=e.sibling,e!==null){ge=e;return}ge=e=t}while(e!==null);ve===0&&(ve=5)}function zn(t,e,n){var r=q,i=at.transition;try{at.transition=null,q=1,ew(t,e,n,r)}finally{at.transition=i,q=r}return null}function ew(t,e,n,r){do jr();while(gn!==null);if(K&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ov(t,s),t===ke&&(ge=ke=null,Re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||eo||(eo=!0,ym(To,function(){return jr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=at.transition,at.transition=null;var o=q;q=1;var l=K;K|=4,Nc.current=null,Q0(t,n),um(n,t),w0(ru),Ao=!!nu,ru=nu=null,t.current=n,Y0(n),kv(),K=l,q=o,at.transition=s}else t.current=n;if(eo&&(eo=!1,gn=t,Vo=i),s=t.pendingLanes,s===0&&(Cn=null),Rv(n.stateNode),Qe(t,pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if($o)throw $o=!1,t=Eu,Eu=null,t;return Vo&1&&t.tag!==0&&jr(),s=t.pendingLanes,s&1?t===xu?Wi++:(Wi=0,xu=t):Wi=0,On(),null}function jr(){if(gn!==null){var t=Yp(Vo),e=at.transition,n=q;try{if(at.transition=null,q=16>t?16:t,gn===null)var r=!1;else{if(t=gn,gn=null,Vo=0,K&6)throw Error(E(331));var i=K;for(K|=4,O=t.current;O!==null;){var s=O,o=s.child;if(O.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(O=u;O!==null;){var f=O;switch(f.tag){case 0:case 11:case 15:Ui(8,f,s)}var h=f.child;if(h!==null)h.return=f,O=h;else for(;O!==null;){f=O;var d=f.sibling,y=f.return;if(om(f),f===u){O=null;break}if(d!==null){d.return=y,O=d;break}O=y}}}var g=s.alternate;if(g!==null){var C=g.child;if(C!==null){g.child=null;do{var P=C.sibling;C.sibling=null,C=P}while(C!==null)}}O=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,O=o;else e:for(;O!==null;){if(s=O,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ui(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,O=m;break e}O=s.return}}var p=t.current;for(O=p;O!==null;){o=O;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,O=_;else e:for(o=p;O!==null;){if(l=O,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Il(9,l)}}catch(A){he(l,l.return,A)}if(l===o){O=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,O=S;break e}O=l.return}}if(K=i,On(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(yl,t)}catch{}r=!0}return r}finally{q=n,at.transition=e}}return!1}function Gh(t,e,n){e=qr(n,e),e=Yg(t,e,1),t=wn(t,e,1),e=je(),t!==null&&(Ss(t,1,e),Qe(t,e))}function he(t,e,n){if(t.tag===3)Gh(t,t,n);else for(;e!==null;){if(e.tag===3){Gh(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cn===null||!Cn.has(r))){t=qr(n,t),t=qg(e,t,1),e=wn(e,t,1),t=je(),e!==null&&(Ss(e,1,t),Qe(e,t));break}}e=e.return}}function tw(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=je(),t.pingedLanes|=t.suspendedLanes&n,ke===t&&(Re&n)===n&&(ve===4||ve===3&&(Re&130023424)===Re&&500>pe()-bc?Yn(t,0):Dc|=n),Qe(t,e)}function mm(t,e){e===0&&(t.mode&1?(e=$s,$s<<=1,!($s&130023424)&&($s=4194304)):e=1);var n=je();t=Kt(t,e),t!==null&&(Ss(t,e,n),Qe(t,n))}function nw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),mm(t,n)}function rw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),mm(t,n)}var _m;_m=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ge.current)He=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return He=!1,$0(t,e,n);He=!!(t.flags&131072)}else He=!1,oe&&e.flags&1048576&&Cg(e,Fo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;go(t,e),t=e.pendingProps;var i=Gr(e,Le.current);Mr(e,n),i=Ic(null,e,r,t,i,n);var s=Tc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ke(r)?(s=!0,Oo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Cc(e),i.updater=kl,e.stateNode=i,i._reactInternals=e,hu(e,r,t,n),e=gu(null,e,r,!0,s,n)):(e.tag=0,oe&&s&&pc(e),Me(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(go(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=sw(r),t=ft(r,t),i){case 0:e=pu(null,e,r,t,n);break e;case 1:e=Fh(null,e,r,t,n);break e;case 11:e=Oh(null,e,r,t,n);break e;case 14:e=Lh(null,e,r,ft(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ft(r,i),pu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ft(r,i),Fh(t,e,r,i,n);case 3:e:{if(em(e),t===null)throw Error(E(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Tg(t,e),zo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=qr(Error(E(423)),e),e=Mh(t,e,r,n,i);break e}else if(r!==i){i=qr(Error(E(424)),e),e=Mh(t,e,r,n,i);break e}else for(Je=vn(e.stateNode.containerInfo.firstChild),Ze=e,oe=!0,gt=null,n=kg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Kr(),r===i){e=Qt(t,e,n);break e}Me(t,e,r,n)}e=e.child}return e;case 5:return Rg(e),t===null&&uu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,iu(r,i)?o=null:s!==null&&iu(r,s)&&(e.flags|=32),Zg(t,e),Me(t,e,o,n),e.child;case 6:return t===null&&uu(e),null;case 13:return tm(t,e,n);case 4:return Sc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Qr(e,null,r,n):Me(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ft(r,i),Oh(t,e,r,i,n);case 7:return Me(t,e,e.pendingProps,n),e.child;case 8:return Me(t,e,e.pendingProps.children,n),e.child;case 12:return Me(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ne(Mo,r._currentValue),r._currentValue=o,s!==null)if(kt(s.value,o)){if(s.children===i.children&&!Ge.current){e=Qt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Ht(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?a.next=a:(a.next=f.next,f.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),cu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),cu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Me(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Mr(e,n),i=ut(i),r=r(i),e.flags|=1,Me(t,e,r,n),e.child;case 14:return r=e.type,i=ft(r,e.pendingProps),i=ft(r.type,i),Lh(t,e,r,i,n);case 15:return Xg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ft(r,i),go(t,e),e.tag=1,Ke(r)?(t=!0,Oo(e)):t=!1,Mr(e,n),Qg(e,r,i),hu(e,r,i,n),gu(null,e,r,!0,t,n);case 19:return nm(t,e,n);case 22:return Jg(t,e,n)}throw Error(E(156,e.tag))};function ym(t,e){return Vp(t,e)}function iw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(t,e,n,r){return new iw(t,e,n,r)}function Mc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sw(t){if(typeof t=="function")return Mc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nc)return 11;if(t===rc)return 14}return 2}function En(t,e){var n=t.alternate;return n===null?(n=lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Mc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Cr:return qn(n.children,i,s,e);case tc:o=8,i|=8;break;case Fa:return t=lt(12,n,e,i|2),t.elementType=Fa,t.lanes=s,t;case Ma:return t=lt(13,n,e,i),t.elementType=Ma,t.lanes=s,t;case ja:return t=lt(19,n,e,i),t.elementType=ja,t.lanes=s,t;case Rp:return Rl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ip:o=10;break e;case Tp:o=9;break e;case nc:o=11;break e;case rc:o=14;break e;case ln:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=lt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function qn(t,e,n,r){return t=lt(7,t,r,e),t.lanes=n,t}function Rl(t,e,n,r){return t=lt(22,t,r,e),t.elementType=Rp,t.lanes=n,t.stateNode={isHidden:!1},t}function ma(t,e,n){return t=lt(6,t,null,e),t.lanes=n,t}function _a(t,e,n){return e=lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ow(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xl(0),this.expirationTimes=Xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function jc(t,e,n,r,i,s,o,l,a){return t=new ow(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=lt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cc(s),t}function lw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function vm(t){if(!t)return An;t=t._reactInternals;e:{if(dr(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ke(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(Ke(n))return vg(t,n,e)}return e}function wm(t,e,n,r,i,s,o,l,a){return t=jc(n,r,!0,t,i,s,o,l,a),t.context=vm(null),n=t.current,r=je(),i=Sn(n),s=Ht(r,i),s.callback=e??null,wn(n,s,i),t.current.lanes=i,Ss(t,i,r),Qe(t,r),t}function Al(t,e,n,r){var i=e.current,s=je(),o=Sn(i);return n=vm(n),e.context===null?e.context=n:e.pendingContext=n,e=Ht(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=wn(i,e,o),t!==null&&(St(t,i,o,s),ho(t,i,o)),o}function Ko(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Kh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zc(t,e){Kh(t,e),(t=t.alternate)&&Kh(t,e)}function aw(){return null}var Cm=typeof reportError=="function"?reportError:function(t){console.error(t)};function Uc(t){this._internalRoot=t}Pl.prototype.render=Uc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));Al(t,e,null,null)};Pl.prototype.unmount=Uc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;nr(function(){Al(null,t,null,null)}),e[Gt]=null}};function Pl(t){this._internalRoot=t}Pl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Jp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<un.length&&e!==0&&e<un[n].priority;n++);un.splice(n,0,t),n===0&&eg(t)}};function Bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Nl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qh(){}function uw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ko(o);s.call(u)}}var o=wm(e,r,t,0,null,!1,!1,"",Qh);return t._reactRootContainer=o,t[Gt]=o.current,rs(t.nodeType===8?t.parentNode:t),nr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Ko(a);l.call(u)}}var a=jc(t,0,!1,null,null,!1,!1,"",Qh);return t._reactRootContainer=a,t[Gt]=a.current,rs(t.nodeType===8?t.parentNode:t),nr(function(){Al(e,a,n,r)}),a}function Dl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Ko(o);l.call(a)}}Al(e,o,t,i)}else o=uw(n,e,t,i,r);return Ko(o)}qp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Di(e.pendingLanes);n!==0&&(oc(e,n|1),Qe(e,pe()),!(K&6)&&(Xr=pe()+500,On()))}break;case 13:nr(function(){var r=Kt(t,1);if(r!==null){var i=je();St(r,t,1,i)}}),zc(t,1)}};lc=function(t){if(t.tag===13){var e=Kt(t,134217728);if(e!==null){var n=je();St(e,t,134217728,n)}zc(t,134217728)}};Xp=function(t){if(t.tag===13){var e=Sn(t),n=Kt(t,e);if(n!==null){var r=je();St(n,t,e,r)}zc(t,e)}};Jp=function(){return q};Zp=function(t,e){var n=q;try{return q=t,e()}finally{q=n}};Qa=function(t,e,n){switch(e){case"input":if(Ba(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Sl(r);if(!i)throw Error(E(90));Pp(r),Ba(r,i)}}}break;case"textarea":Dp(t,n);break;case"select":e=n.value,e!=null&&br(t,!!n.multiple,e,!1)}};zp=Oc;Up=nr;var cw={usingClientEntryPoint:!1,Events:[xs,kr,Sl,Mp,jp,Oc]},Ei={findFiberByHostInstance:Hn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dw={bundleType:Ei.bundleType,version:Ei.version,rendererPackageName:Ei.rendererPackageName,rendererConfig:Ei.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Hp(t),t===null?null:t.stateNode},findFiberByHostInstance:Ei.findFiberByHostInstance||aw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var to=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!to.isDisabled&&to.supportsFiber)try{yl=to.inject(dw),Pt=to}catch{}}tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cw;tt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bc(e))throw Error(E(200));return lw(t,e,null,n)};tt.createRoot=function(t,e){if(!Bc(t))throw Error(E(299));var n=!1,r="",i=Cm;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=jc(t,1,!1,null,null,n,!1,r,i),t[Gt]=e.current,rs(t.nodeType===8?t.parentNode:t),new Uc(e)};tt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=Hp(e),t=t===null?null:t.stateNode,t};tt.flushSync=function(t){return nr(t)};tt.hydrate=function(t,e,n){if(!Nl(e))throw Error(E(200));return Dl(null,t,e,!0,n)};tt.hydrateRoot=function(t,e,n){if(!Bc(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Cm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=wm(e,null,t,1,n??null,i,!1,s,o),t[Gt]=e.current,rs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Pl(e)};tt.render=function(t,e,n){if(!Nl(e))throw Error(E(200));return Dl(null,t,e,!1,n)};tt.unmountComponentAtNode=function(t){if(!Nl(t))throw Error(E(40));return t._reactRootContainer?(nr(function(){Dl(null,null,t,!1,function(){t._reactRootContainer=null,t[Gt]=null})}),!0):!1};tt.unstable_batchedUpdates=Oc;tt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Nl(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return Dl(t,e,n,!1,r)};tt.version="18.3.1-next-f1338f8080-20240426";function Sm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sm)}catch(t){console.error(t)}}Sm(),Sp.exports=tt;var hw=Sp.exports,Yh=hw;Oa.createRoot=Yh.createRoot,Oa.hydrateRoot=Yh.hydrateRoot;const fw=()=>{};var qh={};/**
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
 */const Em={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const k=function(t,e){if(!t)throw li(e)},li=function(t){return new Error("Firebase Database ("+Em.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const xm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},pw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Wc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,f=s>>2,h=(s&3)<<4|l>>4;let d=(l&15)<<2|u>>6,y=u&63;a||(y=64,o||(d=64)),r.push(n[f],n[h],n[d],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||h==null)throw new gw;const d=s<<2|l>>4;if(r.push(d),u!==64){const y=l<<4&240|u>>2;if(r.push(y),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class gw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const km=function(t){const e=xm(t);return Wc.encodeByteArray(e,!0)},Qo=function(t){return km(t).replace(/\./g,"")},Yo=function(t){try{return Wc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function mw(t){return Im(void 0,t)}function Im(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!_w(n)||(t[n]=Im(t[n],e[n]));return t}function _w(t){return t!=="__proto__"}/**
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
 */function yw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vw=()=>yw().__FIREBASE_DEFAULTS__,ww=()=>{if(typeof process>"u"||typeof qh>"u")return;const t=qh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Cw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Yo(t[1]);return e&&JSON.parse(e)},Hc=()=>{try{return fw()||vw()||ww()||Cw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Tm=t=>{var e,n;return(n=(e=Hc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Sw=t=>{const e=Tm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Rm=()=>{var t;return(t=Hc())==null?void 0:t.config},Am=t=>{var e;return(e=Hc())==null?void 0:e[`_${t}`]};/**
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
 */class bl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ew(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Qo(JSON.stringify(n)),Qo(JSON.stringify(o)),""].join(".")}/**
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
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $c(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function xw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Pm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Iw(){const t=ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Tw(){return Em.NODE_ADMIN===!0}function Rw(){try{return typeof indexedDB=="object"}catch{return!1}}function Aw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Pw="FirebaseError";class Ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Pw,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Is.prototype.create)}}class Is{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Nw(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Ln(i,l,r)}}function Nw(t,e){return t.replace(Dw,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Dw=/\{\$([^}]+)}/g;/**
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
 */function hs(t){return JSON.parse(t)}function xe(t){return JSON.stringify(t)}/**
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
 */const Nm=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=hs(Yo(s[0])||""),n=hs(Yo(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},bw=function(t){const e=Nm(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ow=function(t){const e=Nm(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function en(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Jr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Tu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function rr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Xh(s)&&Xh(o)){if(!rr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Xh(t){return t!==null&&typeof t=="object"}/**
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
 */function ai(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class Lw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,f;for(let h=0;h<80;h++){h<40?h<20?(u=l^s&(o^l),f=1518500249):(u=s^o^l,f=1859775393):h<60?(u=s&o|l&(s|o),f=2400959708):(u=s^o^l,f=3395469782);const d=(i<<5|i>>>27)+u+a+f+r[h]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Fw(t,e){const n=new Mw(t,e);return n.subscribe.bind(n)}class Mw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");jw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ya),i.error===void 0&&(i.error=ya),i.complete===void 0&&(i.complete=ya);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ya(){}function Vc(t,e){return`${t} failed: ${e} argument `}/**
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
 */const zw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,k(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ol=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function rt(t){return t&&t._delegate?t._delegate:t}/**
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
 */function Ts(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Dm(t){return(await fetch(t,{credentials:"include"})).ok}class ir{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Un="[DEFAULT]";/**
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
 */class Uw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new bl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ww(e))try{this.getOrInitializeService({instanceIdentifier:Un})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Un){return this.instances.has(e)}getOptions(e=Un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Bw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Un){return this.component?this.component.multipleInstances?e:Un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bw(t){return t===Un?void 0:t}function Ww(t){return t.instantiationMode==="EAGER"}/**
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
 */class Hw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Uw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const $w={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},Vw=J.INFO,Gw={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},Kw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Gw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gc{constructor(e){this.name=e,this._logLevel=Vw,this._logHandler=Kw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$w[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const Qw=(t,e)=>e.some(n=>t instanceof n);let Jh,Zh;function Yw(){return Jh||(Jh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qw(){return Zh||(Zh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bm=new WeakMap,Ru=new WeakMap,Om=new WeakMap,va=new WeakMap,Kc=new WeakMap;function Xw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(xn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&bm.set(n,t)}).catch(()=>{}),Kc.set(e,t),e}function Jw(t){if(Ru.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ru.set(t,e)}let Au={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ru.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Om.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Zw(t){Au=t(Au)}function eC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(wa(this),e,...n);return Om.set(r,e.sort?e.sort():[e]),xn(r)}:qw().includes(t)?function(...e){return t.apply(wa(this),e),xn(bm.get(this))}:function(...e){return xn(t.apply(wa(this),e))}}function tC(t){return typeof t=="function"?eC(t):(t instanceof IDBTransaction&&Jw(t),Qw(t,Yw())?new Proxy(t,Au):t)}function xn(t){if(t instanceof IDBRequest)return Xw(t);if(va.has(t))return va.get(t);const e=tC(t);return e!==t&&(va.set(t,e),Kc.set(e,t)),e}const wa=t=>Kc.get(t);function nC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=xn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(xn(o.result),a.oldVersion,a.newVersion,xn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const rC=["get","getKey","getAll","getAllKeys","count"],iC=["put","add","delete","clear"],Ca=new Map;function ef(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ca.get(e))return Ca.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=iC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||rC.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Ca.set(e,s),s}Zw(t=>({...t,get:(e,n,r)=>ef(e,n)||t.get(e,n,r),has:(e,n)=>!!ef(e,n)||t.has(e,n)}));/**
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
 */class sC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(oC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function oC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pu="@firebase/app",tf="0.14.13";/**
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
 */const Yt=new Gc("@firebase/app"),lC="@firebase/app-compat",aC="@firebase/analytics-compat",uC="@firebase/analytics",cC="@firebase/app-check-compat",dC="@firebase/app-check",hC="@firebase/auth",fC="@firebase/auth-compat",pC="@firebase/database",gC="@firebase/data-connect",mC="@firebase/database-compat",_C="@firebase/functions",yC="@firebase/functions-compat",vC="@firebase/installations",wC="@firebase/installations-compat",CC="@firebase/messaging",SC="@firebase/messaging-compat",EC="@firebase/performance",xC="@firebase/performance-compat",kC="@firebase/remote-config",IC="@firebase/remote-config-compat",TC="@firebase/storage",RC="@firebase/storage-compat",AC="@firebase/firestore",PC="@firebase/ai",NC="@firebase/firestore-compat",DC="firebase",bC="12.14.0";/**
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
 */const Nu="[DEFAULT]",OC={[Pu]:"fire-core",[lC]:"fire-core-compat",[uC]:"fire-analytics",[aC]:"fire-analytics-compat",[dC]:"fire-app-check",[cC]:"fire-app-check-compat",[hC]:"fire-auth",[fC]:"fire-auth-compat",[pC]:"fire-rtdb",[gC]:"fire-data-connect",[mC]:"fire-rtdb-compat",[_C]:"fire-fn",[yC]:"fire-fn-compat",[vC]:"fire-iid",[wC]:"fire-iid-compat",[CC]:"fire-fcm",[SC]:"fire-fcm-compat",[EC]:"fire-perf",[xC]:"fire-perf-compat",[kC]:"fire-rc",[IC]:"fire-rc-compat",[TC]:"fire-gcs",[RC]:"fire-gcs-compat",[AC]:"fire-fst",[NC]:"fire-fst-compat",[PC]:"fire-vertex","fire-js":"fire-js",[DC]:"fire-js-all"};/**
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
 */const Xo=new Map,LC=new Map,Du=new Map;function nf(t,e){try{t.container.addComponent(e)}catch(n){Yt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zr(t){const e=t.name;if(Du.has(e))return Yt.debug(`There were multiple attempts to register component ${e}.`),!1;Du.set(e,t);for(const n of Xo.values())nf(n,t);for(const n of LC.values())nf(n,t);return!0}function Qc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function mt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const FC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kn=new Is("app","Firebase",FC);/**
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
 */class MC{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kn.create("app-deleted",{appName:this._name})}}/**
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
 */const ui=bC;function Lm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Nu,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw kn.create("bad-app-name",{appName:String(i)});if(n||(n=Rm()),!n)throw kn.create("no-options");const s=Xo.get(i);if(s){if(rr(n,s.options)&&rr(r,s.config))return s;throw kn.create("duplicate-app",{appName:i})}const o=new Hw(i);for(const a of Du.values())o.addComponent(a);const l=new MC(n,r,o);return Xo.set(i,l),l}function Fm(t=Nu){const e=Xo.get(t);if(!e&&t===Nu&&Rm())return Lm();if(!e)throw kn.create("no-app",{appName:t});return e}function In(t,e,n){let r=OC[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yt.warn(o.join(" "));return}Zr(new ir(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const jC="firebase-heartbeat-database",zC=1,fs="firebase-heartbeat-store";let Sa=null;function Mm(){return Sa||(Sa=nC(jC,zC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(fs)}catch(n){console.warn(n)}}}}).catch(t=>{throw kn.create("idb-open",{originalErrorMessage:t.message})})),Sa}async function UC(t){try{const n=(await Mm()).transaction(fs),r=await n.objectStore(fs).get(jm(t));return await n.done,r}catch(e){if(e instanceof Ln)Yt.warn(e.message);else{const n=kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yt.warn(n.message)}}}async function rf(t,e){try{const r=(await Mm()).transaction(fs,"readwrite");await r.objectStore(fs).put(e,jm(t)),await r.done}catch(n){if(n instanceof Ln)Yt.warn(n.message);else{const r=kn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Yt.warn(r.message)}}}function jm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const BC=1024,WC=30;class HC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new VC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=sf();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>WC){const o=GC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Yt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=sf(),{heartbeatsToSend:r,unsentEntries:i}=$C(this._heartbeatsCache.heartbeats),s=Qo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Yt.warn(n),""}}}function sf(){return new Date().toISOString().substring(0,10)}function $C(t,e=BC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),of(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),of(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class VC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rw()?Aw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await UC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return rf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return rf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function of(t){return Qo(JSON.stringify({version:2,heartbeats:t})).length}function GC(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function KC(t){Zr(new ir("platform-logger",e=>new sC(e),"PRIVATE")),Zr(new ir("heartbeat",e=>new HC(e),"PRIVATE")),In(Pu,tf,t),In(Pu,tf,"esm2020"),In("fire-js","")}KC("");var QC="firebase",YC="12.14.0";/**
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
 */In(QC,YC,"app");var lf={};const af="@firebase/database",uf="1.1.3";/**
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
 */let zm="";function qC(t){zm=t}/**
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
 */class XC{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),xe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:hs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class JC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return en(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Um=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new XC(e)}}catch{}return new JC},Gn=Um("localStorage"),ZC=Um("sessionStorage");/**
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
 */const zr=new Gc("@firebase/database"),eS=function(){let t=1;return function(){return t++}}(),Bm=function(t){const e=zw(t),n=new Lw;n.update(e);const r=n.digest();return Wc.encodeByteArray(r)},Rs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Rs.apply(null,r):typeof r=="object"?e+=xe(r):e+=r,e+=" "}return e};let Hi=null,cf=!0;const tS=function(t,e){k(!0,"Can't turn on custom loggers persistently."),zr.logLevel=J.VERBOSE,Hi=zr.log.bind(zr)},Oe=function(...t){if(cf===!0&&(cf=!1,Hi===null&&ZC.get("logging_enabled")===!0&&tS()),Hi){const e=Rs.apply(null,t);Hi(e)}},As=function(t){return function(...e){Oe(t,...e)}},bu=function(...t){const e="FIREBASE INTERNAL ERROR: "+Rs(...t);zr.error(e)},qt=function(...t){const e=`FIREBASE FATAL ERROR: ${Rs(...t)}`;throw zr.error(e),new Error(e)},Ye=function(...t){const e="FIREBASE WARNING: "+Rs(...t);zr.warn(e)},nS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ye("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Wm=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},rS=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ei="[MIN_NAME]",sr="[MAX_NAME]",ci=function(t,e){if(t===e)return 0;if(t===ei||e===sr)return-1;if(e===ei||t===sr)return 1;{const n=df(t),r=df(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},iS=function(t,e){return t===e?0:t<e?-1:1},xi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+xe(e))},Yc=function(t){if(typeof t!="object"||t===null)return xe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=xe(e[r]),n+=":",n+=Yc(t[e[r]]);return n+="}",n},Hm=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function qe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const $m=function(t){k(!Wm(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const f=u.join("");let h="";for(a=0;a<64;a+=8){let d=parseInt(f.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},sS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},oS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function lS(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const aS=new RegExp("^-?(0*)\\d{1,10}$"),uS=-2147483648,cS=2147483647,df=function(t){if(aS.test(t)){const e=Number(t);if(e>=uS&&e<=cS)return e}return null},di=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ye("Exception was thrown by user callback.",n),e},Math.floor(0))}},dS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},$i=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class hS{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,mt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)==null||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ye(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class fS{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Oe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ye(e)}}class vo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}vo.OWNER="owner";/**
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
 */const qc="5",Vm="v",Gm="s",Km="r",Qm="f",Ym=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,qm="ls",Xm="p",Ou="ac",Jm="websocket",Zm="long_polling";/**
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
 */class e_{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1,u=null){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Gn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Gn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function pS(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function t_(t,e,n){k(typeof e=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let r;if(e===Jm)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Zm)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);pS(t)&&(n.ns=t.namespace);const i=[];return qe(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class gS{constructor(){this.counters_={}}incrementCounter(e,n=1){en(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return mw(this.counters_)}}/**
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
 */const Ea={},xa={};function Xc(t){const e=t.toString();return Ea[e]||(Ea[e]=new gS),Ea[e]}function mS(t,e){const n=t.toString();return xa[n]||(xa[n]=e()),xa[n]}/**
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
 */class _S{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&di(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const hf="start",yS="close",vS="pLPCommand",wS="pRTLPCB",n_="id",r_="pw",i_="ser",CS="cb",SS="seg",ES="ts",xS="d",kS="dframe",s_=1870,o_=30,IS=s_-o_,TS=25e3,RS=3e4;class Dr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=As(e),this.stats_=Xc(n),this.urlFn=a=>(this.appCheckToken&&(a[Ou]=this.appCheckToken),t_(n,Zm,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new _S(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(RS)),rS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Jc((...s)=>{const[o,l,a,u,f]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===hf)this.id=l,this.password=a;else if(o===yS)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[hf]="t",r[i_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[CS]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Vm]=qc,this.transportSessionId&&(r[Gm]=this.transportSessionId),this.lastSessionId&&(r[qm]=this.lastSessionId),this.applicationId&&(r[Xm]=this.applicationId),this.appCheckToken&&(r[Ou]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ym.test(location.hostname)&&(r[Km]=Qm);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Dr.forceAllow_=!0}static forceDisallow(){Dr.forceDisallow_=!0}static isAvailable(){return Dr.forceAllow_?!0:!Dr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!sS()&&!oS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=km(n),i=Hm(r,IS);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[kS]="t",r[n_]=e,r[r_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=xe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Jc{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=eS(),window[vS+this.uniqueCallbackIdentifier]=e,window[wS+this.uniqueCallbackIdentifier]=n,this.myIFrame=Jc.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Oe("frame writing exception"),l.stack&&Oe(l.stack),Oe(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Oe("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[n_]=this.myID,e[r_]=this.myPW,e[i_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+o_+r.length<=s_;){const o=this.pendingSegs.shift();r=r+"&"+SS+i+"="+o.seg+"&"+ES+i+"="+o.ts+"&"+xS+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(TS)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Oe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const AS=16384,PS=45e3;let Jo=null;typeof MozWebSocket<"u"?Jo=MozWebSocket:typeof WebSocket<"u"&&(Jo=WebSocket);class _t{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=As(this.connId),this.stats_=Xc(n),this.connURL=_t.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Vm]=qc,typeof location<"u"&&location.hostname&&Ym.test(location.hostname)&&(o[Km]=Qm),n&&(o[Gm]=n),r&&(o[qm]=r),i&&(o[Ou]=i),s&&(o[Xm]=s),t_(e,Jm,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Gn.set("previous_websocket_failure",!0);try{let r;Tw(),this.mySock=new Jo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){_t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Jo!==null&&!_t.forceDisallow_}static previouslyFailed(){return Gn.isInMemoryStorage||Gn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Gn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=hs(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Hm(n,AS);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(PS))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}_t.responsesRequiredToBeHealthy=2;_t.healthyTimeout=3e4;/**
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
 */class ps{static get ALL_TRANSPORTS(){return[Dr,_t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=_t&&_t.isAvailable();let r=n&&!_t.previouslyFailed();if(e.webSocketOnly&&(n||Ye("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[_t];else{const i=this.transports_=[];for(const s of ps.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ps.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ps.globalTransportInitialized_=!1;/**
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
 */const NS=6e4,DS=5e3,bS=10*1024,OS=100*1024,ka="t",ff="d",LS="s",pf="r",FS="e",gf="o",mf="a",_f="n",yf="p",MS="h";class jS{constructor(e,n,r,i,s,o,l,a,u,f){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=As("c:"+this.id+":"),this.transportManager_=new ps(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=$i(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>OS?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>bS?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ka in e){const n=e[ka];n===mf?this.upgradeIfSecondaryHealthy_():n===pf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===gf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=xi("t",e),r=xi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:yf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:mf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:_f,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=xi("t",e),r=xi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=xi(ka,e);if(ff in e){const r=e[ff];if(n===MS){const i={...r};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===_f){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===LS?this.onConnectionShutdown_(r):n===pf?this.onReset_(r):n===FS?bu("Server Error: "+r):n===gf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):bu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),qc!==r&&Ye("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),$i(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(NS))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):$i(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(DS))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:yf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Gn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class l_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class a_{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){k(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Zo extends a_{static getInstance(){return new Zo}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!$c()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const vf=32,wf=768;class ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Y(){return new ee("")}function W(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Pn(t){return t.pieces_.length-t.pieceNum_}function te(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ee(t.pieces_,e)}function u_(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function zS(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function c_(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function d_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ee(e,0)}function ye(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ee)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ee(n,0)}function $(t){return t.pieceNum_>=t.pieces_.length}function $e(t,e){const n=W(t),r=W(e);if(n===null)return e;if(n===r)return $e(te(t),te(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Zc(t,e){if(Pn(t)!==Pn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function yt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Pn(t)>Pn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class US{constructor(e,n){this.errorPrefix_=n,this.parts_=c_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ol(this.parts_[r]);h_(this)}}function BS(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ol(e),h_(t)}function WS(t){const e=t.parts_.pop();t.byteLength_-=Ol(e),t.parts_.length>0&&(t.byteLength_-=1)}function h_(t){if(t.byteLength_>wf)throw new Error(t.errorPrefix_+"has a key path longer than "+wf+" bytes ("+t.byteLength_+").");if(t.parts_.length>vf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+vf+") or object contains a cycle "+Bn(t))}function Bn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class ed extends a_{static getInstance(){return new ed}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ki=1e3,HS=60*5*1e3,Cf=30*1e3,$S=1.3,VS=3e4,GS="server_kill",Sf=3;class $t extends l_{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=$t.nextPersistentConnectionId_++,this.log_=As("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ki,this.maxReconnectDelay_=HS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ed.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Zo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(xe(s)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new bl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;$t.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&en(e,"w")){const r=Jr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ye(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ow(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Cf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=bw(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+xe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):bu("Unrecognized action received from server: "+xe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ki,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ki,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>VS&&(this.reconnectDelay_=ki),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*$S)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+$t.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(h){k(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:a,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?Oe("getToken() completed but was canceled"):(Oe("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new jS(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,y=>{Ye(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(GS)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ye(h),a())}}}interrupt(e){Oe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Oe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Tu(this.interruptReasons_)&&(this.reconnectDelay_=ki,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Yc(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ee(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Oe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Sf&&(this.reconnectDelay_=Cf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Oe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Sf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+zm.replace(/\./g,"-")]=1,$c()?e["framework.cordova"]=1:Pm()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Zo.getInstance().currentlyOnline();return Tu(this.interruptReasons_)&&e}}$t.nextPersistentConnectionId_=0;$t.nextConnectionId_=0;/**
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
 */class H{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new H(e,n)}}/**
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
 */class Ll{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new H(ei,e),i=new H(ei,n);return this.compare(r,i)!==0}minPost(){return H.MIN}}/**
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
 */let no;class f_ extends Ll{static get __EMPTY_NODE(){return no}static set __EMPTY_NODE(e){no=e}compare(e,n){return ci(e.name,n.name)}isDefinedOn(e){throw li("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return H.MIN}maxPost(){return new H(sr,no)}makePost(e,n){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new H(e,no)}toString(){return".key"}}const Ur=new f_;/**
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
 */class ro{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ee{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ee.RED,this.left=i??Ve.EMPTY_NODE,this.right=s??Ve.EMPTY_NODE}copy(e,n,r,i,s){return new Ee(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ve.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ve.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ee.RED=!0;Ee.BLACK=!1;class KS{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ee(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ve{constructor(e,n=Ve.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ve(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ee.BLACK,null,null))}remove(e){return new Ve(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ee.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ro(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ro(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ro(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ro(this.root_,null,this.comparator_,!0,e)}}Ve.EMPTY_NODE=new KS;/**
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
 */function QS(t,e){return ci(t.name,e.name)}function td(t,e){return ci(t,e)}/**
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
 */let Lu;function YS(t){Lu=t}const p_=function(t){return typeof t=="number"?"number:"+$m(t):"string:"+t},g_=function(t){if(t.isLeafNode()){const e=t.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&en(e,".sv"),"Priority must be a string or number.")}else k(t===Lu||t.isEmpty(),"priority of unexpected type.");k(t===Lu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Ef;class Ce{static set __childrenNodeConstructor(e){Ef=e}static get __childrenNodeConstructor(){return Ef}constructor(e,n=Ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),g_(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return $(e)?this:W(e)===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=W(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(k(r!==".priority"||Pn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(te(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+p_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=$m(this.value_):e+=this.value_,this.lazyHash_=Bm(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ce.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ce.VALUE_TYPE_ORDER.indexOf(n),s=Ce.VALUE_TYPE_ORDER.indexOf(r);return k(i>=0,"Unknown leaf type: "+n),k(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let m_,__;function qS(t){m_=t}function XS(t){__=t}class JS extends Ll{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ci(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return H.MIN}maxPost(){return new H(sr,new Ce("[PRIORITY-POST]",__))}makePost(e,n){const r=m_(e);return new H(n,new Ce("[PRIORITY-POST]",r))}toString(){return".priority"}}const fe=new JS;/**
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
 */const ZS=Math.log(2);class eE{constructor(e){const n=s=>parseInt(Math.log(s)/ZS,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const el=function(t,e,n,r){t.sort(e);const i=function(a,u){const f=u-a;let h,d;if(f===0)return null;if(f===1)return h=t[a],d=n?n(h):h,new Ee(d,h.node,Ee.BLACK,null,null);{const y=parseInt(f/2,10)+a,g=i(a,y),C=i(y+1,u);return h=t[y],d=n?n(h):h,new Ee(d,h.node,Ee.BLACK,g,C)}},s=function(a){let u=null,f=null,h=t.length;const d=function(g,C){const P=h-g,m=h;h-=g;const p=i(P+1,m),_=t[P],S=n?n(_):_;y(new Ee(S,_.node,C,null,p))},y=function(g){u?(u.left=g,u=g):(f=g,u=g)};for(let g=0;g<a.count;++g){const C=a.nextBitIsOne(),P=Math.pow(2,a.count-(g+1));C?d(P,Ee.BLACK):(d(P,Ee.BLACK),d(P,Ee.RED))}return f},o=new eE(t.length),l=s(o);return new Ve(r||e,l)};/**
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
 */let Ia;const mr={};class Ut{static get Default(){return k(mr&&fe,"ChildrenNode.ts has not been loaded"),Ia=Ia||new Ut({".priority":mr},{".priority":fe}),Ia}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Jr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ve?n:null}hasIndex(e){return en(this.indexSet_,e.toString())}addIndex(e,n){k(e!==Ur,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(H.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=el(r,e.getCompare()):l=mr;const a=e.toString(),u={...this.indexSet_};u[a]=e;const f={...this.indexes_};return f[a]=l,new Ut(f,u)}addToIndexes(e,n){const r=qo(this.indexes_,(i,s)=>{const o=Jr(this.indexSet_,s);if(k(o,"Missing index implementation for "+s),i===mr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(H.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),el(l,o.getCompare())}else return mr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new H(e.name,l))),a.insert(e,e.node)}});return new Ut(r,this.indexSet_)}removeFromIndexes(e,n){const r=qo(this.indexes_,i=>{if(i===mr)return i;{const s=n.get(e.name);return s?i.remove(new H(e.name,s)):i}});return new Ut(r,this.indexSet_)}}/**
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
 */let Ii;class F{static get EMPTY_NODE(){return Ii||(Ii=new F(new Ve(td),null,Ut.Default))}constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&g_(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ii}updatePriority(e){return this.children_.isEmpty()?this:new F(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ii:n}}getChild(e){const n=W(e);return n===null?this:this.getImmediateChild(n).getChild(te(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(k(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new H(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ii:this.priorityNode_;return new F(i,o,s)}}updateChild(e,n){const r=W(e);if(r===null)return n;{k(W(e)!==".priority"||Pn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(te(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(fe,(o,l)=>{n[o]=l.val(e),r++,s&&F.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+p_(this.getPriority().val())+":"),this.forEachChild(fe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Bm(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new H(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new H(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new H(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ps?-1:0}withIndex(e){if(e===Ur||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new F(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ur||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(fe),i=n.getIterator(fe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ur?null:this.indexMap_.get(e.toString())}}F.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class tE extends F{constructor(){super(new Ve(td),F.EMPTY_NODE,Ut.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return F.EMPTY_NODE}isEmpty(){return!1}}const Ps=new tE;Object.defineProperties(H,{MIN:{value:new H(ei,F.EMPTY_NODE)},MAX:{value:new H(sr,Ps)}});f_.__EMPTY_NODE=F.EMPTY_NODE;Ce.__childrenNodeConstructor=F;YS(Ps);XS(Ps);/**
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
 */const nE=!0;function Te(t,e=null){if(t===null)return F.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ce(n,Te(e))}if(!(t instanceof Array)&&nE){const n=[];let r=!1;if(qe(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Te(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new H(o,a)))}}),n.length===0)return F.EMPTY_NODE;const s=el(n,QS,o=>o.name,td);if(r){const o=el(n,fe.getCompare());return new F(s,Te(e),new Ut({".priority":o},{".priority":fe}))}else return new F(s,Te(e),Ut.Default)}else{let n=F.EMPTY_NODE;return qe(t,(r,i)=>{if(en(t,r)&&r.substring(0,1)!=="."){const s=Te(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Te(e))}}qS(Te);/**
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
 */class rE extends Ll{constructor(e){super(),this.indexPath_=e,k(!$(e)&&W(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ci(e.name,n.name):s}makePost(e,n){const r=Te(e),i=F.EMPTY_NODE.updateChild(this.indexPath_,r);return new H(n,i)}maxPost(){const e=F.EMPTY_NODE.updateChild(this.indexPath_,Ps);return new H(sr,e)}toString(){return c_(this.indexPath_,0).join("/")}}/**
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
 */class iE extends Ll{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ci(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return H.MIN}maxPost(){return H.MAX}makePost(e,n){const r=Te(e);return new H(n,r)}toString(){return".value"}}const sE=new iE;/**
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
 */function y_(t){return{type:"value",snapshotNode:t}}function ti(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function gs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ms(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function oE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class nd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){k(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(gs(n,l)):k(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(ti(n,r)):o.trackChildChange(ms(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(fe,(i,s)=>{n.hasChild(i)||r.trackChildChange(gs(i,s))}),n.isLeafNode()||n.forEachChild(fe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ms(i,s,o))}else r.trackChildChange(ti(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?F.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class _s{constructor(e){this.indexedFilter_=new nd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=_s.getStartPost_(e),this.endPost_=_s.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new H(n,r))||(r=F.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=F.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(F.EMPTY_NODE);const s=this;return n.forEachChild(fe,(o,l)=>{s.matches(new H(o,l))||(i=i.updateImmediateChild(o,F.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class lE{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new _s(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new H(n,r))||(r=F.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=F.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=F.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(F.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,F.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,y)=>h(y,d)}else o=this.index_.getCompare();const l=e;k(l.numChildren()===this.limit_,"");const a=new H(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),f=this.rangedFilter_.matches(a);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const y=d==null?1:o(d,a);if(f&&!r.isEmpty()&&y>=0)return s!=null&&s.trackChildChange(ms(n,r,h)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(gs(n,h));const C=l.updateImmediateChild(n,F.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(ti(d.name,d.node)),C.updateImmediateChild(d.name,d.node)):C}}else return r.isEmpty()?e:f&&o(u,a)>=0?(s!=null&&(s.trackChildChange(gs(u.name,u.node)),s.trackChildChange(ti(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,F.EMPTY_NODE)):e}}/**
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
 */class rd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ei}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:sr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===fe}copy(){const e=new rd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function aE(t){return t.loadsAllData()?new nd(t.getIndex()):t.hasLimit()?new lE(t):new _s(t)}function xf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===fe?n="$priority":t.index_===sE?n="$value":t.index_===Ur?n="$key":(k(t.index_ instanceof rE,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=xe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=xe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+xe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=xe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+xe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function kf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==fe&&(e.i=t.index_.toString()),e}/**
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
 */class tl extends l_{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=As("p:rest:"),this.listens_={}}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=tl.getListenId_(e,r),l={};this.listens_[o]=l;const a=xf(e._queryParams);this.restRequest_(s+".json",a,(u,f)=>{let h=f;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(s,h,!1,r),Jr(this.listens_,o)===l){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(e,n){const r=tl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=xf(e._queryParams),r=e._path.toString(),i=new bl;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ai(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=hs(l.responseText)}catch{Ye("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Ye("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class uE{constructor(){this.rootNode_=F.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function nl(){return{value:null,children:new Map}}function v_(t,e,n){if($(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=W(e);t.children.has(r)||t.children.set(r,nl());const i=t.children.get(r);e=te(e),v_(i,e,n)}}function Fu(t,e,n){t.value!==null?n(e,t.value):cE(t,(r,i)=>{const s=new ee(e.toString()+"/"+r);Fu(i,s,n)})}function cE(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class dE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n={...e};return this.last_&&qe(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const If=10*1e3,hE=30*1e3,fE=5*60*1e3;class pE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new dE(e);const r=If+(hE-If)*Math.random();$i(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;qe(e,(i,s)=>{s>0&&en(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),$i(this.reportStats_.bind(this),Math.floor(Math.random()*2*fE))}}/**
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
 */var vt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(vt||(vt={}));function w_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function id(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function sd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class rl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=vt.ACK_USER_WRITE,this.source=w_()}operationForChild(e){if($(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ee(e));return new rl(Y(),n,this.revert)}}else return k(W(this.path)===e,"operationForChild called for unrelated child."),new rl(te(this.path),this.affectedTree,this.revert)}}/**
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
 */class ys{constructor(e,n){this.source=e,this.path=n,this.type=vt.LISTEN_COMPLETE}operationForChild(e){return $(this.path)?new ys(this.source,Y()):new ys(this.source,te(this.path))}}/**
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
 */class or{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=vt.OVERWRITE}operationForChild(e){return $(this.path)?new or(this.source,Y(),this.snap.getImmediateChild(e)):new or(this.source,te(this.path),this.snap)}}/**
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
 */class vs{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=vt.MERGE}operationForChild(e){if($(this.path)){const n=this.children.subtree(new ee(e));return n.isEmpty()?null:n.value?new or(this.source,Y(),n.value):new vs(this.source,Y(),n)}else return k(W(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new vs(this.source,te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class lr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if($(e))return this.isFullyInitialized()&&!this.filtered_;const n=W(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class gE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function mE(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(oE(o.childName,o.snapshotNode))}),Ti(t,i,"child_removed",e,r,n),Ti(t,i,"child_added",e,r,n),Ti(t,i,"child_moved",s,r,n),Ti(t,i,"child_changed",e,r,n),Ti(t,i,"value",e,r,n),i}function Ti(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>yE(t,l,a)),o.forEach(l=>{const a=_E(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function _E(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function yE(t,e,n){if(e.childName==null||n.childName==null)throw li("Should only compare child_ events.");const r=new H(e.childName,e.snapshotNode),i=new H(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Fl(t,e){return{eventCache:t,serverCache:e}}function Vi(t,e,n,r){return Fl(new lr(e,n,r),t.serverCache)}function C_(t,e,n,r){return Fl(t.eventCache,new lr(e,n,r))}function Mu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ar(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Ta;const vE=()=>(Ta||(Ta=new Ve(iS)),Ta);class ie{static fromObject(e){let n=new ie(null);return qe(e,(r,i)=>{n=n.set(new ee(r),i)}),n}constructor(e,n=vE()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Y(),value:this.value};if($(e))return null;{const r=W(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(te(e),n);return s!=null?{path:ye(new ee(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if($(e))return this;{const n=W(e),r=this.children.get(n);return r!==null?r.subtree(te(e)):new ie(null)}}set(e,n){if($(e))return new ie(n,this.children);{const r=W(e),s=(this.children.get(r)||new ie(null)).set(te(e),n),o=this.children.insert(r,s);return new ie(this.value,o)}}remove(e){if($(e))return this.children.isEmpty()?new ie(null):new ie(null,this.children);{const n=W(e),r=this.children.get(n);if(r){const i=r.remove(te(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ie(null):new ie(this.value,s)}else return this}}get(e){if($(e))return this.value;{const n=W(e),r=this.children.get(n);return r?r.get(te(e)):null}}setTree(e,n){if($(e))return n;{const r=W(e),s=(this.children.get(r)||new ie(null)).setTree(te(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ie(this.value,o)}}fold(e){return this.fold_(Y(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ye(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Y(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if($(e))return null;{const s=W(e),o=this.children.get(s);return o?o.findOnPath_(te(e),ye(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Y(),n)}foreachOnPath_(e,n,r){if($(e))return this;{this.value&&r(n,this.value);const i=W(e),s=this.children.get(i);return s?s.foreachOnPath_(te(e),ye(n,i),r):new ie(null)}}foreach(e){this.foreach_(Y(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ye(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Et{constructor(e){this.writeTree_=e}static empty(){return new Et(new ie(null))}}function Gi(t,e,n){if($(e))return new Et(new ie(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=$e(i,e);return s=s.updateChild(o,n),new Et(t.writeTree_.set(i,s))}else{const i=new ie(n),s=t.writeTree_.setTree(e,i);return new Et(s)}}}function Tf(t,e,n){let r=t;return qe(n,(i,s)=>{r=Gi(r,ye(e,i),s)}),r}function Rf(t,e){if($(e))return Et.empty();{const n=t.writeTree_.setTree(e,new ie(null));return new Et(n)}}function ju(t,e){return hr(t,e)!=null}function hr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild($e(n.path,e)):null}function Af(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(fe,(r,i)=>{e.push(new H(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new H(r,i.value))}),e}function Tn(t,e){if($(e))return t;{const n=hr(t,e);return n!=null?new Et(new ie(n)):new Et(t.writeTree_.subtree(e))}}function zu(t){return t.writeTree_.isEmpty()}function ni(t,e){return S_(Y(),t.writeTree_,e)}function S_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(k(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=S_(ye(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ye(t,".priority"),r)),n}}/**
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
 */function od(t,e){return I_(e,t)}function wE(t,e,n,r,i){k(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Gi(t.visibleWrites,e,n)),t.lastWriteId=r}function CE(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function SE(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);k(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&EE(l,r.path)?i=!1:yt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return xE(t),!0;if(r.snap)t.visibleWrites=Rf(t.visibleWrites,r.path);else{const l=r.children;qe(l,a=>{t.visibleWrites=Rf(t.visibleWrites,ye(r.path,a))})}return!0}else return!1}function EE(t,e){if(t.snap)return yt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&yt(ye(t.path,n),e))return!0;return!1}function xE(t){t.visibleWrites=E_(t.allWrites,kE,Y()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function kE(t){return t.visible}function E_(t,e,n){let r=Et.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)yt(n,o)?(l=$e(n,o),r=Gi(r,l,s.snap)):yt(o,n)&&(l=$e(o,n),r=Gi(r,Y(),s.snap.getChild(l)));else if(s.children){if(yt(n,o))l=$e(n,o),r=Tf(r,l,s.children);else if(yt(o,n))if(l=$e(o,n),$(l))r=Tf(r,Y(),s.children);else{const a=Jr(s.children,W(l));if(a){const u=a.getChild(te(l));r=Gi(r,Y(),u)}}}else throw li("WriteRecord should have .snap or .children")}}return r}function x_(t,e,n,r,i){if(!r&&!i){const s=hr(t.visibleWrites,e);if(s!=null)return s;{const o=Tn(t.visibleWrites,e);if(zu(o))return n;if(n==null&&!ju(o,Y()))return null;{const l=n||F.EMPTY_NODE;return ni(o,l)}}}else{const s=Tn(t.visibleWrites,e);if(!i&&zu(s))return n;if(!i&&n==null&&!ju(s,Y()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(yt(u.path,e)||yt(e,u.path))},l=E_(t.allWrites,o,e),a=n||F.EMPTY_NODE;return ni(l,a)}}}function IE(t,e,n){let r=F.EMPTY_NODE;const i=hr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(fe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Tn(t.visibleWrites,e);return n.forEachChild(fe,(o,l)=>{const a=ni(Tn(s,new ee(o)),l);r=r.updateImmediateChild(o,a)}),Af(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Tn(t.visibleWrites,e);return Af(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function TE(t,e,n,r,i){k(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ye(e,n);if(ju(t.visibleWrites,s))return null;{const o=Tn(t.visibleWrites,s);return zu(o)?i.getChild(n):ni(o,i.getChild(n))}}function RE(t,e,n,r){const i=ye(e,n),s=hr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Tn(t.visibleWrites,i);return ni(o,r.getNode().getImmediateChild(n))}else return null}function AE(t,e){return hr(t.visibleWrites,e)}function PE(t,e,n,r,i,s,o){let l;const a=Tn(t.visibleWrites,e),u=hr(a,Y());if(u!=null)l=u;else if(n!=null)l=ni(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const f=[],h=o.getCompare(),d=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let y=d.getNext();for(;y&&f.length<i;)h(y,r)!==0&&f.push(y),y=d.getNext();return f}else return[]}function NE(){return{visibleWrites:Et.empty(),allWrites:[],lastWriteId:-1}}function il(t,e,n,r){return x_(t.writeTree,t.treePath,e,n,r)}function ld(t,e){return IE(t.writeTree,t.treePath,e)}function Pf(t,e,n,r){return TE(t.writeTree,t.treePath,e,n,r)}function sl(t,e){return AE(t.writeTree,ye(t.treePath,e))}function DE(t,e,n,r,i,s){return PE(t.writeTree,t.treePath,e,n,r,i,s)}function ad(t,e,n){return RE(t.writeTree,t.treePath,e,n)}function k_(t,e){return I_(ye(t.treePath,e),t.writeTree)}function I_(t,e){return{treePath:t,writeTree:e}}/**
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
 */class bE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ms(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,gs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ti(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ms(r,e.snapshotNode,i.oldSnap));else throw li("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class OE{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const T_=new OE;class ud{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new lr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ad(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ar(this.viewCache_),s=DE(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function LE(t){return{filter:t}}function FE(t,e){k(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ME(t,e,n,r,i){const s=new bE;let o,l;if(n.type===vt.OVERWRITE){const u=n;u.source.fromUser?o=Uu(t,e,u.path,u.snap,r,i,s):(k(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!$(u.path),o=ol(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===vt.MERGE){const u=n;u.source.fromUser?o=zE(t,e,u.path,u.children,r,i,s):(k(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Bu(t,e,u.path,u.children,r,i,l,s))}else if(n.type===vt.ACK_USER_WRITE){const u=n;u.revert?o=WE(t,e,u.path,r,i,s):o=UE(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===vt.LISTEN_COMPLETE)o=BE(t,e,n.path,r,s);else throw li("Unknown operation type: "+n.type);const a=s.getChanges();return jE(e,o,a),{viewCache:o,changes:a}}function jE(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Mu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(y_(Mu(e)))}}function R_(t,e,n,r,i,s){const o=e.eventCache;if(sl(r,n)!=null)return e;{let l,a;if($(n))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ar(e),f=u instanceof F?u:F.EMPTY_NODE,h=ld(r,f);l=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const u=il(r,ar(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=W(n);if(u===".priority"){k(Pn(n)===1,"Can't have a priority with additional path components");const f=o.getNode();a=e.serverCache.getNode();const h=Pf(r,n,f,a);h!=null?l=t.filter.updatePriority(f,h):l=o.getNode()}else{const f=te(n);let h;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const d=Pf(r,n,o.getNode(),a);d!=null?h=o.getNode().getImmediateChild(u).updateChild(f,d):h=o.getNode().getImmediateChild(u)}else h=ad(r,u,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),u,h,f,i,s):l=o.getNode()}}return Vi(e,l,o.isFullyInitialized()||$(n),t.filter.filtersNodes())}}function ol(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const f=o?t.filter:t.filter.getIndexedFilter();if($(n))u=f.updateFullNode(a.getNode(),r,null);else if(f.filtersNodes()&&!a.isFiltered()){const y=a.getNode().updateChild(n,r);u=f.updateFullNode(a.getNode(),y,null)}else{const y=W(n);if(!a.isCompleteForPath(n)&&Pn(n)>1)return e;const g=te(n),P=a.getNode().getImmediateChild(y).updateChild(g,r);y===".priority"?u=f.updatePriority(a.getNode(),P):u=f.updateChild(a.getNode(),y,P,g,T_,null)}const h=C_(e,u,a.isFullyInitialized()||$(n),f.filtersNodes()),d=new ud(i,h,s);return R_(t,h,n,i,d,l)}function Uu(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const f=new ud(i,e,s);if($(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Vi(e,u,!0,t.filter.filtersNodes());else{const h=W(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Vi(e,u,l.isFullyInitialized(),l.isFiltered());else{const d=te(n),y=l.getNode().getImmediateChild(h);let g;if($(d))g=r;else{const C=f.getCompleteChild(h);C!=null?u_(d)===".priority"&&C.getChild(d_(d)).isEmpty()?g=C:g=C.updateChild(d,r):g=F.EMPTY_NODE}if(y.equals(g))a=e;else{const C=t.filter.updateChild(l.getNode(),h,g,d,f,o);a=Vi(e,C,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function Nf(t,e){return t.eventCache.isCompleteForChild(e)}function zE(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const f=ye(n,a);Nf(e,W(f))&&(l=Uu(t,l,f,u,i,s,o))}),r.foreach((a,u)=>{const f=ye(n,a);Nf(e,W(f))||(l=Uu(t,l,f,u,i,s,o))}),l}function Df(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Bu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;$(n)?u=r:u=new ie(null).setTree(n,r);const f=e.serverCache.getNode();return u.children.inorderTraversal((h,d)=>{if(f.hasChild(h)){const y=e.serverCache.getNode().getImmediateChild(h),g=Df(t,y,d);a=ol(t,a,new ee(h),g,i,s,o,l)}}),u.children.inorderTraversal((h,d)=>{const y=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!f.hasChild(h)&&!y){const g=e.serverCache.getNode().getImmediateChild(h),C=Df(t,g,d);a=ol(t,a,new ee(h),C,i,s,o,l)}}),a}function UE(t,e,n,r,i,s,o){if(sl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if($(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return ol(t,e,n,a.getNode().getChild(n),i,s,l,o);if($(n)){let u=new ie(null);return a.getNode().forEachChild(Ur,(f,h)=>{u=u.set(new ee(f),h)}),Bu(t,e,n,u,i,s,l,o)}else return e}else{let u=new ie(null);return r.foreach((f,h)=>{const d=ye(n,f);a.isCompleteForPath(d)&&(u=u.set(f,a.getNode().getChild(d)))}),Bu(t,e,n,u,i,s,l,o)}}function BE(t,e,n,r,i){const s=e.serverCache,o=C_(e,s.getNode(),s.isFullyInitialized()||$(n),s.isFiltered());return R_(t,o,n,r,T_,i)}function WE(t,e,n,r,i,s){let o;if(sl(r,n)!=null)return e;{const l=new ud(r,e,i),a=e.eventCache.getNode();let u;if($(n)||W(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=il(r,ar(e));else{const h=e.serverCache.getNode();k(h instanceof F,"serverChildren would be complete if leaf node"),f=ld(r,h)}f=f,u=t.filter.updateFullNode(a,f,s)}else{const f=W(n);let h=ad(r,f,e.serverCache);h==null&&e.serverCache.isCompleteForChild(f)&&(h=a.getImmediateChild(f)),h!=null?u=t.filter.updateChild(a,f,h,te(n),l,s):e.eventCache.getNode().hasChild(f)?u=t.filter.updateChild(a,f,F.EMPTY_NODE,te(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=il(r,ar(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||sl(r,Y())!=null,Vi(e,u,o,t.filter.filtersNodes())}}/**
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
 */class HE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new nd(r.getIndex()),s=aE(r);this.processor_=LE(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(F.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(F.EMPTY_NODE,l.getNode(),null),f=new lr(a,o.isFullyInitialized(),i.filtersNodes()),h=new lr(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Fl(h,f),this.eventGenerator_=new gE(this.query_)}get query(){return this.query_}}function $E(t){return t.viewCache_.serverCache.getNode()}function VE(t,e){const n=ar(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!$(e)&&!n.getImmediateChild(W(e)).isEmpty())?n.getChild(e):null}function bf(t){return t.eventRegistrations_.length===0}function GE(t,e){t.eventRegistrations_.push(e)}function Of(t,e,n){const r=[];if(n){k(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Lf(t,e,n,r){e.type===vt.MERGE&&e.source.queryId!==null&&(k(ar(t.viewCache_),"We should always have a full cache before handling merges"),k(Mu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=ME(t.processor_,i,e,n,r);return FE(t.processor_,s.viewCache),k(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,A_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function KE(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(fe,(s,o)=>{r.push(ti(s,o))}),n.isFullyInitialized()&&r.push(y_(n.getNode())),A_(t,r,n.getNode(),e)}function A_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return mE(t.eventGenerator_,e,n,i)}/**
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
 */let ll;class QE{constructor(){this.views=new Map}}function YE(t){k(!ll,"__referenceConstructor has already been defined"),ll=t}function qE(){return k(ll,"Reference.ts has not been loaded"),ll}function XE(t){return t.views.size===0}function cd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return k(s!=null,"SyncTree gave us an op for an invalid query."),Lf(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Lf(o,e,n,r));return s}}function JE(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=il(n,i?r:null),a=!1;l?a=!0:r instanceof F?(l=ld(n,r),a=!1):(l=F.EMPTY_NODE,a=!1);const u=Fl(new lr(l,a,!1),new lr(r,i,!1));return new HE(e,u)}return o}function ZE(t,e,n,r,i,s){const o=JE(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),GE(o,n),KE(o,n)}function ex(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Nn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Of(u,n,r)),bf(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Of(a,n,r)),bf(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Nn(t)&&s.push(new(qE())(e._repo,e._path)),{removed:s,events:o}}function P_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Br(t,e){let n=null;for(const r of t.views.values())n=n||VE(r,e);return n}function N_(t,e){if(e._queryParams.loadsAllData())return Ml(t);{const r=e._queryIdentifier;return t.views.get(r)}}function D_(t,e){return N_(t,e)!=null}function Nn(t){return Ml(t)!=null}function Ml(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let al;function tx(t){k(!al,"__referenceConstructor has already been defined"),al=t}function nx(){return k(al,"Reference.ts has not been loaded"),al}let rx=1;class Ff{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ie(null),this.pendingWriteTree_=NE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function b_(t,e,n,r,i){return wE(t.pendingWriteTree_,e,n,r,i),i?Ns(t,new or(w_(),e,n)):[]}function Kn(t,e,n=!1){const r=CE(t.pendingWriteTree_,e);if(SE(t.pendingWriteTree_,e)){let s=new ie(null);return r.snap!=null?s=s.set(Y(),!0):qe(r.children,o=>{s=s.set(new ee(o),!0)}),Ns(t,new rl(r.path,s,n))}else return[]}function jl(t,e,n){return Ns(t,new or(id(),e,n))}function ix(t,e,n){const r=ie.fromObject(n);return Ns(t,new vs(id(),e,r))}function sx(t,e){return Ns(t,new ys(id(),e))}function ox(t,e,n){const r=hd(t,n);if(r){const i=fd(r),s=i.path,o=i.queryId,l=$e(s,e),a=new ys(sd(o),l);return pd(t,s,a)}else return[]}function Wu(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||D_(o,e))){const a=ex(o,e,n,r);XE(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const f=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(s,(d,y)=>Nn(y));if(f&&!h){const d=t.syncPointTree_.subtree(s);if(!d.isEmpty()){const y=ux(d);for(let g=0;g<y.length;++g){const C=y[g],P=C.query,m=F_(t,C);t.listenProvider_.startListening(Ki(P),ul(t,P),m.hashFn,m.onComplete)}}}!h&&u.length>0&&!r&&(f?t.listenProvider_.stopListening(Ki(e),null):u.forEach(d=>{const y=t.queryToTagMap.get(zl(d));t.listenProvider_.stopListening(Ki(d),y)}))}cx(t,u)}return l}function lx(t,e,n,r){const i=hd(t,r);if(i!=null){const s=fd(i),o=s.path,l=s.queryId,a=$e(o,e),u=new or(sd(l),a,n);return pd(t,o,u)}else return[]}function ax(t,e,n,r){const i=hd(t,r);if(i){const s=fd(i),o=s.path,l=s.queryId,a=$e(o,e),u=ie.fromObject(n),f=new vs(sd(l),a,u);return pd(t,o,f)}else return[]}function Mf(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,y)=>{const g=$e(d,i);s=s||Br(y,g),o=o||Nn(y)});let l=t.syncPointTree_.get(i);l?(o=o||Nn(l),s=s||Br(l,Y())):(l=new QE,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=F.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((y,g)=>{const C=Br(g,Y());C&&(s=s.updateImmediateChild(y,C))}));const u=D_(l,e);if(!u&&!e._queryParams.loadsAllData()){const d=zl(e);k(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const y=dx();t.queryToTagMap.set(d,y),t.tagToQueryMap.set(y,d)}const f=od(t.pendingWriteTree_,i);let h=ZE(l,e,n,f,s,a);if(!u&&!o&&!r){const d=N_(l,e);h=h.concat(hx(t,e,d))}return h}function dd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=$e(o,e),u=Br(l,a);if(u)return u});return x_(i,e,s,n,!0)}function Ns(t,e){return O_(e,t.syncPointTree_,null,od(t.pendingWriteTree_,Y()))}function O_(t,e,n,r){if($(t.path))return L_(t,e,n,r);{const i=e.get(Y());n==null&&i!=null&&(n=Br(i,Y()));let s=[];const o=W(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,f=k_(r,o);s=s.concat(O_(l,a,u,f))}return i&&(s=s.concat(cd(i,t,r,n))),s}}function L_(t,e,n,r){const i=e.get(Y());n==null&&i!=null&&(n=Br(i,Y()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=k_(r,o),f=t.operationForChild(o);f&&(s=s.concat(L_(f,l,a,u)))}),i&&(s=s.concat(cd(i,t,r,n))),s}function F_(t,e){const n=e.query,r=ul(t,n);return{hashFn:()=>($E(e)||F.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?ox(t,n._path,r):sx(t,n._path);{const s=lS(i,n);return Wu(t,n,null,s)}}}}function ul(t,e){const n=zl(e);return t.queryToTagMap.get(n)}function zl(t){return t._path.toString()+"$"+t._queryIdentifier}function hd(t,e){return t.tagToQueryMap.get(e)}function fd(t){const e=t.indexOf("$");return k(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ee(t.substr(0,e))}}function pd(t,e,n){const r=t.syncPointTree_.get(e);k(r,"Missing sync point for query tag that we're tracking");const i=od(t.pendingWriteTree_,e);return cd(r,n,i,null)}function ux(t){return t.fold((e,n,r)=>{if(n&&Nn(n))return[Ml(n)];{let i=[];return n&&(i=P_(n)),qe(r,(s,o)=>{i=i.concat(o)}),i}})}function Ki(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(nx())(t._repo,t._path):t}function cx(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=zl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function dx(){return rx++}function hx(t,e,n){const r=e._path,i=ul(t,e),s=F_(t,n),o=t.listenProvider_.startListening(Ki(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)k(!Nn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,f,h)=>{if(!$(u)&&f&&Nn(f))return[Ml(f).query];{let d=[];return f&&(d=d.concat(P_(f).map(y=>y.query))),qe(h,(y,g)=>{d=d.concat(g)}),d}});for(let u=0;u<a.length;++u){const f=a[u];t.listenProvider_.stopListening(Ki(f),ul(t,f))}}return o}/**
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
 */class gd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new gd(n)}node(){return this.node_}}class md{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ye(this.path_,e);return new md(this.syncTree_,n)}node(){return dd(this.syncTree_,this.path_)}}const fx=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},jf=function(t,e,n){if(!t||typeof t!="object")return t;if(k(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return px(t[".sv"],e,n);if(typeof t[".sv"]=="object")return gx(t[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},px=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+t)}},gx=function(t,e,n){t.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&k(!1,"Unexpected increment value: "+r);const i=e.node();if(k(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},mx=function(t,e,n,r){return _d(e,new md(n,t),r)},M_=function(t,e,n){return _d(t,new gd(e),n)};function _d(t,e,n){const r=t.getPriority().val(),i=jf(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=jf(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Ce(l,Te(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ce(i))),o.forEachChild(fe,(l,a)=>{const u=_d(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class yd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function vd(t,e){let n=e instanceof ee?e:new ee(e),r=t,i=W(n);for(;i!==null;){const s=Jr(r.node.children,i)||{children:{},childCount:0};r=new yd(i,r,s),n=te(n),i=W(n)}return r}function hi(t){return t.node.value}function j_(t,e){t.node.value=e,Hu(t)}function z_(t){return t.node.childCount>0}function _x(t){return hi(t)===void 0&&!z_(t)}function Ul(t,e){qe(t.node.children,(n,r)=>{e(new yd(n,t,r))})}function U_(t,e,n,r){n&&e(t),Ul(t,i=>{U_(i,e,!0)})}function yx(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ds(t){return new ee(t.parent===null?t.name:Ds(t.parent)+"/"+t.name)}function Hu(t){t.parent!==null&&vx(t.parent,t.name,t)}function vx(t,e,n){const r=_x(n),i=en(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Hu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Hu(t))}/**
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
 */const wx=/[\[\].#$\/\u0000-\u001F\u007F]/,Cx=/[\[\].#$\u0000-\u001F\u007F]/,Ra=10*1024*1024,B_=function(t){return typeof t=="string"&&t.length!==0&&!wx.test(t)},W_=function(t){return typeof t=="string"&&t.length!==0&&!Cx.test(t)},Sx=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),W_(t)},Ex=function(t,e,n,r){wd(Vc(t,"value"),e,n)},wd=function(t,e,n){const r=n instanceof ee?new US(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Bn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Bn(r)+" with contents = "+e.toString());if(Wm(e))throw new Error(t+"contains "+e.toString()+" "+Bn(r));if(typeof e=="string"&&e.length>Ra/3&&Ol(e)>Ra)throw new Error(t+"contains a string greater than "+Ra+" utf8 bytes "+Bn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(qe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!B_(o)))throw new Error(t+" contains an invalid key ("+o+") "+Bn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);BS(r,o),wd(t,l,r),WS(r)}),i&&s)throw new Error(t+' contains ".value" child '+Bn(r)+" in addition to actual children.")}},H_=function(t,e,n,r){if(!W_(n))throw new Error(Vc(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},xx=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),H_(t,e,n)},kx=function(t,e){if(W(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Ix=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!B_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Sx(n))throw new Error(Vc(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Tx{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Cd(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Zc(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function $_(t,e,n){Cd(t,n),V_(t,r=>Zc(r,e))}function Xt(t,e,n){Cd(t,n),V_(t,r=>yt(r,e)||yt(e,r))}function V_(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Rx(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Rx(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Hi&&Oe("event: "+n.toString()),di(r)}}}/**
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
 */const Ax="repo_interrupt",Px=25;class Nx{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Tx,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=nl(),this.transactionQueueTree_=new yd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Dx(t,e,n){if(t.stats_=Xc(t.repoInfo_),t.forceRestClient_||dS())t.server_=new tl(t.repoInfo_,(r,i,s,o)=>{zf(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Uf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{xe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new $t(t.repoInfo_,e,(r,i,s,o)=>{zf(t,r,i,s,o)},r=>{Uf(t,r)},r=>{Ox(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=mS(t.repoInfo_,()=>new pE(t.stats_,t.server_)),t.infoData_=new uE,t.infoSyncTree_=new Ff({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=jl(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Ed(t,"connected",!1),t.serverSyncTree_=new Ff({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Xt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function bx(t){const n=t.infoData_.getNode(new ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Sd(t){return fx({timestamp:bx(t)})}function zf(t,e,n,r,i){t.dataUpdateCount++;const s=new ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=qo(n,u=>Te(u));o=ax(t.serverSyncTree_,s,a,i)}else{const a=Te(n);o=lx(t.serverSyncTree_,s,a,i)}else if(r){const a=qo(n,u=>Te(u));o=ix(t.serverSyncTree_,s,a)}else{const a=Te(n);o=jl(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Bl(t,s)),Xt(t.eventQueue_,l,o)}function Uf(t,e){Ed(t,"connected",e),e===!1&&Fx(t)}function Ox(t,e){qe(e,(n,r)=>{Ed(t,n,r)})}function Ed(t,e,n){const r=new ee("/.info/"+e),i=Te(n);t.infoData_.updateSnapshot(r,i);const s=jl(t.infoSyncTree_,r,i);Xt(t.eventQueue_,r,s)}function G_(t){return t.nextWriteId_++}function Lx(t,e,n,r,i){xd(t,"set",{path:e.toString(),value:n,priority:r});const s=Sd(t),o=Te(n,r),l=dd(t.serverSyncTree_,e),a=M_(o,l,s),u=G_(t),f=b_(t.serverSyncTree_,e,a,u,!0);Cd(t.eventQueue_,f),t.server_.put(e.toString(),o.val(!0),(d,y)=>{const g=d==="ok";g||Ye("set at "+e+" failed: "+d);const C=Kn(t.serverSyncTree_,u,!g);Xt(t.eventQueue_,e,C),zx(t,i,d,y)});const h=X_(t,e);Bl(t,h),Xt(t.eventQueue_,h,[])}function Fx(t){xd(t,"onDisconnectEvents");const e=Sd(t),n=nl();Fu(t.onDisconnect_,Y(),(i,s)=>{const o=mx(i,s,t.serverSyncTree_,e);v_(n,i,o)});let r=[];Fu(n,Y(),(i,s)=>{r=r.concat(jl(t.serverSyncTree_,i,s));const o=X_(t,i);Bl(t,o)}),t.onDisconnect_=nl(),Xt(t.eventQueue_,Y(),r)}function Mx(t,e,n){let r;W(e._path)===".info"?r=Mf(t.infoSyncTree_,e,n):r=Mf(t.serverSyncTree_,e,n),$_(t.eventQueue_,e._path,r)}function Bf(t,e,n){let r;W(e._path)===".info"?r=Wu(t.infoSyncTree_,e,n):r=Wu(t.serverSyncTree_,e,n),$_(t.eventQueue_,e._path,r)}function jx(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Ax)}function xd(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Oe(n,...e)}function zx(t,e,n,r){e&&di(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function K_(t,e,n){return dd(t.serverSyncTree_,e,n)||F.EMPTY_NODE}function kd(t,e=t.transactionQueueTree_){if(e||Wl(t,e),hi(e)){const n=Y_(t,e);k(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Ux(t,Ds(e),n)}else z_(e)&&Ul(e,n=>{kd(t,n)})}function Ux(t,e,n){const r=n.map(u=>u.currentWriteId),i=K_(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const f=n[u];k(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const h=$e(e,f.path);s=s.updateChild(h,f.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{xd(t,"transaction put response",{path:a.toString(),status:u});let f=[];if(u==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,f=f.concat(Kn(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Wl(t,vd(t.transactionQueueTree_,e)),kd(t,t.transactionQueueTree_),Xt(t.eventQueue_,e,f);for(let d=0;d<h.length;d++)di(h[d])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ye("transaction at "+a.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}Bl(t,e)}},o)}function Bl(t,e){const n=Q_(t,e),r=Ds(n),i=Y_(t,n);return Bx(t,i,r),r}function Bx(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=$e(n,a.path);let f=!1,h;if(k(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)f=!0,h=a.abortReason,i=i.concat(Kn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Px)f=!0,h="maxretry",i=i.concat(Kn(t.serverSyncTree_,a.currentWriteId,!0));else{const d=K_(t,a.path,o);a.currentInputSnapshot=d;const y=e[l].update(d.val());if(y!==void 0){wd("transaction failed: Data returned ",y,a.path);let g=Te(y);typeof y=="object"&&y!=null&&en(y,".priority")||(g=g.updatePriority(d.getPriority()));const P=a.currentWriteId,m=Sd(t),p=M_(g,d,m);a.currentOutputSnapshotRaw=g,a.currentOutputSnapshotResolved=p,a.currentWriteId=G_(t),o.splice(o.indexOf(P),1),i=i.concat(b_(t.serverSyncTree_,a.path,p,a.currentWriteId,a.applyLocally)),i=i.concat(Kn(t.serverSyncTree_,P,!0))}else f=!0,h="nodata",i=i.concat(Kn(t.serverSyncTree_,a.currentWriteId,!0))}Xt(t.eventQueue_,n,i),i=[],f&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(h),!1,null))))}Wl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)di(r[l]);kd(t,t.transactionQueueTree_)}function Q_(t,e){let n,r=t.transactionQueueTree_;for(n=W(e);n!==null&&hi(r)===void 0;)r=vd(r,n),e=te(e),n=W(e);return r}function Y_(t,e){const n=[];return q_(t,e,n),n.sort((r,i)=>r.order-i.order),n}function q_(t,e,n){const r=hi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Ul(e,i=>{q_(t,i,n)})}function Wl(t,e){const n=hi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,j_(e,n.length>0?n:void 0)}Ul(e,r=>{Wl(t,r)})}function X_(t,e){const n=Ds(Q_(t,e)),r=vd(t.transactionQueueTree_,e);return yx(r,i=>{Aa(t,i)}),Aa(t,r),U_(r,i=>{Aa(t,i)}),n}function Aa(t,e){const n=hi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Kn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?j_(e,void 0):n.length=s+1,Xt(t.eventQueue_,Ds(e),i);for(let o=0;o<r.length;o++)di(r[o])}}/**
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
 */function Wx(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Hx(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ye(`Invalid query segment '${n}' in query '${t}'`)}return e}const Wf=function(t,e){const n=$x(t),r=n.namespace;n.domain==="firebase.com"&&qt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&qt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||nS();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new e_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ee(n.pathString)}},$x=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let f=t.indexOf("/");f===-1&&(f=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(f,h)),f<h&&(i=Wx(t.substring(f,h)));const d=Hx(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const y=e.slice(0,u);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in d&&(s=d.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */class Vx{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+xe(this.snapshot.exportVal())}}class Gx{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Kx{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Id{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return $(this._path)?null:u_(this._path)}get ref(){return new Fn(this._repo,this._path)}get _queryIdentifier(){const e=kf(this._queryParams),n=Yc(e);return n==="{}"?"default":n}get _queryObject(){return kf(this._queryParams)}isEqual(e){if(e=rt(e),!(e instanceof Id))return!1;const n=this._repo===e._repo,r=Zc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+zS(this._path)}}class Fn extends Id{constructor(e,n){super(e,n,new rd,!1)}get parent(){const e=d_(this._path);return e===null?null:new Fn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class cl{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ee(e),r=$u(this.ref,e);return new cl(this._node.getChild(n),r,fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new cl(i,$u(this.ref,r),fe)))}hasChild(e){const n=new ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function rn(t,e){return t=rt(t),t._checkNotDeleted("ref"),e!==void 0?$u(t._root,e):t._root}function $u(t,e){return t=rt(t),W(t._path)===null?xx("child","path",e):H_("child","path",e),new Fn(t._repo,ye(t._path,e))}function _r(t,e){t=rt(t),kx("set",t._path),Ex("set",e,t._path);const n=new bl;return Lx(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Td{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Vx("value",this,new cl(e.snapshotNode,new Fn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Gx(this,e,n):null}matches(e){return e instanceof Td?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Qx(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(f,h)=>{Bf(t._repo,t,l),a(f,h)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new Kx(n,s||void 0),l=new Td(o);return Mx(t._repo,t,l),()=>Bf(t._repo,t,l)}function Pa(t,e,n,r){return Qx(t,"value",e,n,r)}YE(Fn);tx(Fn);/**
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
 */const Yx="FIREBASE_DATABASE_EMULATOR_HOST",Vu={};let qx=!1;function Xx(t,e,n,r){const i=e.lastIndexOf(":"),s=e.substring(0,i),o=Ts(s);t.repoInfo_=new e_(e,o,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),r&&(t.authTokenProvider_=r)}function Jx(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||qt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Oe("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Wf(s,i),l=o.repoInfo,a;typeof process<"u"&&lf&&(a=lf[Yx]),a?(s=`http://${a}?ns=${l.namespace}`,o=Wf(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new fS(t.name,t.options,e);Ix("Invalid Firebase Database URL",o),$(o.path)||qt("Database URL must point to the root of a Firebase Database (not including a child path).");const f=e1(l,t,u,new hS(t,n));return new t1(f,t)}function Zx(t,e){const n=Vu[e];(!n||n[t.key]!==t)&&qt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),jx(t),delete n[t.key]}function e1(t,e,n,r){let i=Vu[e.name];i||(i={},Vu[e.name]=i);let s=i[t.toURLString()];return s&&qt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Nx(t,qx,n,r),i[t.toURLString()]=s,s}class t1{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Dx(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Fn(this._repo,Y())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Zx(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&qt("Cannot call "+e+" on a deleted database.")}}function n1(t=Fm(),e){const n=Qc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Sw("database");r&&r1(n,...r)}return n}function r1(t,e,n,r={}){t=rt(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,s=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&rr(r,s.repoInfo_.emulatorOptions))return;qt("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&qt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new vo(vo.OWNER);else if(r.mockUserToken){const l=typeof r.mockUserToken=="string"?r.mockUserToken:Ew(r.mockUserToken,t.app.options.projectId);o=new vo(l)}Ts(e)&&Dm(e),Xx(s,i,r,o)}/**
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
 */function i1(t){qC(ui),Zr(new ir("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Jx(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),In(af,uf,t),In(af,uf,"esm2020")}$t.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};$t.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};i1();function J_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const s1=J_,Z_=new Is("auth","Firebase",J_());/**
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
 */const dl=new Gc("@firebase/auth");function o1(t,...e){dl.logLevel<=J.WARN&&dl.warn(`Auth (${ui}): ${t}`,...e)}function wo(t,...e){dl.logLevel<=J.ERROR&&dl.error(`Auth (${ui}): ${t}`,...e)}/**
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
 */function bt(t,...e){throw Ad(t,...e)}function xt(t,...e){return Ad(t,...e)}function Rd(t,e,n){const r={...s1(),[e]:n};return new Is("auth","Firebase",r).create(e,{appName:t.name})}function Xn(t){return Rd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function l1(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&bt(t,"argument-error"),Rd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ad(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Z_.create(t,...e)}function M(t,e,...n){if(!t)throw Ad(e,...n)}function Bt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wo(e),new Error(e)}function Jt(t,e){t||Bt(e)}/**
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
 */function Gu(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function a1(){return Hf()==="http:"||Hf()==="https:"}function Hf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function u1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(a1()||kw()||"connection"in navigator)?navigator.onLine:!0}function c1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class bs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jt(n>e,"Short delay should be less than long delay!"),this.isMobile=$c()||Pm()}get(){return u1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Pd(t,e){Jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ey{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const d1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const h1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],f1=new bs(3e4,6e4);function Nd(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function fi(t,e,n,r,i={}){return ty(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ai({key:t.config.apiKey,...o}).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:a,...s};return xw()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Ts(t.emulatorConfig.host)&&(u.credentials="include"),ey.fetch()(await ny(t,t.config.apiHost,n,l),u)})}async function ty(t,e,n){t._canInitEmulator=!1;const r={...d1,...e};try{const i=new g1(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw io(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw io(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw io(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw io(t,"user-disabled",o);const f=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Rd(t,f,u);bt(t,f)}}catch(i){if(i instanceof Ln)throw i;bt(t,"network-request-failed",{message:String(i)})}}async function p1(t,e,n,r,i={}){const s=await fi(t,e,n,r,i);return"mfaPendingCredential"in s&&bt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function ny(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Pd(t.config,i):`${t.config.apiScheme}://${i}`;return h1.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class g1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(xt(this.auth,"network-request-failed")),f1.get())})}}function io(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=xt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function m1(t,e){return fi(t,"POST","/v1/accounts:delete",e)}async function hl(t,e){return fi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Qi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _1(t,e=!1){const n=rt(t),r=await n.getIdToken(e),i=Dd(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Qi(Na(i.auth_time)),issuedAtTime:Qi(Na(i.iat)),expirationTime:Qi(Na(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Na(t){return Number(t)*1e3}function Dd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return wo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Yo(n);return i?JSON.parse(i):(wo("Failed to decode base64 JWT payload"),null)}catch(i){return wo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $f(t){const e=Dd(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ws(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ln&&y1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function y1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class v1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ku{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qi(this.lastLoginAt),this.creationTime=Qi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function fl(t){var h;const e=t.auth,n=await t.getIdToken(),r=await ws(t,hl(e,{idToken:n}));M(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(h=i.providerUserInfo)!=null&&h.length?ry(i.providerUserInfo):[],o=C1(t.providerData,s),l=t.isAnonymous,a=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),u=l?a:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Ku(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function w1(t){const e=rt(t);await fl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function C1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ry(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function S1(t,e){const n=await ty(t,{},async()=>{const r=ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await ny(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const a={method:"POST",headers:l,body:r};return t.emulatorConfig&&Ts(t.emulatorConfig.host)&&(a.credentials="include"),ey.fetch()(o,a)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function E1(t,e){return fi(t,"POST","/v2/accounts:revokeToken",Nd(t,e))}/**
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
 */class Wr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$f(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){M(e.length!==0,"internal-error");const n=$f(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await S1(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Wr;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wr,this.toJSON())}_performRefresh(){return Bt("not implemented")}}/**
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
 */function sn(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class wt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new v1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ku(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ws(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _1(this,e)}reload(){return w1(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new wt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await fl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mt(this.auth.app))return Promise.reject(Xn(this.auth));const e=await this.getIdToken();return await ws(this,m1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,a=n._redirectEventId??void 0,u=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:h,emailVerified:d,isAnonymous:y,providerData:g,stsTokenManager:C}=n;M(h&&C,e,"internal-error");const P=Wr.fromJSON(this.name,C);M(typeof h=="string",e,"internal-error"),sn(r,e.name),sn(i,e.name),M(typeof d=="boolean",e,"internal-error"),M(typeof y=="boolean",e,"internal-error"),sn(s,e.name),sn(o,e.name),sn(l,e.name),sn(a,e.name),sn(u,e.name),sn(f,e.name);const m=new wt({uid:h,auth:e,email:i,emailVerified:d,displayName:r,isAnonymous:y,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:P,createdAt:u,lastLoginAt:f});return g&&Array.isArray(g)&&(m.providerData=g.map(p=>({...p}))),a&&(m._redirectEventId=a),m}static async _fromIdTokenResponse(e,n,r=!1){const i=new Wr;i.updateFromServerResponse(n);const s=new wt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await fl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];M(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?ry(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Wr;l.updateFromIdToken(r);const a=new wt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ku(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,u),a}}/**
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
 */const Vf=new Map;function Wt(t){Jt(t instanceof Function,"Expected a class definition");let e=Vf.get(t);return e?(Jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vf.set(t,e),e)}/**
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
 */class iy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}iy.type="NONE";const Gf=iy;/**
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
 */function Co(t,e,n){return`firebase:${t}:${e}:${n}`}class Hr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Co(this.userKey,i.apiKey,s),this.fullPersistenceKey=Co("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await hl(this.auth,{idToken:e}).catch(()=>{});return n?wt._fromGetAccountInfoResponse(this.auth,n,e):null}return wt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Hr(Wt(Gf),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Wt(Gf);const o=Co(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){let h;if(typeof f=="string"){const d=await hl(e,{idToken:f}).catch(()=>{});if(!d)break;h=await wt._fromGetAccountInfoResponse(e,d,f)}else h=wt._fromJSON(e,f);u!==s&&(l=h),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Hr(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Hr(s,e,r))}}/**
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
 */function Kf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ay(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cy(e))return"Blackberry";if(dy(e))return"Webos";if(oy(e))return"Safari";if((e.includes("chrome/")||ly(e))&&!e.includes("edge/"))return"Chrome";if(uy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sy(t=ze()){return/firefox\//i.test(t)}function oy(t=ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ly(t=ze()){return/crios\//i.test(t)}function ay(t=ze()){return/iemobile/i.test(t)}function uy(t=ze()){return/android/i.test(t)}function cy(t=ze()){return/blackberry/i.test(t)}function dy(t=ze()){return/webos/i.test(t)}function bd(t=ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function x1(t=ze()){var e;return bd(t)&&!!((e=window.navigator)!=null&&e.standalone)}function k1(){return Iw()&&document.documentMode===10}function hy(t=ze()){return bd(t)||uy(t)||dy(t)||cy(t)||/windows phone/i.test(t)||ay(t)}/**
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
 */function fy(t,e=[]){let n;switch(t){case"Browser":n=Kf(ze());break;case"Worker":n=`${Kf(ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ui}/${r}`}/**
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
 */class I1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function T1(t,e={}){return fi(t,"GET","/v2/passwordPolicy",Nd(t,e))}/**
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
 */const R1=6;class A1{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??R1,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class P1{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qf(this),this.idTokenSubscription=new Qf(this),this.beforeStateQueue=new I1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Z_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Wt(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Hr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await hl(this,{idToken:e}),r=await wt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(mt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=c1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mt(this.app))return Promise.reject(Xn(this));const n=e?rt(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mt(this.app)?Promise.reject(Xn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mt(this.app)?Promise.reject(Xn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await T1(this),n=new A1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Is("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await E1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Wt(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await Hr.create(this,[Wt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(mt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&o1(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Hl(t){return rt(t)}class Qf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fw(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Od={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function N1(t){Od=t}function D1(t){return Od.loadJS(t)}function b1(){return Od.gapiScript}function O1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function L1(t,e){const n=Qc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(rr(s,e??{}))return i;bt(i,"already-initialized")}return n.initialize({options:e})}function F1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Wt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function M1(t,e,n){const r=Hl(t);M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=py(e),{host:o,port:l}=j1(e),a=l===null?"":`:${l}`,u={url:`${s}//${o}${a}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){M(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),M(rr(u,r.config.emulator)&&rr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ts(o)?Dm(`${s}//${o}${a}`):z1()}function py(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function j1(t){const e=py(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Yf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Yf(o)}}}function Yf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function z1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class gy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Bt("not implemented")}_getIdTokenResponse(e){return Bt("not implemented")}_linkToIdToken(e,n){return Bt("not implemented")}_getReauthenticationResolver(e){return Bt("not implemented")}}/**
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
 */async function $r(t,e){return p1(t,"POST","/v1/accounts:signInWithIdp",Nd(t,e))}/**
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
 */const U1="http://localhost";class ur extends gy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ur(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new ur(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $r(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,$r(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$r(e,n)}buildRequest(){const e={requestUri:U1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ai(n)}return e}}/**
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
 */class Ld{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Os extends Ld{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class dn extends Os{constructor(){super("facebook.com")}static credential(e){return ur._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dn.credential(e.oauthAccessToken)}catch{return null}}}dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";dn.PROVIDER_ID="facebook.com";/**
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
 */class Mt extends Os{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ur._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Mt.credential(n,r)}catch{return null}}}Mt.GOOGLE_SIGN_IN_METHOD="google.com";Mt.PROVIDER_ID="google.com";/**
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
 */class hn extends Os{constructor(){super("github.com")}static credential(e){return ur._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.GITHUB_SIGN_IN_METHOD="github.com";hn.PROVIDER_ID="github.com";/**
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
 */class fn extends Os{constructor(){super("twitter.com")}static credential(e,n){return ur._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return fn.credential(n,r)}catch{return null}}}fn.TWITTER_SIGN_IN_METHOD="twitter.com";fn.PROVIDER_ID="twitter.com";/**
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
 */class ri{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await wt._fromIdTokenResponse(e,r,i),o=qf(r);return new ri({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=qf(r);return new ri({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function qf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class pl extends Ln{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,pl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new pl(e,n,r,i)}}function my(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?pl._fromErrorAndOperation(t,s,e,r):s})}async function B1(t,e,n=!1){const r=await ws(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ri._forOperation(t,"link",r)}/**
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
 */async function W1(t,e,n=!1){const{auth:r}=t;if(mt(r.app))return Promise.reject(Xn(r));const i="reauthenticate";try{const s=await ws(t,my(r,i,e,t),n);M(s.idToken,r,"internal-error");const o=Dd(s.idToken);M(o,r,"internal-error");const{sub:l}=o;return M(t.uid===l,r,"user-mismatch"),ri._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&bt(r,"user-mismatch"),s}}/**
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
 */async function H1(t,e,n=!1){if(mt(t.app))return Promise.reject(Xn(t));const r="signIn",i=await my(t,r,e),s=await ri._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function $1(t,e,n,r){return rt(t).onIdTokenChanged(e,n,r)}function V1(t,e,n){return rt(t).beforeAuthStateChanged(e,n)}function G1(t,e,n,r){return rt(t).onAuthStateChanged(e,n,r)}function Xf(t){return rt(t).signOut()}const gl="__sak";/**
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
 */class _y{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gl,"1"),this.storage.removeItem(gl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const K1=1e3,Q1=10;class yy extends _y{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);k1()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Q1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},K1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}yy.type="LOCAL";const Y1=yy;/**
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
 */class vy extends _y{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vy.type="SESSION";const wy=vy;/**
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
 */function q1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class $l{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new $l(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await q1(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$l.receivers=[];/**
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
 */function Fd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class X1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Fd("",20);i.port1.start();const f=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(d.data.response);break;default:clearTimeout(f),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Dt(){return window}function J1(t){Dt().location.href=t}/**
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
 */function Cy(){return typeof Dt().WorkerGlobalScope<"u"&&typeof Dt().importScripts=="function"}async function Z1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ek(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function tk(){return Cy()?self:null}/**
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
 */const Sy="firebaseLocalStorageDb",nk=1,ml="firebaseLocalStorage",Ey="fbase_key";class Ls{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vl(t,e){return t.transaction([ml],e?"readwrite":"readonly").objectStore(ml)}function rk(){const t=indexedDB.deleteDatabase(Sy);return new Ls(t).toPromise()}function xy(){const t=indexedDB.open(Sy,nk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ml,{keyPath:Ey})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ml)?e(r):(r.close(),await rk(),e(await xy()))})})}async function Jf(t,e,n){const r=Vl(t,!0).put({[Ey]:e,value:n});return new Ls(r).toPromise()}async function ik(t,e){const n=Vl(t,!1).get(e),r=await new Ls(n).toPromise();return r===void 0?null:r.value}function Zf(t,e){const n=Vl(t,!0).delete(e);return new Ls(n).toPromise()}const sk=800,ok=3;class ky{constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=xy(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ok)throw r;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return Cy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$l._getInstance(tk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await Z1(),!this.activeServiceWorker)return;this.sender=new X1(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ek()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Jf(e,gl,"1"),await Zf(e,gl)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ik(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Vl(i,!1).getAll();return new Ls(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ky.type="LOCAL";const lk=ky;new bs(3e4,6e4);/**
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
 */function Iy(t,e){return e?Wt(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Md extends gy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $r(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $r(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $r(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ak(t){return H1(t.auth,new Md(t),t.bypassAuthState)}function uk(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),W1(n,new Md(t),t.bypassAuthState)}async function ck(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),B1(n,new Md(t),t.bypassAuthState)}/**
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
 */class Ty{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ak;case"linkViaPopup":case"linkViaRedirect":return ck;case"reauthViaPopup":case"reauthViaRedirect":return uk;default:bt(this.auth,"internal-error")}}resolve(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const dk=new bs(2e3,1e4);async function hk(t,e,n){if(mt(t.app))return Promise.reject(xt(t,"operation-not-supported-in-this-environment"));const r=Hl(t);l1(t,e,Ld);const i=Iy(r,n);return new Qn(r,"signInViaPopup",e,i).executeNotNull()}class Qn extends Ty{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Qn.currentPopupAction&&Qn.currentPopupAction.cancel(),Qn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){Jt(this.filter.length===1,"Popup operations only handle one event");const e=Fd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dk.get())};e()}}Qn.currentPopupAction=null;/**
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
 */const fk="pendingRedirect",So=new Map;class pk extends Ty{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=So.get(this.auth._key());if(!e){try{const r=await gk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}So.set(this.auth._key(),e)}return this.bypassAuthState||So.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gk(t,e){const n=yk(e),r=_k(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function mk(t,e){So.set(t._key(),e)}function _k(t){return Wt(t._redirectPersistence)}function yk(t){return Co(fk,t.config.apiKey,t.name)}async function vk(t,e,n=!1){if(mt(t.app))return Promise.reject(Xn(t));const r=Hl(t),i=Iy(r,e),o=await new pk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const wk=10*60*1e3;class Ck{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Sk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ry(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(xt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wk&&this.cachedEventUids.clear(),this.cachedEventUids.has(ep(e))}saveEventToCache(e){this.cachedEventUids.add(ep(e)),this.lastProcessedEventTime=Date.now()}}function ep(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ry({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Sk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ry(t);default:return!1}}/**
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
 */async function Ek(t,e={}){return fi(t,"GET","/v1/projects",e)}/**
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
 */const xk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kk=/^https?/;async function Ik(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ek(t);for(const n of e)try{if(Tk(n))return}catch{}bt(t,"unauthorized-domain")}function Tk(t){const e=Gu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!kk.test(n))return!1;if(xk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Rk=new bs(3e4,6e4);function tp(){const t=Dt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ak(t){return new Promise((e,n)=>{var i,s,o;function r(){tp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tp(),n(xt(t,"network-request-failed"))},timeout:Rk.get()})}if((s=(i=Dt().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Dt().gapi)!=null&&o.load)r();else{const l=O1("iframefcb");return Dt()[l]=()=>{gapi.load?r():n(xt(t,"network-request-failed"))},D1(`${b1()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Eo=null,e})}let Eo=null;function Pk(t){return Eo=Eo||Ak(t),Eo}/**
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
 */const Nk=new bs(5e3,15e3),Dk="__/auth/iframe",bk="emulator/auth/iframe",Ok={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Lk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fk(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Pd(e,bk):`https://${t.config.authDomain}/${Dk}`,r={apiKey:e.apiKey,appName:t.name,v:ui},i=Lk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ai(r).slice(1)}`}async function Mk(t){const e=await Pk(t),n=Dt().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:Fk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ok,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=xt(t,"network-request-failed"),l=Dt().setTimeout(()=>{s(o)},Nk.get());function a(){Dt().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
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
 */const jk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zk=500,Uk=600,Bk="_blank",Wk="http://localhost";class np{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Hk(t,e,n,r=zk,i=Uk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a={...jk,width:r.toString(),height:i.toString(),top:s,left:o},u=ze().toLowerCase();n&&(l=ly(u)?Bk:n),sy(u)&&(e=e||Wk,a.scrollbars="yes");const f=Object.entries(a).reduce((d,[y,g])=>`${d}${y}=${g},`,"");if(x1(u)&&l!=="_self")return $k(e||"",l),new np(null);const h=window.open(e||"",l,f);M(h,t,"popup-blocked");try{h.focus()}catch{}return new np(h)}function $k(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Vk="__/auth/handler",Gk="emulator/auth/handler",Kk=encodeURIComponent("fac");async function rp(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ui,eventId:i};if(e instanceof Ld){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Tu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,h]of Object.entries({}))o[f]=h}if(e instanceof Os){const f=e.getScopes().filter(h=>h!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const a=await t._getAppCheckToken(),u=a?`#${Kk}=${encodeURIComponent(a)}`:"";return`${Qk(t)}?${ai(l).slice(1)}${u}`}function Qk({config:t}){return t.emulator?Pd(t,Gk):`https://${t.authDomain}/${Vk}`}/**
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
 */const Da="webStorageSupport";class Yk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wy,this._completeRedirectFn=vk,this._overrideRedirectResult=mk}async _openPopup(e,n,r,i){var o;Jt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await rp(e,n,r,Gu(),i);return Hk(e,s,Fd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await rp(e,n,r,Gu(),i);return J1(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Jt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Mk(e),r=new Ck(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Da,{type:Da},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Da];s!==void 0&&n(!!s),bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ik(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return hy()||oy()||bd()}}const qk=Yk;var ip="@firebase/auth",sp="1.13.2";/**
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
 */class Xk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Jk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Zk(t){Zr(new ir("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fy(t)},u=new P1(r,i,s,a);return F1(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zr(new ir("auth-internal",e=>{const n=Hl(e.getProvider("auth").getImmediate());return(r=>new Xk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(ip,sp,Jk(t)),In(ip,sp,"esm2020")}/**
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
 */const eI=5*60,tI=Am("authIdTokenMaxAge")||eI;let op=null;const nI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>tI)return;const i=n==null?void 0:n.token;op!==i&&(op=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function rI(t=Fm()){const e=Qc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=L1(t,{popupRedirectResolver:qk,persistence:[lk,Y1,wy]}),r=Am("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=nI(s.toString());V1(n,o,()=>o(n.currentUser)),$1(n,l=>o(l))}}const i=Tm("auth");return i&&M1(n,`http://${i}`),n}function iI(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}N1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=xt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",iI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Zk("Browser");const sI={apiKey:"AIzaSyBBsCbQtT7NuCCI6owVaGH7kNWpNbPJirA",authDomain:"pet-health-book-f8fe5.firebaseapp.com",databaseURL:"https://pet-health-book-f8fe5-default-rtdb.firebaseio.com",projectId:"pet-health-book-f8fe5",storageBucket:"pet-health-book-f8fe5.firebasestorage.app",messagingSenderId:"760283215334",appId:"1:760283215334:web:4aeb51a4c2cf2a288d1227"},Ay=Lm(sI),on=n1(Ay),so=rI(Ay),oI=new Mt,it={病院:"🏥",ワクチン:"💉",薬:"💊",体重:"⚖️",フード:"🍖",その他:"📝"},Wn={病院:"#EF4444",ワクチン:"#8B5CF6",薬:"#3B82F6",体重:"#10B981",フード:"#F59E0B",その他:"#6B7280"},Ri={猫:"🐱",犬:"🐶",うさぎ:"🐰",ハムスター:"🐹",鳥:"🐦",魚:"🐠",その他:"🐾"},ba={pets:[],records:[],nextPetId:1,nextRecordId:1};function lI(t){return t.map(e=>({...e,category:e.category==="診察"?"病院":e.category}))}function lp(t){if(!t)return"";const e=new Date(t),n=new Date,r=n.getFullYear()-e.getFullYear(),i=n.getMonth()-e.getMonth(),s=r*12+i;return s<12?`${s}ヶ月`:`${Math.floor(s/12)}歳${s%12>0?s%12+"ヶ月":""}`}function aI(){var Ud;const[t,e]=Q.useState("loading"),[n,r]=Q.useState("loading"),[i,s]=Q.useState(null),[o,l]=Q.useState(!1),[a,u]=Q.useState("home"),[f,h]=Q.useState(null),[d,y]=Q.useState({}),[g,C]=Q.useState({}),[P,m]=Q.useState("すべて"),[p,_]=Q.useState(""),[S,A]=Q.useState([]),[T,R]=Q.useState(!1),[x,L]=Q.useState(""),[j,N]=Q.useState(""),[G,we]=Q.useState(""),[me,Mn]=Q.useState(!1),[dt,pi]=Q.useState(!1);Q.useEffect(()=>{const v=G1(so,w=>{e(w),w||(r(null),s(null))});return()=>v()},[]),Q.useEffect(()=>{if(!t||t==="loading")return;const v=rn(on,`pet-health-book/members/${t.uid}`),w=Pa(v,b=>{const X=b.val();r(X||null)});return()=>w()},[t]),Q.useEffect(()=>{if(!n||n==="loading")return;const v=rn(on,`pet-health-book/groups/${n}/data`),w=Pa(v,b=>{const X=b.val();if(X){const Ot=X.records?Array.isArray(X.records)?X.records:Object.values(X.records):[],gi={...X,pets:X.pets?Array.isArray(X.pets)?X.pets:Object.values(X.pets):[],records:lI(Ot)};s(gi)}else _r(v,ba),s(ba)},b=>{console.error("Firebase sync error:",b),Pe("⚠️ 同期エラー。オフラインで動作中"),s(ba)});return()=>w()},[n]);async function D(){if(!t||t==="loading")return;const v=Math.random().toString(36).slice(2,10).toUpperCase();await _r(rn(on,`pet-health-book/groups/${v}/info`),{createdBy:t.uid,createdAt:new Date().toISOString()}),await _r(rn(on,`pet-health-book/members/${t.uid}`),v),r(v),Pe("グループを作成しました 🎉")}async function z(){if(!t||t==="loading")return;const v=x.trim().toUpperCase();if(!v){N("招待コードを入力してください");return}const w=rn(on,`pet-health-book/groups/${v}/info`);if(!(await new Promise(X=>Pa(w,X,{onlyOnce:!0}))).val()){N("招待コードが見つかりません");return}await _r(rn(on,`pet-health-book/members/${t.uid}`),v),r(v),Pe("グループに参加しました 🎉")}async function B(){!t||t==="loading"||confirm("このグループから抜けますか？（データは残ります）")&&(await _r(rn(on,`pet-health-book/members/${t.uid}`),null),r(null),s(null))}function le(v){if(!n||n==="loading")return;l(!0);const w=rn(on,`pet-health-book/groups/${n}/data`);_r(w,v).then(()=>l(!1)).catch(b=>{console.error("Save error:",b),l(!1),Pe("⚠️ 保存に失敗しました")})}function Z(v){s(w=>{if(!w)return w;const b=v(w);return le(b),b})}const Pe=v=>{_(v),setTimeout(()=>_(""),2500)};function It(v,w){if(!i)return;const b=fr(i.pets),X=b.findIndex(Fe=>Fe.id===v);if(w==="up"&&X===0||w==="down"&&X===b.length-1)return;const Ot=w==="up"?X-1:X+1,gi=b.map((Fe,pr)=>pr===X?{...Fe,order:Ot}:pr===Ot?{...Fe,order:X}:{...Fe,order:pr});Z(Fe=>({...Fe,pets:gi}))}function fr(v){return[...v].sort((w,b)=>{const X=w.order!==void 0?w.order:w.id,Ot=b.order!==void 0?b.order:b.id;return X-Ot})}if(t==="loading")return c.jsxs("div",{style:{minHeight:"100vh",background:"#FDF6EE",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:16},children:[c.jsx("div",{style:{fontSize:48},children:"🐾"}),c.jsx("div",{style:{color:"#9A7A5C",fontSize:16},children:"読み込み中..."})]});if(!t)return c.jsx("div",{style:{minHeight:"100vh",background:"#FDF6EE",display:"flex",alignItems:"center",justifyContent:"center",padding:24},children:c.jsxs("div",{style:{background:"#FFF",borderRadius:24,padding:"40px 32px",maxWidth:360,width:"100%",textAlign:"center",boxShadow:"0 4px 24px rgba(0,0,0,0.08)"},children:[c.jsx("div",{style:{fontSize:64,marginBottom:16},children:"🐾"}),c.jsx("h1",{style:{fontSize:24,fontWeight:700,color:"#3D2B1A",margin:"0 0 8px"},children:"ペット健康手帳"}),c.jsxs("p",{style:{color:"#9A7A5C",fontSize:14,margin:"0 0 32px",lineHeight:1.6},children:["大切な家族の健康を記録しよう。",c.jsx("br",{}),"Googleアカウントでログインしてください。"]}),c.jsxs("button",{onClick:async()=>{try{await hk(so,oI)}catch(v){console.error(v),alert("ログインに失敗しました: "+((v==null?void 0:v.message)||v))}},style:{display:"flex",alignItems:"center",justifyContent:"center",gap:12,width:"100%",background:"#FFF",border:"1.5px solid #E0D5C8",borderRadius:12,padding:"14px 20px",fontSize:15,fontWeight:600,color:"#3D2B1A",cursor:"pointer",boxShadow:"0 2px 8px rgba(0,0,0,0.06)"},children:[c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 48 48",children:[c.jsx("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),c.jsx("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),c.jsx("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),c.jsx("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"})]}),"Googleでログイン"]}),c.jsx("p",{style:{color:"#BBA08A",fontSize:12,marginTop:20},children:"ログインした方のみデータにアクセスできます"})]})});if(n==="loading")return c.jsxs("div",{style:{minHeight:"100vh",background:"#FDF6EE",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:16},children:[c.jsx("div",{style:{fontSize:48},children:"🐾"}),c.jsx("div",{style:{color:"#9A7A5C",fontSize:16},children:"読み込み中..."})]});if(!n)return c.jsx("div",{style:{minHeight:"100vh",background:"#FDF6EE",display:"flex",alignItems:"center",justifyContent:"center",padding:24},children:c.jsxs("div",{style:{background:"#FFF",borderRadius:24,padding:"36px 28px",maxWidth:380,width:"100%",boxShadow:"0 4px 24px rgba(0,0,0,0.08)"},children:[c.jsxs("div",{style:{textAlign:"center",marginBottom:28},children:[c.jsx("div",{style:{fontSize:48},children:"🏠"}),c.jsx("h2",{style:{fontSize:20,fontWeight:700,color:"#3D2B1A",margin:"12px 0 6px"},children:"グループを設定"}),c.jsxs("p",{style:{color:"#9A7A5C",fontSize:13,lineHeight:1.6},children:["家族で同じグループに入ると",c.jsx("br",{}),"データを共有できます"]})]}),c.jsx("button",{onClick:D,style:{width:"100%",background:"#C49A6C",color:"#FFF",border:"none",borderRadius:14,padding:"16px",fontSize:15,fontWeight:700,cursor:"pointer",marginBottom:12},children:"🆕 新しいグループを作る"}),c.jsx("div",{style:{textAlign:"center",color:"#BBA08A",fontSize:13,margin:"4px 0 12px"},children:"または"}),c.jsxs("div",{style:{background:"#FFF8F0",borderRadius:14,padding:16},children:[c.jsx("div",{style:{fontWeight:700,color:"#3D2B1A",fontSize:14,marginBottom:10},children:"👨‍👩‍👧 招待コードで参加"}),c.jsx("input",{style:{width:"100%",padding:"10px 14px",borderRadius:10,border:"1.5px solid #E8D5BC",fontSize:16,letterSpacing:4,textTransform:"uppercase",boxSizing:"border-box",textAlign:"center"},placeholder:"例: AB12CD34",value:x,onChange:v=>{L(v.target.value),N("")},maxLength:8}),j&&c.jsx("div",{style:{color:"#EF4444",fontSize:12,marginTop:6},children:j}),c.jsx("button",{onClick:z,style:{width:"100%",background:"#3D2B1A",color:"#FFF",border:"none",borderRadius:10,padding:"12px",fontSize:14,fontWeight:700,cursor:"pointer",marginTop:10},children:"参加する"})]}),c.jsx("button",{onClick:()=>Xf(so),style:{width:"100%",background:"none",border:"none",color:"#BBA08A",fontSize:13,cursor:"pointer",marginTop:20},children:"ログアウト"})]})});if(!i)return c.jsxs("div",{style:{minHeight:"100vh",background:"#FDF6EE",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:16},children:[c.jsx("div",{style:{fontSize:48},children:"🐾"}),c.jsx("div",{style:{color:"#9A7A5C",fontSize:16},children:"データを読み込み中..."})]});const U=i.pets.find(v=>v.id===f)??null,tn=i.records.filter(v=>v.petId===f).filter(v=>P==="すべて"||v.category===P).filter(v=>{if(!G.trim())return!0;const w=G.trim().toLowerCase();return v.title.toLowerCase().includes(w)||v.description.toLowerCase().includes(w)||v.date.includes(w)}).sort((v,w)=>w.date.localeCompare(v.date));function Py(){const v=i.pets.length,w={id:i.nextPetId,name:d.name||"名前未設定",species:d.species||"その他",breed:d.breed||"",birthdate:d.birthdate||"",color:d.color||"#C49A6C",icon:Ri[d.species||""]||"🐾",photo:d.photo||"",weight:d.weight||"",microchip:d.microchip||"",insurance:d.insurance||"",vet:d.vet||"",notes:d.notes||"",order:v};Z(b=>({...b,pets:[...b.pets,w],nextPetId:b.nextPetId+1})),Pe(`${w.name}を追加しました 🎉`),u("home")}function Ny(){Z(v=>({...v,pets:v.pets.map(w=>w.id===f?{...w,...d,icon:Ri[d.species||w.species]||w.icon,photo:d.photo??w.photo}:w)})),Pe("プロフィールを更新しました ✅"),u("petDetail")}function Dy(v){confirm("このペットと全記録を削除しますか？")&&(Z(w=>({...w,pets:w.pets.filter(b=>b.id!==v),records:w.records.filter(b=>b.petId!==v)})),u("home"),Pe("削除しました"))}function by(){const v={id:i.nextRecordId,petId:f,date:g.date||new Date().toISOString().slice(0,10),category:g.category||"その他",title:g.title||"記録",description:g.description||"",weight:g.weight||"",nextDate:g.nextDate||""};Z(w=>({...w,records:[...w.records,v],nextRecordId:w.nextRecordId+1})),Pe("記録を追加しました 📝"),u("recordList")}function zd(v){Z(w=>({...w,records:w.records.filter(b=>b.id!==v)})),Pe("記録を削除しました")}function Oy(){Z(v=>({...v,records:v.records.map(w=>w.id===g.id?{...w,...g}:w)})),Pe("記録を更新しました ✅"),u("recordList")}if(a==="home"){const v=fr(i.pets);return c.jsxs(yr,{children:[c.jsxs("div",{style:{background:"linear-gradient(135deg, #FFF5E9, #FDE8D0)",borderRadius:20,padding:"24px 20px 20px",marginBottom:20,textAlign:"center",position:"relative",overflow:"hidden"},children:[c.jsx("div",{style:{position:"absolute",top:-10,right:-10,fontSize:80,opacity:.08,lineHeight:1},children:"🐾"}),c.jsx("div",{style:{position:"absolute",bottom:-10,left:-10,fontSize:60,opacity:.06,lineHeight:1},children:"🐱"}),c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10,marginBottom:4},children:[c.jsx("span",{style:{fontSize:28},children:"🐾"}),c.jsx("h1",{style:{margin:0,fontSize:22,fontWeight:700,color:"#3D2B1A"},children:"ペット健康手帳"})]}),c.jsx("p",{style:{margin:"0 0 14px",color:"#9A7A5C",fontSize:13},children:"大切な家族の健康を記録しよう"}),c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,flexWrap:"wrap"},children:[t.photoURL&&c.jsx("img",{src:t.photoURL,alt:"avatar",style:{width:24,height:24,borderRadius:"50%",border:"2px solid #FFF"}}),c.jsx("span",{style:{fontSize:12,color:"#7A5C3A",fontWeight:600},children:t.displayName||t.email}),c.jsx("span",{style:{color:"#C49A6C",fontSize:10},children:"|"}),c.jsx("button",{onClick:()=>Xf(so),style:{background:"none",border:"none",fontSize:12,color:"#9A7A5C",cursor:"pointer",padding:0},children:"ログアウト"})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginTop:10,flexWrap:"wrap"},children:[c.jsxs("div",{style:{background:"#FFF",borderRadius:20,padding:"4px 12px",fontSize:11,color:"#7A5C3A",fontWeight:600,letterSpacing:1,boxShadow:"0 1px 4px rgba(0,0,0,0.08)"},children:["🏠 ",n]}),o&&c.jsx("div",{style:{fontSize:11,color:"#9A7A5C",background:"#FFF",borderRadius:20,padding:"4px 10px"},children:"☁️ 同期中"}),c.jsx("button",{onClick:B,style:{background:"none",border:"none",fontSize:11,color:"#BBA08A",cursor:"pointer",padding:0},children:"グループを抜ける"})]})]}),c.jsxs("div",{style:{display:"flex",gap:8,marginBottom:16,justifyContent:"flex-end"},children:[i.pets.length>=2&&c.jsx("button",{onClick:()=>Mn(!0),style:{background:"#FFF0DC",border:"none",borderRadius:20,padding:"8px 14px",fontSize:13,fontWeight:600,color:"#7A5C3A",cursor:"pointer"},children:"📊 体重比較"}),i.pets.length>=2&&c.jsx("button",{onClick:()=>pi(w=>!w),style:{background:dt?"#C49A6C":"#FFF0DC",border:"none",borderRadius:20,padding:"8px 14px",fontSize:13,fontWeight:600,color:dt?"#FFF":"#7A5C3A",cursor:"pointer"},children:dt?"✅ 完了":"↕️ 並び替え"})]}),dt&&c.jsx("div",{style:{background:"#FFF8EE",border:"1px solid #F0D9B0",borderRadius:12,padding:"10px 14px",marginBottom:12,fontSize:13,color:"#7A5C3A",textAlign:"center"},children:"↑↓ ボタンでペットの順番を変更できます"}),i.pets.length===0&&c.jsx(uI,{onStart:()=>{y({}),u("addPet")}}),c.jsxs("div",{style:I.petGrid,children:[v.map((w,b)=>c.jsxs("div",{style:{position:"relative"},children:[c.jsxs("button",{style:I.petCard,onClick:()=>{dt||(h(w.id),u("petDetail"))},children:[c.jsx("div",{style:{...I.petCardIcon,background:w.color+"33",overflow:"hidden"},children:w.photo?c.jsx("img",{src:w.photo,alt:w.name,style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"50%"}}):c.jsx("span",{style:{fontSize:40},children:w.icon})}),c.jsx("div",{style:I.petCardName,children:w.name}),c.jsxs("div",{style:I.petCardSub,children:[w.species,w.breed?` / ${w.breed}`:""]}),w.birthdate&&c.jsx("div",{style:I.petCardAge,children:lp(w.birthdate)}),c.jsxs("div",{style:I.petCardRecords,children:["記録 ",i.records.filter(X=>X.petId===w.id).length,"件"]})]}),dt&&c.jsxs("div",{style:{position:"absolute",top:6,right:6,display:"flex",flexDirection:"column",gap:3},children:[c.jsx("button",{onClick:()=>It(w.id,"up"),disabled:b===0,style:{background:b===0?"#E8D5BC":"#C49A6C",border:"none",borderRadius:6,width:26,height:26,color:"#FFF",cursor:b===0?"default":"pointer",fontSize:13,display:"flex",alignItems:"center",justifyContent:"center"},children:"↑"}),c.jsx("button",{onClick:()=>It(w.id,"down"),disabled:b===v.length-1,style:{background:b===v.length-1?"#E8D5BC":"#C49A6C",border:"none",borderRadius:6,width:26,height:26,color:"#FFF",cursor:b===v.length-1?"default":"pointer",fontSize:13,display:"flex",alignItems:"center",justifyContent:"center"},children:"↓"})]})]},w.id)),!dt&&c.jsxs("button",{style:I.addPetCard,onClick:()=>{y({}),u("addPet")},children:[c.jsx("span",{style:{fontSize:32},children:"➕"}),c.jsx("div",{style:{marginTop:8,fontWeight:600,color:"#C49A6C"},children:"ペットを追加"})]})]}),me&&c.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",padding:16},onClick:()=>Mn(!1),children:c.jsxs("div",{style:{background:"#FFF",borderRadius:20,padding:24,width:"100%",maxWidth:640,maxHeight:"85vh",overflowY:"auto"},onClick:w=>w.stopPropagation(),children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20},children:[c.jsx("div",{style:{fontWeight:700,fontSize:17,color:"#3D2B1A"},children:"📊 体重比較グラフ"}),c.jsx("button",{onClick:()=>Mn(!1),style:{background:"none",border:"none",fontSize:20,cursor:"pointer",color:"#9A7A5C"},children:"✕"})]}),c.jsx(cI,{pets:i.pets,records:i.records})]})}),c.jsx(vr,{message:p})]})}if(a==="petDetail"&&U)return c.jsxs(yr,{children:[c.jsx(Ai,{onClick:()=>u("home")}),c.jsxs("div",{style:{...I.petBanner,background:`linear-gradient(135deg, ${U.color}44, ${U.color}22)`},children:[U.photo?c.jsx("img",{src:U.photo,alt:U.name,style:{width:80,height:80,borderRadius:"50%",objectFit:"cover",flexShrink:0}}):c.jsx("span",{style:{fontSize:64},children:U.icon}),c.jsxs("div",{children:[c.jsx("h2",{style:{margin:0,fontSize:28,color:"#3D2B1A"},children:U.name}),c.jsxs("div",{style:{color:"#7A5C3A",marginTop:4},children:[U.species,U.breed?` / ${U.breed}`:"",U.birthdate&&c.jsxs("span",{style:{marginLeft:12},children:["🎂 ",lp(U.birthdate)]})]})]}),c.jsxs("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:[c.jsx(up,{onClick:()=>{y({...U}),u("editPet")},title:"編集",children:"✏️"}),c.jsx(up,{onClick:()=>Dy(U.id),title:"削除",danger:!0,children:"🗑️"})]})]}),c.jsxs("div",{style:I.infoGrid,children:[c.jsx(fI,{records:i.records,petId:U.id}),c.jsx(hI,{pet:U,onSave:v=>{Z(w=>({...w,pets:w.pets.map(b=>b.id===U.id?{...b,...v}:b)})),Pe("病院情報を更新しました ✅")}}),[{label:"マイクロチップ",value:U.microchip||"—"},{label:"保険",value:U.insurance||"—"}].map(v=>c.jsxs("div",{style:I.infoCard,children:[c.jsx("div",{style:I.infoLabel,children:v.label}),c.jsx("div",{style:I.infoValue,children:v.value})]},v.label))]}),U.notes&&c.jsxs("div",{style:I.notesBox,children:[c.jsx("span",{style:{marginRight:6},children:"📌"}),c.jsx(jd,{text:U.notes})]}),c.jsx("div",{style:I.sectionHeader,children:c.jsx("span",{children:"📊 カテゴリ別"})}),c.jsx("div",{style:I.categoryRow,children:Object.keys(it).map(v=>{const w=i.records.filter(b=>b.petId===U.id&&b.category===v).length;return c.jsxs("button",{style:I.catChip,onClick:()=>{m(v),we(""),u("recordList")},children:[c.jsx("span",{children:it[v]}),c.jsx("span",{style:{fontSize:11,color:"#7A5C3A"},children:v}),c.jsx("span",{style:{...I.catCount,background:Wn[v]},children:w})]},v)})}),c.jsxs("div",{style:I.sectionHeader,children:[c.jsx("span",{children:"📅 カレンダー"}),c.jsx("button",{style:I.linkBtn,onClick:()=>{m("すべて"),we(""),u("recordList")},children:"一覧で見る →"})]}),c.jsx(dI,{records:i.records.filter(v=>v.petId===U.id),onDayClick:v=>{v.length!==0&&(A(v),R(!0))}}),c.jsx("div",{style:I.fab,children:c.jsx("button",{style:I.fabBtn,onClick:()=>{C({date:new Date().toISOString().slice(0,10)}),u("addRecord")},children:"＋ 記録を追加"})}),T&&c.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:200,display:"flex",alignItems:"flex-end",justifyContent:"center"},onClick:()=>R(!1),children:c.jsxs("div",{style:{background:"#FDF6EE",borderRadius:"20px 20px 0 0",padding:24,width:"100%",maxWidth:600,maxHeight:"70vh",overflowY:"auto"},onClick:v=>v.stopPropagation(),children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16},children:[c.jsxs("div",{style:{fontWeight:700,fontSize:16,color:"#3D2B1A"},children:["📋 ",(Ud=S[0])==null?void 0:Ud.date,"の記録"]}),c.jsx("button",{onClick:()=>R(!1),style:{background:"none",border:"none",fontSize:20,cursor:"pointer",color:"#9A7A5C"},children:"✕"})]}),S.map(v=>c.jsx(cp,{record:v,onDelete:w=>{zd(w),R(!1)},onEdit:w=>{C({...w}),R(!1),u("editRecord")},expanded:!0},v.id))]})}),c.jsx(vr,{message:p})]});if(a==="addPet"||a==="editPet"){const v=a==="editPet";return c.jsxs(yr,{children:[c.jsx(Ai,{onClick:()=>u(v?"petDetail":"home")}),c.jsx("h2",{style:I.formTitle,children:v?"プロフィール編集":"新しいペットを追加"}),c.jsxs("div",{style:I.form,children:[c.jsx(ae,{label:"アイコン写真",children:c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[c.jsx("div",{style:{width:80,height:80,borderRadius:"50%",background:d.color?d.color+"33":"#C49A6C33",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,border:"2px dashed #C49A6C"},children:d.photo?c.jsx("img",{src:d.photo,alt:"preview",style:{width:"100%",height:"100%",objectFit:"cover"}}):c.jsx("span",{style:{fontSize:36},children:Ri[d.species||""]||"🐾"})}),c.jsxs("div",{style:{flex:1},children:[c.jsxs("label",{style:{display:"inline-block",background:"#C49A6C",color:"#FFF",borderRadius:10,padding:"10px 16px",cursor:"pointer",fontSize:14,fontWeight:600},children:["📷 写真を選択",c.jsx("input",{type:"file",accept:"image/*",style:{display:"none"},onChange:w=>{var Ot;const b=(Ot=w.target.files)==null?void 0:Ot[0];if(!b)return;const X=new FileReader;X.onload=gi=>{var pr;const Fe=new Image;Fe.onload=()=>{const Fs=document.createElement("canvas"),Ms=200;Fs.width=Ms,Fs.height=Ms;const Ly=Fs.getContext("2d"),js=Math.min(Fe.width,Fe.height),Fy=(Fe.width-js)/2,My=(Fe.height-js)/2;Ly.drawImage(Fe,Fy,My,js,js,0,0,Ms,Ms),y(jy=>({...jy,photo:Fs.toDataURL("image/jpeg",.7)}))},Fe.src=(pr=gi.target)==null?void 0:pr.result},X.readAsDataURL(b)}})]}),d.photo&&c.jsx("button",{style:{display:"block",marginTop:8,background:"none",border:"none",color:"#EF4444",cursor:"pointer",fontSize:13},onClick:()=>y(w=>({...w,photo:""})),children:"🗑️ 写真を削除"})]})]})}),c.jsx(ae,{label:"名前 *",children:c.jsx("input",{style:I.input,value:d.name||"",onChange:w=>y(b=>({...b,name:w.target.value})),placeholder:"例: じゅうべい"})}),c.jsx(ae,{label:"種類",children:c.jsxs("select",{style:I.input,value:d.species||"",onChange:w=>y(b=>({...b,species:w.target.value})),children:[c.jsx("option",{value:"",children:"選択してください"}),Object.keys(Ri).map(w=>c.jsxs("option",{value:w,children:[Ri[w]," ",w]},w))]})}),c.jsx(ae,{label:"品種",children:c.jsx("input",{style:I.input,value:d.breed||"",onChange:w=>y(b=>({...b,breed:w.target.value})),placeholder:"例: アメリカンショートヘア"})}),c.jsx(ae,{label:"生年月日",children:c.jsx("input",{type:"date",style:I.input,value:d.birthdate||"",onChange:w=>y(b=>({...b,birthdate:w.target.value}))})}),c.jsx(ae,{label:"体重 (kg)",children:c.jsx("input",{type:"number",step:"0.1",style:I.input,value:d.weight||"",onChange:w=>y(b=>({...b,weight:w.target.value})),placeholder:"例: 4.2"})}),c.jsx(ae,{label:"かかりつけ病院",children:c.jsx("input",{style:I.input,value:d.vet||"",onChange:w=>y(b=>({...b,vet:w.target.value})),placeholder:"例: ○○動物病院"})}),c.jsx(ae,{label:"マイクロチップ番号",children:c.jsx("input",{style:I.input,value:d.microchip||"",onChange:w=>y(b=>({...b,microchip:w.target.value}))})}),c.jsx(ae,{label:"ペット保険",children:c.jsx("input",{style:I.input,value:d.insurance||"",onChange:w=>y(b=>({...b,insurance:w.target.value})),placeholder:"例: アニコム"})}),c.jsx(ae,{label:"テーマカラー",children:c.jsx("input",{type:"color",style:{...I.input,height:44,padding:4},value:d.color||"#C49A6C",onChange:w=>y(b=>({...b,color:w.target.value}))})}),c.jsx(ae,{label:"メモ",children:c.jsx("textarea",{style:{...I.input,height:80,resize:"vertical"},value:d.notes||"",onChange:w=>y(b=>({...b,notes:w.target.value})),placeholder:"アレルギー、好き嫌いなど"})}),c.jsx("button",{style:I.primaryBtn,onClick:v?Ny:Py,children:v?"✅ 更新する":"🎉 追加する"})]}),c.jsx(vr,{message:p})]})}return a==="addRecord"&&U?c.jsxs(yr,{children:[c.jsx(Ai,{onClick:()=>u("petDetail")}),c.jsx("h2",{style:I.formTitle,children:"記録を追加"}),c.jsxs("p",{style:{textAlign:"center",color:"#7A5C3A",marginTop:-16,marginBottom:24},children:[U.icon," ",U.name]}),c.jsxs("div",{style:I.form,children:[c.jsx(ae,{label:"日付 *",children:c.jsx("input",{type:"date",style:I.input,value:g.date||"",onChange:v=>C(w=>({...w,date:v.target.value}))})}),c.jsx(ae,{label:"カテゴリ",children:c.jsx("div",{style:I.catSelector,children:Object.keys(it).map(v=>c.jsxs("button",{style:{...I.catOption,background:g.category===v?Wn[v]+"33":"#FFF7EE",border:g.category===v?`2px solid ${Wn[v]}`:"2px solid transparent"},onClick:()=>C(w=>({...w,category:v})),children:[c.jsx("span",{children:it[v]}),c.jsx("span",{style:{fontSize:12},children:v})]},v))})}),c.jsx(ae,{label:"タイトル *",children:c.jsx("input",{style:I.input,value:g.title||"",onChange:v=>C(w=>({...w,title:v.target.value})),placeholder:"例: 年次健診"})}),c.jsx(ae,{label:"詳細メモ",children:c.jsx("textarea",{style:{...I.input,height:100,resize:"vertical"},value:g.description||"",onChange:v=>C(w=>({...w,description:v.target.value})),placeholder:"診断内容、投薬量、気づいたことなど"})}),g.category==="体重"&&c.jsx(ae,{label:"体重 (kg)",children:c.jsx("input",{type:"number",step:"0.1",style:I.input,value:g.weight||"",onChange:v=>C(w=>({...w,weight:v.target.value})),placeholder:"例: 4.2"})}),c.jsx(ae,{label:"次回予定日",children:c.jsx("input",{type:"date",style:I.input,value:g.nextDate||"",onChange:v=>C(w=>({...w,nextDate:v.target.value}))})}),c.jsx("button",{style:I.primaryBtn,onClick:by,children:"📝 記録する"})]}),c.jsx(vr,{message:p})]}):a==="editRecord"&&U?c.jsxs(yr,{children:[c.jsx(Ai,{onClick:()=>u("recordList")}),c.jsx("h2",{style:I.formTitle,children:"記録を編集"}),c.jsxs("p",{style:{textAlign:"center",color:"#7A5C3A",marginTop:-16,marginBottom:24},children:[U.icon," ",U.name]}),c.jsxs("div",{style:I.form,children:[c.jsx(ae,{label:"日付 *",children:c.jsx("input",{type:"date",style:I.input,value:g.date||"",onChange:v=>C(w=>({...w,date:v.target.value}))})}),c.jsx(ae,{label:"カテゴリ",children:c.jsx("div",{style:I.catSelector,children:Object.keys(it).map(v=>c.jsxs("button",{style:{...I.catOption,background:g.category===v?Wn[v]+"33":"#FFF7EE",border:g.category===v?`2px solid ${Wn[v]}`:"2px solid transparent"},onClick:()=>C(w=>({...w,category:v})),children:[c.jsx("span",{children:it[v]}),c.jsx("span",{style:{fontSize:12},children:v})]},v))})}),c.jsx(ae,{label:"タイトル *",children:c.jsx("input",{style:I.input,value:g.title||"",onChange:v=>C(w=>({...w,title:v.target.value})),placeholder:"例: 年次健診"})}),c.jsx(ae,{label:"詳細メモ",children:c.jsx("textarea",{style:{...I.input,height:100,resize:"vertical"},value:g.description||"",onChange:v=>C(w=>({...w,description:v.target.value})),placeholder:"診断内容、投薬量、気づいたことなど"})}),g.category==="体重"&&c.jsx(ae,{label:"体重 (kg)",children:c.jsx("input",{type:"number",step:"0.1",style:I.input,value:g.weight||"",onChange:v=>C(w=>({...w,weight:v.target.value})),placeholder:"例: 4.2"})}),c.jsx(ae,{label:"次回予定日",children:c.jsx("input",{type:"date",style:I.input,value:g.nextDate||"",onChange:v=>C(w=>({...w,nextDate:v.target.value}))})}),c.jsx("button",{style:I.primaryBtn,onClick:Oy,children:"✅ 更新する"})]}),c.jsx(vr,{message:p})]}):a==="recordList"&&U?c.jsxs(yr,{children:[c.jsx(Ai,{onClick:()=>u("petDetail")}),c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:16},children:[c.jsxs("h2",{style:{margin:0,fontSize:20,color:"#3D2B1A"},children:[U.icon," ",U.name,"の記録"]}),c.jsx("button",{style:I.primaryBtn,onClick:()=>{C({date:new Date().toISOString().slice(0,10)}),u("addRecord")},children:"＋ 追加"})]}),c.jsxs("div",{style:{position:"relative",marginBottom:14},children:[c.jsx("span",{style:{position:"absolute",left:12,top:"50%",transform:"translateY(-50%)",fontSize:16,color:"#BBA08A",pointerEvents:"none"},children:"🔍"}),c.jsx("input",{style:{...I.input,paddingLeft:36,paddingRight:G?36:14},placeholder:"タイトル・メモ・日付で検索...",value:G,onChange:v=>we(v.target.value)}),G&&c.jsx("button",{onClick:()=>we(""),style:{position:"absolute",right:10,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",fontSize:16,color:"#BBA08A",cursor:"pointer",padding:2},children:"✕"})]}),c.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:20},children:["すべて",...Object.keys(it)].map(v=>c.jsxs("button",{style:{...I.filterChip,background:P===v?"#C49A6C":"#FFF0DC",color:P===v?"#FFF":"#7A5C3A"},onClick:()=>m(v),children:[v!=="すべて"&&it[v]+" ",v]},v))}),(G||P!=="すべて")&&c.jsxs("div",{style:{fontSize:12,color:"#9A7A5C",marginBottom:12,paddingLeft:4},children:[tn.length,"件の記録",G&&c.jsxs("span",{children:[" 「",G,"」"]}),P!=="すべて"&&c.jsxs("span",{children:[" [",P,"]"]})]}),tn.length===0?c.jsx(gI,{icon:"📭",msg:G?"検索結果がありません":"該当する記録がありません"}):tn.map(v=>c.jsx(cp,{record:v,onDelete:zd,onEdit:w=>{C({...w}),u("editRecord")},expanded:!0},v.id)),c.jsx(vr,{message:p})]}):c.jsx("div",{style:{padding:40,textAlign:"center"},children:"読み込み中..."})}function uI({onStart:t}){const e=[{icon:"🐾",title:"ペットを登録する",desc:"名前・種類・生年月日・写真などのプロフィールを登録します。複数のペットを管理できます。"},{icon:"📝",title:"健康記録をつける",desc:"病院・ワクチン・薬・体重・フードなどをカテゴリごとに記録。カレンダーで一覧確認できます。"},{icon:"⚖️",title:"体重の変化を確認する",desc:"体重記録をグラフで可視化。3匹まとめて比較グラフも見られます。"},{icon:"👨‍👩‍👧",title:"家族と共有する",desc:"グループコードを共有するだけで、家族全員がリアルタイムでデータを閲覧・更新できます。"}];return c.jsxs("div",{style:{marginBottom:28},children:[c.jsxs("div",{style:{background:"linear-gradient(135deg, #FFF0DC, #FDE8D0)",borderRadius:16,padding:"20px 20px 16px",marginBottom:16,textAlign:"center",border:"1.5px dashed #C49A6C"},children:[c.jsx("div",{style:{fontSize:40,marginBottom:8},children:"🎉"}),c.jsx("div",{style:{fontWeight:700,fontSize:16,color:"#3D2B1A",marginBottom:6},children:"ペット健康手帳へようこそ！"}),c.jsxs("div",{style:{fontSize:13,color:"#7A5C3A",lineHeight:1.7},children:["大切なペットの健康情報を家族みんなで管理できます。",c.jsx("br",{}),"まずはペットを登録してみましょう。"]}),c.jsx("button",{onClick:t,style:{marginTop:14,background:"#C49A6C",color:"#FFF",border:"none",borderRadius:24,padding:"12px 28px",fontSize:15,fontWeight:700,cursor:"pointer",boxShadow:"0 3px 12px rgba(196,154,108,0.4)"},children:"🐾 最初のペットを登録する"})]}),c.jsx("div",{style:{fontSize:12,fontWeight:700,color:"#9A7A5C",textTransform:"uppercase",letterSpacing:1,marginBottom:10,paddingLeft:4},children:"できること"}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:e.map((n,r)=>c.jsxs("div",{style:{background:"#FFF",borderRadius:14,padding:"14px 16px",display:"flex",alignItems:"flex-start",gap:14,boxShadow:"0 1px 8px rgba(0,0,0,0.05)"},children:[c.jsx("div",{style:{fontSize:28,lineHeight:1,flexShrink:0,marginTop:2},children:n.icon}),c.jsxs("div",{children:[c.jsxs("div",{style:{fontWeight:700,fontSize:14,color:"#3D2B1A",marginBottom:3},children:[c.jsx("span",{style:{background:"#C49A6C",color:"#FFF",borderRadius:10,fontSize:10,fontWeight:700,padding:"1px 7px",marginRight:7},children:r+1}),n.title]}),c.jsx("div",{style:{fontSize:13,color:"#7A5C3A",lineHeight:1.6},children:n.desc})]})]},r))}),c.jsx("div",{style:{textAlign:"center",marginTop:14,fontSize:12,color:"#BBA08A"},children:"ペットを登録すると、この案内は消えます"})]})}const ap=["#C49A6C","#EF4444","#3B82F6","#10B981","#8B5CF6"];function cI({pets:t,records:e}){const[n,r]=Q.useState(3),i=(()=>{if(n===0)return"";const N=new Date;return N.setMonth(N.getMonth()-n),N.toISOString().slice(0,10)})(),s=t.map((N,G)=>{const we=e.filter(me=>me.petId===N.id&&me.category==="体重"&&me.weight).filter(me=>n===0||me.date>=i).map(me=>({date:me.date,kg:parseFloat(me.weight)})).filter(me=>!isNaN(me.kg)).sort((me,Mn)=>me.date.localeCompare(Mn.date));return{pet:N,data:we,color:ap[G%ap.length]}}).filter(N=>N.data.length>0);if(s.length===0)return c.jsxs("div",{style:{textAlign:"center",padding:"40px 0",color:"#9A7A5C"},children:[c.jsx("div",{style:{fontSize:40,marginBottom:12},children:"⚖️"}),c.jsx("div",{children:"体重記録がありません"}),c.jsx("div",{style:{fontSize:12,marginTop:8},children:"各ペットの「体重」カテゴリで記録を追加してください"})]});const o=s.flatMap(N=>N.data.map(G=>G.date)).sort(),l=s.flatMap(N=>N.data.map(G=>G.kg)),a=o[0],u=o[o.length-1],f=Math.min(...l),h=Math.max(...l),d=520,y=220,g=52,C=16,P=20,m=36,p=d-g-C,_=y-P-m,A=(h-f||.5)*.15,T=f-A,R=h+A,x=N=>{if(a===u)return g+p/2;const G=N.localeCompare(a)/u.localeCompare(a);return g+G*p},L=N=>P+(1-(N-T)/(R-T))*_,j=Array.from({length:4},(N,G)=>T+(R-T)*(G/3));return c.jsxs("div",{children:[c.jsx("div",{style:{display:"flex",gap:6,marginBottom:16,justifyContent:"center"},children:[1,3,6,0].map(N=>c.jsx("button",{onClick:()=>r(N),style:{background:n===N?"#C49A6C":"#FFF0DC",border:"none",borderRadius:16,padding:"6px 14px",fontSize:13,fontWeight:600,color:n===N?"#FFF":"#7A5C3A",cursor:"pointer"},children:N===0?"全期間":`${N}ヶ月`},N))}),c.jsx("div",{style:{display:"flex",gap:12,flexWrap:"wrap",marginBottom:12,justifyContent:"center"},children:s.map(N=>c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"#3D2B1A"},children:[c.jsx("div",{style:{width:28,height:3,background:N.color,borderRadius:2}}),c.jsx("span",{style:{fontWeight:600},children:N.pet.name}),N.data.length>0&&c.jsxs("span",{style:{color:"#9A7A5C",fontSize:12},children:["(",N.data[N.data.length-1].kg.toFixed(2),"kg)"]})]},N.pet.id))}),c.jsxs("svg",{viewBox:`0 0 ${d} ${y}`,style:{width:"100%",height:"auto",overflow:"visible"},children:[j.map((N,G)=>c.jsxs("g",{children:[c.jsx("line",{x1:g,y1:L(N),x2:g+p,y2:L(N),stroke:"#F0E8DC",strokeWidth:"1"}),c.jsx("text",{x:g-6,y:L(N)+4,textAnchor:"end",fontSize:"9",fill:"#9A7A5C",children:N.toFixed(2)})]},G)),c.jsx("line",{x1:g,y1:P,x2:g,y2:P+_,stroke:"#E8D5BC",strokeWidth:"1"}),c.jsx("line",{x1:g,y1:P+_,x2:g+p,y2:P+_,stroke:"#E8D5BC",strokeWidth:"1"}),s.map(N=>{if(N.data.length===0)return null;const G=N.data.map(we=>`${x(we.date)},${L(we.kg)}`).join(" ");return c.jsxs("g",{children:[c.jsx("polyline",{points:G,fill:"none",stroke:N.color,strokeWidth:"2.5",strokeLinejoin:"round",strokeLinecap:"round"}),N.data.map((we,me)=>c.jsx("circle",{cx:x(we.date),cy:L(we.kg),r:"4",fill:N.color,stroke:"#FFF",strokeWidth:"1.5"},me))]},N.pet.id)}),a&&c.jsxs(c.Fragment,{children:[c.jsx("text",{x:g,y:y-4,textAnchor:"start",fontSize:"9",fill:"#9A7A5C",children:a.slice(5)}),a!==u&&c.jsx("text",{x:g+p,y:y-4,textAnchor:"end",fontSize:"9",fill:"#9A7A5C",children:u.slice(5)})]})]}),t.filter(N=>!s.find(G=>G.pet.id===N.id)).length>0&&c.jsxs("div",{style:{fontSize:12,color:"#BBA08A",textAlign:"center",marginTop:8},children:["※ ",t.filter(N=>!s.find(G=>G.pet.id===N.id)).map(N=>N.name).join("・")," は体重記録なし"]})]})}function dI({records:t,onDayClick:e}){const n=new Date,[r,i]=Q.useState(n.getFullYear()),[s,o]=Q.useState(n.getMonth()),l=new Date(r,s,1).getDay(),a=new Date(r,s+1,0).getDate(),u={};t.forEach(p=>{u[p.date]||(u[p.date]=[]),u[p.date].push(p)});const f=`${r}-${String(s+1).padStart(2,"0")}`,h=n.toISOString().slice(0,10),d=()=>{s===0?(i(p=>p-1),o(11)):o(p=>p-1)},y=()=>{s===11?(i(p=>p+1),o(0)):o(p=>p+1)},g=()=>{const p=t.map(S=>S.date).filter(Boolean).sort();if(p.length===0)return;const _=p[0];i(parseInt(_.slice(0,4))),o(parseInt(_.slice(5,7))-1)},C=()=>{i(n.getFullYear()),o(n.getMonth())},P=r===n.getFullYear()&&s===n.getMonth(),m=["日","月","火","水","木","金","土"];return c.jsxs("div",{style:{background:"#FFF",borderRadius:16,padding:"16px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",marginBottom:80},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8},children:[c.jsx("button",{onClick:d,style:{background:"#FFF0DC",border:"none",borderRadius:10,fontSize:18,cursor:"pointer",color:"#C49A6C",padding:"8px 14px",fontWeight:700,lineHeight:1},children:"‹"}),c.jsx("div",{style:{textAlign:"center"},children:c.jsxs("div",{style:{fontWeight:700,fontSize:16,color:"#3D2B1A"},children:[r,"年 ",s+1,"月"]})}),c.jsx("button",{onClick:y,style:{background:"#FFF0DC",border:"none",borderRadius:10,fontSize:18,cursor:"pointer",color:"#C49A6C",padding:"8px 14px",fontWeight:700,lineHeight:1},children:"›"})]}),c.jsxs("div",{style:{display:"flex",gap:8,marginBottom:12,justifyContent:"center"},children:[c.jsx("button",{onClick:g,style:{background:"none",border:"1px solid #E8D5BC",borderRadius:20,padding:"4px 12px",fontSize:12,color:"#7A5C3A",cursor:"pointer"},children:"⏮ 最古の記録"}),!P&&c.jsx("button",{onClick:C,style:{background:"#C49A6C",border:"none",borderRadius:20,padding:"4px 12px",fontSize:12,color:"#FFF",cursor:"pointer",fontWeight:600},children:"今月へ戻る"})]}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,marginBottom:4},children:m.map((p,_)=>c.jsx("div",{style:{textAlign:"center",fontSize:11,fontWeight:700,color:_===0?"#EF4444":_===6?"#3B82F6":"#9A7A5C",padding:"4px 0"},children:p},p))}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2},children:[Array.from({length:l}).map((p,_)=>c.jsx("div",{},`e${_}`)),Array.from({length:a}).map((p,_)=>{const S=_+1,A=`${f}-${String(S).padStart(2,"0")}`,T=u[A]||[],R=A===h,x=(l+_)%7,L=T.length>0,j=[...new Set(T.map(N=>N.category))].slice(0,3);return c.jsxs("div",{onClick:()=>e(T),style:{borderRadius:10,padding:"6px 2px 4px",textAlign:"center",cursor:L?"pointer":"default",background:R?"#C49A6C22":L?"#FFF7EE":"transparent",border:R?"2px solid #C49A6C":L?"1px solid #F0D9B0":"1px solid transparent",minHeight:52,display:"flex",flexDirection:"column",alignItems:"center",gap:2,transition:"background .15s"},children:[c.jsx("div",{style:{fontSize:13,fontWeight:R?700:400,color:x===0?"#EF4444":x===6?"#3B82F6":"#3D2B1A"},children:S}),c.jsx("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:1},children:j.map(N=>c.jsx("span",{style:{fontSize:11,background:Wn[N]+"33",borderRadius:4,padding:"0 2px",lineHeight:1.4},children:it[N]},N))}),T.length>0&&c.jsxs("div",{style:{fontSize:9,color:"#C49A6C",fontWeight:700},children:[T.length,"件"]})]},S)})]}),c.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,marginTop:14,paddingTop:12,borderTop:"1px solid #F0E8DC"},children:Object.keys(it).map(p=>c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:3,fontSize:11,color:"#7A5C3A"},children:[c.jsx("span",{children:it[p]}),p]},p))})]})}function jd({text:t,style:e}){const n=/(https?:\/\/[^\s]+)/g,r=t.split(n);return c.jsx("span",{style:e,children:r.map((i,s)=>n.test(i)?c.jsx("a",{href:i,target:"_blank",rel:"noopener noreferrer",style:{color:"#C49A6C",textDecoration:"underline",wordBreak:"break-all"},onClick:o=>o.stopPropagation(),children:i},s):i)})}function hI({pet:t,onSave:e}){const[n,r]=Q.useState(!1),[i,s]=Q.useState({vet:t.vet||"",vetPhone:t.vetPhone||"",vetAddress:t.vetAddress||"",vetHours:t.vetHours||"",vetNote:t.vetNote||""}),o=t.vet||t.vetPhone||t.vetAddress;function l(){e(i),r(!1)}const a=t.vetPhone?"tel:"+t.vetPhone.replace(/[^\d+]/g,""):"";return c.jsxs(c.Fragment,{children:[c.jsxs("div",{style:{...I.infoCard,cursor:"pointer"},onClick:()=>{s({vet:t.vet||"",vetPhone:t.vetPhone||"",vetAddress:t.vetAddress||"",vetHours:t.vetHours||"",vetNote:t.vetNote||""}),r(!0)},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[c.jsx("div",{style:I.infoLabel,children:"かかりつけ病院"}),c.jsx("span",{style:{fontSize:11,color:"#C49A6C"},children:"✏️ 編集"})]}),c.jsx("div",{style:{fontSize:14,fontWeight:600,color:"#3D2B1A",marginTop:4},children:t.vet||"—"}),t.vetPhone&&c.jsxs("a",{href:a,onClick:u=>u.stopPropagation(),style:{display:"flex",alignItems:"center",gap:4,fontSize:13,color:"#3B82F6",marginTop:5,textDecoration:"none",fontWeight:600},children:["📞 ",t.vetPhone]}),t.vetAddress&&c.jsxs("div",{style:{fontSize:11,color:"#9A7A5C",marginTop:3},children:["📍 ",t.vetAddress]}),t.vetHours&&c.jsxs("div",{style:{fontSize:11,color:"#9A7A5C",marginTop:2},children:["🕐 ",t.vetHours]}),t.vetNote&&c.jsxs("div",{style:{fontSize:11,color:"#9A7A5C",marginTop:2},children:["📝 ",c.jsx(jd,{text:t.vetNote})]}),!o&&c.jsx("div",{style:{fontSize:12,color:"#BBA08A",marginTop:4},children:"タップして追加"})]}),n&&c.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:200,display:"flex",alignItems:"flex-end",justifyContent:"center"},onClick:()=>r(!1),children:c.jsxs("div",{style:{background:"#FDF6EE",borderRadius:"20px 20px 0 0",padding:24,width:"100%",maxWidth:600,maxHeight:"85vh",overflowY:"auto"},onClick:u=>u.stopPropagation(),children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20},children:[c.jsx("div",{style:{fontWeight:700,fontSize:17,color:"#3D2B1A"},children:"🏥 病院情報を編集"}),c.jsx("button",{onClick:()=>r(!1),style:{background:"none",border:"none",fontSize:20,cursor:"pointer",color:"#9A7A5C"},children:"✕"})]}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[{key:"vet",label:"病院名",placeholder:"例: アシスト動物病院",icon:"🏥"},{key:"vetPhone",label:"電話番号",placeholder:"例: 03-1234-5678",icon:"📞"},{key:"vetAddress",label:"住所",placeholder:"例: 東京都渋谷区...",icon:"📍"},{key:"vetHours",label:"診療時間",placeholder:"例: 9:00〜19:00 (水休)",icon:"🕐"},{key:"vetNote",label:"メモ",placeholder:"担当医の名前など",icon:"📝"}].map(({key:u,label:f,placeholder:h,icon:d})=>c.jsxs("div",{children:[c.jsxs("label",{style:{display:"block",fontSize:13,fontWeight:600,color:"#5C3A1E",marginBottom:5},children:[d," ",f]}),u==="vetNote"?c.jsx("textarea",{style:{...I.input,height:72,resize:"vertical"},value:i[u],onChange:y=>s(g=>({...g,[u]:y.target.value})),placeholder:h}):c.jsx("input",{style:I.input,value:i[u],onChange:y=>s(g=>({...g,[u]:y.target.value})),placeholder:h})]},u))}),c.jsx("button",{style:{...I.primaryBtn,marginTop:20},onClick:l,children:"✅ 保存する"})]})})]})}function fI({records:t,petId:e}){const[n,r]=Q.useState(!1),[i,s]=Q.useState(3),o={3:"3ヶ月",6:"6ヶ月",12:"1年",24:"2年",0:"全期間"},l=(()=>{if(i===0)return"";const g=new Date;return g.setMonth(g.getMonth()-i),g.toISOString().slice(0,10)})(),a=t.filter(g=>g.petId===e&&g.category==="体重"&&g.weight).map(g=>({date:g.date,kg:parseFloat(g.weight)})).filter(g=>!isNaN(g.kg)).sort((g,C)=>g.date.localeCompare(C.date)),u=a.filter(g=>i===0||g.date>=l);if(a.length===0)return c.jsxs("div",{style:I.infoCard,children:[c.jsx("div",{style:I.infoLabel,children:"体重"}),c.jsx("div",{style:I.infoValue,children:"—"})]});const f=a[a.length-1],h=u.length>0?u:a,d=h.reduce((g,C)=>g.kg>=C.kg?g:C),y=h.reduce((g,C)=>g.kg<=C.kg?g:C);return c.jsxs(c.Fragment,{children:[c.jsxs("div",{style:{...I.infoCard,cursor:"pointer",gridColumn:"span 1"},onClick:()=>r(!0),children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[c.jsx("div",{style:I.infoLabel,children:"体重（最新）"}),c.jsx("span",{style:{fontSize:11,color:"#C49A6C"},children:"📈 グラフ"})]}),c.jsxs("div",{style:{fontSize:18,fontWeight:700,color:"#3D2B1A",margin:"4px 0"},children:[f.kg.toFixed(2)," kg"]}),c.jsxs("div",{style:{fontSize:11,color:"#9A7A5C",marginTop:2},children:["最終: ",f.date]}),c.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[c.jsxs("div",{style:{flex:1,background:"#FFF0F0",borderRadius:8,padding:"5px 8px"},children:[c.jsx("div",{style:{fontSize:10,color:"#EF4444",fontWeight:700},children:"▲ 最高"}),c.jsxs("div",{style:{fontSize:13,fontWeight:700,color:"#3D2B1A"},children:[d.kg.toFixed(2)," kg"]}),c.jsx("div",{style:{fontSize:10,color:"#9A7A5C"},children:d.date})]}),c.jsxs("div",{style:{flex:1,background:"#F0F8FF",borderRadius:8,padding:"5px 8px"},children:[c.jsx("div",{style:{fontSize:10,color:"#3B82F6",fontWeight:700},children:"▼ 最低"}),c.jsxs("div",{style:{fontSize:13,fontWeight:700,color:"#3D2B1A"},children:[y.kg.toFixed(2)," kg"]}),c.jsx("div",{style:{fontSize:10,color:"#9A7A5C"},children:y.date})]})]})]}),n&&c.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:200,display:"flex",alignItems:"center",justifyContent:"center",padding:16},onClick:()=>r(!1),children:c.jsxs("div",{style:{background:"#FFF",borderRadius:20,padding:24,width:"100%",maxWidth:600,maxHeight:"85vh",overflow:"auto"},onClick:g=>g.stopPropagation(),children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16},children:[c.jsx("div",{style:{fontWeight:700,fontSize:16,color:"#3D2B1A"},children:"⚖️ 体重推移"}),c.jsx("button",{onClick:()=>r(!1),style:{background:"none",border:"none",fontSize:20,cursor:"pointer",color:"#9A7A5C"},children:"✕"})]}),c.jsx("div",{style:{display:"flex",gap:6,marginBottom:16,flexWrap:"wrap",justifyContent:"center"},children:[3,6,12,24,0].map(g=>c.jsx("button",{onClick:()=>s(g),style:{background:i===g?"#C49A6C":"#FFF0DC",border:"none",borderRadius:16,padding:"6px 14px",fontSize:12,fontWeight:600,color:i===g?"#FFF":"#7A5C3A",cursor:"pointer"},children:o[g]},g))}),u.length===0?c.jsxs("div",{style:{textAlign:"center",padding:"32px 0",color:"#9A7A5C"},children:[c.jsx("div",{style:{fontSize:32,marginBottom:8},children:"📭"}),c.jsxs("div",{children:[o[i],"の体重記録がありません"]}),c.jsx("button",{onClick:()=>s(0),style:{marginTop:12,background:"#C49A6C",color:"#FFF",border:"none",borderRadius:16,padding:"8px 16px",fontSize:13,cursor:"pointer"},children:"全期間を表示"})]}):c.jsxs(c.Fragment,{children:[c.jsx(pI,{data:u}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:12,fontSize:12,color:"#9A7A5C"},children:[c.jsx("span",{children:u[0].date}),c.jsxs("span",{children:[u.length,"件のデータ"]}),c.jsx("span",{children:u[u.length-1].date})]})]})]})})]})}function pI({data:t}){const u=t.map(x=>x.kg),f=Math.min(...u),h=Math.max(...u),y=(h-f||.1)*.15,g=f-y,C=h+y,P=x=>48+x/(t.length-1)*456,m=x=>16+(1-(x-g)/(C-g))*152,p=t.map((x,L)=>`${P(L)},${m(x.kg)}`).join(" "),_=`M${P(0)},${m(t[0].kg)} `+t.map((x,L)=>`L${P(L)},${m(x.kg)}`).join(" ")+` L${P(t.length-1)},168 L${P(0)},168 Z`,S=Array.from({length:4},(x,L)=>g+(C-g)*(L/3)),A=[0,Math.floor((t.length-1)/2),t.length-1].filter((x,L,j)=>j.indexOf(x)===L),T=t.indexOf(t.reduce((x,L)=>x.kg>=L.kg?x:L)),R=t.indexOf(t.reduce((x,L)=>x.kg<=L.kg?x:L));return c.jsxs("svg",{viewBox:"0 0 520 200",style:{width:"100%",height:"auto",overflow:"visible"},children:[S.map((x,L)=>c.jsxs("g",{children:[c.jsx("line",{x1:48,y1:m(x),x2:504,y2:m(x),stroke:"#F0E8DC",strokeWidth:"1"}),c.jsx("text",{x:42,y:m(x)+4,textAnchor:"end",fontSize:"9",fill:"#9A7A5C",children:x.toFixed(2)})]},L)),c.jsx("path",{d:_,fill:"#C49A6C22"}),c.jsx("polyline",{points:p,fill:"none",stroke:"#C49A6C",strokeWidth:"2",strokeLinejoin:"round"}),c.jsx("circle",{cx:P(T),cy:m(t[T].kg),r:"5",fill:"#EF4444"}),c.jsxs("text",{x:P(T),y:m(t[T].kg)-8,textAnchor:"middle",fontSize:"9",fill:"#EF4444",fontWeight:"bold",children:["▲",t[T].kg.toFixed(2)]}),c.jsx("circle",{cx:P(R),cy:m(t[R].kg),r:"5",fill:"#3B82F6"}),c.jsxs("text",{x:P(R),y:m(t[R].kg)+16,textAnchor:"middle",fontSize:"9",fill:"#3B82F6",fontWeight:"bold",children:["▼",t[R].kg.toFixed(2)]}),c.jsx("circle",{cx:P(t.length-1),cy:m(t[t.length-1].kg),r:"4",fill:"#C49A6C",stroke:"#FFF",strokeWidth:"2"}),A.map(x=>c.jsx("text",{x:P(x),y:196,textAnchor:"middle",fontSize:"9",fill:"#9A7A5C",children:t[x].date.slice(5)},x)),c.jsx("line",{x1:48,y1:16,x2:48,y2:168,stroke:"#E8D5BC",strokeWidth:"1"}),c.jsx("line",{x1:48,y1:168,x2:504,y2:168,stroke:"#E8D5BC",strokeWidth:"1"})]})}function yr({children:t}){return c.jsx("div",{style:{minHeight:"100vh",background:"#FDF6EE",fontFamily:"system-ui, 'Hiragino Sans', sans-serif"},children:c.jsx("div",{style:{maxWidth:680,margin:"0 auto",padding:"20px 16px 80px"},children:t})})}function Ai({onClick:t}){return c.jsx("button",{style:I.backBtn,onClick:t,children:"← 戻る"})}function up({onClick:t,title:e,danger:n,children:r}){return c.jsx("button",{title:e,style:{background:n?"#FEE2E2":"#FFF0DC",border:"none",borderRadius:8,padding:"8px 12px",cursor:"pointer",fontSize:18},onClick:t,children:r})}function ae({label:t,children:e}){return c.jsxs("div",{style:{marginBottom:16},children:[c.jsx("label",{style:{display:"block",fontWeight:600,color:"#5C3A1E",marginBottom:6,fontSize:14},children:t}),e]})}function cp({record:t,onDelete:e,onEdit:n,expanded:r}){const[i,s]=Q.useState(!!r);return c.jsxs("div",{style:I.recordCard,onClick:()=>s(o=>!o),children:[c.jsxs("div",{style:I.recordHeader,children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[c.jsx("span",{style:{...I.catBadge,background:Wn[t.category]},children:it[t.category]}),c.jsxs("div",{children:[c.jsx("div",{style:{fontWeight:600,color:"#3D2B1A"},children:t.title}),c.jsxs("div",{style:{fontSize:12,color:"#9A7A5C"},children:[t.date,t.category&&` · ${t.category}`]})]})]}),c.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center"},children:[t.nextDate&&c.jsxs("span",{style:I.nextDateBadge,children:["📅 ",t.nextDate]}),c.jsx("button",{style:{...I.deleteBtn,opacity:.7},onClick:o=>{o.stopPropagation(),n(t)},children:"✏️"}),c.jsx("button",{style:I.deleteBtn,onClick:o=>{o.stopPropagation(),e(t.id)},children:"🗑️"})]})]}),i&&(t.description||t.weight)&&c.jsxs("div",{style:I.recordBody,children:[t.weight&&c.jsxs("div",{style:{marginBottom:4},children:["⚖️ ",t.weight," kg"]}),t.description&&c.jsx("div",{style:{color:"#5C3A1E",whiteSpace:"pre-wrap"},children:c.jsx(jd,{text:t.description})})]})]})}function gI({icon:t,msg:e}){return c.jsxs("div",{style:{textAlign:"center",padding:"48px 20px",color:"#9A7A5C"},children:[c.jsx("div",{style:{fontSize:48,marginBottom:12},children:t}),c.jsx("div",{children:e})]})}function vr({message:t}){return t?c.jsx("div",{style:I.toast,children:t}):null}const I={petGrid:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(160px, 1fr))",gap:16},petCard:{background:"#FFF",borderRadius:16,border:"none",padding:"20px 16px",cursor:"pointer",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",transition:"transform .15s",textAlign:"center",width:"100%"},petCardIcon:{borderRadius:"50%",width:72,height:72,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px"},petCardName:{fontWeight:700,fontSize:16,color:"#3D2B1A"},petCardSub:{fontSize:12,color:"#9A7A5C",marginTop:2},petCardAge:{fontSize:12,color:"#C49A6C",marginTop:4},petCardRecords:{fontSize:11,color:"#BBA08A",marginTop:6},addPetCard:{background:"#FFF7EE",borderRadius:16,border:"2px dashed #C49A6C",padding:"20px 16px",cursor:"pointer",textAlign:"center",minHeight:140,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},petBanner:{borderRadius:16,padding:"20px 24px",display:"flex",alignItems:"center",gap:16,marginBottom:20},infoGrid:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:20},infoCard:{background:"#FFF",borderRadius:12,padding:"12px 16px"},infoLabel:{fontSize:11,color:"#9A7A5C",fontWeight:600,textTransform:"uppercase",marginBottom:4},infoValue:{fontSize:14,color:"#3D2B1A",fontWeight:500},notesBox:{background:"#FFFBF0",border:"1px solid #F0D9B0",borderRadius:12,padding:"12px 16px",marginBottom:20,color:"#5C3A1E",fontSize:14},sectionHeader:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12,fontWeight:700,color:"#3D2B1A"},linkBtn:{background:"none",border:"none",color:"#C49A6C",cursor:"pointer",fontSize:14,fontWeight:600},categoryRow:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:24},catChip:{background:"#FFF",border:"none",borderRadius:10,padding:"8px 12px",display:"flex",flexDirection:"column",alignItems:"center",gap:4,cursor:"pointer",boxShadow:"0 1px 6px rgba(0,0,0,0.06)",minWidth:60,fontSize:18},catCount:{fontSize:11,color:"#FFF",borderRadius:10,padding:"1px 7px",fontWeight:700},recordCard:{background:"#FFF",borderRadius:14,marginBottom:10,overflow:"hidden",boxShadow:"0 1px 8px rgba(0,0,0,0.05)",cursor:"pointer"},recordHeader:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 16px"},catBadge:{width:36,height:36,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0},nextDateBadge:{fontSize:11,background:"#FFF0DC",color:"#7A5C3A",borderRadius:8,padding:"3px 8px"},deleteBtn:{background:"none",border:"none",cursor:"pointer",fontSize:16,opacity:.6,padding:"4px 6px"},recordBody:{padding:"0 16px 14px",fontSize:14,borderTop:"1px solid #FDF0E4",marginTop:4,paddingTop:12},fab:{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)"},fabBtn:{background:"#C49A6C",color:"#FFF",border:"none",borderRadius:30,padding:"14px 32px",fontSize:16,fontWeight:700,cursor:"pointer",boxShadow:"0 4px 20px rgba(0,0,0,0.2)"},form:{background:"#FFF",borderRadius:16,padding:"24px 20px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)"},formTitle:{textAlign:"center",color:"#3D2B1A",marginBottom:24},input:{width:"100%",padding:"10px 14px",borderRadius:10,border:"1.5px solid #E8D5BC",background:"#FFFBF7",fontSize:15,color:"#3D2B1A",boxSizing:"border-box"},catSelector:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8},catOption:{border:"2px solid transparent",borderRadius:12,padding:"10px 8px",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:4,fontSize:20,transition:"all .15s"},filterChip:{border:"none",borderRadius:20,padding:"6px 14px",cursor:"pointer",fontSize:13,fontWeight:600},primaryBtn:{background:"#C49A6C",color:"#FFF",border:"none",borderRadius:12,padding:"14px",fontSize:16,fontWeight:700,cursor:"pointer",marginTop:8},backBtn:{background:"none",border:"none",color:"#C49A6C",cursor:"pointer",fontSize:15,fontWeight:600,marginBottom:16,padding:0},toast:{position:"fixed",bottom:80,left:"50%",transform:"translateX(-50%)",background:"#3D2B1A",color:"#FFF",borderRadius:24,padding:"12px 24px",fontSize:14,fontWeight:600,zIndex:1e3,boxShadow:"0 4px 20px rgba(0,0,0,0.3)",whiteSpace:"nowrap"}};Oa.createRoot(document.getElementById("root")).render(c.jsx(tv.StrictMode,{children:c.jsx(aI,{})}));

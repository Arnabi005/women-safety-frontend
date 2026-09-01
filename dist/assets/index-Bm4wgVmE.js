function wx(e,t){for(var r=0;r<t.length;r++){const i=t[r];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function r(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=r(o);fetch(o.href,l)}})();var bx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function jp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pp={exports:{}},za={},Np={exports:{}},ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bs=Symbol.for("react.element"),kx=Symbol.for("react.portal"),Sx=Symbol.for("react.fragment"),jx=Symbol.for("react.strict_mode"),Px=Symbol.for("react.profiler"),Nx=Symbol.for("react.provider"),Cx=Symbol.for("react.context"),Ex=Symbol.for("react.forward_ref"),Lx=Symbol.for("react.suspense"),zx=Symbol.for("react.memo"),Tx=Symbol.for("react.lazy"),Af=Symbol.iterator;function Ox(e){return e===null||typeof e!="object"?null:(e=Af&&e[Af]||e["@@iterator"],typeof e=="function"?e:null)}var Cp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ep=Object.assign,Lp={};function yi(e,t,r){this.props=e,this.context=t,this.refs=Lp,this.updater=r||Cp}yi.prototype.isReactComponent={};yi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function zp(){}zp.prototype=yi.prototype;function gu(e,t,r){this.props=e,this.context=t,this.refs=Lp,this.updater=r||Cp}var vu=gu.prototype=new zp;vu.constructor=gu;Ep(vu,yi.prototype);vu.isPureReactComponent=!0;var If=Array.isArray,Tp=Object.prototype.hasOwnProperty,yu={current:null},Op={key:!0,ref:!0,__self:!0,__source:!0};function Rp(e,t,r){var i,o={},l=null,u=null;if(t!=null)for(i in t.ref!==void 0&&(u=t.ref),t.key!==void 0&&(l=""+t.key),t)Tp.call(t,i)&&!Op.hasOwnProperty(i)&&(o[i]=t[i]);var f=arguments.length-2;if(f===1)o.children=r;else if(1<f){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];o.children=h}if(e&&e.defaultProps)for(i in f=e.defaultProps,f)o[i]===void 0&&(o[i]=f[i]);return{$$typeof:Bs,type:e,key:l,ref:u,props:o,_owner:yu.current}}function Rx(e,t){return{$$typeof:Bs,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function xu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Bs}function Mx(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Df=/\/+/g;function Tl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Mx(""+e.key):t.toString(36)}function Do(e,t,r,i,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var u=!1;if(e===null)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case Bs:case kx:u=!0}}if(u)return u=e,o=o(u),e=i===""?"."+Tl(u,0):i,If(o)?(r="",e!=null&&(r=e.replace(Df,"$&/")+"/"),Do(o,t,r,"",function(m){return m})):o!=null&&(xu(o)&&(o=Rx(o,r+(!o.key||u&&u.key===o.key?"":(""+o.key).replace(Df,"$&/")+"/")+e)),t.push(o)),1;if(u=0,i=i===""?".":i+":",If(e))for(var f=0;f<e.length;f++){l=e[f];var h=i+Tl(l,f);u+=Do(l,t,r,h,o)}else if(h=Ox(e),typeof h=="function")for(e=h.call(e),f=0;!(l=e.next()).done;)l=l.value,h=i+Tl(l,f++),u+=Do(l,t,r,h,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function xo(e,t,r){if(e==null)return e;var i=[],o=0;return Do(e,i,"","",function(l){return t.call(r,l,o++)}),i}function Ax(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var lt={current:null},Bo={transition:null},Ix={ReactCurrentDispatcher:lt,ReactCurrentBatchConfig:Bo,ReactCurrentOwner:yu};function Mp(){throw Error("act(...) is not supported in production builds of React.")}ce.Children={map:xo,forEach:function(e,t,r){xo(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return xo(e,function(){t++}),t},toArray:function(e){return xo(e,function(t){return t})||[]},only:function(e){if(!xu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ce.Component=yi;ce.Fragment=Sx;ce.Profiler=Px;ce.PureComponent=gu;ce.StrictMode=jx;ce.Suspense=Lx;ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ix;ce.act=Mp;ce.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=Ep({},e.props),o=e.key,l=e.ref,u=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,u=yu.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(h in t)Tp.call(t,h)&&!Op.hasOwnProperty(h)&&(i[h]=t[h]===void 0&&f!==void 0?f[h]:t[h])}var h=arguments.length-2;if(h===1)i.children=r;else if(1<h){f=Array(h);for(var m=0;m<h;m++)f[m]=arguments[m+2];i.children=f}return{$$typeof:Bs,type:e.type,key:o,ref:l,props:i,_owner:u}};ce.createContext=function(e){return e={$$typeof:Cx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Nx,_context:e},e.Consumer=e};ce.createElement=Rp;ce.createFactory=function(e){var t=Rp.bind(null,e);return t.type=e,t};ce.createRef=function(){return{current:null}};ce.forwardRef=function(e){return{$$typeof:Ex,render:e}};ce.isValidElement=xu;ce.lazy=function(e){return{$$typeof:Tx,_payload:{_status:-1,_result:e},_init:Ax}};ce.memo=function(e,t){return{$$typeof:zx,type:e,compare:t===void 0?null:t}};ce.startTransition=function(e){var t=Bo.transition;Bo.transition={};try{e()}finally{Bo.transition=t}};ce.unstable_act=Mp;ce.useCallback=function(e,t){return lt.current.useCallback(e,t)};ce.useContext=function(e){return lt.current.useContext(e)};ce.useDebugValue=function(){};ce.useDeferredValue=function(e){return lt.current.useDeferredValue(e)};ce.useEffect=function(e,t){return lt.current.useEffect(e,t)};ce.useId=function(){return lt.current.useId()};ce.useImperativeHandle=function(e,t,r){return lt.current.useImperativeHandle(e,t,r)};ce.useInsertionEffect=function(e,t){return lt.current.useInsertionEffect(e,t)};ce.useLayoutEffect=function(e,t){return lt.current.useLayoutEffect(e,t)};ce.useMemo=function(e,t){return lt.current.useMemo(e,t)};ce.useReducer=function(e,t,r){return lt.current.useReducer(e,t,r)};ce.useRef=function(e){return lt.current.useRef(e)};ce.useState=function(e){return lt.current.useState(e)};ce.useSyncExternalStore=function(e,t,r){return lt.current.useSyncExternalStore(e,t,r)};ce.useTransition=function(){return lt.current.useTransition()};ce.version="18.3.1";Np.exports=ce;var P=Np.exports;const ps=jp(P),Dx=wx({__proto__:null,default:ps},[P]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bx=P,Fx=Symbol.for("react.element"),Ux=Symbol.for("react.fragment"),Hx=Object.prototype.hasOwnProperty,Zx=Bx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wx={key:!0,ref:!0,__self:!0,__source:!0};function Ap(e,t,r){var i,o={},l=null,u=null;r!==void 0&&(l=""+r),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(u=t.ref);for(i in t)Hx.call(t,i)&&!Wx.hasOwnProperty(i)&&(o[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps,t)o[i]===void 0&&(o[i]=t[i]);return{$$typeof:Fx,type:e,key:l,ref:u,props:o,_owner:Zx.current}}za.Fragment=Ux;za.jsx=Ap;za.jsxs=Ap;Pp.exports=za;var a=Pp.exports,hc={},Ip={exports:{}},jt={},Dp={exports:{}},Bp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,Y){var U=M.length;M.push(Y);e:for(;0<U;){var q=U-1>>>1,Q=M[q];if(0<o(Q,Y))M[q]=Y,M[U]=Q,U=q;else break e}}function r(M){return M.length===0?null:M[0]}function i(M){if(M.length===0)return null;var Y=M[0],U=M.pop();if(U!==Y){M[0]=U;e:for(var q=0,Q=M.length,ge=Q>>>1;q<ge;){var ue=2*(q+1)-1,ae=M[ue],ne=ue+1,re=M[ne];if(0>o(ae,U))ne<Q&&0>o(re,ae)?(M[q]=re,M[ne]=U,q=ne):(M[q]=ae,M[ue]=U,q=ue);else if(ne<Q&&0>o(re,U))M[q]=re,M[ne]=U,q=ne;else break e}}return Y}function o(M,Y){var U=M.sortIndex-Y.sortIndex;return U!==0?U:M.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();e.unstable_now=function(){return u.now()-f}}var h=[],m=[],_=1,x=null,b=3,C=!1,S=!1,E=!1,R=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(M){for(var Y=r(m);Y!==null;){if(Y.callback===null)i(m);else if(Y.startTime<=M)i(m),Y.sortIndex=Y.expirationTime,t(h,Y);else break;Y=r(m)}}function j(M){if(E=!1,w(M),!S)if(r(h)!==null)S=!0,pe(z);else{var Y=r(m);Y!==null&&Se(j,Y.startTime-M)}}function z(M,Y){S=!1,E&&(E=!1,y(A),A=-1),C=!0;var U=b;try{for(w(Y),x=r(h);x!==null&&(!(x.expirationTime>Y)||M&&!oe());){var q=x.callback;if(typeof q=="function"){x.callback=null,b=x.priorityLevel;var Q=q(x.expirationTime<=Y);Y=e.unstable_now(),typeof Q=="function"?x.callback=Q:x===r(h)&&i(h),w(Y)}else i(h);x=r(h)}if(x!==null)var ge=!0;else{var ue=r(m);ue!==null&&Se(j,ue.startTime-Y),ge=!1}return ge}finally{x=null,b=U,C=!1}}var D=!1,B=null,A=-1,ee=5,K=-1;function oe(){return!(e.unstable_now()-K<ee)}function xe(){if(B!==null){var M=e.unstable_now();K=M;var Y=!0;try{Y=B(!0,M)}finally{Y?yt():(D=!1,B=null)}}else D=!1}var yt;if(typeof g=="function")yt=function(){g(xe)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,V=_e.port2;_e.port1.onmessage=xe,yt=function(){V.postMessage(null)}}else yt=function(){R(xe,0)};function pe(M){B=M,D||(D=!0,yt())}function Se(M,Y){A=R(function(){M(e.unstable_now())},Y)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){S||C||(S=!0,pe(z))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return b},e.unstable_getFirstCallbackNode=function(){return r(h)},e.unstable_next=function(M){switch(b){case 1:case 2:case 3:var Y=3;break;default:Y=b}var U=b;b=Y;try{return M()}finally{b=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,Y){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var U=b;b=M;try{return Y()}finally{b=U}},e.unstable_scheduleCallback=function(M,Y,U){var q=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?q+U:q):U=q,M){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=U+Q,M={id:_++,callback:Y,priorityLevel:M,startTime:U,expirationTime:Q,sortIndex:-1},U>q?(M.sortIndex=U,t(m,M),r(h)===null&&M===r(m)&&(E?(y(A),A=-1):E=!0,Se(j,U-q))):(M.sortIndex=Q,t(h,M),S||C||(S=!0,pe(z))),M},e.unstable_shouldYield=oe,e.unstable_wrapCallback=function(M){var Y=b;return function(){var U=b;b=Y;try{return M.apply(this,arguments)}finally{b=U}}}})(Bp);Dp.exports=Bp;var $x=Dp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vx=P,St=$x;function F(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fp=new Set,ms={};function Cr(e,t){li(e,t),li(e+"Capture",t)}function li(e,t){for(ms[e]=t,e=0;e<t.length;e++)Fp.add(t[e])}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pc=Object.prototype.hasOwnProperty,qx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bf={},Ff={};function Gx(e){return pc.call(Ff,e)?!0:pc.call(Bf,e)?!1:qx.test(e)?Ff[e]=!0:(Bf[e]=!0,!1)}function Kx(e,t,r,i){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Yx(e,t,r,i){if(t===null||typeof t>"u"||Kx(e,t,r,i))return!0;if(i)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ct(e,t,r,i,o,l,u){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=u}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ke[e]=new ct(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ke[t]=new ct(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ke[e]=new ct(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ke[e]=new ct(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ke[e]=new ct(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ke[e]=new ct(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ke[e]=new ct(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ke[e]=new ct(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ke[e]=new ct(e,5,!1,e.toLowerCase(),null,!1,!1)});var _u=/[\-:]([a-z])/g;function wu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_u,wu);Ke[t]=new ct(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_u,wu);Ke[t]=new ct(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_u,wu);Ke[t]=new ct(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ke[e]=new ct(e,1,!1,e.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ke[e]=new ct(e,1,!1,e.toLowerCase(),null,!0,!0)});function bu(e,t,r,i){var o=Ke.hasOwnProperty(t)?Ke[t]:null;(o!==null?o.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Yx(t,r,o,i)&&(r=null),i||o===null?Gx(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,i=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,i?e.setAttributeNS(i,t,r):e.setAttribute(t,r))))}var bn=Vx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_o=Symbol.for("react.element"),Wr=Symbol.for("react.portal"),$r=Symbol.for("react.fragment"),ku=Symbol.for("react.strict_mode"),mc=Symbol.for("react.profiler"),Up=Symbol.for("react.provider"),Hp=Symbol.for("react.context"),Su=Symbol.for("react.forward_ref"),gc=Symbol.for("react.suspense"),vc=Symbol.for("react.suspense_list"),ju=Symbol.for("react.memo"),Ln=Symbol.for("react.lazy"),Zp=Symbol.for("react.offscreen"),Uf=Symbol.iterator;function Zi(e){return e===null||typeof e!="object"?null:(e=Uf&&e[Uf]||e["@@iterator"],typeof e=="function"?e:null)}var Ee=Object.assign,Ol;function es(e){if(Ol===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Ol=t&&t[1]||""}return`
`+Ol+e}var Rl=!1;function Ml(e,t){if(!e||Rl)return"";Rl=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(m){var i=m}Reflect.construct(e,[],t)}else{try{t.call()}catch(m){i=m}e.call(t.prototype)}else{try{throw Error()}catch(m){i=m}e()}}catch(m){if(m&&i&&typeof m.stack=="string"){for(var o=m.stack.split(`
`),l=i.stack.split(`
`),u=o.length-1,f=l.length-1;1<=u&&0<=f&&o[u]!==l[f];)f--;for(;1<=u&&0<=f;u--,f--)if(o[u]!==l[f]){if(u!==1||f!==1)do if(u--,f--,0>f||o[u]!==l[f]){var h=`
`+o[u].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=u&&0<=f);break}}}finally{Rl=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?es(e):""}function Qx(e){switch(e.tag){case 5:return es(e.type);case 16:return es("Lazy");case 13:return es("Suspense");case 19:return es("SuspenseList");case 0:case 2:case 15:return e=Ml(e.type,!1),e;case 11:return e=Ml(e.type.render,!1),e;case 1:return e=Ml(e.type,!0),e;default:return""}}function yc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $r:return"Fragment";case Wr:return"Portal";case mc:return"Profiler";case ku:return"StrictMode";case gc:return"Suspense";case vc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Hp:return(e.displayName||"Context")+".Consumer";case Up:return(e._context.displayName||"Context")+".Provider";case Su:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ju:return t=e.displayName||null,t!==null?t:yc(e.type)||"Memo";case Ln:t=e._payload,e=e._init;try{return yc(e(t))}catch{}}return null}function Xx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yc(t);case 8:return t===ku?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Vn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Jx(e){var t=Wp(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,l=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(u){i=""+u,l.call(this,u)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(u){i=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wo(e){e._valueTracker||(e._valueTracker=Jx(e))}function $p(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),i="";return e&&(i=Wp(e)?e.checked?"true":"false":e.value),e=i,e!==r?(t.setValue(e),!0):!1}function ea(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xc(e,t){var r=t.checked;return Ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Hf(e,t){var r=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;r=Vn(t.value!=null?t.value:r),e._wrapperState={initialChecked:i,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Vp(e,t){t=t.checked,t!=null&&bu(e,"checked",t,!1)}function _c(e,t){Vp(e,t);var r=Vn(t.value),i=t.type;if(r!=null)i==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?wc(e,t.type,r):t.hasOwnProperty("defaultValue")&&wc(e,t.type,Vn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Zf(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function wc(e,t,r){(t!=="number"||ea(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var ts=Array.isArray;function ni(e,t,r,i){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&i&&(e[r].defaultSelected=!0)}else{for(r=""+Vn(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,i&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function bc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wf(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(F(92));if(ts(r)){if(1<r.length)throw Error(F(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Vn(r)}}function qp(e,t){var r=Vn(t.value),i=Vn(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),i!=null&&(e.defaultValue=""+i)}function $f(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var bo,Kp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,i,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,i,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(bo=bo||document.createElement("div"),bo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=bo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function gs(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var is={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},e0=["Webkit","ms","Moz","O"];Object.keys(is).forEach(function(e){e0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),is[t]=is[e]})});function Yp(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||is.hasOwnProperty(e)&&is[e]?(""+t).trim():t+"px"}function Qp(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var i=r.indexOf("--")===0,o=Yp(r,t[r],i);r==="float"&&(r="cssFloat"),i?e.setProperty(r,o):e[r]=o}}var t0=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sc(e,t){if(t){if(t0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(F(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(F(61))}if(t.style!=null&&typeof t.style!="object")throw Error(F(62))}}function jc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pc=null;function Pu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Nc=null,ri=null,ii=null;function Vf(e){if(e=Hs(e)){if(typeof Nc!="function")throw Error(F(280));var t=e.stateNode;t&&(t=Aa(t),Nc(e.stateNode,e.type,t))}}function Xp(e){ri?ii?ii.push(e):ii=[e]:ri=e}function Jp(){if(ri){var e=ri,t=ii;if(ii=ri=null,Vf(e),t)for(e=0;e<t.length;e++)Vf(t[e])}}function em(e,t){return e(t)}function tm(){}var Al=!1;function nm(e,t,r){if(Al)return e(t,r);Al=!0;try{return em(e,t,r)}finally{Al=!1,(ri!==null||ii!==null)&&(tm(),Jp())}}function vs(e,t){var r=e.stateNode;if(r===null)return null;var i=Aa(r);if(i===null)return null;r=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(F(231,t,typeof r));return r}var Cc=!1;if(yn)try{var Wi={};Object.defineProperty(Wi,"passive",{get:function(){Cc=!0}}),window.addEventListener("test",Wi,Wi),window.removeEventListener("test",Wi,Wi)}catch{Cc=!1}function n0(e,t,r,i,o,l,u,f,h){var m=Array.prototype.slice.call(arguments,3);try{t.apply(r,m)}catch(_){this.onError(_)}}var ss=!1,ta=null,na=!1,Ec=null,r0={onError:function(e){ss=!0,ta=e}};function i0(e,t,r,i,o,l,u,f,h){ss=!1,ta=null,n0.apply(r0,arguments)}function s0(e,t,r,i,o,l,u,f,h){if(i0.apply(this,arguments),ss){if(ss){var m=ta;ss=!1,ta=null}else throw Error(F(198));na||(na=!0,Ec=m)}}function Er(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function rm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function qf(e){if(Er(e)!==e)throw Error(F(188))}function o0(e){var t=e.alternate;if(!t){if(t=Er(e),t===null)throw Error(F(188));return t!==e?null:e}for(var r=e,i=t;;){var o=r.return;if(o===null)break;var l=o.alternate;if(l===null){if(i=o.return,i!==null){r=i;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===r)return qf(o),e;if(l===i)return qf(o),t;l=l.sibling}throw Error(F(188))}if(r.return!==i.return)r=o,i=l;else{for(var u=!1,f=o.child;f;){if(f===r){u=!0,r=o,i=l;break}if(f===i){u=!0,i=o,r=l;break}f=f.sibling}if(!u){for(f=l.child;f;){if(f===r){u=!0,r=l,i=o;break}if(f===i){u=!0,i=l,r=o;break}f=f.sibling}if(!u)throw Error(F(189))}}if(r.alternate!==i)throw Error(F(190))}if(r.tag!==3)throw Error(F(188));return r.stateNode.current===r?e:t}function im(e){return e=o0(e),e!==null?sm(e):null}function sm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=sm(e);if(t!==null)return t;e=e.sibling}return null}var om=St.unstable_scheduleCallback,Gf=St.unstable_cancelCallback,a0=St.unstable_shouldYield,l0=St.unstable_requestPaint,Oe=St.unstable_now,c0=St.unstable_getCurrentPriorityLevel,Nu=St.unstable_ImmediatePriority,am=St.unstable_UserBlockingPriority,ra=St.unstable_NormalPriority,u0=St.unstable_LowPriority,lm=St.unstable_IdlePriority,Ta=null,an=null;function d0(e){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(Ta,e,void 0,(e.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:p0,f0=Math.log,h0=Math.LN2;function p0(e){return e>>>=0,e===0?32:31-(f0(e)/h0|0)|0}var ko=64,So=4194304;function ns(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ia(e,t){var r=e.pendingLanes;if(r===0)return 0;var i=0,o=e.suspendedLanes,l=e.pingedLanes,u=r&268435455;if(u!==0){var f=u&~o;f!==0?i=ns(f):(l&=u,l!==0&&(i=ns(l)))}else u=r&~o,u!==0?i=ns(u):l!==0&&(i=ns(l));if(i===0)return 0;if(t!==0&&t!==i&&!(t&o)&&(o=i&-i,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(i&4&&(i|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)r=31-Gt(t),o=1<<r,i|=e[r],t&=~o;return i}function m0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function g0(e,t){for(var r=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var u=31-Gt(l),f=1<<u,h=o[u];h===-1?(!(f&r)||f&i)&&(o[u]=m0(f,t)):h<=t&&(e.expiredLanes|=f),l&=~f}}function Lc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cm(){var e=ko;return ko<<=1,!(ko&4194240)&&(ko=64),e}function Il(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Fs(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Gt(t),e[t]=r}function v0(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-Gt(r),l=1<<o;t[o]=0,i[o]=-1,e[o]=-1,r&=~l}}function Cu(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var i=31-Gt(r),o=1<<i;o&t|e[i]&t&&(e[i]|=t),r&=~o}}var me=0;function um(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var dm,Eu,fm,hm,pm,zc=!1,jo=[],In=null,Dn=null,Bn=null,ys=new Map,xs=new Map,Tn=[],y0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kf(e,t){switch(e){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":Bn=null;break;case"pointerover":case"pointerout":ys.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xs.delete(t.pointerId)}}function $i(e,t,r,i,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:r,eventSystemFlags:i,nativeEvent:l,targetContainers:[o]},t!==null&&(t=Hs(t),t!==null&&Eu(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function x0(e,t,r,i,o){switch(t){case"focusin":return In=$i(In,e,t,r,i,o),!0;case"dragenter":return Dn=$i(Dn,e,t,r,i,o),!0;case"mouseover":return Bn=$i(Bn,e,t,r,i,o),!0;case"pointerover":var l=o.pointerId;return ys.set(l,$i(ys.get(l)||null,e,t,r,i,o)),!0;case"gotpointercapture":return l=o.pointerId,xs.set(l,$i(xs.get(l)||null,e,t,r,i,o)),!0}return!1}function mm(e){var t=cr(e.target);if(t!==null){var r=Er(t);if(r!==null){if(t=r.tag,t===13){if(t=rm(r),t!==null){e.blockedOn=t,pm(e.priority,function(){fm(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Tc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var i=new r.constructor(r.type,r);Pc=i,r.target.dispatchEvent(i),Pc=null}else return t=Hs(r),t!==null&&Eu(t),e.blockedOn=r,!1;t.shift()}return!0}function Yf(e,t,r){Fo(e)&&r.delete(t)}function _0(){zc=!1,In!==null&&Fo(In)&&(In=null),Dn!==null&&Fo(Dn)&&(Dn=null),Bn!==null&&Fo(Bn)&&(Bn=null),ys.forEach(Yf),xs.forEach(Yf)}function Vi(e,t){e.blockedOn===t&&(e.blockedOn=null,zc||(zc=!0,St.unstable_scheduleCallback(St.unstable_NormalPriority,_0)))}function _s(e){function t(o){return Vi(o,e)}if(0<jo.length){Vi(jo[0],e);for(var r=1;r<jo.length;r++){var i=jo[r];i.blockedOn===e&&(i.blockedOn=null)}}for(In!==null&&Vi(In,e),Dn!==null&&Vi(Dn,e),Bn!==null&&Vi(Bn,e),ys.forEach(t),xs.forEach(t),r=0;r<Tn.length;r++)i=Tn[r],i.blockedOn===e&&(i.blockedOn=null);for(;0<Tn.length&&(r=Tn[0],r.blockedOn===null);)mm(r),r.blockedOn===null&&Tn.shift()}var si=bn.ReactCurrentBatchConfig,sa=!0;function w0(e,t,r,i){var o=me,l=si.transition;si.transition=null;try{me=1,Lu(e,t,r,i)}finally{me=o,si.transition=l}}function b0(e,t,r,i){var o=me,l=si.transition;si.transition=null;try{me=4,Lu(e,t,r,i)}finally{me=o,si.transition=l}}function Lu(e,t,r,i){if(sa){var o=Tc(e,t,r,i);if(o===null)ql(e,t,i,oa,r),Kf(e,i);else if(x0(o,e,t,r,i))i.stopPropagation();else if(Kf(e,i),t&4&&-1<y0.indexOf(e)){for(;o!==null;){var l=Hs(o);if(l!==null&&dm(l),l=Tc(e,t,r,i),l===null&&ql(e,t,i,oa,r),l===o)break;o=l}o!==null&&i.stopPropagation()}else ql(e,t,i,null,r)}}var oa=null;function Tc(e,t,r,i){if(oa=null,e=Pu(i),e=cr(e),e!==null)if(t=Er(e),t===null)e=null;else if(r=t.tag,r===13){if(e=rm(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return oa=e,null}function gm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(c0()){case Nu:return 1;case am:return 4;case ra:case u0:return 16;case lm:return 536870912;default:return 16}default:return 16}}var Rn=null,zu=null,Uo=null;function vm(){if(Uo)return Uo;var e,t=zu,r=t.length,i,o="value"in Rn?Rn.value:Rn.textContent,l=o.length;for(e=0;e<r&&t[e]===o[e];e++);var u=r-e;for(i=1;i<=u&&t[r-i]===o[l-i];i++);return Uo=o.slice(e,1<i?1-i:void 0)}function Ho(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Po(){return!0}function Qf(){return!1}function Pt(e){function t(r,i,o,l,u){this._reactName=r,this._targetInst=o,this.type=i,this.nativeEvent=l,this.target=u,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(r=e[f],this[f]=r?r(l):l[f]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Po:Qf,this.isPropagationStopped=Qf,this}return Ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),t}var xi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tu=Pt(xi),Us=Ee({},xi,{view:0,detail:0}),k0=Pt(Us),Dl,Bl,qi,Oa=Ee({},Us,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qi&&(qi&&e.type==="mousemove"?(Dl=e.screenX-qi.screenX,Bl=e.screenY-qi.screenY):Bl=Dl=0,qi=e),Dl)},movementY:function(e){return"movementY"in e?e.movementY:Bl}}),Xf=Pt(Oa),S0=Ee({},Oa,{dataTransfer:0}),j0=Pt(S0),P0=Ee({},Us,{relatedTarget:0}),Fl=Pt(P0),N0=Ee({},xi,{animationName:0,elapsedTime:0,pseudoElement:0}),C0=Pt(N0),E0=Ee({},xi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),L0=Pt(E0),z0=Ee({},xi,{data:0}),Jf=Pt(z0),T0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function M0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=R0[e])?!!t[e]:!1}function Ou(){return M0}var A0=Ee({},Us,{key:function(e){if(e.key){var t=T0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?O0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ou,charCode:function(e){return e.type==="keypress"?Ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),I0=Pt(A0),D0=Ee({},Oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eh=Pt(D0),B0=Ee({},Us,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ou}),F0=Pt(B0),U0=Ee({},xi,{propertyName:0,elapsedTime:0,pseudoElement:0}),H0=Pt(U0),Z0=Ee({},Oa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),W0=Pt(Z0),$0=[9,13,27,32],Ru=yn&&"CompositionEvent"in window,os=null;yn&&"documentMode"in document&&(os=document.documentMode);var V0=yn&&"TextEvent"in window&&!os,ym=yn&&(!Ru||os&&8<os&&11>=os),th=" ",nh=!1;function xm(e,t){switch(e){case"keyup":return $0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _m(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vr=!1;function q0(e,t){switch(e){case"compositionend":return _m(t);case"keypress":return t.which!==32?null:(nh=!0,th);case"textInput":return e=t.data,e===th&&nh?null:e;default:return null}}function G0(e,t){if(Vr)return e==="compositionend"||!Ru&&xm(e,t)?(e=vm(),Uo=zu=Rn=null,Vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ym&&t.locale!=="ko"?null:t.data;default:return null}}var K0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!K0[e.type]:t==="textarea"}function wm(e,t,r,i){Xp(i),t=aa(t,"onChange"),0<t.length&&(r=new Tu("onChange","change",null,r,i),e.push({event:r,listeners:t}))}var as=null,ws=null;function Y0(e){Tm(e,0)}function Ra(e){var t=Kr(e);if($p(t))return e}function Q0(e,t){if(e==="change")return t}var bm=!1;if(yn){var Ul;if(yn){var Hl="oninput"in document;if(!Hl){var ih=document.createElement("div");ih.setAttribute("oninput","return;"),Hl=typeof ih.oninput=="function"}Ul=Hl}else Ul=!1;bm=Ul&&(!document.documentMode||9<document.documentMode)}function sh(){as&&(as.detachEvent("onpropertychange",km),ws=as=null)}function km(e){if(e.propertyName==="value"&&Ra(ws)){var t=[];wm(t,ws,e,Pu(e)),nm(Y0,t)}}function X0(e,t,r){e==="focusin"?(sh(),as=t,ws=r,as.attachEvent("onpropertychange",km)):e==="focusout"&&sh()}function J0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ra(ws)}function e_(e,t){if(e==="click")return Ra(t)}function t_(e,t){if(e==="input"||e==="change")return Ra(t)}function n_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Yt=typeof Object.is=="function"?Object.is:n_;function bs(e,t){if(Yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(i=0;i<r.length;i++){var o=r[i];if(!pc.call(t,o)||!Yt(e[o],t[o]))return!1}return!0}function oh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ah(e,t){var r=oh(e);e=0;for(var i;r;){if(r.nodeType===3){if(i=e+r.textContent.length,e<=t&&i>=t)return{node:r,offset:t-e};e=i}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=oh(r)}}function Sm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jm(){for(var e=window,t=ea();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=ea(e.document)}return t}function Mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function r_(e){var t=jm(),r=e.focusedElem,i=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Sm(r.ownerDocument.documentElement,r)){if(i!==null&&Mu(r)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,l=Math.min(i.start,o);i=i.end===void 0?l:Math.min(i.end,o),!e.extend&&l>i&&(o=i,i=l,l=o),o=ah(r,l);var u=ah(r,i);o&&u&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>i?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var i_=yn&&"documentMode"in document&&11>=document.documentMode,qr=null,Oc=null,ls=null,Rc=!1;function lh(e,t,r){var i=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Rc||qr==null||qr!==ea(i)||(i=qr,"selectionStart"in i&&Mu(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ls&&bs(ls,i)||(ls=i,i=aa(Oc,"onSelect"),0<i.length&&(t=new Tu("onSelect","select",null,t,r),e.push({event:t,listeners:i}),t.target=qr)))}function No(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Gr={animationend:No("Animation","AnimationEnd"),animationiteration:No("Animation","AnimationIteration"),animationstart:No("Animation","AnimationStart"),transitionend:No("Transition","TransitionEnd")},Zl={},Pm={};yn&&(Pm=document.createElement("div").style,"AnimationEvent"in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),"TransitionEvent"in window||delete Gr.transitionend.transition);function Ma(e){if(Zl[e])return Zl[e];if(!Gr[e])return e;var t=Gr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Pm)return Zl[e]=t[r];return e}var Nm=Ma("animationend"),Cm=Ma("animationiteration"),Em=Ma("animationstart"),Lm=Ma("transitionend"),zm=new Map,ch="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qn(e,t){zm.set(e,t),Cr(t,[e])}for(var Wl=0;Wl<ch.length;Wl++){var $l=ch[Wl],s_=$l.toLowerCase(),o_=$l[0].toUpperCase()+$l.slice(1);Qn(s_,"on"+o_)}Qn(Nm,"onAnimationEnd");Qn(Cm,"onAnimationIteration");Qn(Em,"onAnimationStart");Qn("dblclick","onDoubleClick");Qn("focusin","onFocus");Qn("focusout","onBlur");Qn(Lm,"onTransitionEnd");li("onMouseEnter",["mouseout","mouseover"]);li("onMouseLeave",["mouseout","mouseover"]);li("onPointerEnter",["pointerout","pointerover"]);li("onPointerLeave",["pointerout","pointerover"]);Cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a_=new Set("cancel close invalid load scroll toggle".split(" ").concat(rs));function uh(e,t,r){var i=e.type||"unknown-event";e.currentTarget=r,s0(i,t,void 0,e),e.currentTarget=null}function Tm(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var i=e[r],o=i.event;i=i.listeners;e:{var l=void 0;if(t)for(var u=i.length-1;0<=u;u--){var f=i[u],h=f.instance,m=f.currentTarget;if(f=f.listener,h!==l&&o.isPropagationStopped())break e;uh(o,f,m),l=h}else for(u=0;u<i.length;u++){if(f=i[u],h=f.instance,m=f.currentTarget,f=f.listener,h!==l&&o.isPropagationStopped())break e;uh(o,f,m),l=h}}}if(na)throw e=Ec,na=!1,Ec=null,e}function we(e,t){var r=t[Bc];r===void 0&&(r=t[Bc]=new Set);var i=e+"__bubble";r.has(i)||(Om(t,e,2,!1),r.add(i))}function Vl(e,t,r){var i=0;t&&(i|=4),Om(r,e,i,t)}var Co="_reactListening"+Math.random().toString(36).slice(2);function ks(e){if(!e[Co]){e[Co]=!0,Fp.forEach(function(r){r!=="selectionchange"&&(a_.has(r)||Vl(r,!1,e),Vl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Co]||(t[Co]=!0,Vl("selectionchange",!1,t))}}function Om(e,t,r,i){switch(gm(t)){case 1:var o=w0;break;case 4:o=b0;break;default:o=Lu}r=o.bind(null,t,r,e),o=void 0,!Cc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),i?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function ql(e,t,r,i,o){var l=i;if(!(t&1)&&!(t&2)&&i!==null)e:for(;;){if(i===null)return;var u=i.tag;if(u===3||u===4){var f=i.stateNode.containerInfo;if(f===o||f.nodeType===8&&f.parentNode===o)break;if(u===4)for(u=i.return;u!==null;){var h=u.tag;if((h===3||h===4)&&(h=u.stateNode.containerInfo,h===o||h.nodeType===8&&h.parentNode===o))return;u=u.return}for(;f!==null;){if(u=cr(f),u===null)return;if(h=u.tag,h===5||h===6){i=l=u;continue e}f=f.parentNode}}i=i.return}nm(function(){var m=l,_=Pu(r),x=[];e:{var b=zm.get(e);if(b!==void 0){var C=Tu,S=e;switch(e){case"keypress":if(Ho(r)===0)break e;case"keydown":case"keyup":C=I0;break;case"focusin":S="focus",C=Fl;break;case"focusout":S="blur",C=Fl;break;case"beforeblur":case"afterblur":C=Fl;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Xf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=j0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=F0;break;case Nm:case Cm:case Em:C=C0;break;case Lm:C=H0;break;case"scroll":C=k0;break;case"wheel":C=W0;break;case"copy":case"cut":case"paste":C=L0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=eh}var E=(t&4)!==0,R=!E&&e==="scroll",y=E?b!==null?b+"Capture":null:b;E=[];for(var g=m,w;g!==null;){w=g;var j=w.stateNode;if(w.tag===5&&j!==null&&(w=j,y!==null&&(j=vs(g,y),j!=null&&E.push(Ss(g,j,w)))),R)break;g=g.return}0<E.length&&(b=new C(b,S,null,r,_),x.push({event:b,listeners:E}))}}if(!(t&7)){e:{if(b=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",b&&r!==Pc&&(S=r.relatedTarget||r.fromElement)&&(cr(S)||S[xn]))break e;if((C||b)&&(b=_.window===_?_:(b=_.ownerDocument)?b.defaultView||b.parentWindow:window,C?(S=r.relatedTarget||r.toElement,C=m,S=S?cr(S):null,S!==null&&(R=Er(S),S!==R||S.tag!==5&&S.tag!==6)&&(S=null)):(C=null,S=m),C!==S)){if(E=Xf,j="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(E=eh,j="onPointerLeave",y="onPointerEnter",g="pointer"),R=C==null?b:Kr(C),w=S==null?b:Kr(S),b=new E(j,g+"leave",C,r,_),b.target=R,b.relatedTarget=w,j=null,cr(_)===m&&(E=new E(y,g+"enter",S,r,_),E.target=w,E.relatedTarget=R,j=E),R=j,C&&S)t:{for(E=C,y=S,g=0,w=E;w;w=Hr(w))g++;for(w=0,j=y;j;j=Hr(j))w++;for(;0<g-w;)E=Hr(E),g--;for(;0<w-g;)y=Hr(y),w--;for(;g--;){if(E===y||y!==null&&E===y.alternate)break t;E=Hr(E),y=Hr(y)}E=null}else E=null;C!==null&&dh(x,b,C,E,!1),S!==null&&R!==null&&dh(x,R,S,E,!0)}}e:{if(b=m?Kr(m):window,C=b.nodeName&&b.nodeName.toLowerCase(),C==="select"||C==="input"&&b.type==="file")var z=Q0;else if(rh(b))if(bm)z=t_;else{z=J0;var D=X0}else(C=b.nodeName)&&C.toLowerCase()==="input"&&(b.type==="checkbox"||b.type==="radio")&&(z=e_);if(z&&(z=z(e,m))){wm(x,z,r,_);break e}D&&D(e,b,m),e==="focusout"&&(D=b._wrapperState)&&D.controlled&&b.type==="number"&&wc(b,"number",b.value)}switch(D=m?Kr(m):window,e){case"focusin":(rh(D)||D.contentEditable==="true")&&(qr=D,Oc=m,ls=null);break;case"focusout":ls=Oc=qr=null;break;case"mousedown":Rc=!0;break;case"contextmenu":case"mouseup":case"dragend":Rc=!1,lh(x,r,_);break;case"selectionchange":if(i_)break;case"keydown":case"keyup":lh(x,r,_)}var B;if(Ru)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Vr?xm(e,r)&&(A="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(A="onCompositionStart");A&&(ym&&r.locale!=="ko"&&(Vr||A!=="onCompositionStart"?A==="onCompositionEnd"&&Vr&&(B=vm()):(Rn=_,zu="value"in Rn?Rn.value:Rn.textContent,Vr=!0)),D=aa(m,A),0<D.length&&(A=new Jf(A,e,null,r,_),x.push({event:A,listeners:D}),B?A.data=B:(B=_m(r),B!==null&&(A.data=B)))),(B=V0?q0(e,r):G0(e,r))&&(m=aa(m,"onBeforeInput"),0<m.length&&(_=new Jf("onBeforeInput","beforeinput",null,r,_),x.push({event:_,listeners:m}),_.data=B))}Tm(x,t)})}function Ss(e,t,r){return{instance:e,listener:t,currentTarget:r}}function aa(e,t){for(var r=t+"Capture",i=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=vs(e,r),l!=null&&i.unshift(Ss(e,l,o)),l=vs(e,t),l!=null&&i.push(Ss(e,l,o))),e=e.return}return i}function Hr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function dh(e,t,r,i,o){for(var l=t._reactName,u=[];r!==null&&r!==i;){var f=r,h=f.alternate,m=f.stateNode;if(h!==null&&h===i)break;f.tag===5&&m!==null&&(f=m,o?(h=vs(r,l),h!=null&&u.unshift(Ss(r,h,f))):o||(h=vs(r,l),h!=null&&u.push(Ss(r,h,f)))),r=r.return}u.length!==0&&e.push({event:t,listeners:u})}var l_=/\r\n?/g,c_=/\u0000|\uFFFD/g;function fh(e){return(typeof e=="string"?e:""+e).replace(l_,`
`).replace(c_,"")}function Eo(e,t,r){if(t=fh(t),fh(e)!==t&&r)throw Error(F(425))}function la(){}var Mc=null,Ac=null;function Ic(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Dc=typeof setTimeout=="function"?setTimeout:void 0,u_=typeof clearTimeout=="function"?clearTimeout:void 0,hh=typeof Promise=="function"?Promise:void 0,d_=typeof queueMicrotask=="function"?queueMicrotask:typeof hh<"u"?function(e){return hh.resolve(null).then(e).catch(f_)}:Dc;function f_(e){setTimeout(function(){throw e})}function Gl(e,t){var r=t,i=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(i===0){e.removeChild(o),_s(t);return}i--}else r!=="$"&&r!=="$?"&&r!=="$!"||i++;r=o}while(r);_s(t)}function Fn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ph(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var _i=Math.random().toString(36).slice(2),on="__reactFiber$"+_i,js="__reactProps$"+_i,xn="__reactContainer$"+_i,Bc="__reactEvents$"+_i,h_="__reactListeners$"+_i,p_="__reactHandles$"+_i;function cr(e){var t=e[on];if(t)return t;for(var r=e.parentNode;r;){if(t=r[xn]||r[on]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=ph(e);e!==null;){if(r=e[on])return r;e=ph(e)}return t}e=r,r=e.parentNode}return null}function Hs(e){return e=e[on]||e[xn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function Aa(e){return e[js]||null}var Fc=[],Yr=-1;function Xn(e){return{current:e}}function be(e){0>Yr||(e.current=Fc[Yr],Fc[Yr]=null,Yr--)}function ye(e,t){Yr++,Fc[Yr]=e.current,e.current=t}var qn={},rt=Xn(qn),ht=Xn(!1),gr=qn;function ci(e,t){var r=e.type.contextTypes;if(!r)return qn;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in r)o[l]=t[l];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function pt(e){return e=e.childContextTypes,e!=null}function ca(){be(ht),be(rt)}function mh(e,t,r){if(rt.current!==qn)throw Error(F(168));ye(rt,t),ye(ht,r)}function Rm(e,t,r){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return r;i=i.getChildContext();for(var o in i)if(!(o in t))throw Error(F(108,Xx(e)||"Unknown",o));return Ee({},r,i)}function ua(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qn,gr=rt.current,ye(rt,e),ye(ht,ht.current),!0}function gh(e,t,r){var i=e.stateNode;if(!i)throw Error(F(169));r?(e=Rm(e,t,gr),i.__reactInternalMemoizedMergedChildContext=e,be(ht),be(rt),ye(rt,e)):be(ht),ye(ht,r)}var pn=null,Ia=!1,Kl=!1;function Mm(e){pn===null?pn=[e]:pn.push(e)}function m_(e){Ia=!0,Mm(e)}function Jn(){if(!Kl&&pn!==null){Kl=!0;var e=0,t=me;try{var r=pn;for(me=1;e<r.length;e++){var i=r[e];do i=i(!0);while(i!==null)}pn=null,Ia=!1}catch(o){throw pn!==null&&(pn=pn.slice(e+1)),om(Nu,Jn),o}finally{me=t,Kl=!1}}return null}var Qr=[],Xr=0,da=null,fa=0,Lt=[],zt=0,vr=null,mn=1,gn="";function ar(e,t){Qr[Xr++]=fa,Qr[Xr++]=da,da=e,fa=t}function Am(e,t,r){Lt[zt++]=mn,Lt[zt++]=gn,Lt[zt++]=vr,vr=e;var i=mn;e=gn;var o=32-Gt(i)-1;i&=~(1<<o),r+=1;var l=32-Gt(t)+o;if(30<l){var u=o-o%5;l=(i&(1<<u)-1).toString(32),i>>=u,o-=u,mn=1<<32-Gt(t)+o|r<<o|i,gn=l+e}else mn=1<<l|r<<o|i,gn=e}function Au(e){e.return!==null&&(ar(e,1),Am(e,1,0))}function Iu(e){for(;e===da;)da=Qr[--Xr],Qr[Xr]=null,fa=Qr[--Xr],Qr[Xr]=null;for(;e===vr;)vr=Lt[--zt],Lt[zt]=null,gn=Lt[--zt],Lt[zt]=null,mn=Lt[--zt],Lt[zt]=null}var kt=null,bt=null,ke=!1,qt=null;function Im(e,t){var r=Tt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function vh(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,kt=e,bt=Fn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,kt=e,bt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=vr!==null?{id:mn,overflow:gn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Tt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,kt=e,bt=null,!0):!1;default:return!1}}function Uc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Hc(e){if(ke){var t=bt;if(t){var r=t;if(!vh(e,t)){if(Uc(e))throw Error(F(418));t=Fn(r.nextSibling);var i=kt;t&&vh(e,t)?Im(i,r):(e.flags=e.flags&-4097|2,ke=!1,kt=e)}}else{if(Uc(e))throw Error(F(418));e.flags=e.flags&-4097|2,ke=!1,kt=e}}}function yh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;kt=e}function Lo(e){if(e!==kt)return!1;if(!ke)return yh(e),ke=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ic(e.type,e.memoizedProps)),t&&(t=bt)){if(Uc(e))throw Dm(),Error(F(418));for(;t;)Im(e,t),t=Fn(t.nextSibling)}if(yh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){bt=Fn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}bt=null}}else bt=kt?Fn(e.stateNode.nextSibling):null;return!0}function Dm(){for(var e=bt;e;)e=Fn(e.nextSibling)}function ui(){bt=kt=null,ke=!1}function Du(e){qt===null?qt=[e]:qt.push(e)}var g_=bn.ReactCurrentBatchConfig;function Gi(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(F(309));var i=r.stateNode}if(!i)throw Error(F(147,e));var o=i,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(u){var f=o.refs;u===null?delete f[l]:f[l]=u},t._stringRef=l,t)}if(typeof e!="string")throw Error(F(284));if(!r._owner)throw Error(F(290,e))}return e}function zo(e,t){throw e=Object.prototype.toString.call(t),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xh(e){var t=e._init;return t(e._payload)}function Bm(e){function t(y,g){if(e){var w=y.deletions;w===null?(y.deletions=[g],y.flags|=16):w.push(g)}}function r(y,g){if(!e)return null;for(;g!==null;)t(y,g),g=g.sibling;return null}function i(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function o(y,g){return y=Wn(y,g),y.index=0,y.sibling=null,y}function l(y,g,w){return y.index=w,e?(w=y.alternate,w!==null?(w=w.index,w<g?(y.flags|=2,g):w):(y.flags|=2,g)):(y.flags|=1048576,g)}function u(y){return e&&y.alternate===null&&(y.flags|=2),y}function f(y,g,w,j){return g===null||g.tag!==6?(g=nc(w,y.mode,j),g.return=y,g):(g=o(g,w),g.return=y,g)}function h(y,g,w,j){var z=w.type;return z===$r?_(y,g,w.props.children,j,w.key):g!==null&&(g.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Ln&&xh(z)===g.type)?(j=o(g,w.props),j.ref=Gi(y,g,w),j.return=y,j):(j=Ko(w.type,w.key,w.props,null,y.mode,j),j.ref=Gi(y,g,w),j.return=y,j)}function m(y,g,w,j){return g===null||g.tag!==4||g.stateNode.containerInfo!==w.containerInfo||g.stateNode.implementation!==w.implementation?(g=rc(w,y.mode,j),g.return=y,g):(g=o(g,w.children||[]),g.return=y,g)}function _(y,g,w,j,z){return g===null||g.tag!==7?(g=pr(w,y.mode,j,z),g.return=y,g):(g=o(g,w),g.return=y,g)}function x(y,g,w){if(typeof g=="string"&&g!==""||typeof g=="number")return g=nc(""+g,y.mode,w),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case _o:return w=Ko(g.type,g.key,g.props,null,y.mode,w),w.ref=Gi(y,null,g),w.return=y,w;case Wr:return g=rc(g,y.mode,w),g.return=y,g;case Ln:var j=g._init;return x(y,j(g._payload),w)}if(ts(g)||Zi(g))return g=pr(g,y.mode,w,null),g.return=y,g;zo(y,g)}return null}function b(y,g,w,j){var z=g!==null?g.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return z!==null?null:f(y,g,""+w,j);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case _o:return w.key===z?h(y,g,w,j):null;case Wr:return w.key===z?m(y,g,w,j):null;case Ln:return z=w._init,b(y,g,z(w._payload),j)}if(ts(w)||Zi(w))return z!==null?null:_(y,g,w,j,null);zo(y,w)}return null}function C(y,g,w,j,z){if(typeof j=="string"&&j!==""||typeof j=="number")return y=y.get(w)||null,f(g,y,""+j,z);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case _o:return y=y.get(j.key===null?w:j.key)||null,h(g,y,j,z);case Wr:return y=y.get(j.key===null?w:j.key)||null,m(g,y,j,z);case Ln:var D=j._init;return C(y,g,w,D(j._payload),z)}if(ts(j)||Zi(j))return y=y.get(w)||null,_(g,y,j,z,null);zo(g,j)}return null}function S(y,g,w,j){for(var z=null,D=null,B=g,A=g=0,ee=null;B!==null&&A<w.length;A++){B.index>A?(ee=B,B=null):ee=B.sibling;var K=b(y,B,w[A],j);if(K===null){B===null&&(B=ee);break}e&&B&&K.alternate===null&&t(y,B),g=l(K,g,A),D===null?z=K:D.sibling=K,D=K,B=ee}if(A===w.length)return r(y,B),ke&&ar(y,A),z;if(B===null){for(;A<w.length;A++)B=x(y,w[A],j),B!==null&&(g=l(B,g,A),D===null?z=B:D.sibling=B,D=B);return ke&&ar(y,A),z}for(B=i(y,B);A<w.length;A++)ee=C(B,y,A,w[A],j),ee!==null&&(e&&ee.alternate!==null&&B.delete(ee.key===null?A:ee.key),g=l(ee,g,A),D===null?z=ee:D.sibling=ee,D=ee);return e&&B.forEach(function(oe){return t(y,oe)}),ke&&ar(y,A),z}function E(y,g,w,j){var z=Zi(w);if(typeof z!="function")throw Error(F(150));if(w=z.call(w),w==null)throw Error(F(151));for(var D=z=null,B=g,A=g=0,ee=null,K=w.next();B!==null&&!K.done;A++,K=w.next()){B.index>A?(ee=B,B=null):ee=B.sibling;var oe=b(y,B,K.value,j);if(oe===null){B===null&&(B=ee);break}e&&B&&oe.alternate===null&&t(y,B),g=l(oe,g,A),D===null?z=oe:D.sibling=oe,D=oe,B=ee}if(K.done)return r(y,B),ke&&ar(y,A),z;if(B===null){for(;!K.done;A++,K=w.next())K=x(y,K.value,j),K!==null&&(g=l(K,g,A),D===null?z=K:D.sibling=K,D=K);return ke&&ar(y,A),z}for(B=i(y,B);!K.done;A++,K=w.next())K=C(B,y,A,K.value,j),K!==null&&(e&&K.alternate!==null&&B.delete(K.key===null?A:K.key),g=l(K,g,A),D===null?z=K:D.sibling=K,D=K);return e&&B.forEach(function(xe){return t(y,xe)}),ke&&ar(y,A),z}function R(y,g,w,j){if(typeof w=="object"&&w!==null&&w.type===$r&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case _o:e:{for(var z=w.key,D=g;D!==null;){if(D.key===z){if(z=w.type,z===$r){if(D.tag===7){r(y,D.sibling),g=o(D,w.props.children),g.return=y,y=g;break e}}else if(D.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Ln&&xh(z)===D.type){r(y,D.sibling),g=o(D,w.props),g.ref=Gi(y,D,w),g.return=y,y=g;break e}r(y,D);break}else t(y,D);D=D.sibling}w.type===$r?(g=pr(w.props.children,y.mode,j,w.key),g.return=y,y=g):(j=Ko(w.type,w.key,w.props,null,y.mode,j),j.ref=Gi(y,g,w),j.return=y,y=j)}return u(y);case Wr:e:{for(D=w.key;g!==null;){if(g.key===D)if(g.tag===4&&g.stateNode.containerInfo===w.containerInfo&&g.stateNode.implementation===w.implementation){r(y,g.sibling),g=o(g,w.children||[]),g.return=y,y=g;break e}else{r(y,g);break}else t(y,g);g=g.sibling}g=rc(w,y.mode,j),g.return=y,y=g}return u(y);case Ln:return D=w._init,R(y,g,D(w._payload),j)}if(ts(w))return S(y,g,w,j);if(Zi(w))return E(y,g,w,j);zo(y,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,g!==null&&g.tag===6?(r(y,g.sibling),g=o(g,w),g.return=y,y=g):(r(y,g),g=nc(w,y.mode,j),g.return=y,y=g),u(y)):r(y,g)}return R}var di=Bm(!0),Fm=Bm(!1),ha=Xn(null),pa=null,Jr=null,Bu=null;function Fu(){Bu=Jr=pa=null}function Uu(e){var t=ha.current;be(ha),e._currentValue=t}function Zc(e,t,r){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===r)break;e=e.return}}function oi(e,t){pa=e,Bu=Jr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ft=!0),e.firstContext=null)}function Mt(e){var t=e._currentValue;if(Bu!==e)if(e={context:e,memoizedValue:t,next:null},Jr===null){if(pa===null)throw Error(F(308));Jr=e,pa.dependencies={lanes:0,firstContext:e}}else Jr=Jr.next=e;return t}var ur=null;function Hu(e){ur===null?ur=[e]:ur.push(e)}function Um(e,t,r,i){var o=t.interleaved;return o===null?(r.next=r,Hu(t)):(r.next=o.next,o.next=r),t.interleaved=r,_n(e,i)}function _n(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var zn=!1;function Zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Un(e,t,r){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,fe&2){var o=i.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),i.pending=t,_n(e,r)}return o=i.interleaved,o===null?(t.next=t,Hu(i)):(t.next=o.next,o.next=t),i.interleaved=t,_n(e,r)}function Zo(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Cu(e,r)}}function _h(e,t){var r=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,r===i)){var o=null,l=null;if(r=r.firstBaseUpdate,r!==null){do{var u={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};l===null?o=l=u:l=l.next=u,r=r.next}while(r!==null);l===null?o=l=t:l=l.next=t}else o=l=t;r={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:i.shared,effects:i.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ma(e,t,r,i){var o=e.updateQueue;zn=!1;var l=o.firstBaseUpdate,u=o.lastBaseUpdate,f=o.shared.pending;if(f!==null){o.shared.pending=null;var h=f,m=h.next;h.next=null,u===null?l=m:u.next=m,u=h;var _=e.alternate;_!==null&&(_=_.updateQueue,f=_.lastBaseUpdate,f!==u&&(f===null?_.firstBaseUpdate=m:f.next=m,_.lastBaseUpdate=h))}if(l!==null){var x=o.baseState;u=0,_=m=h=null,f=l;do{var b=f.lane,C=f.eventTime;if((i&b)===b){_!==null&&(_=_.next={eventTime:C,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var S=e,E=f;switch(b=t,C=r,E.tag){case 1:if(S=E.payload,typeof S=="function"){x=S.call(C,x,b);break e}x=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=E.payload,b=typeof S=="function"?S.call(C,x,b):S,b==null)break e;x=Ee({},x,b);break e;case 2:zn=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,b=o.effects,b===null?o.effects=[f]:b.push(f))}else C={eventTime:C,lane:b,tag:f.tag,payload:f.payload,callback:f.callback,next:null},_===null?(m=_=C,h=x):_=_.next=C,u|=b;if(f=f.next,f===null){if(f=o.shared.pending,f===null)break;b=f,f=b.next,b.next=null,o.lastBaseUpdate=b,o.shared.pending=null}}while(!0);if(_===null&&(h=x),o.baseState=h,o.firstBaseUpdate=m,o.lastBaseUpdate=_,t=o.shared.interleaved,t!==null){o=t;do u|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);xr|=u,e.lanes=u,e.memoizedState=x}}function wh(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],o=i.callback;if(o!==null){if(i.callback=null,i=r,typeof o!="function")throw Error(F(191,o));o.call(i)}}}var Zs={},ln=Xn(Zs),Ps=Xn(Zs),Ns=Xn(Zs);function dr(e){if(e===Zs)throw Error(F(174));return e}function Wu(e,t){switch(ye(Ns,t),ye(Ps,e),ye(ln,Zs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:kc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=kc(t,e)}be(ln),ye(ln,t)}function fi(){be(ln),be(Ps),be(Ns)}function Zm(e){dr(Ns.current);var t=dr(ln.current),r=kc(t,e.type);t!==r&&(ye(Ps,e),ye(ln,r))}function $u(e){Ps.current===e&&(be(ln),be(Ps))}var Pe=Xn(0);function ga(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yl=[];function Vu(){for(var e=0;e<Yl.length;e++)Yl[e]._workInProgressVersionPrimary=null;Yl.length=0}var Wo=bn.ReactCurrentDispatcher,Ql=bn.ReactCurrentBatchConfig,yr=0,Ne=null,De=null,He=null,va=!1,cs=!1,Cs=0,v_=0;function Ye(){throw Error(F(321))}function qu(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Yt(e[r],t[r]))return!1;return!0}function Gu(e,t,r,i,o,l){if(yr=l,Ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Wo.current=e===null||e.memoizedState===null?w_:b_,e=r(i,o),cs){l=0;do{if(cs=!1,Cs=0,25<=l)throw Error(F(301));l+=1,He=De=null,t.updateQueue=null,Wo.current=k_,e=r(i,o)}while(cs)}if(Wo.current=ya,t=De!==null&&De.next!==null,yr=0,He=De=Ne=null,va=!1,t)throw Error(F(300));return e}function Ku(){var e=Cs!==0;return Cs=0,e}function rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?Ne.memoizedState=He=e:He=He.next=e,He}function At(){if(De===null){var e=Ne.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=He===null?Ne.memoizedState:He.next;if(t!==null)He=t,De=e;else{if(e===null)throw Error(F(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},He===null?Ne.memoizedState=He=e:He=He.next=e}return He}function Es(e,t){return typeof t=="function"?t(e):t}function Xl(e){var t=At(),r=t.queue;if(r===null)throw Error(F(311));r.lastRenderedReducer=e;var i=De,o=i.baseQueue,l=r.pending;if(l!==null){if(o!==null){var u=o.next;o.next=l.next,l.next=u}i.baseQueue=o=l,r.pending=null}if(o!==null){l=o.next,i=i.baseState;var f=u=null,h=null,m=l;do{var _=m.lane;if((yr&_)===_)h!==null&&(h=h.next={lane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),i=m.hasEagerState?m.eagerState:e(i,m.action);else{var x={lane:_,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null};h===null?(f=h=x,u=i):h=h.next=x,Ne.lanes|=_,xr|=_}m=m.next}while(m!==null&&m!==l);h===null?u=i:h.next=f,Yt(i,t.memoizedState)||(ft=!0),t.memoizedState=i,t.baseState=u,t.baseQueue=h,r.lastRenderedState=i}if(e=r.interleaved,e!==null){o=e;do l=o.lane,Ne.lanes|=l,xr|=l,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Jl(e){var t=At(),r=t.queue;if(r===null)throw Error(F(311));r.lastRenderedReducer=e;var i=r.dispatch,o=r.pending,l=t.memoizedState;if(o!==null){r.pending=null;var u=o=o.next;do l=e(l,u.action),u=u.next;while(u!==o);Yt(l,t.memoizedState)||(ft=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),r.lastRenderedState=l}return[l,i]}function Wm(){}function $m(e,t){var r=Ne,i=At(),o=t(),l=!Yt(i.memoizedState,o);if(l&&(i.memoizedState=o,ft=!0),i=i.queue,Yu(Gm.bind(null,r,i,e),[e]),i.getSnapshot!==t||l||He!==null&&He.memoizedState.tag&1){if(r.flags|=2048,Ls(9,qm.bind(null,r,i,o,t),void 0,null),We===null)throw Error(F(349));yr&30||Vm(r,t,o)}return o}function Vm(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function qm(e,t,r,i){t.value=r,t.getSnapshot=i,Km(t)&&Ym(e)}function Gm(e,t,r){return r(function(){Km(t)&&Ym(e)})}function Km(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Yt(e,r)}catch{return!0}}function Ym(e){var t=_n(e,1);t!==null&&Kt(t,e,1,-1)}function bh(e){var t=rn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Es,lastRenderedState:e},t.queue=e,e=e.dispatch=__.bind(null,Ne,e),[t.memoizedState,e]}function Ls(e,t,r,i){return e={tag:e,create:t,destroy:r,deps:i,next:null},t=Ne.updateQueue,t===null?(t={lastEffect:null,stores:null},Ne.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(i=r.next,r.next=e,e.next=i,t.lastEffect=e)),e}function Qm(){return At().memoizedState}function $o(e,t,r,i){var o=rn();Ne.flags|=e,o.memoizedState=Ls(1|t,r,void 0,i===void 0?null:i)}function Da(e,t,r,i){var o=At();i=i===void 0?null:i;var l=void 0;if(De!==null){var u=De.memoizedState;if(l=u.destroy,i!==null&&qu(i,u.deps)){o.memoizedState=Ls(t,r,l,i);return}}Ne.flags|=e,o.memoizedState=Ls(1|t,r,l,i)}function kh(e,t){return $o(8390656,8,e,t)}function Yu(e,t){return Da(2048,8,e,t)}function Xm(e,t){return Da(4,2,e,t)}function Jm(e,t){return Da(4,4,e,t)}function eg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function tg(e,t,r){return r=r!=null?r.concat([e]):null,Da(4,4,eg.bind(null,t,e),r)}function Qu(){}function ng(e,t){var r=At();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&qu(t,i[1])?i[0]:(r.memoizedState=[e,t],e)}function rg(e,t){var r=At();t=t===void 0?null:t;var i=r.memoizedState;return i!==null&&t!==null&&qu(t,i[1])?i[0]:(e=e(),r.memoizedState=[e,t],e)}function ig(e,t,r){return yr&21?(Yt(r,t)||(r=cm(),Ne.lanes|=r,xr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ft=!0),e.memoizedState=r)}function y_(e,t){var r=me;me=r!==0&&4>r?r:4,e(!0);var i=Ql.transition;Ql.transition={};try{e(!1),t()}finally{me=r,Ql.transition=i}}function sg(){return At().memoizedState}function x_(e,t,r){var i=Zn(e);if(r={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null},og(e))ag(t,r);else if(r=Um(e,t,r,i),r!==null){var o=at();Kt(r,e,i,o),lg(r,t,i)}}function __(e,t,r){var i=Zn(e),o={lane:i,action:r,hasEagerState:!1,eagerState:null,next:null};if(og(e))ag(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var u=t.lastRenderedState,f=l(u,r);if(o.hasEagerState=!0,o.eagerState=f,Yt(f,u)){var h=t.interleaved;h===null?(o.next=o,Hu(t)):(o.next=h.next,h.next=o),t.interleaved=o;return}}catch{}finally{}r=Um(e,t,o,i),r!==null&&(o=at(),Kt(r,e,i,o),lg(r,t,i))}}function og(e){var t=e.alternate;return e===Ne||t!==null&&t===Ne}function ag(e,t){cs=va=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function lg(e,t,r){if(r&4194240){var i=t.lanes;i&=e.pendingLanes,r|=i,t.lanes=r,Cu(e,r)}}var ya={readContext:Mt,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},w_={readContext:Mt,useCallback:function(e,t){return rn().memoizedState=[e,t===void 0?null:t],e},useContext:Mt,useEffect:kh,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,$o(4194308,4,eg.bind(null,t,e),r)},useLayoutEffect:function(e,t){return $o(4194308,4,e,t)},useInsertionEffect:function(e,t){return $o(4,2,e,t)},useMemo:function(e,t){var r=rn();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var i=rn();return t=r!==void 0?r(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=x_.bind(null,Ne,e),[i.memoizedState,e]},useRef:function(e){var t=rn();return e={current:e},t.memoizedState=e},useState:bh,useDebugValue:Qu,useDeferredValue:function(e){return rn().memoizedState=e},useTransition:function(){var e=bh(!1),t=e[0];return e=y_.bind(null,e[1]),rn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var i=Ne,o=rn();if(ke){if(r===void 0)throw Error(F(407));r=r()}else{if(r=t(),We===null)throw Error(F(349));yr&30||Vm(i,t,r)}o.memoizedState=r;var l={value:r,getSnapshot:t};return o.queue=l,kh(Gm.bind(null,i,l,e),[e]),i.flags|=2048,Ls(9,qm.bind(null,i,l,r,t),void 0,null),r},useId:function(){var e=rn(),t=We.identifierPrefix;if(ke){var r=gn,i=mn;r=(i&~(1<<32-Gt(i)-1)).toString(32)+r,t=":"+t+"R"+r,r=Cs++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=v_++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},b_={readContext:Mt,useCallback:ng,useContext:Mt,useEffect:Yu,useImperativeHandle:tg,useInsertionEffect:Xm,useLayoutEffect:Jm,useMemo:rg,useReducer:Xl,useRef:Qm,useState:function(){return Xl(Es)},useDebugValue:Qu,useDeferredValue:function(e){var t=At();return ig(t,De.memoizedState,e)},useTransition:function(){var e=Xl(Es)[0],t=At().memoizedState;return[e,t]},useMutableSource:Wm,useSyncExternalStore:$m,useId:sg,unstable_isNewReconciler:!1},k_={readContext:Mt,useCallback:ng,useContext:Mt,useEffect:Yu,useImperativeHandle:tg,useInsertionEffect:Xm,useLayoutEffect:Jm,useMemo:rg,useReducer:Jl,useRef:Qm,useState:function(){return Jl(Es)},useDebugValue:Qu,useDeferredValue:function(e){var t=At();return De===null?t.memoizedState=e:ig(t,De.memoizedState,e)},useTransition:function(){var e=Jl(Es)[0],t=At().memoizedState;return[e,t]},useMutableSource:Wm,useSyncExternalStore:$m,useId:sg,unstable_isNewReconciler:!1};function $t(e,t){if(e&&e.defaultProps){t=Ee({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Wc(e,t,r,i){t=e.memoizedState,r=r(i,t),r=r==null?t:Ee({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ba={isMounted:function(e){return(e=e._reactInternals)?Er(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var i=at(),o=Zn(e),l=vn(i,o);l.payload=t,r!=null&&(l.callback=r),t=Un(e,l,o),t!==null&&(Kt(t,e,o,i),Zo(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var i=at(),o=Zn(e),l=vn(i,o);l.tag=1,l.payload=t,r!=null&&(l.callback=r),t=Un(e,l,o),t!==null&&(Kt(t,e,o,i),Zo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=at(),i=Zn(e),o=vn(r,i);o.tag=2,t!=null&&(o.callback=t),t=Un(e,o,i),t!==null&&(Kt(t,e,i,r),Zo(t,e,i))}};function Sh(e,t,r,i,o,l,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,l,u):t.prototype&&t.prototype.isPureReactComponent?!bs(r,i)||!bs(o,l):!0}function cg(e,t,r){var i=!1,o=qn,l=t.contextType;return typeof l=="object"&&l!==null?l=Mt(l):(o=pt(t)?gr:rt.current,i=t.contextTypes,l=(i=i!=null)?ci(e,o):qn),t=new t(r,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ba,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function jh(e,t,r,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,i),t.state!==e&&Ba.enqueueReplaceState(t,t.state,null)}function $c(e,t,r,i){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs={},Zu(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Mt(l):(l=pt(t)?gr:rt.current,o.context=ci(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Wc(e,t,l,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ba.enqueueReplaceState(o,o.state,null),ma(e,r,o,i),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function hi(e,t){try{var r="",i=t;do r+=Qx(i),i=i.return;while(i);var o=r}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function ec(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Vc(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var S_=typeof WeakMap=="function"?WeakMap:Map;function ug(e,t,r){r=vn(-1,r),r.tag=3,r.payload={element:null};var i=t.value;return r.callback=function(){_a||(_a=!0,nu=i),Vc(e,t)},r}function dg(e,t,r){r=vn(-1,r),r.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var o=t.value;r.payload=function(){return i(o)},r.callback=function(){Vc(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(r.callback=function(){Vc(e,t),typeof i!="function"&&(Hn===null?Hn=new Set([this]):Hn.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})}),r}function Ph(e,t,r){var i=e.pingCache;if(i===null){i=e.pingCache=new S_;var o=new Set;i.set(t,o)}else o=i.get(t),o===void 0&&(o=new Set,i.set(t,o));o.has(r)||(o.add(r),e=D_.bind(null,e,t,r),t.then(e,e))}function Nh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ch(e,t,r,i,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=vn(-1,1),t.tag=2,Un(r,t,1))),r.lanes|=1),e)}var j_=bn.ReactCurrentOwner,ft=!1;function ot(e,t,r,i){t.child=e===null?Fm(t,null,r,i):di(t,e.child,r,i)}function Eh(e,t,r,i,o){r=r.render;var l=t.ref;return oi(t,o),i=Gu(e,t,r,i,l,o),r=Ku(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,wn(e,t,o)):(ke&&r&&Au(t),t.flags|=1,ot(e,t,i,o),t.child)}function Lh(e,t,r,i,o){if(e===null){var l=r.type;return typeof l=="function"&&!sd(l)&&l.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=l,fg(e,t,l,i,o)):(e=Ko(r.type,null,i,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var u=l.memoizedProps;if(r=r.compare,r=r!==null?r:bs,r(u,i)&&e.ref===t.ref)return wn(e,t,o)}return t.flags|=1,e=Wn(l,i),e.ref=t.ref,e.return=t,t.child=e}function fg(e,t,r,i,o){if(e!==null){var l=e.memoizedProps;if(bs(l,i)&&e.ref===t.ref)if(ft=!1,t.pendingProps=i=l,(e.lanes&o)!==0)e.flags&131072&&(ft=!0);else return t.lanes=e.lanes,wn(e,t,o)}return qc(e,t,r,i,o)}function hg(e,t,r){var i=t.pendingProps,o=i.children,l=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(ti,wt),wt|=r;else{if(!(r&1073741824))return e=l!==null?l.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ye(ti,wt),wt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=l!==null?l.baseLanes:r,ye(ti,wt),wt|=i}else l!==null?(i=l.baseLanes|r,t.memoizedState=null):i=r,ye(ti,wt),wt|=i;return ot(e,t,o,r),t.child}function pg(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function qc(e,t,r,i,o){var l=pt(r)?gr:rt.current;return l=ci(t,l),oi(t,o),r=Gu(e,t,r,i,l,o),i=Ku(),e!==null&&!ft?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,wn(e,t,o)):(ke&&i&&Au(t),t.flags|=1,ot(e,t,r,o),t.child)}function zh(e,t,r,i,o){if(pt(r)){var l=!0;ua(t)}else l=!1;if(oi(t,o),t.stateNode===null)Vo(e,t),cg(t,r,i),$c(t,r,i,o),i=!0;else if(e===null){var u=t.stateNode,f=t.memoizedProps;u.props=f;var h=u.context,m=r.contextType;typeof m=="object"&&m!==null?m=Mt(m):(m=pt(r)?gr:rt.current,m=ci(t,m));var _=r.getDerivedStateFromProps,x=typeof _=="function"||typeof u.getSnapshotBeforeUpdate=="function";x||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==i||h!==m)&&jh(t,u,i,m),zn=!1;var b=t.memoizedState;u.state=b,ma(t,i,u,o),h=t.memoizedState,f!==i||b!==h||ht.current||zn?(typeof _=="function"&&(Wc(t,r,_,i),h=t.memoizedState),(f=zn||Sh(t,r,f,i,b,h,m))?(x||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=h),u.props=i,u.state=h,u.context=m,i=f):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{u=t.stateNode,Hm(e,t),f=t.memoizedProps,m=t.type===t.elementType?f:$t(t.type,f),u.props=m,x=t.pendingProps,b=u.context,h=r.contextType,typeof h=="object"&&h!==null?h=Mt(h):(h=pt(r)?gr:rt.current,h=ci(t,h));var C=r.getDerivedStateFromProps;(_=typeof C=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(f!==x||b!==h)&&jh(t,u,i,h),zn=!1,b=t.memoizedState,u.state=b,ma(t,i,u,o);var S=t.memoizedState;f!==x||b!==S||ht.current||zn?(typeof C=="function"&&(Wc(t,r,C,i),S=t.memoizedState),(m=zn||Sh(t,r,m,i,b,S,h)||!1)?(_||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(i,S,h),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(i,S,h)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=S),u.props=i,u.state=S,u.context=h,i=m):(typeof u.componentDidUpdate!="function"||f===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),i=!1)}return Gc(e,t,r,i,l,o)}function Gc(e,t,r,i,o,l){pg(e,t);var u=(t.flags&128)!==0;if(!i&&!u)return o&&gh(t,r,!1),wn(e,t,l);i=t.stateNode,j_.current=t;var f=u&&typeof r.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&u?(t.child=di(t,e.child,null,l),t.child=di(t,null,f,l)):ot(e,t,f,l),t.memoizedState=i.state,o&&gh(t,r,!0),t.child}function mg(e){var t=e.stateNode;t.pendingContext?mh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&mh(e,t.context,!1),Wu(e,t.containerInfo)}function Th(e,t,r,i,o){return ui(),Du(o),t.flags|=256,ot(e,t,r,i),t.child}var Kc={dehydrated:null,treeContext:null,retryLane:0};function Yc(e){return{baseLanes:e,cachePool:null,transitions:null}}function gg(e,t,r){var i=t.pendingProps,o=Pe.current,l=!1,u=(t.flags&128)!==0,f;if((f=u)||(f=e!==null&&e.memoizedState===null?!1:(o&2)!==0),f?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ye(Pe,o&1),e===null)return Hc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(u=i.children,e=i.fallback,l?(i=t.mode,l=t.child,u={mode:"hidden",children:u},!(i&1)&&l!==null?(l.childLanes=0,l.pendingProps=u):l=Ha(u,i,0,null),e=pr(e,i,r,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Yc(r),t.memoizedState=Kc,e):Xu(t,u));if(o=e.memoizedState,o!==null&&(f=o.dehydrated,f!==null))return P_(e,t,u,i,f,o,r);if(l){l=i.fallback,u=t.mode,o=e.child,f=o.sibling;var h={mode:"hidden",children:i.children};return!(u&1)&&t.child!==o?(i=t.child,i.childLanes=0,i.pendingProps=h,t.deletions=null):(i=Wn(o,h),i.subtreeFlags=o.subtreeFlags&14680064),f!==null?l=Wn(f,l):(l=pr(l,u,r,null),l.flags|=2),l.return=t,i.return=t,i.sibling=l,t.child=i,i=l,l=t.child,u=e.child.memoizedState,u=u===null?Yc(r):{baseLanes:u.baseLanes|r,cachePool:null,transitions:u.transitions},l.memoizedState=u,l.childLanes=e.childLanes&~r,t.memoizedState=Kc,i}return l=e.child,e=l.sibling,i=Wn(l,{mode:"visible",children:i.children}),!(t.mode&1)&&(i.lanes=r),i.return=t,i.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i}function Xu(e,t){return t=Ha({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function To(e,t,r,i){return i!==null&&Du(i),di(t,e.child,null,r),e=Xu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function P_(e,t,r,i,o,l,u){if(r)return t.flags&256?(t.flags&=-257,i=ec(Error(F(422))),To(e,t,u,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=i.fallback,o=t.mode,i=Ha({mode:"visible",children:i.children},o,0,null),l=pr(l,o,u,null),l.flags|=2,i.return=t,l.return=t,i.sibling=l,t.child=i,t.mode&1&&di(t,e.child,null,u),t.child.memoizedState=Yc(u),t.memoizedState=Kc,l);if(!(t.mode&1))return To(e,t,u,null);if(o.data==="$!"){if(i=o.nextSibling&&o.nextSibling.dataset,i)var f=i.dgst;return i=f,l=Error(F(419)),i=ec(l,i,void 0),To(e,t,u,i)}if(f=(u&e.childLanes)!==0,ft||f){if(i=We,i!==null){switch(u&-u){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(i.suspendedLanes|u)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,_n(e,o),Kt(i,e,o,-1))}return id(),i=ec(Error(F(421))),To(e,t,u,i)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=B_.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,bt=Fn(o.nextSibling),kt=t,ke=!0,qt=null,e!==null&&(Lt[zt++]=mn,Lt[zt++]=gn,Lt[zt++]=vr,mn=e.id,gn=e.overflow,vr=t),t=Xu(t,i.children),t.flags|=4096,t)}function Oh(e,t,r){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Zc(e.return,t,r)}function tc(e,t,r,i,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:r,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=i,l.tail=r,l.tailMode=o)}function vg(e,t,r){var i=t.pendingProps,o=i.revealOrder,l=i.tail;if(ot(e,t,i.children,r),i=Pe.current,i&2)i=i&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oh(e,r,t);else if(e.tag===19)Oh(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(ye(Pe,i),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&ga(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),tc(t,!1,o,r,l);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ga(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}tc(t,!0,r,null,l);break;case"together":tc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function wn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),xr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(F(153));if(t.child!==null){for(e=t.child,r=Wn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Wn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function N_(e,t,r){switch(t.tag){case 3:mg(t),ui();break;case 5:Zm(t);break;case 1:pt(t.type)&&ua(t);break;case 4:Wu(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,o=t.memoizedProps.value;ye(ha,i._currentValue),i._currentValue=o;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(ye(Pe,Pe.current&1),t.flags|=128,null):r&t.child.childLanes?gg(e,t,r):(ye(Pe,Pe.current&1),e=wn(e,t,r),e!==null?e.sibling:null);ye(Pe,Pe.current&1);break;case 19:if(i=(r&t.childLanes)!==0,e.flags&128){if(i)return vg(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ye(Pe,Pe.current),i)break;return null;case 22:case 23:return t.lanes=0,hg(e,t,r)}return wn(e,t,r)}var yg,Qc,xg,_g;yg=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Qc=function(){};xg=function(e,t,r,i){var o=e.memoizedProps;if(o!==i){e=t.stateNode,dr(ln.current);var l=null;switch(r){case"input":o=xc(e,o),i=xc(e,i),l=[];break;case"select":o=Ee({},o,{value:void 0}),i=Ee({},i,{value:void 0}),l=[];break;case"textarea":o=bc(e,o),i=bc(e,i),l=[];break;default:typeof o.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=la)}Sc(r,i);var u;r=null;for(m in o)if(!i.hasOwnProperty(m)&&o.hasOwnProperty(m)&&o[m]!=null)if(m==="style"){var f=o[m];for(u in f)f.hasOwnProperty(u)&&(r||(r={}),r[u]="")}else m!=="dangerouslySetInnerHTML"&&m!=="children"&&m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(ms.hasOwnProperty(m)?l||(l=[]):(l=l||[]).push(m,null));for(m in i){var h=i[m];if(f=o!=null?o[m]:void 0,i.hasOwnProperty(m)&&h!==f&&(h!=null||f!=null))if(m==="style")if(f){for(u in f)!f.hasOwnProperty(u)||h&&h.hasOwnProperty(u)||(r||(r={}),r[u]="");for(u in h)h.hasOwnProperty(u)&&f[u]!==h[u]&&(r||(r={}),r[u]=h[u])}else r||(l||(l=[]),l.push(m,r)),r=h;else m==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,f=f?f.__html:void 0,h!=null&&f!==h&&(l=l||[]).push(m,h)):m==="children"?typeof h!="string"&&typeof h!="number"||(l=l||[]).push(m,""+h):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&(ms.hasOwnProperty(m)?(h!=null&&m==="onScroll"&&we("scroll",e),l||f===h||(l=[])):(l=l||[]).push(m,h))}r&&(l=l||[]).push("style",r);var m=l;(t.updateQueue=m)&&(t.flags|=4)}};_g=function(e,t,r,i){r!==i&&(t.flags|=4)};function Ki(e,t){if(!ke)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var i=null;r!==null;)r.alternate!==null&&(i=r),r=r.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,i=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,i|=o.subtreeFlags&14680064,i|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=i,e.childLanes=r,t}function C_(e,t,r){var i=t.pendingProps;switch(Iu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(t),null;case 1:return pt(t.type)&&ca(),Qe(t),null;case 3:return i=t.stateNode,fi(),be(ht),be(rt),Vu(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Lo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qt!==null&&(su(qt),qt=null))),Qc(e,t),Qe(t),null;case 5:$u(t);var o=dr(Ns.current);if(r=t.type,e!==null&&t.stateNode!=null)xg(e,t,r,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(F(166));return Qe(t),null}if(e=dr(ln.current),Lo(t)){i=t.stateNode,r=t.type;var l=t.memoizedProps;switch(i[on]=t,i[js]=l,e=(t.mode&1)!==0,r){case"dialog":we("cancel",i),we("close",i);break;case"iframe":case"object":case"embed":we("load",i);break;case"video":case"audio":for(o=0;o<rs.length;o++)we(rs[o],i);break;case"source":we("error",i);break;case"img":case"image":case"link":we("error",i),we("load",i);break;case"details":we("toggle",i);break;case"input":Hf(i,l),we("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!l.multiple},we("invalid",i);break;case"textarea":Wf(i,l),we("invalid",i)}Sc(r,l),o=null;for(var u in l)if(l.hasOwnProperty(u)){var f=l[u];u==="children"?typeof f=="string"?i.textContent!==f&&(l.suppressHydrationWarning!==!0&&Eo(i.textContent,f,e),o=["children",f]):typeof f=="number"&&i.textContent!==""+f&&(l.suppressHydrationWarning!==!0&&Eo(i.textContent,f,e),o=["children",""+f]):ms.hasOwnProperty(u)&&f!=null&&u==="onScroll"&&we("scroll",i)}switch(r){case"input":wo(i),Zf(i,l,!0);break;case"textarea":wo(i),$f(i);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(i.onclick=la)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{u=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gp(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=u.createElement(r,{is:i.is}):(e=u.createElement(r),r==="select"&&(u=e,i.multiple?u.multiple=!0:i.size&&(u.size=i.size))):e=u.createElementNS(e,r),e[on]=t,e[js]=i,yg(e,t,!1,!1),t.stateNode=e;e:{switch(u=jc(r,i),r){case"dialog":we("cancel",e),we("close",e),o=i;break;case"iframe":case"object":case"embed":we("load",e),o=i;break;case"video":case"audio":for(o=0;o<rs.length;o++)we(rs[o],e);o=i;break;case"source":we("error",e),o=i;break;case"img":case"image":case"link":we("error",e),we("load",e),o=i;break;case"details":we("toggle",e),o=i;break;case"input":Hf(e,i),o=xc(e,i),we("invalid",e);break;case"option":o=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},o=Ee({},i,{value:void 0}),we("invalid",e);break;case"textarea":Wf(e,i),o=bc(e,i),we("invalid",e);break;default:o=i}Sc(r,o),f=o;for(l in f)if(f.hasOwnProperty(l)){var h=f[l];l==="style"?Qp(e,h):l==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&Kp(e,h)):l==="children"?typeof h=="string"?(r!=="textarea"||h!=="")&&gs(e,h):typeof h=="number"&&gs(e,""+h):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(ms.hasOwnProperty(l)?h!=null&&l==="onScroll"&&we("scroll",e):h!=null&&bu(e,l,h,u))}switch(r){case"input":wo(e),Zf(e,i,!1);break;case"textarea":wo(e),$f(e);break;case"option":i.value!=null&&e.setAttribute("value",""+Vn(i.value));break;case"select":e.multiple=!!i.multiple,l=i.value,l!=null?ni(e,!!i.multiple,l,!1):i.defaultValue!=null&&ni(e,!!i.multiple,i.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=la)}switch(r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Qe(t),null;case 6:if(e&&t.stateNode!=null)_g(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(F(166));if(r=dr(Ns.current),dr(ln.current),Lo(t)){if(i=t.stateNode,r=t.memoizedProps,i[on]=t,(l=i.nodeValue!==r)&&(e=kt,e!==null))switch(e.tag){case 3:Eo(i.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Eo(i.nodeValue,r,(e.mode&1)!==0)}l&&(t.flags|=4)}else i=(r.nodeType===9?r:r.ownerDocument).createTextNode(i),i[on]=t,t.stateNode=i}return Qe(t),null;case 13:if(be(Pe),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ke&&bt!==null&&t.mode&1&&!(t.flags&128))Dm(),ui(),t.flags|=98560,l=!1;else if(l=Lo(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(F(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(F(317));l[on]=t}else ui(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Qe(t),l=!1}else qt!==null&&(su(qt),qt=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||Pe.current&1?Be===0&&(Be=3):id())),t.updateQueue!==null&&(t.flags|=4),Qe(t),null);case 4:return fi(),Qc(e,t),e===null&&ks(t.stateNode.containerInfo),Qe(t),null;case 10:return Uu(t.type._context),Qe(t),null;case 17:return pt(t.type)&&ca(),Qe(t),null;case 19:if(be(Pe),l=t.memoizedState,l===null)return Qe(t),null;if(i=(t.flags&128)!==0,u=l.rendering,u===null)if(i)Ki(l,!1);else{if(Be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(u=ga(e),u!==null){for(t.flags|=128,Ki(l,!1),i=u.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=r,r=t.child;r!==null;)l=r,e=i,l.flags&=14680066,u=l.alternate,u===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=u.childLanes,l.lanes=u.lanes,l.child=u.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=u.memoizedProps,l.memoizedState=u.memoizedState,l.updateQueue=u.updateQueue,l.type=u.type,e=u.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ye(Pe,Pe.current&1|2),t.child}e=e.sibling}l.tail!==null&&Oe()>pi&&(t.flags|=128,i=!0,Ki(l,!1),t.lanes=4194304)}else{if(!i)if(e=ga(u),e!==null){if(t.flags|=128,i=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Ki(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!ke)return Qe(t),null}else 2*Oe()-l.renderingStartTime>pi&&r!==1073741824&&(t.flags|=128,i=!0,Ki(l,!1),t.lanes=4194304);l.isBackwards?(u.sibling=t.child,t.child=u):(r=l.last,r!==null?r.sibling=u:t.child=u,l.last=u)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Oe(),t.sibling=null,r=Pe.current,ye(Pe,i?r&1|2:r&1),t):(Qe(t),null);case 22:case 23:return rd(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?wt&1073741824&&(Qe(t),t.subtreeFlags&6&&(t.flags|=8192)):Qe(t),null;case 24:return null;case 25:return null}throw Error(F(156,t.tag))}function E_(e,t){switch(Iu(t),t.tag){case 1:return pt(t.type)&&ca(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fi(),be(ht),be(rt),Vu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return $u(t),null;case 13:if(be(Pe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(F(340));ui()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return be(Pe),null;case 4:return fi(),null;case 10:return Uu(t.type._context),null;case 22:case 23:return rd(),null;case 24:return null;default:return null}}var Oo=!1,tt=!1,L_=typeof WeakSet=="function"?WeakSet:Set,W=null;function ei(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(i){Le(e,t,i)}else r.current=null}function Xc(e,t,r){try{r()}catch(i){Le(e,t,i)}}var Rh=!1;function z_(e,t){if(Mc=sa,e=jm(),Mu(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var o=i.anchorOffset,l=i.focusNode;i=i.focusOffset;try{r.nodeType,l.nodeType}catch{r=null;break e}var u=0,f=-1,h=-1,m=0,_=0,x=e,b=null;t:for(;;){for(var C;x!==r||o!==0&&x.nodeType!==3||(f=u+o),x!==l||i!==0&&x.nodeType!==3||(h=u+i),x.nodeType===3&&(u+=x.nodeValue.length),(C=x.firstChild)!==null;)b=x,x=C;for(;;){if(x===e)break t;if(b===r&&++m===o&&(f=u),b===l&&++_===i&&(h=u),(C=x.nextSibling)!==null)break;x=b,b=x.parentNode}x=C}r=f===-1||h===-1?null:{start:f,end:h}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ac={focusedElem:e,selectionRange:r},sa=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var E=S.memoizedProps,R=S.memoizedState,y=t.stateNode,g=y.getSnapshotBeforeUpdate(t.elementType===t.type?E:$t(t.type,E),R);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(j){Le(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return S=Rh,Rh=!1,S}function us(e,t,r){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Xc(t,r,l)}o=o.next}while(o!==i)}}function Fa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var i=r.create;r.destroy=i()}r=r.next}while(r!==t)}}function Jc(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function wg(e){var t=e.alternate;t!==null&&(e.alternate=null,wg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[on],delete t[js],delete t[Bc],delete t[h_],delete t[p_])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bg(e){return e.tag===5||e.tag===3||e.tag===4}function Mh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function eu(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=la));else if(i!==4&&(e=e.child,e!==null))for(eu(e,t,r),e=e.sibling;e!==null;)eu(e,t,r),e=e.sibling}function tu(e,t,r){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(tu(e,t,r),e=e.sibling;e!==null;)tu(e,t,r),e=e.sibling}var qe=null,Vt=!1;function En(e,t,r){for(r=r.child;r!==null;)kg(e,t,r),r=r.sibling}function kg(e,t,r){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(Ta,r)}catch{}switch(r.tag){case 5:tt||ei(r,t);case 6:var i=qe,o=Vt;qe=null,En(e,t,r),qe=i,Vt=o,qe!==null&&(Vt?(e=qe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):qe.removeChild(r.stateNode));break;case 18:qe!==null&&(Vt?(e=qe,r=r.stateNode,e.nodeType===8?Gl(e.parentNode,r):e.nodeType===1&&Gl(e,r),_s(e)):Gl(qe,r.stateNode));break;case 4:i=qe,o=Vt,qe=r.stateNode.containerInfo,Vt=!0,En(e,t,r),qe=i,Vt=o;break;case 0:case 11:case 14:case 15:if(!tt&&(i=r.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){o=i=i.next;do{var l=o,u=l.destroy;l=l.tag,u!==void 0&&(l&2||l&4)&&Xc(r,t,u),o=o.next}while(o!==i)}En(e,t,r);break;case 1:if(!tt&&(ei(r,t),i=r.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=r.memoizedProps,i.state=r.memoizedState,i.componentWillUnmount()}catch(f){Le(r,t,f)}En(e,t,r);break;case 21:En(e,t,r);break;case 22:r.mode&1?(tt=(i=tt)||r.memoizedState!==null,En(e,t,r),tt=i):En(e,t,r);break;default:En(e,t,r)}}function Ah(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new L_),t.forEach(function(i){var o=F_.bind(null,e,i);r.has(i)||(r.add(i),i.then(o,o))})}}function Wt(e,t){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var o=r[i];try{var l=e,u=t,f=u;e:for(;f!==null;){switch(f.tag){case 5:qe=f.stateNode,Vt=!1;break e;case 3:qe=f.stateNode.containerInfo,Vt=!0;break e;case 4:qe=f.stateNode.containerInfo,Vt=!0;break e}f=f.return}if(qe===null)throw Error(F(160));kg(l,u,o),qe=null,Vt=!1;var h=o.alternate;h!==null&&(h.return=null),o.return=null}catch(m){Le(o,t,m)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Sg(t,e),t=t.sibling}function Sg(e,t){var r=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Wt(t,e),nn(e),i&4){try{us(3,e,e.return),Fa(3,e)}catch(E){Le(e,e.return,E)}try{us(5,e,e.return)}catch(E){Le(e,e.return,E)}}break;case 1:Wt(t,e),nn(e),i&512&&r!==null&&ei(r,r.return);break;case 5:if(Wt(t,e),nn(e),i&512&&r!==null&&ei(r,r.return),e.flags&32){var o=e.stateNode;try{gs(o,"")}catch(E){Le(e,e.return,E)}}if(i&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,u=r!==null?r.memoizedProps:l,f=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{f==="input"&&l.type==="radio"&&l.name!=null&&Vp(o,l),jc(f,u);var m=jc(f,l);for(u=0;u<h.length;u+=2){var _=h[u],x=h[u+1];_==="style"?Qp(o,x):_==="dangerouslySetInnerHTML"?Kp(o,x):_==="children"?gs(o,x):bu(o,_,x,m)}switch(f){case"input":_c(o,l);break;case"textarea":qp(o,l);break;case"select":var b=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var C=l.value;C!=null?ni(o,!!l.multiple,C,!1):b!==!!l.multiple&&(l.defaultValue!=null?ni(o,!!l.multiple,l.defaultValue,!0):ni(o,!!l.multiple,l.multiple?[]:"",!1))}o[js]=l}catch(E){Le(e,e.return,E)}}break;case 6:if(Wt(t,e),nn(e),i&4){if(e.stateNode===null)throw Error(F(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(E){Le(e,e.return,E)}}break;case 3:if(Wt(t,e),nn(e),i&4&&r!==null&&r.memoizedState.isDehydrated)try{_s(t.containerInfo)}catch(E){Le(e,e.return,E)}break;case 4:Wt(t,e),nn(e);break;case 13:Wt(t,e),nn(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(td=Oe())),i&4&&Ah(e);break;case 22:if(_=r!==null&&r.memoizedState!==null,e.mode&1?(tt=(m=tt)||_,Wt(t,e),tt=m):Wt(t,e),nn(e),i&8192){if(m=e.memoizedState!==null,(e.stateNode.isHidden=m)&&!_&&e.mode&1)for(W=e,_=e.child;_!==null;){for(x=W=_;W!==null;){switch(b=W,C=b.child,b.tag){case 0:case 11:case 14:case 15:us(4,b,b.return);break;case 1:ei(b,b.return);var S=b.stateNode;if(typeof S.componentWillUnmount=="function"){i=b,r=b.return;try{t=i,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(E){Le(i,r,E)}}break;case 5:ei(b,b.return);break;case 22:if(b.memoizedState!==null){Dh(x);continue}}C!==null?(C.return=b,W=C):Dh(x)}_=_.sibling}e:for(_=null,x=e;;){if(x.tag===5){if(_===null){_=x;try{o=x.stateNode,m?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(f=x.stateNode,h=x.memoizedProps.style,u=h!=null&&h.hasOwnProperty("display")?h.display:null,f.style.display=Yp("display",u))}catch(E){Le(e,e.return,E)}}}else if(x.tag===6){if(_===null)try{x.stateNode.nodeValue=m?"":x.memoizedProps}catch(E){Le(e,e.return,E)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;_===x&&(_=null),x=x.return}_===x&&(_=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:Wt(t,e),nn(e),i&4&&Ah(e);break;case 21:break;default:Wt(t,e),nn(e)}}function nn(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(bg(r)){var i=r;break e}r=r.return}throw Error(F(160))}switch(i.tag){case 5:var o=i.stateNode;i.flags&32&&(gs(o,""),i.flags&=-33);var l=Mh(e);tu(e,l,o);break;case 3:case 4:var u=i.stateNode.containerInfo,f=Mh(e);eu(e,f,u);break;default:throw Error(F(161))}}catch(h){Le(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function T_(e,t,r){W=e,jg(e)}function jg(e,t,r){for(var i=(e.mode&1)!==0;W!==null;){var o=W,l=o.child;if(o.tag===22&&i){var u=o.memoizedState!==null||Oo;if(!u){var f=o.alternate,h=f!==null&&f.memoizedState!==null||tt;f=Oo;var m=tt;if(Oo=u,(tt=h)&&!m)for(W=o;W!==null;)u=W,h=u.child,u.tag===22&&u.memoizedState!==null?Bh(o):h!==null?(h.return=u,W=h):Bh(o);for(;l!==null;)W=l,jg(l),l=l.sibling;W=o,Oo=f,tt=m}Ih(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,W=l):Ih(e)}}function Ih(e){for(;W!==null;){var t=W;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:tt||Fa(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!tt)if(r===null)i.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:$t(t.type,r.memoizedProps);i.componentDidUpdate(o,r.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&wh(t,l,i);break;case 3:var u=t.updateQueue;if(u!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}wh(t,u,r)}break;case 5:var f=t.stateNode;if(r===null&&t.flags&4){r=f;var h=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&r.focus();break;case"img":h.src&&(r.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var m=t.alternate;if(m!==null){var _=m.memoizedState;if(_!==null){var x=_.dehydrated;x!==null&&_s(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}tt||t.flags&512&&Jc(t)}catch(b){Le(t,t.return,b)}}if(t===e){W=null;break}if(r=t.sibling,r!==null){r.return=t.return,W=r;break}W=t.return}}function Dh(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var r=t.sibling;if(r!==null){r.return=t.return,W=r;break}W=t.return}}function Bh(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Fa(4,t)}catch(h){Le(t,r,h)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var o=t.return;try{i.componentDidMount()}catch(h){Le(t,o,h)}}var l=t.return;try{Jc(t)}catch(h){Le(t,l,h)}break;case 5:var u=t.return;try{Jc(t)}catch(h){Le(t,u,h)}}}catch(h){Le(t,t.return,h)}if(t===e){W=null;break}var f=t.sibling;if(f!==null){f.return=t.return,W=f;break}W=t.return}}var O_=Math.ceil,xa=bn.ReactCurrentDispatcher,Ju=bn.ReactCurrentOwner,Rt=bn.ReactCurrentBatchConfig,fe=0,We=null,Ie=null,Ge=0,wt=0,ti=Xn(0),Be=0,zs=null,xr=0,Ua=0,ed=0,ds=null,dt=null,td=0,pi=1/0,hn=null,_a=!1,nu=null,Hn=null,Ro=!1,Mn=null,wa=0,fs=0,ru=null,qo=-1,Go=0;function at(){return fe&6?Oe():qo!==-1?qo:qo=Oe()}function Zn(e){return e.mode&1?fe&2&&Ge!==0?Ge&-Ge:g_.transition!==null?(Go===0&&(Go=cm()),Go):(e=me,e!==0||(e=window.event,e=e===void 0?16:gm(e.type)),e):1}function Kt(e,t,r,i){if(50<fs)throw fs=0,ru=null,Error(F(185));Fs(e,r,i),(!(fe&2)||e!==We)&&(e===We&&(!(fe&2)&&(Ua|=r),Be===4&&On(e,Ge)),mt(e,i),r===1&&fe===0&&!(t.mode&1)&&(pi=Oe()+500,Ia&&Jn()))}function mt(e,t){var r=e.callbackNode;g0(e,t);var i=ia(e,e===We?Ge:0);if(i===0)r!==null&&Gf(r),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(r!=null&&Gf(r),t===1)e.tag===0?m_(Fh.bind(null,e)):Mm(Fh.bind(null,e)),d_(function(){!(fe&6)&&Jn()}),r=null;else{switch(um(i)){case 1:r=Nu;break;case 4:r=am;break;case 16:r=ra;break;case 536870912:r=lm;break;default:r=ra}r=Og(r,Pg.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Pg(e,t){if(qo=-1,Go=0,fe&6)throw Error(F(327));var r=e.callbackNode;if(ai()&&e.callbackNode!==r)return null;var i=ia(e,e===We?Ge:0);if(i===0)return null;if(i&30||i&e.expiredLanes||t)t=ba(e,i);else{t=i;var o=fe;fe|=2;var l=Cg();(We!==e||Ge!==t)&&(hn=null,pi=Oe()+500,hr(e,t));do try{A_();break}catch(f){Ng(e,f)}while(!0);Fu(),xa.current=l,fe=o,Ie!==null?t=0:(We=null,Ge=0,t=Be)}if(t!==0){if(t===2&&(o=Lc(e),o!==0&&(i=o,t=iu(e,o))),t===1)throw r=zs,hr(e,0),On(e,i),mt(e,Oe()),r;if(t===6)On(e,i);else{if(o=e.current.alternate,!(i&30)&&!R_(o)&&(t=ba(e,i),t===2&&(l=Lc(e),l!==0&&(i=l,t=iu(e,l))),t===1))throw r=zs,hr(e,0),On(e,i),mt(e,Oe()),r;switch(e.finishedWork=o,e.finishedLanes=i,t){case 0:case 1:throw Error(F(345));case 2:lr(e,dt,hn);break;case 3:if(On(e,i),(i&130023424)===i&&(t=td+500-Oe(),10<t)){if(ia(e,0)!==0)break;if(o=e.suspendedLanes,(o&i)!==i){at(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Dc(lr.bind(null,e,dt,hn),t);break}lr(e,dt,hn);break;case 4:if(On(e,i),(i&4194240)===i)break;for(t=e.eventTimes,o=-1;0<i;){var u=31-Gt(i);l=1<<u,u=t[u],u>o&&(o=u),i&=~l}if(i=o,i=Oe()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*O_(i/1960))-i,10<i){e.timeoutHandle=Dc(lr.bind(null,e,dt,hn),i);break}lr(e,dt,hn);break;case 5:lr(e,dt,hn);break;default:throw Error(F(329))}}}return mt(e,Oe()),e.callbackNode===r?Pg.bind(null,e):null}function iu(e,t){var r=ds;return e.current.memoizedState.isDehydrated&&(hr(e,t).flags|=256),e=ba(e,t),e!==2&&(t=dt,dt=r,t!==null&&su(t)),e}function su(e){dt===null?dt=e:dt.push.apply(dt,e)}function R_(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var i=0;i<r.length;i++){var o=r[i],l=o.getSnapshot;o=o.value;try{if(!Yt(l(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function On(e,t){for(t&=~ed,t&=~Ua,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Gt(t),i=1<<r;e[r]=-1,t&=~i}}function Fh(e){if(fe&6)throw Error(F(327));ai();var t=ia(e,0);if(!(t&1))return mt(e,Oe()),null;var r=ba(e,t);if(e.tag!==0&&r===2){var i=Lc(e);i!==0&&(t=i,r=iu(e,i))}if(r===1)throw r=zs,hr(e,0),On(e,t),mt(e,Oe()),r;if(r===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,lr(e,dt,hn),mt(e,Oe()),null}function nd(e,t){var r=fe;fe|=1;try{return e(t)}finally{fe=r,fe===0&&(pi=Oe()+500,Ia&&Jn())}}function _r(e){Mn!==null&&Mn.tag===0&&!(fe&6)&&ai();var t=fe;fe|=1;var r=Rt.transition,i=me;try{if(Rt.transition=null,me=1,e)return e()}finally{me=i,Rt.transition=r,fe=t,!(fe&6)&&Jn()}}function rd(){wt=ti.current,be(ti)}function hr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,u_(r)),Ie!==null)for(r=Ie.return;r!==null;){var i=r;switch(Iu(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ca();break;case 3:fi(),be(ht),be(rt),Vu();break;case 5:$u(i);break;case 4:fi();break;case 13:be(Pe);break;case 19:be(Pe);break;case 10:Uu(i.type._context);break;case 22:case 23:rd()}r=r.return}if(We=e,Ie=e=Wn(e.current,null),Ge=wt=t,Be=0,zs=null,ed=Ua=xr=0,dt=ds=null,ur!==null){for(t=0;t<ur.length;t++)if(r=ur[t],i=r.interleaved,i!==null){r.interleaved=null;var o=i.next,l=r.pending;if(l!==null){var u=l.next;l.next=o,i.next=u}r.pending=i}ur=null}return e}function Ng(e,t){do{var r=Ie;try{if(Fu(),Wo.current=ya,va){for(var i=Ne.memoizedState;i!==null;){var o=i.queue;o!==null&&(o.pending=null),i=i.next}va=!1}if(yr=0,He=De=Ne=null,cs=!1,Cs=0,Ju.current=null,r===null||r.return===null){Be=1,zs=t,Ie=null;break}e:{var l=e,u=r.return,f=r,h=t;if(t=Ge,f.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var m=h,_=f,x=_.tag;if(!(_.mode&1)&&(x===0||x===11||x===15)){var b=_.alternate;b?(_.updateQueue=b.updateQueue,_.memoizedState=b.memoizedState,_.lanes=b.lanes):(_.updateQueue=null,_.memoizedState=null)}var C=Nh(u);if(C!==null){C.flags&=-257,Ch(C,u,f,l,t),C.mode&1&&Ph(l,m,t),t=C,h=m;var S=t.updateQueue;if(S===null){var E=new Set;E.add(h),t.updateQueue=E}else S.add(h);break e}else{if(!(t&1)){Ph(l,m,t),id();break e}h=Error(F(426))}}else if(ke&&f.mode&1){var R=Nh(u);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Ch(R,u,f,l,t),Du(hi(h,f));break e}}l=h=hi(h,f),Be!==4&&(Be=2),ds===null?ds=[l]:ds.push(l),l=u;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var y=ug(l,h,t);_h(l,y);break e;case 1:f=h;var g=l.type,w=l.stateNode;if(!(l.flags&128)&&(typeof g.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Hn===null||!Hn.has(w)))){l.flags|=65536,t&=-t,l.lanes|=t;var j=dg(l,f,t);_h(l,j);break e}}l=l.return}while(l!==null)}Lg(r)}catch(z){t=z,Ie===r&&r!==null&&(Ie=r=r.return);continue}break}while(!0)}function Cg(){var e=xa.current;return xa.current=ya,e===null?ya:e}function id(){(Be===0||Be===3||Be===2)&&(Be=4),We===null||!(xr&268435455)&&!(Ua&268435455)||On(We,Ge)}function ba(e,t){var r=fe;fe|=2;var i=Cg();(We!==e||Ge!==t)&&(hn=null,hr(e,t));do try{M_();break}catch(o){Ng(e,o)}while(!0);if(Fu(),fe=r,xa.current=i,Ie!==null)throw Error(F(261));return We=null,Ge=0,Be}function M_(){for(;Ie!==null;)Eg(Ie)}function A_(){for(;Ie!==null&&!a0();)Eg(Ie)}function Eg(e){var t=Tg(e.alternate,e,wt);e.memoizedProps=e.pendingProps,t===null?Lg(e):Ie=t,Ju.current=null}function Lg(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=E_(r,t),r!==null){r.flags&=32767,Ie=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Be=6,Ie=null;return}}else if(r=C_(r,t,wt),r!==null){Ie=r;return}if(t=t.sibling,t!==null){Ie=t;return}Ie=t=e}while(t!==null);Be===0&&(Be=5)}function lr(e,t,r){var i=me,o=Rt.transition;try{Rt.transition=null,me=1,I_(e,t,r,i)}finally{Rt.transition=o,me=i}return null}function I_(e,t,r,i){do ai();while(Mn!==null);if(fe&6)throw Error(F(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var l=r.lanes|r.childLanes;if(v0(e,l),e===We&&(Ie=We=null,Ge=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Ro||(Ro=!0,Og(ra,function(){return ai(),null})),l=(r.flags&15990)!==0,r.subtreeFlags&15990||l){l=Rt.transition,Rt.transition=null;var u=me;me=1;var f=fe;fe|=4,Ju.current=null,z_(e,r),Sg(r,e),r_(Ac),sa=!!Mc,Ac=Mc=null,e.current=r,T_(r),l0(),fe=f,me=u,Rt.transition=l}else e.current=r;if(Ro&&(Ro=!1,Mn=e,wa=o),l=e.pendingLanes,l===0&&(Hn=null),d0(r.stateNode),mt(e,Oe()),t!==null)for(i=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],i(o.value,{componentStack:o.stack,digest:o.digest});if(_a)throw _a=!1,e=nu,nu=null,e;return wa&1&&e.tag!==0&&ai(),l=e.pendingLanes,l&1?e===ru?fs++:(fs=0,ru=e):fs=0,Jn(),null}function ai(){if(Mn!==null){var e=um(wa),t=Rt.transition,r=me;try{if(Rt.transition=null,me=16>e?16:e,Mn===null)var i=!1;else{if(e=Mn,Mn=null,wa=0,fe&6)throw Error(F(331));var o=fe;for(fe|=4,W=e.current;W!==null;){var l=W,u=l.child;if(W.flags&16){var f=l.deletions;if(f!==null){for(var h=0;h<f.length;h++){var m=f[h];for(W=m;W!==null;){var _=W;switch(_.tag){case 0:case 11:case 15:us(8,_,l)}var x=_.child;if(x!==null)x.return=_,W=x;else for(;W!==null;){_=W;var b=_.sibling,C=_.return;if(wg(_),_===m){W=null;break}if(b!==null){b.return=C,W=b;break}W=C}}}var S=l.alternate;if(S!==null){var E=S.child;if(E!==null){S.child=null;do{var R=E.sibling;E.sibling=null,E=R}while(E!==null)}}W=l}}if(l.subtreeFlags&2064&&u!==null)u.return=l,W=u;else e:for(;W!==null;){if(l=W,l.flags&2048)switch(l.tag){case 0:case 11:case 15:us(9,l,l.return)}var y=l.sibling;if(y!==null){y.return=l.return,W=y;break e}W=l.return}}var g=e.current;for(W=g;W!==null;){u=W;var w=u.child;if(u.subtreeFlags&2064&&w!==null)w.return=u,W=w;else e:for(u=g;W!==null;){if(f=W,f.flags&2048)try{switch(f.tag){case 0:case 11:case 15:Fa(9,f)}}catch(z){Le(f,f.return,z)}if(f===u){W=null;break e}var j=f.sibling;if(j!==null){j.return=f.return,W=j;break e}W=f.return}}if(fe=o,Jn(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(Ta,e)}catch{}i=!0}return i}finally{me=r,Rt.transition=t}}return!1}function Uh(e,t,r){t=hi(r,t),t=ug(e,t,1),e=Un(e,t,1),t=at(),e!==null&&(Fs(e,1,t),mt(e,t))}function Le(e,t,r){if(e.tag===3)Uh(e,e,r);else for(;t!==null;){if(t.tag===3){Uh(t,e,r);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Hn===null||!Hn.has(i))){e=hi(r,e),e=dg(t,e,1),t=Un(t,e,1),e=at(),t!==null&&(Fs(t,1,e),mt(t,e));break}}t=t.return}}function D_(e,t,r){var i=e.pingCache;i!==null&&i.delete(t),t=at(),e.pingedLanes|=e.suspendedLanes&r,We===e&&(Ge&r)===r&&(Be===4||Be===3&&(Ge&130023424)===Ge&&500>Oe()-td?hr(e,0):ed|=r),mt(e,t)}function zg(e,t){t===0&&(e.mode&1?(t=So,So<<=1,!(So&130023424)&&(So=4194304)):t=1);var r=at();e=_n(e,t),e!==null&&(Fs(e,t,r),mt(e,r))}function B_(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),zg(e,r)}function F_(e,t){var r=0;switch(e.tag){case 13:var i=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(F(314))}i!==null&&i.delete(t),zg(e,r)}var Tg;Tg=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||ht.current)ft=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return ft=!1,N_(e,t,r);ft=!!(e.flags&131072)}else ft=!1,ke&&t.flags&1048576&&Am(t,fa,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;Vo(e,t),e=t.pendingProps;var o=ci(t,rt.current);oi(t,r),o=Gu(null,t,i,e,o,r);var l=Ku();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pt(i)?(l=!0,ua(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Zu(t),o.updater=Ba,t.stateNode=o,o._reactInternals=t,$c(t,i,e,r),t=Gc(null,t,i,!0,l,r)):(t.tag=0,ke&&l&&Au(t),ot(null,t,o,r),t=t.child),t;case 16:i=t.elementType;e:{switch(Vo(e,t),e=t.pendingProps,o=i._init,i=o(i._payload),t.type=i,o=t.tag=H_(i),e=$t(i,e),o){case 0:t=qc(null,t,i,e,r);break e;case 1:t=zh(null,t,i,e,r);break e;case 11:t=Eh(null,t,i,e,r);break e;case 14:t=Lh(null,t,i,$t(i.type,e),r);break e}throw Error(F(306,i,""))}return t;case 0:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:$t(i,o),qc(e,t,i,o,r);case 1:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:$t(i,o),zh(e,t,i,o,r);case 3:e:{if(mg(t),e===null)throw Error(F(387));i=t.pendingProps,l=t.memoizedState,o=l.element,Hm(e,t),ma(t,i,null,r);var u=t.memoizedState;if(i=u.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=hi(Error(F(423)),t),t=Th(e,t,i,r,o);break e}else if(i!==o){o=hi(Error(F(424)),t),t=Th(e,t,i,r,o);break e}else for(bt=Fn(t.stateNode.containerInfo.firstChild),kt=t,ke=!0,qt=null,r=Fm(t,null,i,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ui(),i===o){t=wn(e,t,r);break e}ot(e,t,i,r)}t=t.child}return t;case 5:return Zm(t),e===null&&Hc(t),i=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,u=o.children,Ic(i,o)?u=null:l!==null&&Ic(i,l)&&(t.flags|=32),pg(e,t),ot(e,t,u,r),t.child;case 6:return e===null&&Hc(t),null;case 13:return gg(e,t,r);case 4:return Wu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=di(t,null,i,r):ot(e,t,i,r),t.child;case 11:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:$t(i,o),Eh(e,t,i,o,r);case 7:return ot(e,t,t.pendingProps,r),t.child;case 8:return ot(e,t,t.pendingProps.children,r),t.child;case 12:return ot(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(i=t.type._context,o=t.pendingProps,l=t.memoizedProps,u=o.value,ye(ha,i._currentValue),i._currentValue=u,l!==null)if(Yt(l.value,u)){if(l.children===o.children&&!ht.current){t=wn(e,t,r);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var f=l.dependencies;if(f!==null){u=l.child;for(var h=f.firstContext;h!==null;){if(h.context===i){if(l.tag===1){h=vn(-1,r&-r),h.tag=2;var m=l.updateQueue;if(m!==null){m=m.shared;var _=m.pending;_===null?h.next=h:(h.next=_.next,_.next=h),m.pending=h}}l.lanes|=r,h=l.alternate,h!==null&&(h.lanes|=r),Zc(l.return,r,t),f.lanes|=r;break}h=h.next}}else if(l.tag===10)u=l.type===t.type?null:l.child;else if(l.tag===18){if(u=l.return,u===null)throw Error(F(341));u.lanes|=r,f=u.alternate,f!==null&&(f.lanes|=r),Zc(u,r,t),u=l.sibling}else u=l.child;if(u!==null)u.return=l;else for(u=l;u!==null;){if(u===t){u=null;break}if(l=u.sibling,l!==null){l.return=u.return,u=l;break}u=u.return}l=u}ot(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,i=t.pendingProps.children,oi(t,r),o=Mt(o),i=i(o),t.flags|=1,ot(e,t,i,r),t.child;case 14:return i=t.type,o=$t(i,t.pendingProps),o=$t(i.type,o),Lh(e,t,i,o,r);case 15:return fg(e,t,t.type,t.pendingProps,r);case 17:return i=t.type,o=t.pendingProps,o=t.elementType===i?o:$t(i,o),Vo(e,t),t.tag=1,pt(i)?(e=!0,ua(t)):e=!1,oi(t,r),cg(t,i,o),$c(t,i,o,r),Gc(null,t,i,!0,e,r);case 19:return vg(e,t,r);case 22:return hg(e,t,r)}throw Error(F(156,t.tag))};function Og(e,t){return om(e,t)}function U_(e,t,r,i){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,t,r,i){return new U_(e,t,r,i)}function sd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function H_(e){if(typeof e=="function")return sd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Su)return 11;if(e===ju)return 14}return 2}function Wn(e,t){var r=e.alternate;return r===null?(r=Tt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ko(e,t,r,i,o,l){var u=2;if(i=e,typeof e=="function")sd(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case $r:return pr(r.children,o,l,t);case ku:u=8,o|=8;break;case mc:return e=Tt(12,r,t,o|2),e.elementType=mc,e.lanes=l,e;case gc:return e=Tt(13,r,t,o),e.elementType=gc,e.lanes=l,e;case vc:return e=Tt(19,r,t,o),e.elementType=vc,e.lanes=l,e;case Zp:return Ha(r,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Up:u=10;break e;case Hp:u=9;break e;case Su:u=11;break e;case ju:u=14;break e;case Ln:u=16,i=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return t=Tt(u,r,t,o),t.elementType=e,t.type=i,t.lanes=l,t}function pr(e,t,r,i){return e=Tt(7,e,i,t),e.lanes=r,e}function Ha(e,t,r,i){return e=Tt(22,e,i,t),e.elementType=Zp,e.lanes=r,e.stateNode={isHidden:!1},e}function nc(e,t,r){return e=Tt(6,e,null,t),e.lanes=r,e}function rc(e,t,r){return t=Tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Z_(e,t,r,i,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Il(0),this.expirationTimes=Il(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Il(0),this.identifierPrefix=i,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function od(e,t,r,i,o,l,u,f,h){return e=new Z_(e,t,r,f,h),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Tt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:i,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zu(l),e}function W_(e,t,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wr,key:i==null?null:""+i,children:e,containerInfo:t,implementation:r}}function Rg(e){if(!e)return qn;e=e._reactInternals;e:{if(Er(e)!==e||e.tag!==1)throw Error(F(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(F(171))}if(e.tag===1){var r=e.type;if(pt(r))return Rm(e,r,t)}return t}function Mg(e,t,r,i,o,l,u,f,h){return e=od(r,i,!0,e,o,l,u,f,h),e.context=Rg(null),r=e.current,i=at(),o=Zn(r),l=vn(i,o),l.callback=t??null,Un(r,l,o),e.current.lanes=o,Fs(e,o,i),mt(e,i),e}function Za(e,t,r,i){var o=t.current,l=at(),u=Zn(o);return r=Rg(r),t.context===null?t.context=r:t.pendingContext=r,t=vn(l,u),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=Un(o,t,u),e!==null&&(Kt(e,o,u,l),Zo(e,o,u)),u}function ka(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function ad(e,t){Hh(e,t),(e=e.alternate)&&Hh(e,t)}function $_(){return null}var Ag=typeof reportError=="function"?reportError:function(e){console.error(e)};function ld(e){this._internalRoot=e}Wa.prototype.render=ld.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(F(409));Za(e,t,null,null)};Wa.prototype.unmount=ld.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_r(function(){Za(null,e,null,null)}),t[xn]=null}};function Wa(e){this._internalRoot=e}Wa.prototype.unstable_scheduleHydration=function(e){if(e){var t=hm();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Tn.length&&t!==0&&t<Tn[r].priority;r++);Tn.splice(r,0,e),r===0&&mm(e)}};function cd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Zh(){}function V_(e,t,r,i,o){if(o){if(typeof i=="function"){var l=i;i=function(){var m=ka(u);l.call(m)}}var u=Mg(t,i,e,0,null,!1,!1,"",Zh);return e._reactRootContainer=u,e[xn]=u.current,ks(e.nodeType===8?e.parentNode:e),_r(),u}for(;o=e.lastChild;)e.removeChild(o);if(typeof i=="function"){var f=i;i=function(){var m=ka(h);f.call(m)}}var h=od(e,0,!1,null,null,!1,!1,"",Zh);return e._reactRootContainer=h,e[xn]=h.current,ks(e.nodeType===8?e.parentNode:e),_r(function(){Za(t,h,r,i)}),h}function Va(e,t,r,i,o){var l=r._reactRootContainer;if(l){var u=l;if(typeof o=="function"){var f=o;o=function(){var h=ka(u);f.call(h)}}Za(t,u,e,o)}else u=V_(r,t,e,o,i);return ka(u)}dm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=ns(t.pendingLanes);r!==0&&(Cu(t,r|1),mt(t,Oe()),!(fe&6)&&(pi=Oe()+500,Jn()))}break;case 13:_r(function(){var i=_n(e,1);if(i!==null){var o=at();Kt(i,e,1,o)}}),ad(e,1)}};Eu=function(e){if(e.tag===13){var t=_n(e,134217728);if(t!==null){var r=at();Kt(t,e,134217728,r)}ad(e,134217728)}};fm=function(e){if(e.tag===13){var t=Zn(e),r=_n(e,t);if(r!==null){var i=at();Kt(r,e,t,i)}ad(e,t)}};hm=function(){return me};pm=function(e,t){var r=me;try{return me=e,t()}finally{me=r}};Nc=function(e,t,r){switch(t){case"input":if(_c(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var i=r[t];if(i!==e&&i.form===e.form){var o=Aa(i);if(!o)throw Error(F(90));$p(i),_c(i,o)}}}break;case"textarea":qp(e,r);break;case"select":t=r.value,t!=null&&ni(e,!!r.multiple,t,!1)}};em=nd;tm=_r;var q_={usingClientEntryPoint:!1,Events:[Hs,Kr,Aa,Xp,Jp,nd]},Yi={findFiberByHostInstance:cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},G_={bundleType:Yi.bundleType,version:Yi.version,rendererPackageName:Yi.rendererPackageName,rendererConfig:Yi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=im(e),e===null?null:e.stateNode},findFiberByHostInstance:Yi.findFiberByHostInstance||$_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mo.isDisabled&&Mo.supportsFiber)try{Ta=Mo.inject(G_),an=Mo}catch{}}jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q_;jt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cd(t))throw Error(F(200));return W_(e,t,null,r)};jt.createRoot=function(e,t){if(!cd(e))throw Error(F(299));var r=!1,i="",o=Ag;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=od(e,1,!1,null,null,r,!1,i,o),e[xn]=t.current,ks(e.nodeType===8?e.parentNode:e),new ld(t)};jt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=im(t),e=e===null?null:e.stateNode,e};jt.flushSync=function(e){return _r(e)};jt.hydrate=function(e,t,r){if(!$a(t))throw Error(F(200));return Va(null,e,t,!0,r)};jt.hydrateRoot=function(e,t,r){if(!cd(e))throw Error(F(405));var i=r!=null&&r.hydratedSources||null,o=!1,l="",u=Ag;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onRecoverableError!==void 0&&(u=r.onRecoverableError)),t=Mg(t,null,e,1,r??null,o,!1,l,u),e[xn]=t.current,ks(e),i)for(e=0;e<i.length;e++)r=i[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new Wa(t)};jt.render=function(e,t,r){if(!$a(t))throw Error(F(200));return Va(null,e,t,!1,r)};jt.unmountComponentAtNode=function(e){if(!$a(e))throw Error(F(40));return e._reactRootContainer?(_r(function(){Va(null,null,e,!1,function(){e._reactRootContainer=null,e[xn]=null})}),!0):!1};jt.unstable_batchedUpdates=nd;jt.unstable_renderSubtreeIntoContainer=function(e,t,r,i){if(!$a(r))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return Va(e,t,r,!1,i)};jt.version="18.3.1-next-f1338f8080-20240426";function Ig(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ig)}catch(e){console.error(e)}}Ig(),Ip.exports=jt;var Dg=Ip.exports,Wh=Dg;hc.createRoot=Wh.createRoot,hc.hydrateRoot=Wh.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ts(){return Ts=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Ts.apply(null,arguments)}var An;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(An||(An={}));const $h="popstate";function K_(e){e===void 0&&(e={});function t(i,o){let{pathname:l,search:u,hash:f}=i.location;return ou("",{pathname:l,search:u,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(i,o){return typeof o=="string"?o:Sa(o)}return Q_(t,r,null,e)}function Ce(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Bg(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Y_(){return Math.random().toString(36).substr(2,8)}function Vh(e,t){return{usr:e.state,key:e.key,idx:t}}function ou(e,t,r,i){return r===void 0&&(r=null),Ts({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?wi(t):t,{state:r,key:t&&t.key||i||Y_()})}function Sa(e){let{pathname:t="/",search:r="",hash:i=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function wi(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let i=e.indexOf("?");i>=0&&(t.search=e.substr(i),e=e.substr(0,i)),e&&(t.pathname=e)}return t}function Q_(e,t,r,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,u=o.history,f=An.Pop,h=null,m=_();m==null&&(m=0,u.replaceState(Ts({},u.state,{idx:m}),""));function _(){return(u.state||{idx:null}).idx}function x(){f=An.Pop;let R=_(),y=R==null?null:R-m;m=R,h&&h({action:f,location:E.location,delta:y})}function b(R,y){f=An.Push;let g=ou(E.location,R,y);m=_()+1;let w=Vh(g,m),j=E.createHref(g);try{u.pushState(w,"",j)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;o.location.assign(j)}l&&h&&h({action:f,location:E.location,delta:1})}function C(R,y){f=An.Replace;let g=ou(E.location,R,y);m=_();let w=Vh(g,m),j=E.createHref(g);u.replaceState(w,"",j),l&&h&&h({action:f,location:E.location,delta:0})}function S(R){let y=o.location.origin!=="null"?o.location.origin:o.location.href,g=typeof R=="string"?R:Sa(R);return g=g.replace(/ $/,"%20"),Ce(y,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,y)}let E={get action(){return f},get location(){return e(o,u)},listen(R){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener($h,x),h=R,()=>{o.removeEventListener($h,x),h=null}},createHref(R){return t(o,R)},createURL:S,encodeLocation(R){let y=S(R);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:b,replace:C,go(R){return u.go(R)}};return E}var qh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(qh||(qh={}));function X_(e,t,r){return r===void 0&&(r="/"),J_(e,t,r)}function J_(e,t,r,i){let o=typeof t=="string"?wi(t):t,l=mi(o.pathname||"/",r);if(l==null)return null;let u=Fg(e);e1(u);let f=null,h=d1(l);for(let m=0;f==null&&m<u.length;++m)f=c1(u[m],h);return f}function Fg(e,t,r,i){t===void 0&&(t=[]),r===void 0&&(r=[]),i===void 0&&(i="");let o=(l,u,f)=>{let h={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};h.relativePath.startsWith("/")&&(Ce(h.relativePath.startsWith(i),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(i.length));let m=$n([i,h.relativePath]),_=r.concat(h);l.children&&l.children.length>0&&(Ce(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+m+'".')),Fg(l.children,t,_,m)),!(l.path==null&&!l.index)&&t.push({path:m,score:a1(m,l.index),routesMeta:_})};return e.forEach((l,u)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,u);else for(let h of Ug(l.path))o(l,u,h)}),t}function Ug(e){let t=e.split("/");if(t.length===0)return[];let[r,...i]=t,o=r.endsWith("?"),l=r.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let u=Ug(i.join("/")),f=[];return f.push(...u.map(h=>h===""?l:[l,h].join("/"))),o&&f.push(...u),f.map(h=>e.startsWith("/")&&h===""?"/":h)}function e1(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:l1(t.routesMeta.map(i=>i.childrenIndex),r.routesMeta.map(i=>i.childrenIndex)))}const t1=/^:[\w-]+$/,n1=3,r1=2,i1=1,s1=10,o1=-2,Gh=e=>e==="*";function a1(e,t){let r=e.split("/"),i=r.length;return r.some(Gh)&&(i+=o1),t&&(i+=r1),r.filter(o=>!Gh(o)).reduce((o,l)=>o+(t1.test(l)?n1:l===""?i1:s1),i)}function l1(e,t){return e.length===t.length&&e.slice(0,-1).every((i,o)=>i===t[o])?e[e.length-1]-t[t.length-1]:0}function c1(e,t,r){let{routesMeta:i}=e,o={},l="/",u=[];for(let f=0;f<i.length;++f){let h=i[f],m=f===i.length-1,_=l==="/"?t:t.slice(l.length)||"/",x=au({path:h.relativePath,caseSensitive:h.caseSensitive,end:m},_),b=h.route;if(!x)return null;Object.assign(o,x.params),u.push({params:o,pathname:$n([l,x.pathname]),pathnameBase:p1($n([l,x.pathnameBase])),route:b}),x.pathnameBase!=="/"&&(l=$n([l,x.pathnameBase]))}return u}function au(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,i]=u1(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((m,_,x)=>{let{paramName:b,isOptional:C}=_;if(b==="*"){let E=f[x]||"";u=l.slice(0,l.length-E.length).replace(/(.)\/+$/,"$1")}const S=f[x];return C&&!S?m[b]=void 0:m[b]=(S||"").replace(/%2F/g,"/"),m},{}),pathname:l,pathnameBase:u,pattern:e}}function u1(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Bg(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,h)=>(i.push({paramName:f,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),i]}function d1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Bg(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function mi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,i=e.charAt(r);return i&&i!=="/"?null:e.slice(r)||"/"}function f1(e,t){t===void 0&&(t="/");let{pathname:r,search:i="",hash:o=""}=typeof e=="string"?wi(e):e,l;return r?(r=Hg(r),r.startsWith("/")?l=Kh(r.substring(1),"/"):l=Kh(r,t)):l=t,{pathname:l,search:m1(i),hash:g1(o)}}function Kh(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function ic(e,t,r,i){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function h1(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function ud(e,t){let r=h1(e);return t?r.map((i,o)=>o===r.length-1?i.pathname:i.pathnameBase):r.map(i=>i.pathnameBase)}function dd(e,t,r,i){i===void 0&&(i=!1);let o;typeof e=="string"?o=wi(e):(o=Ts({},e),Ce(!o.pathname||!o.pathname.includes("?"),ic("?","pathname","search",o)),Ce(!o.pathname||!o.pathname.includes("#"),ic("#","pathname","hash",o)),Ce(!o.search||!o.search.includes("#"),ic("#","search","hash",o)));let l=e===""||o.pathname==="",u=l?"/":o.pathname,f;if(u==null)f=r;else{let x=t.length-1;if(!i&&u.startsWith("..")){let b=u.split("/");for(;b[0]==="..";)b.shift(),x-=1;o.pathname=b.join("/")}f=x>=0?t[x]:"/"}let h=f1(o,f),m=u&&u!=="/"&&u.endsWith("/"),_=(l||u===".")&&r.endsWith("/");return!h.pathname.endsWith("/")&&(m||_)&&(h.pathname+="/"),h}const Hg=e=>e.replace(/\/\/+/g,"/"),$n=e=>Hg(e.join("/")),p1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),m1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,g1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function v1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Zg=["post","put","patch","delete"];new Set(Zg);const y1=["get",...Zg];new Set(y1);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Os(){return Os=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},Os.apply(null,arguments)}const qa=P.createContext(null),Wg=P.createContext(null),kn=P.createContext(null),Ga=P.createContext(null),Sn=P.createContext({outlet:null,matches:[],isDataRoute:!1}),$g=P.createContext(null);function x1(e,t){let{relative:r}=t===void 0?{}:t;bi()||Ce(!1);let{basename:i,navigator:o}=P.useContext(kn),{hash:l,pathname:u,search:f}=Ka(e,{relative:r}),h=u;return i!=="/"&&(h=u==="/"?i:$n([i,u])),o.createHref({pathname:h,search:f,hash:l})}function bi(){return P.useContext(Ga)!=null}function jn(){return bi()||Ce(!1),P.useContext(Ga).location}function Vg(e){P.useContext(kn).static||P.useLayoutEffect(e)}function Lr(){let{isDataRoute:e}=P.useContext(Sn);return e?R1():_1()}function _1(){bi()||Ce(!1);let e=P.useContext(qa),{basename:t,future:r,navigator:i}=P.useContext(kn),{matches:o}=P.useContext(Sn),{pathname:l}=jn(),u=JSON.stringify(ud(o,r.v7_relativeSplatPath)),f=P.useRef(!1);return Vg(()=>{f.current=!0}),P.useCallback(function(m,_){if(_===void 0&&(_={}),!f.current)return;if(typeof m=="number"){i.go(m);return}let x=dd(m,JSON.parse(u),l,_.relative==="path");e==null&&t!=="/"&&(x.pathname=x.pathname==="/"?t:$n([t,x.pathname])),(_.replace?i.replace:i.push)(x,_.state,_)},[t,i,u,l,e])}const w1=P.createContext(null);function b1(e){let t=P.useContext(Sn).outlet;return t&&P.createElement(w1.Provider,{value:e},t)}function Ka(e,t){let{relative:r}=t===void 0?{}:t,{future:i}=P.useContext(kn),{matches:o}=P.useContext(Sn),{pathname:l}=jn(),u=JSON.stringify(ud(o,i.v7_relativeSplatPath));return P.useMemo(()=>dd(e,JSON.parse(u),l,r==="path"),[e,u,l,r])}function k1(e,t){return S1(e,t)}function S1(e,t,r,i){bi()||Ce(!1);let{navigator:o}=P.useContext(kn),{matches:l}=P.useContext(Sn),u=l[l.length-1],f=u?u.params:{};u&&u.pathname;let h=u?u.pathnameBase:"/";u&&u.route;let m=jn(),_;if(t){var x;let R=typeof t=="string"?wi(t):t;h==="/"||(x=R.pathname)!=null&&x.startsWith(h)||Ce(!1),_=R}else _=m;let b=_.pathname||"/",C=b;if(h!=="/"){let R=h.replace(/^\//,"").split("/");C="/"+b.replace(/^\//,"").split("/").slice(R.length).join("/")}let S=X_(e,{pathname:C}),E=E1(S&&S.map(R=>Object.assign({},R,{params:Object.assign({},f,R.params),pathname:$n([h,o.encodeLocation?o.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?h:$n([h,o.encodeLocation?o.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),l,r,i);return t&&E?P.createElement(Ga.Provider,{value:{location:Os({pathname:"/",search:"",hash:"",state:null,key:"default"},_),navigationType:An.Pop}},E):E}function j1(){let e=O1(),t=v1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},t),r?P.createElement("pre",{style:o},r):null,null)}const P1=P.createElement(j1,null);class N1 extends P.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?P.createElement(Sn.Provider,{value:this.props.routeContext},P.createElement($g.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function C1(e){let{routeContext:t,match:r,children:i}=e,o=P.useContext(qa);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),P.createElement(Sn.Provider,{value:t},i)}function E1(e,t,r,i){var o;if(t===void 0&&(t=[]),r===void 0&&(r=null),i===void 0&&(i=null),e==null){var l;if(!r)return null;if(r.errors)e=r.matches;else if((l=i)!=null&&l.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let u=e,f=(o=r)==null?void 0:o.errors;if(f!=null){let _=u.findIndex(x=>x.route.id&&(f==null?void 0:f[x.route.id])!==void 0);_>=0||Ce(!1),u=u.slice(0,Math.min(u.length,_+1))}let h=!1,m=-1;if(r&&i&&i.v7_partialHydration)for(let _=0;_<u.length;_++){let x=u[_];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(m=_),x.route.id){let{loaderData:b,errors:C}=r,S=x.route.loader&&b[x.route.id]===void 0&&(!C||C[x.route.id]===void 0);if(x.route.lazy||S){h=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}return u.reduceRight((_,x,b)=>{let C,S=!1,E=null,R=null;r&&(C=f&&x.route.id?f[x.route.id]:void 0,E=x.route.errorElement||P1,h&&(m<0&&b===0?(M1("route-fallback"),S=!0,R=null):m===b&&(S=!0,R=x.route.hydrateFallbackElement||null)));let y=t.concat(u.slice(0,b+1)),g=()=>{let w;return C?w=E:S?w=R:x.route.Component?w=P.createElement(x.route.Component,null):x.route.element?w=x.route.element:w=_,P.createElement(C1,{match:x,routeContext:{outlet:_,matches:y,isDataRoute:r!=null},children:w})};return r&&(x.route.ErrorBoundary||x.route.errorElement||b===0)?P.createElement(N1,{location:r.location,revalidation:r.revalidation,component:E,error:C,children:g(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):g()},null)}var qg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(qg||{}),Gg=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Gg||{});function L1(e){let t=P.useContext(qa);return t||Ce(!1),t}function z1(e){let t=P.useContext(Wg);return t||Ce(!1),t}function T1(e){let t=P.useContext(Sn);return t||Ce(!1),t}function Kg(e){let t=T1(),r=t.matches[t.matches.length-1];return r.route.id||Ce(!1),r.route.id}function O1(){var e;let t=P.useContext($g),r=z1(),i=Kg();return t!==void 0?t:(e=r.errors)==null?void 0:e[i]}function R1(){let{router:e}=L1(qg.UseNavigateStable),t=Kg(Gg.UseNavigateStable),r=P.useRef(!1);return Vg(()=>{r.current=!0}),P.useCallback(function(o,l){l===void 0&&(l={}),r.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Os({fromRouteId:t},l)))},[e,t])}const Yh={};function M1(e,t,r){Yh[e]||(Yh[e]=!0)}function A1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Yg(e){let{to:t,replace:r,state:i,relative:o}=e;bi()||Ce(!1);let{future:l,static:u}=P.useContext(kn),{matches:f}=P.useContext(Sn),{pathname:h}=jn(),m=Lr(),_=dd(t,ud(f,l.v7_relativeSplatPath),h,o==="path"),x=JSON.stringify(_);return P.useEffect(()=>m(JSON.parse(x),{replace:r,state:i,relative:o}),[m,x,o,r,i]),null}function I1(e){return b1(e.context)}function et(e){Ce(!1)}function D1(e){let{basename:t="/",children:r=null,location:i,navigationType:o=An.Pop,navigator:l,static:u=!1,future:f}=e;bi()&&Ce(!1);let h=t.replace(/^\/*/,"/"),m=P.useMemo(()=>({basename:h,navigator:l,static:u,future:Os({v7_relativeSplatPath:!1},f)}),[h,f,l,u]);typeof i=="string"&&(i=wi(i));let{pathname:_="/",search:x="",hash:b="",state:C=null,key:S="default"}=i,E=P.useMemo(()=>{let R=mi(_,h);return R==null?null:{location:{pathname:R,search:x,hash:b,state:C,key:S},navigationType:o}},[h,_,x,b,C,S,o]);return E==null?null:P.createElement(kn.Provider,{value:m},P.createElement(Ga.Provider,{children:r,value:E}))}function B1(e){let{children:t,location:r}=e;return k1(lu(t),r)}new Promise(()=>{});function lu(e,t){t===void 0&&(t=[]);let r=[];return P.Children.forEach(e,(i,o)=>{if(!P.isValidElement(i))return;let l=[...t,o];if(i.type===P.Fragment){r.push.apply(r,lu(i.props.children,l));return}i.type!==et&&Ce(!1),!i.props.index||!i.props.children||Ce(!1);let u={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=lu(i.props.children,l)),r.push(u)}),r}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ja(){return ja=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},ja.apply(null,arguments)}function Qg(e,t){if(e==null)return{};var r={};for(var i in e)if({}.hasOwnProperty.call(e,i)){if(t.indexOf(i)!==-1)continue;r[i]=e[i]}return r}function F1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function U1(e,t){return e.button===0&&(!t||t==="_self")&&!F1(e)}const H1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Z1=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],W1="6";try{window.__reactRouterVersion=W1}catch{}const $1=P.createContext({isTransitioning:!1}),V1="startTransition",Qh=Dx[V1];function q1(e){let{basename:t,children:r,future:i,window:o}=e,l=P.useRef();l.current==null&&(l.current=K_({window:o,v5Compat:!0}));let u=l.current,[f,h]=P.useState({action:u.action,location:u.location}),{v7_startTransition:m}=i||{},_=P.useCallback(x=>{m&&Qh?Qh(()=>h(x)):h(x)},[h,m]);return P.useLayoutEffect(()=>u.listen(_),[u,_]),P.useEffect(()=>A1(i),[i]),P.createElement(D1,{basename:t,children:r,location:f.location,navigationType:f.action,navigator:u,future:i})}const G1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",K1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,te=P.forwardRef(function(t,r){let{onClick:i,relative:o,reloadDocument:l,replace:u,state:f,target:h,to:m,preventScrollReset:_,viewTransition:x}=t,b=Qg(t,H1),{basename:C}=P.useContext(kn),S,E=!1;if(typeof m=="string"&&K1.test(m)&&(S=m,G1))try{let w=new URL(window.location.href),j=m.startsWith("//")?new URL(w.protocol+m):new URL(m),z=mi(j.pathname,C);j.origin===w.origin&&z!=null?m=z+j.search+j.hash:E=!0}catch{}let R=x1(m,{relative:o}),y=Q1(m,{replace:u,state:f,target:h,preventScrollReset:_,relative:o,viewTransition:x});function g(w){i&&i(w),w.defaultPrevented||y(w)}return P.createElement("a",ja({},b,{href:S||R,onClick:E||l?i:g,ref:r,target:h}))}),Xe=P.forwardRef(function(t,r){let{"aria-current":i="page",caseSensitive:o=!1,className:l="",end:u=!1,style:f,to:h,viewTransition:m,children:_}=t,x=Qg(t,Z1),b=Ka(h,{relative:x.relative}),C=jn(),S=P.useContext(Wg),{navigator:E,basename:R}=P.useContext(kn),y=S!=null&&X1(b)&&m===!0,g=E.encodeLocation?E.encodeLocation(b).pathname:b.pathname,w=C.pathname,j=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;o||(w=w.toLowerCase(),j=j?j.toLowerCase():null,g=g.toLowerCase()),j&&R&&(j=mi(j,R)||j);const z=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let D=w===g||!u&&w.startsWith(g)&&w.charAt(z)==="/",B=j!=null&&(j===g||!u&&j.startsWith(g)&&j.charAt(g.length)==="/"),A={isActive:D,isPending:B,isTransitioning:y},ee=D?i:void 0,K;typeof l=="function"?K=l(A):K=[l,D?"active":null,B?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let oe=typeof f=="function"?f(A):f;return P.createElement(te,ja({},x,{"aria-current":ee,className:K,ref:r,style:oe,to:h,viewTransition:m}),typeof _=="function"?_(A):_)});var cu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(cu||(cu={}));var Xh;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Xh||(Xh={}));function Y1(e){let t=P.useContext(qa);return t||Ce(!1),t}function Q1(e,t){let{target:r,replace:i,state:o,preventScrollReset:l,relative:u,viewTransition:f}=t===void 0?{}:t,h=Lr(),m=jn(),_=Ka(e,{relative:u});return P.useCallback(x=>{if(U1(x,r)){x.preventDefault();let b=i!==void 0?i:Sa(m)===Sa(_);h(e,{replace:b,state:o,preventScrollReset:l,relative:u,viewTransition:f})}},[m,h,_,i,o,r,e,l,u,f])}function X1(e,t){t===void 0&&(t={});let r=P.useContext($1);r==null&&Ce(!1);let{basename:i}=Y1(cu.useViewTransitionState),o=Ka(e,{relative:t.relative});if(!r.isTransitioning)return!1;let l=mi(r.currentLocation.pathname,i)||r.currentLocation.pathname,u=mi(r.nextLocation.pathname,i)||r.nextLocation.pathname;return au(o.pathname,u)!=null||au(o.pathname,l)!=null}function Xg(e,t){return function(){return e.apply(t,arguments)}}const{toString:J1}=Object.prototype,{getPrototypeOf:Gn}=Object,{iterator:Ws,toStringTag:Jg}=Symbol,Rs=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),ev=e=>typeof e=="string"&&(e==="__proto__"||e==="constructor"||e==="prototype"),tv=(e,t,r)=>e===Object.prototype||!r&&t===null,ew=e=>{if(!Object.isExtensible(e))return!1;const t=Object.getOwnPropertyNames(e);return Object.getOwnPropertySymbols&&t.push(...Object.getOwnPropertySymbols(e)),t.every(r=>{if(ev(r))return!1;const i=Object.getOwnPropertyDescriptor(e,r);return!!i&&i.configurable&&i.writable===!0})},Ms=(e,t)=>{let r=e;const i=[];for(;r!=null;){if(i.indexOf(r)!==-1)return!1;i.push(r);const o=Gn(r);if(tv(r,o,r===e))return!1;if(Rs(r,t))return!0;r=o}return!1},tw=(e,t)=>e!=null&&Ms(e,t)?e[t]:void 0,nw=e=>{if(e==null||typeof e!="object"&&typeof e!="function")return e;const t=Gn(e);if(t===null&&ew(e))return e;const r=Object.create(null),i=Object.create(null),o=[];let l=e;for(;l!=null&&o.indexOf(l)===-1;){o.push(l);const u=l===e?t:Gn(l);if(tv(l,u,l===e))break;const f=Object.getOwnPropertyNames(l);Object.getOwnPropertySymbols&&f.push(...Object.getOwnPropertySymbols(l));for(const h of f)ev(h)||Rs(i,h)||(r[h]=e[h],i[h]=!0);l=u}return r},fd=(e=>t=>{const r=J1.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),Dt=e=>(e=e.toLowerCase(),t=>fd(t)===e),Ya=e=>t=>typeof t===e,{isArray:wr}=Array,br=Ya("undefined");function ki(e){return e!==null&&!br(e)&&e.constructor!==null&&!br(e.constructor)&&gt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const nv=Dt("ArrayBuffer");function rw(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&nv(e.buffer),t}const iw=Ya("string"),gt=Ya("function"),rv=Ya("number"),Si=e=>e!==null&&typeof e=="object",sw=e=>e===!0||e===!1,Yo=e=>{if(!Si(e))return!1;const t=Gn(e);return(t===null||t===Object.prototype||Gn(t)===null)&&!Ms(e,Jg)&&!Ms(e,Ws)},ow=e=>{if(!Si(e)||ki(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},aw=Dt("Date"),lw=Dt("File"),cw=e=>!!(e&&typeof e.uri<"u"),uw=e=>e&&typeof e.getParts<"u",dw=Dt("Blob"),fw=Dt("FileList"),hw=Dt("Set"),pw=e=>Si(e)&&gt(e.pipe);function mw(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Jh=mw(),ep=typeof Jh.FormData<"u"?Jh.FormData:void 0,gw=e=>{if(!e)return!1;if(ep&&e instanceof ep)return!0;const t=Gn(e);if(!t||t===Object.prototype||!gt(e.append))return!1;const r=fd(e);return r==="formdata"||r==="object"&&gt(e.toString)&&e.toString()==="[object FormData]"},vw=Dt("URLSearchParams"),[yw,xw,_w,ww]=["ReadableStream","Request","Response","Headers"].map(Dt),bw=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function $s(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let i,o;if(typeof e!="object"&&(e=[e]),wr(e))for(i=0,o=e.length;i<o;i++)t.call(null,e[i],i,e);else{if(ki(e))return;const l=r?Object.getOwnPropertyNames(e):Object.keys(e),u=l.length;let f;for(i=0;i<u;i++)f=l[i],t.call(null,e[f],f,e)}}function iv(e,t){if(ki(e))return null;t=t.toLowerCase();const r=Object.keys(e);let i=r.length,o;for(;i-- >0;)if(o=r[i],t===o.toLowerCase())return o;return null}const fr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,sv=e=>!br(e)&&e!==fr;function uu(...e){const{caseless:t,skipUndefined:r}=sv(this)&&this||{},i={},o=(l,u)=>{if(u==="__proto__"||u==="constructor"||u==="prototype")return;const f=t&&typeof u=="string"&&iv(i,u)||u,h=Rs(i,f)?i[f]:void 0;Yo(h)&&Yo(l)?i[f]=uu(h,l):Yo(l)?i[f]=uu({},l):wr(l)?i[f]=l.slice():(!r||!br(l))&&(i[f]=l)};for(let l=0,u=e.length;l<u;l++){const f=e[l];if(!f||ki(f)||($s(f,o),typeof f!="object"||wr(f)))continue;const h=Object.getOwnPropertySymbols(f);for(let m=0;m<h.length;m++){const _=h[m];Rw.call(f,_)&&o(f[_],_)}}return i}const kw=(e,t,r,{allOwnKeys:i}={})=>($s(t,(o,l)=>{r&&gt(o)?Object.defineProperty(e,l,{__proto__:null,value:Xg(o,r),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,l,{__proto__:null,value:o,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),e),Sw=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),jw=(e,t,r,i)=>{e.prototype=Object.create(t.prototype,i),Object.defineProperty(e.prototype,"constructor",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{__proto__:null,value:t.prototype}),r&&Object.assign(e.prototype,r)},Pw=(e,t,r,i)=>{let o,l,u;const f={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),l=o.length;l-- >0;)u=o[l],(!i||i(u,e,t))&&!f[u]&&(t[u]=e[u],f[u]=!0);e=r!==!1&&Gn(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},Nw=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const i=e.indexOf(t,r);return i!==-1&&i===r},Cw=e=>{if(!e)return null;if(wr(e))return e;let t=e.length;if(!rv(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},Ew=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Gn(Uint8Array)),Lw=(e,t)=>{const i=(e&&e[Ws]).call(e);let o;for(;(o=i.next())&&!o.done;){const l=o.value;t.call(e,l[0],l[1])}},zw=(e,t)=>{let r;const i=[];for(;(r=e.exec(t))!==null;)i.push(r);return i},Tw=Dt("HTMLFormElement"),Ow=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,i,o){return i.toUpperCase()+o}),{propertyIsEnumerable:Rw}=Object.prototype,Mw=Dt("RegExp"),ov=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),i={};$s(r,(o,l)=>{let u;(u=t(o,l,e))!==!1&&(i[l]=u||o)}),Object.defineProperties(e,i)},Aw=e=>{ov(e,(t,r)=>{if(gt(e)&&["arguments","caller","callee"].includes(r))return!1;const i=e[r];if(gt(i)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Iw=(e,t)=>{const r={},i=o=>{o.forEach(l=>{r[l]=!0})};return wr(e)?i(e):i(String(e).split(t)),r},Dw=()=>{},Bw=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function Fw(e){return!!(e&&gt(e.append)&&e[Jg]==="FormData"&&e[Ws])}const Uw=e=>{const t=new WeakSet,r=i=>{if(Si(i)){if(t.has(i))return;if(ki(i))return i;if(!("toJSON"in i)){t.add(i);let o;if(hw(i)){o=[];for(const l of i){const u=r(l);!br(u)&&o.push(u)}}else o=wr(i)?[]:{},$s(i,(l,u)=>{const f=r(l);!br(f)&&(o[u]=f)});return t.delete(i),o}}return i};return r(e)},Hw=Dt("AsyncFunction"),Zw=e=>e&&(Si(e)||gt(e))&&gt(e.then)&&gt(e.catch),av=((e,t)=>e?setImmediate:t?((r,i)=>(fr.addEventListener("message",({source:o,data:l})=>{o===fr&&l===r&&i.length&&i.shift()()},!1),o=>{i.push(o),fr.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",gt(fr.postMessage)),Ww=typeof queueMicrotask<"u"?queueMicrotask.bind(fr):typeof process<"u"&&process.nextTick||av,lv=e=>e!=null&&gt(e[Ws]),$w=e=>e!=null&&Ms(e,Ws)&&lv(e),N={isArray:wr,isArrayBuffer:nv,isBuffer:ki,isFormData:gw,isArrayBufferView:rw,isString:iw,isNumber:rv,isBoolean:sw,isObject:Si,isPlainObject:Yo,isEmptyObject:ow,isReadableStream:yw,isRequest:xw,isResponse:_w,isHeaders:ww,isUndefined:br,isDate:aw,isFile:lw,isReactNativeBlob:cw,isReactNative:uw,isBlob:dw,isRegExp:Mw,isFunction:gt,isStream:pw,isURLSearchParams:vw,isTypedArray:Ew,isFileList:fw,forEach:$s,merge:uu,extend:kw,trim:bw,stripBOM:Sw,inherits:jw,toFlatObject:Pw,kindOf:fd,kindOfTest:Dt,endsWith:Nw,toArray:Cw,forEachEntry:Lw,matchAll:zw,isHTMLForm:Tw,hasOwnProperty:Rs,hasOwnProp:Rs,hasOwnInPrototypeChain:Ms,getSafeProp:tw,toSafeFlatObject:nw,reduceDescriptors:ov,freezeMethods:Aw,toObjectSet:Iw,toCamelCase:Ow,noop:Dw,toFiniteNumber:Bw,findKey:iv,global:fr,isContextDefined:sv,isSpecCompliantForm:Fw,toJSONObject:Uw,isAsyncFn:Hw,isThenable:Zw,setImmediate:av,asap:Ww,isIterable:lv,isSafeIterable:$w},Vw=N.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),qw=e=>{const t={};let r,i,o;return e&&e.split(`
`).forEach(function(u){o=u.indexOf(":"),r=u.substring(0,o).trim().toLowerCase(),i=u.substring(o+1).trim();const f=N.hasOwnProp(t,r);!r||f&&N.hasOwnProp(Vw,r)||(r==="set-cookie"?f?t[r].push(i):t[r]=[i]:t[r]=f?t[r]+", "+i:i)}),t};function Gw(e){let t=0,r=e.length;for(;t<r;){const i=e.charCodeAt(t);if(i!==9&&i!==32)break;t+=1}for(;r>t;){const i=e.charCodeAt(r-1);if(i!==9&&i!==32)break;r-=1}return t===0&&r===e.length?e:e.slice(t,r)}const Kw=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),Yw=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function hd(e,t){return N.isArray(e)?e.map(r=>hd(r,t)):Gw(String(e).replace(t,""))}const Qw=e=>hd(e,Kw),Xw=e=>hd(e,Yw);function cv(e){const t=Object.create(null);return N.forEach(e.toJSON(),(r,i)=>{t[i]=Xw(r)}),t}const tp=Symbol("internals");function Qi(e){return e&&String(e).trim().toLowerCase()}function Qo(e){return e===!1||e==null?e:N.isArray(e)?e.map(Qo):Qw(String(e))}function Jw(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=r.exec(e);)t[i[1]]=i[2];return t}const eb=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function sc(e){let t=0,r=e.length;for(;t<r;){const i=e.charCodeAt(t);if(i!==9&&i!==32)break;t+=1}for(;r>t;){const i=e.charCodeAt(r-1);if(i!==9&&i!==32)break;r-=1}return t===0&&r===e.length?e:e.slice(t,r)}function tb(e){const t=e.length-1;if(t<1||e.charCodeAt(0)!==34||e.charCodeAt(t)!==34)return e;let r="";for(let i=1;i<t;i++){const o=e.charCodeAt(i);if(o===34||o===92&&(i+=1,i>=t))return e;r+=e[i]}return r}function nb(e){const t=Object.create(null),r=String(e);let i=0,o=!1,l=!1;function u(f){const h=sc(r.slice(i,f)),m=h.indexOf("=");if(m<1)return;const _=sc(h.slice(0,m));if(!eb.test(_))return;const x=_.toLowerCase();if(x==="__proto__"||x==="constructor"||x==="prototype")return;const b=sc(h.slice(m+1));t[x]=tb(b)}for(let f=0;f<r.length;f++){const h=r.charCodeAt(f);o?l?l=!1:h===92?l=!0:h===34&&(o=!1):h===34?o=!0:(h===44||h===59)&&(u(f),i=f+1)}return u(r.length),t}const rb=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function oc(e,t,r,i,o){if(N.isFunction(i))return i.call(this,t,r);if(o&&(t=r),!!N.isString(t)){if(N.isString(i))return t.indexOf(i)!==-1;if(N.isRegExp(i))return i.test(t)}}function ib(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,i)=>r.toUpperCase()+i)}function sb(e,t){const r=N.toCamelCase(" "+t);["get","set","has"].forEach(i=>{Object.defineProperty(e,i+r,{__proto__:null,value:function(o,l,u){return this[i].call(this,t,o,l,u)},configurable:!0})})}let nt=class{constructor(t){t&&this.set(t)}set(t,r,i){const o=this;function l(f,h,m){const _=Qi(h);if(!_)return;const x=N.findKey(o,_);(!x||o[x]===void 0||m===!0||m===void 0&&o[x]!==!1)&&(o[x||h]=Qo(f))}const u=(f,h)=>N.forEach(f,(m,_)=>l(m,_,h));if(N.isPlainObject(t)||t instanceof this.constructor)u(t,r);else if(N.isString(t)&&(t=t.trim())&&!rb(t))u(qw(t),r);else if(N.isObject(t)&&N.isSafeIterable(t)){let f=Object.create(null),h,m;for(const _ of t){if(!N.isArray(_))throw new TypeError("Object iterator must return a key-value pair");m=_[0],N.hasOwnProp(f,m)?(h=f[m],f[m]=N.isArray(h)?[...h,_[1]]:[h,_[1]]):f[m]=_[1]}u(f,r)}else t!=null&&l(r,t,i);return this}get(t,r){if(t=Qi(t),t){const i=N.findKey(this,t);if(i){const o=this[i];if(!r)return o;if(r===!0)return Jw(o);if(N.isFunction(r))return r.call(this,o,i);if(N.isRegExp(r))return r.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=Qi(t),t){const i=N.findKey(this,t);return!!(i&&this[i]!==void 0&&(!r||oc(this,this[i],i,r)))}return!1}delete(t,r){const i=this;let o=!1;function l(u){if(u=Qi(u),u){const f=N.findKey(i,u);f&&(!r||oc(i,i[f],f,r))&&(delete i[f],o=!0)}}return N.isArray(t)?t.forEach(l):l(t),o}clear(t){const r=Object.keys(this);let i=r.length,o=!1;for(;i--;){const l=r[i];(!t||oc(this,this[l],l,t,!0))&&(delete this[l],o=!0)}return o}normalize(t){const r=this,i={};return N.forEach(this,(o,l)=>{const u=N.findKey(i,l);if(u){r[u]=Qo(o),delete r[l];return}const f=t?ib(l):String(l).trim();f!==l&&delete r[l],r[f]=Qo(o),i[f]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return N.forEach(this,(i,o)=>{i!=null&&i!==!1&&(r[o]=t&&N.isArray(i)?i.join(", "):i)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}getSetCookie(){const t=this.get("set-cookie");return N.isArray(t)?t:t==null||t===!1?[]:[t]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static parseParameters(t){return nb(t)}static concat(t,...r){const i=new this(t);return r.forEach(o=>i.set(o)),i}static accessor(t){const i=(this[tp]=this[tp]={accessors:{}}).accessors,o=this.prototype;function l(u){const f=Qi(u);i[f]||(sb(o,u),i[f]=!0)}return N.isArray(t)?t.forEach(l):l(t),this}};nt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);N.reduceDescriptors(nt.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(i){this[r]=i}}});N.freezeMethods(nt);const Pa="[REDACTED ****]";function ob(e){if(N.hasOwnProp(e,"toJSON"))return!0;let t=Object.getPrototypeOf(e);for(;t&&t!==Object.prototype;){if(N.hasOwnProp(t,"toJSON"))return!0;t=Object.getPrototypeOf(t)}return!1}function ab(e,t){const r=new Set(t.map(l=>String(l).toLowerCase())),i=[],o=l=>{if(l===null||typeof l!="object"||N.isBuffer(l))return l;if(i.indexOf(l)!==-1)return;l instanceof nt&&(l=l.toJSON()),i.push(l);let u;if(N.isArray(l))u=[],l.forEach((f,h)=>{const m=o(f);N.isUndefined(m)||(u[h]=m)});else{if(!N.isPlainObject(l)&&ob(l))return i.pop(),l;u=Object.create(null);for(const[f,h]of Object.entries(l)){const m=r.has(f.toLowerCase())?Pa:o(h);N.isUndefined(m)||(u[f]=m)}}return i.pop(),u};return o(e)}function np(e){try{return String(e)}catch{return""}}function lb(e){return e.errors.map(r=>{try{return r&&r.message?np(r.message):np(r)}catch{return""}}).filter(Boolean).join("; ")||e.name||"AggregateError"}let H=class uv extends Error{static from(t,r,i,o,l,u){let f=t.message;!f&&N.isArray(t.errors)&&t.errors.length&&(f=lb(t));const h=new uv(f,r||t.code,i,o,l);return Object.defineProperty(h,"cause",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),h.name=t.name,t.status!=null&&h.status==null&&(h.status=t.status),u&&Object.assign(h,u),h}constructor(t,r,i,o,l){super(t),Object.defineProperty(this,"message",{__proto__:null,value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,r&&(this.code=r),i&&(this.config=i),o&&(this.request=o),l&&(this.response=l,this.status=l.status)}toJSON(){const t=this.config,r=t&&N.hasOwnProp(t,"redact")?t.redact:void 0,i=N.isArray(r)&&r.length>0?ab(t,r):N.toJSONObject(t);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};H.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";H.ERR_BAD_OPTION="ERR_BAD_OPTION";H.ECONNABORTED="ECONNABORTED";H.ETIMEDOUT="ETIMEDOUT";H.ECONNREFUSED="ECONNREFUSED";H.ERR_NETWORK="ERR_NETWORK";H.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";H.ERR_DEPRECATED="ERR_DEPRECATED";H.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";H.ERR_BAD_REQUEST="ERR_BAD_REQUEST";H.ERR_CANCELED="ERR_CANCELED";H.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";H.ERR_INVALID_URL="ERR_INVALID_URL";H.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const cb=null,dv=100;function du(e){return N.isPlainObject(e)||N.isArray(e)}function fv(e){return N.endsWith(e,"[]")?e.slice(0,-2):e}function ac(e,t,r){return e?e.concat(t).map(function(o,l){return o=fv(o),!r&&l?"["+o+"]":o}).join(r?".":""):t}function ub(e){return N.isArray(e)&&!e.some(du)}const db=N.toFlatObject(N,{},null,function(t){return/^is[A-Z]/.test(t)});function Qa(e,t,r){if(!N.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const i=(g,w)=>{const j=N.getSafeProp(r,g);return N.isUndefined(j)?w:j},o=i("metaTokens",!0),l=i("visitor")||E,u=i("dots",!1),f=i("indexes",!1),h=i("Blob")||typeof Blob<"u"&&Blob,m=i("maxDepth",dv),_=h&&N.isSpecCompliantForm(t),x=[];if(!N.isFunction(l))throw new TypeError("visitor must be a function");function b(g){if(g===null)return"";if(N.isDate(g))return g.toISOString();if(N.isBoolean(g))return g.toString();if(!_&&N.isBlob(g))throw new H("Blob is not supported. Use a Buffer instead.");if(N.isArrayBuffer(g)||N.isTypedArray(g)){if(_&&typeof h=="function")return new h([g]);throw new H("Blob is not supported. Use a Buffer instead.",H.ERR_NOT_SUPPORT)}return g}function C(g){if(g>m)throw new H("Object is too deeply nested ("+g+" levels). Max depth: "+m,H.ERR_FORM_DATA_DEPTH_EXCEEDED)}function S(g,w){if(m===1/0)return JSON.stringify(g);const j=[];return JSON.stringify(g,function(D,B){if(!N.isObject(B))return B;for(;j.length&&j[j.length-1]!==this;)j.pop();return j.push(B),C(w+j.length-1),B})}function E(g,w,j){let z=g;if(N.isReactNative(t)&&N.isReactNativeBlob(g))return t.append(ac(j,w,u),b(g)),!1;if(g&&!j&&typeof g=="object"){if(N.endsWith(w,"{}"))w=o?w:w.slice(0,-2),g=S(g,1);else if(N.isArray(g)&&ub(g)||(N.isFileList(g)||N.endsWith(w,"[]"))&&(z=N.toArray(g)))return w=fv(w),z.forEach(function(B,A){!(N.isUndefined(B)||B===null)&&t.append(f===!0?ac([w],A,u):f===null?w:w+"[]",b(B))}),!1}return du(g)?!0:(t.append(ac(j,w,u),b(g)),!1)}const R=Object.assign(db,{defaultVisitor:E,convertValue:b,isVisitable:du});function y(g,w,j=0){if(!N.isUndefined(g)){if(C(j),x.indexOf(g)!==-1)throw new Error("Circular reference detected in "+w.join("."));x.push(g),N.forEach(g,function(D,B){(!(N.isUndefined(D)||D===null)&&l.call(t,D,N.isString(B)?B.trim():B,w,R))===!0&&y(D,w?w.concat(B):[B],j+1)}),x.pop()}}if(!N.isObject(e))throw new TypeError("data must be an object");return y(e),t}function rp(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(i){return t[i]})}function pd(e,t){this._pairs=[],e&&Qa(e,this,t)}const hv=pd.prototype;hv.append=function(t,r){this._pairs.push([t,r])};hv.toString=function(t){const r=t?i=>t.call(this,i,rp):rp;return this._pairs.map(function(o){return r(o[0])+"="+r(o[1])},"").join("&")};function fb(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function pv(e,t,r){if(!t)return e;e=e||"";const i=N.isFunction(r)?{serialize:r}:r,o=N.getSafeProp(i,"encode")||fb,l=N.getSafeProp(i,"serialize");let u;if(l?u=l(t,i):u=N.isURLSearchParams(t)?t.toString():new pd(t,i).toString(o),u){const f=e.indexOf("#");f!==-1&&(e=e.slice(0,f)),e+=(e.indexOf("?")===-1?"?":"&")+u}return e}const Xi=Symbol("internals");function mv(e){return e?e.length:0}function ip(e){if(e)for(;e.length&&e[e.length-1]===null;)e.pop()}function Ji(e,t){const r=e.handlers,i=mv(r);r!==t.handlersRef?(t.handlersRef=r,t.handlerEntries.clear()):i!==t.handlersLength&&(i?t.handlerEntries.forEach(function(l,u){r[l.index]!==l.handler&&t.handlerEntries.delete(u)}):t.handlerEntries.clear()),t.handlersLength=i}class sp{constructor(){this.handlers=[],this[Xi]={handlersRef:this.handlers,handlersLength:this.handlers.length,handlerEntries:new Map,iterationDepth:0,nextId:0}}use(t,r,i){const o={fulfilled:t,rejected:r,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null},l=this[Xi];this.handlers==null&&(this.handlers=[]),Ji(this,l);const u=l.nextId++;return this.handlers.push(o),l.handlerEntries.set(u,{handler:o,index:this.handlers.length-1}),l.handlersLength=this.handlers.length,u}eject(t){const r=this[Xi];Ji(this,r);const i=r.handlerEntries.get(t);if(i){if(r.handlerEntries.delete(t),this.handlers[i.index]!==i.handler)return;this.handlers[i.index]=null,r.iterationDepth||(ip(this.handlers),r.handlersLength=this.handlers.length)}}clear(){this.handlers&&(this.handlers=[],Ji(this,this[Xi]))}forEach(t){const r=this[Xi];Ji(this,r),r.iterationDepth++;try{N.forEach(this.handlers,function(o){o!==null&&t(o)})}finally{--r.iterationDepth||(Ji(this,r),ip(this.handlers),r.handlersLength=mv(this.handlers))}}}const md={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},hb=typeof URLSearchParams<"u"?URLSearchParams:pd,pb=typeof FormData<"u"?FormData:null,mb=typeof Blob<"u"?Blob:null,gb={isBrowser:!0,classes:{URLSearchParams:hb,FormData:pb,Blob:mb},protocols:["http","https","file","blob","url","data"]},gd=typeof window<"u"&&typeof document<"u",fu=typeof navigator=="object"&&navigator||void 0,vb=gd&&(!fu||["ReactNative","NativeScript","NS"].indexOf(fu.product)<0),yb=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",xb=gd&&window.location.href||"http://localhost",_b=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:gd,hasStandardBrowserEnv:vb,hasStandardBrowserWebWorkerEnv:yb,navigator:fu,origin:xb},Symbol.toStringTag,{value:"Module"})),Ze={..._b,...gb};function wb(e,t){return Qa(e,new Ze.classes.URLSearchParams,{visitor:function(r,i,o,l){return Ze.isNode&&N.isBuffer(r)?(this.append(i,r.toString("base64")),!1):l.defaultVisitor.apply(this,arguments)},...t})}const op=dv;function gv(e){if(e>op)throw new H("FormData field is too deeply nested ("+e+" levels). Max depth: "+op,H.ERR_FORM_DATA_DEPTH_EXCEEDED)}function bb(e){const t=[],r=/[^.[\]]+|\[([^.[\]]*)]/g;let i;for(;(i=r.exec(e))!==null;)gv(t.length),t.push(i[0]==="[]"?"":i[1]||i[0]);return t}function kb(e){const t={},r=Object.keys(e);let i;const o=r.length;let l;for(i=0;i<o;i++)l=r[i],t[l]=e[l];return t}function vv(e){function t(r,i,o,l){gv(l);let u=r[l++];if(u==="__proto__")return!0;const f=Number.isFinite(+u),h=l>=r.length;return u=!u&&N.isArray(o)?o.length:u,h?(N.hasOwnProp(o,u)?o[u]=N.isArray(o[u])?o[u].concat(i):[o[u],i]:o[u]=i,!f):((!N.hasOwnProp(o,u)||!N.isObject(o[u]))&&(o[u]=[]),t(r,i,o[u],l)&&N.isArray(o[u])&&(o[u]=kb(o[u])),!f)}if(N.isFormData(e)&&N.isFunction(e.entries)){const r={};return N.forEachEntry(e,(i,o)=>{t(bb(i),o,r,0)}),r}return null}const yv=Object.freeze(["get","delete","head","options","post","put","patch","purge","link","unlink","query"]),Zr=(e,t)=>e!=null&&N.hasOwnProp(e,t)?e[t]:void 0;function Sb(e,t,r){if(N.isString(e))try{return(t||JSON.parse)(e),N.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(r||JSON.stringify)(e)}const Vs={transitional:md,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const i=r.getContentType()||"",o=i.indexOf("application/json")>-1,l=N.isObject(t);if(l&&N.isHTMLForm(t)&&(t=new FormData(t)),N.isFormData(t))return o?JSON.stringify(vv(t)):t;if(N.isArrayBuffer(t)||N.isBuffer(t)||N.isStream(t)||N.isFile(t)||N.isBlob(t)||N.isReadableStream(t))return t;if(N.isArrayBufferView(t))return t.buffer;if(N.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let f;if(l){const h=Zr(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return wb(t,h).toString();if((f=N.isFileList(t))||i.indexOf("multipart/form-data")>-1){const m=Zr(this,"env"),_=m&&m.FormData;return Qa(f?{"files[]":t}:t,_&&new _,h)}}return l||o?(r.setContentType("application/json",!1),Sb(t)):t}],transformResponse:[function(t){const r=Zr(this,"transitional")||Vs.transitional,i=r&&r.forcedJSONParsing,o=Zr(this,"responseType"),l=o==="json";if(N.isResponse(t)||N.isReadableStream(t))return t;if(t&&N.isString(t)&&(i&&!o||l)){const f=!(r&&r.silentJSONParsing)&&l;try{return JSON.parse(t,Zr(this,"parseReviver"))}catch(h){if(f)throw h.name==="SyntaxError"?H.from(h,H.ERR_BAD_RESPONSE,this,null,Zr(this,"response")):h}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ze.classes.FormData,Blob:Ze.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};N.forEach(yv,e=>{Vs.headers[e]={}});function lc(e,t){const r=this||Vs,i=t||r,o=nt.from(i.headers);let l=i.data;return N.forEach(e,function(f){l=f.call(r,l,o.normalize(),t?t.status:void 0)}),o.normalize(),l}function xv(e){return!!(e&&e.__CANCEL__)}let qs=class extends H{constructor(t,r,i){super(t??"canceled",H.ERR_CANCELED,r,i),this.name="CanceledError",this.__CANCEL__=!0}};function _v(e,t,r){const i=r.config.validateStatus;!r.status||!i||i(r.status)?e(r):t(new H("Request failed with status code "+r.status,r.status>=400&&r.status<500?H.ERR_BAD_REQUEST:H.ERR_BAD_RESPONSE,r.config,r.request,r))}const jb=/[\t\n\r]/g;function wv(e){if(typeof e!="string")return e;let t=0;for(;t<e.length&&e.charCodeAt(t)<=32;)t++;return e.slice(t).replace(jb,"")}function cc(e){const t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return t&&t[1]||""}function Pb(e,t){e=e||10;const r=new Array(e),i=new Array(e);let o=0,l=0,u;return t=t!==void 0?t:1e3,function(h){const m=Date.now(),_=i[l];u||(u=m),r[o]=h,i[o]=m;let x=l,b=0;for(;x!==o;)b+=r[x++],x=x%e;if(o=(o+1)%e,o===l&&(l=(l+1)%e),m-u<t)return;const C=_&&m-_;return C?Math.round(b*1e3/C):void 0}}function Nb(e,t){let r=0,i=1e3/t,o,l;const u=(_,x=Date.now())=>{r=x,o=null,l&&(clearTimeout(l),l=null),e(..._)};return[(..._)=>{const x=Date.now(),b=x-r;b>=i?u(_,x):(o=_,l||(l=setTimeout(()=>{l=null,u(o)},i-b)))},()=>o&&u(o),(..._)=>u(_)]}const Na=(e,t,r=3)=>{let i=0;const o=Pb(50,250);return Nb(l=>{if(!l||!N.isNumber(l.loaded))return;const u=l.loaded,f=l.lengthComputable?l.total:void 0,h=Math.max(0,f!=null?Math.min(u,f):u),m=Math.max(0,h-i),_=o(m);i=Math.max(i,h);const x={loaded:h,total:f,progress:f?h/f:void 0,bytes:m,rate:_||void 0,estimated:_&&f?(f-h)/_:void 0,event:l,lengthComputable:f!=null,[t?"download":"upload"]:!0};e(x)},r)},ap=(e,t)=>{const r=e!=null;return[i=>t[0]({lengthComputable:r,total:e,loaded:i}),t[1]]},lp=(e,t=N.asap)=>(...r)=>t(()=>e(...r)),Cb=Ze.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,Ze.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(Ze.origin),Ze.navigator&&/(msie|trident)/i.test(Ze.navigator.userAgent)):()=>!0,Eb=Ze.hasStandardBrowserEnv?{write(e,t,r,i,o,l,u){if(typeof document>"u")return;const f=[`${e}=${encodeURIComponent(t)}`];N.isNumber(r)&&f.push(`expires=${new Date(r).toUTCString()}`),N.isString(i)&&f.push(`path=${i}`),N.isString(o)&&f.push(`domain=${o}`),l===!0&&f.push("secure"),N.isString(u)&&f.push(`SameSite=${u}`),document.cookie=f.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.split(";");for(let r=0;r<t.length;r++){const i=t[r].replace(/^\s+/,""),o=i.indexOf("=");if(o!==-1&&i.slice(0,o)===e)try{return decodeURIComponent(i.slice(o+1))}catch{return i.slice(o+1)}}return null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Lb(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function zb(e,t){if(!t)return e;let r=e.length;for(;r>0&&e.charCodeAt(r-1)===47;)r--;return e.slice(0,r)+"/"+t.replace(/^\/+/,"")}const Tb=/^https?:(?!\/\/)/i;function Ob(e){return e&&e.replace(/(^|&)([^=&]*=)?[^&]+/g,(t,r,i="")=>`${r}${i}${Pa}`)}function Rb(e){const t=e.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${Pa}@`),r=t.indexOf("#"),o=(r===-1?t:t.slice(0,r)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${Pa}`);return r===-1?o:`${o}#${Ob(t.slice(r+1))}`}function cp(e,t){if(typeof e=="string"){const r=wv(e);if(Tb.test(r))throw new H(`Invalid URL ${JSON.stringify(Rb(r))}: missing "//" after protocol`,H.ERR_INVALID_URL,t)}}function bv(e,t,r,i){cp(t,i);let o=!Lb(t);return e&&(o||r===!1)?(cp(e,i),zb(e,t)):t}const up=e=>e instanceof nt?{...e}:e,Mb=e=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(e).concat(Object.getOwnPropertySymbols(e).filter(t=>Object.getOwnPropertyDescriptor(e,t).enumerable)):Object.keys(e);function kr(e,t){e=e||{},t=t||{};const r=Object.create(null);Object.defineProperty(r,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(_,x,b,C){return N.isPlainObject(_)&&N.isPlainObject(x)?N.merge.call({caseless:C},_,x):N.isPlainObject(x)?N.merge({},x):N.isArray(x)?x.slice():x}function o(_,x,b,C){if(N.isUndefined(x)){if(!N.isUndefined(_))return i(void 0,_,b,C)}else return i(_,x,b,C)}function l(_,x){if(!N.isUndefined(x))return i(void 0,x)}function u(_,x){if(N.isUndefined(x)){if(!N.isUndefined(_))return i(void 0,_)}else return i(void 0,x)}function f(_){const x=N.hasOwnProp(t,"transitional")?t.transitional:void 0;if(!N.isUndefined(x))if(N.isPlainObject(x)){if(N.hasOwnProp(x,_))return x[_]}else return;const b=N.hasOwnProp(e,"transitional")?e.transitional:void 0;if(N.isPlainObject(b)&&N.hasOwnProp(b,_))return b[_]}function h(_,x,b){if(N.hasOwnProp(t,b))return i(_,x);if(N.hasOwnProp(e,b))return i(void 0,_)}const m={url:l,method:l,data:l,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutErrorMessage:u,withCredentials:u,withXSRFToken:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,allowedSocketPaths:u,responseEncoding:u,validateStatus:h,headers:(_,x,b)=>o(up(_),up(x),b,!0)};return N.forEach(Mb({...e,...t}),function(x){if(x==="__proto__"||x==="constructor"||x==="prototype")return;const b=N.hasOwnProp(m,x)?m[x]:o,C=N.hasOwnProp(e,x)?e[x]:void 0,S=N.hasOwnProp(t,x)?t[x]:void 0,E=b(C,S,x);N.isUndefined(E)&&b!==h||(r[x]=E)}),N.hasOwnProp(t,"validateStatus")&&N.isUndefined(t.validateStatus)&&f("validateStatusUndefinedResolves")===!1&&(N.hasOwnProp(e,"validateStatus")?r.validateStatus=i(void 0,e.validateStatus):delete r.validateStatus),r}const Ab=["content-type","content-length"];function Ib(e,t,r){if(r!=="content-only"){e.set(t);return}Object.entries(t||{}).forEach(([i,o])=>{Ab.includes(i.toLowerCase())&&e.set(i,o)})}const Db=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(t,r)=>String.fromCharCode(parseInt(r,16)));function kv(e){const t=kr({},e),r=b=>N.hasOwnProp(t,b)?t[b]:void 0,i=r("data");let o=r("withXSRFToken");const l=r("xsrfHeaderName"),u=r("xsrfCookieName");let f=r("headers");const h=r("auth"),m=r("baseURL"),_=r("allowAbsoluteUrls"),x=r("url");if(t.headers=f=nt.from(f),t.url=pv(bv(m,x,_,t),r("params"),r("paramsSerializer")),h){const b=N.getSafeProp(h,"username")||"",C=N.getSafeProp(h,"password")||"";try{f.set("Authorization","Basic "+btoa(b+":"+(C?Db(C):"")))}catch(S){throw H.from(S,H.ERR_BAD_OPTION_VALUE,e)}}if(N.isFormData(i)){const b=N.getSafeProp(i,"getHeaders");Ze.hasStandardBrowserEnv||Ze.hasStandardBrowserWebWorkerEnv||N.isReactNative(i)?f.setContentType(void 0):N.isFunction(b)&&Ib(f,b.call(i),r("formDataHeaderPolicy"))}if(Ze.hasStandardBrowserEnv&&(N.isFunction(o)&&(o=o(t)),o===!0||o==null&&Cb(t.url))){const C=l&&u&&Eb.read(u);C&&f.set(l,C)}return t}const Bb=typeof XMLHttpRequest<"u",Fb=Bb&&function(e){return new Promise(function(r,i){const o=kv(e);let l=o.data;const u=nt.from(o.headers).normalize();let{responseType:f,onUploadProgress:h,onDownloadProgress:m}=o,_,x,b,C,S,E;function R(){C&&C(),S&&S(),o.cancelToken&&o.cancelToken.unsubscribe(_),o.signal&&o.signal.removeEventListener("abort",_)}let y=new XMLHttpRequest;y.open(o.method.toUpperCase(),o.url,!0),y.timeout=o.timeout;function g(j){if(!y)return;if(y.status===0&&(cc(wv(o.url))||cc(Ze.origin))!=="file"&&!(y.responseURL&&y.responseURL.startsWith("file:"))){i(new H("Request aborted",H.ECONNABORTED,e,y)),R(),y=null;return}try{j?E&&E(j):S&&S()}catch(A){setTimeout(()=>{throw A})}if(!y)return;const z=nt.from("getAllResponseHeaders"in y&&y.getAllResponseHeaders()),B={data:!f||f==="text"||f==="json"?y.responseText:y.response,status:y.status,statusText:y.statusText,headers:z,config:e,request:y};_v(function(ee){r(ee),R()},function(ee){i(ee),R()},B),y=null}"onloadend"in y?y.onloadend=g:y.onreadystatechange=function(){!y||y.readyState!==4||y.status===0&&!(y.responseURL&&y.responseURL.startsWith("file:"))||setTimeout(g)},y.onabort=function(){y&&(i(new H("Request aborted",H.ECONNABORTED,e,y)),R(),y=null)},y.onerror=function(z){const D=z&&z.message?z.message:"Network Error",B=new H(D,H.ERR_NETWORK,e,y);B.event=z||null,i(B),R(),y=null},y.ontimeout=function(){let z=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const D=o.transitional||md;o.timeoutErrorMessage&&(z=o.timeoutErrorMessage),i(new H(z,D.clarifyTimeoutError?H.ETIMEDOUT:H.ECONNABORTED,e,y)),R(),y=null},l===void 0&&u.setContentType(null),"setRequestHeader"in y&&N.forEach(cv(u),function(z,D){y.setRequestHeader(D,z)}),N.isUndefined(o.withCredentials)||(y.withCredentials=!!o.withCredentials),f&&f!=="json"&&(y.responseType=o.responseType),m&&([b,S,E]=Na(m,!0),y.addEventListener("progress",b)),h&&y.upload&&([x,C]=Na(h),y.upload.addEventListener("progress",x),y.upload.addEventListener("loadend",C)),(o.cancelToken||o.signal)&&(_=j=>{y&&(i(!j||j.type?new qs(null,e,y):j),y.abort(),R(),y=null)},o.cancelToken&&o.cancelToken.subscribe(_),o.signal&&(o.signal.aborted?_():o.signal.addEventListener("abort",_)));const w=cc(o.url);if(w&&!Ze.protocols.includes(w)){i(new H("Unsupported protocol "+w+":",H.ERR_BAD_REQUEST,e)),R();return}y.send(l||null)})},Ub=(e,t)=>{if(e=e?e.filter(Boolean):[],!t&&!e.length)return;const r=new AbortController;let i=!1;const o=function(h){if(!i){i=!0,u();const m=h instanceof Error?h:this.reason;r.abort(m instanceof H?m:new qs(m instanceof Error?m.message:m))}};let l=t&&setTimeout(()=>{l=null,o(new H(`timeout of ${t}ms exceeded`,H.ETIMEDOUT))},t);const u=()=>{e&&(l&&clearTimeout(l),l=null,e.forEach(h=>{h.unsubscribe?h.unsubscribe(o):h.removeEventListener("abort",o)}),e=null)};e.forEach(h=>{if(!i){if(h.aborted){o.call(h);return}h.addEventListener("abort",o,{once:!0})}});const{signal:f}=r;return f.unsubscribe=()=>N.asap(u),f},Hb=function*(e,t){let r=e.byteLength;if(r<t){yield e;return}let i=0,o;for(;i<r;)o=i+t,yield e.slice(i,o),i=o},Zb=async function*(e,t){for await(const r of Wb(e))yield*Hb(r,t)},Wb=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:r,value:i}=await t.read();if(r)break;yield i}}finally{await t.cancel()}},dp=(e,t,r,i)=>{const o=Zb(e,t);let l=0,u,f=h=>{u||(u=!0,i&&i(h))};return new ReadableStream({async pull(h){try{const{done:m,value:_}=await o.next();if(m){f(),h.close();return}let x=_.byteLength;if(r){let b=l+=x;r(b)}h.enqueue(new Uint8Array(_))}catch(m){throw f(m),m}},cancel(h){return f(h),o.return()}},{highWaterMark:2})},fp=e=>e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102,Sv=(e,t,r)=>t+2<r&&fp(e.charCodeAt(t+1))&&fp(e.charCodeAt(t+2)),hp=e=>e<=57?e-48:(e&223)-55,$b=e=>e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e===43||e===47||e===45||e===95,Vb=e=>e===9||e===10||e===12||e===13||e===32,qb=e=>{const t=Math.floor(e/4),r=e%4;return t*3+(r===2?1:r===3?2:0)},Gb=e=>{const t=e.length;let r=0;return t>0&&e.charCodeAt(t-1)===61&&(r++,t>1&&e.charCodeAt(t-2)===61&&r++),Math.floor((t-r)*3/4)},Kb=e=>{const t=e.length;let r=0,i=0,o=!1;for(let l=0;l<t;l++){let u=e.charCodeAt(l);if(u===37&&Sv(e,l,t)&&(u=hp(e.charCodeAt(l+1))*16+hp(e.charCodeAt(l+2)),l+=2),!Vb(u)){if(u===61){i++;continue}if(!$b(u)||i>0){o=!0;continue}r++}}return o||i>2||i>0&&(r+i)%4!==0||r%4===1?Gb(e):qb(r)},Yb=(e,t)=>{if(!e||typeof e!="string"||!e.startsWith("data:"))return 0;const r=e.indexOf(",");if(r<0)return 0;const i=e.slice(5,r),o=e.slice(r+1);if(/;base64/i.test(i))return t(o);let u=0;for(let f=0,h=o.length;f<h;f++){const m=o.charCodeAt(f);if(m===37&&Sv(o,f,h))u+=1,f+=2;else if(m<128)u+=1;else if(m<2048)u+=2;else if(m>=55296&&m<=56319&&f+1<h){const _=o.charCodeAt(f+1);_>=56320&&_<=57343?(u+=4,f++):u+=3}else u+=3}return u};function Qb(e){const t=typeof e=="string"?e.indexOf("#"):-1;return Yb(t===-1?e:e.slice(0,t),Kb)}const vd="1.20.0",pp=64*1024,Xb={cache:"default",redirect:"follow",referrer:"about:client",referrerPolicy:"",mode:"cors",integrity:"",keepalive:!1,priority:"auto",window:null},{isFunction:Ao}=N,Jb=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(t,r)=>String.fromCharCode(parseInt(r,16))),mp=e=>{if(!N.isString(e))return e;try{return decodeURIComponent(e)}catch{return e}},gp=(e,...t)=>{try{return!!e(...t)}catch{return!1}},e2=e=>{const t=e.indexOf("://");let r=e;return t!==-1&&(r=r.slice(t+3)),r.includes("@")||r.includes(":")},t2=e=>{const t=N.global!==void 0&&N.global!==null?N.global:globalThis,{ReadableStream:r,TextEncoder:i}=t;e=N.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},e);const{fetch:o,Request:l,Response:u}=e,f=o?Ao(o):typeof fetch=="function",h=Ao(l),m=Ao(u);if(!f)return!1;const _=f&&Ao(r),x=f&&(typeof i=="function"?(y=>g=>y.encode(g))(new i):async y=>new Uint8Array(await new l(y).arrayBuffer())),b=h&&_&&gp(()=>{let y=!1;const g=new l(Ze.origin,{body:new r,method:"POST",get duplex(){return y=!0,"half"}}),w=g.headers.has("Content-Type");return g.body!=null&&g.body.cancel(),y&&!w}),C=m&&_&&gp(()=>N.isReadableStream(new u("").body)),S={stream:C&&(y=>y.body)};f&&["text","arrayBuffer","blob","formData","stream"].forEach(y=>{!S[y]&&(S[y]=(g,w)=>{let j=g&&g[y];if(j)return j.call(g);throw new H(`Response type '${y}' is not supported`,H.ERR_NOT_SUPPORT,w)})});const E=async y=>{if(y==null)return 0;if(N.isBlob(y))return y.size;if(N.isSpecCompliantForm(y))return(await new l(Ze.origin,{method:"POST",body:y}).arrayBuffer()).byteLength;if(N.isArrayBufferView(y)||N.isArrayBuffer(y))return y.byteLength;if(N.isURLSearchParams(y)&&(y=y+""),N.isString(y))return(await x(y)).byteLength},R=async(y,g)=>{const w=N.toFiniteNumber(y.getContentLength());return w??E(g)};return async y=>{let{url:g,method:w,data:j,signal:z,cancelToken:D,timeout:B,onDownloadProgress:A,onUploadProgress:ee,responseType:K,headers:oe,withCredentials:xe="same-origin",fetchOptions:yt,maxContentLength:_e,maxBodyLength:V,maxRedirects:pe}=kv(y);const Se=N.isNumber(_e)&&_e>-1,M=N.isNumber(V)&&V>-1,Y=re=>N.hasOwnProp(y,re)?y[re]:void 0;let U=o||fetch;K=K?(K+"").toLowerCase():"text";let q=Ub([z,D&&D.toAbortSignal()],B),Q=null;const ge=q&&q.unsubscribe&&(()=>{q.unsubscribe()});let ue,ae=null;const ne=()=>new H("Request body larger than maxBodyLength limit",H.ERR_BAD_REQUEST,y,Q);try{let re;const ze=Y("auth");if(ze){const J=N.getSafeProp(ze,"username")||"",Fe=N.getSafeProp(ze,"password")||"";re={username:J,password:Fe}}if(e2(g)){const J=new URL(g,Ze.origin);if(!re&&(J.username||J.password)){const Fe=mp(J.username),Ft=mp(J.password);re={username:Fe,password:Ft}}(J.username||J.password)&&(J.username="",J.password="",g=J.href)}if(re&&(oe.delete("authorization"),oe.set("Authorization","Basic "+btoa(Jb((re.username||"")+":"+(re.password||""))))),Se&&typeof g=="string"&&g.startsWith("data:")&&Qb(g)>_e)throw new H("maxContentLength size of "+_e+" exceeded",H.ERR_BAD_RESPONSE,y,Q);if(M&&w!=="get"&&w!=="head"){const J=await E(j);if(typeof J=="number"&&isFinite(J)&&(ue=J,J>V))throw ne()}const er=M&&(N.isReadableStream(j)||N.isStream(j)),zr=(J,Fe,Ft)=>dp(J,pp,Ut=>{if(M&&Ut>V)throw ae=ne();Fe&&Fe(Ut)},Ft);if(b&&w!=="get"&&w!=="head"&&(ee||er)){if(ue=ue??await R(oe,j),ue!==0||er){let J=new l(g,{method:"POST",body:j,duplex:"half"}),Fe;if(N.isFormData(j)&&(Fe=J.headers.get("content-type"))&&oe.setContentType(Fe),J.body){const[Ft,Ut]=ee&&ap(ue,Na(lp(ee)))||[];j=zr(J.body,Ft,Ut)}}}else if(er&&!h&&_&&w!=="get"&&w!=="head")j=zr(j);else if(er&&h&&!b&&w!=="get"&&w!=="head")throw new H("Stream request bodies are not supported by the current fetch implementation",H.ERR_NOT_SUPPORT,y,Q);N.isString(xe)||(xe=xe?"include":"omit");const Ni=h&&"credentials"in l.prototype;if(N.isFormData(j)){const J=oe.getContentType();J&&/^multipart\/form-data/i.test(J)&&!/boundary=/i.test(J)&&oe.delete("content-type")}oe.set("User-Agent","axios/"+vd,!1);const $e=yt==null?yt:Object.assign(Object.create(null),yt);$e&&(delete $e.body,delete $e.headers,delete $e.method,delete $e.signal,delete $e.duplex,delete $e.credentials);const xt=Object.assign(Object.create(null),$e,{signal:q,method:w.toUpperCase(),headers:cv(oe.normalize()),body:j,duplex:"half",credentials:Ni?xe:void 0});h&&(N.forEach(Xb,(J,Fe)=>{xt[Fe]===void 0&&(xt[Fe]=J)}),xt.signal===void 0&&(xt.signal=null),xt.body===void 0&&(xt.body=null)),pe===0&&(xt.redirect="manual",$e&&($e.redirect="manual")),Q=h&&new l(g,xt);let Bt=await(h?U(Q,$e):U(g,xt));const Ci=nt.from(Bt.headers);if(Se){const J=N.toFiniteNumber(Ci.getContentLength());if(J!=null&&J>_e)throw new H("maxContentLength size of "+_e+" exceeded",H.ERR_BAD_RESPONSE,y,Q)}const Tr=C&&(K==="stream"||K==="response");if(C&&Bt.body&&(A||Se||Tr&&ge)){const J={};["status","statusText","headers"].forEach(tr=>{J[tr]=Bt[tr]});const Fe=N.toFiniteNumber(Ci.getContentLength()),[Ft,Ut]=A&&ap(Fe,Na(lp(A),!0))||[];let Ei=0;const Js=tr=>{if(Se&&(Ei=tr,Ei>_e))throw new H("maxContentLength size of "+_e+" exceeded",H.ERR_BAD_RESPONSE,y,Q);Ft&&Ft(tr)};Bt=new u(dp(Bt.body,pp,Js,()=>{Ut&&Ut(),ge&&ge()}),J)}K=K||"text";let _t=await S[N.findKey(S,K)||"text"](Bt,y);if(Se&&!C&&!Tr){let J;if(_t!=null&&(typeof _t.byteLength=="number"?J=_t.byteLength:typeof _t.size=="number"?J=_t.size:typeof _t=="string"&&(J=typeof i=="function"?new i().encode(_t).byteLength:_t.length)),typeof J=="number"&&J>_e)throw new H("maxContentLength size of "+_e+" exceeded",H.ERR_BAD_RESPONSE,y,Q)}return!Tr&&ge&&ge(),await new Promise((J,Fe)=>{_v(J,Fe,{data:_t,headers:nt.from(Bt.headers),status:Bt.status,statusText:Bt.statusText,config:y,request:Q})})}catch(re){if(ge&&ge(),q&&q.aborted&&q.reason instanceof H){const ze=q.reason;throw ze.config=y,Q&&(ze.request=Q),re!==ze&&Object.defineProperty(ze,"cause",{__proto__:null,value:re,writable:!0,enumerable:!1,configurable:!0}),ze}if(ae)throw Q&&!ae.request&&(ae.request=Q),ae;if(re instanceof H)throw Q&&!re.request&&(re.request=Q),re;if(re&&re.name==="TypeError"&&/Load failed|fetch/i.test(re.message)){const ze=new H("Network Error",H.ERR_NETWORK,y,Q,re&&re.response);throw Object.defineProperty(ze,"cause",{__proto__:null,value:re.cause||re,writable:!0,enumerable:!1,configurable:!0}),ze}throw H.from(re,re&&re.code,y,Q,re&&re.response)}}},n2=new Map,jv=e=>{let t=e&&e.env||{};const{fetch:r,Request:i,Response:o}=t,l=[i,o,r];let u=l.length,f=u,h,m,_=n2;for(;f--;)h=l[f],m=_.get(h),m===void 0&&_.set(h,m=f?new Map:t2(t)),_=m;return m};jv();const yd={http:cb,xhr:Fb,fetch:{get:jv}};N.forEach(yd,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(e,"adapterName",{__proto__:null,value:t})}});const vp=e=>`- ${e}`,r2=e=>N.isFunction(e)||e===null||e===!1;function i2(e,t){e=N.isArray(e)?e:[e];const{length:r}=e;let i,o;const l={};for(let u=0;u<r;u++){i=e[u];let f;if(o=i,!r2(i)&&(o=yd[(f=String(i)).toLowerCase()],o===void 0))throw new H(`Unknown adapter '${f}'`);if(o&&(N.isFunction(o)||(o=o.get(t))))break;l[f||"#"+u]=o}if(!o){const u=Object.entries(l).map(([h,m])=>`adapter ${h} `+(m===!1?"is not supported by the environment":"is not available in the build"));let f=r?u.length>1?`since :
`+u.map(vp).join(`
`):" "+vp(u[0]):"as no adapter specified";throw new H("There is no suitable adapter to dispatch the request "+f,H.ERR_NOT_SUPPORT)}return o}const Pv={getAdapter:i2,adapters:yd};function uc(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new qs(null,e)}function dc(e){const t=N.toSafeFlatObject(e);return uc(t),t.headers=nt.from(N.getSafeProp(t,"headers")),t.data=lc.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Pv.getAdapter(t.adapter||Vs.adapter,t)(t).then(function(o){uc(t),t.response=o;try{o.data=lc.call(t,t.transformResponse,o)}finally{delete t.response}return o.headers=nt.from(o.headers),o},function(o){if(!xv(o)&&(uc(t),o&&o.response)){t.response=o.response;try{o.response.data=lc.call(t,t.transformResponse,o.response)}finally{delete t.response}o.response.headers=nt.from(o.response.headers)}return Promise.reject(o)})}const Xa={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Xa[e]=function(i){return typeof i===e||"a"+(t<1?"n ":" ")+e}});const yp={};Xa.transitional=function(t,r,i){function o(l,u){return"[Axios v"+vd+"] Transitional option '"+l+"'"+u+(i?". "+i:"")}return(l,u,f)=>{if(t===!1)throw new H(o(u," has been removed"+(r?" in "+r:"")),H.ERR_DEPRECATED);return r&&!yp[u]&&(yp[u]=!0,console.warn(o(u," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(l,u,f):!0}};Xa.spelling=function(t){return(r,i)=>(console.warn(`${i} is likely a misspelling of ${t}`),!0)};function s2(e,t,r){if(typeof e!="object"||e===null)throw new H("options must be an object",H.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let o=i.length;for(;o-- >0;){const l=i[o],u=Object.prototype.hasOwnProperty.call(t,l)?t[l]:void 0;if(u){const f=e[l],h=f===void 0||u(f,l,e);if(h!==!0)throw new H("option "+l+" must be "+h,H.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new H("Unknown option "+l,H.ERR_BAD_OPTION)}}const Xo={assertOptions:s2,validators:Xa},Je=Xo.validators;let mr=class{constructor(t){this.defaults=t||{},this.interceptors={request:new sp,response:new sp}}async request(t,r){try{return await this._request(t,r)}catch(i){if(i instanceof Error)try{let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const l=o.stack;let u="";if(typeof l=="string"){const f=l.indexOf(`
`);u=f===-1?"":l.slice(f+1)}if(!i.stack)i.stack=u;else if(u){const f=u.indexOf(`
`),h=f===-1?-1:u.indexOf(`
`,f+1),m=h===-1?"":u.slice(h+1);String(i.stack).endsWith(m)||(i.stack+=`
`+u)}}catch{}throw i}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=kr(this.defaults,r);const{transitional:i,paramsSerializer:o,headers:l}=r;i!==void 0&&Xo.assertOptions(i,{silentJSONParsing:Je.transitional(Je.boolean),forcedJSONParsing:Je.transitional(Je.boolean),clarifyTimeoutError:Je.transitional(Je.boolean),legacyInterceptorReqResOrdering:Je.transitional(Je.boolean),advertiseZstdAcceptEncoding:Je.transitional(Je.boolean),validateStatusUndefinedResolves:Je.transitional(Je.boolean)},!1),o!=null&&(N.isFunction(o)?r.paramsSerializer={serialize:o}:Xo.assertOptions(o,{encode:Je.function,serialize:Je.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),Xo.assertOptions(r,{baseUrl:Je.spelling("baseURL"),withXsrfToken:Je.spelling("withXSRFToken")},!0),r.method=(N.getSafeProp(r,"method")||N.getSafeProp(this.defaults,"method")||"get").toLowerCase();let u=l&&N.merge(l.common,l[r.method]);l&&N.forEach(yv.concat("common"),S=>{delete l[S]}),r.headers=nt.concat(u,l);const f=[];let h=!0;this.interceptors.request.forEach(function(E){if(typeof E.runWhen=="function"&&E.runWhen(r)===!1)return;h=h&&E.synchronous;const R=r.transitional||md;R&&R.legacyInterceptorReqResOrdering?f.unshift(E.fulfilled,E.rejected):f.push(E.fulfilled,E.rejected)});const m=[];this.interceptors.response.forEach(function(E){m.push(E.fulfilled,E.rejected)});let _,x=0,b;if(!h){const S=[dc.bind(this),void 0];for(S.unshift(...f),S.push(...m),b=S.length,_=Promise.resolve(r);x<b;)_=_.then(S[x++],S[x++]);return _}b=f.length;let C=r;for(;x<b;){const S=f[x++],E=f[x++];try{C=S?S(C):C}catch(R){if(!E){_=Promise.reject(R);break}try{const y=E.call(this,R);N.isThenable(y)&&(_=Promise.resolve(y).then(()=>dc.call(this,C)))}catch(y){_=Promise.reject(y)}break}}if(!_)try{_=dc.call(this,C)}catch(S){_=Promise.reject(S)}for(x=0,b=m.length;x<b;)_=_.then(m[x++],m[x++]);return _}getUri(t){t=kr(this.defaults,t);const r=bv(t.baseURL,t.url,t.allowAbsoluteUrls,t);return pv(r,t.params,t.paramsSerializer)}};N.forEach(["delete","get","head","options"],function(t){mr.prototype[t]=function(r,i){return this.request(kr(i||{},{method:t,url:r,data:i&&N.hasOwnProp(i,"data")?i.data:void 0}))}});N.forEach(["post","put","patch","query"],function(t){function r(i){return function(l,u,f){return this.request(kr(f||{},{method:t,headers:i?{"Content-Type":"multipart/form-data"}:{},url:l,data:u}))}}mr.prototype[t]=r(),t!=="query"&&(mr.prototype[t+"Form"]=r(!0))});let o2=class Nv{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(l){r=l});const i=this;this.promise.then(o=>{if(!i._listeners)return;let l=i._listeners.length;for(;l-- >0;)i._listeners[l](o);i._listeners=null}),this.promise.then=o=>{let l;const u=new Promise(f=>{i.subscribe(f),l=f}).then(o);return u.cancel=function(){i.unsubscribe(l)},u},t(function(l,u,f){i.reason||(i.reason=new qs(l,u,f),r(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const t=new AbortController,r=i=>{t.abort(i)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new Nv(function(o){t=o}),cancel:t}}};function a2(e){return function(r){return e.apply(null,r)}}function l2(e){return N.isObject(e)&&e.isAxiosError===!0}const Jo={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,ContentTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,UnprocessableContent:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Jo).forEach(([e,t])=>{Jo[t]===void 0&&(Jo[t]=e)});function Cv(e){const t=new mr(e),r=Xg(mr.prototype.request,t);return N.extend(r,mr.prototype,t,{allOwnKeys:!0}),N.extend(r,t,null,{allOwnKeys:!0}),r.create=function(o){return Cv(kr(e,o))},r}const Re=Cv(Vs);Re.Axios=mr;Re.CanceledError=qs;Re.CancelToken=o2;Re.isCancel=xv;Re.VERSION=vd;Re.toFormData=Qa;Re.AxiosError=H;Re.Cancel=Re.CanceledError;Re.all=function(t){return Promise.all(t)};Re.spread=a2;Re.isAxiosError=l2;Re.mergeConfig=kr;Re.AxiosHeaders=nt;Re.formToJSON=e=>vv(N.isHTMLForm(e)?new FormData(e):e);Re.getAdapter=Pv.getAdapter;Re.HttpStatusCode=Jo;Re.default=Re;const{Axios:tS,AxiosError:nS,CanceledError:rS,isCancel:iS,CancelToken:sS,VERSION:oS,all:aS,Cancel:lS,isAxiosError:cS,spread:uS,toFormData:dS,AxiosHeaders:fS,HttpStatusCode:hS,formToJSON:pS,getAdapter:mS,mergeConfig:gS,create:vS}=Re,c2="http://localhost:5000/api",it=Re.create({baseURL:c2,headers:{"Content-Type":"application/json"}});it.interceptors.request.use(e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e));it.interceptors.response.use(e=>e,e=>{if(e.response&&e.response.status===401){const t=window.location.pathname;!t.includes("/login")&&!t.includes("/register")&&t.includes("/admin/login")}return Promise.reject(e)});const Ev="http://localhost:5000",u2=async e=>(await it.post("/auth/register",e)).data,d2=async e=>(await it.post("/auth/login",e)).data,xp=async()=>(await it.get("/auth/me")).data,f2=async e=>(await it.put("/auth/profile",e)).data,Lv=P.createContext(null),h2=({children:e})=>{const[t,r]=P.useState(null),[i,o]=P.useState(localStorage.getItem("token")||null),[l,u]=P.useState(!0);P.useEffect(()=>{(async()=>{if(localStorage.getItem("token"))try{const E=await xp();E.success&&E.user?r(E.user):m()}catch{console.warn("[AuthContext] Session verification failed, logging out."),m()}u(!1)})()},[]);const f=async C=>{const S=await d2(C);return S.success&&S.token&&(localStorage.setItem("token",S.token),o(S.token),r(S.user)),S},h=async C=>{const S=await u2(C);return S.success&&S.token&&(localStorage.setItem("token",S.token),o(S.token),r(S.user)),S},m=()=>{localStorage.removeItem("token"),o(null),r(null)},_=async C=>{const S=await f2(C);return S.success&&S.user&&r(S.user),S},x=async()=>{try{const C=await xp();C.success&&C.user&&r(C.user)}catch(C){console.error(C)}},b={user:t,token:i,loading:l,isAuthenticated:!!i&&!!t,isAdmin:!!t&&t.role==="admin",loginUser:f,registerUser:h,logout:m,updateUser:_,refreshUser:x};return a.jsx(Lv.Provider,{value:b,children:e})},vt=()=>{const e=P.useContext(Lv);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),zv=(...e)=>e.filter((t,r,i)=>!!t&&i.indexOf(t)===r).join(" ");/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var m2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=P.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:i,className:o="",children:l,iconNode:u,...f},h)=>P.createElement("svg",{ref:h,...m2,width:t,height:t,stroke:e,strokeWidth:i?Number(r)*24/Number(t):r,className:zv("lucide",o),...f},[...u.map(([m,_])=>P.createElement(m,_)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=(e,t)=>{const r=P.forwardRef(({className:i,...o},l)=>P.createElement(g2,{ref:l,iconNode:t,className:zv(`lucide-${p2(e)}`,i),...o}));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=$("Ambulance",[["path",{d:"M10 10H6",key:"1bsnug"}],["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14",key:"lrkjwd"}],["path",{d:"M8 8v4",key:"1fwk8c"}],["path",{d:"M9 18h6",key:"x1upvd"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=$("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=$("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=$("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=$("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=$("Bus",[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=$("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=$("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=$("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=$("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=$("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=$("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=$("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=$("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=$("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=$("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=$("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=$("FilePlus",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}],["path",{d:"M12 18v-6",key:"17g6i2"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=$("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=$("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"4oyue0"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=$("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=$("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=$("Hospital",[["path",{d:"M12 6v4",key:"16clxf"}],["path",{d:"M14 14h-4",key:"esezmu"}],["path",{d:"M14 18h-4",key:"16mqa2"}],["path",{d:"M14 8h-4",key:"z8ypaz"}],["path",{d:"M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2",key:"b1k337"}],["path",{d:"M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18",key:"16g51d"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=$("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=$("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=$("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr=$("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=$("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=$("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=$("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=$("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=$("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=$("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=$("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=$("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=$("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=$("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=$("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=$("PhoneCall",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=$("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=$("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=$("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=$("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=$("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=$("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=$("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=$("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=$("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=$("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=$("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=$("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=$("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=$("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=$("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=$("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=$("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=$("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=$("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=$("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=$("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=$("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=$("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ks=$("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),W2=()=>{var m;const{user:e,isAuthenticated:t,isAdmin:r,logout:i}=vt(),[o,l]=P.useState(!1),u=Lr(),f=()=>{i(),l(!1),u("/")},h=({isActive:_})=>`nav-link-item ${_?"active-nav-link":""}`;return a.jsxs(a.Fragment,{children:[a.jsxs("header",{className:"site-navbar",children:[a.jsxs("div",{className:"container nav-container",children:[a.jsxs(te,{to:"/",className:"brand-logo",onClick:()=>l(!1),children:[a.jsx("div",{className:"brand-icon-wrapper",children:a.jsx(It,{className:"brand-icon",size:24})}),a.jsxs("div",{className:"brand-text",children:[a.jsx("span",{className:"brand-name",children:"AEGIS"}),a.jsx("span",{className:"brand-tag",children:"WOMEN SAFETY"})]})]}),a.jsxs("nav",{className:"desktop-nav",children:[a.jsx(Xe,{to:"/",className:h,children:"Home"}),a.jsxs(Xe,{to:"/emergency",className:h,children:[a.jsx("span",{className:"nav-pulse-dot"}),"Emergency SOS"]}),a.jsx(Xe,{to:"/location",className:h,children:"Live Location"}),a.jsx(Xe,{to:"/contacts",className:h,children:"Contacts"}),a.jsx(Xe,{to:"/report",className:h,children:"Report Issue"}),a.jsx(Xe,{to:"/safety-tips",className:h,children:"Safety Tips"})]}),a.jsxs("div",{className:"nav-actions",children:[a.jsxs(te,{to:"/emergency",className:"btn btn-primary btn-sm emergency-nav-btn",children:[a.jsx(Av,{size:16}),a.jsx("span",{children:"SOS"})]}),t?a.jsxs("div",{className:"user-dropdown-container",children:[a.jsxs(te,{to:"/dashboard",className:"btn btn-secondary btn-sm user-badge-btn",children:[a.jsx(_p,{size:16}),a.jsx("span",{className:"desktop-only-text",children:((m=e==null?void 0:e.name)==null?void 0:m.split(" ")[0])||"Dashboard"})]}),r&&a.jsxs(te,{to:"/admin/dashboard",className:"btn btn-sm admin-badge-btn",title:"Admin Control Center",children:[a.jsx(Pr,{size:16,color:"#fbbf24"}),a.jsx("span",{className:"desktop-only-text",children:"Admin"})]}),a.jsx("button",{onClick:f,className:"btn btn-secondary btn-sm logout-btn",title:"Sign out",children:a.jsx(wp,{size:16})})]}):a.jsxs("div",{className:"guest-nav-links",children:[a.jsxs(te,{to:"/login",className:"btn btn-secondary btn-sm",children:[a.jsx(Ca,{size:15}),a.jsx("span",{children:"Login"})]}),a.jsxs(te,{to:"/register",className:"btn btn-primary btn-sm desktop-only-flex",children:[a.jsx(Nr,{size:15}),a.jsx("span",{children:"Register"})]})]}),a.jsx("button",{className:"mobile-menu-btn",onClick:()=>l(!o),"aria-label":"Toggle navigation menu",children:o?a.jsx(Ks,{size:24}):a.jsx(T2,{size:24})})]})]}),o&&a.jsx("div",{className:"mobile-nav-drawer",children:a.jsxs("div",{className:"mobile-nav-links",children:[a.jsx(Xe,{to:"/",onClick:()=>l(!1),children:"Home"}),a.jsxs(Xe,{to:"/emergency",onClick:()=>l(!1),style:{color:"#f43f5e",fontWeight:700},children:[a.jsx(It,{size:18})," Emergency SOS Hotlines"]}),a.jsxs(Xe,{to:"/location",onClick:()=>l(!1),children:[a.jsx(Pn,{size:18})," Live Location & Map"]}),a.jsxs(Xe,{to:"/contacts",onClick:()=>l(!1),children:[a.jsx(vi,{size:18})," Trusted Contacts"]}),a.jsxs(Xe,{to:"/report",onClick:()=>l(!1),children:[a.jsx(As,{size:18})," Report Safety Incident"]}),a.jsxs(Xe,{to:"/my-reports",onClick:()=>l(!1),children:[a.jsx(Sr,{size:18})," My Reports History"]}),a.jsxs(Xe,{to:"/safety-tips",onClick:()=>l(!1),children:[a.jsx(xd,{size:18})," Safety Tips & Guides"]}),a.jsx("hr",{className:"mobile-nav-divider"}),t?a.jsxs(a.Fragment,{children:[a.jsxs(Xe,{to:"/dashboard",onClick:()=>l(!1),children:[a.jsx(_p,{size:18})," User Dashboard"]}),a.jsxs(Xe,{to:"/profile",onClick:()=>l(!1),children:[a.jsx(La,{size:18})," My Profile & Medical Info"]}),r&&a.jsxs(Xe,{to:"/admin/dashboard",onClick:()=>l(!1),style:{color:"#fbbf24"},children:[a.jsx(Pr,{size:18})," Admin Dashboard"]}),a.jsxs("button",{onClick:f,className:"mobile-logout-btn",children:[a.jsx(wp,{size:18})," Sign Out (",e==null?void 0:e.name,")"]})]}):a.jsxs("div",{className:"mobile-auth-group",children:[a.jsxs(te,{to:"/login",className:"btn btn-secondary btn-block",onClick:()=>l(!1),children:[a.jsx(Ca,{size:16})," Sign In"]}),a.jsxs(te,{to:"/register",className:"btn btn-primary btn-block",onClick:()=>l(!1),children:[a.jsx(Nr,{size:16})," Create Free Account"]}),a.jsx(te,{to:"/admin/login",className:"admin-login-link-subtle",onClick:()=>l(!1),children:"Admin Staff Portal"})]})]})})]}),a.jsx("style",{children:`
        .site-navbar {
          position: sticky;
          top: 0;
          z-index: 999;
          background: rgba(10, 14, 23, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-color);
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 70px;
        }
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }
        .brand-icon-wrapper {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, #f43f5e 0%, #be123c 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          box-shadow: 0 0 15px rgba(244, 63, 94, 0.5);
        }
        .brand-name {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          color: #ffffff;
          display: block;
          line-height: 1;
        }
        .brand-tag {
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: var(--primary);
          font-weight: 700;
        }
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .nav-link-item {
          color: var(--text-secondary);
          font-size: 0.92rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 0.25rem;
          position: relative;
          transition: var(--transition-fast);
        }
        .nav-link-item:hover {
          color: var(--text-primary);
        }
        .active-nav-link {
          color: #ffffff !important;
          font-weight: 600;
        }
        .active-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--primary);
          border-radius: 2px;
          box-shadow: 0 0 8px var(--primary);
        }
        .nav-pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #f43f5e;
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(0.9); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.5; }
          100% { transform: scale(0.9); opacity: 1; }
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .user-dropdown-container, .guest-nav-links {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .admin-badge-btn {
          background: rgba(245, 158, 11, 0.15);
          color: #fbbf24;
          border: 1px solid rgba(245, 158, 11, 0.4);
        }
        .mobile-menu-btn {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
          padding: 6px;
        }
        .mobile-nav-drawer {
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
          padding: 1.25rem;
          animation: fadeIn 0.2s ease-out;
        }
        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .mobile-nav-links a {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-primary);
          font-size: 1rem;
          padding: 0.5rem 0;
        }
        .mobile-nav-divider {
          border: 0;
          height: 1px;
          background: var(--border-color);
          margin: 0.5rem 0;
        }
        .mobile-logout-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #f87171;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          font-weight: 600;
          cursor: pointer;
          width: 100%;
        }
        .mobile-auth-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }
        .admin-login-link-subtle {
          font-size: 0.8rem;
          color: var(--text-dim);
          text-align: center;
          margin-top: 0.25rem;
        }
        @media (max-width: 1024px) {
          .desktop-nav { display: none; }
          .mobile-menu-btn { display: flex; }
          .desktop-only-text { display: none; }
          .desktop-only-flex { display: none; }
        }
      `})]})},$2=()=>a.jsxs("footer",{className:"site-footer",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"hotlines-quick-strip glass-card",children:[a.jsxs("div",{className:"strip-title",children:[a.jsx(It,{size:20,color:"#f43f5e"}),a.jsx("span",{children:"National Emergency Hotlines:"})]}),a.jsxs("div",{className:"strip-items",children:[a.jsxs("a",{href:"tel:112",className:"hotline-pill",children:[a.jsx(Ot,{size:14})," ",a.jsx("strong",{children:"112"})," All Emergency"]}),a.jsxs("a",{href:"tel:1091",className:"hotline-pill highlight",children:[a.jsx(Ot,{size:14})," ",a.jsx("strong",{children:"1091"})," Women Helpline"]}),a.jsxs("a",{href:"tel:100",className:"hotline-pill",children:[a.jsx(Ot,{size:14})," ",a.jsx("strong",{children:"100"})," Police Control"]}),a.jsxs("a",{href:"tel:181",className:"hotline-pill",children:[a.jsx(Ot,{size:14})," ",a.jsx("strong",{children:"181"})," Domestic Abuse"]})]})]}),a.jsxs("div",{className:"footer-grid",children:[a.jsxs("div",{className:"footer-col brand-col",children:[a.jsxs("div",{className:"footer-brand",children:[a.jsx(It,{size:26,color:"#f43f5e"}),a.jsx("span",{children:"AEGIS SAFETY"})]}),a.jsx("p",{className:"footer-desc",children:"Empowering women with instant emergency SOS broadcasting, live GPS coordinates tracking, trusted circle network, and community safety incident reporting."}),a.jsxs("div",{className:"safety-pledge",children:[a.jsx(N2,{size:14,color:"#f43f5e"})," Built with absolute privacy & security in mind"]})]}),a.jsxs("div",{className:"footer-col",children:[a.jsx("h4",{children:"Quick Navigation"}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx(te,{to:"/",children:"Home Overview"})}),a.jsx("li",{children:a.jsx(te,{to:"/emergency",children:"Emergency SOS & Siren"})}),a.jsx("li",{children:a.jsx(te,{to:"/location",children:"Live Map & Geolocation"})}),a.jsx("li",{children:a.jsx(te,{to:"/contacts",children:"Manage Trusted Contacts"})}),a.jsx("li",{children:a.jsx(te,{to:"/report",children:"Report Safety Hazard"})})]})]}),a.jsxs("div",{className:"footer-col",children:[a.jsx("h4",{children:"Resources & Rights"}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx(te,{to:"/safety-tips",children:"Night Travel Guidelines"})}),a.jsx("li",{children:a.jsx(te,{to:"/safety-tips",children:"Public Transit Protocol"})}),a.jsx("li",{children:a.jsx(te,{to:"/safety-tips",children:"Cyber & Digital Safety"})}),a.jsx("li",{children:a.jsx(te,{to:"/safety-tips",children:"Legal Protection Laws"})}),a.jsx("li",{children:a.jsx(te,{to:"/my-reports",children:"Check Report Status"})})]})]}),a.jsxs("div",{className:"footer-col",children:[a.jsx("h4",{children:"Administration"}),a.jsx("p",{className:"footer-subtext",children:"Authorized personnel and law enforcement moderators:"}),a.jsxs(te,{to:"/admin/login",className:"btn btn-secondary btn-sm admin-portal-btn",children:[a.jsx(Yn,{size:14})," Admin Staff Login"]})]})]}),a.jsxs("div",{className:"footer-bottom",children:[a.jsxs("p",{children:["© ",new Date().getFullYear()," Aegis Women Safety Portal. All rights reserved."]}),a.jsxs("p",{className:"footer-disclaimer",children:["In immediate life-threatening situations, always dial ",a.jsx("strong",{children:"112"})," or your local emergency dispatch service directly."]})]})]}),a.jsx("style",{children:`
        .site-footer {
          background: #080c14;
          border-top: 1px solid var(--border-color);
          padding: 3rem 0 2rem;
          margin-top: auto;
        }
        .hotlines-quick-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          padding: 1rem 1.5rem;
          margin-bottom: 2.5rem;
          background: rgba(17, 24, 39, 0.9);
          border: 1px solid rgba(244, 63, 94, 0.25);
        }
        .strip-title {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .strip-items {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .hotline-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.85rem;
          background: rgba(255, 255, 255, 0.06);
          border-radius: var(--radius-full);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          font-size: 0.85rem;
          transition: var(--transition-fast);
        }
        .hotline-pill:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.25);
        }
        .hotline-pill.highlight {
          background: rgba(244, 63, 94, 0.18);
          border-color: rgba(244, 63, 94, 0.4);
          color: #fda4af;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.2fr;
          gap: 2.5rem;
          margin-bottom: 2.5rem;
        }
        .footer-brand {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.25rem;
          color: #ffffff;
          margin-bottom: 0.85rem;
        }
        .footer-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        .safety-pledge {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          color: #fda4af;
        }
        .footer-col h4 {
          font-size: 1rem;
          margin-bottom: 1.1rem;
          color: var(--text-primary);
        }
        .footer-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .footer-col ul a {
          color: var(--text-muted);
          font-size: 0.88rem;
          transition: var(--transition-fast);
        }
        .footer-col ul a:hover {
          color: var(--primary);
          padding-left: 4px;
        }
        .footer-subtext {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 0.85rem;
        }
        .admin-portal-btn {
          display: inline-flex;
          border-color: rgba(251, 191, 36, 0.3);
          color: #fbbf24;
        }
        .footer-bottom {
          border-top: 1px solid var(--border-color);
          padding-top: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          font-size: 0.85rem;
          color: var(--text-dim);
        }
        .footer-disclaimer strong {
          color: #f43f5e;
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
          .brand-col {
            grid-column: span 2;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .brand-col {
            grid-column: span 1;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `})]});class V2{constructor(){this.audioCtx=null,this.oscillator=null,this.gainNode=null,this.intervalId=null,this.isPlaying=!1}initContext(){if(!this.audioCtx){const t=window.AudioContext||window.webkitAudioContext;this.audioCtx=new t}this.audioCtx.state==="suspended"&&this.audioCtx.resume()}start(){if(!this.isPlaying)try{this.initContext(),this.oscillator=this.audioCtx.createOscillator(),this.gainNode=this.audioCtx.createGain(),this.oscillator.type="sawtooth",this.gainNode.gain.setValueAtTime(.4,this.audioCtx.currentTime),this.oscillator.connect(this.gainNode),this.gainNode.connect(this.audioCtx.destination);let t=!1;const r=650,i=980;this.oscillator.frequency.setValueAtTime(r,this.audioCtx.currentTime),this.oscillator.start(),this.isPlaying=!0,this.intervalId=setInterval(()=>{if(!this.audioCtx||!this.oscillator)return;const o=t?r:i;this.oscillator.frequency.exponentialRampToValueAtTime(o,this.audioCtx.currentTime+.35),t=!t},400)}catch(t){console.error("[EmergencySiren] Audio playback error:",t)}}stop(){if(this.isPlaying)try{this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null),this.oscillator&&(this.oscillator.stop(),this.oscillator.disconnect(),this.oscillator=null),this.gainNode&&(this.gainNode.disconnect(),this.gainNode=null)}catch(t){console.warn("[EmergencySiren] Error stopping audio:",t)}finally{this.isPlaying=!1}}toggle(){return this.isPlaying?(this.stop(),!1):(this.start(),!0)}getStatus(){return this.isPlaying}}const Is=new V2,q2=()=>{const[e,t]=P.useState(!1);P.useEffect(()=>{const i=setInterval(()=>{t(Is.getStatus())},400);return()=>clearInterval(i)},[]);const r=()=>{Is.stop(),t(!1)};return a.jsxs("div",{className:"page-wrapper",children:[e&&a.jsxs("div",{className:"siren-active-banner",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[a.jsx(Sd,{size:20}),a.jsx("span",{children:"EMERGENCY SIREN ALARM IS CURRENTLY ACTIVE"})]}),a.jsxs("button",{onClick:r,className:"btn btn-sm",style:{background:"#ffffff",color:"#dc2626",fontWeight:"bold"},children:[a.jsx(Fv,{size:16})," Silence Siren"]})]}),a.jsx(W2,{}),a.jsx("main",{className:"main-content",children:a.jsx(I1,{})}),a.jsx($2,{})]})},Io=({children:e})=>{const{isAuthenticated:t,loading:r}=vt(),i=jn();return r?a.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"60vh"},children:a.jsx("div",{className:"spinner"})}):t?e:a.jsx(Yg,{to:"/login",state:{from:i},replace:!0})},G2=({children:e})=>{const{user:t,isAuthenticated:r,loading:i}=vt(),o=jn();return i?a.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"60vh"},children:a.jsx("div",{className:"spinner"})}):!r||(t==null?void 0:t.role)!=="admin"?a.jsx(Yg,{to:"/admin/login",state:{from:o},replace:!0}):e},Ys=()=>new Promise((e,t)=>{if(!navigator.geolocation){t(new Error("Geolocation is not supported by your browser."));return}navigator.geolocation.getCurrentPosition(r=>{e({lat:r.coords.latitude,lng:r.coords.longitude,accuracy:r.coords.accuracy,speed:r.coords.speed,heading:r.coords.heading,timestamp:r.timestamp})},r=>{let i="Unable to retrieve your location.";switch(r.code){case r.PERMISSION_DENIED:i="Location access was denied. Please allow location permissions in your browser.";break;case r.POSITION_UNAVAILABLE:i="Location information is currently unavailable.";break;case r.TIMEOUT:i="The request to get your location timed out.";break}t(new Error(i))},{enableHighAccuracy:!0,timeout:12e3,maximumAge:5e3})}),Qs=async(e,t)=>{try{const r=await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${e}&lon=${t}`,{headers:{"Accept-Language":"en"}});if(!r.ok)throw new Error("Address lookup failed");return(await r.json()).display_name||`${e.toFixed(5)}, ${t.toFixed(5)}`}catch(r){return console.warn("[Geolocation] Reverse geocoding error:",r.message),`${e.toFixed(5)}, ${t.toFixed(5)}`}},hs=(e,t)=>`https://www.google.com/maps?q=${e},${t}`,Uv=P.createContext(null),K2=({children:e})=>{const[t,r]=P.useState([]),i=P.useCallback(u=>{r(f=>f.filter(h=>h.id!==u))},[]),o=P.useCallback((u,f="info",h=4e3)=>{const m=Date.now()+Math.random().toString(36).substr(2,9),_={id:m,message:u,type:f};r(x=>[...x,_]),h>0&&setTimeout(()=>{i(m)},h)},[i]),l=u=>{switch(u){case"success":return a.jsx(gi,{size:20,color:"#10b981"});case"error":return a.jsx(Kn,{size:20,color:"#ef4444"});case"warning":return a.jsx(Sd,{size:20,color:"#f59e0b"});default:return a.jsx(L2,{size:20,color:"#6366f1"})}};return a.jsxs(Uv.Provider,{value:{showToast:o,success:u=>o(u,"success"),error:u=>o(u,"error"),info:u=>o(u,"info"),warning:u=>o(u,"warning")},children:[e,a.jsx("div",{className:"toast-container","aria-live":"polite",children:t.map(u=>a.jsxs("div",{className:`toast-item toast-${u.type}`,children:[a.jsx("span",{style:{display:"flex",alignItems:"center",flexShrink:0},children:l(u.type)}),a.jsx("div",{style:{flex:1,fontSize:"0.9rem",lineHeight:"1.4"},children:u.message}),a.jsx("button",{onClick:()=>i(u.id),style:{background:"transparent",border:"none",color:"#94a3b8",cursor:"pointer",padding:"2px",display:"flex"},"aria-label":"Close notification",children:a.jsx(Ks,{size:16})})]},u.id))})]})},Qt=()=>{const e=P.useContext(Uv);if(!e)throw new Error("useToast must be used within a ToastProvider");return e},jd=({onTriggerSOS:e,size:t="large"})=>{const[r,i]=P.useState(!1),[o,l]=P.useState(!1),u=Qt(),f=async()=>{i(!0),Is.start(),l(!0);try{const m=await Ys(),_=await Qs(m.lat,m.lng),x=hs(m.lat,m.lng);u.error("🚨 EMERGENCY SOS ACTIVATED! Siren sounding."),e&&e({coords:m,address:_,mapsUrl:x,timestamp:new Date().toISOString()})}catch(m){u.warning("SOS triggered! Note: "+m.message),e&&e({coords:null,address:"Location coordinates unavailable",mapsUrl:"",timestamp:new Date().toISOString()})}finally{i(!1)}},h=()=>{const m=Is.toggle();l(m)};return a.jsxs("div",{className:"sos-component-wrapper",children:[a.jsxs("div",{className:"sos-button-container",children:[a.jsx("div",{className:"sos-pulse-ring"}),a.jsx("div",{className:"sos-pulse-ring"}),a.jsx("div",{className:"sos-pulse-ring"}),a.jsxs("button",{className:"sos-button-main",onClick:f,disabled:r,"aria-label":"Activate Emergency SOS",title:"Click to activate emergency SOS & siren",children:[a.jsx("span",{children:"SOS"}),a.jsx("span",{className:"sos-button-subtext",children:"EMERGENCY"})]})]}),a.jsx("div",{className:"sos-controls",children:a.jsxs("button",{type:"button",onClick:h,className:`btn btn-sm ${o?"btn-danger":"btn-secondary"}`,children:[o?a.jsx(Fv,{size:16}):a.jsx(Z2,{size:16}),a.jsx("span",{children:o?"Silence Siren":"Test Siren Alarm"})]})}),a.jsx("style",{children:`
        .sos-component-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          margin: 1rem 0;
        }
        .sos-controls {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
      `})]})},Y2=[{number:"112",name:"National Emergency",sub:"Police, Fire & Medical all-in-one",icon:It,color:"#f43f5e",badge:"24/7 Priority"},{number:"1091",name:"Women Helpline",sub:"Specialized 24x7 women distress cell",icon:ji,color:"#ec4899",badge:"Toll Free"},{number:"181",name:"Women in Distress",sub:"Domestic violence & crisis shelter",icon:P2,color:"#8b5cf6",badge:"Confidential"},{number:"102",name:"Ambulance & Medical",sub:"Immediate emergency medical transport",icon:v2,color:"#10b981",badge:"Medical"},{number:"1090",name:"Women Power Line",sub:"Cyber stalking & eve teasing cell",icon:Ot,color:"#06b6d4",badge:"Active"}],Pd=()=>a.jsxs("div",{className:"quick-dial-section",children:[a.jsxs("div",{className:"section-title-wrapper",children:[a.jsxs("h3",{className:"section-title",children:[a.jsx(Ot,{size:20,color:"#f43f5e"})," Direct Emergency Dispatch Hotlines"]}),a.jsx("p",{className:"section-desc",children:"Tap any hotline card to initiate an immediate phone call from your device"})]}),a.jsx("div",{className:"helpline-cards-grid",children:Y2.map(e=>{const t=e.icon;return a.jsxs("a",{href:`tel:${e.number}`,className:"helpline-card glass-card",title:`Call ${e.name} (${e.number})`,children:[a.jsxs("div",{className:"card-top",children:[a.jsx("div",{className:"helpline-icon-wrap",style:{background:`${e.color}20`,color:e.color,border:`1px solid ${e.color}40`},children:a.jsx(t,{size:22})}),a.jsx("span",{className:"helpline-badge",children:e.badge})]}),a.jsx("div",{className:"helpline-number",children:e.number}),a.jsx("div",{className:"helpline-name",children:e.name}),a.jsx("div",{className:"helpline-sub",children:e.sub}),a.jsxs("div",{className:"call-now-btn",children:[a.jsx(Ot,{size:14})," Call ",e.number]})]},e.number)})}),a.jsx("style",{children:`
        .quick-dial-section {
          margin: 2rem 0;
        }
        .section-title-wrapper {
          margin-bottom: 1.25rem;
        }
        .section-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.25rem;
          color: var(--text-primary);
        }
        .section-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
        }
        .helpline-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1.25rem;
        }
        .helpline-card {
          display: flex;
          flex-direction: column;
          padding: 1.25rem;
          text-decoration: none;
          border-radius: var(--radius-lg);
          transition: var(--transition-normal);
        }
        .helpline-card:hover {
          transform: translateY(-3px);
          border-color: rgba(244, 63, 94, 0.4);
          box-shadow: var(--shadow-glow);
        }
        .card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .helpline-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .helpline-badge {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          background: rgba(255, 255, 255, 0.08);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
          color: var(--text-secondary);
        }
        .helpline-number {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          line-height: 1;
          margin-bottom: 0.35rem;
        }
        .helpline-name {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }
        .helpline-sub {
          font-size: 0.8rem;
          color: var(--text-dim);
          line-height: 1.35;
          margin-bottom: 1rem;
          flex: 1;
        }
        .call-now-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          background: rgba(244, 63, 94, 0.15);
          color: #f43f5e;
          border: 1px solid rgba(244, 63, 94, 0.3);
          padding: 0.5rem;
          border-radius: var(--radius-md);
          font-size: 0.85rem;
          font-weight: 600;
          transition: var(--transition-fast);
        }
        .helpline-card:hover .call-now-btn {
          background: var(--primary);
          color: #ffffff;
        }
      `})]}),Q2=()=>{const{isAuthenticated:e,user:t}=vt(),[r,i]=P.useState(null),o=l=>{i(l)};return a.jsxs("div",{className:"home-page",children:[a.jsx("section",{className:"hero-section",children:a.jsxs("div",{className:"container hero-container",children:[a.jsxs("div",{className:"hero-content",children:[a.jsxs("div",{className:"hero-badge",children:[a.jsx("span",{className:"badge-dot"}),a.jsx("span",{children:"Next-Generation Women Safety Network"})]}),a.jsxs("h1",{className:"hero-title",children:["Your Personal ",a.jsx("span",{className:"gradient-text",children:"Guardian & Emergency"})," Safety Portal"]}),a.jsx("p",{className:"hero-subtitle",children:"Instant one-tap SOS alerts, live GPS location sharing with trusted contacts, community safety hazard reporting, and 24/7 direct police & helpline dispatch."}),a.jsxs("div",{className:"hero-cta-group",children:[a.jsxs(te,{to:"/emergency",className:"btn btn-primary btn-lg",children:[a.jsx(It,{size:20}),a.jsx("span",{children:"Open Emergency SOS"})]}),a.jsxs(te,{to:e?"/dashboard":"/register",className:"btn btn-secondary btn-lg",children:[a.jsx("span",{children:e?"Go to Dashboard":"Get Started Free"}),a.jsx(sn,{size:18})]})]}),a.jsxs("div",{className:"trust-metrics-row",children:[a.jsxs("div",{className:"metric-item",children:[a.jsx("div",{className:"metric-value",children:"24/7"}),a.jsx("div",{className:"metric-label",children:"Emergency Helplines"})]}),a.jsx("div",{className:"metric-divider"}),a.jsxs("div",{className:"metric-item",children:[a.jsx("div",{className:"metric-value",children:"< 3s"}),a.jsx("div",{className:"metric-label",children:"Instant SOS Dispatch"})]}),a.jsx("div",{className:"metric-divider"}),a.jsxs("div",{className:"metric-item",children:[a.jsx("div",{className:"metric-value",children:"100%"}),a.jsx("div",{className:"metric-label",children:"Encrypted & Private"})]})]})]}),a.jsxs("div",{className:"hero-sos-card glass-card glass-card-glow",children:[a.jsxs("div",{className:"sos-card-header",children:[a.jsxs("div",{className:"sos-header-tag",children:[a.jsx(x2,{size:16,color:"#f43f5e"}),a.jsx("span",{children:"Instant Distress Signal"})]}),a.jsx("h3",{className:"sos-card-title",children:"Tap SOS to Trigger Alarm"}),a.jsx("p",{className:"sos-card-desc",children:"Activates a loud siren alarm and pinpoints your live GPS coordinates immediately."})]}),a.jsx(jd,{onTriggerSOS:o}),r&&a.jsxs("div",{className:"sos-alert-box",children:[a.jsxs("div",{className:"sos-alert-title",children:[a.jsx(gi,{size:16,color:"#10b981"}),a.jsx("span",{children:"SOS Signal Live"})]}),a.jsxs("div",{className:"sos-alert-address",children:["📍 ",r.address]}),a.jsx("div",{className:"sos-alert-actions",children:a.jsx(te,{to:"/emergency",className:"btn btn-primary btn-sm btn-block",children:"View Emergency Broadcast Options"})})]})]})]})}),a.jsx("section",{className:"features-section",children:a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"section-header-center",children:[a.jsx("h2",{className:"section-heading",children:"Comprehensive Safety Suite"}),a.jsx("p",{className:"section-subheading",children:"Engineered with advanced security protocols and accessible tools to keep you safe everywhere you go."})]}),a.jsxs("div",{className:"grid-3 features-grid",children:[a.jsxs("div",{className:"feature-card glass-card",children:[a.jsx("div",{className:"feature-icon-wrapper",style:{background:"rgba(244, 63, 94, 0.15)",color:"#f43f5e"},children:a.jsx(It,{size:26})}),a.jsx("h3",{children:"1-Tap SOS & Siren"}),a.jsx("p",{children:"Trigger a piercing siren to disorient perpetrators, while simultaneously calculating GPS coordinates and preparing WhatsApp/SMS broadcasts."}),a.jsxs(te,{to:"/emergency",className:"feature-link",children:["Learn more ",a.jsx(sn,{size:14})]})]}),a.jsxs("div",{className:"feature-card glass-card",children:[a.jsx("div",{className:"feature-icon-wrapper",style:{background:"rgba(99, 102, 241, 0.15)",color:"#818cf8"},children:a.jsx(Pn,{size:26})}),a.jsx("h3",{children:"Live GPS Map Tracking"}),a.jsx("p",{children:"Real-time geolocation tracking on OpenStreetMap with reverse geocoding to resolve your precise street address and shareable map links."}),a.jsxs(te,{to:"/location",className:"feature-link",children:["View live map ",a.jsx(sn,{size:14})]})]}),a.jsxs("div",{className:"feature-card glass-card",children:[a.jsx("div",{className:"feature-icon-wrapper",style:{background:"rgba(16, 185, 129, 0.15)",color:"#34d399"},children:a.jsx(vi,{size:26})}),a.jsx("h3",{children:"Trusted Contacts Circle"}),a.jsx("p",{children:"Maintain an emergency network of family and friends with instant WhatsApp distress dispatches and 1-tap direct calling capability."}),a.jsxs(te,{to:"/contacts",className:"feature-link",children:["Manage contacts ",a.jsx(sn,{size:14})]})]}),a.jsxs("div",{className:"feature-card glass-card",children:[a.jsx("div",{className:"feature-icon-wrapper",style:{background:"rgba(245, 158, 11, 0.15)",color:"#fbbf24"},children:a.jsx(As,{size:26})}),a.jsx("h3",{children:"Incident & Hazard Reporting"}),a.jsx("p",{children:"Report harassment, unlit streets, and unsafe transit with interactive map coordinate pinning, photographic evidence, and anonymous options."}),a.jsxs(te,{to:"/report",className:"feature-link",children:["File a report ",a.jsx(sn,{size:14})]})]}),a.jsxs("div",{className:"feature-card glass-card",children:[a.jsx("div",{className:"feature-icon-wrapper",style:{background:"rgba(168, 85, 247, 0.15)",color:"#c084fc"},children:a.jsx(xd,{size:26})}),a.jsx("h3",{children:"Safety Guides & Rights"}),a.jsx("p",{children:"Curated safety strategies for night travel, public commute, cyber stalking, self-defense tactics, and legal protections."}),a.jsxs(te,{to:"/safety-tips",className:"feature-link",children:["Read tips ",a.jsx(sn,{size:14})]})]}),a.jsxs("div",{className:"feature-card glass-card",children:[a.jsx("div",{className:"feature-icon-wrapper",style:{background:"rgba(6, 182, 212, 0.15)",color:"#22d3ee"},children:a.jsx(Yn,{size:26})}),a.jsx("h3",{children:"Moderated Oversight"}),a.jsx("p",{children:"Safety reports are tracked through an administrative lifecycle (Pending, Reviewing, Resolved) to ensure action from local authorities."}),a.jsxs(te,{to:"/my-reports",className:"feature-link",children:["Track issues ",a.jsx(sn,{size:14})]})]})]})]})}),a.jsx("section",{className:"hotlines-home-section",children:a.jsx("div",{className:"container",children:a.jsx(Pd,{})})}),a.jsx("section",{className:"cta-banner-section",children:a.jsx("div",{className:"container",children:a.jsxs("div",{className:"cta-banner-card glass-card glass-card-glow",children:[a.jsxs("div",{className:"cta-content",children:[a.jsx("h2",{children:"Empower Your Personal Safety Today"}),a.jsx("p",{children:"Create your free account to configure your emergency contacts circle and customized distress dispatches."})]}),a.jsx("div",{className:"cta-action",children:e?a.jsx(te,{to:"/dashboard",className:"btn btn-primary btn-lg",children:"Open Command Dashboard"}):a.jsx(te,{to:"/register",className:"btn btn-primary btn-lg",children:"Sign Up for Free Protection"})})]})})}),a.jsx("style",{children:`
        .hero-section {
          padding: 3rem 0 4rem;
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          align-items: center;
          gap: 3rem;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(244, 63, 94, 0.12);
          border: 1px solid rgba(244, 63, 94, 0.3);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          font-size: 0.82rem;
          font-weight: 600;
          color: #fda4af;
          margin-bottom: 1.25rem;
        }
        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #f43f5e;
        }
        .hero-title {
          font-size: 2.75rem;
          line-height: 1.15;
          margin-bottom: 1.25rem;
        }
        .hero-subtitle {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2rem;
          max-width: 580px;
        }
        .hero-cta-group {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }
        .trust-metrics-row {
          display: flex;
          align-items: center;
          gap: 1.75rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-color);
        }
        .metric-value {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
        }
        .metric-label {
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .metric-divider {
          width: 1px;
          height: 35px;
          background: var(--border-color);
        }
        .hero-sos-card {
          padding: 2rem;
          text-align: center;
          border-radius: var(--radius-xl);
          background: rgba(17, 24, 39, 0.85);
        }
        .sos-header-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          color: #f43f5e;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.5rem;
        }
        .sos-card-title {
          font-size: 1.35rem;
          margin-bottom: 0.35rem;
        }
        .sos-card-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 1rem;
        }
        .sos-alert-box {
          margin-top: 1.25rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: var(--radius-md);
          padding: 1rem;
          text-align: left;
        }
        .sos-alert-title {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-weight: 700;
          color: #34d399;
          font-size: 0.9rem;
          margin-bottom: 0.25rem;
        }
        .sos-alert-address {
          font-size: 0.82rem;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
        }
        .features-section {
          padding: 4rem 0;
        }
        .section-header-center {
          text-align: center;
          max-width: 650px;
          margin: 0 auto 3rem;
        }
        .section-heading {
          font-size: 2rem;
          margin-bottom: 0.75rem;
        }
        .section-subheading {
          font-size: 0.98rem;
          color: var(--text-muted);
        }
        .features-grid {
          gap: 1.5rem;
        }
        .feature-card {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          padding: 1.75rem;
          border-radius: var(--radius-lg);
          transition: var(--transition-normal);
        }
        .feature-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.2);
        }
        .feature-icon-wrapper {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.5rem;
        }
        .feature-card h3 {
          font-size: 1.2rem;
        }
        .feature-card p {
          font-size: 0.9rem;
          line-height: 1.55;
          flex: 1;
        }
        .feature-link {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.88rem;
          font-weight: 600;
          margin-top: 0.5rem;
        }
        .hotlines-home-section {
          padding: 1rem 0;
        }
        .cta-banner-section {
          padding: 3rem 0;
        }
        .cta-banner-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 2rem;
          padding: 2.5rem;
          border-radius: var(--radius-xl);
          background: linear-gradient(135deg, rgba(30, 27, 75, 0.8) 0%, rgba(17, 24, 39, 0.95) 100%);
          border: 1px solid rgba(99, 102, 241, 0.3);
        }
        .cta-content h2 {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
        }
        .cta-content p {
          font-size: 0.95rem;
          color: var(--text-muted);
          max-width: 500px;
        }
        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-subtitle {
            margin: 0 auto 2rem;
          }
          .hero-cta-group {
            justify-content: center;
          }
          .trust-metrics-row {
            justify-content: center;
          }
        }
        @media (max-width: 600px) {
          .hero-title {
            font-size: 2rem;
          }
          .trust-metrics-row {
            flex-direction: column;
            gap: 1rem;
          }
          .metric-divider {
            display: none;
          }
          .cta-banner-card {
            text-align: center;
            justify-content: center;
          }
        }
      `})]})},X2=()=>{var E,R;const[e,t]=P.useState(""),[r,i]=P.useState(""),[o,l]=P.useState(!1),[u,f]=P.useState(""),{loginUser:h}=vt(),m=Qt(),_=Lr(),b=((R=(E=jn().state)==null?void 0:E.from)==null?void 0:R.pathname)||"/dashboard",C=async y=>{var g,w;if(y.preventDefault(),f(""),!e||!r){f("Please fill in both email and password.");return}l(!0);try{const j=await h({email:e,password:r});j.success&&(m.success(`Welcome back, ${j.user.name}!`),j.user.role==="admin"?_("/admin/dashboard"):_(b,{replace:!0}))}catch(j){const z=((w=(g=j.response)==null?void 0:g.data)==null?void 0:w.message)||j.message||"Login failed. Please check your credentials.";f(z),m.error(z)}finally{l(!1)}},S=()=>{t("user@womensafety.org"),i("Password@123")};return a.jsxs("div",{className:"auth-page-container",children:[a.jsx("div",{className:"container",children:a.jsx("div",{className:"auth-card-wrapper",children:a.jsxs("div",{className:"auth-card glass-card glass-card-glow",children:[a.jsxs("div",{className:"auth-header",children:[a.jsx("div",{className:"auth-icon-badge",children:a.jsx(It,{size:28,color:"#f43f5e"})}),a.jsx("h2",{children:"Sign In to Aegis"}),a.jsx("p",{children:"Access your personal safety command center & emergency circle"})]}),u&&a.jsxs("div",{className:"alert alert-danger",children:[a.jsx(Kn,{size:18}),a.jsx("span",{children:u})]}),a.jsxs("form",{onSubmit:C,className:"auth-form",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label form-label-required",children:"Email Address"}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(Gs,{size:18,className:"input-icon"}),a.jsx("input",{type:"email",className:"form-control with-icon",placeholder:"name@example.com",value:e,onChange:y=>t(y.target.value),required:!0})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:a.jsx("label",{className:"form-label form-label-required",children:"Password"})}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(Yn,{size:18,className:"input-icon"}),a.jsx("input",{type:"password",className:"form-control with-icon",placeholder:"Enter your password",value:r,onChange:y=>i(y.target.value),required:!0})]})]}),a.jsxs("button",{type:"submit",className:"btn btn-primary btn-block btn-lg",disabled:o,style:{marginTop:"0.5rem"},children:[a.jsx(Ca,{size:18}),a.jsx("span",{children:o?"Signing In...":"Sign In"})]}),a.jsx("div",{className:"demo-credentials-box",children:a.jsxs("button",{type:"button",onClick:S,className:"btn btn-secondary btn-sm btn-block",children:[a.jsx(kd,{size:15,color:"#fbbf24"}),a.jsx("span",{children:"Fill Demo User Credentials"})]})})]}),a.jsxs("div",{className:"auth-footer",children:[a.jsxs("p",{children:["Don't have an account?"," ",a.jsxs(te,{to:"/register",className:"auth-switch-link",children:["Create free account ",a.jsx(sn,{size:14})]})]}),a.jsxs("div",{className:"admin-redirect-subtle",children:[a.jsx("span",{children:"Authorized law enforcement or moderator? "}),a.jsx(te,{to:"/admin/login",children:"Admin Staff Login"})]})]})]})})}),a.jsx("style",{children:`
        .auth-page-container {
          min-height: calc(100vh - 200px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 0;
        }
        .auth-card-wrapper {
          max-width: 480px;
          margin: 0 auto;
          width: 100%;
        }
        .auth-card {
          padding: 2.25rem;
          border-radius: var(--radius-xl);
          background: rgba(17, 24, 39, 0.85);
        }
        .auth-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .auth-icon-badge {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-lg);
          background: rgba(244, 63, 94, 0.12);
          border: 1px solid rgba(244, 63, 94, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }
        .auth-header h2 {
          font-size: 1.65rem;
          margin-bottom: 0.35rem;
        }
        .auth-header p {
          font-size: 0.88rem;
          color: var(--text-muted);
        }
        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .input-with-icon {
          position: relative;
          display: flex;
          align-items: center;
        }
        .input-icon {
          position: absolute;
          left: 1rem;
          color: var(--text-dim);
          pointer-events: none;
        }
        .form-control.with-icon {
          padding-left: 2.75rem;
        }
        .demo-credentials-box {
          margin-top: 0.5rem;
          padding-top: 0.75rem;
          border-top: 1px dashed var(--border-color);
        }
        .auth-footer {
          margin-top: 1.75rem;
          text-align: center;
          font-size: 0.88rem;
          color: var(--text-muted);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .auth-switch-link {
          color: var(--primary);
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.2rem;
        }
        .admin-redirect-subtle {
          font-size: 0.78rem;
          color: var(--text-dim);
          border-top: 1px solid var(--border-color);
          padding-top: 0.75rem;
        }
        .admin-redirect-subtle a {
          color: #fbbf24;
          font-weight: 600;
        }
      `})]})},J2=()=>{const[e,t]=P.useState({name:"",email:"",phone:"",password:"",confirmPassword:""}),[r,i]=P.useState(""),[o,l]=P.useState(!1),{registerUser:u}=vt(),f=Qt(),h=Lr(),m=x=>{t({...e,[x.target.name]:x.target.value})},_=async x=>{var y,g;x.preventDefault(),i("");const{name:b,email:C,phone:S,password:E,confirmPassword:R}=e;if(!b||!C||!S||!E){i("Please fill in all required fields.");return}if(E.length<6){i("Password must be at least 6 characters.");return}if(E!==R){i("Passwords do not match. Please verify.");return}l(!0);try{const w=await u({name:b,email:C,phone:S,password:E});w.success&&(f.success(`Account created successfully! Welcome, ${w.user.name}.`),h("/dashboard"))}catch(w){const j=((g=(y=w.response)==null?void 0:y.data)==null?void 0:g.message)||w.message||"Registration failed. Please try again.";i(j),f.error(j)}finally{l(!1)}};return a.jsxs("div",{className:"auth-page-container",children:[a.jsx("div",{className:"container",children:a.jsx("div",{className:"auth-card-wrapper",children:a.jsxs("div",{className:"auth-card glass-card glass-card-glow",children:[a.jsxs("div",{className:"auth-header",children:[a.jsx("div",{className:"auth-icon-badge",children:a.jsx(Nr,{size:28,color:"#f43f5e"})}),a.jsx("h2",{children:"Create Aegis Account"}),a.jsx("p",{children:"Set up your trusted emergency safety network"})]}),r&&a.jsxs("div",{className:"alert alert-danger",children:[a.jsx(Kn,{size:18}),a.jsx("span",{children:r})]}),a.jsxs("form",{onSubmit:_,className:"auth-form",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label form-label-required",children:"Full Name"}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(La,{size:18,className:"input-icon"}),a.jsx("input",{type:"text",name:"name",className:"form-control with-icon",placeholder:"e.g. Priya Sharma",value:e.name,onChange:m,required:!0})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label form-label-required",children:"Email Address"}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(Gs,{size:18,className:"input-icon"}),a.jsx("input",{type:"email",name:"email",className:"form-control with-icon",placeholder:"name@example.com",value:e.email,onChange:m,required:!0})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label form-label-required",children:"Mobile Phone Number"}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(Ot,{size:18,className:"input-icon"}),a.jsx("input",{type:"tel",name:"phone",className:"form-control with-icon",placeholder:"+91 98765 43210",value:e.phone,onChange:m,required:!0})]}),a.jsx("div",{className:"form-hint",children:"Used for emergency SMS notifications and trusted circles"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label form-label-required",children:"Password"}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(Yn,{size:18,className:"input-icon"}),a.jsx("input",{type:"password",name:"password",className:"form-control with-icon",placeholder:"Minimum 6 characters",value:e.password,onChange:m,required:!0})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label form-label-required",children:"Confirm Password"}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(Yn,{size:18,className:"input-icon"}),a.jsx("input",{type:"password",name:"confirmPassword",className:"form-control with-icon",placeholder:"Re-enter password",value:e.confirmPassword,onChange:m,required:!0})]})]}),a.jsxs("button",{type:"submit",className:"btn btn-primary btn-block btn-lg",disabled:o,style:{marginTop:"0.75rem"},children:[a.jsx(Nr,{size:18}),a.jsx("span",{children:o?"Creating Account...":"Sign Up for Protection"})]})]}),a.jsx("div",{className:"auth-footer",children:a.jsxs("p",{children:["Already registered?"," ",a.jsxs(te,{to:"/login",className:"auth-switch-link",children:["Sign in here ",a.jsx(sn,{size:14})]})]})})]})})}),a.jsx("style",{children:`
        .auth-page-container {
          min-height: calc(100vh - 200px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2.5rem 0;
        }
        .auth-card-wrapper {
          max-width: 500px;
          margin: 0 auto;
          width: 100%;
        }
        .auth-card {
          padding: 2.25rem;
          border-radius: var(--radius-xl);
          background: rgba(17, 24, 39, 0.85);
        }
        .auth-header {
          text-align: center;
          margin-bottom: 1.75rem;
        }
        .auth-icon-badge {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-lg);
          background: rgba(244, 63, 94, 0.12);
          border: 1px solid rgba(244, 63, 94, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }
        .auth-header h2 {
          font-size: 1.65rem;
          margin-bottom: 0.35rem;
        }
        .auth-header p {
          font-size: 0.88rem;
          color: var(--text-muted);
        }
        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .input-with-icon {
          position: relative;
          display: flex;
          align-items: center;
        }
        .input-icon {
          position: absolute;
          left: 1rem;
          color: var(--text-dim);
          pointer-events: none;
        }
        .form-control.with-icon {
          padding-left: 2.75rem;
        }
        .auth-footer {
          margin-top: 1.75rem;
          text-align: center;
          font-size: 0.88rem;
          color: var(--text-muted);
        }
        .auth-switch-link {
          color: var(--primary);
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.2rem;
        }
      `})]})},Nd=async()=>(await it.get("/contacts")).data,ek=async e=>(await it.post("/contacts",e)).data,tk=async(e,t)=>(await it.put(`/contacts/${e}`,t)).data,nk=async e=>(await it.delete(`/contacts/${e}`)).data,rk=()=>{var j;const{user:e,isAuthenticated:t}=vt(),r=Qt(),[i,o]=P.useState(null),[l,u]=P.useState(!1),[f,h]=P.useState([]),[m,_]=P.useState(!1),[x,b]=P.useState(((j=e==null?void 0:e.emergencyInfo)==null?void 0:j.emergencyMessage)||"EMERGENCY: I am in danger and require immediate assistance! Here is my live GPS location:");P.useEffect(()=>{S(),t&&C()},[t]),P.useEffect(()=>{const z=setInterval(()=>{_(Is.getStatus())},400);return()=>clearInterval(z)},[]);const C=async()=>{try{const z=await Nd();z.success&&h(z.contacts)}catch(z){console.warn("Could not fetch contacts for emergency page:",z.message)}},S=async()=>{u(!0);try{const z=await Ys(),D=await Qs(z.lat,z.lng);o({lat:z.lat,lng:z.lng,accuracy:z.accuracy,address:D,mapsUrl:hs(z.lat,z.lng)})}catch(z){console.warn("Location fetch issue:",z.message)}finally{u(!1)}},E=z=>{z.coords&&o({lat:z.coords.lat,lng:z.coords.lng,accuracy:z.coords.accuracy,address:z.address,mapsUrl:z.mapsUrl})},R=()=>{var A;const z=i!=null&&i.mapsUrl?`
📍 Live Location: ${i.mapsUrl}
📌 Address: ${i.address}`:`
📍 Location tracking active.`,D=e?`
- ${e.name} (${e.phone})`:"",B=(A=e==null?void 0:e.emergencyInfo)!=null&&A.bloodGroup?`
🩸 Blood Group: ${e.emergencyInfo.bloodGroup}`:"";return`${x}${z}${D}${B}`},y=()=>{const z=R();navigator.clipboard.writeText(z),r.success("Emergency alert text & GPS link copied to clipboard!")},g=()=>{const z=encodeURIComponent(R());if(f.length>0){const B=(f.find(A=>A.isPrimary)||f[0]).phone.replace(/[^0-9]/g,"");window.open(`https://wa.me/${B}?text=${z}`,"_blank")}else window.open(`https://wa.me/?text=${z}`,"_blank")},w=()=>{const z=encodeURIComponent(R());if(f.length>0){const D=f.map(B=>B.phone.replace(/[^0-9+]/g,"")).join(",");window.location.href=`sms:${D}?body=${z}`}else window.location.href=`sms:?body=${z}`};return a.jsxs("div",{className:"emergency-page",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"emergency-hero glass-card glass-card-glow",children:[a.jsxs("div",{className:"hero-head",children:[a.jsxs("div",{className:"emergency-mode-tag",children:[a.jsx(Iv,{size:16,className:"radio-pulse"}),a.jsx("span",{children:"LIVE EMERGENCY RESPONSE MODE"})]}),a.jsx("h1",{children:"Instant Distress Activation"}),a.jsx("p",{children:"Tap the SOS button to sound the piercing alarm siren and broadcast your coordinates to emergency responders & your trusted network."})]}),a.jsx(jd,{onTriggerSOS:E}),a.jsxs("div",{className:"gps-live-strip glass-card",children:[a.jsxs("div",{className:"gps-left",children:[a.jsx(Pn,{size:22,color:"#f43f5e"}),a.jsxs("div",{children:[a.jsx("div",{className:"gps-title",children:"Your Current GPS Coordinates:"}),a.jsx("div",{className:"gps-address",children:l?"Acquiring high-accuracy GPS coordinates...":i?a.jsxs(a.Fragment,{children:[a.jsx("strong",{children:i.address}),a.jsxs("span",{className:"gps-coords",children:["(",i.lat.toFixed(5),", ",i.lng.toFixed(5),")"]})]}):"Location not yet acquired. Click below to fetch."})]})]}),a.jsxs("button",{onClick:S,disabled:l,className:"btn btn-secondary btn-sm gps-refresh-btn",children:[a.jsx(_d,{size:15}),a.jsx("span",{children:l?"Locating...":"Refresh GPS"})]})]}),a.jsxs("div",{className:"broadcast-options-grid",children:[a.jsxs("button",{onClick:g,className:"btn broadcast-btn whatsapp-btn",children:[a.jsx(Ea,{size:18}),a.jsx("span",{children:"Broadcast via WhatsApp"})]}),a.jsxs("button",{onClick:w,className:"btn broadcast-btn sms-btn",children:[a.jsx(Dv,{size:18}),a.jsx("span",{children:"Send Emergency SMS"})]}),a.jsxs("button",{onClick:y,className:"btn btn-secondary broadcast-btn",children:[a.jsx(Rv,{size:18}),a.jsx("span",{children:"Copy SOS Text & Map Link"})]})]})]}),t&&f.length>0&&a.jsxs("div",{className:"emergency-contacts-strip glass-card",style:{marginTop:"2rem"},children:[a.jsxs("div",{className:"strip-header",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsx(vi,{size:20,color:"#f43f5e"}),a.jsxs("h3",{style:{fontSize:"1.15rem"},children:["Your Trusted Emergency Circle (",f.length,")"]})]}),a.jsx("span",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:"1-tap direct alert"})]}),a.jsx("div",{className:"contacts-quick-list",children:f.map(z=>{const D=z.phone.replace(/[^0-9+]/g,"");return a.jsxs("div",{className:"contact-quick-item glass-card",children:[a.jsxs("div",{className:"contact-quick-info",children:[a.jsx("strong",{children:z.name}),a.jsxs("span",{children:[z.relationship," • ",z.phone]})]}),a.jsxs("div",{className:"contact-quick-btns",children:[a.jsxs("a",{href:`tel:${D}`,className:"btn btn-secondary btn-sm",title:"Call Contact",children:[a.jsx(Ot,{size:14})," Call"]}),a.jsxs("button",{type:"button",onClick:()=>{const B=encodeURIComponent(R());window.open(`https://wa.me/${D.replace("+","")}?text=${B}`,"_blank")},className:"btn btn-sm",style:{background:"rgba(37, 211, 102, 0.2)",color:"#25d366",border:"1px solid rgba(37, 211, 102, 0.4)"},title:"Alert via WhatsApp",children:[a.jsx(Ea,{size:14})," WhatsApp"]})]})]},z._id)})})]}),a.jsx(Pd,{})]}),a.jsx("style",{children:`
        .emergency-page {
          padding-bottom: 3rem;
        }
        .emergency-hero {
          padding: 2.5rem;
          border-radius: var(--radius-xl);
          background: radial-gradient(circle at 50% 0%, rgba(244, 63, 94, 0.15) 0%, rgba(17, 24, 39, 0.95) 75%);
          border: 1px solid rgba(244, 63, 94, 0.35);
          text-align: center;
        }
        .hero-head {
          max-width: 650px;
          margin: 0 auto 1.5rem;
        }
        .emergency-mode-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.78rem;
          font-weight: 800;
          color: #f43f5e;
          letter-spacing: 0.1em;
          background: rgba(244, 63, 94, 0.15);
          border: 1px solid rgba(244, 63, 94, 0.35);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-full);
          margin-bottom: 0.85rem;
        }
        .radio-pulse {
          animation: pulse 1.2s infinite;
        }
        .hero-head h1 {
          font-size: 2.2rem;
          margin-bottom: 0.5rem;
        }
        .hero-head p {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }
        .gps-live-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          padding: 1.25rem 1.5rem;
          margin: 2rem 0 1.5rem;
          text-align: left;
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid var(--border-color);
        }
        .gps-left {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          flex: 1;
          min-width: 250px;
        }
        .gps-title {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-dim);
          margin-bottom: 2px;
        }
        .gps-address {
          font-size: 0.92rem;
          color: var(--text-primary);
          line-height: 1.4;
        }
        .gps-coords {
          display: block;
          font-size: 0.8rem;
          color: #fda4af;
          font-family: monospace;
          margin-top: 2px;
        }
        .broadcast-options-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .broadcast-btn {
          padding: 0.85rem 1.25rem;
          font-size: 0.95rem;
        }
        .whatsapp-btn {
          background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
          color: #ffffff;
        }
        .whatsapp-btn:hover {
          background: linear-gradient(135deg, #34e77b 0%, #25d366 100%);
          box-shadow: 0 4px 18px rgba(37, 211, 102, 0.4);
        }
        .sms-btn {
          background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
          color: #ffffff;
        }
        .emergency-contacts-strip {
          padding: 1.5rem;
        }
        .strip-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }
        .contacts-quick-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1rem;
        }
        .contact-quick-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1rem;
          gap: 0.5rem;
        }
        .contact-quick-info {
          display: flex;
          flex-direction: column;
          font-size: 0.85rem;
        }
        .contact-quick-info strong {
          color: var(--text-primary);
        }
        .contact-quick-info span {
          color: var(--text-muted);
          font-size: 0.78rem;
        }
        .contact-quick-btns {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        @media (max-width: 768px) {
          .emergency-hero { padding: 1.5rem 1rem; }
          .broadcast-options-grid { grid-template-columns: 1fr; }
          .gps-live-strip { flex-direction: column; }
          .gps-refresh-btn { width: 100%; }
        }
      `})]})},ik=({contact:e,onEdit:t,onDelete:r,onSendSOSMessage:i,userEmergencyMessage:o})=>{const l=e.phone.replace(/[^0-9+]/g,""),u=()=>{const f=encodeURIComponent(`${o||"EMERGENCY ALERT: I am in distress and need your immediate help!"}`);window.open(`https://wa.me/${l.replace("+","")}?text=${f}`,"_blank")};return a.jsxs("div",{className:`contact-card glass-card ${e.isPrimary?"primary-highlight":""}`,children:[a.jsxs("div",{className:"contact-card-header",children:[a.jsxs("div",{className:"contact-info",children:[a.jsxs("div",{className:"contact-name-row",children:[a.jsx("h4",{className:"contact-name",children:e.name}),e.isPrimary&&a.jsxs("span",{className:"primary-pill",title:"Primary emergency contact",children:[a.jsx(F2,{size:12,fill:"#fbbf24",color:"#fbbf24"})," Primary"]})]}),a.jsx("span",{className:"contact-relation-badge",children:e.relationship})]}),a.jsxs("div",{className:"contact-actions-quick",children:[a.jsx("button",{onClick:()=>t(e),className:"action-icon-btn edit-btn",title:"Edit Contact",children:a.jsx(M2,{size:16})}),a.jsx("button",{onClick:()=>r(e._id),className:"action-icon-btn delete-btn",title:"Delete Contact",children:a.jsx(Bv,{size:16})})]})]}),a.jsxs("div",{className:"contact-details-list",children:[a.jsxs("div",{className:"contact-detail-item",children:[a.jsx(Ot,{size:15,color:"#fda4af"}),a.jsx("a",{href:`tel:${l}`,className:"detail-value-link",children:e.phone})]}),e.email&&a.jsxs("div",{className:"contact-detail-item",children:[a.jsx(Gs,{size:15,color:"#94a3b8"}),a.jsx("a",{href:`mailto:${e.email}`,className:"detail-value-link text-dim",children:e.email})]})]}),a.jsxs("div",{className:"contact-cta-row",children:[a.jsxs("a",{href:`tel:${l}`,className:"btn btn-secondary btn-sm contact-cta-btn",children:[a.jsx(Ot,{size:14})," Call"]}),a.jsxs("button",{type:"button",onClick:u,className:"btn btn-sm whatsapp-alert-btn",children:[a.jsx(Ea,{size:14})," Alert via WhatsApp"]})]}),a.jsx("style",{children:`
        .contact-card {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.25rem;
          border-radius: var(--radius-lg);
          transition: var(--transition-normal);
        }
        .contact-card.primary-highlight {
          border-color: rgba(245, 158, 11, 0.4);
          background: rgba(30, 27, 75, 0.35);
        }
        .contact-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.5rem;
        }
        .contact-name-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .contact-name {
          font-size: 1.1rem;
          color: var(--text-primary);
        }
        .primary-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.72rem;
          font-weight: 700;
          background: rgba(245, 158, 11, 0.2);
          color: #fbbf24;
          padding: 0.15rem 0.5rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(245, 158, 11, 0.4);
        }
        .contact-relation-badge {
          display: inline-block;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 0.2rem;
        }
        .contact-actions-quick {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .action-icon-btn {
          background: transparent;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          color: var(--text-muted);
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .action-icon-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.08);
        }
        .action-icon-btn.delete-btn:hover {
          color: #ef4444;
          border-color: rgba(239, 68, 68, 0.4);
          background: rgba(239, 68, 68, 0.1);
        }
        .contact-details-list {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .contact-detail-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.9rem;
        }
        .detail-value-link {
          color: var(--text-primary);
          font-weight: 500;
        }
        .detail-value-link.text-dim {
          color: var(--text-muted);
          font-weight: 400;
          font-size: 0.85rem;
        }
        .contact-cta-row {
          display: flex;
          gap: 0.6rem;
          margin-top: auto;
        }
        .contact-cta-btn {
          flex: 1;
        }
        .whatsapp-alert-btn {
          flex: 1.5;
          background: rgba(37, 211, 102, 0.15);
          color: #25d366;
          border: 1px solid rgba(37, 211, 102, 0.3);
          font-weight: 600;
        }
        .whatsapp-alert-btn:hover {
          background: #25d366;
          color: #ffffff;
        }
      `})]})},sk=["Family","Parent","Sibling","Spouse / Partner","Friend","Colleague","Neighbor","Other"],ok=({isOpen:e,onClose:t,onSave:r,contact:i=null})=>{const[o,l]=P.useState({name:"",phone:"",email:"",relationship:"Family",isPrimary:!1}),[u,f]=P.useState(""),[h,m]=P.useState(!1);if(P.useEffect(()=>{l(i?{name:i.name||"",phone:i.phone||"",email:i.email||"",relationship:i.relationship||"Family",isPrimary:!!i.isPrimary}:{name:"",phone:"",email:"",relationship:"Family",isPrimary:!1}),f("")},[i,e]),!e)return null;const _=async x=>{var b,C;if(x.preventDefault(),f(""),!o.name.trim()){f("Contact name is required.");return}if(!o.phone.trim()){f("Phone number is required.");return}m(!0);try{await r(o),t()}catch(S){f(((C=(b=S.response)==null?void 0:b.data)==null?void 0:C.message)||S.message||"Failed to save contact.")}finally{m(!1)}};return a.jsx("div",{className:"modal-backdrop",onClick:t,children:a.jsxs("div",{className:"modal-content",onClick:x=>x.stopPropagation(),children:[a.jsxs("div",{className:"modal-header",children:[a.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"1.2rem"},children:[a.jsx(Nr,{size:20,color:"#f43f5e"}),a.jsx("span",{children:i?"Edit Trusted Contact":"Add Trusted Contact"})]}),a.jsx("button",{onClick:t,style:{background:"transparent",border:"none",color:"#94a3b8",cursor:"pointer"},children:a.jsx(Ks,{size:20})})]}),a.jsxs("form",{onSubmit:_,children:[a.jsxs("div",{className:"modal-body",children:[u&&a.jsxs("div",{className:"alert alert-danger",children:[a.jsx(Kn,{size:18}),a.jsx("span",{children:u})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label form-label-required",children:"Full Name"}),a.jsx("input",{type:"text",className:"form-control",placeholder:"e.g. Sister, Mom, Best Friend",value:o.name,onChange:x=>l({...o,name:x.target.value}),required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label form-label-required",children:"Phone Number (with country code)"}),a.jsx("input",{type:"tel",className:"form-control",placeholder:"e.g. +91 98765 43210",value:o.phone,onChange:x=>l({...o,phone:x.target.value}),required:!0}),a.jsx("div",{className:"form-hint",children:"Used for 1-tap emergency calling and WhatsApp SOS broadcasts"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Email Address (Optional)"}),a.jsx("input",{type:"email",className:"form-control",placeholder:"e.g. contact@domain.com",value:o.email,onChange:x=>l({...o,email:x.target.value})})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Relationship"}),a.jsx("select",{className:"form-control",value:o.relationship,onChange:x=>l({...o,relationship:x.target.value}),children:sk.map(x=>a.jsx("option",{value:x,style:{background:"#111827"},children:x},x))})]}),a.jsxs("div",{className:"form-group",style:{marginTop:"1.25rem"},children:[a.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.6rem",cursor:"pointer",fontSize:"0.9rem"},children:[a.jsx("input",{type:"checkbox",checked:o.isPrimary,onChange:x=>l({...o,isPrimary:x.target.checked}),style:{width:"18px",height:"18px",accentColor:"#f43f5e"}}),a.jsx("span",{style:{color:"var(--text-primary)",fontWeight:600},children:"Mark as Primary Emergency Contact"})]}),a.jsx("div",{className:"form-hint",style:{marginLeft:"26px"},children:"Primary contact is prioritized first during emergency dispatches."})]})]}),a.jsxs("div",{className:"modal-footer",children:[a.jsx("button",{type:"button",onClick:t,className:"btn btn-secondary btn-sm",disabled:h,children:"Cancel"}),a.jsxs("button",{type:"submit",className:"btn btn-primary btn-sm",disabled:h,children:[a.jsx(wd,{size:16}),a.jsx("span",{children:h?"Saving...":"Save Contact"})]})]})]})]})})},ak=()=>{const{user:e}=vt(),t=Qt(),[r,i]=P.useState([]),[o,l]=P.useState(!0),[u,f]=P.useState(""),[h,m]=P.useState(!1),[_,x]=P.useState(null);P.useEffect(()=>{b()},[]);const b=async()=>{l(!0);try{const g=await Nd();g.success&&i(g.contacts||[])}catch{t.error("Failed to load trusted contacts")}finally{l(!1)}},C=()=>{x(null),m(!0)},S=g=>{x(g),m(!0)},E=async g=>{_?(await tk(_._id,g)).success&&(t.success(`Contact "${g.name}" updated successfully.`),b()):(await ek(g)).success&&(t.success(`Contact "${g.name}" added to your emergency circle.`),b())},R=async g=>{if(window.confirm("Are you sure you want to remove this trusted contact?"))try{(await nk(g)).success&&(t.success("Trusted contact removed."),i(j=>j.filter(z=>z._id!==g)))}catch{t.error("Failed to delete contact.")}},y=r.filter(g=>{var w,j,z;return((w=g.name)==null?void 0:w.toLowerCase().includes(u.toLowerCase()))||((j=g.phone)==null?void 0:j.includes(u))||((z=g.relationship)==null?void 0:z.toLowerCase().includes(u.toLowerCase()))});return a.jsxs("div",{className:"contacts-page",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"contacts-header-wrapper glass-card",children:[a.jsxs("div",{className:"header-info",children:[a.jsxs("div",{className:"header-badge",children:[a.jsx(vi,{size:16,color:"#f43f5e"}),a.jsx("span",{children:"Personal Emergency Circle"})]}),a.jsx("h1",{children:"Trusted Emergency Contacts"}),a.jsx("p",{children:"Your trusted circle receives instantaneous WhatsApp and SMS broadcasts containing your live GPS coordinates whenever you trigger an SOS."})]}),a.jsxs("button",{onClick:C,className:"btn btn-primary btn-lg",children:[a.jsx(Nr,{size:18}),a.jsx("span",{children:"Add Trusted Contact"})]})]}),a.jsxs("div",{className:"contacts-toolbar",children:[a.jsxs("div",{className:"search-box",children:[a.jsx(bd,{size:18,className:"search-icon"}),a.jsx("input",{type:"text",className:"form-control search-input",placeholder:"Search contacts by name, relationship, or phone...",value:u,onChange:g=>f(g.target.value)})]}),a.jsx("div",{className:"circle-stats-badge",children:a.jsxs("span",{children:[r.length," / 15 Contacts Configured"]})})]}),o?a.jsxs("div",{style:{textAlign:"center",padding:"4rem 0"},children:[a.jsx(jr,{size:36,className:"spin-icon",style:{color:"#f43f5e",margin:"0 auto 1rem"}}),a.jsx("p",{style:{color:"var(--text-muted)"},children:"Loading your trusted circle..."})]}):y.length>0?a.jsx("div",{className:"grid-3 contacts-grid",children:y.map(g=>{var w;return a.jsx(ik,{contact:g,onEdit:S,onDelete:R,userEmergencyMessage:(w=e==null?void 0:e.emergencyInfo)==null?void 0:w.emergencyMessage},g._id)})}):a.jsxs("div",{className:"empty-state",children:[a.jsx(vi,{className:"empty-state-icon"}),a.jsx("h3",{children:"No Trusted Contacts Found"}),a.jsx("p",{style:{maxWidth:"440px",margin:"0.5rem auto 1.5rem",color:"var(--text-muted)"},children:u?`No contacts matching "${u}". Try a different search term.`:"You have not added any trusted contacts yet. Add family members, trusted colleagues, or friends to ensure immediate emergency notifications."}),!u&&a.jsxs("button",{onClick:C,className:"btn btn-primary",children:[a.jsx(Nr,{size:16}),a.jsx("span",{children:"Add Your First Emergency Contact"})]})]}),a.jsxs("div",{className:"safety-advice-card glass-card",style:{marginTop:"2.5rem"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem",color:"#fbbf24",marginBottom:"0.5rem"},children:[a.jsx(Pr,{size:20}),a.jsx("strong",{style:{fontSize:"1rem"},children:"Best Practices for Your Emergency Circle:"})]}),a.jsxs("ul",{style:{paddingLeft:"1.25rem",color:"var(--text-secondary)",fontSize:"0.88rem",lineHeight:"1.6"},children:[a.jsxs("li",{children:["Designate at least one ",a.jsx("strong",{children:"Primary Contact"})," who is readily reachable 24/7."]}),a.jsx("li",{children:"Ensure phone numbers include full country code (e.g., +91 for India)."}),a.jsx("li",{children:"Inform your chosen contacts so they are aware of incoming Aegis alert messages."})]})]})]}),a.jsx(ok,{isOpen:h,onClose:()=>m(!1),onSave:E,contact:_}),a.jsx("style",{children:`
        .contacts-page {
          padding-bottom: 3rem;
        }
        .contacts-header-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          padding: 2rem;
          margin-bottom: 2rem;
        }
        .header-info {
          max-width: 650px;
        }
        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          font-weight: 700;
          color: #f43f5e;
          background: rgba(244, 63, 94, 0.12);
          border: 1px solid rgba(244, 63, 94, 0.3);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          margin-bottom: 0.75rem;
        }
        .header-info h1 {
          font-size: 1.85rem;
          margin-bottom: 0.35rem;
        }
        .header-info p {
          font-size: 0.92rem;
          color: var(--text-secondary);
        }
        .contacts-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .search-box {
          position: relative;
          flex: 1;
          max-width: 450px;
          min-width: 260px;
        }
        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-dim);
        }
        .search-input {
          padding-left: 2.75rem;
        }
        .circle-stats-badge {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.05);
          padding: 0.5rem 1rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-color);
        }
        .contacts-grid {
          margin-top: 0.5rem;
        }
      `})]})};function Hv(e,t){const r=P.useRef(t);P.useEffect(function(){t!==r.current&&e.attributionControl!=null&&(r.current!=null&&e.attributionControl.removeAttribution(r.current),t!=null&&e.attributionControl.addAttribution(t)),r.current=t},[e,t])}function lk(e,t,r){t.center!==r.center&&e.setLatLng(t.center),t.radius!=null&&t.radius!==r.radius&&e.setRadius(t.radius)}const ck=1;function uk(e){return Object.freeze({__version:ck,map:e})}function Zv(e,t){return Object.freeze({...e,...t})}const Wv=P.createContext(null),$v=Wv.Provider;function Ja(){const e=P.useContext(Wv);if(e==null)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}function Vv(e){function t(r,i){const{instance:o,context:l}=e(r).current;return P.useImperativeHandle(i,()=>o),r.children==null?null:ps.createElement($v,{value:l},r.children)}return P.forwardRef(t)}function dk(e){function t(r,i){const[o,l]=P.useState(!1),{instance:u}=e(r,l).current;P.useImperativeHandle(i,()=>u),P.useEffect(function(){o&&u.update()},[u,o,r.children]);const f=u._contentNode;return f?Dg.createPortal(r.children,f):null}return P.forwardRef(t)}function fk(e){function t(r,i){const{instance:o}=e(r).current;return P.useImperativeHandle(i,()=>o),null}return P.forwardRef(t)}function Cd(e,t){const r=P.useRef();P.useEffect(function(){return t!=null&&e.instance.on(t),r.current=t,function(){r.current!=null&&e.instance.off(r.current),r.current=null}},[e,t])}function el(e,t){const r=e.pane??t.pane;return r?{...e,pane:r}:e}function hk(e,t){return function(i,o){const l=Ja(),u=e(el(i,l),l);return Hv(l.map,i.attribution),Cd(u.current,i.eventHandlers),t(u.current,l,i,o),u}}var hu={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(e,t){(function(r,i){i(t)})(bx,function(r){var i="1.9.4";function o(n){var s,c,d,p;for(c=1,d=arguments.length;c<d;c++){p=arguments[c];for(s in p)n[s]=p[s]}return n}var l=Object.create||function(){function n(){}return function(s){return n.prototype=s,new n}}();function u(n,s){var c=Array.prototype.slice;if(n.bind)return n.bind.apply(n,c.call(arguments,1));var d=c.call(arguments,2);return function(){return n.apply(s,d.length?d.concat(c.call(arguments)):arguments)}}var f=0;function h(n){return"_leaflet_id"in n||(n._leaflet_id=++f),n._leaflet_id}function m(n,s,c){var d,p,v,k;return k=function(){d=!1,p&&(v.apply(c,p),p=!1)},v=function(){d?p=arguments:(n.apply(c,arguments),setTimeout(k,s),d=!0)},v}function _(n,s,c){var d=s[1],p=s[0],v=d-p;return n===d&&c?n:((n-p)%v+v)%v+p}function x(){return!1}function b(n,s){if(s===!1)return n;var c=Math.pow(10,s===void 0?6:s);return Math.round(n*c)/c}function C(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function S(n){return C(n).split(/\s+/)}function E(n,s){Object.prototype.hasOwnProperty.call(n,"options")||(n.options=n.options?l(n.options):{});for(var c in s)n.options[c]=s[c];return n.options}function R(n,s,c){var d=[];for(var p in n)d.push(encodeURIComponent(c?p.toUpperCase():p)+"="+encodeURIComponent(n[p]));return(!s||s.indexOf("?")===-1?"?":"&")+d.join("&")}var y=/\{ *([\w_ -]+) *\}/g;function g(n,s){return n.replace(y,function(c,d){var p=s[d];if(p===void 0)throw new Error("No value provided for variable "+c);return typeof p=="function"&&(p=p(s)),p})}var w=Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"};function j(n,s){for(var c=0;c<n.length;c++)if(n[c]===s)return c;return-1}var z="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function D(n){return window["webkit"+n]||window["moz"+n]||window["ms"+n]}var B=0;function A(n){var s=+new Date,c=Math.max(0,16-(s-B));return B=s+c,window.setTimeout(n,c)}var ee=window.requestAnimationFrame||D("RequestAnimationFrame")||A,K=window.cancelAnimationFrame||D("CancelAnimationFrame")||D("CancelRequestAnimationFrame")||function(n){window.clearTimeout(n)};function oe(n,s,c){if(c&&ee===A)n.call(s);else return ee.call(window,u(n,s))}function xe(n){n&&K.call(window,n)}var yt={__proto__:null,extend:o,create:l,bind:u,get lastId(){return f},stamp:h,throttle:m,wrapNum:_,falseFn:x,formatNum:b,trim:C,splitWords:S,setOptions:E,getParamString:R,template:g,isArray:w,indexOf:j,emptyImageUrl:z,requestFn:ee,cancelFn:K,requestAnimFrame:oe,cancelAnimFrame:xe};function _e(){}_e.extend=function(n){var s=function(){E(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},c=s.__super__=this.prototype,d=l(c);d.constructor=s,s.prototype=d;for(var p in this)Object.prototype.hasOwnProperty.call(this,p)&&p!=="prototype"&&p!=="__super__"&&(s[p]=this[p]);return n.statics&&o(s,n.statics),n.includes&&(V(n.includes),o.apply(null,[d].concat(n.includes))),o(d,n),delete d.statics,delete d.includes,d.options&&(d.options=c.options?l(c.options):{},o(d.options,n.options)),d._initHooks=[],d.callInitHooks=function(){if(!this._initHooksCalled){c.callInitHooks&&c.callInitHooks.call(this),this._initHooksCalled=!0;for(var v=0,k=d._initHooks.length;v<k;v++)d._initHooks[v].call(this)}},s},_e.include=function(n){var s=this.prototype.options;return o(this.prototype,n),n.options&&(this.prototype.options=s,this.mergeOptions(n.options)),this},_e.mergeOptions=function(n){return o(this.prototype.options,n),this},_e.addInitHook=function(n){var s=Array.prototype.slice.call(arguments,1),c=typeof n=="function"?n:function(){this[n].apply(this,s)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(c),this};function V(n){if(!(typeof L>"u"||!L||!L.Mixin)){n=w(n)?n:[n];for(var s=0;s<n.length;s++)n[s]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var pe={on:function(n,s,c){if(typeof n=="object")for(var d in n)this._on(d,n[d],s);else{n=S(n);for(var p=0,v=n.length;p<v;p++)this._on(n[p],s,c)}return this},off:function(n,s,c){if(!arguments.length)delete this._events;else if(typeof n=="object")for(var d in n)this._off(d,n[d],s);else{n=S(n);for(var p=arguments.length===1,v=0,k=n.length;v<k;v++)p?this._off(n[v]):this._off(n[v],s,c)}return this},_on:function(n,s,c,d){if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}if(this._listens(n,s,c)===!1){c===this&&(c=void 0);var p={fn:s,ctx:c};d&&(p.once=!0),this._events=this._events||{},this._events[n]=this._events[n]||[],this._events[n].push(p)}},_off:function(n,s,c){var d,p,v;if(this._events&&(d=this._events[n],!!d)){if(arguments.length===1){if(this._firingCount)for(p=0,v=d.length;p<v;p++)d[p].fn=x;delete this._events[n];return}if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}var k=this._listens(n,s,c);if(k!==!1){var T=d[k];this._firingCount&&(T.fn=x,this._events[n]=d=d.slice()),d.splice(k,1)}}},fire:function(n,s,c){if(!this.listens(n,c))return this;var d=o({},s,{type:n,target:this,sourceTarget:s&&s.sourceTarget||this});if(this._events){var p=this._events[n];if(p){this._firingCount=this._firingCount+1||1;for(var v=0,k=p.length;v<k;v++){var T=p[v],O=T.fn;T.once&&this.off(n,O,T.ctx),O.call(T.ctx||this,d)}this._firingCount--}}return c&&this._propagateEvent(d),this},listens:function(n,s,c,d){typeof n!="string"&&console.warn('"string" type argument expected');var p=s;typeof s!="function"&&(d=!!s,p=void 0,c=void 0);var v=this._events&&this._events[n];if(v&&v.length&&this._listens(n,p,c)!==!1)return!0;if(d){for(var k in this._eventParents)if(this._eventParents[k].listens(n,s,c,d))return!0}return!1},_listens:function(n,s,c){if(!this._events)return!1;var d=this._events[n]||[];if(!s)return!!d.length;c===this&&(c=void 0);for(var p=0,v=d.length;p<v;p++)if(d[p].fn===s&&d[p].ctx===c)return p;return!1},once:function(n,s,c){if(typeof n=="object")for(var d in n)this._on(d,n[d],s,!0);else{n=S(n);for(var p=0,v=n.length;p<v;p++)this._on(n[p],s,c,!0)}return this},addEventParent:function(n){return this._eventParents=this._eventParents||{},this._eventParents[h(n)]=n,this},removeEventParent:function(n){return this._eventParents&&delete this._eventParents[h(n)],this},_propagateEvent:function(n){for(var s in this._eventParents)this._eventParents[s].fire(n.type,o({layer:n.target,propagatedFrom:n.target},n),!0)}};pe.addEventListener=pe.on,pe.removeEventListener=pe.clearAllEventListeners=pe.off,pe.addOneTimeEventListener=pe.once,pe.fireEvent=pe.fire,pe.hasEventListeners=pe.listens;var Se=_e.extend(pe);function M(n,s,c){this.x=c?Math.round(n):n,this.y=c?Math.round(s):s}var Y=Math.trunc||function(n){return n>0?Math.floor(n):Math.ceil(n)};M.prototype={clone:function(){return new M(this.x,this.y)},add:function(n){return this.clone()._add(U(n))},_add:function(n){return this.x+=n.x,this.y+=n.y,this},subtract:function(n){return this.clone()._subtract(U(n))},_subtract:function(n){return this.x-=n.x,this.y-=n.y,this},divideBy:function(n){return this.clone()._divideBy(n)},_divideBy:function(n){return this.x/=n,this.y/=n,this},multiplyBy:function(n){return this.clone()._multiplyBy(n)},_multiplyBy:function(n){return this.x*=n,this.y*=n,this},scaleBy:function(n){return new M(this.x*n.x,this.y*n.y)},unscaleBy:function(n){return new M(this.x/n.x,this.y/n.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=Y(this.x),this.y=Y(this.y),this},distanceTo:function(n){n=U(n);var s=n.x-this.x,c=n.y-this.y;return Math.sqrt(s*s+c*c)},equals:function(n){return n=U(n),n.x===this.x&&n.y===this.y},contains:function(n){return n=U(n),Math.abs(n.x)<=Math.abs(this.x)&&Math.abs(n.y)<=Math.abs(this.y)},toString:function(){return"Point("+b(this.x)+", "+b(this.y)+")"}};function U(n,s,c){return n instanceof M?n:w(n)?new M(n[0],n[1]):n==null?n:typeof n=="object"&&"x"in n&&"y"in n?new M(n.x,n.y):new M(n,s,c)}function q(n,s){if(n)for(var c=s?[n,s]:n,d=0,p=c.length;d<p;d++)this.extend(c[d])}q.prototype={extend:function(n){var s,c;if(!n)return this;if(n instanceof M||typeof n[0]=="number"||"x"in n)s=c=U(n);else if(n=Q(n),s=n.min,c=n.max,!s||!c)return this;return!this.min&&!this.max?(this.min=s.clone(),this.max=c.clone()):(this.min.x=Math.min(s.x,this.min.x),this.max.x=Math.max(c.x,this.max.x),this.min.y=Math.min(s.y,this.min.y),this.max.y=Math.max(c.y,this.max.y)),this},getCenter:function(n){return U((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,n)},getBottomLeft:function(){return U(this.min.x,this.max.y)},getTopRight:function(){return U(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(n){var s,c;return typeof n[0]=="number"||n instanceof M?n=U(n):n=Q(n),n instanceof q?(s=n.min,c=n.max):s=c=n,s.x>=this.min.x&&c.x<=this.max.x&&s.y>=this.min.y&&c.y<=this.max.y},intersects:function(n){n=Q(n);var s=this.min,c=this.max,d=n.min,p=n.max,v=p.x>=s.x&&d.x<=c.x,k=p.y>=s.y&&d.y<=c.y;return v&&k},overlaps:function(n){n=Q(n);var s=this.min,c=this.max,d=n.min,p=n.max,v=p.x>s.x&&d.x<c.x,k=p.y>s.y&&d.y<c.y;return v&&k},isValid:function(){return!!(this.min&&this.max)},pad:function(n){var s=this.min,c=this.max,d=Math.abs(s.x-c.x)*n,p=Math.abs(s.y-c.y)*n;return Q(U(s.x-d,s.y-p),U(c.x+d,c.y+p))},equals:function(n){return n?(n=Q(n),this.min.equals(n.getTopLeft())&&this.max.equals(n.getBottomRight())):!1}};function Q(n,s){return!n||n instanceof q?n:new q(n,s)}function ge(n,s){if(n)for(var c=s?[n,s]:n,d=0,p=c.length;d<p;d++)this.extend(c[d])}ge.prototype={extend:function(n){var s=this._southWest,c=this._northEast,d,p;if(n instanceof ae)d=n,p=n;else if(n instanceof ge){if(d=n._southWest,p=n._northEast,!d||!p)return this}else return n?this.extend(ne(n)||ue(n)):this;return!s&&!c?(this._southWest=new ae(d.lat,d.lng),this._northEast=new ae(p.lat,p.lng)):(s.lat=Math.min(d.lat,s.lat),s.lng=Math.min(d.lng,s.lng),c.lat=Math.max(p.lat,c.lat),c.lng=Math.max(p.lng,c.lng)),this},pad:function(n){var s=this._southWest,c=this._northEast,d=Math.abs(s.lat-c.lat)*n,p=Math.abs(s.lng-c.lng)*n;return new ge(new ae(s.lat-d,s.lng-p),new ae(c.lat+d,c.lng+p))},getCenter:function(){return new ae((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new ae(this.getNorth(),this.getWest())},getSouthEast:function(){return new ae(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(n){typeof n[0]=="number"||n instanceof ae||"lat"in n?n=ne(n):n=ue(n);var s=this._southWest,c=this._northEast,d,p;return n instanceof ge?(d=n.getSouthWest(),p=n.getNorthEast()):d=p=n,d.lat>=s.lat&&p.lat<=c.lat&&d.lng>=s.lng&&p.lng<=c.lng},intersects:function(n){n=ue(n);var s=this._southWest,c=this._northEast,d=n.getSouthWest(),p=n.getNorthEast(),v=p.lat>=s.lat&&d.lat<=c.lat,k=p.lng>=s.lng&&d.lng<=c.lng;return v&&k},overlaps:function(n){n=ue(n);var s=this._southWest,c=this._northEast,d=n.getSouthWest(),p=n.getNorthEast(),v=p.lat>s.lat&&d.lat<c.lat,k=p.lng>s.lng&&d.lng<c.lng;return v&&k},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(n,s){return n?(n=ue(n),this._southWest.equals(n.getSouthWest(),s)&&this._northEast.equals(n.getNorthEast(),s)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function ue(n,s){return n instanceof ge?n:new ge(n,s)}function ae(n,s,c){if(isNaN(n)||isNaN(s))throw new Error("Invalid LatLng object: ("+n+", "+s+")");this.lat=+n,this.lng=+s,c!==void 0&&(this.alt=+c)}ae.prototype={equals:function(n,s){if(!n)return!1;n=ne(n);var c=Math.max(Math.abs(this.lat-n.lat),Math.abs(this.lng-n.lng));return c<=(s===void 0?1e-9:s)},toString:function(n){return"LatLng("+b(this.lat,n)+", "+b(this.lng,n)+")"},distanceTo:function(n){return ze.distance(this,ne(n))},wrap:function(){return ze.wrapLatLng(this)},toBounds:function(n){var s=180*n/40075017,c=s/Math.cos(Math.PI/180*this.lat);return ue([this.lat-s,this.lng-c],[this.lat+s,this.lng+c])},clone:function(){return new ae(this.lat,this.lng,this.alt)}};function ne(n,s,c){return n instanceof ae?n:w(n)&&typeof n[0]!="object"?n.length===3?new ae(n[0],n[1],n[2]):n.length===2?new ae(n[0],n[1]):null:n==null?n:typeof n=="object"&&"lat"in n?new ae(n.lat,"lng"in n?n.lng:n.lon,n.alt):s===void 0?null:new ae(n,s,c)}var re={latLngToPoint:function(n,s){var c=this.projection.project(n),d=this.scale(s);return this.transformation._transform(c,d)},pointToLatLng:function(n,s){var c=this.scale(s),d=this.transformation.untransform(n,c);return this.projection.unproject(d)},project:function(n){return this.projection.project(n)},unproject:function(n){return this.projection.unproject(n)},scale:function(n){return 256*Math.pow(2,n)},zoom:function(n){return Math.log(n/256)/Math.LN2},getProjectedBounds:function(n){if(this.infinite)return null;var s=this.projection.bounds,c=this.scale(n),d=this.transformation.transform(s.min,c),p=this.transformation.transform(s.max,c);return new q(d,p)},infinite:!1,wrapLatLng:function(n){var s=this.wrapLng?_(n.lng,this.wrapLng,!0):n.lng,c=this.wrapLat?_(n.lat,this.wrapLat,!0):n.lat,d=n.alt;return new ae(c,s,d)},wrapLatLngBounds:function(n){var s=n.getCenter(),c=this.wrapLatLng(s),d=s.lat-c.lat,p=s.lng-c.lng;if(d===0&&p===0)return n;var v=n.getSouthWest(),k=n.getNorthEast(),T=new ae(v.lat-d,v.lng-p),O=new ae(k.lat-d,k.lng-p);return new ge(T,O)}},ze=o({},re,{wrapLng:[-180,180],R:6371e3,distance:function(n,s){var c=Math.PI/180,d=n.lat*c,p=s.lat*c,v=Math.sin((s.lat-n.lat)*c/2),k=Math.sin((s.lng-n.lng)*c/2),T=v*v+Math.cos(d)*Math.cos(p)*k*k,O=2*Math.atan2(Math.sqrt(T),Math.sqrt(1-T));return this.R*O}}),er=6378137,zr={R:er,MAX_LATITUDE:85.0511287798,project:function(n){var s=Math.PI/180,c=this.MAX_LATITUDE,d=Math.max(Math.min(c,n.lat),-c),p=Math.sin(d*s);return new M(this.R*n.lng*s,this.R*Math.log((1+p)/(1-p))/2)},unproject:function(n){var s=180/Math.PI;return new ae((2*Math.atan(Math.exp(n.y/this.R))-Math.PI/2)*s,n.x*s/this.R)},bounds:function(){var n=er*Math.PI;return new q([-n,-n],[n,n])}()};function Ni(n,s,c,d){if(w(n)){this._a=n[0],this._b=n[1],this._c=n[2],this._d=n[3];return}this._a=n,this._b=s,this._c=c,this._d=d}Ni.prototype={transform:function(n,s){return this._transform(n.clone(),s)},_transform:function(n,s){return s=s||1,n.x=s*(this._a*n.x+this._b),n.y=s*(this._c*n.y+this._d),n},untransform:function(n,s){return s=s||1,new M((n.x/s-this._b)/this._a,(n.y/s-this._d)/this._c)}};function $e(n,s,c,d){return new Ni(n,s,c,d)}var xt=o({},ze,{code:"EPSG:3857",projection:zr,transformation:function(){var n=.5/(Math.PI*zr.R);return $e(n,.5,-n,.5)}()}),Bt=o({},xt,{code:"EPSG:900913"});function Ci(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function Tr(n,s){var c="",d,p,v,k,T,O;for(d=0,v=n.length;d<v;d++){for(T=n[d],p=0,k=T.length;p<k;p++)O=T[p],c+=(p?"L":"M")+O.x+" "+O.y;c+=s?G.svg?"z":"x":""}return c||"M0 0"}var _t=document.documentElement.style,J="ActiveXObject"in window,Fe=J&&!document.addEventListener,Ft="msLaunchUri"in navigator&&!("documentMode"in document),Ut=Xt("webkit"),Ei=Xt("android"),Js=Xt("android 2")||Xt("android 3"),tr=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),ey=Ei&&Xt("Google")&&tr<537&&!("AudioNode"in window),rl=!!window.opera,zd=!Ft&&Xt("chrome"),Td=Xt("gecko")&&!Ut&&!rl&&!J,ty=!zd&&Xt("safari"),Od=Xt("phantom"),Rd="OTransition"in _t,ny=navigator.platform.indexOf("Win")===0,Md=J&&"transition"in _t,il="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Js,Ad="MozPerspective"in _t,ry=!window.L_DISABLE_3D&&(Md||il||Ad)&&!Rd&&!Od,Li=typeof orientation<"u"||Xt("mobile"),iy=Li&&Ut,sy=Li&&il,Id=!window.PointerEvent&&window.MSPointerEvent,Dd=!!(window.PointerEvent||Id),Bd="ontouchstart"in window||!!window.TouchEvent,oy=!window.L_NO_TOUCH&&(Bd||Dd),ay=Li&&rl,ly=Li&&Td,cy=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,uy=function(){var n=!1;try{var s=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("testPassiveEventSupport",x,s),window.removeEventListener("testPassiveEventSupport",x,s)}catch{}return n}(),dy=function(){return!!document.createElement("canvas").getContext}(),sl=!!(document.createElementNS&&Ci("svg").createSVGRect),fy=!!sl&&function(){var n=document.createElement("div");return n.innerHTML="<svg/>",(n.firstChild&&n.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),hy=!sl&&function(){try{var n=document.createElement("div");n.innerHTML='<v:shape adj="1"/>';var s=n.firstChild;return s.style.behavior="url(#default#VML)",s&&typeof s.adj=="object"}catch{return!1}}(),py=navigator.platform.indexOf("Mac")===0,my=navigator.platform.indexOf("Linux")===0;function Xt(n){return navigator.userAgent.toLowerCase().indexOf(n)>=0}var G={ie:J,ielt9:Fe,edge:Ft,webkit:Ut,android:Ei,android23:Js,androidStock:ey,opera:rl,chrome:zd,gecko:Td,safari:ty,phantom:Od,opera12:Rd,win:ny,ie3d:Md,webkit3d:il,gecko3d:Ad,any3d:ry,mobile:Li,mobileWebkit:iy,mobileWebkit3d:sy,msPointer:Id,pointer:Dd,touch:oy,touchNative:Bd,mobileOpera:ay,mobileGecko:ly,retina:cy,passiveEvents:uy,canvas:dy,svg:sl,vml:hy,inlineSvg:fy,mac:py,linux:my},Fd=G.msPointer?"MSPointerDown":"pointerdown",Ud=G.msPointer?"MSPointerMove":"pointermove",Hd=G.msPointer?"MSPointerUp":"pointerup",Zd=G.msPointer?"MSPointerCancel":"pointercancel",ol={touchstart:Fd,touchmove:Ud,touchend:Hd,touchcancel:Zd},Wd={touchstart:wy,touchmove:eo,touchend:eo,touchcancel:eo},Or={},$d=!1;function gy(n,s,c){return s==="touchstart"&&_y(),Wd[s]?(c=Wd[s].bind(this,c),n.addEventListener(ol[s],c,!1),c):(console.warn("wrong event specified:",s),x)}function vy(n,s,c){if(!ol[s]){console.warn("wrong event specified:",s);return}n.removeEventListener(ol[s],c,!1)}function yy(n){Or[n.pointerId]=n}function xy(n){Or[n.pointerId]&&(Or[n.pointerId]=n)}function Vd(n){delete Or[n.pointerId]}function _y(){$d||(document.addEventListener(Fd,yy,!0),document.addEventListener(Ud,xy,!0),document.addEventListener(Hd,Vd,!0),document.addEventListener(Zd,Vd,!0),$d=!0)}function eo(n,s){if(s.pointerType!==(s.MSPOINTER_TYPE_MOUSE||"mouse")){s.touches=[];for(var c in Or)s.touches.push(Or[c]);s.changedTouches=[s],n(s)}}function wy(n,s){s.MSPOINTER_TYPE_TOUCH&&s.pointerType===s.MSPOINTER_TYPE_TOUCH&&Ve(s),eo(n,s)}function by(n){var s={},c,d;for(d in n)c=n[d],s[d]=c&&c.bind?c.bind(n):c;return n=s,s.type="dblclick",s.detail=2,s.isTrusted=!1,s._simulated=!0,s}var ky=200;function Sy(n,s){n.addEventListener("dblclick",s);var c=0,d;function p(v){if(v.detail!==1){d=v.detail;return}if(!(v.pointerType==="mouse"||v.sourceCapabilities&&!v.sourceCapabilities.firesTouchEvents)){var k=Qd(v);if(!(k.some(function(O){return O instanceof HTMLLabelElement&&O.attributes.for})&&!k.some(function(O){return O instanceof HTMLInputElement||O instanceof HTMLSelectElement}))){var T=Date.now();T-c<=ky?(d++,d===2&&s(by(v))):d=1,c=T}}}return n.addEventListener("click",p),{dblclick:s,simDblclick:p}}function jy(n,s){n.removeEventListener("dblclick",s.dblclick),n.removeEventListener("click",s.simDblclick)}var al=ro(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),zi=ro(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),qd=zi==="webkitTransition"||zi==="OTransition"?zi+"End":"transitionend";function Gd(n){return typeof n=="string"?document.getElementById(n):n}function Ti(n,s){var c=n.style[s]||n.currentStyle&&n.currentStyle[s];if((!c||c==="auto")&&document.defaultView){var d=document.defaultView.getComputedStyle(n,null);c=d?d[s]:null}return c==="auto"?null:c}function he(n,s,c){var d=document.createElement(n);return d.className=s||"",c&&c.appendChild(d),d}function je(n){var s=n.parentNode;s&&s.removeChild(n)}function to(n){for(;n.firstChild;)n.removeChild(n.firstChild)}function Rr(n){var s=n.parentNode;s&&s.lastChild!==n&&s.appendChild(n)}function Mr(n){var s=n.parentNode;s&&s.firstChild!==n&&s.insertBefore(n,s.firstChild)}function ll(n,s){if(n.classList!==void 0)return n.classList.contains(s);var c=no(n);return c.length>0&&new RegExp("(^|\\s)"+s+"(\\s|$)").test(c)}function se(n,s){if(n.classList!==void 0)for(var c=S(s),d=0,p=c.length;d<p;d++)n.classList.add(c[d]);else if(!ll(n,s)){var v=no(n);cl(n,(v?v+" ":"")+s)}}function Te(n,s){n.classList!==void 0?n.classList.remove(s):cl(n,C((" "+no(n)+" ").replace(" "+s+" "," ")))}function cl(n,s){n.className.baseVal===void 0?n.className=s:n.className.baseVal=s}function no(n){return n.correspondingElement&&(n=n.correspondingElement),n.className.baseVal===void 0?n.className:n.className.baseVal}function Nt(n,s){"opacity"in n.style?n.style.opacity=s:"filter"in n.style&&Py(n,s)}function Py(n,s){var c=!1,d="DXImageTransform.Microsoft.Alpha";try{c=n.filters.item(d)}catch{if(s===1)return}s=Math.round(s*100),c?(c.Enabled=s!==100,c.Opacity=s):n.style.filter+=" progid:"+d+"(opacity="+s+")"}function ro(n){for(var s=document.documentElement.style,c=0;c<n.length;c++)if(n[c]in s)return n[c];return!1}function nr(n,s,c){var d=s||new M(0,0);n.style[al]=(G.ie3d?"translate("+d.x+"px,"+d.y+"px)":"translate3d("+d.x+"px,"+d.y+"px,0)")+(c?" scale("+c+")":"")}function Me(n,s){n._leaflet_pos=s,G.any3d?nr(n,s):(n.style.left=s.x+"px",n.style.top=s.y+"px")}function rr(n){return n._leaflet_pos||new M(0,0)}var Oi,Ri,ul;if("onselectstart"in document)Oi=function(){ie(window,"selectstart",Ve)},Ri=function(){ve(window,"selectstart",Ve)};else{var Mi=ro(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Oi=function(){if(Mi){var n=document.documentElement.style;ul=n[Mi],n[Mi]="none"}},Ri=function(){Mi&&(document.documentElement.style[Mi]=ul,ul=void 0)}}function dl(){ie(window,"dragstart",Ve)}function fl(){ve(window,"dragstart",Ve)}var io,hl;function pl(n){for(;n.tabIndex===-1;)n=n.parentNode;n.style&&(so(),io=n,hl=n.style.outlineStyle,n.style.outlineStyle="none",ie(window,"keydown",so))}function so(){io&&(io.style.outlineStyle=hl,io=void 0,hl=void 0,ve(window,"keydown",so))}function Kd(n){do n=n.parentNode;while((!n.offsetWidth||!n.offsetHeight)&&n!==document.body);return n}function ml(n){var s=n.getBoundingClientRect();return{x:s.width/n.offsetWidth||1,y:s.height/n.offsetHeight||1,boundingClientRect:s}}var Ny={__proto__:null,TRANSFORM:al,TRANSITION:zi,TRANSITION_END:qd,get:Gd,getStyle:Ti,create:he,remove:je,empty:to,toFront:Rr,toBack:Mr,hasClass:ll,addClass:se,removeClass:Te,setClass:cl,getClass:no,setOpacity:Nt,testProp:ro,setTransform:nr,setPosition:Me,getPosition:rr,get disableTextSelection(){return Oi},get enableTextSelection(){return Ri},disableImageDrag:dl,enableImageDrag:fl,preventOutline:pl,restoreOutline:so,getSizedParentNode:Kd,getScale:ml};function ie(n,s,c,d){if(s&&typeof s=="object")for(var p in s)vl(n,p,s[p],c);else{s=S(s);for(var v=0,k=s.length;v<k;v++)vl(n,s[v],c,d)}return this}var Jt="_leaflet_events";function ve(n,s,c,d){if(arguments.length===1)Yd(n),delete n[Jt];else if(s&&typeof s=="object")for(var p in s)yl(n,p,s[p],c);else if(s=S(s),arguments.length===2)Yd(n,function(T){return j(s,T)!==-1});else for(var v=0,k=s.length;v<k;v++)yl(n,s[v],c,d);return this}function Yd(n,s){for(var c in n[Jt]){var d=c.split(/\d/)[0];(!s||s(d))&&yl(n,d,null,null,c)}}var gl={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function vl(n,s,c,d){var p=s+h(c)+(d?"_"+h(d):"");if(n[Jt]&&n[Jt][p])return this;var v=function(T){return c.call(d||n,T||window.event)},k=v;!G.touchNative&&G.pointer&&s.indexOf("touch")===0?v=gy(n,s,v):G.touch&&s==="dblclick"?v=Sy(n,v):"addEventListener"in n?s==="touchstart"||s==="touchmove"||s==="wheel"||s==="mousewheel"?n.addEventListener(gl[s]||s,v,G.passiveEvents?{passive:!1}:!1):s==="mouseenter"||s==="mouseleave"?(v=function(T){T=T||window.event,_l(n,T)&&k(T)},n.addEventListener(gl[s],v,!1)):n.addEventListener(s,k,!1):n.attachEvent("on"+s,v),n[Jt]=n[Jt]||{},n[Jt][p]=v}function yl(n,s,c,d,p){p=p||s+h(c)+(d?"_"+h(d):"");var v=n[Jt]&&n[Jt][p];if(!v)return this;!G.touchNative&&G.pointer&&s.indexOf("touch")===0?vy(n,s,v):G.touch&&s==="dblclick"?jy(n,v):"removeEventListener"in n?n.removeEventListener(gl[s]||s,v,!1):n.detachEvent("on"+s,v),n[Jt][p]=null}function ir(n){return n.stopPropagation?n.stopPropagation():n.originalEvent?n.originalEvent._stopped=!0:n.cancelBubble=!0,this}function xl(n){return vl(n,"wheel",ir),this}function Ai(n){return ie(n,"mousedown touchstart dblclick contextmenu",ir),n._leaflet_disable_click=!0,this}function Ve(n){return n.preventDefault?n.preventDefault():n.returnValue=!1,this}function sr(n){return Ve(n),ir(n),this}function Qd(n){if(n.composedPath)return n.composedPath();for(var s=[],c=n.target;c;)s.push(c),c=c.parentNode;return s}function Xd(n,s){if(!s)return new M(n.clientX,n.clientY);var c=ml(s),d=c.boundingClientRect;return new M((n.clientX-d.left)/c.x-s.clientLeft,(n.clientY-d.top)/c.y-s.clientTop)}var Cy=G.linux&&G.chrome?window.devicePixelRatio:G.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Jd(n){return G.edge?n.wheelDeltaY/2:n.deltaY&&n.deltaMode===0?-n.deltaY/Cy:n.deltaY&&n.deltaMode===1?-n.deltaY*20:n.deltaY&&n.deltaMode===2?-n.deltaY*60:n.deltaX||n.deltaZ?0:n.wheelDelta?(n.wheelDeltaY||n.wheelDelta)/2:n.detail&&Math.abs(n.detail)<32765?-n.detail*20:n.detail?n.detail/-32765*60:0}function _l(n,s){var c=s.relatedTarget;if(!c)return!0;try{for(;c&&c!==n;)c=c.parentNode}catch{return!1}return c!==n}var Ey={__proto__:null,on:ie,off:ve,stopPropagation:ir,disableScrollPropagation:xl,disableClickPropagation:Ai,preventDefault:Ve,stop:sr,getPropagationPath:Qd,getMousePosition:Xd,getWheelDelta:Jd,isExternalTarget:_l,addListener:ie,removeListener:ve},ef=Se.extend({run:function(n,s,c,d){this.stop(),this._el=n,this._inProgress=!0,this._duration=c||.25,this._easeOutPower=1/Math.max(d||.5,.2),this._startPos=rr(n),this._offset=s.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=oe(this._animate,this),this._step()},_step:function(n){var s=+new Date-this._startTime,c=this._duration*1e3;s<c?this._runFrame(this._easeOut(s/c),n):(this._runFrame(1),this._complete())},_runFrame:function(n,s){var c=this._startPos.add(this._offset.multiplyBy(n));s&&c._round(),Me(this._el,c),this.fire("step")},_complete:function(){xe(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(n){return 1-Math.pow(1-n,this._easeOutPower)}}),de=Se.extend({options:{crs:xt,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(n,s){s=E(this,s),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(n),this._initLayout(),this._onResize=u(this._onResize,this),this._initEvents(),s.maxBounds&&this.setMaxBounds(s.maxBounds),s.zoom!==void 0&&(this._zoom=this._limitZoom(s.zoom)),s.center&&s.zoom!==void 0&&this.setView(ne(s.center),s.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=zi&&G.any3d&&!G.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),ie(this._proxy,qd,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(n,s,c){if(s=s===void 0?this._zoom:this._limitZoom(s),n=this._limitCenter(ne(n),s,this.options.maxBounds),c=c||{},this._stop(),this._loaded&&!c.reset&&c!==!0){c.animate!==void 0&&(c.zoom=o({animate:c.animate},c.zoom),c.pan=o({animate:c.animate,duration:c.duration},c.pan));var d=this._zoom!==s?this._tryAnimatedZoom&&this._tryAnimatedZoom(n,s,c.zoom):this._tryAnimatedPan(n,c.pan);if(d)return clearTimeout(this._sizeTimer),this}return this._resetView(n,s,c.pan&&c.pan.noMoveStart),this},setZoom:function(n,s){return this._loaded?this.setView(this.getCenter(),n,{zoom:s}):(this._zoom=n,this)},zoomIn:function(n,s){return n=n||(G.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+n,s)},zoomOut:function(n,s){return n=n||(G.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-n,s)},setZoomAround:function(n,s,c){var d=this.getZoomScale(s),p=this.getSize().divideBy(2),v=n instanceof M?n:this.latLngToContainerPoint(n),k=v.subtract(p).multiplyBy(1-1/d),T=this.containerPointToLatLng(p.add(k));return this.setView(T,s,{zoom:c})},_getBoundsCenterZoom:function(n,s){s=s||{},n=n.getBounds?n.getBounds():ue(n);var c=U(s.paddingTopLeft||s.padding||[0,0]),d=U(s.paddingBottomRight||s.padding||[0,0]),p=this.getBoundsZoom(n,!1,c.add(d));if(p=typeof s.maxZoom=="number"?Math.min(s.maxZoom,p):p,p===1/0)return{center:n.getCenter(),zoom:p};var v=d.subtract(c).divideBy(2),k=this.project(n.getSouthWest(),p),T=this.project(n.getNorthEast(),p),O=this.unproject(k.add(T).divideBy(2).add(v),p);return{center:O,zoom:p}},fitBounds:function(n,s){if(n=ue(n),!n.isValid())throw new Error("Bounds are not valid.");var c=this._getBoundsCenterZoom(n,s);return this.setView(c.center,c.zoom,s)},fitWorld:function(n){return this.fitBounds([[-90,-180],[90,180]],n)},panTo:function(n,s){return this.setView(n,this._zoom,{pan:s})},panBy:function(n,s){if(n=U(n).round(),s=s||{},!n.x&&!n.y)return this.fire("moveend");if(s.animate!==!0&&!this.getSize().contains(n))return this._resetView(this.unproject(this.project(this.getCenter()).add(n)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new ef,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),s.noMoveStart||this.fire("movestart"),s.animate!==!1){se(this._mapPane,"leaflet-pan-anim");var c=this._getMapPanePos().subtract(n).round();this._panAnim.run(this._mapPane,c,s.duration||.25,s.easeLinearity)}else this._rawPanBy(n),this.fire("move").fire("moveend");return this},flyTo:function(n,s,c){if(c=c||{},c.animate===!1||!G.any3d)return this.setView(n,s,c);this._stop();var d=this.project(this.getCenter()),p=this.project(n),v=this.getSize(),k=this._zoom;n=ne(n),s=s===void 0?k:s;var T=Math.max(v.x,v.y),O=T*this.getZoomScale(k,s),I=p.distanceTo(d)||1,Z=1.42,X=Z*Z;function le(Ae){var yo=Ae?-1:1,vx=Ae?O:T,yx=O*O-T*T+yo*X*X*I*I,xx=2*vx*X*I,zl=yx/xx,Mf=Math.sqrt(zl*zl+1)-zl,_x=Mf<1e-9?-18:Math.log(Mf);return _x}function st(Ae){return(Math.exp(Ae)-Math.exp(-Ae))/2}function Ue(Ae){return(Math.exp(Ae)+Math.exp(-Ae))/2}function Et(Ae){return st(Ae)/Ue(Ae)}var ut=le(0);function Ur(Ae){return T*(Ue(ut)/Ue(ut+Z*Ae))}function hx(Ae){return T*(Ue(ut)*Et(ut+Z*Ae)-st(ut))/X}function px(Ae){return 1-Math.pow(1-Ae,1.5)}var mx=Date.now(),Of=(le(1)-ut)/Z,gx=c.duration?1e3*c.duration:1e3*Of*.8;function Rf(){var Ae=(Date.now()-mx)/gx,yo=px(Ae)*Of;Ae<=1?(this._flyToFrame=oe(Rf,this),this._move(this.unproject(d.add(p.subtract(d).multiplyBy(hx(yo)/I)),k),this.getScaleZoom(T/Ur(yo),k),{flyTo:!0})):this._move(n,s)._moveEnd(!0)}return this._moveStart(!0,c.noMoveStart),Rf.call(this),this},flyToBounds:function(n,s){var c=this._getBoundsCenterZoom(n,s);return this.flyTo(c.center,c.zoom,s)},setMaxBounds:function(n){return n=ue(n),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),n.isValid()?(this.options.maxBounds=n,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(n){var s=this.options.minZoom;return this.options.minZoom=n,this._loaded&&s!==n&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(n):this},setMaxZoom:function(n){var s=this.options.maxZoom;return this.options.maxZoom=n,this._loaded&&s!==n&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(n):this},panInsideBounds:function(n,s){this._enforcingBounds=!0;var c=this.getCenter(),d=this._limitCenter(c,this._zoom,ue(n));return c.equals(d)||this.panTo(d,s),this._enforcingBounds=!1,this},panInside:function(n,s){s=s||{};var c=U(s.paddingTopLeft||s.padding||[0,0]),d=U(s.paddingBottomRight||s.padding||[0,0]),p=this.project(this.getCenter()),v=this.project(n),k=this.getPixelBounds(),T=Q([k.min.add(c),k.max.subtract(d)]),O=T.getSize();if(!T.contains(v)){this._enforcingBounds=!0;var I=v.subtract(T.getCenter()),Z=T.extend(v).getSize().subtract(O);p.x+=I.x<0?-Z.x:Z.x,p.y+=I.y<0?-Z.y:Z.y,this.panTo(this.unproject(p),s),this._enforcingBounds=!1}return this},invalidateSize:function(n){if(!this._loaded)return this;n=o({animate:!1,pan:!0},n===!0?{animate:!0}:n);var s=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var c=this.getSize(),d=s.divideBy(2).round(),p=c.divideBy(2).round(),v=d.subtract(p);return!v.x&&!v.y?this:(n.animate&&n.pan?this.panBy(v):(n.pan&&this._rawPanBy(v),this.fire("move"),n.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(u(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:s,newSize:c}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(n){if(n=this._locateOptions=o({timeout:1e4,watch:!1},n),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var s=u(this._handleGeolocationResponse,this),c=u(this._handleGeolocationError,this);return n.watch?this._locationWatchId=navigator.geolocation.watchPosition(s,c,n):navigator.geolocation.getCurrentPosition(s,c,n),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(n){if(this._container._leaflet_id){var s=n.code,c=n.message||(s===1?"permission denied":s===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:s,message:"Geolocation error: "+c+"."})}},_handleGeolocationResponse:function(n){if(this._container._leaflet_id){var s=n.coords.latitude,c=n.coords.longitude,d=new ae(s,c),p=d.toBounds(n.coords.accuracy*2),v=this._locateOptions;if(v.setView){var k=this.getBoundsZoom(p);this.setView(d,v.maxZoom?Math.min(k,v.maxZoom):k)}var T={latlng:d,bounds:p,timestamp:n.timestamp};for(var O in n.coords)typeof n.coords[O]=="number"&&(T[O]=n.coords[O]);this.fire("locationfound",T)}},addHandler:function(n,s){if(!s)return this;var c=this[n]=new s(this);return this._handlers.push(c),this.options[n]&&c.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),je(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(xe(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var n;for(n in this._layers)this._layers[n].remove();for(n in this._panes)je(this._panes[n]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(n,s){var c="leaflet-pane"+(n?" leaflet-"+n.replace("Pane","")+"-pane":""),d=he("div",c,s||this._mapPane);return n&&(this._panes[n]=d),d},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var n=this.getPixelBounds(),s=this.unproject(n.getBottomLeft()),c=this.unproject(n.getTopRight());return new ge(s,c)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(n,s,c){n=ue(n),c=U(c||[0,0]);var d=this.getZoom()||0,p=this.getMinZoom(),v=this.getMaxZoom(),k=n.getNorthWest(),T=n.getSouthEast(),O=this.getSize().subtract(c),I=Q(this.project(T,d),this.project(k,d)).getSize(),Z=G.any3d?this.options.zoomSnap:1,X=O.x/I.x,le=O.y/I.y,st=s?Math.max(X,le):Math.min(X,le);return d=this.getScaleZoom(st,d),Z&&(d=Math.round(d/(Z/100))*(Z/100),d=s?Math.ceil(d/Z)*Z:Math.floor(d/Z)*Z),Math.max(p,Math.min(v,d))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new M(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(n,s){var c=this._getTopLeftPoint(n,s);return new q(c,c.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(n){return this.options.crs.getProjectedBounds(n===void 0?this.getZoom():n)},getPane:function(n){return typeof n=="string"?this._panes[n]:n},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(n,s){var c=this.options.crs;return s=s===void 0?this._zoom:s,c.scale(n)/c.scale(s)},getScaleZoom:function(n,s){var c=this.options.crs;s=s===void 0?this._zoom:s;var d=c.zoom(n*c.scale(s));return isNaN(d)?1/0:d},project:function(n,s){return s=s===void 0?this._zoom:s,this.options.crs.latLngToPoint(ne(n),s)},unproject:function(n,s){return s=s===void 0?this._zoom:s,this.options.crs.pointToLatLng(U(n),s)},layerPointToLatLng:function(n){var s=U(n).add(this.getPixelOrigin());return this.unproject(s)},latLngToLayerPoint:function(n){var s=this.project(ne(n))._round();return s._subtract(this.getPixelOrigin())},wrapLatLng:function(n){return this.options.crs.wrapLatLng(ne(n))},wrapLatLngBounds:function(n){return this.options.crs.wrapLatLngBounds(ue(n))},distance:function(n,s){return this.options.crs.distance(ne(n),ne(s))},containerPointToLayerPoint:function(n){return U(n).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(n){return U(n).add(this._getMapPanePos())},containerPointToLatLng:function(n){var s=this.containerPointToLayerPoint(U(n));return this.layerPointToLatLng(s)},latLngToContainerPoint:function(n){return this.layerPointToContainerPoint(this.latLngToLayerPoint(ne(n)))},mouseEventToContainerPoint:function(n){return Xd(n,this._container)},mouseEventToLayerPoint:function(n){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(n))},mouseEventToLatLng:function(n){return this.layerPointToLatLng(this.mouseEventToLayerPoint(n))},_initContainer:function(n){var s=this._container=Gd(n);if(s){if(s._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");ie(s,"scroll",this._onScroll,this),this._containerId=h(s)},_initLayout:function(){var n=this._container;this._fadeAnimated=this.options.fadeAnimation&&G.any3d,se(n,"leaflet-container"+(G.touch?" leaflet-touch":"")+(G.retina?" leaflet-retina":"")+(G.ielt9?" leaflet-oldie":"")+(G.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var s=Ti(n,"position");s!=="absolute"&&s!=="relative"&&s!=="fixed"&&s!=="sticky"&&(n.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var n=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Me(this._mapPane,new M(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(se(n.markerPane,"leaflet-zoom-hide"),se(n.shadowPane,"leaflet-zoom-hide"))},_resetView:function(n,s,c){Me(this._mapPane,new M(0,0));var d=!this._loaded;this._loaded=!0,s=this._limitZoom(s),this.fire("viewprereset");var p=this._zoom!==s;this._moveStart(p,c)._move(n,s)._moveEnd(p),this.fire("viewreset"),d&&this.fire("load")},_moveStart:function(n,s){return n&&this.fire("zoomstart"),s||this.fire("movestart"),this},_move:function(n,s,c,d){s===void 0&&(s=this._zoom);var p=this._zoom!==s;return this._zoom=s,this._lastCenter=n,this._pixelOrigin=this._getNewPixelOrigin(n),d?c&&c.pinch&&this.fire("zoom",c):((p||c&&c.pinch)&&this.fire("zoom",c),this.fire("move",c)),this},_moveEnd:function(n){return n&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return xe(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(n){Me(this._mapPane,this._getMapPanePos().subtract(n))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(n){this._targets={},this._targets[h(this._container)]=this;var s=n?ve:ie;s(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&s(window,"resize",this._onResize,this),G.any3d&&this.options.transform3DLimit&&(n?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){xe(this._resizeRequest),this._resizeRequest=oe(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var n=this._getMapPanePos();Math.max(Math.abs(n.x),Math.abs(n.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(n,s){for(var c=[],d,p=s==="mouseout"||s==="mouseover",v=n.target||n.srcElement,k=!1;v;){if(d=this._targets[h(v)],d&&(s==="click"||s==="preclick")&&this._draggableMoved(d)){k=!0;break}if(d&&d.listens(s,!0)&&(p&&!_l(v,n)||(c.push(d),p))||v===this._container)break;v=v.parentNode}return!c.length&&!k&&!p&&this.listens(s,!0)&&(c=[this]),c},_isClickDisabled:function(n){for(;n&&n!==this._container;){if(n._leaflet_disable_click)return!0;n=n.parentNode}},_handleDOMEvent:function(n){var s=n.target||n.srcElement;if(!(!this._loaded||s._leaflet_disable_events||n.type==="click"&&this._isClickDisabled(s))){var c=n.type;c==="mousedown"&&pl(s),this._fireDOMEvent(n,c)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(n,s,c){if(n.type==="click"){var d=o({},n);d.type="preclick",this._fireDOMEvent(d,d.type,c)}var p=this._findEventTargets(n,s);if(c){for(var v=[],k=0;k<c.length;k++)c[k].listens(s,!0)&&v.push(c[k]);p=v.concat(p)}if(p.length){s==="contextmenu"&&Ve(n);var T=p[0],O={originalEvent:n};if(n.type!=="keypress"&&n.type!=="keydown"&&n.type!=="keyup"){var I=T.getLatLng&&(!T._radius||T._radius<=10);O.containerPoint=I?this.latLngToContainerPoint(T.getLatLng()):this.mouseEventToContainerPoint(n),O.layerPoint=this.containerPointToLayerPoint(O.containerPoint),O.latlng=I?T.getLatLng():this.layerPointToLatLng(O.layerPoint)}for(k=0;k<p.length;k++)if(p[k].fire(s,O,!0),O.originalEvent._stopped||p[k].options.bubblingMouseEvents===!1&&j(this._mouseEvents,s)!==-1)return}},_draggableMoved:function(n){return n=n.dragging&&n.dragging.enabled()?n:this,n.dragging&&n.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var n=0,s=this._handlers.length;n<s;n++)this._handlers[n].disable()},whenReady:function(n,s){return this._loaded?n.call(s||this,{target:this}):this.on("load",n,s),this},_getMapPanePos:function(){return rr(this._mapPane)||new M(0,0)},_moved:function(){var n=this._getMapPanePos();return n&&!n.equals([0,0])},_getTopLeftPoint:function(n,s){var c=n&&s!==void 0?this._getNewPixelOrigin(n,s):this.getPixelOrigin();return c.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(n,s){var c=this.getSize()._divideBy(2);return this.project(n,s)._subtract(c)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(n,s,c){var d=this._getNewPixelOrigin(c,s);return this.project(n,s)._subtract(d)},_latLngBoundsToNewLayerBounds:function(n,s,c){var d=this._getNewPixelOrigin(c,s);return Q([this.project(n.getSouthWest(),s)._subtract(d),this.project(n.getNorthWest(),s)._subtract(d),this.project(n.getSouthEast(),s)._subtract(d),this.project(n.getNorthEast(),s)._subtract(d)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(n){return this.latLngToLayerPoint(n).subtract(this._getCenterLayerPoint())},_limitCenter:function(n,s,c){if(!c)return n;var d=this.project(n,s),p=this.getSize().divideBy(2),v=new q(d.subtract(p),d.add(p)),k=this._getBoundsOffset(v,c,s);return Math.abs(k.x)<=1&&Math.abs(k.y)<=1?n:this.unproject(d.add(k),s)},_limitOffset:function(n,s){if(!s)return n;var c=this.getPixelBounds(),d=new q(c.min.add(n),c.max.add(n));return n.add(this._getBoundsOffset(d,s))},_getBoundsOffset:function(n,s,c){var d=Q(this.project(s.getNorthEast(),c),this.project(s.getSouthWest(),c)),p=d.min.subtract(n.min),v=d.max.subtract(n.max),k=this._rebound(p.x,-v.x),T=this._rebound(p.y,-v.y);return new M(k,T)},_rebound:function(n,s){return n+s>0?Math.round(n-s)/2:Math.max(0,Math.ceil(n))-Math.max(0,Math.floor(s))},_limitZoom:function(n){var s=this.getMinZoom(),c=this.getMaxZoom(),d=G.any3d?this.options.zoomSnap:1;return d&&(n=Math.round(n/d)*d),Math.max(s,Math.min(c,n))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){Te(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(n,s){var c=this._getCenterOffset(n)._trunc();return(s&&s.animate)!==!0&&!this.getSize().contains(c)?!1:(this.panBy(c,s),!0)},_createAnimProxy:function(){var n=this._proxy=he("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(n),this.on("zoomanim",function(s){var c=al,d=this._proxy.style[c];nr(this._proxy,this.project(s.center,s.zoom),this.getZoomScale(s.zoom,1)),d===this._proxy.style[c]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){je(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var n=this.getCenter(),s=this.getZoom();nr(this._proxy,this.project(n,s),this.getZoomScale(s,1))},_catchTransitionEnd:function(n){this._animatingZoom&&n.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(n,s,c){if(this._animatingZoom)return!0;if(c=c||{},!this._zoomAnimated||c.animate===!1||this._nothingToAnimate()||Math.abs(s-this._zoom)>this.options.zoomAnimationThreshold)return!1;var d=this.getZoomScale(s),p=this._getCenterOffset(n)._divideBy(1-1/d);return c.animate!==!0&&!this.getSize().contains(p)?!1:(oe(function(){this._moveStart(!0,c.noMoveStart||!1)._animateZoom(n,s,!0)},this),!0)},_animateZoom:function(n,s,c,d){this._mapPane&&(c&&(this._animatingZoom=!0,this._animateToCenter=n,this._animateToZoom=s,se(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:n,zoom:s,noUpdate:d}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(u(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Te(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Ly(n,s){return new de(n,s)}var Ht=_e.extend({options:{position:"topright"},initialize:function(n){E(this,n)},getPosition:function(){return this.options.position},setPosition:function(n){var s=this._map;return s&&s.removeControl(this),this.options.position=n,s&&s.addControl(this),this},getContainer:function(){return this._container},addTo:function(n){this.remove(),this._map=n;var s=this._container=this.onAdd(n),c=this.getPosition(),d=n._controlCorners[c];return se(s,"leaflet-control"),c.indexOf("bottom")!==-1?d.insertBefore(s,d.firstChild):d.appendChild(s),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(je(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(n){this._map&&n&&n.screenX>0&&n.screenY>0&&this._map.getContainer().focus()}}),Ii=function(n){return new Ht(n)};de.include({addControl:function(n){return n.addTo(this),this},removeControl:function(n){return n.remove(),this},_initControlPos:function(){var n=this._controlCorners={},s="leaflet-",c=this._controlContainer=he("div",s+"control-container",this._container);function d(p,v){var k=s+p+" "+s+v;n[p+v]=he("div",k,c)}d("top","left"),d("top","right"),d("bottom","left"),d("bottom","right")},_clearControlPos:function(){for(var n in this._controlCorners)je(this._controlCorners[n]);je(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var tf=Ht.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(n,s,c,d){return c<d?-1:d<c?1:0}},initialize:function(n,s,c){E(this,c),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var d in n)this._addLayer(n[d],d);for(d in s)this._addLayer(s[d],d,!0)},onAdd:function(n){this._initLayout(),this._update(),this._map=n,n.on("zoomend",this._checkDisabledLayers,this);for(var s=0;s<this._layers.length;s++)this._layers[s].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(n){return Ht.prototype.addTo.call(this,n),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var n=0;n<this._layers.length;n++)this._layers[n].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(n,s){return this._addLayer(n,s),this._map?this._update():this},addOverlay:function(n,s){return this._addLayer(n,s,!0),this._map?this._update():this},removeLayer:function(n){n.off("add remove",this._onLayerChange,this);var s=this._getLayer(h(n));return s&&this._layers.splice(this._layers.indexOf(s),1),this._map?this._update():this},expand:function(){se(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var n=this._map.getSize().y-(this._container.offsetTop+50);return n<this._section.clientHeight?(se(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=n+"px"):Te(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return Te(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var n="leaflet-control-layers",s=this._container=he("div",n),c=this.options.collapsed;s.setAttribute("aria-haspopup",!0),Ai(s),xl(s);var d=this._section=he("section",n+"-list");c&&(this._map.on("click",this.collapse,this),ie(s,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var p=this._layersLink=he("a",n+"-toggle",s);p.href="#",p.title="Layers",p.setAttribute("role","button"),ie(p,{keydown:function(v){v.keyCode===13&&this._expandSafely()},click:function(v){Ve(v),this._expandSafely()}},this),c||this.expand(),this._baseLayersList=he("div",n+"-base",d),this._separator=he("div",n+"-separator",d),this._overlaysList=he("div",n+"-overlays",d),s.appendChild(d)},_getLayer:function(n){for(var s=0;s<this._layers.length;s++)if(this._layers[s]&&h(this._layers[s].layer)===n)return this._layers[s]},_addLayer:function(n,s,c){this._map&&n.on("add remove",this._onLayerChange,this),this._layers.push({layer:n,name:s,overlay:c}),this.options.sortLayers&&this._layers.sort(u(function(d,p){return this.options.sortFunction(d.layer,p.layer,d.name,p.name)},this)),this.options.autoZIndex&&n.setZIndex&&(this._lastZIndex++,n.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;to(this._baseLayersList),to(this._overlaysList),this._layerControlInputs=[];var n,s,c,d,p=0;for(c=0;c<this._layers.length;c++)d=this._layers[c],this._addItem(d),s=s||d.overlay,n=n||!d.overlay,p+=d.overlay?0:1;return this.options.hideSingleBase&&(n=n&&p>1,this._baseLayersList.style.display=n?"":"none"),this._separator.style.display=s&&n?"":"none",this},_onLayerChange:function(n){this._handlingClick||this._update();var s=this._getLayer(h(n.target)),c=s.overlay?n.type==="add"?"overlayadd":"overlayremove":n.type==="add"?"baselayerchange":null;c&&this._map.fire(c,s)},_createRadioElement:function(n,s){var c='<input type="radio" class="leaflet-control-layers-selector" name="'+n+'"'+(s?' checked="checked"':"")+"/>",d=document.createElement("div");return d.innerHTML=c,d.firstChild},_addItem:function(n){var s=document.createElement("label"),c=this._map.hasLayer(n.layer),d;n.overlay?(d=document.createElement("input"),d.type="checkbox",d.className="leaflet-control-layers-selector",d.defaultChecked=c):d=this._createRadioElement("leaflet-base-layers_"+h(this),c),this._layerControlInputs.push(d),d.layerId=h(n.layer),ie(d,"click",this._onInputClick,this);var p=document.createElement("span");p.innerHTML=" "+n.name;var v=document.createElement("span");s.appendChild(v),v.appendChild(d),v.appendChild(p);var k=n.overlay?this._overlaysList:this._baseLayersList;return k.appendChild(s),this._checkDisabledLayers(),s},_onInputClick:function(){if(!this._preventClick){var n=this._layerControlInputs,s,c,d=[],p=[];this._handlingClick=!0;for(var v=n.length-1;v>=0;v--)s=n[v],c=this._getLayer(s.layerId).layer,s.checked?d.push(c):s.checked||p.push(c);for(v=0;v<p.length;v++)this._map.hasLayer(p[v])&&this._map.removeLayer(p[v]);for(v=0;v<d.length;v++)this._map.hasLayer(d[v])||this._map.addLayer(d[v]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var n=this._layerControlInputs,s,c,d=this._map.getZoom(),p=n.length-1;p>=0;p--)s=n[p],c=this._getLayer(s.layerId).layer,s.disabled=c.options.minZoom!==void 0&&d<c.options.minZoom||c.options.maxZoom!==void 0&&d>c.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var n=this._section;this._preventClick=!0,ie(n,"click",Ve),this.expand();var s=this;setTimeout(function(){ve(n,"click",Ve),s._preventClick=!1})}}),zy=function(n,s,c){return new tf(n,s,c)},wl=Ht.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(n){var s="leaflet-control-zoom",c=he("div",s+" leaflet-bar"),d=this.options;return this._zoomInButton=this._createButton(d.zoomInText,d.zoomInTitle,s+"-in",c,this._zoomIn),this._zoomOutButton=this._createButton(d.zoomOutText,d.zoomOutTitle,s+"-out",c,this._zoomOut),this._updateDisabled(),n.on("zoomend zoomlevelschange",this._updateDisabled,this),c},onRemove:function(n){n.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(n){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(n.shiftKey?3:1))},_zoomOut:function(n){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(n.shiftKey?3:1))},_createButton:function(n,s,c,d,p){var v=he("a",c,d);return v.innerHTML=n,v.href="#",v.title=s,v.setAttribute("role","button"),v.setAttribute("aria-label",s),Ai(v),ie(v,"click",sr),ie(v,"click",p,this),ie(v,"click",this._refocusOnMap,this),v},_updateDisabled:function(){var n=this._map,s="leaflet-disabled";Te(this._zoomInButton,s),Te(this._zoomOutButton,s),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||n._zoom===n.getMinZoom())&&(se(this._zoomOutButton,s),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||n._zoom===n.getMaxZoom())&&(se(this._zoomInButton,s),this._zoomInButton.setAttribute("aria-disabled","true"))}});de.mergeOptions({zoomControl:!0}),de.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new wl,this.addControl(this.zoomControl))});var Ty=function(n){return new wl(n)},nf=Ht.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(n){var s="leaflet-control-scale",c=he("div",s),d=this.options;return this._addScales(d,s+"-line",c),n.on(d.updateWhenIdle?"moveend":"move",this._update,this),n.whenReady(this._update,this),c},onRemove:function(n){n.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(n,s,c){n.metric&&(this._mScale=he("div",s,c)),n.imperial&&(this._iScale=he("div",s,c))},_update:function(){var n=this._map,s=n.getSize().y/2,c=n.distance(n.containerPointToLatLng([0,s]),n.containerPointToLatLng([this.options.maxWidth,s]));this._updateScales(c)},_updateScales:function(n){this.options.metric&&n&&this._updateMetric(n),this.options.imperial&&n&&this._updateImperial(n)},_updateMetric:function(n){var s=this._getRoundNum(n),c=s<1e3?s+" m":s/1e3+" km";this._updateScale(this._mScale,c,s/n)},_updateImperial:function(n){var s=n*3.2808399,c,d,p;s>5280?(c=s/5280,d=this._getRoundNum(c),this._updateScale(this._iScale,d+" mi",d/c)):(p=this._getRoundNum(s),this._updateScale(this._iScale,p+" ft",p/s))},_updateScale:function(n,s,c){n.style.width=Math.round(this.options.maxWidth*c)+"px",n.innerHTML=s},_getRoundNum:function(n){var s=Math.pow(10,(Math.floor(n)+"").length-1),c=n/s;return c=c>=10?10:c>=5?5:c>=3?3:c>=2?2:1,s*c}}),Oy=function(n){return new nf(n)},Ry='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',bl=Ht.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(G.inlineSvg?Ry+" ":"")+"Leaflet</a>"},initialize:function(n){E(this,n),this._attributions={}},onAdd:function(n){n.attributionControl=this,this._container=he("div","leaflet-control-attribution"),Ai(this._container);for(var s in n._layers)n._layers[s].getAttribution&&this.addAttribution(n._layers[s].getAttribution());return this._update(),n.on("layeradd",this._addAttribution,this),this._container},onRemove:function(n){n.off("layeradd",this._addAttribution,this)},_addAttribution:function(n){n.layer.getAttribution&&(this.addAttribution(n.layer.getAttribution()),n.layer.once("remove",function(){this.removeAttribution(n.layer.getAttribution())},this))},setPrefix:function(n){return this.options.prefix=n,this._update(),this},addAttribution:function(n){return n?(this._attributions[n]||(this._attributions[n]=0),this._attributions[n]++,this._update(),this):this},removeAttribution:function(n){return n?(this._attributions[n]&&(this._attributions[n]--,this._update()),this):this},_update:function(){if(this._map){var n=[];for(var s in this._attributions)this._attributions[s]&&n.push(s);var c=[];this.options.prefix&&c.push(this.options.prefix),n.length&&c.push(n.join(", ")),this._container.innerHTML=c.join(' <span aria-hidden="true">|</span> ')}}});de.mergeOptions({attributionControl:!0}),de.addInitHook(function(){this.options.attributionControl&&new bl().addTo(this)});var My=function(n){return new bl(n)};Ht.Layers=tf,Ht.Zoom=wl,Ht.Scale=nf,Ht.Attribution=bl,Ii.layers=zy,Ii.zoom=Ty,Ii.scale=Oy,Ii.attribution=My;var en=_e.extend({initialize:function(n){this._map=n},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});en.addTo=function(n,s){return n.addHandler(s,this),this};var Ay={Events:pe},rf=G.touch?"touchstart mousedown":"mousedown",Nn=Se.extend({options:{clickTolerance:3},initialize:function(n,s,c,d){E(this,d),this._element=n,this._dragStartTarget=s||n,this._preventOutline=c},enable:function(){this._enabled||(ie(this._dragStartTarget,rf,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Nn._dragging===this&&this.finishDrag(!0),ve(this._dragStartTarget,rf,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(n){if(this._enabled&&(this._moved=!1,!ll(this._element,"leaflet-zoom-anim"))){if(n.touches&&n.touches.length!==1){Nn._dragging===this&&this.finishDrag();return}if(!(Nn._dragging||n.shiftKey||n.which!==1&&n.button!==1&&!n.touches)&&(Nn._dragging=this,this._preventOutline&&pl(this._element),dl(),Oi(),!this._moving)){this.fire("down");var s=n.touches?n.touches[0]:n,c=Kd(this._element);this._startPoint=new M(s.clientX,s.clientY),this._startPos=rr(this._element),this._parentScale=ml(c);var d=n.type==="mousedown";ie(document,d?"mousemove":"touchmove",this._onMove,this),ie(document,d?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(n){if(this._enabled){if(n.touches&&n.touches.length>1){this._moved=!0;return}var s=n.touches&&n.touches.length===1?n.touches[0]:n,c=new M(s.clientX,s.clientY)._subtract(this._startPoint);!c.x&&!c.y||Math.abs(c.x)+Math.abs(c.y)<this.options.clickTolerance||(c.x/=this._parentScale.x,c.y/=this._parentScale.y,Ve(n),this._moved||(this.fire("dragstart"),this._moved=!0,se(document.body,"leaflet-dragging"),this._lastTarget=n.target||n.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),se(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(c),this._moving=!0,this._lastEvent=n,this._updatePosition())}},_updatePosition:function(){var n={originalEvent:this._lastEvent};this.fire("predrag",n),Me(this._element,this._newPos),this.fire("drag",n)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(n){Te(document.body,"leaflet-dragging"),this._lastTarget&&(Te(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),ve(document,"mousemove touchmove",this._onMove,this),ve(document,"mouseup touchend touchcancel",this._onUp,this),fl(),Ri();var s=this._moved&&this._moving;this._moving=!1,Nn._dragging=!1,s&&this.fire("dragend",{noInertia:n,distance:this._newPos.distanceTo(this._startPos)})}});function sf(n,s,c){var d,p=[1,4,2,8],v,k,T,O,I,Z,X,le;for(v=0,Z=n.length;v<Z;v++)n[v]._code=or(n[v],s);for(T=0;T<4;T++){for(X=p[T],d=[],v=0,Z=n.length,k=Z-1;v<Z;k=v++)O=n[v],I=n[k],O._code&X?I._code&X||(le=oo(I,O,X,s,c),le._code=or(le,s),d.push(le)):(I._code&X&&(le=oo(I,O,X,s,c),le._code=or(le,s),d.push(le)),d.push(O));n=d}return n}function of(n,s){var c,d,p,v,k,T,O,I,Z;if(!n||n.length===0)throw new Error("latlngs not passed");Ct(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var X=ne([0,0]),le=ue(n),st=le.getNorthWest().distanceTo(le.getSouthWest())*le.getNorthEast().distanceTo(le.getNorthWest());st<1700&&(X=kl(n));var Ue=n.length,Et=[];for(c=0;c<Ue;c++){var ut=ne(n[c]);Et.push(s.project(ne([ut.lat-X.lat,ut.lng-X.lng])))}for(T=O=I=0,c=0,d=Ue-1;c<Ue;d=c++)p=Et[c],v=Et[d],k=p.y*v.x-v.y*p.x,O+=(p.x+v.x)*k,I+=(p.y+v.y)*k,T+=k*3;T===0?Z=Et[0]:Z=[O/T,I/T];var Ur=s.unproject(U(Z));return ne([Ur.lat+X.lat,Ur.lng+X.lng])}function kl(n){for(var s=0,c=0,d=0,p=0;p<n.length;p++){var v=ne(n[p]);s+=v.lat,c+=v.lng,d++}return ne([s/d,c/d])}var Iy={__proto__:null,clipPolygon:sf,polygonCenter:of,centroid:kl};function af(n,s){if(!s||!n.length)return n.slice();var c=s*s;return n=Fy(n,c),n=By(n,c),n}function lf(n,s,c){return Math.sqrt(Di(n,s,c,!0))}function Dy(n,s,c){return Di(n,s,c)}function By(n,s){var c=n.length,d=typeof Uint8Array<"u"?Uint8Array:Array,p=new d(c);p[0]=p[c-1]=1,Sl(n,p,s,0,c-1);var v,k=[];for(v=0;v<c;v++)p[v]&&k.push(n[v]);return k}function Sl(n,s,c,d,p){var v=0,k,T,O;for(T=d+1;T<=p-1;T++)O=Di(n[T],n[d],n[p],!0),O>v&&(k=T,v=O);v>c&&(s[k]=1,Sl(n,s,c,d,k),Sl(n,s,c,k,p))}function Fy(n,s){for(var c=[n[0]],d=1,p=0,v=n.length;d<v;d++)Uy(n[d],n[p])>s&&(c.push(n[d]),p=d);return p<v-1&&c.push(n[v-1]),c}var cf;function uf(n,s,c,d,p){var v=d?cf:or(n,c),k=or(s,c),T,O,I;for(cf=k;;){if(!(v|k))return[n,s];if(v&k)return!1;T=v||k,O=oo(n,s,T,c,p),I=or(O,c),T===v?(n=O,v=I):(s=O,k=I)}}function oo(n,s,c,d,p){var v=s.x-n.x,k=s.y-n.y,T=d.min,O=d.max,I,Z;return c&8?(I=n.x+v*(O.y-n.y)/k,Z=O.y):c&4?(I=n.x+v*(T.y-n.y)/k,Z=T.y):c&2?(I=O.x,Z=n.y+k*(O.x-n.x)/v):c&1&&(I=T.x,Z=n.y+k*(T.x-n.x)/v),new M(I,Z,p)}function or(n,s){var c=0;return n.x<s.min.x?c|=1:n.x>s.max.x&&(c|=2),n.y<s.min.y?c|=4:n.y>s.max.y&&(c|=8),c}function Uy(n,s){var c=s.x-n.x,d=s.y-n.y;return c*c+d*d}function Di(n,s,c,d){var p=s.x,v=s.y,k=c.x-p,T=c.y-v,O=k*k+T*T,I;return O>0&&(I=((n.x-p)*k+(n.y-v)*T)/O,I>1?(p=c.x,v=c.y):I>0&&(p+=k*I,v+=T*I)),k=n.x-p,T=n.y-v,d?k*k+T*T:new M(p,v)}function Ct(n){return!w(n[0])||typeof n[0][0]!="object"&&typeof n[0][0]<"u"}function df(n){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),Ct(n)}function ff(n,s){var c,d,p,v,k,T,O,I;if(!n||n.length===0)throw new Error("latlngs not passed");Ct(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var Z=ne([0,0]),X=ue(n),le=X.getNorthWest().distanceTo(X.getSouthWest())*X.getNorthEast().distanceTo(X.getNorthWest());le<1700&&(Z=kl(n));var st=n.length,Ue=[];for(c=0;c<st;c++){var Et=ne(n[c]);Ue.push(s.project(ne([Et.lat-Z.lat,Et.lng-Z.lng])))}for(c=0,d=0;c<st-1;c++)d+=Ue[c].distanceTo(Ue[c+1])/2;if(d===0)I=Ue[0];else for(c=0,v=0;c<st-1;c++)if(k=Ue[c],T=Ue[c+1],p=k.distanceTo(T),v+=p,v>d){O=(v-d)/p,I=[T.x-O*(T.x-k.x),T.y-O*(T.y-k.y)];break}var ut=s.unproject(U(I));return ne([ut.lat+Z.lat,ut.lng+Z.lng])}var Hy={__proto__:null,simplify:af,pointToSegmentDistance:lf,closestPointOnSegment:Dy,clipSegment:uf,_getEdgeIntersection:oo,_getBitCode:or,_sqClosestPointOnSegment:Di,isFlat:Ct,_flat:df,polylineCenter:ff},jl={project:function(n){return new M(n.lng,n.lat)},unproject:function(n){return new ae(n.y,n.x)},bounds:new q([-180,-90],[180,90])},Pl={R:6378137,R_MINOR:6356752314245179e-9,bounds:new q([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(n){var s=Math.PI/180,c=this.R,d=n.lat*s,p=this.R_MINOR/c,v=Math.sqrt(1-p*p),k=v*Math.sin(d),T=Math.tan(Math.PI/4-d/2)/Math.pow((1-k)/(1+k),v/2);return d=-c*Math.log(Math.max(T,1e-10)),new M(n.lng*s*c,d)},unproject:function(n){for(var s=180/Math.PI,c=this.R,d=this.R_MINOR/c,p=Math.sqrt(1-d*d),v=Math.exp(-n.y/c),k=Math.PI/2-2*Math.atan(v),T=0,O=.1,I;T<15&&Math.abs(O)>1e-7;T++)I=p*Math.sin(k),I=Math.pow((1-I)/(1+I),p/2),O=Math.PI/2-2*Math.atan(v*I)-k,k+=O;return new ae(k*s,n.x*s/c)}},Zy={__proto__:null,LonLat:jl,Mercator:Pl,SphericalMercator:zr},Wy=o({},ze,{code:"EPSG:3395",projection:Pl,transformation:function(){var n=.5/(Math.PI*Pl.R);return $e(n,.5,-n,.5)}()}),hf=o({},ze,{code:"EPSG:4326",projection:jl,transformation:$e(1/180,1,-1/180,.5)}),$y=o({},re,{projection:jl,transformation:$e(1,0,-1,0),scale:function(n){return Math.pow(2,n)},zoom:function(n){return Math.log(n)/Math.LN2},distance:function(n,s){var c=s.lng-n.lng,d=s.lat-n.lat;return Math.sqrt(c*c+d*d)},infinite:!0});re.Earth=ze,re.EPSG3395=Wy,re.EPSG3857=xt,re.EPSG900913=Bt,re.EPSG4326=hf,re.Simple=$y;var Zt=Se.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(n){return n.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(n){return n&&n.removeLayer(this),this},getPane:function(n){return this._map.getPane(n?this.options[n]||n:this.options.pane)},addInteractiveTarget:function(n){return this._map._targets[h(n)]=this,this},removeInteractiveTarget:function(n){return delete this._map._targets[h(n)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(n){var s=n.target;if(s.hasLayer(this)){if(this._map=s,this._zoomAnimated=s._zoomAnimated,this.getEvents){var c=this.getEvents();s.on(c,this),this.once("remove",function(){s.off(c,this)},this)}this.onAdd(s),this.fire("add"),s.fire("layeradd",{layer:this})}}});de.include({addLayer:function(n){if(!n._layerAdd)throw new Error("The provided object is not a Layer.");var s=h(n);return this._layers[s]?this:(this._layers[s]=n,n._mapToAdd=this,n.beforeAdd&&n.beforeAdd(this),this.whenReady(n._layerAdd,n),this)},removeLayer:function(n){var s=h(n);return this._layers[s]?(this._loaded&&n.onRemove(this),delete this._layers[s],this._loaded&&(this.fire("layerremove",{layer:n}),n.fire("remove")),n._map=n._mapToAdd=null,this):this},hasLayer:function(n){return h(n)in this._layers},eachLayer:function(n,s){for(var c in this._layers)n.call(s,this._layers[c]);return this},_addLayers:function(n){n=n?w(n)?n:[n]:[];for(var s=0,c=n.length;s<c;s++)this.addLayer(n[s])},_addZoomLimit:function(n){(!isNaN(n.options.maxZoom)||!isNaN(n.options.minZoom))&&(this._zoomBoundLayers[h(n)]=n,this._updateZoomLevels())},_removeZoomLimit:function(n){var s=h(n);this._zoomBoundLayers[s]&&(delete this._zoomBoundLayers[s],this._updateZoomLevels())},_updateZoomLevels:function(){var n=1/0,s=-1/0,c=this._getZoomSpan();for(var d in this._zoomBoundLayers){var p=this._zoomBoundLayers[d].options;n=p.minZoom===void 0?n:Math.min(n,p.minZoom),s=p.maxZoom===void 0?s:Math.max(s,p.maxZoom)}this._layersMaxZoom=s===-1/0?void 0:s,this._layersMinZoom=n===1/0?void 0:n,c!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Ar=Zt.extend({initialize:function(n,s){E(this,s),this._layers={};var c,d;if(n)for(c=0,d=n.length;c<d;c++)this.addLayer(n[c])},addLayer:function(n){var s=this.getLayerId(n);return this._layers[s]=n,this._map&&this._map.addLayer(n),this},removeLayer:function(n){var s=n in this._layers?n:this.getLayerId(n);return this._map&&this._layers[s]&&this._map.removeLayer(this._layers[s]),delete this._layers[s],this},hasLayer:function(n){var s=typeof n=="number"?n:this.getLayerId(n);return s in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(n){var s=Array.prototype.slice.call(arguments,1),c,d;for(c in this._layers)d=this._layers[c],d[n]&&d[n].apply(d,s);return this},onAdd:function(n){this.eachLayer(n.addLayer,n)},onRemove:function(n){this.eachLayer(n.removeLayer,n)},eachLayer:function(n,s){for(var c in this._layers)n.call(s,this._layers[c]);return this},getLayer:function(n){return this._layers[n]},getLayers:function(){var n=[];return this.eachLayer(n.push,n),n},setZIndex:function(n){return this.invoke("setZIndex",n)},getLayerId:function(n){return h(n)}}),Vy=function(n,s){return new Ar(n,s)},cn=Ar.extend({addLayer:function(n){return this.hasLayer(n)?this:(n.addEventParent(this),Ar.prototype.addLayer.call(this,n),this.fire("layeradd",{layer:n}))},removeLayer:function(n){return this.hasLayer(n)?(n in this._layers&&(n=this._layers[n]),n.removeEventParent(this),Ar.prototype.removeLayer.call(this,n),this.fire("layerremove",{layer:n})):this},setStyle:function(n){return this.invoke("setStyle",n)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var n=new ge;for(var s in this._layers){var c=this._layers[s];n.extend(c.getBounds?c.getBounds():c.getLatLng())}return n}}),qy=function(n,s){return new cn(n,s)},Ir=_e.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(n){E(this,n)},createIcon:function(n){return this._createIcon("icon",n)},createShadow:function(n){return this._createIcon("shadow",n)},_createIcon:function(n,s){var c=this._getIconUrl(n);if(!c){if(n==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var d=this._createImg(c,s&&s.tagName==="IMG"?s:null);return this._setIconStyles(d,n),(this.options.crossOrigin||this.options.crossOrigin==="")&&(d.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),d},_setIconStyles:function(n,s){var c=this.options,d=c[s+"Size"];typeof d=="number"&&(d=[d,d]);var p=U(d),v=U(s==="shadow"&&c.shadowAnchor||c.iconAnchor||p&&p.divideBy(2,!0));n.className="leaflet-marker-"+s+" "+(c.className||""),v&&(n.style.marginLeft=-v.x+"px",n.style.marginTop=-v.y+"px"),p&&(n.style.width=p.x+"px",n.style.height=p.y+"px")},_createImg:function(n,s){return s=s||document.createElement("img"),s.src=n,s},_getIconUrl:function(n){return G.retina&&this.options[n+"RetinaUrl"]||this.options[n+"Url"]}});function Gy(n){return new Ir(n)}var Bi=Ir.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(n){return typeof Bi.imagePath!="string"&&(Bi.imagePath=this._detectIconPath()),(this.options.imagePath||Bi.imagePath)+Ir.prototype._getIconUrl.call(this,n)},_stripUrl:function(n){var s=function(c,d,p){var v=d.exec(c);return v&&v[p]};return n=s(n,/^url\((['"])?(.+)\1\)$/,2),n&&s(n,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var n=he("div","leaflet-default-icon-path",document.body),s=Ti(n,"background-image")||Ti(n,"backgroundImage");if(document.body.removeChild(n),s=this._stripUrl(s),s)return s;var c=document.querySelector('link[href$="leaflet.css"]');return c?c.href.substring(0,c.href.length-11-1):""}}),pf=en.extend({initialize:function(n){this._marker=n},addHooks:function(){var n=this._marker._icon;this._draggable||(this._draggable=new Nn(n,n,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),se(n,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Te(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(n){var s=this._marker,c=s._map,d=this._marker.options.autoPanSpeed,p=this._marker.options.autoPanPadding,v=rr(s._icon),k=c.getPixelBounds(),T=c.getPixelOrigin(),O=Q(k.min._subtract(T).add(p),k.max._subtract(T).subtract(p));if(!O.contains(v)){var I=U((Math.max(O.max.x,v.x)-O.max.x)/(k.max.x-O.max.x)-(Math.min(O.min.x,v.x)-O.min.x)/(k.min.x-O.min.x),(Math.max(O.max.y,v.y)-O.max.y)/(k.max.y-O.max.y)-(Math.min(O.min.y,v.y)-O.min.y)/(k.min.y-O.min.y)).multiplyBy(d);c.panBy(I,{animate:!1}),this._draggable._newPos._add(I),this._draggable._startPos._add(I),Me(s._icon,this._draggable._newPos),this._onDrag(n),this._panRequest=oe(this._adjustPan.bind(this,n))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(n){this._marker.options.autoPan&&(xe(this._panRequest),this._panRequest=oe(this._adjustPan.bind(this,n)))},_onDrag:function(n){var s=this._marker,c=s._shadow,d=rr(s._icon),p=s._map.layerPointToLatLng(d);c&&Me(c,d),s._latlng=p,n.latlng=p,n.oldLatLng=this._oldLatLng,s.fire("move",n).fire("drag",n)},_onDragEnd:function(n){xe(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",n)}}),ao=Zt.extend({options:{icon:new Bi,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(n,s){E(this,s),this._latlng=ne(n)},onAdd:function(n){this._zoomAnimated=this._zoomAnimated&&n.options.markerZoomAnimation,this._zoomAnimated&&n.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(n){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&n.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(n){var s=this._latlng;return this._latlng=ne(n),this.update(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},setZIndexOffset:function(n){return this.options.zIndexOffset=n,this.update()},getIcon:function(){return this.options.icon},setIcon:function(n){return this.options.icon=n,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var n=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(n)}return this},_initIcon:function(){var n=this.options,s="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),c=n.icon.createIcon(this._icon),d=!1;c!==this._icon&&(this._icon&&this._removeIcon(),d=!0,n.title&&(c.title=n.title),c.tagName==="IMG"&&(c.alt=n.alt||"")),se(c,s),n.keyboard&&(c.tabIndex="0",c.setAttribute("role","button")),this._icon=c,n.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ie(c,"focus",this._panOnFocus,this);var p=n.icon.createShadow(this._shadow),v=!1;p!==this._shadow&&(this._removeShadow(),v=!0),p&&(se(p,s),p.alt=""),this._shadow=p,n.opacity<1&&this._updateOpacity(),d&&this.getPane().appendChild(this._icon),this._initInteraction(),p&&v&&this.getPane(n.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ve(this._icon,"focus",this._panOnFocus,this),je(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&je(this._shadow),this._shadow=null},_setPos:function(n){this._icon&&Me(this._icon,n),this._shadow&&Me(this._shadow,n),this._zIndex=n.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(n){this._icon&&(this._icon.style.zIndex=this._zIndex+n)},_animateZoom:function(n){var s=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center).round();this._setPos(s)},_initInteraction:function(){if(this.options.interactive&&(se(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),pf)){var n=this.options.draggable;this.dragging&&(n=this.dragging.enabled(),this.dragging.disable()),this.dragging=new pf(this),n&&this.dragging.enable()}},setOpacity:function(n){return this.options.opacity=n,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var n=this.options.opacity;this._icon&&Nt(this._icon,n),this._shadow&&Nt(this._shadow,n)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var n=this._map;if(n){var s=this.options.icon.options,c=s.iconSize?U(s.iconSize):U(0,0),d=s.iconAnchor?U(s.iconAnchor):U(0,0);n.panInside(this._latlng,{paddingTopLeft:d,paddingBottomRight:c.subtract(d)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function Ky(n,s){return new ao(n,s)}var Cn=Zt.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(n){this._renderer=n.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(n){return E(this,n),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&n&&Object.prototype.hasOwnProperty.call(n,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),lo=Cn.extend({options:{fill:!0,radius:10},initialize:function(n,s){E(this,s),this._latlng=ne(n),this._radius=this.options.radius},setLatLng:function(n){var s=this._latlng;return this._latlng=ne(n),this.redraw(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(n){return this.options.radius=this._radius=n,this.redraw()},getRadius:function(){return this._radius},setStyle:function(n){var s=n&&n.radius||this._radius;return Cn.prototype.setStyle.call(this,n),this.setRadius(s),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var n=this._radius,s=this._radiusY||n,c=this._clickTolerance(),d=[n+c,s+c];this._pxBounds=new q(this._point.subtract(d),this._point.add(d))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(n){return n.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function Yy(n,s){return new lo(n,s)}var Nl=lo.extend({initialize:function(n,s,c){if(typeof s=="number"&&(s=o({},c,{radius:s})),E(this,s),this._latlng=ne(n),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(n){return this._mRadius=n,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var n=[this._radius,this._radiusY||this._radius];return new ge(this._map.layerPointToLatLng(this._point.subtract(n)),this._map.layerPointToLatLng(this._point.add(n)))},setStyle:Cn.prototype.setStyle,_project:function(){var n=this._latlng.lng,s=this._latlng.lat,c=this._map,d=c.options.crs;if(d.distance===ze.distance){var p=Math.PI/180,v=this._mRadius/ze.R/p,k=c.project([s+v,n]),T=c.project([s-v,n]),O=k.add(T).divideBy(2),I=c.unproject(O).lat,Z=Math.acos((Math.cos(v*p)-Math.sin(s*p)*Math.sin(I*p))/(Math.cos(s*p)*Math.cos(I*p)))/p;(isNaN(Z)||Z===0)&&(Z=v/Math.cos(Math.PI/180*s)),this._point=O.subtract(c.getPixelOrigin()),this._radius=isNaN(Z)?0:O.x-c.project([I,n-Z]).x,this._radiusY=O.y-k.y}else{var X=d.unproject(d.project(this._latlng).subtract([this._mRadius,0]));this._point=c.latLngToLayerPoint(this._latlng),this._radius=this._point.x-c.latLngToLayerPoint(X).x}this._updateBounds()}});function Qy(n,s,c){return new Nl(n,s,c)}var un=Cn.extend({options:{smoothFactor:1,noClip:!1},initialize:function(n,s){E(this,s),this._setLatLngs(n)},getLatLngs:function(){return this._latlngs},setLatLngs:function(n){return this._setLatLngs(n),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(n){for(var s=1/0,c=null,d=Di,p,v,k=0,T=this._parts.length;k<T;k++)for(var O=this._parts[k],I=1,Z=O.length;I<Z;I++){p=O[I-1],v=O[I];var X=d(n,p,v,!0);X<s&&(s=X,c=d(n,p,v))}return c&&(c.distance=Math.sqrt(s)),c},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return ff(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(n,s){return s=s||this._defaultShape(),n=ne(n),s.push(n),this._bounds.extend(n),this.redraw()},_setLatLngs:function(n){this._bounds=new ge,this._latlngs=this._convertLatLngs(n)},_defaultShape:function(){return Ct(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(n){for(var s=[],c=Ct(n),d=0,p=n.length;d<p;d++)c?(s[d]=ne(n[d]),this._bounds.extend(s[d])):s[d]=this._convertLatLngs(n[d]);return s},_project:function(){var n=new q;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,n),this._bounds.isValid()&&n.isValid()&&(this._rawPxBounds=n,this._updateBounds())},_updateBounds:function(){var n=this._clickTolerance(),s=new M(n,n);this._rawPxBounds&&(this._pxBounds=new q([this._rawPxBounds.min.subtract(s),this._rawPxBounds.max.add(s)]))},_projectLatlngs:function(n,s,c){var d=n[0]instanceof ae,p=n.length,v,k;if(d){for(k=[],v=0;v<p;v++)k[v]=this._map.latLngToLayerPoint(n[v]),c.extend(k[v]);s.push(k)}else for(v=0;v<p;v++)this._projectLatlngs(n[v],s,c)},_clipPoints:function(){var n=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}var s=this._parts,c,d,p,v,k,T,O;for(c=0,p=0,v=this._rings.length;c<v;c++)for(O=this._rings[c],d=0,k=O.length;d<k-1;d++)T=uf(O[d],O[d+1],n,d,!0),T&&(s[p]=s[p]||[],s[p].push(T[0]),(T[1]!==O[d+1]||d===k-2)&&(s[p].push(T[1]),p++))}},_simplifyPoints:function(){for(var n=this._parts,s=this.options.smoothFactor,c=0,d=n.length;c<d;c++)n[c]=af(n[c],s)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(n,s){var c,d,p,v,k,T,O=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(c=0,v=this._parts.length;c<v;c++)for(T=this._parts[c],d=0,k=T.length,p=k-1;d<k;p=d++)if(!(!s&&d===0)&&lf(n,T[p],T[d])<=O)return!0;return!1}});function Xy(n,s){return new un(n,s)}un._flat=df;var Dr=un.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return of(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(n){var s=un.prototype._convertLatLngs.call(this,n),c=s.length;return c>=2&&s[0]instanceof ae&&s[0].equals(s[c-1])&&s.pop(),s},_setLatLngs:function(n){un.prototype._setLatLngs.call(this,n),Ct(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Ct(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var n=this._renderer._bounds,s=this.options.weight,c=new M(s,s);if(n=new q(n.min.subtract(c),n.max.add(c)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}for(var d=0,p=this._rings.length,v;d<p;d++)v=sf(this._rings[d],n,!0),v.length&&this._parts.push(v)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(n){var s=!1,c,d,p,v,k,T,O,I;if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(v=0,O=this._parts.length;v<O;v++)for(c=this._parts[v],k=0,I=c.length,T=I-1;k<I;T=k++)d=c[k],p=c[T],d.y>n.y!=p.y>n.y&&n.x<(p.x-d.x)*(n.y-d.y)/(p.y-d.y)+d.x&&(s=!s);return s||un.prototype._containsPoint.call(this,n,!0)}});function Jy(n,s){return new Dr(n,s)}var dn=cn.extend({initialize:function(n,s){E(this,s),this._layers={},n&&this.addData(n)},addData:function(n){var s=w(n)?n:n.features,c,d,p;if(s){for(c=0,d=s.length;c<d;c++)p=s[c],(p.geometries||p.geometry||p.features||p.coordinates)&&this.addData(p);return this}var v=this.options;if(v.filter&&!v.filter(n))return this;var k=co(n,v);return k?(k.feature=ho(n),k.defaultOptions=k.options,this.resetStyle(k),v.onEachFeature&&v.onEachFeature(n,k),this.addLayer(k)):this},resetStyle:function(n){return n===void 0?this.eachLayer(this.resetStyle,this):(n.options=o({},n.defaultOptions),this._setLayerStyle(n,this.options.style),this)},setStyle:function(n){return this.eachLayer(function(s){this._setLayerStyle(s,n)},this)},_setLayerStyle:function(n,s){n.setStyle&&(typeof s=="function"&&(s=s(n.feature)),n.setStyle(s))}});function co(n,s){var c=n.type==="Feature"?n.geometry:n,d=c?c.coordinates:null,p=[],v=s&&s.pointToLayer,k=s&&s.coordsToLatLng||Cl,T,O,I,Z;if(!d&&!c)return null;switch(c.type){case"Point":return T=k(d),mf(v,n,T,s);case"MultiPoint":for(I=0,Z=d.length;I<Z;I++)T=k(d[I]),p.push(mf(v,n,T,s));return new cn(p);case"LineString":case"MultiLineString":return O=uo(d,c.type==="LineString"?0:1,k),new un(O,s);case"Polygon":case"MultiPolygon":return O=uo(d,c.type==="Polygon"?1:2,k),new Dr(O,s);case"GeometryCollection":for(I=0,Z=c.geometries.length;I<Z;I++){var X=co({geometry:c.geometries[I],type:"Feature",properties:n.properties},s);X&&p.push(X)}return new cn(p);case"FeatureCollection":for(I=0,Z=c.features.length;I<Z;I++){var le=co(c.features[I],s);le&&p.push(le)}return new cn(p);default:throw new Error("Invalid GeoJSON object.")}}function mf(n,s,c,d){return n?n(s,c):new ao(c,d&&d.markersInheritOptions&&d)}function Cl(n){return new ae(n[1],n[0],n[2])}function uo(n,s,c){for(var d=[],p=0,v=n.length,k;p<v;p++)k=s?uo(n[p],s-1,c):(c||Cl)(n[p]),d.push(k);return d}function El(n,s){return n=ne(n),n.alt!==void 0?[b(n.lng,s),b(n.lat,s),b(n.alt,s)]:[b(n.lng,s),b(n.lat,s)]}function fo(n,s,c,d){for(var p=[],v=0,k=n.length;v<k;v++)p.push(s?fo(n[v],Ct(n[v])?0:s-1,c,d):El(n[v],d));return!s&&c&&p.length>0&&p.push(p[0].slice()),p}function Br(n,s){return n.feature?o({},n.feature,{geometry:s}):ho(s)}function ho(n){return n.type==="Feature"||n.type==="FeatureCollection"?n:{type:"Feature",properties:{},geometry:n}}var Ll={toGeoJSON:function(n){return Br(this,{type:"Point",coordinates:El(this.getLatLng(),n)})}};ao.include(Ll),Nl.include(Ll),lo.include(Ll),un.include({toGeoJSON:function(n){var s=!Ct(this._latlngs),c=fo(this._latlngs,s?1:0,!1,n);return Br(this,{type:(s?"Multi":"")+"LineString",coordinates:c})}}),Dr.include({toGeoJSON:function(n){var s=!Ct(this._latlngs),c=s&&!Ct(this._latlngs[0]),d=fo(this._latlngs,c?2:s?1:0,!0,n);return s||(d=[d]),Br(this,{type:(c?"Multi":"")+"Polygon",coordinates:d})}}),Ar.include({toMultiPoint:function(n){var s=[];return this.eachLayer(function(c){s.push(c.toGeoJSON(n).geometry.coordinates)}),Br(this,{type:"MultiPoint",coordinates:s})},toGeoJSON:function(n){var s=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(s==="MultiPoint")return this.toMultiPoint(n);var c=s==="GeometryCollection",d=[];return this.eachLayer(function(p){if(p.toGeoJSON){var v=p.toGeoJSON(n);if(c)d.push(v.geometry);else{var k=ho(v);k.type==="FeatureCollection"?d.push.apply(d,k.features):d.push(k)}}}),c?Br(this,{geometries:d,type:"GeometryCollection"}):{type:"FeatureCollection",features:d}}});function gf(n,s){return new dn(n,s)}var ex=gf,po=Zt.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(n,s,c){this._url=n,this._bounds=ue(s),E(this,c)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(se(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){je(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(n){return this.options.opacity=n,this._image&&this._updateOpacity(),this},setStyle:function(n){return n.opacity&&this.setOpacity(n.opacity),this},bringToFront:function(){return this._map&&Rr(this._image),this},bringToBack:function(){return this._map&&Mr(this._image),this},setUrl:function(n){return this._url=n,this._image&&(this._image.src=n),this},setBounds:function(n){return this._bounds=ue(n),this._map&&this._reset(),this},getEvents:function(){var n={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var n=this._url.tagName==="IMG",s=this._image=n?this._url:he("img");if(se(s,"leaflet-image-layer"),this._zoomAnimated&&se(s,"leaflet-zoom-animated"),this.options.className&&se(s,this.options.className),s.onselectstart=x,s.onmousemove=x,s.onload=u(this.fire,this,"load"),s.onerror=u(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(s.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),n){this._url=s.src;return}s.src=this._url,s.alt=this.options.alt},_animateZoom:function(n){var s=this._map.getZoomScale(n.zoom),c=this._map._latLngBoundsToNewLayerBounds(this._bounds,n.zoom,n.center).min;nr(this._image,c,s)},_reset:function(){var n=this._image,s=new q(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),c=s.getSize();Me(n,s.min),n.style.width=c.x+"px",n.style.height=c.y+"px"},_updateOpacity:function(){Nt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var n=this.options.errorOverlayUrl;n&&this._url!==n&&(this._url=n,this._image.src=n)},getCenter:function(){return this._bounds.getCenter()}}),tx=function(n,s,c){return new po(n,s,c)},vf=po.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var n=this._url.tagName==="VIDEO",s=this._image=n?this._url:he("video");if(se(s,"leaflet-image-layer"),this._zoomAnimated&&se(s,"leaflet-zoom-animated"),this.options.className&&se(s,this.options.className),s.onselectstart=x,s.onmousemove=x,s.onloadeddata=u(this.fire,this,"load"),n){for(var c=s.getElementsByTagName("source"),d=[],p=0;p<c.length;p++)d.push(c[p].src);this._url=c.length>0?d:[s.src];return}w(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(s.style,"objectFit")&&(s.style.objectFit="fill"),s.autoplay=!!this.options.autoplay,s.loop=!!this.options.loop,s.muted=!!this.options.muted,s.playsInline=!!this.options.playsInline;for(var v=0;v<this._url.length;v++){var k=he("source");k.src=this._url[v],s.appendChild(k)}}});function nx(n,s,c){return new vf(n,s,c)}var yf=po.extend({_initImage:function(){var n=this._image=this._url;se(n,"leaflet-image-layer"),this._zoomAnimated&&se(n,"leaflet-zoom-animated"),this.options.className&&se(n,this.options.className),n.onselectstart=x,n.onmousemove=x}});function rx(n,s,c){return new yf(n,s,c)}var tn=Zt.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(n,s){n&&(n instanceof ae||w(n))?(this._latlng=ne(n),E(this,s)):(E(this,n),this._source=s),this.options.content&&(this._content=this.options.content)},openOn:function(n){return n=arguments.length?n:this._source._map,n.hasLayer(this)||n.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(n){return this._map?this.close():(arguments.length?this._source=n:n=this._source,this._prepareOpen(),this.openOn(n._map)),this},onAdd:function(n){this._zoomAnimated=n._zoomAnimated,this._container||this._initLayout(),n._fadeAnimated&&Nt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),n._fadeAnimated&&Nt(this._container,1),this.bringToFront(),this.options.interactive&&(se(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(n){n._fadeAnimated?(Nt(this._container,0),this._removeTimeout=setTimeout(u(je,void 0,this._container),200)):je(this._container),this.options.interactive&&(Te(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(n){return this._latlng=ne(n),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(n){return this._content=n,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var n={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Rr(this._container),this},bringToBack:function(){return this._map&&Mr(this._container),this},_prepareOpen:function(n){var s=this._source;if(!s._map)return!1;if(s instanceof cn){s=null;var c=this._source._layers;for(var d in c)if(c[d]._map){s=c[d];break}if(!s)return!1;this._source=s}if(!n)if(s.getCenter)n=s.getCenter();else if(s.getLatLng)n=s.getLatLng();else if(s.getBounds)n=s.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(n),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var n=this._contentNode,s=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof s=="string")n.innerHTML=s;else{for(;n.hasChildNodes();)n.removeChild(n.firstChild);n.appendChild(s)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var n=this._map.latLngToLayerPoint(this._latlng),s=U(this.options.offset),c=this._getAnchor();this._zoomAnimated?Me(this._container,n.add(c)):s=s.add(n).add(c);var d=this._containerBottom=-s.y,p=this._containerLeft=-Math.round(this._containerWidth/2)+s.x;this._container.style.bottom=d+"px",this._container.style.left=p+"px"}},_getAnchor:function(){return[0,0]}});de.include({_initOverlay:function(n,s,c,d){var p=s;return p instanceof n||(p=new n(d).setContent(s)),c&&p.setLatLng(c),p}}),Zt.include({_initOverlay:function(n,s,c,d){var p=c;return p instanceof n?(E(p,d),p._source=this):(p=s&&!d?s:new n(d,this),p.setContent(c)),p}});var mo=tn.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(n){return n=arguments.length?n:this._source._map,!n.hasLayer(this)&&n._popup&&n._popup.options.autoClose&&n.removeLayer(n._popup),n._popup=this,tn.prototype.openOn.call(this,n)},onAdd:function(n){tn.prototype.onAdd.call(this,n),n.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Cn||this._source.on("preclick",ir))},onRemove:function(n){tn.prototype.onRemove.call(this,n),n.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Cn||this._source.off("preclick",ir))},getEvents:function(){var n=tn.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(n.preclick=this.close),this.options.keepInView&&(n.moveend=this._adjustPan),n},_initLayout:function(){var n="leaflet-popup",s=this._container=he("div",n+" "+(this.options.className||"")+" leaflet-zoom-animated"),c=this._wrapper=he("div",n+"-content-wrapper",s);if(this._contentNode=he("div",n+"-content",c),Ai(s),xl(this._contentNode),ie(s,"contextmenu",ir),this._tipContainer=he("div",n+"-tip-container",s),this._tip=he("div",n+"-tip",this._tipContainer),this.options.closeButton){var d=this._closeButton=he("a",n+"-close-button",s);d.setAttribute("role","button"),d.setAttribute("aria-label","Close popup"),d.href="#close",d.innerHTML='<span aria-hidden="true">&#215;</span>',ie(d,"click",function(p){Ve(p),this.close()},this)}},_updateLayout:function(){var n=this._contentNode,s=n.style;s.width="",s.whiteSpace="nowrap";var c=n.offsetWidth;c=Math.min(c,this.options.maxWidth),c=Math.max(c,this.options.minWidth),s.width=c+1+"px",s.whiteSpace="",s.height="";var d=n.offsetHeight,p=this.options.maxHeight,v="leaflet-popup-scrolled";p&&d>p?(s.height=p+"px",se(n,v)):Te(n,v),this._containerWidth=this._container.offsetWidth},_animateZoom:function(n){var s=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center),c=this._getAnchor();Me(this._container,s.add(c))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var n=this._map,s=parseInt(Ti(this._container,"marginBottom"),10)||0,c=this._container.offsetHeight+s,d=this._containerWidth,p=new M(this._containerLeft,-c-this._containerBottom);p._add(rr(this._container));var v=n.layerPointToContainerPoint(p),k=U(this.options.autoPanPadding),T=U(this.options.autoPanPaddingTopLeft||k),O=U(this.options.autoPanPaddingBottomRight||k),I=n.getSize(),Z=0,X=0;v.x+d+O.x>I.x&&(Z=v.x+d-I.x+O.x),v.x-Z-T.x<0&&(Z=v.x-T.x),v.y+c+O.y>I.y&&(X=v.y+c-I.y+O.y),v.y-X-T.y<0&&(X=v.y-T.y),(Z||X)&&(this.options.keepInView&&(this._autopanning=!0),n.fire("autopanstart").panBy([Z,X]))}},_getAnchor:function(){return U(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),ix=function(n,s){return new mo(n,s)};de.mergeOptions({closePopupOnClick:!0}),de.include({openPopup:function(n,s,c){return this._initOverlay(mo,n,s,c).openOn(this),this},closePopup:function(n){return n=arguments.length?n:this._popup,n&&n.close(),this}}),Zt.include({bindPopup:function(n,s){return this._popup=this._initOverlay(mo,this._popup,n,s),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(n){return this._popup&&(this instanceof cn||(this._popup._source=this),this._popup._prepareOpen(n||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(n){return this._popup&&this._popup.setContent(n),this},getPopup:function(){return this._popup},_openPopup:function(n){if(!(!this._popup||!this._map)){sr(n);var s=n.layer||n.target;if(this._popup._source===s&&!(s instanceof Cn)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(n.latlng);return}this._popup._source=s,this.openPopup(n.latlng)}},_movePopup:function(n){this._popup.setLatLng(n.latlng)},_onKeyPress:function(n){n.originalEvent.keyCode===13&&this._openPopup(n)}});var go=tn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(n){tn.prototype.onAdd.call(this,n),this.setOpacity(this.options.opacity),n.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(n){tn.prototype.onRemove.call(this,n),n.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var n=tn.prototype.getEvents.call(this);return this.options.permanent||(n.preclick=this.close),n},_initLayout:function(){var n="leaflet-tooltip",s=n+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=he("div",s),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+h(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(n){var s,c,d=this._map,p=this._container,v=d.latLngToContainerPoint(d.getCenter()),k=d.layerPointToContainerPoint(n),T=this.options.direction,O=p.offsetWidth,I=p.offsetHeight,Z=U(this.options.offset),X=this._getAnchor();T==="top"?(s=O/2,c=I):T==="bottom"?(s=O/2,c=0):T==="center"?(s=O/2,c=I/2):T==="right"?(s=0,c=I/2):T==="left"?(s=O,c=I/2):k.x<v.x?(T="right",s=0,c=I/2):(T="left",s=O+(Z.x+X.x)*2,c=I/2),n=n.subtract(U(s,c,!0)).add(Z).add(X),Te(p,"leaflet-tooltip-right"),Te(p,"leaflet-tooltip-left"),Te(p,"leaflet-tooltip-top"),Te(p,"leaflet-tooltip-bottom"),se(p,"leaflet-tooltip-"+T),Me(p,n)},_updatePosition:function(){var n=this._map.latLngToLayerPoint(this._latlng);this._setPosition(n)},setOpacity:function(n){this.options.opacity=n,this._container&&Nt(this._container,n)},_animateZoom:function(n){var s=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center);this._setPosition(s)},_getAnchor:function(){return U(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),sx=function(n,s){return new go(n,s)};de.include({openTooltip:function(n,s,c){return this._initOverlay(go,n,s,c).openOn(this),this},closeTooltip:function(n){return n.close(),this}}),Zt.include({bindTooltip:function(n,s){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(go,this._tooltip,n,s),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(n){if(!(!n&&this._tooltipHandlersAdded)){var s=n?"off":"on",c={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?c.add=this._openTooltip:(c.mouseover=this._openTooltip,c.mouseout=this.closeTooltip,c.click=this._openTooltip,this._map?this._addFocusListeners():c.add=this._addFocusListeners),this._tooltip.options.sticky&&(c.mousemove=this._moveTooltip),this[s](c),this._tooltipHandlersAdded=!n}},openTooltip:function(n){return this._tooltip&&(this instanceof cn||(this._tooltip._source=this),this._tooltip._prepareOpen(n)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(n){return this._tooltip&&this._tooltip.setContent(n),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(n){var s=typeof n.getElement=="function"&&n.getElement();s&&(ie(s,"focus",function(){this._tooltip._source=n,this.openTooltip()},this),ie(s,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(n){var s=typeof n.getElement=="function"&&n.getElement();s&&s.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(n){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var s=this;this._map.once("moveend",function(){s._openOnceFlag=!1,s._openTooltip(n)});return}this._tooltip._source=n.layer||n.target,this.openTooltip(this._tooltip.options.sticky?n.latlng:void 0)}},_moveTooltip:function(n){var s=n.latlng,c,d;this._tooltip.options.sticky&&n.originalEvent&&(c=this._map.mouseEventToContainerPoint(n.originalEvent),d=this._map.containerPointToLayerPoint(c),s=this._map.layerPointToLatLng(d)),this._tooltip.setLatLng(s)}});var xf=Ir.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(n){var s=n&&n.tagName==="DIV"?n:document.createElement("div"),c=this.options;if(c.html instanceof Element?(to(s),s.appendChild(c.html)):s.innerHTML=c.html!==!1?c.html:"",c.bgPos){var d=U(c.bgPos);s.style.backgroundPosition=-d.x+"px "+-d.y+"px"}return this._setIconStyles(s,"icon"),s},createShadow:function(){return null}});function ox(n){return new xf(n)}Ir.Default=Bi;var Fi=Zt.extend({options:{tileSize:256,opacity:1,updateWhenIdle:G.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(n){E(this,n)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(n){n._addZoomLimit(this)},onRemove:function(n){this._removeAllTiles(),je(this._container),n._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Rr(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Mr(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(n){return this.options.opacity=n,this._updateOpacity(),this},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var n=this._clampZoom(this._map.getZoom());n!==this._tileZoom&&(this._tileZoom=n,this._updateLevels()),this._update()}return this},getEvents:function(){var n={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=m(this._onMoveEnd,this.options.updateInterval,this)),n.move=this._onMove),this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},createTile:function(){return document.createElement("div")},getTileSize:function(){var n=this.options.tileSize;return n instanceof M?n:new M(n,n)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(n){for(var s=this.getPane().children,c=-n(-1/0,1/0),d=0,p=s.length,v;d<p;d++)v=s[d].style.zIndex,s[d]!==this._container&&v&&(c=n(c,+v));isFinite(c)&&(this.options.zIndex=c+n(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!G.ielt9){Nt(this._container,this.options.opacity);var n=+new Date,s=!1,c=!1;for(var d in this._tiles){var p=this._tiles[d];if(!(!p.current||!p.loaded)){var v=Math.min(1,(n-p.loaded)/200);Nt(p.el,v),v<1?s=!0:(p.active?c=!0:this._onOpaqueTile(p),p.active=!0)}}c&&!this._noPrune&&this._pruneTiles(),s&&(xe(this._fadeFrame),this._fadeFrame=oe(this._updateOpacity,this))}},_onOpaqueTile:x,_initContainer:function(){this._container||(this._container=he("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var n=this._tileZoom,s=this.options.maxZoom;if(n!==void 0){for(var c in this._levels)c=Number(c),this._levels[c].el.children.length||c===n?(this._levels[c].el.style.zIndex=s-Math.abs(n-c),this._onUpdateLevel(c)):(je(this._levels[c].el),this._removeTilesAtZoom(c),this._onRemoveLevel(c),delete this._levels[c]);var d=this._levels[n],p=this._map;return d||(d=this._levels[n]={},d.el=he("div","leaflet-tile-container leaflet-zoom-animated",this._container),d.el.style.zIndex=s,d.origin=p.project(p.unproject(p.getPixelOrigin()),n).round(),d.zoom=n,this._setZoomTransform(d,p.getCenter(),p.getZoom()),x(d.el.offsetWidth),this._onCreateLevel(d)),this._level=d,d}},_onUpdateLevel:x,_onRemoveLevel:x,_onCreateLevel:x,_pruneTiles:function(){if(this._map){var n,s,c=this._map.getZoom();if(c>this.options.maxZoom||c<this.options.minZoom){this._removeAllTiles();return}for(n in this._tiles)s=this._tiles[n],s.retain=s.current;for(n in this._tiles)if(s=this._tiles[n],s.current&&!s.active){var d=s.coords;this._retainParent(d.x,d.y,d.z,d.z-5)||this._retainChildren(d.x,d.y,d.z,d.z+2)}for(n in this._tiles)this._tiles[n].retain||this._removeTile(n)}},_removeTilesAtZoom:function(n){for(var s in this._tiles)this._tiles[s].coords.z===n&&this._removeTile(s)},_removeAllTiles:function(){for(var n in this._tiles)this._removeTile(n)},_invalidateAll:function(){for(var n in this._levels)je(this._levels[n].el),this._onRemoveLevel(Number(n)),delete this._levels[n];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(n,s,c,d){var p=Math.floor(n/2),v=Math.floor(s/2),k=c-1,T=new M(+p,+v);T.z=+k;var O=this._tileCoordsToKey(T),I=this._tiles[O];return I&&I.active?(I.retain=!0,!0):(I&&I.loaded&&(I.retain=!0),k>d?this._retainParent(p,v,k,d):!1)},_retainChildren:function(n,s,c,d){for(var p=2*n;p<2*n+2;p++)for(var v=2*s;v<2*s+2;v++){var k=new M(p,v);k.z=c+1;var T=this._tileCoordsToKey(k),O=this._tiles[T];if(O&&O.active){O.retain=!0;continue}else O&&O.loaded&&(O.retain=!0);c+1<d&&this._retainChildren(p,v,c+1,d)}},_resetView:function(n){var s=n&&(n.pinch||n.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),s,s)},_animateZoom:function(n){this._setView(n.center,n.zoom,!0,n.noUpdate)},_clampZoom:function(n){var s=this.options;return s.minNativeZoom!==void 0&&n<s.minNativeZoom?s.minNativeZoom:s.maxNativeZoom!==void 0&&s.maxNativeZoom<n?s.maxNativeZoom:n},_setView:function(n,s,c,d){var p=Math.round(s);this.options.maxZoom!==void 0&&p>this.options.maxZoom||this.options.minZoom!==void 0&&p<this.options.minZoom?p=void 0:p=this._clampZoom(p);var v=this.options.updateWhenZooming&&p!==this._tileZoom;(!d||v)&&(this._tileZoom=p,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),p!==void 0&&this._update(n),c||this._pruneTiles(),this._noPrune=!!c),this._setZoomTransforms(n,s)},_setZoomTransforms:function(n,s){for(var c in this._levels)this._setZoomTransform(this._levels[c],n,s)},_setZoomTransform:function(n,s,c){var d=this._map.getZoomScale(c,n.zoom),p=n.origin.multiplyBy(d).subtract(this._map._getNewPixelOrigin(s,c)).round();G.any3d?nr(n.el,p,d):Me(n.el,p)},_resetGrid:function(){var n=this._map,s=n.options.crs,c=this._tileSize=this.getTileSize(),d=this._tileZoom,p=this._map.getPixelWorldBounds(this._tileZoom);p&&(this._globalTileRange=this._pxBoundsToTileRange(p)),this._wrapX=s.wrapLng&&!this.options.noWrap&&[Math.floor(n.project([0,s.wrapLng[0]],d).x/c.x),Math.ceil(n.project([0,s.wrapLng[1]],d).x/c.y)],this._wrapY=s.wrapLat&&!this.options.noWrap&&[Math.floor(n.project([s.wrapLat[0],0],d).y/c.x),Math.ceil(n.project([s.wrapLat[1],0],d).y/c.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(n){var s=this._map,c=s._animatingZoom?Math.max(s._animateToZoom,s.getZoom()):s.getZoom(),d=s.getZoomScale(c,this._tileZoom),p=s.project(n,this._tileZoom).floor(),v=s.getSize().divideBy(d*2);return new q(p.subtract(v),p.add(v))},_update:function(n){var s=this._map;if(s){var c=this._clampZoom(s.getZoom());if(n===void 0&&(n=s.getCenter()),this._tileZoom!==void 0){var d=this._getTiledPixelBounds(n),p=this._pxBoundsToTileRange(d),v=p.getCenter(),k=[],T=this.options.keepBuffer,O=new q(p.getBottomLeft().subtract([T,-T]),p.getTopRight().add([T,-T]));if(!(isFinite(p.min.x)&&isFinite(p.min.y)&&isFinite(p.max.x)&&isFinite(p.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var I in this._tiles){var Z=this._tiles[I].coords;(Z.z!==this._tileZoom||!O.contains(new M(Z.x,Z.y)))&&(this._tiles[I].current=!1)}if(Math.abs(c-this._tileZoom)>1){this._setView(n,c);return}for(var X=p.min.y;X<=p.max.y;X++)for(var le=p.min.x;le<=p.max.x;le++){var st=new M(le,X);if(st.z=this._tileZoom,!!this._isValidTile(st)){var Ue=this._tiles[this._tileCoordsToKey(st)];Ue?Ue.current=!0:k.push(st)}}if(k.sort(function(ut,Ur){return ut.distanceTo(v)-Ur.distanceTo(v)}),k.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var Et=document.createDocumentFragment();for(le=0;le<k.length;le++)this._addTile(k[le],Et);this._level.el.appendChild(Et)}}}},_isValidTile:function(n){var s=this._map.options.crs;if(!s.infinite){var c=this._globalTileRange;if(!s.wrapLng&&(n.x<c.min.x||n.x>c.max.x)||!s.wrapLat&&(n.y<c.min.y||n.y>c.max.y))return!1}if(!this.options.bounds)return!0;var d=this._tileCoordsToBounds(n);return ue(this.options.bounds).overlaps(d)},_keyToBounds:function(n){return this._tileCoordsToBounds(this._keyToTileCoords(n))},_tileCoordsToNwSe:function(n){var s=this._map,c=this.getTileSize(),d=n.scaleBy(c),p=d.add(c),v=s.unproject(d,n.z),k=s.unproject(p,n.z);return[v,k]},_tileCoordsToBounds:function(n){var s=this._tileCoordsToNwSe(n),c=new ge(s[0],s[1]);return this.options.noWrap||(c=this._map.wrapLatLngBounds(c)),c},_tileCoordsToKey:function(n){return n.x+":"+n.y+":"+n.z},_keyToTileCoords:function(n){var s=n.split(":"),c=new M(+s[0],+s[1]);return c.z=+s[2],c},_removeTile:function(n){var s=this._tiles[n];s&&(je(s.el),delete this._tiles[n],this.fire("tileunload",{tile:s.el,coords:this._keyToTileCoords(n)}))},_initTile:function(n){se(n,"leaflet-tile");var s=this.getTileSize();n.style.width=s.x+"px",n.style.height=s.y+"px",n.onselectstart=x,n.onmousemove=x,G.ielt9&&this.options.opacity<1&&Nt(n,this.options.opacity)},_addTile:function(n,s){var c=this._getTilePos(n),d=this._tileCoordsToKey(n),p=this.createTile(this._wrapCoords(n),u(this._tileReady,this,n));this._initTile(p),this.createTile.length<2&&oe(u(this._tileReady,this,n,null,p)),Me(p,c),this._tiles[d]={el:p,coords:n,current:!0},s.appendChild(p),this.fire("tileloadstart",{tile:p,coords:n})},_tileReady:function(n,s,c){s&&this.fire("tileerror",{error:s,tile:c,coords:n});var d=this._tileCoordsToKey(n);c=this._tiles[d],c&&(c.loaded=+new Date,this._map._fadeAnimated?(Nt(c.el,0),xe(this._fadeFrame),this._fadeFrame=oe(this._updateOpacity,this)):(c.active=!0,this._pruneTiles()),s||(se(c.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:c.el,coords:n})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),G.ielt9||!this._map._fadeAnimated?oe(this._pruneTiles,this):setTimeout(u(this._pruneTiles,this),250)))},_getTilePos:function(n){return n.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(n){var s=new M(this._wrapX?_(n.x,this._wrapX):n.x,this._wrapY?_(n.y,this._wrapY):n.y);return s.z=n.z,s},_pxBoundsToTileRange:function(n){var s=this.getTileSize();return new q(n.min.unscaleBy(s).floor(),n.max.unscaleBy(s).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var n in this._tiles)if(!this._tiles[n].loaded)return!1;return!0}});function ax(n){return new Fi(n)}var Fr=Fi.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(n,s){this._url=n,s=E(this,s),s.detectRetina&&G.retina&&s.maxZoom>0?(s.tileSize=Math.floor(s.tileSize/2),s.zoomReverse?(s.zoomOffset--,s.minZoom=Math.min(s.maxZoom,s.minZoom+1)):(s.zoomOffset++,s.maxZoom=Math.max(s.minZoom,s.maxZoom-1)),s.minZoom=Math.max(0,s.minZoom)):s.zoomReverse?s.minZoom=Math.min(s.maxZoom,s.minZoom):s.maxZoom=Math.max(s.minZoom,s.maxZoom),typeof s.subdomains=="string"&&(s.subdomains=s.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(n,s){return this._url===n&&s===void 0&&(s=!0),this._url=n,s||this.redraw(),this},createTile:function(n,s){var c=document.createElement("img");return ie(c,"load",u(this._tileOnLoad,this,s,c)),ie(c,"error",u(this._tileOnError,this,s,c)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(c.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(c.referrerPolicy=this.options.referrerPolicy),c.alt="",c.src=this.getTileUrl(n),c},getTileUrl:function(n){var s={r:G.retina?"@2x":"",s:this._getSubdomain(n),x:n.x,y:n.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var c=this._globalTileRange.max.y-n.y;this.options.tms&&(s.y=c),s["-y"]=c}return g(this._url,o(s,this.options))},_tileOnLoad:function(n,s){G.ielt9?setTimeout(u(n,this,null,s),0):n(null,s)},_tileOnError:function(n,s,c){var d=this.options.errorTileUrl;d&&s.getAttribute("src")!==d&&(s.src=d),n(c,s)},_onTileRemove:function(n){n.tile.onload=null},_getZoomForUrl:function(){var n=this._tileZoom,s=this.options.maxZoom,c=this.options.zoomReverse,d=this.options.zoomOffset;return c&&(n=s-n),n+d},_getSubdomain:function(n){var s=Math.abs(n.x+n.y)%this.options.subdomains.length;return this.options.subdomains[s]},_abortLoading:function(){var n,s;for(n in this._tiles)if(this._tiles[n].coords.z!==this._tileZoom&&(s=this._tiles[n].el,s.onload=x,s.onerror=x,!s.complete)){s.src=z;var c=this._tiles[n].coords;je(s),delete this._tiles[n],this.fire("tileabort",{tile:s,coords:c})}},_removeTile:function(n){var s=this._tiles[n];if(s)return s.el.setAttribute("src",z),Fi.prototype._removeTile.call(this,n)},_tileReady:function(n,s,c){if(!(!this._map||c&&c.getAttribute("src")===z))return Fi.prototype._tileReady.call(this,n,s,c)}});function _f(n,s){return new Fr(n,s)}var wf=Fr.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(n,s){this._url=n;var c=o({},this.defaultWmsParams);for(var d in s)d in this.options||(c[d]=s[d]);s=E(this,s);var p=s.detectRetina&&G.retina?2:1,v=this.getTileSize();c.width=v.x*p,c.height=v.y*p,this.wmsParams=c},onAdd:function(n){this._crs=this.options.crs||n.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var s=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[s]=this._crs.code,Fr.prototype.onAdd.call(this,n)},getTileUrl:function(n){var s=this._tileCoordsToNwSe(n),c=this._crs,d=Q(c.project(s[0]),c.project(s[1])),p=d.min,v=d.max,k=(this._wmsVersion>=1.3&&this._crs===hf?[p.y,p.x,v.y,v.x]:[p.x,p.y,v.x,v.y]).join(","),T=Fr.prototype.getTileUrl.call(this,n);return T+R(this.wmsParams,T,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+k},setParams:function(n,s){return o(this.wmsParams,n),s||this.redraw(),this}});function lx(n,s){return new wf(n,s)}Fr.WMS=wf,_f.wms=lx;var fn=Zt.extend({options:{padding:.1},initialize:function(n){E(this,n),h(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),se(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var n={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(n.zoomanim=this._onAnimZoom),n},_onAnimZoom:function(n){this._updateTransform(n.center,n.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(n,s){var c=this._map.getZoomScale(s,this._zoom),d=this._map.getSize().multiplyBy(.5+this.options.padding),p=this._map.project(this._center,s),v=d.multiplyBy(-c).add(p).subtract(this._map._getNewPixelOrigin(n,s));G.any3d?nr(this._container,v,c):Me(this._container,v)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var n in this._layers)this._layers[n]._reset()},_onZoomEnd:function(){for(var n in this._layers)this._layers[n]._project()},_updatePaths:function(){for(var n in this._layers)this._layers[n]._update()},_update:function(){var n=this.options.padding,s=this._map.getSize(),c=this._map.containerPointToLayerPoint(s.multiplyBy(-n)).round();this._bounds=new q(c,c.add(s.multiplyBy(1+n*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),bf=fn.extend({options:{tolerance:0},getEvents:function(){var n=fn.prototype.getEvents.call(this);return n.viewprereset=this._onViewPreReset,n},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){fn.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var n=this._container=document.createElement("canvas");ie(n,"mousemove",this._onMouseMove,this),ie(n,"click dblclick mousedown mouseup contextmenu",this._onClick,this),ie(n,"mouseout",this._handleMouseOut,this),n._leaflet_disable_events=!0,this._ctx=n.getContext("2d")},_destroyContainer:function(){xe(this._redrawRequest),delete this._ctx,je(this._container),ve(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var n;this._redrawBounds=null;for(var s in this._layers)n=this._layers[s],n._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){fn.prototype._update.call(this);var n=this._bounds,s=this._container,c=n.getSize(),d=G.retina?2:1;Me(s,n.min),s.width=d*c.x,s.height=d*c.y,s.style.width=c.x+"px",s.style.height=c.y+"px",G.retina&&this._ctx.scale(2,2),this._ctx.translate(-n.min.x,-n.min.y),this.fire("update")}},_reset:function(){fn.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(n){this._updateDashArray(n),this._layers[h(n)]=n;var s=n._order={layer:n,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=s),this._drawLast=s,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(n){this._requestRedraw(n)},_removePath:function(n){var s=n._order,c=s.next,d=s.prev;c?c.prev=d:this._drawLast=d,d?d.next=c:this._drawFirst=c,delete n._order,delete this._layers[h(n)],this._requestRedraw(n)},_updatePath:function(n){this._extendRedrawBounds(n),n._project(),n._update(),this._requestRedraw(n)},_updateStyle:function(n){this._updateDashArray(n),this._requestRedraw(n)},_updateDashArray:function(n){if(typeof n.options.dashArray=="string"){var s=n.options.dashArray.split(/[, ]+/),c=[],d,p;for(p=0;p<s.length;p++){if(d=Number(s[p]),isNaN(d))return;c.push(d)}n.options._dashArray=c}else n.options._dashArray=n.options.dashArray},_requestRedraw:function(n){this._map&&(this._extendRedrawBounds(n),this._redrawRequest=this._redrawRequest||oe(this._redraw,this))},_extendRedrawBounds:function(n){if(n._pxBounds){var s=(n.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new q,this._redrawBounds.extend(n._pxBounds.min.subtract([s,s])),this._redrawBounds.extend(n._pxBounds.max.add([s,s]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var n=this._redrawBounds;if(n){var s=n.getSize();this._ctx.clearRect(n.min.x,n.min.y,s.x,s.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var n,s=this._redrawBounds;if(this._ctx.save(),s){var c=s.getSize();this._ctx.beginPath(),this._ctx.rect(s.min.x,s.min.y,c.x,c.y),this._ctx.clip()}this._drawing=!0;for(var d=this._drawFirst;d;d=d.next)n=d.layer,(!s||n._pxBounds&&n._pxBounds.intersects(s))&&n._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(n,s){if(this._drawing){var c,d,p,v,k=n._parts,T=k.length,O=this._ctx;if(T){for(O.beginPath(),c=0;c<T;c++){for(d=0,p=k[c].length;d<p;d++)v=k[c][d],O[d?"lineTo":"moveTo"](v.x,v.y);s&&O.closePath()}this._fillStroke(O,n)}}},_updateCircle:function(n){if(!(!this._drawing||n._empty())){var s=n._point,c=this._ctx,d=Math.max(Math.round(n._radius),1),p=(Math.max(Math.round(n._radiusY),1)||d)/d;p!==1&&(c.save(),c.scale(1,p)),c.beginPath(),c.arc(s.x,s.y/p,d,0,Math.PI*2,!1),p!==1&&c.restore(),this._fillStroke(c,n)}},_fillStroke:function(n,s){var c=s.options;c.fill&&(n.globalAlpha=c.fillOpacity,n.fillStyle=c.fillColor||c.color,n.fill(c.fillRule||"evenodd")),c.stroke&&c.weight!==0&&(n.setLineDash&&n.setLineDash(s.options&&s.options._dashArray||[]),n.globalAlpha=c.opacity,n.lineWidth=c.weight,n.strokeStyle=c.color,n.lineCap=c.lineCap,n.lineJoin=c.lineJoin,n.stroke())},_onClick:function(n){for(var s=this._map.mouseEventToLayerPoint(n),c,d,p=this._drawFirst;p;p=p.next)c=p.layer,c.options.interactive&&c._containsPoint(s)&&(!(n.type==="click"||n.type==="preclick")||!this._map._draggableMoved(c))&&(d=c);this._fireEvent(d?[d]:!1,n)},_onMouseMove:function(n){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var s=this._map.mouseEventToLayerPoint(n);this._handleMouseHover(n,s)}},_handleMouseOut:function(n){var s=this._hoveredLayer;s&&(Te(this._container,"leaflet-interactive"),this._fireEvent([s],n,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(n,s){if(!this._mouseHoverThrottled){for(var c,d,p=this._drawFirst;p;p=p.next)c=p.layer,c.options.interactive&&c._containsPoint(s)&&(d=c);d!==this._hoveredLayer&&(this._handleMouseOut(n),d&&(se(this._container,"leaflet-interactive"),this._fireEvent([d],n,"mouseover"),this._hoveredLayer=d)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,n),this._mouseHoverThrottled=!0,setTimeout(u(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(n,s,c){this._map._fireDOMEvent(s,c||s.type,n)},_bringToFront:function(n){var s=n._order;if(s){var c=s.next,d=s.prev;if(c)c.prev=d;else return;d?d.next=c:c&&(this._drawFirst=c),s.prev=this._drawLast,this._drawLast.next=s,s.next=null,this._drawLast=s,this._requestRedraw(n)}},_bringToBack:function(n){var s=n._order;if(s){var c=s.next,d=s.prev;if(d)d.next=c;else return;c?c.prev=d:d&&(this._drawLast=d),s.prev=null,s.next=this._drawFirst,this._drawFirst.prev=s,this._drawFirst=s,this._requestRedraw(n)}}});function kf(n){return G.canvas?new bf(n):null}var Ui=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(n){return document.createElement("<lvml:"+n+' class="lvml">')}}catch{}return function(n){return document.createElement("<"+n+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),cx={_initContainer:function(){this._container=he("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(fn.prototype._update.call(this),this.fire("update"))},_initPath:function(n){var s=n._container=Ui("shape");se(s,"leaflet-vml-shape "+(this.options.className||"")),s.coordsize="1 1",n._path=Ui("path"),s.appendChild(n._path),this._updateStyle(n),this._layers[h(n)]=n},_addPath:function(n){var s=n._container;this._container.appendChild(s),n.options.interactive&&n.addInteractiveTarget(s)},_removePath:function(n){var s=n._container;je(s),n.removeInteractiveTarget(s),delete this._layers[h(n)]},_updateStyle:function(n){var s=n._stroke,c=n._fill,d=n.options,p=n._container;p.stroked=!!d.stroke,p.filled=!!d.fill,d.stroke?(s||(s=n._stroke=Ui("stroke")),p.appendChild(s),s.weight=d.weight+"px",s.color=d.color,s.opacity=d.opacity,d.dashArray?s.dashStyle=w(d.dashArray)?d.dashArray.join(" "):d.dashArray.replace(/( *, *)/g," "):s.dashStyle="",s.endcap=d.lineCap.replace("butt","flat"),s.joinstyle=d.lineJoin):s&&(p.removeChild(s),n._stroke=null),d.fill?(c||(c=n._fill=Ui("fill")),p.appendChild(c),c.color=d.fillColor||d.color,c.opacity=d.fillOpacity):c&&(p.removeChild(c),n._fill=null)},_updateCircle:function(n){var s=n._point.round(),c=Math.round(n._radius),d=Math.round(n._radiusY||c);this._setPath(n,n._empty()?"M0 0":"AL "+s.x+","+s.y+" "+c+","+d+" 0,"+65535*360)},_setPath:function(n,s){n._path.v=s},_bringToFront:function(n){Rr(n._container)},_bringToBack:function(n){Mr(n._container)}},vo=G.vml?Ui:Ci,Hi=fn.extend({_initContainer:function(){this._container=vo("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=vo("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){je(this._container),ve(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){fn.prototype._update.call(this);var n=this._bounds,s=n.getSize(),c=this._container;(!this._svgSize||!this._svgSize.equals(s))&&(this._svgSize=s,c.setAttribute("width",s.x),c.setAttribute("height",s.y)),Me(c,n.min),c.setAttribute("viewBox",[n.min.x,n.min.y,s.x,s.y].join(" ")),this.fire("update")}},_initPath:function(n){var s=n._path=vo("path");n.options.className&&se(s,n.options.className),n.options.interactive&&se(s,"leaflet-interactive"),this._updateStyle(n),this._layers[h(n)]=n},_addPath:function(n){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(n._path),n.addInteractiveTarget(n._path)},_removePath:function(n){je(n._path),n.removeInteractiveTarget(n._path),delete this._layers[h(n)]},_updatePath:function(n){n._project(),n._update()},_updateStyle:function(n){var s=n._path,c=n.options;s&&(c.stroke?(s.setAttribute("stroke",c.color),s.setAttribute("stroke-opacity",c.opacity),s.setAttribute("stroke-width",c.weight),s.setAttribute("stroke-linecap",c.lineCap),s.setAttribute("stroke-linejoin",c.lineJoin),c.dashArray?s.setAttribute("stroke-dasharray",c.dashArray):s.removeAttribute("stroke-dasharray"),c.dashOffset?s.setAttribute("stroke-dashoffset",c.dashOffset):s.removeAttribute("stroke-dashoffset")):s.setAttribute("stroke","none"),c.fill?(s.setAttribute("fill",c.fillColor||c.color),s.setAttribute("fill-opacity",c.fillOpacity),s.setAttribute("fill-rule",c.fillRule||"evenodd")):s.setAttribute("fill","none"))},_updatePoly:function(n,s){this._setPath(n,Tr(n._parts,s))},_updateCircle:function(n){var s=n._point,c=Math.max(Math.round(n._radius),1),d=Math.max(Math.round(n._radiusY),1)||c,p="a"+c+","+d+" 0 1,0 ",v=n._empty()?"M0 0":"M"+(s.x-c)+","+s.y+p+c*2+",0 "+p+-c*2+",0 ";this._setPath(n,v)},_setPath:function(n,s){n._path.setAttribute("d",s)},_bringToFront:function(n){Rr(n._path)},_bringToBack:function(n){Mr(n._path)}});G.vml&&Hi.include(cx);function Sf(n){return G.svg||G.vml?new Hi(n):null}de.include({getRenderer:function(n){var s=n.options.renderer||this._getPaneRenderer(n.options.pane)||this.options.renderer||this._renderer;return s||(s=this._renderer=this._createRenderer()),this.hasLayer(s)||this.addLayer(s),s},_getPaneRenderer:function(n){if(n==="overlayPane"||n===void 0)return!1;var s=this._paneRenderers[n];return s===void 0&&(s=this._createRenderer({pane:n}),this._paneRenderers[n]=s),s},_createRenderer:function(n){return this.options.preferCanvas&&kf(n)||Sf(n)}});var jf=Dr.extend({initialize:function(n,s){Dr.prototype.initialize.call(this,this._boundsToLatLngs(n),s)},setBounds:function(n){return this.setLatLngs(this._boundsToLatLngs(n))},_boundsToLatLngs:function(n){return n=ue(n),[n.getSouthWest(),n.getNorthWest(),n.getNorthEast(),n.getSouthEast()]}});function ux(n,s){return new jf(n,s)}Hi.create=vo,Hi.pointsToPath=Tr,dn.geometryToLayer=co,dn.coordsToLatLng=Cl,dn.coordsToLatLngs=uo,dn.latLngToCoords=El,dn.latLngsToCoords=fo,dn.getFeature=Br,dn.asFeature=ho,de.mergeOptions({boxZoom:!0});var Pf=en.extend({initialize:function(n){this._map=n,this._container=n._container,this._pane=n._panes.overlayPane,this._resetStateTimeout=0,n.on("unload",this._destroy,this)},addHooks:function(){ie(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){ve(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){je(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(n){if(!n.shiftKey||n.which!==1&&n.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Oi(),dl(),this._startPoint=this._map.mouseEventToContainerPoint(n),ie(document,{contextmenu:sr,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(n){this._moved||(this._moved=!0,this._box=he("div","leaflet-zoom-box",this._container),se(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(n);var s=new q(this._point,this._startPoint),c=s.getSize();Me(this._box,s.min),this._box.style.width=c.x+"px",this._box.style.height=c.y+"px"},_finish:function(){this._moved&&(je(this._box),Te(this._container,"leaflet-crosshair")),Ri(),fl(),ve(document,{contextmenu:sr,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(n){if(!(n.which!==1&&n.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(u(this._resetState,this),0);var s=new ge(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(s).fire("boxzoomend",{boxZoomBounds:s})}},_onKeyDown:function(n){n.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});de.addInitHook("addHandler","boxZoom",Pf),de.mergeOptions({doubleClickZoom:!0});var Nf=en.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(n){var s=this._map,c=s.getZoom(),d=s.options.zoomDelta,p=n.originalEvent.shiftKey?c-d:c+d;s.options.doubleClickZoom==="center"?s.setZoom(p):s.setZoomAround(n.containerPoint,p)}});de.addInitHook("addHandler","doubleClickZoom",Nf),de.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Cf=en.extend({addHooks:function(){if(!this._draggable){var n=this._map;this._draggable=new Nn(n._mapPane,n._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),n.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),n.on("zoomend",this._onZoomEnd,this),n.whenReady(this._onZoomEnd,this))}se(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Te(this._map._container,"leaflet-grab"),Te(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var n=this._map;if(n._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var s=ue(this._map.options.maxBounds);this._offsetLimit=Q(this._map.latLngToContainerPoint(s.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(s.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;n.fire("movestart").fire("dragstart"),n.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(n){if(this._map.options.inertia){var s=this._lastTime=+new Date,c=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(c),this._times.push(s),this._prunePositions(s)}this._map.fire("move",n).fire("drag",n)},_prunePositions:function(n){for(;this._positions.length>1&&n-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var n=this._map.getSize().divideBy(2),s=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=s.subtract(n).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(n,s){return n-(n-s)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var n=this._draggable._newPos.subtract(this._draggable._startPos),s=this._offsetLimit;n.x<s.min.x&&(n.x=this._viscousLimit(n.x,s.min.x)),n.y<s.min.y&&(n.y=this._viscousLimit(n.y,s.min.y)),n.x>s.max.x&&(n.x=this._viscousLimit(n.x,s.max.x)),n.y>s.max.y&&(n.y=this._viscousLimit(n.y,s.max.y)),this._draggable._newPos=this._draggable._startPos.add(n)}},_onPreDragWrap:function(){var n=this._worldWidth,s=Math.round(n/2),c=this._initialWorldOffset,d=this._draggable._newPos.x,p=(d-s+c)%n+s-c,v=(d+s+c)%n-s-c,k=Math.abs(p+c)<Math.abs(v+c)?p:v;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=k},_onDragEnd:function(n){var s=this._map,c=s.options,d=!c.inertia||n.noInertia||this._times.length<2;if(s.fire("dragend",n),d)s.fire("moveend");else{this._prunePositions(+new Date);var p=this._lastPos.subtract(this._positions[0]),v=(this._lastTime-this._times[0])/1e3,k=c.easeLinearity,T=p.multiplyBy(k/v),O=T.distanceTo([0,0]),I=Math.min(c.inertiaMaxSpeed,O),Z=T.multiplyBy(I/O),X=I/(c.inertiaDeceleration*k),le=Z.multiplyBy(-X/2).round();!le.x&&!le.y?s.fire("moveend"):(le=s._limitOffset(le,s.options.maxBounds),oe(function(){s.panBy(le,{duration:X,easeLinearity:k,noMoveStart:!0,animate:!0})}))}}});de.addInitHook("addHandler","dragging",Cf),de.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Ef=en.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(n){this._map=n,this._setPanDelta(n.options.keyboardPanDelta),this._setZoomDelta(n.options.zoomDelta)},addHooks:function(){var n=this._map._container;n.tabIndex<=0&&(n.tabIndex="0"),ie(n,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),ve(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var n=document.body,s=document.documentElement,c=n.scrollTop||s.scrollTop,d=n.scrollLeft||s.scrollLeft;this._map._container.focus(),window.scrollTo(d,c)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(n){var s=this._panKeys={},c=this.keyCodes,d,p;for(d=0,p=c.left.length;d<p;d++)s[c.left[d]]=[-1*n,0];for(d=0,p=c.right.length;d<p;d++)s[c.right[d]]=[n,0];for(d=0,p=c.down.length;d<p;d++)s[c.down[d]]=[0,n];for(d=0,p=c.up.length;d<p;d++)s[c.up[d]]=[0,-1*n]},_setZoomDelta:function(n){var s=this._zoomKeys={},c=this.keyCodes,d,p;for(d=0,p=c.zoomIn.length;d<p;d++)s[c.zoomIn[d]]=n;for(d=0,p=c.zoomOut.length;d<p;d++)s[c.zoomOut[d]]=-n},_addHooks:function(){ie(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){ve(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(n){if(!(n.altKey||n.ctrlKey||n.metaKey)){var s=n.keyCode,c=this._map,d;if(s in this._panKeys){if(!c._panAnim||!c._panAnim._inProgress)if(d=this._panKeys[s],n.shiftKey&&(d=U(d).multiplyBy(3)),c.options.maxBounds&&(d=c._limitOffset(U(d),c.options.maxBounds)),c.options.worldCopyJump){var p=c.wrapLatLng(c.unproject(c.project(c.getCenter()).add(d)));c.panTo(p)}else c.panBy(d)}else if(s in this._zoomKeys)c.setZoom(c.getZoom()+(n.shiftKey?3:1)*this._zoomKeys[s]);else if(s===27&&c._popup&&c._popup.options.closeOnEscapeKey)c.closePopup();else return;sr(n)}}});de.addInitHook("addHandler","keyboard",Ef),de.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Lf=en.extend({addHooks:function(){ie(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){ve(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(n){var s=Jd(n),c=this._map.options.wheelDebounceTime;this._delta+=s,this._lastMousePos=this._map.mouseEventToContainerPoint(n),this._startTime||(this._startTime=+new Date);var d=Math.max(c-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(u(this._performZoom,this),d),sr(n)},_performZoom:function(){var n=this._map,s=n.getZoom(),c=this._map.options.zoomSnap||0;n._stop();var d=this._delta/(this._map.options.wheelPxPerZoomLevel*4),p=4*Math.log(2/(1+Math.exp(-Math.abs(d))))/Math.LN2,v=c?Math.ceil(p/c)*c:p,k=n._limitZoom(s+(this._delta>0?v:-v))-s;this._delta=0,this._startTime=null,k&&(n.options.scrollWheelZoom==="center"?n.setZoom(s+k):n.setZoomAround(this._lastMousePos,s+k))}});de.addInitHook("addHandler","scrollWheelZoom",Lf);var dx=600;de.mergeOptions({tapHold:G.touchNative&&G.safari&&G.mobile,tapTolerance:15});var zf=en.extend({addHooks:function(){ie(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){ve(this._map._container,"touchstart",this._onDown,this)},_onDown:function(n){if(clearTimeout(this._holdTimeout),n.touches.length===1){var s=n.touches[0];this._startPos=this._newPos=new M(s.clientX,s.clientY),this._holdTimeout=setTimeout(u(function(){this._cancel(),this._isTapValid()&&(ie(document,"touchend",Ve),ie(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",s))},this),dx),ie(document,"touchend touchcancel contextmenu",this._cancel,this),ie(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function n(){ve(document,"touchend",Ve),ve(document,"touchend touchcancel",n)},_cancel:function(){clearTimeout(this._holdTimeout),ve(document,"touchend touchcancel contextmenu",this._cancel,this),ve(document,"touchmove",this._onMove,this)},_onMove:function(n){var s=n.touches[0];this._newPos=new M(s.clientX,s.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(n,s){var c=new MouseEvent(n,{bubbles:!0,cancelable:!0,view:window,screenX:s.screenX,screenY:s.screenY,clientX:s.clientX,clientY:s.clientY});c._simulated=!0,s.target.dispatchEvent(c)}});de.addInitHook("addHandler","tapHold",zf),de.mergeOptions({touchZoom:G.touch,bounceAtZoomLimits:!0});var Tf=en.extend({addHooks:function(){se(this._map._container,"leaflet-touch-zoom"),ie(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){Te(this._map._container,"leaflet-touch-zoom"),ve(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(n){var s=this._map;if(!(!n.touches||n.touches.length!==2||s._animatingZoom||this._zooming)){var c=s.mouseEventToContainerPoint(n.touches[0]),d=s.mouseEventToContainerPoint(n.touches[1]);this._centerPoint=s.getSize()._divideBy(2),this._startLatLng=s.containerPointToLatLng(this._centerPoint),s.options.touchZoom!=="center"&&(this._pinchStartLatLng=s.containerPointToLatLng(c.add(d)._divideBy(2))),this._startDist=c.distanceTo(d),this._startZoom=s.getZoom(),this._moved=!1,this._zooming=!0,s._stop(),ie(document,"touchmove",this._onTouchMove,this),ie(document,"touchend touchcancel",this._onTouchEnd,this),Ve(n)}},_onTouchMove:function(n){if(!(!n.touches||n.touches.length!==2||!this._zooming)){var s=this._map,c=s.mouseEventToContainerPoint(n.touches[0]),d=s.mouseEventToContainerPoint(n.touches[1]),p=c.distanceTo(d)/this._startDist;if(this._zoom=s.getScaleZoom(p,this._startZoom),!s.options.bounceAtZoomLimits&&(this._zoom<s.getMinZoom()&&p<1||this._zoom>s.getMaxZoom()&&p>1)&&(this._zoom=s._limitZoom(this._zoom)),s.options.touchZoom==="center"){if(this._center=this._startLatLng,p===1)return}else{var v=c._add(d)._divideBy(2)._subtract(this._centerPoint);if(p===1&&v.x===0&&v.y===0)return;this._center=s.unproject(s.project(this._pinchStartLatLng,this._zoom).subtract(v),this._zoom)}this._moved||(s._moveStart(!0,!1),this._moved=!0),xe(this._animRequest);var k=u(s._move,s,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=oe(k,this,!0),Ve(n)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,xe(this._animRequest),ve(document,"touchmove",this._onTouchMove,this),ve(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});de.addInitHook("addHandler","touchZoom",Tf),de.BoxZoom=Pf,de.DoubleClickZoom=Nf,de.Drag=Cf,de.Keyboard=Ef,de.ScrollWheelZoom=Lf,de.TapHold=zf,de.TouchZoom=Tf,r.Bounds=q,r.Browser=G,r.CRS=re,r.Canvas=bf,r.Circle=Nl,r.CircleMarker=lo,r.Class=_e,r.Control=Ht,r.DivIcon=xf,r.DivOverlay=tn,r.DomEvent=Ey,r.DomUtil=Ny,r.Draggable=Nn,r.Evented=Se,r.FeatureGroup=cn,r.GeoJSON=dn,r.GridLayer=Fi,r.Handler=en,r.Icon=Ir,r.ImageOverlay=po,r.LatLng=ae,r.LatLngBounds=ge,r.Layer=Zt,r.LayerGroup=Ar,r.LineUtil=Hy,r.Map=de,r.Marker=ao,r.Mixin=Ay,r.Path=Cn,r.Point=M,r.PolyUtil=Iy,r.Polygon=Dr,r.Polyline=un,r.Popup=mo,r.PosAnimation=ef,r.Projection=Zy,r.Rectangle=jf,r.Renderer=fn,r.SVG=Hi,r.SVGOverlay=yf,r.TileLayer=Fr,r.Tooltip=go,r.Transformation=Ni,r.Util=yt,r.VideoOverlay=vf,r.bind=u,r.bounds=Q,r.canvas=kf,r.circle=Qy,r.circleMarker=Yy,r.control=Ii,r.divIcon=ox,r.extend=o,r.featureGroup=qy,r.geoJSON=gf,r.geoJson=ex,r.gridLayer=ax,r.icon=Gy,r.imageOverlay=tx,r.latLng=ne,r.latLngBounds=ue,r.layerGroup=Vy,r.map=Ly,r.marker=Ky,r.point=U,r.polygon=Jy,r.polyline=Xy,r.popup=ix,r.rectangle=ux,r.setOptions=E,r.stamp=h,r.svg=Sf,r.svgOverlay=rx,r.tileLayer=_f,r.tooltip=sx,r.transformation=$e,r.version=i,r.videoOverlay=nx;var fx=window.L;r.noConflict=function(){return window.L=fx,this},window.L=r})})(hu,hu.exports);var Pi=hu.exports;const Xs=jp(Pi);function tl(e,t,r){return Object.freeze({instance:e,context:t,container:r})}function nl(e,t){return t==null?function(i,o){const l=P.useRef();return l.current||(l.current=e(i,o)),l}:function(i,o){const l=P.useRef();l.current||(l.current=e(i,o));const u=P.useRef(i),{instance:f}=l.current;return P.useEffect(function(){u.current!==i&&(t(f,i,u.current),u.current=i)},[f,i,o]),l}}function qv(e,t){P.useEffect(function(){return(t.layerContainer??t.map).addLayer(e.instance),function(){var l;(l=t.layerContainer)==null||l.removeLayer(e.instance),t.map.removeLayer(e.instance)}},[t,e])}function Gv(e){return function(r){const i=Ja(),o=e(el(r,i),i);return Hv(i.map,r.attribution),Cd(o.current,r.eventHandlers),qv(o.current,i),o}}function pk(e,t){const r=P.useRef();P.useEffect(function(){if(t.pathOptions!==r.current){const o=t.pathOptions??{};e.instance.setStyle(o),r.current=o}},[e,t])}function mk(e){return function(r){const i=Ja(),o=e(el(r,i),i);return Cd(o.current,r.eventHandlers),qv(o.current,i),pk(o.current,r),o}}function gk(e,t){const r=nl(e,t),i=Gv(r);return Vv(i)}function vk(e,t){const r=nl(e),i=hk(r,t);return dk(i)}function yk(e,t){const r=nl(e,t),i=mk(r);return Vv(i)}function xk(e,t){const r=nl(e,t),i=Gv(r);return fk(i)}function _k(e,t,r){const{opacity:i,zIndex:o}=t;i!=null&&i!==r.opacity&&e.setOpacity(i),o!=null&&o!==r.zIndex&&e.setZIndex(o)}function Ed(){return Ja().map}function wk(e){const t=Ed();return P.useEffect(function(){return t.on(e),function(){t.off(e)}},[t,e]),t}const bk=yk(function({center:t,children:r,...i},o){const l=new Pi.Circle(t,i);return tl(l,Zv(o,{overlayContainer:l}))},lk);function pu(){return pu=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},pu.apply(this,arguments)}function kk({bounds:e,boundsOptions:t,center:r,children:i,className:o,id:l,placeholder:u,style:f,whenReady:h,zoom:m,..._},x){const[b]=P.useState({className:o,id:l,style:f}),[C,S]=P.useState(null);P.useImperativeHandle(x,()=>(C==null?void 0:C.map)??null,[C]);const E=P.useCallback(y=>{if(y!==null&&C===null){const g=new Pi.Map(y,_);r!=null&&m!=null?g.setView(r,m):e!=null&&g.fitBounds(e,t),h!=null&&g.whenReady(h),S(uk(g))}},[]);P.useEffect(()=>()=>{C==null||C.map.remove()},[C]);const R=C?ps.createElement($v,{value:C},i):u??null;return ps.createElement("div",pu({},b,{ref:E}),R)}const Kv=P.forwardRef(kk),mu=gk(function({position:t,...r},i){const o=new Pi.Marker(t,r);return tl(o,Zv(i,{overlayContainer:o}))},function(t,r,i){r.position!==i.position&&t.setLatLng(r.position),r.icon!=null&&r.icon!==i.icon&&t.setIcon(r.icon),r.zIndexOffset!=null&&r.zIndexOffset!==i.zIndexOffset&&t.setZIndexOffset(r.zIndexOffset),r.opacity!=null&&r.opacity!==i.opacity&&t.setOpacity(r.opacity),t.dragging!=null&&r.draggable!==i.draggable&&(r.draggable===!0?t.dragging.enable():t.dragging.disable())}),bp=vk(function(t,r){const i=new Pi.Popup(t,r.overlayContainer);return tl(i,r)},function(t,r,{position:i},o){P.useEffect(function(){const{instance:u}=t;function f(m){m.popup===u&&(u.update(),o(!0))}function h(m){m.popup===u&&o(!1)}return r.map.on({popupopen:f,popupclose:h}),r.overlayContainer==null?(i!=null&&u.setLatLng(i),u.openOn(r.map)):r.overlayContainer.bindPopup(u),function(){var _;r.map.off({popupopen:f,popupclose:h}),(_=r.overlayContainer)==null||_.unbindPopup(),r.map.removeLayer(u)}},[t,r,o,i])}),Yv=xk(function({url:t,...r},i){const o=new Pi.TileLayer(t,el(r,i));return tl(o,i)},function(t,r,i){_k(t,r,i);const{url:o}=r;o!=null&&o!==i.url&&t.setUrl(o)});delete Xs.Icon.Default.prototype._getIconUrl;Xs.Icon.Default.mergeOptions({iconRetinaUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",iconUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",shadowUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"});const Sk=()=>Xs.divIcon({className:"custom-user-marker",html:`
      <div style="
        width: 24px;
        height: 24px;
        background: #f43f5e;
        border: 3px solid #ffffff;
        border-radius: 50%;
        box-shadow: 0 0 15px #f43f5e, 0 2px 6px rgba(0,0,0,0.5);
      "></div>
    `,iconSize:[24,24],iconAnchor:[12,12]}),jk=(e="Medium")=>{let t="#f59e0b";return(e==="Critical"||e==="High")&&(t="#ef4444"),e==="Low"&&(t="#10b981"),Xs.divIcon({className:"custom-incident-marker",html:`
      <div style="
        width: 28px;
        height: 28px;
        background: ${t};
        border: 2px solid #ffffff;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 8px rgba(0,0,0,0.4);
      ">
        <div style="width: 10px; height: 10px; background: #ffffff; border-radius: 50%;"></div>
      </div>
    `,iconSize:[28,28],iconAnchor:[14,28]})},Pk=({center:e,zoom:t})=>{const r=Ed();return P.useEffect(()=>{e&&e[0]&&e[1]&&r.flyTo(e,t||15,{animate:!0,duration:1.2})},[e,t,r]),null},Nk=({center:e=[28.6139,77.209],zoom:t=14,userLocation:r=null,accuracy:i=null,markers:o=[],height:l="400px",interactive:u=!0})=>{const f=r?[r.lat,r.lng]:e;return a.jsx("div",{style:{width:"100%",height:l,position:"relative",borderRadius:"var(--radius-lg)",overflow:"hidden"},children:a.jsxs(Kv,{center:f,zoom:t,scrollWheelZoom:u,style:{width:"100%",height:"100%"},children:[a.jsx(Yv,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),a.jsx(Pk,{center:f,zoom:t}),r&&a.jsxs(a.Fragment,{children:[a.jsx(mu,{position:[r.lat,r.lng],icon:Sk(),children:a.jsx(bp,{children:a.jsxs("div",{style:{padding:"4px",textAlign:"center"},children:[a.jsx("strong",{style:{color:"#f43f5e"},children:"📍 Your Current Position"}),a.jsx("div",{style:{fontSize:"0.8rem",marginTop:"4px",color:"#94a3b8"},children:r.address||`${r.lat.toFixed(5)}, ${r.lng.toFixed(5)}`})]})})}),i&&a.jsx(bk,{center:[r.lat,r.lng],radius:i,pathOptions:{color:"#f43f5e",fillColor:"#f43f5e",fillOpacity:.15,weight:1.5}})]}),o.map((h,m)=>!h.lat||!h.lng?null:a.jsx(mu,{position:[h.lat,h.lng],icon:jk(h.severity),children:a.jsx(bp,{children:a.jsxs("div",{style:{padding:"6px",maxWidth:"220px"},children:[a.jsx("div",{style:{fontWeight:"bold",fontSize:"0.95rem",color:"#f8fafc"},children:h.title||"Safety Report"}),a.jsxs("div",{style:{fontSize:"0.75rem",color:"#fda4af",textTransform:"uppercase",marginTop:"2px",fontWeight:600},children:[h.category," • ",h.severity||"Medium"]}),a.jsx("p",{style:{fontSize:"0.8rem",color:"#cbd5e1",marginTop:"6px",lineHeight:1.4},children:h.description}),h.address&&a.jsxs("div",{style:{fontSize:"0.75rem",color:"#94a3b8",marginTop:"4px"},children:["📍 ",h.address]})]})})},h.id||m))]})})},kp=[{id:1,title:"Connaught Place Central Police Station",category:"Safe Zone",severity:"Low",lat:28.6328,lng:77.2197,address:"Near Radial Road 4, Connaught Place"},{id:2,title:"Women Safety 24/7 Help Desk - Metro Gate 1",category:"Safe Zone",severity:"Low",lat:28.618,lng:77.205,address:"Central Secretariat Metro Station"},{id:3,title:"City General Hospital (24/7 Emergency Wing)",category:"Medical",severity:"Low",lat:28.625,lng:77.23,address:"Hospital Road, Sector 3"}],Ck=()=>{const e=Qt(),[t,r]=P.useState(null),[i,o]=P.useState(null),[l,u]=P.useState(!0),[f,h]=P.useState(!0),[m,_]=P.useState(!1);P.useEffect(()=>{x()},[]);const x=async()=>{u(!0);try{const S=await Ys(),E=await Qs(S.lat,S.lng);r({lat:S.lat,lng:S.lng,address:E}),o(S.accuracy),e.success("Live GPS coordinates acquired successfully.")}catch(S){e.error(S.message||"Unable to retrieve location."),r({lat:28.6139,lng:77.209,address:"Default Map Center (New Delhi, India)"})}finally{u(!1)}},b=()=>{if(!t)return;const S=hs(t.lat,t.lng);navigator.clipboard.writeText(`My current live location: ${S} (${t.address})`),e.success("Live location map link copied to clipboard!")},C=()=>{if(!t)return;const S=hs(t.lat,t.lng),E=encodeURIComponent(`📍 Here is my current live GPS location:
${S}
Address: ${t.address}`);window.open(`https://wa.me/?text=${E}`,"_blank")};return a.jsxs("div",{className:"location-page",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"location-header glass-card",children:[a.jsxs("div",{className:"header-text",children:[a.jsxs("div",{className:"location-live-badge",children:[a.jsx(Iv,{size:15,className:"radio-pulse"}),a.jsx("span",{children:"Real-Time Geolocation Tracking"})]}),a.jsx("h1",{children:"Live GPS Location & Safe Zones"}),a.jsx("p",{children:"Interactive high-precision OpenStreetMap showing your real-time position, accuracy radius, and nearest verified emergency safe stations."})]}),a.jsxs("div",{className:"location-actions",children:[a.jsxs("button",{onClick:x,disabled:l,className:"btn btn-primary",children:[l?a.jsx(jr,{size:16,className:"spin-icon"}):a.jsx(_d,{size:16}),a.jsx("span",{children:l?"Locating...":"Refresh My GPS"})]}),a.jsxs("button",{onClick:()=>h(!f),className:"btn btn-secondary",children:[a.jsx(z2,{size:16}),a.jsx("span",{children:f?"Hide Safe Zones":"Show Safe Zones"})]})]})]}),a.jsxs("div",{className:"location-main-grid",children:[a.jsxs("div",{className:"map-view-container glass-card",children:[a.jsxs("div",{className:"map-card-header",children:[a.jsxs("div",{className:"map-status-row",children:[a.jsxs("span",{className:"live-status-pill",children:[a.jsx("span",{className:"dot-green"})," GPS Active"]}),i&&a.jsxs("span",{className:"accuracy-pill",children:["Accuracy: ±",Math.round(i),"m"]})]}),a.jsxs("div",{className:"map-legend",children:[a.jsxs("span",{className:"legend-item",children:[a.jsx("span",{className:"legend-dot user-dot"})," You"]}),f&&a.jsxs("span",{className:"legend-item",children:[a.jsx("span",{className:"legend-dot safe-dot"})," Safe Stations"]})]})]}),a.jsx("div",{className:"map-wrapper-box",children:a.jsx(Nk,{userLocation:t,accuracy:i,markers:f?kp:[],height:"500px"})})]}),a.jsxs("div",{className:"location-sidebar",children:[a.jsxs("div",{className:"glass-card address-card",children:[a.jsxs("div",{className:"card-title-row",children:[a.jsx(Pn,{size:20,color:"#f43f5e"}),a.jsx("h3",{children:"Your Current Address"})]}),a.jsx("div",{className:"address-display",children:l?a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",color:"var(--text-muted)"},children:[a.jsx(jr,{size:16,className:"spin-icon"})," Resolving street address..."]}):a.jsx("p",{className:"resolved-address",children:(t==null?void 0:t.address)||"Address pending..."})}),t&&a.jsxs("div",{className:"coords-tags",children:[a.jsxs("div",{className:"coord-tag",children:[a.jsx("span",{children:"Latitude:"})," ",a.jsx("strong",{children:t.lat.toFixed(6)})]}),a.jsxs("div",{className:"coord-tag",children:[a.jsx("span",{children:"Longitude:"})," ",a.jsx("strong",{children:t.lng.toFixed(6)})]})]}),a.jsxs("div",{className:"share-buttons-stack",children:[a.jsxs("button",{onClick:C,className:"btn broadcast-btn whatsapp-btn btn-block",children:[a.jsx(Ea,{size:16}),a.jsx("span",{children:"Share via WhatsApp"})]}),a.jsxs("button",{onClick:b,className:"btn btn-secondary btn-block",children:[a.jsx(Rv,{size:16}),a.jsx("span",{children:"Copy Location Link"})]}),t&&a.jsxs("a",{href:hs(t.lat,t.lng),target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary btn-block",children:[a.jsx(S2,{size:16}),a.jsx("span",{children:"Open in Google Maps"})]})]})]}),a.jsxs("div",{className:"glass-card safe-stations-card",children:[a.jsxs("div",{className:"card-title-row",children:[a.jsx(Pr,{size:20,color:"#34d399"}),a.jsx("h3",{children:"Nearby Safe Zones"})]}),a.jsx("p",{style:{fontSize:"0.82rem",color:"var(--text-muted)",marginBottom:"0.75rem"},children:"Verified 24/7 security assistance checkpoints & medical bays:"}),a.jsx("div",{className:"safe-stations-list",children:kp.map(S=>a.jsxs("div",{className:"safe-station-item",children:[a.jsx("div",{className:"station-icon",children:S.category==="Medical"?a.jsx(E2,{size:16,color:"#10b981"}):a.jsx(ji,{size:16,color:"#6366f1"})}),a.jsxs("div",{className:"station-info",children:[a.jsx("strong",{children:S.title}),a.jsxs("span",{children:["📍 ",S.address]})]})]},S.id))})]})]})]})]}),a.jsx("style",{children:`
        .location-page {
          padding-bottom: 3rem;
        }
        .location-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          padding: 2rem;
          margin-bottom: 2rem;
        }
        .header-text {
          max-width: 680px;
        }
        .location-live-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          font-weight: 700;
          color: #10b981;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          margin-bottom: 0.75rem;
        }
        .header-text h1 {
          font-size: 1.85rem;
          margin-bottom: 0.35rem;
        }
        .header-text p {
          font-size: 0.92rem;
          color: var(--text-secondary);
        }
        .location-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .location-main-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr;
          gap: 1.75rem;
        }
        .map-view-container {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .map-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .map-status-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .live-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          font-weight: 700;
          background: rgba(16, 185, 129, 0.15);
          color: #34d399;
          padding: 0.2rem 0.65rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(16, 185, 129, 0.3);
        }
        .dot-green {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
        }
        .accuracy-pill {
          font-size: 0.78rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.05);
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-full);
        }
        .map-legend {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .legend-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .user-dot { background: #f43f5e; box-shadow: 0 0 6px #f43f5e; }
        .safe-dot { background: #10b981; box-shadow: 0 0 6px #10b981; }
        .map-wrapper-box {
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--border-color);
        }
        .location-sidebar {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .address-card, .safe-stations-card {
          padding: 1.5rem;
        }
        .card-title-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .card-title-row h3 {
          font-size: 1.15rem;
        }
        .address-display {
          background: rgba(15, 23, 42, 0.7);
          padding: 1rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
          margin-bottom: 1rem;
        }
        .resolved-address {
          font-size: 0.95rem;
          color: var(--text-primary);
          line-height: 1.5;
          font-weight: 500;
        }
        .coords-tags {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .coord-tag {
          background: rgba(255, 255, 255, 0.04);
          padding: 0.5rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          color: var(--text-muted);
          border: 1px solid var(--border-color);
        }
        .coord-tag strong {
          display: block;
          color: var(--text-primary);
          font-family: monospace;
          font-size: 0.85rem;
          margin-top: 2px;
        }
        .share-buttons-stack {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .safe-stations-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .safe-station-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.75rem;
          background: rgba(15, 23, 42, 0.5);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
        }
        .station-icon {
          width: 32px;
          height: 32px;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .station-info {
          display: flex;
          flex-direction: column;
          font-size: 0.85rem;
        }
        .station-info strong {
          color: var(--text-primary);
        }
        .station-info span {
          color: var(--text-muted);
          font-size: 0.78rem;
          margin-top: 2px;
        }
        @media (max-width: 992px) {
          .location-main-grid { grid-template-columns: 1fr; }
        }
      `})]})},Ek=async e=>{const t=e instanceof FormData;return(await it.post("/reports",e,{headers:t?{"Content-Type":"multipart/form-data"}:{}})).data},Qv=async()=>(await it.get("/reports/my")).data,Lk=Xs.divIcon({className:"custom-picker-pin",html:`
    <div style="
      width: 32px;
      height: 32px;
      background: #f43f5e;
      border: 3px solid #ffffff;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      box-shadow: 0 4px 12px rgba(244, 63, 94, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <div style="width: 10px; height: 10px; background: white; border-radius: 50%;"></div>
    </div>
  `,iconSize:[32,32],iconAnchor:[16,32]}),zk=({onLocationSelected:e})=>(wk({click(t){e(t.latlng.lat,t.latlng.lng)}}),null),Tk=({center:e})=>{const t=Ed();return P.useEffect(()=>{e&&e[0]&&e[1]&&t.setView(e,15)},[e,t]),null},Ok=({initialLat:e=28.6139,initialLng:t=77.209,initialAddress:r="",onLocationChange:i})=>{var b,C;const[o,l]=P.useState({lat:e,lng:t,address:r}),[u,f]=P.useState(!1),[h,m]=P.useState([e,t]),_=async(S,E)=>{l(R=>({...R,lat:S,lng:E})),m([S,E]);try{const R=await Qs(S,E),y={lat:S,lng:E,address:R};l(y),i&&i(y)}catch{const y={lat:S,lng:E,address:`${S.toFixed(5)}, ${E.toFixed(5)}`};l(y),i&&i(y)}},x=async()=>{f(!0);try{const S=await Ys();await _(S.lat,S.lng)}catch(S){alert(S.message||"Could not fetch GPS coordinates.")}finally{f(!1)}};return a.jsxs("div",{className:"location-picker-wrapper",children:[a.jsxs("div",{className:"picker-toolbar",children:[a.jsxs("button",{type:"button",onClick:x,disabled:u,className:"btn btn-secondary btn-sm",children:[u?a.jsx(jr,{size:16,className:"spin-icon"}):a.jsx(_d,{size:16,color:"#f43f5e"}),a.jsx("span",{children:u?"Acquiring GPS...":"Use My Current GPS"})]}),a.jsxs("span",{className:"picker-instructions",children:[a.jsx(Pn,{size:14})," Click anywhere on map to pin location"]})]}),a.jsx("div",{style:{width:"100%",height:"280px",borderRadius:"var(--radius-md)",overflow:"hidden",border:"1px solid var(--border-color)"},children:a.jsxs(Kv,{center:h,zoom:14,style:{width:"100%",height:"100%"},children:[a.jsx(Yv,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),a.jsx(Tk,{center:h}),a.jsx(zk,{onLocationSelected:_}),o.lat&&o.lng&&a.jsx(mu,{position:[o.lat,o.lng],icon:Lk})]})}),a.jsxs("div",{className:"picker-address-preview",children:[a.jsx("span",{className:"address-label",children:"Selected Incident Coordinates & Address:"}),a.jsx("div",{className:"address-value",children:o.address||`${(b=o.lat)==null?void 0:b.toFixed(5)}, ${(C=o.lng)==null?void 0:C.toFixed(5)}`})]}),a.jsx("style",{children:`
        .location-picker-wrapper {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .picker-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .picker-instructions {
          font-size: 0.8rem;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .picker-address-preview {
          background: rgba(15, 23, 42, 0.7);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
          font-size: 0.85rem;
        }
        .address-label {
          display: block;
          font-size: 0.75rem;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 2px;
        }
        .address-value {
          color: var(--text-primary);
          font-weight: 500;
          line-height: 1.4;
        }
        .spin-icon {
          animation: spin 1s linear infinite;
        }
      `})]})},Rk=[{id:"Harassment",label:"Harassment / Stalking",desc:"Eve-teasing, catcalling, stalking or physical intimidation"},{id:"Unsafe Location",label:"Unsafe Location",desc:"Dark alley, broken streetlights, deserted isolated passage"},{id:"Suspicious Activity",label:"Suspicious Activity",desc:"Loitering groups, following vehicles, suspicious behavior"},{id:"Transport Safety",label:"Transport Safety",desc:"Reckless cab/auto drivers, route deviations, unmetered transit"},{id:"Other",label:"Other Hazard",desc:"Any other safety or public hazard concern"}],Mk=["Low","Medium","High","Critical"],Ak=()=>{const{isAuthenticated:e,user:t}=vt(),r=Qt(),i=Lr(),[o,l]=P.useState({category:"Harassment",title:"",description:"",severity:"Medium",isAnonymous:!1,lat:28.6139,lng:77.209,address:""}),[u,f]=P.useState(null),[h,m]=P.useState(null),[_,x]=P.useState(!1),[b,C]=P.useState(""),S=({lat:g,lng:w,address:j})=>{l(z=>({...z,lat:g,lng:w,address:j}))},E=g=>{const w=g.target.files[0];if(w){if(w.size>5*1024*1024){r.error("Image size must be less than 5MB.");return}f(w),m(URL.createObjectURL(w))}},R=()=>{f(null),m(null)},y=async g=>{var w,j;if(g.preventDefault(),C(""),!o.title.trim()){C("Please provide a descriptive title for this safety issue.");return}if(!o.description.trim()){C("Please explain what happened in the description.");return}x(!0);try{const z=new FormData;z.append("category",o.category),z.append("title",o.title),z.append("description",o.description),z.append("severity",o.severity),z.append("isAnonymous",o.isAnonymous),z.append("lat",o.lat),z.append("lng",o.lng),z.append("address",o.address||"Location coordinates specified"),u&&z.append("image",u),(await Ek(z)).success&&(r.success("Safety report submitted successfully!"),e?i("/my-reports"):(r.info("Thank you for reporting! Authorities and moderators have received your incident report."),l({category:"Harassment",title:"",description:"",severity:"Medium",isAnonymous:!1,lat:28.6139,lng:77.209,address:""}),R()))}catch(z){const D=((j=(w=z.response)==null?void 0:w.data)==null?void 0:j.message)||z.message||"Failed to submit report. Please check fields.";C(D),r.error(D)}finally{x(!1)}};return a.jsxs("div",{className:"report-page",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"report-header glass-card",children:[a.jsxs("div",{className:"header-tag",children:[a.jsx(It,{size:16,color:"#f43f5e"}),a.jsx("span",{children:"Community Incident & Hazard Hotline"})]}),a.jsx("h1",{children:"Report a Safety Incident or Hazard"}),a.jsx("p",{children:"Help build a safer community by reporting harassment, unsafe areas, poorly lit walkways, or transit risks. Reports are reviewed by safety moderators."})]}),a.jsxs("form",{onSubmit:y,className:"report-form-grid",children:[a.jsxs("div",{className:"form-main-col glass-card",children:[b&&a.jsxs("div",{className:"alert alert-danger",children:[a.jsx(Sd,{size:18}),a.jsx("span",{children:b})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label form-label-required",children:"Select Hazard / Incident Category"}),a.jsx("div",{className:"category-select-grid",children:Rk.map(g=>a.jsxs("button",{type:"button",className:`category-pill-btn ${o.category===g.id?"active":""}`,onClick:()=>l({...o,category:g.id}),children:[a.jsx("strong",{children:g.label}),a.jsx("span",{children:g.desc})]},g.id))})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label form-label-required",children:"Report Title / Summary"}),a.jsx("input",{type:"text",className:"form-control",placeholder:"e.g. Broken streetlights and catcalling near Metro Gate 3",value:o.title,onChange:g=>l({...o,title:g.target.value}),required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label form-label-required",children:"Detailed Incident Description"}),a.jsx("textarea",{className:"form-control",rows:5,placeholder:"Describe what occurred, time of incident, physical landmarks, perpetrator descriptions, or vehicle registration numbers if noted...",value:o.description,onChange:g=>l({...o,description:g.target.value}),required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Severity Level"}),a.jsx("div",{className:"severity-options-row",children:Mk.map(g=>a.jsx("button",{type:"button",className:`severity-btn sev-${g.toLowerCase()} ${o.severity===g?"active":""}`,onClick:()=>l({...o,severity:g}),children:g},g))})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Attach Photographic Evidence (Optional)"}),h?a.jsxs("div",{className:"image-preview-wrapper",children:[a.jsx("img",{src:h,alt:"Report attachment preview",className:"image-preview-thumb"}),a.jsx("button",{type:"button",onClick:R,className:"remove-img-btn",title:"Remove attached photo",children:a.jsx(Ks,{size:16})})]}):a.jsxs("label",{className:"image-upload-dropzone",children:[a.jsx(U2,{size:28,color:"#94a3b8"}),a.jsx("span",{className:"upload-main-text",children:"Click to browse or drag & drop photo"}),a.jsx("span",{className:"upload-sub-text",children:"PNG, JPG, WEBP up to 5MB"}),a.jsx("input",{type:"file",accept:"image/*",onChange:E,style:{display:"none"}})]})]}),a.jsx("div",{className:"form-group anonymous-toggle-box",children:a.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.75rem",cursor:"pointer"},children:[a.jsx("input",{type:"checkbox",checked:o.isAnonymous,onChange:g=>l({...o,isAnonymous:g.target.checked}),style:{width:"18px",height:"18px",accentColor:"#f43f5e"}}),a.jsxs("div",{children:[a.jsxs("strong",{style:{display:"flex",alignItems:"center",gap:"0.4rem",color:"var(--text-primary)"},children:[a.jsx(j2,{size:16,color:"#fda4af"})," Submit Anonymously"]}),a.jsx("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:"Your name and identity will NOT be associated with this report in public/admin views."})]})]})})]}),a.jsxs("div",{className:"form-map-col glass-card",children:[a.jsxs("div",{className:"map-picker-head",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsx(Pn,{size:20,color:"#f43f5e"}),a.jsx("h3",{style:{fontSize:"1.15rem"},children:"Pin Incident Location"})]}),a.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-muted)"},children:"Click on the map or use your GPS to pinpoint the exact location of the issue."})]}),a.jsx(Ok,{initialLat:o.lat,initialLng:o.lng,initialAddress:o.address,onLocationChange:S}),a.jsxs("div",{className:"submission-actions",children:[a.jsx("button",{type:"submit",disabled:_,className:"btn btn-primary btn-lg btn-block",children:_?a.jsxs(a.Fragment,{children:[a.jsx(jr,{size:18,className:"spin-icon"}),a.jsx("span",{children:"Submitting Report..."})]}):a.jsxs(a.Fragment,{children:[a.jsx(B2,{size:18}),a.jsx("span",{children:"Submit Safety Report"})]})}),a.jsx("p",{className:"privacy-note",children:"🔒 All submissions are processed securely in accordance with community safety guidelines."})]})]})]})]}),a.jsx("style",{children:`
        .report-page {
          padding-bottom: 3rem;
        }
        .report-header {
          padding: 2rem;
          margin-bottom: 2rem;
        }
        .header-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          font-weight: 700;
          color: #f43f5e;
          background: rgba(244, 63, 94, 0.12);
          border: 1px solid rgba(244, 63, 94, 0.3);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          margin-bottom: 0.75rem;
        }
        .report-header h1 {
          font-size: 1.85rem;
          margin-bottom: 0.35rem;
        }
        .report-header p {
          font-size: 0.92rem;
          color: var(--text-secondary);
        }
        .report-form-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 1.75rem;
        }
        .form-main-col, .form-map-col {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .category-select-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.6rem;
        }
        .category-pill-btn {
          text-align: left;
          padding: 0.75rem 1rem;
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: var(--transition-fast);
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .category-pill-btn strong {
          color: var(--text-primary);
          font-size: 0.92rem;
        }
        .category-pill-btn span {
          color: var(--text-muted);
          font-size: 0.78rem;
        }
        .category-pill-btn:hover {
          border-color: rgba(244, 63, 94, 0.4);
          background: rgba(15, 23, 42, 0.85);
        }
        .category-pill-btn.active {
          border-color: var(--primary);
          background: rgba(244, 63, 94, 0.12);
        }
        .category-pill-btn.active strong {
          color: #fda4af;
        }
        .severity-options-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.5rem;
        }
        .severity-btn {
          padding: 0.5rem;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .severity-btn.active.sev-low { background: rgba(16, 185, 129, 0.2); border-color: #10b981; color: #34d399; }
        .severity-btn.active.sev-medium { background: rgba(234, 179, 8, 0.2); border-color: #eab308; color: #facc15; }
        .severity-btn.active.sev-high { background: rgba(249, 115, 22, 0.2); border-color: #f97316; color: #fb923c; }
        .severity-btn.active.sev-critical { background: rgba(239, 68, 68, 0.2); border-color: #ef4444; color: #f87171; }
        .image-upload-dropzone {
          border: 2px dashed var(--border-color);
          border-radius: var(--radius-md);
          padding: 1.75rem;
          text-align: center;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          transition: var(--transition-fast);
        }
        .image-upload-dropzone:hover {
          border-color: var(--primary);
          background: rgba(244, 63, 94, 0.04);
        }
        .upload-main-text {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .upload-sub-text {
          font-size: 0.78rem;
          color: var(--text-dim);
        }
        .image-preview-wrapper {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          max-height: 200px;
          border: 1px solid var(--border-color);
        }
        .image-preview-thumb {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
        }
        .remove-img-btn {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.7);
          border: none;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .anonymous-toggle-box {
          background: rgba(15, 23, 42, 0.5);
          padding: 0.85rem 1rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
        }
        .map-picker-head {
          margin-bottom: 0.5rem;
        }
        .submission-actions {
          margin-top: auto;
          padding-top: 1rem;
        }
        .privacy-note {
          font-size: 0.78rem;
          color: var(--text-dim);
          text-align: center;
          margin-top: 0.75rem;
        }
        @media (max-width: 992px) {
          .report-form-grid { grid-template-columns: 1fr; }
        }
      `})]})},Ds=e=>{if(!e)return"N/A";const t=new Date(e);return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(t)},Xv=e=>{switch(e){case"Harassment":return{background:"rgba(239, 68, 68, 0.15)",color:"#f87171",border:"1px solid rgba(239, 68, 68, 0.3)"};case"Unsafe Location":return{background:"rgba(245, 158, 11, 0.15)",color:"#fbbf24",border:"1px solid rgba(245, 158, 11, 0.3)"};case"Suspicious Activity":return{background:"rgba(168, 85, 247, 0.15)",color:"#c084fc",border:"1px solid rgba(168, 85, 247, 0.3)"};case"Transport Safety":return{background:"rgba(14, 165, 233, 0.15)",color:"#38bdf8",border:"1px solid rgba(14, 165, 233, 0.3)"};default:return{background:"rgba(148, 163, 184, 0.15)",color:"#cbd5e1",border:"1px solid rgba(148, 163, 184, 0.3)"}}},Jv=e=>{switch(e==null?void 0:e.toLowerCase()){case"critical":return"badge-severity-critical";case"high":return"badge-severity-high";case"medium":return"badge-severity-medium";case"low":return"badge-severity-low";default:return"badge-severity-medium"}},Ik=e=>{switch(e==null?void 0:e.toLowerCase()){case"pending":return"badge-pending";case"reviewing":return"badge-reviewing";case"resolved":return"badge-resolved";case"rejected":return"badge-rejected";default:return"badge-pending"}},Ld=({status:e})=>{const t=e||"Pending",r=Ik(t),i=()=>{switch(t.toLowerCase()){case"reviewing":return a.jsx(Mv,{size:13});case"resolved":return a.jsx(gi,{size:13});case"rejected":return a.jsx(k2,{size:13});case"pending":default:return a.jsx(Ov,{size:13})}};return a.jsxs("span",{className:`badge ${r}`,children:[i(),a.jsx("span",{children:t})]})},Dk=({report:e,showAdminControls:t=!1,onStatusChange:r,onDelete:i})=>{var m,_,x;const[o,l]=P.useState(!1),u=Xv(e.category),f=Jv(e.severity),h=e.imageUrl?e.imageUrl.startsWith("http")?e.imageUrl:`${Ev}${e.imageUrl}`:null;return a.jsxs("div",{className:"report-card glass-card",children:[a.jsxs("div",{className:"report-card-top",children:[a.jsxs("div",{className:"badges-row",children:[a.jsx("span",{className:"category-pill",style:u,children:e.category}),a.jsxs("span",{className:`badge ${f}`,children:[e.severity||"Medium"," Severity"]}),e.isAnonymous&&a.jsx("span",{className:"anonymous-pill",children:"Anonymous Report"})]}),a.jsx(Ld,{status:e.status})]}),a.jsx("h3",{className:"report-title",children:e.title}),a.jsxs("div",{className:"report-meta-row",children:[a.jsxs("div",{className:"meta-item",children:[a.jsx(Tv,{size:14}),a.jsx("span",{children:Ds(e.createdAt)})]}),((m=e.location)==null?void 0:m.address)&&a.jsxs("div",{className:"meta-item location-item",title:e.location.address,children:[a.jsx(Pn,{size:14,color:"#f43f5e"}),a.jsx("span",{className:"truncate-text",children:e.location.address})]})]}),a.jsx("p",{className:"report-desc",children:o?e.description:((_=e.description)==null?void 0:_.length)>140?`${e.description.substring(0,140)}...`:e.description}),((x=e.description)==null?void 0:x.length)>140&&a.jsx("button",{type:"button",onClick:()=>l(!o),className:"toggle-desc-btn",children:o?a.jsxs(a.Fragment,{children:["Show less ",a.jsx(b2,{size:14})]}):a.jsxs(a.Fragment,{children:["Read more ",a.jsx(w2,{size:14})]})}),h&&a.jsx("div",{className:"report-image-preview-box",children:a.jsx("a",{href:h,target:"_blank",rel:"noopener noreferrer",title:"Click to view full resolution",children:a.jsx("img",{src:h,alt:"Safety Report Evidence",className:"report-evidence-img"})})}),e.adminNotes&&a.jsxs("div",{className:"admin-remark-box",children:[a.jsxs("div",{className:"remark-header",children:[a.jsx(ji,{size:14,color:"#818cf8"}),a.jsx("span",{children:"Moderator Feedback:"})]}),a.jsx("p",{className:"remark-body",children:e.adminNotes})]}),a.jsx("style",{children:`
        .report-card {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          padding: 1.35rem;
          border-radius: var(--radius-lg);
          transition: var(--transition-normal);
        }
        .report-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .badges-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        .category-pill {
          display: inline-flex;
          align-items: center;
          padding: 0.2rem 0.65rem;
          font-size: 0.78rem;
          font-weight: 700;
          border-radius: var(--radius-full);
          text-transform: capitalize;
        }
        .anonymous-pill {
          font-size: 0.72rem;
          background: rgba(255, 255, 255, 0.08);
          color: var(--text-dim);
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-full);
        }
        .report-title {
          font-size: 1.15rem;
          color: var(--text-primary);
          line-height: 1.3;
        }
        .report-meta-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.25rem;
          font-size: 0.82rem;
          color: var(--text-muted);
        }
        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .location-item {
          max-width: 320px;
        }
        .truncate-text {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .report-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .toggle-desc-btn {
          background: transparent;
          border: none;
          color: var(--primary);
          font-size: 0.82rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.2rem;
          padding: 0;
          align-self: flex-start;
        }
        .report-image-preview-box {
          margin-top: 0.25rem;
          border-radius: var(--radius-md);
          overflow: hidden;
          max-height: 180px;
          width: 100%;
          border: 1px solid var(--border-color);
        }
        .report-evidence-img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease;
        }
        .report-evidence-img:hover {
          transform: scale(1.02);
        }
        .admin-remark-box {
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.25);
          border-radius: var(--radius-md);
          padding: 0.75rem 1rem;
          font-size: 0.85rem;
        }
        .remark-header {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-weight: 700;
          color: #a5b4fc;
          margin-bottom: 0.25rem;
        }
        .remark-body {
          color: var(--text-primary);
        }
      `})]})},Bk=["All","Pending","Reviewing","Resolved","Rejected"],Fk=()=>{const{user:e}=vt(),t=Qt(),[r,i]=P.useState([]),[o,l]=P.useState(!0),[u,f]=P.useState("All"),[h,m]=P.useState("");P.useEffect(()=>{_()},[]);const _=async()=>{l(!0);try{const b=await Qv();b.success&&i(b.reports||[])}catch{t.error("Failed to load your submitted reports.")}finally{l(!1)}},x=r.filter(b=>{var E,R,y,g,w;const C=u==="All"||b.status===u,S=((E=b.title)==null?void 0:E.toLowerCase().includes(h.toLowerCase()))||((R=b.description)==null?void 0:R.toLowerCase().includes(h.toLowerCase()))||((y=b.category)==null?void 0:y.toLowerCase().includes(h.toLowerCase()))||((w=(g=b.location)==null?void 0:g.address)==null?void 0:w.toLowerCase().includes(h.toLowerCase()));return C&&S});return a.jsxs("div",{className:"my-reports-page",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"reports-header-strip glass-card",children:[a.jsxs("div",{className:"header-info",children:[a.jsxs("div",{className:"header-badge",children:[a.jsx(Sr,{size:16,color:"#f43f5e"}),a.jsx("span",{children:"Incident Tracking"})]}),a.jsx("h1",{children:"My Safety Hazard Reports"}),a.jsx("p",{children:"Track real-time progress and moderator feedback on safety issues and incidents you have submitted to the portal."})]}),a.jsxs(te,{to:"/report",className:"btn btn-primary btn-lg",children:[a.jsx(As,{size:18}),a.jsx("span",{children:"File New Incident Report"})]})]}),a.jsxs("div",{className:"reports-filter-bar",children:[a.jsx("div",{className:"status-tabs-row",children:Bk.map(b=>{const C=b==="All"?r.length:r.filter(S=>S.status===b).length;return a.jsxs("button",{className:`status-tab-btn ${u===b?"active":""}`,onClick:()=>f(b),children:[a.jsx("span",{children:b}),a.jsx("span",{className:"tab-count",children:C})]},b)})}),a.jsxs("div",{className:"search-filter-box",children:[a.jsx(bd,{size:16,className:"search-icon"}),a.jsx("input",{type:"text",className:"form-control search-input",placeholder:"Search reports by title, category, location...",value:h,onChange:b=>m(b.target.value)})]})]}),o?a.jsxs("div",{style:{textAlign:"center",padding:"4rem 0"},children:[a.jsx(jr,{size:36,className:"spin-icon",style:{color:"#f43f5e",margin:"0 auto 1rem"}}),a.jsx("p",{style:{color:"var(--text-muted)"},children:"Retrieving your submitted reports..."})]}):x.length>0?a.jsx("div",{className:"grid-2 reports-grid",children:x.map(b=>a.jsx(Dk,{report:b},b._id))}):a.jsxs("div",{className:"empty-state",children:[a.jsx(Sr,{className:"empty-state-icon"}),a.jsx("h3",{children:"No Reports Found"}),a.jsx("p",{style:{maxWidth:"420px",margin:"0.5rem auto 1.5rem",color:"var(--text-muted)"},children:h||u!=="All"?"No reports matching your selected filter criteria.":"You have not submitted any safety incident reports yet. Help keep your neighbourhood safe by reporting unlit areas, harassment, or transport risks."}),u==="All"&&!h&&a.jsxs(te,{to:"/report",className:"btn btn-primary",children:[a.jsx(As,{size:16}),a.jsx("span",{children:"Submit Your First Safety Report"})]})]})]}),a.jsx("style",{children:`
        .my-reports-page {
          padding-bottom: 3rem;
        }
        .reports-header-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          padding: 2rem;
          margin-bottom: 2rem;
        }
        .header-info {
          max-width: 650px;
        }
        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          font-weight: 700;
          color: #f43f5e;
          background: rgba(244, 63, 94, 0.12);
          border: 1px solid rgba(244, 63, 94, 0.3);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          margin-bottom: 0.75rem;
        }
        .header-info h1 {
          font-size: 1.85rem;
          margin-bottom: 0.35rem;
        }
        .header-info p {
          font-size: 0.92rem;
          color: var(--text-secondary);
        }
        .reports-filter-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .status-tabs-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .status-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.45rem 0.85rem;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .status-tab-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.1);
        }
        .status-tab-btn.active {
          background: var(--primary);
          border-color: var(--primary);
          color: #ffffff;
        }
        .tab-count {
          font-size: 0.72rem;
          background: rgba(0, 0, 0, 0.3);
          padding: 0.1rem 0.4rem;
          border-radius: var(--radius-full);
        }
        .search-filter-box {
          position: relative;
          min-width: 280px;
        }
        .search-filter-box .search-icon {
          position: absolute;
          left: 0.85rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-dim);
        }
        .search-filter-box .search-input {
          padding-left: 2.5rem;
        }
      `})]})},Sp=[{id:"night",title:"Night Travel & Solo Commute",icon:O2,color:"#818cf8",tips:[{title:"Walk with Purpose & Confidence",desc:"Keep your head high, maintain situational awareness, and avoid looking distracted on your phone or wearing noise-canceling headphones in isolated stretches."},{title:"Stay on Well-Lit Main Thoroughfares",desc:"Even if a dark alleyway cuts 3 minutes off your commute, always choose populated, well-lit main roads covered by commercial CCTV cameras."},{title:"Share Live Route with Primary Contact",desc:"Before beginning a late-night journey, trigger live location tracking or message your expected ETA to your trusted circle."},{title:"Keep Keys or Defender Accessible",desc:"Have your keys, pepper spray, or emergency device in your coat pocket before reaching dark doorways or parking lots, rather than fumbling in a bag."}]},{id:"transit",title:"Public Transit & Cab Protocols",icon:_2,color:"#f43f5e",tips:[{title:"Verify Driver & Number Plate Before Boarding",desc:"Never enter a ride-share vehicle before matching the car model, color, license plate, and driver photo with the official app."},{title:"Check Child Lock / Door Handles Inside",desc:"Immediately upon entering a cab, test the door handle on your side to ensure the child lock has not been secretly engaged."},{title:"Make a Prominent Phone Call upon Entering",desc:"Loudly state the cab registration number and your destination on a call so the driver knows your location is actively tracked."},{title:"Insist on Standard Route Navigation",desc:"If a driver attempts an unverified shortcut into deserted alleys, speak up immediately and request to stay on the main GPS route."}]},{id:"cyber",title:"Cyber Privacy & Anti-Stalking",icon:Dv,color:"#06b6d4",tips:[{title:"Disable Public Location Check-ins in Real-Time",desc:"Avoid posting real-time stories or checking in at gym/work locations. Post photos after you have left the venue."},{title:"Audit App Background Location Permissions",desc:"Review device settings and revoke background location access for social media and utility apps that do not require it."},{title:"Document Digital Harassment Immediately",desc:"Take full-screen screenshots including timestamps, phone numbers, and profile URLs before blocking stalkers to preserve legal evidence."},{title:"Use Two-Factor Authentication (2FA)",desc:"Protect your email, social accounts, and cloud storage with Authenticator apps rather than standard SMS codes."}]},{id:"legal",title:"Women Legal Rights & Protections",icon:D2,color:"#fbbf24",tips:[{title:"Right to Zero FIR",desc:'A woman can file a "Zero FIR" at ANY police station regardless of jurisdiction where the incident occurred. Police cannot refuse to register it.'},{title:"Right to Privacy during Statement Recording",desc:"Under legal protection acts, a victim of harassment or sexual assault has the right to record statements before a female officer or magistrate in complete privacy."},{title:"Protection Against Sunset Arrests",desc:"Women cannot be arrested between sunset (6:00 PM) and sunrise (6:00 AM) except in rare circumstances with special judicial magistrate permission."},{title:"Free Legal Aid & Support Cell",desc:"Under the Legal Services Authorities Act, every woman is entitled to free legal aid and representation irrespective of income."}]}],Uk=()=>{const[e,t]=P.useState(Sp[0]),r=()=>{window.print()};return a.jsxs("div",{className:"safety-tips-page",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"tips-header-wrapper glass-card",children:[a.jsxs("div",{className:"header-info",children:[a.jsxs("div",{className:"header-badge",children:[a.jsx(xd,{size:16,color:"#f43f5e"}),a.jsx("span",{children:"Safety Knowledge Base"})]}),a.jsx("h1",{children:"Actionable Safety Tips & Legal Rights"}),a.jsx("p",{children:"Essential situational awareness strategies, transit security protocols, cyber self-defense, and constitutional rights for women."})]}),a.jsxs("button",{onClick:r,className:"btn btn-secondary btn-lg print-hide",children:[a.jsx(A2,{size:18}),a.jsx("span",{children:"Print Safety Guide"})]})]}),a.jsx("div",{className:"category-tabs-strip print-hide",children:Sp.map(i=>{const o=i.icon,l=e.id===i.id;return a.jsxs("button",{onClick:()=>t(i),className:`category-tab-btn ${l?"active":""}`,style:{borderColor:l?i.color:void 0,background:l?`${i.color}20`:void 0,color:l?"#ffffff":void 0},children:[a.jsx(o,{size:18,color:i.color}),a.jsx("span",{children:i.title})]},i.id)})}),a.jsxs("div",{className:"tips-content-container",children:[a.jsxs("div",{className:"tips-category-header glass-card",children:[a.jsx("div",{className:"cat-icon-lg",style:{background:`${e.color}20`,color:e.color},children:a.jsx(e.icon,{size:28})}),a.jsxs("div",{children:[a.jsx("h2",{children:e.title}),a.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.9rem"},children:"Key security protocols and actionable measures to safeguard your personal space."})]})]}),a.jsx("div",{className:"grid-2 tips-grid",children:e.tips.map((i,o)=>a.jsxs("div",{className:"tip-card glass-card",children:[a.jsxs("div",{className:"tip-card-head",children:[a.jsx("div",{className:"tip-number-badge",children:o+1}),a.jsx("h3",{children:i.title})]}),a.jsx("p",{className:"tip-body",children:i.desc})]},o))})]}),a.jsxs("div",{className:"pocket-guide-card glass-card",style:{marginTop:"2.5rem"},children:[a.jsxs("div",{className:"guide-header",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem",color:"#f43f5e"},children:[a.jsx(ji,{size:22}),a.jsx("h3",{style:{fontSize:"1.2rem"},children:"Quick Pocket Helpline Reference"})]}),a.jsx("span",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:"Always memorize or bookmark these"})]}),a.jsxs("div",{className:"numbers-table-grid",children:[a.jsxs("div",{className:"num-box",children:[a.jsx("span",{className:"num-code",children:"112"}),a.jsx("span",{className:"num-label",children:"All-in-One National Emergency (Police / Fire / Ambulance)"})]}),a.jsxs("div",{className:"num-box",children:[a.jsx("span",{className:"num-code",style:{color:"#ec4899"},children:"1091"}),a.jsx("span",{className:"num-label",children:"National Women Distress Helpline (24/7 Toll-free)"})]}),a.jsxs("div",{className:"num-box",children:[a.jsx("span",{className:"num-code",style:{color:"#8b5cf6"},children:"181"}),a.jsx("span",{className:"num-label",children:"Domestic Abuse & Crisis Intervention Cell"})]}),a.jsxs("div",{className:"num-box",children:[a.jsx("span",{className:"num-code",style:{color:"#06b6d4"},children:"1930"}),a.jsx("span",{className:"num-label",children:"National Cyber Crime Reporting Portal Hotline"})]})]})]})]}),a.jsx("style",{children:`
        .safety-tips-page {
          padding-bottom: 3rem;
        }
        .tips-header-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          padding: 2rem;
          margin-bottom: 2rem;
        }
        .header-info {
          max-width: 650px;
        }
        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          font-weight: 700;
          color: #f43f5e;
          background: rgba(244, 63, 94, 0.12);
          border: 1px solid rgba(244, 63, 94, 0.3);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          margin-bottom: 0.75rem;
        }
        .header-info h1 {
          font-size: 1.85rem;
          margin-bottom: 0.35rem;
        }
        .header-info p {
          font-size: 0.92rem;
          color: var(--text-secondary);
        }
        .category-tabs-strip {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }
        .category-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.75rem 1.25rem;
          border-radius: var(--radius-lg);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          font-size: 0.92rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .category-tab-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          color: var(--text-primary);
        }
        .tips-category-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .cat-icon-lg {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .tips-category-header h2 {
          font-size: 1.35rem;
          margin-bottom: 0.2rem;
        }
        .tips-grid {
          gap: 1.5rem;
        }
        .tip-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          border-radius: var(--radius-lg);
          transition: var(--transition-normal);
        }
        .tip-card:hover {
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }
        .tip-card-head {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }
        .tip-number-badge {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(244, 63, 94, 0.2);
          color: #fda4af;
          border: 1px solid rgba(244, 63, 94, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.82rem;
          flex-shrink: 0;
        }
        .tip-card-head h3 {
          font-size: 1.1rem;
          line-height: 1.35;
        }
        .tip-body {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .pocket-guide-card {
          padding: 1.75rem;
        }
        .guide-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }
        .numbers-table-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1rem;
        }
        .num-box {
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border-color);
          padding: 1rem;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .num-code {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 800;
          color: #f43f5e;
        }
        .num-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.4;
        }
        @media print {
          .print-hide { display: none !important; }
        }
      `})]})},Hk=["A+","A-","B+","B-","AB+","AB-","O+","O-","Unknown"],Zk=()=>{const{user:e,updateUser:t}=vt(),r=Qt(),[i,o]=P.useState({name:"",phone:"",bloodGroup:"",medicalNotes:"",emergencyMessage:""}),[l,u]=P.useState({currentPassword:"",newPassword:"",confirmNewPassword:""}),[f,h]=P.useState(!1),[m,_]=P.useState(!1),[x,b]=P.useState(""),[C,S]=P.useState("");P.useEffect(()=>{var y,g,w;e&&o({name:e.name||"",phone:e.phone||"",bloodGroup:((y=e.emergencyInfo)==null?void 0:y.bloodGroup)||"",medicalNotes:((g=e.emergencyInfo)==null?void 0:g.medicalNotes)||"",emergencyMessage:((w=e.emergencyInfo)==null?void 0:w.emergencyMessage)||"I am in danger and need immediate assistance. Here is my live location:"})},[e]);const E=async y=>{var g,w;y.preventDefault(),b(""),h(!0);try{(await t({name:i.name,phone:i.phone,emergencyInfo:{bloodGroup:i.bloodGroup,medicalNotes:i.medicalNotes,emergencyMessage:i.emergencyMessage}})).success&&r.success("Emergency profile & medical info updated successfully!")}catch(j){const z=((w=(g=j.response)==null?void 0:g.data)==null?void 0:w.message)||j.message||"Failed to update profile.";b(z),r.error(z)}finally{h(!1)}},R=async y=>{var g,w;if(y.preventDefault(),S(""),l.newPassword.length<6){S("New password must be at least 6 characters.");return}if(l.newPassword!==l.confirmNewPassword){S("New passwords do not match.");return}_(!0);try{(await t({currentPassword:l.currentPassword,newPassword:l.newPassword})).success&&(r.success("Security password updated successfully!"),u({currentPassword:"",newPassword:"",confirmNewPassword:""}))}catch(j){const z=((w=(g=j.response)==null?void 0:g.data)==null?void 0:w.message)||j.message||"Failed to change password. Check current password.";S(z),r.error(z)}finally{_(!1)}};return a.jsxs("div",{className:"profile-page",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"profile-header-card glass-card",children:[a.jsx("div",{className:"avatar-badge",children:a.jsx(La,{size:36,color:"#ffffff"})}),a.jsxs("div",{className:"profile-hero-info",children:[a.jsxs("div",{className:"role-tag",children:[a.jsx(ji,{size:14,color:"#f43f5e"}),a.jsx("span",{children:(e==null?void 0:e.role)==="admin"?"System Administrator":"Protected Citizen"})]}),a.jsx("h1",{children:e==null?void 0:e.name}),a.jsxs("p",{className:"profile-email",children:[a.jsx(Gs,{size:14})," ",e==null?void 0:e.email," • ",a.jsx(Tv,{size:14})," Member since ",Ds(e==null?void 0:e.createdAt)]})]})]}),a.jsxs("div",{className:"profile-layout-grid",children:[a.jsxs("div",{className:"profile-main-column glass-card",children:[a.jsxs("div",{className:"card-section-head",children:[a.jsx(La,{size:20,color:"#f43f5e"}),a.jsx("h3",{children:"Personal & Emergency Contact Information"})]}),x&&a.jsxs("div",{className:"alert alert-danger",children:[a.jsx(Kn,{size:18}),a.jsx("span",{children:x})]}),a.jsxs("form",{onSubmit:E,className:"profile-form",children:[a.jsxs("div",{className:"grid-2 form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label form-label-required",children:"Full Legal Name"}),a.jsx("input",{type:"text",className:"form-control",value:i.name,onChange:y=>o({...i,name:y.target.value}),required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label form-label-required",children:"Primary Phone Number"}),a.jsx("input",{type:"tel",className:"form-control",value:i.phone,onChange:y=>o({...i,phone:y.target.value}),required:!0})]})]}),a.jsxs("div",{className:"grid-2 form-row",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Blood Group"}),a.jsxs("select",{className:"form-control",value:i.bloodGroup,onChange:y=>o({...i,bloodGroup:y.target.value}),children:[a.jsx("option",{value:"",children:"Select Blood Group"}),Hk.map(y=>a.jsx("option",{value:y,style:{background:"#111827"},children:y},y))]}),a.jsx("div",{className:"form-hint",children:"Displayed to emergency responders & hospital wings"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Critical Medical Notes / Allergies"}),a.jsx("input",{type:"text",className:"form-control",placeholder:"e.g. Asthmatic, Penicillin allergy, Diabetic",value:i.medicalNotes,onChange:y=>o({...i,medicalNotes:y.target.value})}),a.jsx("div",{className:"form-hint",children:"Appended to distress broadcasts for first responders"})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Customized Distress Broadcast Message"}),a.jsx("textarea",{className:"form-control",rows:3,value:i.emergencyMessage,onChange:y=>o({...i,emergencyMessage:y.target.value}),placeholder:"The default message sent to your emergency circle with live GPS coordinates..."}),a.jsx("div",{className:"form-hint",children:"Your live GPS coordinates and street address will be automatically appended to this message."})]}),a.jsxs("button",{type:"submit",disabled:f,className:"btn btn-primary",style:{alignSelf:"flex-start"},children:[a.jsx(wd,{size:16}),a.jsx("span",{children:f?"Saving...":"Save Profile Changes"})]})]})]}),a.jsxs("div",{className:"profile-security-column glass-card",children:[a.jsxs("div",{className:"card-section-head",children:[a.jsx(Yn,{size:20,color:"#818cf8"}),a.jsx("h3",{children:"Security & Password"})]}),C&&a.jsxs("div",{className:"alert alert-danger",children:[a.jsx(Kn,{size:18}),a.jsx("span",{children:C})]}),a.jsxs("form",{onSubmit:R,className:"security-form",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label form-label-required",children:"Current Password"}),a.jsx("input",{type:"password",className:"form-control",placeholder:"Enter existing password",value:l.currentPassword,onChange:y=>u({...l,currentPassword:y.target.value}),required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label form-label-required",children:"New Password"}),a.jsx("input",{type:"password",className:"form-control",placeholder:"Minimum 6 characters",value:l.newPassword,onChange:y=>u({...l,newPassword:y.target.value}),required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label form-label-required",children:"Confirm New Password"}),a.jsx("input",{type:"password",className:"form-control",placeholder:"Re-enter new password",value:l.confirmNewPassword,onChange:y=>u({...l,confirmNewPassword:y.target.value}),required:!0})]}),a.jsxs("button",{type:"submit",disabled:m,className:"btn btn-secondary btn-block",children:[a.jsx(Yn,{size:16}),a.jsx("span",{children:m?"Updating...":"Update Password"})]})]})]})]})]}),a.jsx("style",{children:`
        .profile-page {
          padding-bottom: 3rem;
        }
        .profile-header-card {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 2rem;
          margin-bottom: 2rem;
        }
        .avatar-badge {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f43f5e 0%, #be123c 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(244, 63, 94, 0.4);
          flex-shrink: 0;
        }
        .role-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: #f43f5e;
          background: rgba(244, 63, 94, 0.12);
          border: 1px solid rgba(244, 63, 94, 0.3);
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
          margin-bottom: 0.4rem;
        }
        .profile-hero-info h1 {
          font-size: 1.85rem;
          margin-bottom: 0.25rem;
        }
        .profile-email {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .profile-layout-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr;
          gap: 1.75rem;
        }
        .profile-main-column, .profile-security-column {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .card-section-head {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-color);
        }
        .card-section-head h3 {
          font-size: 1.15rem;
        }
        .profile-form, .security-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .form-row {
          gap: 1rem;
        }
        @media (max-width: 900px) {
          .profile-layout-grid { grid-template-columns: 1fr; }
          .profile-header-card { flex-direction: column; text-align: center; }
          .profile-email { justify-content: center; }
        }
      `})]})},Wk=()=>{var z,D,B;const{user:e}=vt(),[t,r]=P.useState([]),[i,o]=P.useState([]),[l,u]=P.useState(null),[f,h]=P.useState(!0),[m,_]=P.useState(!1);P.useEffect(()=>{x()},[]);const x=async()=>{h(!0);try{const[A,ee]=await Promise.allSettled([Nd(),Qv()]);A.status==="fulfilled"&&A.value.success&&r(A.value.contacts||[]),ee.status==="fulfilled"&&ee.value.success&&o(ee.value.reports||[]),b()}catch(A){console.warn("Dashboard load err:",A)}finally{h(!1)}},b=async()=>{_(!0);try{const A=await Ys(),ee=await Qs(A.lat,A.lng);u({lat:A.lat,lng:A.lng,address:ee})}catch(A){console.warn("Dashboard GPS fetch failed:",A.message)}finally{_(!1)}},C=t.length>0,S=t.some(A=>A.isPrimary),E=!!((z=e==null?void 0:e.emergencyInfo)!=null&&z.bloodGroup||(D=e==null?void 0:e.emergencyInfo)!=null&&D.medicalNotes),y=[{label:"Mobile phone number verified",done:!!(e!=null&&e.phone)},{label:"Added at least one trusted emergency contact",done:C},{label:"Designated primary emergency responder",done:S},{label:"Emergency medical profile completed",done:E}],g=y.filter(A=>A.done).length,w=Math.round(g/y.length*100),j=t.find(A=>A.isPrimary)||t[0];return a.jsxs("div",{className:"dashboard-page",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"dashboard-hero glass-card",children:[a.jsxs("div",{className:"hero-greeting",children:[a.jsxs("div",{className:"hero-badge",children:[a.jsx(ji,{size:16,color:"#f43f5e"}),a.jsx("span",{children:"Aegis Command Center"})]}),a.jsxs("h1",{children:["Welcome back, ",(B=e==null?void 0:e.name)==null?void 0:B.split(" ")[0]," 👋"]}),a.jsx("p",{children:"Your real-time emergency safety protection is currently active and monitoring."})]}),a.jsx("div",{className:"dashboard-hero-cta",children:a.jsxs(te,{to:"/emergency",className:"btn btn-primary btn-lg",children:[a.jsx(It,{size:18}),a.jsx("span",{children:"Emergency Center"})]})})]}),a.jsxs("div",{className:"grid-4 kpi-grid",children:[a.jsxs("div",{className:"glass-card kpi-card",children:[a.jsx("div",{className:"kpi-icon-wrap",style:{background:"rgba(16, 185, 129, 0.15)",color:"#34d399"},children:a.jsx(kd,{size:22})}),a.jsxs("div",{className:"kpi-info",children:[a.jsx("span",{className:"kpi-label",children:"Safety Readiness"}),a.jsxs("div",{className:"kpi-value",style:{color:w>=75?"#34d399":"#fbbf24"},children:[w,"%"]}),a.jsxs("span",{className:"kpi-sub",children:[g,"/4 Safety checkpoints done"]})]})]}),a.jsxs("div",{className:"glass-card kpi-card",children:[a.jsx("div",{className:"kpi-icon-wrap",style:{background:"rgba(99, 102, 241, 0.15)",color:"#818cf8"},children:a.jsx(vi,{size:22})}),a.jsxs("div",{className:"kpi-info",children:[a.jsx("span",{className:"kpi-label",children:"Emergency Circle"}),a.jsx("div",{className:"kpi-value",children:t.length}),a.jsx("span",{className:"kpi-sub",children:j?`Primary: ${j.name.split(" ")[0]}`:"No primary set"})]})]}),a.jsxs("div",{className:"glass-card kpi-card",children:[a.jsx("div",{className:"kpi-icon-wrap",style:{background:"rgba(245, 158, 11, 0.15)",color:"#fbbf24"},children:a.jsx(Sr,{size:22})}),a.jsxs("div",{className:"kpi-info",children:[a.jsx("span",{className:"kpi-label",children:"My Reports"}),a.jsx("div",{className:"kpi-value",children:i.length}),a.jsxs("span",{className:"kpi-sub",children:[i.filter(A=>A.status==="Resolved").length," Resolved by moderators"]})]})]}),a.jsxs("div",{className:"glass-card kpi-card",children:[a.jsx("div",{className:"kpi-icon-wrap",style:{background:"rgba(244, 63, 94, 0.15)",color:"#f43f5e"},children:a.jsx(Pn,{size:22})}),a.jsxs("div",{className:"kpi-info",children:[a.jsx("span",{className:"kpi-label",children:"Live GPS Status"}),a.jsx("div",{className:"kpi-value",style:{fontSize:"1.25rem",marginTop:"4px"},children:l?"Connected":"Offline"}),a.jsx("span",{className:"kpi-sub truncate-text",style:{maxWidth:"140px"},children:l?l.address:"Click to fetch"})]})]})]}),a.jsxs("div",{className:"dashboard-middle-grid",children:[a.jsxs("div",{className:"glass-card sos-dashboard-widget",children:[a.jsxs("div",{className:"widget-header",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsx(It,{size:20,color:"#f43f5e"}),a.jsx("h3",{style:{fontSize:"1.2rem"},children:"Instant Distress Dispatch"})]}),a.jsxs(te,{to:"/emergency",className:"widget-link",children:["Full SOS Center ",a.jsx(sn,{size:14})]})]}),a.jsx(jd,{size:"medium"}),a.jsx("div",{className:"quick-dispatch-actions",children:j?a.jsxs("div",{className:"primary-contact-box",children:[a.jsxs("div",{className:"contact-box-left",children:[a.jsx(H2,{size:18,color:"#fbbf24"}),a.jsxs("div",{children:[a.jsxs("strong",{children:["Primary: ",j.name]}),a.jsx("span",{children:j.phone})]})]}),a.jsxs("a",{href:`tel:${j.phone.replace(/[^0-9+]/g,"")}`,className:"btn btn-primary btn-sm",children:[a.jsx(Ot,{size:14})," Quick Call"]})]}):a.jsxs("div",{className:"no-primary-banner",children:[a.jsx("span",{children:"No primary contact configured yet."}),a.jsx(te,{to:"/contacts",className:"btn btn-secondary btn-sm",children:"Add Contact"})]})})]}),a.jsxs("div",{className:"glass-card checklist-widget",children:[a.jsxs("div",{className:"widget-header",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsx(gi,{size:20,color:"#10b981"}),a.jsx("h3",{style:{fontSize:"1.2rem"},children:"Safety Readiness Checklist"})]}),a.jsxs("span",{className:"score-pill",style:{background:w===100?"#10b98120":"#f59e0b20",color:w===100?"#34d399":"#fbbf24"},children:[w,"% Complete"]})]}),a.jsx("div",{className:"checklist-items-stack",children:y.map((A,ee)=>a.jsxs("div",{className:`checklist-row ${A.done?"done":"pending"}`,children:[A.done?a.jsx(gi,{size:18,color:"#10b981",className:"chk-icon"}):a.jsx(Kn,{size:18,color:"#f59e0b",className:"chk-icon"}),a.jsx("span",{className:"chk-label",children:A.label}),!A.done&&a.jsx(te,{to:ee<=2?"/contacts":"/profile",className:"chk-fix-btn",children:"Fix now"})]},ee))}),a.jsxs("div",{className:"widget-bottom-tip",children:["💡 ",a.jsx("em",{children:"Keeping your trusted circle and medical notes up to date increases emergency dispatch efficiency by 70%."})]})]})]}),a.jsxs("div",{className:"dashboard-reports-section glass-card",style:{marginTop:"2rem"},children:[a.jsxs("div",{className:"widget-header",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsx(Sr,{size:20,color:"#818cf8"}),a.jsx("h3",{style:{fontSize:"1.2rem"},children:"My Recent Incident Reports"})]}),a.jsxs("div",{style:{display:"flex",gap:"0.75rem"},children:[a.jsxs(te,{to:"/report",className:"btn btn-primary btn-sm",children:[a.jsx(As,{size:15})," New Report"]}),a.jsx(te,{to:"/my-reports",className:"btn btn-secondary btn-sm",children:"View All"})]})]}),i.length>0?a.jsx("div",{className:"dashboard-reports-table",children:i.slice(0,4).map(A=>a.jsxs("div",{className:"report-row-item",children:[a.jsxs("div",{className:"report-row-left",children:[a.jsx("strong",{children:A.title}),a.jsxs("span",{children:[A.category," • ",Ds(A.createdAt)]})]}),a.jsx("div",{className:"report-row-right",children:a.jsx(Ld,{status:A.status})})]},A._id))}):a.jsxs("div",{className:"empty-state-mini",children:[a.jsx("p",{children:"No safety reports filed yet. If you witness or experience hazards, report them immediately."}),a.jsx(te,{to:"/report",className:"btn btn-secondary btn-sm",style:{marginTop:"0.5rem"},children:"Report an Issue"})]})]}),a.jsx(Pd,{})]}),a.jsx("style",{children:`
        .dashboard-page {
          padding-bottom: 3rem;
        }
        .dashboard-hero {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          padding: 2.25rem;
          margin-bottom: 2rem;
        }
        .hero-greeting {
          max-width: 650px;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          font-weight: 700;
          color: #f43f5e;
          background: rgba(244, 63, 94, 0.12);
          border: 1px solid rgba(244, 63, 94, 0.3);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          margin-bottom: 0.75rem;
        }
        .hero-greeting h1 {
          font-size: 2rem;
          margin-bottom: 0.35rem;
        }
        .hero-greeting p {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }
        .kpi-grid {
          margin-bottom: 2rem;
        }
        .kpi-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
        }
        .kpi-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .kpi-info {
          display: flex;
          flex-direction: column;
        }
        .kpi-label {
          font-size: 0.78rem;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 700;
        }
        .kpi-value {
          font-family: var(--font-heading);
          font-size: 1.7rem;
          font-weight: 800;
          line-height: 1.15;
          margin: 2px 0;
        }
        .kpi-sub {
          font-size: 0.78rem;
          color: var(--text-muted);
        }
        .dashboard-middle-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 1.75rem;
        }
        .sos-dashboard-widget, .checklist-widget {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .widget-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-color);
        }
        .widget-link {
          font-size: 0.85rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
        }
        .score-pill {
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
        }
        .quick-dispatch-actions {
          margin-top: auto;
        }
        .primary-contact-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(15, 23, 42, 0.7);
          padding: 0.85rem 1rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
        }
        .contact-box-left {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .contact-box-left strong {
          display: block;
          font-size: 0.9rem;
          color: var(--text-primary);
        }
        .contact-box-left span {
          font-size: 0.78rem;
          color: var(--text-muted);
        }
        .no-primary-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.3);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.85rem;
          color: #fbbf24;
        }
        .checklist-items-stack {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .checklist-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.6rem 0.75rem;
          background: rgba(15, 23, 42, 0.5);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
          font-size: 0.88rem;
        }
        .chk-label {
          flex: 1;
          color: var(--text-primary);
        }
        .chk-fix-btn {
          font-size: 0.78rem;
          color: #f43f5e;
          font-weight: 700;
          text-decoration: underline;
        }
        .widget-bottom-tip {
          font-size: 0.8rem;
          color: var(--text-dim);
          line-height: 1.4;
        }
        .dashboard-reports-section {
          padding: 1.75rem;
        }
        .dashboard-reports-table {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 1rem;
        }
        .report-row-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1rem;
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
        }
        .report-row-left {
          display: flex;
          flex-direction: column;
        }
        .report-row-left strong {
          color: var(--text-primary);
          font-size: 0.95rem;
        }
        .report-row-left span {
          color: var(--text-muted);
          font-size: 0.8rem;
          margin-top: 2px;
        }
        .empty-state-mini {
          padding: 2rem;
          text-align: center;
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        @media (max-width: 900px) {
          .dashboard-middle-grid { grid-template-columns: 1fr; }
        }
      `})]})},$k=()=>{const[e,t]=P.useState(""),[r,i]=P.useState(""),[o,l]=P.useState(!1),[u,f]=P.useState(""),{loginUser:h}=vt(),m=Qt(),_=Lr(),x=async C=>{var S,E;if(C.preventDefault(),f(""),!e||!r){f("Please provide administrative credentials.");return}l(!0);try{const R=await h({email:e,password:r});R.success&&(R.user.role==="admin"?(m.success("Admin authentication verified. Welcome to Moderator Portal."),_("/admin/dashboard")):(f("Access Denied: This account does not possess administrator privileges."),m.error("Account is not an administrator.")))}catch(R){const y=((E=(S=R.response)==null?void 0:S.data)==null?void 0:E.message)||R.message||"Authentication failed.";f(y),m.error(y)}finally{l(!1)}},b=()=>{t("admin@womensafety.org"),i("Admin@12345")};return a.jsxs("div",{className:"admin-login-page",children:[a.jsx("div",{className:"container",children:a.jsx("div",{className:"admin-login-card-wrapper",children:a.jsxs("div",{className:"admin-login-card glass-card",children:[a.jsxs("div",{className:"admin-badge-head",children:[a.jsx("div",{className:"admin-shield-icon",children:a.jsx(Pr,{size:32,color:"#fbbf24"})}),a.jsx("h2",{children:"Administrative Portal"}),a.jsx("p",{children:"Law Enforcement & Safety Moderator Control Center"})]}),u&&a.jsxs("div",{className:"alert alert-danger",children:[a.jsx(Kn,{size:18}),a.jsx("span",{children:u})]}),a.jsxs("form",{onSubmit:x,className:"admin-form",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label form-label-required",children:"Staff Email Address"}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(Gs,{size:18,className:"input-icon"}),a.jsx("input",{type:"email",className:"form-control with-icon",placeholder:"admin@womensafety.org",value:e,onChange:C=>t(C.target.value),required:!0})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label form-label-required",children:"Security Password"}),a.jsxs("div",{className:"input-with-icon",children:[a.jsx(Yn,{size:18,className:"input-icon"}),a.jsx("input",{type:"password",className:"form-control with-icon",placeholder:"Enter admin password",value:r,onChange:C=>i(C.target.value),required:!0})]})]}),a.jsxs("button",{type:"submit",className:"btn btn-primary btn-block btn-lg admin-submit-btn",disabled:o,children:[a.jsx(Ca,{size:18}),a.jsx("span",{children:o?"Verifying Credentials...":"Authenticate as Admin"})]}),a.jsx("div",{className:"demo-credentials-box",children:a.jsxs("button",{type:"button",onClick:b,className:"btn btn-secondary btn-sm btn-block",children:[a.jsx(kd,{size:15,color:"#fbbf24"}),a.jsx("span",{children:"Fill Default Admin Credentials (admin@womensafety.org)"})]})})]}),a.jsx("div",{className:"admin-footer",children:a.jsxs(te,{to:"/login",className:"return-citizen-link",children:[a.jsx(y2,{size:15})," Return to Citizen User Sign In"]})})]})})}),a.jsx("style",{children:`
        .admin-login-page {
          min-height: calc(100vh - 200px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2.5rem 0;
        }
        .admin-login-card-wrapper {
          max-width: 480px;
          margin: 0 auto;
          width: 100%;
        }
        .admin-login-card {
          padding: 2.5rem 2rem;
          border-radius: var(--radius-xl);
          background: rgba(17, 24, 39, 0.9);
          border: 1px solid rgba(251, 191, 36, 0.35);
        }
        .admin-badge-head {
          text-align: center;
          margin-bottom: 1.75rem;
        }
        .admin-shield-icon {
          width: 60px;
          height: 60px;
          border-radius: var(--radius-lg);
          background: rgba(245, 158, 11, 0.15);
          border: 1px solid rgba(245, 158, 11, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }
        .admin-badge-head h2 {
          font-size: 1.65rem;
          margin-bottom: 0.35rem;
        }
        .admin-badge-head p {
          font-size: 0.88rem;
          color: var(--text-muted);
        }
        .admin-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .admin-submit-btn {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(245, 158, 11, 0.35);
          border: none;
        }
        .admin-submit-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
        }
        .admin-footer {
          margin-top: 1.75rem;
          text-align: center;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
        }
        .return-citizen-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .return-citizen-link:hover {
          color: var(--text-primary);
        }
      `})]})},fc=async()=>(await it.get("/admin/stats")).data,Vk=async(e={})=>(await it.get("/admin/reports",{params:e})).data,qk=async(e,t)=>(await it.put(`/admin/reports/${e}/status`,t)).data,Gk=async e=>(await it.delete(`/admin/reports/${e}`)).data,Kk=()=>{const{user:e}=vt(),t=Qt(),[r,i]=P.useState(null),[o,l]=P.useState([]),[u,f]=P.useState(!0),[h,m]=P.useState(!1),[_,x]=P.useState("All"),[b,C]=P.useState("All"),[S,E]=P.useState(""),[R,y]=P.useState(null),[g,w]=P.useState(!1),[j,z]=P.useState("Pending"),[D,B]=P.useState(""),[A,ee]=P.useState(!1);P.useEffect(()=>{K()},[_,b]);const K=async()=>{f(!0);try{const[V,pe]=await Promise.all([fc(),Vk({status:_,category:b,search:S})]);V.success&&i(V.stats),pe.success&&l(pe.reports||[])}catch{t.error("Failed to load administrative reports.")}finally{f(!1)}},oe=async()=>{m(!0),await K(),m(!1),t.success("Admin dashboard data refreshed.")},xe=V=>{y(V),z(V.status||"Pending"),B(V.adminNotes||""),w(!0)},yt=async V=>{var pe,Se;if(V.preventDefault(),!!R){ee(!0);try{const M=await qk(R._id,{status:j,adminNotes:D});if(M.success){t.success(`Report status updated to ${j}.`),w(!1),l(U=>U.map(q=>q._id===R._id?M.report:q));const Y=await fc();Y.success&&i(Y.stats)}}catch(M){t.error(((Se=(pe=M.response)==null?void 0:pe.data)==null?void 0:Se.message)||"Failed to update report status.")}finally{ee(!1)}}},_e=async V=>{if(window.confirm("Permanent Action: Are you sure you want to delete this incident report from the database?"))try{if((await Gk(V)).success){t.success("Incident report deleted successfully."),l(M=>M.filter(Y=>Y._id!==V));const Se=await fc();Se.success&&i(Se.stats)}}catch{t.error("Failed to delete report.")}};return a.jsxs("div",{className:"admin-dashboard-page",children:[a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"admin-header glass-card",children:[a.jsxs("div",{className:"admin-title-wrap",children:[a.jsxs("div",{className:"admin-role-badge",children:[a.jsx(Pr,{size:16,color:"#fbbf24"}),a.jsx("span",{children:"Moderator Command Console"})]}),a.jsx("h1",{children:"Incident Moderation & Safety Operations"}),a.jsx("p",{children:"Review incoming citizen distress hazard reports, update lifecycle status, and dispatch municipal/police remediation notes."})]}),a.jsxs("button",{onClick:oe,disabled:h,className:"btn btn-secondary",children:[a.jsx(I2,{size:16,className:h?"spin-icon":""}),a.jsx("span",{children:h?"Syncing...":"Refresh Operations"})]})]}),r&&a.jsxs("div",{className:"grid-4 stats-analytics-grid",children:[a.jsxs("div",{className:"glass-card stat-box",children:[a.jsx("div",{className:"stat-icon-wrap",style:{background:"rgba(99, 102, 241, 0.15)",color:"#818cf8"},children:a.jsx(Sr,{size:22})}),a.jsxs("div",{children:[a.jsx("span",{className:"stat-label",children:"Total Reports"}),a.jsx("div",{className:"stat-val",children:r.totalReports}),a.jsxs("span",{className:"stat-sub",children:[r.totalUsers," registered users"]})]})]}),a.jsxs("div",{className:"glass-card stat-box",children:[a.jsx("div",{className:"stat-icon-wrap",style:{background:"rgba(245, 158, 11, 0.15)",color:"#fbbf24"},children:a.jsx(Ov,{size:22})}),a.jsxs("div",{children:[a.jsx("span",{className:"stat-label",children:"Pending Action"}),a.jsx("div",{className:"stat-val",style:{color:"#fbbf24"},children:r.pendingReports}),a.jsx("span",{className:"stat-sub",children:"Requires triage"})]})]}),a.jsxs("div",{className:"glass-card stat-box",children:[a.jsx("div",{className:"stat-icon-wrap",style:{background:"rgba(139, 92, 246, 0.15)",color:"#c084fc"},children:a.jsx(Mv,{size:22})}),a.jsxs("div",{children:[a.jsx("span",{className:"stat-label",children:"Under Review"}),a.jsx("div",{className:"stat-val",style:{color:"#c084fc"},children:r.reviewingReports}),a.jsx("span",{className:"stat-sub",children:"Investigation active"})]})]}),a.jsxs("div",{className:"glass-card stat-box",children:[a.jsx("div",{className:"stat-icon-wrap",style:{background:"rgba(16, 185, 129, 0.15)",color:"#34d399"},children:a.jsx(gi,{size:22})}),a.jsxs("div",{children:[a.jsx("span",{className:"stat-label",children:"Resolved"}),a.jsx("div",{className:"stat-val",style:{color:"#34d399"},children:r.resolvedReports}),a.jsx("span",{className:"stat-sub",children:"Hazard remediated"})]})]})]}),a.jsxs("div",{className:"admin-filter-bar glass-card",children:[a.jsxs("div",{className:"filter-group",children:[a.jsx("label",{className:"filter-label",children:"Filter Status:"}),a.jsxs("select",{className:"form-control filter-select",value:_,onChange:V=>x(V.target.value),children:[a.jsx("option",{value:"All",children:"All Statuses"}),a.jsx("option",{value:"Pending",children:"Pending"}),a.jsx("option",{value:"Reviewing",children:"Reviewing"}),a.jsx("option",{value:"Resolved",children:"Resolved"}),a.jsx("option",{value:"Rejected",children:"Rejected"})]})]}),a.jsxs("div",{className:"filter-group",children:[a.jsx("label",{className:"filter-label",children:"Filter Category:"}),a.jsxs("select",{className:"form-control filter-select",value:b,onChange:V=>C(V.target.value),children:[a.jsx("option",{value:"All",children:"All Categories"}),a.jsx("option",{value:"Harassment",children:"Harassment"}),a.jsx("option",{value:"Unsafe Location",children:"Unsafe Location"}),a.jsx("option",{value:"Suspicious Activity",children:"Suspicious Activity"}),a.jsx("option",{value:"Transport Safety",children:"Transport Safety"}),a.jsx("option",{value:"Other",children:"Other"})]})]}),a.jsxs("div",{className:"filter-search-box",children:[a.jsx("label",{className:"filter-label",children:"Search Reports:"}),a.jsxs("div",{style:{position:"relative"},children:[a.jsx(bd,{size:16,className:"search-icon-inside"}),a.jsx("input",{type:"text",className:"form-control",style:{paddingLeft:"2.5rem"},placeholder:"Search description, address...",value:S,onChange:V=>E(V.target.value),onKeyDown:V=>V.key==="Enter"&&K()})]})]})]}),u?a.jsxs("div",{style:{textAlign:"center",padding:"4rem 0"},children:[a.jsx(jr,{size:36,className:"spin-icon",style:{color:"#fbbf24",margin:"0 auto 1rem"}}),a.jsx("p",{style:{color:"var(--text-muted)"},children:"Loading incident moderation records..."})]}):o.length>0?a.jsx("div",{className:"admin-reports-table-container glass-card",children:a.jsx("div",{className:"table-responsive",children:a.jsxs("table",{className:"admin-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Date & ID"}),a.jsx("th",{children:"Category & Severity"}),a.jsx("th",{children:"Report Summary"}),a.jsx("th",{children:"Location"}),a.jsx("th",{children:"Reporter"}),a.jsx("th",{children:"Status"}),a.jsx("th",{children:"Actions"})]})}),a.jsx("tbody",{children:o.map(V=>{var Y,U;const pe=Xv(V.category),Se=Jv(V.severity),M=V.imageUrl?V.imageUrl.startsWith("http")?V.imageUrl:`${Ev}${V.imageUrl}`:null;return a.jsxs("tr",{className:"admin-row",children:[a.jsxs("td",{children:[a.jsx("div",{className:"td-date",children:Ds(V.createdAt)}),a.jsxs("span",{className:"td-id",children:["#",V._id.slice(-6)]})]}),a.jsx("td",{children:a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",alignItems:"flex-start"},children:[a.jsx("span",{className:"category-pill",style:pe,children:V.category}),a.jsx("span",{className:`badge ${Se}`,style:{fontSize:"0.72rem"},children:V.severity||"Medium"})]})}),a.jsxs("td",{style:{maxWidth:"320px"},children:[a.jsx("strong",{className:"td-title",children:V.title}),a.jsx("p",{className:"td-desc",children:V.description}),M&&a.jsx("a",{href:M,target:"_blank",rel:"noopener noreferrer",className:"img-attachment-tag",children:"🖼️ View Evidence Photo"}),V.adminNotes&&a.jsxs("div",{className:"td-admin-note",children:[a.jsx("strong",{children:"Note:"})," ",V.adminNotes]})]}),a.jsxs("td",{style:{maxWidth:"200px"},children:[a.jsxs("div",{className:"td-location",children:[a.jsx(Pn,{size:14,color:"#f43f5e"}),a.jsx("span",{children:((Y=V.location)==null?void 0:Y.address)||"Not specified"})]}),((U=V.location)==null?void 0:U.lat)&&a.jsx("a",{href:`https://www.google.com/maps?q=${V.location.lat},${V.location.lng}`,target:"_blank",rel:"noopener noreferrer",className:"map-coords-link",children:"Maps ↗"})]}),a.jsx("td",{children:V.isAnonymous?a.jsx("span",{className:"anon-badge",children:"Anonymous"}):V.user?a.jsxs("div",{className:"reporter-info",children:[a.jsx("strong",{children:V.user.name}),a.jsx("span",{children:V.user.phone})]}):a.jsx("span",{className:"anon-badge",children:"Guest Citizen"})}),a.jsx("td",{children:a.jsx(Ld,{status:V.status})}),a.jsx("td",{children:a.jsxs("div",{className:"table-action-btns",children:[a.jsxs("button",{onClick:()=>xe(V),className:"btn btn-sm btn-secondary edit-status-btn",title:"Update Status & Add Moderator Feedback",children:[a.jsx(R2,{size:15}),a.jsx("span",{children:"Triage"})]}),a.jsx("button",{onClick:()=>_e(V._id),className:"btn btn-sm btn-outline-danger delete-btn",title:"Delete Record",children:a.jsx(Bv,{size:15})})]})})]},V._id)})})]})})}):a.jsxs("div",{className:"empty-state",children:[a.jsx(Sr,{className:"empty-state-icon"}),a.jsx("h3",{children:"No Reports Matching Filter"}),a.jsx("p",{style:{color:"var(--text-muted)"},children:"No safety hazard reports found for your current filter query."})]}),g&&R&&a.jsx("div",{className:"modal-backdrop",onClick:()=>w(!1),children:a.jsxs("div",{className:"modal-content",onClick:V=>V.stopPropagation(),style:{maxWidth:"560px"},children:[a.jsxs("div",{className:"modal-header",children:[a.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"1.2rem"},children:[a.jsx(Pr,{size:20,color:"#fbbf24"}),a.jsxs("span",{children:["Update Status: #",R._id.slice(-6)]})]}),a.jsx("button",{onClick:()=>w(!1),style:{background:"transparent",border:"none",color:"#94a3b8",cursor:"pointer"},children:a.jsx(Ks,{size:20})})]}),a.jsxs("form",{onSubmit:yt,children:[a.jsxs("div",{className:"modal-body",children:[a.jsxs("div",{style:{marginBottom:"1rem",background:"rgba(15, 23, 42, 0.6)",padding:"0.85rem",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)"},children:[a.jsx("strong",{style:{display:"block",fontSize:"0.95rem",color:"#f8fafc"},children:R.title}),a.jsxs("span",{style:{fontSize:"0.8rem",color:"#94a3b8"},children:[R.category," • ",Ds(R.createdAt)]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label form-label-required",children:"Change Moderation Status"}),a.jsxs("select",{className:"form-control",value:j,onChange:V=>z(V.target.value),children:[a.jsx("option",{value:"Pending",style:{background:"#111827"},children:"Pending (Needs Triage)"}),a.jsx("option",{value:"Reviewing",style:{background:"#111827"},children:"Reviewing (Under Investigation / Dispatched)"}),a.jsx("option",{value:"Resolved",style:{background:"#111827"},children:"Resolved (Remediated / Hazard Cleared)"}),a.jsx("option",{value:"Rejected",style:{background:"#111827"},children:"Rejected (Duplicate / Unsubstantiated)"})]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Official Moderator Feedback / Notes"}),a.jsx("textarea",{className:"form-control",rows:4,placeholder:"e.g. Dispatched patrol team to inspect area. Notified municipal electricity board on Aug 27...",value:D,onChange:V=>B(V.target.value)}),a.jsx("div",{className:"form-hint",children:'This feedback is visible to the citizen reporter in their "My Reports" tracker.'})]})]}),a.jsxs("div",{className:"modal-footer",children:[a.jsx("button",{type:"button",onClick:()=>w(!1),className:"btn btn-secondary btn-sm",disabled:A,children:"Cancel"}),a.jsxs("button",{type:"submit",className:"btn btn-primary btn-sm",disabled:A,children:[a.jsx(wd,{size:16}),a.jsx("span",{children:A?"Updating...":"Save & Broadcast Status"})]})]})]})]})})]}),a.jsx("style",{children:`
        .admin-dashboard-page {
          padding-bottom: 3rem;
        }
        .admin-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          padding: 2rem;
          margin-bottom: 2rem;
          border: 1px solid rgba(251, 191, 36, 0.3);
        }
        .admin-title-wrap {
          max-width: 650px;
        }
        .admin-role-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          font-weight: 700;
          color: #fbbf24;
          background: rgba(245, 158, 11, 0.12);
          border: 1px solid rgba(245, 158, 11, 0.35);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          margin-bottom: 0.75rem;
        }
        .admin-title-wrap h1 {
          font-size: 1.85rem;
          margin-bottom: 0.35rem;
        }
        .admin-title-wrap p {
          font-size: 0.92rem;
          color: var(--text-secondary);
        }
        .stats-analytics-grid {
          margin-bottom: 2rem;
        }
        .stat-box {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
        }
        .stat-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .stat-label {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-dim);
          font-weight: 700;
        }
        .stat-val {
          font-family: var(--font-heading);
          font-size: 1.75rem;
          font-weight: 800;
          line-height: 1.15;
        }
        .stat-sub {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .admin-filter-bar {
          display: flex;
          align-items: flex-end;
          gap: 1.25rem;
          padding: 1.25rem 1.5rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          min-width: 170px;
        }
        .filter-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
        }
        .filter-select {
          padding: 0.55rem 0.85rem;
        }
        .filter-search-box {
          flex: 1;
          min-width: 240px;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .search-icon-inside {
          position: absolute;
          left: 0.85rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-dim);
        }
        .admin-reports-table-container {
          padding: 1.25rem;
          overflow: hidden;
        }
        .table-responsive {
          width: 100%;
          overflow-x: auto;
        }
        .admin-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.88rem;
        }
        .admin-table th {
          padding: 0.85rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          color: var(--text-dim);
          font-weight: 700;
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 1px solid var(--border-color);
        }
        .admin-table td {
          padding: 1rem;
          border-bottom: 1px solid var(--border-color);
          vertical-align: top;
        }
        .admin-row:hover {
          background: rgba(255, 255, 255, 0.02);
        }
        .td-date {
          color: var(--text-primary);
          font-weight: 600;
          white-space: nowrap;
        }
        .td-id {
          font-family: monospace;
          font-size: 0.75rem;
          color: var(--text-dim);
        }
        .td-title {
          color: var(--text-primary);
          display: block;
          margin-bottom: 0.25rem;
        }
        .td-desc {
          font-size: 0.82rem;
          color: var(--text-muted);
          line-height: 1.4;
          margin-bottom: 0.4rem;
        }
        .img-attachment-tag {
          font-size: 0.78rem;
          color: #fbbf24;
          display: inline-block;
          margin-bottom: 0.35rem;
        }
        .td-admin-note {
          background: rgba(99, 102, 241, 0.1);
          border-left: 2px solid #818cf8;
          padding: 0.35rem 0.6rem;
          font-size: 0.78rem;
          color: #cbd5e1;
          border-radius: 2px;
        }
        .td-location {
          display: flex;
          align-items: flex-start;
          gap: 0.35rem;
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.35;
        }
        .map-coords-link {
          font-size: 0.75rem;
          color: var(--primary);
          display: inline-block;
          margin-top: 4px;
        }
        .reporter-info strong {
          display: block;
          color: var(--text-primary);
        }
        .reporter-info span {
          font-size: 0.75rem;
          color: var(--text-dim);
        }
        .anon-badge {
          font-size: 0.75rem;
          color: var(--text-dim);
          background: rgba(255, 255, 255, 0.05);
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-full);
        }
        .table-action-btns {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          white-space: nowrap;
        }
      `})]})},Yk=()=>a.jsxs("div",{className:"not-found-page",children:[a.jsx("div",{className:"container",children:a.jsxs("div",{className:"not-found-card glass-card glass-card-glow",children:[a.jsx("div",{className:"not-found-icon",children:a.jsx(It,{size:48,color:"#f43f5e"})}),a.jsx("div",{className:"not-found-code",children:"404"}),a.jsx("h1",{children:"Page Not Found"}),a.jsx("p",{children:"The safety page you requested might have been moved or does not exist. If you require emergency assistance, trigger the SOS portal immediately."}),a.jsxs("div",{className:"not-found-actions",children:[a.jsxs(te,{to:"/",className:"btn btn-primary btn-lg",children:[a.jsx(C2,{size:18}),a.jsx("span",{children:"Return Home"})]}),a.jsxs(te,{to:"/emergency",className:"btn btn-danger btn-lg",children:[a.jsx(Av,{size:18}),a.jsx("span",{children:"Emergency SOS"})]})]})]})}),a.jsx("style",{children:`
        .not-found-page {
          min-height: calc(100vh - 250px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem 0;
        }
        .not-found-card {
          max-width: 540px;
          margin: 0 auto;
          text-align: center;
          padding: 3rem 2rem;
          border-radius: var(--radius-xl);
        }
        .not-found-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(244, 63, 94, 0.12);
          border: 1px solid rgba(244, 63, 94, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }
        .not-found-code {
          font-family: var(--font-heading);
          font-size: 4.5rem;
          font-weight: 900;
          line-height: 1;
          color: #f43f5e;
          letter-spacing: -0.05em;
          margin-bottom: 0.5rem;
        }
        .not-found-card h1 {
          font-size: 1.75rem;
          margin-bottom: 0.75rem;
        }
        .not-found-card p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        .not-found-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
      `})]});function Qk(){return a.jsx(B1,{children:a.jsxs(et,{path:"/",element:a.jsx(q2,{}),children:[a.jsx(et,{index:!0,element:a.jsx(Q2,{})}),a.jsx(et,{path:"login",element:a.jsx(X2,{})}),a.jsx(et,{path:"register",element:a.jsx(J2,{})}),a.jsx(et,{path:"emergency",element:a.jsx(rk,{})}),a.jsx(et,{path:"location",element:a.jsx(Ck,{})}),a.jsx(et,{path:"report",element:a.jsx(Ak,{})}),a.jsx(et,{path:"safety-tips",element:a.jsx(Uk,{})}),a.jsx(et,{path:"admin/login",element:a.jsx($k,{})}),a.jsx(et,{path:"contacts",element:a.jsx(Io,{children:a.jsx(ak,{})})}),a.jsx(et,{path:"my-reports",element:a.jsx(Io,{children:a.jsx(Fk,{})})}),a.jsx(et,{path:"profile",element:a.jsx(Io,{children:a.jsx(Zk,{})})}),a.jsx(et,{path:"dashboard",element:a.jsx(Io,{children:a.jsx(Wk,{})})}),a.jsx(et,{path:"admin/dashboard",element:a.jsx(G2,{children:a.jsx(Kk,{})})}),a.jsx(et,{path:"*",element:a.jsx(Yk,{})})]})})}hc.createRoot(document.getElementById("root")).render(a.jsx(ps.StrictMode,{children:a.jsx(q1,{children:a.jsx(K2,{children:a.jsx(h2,{children:a.jsx(Qk,{})})})})}));

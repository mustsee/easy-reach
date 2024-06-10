(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Yl(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Ae={},Us=[],Lt=()=>{},a0=()=>!1,c0=/^on[^a-z]/,ya=t=>c0.test(t),Jl=t=>t.startsWith("onUpdate:"),Fe=Object.assign,Xl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},l0=Object.prototype.hasOwnProperty,de=(t,e)=>l0.call(t,e),z=Array.isArray,Bs=t=>Si(t)==="[object Map]",va=t=>Si(t)==="[object Set]",qh=t=>Si(t)==="[object Date]",se=t=>typeof t=="function",qe=t=>typeof t=="string",Qr=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",Zl=t=>Se(t)&&se(t.then)&&se(t.catch),yp=Object.prototype.toString,Si=t=>yp.call(t),u0=t=>Si(t).slice(8,-1),vp=t=>Si(t)==="[object Object]",eu=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,_o=Yl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_a=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},h0=/-(\w)/g,tn=_a(t=>t.replace(h0,(e,n)=>n?n.toUpperCase():"")),f0=/\B([A-Z])/g,dr=_a(t=>t.replace(f0,"-$1").toLowerCase()),wa=_a(t=>t.charAt(0).toUpperCase()+t.slice(1)),mc=_a(t=>t?`on${wa(t)}`:""),Yr=(t,e)=>!Object.is(t,e),wo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Lo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},$o=t=>{const e=parseFloat(t);return isNaN(e)?t:e},_p=t=>{const e=qe(t)?Number(t):NaN;return isNaN(e)?t:e};let Hh;const Wc=()=>Hh||(Hh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function tu(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=qe(s)?m0(s):tu(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(qe(t))return t;if(Se(t))return t}}const d0=/;(?![^(]*\))/g,p0=/:([^]+)/,g0=/\/\*[^]*?\*\//g;function m0(t){const e={};return t.replace(g0,"").split(d0).forEach(n=>{if(n){const s=n.split(p0);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Jr(t){let e="";if(qe(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const s=Jr(t[n]);s&&(e+=s+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const y0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",v0=Yl(y0);function wp(t){return!!t||t===""}function _0(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Ea(t[s],e[s]);return n}function Ea(t,e){if(t===e)return!0;let n=qh(t),s=qh(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Qr(t),s=Qr(e),n||s)return t===e;if(n=z(t),s=z(e),n||s)return n&&s?_0(t,e):!1;if(n=Se(t),s=Se(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Ea(t[o],e[o]))return!1}}return String(t)===String(e)}function w0(t,e){return t.findIndex(n=>Ea(n,e))}const VN=t=>qe(t)?t:t==null?"":z(t)||Se(t)&&(t.toString===yp||!se(t.toString))?JSON.stringify(t,Ep,2):String(t),Ep=(t,e)=>e&&e.__v_isRef?Ep(t,e.value):Bs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:va(e)?{[`Set(${e.size})`]:[...e.values()]}:Se(e)&&!z(e)&&!vp(e)?String(e):e;let Tt;class Ip{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Tt,!e&&Tt&&(this.index=(Tt.scopes||(Tt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Tt;try{return Tt=this,e()}finally{Tt=n}}}on(){Tt=this}off(){Tt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Tp(t){return new Ip(t)}function E0(t,e=Tt){e&&e.active&&e.effects.push(t)}function Cp(){return Tt}function I0(t){Tt&&Tt.cleanups.push(t)}const nu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Sp=t=>(t.w&Wn)>0,bp=t=>(t.n&Wn)>0,T0=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Wn},C0=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Sp(r)&&!bp(r)?r.delete(t):e[n++]=r,r.w&=~Wn,r.n&=~Wn}e.length=n}},Fo=new WeakMap;let Nr=0,Wn=1;const Gc=30;let xt;const gs=Symbol(""),Qc=Symbol("");class su{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,E0(this,s)}run(){if(!this.active)return this.fn();let e=xt,n=Fn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=xt,xt=this,Fn=!0,Wn=1<<++Nr,Nr<=Gc?T0(this):zh(this),this.fn()}finally{Nr<=Gc&&C0(this),Wn=1<<--Nr,xt=this.parent,Fn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){xt===this?this.deferStop=!0:this.active&&(zh(this),this.onStop&&this.onStop(),this.active=!1)}}function zh(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Fn=!0;const Ap=[];function pr(){Ap.push(Fn),Fn=!1}function gr(){const t=Ap.pop();Fn=t===void 0?!0:t}function wt(t,e,n){if(Fn&&xt){let s=Fo.get(t);s||Fo.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=nu()),Rp(r)}}function Rp(t,e){let n=!1;Nr<=Gc?bp(t)||(t.n|=Wn,n=!Sp(t)):n=!t.has(xt),n&&(t.add(xt),xt.deps.push(t))}function gn(t,e,n,s,r,i){const o=Fo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?eu(n)&&a.push(o.get("length")):(a.push(o.get(gs)),Bs(t)&&a.push(o.get(Qc)));break;case"delete":z(t)||(a.push(o.get(gs)),Bs(t)&&a.push(o.get(Qc)));break;case"set":Bs(t)&&a.push(o.get(gs));break}if(a.length===1)a[0]&&Yc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Yc(nu(c))}}function Yc(t,e){const n=z(t)?t:[...t];for(const s of n)s.computed&&Kh(s);for(const s of n)s.computed||Kh(s)}function Kh(t,e){(t!==xt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function S0(t,e){var n;return(n=Fo.get(t))==null?void 0:n.get(e)}const b0=Yl("__proto__,__v_isRef,__isVue"),kp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Qr)),A0=ru(),R0=ru(!1,!0),k0=ru(!0),Wh=N0();function N0(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=J(this);for(let i=0,o=this.length;i<o;i++)wt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(J)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){pr();const s=J(this)[e].apply(this,n);return gr(),s}}),t}function D0(t){const e=J(this);return wt(e,"has",t),e.hasOwnProperty(t)}function ru(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?W0:xp:e?Op:Pp).get(s))return s;const o=z(s);if(!t){if(o&&de(Wh,r))return Reflect.get(Wh,r,i);if(r==="hasOwnProperty")return D0}const a=Reflect.get(s,r,i);return(Qr(r)?kp.has(r):b0(r))||(t||wt(s,"get",r),e)?a:$e(a)?o&&eu(r)?a:a.value:Se(a)?t?Mp(a):Dt(a):a}}const P0=Np(),O0=Np(!0);function Np(t=!1){return function(n,s,r,i){let o=n[s];if(Js(o)&&$e(o)&&!$e(r))return!1;if(!t&&(!Uo(r)&&!Js(r)&&(o=J(o),r=J(r)),!z(n)&&$e(o)&&!$e(r)))return o.value=r,!0;const a=z(n)&&eu(s)?Number(s)<n.length:de(n,s),c=Reflect.set(n,s,r,i);return n===J(i)&&(a?Yr(r,o)&&gn(n,"set",s,r):gn(n,"add",s,r)),c}}function x0(t,e){const n=de(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&gn(t,"delete",e,void 0),s}function M0(t,e){const n=Reflect.has(t,e);return(!Qr(e)||!kp.has(e))&&wt(t,"has",e),n}function L0(t){return wt(t,"iterate",z(t)?"length":gs),Reflect.ownKeys(t)}const Dp={get:A0,set:P0,deleteProperty:x0,has:M0,ownKeys:L0},$0={get:k0,set(t,e){return!0},deleteProperty(t,e){return!0}},F0=Fe({},Dp,{get:R0,set:O0}),iu=t=>t,Ia=t=>Reflect.getPrototypeOf(t);function to(t,e,n=!1,s=!1){t=t.__v_raw;const r=J(t),i=J(e);n||(e!==i&&wt(r,"get",e),wt(r,"get",i));const{has:o}=Ia(r),a=s?iu:n?cu:Xr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function no(t,e=!1){const n=this.__v_raw,s=J(n),r=J(t);return e||(t!==r&&wt(s,"has",t),wt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function so(t,e=!1){return t=t.__v_raw,!e&&wt(J(t),"iterate",gs),Reflect.get(t,"size",t)}function Gh(t){t=J(t);const e=J(this);return Ia(e).has.call(e,t)||(e.add(t),gn(e,"add",t,t)),this}function Qh(t,e){e=J(e);const n=J(this),{has:s,get:r}=Ia(n);let i=s.call(n,t);i||(t=J(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Yr(e,o)&&gn(n,"set",t,e):gn(n,"add",t,e),this}function Yh(t){const e=J(this),{has:n,get:s}=Ia(e);let r=n.call(e,t);r||(t=J(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&gn(e,"delete",t,void 0),i}function Jh(){const t=J(this),e=t.size!==0,n=t.clear();return e&&gn(t,"clear",void 0,void 0),n}function ro(t,e){return function(s,r){const i=this,o=i.__v_raw,a=J(o),c=e?iu:t?cu:Xr;return!t&&wt(a,"iterate",gs),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function io(t,e,n){return function(...s){const r=this.__v_raw,i=J(r),o=Bs(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?iu:e?cu:Xr;return!e&&wt(i,"iterate",c?Qc:gs),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function bn(t){return function(...e){return t==="delete"?!1:this}}function U0(){const t={get(i){return to(this,i)},get size(){return so(this)},has:no,add:Gh,set:Qh,delete:Yh,clear:Jh,forEach:ro(!1,!1)},e={get(i){return to(this,i,!1,!0)},get size(){return so(this)},has:no,add:Gh,set:Qh,delete:Yh,clear:Jh,forEach:ro(!1,!0)},n={get(i){return to(this,i,!0)},get size(){return so(this,!0)},has(i){return no.call(this,i,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:ro(!0,!1)},s={get(i){return to(this,i,!0,!0)},get size(){return so(this,!0)},has(i){return no.call(this,i,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:ro(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=io(i,!1,!1),n[i]=io(i,!0,!1),e[i]=io(i,!1,!0),s[i]=io(i,!0,!0)}),[t,n,e,s]}const[B0,V0,j0,q0]=U0();function ou(t,e){const n=e?t?q0:j0:t?V0:B0;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(de(n,r)&&r in s?n:s,r,i)}const H0={get:ou(!1,!1)},z0={get:ou(!1,!0)},K0={get:ou(!0,!1)},Pp=new WeakMap,Op=new WeakMap,xp=new WeakMap,W0=new WeakMap;function G0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Q0(t){return t.__v_skip||!Object.isExtensible(t)?0:G0(u0(t))}function Dt(t){return Js(t)?t:au(t,!1,Dp,H0,Pp)}function Y0(t){return au(t,!1,F0,z0,Op)}function Mp(t){return au(t,!0,$0,K0,xp)}function au(t,e,n,s,r){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Q0(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Un(t){return Js(t)?Un(t.__v_raw):!!(t&&t.__v_isReactive)}function Js(t){return!!(t&&t.__v_isReadonly)}function Uo(t){return!!(t&&t.__v_isShallow)}function Lp(t){return Un(t)||Js(t)}function J(t){const e=t&&t.__v_raw;return e?J(e):t}function Ta(t){return Lo(t,"__v_skip",!0),t}const Xr=t=>Se(t)?Dt(t):t,cu=t=>Se(t)?Mp(t):t;function $p(t){Fn&&xt&&(t=J(t),Rp(t.dep||(t.dep=nu())))}function Fp(t,e){t=J(t);const n=t.dep;n&&Yc(n)}function $e(t){return!!(t&&t.__v_isRef===!0)}function hn(t){return Up(t,!1)}function J0(t){return Up(t,!0)}function Up(t,e){return $e(t)?t:new X0(t,e)}class X0{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:J(e),this._value=n?e:Xr(e)}get value(){return $p(this),this._value}set value(e){const n=this.__v_isShallow||Uo(e)||Js(e);e=n?e:J(e),Yr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Xr(e),Fp(this))}}function Yt(t){return $e(t)?t.value:t}const Z0={get:(t,e,n)=>Yt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return $e(r)&&!$e(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Bp(t){return Un(t)?t:new Proxy(t,Z0)}function e_(t){const e=z(t)?new Array(t.length):{};for(const n in t)e[n]=n_(t,n);return e}class t_{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return S0(J(this._object),this._key)}}function n_(t,e,n){const s=t[e];return $e(s)?s:new t_(t,e,n)}class s_{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new su(e,()=>{this._dirty||(this._dirty=!0,Fp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=J(this);return $p(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function r_(t,e,n=!1){let s,r;const i=se(t);return i?(s=t,r=Lt):(s=t.get,r=t.set),new s_(s,r,i||!r,n)}function Bn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){bi(i,e,n)}return r}function Nt(t,e,n,s){if(se(t)){const i=Bn(t,e,n,s);return i&&Zl(i)&&i.catch(o=>{bi(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Nt(t[i],e,n,s));return r}function bi(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Bn(c,null,10,[t,o,a]);return}}i_(t,n,r,s)}function i_(t,e,n,s=!0){console.error(t)}let Zr=!1,Jc=!1;const ot=[];let zt=0;const Vs=[];let ln=null,os=0;const Vp=Promise.resolve();let lu=null;function Ai(t){const e=lu||Vp;return t?e.then(this?t.bind(this):t):e}function o_(t){let e=zt+1,n=ot.length;for(;e<n;){const s=e+n>>>1;ei(ot[s])<t?e=s+1:n=s}return e}function uu(t){(!ot.length||!ot.includes(t,Zr&&t.allowRecurse?zt+1:zt))&&(t.id==null?ot.push(t):ot.splice(o_(t.id),0,t),jp())}function jp(){!Zr&&!Jc&&(Jc=!0,lu=Vp.then(zp))}function a_(t){const e=ot.indexOf(t);e>zt&&ot.splice(e,1)}function qp(t){z(t)?Vs.push(...t):(!ln||!ln.includes(t,t.allowRecurse?os+1:os))&&Vs.push(t),jp()}function Xh(t,e=Zr?zt+1:0){for(;e<ot.length;e++){const n=ot[e];n&&n.pre&&(ot.splice(e,1),e--,n())}}function Hp(t){if(Vs.length){const e=[...new Set(Vs)];if(Vs.length=0,ln){ln.push(...e);return}for(ln=e,ln.sort((n,s)=>ei(n)-ei(s)),os=0;os<ln.length;os++)ln[os]();ln=null,os=0}}const ei=t=>t.id==null?1/0:t.id,c_=(t,e)=>{const n=ei(t)-ei(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function zp(t){Jc=!1,Zr=!0,ot.sort(c_);const e=Lt;try{for(zt=0;zt<ot.length;zt++){const n=ot[zt];n&&n.active!==!1&&Bn(n,null,14)}}finally{zt=0,ot.length=0,Hp(),Zr=!1,lu=null,(ot.length||Vs.length)&&zp()}}function l_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ae;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||Ae;f&&(r=n.map(p=>qe(p)?p.trim():p)),h&&(r=n.map($o))}let a,c=s[a=mc(e)]||s[a=mc(tn(e))];!c&&i&&(c=s[a=mc(dr(e))]),c&&Nt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Nt(l,t,6,r)}}function Kp(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!se(t)){const c=l=>{const u=Kp(l,e,!0);u&&(a=!0,Fe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Se(t)&&s.set(t,null),null):(z(i)?i.forEach(c=>o[c]=null):Fe(o,i),Se(t)&&s.set(t,o),o)}function Ca(t,e){return!t||!ya(e)?!1:(e=e.slice(2).replace(/Once$/,""),de(t,e[0].toLowerCase()+e.slice(1))||de(t,dr(e))||de(t,e))}let Ge=null,Wp=null;function Bo(t){const e=Ge;return Ge=t,Wp=t&&t.type.__scopeId||null,e}function Xc(t,e=Ge,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&ff(-1);const i=Bo(e);let o;try{o=t(...r)}finally{Bo(i),s._d&&ff(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function yc(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:p,ctx:y,inheritAttrs:v}=t;let C,k;const S=Bo(t);try{if(n.shapeFlag&4){const w=r||s;C=Ot(u.call(w,w,h,i,p,f,y)),k=c}else{const w=e;C=Ot(w.length>1?w(i,{attrs:c,slots:a,emit:l}):w(i,null)),k=e.props?c:h_(c)}}catch(w){Ur.length=0,bi(w,t,1),C=ie(_t)}let L=C;if(k&&v!==!1){const w=Object.keys(k),{shapeFlag:P}=L;w.length&&P&7&&(o&&w.some(Jl)&&(k=f_(k,o)),L=mn(L,k))}return n.dirs&&(L=mn(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),C=L,Bo(S),C}function u_(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(vs(s)){if(s.type!==_t||s.children==="v-if"){if(e)return;e=s}}else return}return e}const h_=t=>{let e;for(const n in t)(n==="class"||n==="style"||ya(n))&&((e||(e={}))[n]=t[n]);return e},f_=(t,e)=>{const n={};for(const s in t)(!Jl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function d_(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Zh(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Ca(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Zh(s,o,l):!0:!!o;return!1}function Zh(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Ca(n,i))return!0}return!1}function hu({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const p_=t=>t.__isSuspense,g_={name:"Suspense",__isSuspense:!0,process(t,e,n,s,r,i,o,a,c,l){t==null?m_(e,n,s,r,i,o,a,c,l):y_(t,e,n,s,r,o,a,c,l)},hydrate:v_,create:fu,normalize:__},jN=g_;function ti(t,e){const n=t.props&&t.props[e];se(n)&&n()}function m_(t,e,n,s,r,i,o,a,c){const{p:l,o:{createElement:u}}=c,h=u("div"),f=t.suspense=fu(t,r,s,e,h,n,i,o,a,c);l(null,f.pendingBranch=t.ssContent,h,null,s,f,i,o),f.deps>0?(ti(t,"onPending"),ti(t,"onFallback"),l(null,t.ssFallback,e,n,s,null,i,o),js(f,t.ssFallback)):f.resolve(!1,!0)}function y_(t,e,n,s,r,i,o,a,{p:c,um:l,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,p=e.ssFallback,{activeBranch:y,pendingBranch:v,isInFallback:C,isHydrating:k}=h;if(v)h.pendingBranch=f,Kt(f,v)?(c(v,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():C&&(c(y,p,n,s,r,null,i,o,a),js(h,p))):(h.pendingId++,k?(h.isHydrating=!1,h.activeBranch=v):l(v,r,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),C?(c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():(c(y,p,n,s,r,null,i,o,a),js(h,p))):y&&Kt(f,y)?(c(y,f,n,s,r,h,i,o,a),h.resolve(!0)):(c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0&&h.resolve()));else if(y&&Kt(f,y))c(y,f,n,s,r,h,i,o,a),js(h,f);else if(ti(e,"onPending"),h.pendingBranch=f,h.pendingId++,c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:S,pendingId:L}=h;S>0?setTimeout(()=>{h.pendingId===L&&h.fallback(p)},S):S===0&&h.fallback(p)}}function fu(t,e,n,s,r,i,o,a,c,l,u=!1){const{p:h,m:f,um:p,n:y,o:{parentNode:v,remove:C}}=l;let k;const S=E_(t);S&&e!=null&&e.pendingBranch&&(k=e.pendingId,e.deps++);const L=t.props?_p(t.props.timeout):void 0,w={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:r,anchor:i,deps:0,pendingId:0,timeout:typeof L=="number"?L:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(P=!1,Y=!1){const{vnode:oe,activeBranch:D,pendingBranch:$,pendingId:Q,effects:he,parentComponent:U,container:ae}=w;if(w.isHydrating)w.isHydrating=!1;else if(!P){const ce=D&&$.transition&&$.transition.mode==="out-in";ce&&(D.transition.afterLeave=()=>{Q===w.pendingId&&f($,ae,ge,0)});let{anchor:ge}=w;D&&(ge=y(D),p(D,U,w,!0)),ce||f($,ae,ge,0)}js(w,$),w.pendingBranch=null,w.isInFallback=!1;let Oe=w.parent,Ke=!1;for(;Oe;){if(Oe.pendingBranch){Oe.effects.push(...he),Ke=!0;break}Oe=Oe.parent}Ke||qp(he),w.effects=[],S&&e&&e.pendingBranch&&k===e.pendingId&&(e.deps--,e.deps===0&&!Y&&e.resolve()),ti(oe,"onResolve")},fallback(P){if(!w.pendingBranch)return;const{vnode:Y,activeBranch:oe,parentComponent:D,container:$,isSVG:Q}=w;ti(Y,"onFallback");const he=y(oe),U=()=>{w.isInFallback&&(h(null,P,$,he,D,null,Q,a,c),js(w,P))},ae=P.transition&&P.transition.mode==="out-in";ae&&(oe.transition.afterLeave=U),w.isInFallback=!0,p(oe,D,null,!0),ae||U()},move(P,Y,oe){w.activeBranch&&f(w.activeBranch,P,Y,oe),w.container=P},next(){return w.activeBranch&&y(w.activeBranch)},registerDep(P,Y){const oe=!!w.pendingBranch;oe&&w.deps++;const D=P.vnode.el;P.asyncDep.catch($=>{bi($,P,0)}).then($=>{if(P.isUnmounted||w.isUnmounted||w.pendingId!==P.suspenseId)return;P.asyncResolved=!0;const{vnode:Q}=P;il(P,$,!1),D&&(Q.el=D);const he=!D&&P.subTree.el;Y(P,Q,v(D||P.subTree.el),D?null:y(P.subTree),w,o,c),he&&C(he),hu(P,Q.el),oe&&--w.deps===0&&w.resolve()})},unmount(P,Y){w.isUnmounted=!0,w.activeBranch&&p(w.activeBranch,n,P,Y),w.pendingBranch&&p(w.pendingBranch,n,P,Y)}};return w}function v_(t,e,n,s,r,i,o,a,c){const l=e.suspense=fu(e,s,n,t.parentNode,document.createElement("div"),null,r,i,o,a,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(!1,!0),u}function __(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=ef(s?n.default:n),t.ssFallback=s?ef(n.fallback):ie(_t)}function ef(t){let e;if(se(t)){const n=Xs&&t._c;n&&(t._d=!1,De()),t=t(),n&&(t._d=!0,e=kt,hg())}return z(t)&&(t=u_(t)),t=Ot(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function w_(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):qp(t)}function js(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,r=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=r,hu(s,r))}function E_(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}function Eo(t,e){return du(t,null,e)}const oo={};function Lr(t,e,n){return du(t,e,n)}function du(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Ae){var a;const c=Cp()===((a=He)==null?void 0:a.scope)?He:null;let l,u=!1,h=!1;if($e(t)?(l=()=>t.value,u=Uo(t)):Un(t)?(l=()=>t,s=!0):z(t)?(h=!0,u=t.some(w=>Un(w)||Uo(w)),l=()=>t.map(w=>{if($e(w))return w.value;if(Un(w))return ls(w);if(se(w))return Bn(w,c,2)})):se(t)?e?l=()=>Bn(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return f&&f(),Nt(t,c,3,[p])}:l=Lt,e&&s){const w=l;l=()=>ls(w())}let f,p=w=>{f=S.onStop=()=>{Bn(w,c,4)}},y;if(ii)if(p=Lt,e?n&&Nt(e,c,3,[l(),h?[]:void 0,p]):l(),r==="sync"){const w=d1();y=w.__watcherHandles||(w.__watcherHandles=[])}else return Lt;let v=h?new Array(t.length).fill(oo):oo;const C=()=>{if(S.active)if(e){const w=S.run();(s||u||(h?w.some((P,Y)=>Yr(P,v[Y])):Yr(w,v)))&&(f&&f(),Nt(e,c,3,[w,v===oo?void 0:h&&v[0]===oo?[]:v,p]),v=w)}else S.run()};C.allowRecurse=!!e;let k;r==="sync"?k=C:r==="post"?k=()=>yt(C,c&&c.suspense):(C.pre=!0,c&&(C.id=c.uid),k=()=>uu(C));const S=new su(l,k);e?n?C():v=S.run():r==="post"?yt(S.run.bind(S),c&&c.suspense):S.run();const L=()=>{S.stop(),c&&c.scope&&Xl(c.scope.effects,S)};return y&&y.push(L),L}function I_(t,e,n){const s=this.proxy,r=qe(t)?t.includes(".")?Gp(s,t):()=>s[t]:t.bind(s,s);let i;se(e)?i=e:(i=e.handler,n=e);const o=He;Gn(this);const a=du(r,i.bind(s),n);return o?Gn(o):Vn(),a}function Gp(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function ls(t,e){if(!Se(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),$e(t))ls(t.value,e);else if(z(t))for(let n=0;n<t.length;n++)ls(t[n],e);else if(va(t)||Bs(t))t.forEach(n=>{ls(n,e)});else if(vp(t))for(const n in t)ls(t[n],e);return t}function qN(t,e){const n=Ge;if(n===null)return t;const s=Da(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ae]=e[i];o&&(se(o)&&(o={mounted:o,updated:o}),o.deep&&ls(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function ns(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(pr(),Nt(c,n,8,[t.el,a,t,e]),gr())}}function Qp(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Aa(()=>{t.isMounted=!0}),eg(()=>{t.isUnmounting=!0}),t}const bt=[Function,Array],Yp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:bt,onEnter:bt,onAfterEnter:bt,onEnterCancelled:bt,onBeforeLeave:bt,onLeave:bt,onAfterLeave:bt,onLeaveCancelled:bt,onBeforeAppear:bt,onAppear:bt,onAfterAppear:bt,onAppearCancelled:bt},T_={name:"BaseTransition",props:Yp,setup(t,{slots:e}){const n=vu(),s=Qp();let r;return()=>{const i=e.default&&pu(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const v of i)if(v.type!==_t){o=v;break}}const a=J(t),{mode:c}=a;if(s.isLeaving)return vc(o);const l=tf(o);if(!l)return vc(o);const u=ni(l,a,s,n);si(l,u);const h=n.subTree,f=h&&tf(h);let p=!1;const{getTransitionKey:y}=l.type;if(y){const v=y();r===void 0?r=v:v!==r&&(r=v,p=!0)}if(f&&f.type!==_t&&(!Kt(l,f)||p)){const v=ni(f,a,s,n);if(si(f,v),c==="out-in")return s.isLeaving=!0,v.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},vc(o);c==="in-out"&&l.type!==_t&&(v.delayLeave=(C,k,S)=>{const L=Jp(s,f);L[String(f.key)]=f,C._leaveCb=()=>{k(),C._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=S})}return o}}},C_=T_;function Jp(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function ni(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:y,onBeforeAppear:v,onAppear:C,onAfterAppear:k,onAppearCancelled:S}=e,L=String(t.key),w=Jp(n,t),P=(D,$)=>{D&&Nt(D,s,9,$)},Y=(D,$)=>{const Q=$[1];P(D,$),z(D)?D.every(he=>he.length<=1)&&Q():D.length<=1&&Q()},oe={mode:i,persisted:o,beforeEnter(D){let $=a;if(!n.isMounted)if(r)$=v||a;else return;D._leaveCb&&D._leaveCb(!0);const Q=w[L];Q&&Kt(t,Q)&&Q.el._leaveCb&&Q.el._leaveCb(),P($,[D])},enter(D){let $=c,Q=l,he=u;if(!n.isMounted)if(r)$=C||c,Q=k||l,he=S||u;else return;let U=!1;const ae=D._enterCb=Oe=>{U||(U=!0,Oe?P(he,[D]):P(Q,[D]),oe.delayedLeave&&oe.delayedLeave(),D._enterCb=void 0)};$?Y($,[D,ae]):ae()},leave(D,$){const Q=String(t.key);if(D._enterCb&&D._enterCb(!0),n.isUnmounting)return $();P(h,[D]);let he=!1;const U=D._leaveCb=ae=>{he||(he=!0,$(),ae?P(y,[D]):P(p,[D]),D._leaveCb=void 0,w[Q]===t&&delete w[Q])};w[Q]=t,f?Y(f,[D,U]):U()},clone(D){return ni(D,e,n,s)}};return oe}function vc(t){if(Sa(t))return t=mn(t),t.children=null,t}function tf(t){return Sa(t)?t.children?t.children[0]:void 0:t}function si(t,e){t.shapeFlag&6&&t.component?si(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function pu(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===vt?(o.patchFlag&128&&r++,s=s.concat(pu(o.children,e,a))):(e||o.type!==_t)&&s.push(a!=null?mn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function mr(t,e){return se(t)?(()=>Fe({name:t.name},e,{setup:t}))():t}const $r=t=>!!t.type.__asyncLoader,Sa=t=>t.type.__isKeepAlive;function S_(t,e){Xp(t,"a",e)}function b_(t,e){Xp(t,"da",e)}function Xp(t,e,n=He){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ba(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Sa(r.parent.vnode)&&A_(s,e,n,r),r=r.parent}}function A_(t,e,n,s){const r=ba(e,t,s,!0);Ra(()=>{Xl(s[e],r)},n)}function ba(t,e,n=He,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;pr(),Gn(n);const a=Nt(e,n,t,o);return Vn(),gr(),a});return s?r.unshift(i):r.push(i),i}}const In=t=>(e,n=He)=>(!ii||t==="sp")&&ba(t,(...s)=>e(...s),n),R_=In("bm"),Aa=In("m"),k_=In("bu"),Zp=In("u"),eg=In("bum"),Ra=In("um"),N_=In("sp"),D_=In("rtg"),P_=In("rtc");function O_(t,e=He){ba("ec",t,e)}const tg="components";function x_(t,e){return L_(tg,t,!0,e)||t}const M_=Symbol.for("v-ndc");function L_(t,e,n=!0,s=!1){const r=Ge||He;if(r){const i=r.type;if(t===tg){const a=u1(i,!1);if(a&&(a===e||a===tn(e)||a===wa(tn(e))))return i}const o=nf(r[t]||i[t],e)||nf(r.appContext[t],e);return!o&&s?i:o}}function nf(t,e){return t&&(t[e]||t[tn(e)]||t[wa(tn(e))])}function HN(t,e,n,s){let r;const i=n&&n[s];if(z(t)||qe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Se(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function zN(t,e,n={},s,r){if(Ge.isCE||Ge.parent&&$r(Ge.parent)&&Ge.parent.isCE)return e!=="default"&&(n.name=e),ie("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),De();const o=i&&ng(i(n)),a=dg(vt,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function ng(t){return t.some(e=>vs(e)?!(e.type===_t||e.type===vt&&!ng(e.children)):!0)?t:null}const Zc=t=>t?gg(t)?Da(t)||t.proxy:Zc(t.parent):null,Fr=Fe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Zc(t.parent),$root:t=>Zc(t.root),$emit:t=>t.emit,$options:t=>gu(t),$forceUpdate:t=>t.f||(t.f=()=>uu(t.update)),$nextTick:t=>t.n||(t.n=Ai.bind(t.proxy)),$watch:t=>I_.bind(t)}),_c=(t,e)=>t!==Ae&&!t.__isScriptSetup&&de(t,e),$_={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(_c(s,e))return o[e]=1,s[e];if(r!==Ae&&de(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&de(l,e))return o[e]=3,i[e];if(n!==Ae&&de(n,e))return o[e]=4,n[e];el&&(o[e]=0)}}const u=Fr[e];let h,f;if(u)return e==="$attrs"&&wt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ae&&de(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,de(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return _c(r,e)?(r[e]=n,!0):s!==Ae&&de(s,e)?(s[e]=n,!0):de(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Ae&&de(t,o)||_c(e,o)||(a=i[0])&&de(a,o)||de(s,o)||de(Fr,o)||de(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:de(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function sf(t){return z(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function KN(t){const e=vu();let n=t();return Vn(),Zl(n)&&(n=n.catch(s=>{throw Gn(e),s})),[n,()=>Gn(e)]}let el=!0;function F_(t){const e=gu(t),n=t.proxy,s=t.ctx;el=!1,e.beforeCreate&&rf(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:y,activated:v,deactivated:C,beforeDestroy:k,beforeUnmount:S,destroyed:L,unmounted:w,render:P,renderTracked:Y,renderTriggered:oe,errorCaptured:D,serverPrefetch:$,expose:Q,inheritAttrs:he,components:U,directives:ae,filters:Oe}=e;if(l&&U_(l,s,null),o)for(const ge in o){const ye=o[ge];se(ye)&&(s[ge]=ye.bind(n))}if(r){const ge=r.call(n,n);Se(ge)&&(t.data=Dt(ge))}if(el=!0,i)for(const ge in i){const ye=i[ge],on=se(ye)?ye.bind(n,n):se(ye.get)?ye.get.bind(n,n):Lt,Sn=!se(ye)&&se(ye.set)?ye.set.bind(n):Lt,jt=Ie({get:on,set:Sn});Object.defineProperty(s,ge,{enumerable:!0,configurable:!0,get:()=>jt.value,set:mt=>jt.value=mt})}if(a)for(const ge in a)sg(a[ge],s,n,ge);if(c){const ge=se(c)?c.call(n):c;Reflect.ownKeys(ge).forEach(ye=>{Io(ye,ge[ye])})}u&&rf(u,t,"c");function ce(ge,ye){z(ye)?ye.forEach(on=>ge(on.bind(n))):ye&&ge(ye.bind(n))}if(ce(R_,h),ce(Aa,f),ce(k_,p),ce(Zp,y),ce(S_,v),ce(b_,C),ce(O_,D),ce(P_,Y),ce(D_,oe),ce(eg,S),ce(Ra,w),ce(N_,$),z(Q))if(Q.length){const ge=t.exposed||(t.exposed={});Q.forEach(ye=>{Object.defineProperty(ge,ye,{get:()=>n[ye],set:on=>n[ye]=on})})}else t.exposed||(t.exposed={});P&&t.render===Lt&&(t.render=P),he!=null&&(t.inheritAttrs=he),U&&(t.components=U),ae&&(t.directives=ae)}function U_(t,e,n=Lt){z(t)&&(t=tl(t));for(const s in t){const r=t[s];let i;Se(r)?"default"in r?i=$t(r.from||s,r.default,!0):i=$t(r.from||s):i=$t(r),$e(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function rf(t,e,n){Nt(z(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function sg(t,e,n,s){const r=s.includes(".")?Gp(n,s):()=>n[s];if(qe(t)){const i=e[t];se(i)&&Lr(r,i)}else if(se(t))Lr(r,t.bind(n));else if(Se(t))if(z(t))t.forEach(i=>sg(i,e,n,s));else{const i=se(t.handler)?t.handler.bind(n):e[t.handler];se(i)&&Lr(r,i,t)}}function gu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Vo(c,l,o,!0)),Vo(c,e,o)),Se(e)&&i.set(e,c),c}function Vo(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Vo(t,i,n,!0),r&&r.forEach(o=>Vo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=B_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const B_={data:of,props:af,emits:af,methods:Dr,computed:Dr,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:Dr,directives:Dr,watch:j_,provide:of,inject:V_};function of(t,e){return e?t?function(){return Fe(se(t)?t.call(this,this):t,se(e)?e.call(this,this):e)}:e:t}function V_(t,e){return Dr(tl(t),tl(e))}function tl(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function dt(t,e){return t?[...new Set([].concat(t,e))]:e}function Dr(t,e){return t?Fe(Object.create(null),t,e):e}function af(t,e){return t?z(t)&&z(e)?[...new Set([...t,...e])]:Fe(Object.create(null),sf(t),sf(e??{})):e}function j_(t,e){if(!t)return e;if(!e)return t;const n=Fe(Object.create(null),t);for(const s in e)n[s]=dt(t[s],e[s]);return n}function rg(){return{app:null,config:{isNativeTag:a0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let q_=0;function H_(t,e){return function(s,r=null){se(s)||(s=Fe({},s)),r!=null&&!Se(r)&&(r=null);const i=rg(),o=new Set;let a=!1;const c=i.app={_uid:q_++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:p1,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&se(l.install)?(o.add(l),l.install(c,...u)):se(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=ie(s,r);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Da(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){ri=c;try{return l()}finally{ri=null}}};return c}}let ri=null;function Io(t,e){if(He){let n=He.provides;const s=He.parent&&He.parent.provides;s===n&&(n=He.provides=Object.create(s)),n[t]=e}}function $t(t,e,n=!1){const s=He||Ge;if(s||ri){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:ri._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&se(e)?e.call(s&&s.proxy):e}}function z_(){return!!(He||Ge||ri)}function K_(t,e,n,s=!1){const r={},i={};Lo(i,Na,1),t.propsDefaults=Object.create(null),ig(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Y0(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function W_(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=J(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ca(t.emitsOptions,f))continue;const p=e[f];if(c)if(de(i,f))p!==i[f]&&(i[f]=p,l=!0);else{const y=tn(f);r[y]=nl(c,a,y,p,t,!1)}else p!==i[f]&&(i[f]=p,l=!0)}}}else{ig(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!de(e,h)&&((u=dr(h))===h||!de(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=nl(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!de(e,h))&&(delete i[h],l=!0)}l&&gn(t,"set","$attrs")}function ig(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(_o(c))continue;const l=e[c];let u;r&&de(r,u=tn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ca(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=J(n),l=a||Ae;for(let u=0;u<i.length;u++){const h=i[u];n[h]=nl(r,c,h,l[h],t,!de(l,h))}}return o}function nl(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=de(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&se(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Gn(r),s=l[n]=c.call(null,e),Vn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===dr(n))&&(s=!0))}return s}function og(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!se(t)){const u=h=>{c=!0;const[f,p]=og(h,e,!0);Fe(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Se(t)&&s.set(t,Us),Us;if(z(i))for(let u=0;u<i.length;u++){const h=tn(i[u]);cf(h)&&(o[h]=Ae)}else if(i)for(const u in i){const h=tn(u);if(cf(h)){const f=i[u],p=o[h]=z(f)||se(f)?{type:f}:Fe({},f);if(p){const y=hf(Boolean,p.type),v=hf(String,p.type);p[0]=y>-1,p[1]=v<0||y<v,(y>-1||de(p,"default"))&&a.push(h)}}}const l=[o,a];return Se(t)&&s.set(t,l),l}function cf(t){return t[0]!=="$"}function lf(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function uf(t,e){return lf(t)===lf(e)}function hf(t,e){return z(e)?e.findIndex(n=>uf(n,t)):se(e)&&uf(e,t)?0:-1}const ag=t=>t[0]==="_"||t==="$stable",mu=t=>z(t)?t.map(Ot):[Ot(t)],G_=(t,e,n)=>{if(e._n)return e;const s=Xc((...r)=>mu(e(...r)),n);return s._c=!1,s},cg=(t,e,n)=>{const s=t._ctx;for(const r in t){if(ag(r))continue;const i=t[r];if(se(i))e[r]=G_(r,i,s);else if(i!=null){const o=mu(i);e[r]=()=>o}}},lg=(t,e)=>{const n=mu(e);t.slots.default=()=>n},Q_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=J(e),Lo(e,"_",n)):cg(e,t.slots={})}else t.slots={},e&&lg(t,e);Lo(t.slots,Na,1)},Y_=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Ae;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Fe(r,e),!n&&a===1&&delete r._):(i=!e.$stable,cg(e,r)),o=e}else e&&(lg(t,e),o={default:1});if(i)for(const a in r)!ag(a)&&!(a in o)&&delete r[a]};function sl(t,e,n,s,r=!1){if(z(t)){t.forEach((f,p)=>sl(f,e&&(z(e)?e[p]:e),n,s,r));return}if($r(s)&&!r)return;const i=s.shapeFlag&4?Da(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ae?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(qe(l)?(u[l]=null,de(h,l)&&(h[l]=null)):$e(l)&&(l.value=null)),se(c))Bn(c,a,12,[o,u]);else{const f=qe(c),p=$e(c);if(f||p){const y=()=>{if(t.f){const v=f?de(h,c)?h[c]:u[c]:c.value;r?z(v)&&Xl(v,i):z(v)?v.includes(i)||v.push(i):f?(u[c]=[i],de(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,de(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,yt(y,n)):y()}}}const yt=w_;function J_(t){return X_(t)}function X_(t,e){const n=Wc();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=Lt,insertStaticContent:y}=t,v=(d,g,m,_=null,T=null,b=null,F=!1,N=null,O=!!g.dynamicChildren)=>{if(d===g)return;d&&!Kt(d,g)&&(_=E(d),mt(d,T,b,!0),d=null),g.patchFlag===-2&&(O=!1,g.dynamicChildren=null);const{type:A,ref:W,shapeFlag:j}=g;switch(A){case ka:C(d,g,m,_);break;case _t:k(d,g,m,_);break;case To:d==null&&S(g,m,_,F);break;case vt:U(d,g,m,_,T,b,F,N,O);break;default:j&1?P(d,g,m,_,T,b,F,N,O):j&6?ae(d,g,m,_,T,b,F,N,O):(j&64||j&128)&&A.process(d,g,m,_,T,b,F,N,O,x)}W!=null&&T&&sl(W,d&&d.ref,b,g||d,!g)},C=(d,g,m,_)=>{if(d==null)s(g.el=a(g.children),m,_);else{const T=g.el=d.el;g.children!==d.children&&l(T,g.children)}},k=(d,g,m,_)=>{d==null?s(g.el=c(g.children||""),m,_):g.el=d.el},S=(d,g,m,_)=>{[d.el,d.anchor]=y(d.children,g,m,_,d.el,d.anchor)},L=({el:d,anchor:g},m,_)=>{let T;for(;d&&d!==g;)T=f(d),s(d,m,_),d=T;s(g,m,_)},w=({el:d,anchor:g})=>{let m;for(;d&&d!==g;)m=f(d),r(d),d=m;r(g)},P=(d,g,m,_,T,b,F,N,O)=>{F=F||g.type==="svg",d==null?Y(g,m,_,T,b,F,N,O):$(d,g,T,b,F,N,O)},Y=(d,g,m,_,T,b,F,N)=>{let O,A;const{type:W,props:j,shapeFlag:G,transition:ee,dirs:le}=d;if(O=d.el=o(d.type,b,j&&j.is,j),G&8?u(O,d.children):G&16&&D(d.children,O,null,_,T,b&&W!=="foreignObject",F,N),le&&ns(d,null,_,"created"),oe(O,d,d.scopeId,F,_),j){for(const Ce in j)Ce!=="value"&&!_o(Ce)&&i(O,Ce,null,j[Ce],b,d.children,_,T,nt);"value"in j&&i(O,"value",null,j.value),(A=j.onVnodeBeforeMount)&&Ht(A,_,d)}le&&ns(d,null,_,"beforeMount");const be=(!T||T&&!T.pendingBranch)&&ee&&!ee.persisted;be&&ee.beforeEnter(O),s(O,g,m),((A=j&&j.onVnodeMounted)||be||le)&&yt(()=>{A&&Ht(A,_,d),be&&ee.enter(O),le&&ns(d,null,_,"mounted")},T)},oe=(d,g,m,_,T)=>{if(m&&p(d,m),_)for(let b=0;b<_.length;b++)p(d,_[b]);if(T){let b=T.subTree;if(g===b){const F=T.vnode;oe(d,F,F.scopeId,F.slotScopeIds,T.parent)}}},D=(d,g,m,_,T,b,F,N,O=0)=>{for(let A=O;A<d.length;A++){const W=d[A]=N?Pn(d[A]):Ot(d[A]);v(null,W,g,m,_,T,b,F,N)}},$=(d,g,m,_,T,b,F)=>{const N=g.el=d.el;let{patchFlag:O,dynamicChildren:A,dirs:W}=g;O|=d.patchFlag&16;const j=d.props||Ae,G=g.props||Ae;let ee;m&&ss(m,!1),(ee=G.onVnodeBeforeUpdate)&&Ht(ee,m,g,d),W&&ns(g,d,m,"beforeUpdate"),m&&ss(m,!0);const le=T&&g.type!=="foreignObject";if(A?Q(d.dynamicChildren,A,N,m,_,le,b):F||ye(d,g,N,null,m,_,le,b,!1),O>0){if(O&16)he(N,g,j,G,m,_,T);else if(O&2&&j.class!==G.class&&i(N,"class",null,G.class,T),O&4&&i(N,"style",j.style,G.style,T),O&8){const be=g.dynamicProps;for(let Ce=0;Ce<be.length;Ce++){const Ue=be[Ce],Pt=j[Ue],Ds=G[Ue];(Ds!==Pt||Ue==="value")&&i(N,Ue,Pt,Ds,T,d.children,m,_,nt)}}O&1&&d.children!==g.children&&u(N,g.children)}else!F&&A==null&&he(N,g,j,G,m,_,T);((ee=G.onVnodeUpdated)||W)&&yt(()=>{ee&&Ht(ee,m,g,d),W&&ns(g,d,m,"updated")},_)},Q=(d,g,m,_,T,b,F)=>{for(let N=0;N<g.length;N++){const O=d[N],A=g[N],W=O.el&&(O.type===vt||!Kt(O,A)||O.shapeFlag&70)?h(O.el):m;v(O,A,W,null,_,T,b,F,!0)}},he=(d,g,m,_,T,b,F)=>{if(m!==_){if(m!==Ae)for(const N in m)!_o(N)&&!(N in _)&&i(d,N,m[N],null,F,g.children,T,b,nt);for(const N in _){if(_o(N))continue;const O=_[N],A=m[N];O!==A&&N!=="value"&&i(d,N,A,O,F,g.children,T,b,nt)}"value"in _&&i(d,"value",m.value,_.value)}},U=(d,g,m,_,T,b,F,N,O)=>{const A=g.el=d?d.el:a(""),W=g.anchor=d?d.anchor:a("");let{patchFlag:j,dynamicChildren:G,slotScopeIds:ee}=g;ee&&(N=N?N.concat(ee):ee),d==null?(s(A,m,_),s(W,m,_),D(g.children,m,W,T,b,F,N,O)):j>0&&j&64&&G&&d.dynamicChildren?(Q(d.dynamicChildren,G,m,T,b,F,N),(g.key!=null||T&&g===T.subTree)&&ug(d,g,!0)):ye(d,g,m,W,T,b,F,N,O)},ae=(d,g,m,_,T,b,F,N,O)=>{g.slotScopeIds=N,d==null?g.shapeFlag&512?T.ctx.activate(g,m,_,F,O):Oe(g,m,_,T,b,F,O):Ke(d,g,O)},Oe=(d,g,m,_,T,b,F)=>{const N=d.component=i1(d,_,T);if(Sa(d)&&(N.ctx.renderer=x),o1(N),N.asyncDep){if(T&&T.registerDep(N,ce),!d.el){const O=N.subTree=ie(_t);k(null,O,g,m)}return}ce(N,d,g,m,T,b,F)},Ke=(d,g,m)=>{const _=g.component=d.component;if(d_(d,g,m))if(_.asyncDep&&!_.asyncResolved){ge(_,g,m);return}else _.next=g,a_(_.update),_.update();else g.el=d.el,_.vnode=g},ce=(d,g,m,_,T,b,F)=>{const N=()=>{if(d.isMounted){let{next:W,bu:j,u:G,parent:ee,vnode:le}=d,be=W,Ce;ss(d,!1),W?(W.el=le.el,ge(d,W,F)):W=le,j&&wo(j),(Ce=W.props&&W.props.onVnodeBeforeUpdate)&&Ht(Ce,ee,W,le),ss(d,!0);const Ue=yc(d),Pt=d.subTree;d.subTree=Ue,v(Pt,Ue,h(Pt.el),E(Pt),d,T,b),W.el=Ue.el,be===null&&hu(d,Ue.el),G&&yt(G,T),(Ce=W.props&&W.props.onVnodeUpdated)&&yt(()=>Ht(Ce,ee,W,le),T)}else{let W;const{el:j,props:G}=g,{bm:ee,m:le,parent:be}=d,Ce=$r(g);if(ss(d,!1),ee&&wo(ee),!Ce&&(W=G&&G.onVnodeBeforeMount)&&Ht(W,be,g),ss(d,!0),j&&ve){const Ue=()=>{d.subTree=yc(d),ve(j,d.subTree,d,T,null)};Ce?g.type.__asyncLoader().then(()=>!d.isUnmounted&&Ue()):Ue()}else{const Ue=d.subTree=yc(d);v(null,Ue,m,_,d,T,b),g.el=Ue.el}if(le&&yt(le,T),!Ce&&(W=G&&G.onVnodeMounted)){const Ue=g;yt(()=>Ht(W,be,Ue),T)}(g.shapeFlag&256||be&&$r(be.vnode)&&be.vnode.shapeFlag&256)&&d.a&&yt(d.a,T),d.isMounted=!0,g=m=_=null}},O=d.effect=new su(N,()=>uu(A),d.scope),A=d.update=()=>O.run();A.id=d.uid,ss(d,!0),A()},ge=(d,g,m)=>{g.component=d;const _=d.vnode.props;d.vnode=g,d.next=null,W_(d,g.props,_,m),Y_(d,g.children,m),pr(),Xh(),gr()},ye=(d,g,m,_,T,b,F,N,O=!1)=>{const A=d&&d.children,W=d?d.shapeFlag:0,j=g.children,{patchFlag:G,shapeFlag:ee}=g;if(G>0){if(G&128){Sn(A,j,m,_,T,b,F,N,O);return}else if(G&256){on(A,j,m,_,T,b,F,N,O);return}}ee&8?(W&16&&nt(A,T,b),j!==A&&u(m,j)):W&16?ee&16?Sn(A,j,m,_,T,b,F,N,O):nt(A,T,b,!0):(W&8&&u(m,""),ee&16&&D(j,m,_,T,b,F,N,O))},on=(d,g,m,_,T,b,F,N,O)=>{d=d||Us,g=g||Us;const A=d.length,W=g.length,j=Math.min(A,W);let G;for(G=0;G<j;G++){const ee=g[G]=O?Pn(g[G]):Ot(g[G]);v(d[G],ee,m,null,T,b,F,N,O)}A>W?nt(d,T,b,!0,!1,j):D(g,m,_,T,b,F,N,O,j)},Sn=(d,g,m,_,T,b,F,N,O)=>{let A=0;const W=g.length;let j=d.length-1,G=W-1;for(;A<=j&&A<=G;){const ee=d[A],le=g[A]=O?Pn(g[A]):Ot(g[A]);if(Kt(ee,le))v(ee,le,m,null,T,b,F,N,O);else break;A++}for(;A<=j&&A<=G;){const ee=d[j],le=g[G]=O?Pn(g[G]):Ot(g[G]);if(Kt(ee,le))v(ee,le,m,null,T,b,F,N,O);else break;j--,G--}if(A>j){if(A<=G){const ee=G+1,le=ee<W?g[ee].el:_;for(;A<=G;)v(null,g[A]=O?Pn(g[A]):Ot(g[A]),m,le,T,b,F,N,O),A++}}else if(A>G)for(;A<=j;)mt(d[A],T,b,!0),A++;else{const ee=A,le=A,be=new Map;for(A=le;A<=G;A++){const It=g[A]=O?Pn(g[A]):Ot(g[A]);It.key!=null&&be.set(It.key,A)}let Ce,Ue=0;const Pt=G-le+1;let Ds=!1,Bh=0;const Sr=new Array(Pt);for(A=0;A<Pt;A++)Sr[A]=0;for(A=ee;A<=j;A++){const It=d[A];if(Ue>=Pt){mt(It,T,b,!0);continue}let qt;if(It.key!=null)qt=be.get(It.key);else for(Ce=le;Ce<=G;Ce++)if(Sr[Ce-le]===0&&Kt(It,g[Ce])){qt=Ce;break}qt===void 0?mt(It,T,b,!0):(Sr[qt-le]=A+1,qt>=Bh?Bh=qt:Ds=!0,v(It,g[qt],m,null,T,b,F,N,O),Ue++)}const Vh=Ds?Z_(Sr):Us;for(Ce=Vh.length-1,A=Pt-1;A>=0;A--){const It=le+A,qt=g[It],jh=It+1<W?g[It+1].el:_;Sr[A]===0?v(null,qt,m,jh,T,b,F,N,O):Ds&&(Ce<0||A!==Vh[Ce]?jt(qt,m,jh,2):Ce--)}}},jt=(d,g,m,_,T=null)=>{const{el:b,type:F,transition:N,children:O,shapeFlag:A}=d;if(A&6){jt(d.component.subTree,g,m,_);return}if(A&128){d.suspense.move(g,m,_);return}if(A&64){F.move(d,g,m,x);return}if(F===vt){s(b,g,m);for(let j=0;j<O.length;j++)jt(O[j],g,m,_);s(d.anchor,g,m);return}if(F===To){L(d,g,m);return}if(_!==2&&A&1&&N)if(_===0)N.beforeEnter(b),s(b,g,m),yt(()=>N.enter(b),T);else{const{leave:j,delayLeave:G,afterLeave:ee}=N,le=()=>s(b,g,m),be=()=>{j(b,()=>{le(),ee&&ee()})};G?G(b,le,be):be()}else s(b,g,m)},mt=(d,g,m,_=!1,T=!1)=>{const{type:b,props:F,ref:N,children:O,dynamicChildren:A,shapeFlag:W,patchFlag:j,dirs:G}=d;if(N!=null&&sl(N,null,m,d,!0),W&256){g.ctx.deactivate(d);return}const ee=W&1&&G,le=!$r(d);let be;if(le&&(be=F&&F.onVnodeBeforeUnmount)&&Ht(be,g,d),W&6)eo(d.component,m,_);else{if(W&128){d.suspense.unmount(m,_);return}ee&&ns(d,null,g,"beforeUnmount"),W&64?d.type.remove(d,g,m,T,x,_):A&&(b!==vt||j>0&&j&64)?nt(A,g,m,!1,!0):(b===vt&&j&384||!T&&W&16)&&nt(O,g,m),_&&ks(d)}(le&&(be=F&&F.onVnodeUnmounted)||ee)&&yt(()=>{be&&Ht(be,g,d),ee&&ns(d,null,g,"unmounted")},m)},ks=d=>{const{type:g,el:m,anchor:_,transition:T}=d;if(g===vt){Ns(m,_);return}if(g===To){w(d);return}const b=()=>{r(m),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(d.shapeFlag&1&&T&&!T.persisted){const{leave:F,delayLeave:N}=T,O=()=>F(m,b);N?N(d.el,b,O):O()}else b()},Ns=(d,g)=>{let m;for(;d!==g;)m=f(d),r(d),d=m;r(g)},eo=(d,g,m)=>{const{bum:_,scope:T,update:b,subTree:F,um:N}=d;_&&wo(_),T.stop(),b&&(b.active=!1,mt(F,d,g,m)),N&&yt(N,g),yt(()=>{d.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},nt=(d,g,m,_=!1,T=!1,b=0)=>{for(let F=b;F<d.length;F++)mt(d[F],g,m,_,T)},E=d=>d.shapeFlag&6?E(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),V=(d,g,m)=>{d==null?g._vnode&&mt(g._vnode,null,null,!0):v(g._vnode||null,d,g,null,null,null,m),Xh(),Hp(),g._vnode=d},x={p:v,um:mt,m:jt,r:ks,mt:Oe,mc:D,pc:ye,pbc:Q,n:E,o:t};let H,ve;return e&&([H,ve]=e(x)),{render:V,hydrate:H,createApp:H_(V,H)}}function ss({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ug(t,e,n=!1){const s=t.children,r=e.children;if(z(s)&&z(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Pn(r[i]),a.el=o.el),n||ug(o,a)),a.type===ka&&(a.el=o.el)}}function Z_(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const e1=t=>t.__isTeleport,vt=Symbol.for("v-fgt"),ka=Symbol.for("v-txt"),_t=Symbol.for("v-cmt"),To=Symbol.for("v-stc"),Ur=[];let kt=null;function De(t=!1){Ur.push(kt=t?null:[])}function hg(){Ur.pop(),kt=Ur[Ur.length-1]||null}let Xs=1;function ff(t){Xs+=t}function fg(t){return t.dynamicChildren=Xs>0?kt||Us:null,hg(),Xs>0&&kt&&kt.push(t),t}function Me(t,e,n,s,r,i){return fg(we(t,e,n,s,r,i,!0))}function dg(t,e,n,s,r){return fg(ie(t,e,n,s,r,!0))}function vs(t){return t?t.__v_isVNode===!0:!1}function Kt(t,e){return t.type===e.type&&t.key===e.key}const Na="__vInternal",pg=({key:t})=>t??null,Co=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?qe(t)||$e(t)||se(t)?{i:Ge,r:t,k:e,f:!!n}:t:null);function we(t,e=null,n=null,s=0,r=null,i=t===vt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&pg(e),ref:e&&Co(e),scopeId:Wp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ge};return a?(yu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=qe(n)?8:16),Xs>0&&!o&&kt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&kt.push(c),c}const ie=t1;function t1(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===M_)&&(t=_t),vs(t)){const a=mn(t,e,!0);return n&&yu(a,n),Xs>0&&!i&&kt&&(a.shapeFlag&6?kt[kt.indexOf(t)]=a:kt.push(a)),a.patchFlag|=-2,a}if(h1(t)&&(t=t.__vccOpts),e){e=n1(e);let{class:a,style:c}=e;a&&!qe(a)&&(e.class=Jr(a)),Se(c)&&(Lp(c)&&!z(c)&&(c=Fe({},c)),e.style=tu(c))}const o=qe(t)?1:p_(t)?128:e1(t)?64:Se(t)?4:se(t)?2:0;return we(t,e,n,s,r,o,i,!0)}function n1(t){return t?Lp(t)||Na in t?Fe({},t):t:null}function mn(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Tn(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&pg(a),ref:e&&e.ref?n&&r?z(r)?r.concat(Co(e)):[r,Co(e)]:Co(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==vt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&mn(t.ssContent),ssFallback:t.ssFallback&&mn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function rl(t=" ",e=0){return ie(ka,null,t,e)}function WN(t,e){const n=ie(To,null,t);return n.staticCount=e,n}function wc(t="",e=!1){return e?(De(),dg(_t,null,t)):ie(_t,null,t)}function Ot(t){return t==null||typeof t=="boolean"?ie(_t):z(t)?ie(vt,null,t.slice()):typeof t=="object"?Pn(t):ie(ka,null,String(t))}function Pn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:mn(t)}function yu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),yu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Na in e)?e._ctx=Ge:r===3&&Ge&&(Ge.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else se(e)?(e={default:e,_ctx:Ge},n=32):(e=String(e),s&64?(n=16,e=[rl(e)]):n=8);t.children=e,t.shapeFlag|=n}function Tn(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Jr([e.class,s.class]));else if(r==="style")e.style=tu([e.style,s.style]);else if(ya(r)){const i=e[r],o=s[r];o&&i!==o&&!(z(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Ht(t,e,n,s=null){Nt(t,e,7,[n,s])}const s1=rg();let r1=0;function i1(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||s1,i={uid:r1++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ip(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:og(s,r),emitsOptions:Kp(s,r),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:s.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=l_.bind(null,i),t.ce&&t.ce(i),i}let He=null;const vu=()=>He||Ge;let _u,Ps,df="__VUE_INSTANCE_SETTERS__";(Ps=Wc()[df])||(Ps=Wc()[df]=[]),Ps.push(t=>He=t),_u=t=>{Ps.length>1?Ps.forEach(e=>e(t)):Ps[0](t)};const Gn=t=>{_u(t),t.scope.on()},Vn=()=>{He&&He.scope.off(),_u(null)};function gg(t){return t.vnode.shapeFlag&4}let ii=!1;function o1(t,e=!1){ii=e;const{props:n,children:s}=t.vnode,r=gg(t);K_(t,n,r,e),Q_(t,s);const i=r?a1(t,e):void 0;return ii=!1,i}function a1(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ta(new Proxy(t.ctx,$_));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?l1(t):null;Gn(t),pr();const i=Bn(s,t,0,[t.props,r]);if(gr(),Vn(),Zl(i)){if(i.then(Vn,Vn),e)return i.then(o=>{il(t,o,e)}).catch(o=>{bi(o,t,0)});t.asyncDep=i}else il(t,i,e)}else mg(t,e)}function il(t,e,n){se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(t.setupState=Bp(e)),mg(t,n)}let pf;function mg(t,e,n){const s=t.type;if(!t.render){if(!e&&pf&&!s.render){const r=s.template||gu(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Fe(Fe({isCustomElement:i,delimiters:a},o),c);s.render=pf(r,l)}}t.render=s.render||Lt}Gn(t),pr(),F_(t),gr(),Vn()}function c1(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return wt(t,"get","$attrs"),e[n]}}))}function l1(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return c1(t)},slots:t.slots,emit:t.emit,expose:e}}function Da(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Bp(Ta(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Fr)return Fr[n](t)},has(e,n){return n in e||n in Fr}}))}function u1(t,e=!0){return se(t)?t.displayName||t.name:t.name||e&&t.__name}function h1(t){return se(t)&&"__vccOpts"in t}const Ie=(t,e)=>r_(t,e,ii);function us(t,e,n){const s=arguments.length;return s===2?Se(e)&&!z(e)?vs(e)?ie(t,null,[e]):ie(t,e):ie(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&vs(n)&&(n=[n]),ie(t,e,n))}const f1=Symbol.for("v-scx"),d1=()=>$t(f1),p1="3.3.4",g1="http://www.w3.org/2000/svg",as=typeof document<"u"?document:null,gf=as&&as.createElement("template"),m1={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?as.createElementNS(g1,t):as.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>as.createTextNode(t),createComment:t=>as.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>as.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{gf.innerHTML=s?`<svg>${t}</svg>`:t;const a=gf.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function y1(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function v1(t,e,n){const s=t.style,r=qe(n);if(n&&!r){if(e&&!qe(e))for(const i in e)n[i]==null&&ol(s,i,"");for(const i in n)ol(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const mf=/\s*!important$/;function ol(t,e,n){if(z(n))n.forEach(s=>ol(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=_1(t,e);mf.test(n)?t.setProperty(dr(s),n.replace(mf,""),"important"):t[s]=n}}const yf=["Webkit","Moz","ms"],Ec={};function _1(t,e){const n=Ec[e];if(n)return n;let s=tn(e);if(s!=="filter"&&s in t)return Ec[e]=s;s=wa(s);for(let r=0;r<yf.length;r++){const i=yf[r]+s;if(i in t)return Ec[e]=i}return e}const vf="http://www.w3.org/1999/xlink";function w1(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(vf,e.slice(6,e.length)):t.setAttributeNS(vf,e,n);else{const i=v0(e);n==null||i&&!wp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function E1(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=wp(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function cs(t,e,n,s){t.addEventListener(e,n,s)}function I1(t,e,n,s){t.removeEventListener(e,n,s)}function T1(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=C1(e);if(s){const l=i[e]=A1(s,r);cs(t,a,l,c)}else o&&(I1(t,a,o,c),i[e]=void 0)}}const _f=/(?:Once|Passive|Capture)$/;function C1(t){let e;if(_f.test(t)){e={};let s;for(;s=t.match(_f);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):dr(t.slice(2)),e]}let Ic=0;const S1=Promise.resolve(),b1=()=>Ic||(S1.then(()=>Ic=0),Ic=Date.now());function A1(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Nt(R1(s,n.value),e,5,[s])};return n.value=t,n.attached=b1(),n}function R1(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const wf=/^on[a-z]/,k1=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?y1(t,s,r):e==="style"?v1(t,n,s):ya(e)?Jl(e)||T1(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):N1(t,e,s,r))?E1(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),w1(t,e,s,r))};function N1(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&wf.test(e)&&se(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||wf.test(e)&&qe(n)?!1:e in t}const An="transition",br="animation",yg=(t,{slots:e})=>us(C_,_g(t),e);yg.displayName="Transition";const vg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},D1=yg.props=Fe({},Yp,vg),rs=(t,e=[])=>{z(t)?t.forEach(n=>n(...e)):t&&t(...e)},Ef=t=>t?z(t)?t.some(e=>e.length>1):t.length>1:!1;function _g(t){const e={};for(const U in t)U in vg||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,y=P1(r),v=y&&y[0],C=y&&y[1],{onBeforeEnter:k,onEnter:S,onEnterCancelled:L,onLeave:w,onLeaveCancelled:P,onBeforeAppear:Y=k,onAppear:oe=S,onAppearCancelled:D=L}=e,$=(U,ae,Oe)=>{Nn(U,ae?u:a),Nn(U,ae?l:o),Oe&&Oe()},Q=(U,ae)=>{U._isLeaving=!1,Nn(U,h),Nn(U,p),Nn(U,f),ae&&ae()},he=U=>(ae,Oe)=>{const Ke=U?oe:S,ce=()=>$(ae,U,Oe);rs(Ke,[ae,ce]),If(()=>{Nn(ae,U?c:i),cn(ae,U?u:a),Ef(Ke)||Tf(ae,s,v,ce)})};return Fe(e,{onBeforeEnter(U){rs(k,[U]),cn(U,i),cn(U,o)},onBeforeAppear(U){rs(Y,[U]),cn(U,c),cn(U,l)},onEnter:he(!1),onAppear:he(!0),onLeave(U,ae){U._isLeaving=!0;const Oe=()=>Q(U,ae);cn(U,h),Eg(),cn(U,f),If(()=>{U._isLeaving&&(Nn(U,h),cn(U,p),Ef(w)||Tf(U,s,C,Oe))}),rs(w,[U,Oe])},onEnterCancelled(U){$(U,!1),rs(L,[U])},onAppearCancelled(U){$(U,!0),rs(D,[U])},onLeaveCancelled(U){Q(U),rs(P,[U])}})}function P1(t){if(t==null)return null;if(Se(t))return[Tc(t.enter),Tc(t.leave)];{const e=Tc(t);return[e,e]}}function Tc(t){return _p(t)}function cn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function Nn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function If(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let O1=0;function Tf(t,e,n,s){const r=t._endId=++O1,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=wg(t,e);if(!o)return s();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,f),i()},f=p=>{p.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,f)}function wg(t,e){const n=window.getComputedStyle(t),s=y=>(n[y]||"").split(", "),r=s(`${An}Delay`),i=s(`${An}Duration`),o=Cf(r,i),a=s(`${br}Delay`),c=s(`${br}Duration`),l=Cf(a,c);let u=null,h=0,f=0;e===An?o>0&&(u=An,h=o,f=i.length):e===br?l>0&&(u=br,h=l,f=c.length):(h=Math.max(o,l),u=h>0?o>l?An:br:null,f=u?u===An?i.length:c.length:0);const p=u===An&&/\b(transform|all)(,|$)/.test(s(`${An}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:p}}function Cf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Sf(n)+Sf(t[s])))}function Sf(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Eg(){return document.body.offsetHeight}const Ig=new WeakMap,Tg=new WeakMap,Cg={name:"TransitionGroup",props:Fe({},D1,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=vu(),s=Qp();let r,i;return Zp(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!F1(r[0].el,n.vnode.el,o))return;r.forEach(M1),r.forEach(L1);const a=r.filter($1);Eg(),a.forEach(c=>{const l=c.el,u=l.style;cn(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const h=l._moveCb=f=>{f&&f.target!==l||(!f||/transform$/.test(f.propertyName))&&(l.removeEventListener("transitionend",h),l._moveCb=null,Nn(l,o))};l.addEventListener("transitionend",h)})}),()=>{const o=J(t),a=_g(o);let c=o.tag||vt;r=i,i=e.default?pu(e.default()):[];for(let l=0;l<i.length;l++){const u=i[l];u.key!=null&&si(u,ni(u,a,s,n))}if(r)for(let l=0;l<r.length;l++){const u=r[l];si(u,ni(u,a,s,n)),Ig.set(u,u.el.getBoundingClientRect())}return ie(c,null,i)}}},x1=t=>delete t.mode;Cg.props;const GN=Cg;function M1(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function L1(t){Tg.set(t,t.el.getBoundingClientRect())}function $1(t){const e=Ig.get(t),n=Tg.get(t),s=e.left-n.left,r=e.top-n.top;if(s||r){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${s}px,${r}px)`,i.transitionDuration="0s",t}}function F1(t,e,n){const s=t.cloneNode();t._vtc&&t._vtc.forEach(o=>{o.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(s);const{hasTransform:i}=wg(s);return r.removeChild(s),i}const jo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return z(e)?n=>wo(e,n):e};function U1(t){t.target.composing=!0}function bf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const QN={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=jo(r);const i=s||r.props&&r.props.type==="number";cs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=$o(a)),t._assign(a)}),n&&cs(t,"change",()=>{t.value=t.value.trim()}),e||(cs(t,"compositionstart",U1),cs(t,"compositionend",bf),cs(t,"change",bf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=jo(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&$o(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},YN={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=va(e);cs(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?$o(qo(o)):qo(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=jo(s)},mounted(t,{value:e}){Af(t,e)},beforeUpdate(t,e,n){t._assign=jo(n)},updated(t,{value:e}){Af(t,e)}};function Af(t,e){const n=t.multiple;if(!(n&&!z(e)&&!va(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=qo(i);if(n)z(e)?i.selected=w0(e,o)>-1:i.selected=e.has(o);else if(Ea(qo(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function qo(t){return"_value"in t?t._value:t.value}const B1=Fe({patchProp:k1},m1);let Rf;function V1(){return Rf||(Rf=J_(B1))}const Sg=(...t)=>{const e=V1().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=j1(s);if(!r)return;const i=e._component;!se(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function j1(t){return qe(t)?document.querySelector(t):t}const tt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},q1={},H1={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50"},z1=we("path",{d:"M 43.125 2 C 41.878906 2 40.636719 2.488281 39.6875 3.4375 L 38.875 4.25 L 45.75 11.125 C 45.746094 11.128906 46.5625 10.3125 46.5625 10.3125 C 48.464844 8.410156 48.460938 5.335938 46.5625 3.4375 C 45.609375 2.488281 44.371094 2 43.125 2 Z M 37.34375 6.03125 C 37.117188 6.0625 36.90625 6.175781 36.75 6.34375 L 4.3125 38.8125 C 4.183594 38.929688 4.085938 39.082031 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914063 11.070313 45.816406 11.1875 45.6875 L 43.65625 13.25 C 44.054688 12.863281 44.058594 12.226563 43.671875 11.828125 C 43.285156 11.429688 42.648438 11.425781 42.25 11.8125 L 9.96875 44.09375 L 5.90625 40.03125 L 38.1875 7.75 C 38.488281 7.460938 38.578125 7.011719 38.410156 6.628906 C 38.242188 6.246094 37.855469 6.007813 37.4375 6.03125 C 37.40625 6.03125 37.375 6.03125 37.34375 6.03125 Z"},null,-1),K1=[z1];function W1(t,e){return De(),Me("svg",H1,K1)}const G1=tt(q1,[["render",W1]]),Q1={},Y1={fill:"currentColor",viewBox:"0 0 24 24"},J1=we("path",{d:"M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"},null,-1),X1=[J1];function Z1(t,e){return De(),Me("svg",Y1,X1)}const ew=tt(Q1,[["render",Z1]]),tw={},nw={viewBox:"0 0 24 24"},sw=we("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},[we("rect",{width:"18",height:"14",x:"3",y:"5",rx:"2"}),we("path",{d:"m3 7 9 6 9-6"})],-1),rw=[sw];function iw(t,e){return De(),Me("svg",nw,rw)}const ow=tt(tw,[["render",iw]]),aw={},cw={fill:"currentColor",viewBox:"0 0 24 24"},lw=we("path",{d:"M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"},null,-1),uw=[lw];function hw(t,e){return De(),Me("svg",cw,uw)}const fw=tt(aw,[["render",hw]]),dw={},pw={"clip-rule":"evenodd","fill-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2",viewBox:"0 0 24 24"},gw=we("path",{d:"m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"},null,-1),mw=[gw];function yw(t,e){return De(),Me("svg",pw,mw)}const vw=tt(dw,[["render",yw]]),_w={},ww={viewBox:"0 0 24 24"},Ew=we("path",{fill:"currentColor",d:"M5 14h-5v-12h5v12zm18.875-4.809c0-.646-.555-1.32-1.688-1.41-.695-.055-.868-.623-.031-.812.701-.159 1.098-.652 1.098-1.181 0-.629-.559-1.309-1.826-1.543-.766-.141-.842-.891-.031-.953.688-.053.96-.291.96-.626-.001-.931-1.654-2.666-4.852-2.666-4.16 0-6.123 2.067-10.505 2.768v10.878c2.375.869 4.466 2.644 5.688 6.886.478 1.661.781 3.468 2.374 3.468 2.375 0 2.594-5.125 1.688-8.781 1.312-.688 3.751-.936 4.979-.885 1.771.072 2.271-.818 2.271-1.49 0-1.011-.833-1.35-1.354-1.51-.609-.188-.889-.807-.031-.922.836-.112 1.26-.656 1.26-1.221z"},null,-1),Iw=[Ew];function Tw(t,e){return De(),Me("svg",ww,Iw)}const Cw=tt(_w,[["render",Tw]]),Sw={},bw={viewBox:"0 0 24 24"},Aw=we("path",{fill:"currentColor",d:"M5 22h-5v-12h5v12zm17.615-8.412c-.857-.115-.578-.734.031-.922.521-.16 1.354-.5 1.354-1.51 0-.672-.5-1.562-2.271-1.49-1.228.05-3.666-.198-4.979-.885.906-3.656.688-8.781-1.688-8.781-1.594 0-1.896 1.807-2.375 3.469-1.221 4.242-3.312 6.017-5.687 6.885v10.878c4.382.701 6.345 2.768 10.505 2.768 3.198 0 4.852-1.735 4.852-2.666 0-.335-.272-.573-.96-.626-.811-.062-.734-.812.031-.953 1.268-.234 1.826-.914 1.826-1.543 0-.529-.396-1.022-1.098-1.181-.837-.189-.664-.757.031-.812 1.133-.09 1.688-.764 1.688-1.41 0-.565-.424-1.109-1.26-1.221z"},null,-1),Rw=[Aw];function kw(t,e){return De(),Me("svg",bw,Rw)}const Nw=tt(Sw,[["render",kw]]),Dw={},Pw={viewBox:"0 0 24 24"},Ow=we("path",{fill:"currentColor",d:"M23 0l-4.5 16.5-6.097-5.43 5.852-6.175-7.844 5.421-5.411-1.316 18-9zm-11 12.501v5.499l2.193-3.323-2.193-2.176zm-8.698 6.825l-1.439-.507 5.701-5.215 1.436.396-5.698 5.326zm3.262 4.287l-1.323-.565 4.439-4.503 1.32.455-4.436 4.613zm-4.083.387l-1.481-.507 8-7.89 1.437.397-7.956 8z"},null,-1),xw=[Ow];function Mw(t,e){return De(),Me("svg",Pw,xw)}const Lw=tt(Dw,[["render",Mw]]),$w={},Fw={fill:"currentColor",viewBox:"0 0 24 24"},Uw=we("path",{d:"m13.789 7.155c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591 1.299-1.002 3.945-3.044 5.498-4.243z"},null,-1),Bw=[Uw];function Vw(t,e){return De(),Me("svg",Fw,Bw)}const jw=tt($w,[["render",Vw]]),qw={},Hw={fill:"currentColor",viewBox:"0 0 24 24"},zw=we("path",{d:"m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"},null,-1),Kw=[zw];function Ww(t,e){return De(),Me("svg",Hw,Kw)}const Gw=tt(qw,[["render",Ww]]),Qw={},Yw={fill:"currentColor",viewBox:"0 0 24 24"},Jw=we("path",{d:"M20.944 12.979c-.489 4.509-4.306 8.021-8.944 8.021-2.698 0-5.112-1.194-6.763-3.075l1.245-1.633c1.283 1.645 3.276 2.708 5.518 2.708 3.526 0 6.444-2.624 6.923-6.021h-2.923l4-5.25 4 5.25h-3.056zm-15.864-1.979c.487-3.387 3.4-6 6.92-6 2.237 0 4.228 1.059 5.51 2.698l1.244-1.632c-1.65-1.876-4.061-3.066-6.754-3.066-4.632 0-8.443 3.501-8.941 8h-3.059l4 5.25 4-5.25h-2.92z"},null,-1),Xw=[Jw];function Zw(t,e){return De(),Me("svg",Yw,Xw)}const eE=tt(Qw,[["render",Zw]]),tE={},nE={fill:"currentColor",viewBox:"0 0 20 20"},sE=we("path",{d:"M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"},null,-1),rE=[sE];function iE(t,e){return De(),Me("svg",nE,rE)}const oE=tt(tE,[["render",iE]]),aE={},cE={fill:"currentColor",viewBox:"0 0 24 24"},lE=we("path",{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm8 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-19 0c0-6.065 4.935-11 11-11v2c-4.962 0-9 4.038-9 9 0 2.481 1.009 4.731 2.639 6.361l-1.414 1.414.015.014c-2-1.994-3.24-4.749-3.24-7.789z"},null,-1),uE=[lE];function hE(t,e){return De(),Me("svg",cE,uE)}const fE=tt(aE,[["render",hE]]),dE={},pE={fill:"currentColor",viewBox:"0 0 24 24"},gE=we("path",{d:"M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z"},null,-1),mE=[gE];function yE(t,e){return De(),Me("svg",pE,mE)}const vE=tt(dE,[["render",yE]]),_E={},wE={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},EE=we("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"},null,-1),IE=[EE];function TE(t,e){return De(),Me("svg",wE,IE)}const CE=tt(_E,[["render",TE]]),Ri={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Zs={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},gt={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},SE={BOUNCE:"bounce",SLIDE:"slide",FLIP:"flip",ZOOM:"zoom"},bg={dangerouslyHTMLString:!1,multiple:!0,position:Ri.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},bE={rtl:!1,newestOnTop:!1,toastClassName:""},Ag={...bg,...bE};({...bg,type:gt.DEFAULT});var _e=(t=>(t[t.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",t[t.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",t.CSS_NAMESPACE="Toastify",t))(_e||{}),al=(t=>(t.ENTRANCE_ANIMATION_END="d",t))(al||{});const AE={enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0},RE={enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0},kE={enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"},NE={enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"};function Rg(t){let e=AE;if(!t||typeof t=="string")switch(t){case"flip":e=NE;break;case"zoom":e=kE;break;case"slide":e=RE;break}else e=t;return e}function DE(t){return t.containerId||String(t.position)}const Pa="will-unmount";function PE(t=Ri.TOP_RIGHT){return!!document.querySelector(`.${_e.CSS_NAMESPACE}__toast-container--${t}`)}function OE(t=Ri.TOP_RIGHT){return`${_e.CSS_NAMESPACE}__toast-container--${t}`}function xE(t,e,n=!1){const s=[`${_e.CSS_NAMESPACE}__toast-container`,`${_e.CSS_NAMESPACE}__toast-container--${t}`,n?`${_e.CSS_NAMESPACE}__toast-container--rtl`:null].filter(Boolean).join(" ");return qs(e)?e({position:t,rtl:n,defaultClassName:s}):`${s} ${e||""}`}function ME(t){var e;const{position:n,containerClassName:s,rtl:r=!1,style:i={}}=t,o=_e.CSS_NAMESPACE,a=OE(n),c=document.querySelector(`.${o}`),l=document.querySelector(`.${a}`),u=!!l&&!((e=l.className)!=null&&e.includes(Pa)),h=c||document.createElement("div"),f=document.createElement("div");f.className=xE(n,s,r),f.dataset.testid=`${_e.CSS_NAMESPACE}__toast-container--${n}`,f.id=DE(t);for(const p in i)if(Object.prototype.hasOwnProperty.call(i,p)){const y=i[p];f.style[p]=y}return c||(h.className=_e.CSS_NAMESPACE,document.body.appendChild(h)),u||h.appendChild(f),f}function cl(t){var e,n,s;const r=typeof t=="string"?t:((e=t.currentTarget)==null?void 0:e.id)||((n=t.target)==null?void 0:n.id),i=document.getElementById(r);i&&i.removeEventListener("animationend",cl,!1);try{oi[r].unmount(),(s=document.getElementById(r))==null||s.remove(),delete oi[r],delete Je[r]}catch{}}const oi=Dt({});function LE(t,e){const n=document.getElementById(String(e));n&&(oi[n.id]=t)}function ll(t,e=!0){const n=String(t);if(!oi[n])return;const s=document.getElementById(n);s&&s.classList.add(Pa),e?(FE(t),s&&s.addEventListener("animationend",cl,!1)):cl(n),nn.items=nn.items.filter(r=>r.containerId!==t)}function $E(t){for(const e in oi)ll(e,t);nn.items=[]}function kg(t,e){const n=document.getElementById(t.toastId);if(n){let s=t;s={...s,...Rg(s.transition)};const r=s.appendPosition?`${s.exit}--${s.position}`:s.exit;n.className+=` ${r}`,e&&e(n)}}function FE(t){for(const e in Je)if(e===t)for(const n of Je[e]||[])kg(n)}function UE(t){const e=ki().find(n=>n.toastId===t);return e==null?void 0:e.containerId}function wu(t){return document.getElementById(t)}function BE(t){const e=wu(t.containerId);return e&&e.classList.contains(Pa)}function kf(t){var e;const n=vs(t.content)?J(t.content.props):null;return n??J((e=t.data)!=null?e:{})}function VE(t){return t?nn.items.filter(e=>e.containerId===t).length>0:nn.items.length>0}function jE(){if(nn.items.length>0){const t=nn.items.shift();So(t==null?void 0:t.toastContent,t==null?void 0:t.toastProps)}}const Je=Dt({}),nn=Dt({items:[]});function ki(){const t=J(Je);return Object.values(t).reduce((e,n)=>[...e,...n],[])}function qE(t){return ki().find(e=>e.toastId===t)}function So(t,e={}){if(BE(e)){const n=wu(e.containerId);n&&n.addEventListener("animationend",ul.bind(null,t,e),!1)}else ul(t,e)}function ul(t,e={}){const n=wu(e.containerId);n&&n.removeEventListener("animationend",ul.bind(null,t,e),!1);const s=Je[e.containerId]||[],r=s.length>0;if(!r&&!PE(e.position)){const i=ME(e),o=Sg(cI,e);o.mount(i),LE(o,i.id)}r&&(e.position=s[0].position),Ai(()=>{e.updateId?Jt.update(e):Jt.add(t,e)})}const Jt={add(t,e){const{containerId:n=""}=e;n&&(Je[n]=Je[n]||[],Je[n].find(s=>s.toastId===e.toastId)||setTimeout(()=>{var s,r;e.newestOnTop?(s=Je[n])==null||s.unshift(e):(r=Je[n])==null||r.push(e),e.onOpen&&e.onOpen(kf(e))},e.delay||0))},remove(t){if(t){const e=UE(t);if(e){const n=Je[e];let s=n.find(r=>r.toastId===t);Je[e]=n.filter(r=>r.toastId!==t),!Je[e].length&&!VE(e)&&ll(e,!1),jE(),Ai(()=>{s!=null&&s.onClose&&(s.onClose(kf(s)),s=void 0)})}}},update(t={}){const{containerId:e=""}=t;if(e&&t.updateId){Je[e]=Je[e]||[];const n=Je[e].find(s=>s.toastId===t.toastId);n&&setTimeout(()=>{for(const s in t)if(Object.prototype.hasOwnProperty.call(t,s)){const r=t[s];n[s]=r}},t.delay||0)}},clear(t,e=!0){t?ll(t,e):$E(e)},dismissCallback(t){var e;const n=(e=t.currentTarget)==null?void 0:e.id,s=document.getElementById(n);s&&(s.removeEventListener("animationend",Jt.dismissCallback,!1),setTimeout(()=>{Jt.remove(n)}))},dismiss(t){if(t){const e=ki();for(const n of e)if(n.toastId===t){kg(n,s=>{s.addEventListener("animationend",Jt.dismissCallback,!1)});break}}}},Ng=Dt({}),Ho=Dt({});function Dg(){return Math.random().toString(36).substring(2,9)}function HE(t){return typeof t=="number"&&!isNaN(t)}function hl(t){return typeof t=="string"}function qs(t){return typeof t=="function"}function Oa(...t){return Tn(...t)}function bo(t){return typeof t=="object"&&(!!(t!=null&&t.render)||!!(t!=null&&t.setup)||typeof(t==null?void 0:t.type)=="object")}function zE(t={}){Ng[`${_e.CSS_NAMESPACE}-default-options`]=t}function KE(){return Ng[`${_e.CSS_NAMESPACE}-default-options`]||Ag}function WE(){return document.documentElement.classList.contains("dark")?"dark":"light"}var Ao=(t=>(t[t.Enter=0]="Enter",t[t.Exit=1]="Exit",t))(Ao||{});const Pg={containerId:{type:[String,Number],required:!1,default:""},clearOnUrlChange:{type:Boolean,required:!1,default:!0},dangerouslyHTMLString:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!0},limit:{type:Number,required:!1,default:void 0},position:{type:String,required:!1,default:Ri.TOP_LEFT},bodyClassName:{type:String,required:!1,default:""},autoClose:{type:[Number,Boolean],required:!1,default:!1},closeButton:{type:[Boolean,Function,Object],required:!1,default:void 0},transition:{type:[String,Object],required:!1,default:"bounce"},hideProgressBar:{type:Boolean,required:!1,default:!1},pauseOnHover:{type:Boolean,required:!1,default:!0},pauseOnFocusLoss:{type:Boolean,required:!1,default:!0},closeOnClick:{type:Boolean,required:!1,default:!0},progress:{type:Number,required:!1,default:void 0},progressClassName:{type:String,required:!1,default:""},toastStyle:{type:Object,required:!1,default(){return{}}},progressStyle:{type:Object,required:!1,default(){return{}}},role:{type:String,required:!1,default:"alert"},theme:{type:String,required:!1,default:Zs.AUTO},content:{type:[String,Object,Function],required:!1,default:""},toastId:{type:[String,Number],required:!1,default:""},data:{type:[Object,String],required:!1,default(){return{}}},type:{type:String,required:!1,default:gt.DEFAULT},icon:{type:[Boolean,String,Number,Object,Function],required:!1,default:void 0},delay:{type:Number,required:!1,default:void 0},onOpen:{type:Function,required:!1,default:void 0},onClose:{type:Function,required:!1,default:void 0},onClick:{type:Function,required:!1,default:void 0},isLoading:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},toastClassName:{type:String,required:!1,default:""},updateId:{type:[String,Number],required:!1,default:""}},GE={autoClose:{type:[Number,Boolean],required:!0},isRunning:{type:Boolean,required:!1,default:void 0},type:{type:String,required:!1,default:gt.DEFAULT},theme:{type:String,required:!1,default:Zs.AUTO},hide:{type:Boolean,required:!1,default:void 0},className:{type:[String,Function],required:!1,default:""},controlledProgress:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:void 0},isIn:{type:Boolean,required:!1,default:void 0},progress:{type:Number,required:!1,default:void 0},closeToast:{type:Function,required:!1,default:void 0}},QE=mr({name:"ProgressBar",props:GE,setup(t,{attrs:e}){const n=hn(),s=Ie(()=>t.hide?"true":"false"),r=Ie(()=>({...e.style||{},animationDuration:`${t.autoClose===!0?5e3:t.autoClose}ms`,animationPlayState:t.isRunning?"running":"paused",opacity:t.hide?0:1,transform:t.controlledProgress?`scaleX(${t.progress})`:"none"})),i=Ie(()=>[`${_e.CSS_NAMESPACE}__progress-bar`,t.controlledProgress?`${_e.CSS_NAMESPACE}__progress-bar--controlled`:`${_e.CSS_NAMESPACE}__progress-bar--animated`,`${_e.CSS_NAMESPACE}__progress-bar-theme--${t.theme}`,`${_e.CSS_NAMESPACE}__progress-bar--${t.type}`,t.rtl?`${_e.CSS_NAMESPACE}__progress-bar--rtl`:null].filter(Boolean).join(" ")),o=Ie(()=>`${i.value} ${(e==null?void 0:e.class)||""}`),a=()=>{n.value&&(n.value.onanimationend=null,n.value.ontransitionend=null)},c=()=>{t.isIn&&t.closeToast&&t.autoClose!==!1&&(t.closeToast(),a())},l=Ie(()=>t.controlledProgress?null:c),u=Ie(()=>t.controlledProgress?c:null);return Eo(()=>{n.value&&(a(),n.value.onanimationend=l.value,n.value.ontransitionend=u.value)}),()=>ie("div",{ref:n,role:"progressbar","aria-hidden":s.value,"aria-label":"notification timer",class:o.value,style:r.value},null)}}),YE=mr({name:"CloseButton",inheritAttrs:!1,props:{theme:{type:String,required:!1,default:Zs.AUTO},type:{type:String,required:!1,default:Zs.LIGHT},ariaLabel:{type:String,required:!1,default:"close"},closeToast:{type:Function,required:!1,default:void 0}},setup(t){return()=>ie("button",{class:`${_e.CSS_NAMESPACE}__close-button ${_e.CSS_NAMESPACE}__close-button--${t.theme}`,type:"button",onClick:e=>{e.stopPropagation(),t.closeToast&&t.closeToast(e)},"aria-label":t.ariaLabel},[ie("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},[ie("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"},null)])])}}),xa=({theme:t,type:e,path:n,...s})=>ie("svg",Tn({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${e})`},s),[ie("path",{d:n},null)]);function JE(t){return ie(xa,Tn(t,{path:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}),null)}function XE(t){return ie(xa,Tn(t,{path:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}),null)}function ZE(t){return ie(xa,Tn(t,{path:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}),null)}function eI(t){return ie(xa,Tn(t,{path:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}),null)}function tI(){return ie("div",{class:`${_e.CSS_NAMESPACE}__spinner`},null)}const fl={info:XE,warning:JE,success:ZE,error:eI,spinner:tI},nI=t=>t in fl;function sI({theme:t,type:e,isLoading:n,icon:s}){let r;const i={theme:t,type:e};return n?r=fl.spinner():s===!1?r=void 0:bo(s)?r=J(s):qs(s)?r=s(i):vs(s)?r=mn(s,i):hl(s)||HE(s)?r=s:nI(e)&&(r=fl[e](i)),r}const rI=()=>{};function iI(t,e,n=_e.COLLAPSE_DURATION){const{scrollHeight:s,style:r}=t,i=n;requestAnimationFrame(()=>{r.minHeight="initial",r.height=s+"px",r.transition=`all ${i}ms`,requestAnimationFrame(()=>{r.height="0",r.padding="0",r.margin="0",setTimeout(e,i)})})}function oI(t){const e=hn(!1),n=hn(!1),s=hn(!1),r=hn(Ao.Enter),i=Dt({...t,appendPosition:t.appendPosition||!1,collapse:typeof t.collapse>"u"?!0:t.collapse,collapseDuration:t.collapseDuration||_e.COLLAPSE_DURATION}),o=i.done||rI,a=Ie(()=>i.appendPosition?`${i.enter}--${i.position}`:i.enter),c=Ie(()=>i.appendPosition?`${i.exit}--${i.position}`:i.exit),l=Ie(()=>t.pauseOnHover?{onMouseenter:C,onMouseleave:v}:{});function u(){const S=a.value.split(" ");f().addEventListener(al.ENTRANCE_ANIMATION_END,v,{once:!0});const L=P=>{const Y=f();P.target===Y&&(Y.dispatchEvent(new Event(al.ENTRANCE_ANIMATION_END)),Y.removeEventListener("animationend",L),Y.removeEventListener("animationcancel",L),r.value===Ao.Enter&&P.type!=="animationcancel"&&Y.classList.remove(...S))},w=()=>{const P=f();P.classList.add(...S),P.addEventListener("animationend",L),P.addEventListener("animationcancel",L)};t.pauseOnFocusLoss&&p(),w()}function h(){if(!f())return;const S=()=>{const w=f();w.removeEventListener("animationend",S),i.collapse?iI(w,o,i.collapseDuration):o()},L=()=>{const w=f();r.value=Ao.Exit,w&&(w.className+=` ${c.value}`,w.addEventListener("animationend",S))};n.value||(s.value?S():setTimeout(L))}function f(){return t.toastRef.value}function p(){document.hasFocus()||C(),window.addEventListener("focus",v),window.addEventListener("blur",C)}function y(){window.removeEventListener("focus",v),window.removeEventListener("blur",C)}function v(){(!t.loading.value||t.isLoading===void 0)&&(e.value=!0)}function C(){e.value=!1}function k(S){S&&(S.stopPropagation(),S.preventDefault()),n.value=!1}return Eo(h),Eo(()=>{const S=ki();n.value=S.findIndex(L=>L.toastId===i.toastId)>-1}),Eo(()=>{t.isLoading!==void 0&&(t.loading.value?C():v())}),Aa(u),Ra(()=>{t.pauseOnFocusLoss&&y()}),{isIn:n,isRunning:e,hideToast:k,eventHandlers:l}}const aI=mr({name:"ToastItem",inheritAttrs:!1,props:Pg,setup(t){const e=hn(),n=Ie(()=>!!t.isLoading),s=Ie(()=>t.progress!==void 0&&t.progress!==null),r=Ie(()=>sI(t)),i=Ie(()=>[`${_e.CSS_NAMESPACE}__toast`,`${_e.CSS_NAMESPACE}__toast-theme--${t.theme}`,`${_e.CSS_NAMESPACE}__toast--${t.type}`,t.rtl?`${_e.CSS_NAMESPACE}__toast--rtl`:void 0,t.toastClassName||""].filter(Boolean).join(" ")),{isRunning:o,isIn:a,hideToast:c,eventHandlers:l}=oI({toastRef:e,loading:n,done:()=>{Jt.remove(t.toastId)},...Rg(t.transition),...t});return()=>ie("div",Tn({id:t.toastId,class:i.value,style:t.toastStyle||{},ref:e,"data-testid":`toast-item-${t.toastId}`,onClick:u=>{t.closeOnClick&&c(),t.onClick&&t.onClick(u)}},l.value),[ie("div",{role:t.role,"data-testid":"toast-body",class:`${_e.CSS_NAMESPACE}__toast-body ${t.bodyClassName||""}`},[r.value!=null&&ie("div",{"data-testid":`toast-icon-${t.type}`,class:[`${_e.CSS_NAMESPACE}__toast-icon`,t.isLoading?"":`${_e.CSS_NAMESPACE}--animate-icon ${_e.CSS_NAMESPACE}__zoom-enter`].join(" ")},[bo(r.value)?us(J(r.value),{theme:t.theme,type:t.type}):qs(r.value)?r.value({theme:t.theme,type:t.type}):r.value]),ie("div",{"data-testid":"toast-content"},[bo(t.content)?us(J(t.content),{toastProps:J(t),closeToast:c,data:t.data}):qs(t.content)?t.content({toastProps:J(t),closeToast:c,data:t.data}):t.dangerouslyHTMLString?us("div",{innerHTML:t.content}):t.content])]),(t.closeButton===void 0||t.closeButton===!0)&&ie(YE,{theme:t.theme,closeToast:u=>{u.stopPropagation(),u.preventDefault(),c()}},null),bo(t.closeButton)?us(J(t.closeButton),{closeToast:c,type:t.type,theme:t.theme}):qs(t.closeButton)?t.closeButton({closeToast:c,type:t.type,theme:t.theme}):null,ie(QE,{className:t.progressClassName,style:t.progressStyle,rtl:t.rtl,theme:t.theme,isIn:a.value,type:t.type,hide:t.hideProgressBar,isRunning:o.value,autoClose:t.autoClose,controlledProgress:s.value,progress:t.progress,closeToast:t.isLoading?void 0:c},null)])}});let Br=0;function Og(){typeof window>"u"||(Br&&window.cancelAnimationFrame(Br),Br=window.requestAnimationFrame(Og),Ho.lastUrl!==window.location.href&&(Ho.lastUrl=window.location.href,Jt.clear()))}const cI=mr({name:"ToastifyContainer",inheritAttrs:!1,props:Pg,setup(t){const e=Ie(()=>t.containerId),n=Ie(()=>Je[e.value]||[]),s=Ie(()=>n.value.filter(r=>r.position===t.position));return Aa(()=>{typeof window<"u"&&t.clearOnUrlChange&&window.requestAnimationFrame(Og)}),Ra(()=>{typeof window<"u"&&Br&&(window.cancelAnimationFrame(Br),Ho.lastUrl="")}),()=>ie(vt,null,[s.value.map(r=>{const{toastId:i=""}=r;return ie(aI,Tn({key:i},r),null)})])}});let Cc=!1;function xg(){const t=[];return ki().forEach(e=>{const n=document.getElementById(e.containerId);n&&!n.classList.contains(Pa)&&t.push(e)}),t}function lI(t){const e=xg().length,n=t??0;return n>0&&e+nn.items.length>=n}function uI(t){lI(t.limit)&&!t.updateId&&nn.items.push({toastId:t.toastId,containerId:t.containerId,toastContent:t.content,toastProps:t})}function Xn(t,e,n={}){if(Cc)return;n=Oa(KE(),{type:e},J(n)),(!n.toastId||typeof n.toastId!="string"&&typeof n.toastId!="number")&&(n.toastId=Dg()),n={...n,content:t,containerId:n.containerId||String(n.position)};const s=Number(n==null?void 0:n.progress);return s<0&&(n.progress=0),s>1&&(n.progress=1),n.theme==="auto"&&(n.theme=WE()),uI(n),Ho.lastUrl=window.location.href,n.multiple?nn.items.length?n.updateId&&So(t,n):So(t,n):(Cc=!0,Ne.clearAll(void 0,!1),setTimeout(()=>{So(t,n)},0),setTimeout(()=>{Cc=!1},390)),n.toastId}const Ne=(t,e)=>Xn(t,gt.DEFAULT,e);Ne.info=(t,e)=>Xn(t,gt.DEFAULT,{...e,type:gt.INFO});Ne.error=(t,e)=>Xn(t,gt.DEFAULT,{...e,type:gt.ERROR});Ne.warning=(t,e)=>Xn(t,gt.DEFAULT,{...e,type:gt.WARNING});Ne.warn=Ne.warning;Ne.success=(t,e)=>Xn(t,gt.DEFAULT,{...e,type:gt.SUCCESS});Ne.loading=(t,e)=>Xn(t,gt.DEFAULT,Oa(e,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1}));Ne.dark=(t,e)=>Xn(t,gt.DEFAULT,Oa(e,{theme:Zs.DARK}));Ne.remove=t=>{t?Jt.dismiss(t):Jt.clear()};Ne.clearAll=(t,e)=>{Jt.clear(t,e)};Ne.isActive=t=>{let e=!1;return e=xg().findIndex(n=>n.toastId===t)>-1,e};Ne.update=(t,e={})=>{setTimeout(()=>{const n=qE(t);if(n){const s=J(n),{content:r}=s,i={...s,...e,toastId:e.toastId||t,updateId:Dg()},o=i.render||r;delete i.render,Xn(o,i.type,i)}},0)};Ne.done=t=>{Ne.update(t,{isLoading:!1,progress:1})};Ne.promise=hI;function hI(t,{pending:e,error:n,success:s},r){let i;e&&(i=hl(e)?Ne.loading(e,r):Ne.loading(e.render,{...r,...e}));const o={isLoading:void 0,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},a=(l,u,h)=>{if(u==null){Ne.remove(i);return}const f={type:l,...o,...r,data:h},p=hl(u)?{render:u}:u;return i?Ne.update(i,{...f,...p,isLoading:!1,autoClose:!0}):Ne(p.render,{...f,...p,isLoading:!1,autoClose:!0}),h},c=qs(t)?t():t;return c.then(l=>{a("success",s,l)}).catch(l=>{a("error",n,l)}),c}Ne.POSITION=Ri;Ne.THEME=Zs;Ne.TYPE=gt;Ne.TRANSITIONS=SE;const Mg={install(t,e={}){fI(e)}};typeof window<"u"&&(window.Vue3Toastify=Mg);function fI(t={}){const e=Oa(Ag,t);zE(e)}var dI=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let Lg;const Ma=t=>Lg=t,$g=Symbol();function dl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Vr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Vr||(Vr={}));function pI(){const t=Tp(!0),e=t.run(()=>hn({}));let n=[],s=[];const r=Ta({install(i){Ma(r),r._a=i,i.provide($g,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!dI?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const Fg=()=>{};function Nf(t,e,n,s=Fg){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&Cp()&&I0(r),r}function Os(t,...e){t.slice().forEach(n=>{n(...e)})}const gI=t=>t();function pl(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];dl(r)&&dl(s)&&t.hasOwnProperty(n)&&!$e(s)&&!Un(s)?t[n]=pl(r,s):t[n]=s}return t}const mI=Symbol();function yI(t){return!dl(t)||!t.hasOwnProperty(mI)}const{assign:Dn}=Object;function vI(t){return!!($e(t)&&t.effect)}function _I(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=e_(n.state.value[t]);return Dn(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=Ta(Ie(()=>{Ma(n);const p=n._s.get(t);return o[f].call(p,p)})),h),{}))}return c=Ug(t,l,e,n,s,!0),c}function Ug(t,e,n={},s,r,i){let o;const a=Dn({actions:{}},n),c={deep:!0};let l,u,h=[],f=[],p;const y=s.state.value[t];!i&&!y&&(s.state.value[t]={}),hn({});let v;function C(D){let $;l=u=!1,typeof D=="function"?(D(s.state.value[t]),$={type:Vr.patchFunction,storeId:t,events:p}):(pl(s.state.value[t],D),$={type:Vr.patchObject,payload:D,storeId:t,events:p});const Q=v=Symbol();Ai().then(()=>{v===Q&&(l=!0)}),u=!0,Os(h,$,s.state.value[t])}const k=i?function(){const{state:$}=n,Q=$?$():{};this.$patch(he=>{Dn(he,Q)})}:Fg;function S(){o.stop(),h=[],f=[],s._s.delete(t)}function L(D,$){return function(){Ma(s);const Q=Array.from(arguments),he=[],U=[];function ae(ce){he.push(ce)}function Oe(ce){U.push(ce)}Os(f,{args:Q,name:D,store:P,after:ae,onError:Oe});let Ke;try{Ke=$.apply(this&&this.$id===t?this:P,Q)}catch(ce){throw Os(U,ce),ce}return Ke instanceof Promise?Ke.then(ce=>(Os(he,ce),ce)).catch(ce=>(Os(U,ce),Promise.reject(ce))):(Os(he,Ke),Ke)}}const w={_p:s,$id:t,$onAction:Nf.bind(null,f),$patch:C,$reset:k,$subscribe(D,$={}){const Q=Nf(h,D,$.detached,()=>he()),he=o.run(()=>Lr(()=>s.state.value[t],U=>{($.flush==="sync"?u:l)&&D({storeId:t,type:Vr.direct,events:p},U)},Dn({},c,$)));return Q},$dispose:S},P=Dt(w);s._s.set(t,P);const Y=s._a&&s._a.runWithContext||gI,oe=s._e.run(()=>(o=Tp(),Y(()=>o.run(e))));for(const D in oe){const $=oe[D];if($e($)&&!vI($)||Un($))i||(y&&yI($)&&($e($)?$.value=y[D]:pl($,y[D])),s.state.value[t][D]=$);else if(typeof $=="function"){const Q=L(D,$);oe[D]=Q,a.actions[D]=$}}return Dn(P,oe),Dn(J(P),oe),Object.defineProperty(P,"$state",{get:()=>s.state.value[t],set:D=>{C($=>{Dn($,D)})}}),s._p.forEach(D=>{Dn(P,o.run(()=>D({store:P,app:s._a,pinia:s,options:a})))}),y&&i&&n.hydrate&&n.hydrate(P.$state,y),l=!0,u=!0,P}function wI(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=z_();return a=a||(l?$t($g,null):null),a&&Ma(a),a=Lg,a._s.has(s)||(i?Ug(s,e,r,a):_I(s,r,a)),a._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Ms=typeof window<"u";function EI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ee=Object.assign;function Sc(t,e){const n={};for(const s in e){const r=e[s];n[s]=Ut(r)?r.map(t):t(r)}return n}const jr=()=>{},Ut=Array.isArray,II=/\/$/,TI=t=>t.replace(II,"");function bc(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=AI(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function CI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Df(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function SI(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&er(e.matched[s],n.matched[r])&&Bg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function er(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Bg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!bI(t[n],e[n]))return!1;return!0}function bI(t,e){return Ut(t)?Pf(t,e):Ut(e)?Pf(e,t):t===e}function Pf(t,e){return Ut(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function AI(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var ai;(function(t){t.pop="pop",t.push="push"})(ai||(ai={}));var qr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(qr||(qr={}));function RI(t){if(!t)if(Ms){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),TI(t)}const kI=/^[^#]+#/;function NI(t,e){return t.replace(kI,"#")+e}function DI(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const La=()=>({left:window.pageXOffset,top:window.pageYOffset});function PI(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=DI(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Of(t,e){return(history.state?history.state.position-e:-1)+t}const gl=new Map;function OI(t,e){gl.set(t,e)}function xI(t){const e=gl.get(t);return gl.delete(t),e}let MI=()=>location.protocol+"//"+location.host;function Vg(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Df(c,"")}return Df(n,t)+s+r}function LI(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const p=Vg(t,location),y=n.value,v=e.value;let C=0;if(f){if(n.value=p,e.value=f,o&&o===y){o=null;return}C=v?f.position-v.position:0}else s(p);r.forEach(k=>{k(n.value,y,{delta:C,type:ai.pop,direction:C?C>0?qr.forward:qr.back:qr.unknown})})};function c(){o=n.value}function l(f){r.push(f);const p=()=>{const y=r.indexOf(f);y>-1&&r.splice(y,1)};return i.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(Ee({},f.state,{scroll:La()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function xf(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?La():null}}function $I(t){const{history:e,location:n}=window,s={value:Vg(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:MI()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),r.value=l}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(c,l){const u=Ee({},e.state,xf(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=Ee({},r.value,e.state,{forward:c,scroll:La()});i(u.current,u,!0);const h=Ee({},xf(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function FI(t){t=RI(t);const e=$I(t),n=LI(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Ee({location:"",base:t,go:s,createHref:NI.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function UI(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),FI(t)}function BI(t){return typeof t=="string"||t&&typeof t=="object"}function jg(t){return typeof t=="string"||typeof t=="symbol"}const Rn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},qg=Symbol("");var Mf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Mf||(Mf={}));function tr(t,e){return Ee(new Error,{type:t,[qg]:!0},e)}function an(t,e){return t instanceof Error&&qg in t&&(e==null||!!(t.type&e))}const Lf="[^/]+?",VI={sensitive:!1,strict:!1,start:!0,end:!0},jI=/[.+*?^${}()[\]/\\]/g;function qI(t,e){const n=Ee({},VI,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const f=l[h];let p=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(jI,"\\$&"),p+=40;else if(f.type===1){const{value:y,repeatable:v,optional:C,regexp:k}=f;i.push({name:y,repeatable:v,optional:C});const S=k||Lf;if(S!==Lf){p+=10;try{new RegExp(`(${S})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${y}" (${S}): `+w.message)}}let L=v?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;h||(L=C&&l.length<2?`(?:/${L})`:"/"+L),C&&(L+="?"),r+=L,p+=20,C&&(p+=-8),v&&(p+=-20),S===".*"&&(p+=-50)}u.push(p)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",y=i[f-1];h[y.name]=p&&y.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:y,repeatable:v,optional:C}=p,k=y in l?l[y]:"";if(Ut(k)&&!v)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const S=Ut(k)?k.join("/"):k;if(!S)if(C)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=S}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function HI(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function zI(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=HI(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if($f(s))return 1;if($f(r))return-1}return r.length-s.length}function $f(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const KI={type:0,value:""},WI=/[a-zA-Z0-9_]/;function GI(t){if(!t)return[[]];if(t==="/")return[[KI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:WI.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function QI(t,e,n){const s=qI(GI(t.path),n),r=Ee(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function YI(t,e){const n=[],s=new Map;e=Bf({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,f){const p=!f,y=JI(u);y.aliasOf=f&&f.record;const v=Bf(e,u),C=[y];if("alias"in u){const L=typeof u.alias=="string"?[u.alias]:u.alias;for(const w of L)C.push(Ee({},y,{components:f?f.record.components:y.components,path:w,aliasOf:f?f.record:y}))}let k,S;for(const L of C){const{path:w}=L;if(h&&w[0]!=="/"){const P=h.record.path,Y=P[P.length-1]==="/"?"":"/";L.path=h.record.path+(w&&Y+w)}if(k=QI(L,h,v),f?f.alias.push(k):(S=S||k,S!==k&&S.alias.push(k),p&&u.name&&!Uf(k)&&o(u.name)),y.children){const P=y.children;for(let Y=0;Y<P.length;Y++)i(P[Y],k,f&&f.children[Y])}f=f||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return S?()=>{o(S)}:jr}function o(u){if(jg(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&zI(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Hg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Uf(u)&&s.set(u.record.name,u)}function l(u,h){let f,p={},y,v;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw tr(1,{location:u});v=f.record.name,p=Ee(Ff(h.params,f.keys.filter(S=>!S.optional).map(S=>S.name)),u.params&&Ff(u.params,f.keys.map(S=>S.name))),y=f.stringify(p)}else if("path"in u)y=u.path,f=n.find(S=>S.re.test(y)),f&&(p=f.parse(y),v=f.record.name);else{if(f=h.name?s.get(h.name):n.find(S=>S.re.test(h.path)),!f)throw tr(1,{location:u,currentLocation:h});v=f.record.name,p=Ee({},h.params,u.params),y=f.stringify(p)}const C=[];let k=f;for(;k;)C.unshift(k.record),k=k.parent;return{name:v,path:y,params:p,matched:C,meta:ZI(C)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Ff(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function JI(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:XI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function XI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Uf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ZI(t){return t.reduce((e,n)=>Ee(e,n.meta),{})}function Bf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Hg(t,e){return e.children.some(n=>n===t||Hg(t,n))}const zg=/#/g,eT=/&/g,tT=/\//g,nT=/=/g,sT=/\?/g,Kg=/\+/g,rT=/%5B/g,iT=/%5D/g,Wg=/%5E/g,oT=/%60/g,Gg=/%7B/g,aT=/%7C/g,Qg=/%7D/g,cT=/%20/g;function Eu(t){return encodeURI(""+t).replace(aT,"|").replace(rT,"[").replace(iT,"]")}function lT(t){return Eu(t).replace(Gg,"{").replace(Qg,"}").replace(Wg,"^")}function ml(t){return Eu(t).replace(Kg,"%2B").replace(cT,"+").replace(zg,"%23").replace(eT,"%26").replace(oT,"`").replace(Gg,"{").replace(Qg,"}").replace(Wg,"^")}function uT(t){return ml(t).replace(nT,"%3D")}function hT(t){return Eu(t).replace(zg,"%23").replace(sT,"%3F")}function fT(t){return t==null?"":hT(t).replace(tT,"%2F")}function zo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function dT(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Kg," "),o=i.indexOf("="),a=zo(o<0?i:i.slice(0,o)),c=o<0?null:zo(i.slice(o+1));if(a in e){let l=e[a];Ut(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Vf(t){let e="";for(let n in t){const s=t[n];if(n=uT(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ut(s)?s.map(i=>i&&ml(i)):[s&&ml(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function pT(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ut(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const gT=Symbol(""),jf=Symbol(""),Iu=Symbol(""),Tu=Symbol(""),yl=Symbol("");function Ar(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function On(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(tr(4,{from:n,to:e})):h instanceof Error?a(h):BI(h)?a(tr(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Ac(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(mT(a)){const l=(a.__vccOpts||a)[e];l&&r.push(On(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=EI(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&On(f,n,s,i,o)()}))}}return r}function mT(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function qf(t){const e=$t(Iu),n=$t(Tu),s=Ie(()=>e.resolve(Yt(t.to))),r=Ie(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(er.bind(null,u));if(f>-1)return f;const p=Hf(c[l-2]);return l>1&&Hf(u)===p&&h[h.length-1].path!==p?h.findIndex(er.bind(null,c[l-2])):f}),i=Ie(()=>r.value>-1&&wT(n.params,s.value.params)),o=Ie(()=>r.value>-1&&r.value===n.matched.length-1&&Bg(n.params,s.value.params));function a(c={}){return _T(c)?e[Yt(t.replace)?"replace":"push"](Yt(t.to)).catch(jr):Promise.resolve()}return{route:s,href:Ie(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const yT=mr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qf,setup(t,{slots:e}){const n=Dt(qf(t)),{options:s}=$t(Iu),r=Ie(()=>({[zf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[zf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:us("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),vT=yT;function _T(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function wT(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Ut(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Hf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const zf=(t,e,n)=>t??e??n,ET=mr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=$t(yl),r=Ie(()=>t.route||s.value),i=$t(jf,0),o=Ie(()=>{let l=Yt(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Ie(()=>r.value.matched[o.value]);Io(jf,Ie(()=>o.value+1)),Io(gT,a),Io(yl,r);const c=hn();return Lr(()=>[c.value,a.value,t.name],([l,u,h],[f,p,y])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!er(u,p)||!f)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Kf(n.default,{Component:f,route:l});const p=h.props[u],y=p?p===!0?l.params:typeof p=="function"?p(l):p:null,C=us(f,Ee({},y,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Kf(n.default,{Component:C,route:l})||C}}});function Kf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Yg=ET;function IT(t){const e=YI(t.routes,t),n=t.parseQuery||dT,s=t.stringifyQuery||Vf,r=t.history,i=Ar(),o=Ar(),a=Ar(),c=J0(Rn);let l=Rn;Ms&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Sc.bind(null,E=>""+E),h=Sc.bind(null,fT),f=Sc.bind(null,zo);function p(E,V){let x,H;return jg(E)?(x=e.getRecordMatcher(E),H=V):H=E,e.addRoute(H,x)}function y(E){const V=e.getRecordMatcher(E);V&&e.removeRoute(V)}function v(){return e.getRoutes().map(E=>E.record)}function C(E){return!!e.getRecordMatcher(E)}function k(E,V){if(V=Ee({},V||c.value),typeof E=="string"){const m=bc(n,E,V.path),_=e.resolve({path:m.path},V),T=r.createHref(m.fullPath);return Ee(m,_,{params:f(_.params),hash:zo(m.hash),redirectedFrom:void 0,href:T})}let x;if("path"in E)x=Ee({},E,{path:bc(n,E.path,V.path).path});else{const m=Ee({},E.params);for(const _ in m)m[_]==null&&delete m[_];x=Ee({},E,{params:h(m)}),V.params=h(V.params)}const H=e.resolve(x,V),ve=E.hash||"";H.params=u(f(H.params));const d=CI(s,Ee({},E,{hash:lT(ve),path:H.path})),g=r.createHref(d);return Ee({fullPath:d,hash:ve,query:s===Vf?pT(E.query):E.query||{}},H,{redirectedFrom:void 0,href:g})}function S(E){return typeof E=="string"?bc(n,E,c.value.path):Ee({},E)}function L(E,V){if(l!==E)return tr(8,{from:V,to:E})}function w(E){return oe(E)}function P(E){return w(Ee(S(E),{replace:!0}))}function Y(E){const V=E.matched[E.matched.length-1];if(V&&V.redirect){const{redirect:x}=V;let H=typeof x=="function"?x(E):x;return typeof H=="string"&&(H=H.includes("?")||H.includes("#")?H=S(H):{path:H},H.params={}),Ee({query:E.query,hash:E.hash,params:"path"in H?{}:E.params},H)}}function oe(E,V){const x=l=k(E),H=c.value,ve=E.state,d=E.force,g=E.replace===!0,m=Y(x);if(m)return oe(Ee(S(m),{state:typeof m=="object"?Ee({},ve,m.state):ve,force:d,replace:g}),V||x);const _=x;_.redirectedFrom=V;let T;return!d&&SI(s,H,x)&&(T=tr(16,{to:_,from:H}),jt(H,H,!0,!1)),(T?Promise.resolve(T):Q(_,H)).catch(b=>an(b)?an(b,2)?b:Sn(b):ye(b,_,H)).then(b=>{if(b){if(an(b,2))return oe(Ee({replace:g},S(b.to),{state:typeof b.to=="object"?Ee({},ve,b.to.state):ve,force:d}),V||_)}else b=U(_,H,!0,g,ve);return he(_,H,b),b})}function D(E,V){const x=L(E,V);return x?Promise.reject(x):Promise.resolve()}function $(E){const V=Ns.values().next().value;return V&&typeof V.runWithContext=="function"?V.runWithContext(E):E()}function Q(E,V){let x;const[H,ve,d]=TT(E,V);x=Ac(H.reverse(),"beforeRouteLeave",E,V);for(const m of H)m.leaveGuards.forEach(_=>{x.push(On(_,E,V))});const g=D.bind(null,E,V);return x.push(g),nt(x).then(()=>{x=[];for(const m of i.list())x.push(On(m,E,V));return x.push(g),nt(x)}).then(()=>{x=Ac(ve,"beforeRouteUpdate",E,V);for(const m of ve)m.updateGuards.forEach(_=>{x.push(On(_,E,V))});return x.push(g),nt(x)}).then(()=>{x=[];for(const m of E.matched)if(m.beforeEnter&&!V.matched.includes(m))if(Ut(m.beforeEnter))for(const _ of m.beforeEnter)x.push(On(_,E,V));else x.push(On(m.beforeEnter,E,V));return x.push(g),nt(x)}).then(()=>(E.matched.forEach(m=>m.enterCallbacks={}),x=Ac(d,"beforeRouteEnter",E,V),x.push(g),nt(x))).then(()=>{x=[];for(const m of o.list())x.push(On(m,E,V));return x.push(g),nt(x)}).catch(m=>an(m,8)?m:Promise.reject(m))}function he(E,V,x){for(const H of a.list())$(()=>H(E,V,x))}function U(E,V,x,H,ve){const d=L(E,V);if(d)return d;const g=V===Rn,m=Ms?history.state:{};x&&(H||g?r.replace(E.fullPath,Ee({scroll:g&&m&&m.scroll},ve)):r.push(E.fullPath,ve)),c.value=E,jt(E,V,x,g),Sn()}let ae;function Oe(){ae||(ae=r.listen((E,V,x)=>{if(!eo.listening)return;const H=k(E),ve=Y(H);if(ve){oe(Ee(ve,{replace:!0}),H).catch(jr);return}l=H;const d=c.value;Ms&&OI(Of(d.fullPath,x.delta),La()),Q(H,d).catch(g=>an(g,12)?g:an(g,2)?(oe(g.to,H).then(m=>{an(m,20)&&!x.delta&&x.type===ai.pop&&r.go(-1,!1)}).catch(jr),Promise.reject()):(x.delta&&r.go(-x.delta,!1),ye(g,H,d))).then(g=>{g=g||U(H,d,!1),g&&(x.delta&&!an(g,8)?r.go(-x.delta,!1):x.type===ai.pop&&an(g,20)&&r.go(-1,!1)),he(H,d,g)}).catch(jr)}))}let Ke=Ar(),ce=Ar(),ge;function ye(E,V,x){Sn(E);const H=ce.list();return H.length?H.forEach(ve=>ve(E,V,x)):console.error(E),Promise.reject(E)}function on(){return ge&&c.value!==Rn?Promise.resolve():new Promise((E,V)=>{Ke.add([E,V])})}function Sn(E){return ge||(ge=!E,Oe(),Ke.list().forEach(([V,x])=>E?x(E):V()),Ke.reset()),E}function jt(E,V,x,H){const{scrollBehavior:ve}=t;if(!Ms||!ve)return Promise.resolve();const d=!x&&xI(Of(E.fullPath,0))||(H||!x)&&history.state&&history.state.scroll||null;return Ai().then(()=>ve(E,V,d)).then(g=>g&&PI(g)).catch(g=>ye(g,E,V))}const mt=E=>r.go(E);let ks;const Ns=new Set,eo={currentRoute:c,listening:!0,addRoute:p,removeRoute:y,hasRoute:C,getRoutes:v,resolve:k,options:t,push:w,replace:P,go:mt,back:()=>mt(-1),forward:()=>mt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ce.add,isReady:on,install(E){const V=this;E.component("RouterLink",vT),E.component("RouterView",Yg),E.config.globalProperties.$router=V,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>Yt(c)}),Ms&&!ks&&c.value===Rn&&(ks=!0,w(r.location).catch(ve=>{}));const x={};for(const ve in Rn)x[ve]=Ie(()=>c.value[ve]);E.provide(Iu,V),E.provide(Tu,Dt(x)),E.provide(yl,c);const H=E.unmount;Ns.add(E),E.unmount=function(){Ns.delete(E),Ns.size<1&&(l=Rn,ae&&ae(),ae=null,c.value=Rn,ks=!1,ge=!1),H()}}};function nt(E){return E.reduce((V,x)=>V.then(()=>$(x)),Promise.resolve())}return eo}function TT(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>er(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>er(l,c))||r.push(c))}return[n,s,r]}function CT(){return $t(Tu)}const ST="/easy-reach/logout.png",bT="modulepreload",AT=function(t){return"/easy-reach/"+t},Wf={},Gf=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=AT(i),i in Wf)return;Wf[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":bT,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/**
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
 *//**
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
 */const Jg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},RT=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Xg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(f=64)),s.push(n[u],n[h],n[f],n[p])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):RT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new kT;const f=i<<2|a>>4;if(s.push(f),l!==64){const p=a<<4&240|l>>2;if(s.push(p),h!==64){const y=l<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const NT=function(t){const e=Jg(t);return Xg.encodeByteArray(e,!0)},Ko=function(t){return NT(t).replace(/\./g,"")},Zg=function(t){try{return Xg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function DT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const PT=()=>DT().__FIREBASE_DEFAULTS__,OT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Zg(t[1]);return e&&JSON.parse(e)},Cu=()=>{try{return PT()||OT()||xT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},em=t=>{var e,n;return(n=(e=Cu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},MT=t=>{const e=em(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},tm=()=>{var t;return(t=Cu())===null||t===void 0?void 0:t.config},nm=t=>{var e;return(e=Cu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class LT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function $T(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ko(JSON.stringify(n)),Ko(JSON.stringify(o)),a].join(".")}/**
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
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function FT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function UT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function BT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function VT(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jT(){try{return typeof indexedDB=="object"}catch{return!1}}function qT(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const HT="FirebaseError";class Cn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=HT,Object.setPrototypeOf(this,Cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ni.prototype.create)}}class Ni{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?zT(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Cn(r,a,s)}}function zT(t,e){return t.replace(KT,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const KT=/\{\$([^}]+)}/g;function WT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Qf(i)&&Qf(o)){if(!Wo(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Qf(t){return t!==null&&typeof t=="object"}/**
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
 */function Di(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function GT(t,e){const n=new QT(t,e);return n.subscribe.bind(n)}class QT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");YT(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Rc),r.error===void 0&&(r.error=Rc),r.complete===void 0&&(r.complete=Rc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function YT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Rc(){}/**
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
 */function Et(t){return t&&t._delegate?t._delegate:t}class _s{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const is="[DEFAULT]";/**
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
 */class JT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new LT;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ZT(e))try{this.getOrInitializeService({instanceIdentifier:is})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=is){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=is){return this.instances.has(e)}getOptions(e=is){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:XT(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=is){return this.component?this.component.multipleInstances?e:is:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function XT(t){return t===is?void 0:t}function ZT(t){return t.instantiationMode==="EAGER"}/**
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
 */class eC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new JT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(pe||(pe={}));const tC={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},nC=pe.INFO,sC={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},rC=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=sC[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Su{constructor(e){this.name=e,this._logLevel=nC,this._logHandler=rC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const iC=(t,e)=>e.some(n=>t instanceof n);let Yf,Jf;function oC(){return Yf||(Yf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aC(){return Jf||(Jf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sm=new WeakMap,vl=new WeakMap,rm=new WeakMap,kc=new WeakMap,bu=new WeakMap;function cC(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(jn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&sm.set(n,t)}).catch(()=>{}),bu.set(e,t),e}function lC(t){if(vl.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});vl.set(t,e)}let _l={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uC(t){_l=t(_l)}function hC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Nc(this),e,...n);return rm.set(s,e.sort?e.sort():[e]),jn(s)}:aC().includes(t)?function(...e){return t.apply(Nc(this),e),jn(sm.get(this))}:function(...e){return jn(t.apply(Nc(this),e))}}function fC(t){return typeof t=="function"?hC(t):(t instanceof IDBTransaction&&lC(t),iC(t,oC())?new Proxy(t,_l):t)}function jn(t){if(t instanceof IDBRequest)return cC(t);if(kc.has(t))return kc.get(t);const e=fC(t);return e!==t&&(kc.set(t,e),bu.set(e,t)),e}const Nc=t=>bu.get(t);function dC(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=jn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(jn(o.result),c.oldVersion,c.newVersion,jn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const pC=["get","getKey","getAll","getAllKeys","count"],gC=["put","add","delete","clear"],Dc=new Map;function Xf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Dc.get(e))return Dc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=gC.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||pC.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return Dc.set(e,i),i}uC(t=>({...t,get:(e,n,s)=>Xf(e,n)||t.get(e,n,s),has:(e,n)=>!!Xf(e,n)||t.has(e,n)}));/**
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
 */class mC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yC(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function yC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wl="@firebase/app",Zf="0.9.13";/**
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
 */const ws=new Su("@firebase/app"),vC="@firebase/app-compat",_C="@firebase/analytics-compat",wC="@firebase/analytics",EC="@firebase/app-check-compat",IC="@firebase/app-check",TC="@firebase/auth",CC="@firebase/auth-compat",SC="@firebase/database",bC="@firebase/database-compat",AC="@firebase/functions",RC="@firebase/functions-compat",kC="@firebase/installations",NC="@firebase/installations-compat",DC="@firebase/messaging",PC="@firebase/messaging-compat",OC="@firebase/performance",xC="@firebase/performance-compat",MC="@firebase/remote-config",LC="@firebase/remote-config-compat",$C="@firebase/storage",FC="@firebase/storage-compat",UC="@firebase/firestore",BC="@firebase/firestore-compat",VC="firebase",jC="9.23.0";/**
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
 */const El="[DEFAULT]",qC={[wl]:"fire-core",[vC]:"fire-core-compat",[wC]:"fire-analytics",[_C]:"fire-analytics-compat",[IC]:"fire-app-check",[EC]:"fire-app-check-compat",[TC]:"fire-auth",[CC]:"fire-auth-compat",[SC]:"fire-rtdb",[bC]:"fire-rtdb-compat",[AC]:"fire-fn",[RC]:"fire-fn-compat",[kC]:"fire-iid",[NC]:"fire-iid-compat",[DC]:"fire-fcm",[PC]:"fire-fcm-compat",[OC]:"fire-perf",[xC]:"fire-perf-compat",[MC]:"fire-rc",[LC]:"fire-rc-compat",[$C]:"fire-gcs",[FC]:"fire-gcs-compat",[UC]:"fire-fst",[BC]:"fire-fst-compat","fire-js":"fire-js",[VC]:"fire-js-all"};/**
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
 */const Go=new Map,Il=new Map;function HC(t,e){try{t.container.addComponent(e)}catch(n){ws.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function nr(t){const e=t.name;if(Il.has(e))return ws.debug(`There were multiple attempts to register component ${e}.`),!1;Il.set(e,t);for(const n of Go.values())HC(n,t);return!0}function Au(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const zC={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},qn=new Ni("app","Firebase",zC);/**
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
 */class KC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new _s("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qn.create("app-deleted",{appName:this._name})}}/**
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
 */const yr=jC;function im(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:El,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw qn.create("bad-app-name",{appName:String(r)});if(n||(n=tm()),!n)throw qn.create("no-options");const i=Go.get(r);if(i){if(Wo(n,i.options)&&Wo(s,i.config))return i;throw qn.create("duplicate-app",{appName:r})}const o=new eC(r);for(const c of Il.values())o.addComponent(c);const a=new KC(n,s,o);return Go.set(r,a),a}function om(t=El){const e=Go.get(t);if(!e&&t===El&&tm())return im();if(!e)throw qn.create("no-app",{appName:t});return e}function Hn(t,e,n){var s;let r=(s=qC[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ws.warn(a.join(" "));return}nr(new _s(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const WC="firebase-heartbeat-database",GC=1,ci="firebase-heartbeat-store";let Pc=null;function am(){return Pc||(Pc=dC(WC,GC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ci)}}}).catch(t=>{throw qn.create("idb-open",{originalErrorMessage:t.message})})),Pc}async function QC(t){try{return await(await am()).transaction(ci).objectStore(ci).get(cm(t))}catch(e){if(e instanceof Cn)ws.warn(e.message);else{const n=qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ws.warn(n.message)}}}async function ed(t,e){try{const s=(await am()).transaction(ci,"readwrite");await s.objectStore(ci).put(e,cm(t)),await s.done}catch(n){if(n instanceof Cn)ws.warn(n.message);else{const s=qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ws.warn(s.message)}}}function cm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const YC=1024,JC=30*24*60*60*1e3;class XC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eS(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=td();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=JC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=td(),{heartbeatsToSend:n,unsentEntries:s}=ZC(this._heartbeatsCache.heartbeats),r=Ko(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function td(){return new Date().toISOString().substring(0,10)}function ZC(t,e=YC){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),nd(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),nd(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class eS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jT()?qT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await QC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ed(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ed(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function nd(t){return Ko(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function tS(t){nr(new _s("platform-logger",e=>new mC(e),"PRIVATE")),nr(new _s("heartbeat",e=>new XC(e),"PRIVATE")),Hn(wl,Zf,t),Hn(wl,Zf,"esm2017"),Hn("fire-js","")}tS("");function Ru(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function lm(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nS=lm,um=new Ni("auth","Firebase",lm());/**
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
 */const Qo=new Su("@firebase/auth");function sS(t,...e){Qo.logLevel<=pe.WARN&&Qo.warn(`Auth (${yr}): ${t}`,...e)}function Ro(t,...e){Qo.logLevel<=pe.ERROR&&Qo.error(`Auth (${yr}): ${t}`,...e)}/**
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
 */function sn(t,...e){throw ku(t,...e)}function Xt(t,...e){return ku(t,...e)}function hm(t,e,n){const s=Object.assign(Object.assign({},nS()),{[e]:n});return new Ni("auth","Firebase",s).create(e,{appName:t.name})}function rS(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&sn(t,"argument-error"),hm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ku(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return um.create(t,...e)}function ne(t,e,...n){if(!t)throw ku(e,...n)}function fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ro(e),new Error(e)}function yn(t,e){t||fn(e)}/**
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
 */function Tl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function iS(){return sd()==="http:"||sd()==="https:"}function sd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function oS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iS()||UT()||"connection"in navigator)?navigator.onLine:!0}function aS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Pi{constructor(e,n){this.shortDelay=e,this.longDelay=n,yn(n>e,"Short delay should be less than long delay!"),this.isMobile=FT()||BT()}get(){return oS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Nu(t,e){yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class fm{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const cS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const lS=new Pi(3e4,6e4);function dm(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Oi(t,e,n,s,r={}){return pm(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Di(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),fm.fetch()(gm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function pm(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},cS),e);try{const r=new hS(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ao(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ao(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ao(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ao(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw hm(t,u,l);sn(t,u)}}catch(r){if(r instanceof Cn)throw r;sn(t,"network-request-failed",{message:String(r)})}}async function uS(t,e,n,s,r={}){const i=await Oi(t,e,n,s,r);return"mfaPendingCredential"in i&&sn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function gm(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Nu(t.config,r):`${t.config.apiScheme}://${r}`}class hS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Xt(this.auth,"network-request-failed")),lS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ao(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Xt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function fS(t,e){return Oi(t,"POST","/v1/accounts:delete",e)}async function dS(t,e){return Oi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Hr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pS(t,e=!1){const n=Et(t),s=await n.getIdToken(e),r=Du(s);ne(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Hr(Oc(r.auth_time)),issuedAtTime:Hr(Oc(r.iat)),expirationTime:Hr(Oc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Oc(t){return Number(t)*1e3}function Du(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ro("JWT malformed, contained fewer than 3 sections"),null;try{const r=Zg(n);return r?JSON.parse(r):(Ro("Failed to decode base64 JWT payload"),null)}catch(r){return Ro("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function gS(t){const e=Du(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function li(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Cn&&mS(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function mS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class yS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class mm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hr(this.lastLoginAt),this.creationTime=Hr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await li(t,dS(n,{idToken:s}));ne(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?wS(i.providerUserInfo):[],a=_S(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new mm(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function vS(t){const e=Et(t);await Yo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _S(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function wS(t){return t.map(e=>{var{providerId:n}=e,s=Ru(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function ES(t,e){const n=await pm(t,{},async()=>{const s=Di({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=gm(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fm.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return ne(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await ES(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new ui;return s&&(ne(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(ne(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(ne(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ui,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
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
 */function kn(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ms{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Ru(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new mm(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await li(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pS(this,e)}reload(){return vS(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ms(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Yo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await li(this,fS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,S=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:L,emailVerified:w,isAnonymous:P,providerData:Y,stsTokenManager:oe}=n;ne(L&&oe,e,"internal-error");const D=ui.fromJSON(this.name,oe);ne(typeof L=="string",e,"internal-error"),kn(h,e.name),kn(f,e.name),ne(typeof w=="boolean",e,"internal-error"),ne(typeof P=="boolean",e,"internal-error"),kn(p,e.name),kn(y,e.name),kn(v,e.name),kn(C,e.name),kn(k,e.name),kn(S,e.name);const $=new ms({uid:L,auth:e,email:f,emailVerified:w,displayName:h,isAnonymous:P,photoURL:y,phoneNumber:p,tenantId:v,stsTokenManager:D,createdAt:k,lastLoginAt:S});return Y&&Array.isArray(Y)&&($.providerData=Y.map(Q=>Object.assign({},Q))),C&&($._redirectEventId=C),$}static async _fromIdTokenResponse(e,n,s=!1){const r=new ui;r.updateFromServerResponse(n);const i=new ms({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Yo(i),i}}/**
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
 */const rd=new Map;function dn(t){yn(t instanceof Function,"Expected a class definition");let e=rd.get(t);return e?(yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rd.set(t,e),e)}/**
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
 */class ym{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ym.type="NONE";const id=ym;/**
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
 */function ko(t,e,n){return`firebase:${t}:${e}:${n}`}class Hs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=ko(this.userKey,r.apiKey,i),this.fullPersistenceKey=ko("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ms._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Hs(dn(id),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||dn(id);const o=ko(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=ms._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Hs(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Hs(i,e,s))}}/**
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
 */function od(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Im(e))return"Blackberry";if(Tm(e))return"Webos";if(Pu(e))return"Safari";if((e.includes("chrome/")||_m(e))&&!e.includes("edge/"))return"Chrome";if(Em(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function vm(t=ht()){return/firefox\//i.test(t)}function Pu(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _m(t=ht()){return/crios\//i.test(t)}function wm(t=ht()){return/iemobile/i.test(t)}function Em(t=ht()){return/android/i.test(t)}function Im(t=ht()){return/blackberry/i.test(t)}function Tm(t=ht()){return/webos/i.test(t)}function $a(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function IS(t=ht()){var e;return $a(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function TS(){return VT()&&document.documentMode===10}function Cm(t=ht()){return $a(t)||Em(t)||Tm(t)||Im(t)||/windows phone/i.test(t)||wm(t)}function CS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Sm(t,e=[]){let n;switch(t){case"Browser":n=od(ht());break;case"Worker":n=`${od(ht())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yr}/${s}`}async function bm(t,e){return Oi(t,"GET","/v2/recaptchaConfig",dm(t,e))}function ad(t){return t!==void 0&&t.enterprise!==void 0}class Am{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function SS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Rm(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Xt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",SS().appendChild(s)})}function bS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const AS="https://www.google.com/recaptcha/enterprise.js?render=",RS="recaptcha-enterprise",kS="NO_RECAPTCHA";class NS{constructor(e){this.type=RS,this.auth=xi(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{bm(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Am(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;ad(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(kS)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&ad(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Rm(AS+a).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}/**
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
 */class DS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class PS{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cd(this),this.idTokenSubscription=new cd(this),this.beforeStateQueue=new DS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=um,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Hs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Yo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Et(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(dn(e))})}async initializeRecaptchaConfig(){const e=await bm(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Am(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new NS(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ni("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dn(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await Hs.create(this,[dn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ne(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Sm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&sS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function xi(t){return Et(t)}class cd{constructor(e){this.auth=e,this.observer=null,this.addObserver=GT(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function OS(t,e){const n=Au(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Wo(i,e??{}))return r;sn(r,"already-initialized")}return n.initialize({options:e})}function xS(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(dn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function MS(t,e,n){const s=xi(t);ne(s._canInitEmulator,s,"emulator-config-failed"),ne(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=km(e),{host:o,port:a}=LS(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||$S()}function km(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function LS(t){const e=km(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:ld(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:ld(o)}}}function ld(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $S(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Nm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,n){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}/**
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
 */async function zs(t,e){return uS(t,"POST","/v1/accounts:signInWithIdp",dm(t,e))}/**
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
 */const FS="http://localhost";class Es extends Nm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Ru(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Es(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,zs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zs(e,n)}buildRequest(){const e={requestUri:FS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Di(n)}return e}}/**
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
 */class Ou{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Mi extends Ou{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class xn extends Mi{constructor(){super("facebook.com")}static credential(e){return Es._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";xn.PROVIDER_ID="facebook.com";/**
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
 */class un extends Mi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Es._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return un.credential(n,s)}catch{return null}}}un.GOOGLE_SIGN_IN_METHOD="google.com";un.PROVIDER_ID="google.com";/**
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
 */class Mn extends Mi{constructor(){super("github.com")}static credential(e){return Es._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.GITHUB_SIGN_IN_METHOD="github.com";Mn.PROVIDER_ID="github.com";/**
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
 */class Ln extends Mi{constructor(){super("twitter.com")}static credential(e,n){return Es._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Ln.credential(n,s)}catch{return null}}}Ln.TWITTER_SIGN_IN_METHOD="twitter.com";Ln.PROVIDER_ID="twitter.com";/**
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
 */class sr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await ms._fromIdTokenResponse(e,s,r),o=ud(s);return new sr({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=ud(s);return new sr({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function ud(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Jo extends Cn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Jo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Jo(e,n,s,r)}}function Dm(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Jo._fromErrorAndOperation(t,i,e,s):i})}async function US(t,e,n=!1){const s=await li(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return sr._forOperation(t,"link",s)}/**
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
 */async function BS(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await li(t,Dm(s,r,e,t),n);ne(i.idToken,s,"internal-error");const o=Du(i.idToken);ne(o,s,"internal-error");const{sub:a}=o;return ne(t.uid===a,s,"user-mismatch"),sr._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&sn(s,"user-mismatch"),i}}/**
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
 */async function VS(t,e,n=!1){const s="signIn",r=await Dm(t,s,e),i=await sr._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function jS(t,e,n,s){return Et(t).onIdTokenChanged(e,n,s)}function qS(t,e,n){return Et(t).beforeAuthStateChanged(e,n)}function HS(t,e,n,s){return Et(t).onAuthStateChanged(e,n,s)}function Pm(t){return Et(t).signOut()}const Xo="__sak";/**
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
 */class Om{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xo,"1"),this.storage.removeItem(Xo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function zS(){const t=ht();return Pu(t)||$a(t)}const KS=1e3,WS=10;class xm extends Om{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=zS()&&CS(),this.fallbackToPolling=Cm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);TS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,WS):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},KS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}xm.type="LOCAL";const GS=xm;/**
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
 */class Mm extends Om{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Mm.type="SESSION";const Lm=Mm;/**
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
 */function QS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Fa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Fa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await QS(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fa.receivers=[];/**
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
 */function xu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class YS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=xu("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Zt(){return window}function JS(t){Zt().location.href=t}/**
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
 */function $m(){return typeof Zt().WorkerGlobalScope<"u"&&typeof Zt().importScripts=="function"}async function XS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function eb(){return $m()?self:null}/**
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
 */const Fm="firebaseLocalStorageDb",tb=1,Zo="firebaseLocalStorage",Um="fbase_key";class Li{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ua(t,e){return t.transaction([Zo],e?"readwrite":"readonly").objectStore(Zo)}function nb(){const t=indexedDB.deleteDatabase(Fm);return new Li(t).toPromise()}function Cl(){const t=indexedDB.open(Fm,tb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Zo,{keyPath:Um})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Zo)?e(s):(s.close(),await nb(),e(await Cl()))})})}async function hd(t,e,n){const s=Ua(t,!0).put({[Um]:e,value:n});return new Li(s).toPromise()}async function sb(t,e){const n=Ua(t,!1).get(e),s=await new Li(n).toPromise();return s===void 0?null:s.value}function fd(t,e){const n=Ua(t,!0).delete(e);return new Li(n).toPromise()}const rb=800,ib=3;class Bm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>ib)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $m()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fa._getInstance(eb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await XS(),!this.activeServiceWorker)return;this.sender=new YS(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ZS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cl();return await hd(e,Xo,"1"),await fd(e,Xo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>hd(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>sb(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Ua(r,!1).getAll();return new Li(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bm.type="LOCAL";const ob=Bm;new Pi(3e4,6e4);/**
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
 */function Vm(t,e){return e?dn(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Mu extends Nm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ab(t){return VS(t.auth,new Mu(t),t.bypassAuthState)}function cb(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),BS(n,new Mu(t),t.bypassAuthState)}async function lb(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),US(n,new Mu(t),t.bypassAuthState)}/**
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
 */class jm{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ab;case"linkViaPopup":case"linkViaRedirect":return lb;case"reauthViaPopup":case"reauthViaRedirect":return cb;default:sn(this.auth,"internal-error")}}resolve(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ub=new Pi(2e3,1e4);async function hb(t,e,n){const s=xi(t);rS(t,e,Ou);const r=Vm(s,n);return new hs(s,"signInViaPopup",e,r).executeNotNull()}class hs extends jm{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,hs.currentPopupAction&&hs.currentPopupAction.cancel(),hs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){yn(this.filter.length===1,"Popup operations only handle one event");const e=xu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ub.get())};e()}}hs.currentPopupAction=null;/**
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
 */const fb="pendingRedirect",No=new Map;class db extends jm{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=No.get(this.auth._key());if(!e){try{const s=await pb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}No.set(this.auth._key(),e)}return this.bypassAuthState||No.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pb(t,e){const n=yb(e),s=mb(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function gb(t,e){No.set(t._key(),e)}function mb(t){return dn(t._redirectPersistence)}function yb(t){return ko(fb,t.config.apiKey,t.name)}async function vb(t,e,n=!1){const s=xi(t),r=Vm(s,e),o=await new db(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const _b=10*60*1e3;class wb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Eb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!qm(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Xt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_b&&this.cachedEventUids.clear(),this.cachedEventUids.has(dd(e))}saveEventToCache(e){this.cachedEventUids.add(dd(e)),this.lastProcessedEventTime=Date.now()}}function dd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Eb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qm(t);default:return!1}}/**
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
 */async function Ib(t,e={}){return Oi(t,"GET","/v1/projects",e)}/**
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
 */const Tb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Cb=/^https?/;async function Sb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ib(t);for(const n of e)try{if(bb(n))return}catch{}sn(t,"unauthorized-domain")}function bb(t){const e=Tl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Cb.test(n))return!1;if(Tb.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const Ab=new Pi(3e4,6e4);function pd(){const t=Zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Rb(t){return new Promise((e,n)=>{var s,r,i;function o(){pd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pd(),n(Xt(t,"network-request-failed"))},timeout:Ab.get()})}if(!((r=(s=Zt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Zt().gapi)===null||i===void 0)&&i.load)o();else{const a=bS("iframefcb");return Zt()[a]=()=>{gapi.load?o():n(Xt(t,"network-request-failed"))},Rm(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Do=null,e})}let Do=null;function kb(t){return Do=Do||Rb(t),Do}/**
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
 */const Nb=new Pi(5e3,15e3),Db="__/auth/iframe",Pb="emulator/auth/iframe",Ob={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Mb(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Nu(e,Pb):`https://${t.config.authDomain}/${Db}`,s={apiKey:e.apiKey,appName:t.name,v:yr},r=xb.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Di(s).slice(1)}`}async function Lb(t){const e=await kb(t),n=Zt().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:Mb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ob,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Xt(t,"network-request-failed"),a=Zt().setTimeout(()=>{i(o)},Nb.get());function c(){Zt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const $b={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Fb=500,Ub=600,Bb="_blank",Vb="http://localhost";class gd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jb(t,e,n,s=Fb,r=Ub){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},$b),{width:s.toString(),height:r.toString(),top:i,left:o}),l=ht().toLowerCase();n&&(a=_m(l)?Bb:n),vm(l)&&(e=e||Vb,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[p,y])=>`${f}${p}=${y},`,"");if(IS(l)&&a!=="_self")return qb(e||"",a),new gd(null);const h=window.open(e||"",a,u);ne(h,t,"popup-blocked");try{h.focus()}catch{}return new gd(h)}function qb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Hb="__/auth/handler",zb="emulator/auth/handler",Kb=encodeURIComponent("fac");async function md(t,e,n,s,r,i){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:yr,eventId:r};if(e instanceof Ou){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",WT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Mi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${Kb}=${encodeURIComponent(c)}`:"";return`${Wb(t)}?${Di(a).slice(1)}${l}`}function Wb({config:t}){return t.emulator?Nu(t,zb):`https://${t.authDomain}/${Hb}`}/**
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
 */const xc="webStorageSupport";class Gb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lm,this._completeRedirectFn=vb,this._overrideRedirectResult=gb}async _openPopup(e,n,s,r){var i;yn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await md(e,n,s,Tl(),r);return jb(e,o,xu())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await md(e,n,s,Tl(),r);return JS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(yn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Lb(e),s=new wb(e);return n.register("authEvent",r=>(ne(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xc,{type:xc},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[xc];o!==void 0&&n(!!o),sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Sb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Cm()||Pu()||$a()}}const Qb=Gb;var yd="@firebase/auth",vd="0.23.2";/**
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
 */class Yb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Jb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Xb(t){nr(new _s("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Sm(t)},l=new PS(s,r,i,c);return xS(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),nr(new _s("auth-internal",e=>{const n=xi(e.getProvider("auth").getImmediate());return(s=>new Yb(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Hn(yd,vd,Jb(t)),Hn(yd,vd,"esm2017")}/**
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
 */const Zb=5*60,eA=nm("authIdTokenMaxAge")||Zb;let _d=null;const tA=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>eA)return;const r=n==null?void 0:n.token;_d!==r&&(_d=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function ea(t=om()){const e=Au(t,"auth");if(e.isInitialized())return e.getImmediate();const n=OS(t,{popupRedirectResolver:Qb,persistence:[ob,GS,Lm]}),s=nm("authTokenSyncURL");if(s){const i=tA(s);qS(n,i,()=>i(n.currentUser)),jS(n,o=>i(o))}const r=em("auth");return r&&MS(n,`http://${r}`),n}Xb("Browser");const Lu=wI("user",{state:()=>({user:null}),getters:{userDisplayName(t){if(t.user)return t.user.displayName},userEmail(t){if(t.user)return t.user.email}},actions:{setUser(t){this.user=t}}});var nA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,$u=$u||{},Z=nA||self;function Ba(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function $i(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function sA(t){return Object.prototype.hasOwnProperty.call(t,Mc)&&t[Mc]||(t[Mc]=++rA)}var Mc="closure_uid_"+(1e9*Math.random()>>>0),rA=0;function iA(t,e,n){return t.call.apply(t.bind,arguments)}function oA(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function ct(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ct=iA:ct=oA,ct.apply(null,arguments)}function co(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ye(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Zn(){this.s=this.s,this.o=this.o}var aA=0;Zn.prototype.s=!1;Zn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),aA!=0)&&sA(this)};Zn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Hm=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Fu(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function wd(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Ba(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function lt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}lt.prototype.h=function(){this.defaultPrevented=!0};var cA=function(){if(!Z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Z.addEventListener("test",()=>{},e),Z.removeEventListener("test",()=>{},e)}catch{}return t}();function hi(t){return/^[\s\xa0]*$/.test(t)}function Va(){var t=Z.navigator;return t&&(t=t.userAgent)?t:""}function Wt(t){return Va().indexOf(t)!=-1}function Uu(t){return Uu[" "](t),t}Uu[" "]=function(){};function lA(t,e){var n=t2;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var uA=Wt("Opera"),rr=Wt("Trident")||Wt("MSIE"),zm=Wt("Edge"),Sl=zm||rr,Km=Wt("Gecko")&&!(Va().toLowerCase().indexOf("webkit")!=-1&&!Wt("Edge"))&&!(Wt("Trident")||Wt("MSIE"))&&!Wt("Edge"),hA=Va().toLowerCase().indexOf("webkit")!=-1&&!Wt("Edge");function Wm(){var t=Z.document;return t?t.documentMode:void 0}var bl;e:{var Lc="",$c=function(){var t=Va();if(Km)return/rv:([^\);]+)(\)|;)/.exec(t);if(zm)return/Edge\/([\d\.]+)/.exec(t);if(rr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(hA)return/WebKit\/(\S+)/.exec(t);if(uA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if($c&&(Lc=$c?$c[1]:""),rr){var Fc=Wm();if(Fc!=null&&Fc>parseFloat(Lc)){bl=String(Fc);break e}}bl=Lc}var Al;if(Z.document&&rr){var Ed=Wm();Al=Ed||parseInt(bl,10)||void 0}else Al=void 0;var fA=Al;function fi(t,e){if(lt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Km){e:{try{Uu(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:dA[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&fi.$.h.call(this)}}Ye(fi,lt);var dA={2:"touch",3:"pen",4:"mouse"};fi.prototype.h=function(){fi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Fi="closure_listenable_"+(1e6*Math.random()|0),pA=0;function gA(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++pA,this.fa=this.ia=!1}function ja(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Bu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function mA(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Gm(t){const e={};for(const n in t)e[n]=t[n];return e}const Id="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qm(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Id.length;i++)n=Id[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function qa(t){this.src=t,this.g={},this.h=0}qa.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=kl(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new gA(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function Rl(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Hm(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ja(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function kl(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var Vu="closure_lm_"+(1e6*Math.random()|0),Uc={};function Ym(t,e,n,s,r){if(s&&s.once)return Xm(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ym(t,e[i],n,s,r);return null}return n=Hu(n),t&&t[Fi]?t.O(e,n,$i(s)?!!s.capture:!!s,r):Jm(t,e,n,!1,s,r)}function Jm(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=$i(r)?!!r.capture:!!r,a=qu(t);if(a||(t[Vu]=a=new qa(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=yA(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)cA||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(ey(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function yA(){function t(n){return e.call(t.src,t.listener,n)}const e=vA;return t}function Xm(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Xm(t,e[i],n,s,r);return null}return n=Hu(n),t&&t[Fi]?t.P(e,n,$i(s)?!!s.capture:!!s,r):Jm(t,e,n,!0,s,r)}function Zm(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Zm(t,e[i],n,s,r);else s=$i(s)?!!s.capture:!!s,n=Hu(n),t&&t[Fi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=kl(i,n,s,r),-1<n&&(ja(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=qu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=kl(e,n,s,r)),(n=-1<t?e[t]:null)&&ju(n))}function ju(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Fi])Rl(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(ey(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=qu(e))?(Rl(n,t),n.h==0&&(n.src=null,e[Vu]=null)):ja(t)}}}function ey(t){return t in Uc?Uc[t]:Uc[t]="on"+t}function vA(t,e){if(t.fa)t=!0;else{e=new fi(e,this);var n=t.listener,s=t.la||t.src;t.ia&&ju(t),t=n.call(s,e)}return t}function qu(t){return t=t[Vu],t instanceof qa?t:null}var Bc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hu(t){return typeof t=="function"?t:(t[Bc]||(t[Bc]=function(e){return t.handleEvent(e)}),t[Bc])}function Qe(){Zn.call(this),this.i=new qa(this),this.S=this,this.J=null}Ye(Qe,Zn);Qe.prototype[Fi]=!0;Qe.prototype.removeEventListener=function(t,e,n,s){Zm(this,t,e,n,s)};function et(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new lt(e,t);else if(e instanceof lt)e.target=e.target||t;else{var r=e;e=new lt(s,t),Qm(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=lo(o,s,!0,e)&&r}if(o=e.g=t,r=lo(o,s,!0,e)&&r,r=lo(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=lo(o,s,!1,e)&&r}Qe.prototype.N=function(){if(Qe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ja(n[s]);delete t.g[e],t.h--}}this.J=null};Qe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Qe.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function lo(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Rl(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var zu=Z.JSON.stringify;class _A{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function wA(){var t=Ku;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class EA{constructor(){this.h=this.g=null}add(e,n){const s=ty.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var ty=new _A(()=>new IA,t=>t.reset());class IA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function TA(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function CA(t){Z.setTimeout(()=>{throw t},0)}let di,pi=!1,Ku=new EA,ny=()=>{const t=Z.Promise.resolve(void 0);di=()=>{t.then(SA)}};var SA=()=>{for(var t;t=wA();){try{t.h.call(t.g)}catch(n){CA(n)}var e=ty;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}pi=!1};function Ha(t,e){Qe.call(this),this.h=t||1,this.g=e||Z,this.j=ct(this.qb,this),this.l=Date.now()}Ye(Ha,Qe);M=Ha.prototype;M.ga=!1;M.T=null;M.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),et(this,"tick"),this.ga&&(Wu(this),this.start()))}};M.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Wu(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}M.N=function(){Ha.$.N.call(this),Wu(this),delete this.g};function Gu(t,e,n){if(typeof t=="function")n&&(t=ct(t,n));else if(t&&typeof t.handleEvent=="function")t=ct(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Z.setTimeout(t,e||0)}function sy(t){t.g=Gu(()=>{t.g=null,t.i&&(t.i=!1,sy(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class bA extends Zn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:sy(this)}N(){super.N(),this.g&&(Z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gi(t){Zn.call(this),this.h=t,this.g={}}Ye(gi,Zn);var Td=[];function ry(t,e,n,s){Array.isArray(n)||(n&&(Td[0]=n.toString()),n=Td);for(var r=0;r<n.length;r++){var i=Ym(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function iy(t){Bu(t.g,function(e,n){this.g.hasOwnProperty(n)&&ju(e)},t),t.g={}}gi.prototype.N=function(){gi.$.N.call(this),iy(this)};gi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function za(){this.g=!0}za.prototype.Ea=function(){this.g=!1};function AA(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function RA(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Fs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+NA(t,n)+(s?" "+s:"")})}function kA(t,e){t.info(function(){return"TIMEOUT: "+e})}za.prototype.info=function(){};function NA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return zu(n)}catch{return e}}var bs={},Cd=null;function Ka(){return Cd=Cd||new Qe}bs.Ta="serverreachability";function oy(t){lt.call(this,bs.Ta,t)}Ye(oy,lt);function mi(t){const e=Ka();et(e,new oy(e))}bs.STAT_EVENT="statevent";function ay(t,e){lt.call(this,bs.STAT_EVENT,t),this.stat=e}Ye(ay,lt);function pt(t){const e=Ka();et(e,new ay(e,t))}bs.Ua="timingevent";function cy(t,e){lt.call(this,bs.Ua,t),this.size=e}Ye(cy,lt);function Ui(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Z.setTimeout(function(){t()},e)}var Wa={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ly={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Qu(){}Qu.prototype.h=null;function Sd(t){return t.h||(t.h=t.i())}function uy(){}var Bi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Yu(){lt.call(this,"d")}Ye(Yu,lt);function Ju(){lt.call(this,"c")}Ye(Ju,lt);var Nl;function Ga(){}Ye(Ga,Qu);Ga.prototype.g=function(){return new XMLHttpRequest};Ga.prototype.i=function(){return{}};Nl=new Ga;function Vi(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new gi(this),this.P=DA,t=Sl?125:void 0,this.V=new Ha(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new hy}function hy(){this.i=null,this.g="",this.h=!1}var DA=45e3,Dl={},ta={};M=Vi.prototype;M.setTimeout=function(t){this.P=t};function Pl(t,e,n){t.L=1,t.v=Ya(vn(e)),t.s=n,t.S=!0,fy(t,null)}function fy(t,e){t.G=Date.now(),ji(t),t.A=vn(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),wy(n.i,"t",s),t.C=0,n=t.l.J,t.h=new hy,t.g=Vy(t.l,n?e:null,!t.s),0<t.O&&(t.M=new bA(ct(t.Pa,t,t.g),t.O)),ry(t.U,t.g,"readystatechange",t.nb),e=t.I?Gm(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),mi(),AA(t.j,t.u,t.A,t.m,t.W,t.s)}M.nb=function(t){t=t.target;const e=this.M;e&&Gt(t)==3?e.l():this.Pa(t)};M.Pa=function(t){try{if(t==this.g)e:{const u=Gt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Sl||this.g&&(this.h.h||this.g.ja()||kd(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?mi(3):mi(2)),Qa(this);var n=this.g.da();this.ca=n;t:if(dy(this)){var s=kd(this.g);t="";var r=s.length,i=Gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fs(this),zr(this);var o="";break t}this.h.i=new Z.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,RA(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!hi(a)){var l=a;break t}}l=null}if(n=l)Fs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ol(this,n);else{this.i=!1,this.o=3,pt(12),fs(this),zr(this);break e}}this.S?(py(this,u,o),Sl&&this.i&&u==3&&(ry(this.U,this.V,"tick",this.mb),this.V.start())):(Fs(this.j,this.m,o,null),Ol(this,o)),u==4&&fs(this),this.i&&!this.J&&(u==4?$y(this.l,this):(this.i=!1,ji(this)))}else XA(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,pt(12)):(this.o=0,pt(13)),fs(this),zr(this)}}}catch{}finally{}};function dy(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function py(t,e,n){let s=!0,r;for(;!t.J&&t.C<n.length;)if(r=PA(t,n),r==ta){e==4&&(t.o=4,pt(14),s=!1),Fs(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Dl){t.o=4,pt(15),Fs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Fs(t.j,t.m,r,null),Ol(t,r);dy(t)&&r!=ta&&r!=Dl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,pt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),sh(e),e.M=!0,pt(11))):(Fs(t.j,t.m,n,"[Invalid Chunked Response]"),fs(t),zr(t))}M.mb=function(){if(this.g){var t=Gt(this.g),e=this.g.ja();this.C<e.length&&(Qa(this),py(this,t,e),this.i&&t!=4&&ji(this))}};function PA(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?ta:(n=Number(e.substring(n,s)),isNaN(n)?Dl:(s+=1,s+n>e.length?ta:(e=e.slice(s,s+n),t.C=s+n,e)))}M.cancel=function(){this.J=!0,fs(this)};function ji(t){t.Y=Date.now()+t.P,gy(t,t.P)}function gy(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ui(ct(t.lb,t),e)}function Qa(t){t.B&&(Z.clearTimeout(t.B),t.B=null)}M.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(kA(this.j,this.A),this.L!=2&&(mi(),pt(17)),fs(this),this.o=2,zr(this)):gy(this,this.Y-t)};function zr(t){t.l.H==0||t.J||$y(t.l,t)}function fs(t){Qa(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Wu(t.V),iy(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ol(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||xl(n.i,t))){if(!t.K&&xl(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ra(n),Za(n);else break e;nh(n),pt(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ui(ct(n.ib,n),6e3));if(1>=Ty(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ds(n,11)}else if((t.K||n.g==t)&&ra(n),!hi(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.i;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Xu(i,i.h),i.h=null))}if(s.F){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.Da=v,Re(s.I,s.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=By(s,s.J?s.pa:null,s.Y),o.K){Cy(s.i,o);var a=o,c=s.L;c&&a.setTimeout(c),a.B&&(Qa(a),ji(a)),s.g=o}else My(s);0<n.j.length&&ec(n)}else l[0]!="stop"&&l[0]!="close"||ds(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ds(n,7):th(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}mi(4)}catch{}}function OA(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ba(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function xA(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ba(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function my(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ba(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=xA(t),s=OA(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var yy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function MA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function ys(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ys){this.h=t.h,na(this,t.j),this.s=t.s,this.g=t.g,sa(this,t.m),this.l=t.l;var e=t.i,n=new yi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),bd(this,n),this.o=t.o}else t&&(e=String(t).match(yy))?(this.h=!1,na(this,e[1]||"",!0),this.s=Pr(e[2]||""),this.g=Pr(e[3]||"",!0),sa(this,e[4]),this.l=Pr(e[5]||"",!0),bd(this,e[6]||"",!0),this.o=Pr(e[7]||"")):(this.h=!1,this.i=new yi(null,this.h))}ys.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Or(e,Ad,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Or(e,Ad,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Or(n,n.charAt(0)=="/"?FA:$A,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Or(n,BA)),t.join("")};function vn(t){return new ys(t)}function na(t,e,n){t.j=n?Pr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function sa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function bd(t,e,n){e instanceof yi?(t.i=e,VA(t.i,t.h)):(n||(e=Or(e,UA)),t.i=new yi(e,t.h))}function Re(t,e,n){t.i.set(e,n)}function Ya(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Pr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Or(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,LA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function LA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ad=/[#\/\?@]/g,$A=/[#\?:]/g,FA=/[#\?]/g,UA=/[#\?@]/g,BA=/#/g;function yi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function es(t){t.g||(t.g=new Map,t.h=0,t.i&&MA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=yi.prototype;M.add=function(t,e){es(this),this.i=null,t=vr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function vy(t,e){es(t),e=vr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function _y(t,e){return es(t),e=vr(t,e),t.g.has(e)}M.forEach=function(t,e){es(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};M.ta=function(){es(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};M.Z=function(t){es(this);let e=[];if(typeof t=="string")_y(this,t)&&(e=e.concat(this.g.get(vr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return es(this),this.i=null,t=vr(this,t),_y(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function wy(t,e,n){vy(t,e),0<n.length&&(t.i=null,t.g.set(vr(t,e),Fu(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function vr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function VA(t,e){e&&!t.j&&(es(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(vy(this,s),wy(this,r,n))},t)),t.j=e}var jA=class{constructor(t,e){this.g=t,this.map=e}};function Ey(t){this.l=t||qA,Z.PerformanceNavigationTiming?(t=Z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Z.g&&Z.g.Ka&&Z.g.Ka()&&Z.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var qA=10;function Iy(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ty(t){return t.h?1:t.g?t.g.size:0}function xl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Xu(t,e){t.g?t.g.add(e):t.h=e}function Cy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ey.prototype.cancel=function(){if(this.i=Sy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Sy(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Fu(t.i)}var HA=class{stringify(t){return Z.JSON.stringify(t,void 0)}parse(t){return Z.JSON.parse(t,void 0)}};function zA(){this.g=new HA}function KA(t,e,n){const s=n||"";try{my(t,function(r,i){let o=r;$i(r)&&(o=zu(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function WA(t,e){const n=new za;if(Z.Image){const s=new Image;s.onload=co(uo,n,s,"TestLoadImage: loaded",!0,e),s.onerror=co(uo,n,s,"TestLoadImage: error",!1,e),s.onabort=co(uo,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=co(uo,n,s,"TestLoadImage: timeout",!1,e),Z.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function uo(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function qi(t){this.l=t.fc||null,this.j=t.ob||!1}Ye(qi,Qu);qi.prototype.g=function(){return new Ja(this.l,this.j)};qi.prototype.i=function(t){return function(){return t}}({});function Ja(t,e){Qe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Zu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ye(Ja,Qe);var Zu=0;M=Ja.prototype;M.open=function(t,e){if(this.readyState!=Zu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,vi(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Z).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hi(this)),this.readyState=Zu};M.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,vi(this)),this.g&&(this.readyState=3,vi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;by(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function by(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}M.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Hi(this):vi(this),this.readyState==3&&by(this)}};M.Za=function(t){this.g&&(this.response=this.responseText=t,Hi(this))};M.Ya=function(t){this.g&&(this.response=t,Hi(this))};M.ka=function(){this.g&&Hi(this)};function Hi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,vi(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function vi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ja.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var GA=Z.JSON.parse;function Le(t){Qe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ay,this.L=this.M=!1}Ye(Le,Qe);var Ay="",QA=/^https?$/i,YA=["POST","PUT"];M=Le.prototype;M.Oa=function(t){this.M=t};M.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Nl.g(),this.C=this.u?Sd(this.u):Sd(Nl),this.g.onreadystatechange=ct(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Rd(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=Z.FormData&&t instanceof Z.FormData,!(0<=Hm(YA,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ny(this),0<this.B&&((this.L=JA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ct(this.ua,this)):this.A=Gu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Rd(this,i)}};function JA(t){return rr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.ua=function(){typeof $u<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,et(this,"timeout"),this.abort(8))};function Rd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ry(t),Xa(t)}function Ry(t){t.F||(t.F=!0,et(t,"complete"),et(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,et(this,"complete"),et(this,"abort"),Xa(this))};M.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Xa(this,!0)),Le.$.N.call(this)};M.La=function(){this.s||(this.G||this.v||this.l?ky(this):this.kb())};M.kb=function(){ky(this)};function ky(t){if(t.h&&typeof $u<"u"&&(!t.C[1]||Gt(t)!=4||t.da()!=2)){if(t.v&&Gt(t)==4)Gu(t.La,0,t);else if(et(t,"readystatechange"),Gt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var r=String(t.I).match(yy)[1]||null;!r&&Z.self&&Z.self.location&&(r=Z.self.location.protocol.slice(0,-1)),s=!QA.test(r?r.toLowerCase():"")}n=s}if(n)et(t,"complete"),et(t,"success");else{t.m=6;try{var i=2<Gt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Ry(t)}}finally{Xa(t)}}}}function Xa(t,e){if(t.g){Ny(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||et(t,"ready");try{n.onreadystatechange=s}catch{}}}function Ny(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Z.clearTimeout(t.A),t.A=null)}M.isActive=function(){return!!this.g};function Gt(t){return t.g?t.g.readyState:0}M.da=function(){try{return 2<Gt(this)?this.g.status:-1}catch{return-1}};M.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),GA(e)}};function kd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Ay:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function XA(t){const e={};t=(t.g&&2<=Gt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(hi(t[s]))continue;var n=TA(t[s]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[r]||[];e[r]=i,i.push(n)}mA(e,function(s){return s.join(", ")})}M.Ia=function(){return this.m};M.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Dy(t){let e="";return Bu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function eh(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Dy(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Re(t,e,n))}function Rr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Py(t){this.Ga=0,this.j=[],this.l=new za,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Rr("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Rr("baseRetryDelayMs",5e3,t),this.hb=Rr("retryDelaySeedMs",1e4,t),this.eb=Rr("forwardChannelMaxRetries",2,t),this.xa=Rr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Ey(t&&t.concurrentRequestLimit),this.Ja=new zA,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}M=Py.prototype;M.ra=8;M.H=1;function th(t){if(Oy(t),t.H==3){var e=t.W++,n=vn(t.I);if(Re(n,"SID",t.K),Re(n,"RID",e),Re(n,"TYPE","terminate"),zi(t,n),e=new Vi(t,t.l,e),e.L=2,e.v=Ya(vn(n)),n=!1,Z.navigator&&Z.navigator.sendBeacon)try{n=Z.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Z.Image&&(new Image().src=e.v,n=!0),n||(e.g=Vy(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ji(e)}Uy(t)}function Za(t){t.g&&(sh(t),t.g.cancel(),t.g=null)}function Oy(t){Za(t),t.u&&(Z.clearTimeout(t.u),t.u=null),ra(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Z.clearTimeout(t.m),t.m=null)}function ec(t){if(!Iy(t.i)&&!t.m){t.m=!0;var e=t.Na;di||ny(),pi||(di(),pi=!0),Ku.add(e,t),t.C=0}}function ZA(t,e){return Ty(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ui(ct(t.Na,t,e),Fy(t,t.C)),t.C++,!0)}M.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Vi(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Gm(i),Qm(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=xy(this,r,e),n=vn(this.I),Re(n,"RID",t),Re(n,"CVER",22),this.F&&Re(n,"X-HTTP-Session-Id",this.F),zi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Dy(i)))+"&"+e:this.o&&eh(n,this.o,i)),Xu(this.i,r),this.bb&&Re(n,"TYPE","init"),this.P?(Re(n,"$req",e),Re(n,"SID","null"),r.aa=!0,Pl(r,n,null)):Pl(r,n,e),this.H=2}}else this.H==3&&(t?Nd(this,t):this.j.length==0||Iy(this.i)||Nd(this))};function Nd(t,e){var n;e?n=e.m:n=t.W++;const s=vn(t.I);Re(s,"SID",t.K),Re(s,"RID",n),Re(s,"AID",t.V),zi(t,s),t.o&&t.s&&eh(s,t.o,t.s),n=new Vi(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=xy(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Xu(t.i,n),Pl(n,s,e)}function zi(t,e){t.na&&Bu(t.na,function(n,s){Re(e,s,n)}),t.h&&my({},function(n,s){Re(e,s,n)})}function xy(t,e,n){n=Math.min(t.j.length,n);var s=t.h?ct(t.h.Va,t.h,t):null;e:{var r=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].g;const u=r[c].map;if(l-=i,0>l)i=Math.max(0,r[c].g-100),a=!1;else try{KA(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function My(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;di||ny(),pi||(di(),pi=!0),Ku.add(e,t),t.A=0}}function nh(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ui(ct(t.Ma,t),Fy(t,t.A)),t.A++,!0)}M.Ma=function(){if(this.u=null,Ly(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ui(ct(this.jb,this),t)}};M.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,pt(10),Za(this),Ly(this))};function sh(t){t.B!=null&&(Z.clearTimeout(t.B),t.B=null)}function Ly(t){t.g=new Vi(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=vn(t.wa);Re(e,"RID","rpc"),Re(e,"SID",t.K),Re(e,"AID",t.V),Re(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Re(e,"TO",t.qa),Re(e,"TYPE","xmlhttp"),zi(t,e),t.o&&t.s&&eh(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Ya(vn(e)),n.s=null,n.S=!0,fy(n,t)}M.ib=function(){this.v!=null&&(this.v=null,Za(this),nh(this),pt(19))};function ra(t){t.v!=null&&(Z.clearTimeout(t.v),t.v=null)}function $y(t,e){var n=null;if(t.g==e){ra(t),sh(t),t.g=null;var s=2}else if(xl(t.i,e))n=e.F,Cy(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;s=Ka(),et(s,new cy(s,n)),ec(t)}else My(t);else if(r=e.o,r==3||r==0&&0<e.ca||!(s==1&&ZA(t,e)||s==2&&nh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:ds(t,5);break;case 4:ds(t,10);break;case 3:ds(t,6);break;default:ds(t,2)}}}function Fy(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ds(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=ct(t.pb,t);n||(n=new ys("//www.google.com/images/cleardot.gif"),Z.location&&Z.location.protocol=="http"||na(n,"https"),Ya(n)),WA(n.toString(),s)}else pt(2);t.H=0,t.h&&t.h.za(e),Uy(t),Oy(t)}M.pb=function(t){t?(this.l.info("Successfully pinged google.com"),pt(2)):(this.l.info("Failed to ping google.com"),pt(1))};function Uy(t){if(t.H=0,t.ma=[],t.h){const e=Sy(t.i);(e.length!=0||t.j.length!=0)&&(wd(t.ma,e),wd(t.ma,t.j),t.i.i.length=0,Fu(t.j),t.j.length=0),t.h.ya()}}function By(t,e,n){var s=n instanceof ys?vn(n):new ys(n);if(s.g!="")e&&(s.g=e+"."+s.g),sa(s,s.m);else{var r=Z.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new ys(null);s&&na(i,s),e&&(i.g=e),r&&sa(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&Re(s,n,e),Re(s,"VER",t.ra),zi(t,s),s}function Vy(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Le(new qi({ob:!0})):new Le(t.va),e.Oa(t.J),e}M.isActive=function(){return!!this.h&&this.h.isActive(this)};function jy(){}M=jy.prototype;M.Ba=function(){};M.Aa=function(){};M.za=function(){};M.ya=function(){};M.isActive=function(){return!0};M.Va=function(){};function ia(){if(rr&&!(10<=Number(fA)))throw Error("Environmental error: no available transport.")}ia.prototype.g=function(t,e){return new St(t,e)};function St(t,e){Qe.call(this),this.g=new Py(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!hi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!hi(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new _r(this)}Ye(St,Qe);St.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;pt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=By(t,null,t.Y),ec(t)};St.prototype.close=function(){th(this.g)};St.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=zu(t),t=n);e.j.push(new jA(e.fb++,t)),e.H==3&&ec(e)};St.prototype.N=function(){this.g.h=null,delete this.j,th(this.g),delete this.g,St.$.N.call(this)};function qy(t){Yu.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ye(qy,Yu);function Hy(){Ju.call(this),this.status=1}Ye(Hy,Ju);function _r(t){this.g=t}Ye(_r,jy);_r.prototype.Ba=function(){et(this.g,"a")};_r.prototype.Aa=function(t){et(this.g,new qy(t))};_r.prototype.za=function(t){et(this.g,new Hy)};_r.prototype.ya=function(){et(this.g,"b")};function e2(){this.blockSize=-1}function Bt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ye(Bt,e2);Bt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Vc(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}Bt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)Vc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){Vc(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){Vc(this,s),r=0;break}}this.h=r,this.i+=e};Bt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function Te(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var t2={};function rh(t){return-128<=t&&128>t?lA(t,function(e){return new Te([e|0],0>e?-1:0)}):new Te([t|0],0>t?-1:0)}function Qt(t){if(isNaN(t)||!isFinite(t))return Ks;if(0>t)return Ze(Qt(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=Ml;return new Te(e,0)}function zy(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ze(zy(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Qt(Math.pow(e,8)),s=Ks,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=Qt(Math.pow(e,i)),s=s.R(i).add(Qt(o))):(s=s.R(n),s=s.add(Qt(o)))}return s}var Ml=4294967296,Ks=rh(0),Ll=rh(1),Dd=rh(16777216);M=Te.prototype;M.ea=function(){if(At(this))return-Ze(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:Ml+s)*e,e*=Ml}return t};M.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(pn(this))return"0";if(At(this))return"-"+Ze(this).toString(t);for(var e=Qt(Math.pow(t,6)),n=this,s="";;){var r=aa(n,e).g;n=oa(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,pn(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};M.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function pn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function At(t){return t.h==-1}M.X=function(t){return t=oa(this,t),At(t)?-1:pn(t)?0:1};function Ze(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new Te(n,~t.h).add(Ll)}M.abs=function(){return At(this)?Ze(this):this};M.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new Te(n,n[n.length-1]&-2147483648?-1:0)};function oa(t,e){return t.add(Ze(e))}M.R=function(t){if(pn(this)||pn(t))return Ks;if(At(this))return At(t)?Ze(this).R(Ze(t)):Ze(Ze(this).R(t));if(At(t))return Ze(this.R(Ze(t)));if(0>this.X(Dd)&&0>t.X(Dd))return Qt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*s+2*r]+=o*c,ho(n,2*s+2*r),n[2*s+2*r+1]+=i*c,ho(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,ho(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,ho(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new Te(n,0)};function ho(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function kr(t,e){this.g=t,this.h=e}function aa(t,e){if(pn(e))throw Error("division by zero");if(pn(t))return new kr(Ks,Ks);if(At(t))return e=aa(Ze(t),e),new kr(Ze(e.g),Ze(e.h));if(At(e))return e=aa(t,Ze(e)),new kr(Ze(e.g),e.h);if(30<t.g.length){if(At(t)||At(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ll,s=e;0>=s.X(t);)n=Pd(n),s=Pd(s);var r=xs(n,1),i=xs(s,1);for(s=xs(s,2),n=xs(n,2);!pn(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=xs(s,1),n=xs(n,1)}return e=oa(t,r.R(e)),new kr(r,e)}for(r=Ks;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=Qt(n),o=i.R(e);At(o)||0<o.X(t);)n-=s,i=Qt(n),o=i.R(e);pn(i)&&(i=Ll),r=r.add(i),t=oa(t,o)}return new kr(r,t)}M.gb=function(t){return aa(this,t).h};M.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new Te(n,this.h&t.h)};M.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new Te(n,this.h|t.h)};M.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new Te(n,this.h^t.h)};function Pd(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new Te(n,t.h)}function xs(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Te(r,t.h)}ia.prototype.createWebChannel=ia.prototype.g;St.prototype.send=St.prototype.u;St.prototype.open=St.prototype.m;St.prototype.close=St.prototype.close;Wa.NO_ERROR=0;Wa.TIMEOUT=8;Wa.HTTP_ERROR=6;ly.COMPLETE="complete";uy.EventType=Bi;Bi.OPEN="a";Bi.CLOSE="b";Bi.ERROR="c";Bi.MESSAGE="d";Qe.prototype.listen=Qe.prototype.O;Le.prototype.listenOnce=Le.prototype.P;Le.prototype.getLastError=Le.prototype.Sa;Le.prototype.getLastErrorCode=Le.prototype.Ia;Le.prototype.getStatus=Le.prototype.da;Le.prototype.getResponseJson=Le.prototype.Wa;Le.prototype.getResponseText=Le.prototype.ja;Le.prototype.send=Le.prototype.ha;Le.prototype.setWithCredentials=Le.prototype.Oa;Bt.prototype.digest=Bt.prototype.l;Bt.prototype.reset=Bt.prototype.reset;Bt.prototype.update=Bt.prototype.j;Te.prototype.add=Te.prototype.add;Te.prototype.multiply=Te.prototype.R;Te.prototype.modulo=Te.prototype.gb;Te.prototype.compare=Te.prototype.X;Te.prototype.toNumber=Te.prototype.ea;Te.prototype.toString=Te.prototype.toString;Te.prototype.getBits=Te.prototype.D;Te.fromNumber=Qt;Te.fromString=zy;var n2=function(){return new ia},s2=function(){return Ka()},jc=Wa,r2=ly,i2=bs,Od={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},o2=qi,fo=uy,a2=Le,c2=Bt,Ws=Te;const xd="@firebase/firestore";/**
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
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
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
 */let wr="9.23.0";/**
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
 */const Is=new Su("@firebase/firestore");function Md(){return Is.logLevel}function q(t,...e){if(Is.logLevel<=pe.DEBUG){const n=e.map(ih);Is.debug(`Firestore (${wr}): ${t}`,...n)}}function _n(t,...e){if(Is.logLevel<=pe.ERROR){const n=e.map(ih);Is.error(`Firestore (${wr}): ${t}`,...n)}}function ir(t,...e){if(Is.logLevel<=pe.WARN){const n=e.map(ih);Is.warn(`Firestore (${wr}): ${t}`,...n)}}function ih(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function X(t="Unexpected state"){const e=`FIRESTORE (${wr}) INTERNAL ASSERTION FAILED: `+t;throw _n(e),new Error(e)}function Pe(t,e){t||X()}function re(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class zn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Ky{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class l2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class u2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class h2{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new zn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new zn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new zn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Pe(typeof s.accessToken=="string"),new Ky(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string"),new rt(e)}}class f2{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class d2{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new f2(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class p2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class g2{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Pe(typeof n.token=="string"),this.T=n.token,new p2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function m2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Wy{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=m2(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function me(t,e){return t<e?-1:t>e?1:0}function or(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class ze{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ze.fromMillis(Date.now())}static fromDate(e){return ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ze(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new ze(0,0))}static max(){return new te(new ze(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class _i{constructor(e,n,s){n===void 0?n=0:n>e.length&&X(),s===void 0?s=e.length-n:s>e.length-n&&X(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return _i.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _i?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ke extends _i{construct(e,n,s){return new ke(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new B(I.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ke(n)}static emptyPath(){return new ke([])}}const y2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends _i{construct(e,n,s){return new at(e,n,s)}static isValidIdentifier(e){return y2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new B(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new B(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new B(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new B(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(ke.fromString(e))}static fromName(e){return new K(ke.fromString(e).popFirst(5))}static empty(){return new K(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new ke(e.slice()))}}function v2(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=te.fromTimestamp(s===1e9?new ze(n+1,0):new ze(n,s));return new Qn(r,K.empty(),e)}function _2(t){return new Qn(t.readTime,t.key,-1)}class Qn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Qn(te.min(),K.empty(),-1)}static max(){return new Qn(te.max(),K.empty(),-1)}}function w2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
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
 */const E2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class I2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ki(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==E2)throw t;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,s)=>{n(e)})}static reject(e){return new R((n,s)=>{s(e)})}static waitFor(e){return new R((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=R.resolve(!1);for(const s of e)n=n.next(r=>r?R.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new R((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new R((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function Wi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}oh.ct=-1;function tc(t){return t==null}function ca(t){return t===0&&1/t==-1/0}function T2(t){return typeof t=="number"&&Number.isInteger(t)&&!ca(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ld(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Er(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Gy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class xe{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new po(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new po(this.root,e,this.comparator,!1)}getReverseIterator(){return new po(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new po(this.root,e,this.comparator,!0)}}class po{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Xe.RED,this.left=r??Xe.EMPTY,this.right=i??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Xe(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Xe.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Xe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ut{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new $d(this.data.getIterator())}getIteratorFrom(e){return new $d(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class $d{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Mt{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new Mt([])}unionWith(e){let n=new ut(at.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return or(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Qy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Qy("Invalid base64 string: "+r):r}}(e);return new ft(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const C2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yn(t){if(Pe(!!t),typeof t=="string"){let e=0;const n=C2.exec(t);if(Pe(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ts(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
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
 */function ah(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ch(t){const e=t.mapValue.fields.__previous_value__;return ah(e)?ch(e):e}function wi(t){const e=Yn(t.mapValue.fields.__local_write_time__.timestampValue);return new ze(e.seconds,e.nanos)}/**
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
 */class S2{constructor(e,n,s,r,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Ei{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ei("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ei&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const go={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Cs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ah(t)?4:b2(t)?9007199254740991:10:X()}function rn(t,e){if(t===e)return!0;const n=Cs(t);if(n!==Cs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return wi(t).isEqual(wi(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Yn(s.timestampValue),o=Yn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Ts(s.bytesValue).isEqual(Ts(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Ve(s.geoPointValue.latitude)===Ve(r.geoPointValue.latitude)&&Ve(s.geoPointValue.longitude)===Ve(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Ve(s.integerValue)===Ve(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Ve(s.doubleValue),o=Ve(r.doubleValue);return i===o?ca(i)===ca(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return or(t.arrayValue.values||[],e.arrayValue.values||[],rn);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Ld(i)!==Ld(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!rn(i[a],o[a])))return!1;return!0}(t,e);default:return X()}}function Ii(t,e){return(t.values||[]).find(n=>rn(n,e))!==void 0}function ar(t,e){if(t===e)return 0;const n=Cs(t),s=Cs(e);if(n!==s)return me(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Ve(r.integerValue||r.doubleValue),a=Ve(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Fd(t.timestampValue,e.timestampValue);case 4:return Fd(wi(t),wi(e));case 5:return me(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Ts(r),a=Ts(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=me(o[c],a[c]);if(l!==0)return l}return me(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=me(Ve(r.latitude),Ve(i.latitude));return o!==0?o:me(Ve(r.longitude),Ve(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=ar(o[c],a[c]);if(l)return l}return me(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===go.mapValue&&i===go.mapValue)return 0;if(r===go.mapValue)return 1;if(i===go.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=me(a[u],l[u]);if(h!==0)return h;const f=ar(o[a[u]],c[l[u]]);if(f!==0)return f}return me(a.length,l.length)}(t.mapValue,e.mapValue);default:throw X()}}function Fd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=Yn(t),s=Yn(e),r=me(n.seconds,s.seconds);return r!==0?r:me(n.nanos,s.nanos)}function cr(t){return $l(t)}function $l(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Yn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ts(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,K.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=$l(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${$l(s.fields[a])}`;return i+"}"}(t.mapValue):X();var e,n}function Ud(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Fl(t){return!!t&&"integerValue"in t}function lh(t){return!!t&&"arrayValue"in t}function Bd(t){return!!t&&"nullValue"in t}function Vd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Po(t){return!!t&&"mapValue"in t}function Kr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Er(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Kr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Kr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function b2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Po(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Kr(n)}setAll(e){let n=at.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Kr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Po(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Po(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Er(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Rt(Kr(this.value))}}function Yy(t){const e=[];return Er(t.fields,(n,s)=>{const r=new at([n]);if(Po(s)){const i=Yy(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Mt(e)}/**
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
 */class it{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new it(e,0,te.min(),te.min(),te.min(),Rt.empty(),0)}static newFoundDocument(e,n,s,r){return new it(e,1,n,te.min(),s,r,0)}static newNoDocument(e,n){return new it(e,2,n,te.min(),te.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new it(e,3,n,te.min(),te.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof it&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class la{constructor(e,n){this.position=e,this.inclusive=n}}function jd(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=K.comparator(K.fromName(o.referenceValue),n.key):s=ar(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function qd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!rn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Gs{constructor(e,n="asc"){this.field=e,this.dir=n}}function A2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Jy{}class je extends Jy{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new k2(e,n,s):n==="array-contains"?new P2(e,s):n==="in"?new O2(e,s):n==="not-in"?new x2(e,s):n==="array-contains-any"?new M2(e,s):new je(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new N2(e,s):new D2(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ar(n,this.value)):n!==null&&Cs(this.value)===Cs(n)&&this.matchesComparison(ar(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Vt extends Jy{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Vt(e,n)}matches(e){return Xy(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Xy(t){return t.op==="and"}function Zy(t){return R2(t)&&Xy(t)}function R2(t){for(const e of t.filters)if(e instanceof Vt)return!1;return!0}function Ul(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+cr(t.value);if(Zy(t))return t.filters.map(e=>Ul(e)).join(",");{const e=t.filters.map(n=>Ul(n)).join(",");return`${t.op}(${e})`}}function ev(t,e){return t instanceof je?function(n,s){return s instanceof je&&n.op===s.op&&n.field.isEqual(s.field)&&rn(n.value,s.value)}(t,e):t instanceof Vt?function(n,s){return s instanceof Vt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&ev(i,s.filters[o]),!0):!1}(t,e):void X()}function tv(t){return t instanceof je?function(e){return`${e.field.canonicalString()} ${e.op} ${cr(e.value)}`}(t):t instanceof Vt?function(e){return e.op.toString()+" {"+e.getFilters().map(tv).join(" ,")+"}"}(t):"Filter"}class k2 extends je{constructor(e,n,s){super(e,n,s),this.key=K.fromName(s.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class N2 extends je{constructor(e,n){super(e,"in",n),this.keys=nv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class D2 extends je{constructor(e,n){super(e,"not-in",n),this.keys=nv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function nv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>K.fromName(s.referenceValue))}class P2 extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return lh(n)&&Ii(n.arrayValue,this.value)}}class O2 extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ii(this.value.arrayValue,n)}}class x2 extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ii(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ii(this.value.arrayValue,n)}}class M2 extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!lh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ii(this.value.arrayValue,s))}}/**
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
 */class L2{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function Hd(t,e=null,n=[],s=[],r=null,i=null,o=null){return new L2(t,e,n,s,r,i,o)}function uh(t){const e=re(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Ul(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),tc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>cr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>cr(s)).join(",")),e.dt=n}return e.dt}function hh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!A2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ev(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!qd(t.startAt,e.startAt)&&qd(t.endAt,e.endAt)}function Bl(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ir{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function $2(t,e,n,s,r,i,o,a){return new Ir(t,e,n,s,r,i,o,a)}function sv(t){return new Ir(t)}function zd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function fh(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function nc(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function rv(t){return t.collectionGroup!==null}function Qs(t){const e=re(t);if(e.wt===null){e.wt=[];const n=nc(e),s=fh(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new Gs(n)),e.wt.push(new Gs(at.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Gs(at.keyField(),i))}}}return e.wt}function wn(t){const e=re(t);if(!e._t)if(e.limitType==="F")e._t=Hd(e.path,e.collectionGroup,Qs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Qs(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Gs(i.field,o))}const s=e.endAt?new la(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new la(e.startAt.position,e.startAt.inclusive):null;e._t=Hd(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function Vl(t,e){e.getFirstInequalityField(),nc(t);const n=t.filters.concat([e]);return new Ir(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ua(t,e,n){return new Ir(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function sc(t,e){return hh(wn(t),wn(e))&&t.limitType===e.limitType}function iv(t){return`${uh(wn(t))}|lt:${t.limitType}`}function jl(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>tv(s)).join(", ")}]`),tc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>cr(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>cr(s)).join(",")),`Target(${n})`}(wn(t))}; limitType=${t.limitType})`}function rc(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):K.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Qs(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=jd(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Qs(n),s)||n.endAt&&!function(r,i,o){const a=jd(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Qs(n),s))}(t,e)}function F2(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ov(t){return(e,n)=>{let s=!1;for(const r of Qs(t)){const i=U2(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function U2(t,e,n){const s=t.field.isKeyField()?K.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?ar(a,c):X()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return X()}}/**
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
 */class Tr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Er(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Gy(this.inner)}size(){return this.innerSize}}/**
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
 */const B2=new xe(K.comparator);function En(){return B2}const av=new xe(K.comparator);function xr(...t){let e=av;for(const n of t)e=e.insert(n.key,n);return e}function cv(t){let e=av;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ps(){return Wr()}function lv(){return Wr()}function Wr(){return new Tr(t=>t.toString(),(t,e)=>t.isEqual(e))}const V2=new xe(K.comparator),j2=new ut(K.comparator);function ue(...t){let e=j2;for(const n of t)e=e.add(n);return e}const q2=new ut(me);function H2(){return q2}/**
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
 */function uv(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ca(e)?"-0":e}}function hv(t){return{integerValue:""+t}}function z2(t,e){return T2(e)?hv(e):uv(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(){this._=void 0}}function K2(t,e,n){return t instanceof ha?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&ah(r)&&(r=ch(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Ti?dv(t,e):t instanceof Ci?pv(t,e):function(s,r){const i=fv(s,r),o=Kd(i)+Kd(s.gt);return Fl(i)&&Fl(s.gt)?hv(o):uv(s.serializer,o)}(t,e)}function W2(t,e,n){return t instanceof Ti?dv(t,e):t instanceof Ci?pv(t,e):n}function fv(t,e){return t instanceof fa?Fl(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class ha extends ic{}class Ti extends ic{constructor(e){super(),this.elements=e}}function dv(t,e){const n=gv(e);for(const s of t.elements)n.some(r=>rn(r,s))||n.push(s);return{arrayValue:{values:n}}}class Ci extends ic{constructor(e){super(),this.elements=e}}function pv(t,e){let n=gv(e);for(const s of t.elements)n=n.filter(r=>!rn(r,s));return{arrayValue:{values:n}}}class fa extends ic{constructor(e,n){super(),this.serializer=e,this.gt=n}}function Kd(t){return Ve(t.integerValue||t.doubleValue)}function gv(t){return lh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function G2(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Ti&&s instanceof Ti||n instanceof Ci&&s instanceof Ci?or(n.elements,s.elements,rn):n instanceof fa&&s instanceof fa?rn(n.gt,s.gt):n instanceof ha&&s instanceof ha}(t.transform,e.transform)}class Q2{constructor(e,n){this.version=e,this.transformResults=n}}class Ft{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ft}static exists(e){return new Ft(void 0,e)}static updateTime(e){return new Ft(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Oo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class oc{}function mv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new dh(t.key,Ft.none()):new Gi(t.key,t.data,Ft.none());{const n=t.data,s=Rt.empty();let r=new ut(at.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new As(t.key,s,new Mt(r.toArray()),Ft.none())}}function Y2(t,e,n){t instanceof Gi?function(s,r,i){const o=s.value.clone(),a=Gd(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof As?function(s,r,i){if(!Oo(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Gd(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(yv(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Gr(t,e,n,s){return t instanceof Gi?function(r,i,o,a){if(!Oo(r.precondition,i))return o;const c=r.value.clone(),l=Qd(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof As?function(r,i,o,a){if(!Oo(r.precondition,i))return o;const c=Qd(r.fieldTransforms,a,i),l=i.data;return l.setAll(yv(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return Oo(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function J2(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=fv(s.transform,r||null);i!=null&&(n===null&&(n=Rt.empty()),n.set(s.field,i))}return n||null}function Wd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&or(n,s,(r,i)=>G2(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Gi extends oc{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class As extends oc{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function yv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Gd(t,e,n){const s=new Map;Pe(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,W2(o,a,n[r]))}return s}function Qd(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,K2(i,o,e))}return s}class dh extends oc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class X2 extends oc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Z2{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Y2(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Gr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Gr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=lv();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=mv(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(te.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&or(this.mutations,e.mutations,(n,s)=>Wd(n,s))&&or(this.baseMutations,e.baseMutations,(n,s)=>Wd(n,s))}}class ph{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Pe(e.mutations.length===s.length);let r=V2;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new ph(e,n,s,r)}}/**
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
 */class eR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class tR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Be,fe;function nR(t){switch(t){default:return X();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function vv(t){if(t===void 0)return _n("GRPC error has no .code"),I.UNKNOWN;switch(t){case Be.OK:return I.OK;case Be.CANCELLED:return I.CANCELLED;case Be.UNKNOWN:return I.UNKNOWN;case Be.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case Be.INTERNAL:return I.INTERNAL;case Be.UNAVAILABLE:return I.UNAVAILABLE;case Be.UNAUTHENTICATED:return I.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case Be.NOT_FOUND:return I.NOT_FOUND;case Be.ALREADY_EXISTS:return I.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return I.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case Be.ABORTED:return I.ABORTED;case Be.OUT_OF_RANGE:return I.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return I.UNIMPLEMENTED;case Be.DATA_LOSS:return I.DATA_LOSS;default:return X()}}(fe=Be||(Be={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class gh{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return mo}static getOrCreateInstance(){return mo===null&&(mo=new gh),mo}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let mo=null;/**
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
 */function sR(){return new TextEncoder}/**
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
 */const rR=new Ws([4294967295,4294967295],0);function Yd(t){const e=sR().encode(t),n=new c2;return n.update(e),new Uint8Array(n.digest())}function Jd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ws([n,s],0),new Ws([r,i],0)]}class mh{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Mr(`Invalid padding: ${n}`);if(s<0)throw new Mr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Mr(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Mr(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Ws.fromNumber(this.It)}Et(e,n,s){let r=e.add(n.multiply(Ws.fromNumber(s)));return r.compare(rR)===1&&(r=new Ws([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=Yd(e),[s,r]=Jd(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);if(!this.At(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new mh(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=Yd(e),[s,r]=Jd(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Mr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ac{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Qi.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ac(te.min(),r,new xe(me),En(),ue())}}class Qi{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Qi(s,n,ue(),ue(),ue())}}/**
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
 */class xo{constructor(e,n,s,r){this.Pt=e,this.removedTargetIds=n,this.key=s,this.bt=r}}class _v{constructor(e,n){this.targetId=e,this.Vt=n}}class wv{constructor(e,n,s=ft.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Xd{constructor(){this.St=0,this.Dt=ep(),this.Ct=ft.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=ue(),n=ue(),s=ue();return this.Dt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:X()}}),new Qi(this.Ct,this.xt,e,n,s)}Ft(){this.Nt=!1,this.Dt=ep()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class iR{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=En(),this.zt=Zd(),this.Wt=new xe(me)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const s=this.Zt(n);switch(e.state){case 0:this.te(n)&&s.$t(e.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(e.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((s,r)=>{this.te(r)&&n(r)})}ne(e){var n;const s=e.targetId,r=e.Vt.count,i=this.se(s);if(i){const o=i.target;if(Bl(o))if(r===0){const a=new K(o.path);this.Yt(s,a,it.newNoDocument(a,te.min()))}else Pe(r===1);else{const a=this.ie(s);if(a!==r){const c=this.re(e,a);if(c!==0){this.ee(s);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,l)}(n=gh.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,u,h){var f,p,y,v,C,k;const S={localCacheCount:u,existenceFilterCount:h.count},L=h.unchangedNames;return L&&(S.bloomFilter={applied:l===0,hashCount:(f=L==null?void 0:L.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(v=(y=(p=L==null?void 0:L.bits)===null||p===void 0?void 0:p.bitmap)===null||y===void 0?void 0:y.length)!==null&&v!==void 0?v:0,padding:(k=(C=L==null?void 0:L.bits)===null||C===void 0?void 0:C.padding)!==null&&k!==void 0?k:0}),S}(c,a,e.Vt))}}}}re(e,n){const{unchangedNames:s,count:r}=e.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let c,l;try{c=Ts(i).toUint8Array()}catch(u){if(u instanceof Qy)return ir("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new mh(c,o,a)}catch(u){return ir(u instanceof Mr?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.It===0?1:r!==n-this.oe(e.targetId,l)?2:0}oe(e,n){const s=this.Gt.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.vt(a)||(this.Yt(e,i,null),r++)}),r}ce(e){const n=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&Bl(a.target)){const c=new K(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,it.newNoDocument(c,e))}i.Mt&&(n.set(o,i.Ot()),i.Ft())}});let s=ue();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.se(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(e));const r=new ac(e,n,this.Wt,this.jt,s);return this.jt=En(),this.zt=Zd(),this.Wt=new xe(me),r}Jt(e,n){if(!this.te(e))return;const s=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,s){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,n)?r.Bt(n,1):r.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new Xd,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new ut(me),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||q("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Xd),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function Zd(){return new xe(K.comparator)}function ep(){return new xe(K.comparator)}const oR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),aR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),cR=(()=>({and:"AND",or:"OR"}))();class lR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ql(t,e){return t.useProto3Json||tc(e)?e:{value:e}}function da(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ev(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function uR(t,e){return da(t,e.toTimestamp())}function en(t){return Pe(!!t),te.fromTimestamp(function(e){const n=Yn(e);return new ze(n.seconds,n.nanos)}(t))}function yh(t,e){return function(n){return new ke(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Iv(t){const e=ke.fromString(t);return Pe(bv(e)),e}function Hl(t,e){return yh(t.databaseId,e.path)}function qc(t,e){const n=Iv(e);if(n.get(1)!==t.databaseId.projectId)throw new B(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(Tv(n))}function zl(t,e){return yh(t.databaseId,e)}function hR(t){const e=Iv(t);return e.length===4?ke.emptyPath():Tv(e)}function Kl(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Tv(t){return Pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function tp(t,e,n){return{name:Hl(t,e),fields:n.value.mapValue.fields}}function fR(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(Pe(l===void 0||typeof l=="string"),ft.fromBase64String(l||"")):(Pe(l===void 0||l instanceof Uint8Array),ft.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?I.UNKNOWN:vv(c.code);return new B(l,c.message||"")}(o);n=new wv(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=qc(t,s.document.name),i=en(s.document.updateTime),o=s.document.createTime?en(s.document.createTime):te.min(),a=new Rt({mapValue:{fields:s.document.fields}}),c=it.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new xo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=qc(t,s.document),i=s.readTime?en(s.readTime):te.min(),o=it.newNoDocument(r,i),a=s.removedTargetIds||[];n=new xo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=qc(t,s.document),i=s.removedTargetIds||[];n=new xo([],i,r,null)}else{if(!("filter"in e))return X();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new tR(r,i),a=s.targetId;n=new _v(a,o)}}return n}function dR(t,e){let n;if(e instanceof Gi)n={update:tp(t,e.key,e.value)};else if(e instanceof dh)n={delete:Hl(t,e.key)};else if(e instanceof As)n={update:tp(t,e.key,e.data),updateMask:IR(e.fieldMask)};else{if(!(e instanceof X2))return X();n={verify:Hl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof ha)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ti)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ci)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof fa)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw X()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:uR(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:X()}(t,e.precondition)),n}function pR(t,e){return t&&t.length>0?(Pe(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?en(s.updateTime):en(r);return i.isEqual(te.min())&&(i=en(r)),new Q2(i,s.transformResults||[])}(n,e))):[]}function gR(t,e){return{documents:[zl(t,e.path)]}}function mR(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=zl(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=zl(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Sv(Vt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Ls(u.field),direction:_R(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=ql(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function yR(t){let e=hR(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Pe(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Cv(u);return h instanceof Vt&&Zy(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Gs($s(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,tc(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new la(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new la(f,h)}(n.endAt)),$2(e,r,o,i,a,"F",c,l)}function vR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Cv(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=$s(e.unaryFilter.field);return je.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=$s(e.unaryFilter.field);return je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=$s(e.unaryFilter.field);return je.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=$s(e.unaryFilter.field);return je.create(i,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(e){return je.create($s(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Vt.create(e.compositeFilter.filters.map(n=>Cv(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return X()}}(e.compositeFilter.op))}(t):X()}function _R(t){return oR[t]}function wR(t){return aR[t]}function ER(t){return cR[t]}function Ls(t){return{fieldPath:t.canonicalString()}}function $s(t){return at.fromServerFormat(t.fieldPath)}function Sv(t){return t instanceof je?function(e){if(e.op==="=="){if(Vd(e.value))return{unaryFilter:{field:Ls(e.field),op:"IS_NAN"}};if(Bd(e.value))return{unaryFilter:{field:Ls(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Vd(e.value))return{unaryFilter:{field:Ls(e.field),op:"IS_NOT_NAN"}};if(Bd(e.value))return{unaryFilter:{field:Ls(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ls(e.field),op:wR(e.op),value:e.value}}}(t):t instanceof Vt?function(e){const n=e.getFilters().map(s=>Sv(s));return n.length===1?n[0]:{compositeFilter:{op:ER(e.op),filters:n}}}(t):X()}function IR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function bv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class $n{constructor(e,n,s,r,i=te.min(),o=te.min(),a=ft.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new $n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class TR{constructor(e){this.fe=e}}function CR(t){const e=yR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ua(e,e.limit,"L"):e}/**
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
 */class SR{constructor(){this.rn=new bR}addToCollectionParentIndex(e,n){return this.rn.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(Qn.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(Qn.min())}updateCollectionGroup(e,n,s){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class bR{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new ut(ke.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ut(ke.comparator)).toArray()}}/**
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
 */class lr{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new lr(0)}static Mn(){return new lr(-1)}}/**
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
 */class AR{constructor(){this.changes=new Tr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,it.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?R.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class RR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class kR{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Gr(s.mutation,r,Mt.empty(),ze.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ue()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ue()){const r=ps();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=xr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=ps();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ue()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=En();const o=Wr(),a=Wr();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof As)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Gr(u.mutation,l,u.mutation.getFieldMask(),ze.now())):o.set(l.key,Mt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new RR(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Wr();let r=new xe((o,a)=>o-a),i=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||Mt.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||ue()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=lv();u.forEach(f=>{if(!i.has(f)){const p=mv(n.get(f),s.get(f));p!==null&&h.set(f,p),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return R.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return K.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):rv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):R.resolve(ps());let a=-1,c=i;return o.next(l=>R.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?R.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ue())).next(u=>({batchId:a,changes:cv(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(s=>{let r=xr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=xr();return this.indexManager.getCollectionParents(e,r).next(o=>R.forEach(o,a=>{const c=function(l,u){return new Ir(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,it.newInvalidDocument(l)))});let o=xr();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&Gr(l.mutation,c,Mt.empty(),ze.now()),rc(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class NR{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return R.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:en(s.createTime)}),R.resolve()}getNamedQuery(e,n){return R.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(s){return{name:s.name,query:CR(s.bundledQuery),readTime:en(s.readTime)}}(n)),R.resolve()}}/**
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
 */class DR{constructor(){this.overlays=new xe(K.comparator),this.ls=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ps();return R.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.we(e,n,i)}),R.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ls.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(s)),R.resolve()}getOverlaysForCollection(e,n,s){const r=ps(),i=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return R.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new xe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=ps(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ps(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return R.resolve(a)}we(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ls.get(r.largestBatchId).delete(s.key);this.ls.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new eR(n,s));let i=this.ls.get(n);i===void 0&&(i=ue(),this.ls.set(n,i)),this.ls.set(n,i.add(s.key))}}/**
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
 */class vh{constructor(){this.fs=new ut(We.ds),this.ws=new ut(We._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const s=new We(e,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ys(new We(e,n))}ps(e,n){e.forEach(s=>this.removeReference(s,n))}Is(e){const n=new K(new ke([])),s=new We(n,e),r=new We(n,e+1),i=[];return this.ws.forEachInRange([s,r],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new K(new ke([])),s=new We(n,e),r=new We(n,e+1);let i=ue();return this.ws.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new We(e,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class We{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return K.comparator(e.key,n.key)||me(e.As,n.As)}static _s(e,n){return me(e.As,n.As)||K.comparator(e.key,n.key)}}/**
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
 */class PR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new ut(We.ds)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Z2(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new We(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.bs(s),i=r<0?0:r;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new We(n,0),r=new We(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.Ps(o.As);i.push(a)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ut(me);return n.forEach(r=>{const i=new We(r,0),o=new We(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.As)})}),R.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;K.isDocumentKey(i)||(i=i.child(""));const o=new We(new K(i),0);let a=new ut(me);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.As)),!0)},o),R.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(s=>{const r=this.Ps(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Pe(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return R.forEach(n.mutations,r=>{const i=new We(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=s})}Cn(e){}containsKey(e,n){const s=new We(n,0),r=this.Rs.firstAfterOrEqual(s);return R.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class OR{constructor(e){this.Ds=e,this.docs=new xe(K.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return R.resolve(s?s.document.mutableCopy():it.newInvalidDocument(n))}getEntries(e,n){let s=En();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():it.newInvalidDocument(r))}),R.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=En();const o=n.path,a=new K(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||w2(_2(u),s)<=0||(r.has(u.key)||rc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,n,s,r){X()}Cs(e,n){return R.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new xR(this)}getSize(e){return R.resolve(this.size)}}class xR extends AR{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.os.addEntry(e,r)):this.os.removeEntry(s)}),R.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class MR{constructor(e){this.persistence=e,this.xs=new Tr(n=>uh(n),hh),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Ns=0,this.ks=new vh,this.targetCount=0,this.Ms=lr.kn()}forEachTarget(e,n){return this.xs.forEach((s,r)=>n(r)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),R.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new lr(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.Fn(n),R.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),R.waitFor(i).next(()=>r)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const s=this.xs.get(n)||null;return R.resolve(s)}addMatchingKeys(e,n,s){return this.ks.gs(n,s),R.resolve()}removeMatchingKeys(e,n,s){this.ks.ps(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),R.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),R.resolve()}getMatchingKeysForTargetId(e,n){const s=this.ks.Es(n);return R.resolve(s)}containsKey(e,n){return R.resolve(this.ks.containsKey(n))}}/**
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
 */class LR{constructor(e,n){this.$s={},this.overlays={},this.Os=new oh(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new MR(this),this.indexManager=new SR,this.remoteDocumentCache=function(s){return new OR(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new TR(n),this.qs=new NR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new DR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.$s[e.toKey()];return s||(s=new PR(n,this.referenceDelegate),this.$s[e.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,s){q("MemoryPersistence","Starting transaction:",e);const r=new $R(this.Os.next());return this.referenceDelegate.Us(),s(r).next(i=>this.referenceDelegate.Ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Gs(e,n){return R.or(Object.values(this.$s).map(s=>()=>s.containsKey(e,n)))}}class $R extends I2{constructor(e){super(),this.currentSequenceNumber=e}}class _h{constructor(e){this.persistence=e,this.Qs=new vh,this.js=null}static zs(e){return new _h(e)}get Ws(){if(this.js)return this.js;throw X()}addReference(e,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),R.resolve()}removeReference(e,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),R.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(r=>this.Ws.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ws.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Ws,s=>{const r=K.fromPath(s);return this.Hs(e,r).next(i=>{i||n.removeEntry(r,te.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return R.or([()=>R.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class wh{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Fi=s,this.Bi=r}static Li(e,n){let s=ue(),r=ue();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new wh(e,n.fromCache,s,r)}}/**
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
 */class FR{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ki(e,n).next(i=>i||this.Gi(e,n,r,s)).next(i=>i||this.Qi(e,n))}Ki(e,n){if(zd(n))return R.resolve(null);let s=wn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=ua(n,null,"F"),s=wn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ue(...i);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.ji(n,a);return this.zi(n,l,o,c.readTime)?this.Ki(e,ua(n,null,"F")):this.Wi(e,l,n,c)}))})))}Gi(e,n,s,r){return zd(n)||r.isEqual(te.min())?this.Qi(e,n):this.Ui.getDocuments(e,s).next(i=>{const o=this.ji(n,i);return this.zi(n,o,s,r)?this.Qi(e,n):(Md()<=pe.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),jl(n)),this.Wi(e,o,n,v2(r,-1)))})}ji(e,n){let s=new ut(ov(e));return n.forEach((r,i)=>{rc(e,i)&&(s=s.add(i))}),s}zi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,n){return Md()<=pe.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",jl(n)),this.Ui.getDocumentsMatchingQuery(e,n,Qn.min())}Wi(e,n,s,r){return this.Ui.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class UR{constructor(e,n,s,r){this.persistence=e,this.Hi=n,this.serializer=r,this.Ji=new xe(me),this.Yi=new Tr(i=>uh(i),hh),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(s)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kR(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function BR(t,e,n,s){return new UR(t,e,n,s)}async function Av(t,e){const n=re(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.tr(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ue();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({er:l,removedBatchIds:o,addedBatchIds:a}))})})}function VR(t,e){const n=re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=R.resolve();return h.forEach(p=>{f=f.next(()=>l.getEntry(a,p)).next(y=>{const v=c.docVersions.get(p);Pe(v!==null),y.version.compareTo(v)<0&&(u.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),l.addEntry(y)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ue();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Rv(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function jR(t,e){const n=re(t),s=e.snapshotVersion;let r=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});r=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.Bs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(i,u.addedDocuments,h)));let p=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(ft.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,s)),r=r.insert(h,p),function(y,v,C){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(f,p,u)&&a.push(n.Bs.updateTargetData(i,p))});let c=En(),l=ue();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(qR(i,o,e.documentUpdates).next(u=>{c=u.nr,l=u.sr})),!s.isEqual(te.min())){const u=n.Bs.getLastRemoteSnapshotVersion(i).next(h=>n.Bs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return R.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ji=r,i))}function qR(t,e,n){let s=ue(),r=ue();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=En();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(te.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):q("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{nr:o,sr:r}})}function HR(t,e){const n=re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function zR(t,e){const n=re(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Bs.getTargetData(s,e).next(i=>i?(r=i,R.resolve(r)):n.Bs.allocateTargetId(s).next(o=>(r=new $n(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ji.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(e,s.targetId)),s})}async function Wl(t,e,n){const s=re(t),r=s.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Wi(o))throw o;q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(r.target)}function np(t,e,n){const s=re(t);let r=te.min(),i=ue();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=re(a),h=u.Yi.get(l);return h!==void 0?R.resolve(u.Ji.get(h)):u.Bs.getTargetData(c,l)}(s,o,wn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,n?r:te.min(),n?i:ue())).next(a=>(KR(s,F2(e),a),{documents:a,ir:i})))}function KR(t,e,n){let s=t.Xi.get(e)||te.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Xi.set(e,s)}class sp{constructor(){this.activeTargetIds=H2()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class WR{constructor(){this.Hr=new sp,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,s){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new sp,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class GR{Yr(e){}shutdown(){}}/**
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
 */class rp{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let yo=null;function Hc(){return yo===null?yo=268435456+Math.round(2147483648*Math.random()):yo++,"0x"+yo.toString(16)}/**
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
 */const QR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class YR{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const st="WebChannelConnection";class JR extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,s,r,i){const o=Hc(),a=this.To(e,n);q("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.Eo(c,r,i),this.Ao(e,a,c,s).then(l=>(q("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw ir("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}vo(e,n,s,r,i,o){return this.Io(e,n,s,r,i)}Eo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+wr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}To(e,n){const s=QR[e];return`${this.mo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,s,r){const i=Hc();return new Promise((o,a)=>{const c=new a2;c.setWithCredentials(!0),c.listenOnce(r2.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case jc.NO_ERROR:const u=c.getResponseJson();q(st,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case jc.TIMEOUT:q(st,`RPC '${e}' ${i} timed out`),a(new B(I.DEADLINE_EXCEEDED,"Request time out"));break;case jc.HTTP_ERROR:const h=c.getStatus();if(q(st,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const y=function(v){const C=v.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(C)>=0?C:I.UNKNOWN}(p.status);a(new B(y,p.message))}else a(new B(I.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new B(I.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{q(st,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);q(st,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}Ro(e,n,s){const r=Hc(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=n2(),a=s2(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new o2({})),this.Eo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");q(st,`Creating RPC '${e}' stream ${r}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,p=!1;const y=new YR({ro:C=>{p?q(st,`Not sending because RPC '${e}' stream ${r} is closed:`,C):(f||(q(st,`Opening RPC '${e}' stream ${r} transport.`),h.open(),f=!0),q(st,`RPC '${e}' stream ${r} sending:`,C),h.send(C))},oo:()=>h.close()}),v=(C,k,S)=>{C.listen(k,L=>{try{S(L)}catch(w){setTimeout(()=>{throw w},0)}})};return v(h,fo.EventType.OPEN,()=>{p||q(st,`RPC '${e}' stream ${r} transport opened.`)}),v(h,fo.EventType.CLOSE,()=>{p||(p=!0,q(st,`RPC '${e}' stream ${r} transport closed`),y.wo())}),v(h,fo.EventType.ERROR,C=>{p||(p=!0,ir(st,`RPC '${e}' stream ${r} transport errored:`,C),y.wo(new B(I.UNAVAILABLE,"The operation could not be completed")))}),v(h,fo.EventType.MESSAGE,C=>{var k;if(!p){const S=C.data[0];Pe(!!S);const L=S,w=L.error||((k=L[0])===null||k===void 0?void 0:k.error);if(w){q(st,`RPC '${e}' stream ${r} received error:`,w);const P=w.status;let Y=function(D){const $=Be[D];if($!==void 0)return vv($)}(P),oe=w.message;Y===void 0&&(Y=I.INTERNAL,oe="Unknown error status: "+P+" with message "+w.message),p=!0,y.wo(new B(Y,oe)),h.close()}else q(st,`RPC '${e}' stream ${r} received:`,S),y._o(S)}}),v(a,i2.STAT_EVENT,C=>{C.stat===Od.PROXY?q(st,`RPC '${e}' stream ${r} detected buffering proxy`):C.stat===Od.NOPROXY&&q(st,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{y.fo()},0),y}}function zc(){return typeof document<"u"?document:null}/**
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
 */function cc(t){return new lR(t,!0)}/**
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
 */class kv{constructor(e,n,s=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=n,this.Po=s,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),r=Math.max(0,n-s);r>0&&q("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class Nv{constructor(e,n,s,r,i,o,a,c){this.ii=e,this.$o=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new kv(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(_n(n.toString()),_n("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Fo===n&&this.Zo(s,r)},s=>{e(()=>{const r=new B(I.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(r)})})}Zo(e,n){const s=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(r=>{s(()=>this.tu(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class XR extends Nv{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=fR(this.serializer,e),s=function(r){if(!("targetChange"in r))return te.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?te.min():i.readTime?en(i.readTime):te.min()}(e);return this.listener.nu(n,s)}su(e){const n={};n.database=Kl(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;if(o=Bl(a)?{documents:gR(r,a)}:{query:mR(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=Ev(r,i.resumeToken);const c=ql(r,i.expectedCount);c!==null&&(o.expectedCount=c)}else if(i.snapshotVersion.compareTo(te.min())>0){o.readTime=da(r,i.snapshotVersion.toTimestamp());const c=ql(r,i.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const s=vR(this.serializer,e);s&&(n.labels=s),this.Wo(n)}iu(e){const n={};n.database=Kl(this.serializer),n.removeTarget=e,this.Wo(n)}}class ZR extends Nv{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(Pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=pR(e.writeResults,e.commitTime),s=en(e.commitTime);return this.listener.cu(s,n)}return Pe(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Kl(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>dR(this.serializer,s))};this.Wo(n)}}/**
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
 */class ek extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new B(I.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Io(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new B(I.UNKNOWN,r.toString())})}vo(e,n,s,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(I.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class tk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(_n(n),this.mu=!1):q("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class nk{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{Rs(this)&&(q("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=re(a);c.vu.add(4),await Yi(c),c.bu.set("Unknown"),c.vu.delete(4),await lc(c)}(this))})}),this.bu=new tk(s,r)}}async function lc(t){if(Rs(t))for(const e of t.Ru)await e(!0)}async function Yi(t){for(const e of t.Ru)await e(!1)}function Dv(t,e){const n=re(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Th(n)?Ih(n):Cr(n).Ko()&&Eh(n,e))}function Pv(t,e){const n=re(t),s=Cr(n);n.Au.delete(e),s.Ko()&&Ov(n,e),n.Au.size===0&&(s.Ko()?s.jo():Rs(n)&&n.bu.set("Unknown"))}function Eh(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Cr(t).su(e)}function Ov(t,e){t.Vu.qt(e),Cr(t).iu(e)}function Ih(t){t.Vu=new iR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Cr(t).start(),t.bu.gu()}function Th(t){return Rs(t)&&!Cr(t).Uo()&&t.Au.size>0}function Rs(t){return re(t).vu.size===0}function xv(t){t.Vu=void 0}async function sk(t){t.Au.forEach((e,n)=>{Eh(t,e)})}async function rk(t,e){xv(t),Th(t)?(t.bu.Iu(e),Ih(t)):t.bu.set("Unknown")}async function ik(t,e,n){if(t.bu.set("Online"),e instanceof wv&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Au.delete(o),s.Vu.removeTarget(o))}(t,e)}catch(s){q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await pa(t,s)}else if(e instanceof xo?t.Vu.Ht(e):e instanceof _v?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(te.min()))try{const s=await Rv(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Vu.ce(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.Au.get(c);l&&r.Au.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,c)=>{const l=r.Au.get(a);if(!l)return;r.Au.set(a,l.withResumeToken(ft.EMPTY_BYTE_STRING,l.snapshotVersion)),Ov(r,a);const u=new $n(l.target,a,c,l.sequenceNumber);Eh(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){q("RemoteStore","Failed to raise snapshot:",s),await pa(t,s)}}async function pa(t,e,n){if(!Wi(e))throw e;t.vu.add(1),await Yi(t),t.bu.set("Offline"),n||(n=()=>Rv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{q("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await lc(t)})}function Mv(t,e){return e().catch(n=>pa(t,n,e))}async function uc(t){const e=re(t),n=Jn(e);let s=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;ok(e);)try{const r=await HR(e.localStore,s);if(r===null){e.Eu.length===0&&n.jo();break}s=r.batchId,ak(e,r)}catch(r){await pa(e,r)}Lv(e)&&$v(e)}function ok(t){return Rs(t)&&t.Eu.length<10}function ak(t,e){t.Eu.push(e);const n=Jn(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function Lv(t){return Rs(t)&&!Jn(t).Uo()&&t.Eu.length>0}function $v(t){Jn(t).start()}async function ck(t){Jn(t).hu()}async function lk(t){const e=Jn(t);for(const n of t.Eu)e.uu(n.mutations)}async function uk(t,e,n){const s=t.Eu.shift(),r=ph.from(s,e,n);await Mv(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await uc(t)}async function hk(t,e){e&&Jn(t).ou&&await async function(n,s){if(r=s.code,nR(r)&&r!==I.ABORTED){const i=n.Eu.shift();Jn(n).Qo(),await Mv(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await uc(n)}var r}(t,e),Lv(t)&&$v(t)}async function ip(t,e){const n=re(t);n.asyncQueue.verifyOperationInProgress(),q("RemoteStore","RemoteStore received new credentials");const s=Rs(n);n.vu.add(3),await Yi(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await lc(n)}async function fk(t,e){const n=re(t);e?(n.vu.delete(2),await lc(n)):e||(n.vu.add(2),await Yi(n),n.bu.set("Unknown"))}function Cr(t){return t.Su||(t.Su=function(e,n,s){const r=re(e);return r.fu(),new XR(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:sk.bind(null,t),ao:rk.bind(null,t),nu:ik.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Th(t)?Ih(t):t.bu.set("Unknown")):(await t.Su.stop(),xv(t))})),t.Su}function Jn(t){return t.Du||(t.Du=function(e,n,s){const r=re(e);return r.fu(),new ZR(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:ck.bind(null,t),ao:hk.bind(null,t),au:lk.bind(null,t),cu:uk.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await uc(t)):(await t.Du.stop(),t.Eu.length>0&&(q("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class Ch{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Ch(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sh(t,e){if(_n("AsyncQueue",`${e}: ${t}`),Wi(t))return new B(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ys{constructor(e){this.comparator=e?(n,s)=>e(n,s)||K.comparator(n.key,s.key):(n,s)=>K.comparator(n.key,s.key),this.keyedMap=xr(),this.sortedSet=new xe(this.comparator)}static emptySet(e){return new Ys(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ys)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Ys;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class op{constructor(){this.Cu=new xe(K.comparator)}track(e){const n=e.doc.key,s=this.Cu.get(n);s?e.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Cu=this.Cu.remove(n):e.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):X():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,s)=>{e.push(s)}),e}}class ur{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ur(e,n,Ys.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class dk{constructor(){this.Nu=void 0,this.listeners=[]}}class pk{constructor(){this.queries=new Tr(e=>iv(e),sc),this.onlineState="Unknown",this.ku=new Set}}async function gk(t,e){const n=re(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new dk),r)try{i.Nu=await n.onListen(s)}catch(o){const a=Sh(o,`Initialization of query '${jl(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Mu(n.onlineState),i.Nu&&e.$u(i.Nu)&&bh(n)}async function mk(t,e){const n=re(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function yk(t,e){const n=re(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.$u(r)&&(s=!0);o.Nu=r}}s&&bh(n)}function vk(t,e,n){const s=re(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function bh(t){t.ku.forEach(e=>{e.next()})}class _k{constructor(e,n,s){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new ur(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=ur.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class Fv{constructor(e){this.key=e}}class Uv{constructor(e){this.key=e}}class wk{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=ue(),this.mutatedKeys=ue(),this.tc=ov(e),this.ec=new Ys(this.tc)}get nc(){return this.Yu}sc(e,n){const s=n?n.ic:new op,r=n?n.ec:this.ec;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),p=rc(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let C=!1;f&&p?f.data.isEqual(p.data)?y!==v&&(s.track({type:3,doc:p}),C=!0):this.rc(f,p)||(s.track({type:2,doc:p}),C=!0,(c&&this.tc(p,c)>0||l&&this.tc(p,l)<0)&&(a=!0)):!f&&p?(s.track({type:0,doc:p}),C=!0):f&&!p&&(s.track({type:1,doc:f}),C=!0,(c||l)&&(a=!0)),C&&(p?(o=o.add(p),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{ec:o,ic:s,zi:a,mutatedKeys:i}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort((l,u)=>function(h,f){const p=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return p(h)-p(f)}(l.type,u.type)||this.tc(l.doc,u.doc)),this.oc(s);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,i.length!==0||c?{snapshot:new ur(this.query,e.ec,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new op,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=ue(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return e.forEach(s=>{this.Zu.has(s)||n.push(new Uv(s))}),this.Zu.forEach(s=>{e.has(s)||n.push(new Fv(s))}),n}hc(e){this.Yu=e.ir,this.Zu=ue();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return ur.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class Ek{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Ik{constructor(e){this.key=e,this.fc=!1}}class Tk{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Tr(a=>iv(a),sc),this._c=new Map,this.mc=new Set,this.gc=new xe(K.comparator),this.yc=new Map,this.Ic=new vh,this.Tc={},this.Ec=new Map,this.Ac=lr.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function Ck(t,e){const n=xk(t);let s,r;const i=n.wc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.lc();else{const o=await zR(n.localStore,wn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await Sk(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&Dv(n.remoteStore,o)}return r}async function Sk(t,e,n,s,r){t.Rc=(h,f,p)=>async function(y,v,C,k){let S=v.view.sc(C);S.zi&&(S=await np(y.localStore,v.query,!1).then(({documents:P})=>v.view.sc(P,S)));const L=k&&k.targetChanges.get(v.targetId),w=v.view.applyChanges(S,y.isPrimaryClient,L);return cp(y,v.targetId,w.cc),w.snapshot}(t,h,f,p);const i=await np(t.localStore,e,!0),o=new wk(e,i.ir),a=o.sc(i.documents),c=Qi.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);cp(t,n,l.cc);const u=new Ek(e,n,o);return t.wc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function bk(t,e){const n=re(t),s=n.wc.get(e),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!sc(i,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Wl(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Pv(n.remoteStore,s.targetId),Gl(n,s.targetId)}).catch(Ki)):(Gl(n,s.targetId),await Wl(n.localStore,s.targetId,!0))}async function Ak(t,e,n){const s=Mk(t);try{const r=await function(i,o){const a=re(i),c=ze.now(),l=o.reduce((f,p)=>f.add(p.key),ue());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let p=En(),y=ue();return a.Zi.getEntries(f,l).next(v=>{p=v,p.forEach((C,k)=>{k.isValidDocument()||(y=y.add(C))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,p)).next(v=>{u=v;const C=[];for(const k of o){const S=J2(k,u.get(k.key).overlayedDocument);S!=null&&C.push(new As(k.key,S,Yy(S.value.mapValue),Ft.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,C,o)}).next(v=>{h=v;const C=v.applyToLocalDocumentSet(u,y);return a.documentOverlayCache.saveOverlays(f,v.batchId,C)})}).then(()=>({batchId:h.batchId,changes:cv(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.Tc[i.currentUser.toKey()];c||(c=new xe(me)),c=c.insert(o,a),i.Tc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Ji(s,r.changes),await uc(s.remoteStore)}catch(r){const i=Sh(r,"Failed to persist write");n.reject(i)}}async function Bv(t,e){const n=re(t);try{const s=await jR(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.yc.get(i);o&&(Pe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.fc=!0:r.modifiedDocuments.size>0?Pe(o.fc):r.removedDocuments.size>0&&(Pe(o.fc),o.fc=!1))}),await Ji(n,s,e)}catch(s){await Ki(s)}}function ap(t,e,n){const s=re(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.wc.forEach((i,o)=>{const a=o.view.Mu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=re(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Mu(o)&&(c=!0)}),c&&bh(a)}(s.eventManager,e),r.length&&s.dc.nu(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Rk(t,e,n){const s=re(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.yc.get(e),i=r&&r.key;if(i){let o=new xe(K.comparator);o=o.insert(i,it.newNoDocument(i,te.min()));const a=ue().add(i),c=new ac(te.min(),new Map,new xe(me),o,a);await Bv(s,c),s.gc=s.gc.remove(i),s.yc.delete(e),Ah(s)}else await Wl(s.localStore,e,!1).then(()=>Gl(s,e,n)).catch(Ki)}async function kk(t,e){const n=re(t),s=e.batch.batchId;try{const r=await VR(n.localStore,e);jv(n,s,null),Vv(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ji(n,r)}catch(r){await Ki(r)}}async function Nk(t,e,n){const s=re(t);try{const r=await function(i,o){const a=re(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Pe(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);jv(s,e,n),Vv(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ji(s,r)}catch(r){await Ki(r)}}function Vv(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function jv(t,e,n){const s=re(t);let r=s.Tc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Tc[s.currentUser.toKey()]=r}}function Gl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.wc.delete(s),n&&t.dc.Pc(s,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(s=>{t.Ic.containsKey(s)||qv(t,s)})}function qv(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(Pv(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Ah(t))}function cp(t,e,n){for(const s of n)s instanceof Fv?(t.Ic.addReference(s.key,e),Dk(t,s)):s instanceof Uv?(q("SyncEngine","Document no longer in limbo: "+s.key),t.Ic.removeReference(s.key,e),t.Ic.containsKey(s.key)||qv(t,s.key)):X()}function Dk(t,e){const n=e.key,s=n.path.canonicalString();t.gc.get(n)||t.mc.has(s)||(q("SyncEngine","New document in limbo: "+n),t.mc.add(s),Ah(t))}function Ah(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new K(ke.fromString(e)),s=t.Ac.next();t.yc.set(s,new Ik(n)),t.gc=t.gc.insert(n,s),Dv(t.remoteStore,new $n(wn(sv(n.path)),s,"TargetPurposeLimboResolution",oh.ct))}}async function Ji(t,e,n){const s=re(t),r=[],i=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,c)=>{o.push(s.Rc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=wh.Li(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.dc.nu(r),await async function(a,c){const l=re(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>R.forEach(c,h=>R.forEach(h.Fi,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>R.forEach(h.Bi,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!Wi(u))throw u;q("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Ji.get(h),p=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(p);l.Ji=l.Ji.insert(h,y)}}}(s.localStore,i))}async function Pk(t,e){const n=re(t);if(!n.currentUser.isEqual(e)){q("SyncEngine","User change. New user:",e.toKey());const s=await Av(n.localStore,e);n.currentUser=e,function(r,i){r.Ec.forEach(o=>{o.forEach(a=>{a.reject(new B(I.CANCELLED,i))})}),r.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ji(n,s.er)}}function Ok(t,e){const n=re(t),s=n.yc.get(e);if(s&&s.fc)return ue().add(s.key);{let r=ue();const i=n._c.get(e);if(!i)return r;for(const o of i){const a=n.wc.get(o);r=r.unionWith(a.view.nc)}return r}}function xk(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Bv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ok.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Rk.bind(null,e),e.dc.nu=yk.bind(null,e.eventManager),e.dc.Pc=vk.bind(null,e.eventManager),e}function Mk(t){const e=re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=kk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Nk.bind(null,e),e}class lp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=cc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return BR(this.persistence,new FR,e.initialUser,this.serializer)}createPersistence(e){return new LR(_h.zs,this.serializer)}createSharedClientState(e){return new WR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Lk{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ap(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Pk.bind(null,this.syncEngine),await fk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new pk}createDatastore(e){const n=cc(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new JR(r));var r;return function(i,o,a,c){return new ek(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>ap(this.syncEngine,a,0),o=rp.D()?new rp:new GR,new nk(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new Tk(s,r,i,o,a,c);return l&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=re(e);q("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Yi(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 *//**
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
 */class $k{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):_n("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Fk{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=rt.UNAUTHENTICATED,this.clientId=Wy.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{q("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(q("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Sh(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Kc(t,e){t.asyncQueue.verifyOperationInProgress(),q("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Av(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function up(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Bk(t);q("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>ip(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>ip(e.remoteStore,i)),t._onlineComponents=e}function Uk(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Bk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Kc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Uk(n))throw n;ir("Error using user provided cache. Falling back to memory cache: "+n),await Kc(t,new lp)}}else q("FirestoreClient","Using default OfflineComponentProvider"),await Kc(t,new lp);return t._offlineComponents}async function Hv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(q("FirestoreClient","Using user provided OnlineComponentProvider"),await up(t,t._uninitializedComponentsProvider._online)):(q("FirestoreClient","Using default OnlineComponentProvider"),await up(t,new Lk))),t._onlineComponents}function Vk(t){return Hv(t).then(e=>e.syncEngine)}async function jk(t){const e=await Hv(t),n=e.eventManager;return n.onListen=Ck.bind(null,e.syncEngine),n.onUnlisten=bk.bind(null,e.syncEngine),n}function qk(t,e,n={}){const s=new zn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new $k({next:h=>{i.enqueueAndForget(()=>mk(r,u)),h.fromCache&&a.source==="server"?c.reject(new B(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new _k(o,l,{includeMetadataChanges:!0,Ku:!0});return gk(r,u)}(await jk(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function zv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const hp=new Map;/**
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
 */function Kv(t,e,n){if(!n)throw new B(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Hk(t,e,n,s){if(e===!0&&s===!0)throw new B(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fp(t){if(!K.isDocumentKey(t))throw new B(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function dp(t){if(K.isDocumentKey(t))throw new B(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function hc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function Ss(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hc(t);throw new B(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function zk(t,e){if(e<=0)throw new B(I.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class pp{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new B(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Hk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zv((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new B(I.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new B(I.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new B(I.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=e.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,s}}class fc{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pp(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new l2;switch(n.type){case"firstParty":return new d2(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new B(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=hp.get(e);n&&(q("ComponentProvider","Removing Datastore"),hp.delete(e),n.terminate())}(this),Promise.resolve()}}function Kk(t,e,n,s={}){var r;const i=(t=Ss(t,fc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ir("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=rt.MOCK_USER;else{a=$T(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new B(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new rt(l)}t._authCredentials=new u2(new Ky(a,c))}}/**
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
 */class Ct{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ct(this.firestore,e,this._key)}}class ts{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ts(this.firestore,e,this._query)}}class Kn extends ts{constructor(e,n,s){super(e,n,sv(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ct(this.firestore,null,new K(e))}withConverter(e){return new Kn(this.firestore,e,this._path)}}function ga(t,e,...n){if(t=Et(t),Kv("collection","path",e),t instanceof fc){const s=ke.fromString(e,...n);return dp(s),new Kn(t,null,s)}{if(!(t instanceof Ct||t instanceof Kn))throw new B(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ke.fromString(e,...n));return dp(s),new Kn(t.firestore,null,s)}}function Rh(t,e,...n){if(t=Et(t),arguments.length===1&&(e=Wy.A()),Kv("doc","path",e),t instanceof fc){const s=ke.fromString(e,...n);return fp(s),new Ct(t,null,new K(s))}{if(!(t instanceof Ct||t instanceof Kn))throw new B(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ke.fromString(e,...n));return fp(s),new Ct(t.firestore,t instanceof Kn?t.converter:null,new K(s))}}/**
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
 */class Wk{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new kv(this,"async_queue_retry"),this.Xc=()=>{const n=zc();n&&q("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=zc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=zc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new zn;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Wi(e))throw e;q("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(s=>{this.Wc=s,this.Hc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw _n("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(e,n,s){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const r=Ch.createAndSchedule(this,e,n,s,i=>this.na(i));return this.zc.push(r),r}Zc(){this.Wc&&X()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class Xi extends fc{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new Wk,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Gv(this),this._firestoreClient.terminate()}}function Gk(t,e){const n=typeof t=="object"?t:om(),s=typeof t=="string"?t:e||"(default)",r=Au(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=MT("firestore");i&&Kk(r,...i)}return r}function Wv(t){return t._firestoreClient||Gv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Gv(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,l){return new S2(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,zv(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new Fk(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class hr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hr(ft.fromBase64String(e))}catch(n){throw new B(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new hr(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class kh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Qv{constructor(e){this._methodName=e}}/**
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
 */class Nh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
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
 */const Qk=/^__.*__$/;class Yk{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new As(e,this.data,this.fieldMask,n,this.fieldTransforms):new Gi(e,this.data,n,this.fieldTransforms)}}function Yv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class Dh{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Dh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:s,la:!1});return r.fa(e),r}da(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:s,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return ma(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Yv(this.ca)&&Qk.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class Jk{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||cc(e)}ya(e,n,s,r=!1){return new Dh({ca:e,methodName:n,ga:s,path:at.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ph(t){const e=t._freezeSettings(),n=cc(t._databaseId);return new Jk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Jv(t,e,n,s,r,i={}){const o=t.ya(i.merge||i.mergeFields?2:0,e,n,r);e0("Data must be an object, but it was:",o,s);const a=Xv(s,o);let c,l;if(i.merge)c=new Mt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=Zk(e,h,n);if(!o.contains(f))throw new B(I.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);tN(u,f)||u.push(f)}c=new Mt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new Yk(new Rt(a),c,l)}function Xk(t,e,n,s=!1){return Oh(n,t.ya(s?4:3,e))}function Oh(t,e){if(Zv(t=Et(t)))return e0("Unsupported field value:",e,t),Xv(t,e);if(t instanceof Qv)return function(n,s){if(!Yv(s.ca))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Oh(o,s.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=Et(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return z2(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=ze.fromDate(n);return{timestampValue:da(s.serializer,r)}}if(n instanceof ze){const r=new ze(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:da(s.serializer,r)}}if(n instanceof Nh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof hr)return{bytesValue:Ev(s.serializer,n._byteString)};if(n instanceof Ct){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:yh(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${hc(n)}`)}(t,e)}function Xv(t,e){const n={};return Gy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Er(t,(s,r)=>{const i=Oh(r,e.ha(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Zv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ze||t instanceof Nh||t instanceof hr||t instanceof Ct||t instanceof Qv)}function e0(t,e,n){if(!Zv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=hc(n);throw s==="an object"?e._a(t+" a custom object"):e._a(t+" "+s)}}function Zk(t,e,n){if((e=Et(e))instanceof kh)return e._internalPath;if(typeof e=="string")return t0(t,e);throw ma("Field path arguments must be of type string or ",t,!1,void 0,n)}const eN=new RegExp("[~\\*/\\[\\]]");function t0(t,e,n){if(e.search(eN)>=0)throw ma(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new kh(...e.split("."))._internalPath}catch{throw ma(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ma(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new B(I.INVALID_ARGUMENT,a+t+c)}function tN(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class n0{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(dc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class nN extends n0{data(){return super.data()}}function dc(t,e){return typeof e=="string"?t0(t,e):e instanceof kh?e._internalPath:e._delegate._internalPath}/**
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
 */function sN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xh{}class Mh extends xh{}function Ql(t,e,...n){let s=[];e instanceof xh&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Lh).length,o=r.filter(a=>a instanceof pc).length;if(i>1||i>0&&o>0)throw new B(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class pc extends Mh{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new pc(e,n,s)}_apply(e){const n=this._parse(e);return s0(e._query,n),new ts(e.firestore,e.converter,Vl(e._query,n))}_parse(e){const n=Ph(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new B(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){mp(u,l);const f=[];for(const p of u)f.push(gp(a,r,p));h={arrayValue:{values:f}}}else h=gp(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||mp(u,l),h=Xk(o,i,u,l==="in"||l==="not-in");return je.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function rN(t,e,n){const s=e,r=dc("where",t);return pc._create(r,s,n)}class Lh extends xh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Lh(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Vt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)s0(i,a),i=Vl(i,a)}(e._query,n),new ts(e.firestore,e.converter,Vl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class $h extends Mh{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new $h(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new B(I.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new B(I.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Gs(r,i);return function(a,c){if(fh(a)===null){const l=nc(a);l!==null&&r0(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new ts(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new Ir(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function iN(t,e="asc"){const n=e,s=dc("orderBy",t);return $h._create(s,n)}class Fh extends Mh{constructor(e,n,s){super(),this.type=e,this._limit=n,this._limitType=s}static _create(e,n,s){return new Fh(e,n,s)}_apply(e){return new ts(e.firestore,e.converter,ua(e._query,this._limit,this._limitType))}}function oN(t){return zk("limit",t),Fh._create("limit",t,"F")}function gp(t,e,n){if(typeof(n=Et(n))=="string"){if(n==="")throw new B(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!rv(e)&&n.indexOf("/")!==-1)throw new B(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(ke.fromString(n));if(!K.isDocumentKey(s))throw new B(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Ud(t,new K(s))}if(n instanceof Ct)return Ud(t,n._key);throw new B(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${hc(n)}.`)}function mp(t,e){if(!Array.isArray(t)||t.length===0)throw new B(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function s0(t,e){if(e.isInequality()){const s=nc(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new B(I.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=fh(t);i!==null&&r0(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function r0(t,e,n){if(!n.isEqual(e))throw new B(I.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class aN{convertValue(e,n="none"){switch(Cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ts(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Er(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Nh(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=ch(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(wi(e));default:return null}}convertTimestamp(e){const n=Yn(e);return new ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ke.fromString(e);Pe(bv(s));const r=new Ei(s.get(1),s.get(3)),i=new K(s.popFirst(5));return r.isEqual(n)||_n(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function i0(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class vo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cN extends n0{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Mo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(dc("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Mo extends cN{data(e={}){return super.data(e)}}class lN{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new vo(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Mo(this._firestore,this._userDataWriter,s.key,s,new vo(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Mo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new vo(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Mo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new vo(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:uN(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function uN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}class hN extends aN{constructor(e){super(),this.firestore=e}convertBytes(e){return new hr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ct(this.firestore,null,n)}}function o0(t){t=Ss(t,ts);const e=Ss(t.firestore,Xi),n=Wv(e),s=new hN(e);return sN(t._query),qk(n,t._query).then(r=>new lN(e,s,t,r))}function fN(t,e,n){t=Ss(t,Ct);const s=Ss(t.firestore,Xi),r=i0(t.converter,e,n);return Uh(s,[Jv(Ph(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Ft.none())])}function dN(t){return Uh(Ss(t.firestore,Xi),[new dh(t._key,Ft.none())])}function pN(t,e){const n=Ss(t.firestore,Xi),s=Rh(t),r=i0(t.converter,e);return Uh(n,[Jv(Ph(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,Ft.exists(!1))]).then(()=>s)}function Uh(t,e){return function(n,s){const r=new zn;return n.asyncQueue.enqueueAndForget(async()=>Ak(await Vk(n),s,r)),r.promise}(Wv(t),e)}(function(t,e=!0){(function(n){wr=n})(yr),nr(new _s("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Xi(new h2(n.getProvider("auth-internal")),new g2(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new B(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ei(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Hn(xd,"3.13.0",t),Hn(xd,"3.13.0","esm2017")})();var gN="firebase",mN="9.23.0";/**
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
 */Hn(gN,mN,"app");const yN="AIzaSyBe3GGhSgxu9TycWVQRVYLMmbLwQIv-3oA",vN={apiKey:yN,authDomain:"easy-reach-1f358.firebaseapp.com",projectId:"easy-reach-1f358",storageBucket:"easy-reach-1f358.appspot.com",messagingSenderId:"344931134629",appId:"1:344931134629:web:c0e7bd69de1f0c383f714c"},_N=im(vN),fr=Gk(_N),JN="https://us-central1-easy-reach-1f358.cloudfunctions.net/",XN=async(t,e=null)=>{let n;e?n=Ql(ga(fr,t),iN(e)):n=Ql(ga(fr,t));const s=await o0(n);return Array.from(s.docs).map(i=>({...i.data(),id:i.id}))},ZN=async(t,e)=>{await fN(Rh(fr,t),e,{merge:!0})},eD=async(t,e)=>{const n=ga(fr,t);return await pN(n,e)},tD=async(t,e)=>{const n=Rh(fr,t,e);return await dN(n)},wN=async t=>{const e=Ql(ga(fr,"users"),rN("email","==",t),oN(1)),n=await o0(e);if(Array.from(n.docs).map(r=>({...r.data(),id:r.id})).length)return!0;throw new Error("User not authorized to log in")},EN={__name:"HomeView",setup(t){const e=Lu(),n=()=>{const r=new un;hb(ea(),r).then(i=>{wN(i.user.email).then(()=>{e.setUser(i.user),gc.push({name:"Arrivals"})}).catch(o=>{console.log(o.message),s()})}).catch(i=>{console.log("error",i)})},s=()=>{Pm(ea()).then(()=>{e.setUser(null)}).catch(r=>console.log("error",r))};return(r,i)=>(De(),Me("main",null,[we("div",{class:"flex justify-center mt-20"},[we("button",{onClick:n,class:"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"}," Sign in with Google ")])]))}},gc=IT({history:UI("/easy-reach"),routes:[{path:"/",name:"Home",component:EN},{path:"/arrivals",name:"Arrivals",component:()=>Gf(()=>import("./ArrivalsView-71d2e872.js"),["assets/ArrivalsView-71d2e872.js","assets/SelectSkeleton-28e0d621.js","assets/ArrivalsView-9bb43f66.css"]),meta:{requiresAuth:!0}},{path:"/settings",name:"Settings",component:()=>Gf(()=>import("./SettingsView-0f5facb1.js"),["assets/SettingsView-0f5facb1.js","assets/SelectSkeleton-28e0d621.js","assets/SettingsView-71ad89fb.css"]),meta:{requiresAuth:!0}}]}),IN=()=>new Promise((t,e)=>{const n=Lu();HS(ea(),s=>{s?(n.setUser(s),t(s)):(n.setUser(null),e("User not logged in"))})});gc.beforeEach(async(t,e,n)=>{if(t.matched.some(s=>s.meta.requiresAuth))try{await IN(),n()}catch(s){console.log(s),n("/")}else n()});const TN={class:"border-b border-gray-200 bg-gray-900"},CN={class:"max-w-screen-xl flex justify-between mx-auto px-6 xl:px-0"},SN=we("div",{class:"logo flex items-center"},[we("div",{class:"truncate text-white font-medium border-l-4 border-gray-500 transition hover:text-gray-100 my-4 px-3 py-1"},[we("span",{class:"sm:hidden"}," ER "),we("span",{class:"hidden sm:block"},"Easy Reach")])],-1),bN={key:0,class:"flex items-center gap-4"},AN=we("img",{src:ST,alt:"Logout icon"},null,-1),RN=[AN],kN={__name:"HeaderMenu",setup(t){const e=CT(),n=o=>e.path===o?"bg-gray-600":"",s=()=>e.path==="/arrivals"||e.path==="/settings",r=Lu(),i=()=>{Pm(ea()).then(()=>{r.setUser(null)}).catch(o=>console.log("error",o)).finally(()=>gc.push("/"))};return(o,a)=>{const c=x_("router-link");return De(),Me("header",TN,[we("div",CN,[SN,Yt(r).user&&s?(De(),Me("div",bN,[ie(c,{to:"/arrivals",class:Jr(`sm:w-28 py-1.5 px-2 text-center text-sm text-white sm:border sm:border-gray-100 ${n("/arrivals")}`)},{default:Xc(()=>[rl("ARRIVALS")]),_:1},8,["class"]),ie(c,{to:"/settings",class:Jr(`sm:w-28 py-1.5 px-2 text-center text-sm text-white sm:border sm:border-gray-100 ${n("/settings")}`)},{default:Xc(()=>[rl("SETTINGS")]),_:1},8,["class"])])):wc("",!0),Yt(r).user?(De(),Me("div",{key:1,onClick:i,class:"hidden sm:flex text-white items-center px-4 cursor-pointer hover:text-gray-100"}," Sign out ")):wc("",!0),Yt(r).user?(De(),Me("div",{key:2,onClick:i,class:"w-12 flex sm:hidden text-white items-center px-4 cursor-pointer hover:text-gray-100"},RN)):wc("",!0)])])}}},NN={},DN={class:"text-center border-t border-gray-200 bg-gray-900 py-2"},PN=we("span",{class:"text-white"},"2024",-1),ON=[PN];function xN(t,e){return De(),Me("footer",DN,ON)}const MN=tt(NN,[["render",xN]]);const LN={class:"flex flex-col h-screen justify-between text-slate-800"},$N={class:"mb-auto bg-white"},FN={class:"max-w-screen-xl mx-auto px-6 xl:px-0"},UN={__name:"App",setup(t){return(e,n)=>(De(),Me("div",LN,[ie(kN),we("main",$N,[we("div",FN,[ie(Yt(Yg))])]),ie(MN)]))}},BN=tt(UN,[["__scopeId","data-v-8ebac9e5"]]),Zi=Sg(BN);Zi.component("EditIcon",G1).component("EmailIcon",ew).component("EmailLightIcon",ow).component("WhatsAppIcon",fw).component("CancelIcon",vw).component("ThumbsDownIcon",Cw).component("ThumbsUpIcon",Nw).component("SentIcon",Lw).component("LeftTriangleIcon",jw).component("RightTriangleIcon",Gw).component("RefreshIcon",eE).component("GuestsIcon",oE).component("ProgressionIcon",fE).component("LoadIcon",vE).component("ArrowDownIcon",CE);Zi.use(Mg,{autoClose:3e3,transition:"slide",hideProgressBar:!0});Zi.use(pI());Zi.use(gc);Zi.mount("#app");export{Aa as A,WN as B,tD as C,ze as D,Lr as E,vt as F,yg as G,jN as S,GN as T,tt as _,eD as a,Ie as b,Me as c,wI as d,x_ as e,JN as f,we as g,ie as h,Ne as i,rl as j,KN as k,dg as l,qN as m,Jr as n,De as o,HN as p,XN as q,zN as r,ZN as s,VN as t,Yt as u,YN as v,Xc as w,hn as x,wc as y,QN as z};

(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Zc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const _e={},vs=[],Tt=()=>{},My=()=>!1,Ly=/^on[^a-z]/,Lo=t=>Ly.test(t),el=t=>t.startsWith("onUpdate:"),$e=Object.assign,tl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Fy=Object.prototype.hasOwnProperty,ae=(t,e)=>Fy.call(t,e),z=Array.isArray,ws=t=>Xr(t)==="[object Map]",Fo=t=>Xr(t)==="[object Set]",qu=t=>Xr(t)==="[object Date]",Z=t=>typeof t=="function",xe=t=>typeof t=="string",Tr=t=>typeof t=="symbol",we=t=>t!==null&&typeof t=="object",nl=t=>we(t)&&Z(t.then)&&Z(t.catch),ud=Object.prototype.toString,Xr=t=>ud.call(t),Uy=t=>Xr(t).slice(8,-1),hd=t=>Xr(t)==="[object Object]",sl=t=>xe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Vi=Zc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Uo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},$y=/-(\w)/g,Bt=Uo(t=>t.replace($y,(e,n)=>n?n.toUpperCase():"")),Vy=/\B([A-Z])/g,Hs=Uo(t=>t.replace(Vy,"-$1").toLowerCase()),$o=Uo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Da=Uo(t=>t?`on${$o(t)}`:""),br=(t,e)=>!Object.is(t,e),Bi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},to=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},no=t=>{const e=parseFloat(t);return isNaN(e)?t:e},By=t=>{const e=xe(t)?Number(t):NaN;return isNaN(e)?t:e};let Hu;const ic=()=>Hu||(Hu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function rl(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=xe(s)?Ky(s):rl(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(xe(t))return t;if(we(t))return t}}const jy=/;(?![^(]*\))/g,qy=/:([^]+)/,Hy=/\/\*[^]*?\*\//g;function Ky(t){const e={};return t.replace(Hy,"").split(jy).forEach(n=>{if(n){const s=n.split(qy);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Sr(t){let e="";if(xe(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const s=Sr(t[n]);s&&(e+=s+" ")}else if(we(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const zy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wy=Zc(zy);function fd(t){return!!t||t===""}function Gy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Vo(t[s],e[s]);return n}function Vo(t,e){if(t===e)return!0;let n=qu(t),s=qu(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Tr(t),s=Tr(e),n||s)return t===e;if(n=z(t),s=z(e),n||s)return n&&s?Gy(t,e):!1;if(n=we(t),s=we(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Vo(t[o],e[o]))return!1}}return String(t)===String(e)}function Qy(t,e){return t.findIndex(n=>Vo(n,e))}const j1=t=>xe(t)?t:t==null?"":z(t)||we(t)&&(t.toString===ud||!Z(t.toString))?JSON.stringify(t,dd,2):String(t),dd=(t,e)=>e&&e.__v_isRef?dd(t,e.value):ws(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Fo(e)?{[`Set(${e.size})`]:[...e.values()]}:we(e)&&!z(e)&&!hd(e)?String(e):e;let ft;class pd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ft,!e&&ft&&(this.index=(ft.scopes||(ft.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=ft;try{return ft=this,e()}finally{ft=n}}}on(){ft=this}off(){ft=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function gd(t){return new pd(t)}function Yy(t,e=ft){e&&e.active&&e.effects.push(t)}function md(){return ft}function Jy(t){ft&&ft.cleanups.push(t)}const il=t=>{const e=new Set(t);return e.w=0,e.n=0,e},yd=t=>(t.w&Nn)>0,vd=t=>(t.n&Nn)>0,Xy=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Nn},Zy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];yd(r)&&!vd(r)?r.delete(t):e[n++]=r,r.w&=~Nn,r.n&=~Nn}e.length=n}},so=new WeakMap;let or=0,Nn=1;const oc=30;let Et;const Qn=Symbol(""),ac=Symbol("");class ol{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Yy(this,s)}run(){if(!this.active)return this.fn();let e=Et,n=_n;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Et,Et=this,_n=!0,Nn=1<<++or,or<=oc?Xy(this):Ku(this),this.fn()}finally{or<=oc&&Zy(this),Nn=1<<--or,Et=this.parent,_n=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Et===this?this.deferStop=!0:this.active&&(Ku(this),this.onStop&&this.onStop(),this.active=!1)}}function Ku(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let _n=!0;const wd=[];function Ks(){wd.push(_n),_n=!1}function zs(){const t=wd.pop();_n=t===void 0?!0:t}function ct(t,e,n){if(_n&&Et){let s=so.get(t);s||so.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=il()),_d(r)}}function _d(t,e){let n=!1;or<=oc?vd(t)||(t.n|=Nn,n=!yd(t)):n=!t.has(Et),n&&(t.add(Et),Et.deps.push(t))}function Xt(t,e,n,s,r,i){const o=so.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?sl(n)&&a.push(o.get("length")):(a.push(o.get(Qn)),ws(t)&&a.push(o.get(ac)));break;case"delete":z(t)||(a.push(o.get(Qn)),ws(t)&&a.push(o.get(ac)));break;case"set":ws(t)&&a.push(o.get(Qn));break}if(a.length===1)a[0]&&cc(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);cc(il(c))}}function cc(t,e){const n=z(t)?t:[...t];for(const s of n)s.computed&&zu(s);for(const s of n)s.computed||zu(s)}function zu(t,e){(t!==Et||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function ev(t,e){var n;return(n=so.get(t))==null?void 0:n.get(e)}const tv=Zc("__proto__,__v_isRef,__isVue"),Ed=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Tr)),nv=al(),sv=al(!1,!0),rv=al(!0),Wu=iv();function iv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ce(this);for(let i=0,o=this.length;i<o;i++)ct(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ce)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ks();const s=ce(this)[e].apply(this,n);return zs(),s}}),t}function ov(t){const e=ce(this);return ct(e,"has",t),e.hasOwnProperty(t)}function al(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Iv:Cd:e?Sd:bd).get(s))return s;const o=z(s);if(!t){if(o&&ae(Wu,r))return Reflect.get(Wu,r,i);if(r==="hasOwnProperty")return ov}const a=Reflect.get(s,r,i);return(Tr(r)?Ed.has(r):tv(r))||(t||ct(s,"get",r),e)?a:Ae(a)?o&&sl(r)?a:a.value:we(a)?t?Ad(a):Ws(a):a}}const av=Id(),cv=Id(!0);function Id(t=!1){return function(n,s,r,i){let o=n[s];if(ks(o)&&Ae(o)&&!Ae(r))return!1;if(!t&&(!ro(r)&&!ks(r)&&(o=ce(o),r=ce(r)),!z(n)&&Ae(o)&&!Ae(r)))return o.value=r,!0;const a=z(n)&&sl(s)?Number(s)<n.length:ae(n,s),c=Reflect.set(n,s,r,i);return n===ce(i)&&(a?br(r,o)&&Xt(n,"set",s,r):Xt(n,"add",s,r)),c}}function lv(t,e){const n=ae(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Xt(t,"delete",e,void 0),s}function uv(t,e){const n=Reflect.has(t,e);return(!Tr(e)||!Ed.has(e))&&ct(t,"has",e),n}function hv(t){return ct(t,"iterate",z(t)?"length":Qn),Reflect.ownKeys(t)}const Td={get:nv,set:av,deleteProperty:lv,has:uv,ownKeys:hv},fv={get:rv,set(t,e){return!0},deleteProperty(t,e){return!0}},dv=$e({},Td,{get:sv,set:cv}),cl=t=>t,Bo=t=>Reflect.getPrototypeOf(t);function Ti(t,e,n=!1,s=!1){t=t.__v_raw;const r=ce(t),i=ce(e);n||(e!==i&&ct(r,"get",e),ct(r,"get",i));const{has:o}=Bo(r),a=s?cl:n?hl:Cr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function bi(t,e=!1){const n=this.__v_raw,s=ce(n),r=ce(t);return e||(t!==r&&ct(s,"has",t),ct(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Si(t,e=!1){return t=t.__v_raw,!e&&ct(ce(t),"iterate",Qn),Reflect.get(t,"size",t)}function Gu(t){t=ce(t);const e=ce(this);return Bo(e).has.call(e,t)||(e.add(t),Xt(e,"add",t,t)),this}function Qu(t,e){e=ce(e);const n=ce(this),{has:s,get:r}=Bo(n);let i=s.call(n,t);i||(t=ce(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?br(e,o)&&Xt(n,"set",t,e):Xt(n,"add",t,e),this}function Yu(t){const e=ce(this),{has:n,get:s}=Bo(e);let r=n.call(e,t);r||(t=ce(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Xt(e,"delete",t,void 0),i}function Ju(){const t=ce(this),e=t.size!==0,n=t.clear();return e&&Xt(t,"clear",void 0,void 0),n}function Ci(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ce(o),c=e?cl:t?hl:Cr;return!t&&ct(a,"iterate",Qn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Ai(t,e,n){return function(...s){const r=this.__v_raw,i=ce(r),o=ws(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?cl:e?hl:Cr;return!e&&ct(i,"iterate",c?ac:Qn),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function ln(t){return function(...e){return t==="delete"?!1:this}}function pv(){const t={get(i){return Ti(this,i)},get size(){return Si(this)},has:bi,add:Gu,set:Qu,delete:Yu,clear:Ju,forEach:Ci(!1,!1)},e={get(i){return Ti(this,i,!1,!0)},get size(){return Si(this)},has:bi,add:Gu,set:Qu,delete:Yu,clear:Ju,forEach:Ci(!1,!0)},n={get(i){return Ti(this,i,!0)},get size(){return Si(this,!0)},has(i){return bi.call(this,i,!0)},add:ln("add"),set:ln("set"),delete:ln("delete"),clear:ln("clear"),forEach:Ci(!0,!1)},s={get(i){return Ti(this,i,!0,!0)},get size(){return Si(this,!0)},has(i){return bi.call(this,i,!0)},add:ln("add"),set:ln("set"),delete:ln("delete"),clear:ln("clear"),forEach:Ci(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ai(i,!1,!1),n[i]=Ai(i,!0,!1),e[i]=Ai(i,!1,!0),s[i]=Ai(i,!0,!0)}),[t,n,e,s]}const[gv,mv,yv,vv]=pv();function ll(t,e){const n=e?t?vv:yv:t?mv:gv;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ae(n,r)&&r in s?n:s,r,i)}const wv={get:ll(!1,!1)},_v={get:ll(!1,!0)},Ev={get:ll(!0,!1)},bd=new WeakMap,Sd=new WeakMap,Cd=new WeakMap,Iv=new WeakMap;function Tv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bv(t){return t.__v_skip||!Object.isExtensible(t)?0:Tv(Uy(t))}function Ws(t){return ks(t)?t:ul(t,!1,Td,wv,bd)}function Sv(t){return ul(t,!1,dv,_v,Sd)}function Ad(t){return ul(t,!0,fv,Ev,Cd)}function ul(t,e,n,s,r){if(!we(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=bv(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function En(t){return ks(t)?En(t.__v_raw):!!(t&&t.__v_isReactive)}function ks(t){return!!(t&&t.__v_isReadonly)}function ro(t){return!!(t&&t.__v_isShallow)}function Rd(t){return En(t)||ks(t)}function ce(t){const e=t&&t.__v_raw;return e?ce(e):t}function jo(t){return to(t,"__v_skip",!0),t}const Cr=t=>we(t)?Ws(t):t,hl=t=>we(t)?Ad(t):t;function kd(t){_n&&Et&&(t=ce(t),_d(t.dep||(t.dep=il())))}function Nd(t,e){t=ce(t);const n=t.dep;n&&cc(n)}function Ae(t){return!!(t&&t.__v_isRef===!0)}function fl(t){return Dd(t,!1)}function Cv(t){return Dd(t,!0)}function Dd(t,e){return Ae(t)?t:new Av(t,e)}class Av{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ce(e),this._value=n?e:Cr(e)}get value(){return kd(this),this._value}set value(e){const n=this.__v_isShallow||ro(e)||ks(e);e=n?e:ce(e),br(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Cr(e),Nd(this))}}function In(t){return Ae(t)?t.value:t}const Rv={get:(t,e,n)=>In(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ae(r)&&!Ae(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Od(t){return En(t)?t:new Proxy(t,Rv)}function kv(t){const e=z(t)?new Array(t.length):{};for(const n in t)e[n]=Dv(t,n);return e}class Nv{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return ev(ce(this._object),this._key)}}function Dv(t,e,n){const s=t[e];return Ae(s)?s:new Nv(t,e,n)}class Ov{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ol(e,()=>{this._dirty||(this._dirty=!0,Nd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ce(this);return kd(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function xv(t,e,n=!1){let s,r;const i=Z(t);return i?(s=t,r=Tt):(s=t.get,r=t.set),new Ov(s,r,i||!r,n)}function Tn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Zr(i,e,n)}return r}function bt(t,e,n,s){if(Z(t)){const i=Tn(t,e,n,s);return i&&nl(i)&&i.catch(o=>{Zr(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(bt(t[i],e,n,s));return r}function Zr(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Tn(c,null,10,[t,o,a]);return}}Pv(t,n,r,s)}function Pv(t,e,n,s=!0){console.error(t)}let Ar=!1,lc=!1;const Qe=[];let Ot=0;const _s=[];let zt=null,Bn=0;const xd=Promise.resolve();let dl=null;function pl(t){const e=dl||xd;return t?e.then(this?t.bind(this):t):e}function Mv(t){let e=Ot+1,n=Qe.length;for(;e<n;){const s=e+n>>>1;Rr(Qe[s])<t?e=s+1:n=s}return e}function gl(t){(!Qe.length||!Qe.includes(t,Ar&&t.allowRecurse?Ot+1:Ot))&&(t.id==null?Qe.push(t):Qe.splice(Mv(t.id),0,t),Pd())}function Pd(){!Ar&&!lc&&(lc=!0,dl=xd.then(Fd))}function Lv(t){const e=Qe.indexOf(t);e>Ot&&Qe.splice(e,1)}function Md(t){z(t)?_s.push(...t):(!zt||!zt.includes(t,t.allowRecurse?Bn+1:Bn))&&_s.push(t),Pd()}function Xu(t,e=Ar?Ot+1:0){for(;e<Qe.length;e++){const n=Qe[e];n&&n.pre&&(Qe.splice(e,1),e--,n())}}function Ld(t){if(_s.length){const e=[...new Set(_s)];if(_s.length=0,zt){zt.push(...e);return}for(zt=e,zt.sort((n,s)=>Rr(n)-Rr(s)),Bn=0;Bn<zt.length;Bn++)zt[Bn]();zt=null,Bn=0}}const Rr=t=>t.id==null?1/0:t.id,Fv=(t,e)=>{const n=Rr(t)-Rr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Fd(t){lc=!1,Ar=!0,Qe.sort(Fv);const e=Tt;try{for(Ot=0;Ot<Qe.length;Ot++){const n=Qe[Ot];n&&n.active!==!1&&Tn(n,null,14)}}finally{Ot=0,Qe.length=0,Ld(),Ar=!1,dl=null,(Qe.length||_s.length)&&Fd()}}function Uv(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||_e;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||_e;f&&(r=n.map(g=>xe(g)?g.trim():g)),h&&(r=n.map(no))}let a,c=s[a=Da(e)]||s[a=Da(Bt(e))];!c&&i&&(c=s[a=Da(Hs(e))]),c&&bt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,bt(l,t,6,r)}}function Ud(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Z(t)){const c=l=>{const u=Ud(l,e,!0);u&&(a=!0,$e(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(we(t)&&s.set(t,null),null):(z(i)?i.forEach(c=>o[c]=null):$e(o,i),we(t)&&s.set(t,o),o)}function qo(t,e){return!t||!Lo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ae(t,e[0].toLowerCase()+e.slice(1))||ae(t,Hs(e))||ae(t,e))}let at=null,$d=null;function io(t){const e=at;return at=t,$d=t&&t.type.__scopeId||null,e}function ji(t,e=at,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&uh(-1);const i=io(e);let o;try{o=t(...r)}finally{io(i),s._d&&uh(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Oa(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:g,ctx:y,inheritAttrs:E}=t;let C,k;const N=io(t);try{if(n.shapeFlag&4){const T=r||s;C=_t(u.call(T,T,h,i,g,f,y)),k=c}else{const T=e;C=_t(T.length>1?T(i,{attrs:c,slots:a,emit:l}):T(i,null)),k=e.props?c:Vv(c)}}catch(T){pr.length=0,Zr(T,t,1),C=Oe(Zt)}let V=C;if(k&&E!==!1){const T=Object.keys(k),{shapeFlag:F}=V;T.length&&F&7&&(o&&T.some(el)&&(k=Bv(k,o)),V=Ds(V,k))}return n.dirs&&(V=Ds(V),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),C=V,io(N),C}function $v(t){let e;for(let n=0;n<t.length;n++){const s=t[n];if(ao(s)){if(s.type!==Zt||s.children==="v-if"){if(e)return;e=s}}else return}return e}const Vv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Lo(n))&&((e||(e={}))[n]=t[n]);return e},Bv=(t,e)=>{const n={};for(const s in t)(!el(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function jv(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Zu(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!qo(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Zu(s,o,l):!0:!!o;return!1}function Zu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!qo(n,i))return!0}return!1}function ml({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const qv=t=>t.__isSuspense,Hv={name:"Suspense",__isSuspense:!0,process(t,e,n,s,r,i,o,a,c,l){t==null?Kv(e,n,s,r,i,o,a,c,l):zv(t,e,n,s,r,o,a,c,l)},hydrate:Wv,create:yl,normalize:Gv},q1=Hv;function kr(t,e){const n=t.props&&t.props[e];Z(n)&&n()}function Kv(t,e,n,s,r,i,o,a,c){const{p:l,o:{createElement:u}}=c,h=u("div"),f=t.suspense=yl(t,r,s,e,h,n,i,o,a,c);l(null,f.pendingBranch=t.ssContent,h,null,s,f,i,o),f.deps>0?(kr(t,"onPending"),kr(t,"onFallback"),l(null,t.ssFallback,e,n,s,null,i,o),Es(f,t.ssFallback)):f.resolve(!1,!0)}function zv(t,e,n,s,r,i,o,a,{p:c,um:l,o:{createElement:u}}){const h=e.suspense=t.suspense;h.vnode=e,e.el=t.el;const f=e.ssContent,g=e.ssFallback,{activeBranch:y,pendingBranch:E,isInFallback:C,isHydrating:k}=h;if(E)h.pendingBranch=f,gn(f,E)?(c(E,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():C&&(c(y,g,n,s,r,null,i,o,a),Es(h,g))):(h.pendingId++,k?(h.isHydrating=!1,h.activeBranch=E):l(E,r,h),h.deps=0,h.effects.length=0,h.hiddenContainer=u("div"),C?(c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0?h.resolve():(c(y,g,n,s,r,null,i,o,a),Es(h,g))):y&&gn(f,y)?(c(y,f,n,s,r,h,i,o,a),h.resolve(!0)):(c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0&&h.resolve()));else if(y&&gn(f,y))c(y,f,n,s,r,h,i,o,a),Es(h,f);else if(kr(e,"onPending"),h.pendingBranch=f,h.pendingId++,c(null,f,h.hiddenContainer,null,r,h,i,o,a),h.deps<=0)h.resolve();else{const{timeout:N,pendingId:V}=h;N>0?setTimeout(()=>{h.pendingId===V&&h.fallback(g)},N):N===0&&h.fallback(g)}}function yl(t,e,n,s,r,i,o,a,c,l,u=!1){const{p:h,m:f,um:g,n:y,o:{parentNode:E,remove:C}}=l;let k;const N=Yv(t);N&&e!=null&&e.pendingBranch&&(k=e.pendingId,e.deps++);const V=t.props?By(t.props.timeout):void 0,T={vnode:t,parent:e,parentComponent:n,isSVG:o,container:s,hiddenContainer:r,anchor:i,deps:0,pendingId:0,timeout:typeof V=="number"?V:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(F=!1,te=!1){const{vnode:oe,activeBranch:W,pendingBranch:K,pendingId:ue,effects:be,parentComponent:Le,container:Fe}=T;if(T.isHydrating)T.isHydrating=!1;else if(!F){const re=W&&K.transition&&K.transition.mode==="out-in";re&&(W.transition.afterLeave=()=>{ue===T.pendingId&&f(K,Fe,he,0)});let{anchor:he}=T;W&&(he=y(W),g(W,Le,T,!0)),re||f(K,Fe,he,0)}Es(T,K),T.pendingBranch=null,T.isInFallback=!1;let ut=T.parent,nt=!1;for(;ut;){if(ut.pendingBranch){ut.effects.push(...be),nt=!0;break}ut=ut.parent}nt||Md(be),T.effects=[],N&&e&&e.pendingBranch&&k===e.pendingId&&(e.deps--,e.deps===0&&!te&&e.resolve()),kr(oe,"onResolve")},fallback(F){if(!T.pendingBranch)return;const{vnode:te,activeBranch:oe,parentComponent:W,container:K,isSVG:ue}=T;kr(te,"onFallback");const be=y(oe),Le=()=>{T.isInFallback&&(h(null,F,K,be,W,null,ue,a,c),Es(T,F))},Fe=F.transition&&F.transition.mode==="out-in";Fe&&(oe.transition.afterLeave=Le),T.isInFallback=!0,g(oe,W,null,!0),Fe||Le()},move(F,te,oe){T.activeBranch&&f(T.activeBranch,F,te,oe),T.container=F},next(){return T.activeBranch&&y(T.activeBranch)},registerDep(F,te){const oe=!!T.pendingBranch;oe&&T.deps++;const W=F.vnode.el;F.asyncDep.catch(K=>{Zr(K,F,0)}).then(K=>{if(F.isUnmounted||T.isUnmounted||T.pendingId!==F.suspenseId)return;F.asyncResolved=!0;const{vnode:ue}=F;gc(F,K,!1),W&&(ue.el=W);const be=!W&&F.subTree.el;te(F,ue,E(W||F.subTree.el),W?null:y(F.subTree),T,o,c),be&&C(be),ml(F,ue.el),oe&&--T.deps===0&&T.resolve()})},unmount(F,te){T.isUnmounted=!0,T.activeBranch&&g(T.activeBranch,n,F,te),T.pendingBranch&&g(T.pendingBranch,n,F,te)}};return T}function Wv(t,e,n,s,r,i,o,a,c){const l=e.suspense=yl(e,s,n,t.parentNode,document.createElement("div"),null,r,i,o,a,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(!1,!0),u}function Gv(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=eh(s?n.default:n),t.ssFallback=s?eh(n.fallback):Oe(Zt)}function eh(t){let e;if(Z(t)){const n=Ns&&t._c;n&&(t._d=!1,Xn()),t=t(),n&&(t._d=!0,e=yt,tp())}return z(t)&&(t=$v(t)),t=_t(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Qv(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):Md(t)}function Es(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t,r=n.el=e.el;s&&s.subTree===n&&(s.vnode.el=r,ml(s,r))}function Yv(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}const Ri={};function fr(t,e,n){return Vd(t,e,n)}function Vd(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=_e){var a;const c=md()===((a=Pe)==null?void 0:a.scope)?Pe:null;let l,u=!1,h=!1;if(Ae(t)?(l=()=>t.value,u=ro(t)):En(t)?(l=()=>t,s=!0):z(t)?(h=!0,u=t.some(T=>En(T)||ro(T)),l=()=>t.map(T=>{if(Ae(T))return T.value;if(En(T))return Hn(T);if(Z(T))return Tn(T,c,2)})):Z(t)?e?l=()=>Tn(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return f&&f(),bt(t,c,3,[g])}:l=Tt,e&&s){const T=l;l=()=>Hn(T())}let f,g=T=>{f=N.onStop=()=>{Tn(T,c,4)}},y;if(Or)if(g=Tt,e?n&&bt(e,c,3,[l(),h?[]:void 0,g]):l(),r==="sync"){const T=Ww();y=T.__watcherHandles||(T.__watcherHandles=[])}else return Tt;let E=h?new Array(t.length).fill(Ri):Ri;const C=()=>{if(N.active)if(e){const T=N.run();(s||u||(h?T.some((F,te)=>br(F,E[te])):br(T,E)))&&(f&&f(),bt(e,c,3,[T,E===Ri?void 0:h&&E[0]===Ri?[]:E,g]),E=T)}else N.run()};C.allowRecurse=!!e;let k;r==="sync"?k=C:r==="post"?k=()=>ot(C,c&&c.suspense):(C.pre=!0,c&&(C.id=c.uid),k=()=>gl(C));const N=new ol(l,k);e?n?C():E=N.run():r==="post"?ot(N.run.bind(N),c&&c.suspense):N.run();const V=()=>{N.stop(),c&&c.scope&&tl(c.scope.effects,N)};return y&&y.push(V),V}function Jv(t,e,n){const s=this.proxy,r=xe(t)?t.includes(".")?Bd(s,t):()=>s[t]:t.bind(s,s);let i;Z(e)?i=e:(i=e.handler,n=e);const o=Pe;Dn(this);const a=Vd(r,i.bind(s),n);return o?Dn(o):bn(),a}function Bd(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Hn(t,e){if(!we(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ae(t))Hn(t.value,e);else if(z(t))for(let n=0;n<t.length;n++)Hn(t[n],e);else if(Fo(t)||ws(t))t.forEach(n=>{Hn(n,e)});else if(hd(t))for(const n in t)Hn(t[n],e);return t}function H1(t,e){const n=at;if(n===null)return t;const s=Wo(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=_e]=e[i];o&&(Z(o)&&(o={mounted:o,updated:o}),o.deep&&Hn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Un(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Ks(),bt(c,n,8,[t.el,a,t,e]),zs())}}function jd(t,e){return Z(t)?(()=>$e({name:t.name},e,{setup:t}))():t}const qi=t=>!!t.type.__asyncLoader,qd=t=>t.type.__isKeepAlive;function Xv(t,e){Hd(t,"a",e)}function Zv(t,e){Hd(t,"da",e)}function Hd(t,e,n=Pe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ho(e,s,n),n){let r=n.parent;for(;r&&r.parent;)qd(r.parent.vnode)&&ew(s,e,n,r),r=r.parent}}function ew(t,e,n,s){const r=Ho(e,t,s,!0);Kd(()=>{tl(s[e],r)},n)}function Ho(t,e,n=Pe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ks(),Dn(n);const a=bt(e,n,t,o);return bn(),zs(),a});return s?r.unshift(i):r.push(i),i}}const on=t=>(e,n=Pe)=>(!Or||t==="sp")&&Ho(t,(...s)=>e(...s),n),tw=on("bm"),nw=on("m"),sw=on("bu"),rw=on("u"),iw=on("bum"),Kd=on("um"),ow=on("sp"),aw=on("rtg"),cw=on("rtc");function lw(t,e=Pe){Ho("ec",t,e)}const zd="components";function uw(t,e){return fw(zd,t,!0,e)||t}const hw=Symbol.for("v-ndc");function fw(t,e,n=!0,s=!1){const r=at||Pe;if(r){const i=r.type;if(t===zd){const a=Hw(i,!1);if(a&&(a===e||a===Bt(e)||a===$o(Bt(e))))return i}const o=th(r[t]||i[t],e)||th(r.appContext[t],e);return!o&&s?i:o}}function th(t,e){return t&&(t[e]||t[Bt(e)]||t[$o(Bt(e))])}function K1(t,e,n,s){let r;const i=n&&n[s];if(z(t)||xe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(we(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const uc=t=>t?rp(t)?Wo(t)||t.proxy:uc(t.parent):null,dr=$e(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>uc(t.parent),$root:t=>uc(t.root),$emit:t=>t.emit,$options:t=>vl(t),$forceUpdate:t=>t.f||(t.f=()=>gl(t.update)),$nextTick:t=>t.n||(t.n=pl.bind(t.proxy)),$watch:t=>Jv.bind(t)}),xa=(t,e)=>t!==_e&&!t.__isScriptSetup&&ae(t,e),dw={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(xa(s,e))return o[e]=1,s[e];if(r!==_e&&ae(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&ae(l,e))return o[e]=3,i[e];if(n!==_e&&ae(n,e))return o[e]=4,n[e];hc&&(o[e]=0)}}const u=dr[e];let h,f;if(u)return e==="$attrs"&&ct(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==_e&&ae(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ae(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return xa(r,e)?(r[e]=n,!0):s!==_e&&ae(s,e)?(s[e]=n,!0):ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==_e&&ae(t,o)||xa(e,o)||(a=i[0])&&ae(a,o)||ae(s,o)||ae(dr,o)||ae(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function nh(t){return z(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function z1(t){const e=$w();let n=t();return bn(),nl(n)&&(n=n.catch(s=>{throw Dn(e),s})),[n,()=>Dn(e)]}let hc=!0;function pw(t){const e=vl(t),n=t.proxy,s=t.ctx;hc=!1,e.beforeCreate&&sh(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:y,activated:E,deactivated:C,beforeDestroy:k,beforeUnmount:N,destroyed:V,unmounted:T,render:F,renderTracked:te,renderTriggered:oe,errorCaptured:W,serverPrefetch:K,expose:ue,inheritAttrs:be,components:Le,directives:Fe,filters:ut}=e;if(l&&gw(l,s,null),o)for(const he in o){const de=o[he];Z(de)&&(s[he]=de.bind(n))}if(r){const he=r.call(n,n);we(he)&&(t.data=Ws(he))}if(hc=!0,i)for(const he in i){const de=i[he],Ht=Z(de)?de.bind(n,n):Z(de.get)?de.get.bind(n,n):Tt,cn=!Z(de)&&Z(de.set)?de.set.bind(n):Tt,kt=dt({get:Ht,set:cn});Object.defineProperty(s,he,{enumerable:!0,configurable:!0,get:()=>kt.value,set:it=>kt.value=it})}if(a)for(const he in a)Wd(a[he],s,n,he);if(c){const he=Z(c)?c.call(n):c;Reflect.ownKeys(he).forEach(de=>{Hi(de,he[de])})}u&&sh(u,t,"c");function re(he,de){z(de)?de.forEach(Ht=>he(Ht.bind(n))):de&&he(de.bind(n))}if(re(tw,h),re(nw,f),re(sw,g),re(rw,y),re(Xv,E),re(Zv,C),re(lw,W),re(cw,te),re(aw,oe),re(iw,N),re(Kd,T),re(ow,K),z(ue))if(ue.length){const he=t.exposed||(t.exposed={});ue.forEach(de=>{Object.defineProperty(he,de,{get:()=>n[de],set:Ht=>n[de]=Ht})})}else t.exposed||(t.exposed={});F&&t.render===Tt&&(t.render=F),be!=null&&(t.inheritAttrs=be),Le&&(t.components=Le),Fe&&(t.directives=Fe)}function gw(t,e,n=Tt){z(t)&&(t=fc(t));for(const s in t){const r=t[s];let i;we(r)?"default"in r?i=St(r.from||s,r.default,!0):i=St(r.from||s):i=St(r),Ae(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function sh(t,e,n){bt(z(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Wd(t,e,n,s){const r=s.includes(".")?Bd(n,s):()=>n[s];if(xe(t)){const i=e[t];Z(i)&&fr(r,i)}else if(Z(t))fr(r,t.bind(n));else if(we(t))if(z(t))t.forEach(i=>Wd(i,e,n,s));else{const i=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(i)&&fr(r,i,t)}}function vl(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>oo(c,l,o,!0)),oo(c,e,o)),we(e)&&i.set(e,c),c}function oo(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&oo(t,i,n,!0),r&&r.forEach(o=>oo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=mw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const mw={data:rh,props:ih,emits:ih,methods:ar,computed:ar,beforeCreate:st,created:st,beforeMount:st,mounted:st,beforeUpdate:st,updated:st,beforeDestroy:st,beforeUnmount:st,destroyed:st,unmounted:st,activated:st,deactivated:st,errorCaptured:st,serverPrefetch:st,components:ar,directives:ar,watch:vw,provide:rh,inject:yw};function rh(t,e){return e?t?function(){return $e(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function yw(t,e){return ar(fc(t),fc(e))}function fc(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function st(t,e){return t?[...new Set([].concat(t,e))]:e}function ar(t,e){return t?$e(Object.create(null),t,e):e}function ih(t,e){return t?z(t)&&z(e)?[...new Set([...t,...e])]:$e(Object.create(null),nh(t),nh(e??{})):e}function vw(t,e){if(!t)return e;if(!e)return t;const n=$e(Object.create(null),t);for(const s in e)n[s]=st(t[s],e[s]);return n}function Gd(){return{app:null,config:{isNativeTag:My,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ww=0;function _w(t,e){return function(s,r=null){Z(s)||(s=$e({},s)),r!=null&&!we(r)&&(r=null);const i=Gd(),o=new Set;let a=!1;const c=i.app={_uid:ww++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Gw,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Z(l.install)?(o.add(l),l.install(c,...u)):Z(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=Oe(s,r);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,Wo(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Nr=c;try{return l()}finally{Nr=null}}};return c}}let Nr=null;function Hi(t,e){if(Pe){let n=Pe.provides;const s=Pe.parent&&Pe.parent.provides;s===n&&(n=Pe.provides=Object.create(s)),n[t]=e}}function St(t,e,n=!1){const s=Pe||at;if(s||Nr){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Nr._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Z(e)?e.call(s&&s.proxy):e}}function Ew(){return!!(Pe||at||Nr)}function Iw(t,e,n,s=!1){const r={},i={};to(i,zo,1),t.propsDefaults=Object.create(null),Qd(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Sv(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Tw(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ce(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(qo(t.emitsOptions,f))continue;const g=e[f];if(c)if(ae(i,f))g!==i[f]&&(i[f]=g,l=!0);else{const y=Bt(f);r[y]=dc(c,a,y,g,t,!1)}else g!==i[f]&&(i[f]=g,l=!0)}}}else{Qd(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!ae(e,h)&&((u=Hs(h))===h||!ae(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=dc(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ae(e,h))&&(delete i[h],l=!0)}l&&Xt(t,"set","$attrs")}function Qd(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Vi(c))continue;const l=e[c];let u;r&&ae(r,u=Bt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:qo(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=ce(n),l=a||_e;for(let u=0;u<i.length;u++){const h=i[u];n[h]=dc(r,c,h,l[h],t,!ae(l,h))}}return o}function dc(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ae(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Z(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Dn(r),s=l[n]=c.call(null,e),bn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Hs(n))&&(s=!0))}return s}function Yd(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!Z(t)){const u=h=>{c=!0;const[f,g]=Yd(h,e,!0);$e(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return we(t)&&s.set(t,vs),vs;if(z(i))for(let u=0;u<i.length;u++){const h=Bt(i[u]);oh(h)&&(o[h]=_e)}else if(i)for(const u in i){const h=Bt(u);if(oh(h)){const f=i[u],g=o[h]=z(f)||Z(f)?{type:f}:$e({},f);if(g){const y=lh(Boolean,g.type),E=lh(String,g.type);g[0]=y>-1,g[1]=E<0||y<E,(y>-1||ae(g,"default"))&&a.push(h)}}}const l=[o,a];return we(t)&&s.set(t,l),l}function oh(t){return t[0]!=="$"}function ah(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ch(t,e){return ah(t)===ah(e)}function lh(t,e){return z(e)?e.findIndex(n=>ch(n,t)):Z(e)&&ch(e,t)?0:-1}const Jd=t=>t[0]==="_"||t==="$stable",wl=t=>z(t)?t.map(_t):[_t(t)],bw=(t,e,n)=>{if(e._n)return e;const s=ji((...r)=>wl(e(...r)),n);return s._c=!1,s},Xd=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Jd(r))continue;const i=t[r];if(Z(i))e[r]=bw(r,i,s);else if(i!=null){const o=wl(i);e[r]=()=>o}}},Zd=(t,e)=>{const n=wl(e);t.slots.default=()=>n},Sw=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ce(e),to(e,"_",n)):Xd(e,t.slots={})}else t.slots={},e&&Zd(t,e);to(t.slots,zo,1)},Cw=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=_e;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:($e(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Xd(e,r)),o=e}else e&&(Zd(t,e),o={default:1});if(i)for(const a in r)!Jd(a)&&!(a in o)&&delete r[a]};function pc(t,e,n,s,r=!1){if(z(t)){t.forEach((f,g)=>pc(f,e&&(z(e)?e[g]:e),n,s,r));return}if(qi(s)&&!r)return;const i=s.shapeFlag&4?Wo(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===_e?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(xe(l)?(u[l]=null,ae(h,l)&&(h[l]=null)):Ae(l)&&(l.value=null)),Z(c))Tn(c,a,12,[o,u]);else{const f=xe(c),g=Ae(c);if(f||g){const y=()=>{if(t.f){const E=f?ae(h,c)?h[c]:u[c]:c.value;r?z(E)&&tl(E,i):z(E)?E.includes(i)||E.push(i):f?(u[c]=[i],ae(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ae(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,ot(y,n)):y()}}}const ot=Qv;function Aw(t){return Rw(t)}function Rw(t,e){const n=ic();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=Tt,insertStaticContent:y}=t,E=(d,p,m,v=null,I=null,b=null,P=!1,R=null,D=!!p.dynamicChildren)=>{if(d===p)return;d&&!gn(d,p)&&(v=w(d),it(d,I,b,!0),d=null),p.patchFlag===-2&&(D=!1,p.dynamicChildren=null);const{type:S,ref:q,shapeFlag:U}=p;switch(S){case Ko:C(d,p,m,v);break;case Zt:k(d,p,m,v);break;case Pa:d==null&&N(p,m,v,P);break;case Wt:Le(d,p,m,v,I,b,P,R,D);break;default:U&1?F(d,p,m,v,I,b,P,R,D):U&6?Fe(d,p,m,v,I,b,P,R,D):(U&64||U&128)&&S.process(d,p,m,v,I,b,P,R,D,O)}q!=null&&I&&pc(q,d&&d.ref,b,p||d,!p)},C=(d,p,m,v)=>{if(d==null)s(p.el=a(p.children),m,v);else{const I=p.el=d.el;p.children!==d.children&&l(I,p.children)}},k=(d,p,m,v)=>{d==null?s(p.el=c(p.children||""),m,v):p.el=d.el},N=(d,p,m,v)=>{[d.el,d.anchor]=y(d.children,p,m,v,d.el,d.anchor)},V=({el:d,anchor:p},m,v)=>{let I;for(;d&&d!==p;)I=f(d),s(d,m,v),d=I;s(p,m,v)},T=({el:d,anchor:p})=>{let m;for(;d&&d!==p;)m=f(d),r(d),d=m;r(p)},F=(d,p,m,v,I,b,P,R,D)=>{P=P||p.type==="svg",d==null?te(p,m,v,I,b,P,R,D):K(d,p,I,b,P,R,D)},te=(d,p,m,v,I,b,P,R)=>{let D,S;const{type:q,props:U,shapeFlag:H,transition:Y,dirs:ne}=d;if(D=d.el=o(d.type,b,U&&U.is,U),H&8?u(D,d.children):H&16&&W(d.children,D,null,v,I,b&&q!=="foreignObject",P,R),ne&&Un(d,null,v,"created"),oe(D,d,d.scopeId,P,v),U){for(const ye in U)ye!=="value"&&!Vi(ye)&&i(D,ye,null,U[ye],b,d.children,v,I,Ke);"value"in U&&i(D,"value",null,U.value),(S=U.onVnodeBeforeMount)&&Dt(S,v,d)}ne&&Un(d,null,v,"beforeMount");const ve=(!I||I&&!I.pendingBranch)&&Y&&!Y.persisted;ve&&Y.beforeEnter(D),s(D,p,m),((S=U&&U.onVnodeMounted)||ve||ne)&&ot(()=>{S&&Dt(S,v,d),ve&&Y.enter(D),ne&&Un(d,null,v,"mounted")},I)},oe=(d,p,m,v,I)=>{if(m&&g(d,m),v)for(let b=0;b<v.length;b++)g(d,v[b]);if(I){let b=I.subTree;if(p===b){const P=I.vnode;oe(d,P,P.scopeId,P.slotScopeIds,I.parent)}}},W=(d,p,m,v,I,b,P,R,D=0)=>{for(let S=D;S<d.length;S++){const q=d[S]=R?dn(d[S]):_t(d[S]);E(null,q,p,m,v,I,b,P,R)}},K=(d,p,m,v,I,b,P)=>{const R=p.el=d.el;let{patchFlag:D,dynamicChildren:S,dirs:q}=p;D|=d.patchFlag&16;const U=d.props||_e,H=p.props||_e;let Y;m&&$n(m,!1),(Y=H.onVnodeBeforeUpdate)&&Dt(Y,m,p,d),q&&Un(p,d,m,"beforeUpdate"),m&&$n(m,!0);const ne=I&&p.type!=="foreignObject";if(S?ue(d.dynamicChildren,S,R,m,v,ne,b):P||de(d,p,R,null,m,v,ne,b,!1),D>0){if(D&16)be(R,p,U,H,m,v,I);else if(D&2&&U.class!==H.class&&i(R,"class",null,H.class,I),D&4&&i(R,"style",U.style,H.style,I),D&8){const ve=p.dynamicProps;for(let ye=0;ye<ve.length;ye++){const Re=ve[ye],wt=U[Re],us=H[Re];(us!==wt||Re==="value")&&i(R,Re,wt,us,I,d.children,m,v,Ke)}}D&1&&d.children!==p.children&&u(R,p.children)}else!P&&S==null&&be(R,p,U,H,m,v,I);((Y=H.onVnodeUpdated)||q)&&ot(()=>{Y&&Dt(Y,m,p,d),q&&Un(p,d,m,"updated")},v)},ue=(d,p,m,v,I,b,P)=>{for(let R=0;R<p.length;R++){const D=d[R],S=p[R],q=D.el&&(D.type===Wt||!gn(D,S)||D.shapeFlag&70)?h(D.el):m;E(D,S,q,null,v,I,b,P,!0)}},be=(d,p,m,v,I,b,P)=>{if(m!==v){if(m!==_e)for(const R in m)!Vi(R)&&!(R in v)&&i(d,R,m[R],null,P,p.children,I,b,Ke);for(const R in v){if(Vi(R))continue;const D=v[R],S=m[R];D!==S&&R!=="value"&&i(d,R,S,D,P,p.children,I,b,Ke)}"value"in v&&i(d,"value",m.value,v.value)}},Le=(d,p,m,v,I,b,P,R,D)=>{const S=p.el=d?d.el:a(""),q=p.anchor=d?d.anchor:a("");let{patchFlag:U,dynamicChildren:H,slotScopeIds:Y}=p;Y&&(R=R?R.concat(Y):Y),d==null?(s(S,m,v),s(q,m,v),W(p.children,m,q,I,b,P,R,D)):U>0&&U&64&&H&&d.dynamicChildren?(ue(d.dynamicChildren,H,m,I,b,P,R),(p.key!=null||I&&p===I.subTree)&&ep(d,p,!0)):de(d,p,m,q,I,b,P,R,D)},Fe=(d,p,m,v,I,b,P,R,D)=>{p.slotScopeIds=R,d==null?p.shapeFlag&512?I.ctx.activate(p,m,v,P,D):ut(p,m,v,I,b,P,D):nt(d,p,D)},ut=(d,p,m,v,I,b,P)=>{const R=d.component=Uw(d,v,I);if(qd(d)&&(R.ctx.renderer=O),Vw(R),R.asyncDep){if(I&&I.registerDep(R,re),!d.el){const D=R.subTree=Oe(Zt);k(null,D,p,m)}return}re(R,d,p,m,I,b,P)},nt=(d,p,m)=>{const v=p.component=d.component;if(jv(d,p,m))if(v.asyncDep&&!v.asyncResolved){he(v,p,m);return}else v.next=p,Lv(v.update),v.update();else p.el=d.el,v.vnode=p},re=(d,p,m,v,I,b,P)=>{const R=()=>{if(d.isMounted){let{next:q,bu:U,u:H,parent:Y,vnode:ne}=d,ve=q,ye;$n(d,!1),q?(q.el=ne.el,he(d,q,P)):q=ne,U&&Bi(U),(ye=q.props&&q.props.onVnodeBeforeUpdate)&&Dt(ye,Y,q,ne),$n(d,!0);const Re=Oa(d),wt=d.subTree;d.subTree=Re,E(wt,Re,h(wt.el),w(wt),d,I,b),q.el=Re.el,ve===null&&ml(d,Re.el),H&&ot(H,I),(ye=q.props&&q.props.onVnodeUpdated)&&ot(()=>Dt(ye,Y,q,ne),I)}else{let q;const{el:U,props:H}=p,{bm:Y,m:ne,parent:ve}=d,ye=qi(p);if($n(d,!1),Y&&Bi(Y),!ye&&(q=H&&H.onVnodeBeforeMount)&&Dt(q,ve,p),$n(d,!0),U&&pe){const Re=()=>{d.subTree=Oa(d),pe(U,d.subTree,d,I,null)};ye?p.type.__asyncLoader().then(()=>!d.isUnmounted&&Re()):Re()}else{const Re=d.subTree=Oa(d);E(null,Re,m,v,d,I,b),p.el=Re.el}if(ne&&ot(ne,I),!ye&&(q=H&&H.onVnodeMounted)){const Re=p;ot(()=>Dt(q,ve,Re),I)}(p.shapeFlag&256||ve&&qi(ve.vnode)&&ve.vnode.shapeFlag&256)&&d.a&&ot(d.a,I),d.isMounted=!0,p=m=v=null}},D=d.effect=new ol(R,()=>gl(S),d.scope),S=d.update=()=>D.run();S.id=d.uid,$n(d,!0),S()},he=(d,p,m)=>{p.component=d;const v=d.vnode.props;d.vnode=p,d.next=null,Tw(d,p.props,v,m),Cw(d,p.children,m),Ks(),Xu(),zs()},de=(d,p,m,v,I,b,P,R,D=!1)=>{const S=d&&d.children,q=d?d.shapeFlag:0,U=p.children,{patchFlag:H,shapeFlag:Y}=p;if(H>0){if(H&128){cn(S,U,m,v,I,b,P,R,D);return}else if(H&256){Ht(S,U,m,v,I,b,P,R,D);return}}Y&8?(q&16&&Ke(S,I,b),U!==S&&u(m,U)):q&16?Y&16?cn(S,U,m,v,I,b,P,R,D):Ke(S,I,b,!0):(q&8&&u(m,""),Y&16&&W(U,m,v,I,b,P,R,D))},Ht=(d,p,m,v,I,b,P,R,D)=>{d=d||vs,p=p||vs;const S=d.length,q=p.length,U=Math.min(S,q);let H;for(H=0;H<U;H++){const Y=p[H]=D?dn(p[H]):_t(p[H]);E(d[H],Y,m,null,I,b,P,R,D)}S>q?Ke(d,I,b,!0,!1,U):W(p,m,v,I,b,P,R,D,U)},cn=(d,p,m,v,I,b,P,R,D)=>{let S=0;const q=p.length;let U=d.length-1,H=q-1;for(;S<=U&&S<=H;){const Y=d[S],ne=p[S]=D?dn(p[S]):_t(p[S]);if(gn(Y,ne))E(Y,ne,m,null,I,b,P,R,D);else break;S++}for(;S<=U&&S<=H;){const Y=d[U],ne=p[H]=D?dn(p[H]):_t(p[H]);if(gn(Y,ne))E(Y,ne,m,null,I,b,P,R,D);else break;U--,H--}if(S>U){if(S<=H){const Y=H+1,ne=Y<q?p[Y].el:v;for(;S<=H;)E(null,p[S]=D?dn(p[S]):_t(p[S]),m,ne,I,b,P,R,D),S++}}else if(S>H)for(;S<=U;)it(d[S],I,b,!0),S++;else{const Y=S,ne=S,ve=new Map;for(S=ne;S<=H;S++){const ht=p[S]=D?dn(p[S]):_t(p[S]);ht.key!=null&&ve.set(ht.key,S)}let ye,Re=0;const wt=H-ne+1;let us=!1,Vu=0;const nr=new Array(wt);for(S=0;S<wt;S++)nr[S]=0;for(S=Y;S<=U;S++){const ht=d[S];if(Re>=wt){it(ht,I,b,!0);continue}let Nt;if(ht.key!=null)Nt=ve.get(ht.key);else for(ye=ne;ye<=H;ye++)if(nr[ye-ne]===0&&gn(ht,p[ye])){Nt=ye;break}Nt===void 0?it(ht,I,b,!0):(nr[Nt-ne]=S+1,Nt>=Vu?Vu=Nt:us=!0,E(ht,p[Nt],m,null,I,b,P,R,D),Re++)}const Bu=us?kw(nr):vs;for(ye=Bu.length-1,S=wt-1;S>=0;S--){const ht=ne+S,Nt=p[ht],ju=ht+1<q?p[ht+1].el:v;nr[S]===0?E(null,Nt,m,ju,I,b,P,R,D):us&&(ye<0||S!==Bu[ye]?kt(Nt,m,ju,2):ye--)}}},kt=(d,p,m,v,I=null)=>{const{el:b,type:P,transition:R,children:D,shapeFlag:S}=d;if(S&6){kt(d.component.subTree,p,m,v);return}if(S&128){d.suspense.move(p,m,v);return}if(S&64){P.move(d,p,m,O);return}if(P===Wt){s(b,p,m);for(let U=0;U<D.length;U++)kt(D[U],p,m,v);s(d.anchor,p,m);return}if(P===Pa){V(d,p,m);return}if(v!==2&&S&1&&R)if(v===0)R.beforeEnter(b),s(b,p,m),ot(()=>R.enter(b),I);else{const{leave:U,delayLeave:H,afterLeave:Y}=R,ne=()=>s(b,p,m),ve=()=>{U(b,()=>{ne(),Y&&Y()})};H?H(b,ne,ve):ve()}else s(b,p,m)},it=(d,p,m,v=!1,I=!1)=>{const{type:b,props:P,ref:R,children:D,dynamicChildren:S,shapeFlag:q,patchFlag:U,dirs:H}=d;if(R!=null&&pc(R,null,m,d,!0),q&256){p.ctx.deactivate(d);return}const Y=q&1&&H,ne=!qi(d);let ve;if(ne&&(ve=P&&P.onVnodeBeforeUnmount)&&Dt(ve,p,d),q&6)Ii(d.component,m,v);else{if(q&128){d.suspense.unmount(m,v);return}Y&&Un(d,null,p,"beforeUnmount"),q&64?d.type.remove(d,p,m,I,O,v):S&&(b!==Wt||U>0&&U&64)?Ke(S,p,m,!1,!0):(b===Wt&&U&384||!I&&q&16)&&Ke(D,p,m),v&&cs(d)}(ne&&(ve=P&&P.onVnodeUnmounted)||Y)&&ot(()=>{ve&&Dt(ve,p,d),Y&&Un(d,null,p,"unmounted")},m)},cs=d=>{const{type:p,el:m,anchor:v,transition:I}=d;if(p===Wt){ls(m,v);return}if(p===Pa){T(d);return}const b=()=>{r(m),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(d.shapeFlag&1&&I&&!I.persisted){const{leave:P,delayLeave:R}=I,D=()=>P(m,b);R?R(d.el,b,D):D()}else b()},ls=(d,p)=>{let m;for(;d!==p;)m=f(d),r(d),d=m;r(p)},Ii=(d,p,m)=>{const{bum:v,scope:I,update:b,subTree:P,um:R}=d;v&&Bi(v),I.stop(),b&&(b.active=!1,it(P,d,p,m)),R&&ot(R,p),ot(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ke=(d,p,m,v=!1,I=!1,b=0)=>{for(let P=b;P<d.length;P++)it(d[P],p,m,v,I)},w=d=>d.shapeFlag&6?w(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),L=(d,p,m)=>{d==null?p._vnode&&it(p._vnode,null,null,!0):E(p._vnode||null,d,p,null,null,null,m),Xu(),Ld(),p._vnode=d},O={p:E,um:it,m:kt,r:cs,mt:ut,mc:W,pc:de,pbc:ue,n:w,o:t};let B,pe;return e&&([B,pe]=e(O)),{render:L,hydrate:B,createApp:_w(L,B)}}function $n({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ep(t,e,n=!1){const s=t.children,r=e.children;if(z(s)&&z(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=dn(r[i]),a.el=o.el),n||ep(o,a)),a.type===Ko&&(a.el=o.el)}}function kw(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Nw=t=>t.__isTeleport,Wt=Symbol.for("v-fgt"),Ko=Symbol.for("v-txt"),Zt=Symbol.for("v-cmt"),Pa=Symbol.for("v-stc"),pr=[];let yt=null;function Xn(t=!1){pr.push(yt=t?null:[])}function tp(){pr.pop(),yt=pr[pr.length-1]||null}let Ns=1;function uh(t){Ns+=t}function np(t){return t.dynamicChildren=Ns>0?yt||vs:null,tp(),Ns>0&&yt&&yt.push(t),t}function Dr(t,e,n,s,r,i){return np(Lt(t,e,n,s,r,i,!0))}function Dw(t,e,n,s,r){return np(Oe(t,e,n,s,r,!0))}function ao(t){return t?t.__v_isVNode===!0:!1}function gn(t,e){return t.type===e.type&&t.key===e.key}const zo="__vInternal",sp=({key:t})=>t??null,Ki=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?xe(t)||Ae(t)||Z(t)?{i:at,r:t,k:e,f:!!n}:t:null);function Lt(t,e=null,n=null,s=0,r=null,i=t===Wt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&sp(e),ref:e&&Ki(e),scopeId:$d,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:at};return a?(_l(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=xe(n)?8:16),Ns>0&&!o&&yt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&yt.push(c),c}const Oe=Ow;function Ow(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===hw)&&(t=Zt),ao(t)){const a=Ds(t,e,!0);return n&&_l(a,n),Ns>0&&!i&&yt&&(a.shapeFlag&6?yt[yt.indexOf(t)]=a:yt.push(a)),a.patchFlag|=-2,a}if(Kw(t)&&(t=t.__vccOpts),e){e=xw(e);let{class:a,style:c}=e;a&&!xe(a)&&(e.class=Sr(a)),we(c)&&(Rd(c)&&!z(c)&&(c=$e({},c)),e.style=rl(c))}const o=xe(t)?1:qv(t)?128:Nw(t)?64:we(t)?4:Z(t)?2:0;return Lt(t,e,n,s,r,o,i,!0)}function xw(t){return t?Rd(t)||zo in t?$e({},t):t:null}function Ds(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Mw(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&sp(a),ref:e&&e.ref?n&&r?z(r)?r.concat(Ki(e)):[r,Ki(e)]:Ki(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Wt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ds(t.ssContent),ssFallback:t.ssFallback&&Ds(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function zi(t=" ",e=0){return Oe(Ko,null,t,e)}function Pw(t="",e=!1){return e?(Xn(),Dw(Zt,null,t)):Oe(Zt,null,t)}function _t(t){return t==null||typeof t=="boolean"?Oe(Zt):z(t)?Oe(Wt,null,t.slice()):typeof t=="object"?dn(t):Oe(Ko,null,String(t))}function dn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ds(t)}function _l(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),_l(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(zo in e)?e._ctx=at:r===3&&at&&(at.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:at},n=32):(e=String(e),s&64?(n=16,e=[zi(e)]):n=8);t.children=e,t.shapeFlag|=n}function Mw(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Sr([e.class,s.class]));else if(r==="style")e.style=rl([e.style,s.style]);else if(Lo(r)){const i=e[r],o=s[r];o&&i!==o&&!(z(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Dt(t,e,n,s=null){bt(t,e,7,[n,s])}const Lw=Gd();let Fw=0;function Uw(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Lw,i={uid:Fw++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new pd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yd(s,r),emitsOptions:Ud(s,r),emit:null,emitted:null,propsDefaults:_e,inheritAttrs:s.inheritAttrs,ctx:_e,data:_e,props:_e,attrs:_e,slots:_e,refs:_e,setupState:_e,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Uv.bind(null,i),t.ce&&t.ce(i),i}let Pe=null;const $w=()=>Pe||at;let El,hs,hh="__VUE_INSTANCE_SETTERS__";(hs=ic()[hh])||(hs=ic()[hh]=[]),hs.push(t=>Pe=t),El=t=>{hs.length>1?hs.forEach(e=>e(t)):hs[0](t)};const Dn=t=>{El(t),t.scope.on()},bn=()=>{Pe&&Pe.scope.off(),El(null)};function rp(t){return t.vnode.shapeFlag&4}let Or=!1;function Vw(t,e=!1){Or=e;const{props:n,children:s}=t.vnode,r=rp(t);Iw(t,n,r,e),Sw(t,s);const i=r?Bw(t,e):void 0;return Or=!1,i}function Bw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=jo(new Proxy(t.ctx,dw));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?qw(t):null;Dn(t),Ks();const i=Tn(s,t,0,[t.props,r]);if(zs(),bn(),nl(i)){if(i.then(bn,bn),e)return i.then(o=>{gc(t,o,e)}).catch(o=>{Zr(o,t,0)});t.asyncDep=i}else gc(t,i,e)}else ip(t,e)}function gc(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:we(e)&&(t.setupState=Od(e)),ip(t,n)}let fh;function ip(t,e,n){const s=t.type;if(!t.render){if(!e&&fh&&!s.render){const r=s.template||vl(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=$e($e({isCustomElement:i,delimiters:a},o),c);s.render=fh(r,l)}}t.render=s.render||Tt}Dn(t),Ks(),pw(t),zs(),bn()}function jw(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ct(t,"get","$attrs"),e[n]}}))}function qw(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return jw(t)},slots:t.slots,emit:t.emit,expose:e}}function Wo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Od(jo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in dr)return dr[n](t)},has(e,n){return n in e||n in dr}}))}function Hw(t,e=!0){return Z(t)?t.displayName||t.name:t.name||e&&t.__name}function Kw(t){return Z(t)&&"__vccOpts"in t}const dt=(t,e)=>xv(t,e,Or);function op(t,e,n){const s=arguments.length;return s===2?we(e)&&!z(e)?ao(e)?Oe(t,null,[e]):Oe(t,e):Oe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&ao(n)&&(n=[n]),Oe(t,e,n))}const zw=Symbol.for("v-scx"),Ww=()=>St(zw),Gw="3.3.4",Qw="http://www.w3.org/2000/svg",jn=typeof document<"u"?document:null,dh=jn&&jn.createElement("template"),Yw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?jn.createElementNS(Qw,t):jn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>jn.createTextNode(t),createComment:t=>jn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>jn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{dh.innerHTML=s?`<svg>${t}</svg>`:t;const a=dh.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Jw(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Xw(t,e,n){const s=t.style,r=xe(n);if(n&&!r){if(e&&!xe(e))for(const i in e)n[i]==null&&mc(s,i,"");for(const i in n)mc(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const ph=/\s*!important$/;function mc(t,e,n){if(z(n))n.forEach(s=>mc(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Zw(t,e);ph.test(n)?t.setProperty(Hs(s),n.replace(ph,""),"important"):t[s]=n}}const gh=["Webkit","Moz","ms"],Ma={};function Zw(t,e){const n=Ma[e];if(n)return n;let s=Bt(e);if(s!=="filter"&&s in t)return Ma[e]=s;s=$o(s);for(let r=0;r<gh.length;r++){const i=gh[r]+s;if(i in t)return Ma[e]=i}return e}const mh="http://www.w3.org/1999/xlink";function e_(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(mh,e.slice(6,e.length)):t.setAttributeNS(mh,e,n);else{const i=Wy(e);n==null||i&&!fd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function t_(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=fd(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function qn(t,e,n,s){t.addEventListener(e,n,s)}function n_(t,e,n,s){t.removeEventListener(e,n,s)}function s_(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=r_(e);if(s){const l=i[e]=a_(s,r);qn(t,a,l,c)}else o&&(n_(t,a,o,c),i[e]=void 0)}}const yh=/(?:Once|Passive|Capture)$/;function r_(t){let e;if(yh.test(t)){e={};let s;for(;s=t.match(yh);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Hs(t.slice(2)),e]}let La=0;const i_=Promise.resolve(),o_=()=>La||(i_.then(()=>La=0),La=Date.now());function a_(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;bt(c_(s,n.value),e,5,[s])};return n.value=t,n.attached=o_(),n}function c_(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const vh=/^on[a-z]/,l_=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Jw(t,s,r):e==="style"?Xw(t,n,s):Lo(e)?el(e)||s_(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):u_(t,e,s,r))?t_(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),e_(t,e,s,r))};function u_(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&vh.test(e)&&Z(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||vh.test(e)&&xe(n)?!1:e in t}const co=t=>{const e=t.props["onUpdate:modelValue"]||!1;return z(e)?n=>Bi(e,n):e};function h_(t){t.target.composing=!0}function wh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const W1={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=co(r);const i=s||r.props&&r.props.type==="number";qn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=no(a)),t._assign(a)}),n&&qn(t,"change",()=>{t.value=t.value.trim()}),e||(qn(t,"compositionstart",h_),qn(t,"compositionend",wh),qn(t,"change",wh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=co(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&no(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},G1={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Fo(e);qn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?no(lo(o)):lo(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=co(s)},mounted(t,{value:e}){_h(t,e)},beforeUpdate(t,e,n){t._assign=co(n)},updated(t,{value:e}){_h(t,e)}};function _h(t,e){const n=t.multiple;if(!(n&&!z(e)&&!Fo(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=lo(i);if(n)z(e)?i.selected=Qy(e,o)>-1:i.selected=e.has(o);else if(Vo(lo(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function lo(t){return"_value"in t?t._value:t.value}const f_=$e({patchProp:l_},Yw);let Eh;function d_(){return Eh||(Eh=Aw(f_))}const p_=(...t)=>{const e=d_().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=g_(s);if(!r)return;const i=e._component;!Z(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function g_(t){return xe(t)?document.querySelector(t):t}var m_=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let ap;const Go=t=>ap=t,cp=Symbol();function yc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var gr;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(gr||(gr={}));function y_(){const t=gd(!0),e=t.run(()=>fl({}));let n=[],s=[];const r=jo({install(i){Go(r),r._a=i,i.provide(cp,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!m_?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const lp=()=>{};function Ih(t,e,n,s=lp){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&md()&&Jy(r),r}function fs(t,...e){t.slice().forEach(n=>{n(...e)})}const v_=t=>t();function vc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];yc(r)&&yc(s)&&t.hasOwnProperty(n)&&!Ae(s)&&!En(s)?t[n]=vc(r,s):t[n]=s}return t}const w_=Symbol();function __(t){return!yc(t)||!t.hasOwnProperty(w_)}const{assign:fn}=Object;function E_(t){return!!(Ae(t)&&t.effect)}function I_(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=kv(n.state.value[t]);return fn(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=jo(dt(()=>{Go(n);const g=n._s.get(t);return o[f].call(g,g)})),h),{}))}return c=up(t,l,e,n,s,!0),c}function up(t,e,n={},s,r,i){let o;const a=fn({actions:{}},n),c={deep:!0};let l,u,h=[],f=[],g;const y=s.state.value[t];!i&&!y&&(s.state.value[t]={}),fl({});let E;function C(W){let K;l=u=!1,typeof W=="function"?(W(s.state.value[t]),K={type:gr.patchFunction,storeId:t,events:g}):(vc(s.state.value[t],W),K={type:gr.patchObject,payload:W,storeId:t,events:g});const ue=E=Symbol();pl().then(()=>{E===ue&&(l=!0)}),u=!0,fs(h,K,s.state.value[t])}const k=i?function(){const{state:K}=n,ue=K?K():{};this.$patch(be=>{fn(be,ue)})}:lp;function N(){o.stop(),h=[],f=[],s._s.delete(t)}function V(W,K){return function(){Go(s);const ue=Array.from(arguments),be=[],Le=[];function Fe(re){be.push(re)}function ut(re){Le.push(re)}fs(f,{args:ue,name:W,store:F,after:Fe,onError:ut});let nt;try{nt=K.apply(this&&this.$id===t?this:F,ue)}catch(re){throw fs(Le,re),re}return nt instanceof Promise?nt.then(re=>(fs(be,re),re)).catch(re=>(fs(Le,re),Promise.reject(re))):(fs(be,nt),nt)}}const T={_p:s,$id:t,$onAction:Ih.bind(null,f),$patch:C,$reset:k,$subscribe(W,K={}){const ue=Ih(h,W,K.detached,()=>be()),be=o.run(()=>fr(()=>s.state.value[t],Le=>{(K.flush==="sync"?u:l)&&W({storeId:t,type:gr.direct,events:g},Le)},fn({},c,K)));return ue},$dispose:N},F=Ws(T);s._s.set(t,F);const te=s._a&&s._a.runWithContext||v_,oe=s._e.run(()=>(o=gd(),te(()=>o.run(e))));for(const W in oe){const K=oe[W];if(Ae(K)&&!E_(K)||En(K))i||(y&&__(K)&&(Ae(K)?K.value=y[W]:vc(K,y[W])),s.state.value[t][W]=K);else if(typeof K=="function"){const ue=V(W,K);oe[W]=ue,a.actions[W]=K}}return fn(F,oe),fn(ce(F),oe),Object.defineProperty(F,"$state",{get:()=>s.state.value[t],set:W=>{C(K=>{fn(K,W)})}}),s._p.forEach(W=>{fn(F,o.run(()=>W({store:F,app:s._a,pinia:s,options:a})))}),y&&i&&n.hydrate&&n.hydrate(F.$state,y),l=!0,u=!0,F}function T_(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=Ew();return a=a||(l?St(cp,null):null),a&&Go(a),a=ap,a._s.has(s)||(i?up(s,e,r,a):I_(s,r,a)),a._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ps=typeof window<"u";function b_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ge=Object.assign;function Fa(t,e){const n={};for(const s in e){const r=e[s];n[s]=Ct(r)?r.map(t):t(r)}return n}const mr=()=>{},Ct=Array.isArray,S_=/\/$/,C_=t=>t.replace(S_,"");function Ua(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=N_(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function A_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Th(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function R_(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Os(e.matched[s],n.matched[r])&&hp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Os(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function hp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!k_(t[n],e[n]))return!1;return!0}function k_(t,e){return Ct(t)?bh(t,e):Ct(e)?bh(e,t):t===e}function bh(t,e){return Ct(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function N_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var xr;(function(t){t.pop="pop",t.push="push"})(xr||(xr={}));var yr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(yr||(yr={}));function D_(t){if(!t)if(ps){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),C_(t)}const O_=/^[^#]+#/;function x_(t,e){return t.replace(O_,"#")+e}function P_(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Qo=()=>({left:window.pageXOffset,top:window.pageYOffset});function M_(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=P_(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Sh(t,e){return(history.state?history.state.position-e:-1)+t}const wc=new Map;function L_(t,e){wc.set(t,e)}function F_(t){const e=wc.get(t);return wc.delete(t),e}let U_=()=>location.protocol+"//"+location.host;function fp(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Th(c,"")}return Th(n,t)+s+r}function $_(t,e,n,s){let r=[],i=[],o=null;const a=({state:f})=>{const g=fp(t,location),y=n.value,E=e.value;let C=0;if(f){if(n.value=g,e.value=f,o&&o===y){o=null;return}C=E?f.position-E.position:0}else s(g);r.forEach(k=>{k(n.value,y,{delta:C,type:xr.pop,direction:C?C>0?yr.forward:yr.back:yr.unknown})})};function c(){o=n.value}function l(f){r.push(f);const g=()=>{const y=r.indexOf(f);y>-1&&r.splice(y,1)};return i.push(g),g}function u(){const{history:f}=window;f.state&&f.replaceState(ge({},f.state,{scroll:Qo()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Ch(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Qo():null}}function V_(t){const{history:e,location:n}=window,s={value:fp(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:U_()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function o(c,l){const u=ge({},e.state,Ch(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=ge({},r.value,e.state,{forward:c,scroll:Qo()});i(u.current,u,!0);const h=ge({},Ch(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function B_(t){t=D_(t);const e=V_(t),n=$_(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ge({location:"",base:t,go:s,createHref:x_.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function j_(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),B_(t)}function q_(t){return typeof t=="string"||t&&typeof t=="object"}function dp(t){return typeof t=="string"||typeof t=="symbol"}const un={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},pp=Symbol("");var Ah;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ah||(Ah={}));function xs(t,e){return ge(new Error,{type:t,[pp]:!0},e)}function Kt(t,e){return t instanceof Error&&pp in t&&(e==null||!!(t.type&e))}const Rh="[^/]+?",H_={sensitive:!1,strict:!1,start:!0,end:!0},K_=/[.+*?^${}()[\]/\\]/g;function z_(t,e){const n=ge({},H_,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const f=l[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(K_,"\\$&"),g+=40;else if(f.type===1){const{value:y,repeatable:E,optional:C,regexp:k}=f;i.push({name:y,repeatable:E,optional:C});const N=k||Rh;if(N!==Rh){g+=10;try{new RegExp(`(${N})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${y}" (${N}): `+T.message)}}let V=E?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;h||(V=C&&l.length<2?`(?:/${V})`:"/"+V),C&&(V+="?"),r+=V,g+=20,C&&(g+=-8),E&&(g+=-20),N===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",y=i[f-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:y,repeatable:E,optional:C}=g,k=y in l?l[y]:"";if(Ct(k)&&!E)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const N=Ct(k)?k.join("/"):k;if(!N)if(C)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=N}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function W_(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function G_(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=W_(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(kh(s))return 1;if(kh(r))return-1}return r.length-s.length}function kh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Q_={type:0,value:""},Y_=/[a-zA-Z0-9_]/;function J_(t){if(!t)return[[]];if(t==="/")return[[Q_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:c==="("?n=2:Y_.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function X_(t,e,n){const s=z_(J_(t.path),n),r=ge(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Z_(t,e){const n=[],s=new Map;e=Oh({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,f){const g=!f,y=e0(u);y.aliasOf=f&&f.record;const E=Oh(e,u),C=[y];if("alias"in u){const V=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of V)C.push(ge({},y,{components:f?f.record.components:y.components,path:T,aliasOf:f?f.record:y}))}let k,N;for(const V of C){const{path:T}=V;if(h&&T[0]!=="/"){const F=h.record.path,te=F[F.length-1]==="/"?"":"/";V.path=h.record.path+(T&&te+T)}if(k=X_(V,h,E),f?f.alias.push(k):(N=N||k,N!==k&&N.alias.push(k),g&&u.name&&!Dh(k)&&o(u.name)),y.children){const F=y.children;for(let te=0;te<F.length;te++)i(F[te],k,f&&f.children[te])}f=f||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return N?()=>{o(N)}:mr}function o(u){if(dp(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&G_(u,n[h])>=0&&(u.record.path!==n[h].record.path||!gp(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Dh(u)&&s.set(u.record.name,u)}function l(u,h){let f,g={},y,E;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw xs(1,{location:u});E=f.record.name,g=ge(Nh(h.params,f.keys.filter(N=>!N.optional).map(N=>N.name)),u.params&&Nh(u.params,f.keys.map(N=>N.name))),y=f.stringify(g)}else if("path"in u)y=u.path,f=n.find(N=>N.re.test(y)),f&&(g=f.parse(y),E=f.record.name);else{if(f=h.name?s.get(h.name):n.find(N=>N.re.test(h.path)),!f)throw xs(1,{location:u,currentLocation:h});E=f.record.name,g=ge({},h.params,u.params),y=f.stringify(g)}const C=[];let k=f;for(;k;)C.unshift(k.record),k=k.parent;return{name:E,path:y,params:g,matched:C,meta:n0(C)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Nh(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function e0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:t0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function t0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Dh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function n0(t){return t.reduce((e,n)=>ge(e,n.meta),{})}function Oh(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function gp(t,e){return e.children.some(n=>n===t||gp(t,n))}const mp=/#/g,s0=/&/g,r0=/\//g,i0=/=/g,o0=/\?/g,yp=/\+/g,a0=/%5B/g,c0=/%5D/g,vp=/%5E/g,l0=/%60/g,wp=/%7B/g,u0=/%7C/g,_p=/%7D/g,h0=/%20/g;function Il(t){return encodeURI(""+t).replace(u0,"|").replace(a0,"[").replace(c0,"]")}function f0(t){return Il(t).replace(wp,"{").replace(_p,"}").replace(vp,"^")}function _c(t){return Il(t).replace(yp,"%2B").replace(h0,"+").replace(mp,"%23").replace(s0,"%26").replace(l0,"`").replace(wp,"{").replace(_p,"}").replace(vp,"^")}function d0(t){return _c(t).replace(i0,"%3D")}function p0(t){return Il(t).replace(mp,"%23").replace(o0,"%3F")}function g0(t){return t==null?"":p0(t).replace(r0,"%2F")}function uo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function m0(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(yp," "),o=i.indexOf("="),a=uo(o<0?i:i.slice(0,o)),c=o<0?null:uo(i.slice(o+1));if(a in e){let l=e[a];Ct(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function xh(t){let e="";for(let n in t){const s=t[n];if(n=d0(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ct(s)?s.map(i=>i&&_c(i)):[s&&_c(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function y0(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ct(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const v0=Symbol(""),Ph=Symbol(""),Tl=Symbol(""),bl=Symbol(""),Ec=Symbol("");function sr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function pn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(xs(4,{from:n,to:e})):h instanceof Error?a(h):q_(h)?a(xs(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function $a(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(w0(a)){const l=(a.__vccOpts||a)[e];l&&r.push(pn(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=b_(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&pn(f,n,s,i,o)()}))}}return r}function w0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Mh(t){const e=St(Tl),n=St(bl),s=dt(()=>e.resolve(In(t.to))),r=dt(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Os.bind(null,u));if(f>-1)return f;const g=Lh(c[l-2]);return l>1&&Lh(u)===g&&h[h.length-1].path!==g?h.findIndex(Os.bind(null,c[l-2])):f}),i=dt(()=>r.value>-1&&T0(n.params,s.value.params)),o=dt(()=>r.value>-1&&r.value===n.matched.length-1&&hp(n.params,s.value.params));function a(c={}){return I0(c)?e[In(t.replace)?"replace":"push"](In(t.to)).catch(mr):Promise.resolve()}return{route:s,href:dt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const _0=jd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Mh,setup(t,{slots:e}){const n=Ws(Mh(t)),{options:s}=St(Tl),r=dt(()=>({[Fh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Fh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:op("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),E0=_0;function I0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function T0(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Ct(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Lh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Fh=(t,e,n)=>t??e??n,b0=jd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=St(Ec),r=dt(()=>t.route||s.value),i=St(Ph,0),o=dt(()=>{let l=In(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=dt(()=>r.value.matched[o.value]);Hi(Ph,dt(()=>o.value+1)),Hi(v0,a),Hi(Ec,r);const c=fl();return fr(()=>[c.value,a.value,t.name],([l,u,h],[f,g,y])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Os(u,g)||!f)&&(u.enterCallbacks[h]||[]).forEach(E=>E(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Uh(n.default,{Component:f,route:l});const g=h.props[u],y=g?g===!0?l.params:typeof g=="function"?g(l):g:null,C=op(f,ge({},y,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Uh(n.default,{Component:C,route:l})||C}}});function Uh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ep=b0;function S0(t){const e=Z_(t.routes,t),n=t.parseQuery||m0,s=t.stringifyQuery||xh,r=t.history,i=sr(),o=sr(),a=sr(),c=Cv(un);let l=un;ps&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Fa.bind(null,w=>""+w),h=Fa.bind(null,g0),f=Fa.bind(null,uo);function g(w,L){let O,B;return dp(w)?(O=e.getRecordMatcher(w),B=L):B=w,e.addRoute(B,O)}function y(w){const L=e.getRecordMatcher(w);L&&e.removeRoute(L)}function E(){return e.getRoutes().map(w=>w.record)}function C(w){return!!e.getRecordMatcher(w)}function k(w,L){if(L=ge({},L||c.value),typeof w=="string"){const m=Ua(n,w,L.path),v=e.resolve({path:m.path},L),I=r.createHref(m.fullPath);return ge(m,v,{params:f(v.params),hash:uo(m.hash),redirectedFrom:void 0,href:I})}let O;if("path"in w)O=ge({},w,{path:Ua(n,w.path,L.path).path});else{const m=ge({},w.params);for(const v in m)m[v]==null&&delete m[v];O=ge({},w,{params:h(m)}),L.params=h(L.params)}const B=e.resolve(O,L),pe=w.hash||"";B.params=u(f(B.params));const d=A_(s,ge({},w,{hash:f0(pe),path:B.path})),p=r.createHref(d);return ge({fullPath:d,hash:pe,query:s===xh?y0(w.query):w.query||{}},B,{redirectedFrom:void 0,href:p})}function N(w){return typeof w=="string"?Ua(n,w,c.value.path):ge({},w)}function V(w,L){if(l!==w)return xs(8,{from:L,to:w})}function T(w){return oe(w)}function F(w){return T(ge(N(w),{replace:!0}))}function te(w){const L=w.matched[w.matched.length-1];if(L&&L.redirect){const{redirect:O}=L;let B=typeof O=="function"?O(w):O;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=N(B):{path:B},B.params={}),ge({query:w.query,hash:w.hash,params:"path"in B?{}:w.params},B)}}function oe(w,L){const O=l=k(w),B=c.value,pe=w.state,d=w.force,p=w.replace===!0,m=te(O);if(m)return oe(ge(N(m),{state:typeof m=="object"?ge({},pe,m.state):pe,force:d,replace:p}),L||O);const v=O;v.redirectedFrom=L;let I;return!d&&R_(s,B,O)&&(I=xs(16,{to:v,from:B}),kt(B,B,!0,!1)),(I?Promise.resolve(I):ue(v,B)).catch(b=>Kt(b)?Kt(b,2)?b:cn(b):de(b,v,B)).then(b=>{if(b){if(Kt(b,2))return oe(ge({replace:p},N(b.to),{state:typeof b.to=="object"?ge({},pe,b.to.state):pe,force:d}),L||v)}else b=Le(v,B,!0,p,pe);return be(v,B,b),b})}function W(w,L){const O=V(w,L);return O?Promise.reject(O):Promise.resolve()}function K(w){const L=ls.values().next().value;return L&&typeof L.runWithContext=="function"?L.runWithContext(w):w()}function ue(w,L){let O;const[B,pe,d]=C0(w,L);O=$a(B.reverse(),"beforeRouteLeave",w,L);for(const m of B)m.leaveGuards.forEach(v=>{O.push(pn(v,w,L))});const p=W.bind(null,w,L);return O.push(p),Ke(O).then(()=>{O=[];for(const m of i.list())O.push(pn(m,w,L));return O.push(p),Ke(O)}).then(()=>{O=$a(pe,"beforeRouteUpdate",w,L);for(const m of pe)m.updateGuards.forEach(v=>{O.push(pn(v,w,L))});return O.push(p),Ke(O)}).then(()=>{O=[];for(const m of w.matched)if(m.beforeEnter&&!L.matched.includes(m))if(Ct(m.beforeEnter))for(const v of m.beforeEnter)O.push(pn(v,w,L));else O.push(pn(m.beforeEnter,w,L));return O.push(p),Ke(O)}).then(()=>(w.matched.forEach(m=>m.enterCallbacks={}),O=$a(d,"beforeRouteEnter",w,L),O.push(p),Ke(O))).then(()=>{O=[];for(const m of o.list())O.push(pn(m,w,L));return O.push(p),Ke(O)}).catch(m=>Kt(m,8)?m:Promise.reject(m))}function be(w,L,O){for(const B of a.list())K(()=>B(w,L,O))}function Le(w,L,O,B,pe){const d=V(w,L);if(d)return d;const p=L===un,m=ps?history.state:{};O&&(B||p?r.replace(w.fullPath,ge({scroll:p&&m&&m.scroll},pe)):r.push(w.fullPath,pe)),c.value=w,kt(w,L,O,p),cn()}let Fe;function ut(){Fe||(Fe=r.listen((w,L,O)=>{if(!Ii.listening)return;const B=k(w),pe=te(B);if(pe){oe(ge(pe,{replace:!0}),B).catch(mr);return}l=B;const d=c.value;ps&&L_(Sh(d.fullPath,O.delta),Qo()),ue(B,d).catch(p=>Kt(p,12)?p:Kt(p,2)?(oe(p.to,B).then(m=>{Kt(m,20)&&!O.delta&&O.type===xr.pop&&r.go(-1,!1)}).catch(mr),Promise.reject()):(O.delta&&r.go(-O.delta,!1),de(p,B,d))).then(p=>{p=p||Le(B,d,!1),p&&(O.delta&&!Kt(p,8)?r.go(-O.delta,!1):O.type===xr.pop&&Kt(p,20)&&r.go(-1,!1)),be(B,d,p)}).catch(mr)}))}let nt=sr(),re=sr(),he;function de(w,L,O){cn(w);const B=re.list();return B.length?B.forEach(pe=>pe(w,L,O)):console.error(w),Promise.reject(w)}function Ht(){return he&&c.value!==un?Promise.resolve():new Promise((w,L)=>{nt.add([w,L])})}function cn(w){return he||(he=!w,ut(),nt.list().forEach(([L,O])=>w?O(w):L()),nt.reset()),w}function kt(w,L,O,B){const{scrollBehavior:pe}=t;if(!ps||!pe)return Promise.resolve();const d=!O&&F_(Sh(w.fullPath,0))||(B||!O)&&history.state&&history.state.scroll||null;return pl().then(()=>pe(w,L,d)).then(p=>p&&M_(p)).catch(p=>de(p,w,L))}const it=w=>r.go(w);let cs;const ls=new Set,Ii={currentRoute:c,listening:!0,addRoute:g,removeRoute:y,hasRoute:C,getRoutes:E,resolve:k,options:t,push:T,replace:F,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:re.add,isReady:Ht,install(w){const L=this;w.component("RouterLink",E0),w.component("RouterView",Ep),w.config.globalProperties.$router=L,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>In(c)}),ps&&!cs&&c.value===un&&(cs=!0,T(r.location).catch(pe=>{}));const O={};for(const pe in un)O[pe]=dt(()=>c.value[pe]);w.provide(Tl,L),w.provide(bl,Ws(O)),w.provide(Ec,c);const B=w.unmount;ls.add(w),w.unmount=function(){ls.delete(w),ls.size<1&&(l=un,Fe&&Fe(),Fe=null,c.value=un,cs=!1,he=!1),B()}}};function Ke(w){return w.reduce((L,O)=>L.then(()=>K(O)),Promise.resolve())}return Ii}function C0(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Os(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Os(l,c))||r.push(c))}return[n,s,r]}function A0(){return St(bl)}const R0="modulepreload",k0=function(t){return"/easy-reach/"+t},$h={},Vh=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=k0(i),i in $h)return;$h[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":R0,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ip=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},N0=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Tp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(f=64)),s.push(n[u],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ip(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):N0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new D0;const f=i<<2|a>>4;if(s.push(f),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const y=l<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class D0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const O0=function(t){const e=Ip(t);return Tp.encodeByteArray(e,!0)},ho=function(t){return O0(t).replace(/\./g,"")},bp=function(t){try{return Tp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function x0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const P0=()=>x0().__FIREBASE_DEFAULTS__,M0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},L0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bp(t[1]);return e&&JSON.parse(e)},Sl=()=>{try{return P0()||M0()||L0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Sp=t=>{var e,n;return(n=(e=Sl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},F0=t=>{const e=Sp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Cp=()=>{var t;return(t=Sl())===null||t===void 0?void 0:t.config},Ap=t=>{var e;return(e=Sl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function $0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ho(JSON.stringify(n)),ho(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function V0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function B0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function j0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function q0(){const t=et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function H0(){try{return typeof indexedDB=="object"}catch{return!1}}function K0(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0="FirebaseError";class an extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=z0,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ei.prototype.create)}}class ei{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?W0(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new an(r,a,s)}}function W0(t,e){return t.replace(G0,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const G0=/\{\$([^}]+)}/g;function Q0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Bh(i)&&Bh(o)){if(!fo(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Bh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Y0(t,e){const n=new J0(t,e);return n.subscribe.bind(n)}class J0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");X0(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Va),r.error===void 0&&(r.error=Va),r.complete===void 0&&(r.complete=Va);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function X0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Va(){}/**
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
 */function lt(t){return t&&t._delegate?t._delegate:t}class Zn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vn="[DEFAULT]";/**
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
 */class Z0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new U0;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tE(e))try{this.getOrInitializeService({instanceIdentifier:Vn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Vn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vn){return this.instances.has(e)}getOptions(e=Vn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:eE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Vn){return this.component?this.component.multipleInstances?e:Vn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eE(t){return t===Vn?void 0:t}function tE(t){return t.instantiationMode==="EAGER"}/**
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
 */class nE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Z0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const sE={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},rE=le.INFO,iE={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},oE=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=iE[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cl{constructor(e){this.name=e,this._logLevel=rE,this._logHandler=oE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const aE=(t,e)=>e.some(n=>t instanceof n);let jh,qh;function cE(){return jh||(jh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lE(){return qh||(qh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rp=new WeakMap,Ic=new WeakMap,kp=new WeakMap,Ba=new WeakMap,Al=new WeakMap;function uE(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Sn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Rp.set(n,t)}).catch(()=>{}),Al.set(e,t),e}function hE(t){if(Ic.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ic.set(t,e)}let Tc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ic.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fE(t){Tc=t(Tc)}function dE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ja(this),e,...n);return kp.set(s,e.sort?e.sort():[e]),Sn(s)}:lE().includes(t)?function(...e){return t.apply(ja(this),e),Sn(Rp.get(this))}:function(...e){return Sn(t.apply(ja(this),e))}}function pE(t){return typeof t=="function"?dE(t):(t instanceof IDBTransaction&&hE(t),aE(t,cE())?new Proxy(t,Tc):t)}function Sn(t){if(t instanceof IDBRequest)return uE(t);if(Ba.has(t))return Ba.get(t);const e=pE(t);return e!==t&&(Ba.set(t,e),Al.set(e,t)),e}const ja=t=>Al.get(t);function gE(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Sn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Sn(o.result),c.oldVersion,c.newVersion,Sn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const mE=["get","getKey","getAll","getAllKeys","count"],yE=["put","add","delete","clear"],qa=new Map;function Hh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qa.get(e))return qa.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=yE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||mE.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return qa.set(e,i),i}fE(t=>({...t,get:(e,n,s)=>Hh(e,n)||t.get(e,n,s),has:(e,n)=>!!Hh(e,n)||t.has(e,n)}));/**
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
 */class vE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function wE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bc="@firebase/app",Kh="0.9.13";/**
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
 */const es=new Cl("@firebase/app"),_E="@firebase/app-compat",EE="@firebase/analytics-compat",IE="@firebase/analytics",TE="@firebase/app-check-compat",bE="@firebase/app-check",SE="@firebase/auth",CE="@firebase/auth-compat",AE="@firebase/database",RE="@firebase/database-compat",kE="@firebase/functions",NE="@firebase/functions-compat",DE="@firebase/installations",OE="@firebase/installations-compat",xE="@firebase/messaging",PE="@firebase/messaging-compat",ME="@firebase/performance",LE="@firebase/performance-compat",FE="@firebase/remote-config",UE="@firebase/remote-config-compat",$E="@firebase/storage",VE="@firebase/storage-compat",BE="@firebase/firestore",jE="@firebase/firestore-compat",qE="firebase",HE="9.23.0";/**
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
 */const Sc="[DEFAULT]",KE={[bc]:"fire-core",[_E]:"fire-core-compat",[IE]:"fire-analytics",[EE]:"fire-analytics-compat",[bE]:"fire-app-check",[TE]:"fire-app-check-compat",[SE]:"fire-auth",[CE]:"fire-auth-compat",[AE]:"fire-rtdb",[RE]:"fire-rtdb-compat",[kE]:"fire-fn",[NE]:"fire-fn-compat",[DE]:"fire-iid",[OE]:"fire-iid-compat",[xE]:"fire-fcm",[PE]:"fire-fcm-compat",[ME]:"fire-perf",[LE]:"fire-perf-compat",[FE]:"fire-rc",[UE]:"fire-rc-compat",[$E]:"fire-gcs",[VE]:"fire-gcs-compat",[BE]:"fire-fst",[jE]:"fire-fst-compat","fire-js":"fire-js",[qE]:"fire-js-all"};/**
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
 */const po=new Map,Cc=new Map;function zE(t,e){try{t.container.addComponent(e)}catch(n){es.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ps(t){const e=t.name;if(Cc.has(e))return es.debug(`There were multiple attempts to register component ${e}.`),!1;Cc.set(e,t);for(const n of po.values())zE(n,t);return!0}function Rl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const WE={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Cn=new ei("app","Firebase",WE);/**
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
 */class GE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cn.create("app-deleted",{appName:this._name})}}/**
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
 */const Gs=HE;function Np(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Sc,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Cn.create("bad-app-name",{appName:String(r)});if(n||(n=Cp()),!n)throw Cn.create("no-options");const i=po.get(r);if(i){if(fo(n,i.options)&&fo(s,i.config))return i;throw Cn.create("duplicate-app",{appName:r})}const o=new nE(r);for(const c of Cc.values())o.addComponent(c);const a=new GE(n,s,o);return po.set(r,a),a}function Dp(t=Sc){const e=po.get(t);if(!e&&t===Sc&&Cp())return Np();if(!e)throw Cn.create("no-app",{appName:t});return e}function An(t,e,n){var s;let r=(s=KE[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),es.warn(a.join(" "));return}Ps(new Zn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const QE="firebase-heartbeat-database",YE=1,Pr="firebase-heartbeat-store";let Ha=null;function Op(){return Ha||(Ha=gE(QE,YE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Pr)}}}).catch(t=>{throw Cn.create("idb-open",{originalErrorMessage:t.message})})),Ha}async function JE(t){try{return await(await Op()).transaction(Pr).objectStore(Pr).get(xp(t))}catch(e){if(e instanceof an)es.warn(e.message);else{const n=Cn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});es.warn(n.message)}}}async function zh(t,e){try{const s=(await Op()).transaction(Pr,"readwrite");await s.objectStore(Pr).put(e,xp(t)),await s.done}catch(n){if(n instanceof an)es.warn(n.message);else{const s=Cn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});es.warn(s.message)}}}function xp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const XE=1024,ZE=30*24*60*60*1e3;class eI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nI(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Wh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=ZE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Wh(),{heartbeatsToSend:n,unsentEntries:s}=tI(this._heartbeatsCache.heartbeats),r=ho(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Wh(){return new Date().toISOString().substring(0,10)}function tI(t,e=XE){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Gh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Gh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class nI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return H0()?K0().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await JE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return zh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return zh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Gh(t){return ho(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function sI(t){Ps(new Zn("platform-logger",e=>new vE(e),"PRIVATE")),Ps(new Zn("heartbeat",e=>new eI(e),"PRIVATE")),An(bc,Kh,t),An(bc,Kh,"esm2017"),An("fire-js","")}sI("");function kl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Pp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rI=Pp,Mp=new ei("auth","Firebase",Pp());/**
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
 */const go=new Cl("@firebase/auth");function iI(t,...e){go.logLevel<=le.WARN&&go.warn(`Auth (${Gs}): ${t}`,...e)}function Wi(t,...e){go.logLevel<=le.ERROR&&go.error(`Auth (${Gs}): ${t}`,...e)}/**
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
 */function jt(t,...e){throw Nl(t,...e)}function Ft(t,...e){return Nl(t,...e)}function Lp(t,e,n){const s=Object.assign(Object.assign({},rI()),{[e]:n});return new ei("auth","Firebase",s).create(e,{appName:t.name})}function oI(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&jt(t,"argument-error"),Lp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Nl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Mp.create(t,...e)}function X(t,e,...n){if(!t)throw Nl(e,...n)}function Qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wi(e),new Error(e)}function en(t,e){t||Qt(e)}/**
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
 */function Ac(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function aI(){return Qh()==="http:"||Qh()==="https:"}function Qh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function cI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(aI()||B0()||"connection"in navigator)?navigator.onLine:!0}function lI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ni{constructor(e,n){this.shortDelay=e,this.longDelay=n,en(n>e,"Short delay should be less than long delay!"),this.isMobile=V0()||j0()}get(){return cI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Dl(t,e){en(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Fp{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const uI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const hI=new ni(3e4,6e4);function Up(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function si(t,e,n,s,r={}){return $p(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ti(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Fp.fetch()(Vp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function $p(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},uI),e);try{const r=new dI(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ki(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ki(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ki(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ki(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Lp(t,u,l);jt(t,u)}}catch(r){if(r instanceof an)throw r;jt(t,"network-request-failed",{message:String(r)})}}async function fI(t,e,n,s,r={}){const i=await si(t,e,n,s,r);return"mfaPendingCredential"in i&&jt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Vp(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Dl(t.config,r):`${t.config.apiScheme}://${r}`}class dI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ft(this.auth,"network-request-failed")),hI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ki(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Ft(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function pI(t,e){return si(t,"POST","/v1/accounts:delete",e)}async function gI(t,e){return si(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function vr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mI(t,e=!1){const n=lt(t),s=await n.getIdToken(e),r=Ol(s);X(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:vr(Ka(r.auth_time)),issuedAtTime:vr(Ka(r.iat)),expirationTime:vr(Ka(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ka(t){return Number(t)*1e3}function Ol(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Wi("JWT malformed, contained fewer than 3 sections"),null;try{const r=bp(n);return r?JSON.parse(r):(Wi("Failed to decode base64 JWT payload"),null)}catch(r){return Wi("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function yI(t){const e=Ol(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Mr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof an&&vI(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function vI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class wI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Bp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vr(this.lastLoginAt),this.creationTime=vr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function mo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Mr(t,gI(n,{idToken:s}));X(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?II(i.providerUserInfo):[],a=EI(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Bp(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function _I(t){const e=lt(t);await mo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function EI(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function II(t){return t.map(e=>{var{providerId:n}=e,s=kl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function TI(t,e){const n=await $p(t,{},async()=>{const s=ti({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Vp(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Fp.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Lr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return X(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await TI(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Lr;return s&&(X(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(X(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(X(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Lr,this.toJSON())}_performRefresh(){return Qt("not implemented")}}/**
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
 */function hn(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=kl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Bp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Mr(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mI(this,e)}reload(){return _I(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await mo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Mr(this,pI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:V,emailVerified:T,isAnonymous:F,providerData:te,stsTokenManager:oe}=n;X(V&&oe,e,"internal-error");const W=Lr.fromJSON(this.name,oe);X(typeof V=="string",e,"internal-error"),hn(h,e.name),hn(f,e.name),X(typeof T=="boolean",e,"internal-error"),X(typeof F=="boolean",e,"internal-error"),hn(g,e.name),hn(y,e.name),hn(E,e.name),hn(C,e.name),hn(k,e.name),hn(N,e.name);const K=new Yn({uid:V,auth:e,email:f,emailVerified:T,displayName:h,isAnonymous:F,photoURL:y,phoneNumber:g,tenantId:E,stsTokenManager:W,createdAt:k,lastLoginAt:N});return te&&Array.isArray(te)&&(K.providerData=te.map(ue=>Object.assign({},ue))),C&&(K._redirectEventId=C),K}static async _fromIdTokenResponse(e,n,s=!1){const r=new Lr;r.updateFromServerResponse(n);const i=new Yn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await mo(i),i}}/**
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
 */const Yh=new Map;function Yt(t){en(t instanceof Function,"Expected a class definition");let e=Yh.get(t);return e?(en(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Yh.set(t,e),e)}/**
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
 */class jp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jp.type="NONE";const Jh=jp;/**
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
 */function Gi(t,e,n){return`firebase:${t}:${e}:${n}`}class Is{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Gi(this.userKey,r.apiKey,i),this.fullPersistenceKey=Gi("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Yn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Is(Yt(Jh),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Yt(Jh);const o=Gi(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Yn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Is(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Is(i,e,s))}}/**
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
 */function Xh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wp(e))return"Blackberry";if(Gp(e))return"Webos";if(xl(e))return"Safari";if((e.includes("chrome/")||Hp(e))&&!e.includes("edge/"))return"Chrome";if(zp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function qp(t=et()){return/firefox\//i.test(t)}function xl(t=et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hp(t=et()){return/crios\//i.test(t)}function Kp(t=et()){return/iemobile/i.test(t)}function zp(t=et()){return/android/i.test(t)}function Wp(t=et()){return/blackberry/i.test(t)}function Gp(t=et()){return/webos/i.test(t)}function Yo(t=et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bI(t=et()){var e;return Yo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function SI(){return q0()&&document.documentMode===10}function Qp(t=et()){return Yo(t)||zp(t)||Gp(t)||Wp(t)||/windows phone/i.test(t)||Kp(t)}function CI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Yp(t,e=[]){let n;switch(t){case"Browser":n=Xh(et());break;case"Worker":n=`${Xh(et())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gs}/${s}`}async function Jp(t,e){return si(t,"GET","/v2/recaptchaConfig",Up(t,e))}function Zh(t){return t!==void 0&&t.enterprise!==void 0}class Xp{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function AI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Zp(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Ft("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",AI().appendChild(s)})}function RI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const kI="https://www.google.com/recaptcha/enterprise.js?render=",NI="recaptcha-enterprise",DI="NO_RECAPTCHA";class OI{constructor(e){this.type=NI,this.auth=ri(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Jp(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Xp(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;Zh(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(DI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&Zh(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Zp(kI+a).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}/**
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
 */class xI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class PI{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ef(this),this.idTokenSubscription=new ef(this),this.beforeStateQueue=new xI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Is.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await mo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?lt(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Yt(e))})}async initializeRecaptchaConfig(){const e=await Jp(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Xp(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new OI(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ei("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yt(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Is.create(this,[Yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return X(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&iI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ri(t){return lt(t)}class ef{constructor(e){this.auth=e,this.observer=null,this.addObserver=Y0(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function MI(t,e){const n=Rl(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(fo(i,e??{}))return r;jt(r,"already-initialized")}return n.initialize({options:e})}function LI(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Yt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function FI(t,e,n){const s=ri(t);X(s._canInitEmulator,s,"emulator-config-failed"),X(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=eg(e),{host:o,port:a}=UI(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||$I()}function eg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function UI(t){const e=eg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:tf(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:tf(o)}}}function tf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $I(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class tg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qt("not implemented")}_getIdTokenResponse(e){return Qt("not implemented")}_linkToIdToken(e,n){return Qt("not implemented")}_getReauthenticationResolver(e){return Qt("not implemented")}}/**
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
 */async function Ts(t,e){return fI(t,"POST","/v1/accounts:signInWithIdp",Up(t,e))}/**
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
 */const VI="http://localhost";class ts extends tg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=kl(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new ts(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ts(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ts(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ts(e,n)}buildRequest(){const e={requestUri:VI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ti(n)}return e}}/**
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
 */class Pl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ii extends Pl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class mn extends ii{constructor(){super("facebook.com")}static credential(e){return ts._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";mn.PROVIDER_ID="facebook.com";/**
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
 */class Gt extends ii{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ts._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Gt.credential(n,s)}catch{return null}}}Gt.GOOGLE_SIGN_IN_METHOD="google.com";Gt.PROVIDER_ID="google.com";/**
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
 */class yn extends ii{constructor(){super("github.com")}static credential(e){return ts._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.GITHUB_SIGN_IN_METHOD="github.com";yn.PROVIDER_ID="github.com";/**
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
 */class vn extends ii{constructor(){super("twitter.com")}static credential(e,n){return ts._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return vn.credential(n,s)}catch{return null}}}vn.TWITTER_SIGN_IN_METHOD="twitter.com";vn.PROVIDER_ID="twitter.com";/**
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
 */class Ms{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Yn._fromIdTokenResponse(e,s,r),o=nf(s);return new Ms({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=nf(s);return new Ms({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function nf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class yo extends an{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,yo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new yo(e,n,s,r)}}function ng(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?yo._fromErrorAndOperation(t,i,e,s):i})}async function BI(t,e,n=!1){const s=await Mr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ms._forOperation(t,"link",s)}/**
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
 */async function jI(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Mr(t,ng(s,r,e,t),n);X(i.idToken,s,"internal-error");const o=Ol(i.idToken);X(o,s,"internal-error");const{sub:a}=o;return X(t.uid===a,s,"user-mismatch"),Ms._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&jt(s,"user-mismatch"),i}}/**
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
 */async function qI(t,e,n=!1){const s="signIn",r=await ng(t,s,e),i=await Ms._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function HI(t,e,n,s){return lt(t).onIdTokenChanged(e,n,s)}function KI(t,e,n){return lt(t).beforeAuthStateChanged(e,n)}function zI(t,e,n,s){return lt(t).onAuthStateChanged(e,n,s)}function sg(t){return lt(t).signOut()}const vo="__sak";/**
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
 */class rg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vo,"1"),this.storage.removeItem(vo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function WI(){const t=et();return xl(t)||Yo(t)}const GI=1e3,QI=10;class ig extends rg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=WI()&&CI(),this.fallbackToPolling=Qp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);SI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,QI):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},GI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ig.type="LOCAL";const YI=ig;/**
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
 */class og extends rg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}og.type="SESSION";const ag=og;/**
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
 */function JI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Jo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Jo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await JI(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jo.receivers=[];/**
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
 */function Ml(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class XI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ml("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ut(){return window}function ZI(t){Ut().location.href=t}/**
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
 */function cg(){return typeof Ut().WorkerGlobalScope<"u"&&typeof Ut().importScripts=="function"}async function eT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function nT(){return cg()?self:null}/**
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
 */const lg="firebaseLocalStorageDb",sT=1,wo="firebaseLocalStorage",ug="fbase_key";class oi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xo(t,e){return t.transaction([wo],e?"readwrite":"readonly").objectStore(wo)}function rT(){const t=indexedDB.deleteDatabase(lg);return new oi(t).toPromise()}function Rc(){const t=indexedDB.open(lg,sT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(wo,{keyPath:ug})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(wo)?e(s):(s.close(),await rT(),e(await Rc()))})})}async function sf(t,e,n){const s=Xo(t,!0).put({[ug]:e,value:n});return new oi(s).toPromise()}async function iT(t,e){const n=Xo(t,!1).get(e),s=await new oi(n).toPromise();return s===void 0?null:s.value}function rf(t,e){const n=Xo(t,!0).delete(e);return new oi(n).toPromise()}const oT=800,aT=3;class hg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>aT)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jo._getInstance(nT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await eT(),!this.activeServiceWorker)return;this.sender=new XI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rc();return await sf(e,vo,"1"),await rf(e,vo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>sf(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>iT(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>rf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Xo(r,!1).getAll();return new oi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hg.type="LOCAL";const cT=hg;new ni(3e4,6e4);/**
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
 */function fg(t,e){return e?Yt(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ll extends tg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ts(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ts(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ts(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lT(t){return qI(t.auth,new Ll(t),t.bypassAuthState)}function uT(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),jI(n,new Ll(t),t.bypassAuthState)}async function hT(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),BI(n,new Ll(t),t.bypassAuthState)}/**
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
 */class dg{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lT;case"linkViaPopup":case"linkViaRedirect":return hT;case"reauthViaPopup":case"reauthViaRedirect":return uT;default:jt(this.auth,"internal-error")}}resolve(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const fT=new ni(2e3,1e4);async function dT(t,e,n){const s=ri(t);oI(t,e,Pl);const r=fg(s,n);return new Kn(s,"signInViaPopup",e,r).executeNotNull()}class Kn extends dg{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Kn.currentPopupAction&&Kn.currentPopupAction.cancel(),Kn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){en(this.filter.length===1,"Popup operations only handle one event");const e=Ml();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ft(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fT.get())};e()}}Kn.currentPopupAction=null;/**
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
 */const pT="pendingRedirect",Qi=new Map;class gT extends dg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Qi.get(this.auth._key());if(!e){try{const s=await mT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Qi.set(this.auth._key(),e)}return this.bypassAuthState||Qi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mT(t,e){const n=wT(e),s=vT(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function yT(t,e){Qi.set(t._key(),e)}function vT(t){return Yt(t._redirectPersistence)}function wT(t){return Gi(pT,t.config.apiKey,t.name)}async function _T(t,e,n=!1){const s=ri(t),r=fg(s,e),o=await new gT(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const ET=10*60*1e3;class IT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!TT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!pg(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ft(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ET&&this.cachedEventUids.clear(),this.cachedEventUids.has(of(e))}saveEventToCache(e){this.cachedEventUids.add(of(e)),this.lastProcessedEventTime=Date.now()}}function of(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function TT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pg(t);default:return!1}}/**
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
 */async function bT(t,e={}){return si(t,"GET","/v1/projects",e)}/**
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
 */const ST=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,CT=/^https?/;async function AT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bT(t);for(const n of e)try{if(RT(n))return}catch{}jt(t,"unauthorized-domain")}function RT(t){const e=Ac(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!CT.test(n))return!1;if(ST.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const kT=new ni(3e4,6e4);function af(){const t=Ut().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function NT(t){return new Promise((e,n)=>{var s,r,i;function o(){af(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{af(),n(Ft(t,"network-request-failed"))},timeout:kT.get()})}if(!((r=(s=Ut().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Ut().gapi)===null||i===void 0)&&i.load)o();else{const a=RI("iframefcb");return Ut()[a]=()=>{gapi.load?o():n(Ft(t,"network-request-failed"))},Zp(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Yi=null,e})}let Yi=null;function DT(t){return Yi=Yi||NT(t),Yi}/**
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
 */const OT=new ni(5e3,15e3),xT="__/auth/iframe",PT="emulator/auth/iframe",MT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FT(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Dl(e,PT):`https://${t.config.authDomain}/${xT}`,s={apiKey:e.apiKey,appName:t.name,v:Gs},r=LT.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ti(s).slice(1)}`}async function UT(t){const e=await DT(t),n=Ut().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:FT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MT,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Ft(t,"network-request-failed"),a=Ut().setTimeout(()=>{i(o)},OT.get());function c(){Ut().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const $T={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VT=500,BT=600,jT="_blank",qT="http://localhost";class cf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function HT(t,e,n,s=VT,r=BT){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},$T),{width:s.toString(),height:r.toString(),top:i,left:o}),l=et().toLowerCase();n&&(a=Hp(l)?jT:n),qp(l)&&(e=e||qT,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(bI(l)&&a!=="_self")return KT(e||"",a),new cf(null);const h=window.open(e||"",a,u);X(h,t,"popup-blocked");try{h.focus()}catch{}return new cf(h)}function KT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const zT="__/auth/handler",WT="emulator/auth/handler",GT=encodeURIComponent("fac");async function lf(t,e,n,s,r,i){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Gs,eventId:r};if(e instanceof Pl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Q0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof ii){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${GT}=${encodeURIComponent(c)}`:"";return`${QT(t)}?${ti(a).slice(1)}${l}`}function QT({config:t}){return t.emulator?Dl(t,WT):`https://${t.authDomain}/${zT}`}/**
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
 */const za="webStorageSupport";class YT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ag,this._completeRedirectFn=_T,this._overrideRedirectResult=yT}async _openPopup(e,n,s,r){var i;en((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await lf(e,n,s,Ac(),r);return HT(e,o,Ml())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await lf(e,n,s,Ac(),r);return ZI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(en(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await UT(e),s=new IT(e);return n.register("authEvent",r=>(X(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(za,{type:za},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[za];o!==void 0&&n(!!o),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=AT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Qp()||xl()||Yo()}}const JT=YT;var uf="@firebase/auth",hf="0.23.2";/**
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
 */class XT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ZT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function eb(t){Ps(new Zn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yp(t)},l=new PI(s,r,i,c);return LI(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ps(new Zn("auth-internal",e=>{const n=ri(e.getProvider("auth").getImmediate());return(s=>new XT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),An(uf,hf,ZT(t)),An(uf,hf,"esm2017")}/**
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
 */const tb=5*60,nb=Ap("authIdTokenMaxAge")||tb;let ff=null;const sb=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>nb)return;const r=n==null?void 0:n.token;ff!==r&&(ff=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function _o(t=Dp()){const e=Rl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=MI(t,{popupRedirectResolver:JT,persistence:[cT,YI,ag]}),s=Ap("authTokenSyncURL");if(s){const i=sb(s);KI(n,i,()=>i(n.currentUser)),HI(n,o=>i(o))}const r=Sp("auth");return r&&FI(n,`http://${r}`),n}eb("Browser");const Fl=T_("user",{state:()=>({user:null}),getters:{userDisplayName(t){if(t.user)return t.user.displayName},userEmail(t){if(t.user)return t.user.email}},actions:{setUser(t){this.user=t}}});var rb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,Ul=Ul||{},Q=rb||self;function Zo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ai(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ib(t){return Object.prototype.hasOwnProperty.call(t,Wa)&&t[Wa]||(t[Wa]=++ob)}var Wa="closure_uid_"+(1e9*Math.random()>>>0),ob=0;function ab(t,e,n){return t.call.apply(t.bind,arguments)}function cb(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Je(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Je=ab:Je=cb,Je.apply(null,arguments)}function Ni(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Be(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Mn(){this.s=this.s,this.o=this.o}var lb=0;Mn.prototype.s=!1;Mn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),lb!=0)&&ib(this)};Mn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const gg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function $l(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function df(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Zo(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Xe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Xe.prototype.h=function(){this.defaultPrevented=!0};var ub=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",()=>{},e),Q.removeEventListener("test",()=>{},e)}catch{}return t}();function Fr(t){return/^[\s\xa0]*$/.test(t)}function ea(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function xt(t){return ea().indexOf(t)!=-1}function Vl(t){return Vl[" "](t),t}Vl[" "]=function(){};function hb(t,e){var n=sS;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var fb=xt("Opera"),Ls=xt("Trident")||xt("MSIE"),mg=xt("Edge"),kc=mg||Ls,yg=xt("Gecko")&&!(ea().toLowerCase().indexOf("webkit")!=-1&&!xt("Edge"))&&!(xt("Trident")||xt("MSIE"))&&!xt("Edge"),db=ea().toLowerCase().indexOf("webkit")!=-1&&!xt("Edge");function vg(){var t=Q.document;return t?t.documentMode:void 0}var Nc;e:{var Ga="",Qa=function(){var t=ea();if(yg)return/rv:([^\);]+)(\)|;)/.exec(t);if(mg)return/Edge\/([\d\.]+)/.exec(t);if(Ls)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(db)return/WebKit\/(\S+)/.exec(t);if(fb)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Qa&&(Ga=Qa?Qa[1]:""),Ls){var Ya=vg();if(Ya!=null&&Ya>parseFloat(Ga)){Nc=String(Ya);break e}}Nc=Ga}var Dc;if(Q.document&&Ls){var pf=vg();Dc=pf||parseInt(Nc,10)||void 0}else Dc=void 0;var pb=Dc;function Ur(t,e){if(Xe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(yg){e:{try{Vl(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:gb[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ur.$.h.call(this)}}Be(Ur,Xe);var gb={2:"touch",3:"pen",4:"mouse"};Ur.prototype.h=function(){Ur.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ci="closure_listenable_"+(1e6*Math.random()|0),mb=0;function yb(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++mb,this.fa=this.ia=!1}function ta(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Bl(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function vb(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function wg(t){const e={};for(const n in t)e[n]=t[n];return e}const gf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _g(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<gf.length;i++)n=gf[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function na(t){this.src=t,this.g={},this.h=0}na.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=xc(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new yb(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function Oc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=gg(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ta(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function xc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var jl="closure_lm_"+(1e6*Math.random()|0),Ja={};function Eg(t,e,n,s,r){if(s&&s.once)return Tg(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Eg(t,e[i],n,s,r);return null}return n=Kl(n),t&&t[ci]?t.O(e,n,ai(s)?!!s.capture:!!s,r):Ig(t,e,n,!1,s,r)}function Ig(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=ai(r)?!!r.capture:!!r,a=Hl(t);if(a||(t[jl]=a=new na(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=wb(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)ub||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Sg(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function wb(){function t(n){return e.call(t.src,t.listener,n)}const e=_b;return t}function Tg(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Tg(t,e[i],n,s,r);return null}return n=Kl(n),t&&t[ci]?t.P(e,n,ai(s)?!!s.capture:!!s,r):Ig(t,e,n,!0,s,r)}function bg(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)bg(t,e[i],n,s,r);else s=ai(s)?!!s.capture:!!s,n=Kl(n),t&&t[ci]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=xc(i,n,s,r),-1<n&&(ta(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Hl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=xc(e,n,s,r)),(n=-1<t?e[t]:null)&&ql(n))}function ql(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ci])Oc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Sg(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Hl(e))?(Oc(n,t),n.h==0&&(n.src=null,e[jl]=null)):ta(t)}}}function Sg(t){return t in Ja?Ja[t]:Ja[t]="on"+t}function _b(t,e){if(t.fa)t=!0;else{e=new Ur(e,this);var n=t.listener,s=t.la||t.src;t.ia&&ql(t),t=n.call(s,e)}return t}function Hl(t){return t=t[jl],t instanceof na?t:null}var Xa="__closure_events_fn_"+(1e9*Math.random()>>>0);function Kl(t){return typeof t=="function"?t:(t[Xa]||(t[Xa]=function(e){return t.handleEvent(e)}),t[Xa])}function Ve(){Mn.call(this),this.i=new na(this),this.S=this,this.J=null}Be(Ve,Mn);Ve.prototype[ci]=!0;Ve.prototype.removeEventListener=function(t,e,n,s){bg(this,t,e,n,s)};function He(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new Xe(e,t);else if(e instanceof Xe)e.target=e.target||t;else{var r=e;e=new Xe(s,t),_g(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Di(o,s,!0,e)&&r}if(o=e.g=t,r=Di(o,s,!0,e)&&r,r=Di(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Di(o,s,!1,e)&&r}Ve.prototype.N=function(){if(Ve.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ta(n[s]);delete t.g[e],t.h--}}this.J=null};Ve.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Ve.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Di(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Oc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var zl=Q.JSON.stringify;class Eb{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Ib(){var t=Wl;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Tb{constructor(){this.h=this.g=null}add(e,n){const s=Cg.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Cg=new Eb(()=>new bb,t=>t.reset());class bb{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Sb(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Cb(t){Q.setTimeout(()=>{throw t},0)}let $r,Vr=!1,Wl=new Tb,Ag=()=>{const t=Q.Promise.resolve(void 0);$r=()=>{t.then(Ab)}};var Ab=()=>{for(var t;t=Ib();){try{t.h.call(t.g)}catch(n){Cb(n)}var e=Cg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Vr=!1};function sa(t,e){Ve.call(this),this.h=t||1,this.g=e||Q,this.j=Je(this.qb,this),this.l=Date.now()}Be(sa,Ve);x=sa.prototype;x.ga=!1;x.T=null;x.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),He(this,"tick"),this.ga&&(Gl(this),this.start()))}};x.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Gl(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}x.N=function(){sa.$.N.call(this),Gl(this),delete this.g};function Ql(t,e,n){if(typeof t=="function")n&&(t=Je(t,n));else if(t&&typeof t.handleEvent=="function")t=Je(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function Rg(t){t.g=Ql(()=>{t.g=null,t.i&&(t.i=!1,Rg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Rb extends Mn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Rg(this)}N(){super.N(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Br(t){Mn.call(this),this.h=t,this.g={}}Be(Br,Mn);var mf=[];function kg(t,e,n,s){Array.isArray(n)||(n&&(mf[0]=n.toString()),n=mf);for(var r=0;r<n.length;r++){var i=Eg(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Ng(t){Bl(t.g,function(e,n){this.g.hasOwnProperty(n)&&ql(e)},t),t.g={}}Br.prototype.N=function(){Br.$.N.call(this),Ng(this)};Br.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ra(){this.g=!0}ra.prototype.Ea=function(){this.g=!1};function kb(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Nb(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function ys(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Ob(t,n)+(s?" "+s:"")})}function Db(t,e){t.info(function(){return"TIMEOUT: "+e})}ra.prototype.info=function(){};function Ob(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return zl(n)}catch{return e}}var is={},yf=null;function ia(){return yf=yf||new Ve}is.Ta="serverreachability";function Dg(t){Xe.call(this,is.Ta,t)}Be(Dg,Xe);function jr(t){const e=ia();He(e,new Dg(e))}is.STAT_EVENT="statevent";function Og(t,e){Xe.call(this,is.STAT_EVENT,t),this.stat=e}Be(Og,Xe);function rt(t){const e=ia();He(e,new Og(e,t))}is.Ua="timingevent";function xg(t,e){Xe.call(this,is.Ua,t),this.size=e}Be(xg,Xe);function li(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var oa={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Pg={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Yl(){}Yl.prototype.h=null;function vf(t){return t.h||(t.h=t.i())}function Mg(){}var ui={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Jl(){Xe.call(this,"d")}Be(Jl,Xe);function Xl(){Xe.call(this,"c")}Be(Xl,Xe);var Pc;function aa(){}Be(aa,Yl);aa.prototype.g=function(){return new XMLHttpRequest};aa.prototype.i=function(){return{}};Pc=new aa;function hi(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new Br(this),this.P=xb,t=kc?125:void 0,this.V=new sa(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Lg}function Lg(){this.i=null,this.g="",this.h=!1}var xb=45e3,Mc={},Eo={};x=hi.prototype;x.setTimeout=function(t){this.P=t};function Lc(t,e,n){t.L=1,t.v=la(tn(e)),t.s=n,t.S=!0,Fg(t,null)}function Fg(t,e){t.G=Date.now(),fi(t),t.A=tn(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),Kg(n.i,"t",s),t.C=0,n=t.l.J,t.h=new Lg,t.g=fm(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Rb(Je(t.Pa,t,t.g),t.O)),kg(t.U,t.g,"readystatechange",t.nb),e=t.I?wg(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),jr(),kb(t.j,t.u,t.A,t.m,t.W,t.s)}x.nb=function(t){t=t.target;const e=this.M;e&&Pt(t)==3?e.l():this.Pa(t)};x.Pa=function(t){try{if(t==this.g)e:{const u=Pt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||kc||this.g&&(this.h.h||this.g.ja()||If(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?jr(3):jr(2)),ca(this);var n=this.g.da();this.ca=n;t:if(Ug(this)){var s=If(this.g);t="";var r=s.length,i=Pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zn(this),wr(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Nb(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Fr(a)){var l=a;break t}}l=null}if(n=l)ys(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fc(this,n);else{this.i=!1,this.o=3,rt(12),zn(this),wr(this);break e}}this.S?($g(this,u,o),kc&&this.i&&u==3&&(kg(this.U,this.V,"tick",this.mb),this.V.start())):(ys(this.j,this.m,o,null),Fc(this,o)),u==4&&zn(this),this.i&&!this.J&&(u==4?cm(this.l,this):(this.i=!1,fi(this)))}else eS(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,rt(12)):(this.o=0,rt(13)),zn(this),wr(this)}}}catch{}finally{}};function Ug(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function $g(t,e,n){let s=!0,r;for(;!t.J&&t.C<n.length;)if(r=Pb(t,n),r==Eo){e==4&&(t.o=4,rt(14),s=!1),ys(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Mc){t.o=4,rt(15),ys(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ys(t.j,t.m,r,null),Fc(t,r);Ug(t)&&r!=Eo&&r!=Mc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,rt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ru(e),e.M=!0,rt(11))):(ys(t.j,t.m,n,"[Invalid Chunked Response]"),zn(t),wr(t))}x.mb=function(){if(this.g){var t=Pt(this.g),e=this.g.ja();this.C<e.length&&(ca(this),$g(this,t,e),this.i&&t!=4&&fi(this))}};function Pb(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Eo:(n=Number(e.substring(n,s)),isNaN(n)?Mc:(s+=1,s+n>e.length?Eo:(e=e.slice(s,s+n),t.C=s+n,e)))}x.cancel=function(){this.J=!0,zn(this)};function fi(t){t.Y=Date.now()+t.P,Vg(t,t.P)}function Vg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=li(Je(t.lb,t),e)}function ca(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}x.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Db(this.j,this.A),this.L!=2&&(jr(),rt(17)),zn(this),this.o=2,wr(this)):Vg(this,this.Y-t)};function wr(t){t.l.H==0||t.J||cm(t.l,t)}function zn(t){ca(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Gl(t.V),Ng(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Fc(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Uc(n.i,t))){if(!t.K&&Uc(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)bo(n),fa(n);else break e;su(n),rt(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=li(Je(n.ib,n),6e3));if(1>=Gg(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Wn(n,11)}else if((t.K||n.g==t)&&bo(n),!Fr(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.i;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Zl(i,i.h),i.h=null))}if(s.F){const E=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(s.Da=E,Ee(s.I,s.F,E))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=hm(s,s.J?s.pa:null,s.Y),o.K){Qg(s.i,o);var a=o,c=s.L;c&&a.setTimeout(c),a.B&&(ca(a),fi(a)),s.g=o}else om(s);0<n.j.length&&da(n)}else l[0]!="stop"&&l[0]!="close"||Wn(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Wn(n,7):nu(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}jr(4)}catch{}}function Mb(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Zo(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function Lb(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Zo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Bg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Zo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Lb(t),s=Mb(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var jg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fb(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Jn(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Jn){this.h=t.h,Io(this,t.j),this.s=t.s,this.g=t.g,To(this,t.m),this.l=t.l;var e=t.i,n=new qr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),wf(this,n),this.o=t.o}else t&&(e=String(t).match(jg))?(this.h=!1,Io(this,e[1]||"",!0),this.s=cr(e[2]||""),this.g=cr(e[3]||"",!0),To(this,e[4]),this.l=cr(e[5]||"",!0),wf(this,e[6]||"",!0),this.o=cr(e[7]||"")):(this.h=!1,this.i=new qr(null,this.h))}Jn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(lr(e,_f,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(lr(e,_f,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(lr(n,n.charAt(0)=="/"?Vb:$b,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",lr(n,jb)),t.join("")};function tn(t){return new Jn(t)}function Io(t,e,n){t.j=n?cr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function To(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function wf(t,e,n){e instanceof qr?(t.i=e,qb(t.i,t.h)):(n||(e=lr(e,Bb)),t.i=new qr(e,t.h))}function Ee(t,e,n){t.i.set(e,n)}function la(t){return Ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function cr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function lr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Ub),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ub(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var _f=/[#\/\?@]/g,$b=/[#\?:]/g,Vb=/[#\?]/g,Bb=/[#\?@]/g,jb=/#/g;function qr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ln(t){t.g||(t.g=new Map,t.h=0,t.i&&Fb(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=qr.prototype;x.add=function(t,e){Ln(this),this.i=null,t=Qs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function qg(t,e){Ln(t),e=Qs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Hg(t,e){return Ln(t),e=Qs(t,e),t.g.has(e)}x.forEach=function(t,e){Ln(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};x.ta=function(){Ln(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};x.Z=function(t){Ln(this);let e=[];if(typeof t=="string")Hg(this,t)&&(e=e.concat(this.g.get(Qs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};x.set=function(t,e){return Ln(this),this.i=null,t=Qs(this,t),Hg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Kg(t,e,n){qg(t,e),0<n.length&&(t.i=null,t.g.set(Qs(t,e),$l(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Qs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function qb(t,e){e&&!t.j&&(Ln(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(qg(this,s),Kg(this,r,n))},t)),t.j=e}var Hb=class{constructor(t,e){this.g=t,this.map=e}};function zg(t){this.l=t||Kb,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ka&&Q.g.Ka()&&Q.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Kb=10;function Wg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Gg(t){return t.h?1:t.g?t.g.size:0}function Uc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Zl(t,e){t.g?t.g.add(e):t.h=e}function Qg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}zg.prototype.cancel=function(){if(this.i=Yg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Yg(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return $l(t.i)}var zb=class{stringify(t){return Q.JSON.stringify(t,void 0)}parse(t){return Q.JSON.parse(t,void 0)}};function Wb(){this.g=new zb}function Gb(t,e,n){const s=n||"";try{Bg(t,function(r,i){let o=r;ai(r)&&(o=zl(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function Qb(t,e){const n=new ra;if(Q.Image){const s=new Image;s.onload=Ni(Oi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Ni(Oi,n,s,"TestLoadImage: error",!1,e),s.onabort=Ni(Oi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Ni(Oi,n,s,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Oi(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function di(t){this.l=t.fc||null,this.j=t.ob||!1}Be(di,Yl);di.prototype.g=function(){return new ua(this.l,this.j)};di.prototype.i=function(t){return function(){return t}}({});function ua(t,e){Ve.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=eu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Be(ua,Ve);var eu=0;x=ua.prototype;x.open=function(t,e){if(this.readyState!=eu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Hr(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pi(this)),this.readyState=eu};x.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Hr(this)),this.g&&(this.readyState=3,Hr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Jg(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Jg(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}x.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?pi(this):Hr(this),this.readyState==3&&Jg(this)}};x.Za=function(t){this.g&&(this.response=this.responseText=t,pi(this))};x.Ya=function(t){this.g&&(this.response=t,pi(this))};x.ka=function(){this.g&&pi(this)};function pi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Hr(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Hr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ua.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Yb=Q.JSON.parse;function Ce(t){Ve.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Xg,this.L=this.M=!1}Be(Ce,Ve);var Xg="",Jb=/^https?$/i,Xb=["POST","PUT"];x=Ce.prototype;x.Oa=function(t){this.M=t};x.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Pc.g(),this.C=this.u?vf(this.u):vf(Pc),this.g.onreadystatechange=Je(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Ef(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=Q.FormData&&t instanceof Q.FormData,!(0<=gg(Xb,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{tm(this),0<this.B&&((this.L=Zb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Je(this.ua,this)):this.A=Ql(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Ef(this,i)}};function Zb(t){return Ls&&typeof t.timeout=="number"&&t.ontimeout!==void 0}x.ua=function(){typeof Ul<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,He(this,"timeout"),this.abort(8))};function Ef(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Zg(t),ha(t)}function Zg(t){t.F||(t.F=!0,He(t,"complete"),He(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,He(this,"complete"),He(this,"abort"),ha(this))};x.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ha(this,!0)),Ce.$.N.call(this)};x.La=function(){this.s||(this.G||this.v||this.l?em(this):this.kb())};x.kb=function(){em(this)};function em(t){if(t.h&&typeof Ul<"u"&&(!t.C[1]||Pt(t)!=4||t.da()!=2)){if(t.v&&Pt(t)==4)Ql(t.La,0,t);else if(He(t,"readystatechange"),Pt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var r=String(t.I).match(jg)[1]||null;!r&&Q.self&&Q.self.location&&(r=Q.self.location.protocol.slice(0,-1)),s=!Jb.test(r?r.toLowerCase():"")}n=s}if(n)He(t,"complete"),He(t,"success");else{t.m=6;try{var i=2<Pt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Zg(t)}}finally{ha(t)}}}}function ha(t,e){if(t.g){tm(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||He(t,"ready");try{n.onreadystatechange=s}catch{}}}function tm(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}x.isActive=function(){return!!this.g};function Pt(t){return t.g?t.g.readyState:0}x.da=function(){try{return 2<Pt(this)?this.g.status:-1}catch{return-1}};x.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Yb(e)}};function If(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Xg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function eS(t){const e={};t=(t.g&&2<=Pt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(Fr(t[s]))continue;var n=Sb(t[s]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[r]||[];e[r]=i,i.push(n)}vb(e,function(s){return s.join(", ")})}x.Ia=function(){return this.m};x.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function nm(t){let e="";return Bl(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function tu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=nm(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ee(t,e,n))}function rr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function sm(t){this.Ga=0,this.j=[],this.l=new ra,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=rr("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=rr("baseRetryDelayMs",5e3,t),this.hb=rr("retryDelaySeedMs",1e4,t),this.eb=rr("forwardChannelMaxRetries",2,t),this.xa=rr("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new zg(t&&t.concurrentRequestLimit),this.Ja=new Wb,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}x=sm.prototype;x.ra=8;x.H=1;function nu(t){if(rm(t),t.H==3){var e=t.W++,n=tn(t.I);if(Ee(n,"SID",t.K),Ee(n,"RID",e),Ee(n,"TYPE","terminate"),gi(t,n),e=new hi(t,t.l,e),e.L=2,e.v=la(tn(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon)try{n=Q.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=fm(e.l,null),e.g.ha(e.v)),e.G=Date.now(),fi(e)}um(t)}function fa(t){t.g&&(ru(t),t.g.cancel(),t.g=null)}function rm(t){fa(t),t.u&&(Q.clearTimeout(t.u),t.u=null),bo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function da(t){if(!Wg(t.i)&&!t.m){t.m=!0;var e=t.Na;$r||Ag(),Vr||($r(),Vr=!0),Wl.add(e,t),t.C=0}}function tS(t,e){return Gg(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=li(Je(t.Na,t,e),lm(t,t.C)),t.C++,!0)}x.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new hi(this,this.l,t);let i=this.s;if(this.U&&(i?(i=wg(i),_g(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=im(this,r,e),n=tn(this.I),Ee(n,"RID",t),Ee(n,"CVER",22),this.F&&Ee(n,"X-HTTP-Session-Id",this.F),gi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(nm(i)))+"&"+e:this.o&&tu(n,this.o,i)),Zl(this.i,r),this.bb&&Ee(n,"TYPE","init"),this.P?(Ee(n,"$req",e),Ee(n,"SID","null"),r.aa=!0,Lc(r,n,null)):Lc(r,n,e),this.H=2}}else this.H==3&&(t?Tf(this,t):this.j.length==0||Wg(this.i)||Tf(this))};function Tf(t,e){var n;e?n=e.m:n=t.W++;const s=tn(t.I);Ee(s,"SID",t.K),Ee(s,"RID",n),Ee(s,"AID",t.V),gi(t,s),t.o&&t.s&&tu(s,t.o,t.s),n=new hi(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=im(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Zl(t.i,n),Lc(n,s,e)}function gi(t,e){t.na&&Bl(t.na,function(n,s){Ee(e,s,n)}),t.h&&Bg({},function(n,s){Ee(e,s,n)})}function im(t,e,n){n=Math.min(t.j.length,n);var s=t.h?Je(t.h.Va,t.h,t):null;e:{var r=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].g;const u=r[c].map;if(l-=i,0>l)i=Math.max(0,r[c].g-100),a=!1;else try{Gb(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function om(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;$r||Ag(),Vr||($r(),Vr=!0),Wl.add(e,t),t.A=0}}function su(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=li(Je(t.Ma,t),lm(t,t.A)),t.A++,!0)}x.Ma=function(){if(this.u=null,am(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=li(Je(this.jb,this),t)}};x.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,rt(10),fa(this),am(this))};function ru(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function am(t){t.g=new hi(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=tn(t.wa);Ee(e,"RID","rpc"),Ee(e,"SID",t.K),Ee(e,"AID",t.V),Ee(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ee(e,"TO",t.qa),Ee(e,"TYPE","xmlhttp"),gi(t,e),t.o&&t.s&&tu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=la(tn(e)),n.s=null,n.S=!0,Fg(n,t)}x.ib=function(){this.v!=null&&(this.v=null,fa(this),su(this),rt(19))};function bo(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function cm(t,e){var n=null;if(t.g==e){bo(t),ru(t),t.g=null;var s=2}else if(Uc(t.i,e))n=e.F,Qg(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;s=ia(),He(s,new xg(s,n)),da(t)}else om(t);else if(r=e.o,r==3||r==0&&0<e.ca||!(s==1&&tS(t,e)||s==2&&su(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Wn(t,5);break;case 4:Wn(t,10);break;case 3:Wn(t,6);break;default:Wn(t,2)}}}function lm(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Wn(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=Je(t.pb,t);n||(n=new Jn("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||Io(n,"https"),la(n)),Qb(n.toString(),s)}else rt(2);t.H=0,t.h&&t.h.za(e),um(t),rm(t)}x.pb=function(t){t?(this.l.info("Successfully pinged google.com"),rt(2)):(this.l.info("Failed to ping google.com"),rt(1))};function um(t){if(t.H=0,t.ma=[],t.h){const e=Yg(t.i);(e.length!=0||t.j.length!=0)&&(df(t.ma,e),df(t.ma,t.j),t.i.i.length=0,$l(t.j),t.j.length=0),t.h.ya()}}function hm(t,e,n){var s=n instanceof Jn?tn(n):new Jn(n);if(s.g!="")e&&(s.g=e+"."+s.g),To(s,s.m);else{var r=Q.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Jn(null);s&&Io(i,s),e&&(i.g=e),r&&To(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&Ee(s,n,e),Ee(s,"VER",t.ra),gi(t,s),s}function fm(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ce(new di({ob:!0})):new Ce(t.va),e.Oa(t.J),e}x.isActive=function(){return!!this.h&&this.h.isActive(this)};function dm(){}x=dm.prototype;x.Ba=function(){};x.Aa=function(){};x.za=function(){};x.ya=function(){};x.isActive=function(){return!0};x.Va=function(){};function So(){if(Ls&&!(10<=Number(pb)))throw Error("Environmental error: no available transport.")}So.prototype.g=function(t,e){return new pt(t,e)};function pt(t,e){Ve.call(this),this.g=new sm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Fr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Fr(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ys(this)}Be(pt,Ve);pt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;rt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=hm(t,null,t.Y),da(t)};pt.prototype.close=function(){nu(this.g)};pt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=zl(t),t=n);e.j.push(new Hb(e.fb++,t)),e.H==3&&da(e)};pt.prototype.N=function(){this.g.h=null,delete this.j,nu(this.g),delete this.g,pt.$.N.call(this)};function pm(t){Jl.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Be(pm,Jl);function gm(){Xl.call(this),this.status=1}Be(gm,Xl);function Ys(t){this.g=t}Be(Ys,dm);Ys.prototype.Ba=function(){He(this.g,"a")};Ys.prototype.Aa=function(t){He(this.g,new pm(t))};Ys.prototype.za=function(t){He(this.g,new gm)};Ys.prototype.ya=function(){He(this.g,"b")};function nS(){this.blockSize=-1}function At(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Be(At,nS);At.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Za(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}At.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)Za(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){Za(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){Za(this,s),r=0;break}}this.h=r,this.i+=e};At.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function me(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var sS={};function iu(t){return-128<=t&&128>t?hb(t,function(e){return new me([e|0],0>e?-1:0)}):new me([t|0],0>t?-1:0)}function Mt(t){if(isNaN(t)||!isFinite(t))return bs;if(0>t)return qe(Mt(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=$c;return new me(e,0)}function mm(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return qe(mm(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Mt(Math.pow(e,8)),s=bs,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=Mt(Math.pow(e,i)),s=s.R(i).add(Mt(o))):(s=s.R(n),s=s.add(Mt(o)))}return s}var $c=4294967296,bs=iu(0),Vc=iu(1),bf=iu(16777216);x=me.prototype;x.ea=function(){if(gt(this))return-qe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:$c+s)*e,e*=$c}return t};x.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Jt(this))return"0";if(gt(this))return"-"+qe(this).toString(t);for(var e=Mt(Math.pow(t,6)),n=this,s="";;){var r=Ao(n,e).g;n=Co(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,Jt(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};x.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Jt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function gt(t){return t.h==-1}x.X=function(t){return t=Co(this,t),gt(t)?-1:Jt(t)?0:1};function qe(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new me(n,~t.h).add(Vc)}x.abs=function(){return gt(this)?qe(this):this};x.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new me(n,n[n.length-1]&-2147483648?-1:0)};function Co(t,e){return t.add(qe(e))}x.R=function(t){if(Jt(this)||Jt(t))return bs;if(gt(this))return gt(t)?qe(this).R(qe(t)):qe(qe(this).R(t));if(gt(t))return qe(this.R(qe(t)));if(0>this.X(bf)&&0>t.X(bf))return Mt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*s+2*r]+=o*c,xi(n,2*s+2*r),n[2*s+2*r+1]+=i*c,xi(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,xi(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,xi(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new me(n,0)};function xi(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ir(t,e){this.g=t,this.h=e}function Ao(t,e){if(Jt(e))throw Error("division by zero");if(Jt(t))return new ir(bs,bs);if(gt(t))return e=Ao(qe(t),e),new ir(qe(e.g),qe(e.h));if(gt(e))return e=Ao(t,qe(e)),new ir(qe(e.g),e.h);if(30<t.g.length){if(gt(t)||gt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Vc,s=e;0>=s.X(t);)n=Sf(n),s=Sf(s);var r=ds(n,1),i=ds(s,1);for(s=ds(s,2),n=ds(n,2);!Jt(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=ds(s,1),n=ds(n,1)}return e=Co(t,r.R(e)),new ir(r,e)}for(r=bs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=Mt(n),o=i.R(e);gt(o)||0<o.X(t);)n-=s,i=Mt(n),o=i.R(e);Jt(i)&&(i=Vc),r=r.add(i),t=Co(t,o)}return new ir(r,t)}x.gb=function(t){return Ao(this,t).h};x.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new me(n,this.h&t.h)};x.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new me(n,this.h|t.h)};x.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new me(n,this.h^t.h)};function Sf(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new me(n,t.h)}function ds(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new me(r,t.h)}So.prototype.createWebChannel=So.prototype.g;pt.prototype.send=pt.prototype.u;pt.prototype.open=pt.prototype.m;pt.prototype.close=pt.prototype.close;oa.NO_ERROR=0;oa.TIMEOUT=8;oa.HTTP_ERROR=6;Pg.COMPLETE="complete";Mg.EventType=ui;ui.OPEN="a";ui.CLOSE="b";ui.ERROR="c";ui.MESSAGE="d";Ve.prototype.listen=Ve.prototype.O;Ce.prototype.listenOnce=Ce.prototype.P;Ce.prototype.getLastError=Ce.prototype.Sa;Ce.prototype.getLastErrorCode=Ce.prototype.Ia;Ce.prototype.getStatus=Ce.prototype.da;Ce.prototype.getResponseJson=Ce.prototype.Wa;Ce.prototype.getResponseText=Ce.prototype.ja;Ce.prototype.send=Ce.prototype.ha;Ce.prototype.setWithCredentials=Ce.prototype.Oa;At.prototype.digest=At.prototype.l;At.prototype.reset=At.prototype.reset;At.prototype.update=At.prototype.j;me.prototype.add=me.prototype.add;me.prototype.multiply=me.prototype.R;me.prototype.modulo=me.prototype.gb;me.prototype.compare=me.prototype.X;me.prototype.toNumber=me.prototype.ea;me.prototype.toString=me.prototype.toString;me.prototype.getBits=me.prototype.D;me.fromNumber=Mt;me.fromString=mm;var rS=function(){return new So},iS=function(){return ia()},ec=oa,oS=Pg,aS=is,Cf={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},cS=di,Pi=Mg,lS=Ce,uS=At,Ss=me;const Af="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}We.UNAUTHENTICATED=new We(null),We.GOOGLE_CREDENTIALS=new We("google-credentials-uid"),We.FIRST_PARTY=new We("first-party-uid"),We.MOCK_USER=new We("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Js="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=new Cl("@firebase/firestore");function Rf(){return ns.logLevel}function $(t,...e){if(ns.logLevel<=le.DEBUG){const n=e.map(ou);ns.debug(`Firestore (${Js}): ${t}`,...n)}}function nn(t,...e){if(ns.logLevel<=le.ERROR){const n=e.map(ou);ns.error(`Firestore (${Js}): ${t}`,...n)}}function Fs(t,...e){if(ns.logLevel<=le.WARN){const n=e.map(ou);ns.warn(`Firestore (${Js}): ${t}`,...n)}}function ou(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${Js}) INTERNAL ASSERTION FAILED: `+t;throw nn(e),new Error(e)}function Te(t,e){t||G()}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends an{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(We.UNAUTHENTICATED))}shutdown(){}}class fS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class dS{constructor(e){this.t=e,this.currentUser=We.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Rn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Rn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Rn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Te(typeof s.accessToken=="string"),new ym(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new We(e)}}class pS{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=We.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class gS{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new pS(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(We.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yS{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.T=n.token,new mS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function vS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=vS(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function fe(t,e){return t<e?-1:t>e?1:0}function Us(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Me(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Me(0,0))}static max(){return new J(new Me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,n,s){n===void 0?n=0:n>e.length&&G(),s===void 0?s=e.length-n:s>e.length-n&&G(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Kr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Kr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends Kr{construct(e,n,s){return new Ie(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new M(_.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const wS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends Kr{construct(e,n,s){return new Ye(e,n,s)}static isValidIdentifier(e){return wS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ye(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new M(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new M(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new M(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new M(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(Ie.fromString(e))}static fromName(e){return new j(Ie.fromString(e).popFirst(5))}static empty(){return new j(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new Ie(e.slice()))}}function _S(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=J.fromTimestamp(s===1e9?new Me(n+1,0):new Me(n,s));return new On(r,j.empty(),e)}function ES(t){return new On(t.readTime,t.key,-1)}class On{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new On(J.min(),j.empty(),-1)}static max(){return new On(J.max(),j.empty(),-1)}}function IS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:fe(t.largestBatchId,e.largestBatchId))}/**
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
 */const TS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==TS)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,s)=>{n(e)})}static reject(e){return new A((n,s)=>{s(e)})}static waitFor(e){return new A((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=A.resolve(!1);for(const s of e)n=n.next(r=>r?A.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new A((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new A((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function yi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class au{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}au.ct=-1;function pa(t){return t==null}function Ro(t){return t===0&&1/t==-1/0}function SS(t){return typeof t=="number"&&Number.isInteger(t)&&!Ro(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function wm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.comparator=e,this.root=n||je.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Mi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Mi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Mi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Mi(this.root,e,this.comparator,!0)}}class Mi{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??je.RED,this.left=r??je.EMPTY,this.right=i??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new je(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return je.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,s,r){return this}insert(t,e,n){return new je(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Nf(this.data.getIterator())}getIteratorFrom(e){return new Nf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ze(this.comparator);return n.data=e,n}}class Nf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class It{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new It([])}unionWith(e){let n=new Ze(Ye.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new It(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Us(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class _m extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new _m("Invalid base64 string: "+r):r}}(e);return new tt(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const CS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xn(t){if(Te(!!t),typeof t=="string"){let e=0;const n=CS.exec(t);if(Te(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ss(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
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
 */function cu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function lu(t){const e=t.mapValue.fields.__previous_value__;return cu(e)?lu(e):e}function zr(t){const e=xn(t.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e,n,s,r,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Wr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Wr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Wr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Li={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function rs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?cu(t)?4:RS(t)?9007199254740991:10:G()}function qt(t,e){if(t===e)return!0;const n=rs(t);if(n!==rs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return zr(t).isEqual(zr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=xn(s.timestampValue),o=xn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return ss(s.bytesValue).isEqual(ss(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Ne(s.geoPointValue.latitude)===Ne(r.geoPointValue.latitude)&&Ne(s.geoPointValue.longitude)===Ne(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Ne(s.integerValue)===Ne(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Ne(s.doubleValue),o=Ne(r.doubleValue);return i===o?Ro(i)===Ro(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Us(t.arrayValue.values||[],e.arrayValue.values||[],qt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(kf(i)!==kf(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!qt(i[a],o[a])))return!1;return!0}(t,e);default:return G()}}function Gr(t,e){return(t.values||[]).find(n=>qt(n,e))!==void 0}function $s(t,e){if(t===e)return 0;const n=rs(t),s=rs(e);if(n!==s)return fe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return fe(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Ne(r.integerValue||r.doubleValue),a=Ne(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Df(t.timestampValue,e.timestampValue);case 4:return Df(zr(t),zr(e));case 5:return fe(t.stringValue,e.stringValue);case 6:return function(r,i){const o=ss(r),a=ss(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=fe(o[c],a[c]);if(l!==0)return l}return fe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=fe(Ne(r.latitude),Ne(i.latitude));return o!==0?o:fe(Ne(r.longitude),Ne(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=$s(o[c],a[c]);if(l)return l}return fe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Li.mapValue&&i===Li.mapValue)return 0;if(r===Li.mapValue)return 1;if(i===Li.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=fe(a[u],l[u]);if(h!==0)return h;const f=$s(o[a[u]],c[l[u]]);if(f!==0)return f}return fe(a.length,l.length)}(t.mapValue,e.mapValue);default:throw G()}}function Df(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return fe(t,e);const n=xn(t),s=xn(e),r=fe(n.seconds,s.seconds);return r!==0?r:fe(n.nanos,s.nanos)}function Vs(t){return Bc(t)}function Bc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=xn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ss(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Bc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Bc(s.fields[a])}`;return i+"}"}(t.mapValue):G();var e,n}function Of(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function jc(t){return!!t&&"integerValue"in t}function uu(t){return!!t&&"arrayValue"in t}function xf(t){return!!t&&"nullValue"in t}function Pf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ji(t){return!!t&&"mapValue"in t}function _r(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xs(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=_r(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=_r(t.arrayValue.values[n]);return e}return Object.assign({},t)}function RS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Ji(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=_r(n)}setAll(e){let n=Ye.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=_r(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Ji(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return qt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Ji(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Xs(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new mt(_r(this.value))}}function Em(t){const e=[];return Xs(t.fields,(n,s)=>{const r=new Ye([n]);if(Ji(s)){const i=Em(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new It(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ge(e,0,J.min(),J.min(),J.min(),mt.empty(),0)}static newFoundDocument(e,n,s,r){return new Ge(e,1,n,J.min(),s,r,0)}static newNoDocument(e,n){return new Ge(e,2,n,J.min(),J.min(),mt.empty(),0)}static newUnknownDocument(e,n){return new Ge(e,3,n,J.min(),J.min(),mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ge&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ge(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ko{constructor(e,n){this.position=e,this.inclusive=n}}function Mf(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=j.comparator(j.fromName(o.referenceValue),n.key):s=$s(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Lf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Cs{constructor(e,n="asc"){this.field=e,this.dir=n}}function kS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Im{}class De extends Im{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new DS(e,n,s):n==="array-contains"?new PS(e,s):n==="in"?new MS(e,s):n==="not-in"?new LS(e,s):n==="array-contains-any"?new FS(e,s):new De(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new OS(e,s):new xS(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison($s(n,this.value)):n!==null&&rs(this.value)===rs(n)&&this.matchesComparison($s(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Rt extends Im{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Rt(e,n)}matches(e){return Tm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Tm(t){return t.op==="and"}function bm(t){return NS(t)&&Tm(t)}function NS(t){for(const e of t.filters)if(e instanceof Rt)return!1;return!0}function qc(t){if(t instanceof De)return t.field.canonicalString()+t.op.toString()+Vs(t.value);if(bm(t))return t.filters.map(e=>qc(e)).join(",");{const e=t.filters.map(n=>qc(n)).join(",");return`${t.op}(${e})`}}function Sm(t,e){return t instanceof De?function(n,s){return s instanceof De&&n.op===s.op&&n.field.isEqual(s.field)&&qt(n.value,s.value)}(t,e):t instanceof Rt?function(n,s){return s instanceof Rt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Sm(i,s.filters[o]),!0):!1}(t,e):void G()}function Cm(t){return t instanceof De?function(e){return`${e.field.canonicalString()} ${e.op} ${Vs(e.value)}`}(t):t instanceof Rt?function(e){return e.op.toString()+" {"+e.getFilters().map(Cm).join(" ,")+"}"}(t):"Filter"}class DS extends De{constructor(e,n,s){super(e,n,s),this.key=j.fromName(s.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.matchesComparison(n)}}class OS extends De{constructor(e,n){super(e,"in",n),this.keys=Am("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class xS extends De{constructor(e,n){super(e,"not-in",n),this.keys=Am("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Am(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>j.fromName(s.referenceValue))}class PS extends De{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return uu(n)&&Gr(n.arrayValue,this.value)}}class MS extends De{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Gr(this.value.arrayValue,n)}}class LS extends De{constructor(e,n){super(e,"not-in",n)}matches(e){if(Gr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Gr(this.value.arrayValue,n)}}class FS extends De{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!uu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Gr(this.value.arrayValue,s))}}/**
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
 */class US{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function Ff(t,e=null,n=[],s=[],r=null,i=null,o=null){return new US(t,e,n,s,r,i,o)}function hu(t){const e=ee(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>qc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),pa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Vs(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Vs(s)).join(",")),e.dt=n}return e.dt}function fu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!kS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Sm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Lf(t.startAt,e.startAt)&&Lf(t.endAt,e.endAt)}function Hc(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function $S(t,e,n,s,r,i,o,a){return new Zs(t,e,n,s,r,i,o,a)}function Rm(t){return new Zs(t)}function Uf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function du(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ga(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function km(t){return t.collectionGroup!==null}function As(t){const e=ee(t);if(e.wt===null){e.wt=[];const n=ga(e),s=du(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new Cs(n)),e.wt.push(new Cs(Ye.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Cs(Ye.keyField(),i))}}}return e.wt}function sn(t){const e=ee(t);if(!e._t)if(e.limitType==="F")e._t=Ff(e.path,e.collectionGroup,As(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of As(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Cs(i.field,o))}const s=e.endAt?new ko(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ko(e.startAt.position,e.startAt.inclusive):null;e._t=Ff(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function Kc(t,e){e.getFirstInequalityField(),ga(t);const n=t.filters.concat([e]);return new Zs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function No(t,e,n){return new Zs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ma(t,e){return fu(sn(t),sn(e))&&t.limitType===e.limitType}function Nm(t){return`${hu(sn(t))}|lt:${t.limitType}`}function zc(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Cm(s)).join(", ")}]`),pa(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Vs(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Vs(s)).join(",")),`Target(${n})`}(sn(t))}; limitType=${t.limitType})`}function ya(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):j.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of As(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Mf(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,As(n),s)||n.endAt&&!function(r,i,o){const a=Mf(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,As(n),s))}(t,e)}function VS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Dm(t){return(e,n)=>{let s=!1;for(const r of As(t)){const i=BS(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function BS(t,e,n){const s=t.field.isKeyField()?j.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?$s(a,c):G()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Xs(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return wm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS=new Se(j.comparator);function rn(){return jS}const Om=new Se(j.comparator);function ur(...t){let e=Om;for(const n of t)e=e.insert(n.key,n);return e}function xm(t){let e=Om;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Gn(){return Er()}function Pm(){return Er()}function Er(){return new er(t=>t.toString(),(t,e)=>t.isEqual(e))}const qS=new Se(j.comparator),HS=new Ze(j.comparator);function se(...t){let e=HS;for(const n of t)e=e.add(n);return e}const KS=new Ze(fe);function zS(){return KS}/**
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
 */function Mm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ro(e)?"-0":e}}function Lm(t){return{integerValue:""+t}}function WS(t,e){return SS(e)?Lm(e):Mm(t,e)}/**
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
 */class va{constructor(){this._=void 0}}function GS(t,e,n){return t instanceof Do?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&cu(r)&&(r=lu(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Qr?Um(t,e):t instanceof Yr?$m(t,e):function(s,r){const i=Fm(s,r),o=$f(i)+$f(s.gt);return jc(i)&&jc(s.gt)?Lm(o):Mm(s.serializer,o)}(t,e)}function QS(t,e,n){return t instanceof Qr?Um(t,e):t instanceof Yr?$m(t,e):n}function Fm(t,e){return t instanceof Oo?jc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Do extends va{}class Qr extends va{constructor(e){super(),this.elements=e}}function Um(t,e){const n=Vm(e);for(const s of t.elements)n.some(r=>qt(r,s))||n.push(s);return{arrayValue:{values:n}}}class Yr extends va{constructor(e){super(),this.elements=e}}function $m(t,e){let n=Vm(e);for(const s of t.elements)n=n.filter(r=>!qt(r,s));return{arrayValue:{values:n}}}class Oo extends va{constructor(e,n){super(),this.serializer=e,this.gt=n}}function $f(t){return Ne(t.integerValue||t.doubleValue)}function Vm(t){return uu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function YS(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Qr&&s instanceof Qr||n instanceof Yr&&s instanceof Yr?Us(n.elements,s.elements,qt):n instanceof Oo&&s instanceof Oo?qt(n.gt,s.gt):n instanceof Do&&s instanceof Do}(t.transform,e.transform)}class JS{constructor(e,n){this.version=e,this.transformResults=n}}class $t{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new $t}static exists(e){return new $t(void 0,e)}static updateTime(e){return new $t(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wa{}function Bm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new pu(t.key,$t.none()):new vi(t.key,t.data,$t.none());{const n=t.data,s=mt.empty();let r=new Ze(Ye.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new os(t.key,s,new It(r.toArray()),$t.none())}}function XS(t,e,n){t instanceof vi?function(s,r,i){const o=s.value.clone(),a=Bf(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof os?function(s,r,i){if(!Xi(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Bf(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(jm(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Ir(t,e,n,s){return t instanceof vi?function(r,i,o,a){if(!Xi(r.precondition,i))return o;const c=r.value.clone(),l=jf(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof os?function(r,i,o,a){if(!Xi(r.precondition,i))return o;const c=jf(r.fieldTransforms,a,i),l=i.data;return l.setAll(jm(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return Xi(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function ZS(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Fm(s.transform,r||null);i!=null&&(n===null&&(n=mt.empty()),n.set(s.field,i))}return n||null}function Vf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Us(n,s,(r,i)=>YS(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class vi extends wa{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class os extends wa{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function jm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Bf(t,e,n){const s=new Map;Te(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,QS(o,a,n[r]))}return s}function jf(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,GS(i,o,e))}return s}class pu extends wa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eC extends wa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&XS(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Ir(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Ir(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Pm();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Bm(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(J.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&Us(this.mutations,e.mutations,(n,s)=>Vf(n,s))&&Us(this.baseMutations,e.baseMutations,(n,s)=>Vf(n,s))}}class gu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Te(e.mutations.length===s.length);let r=qS;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new gu(e,n,s,r)}}/**
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
 */class nC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class sC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke,ie;function rC(t){switch(t){default:return G();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function qm(t){if(t===void 0)return nn("GRPC error has no .code"),_.UNKNOWN;switch(t){case ke.OK:return _.OK;case ke.CANCELLED:return _.CANCELLED;case ke.UNKNOWN:return _.UNKNOWN;case ke.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case ke.INTERNAL:return _.INTERNAL;case ke.UNAVAILABLE:return _.UNAVAILABLE;case ke.UNAUTHENTICATED:return _.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case ke.NOT_FOUND:return _.NOT_FOUND;case ke.ALREADY_EXISTS:return _.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return _.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case ke.ABORTED:return _.ABORTED;case ke.OUT_OF_RANGE:return _.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return _.UNIMPLEMENTED;case ke.DATA_LOSS:return _.DATA_LOSS;default:return G()}}(ie=ke||(ke={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class mu{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Fi}static getOrCreateInstance(){return Fi===null&&(Fi=new mu),Fi}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Fi=null;/**
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
 */function iC(){return new TextEncoder}/**
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
 */const oC=new Ss([4294967295,4294967295],0);function qf(t){const e=iC().encode(t),n=new uS;return n.update(e),new Uint8Array(n.digest())}function Hf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ss([n,s],0),new Ss([r,i],0)]}class yu{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new hr(`Invalid padding: ${n}`);if(s<0)throw new hr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new hr(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new hr(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Ss.fromNumber(this.It)}Et(e,n,s){let r=e.add(n.multiply(Ss.fromNumber(s)));return r.compare(oC)===1&&(r=new Ss([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=qf(e),[s,r]=Hf(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);if(!this.At(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new yu(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=qf(e),[s,r]=Hf(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class hr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,wi.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new _a(J.min(),r,new Se(fe),rn(),se())}}class wi{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new wi(s,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n,s,r){this.Pt=e,this.removedTargetIds=n,this.key=s,this.bt=r}}class Hm{constructor(e,n){this.targetId=e,this.Vt=n}}class Km{constructor(e,n,s=tt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Kf{constructor(){this.St=0,this.Dt=Wf(),this.Ct=tt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=se(),n=se(),s=se();return this.Dt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:G()}}),new wi(this.Ct,this.xt,e,n,s)}Ft(){this.Nt=!1,this.Dt=Wf()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class aC{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=rn(),this.zt=zf(),this.Wt=new Se(fe)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const s=this.Zt(n);switch(e.state){case 0:this.te(n)&&s.$t(e.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(e.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((s,r)=>{this.te(r)&&n(r)})}ne(e){var n;const s=e.targetId,r=e.Vt.count,i=this.se(s);if(i){const o=i.target;if(Hc(o))if(r===0){const a=new j(o.path);this.Yt(s,a,Ge.newNoDocument(a,J.min()))}else Te(r===1);else{const a=this.ie(s);if(a!==r){const c=this.re(e,a);if(c!==0){this.ee(s);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,l)}(n=mu.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,u,h){var f,g,y,E,C,k;const N={localCacheCount:u,existenceFilterCount:h.count},V=h.unchangedNames;return V&&(N.bloomFilter={applied:l===0,hashCount:(f=V==null?void 0:V.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(E=(y=(g=V==null?void 0:V.bits)===null||g===void 0?void 0:g.bitmap)===null||y===void 0?void 0:y.length)!==null&&E!==void 0?E:0,padding:(k=(C=V==null?void 0:V.bits)===null||C===void 0?void 0:C.padding)!==null&&k!==void 0?k:0}),N}(c,a,e.Vt))}}}}re(e,n){const{unchangedNames:s,count:r}=e.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let c,l;try{c=ss(i).toUint8Array()}catch(u){if(u instanceof _m)return Fs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new yu(c,o,a)}catch(u){return Fs(u instanceof hr?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.It===0?1:r!==n-this.oe(e.targetId,l)?2:0}oe(e,n){const s=this.Gt.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.vt(a)||(this.Yt(e,i,null),r++)}),r}ce(e){const n=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&Hc(a.target)){const c=new j(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,Ge.newNoDocument(c,e))}i.Mt&&(n.set(o,i.Ot()),i.Ft())}});let s=se();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.se(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(e));const r=new _a(e,n,this.Wt,this.jt,s);return this.jt=rn(),this.zt=zf(),this.Wt=new Se(fe),r}Jt(e,n){if(!this.te(e))return;const s=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,s){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,n)?r.Bt(n,1):r.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new Kf,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new Ze(fe),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Kf),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function zf(){return new Se(j.comparator)}function Wf(){return new Se(j.comparator)}const cC=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),lC=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),uC=(()=>({and:"AND",or:"OR"}))();class hC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Wc(t,e){return t.useProto3Json||pa(e)?e:{value:e}}function xo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function fC(t,e){return xo(t,e.toTimestamp())}function Vt(t){return Te(!!t),J.fromTimestamp(function(e){const n=xn(e);return new Me(n.seconds,n.nanos)}(t))}function vu(t,e){return function(n){return new Ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Wm(t){const e=Ie.fromString(t);return Te(Jm(e)),e}function Gc(t,e){return vu(t.databaseId,e.path)}function tc(t,e){const n=Wm(e);if(n.get(1)!==t.databaseId.projectId)throw new M(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(Gm(n))}function Qc(t,e){return vu(t.databaseId,e)}function dC(t){const e=Wm(t);return e.length===4?Ie.emptyPath():Gm(e)}function Yc(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Gm(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Gf(t,e,n){return{name:Gc(t,e),fields:n.value.mapValue.fields}}function pC(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(Te(l===void 0||typeof l=="string"),tt.fromBase64String(l||"")):(Te(l===void 0||l instanceof Uint8Array),tt.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?_.UNKNOWN:qm(c.code);return new M(l,c.message||"")}(o);n=new Km(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=tc(t,s.document.name),i=Vt(s.document.updateTime),o=s.document.createTime?Vt(s.document.createTime):J.min(),a=new mt({mapValue:{fields:s.document.fields}}),c=Ge.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Zi(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=tc(t,s.document),i=s.readTime?Vt(s.readTime):J.min(),o=Ge.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Zi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=tc(t,s.document),i=s.removedTargetIds||[];n=new Zi([],i,r,null)}else{if(!("filter"in e))return G();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new sC(r,i),a=s.targetId;n=new Hm(a,o)}}return n}function gC(t,e){let n;if(e instanceof vi)n={update:Gf(t,e.key,e.value)};else if(e instanceof pu)n={delete:Gc(t,e.key)};else if(e instanceof os)n={update:Gf(t,e.key,e.data),updateMask:bC(e.fieldMask)};else{if(!(e instanceof eC))return G();n={verify:Gc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof Do)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Qr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Yr)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Oo)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw G()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:fC(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:G()}(t,e.precondition)),n}function mC(t,e){return t&&t.length>0?(Te(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Vt(s.updateTime):Vt(r);return i.isEqual(J.min())&&(i=Vt(r)),new JS(i,s.transformResults||[])}(n,e))):[]}function yC(t,e){return{documents:[Qc(t,e.path)]}}function vC(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Qc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Qc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Ym(Rt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:gs(u.field),direction:EC(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Wc(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function wC(t){let e=dC(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Te(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Qm(u);return h instanceof Rt&&bm(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Cs(ms(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,pa(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new ko(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new ko(f,h)}(n.endAt)),$S(e,r,o,i,a,"F",c,l)}function _C(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Qm(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ms(e.unaryFilter.field);return De.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ms(e.unaryFilter.field);return De.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ms(e.unaryFilter.field);return De.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ms(e.unaryFilter.field);return De.create(i,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(e){return De.create(ms(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Rt.create(e.compositeFilter.filters.map(n=>Qm(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return G()}}(e.compositeFilter.op))}(t):G()}function EC(t){return cC[t]}function IC(t){return lC[t]}function TC(t){return uC[t]}function gs(t){return{fieldPath:t.canonicalString()}}function ms(t){return Ye.fromServerFormat(t.fieldPath)}function Ym(t){return t instanceof De?function(e){if(e.op==="=="){if(Pf(e.value))return{unaryFilter:{field:gs(e.field),op:"IS_NAN"}};if(xf(e.value))return{unaryFilter:{field:gs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Pf(e.value))return{unaryFilter:{field:gs(e.field),op:"IS_NOT_NAN"}};if(xf(e.value))return{unaryFilter:{field:gs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gs(e.field),op:IC(e.op),value:e.value}}}(t):t instanceof Rt?function(e){const n=e.getFilters().map(s=>Ym(s));return n.length===1?n[0]:{compositeFilter:{op:TC(e.op),filters:n}}}(t):G()}function bC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Jm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,n,s,r,i=J.min(),o=J.min(),a=tt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e){this.fe=e}}function CC(t){const e=wC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?No(e,e.limit,"L"):e}/**
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
 */class AC{constructor(){this.rn=new RC}addToCollectionParentIndex(e,n){return this.rn.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(On.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(On.min())}updateCollectionGroup(e,n,s){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class RC{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Ze(Ie.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ze(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Bs(0)}static Mn(){return new Bs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(){this.changes=new er(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ge.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?A.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class NC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Ir(s.mutation,r,It.empty(),Me.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,se()).next(()=>s))}getLocalViewOfDocuments(e,n,s=se()){const r=Gn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=ur();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Gn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,se()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=rn();const o=Er(),a=Er();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof os)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Ir(u.mutation,l,u.mutation.getFieldMask(),Me.now())):o.set(l.key,It.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new NC(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Er();let r=new Se((o,a)=>o-a),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||It.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||se()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Pm();u.forEach(f=>{if(!i.has(f)){const g=Bm(n.get(f),s.get(f));g!==null&&h.set(f,g),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return A.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return j.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):km(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):A.resolve(Gn());let a=-1,c=i;return o.next(l=>A.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?A.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,se())).next(u=>({batchId:a,changes:xm(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(s=>{let r=ur();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=ur();return this.indexManager.getCollectionParents(e,r).next(o=>A.forEach(o,a=>{const c=function(l,u){return new Zs(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Ge.newInvalidDocument(l)))});let o=ur();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&Ir(l.mutation,c,It.empty(),Me.now()),ya(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class OC{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return A.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:Vt(s.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(s){return{name:s.name,query:CC(s.bundledQuery),readTime:Vt(s.readTime)}}(n)),A.resolve()}}/**
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
 */class xC{constructor(){this.overlays=new Se(j.comparator),this.ls=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Gn();return A.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.we(e,n,i)}),A.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ls.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(s)),A.resolve()}getOverlaysForCollection(e,n,s){const r=Gn(),i=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return A.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Se((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Gn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Gn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return A.resolve(a)}we(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ls.get(r.largestBatchId).delete(s.key);this.ls.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new nC(n,s));let i=this.ls.get(n);i===void 0&&(i=se(),this.ls.set(n,i)),this.ls.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(){this.fs=new Ze(Ue.ds),this.ws=new Ze(Ue._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const s=new Ue(e,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ys(new Ue(e,n))}ps(e,n){e.forEach(s=>this.removeReference(s,n))}Is(e){const n=new j(new Ie([])),s=new Ue(n,e),r=new Ue(n,e+1),i=[];return this.ws.forEachInRange([s,r],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new j(new Ie([])),s=new Ue(n,e),r=new Ue(n,e+1);let i=se();return this.ws.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ue(e,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ue{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return j.comparator(e.key,n.key)||fe(e.As,n.As)}static _s(e,n){return fe(e.As,n.As)||j.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new Ze(Ue.ds)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new tC(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new Ue(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.bs(s),i=r<0?0:r;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ue(n,0),r=new Ue(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.Ps(o.As);i.push(a)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ze(fe);return n.forEach(r=>{const i=new Ue(r,0),o=new Ue(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.As)})}),A.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;j.isDocumentKey(i)||(i=i.child(""));const o=new Ue(new j(i),0);let a=new Ze(fe);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.As)),!0)},o),A.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(s=>{const r=this.Ps(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Te(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return A.forEach(n.mutations,r=>{const i=new Ue(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=s})}Cn(e){}containsKey(e,n){const s=new Ue(n,0),r=this.Rs.firstAfterOrEqual(s);return A.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e){this.Ds=e,this.docs=new Se(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return A.resolve(s?s.document.mutableCopy():Ge.newInvalidDocument(n))}getEntries(e,n){let s=rn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ge.newInvalidDocument(r))}),A.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=rn();const o=n.path,a=new j(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||IS(ES(u),s)<=0||(r.has(u.key)||ya(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,n,s,r){G()}Cs(e,n){return A.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new LC(this)}getSize(e){return A.resolve(this.size)}}class LC extends kC{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.os.addEntry(e,r)):this.os.removeEntry(s)}),A.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e){this.persistence=e,this.xs=new er(n=>hu(n),fu),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Ns=0,this.ks=new wu,this.targetCount=0,this.Ms=Bs.kn()}forEachTarget(e,n){return this.xs.forEach((s,r)=>n(r)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),A.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Bs(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Fn(n),A.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),A.waitFor(i).next(()=>r)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const s=this.xs.get(n)||null;return A.resolve(s)}addMatchingKeys(e,n,s){return this.ks.gs(n,s),A.resolve()}removeMatchingKeys(e,n,s){this.ks.ps(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),A.resolve()}getMatchingKeysForTargetId(e,n){const s=this.ks.Es(n);return A.resolve(s)}containsKey(e,n){return A.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e,n){this.$s={},this.overlays={},this.Os=new au(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new FC(this),this.indexManager=new AC,this.remoteDocumentCache=function(s){return new MC(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new SC(n),this.qs=new OC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new xC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.$s[e.toKey()];return s||(s=new PC(n,this.referenceDelegate),this.$s[e.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,s){$("MemoryPersistence","Starting transaction:",e);const r=new $C(this.Os.next());return this.referenceDelegate.Us(),s(r).next(i=>this.referenceDelegate.Ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Gs(e,n){return A.or(Object.values(this.$s).map(s=>()=>s.containsKey(e,n)))}}class $C extends bS{constructor(e){super(),this.currentSequenceNumber=e}}class _u{constructor(e){this.persistence=e,this.Qs=new wu,this.js=null}static zs(e){return new _u(e)}get Ws(){if(this.js)return this.js;throw G()}addReference(e,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),A.resolve()}removeReference(e,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),A.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(r=>this.Ws.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ws.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Ws,s=>{const r=j.fromPath(s);return this.Hs(e,r).next(i=>{i||n.removeEntry(r,J.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return A.or([()=>A.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Fi=s,this.Bi=r}static Li(e,n){let s=se(),r=se();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Eu(e,n.fromCache,s,r)}}/**
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
 */class VC{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ki(e,n).next(i=>i||this.Gi(e,n,r,s)).next(i=>i||this.Qi(e,n))}Ki(e,n){if(Uf(n))return A.resolve(null);let s=sn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=No(n,null,"F"),s=sn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=se(...i);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.ji(n,a);return this.zi(n,l,o,c.readTime)?this.Ki(e,No(n,null,"F")):this.Wi(e,l,n,c)}))})))}Gi(e,n,s,r){return Uf(n)||r.isEqual(J.min())?this.Qi(e,n):this.Ui.getDocuments(e,s).next(i=>{const o=this.ji(n,i);return this.zi(n,o,s,r)?this.Qi(e,n):(Rf()<=le.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),zc(n)),this.Wi(e,o,n,_S(r,-1)))})}ji(e,n){let s=new Ze(Dm(e));return n.forEach((r,i)=>{ya(e,i)&&(s=s.add(i))}),s}zi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,n){return Rf()<=le.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",zc(n)),this.Ui.getDocumentsMatchingQuery(e,n,On.min())}Wi(e,n,s,r){return this.Ui.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class BC{constructor(e,n,s,r){this.persistence=e,this.Hi=n,this.serializer=r,this.Ji=new Se(fe),this.Yi=new er(i=>hu(i),fu),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(s)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new DC(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function jC(t,e,n,s){return new BC(t,e,n,s)}async function Xm(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.tr(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=se();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({er:l,removedBatchIds:o,addedBatchIds:a}))})})}function qC(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=A.resolve();return h.forEach(g=>{f=f.next(()=>l.getEntry(a,g)).next(y=>{const E=c.docVersions.get(g);Te(E!==null),y.version.compareTo(E)<0&&(u.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),l.addEntry(y)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=se();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function Zm(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function HC(t,e){const n=ee(t),s=e.snapshotVersion;let r=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});r=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const f=r.get(h);if(!f)return;a.push(n.Bs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(i,u.addedDocuments,h)));let g=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(tt.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),r=r.insert(h,g),function(y,E,C){return y.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(f,g,u)&&a.push(n.Bs.updateTargetData(i,g))});let c=rn(),l=se();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(KC(i,o,e.documentUpdates).next(u=>{c=u.nr,l=u.sr})),!s.isEqual(J.min())){const u=n.Bs.getLastRemoteSnapshotVersion(i).next(h=>n.Bs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return A.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ji=r,i))}function KC(t,e,n){let s=se(),r=se();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=rn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(J.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{nr:o,sr:r}})}function zC(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function WC(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Bs.getTargetData(s,e).next(i=>i?(r=i,A.resolve(r)):n.Bs.allocateTargetId(s).next(o=>(r=new wn(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ji.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(e,s.targetId)),s})}async function Jc(t,e,n){const s=ee(t),r=s.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!yi(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(r.target)}function Qf(t,e,n){const s=ee(t);let r=J.min(),i=se();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=ee(a),h=u.Yi.get(l);return h!==void 0?A.resolve(u.Ji.get(h)):u.Bs.getTargetData(c,l)}(s,o,sn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,n?r:J.min(),n?i:se())).next(a=>(GC(s,VS(e),a),{documents:a,ir:i})))}function GC(t,e,n){let s=t.Xi.get(e)||J.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Xi.set(e,s)}class Yf{constructor(){this.activeTargetIds=zS()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class QC{constructor(){this.Hr=new Yf,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,s){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Yf,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class YC{Yr(e){}shutdown(){}}/**
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
 */class Jf{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ui=null;function nc(){return Ui===null?Ui=268435456+Math.round(2147483648*Math.random()):Ui++,"0x"+Ui.toString(16)}/**
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
 */const JC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze="WebChannelConnection";class ZC extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,s,r,i){const o=nc(),a=this.To(e,n);$("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.Eo(c,r,i),this.Ao(e,a,c,s).then(l=>($("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Fs("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}vo(e,n,s,r,i,o){return this.Io(e,n,s,r,i)}Eo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Js,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}To(e,n){const s=JC[e];return`${this.mo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,s,r){const i=nc();return new Promise((o,a)=>{const c=new lS;c.setWithCredentials(!0),c.listenOnce(oS.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ec.NO_ERROR:const u=c.getResponseJson();$(ze,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case ec.TIMEOUT:$(ze,`RPC '${e}' ${i} timed out`),a(new M(_.DEADLINE_EXCEEDED,"Request time out"));break;case ec.HTTP_ERROR:const h=c.getStatus();if($(ze,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const g=f==null?void 0:f.error;if(g&&g.status&&g.message){const y=function(E){const C=E.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(C)>=0?C:_.UNKNOWN}(g.status);a(new M(y,g.message))}else a(new M(_.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new M(_.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{$(ze,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);$(ze,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}Ro(e,n,s){const r=nc(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=rS(),a=iS(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new cS({})),this.Eo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");$(ze,`Creating RPC '${e}' stream ${r}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,g=!1;const y=new XC({ro:C=>{g?$(ze,`Not sending because RPC '${e}' stream ${r} is closed:`,C):(f||($(ze,`Opening RPC '${e}' stream ${r} transport.`),h.open(),f=!0),$(ze,`RPC '${e}' stream ${r} sending:`,C),h.send(C))},oo:()=>h.close()}),E=(C,k,N)=>{C.listen(k,V=>{try{N(V)}catch(T){setTimeout(()=>{throw T},0)}})};return E(h,Pi.EventType.OPEN,()=>{g||$(ze,`RPC '${e}' stream ${r} transport opened.`)}),E(h,Pi.EventType.CLOSE,()=>{g||(g=!0,$(ze,`RPC '${e}' stream ${r} transport closed`),y.wo())}),E(h,Pi.EventType.ERROR,C=>{g||(g=!0,Fs(ze,`RPC '${e}' stream ${r} transport errored:`,C),y.wo(new M(_.UNAVAILABLE,"The operation could not be completed")))}),E(h,Pi.EventType.MESSAGE,C=>{var k;if(!g){const N=C.data[0];Te(!!N);const V=N,T=V.error||((k=V[0])===null||k===void 0?void 0:k.error);if(T){$(ze,`RPC '${e}' stream ${r} received error:`,T);const F=T.status;let te=function(W){const K=ke[W];if(K!==void 0)return qm(K)}(F),oe=T.message;te===void 0&&(te=_.INTERNAL,oe="Unknown error status: "+F+" with message "+T.message),g=!0,y.wo(new M(te,oe)),h.close()}else $(ze,`RPC '${e}' stream ${r} received:`,N),y._o(N)}}),E(a,aS.STAT_EVENT,C=>{C.stat===Cf.PROXY?$(ze,`RPC '${e}' stream ${r} detected buffering proxy`):C.stat===Cf.NOPROXY&&$(ze,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{y.fo()},0),y}}function sc(){return typeof document<"u"?document:null}/**
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
 */function Ea(t){return new hC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,n,s=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=n,this.Po=s,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),r=Math.max(0,n-s);r>0&&$("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e,n,s,r,i,o,a,c){this.ii=e,this.$o=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new ey(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(nn(n.toString()),nn("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Fo===n&&this.Zo(s,r)},s=>{e(()=>{const r=new M(_.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(r)})})}Zo(e,n){const s=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(r=>{s(()=>this.tu(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eA extends ty{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=pC(this.serializer,e),s=function(r){if(!("targetChange"in r))return J.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?J.min():i.readTime?Vt(i.readTime):J.min()}(e);return this.listener.nu(n,s)}su(e){const n={};n.database=Yc(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;if(o=Hc(a)?{documents:yC(r,a)}:{query:vC(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=zm(r,i.resumeToken);const c=Wc(r,i.expectedCount);c!==null&&(o.expectedCount=c)}else if(i.snapshotVersion.compareTo(J.min())>0){o.readTime=xo(r,i.snapshotVersion.toTimestamp());const c=Wc(r,i.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const s=_C(this.serializer,e);s&&(n.labels=s),this.Wo(n)}iu(e){const n={};n.database=Yc(this.serializer),n.removeTarget=e,this.Wo(n)}}class tA extends ty{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=mC(e.writeResults,e.commitTime),s=Vt(e.commitTime);return this.listener.cu(s,n)}return Te(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Yc(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>gC(this.serializer,s))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new M(_.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Io(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new M(_.UNKNOWN,r.toString())})}vo(e,n,s,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(_.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class sA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(nn(n),this.mu=!1):$("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{as(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=ee(a);c.vu.add(4),await _i(c),c.bu.set("Unknown"),c.vu.delete(4),await Ia(c)}(this))})}),this.bu=new sA(s,r)}}async function Ia(t){if(as(t))for(const e of t.Ru)await e(!0)}async function _i(t){for(const e of t.Ru)await e(!1)}function ny(t,e){const n=ee(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),bu(n)?Tu(n):tr(n).Ko()&&Iu(n,e))}function sy(t,e){const n=ee(t),s=tr(n);n.Au.delete(e),s.Ko()&&ry(n,e),n.Au.size===0&&(s.Ko()?s.jo():as(n)&&n.bu.set("Unknown"))}function Iu(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}tr(t).su(e)}function ry(t,e){t.Vu.qt(e),tr(t).iu(e)}function Tu(t){t.Vu=new aC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),tr(t).start(),t.bu.gu()}function bu(t){return as(t)&&!tr(t).Uo()&&t.Au.size>0}function as(t){return ee(t).vu.size===0}function iy(t){t.Vu=void 0}async function iA(t){t.Au.forEach((e,n)=>{Iu(t,e)})}async function oA(t,e){iy(t),bu(t)?(t.bu.Iu(e),Tu(t)):t.bu.set("Unknown")}async function aA(t,e,n){if(t.bu.set("Online"),e instanceof Km&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Au.delete(o),s.Vu.removeTarget(o))}(t,e)}catch(s){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Po(t,s)}else if(e instanceof Zi?t.Vu.Ht(e):e instanceof Hm?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(J.min()))try{const s=await Zm(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Vu.ce(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.Au.get(c);l&&r.Au.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,c)=>{const l=r.Au.get(a);if(!l)return;r.Au.set(a,l.withResumeToken(tt.EMPTY_BYTE_STRING,l.snapshotVersion)),ry(r,a);const u=new wn(l.target,a,c,l.sequenceNumber);Iu(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){$("RemoteStore","Failed to raise snapshot:",s),await Po(t,s)}}async function Po(t,e,n){if(!yi(e))throw e;t.vu.add(1),await _i(t),t.bu.set("Offline"),n||(n=()=>Zm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Ia(t)})}function oy(t,e){return e().catch(n=>Po(t,n,e))}async function Ta(t){const e=ee(t),n=Pn(e);let s=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;cA(e);)try{const r=await zC(e.localStore,s);if(r===null){e.Eu.length===0&&n.jo();break}s=r.batchId,lA(e,r)}catch(r){await Po(e,r)}ay(e)&&cy(e)}function cA(t){return as(t)&&t.Eu.length<10}function lA(t,e){t.Eu.push(e);const n=Pn(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function ay(t){return as(t)&&!Pn(t).Uo()&&t.Eu.length>0}function cy(t){Pn(t).start()}async function uA(t){Pn(t).hu()}async function hA(t){const e=Pn(t);for(const n of t.Eu)e.uu(n.mutations)}async function fA(t,e,n){const s=t.Eu.shift(),r=gu.from(s,e,n);await oy(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Ta(t)}async function dA(t,e){e&&Pn(t).ou&&await async function(n,s){if(r=s.code,rC(r)&&r!==_.ABORTED){const i=n.Eu.shift();Pn(n).Qo(),await oy(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ta(n)}var r}(t,e),ay(t)&&cy(t)}async function Xf(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const s=as(n);n.vu.add(3),await _i(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Ia(n)}async function pA(t,e){const n=ee(t);e?(n.vu.delete(2),await Ia(n)):e||(n.vu.add(2),await _i(n),n.bu.set("Unknown"))}function tr(t){return t.Su||(t.Su=function(e,n,s){const r=ee(e);return r.fu(),new eA(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:iA.bind(null,t),ao:oA.bind(null,t),nu:aA.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),bu(t)?Tu(t):t.bu.set("Unknown")):(await t.Su.stop(),iy(t))})),t.Su}function Pn(t){return t.Du||(t.Du=function(e,n,s){const r=ee(e);return r.fu(),new tA(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:uA.bind(null,t),ao:dA.bind(null,t),au:hA.bind(null,t),cu:fA.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Ta(t)):(await t.Du.stop(),t.Eu.length>0&&($("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Rn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Su(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cu(t,e){if(nn("AsyncQueue",`${e}: ${t}`),yi(t))return new M(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||j.comparator(n.key,s.key):(n,s)=>j.comparator(n.key,s.key),this.keyedMap=ur(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new Rs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Rs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Rs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(){this.Cu=new Se(j.comparator)}track(e){const n=e.doc.key,s=this.Cu.get(n);s?e.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Cu=this.Cu.remove(n):e.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):G():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,s)=>{e.push(s)}),e}}class js{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new js(e,n,Rs.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ma(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(){this.Nu=void 0,this.listeners=[]}}class mA{constructor(){this.queries=new er(e=>Nm(e),ma),this.onlineState="Unknown",this.ku=new Set}}async function yA(t,e){const n=ee(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new gA),r)try{i.Nu=await n.onListen(s)}catch(o){const a=Cu(o,`Initialization of query '${zc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Mu(n.onlineState),i.Nu&&e.$u(i.Nu)&&Au(n)}async function vA(t,e){const n=ee(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function wA(t,e){const n=ee(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.$u(r)&&(s=!0);o.Nu=r}}s&&Au(n)}function _A(t,e,n){const s=ee(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Au(t){t.ku.forEach(e=>{e.next()})}class EA{constructor(e,n,s){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new js(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=js.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e){this.key=e}}class uy{constructor(e){this.key=e}}class IA{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=se(),this.mutatedKeys=se(),this.tc=Dm(e),this.ec=new Rs(this.tc)}get nc(){return this.Yu}sc(e,n){const s=n?n.ic:new Zf,r=n?n.ec:this.ec;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const f=r.get(u),g=ya(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),E=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let C=!1;f&&g?f.data.isEqual(g.data)?y!==E&&(s.track({type:3,doc:g}),C=!0):this.rc(f,g)||(s.track({type:2,doc:g}),C=!0,(c&&this.tc(g,c)>0||l&&this.tc(g,l)<0)&&(a=!0)):!f&&g?(s.track({type:0,doc:g}),C=!0):f&&!g&&(s.track({type:1,doc:f}),C=!0,(c||l)&&(a=!0)),C&&(g?(o=o.add(g),i=E?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{ec:o,ic:s,zi:a,mutatedKeys:i}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort((l,u)=>function(h,f){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return g(h)-g(f)}(l.type,u.type)||this.tc(l.doc,u.doc)),this.oc(s);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,i.length!==0||c?{snapshot:new js(this.query,e.ec,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Zf,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=se(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return e.forEach(s=>{this.Zu.has(s)||n.push(new uy(s))}),this.Zu.forEach(s=>{e.has(s)||n.push(new ly(s))}),n}hc(e){this.Yu=e.ir,this.Zu=se();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return js.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class TA{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class bA{constructor(e){this.key=e,this.fc=!1}}class SA{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new er(a=>Nm(a),ma),this._c=new Map,this.mc=new Set,this.gc=new Se(j.comparator),this.yc=new Map,this.Ic=new wu,this.Tc={},this.Ec=new Map,this.Ac=Bs.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function CA(t,e){const n=LA(t);let s,r;const i=n.wc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.lc();else{const o=await WC(n.localStore,sn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await AA(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&ny(n.remoteStore,o)}return r}async function AA(t,e,n,s,r){t.Rc=(h,f,g)=>async function(y,E,C,k){let N=E.view.sc(C);N.zi&&(N=await Qf(y.localStore,E.query,!1).then(({documents:F})=>E.view.sc(F,N)));const V=k&&k.targetChanges.get(E.targetId),T=E.view.applyChanges(N,y.isPrimaryClient,V);return td(y,E.targetId,T.cc),T.snapshot}(t,h,f,g);const i=await Qf(t.localStore,e,!0),o=new IA(e,i.ir),a=o.sc(i.documents),c=wi.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);td(t,n,l.cc);const u=new TA(e,n,o);return t.wc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function RA(t,e){const n=ee(t),s=n.wc.get(e),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!ma(i,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Jc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),sy(n.remoteStore,s.targetId),Xc(n,s.targetId)}).catch(mi)):(Xc(n,s.targetId),await Jc(n.localStore,s.targetId,!0))}async function kA(t,e,n){const s=FA(t);try{const r=await function(i,o){const a=ee(i),c=Me.now(),l=o.reduce((f,g)=>f.add(g.key),se());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=rn(),y=se();return a.Zi.getEntries(f,l).next(E=>{g=E,g.forEach((C,k)=>{k.isValidDocument()||(y=y.add(C))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,g)).next(E=>{u=E;const C=[];for(const k of o){const N=ZS(k,u.get(k.key).overlayedDocument);N!=null&&C.push(new os(k.key,N,Em(N.value.mapValue),$t.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,C,o)}).next(E=>{h=E;const C=E.applyToLocalDocumentSet(u,y);return a.documentOverlayCache.saveOverlays(f,E.batchId,C)})}).then(()=>({batchId:h.batchId,changes:xm(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.Tc[i.currentUser.toKey()];c||(c=new Se(fe)),c=c.insert(o,a),i.Tc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Ei(s,r.changes),await Ta(s.remoteStore)}catch(r){const i=Cu(r,"Failed to persist write");n.reject(i)}}async function hy(t,e){const n=ee(t);try{const s=await HC(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.yc.get(i);o&&(Te(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.fc=!0:r.modifiedDocuments.size>0?Te(o.fc):r.removedDocuments.size>0&&(Te(o.fc),o.fc=!1))}),await Ei(n,s,e)}catch(s){await mi(s)}}function ed(t,e,n){const s=ee(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.wc.forEach((i,o)=>{const a=o.view.Mu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=ee(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Mu(o)&&(c=!0)}),c&&Au(a)}(s.eventManager,e),r.length&&s.dc.nu(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function NA(t,e,n){const s=ee(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.yc.get(e),i=r&&r.key;if(i){let o=new Se(j.comparator);o=o.insert(i,Ge.newNoDocument(i,J.min()));const a=se().add(i),c=new _a(J.min(),new Map,new Se(fe),o,a);await hy(s,c),s.gc=s.gc.remove(i),s.yc.delete(e),Ru(s)}else await Jc(s.localStore,e,!1).then(()=>Xc(s,e,n)).catch(mi)}async function DA(t,e){const n=ee(t),s=e.batch.batchId;try{const r=await qC(n.localStore,e);dy(n,s,null),fy(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ei(n,r)}catch(r){await mi(r)}}async function OA(t,e,n){const s=ee(t);try{const r=await function(i,o){const a=ee(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Te(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,e);dy(s,e,n),fy(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ei(s,r)}catch(r){await mi(r)}}function fy(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function dy(t,e,n){const s=ee(t);let r=s.Tc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Tc[s.currentUser.toKey()]=r}}function Xc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.wc.delete(s),n&&t.dc.Pc(s,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(s=>{t.Ic.containsKey(s)||py(t,s)})}function py(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(sy(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Ru(t))}function td(t,e,n){for(const s of n)s instanceof ly?(t.Ic.addReference(s.key,e),xA(t,s)):s instanceof uy?($("SyncEngine","Document no longer in limbo: "+s.key),t.Ic.removeReference(s.key,e),t.Ic.containsKey(s.key)||py(t,s.key)):G()}function xA(t,e){const n=e.key,s=n.path.canonicalString();t.gc.get(n)||t.mc.has(s)||($("SyncEngine","New document in limbo: "+n),t.mc.add(s),Ru(t))}function Ru(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new j(Ie.fromString(e)),s=t.Ac.next();t.yc.set(s,new bA(n)),t.gc=t.gc.insert(n,s),ny(t.remoteStore,new wn(sn(Rm(n.path)),s,"TargetPurposeLimboResolution",au.ct))}}async function Ei(t,e,n){const s=ee(t),r=[],i=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,c)=>{o.push(s.Rc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Eu.Li(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.dc.nu(r),await async function(a,c){const l=ee(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>A.forEach(c,h=>A.forEach(h.Fi,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>A.forEach(h.Bi,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!yi(u))throw u;$("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.Ji.get(h),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);l.Ji=l.Ji.insert(h,y)}}}(s.localStore,i))}async function PA(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const s=await Xm(n.localStore,e);n.currentUser=e,function(r,i){r.Ec.forEach(o=>{o.forEach(a=>{a.reject(new M(_.CANCELLED,i))})}),r.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ei(n,s.er)}}function MA(t,e){const n=ee(t),s=n.yc.get(e);if(s&&s.fc)return se().add(s.key);{let r=se();const i=n._c.get(e);if(!i)return r;for(const o of i){const a=n.wc.get(o);r=r.unionWith(a.view.nc)}return r}}function LA(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=hy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=MA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=NA.bind(null,e),e.dc.nu=wA.bind(null,e.eventManager),e.dc.Pc=_A.bind(null,e.eventManager),e}function FA(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=DA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=OA.bind(null,e),e}class nd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ea(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return jC(this.persistence,new VC,e.initialUser,this.serializer)}createPersistence(e){return new UC(_u.zs,this.serializer)}createSharedClientState(e){return new QC}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class UA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ed(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=PA.bind(null,this.syncEngine),await pA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new mA}createDatastore(e){const n=Ea(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new ZC(r));var r;return function(i,o,a,c){return new nA(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>ed(this.syncEngine,a,0),o=Jf.D()?new Jf:new YC,new rA(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new SA(s,r,i,o,a,c);return l&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ee(e);$("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await _i(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class $A{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):nn("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=We.UNAUTHENTICATED,this.clientId=vm.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{$("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>($("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Cu(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function rc(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Xm(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function sd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await jA(t);$("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Xf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Xf(e.remoteStore,i)),t._onlineComponents=e}function BA(t){return t.name==="FirebaseError"?t.code===_.FAILED_PRECONDITION||t.code===_.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function jA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await rc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!BA(n))throw n;Fs("Error using user provided cache. Falling back to memory cache: "+n),await rc(t,new nd)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await rc(t,new nd);return t._offlineComponents}async function gy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await sd(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await sd(t,new UA))),t._onlineComponents}function qA(t){return gy(t).then(e=>e.syncEngine)}async function HA(t){const e=await gy(t),n=e.eventManager;return n.onListen=CA.bind(null,e.syncEngine),n.onUnlisten=RA.bind(null,e.syncEngine),n}function KA(t,e,n={}){const s=new Rn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new $A({next:h=>{i.enqueueAndForget(()=>vA(r,u)),h.fromCache&&a.source==="server"?c.reject(new M(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new EA(o,l,{includeMetadataChanges:!0,Ku:!0});return yA(r,u)}(await HA(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function my(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const rd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy(t,e,n){if(!n)throw new M(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zA(t,e,n,s){if(e===!0&&s===!0)throw new M(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function id(t){if(!j.isDocumentKey(t))throw new M(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function od(t){if(j.isDocumentKey(t))throw new M(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ba(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function Jr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ba(t);throw new M(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function WA(t,e){if(e<=0)throw new M(_.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class ad{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new M(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}zA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=my((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new M(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new M(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new M(_.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=e.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,s}}class Sa{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ad({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ad(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new hS;switch(n.type){case"firstParty":return new gS(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new M(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=rd.get(e);n&&($("ComponentProvider","Removing Datastore"),rd.delete(e),n.terminate())}(this),Promise.resolve()}}function GA(t,e,n,s={}){var r;const i=(t=Jr(t,Sa))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Fs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=We.MOCK_USER;else{a=$0(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new M(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new We(l)}t._authCredentials=new fS(new ym(a,c))}}/**
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
 */class vt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}}class Fn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Fn(this.firestore,e,this._query)}}class kn extends Fn{constructor(e,n,s){super(e,n,Rm(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new j(e))}withConverter(e){return new kn(this.firestore,e,this._path)}}function ku(t,e,...n){if(t=lt(t),yy("collection","path",e),t instanceof Sa){const s=Ie.fromString(e,...n);return od(s),new kn(t,null,s)}{if(!(t instanceof vt||t instanceof kn))throw new M(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ie.fromString(e,...n));return od(s),new kn(t.firestore,null,s)}}function vy(t,e,...n){if(t=lt(t),arguments.length===1&&(e=vm.A()),yy("doc","path",e),t instanceof Sa){const s=Ie.fromString(e,...n);return id(s),new vt(t,null,new j(s))}{if(!(t instanceof vt||t instanceof kn))throw new M(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ie.fromString(e,...n));return id(s),new vt(t.firestore,t instanceof kn?t.converter:null,new j(s))}}/**
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
 */class QA{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new ey(this,"async_queue_retry"),this.Xc=()=>{const n=sc();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=sc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=sc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Rn;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!yi(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(s=>{this.Wc=s,this.Hc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw nn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(e,n,s){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const r=Su.createAndSchedule(this,e,n,s,i=>this.na(i));return this.zc.push(r),r}Zc(){this.Wc&&G()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class Ca extends Sa{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new QA,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||_y(this),this._firestoreClient.terminate()}}function YA(t,e){const n=typeof t=="object"?t:Dp(),s=typeof t=="string"?t:e||"(default)",r=Rl(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=F0("firestore");i&&GA(r,...i)}return r}function wy(t){return t._firestoreClient||_y(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function _y(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,l){return new AS(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,my(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new VA(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
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
 */class qs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qs(tt.fromBase64String(e))}catch(n){throw new M(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new qs(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Nu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ey{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA=/^__.*__$/;class XA{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new os(e,this.data,this.fieldMask,n,this.fieldTransforms):new vi(e,this.data,n,this.fieldTransforms)}}function Iy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Ou{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Ou(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:s,la:!1});return r.fa(e),r}da(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:s,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Mo(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Iy(this.ca)&&JA.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class ZA{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Ea(e)}ya(e,n,s,r=!1){return new Ou({ca:e,methodName:n,ga:s,path:Ye.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ty(t){const e=t._freezeSettings(),n=Ea(t._databaseId);return new ZA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function e1(t,e,n,s,r,i={}){const o=t.ya(i.merge||i.mergeFields?2:0,e,n,r);Cy("Data must be an object, but it was:",o,s);const a=by(s,o);let c,l;if(i.merge)c=new It(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=n1(e,h,n);if(!o.contains(f))throw new M(_.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);r1(u,f)||u.push(f)}c=new It(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new XA(new mt(a),c,l)}function t1(t,e,n,s=!1){return xu(n,t.ya(s?4:3,e))}function xu(t,e){if(Sy(t=lt(t)))return Cy("Unsupported field value:",e,t),by(t,e);if(t instanceof Ey)return function(n,s){if(!Iy(s.ca))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=xu(o,s.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=lt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return WS(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Me.fromDate(n);return{timestampValue:xo(s.serializer,r)}}if(n instanceof Me){const r=new Me(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:xo(s.serializer,r)}}if(n instanceof Du)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof qs)return{bytesValue:zm(s.serializer,n._byteString)};if(n instanceof vt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:vu(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${ba(n)}`)}(t,e)}function by(t,e){const n={};return wm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xs(t,(s,r)=>{const i=xu(r,e.ha(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Sy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof Du||t instanceof qs||t instanceof vt||t instanceof Ey)}function Cy(t,e,n){if(!Sy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ba(n);throw s==="an object"?e._a(t+" a custom object"):e._a(t+" "+s)}}function n1(t,e,n){if((e=lt(e))instanceof Nu)return e._internalPath;if(typeof e=="string")return Ay(t,e);throw Mo("Field path arguments must be of type string or ",t,!1,void 0,n)}const s1=new RegExp("[~\\*/\\[\\]]");function Ay(t,e,n){if(e.search(s1)>=0)throw Mo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Nu(...e.split("."))._internalPath}catch{throw Mo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Mo(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new M(_.INVALID_ARGUMENT,a+t+c)}function r1(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Ry{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new i1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Aa("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class i1 extends Ry{data(){return super.data()}}function Aa(t,e){return typeof e=="string"?Ay(t,e):e instanceof Nu?e._internalPath:e._delegate._internalPath}/**
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
 */function o1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pu{}class Mu extends Pu{}function ky(t,e,...n){let s=[];e instanceof Pu&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof Lu).length,o=r.filter(a=>a instanceof Ra).length;if(i>1||i>0&&o>0)throw new M(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class Ra extends Mu{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new Ra(e,n,s)}_apply(e){const n=this._parse(e);return Ny(e._query,n),new Fn(e.firestore,e.converter,Kc(e._query,n))}_parse(e){const n=Ty(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new M(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){ld(u,l);const f=[];for(const g of u)f.push(cd(a,r,g));h={arrayValue:{values:f}}}else h=cd(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||ld(u,l),h=t1(o,i,u,l==="in"||l==="not-in");return De.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function a1(t,e,n){const s=e,r=Aa("where",t);return Ra._create(r,s,n)}class Lu extends Pu{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Lu(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Rt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Ny(i,a),i=Kc(i,a)}(e._query,n),new Fn(e.firestore,e.converter,Kc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Fu extends Mu{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Fu(e,n)}_apply(e){const n=function(s,r,i){if(s.startAt!==null)throw new M(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new M(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Cs(r,i);return function(a,c){if(du(a)===null){const l=ga(a);l!==null&&Dy(a,l,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new Fn(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new Zs(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function c1(t,e="asc"){const n=e,s=Aa("orderBy",t);return Fu._create(s,n)}class Uu extends Mu{constructor(e,n,s){super(),this.type=e,this._limit=n,this._limitType=s}static _create(e,n,s){return new Uu(e,n,s)}_apply(e){return new Fn(e.firestore,e.converter,No(e._query,this._limit,this._limitType))}}function l1(t){return WA("limit",t),Uu._create("limit",t,"F")}function cd(t,e,n){if(typeof(n=lt(n))=="string"){if(n==="")throw new M(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!km(e)&&n.indexOf("/")!==-1)throw new M(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Ie.fromString(n));if(!j.isDocumentKey(s))throw new M(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Of(t,new j(s))}if(n instanceof vt)return Of(t,n._key);throw new M(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ba(n)}.`)}function ld(t,e){if(!Array.isArray(t)||t.length===0)throw new M(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ny(t,e){if(e.isInequality()){const s=ga(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new M(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=du(t);i!==null&&Dy(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new M(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Dy(t,e,n){if(!n.isEqual(e))throw new M(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class u1{convertValue(e,n="none"){switch(rs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ss(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return Xs(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Du(Ne(e.latitude),Ne(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=lu(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(zr(e));default:return null}}convertTimestamp(e){const n=xn(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ie.fromString(e);Te(Jm(s));const r=new Wr(s.get(1),s.get(3)),i=new j(s.popFirst(5));return r.isEqual(n)||nn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function h1(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class $i{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class f1 extends Ry{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new eo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Aa("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class eo extends f1{data(e={}){return super.data(e)}}class d1{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new $i(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new eo(this._firestore,this._userDataWriter,s.key,s,new $i(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new eo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new $i(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new eo(s._firestore,s._userDataWriter,o.doc.key,o.doc,new $i(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:p1(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function p1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}class g1 extends u1{constructor(e){super(),this.firestore=e}convertBytes(e){return new qs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,n)}}function Oy(t){t=Jr(t,Fn);const e=Jr(t.firestore,Ca),n=wy(e),s=new g1(e);return o1(t._query),KA(n,t._query).then(r=>new d1(e,s,t,r))}function m1(t){return xy(Jr(t.firestore,Ca),[new pu(t._key,$t.none())])}function y1(t,e){const n=Jr(t.firestore,Ca),s=vy(t),r=h1(t.converter,e);return xy(n,[e1(Ty(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,$t.exists(!1))]).then(()=>s)}function xy(t,e){return function(n,s){const r=new Rn;return n.asyncQueue.enqueueAndForget(async()=>kA(await qA(n),s,r)),r.promise}(wy(t),e)}(function(t,e=!0){(function(n){Js=n})(Gs),Ps(new Zn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Ca(new dS(n.getProvider("auth-internal")),new yS(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new M(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wr(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),An(Af,"3.13.0",t),An(Af,"3.13.0","esm2017")})();var v1="firebase",w1="9.23.0";/**
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
 */An(v1,w1,"app");const _1="AIzaSyBe3GGhSgxu9TycWVQRVYLMmbLwQIv-3oA",E1={apiKey:_1,authDomain:"easy-reach-1f358.firebaseapp.com",projectId:"easy-reach-1f358",storageBucket:"easy-reach-1f358.appspot.com",messagingSenderId:"344931134629",appId:"1:344931134629:web:c0e7bd69de1f0c383f714c"},I1=Np(E1),ka=YA(I1),Q1=async t=>{const e=ky(ku(ka,t),c1("created_at")),n=await Oy(e);return Array.from(n.docs).map(r=>({...r.data(),id:r.id}))},Y1=async(t,e)=>{const n=ku(ka,t);return await y1(n,e)},J1=async(t,e)=>{const n=vy(ka,t,e);return await m1(n)},T1=async t=>{const e=ky(ku(ka,"users"),a1("email","==",t),l1(1)),n=await Oy(e);if(Array.from(n.docs).map(r=>({...r.data(),id:r.id})).length)return!0;throw new Error("User not authorized to log in")},b1={__name:"HomeView",setup(t){const e=Fl(),n=()=>{const r=new Gt;dT(_o(),r).then(i=>{T1(i.user.email).then(()=>{e.setUser(i.user),Na.push({name:"Arrivals"})}).catch(o=>{console.log(o.message),s()})}).catch(i=>{console.log("error",i)})},s=()=>{sg(_o()).then(()=>{e.setUser(null)}).catch(r=>console.log("error",r))};return(r,i)=>(Xn(),Dr("main",null,[Lt("div",{class:"flex justify-center mt-20"},[Lt("button",{onClick:n,class:"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"}," Sign in with Google ")])]))}},Na=S0({history:j_("/easy-reach"),routes:[{path:"/",name:"Home",component:b1},{path:"/arrivals",name:"Arrivals",component:()=>Vh(()=>import("./ArrivalsView-4b487d78.js"),["assets/ArrivalsView-4b487d78.js","assets/ArrivalsOptionsStore-8c226d84.js","assets/ArrivalsView-e3b0c442.css"]),meta:{requiresAuth:!0}},{path:"/settings",name:"Settings",component:()=>Vh(()=>import("./SettingsView-a2bfaa64.js"),["assets/SettingsView-a2bfaa64.js","assets/ArrivalsOptionsStore-8c226d84.js"]),meta:{requiresAuth:!0}}]}),S1=()=>new Promise((t,e)=>{const n=Fl();zI(_o(),s=>{s?(n.setUser(s),t(s)):(n.setUser(null),e("User not logged in"))})});Na.beforeEach(async(t,e,n)=>{if(t.matched.some(s=>s.meta.requiresAuth))try{await S1(),n()}catch(s){console.log(s),n("/")}else n()});const C1={class:"border-b border-gray-200 bg-gray-900"},A1={class:"max-w-screen-xl flex justify-between mx-auto px-6 xl:px-0"},R1={class:"logo flex items-center"},k1={class:"flex items-center gap-4"},N1={__name:"HeaderMenu",setup(t){const e=A0(),n=i=>e.path===i?"bg-gray-600":"",s=Fl(),r=()=>{sg(_o()).then(()=>{s.setUser(null)}).catch(i=>console.log("error",i)).finally(()=>Na.push("/"))};return(i,o)=>{const a=uw("router-link");return Xn(),Dr("header",C1,[Lt("div",A1,[Lt("div",R1,[Oe(a,{to:"/",class:"truncate text-white font-medium border-l-4 border-gray-500 transition hover:text-gray-100 my-4 px-3 py-1"},{default:ji(()=>[zi(" Easy Reach ")]),_:1})]),Lt("div",k1,[Oe(a,{to:"/arrivals",class:Sr(`w-28 py-1.5 text-center text-sm text-white border border-gray-100 ${n("/arrivals")}`)},{default:ji(()=>[zi("ARRIVALS")]),_:1},8,["class"]),Oe(a,{to:"/settings",class:Sr(`w-28 py-1.5 text-center text-sm text-white border border-gray-100 ${n("/settings")}`)},{default:ji(()=>[zi("SETTINGS")]),_:1},8,["class"])]),In(s).user?(Xn(),Dr("div",{key:0,onClick:r,class:"text-white flex items-center px-4 cursor-pointer hover:text-gray-100"}," Sign out ")):Pw("",!0)])])}}},Py=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},D1={},O1={class:"text-center border-t border-gray-200 bg-gray-900 py-2"},x1=Lt("span",{class:"text-white"},"2023",-1),P1=[x1];function M1(t,e){return Xn(),Dr("footer",O1,P1)}const L1=Py(D1,[["render",M1]]);const F1={class:"flex flex-col h-screen justify-between text-slate-800"},U1={class:"mb-auto bg-white"},$1={class:"max-w-screen-xl mx-auto px-6 xl:px-0"},V1={__name:"App",setup(t){return(e,n)=>(Xn(),Dr("div",F1,[Oe(N1),Lt("main",U1,[Lt("div",$1,[Oe(In(Ep))])]),Oe(L1)]))}},B1=Py(V1,[["__scopeId","data-v-8ebac9e5"]]),$u=p_(B1);$u.use(y_());$u.use(Na);$u.mount("#app");export{Wt as F,q1 as S,Py as _,Lt as a,zi as b,Dr as c,T_ as d,K1 as e,dt as f,Oe as g,Dw as h,z1 as i,W1 as j,Y1 as k,Me as l,J1 as m,Sr as n,Xn as o,ji as p,Q1 as q,fl as r,j1 as t,In as u,G1 as v,H1 as w};

(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function cs(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const Q={},xt=[],Re=()=>{},pc=()=>!1,gc=/^on[^a-z]/,ar=t=>gc.test(t),ls=t=>t.startsWith("onUpdate:"),se=Object.assign,us=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},mc=Object.prototype.hasOwnProperty,W=(t,e)=>mc.call(t,e),B=Array.isArray,Mt=t=>cr(t)==="[object Map]",fo=t=>cr(t)==="[object Set]",$=t=>typeof t=="function",ie=t=>typeof t=="string",fs=t=>typeof t=="symbol",Z=t=>t!==null&&typeof t=="object",ho=t=>Z(t)&&$(t.then)&&$(t.catch),po=Object.prototype.toString,cr=t=>po.call(t),_c=t=>cr(t).slice(8,-1),go=t=>cr(t)==="[object Object]",ds=t=>ie(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Bn=cs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),lr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},vc=/-(\w)/g,Ht=lr(t=>t.replace(vc,(e,n)=>n?n.toUpperCase():"")),yc=/\B([A-Z])/g,Jt=lr(t=>t.replace(yc,"-$1").toLowerCase()),mo=lr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Er=lr(t=>t?`on${mo(t)}`:""),un=(t,e)=>!Object.is(t,e),Ir=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Gn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},bc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let qs;const Br=()=>qs||(qs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function hs(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ie(r)?Tc(r):hs(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ie(t))return t;if(Z(t))return t}}const Ec=/;(?![^(]*\))/g,Ic=/:([^]+)/,wc=/\/\*[^]*?\*\//g;function Tc(t){const e={};return t.replace(wc,"").split(Ec).forEach(n=>{if(n){const r=n.split(Ic);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ps(t){let e="";if(ie(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const r=ps(t[n]);r&&(e+=r+" ")}else if(Z(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Rc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sc=cs(Rc);function _o(t){return!!t||t===""}const Cc=t=>ie(t)?t:t==null?"":B(t)||Z(t)&&(t.toString===po||!$(t.toString))?JSON.stringify(t,vo,2):String(t),vo=(t,e)=>e&&e.__v_isRef?vo(t,e.value):Mt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:fo(e)?{[`Set(${e.size})`]:[...e.values()]}:Z(e)&&!B(e)&&!go(e)?String(e):e;let Ie;class yo{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ie,!e&&Ie&&(this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ie;try{return Ie=this,e()}finally{Ie=n}}}on(){Ie=this}off(){Ie=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Ac(t){return new yo(t)}function Pc(t,e=Ie){e&&e.active&&e.effects.push(t)}function Oc(){return Ie}const gs=t=>{const e=new Set(t);return e.w=0,e.n=0,e},bo=t=>(t.w&ft)>0,Eo=t=>(t.n&ft)>0,kc=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ft},Nc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];bo(s)&&!Eo(s)?s.delete(t):e[n++]=s,s.w&=~ft,s.n&=~ft}e.length=n}},$r=new WeakMap;let nn=0,ft=1;const Hr=30;let we;const Et=Symbol(""),jr=Symbol("");class ms{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Pc(this,r)}run(){if(!this.active)return this.fn();let e=we,n=ot;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=we,we=this,ot=!0,ft=1<<++nn,nn<=Hr?kc(this):Gs(this),this.fn()}finally{nn<=Hr&&Nc(this),ft=1<<--nn,we=this.parent,ot=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){we===this?this.deferStop=!0:this.active&&(Gs(this),this.onStop&&this.onStop(),this.active=!1)}}function Gs(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ot=!0;const Io=[];function Yt(){Io.push(ot),ot=!1}function Xt(){const t=Io.pop();ot=t===void 0?!0:t}function pe(t,e,n){if(ot&&we){let r=$r.get(t);r||$r.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=gs()),wo(s)}}function wo(t,e){let n=!1;nn<=Hr?Eo(t)||(t.n|=ft,n=!bo(t)):n=!t.has(we),n&&(t.add(we),we.deps.push(t))}function qe(t,e,n,r,s,i){const o=$r.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&B(t)){const a=Number(r);o.forEach((l,f)=>{(f==="length"||f>=a)&&c.push(l)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":B(t)?ds(n)&&c.push(o.get("length")):(c.push(o.get(Et)),Mt(t)&&c.push(o.get(jr)));break;case"delete":B(t)||(c.push(o.get(Et)),Mt(t)&&c.push(o.get(jr)));break;case"set":Mt(t)&&c.push(o.get(Et));break}if(c.length===1)c[0]&&Wr(c[0]);else{const a=[];for(const l of c)l&&a.push(...l);Wr(gs(a))}}function Wr(t,e){const n=B(t)?t:[...t];for(const r of n)r.computed&&Js(r);for(const r of n)r.computed||Js(r)}function Js(t,e){(t!==we||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Dc=cs("__proto__,__v_isRef,__isVue"),To=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(fs)),xc=_s(),Mc=_s(!1,!0),Lc=_s(!0),Ys=Uc();function Uc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=V(this);for(let i=0,o=this.length;i<o;i++)pe(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(V)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Yt();const r=V(this)[e].apply(this,n);return Xt(),r}}),t}function Fc(t){const e=V(this);return pe(e,"has",t),e.hasOwnProperty(t)}function _s(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?el:Po:e?Ao:Co).get(r))return r;const o=B(r);if(!t){if(o&&W(Ys,s))return Reflect.get(Ys,s,i);if(s==="hasOwnProperty")return Fc}const c=Reflect.get(r,s,i);return(fs(s)?To.has(s):Dc(s))||(t||pe(r,"get",s),e)?c:le(c)?o&&ds(s)?c:c.value:Z(c)?t?Oo(c):In(c):c}}const Bc=Ro(),$c=Ro(!0);function Ro(t=!1){return function(n,r,s,i){let o=n[r];if(jt(o)&&le(o)&&!le(s))return!1;if(!t&&(!Jn(s)&&!jt(s)&&(o=V(o),s=V(s)),!B(n)&&le(o)&&!le(s)))return o.value=s,!0;const c=B(n)&&ds(r)?Number(r)<n.length:W(n,r),a=Reflect.set(n,r,s,i);return n===V(i)&&(c?un(s,o)&&qe(n,"set",r,s):qe(n,"add",r,s)),a}}function Hc(t,e){const n=W(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&qe(t,"delete",e,void 0),r}function jc(t,e){const n=Reflect.has(t,e);return(!fs(e)||!To.has(e))&&pe(t,"has",e),n}function Wc(t){return pe(t,"iterate",B(t)?"length":Et),Reflect.ownKeys(t)}const So={get:xc,set:Bc,deleteProperty:Hc,has:jc,ownKeys:Wc},Vc={get:Lc,set(t,e){return!0},deleteProperty(t,e){return!0}},zc=se({},So,{get:Mc,set:$c}),vs=t=>t,ur=t=>Reflect.getPrototypeOf(t);function Nn(t,e,n=!1,r=!1){t=t.__v_raw;const s=V(t),i=V(e);n||(e!==i&&pe(s,"get",e),pe(s,"get",i));const{has:o}=ur(s),c=r?vs:n?Is:fn;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function Dn(t,e=!1){const n=this.__v_raw,r=V(n),s=V(t);return e||(t!==s&&pe(r,"has",t),pe(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function xn(t,e=!1){return t=t.__v_raw,!e&&pe(V(t),"iterate",Et),Reflect.get(t,"size",t)}function Xs(t){t=V(t);const e=V(this);return ur(e).has.call(e,t)||(e.add(t),qe(e,"add",t,t)),this}function Qs(t,e){e=V(e);const n=V(this),{has:r,get:s}=ur(n);let i=r.call(n,t);i||(t=V(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?un(e,o)&&qe(n,"set",t,e):qe(n,"add",t,e),this}function Zs(t){const e=V(this),{has:n,get:r}=ur(e);let s=n.call(e,t);s||(t=V(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&qe(e,"delete",t,void 0),i}function ei(){const t=V(this),e=t.size!==0,n=t.clear();return e&&qe(t,"clear",void 0,void 0),n}function Mn(t,e){return function(r,s){const i=this,o=i.__v_raw,c=V(o),a=e?vs:t?Is:fn;return!t&&pe(c,"iterate",Et),o.forEach((l,f)=>r.call(s,a(l),a(f),i))}}function Ln(t,e,n){return function(...r){const s=this.__v_raw,i=V(s),o=Mt(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,l=s[t](...r),f=n?vs:e?Is:fn;return!e&&pe(i,"iterate",a?jr:Et),{next(){const{value:h,done:g}=l.next();return g?{value:h,done:g}:{value:c?[f(h[0]),f(h[1])]:f(h),done:g}},[Symbol.iterator](){return this}}}}function Qe(t){return function(...e){return t==="delete"?!1:this}}function Kc(){const t={get(i){return Nn(this,i)},get size(){return xn(this)},has:Dn,add:Xs,set:Qs,delete:Zs,clear:ei,forEach:Mn(!1,!1)},e={get(i){return Nn(this,i,!1,!0)},get size(){return xn(this)},has:Dn,add:Xs,set:Qs,delete:Zs,clear:ei,forEach:Mn(!1,!0)},n={get(i){return Nn(this,i,!0)},get size(){return xn(this,!0)},has(i){return Dn.call(this,i,!0)},add:Qe("add"),set:Qe("set"),delete:Qe("delete"),clear:Qe("clear"),forEach:Mn(!0,!1)},r={get(i){return Nn(this,i,!0,!0)},get size(){return xn(this,!0)},has(i){return Dn.call(this,i,!0)},add:Qe("add"),set:Qe("set"),delete:Qe("delete"),clear:Qe("clear"),forEach:Mn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ln(i,!1,!1),n[i]=Ln(i,!0,!1),e[i]=Ln(i,!1,!0),r[i]=Ln(i,!0,!0)}),[t,n,e,r]}const[qc,Gc,Jc,Yc]=Kc();function ys(t,e){const n=e?t?Yc:Jc:t?Gc:qc;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(W(n,s)&&s in r?n:r,s,i)}const Xc={get:ys(!1,!1)},Qc={get:ys(!1,!0)},Zc={get:ys(!0,!1)},Co=new WeakMap,Ao=new WeakMap,Po=new WeakMap,el=new WeakMap;function tl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nl(t){return t.__v_skip||!Object.isExtensible(t)?0:tl(_c(t))}function In(t){return jt(t)?t:bs(t,!1,So,Xc,Co)}function rl(t){return bs(t,!1,zc,Qc,Ao)}function Oo(t){return bs(t,!0,Vc,Zc,Po)}function bs(t,e,n,r,s){if(!Z(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=nl(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Lt(t){return jt(t)?Lt(t.__v_raw):!!(t&&t.__v_isReactive)}function jt(t){return!!(t&&t.__v_isReadonly)}function Jn(t){return!!(t&&t.__v_isShallow)}function ko(t){return Lt(t)||jt(t)}function V(t){const e=t&&t.__v_raw;return e?V(e):t}function Es(t){return Gn(t,"__v_skip",!0),t}const fn=t=>Z(t)?In(t):t,Is=t=>Z(t)?Oo(t):t;function No(t){ot&&we&&(t=V(t),wo(t.dep||(t.dep=gs())))}function Do(t,e){t=V(t);const n=t.dep;n&&Wr(n)}function le(t){return!!(t&&t.__v_isRef===!0)}function ws(t){return xo(t,!1)}function sl(t){return xo(t,!0)}function xo(t,e){return le(t)?t:new il(t,e)}class il{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:V(e),this._value=n?e:fn(e)}get value(){return No(this),this._value}set value(e){const n=this.__v_isShallow||Jn(e)||jt(e);e=n?e:V(e),un(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:fn(e),Do(this))}}function It(t){return le(t)?t.value:t}const ol={get:(t,e,n)=>It(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return le(s)&&!le(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Mo(t){return Lt(t)?t:new Proxy(t,ol)}class al{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ms(e,()=>{this._dirty||(this._dirty=!0,Do(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=V(this);return No(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function cl(t,e,n=!1){let r,s;const i=$(t);return i?(r=t,s=Re):(r=t.get,s=t.set),new al(r,s,i||!s,n)}function at(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){fr(i,e,n)}return s}function Se(t,e,n,r){if($(t)){const i=at(t,e,n,r);return i&&ho(i)&&i.catch(o=>{fr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Se(t[i],e,n,r));return s}function fr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=n;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,c)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){at(a,null,10,[t,o,c]);return}}ll(t,n,s,r)}function ll(t,e,n,r=!0){console.error(t)}let dn=!1,Vr=!1;const ae=[];let Me=0;const Ut=[];let je=null,vt=0;const Lo=Promise.resolve();let Ts=null;function Uo(t){const e=Ts||Lo;return t?e.then(this?t.bind(this):t):e}function ul(t){let e=Me+1,n=ae.length;for(;e<n;){const r=e+n>>>1;hn(ae[r])<t?e=r+1:n=r}return e}function Rs(t){(!ae.length||!ae.includes(t,dn&&t.allowRecurse?Me+1:Me))&&(t.id==null?ae.push(t):ae.splice(ul(t.id),0,t),Fo())}function Fo(){!dn&&!Vr&&(Vr=!0,Ts=Lo.then($o))}function fl(t){const e=ae.indexOf(t);e>Me&&ae.splice(e,1)}function dl(t){B(t)?Ut.push(...t):(!je||!je.includes(t,t.allowRecurse?vt+1:vt))&&Ut.push(t),Fo()}function ti(t,e=dn?Me+1:0){for(;e<ae.length;e++){const n=ae[e];n&&n.pre&&(ae.splice(e,1),e--,n())}}function Bo(t){if(Ut.length){const e=[...new Set(Ut)];if(Ut.length=0,je){je.push(...e);return}for(je=e,je.sort((n,r)=>hn(n)-hn(r)),vt=0;vt<je.length;vt++)je[vt]();je=null,vt=0}}const hn=t=>t.id==null?1/0:t.id,hl=(t,e)=>{const n=hn(t)-hn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function $o(t){Vr=!1,dn=!0,ae.sort(hl);const e=Re;try{for(Me=0;Me<ae.length;Me++){const n=ae[Me];n&&n.active!==!1&&at(n,null,14)}}finally{Me=0,ae.length=0,Bo(),dn=!1,Ts=null,(ae.length||Ut.length)&&$o()}}function pl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Q;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:g}=r[f]||Q;g&&(s=n.map(y=>ie(y)?y.trim():y)),h&&(s=n.map(bc))}let c,a=r[c=Er(e)]||r[c=Er(Ht(e))];!a&&i&&(a=r[c=Er(Jt(e))]),a&&Se(a,t,6,s);const l=r[c+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Se(l,t,6,s)}}function Ho(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!$(t)){const a=l=>{const f=Ho(l,e,!0);f&&(c=!0,se(o,f))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(Z(t)&&r.set(t,null),null):(B(i)?i.forEach(a=>o[a]=null):se(o,i),Z(t)&&r.set(t,o),o)}function dr(t,e){return!t||!ar(e)?!1:(e=e.slice(2).replace(/Once$/,""),W(t,e[0].toLowerCase()+e.slice(1))||W(t,Jt(e))||W(t,e))}let Le=null,hr=null;function Yn(t){const e=Le;return Le=t,hr=t&&t.type.__scopeId||null,e}function gl(t){hr=t}function ml(){hr=null}function _l(t,e=Le,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&fi(-1);const i=Yn(e);let o;try{o=t(...s)}finally{Yn(i),r._d&&fi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function wr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:c,attrs:a,emit:l,render:f,renderCache:h,data:g,setupState:y,ctx:C,inheritAttrs:P}=t;let L,k;const x=Yn(t);try{if(n.shapeFlag&4){const M=s||r;L=xe(f.call(M,M,h,i,y,g,C)),k=a}else{const M=e;L=xe(M.length>1?M(i,{attrs:a,slots:c,emit:l}):M(i,null)),k=e.props?a:vl(a)}}catch(M){on.length=0,fr(M,t,1),L=ye(pn)}let j=L;if(k&&P!==!1){const M=Object.keys(k),{shapeFlag:te}=j;M.length&&te&7&&(o&&M.some(ls)&&(k=yl(k,o)),j=Wt(j,k))}return n.dirs&&(j=Wt(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),L=j,Yn(x),L}const vl=t=>{let e;for(const n in t)(n==="class"||n==="style"||ar(n))&&((e||(e={}))[n]=t[n]);return e},yl=(t,e)=>{const n={};for(const r in t)(!ls(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function bl(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?ni(r,o,l):!!o;if(a&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const g=f[h];if(o[g]!==r[g]&&!dr(l,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?ni(r,o,l):!0:!!o;return!1}function ni(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!dr(n,i))return!0}return!1}function El({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Il=t=>t.__isSuspense;function wl(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):dl(t)}const Un={};function $n(t,e,n){return jo(t,e,n)}function jo(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Q){var c;const a=Oc()===((c=ce)==null?void 0:c.scope)?ce:null;let l,f=!1,h=!1;if(le(t)?(l=()=>t.value,f=Jn(t)):Lt(t)?(l=()=>t,r=!0):B(t)?(h=!0,f=t.some(M=>Lt(M)||Jn(M)),l=()=>t.map(M=>{if(le(M))return M.value;if(Lt(M))return Dt(M);if($(M))return at(M,a,2)})):$(t)?e?l=()=>at(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return g&&g(),Se(t,a,3,[y])}:l=Re,e&&r){const M=l;l=()=>Dt(M())}let g,y=M=>{g=x.onStop=()=>{at(M,a,4)}},C;if(mn)if(y=Re,e?n&&Se(e,a,3,[l(),h?[]:void 0,y]):l(),s==="sync"){const M=gu();C=M.__watcherHandles||(M.__watcherHandles=[])}else return Re;let P=h?new Array(t.length).fill(Un):Un;const L=()=>{if(x.active)if(e){const M=x.run();(r||f||(h?M.some((te,ne)=>un(te,P[ne])):un(M,P)))&&(g&&g(),Se(e,a,3,[M,P===Un?void 0:h&&P[0]===Un?[]:P,y]),P=M)}else x.run()};L.allowRecurse=!!e;let k;s==="sync"?k=L:s==="post"?k=()=>he(L,a&&a.suspense):(L.pre=!0,a&&(L.id=a.uid),k=()=>Rs(L));const x=new ms(l,k);e?n?L():P=x.run():s==="post"?he(x.run.bind(x),a&&a.suspense):x.run();const j=()=>{x.stop(),a&&a.scope&&us(a.scope.effects,x)};return C&&C.push(j),j}function Tl(t,e,n){const r=this.proxy,s=ie(t)?t.includes(".")?Wo(r,t):()=>r[t]:t.bind(r,r);let i;$(e)?i=e:(i=e.handler,n=e);const o=ce;Vt(this);const c=jo(s,i.bind(r),n);return o?Vt(o):wt(),c}function Wo(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Dt(t,e){if(!Z(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),le(t))Dt(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)Dt(t[n],e);else if(fo(t)||Mt(t))t.forEach(n=>{Dt(n,e)});else if(go(t))for(const n in t)Dt(t[n],e);return t}function gt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(Yt(),Se(a,n,8,[t.el,c,t,e]),Xt())}}function Vo(t,e){return $(t)?(()=>se({name:t.name},e,{setup:t}))():t}const Hn=t=>!!t.type.__asyncLoader,zo=t=>t.type.__isKeepAlive;function Rl(t,e){Ko(t,"a",e)}function Sl(t,e){Ko(t,"da",e)}function Ko(t,e,n=ce){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(pr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)zo(s.parent.vnode)&&Cl(r,e,n,s),s=s.parent}}function Cl(t,e,n,r){const s=pr(e,t,r,!0);Go(()=>{us(r[e],s)},n)}function pr(t,e,n=ce,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Yt(),Vt(n);const c=Se(e,n,t,o);return wt(),Xt(),c});return r?s.unshift(i):s.push(i),i}}const Je=t=>(e,n=ce)=>(!mn||t==="sp")&&pr(t,(...r)=>e(...r),n),Al=Je("bm"),qo=Je("m"),Pl=Je("bu"),Ol=Je("u"),kl=Je("bum"),Go=Je("um"),Nl=Je("sp"),Dl=Je("rtg"),xl=Je("rtc");function Ml(t,e=ce){pr("ec",t,e)}const Ll=Symbol.for("v-ndc"),zr=t=>t?oa(t)?Os(t)||t.proxy:zr(t.parent):null,sn=se(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>zr(t.parent),$root:t=>zr(t.root),$emit:t=>t.emit,$options:t=>Ss(t),$forceUpdate:t=>t.f||(t.f=()=>Rs(t.update)),$nextTick:t=>t.n||(t.n=Uo.bind(t.proxy)),$watch:t=>Tl.bind(t)}),Tr=(t,e)=>t!==Q&&!t.__isScriptSetup&&W(t,e),Ul={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let l;if(e[0]!=="$"){const y=o[e];if(y!==void 0)switch(y){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Tr(r,e))return o[e]=1,r[e];if(s!==Q&&W(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&W(l,e))return o[e]=3,i[e];if(n!==Q&&W(n,e))return o[e]=4,n[e];Kr&&(o[e]=0)}}const f=sn[e];let h,g;if(f)return e==="$attrs"&&pe(t,"get",e),f(t);if((h=c.__cssModules)&&(h=h[e]))return h;if(n!==Q&&W(n,e))return o[e]=4,n[e];if(g=a.config.globalProperties,W(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Tr(s,e)?(s[e]=n,!0):r!==Q&&W(r,e)?(r[e]=n,!0):W(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Q&&W(t,o)||Tr(e,o)||(c=i[0])&&W(c,o)||W(r,o)||W(sn,o)||W(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:W(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ri(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Kr=!0;function Fl(t){const e=Ss(t),n=t.proxy,r=t.ctx;Kr=!1,e.beforeCreate&&si(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:f,beforeMount:h,mounted:g,beforeUpdate:y,updated:C,activated:P,deactivated:L,beforeDestroy:k,beforeUnmount:x,destroyed:j,unmounted:M,render:te,renderTracked:ne,renderTriggered:ge,errorCaptured:be,serverPrefetch:Ae,expose:_e,inheritAttrs:Ye,components:pt,directives:Pe,filters:Qt}=e;if(l&&Bl(l,r,null),o)for(const J in o){const z=o[J];$(z)&&(r[J]=z.bind(n))}if(s){const J=s.call(n,n);Z(J)&&(t.data=In(J))}if(Kr=!0,i)for(const J in i){const z=i[J],$e=$(z)?z.bind(n,n):$(z.get)?z.get.bind(n,n):Re,Xe=!$(z)&&$(z.set)?z.set.bind(n):Re,Oe=ve({get:$e,set:Xe});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>Oe.value,set:de=>Oe.value=de})}if(c)for(const J in c)Jo(c[J],r,n,J);if(a){const J=$(a)?a.call(n):a;Reflect.ownKeys(J).forEach(z=>{jn(z,J[z])})}f&&si(f,t,"c");function re(J,z){B(z)?z.forEach($e=>J($e.bind(n))):z&&J(z.bind(n))}if(re(Al,h),re(qo,g),re(Pl,y),re(Ol,C),re(Rl,P),re(Sl,L),re(Ml,be),re(xl,ne),re(Dl,ge),re(kl,x),re(Go,M),re(Nl,Ae),B(_e))if(_e.length){const J=t.exposed||(t.exposed={});_e.forEach(z=>{Object.defineProperty(J,z,{get:()=>n[z],set:$e=>n[z]=$e})})}else t.exposed||(t.exposed={});te&&t.render===Re&&(t.render=te),Ye!=null&&(t.inheritAttrs=Ye),pt&&(t.components=pt),Pe&&(t.directives=Pe)}function Bl(t,e,n=Re){B(t)&&(t=qr(t));for(const r in t){const s=t[r];let i;Z(s)?"default"in s?i=Ke(s.from||r,s.default,!0):i=Ke(s.from||r):i=Ke(s),le(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function si(t,e,n){Se(B(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Jo(t,e,n,r){const s=r.includes(".")?Wo(n,r):()=>n[r];if(ie(t)){const i=e[t];$(i)&&$n(s,i)}else if($(t))$n(s,t.bind(n));else if(Z(t))if(B(t))t.forEach(i=>Jo(i,e,n,r));else{const i=$(t.handler)?t.handler.bind(n):e[t.handler];$(i)&&$n(s,i,t)}}function Ss(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(l=>Xn(a,l,o,!0)),Xn(a,e,o)),Z(e)&&i.set(e,a),a}function Xn(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Xn(t,i,n,!0),s&&s.forEach(o=>Xn(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=$l[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const $l={data:ii,props:oi,emits:oi,methods:rn,computed:rn,beforeCreate:fe,created:fe,beforeMount:fe,mounted:fe,beforeUpdate:fe,updated:fe,beforeDestroy:fe,beforeUnmount:fe,destroyed:fe,unmounted:fe,activated:fe,deactivated:fe,errorCaptured:fe,serverPrefetch:fe,components:rn,directives:rn,watch:jl,provide:ii,inject:Hl};function ii(t,e){return e?t?function(){return se($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function Hl(t,e){return rn(qr(t),qr(e))}function qr(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function fe(t,e){return t?[...new Set([].concat(t,e))]:e}function rn(t,e){return t?se(Object.create(null),t,e):e}function oi(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:se(Object.create(null),ri(t),ri(e??{})):e}function jl(t,e){if(!t)return e;if(!e)return t;const n=se(Object.create(null),t);for(const r in e)n[r]=fe(t[r],e[r]);return n}function Yo(){return{app:null,config:{isNativeTag:pc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wl=0;function Vl(t,e){return function(r,s=null){$(r)||(r=se({},r)),s!=null&&!Z(s)&&(s=null);const i=Yo(),o=new Set;let c=!1;const a=i.app={_uid:Wl++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:mu,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&$(l.install)?(o.add(l),l.install(a,...f)):$(l)&&(o.add(l),l(a,...f))),a},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),a},component(l,f){return f?(i.components[l]=f,a):i.components[l]},directive(l,f){return f?(i.directives[l]=f,a):i.directives[l]},mount(l,f,h){if(!c){const g=ye(r,s);return g.appContext=i,f&&e?e(g,l):t(g,l,h),c=!0,a._container=l,l.__vue_app__=a,Os(g.component)||g.component.proxy}},unmount(){c&&(t(null,a._container),delete a._container.__vue_app__)},provide(l,f){return i.provides[l]=f,a},runWithContext(l){Qn=a;try{return l()}finally{Qn=null}}};return a}}let Qn=null;function jn(t,e){if(ce){let n=ce.provides;const r=ce.parent&&ce.parent.provides;r===n&&(n=ce.provides=Object.create(r)),n[t]=e}}function Ke(t,e,n=!1){const r=ce||Le;if(r||Qn){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Qn._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&$(e)?e.call(r&&r.proxy):e}}function zl(t,e,n,r=!1){const s={},i={};Gn(i,mr,1),t.propsDefaults=Object.create(null),Xo(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:rl(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Kl(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=V(s),[a]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let g=f[h];if(dr(t.emitsOptions,g))continue;const y=e[g];if(a)if(W(i,g))y!==i[g]&&(i[g]=y,l=!0);else{const C=Ht(g);s[C]=Gr(a,c,C,y,t,!1)}else y!==i[g]&&(i[g]=y,l=!0)}}}else{Xo(t,e,s,i)&&(l=!0);let f;for(const h in c)(!e||!W(e,h)&&((f=Jt(h))===h||!W(e,f)))&&(a?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=Gr(a,c,h,void 0,t,!0)):delete s[h]);if(i!==c)for(const h in i)(!e||!W(e,h))&&(delete i[h],l=!0)}l&&qe(t,"set","$attrs")}function Xo(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(Bn(a))continue;const l=e[a];let f;s&&W(s,f=Ht(a))?!i||!i.includes(f)?n[f]=l:(c||(c={}))[f]=l:dr(t.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=V(n),l=c||Q;for(let f=0;f<i.length;f++){const h=i[f];n[h]=Gr(s,a,h,l[h],t,!W(l,h))}}return o}function Gr(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=W(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&$(a)){const{propsDefaults:l}=s;n in l?r=l[n]:(Vt(s),r=l[n]=a.call(null,e),wt())}else r=a}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Jt(n))&&(r=!0))}return r}function Qo(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!$(t)){const f=h=>{a=!0;const[g,y]=Qo(h,e,!0);se(o,g),y&&c.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!a)return Z(t)&&r.set(t,xt),xt;if(B(i))for(let f=0;f<i.length;f++){const h=Ht(i[f]);ai(h)&&(o[h]=Q)}else if(i)for(const f in i){const h=Ht(f);if(ai(h)){const g=i[f],y=o[h]=B(g)||$(g)?{type:g}:se({},g);if(y){const C=ui(Boolean,y.type),P=ui(String,y.type);y[0]=C>-1,y[1]=P<0||C<P,(C>-1||W(y,"default"))&&c.push(h)}}}const l=[o,c];return Z(t)&&r.set(t,l),l}function ai(t){return t[0]!=="$"}function ci(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function li(t,e){return ci(t)===ci(e)}function ui(t,e){return B(e)?e.findIndex(n=>li(n,t)):$(e)&&li(e,t)?0:-1}const Zo=t=>t[0]==="_"||t==="$stable",Cs=t=>B(t)?t.map(xe):[xe(t)],ql=(t,e,n)=>{if(e._n)return e;const r=_l((...s)=>Cs(e(...s)),n);return r._c=!1,r},ea=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Zo(s))continue;const i=t[s];if($(i))e[s]=ql(s,i,r);else if(i!=null){const o=Cs(i);e[s]=()=>o}}},ta=(t,e)=>{const n=Cs(e);t.slots.default=()=>n},Gl=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=V(e),Gn(e,"_",n)):ea(e,t.slots={})}else t.slots={},e&&ta(t,e);Gn(t.slots,mr,1)},Jl=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Q;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(se(s,e),!n&&c===1&&delete s._):(i=!e.$stable,ea(e,s)),o=e}else e&&(ta(t,e),o={default:1});if(i)for(const c in s)!Zo(c)&&!(c in o)&&delete s[c]};function Jr(t,e,n,r,s=!1){if(B(t)){t.forEach((g,y)=>Jr(g,e&&(B(e)?e[y]:e),n,r,s));return}if(Hn(r)&&!s)return;const i=r.shapeFlag&4?Os(r.component)||r.component.proxy:r.el,o=s?null:i,{i:c,r:a}=t,l=e&&e.r,f=c.refs===Q?c.refs={}:c.refs,h=c.setupState;if(l!=null&&l!==a&&(ie(l)?(f[l]=null,W(h,l)&&(h[l]=null)):le(l)&&(l.value=null)),$(a))at(a,c,12,[o,f]);else{const g=ie(a),y=le(a);if(g||y){const C=()=>{if(t.f){const P=g?W(h,a)?h[a]:f[a]:a.value;s?B(P)&&us(P,i):B(P)?P.includes(i)||P.push(i):g?(f[a]=[i],W(h,a)&&(h[a]=f[a])):(a.value=[i],t.k&&(f[t.k]=a.value))}else g?(f[a]=o,W(h,a)&&(h[a]=o)):y&&(a.value=o,t.k&&(f[t.k]=o))};o?(C.id=-1,he(C,n)):C()}}}const he=wl;function Yl(t){return Xl(t)}function Xl(t,e){const n=Br();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:f,parentNode:h,nextSibling:g,setScopeId:y=Re,insertStaticContent:C}=t,P=(u,d,p,m=null,v=null,b=null,R=!1,I=null,w=!!d.dynamicChildren)=>{if(u===d)return;u&&!en(u,d)&&(m=_(u),de(u,v,b,!0),u=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:E,ref:N,shapeFlag:A}=d;switch(E){case gr:L(u,d,p,m);break;case pn:k(u,d,p,m);break;case Rr:u==null&&x(d,p,m,R);break;case De:pt(u,d,p,m,v,b,R,I,w);break;default:A&1?te(u,d,p,m,v,b,R,I,w):A&6?Pe(u,d,p,m,v,b,R,I,w):(A&64||A&128)&&E.process(u,d,p,m,v,b,R,I,w,T)}N!=null&&v&&Jr(N,u&&u.ref,b,d||u,!d)},L=(u,d,p,m)=>{if(u==null)r(d.el=c(d.children),p,m);else{const v=d.el=u.el;d.children!==u.children&&l(v,d.children)}},k=(u,d,p,m)=>{u==null?r(d.el=a(d.children||""),p,m):d.el=u.el},x=(u,d,p,m)=>{[u.el,u.anchor]=C(u.children,d,p,m,u.el,u.anchor)},j=({el:u,anchor:d},p,m)=>{let v;for(;u&&u!==d;)v=g(u),r(u,p,m),u=v;r(d,p,m)},M=({el:u,anchor:d})=>{let p;for(;u&&u!==d;)p=g(u),s(u),u=p;s(d)},te=(u,d,p,m,v,b,R,I,w)=>{R=R||d.type==="svg",u==null?ne(d,p,m,v,b,R,I,w):Ae(u,d,v,b,R,I,w)},ne=(u,d,p,m,v,b,R,I)=>{let w,E;const{type:N,props:A,shapeFlag:D,transition:U,dirs:H}=u;if(w=u.el=o(u.type,b,A&&A.is,A),D&8?f(w,u.children):D&16&&be(u.children,w,null,m,v,b&&N!=="foreignObject",R,I),H&&gt(u,null,m,"created"),ge(w,u,u.scopeId,R,m),A){for(const G in A)G!=="value"&&!Bn(G)&&i(w,G,null,A[G],b,u.children,m,v,oe);"value"in A&&i(w,"value",null,A.value),(E=A.onVnodeBeforeMount)&&Ne(E,m,u)}H&&gt(u,null,m,"beforeMount");const X=(!v||v&&!v.pendingBranch)&&U&&!U.persisted;X&&U.beforeEnter(w),r(w,d,p),((E=A&&A.onVnodeMounted)||X||H)&&he(()=>{E&&Ne(E,m,u),X&&U.enter(w),H&&gt(u,null,m,"mounted")},v)},ge=(u,d,p,m,v)=>{if(p&&y(u,p),m)for(let b=0;b<m.length;b++)y(u,m[b]);if(v){let b=v.subTree;if(d===b){const R=v.vnode;ge(u,R,R.scopeId,R.slotScopeIds,v.parent)}}},be=(u,d,p,m,v,b,R,I,w=0)=>{for(let E=w;E<u.length;E++){const N=u[E]=I?tt(u[E]):xe(u[E]);P(null,N,d,p,m,v,b,R,I)}},Ae=(u,d,p,m,v,b,R)=>{const I=d.el=u.el;let{patchFlag:w,dynamicChildren:E,dirs:N}=d;w|=u.patchFlag&16;const A=u.props||Q,D=d.props||Q;let U;p&&mt(p,!1),(U=D.onVnodeBeforeUpdate)&&Ne(U,p,d,u),N&&gt(d,u,p,"beforeUpdate"),p&&mt(p,!0);const H=v&&d.type!=="foreignObject";if(E?_e(u.dynamicChildren,E,I,p,m,H,b):R||z(u,d,I,null,p,m,H,b,!1),w>0){if(w&16)Ye(I,d,A,D,p,m,v);else if(w&2&&A.class!==D.class&&i(I,"class",null,D.class,v),w&4&&i(I,"style",A.style,D.style,v),w&8){const X=d.dynamicProps;for(let G=0;G<X.length;G++){const ee=X[G],Ee=A[ee],Ot=D[ee];(Ot!==Ee||ee==="value")&&i(I,ee,Ee,Ot,v,u.children,p,m,oe)}}w&1&&u.children!==d.children&&f(I,d.children)}else!R&&E==null&&Ye(I,d,A,D,p,m,v);((U=D.onVnodeUpdated)||N)&&he(()=>{U&&Ne(U,p,d,u),N&&gt(d,u,p,"updated")},m)},_e=(u,d,p,m,v,b,R)=>{for(let I=0;I<d.length;I++){const w=u[I],E=d[I],N=w.el&&(w.type===De||!en(w,E)||w.shapeFlag&70)?h(w.el):p;P(w,E,N,null,m,v,b,R,!0)}},Ye=(u,d,p,m,v,b,R)=>{if(p!==m){if(p!==Q)for(const I in p)!Bn(I)&&!(I in m)&&i(u,I,p[I],null,R,d.children,v,b,oe);for(const I in m){if(Bn(I))continue;const w=m[I],E=p[I];w!==E&&I!=="value"&&i(u,I,E,w,R,d.children,v,b,oe)}"value"in m&&i(u,"value",p.value,m.value)}},pt=(u,d,p,m,v,b,R,I,w)=>{const E=d.el=u?u.el:c(""),N=d.anchor=u?u.anchor:c("");let{patchFlag:A,dynamicChildren:D,slotScopeIds:U}=d;U&&(I=I?I.concat(U):U),u==null?(r(E,p,m),r(N,p,m),be(d.children,p,N,v,b,R,I,w)):A>0&&A&64&&D&&u.dynamicChildren?(_e(u.dynamicChildren,D,p,v,b,R,I),(d.key!=null||v&&d===v.subTree)&&na(u,d,!0)):z(u,d,p,N,v,b,R,I,w)},Pe=(u,d,p,m,v,b,R,I,w)=>{d.slotScopeIds=I,u==null?d.shapeFlag&512?v.ctx.activate(d,p,m,R,w):Qt(d,p,m,v,b,R,w):Ct(u,d,w)},Qt=(u,d,p,m,v,b,R)=>{const I=u.component=cu(u,m,v);if(zo(u)&&(I.ctx.renderer=T),lu(I),I.asyncDep){if(v&&v.registerDep(I,re),!u.el){const w=I.subTree=ye(pn);k(null,w,d,p)}return}re(I,u,d,p,v,b,R)},Ct=(u,d,p)=>{const m=d.component=u.component;if(bl(u,d,p))if(m.asyncDep&&!m.asyncResolved){J(m,d,p);return}else m.next=d,fl(m.update),m.update();else d.el=u.el,m.vnode=d},re=(u,d,p,m,v,b,R)=>{const I=()=>{if(u.isMounted){let{next:N,bu:A,u:D,parent:U,vnode:H}=u,X=N,G;mt(u,!1),N?(N.el=H.el,J(u,N,R)):N=H,A&&Ir(A),(G=N.props&&N.props.onVnodeBeforeUpdate)&&Ne(G,U,N,H),mt(u,!0);const ee=wr(u),Ee=u.subTree;u.subTree=ee,P(Ee,ee,h(Ee.el),_(Ee),u,v,b),N.el=ee.el,X===null&&El(u,ee.el),D&&he(D,v),(G=N.props&&N.props.onVnodeUpdated)&&he(()=>Ne(G,U,N,H),v)}else{let N;const{el:A,props:D}=d,{bm:U,m:H,parent:X}=u,G=Hn(d);if(mt(u,!1),U&&Ir(U),!G&&(N=D&&D.onVnodeBeforeMount)&&Ne(N,X,d),mt(u,!0),A&&K){const ee=()=>{u.subTree=wr(u),K(A,u.subTree,u,v,null)};G?d.type.__asyncLoader().then(()=>!u.isUnmounted&&ee()):ee()}else{const ee=u.subTree=wr(u);P(null,ee,p,m,u,v,b),d.el=ee.el}if(H&&he(H,v),!G&&(N=D&&D.onVnodeMounted)){const ee=d;he(()=>Ne(N,X,ee),v)}(d.shapeFlag&256||X&&Hn(X.vnode)&&X.vnode.shapeFlag&256)&&u.a&&he(u.a,v),u.isMounted=!0,d=p=m=null}},w=u.effect=new ms(I,()=>Rs(E),u.scope),E=u.update=()=>w.run();E.id=u.uid,mt(u,!0),E()},J=(u,d,p)=>{d.component=u;const m=u.vnode.props;u.vnode=d,u.next=null,Kl(u,d.props,m,p),Jl(u,d.children,p),Yt(),ti(),Xt()},z=(u,d,p,m,v,b,R,I,w=!1)=>{const E=u&&u.children,N=u?u.shapeFlag:0,A=d.children,{patchFlag:D,shapeFlag:U}=d;if(D>0){if(D&128){Xe(E,A,p,m,v,b,R,I,w);return}else if(D&256){$e(E,A,p,m,v,b,R,I,w);return}}U&8?(N&16&&oe(E,v,b),A!==E&&f(p,A)):N&16?U&16?Xe(E,A,p,m,v,b,R,I,w):oe(E,v,b,!0):(N&8&&f(p,""),U&16&&be(A,p,m,v,b,R,I,w))},$e=(u,d,p,m,v,b,R,I,w)=>{u=u||xt,d=d||xt;const E=u.length,N=d.length,A=Math.min(E,N);let D;for(D=0;D<A;D++){const U=d[D]=w?tt(d[D]):xe(d[D]);P(u[D],U,p,null,v,b,R,I,w)}E>N?oe(u,v,b,!0,!1,A):be(d,p,m,v,b,R,I,w,A)},Xe=(u,d,p,m,v,b,R,I,w)=>{let E=0;const N=d.length;let A=u.length-1,D=N-1;for(;E<=A&&E<=D;){const U=u[E],H=d[E]=w?tt(d[E]):xe(d[E]);if(en(U,H))P(U,H,p,null,v,b,R,I,w);else break;E++}for(;E<=A&&E<=D;){const U=u[A],H=d[D]=w?tt(d[D]):xe(d[D]);if(en(U,H))P(U,H,p,null,v,b,R,I,w);else break;A--,D--}if(E>A){if(E<=D){const U=D+1,H=U<N?d[U].el:m;for(;E<=D;)P(null,d[E]=w?tt(d[E]):xe(d[E]),p,H,v,b,R,I,w),E++}}else if(E>D)for(;E<=A;)de(u[E],v,b,!0),E++;else{const U=E,H=E,X=new Map;for(E=H;E<=D;E++){const me=d[E]=w?tt(d[E]):xe(d[E]);me.key!=null&&X.set(me.key,E)}let G,ee=0;const Ee=D-H+1;let Ot=!1,Vs=0;const Zt=new Array(Ee);for(E=0;E<Ee;E++)Zt[E]=0;for(E=U;E<=A;E++){const me=u[E];if(ee>=Ee){de(me,v,b,!0);continue}let ke;if(me.key!=null)ke=X.get(me.key);else for(G=H;G<=D;G++)if(Zt[G-H]===0&&en(me,d[G])){ke=G;break}ke===void 0?de(me,v,b,!0):(Zt[ke-H]=E+1,ke>=Vs?Vs=ke:Ot=!0,P(me,d[ke],p,null,v,b,R,I,w),ee++)}const zs=Ot?Ql(Zt):xt;for(G=zs.length-1,E=Ee-1;E>=0;E--){const me=H+E,ke=d[me],Ks=me+1<N?d[me+1].el:m;Zt[E]===0?P(null,ke,p,Ks,v,b,R,I,w):Ot&&(G<0||E!==zs[G]?Oe(ke,p,Ks,2):G--)}}},Oe=(u,d,p,m,v=null)=>{const{el:b,type:R,transition:I,children:w,shapeFlag:E}=u;if(E&6){Oe(u.component.subTree,d,p,m);return}if(E&128){u.suspense.move(d,p,m);return}if(E&64){R.move(u,d,p,T);return}if(R===De){r(b,d,p);for(let A=0;A<w.length;A++)Oe(w[A],d,p,m);r(u.anchor,d,p);return}if(R===Rr){j(u,d,p);return}if(m!==2&&E&1&&I)if(m===0)I.beforeEnter(b),r(b,d,p),he(()=>I.enter(b),v);else{const{leave:A,delayLeave:D,afterLeave:U}=I,H=()=>r(b,d,p),X=()=>{A(b,()=>{H(),U&&U()})};D?D(b,H,X):X()}else r(b,d,p)},de=(u,d,p,m=!1,v=!1)=>{const{type:b,props:R,ref:I,children:w,dynamicChildren:E,shapeFlag:N,patchFlag:A,dirs:D}=u;if(I!=null&&Jr(I,null,p,u,!0),N&256){d.ctx.deactivate(u);return}const U=N&1&&D,H=!Hn(u);let X;if(H&&(X=R&&R.onVnodeBeforeUnmount)&&Ne(X,d,u),N&6)kn(u.component,p,m);else{if(N&128){u.suspense.unmount(p,m);return}U&&gt(u,null,d,"beforeUnmount"),N&64?u.type.remove(u,d,p,v,T,m):E&&(b!==De||A>0&&A&64)?oe(E,d,p,!1,!0):(b===De&&A&384||!v&&N&16)&&oe(w,d,p),m&&At(u)}(H&&(X=R&&R.onVnodeUnmounted)||U)&&he(()=>{X&&Ne(X,d,u),U&&gt(u,null,d,"unmounted")},p)},At=u=>{const{type:d,el:p,anchor:m,transition:v}=u;if(d===De){Pt(p,m);return}if(d===Rr){M(u);return}const b=()=>{s(p),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:R,delayLeave:I}=v,w=()=>R(p,b);I?I(u.el,b,w):w()}else b()},Pt=(u,d)=>{let p;for(;u!==d;)p=g(u),s(u),u=p;s(d)},kn=(u,d,p)=>{const{bum:m,scope:v,update:b,subTree:R,um:I}=u;m&&Ir(m),v.stop(),b&&(b.active=!1,de(R,u,d,p)),I&&he(I,d),he(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},oe=(u,d,p,m=!1,v=!1,b=0)=>{for(let R=b;R<u.length;R++)de(u[R],d,p,m,v)},_=u=>u.shapeFlag&6?_(u.component.subTree):u.shapeFlag&128?u.suspense.next():g(u.anchor||u.el),S=(u,d,p)=>{u==null?d._vnode&&de(d._vnode,null,null,!0):P(d._vnode||null,u,d,null,null,null,p),ti(),Bo(),d._vnode=u},T={p:P,um:de,m:Oe,r:At,mt:Qt,mc:be,pc:z,pbc:_e,n:_,o:t};let O,K;return e&&([O,K]=e(T)),{render:S,hydrate:O,createApp:Vl(S,O)}}function mt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function na(t,e,n=!1){const r=t.children,s=e.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=tt(s[i]),c.el=o.el),n||na(o,c)),c.type===gr&&(c.el=o.el)}}function Ql(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<l?i=c+1:o=c;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Zl=t=>t.__isTeleport,De=Symbol.for("v-fgt"),gr=Symbol.for("v-txt"),pn=Symbol.for("v-cmt"),Rr=Symbol.for("v-stc"),on=[];let Te=null;function ra(t=!1){on.push(Te=t?null:[])}function eu(){on.pop(),Te=on[on.length-1]||null}let gn=1;function fi(t){gn+=t}function tu(t){return t.dynamicChildren=gn>0?Te||xt:null,eu(),gn>0&&Te&&Te.push(t),t}function sa(t,e,n,r,s,i){return tu(ct(t,e,n,r,s,i,!0))}function Yr(t){return t?t.__v_isVNode===!0:!1}function en(t,e){return t.type===e.type&&t.key===e.key}const mr="__vInternal",ia=({key:t})=>t??null,Wn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ie(t)||le(t)||$(t)?{i:Le,r:t,k:e,f:!!n}:t:null);function ct(t,e=null,n=null,r=0,s=null,i=t===De?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ia(e),ref:e&&Wn(e),scopeId:hr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Le};return c?(As(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=ie(n)?8:16),gn>0&&!o&&Te&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Te.push(a),a}const ye=nu;function nu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Ll)&&(t=pn),Yr(t)){const c=Wt(t,e,!0);return n&&As(c,n),gn>0&&!i&&Te&&(c.shapeFlag&6?Te[Te.indexOf(t)]=c:Te.push(c)),c.patchFlag|=-2,c}if(hu(t)&&(t=t.__vccOpts),e){e=ru(e);let{class:c,style:a}=e;c&&!ie(c)&&(e.class=ps(c)),Z(a)&&(ko(a)&&!B(a)&&(a=se({},a)),e.style=hs(a))}const o=ie(t)?1:Il(t)?128:Zl(t)?64:Z(t)?4:$(t)?2:0;return ct(t,e,n,r,s,o,i,!0)}function ru(t){return t?ko(t)||mr in t?se({},t):t:null}function Wt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,c=e?iu(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&ia(c),ref:e&&e.ref?n&&s?B(s)?s.concat(Wn(e)):[s,Wn(e)]:Wn(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==De?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Wt(t.ssContent),ssFallback:t.ssFallback&&Wt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function su(t=" ",e=0){return ye(gr,null,t,e)}function xe(t){return t==null||typeof t=="boolean"?ye(pn):B(t)?ye(De,null,t.slice()):typeof t=="object"?tt(t):ye(gr,null,String(t))}function tt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Wt(t)}function As(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),As(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(mr in e)?e._ctx=Le:s===3&&Le&&(Le.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:Le},n=32):(e=String(e),r&64?(n=16,e=[su(e)]):n=8);t.children=e,t.shapeFlag|=n}function iu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ps([e.class,r.class]));else if(s==="style")e.style=hs([e.style,r.style]);else if(ar(s)){const i=e[s],o=r[s];o&&i!==o&&!(B(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ne(t,e,n,r=null){Se(t,e,7,[n,r])}const ou=Yo();let au=0;function cu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||ou,i={uid:au++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new yo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qo(r,s),emitsOptions:Ho(r,s),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:r.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=pl.bind(null,i),t.ce&&t.ce(i),i}let ce=null,Ps,kt,di="__VUE_INSTANCE_SETTERS__";(kt=Br()[di])||(kt=Br()[di]=[]),kt.push(t=>ce=t),Ps=t=>{kt.length>1?kt.forEach(e=>e(t)):kt[0](t)};const Vt=t=>{Ps(t),t.scope.on()},wt=()=>{ce&&ce.scope.off(),Ps(null)};function oa(t){return t.vnode.shapeFlag&4}let mn=!1;function lu(t,e=!1){mn=e;const{props:n,children:r}=t.vnode,s=oa(t);zl(t,n,s,e),Gl(t,r);const i=s?uu(t,e):void 0;return mn=!1,i}function uu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Es(new Proxy(t.ctx,Ul));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?du(t):null;Vt(t),Yt();const i=at(r,t,0,[t.props,s]);if(Xt(),wt(),ho(i)){if(i.then(wt,wt),e)return i.then(o=>{hi(t,o,e)}).catch(o=>{fr(o,t,0)});t.asyncDep=i}else hi(t,i,e)}else aa(t,e)}function hi(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Z(e)&&(t.setupState=Mo(e)),aa(t,n)}let pi;function aa(t,e,n){const r=t.type;if(!t.render){if(!e&&pi&&!r.render){const s=r.template||Ss(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,l=se(se({isCustomElement:i,delimiters:c},o),a);r.render=pi(s,l)}}t.render=r.render||Re}Vt(t),Yt(),Fl(t),Xt(),wt()}function fu(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return pe(t,"get","$attrs"),e[n]}}))}function du(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return fu(t)},slots:t.slots,emit:t.emit,expose:e}}function Os(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Mo(Es(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in sn)return sn[n](t)},has(e,n){return n in e||n in sn}}))}function hu(t){return $(t)&&"__vccOpts"in t}const ve=(t,e)=>cl(t,e,mn);function ca(t,e,n){const r=arguments.length;return r===2?Z(e)&&!B(e)?Yr(e)?ye(t,null,[e]):ye(t,e):ye(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Yr(n)&&(n=[n]),ye(t,e,n))}const pu=Symbol.for("v-scx"),gu=()=>Ke(pu),mu="3.3.4",_u="http://www.w3.org/2000/svg",yt=typeof document<"u"?document:null,gi=yt&&yt.createElement("template"),vu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?yt.createElementNS(_u,t):yt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>yt.createTextNode(t),createComment:t=>yt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>yt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{gi.innerHTML=r?`<svg>${t}</svg>`:t;const c=gi.content;if(r){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function yu(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function bu(t,e,n){const r=t.style,s=ie(n);if(n&&!s){if(e&&!ie(e))for(const i in e)n[i]==null&&Xr(r,i,"");for(const i in n)Xr(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const mi=/\s*!important$/;function Xr(t,e,n){if(B(n))n.forEach(r=>Xr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Eu(t,e);mi.test(n)?t.setProperty(Jt(r),n.replace(mi,""),"important"):t[r]=n}}const _i=["Webkit","Moz","ms"],Sr={};function Eu(t,e){const n=Sr[e];if(n)return n;let r=Ht(e);if(r!=="filter"&&r in t)return Sr[e]=r;r=mo(r);for(let s=0;s<_i.length;s++){const i=_i[s]+r;if(i in t)return Sr[e]=i}return e}const vi="http://www.w3.org/1999/xlink";function Iu(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(vi,e.slice(6,e.length)):t.setAttributeNS(vi,e,n);else{const i=Sc(e);n==null||i&&!_o(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function wu(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){t._value=n;const l=c==="OPTION"?t.getAttribute("value"):t.value,f=n??"";l!==f&&(t.value=f),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=_o(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Tu(t,e,n,r){t.addEventListener(e,n,r)}function Ru(t,e,n,r){t.removeEventListener(e,n,r)}function Su(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=Cu(e);if(r){const l=i[e]=Ou(r,s);Tu(t,c,l,a)}else o&&(Ru(t,c,o,a),i[e]=void 0)}}const yi=/(?:Once|Passive|Capture)$/;function Cu(t){let e;if(yi.test(t)){e={};let r;for(;r=t.match(yi);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Jt(t.slice(2)),e]}let Cr=0;const Au=Promise.resolve(),Pu=()=>Cr||(Au.then(()=>Cr=0),Cr=Date.now());function Ou(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Se(ku(r,n.value),e,5,[r])};return n.value=t,n.attached=Pu(),n}function ku(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const bi=/^on[a-z]/,Nu=(t,e,n,r,s=!1,i,o,c,a)=>{e==="class"?yu(t,r,s):e==="style"?bu(t,n,r):ar(e)?ls(e)||Su(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Du(t,e,r,s))?wu(t,e,r,i,o,c,a):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Iu(t,e,r,s))};function Du(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&bi.test(e)&&$(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||bi.test(e)&&ie(n)?!1:e in t}const xu=se({patchProp:Nu},vu);let Ei;function Mu(){return Ei||(Ei=Yl(xu))}const Lu=(...t)=>{const e=Mu().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Uu(r);if(!s)return;const i=e._component;!$(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Uu(t){return ie(t)?document.querySelector(t):t}var Fu=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Bu=Symbol();var Ii;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ii||(Ii={}));function $u(){const t=Ac(!0),e=t.run(()=>ws({}));let n=[],r=[];const s=Es({install(i){s._a=i,i.provide(Bu,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Fu?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Nt=typeof window<"u";function Hu(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const q=Object.assign;function Ar(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ce(s)?s.map(t):t(s)}return n}const an=()=>{},Ce=Array.isArray,ju=/\/$/,Wu=t=>t.replace(ju,"");function Pr(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=qu(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Vu(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function wi(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function zu(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&zt(e.matched[r],n.matched[s])&&la(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function zt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function la(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Ku(t[n],e[n]))return!1;return!0}function Ku(t,e){return Ce(t)?Ti(t,e):Ce(e)?Ti(e,t):t===e}function Ti(t,e){return Ce(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function qu(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var _n;(function(t){t.pop="pop",t.push="push"})(_n||(_n={}));var cn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(cn||(cn={}));function Gu(t){if(!t)if(Nt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Wu(t)}const Ju=/^[^#]+#/;function Yu(t,e){return t.replace(Ju,"#")+e}function Xu(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const _r=()=>({left:window.pageXOffset,top:window.pageYOffset});function Qu(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Xu(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ri(t,e){return(history.state?history.state.position-e:-1)+t}const Qr=new Map;function Zu(t,e){Qr.set(t,e)}function ef(t){const e=Qr.get(t);return Qr.delete(t),e}let tf=()=>location.protocol+"//"+location.host;function ua(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),wi(a,"")}return wi(n,t)+r+s}function nf(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const y=ua(t,location),C=n.value,P=e.value;let L=0;if(g){if(n.value=y,e.value=g,o&&o===C){o=null;return}L=P?g.position-P.position:0}else r(y);s.forEach(k=>{k(n.value,C,{delta:L,type:_n.pop,direction:L?L>0?cn.forward:cn.back:cn.unknown})})};function a(){o=n.value}function l(g){s.push(g);const y=()=>{const C=s.indexOf(g);C>-1&&s.splice(C,1)};return i.push(y),y}function f(){const{history:g}=window;g.state&&g.replaceState(q({},g.state,{scroll:_r()}),"")}function h(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:a,listen:l,destroy:h}}function Si(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?_r():null}}function rf(t){const{history:e,location:n}=window,r={value:ua(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,l,f){const h=t.indexOf("#"),g=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:tf()+t+a;try{e[f?"replaceState":"pushState"](l,"",g),s.value=l}catch(y){console.error(y),n[f?"replace":"assign"](g)}}function o(a,l){const f=q({},e.state,Si(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,f,!0),r.value=a}function c(a,l){const f=q({},s.value,e.state,{forward:a,scroll:_r()});i(f.current,f,!0);const h=q({},Si(r.value,a,null),{position:f.position+1},l);i(a,h,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function sf(t){t=Gu(t);const e=rf(t),n=nf(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=q({location:"",base:t,go:r,createHref:Yu.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function of(t){return typeof t=="string"||t&&typeof t=="object"}function fa(t){return typeof t=="string"||typeof t=="symbol"}const Ze={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},da=Symbol("");var Ci;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ci||(Ci={}));function Kt(t,e){return q(new Error,{type:t,[da]:!0},e)}function He(t,e){return t instanceof Error&&da in t&&(e==null||!!(t.type&e))}const Ai="[^/]+?",af={sensitive:!1,strict:!1,start:!0,end:!0},cf=/[.+*?^${}()[\]/\\]/g;function lf(t,e){const n=q({},af,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const g=l[h];let y=40+(n.sensitive?.25:0);if(g.type===0)h||(s+="/"),s+=g.value.replace(cf,"\\$&"),y+=40;else if(g.type===1){const{value:C,repeatable:P,optional:L,regexp:k}=g;i.push({name:C,repeatable:P,optional:L});const x=k||Ai;if(x!==Ai){y+=10;try{new RegExp(`(${x})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${C}" (${x}): `+M.message)}}let j=P?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(j=L&&l.length<2?`(?:/${j})`:"/"+j),L&&(j+="?"),s+=j,y+=20,L&&(y+=-8),P&&(y+=-20),x===".*"&&(y+=-50)}f.push(y)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const f=l.match(o),h={};if(!f)return null;for(let g=1;g<f.length;g++){const y=f[g]||"",C=i[g-1];h[C.name]=y&&C.repeatable?y.split("/"):y}return h}function a(l){let f="",h=!1;for(const g of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const y of g)if(y.type===0)f+=y.value;else if(y.type===1){const{value:C,repeatable:P,optional:L}=y,k=C in l?l[C]:"";if(Ce(k)&&!P)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const x=Ce(k)?k.join("/"):k;if(!x)if(L)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${C}"`);f+=x}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function uf(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function ff(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=uf(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Pi(r))return 1;if(Pi(s))return-1}return s.length-r.length}function Pi(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const df={type:0,value:""},hf=/[a-zA-Z0-9_]/;function pf(t){if(!t)return[[]];if(t==="/")return[[df]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${l}": ${y}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",f="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),l="")}function g(){l+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&h(),o()):a===":"?(h(),n=1):g();break;case 4:g(),n=r;break;case 1:a==="("?n=2:hf.test(a)?g():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+a:n=3:f+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function gf(t,e,n){const r=lf(pf(t.path),n),s=q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function mf(t,e){const n=[],r=new Map;e=Ni({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,h,g){const y=!g,C=_f(f);C.aliasOf=g&&g.record;const P=Ni(e,f),L=[C];if("alias"in f){const j=typeof f.alias=="string"?[f.alias]:f.alias;for(const M of j)L.push(q({},C,{components:g?g.record.components:C.components,path:M,aliasOf:g?g.record:C}))}let k,x;for(const j of L){const{path:M}=j;if(h&&M[0]!=="/"){const te=h.record.path,ne=te[te.length-1]==="/"?"":"/";j.path=h.record.path+(M&&ne+M)}if(k=gf(j,h,P),g?g.alias.push(k):(x=x||k,x!==k&&x.alias.push(k),y&&f.name&&!ki(k)&&o(f.name)),C.children){const te=C.children;for(let ne=0;ne<te.length;ne++)i(te[ne],k,g&&g.children[ne])}g=g||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&a(k)}return x?()=>{o(x)}:an}function o(f){if(fa(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function c(){return n}function a(f){let h=0;for(;h<n.length&&ff(f,n[h])>=0&&(f.record.path!==n[h].record.path||!ha(f,n[h]));)h++;n.splice(h,0,f),f.record.name&&!ki(f)&&r.set(f.record.name,f)}function l(f,h){let g,y={},C,P;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw Kt(1,{location:f});P=g.record.name,y=q(Oi(h.params,g.keys.filter(x=>!x.optional).map(x=>x.name)),f.params&&Oi(f.params,g.keys.map(x=>x.name))),C=g.stringify(y)}else if("path"in f)C=f.path,g=n.find(x=>x.re.test(C)),g&&(y=g.parse(C),P=g.record.name);else{if(g=h.name?r.get(h.name):n.find(x=>x.re.test(h.path)),!g)throw Kt(1,{location:f,currentLocation:h});P=g.record.name,y=q({},h.params,f.params),C=g.stringify(y)}const L=[];let k=g;for(;k;)L.unshift(k.record),k=k.parent;return{name:P,path:C,params:y,matched:L,meta:yf(L)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function Oi(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function _f(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:vf(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function vf(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function ki(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function yf(t){return t.reduce((e,n)=>q(e,n.meta),{})}function Ni(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ha(t,e){return e.children.some(n=>n===t||ha(t,n))}const pa=/#/g,bf=/&/g,Ef=/\//g,If=/=/g,wf=/\?/g,ga=/\+/g,Tf=/%5B/g,Rf=/%5D/g,ma=/%5E/g,Sf=/%60/g,_a=/%7B/g,Cf=/%7C/g,va=/%7D/g,Af=/%20/g;function ks(t){return encodeURI(""+t).replace(Cf,"|").replace(Tf,"[").replace(Rf,"]")}function Pf(t){return ks(t).replace(_a,"{").replace(va,"}").replace(ma,"^")}function Zr(t){return ks(t).replace(ga,"%2B").replace(Af,"+").replace(pa,"%23").replace(bf,"%26").replace(Sf,"`").replace(_a,"{").replace(va,"}").replace(ma,"^")}function Of(t){return Zr(t).replace(If,"%3D")}function kf(t){return ks(t).replace(pa,"%23").replace(wf,"%3F")}function Nf(t){return t==null?"":kf(t).replace(Ef,"%2F")}function Zn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Df(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ga," "),o=i.indexOf("="),c=Zn(o<0?i:i.slice(0,o)),a=o<0?null:Zn(i.slice(o+1));if(c in e){let l=e[c];Ce(l)||(l=e[c]=[l]),l.push(a)}else e[c]=a}return e}function Di(t){let e="";for(let n in t){const r=t[n];if(n=Of(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ce(r)?r.map(i=>i&&Zr(i)):[r&&Zr(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function xf(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ce(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Mf=Symbol(""),xi=Symbol(""),Ns=Symbol(""),ya=Symbol(""),es=Symbol("");function tn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function nt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,c)=>{const a=h=>{h===!1?c(Kt(4,{from:n,to:e})):h instanceof Error?c(h):of(h)?c(Kt(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,a);let f=Promise.resolve(l);t.length<3&&(f=f.then(a)),f.catch(h=>c(h))})}function Or(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let c=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Lf(c)){const l=(c.__vccOpts||c)[e];l&&s.push(nt(l,n,r,i,o))}else{let a=c();s.push(()=>a.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=Hu(l)?l.default:l;i.components[o]=f;const g=(f.__vccOpts||f)[e];return g&&nt(g,n,r,i,o)()}))}}return s}function Lf(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Mi(t){const e=Ke(Ns),n=Ke(ya),r=ve(()=>e.resolve(It(t.to))),s=ve(()=>{const{matched:a}=r.value,{length:l}=a,f=a[l-1],h=n.matched;if(!f||!h.length)return-1;const g=h.findIndex(zt.bind(null,f));if(g>-1)return g;const y=Li(a[l-2]);return l>1&&Li(f)===y&&h[h.length-1].path!==y?h.findIndex(zt.bind(null,a[l-2])):g}),i=ve(()=>s.value>-1&&$f(n.params,r.value.params)),o=ve(()=>s.value>-1&&s.value===n.matched.length-1&&la(n.params,r.value.params));function c(a={}){return Bf(a)?e[It(t.replace)?"replace":"push"](It(t.to)).catch(an):Promise.resolve()}return{route:r,href:ve(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const Uf=Vo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Mi,setup(t,{slots:e}){const n=In(Mi(t)),{options:r}=Ke(Ns),s=ve(()=>({[Ui(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ui(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ca("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ff=Uf;function Bf(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function $f(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ce(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Li(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ui=(t,e,n)=>t??e??n,Hf=Vo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ke(es),s=ve(()=>t.route||r.value),i=Ke(xi,0),o=ve(()=>{let l=It(i);const{matched:f}=s.value;let h;for(;(h=f[l])&&!h.components;)l++;return l}),c=ve(()=>s.value.matched[o.value]);jn(xi,ve(()=>o.value+1)),jn(Mf,c),jn(es,s);const a=ws();return $n(()=>[a.value,c.value,t.name],([l,f,h],[g,y,C])=>{f&&(f.instances[h]=l,y&&y!==f&&l&&l===g&&(f.leaveGuards.size||(f.leaveGuards=y.leaveGuards),f.updateGuards.size||(f.updateGuards=y.updateGuards))),l&&f&&(!y||!zt(f,y)||!g)&&(f.enterCallbacks[h]||[]).forEach(P=>P(l))},{flush:"post"}),()=>{const l=s.value,f=t.name,h=c.value,g=h&&h.components[f];if(!g)return Fi(n.default,{Component:g,route:l});const y=h.props[f],C=y?y===!0?l.params:typeof y=="function"?y(l):y:null,L=ca(g,q({},C,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[f]=null)},ref:a}));return Fi(n.default,{Component:L,route:l})||L}}});function Fi(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ba=Hf;function jf(t){const e=mf(t.routes,t),n=t.parseQuery||Df,r=t.stringifyQuery||Di,s=t.history,i=tn(),o=tn(),c=tn(),a=sl(Ze);let l=Ze;Nt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Ar.bind(null,_=>""+_),h=Ar.bind(null,Nf),g=Ar.bind(null,Zn);function y(_,S){let T,O;return fa(_)?(T=e.getRecordMatcher(_),O=S):O=_,e.addRoute(O,T)}function C(_){const S=e.getRecordMatcher(_);S&&e.removeRoute(S)}function P(){return e.getRoutes().map(_=>_.record)}function L(_){return!!e.getRecordMatcher(_)}function k(_,S){if(S=q({},S||a.value),typeof _=="string"){const p=Pr(n,_,S.path),m=e.resolve({path:p.path},S),v=s.createHref(p.fullPath);return q(p,m,{params:g(m.params),hash:Zn(p.hash),redirectedFrom:void 0,href:v})}let T;if("path"in _)T=q({},_,{path:Pr(n,_.path,S.path).path});else{const p=q({},_.params);for(const m in p)p[m]==null&&delete p[m];T=q({},_,{params:h(p)}),S.params=h(S.params)}const O=e.resolve(T,S),K=_.hash||"";O.params=f(g(O.params));const u=Vu(r,q({},_,{hash:Pf(K),path:O.path})),d=s.createHref(u);return q({fullPath:u,hash:K,query:r===Di?xf(_.query):_.query||{}},O,{redirectedFrom:void 0,href:d})}function x(_){return typeof _=="string"?Pr(n,_,a.value.path):q({},_)}function j(_,S){if(l!==_)return Kt(8,{from:S,to:_})}function M(_){return ge(_)}function te(_){return M(q(x(_),{replace:!0}))}function ne(_){const S=_.matched[_.matched.length-1];if(S&&S.redirect){const{redirect:T}=S;let O=typeof T=="function"?T(_):T;return typeof O=="string"&&(O=O.includes("?")||O.includes("#")?O=x(O):{path:O},O.params={}),q({query:_.query,hash:_.hash,params:"path"in O?{}:_.params},O)}}function ge(_,S){const T=l=k(_),O=a.value,K=_.state,u=_.force,d=_.replace===!0,p=ne(T);if(p)return ge(q(x(p),{state:typeof p=="object"?q({},K,p.state):K,force:u,replace:d}),S||T);const m=T;m.redirectedFrom=S;let v;return!u&&zu(r,O,T)&&(v=Kt(16,{to:m,from:O}),Oe(O,O,!0,!1)),(v?Promise.resolve(v):_e(m,O)).catch(b=>He(b)?He(b,2)?b:Xe(b):z(b,m,O)).then(b=>{if(b){if(He(b,2))return ge(q({replace:d},x(b.to),{state:typeof b.to=="object"?q({},K,b.to.state):K,force:u}),S||m)}else b=pt(m,O,!0,d,K);return Ye(m,O,b),b})}function be(_,S){const T=j(_,S);return T?Promise.reject(T):Promise.resolve()}function Ae(_){const S=Pt.values().next().value;return S&&typeof S.runWithContext=="function"?S.runWithContext(_):_()}function _e(_,S){let T;const[O,K,u]=Wf(_,S);T=Or(O.reverse(),"beforeRouteLeave",_,S);for(const p of O)p.leaveGuards.forEach(m=>{T.push(nt(m,_,S))});const d=be.bind(null,_,S);return T.push(d),oe(T).then(()=>{T=[];for(const p of i.list())T.push(nt(p,_,S));return T.push(d),oe(T)}).then(()=>{T=Or(K,"beforeRouteUpdate",_,S);for(const p of K)p.updateGuards.forEach(m=>{T.push(nt(m,_,S))});return T.push(d),oe(T)}).then(()=>{T=[];for(const p of _.matched)if(p.beforeEnter&&!S.matched.includes(p))if(Ce(p.beforeEnter))for(const m of p.beforeEnter)T.push(nt(m,_,S));else T.push(nt(p.beforeEnter,_,S));return T.push(d),oe(T)}).then(()=>(_.matched.forEach(p=>p.enterCallbacks={}),T=Or(u,"beforeRouteEnter",_,S),T.push(d),oe(T))).then(()=>{T=[];for(const p of o.list())T.push(nt(p,_,S));return T.push(d),oe(T)}).catch(p=>He(p,8)?p:Promise.reject(p))}function Ye(_,S,T){for(const O of c.list())Ae(()=>O(_,S,T))}function pt(_,S,T,O,K){const u=j(_,S);if(u)return u;const d=S===Ze,p=Nt?history.state:{};T&&(O||d?s.replace(_.fullPath,q({scroll:d&&p&&p.scroll},K)):s.push(_.fullPath,K)),a.value=_,Oe(_,S,T,d),Xe()}let Pe;function Qt(){Pe||(Pe=s.listen((_,S,T)=>{if(!kn.listening)return;const O=k(_),K=ne(O);if(K){ge(q(K,{replace:!0}),O).catch(an);return}l=O;const u=a.value;Nt&&Zu(Ri(u.fullPath,T.delta),_r()),_e(O,u).catch(d=>He(d,12)?d:He(d,2)?(ge(d.to,O).then(p=>{He(p,20)&&!T.delta&&T.type===_n.pop&&s.go(-1,!1)}).catch(an),Promise.reject()):(T.delta&&s.go(-T.delta,!1),z(d,O,u))).then(d=>{d=d||pt(O,u,!1),d&&(T.delta&&!He(d,8)?s.go(-T.delta,!1):T.type===_n.pop&&He(d,20)&&s.go(-1,!1)),Ye(O,u,d)}).catch(an)}))}let Ct=tn(),re=tn(),J;function z(_,S,T){Xe(_);const O=re.list();return O.length?O.forEach(K=>K(_,S,T)):console.error(_),Promise.reject(_)}function $e(){return J&&a.value!==Ze?Promise.resolve():new Promise((_,S)=>{Ct.add([_,S])})}function Xe(_){return J||(J=!_,Qt(),Ct.list().forEach(([S,T])=>_?T(_):S()),Ct.reset()),_}function Oe(_,S,T,O){const{scrollBehavior:K}=t;if(!Nt||!K)return Promise.resolve();const u=!T&&ef(Ri(_.fullPath,0))||(O||!T)&&history.state&&history.state.scroll||null;return Uo().then(()=>K(_,S,u)).then(d=>d&&Qu(d)).catch(d=>z(d,_,S))}const de=_=>s.go(_);let At;const Pt=new Set,kn={currentRoute:a,listening:!0,addRoute:y,removeRoute:C,hasRoute:L,getRoutes:P,resolve:k,options:t,push:M,replace:te,go:de,back:()=>de(-1),forward:()=>de(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:re.add,isReady:$e,install(_){const S=this;_.component("RouterLink",Ff),_.component("RouterView",ba),_.config.globalProperties.$router=S,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>It(a)}),Nt&&!At&&a.value===Ze&&(At=!0,M(s.location).catch(K=>{}));const T={};for(const K in Ze)T[K]=ve(()=>a.value[K]);_.provide(Ns,S),_.provide(ya,In(T)),_.provide(es,a);const O=_.unmount;Pt.add(_),_.unmount=function(){Pt.delete(_),Pt.size<1&&(l=Ze,Pe&&Pe(),Pe=null,a.value=Ze,At=!1,J=!1),O()}}};function oe(_){return _.reduce((S,T)=>S.then(()=>Ae(T)),Promise.resolve())}return kn}function Wf(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(l=>zt(l,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(l=>zt(l,a))||s.push(a))}return[n,r,s]}const Vf=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},zf=t=>(gl("data-v-a464b5c8"),t=t(),ml(),t),Kf=zf(()=>ct("header",null,[ct("div",null,"Easy Reach"),ct("div")],-1)),qf={__name:"App",setup(t){return(e,n)=>(ra(),sa(De,null,[Kf,ye(It(ba))],64))}},Gf=Vf(qf,[["__scopeId","data-v-a464b5c8"]]),Jf="modulepreload",Yf=function(t){return"/easy-reach/"+t},Bi={},Xf=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Yf(i),i in Bi)return;Bi[i]=!0;const o=i.endsWith(".css"),c=o?'[rel="stylesheet"]':"";if(!!r)for(let f=s.length-1;f>=0;f--){const h=s[f];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Jf,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((f,h)=>{l.addEventListener("load",f),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ea=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Qf=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ia={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,l=a?t[s+2]:0,f=i>>2,h=(i&3)<<4|c>>4;let g=(c&15)<<2|l>>6,y=l&63;a||(y=64,o||(g=64)),r.push(n[f],n[h],n[g],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ea(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Qf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||l==null||h==null)throw new Zf;const g=i<<2|c>>4;if(r.push(g),l!==64){const y=c<<4&240|l>>2;if(r.push(y),h!==64){const C=l<<6&192|h;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Zf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ed=function(t){const e=Ea(t);return Ia.encodeByteArray(e,!0)},wa=function(t){return ed(t).replace(/\./g,"")},Ta=function(t){try{return Ia.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function td(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const nd=()=>td().__FIREBASE_DEFAULTS__,rd=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ta(t[1]);return e&&JSON.parse(e)},Ds=()=>{try{return nd()||rd()||sd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},id=t=>{var e,n;return(n=(e=Ds())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ra=()=>{var t;return(t=Ds())===null||t===void 0?void 0:t.config},Sa=t=>{var e;return(e=Ds())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ad(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ue())}function cd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ld(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ud(){const t=ue();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fd(){try{return typeof indexedDB=="object"}catch{return!1}}function dd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd="FirebaseError";class dt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=hd,Object.setPrototypeOf(this,dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wn.prototype.create)}}class wn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?pd(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new dt(s,c,r)}}function pd(t,e){return t.replace(gd,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const gd=/\{\$([^}]+)}/g;function md(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function er(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if($i(i)&&$i(o)){if(!er(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function $i(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _d(t,e){const n=new vd(t,e);return n.subscribe.bind(n)}class vd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yd(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=kr),s.error===void 0&&(s.error=kr),s.complete===void 0&&(s.complete=kr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function kr(){}/**
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
 */function ht(t){return t&&t._delegate?t._delegate:t}class qt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const _t="[DEFAULT]";/**
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
 */class bd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new od;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Id(e))try{this.getOrInitializeService({instanceIdentifier:_t})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=_t){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_t){return this.instances.has(e)}getOptions(e=_t){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ed(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_t){return this.component?this.component.multipleInstances?e:_t:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ed(t){return t===_t?void 0:t}function Id(t){return t.instantiationMode==="EAGER"}/**
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
 */class wd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const Td={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Rd=Y.INFO,Sd={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Cd=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Sd[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ca{constructor(e){this.name=e,this._logLevel=Rd,this._logHandler=Cd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Td[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const Ad=(t,e)=>e.some(n=>t instanceof n);let Hi,ji;function Pd(){return Hi||(Hi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Od(){return ji||(ji=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Aa=new WeakMap,ts=new WeakMap,Pa=new WeakMap,Nr=new WeakMap,xs=new WeakMap;function kd(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(lt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Aa.set(n,t)}).catch(()=>{}),xs.set(e,t),e}function Nd(t){if(ts.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ts.set(t,e)}let ns={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ts.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Pa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return lt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Dd(t){ns=t(ns)}function xd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Dr(this),e,...n);return Pa.set(r,e.sort?e.sort():[e]),lt(r)}:Od().includes(t)?function(...e){return t.apply(Dr(this),e),lt(Aa.get(this))}:function(...e){return lt(t.apply(Dr(this),e))}}function Md(t){return typeof t=="function"?xd(t):(t instanceof IDBTransaction&&Nd(t),Ad(t,Pd())?new Proxy(t,ns):t)}function lt(t){if(t instanceof IDBRequest)return kd(t);if(Nr.has(t))return Nr.get(t);const e=Md(t);return e!==t&&(Nr.set(t,e),xs.set(e,t)),e}const Dr=t=>xs.get(t);function Ld(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=lt(o);return r&&o.addEventListener("upgradeneeded",a=>{r(lt(o.result),a.oldVersion,a.newVersion,lt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const Ud=["get","getKey","getAll","getAllKeys","count"],Fd=["put","add","delete","clear"],xr=new Map;function Wi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xr.get(e))return xr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Fd.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ud.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return xr.set(e,i),i}Dd(t=>({...t,get:(e,n,r)=>Wi(e,n)||t.get(e,n,r),has:(e,n)=>!!Wi(e,n)||t.has(e,n)}));/**
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
 */class Bd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($d(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $d(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rs="@firebase/app",Vi="0.9.13";/**
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
 */const Rt=new Ca("@firebase/app"),Hd="@firebase/app-compat",jd="@firebase/analytics-compat",Wd="@firebase/analytics",Vd="@firebase/app-check-compat",zd="@firebase/app-check",Kd="@firebase/auth",qd="@firebase/auth-compat",Gd="@firebase/database",Jd="@firebase/database-compat",Yd="@firebase/functions",Xd="@firebase/functions-compat",Qd="@firebase/installations",Zd="@firebase/installations-compat",eh="@firebase/messaging",th="@firebase/messaging-compat",nh="@firebase/performance",rh="@firebase/performance-compat",sh="@firebase/remote-config",ih="@firebase/remote-config-compat",oh="@firebase/storage",ah="@firebase/storage-compat",ch="@firebase/firestore",lh="@firebase/firestore-compat",uh="firebase",fh="9.23.0";/**
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
 */const ss="[DEFAULT]",dh={[rs]:"fire-core",[Hd]:"fire-core-compat",[Wd]:"fire-analytics",[jd]:"fire-analytics-compat",[zd]:"fire-app-check",[Vd]:"fire-app-check-compat",[Kd]:"fire-auth",[qd]:"fire-auth-compat",[Gd]:"fire-rtdb",[Jd]:"fire-rtdb-compat",[Yd]:"fire-fn",[Xd]:"fire-fn-compat",[Qd]:"fire-iid",[Zd]:"fire-iid-compat",[eh]:"fire-fcm",[th]:"fire-fcm-compat",[nh]:"fire-perf",[rh]:"fire-perf-compat",[sh]:"fire-rc",[ih]:"fire-rc-compat",[oh]:"fire-gcs",[ah]:"fire-gcs-compat",[ch]:"fire-fst",[lh]:"fire-fst-compat","fire-js":"fire-js",[uh]:"fire-js-all"};/**
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
 */const tr=new Map,is=new Map;function hh(t,e){try{t.container.addComponent(e)}catch(n){Rt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vn(t){const e=t.name;if(is.has(e))return Rt.debug(`There were multiple attempts to register component ${e}.`),!1;is.set(e,t);for(const n of tr.values())hh(n,t);return!0}function Oa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const ph={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ut=new wn("app","Firebase",ph);/**
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
 */class gh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ut.create("app-deleted",{appName:this._name})}}/**
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
 */const Rn=fh;function ka(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ss,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ut.create("bad-app-name",{appName:String(s)});if(n||(n=Ra()),!n)throw ut.create("no-options");const i=tr.get(s);if(i){if(er(n,i.options)&&er(r,i.config))return i;throw ut.create("duplicate-app",{appName:s})}const o=new wd(s);for(const a of is.values())o.addComponent(a);const c=new gh(n,r,o);return tr.set(s,c),c}function mh(t=ss){const e=tr.get(t);if(!e&&t===ss&&Ra())return ka();if(!e)throw ut.create("no-app",{appName:t});return e}function Ft(t,e,n){var r;let s=(r=dh[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rt.warn(c.join(" "));return}vn(new qt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const _h="firebase-heartbeat-database",vh=1,yn="firebase-heartbeat-store";let Mr=null;function Na(){return Mr||(Mr=Ld(_h,vh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(yn)}}}).catch(t=>{throw ut.create("idb-open",{originalErrorMessage:t.message})})),Mr}async function yh(t){try{return await(await Na()).transaction(yn).objectStore(yn).get(Da(t))}catch(e){if(e instanceof dt)Rt.warn(e.message);else{const n=ut.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rt.warn(n.message)}}}async function zi(t,e){try{const r=(await Na()).transaction(yn,"readwrite");await r.objectStore(yn).put(e,Da(t)),await r.done}catch(n){if(n instanceof dt)Rt.warn(n.message);else{const r=ut.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Rt.warn(r.message)}}}function Da(t){return`${t.name}!${t.options.appId}`}/**
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
 */const bh=1024,Eh=30*24*60*60*1e3;class Ih{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Th(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ki();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Eh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ki(),{heartbeatsToSend:n,unsentEntries:r}=wh(this._heartbeatsCache.heartbeats),s=wa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ki(){return new Date().toISOString().substring(0,10)}function wh(t,e=bh){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),qi(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),qi(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Th{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fd()?dd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await yh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return zi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return zi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function qi(t){return wa(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Rh(t){vn(new qt("platform-logger",e=>new Bd(e),"PRIVATE")),vn(new qt("heartbeat",e=>new Ih(e),"PRIVATE")),Ft(rs,Vi,t),Ft(rs,Vi,"esm2017"),Ft("fire-js","")}Rh("");function Ms(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function xa(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Sh=xa,Ma=new wn("auth","Firebase",xa());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=new Ca("@firebase/auth");function Ch(t,...e){nr.logLevel<=Y.WARN&&nr.warn(`Auth (${Rn}): ${t}`,...e)}function Vn(t,...e){nr.logLevel<=Y.ERROR&&nr.error(`Auth (${Rn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(t,...e){throw Ls(t,...e)}function Ue(t,...e){return Ls(t,...e)}function La(t,e,n){const r=Object.assign(Object.assign({},Sh()),{[e]:n});return new wn("auth","Firebase",r).create(e,{appName:t.name})}function Ah(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Be(t,"argument-error"),La(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ls(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ma.create(t,...e)}function F(t,e,...n){if(!t)throw Ls(e,...n)}function Ve(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vn(e),new Error(e)}function Ge(t,e){t||Ve(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ph(){return Gi()==="http:"||Gi()==="https:"}function Gi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ph()||cd()||"connection"in navigator)?navigator.onLine:!0}function kh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ge(n>e,"Short delay should be less than long delay!"),this.isMobile=ad()||ld()}get(){return Oh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(t,e){Ge(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ve("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ve("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ve("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh=new Sn(3e4,6e4);function Fa(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Cn(t,e,n,r,s={}){return Ba(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Tn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Ua.fetch()($a(t,t.config.apiHost,n,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function Ba(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Nh),e);try{const s=new Mh(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Fn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fn(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Fn(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Fn(t,"user-disabled",o);const f=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw La(t,f,l);Be(t,f)}}catch(s){if(s instanceof dt)throw s;Be(t,"network-request-failed",{message:String(s)})}}async function xh(t,e,n,r,s={}){const i=await Cn(t,e,n,r,s);return"mfaPendingCredential"in i&&Be(t,"multi-factor-auth-required",{_serverResponse:i}),i}function $a(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Us(t.config,s):`${t.config.apiScheme}://${s}`}class Mh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ue(this.auth,"network-request-failed")),Dh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ue(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lh(t,e){return Cn(t,"POST","/v1/accounts:delete",e)}async function Uh(t,e){return Cn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Fh(t,e=!1){const n=ht(t),r=await n.getIdToken(e),s=Fs(r);F(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ln(Lr(s.auth_time)),issuedAtTime:ln(Lr(s.iat)),expirationTime:ln(Lr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Lr(t){return Number(t)*1e3}function Fs(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Vn("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ta(n);return s?JSON.parse(s):(Vn("Failed to decode base64 JWT payload"),null)}catch(s){return Vn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Bh(t){const e=Fs(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof dt&&$h(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function $h({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ln(this.lastLoginAt),this.creationTime=ln(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function rr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await bn(t,Uh(n,{idToken:r}));F(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Vh(i.providerUserInfo):[],c=Wh(t.providerData,o),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=a?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Ha(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function jh(t){const e=ht(t);await rr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Wh(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Vh(t){return t.map(e=>{var{providerId:n}=e,r=Ms(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zh(t,e){const n=await Ba(t,{},async()=>{const r=Tn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=$a(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Ua.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await zh(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new En;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(F(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(F(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new En,this.toJSON())}_performRefresh(){return Ve("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Tt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ms(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ha(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await bn(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Fh(this,e)}reload(){return jh(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Tt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await rr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await bn(this,Lh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,l,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(c=n.tenantId)!==null&&c!==void 0?c:void 0,L=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,x=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:j,emailVerified:M,isAnonymous:te,providerData:ne,stsTokenManager:ge}=n;F(j&&ge,e,"internal-error");const be=En.fromJSON(this.name,ge);F(typeof j=="string",e,"internal-error"),et(h,e.name),et(g,e.name),F(typeof M=="boolean",e,"internal-error"),F(typeof te=="boolean",e,"internal-error"),et(y,e.name),et(C,e.name),et(P,e.name),et(L,e.name),et(k,e.name),et(x,e.name);const Ae=new Tt({uid:j,auth:e,email:g,emailVerified:M,displayName:h,isAnonymous:te,photoURL:C,phoneNumber:y,tenantId:P,stsTokenManager:be,createdAt:k,lastLoginAt:x});return ne&&Array.isArray(ne)&&(Ae.providerData=ne.map(_e=>Object.assign({},_e))),L&&(Ae._redirectEventId=L),Ae}static async _fromIdTokenResponse(e,n,r=!1){const s=new En;s.updateFromServerResponse(n);const i=new Tt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await rr(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=new Map;function ze(t){Ge(t instanceof Function,"Expected a class definition");let e=Ji.get(t);return e?(Ge(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ji.set(t,e),e)}/**
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
 */class ja{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ja.type="NONE";const Yi=ja;/**
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
 */function zn(t,e,n){return`firebase:${t}:${e}:${n}`}class Bt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=zn(this.userKey,s.apiKey,i),this.fullPersistenceKey=zn("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Bt(ze(Yi),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||ze(Yi);const o=zn(r,e.config.apiKey,e.name);let c=null;for(const l of n)try{const f=await l._get(o);if(f){const h=Tt._fromJSON(e,f);l!==i&&(c=h),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new Bt(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Bt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(za(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wa(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qa(e))return"Blackberry";if(Ga(e))return"Webos";if(Bs(e))return"Safari";if((e.includes("chrome/")||Va(e))&&!e.includes("edge/"))return"Chrome";if(Ka(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Wa(t=ue()){return/firefox\//i.test(t)}function Bs(t=ue()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Va(t=ue()){return/crios\//i.test(t)}function za(t=ue()){return/iemobile/i.test(t)}function Ka(t=ue()){return/android/i.test(t)}function qa(t=ue()){return/blackberry/i.test(t)}function Ga(t=ue()){return/webos/i.test(t)}function vr(t=ue()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Kh(t=ue()){var e;return vr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qh(){return ud()&&document.documentMode===10}function Ja(t=ue()){return vr(t)||Ka(t)||Ga(t)||qa(t)||/windows phone/i.test(t)||za(t)}function Gh(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(t,e=[]){let n;switch(t){case"Browser":n=Xi(ue());break;case"Worker":n=`${Xi(ue())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Rn}/${r}`}async function Xa(t,e){return Cn(t,"GET","/v2/recaptchaConfig",Fa(t,e))}function Qi(t){return t!==void 0&&t.enterprise!==void 0}class Qa{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Za(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ue("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Jh().appendChild(r)})}function Yh(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Xh="https://www.google.com/recaptcha/enterprise.js?render=",Qh="recaptcha-enterprise",Zh="NO_RECAPTCHA";class ep{constructor(e){this.type=Qh,this.auth=An(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Xa(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new Qa(a);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(a=>{c(a)})})}function s(i,o,c){const a=window.grecaptcha;Qi(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Zh)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Qi(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Za(Xh+c).then(()=>{s(c,i,o)}).catch(a=>{o(a)})}}).catch(c=>{o(c)})})}}/**
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
 */class tp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zi(this),this.idTokenSubscription=new Zi(this),this.beforeStateQueue=new tp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ma,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ze(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Bt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await rr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ht(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ze(e))})}async initializeRecaptchaConfig(){const e=await Xa(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Qa(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new ep(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new wn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ze(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await Bt.create(this,[ze(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ya(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Ch(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function An(t){return ht(t)}class Zi{constructor(e){this.auth=e,this.observer=null,this.addObserver=_d(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(t,e){const n=Oa(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(er(i,e??{}))return s;Be(s,"already-initialized")}return n.initialize({options:e})}function sp(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ze);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ip(t,e,n){const r=An(t);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=ec(e),{host:o,port:c}=op(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||ap()}function ec(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function op(t){const e=ec(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:eo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:eo(o)}}}function eo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ap(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ve("not implemented")}_getIdTokenResponse(e){return Ve("not implemented")}_linkToIdToken(e,n){return Ve("not implemented")}_getReauthenticationResolver(e){return Ve("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $t(t,e){return xh(t,"POST","/v1/accounts:signInWithIdp",Fa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp="http://localhost";class St extends tc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new St(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Be("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ms(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new St(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $t(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,$t(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$t(e,n)}buildRequest(){const e={requestUri:cp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Tn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pn extends $s{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends Pn{constructor(){super("facebook.com")}static credential(e){return St._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rt.credential(e.oauthAccessToken)}catch{return null}}}rt.FACEBOOK_SIGN_IN_METHOD="facebook.com";rt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends Pn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return St._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return We.credentialFromTaggedObject(e)}static credentialFromError(e){return We.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return We.credential(n,r)}catch{return null}}}We.GOOGLE_SIGN_IN_METHOD="google.com";We.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends Pn{constructor(){super("github.com")}static credential(e){return St._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return st.credential(e.oauthAccessToken)}catch{return null}}}st.GITHUB_SIGN_IN_METHOD="github.com";st.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Pn{constructor(){super("twitter.com")}static credential(e,n){return St._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return it.credential(n,r)}catch{return null}}}it.TWITTER_SIGN_IN_METHOD="twitter.com";it.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Tt._fromIdTokenResponse(e,r,s),o=to(r);return new Gt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=to(r);return new Gt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function to(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends dt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,sr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new sr(e,n,r,s)}}function nc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?sr._fromErrorAndOperation(t,i,e,r):i})}async function lp(t,e,n=!1){const r=await bn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gt._forOperation(t,"link",r)}/**
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
 */async function up(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await bn(t,nc(r,s,e,t),n);F(i.idToken,r,"internal-error");const o=Fs(i.idToken);F(o,r,"internal-error");const{sub:c}=o;return F(t.uid===c,r,"user-mismatch"),Gt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Be(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fp(t,e,n=!1){const r="signIn",s=await nc(t,r,e),i=await Gt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function dp(t,e,n,r){return ht(t).onIdTokenChanged(e,n,r)}function hp(t,e,n){return ht(t).beforeAuthStateChanged(e,n)}function pp(t,e,n,r){return ht(t).onAuthStateChanged(e,n,r)}function gp(t){return ht(t).signOut()}const ir="__sak";/**
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
 */class rc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ir,"1"),this.storage.removeItem(ir),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(){const t=ue();return Bs(t)||vr(t)}const _p=1e3,vp=10;class sc extends rc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=mp()&&Gh(),this.fallbackToPolling=Ja(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);qh()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,vp):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_p)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sc.type="LOCAL";const yp=sc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic extends rc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ic.type="SESSION";const oc=ic;/**
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
 */function bp(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class yr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new yr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await bp(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Ep{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=Hs("",20);s.port1.start();const f=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const g=h;if(g.data.eventId===l)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(){return window}function Ip(t){Fe().location.href=t}/**
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
 */function ac(){return typeof Fe().WorkerGlobalScope<"u"&&typeof Fe().importScripts=="function"}async function wp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Tp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Rp(){return ac()?self:null}/**
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
 */const cc="firebaseLocalStorageDb",Sp=1,or="firebaseLocalStorage",lc="fbase_key";class On{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function br(t,e){return t.transaction([or],e?"readwrite":"readonly").objectStore(or)}function Cp(){const t=indexedDB.deleteDatabase(cc);return new On(t).toPromise()}function as(){const t=indexedDB.open(cc,Sp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(or,{keyPath:lc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(or)?e(r):(r.close(),await Cp(),e(await as()))})})}async function no(t,e,n){const r=br(t,!0).put({[lc]:e,value:n});return new On(r).toPromise()}async function Ap(t,e){const n=br(t,!1).get(e),r=await new On(n).toPromise();return r===void 0?null:r.value}function ro(t,e){const n=br(t,!0).delete(e);return new On(n).toPromise()}const Pp=800,Op=3;class uc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await as(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Op)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ac()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yr._getInstance(Rp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await wp(),!this.activeServiceWorker)return;this.sender=new Ep(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Tp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await as();return await no(e,ir,"1"),await ro(e,ir),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>no(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ap(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ro(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=br(s,!1).getAll();return new On(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uc.type="LOCAL";const kp=uc;new Sn(3e4,6e4);/**
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
 */function fc(t,e){return e?ze(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class js extends tc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $t(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $t(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $t(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Np(t){return fp(t.auth,new js(t),t.bypassAuthState)}function Dp(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),up(n,new js(t),t.bypassAuthState)}async function xp(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),lp(n,new js(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Np;case"linkViaPopup":case"linkViaRedirect":return xp;case"reauthViaPopup":case"reauthViaRedirect":return Dp;default:Be(this.auth,"internal-error")}}resolve(e){Ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=new Sn(2e3,1e4);async function Lp(t,e,n){const r=An(t);Ah(t,e,$s);const s=fc(r,n);return new bt(r,"signInViaPopup",e,s).executeNotNull()}class bt extends dc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,bt.currentPopupAction&&bt.currentPopupAction.cancel(),bt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){Ge(this.filter.length===1,"Popup operations only handle one event");const e=Hs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ue(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ue(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ue(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Mp.get())};e()}}bt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up="pendingRedirect",Kn=new Map;class Fp extends dc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Kn.get(this.auth._key());if(!e){try{const r=await Bp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Kn.set(this.auth._key(),e)}return this.bypassAuthState||Kn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Bp(t,e){const n=jp(e),r=Hp(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function $p(t,e){Kn.set(t._key(),e)}function Hp(t){return ze(t._redirectPersistence)}function jp(t){return zn(Up,t.config.apiKey,t.name)}async function Wp(t,e,n=!1){const r=An(t),s=fc(r,e),o=await new Fp(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=10*60*1e3;class zp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Kp(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!hc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ue(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Vp&&this.cachedEventUids.clear(),this.cachedEventUids.has(so(e))}saveEventToCache(e){this.cachedEventUids.add(so(e)),this.lastProcessedEventTime=Date.now()}}function so(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Kp(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qp(t,e={}){return Cn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Jp=/^https?/;async function Yp(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qp(t);for(const n of e)try{if(Xp(n))return}catch{}Be(t,"unauthorized-domain")}function Xp(t){const e=os(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Jp.test(n))return!1;if(Gp.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Qp=new Sn(3e4,6e4);function io(){const t=Fe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Zp(t){return new Promise((e,n)=>{var r,s,i;function o(){io(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{io(),n(Ue(t,"network-request-failed"))},timeout:Qp.get()})}if(!((s=(r=Fe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Fe().gapi)===null||i===void 0)&&i.load)o();else{const c=Yh("iframefcb");return Fe()[c]=()=>{gapi.load?o():n(Ue(t,"network-request-failed"))},Za(`https://apis.google.com/js/api.js?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw qn=null,e})}let qn=null;function eg(t){return qn=qn||Zp(t),qn}/**
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
 */const tg=new Sn(5e3,15e3),ng="__/auth/iframe",rg="emulator/auth/iframe",sg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ig=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function og(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Us(e,rg):`https://${t.config.authDomain}/${ng}`,r={apiKey:e.apiKey,appName:t.name,v:Rn},s=ig.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Tn(r).slice(1)}`}async function ag(t){const e=await eg(t),n=Fe().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:og(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ue(t,"network-request-failed"),c=Fe().setTimeout(()=>{i(o)},tg.get());function a(){Fe().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const cg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lg=500,ug=600,fg="_blank",dg="http://localhost";class oo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hg(t,e,n,r=lg,s=ug){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},cg),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ue().toLowerCase();n&&(c=Va(l)?fg:n),Wa(l)&&(e=e||dg,a.scrollbars="yes");const f=Object.entries(a).reduce((g,[y,C])=>`${g}${y}=${C},`,"");if(Kh(l)&&c!=="_self")return pg(e||"",c),new oo(null);const h=window.open(e||"",c,f);F(h,t,"popup-blocked");try{h.focus()}catch{}return new oo(h)}function pg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const gg="__/auth/handler",mg="emulator/auth/handler",_g=encodeURIComponent("fac");async function ao(t,e,n,r,s,i){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Rn,eventId:s};if(e instanceof $s){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",md(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,h]of Object.entries(i||{}))o[f]=h}if(e instanceof Pn){const f=e.getScopes().filter(h=>h!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const a=await t._getAppCheckToken(),l=a?`#${_g}=${encodeURIComponent(a)}`:"";return`${vg(t)}?${Tn(c).slice(1)}${l}`}function vg({config:t}){return t.emulator?Us(t,mg):`https://${t.authDomain}/${gg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur="webStorageSupport";class yg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=oc,this._completeRedirectFn=Wp,this._overrideRedirectResult=$p}async _openPopup(e,n,r,s){var i;Ge((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ao(e,n,r,os(),s);return hg(e,o,Hs())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ao(e,n,r,os(),s);return Ip(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ge(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ag(e),r=new zp(e);return n.register("authEvent",s=>(F(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ur,{type:Ur},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ur];o!==void 0&&n(!!o),Be(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Yp(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ja()||Bs()||vr()}}const bg=yg;var co="@firebase/auth",lo="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function wg(t){vn(new qt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ya(t)},l=new np(r,s,i,a);return sp(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),vn(new qt("auth-internal",e=>{const n=An(e.getProvider("auth").getImmediate());return(r=>new Eg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ft(co,lo,Ig(t)),Ft(co,lo,"esm2017")}/**
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
 */const Tg=5*60,Rg=Sa("authIdTokenMaxAge")||Tg;let uo=null;const Sg=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Rg)return;const s=n==null?void 0:n.token;uo!==s&&(uo=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Fr(t=mh()){const e=Oa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rp(t,{popupRedirectResolver:bg,persistence:[kp,yp,oc]}),r=Sa("authTokenSyncURL");if(r){const i=Sg(r);hp(n,i,()=>i(n.currentUser)),dp(n,o=>i(o))}const s=id("auth");return s&&ip(n,`http://${s}`),n}wg("Browser");const Cg={__name:"HomeView",setup(t){const e=ws(null),n=()=>{const s=new We;Lp(Fr(),s).then(i=>{e.value=i.user.displayName}).catch(i=>{console.log("error",i)})},r=()=>{gp(Fr()).then(()=>{e.value=null}).catch(s=>console.log("error",s))};return qo(()=>{pp(Fr(),s=>{s?e.value=s.displayName:e.value=null})}),(s,i)=>(ra(),sa("main",null,[ct("button",{onClick:n},"Sign in with Google"),ct("div",null,"User name : "+Cc(e.value),1),ct("button",{onClick:r},"Sign Out")]))}},Ag=jf({history:sf("/easy-reach"),routes:[{path:"/",name:"home",component:Cg},{path:"/arrivals",name:"arrivals",component:()=>Xf(()=>import("./ArrivalsView-eb92f7a5.js"),[])}]});var Pg="firebase",Og="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ft(Pg,Og,"app");const kg={apiKey:"AIzaSyB9qi8KWgD9LtIERZHMKyf09oDGN4kPKKQ",authDomain:"easy-reach-1f358.firebaseapp.com",projectId:"easy-reach-1f358",storageBucket:"easy-reach-1f358.appspot.com",messagingSenderId:"344931134629",appId:"1:344931134629:web:c0e7bd69de1f0c383f714c"},Ng=()=>{ka(kg)};Ng();const Ws=Lu(Gf);Ws.use($u());Ws.use(Ag);Ws.mount("#app");export{Vf as _,sa as c,ra as o};

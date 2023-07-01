(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function gs(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ne={},Ft=[],ke=()=>{},Sc=()=>!1,Cc=/^on[^a-z]/,fr=t=>Cc.test(t),ms=t=>t.startsWith("onUpdate:"),le=Object.assign,_s=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ac=Object.prototype.hasOwnProperty,z=(t,e)=>Ac.call(t,e),U=Array.isArray,Bt=t=>dr(t)==="[object Map]",yo=t=>dr(t)==="[object Set]",$=t=>typeof t=="function",ue=t=>typeof t=="string",vs=t=>typeof t=="symbol",se=t=>t!==null&&typeof t=="object",bo=t=>se(t)&&$(t.then)&&$(t.catch),Eo=Object.prototype.toString,dr=t=>Eo.call(t),Pc=t=>dr(t).slice(8,-1),Io=t=>dr(t)==="[object Object]",ys=t=>ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Vn=gs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Oc=/-(\w)/g,Vt=hr(t=>t.replace(Oc,(e,n)=>n?n.toUpperCase():"")),kc=/\B([A-Z])/g,Qt=hr(t=>t.replace(kc,"-$1").toLowerCase()),wo=hr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Cr=hr(t=>t?`on${wo(t)}`:""),gn=(t,e)=>!Object.is(t,e),Ar=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Qn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Nc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ei;const zr=()=>ei||(ei=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function bs(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ue(r)?Lc(r):bs(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ue(t))return t;if(se(t))return t}}const Dc=/;(?![^(]*\))/g,xc=/:([^]+)/,Mc=/\/\*[^]*?\*\//g;function Lc(t){const e={};return t.replace(Mc,"").split(Dc).forEach(n=>{if(n){const r=n.split(xc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Es(t){let e="";if(ue(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const r=Es(t[n]);r&&(e+=r+" ")}else if(se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Uc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fc=gs(Uc);function To(t){return!!t||t===""}const Bc=t=>ue(t)?t:t==null?"":U(t)||se(t)&&(t.toString===Eo||!$(t.toString))?JSON.stringify(t,Ro,2):String(t),Ro=(t,e)=>e&&e.__v_isRef?Ro(t,e.value):Bt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:yo(e)?{[`Set(${e.size})`]:[...e.values()]}:se(e)&&!U(e)&&!Io(e)?String(e):e;let Ie;class So{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ie,!e&&Ie&&(this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ie;try{return Ie=this,e()}finally{Ie=n}}}on(){Ie=this}off(){Ie=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Co(t){return new So(t)}function $c(t,e=Ie){e&&e.active&&e.effects.push(t)}function Ao(){return Ie}function Hc(t){Ie&&Ie.cleanups.push(t)}const Is=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Po=t=>(t.w&mt)>0,Oo=t=>(t.n&mt)>0,jc=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=mt},Wc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Po(s)&&!Oo(s)?s.delete(t):e[n++]=s,s.w&=~mt,s.n&=~mt}e.length=n}},Zn=new WeakMap;let on=0,mt=1;const Kr=30;let Ae;const St=Symbol(""),qr=Symbol("");class ws{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,$c(this,r)}run(){if(!this.active)return this.fn();let e=Ae,n=ut;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ae,Ae=this,ut=!0,mt=1<<++on,on<=Kr?jc(this):ti(this),this.fn()}finally{on<=Kr&&Wc(this),mt=1<<--on,Ae=this.parent,ut=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ae===this?this.deferStop=!0:this.active&&(ti(this),this.onStop&&this.onStop(),this.active=!1)}}function ti(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let ut=!0;const ko=[];function Zt(){ko.push(ut),ut=!1}function en(){const t=ko.pop();ut=t===void 0?!0:t}function ye(t,e,n){if(ut&&Ae){let r=Zn.get(t);r||Zn.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Is()),No(s)}}function No(t,e){let n=!1;on<=Kr?Oo(t)||(t.n|=mt,n=!Po(t)):n=!t.has(Ae),n&&(t.add(Ae),Ae.deps.push(t))}function Xe(t,e,n,r,s,i){const o=Zn.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&U(t)){const a=Number(r);o.forEach((l,u)=>{(u==="length"||u>=a)&&c.push(l)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":U(t)?ys(n)&&c.push(o.get("length")):(c.push(o.get(St)),Bt(t)&&c.push(o.get(qr)));break;case"delete":U(t)||(c.push(o.get(St)),Bt(t)&&c.push(o.get(qr)));break;case"set":Bt(t)&&c.push(o.get(St));break}if(c.length===1)c[0]&&Gr(c[0]);else{const a=[];for(const l of c)l&&a.push(...l);Gr(Is(a))}}function Gr(t,e){const n=U(t)?t:[...t];for(const r of n)r.computed&&ni(r);for(const r of n)r.computed||ni(r)}function ni(t,e){(t!==Ae||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Vc(t,e){var n;return(n=Zn.get(t))==null?void 0:n.get(e)}const zc=gs("__proto__,__v_isRef,__isVue"),Do=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(vs)),Kc=Ts(),qc=Ts(!1,!0),Gc=Ts(!0),ri=Jc();function Jc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=K(this);for(let i=0,o=this.length;i<o;i++)ye(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(K)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Zt();const r=K(this)[e].apply(this,n);return en(),r}}),t}function Yc(t){const e=K(this);return ye(e,"has",t),e.hasOwnProperty(t)}function Ts(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?dl:Fo:e?Uo:Lo).get(r))return r;const o=U(r);if(!t){if(o&&z(ri,s))return Reflect.get(ri,s,i);if(s==="hasOwnProperty")return Yc}const c=Reflect.get(r,s,i);return(vs(s)?Do.has(s):zc(s))||(t||ye(r,"get",s),e)?c:oe(c)?o&&ys(s)?c:c.value:se(c)?t?Bo(c):tn(c):c}}const Xc=xo(),Qc=xo(!0);function xo(t=!1){return function(n,r,s,i){let o=n[r];if(zt(o)&&oe(o)&&!oe(s))return!1;if(!t&&(!er(s)&&!zt(s)&&(o=K(o),s=K(s)),!U(n)&&oe(o)&&!oe(s)))return o.value=s,!0;const c=U(n)&&ys(r)?Number(r)<n.length:z(n,r),a=Reflect.set(n,r,s,i);return n===K(i)&&(c?gn(s,o)&&Xe(n,"set",r,s):Xe(n,"add",r,s)),a}}function Zc(t,e){const n=z(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Xe(t,"delete",e,void 0),r}function el(t,e){const n=Reflect.has(t,e);return(!vs(e)||!Do.has(e))&&ye(t,"has",e),n}function tl(t){return ye(t,"iterate",U(t)?"length":St),Reflect.ownKeys(t)}const Mo={get:Kc,set:Xc,deleteProperty:Zc,has:el,ownKeys:tl},nl={get:Gc,set(t,e){return!0},deleteProperty(t,e){return!0}},rl=le({},Mo,{get:qc,set:Qc}),Rs=t=>t,pr=t=>Reflect.getPrototypeOf(t);function Un(t,e,n=!1,r=!1){t=t.__v_raw;const s=K(t),i=K(e);n||(e!==i&&ye(s,"get",e),ye(s,"get",i));const{has:o}=pr(s),c=r?Rs:n?As:mn;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function Fn(t,e=!1){const n=this.__v_raw,r=K(n),s=K(t);return e||(t!==s&&ye(r,"has",t),ye(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Bn(t,e=!1){return t=t.__v_raw,!e&&ye(K(t),"iterate",St),Reflect.get(t,"size",t)}function si(t){t=K(t);const e=K(this);return pr(e).has.call(e,t)||(e.add(t),Xe(e,"add",t,t)),this}function ii(t,e){e=K(e);const n=K(this),{has:r,get:s}=pr(n);let i=r.call(n,t);i||(t=K(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?gn(e,o)&&Xe(n,"set",t,e):Xe(n,"add",t,e),this}function oi(t){const e=K(this),{has:n,get:r}=pr(e);let s=n.call(e,t);s||(t=K(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&Xe(e,"delete",t,void 0),i}function ai(){const t=K(this),e=t.size!==0,n=t.clear();return e&&Xe(t,"clear",void 0,void 0),n}function $n(t,e){return function(r,s){const i=this,o=i.__v_raw,c=K(o),a=e?Rs:t?As:mn;return!t&&ye(c,"iterate",St),o.forEach((l,u)=>r.call(s,a(l),a(u),i))}}function Hn(t,e,n){return function(...r){const s=this.__v_raw,i=K(s),o=Bt(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,l=s[t](...r),u=n?Rs:e?As:mn;return!e&&ye(i,"iterate",a?qr:St),{next(){const{value:h,done:g}=l.next();return g?{value:h,done:g}:{value:c?[u(h[0]),u(h[1])]:u(h),done:g}},[Symbol.iterator](){return this}}}}function tt(t){return function(...e){return t==="delete"?!1:this}}function sl(){const t={get(i){return Un(this,i)},get size(){return Bn(this)},has:Fn,add:si,set:ii,delete:oi,clear:ai,forEach:$n(!1,!1)},e={get(i){return Un(this,i,!1,!0)},get size(){return Bn(this)},has:Fn,add:si,set:ii,delete:oi,clear:ai,forEach:$n(!1,!0)},n={get(i){return Un(this,i,!0)},get size(){return Bn(this,!0)},has(i){return Fn.call(this,i,!0)},add:tt("add"),set:tt("set"),delete:tt("delete"),clear:tt("clear"),forEach:$n(!0,!1)},r={get(i){return Un(this,i,!0,!0)},get size(){return Bn(this,!0)},has(i){return Fn.call(this,i,!0)},add:tt("add"),set:tt("set"),delete:tt("delete"),clear:tt("clear"),forEach:$n(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Hn(i,!1,!1),n[i]=Hn(i,!0,!1),e[i]=Hn(i,!1,!0),r[i]=Hn(i,!0,!0)}),[t,n,e,r]}const[il,ol,al,cl]=sl();function Ss(t,e){const n=e?t?cl:al:t?ol:il;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(z(n,s)&&s in r?n:r,s,i)}const ll={get:Ss(!1,!1)},ul={get:Ss(!1,!0)},fl={get:Ss(!0,!1)},Lo=new WeakMap,Uo=new WeakMap,Fo=new WeakMap,dl=new WeakMap;function hl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pl(t){return t.__v_skip||!Object.isExtensible(t)?0:hl(Pc(t))}function tn(t){return zt(t)?t:Cs(t,!1,Mo,ll,Lo)}function gl(t){return Cs(t,!1,rl,ul,Uo)}function Bo(t){return Cs(t,!0,nl,fl,Fo)}function Cs(t,e,n,r,s){if(!se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=pl(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function ft(t){return zt(t)?ft(t.__v_raw):!!(t&&t.__v_isReactive)}function zt(t){return!!(t&&t.__v_isReadonly)}function er(t){return!!(t&&t.__v_isShallow)}function $o(t){return ft(t)||zt(t)}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function gr(t){return Qn(t,"__v_skip",!0),t}const mn=t=>se(t)?tn(t):t,As=t=>se(t)?Bo(t):t;function Ho(t){ut&&Ae&&(t=K(t),No(t.dep||(t.dep=Is())))}function jo(t,e){t=K(t);const n=t.dep;n&&Gr(n)}function oe(t){return!!(t&&t.__v_isRef===!0)}function Ps(t){return Wo(t,!1)}function ml(t){return Wo(t,!0)}function Wo(t,e){return oe(t)?t:new _l(t,e)}class _l{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:K(e),this._value=n?e:mn(e)}get value(){return Ho(this),this._value}set value(e){const n=this.__v_isShallow||er(e)||zt(e);e=n?e:K(e),gn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:mn(e),jo(this))}}function Ye(t){return oe(t)?t.value:t}const vl={get:(t,e,n)=>Ye(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return oe(s)&&!oe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Vo(t){return ft(t)?t:new Proxy(t,vl)}function yl(t){const e=U(t)?new Array(t.length):{};for(const n in t)e[n]=El(t,n);return e}class bl{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Vc(K(this._object),this._key)}}function El(t,e,n){const r=t[e];return oe(r)?r:new bl(t,e,n)}class Il{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ws(e,()=>{this._dirty||(this._dirty=!0,jo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=K(this);return Ho(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function wl(t,e,n=!1){let r,s;const i=$(t);return i?(r=t,s=ke):(r=t.get,s=t.set),new Il(r,s,i||!s,n)}function dt(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){mr(i,e,n)}return s}function Ne(t,e,n,r){if($(t)){const i=dt(t,e,n,r);return i&&bo(i)&&i.catch(o=>{mr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ne(t[i],e,n,r));return s}function mr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,c)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){dt(a,null,10,[t,o,c]);return}}Tl(t,n,s,r)}function Tl(t,e,n,r=!0){console.error(t)}let _n=!1,Jr=!1;const pe=[];let Be=0;const $t=[];let Ke=null,wt=0;const zo=Promise.resolve();let Os=null;function ks(t){const e=Os||zo;return t?e.then(this?t.bind(this):t):e}function Rl(t){let e=Be+1,n=pe.length;for(;e<n;){const r=e+n>>>1;vn(pe[r])<t?e=r+1:n=r}return e}function Ns(t){(!pe.length||!pe.includes(t,_n&&t.allowRecurse?Be+1:Be))&&(t.id==null?pe.push(t):pe.splice(Rl(t.id),0,t),Ko())}function Ko(){!_n&&!Jr&&(Jr=!0,Os=zo.then(Go))}function Sl(t){const e=pe.indexOf(t);e>Be&&pe.splice(e,1)}function Cl(t){U(t)?$t.push(...t):(!Ke||!Ke.includes(t,t.allowRecurse?wt+1:wt))&&$t.push(t),Ko()}function ci(t,e=_n?Be+1:0){for(;e<pe.length;e++){const n=pe[e];n&&n.pre&&(pe.splice(e,1),e--,n())}}function qo(t){if($t.length){const e=[...new Set($t)];if($t.length=0,Ke){Ke.push(...e);return}for(Ke=e,Ke.sort((n,r)=>vn(n)-vn(r)),wt=0;wt<Ke.length;wt++)Ke[wt]();Ke=null,wt=0}}const vn=t=>t.id==null?1/0:t.id,Al=(t,e)=>{const n=vn(t)-vn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Go(t){Jr=!1,_n=!0,pe.sort(Al);const e=ke;try{for(Be=0;Be<pe.length;Be++){const n=pe[Be];n&&n.active!==!1&&dt(n,null,14)}}finally{Be=0,pe.length=0,qo(),_n=!1,Os=null,(pe.length||$t.length)&&Go()}}function Pl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ne;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:g}=r[u]||ne;g&&(s=n.map(v=>ue(v)?v.trim():v)),h&&(s=n.map(Nc))}let c,a=r[c=Cr(e)]||r[c=Cr(Vt(e))];!a&&i&&(a=r[c=Cr(Qt(e))]),a&&Ne(a,t,6,s);const l=r[c+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Ne(l,t,6,s)}}function Jo(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!$(t)){const a=l=>{const u=Jo(l,e,!0);u&&(c=!0,le(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(se(t)&&r.set(t,null),null):(U(i)?i.forEach(a=>o[a]=null):le(o,i),se(t)&&r.set(t,o),o)}function _r(t,e){return!t||!fr(e)?!1:(e=e.slice(2).replace(/Once$/,""),z(t,e[0].toLowerCase()+e.slice(1))||z(t,Qt(e))||z(t,e))}let Pe=null,vr=null;function tr(t){const e=Pe;return Pe=t,vr=t&&t.type.__scopeId||null,e}function Ol(t){vr=t}function kl(){vr=null}function Nl(t,e=Pe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&vi(-1);const i=tr(e);let o;try{o=t(...s)}finally{tr(i),r._d&&vi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Pr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:c,attrs:a,emit:l,render:u,renderCache:h,data:g,setupState:v,ctx:R,inheritAttrs:A}=t;let L,O;const N=tr(t);try{if(n.shapeFlag&4){const D=s||r;L=Fe(u.call(D,D,h,i,v,g,R)),O=a}else{const D=e;L=Fe(D.length>1?D(i,{attrs:a,slots:c,emit:l}):D(i,null)),O=e.props?a:Dl(a)}}catch(D){un.length=0,mr(D,t,1),L=Se(bn)}let H=L;if(O&&A!==!1){const D=Object.keys(O),{shapeFlag:G}=H;D.length&&G&7&&(o&&D.some(ms)&&(O=xl(O,o)),H=Kt(H,O))}return n.dirs&&(H=Kt(H),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),L=H,tr(N),L}const Dl=t=>{let e;for(const n in t)(n==="class"||n==="style"||fr(n))&&((e||(e={}))[n]=t[n]);return e},xl=(t,e)=>{const n={};for(const r in t)(!ms(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ml(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?li(r,o,l):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const g=u[h];if(o[g]!==r[g]&&!_r(l,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?li(r,o,l):!0:!!o;return!1}function li(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!_r(n,i))return!0}return!1}function Ll({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Ul=t=>t.__isSuspense;function Fl(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):Cl(t)}const jn={};function cn(t,e,n){return Yo(t,e,n)}function Yo(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ne){var c;const a=Ao()===((c=fe)==null?void 0:c.scope)?fe:null;let l,u=!1,h=!1;if(oe(t)?(l=()=>t.value,u=er(t)):ft(t)?(l=()=>t,r=!0):U(t)?(h=!0,u=t.some(D=>ft(D)||er(D)),l=()=>t.map(D=>{if(oe(D))return D.value;if(ft(D))return Ut(D);if($(D))return dt(D,a,2)})):$(t)?e?l=()=>dt(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return g&&g(),Ne(t,a,3,[v])}:l=ke,e&&r){const D=l;l=()=>Ut(D())}let g,v=D=>{g=N.onStop=()=>{dt(D,a,4)}},R;if(In)if(v=ke,e?n&&Ne(e,a,3,[l(),h?[]:void 0,v]):l(),s==="sync"){const D=ku();R=D.__watcherHandles||(D.__watcherHandles=[])}else return ke;let A=h?new Array(t.length).fill(jn):jn;const L=()=>{if(N.active)if(e){const D=N.run();(r||u||(h?D.some((G,ie)=>gn(G,A[ie])):gn(D,A)))&&(g&&g(),Ne(e,a,3,[D,A===jn?void 0:h&&A[0]===jn?[]:A,v]),A=D)}else N.run()};L.allowRecurse=!!e;let O;s==="sync"?O=L:s==="post"?O=()=>ve(L,a&&a.suspense):(L.pre=!0,a&&(L.id=a.uid),O=()=>Ns(L));const N=new ws(l,O);e?n?L():A=N.run():s==="post"?ve(N.run.bind(N),a&&a.suspense):N.run();const H=()=>{N.stop(),a&&a.scope&&_s(a.scope.effects,N)};return R&&R.push(H),H}function Bl(t,e,n){const r=this.proxy,s=ue(t)?t.includes(".")?Xo(r,t):()=>r[t]:t.bind(r,r);let i;$(e)?i=e:(i=e.handler,n=e);const o=fe;qt(this);const c=Yo(s,i.bind(r),n);return o?qt(o):Ct(),c}function Xo(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Ut(t,e){if(!se(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),oe(t))Ut(t.value,e);else if(U(t))for(let n=0;n<t.length;n++)Ut(t[n],e);else if(yo(t)||Bt(t))t.forEach(n=>{Ut(n,e)});else if(Io(t))for(const n in t)Ut(t[n],e);return t}function bt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(Zt(),Ne(a,n,8,[t.el,c,t,e]),en())}}function Qo(t,e){return $(t)?(()=>le({name:t.name},e,{setup:t}))():t}const zn=t=>!!t.type.__asyncLoader,Zo=t=>t.type.__isKeepAlive;function $l(t,e){ea(t,"a",e)}function Hl(t,e){ea(t,"da",e)}function ea(t,e,n=fe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(yr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Zo(s.parent.vnode)&&jl(r,e,n,s),s=s.parent}}function jl(t,e,n,r){const s=yr(e,t,r,!0);na(()=>{_s(r[e],s)},n)}function yr(t,e,n=fe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Zt(),qt(n);const c=Ne(e,n,t,o);return Ct(),en(),c});return r?s.unshift(i):s.push(i),i}}const Ze=t=>(e,n=fe)=>(!In||t==="sp")&&yr(t,(...r)=>e(...r),n),Wl=Ze("bm"),ta=Ze("m"),Vl=Ze("bu"),zl=Ze("u"),Kl=Ze("bum"),na=Ze("um"),ql=Ze("sp"),Gl=Ze("rtg"),Jl=Ze("rtc");function Yl(t,e=fe){yr("ec",t,e)}const Xl=Symbol.for("v-ndc"),Yr=t=>t?pa(t)?Us(t)||t.proxy:Yr(t.parent):null,ln=le(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Yr(t.parent),$root:t=>Yr(t.root),$emit:t=>t.emit,$options:t=>Ds(t),$forceUpdate:t=>t.f||(t.f=()=>Ns(t.update)),$nextTick:t=>t.n||(t.n=ks.bind(t.proxy)),$watch:t=>Bl.bind(t)}),Or=(t,e)=>t!==ne&&!t.__isScriptSetup&&z(t,e),Ql={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let l;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Or(r,e))return o[e]=1,r[e];if(s!==ne&&z(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&z(l,e))return o[e]=3,i[e];if(n!==ne&&z(n,e))return o[e]=4,n[e];Xr&&(o[e]=0)}}const u=ln[e];let h,g;if(u)return e==="$attrs"&&ye(t,"get",e),u(t);if((h=c.__cssModules)&&(h=h[e]))return h;if(n!==ne&&z(n,e))return o[e]=4,n[e];if(g=a.config.globalProperties,z(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Or(s,e)?(s[e]=n,!0):r!==ne&&z(r,e)?(r[e]=n,!0):z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==ne&&z(t,o)||Or(e,o)||(c=i[0])&&z(c,o)||z(r,o)||z(ln,o)||z(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ui(t){return U(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Xr=!0;function Zl(t){const e=Ds(t),n=t.proxy,r=t.ctx;Xr=!1,e.beforeCreate&&fi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:u,beforeMount:h,mounted:g,beforeUpdate:v,updated:R,activated:A,deactivated:L,beforeDestroy:O,beforeUnmount:N,destroyed:H,unmounted:D,render:G,renderTracked:ie,renderTriggered:ce,errorCaptured:V,serverPrefetch:j,expose:re,inheritAttrs:de,components:be,directives:Te,filters:yt}=e;if(l&&eu(l,r,null),o)for(const Z in o){const J=o[Z];$(J)&&(r[Z]=J.bind(n))}if(s){const Z=s.call(n,n);se(Z)&&(t.data=tn(Z))}if(Xr=!0,i)for(const Z in i){const J=i[Z],Ve=$(J)?J.bind(n,n):$(J.get)?J.get.bind(n,n):ke,et=!$(J)&&$(J.set)?J.set.bind(n):ke,xe=we({get:Ve,set:et});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>xe.value,set:_e=>xe.value=_e})}if(c)for(const Z in c)ra(c[Z],r,n,Z);if(a){const Z=$(a)?a.call(n):a;Reflect.ownKeys(Z).forEach(J=>{Kn(J,Z[J])})}u&&fi(u,t,"c");function q(Z,J){U(J)?J.forEach(Ve=>Z(Ve.bind(n))):J&&Z(J.bind(n))}if(q(Wl,h),q(ta,g),q(Vl,v),q(zl,R),q($l,A),q(Hl,L),q(Yl,V),q(Jl,ie),q(Gl,ce),q(Kl,N),q(na,D),q(ql,j),U(re))if(re.length){const Z=t.exposed||(t.exposed={});re.forEach(J=>{Object.defineProperty(Z,J,{get:()=>n[J],set:Ve=>n[J]=Ve})})}else t.exposed||(t.exposed={});G&&t.render===ke&&(t.render=G),de!=null&&(t.inheritAttrs=de),be&&(t.components=be),Te&&(t.directives=Te)}function eu(t,e,n=ke){U(t)&&(t=Qr(t));for(const r in t){const s=t[r];let i;se(s)?"default"in s?i=$e(s.from||r,s.default,!0):i=$e(s.from||r):i=$e(s),oe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function fi(t,e,n){Ne(U(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ra(t,e,n,r){const s=r.includes(".")?Xo(n,r):()=>n[r];if(ue(t)){const i=e[t];$(i)&&cn(s,i)}else if($(t))cn(s,t.bind(n));else if(se(t))if(U(t))t.forEach(i=>ra(i,e,n,r));else{const i=$(t.handler)?t.handler.bind(n):e[t.handler];$(i)&&cn(s,i,t)}}function Ds(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(l=>nr(a,l,o,!0)),nr(a,e,o)),se(e)&&i.set(e,a),a}function nr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&nr(t,i,n,!0),s&&s.forEach(o=>nr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=tu[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const tu={data:di,props:hi,emits:hi,methods:an,computed:an,beforeCreate:me,created:me,beforeMount:me,mounted:me,beforeUpdate:me,updated:me,beforeDestroy:me,beforeUnmount:me,destroyed:me,unmounted:me,activated:me,deactivated:me,errorCaptured:me,serverPrefetch:me,components:an,directives:an,watch:ru,provide:di,inject:nu};function di(t,e){return e?t?function(){return le($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function nu(t,e){return an(Qr(t),Qr(e))}function Qr(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function me(t,e){return t?[...new Set([].concat(t,e))]:e}function an(t,e){return t?le(Object.create(null),t,e):e}function hi(t,e){return t?U(t)&&U(e)?[...new Set([...t,...e])]:le(Object.create(null),ui(t),ui(e??{})):e}function ru(t,e){if(!t)return e;if(!e)return t;const n=le(Object.create(null),t);for(const r in e)n[r]=me(t[r],e[r]);return n}function sa(){return{app:null,config:{isNativeTag:Sc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let su=0;function iu(t,e){return function(r,s=null){$(r)||(r=le({},r)),s!=null&&!se(s)&&(s=null);const i=sa(),o=new Set;let c=!1;const a=i.app={_uid:su++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Nu,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&$(l.install)?(o.add(l),l.install(a,...u)):$(l)&&(o.add(l),l(a,...u))),a},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),a},component(l,u){return u?(i.components[l]=u,a):i.components[l]},directive(l,u){return u?(i.directives[l]=u,a):i.directives[l]},mount(l,u,h){if(!c){const g=Se(r,s);return g.appContext=i,u&&e?e(g,l):t(g,l,h),c=!0,a._container=l,l.__vue_app__=a,Us(g.component)||g.component.proxy}},unmount(){c&&(t(null,a._container),delete a._container.__vue_app__)},provide(l,u){return i.provides[l]=u,a},runWithContext(l){yn=a;try{return l()}finally{yn=null}}};return a}}let yn=null;function Kn(t,e){if(fe){let n=fe.provides;const r=fe.parent&&fe.parent.provides;r===n&&(n=fe.provides=Object.create(r)),n[t]=e}}function $e(t,e,n=!1){const r=fe||Pe;if(r||yn){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:yn._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&$(e)?e.call(r&&r.proxy):e}}function ou(){return!!(fe||Pe||yn)}function au(t,e,n,r=!1){const s={},i={};Qn(i,Er,1),t.propsDefaults=Object.create(null),ia(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:gl(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function cu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=K(s),[a]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let g=u[h];if(_r(t.emitsOptions,g))continue;const v=e[g];if(a)if(z(i,g))v!==i[g]&&(i[g]=v,l=!0);else{const R=Vt(g);s[R]=Zr(a,c,R,v,t,!1)}else v!==i[g]&&(i[g]=v,l=!0)}}}else{ia(t,e,s,i)&&(l=!0);let u;for(const h in c)(!e||!z(e,h)&&((u=Qt(h))===h||!z(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Zr(a,c,h,void 0,t,!0)):delete s[h]);if(i!==c)for(const h in i)(!e||!z(e,h))&&(delete i[h],l=!0)}l&&Xe(t,"set","$attrs")}function ia(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(Vn(a))continue;const l=e[a];let u;s&&z(s,u=Vt(a))?!i||!i.includes(u)?n[u]=l:(c||(c={}))[u]=l:_r(t.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=K(n),l=c||ne;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Zr(s,a,h,l[h],t,!z(l,h))}}return o}function Zr(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=z(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&$(a)){const{propsDefaults:l}=s;n in l?r=l[n]:(qt(s),r=l[n]=a.call(null,e),Ct())}else r=a}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Qt(n))&&(r=!0))}return r}function oa(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!$(t)){const u=h=>{a=!0;const[g,v]=oa(h,e,!0);le(o,g),v&&c.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!a)return se(t)&&r.set(t,Ft),Ft;if(U(i))for(let u=0;u<i.length;u++){const h=Vt(i[u]);pi(h)&&(o[h]=ne)}else if(i)for(const u in i){const h=Vt(u);if(pi(h)){const g=i[u],v=o[h]=U(g)||$(g)?{type:g}:le({},g);if(v){const R=_i(Boolean,v.type),A=_i(String,v.type);v[0]=R>-1,v[1]=A<0||R<A,(R>-1||z(v,"default"))&&c.push(h)}}}const l=[o,c];return se(t)&&r.set(t,l),l}function pi(t){return t[0]!=="$"}function gi(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function mi(t,e){return gi(t)===gi(e)}function _i(t,e){return U(e)?e.findIndex(n=>mi(n,t)):$(e)&&mi(e,t)?0:-1}const aa=t=>t[0]==="_"||t==="$stable",xs=t=>U(t)?t.map(Fe):[Fe(t)],lu=(t,e,n)=>{if(e._n)return e;const r=Nl((...s)=>xs(e(...s)),n);return r._c=!1,r},ca=(t,e,n)=>{const r=t._ctx;for(const s in t){if(aa(s))continue;const i=t[s];if($(i))e[s]=lu(s,i,r);else if(i!=null){const o=xs(i);e[s]=()=>o}}},la=(t,e)=>{const n=xs(e);t.slots.default=()=>n},uu=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=K(e),Qn(e,"_",n)):ca(e,t.slots={})}else t.slots={},e&&la(t,e);Qn(t.slots,Er,1)},fu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ne;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(le(s,e),!n&&c===1&&delete s._):(i=!e.$stable,ca(e,s)),o=e}else e&&(la(t,e),o={default:1});if(i)for(const c in s)!aa(c)&&!(c in o)&&delete s[c]};function es(t,e,n,r,s=!1){if(U(t)){t.forEach((g,v)=>es(g,e&&(U(e)?e[v]:e),n,r,s));return}if(zn(r)&&!s)return;const i=r.shapeFlag&4?Us(r.component)||r.component.proxy:r.el,o=s?null:i,{i:c,r:a}=t,l=e&&e.r,u=c.refs===ne?c.refs={}:c.refs,h=c.setupState;if(l!=null&&l!==a&&(ue(l)?(u[l]=null,z(h,l)&&(h[l]=null)):oe(l)&&(l.value=null)),$(a))dt(a,c,12,[o,u]);else{const g=ue(a),v=oe(a);if(g||v){const R=()=>{if(t.f){const A=g?z(h,a)?h[a]:u[a]:a.value;s?U(A)&&_s(A,i):U(A)?A.includes(i)||A.push(i):g?(u[a]=[i],z(h,a)&&(h[a]=u[a])):(a.value=[i],t.k&&(u[t.k]=a.value))}else g?(u[a]=o,z(h,a)&&(h[a]=o)):v&&(a.value=o,t.k&&(u[t.k]=o))};o?(R.id=-1,ve(R,n)):R()}}}const ve=Fl;function du(t){return hu(t)}function hu(t,e){const n=zr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:u,parentNode:h,nextSibling:g,setScopeId:v=ke,insertStaticContent:R}=t,A=(f,d,p,m=null,y=null,b=null,S=!1,I=null,w=!!d.dynamicChildren)=>{if(f===d)return;f&&!rn(f,d)&&(m=_(f),_e(f,y,b,!0),f=null),d.patchFlag===-2&&(w=!1,d.dynamicChildren=null);const{type:E,ref:x,shapeFlag:P}=d;switch(E){case br:L(f,d,p,m);break;case bn:O(f,d,p,m);break;case kr:f==null&&N(d,p,m,S);break;case Ue:be(f,d,p,m,y,b,S,I,w);break;default:P&1?G(f,d,p,m,y,b,S,I,w):P&6?Te(f,d,p,m,y,b,S,I,w):(P&64||P&128)&&E.process(f,d,p,m,y,b,S,I,w,T)}x!=null&&y&&es(x,f&&f.ref,b,d||f,!d)},L=(f,d,p,m)=>{if(f==null)r(d.el=c(d.children),p,m);else{const y=d.el=f.el;d.children!==f.children&&l(y,d.children)}},O=(f,d,p,m)=>{f==null?r(d.el=a(d.children||""),p,m):d.el=f.el},N=(f,d,p,m)=>{[f.el,f.anchor]=R(f.children,d,p,m,f.el,f.anchor)},H=({el:f,anchor:d},p,m)=>{let y;for(;f&&f!==d;)y=g(f),r(f,p,m),f=y;r(d,p,m)},D=({el:f,anchor:d})=>{let p;for(;f&&f!==d;)p=g(f),s(f),f=p;s(d)},G=(f,d,p,m,y,b,S,I,w)=>{S=S||d.type==="svg",f==null?ie(d,p,m,y,b,S,I,w):j(f,d,y,b,S,I,w)},ie=(f,d,p,m,y,b,S,I)=>{let w,E;const{type:x,props:P,shapeFlag:M,transition:F,dirs:W}=f;if(w=f.el=o(f.type,b,P&&P.is,P),M&8?u(w,f.children):M&16&&V(f.children,w,null,m,y,b&&x!=="foreignObject",S,I),W&&bt(f,null,m,"created"),ce(w,f,f.scopeId,S,m),P){for(const Q in P)Q!=="value"&&!Vn(Q)&&i(w,Q,null,P[Q],b,f.children,m,y,he);"value"in P&&i(w,"value",null,P.value),(E=P.onVnodeBeforeMount)&&Le(E,m,f)}W&&bt(f,null,m,"beforeMount");const te=(!y||y&&!y.pendingBranch)&&F&&!F.persisted;te&&F.beforeEnter(w),r(w,d,p),((E=P&&P.onVnodeMounted)||te||W)&&ve(()=>{E&&Le(E,m,f),te&&F.enter(w),W&&bt(f,null,m,"mounted")},y)},ce=(f,d,p,m,y)=>{if(p&&v(f,p),m)for(let b=0;b<m.length;b++)v(f,m[b]);if(y){let b=y.subTree;if(d===b){const S=y.vnode;ce(f,S,S.scopeId,S.slotScopeIds,y.parent)}}},V=(f,d,p,m,y,b,S,I,w=0)=>{for(let E=w;E<f.length;E++){const x=f[E]=I?it(f[E]):Fe(f[E]);A(null,x,d,p,m,y,b,S,I)}},j=(f,d,p,m,y,b,S)=>{const I=d.el=f.el;let{patchFlag:w,dynamicChildren:E,dirs:x}=d;w|=f.patchFlag&16;const P=f.props||ne,M=d.props||ne;let F;p&&Et(p,!1),(F=M.onVnodeBeforeUpdate)&&Le(F,p,d,f),x&&bt(d,f,p,"beforeUpdate"),p&&Et(p,!0);const W=y&&d.type!=="foreignObject";if(E?re(f.dynamicChildren,E,I,p,m,W,b):S||J(f,d,I,null,p,m,W,b,!1),w>0){if(w&16)de(I,d,P,M,p,m,y);else if(w&2&&P.class!==M.class&&i(I,"class",null,M.class,y),w&4&&i(I,"style",P.style,M.style,y),w&8){const te=d.dynamicProps;for(let Q=0;Q<te.length;Q++){const ae=te[Q],Ce=P[ae],Dt=M[ae];(Dt!==Ce||ae==="value")&&i(I,ae,Ce,Dt,y,f.children,p,m,he)}}w&1&&f.children!==d.children&&u(I,d.children)}else!S&&E==null&&de(I,d,P,M,p,m,y);((F=M.onVnodeUpdated)||x)&&ve(()=>{F&&Le(F,p,d,f),x&&bt(d,f,p,"updated")},m)},re=(f,d,p,m,y,b,S)=>{for(let I=0;I<d.length;I++){const w=f[I],E=d[I],x=w.el&&(w.type===Ue||!rn(w,E)||w.shapeFlag&70)?h(w.el):p;A(w,E,x,null,m,y,b,S,!0)}},de=(f,d,p,m,y,b,S)=>{if(p!==m){if(p!==ne)for(const I in p)!Vn(I)&&!(I in m)&&i(f,I,p[I],null,S,d.children,y,b,he);for(const I in m){if(Vn(I))continue;const w=m[I],E=p[I];w!==E&&I!=="value"&&i(f,I,E,w,S,d.children,y,b,he)}"value"in m&&i(f,"value",p.value,m.value)}},be=(f,d,p,m,y,b,S,I,w)=>{const E=d.el=f?f.el:c(""),x=d.anchor=f?f.anchor:c("");let{patchFlag:P,dynamicChildren:M,slotScopeIds:F}=d;F&&(I=I?I.concat(F):F),f==null?(r(E,p,m),r(x,p,m),V(d.children,p,x,y,b,S,I,w)):P>0&&P&64&&M&&f.dynamicChildren?(re(f.dynamicChildren,M,p,y,b,S,I),(d.key!=null||y&&d===y.subTree)&&ua(f,d,!0)):J(f,d,p,x,y,b,S,I,w)},Te=(f,d,p,m,y,b,S,I,w)=>{d.slotScopeIds=I,f==null?d.shapeFlag&512?y.ctx.activate(d,p,m,S,w):yt(d,p,m,y,b,S,w):Re(f,d,w)},yt=(f,d,p,m,y,b,S)=>{const I=f.component=Tu(f,m,y);if(Zo(f)&&(I.ctx.renderer=T),Ru(I),I.asyncDep){if(y&&y.registerDep(I,q),!f.el){const w=I.subTree=Se(bn);O(null,w,d,p)}return}q(I,f,d,p,y,b,S)},Re=(f,d,p)=>{const m=d.component=f.component;if(Ml(f,d,p))if(m.asyncDep&&!m.asyncResolved){Z(m,d,p);return}else m.next=d,Sl(m.update),m.update();else d.el=f.el,m.vnode=d},q=(f,d,p,m,y,b,S)=>{const I=()=>{if(f.isMounted){let{next:x,bu:P,u:M,parent:F,vnode:W}=f,te=x,Q;Et(f,!1),x?(x.el=W.el,Z(f,x,S)):x=W,P&&Ar(P),(Q=x.props&&x.props.onVnodeBeforeUpdate)&&Le(Q,F,x,W),Et(f,!0);const ae=Pr(f),Ce=f.subTree;f.subTree=ae,A(Ce,ae,h(Ce.el),_(Ce),f,y,b),x.el=ae.el,te===null&&Ll(f,ae.el),M&&ve(M,y),(Q=x.props&&x.props.onVnodeUpdated)&&ve(()=>Le(Q,F,x,W),y)}else{let x;const{el:P,props:M}=d,{bm:F,m:W,parent:te}=f,Q=zn(d);if(Et(f,!1),F&&Ar(F),!Q&&(x=M&&M.onVnodeBeforeMount)&&Le(x,te,d),Et(f,!0),P&&Y){const ae=()=>{f.subTree=Pr(f),Y(P,f.subTree,f,y,null)};Q?d.type.__asyncLoader().then(()=>!f.isUnmounted&&ae()):ae()}else{const ae=f.subTree=Pr(f);A(null,ae,p,m,f,y,b),d.el=ae.el}if(W&&ve(W,y),!Q&&(x=M&&M.onVnodeMounted)){const ae=d;ve(()=>Le(x,te,ae),y)}(d.shapeFlag&256||te&&zn(te.vnode)&&te.vnode.shapeFlag&256)&&f.a&&ve(f.a,y),f.isMounted=!0,d=p=m=null}},w=f.effect=new ws(I,()=>Ns(E),f.scope),E=f.update=()=>w.run();E.id=f.uid,Et(f,!0),E()},Z=(f,d,p)=>{d.component=f;const m=f.vnode.props;f.vnode=d,f.next=null,cu(f,d.props,m,p),fu(f,d.children,p),Zt(),ci(),en()},J=(f,d,p,m,y,b,S,I,w=!1)=>{const E=f&&f.children,x=f?f.shapeFlag:0,P=d.children,{patchFlag:M,shapeFlag:F}=d;if(M>0){if(M&128){et(E,P,p,m,y,b,S,I,w);return}else if(M&256){Ve(E,P,p,m,y,b,S,I,w);return}}F&8?(x&16&&he(E,y,b),P!==E&&u(p,P)):x&16?F&16?et(E,P,p,m,y,b,S,I,w):he(E,y,b,!0):(x&8&&u(p,""),F&16&&V(P,p,m,y,b,S,I,w))},Ve=(f,d,p,m,y,b,S,I,w)=>{f=f||Ft,d=d||Ft;const E=f.length,x=d.length,P=Math.min(E,x);let M;for(M=0;M<P;M++){const F=d[M]=w?it(d[M]):Fe(d[M]);A(f[M],F,p,null,y,b,S,I,w)}E>x?he(f,y,b,!0,!1,P):V(d,p,m,y,b,S,I,w,P)},et=(f,d,p,m,y,b,S,I,w)=>{let E=0;const x=d.length;let P=f.length-1,M=x-1;for(;E<=P&&E<=M;){const F=f[E],W=d[E]=w?it(d[E]):Fe(d[E]);if(rn(F,W))A(F,W,p,null,y,b,S,I,w);else break;E++}for(;E<=P&&E<=M;){const F=f[P],W=d[M]=w?it(d[M]):Fe(d[M]);if(rn(F,W))A(F,W,p,null,y,b,S,I,w);else break;P--,M--}if(E>P){if(E<=M){const F=M+1,W=F<x?d[F].el:m;for(;E<=M;)A(null,d[E]=w?it(d[E]):Fe(d[E]),p,W,y,b,S,I,w),E++}}else if(E>M)for(;E<=P;)_e(f[E],y,b,!0),E++;else{const F=E,W=E,te=new Map;for(E=W;E<=M;E++){const Ee=d[E]=w?it(d[E]):Fe(d[E]);Ee.key!=null&&te.set(Ee.key,E)}let Q,ae=0;const Ce=M-W+1;let Dt=!1,Xs=0;const nn=new Array(Ce);for(E=0;E<Ce;E++)nn[E]=0;for(E=F;E<=P;E++){const Ee=f[E];if(ae>=Ce){_e(Ee,y,b,!0);continue}let Me;if(Ee.key!=null)Me=te.get(Ee.key);else for(Q=W;Q<=M;Q++)if(nn[Q-W]===0&&rn(Ee,d[Q])){Me=Q;break}Me===void 0?_e(Ee,y,b,!0):(nn[Me-W]=E+1,Me>=Xs?Xs=Me:Dt=!0,A(Ee,d[Me],p,null,y,b,S,I,w),ae++)}const Qs=Dt?pu(nn):Ft;for(Q=Qs.length-1,E=Ce-1;E>=0;E--){const Ee=W+E,Me=d[Ee],Zs=Ee+1<x?d[Ee+1].el:m;nn[E]===0?A(null,Me,p,Zs,y,b,S,I,w):Dt&&(Q<0||E!==Qs[Q]?xe(Me,p,Zs,2):Q--)}}},xe=(f,d,p,m,y=null)=>{const{el:b,type:S,transition:I,children:w,shapeFlag:E}=f;if(E&6){xe(f.component.subTree,d,p,m);return}if(E&128){f.suspense.move(d,p,m);return}if(E&64){S.move(f,d,p,T);return}if(S===Ue){r(b,d,p);for(let P=0;P<w.length;P++)xe(w[P],d,p,m);r(f.anchor,d,p);return}if(S===kr){H(f,d,p);return}if(m!==2&&E&1&&I)if(m===0)I.beforeEnter(b),r(b,d,p),ve(()=>I.enter(b),y);else{const{leave:P,delayLeave:M,afterLeave:F}=I,W=()=>r(b,d,p),te=()=>{P(b,()=>{W(),F&&F()})};M?M(b,W,te):te()}else r(b,d,p)},_e=(f,d,p,m=!1,y=!1)=>{const{type:b,props:S,ref:I,children:w,dynamicChildren:E,shapeFlag:x,patchFlag:P,dirs:M}=f;if(I!=null&&es(I,null,p,f,!0),x&256){d.ctx.deactivate(f);return}const F=x&1&&M,W=!zn(f);let te;if(W&&(te=S&&S.onVnodeBeforeUnmount)&&Le(te,d,f),x&6)Ln(f.component,p,m);else{if(x&128){f.suspense.unmount(p,m);return}F&&bt(f,null,d,"beforeUnmount"),x&64?f.type.remove(f,d,p,y,T,m):E&&(b!==Ue||P>0&&P&64)?he(E,d,p,!1,!0):(b===Ue&&P&384||!y&&x&16)&&he(w,d,p),m&&kt(f)}(W&&(te=S&&S.onVnodeUnmounted)||F)&&ve(()=>{te&&Le(te,d,f),F&&bt(f,null,d,"unmounted")},p)},kt=f=>{const{type:d,el:p,anchor:m,transition:y}=f;if(d===Ue){Nt(p,m);return}if(d===kr){D(f);return}const b=()=>{s(p),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:S,delayLeave:I}=y,w=()=>S(p,b);I?I(f.el,b,w):w()}else b()},Nt=(f,d)=>{let p;for(;f!==d;)p=g(f),s(f),f=p;s(d)},Ln=(f,d,p)=>{const{bum:m,scope:y,update:b,subTree:S,um:I}=f;m&&Ar(m),y.stop(),b&&(b.active=!1,_e(S,f,d,p)),I&&ve(I,d),ve(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},he=(f,d,p,m=!1,y=!1,b=0)=>{for(let S=b;S<f.length;S++)_e(f[S],d,p,m,y)},_=f=>f.shapeFlag&6?_(f.component.subTree):f.shapeFlag&128?f.suspense.next():g(f.anchor||f.el),C=(f,d,p)=>{f==null?d._vnode&&_e(d._vnode,null,null,!0):A(d._vnode||null,f,d,null,null,null,p),ci(),qo(),d._vnode=f},T={p:A,um:_e,m:xe,r:kt,mt:yt,mc:V,pc:J,pbc:re,n:_,o:t};let k,Y;return e&&([k,Y]=e(T)),{render:C,hydrate:k,createApp:iu(C,k)}}function Et({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ua(t,e,n=!1){const r=t.children,s=e.children;if(U(r)&&U(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=it(s[i]),c.el=o.el),n||ua(o,c)),c.type===br&&(c.el=o.el)}}function pu(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<l?i=c+1:o=c;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const gu=t=>t.__isTeleport,Ue=Symbol.for("v-fgt"),br=Symbol.for("v-txt"),bn=Symbol.for("v-cmt"),kr=Symbol.for("v-stc"),un=[];let Oe=null;function fa(t=!1){un.push(Oe=t?null:[])}function mu(){un.pop(),Oe=un[un.length-1]||null}let En=1;function vi(t){En+=t}function _u(t){return t.dynamicChildren=En>0?Oe||Ft:null,mu(),En>0&&Oe&&Oe.push(t),t}function da(t,e,n,r,s,i){return _u(ht(t,e,n,r,s,i,!0))}function ts(t){return t?t.__v_isVNode===!0:!1}function rn(t,e){return t.type===e.type&&t.key===e.key}const Er="__vInternal",ha=({key:t})=>t??null,qn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ue(t)||oe(t)||$(t)?{i:Pe,r:t,k:e,f:!!n}:t:null);function ht(t,e=null,n=null,r=0,s=null,i=t===Ue?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ha(e),ref:e&&qn(e),scopeId:vr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Pe};return c?(Ms(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=ue(n)?8:16),En>0&&!o&&Oe&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Oe.push(a),a}const Se=vu;function vu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Xl)&&(t=bn),ts(t)){const c=Kt(t,e,!0);return n&&Ms(c,n),En>0&&!i&&Oe&&(c.shapeFlag&6?Oe[Oe.indexOf(t)]=c:Oe.push(c)),c.patchFlag|=-2,c}if(Pu(t)&&(t=t.__vccOpts),e){e=yu(e);let{class:c,style:a}=e;c&&!ue(c)&&(e.class=Es(c)),se(a)&&($o(a)&&!U(a)&&(a=le({},a)),e.style=bs(a))}const o=ue(t)?1:Ul(t)?128:gu(t)?64:se(t)?4:$(t)?2:0;return ht(t,e,n,r,s,o,i,!0)}function yu(t){return t?$o(t)||Er in t?le({},t):t:null}function Kt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,c=e?Eu(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&ha(c),ref:e&&e.ref?n&&s?U(s)?s.concat(qn(e)):[s,qn(e)]:qn(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ue?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Kt(t.ssContent),ssFallback:t.ssFallback&&Kt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function bu(t=" ",e=0){return Se(br,null,t,e)}function Fe(t){return t==null||typeof t=="boolean"?Se(bn):U(t)?Se(Ue,null,t.slice()):typeof t=="object"?it(t):Se(br,null,String(t))}function it(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Kt(t)}function Ms(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ms(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Er in e)?e._ctx=Pe:s===3&&Pe&&(Pe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:Pe},n=32):(e=String(e),r&64?(n=16,e=[bu(e)]):n=8);t.children=e,t.shapeFlag|=n}function Eu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Es([e.class,r.class]));else if(s==="style")e.style=bs([e.style,r.style]);else if(fr(s)){const i=e[s],o=r[s];o&&i!==o&&!(U(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Le(t,e,n,r=null){Ne(t,e,7,[n,r])}const Iu=sa();let wu=0;function Tu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Iu,i={uid:wu++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new So(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:oa(r,s),emitsOptions:Jo(r,s),emit:null,emitted:null,propsDefaults:ne,inheritAttrs:r.inheritAttrs,ctx:ne,data:ne,props:ne,attrs:ne,slots:ne,refs:ne,setupState:ne,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Pl.bind(null,i),t.ce&&t.ce(i),i}let fe=null,Ls,xt,yi="__VUE_INSTANCE_SETTERS__";(xt=zr()[yi])||(xt=zr()[yi]=[]),xt.push(t=>fe=t),Ls=t=>{xt.length>1?xt.forEach(e=>e(t)):xt[0](t)};const qt=t=>{Ls(t),t.scope.on()},Ct=()=>{fe&&fe.scope.off(),Ls(null)};function pa(t){return t.vnode.shapeFlag&4}let In=!1;function Ru(t,e=!1){In=e;const{props:n,children:r}=t.vnode,s=pa(t);au(t,n,s,e),uu(t,r);const i=s?Su(t,e):void 0;return In=!1,i}function Su(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=gr(new Proxy(t.ctx,Ql));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Au(t):null;qt(t),Zt();const i=dt(r,t,0,[t.props,s]);if(en(),Ct(),bo(i)){if(i.then(Ct,Ct),e)return i.then(o=>{bi(t,o,e)}).catch(o=>{mr(o,t,0)});t.asyncDep=i}else bi(t,i,e)}else ga(t,e)}function bi(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:se(e)&&(t.setupState=Vo(e)),ga(t,n)}let Ei;function ga(t,e,n){const r=t.type;if(!t.render){if(!e&&Ei&&!r.render){const s=r.template||Ds(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,l=le(le({isCustomElement:i,delimiters:c},o),a);r.render=Ei(s,l)}}t.render=r.render||ke}qt(t),Zt(),Zl(t),en(),Ct()}function Cu(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ye(t,"get","$attrs"),e[n]}}))}function Au(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Cu(t)},slots:t.slots,emit:t.emit,expose:e}}function Us(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Vo(gr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ln)return ln[n](t)},has(e,n){return n in e||n in ln}}))}function Pu(t){return $(t)&&"__vccOpts"in t}const we=(t,e)=>wl(t,e,In);function ma(t,e,n){const r=arguments.length;return r===2?se(e)&&!U(e)?ts(e)?Se(t,null,[e]):Se(t,e):Se(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ts(n)&&(n=[n]),Se(t,e,n))}const Ou=Symbol.for("v-scx"),ku=()=>$e(Ou),Nu="3.3.4",Du="http://www.w3.org/2000/svg",Tt=typeof document<"u"?document:null,Ii=Tt&&Tt.createElement("template"),xu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Tt.createElementNS(Du,t):Tt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Tt.createTextNode(t),createComment:t=>Tt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Tt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ii.innerHTML=r?`<svg>${t}</svg>`:t;const c=Ii.content;if(r){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Mu(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Lu(t,e,n){const r=t.style,s=ue(n);if(n&&!s){if(e&&!ue(e))for(const i in e)n[i]==null&&ns(r,i,"");for(const i in n)ns(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const wi=/\s*!important$/;function ns(t,e,n){if(U(n))n.forEach(r=>ns(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Uu(t,e);wi.test(n)?t.setProperty(Qt(r),n.replace(wi,""),"important"):t[r]=n}}const Ti=["Webkit","Moz","ms"],Nr={};function Uu(t,e){const n=Nr[e];if(n)return n;let r=Vt(e);if(r!=="filter"&&r in t)return Nr[e]=r;r=wo(r);for(let s=0;s<Ti.length;s++){const i=Ti[s]+r;if(i in t)return Nr[e]=i}return e}const Ri="http://www.w3.org/1999/xlink";function Fu(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ri,e.slice(6,e.length)):t.setAttributeNS(Ri,e,n);else{const i=Fc(e);n==null||i&&!To(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Bu(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){t._value=n;const l=c==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=To(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function $u(t,e,n,r){t.addEventListener(e,n,r)}function Hu(t,e,n,r){t.removeEventListener(e,n,r)}function ju(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=Wu(e);if(r){const l=i[e]=Ku(r,s);$u(t,c,l,a)}else o&&(Hu(t,c,o,a),i[e]=void 0)}}const Si=/(?:Once|Passive|Capture)$/;function Wu(t){let e;if(Si.test(t)){e={};let r;for(;r=t.match(Si);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Qt(t.slice(2)),e]}let Dr=0;const Vu=Promise.resolve(),zu=()=>Dr||(Vu.then(()=>Dr=0),Dr=Date.now());function Ku(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ne(qu(r,n.value),e,5,[r])};return n.value=t,n.attached=zu(),n}function qu(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ci=/^on[a-z]/,Gu=(t,e,n,r,s=!1,i,o,c,a)=>{e==="class"?Mu(t,r,s):e==="style"?Lu(t,n,r):fr(e)?ms(e)||ju(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ju(t,e,r,s))?Bu(t,e,r,i,o,c,a):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Fu(t,e,r,s))};function Ju(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Ci.test(e)&&$(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ci.test(e)&&ue(n)?!1:e in t}const Yu=le({patchProp:Gu},xu);let Ai;function Xu(){return Ai||(Ai=du(Yu))}const Qu=(...t)=>{const e=Xu().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Zu(r);if(!s)return;const i=e._component;!$(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Zu(t){return ue(t)?document.querySelector(t):t}var ef=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let _a;const Ir=t=>_a=t,va=Symbol();function rs(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var fn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(fn||(fn={}));function tf(){const t=Co(!0),e=t.run(()=>Ps({}));let n=[],r=[];const s=gr({install(i){Ir(s),s._a=i,i.provide(va,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!ef?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const ya=()=>{};function Pi(t,e,n,r=ya){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Ao()&&Hc(s),s}function Mt(t,...e){t.slice().forEach(n=>{n(...e)})}const nf=t=>t();function ss(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];rs(s)&&rs(r)&&t.hasOwnProperty(n)&&!oe(r)&&!ft(r)?t[n]=ss(s,r):t[n]=r}return t}const rf=Symbol();function sf(t){return!rs(t)||!t.hasOwnProperty(rf)}const{assign:st}=Object;function of(t){return!!(oe(t)&&t.effect)}function af(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let a;function l(){c||(n.state.value[t]=s?s():{});const u=yl(n.state.value[t]);return st(u,i,Object.keys(o||{}).reduce((h,g)=>(h[g]=gr(we(()=>{Ir(n);const v=n._s.get(t);return o[g].call(v,v)})),h),{}))}return a=ba(t,l,e,n,r,!0),a}function ba(t,e,n={},r,s,i){let o;const c=st({actions:{}},n),a={deep:!0};let l,u,h=[],g=[],v;const R=r.state.value[t];!i&&!R&&(r.state.value[t]={}),Ps({});let A;function L(V){let j;l=u=!1,typeof V=="function"?(V(r.state.value[t]),j={type:fn.patchFunction,storeId:t,events:v}):(ss(r.state.value[t],V),j={type:fn.patchObject,payload:V,storeId:t,events:v});const re=A=Symbol();ks().then(()=>{A===re&&(l=!0)}),u=!0,Mt(h,j,r.state.value[t])}const O=i?function(){const{state:j}=n,re=j?j():{};this.$patch(de=>{st(de,re)})}:ya;function N(){o.stop(),h=[],g=[],r._s.delete(t)}function H(V,j){return function(){Ir(r);const re=Array.from(arguments),de=[],be=[];function Te(q){de.push(q)}function yt(q){be.push(q)}Mt(g,{args:re,name:V,store:G,after:Te,onError:yt});let Re;try{Re=j.apply(this&&this.$id===t?this:G,re)}catch(q){throw Mt(be,q),q}return Re instanceof Promise?Re.then(q=>(Mt(de,q),q)).catch(q=>(Mt(be,q),Promise.reject(q))):(Mt(de,Re),Re)}}const D={_p:r,$id:t,$onAction:Pi.bind(null,g),$patch:L,$reset:O,$subscribe(V,j={}){const re=Pi(h,V,j.detached,()=>de()),de=o.run(()=>cn(()=>r.state.value[t],be=>{(j.flush==="sync"?u:l)&&V({storeId:t,type:fn.direct,events:v},be)},st({},a,j)));return re},$dispose:N},G=tn(D);r._s.set(t,G);const ie=r._a&&r._a.runWithContext||nf,ce=r._e.run(()=>(o=Co(),ie(()=>o.run(e))));for(const V in ce){const j=ce[V];if(oe(j)&&!of(j)||ft(j))i||(R&&sf(j)&&(oe(j)?j.value=R[V]:ss(j,R[V])),r.state.value[t][V]=j);else if(typeof j=="function"){const re=H(V,j);ce[V]=re,c.actions[V]=j}}return st(G,ce),st(K(G),ce),Object.defineProperty(G,"$state",{get:()=>r.state.value[t],set:V=>{L(j=>{st(j,V)})}}),r._p.forEach(V=>{st(G,o.run(()=>V({store:G,app:r._a,pinia:r,options:c})))}),R&&i&&n.hydrate&&n.hydrate(G.$state,R),l=!0,u=!0,G}function cf(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(c,a){const l=ou();return c=c||(l?$e(va,null):null),c&&Ir(c),c=_a,c._s.has(r)||(i?ba(r,e,s,c):af(r,s,c)),c._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Lt=typeof window<"u";function lf(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const X=Object.assign;function xr(t,e){const n={};for(const r in e){const s=e[r];n[r]=De(s)?s.map(t):t(s)}return n}const dn=()=>{},De=Array.isArray,uf=/\/$/,ff=t=>t.replace(uf,"");function Mr(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=gf(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function df(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Oi(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function hf(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Gt(e.matched[r],n.matched[s])&&Ea(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Gt(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ea(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!pf(t[n],e[n]))return!1;return!0}function pf(t,e){return De(t)?ki(t,e):De(e)?ki(e,t):t===e}function ki(t,e){return De(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function gf(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var wn;(function(t){t.pop="pop",t.push="push"})(wn||(wn={}));var hn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(hn||(hn={}));function mf(t){if(!t)if(Lt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ff(t)}const _f=/^[^#]+#/;function vf(t,e){return t.replace(_f,"#")+e}function yf(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const wr=()=>({left:window.pageXOffset,top:window.pageYOffset});function bf(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=yf(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ni(t,e){return(history.state?history.state.position-e:-1)+t}const is=new Map;function Ef(t,e){is.set(t,e)}function If(t){const e=is.get(t);return is.delete(t),e}let wf=()=>location.protocol+"//"+location.host;function Ia(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),Oi(a,"")}return Oi(n,t)+r+s}function Tf(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const v=Ia(t,location),R=n.value,A=e.value;let L=0;if(g){if(n.value=v,e.value=g,o&&o===R){o=null;return}L=A?g.position-A.position:0}else r(v);s.forEach(O=>{O(n.value,R,{delta:L,type:wn.pop,direction:L?L>0?hn.forward:hn.back:hn.unknown})})};function a(){o=n.value}function l(g){s.push(g);const v=()=>{const R=s.indexOf(g);R>-1&&s.splice(R,1)};return i.push(v),v}function u(){const{history:g}=window;g.state&&g.replaceState(X({},g.state,{scroll:wr()}),"")}function h(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:l,destroy:h}}function Di(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?wr():null}}function Rf(t){const{history:e,location:n}=window,r={value:Ia(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,l,u){const h=t.indexOf("#"),g=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:wf()+t+a;try{e[u?"replaceState":"pushState"](l,"",g),s.value=l}catch(v){console.error(v),n[u?"replace":"assign"](g)}}function o(a,l){const u=X({},e.state,Di(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,u,!0),r.value=a}function c(a,l){const u=X({},s.value,e.state,{forward:a,scroll:wr()});i(u.current,u,!0);const h=X({},Di(r.value,a,null),{position:u.position+1},l);i(a,h,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function Sf(t){t=mf(t);const e=Rf(t),n=Tf(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=X({location:"",base:t,go:r,createHref:vf.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Cf(t){return typeof t=="string"||t&&typeof t=="object"}function wa(t){return typeof t=="string"||typeof t=="symbol"}const nt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ta=Symbol("");var xi;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(xi||(xi={}));function Jt(t,e){return X(new Error,{type:t,[Ta]:!0},e)}function ze(t,e){return t instanceof Error&&Ta in t&&(e==null||!!(t.type&e))}const Mi="[^/]+?",Af={sensitive:!1,strict:!1,start:!0,end:!0},Pf=/[.+*?^${}()[\]/\\]/g;function Of(t,e){const n=X({},Af,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const g=l[h];let v=40+(n.sensitive?.25:0);if(g.type===0)h||(s+="/"),s+=g.value.replace(Pf,"\\$&"),v+=40;else if(g.type===1){const{value:R,repeatable:A,optional:L,regexp:O}=g;i.push({name:R,repeatable:A,optional:L});const N=O||Mi;if(N!==Mi){v+=10;try{new RegExp(`(${N})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${R}" (${N}): `+D.message)}}let H=A?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;h||(H=L&&l.length<2?`(?:/${H})`:"/"+H),L&&(H+="?"),s+=H,v+=20,L&&(v+=-8),A&&(v+=-20),N===".*"&&(v+=-50)}u.push(v)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const u=l.match(o),h={};if(!u)return null;for(let g=1;g<u.length;g++){const v=u[g]||"",R=i[g-1];h[R.name]=v&&R.repeatable?v.split("/"):v}return h}function a(l){let u="",h=!1;for(const g of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const v of g)if(v.type===0)u+=v.value;else if(v.type===1){const{value:R,repeatable:A,optional:L}=v,O=R in l?l[R]:"";if(De(O)&&!A)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const N=De(O)?O.join("/"):O;if(!N)if(L)g.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${R}"`);u+=N}}return u||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function kf(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Nf(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=kf(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Li(r))return 1;if(Li(s))return-1}return s.length-r.length}function Li(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Df={type:0,value:""},xf=/[a-zA-Z0-9_]/;function Mf(t){if(!t)return[[]];if(t==="/")return[[Df]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${l}": ${v}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),l="")}function g(){l+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&h(),o()):a===":"?(h(),n=1):g();break;case 4:g(),n=r;break;case 1:a==="("?n=2:xf.test(a)?g():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Lf(t,e,n){const r=Of(Mf(t.path),n),s=X(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Uf(t,e){const n=[],r=new Map;e=Bi({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,g){const v=!g,R=Ff(u);R.aliasOf=g&&g.record;const A=Bi(e,u),L=[R];if("alias"in u){const H=typeof u.alias=="string"?[u.alias]:u.alias;for(const D of H)L.push(X({},R,{components:g?g.record.components:R.components,path:D,aliasOf:g?g.record:R}))}let O,N;for(const H of L){const{path:D}=H;if(h&&D[0]!=="/"){const G=h.record.path,ie=G[G.length-1]==="/"?"":"/";H.path=h.record.path+(D&&ie+D)}if(O=Lf(H,h,A),g?g.alias.push(O):(N=N||O,N!==O&&N.alias.push(O),v&&u.name&&!Fi(O)&&o(u.name)),R.children){const G=R.children;for(let ie=0;ie<G.length;ie++)i(G[ie],O,g&&g.children[ie])}g=g||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&a(O)}return N?()=>{o(N)}:dn}function o(u){if(wa(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function c(){return n}function a(u){let h=0;for(;h<n.length&&Nf(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Ra(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Fi(u)&&r.set(u.record.name,u)}function l(u,h){let g,v={},R,A;if("name"in u&&u.name){if(g=r.get(u.name),!g)throw Jt(1,{location:u});A=g.record.name,v=X(Ui(h.params,g.keys.filter(N=>!N.optional).map(N=>N.name)),u.params&&Ui(u.params,g.keys.map(N=>N.name))),R=g.stringify(v)}else if("path"in u)R=u.path,g=n.find(N=>N.re.test(R)),g&&(v=g.parse(R),A=g.record.name);else{if(g=h.name?r.get(h.name):n.find(N=>N.re.test(h.path)),!g)throw Jt(1,{location:u,currentLocation:h});A=g.record.name,v=X({},h.params,u.params),R=g.stringify(v)}const L=[];let O=g;for(;O;)L.unshift(O.record),O=O.parent;return{name:A,path:R,params:v,matched:L,meta:$f(L)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function Ui(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Ff(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Bf(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Bf(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Fi(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function $f(t){return t.reduce((e,n)=>X(e,n.meta),{})}function Bi(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Ra(t,e){return e.children.some(n=>n===t||Ra(t,n))}const Sa=/#/g,Hf=/&/g,jf=/\//g,Wf=/=/g,Vf=/\?/g,Ca=/\+/g,zf=/%5B/g,Kf=/%5D/g,Aa=/%5E/g,qf=/%60/g,Pa=/%7B/g,Gf=/%7C/g,Oa=/%7D/g,Jf=/%20/g;function Fs(t){return encodeURI(""+t).replace(Gf,"|").replace(zf,"[").replace(Kf,"]")}function Yf(t){return Fs(t).replace(Pa,"{").replace(Oa,"}").replace(Aa,"^")}function os(t){return Fs(t).replace(Ca,"%2B").replace(Jf,"+").replace(Sa,"%23").replace(Hf,"%26").replace(qf,"`").replace(Pa,"{").replace(Oa,"}").replace(Aa,"^")}function Xf(t){return os(t).replace(Wf,"%3D")}function Qf(t){return Fs(t).replace(Sa,"%23").replace(Vf,"%3F")}function Zf(t){return t==null?"":Qf(t).replace(jf,"%2F")}function rr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function ed(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Ca," "),o=i.indexOf("="),c=rr(o<0?i:i.slice(0,o)),a=o<0?null:rr(i.slice(o+1));if(c in e){let l=e[c];De(l)||(l=e[c]=[l]),l.push(a)}else e[c]=a}return e}function $i(t){let e="";for(let n in t){const r=t[n];if(n=Xf(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(De(r)?r.map(i=>i&&os(i)):[r&&os(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function td(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=De(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const nd=Symbol(""),Hi=Symbol(""),Bs=Symbol(""),ka=Symbol(""),as=Symbol("");function sn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function ot(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,c)=>{const a=h=>{h===!1?c(Jt(4,{from:n,to:e})):h instanceof Error?c(h):Cf(h)?c(Jt(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,a);let u=Promise.resolve(l);t.length<3&&(u=u.then(a)),u.catch(h=>c(h))})}function Lr(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let c=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(rd(c)){const l=(c.__vccOpts||c)[e];l&&s.push(ot(l,n,r,i,o))}else{let a=c();s.push(()=>a.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=lf(l)?l.default:l;i.components[o]=u;const g=(u.__vccOpts||u)[e];return g&&ot(g,n,r,i,o)()}))}}return s}function rd(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ji(t){const e=$e(Bs),n=$e(ka),r=we(()=>e.resolve(Ye(t.to))),s=we(()=>{const{matched:a}=r.value,{length:l}=a,u=a[l-1],h=n.matched;if(!u||!h.length)return-1;const g=h.findIndex(Gt.bind(null,u));if(g>-1)return g;const v=Wi(a[l-2]);return l>1&&Wi(u)===v&&h[h.length-1].path!==v?h.findIndex(Gt.bind(null,a[l-2])):g}),i=we(()=>s.value>-1&&ad(n.params,r.value.params)),o=we(()=>s.value>-1&&s.value===n.matched.length-1&&Ea(n.params,r.value.params));function c(a={}){return od(a)?e[Ye(t.replace)?"replace":"push"](Ye(t.to)).catch(dn):Promise.resolve()}return{route:r,href:we(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const sd=Qo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ji,setup(t,{slots:e}){const n=tn(ji(t)),{options:r}=$e(Bs),s=we(()=>({[Vi(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Vi(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ma("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),id=sd;function od(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ad(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!De(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Wi(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Vi=(t,e,n)=>t??e??n,cd=Qo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=$e(as),s=we(()=>t.route||r.value),i=$e(Hi,0),o=we(()=>{let l=Ye(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),c=we(()=>s.value.matched[o.value]);Kn(Hi,we(()=>o.value+1)),Kn(nd,c),Kn(as,s);const a=Ps();return cn(()=>[a.value,c.value,t.name],([l,u,h],[g,v,R])=>{u&&(u.instances[h]=l,v&&v!==u&&l&&l===g&&(u.leaveGuards.size||(u.leaveGuards=v.leaveGuards),u.updateGuards.size||(u.updateGuards=v.updateGuards))),l&&u&&(!v||!Gt(u,v)||!g)&&(u.enterCallbacks[h]||[]).forEach(A=>A(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=c.value,g=h&&h.components[u];if(!g)return zi(n.default,{Component:g,route:l});const v=h.props[u],R=v?v===!0?l.params:typeof v=="function"?v(l):v:null,L=ma(g,X({},R,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return zi(n.default,{Component:L,route:l})||L}}});function zi(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Na=cd;function ld(t){const e=Uf(t.routes,t),n=t.parseQuery||ed,r=t.stringifyQuery||$i,s=t.history,i=sn(),o=sn(),c=sn(),a=ml(nt);let l=nt;Lt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=xr.bind(null,_=>""+_),h=xr.bind(null,Zf),g=xr.bind(null,rr);function v(_,C){let T,k;return wa(_)?(T=e.getRecordMatcher(_),k=C):k=_,e.addRoute(k,T)}function R(_){const C=e.getRecordMatcher(_);C&&e.removeRoute(C)}function A(){return e.getRoutes().map(_=>_.record)}function L(_){return!!e.getRecordMatcher(_)}function O(_,C){if(C=X({},C||a.value),typeof _=="string"){const p=Mr(n,_,C.path),m=e.resolve({path:p.path},C),y=s.createHref(p.fullPath);return X(p,m,{params:g(m.params),hash:rr(p.hash),redirectedFrom:void 0,href:y})}let T;if("path"in _)T=X({},_,{path:Mr(n,_.path,C.path).path});else{const p=X({},_.params);for(const m in p)p[m]==null&&delete p[m];T=X({},_,{params:h(p)}),C.params=h(C.params)}const k=e.resolve(T,C),Y=_.hash||"";k.params=u(g(k.params));const f=df(r,X({},_,{hash:Yf(Y),path:k.path})),d=s.createHref(f);return X({fullPath:f,hash:Y,query:r===$i?td(_.query):_.query||{}},k,{redirectedFrom:void 0,href:d})}function N(_){return typeof _=="string"?Mr(n,_,a.value.path):X({},_)}function H(_,C){if(l!==_)return Jt(8,{from:C,to:_})}function D(_){return ce(_)}function G(_){return D(X(N(_),{replace:!0}))}function ie(_){const C=_.matched[_.matched.length-1];if(C&&C.redirect){const{redirect:T}=C;let k=typeof T=="function"?T(_):T;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=N(k):{path:k},k.params={}),X({query:_.query,hash:_.hash,params:"path"in k?{}:_.params},k)}}function ce(_,C){const T=l=O(_),k=a.value,Y=_.state,f=_.force,d=_.replace===!0,p=ie(T);if(p)return ce(X(N(p),{state:typeof p=="object"?X({},Y,p.state):Y,force:f,replace:d}),C||T);const m=T;m.redirectedFrom=C;let y;return!f&&hf(r,k,T)&&(y=Jt(16,{to:m,from:k}),xe(k,k,!0,!1)),(y?Promise.resolve(y):re(m,k)).catch(b=>ze(b)?ze(b,2)?b:et(b):J(b,m,k)).then(b=>{if(b){if(ze(b,2))return ce(X({replace:d},N(b.to),{state:typeof b.to=="object"?X({},Y,b.to.state):Y,force:f}),C||m)}else b=be(m,k,!0,d,Y);return de(m,k,b),b})}function V(_,C){const T=H(_,C);return T?Promise.reject(T):Promise.resolve()}function j(_){const C=Nt.values().next().value;return C&&typeof C.runWithContext=="function"?C.runWithContext(_):_()}function re(_,C){let T;const[k,Y,f]=ud(_,C);T=Lr(k.reverse(),"beforeRouteLeave",_,C);for(const p of k)p.leaveGuards.forEach(m=>{T.push(ot(m,_,C))});const d=V.bind(null,_,C);return T.push(d),he(T).then(()=>{T=[];for(const p of i.list())T.push(ot(p,_,C));return T.push(d),he(T)}).then(()=>{T=Lr(Y,"beforeRouteUpdate",_,C);for(const p of Y)p.updateGuards.forEach(m=>{T.push(ot(m,_,C))});return T.push(d),he(T)}).then(()=>{T=[];for(const p of _.matched)if(p.beforeEnter&&!C.matched.includes(p))if(De(p.beforeEnter))for(const m of p.beforeEnter)T.push(ot(m,_,C));else T.push(ot(p.beforeEnter,_,C));return T.push(d),he(T)}).then(()=>(_.matched.forEach(p=>p.enterCallbacks={}),T=Lr(f,"beforeRouteEnter",_,C),T.push(d),he(T))).then(()=>{T=[];for(const p of o.list())T.push(ot(p,_,C));return T.push(d),he(T)}).catch(p=>ze(p,8)?p:Promise.reject(p))}function de(_,C,T){for(const k of c.list())j(()=>k(_,C,T))}function be(_,C,T,k,Y){const f=H(_,C);if(f)return f;const d=C===nt,p=Lt?history.state:{};T&&(k||d?s.replace(_.fullPath,X({scroll:d&&p&&p.scroll},Y)):s.push(_.fullPath,Y)),a.value=_,xe(_,C,T,d),et()}let Te;function yt(){Te||(Te=s.listen((_,C,T)=>{if(!Ln.listening)return;const k=O(_),Y=ie(k);if(Y){ce(X(Y,{replace:!0}),k).catch(dn);return}l=k;const f=a.value;Lt&&Ef(Ni(f.fullPath,T.delta),wr()),re(k,f).catch(d=>ze(d,12)?d:ze(d,2)?(ce(d.to,k).then(p=>{ze(p,20)&&!T.delta&&T.type===wn.pop&&s.go(-1,!1)}).catch(dn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),J(d,k,f))).then(d=>{d=d||be(k,f,!1),d&&(T.delta&&!ze(d,8)?s.go(-T.delta,!1):T.type===wn.pop&&ze(d,20)&&s.go(-1,!1)),de(k,f,d)}).catch(dn)}))}let Re=sn(),q=sn(),Z;function J(_,C,T){et(_);const k=q.list();return k.length?k.forEach(Y=>Y(_,C,T)):console.error(_),Promise.reject(_)}function Ve(){return Z&&a.value!==nt?Promise.resolve():new Promise((_,C)=>{Re.add([_,C])})}function et(_){return Z||(Z=!_,yt(),Re.list().forEach(([C,T])=>_?T(_):C()),Re.reset()),_}function xe(_,C,T,k){const{scrollBehavior:Y}=t;if(!Lt||!Y)return Promise.resolve();const f=!T&&If(Ni(_.fullPath,0))||(k||!T)&&history.state&&history.state.scroll||null;return ks().then(()=>Y(_,C,f)).then(d=>d&&bf(d)).catch(d=>J(d,_,C))}const _e=_=>s.go(_);let kt;const Nt=new Set,Ln={currentRoute:a,listening:!0,addRoute:v,removeRoute:R,hasRoute:L,getRoutes:A,resolve:O,options:t,push:D,replace:G,go:_e,back:()=>_e(-1),forward:()=>_e(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:q.add,isReady:Ve,install(_){const C=this;_.component("RouterLink",id),_.component("RouterView",Na),_.config.globalProperties.$router=C,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Ye(a)}),Lt&&!kt&&a.value===nt&&(kt=!0,D(s.location).catch(Y=>{}));const T={};for(const Y in nt)T[Y]=we(()=>a.value[Y]);_.provide(Bs,C),_.provide(ka,tn(T)),_.provide(as,a);const k=_.unmount;Nt.add(_),_.unmount=function(){Nt.delete(_),Nt.size<1&&(l=nt,Te&&Te(),Te=null,a.value=nt,kt=!1,Z=!1),k()}}};function he(_){return _.reduce((C,T)=>C.then(()=>j(T)),Promise.resolve())}return Ln}function ud(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(l=>Gt(l,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(l=>Gt(l,a))||s.push(a))}return[n,r,s]}const fd=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},dd=t=>(Ol("data-v-a464b5c8"),t=t(),kl(),t),hd=dd(()=>ht("header",null,[ht("div",null,"Easy Reach"),ht("div")],-1)),pd={__name:"App",setup(t){return(e,n)=>(fa(),da(Ue,null,[hd,Se(Ye(Na))],64))}},gd=fd(pd,[["__scopeId","data-v-a464b5c8"]]),md="modulepreload",_d=function(t){return"/easy-reach/"+t},Ki={},vd=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=_d(i),i in Ki)return;Ki[i]=!0;const o=i.endsWith(".css"),c=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":md,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Da=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},yd=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},xa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,l=a?t[s+2]:0,u=i>>2,h=(i&3)<<4|c>>4;let g=(c&15)<<2|l>>6,v=l&63;a||(v=64,o||(g=64)),r.push(n[u],n[h],n[g],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Da(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||l==null||h==null)throw new bd;const g=i<<2|c>>4;if(r.push(g),l!==64){const v=c<<4&240|l>>2;if(r.push(v),h!==64){const R=l<<6&192|h;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ed=function(t){const e=Da(t);return xa.encodeByteArray(e,!0)},Ma=function(t){return Ed(t).replace(/\./g,"")},La=function(t){try{return xa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Id(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wd=()=>Id().__FIREBASE_DEFAULTS__,Td=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Rd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&La(t[1]);return e&&JSON.parse(e)},$s=()=>{try{return wd()||Td()||Rd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Sd=t=>{var e,n;return(n=(e=$s())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ua=()=>{var t;return(t=$s())===null||t===void 0?void 0:t.config},Fa=t=>{var e;return(e=$s())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ad(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function Pd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Od(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kd(){const t=ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Nd(){try{return typeof indexedDB=="object"}catch{return!1}}function Dd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd="FirebaseError";class _t extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=xd,Object.setPrototypeOf(this,_t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,An.prototype.create)}}class An{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Md(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new _t(s,c,r)}}function Md(t,e){return t.replace(Ld,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Ld=/\{\$([^}]+)}/g;function Ud(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function sr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(qi(i)&&qi(o)){if(!sr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function qi(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fd(t,e){const n=new Bd(t,e);return n.subscribe.bind(n)}class Bd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$d(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ur),s.error===void 0&&(s.error=Ur),s.complete===void 0&&(s.complete=Ur);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $d(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ur(){}/**
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
 */function vt(t){return t&&t._delegate?t._delegate:t}class Yt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const It="[DEFAULT]";/**
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
 */class Hd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Cd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Wd(e))try{this.getOrInitializeService({instanceIdentifier:It})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=It){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=It){return this.instances.has(e)}getOptions(e=It){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=It){return this.component?this.component.multipleInstances?e:It:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jd(t){return t===It?void 0:t}function Wd(t){return t.instantiationMode==="EAGER"}/**
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
 */class Vd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Hd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const zd={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Kd=ee.INFO,qd={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Gd=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=qd[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ba{constructor(e){this.name=e,this._logLevel=Kd,this._logHandler=Gd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Jd=(t,e)=>e.some(n=>t instanceof n);let Gi,Ji;function Yd(){return Gi||(Gi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xd(){return Ji||(Ji=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $a=new WeakMap,cs=new WeakMap,Ha=new WeakMap,Fr=new WeakMap,Hs=new WeakMap;function Qd(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(pt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&$a.set(n,t)}).catch(()=>{}),Hs.set(e,t),e}function Zd(t){if(cs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});cs.set(t,e)}let ls={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ha.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function eh(t){ls=t(ls)}function th(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Br(this),e,...n);return Ha.set(r,e.sort?e.sort():[e]),pt(r)}:Xd().includes(t)?function(...e){return t.apply(Br(this),e),pt($a.get(this))}:function(...e){return pt(t.apply(Br(this),e))}}function nh(t){return typeof t=="function"?th(t):(t instanceof IDBTransaction&&Zd(t),Jd(t,Yd())?new Proxy(t,ls):t)}function pt(t){if(t instanceof IDBRequest)return Qd(t);if(Fr.has(t))return Fr.get(t);const e=nh(t);return e!==t&&(Fr.set(t,e),Hs.set(e,t)),e}const Br=t=>Hs.get(t);function rh(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=pt(o);return r&&o.addEventListener("upgradeneeded",a=>{r(pt(o.result),a.oldVersion,a.newVersion,pt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const sh=["get","getKey","getAll","getAllKeys","count"],ih=["put","add","delete","clear"],$r=new Map;function Yi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($r.get(e))return $r.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=ih.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||sh.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return $r.set(e,i),i}eh(t=>({...t,get:(e,n,r)=>Yi(e,n)||t.get(e,n,r),has:(e,n)=>!!Yi(e,n)||t.has(e,n)}));/**
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
 */class oh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ah(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ah(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const us="@firebase/app",Xi="0.9.13";/**
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
 */const Pt=new Ba("@firebase/app"),ch="@firebase/app-compat",lh="@firebase/analytics-compat",uh="@firebase/analytics",fh="@firebase/app-check-compat",dh="@firebase/app-check",hh="@firebase/auth",ph="@firebase/auth-compat",gh="@firebase/database",mh="@firebase/database-compat",_h="@firebase/functions",vh="@firebase/functions-compat",yh="@firebase/installations",bh="@firebase/installations-compat",Eh="@firebase/messaging",Ih="@firebase/messaging-compat",wh="@firebase/performance",Th="@firebase/performance-compat",Rh="@firebase/remote-config",Sh="@firebase/remote-config-compat",Ch="@firebase/storage",Ah="@firebase/storage-compat",Ph="@firebase/firestore",Oh="@firebase/firestore-compat",kh="firebase",Nh="9.23.0";/**
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
 */const fs="[DEFAULT]",Dh={[us]:"fire-core",[ch]:"fire-core-compat",[uh]:"fire-analytics",[lh]:"fire-analytics-compat",[dh]:"fire-app-check",[fh]:"fire-app-check-compat",[hh]:"fire-auth",[ph]:"fire-auth-compat",[gh]:"fire-rtdb",[mh]:"fire-rtdb-compat",[_h]:"fire-fn",[vh]:"fire-fn-compat",[yh]:"fire-iid",[bh]:"fire-iid-compat",[Eh]:"fire-fcm",[Ih]:"fire-fcm-compat",[wh]:"fire-perf",[Th]:"fire-perf-compat",[Rh]:"fire-rc",[Sh]:"fire-rc-compat",[Ch]:"fire-gcs",[Ah]:"fire-gcs-compat",[Ph]:"fire-fst",[Oh]:"fire-fst-compat","fire-js":"fire-js",[kh]:"fire-js-all"};/**
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
 */const ir=new Map,ds=new Map;function xh(t,e){try{t.container.addComponent(e)}catch(n){Pt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Tn(t){const e=t.name;if(ds.has(e))return Pt.debug(`There were multiple attempts to register component ${e}.`),!1;ds.set(e,t);for(const n of ir.values())xh(n,t);return!0}function ja(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Mh={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gt=new An("app","Firebase",Mh);/**
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
 */class Lh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}}/**
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
 */const On=Nh;function Wa(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:fs,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw gt.create("bad-app-name",{appName:String(s)});if(n||(n=Ua()),!n)throw gt.create("no-options");const i=ir.get(s);if(i){if(sr(n,i.options)&&sr(r,i.config))return i;throw gt.create("duplicate-app",{appName:s})}const o=new Vd(s);for(const a of ds.values())o.addComponent(a);const c=new Lh(n,r,o);return ir.set(s,c),c}function Uh(t=fs){const e=ir.get(t);if(!e&&t===fs&&Ua())return Wa();if(!e)throw gt.create("no-app",{appName:t});return e}function Ht(t,e,n){var r;let s=(r=Dh[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pt.warn(c.join(" "));return}Tn(new Yt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Fh="firebase-heartbeat-database",Bh=1,Rn="firebase-heartbeat-store";let Hr=null;function Va(){return Hr||(Hr=rh(Fh,Bh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Rn)}}}).catch(t=>{throw gt.create("idb-open",{originalErrorMessage:t.message})})),Hr}async function $h(t){try{return await(await Va()).transaction(Rn).objectStore(Rn).get(za(t))}catch(e){if(e instanceof _t)Pt.warn(e.message);else{const n=gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pt.warn(n.message)}}}async function Qi(t,e){try{const r=(await Va()).transaction(Rn,"readwrite");await r.objectStore(Rn).put(e,za(t)),await r.done}catch(n){if(n instanceof _t)Pt.warn(n.message);else{const r=gt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pt.warn(r.message)}}}function za(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Hh=1024,jh=30*24*60*60*1e3;class Wh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Zi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=jh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Zi(),{heartbeatsToSend:n,unsentEntries:r}=Vh(this._heartbeatsCache.heartbeats),s=Ma(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Zi(){return new Date().toISOString().substring(0,10)}function Vh(t,e=Hh){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),eo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),eo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nd()?Dd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await $h(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function eo(t){return Ma(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Kh(t){Tn(new Yt("platform-logger",e=>new oh(e),"PRIVATE")),Tn(new Yt("heartbeat",e=>new Wh(e),"PRIVATE")),Ht(us,Xi,t),Ht(us,Xi,"esm2017"),Ht("fire-js","")}Kh("");function js(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Ka(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qh=Ka,qa=new An("auth","Firebase",Ka());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=new Ba("@firebase/auth");function Gh(t,...e){or.logLevel<=ee.WARN&&or.warn(`Auth (${On}): ${t}`,...e)}function Gn(t,...e){or.logLevel<=ee.ERROR&&or.error(`Auth (${On}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t,...e){throw Ws(t,...e)}function He(t,...e){return Ws(t,...e)}function Ga(t,e,n){const r=Object.assign(Object.assign({},qh()),{[e]:n});return new An("auth","Firebase",r).create(e,{appName:t.name})}function Jh(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&We(t,"argument-error"),Ga(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ws(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return qa.create(t,...e)}function B(t,e,...n){if(!t)throw Ws(e,...n)}function Ge(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Gn(e),new Error(e)}function Qe(t,e){t||Ge(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Yh(){return to()==="http:"||to()==="https:"}function to(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Yh()||Pd()||"connection"in navigator)?navigator.onLine:!0}function Qh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qe(n>e,"Short delay should be less than long delay!"),this.isMobile=Ad()||Od()}get(){return Xh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(t,e){Qe(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ge("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ge("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ge("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=new kn(3e4,6e4);function Ya(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Nn(t,e,n,r,s={}){return Xa(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Pn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Ja.fetch()(Qa(t,t.config.apiHost,n,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function Xa(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Zh),e);try{const s=new np(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Wn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wn(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Wn(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Wn(t,"user-disabled",o);const u=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ga(t,u,l);We(t,u)}}catch(s){if(s instanceof _t)throw s;We(t,"network-request-failed",{message:String(s)})}}async function tp(t,e,n,r,s={}){const i=await Nn(t,e,n,r,s);return"mfaPendingCredential"in i&&We(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Qa(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Vs(t.config,s):`${t.config.apiScheme}://${s}`}class np{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(He(this.auth,"network-request-failed")),ep.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=He(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rp(t,e){return Nn(t,"POST","/v1/accounts:delete",e)}async function sp(t,e){return Nn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ip(t,e=!1){const n=vt(t),r=await n.getIdToken(e),s=zs(r);B(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:pn(jr(s.auth_time)),issuedAtTime:pn(jr(s.iat)),expirationTime:pn(jr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function jr(t){return Number(t)*1e3}function zs(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Gn("JWT malformed, contained fewer than 3 sections"),null;try{const s=La(n);return s?JSON.parse(s):(Gn("Failed to decode base64 JWT payload"),null)}catch(s){return Gn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function op(t){const e=zs(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof _t&&ap(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ap({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pn(this.lastLoginAt),this.creationTime=pn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ar(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Sn(t,sp(n,{idToken:r}));B(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?fp(i.providerUserInfo):[],c=up(t.providerData,o),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),u=a?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Za(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function lp(t){const e=vt(t);await ar(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function up(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function fp(t){return t.map(e=>{var{providerId:n}=e,r=js(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dp(t,e){const n=await Xa(t,{},async()=>{const r=Pn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Qa(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Ja.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):op(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await dp(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Cn;return r&&(B(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(B(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(B(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cn,this.toJSON())}_performRefresh(){return Ge("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class At{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=js(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Za(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Sn(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ip(this,e)}reload(){return lp(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new At(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ar(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Sn(this,rp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(c=n.tenantId)!==null&&c!==void 0?c:void 0,L=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,O=(l=n.createdAt)!==null&&l!==void 0?l:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:H,emailVerified:D,isAnonymous:G,providerData:ie,stsTokenManager:ce}=n;B(H&&ce,e,"internal-error");const V=Cn.fromJSON(this.name,ce);B(typeof H=="string",e,"internal-error"),rt(h,e.name),rt(g,e.name),B(typeof D=="boolean",e,"internal-error"),B(typeof G=="boolean",e,"internal-error"),rt(v,e.name),rt(R,e.name),rt(A,e.name),rt(L,e.name),rt(O,e.name),rt(N,e.name);const j=new At({uid:H,auth:e,email:g,emailVerified:D,displayName:h,isAnonymous:G,photoURL:R,phoneNumber:v,tenantId:A,stsTokenManager:V,createdAt:O,lastLoginAt:N});return ie&&Array.isArray(ie)&&(j.providerData=ie.map(re=>Object.assign({},re))),L&&(j._redirectEventId=L),j}static async _fromIdTokenResponse(e,n,r=!1){const s=new Cn;s.updateFromServerResponse(n);const i=new At({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ar(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=new Map;function Je(t){Qe(t instanceof Function,"Expected a class definition");let e=no.get(t);return e?(Qe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,no.set(t,e),e)}/**
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
 */class ec{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ec.type="NONE";const ro=ec;/**
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
 */function Jn(t,e,n){return`firebase:${t}:${e}:${n}`}class jt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Jn(this.userKey,s.apiKey,i),this.fullPersistenceKey=Jn("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?At._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new jt(Je(ro),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Je(ro);const o=Jn(r,e.config.apiKey,e.name);let c=null;for(const l of n)try{const u=await l._get(o);if(u){const h=At._fromJSON(e,u);l!==i&&(c=h),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new jt(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new jt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ic(e))return"Blackberry";if(oc(e))return"Webos";if(Ks(e))return"Safari";if((e.includes("chrome/")||nc(e))&&!e.includes("edge/"))return"Chrome";if(sc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tc(t=ge()){return/firefox\//i.test(t)}function Ks(t=ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nc(t=ge()){return/crios\//i.test(t)}function rc(t=ge()){return/iemobile/i.test(t)}function sc(t=ge()){return/android/i.test(t)}function ic(t=ge()){return/blackberry/i.test(t)}function oc(t=ge()){return/webos/i.test(t)}function Tr(t=ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hp(t=ge()){var e;return Tr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pp(){return kd()&&document.documentMode===10}function ac(t=ge()){return Tr(t)||sc(t)||oc(t)||ic(t)||/windows phone/i.test(t)||rc(t)}function gp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(t,e=[]){let n;switch(t){case"Browser":n=so(ge());break;case"Worker":n=`${so(ge())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${On}/${r}`}async function lc(t,e){return Nn(t,"GET","/v2/recaptchaConfig",Ya(t,e))}function io(t){return t!==void 0&&t.enterprise!==void 0}class uc{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function fc(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=He("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",mp().appendChild(r)})}function _p(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const vp="https://www.google.com/recaptcha/enterprise.js?render=",yp="recaptcha-enterprise",bp="NO_RECAPTCHA";class Ep{constructor(e){this.type=yp,this.auth=Dn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{lc(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new uc(a);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(a=>{c(a)})})}function s(i,o,c){const a=window.grecaptcha;io(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(bp)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&io(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}fc(vp+c).then(()=>{s(c,i,o)}).catch(a=>{o(a)})}}).catch(c=>{o(c)})})}}/**
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
 */class Ip{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oo(this),this.idTokenSubscription=new oo(this),this.beforeStateQueue=new Ip(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qa,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Je(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await jt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ar(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Qh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?vt(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Je(e))})}async initializeRecaptchaConfig(){const e=await lc(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new uc(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Ep(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new An("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Je(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await jt.create(this,[Je(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return B(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Gh(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Dn(t){return vt(t)}class oo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fd(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(t,e){const n=ja(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(sr(i,e??{}))return s;We(s,"already-initialized")}return n.initialize({options:e})}function Rp(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Je);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Sp(t,e,n){const r=Dn(t);B(r._canInitEmulator,r,"emulator-config-failed"),B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=dc(e),{host:o,port:c}=Cp(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Ap()}function dc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Cp(t){const e=dc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ao(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ao(o)}}}function ao(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ap(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ge("not implemented")}_getIdTokenResponse(e){return Ge("not implemented")}_linkToIdToken(e,n){return Ge("not implemented")}_getReauthenticationResolver(e){return Ge("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wt(t,e){return tp(t,"POST","/v1/accounts:signInWithIdp",Ya(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp="http://localhost";class Ot extends hc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ot(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):We("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=js(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ot(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Wt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Wt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wt(e,n)}buildRequest(){const e={requestUri:Pp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Pn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class xn extends qs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends xn{constructor(){super("facebook.com")}static credential(e){return Ot._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return at.credential(e.oauthAccessToken)}catch{return null}}}at.FACEBOOK_SIGN_IN_METHOD="facebook.com";at.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends xn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ot._fromParams({providerId:qe.PROVIDER_ID,signInMethod:qe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qe.credentialFromTaggedObject(e)}static credentialFromError(e){return qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return qe.credential(n,r)}catch{return null}}}qe.GOOGLE_SIGN_IN_METHOD="google.com";qe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends xn{constructor(){super("github.com")}static credential(e){return Ot._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ct.credential(e.oauthAccessToken)}catch{return null}}}ct.GITHUB_SIGN_IN_METHOD="github.com";ct.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends xn{constructor(){super("twitter.com")}static credential(e,n){return Ot._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return lt.credential(n,r)}catch{return null}}}lt.TWITTER_SIGN_IN_METHOD="twitter.com";lt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await At._fromIdTokenResponse(e,r,s),o=co(r);return new Xt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=co(r);return new Xt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function co(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends _t{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,cr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new cr(e,n,r,s)}}function pc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?cr._fromErrorAndOperation(t,i,e,r):i})}async function Op(t,e,n=!1){const r=await Sn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xt._forOperation(t,"link",r)}/**
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
 */async function kp(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Sn(t,pc(r,s,e,t),n);B(i.idToken,r,"internal-error");const o=zs(i.idToken);B(o,r,"internal-error");const{sub:c}=o;return B(t.uid===c,r,"user-mismatch"),Xt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&We(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Np(t,e,n=!1){const r="signIn",s=await pc(t,r,e),i=await Xt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Dp(t,e,n,r){return vt(t).onIdTokenChanged(e,n,r)}function xp(t,e,n){return vt(t).beforeAuthStateChanged(e,n)}function Mp(t,e,n,r){return vt(t).onAuthStateChanged(e,n,r)}function Lp(t){return vt(t).signOut()}const lr="__sak";/**
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
 */class gc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(lr,"1"),this.storage.removeItem(lr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(){const t=ge();return Ks(t)||Tr(t)}const Fp=1e3,Bp=10;class mc extends gc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Up()&&gp(),this.fallbackToPolling=ac(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);pp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Bp):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Fp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}mc.type="LOCAL";const $p=mc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c extends gc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}_c.type="SESSION";const vc=_c;/**
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
 */function Hp(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Rr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Rr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await Hp(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class jp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=Gs("",20);s.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const g=h;if(g.data.eventId===l)switch(g.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return window}function Wp(t){je().location.href=t}/**
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
 */function yc(){return typeof je().WorkerGlobalScope<"u"&&typeof je().importScripts=="function"}async function Vp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Kp(){return yc()?self:null}/**
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
 */const bc="firebaseLocalStorageDb",qp=1,ur="firebaseLocalStorage",Ec="fbase_key";class Mn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Sr(t,e){return t.transaction([ur],e?"readwrite":"readonly").objectStore(ur)}function Gp(){const t=indexedDB.deleteDatabase(bc);return new Mn(t).toPromise()}function ps(){const t=indexedDB.open(bc,qp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ur,{keyPath:Ec})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ur)?e(r):(r.close(),await Gp(),e(await ps()))})})}async function lo(t,e,n){const r=Sr(t,!0).put({[Ec]:e,value:n});return new Mn(r).toPromise()}async function Jp(t,e){const n=Sr(t,!1).get(e),r=await new Mn(n).toPromise();return r===void 0?null:r.value}function uo(t,e){const n=Sr(t,!0).delete(e);return new Mn(n).toPromise()}const Yp=800,Xp=3;class Ic{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ps(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Xp)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rr._getInstance(Kp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Vp(),!this.activeServiceWorker)return;this.sender=new jp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ps();return await lo(e,lr,"1"),await uo(e,lr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>lo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Jp(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>uo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Sr(s,!1).getAll();return new Mn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Yp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ic.type="LOCAL";const Qp=Ic;new kn(3e4,6e4);/**
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
 */function wc(t,e){return e?Je(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Js extends hc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Zp(t){return Np(t.auth,new Js(t),t.bypassAuthState)}function eg(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),kp(n,new Js(t),t.bypassAuthState)}async function tg(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),Op(n,new Js(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zp;case"linkViaPopup":case"linkViaRedirect":return tg;case"reauthViaPopup":case"reauthViaRedirect":return eg;default:We(this.auth,"internal-error")}}resolve(e){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=new kn(2e3,1e4);async function rg(t,e,n){const r=Dn(t);Jh(t,e,qs);const s=wc(r,n);return new Rt(r,"signInViaPopup",e,s).executeNotNull()}class Rt extends Tc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Rt.currentPopupAction&&Rt.currentPopupAction.cancel(),Rt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){Qe(this.filter.length===1,"Popup operations only handle one event");const e=Gs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(He(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(He(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(He(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ng.get())};e()}}Rt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg="pendingRedirect",Yn=new Map;class ig extends Tc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Yn.get(this.auth._key());if(!e){try{const r=await og(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Yn.set(this.auth._key(),e)}return this.bypassAuthState||Yn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function og(t,e){const n=lg(e),r=cg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ag(t,e){Yn.set(t._key(),e)}function cg(t){return Je(t._redirectPersistence)}function lg(t){return Jn(sg,t.config.apiKey,t.name)}async function ug(t,e,n=!1){const r=Dn(t),s=wc(r,e),o=await new ig(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg=10*60*1e3;class dg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Rc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(He(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fg&&this.cachedEventUids.clear(),this.cachedEventUids.has(fo(e))}saveEventToCache(e){this.cachedEventUids.add(fo(e)),this.lastProcessedEventTime=Date.now()}}function fo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Rc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pg(t,e={}){return Nn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mg=/^https?/;async function _g(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pg(t);for(const n of e)try{if(vg(n))return}catch{}We(t,"unauthorized-domain")}function vg(t){const e=hs(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!mg.test(n))return!1;if(gg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const yg=new kn(3e4,6e4);function ho(){const t=je().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function bg(t){return new Promise((e,n)=>{var r,s,i;function o(){ho(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ho(),n(He(t,"network-request-failed"))},timeout:yg.get()})}if(!((s=(r=je().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=je().gapi)===null||i===void 0)&&i.load)o();else{const c=_p("iframefcb");return je()[c]=()=>{gapi.load?o():n(He(t,"network-request-failed"))},fc(`https://apis.google.com/js/api.js?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw Xn=null,e})}let Xn=null;function Eg(t){return Xn=Xn||bg(t),Xn}/**
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
 */const Ig=new kn(5e3,15e3),wg="__/auth/iframe",Tg="emulator/auth/iframe",Rg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Cg(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Vs(e,Tg):`https://${t.config.authDomain}/${wg}`,r={apiKey:e.apiKey,appName:t.name,v:On},s=Sg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Pn(r).slice(1)}`}async function Ag(t){const e=await Eg(t),n=je().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:Cg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Rg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=He(t,"network-request-failed"),c=je().setTimeout(()=>{i(o)},Ig.get());function a(){je().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const Pg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Og=500,kg=600,Ng="_blank",Dg="http://localhost";class po{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xg(t,e,n,r=Og,s=kg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},Pg),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ge().toLowerCase();n&&(c=nc(l)?Ng:n),tc(l)&&(e=e||Dg,a.scrollbars="yes");const u=Object.entries(a).reduce((g,[v,R])=>`${g}${v}=${R},`,"");if(hp(l)&&c!=="_self")return Mg(e||"",c),new po(null);const h=window.open(e||"",c,u);B(h,t,"popup-blocked");try{h.focus()}catch{}return new po(h)}function Mg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Lg="__/auth/handler",Ug="emulator/auth/handler",Fg=encodeURIComponent("fac");async function go(t,e,n,r,s,i){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:On,eventId:s};if(e instanceof qs){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ud(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof xn){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const a=await t._getAppCheckToken(),l=a?`#${Fg}=${encodeURIComponent(a)}`:"";return`${Bg(t)}?${Pn(c).slice(1)}${l}`}function Bg({config:t}){return t.emulator?Vs(t,Ug):`https://${t.authDomain}/${Lg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="webStorageSupport";class $g{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vc,this._completeRedirectFn=ug,this._overrideRedirectResult=ag}async _openPopup(e,n,r,s){var i;Qe((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await go(e,n,r,hs(),s);return xg(e,o,Gs())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await go(e,n,r,hs(),s);return Wp(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Qe(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ag(e),r=new dg(e);return n.register("authEvent",s=>(B(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wr,{type:Wr},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Wr];o!==void 0&&n(!!o),We(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_g(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ac()||Ks()||Tr()}}const Hg=$g;var mo="@firebase/auth",_o="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Vg(t){Tn(new Yt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cc(t)},l=new wp(r,s,i,a);return Rp(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Tn(new Yt("auth-internal",e=>{const n=Dn(e.getProvider("auth").getImmediate());return(r=>new jg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ht(mo,_o,Wg(t)),Ht(mo,_o,"esm2017")}/**
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
 */const zg=5*60,Kg=Fa("authIdTokenMaxAge")||zg;let vo=null;const qg=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Kg)return;const s=n==null?void 0:n.token;vo!==s&&(vo=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Vr(t=Uh()){const e=ja(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Tp(t,{popupRedirectResolver:Hg,persistence:[Qp,$p,vc]}),r=Fa("authTokenSyncURL");if(r){const i=qg(r);xp(n,i,()=>i(n.currentUser)),Dp(n,o=>i(o))}const s=Sd("auth");return s&&Sp(n,`http://${s}`),n}Vg("Browser");const Gg=cf("user",{state:()=>({user:null}),getters:{userDisplayName(t){if(t.user)return t.user.displayName},userEmail(t){if(t.user)return t.user.email}},actions:{setUser(t){this.user=t}}}),Jg={__name:"HomeView",setup(t){const e=Gg(),n=()=>{const s=new qe;rg(Vr(),s).then(i=>{e.setUser(i.user)}).catch(i=>{console.log("error",i)})},r=()=>{Lp(Vr()).then(()=>{e.setUser(null)}).catch(s=>console.log("error",s))};return ta(()=>{Mp(Vr(),s=>{s?e.setUser(s):e.setUser(null)})}),(s,i)=>(fa(),da("main",null,[ht("button",{onClick:n},"Sign in with Google"),ht("div",null,"User : "+Bc(Ye(e).user&&Ye(e).userEmail),1),ht("button",{onClick:r},"Sign Out")]))}},Yg=ld({history:Sf("/easy-reach"),routes:[{path:"/",name:"home",component:Jg},{path:"/arrivals",name:"arrivals",component:()=>vd(()=>import("./ArrivalsView-4966d295.js"),[])}]});var Xg="firebase",Qg="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ht(Xg,Qg,"app");const Zg={apiKey:"AIzaSyB9qi8KWgD9LtIERZHMKyf09oDGN4kPKKQ",authDomain:"easy-reach-1f358.firebaseapp.com",projectId:"easy-reach-1f358",storageBucket:"easy-reach-1f358.appspot.com",messagingSenderId:"344931134629",appId:"1:344931134629:web:c0e7bd69de1f0c383f714c"},em=()=>{Wa(Zg)};em();const Ys=Qu(gd);Ys.use(tf());Ys.use(Yg);Ys.mount("#app");export{fd as _,da as c,fa as o};

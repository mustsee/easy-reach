(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Nc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const ve={},ls=[],vt=()=>{},Gm=()=>!1,Qm=/^on[^a-z]/,po=t=>Qm.test(t),Dc=t=>t.startsWith("onUpdate:"),Me=Object.assign,Pc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ym=Object.prototype.hasOwnProperty,ne=(t,e)=>Ym.call(t,e),q=Array.isArray,us=t=>$r(t)==="[object Map]",go=t=>$r(t)==="[object Set]",pu=t=>$r(t)==="[object Date]",Y=t=>typeof t=="function",De=t=>typeof t=="string",gr=t=>typeof t=="symbol",me=t=>t!==null&&typeof t=="object",xf=t=>me(t)&&Y(t.then)&&Y(t.catch),Mf=Object.prototype.toString,$r=t=>Mf.call(t),Jm=t=>$r(t).slice(8,-1),Lf=t=>$r(t)==="[object Object]",Oc=t=>De(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ai=Nc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),mo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Xm=/-(\w)/g,Mt=mo(t=>t.replace(Xm,(e,n)=>n?n.toUpperCase():"")),Zm=/\B([A-Z])/g,Ls=mo(t=>t.replace(Zm,"-$1").toLowerCase()),yo=mo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ra=mo(t=>t?`on${yo(t)}`:""),mr=(t,e)=>!Object.is(t,e),Ri=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Vi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ff=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let gu;const Oa=()=>gu||(gu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xc(t){if(q(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=De(s)?sy(s):xc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(De(t))return t;if(me(t))return t}}const ey=/;(?![^(]*\))/g,ty=/:([^]+)/,ny=/\/\*[^]*?\*\//g;function sy(t){const e={};return t.replace(ny,"").split(ey).forEach(n=>{if(n){const s=n.split(ty);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Mc(t){let e="";if(De(t))e=t;else if(q(t))for(let n=0;n<t.length;n++){const s=Mc(t[n]);s&&(e+=s+" ")}else if(me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ry="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",iy=Nc(ry);function Uf(t){return!!t||t===""}function oy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=vo(t[s],e[s]);return n}function vo(t,e){if(t===e)return!0;let n=pu(t),s=pu(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=gr(t),s=gr(e),n||s)return t===e;if(n=q(t),s=q(e),n||s)return n&&s?oy(t,e):!1;if(n=me(t),s=me(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!vo(t[o],e[o]))return!1}}return String(t)===String(e)}function ay(t,e){return t.findIndex(n=>vo(n,e))}const OA=t=>De(t)?t:t==null?"":q(t)||me(t)&&(t.toString===Mf||!Y(t.toString))?JSON.stringify(t,Vf,2):String(t),Vf=(t,e)=>e&&e.__v_isRef?Vf(t,e.value):us(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:go(e)?{[`Set(${e.size})`]:[...e.values()]}:me(e)&&!q(e)&&!Lf(e)?String(e):e;let at;class $f{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=at,!e&&at&&(this.index=(at.scopes||(at.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=at;try{return at=this,e()}finally{at=n}}}on(){at=this}off(){at=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Bf(t){return new $f(t)}function cy(t,e=at){e&&e.active&&e.effects.push(t)}function jf(){return at}function ly(t){at&&at.cleanups.push(t)}const Lc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},qf=t=>(t.w&En)>0,Hf=t=>(t.n&En)>0,uy=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=En},hy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];qf(r)&&!Hf(r)?r.delete(t):e[n++]=r,r.w&=~En,r.n&=~En}e.length=n}},$i=new WeakMap;let Js=0,En=1;const xa=30;let mt;const Un=Symbol(""),Ma=Symbol("");class Fc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,cy(this,s)}run(){if(!this.active)return this.fn();let e=mt,n=pn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=mt,mt=this,pn=!0,En=1<<++Js,Js<=xa?uy(this):mu(this),this.fn()}finally{Js<=xa&&hy(this),En=1<<--Js,mt=this.parent,pn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){mt===this?this.deferStop=!0:this.active&&(mu(this),this.onStop&&this.onStop(),this.active=!1)}}function mu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let pn=!0;const zf=[];function Fs(){zf.push(pn),pn=!1}function Us(){const t=zf.pop();pn=t===void 0?!0:t}function rt(t,e,n){if(pn&&mt){let s=$i.get(t);s||$i.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Lc()),Kf(r)}}function Kf(t,e){let n=!1;Js<=xa?Hf(t)||(t.n|=En,n=!qf(t)):n=!t.has(mt),n&&(t.add(mt),mt.deps.push(t))}function Kt(t,e,n,s,r,i){const o=$i.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&q(t)){const c=Number(s);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":q(t)?Oc(n)&&a.push(o.get("length")):(a.push(o.get(Un)),us(t)&&a.push(o.get(Ma)));break;case"delete":q(t)||(a.push(o.get(Un)),us(t)&&a.push(o.get(Ma)));break;case"set":us(t)&&a.push(o.get(Un));break}if(a.length===1)a[0]&&La(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);La(Lc(c))}}function La(t,e){const n=q(t)?t:[...t];for(const s of n)s.computed&&yu(s);for(const s of n)s.computed||yu(s)}function yu(t,e){(t!==mt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function fy(t,e){var n;return(n=$i.get(t))==null?void 0:n.get(e)}const dy=Nc("__proto__,__v_isRef,__isVue"),Wf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(gr)),py=Uc(),gy=Uc(!1,!0),my=Uc(!0),vu=yy();function yy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=re(this);for(let i=0,o=this.length;i<o;i++)rt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(re)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Fs();const s=re(this)[e].apply(this,n);return Us(),s}}),t}function vy(t){const e=re(this);return rt(e,"has",t),e.hasOwnProperty(t)}function Uc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?xy:Xf:e?Jf:Yf).get(s))return s;const o=q(s);if(!t){if(o&&ne(vu,r))return Reflect.get(vu,r,i);if(r==="hasOwnProperty")return vy}const a=Reflect.get(s,r,i);return(gr(r)?Wf.has(r):dy(r))||(t||rt(s,"get",r),e)?a:be(a)?o&&Oc(r)?a:a.value:me(a)?t?Zf(a):Vs(a):a}}const wy=Gf(),_y=Gf(!0);function Gf(t=!1){return function(n,s,r,i){let o=n[s];if(_s(o)&&be(o)&&!be(r))return!1;if(!t&&(!Bi(r)&&!_s(r)&&(o=re(o),r=re(r)),!q(n)&&be(o)&&!be(r)))return o.value=r,!0;const a=q(n)&&Oc(s)?Number(s)<n.length:ne(n,s),c=Reflect.set(n,s,r,i);return n===re(i)&&(a?mr(r,o)&&Kt(n,"set",s,r):Kt(n,"add",s,r)),c}}function Ey(t,e){const n=ne(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Kt(t,"delete",e,void 0),s}function Iy(t,e){const n=Reflect.has(t,e);return(!gr(e)||!Wf.has(e))&&rt(t,"has",e),n}function Ty(t){return rt(t,"iterate",q(t)?"length":Un),Reflect.ownKeys(t)}const Qf={get:py,set:wy,deleteProperty:Ey,has:Iy,ownKeys:Ty},by={get:my,set(t,e){return!0},deleteProperty(t,e){return!0}},Sy=Me({},Qf,{get:gy,set:_y}),Vc=t=>t,wo=t=>Reflect.getPrototypeOf(t);function ui(t,e,n=!1,s=!1){t=t.__v_raw;const r=re(t),i=re(e);n||(e!==i&&rt(r,"get",e),rt(r,"get",i));const{has:o}=wo(r),a=s?Vc:n?jc:yr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function hi(t,e=!1){const n=this.__v_raw,s=re(n),r=re(t);return e||(t!==r&&rt(s,"has",t),rt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function fi(t,e=!1){return t=t.__v_raw,!e&&rt(re(t),"iterate",Un),Reflect.get(t,"size",t)}function wu(t){t=re(t);const e=re(this);return wo(e).has.call(e,t)||(e.add(t),Kt(e,"add",t,t)),this}function _u(t,e){e=re(e);const n=re(this),{has:s,get:r}=wo(n);let i=s.call(n,t);i||(t=re(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?mr(e,o)&&Kt(n,"set",t,e):Kt(n,"add",t,e),this}function Eu(t){const e=re(this),{has:n,get:s}=wo(e);let r=n.call(e,t);r||(t=re(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Kt(e,"delete",t,void 0),i}function Iu(){const t=re(this),e=t.size!==0,n=t.clear();return e&&Kt(t,"clear",void 0,void 0),n}function di(t,e){return function(s,r){const i=this,o=i.__v_raw,a=re(o),c=e?Vc:t?jc:yr;return!t&&rt(a,"iterate",Un),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function pi(t,e,n){return function(...s){const r=this.__v_raw,i=re(r),o=us(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),u=n?Vc:e?jc:yr;return!e&&rt(i,"iterate",c?Ma:Un),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function nn(t){return function(...e){return t==="delete"?!1:this}}function Cy(){const t={get(i){return ui(this,i)},get size(){return fi(this)},has:hi,add:wu,set:_u,delete:Eu,clear:Iu,forEach:di(!1,!1)},e={get(i){return ui(this,i,!1,!0)},get size(){return fi(this)},has:hi,add:wu,set:_u,delete:Eu,clear:Iu,forEach:di(!1,!0)},n={get(i){return ui(this,i,!0)},get size(){return fi(this,!0)},has(i){return hi.call(this,i,!0)},add:nn("add"),set:nn("set"),delete:nn("delete"),clear:nn("clear"),forEach:di(!0,!1)},s={get(i){return ui(this,i,!0,!0)},get size(){return fi(this,!0)},has(i){return hi.call(this,i,!0)},add:nn("add"),set:nn("set"),delete:nn("delete"),clear:nn("clear"),forEach:di(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=pi(i,!1,!1),n[i]=pi(i,!0,!1),e[i]=pi(i,!1,!0),s[i]=pi(i,!0,!0)}),[t,n,e,s]}const[Ay,Ry,ky,Ny]=Cy();function $c(t,e){const n=e?t?Ny:ky:t?Ry:Ay;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ne(n,r)&&r in s?n:s,r,i)}const Dy={get:$c(!1,!1)},Py={get:$c(!1,!0)},Oy={get:$c(!0,!1)},Yf=new WeakMap,Jf=new WeakMap,Xf=new WeakMap,xy=new WeakMap;function My(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ly(t){return t.__v_skip||!Object.isExtensible(t)?0:My(Jm(t))}function Vs(t){return _s(t)?t:Bc(t,!1,Qf,Dy,Yf)}function Fy(t){return Bc(t,!1,Sy,Py,Jf)}function Zf(t){return Bc(t,!0,by,Oy,Xf)}function Bc(t,e,n,s,r){if(!me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Ly(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function gn(t){return _s(t)?gn(t.__v_raw):!!(t&&t.__v_isReactive)}function _s(t){return!!(t&&t.__v_isReadonly)}function Bi(t){return!!(t&&t.__v_isShallow)}function ed(t){return gn(t)||_s(t)}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function _o(t){return Vi(t,"__v_skip",!0),t}const yr=t=>me(t)?Vs(t):t,jc=t=>me(t)?Zf(t):t;function td(t){pn&&mt&&(t=re(t),Kf(t.dep||(t.dep=Lc())))}function nd(t,e){t=re(t);const n=t.dep;n&&La(n)}function be(t){return!!(t&&t.__v_isRef===!0)}function qc(t){return sd(t,!1)}function Uy(t){return sd(t,!0)}function sd(t,e){return be(t)?t:new Vy(t,e)}class Vy{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:re(e),this._value=n?e:yr(e)}get value(){return td(this),this._value}set value(e){const n=this.__v_isShallow||Bi(e)||_s(e);e=n?e:re(e),mr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:yr(e),nd(this))}}function mn(t){return be(t)?t.value:t}const $y={get:(t,e,n)=>mn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return be(r)&&!be(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function rd(t){return gn(t)?t:new Proxy(t,$y)}function By(t){const e=q(t)?new Array(t.length):{};for(const n in t)e[n]=qy(t,n);return e}class jy{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return fy(re(this._object),this._key)}}function qy(t,e,n){const s=t[e];return be(s)?s:new jy(t,e,n)}class Hy{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Fc(e,()=>{this._dirty||(this._dirty=!0,nd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=re(this);return td(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function zy(t,e,n=!1){let s,r;const i=Y(t);return i?(s=t,r=vt):(s=t.get,r=t.set),new Hy(s,r,i||!r,n)}function yn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Eo(i,e,n)}return r}function wt(t,e,n,s){if(Y(t)){const i=yn(t,e,n,s);return i&&xf(i)&&i.catch(o=>{Eo(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(wt(t[i],e,n,s));return r}function Eo(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){yn(c,null,10,[t,o,a]);return}}Ky(t,n,r,s)}function Ky(t,e,n,s=!0){console.error(t)}let vr=!1,Fa=!1;const We=[];let At=0;const hs=[];let $t=null,Dn=0;const id=Promise.resolve();let Hc=null;function zc(t){const e=Hc||id;return t?e.then(this?t.bind(this):t):e}function Wy(t){let e=At+1,n=We.length;for(;e<n;){const s=e+n>>>1;wr(We[s])<t?e=s+1:n=s}return e}function Kc(t){(!We.length||!We.includes(t,vr&&t.allowRecurse?At+1:At))&&(t.id==null?We.push(t):We.splice(Wy(t.id),0,t),od())}function od(){!vr&&!Fa&&(Fa=!0,Hc=id.then(cd))}function Gy(t){const e=We.indexOf(t);e>At&&We.splice(e,1)}function Qy(t){q(t)?hs.push(...t):(!$t||!$t.includes(t,t.allowRecurse?Dn+1:Dn))&&hs.push(t),od()}function Tu(t,e=vr?At+1:0){for(;e<We.length;e++){const n=We[e];n&&n.pre&&(We.splice(e,1),e--,n())}}function ad(t){if(hs.length){const e=[...new Set(hs)];if(hs.length=0,$t){$t.push(...e);return}for($t=e,$t.sort((n,s)=>wr(n)-wr(s)),Dn=0;Dn<$t.length;Dn++)$t[Dn]();$t=null,Dn=0}}const wr=t=>t.id==null?1/0:t.id,Yy=(t,e)=>{const n=wr(t)-wr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function cd(t){Fa=!1,vr=!0,We.sort(Yy);const e=vt;try{for(At=0;At<We.length;At++){const n=We[At];n&&n.active!==!1&&yn(n,null,14)}}finally{At=0,We.length=0,ad(),vr=!1,Hc=null,(We.length||hs.length)&&cd()}}function Jy(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ve;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||ve;d&&(r=n.map(g=>De(g)?g.trim():g)),h&&(r=n.map(Ff))}let a,c=s[a=ra(e)]||s[a=ra(Mt(e))];!c&&i&&(c=s[a=ra(Ls(e))]),c&&wt(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,wt(l,t,6,r)}}function ld(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Y(t)){const c=l=>{const u=ld(l,e,!0);u&&(a=!0,Me(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(me(t)&&s.set(t,null),null):(q(i)?i.forEach(c=>o[c]=null):Me(o,i),me(t)&&s.set(t,o),o)}function Io(t,e){return!t||!po(e)?!1:(e=e.slice(2).replace(/Once$/,""),ne(t,e[0].toLowerCase()+e.slice(1))||ne(t,Ls(e))||ne(t,e))}let lt=null,ud=null;function ji(t){const e=lt;return lt=t,ud=t&&t.type.__scopeId||null,e}function hd(t,e=lt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&xu(-1);const i=ji(e);let o;try{o=t(...r)}finally{ji(i),s._d&&xu(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ia(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:_,inheritAttrs:b}=t;let A,P;const O=ji(t);try{if(n.shapeFlag&4){const M=r||s;A=Ct(u.call(M,M,h,i,g,d,_)),P=c}else{const M=e;A=Ct(M.length>1?M(i,{attrs:c,slots:a,emit:l}):M(i,null)),P=e.props?c:Xy(c)}}catch(M){ir.length=0,Eo(M,t,1),A=$e(Hn)}let j=A;if(P&&b!==!1){const M=Object.keys(P),{shapeFlag:ee}=j;M.length&&ee&7&&(o&&M.some(Dc)&&(P=Zy(P,o)),j=Is(j,P))}return n.dirs&&(j=Is(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),A=j,ji(O),A}const Xy=t=>{let e;for(const n in t)(n==="class"||n==="style"||po(n))&&((e||(e={}))[n]=t[n]);return e},Zy=(t,e)=>{const n={};for(const s in t)(!Dc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function ev(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?bu(s,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!Io(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?bu(s,o,l):!0:!!o;return!1}function bu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Io(n,i))return!0}return!1}function tv({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const nv=t=>t.__isSuspense;function sv(t,e){e&&e.pendingBranch?q(t)?e.effects.push(...t):e.effects.push(t):Qy(t)}const gi={};function sr(t,e,n){return fd(t,e,n)}function fd(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ve){var a;const c=jf()===((a=Oe)==null?void 0:a.scope)?Oe:null;let l,u=!1,h=!1;if(be(t)?(l=()=>t.value,u=Bi(t)):gn(t)?(l=()=>t,s=!0):q(t)?(h=!0,u=t.some(M=>gn(M)||Bi(M)),l=()=>t.map(M=>{if(be(M))return M.value;if(gn(M))return On(M);if(Y(M))return yn(M,c,2)})):Y(t)?e?l=()=>yn(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),wt(t,c,3,[g])}:l=vt,e&&s){const M=l;l=()=>On(M())}let d,g=M=>{d=O.onStop=()=>{yn(M,c,4)}},_;if(Tr)if(g=vt,e?n&&wt(e,c,3,[l(),h?[]:void 0,g]):l(),r==="sync"){const M=ew();_=M.__watcherHandles||(M.__watcherHandles=[])}else return vt;let b=h?new Array(t.length).fill(gi):gi;const A=()=>{if(O.active)if(e){const M=O.run();(s||u||(h?M.some((ee,ye)=>mr(ee,b[ye])):mr(M,b)))&&(d&&d(),wt(e,c,3,[M,b===gi?void 0:h&&b[0]===gi?[]:b,g]),b=M)}else O.run()};A.allowRecurse=!!e;let P;r==="sync"?P=A:r==="post"?P=()=>st(A,c&&c.suspense):(A.pre=!0,c&&(A.id=c.uid),P=()=>Kc(A));const O=new Fc(l,P);e?n?A():b=O.run():r==="post"?st(O.run.bind(O),c&&c.suspense):O.run();const j=()=>{O.stop(),c&&c.scope&&Pc(c.scope.effects,O)};return _&&_.push(j),j}function rv(t,e,n){const s=this.proxy,r=De(t)?t.includes(".")?dd(s,t):()=>s[t]:t.bind(s,s);let i;Y(e)?i=e:(i=e.handler,n=e);const o=Oe;Ts(this);const a=fd(r,i.bind(s),n);return o?Ts(o):Vn(),a}function dd(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function On(t,e){if(!me(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),be(t))On(t.value,e);else if(q(t))for(let n=0;n<t.length;n++)On(t[n],e);else if(go(t)||us(t))t.forEach(n=>{On(n,e)});else if(Lf(t))for(const n in t)On(t[n],e);return t}function xA(t,e){const n=lt;if(n===null)return t;const s=Co(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ve]=e[i];o&&(Y(o)&&(o={mounted:o,updated:o}),o.deep&&On(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Rn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Fs(),wt(c,n,8,[t.el,a,t,e]),Us())}}function pd(t,e){return Y(t)?(()=>Me({name:t.name},e,{setup:t}))():t}const ki=t=>!!t.type.__asyncLoader,gd=t=>t.type.__isKeepAlive;function iv(t,e){md(t,"a",e)}function ov(t,e){md(t,"da",e)}function md(t,e,n=Oe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(To(e,s,n),n){let r=n.parent;for(;r&&r.parent;)gd(r.parent.vnode)&&av(s,e,n,r),r=r.parent}}function av(t,e,n,s){const r=To(e,t,s,!0);yd(()=>{Pc(s[e],r)},n)}function To(t,e,n=Oe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Fs(),Ts(n);const a=wt(e,n,t,o);return Vn(),Us(),a});return s?r.unshift(i):r.push(i),i}}const Xt=t=>(e,n=Oe)=>(!Tr||t==="sp")&&To(t,(...s)=>e(...s),n),cv=Xt("bm"),lv=Xt("m"),uv=Xt("bu"),hv=Xt("u"),fv=Xt("bum"),yd=Xt("um"),dv=Xt("sp"),pv=Xt("rtg"),gv=Xt("rtc");function mv(t,e=Oe){To("ec",t,e)}const vd="components";function yv(t,e){return wv(vd,t,!0,e)||t}const vv=Symbol.for("v-ndc");function wv(t,e,n=!0,s=!1){const r=lt||Oe;if(r){const i=r.type;if(t===vd){const a=Jv(i,!1);if(a&&(a===e||a===Mt(e)||a===yo(Mt(e))))return i}const o=Su(r[t]||i[t],e)||Su(r.appContext[t],e);return!o&&s?i:o}}function Su(t,e){return t&&(t[e]||t[Mt(e)]||t[yo(Mt(e))])}function MA(t,e,n,s){let r;const i=n&&n[s];if(q(t)||De(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(me(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const Ua=t=>t?Nd(t)?Co(t)||t.proxy:Ua(t.parent):null,rr=Me(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ua(t.parent),$root:t=>Ua(t.root),$emit:t=>t.emit,$options:t=>Wc(t),$forceUpdate:t=>t.f||(t.f=()=>Kc(t.update)),$nextTick:t=>t.n||(t.n=zc.bind(t.proxy)),$watch:t=>rv.bind(t)}),oa=(t,e)=>t!==ve&&!t.__isScriptSetup&&ne(t,e),_v={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(oa(s,e))return o[e]=1,s[e];if(r!==ve&&ne(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&ne(l,e))return o[e]=3,i[e];if(n!==ve&&ne(n,e))return o[e]=4,n[e];Va&&(o[e]=0)}}const u=rr[e];let h,d;if(u)return e==="$attrs"&&rt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ve&&ne(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ne(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return oa(r,e)?(r[e]=n,!0):s!==ve&&ne(s,e)?(s[e]=n,!0):ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ve&&ne(t,o)||oa(e,o)||(a=i[0])&&ne(a,o)||ne(s,o)||ne(rr,o)||ne(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Cu(t){return q(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Va=!0;function Ev(t){const e=Wc(t),n=t.proxy,s=t.ctx;Va=!1,e.beforeCreate&&Au(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:_,activated:b,deactivated:A,beforeDestroy:P,beforeUnmount:O,destroyed:j,unmounted:M,render:ee,renderTracked:ye,renderTriggered:Ie,errorCaptured:X,serverPrefetch:J,expose:_e,inheritAttrs:je,components:it,directives:ht,filters:An}=e;if(l&&Iv(l,s,null),o)for(const pe in o){const ce=o[pe];Y(ce)&&(s[pe]=ce.bind(n))}if(r){const pe=r.call(n,n);me(pe)&&(t.data=Vs(pe))}if(Va=!0,i)for(const pe in i){const ce=i[pe],Ut=Y(ce)?ce.bind(n,n):Y(ce.get)?ce.get.bind(n,n):vt,tn=!Y(ce)&&Y(ce.set)?ce.set.bind(n):vt,Tt=ct({get:Ut,set:tn});Object.defineProperty(s,pe,{enumerable:!0,configurable:!0,get:()=>Tt.value,set:nt=>Tt.value=nt})}if(a)for(const pe in a)wd(a[pe],s,n,pe);if(c){const pe=Y(c)?c.call(n):c;Reflect.ownKeys(pe).forEach(ce=>{Ni(ce,pe[ce])})}u&&Au(u,t,"c");function ae(pe,ce){q(ce)?ce.forEach(Ut=>pe(Ut.bind(n))):ce&&pe(ce.bind(n))}if(ae(cv,h),ae(lv,d),ae(uv,g),ae(hv,_),ae(iv,b),ae(ov,A),ae(mv,X),ae(gv,ye),ae(pv,Ie),ae(fv,O),ae(yd,M),ae(dv,J),q(_e))if(_e.length){const pe=t.exposed||(t.exposed={});_e.forEach(ce=>{Object.defineProperty(pe,ce,{get:()=>n[ce],set:Ut=>n[ce]=Ut})})}else t.exposed||(t.exposed={});ee&&t.render===vt&&(t.render=ee),je!=null&&(t.inheritAttrs=je),it&&(t.components=it),ht&&(t.directives=ht)}function Iv(t,e,n=vt){q(t)&&(t=$a(t));for(const s in t){const r=t[s];let i;me(r)?"default"in r?i=Pt(r.from||s,r.default,!0):i=Pt(r.from||s):i=Pt(r),be(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Au(t,e,n){wt(q(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function wd(t,e,n,s){const r=s.includes(".")?dd(n,s):()=>n[s];if(De(t)){const i=e[t];Y(i)&&sr(r,i)}else if(Y(t))sr(r,t.bind(n));else if(me(t))if(q(t))t.forEach(i=>wd(i,e,n,s));else{const i=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(i)&&sr(r,i,t)}}function Wc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>qi(c,l,o,!0)),qi(c,e,o)),me(e)&&i.set(e,c),c}function qi(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&qi(t,i,n,!0),r&&r.forEach(o=>qi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Tv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Tv={data:Ru,props:ku,emits:ku,methods:Xs,computed:Xs,beforeCreate:Ze,created:Ze,beforeMount:Ze,mounted:Ze,beforeUpdate:Ze,updated:Ze,beforeDestroy:Ze,beforeUnmount:Ze,destroyed:Ze,unmounted:Ze,activated:Ze,deactivated:Ze,errorCaptured:Ze,serverPrefetch:Ze,components:Xs,directives:Xs,watch:Sv,provide:Ru,inject:bv};function Ru(t,e){return e?t?function(){return Me(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function bv(t,e){return Xs($a(t),$a(e))}function $a(t){if(q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ze(t,e){return t?[...new Set([].concat(t,e))]:e}function Xs(t,e){return t?Me(Object.create(null),t,e):e}function ku(t,e){return t?q(t)&&q(e)?[...new Set([...t,...e])]:Me(Object.create(null),Cu(t),Cu(e??{})):e}function Sv(t,e){if(!t)return e;if(!e)return t;const n=Me(Object.create(null),t);for(const s in e)n[s]=Ze(t[s],e[s]);return n}function _d(){return{app:null,config:{isNativeTag:Gm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cv=0;function Av(t,e){return function(s,r=null){Y(s)||(s=Me({},s)),r!=null&&!me(r)&&(r=null);const i=_d(),o=new Set;let a=!1;const c=i.app={_uid:Cv++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:tw,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Y(l.install)?(o.add(l),l.install(c,...u)):Y(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=$e(s,r);return d.appContext=i,u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Co(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){_r=c;try{return l()}finally{_r=null}}};return c}}let _r=null;function Ni(t,e){if(Oe){let n=Oe.provides;const s=Oe.parent&&Oe.parent.provides;s===n&&(n=Oe.provides=Object.create(s)),n[t]=e}}function Pt(t,e,n=!1){const s=Oe||lt;if(s||_r){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:_r._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Y(e)?e.call(s&&s.proxy):e}}function Rv(){return!!(Oe||lt||_r)}function kv(t,e,n,s=!1){const r={},i={};Vi(i,So,1),t.propsDefaults=Object.create(null),Ed(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Fy(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Nv(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=re(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Io(t.emitsOptions,d))continue;const g=e[d];if(c)if(ne(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const _=Mt(d);r[_]=Ba(c,a,_,g,t,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{Ed(t,e,r,i)&&(l=!0);let u;for(const h in a)(!e||!ne(e,h)&&((u=Ls(h))===h||!ne(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=Ba(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ne(e,h))&&(delete i[h],l=!0)}l&&Kt(t,"set","$attrs")}function Ed(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ai(c))continue;const l=e[c];let u;r&&ne(r,u=Mt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Io(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=re(n),l=a||ve;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Ba(r,c,h,l[h],t,!ne(l,h))}}return o}function Ba(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ne(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Y(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(Ts(r),s=l[n]=c.call(null,e),Vn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Ls(n))&&(s=!0))}return s}function Id(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!Y(t)){const u=h=>{c=!0;const[d,g]=Id(h,e,!0);Me(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return me(t)&&s.set(t,ls),ls;if(q(i))for(let u=0;u<i.length;u++){const h=Mt(i[u]);Nu(h)&&(o[h]=ve)}else if(i)for(const u in i){const h=Mt(u);if(Nu(h)){const d=i[u],g=o[h]=q(d)||Y(d)?{type:d}:Me({},d);if(g){const _=Ou(Boolean,g.type),b=Ou(String,g.type);g[0]=_>-1,g[1]=b<0||_<b,(_>-1||ne(g,"default"))&&a.push(h)}}}const l=[o,a];return me(t)&&s.set(t,l),l}function Nu(t){return t[0]!=="$"}function Du(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Pu(t,e){return Du(t)===Du(e)}function Ou(t,e){return q(e)?e.findIndex(n=>Pu(n,t)):Y(e)&&Pu(e,t)?0:-1}const Td=t=>t[0]==="_"||t==="$stable",Gc=t=>q(t)?t.map(Ct):[Ct(t)],Dv=(t,e,n)=>{if(e._n)return e;const s=hd((...r)=>Gc(e(...r)),n);return s._c=!1,s},bd=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Td(r))continue;const i=t[r];if(Y(i))e[r]=Dv(r,i,s);else if(i!=null){const o=Gc(i);e[r]=()=>o}}},Sd=(t,e)=>{const n=Gc(e);t.slots.default=()=>n},Pv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=re(e),Vi(e,"_",n)):bd(e,t.slots={})}else t.slots={},e&&Sd(t,e);Vi(t.slots,So,1)},Ov=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ve;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Me(r,e),!n&&a===1&&delete r._):(i=!e.$stable,bd(e,r)),o=e}else e&&(Sd(t,e),o={default:1});if(i)for(const a in r)!Td(a)&&!(a in o)&&delete r[a]};function ja(t,e,n,s,r=!1){if(q(t)){t.forEach((d,g)=>ja(d,e&&(q(e)?e[g]:e),n,s,r));return}if(ki(s)&&!r)return;const i=s.shapeFlag&4?Co(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ve?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(De(l)?(u[l]=null,ne(h,l)&&(h[l]=null)):be(l)&&(l.value=null)),Y(c))yn(c,a,12,[o,u]);else{const d=De(c),g=be(c);if(d||g){const _=()=>{if(t.f){const b=d?ne(h,c)?h[c]:u[c]:c.value;r?q(b)&&Pc(b,i):q(b)?b.includes(i)||b.push(i):d?(u[c]=[i],ne(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ne(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,st(_,n)):_()}}}const st=sv;function xv(t){return Mv(t)}function Mv(t,e){const n=Oa();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=vt,insertStaticContent:_}=t,b=(f,p,m,y=null,w=null,E=null,D=!1,C=null,R=!!p.dynamicChildren)=>{if(f===p)return;f&&!Ws(f,p)&&(y=v(f),nt(f,w,E,!0),f=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:I,ref:$,shapeFlag:F}=p;switch(I){case bo:A(f,p,m,y);break;case Hn:P(f,p,m,y);break;case aa:f==null&&O(p,m,y,D);break;case Bt:it(f,p,m,y,w,E,D,C,R);break;default:F&1?ee(f,p,m,y,w,E,D,C,R):F&6?ht(f,p,m,y,w,E,D,C,R):(F&64||F&128)&&I.process(f,p,m,y,w,E,D,C,R,k)}$!=null&&w&&ja($,f&&f.ref,E,p||f,!p)},A=(f,p,m,y)=>{if(f==null)s(p.el=a(p.children),m,y);else{const w=p.el=f.el;p.children!==f.children&&l(w,p.children)}},P=(f,p,m,y)=>{f==null?s(p.el=c(p.children||""),m,y):p.el=f.el},O=(f,p,m,y)=>{[f.el,f.anchor]=_(f.children,p,m,y,f.el,f.anchor)},j=({el:f,anchor:p},m,y)=>{let w;for(;f&&f!==p;)w=d(f),s(f,m,y),f=w;s(p,m,y)},M=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),r(f),f=m;r(p)},ee=(f,p,m,y,w,E,D,C,R)=>{D=D||p.type==="svg",f==null?ye(p,m,y,w,E,D,C,R):J(f,p,w,E,D,C,R)},ye=(f,p,m,y,w,E,D,C)=>{let R,I;const{type:$,props:F,shapeFlag:B,transition:K,dirs:Z}=f;if(R=f.el=o(f.type,E,F&&F.is,F),B&8?u(R,f.children):B&16&&X(f.children,R,null,y,w,E&&$!=="foreignObject",D,C),Z&&Rn(f,null,y,"created"),Ie(R,f,f.scopeId,D,y),F){for(const de in F)de!=="value"&&!Ai(de)&&i(R,de,null,F[de],E,f.children,y,w,qe);"value"in F&&i(R,"value",null,F.value),(I=F.onVnodeBeforeMount)&&St(I,y,f)}Z&&Rn(f,null,y,"beforeMount");const ge=(!w||w&&!w.pendingBranch)&&K&&!K.persisted;ge&&K.beforeEnter(R),s(R,p,m),((I=F&&F.onVnodeMounted)||ge||Z)&&st(()=>{I&&St(I,y,f),ge&&K.enter(R),Z&&Rn(f,null,y,"mounted")},w)},Ie=(f,p,m,y,w)=>{if(m&&g(f,m),y)for(let E=0;E<y.length;E++)g(f,y[E]);if(w){let E=w.subTree;if(p===E){const D=w.vnode;Ie(f,D,D.scopeId,D.slotScopeIds,w.parent)}}},X=(f,p,m,y,w,E,D,C,R=0)=>{for(let I=R;I<f.length;I++){const $=f[I]=C?an(f[I]):Ct(f[I]);b(null,$,p,m,y,w,E,D,C)}},J=(f,p,m,y,w,E,D)=>{const C=p.el=f.el;let{patchFlag:R,dynamicChildren:I,dirs:$}=p;R|=f.patchFlag&16;const F=f.props||ve,B=p.props||ve;let K;m&&kn(m,!1),(K=B.onVnodeBeforeUpdate)&&St(K,m,p,f),$&&Rn(p,f,m,"beforeUpdate"),m&&kn(m,!0);const Z=w&&p.type!=="foreignObject";if(I?_e(f.dynamicChildren,I,C,m,y,Z,E):D||ce(f,p,C,null,m,y,Z,E,!1),R>0){if(R&16)je(C,p,F,B,m,y,w);else if(R&2&&F.class!==B.class&&i(C,"class",null,B.class,w),R&4&&i(C,"style",F.style,B.style,w),R&8){const ge=p.dynamicProps;for(let de=0;de<ge.length;de++){const Ce=ge[de],gt=F[Ce],ts=B[Ce];(ts!==gt||Ce==="value")&&i(C,Ce,gt,ts,w,f.children,m,y,qe)}}R&1&&f.children!==p.children&&u(C,p.children)}else!D&&I==null&&je(C,p,F,B,m,y,w);((K=B.onVnodeUpdated)||$)&&st(()=>{K&&St(K,m,p,f),$&&Rn(p,f,m,"updated")},y)},_e=(f,p,m,y,w,E,D)=>{for(let C=0;C<p.length;C++){const R=f[C],I=p[C],$=R.el&&(R.type===Bt||!Ws(R,I)||R.shapeFlag&70)?h(R.el):m;b(R,I,$,null,y,w,E,D,!0)}},je=(f,p,m,y,w,E,D)=>{if(m!==y){if(m!==ve)for(const C in m)!Ai(C)&&!(C in y)&&i(f,C,m[C],null,D,p.children,w,E,qe);for(const C in y){if(Ai(C))continue;const R=y[C],I=m[C];R!==I&&C!=="value"&&i(f,C,I,R,D,p.children,w,E,qe)}"value"in y&&i(f,"value",m.value,y.value)}},it=(f,p,m,y,w,E,D,C,R)=>{const I=p.el=f?f.el:a(""),$=p.anchor=f?f.anchor:a("");let{patchFlag:F,dynamicChildren:B,slotScopeIds:K}=p;K&&(C=C?C.concat(K):K),f==null?(s(I,m,y),s($,m,y),X(p.children,m,$,w,E,D,C,R)):F>0&&F&64&&B&&f.dynamicChildren?(_e(f.dynamicChildren,B,m,w,E,D,C),(p.key!=null||w&&p===w.subTree)&&Cd(f,p,!0)):ce(f,p,m,$,w,E,D,C,R)},ht=(f,p,m,y,w,E,D,C,R)=>{p.slotScopeIds=C,f==null?p.shapeFlag&512?w.ctx.activate(p,m,y,D,R):An(p,m,y,w,E,D,R):ft(f,p,R)},An=(f,p,m,y,w,E,D)=>{const C=f.component=Kv(f,y,w);if(gd(f)&&(C.ctx.renderer=k),Wv(C),C.asyncDep){if(w&&w.registerDep(C,ae),!f.el){const R=C.subTree=$e(Hn);P(null,R,p,m)}return}ae(C,f,p,m,w,E,D)},ft=(f,p,m)=>{const y=p.component=f.component;if(ev(f,p,m))if(y.asyncDep&&!y.asyncResolved){pe(y,p,m);return}else y.next=p,Gy(y.update),y.update();else p.el=f.el,y.vnode=p},ae=(f,p,m,y,w,E,D)=>{const C=()=>{if(f.isMounted){let{next:$,bu:F,u:B,parent:K,vnode:Z}=f,ge=$,de;kn(f,!1),$?($.el=Z.el,pe(f,$,D)):$=Z,F&&Ri(F),(de=$.props&&$.props.onVnodeBeforeUpdate)&&St(de,K,$,Z),kn(f,!0);const Ce=ia(f),gt=f.subTree;f.subTree=Ce,b(gt,Ce,h(gt.el),v(gt),f,w,E),$.el=Ce.el,ge===null&&tv(f,Ce.el),B&&st(B,w),(de=$.props&&$.props.onVnodeUpdated)&&st(()=>St(de,K,$,Z),w)}else{let $;const{el:F,props:B}=p,{bm:K,m:Z,parent:ge}=f,de=ki(p);if(kn(f,!1),K&&Ri(K),!de&&($=B&&B.onVnodeBeforeMount)&&St($,ge,p),kn(f,!0),F&&le){const Ce=()=>{f.subTree=ia(f),le(F,f.subTree,f,w,null)};de?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Ce()):Ce()}else{const Ce=f.subTree=ia(f);b(null,Ce,m,y,f,w,E),p.el=Ce.el}if(Z&&st(Z,w),!de&&($=B&&B.onVnodeMounted)){const Ce=p;st(()=>St($,ge,Ce),w)}(p.shapeFlag&256||ge&&ki(ge.vnode)&&ge.vnode.shapeFlag&256)&&f.a&&st(f.a,w),f.isMounted=!0,p=m=y=null}},R=f.effect=new Fc(C,()=>Kc(I),f.scope),I=f.update=()=>R.run();I.id=f.uid,kn(f,!0),I()},pe=(f,p,m)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,Nv(f,p.props,y,m),Ov(f,p.children,m),Fs(),Tu(),Us()},ce=(f,p,m,y,w,E,D,C,R=!1)=>{const I=f&&f.children,$=f?f.shapeFlag:0,F=p.children,{patchFlag:B,shapeFlag:K}=p;if(B>0){if(B&128){tn(I,F,m,y,w,E,D,C,R);return}else if(B&256){Ut(I,F,m,y,w,E,D,C,R);return}}K&8?($&16&&qe(I,w,E),F!==I&&u(m,F)):$&16?K&16?tn(I,F,m,y,w,E,D,C,R):qe(I,w,E,!0):($&8&&u(m,""),K&16&&X(F,m,y,w,E,D,C,R))},Ut=(f,p,m,y,w,E,D,C,R)=>{f=f||ls,p=p||ls;const I=f.length,$=p.length,F=Math.min(I,$);let B;for(B=0;B<F;B++){const K=p[B]=R?an(p[B]):Ct(p[B]);b(f[B],K,m,null,w,E,D,C,R)}I>$?qe(f,w,E,!0,!1,F):X(p,m,y,w,E,D,C,R,F)},tn=(f,p,m,y,w,E,D,C,R)=>{let I=0;const $=p.length;let F=f.length-1,B=$-1;for(;I<=F&&I<=B;){const K=f[I],Z=p[I]=R?an(p[I]):Ct(p[I]);if(Ws(K,Z))b(K,Z,m,null,w,E,D,C,R);else break;I++}for(;I<=F&&I<=B;){const K=f[F],Z=p[B]=R?an(p[B]):Ct(p[B]);if(Ws(K,Z))b(K,Z,m,null,w,E,D,C,R);else break;F--,B--}if(I>F){if(I<=B){const K=B+1,Z=K<$?p[K].el:y;for(;I<=B;)b(null,p[I]=R?an(p[I]):Ct(p[I]),m,Z,w,E,D,C,R),I++}}else if(I>B)for(;I<=F;)nt(f[I],w,E,!0),I++;else{const K=I,Z=I,ge=new Map;for(I=Z;I<=B;I++){const ot=p[I]=R?an(p[I]):Ct(p[I]);ot.key!=null&&ge.set(ot.key,I)}let de,Ce=0;const gt=B-Z+1;let ts=!1,hu=0;const Ks=new Array(gt);for(I=0;I<gt;I++)Ks[I]=0;for(I=K;I<=F;I++){const ot=f[I];if(Ce>=gt){nt(ot,w,E,!0);continue}let bt;if(ot.key!=null)bt=ge.get(ot.key);else for(de=Z;de<=B;de++)if(Ks[de-Z]===0&&Ws(ot,p[de])){bt=de;break}bt===void 0?nt(ot,w,E,!0):(Ks[bt-Z]=I+1,bt>=hu?hu=bt:ts=!0,b(ot,p[bt],m,null,w,E,D,C,R),Ce++)}const fu=ts?Lv(Ks):ls;for(de=fu.length-1,I=gt-1;I>=0;I--){const ot=Z+I,bt=p[ot],du=ot+1<$?p[ot+1].el:y;Ks[I]===0?b(null,bt,m,du,w,E,D,C,R):ts&&(de<0||I!==fu[de]?Tt(bt,m,du,2):de--)}}},Tt=(f,p,m,y,w=null)=>{const{el:E,type:D,transition:C,children:R,shapeFlag:I}=f;if(I&6){Tt(f.component.subTree,p,m,y);return}if(I&128){f.suspense.move(p,m,y);return}if(I&64){D.move(f,p,m,k);return}if(D===Bt){s(E,p,m);for(let F=0;F<R.length;F++)Tt(R[F],p,m,y);s(f.anchor,p,m);return}if(D===aa){j(f,p,m);return}if(y!==2&&I&1&&C)if(y===0)C.beforeEnter(E),s(E,p,m),st(()=>C.enter(E),w);else{const{leave:F,delayLeave:B,afterLeave:K}=C,Z=()=>s(E,p,m),ge=()=>{F(E,()=>{Z(),K&&K()})};B?B(E,Z,ge):ge()}else s(E,p,m)},nt=(f,p,m,y=!1,w=!1)=>{const{type:E,props:D,ref:C,children:R,dynamicChildren:I,shapeFlag:$,patchFlag:F,dirs:B}=f;if(C!=null&&ja(C,null,m,f,!0),$&256){p.ctx.deactivate(f);return}const K=$&1&&B,Z=!ki(f);let ge;if(Z&&(ge=D&&D.onVnodeBeforeUnmount)&&St(ge,p,f),$&6)li(f.component,m,y);else{if($&128){f.suspense.unmount(m,y);return}K&&Rn(f,null,p,"beforeUnmount"),$&64?f.type.remove(f,p,m,w,k,y):I&&(E!==Bt||F>0&&F&64)?qe(I,p,m,!1,!0):(E===Bt&&F&384||!w&&$&16)&&qe(R,p,m),y&&Zn(f)}(Z&&(ge=D&&D.onVnodeUnmounted)||K)&&st(()=>{ge&&St(ge,p,f),K&&Rn(f,null,p,"unmounted")},m)},Zn=f=>{const{type:p,el:m,anchor:y,transition:w}=f;if(p===Bt){es(m,y);return}if(p===aa){M(f);return}const E=()=>{r(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:D,delayLeave:C}=w,R=()=>D(m,E);C?C(f.el,E,R):R()}else E()},es=(f,p)=>{let m;for(;f!==p;)m=d(f),r(f),f=m;r(p)},li=(f,p,m)=>{const{bum:y,scope:w,update:E,subTree:D,um:C}=f;y&&Ri(y),w.stop(),E&&(E.active=!1,nt(D,f,p,m)),C&&st(C,p),st(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},qe=(f,p,m,y=!1,w=!1,E=0)=>{for(let D=E;D<f.length;D++)nt(f[D],p,m,y,w)},v=f=>f.shapeFlag&6?v(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),x=(f,p,m)=>{f==null?p._vnode&&nt(p._vnode,null,null,!0):b(p._vnode||null,f,p,null,null,null,m),Tu(),ad(),p._vnode=f},k={p:b,um:nt,m:Tt,r:Zn,mt:An,mc:X,pc:ce,pbc:_e,n:v,o:t};let V,le;return e&&([V,le]=e(k)),{render:x,hydrate:V,createApp:Av(x,V)}}function kn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Cd(t,e,n=!1){const s=t.children,r=e.children;if(q(s)&&q(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=an(r[i]),a.el=o.el),n||Cd(o,a)),a.type===bo&&(a.el=o.el)}}function Lv(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Fv=t=>t.__isTeleport,Bt=Symbol.for("v-fgt"),bo=Symbol.for("v-txt"),Hn=Symbol.for("v-cmt"),aa=Symbol.for("v-stc"),ir=[];let yt=null;function Es(t=!1){ir.push(yt=t?null:[])}function Uv(){ir.pop(),yt=ir[ir.length-1]||null}let Er=1;function xu(t){Er+=t}function Ad(t){return t.dynamicChildren=Er>0?yt||ls:null,Uv(),Er>0&&yt&&yt.push(t),t}function Ir(t,e,n,s,r,i){return Ad(Wt(t,e,n,s,r,i,!0))}function Vv(t,e,n,s,r){return Ad($e(t,e,n,s,r,!0))}function qa(t){return t?t.__v_isVNode===!0:!1}function Ws(t,e){return t.type===e.type&&t.key===e.key}const So="__vInternal",Rd=({key:t})=>t??null,Di=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?De(t)||be(t)||Y(t)?{i:lt,r:t,k:e,f:!!n}:t:null);function Wt(t,e=null,n=null,s=0,r=null,i=t===Bt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Rd(e),ref:e&&Di(e),scopeId:ud,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:lt};return a?(Qc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=De(n)?8:16),Er>0&&!o&&yt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&yt.push(c),c}const $e=$v;function $v(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===vv)&&(t=Hn),qa(t)){const a=Is(t,e,!0);return n&&Qc(a,n),Er>0&&!i&&yt&&(a.shapeFlag&6?yt[yt.indexOf(t)]=a:yt.push(a)),a.patchFlag|=-2,a}if(Xv(t)&&(t=t.__vccOpts),e){e=Bv(e);let{class:a,style:c}=e;a&&!De(a)&&(e.class=Mc(a)),me(c)&&(ed(c)&&!q(c)&&(c=Me({},c)),e.style=xc(c))}const o=De(t)?1:nv(t)?128:Fv(t)?64:me(t)?4:Y(t)?2:0;return Wt(t,e,n,s,r,o,i,!0)}function Bv(t){return t?ed(t)||So in t?Me({},t):t:null}function Is(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?qv(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Rd(a),ref:e&&e.ref?n&&r?q(r)?r.concat(Di(e)):[r,Di(e)]:Di(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Bt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Is(t.ssContent),ssFallback:t.ssFallback&&Is(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function kd(t=" ",e=0){return $e(bo,null,t,e)}function jv(t="",e=!1){return e?(Es(),Vv(Hn,null,t)):$e(Hn,null,t)}function Ct(t){return t==null||typeof t=="boolean"?$e(Hn):q(t)?$e(Bt,null,t.slice()):typeof t=="object"?an(t):$e(bo,null,String(t))}function an(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Is(t)}function Qc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(q(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Qc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(So in e)?e._ctx=lt:r===3&&lt&&(lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:lt},n=32):(e=String(e),s&64?(n=16,e=[kd(e)]):n=8);t.children=e,t.shapeFlag|=n}function qv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Mc([e.class,s.class]));else if(r==="style")e.style=xc([e.style,s.style]);else if(po(r)){const i=e[r],o=s[r];o&&i!==o&&!(q(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function St(t,e,n,s=null){wt(t,e,7,[n,s])}const Hv=_d();let zv=0;function Kv(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Hv,i={uid:zv++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new $f(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Id(s,r),emitsOptions:ld(s,r),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:s.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Jy.bind(null,i),t.ce&&t.ce(i),i}let Oe=null,Yc,ns,Mu="__VUE_INSTANCE_SETTERS__";(ns=Oa()[Mu])||(ns=Oa()[Mu]=[]),ns.push(t=>Oe=t),Yc=t=>{ns.length>1?ns.forEach(e=>e(t)):ns[0](t)};const Ts=t=>{Yc(t),t.scope.on()},Vn=()=>{Oe&&Oe.scope.off(),Yc(null)};function Nd(t){return t.vnode.shapeFlag&4}let Tr=!1;function Wv(t,e=!1){Tr=e;const{props:n,children:s}=t.vnode,r=Nd(t);kv(t,n,r,e),Pv(t,s);const i=r?Gv(t,e):void 0;return Tr=!1,i}function Gv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=_o(new Proxy(t.ctx,_v));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Yv(t):null;Ts(t),Fs();const i=yn(s,t,0,[t.props,r]);if(Us(),Vn(),xf(i)){if(i.then(Vn,Vn),e)return i.then(o=>{Lu(t,o,e)}).catch(o=>{Eo(o,t,0)});t.asyncDep=i}else Lu(t,i,e)}else Dd(t,e)}function Lu(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:me(e)&&(t.setupState=rd(e)),Dd(t,n)}let Fu;function Dd(t,e,n){const s=t.type;if(!t.render){if(!e&&Fu&&!s.render){const r=s.template||Wc(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Me(Me({isCustomElement:i,delimiters:a},o),c);s.render=Fu(r,l)}}t.render=s.render||vt}Ts(t),Fs(),Ev(t),Us(),Vn()}function Qv(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return rt(t,"get","$attrs"),e[n]}}))}function Yv(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Qv(t)},slots:t.slots,emit:t.emit,expose:e}}function Co(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(rd(_o(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in rr)return rr[n](t)},has(e,n){return n in e||n in rr}}))}function Jv(t,e=!0){return Y(t)?t.displayName||t.name:t.name||e&&t.__name}function Xv(t){return Y(t)&&"__vccOpts"in t}const ct=(t,e)=>zy(t,e,Tr);function Pd(t,e,n){const s=arguments.length;return s===2?me(e)&&!q(e)?qa(e)?$e(t,null,[e]):$e(t,e):$e(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&qa(n)&&(n=[n]),$e(t,e,n))}const Zv=Symbol.for("v-scx"),ew=()=>Pt(Zv),tw="3.3.4",nw="http://www.w3.org/2000/svg",Pn=typeof document<"u"?document:null,Uu=Pn&&Pn.createElement("template"),sw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Pn.createElementNS(nw,t):Pn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Pn.createTextNode(t),createComment:t=>Pn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Pn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Uu.innerHTML=s?`<svg>${t}</svg>`:t;const a=Uu.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function rw(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function iw(t,e,n){const s=t.style,r=De(n);if(n&&!r){if(e&&!De(e))for(const i in e)n[i]==null&&Ha(s,i,"");for(const i in n)Ha(s,i,n[i])}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Vu=/\s*!important$/;function Ha(t,e,n){if(q(n))n.forEach(s=>Ha(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=ow(t,e);Vu.test(n)?t.setProperty(Ls(s),n.replace(Vu,""),"important"):t[s]=n}}const $u=["Webkit","Moz","ms"],ca={};function ow(t,e){const n=ca[e];if(n)return n;let s=Mt(e);if(s!=="filter"&&s in t)return ca[e]=s;s=yo(s);for(let r=0;r<$u.length;r++){const i=$u[r]+s;if(i in t)return ca[e]=i}return e}const Bu="http://www.w3.org/1999/xlink";function aw(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Bu,e.slice(6,e.length)):t.setAttributeNS(Bu,e,n);else{const i=iy(e);n==null||i&&!Uf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function cw(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Uf(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Od(t,e,n,s){t.addEventListener(e,n,s)}function lw(t,e,n,s){t.removeEventListener(e,n,s)}function uw(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=hw(e);if(s){const l=i[e]=pw(s,r);Od(t,a,l,c)}else o&&(lw(t,a,o,c),i[e]=void 0)}}const ju=/(?:Once|Passive|Capture)$/;function hw(t){let e;if(ju.test(t)){e={};let s;for(;s=t.match(ju);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ls(t.slice(2)),e]}let la=0;const fw=Promise.resolve(),dw=()=>la||(fw.then(()=>la=0),la=Date.now());function pw(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;wt(gw(s,n.value),e,5,[s])};return n.value=t,n.attached=dw(),n}function gw(t,e){if(q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const qu=/^on[a-z]/,mw=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?rw(t,s,r):e==="style"?iw(t,n,s):po(e)?Dc(e)||uw(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yw(t,e,s,r))?cw(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),aw(t,e,s,r))};function yw(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&qu.test(e)&&Y(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||qu.test(e)&&De(n)?!1:e in t}const Hu=t=>{const e=t.props["onUpdate:modelValue"]||!1;return q(e)?n=>Ri(e,n):e},LA={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=go(e);Od(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ff(Hi(o)):Hi(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=Hu(s)},mounted(t,{value:e}){zu(t,e)},beforeUpdate(t,e,n){t._assign=Hu(n)},updated(t,{value:e}){zu(t,e)}};function zu(t,e){const n=t.multiple;if(!(n&&!q(e)&&!go(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=Hi(i);if(n)q(e)?i.selected=ay(e,o)>-1:i.selected=e.has(o);else if(vo(Hi(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Hi(t){return"_value"in t?t._value:t.value}const vw=Me({patchProp:mw},sw);let Ku;function ww(){return Ku||(Ku=xv(vw))}const _w=(...t)=>{const e=ww().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Ew(s);if(!r)return;const i=e._component;!Y(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Ew(t){return De(t)?document.querySelector(t):t}var Iw=!1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let xd;const Ao=t=>xd=t,Md=Symbol();function za(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var or;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(or||(or={}));function Tw(){const t=Bf(!0),e=t.run(()=>qc({}));let n=[],s=[];const r=_o({install(i){Ao(r),r._a=i,i.provide(Md,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!Iw?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const Ld=()=>{};function Wu(t,e,n,s=Ld){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&jf()&&ly(r),r}function ss(t,...e){t.slice().forEach(n=>{n(...e)})}const bw=t=>t();function Ka(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];za(r)&&za(s)&&t.hasOwnProperty(n)&&!be(s)&&!gn(s)?t[n]=Ka(r,s):t[n]=s}return t}const Sw=Symbol();function Cw(t){return!za(t)||!t.hasOwnProperty(Sw)}const{assign:on}=Object;function Aw(t){return!!(be(t)&&t.effect)}function Rw(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const u=By(n.state.value[t]);return on(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=_o(ct(()=>{Ao(n);const g=n._s.get(t);return o[d].call(g,g)})),h),{}))}return c=Fd(t,l,e,n,s,!0),c}function Fd(t,e,n={},s,r,i){let o;const a=on({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],g;const _=s.state.value[t];!i&&!_&&(s.state.value[t]={}),qc({});let b;function A(X){let J;l=u=!1,typeof X=="function"?(X(s.state.value[t]),J={type:or.patchFunction,storeId:t,events:g}):(Ka(s.state.value[t],X),J={type:or.patchObject,payload:X,storeId:t,events:g});const _e=b=Symbol();zc().then(()=>{b===_e&&(l=!0)}),u=!0,ss(h,J,s.state.value[t])}const P=i?function(){const{state:J}=n,_e=J?J():{};this.$patch(je=>{on(je,_e)})}:Ld;function O(){o.stop(),h=[],d=[],s._s.delete(t)}function j(X,J){return function(){Ao(s);const _e=Array.from(arguments),je=[],it=[];function ht(ae){je.push(ae)}function An(ae){it.push(ae)}ss(d,{args:_e,name:X,store:ee,after:ht,onError:An});let ft;try{ft=J.apply(this&&this.$id===t?this:ee,_e)}catch(ae){throw ss(it,ae),ae}return ft instanceof Promise?ft.then(ae=>(ss(je,ae),ae)).catch(ae=>(ss(it,ae),Promise.reject(ae))):(ss(je,ft),ft)}}const M={_p:s,$id:t,$onAction:Wu.bind(null,d),$patch:A,$reset:P,$subscribe(X,J={}){const _e=Wu(h,X,J.detached,()=>je()),je=o.run(()=>sr(()=>s.state.value[t],it=>{(J.flush==="sync"?u:l)&&X({storeId:t,type:or.direct,events:g},it)},on({},c,J)));return _e},$dispose:O},ee=Vs(M);s._s.set(t,ee);const ye=s._a&&s._a.runWithContext||bw,Ie=s._e.run(()=>(o=Bf(),ye(()=>o.run(e))));for(const X in Ie){const J=Ie[X];if(be(J)&&!Aw(J)||gn(J))i||(_&&Cw(J)&&(be(J)?J.value=_[X]:Ka(J,_[X])),s.state.value[t][X]=J);else if(typeof J=="function"){const _e=j(X,J);Ie[X]=_e,a.actions[X]=J}}return on(ee,Ie),on(re(ee),Ie),Object.defineProperty(ee,"$state",{get:()=>s.state.value[t],set:X=>{A(J=>{on(J,X)})}}),s._p.forEach(X=>{on(ee,o.run(()=>X({store:ee,app:s._a,pinia:s,options:a})))}),_&&i&&n.hydrate&&n.hydrate(ee.$state,_),l=!0,u=!0,ee}function kw(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=Rv();return a=a||(l?Pt(Md,null):null),a&&Ao(a),a=xd,a._s.has(s)||(i?Fd(s,e,r,a):Rw(s,r,a)),a._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.2.2
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const is=typeof window<"u";function Nw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const he=Object.assign;function ua(t,e){const n={};for(const s in e){const r=e[s];n[s]=_t(r)?r.map(t):t(r)}return n}const ar=()=>{},_t=Array.isArray,Dw=/\/$/,Pw=t=>t.replace(Dw,"");function ha(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Lw(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function Ow(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Gu(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function xw(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&bs(e.matched[s],n.matched[r])&&Ud(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function bs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ud(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Mw(t[n],e[n]))return!1;return!0}function Mw(t,e){return _t(t)?Qu(t,e):_t(e)?Qu(e,t):t===e}function Qu(t,e){return _t(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Lw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var br;(function(t){t.pop="pop",t.push="push"})(br||(br={}));var cr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(cr||(cr={}));function Fw(t){if(!t)if(is){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Pw(t)}const Uw=/^[^#]+#/;function Vw(t,e){return t.replace(Uw,"#")+e}function $w(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Ro=()=>({left:window.pageXOffset,top:window.pageYOffset});function Bw(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=$w(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Yu(t,e){return(history.state?history.state.position-e:-1)+t}const Wa=new Map;function jw(t,e){Wa.set(t,e)}function qw(t){const e=Wa.get(t);return Wa.delete(t),e}let Hw=()=>location.protocol+"//"+location.host;function Vd(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Gu(c,"")}return Gu(n,t)+s+r}function zw(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const g=Vd(t,location),_=n.value,b=e.value;let A=0;if(d){if(n.value=g,e.value=d,o&&o===_){o=null;return}A=b?d.position-b.position:0}else s(g);r.forEach(P=>{P(n.value,_,{delta:A,type:br.pop,direction:A?A>0?cr.forward:cr.back:cr.unknown})})};function c(){o=n.value}function l(d){r.push(d);const g=()=>{const _=r.indexOf(d);_>-1&&r.splice(_,1)};return i.push(g),g}function u(){const{history:d}=window;d.state&&d.replaceState(he({},d.state,{scroll:Ro()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Ju(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Ro():null}}function Kw(t){const{history:e,location:n}=window,s={value:Vd(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Hw()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=he({},e.state,Ju(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=he({},r.value,e.state,{forward:c,scroll:Ro()});i(u.current,u,!0);const h=he({},Ju(s.value,c,null),{position:u.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function Ww(t){t=Fw(t);const e=Kw(t),n=zw(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=he({location:"",base:t,go:s,createHref:Vw.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Gw(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Ww(t)}function Qw(t){return typeof t=="string"||t&&typeof t=="object"}function $d(t){return typeof t=="string"||typeof t=="symbol"}const sn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Bd=Symbol("");var Xu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Xu||(Xu={}));function Ss(t,e){return he(new Error,{type:t,[Bd]:!0},e)}function Vt(t,e){return t instanceof Error&&Bd in t&&(e==null||!!(t.type&e))}const Zu="[^/]+?",Yw={sensitive:!1,strict:!1,start:!0,end:!0},Jw=/[.+*?^${}()[\]/\\]/g;function Xw(t,e){const n=he({},Yw,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const d=l[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(Jw,"\\$&"),g+=40;else if(d.type===1){const{value:_,repeatable:b,optional:A,regexp:P}=d;i.push({name:_,repeatable:b,optional:A});const O=P||Zu;if(O!==Zu){g+=10;try{new RegExp(`(${O})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${_}" (${O}): `+M.message)}}let j=b?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;h||(j=A&&l.length<2?`(?:/${j})`:"/"+j),A&&(j+="?"),r+=j,g+=20,A&&(g+=-8),b&&(g+=-20),O===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",_=i[d-1];h[_.name]=g&&_.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:_,repeatable:b,optional:A}=g,P=_ in l?l[_]:"";if(_t(P)&&!b)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const O=_t(P)?P.join("/"):P;if(!O)if(A)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=O}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function Zw(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function e_(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Zw(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(eh(s))return 1;if(eh(r))return-1}return r.length-s.length}function eh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const t_={type:0,value:""},n_=/[a-zA-Z0-9_]/;function s_(t){if(!t)return[[]];if(t==="/")return[[t_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:n_.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function r_(t,e,n){const s=Xw(s_(t.path),n),r=he(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function i_(t,e){const n=[],s=new Map;e=sh({strict:!1,end:!0,sensitive:!1},e);function r(u){return s.get(u)}function i(u,h,d){const g=!d,_=o_(u);_.aliasOf=d&&d.record;const b=sh(e,u),A=[_];if("alias"in u){const j=typeof u.alias=="string"?[u.alias]:u.alias;for(const M of j)A.push(he({},_,{components:d?d.record.components:_.components,path:M,aliasOf:d?d.record:_}))}let P,O;for(const j of A){const{path:M}=j;if(h&&M[0]!=="/"){const ee=h.record.path,ye=ee[ee.length-1]==="/"?"":"/";j.path=h.record.path+(M&&ye+M)}if(P=r_(j,h,b),d?d.alias.push(P):(O=O||P,O!==P&&O.alias.push(P),g&&u.name&&!nh(P)&&o(u.name)),_.children){const ee=_.children;for(let ye=0;ye<ee.length;ye++)i(ee[ye],P,d&&d.children[ye])}d=d||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&c(P)}return O?()=>{o(O)}:ar}function o(u){if($d(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&e_(u,n[h])>=0&&(u.record.path!==n[h].record.path||!jd(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!nh(u)&&s.set(u.record.name,u)}function l(u,h){let d,g={},_,b;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw Ss(1,{location:u});b=d.record.name,g=he(th(h.params,d.keys.filter(O=>!O.optional).map(O=>O.name)),u.params&&th(u.params,d.keys.map(O=>O.name))),_=d.stringify(g)}else if("path"in u)_=u.path,d=n.find(O=>O.re.test(_)),d&&(g=d.parse(_),b=d.record.name);else{if(d=h.name?s.get(h.name):n.find(O=>O.re.test(h.path)),!d)throw Ss(1,{location:u,currentLocation:h});b=d.record.name,g=he({},h.params,u.params),_=d.stringify(g)}const A=[];let P=d;for(;P;)A.unshift(P.record),P=P.parent;return{name:b,path:_,params:g,matched:A,meta:c_(A)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function th(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function o_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:a_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function a_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function nh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function c_(t){return t.reduce((e,n)=>he(e,n.meta),{})}function sh(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function jd(t,e){return e.children.some(n=>n===t||jd(t,n))}const qd=/#/g,l_=/&/g,u_=/\//g,h_=/=/g,f_=/\?/g,Hd=/\+/g,d_=/%5B/g,p_=/%5D/g,zd=/%5E/g,g_=/%60/g,Kd=/%7B/g,m_=/%7C/g,Wd=/%7D/g,y_=/%20/g;function Jc(t){return encodeURI(""+t).replace(m_,"|").replace(d_,"[").replace(p_,"]")}function v_(t){return Jc(t).replace(Kd,"{").replace(Wd,"}").replace(zd,"^")}function Ga(t){return Jc(t).replace(Hd,"%2B").replace(y_,"+").replace(qd,"%23").replace(l_,"%26").replace(g_,"`").replace(Kd,"{").replace(Wd,"}").replace(zd,"^")}function w_(t){return Ga(t).replace(h_,"%3D")}function __(t){return Jc(t).replace(qd,"%23").replace(f_,"%3F")}function E_(t){return t==null?"":__(t).replace(u_,"%2F")}function zi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function I_(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Hd," "),o=i.indexOf("="),a=zi(o<0?i:i.slice(0,o)),c=o<0?null:zi(i.slice(o+1));if(a in e){let l=e[a];_t(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function rh(t){let e="";for(let n in t){const s=t[n];if(n=w_(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(_t(s)?s.map(i=>i&&Ga(i)):[s&&Ga(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function T_(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=_t(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const b_=Symbol(""),ih=Symbol(""),Xc=Symbol(""),Gd=Symbol(""),Qa=Symbol("");function Gs(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function cn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Ss(4,{from:n,to:e})):h instanceof Error?a(h):Qw(h)?a(Ss(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function fa(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(S_(a)){const l=(a.__vccOpts||a)[e];l&&r.push(cn(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Nw(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&cn(d,n,s,i,o)()}))}}return r}function S_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function oh(t){const e=Pt(Xc),n=Pt(Gd),s=ct(()=>e.resolve(mn(t.to))),r=ct(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(bs.bind(null,u));if(d>-1)return d;const g=ah(c[l-2]);return l>1&&ah(u)===g&&h[h.length-1].path!==g?h.findIndex(bs.bind(null,c[l-2])):d}),i=ct(()=>r.value>-1&&k_(n.params,s.value.params)),o=ct(()=>r.value>-1&&r.value===n.matched.length-1&&Ud(n.params,s.value.params));function a(c={}){return R_(c)?e[mn(t.replace)?"replace":"push"](mn(t.to)).catch(ar):Promise.resolve()}return{route:s,href:ct(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const C_=pd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:oh,setup(t,{slots:e}){const n=Vs(oh(t)),{options:s}=Pt(Xc),r=ct(()=>({[ch(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[ch(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Pd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),A_=C_;function R_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function k_(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!_t(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function ah(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ch=(t,e,n)=>t??e??n,N_=pd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Pt(Qa),r=ct(()=>t.route||s.value),i=Pt(ih,0),o=ct(()=>{let l=mn(i);const{matched:u}=r.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=ct(()=>r.value.matched[o.value]);Ni(ih,ct(()=>o.value+1)),Ni(b_,a),Ni(Qa,r);const c=qc();return sr(()=>[c.value,a.value,t.name],([l,u,h],[d,g,_])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!bs(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(b=>b(l))},{flush:"post"}),()=>{const l=r.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return lh(n.default,{Component:d,route:l});const g=h.props[u],_=g?g===!0?l.params:typeof g=="function"?g(l):g:null,A=Pd(d,he({},_,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return lh(n.default,{Component:A,route:l})||A}}});function lh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Qd=N_;function D_(t){const e=i_(t.routes,t),n=t.parseQuery||I_,s=t.stringifyQuery||rh,r=t.history,i=Gs(),o=Gs(),a=Gs(),c=Uy(sn);let l=sn;is&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ua.bind(null,v=>""+v),h=ua.bind(null,E_),d=ua.bind(null,zi);function g(v,x){let k,V;return $d(v)?(k=e.getRecordMatcher(v),V=x):V=v,e.addRoute(V,k)}function _(v){const x=e.getRecordMatcher(v);x&&e.removeRoute(x)}function b(){return e.getRoutes().map(v=>v.record)}function A(v){return!!e.getRecordMatcher(v)}function P(v,x){if(x=he({},x||c.value),typeof v=="string"){const m=ha(n,v,x.path),y=e.resolve({path:m.path},x),w=r.createHref(m.fullPath);return he(m,y,{params:d(y.params),hash:zi(m.hash),redirectedFrom:void 0,href:w})}let k;if("path"in v)k=he({},v,{path:ha(n,v.path,x.path).path});else{const m=he({},v.params);for(const y in m)m[y]==null&&delete m[y];k=he({},v,{params:h(m)}),x.params=h(x.params)}const V=e.resolve(k,x),le=v.hash||"";V.params=u(d(V.params));const f=Ow(s,he({},v,{hash:v_(le),path:V.path})),p=r.createHref(f);return he({fullPath:f,hash:le,query:s===rh?T_(v.query):v.query||{}},V,{redirectedFrom:void 0,href:p})}function O(v){return typeof v=="string"?ha(n,v,c.value.path):he({},v)}function j(v,x){if(l!==v)return Ss(8,{from:x,to:v})}function M(v){return Ie(v)}function ee(v){return M(he(O(v),{replace:!0}))}function ye(v){const x=v.matched[v.matched.length-1];if(x&&x.redirect){const{redirect:k}=x;let V=typeof k=="function"?k(v):k;return typeof V=="string"&&(V=V.includes("?")||V.includes("#")?V=O(V):{path:V},V.params={}),he({query:v.query,hash:v.hash,params:"path"in V?{}:v.params},V)}}function Ie(v,x){const k=l=P(v),V=c.value,le=v.state,f=v.force,p=v.replace===!0,m=ye(k);if(m)return Ie(he(O(m),{state:typeof m=="object"?he({},le,m.state):le,force:f,replace:p}),x||k);const y=k;y.redirectedFrom=x;let w;return!f&&xw(s,V,k)&&(w=Ss(16,{to:y,from:V}),Tt(V,V,!0,!1)),(w?Promise.resolve(w):_e(y,V)).catch(E=>Vt(E)?Vt(E,2)?E:tn(E):ce(E,y,V)).then(E=>{if(E){if(Vt(E,2))return Ie(he({replace:p},O(E.to),{state:typeof E.to=="object"?he({},le,E.to.state):le,force:f}),x||y)}else E=it(y,V,!0,p,le);return je(y,V,E),E})}function X(v,x){const k=j(v,x);return k?Promise.reject(k):Promise.resolve()}function J(v){const x=es.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(v):v()}function _e(v,x){let k;const[V,le,f]=P_(v,x);k=fa(V.reverse(),"beforeRouteLeave",v,x);for(const m of V)m.leaveGuards.forEach(y=>{k.push(cn(y,v,x))});const p=X.bind(null,v,x);return k.push(p),qe(k).then(()=>{k=[];for(const m of i.list())k.push(cn(m,v,x));return k.push(p),qe(k)}).then(()=>{k=fa(le,"beforeRouteUpdate",v,x);for(const m of le)m.updateGuards.forEach(y=>{k.push(cn(y,v,x))});return k.push(p),qe(k)}).then(()=>{k=[];for(const m of v.matched)if(m.beforeEnter&&!x.matched.includes(m))if(_t(m.beforeEnter))for(const y of m.beforeEnter)k.push(cn(y,v,x));else k.push(cn(m.beforeEnter,v,x));return k.push(p),qe(k)}).then(()=>(v.matched.forEach(m=>m.enterCallbacks={}),k=fa(f,"beforeRouteEnter",v,x),k.push(p),qe(k))).then(()=>{k=[];for(const m of o.list())k.push(cn(m,v,x));return k.push(p),qe(k)}).catch(m=>Vt(m,8)?m:Promise.reject(m))}function je(v,x,k){for(const V of a.list())J(()=>V(v,x,k))}function it(v,x,k,V,le){const f=j(v,x);if(f)return f;const p=x===sn,m=is?history.state:{};k&&(V||p?r.replace(v.fullPath,he({scroll:p&&m&&m.scroll},le)):r.push(v.fullPath,le)),c.value=v,Tt(v,x,k,p),tn()}let ht;function An(){ht||(ht=r.listen((v,x,k)=>{if(!li.listening)return;const V=P(v),le=ye(V);if(le){Ie(he(le,{replace:!0}),V).catch(ar);return}l=V;const f=c.value;is&&jw(Yu(f.fullPath,k.delta),Ro()),_e(V,f).catch(p=>Vt(p,12)?p:Vt(p,2)?(Ie(p.to,V).then(m=>{Vt(m,20)&&!k.delta&&k.type===br.pop&&r.go(-1,!1)}).catch(ar),Promise.reject()):(k.delta&&r.go(-k.delta,!1),ce(p,V,f))).then(p=>{p=p||it(V,f,!1),p&&(k.delta&&!Vt(p,8)?r.go(-k.delta,!1):k.type===br.pop&&Vt(p,20)&&r.go(-1,!1)),je(V,f,p)}).catch(ar)}))}let ft=Gs(),ae=Gs(),pe;function ce(v,x,k){tn(v);const V=ae.list();return V.length?V.forEach(le=>le(v,x,k)):console.error(v),Promise.reject(v)}function Ut(){return pe&&c.value!==sn?Promise.resolve():new Promise((v,x)=>{ft.add([v,x])})}function tn(v){return pe||(pe=!v,An(),ft.list().forEach(([x,k])=>v?k(v):x()),ft.reset()),v}function Tt(v,x,k,V){const{scrollBehavior:le}=t;if(!is||!le)return Promise.resolve();const f=!k&&qw(Yu(v.fullPath,0))||(V||!k)&&history.state&&history.state.scroll||null;return zc().then(()=>le(v,x,f)).then(p=>p&&Bw(p)).catch(p=>ce(p,v,x))}const nt=v=>r.go(v);let Zn;const es=new Set,li={currentRoute:c,listening:!0,addRoute:g,removeRoute:_,hasRoute:A,getRoutes:b,resolve:P,options:t,push:M,replace:ee,go:nt,back:()=>nt(-1),forward:()=>nt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ae.add,isReady:Ut,install(v){const x=this;v.component("RouterLink",A_),v.component("RouterView",Qd),v.config.globalProperties.$router=x,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>mn(c)}),is&&!Zn&&c.value===sn&&(Zn=!0,M(r.location).catch(le=>{}));const k={};for(const le in sn)k[le]=ct(()=>c.value[le]);v.provide(Xc,x),v.provide(Gd,Vs(k)),v.provide(Qa,c);const V=v.unmount;es.add(v),v.unmount=function(){es.delete(v),es.size<1&&(l=sn,ht&&ht(),ht=null,c.value=sn,Zn=!1,pe=!1),V()}}};function qe(v){return v.reduce((x,k)=>x.then(()=>J(k)),Promise.resolve())}return li}function P_(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>bs(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>bs(l,c))||r.push(c))}return[n,s,r]}const O_="modulepreload",x_=function(t){return"/easy-reach/"+t},uh={},M_=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=x_(i),i in uh)return;uh[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=r.length-1;u>=0;u--){const h=r[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":O_,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Yd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},L_=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Jd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Yd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):L_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw new F_;const d=i<<2|a>>4;if(s.push(d),l!==64){const g=a<<4&240|l>>2;if(s.push(g),h!==64){const _=l<<6&192|h;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class F_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const U_=function(t){const e=Yd(t);return Jd.encodeByteArray(e,!0)},Ki=function(t){return U_(t).replace(/\./g,"")},Xd=function(t){try{return Jd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function V_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $_=()=>V_().__FIREBASE_DEFAULTS__,B_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},j_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xd(t[1]);return e&&JSON.parse(e)},Zc=()=>{try{return $_()||B_()||j_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Zd=t=>{var e,n;return(n=(e=Zc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},q_=t=>{const e=Zd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ep=()=>{var t;return(t=Zc())===null||t===void 0?void 0:t.config},tp=t=>{var e;return(e=Zc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function z_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ki(JSON.stringify(n)),Ki(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function K_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function W_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function G_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Q_(){const t=Je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Y_(){try{return typeof indexedDB=="object"}catch{return!1}}function J_(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_="FirebaseError";class Zt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=X_,Object.setPrototypeOf(this,Zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Br.prototype.create)}}class Br{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Z_(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Zt(r,a,s)}}function Z_(t,e){return t.replace(e0,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const e0=/\{\$([^}]+)}/g;function t0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(hh(i)&&hh(o)){if(!Wi(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function hh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function n0(t,e){const n=new s0(t,e);return n.subscribe.bind(n)}class s0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");r0(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=da),r.error===void 0&&(r.error=da),r.complete===void 0&&(r.complete=da);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function r0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function da(){}/**
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
 */function pt(t){return t&&t._delegate?t._delegate:t}class zn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class i0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new H_;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(a0(e))try{this.getOrInitializeService({instanceIdentifier:Nn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Nn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nn){return this.instances.has(e)}getOptions(e=Nn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:o0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Nn){return this.component?this.component.multipleInstances?e:Nn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function o0(t){return t===Nn?void 0:t}function a0(t){return t.instantiationMode==="EAGER"}/**
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
 */class c0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new i0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const l0={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},u0=ie.INFO,h0={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},f0=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=h0[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class el{constructor(e){this.name=e,this._logLevel=u0,this._logHandler=f0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?l0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const d0=(t,e)=>e.some(n=>t instanceof n);let fh,dh;function p0(){return fh||(fh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function g0(){return dh||(dh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const np=new WeakMap,Ya=new WeakMap,sp=new WeakMap,pa=new WeakMap,tl=new WeakMap;function m0(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(vn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&np.set(n,t)}).catch(()=>{}),tl.set(e,t),e}function y0(t){if(Ya.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ya.set(t,e)}let Ja={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ya.get(t);if(e==="objectStoreNames")return t.objectStoreNames||sp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function v0(t){Ja=t(Ja)}function w0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ga(this),e,...n);return sp.set(s,e.sort?e.sort():[e]),vn(s)}:g0().includes(t)?function(...e){return t.apply(ga(this),e),vn(np.get(this))}:function(...e){return vn(t.apply(ga(this),e))}}function _0(t){return typeof t=="function"?w0(t):(t instanceof IDBTransaction&&y0(t),d0(t,p0())?new Proxy(t,Ja):t)}function vn(t){if(t instanceof IDBRequest)return m0(t);if(pa.has(t))return pa.get(t);const e=_0(t);return e!==t&&(pa.set(t,e),tl.set(e,t)),e}const ga=t=>tl.get(t);function E0(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=vn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(vn(o.result),c.oldVersion,c.newVersion,vn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const I0=["get","getKey","getAll","getAllKeys","count"],T0=["put","add","delete","clear"],ma=new Map;function ph(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ma.get(e))return ma.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=T0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||I0.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return ma.set(e,i),i}v0(t=>({...t,get:(e,n,s)=>ph(e,n)||t.get(e,n,s),has:(e,n)=>!!ph(e,n)||t.has(e,n)}));/**
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
 */class b0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(S0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function S0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xa="@firebase/app",gh="0.9.13";/**
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
 */const Kn=new el("@firebase/app"),C0="@firebase/app-compat",A0="@firebase/analytics-compat",R0="@firebase/analytics",k0="@firebase/app-check-compat",N0="@firebase/app-check",D0="@firebase/auth",P0="@firebase/auth-compat",O0="@firebase/database",x0="@firebase/database-compat",M0="@firebase/functions",L0="@firebase/functions-compat",F0="@firebase/installations",U0="@firebase/installations-compat",V0="@firebase/messaging",$0="@firebase/messaging-compat",B0="@firebase/performance",j0="@firebase/performance-compat",q0="@firebase/remote-config",H0="@firebase/remote-config-compat",z0="@firebase/storage",K0="@firebase/storage-compat",W0="@firebase/firestore",G0="@firebase/firestore-compat",Q0="firebase",Y0="9.23.0";/**
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
 */const Za="[DEFAULT]",J0={[Xa]:"fire-core",[C0]:"fire-core-compat",[R0]:"fire-analytics",[A0]:"fire-analytics-compat",[N0]:"fire-app-check",[k0]:"fire-app-check-compat",[D0]:"fire-auth",[P0]:"fire-auth-compat",[O0]:"fire-rtdb",[x0]:"fire-rtdb-compat",[M0]:"fire-fn",[L0]:"fire-fn-compat",[F0]:"fire-iid",[U0]:"fire-iid-compat",[V0]:"fire-fcm",[$0]:"fire-fcm-compat",[B0]:"fire-perf",[j0]:"fire-perf-compat",[q0]:"fire-rc",[H0]:"fire-rc-compat",[z0]:"fire-gcs",[K0]:"fire-gcs-compat",[W0]:"fire-fst",[G0]:"fire-fst-compat","fire-js":"fire-js",[Q0]:"fire-js-all"};/**
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
 */const Gi=new Map,ec=new Map;function X0(t,e){try{t.container.addComponent(e)}catch(n){Kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Cs(t){const e=t.name;if(ec.has(e))return Kn.debug(`There were multiple attempts to register component ${e}.`),!1;ec.set(e,t);for(const n of Gi.values())X0(n,t);return!0}function nl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Z0={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},wn=new Br("app","Firebase",Z0);/**
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
 */class eE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wn.create("app-deleted",{appName:this._name})}}/**
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
 */const $s=Y0;function rp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Za,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw wn.create("bad-app-name",{appName:String(r)});if(n||(n=ep()),!n)throw wn.create("no-options");const i=Gi.get(r);if(i){if(Wi(n,i.options)&&Wi(s,i.config))return i;throw wn.create("duplicate-app",{appName:r})}const o=new c0(r);for(const c of ec.values())o.addComponent(c);const a=new eE(n,s,o);return Gi.set(r,a),a}function ip(t=Za){const e=Gi.get(t);if(!e&&t===Za&&ep())return rp();if(!e)throw wn.create("no-app",{appName:t});return e}function _n(t,e,n){var s;let r=(s=J0[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kn.warn(a.join(" "));return}Cs(new zn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const tE="firebase-heartbeat-database",nE=1,Sr="firebase-heartbeat-store";let ya=null;function op(){return ya||(ya=E0(tE,nE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Sr)}}}).catch(t=>{throw wn.create("idb-open",{originalErrorMessage:t.message})})),ya}async function sE(t){try{return await(await op()).transaction(Sr).objectStore(Sr).get(ap(t))}catch(e){if(e instanceof Zt)Kn.warn(e.message);else{const n=wn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kn.warn(n.message)}}}async function mh(t,e){try{const s=(await op()).transaction(Sr,"readwrite");await s.objectStore(Sr).put(e,ap(t)),await s.done}catch(n){if(n instanceof Zt)Kn.warn(n.message);else{const s=wn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kn.warn(s.message)}}}function ap(t){return`${t.name}!${t.options.appId}`}/**
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
 */const rE=1024,iE=30*24*60*60*1e3;class oE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=yh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=iE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=yh(),{heartbeatsToSend:n,unsentEntries:s}=aE(this._heartbeatsCache.heartbeats),r=Ki(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function yh(){return new Date().toISOString().substring(0,10)}function aE(t,e=rE){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),vh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),vh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class cE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Y_()?J_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await sE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return mh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return mh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function vh(t){return Ki(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function lE(t){Cs(new zn("platform-logger",e=>new b0(e),"PRIVATE")),Cs(new zn("heartbeat",e=>new oE(e),"PRIVATE")),_n(Xa,gh,t),_n(Xa,gh,"esm2017"),_n("fire-js","")}lE("");function sl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function cp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uE=cp,lp=new Br("auth","Firebase",cp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=new el("@firebase/auth");function hE(t,...e){Qi.logLevel<=ie.WARN&&Qi.warn(`Auth (${$s}): ${t}`,...e)}function Pi(t,...e){Qi.logLevel<=ie.ERROR&&Qi.error(`Auth (${$s}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t,...e){throw rl(t,...e)}function Ot(t,...e){return rl(t,...e)}function up(t,e,n){const s=Object.assign(Object.assign({},uE()),{[e]:n});return new Br("auth","Firebase",s).create(e,{appName:t.name})}function fE(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Lt(t,"argument-error"),up(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function rl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return lp.create(t,...e)}function W(t,e,...n){if(!t)throw rl(e,...n)}function qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Pi(e),new Error(e)}function Gt(t,e){t||qt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dE(){return wh()==="http:"||wh()==="https:"}function wh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dE()||W_()||"connection"in navigator)?navigator.onLine:!0}function gE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n){this.shortDelay=e,this.longDelay=n,Gt(n>e,"Short delay should be less than long delay!"),this.isMobile=K_()||G_()}get(){return pE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(t,e){Gt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE=new qr(3e4,6e4);function fp(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hr(t,e,n,s,r={}){return dp(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=jr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),hp.fetch()(pp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function dp(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},mE),e);try{const r=new wE(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw mi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw mi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw mi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw mi(t,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw up(t,u,l);Lt(t,u)}}catch(r){if(r instanceof Zt)throw r;Lt(t,"network-request-failed",{message:String(r)})}}async function vE(t,e,n,s,r={}){const i=await Hr(t,e,n,s,r);return"mfaPendingCredential"in i&&Lt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function pp(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?il(t.config,r):`${t.config.apiScheme}://${r}`}class wE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ot(this.auth,"network-request-failed")),yE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Ot(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _E(t,e){return Hr(t,"POST","/v1/accounts:delete",e)}async function EE(t,e){return Hr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function IE(t,e=!1){const n=pt(t),s=await n.getIdToken(e),r=ol(s);W(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:lr(va(r.auth_time)),issuedAtTime:lr(va(r.iat)),expirationTime:lr(va(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function va(t){return Number(t)*1e3}function ol(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Pi("JWT malformed, contained fewer than 3 sections"),null;try{const r=Xd(n);return r?JSON.parse(r):(Pi("Failed to decode base64 JWT payload"),null)}catch(r){return Pi("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function TE(t){const e=ol(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Zt&&bE(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function bE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=lr(this.lastLoginAt),this.creationTime=lr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yi(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Cr(t,EE(n,{idToken:s}));W(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?RE(i.providerUserInfo):[],a=AE(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new gp(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function CE(t){const e=pt(t);await Yi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AE(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function RE(t){return t.map(e=>{var{providerId:n}=e,s=sl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kE(t,e){const n=await dp(t,{},async()=>{const s=jr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=pp(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",hp.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):TE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await kE(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Ar;return s&&(W(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(W(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(W(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ar,this.toJSON())}_performRefresh(){return qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $n{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=sl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new SE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new gp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Cr(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return IE(this,e)}reload(){return CE(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Yi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Cr(this,_E(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,P=(l=n.createdAt)!==null&&l!==void 0?l:void 0,O=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:j,emailVerified:M,isAnonymous:ee,providerData:ye,stsTokenManager:Ie}=n;W(j&&Ie,e,"internal-error");const X=Ar.fromJSON(this.name,Ie);W(typeof j=="string",e,"internal-error"),rn(h,e.name),rn(d,e.name),W(typeof M=="boolean",e,"internal-error"),W(typeof ee=="boolean",e,"internal-error"),rn(g,e.name),rn(_,e.name),rn(b,e.name),rn(A,e.name),rn(P,e.name),rn(O,e.name);const J=new $n({uid:j,auth:e,email:d,emailVerified:M,displayName:h,isAnonymous:ee,photoURL:_,phoneNumber:g,tenantId:b,stsTokenManager:X,createdAt:P,lastLoginAt:O});return ye&&Array.isArray(ye)&&(J.providerData=ye.map(_e=>Object.assign({},_e))),A&&(J._redirectEventId=A),J}static async _fromIdTokenResponse(e,n,s=!1){const r=new Ar;r.updateFromServerResponse(n);const i=new $n({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Yi(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=new Map;function Ht(t){Gt(t instanceof Function,"Expected a class definition");let e=_h.get(t);return e?(Gt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_h.set(t,e),e)}/**
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
 */class mp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}mp.type="NONE";const Eh=mp;/**
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
 */function Oi(t,e,n){return`firebase:${t}:${e}:${n}`}class fs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Oi(this.userKey,r.apiKey,i),this.fullPersistenceKey=Oi("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new fs(Ht(Eh),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||Ht(Eh);const o=Oi(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=$n._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new fs(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new fs(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ep(e))return"Blackberry";if(Ip(e))return"Webos";if(al(e))return"Safari";if((e.includes("chrome/")||vp(e))&&!e.includes("edge/"))return"Chrome";if(_p(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function yp(t=Je()){return/firefox\//i.test(t)}function al(t=Je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vp(t=Je()){return/crios\//i.test(t)}function wp(t=Je()){return/iemobile/i.test(t)}function _p(t=Je()){return/android/i.test(t)}function Ep(t=Je()){return/blackberry/i.test(t)}function Ip(t=Je()){return/webos/i.test(t)}function ko(t=Je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function NE(t=Je()){var e;return ko(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function DE(){return Q_()&&document.documentMode===10}function Tp(t=Je()){return ko(t)||_p(t)||Ip(t)||Ep(t)||/windows phone/i.test(t)||wp(t)}function PE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(t,e=[]){let n;switch(t){case"Browser":n=Ih(Je());break;case"Worker":n=`${Ih(Je())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$s}/${s}`}async function Sp(t,e){return Hr(t,"GET","/v2/recaptchaConfig",fp(t,e))}function Th(t){return t!==void 0&&t.enterprise!==void 0}class Cp{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ap(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Ot("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",OE().appendChild(s)})}function xE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ME="https://www.google.com/recaptcha/enterprise.js?render=",LE="recaptcha-enterprise",FE="NO_RECAPTCHA";class UE{constructor(e){this.type=LE,this.auth=zr(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Sp(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Cp(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;Th(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(FE)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&Th(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Ap(ME+a).then(()=>{r(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}/**
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
 */class VE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bh(this),this.idTokenSubscription=new bh(this),this.beforeStateQueue=new VE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ht(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await fs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Yi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?pt(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ht(e))})}async initializeRecaptchaConfig(){const e=await Sp(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Cp(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new UE(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Br("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ht(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await fs.create(this,[Ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return W(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&hE(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function zr(t){return pt(t)}class bh{constructor(e){this.auth=e,this.observer=null,this.addObserver=n0(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BE(t,e){const n=nl(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Wi(i,e??{}))return r;Lt(r,"already-initialized")}return n.initialize({options:e})}function jE(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ht);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function qE(t,e,n){const s=zr(t);W(s._canInitEmulator,s,"emulator-config-failed"),W(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Rp(e),{host:o,port:a}=HE(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||zE()}function Rp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function HE(t){const e=Rp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Sh(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Sh(o)}}}function Sh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qt("not implemented")}_getIdTokenResponse(e){return qt("not implemented")}_linkToIdToken(e,n){return qt("not implemented")}_getReauthenticationResolver(e){return qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ds(t,e){return vE(t,"POST","/v1/accounts:signInWithIdp",fp(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE="http://localhost";class Wn extends kp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Lt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=sl(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Wn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ds(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ds(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ds(e,n)}buildRequest(){const e={requestUri:KE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=jr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Kr extends cl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends Kr{constructor(){super("facebook.com")}static credential(e){return Wn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ln.credential(e.oauthAccessToken)}catch{return null}}}ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";ln.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends Kr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return jt.credential(n,s)}catch{return null}}}jt.GOOGLE_SIGN_IN_METHOD="google.com";jt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un extends Kr{constructor(){super("github.com")}static credential(e){return Wn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return un.credentialFromTaggedObject(e)}static credentialFromError(e){return un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return un.credential(e.oauthAccessToken)}catch{return null}}}un.GITHUB_SIGN_IN_METHOD="github.com";un.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends Kr{constructor(){super("twitter.com")}static credential(e,n){return Wn._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return hn.credential(n,s)}catch{return null}}}hn.TWITTER_SIGN_IN_METHOD="twitter.com";hn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await $n._fromIdTokenResponse(e,s,r),o=Ch(s);return new As({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Ch(s);return new As({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Ch(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji extends Zt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Ji.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Ji(e,n,s,r)}}function Np(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ji._fromErrorAndOperation(t,i,e,s):i})}async function WE(t,e,n=!1){const s=await Cr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return As._forOperation(t,"link",s)}/**
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
 */async function GE(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Cr(t,Np(s,r,e,t),n);W(i.idToken,s,"internal-error");const o=ol(i.idToken);W(o,s,"internal-error");const{sub:a}=o;return W(t.uid===a,s,"user-mismatch"),As._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Lt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QE(t,e,n=!1){const s="signIn",r=await Np(t,s,e),i=await As._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function YE(t,e,n,s){return pt(t).onIdTokenChanged(e,n,s)}function JE(t,e,n){return pt(t).beforeAuthStateChanged(e,n)}function XE(t,e,n,s){return pt(t).onAuthStateChanged(e,n,s)}function Dp(t){return pt(t).signOut()}const Xi="__sak";/**
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
 */class Pp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xi,"1"),this.storage.removeItem(Xi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(){const t=Je();return al(t)||ko(t)}const eI=1e3,tI=10;class Op extends Pp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ZE()&&PE(),this.fallbackToPolling=Tp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);DE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,tI):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},eI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Op.type="LOCAL";const nI=Op;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp extends Pp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}xp.type="SESSION";const Mp=xp;/**
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
 */function sI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class No{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new No(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await sI(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}No.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class rI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=ll("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(){return window}function iI(t){xt().location.href=t}/**
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
 */function Lp(){return typeof xt().WorkerGlobalScope<"u"&&typeof xt().importScripts=="function"}async function oI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function cI(){return Lp()?self:null}/**
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
 */const Fp="firebaseLocalStorageDb",lI=1,Zi="firebaseLocalStorage",Up="fbase_key";class Wr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Do(t,e){return t.transaction([Zi],e?"readwrite":"readonly").objectStore(Zi)}function uI(){const t=indexedDB.deleteDatabase(Fp);return new Wr(t).toPromise()}function nc(){const t=indexedDB.open(Fp,lI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Zi,{keyPath:Up})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Zi)?e(s):(s.close(),await uI(),e(await nc()))})})}async function Ah(t,e,n){const s=Do(t,!0).put({[Up]:e,value:n});return new Wr(s).toPromise()}async function hI(t,e){const n=Do(t,!1).get(e),s=await new Wr(n).toPromise();return s===void 0?null:s.value}function Rh(t,e){const n=Do(t,!0).delete(e);return new Wr(n).toPromise()}const fI=800,dI=3;class Vp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>dI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=No._getInstance(cI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await oI(),!this.activeServiceWorker)return;this.sender=new rI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nc();return await Ah(e,Xi,"1"),await Rh(e,Xi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ah(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>hI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Rh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Do(r,!1).getAll();return new Wr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vp.type="LOCAL";const pI=Vp;new qr(3e4,6e4);/**
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
 */function $p(t,e){return e?Ht(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ul extends kp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ds(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ds(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gI(t){return QE(t.auth,new ul(t),t.bypassAuthState)}function mI(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),GE(n,new ul(t),t.bypassAuthState)}async function yI(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),WE(n,new ul(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gI;case"linkViaPopup":case"linkViaRedirect":return yI;case"reauthViaPopup":case"reauthViaRedirect":return mI;default:Lt(this.auth,"internal-error")}}resolve(e){Gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI=new qr(2e3,1e4);async function wI(t,e,n){const s=zr(t);fE(t,e,cl);const r=$p(s,n);return new xn(s,"signInViaPopup",e,r).executeNotNull()}class xn extends Bp{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,xn.currentPopupAction&&xn.currentPopupAction.cancel(),xn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){Gt(this.filter.length===1,"Popup operations only handle one event");const e=ll();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vI.get())};e()}}xn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I="pendingRedirect",xi=new Map;class EI extends Bp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=xi.get(this.auth._key());if(!e){try{const s=await II(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}xi.set(this.auth._key(),e)}return this.bypassAuthState||xi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function II(t,e){const n=SI(e),s=bI(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function TI(t,e){xi.set(t._key(),e)}function bI(t){return Ht(t._redirectPersistence)}function SI(t){return Oi(_I,t.config.apiKey,t.name)}async function CI(t,e,n=!1){const s=zr(t),r=$p(s,e),o=await new EI(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI=10*60*1e3;class RI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!jp(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ot(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AI&&this.cachedEventUids.clear(),this.cachedEventUids.has(kh(e))}saveEventToCache(e){this.cachedEventUids.add(kh(e)),this.lastProcessedEventTime=Date.now()}}function kh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function jp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NI(t,e={}){return Hr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,PI=/^https?/;async function OI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await NI(t);for(const n of e)try{if(xI(n))return}catch{}Lt(t,"unauthorized-domain")}function xI(t){const e=tc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!PI.test(n))return!1;if(DI.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const MI=new qr(3e4,6e4);function Nh(){const t=xt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function LI(t){return new Promise((e,n)=>{var s,r,i;function o(){Nh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nh(),n(Ot(t,"network-request-failed"))},timeout:MI.get()})}if(!((r=(s=xt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=xt().gapi)===null||i===void 0)&&i.load)o();else{const a=xE("iframefcb");return xt()[a]=()=>{gapi.load?o():n(Ot(t,"network-request-failed"))},Ap(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Mi=null,e})}let Mi=null;function FI(t){return Mi=Mi||LI(t),Mi}/**
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
 */const UI=new qr(5e3,15e3),VI="__/auth/iframe",$I="emulator/auth/iframe",BI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qI(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?il(e,$I):`https://${t.config.authDomain}/${VI}`,s={apiKey:e.apiKey,appName:t.name,v:$s},r=jI.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${jr(s).slice(1)}`}async function HI(t){const e=await FI(t),n=xt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:qI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BI,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Ot(t,"network-request-failed"),a=xt().setTimeout(()=>{i(o)},UI.get());function c(){xt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const zI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},KI=500,WI=600,GI="_blank",QI="http://localhost";class Dh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YI(t,e,n,s=KI,r=WI){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},zI),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Je().toLowerCase();n&&(a=vp(l)?GI:n),yp(l)&&(e=e||QI,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,_])=>`${d}${g}=${_},`,"");if(NE(l)&&a!=="_self")return JI(e||"",a),new Dh(null);const h=window.open(e||"",a,u);W(h,t,"popup-blocked");try{h.focus()}catch{}return new Dh(h)}function JI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const XI="__/auth/handler",ZI="emulator/auth/handler",eT=encodeURIComponent("fac");async function Ph(t,e,n,s,r,i){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:$s,eventId:r};if(e instanceof cl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",t0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Kr){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${eT}=${encodeURIComponent(c)}`:"";return`${tT(t)}?${jr(a).slice(1)}${l}`}function tT({config:t}){return t.emulator?il(t,ZI):`https://${t.authDomain}/${XI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa="webStorageSupport";class nT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mp,this._completeRedirectFn=CI,this._overrideRedirectResult=TI}async _openPopup(e,n,s,r){var i;Gt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ph(e,n,s,tc(),r);return YI(e,o,ll())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Ph(e,n,s,tc(),r);return iI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Gt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await HI(e),s=new RI(e);return n.register("authEvent",r=>(W(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wa,{type:wa},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[wa];o!==void 0&&n(!!o),Lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=OI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Tp()||al()||ko()}}const sT=nT;var Oh="@firebase/auth",xh="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function oT(t){Cs(new zn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bp(t)},l=new $E(s,r,i,c);return jE(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Cs(new zn("auth-internal",e=>{const n=zr(e.getProvider("auth").getImmediate());return(s=>new rT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_n(Oh,xh,iT(t)),_n(Oh,xh,"esm2017")}/**
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
 */const aT=5*60,cT=tp("authIdTokenMaxAge")||aT;let Mh=null;const lT=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>cT)return;const r=n==null?void 0:n.token;Mh!==r&&(Mh=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function eo(t=ip()){const e=nl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=BE(t,{popupRedirectResolver:sT,persistence:[pI,nI,Mp]}),s=tp("authTokenSyncURL");if(s){const i=lT(s);JE(n,i,()=>i(n.currentUser)),YE(n,o=>i(o))}const r=Zd("auth");return r&&qE(n,`http://${r}`),n}oT("Browser");const hl=kw("user",{state:()=>({user:null}),getters:{userDisplayName(t){if(t.user)return t.user.displayName},userEmail(t){if(t.user)return t.user.email}},actions:{setUser(t){this.user=t}}});var uT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,fl=fl||{},z=uT||self;function Po(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Gr(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function hT(t){return Object.prototype.hasOwnProperty.call(t,_a)&&t[_a]||(t[_a]=++fT)}var _a="closure_uid_"+(1e9*Math.random()>>>0),fT=0;function dT(t,e,n){return t.call.apply(t.bind,arguments)}function pT(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function Ge(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ge=dT:Ge=pT,Ge.apply(null,arguments)}function yi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Fe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Sn(){this.s=this.s,this.o=this.o}var gT=0;Sn.prototype.s=!1;Sn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),gT!=0)&&hT(this)};Sn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const qp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function dl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Lh(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(Po(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Qe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Qe.prototype.h=function(){this.defaultPrevented=!0};var mT=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",()=>{},e),z.removeEventListener("test",()=>{},e)}catch{}return t}();function Rr(t){return/^[\s\xa0]*$/.test(t)}function Oo(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function Rt(t){return Oo().indexOf(t)!=-1}function pl(t){return pl[" "](t),t}pl[" "]=function(){};function yT(t,e){var n=lb;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var vT=Rt("Opera"),Rs=Rt("Trident")||Rt("MSIE"),Hp=Rt("Edge"),sc=Hp||Rs,zp=Rt("Gecko")&&!(Oo().toLowerCase().indexOf("webkit")!=-1&&!Rt("Edge"))&&!(Rt("Trident")||Rt("MSIE"))&&!Rt("Edge"),wT=Oo().toLowerCase().indexOf("webkit")!=-1&&!Rt("Edge");function Kp(){var t=z.document;return t?t.documentMode:void 0}var rc;e:{var Ea="",Ia=function(){var t=Oo();if(zp)return/rv:([^\);]+)(\)|;)/.exec(t);if(Hp)return/Edge\/([\d\.]+)/.exec(t);if(Rs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(wT)return/WebKit\/(\S+)/.exec(t);if(vT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ia&&(Ea=Ia?Ia[1]:""),Rs){var Ta=Kp();if(Ta!=null&&Ta>parseFloat(Ea)){rc=String(Ta);break e}}rc=Ea}var ic;if(z.document&&Rs){var Fh=Kp();ic=Fh||parseInt(rc,10)||void 0}else ic=void 0;var _T=ic;function kr(t,e){if(Qe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(zp){e:{try{pl(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ET[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&kr.$.h.call(this)}}Fe(kr,Qe);var ET={2:"touch",3:"pen",4:"mouse"};kr.prototype.h=function(){kr.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Qr="closure_listenable_"+(1e6*Math.random()|0),IT=0;function TT(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=r,this.key=++IT,this.fa=this.ia=!1}function xo(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function gl(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function bT(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Wp(t){const e={};for(const n in t)e[n]=t[n];return e}const Uh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Gp(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Uh.length;i++)n=Uh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Mo(t){this.src=t,this.g={},this.h=0}Mo.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=ac(t,e,s,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new TT(e,this.src,i,!!s,r),e.ia=n,t.push(e)),e};function oc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=qp(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(xo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ac(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==s)return r}return-1}var ml="closure_lm_"+(1e6*Math.random()|0),ba={};function Qp(t,e,n,s,r){if(s&&s.once)return Jp(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Qp(t,e[i],n,s,r);return null}return n=wl(n),t&&t[Qr]?t.O(e,n,Gr(s)?!!s.capture:!!s,r):Yp(t,e,n,!1,s,r)}function Yp(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Gr(r)?!!r.capture:!!r,a=vl(t);if(a||(t[ml]=a=new Mo(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=ST(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)mT||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Zp(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ST(){function t(n){return e.call(t.src,t.listener,n)}const e=CT;return t}function Jp(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Jp(t,e[i],n,s,r);return null}return n=wl(n),t&&t[Qr]?t.P(e,n,Gr(s)?!!s.capture:!!s,r):Yp(t,e,n,!0,s,r)}function Xp(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Xp(t,e[i],n,s,r);else s=Gr(s)?!!s.capture:!!s,n=wl(n),t&&t[Qr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=ac(i,n,s,r),-1<n&&(xo(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=vl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ac(e,n,s,r)),(n=-1<t?e[t]:null)&&yl(n))}function yl(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Qr])oc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Zp(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=vl(e))?(oc(n,t),n.h==0&&(n.src=null,e[ml]=null)):xo(t)}}}function Zp(t){return t in ba?ba[t]:ba[t]="on"+t}function CT(t,e){if(t.fa)t=!0;else{e=new kr(e,this);var n=t.listener,s=t.la||t.src;t.ia&&yl(t),t=n.call(s,e)}return t}function vl(t){return t=t[ml],t instanceof Mo?t:null}var Sa="__closure_events_fn_"+(1e9*Math.random()>>>0);function wl(t){return typeof t=="function"?t:(t[Sa]||(t[Sa]=function(e){return t.handleEvent(e)}),t[Sa])}function Le(){Sn.call(this),this.i=new Mo(this),this.S=this,this.J=null}Fe(Le,Sn);Le.prototype[Qr]=!0;Le.prototype.removeEventListener=function(t,e,n,s){Xp(this,t,e,n,s)};function Be(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new Qe(e,t);else if(e instanceof Qe)e.target=e.target||t;else{var r=e;e=new Qe(s,t),Gp(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=vi(o,s,!0,e)&&r}if(o=e.g=t,r=vi(o,s,!0,e)&&r,r=vi(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=vi(o,s,!1,e)&&r}Le.prototype.N=function(){if(Le.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)xo(n[s]);delete t.g[e],t.h--}}this.J=null};Le.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Le.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function vi(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&oc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var _l=z.JSON.stringify;class AT{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function RT(){var t=El;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class kT{constructor(){this.h=this.g=null}add(e,n){const s=eg.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var eg=new AT(()=>new NT,t=>t.reset());class NT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function DT(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function PT(t){z.setTimeout(()=>{throw t},0)}let Nr,Dr=!1,El=new kT,tg=()=>{const t=z.Promise.resolve(void 0);Nr=()=>{t.then(OT)}};var OT=()=>{for(var t;t=RT();){try{t.h.call(t.g)}catch(n){PT(n)}var e=eg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Dr=!1};function Lo(t,e){Le.call(this),this.h=t||1,this.g=e||z,this.j=Ge(this.qb,this),this.l=Date.now()}Fe(Lo,Le);N=Lo.prototype;N.ga=!1;N.T=null;N.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Be(this,"tick"),this.ga&&(Il(this),this.start()))}};N.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Il(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}N.N=function(){Lo.$.N.call(this),Il(this),delete this.g};function Tl(t,e,n){if(typeof t=="function")n&&(t=Ge(t,n));else if(t&&typeof t.handleEvent=="function")t=Ge(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function ng(t){t.g=Tl(()=>{t.g=null,t.i&&(t.i=!1,ng(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class xT extends Sn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ng(this)}N(){super.N(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pr(t){Sn.call(this),this.h=t,this.g={}}Fe(Pr,Sn);var Vh=[];function sg(t,e,n,s){Array.isArray(n)||(n&&(Vh[0]=n.toString()),n=Vh);for(var r=0;r<n.length;r++){var i=Qp(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function rg(t){gl(t.g,function(e,n){this.g.hasOwnProperty(n)&&yl(e)},t),t.g={}}Pr.prototype.N=function(){Pr.$.N.call(this),rg(this)};Pr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Fo(){this.g=!0}Fo.prototype.Ea=function(){this.g=!1};function MT(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function LT(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function cs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+UT(t,n)+(s?" "+s:"")})}function FT(t,e){t.info(function(){return"TIMEOUT: "+e})}Fo.prototype.info=function(){};function UT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return _l(n)}catch{return e}}var Jn={},$h=null;function Uo(){return $h=$h||new Le}Jn.Ta="serverreachability";function ig(t){Qe.call(this,Jn.Ta,t)}Fe(ig,Qe);function Or(t){const e=Uo();Be(e,new ig(e))}Jn.STAT_EVENT="statevent";function og(t,e){Qe.call(this,Jn.STAT_EVENT,t),this.stat=e}Fe(og,Qe);function tt(t){const e=Uo();Be(e,new og(e,t))}Jn.Ua="timingevent";function ag(t,e){Qe.call(this,Jn.Ua,t),this.size=e}Fe(ag,Qe);function Yr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var Vo={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},cg={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function bl(){}bl.prototype.h=null;function Bh(t){return t.h||(t.h=t.i())}function lg(){}var Jr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Sl(){Qe.call(this,"d")}Fe(Sl,Qe);function Cl(){Qe.call(this,"c")}Fe(Cl,Qe);var cc;function $o(){}Fe($o,bl);$o.prototype.g=function(){return new XMLHttpRequest};$o.prototype.i=function(){return{}};cc=new $o;function Xr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new Pr(this),this.P=VT,t=sc?125:void 0,this.V=new Lo(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ug}function ug(){this.i=null,this.g="",this.h=!1}var VT=45e3,lc={},to={};N=Xr.prototype;N.setTimeout=function(t){this.P=t};function uc(t,e,n){t.L=1,t.v=jo(Qt(e)),t.s=n,t.S=!0,hg(t,null)}function hg(t,e){t.G=Date.now(),Zr(t),t.A=Qt(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),wg(n.i,"t",s),t.C=0,n=t.l.J,t.h=new ug,t.g=$g(t.l,n?e:null,!t.s),0<t.O&&(t.M=new xT(Ge(t.Pa,t,t.g),t.O)),sg(t.U,t.g,"readystatechange",t.nb),e=t.I?Wp(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Or(),MT(t.j,t.u,t.A,t.m,t.W,t.s)}N.nb=function(t){t=t.target;const e=this.M;e&&Nt(t)==3?e.l():this.Pa(t)};N.Pa=function(t){try{if(t==this.g)e:{const u=Nt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||sc||this.g&&(this.h.h||this.g.ja()||zh(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Or(3):Or(2)),Bo(this);var n=this.g.da();this.ca=n;t:if(fg(this)){var s=zh(this.g);t="";var r=s.length,i=Nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mn(this),ur(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,LT(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Rr(a)){var l=a;break t}}l=null}if(n=l)cs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,hc(this,n);else{this.i=!1,this.o=3,tt(12),Mn(this),ur(this);break e}}this.S?(dg(this,u,o),sc&&this.i&&u==3&&(sg(this.U,this.V,"tick",this.mb),this.V.start())):(cs(this.j,this.m,o,null),hc(this,o)),u==4&&Mn(this),this.i&&!this.J&&(u==4?Lg(this.l,this):(this.i=!1,Zr(this)))}else ob(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,tt(12)):(this.o=0,tt(13)),Mn(this),ur(this)}}}catch{}finally{}};function fg(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function dg(t,e,n){let s=!0,r;for(;!t.J&&t.C<n.length;)if(r=$T(t,n),r==to){e==4&&(t.o=4,tt(14),s=!1),cs(t.j,t.m,null,"[Incomplete Response]");break}else if(r==lc){t.o=4,tt(15),cs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else cs(t.j,t.m,r,null),hc(t,r);fg(t)&&r!=to&&r!=lc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,tt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Pl(e),e.M=!0,tt(11))):(cs(t.j,t.m,n,"[Invalid Chunked Response]"),Mn(t),ur(t))}N.mb=function(){if(this.g){var t=Nt(this.g),e=this.g.ja();this.C<e.length&&(Bo(this),dg(this,t,e),this.i&&t!=4&&Zr(this))}};function $T(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?to:(n=Number(e.substring(n,s)),isNaN(n)?lc:(s+=1,s+n>e.length?to:(e=e.slice(s,s+n),t.C=s+n,e)))}N.cancel=function(){this.J=!0,Mn(this)};function Zr(t){t.Y=Date.now()+t.P,pg(t,t.P)}function pg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Yr(Ge(t.lb,t),e)}function Bo(t){t.B&&(z.clearTimeout(t.B),t.B=null)}N.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(FT(this.j,this.A),this.L!=2&&(Or(),tt(17)),Mn(this),this.o=2,ur(this)):pg(this,this.Y-t)};function ur(t){t.l.H==0||t.J||Lg(t.l,t)}function Mn(t){Bo(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Il(t.V),rg(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function hc(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||fc(n.i,t))){if(!t.K&&fc(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ro(n),zo(n);else break e;Dl(n),tt(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=Yr(Ge(n.ib,n),6e3));if(1>=Ig(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ln(n,11)}else if((t.K||n.g==t)&&ro(n),!Rr(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const _=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var i=s.i;i.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Al(i,i.h),i.h=null))}if(s.F){const b=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(s.Da=b,we(s.I,s.F,b))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=Vg(s,s.J?s.pa:null,s.Y),o.K){Tg(s.i,o);var a=o,c=s.L;c&&a.setTimeout(c),a.B&&(Bo(a),Zr(a)),s.g=o}else xg(s);0<n.j.length&&Ko(n)}else l[0]!="stop"&&l[0]!="close"||Ln(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Ln(n,7):Nl(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Or(4)}catch{}}function BT(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Po(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function jT(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Po(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function gg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Po(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=jT(t),s=BT(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var mg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Bn(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Bn){this.h=t.h,no(this,t.j),this.s=t.s,this.g=t.g,so(this,t.m),this.l=t.l;var e=t.i,n=new xr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),jh(this,n),this.o=t.o}else t&&(e=String(t).match(mg))?(this.h=!1,no(this,e[1]||"",!0),this.s=Zs(e[2]||""),this.g=Zs(e[3]||"",!0),so(this,e[4]),this.l=Zs(e[5]||"",!0),jh(this,e[6]||"",!0),this.o=Zs(e[7]||"")):(this.h=!1,this.i=new xr(null,this.h))}Bn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(er(e,qh,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(er(e,qh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(er(n,n.charAt(0)=="/"?KT:zT,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",er(n,GT)),t.join("")};function Qt(t){return new Bn(t)}function no(t,e,n){t.j=n?Zs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function so(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function jh(t,e,n){e instanceof xr?(t.i=e,QT(t.i,t.h)):(n||(e=er(e,WT)),t.i=new xr(e,t.h))}function we(t,e,n){t.i.set(e,n)}function jo(t){return we(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Zs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function er(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,HT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function HT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var qh=/[#\/\?@]/g,zT=/[#\?:]/g,KT=/[#\?]/g,WT=/[#\?@]/g,GT=/#/g;function xr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Cn(t){t.g||(t.g=new Map,t.h=0,t.i&&qT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=xr.prototype;N.add=function(t,e){Cn(this),this.i=null,t=Bs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function yg(t,e){Cn(t),e=Bs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function vg(t,e){return Cn(t),e=Bs(t,e),t.g.has(e)}N.forEach=function(t,e){Cn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};N.ta=function(){Cn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};N.Z=function(t){Cn(this);let e=[];if(typeof t=="string")vg(this,t)&&(e=e.concat(this.g.get(Bs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return Cn(this),this.i=null,t=Bs(this,t),vg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function wg(t,e,n){yg(t,e),0<n.length&&(t.i=null,t.g.set(Bs(t,e),dl(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Bs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function QT(t,e){e&&!t.j&&(Cn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(yg(this,s),wg(this,r,n))},t)),t.j=e}var YT=class{constructor(t,e){this.g=t,this.map=e}};function _g(t){this.l=t||JT,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ka&&z.g.Ka()&&z.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var JT=10;function Eg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ig(t){return t.h?1:t.g?t.g.size:0}function fc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Al(t,e){t.g?t.g.add(e):t.h=e}function Tg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}_g.prototype.cancel=function(){if(this.i=bg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function bg(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return dl(t.i)}var XT=class{stringify(t){return z.JSON.stringify(t,void 0)}parse(t){return z.JSON.parse(t,void 0)}};function ZT(){this.g=new XT}function eb(t,e,n){const s=n||"";try{gg(t,function(r,i){let o=r;Gr(r)&&(o=_l(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function tb(t,e){const n=new Fo;if(z.Image){const s=new Image;s.onload=yi(wi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=yi(wi,n,s,"TestLoadImage: error",!1,e),s.onabort=yi(wi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=yi(wi,n,s,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function wi(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function ei(t){this.l=t.fc||null,this.j=t.ob||!1}Fe(ei,bl);ei.prototype.g=function(){return new qo(this.l,this.j)};ei.prototype.i=function(t){return function(){return t}}({});function qo(t,e){Le.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Rl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Fe(qo,Le);var Rl=0;N=qo.prototype;N.open=function(t,e){if(this.readyState!=Rl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Mr(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||z).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ti(this)),this.readyState=Rl};N.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Mr(this)),this.g&&(this.readyState=3,Mr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Sg(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Sg(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}N.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ti(this):Mr(this),this.readyState==3&&Sg(this)}};N.Za=function(t){this.g&&(this.response=this.responseText=t,ti(this))};N.Ya=function(t){this.g&&(this.response=t,ti(this))};N.ka=function(){this.g&&ti(this)};function ti(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Mr(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Mr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(qo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var nb=z.JSON.parse;function Te(t){Le.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Cg,this.L=this.M=!1}Fe(Te,Le);var Cg="",sb=/^https?$/i,rb=["POST","PUT"];N=Te.prototype;N.Oa=function(t){this.M=t};N.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():cc.g(),this.C=this.u?Bh(this.u):Bh(cc),this.g.onreadystatechange=Ge(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Hh(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=z.FormData&&t instanceof z.FormData,!(0<=qp(rb,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{kg(this),0<this.B&&((this.L=ib(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ge(this.ua,this)):this.A=Tl(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Hh(this,i)}};function ib(t){return Rs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.ua=function(){typeof fl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Be(this,"timeout"),this.abort(8))};function Hh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ag(t),Ho(t)}function Ag(t){t.F||(t.F=!0,Be(t,"complete"),Be(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Be(this,"complete"),Be(this,"abort"),Ho(this))};N.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ho(this,!0)),Te.$.N.call(this)};N.La=function(){this.s||(this.G||this.v||this.l?Rg(this):this.kb())};N.kb=function(){Rg(this)};function Rg(t){if(t.h&&typeof fl<"u"&&(!t.C[1]||Nt(t)!=4||t.da()!=2)){if(t.v&&Nt(t)==4)Tl(t.La,0,t);else if(Be(t,"readystatechange"),Nt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var r=String(t.I).match(mg)[1]||null;!r&&z.self&&z.self.location&&(r=z.self.location.protocol.slice(0,-1)),s=!sb.test(r?r.toLowerCase():"")}n=s}if(n)Be(t,"complete"),Be(t,"success");else{t.m=6;try{var i=2<Nt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Ag(t)}}finally{Ho(t)}}}}function Ho(t,e){if(t.g){kg(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Be(t,"ready");try{n.onreadystatechange=s}catch{}}}function kg(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}N.isActive=function(){return!!this.g};function Nt(t){return t.g?t.g.readyState:0}N.da=function(){try{return 2<Nt(this)?this.g.status:-1}catch{return-1}};N.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),nb(e)}};function zh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Cg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function ob(t){const e={};t=(t.g&&2<=Nt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(Rr(t[s]))continue;var n=DT(t[s]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[r]||[];e[r]=i,i.push(n)}bT(e,function(s){return s.join(", ")})}N.Ia=function(){return this.m};N.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ng(t){let e="";return gl(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function kl(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Ng(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):we(t,e,n))}function Qs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Dg(t){this.Ga=0,this.j=[],this.l=new Fo,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Qs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Qs("baseRetryDelayMs",5e3,t),this.hb=Qs("retryDelaySeedMs",1e4,t),this.eb=Qs("forwardChannelMaxRetries",2,t),this.xa=Qs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new _g(t&&t.concurrentRequestLimit),this.Ja=new ZT,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}N=Dg.prototype;N.ra=8;N.H=1;function Nl(t){if(Pg(t),t.H==3){var e=t.W++,n=Qt(t.I);if(we(n,"SID",t.K),we(n,"RID",e),we(n,"TYPE","terminate"),ni(t,n),e=new Xr(t,t.l,e),e.L=2,e.v=jo(Qt(n)),n=!1,z.navigator&&z.navigator.sendBeacon)try{n=z.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=$g(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Zr(e)}Ug(t)}function zo(t){t.g&&(Pl(t),t.g.cancel(),t.g=null)}function Pg(t){zo(t),t.u&&(z.clearTimeout(t.u),t.u=null),ro(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function Ko(t){if(!Eg(t.i)&&!t.m){t.m=!0;var e=t.Na;Nr||tg(),Dr||(Nr(),Dr=!0),El.add(e,t),t.C=0}}function ab(t,e){return Ig(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Yr(Ge(t.Na,t,e),Fg(t,t.C)),t.C++,!0)}N.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Xr(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Wp(i),Gp(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Og(this,r,e),n=Qt(this.I),we(n,"RID",t),we(n,"CVER",22),this.F&&we(n,"X-HTTP-Session-Id",this.F),ni(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Ng(i)))+"&"+e:this.o&&kl(n,this.o,i)),Al(this.i,r),this.bb&&we(n,"TYPE","init"),this.P?(we(n,"$req",e),we(n,"SID","null"),r.aa=!0,uc(r,n,null)):uc(r,n,e),this.H=2}}else this.H==3&&(t?Kh(this,t):this.j.length==0||Eg(this.i)||Kh(this))};function Kh(t,e){var n;e?n=e.m:n=t.W++;const s=Qt(t.I);we(s,"SID",t.K),we(s,"RID",n),we(s,"AID",t.V),ni(t,s),t.o&&t.s&&kl(s,t.o,t.s),n=new Xr(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Og(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Al(t.i,n),uc(n,s,e)}function ni(t,e){t.na&&gl(t.na,function(n,s){we(e,s,n)}),t.h&&gg({},function(n,s){we(e,s,n)})}function Og(t,e,n){n=Math.min(t.j.length,n);var s=t.h?Ge(t.h.Va,t.h,t):null;e:{var r=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=r[c].g;const u=r[c].map;if(l-=i,0>l)i=Math.max(0,r[c].g-100),a=!1;else try{eb(u,o,"req"+l+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function xg(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Nr||tg(),Dr||(Nr(),Dr=!0),El.add(e,t),t.A=0}}function Dl(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Yr(Ge(t.Ma,t),Fg(t,t.A)),t.A++,!0)}N.Ma=function(){if(this.u=null,Mg(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Yr(Ge(this.jb,this),t)}};N.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,tt(10),zo(this),Mg(this))};function Pl(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function Mg(t){t.g=new Xr(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Qt(t.wa);we(e,"RID","rpc"),we(e,"SID",t.K),we(e,"AID",t.V),we(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&we(e,"TO",t.qa),we(e,"TYPE","xmlhttp"),ni(t,e),t.o&&t.s&&kl(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=jo(Qt(e)),n.s=null,n.S=!0,hg(n,t)}N.ib=function(){this.v!=null&&(this.v=null,zo(this),Dl(this),tt(19))};function ro(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function Lg(t,e){var n=null;if(t.g==e){ro(t),Pl(t),t.g=null;var s=2}else if(fc(t.i,e))n=e.F,Tg(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;s=Uo(),Be(s,new ag(s,n)),Ko(t)}else xg(t);else if(r=e.o,r==3||r==0&&0<e.ca||!(s==1&&ab(t,e)||s==2&&Dl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Ln(t,5);break;case 4:Ln(t,10);break;case 3:Ln(t,6);break;default:Ln(t,2)}}}function Fg(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ln(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=Ge(t.pb,t);n||(n=new Bn("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||no(n,"https"),jo(n)),tb(n.toString(),s)}else tt(2);t.H=0,t.h&&t.h.za(e),Ug(t),Pg(t)}N.pb=function(t){t?(this.l.info("Successfully pinged google.com"),tt(2)):(this.l.info("Failed to ping google.com"),tt(1))};function Ug(t){if(t.H=0,t.ma=[],t.h){const e=bg(t.i);(e.length!=0||t.j.length!=0)&&(Lh(t.ma,e),Lh(t.ma,t.j),t.i.i.length=0,dl(t.j),t.j.length=0),t.h.ya()}}function Vg(t,e,n){var s=n instanceof Bn?Qt(n):new Bn(n);if(s.g!="")e&&(s.g=e+"."+s.g),so(s,s.m);else{var r=z.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Bn(null);s&&no(i,s),e&&(i.g=e),r&&so(i,r),n&&(i.l=n),s=i}return n=t.F,e=t.Da,n&&e&&we(s,n,e),we(s,"VER",t.ra),ni(t,s),s}function $g(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Te(new ei({ob:!0})):new Te(t.va),e.Oa(t.J),e}N.isActive=function(){return!!this.h&&this.h.isActive(this)};function Bg(){}N=Bg.prototype;N.Ba=function(){};N.Aa=function(){};N.za=function(){};N.ya=function(){};N.isActive=function(){return!0};N.Va=function(){};function io(){if(Rs&&!(10<=Number(_T)))throw Error("Environmental error: no available transport.")}io.prototype.g=function(t,e){return new ut(t,e)};function ut(t,e){Le.call(this),this.g=new Dg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Rr(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Rr(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new js(this)}Fe(ut,Le);ut.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;tt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Vg(t,null,t.Y),Ko(t)};ut.prototype.close=function(){Nl(this.g)};ut.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=_l(t),t=n);e.j.push(new YT(e.fb++,t)),e.H==3&&Ko(e)};ut.prototype.N=function(){this.g.h=null,delete this.j,Nl(this.g),delete this.g,ut.$.N.call(this)};function jg(t){Sl.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Fe(jg,Sl);function qg(){Cl.call(this),this.status=1}Fe(qg,Cl);function js(t){this.g=t}Fe(js,Bg);js.prototype.Ba=function(){Be(this.g,"a")};js.prototype.Aa=function(t){Be(this.g,new jg(t))};js.prototype.za=function(t){Be(this.g,new qg)};js.prototype.ya=function(){Be(this.g,"b")};function cb(){this.blockSize=-1}function Et(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Fe(Et,cb);Et.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ca(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var i=t.g[3],o=e+(i^n&(r^i))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(i^n&(r^i))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(r^e&(n^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(n^i&(e^n))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=n+(e^r&(i^e))+s[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(n^r))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(n^r))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^r&(e^n))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(r^i))+s[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^i)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^i)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^n)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=n+(r^i^e)+s[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~i))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~i))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~n))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=n+(i^(r|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+i&4294967295}Et.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=n;)Ca(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(s[r++]=t.charCodeAt(i++),r==this.blockSize){Ca(this,s),r=0;break}}else for(;i<e;)if(s[r++]=t[i++],r==this.blockSize){Ca(this,s),r=0;break}}this.h=r,this.i+=e};Et.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function fe(t,e){this.h=e;for(var n=[],s=!0,r=t.length-1;0<=r;r--){var i=t[r]|0;s&&i==e||(n[r]=i,s=!1)}this.g=n}var lb={};function Ol(t){return-128<=t&&128>t?yT(t,function(e){return new fe([e|0],0>e?-1:0)}):new fe([t|0],0>t?-1:0)}function Dt(t){if(isNaN(t)||!isFinite(t))return ps;if(0>t)return Ve(Dt(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=dc;return new fe(e,0)}function Hg(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ve(Hg(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Dt(Math.pow(e,8)),s=ps,r=0;r<t.length;r+=8){var i=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+i),e);8>i?(i=Dt(Math.pow(e,i)),s=s.R(i).add(Dt(o))):(s=s.R(n),s=s.add(Dt(o)))}return s}var dc=4294967296,ps=Ol(0),pc=Ol(1),Wh=Ol(16777216);N=fe.prototype;N.ea=function(){if(dt(this))return-Ve(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:dc+s)*e,e*=dc}return t};N.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(zt(this))return"0";if(dt(this))return"-"+Ve(this).toString(t);for(var e=Dt(Math.pow(t,6)),n=this,s="";;){var r=ao(n,e).g;n=oo(n,r.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,zt(n))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};N.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function zt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function dt(t){return t.h==-1}N.X=function(t){return t=oo(this,t),dt(t)?-1:zt(t)?0:1};function Ve(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new fe(n,~t.h).add(pc)}N.abs=function(){return dt(this)?Ve(this):this};N.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(t.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new fe(n,n[n.length-1]&-2147483648?-1:0)};function oo(t,e){return t.add(Ve(e))}N.R=function(t){if(zt(this)||zt(t))return ps;if(dt(this))return dt(t)?Ve(this).R(Ve(t)):Ve(Ve(this).R(t));if(dt(t))return Ve(this.R(Ve(t)));if(0>this.X(Wh)&&0>t.X(Wh))return Dt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*s+2*r]+=o*c,_i(n,2*s+2*r),n[2*s+2*r+1]+=i*c,_i(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,_i(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,_i(n,2*s+2*r+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new fe(n,0)};function _i(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ys(t,e){this.g=t,this.h=e}function ao(t,e){if(zt(e))throw Error("division by zero");if(zt(t))return new Ys(ps,ps);if(dt(t))return e=ao(Ve(t),e),new Ys(Ve(e.g),Ve(e.h));if(dt(e))return e=ao(t,Ve(e)),new Ys(Ve(e.g),e.h);if(30<t.g.length){if(dt(t)||dt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=pc,s=e;0>=s.X(t);)n=Gh(n),s=Gh(s);var r=rs(n,1),i=rs(s,1);for(s=rs(s,2),n=rs(n,2);!zt(s);){var o=i.add(s);0>=o.X(t)&&(r=r.add(n),i=o),s=rs(s,1),n=rs(n,1)}return e=oo(t,r.R(e)),new Ys(r,e)}for(r=ps;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=Dt(n),o=i.R(e);dt(o)||0<o.X(t);)n-=s,i=Dt(n),o=i.R(e);zt(i)&&(i=pc),r=r.add(i),t=oo(t,o)}return new Ys(r,t)}N.gb=function(t){return ao(this,t).h};N.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new fe(n,this.h&t.h)};N.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new fe(n,this.h|t.h)};N.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new fe(n,this.h^t.h)};function Gh(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new fe(n,t.h)}function rs(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,r=[],i=0;i<s;i++)r[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new fe(r,t.h)}io.prototype.createWebChannel=io.prototype.g;ut.prototype.send=ut.prototype.u;ut.prototype.open=ut.prototype.m;ut.prototype.close=ut.prototype.close;Vo.NO_ERROR=0;Vo.TIMEOUT=8;Vo.HTTP_ERROR=6;cg.COMPLETE="complete";lg.EventType=Jr;Jr.OPEN="a";Jr.CLOSE="b";Jr.ERROR="c";Jr.MESSAGE="d";Le.prototype.listen=Le.prototype.O;Te.prototype.listenOnce=Te.prototype.P;Te.prototype.getLastError=Te.prototype.Sa;Te.prototype.getLastErrorCode=Te.prototype.Ia;Te.prototype.getStatus=Te.prototype.da;Te.prototype.getResponseJson=Te.prototype.Wa;Te.prototype.getResponseText=Te.prototype.ja;Te.prototype.send=Te.prototype.ha;Te.prototype.setWithCredentials=Te.prototype.Oa;Et.prototype.digest=Et.prototype.l;Et.prototype.reset=Et.prototype.reset;Et.prototype.update=Et.prototype.j;fe.prototype.add=fe.prototype.add;fe.prototype.multiply=fe.prototype.R;fe.prototype.modulo=fe.prototype.gb;fe.prototype.compare=fe.prototype.X;fe.prototype.toNumber=fe.prototype.ea;fe.prototype.toString=fe.prototype.toString;fe.prototype.getBits=fe.prototype.D;fe.fromNumber=Dt;fe.fromString=Hg;var ub=function(){return new io},hb=function(){return Uo()},Aa=Vo,fb=cg,db=Jn,Qh={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},pb=ei,Ei=lg,gb=Te,mb=Et,gs=fe;const Yh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ze.UNAUTHENTICATED=new ze(null),ze.GOOGLE_CREDENTIALS=new ze("google-credentials-uid"),ze.FIRST_PARTY=new ze("first-party-uid"),ze.MOCK_USER=new ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qs="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=new el("@firebase/firestore");function Jh(){return Gn.logLevel}function U(t,...e){if(Gn.logLevel<=ie.DEBUG){const n=e.map(xl);Gn.debug(`Firestore (${qs}): ${t}`,...n)}}function Yt(t,...e){if(Gn.logLevel<=ie.ERROR){const n=e.map(xl);Gn.error(`Firestore (${qs}): ${t}`,...n)}}function ks(t,...e){if(Gn.logLevel<=ie.WARN){const n=e.map(xl);Gn.warn(`Firestore (${qs}): ${t}`,...n)}}function xl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${qs}) INTERNAL ASSERTION FAILED: `+t;throw Yt(e),new Error(e)}function Ne(t,e){t||Q()}function oe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends Zt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ze.UNAUTHENTICATED))}shutdown(){}}class vb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wb{constructor(e){this.t=e,this.currentUser=ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new jn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new jn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new jn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ne(typeof s.accessToken=="string"),new zg(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ne(e===null||typeof e=="string"),new ze(e)}}class _b{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=ze.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Eb{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new _b(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ib{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Tb{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ne(typeof n.token=="string"),this.T=n.token,new Ib(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=bb(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ue(t,e){return t<e?-1:t>e?1:0}function Ns(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new xe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.timestamp=e}static fromTimestamp(e){return new G(e)}static min(){return new G(new xe(0,0))}static max(){return new G(new xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n,s){n===void 0?n=0:n>e.length&&Q(),s===void 0?s=e.length-n:s>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Lr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Lr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ee extends Lr{construct(e,n,s){return new Ee(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new L(S.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ee(n)}static emptyPath(){return new Ee([])}}const Cb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends Lr{construct(e,n,s){return new et(e,n,s)}static isValidIdentifier(e){return Cb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new L(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new L(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new L(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new L(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(n)}static emptyPath(){return new et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(Ee.fromString(e))}static fromName(e){return new H(Ee.fromString(e).popFirst(5))}static empty(){return new H(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new Ee(e.slice()))}}function Ab(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=G.fromTimestamp(s===1e9?new xe(n+1,0):new xe(n,s));return new In(r,H.empty(),e)}function Rb(t){return new In(t.readTime,t.key,-1)}class In{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new In(G.min(),H.empty(),-1)}static max(){return new In(G.max(),H.empty(),-1)}}function kb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Db{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ml(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==Nb)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,s)=>{n(e)})}static reject(e){return new T((n,s)=>{s(e)})}static waitFor(e){return new T((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=T.resolve(!1);for(const s of e)n=n.next(r=>r?T.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new T((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&s(o)},u=>r(u))}})}static doWhile(e,n){return new T((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function si(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ll{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Ll.ct=-1;function Wo(t){return t==null}function co(t){return t===0&&1/t==-1/0}function Pb(t){return typeof t=="number"&&Number.isInteger(t)&&!co(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ri(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Kg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.comparator=e,this.root=n||Ue.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ii(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ii(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ii(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ii(this.root,e,this.comparator,!0)}}class Ii{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Ue.RED,this.left=r??Ue.EMPTY,this.right=i??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ue(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ue.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ue(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zh(this.data.getIterator())}getIteratorFrom(e){return new Zh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class Zh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new fn([])}unionWith(e){let n=new Ye(et.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new fn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ns(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Wg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Wg("Invalid base64 string: "+r):r}}(e);return new Xe(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const Ob=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tn(t){if(Ne(!!t),typeof t=="string"){let e=0;const n=Ob.exec(t);if(Ne(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Re(t.seconds),nanos:Re(t.nanos)}}function Re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Qn(t){return typeof t=="string"?Xe.fromBase64String(t):Xe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ul(t){const e=t.mapValue.fields.__previous_value__;return Fl(e)?Ul(e):e}function Fr(t){const e=Tn(t.mapValue.fields.__local_write_time__.timestampValue);return new xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n,s,r,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Ur{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ur("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ur&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Yn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Fl(t)?4:Mb(t)?9007199254740991:10:Q()}function Ft(t,e){if(t===e)return!0;const n=Yn(t);if(n!==Yn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fr(t).isEqual(Fr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Tn(s.timestampValue),o=Tn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Qn(s.bytesValue).isEqual(Qn(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Re(s.geoPointValue.latitude)===Re(r.geoPointValue.latitude)&&Re(s.geoPointValue.longitude)===Re(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Re(s.integerValue)===Re(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Re(s.doubleValue),o=Re(r.doubleValue);return i===o?co(i)===co(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Ns(t.arrayValue.values||[],e.arrayValue.values||[],Ft);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Xh(i)!==Xh(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Ft(i[a],o[a])))return!1;return!0}(t,e);default:return Q()}}function Vr(t,e){return(t.values||[]).find(n=>Ft(n,e))!==void 0}function Ds(t,e){if(t===e)return 0;const n=Yn(t),s=Yn(e);if(n!==s)return ue(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Re(r.integerValue||r.doubleValue),a=Re(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return ef(t.timestampValue,e.timestampValue);case 4:return ef(Fr(t),Fr(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Qn(r),a=Qn(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=ue(o[c],a[c]);if(l!==0)return l}return ue(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ue(Re(r.latitude),Re(i.latitude));return o!==0?o:ue(Re(r.longitude),Re(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Ds(o[c],a[c]);if(l)return l}return ue(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Ti.mapValue&&i===Ti.mapValue)return 0;if(r===Ti.mapValue)return 1;if(i===Ti.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=ue(a[u],l[u]);if(h!==0)return h;const d=Ds(o[a[u]],c[l[u]]);if(d!==0)return d}return ue(a.length,l.length)}(t.mapValue,e.mapValue);default:throw Q()}}function ef(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Tn(t),s=Tn(e),r=ue(n.seconds,s.seconds);return r!==0?r:ue(n.nanos,s.nanos)}function Ps(t){return gc(t)}function gc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Tn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Qn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,H.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=gc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${gc(s.fields[a])}`;return i+"}"}(t.mapValue):Q();var e,n}function tf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function mc(t){return!!t&&"integerValue"in t}function Vl(t){return!!t&&"arrayValue"in t}function nf(t){return!!t&&"nullValue"in t}function sf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ra(t){return!!t&&"mapValue"in t}function hr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ri(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=hr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=hr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Mb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Ra(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=hr(n)}setAll(e){let n=et.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=hr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Ra(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ft(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Ra(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){ri(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new kt(hr(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ke(e,0,G.min(),G.min(),G.min(),kt.empty(),0)}static newFoundDocument(e,n,s,r){return new Ke(e,1,n,G.min(),s,r,0)}static newNoDocument(e,n){return new Ke(e,2,n,G.min(),G.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new Ke(e,3,n,G.min(),G.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class lo{constructor(e,n){this.position=e,this.inclusive=n}}function rf(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=H.comparator(H.fromName(o.referenceValue),n.key):s=Ds(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function of(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ft(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class fr{constructor(e,n="asc"){this.field=e,this.dir=n}}function Lb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Gg{}class ke extends Gg{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new Ub(e,n,s):n==="array-contains"?new Bb(e,s):n==="in"?new jb(e,s):n==="not-in"?new qb(e,s):n==="array-contains-any"?new Hb(e,s):new ke(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Vb(e,s):new $b(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ds(n,this.value)):n!==null&&Yn(this.value)===Yn(n)&&this.matchesComparison(Ds(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class It extends Gg{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new It(e,n)}matches(e){return Qg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Qg(t){return t.op==="and"}function Yg(t){return Fb(t)&&Qg(t)}function Fb(t){for(const e of t.filters)if(e instanceof It)return!1;return!0}function yc(t){if(t instanceof ke)return t.field.canonicalString()+t.op.toString()+Ps(t.value);if(Yg(t))return t.filters.map(e=>yc(e)).join(",");{const e=t.filters.map(n=>yc(n)).join(",");return`${t.op}(${e})`}}function Jg(t,e){return t instanceof ke?function(n,s){return s instanceof ke&&n.op===s.op&&n.field.isEqual(s.field)&&Ft(n.value,s.value)}(t,e):t instanceof It?function(n,s){return s instanceof It&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Jg(i,s.filters[o]),!0):!1}(t,e):void Q()}function Xg(t){return t instanceof ke?function(e){return`${e.field.canonicalString()} ${e.op} ${Ps(e.value)}`}(t):t instanceof It?function(e){return e.op.toString()+" {"+e.getFilters().map(Xg).join(" ,")+"}"}(t):"Filter"}class Ub extends ke{constructor(e,n,s){super(e,n,s),this.key=H.fromName(s.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class Vb extends ke{constructor(e,n){super(e,"in",n),this.keys=Zg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $b extends ke{constructor(e,n){super(e,"not-in",n),this.keys=Zg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Zg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>H.fromName(s.referenceValue))}class Bb extends ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Vl(n)&&Vr(n.arrayValue,this.value)}}class jb extends ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vr(this.value.arrayValue,n)}}class qb extends ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Vr(this.value.arrayValue,n)}}class Hb extends ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Vl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Vr(this.value.arrayValue,s))}}/**
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
 */class zb{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function af(t,e=null,n=[],s=[],r=null,i=null,o=null){return new zb(t,e,n,s,r,i,o)}function $l(t){const e=oe(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>yc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Wo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ps(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ps(s)).join(",")),e.dt=n}return e.dt}function Bl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Lb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Jg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!of(t.startAt,e.startAt)&&of(t.endAt,e.endAt)}function vc(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function Kb(t,e,n,s,r,i,o,a){return new ii(t,e,n,s,r,i,o,a)}function em(t){return new ii(t)}function cf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function tm(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function jl(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function nm(t){return t.collectionGroup!==null}function ms(t){const e=oe(t);if(e.wt===null){e.wt=[];const n=jl(e),s=tm(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new fr(n)),e.wt.push(new fr(et.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new fr(et.keyField(),i))}}}return e.wt}function Jt(t){const e=oe(t);if(!e._t)if(e.limitType==="F")e._t=af(e.path,e.collectionGroup,ms(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of ms(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new fr(i.field,o))}const s=e.endAt?new lo(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new lo(e.startAt.position,e.startAt.inclusive):null;e._t=af(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function wc(t,e){e.getFirstInequalityField(),jl(t);const n=t.filters.concat([e]);return new ii(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function uo(t,e,n){return new ii(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Go(t,e){return Bl(Jt(t),Jt(e))&&t.limitType===e.limitType}function sm(t){return`${$l(Jt(t))}|lt:${t.limitType}`}function _c(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Xg(s)).join(", ")}]`),Wo(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Ps(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Ps(s)).join(",")),`Target(${n})`}(Jt(t))}; limitType=${t.limitType})`}function Qo(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):H.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of ms(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=rf(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,ms(n),s)||n.endAt&&!function(r,i,o){const a=rf(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,ms(n),s))}(t,e)}function Wb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function rm(t){return(e,n)=>{let s=!1;for(const r of ms(t)){const i=Gb(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Gb(t,e,n){const s=t.field.isKeyField()?H.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Ds(a,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ri(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Kg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb=new Se(H.comparator);function bn(){return Qb}const im=new Se(H.comparator);function tr(...t){let e=im;for(const n of t)e=e.insert(n.key,n);return e}function Yb(t){let e=im;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Fn(){return dr()}function om(){return dr()}function dr(){return new Hs(t=>t.toString(),(t,e)=>t.isEqual(e))}const Jb=new Ye(H.comparator);function se(...t){let e=Jb;for(const n of t)e=e.add(n);return e}const Xb=new Ye(ue);function Zb(){return Xb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:co(e)?"-0":e}}function cm(t){return{integerValue:""+t}}function eS(t,e){return Pb(e)?cm(e):am(t,e)}/**
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
 */class Yo{constructor(){this._=void 0}}function tS(t,e,n){return t instanceof Ec?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Fl(r)&&(r=Ul(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof ho?lm(t,e):t instanceof fo?um(t,e):function(s,r){const i=sS(s,r),o=lf(i)+lf(s.gt);return mc(i)&&mc(s.gt)?cm(o):am(s.serializer,o)}(t,e)}function nS(t,e,n){return t instanceof ho?lm(t,e):t instanceof fo?um(t,e):n}function sS(t,e){return t instanceof Ic?mc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class Ec extends Yo{}class ho extends Yo{constructor(e){super(),this.elements=e}}function lm(t,e){const n=hm(e);for(const s of t.elements)n.some(r=>Ft(r,s))||n.push(s);return{arrayValue:{values:n}}}class fo extends Yo{constructor(e){super(),this.elements=e}}function um(t,e){let n=hm(e);for(const s of t.elements)n=n.filter(r=>!Ft(r,s));return{arrayValue:{values:n}}}class Ic extends Yo{constructor(e,n){super(),this.serializer=e,this.gt=n}}function lf(t){return Re(t.integerValue||t.doubleValue)}function hm(t){return Vl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function rS(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ho&&s instanceof ho||n instanceof fo&&s instanceof fo?Ns(n.elements,s.elements,Ft):n instanceof Ic&&s instanceof Ic?Ft(n.gt,s.gt):n instanceof Ec&&s instanceof Ec}(t.transform,e.transform)}class qn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qn}static exists(e){return new qn(void 0,e)}static updateTime(e){return new qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Li(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ql{}function fm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new oS(t.key,qn.none()):new Hl(t.key,t.data,qn.none());{const n=t.data,s=kt.empty();let r=new Ye(et.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Jo(t.key,s,new fn(r.toArray()),qn.none())}}function iS(t,e,n){t instanceof Hl?function(s,r,i){const o=s.value.clone(),a=hf(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Jo?function(s,r,i){if(!Li(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=hf(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(dm(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function pr(t,e,n,s){return t instanceof Hl?function(r,i,o,a){if(!Li(r.precondition,i))return o;const c=r.value.clone(),l=ff(r.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Jo?function(r,i,o,a){if(!Li(r.precondition,i))return o;const c=ff(r.fieldTransforms,a,i),l=i.data;return l.setAll(dm(r)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(u=>u.field))}(t,e,n,s):function(r,i,o){return Li(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function uf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ns(n,s,(r,i)=>rS(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Hl extends ql{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Jo extends ql{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function dm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function hf(t,e,n){const s=new Map;Ne(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,nS(o,a,n[r]))}return s}function ff(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,tS(i,o,e))}return s}class oS extends ql{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&iS(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=pr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=pr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=om();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=fm(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(G.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&Ns(this.mutations,e.mutations,(n,s)=>uf(n,s))&&Ns(this.baseMutations,e.baseMutations,(n,s)=>uf(n,s))}}/**
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
 */class cS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class lS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae,te;function pm(t){if(t===void 0)return Yt("GRPC error has no .code"),S.UNKNOWN;switch(t){case Ae.OK:return S.OK;case Ae.CANCELLED:return S.CANCELLED;case Ae.UNKNOWN:return S.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return S.INTERNAL;case Ae.UNAVAILABLE:return S.UNAVAILABLE;case Ae.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Ae.NOT_FOUND:return S.NOT_FOUND;case Ae.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Ae.ABORTED:return S.ABORTED;case Ae.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Ae.DATA_LOSS:return S.DATA_LOSS;default:return Q()}}(te=Ae||(Ae={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class zl{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return bi}static getOrCreateInstance(){return bi===null&&(bi=new zl),bi}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let bi=null;/**
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
 */function uS(){return new TextEncoder}/**
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
 */const hS=new gs([4294967295,4294967295],0);function df(t){const e=uS().encode(t),n=new mb;return n.update(e),new Uint8Array(n.digest())}function pf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new gs([n,s],0),new gs([r,i],0)]}class Kl{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new nr(`Invalid padding: ${n}`);if(s<0)throw new nr(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new nr(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new nr(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=gs.fromNumber(this.It)}Et(e,n,s){let r=e.add(n.multiply(gs.fromNumber(s)));return r.compare(hS)===1&&(r=new gs([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=df(e),[s,r]=pf(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);if(!this.At(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Kl(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=df(e),[s,r]=pf(n);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class nr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,oi.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Xo(G.min(),r,new Se(ue),bn(),se())}}class oi{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new oi(s,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,n,s,r){this.Pt=e,this.removedTargetIds=n,this.key=s,this.bt=r}}class gm{constructor(e,n){this.targetId=e,this.Vt=n}}class mm{constructor(e,n,s=Xe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class gf{constructor(){this.St=0,this.Dt=yf(),this.Ct=Xe.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=se(),n=se(),s=se();return this.Dt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:Q()}}),new oi(this.Ct,this.xt,e,n,s)}Ft(){this.Nt=!1,this.Dt=yf()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class fS{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=bn(),this.zt=mf(),this.Wt=new Se(ue)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const s=this.Zt(n);switch(e.state){case 0:this.te(n)&&s.$t(e.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(e.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(n);break;case 3:this.te(n)&&(s.Kt(),s.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),s.$t(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((s,r)=>{this.te(r)&&n(r)})}ne(e){var n;const s=e.targetId,r=e.Vt.count,i=this.se(s);if(i){const o=i.target;if(vc(o))if(r===0){const a=new H(o.path);this.Yt(s,a,Ke.newNoDocument(a,G.min()))}else Ne(r===1);else{const a=this.ie(s);if(a!==r){const c=this.re(e,a);if(c!==0){this.ee(s);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,l)}(n=zl.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(l,u,h){var d,g,_,b,A,P;const O={localCacheCount:u,existenceFilterCount:h.count},j=h.unchangedNames;return j&&(O.bloomFilter={applied:l===0,hashCount:(d=j==null?void 0:j.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(b=(_=(g=j==null?void 0:j.bits)===null||g===void 0?void 0:g.bitmap)===null||_===void 0?void 0:_.length)!==null&&b!==void 0?b:0,padding:(P=(A=j==null?void 0:j.bits)===null||A===void 0?void 0:A.padding)!==null&&P!==void 0?P:0}),O}(c,a,e.Vt))}}}}re(e,n){const{unchangedNames:s,count:r}=e.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let c,l;try{c=Qn(i).toUint8Array()}catch(u){if(u instanceof Wg)return ks("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{l=new Kl(c,o,a)}catch(u){return ks(u instanceof nr?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return l.It===0?1:r!==n-this.oe(e.targetId,l)?2:0}oe(e,n){const s=this.Gt.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;n.vt(a)||(this.Yt(e,i,null),r++)}),r}ce(e){const n=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&vc(a.target)){const c=new H(a.target.path);this.jt.get(c)!==null||this.ae(o,c)||this.Yt(o,c,Ke.newNoDocument(c,e))}i.Mt&&(n.set(o,i.Ot()),i.Ft())}});let s=se();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.se(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(e));const r=new Xo(e,n,this.Wt,this.jt,s);return this.jt=bn(),this.zt=mf(),this.Wt=new Se(ue),r}Jt(e,n){if(!this.te(e))return;const s=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,s),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,s){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,n)?r.Bt(n,1):r.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),s&&(this.jt=this.jt.insert(n,s))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new gf,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new Ye(ue),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new gf),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function mf(){return new Se(H.comparator)}function yf(){return new Se(H.comparator)}const dS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),pS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),gS=(()=>({and:"AND",or:"OR"}))();class mS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Tc(t,e){return t.useProto3Json||Wo(e)?e:{value:e}}function bc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ym(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ys(t){return Ne(!!t),G.fromTimestamp(function(e){const n=Tn(e);return new xe(n.seconds,n.nanos)}(t))}function vm(t,e){return function(n){return new Ee(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function wm(t){const e=Ee.fromString(t);return Ne(Tm(e)),e}function ka(t,e){const n=wm(e);if(n.get(1)!==t.databaseId.projectId)throw new L(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(_m(n))}function Sc(t,e){return vm(t.databaseId,e)}function yS(t){const e=wm(t);return e.length===4?Ee.emptyPath():_m(e)}function vf(t){return new Ee(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function _m(t){return Ne(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function vS(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,l){return c.useProto3Json?(Ne(l===void 0||typeof l=="string"),Xe.fromBase64String(l||"")):(Ne(l===void 0||l instanceof Uint8Array),Xe.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?S.UNKNOWN:pm(c.code);return new L(l,c.message||"")}(o);n=new mm(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=ka(t,s.document.name),i=ys(s.document.updateTime),o=s.document.createTime?ys(s.document.createTime):G.min(),a=new kt({mapValue:{fields:s.document.fields}}),c=Ke.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Fi(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=ka(t,s.document),i=s.readTime?ys(s.readTime):G.min(),o=Ke.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Fi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=ka(t,s.document),i=s.removedTargetIds||[];n=new Fi([],i,r,null)}else{if(!("filter"in e))return Q();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new lS(r,i),a=s.targetId;n=new gm(a,o)}}return n}function wS(t,e){return{documents:[Sc(t,e.path)]}}function _S(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Sc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Sc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Im(It.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:os(u.field),direction:TS(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Tc(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function ES(t){let e=yS(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Ne(s===1);const u=n.from[0];u.allDescendants?r=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Em(u);return h instanceof It&&Yg(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new fr(as(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Wo(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new lo(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new lo(d,h)}(n.endAt)),Kb(e,r,o,i,a,"F",c,l)}function IS(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Em(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=as(e.unaryFilter.field);return ke.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=as(e.unaryFilter.field);return ke.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=as(e.unaryFilter.field);return ke.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=as(e.unaryFilter.field);return ke.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(e){return ke.create(as(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return It.create(e.compositeFilter.filters.map(n=>Em(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Q()}}(e.compositeFilter.op))}(t):Q()}function TS(t){return dS[t]}function bS(t){return pS[t]}function SS(t){return gS[t]}function os(t){return{fieldPath:t.canonicalString()}}function as(t){return et.fromServerFormat(t.fieldPath)}function Im(t){return t instanceof ke?function(e){if(e.op==="=="){if(sf(e.value))return{unaryFilter:{field:os(e.field),op:"IS_NAN"}};if(nf(e.value))return{unaryFilter:{field:os(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(sf(e.value))return{unaryFilter:{field:os(e.field),op:"IS_NOT_NAN"}};if(nf(e.value))return{unaryFilter:{field:os(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:os(e.field),op:bS(e.op),value:e.value}}}(t):t instanceof It?function(e){const n=e.getFilters().map(s=>Im(s));return n.length===1?n[0]:{compositeFilter:{op:SS(e.op),filters:n}}}(t):Q()}function Tm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e,n,s,r,i=G.min(),o=G.min(),a=Xe.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new dn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new dn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new dn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e){this.fe=e}}function AS(t){const e=ES({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?uo(e,e.limit,"L"):e}/**
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
 */class RS{constructor(){this.rn=new kS}addToCollectionParentIndex(e,n){return this.rn.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(In.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(In.min())}updateCollectionGroup(e,n,s){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class kS{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Ye(Ee.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ye(Ee.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Os(0)}static Mn(){return new Os(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(){this.changes=new Hs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ke.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?T.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class DS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&pr(s.mutation,r,fn.empty(),xe.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,se()).next(()=>s))}getLocalViewOfDocuments(e,n,s=se()){const r=Fn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=tr();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Fn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,se()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=bn();const o=dr(),a=dr();return n.forEach((c,l)=>{const u=s.get(l.key);r.has(l.key)&&(u===void 0||u.mutation instanceof Jo)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),pr(u.mutation,l,u.mutation.getFieldMask(),xe.now())):o.set(l.key,fn.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new DS(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=dr();let r=new Se((o,a)=>o-a),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=s.get(c)||fn.empty();u=a.applyToLocalView(l,u),s.set(c,u);const h=(r.get(a.batchId)||se()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=om();u.forEach(d=>{if(!i.has(d)){const g=fm(n.get(d),s.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return T.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return H.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):nm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):T.resolve(Fn());let a=-1,c=i;return o.next(l=>T.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?T.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,se())).next(u=>({batchId:a,changes:Yb(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(s=>{let r=tr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=tr();return this.indexManager.getCollectionParents(e,r).next(o=>T.forEach(o,a=>{const c=function(l,u){return new ii(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const l=c.getKey();i.get(l)===null&&(i=i.insert(l,Ke.newInvalidDocument(l)))});let o=tr();return i.forEach((a,c)=>{const l=r.get(a);l!==void 0&&pr(l.mutation,c,fn.empty(),xe.now()),Qo(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return T.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var s;return this.cs.set(n.id,{id:(s=n).id,version:s.version,createTime:ys(s.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(s){return{name:s.name,query:AS(s.bundledQuery),readTime:ys(s.readTime)}}(n)),T.resolve()}}/**
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
 */class xS{constructor(){this.overlays=new Se(H.comparator),this.ls=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Fn();return T.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.we(e,n,i)}),T.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ls.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(s)),T.resolve()}getOverlaysForCollection(e,n,s){const r=Fn(),i=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return T.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Se((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let u=i.get(l.largestBatchId);u===null&&(u=Fn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Fn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=r)););return T.resolve(a)}we(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ls.get(r.largestBatchId).delete(s.key);this.ls.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new cS(n,s));let i=this.ls.get(n);i===void 0&&(i=se(),this.ls.set(n,i)),this.ls.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(){this.fs=new Ye(Pe.ds),this.ws=new Ye(Pe._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const s=new Pe(e,n);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ys(new Pe(e,n))}ps(e,n){e.forEach(s=>this.removeReference(s,n))}Is(e){const n=new H(new Ee([])),s=new Pe(n,e),r=new Pe(n,e+1),i=[];return this.ws.forEachInRange([s,r],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new H(new Ee([])),s=new Pe(n,e),r=new Pe(n,e+1);let i=se();return this.ws.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Pe(e,0),s=this.fs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Pe{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return H.comparator(e.key,n.key)||ue(e.As,n.As)}static _s(e,n){return ue(e.As,n.As)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new Ye(Pe.ds)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new aS(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new Pe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.bs(s),i=r<0?0:r;return T.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Pe(n,0),r=new Pe(n,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.Ps(o.As);i.push(a)}),T.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ye(ue);return n.forEach(r=>{const i=new Pe(r,0),o=new Pe(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.As)})}),T.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;H.isDocumentKey(i)||(i=i.child(""));const o=new Pe(new H(i),0);let a=new Ye(ue);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===r&&(a=a.add(c.As)),!0)},o),T.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(s=>{const r=this.Ps(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Ne(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return T.forEach(n.mutations,r=>{const i=new Pe(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=s})}Cn(e){}containsKey(e,n){const s=new Pe(n,0),r=this.Rs.firstAfterOrEqual(s);return T.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e){this.Ds=e,this.docs=new Se(H.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ds(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return T.resolve(s?s.document.mutableCopy():Ke.newInvalidDocument(n))}getEntries(e,n){let s=bn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ke.newInvalidDocument(r))}),T.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=bn();const o=n.path,a=new H(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||kb(Rb(u),s)<=0||(r.has(u.key)||Qo(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return T.resolve(i)}getAllFromCollectionGroup(e,n,s,r){Q()}Cs(e,n){return T.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new FS(this)}getSize(e){return T.resolve(this.size)}}class FS extends NS{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.os.addEntry(e,r)):this.os.removeEntry(s)}),T.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e){this.persistence=e,this.xs=new Hs(n=>$l(n),Bl),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Wl,this.targetCount=0,this.Ms=Os.kn()}forEachTarget(e,n){return this.xs.forEach((s,r)=>n(r)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ns&&(this.Ns=n),T.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Os(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.Fn(n),T.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),T.waitFor(i).next(()=>r)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const s=this.xs.get(n)||null;return T.resolve(s)}addMatchingKeys(e,n,s){return this.ks.gs(n,s),T.resolve()}removeMatchingKeys(e,n,s){this.ks.ps(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),T.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),T.resolve()}getMatchingKeysForTargetId(e,n){const s=this.ks.Es(n);return T.resolve(s)}containsKey(e,n){return T.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(e,n){this.$s={},this.overlays={},this.Os=new Ll(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new US(this),this.indexManager=new RS,this.remoteDocumentCache=function(s){return new LS(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new CS(n),this.qs=new OS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new xS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.$s[e.toKey()];return s||(s=new MS(n,this.referenceDelegate),this.$s[e.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,s){U("MemoryPersistence","Starting transaction:",e);const r=new $S(this.Os.next());return this.referenceDelegate.Us(),s(r).next(i=>this.referenceDelegate.Ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Gs(e,n){return T.or(Object.values(this.$s).map(s=>()=>s.containsKey(e,n)))}}class $S extends Db{constructor(e){super(),this.currentSequenceNumber=e}}class Gl{constructor(e){this.persistence=e,this.Qs=new Wl,this.js=null}static zs(e){return new Gl(e)}get Ws(){if(this.js)return this.js;throw Q()}addReference(e,n,s){return this.Qs.addReference(s,n),this.Ws.delete(s.toString()),T.resolve()}removeReference(e,n,s){return this.Qs.removeReference(s,n),this.Ws.add(s.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),T.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(r=>this.Ws.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ws.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Ws,s=>{const r=H.fromPath(s);return this.Hs(e,r).next(i=>{i||n.removeEntry(r,G.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(s=>{s?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return T.or([()=>T.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Fi=s,this.Bi=r}static Li(e,n){let s=se(),r=se();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ql(e,n.fromCache,s,r)}}/**
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
 */class BS{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Ki(e,n).next(i=>i||this.Gi(e,n,r,s)).next(i=>i||this.Qi(e,n))}Ki(e,n){if(cf(n))return T.resolve(null);let s=Jt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=uo(n,null,"F"),s=Jt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=se(...i);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.ji(n,a);return this.zi(n,l,o,c.readTime)?this.Ki(e,uo(n,null,"F")):this.Wi(e,l,n,c)}))})))}Gi(e,n,s,r){return cf(n)||r.isEqual(G.min())?this.Qi(e,n):this.Ui.getDocuments(e,s).next(i=>{const o=this.ji(n,i);return this.zi(n,o,s,r)?this.Qi(e,n):(Jh()<=ie.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),_c(n)),this.Wi(e,o,n,Ab(r,-1)))})}ji(e,n){let s=new Ye(rm(e));return n.forEach((r,i)=>{Qo(e,i)&&(s=s.add(i))}),s}zi(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,n){return Jh()<=ie.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",_c(n)),this.Ui.getDocumentsMatchingQuery(e,n,In.min())}Wi(e,n,s,r){return this.Ui.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e,n,s,r){this.persistence=e,this.Hi=n,this.serializer=r,this.Ji=new Se(ue),this.Yi=new Hs(i=>$l(i),Bl),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(s)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new PS(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function qS(t,e,n,s){return new jS(t,e,n,s)}async function bm(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.tr(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=se();for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(s,c).next(l=>({er:l,removedBatchIds:o,addedBatchIds:a}))})})}function Sm(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function HS(t,e){const n=oe(t),s=e.snapshotVersion;let r=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});r=n.Ji;const a=[];e.targetChanges.forEach((u,h)=>{const d=r.get(h);if(!d)return;a.push(n.Bs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(i,u.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(Xe.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,s)),r=r.insert(h,g),function(_,b,A){return _.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(d,g,u)&&a.push(n.Bs.updateTargetData(i,g))});let c=bn(),l=se();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(zS(i,o,e.documentUpdates).next(u=>{c=u.nr,l=u.sr})),!s.isEqual(G.min())){const u=n.Bs.getLastRemoteSnapshotVersion(i).next(h=>n.Bs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(u)}return T.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.Ji=r,i))}function zS(t,e,n){let s=se(),r=se();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=bn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(G.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{nr:o,sr:r}})}function KS(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Bs.getTargetData(s,e).next(i=>i?(r=i,T.resolve(r)):n.Bs.allocateTargetId(s).next(o=>(r=new dn(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Bs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ji.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(s.targetId,s),n.Yi.set(e,s.targetId)),s})}async function Cc(t,e,n){const s=oe(t),r=s.Ji.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!si(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(r.target)}function wf(t,e,n){const s=oe(t);let r=G.min(),i=se();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=oe(a),h=u.Yi.get(l);return h!==void 0?T.resolve(u.Ji.get(h)):u.Bs.getTargetData(c,l)}(s,o,Jt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,n?r:G.min(),n?i:se())).next(a=>(WS(s,Wb(e),a),{documents:a,ir:i})))}function WS(t,e,n){let s=t.Xi.get(e)||G.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Xi.set(e,s)}class _f{constructor(){this.activeTargetIds=Zb()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GS{constructor(){this.Hr=new _f,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,s){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new _f,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class QS{Yr(e){}shutdown(){}}/**
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
 */class Ef{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Si=null;function Na(){return Si===null?Si=268435456+Math.round(2147483648*Math.random()):Si++,"0x"+Si.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He="WebChannelConnection";class XS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,s,r,i){const o=Na(),a=this.To(e,n);U("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const c={};return this.Eo(c,r,i),this.Ao(e,a,c,s).then(l=>(U("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw ks("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",s),l})}vo(e,n,s,r,i,o){return this.Io(e,n,s,r,i)}Eo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+qs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}To(e,n){const s=YS[e];return`${this.mo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,s,r){const i=Na();return new Promise((o,a)=>{const c=new gb;c.setWithCredentials(!0),c.listenOnce(fb.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Aa.NO_ERROR:const u=c.getResponseJson();U(He,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Aa.TIMEOUT:U(He,`RPC '${e}' ${i} timed out`),a(new L(S.DEADLINE_EXCEEDED,"Request time out"));break;case Aa.HTTP_ERROR:const h=c.getStatus();if(U(He,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const _=function(b){const A=b.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(A)>=0?A:S.UNKNOWN}(g.status);a(new L(_,g.message))}else a(new L(S.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new L(S.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{U(He,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(r);U(He,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",l,s,15)})}Ro(e,n,s){const r=Na(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ub(),a=hb(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new pb({})),this.Eo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const u=i.join("");U(He,`Creating RPC '${e}' stream ${r}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,g=!1;const _=new JS({ro:A=>{g?U(He,`Not sending because RPC '${e}' stream ${r} is closed:`,A):(d||(U(He,`Opening RPC '${e}' stream ${r} transport.`),h.open(),d=!0),U(He,`RPC '${e}' stream ${r} sending:`,A),h.send(A))},oo:()=>h.close()}),b=(A,P,O)=>{A.listen(P,j=>{try{O(j)}catch(M){setTimeout(()=>{throw M},0)}})};return b(h,Ei.EventType.OPEN,()=>{g||U(He,`RPC '${e}' stream ${r} transport opened.`)}),b(h,Ei.EventType.CLOSE,()=>{g||(g=!0,U(He,`RPC '${e}' stream ${r} transport closed`),_.wo())}),b(h,Ei.EventType.ERROR,A=>{g||(g=!0,ks(He,`RPC '${e}' stream ${r} transport errored:`,A),_.wo(new L(S.UNAVAILABLE,"The operation could not be completed")))}),b(h,Ei.EventType.MESSAGE,A=>{var P;if(!g){const O=A.data[0];Ne(!!O);const j=O,M=j.error||((P=j[0])===null||P===void 0?void 0:P.error);if(M){U(He,`RPC '${e}' stream ${r} received error:`,M);const ee=M.status;let ye=function(X){const J=Ae[X];if(J!==void 0)return pm(J)}(ee),Ie=M.message;ye===void 0&&(ye=S.INTERNAL,Ie="Unknown error status: "+ee+" with message "+M.message),g=!0,_.wo(new L(ye,Ie)),h.close()}else U(He,`RPC '${e}' stream ${r} received:`,O),_._o(O)}}),b(a,db.STAT_EVENT,A=>{A.stat===Qh.PROXY?U(He,`RPC '${e}' stream ${r} detected buffering proxy`):A.stat===Qh.NOPROXY&&U(He,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{_.fo()},0),_}}function Da(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(t){return new mS(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,n,s=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=n,this.Po=s,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),r=Math.max(0,n-s);r>0&&U("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZS{constructor(e,n,s,r,i,o,a,c){this.ii=e,this.$o=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Cm(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(Yt(n.toString()),Yt("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Fo===n&&this.Zo(s,r)},s=>{e(()=>{const r=new L(S.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(r)})})}Zo(e,n){const s=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(r=>{s(()=>this.tu(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eC extends ZS{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=vS(this.serializer,e),s=function(r){if(!("targetChange"in r))return G.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?G.min():i.readTime?ys(i.readTime):G.min()}(e);return this.listener.nu(n,s)}su(e){const n={};n.database=vf(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;if(o=vc(a)?{documents:wS(r,a)}:{query:_S(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=ym(r,i.resumeToken);const c=Tc(r,i.expectedCount);c!==null&&(o.expectedCount=c)}else if(i.snapshotVersion.compareTo(G.min())>0){o.readTime=bc(r,i.snapshotVersion.toTimestamp());const c=Tc(r,i.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const s=IS(this.serializer,e);s&&(n.labels=s),this.Wo(n)}iu(e){const n={};n.database=vf(this.serializer),n.removeTarget=e,this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new L(S.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Io(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new L(S.UNKNOWN,r.toString())})}vo(e,n,s,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(S.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class nC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Yt(n),this.mu=!1):U("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{ci(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=oe(a);c.vu.add(4),await ai(c),c.bu.set("Unknown"),c.vu.delete(4),await ea(c)}(this))})}),this.bu=new nC(s,r)}}async function ea(t){if(ci(t))for(const e of t.Ru)await e(!0)}async function ai(t){for(const e of t.Ru)await e(!1)}function Am(t,e){const n=oe(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Xl(n)?Jl(n):zs(n).Ko()&&Yl(n,e))}function Rm(t,e){const n=oe(t),s=zs(n);n.Au.delete(e),s.Ko()&&km(n,e),n.Au.size===0&&(s.Ko()?s.jo():ci(n)&&n.bu.set("Unknown"))}function Yl(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}zs(t).su(e)}function km(t,e){t.Vu.qt(e),zs(t).iu(e)}function Jl(t){t.Vu=new fS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),zs(t).start(),t.bu.gu()}function Xl(t){return ci(t)&&!zs(t).Uo()&&t.Au.size>0}function ci(t){return oe(t).vu.size===0}function Nm(t){t.Vu=void 0}async function rC(t){t.Au.forEach((e,n)=>{Yl(t,e)})}async function iC(t,e){Nm(t),Xl(t)?(t.bu.Iu(e),Jl(t)):t.bu.set("Unknown")}async function oC(t,e,n){if(t.bu.set("Online"),e instanceof mm&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Au.delete(o),s.Vu.removeTarget(o))}(t,e)}catch(s){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await If(t,s)}else if(e instanceof Fi?t.Vu.Ht(e):e instanceof gm?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(G.min()))try{const s=await Sm(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Vu.ce(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=r.Au.get(c);l&&r.Au.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,c)=>{const l=r.Au.get(a);if(!l)return;r.Au.set(a,l.withResumeToken(Xe.EMPTY_BYTE_STRING,l.snapshotVersion)),km(r,a);const u=new dn(l.target,a,c,l.sequenceNumber);Yl(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){U("RemoteStore","Failed to raise snapshot:",s),await If(t,s)}}async function If(t,e,n){if(!si(e))throw e;t.vu.add(1),await ai(t),t.bu.set("Offline"),n||(n=()=>Sm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await ea(t)})}async function Tf(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const s=ci(n);n.vu.add(3),await ai(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await ea(n)}async function aC(t,e){const n=oe(t);e?(n.vu.delete(2),await ea(n)):e||(n.vu.add(2),await ai(n),n.bu.set("Unknown"))}function zs(t){return t.Su||(t.Su=function(e,n,s){const r=oe(e);return r.fu(),new eC(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(t.datastore,t.asyncQueue,{uo:rC.bind(null,t),ao:iC.bind(null,t),nu:oC.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),Xl(t)?Jl(t):t.bu.set("Unknown")):(await t.Su.stop(),Nm(t))})),t.Su}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Zl(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Dm(t,e){if(Yt("AsyncQueue",`${e}: ${t}`),si(t))return new L(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||H.comparator(n.key,s.key):(n,s)=>H.comparator(n.key,s.key),this.keyedMap=tr(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new vs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof vs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new vs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(){this.Cu=new Se(H.comparator)}track(e){const n=e.doc.key,s=this.Cu.get(n);s?e.type!==0&&s.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&s.type!==1?this.Cu=this.Cu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Cu=this.Cu.remove(n):e.type===1&&s.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):Q():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,s)=>{e.push(s)}),e}}class xs{constructor(e,n,s,r,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new xs(e,n,vs.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Go(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(){this.Nu=void 0,this.listeners=[]}}class lC{constructor(){this.queries=new Hs(e=>sm(e),Go),this.onlineState="Unknown",this.ku=new Set}}async function uC(t,e){const n=oe(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new cC),r)try{i.Nu=await n.onListen(s)}catch(o){const a=Dm(o,`Initialization of query '${_c(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Mu(n.onlineState),i.Nu&&e.$u(i.Nu)&&eu(n)}async function hC(t,e){const n=oe(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function fC(t,e){const n=oe(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.$u(r)&&(s=!0);o.Nu=r}}s&&eu(n)}function dC(t,e,n){const s=oe(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function eu(t){t.ku.forEach(e=>{e.next()})}class pC{constructor(e,n,s){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new xs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=xs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e){this.key=e}}class Om{constructor(e){this.key=e}}class gC{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=se(),this.mutatedKeys=se(),this.tc=rm(e),this.ec=new vs(this.tc)}get nc(){return this.Yu}sc(e,n){const s=n?n.ic:new bf,r=n?n.ec:this.ec;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((u,h)=>{const d=r.get(u),g=Qo(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),b=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let A=!1;d&&g?d.data.isEqual(g.data)?_!==b&&(s.track({type:3,doc:g}),A=!0):this.rc(d,g)||(s.track({type:2,doc:g}),A=!0,(c&&this.tc(g,c)>0||l&&this.tc(g,l)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),A=!0):d&&!g&&(s.track({type:1,doc:d}),A=!0,(c||l)&&(a=!0)),A&&(g?(o=o.add(g),i=b?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),s.track({type:1,doc:u})}return{ec:o,ic:s,zi:a,mutatedKeys:i}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort((l,u)=>function(h,d){const g=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return g(h)-g(d)}(l.type,u.type)||this.tc(l.doc,u.doc)),this.oc(s);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,c=a!==this.Xu;return this.Xu=a,i.length!==0||c?{snapshot:new xs(this.query,e.ec,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new bf,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=se(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const n=[];return e.forEach(s=>{this.Zu.has(s)||n.push(new Om(s))}),this.Zu.forEach(s=>{e.has(s)||n.push(new Pm(s))}),n}hc(e){this.Yu=e.ir,this.Zu=se();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return xs.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class mC{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class yC{constructor(e){this.key=e,this.fc=!1}}class vC{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Hs(a=>sm(a),Go),this._c=new Map,this.mc=new Set,this.gc=new Se(H.comparator),this.yc=new Map,this.Ic=new Wl,this.Tc={},this.Ec=new Map,this.Ac=Os.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function wC(t,e){const n=CC(t);let s,r;const i=n.wc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.lc();else{const o=await KS(n.localStore,Jt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await _C(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&Am(n.remoteStore,o)}return r}async function _C(t,e,n,s,r){t.Rc=(h,d,g)=>async function(_,b,A,P){let O=b.view.sc(A);O.zi&&(O=await wf(_.localStore,b.query,!1).then(({documents:ee})=>b.view.sc(ee,O)));const j=P&&P.targetChanges.get(b.targetId),M=b.view.applyChanges(O,_.isPrimaryClient,j);return Cf(_,b.targetId,M.cc),M.snapshot}(t,h,d,g);const i=await wf(t.localStore,e,!0),o=new gC(e,i.ir),a=o.sc(i.documents),c=oi.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),l=o.applyChanges(a,t.isPrimaryClient,c);Cf(t,n,l.cc);const u=new mC(e,n,o);return t.wc.set(e,u),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),l.snapshot}async function EC(t,e){const n=oe(t),s=n.wc.get(e),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter(i=>!Go(i,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Cc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Rm(n.remoteStore,s.targetId),Ac(n,s.targetId)}).catch(Ml)):(Ac(n,s.targetId),await Cc(n.localStore,s.targetId,!0))}async function xm(t,e){const n=oe(t);try{const s=await HS(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.yc.get(i);o&&(Ne(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.fc=!0:r.modifiedDocuments.size>0?Ne(o.fc):r.removedDocuments.size>0&&(Ne(o.fc),o.fc=!1))}),await Lm(n,s,e)}catch(s){await Ml(s)}}function Sf(t,e,n){const s=oe(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.wc.forEach((i,o)=>{const a=o.view.Mu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=oe(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Mu(o)&&(c=!0)}),c&&eu(a)}(s.eventManager,e),r.length&&s.dc.nu(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function IC(t,e,n){const s=oe(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.yc.get(e),i=r&&r.key;if(i){let o=new Se(H.comparator);o=o.insert(i,Ke.newNoDocument(i,G.min()));const a=se().add(i),c=new Xo(G.min(),new Map,new Se(ue),o,a);await xm(s,c),s.gc=s.gc.remove(i),s.yc.delete(e),tu(s)}else await Cc(s.localStore,e,!1).then(()=>Ac(s,e,n)).catch(Ml)}function Ac(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.wc.delete(s),n&&t.dc.Pc(s,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(s=>{t.Ic.containsKey(s)||Mm(t,s)})}function Mm(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(Rm(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),tu(t))}function Cf(t,e,n){for(const s of n)s instanceof Pm?(t.Ic.addReference(s.key,e),TC(t,s)):s instanceof Om?(U("SyncEngine","Document no longer in limbo: "+s.key),t.Ic.removeReference(s.key,e),t.Ic.containsKey(s.key)||Mm(t,s.key)):Q()}function TC(t,e){const n=e.key,s=n.path.canonicalString();t.gc.get(n)||t.mc.has(s)||(U("SyncEngine","New document in limbo: "+n),t.mc.add(s),tu(t))}function tu(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new H(Ee.fromString(e)),s=t.Ac.next();t.yc.set(s,new yC(n)),t.gc=t.gc.insert(n,s),Am(t.remoteStore,new dn(Jt(em(n.path)),s,"TargetPurposeLimboResolution",Ll.ct))}}async function Lm(t,e,n){const s=oe(t),r=[],i=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,c)=>{o.push(s.Rc(c,e,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const u=Ql.Li(c.targetId,l);i.push(u)}}))}),await Promise.all(o),s.dc.nu(r),await async function(a,c){const l=oe(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>T.forEach(c,h=>T.forEach(h.Fi,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>T.forEach(h.Bi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!si(u))throw u;U("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ji.get(h),g=d.snapshotVersion,_=d.withLastLimboFreeSnapshotVersion(g);l.Ji=l.Ji.insert(h,_)}}}(s.localStore,i))}async function bC(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const s=await bm(n.localStore,e);n.currentUser=e,function(r,i){r.Ec.forEach(o=>{o.forEach(a=>{a.reject(new L(S.CANCELLED,i))})}),r.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Lm(n,s.er)}}function SC(t,e){const n=oe(t),s=n.yc.get(e);if(s&&s.fc)return se().add(s.key);{let r=se();const i=n._c.get(e);if(!i)return r;for(const o of i){const a=n.wc.get(o);r=r.unionWith(a.view.nc)}return r}}function CC(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=xm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=SC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=IC.bind(null,e),e.dc.nu=fC.bind(null,e.eventManager),e.dc.Pc=dC.bind(null,e.eventManager),e}class Af{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Zo(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return qS(this.persistence,new BS,e.initialUser,this.serializer)}createPersistence(e){return new VS(Gl.zs,this.serializer)}createSharedClientState(e){return new GS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class AC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Sf(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=bC.bind(null,this.syncEngine),await aC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new lC}createDatastore(e){const n=Zo(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new XS(r));var r;return function(i,o,a,c){return new tC(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Sf(this.syncEngine,a,0),o=Ef.D()?new Ef:new QS,new sC(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,l){const u=new vC(s,r,i,o,a,c);return l&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=oe(e);U("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await ai(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class RC{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Yt("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=ze.UNAUTHENTICATED,this.clientId=Sb.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{U("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(U("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Dm(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Pa(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await bm(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Rf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await DC(t);U("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>Tf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Tf(e.remoteStore,i)),t._onlineComponents=e}function NC(t){return t.name==="FirebaseError"?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function DC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await Pa(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!NC(n))throw n;ks("Error using user provided cache. Falling back to memory cache: "+n),await Pa(t,new Af)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await Pa(t,new Af);return t._offlineComponents}async function PC(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await Rf(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await Rf(t,new AC))),t._onlineComponents}async function OC(t){const e=await PC(t),n=e.eventManager;return n.onListen=wC.bind(null,e.syncEngine),n.onUnlisten=EC.bind(null,e.syncEngine),n}function xC(t,e,n={}){const s=new jn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const l=new RC({next:h=>{i.enqueueAndForget(()=>hC(r,u)),h.fromCache&&a.source==="server"?c.reject(new L(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new pC(o,l,{includeMetadataChanges:!0,Ku:!0});return uC(r,u)}(await OC(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function Fm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(t,e,n){if(!n)throw new L(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function LC(t,e,n,s){if(e===!0&&s===!0)throw new L(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Nf(t){if(H.isDocumentKey(t))throw new L(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ta(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function Rc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ta(t);throw new L(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function FC(t,e){if(e<=0)throw new L(S.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new L(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}LC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fm((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new L(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new L(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new L(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,s=e.experimentalLongPollingOptions,n.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,s}}class nu{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Df({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Df(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new yb;switch(n.type){case"firstParty":return new Eb(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new L(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=kf.get(e);n&&(U("ComponentProvider","Removing Datastore"),kf.delete(e),n.terminate())}(this),Promise.resolve()}}function UC(t,e,n,s={}){var r;const i=(t=Rc(t,nu))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ks("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=ze.MOCK_USER;else{a=z_(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new L(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ze(l)}t._authCredentials=new vb(new zg(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ws(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new en(this.firestore,e,this._key)}}class Xn{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Xn(this.firestore,e,this._query)}}class ws extends Xn{constructor(e,n,s){super(e,n,em(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new en(this.firestore,null,new H(e))}withConverter(e){return new ws(this.firestore,e,this._path)}}function VC(t,e,...n){if(t=pt(t),MC("collection","path",e),t instanceof nu){const s=Ee.fromString(e,...n);return Nf(s),new ws(t,null,s)}{if(!(t instanceof en||t instanceof ws))throw new L(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ee.fromString(e,...n));return Nf(s),new ws(t.firestore,null,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Cm(this,"async_queue_retry"),this.Xc=()=>{const n=Da();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Da();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Da();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new jn;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!si(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(s=>{this.Wc=s,this.Hc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Yt("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Hc=!1,s))));return this.Gc=n,n}enqueueAfterDelay(e,n,s){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const r=Zl.createAndSchedule(this,e,n,s,i=>this.na(i));return this.zc.push(r),r}Zc(){this.Wc&&Q()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class Um extends nu{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new $C,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Vm(this),this._firestoreClient.terminate()}}function BC(t,e){const n=typeof t=="object"?t:ip(),s=typeof t=="string"?t:e||"(default)",r=nl(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=q_("firestore");i&&UC(r,...i)}return r}function jC(t){return t._firestoreClient||Vm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Vm(t){var e,n,s;const r=t._freezeSettings(),i=function(o,a,c,l){return new xb(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Fm(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new kC(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ms(Xe.fromBase64String(e))}catch(n){throw new L(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ms(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC=/^__.*__$/;function jm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class ru{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new ru(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:s,la:!1});return r.fa(e),r}da(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.aa({path:s,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return kc(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(jm(this.ca)&&qC.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class HC{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Zo(e)}ya(e,n,s,r=!1){return new ru({ca:e,methodName:n,ga:s,path:et.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zC(t){const e=t._freezeSettings(),n=Zo(t._databaseId);return new HC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function KC(t,e,n,s=!1){return iu(n,t.ya(s?4:3,e))}function iu(t,e){if(qm(t=pt(t)))return GC("Unsupported field value:",e,t),WC(t,e);if(t instanceof Bm)return function(n,s){if(!jm(s.ca))throw s._a(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=iu(o,s.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=pt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return eS(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=xe.fromDate(n);return{timestampValue:bc(s.serializer,r)}}if(n instanceof xe){const r=new xe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:bc(s.serializer,r)}}if(n instanceof su)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ms)return{bytesValue:ym(s.serializer,n._byteString)};if(n instanceof en){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:vm(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s._a(`Unsupported field value: ${ta(n)}`)}(t,e)}function WC(t,e){const n={};return Kg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ri(t,(s,r)=>{const i=iu(r,e.ha(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function qm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof su||t instanceof Ms||t instanceof en||t instanceof Bm)}function GC(t,e,n){if(!qm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=ta(n);throw s==="an object"?e._a(t+" a custom object"):e._a(t+" "+s)}}const QC=new RegExp("[~\\*/\\[\\]]");function YC(t,e,n){if(e.search(QC)>=0)throw kc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new $m(...e.split("."))._internalPath}catch{throw kc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function kc(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new L(S.INVALID_ARGUMENT,a+t+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new en(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new JC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ou("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class JC extends Hm{data(){return super.data()}}function ou(t,e){return typeof e=="string"?YC(t,e):e instanceof $m?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new L(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class au{}class zm extends au{}function ZC(t,e,...n){let s=[];e instanceof au&&s.push(e),s=s.concat(n),function(r){const i=r.filter(a=>a instanceof cu).length,o=r.filter(a=>a instanceof na).length;if(i>1||i>0&&o>0)throw new L(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class na extends zm{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new na(e,n,s)}_apply(e){const n=this._parse(e);return Km(e._query,n),new Xn(e.firestore,e.converter,wc(e._query,n))}_parse(e){const n=zC(e.firestore);return function(r,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new L(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Of(u,l);const d=[];for(const g of u)d.push(Pf(a,r,g));h={arrayValue:{values:d}}}else h=Pf(a,r,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Of(u,l),h=KC(o,i,u,l==="in"||l==="not-in");return ke.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function eA(t,e,n){const s=e,r=ou("where",t);return na._create(r,s,n)}class cu extends au{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new cu(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:It.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Km(i,a),i=wc(i,a)}(e._query,n),new Xn(e.firestore,e.converter,wc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class lu extends zm{constructor(e,n,s){super(),this.type=e,this._limit=n,this._limitType=s}static _create(e,n,s){return new lu(e,n,s)}_apply(e){return new Xn(e.firestore,e.converter,uo(e._query,this._limit,this._limitType))}}function tA(t){return FC("limit",t),lu._create("limit",t,"F")}function Pf(t,e,n){if(typeof(n=pt(n))=="string"){if(n==="")throw new L(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nm(e)&&n.indexOf("/")!==-1)throw new L(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Ee.fromString(n));if(!H.isDocumentKey(s))throw new L(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return tf(t,new H(s))}if(n instanceof en)return tf(t,n._key);throw new L(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ta(n)}.`)}function Of(t,e){if(!Array.isArray(t)||t.length===0)throw new L(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Km(t,e){if(e.isInequality()){const s=jl(t),r=e.field;if(s!==null&&!s.isEqual(r))throw new L(S.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=tm(t);i!==null&&nA(t,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new L(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function nA(t,e,n){if(!n.isEqual(e))throw new L(S.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class sA{convertValue(e,n="none"){switch(Yn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Qn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return ri(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new su(Re(e.latitude),Re(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Ul(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Fr(e));default:return null}}convertTimestamp(e){const n=Tn(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ee.fromString(e);Ne(Tm(s));const r=new Ur(s.get(1),s.get(3)),i=new H(s.popFirst(5));return r.isEqual(n)||Yt(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rA extends Hm{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ui(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(ou("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ui extends rA{data(e={}){return super.data(e)}}class iA{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Ci(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Ui(this._firestore,this._userDataWriter,s.key,s,new Ci(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Ui(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ci(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Ui(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ci(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:oA(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function oA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}class aA extends sA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ms(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new en(this.firestore,null,n)}}function cA(t){t=Rc(t,Xn);const e=Rc(t.firestore,Um),n=jC(e),s=new aA(e);return XC(t._query),xC(n,t._query).then(r=>new iA(e,s,t,r))}(function(t,e=!0){(function(n){qs=n})($s),Cs(new zn("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Um(new wb(n.getProvider("auth-internal")),new Tb(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new L(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ur(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),_n(Yh,"3.13.0",t),_n(Yh,"3.13.0","esm2017")})();var lA="firebase",uA="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_n(lA,uA,"app");const hA="AIzaSyBe3GGhSgxu9TycWVQRVYLMmbLwQIv-3oA",fA={apiKey:hA,authDomain:"easy-reach-1f358.firebaseapp.com",projectId:"easy-reach-1f358",storageBucket:"easy-reach-1f358.appspot.com",messagingSenderId:"344931134629",appId:"1:344931134629:web:c0e7bd69de1f0c383f714c"},dA=rp(fA),pA=BC(dA),gA=async t=>{const e=ZC(VC(pA,"users"),eA("email","==",t),tA(1)),n=await cA(e);if(Array.from(n.docs).map(r=>({...r.data(),id:r.id})).length)return!0;throw new Error("User not authorized to log in")},mA={__name:"HomeView",setup(t){const e=hl(),n=()=>{const r=new jt;wI(eo(),r).then(i=>{gA(i.user.email).then(()=>{e.setUser(i.user),sa.push({name:"Arrivals"})}).catch(o=>{console.log(o.message),s()})}).catch(i=>{console.log("error",i)})},s=()=>{Dp(eo()).then(()=>{e.setUser(null)}).catch(r=>console.log("error",r))};return(r,i)=>(Es(),Ir("main",null,[Wt("div",{class:"flex justify-center mt-20"},[Wt("button",{onClick:n,class:"bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"}," Sign in with Google ")])]))}},sa=D_({history:Gw("/easy-reach"),routes:[{path:"/",name:"Home",component:mA},{path:"/arrivals",name:"Arrivals",component:()=>M_(()=>import("./ArrivalsView-c5c9b5d4.js"),["assets/ArrivalsView-c5c9b5d4.js","assets/ArrivalsView-e3b0c442.css"]),meta:{requiresAuth:!0}}]}),yA=()=>new Promise((t,e)=>{const n=hl();XE(eo(),s=>{s?(n.setUser(s),t(s)):(n.setUser(null),e("User not logged in"))})});sa.beforeEach(async(t,e,n)=>{if(t.matched.some(s=>s.meta.requiresAuth))try{await yA(),n()}catch(s){console.log(s),n("/")}else n()});const vA={class:"border-b border-gray-200 bg-gray-900"},wA={class:"max-w-screen-xl flex justify-between mx-auto px-6 xl:px-0"},_A={class:"logo flex items-center"},EA={__name:"HeaderMenu",setup(t){const e=hl(),n=()=>{Dp(eo()).then(()=>{e.setUser(null)}).catch(s=>console.log("error",s)).finally(()=>sa.push("/"))};return(s,r)=>{const i=yv("router-link");return Es(),Ir("header",vA,[Wt("div",wA,[Wt("div",_A,[$e(i,{to:"/",class:"truncate text-white font-medium border-l-4 border-gray-500 transition hover:text-gray-100 my-4 px-3 py-1"},{default:hd(()=>[kd(" Easy Reach ")]),_:1})]),mn(e).user?(Es(),Ir("div",{key:0,onClick:n,class:"text-white text-lg flex items-center px-4 cursor-pointer hover:text-gray-100"}," Sign out ")):jv("",!0)])])}}},Wm=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},IA={},TA={class:"text-center border-t border-gray-200 bg-gray-900 py-2"},bA=Wt("span",{class:"text-white"},"2023",-1),SA=[bA];function CA(t,e){return Es(),Ir("footer",TA,SA)}const AA=Wm(IA,[["render",CA]]);const RA={class:"flex flex-col h-screen justify-between text-slate-800"},kA={class:"mb-auto bg-white"},NA={class:"max-w-screen-xl mx-auto px-6 xl:px-0"},DA={__name:"App",setup(t){return(e,n)=>(Es(),Ir("div",RA,[$e(EA),Wt("main",kA,[Wt("div",NA,[$e(mn(Qd))])]),$e(AA)]))}},PA=Wm(DA,[["__scopeId","data-v-8ebac9e5"]]),uu=_w(PA);uu.use(Tw());uu.use(sa);uu.mount("#app");export{Bt as F,Wm as _,Wt as a,kd as b,Ir as c,kw as d,MA as e,ct as f,$e as g,Vv as h,Mc as n,Es as o,qc as r,OA as t,mn as u,LA as v,xA as w};

(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function c(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function mi(e,t){const n=Object.create(null),c=e.split(",");for(let a=0;a<c.length;a++)n[c[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function hi(e){if(be(e)){const t={};for(let n=0;n<e.length;n++){const c=e[n],a=Ye(c)?ym(c):hi(c);if(a)for(const l in a)t[l]=a[l]}return t}else{if(Ye(e))return e;if(Ne(e))return e}}const mm=/;(?![^(]*\))/g,hm=/:([^]+)/,gm=/\/\*.*?\*\//gs;function ym(e){const t={};return e.replace(gm,"").split(mm).forEach(n=>{if(n){const c=n.split(hm);c.length>1&&(t[c[0].trim()]=c[1].trim())}}),t}function $c(e){let t="";if(Ye(e))t=e;else if(be(e))for(let n=0;n<e.length;n++){const c=$c(e[n]);c&&(t+=c+" ")}else if(Ne(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const bm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pm=mi(bm);function wu(e){return!!e||e===""}const Jt=e=>Ye(e)?e:e==null?"":be(e)||Ne(e)&&(e.toString===Iu||!we(e.toString))?JSON.stringify(e,ju,2):String(e),ju=(e,t)=>t&&t.__v_isRef?ju(e,t.value):Ec(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[c,a])=>(n[`${c} =>`]=a,n),{})}:qu(t)?{[`Set(${t.size})`]:[...t.values()]}:Ne(t)&&!be(t)&&!Eu(t)?String(t):t,Fe={},Ic=[],Ut=()=>{},km=()=>!1,Sm=/^on[^a-z]/,Cl=e=>Sm.test(e),gi=e=>e.startsWith("onUpdate:"),at=Object.assign,yi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Cm=Object.prototype.hasOwnProperty,Ae=(e,t)=>Cm.call(e,t),be=Array.isArray,Ec=e=>_l(e)==="[object Map]",qu=e=>_l(e)==="[object Set]",we=e=>typeof e=="function",Ye=e=>typeof e=="string",bi=e=>typeof e=="symbol",Ne=e=>e!==null&&typeof e=="object",Vu=e=>Ne(e)&&we(e.then)&&we(e.catch),Iu=Object.prototype.toString,_l=e=>Iu.call(e),_m=e=>_l(e).slice(8,-1),Eu=e=>_l(e)==="[object Object]",pi=e=>Ye(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,tl=mi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xl=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},xm=/-(\w)/g,$t=xl(e=>e.replace(xm,(t,n)=>n?n.toUpperCase():"")),wm=/\B([A-Z])/g,Dc=xl(e=>e.replace(wm,"-$1").toLowerCase()),Cn=xl(e=>e.charAt(0).toUpperCase()+e.slice(1)),nl=xl(e=>e?`on${Cn(e)}`:""),ba=(e,t)=>!Object.is(e,t),cl=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ol=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},bs=e=>{const t=parseFloat(e);return isNaN(t)?e:t},jm=e=>{const t=Ye(e)?Number(e):NaN;return isNaN(t)?e:t};let Vr;const qm=()=>Vr||(Vr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let xt;class Au{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xt,!t&&xt&&(this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=xt;try{return xt=this,t()}finally{xt=n}}}on(){xt=this}off(){xt=this.parent}stop(t){if(this._active){let n,c;for(n=0,c=this.effects.length;n<c;n++)this.effects[n].stop();for(n=0,c=this.cleanups.length;n<c;n++)this.cleanups[n]();if(this.scopes)for(n=0,c=this.scopes.length;n<c;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function ki(e){return new Au(e)}function Vm(e,t=xt){t&&t.active&&t.effects.push(e)}function Im(){return xt}function Vt(e){xt&&xt.cleanups.push(e)}const Si=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Pu=e=>(e.w&Fn)>0,Tu=e=>(e.n&Fn)>0,Em=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Fn},Am=e=>{const{deps:t}=e;if(t.length){let n=0;for(let c=0;c<t.length;c++){const a=t[c];Pu(a)&&!Tu(a)?a.delete(e):t[n++]=a,a.w&=~Fn,a.n&=~Fn}t.length=n}},ul=new WeakMap;let oa=0,Fn=1;const ps=30;let Dt;const uc=Symbol(""),ks=Symbol("");class Ci{constructor(t,n=null,c){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Vm(this,c)}run(){if(!this.active)return this.fn();let t=Dt,n=Bn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Dt,Dt=this,Bn=!0,Fn=1<<++oa,oa<=ps?Em(this):Ir(this),this.fn()}finally{oa<=ps&&Am(this),Fn=1<<--oa,Dt=this.parent,Bn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Dt===this?this.deferStop=!0:this.active&&(Ir(this),this.onStop&&this.onStop(),this.active=!1)}}function Ir(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Bn=!0;const $u=[];function zc(){$u.push(Bn),Bn=!1}function Hc(){const e=$u.pop();Bn=e===void 0?!0:e}function St(e,t,n){if(Bn&&Dt){let c=ul.get(e);c||ul.set(e,c=new Map);let a=c.get(n);a||c.set(n,a=Si()),Mu(a)}}function Mu(e,t){let n=!1;oa<=ps?Tu(e)||(e.n|=Fn,n=!Pu(e)):n=!e.has(Dt),n&&(e.add(Dt),Dt.deps.push(e))}function gn(e,t,n,c,a,l){const s=ul.get(e);if(!s)return;let i=[];if(t==="clear")i=[...s.values()];else if(n==="length"&&be(e)){const r=Number(c);s.forEach((u,o)=>{(o==="length"||o>=r)&&i.push(u)})}else switch(n!==void 0&&i.push(s.get(n)),t){case"add":be(e)?pi(n)&&i.push(s.get("length")):(i.push(s.get(uc)),Ec(e)&&i.push(s.get(ks)));break;case"delete":be(e)||(i.push(s.get(uc)),Ec(e)&&i.push(s.get(ks)));break;case"set":Ec(e)&&i.push(s.get(uc));break}if(i.length===1)i[0]&&Ss(i[0]);else{const r=[];for(const u of i)u&&r.push(...u);Ss(Si(r))}}function Ss(e,t){const n=be(e)?e:[...e];for(const c of n)c.computed&&Er(c);for(const c of n)c.computed||Er(c)}function Er(e,t){(e!==Dt||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function Pm(e,t){var n;return(n=ul.get(e))===null||n===void 0?void 0:n.get(t)}const Tm=mi("__proto__,__v_isRef,__isVue"),Bu=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(bi)),$m=_i(),Mm=_i(!1,!0),Bm=_i(!0),Ar=Rm();function Rm(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const c=xe(this);for(let l=0,s=this.length;l<s;l++)St(c,"get",l+"");const a=c[t](...n);return a===-1||a===!1?c[t](...n.map(xe)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){zc();const c=xe(this)[t].apply(this,n);return Hc(),c}}),e}function Om(e){const t=xe(this);return St(t,"has",e),t.hasOwnProperty(e)}function _i(e=!1,t=!1){return function(c,a,l){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&l===(e?t?eh:Nu:t?Fu:Lu).get(c))return c;const s=be(c);if(!e){if(s&&Ae(Ar,a))return Reflect.get(Ar,a,l);if(a==="hasOwnProperty")return Om}const i=Reflect.get(c,a,l);return(bi(a)?Bu.has(a):Tm(a))||(e||St(c,"get",a),t)?i:We(i)?s&&pi(a)?i:i.value:Ne(i)?e?$a(i):st(i):i}}const Lm=Ru(),Fm=Ru(!0);function Ru(e=!1){return function(n,c,a,l){let s=n[c];if(Mc(s)&&We(s)&&!We(a))return!1;if(!e&&(!dl(a)&&!Mc(a)&&(s=xe(s),a=xe(a)),!be(n)&&We(s)&&!We(a)))return s.value=a,!0;const i=be(n)&&pi(c)?Number(c)<n.length:Ae(n,c),r=Reflect.set(n,c,a,l);return n===xe(l)&&(i?ba(a,s)&&gn(n,"set",c,a):gn(n,"add",c,a)),r}}function Nm(e,t){const n=Ae(e,t);e[t];const c=Reflect.deleteProperty(e,t);return c&&n&&gn(e,"delete",t,void 0),c}function Dm(e,t){const n=Reflect.has(e,t);return(!bi(t)||!Bu.has(t))&&St(e,"has",t),n}function zm(e){return St(e,"iterate",be(e)?"length":uc),Reflect.ownKeys(e)}const Ou={get:$m,set:Lm,deleteProperty:Nm,has:Dm,ownKeys:zm},Hm={get:Bm,set(e,t){return!0},deleteProperty(e,t){return!0}},Um=at({},Ou,{get:Mm,set:Fm}),xi=e=>e,wl=e=>Reflect.getPrototypeOf(e);function za(e,t,n=!1,c=!1){e=e.__v_raw;const a=xe(e),l=xe(t);n||(t!==l&&St(a,"get",t),St(a,"get",l));const{has:s}=wl(a),i=c?xi:n?qi:pa;if(s.call(a,t))return i(e.get(t));if(s.call(a,l))return i(e.get(l));e!==a&&e.get(t)}function Ha(e,t=!1){const n=this.__v_raw,c=xe(n),a=xe(e);return t||(e!==a&&St(c,"has",e),St(c,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Ua(e,t=!1){return e=e.__v_raw,!t&&St(xe(e),"iterate",uc),Reflect.get(e,"size",e)}function Pr(e){e=xe(e);const t=xe(this);return wl(t).has.call(t,e)||(t.add(e),gn(t,"add",e,e)),this}function Tr(e,t){t=xe(t);const n=xe(this),{has:c,get:a}=wl(n);let l=c.call(n,e);l||(e=xe(e),l=c.call(n,e));const s=a.call(n,e);return n.set(e,t),l?ba(t,s)&&gn(n,"set",e,t):gn(n,"add",e,t),this}function $r(e){const t=xe(this),{has:n,get:c}=wl(t);let a=n.call(t,e);a||(e=xe(e),a=n.call(t,e)),c&&c.call(t,e);const l=t.delete(e);return a&&gn(t,"delete",e,void 0),l}function Mr(){const e=xe(this),t=e.size!==0,n=e.clear();return t&&gn(e,"clear",void 0,void 0),n}function Wa(e,t){return function(c,a){const l=this,s=l.__v_raw,i=xe(s),r=t?xi:e?qi:pa;return!e&&St(i,"iterate",uc),s.forEach((u,o)=>c.call(a,r(u),r(o),l))}}function Ka(e,t,n){return function(...c){const a=this.__v_raw,l=xe(a),s=Ec(l),i=e==="entries"||e===Symbol.iterator&&s,r=e==="keys"&&s,u=a[e](...c),o=n?xi:t?qi:pa;return!t&&St(l,"iterate",r?ks:uc),{next(){const{value:d,done:f}=u.next();return f?{value:d,done:f}:{value:i?[o(d[0]),o(d[1])]:o(d),done:f}},[Symbol.iterator](){return this}}}}function In(e){return function(...t){return e==="delete"?!1:this}}function Wm(){const e={get(l){return za(this,l)},get size(){return Ua(this)},has:Ha,add:Pr,set:Tr,delete:$r,clear:Mr,forEach:Wa(!1,!1)},t={get(l){return za(this,l,!1,!0)},get size(){return Ua(this)},has:Ha,add:Pr,set:Tr,delete:$r,clear:Mr,forEach:Wa(!1,!0)},n={get(l){return za(this,l,!0)},get size(){return Ua(this,!0)},has(l){return Ha.call(this,l,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:Wa(!0,!1)},c={get(l){return za(this,l,!0,!0)},get size(){return Ua(this,!0)},has(l){return Ha.call(this,l,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:Wa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{e[l]=Ka(l,!1,!1),n[l]=Ka(l,!0,!1),t[l]=Ka(l,!1,!0),c[l]=Ka(l,!0,!0)}),[e,n,t,c]}const[Km,Ym,Gm,Xm]=Wm();function wi(e,t){const n=t?e?Xm:Gm:e?Ym:Km;return(c,a,l)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?c:Reflect.get(Ae(n,a)&&a in c?n:c,a,l)}const Zm={get:wi(!1,!1)},Qm={get:wi(!1,!0)},Jm={get:wi(!0,!1)},Lu=new WeakMap,Fu=new WeakMap,Nu=new WeakMap,eh=new WeakMap;function th(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nh(e){return e.__v_skip||!Object.isExtensible(e)?0:th(_m(e))}function st(e){return Mc(e)?e:ji(e,!1,Ou,Zm,Lu)}function ch(e){return ji(e,!1,Um,Qm,Fu)}function $a(e){return ji(e,!0,Hm,Jm,Nu)}function ji(e,t,n,c,a){if(!Ne(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const l=a.get(e);if(l)return l;const s=nh(e);if(s===0)return e;const i=new Proxy(e,s===2?c:n);return a.set(e,i),i}function Ac(e){return Mc(e)?Ac(e.__v_raw):!!(e&&e.__v_isReactive)}function Mc(e){return!!(e&&e.__v_isReadonly)}function dl(e){return!!(e&&e.__v_isShallow)}function Du(e){return Ac(e)||Mc(e)}function xe(e){const t=e&&e.__v_raw;return t?xe(t):e}function zu(e){return ol(e,"__v_skip",!0),e}const pa=e=>Ne(e)?st(e):e,qi=e=>Ne(e)?$a(e):e;function Hu(e){Bn&&Dt&&(e=xe(e),Mu(e.dep||(e.dep=Si())))}function Uu(e,t){e=xe(e);const n=e.dep;n&&Ss(n)}function We(e){return!!(e&&e.__v_isRef===!0)}function $(e){return Wu(e,!1)}function Vi(e){return Wu(e,!0)}function Wu(e,t){return We(e)?e:new ah(e,t)}class ah{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:xe(t),this._value=n?t:pa(t)}get value(){return Hu(this),this._value}set value(t){const n=this.__v_isShallow||dl(t)||Mc(t);t=n?t:xe(t),ba(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:pa(t),Uu(this))}}function dt(e){return We(e)?e.value:e}const lh={get:(e,t,n)=>dt(Reflect.get(e,t,n)),set:(e,t,n,c)=>{const a=e[t];return We(a)&&!We(n)?(a.value=n,!0):Reflect.set(e,t,n,c)}};function Ku(e){return Ac(e)?e:new Proxy(e,lh)}function Ii(e){const t=be(e)?new Array(e.length):{};for(const n in e)t[n]=Y(e,n);return t}class sh{constructor(t,n,c){this._object=t,this._key=n,this._defaultValue=c,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Pm(xe(this._object),this._key)}}function Y(e,t,n){const c=e[t];return We(c)?c:new sh(e,t,n)}var Yu;class ih{constructor(t,n,c,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Yu]=!1,this._dirty=!0,this.effect=new Ci(t,()=>{this._dirty||(this._dirty=!0,Uu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=c}get value(){const t=xe(this);return Hu(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Yu="__v_isReadonly";function rh(e,t,n=!1){let c,a;const l=we(e);return l?(c=e,a=Ut):(c=e.get,a=e.set),new ih(c,a,l||!a,n)}function Rn(e,t,n,c){let a;try{a=c?e(...c):e()}catch(l){jl(l,t,n)}return a}function Pt(e,t,n,c){if(we(e)){const l=Rn(e,t,n,c);return l&&Vu(l)&&l.catch(s=>{jl(s,t,n)}),l}const a=[];for(let l=0;l<e.length;l++)a.push(Pt(e[l],t,n,c));return a}function jl(e,t,n,c=!0){const a=t?t.vnode:null;if(t){let l=t.parent;const s=t.proxy,i=n;for(;l;){const u=l.ec;if(u){for(let o=0;o<u.length;o++)if(u[o](e,s,i)===!1)return}l=l.parent}const r=t.appContext.config.errorHandler;if(r){Rn(r,null,10,[e,s,i]);return}}oh(e,n,a,c)}function oh(e,t,n,c=!0){console.error(e)}let ka=!1,Cs=!1;const ut=[];let en=0;const Pc=[];let vn=null,tc=0;const Gu=Promise.resolve();let Ei=null;function Oe(e){const t=Ei||Gu;return e?t.then(this?e.bind(this):e):t}function uh(e){let t=en+1,n=ut.length;for(;t<n;){const c=t+n>>>1;Sa(ut[c])<e?t=c+1:n=c}return t}function Ai(e){(!ut.length||!ut.includes(e,ka&&e.allowRecurse?en+1:en))&&(e.id==null?ut.push(e):ut.splice(uh(e.id),0,e),Xu())}function Xu(){!ka&&!Cs&&(Cs=!0,Ei=Gu.then(Qu))}function dh(e){const t=ut.indexOf(e);t>en&&ut.splice(t,1)}function fh(e){be(e)?Pc.push(...e):(!vn||!vn.includes(e,e.allowRecurse?tc+1:tc))&&Pc.push(e),Xu()}function Br(e,t=ka?en+1:0){for(;t<ut.length;t++){const n=ut[t];n&&n.pre&&(ut.splice(t,1),t--,n())}}function Zu(e){if(Pc.length){const t=[...new Set(Pc)];if(Pc.length=0,vn){vn.push(...t);return}for(vn=t,vn.sort((n,c)=>Sa(n)-Sa(c)),tc=0;tc<vn.length;tc++)vn[tc]();vn=null,tc=0}}const Sa=e=>e.id==null?1/0:e.id,vh=(e,t)=>{const n=Sa(e)-Sa(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Qu(e){Cs=!1,ka=!0,ut.sort(vh);const t=Ut;try{for(en=0;en<ut.length;en++){const n=ut[en];n&&n.active!==!1&&Rn(n,null,14)}}finally{en=0,ut.length=0,Zu(),ka=!1,Ei=null,(ut.length||Pc.length)&&Qu()}}function mh(e,t,...n){if(e.isUnmounted)return;const c=e.vnode.props||Fe;let a=n;const l=t.startsWith("update:"),s=l&&t.slice(7);if(s&&s in c){const o=`${s==="modelValue"?"model":s}Modifiers`,{number:d,trim:f}=c[o]||Fe;f&&(a=n.map(m=>Ye(m)?m.trim():m)),d&&(a=n.map(bs))}let i,r=c[i=nl(t)]||c[i=nl($t(t))];!r&&l&&(r=c[i=nl(Dc(t))]),r&&Pt(r,e,6,a);const u=c[i+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,Pt(u,e,6,a)}}function Ju(e,t,n=!1){const c=t.emitsCache,a=c.get(e);if(a!==void 0)return a;const l=e.emits;let s={},i=!1;if(!we(e)){const r=u=>{const o=Ju(u,t,!0);o&&(i=!0,at(s,o))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!l&&!i?(Ne(e)&&c.set(e,null),null):(be(l)?l.forEach(r=>s[r]=null):at(s,l),Ne(e)&&c.set(e,s),s)}function ql(e,t){return!e||!Cl(t)?!1:(t=t.slice(2).replace(/Once$/,""),Ae(e,t[0].toLowerCase()+t.slice(1))||Ae(e,Dc(t))||Ae(e,t))}let qt=null,ed=null;function fl(e){const t=qt;return qt=e,ed=e&&e.type.__scopeId||null,t}function Ee(e,t=qt,n){if(!t||e._n)return e;const c=(...a)=>{c._d&&Kr(-1);const l=fl(t);let s;try{s=e(...a)}finally{fl(l),c._d&&Kr(1)}return s};return c._n=!0,c._c=!0,c._d=!0,c}function Xl(e){const{type:t,vnode:n,proxy:c,withProxy:a,props:l,propsOptions:[s],slots:i,attrs:r,emit:u,render:o,renderCache:d,data:f,setupState:m,ctx:h,inheritAttrs:g}=e;let S,b;const C=fl(e);try{if(n.shapeFlag&4){const P=a||c;S=Qt(o.call(P,P,d,l,m,f,h)),b=r}else{const P=t;S=Qt(P.length>1?P(l,{attrs:r,slots:i,emit:u}):P(l,null)),b=t.props?r:hh(r)}}catch(P){va.length=0,jl(P,e,1),S=v(mn)}let p=S;if(b&&g!==!1){const P=Object.keys(b),{shapeFlag:j}=p;P.length&&j&7&&(s&&P.some(gi)&&(b=gh(b,s)),p=yn(p,b))}return n.dirs&&(p=yn(p),p.dirs=p.dirs?p.dirs.concat(n.dirs):n.dirs),n.transition&&(p.transition=n.transition),S=p,fl(C),S}const hh=e=>{let t;for(const n in e)(n==="class"||n==="style"||Cl(n))&&((t||(t={}))[n]=e[n]);return t},gh=(e,t)=>{const n={};for(const c in e)(!gi(c)||!(c.slice(9)in t))&&(n[c]=e[c]);return n};function yh(e,t,n){const{props:c,children:a,component:l}=e,{props:s,children:i,patchFlag:r}=t,u=l.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&r>=0){if(r&1024)return!0;if(r&16)return c?Rr(c,s,u):!!s;if(r&8){const o=t.dynamicProps;for(let d=0;d<o.length;d++){const f=o[d];if(s[f]!==c[f]&&!ql(u,f))return!0}}}else return(a||i)&&(!i||!i.$stable)?!0:c===s?!1:c?s?Rr(c,s,u):!0:!!s;return!1}function Rr(e,t,n){const c=Object.keys(t);if(c.length!==Object.keys(e).length)return!0;for(let a=0;a<c.length;a++){const l=c[a];if(t[l]!==e[l]&&!ql(n,l))return!0}return!1}function bh({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const ph=e=>e.__isSuspense;function kh(e,t){t&&t.pendingBranch?be(e)?t.effects.push(...e):t.effects.push(e):fh(e)}function Ke(e,t){if(Ge){let n=Ge.provides;const c=Ge.parent&&Ge.parent.provides;c===n&&(n=Ge.provides=Object.create(c)),n[e]=t}}function Ve(e,t,n=!1){const c=Ge||qt;if(c){const a=c.parent==null?c.vnode.appContext&&c.vnode.appContext.provides:c.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&we(t)?t.call(c.proxy):t}}function Kt(e,t){return Pi(e,null,t)}const Ya={};function ae(e,t,n){return Pi(e,t,n)}function Pi(e,t,{immediate:n,deep:c,flush:a,onTrack:l,onTrigger:s}=Fe){const i=Im()===(Ge==null?void 0:Ge.scope)?Ge:null;let r,u=!1,o=!1;if(We(e)?(r=()=>e.value,u=dl(e)):Ac(e)?(r=()=>e,c=!0):be(e)?(o=!0,u=e.some(p=>Ac(p)||dl(p)),r=()=>e.map(p=>{if(We(p))return p.value;if(Ac(p))return lc(p);if(we(p))return Rn(p,i,2)})):we(e)?t?r=()=>Rn(e,i,2):r=()=>{if(!(i&&i.isUnmounted))return d&&d(),Pt(e,i,3,[f])}:r=Ut,t&&c){const p=r;r=()=>lc(p())}let d,f=p=>{d=b.onStop=()=>{Rn(p,i,4)}},m;if(wa)if(f=Ut,t?n&&Pt(t,i,3,[r(),o?[]:void 0,f]):r(),a==="sync"){const p=og();m=p.__watcherHandles||(p.__watcherHandles=[])}else return Ut;let h=o?new Array(e.length).fill(Ya):Ya;const g=()=>{if(b.active)if(t){const p=b.run();(c||u||(o?p.some((P,j)=>ba(P,h[j])):ba(p,h)))&&(d&&d(),Pt(t,i,3,[p,h===Ya?void 0:o&&h[0]===Ya?[]:h,f]),h=p)}else b.run()};g.allowRecurse=!!t;let S;a==="sync"?S=g:a==="post"?S=()=>kt(g,i&&i.suspense):(g.pre=!0,i&&(g.id=i.uid),S=()=>Ai(g));const b=new Ci(r,S);t?n?g():h=b.run():a==="post"?kt(b.run.bind(b),i&&i.suspense):b.run();const C=()=>{b.stop(),i&&i.scope&&yi(i.scope.effects,b)};return m&&m.push(C),C}function Sh(e,t,n){const c=this.proxy,a=Ye(e)?e.includes(".")?td(c,e):()=>c[e]:e.bind(c,c);let l;we(t)?l=t:(l=t.handler,n=t);const s=Ge;Bc(this);const i=Pi(a,l.bind(c),n);return s?Bc(s):dc(),i}function td(e,t){const n=t.split(".");return()=>{let c=e;for(let a=0;a<n.length&&c;a++)c=c[n[a]];return c}}function lc(e,t){if(!Ne(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),We(e))lc(e.value,t);else if(be(e))for(let n=0;n<e.length;n++)lc(e[n],t);else if(qu(e)||Ec(e))e.forEach(n=>{lc(n,t)});else if(Eu(e))for(const n in e)lc(e[n],t);return e}function nd(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return mt(()=>{e.isMounted=!0}),pt(()=>{e.isUnmounting=!0}),e}const At=[Function,Array],Ch={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:At,onEnter:At,onAfterEnter:At,onEnterCancelled:At,onBeforeLeave:At,onLeave:At,onAfterLeave:At,onLeaveCancelled:At,onBeforeAppear:At,onAppear:At,onAfterAppear:At,onAppearCancelled:At},setup(e,{slots:t}){const n=Pl(),c=nd();let a;return()=>{const l=t.default&&Ti(t.default(),!0);if(!l||!l.length)return;let s=l[0];if(l.length>1){for(const g of l)if(g.type!==mn){s=g;break}}const i=xe(e),{mode:r}=i;if(c.isLeaving)return Zl(s);const u=Or(s);if(!u)return Zl(s);const o=Ca(u,i,c,n);_a(u,o);const d=n.subTree,f=d&&Or(d);let m=!1;const{getTransitionKey:h}=u.type;if(h){const g=h();a===void 0?a=g:g!==a&&(a=g,m=!0)}if(f&&f.type!==mn&&(!nc(u,f)||m)){const g=Ca(f,i,c,n);if(_a(f,g),r==="out-in")return c.isLeaving=!0,g.afterLeave=()=>{c.isLeaving=!1,n.update.active!==!1&&n.update()},Zl(s);r==="in-out"&&u.type!==mn&&(g.delayLeave=(S,b,C)=>{const p=ad(c,f);p[String(f.key)]=f,S._leaveCb=()=>{b(),S._leaveCb=void 0,delete o.delayedLeave},o.delayedLeave=C})}return s}}},cd=Ch;function ad(e,t){const{leavingVNodes:n}=e;let c=n.get(t.type);return c||(c=Object.create(null),n.set(t.type,c)),c}function Ca(e,t,n,c){const{appear:a,mode:l,persisted:s=!1,onBeforeEnter:i,onEnter:r,onAfterEnter:u,onEnterCancelled:o,onBeforeLeave:d,onLeave:f,onAfterLeave:m,onLeaveCancelled:h,onBeforeAppear:g,onAppear:S,onAfterAppear:b,onAppearCancelled:C}=t,p=String(e.key),P=ad(n,e),j=(k,x)=>{k&&Pt(k,c,9,x)},I=(k,x)=>{const q=x[1];j(k,x),be(k)?k.every(V=>V.length<=1)&&q():k.length<=1&&q()},E={mode:l,persisted:s,beforeEnter(k){let x=i;if(!n.isMounted)if(a)x=g||i;else return;k._leaveCb&&k._leaveCb(!0);const q=P[p];q&&nc(e,q)&&q.el._leaveCb&&q.el._leaveCb(),j(x,[k])},enter(k){let x=r,q=u,V=o;if(!n.isMounted)if(a)x=S||r,q=b||u,V=C||o;else return;let w=!1;const M=k._enterCb=N=>{w||(w=!0,N?j(V,[k]):j(q,[k]),E.delayedLeave&&E.delayedLeave(),k._enterCb=void 0)};x?I(x,[k,M]):M()},leave(k,x){const q=String(e.key);if(k._enterCb&&k._enterCb(!0),n.isUnmounting)return x();j(d,[k]);let V=!1;const w=k._leaveCb=M=>{V||(V=!0,x(),M?j(h,[k]):j(m,[k]),k._leaveCb=void 0,P[q]===e&&delete P[q])};P[q]=e,f?I(f,[k,w]):w()},clone(k){return Ca(k,t,n,c)}};return E}function Zl(e){if(Vl(e))return e=yn(e),e.children=null,e}function Or(e){return Vl(e)?e.children?e.children[0]:void 0:e}function _a(e,t){e.shapeFlag&6&&e.component?_a(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ti(e,t=!1,n){let c=[],a=0;for(let l=0;l<e.length;l++){let s=e[l];const i=n==null?s.key:String(n)+String(s.key!=null?s.key:l);s.type===me?(s.patchFlag&128&&a++,c=c.concat(Ti(s.children,t,i))):(t||s.type!==mn)&&c.push(i!=null?yn(s,{key:i}):s)}if(a>1)for(let l=0;l<c.length;l++)c[l].patchFlag=-2;return c}function $i(e){return we(e)?{setup:e,name:e.name}:e}const al=e=>!!e.type.__asyncLoader,Vl=e=>e.type.__isKeepAlive;function ld(e,t){id(e,"a",t)}function sd(e,t){id(e,"da",t)}function id(e,t,n=Ge){const c=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Il(t,c,n),n){let a=n.parent;for(;a&&a.parent;)Vl(a.parent.vnode)&&_h(c,t,n,a),a=a.parent}}function _h(e,t,n,c){const a=Il(t,e,c,!0);od(()=>{yi(c[t],a)},n)}function Il(e,t,n=Ge,c=!1){if(n){const a=n[e]||(n[e]=[]),l=t.__weh||(t.__weh=(...s)=>{if(n.isUnmounted)return;zc(),Bc(n);const i=Pt(t,n,e,s);return dc(),Hc(),i});return c?a.unshift(l):a.push(l),l}}const _n=e=>(t,n=Ge)=>(!wa||e==="sp")&&Il(e,(...c)=>t(...c),n),El=_n("bm"),mt=_n("m"),rd=_n("bu"),Mi=_n("u"),pt=_n("bum"),od=_n("um"),xh=_n("sp"),wh=_n("rtg"),jh=_n("rtc");function qh(e,t=Ge){Il("ec",e,t)}function He(e,t){const n=qt;if(n===null)return e;const c=Tl(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let l=0;l<t.length;l++){let[s,i,r,u=Fe]=t[l];s&&(we(s)&&(s={mounted:s,updated:s}),s.deep&&lc(i),a.push({dir:s,instance:c,value:i,oldValue:void 0,arg:r,modifiers:u}))}return e}function Gn(e,t,n,c){const a=e.dirs,l=t&&t.dirs;for(let s=0;s<a.length;s++){const i=a[s];l&&(i.oldValue=l[s].value);let r=i.dir[c];r&&(zc(),Pt(r,n,8,[e.el,i,e,t]),Hc())}}const Bi="components",Vh="directives";function Le(e,t){return Ri(Bi,e,!0,t)||e}const ud=Symbol();function Ih(e){return Ye(e)?Ri(Bi,e,!1)||e:e||ud}function Ct(e){return Ri(Vh,e)}function Ri(e,t,n=!0,c=!1){const a=qt||Ge;if(a){const l=a.type;if(e===Bi){const i=sg(l,!1);if(i&&(i===t||i===$t(t)||i===Cn($t(t))))return l}const s=Lr(a[e]||l[e],t)||Lr(a.appContext[e],t);return!s&&c?l:s}}function Lr(e,t){return e&&(e[t]||e[$t(t)]||e[Cn($t(t))])}function Mn(e,t,n,c){let a;const l=n&&n[c];if(be(e)||Ye(e)){a=new Array(e.length);for(let s=0,i=e.length;s<i;s++)a[s]=t(e[s],s,void 0,l&&l[s])}else if(typeof e=="number"){a=new Array(e);for(let s=0;s<e;s++)a[s]=t(s+1,s,void 0,l&&l[s])}else if(Ne(e))if(e[Symbol.iterator])a=Array.from(e,(s,i)=>t(s,i,void 0,l&&l[i]));else{const s=Object.keys(e);a=new Array(s.length);for(let i=0,r=s.length;i<r;i++){const u=s[i];a[i]=t(e[u],u,i,l&&l[i])}}else a=[];return n&&(n[c]=a),a}function Ql(e,t){const n={};for(const c in e)n[t&&/[A-Z]/.test(c)?`on:${c}`:nl(c)]=e[c];return n}const _s=e=>e?Sd(e)?Tl(e)||e.proxy:_s(e.parent):null,da=at(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>_s(e.parent),$root:e=>_s(e.root),$emit:e=>e.emit,$options:e=>Oi(e),$forceUpdate:e=>e.f||(e.f=()=>Ai(e.update)),$nextTick:e=>e.n||(e.n=Oe.bind(e.proxy)),$watch:e=>Sh.bind(e)}),Jl=(e,t)=>e!==Fe&&!e.__isScriptSetup&&Ae(e,t),Eh={get({_:e},t){const{ctx:n,setupState:c,data:a,props:l,accessCache:s,type:i,appContext:r}=e;let u;if(t[0]!=="$"){const m=s[t];if(m!==void 0)switch(m){case 1:return c[t];case 2:return a[t];case 4:return n[t];case 3:return l[t]}else{if(Jl(c,t))return s[t]=1,c[t];if(a!==Fe&&Ae(a,t))return s[t]=2,a[t];if((u=e.propsOptions[0])&&Ae(u,t))return s[t]=3,l[t];if(n!==Fe&&Ae(n,t))return s[t]=4,n[t];xs&&(s[t]=0)}}const o=da[t];let d,f;if(o)return t==="$attrs"&&St(e,"get",t),o(e);if((d=i.__cssModules)&&(d=d[t]))return d;if(n!==Fe&&Ae(n,t))return s[t]=4,n[t];if(f=r.config.globalProperties,Ae(f,t))return f[t]},set({_:e},t,n){const{data:c,setupState:a,ctx:l}=e;return Jl(a,t)?(a[t]=n,!0):c!==Fe&&Ae(c,t)?(c[t]=n,!0):Ae(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(l[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:c,appContext:a,propsOptions:l}},s){let i;return!!n[s]||e!==Fe&&Ae(e,s)||Jl(t,s)||(i=l[0])&&Ae(i,s)||Ae(c,s)||Ae(da,s)||Ae(a.config.globalProperties,s)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Ae(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let xs=!0;function Ah(e){const t=Oi(e),n=e.proxy,c=e.ctx;xs=!1,t.beforeCreate&&Fr(t.beforeCreate,e,"bc");const{data:a,computed:l,methods:s,watch:i,provide:r,inject:u,created:o,beforeMount:d,mounted:f,beforeUpdate:m,updated:h,activated:g,deactivated:S,beforeDestroy:b,beforeUnmount:C,destroyed:p,unmounted:P,render:j,renderTracked:I,renderTriggered:E,errorCaptured:k,serverPrefetch:x,expose:q,inheritAttrs:V,components:w,directives:M,filters:N}=t;if(u&&Ph(u,c,null,e.appContext.config.unwrapInjectedRef),s)for(const H in s){const D=s[H];we(D)&&(c[H]=D.bind(n))}if(a){const H=a.call(n,n);Ne(H)&&(e.data=st(H))}if(xs=!0,l)for(const H in l){const D=l[H],J=we(D)?D.bind(n,n):we(D.get)?D.get.bind(n,n):Ut,R=!we(D)&&we(D.set)?D.set.bind(n):Ut,K=y({get:J,set:R});Object.defineProperty(c,H,{enumerable:!0,configurable:!0,get:()=>K.value,set:z=>K.value=z})}if(i)for(const H in i)dd(i[H],c,n,H);if(r){const H=we(r)?r.call(n):r;Reflect.ownKeys(H).forEach(D=>{Ke(D,H[D])})}o&&Fr(o,e,"c");function F(H,D){be(D)?D.forEach(J=>H(J.bind(n))):D&&H(D.bind(n))}if(F(El,d),F(mt,f),F(rd,m),F(Mi,h),F(ld,g),F(sd,S),F(qh,k),F(jh,I),F(wh,E),F(pt,C),F(od,P),F(xh,x),be(q))if(q.length){const H=e.exposed||(e.exposed={});q.forEach(D=>{Object.defineProperty(H,D,{get:()=>n[D],set:J=>n[D]=J})})}else e.exposed||(e.exposed={});j&&e.render===Ut&&(e.render=j),V!=null&&(e.inheritAttrs=V),w&&(e.components=w),M&&(e.directives=M)}function Ph(e,t,n=Ut,c=!1){be(e)&&(e=ws(e));for(const a in e){const l=e[a];let s;Ne(l)?"default"in l?s=Ve(l.from||a,l.default,!0):s=Ve(l.from||a):s=Ve(l),We(s)&&c?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>s.value,set:i=>s.value=i}):t[a]=s}}function Fr(e,t,n){Pt(be(e)?e.map(c=>c.bind(t.proxy)):e.bind(t.proxy),t,n)}function dd(e,t,n,c){const a=c.includes(".")?td(n,c):()=>n[c];if(Ye(e)){const l=t[e];we(l)&&ae(a,l)}else if(we(e))ae(a,e.bind(n));else if(Ne(e))if(be(e))e.forEach(l=>dd(l,t,n,c));else{const l=we(e.handler)?e.handler.bind(n):t[e.handler];we(l)&&ae(a,l,e)}}function Oi(e){const t=e.type,{mixins:n,extends:c}=t,{mixins:a,optionsCache:l,config:{optionMergeStrategies:s}}=e.appContext,i=l.get(t);let r;return i?r=i:!a.length&&!n&&!c?r=t:(r={},a.length&&a.forEach(u=>vl(r,u,s,!0)),vl(r,t,s)),Ne(t)&&l.set(t,r),r}function vl(e,t,n,c=!1){const{mixins:a,extends:l}=t;l&&vl(e,l,n,!0),a&&a.forEach(s=>vl(e,s,n,!0));for(const s in t)if(!(c&&s==="expose")){const i=Th[s]||n&&n[s];e[s]=i?i(e[s],t[s]):t[s]}return e}const Th={data:Nr,props:ec,emits:ec,methods:ec,computed:ec,beforeCreate:yt,created:yt,beforeMount:yt,mounted:yt,beforeUpdate:yt,updated:yt,beforeDestroy:yt,beforeUnmount:yt,destroyed:yt,unmounted:yt,activated:yt,deactivated:yt,errorCaptured:yt,serverPrefetch:yt,components:ec,directives:ec,watch:Mh,provide:Nr,inject:$h};function Nr(e,t){return t?e?function(){return at(we(e)?e.call(this,this):e,we(t)?t.call(this,this):t)}:t:e}function $h(e,t){return ec(ws(e),ws(t))}function ws(e){if(be(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function yt(e,t){return e?[...new Set([].concat(e,t))]:t}function ec(e,t){return e?at(at(Object.create(null),e),t):t}function Mh(e,t){if(!e)return t;if(!t)return e;const n=at(Object.create(null),e);for(const c in t)n[c]=yt(e[c],t[c]);return n}function Bh(e,t,n,c=!1){const a={},l={};ol(l,Al,1),e.propsDefaults=Object.create(null),fd(e,t,a,l);for(const s in e.propsOptions[0])s in a||(a[s]=void 0);n?e.props=c?a:ch(a):e.type.props?e.props=a:e.props=l,e.attrs=l}function Rh(e,t,n,c){const{props:a,attrs:l,vnode:{patchFlag:s}}=e,i=xe(a),[r]=e.propsOptions;let u=!1;if((c||s>0)&&!(s&16)){if(s&8){const o=e.vnode.dynamicProps;for(let d=0;d<o.length;d++){let f=o[d];if(ql(e.emitsOptions,f))continue;const m=t[f];if(r)if(Ae(l,f))m!==l[f]&&(l[f]=m,u=!0);else{const h=$t(f);a[h]=js(r,i,h,m,e,!1)}else m!==l[f]&&(l[f]=m,u=!0)}}}else{fd(e,t,a,l)&&(u=!0);let o;for(const d in i)(!t||!Ae(t,d)&&((o=Dc(d))===d||!Ae(t,o)))&&(r?n&&(n[d]!==void 0||n[o]!==void 0)&&(a[d]=js(r,i,d,void 0,e,!0)):delete a[d]);if(l!==i)for(const d in l)(!t||!Ae(t,d))&&(delete l[d],u=!0)}u&&gn(e,"set","$attrs")}function fd(e,t,n,c){const[a,l]=e.propsOptions;let s=!1,i;if(t)for(let r in t){if(tl(r))continue;const u=t[r];let o;a&&Ae(a,o=$t(r))?!l||!l.includes(o)?n[o]=u:(i||(i={}))[o]=u:ql(e.emitsOptions,r)||(!(r in c)||u!==c[r])&&(c[r]=u,s=!0)}if(l){const r=xe(n),u=i||Fe;for(let o=0;o<l.length;o++){const d=l[o];n[d]=js(a,r,d,u[d],e,!Ae(u,d))}}return s}function js(e,t,n,c,a,l){const s=e[n];if(s!=null){const i=Ae(s,"default");if(i&&c===void 0){const r=s.default;if(s.type!==Function&&we(r)){const{propsDefaults:u}=a;n in u?c=u[n]:(Bc(a),c=u[n]=r.call(null,t),dc())}else c=r}s[0]&&(l&&!i?c=!1:s[1]&&(c===""||c===Dc(n))&&(c=!0))}return c}function vd(e,t,n=!1){const c=t.propsCache,a=c.get(e);if(a)return a;const l=e.props,s={},i=[];let r=!1;if(!we(e)){const o=d=>{r=!0;const[f,m]=vd(d,t,!0);at(s,f),m&&i.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}if(!l&&!r)return Ne(e)&&c.set(e,Ic),Ic;if(be(l))for(let o=0;o<l.length;o++){const d=$t(l[o]);Dr(d)&&(s[d]=Fe)}else if(l)for(const o in l){const d=$t(o);if(Dr(d)){const f=l[o],m=s[d]=be(f)||we(f)?{type:f}:Object.assign({},f);if(m){const h=Ur(Boolean,m.type),g=Ur(String,m.type);m[0]=h>-1,m[1]=g<0||h<g,(h>-1||Ae(m,"default"))&&i.push(d)}}}const u=[s,i];return Ne(e)&&c.set(e,u),u}function Dr(e){return e[0]!=="$"}function zr(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Hr(e,t){return zr(e)===zr(t)}function Ur(e,t){return be(t)?t.findIndex(n=>Hr(n,e)):we(t)&&Hr(t,e)?0:-1}const md=e=>e[0]==="_"||e==="$stable",Li=e=>be(e)?e.map(Qt):[Qt(e)],Oh=(e,t,n)=>{if(t._n)return t;const c=Ee((...a)=>Li(t(...a)),n);return c._c=!1,c},hd=(e,t,n)=>{const c=e._ctx;for(const a in e){if(md(a))continue;const l=e[a];if(we(l))t[a]=Oh(a,l,c);else if(l!=null){const s=Li(l);t[a]=()=>s}}},gd=(e,t)=>{const n=Li(t);e.slots.default=()=>n},Lh=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=xe(t),ol(t,"_",n)):hd(t,e.slots={})}else e.slots={},t&&gd(e,t);ol(e.slots,Al,1)},Fh=(e,t,n)=>{const{vnode:c,slots:a}=e;let l=!0,s=Fe;if(c.shapeFlag&32){const i=t._;i?n&&i===1?l=!1:(at(a,t),!n&&i===1&&delete a._):(l=!t.$stable,hd(t,a)),s=t}else t&&(gd(e,t),s={default:1});if(l)for(const i in a)!md(i)&&!(i in s)&&delete a[i]};function yd(){return{app:null,config:{isNativeTag:km,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nh=0;function Dh(e,t){return function(c,a=null){we(c)||(c=Object.assign({},c)),a!=null&&!Ne(a)&&(a=null);const l=yd(),s=new Set;let i=!1;const r=l.app={_uid:Nh++,_component:c,_props:a,_container:null,_context:l,_instance:null,version:ug,get config(){return l.config},set config(u){},use(u,...o){return s.has(u)||(u&&we(u.install)?(s.add(u),u.install(r,...o)):we(u)&&(s.add(u),u(r,...o))),r},mixin(u){return l.mixins.includes(u)||l.mixins.push(u),r},component(u,o){return o?(l.components[u]=o,r):l.components[u]},directive(u,o){return o?(l.directives[u]=o,r):l.directives[u]},mount(u,o,d){if(!i){const f=v(c,a);return f.appContext=l,o&&t?t(f,u):e(f,u,d),i=!0,r._container=u,u.__vue_app__=r,Tl(f.component)||f.component.proxy}},unmount(){i&&(e(null,r._container),delete r._container.__vue_app__)},provide(u,o){return l.provides[u]=o,r}};return r}}function qs(e,t,n,c,a=!1){if(be(e)){e.forEach((f,m)=>qs(f,t&&(be(t)?t[m]:t),n,c,a));return}if(al(c)&&!a)return;const l=c.shapeFlag&4?Tl(c.component)||c.component.proxy:c.el,s=a?null:l,{i,r}=e,u=t&&t.r,o=i.refs===Fe?i.refs={}:i.refs,d=i.setupState;if(u!=null&&u!==r&&(Ye(u)?(o[u]=null,Ae(d,u)&&(d[u]=null)):We(u)&&(u.value=null)),we(r))Rn(r,i,12,[s,o]);else{const f=Ye(r),m=We(r);if(f||m){const h=()=>{if(e.f){const g=f?Ae(d,r)?d[r]:o[r]:r.value;a?be(g)&&yi(g,l):be(g)?g.includes(l)||g.push(l):f?(o[r]=[l],Ae(d,r)&&(d[r]=o[r])):(r.value=[l],e.k&&(o[e.k]=r.value))}else f?(o[r]=s,Ae(d,r)&&(d[r]=s)):m&&(r.value=s,e.k&&(o[e.k]=s))};s?(h.id=-1,kt(h,n)):h()}}}const kt=kh;function zh(e){return Hh(e)}function Hh(e,t){const n=qm();n.__VUE__=!0;const{insert:c,remove:a,patchProp:l,createElement:s,createText:i,createComment:r,setText:u,setElementText:o,parentNode:d,nextSibling:f,setScopeId:m=Ut,insertStaticContent:h}=e,g=(_,A,L,U=null,G=null,te=null,se=!1,ee=null,ce=!!A.dynamicChildren)=>{if(_===A)return;_&&!nc(_,A)&&(U=O(_),z(_,G,te,!0),_=null),A.patchFlag===-2&&(ce=!1,A.dynamicChildren=null);const{type:Q,ref:he,shapeFlag:de}=A;switch(Q){case Ma:S(_,A,L,U);break;case mn:b(_,A,L,U);break;case es:_==null&&C(A,L,U,se);break;case me:w(_,A,L,U,G,te,se,ee,ce);break;default:de&1?j(_,A,L,U,G,te,se,ee,ce):de&6?M(_,A,L,U,G,te,se,ee,ce):(de&64||de&128)&&Q.process(_,A,L,U,G,te,se,ee,ce,oe)}he!=null&&G&&qs(he,_&&_.ref,te,A||_,!A)},S=(_,A,L,U)=>{if(_==null)c(A.el=i(A.children),L,U);else{const G=A.el=_.el;A.children!==_.children&&u(G,A.children)}},b=(_,A,L,U)=>{_==null?c(A.el=r(A.children||""),L,U):A.el=_.el},C=(_,A,L,U)=>{[_.el,_.anchor]=h(_.children,A,L,U,_.el,_.anchor)},p=({el:_,anchor:A},L,U)=>{let G;for(;_&&_!==A;)G=f(_),c(_,L,U),_=G;c(A,L,U)},P=({el:_,anchor:A})=>{let L;for(;_&&_!==A;)L=f(_),a(_),_=L;a(A)},j=(_,A,L,U,G,te,se,ee,ce)=>{se=se||A.type==="svg",_==null?I(A,L,U,G,te,se,ee,ce):x(_,A,G,te,se,ee,ce)},I=(_,A,L,U,G,te,se,ee)=>{let ce,Q;const{type:he,props:de,shapeFlag:ge,transition:Se,dirs:qe}=_;if(ce=_.el=s(_.type,te,de&&de.is,de),ge&8?o(ce,_.children):ge&16&&k(_.children,ce,null,U,G,te&&he!=="foreignObject",se,ee),qe&&Gn(_,null,U,"created"),E(ce,_,_.scopeId,se,U),de){for(const Me in de)Me!=="value"&&!tl(Me)&&l(ce,Me,null,de[Me],te,_.children,U,G,T);"value"in de&&l(ce,"value",null,de.value),(Q=de.onVnodeBeforeMount)&&Zt(Q,U,_)}qe&&Gn(_,null,U,"beforeMount");const Re=(!G||G&&!G.pendingBranch)&&Se&&!Se.persisted;Re&&Se.beforeEnter(ce),c(ce,A,L),((Q=de&&de.onVnodeMounted)||Re||qe)&&kt(()=>{Q&&Zt(Q,U,_),Re&&Se.enter(ce),qe&&Gn(_,null,U,"mounted")},G)},E=(_,A,L,U,G)=>{if(L&&m(_,L),U)for(let te=0;te<U.length;te++)m(_,U[te]);if(G){let te=G.subTree;if(A===te){const se=G.vnode;E(_,se,se.scopeId,se.slotScopeIds,G.parent)}}},k=(_,A,L,U,G,te,se,ee,ce=0)=>{for(let Q=ce;Q<_.length;Q++){const he=_[Q]=ee?Tn(_[Q]):Qt(_[Q]);g(null,he,A,L,U,G,te,se,ee)}},x=(_,A,L,U,G,te,se)=>{const ee=A.el=_.el;let{patchFlag:ce,dynamicChildren:Q,dirs:he}=A;ce|=_.patchFlag&16;const de=_.props||Fe,ge=A.props||Fe;let Se;L&&Xn(L,!1),(Se=ge.onVnodeBeforeUpdate)&&Zt(Se,L,A,_),he&&Gn(A,_,L,"beforeUpdate"),L&&Xn(L,!0);const qe=G&&A.type!=="foreignObject";if(Q?q(_.dynamicChildren,Q,ee,L,U,qe,te):se||D(_,A,ee,null,L,U,qe,te,!1),ce>0){if(ce&16)V(ee,A,de,ge,L,U,G);else if(ce&2&&de.class!==ge.class&&l(ee,"class",null,ge.class,G),ce&4&&l(ee,"style",de.style,ge.style,G),ce&8){const Re=A.dynamicProps;for(let Me=0;Me<Re.length;Me++){const Qe=Re[Me],Nt=de[Qe],kc=ge[Qe];(kc!==Nt||Qe==="value")&&l(ee,Qe,Nt,kc,G,_.children,L,U,T)}}ce&1&&_.children!==A.children&&o(ee,A.children)}else!se&&Q==null&&V(ee,A,de,ge,L,U,G);((Se=ge.onVnodeUpdated)||he)&&kt(()=>{Se&&Zt(Se,L,A,_),he&&Gn(A,_,L,"updated")},U)},q=(_,A,L,U,G,te,se)=>{for(let ee=0;ee<A.length;ee++){const ce=_[ee],Q=A[ee],he=ce.el&&(ce.type===me||!nc(ce,Q)||ce.shapeFlag&70)?d(ce.el):L;g(ce,Q,he,null,U,G,te,se,!0)}},V=(_,A,L,U,G,te,se)=>{if(L!==U){if(L!==Fe)for(const ee in L)!tl(ee)&&!(ee in U)&&l(_,ee,L[ee],null,se,A.children,G,te,T);for(const ee in U){if(tl(ee))continue;const ce=U[ee],Q=L[ee];ce!==Q&&ee!=="value"&&l(_,ee,Q,ce,se,A.children,G,te,T)}"value"in U&&l(_,"value",L.value,U.value)}},w=(_,A,L,U,G,te,se,ee,ce)=>{const Q=A.el=_?_.el:i(""),he=A.anchor=_?_.anchor:i("");let{patchFlag:de,dynamicChildren:ge,slotScopeIds:Se}=A;Se&&(ee=ee?ee.concat(Se):Se),_==null?(c(Q,L,U),c(he,L,U),k(A.children,L,he,G,te,se,ee,ce)):de>0&&de&64&&ge&&_.dynamicChildren?(q(_.dynamicChildren,ge,L,G,te,se,ee),(A.key!=null||G&&A===G.subTree)&&Fi(_,A,!0)):D(_,A,L,he,G,te,se,ee,ce)},M=(_,A,L,U,G,te,se,ee,ce)=>{A.slotScopeIds=ee,_==null?A.shapeFlag&512?G.ctx.activate(A,L,U,se,ce):N(A,L,U,G,te,se,ce):Z(_,A,ce)},N=(_,A,L,U,G,te,se)=>{const ee=_.component=tg(_,U,G);if(Vl(_)&&(ee.ctx.renderer=oe),ng(ee),ee.asyncDep){if(G&&G.registerDep(ee,F),!_.el){const ce=ee.subTree=v(mn);b(null,ce,A,L)}return}F(ee,_,A,L,G,te,se)},Z=(_,A,L)=>{const U=A.component=_.component;if(yh(_,A,L))if(U.asyncDep&&!U.asyncResolved){H(U,A,L);return}else U.next=A,dh(U.update),U.update();else A.el=_.el,U.vnode=A},F=(_,A,L,U,G,te,se)=>{const ee=()=>{if(_.isMounted){let{next:he,bu:de,u:ge,parent:Se,vnode:qe}=_,Re=he,Me;Xn(_,!1),he?(he.el=qe.el,H(_,he,se)):he=qe,de&&cl(de),(Me=he.props&&he.props.onVnodeBeforeUpdate)&&Zt(Me,Se,he,qe),Xn(_,!0);const Qe=Xl(_),Nt=_.subTree;_.subTree=Qe,g(Nt,Qe,d(Nt.el),O(Nt),_,G,te),he.el=Qe.el,Re===null&&bh(_,Qe.el),ge&&kt(ge,G),(Me=he.props&&he.props.onVnodeUpdated)&&kt(()=>Zt(Me,Se,he,qe),G)}else{let he;const{el:de,props:ge}=A,{bm:Se,m:qe,parent:Re}=_,Me=al(A);if(Xn(_,!1),Se&&cl(Se),!Me&&(he=ge&&ge.onVnodeBeforeMount)&&Zt(he,Re,A),Xn(_,!0),de&&ve){const Qe=()=>{_.subTree=Xl(_),ve(de,_.subTree,_,G,null)};Me?A.type.__asyncLoader().then(()=>!_.isUnmounted&&Qe()):Qe()}else{const Qe=_.subTree=Xl(_);g(null,Qe,L,U,_,G,te),A.el=Qe.el}if(qe&&kt(qe,G),!Me&&(he=ge&&ge.onVnodeMounted)){const Qe=A;kt(()=>Zt(he,Re,Qe),G)}(A.shapeFlag&256||Re&&al(Re.vnode)&&Re.vnode.shapeFlag&256)&&_.a&&kt(_.a,G),_.isMounted=!0,A=L=U=null}},ce=_.effect=new Ci(ee,()=>Ai(Q),_.scope),Q=_.update=()=>ce.run();Q.id=_.uid,Xn(_,!0),Q()},H=(_,A,L)=>{A.component=_;const U=_.vnode.props;_.vnode=A,_.next=null,Rh(_,A.props,U,L),Fh(_,A.children,L),zc(),Br(),Hc()},D=(_,A,L,U,G,te,se,ee,ce=!1)=>{const Q=_&&_.children,he=_?_.shapeFlag:0,de=A.children,{patchFlag:ge,shapeFlag:Se}=A;if(ge>0){if(ge&128){R(Q,de,L,U,G,te,se,ee,ce);return}else if(ge&256){J(Q,de,L,U,G,te,se,ee,ce);return}}Se&8?(he&16&&T(Q,G,te),de!==Q&&o(L,de)):he&16?Se&16?R(Q,de,L,U,G,te,se,ee,ce):T(Q,G,te,!0):(he&8&&o(L,""),Se&16&&k(de,L,U,G,te,se,ee,ce))},J=(_,A,L,U,G,te,se,ee,ce)=>{_=_||Ic,A=A||Ic;const Q=_.length,he=A.length,de=Math.min(Q,he);let ge;for(ge=0;ge<de;ge++){const Se=A[ge]=ce?Tn(A[ge]):Qt(A[ge]);g(_[ge],Se,L,null,G,te,se,ee,ce)}Q>he?T(_,G,te,!0,!1,de):k(A,L,U,G,te,se,ee,ce,de)},R=(_,A,L,U,G,te,se,ee,ce)=>{let Q=0;const he=A.length;let de=_.length-1,ge=he-1;for(;Q<=de&&Q<=ge;){const Se=_[Q],qe=A[Q]=ce?Tn(A[Q]):Qt(A[Q]);if(nc(Se,qe))g(Se,qe,L,null,G,te,se,ee,ce);else break;Q++}for(;Q<=de&&Q<=ge;){const Se=_[de],qe=A[ge]=ce?Tn(A[ge]):Qt(A[ge]);if(nc(Se,qe))g(Se,qe,L,null,G,te,se,ee,ce);else break;de--,ge--}if(Q>de){if(Q<=ge){const Se=ge+1,qe=Se<he?A[Se].el:U;for(;Q<=ge;)g(null,A[Q]=ce?Tn(A[Q]):Qt(A[Q]),L,qe,G,te,se,ee,ce),Q++}}else if(Q>ge)for(;Q<=de;)z(_[Q],G,te,!0),Q++;else{const Se=Q,qe=Q,Re=new Map;for(Q=qe;Q<=ge;Q++){const _t=A[Q]=ce?Tn(A[Q]):Qt(A[Q]);_t.key!=null&&Re.set(_t.key,Q)}let Me,Qe=0;const Nt=ge-qe+1;let kc=!1,wr=0;const ca=new Array(Nt);for(Q=0;Q<Nt;Q++)ca[Q]=0;for(Q=Se;Q<=de;Q++){const _t=_[Q];if(Qe>=Nt){z(_t,G,te,!0);continue}let Xt;if(_t.key!=null)Xt=Re.get(_t.key);else for(Me=qe;Me<=ge;Me++)if(ca[Me-qe]===0&&nc(_t,A[Me])){Xt=Me;break}Xt===void 0?z(_t,G,te,!0):(ca[Xt-qe]=Q+1,Xt>=wr?wr=Xt:kc=!0,g(_t,A[Xt],L,null,G,te,se,ee,ce),Qe++)}const jr=kc?Uh(ca):Ic;for(Me=jr.length-1,Q=Nt-1;Q>=0;Q--){const _t=qe+Q,Xt=A[_t],qr=_t+1<he?A[_t+1].el:U;ca[Q]===0?g(null,Xt,L,qr,G,te,se,ee,ce):kc&&(Me<0||Q!==jr[Me]?K(Xt,L,qr,2):Me--)}}},K=(_,A,L,U,G=null)=>{const{el:te,type:se,transition:ee,children:ce,shapeFlag:Q}=_;if(Q&6){K(_.component.subTree,A,L,U);return}if(Q&128){_.suspense.move(A,L,U);return}if(Q&64){se.move(_,A,L,oe);return}if(se===me){c(te,A,L);for(let de=0;de<ce.length;de++)K(ce[de],A,L,U);c(_.anchor,A,L);return}if(se===es){p(_,A,L);return}if(U!==2&&Q&1&&ee)if(U===0)ee.beforeEnter(te),c(te,A,L),kt(()=>ee.enter(te),G);else{const{leave:de,delayLeave:ge,afterLeave:Se}=ee,qe=()=>c(te,A,L),Re=()=>{de(te,()=>{qe(),Se&&Se()})};ge?ge(te,qe,Re):Re()}else c(te,A,L)},z=(_,A,L,U=!1,G=!1)=>{const{type:te,props:se,ref:ee,children:ce,dynamicChildren:Q,shapeFlag:he,patchFlag:de,dirs:ge}=_;if(ee!=null&&qs(ee,null,L,_,!0),he&256){A.ctx.deactivate(_);return}const Se=he&1&&ge,qe=!al(_);let Re;if(qe&&(Re=se&&se.onVnodeBeforeUnmount)&&Zt(Re,A,_),he&6)B(_.component,L,U);else{if(he&128){_.suspense.unmount(L,U);return}Se&&Gn(_,null,A,"beforeUnmount"),he&64?_.type.remove(_,A,L,G,oe,U):Q&&(te!==me||de>0&&de&64)?T(Q,A,L,!1,!0):(te===me&&de&384||!G&&he&16)&&T(ce,A,L),U&&fe(_)}(qe&&(Re=se&&se.onVnodeUnmounted)||Se)&&kt(()=>{Re&&Zt(Re,A,_),Se&&Gn(_,null,A,"unmounted")},L)},fe=_=>{const{type:A,el:L,anchor:U,transition:G}=_;if(A===me){ue(L,U);return}if(A===es){P(_);return}const te=()=>{a(L),G&&!G.persisted&&G.afterLeave&&G.afterLeave()};if(_.shapeFlag&1&&G&&!G.persisted){const{leave:se,delayLeave:ee}=G,ce=()=>se(L,te);ee?ee(_.el,te,ce):ce()}else te()},ue=(_,A)=>{let L;for(;_!==A;)L=f(_),a(_),_=L;a(A)},B=(_,A,L)=>{const{bum:U,scope:G,update:te,subTree:se,um:ee}=_;U&&cl(U),G.stop(),te&&(te.active=!1,z(se,_,A,L)),ee&&kt(ee,A),kt(()=>{_.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},T=(_,A,L,U=!1,G=!1,te=0)=>{for(let se=te;se<_.length;se++)z(_[se],A,L,U,G)},O=_=>_.shapeFlag&6?O(_.component.subTree):_.shapeFlag&128?_.suspense.next():f(_.anchor||_.el),re=(_,A,L)=>{_==null?A._vnode&&z(A._vnode,null,null,!0):g(A._vnode||null,_,A,null,null,null,L),Br(),Zu(),A._vnode=_},oe={p:g,um:z,m:K,r:fe,mt:N,mc:k,pc:D,pbc:q,n:O,o:e};let je,ve;return t&&([je,ve]=t(oe)),{render:re,hydrate:je,createApp:Dh(re,je)}}function Xn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Fi(e,t,n=!1){const c=e.children,a=t.children;if(be(c)&&be(a))for(let l=0;l<c.length;l++){const s=c[l];let i=a[l];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=a[l]=Tn(a[l]),i.el=s.el),n||Fi(s,i)),i.type===Ma&&(i.el=s.el)}}function Uh(e){const t=e.slice(),n=[0];let c,a,l,s,i;const r=e.length;for(c=0;c<r;c++){const u=e[c];if(u!==0){if(a=n[n.length-1],e[a]<u){t[c]=a,n.push(c);continue}for(l=0,s=n.length-1;l<s;)i=l+s>>1,e[n[i]]<u?l=i+1:s=i;u<e[n[l]]&&(l>0&&(t[c]=n[l-1]),n[l]=c)}}for(l=n.length,s=n[l-1];l-- >0;)n[l]=s,s=t[s];return n}const Wh=e=>e.__isTeleport,fa=e=>e&&(e.disabled||e.disabled===""),Wr=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Vs=(e,t)=>{const n=e&&e.to;return Ye(n)?t?t(n):null:n},Kh={__isTeleport:!0,process(e,t,n,c,a,l,s,i,r,u){const{mc:o,pc:d,pbc:f,o:{insert:m,querySelector:h,createText:g,createComment:S}}=u,b=fa(t.props);let{shapeFlag:C,children:p,dynamicChildren:P}=t;if(e==null){const j=t.el=g(""),I=t.anchor=g("");m(j,n,c),m(I,n,c);const E=t.target=Vs(t.props,h),k=t.targetAnchor=g("");E&&(m(k,E),s=s||Wr(E));const x=(q,V)=>{C&16&&o(p,q,V,a,l,s,i,r)};b?x(n,I):E&&x(E,k)}else{t.el=e.el;const j=t.anchor=e.anchor,I=t.target=e.target,E=t.targetAnchor=e.targetAnchor,k=fa(e.props),x=k?n:I,q=k?j:E;if(s=s||Wr(I),P?(f(e.dynamicChildren,P,x,a,l,s,i),Fi(e,t,!0)):r||d(e,t,x,q,a,l,s,i,!1),b)k||Ga(t,n,j,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const V=t.target=Vs(t.props,h);V&&Ga(t,V,null,u,0)}else k&&Ga(t,I,E,u,1)}bd(t)},remove(e,t,n,c,{um:a,o:{remove:l}},s){const{shapeFlag:i,children:r,anchor:u,targetAnchor:o,target:d,props:f}=e;if(d&&l(o),(s||!fa(f))&&(l(u),i&16))for(let m=0;m<r.length;m++){const h=r[m];a(h,t,n,!0,!!h.dynamicChildren)}},move:Ga,hydrate:Yh};function Ga(e,t,n,{o:{insert:c},m:a},l=2){l===0&&c(e.targetAnchor,t,n);const{el:s,anchor:i,shapeFlag:r,children:u,props:o}=e,d=l===2;if(d&&c(s,t,n),(!d||fa(o))&&r&16)for(let f=0;f<u.length;f++)a(u[f],t,n,2);d&&c(i,t,n)}function Yh(e,t,n,c,a,l,{o:{nextSibling:s,parentNode:i,querySelector:r}},u){const o=t.target=Vs(t.props,r);if(o){const d=o._lpa||o.firstChild;if(t.shapeFlag&16)if(fa(t.props))t.anchor=u(s(e),t,i(e),n,c,a,l),t.targetAnchor=d;else{t.anchor=s(e);let f=d;for(;f;)if(f=s(f),f&&f.nodeType===8&&f.data==="teleport anchor"){t.targetAnchor=f,o._lpa=t.targetAnchor&&s(t.targetAnchor);break}u(d,t,o,n,c,a,l)}bd(t)}return t.anchor&&s(t.anchor)}const Gh=Kh;function bd(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const me=Symbol(void 0),Ma=Symbol(void 0),mn=Symbol(void 0),es=Symbol(void 0),va=[];let zt=null;function Be(e=!1){va.push(zt=e?null:[])}function Xh(){va.pop(),zt=va[va.length-1]||null}let xa=1;function Kr(e){xa+=e}function pd(e){return e.dynamicChildren=xa>0?zt||Ic:null,Xh(),xa>0&&zt&&zt.push(e),e}function ct(e,t,n,c,a,l){return pd(et(e,t,n,c,a,l,!0))}function hn(e,t,n,c,a){return pd(v(e,t,n,c,a,!0))}function Is(e){return e?e.__v_isVNode===!0:!1}function nc(e,t){return e.type===t.type&&e.key===t.key}const Al="__vInternal",kd=({key:e})=>e??null,ll=({ref:e,ref_key:t,ref_for:n})=>e!=null?Ye(e)||We(e)||we(e)?{i:qt,r:e,k:t,f:!!n}:e:null;function et(e,t=null,n=null,c=0,a=null,l=e===me?0:1,s=!1,i=!1){const r={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&kd(t),ref:t&&ll(t),scopeId:ed,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:c,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:qt};return i?(Ni(r,n),l&128&&e.normalize(r)):n&&(r.shapeFlag|=Ye(n)?8:16),xa>0&&!s&&zt&&(r.patchFlag>0||l&6)&&r.patchFlag!==32&&zt.push(r),r}const v=Zh;function Zh(e,t=null,n=null,c=0,a=null,l=!1){if((!e||e===ud)&&(e=mn),Is(e)){const i=yn(e,t,!0);return n&&Ni(i,n),xa>0&&!l&&zt&&(i.shapeFlag&6?zt[zt.indexOf(e)]=i:zt.push(i)),i.patchFlag|=-2,i}if(ig(e)&&(e=e.__vccOpts),t){t=Qh(t);let{class:i,style:r}=t;i&&!Ye(i)&&(t.class=$c(i)),Ne(r)&&(Du(r)&&!be(r)&&(r=at({},r)),t.style=hi(r))}const s=Ye(e)?1:ph(e)?128:Wh(e)?64:Ne(e)?4:we(e)?2:0;return et(e,t,n,c,a,s,l,!0)}function Qh(e){return e?Du(e)||Al in e?at({},e):e:null}function yn(e,t,n=!1){const{props:c,ref:a,patchFlag:l,children:s}=e,i=t?le(c||{},t):c;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:i,key:i&&kd(i),ref:t&&t.ref?n&&a?be(a)?a.concat(ll(t)):[a,ll(t)]:ll(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==me?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&yn(e.ssContent),ssFallback:e.ssFallback&&yn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function lt(e=" ",t=0){return v(Ma,null,e,t)}function Qt(e){return e==null||typeof e=="boolean"?v(mn):be(e)?v(me,null,e.slice()):typeof e=="object"?Tn(e):v(Ma,null,String(e))}function Tn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:yn(e)}function Ni(e,t){let n=0;const{shapeFlag:c}=e;if(t==null)t=null;else if(be(t))n=16;else if(typeof t=="object")if(c&65){const a=t.default;a&&(a._c&&(a._d=!1),Ni(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Al in t)?t._ctx=qt:a===3&&qt&&(qt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else we(t)?(t={default:t,_ctx:qt},n=32):(t=String(t),c&64?(n=16,t=[lt(t)]):n=8);e.children=t,e.shapeFlag|=n}function le(...e){const t={};for(let n=0;n<e.length;n++){const c=e[n];for(const a in c)if(a==="class")t.class!==c.class&&(t.class=$c([t.class,c.class]));else if(a==="style")t.style=hi([t.style,c.style]);else if(Cl(a)){const l=t[a],s=c[a];s&&l!==s&&!(be(l)&&l.includes(s))&&(t[a]=l?[].concat(l,s):s)}else a!==""&&(t[a]=c[a])}return t}function Zt(e,t,n,c=null){Pt(e,t,7,[n,c])}const Jh=yd();let eg=0;function tg(e,t,n){const c=e.type,a=(t?t.appContext:e.appContext)||Jh,l={uid:eg++,vnode:e,type:c,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Au(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vd(c,a),emitsOptions:Ju(c,a),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:c.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=mh.bind(null,l),e.ce&&e.ce(l),l}let Ge=null;const Pl=()=>Ge||qt,Bc=e=>{Ge=e,e.scope.on()},dc=()=>{Ge&&Ge.scope.off(),Ge=null};function Sd(e){return e.vnode.shapeFlag&4}let wa=!1;function ng(e,t=!1){wa=t;const{props:n,children:c}=e.vnode,a=Sd(e);Bh(e,n,a,t),Lh(e,c);const l=a?cg(e,t):void 0;return wa=!1,l}function cg(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=zu(new Proxy(e.ctx,Eh));const{setup:c}=n;if(c){const a=e.setupContext=c.length>1?lg(e):null;Bc(e),zc();const l=Rn(c,e,0,[e.props,a]);if(Hc(),dc(),Vu(l)){if(l.then(dc,dc),t)return l.then(s=>{Yr(e,s,t)}).catch(s=>{jl(s,e,0)});e.asyncDep=l}else Yr(e,l,t)}else Cd(e,t)}function Yr(e,t,n){we(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ne(t)&&(e.setupState=Ku(t)),Cd(e,n)}let Gr;function Cd(e,t,n){const c=e.type;if(!e.render){if(!t&&Gr&&!c.render){const a=c.template||Oi(e).template;if(a){const{isCustomElement:l,compilerOptions:s}=e.appContext.config,{delimiters:i,compilerOptions:r}=c,u=at(at({isCustomElement:l,delimiters:i},s),r);c.render=Gr(a,u)}}e.render=c.render||Ut}Bc(e),zc(),Ah(e),Hc(),dc()}function ag(e){return new Proxy(e.attrs,{get(t,n){return St(e,"get","$attrs"),t[n]}})}function lg(e){const t=c=>{e.exposed=c||{}};let n;return{get attrs(){return n||(n=ag(e))},slots:e.slots,emit:e.emit,expose:t}}function Tl(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ku(zu(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in da)return da[n](e)},has(t,n){return n in t||n in da}}))}function sg(e,t=!0){return we(e)?e.displayName||e.name:e.name||t&&e.__name}function ig(e){return we(e)&&"__vccOpts"in e}const y=(e,t)=>rh(e,t,wa);function rn(e,t,n){const c=arguments.length;return c===2?Ne(t)&&!be(t)?Is(t)?v(e,null,[t]):v(e,t):v(e,null,t):(c>3?n=Array.prototype.slice.call(arguments,2):c===3&&Is(n)&&(n=[n]),v(e,t,n))}const rg=Symbol(""),og=()=>Ve(rg),ug="3.2.47",dg="http://www.w3.org/2000/svg",cc=typeof document<"u"?document:null,Xr=cc&&cc.createElement("template"),fg={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,c)=>{const a=t?cc.createElementNS(dg,e):cc.createElement(e,n?{is:n}:void 0);return e==="select"&&c&&c.multiple!=null&&a.setAttribute("multiple",c.multiple),a},createText:e=>cc.createTextNode(e),createComment:e=>cc.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>cc.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,c,a,l){const s=n?n.previousSibling:t.lastChild;if(a&&(a===l||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===l||!(a=a.nextSibling)););else{Xr.innerHTML=c?`<svg>${e}</svg>`:e;const i=Xr.content;if(c){const r=i.firstChild;for(;r.firstChild;)i.appendChild(r.firstChild);i.removeChild(r)}t.insertBefore(i,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function vg(e,t,n){const c=e._vtc;c&&(t=(t?[t,...c]:[...c]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function mg(e,t,n){const c=e.style,a=Ye(n);if(n&&!a){if(t&&!Ye(t))for(const l in t)n[l]==null&&Es(c,l,"");for(const l in n)Es(c,l,n[l])}else{const l=c.display;a?t!==n&&(c.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(c.display=l)}}const Zr=/\s*!important$/;function Es(e,t,n){if(be(n))n.forEach(c=>Es(e,t,c));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const c=hg(e,t);Zr.test(n)?e.setProperty(Dc(c),n.replace(Zr,""),"important"):e[c]=n}}const Qr=["Webkit","Moz","ms"],ts={};function hg(e,t){const n=ts[t];if(n)return n;let c=$t(t);if(c!=="filter"&&c in e)return ts[t]=c;c=Cn(c);for(let a=0;a<Qr.length;a++){const l=Qr[a]+c;if(l in e)return ts[t]=l}return t}const Jr="http://www.w3.org/1999/xlink";function gg(e,t,n,c,a){if(c&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Jr,t.slice(6,t.length)):e.setAttributeNS(Jr,t,n);else{const l=pm(t);n==null||l&&!wu(n)?e.removeAttribute(t):e.setAttribute(t,l?"":n)}}function yg(e,t,n,c,a,l,s){if(t==="innerHTML"||t==="textContent"){c&&s(c,a,l),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const r=n??"";(e.value!==r||e.tagName==="OPTION")&&(e.value=r),n==null&&e.removeAttribute(t);return}let i=!1;if(n===""||n==null){const r=typeof e[t];r==="boolean"?n=wu(n):n==null&&r==="string"?(n="",i=!0):r==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(t)}function jc(e,t,n,c){e.addEventListener(t,n,c)}function bg(e,t,n,c){e.removeEventListener(t,n,c)}function pg(e,t,n,c,a=null){const l=e._vei||(e._vei={}),s=l[t];if(c&&s)s.value=c;else{const[i,r]=kg(t);if(c){const u=l[t]=_g(c,a);jc(e,i,u,r)}else s&&(bg(e,i,s,r),l[t]=void 0)}}const eo=/(?:Once|Passive|Capture)$/;function kg(e){let t;if(eo.test(e)){t={};let c;for(;c=e.match(eo);)e=e.slice(0,e.length-c[0].length),t[c[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Dc(e.slice(2)),t]}let ns=0;const Sg=Promise.resolve(),Cg=()=>ns||(Sg.then(()=>ns=0),ns=Date.now());function _g(e,t){const n=c=>{if(!c._vts)c._vts=Date.now();else if(c._vts<=n.attached)return;Pt(xg(c,n.value),t,5,[c])};return n.value=e,n.attached=Cg(),n}function xg(e,t){if(be(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(c=>a=>!a._stopped&&c&&c(a))}else return t}const to=/^on[a-z]/,wg=(e,t,n,c,a=!1,l,s,i,r)=>{t==="class"?vg(e,c,a):t==="style"?mg(e,n,c):Cl(t)?gi(t)||pg(e,t,n,c,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):jg(e,t,c,a))?yg(e,t,c,l,s,i,r):(t==="true-value"?e._trueValue=c:t==="false-value"&&(e._falseValue=c),gg(e,t,c,a))};function jg(e,t,n,c){return c?!!(t==="innerHTML"||t==="textContent"||t in e&&to.test(t)&&we(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||to.test(t)&&Ye(n)?!1:t in e}const En="transition",aa="animation",ln=(e,{slots:t})=>rn(cd,xd(e),t);ln.displayName="Transition";const _d={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},qg=ln.props=at({},cd.props,_d),Zn=(e,t=[])=>{be(e)?e.forEach(n=>n(...t)):e&&e(...t)},no=e=>e?be(e)?e.some(t=>t.length>1):e.length>1:!1;function xd(e){const t={};for(const w in e)w in _d||(t[w]=e[w]);if(e.css===!1)return t;const{name:n="v",type:c,duration:a,enterFromClass:l=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:i=`${n}-enter-to`,appearFromClass:r=l,appearActiveClass:u=s,appearToClass:o=i,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,h=Vg(a),g=h&&h[0],S=h&&h[1],{onBeforeEnter:b,onEnter:C,onEnterCancelled:p,onLeave:P,onLeaveCancelled:j,onBeforeAppear:I=b,onAppear:E=C,onAppearCancelled:k=p}=t,x=(w,M,N)=>{Pn(w,M?o:i),Pn(w,M?u:s),N&&N()},q=(w,M)=>{w._isLeaving=!1,Pn(w,d),Pn(w,m),Pn(w,f),M&&M()},V=w=>(M,N)=>{const Z=w?E:C,F=()=>x(M,w,N);Zn(Z,[M,F]),co(()=>{Pn(M,w?r:l),fn(M,w?o:i),no(Z)||ao(M,c,g,F)})};return at(t,{onBeforeEnter(w){Zn(b,[w]),fn(w,l),fn(w,s)},onBeforeAppear(w){Zn(I,[w]),fn(w,r),fn(w,u)},onEnter:V(!1),onAppear:V(!0),onLeave(w,M){w._isLeaving=!0;const N=()=>q(w,M);fn(w,d),jd(),fn(w,f),co(()=>{w._isLeaving&&(Pn(w,d),fn(w,m),no(P)||ao(w,c,S,N))}),Zn(P,[w,N])},onEnterCancelled(w){x(w,!1),Zn(p,[w])},onAppearCancelled(w){x(w,!0),Zn(k,[w])},onLeaveCancelled(w){q(w),Zn(j,[w])}})}function Vg(e){if(e==null)return null;if(Ne(e))return[cs(e.enter),cs(e.leave)];{const t=cs(e);return[t,t]}}function cs(e){return jm(e)}function fn(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function Pn(e,t){t.split(/\s+/).forEach(c=>c&&e.classList.remove(c));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function co(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Ig=0;function ao(e,t,n,c){const a=e._endId=++Ig,l=()=>{a===e._endId&&c()};if(n)return setTimeout(l,n);const{type:s,timeout:i,propCount:r}=wd(e,t);if(!s)return c();const u=s+"end";let o=0;const d=()=>{e.removeEventListener(u,f),l()},f=m=>{m.target===e&&++o>=r&&d()};setTimeout(()=>{o<r&&d()},i+1),e.addEventListener(u,f)}function wd(e,t){const n=window.getComputedStyle(e),c=h=>(n[h]||"").split(", "),a=c(`${En}Delay`),l=c(`${En}Duration`),s=lo(a,l),i=c(`${aa}Delay`),r=c(`${aa}Duration`),u=lo(i,r);let o=null,d=0,f=0;t===En?s>0&&(o=En,d=s,f=l.length):t===aa?u>0&&(o=aa,d=u,f=r.length):(d=Math.max(s,u),o=d>0?s>u?En:aa:null,f=o?o===En?l.length:r.length:0);const m=o===En&&/\b(transform|all)(,|$)/.test(c(`${En}Property`).toString());return{type:o,timeout:d,propCount:f,hasTransform:m}}function lo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,c)=>so(n)+so(e[c])))}function so(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function jd(){return document.body.offsetHeight}const qd=new WeakMap,Vd=new WeakMap,Id={name:"TransitionGroup",props:at({},qg,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Pl(),c=nd();let a,l;return Mi(()=>{if(!a.length)return;const s=e.moveClass||`${e.name||"v"}-move`;if(!Mg(a[0].el,n.vnode.el,s))return;a.forEach(Pg),a.forEach(Tg);const i=a.filter($g);jd(),i.forEach(r=>{const u=r.el,o=u.style;fn(u,s),o.transform=o.webkitTransform=o.transitionDuration="";const d=u._moveCb=f=>{f&&f.target!==u||(!f||/transform$/.test(f.propertyName))&&(u.removeEventListener("transitionend",d),u._moveCb=null,Pn(u,s))};u.addEventListener("transitionend",d)})}),()=>{const s=xe(e),i=xd(s);let r=s.tag||me;a=l,l=t.default?Ti(t.default()):[];for(let u=0;u<l.length;u++){const o=l[u];o.key!=null&&_a(o,Ca(o,i,c,n))}if(a)for(let u=0;u<a.length;u++){const o=a[u];_a(o,Ca(o,i,c,n)),qd.set(o,o.el.getBoundingClientRect())}return v(r,null,l)}}},Eg=e=>delete e.mode;Id.props;const Ag=Id;function Pg(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function Tg(e){Vd.set(e,e.el.getBoundingClientRect())}function $g(e){const t=qd.get(e),n=Vd.get(e),c=t.left-n.left,a=t.top-n.top;if(c||a){const l=e.el.style;return l.transform=l.webkitTransform=`translate(${c}px,${a}px)`,l.transitionDuration="0s",e}}function Mg(e,t,n){const c=e.cloneNode();e._vtc&&e._vtc.forEach(s=>{s.split(/\s+/).forEach(i=>i&&c.classList.remove(i))}),n.split(/\s+/).forEach(s=>s&&c.classList.add(s)),c.style.display="none";const a=t.nodeType===1?t:t.parentNode;a.appendChild(c);const{hasTransform:l}=wd(c);return a.removeChild(c),l}const io=e=>{const t=e.props["onUpdate:modelValue"]||!1;return be(t)?n=>cl(t,n):t};function Bg(e){e.target.composing=!0}function ro(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Rg={created(e,{modifiers:{lazy:t,trim:n,number:c}},a){e._assign=io(a);const l=c||a.props&&a.props.type==="number";jc(e,t?"change":"input",s=>{if(s.target.composing)return;let i=e.value;n&&(i=i.trim()),l&&(i=bs(i)),e._assign(i)}),n&&jc(e,"change",()=>{e.value=e.value.trim()}),t||(jc(e,"compositionstart",Bg),jc(e,"compositionend",ro),jc(e,"change",ro))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:c,number:a}},l){if(e._assign=io(l),e.composing||document.activeElement===e&&e.type!=="range"&&(n||c&&e.value.trim()===t||(a||e.type==="number")&&bs(e.value)===t))return;const s=t??"";e.value!==s&&(e.value=s)}},on={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):la(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:c}){!t!=!n&&(c?t?(c.beforeEnter(e),la(e,!0),c.enter(e)):c.leave(e,()=>{la(e,!1)}):la(e,t))},beforeUnmount(e,{value:t}){la(e,t)}};function la(e,t){e.style.display=t?e._vod:"none"}const Og=at({patchProp:wg},fg);let oo;function Lg(){return oo||(oo=zh(Og))}const Fg=(...e)=>{const t=Lg().createApp(...e),{mount:n}=t;return t.mount=c=>{const a=Ng(c);if(!a)return;const l=t._component;!we(l)&&!l.render&&!l.template&&(l.template=a.innerHTML),a.innerHTML="";const s=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),s},t};function Ng(e){return Ye(e)?document.querySelector(e):e}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const qc=typeof window<"u";function Dg(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Te=Object.assign;function as(e,t){const n={};for(const c in t){const a=t[c];n[c]=Wt(a)?a.map(e):e(a)}return n}const ma=()=>{},Wt=Array.isArray,zg=/\/$/,Hg=e=>e.replace(zg,"");function ls(e,t,n="/"){let c,a={},l="",s="";const i=t.indexOf("#");let r=t.indexOf("?");return i<r&&i>=0&&(r=-1),r>-1&&(c=t.slice(0,r),l=t.slice(r+1,i>-1?i:t.length),a=e(l)),i>-1&&(c=c||t.slice(0,i),s=t.slice(i,t.length)),c=Yg(c??t,n),{fullPath:c+(l&&"?")+l+s,path:c,query:a,hash:s}}function Ug(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function uo(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Wg(e,t,n){const c=t.matched.length-1,a=n.matched.length-1;return c>-1&&c===a&&Rc(t.matched[c],n.matched[a])&&Ed(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Rc(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ed(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Kg(e[n],t[n]))return!1;return!0}function Kg(e,t){return Wt(e)?fo(e,t):Wt(t)?fo(t,e):e===t}function fo(e,t){return Wt(t)?e.length===t.length&&e.every((n,c)=>n===t[c]):e.length===1&&e[0]===t}function Yg(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),c=e.split("/");let a=n.length-1,l,s;for(l=0;l<c.length;l++)if(s=c[l],s!==".")if(s==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+c.slice(l-(l===c.length?1:0)).join("/")}var ja;(function(e){e.pop="pop",e.push="push"})(ja||(ja={}));var ha;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ha||(ha={}));function Gg(e){if(!e)if(qc){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Hg(e)}const Xg=/^[^#]+#/;function Zg(e,t){return e.replace(Xg,"#")+t}function Qg(e,t){const n=document.documentElement.getBoundingClientRect(),c=e.getBoundingClientRect();return{behavior:t.behavior,left:c.left-n.left-(t.left||0),top:c.top-n.top-(t.top||0)}}const $l=()=>({left:window.pageXOffset,top:window.pageYOffset});function Jg(e){let t;if("el"in e){const n=e.el,c=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?c?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=Qg(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function vo(e,t){return(history.state?history.state.position-t:-1)+e}const As=new Map;function ey(e,t){As.set(e,t)}function ty(e){const t=As.get(e);return As.delete(e),t}let ny=()=>location.protocol+"//"+location.host;function Ad(e,t){const{pathname:n,search:c,hash:a}=t,l=e.indexOf("#");if(l>-1){let i=a.includes(e.slice(l))?e.slice(l).length:1,r=a.slice(i);return r[0]!=="/"&&(r="/"+r),uo(r,"")}return uo(n,e)+c+a}function cy(e,t,n,c){let a=[],l=[],s=null;const i=({state:f})=>{const m=Ad(e,location),h=n.value,g=t.value;let S=0;if(f){if(n.value=m,t.value=f,s&&s===h){s=null;return}S=g?f.position-g.position:0}else c(m);a.forEach(b=>{b(n.value,h,{delta:S,type:ja.pop,direction:S?S>0?ha.forward:ha.back:ha.unknown})})};function r(){s=n.value}function u(f){a.push(f);const m=()=>{const h=a.indexOf(f);h>-1&&a.splice(h,1)};return l.push(m),m}function o(){const{history:f}=window;f.state&&f.replaceState(Te({},f.state,{scroll:$l()}),"")}function d(){for(const f of l)f();l=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",o)}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",o),{pauseListeners:r,listen:u,destroy:d}}function mo(e,t,n,c=!1,a=!1){return{back:e,current:t,forward:n,replaced:c,position:window.history.length,scroll:a?$l():null}}function ay(e){const{history:t,location:n}=window,c={value:Ad(e,n)},a={value:t.state};a.value||l(c.value,{back:null,current:c.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(r,u,o){const d=e.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+r:ny()+e+r;try{t[o?"replaceState":"pushState"](u,"",f),a.value=u}catch(m){console.error(m),n[o?"replace":"assign"](f)}}function s(r,u){const o=Te({},t.state,mo(a.value.back,r,a.value.forward,!0),u,{position:a.value.position});l(r,o,!0),c.value=r}function i(r,u){const o=Te({},a.value,t.state,{forward:r,scroll:$l()});l(o.current,o,!0);const d=Te({},mo(c.value,r,null),{position:o.position+1},u);l(r,d,!1),c.value=r}return{location:c,state:a,push:i,replace:s}}function ly(e){e=Gg(e);const t=ay(e),n=cy(e,t.state,t.location,t.replace);function c(l,s=!0){s||n.pauseListeners(),history.go(l)}const a=Te({location:"",base:e,go:c,createHref:Zg.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function sy(e){return typeof e=="string"||e&&typeof e=="object"}function Pd(e){return typeof e=="string"||typeof e=="symbol"}const An={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Td=Symbol("");var ho;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ho||(ho={}));function Oc(e,t){return Te(new Error,{type:e,[Td]:!0},t)}function dn(e,t){return e instanceof Error&&Td in e&&(t==null||!!(e.type&t))}const go="[^/]+?",iy={sensitive:!1,strict:!1,start:!0,end:!0},ry=/[.+*?^${}()[\]/\\]/g;function oy(e,t){const n=Te({},iy,t),c=[];let a=n.start?"^":"";const l=[];for(const u of e){const o=u.length?[]:[90];n.strict&&!u.length&&(a+="/");for(let d=0;d<u.length;d++){const f=u[d];let m=40+(n.sensitive?.25:0);if(f.type===0)d||(a+="/"),a+=f.value.replace(ry,"\\$&"),m+=40;else if(f.type===1){const{value:h,repeatable:g,optional:S,regexp:b}=f;l.push({name:h,repeatable:g,optional:S});const C=b||go;if(C!==go){m+=10;try{new RegExp(`(${C})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${h}" (${C}): `+P.message)}}let p=g?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;d||(p=S&&u.length<2?`(?:/${p})`:"/"+p),S&&(p+="?"),a+=p,m+=20,S&&(m+=-8),g&&(m+=-20),C===".*"&&(m+=-50)}o.push(m)}c.push(o)}if(n.strict&&n.end){const u=c.length-1;c[u][c[u].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const s=new RegExp(a,n.sensitive?"":"i");function i(u){const o=u.match(s),d={};if(!o)return null;for(let f=1;f<o.length;f++){const m=o[f]||"",h=l[f-1];d[h.name]=m&&h.repeatable?m.split("/"):m}return d}function r(u){let o="",d=!1;for(const f of e){(!d||!o.endsWith("/"))&&(o+="/"),d=!1;for(const m of f)if(m.type===0)o+=m.value;else if(m.type===1){const{value:h,repeatable:g,optional:S}=m,b=h in u?u[h]:"";if(Wt(b)&&!g)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const C=Wt(b)?b.join("/"):b;if(!C)if(S)f.length<2&&(o.endsWith("/")?o=o.slice(0,-1):d=!0);else throw new Error(`Missing required param "${h}"`);o+=C}}return o||"/"}return{re:s,score:c,keys:l,parse:i,stringify:r}}function uy(e,t){let n=0;for(;n<e.length&&n<t.length;){const c=t[n]-e[n];if(c)return c;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function dy(e,t){let n=0;const c=e.score,a=t.score;for(;n<c.length&&n<a.length;){const l=uy(c[n],a[n]);if(l)return l;n++}if(Math.abs(a.length-c.length)===1){if(yo(c))return 1;if(yo(a))return-1}return a.length-c.length}function yo(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const fy={type:0,value:""},vy=/[a-zA-Z0-9_]/;function my(e){if(!e)return[[]];if(e==="/")return[[fy]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,c=n;const a=[];let l;function s(){l&&a.push(l),l=[]}let i=0,r,u="",o="";function d(){u&&(n===0?l.push({type:0,value:u}):n===1||n===2||n===3?(l.length>1&&(r==="*"||r==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:u,regexp:o,repeatable:r==="*"||r==="+",optional:r==="*"||r==="?"})):t("Invalid state to consume buffer"),u="")}function f(){u+=r}for(;i<e.length;){if(r=e[i++],r==="\\"&&n!==2){c=n,n=4;continue}switch(n){case 0:r==="/"?(u&&d(),s()):r===":"?(d(),n=1):f();break;case 4:f(),n=c;break;case 1:r==="("?n=2:vy.test(r)?f():(d(),n=0,r!=="*"&&r!=="?"&&r!=="+"&&i--);break;case 2:r===")"?o[o.length-1]=="\\"?o=o.slice(0,-1)+r:n=3:o+=r;break;case 3:d(),n=0,r!=="*"&&r!=="?"&&r!=="+"&&i--,o="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),d(),s(),a}function hy(e,t,n){const c=oy(my(e.path),n),a=Te(c,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function gy(e,t){const n=[],c=new Map;t=ko({strict:!1,end:!0,sensitive:!1},t);function a(o){return c.get(o)}function l(o,d,f){const m=!f,h=yy(o);h.aliasOf=f&&f.record;const g=ko(t,o),S=[h];if("alias"in o){const p=typeof o.alias=="string"?[o.alias]:o.alias;for(const P of p)S.push(Te({},h,{components:f?f.record.components:h.components,path:P,aliasOf:f?f.record:h}))}let b,C;for(const p of S){const{path:P}=p;if(d&&P[0]!=="/"){const j=d.record.path,I=j[j.length-1]==="/"?"":"/";p.path=d.record.path+(P&&I+P)}if(b=hy(p,d,g),f?f.alias.push(b):(C=C||b,C!==b&&C.alias.push(b),m&&o.name&&!po(b)&&s(o.name)),h.children){const j=h.children;for(let I=0;I<j.length;I++)l(j[I],b,f&&f.children[I])}f=f||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&r(b)}return C?()=>{s(C)}:ma}function s(o){if(Pd(o)){const d=c.get(o);d&&(c.delete(o),n.splice(n.indexOf(d),1),d.children.forEach(s),d.alias.forEach(s))}else{const d=n.indexOf(o);d>-1&&(n.splice(d,1),o.record.name&&c.delete(o.record.name),o.children.forEach(s),o.alias.forEach(s))}}function i(){return n}function r(o){let d=0;for(;d<n.length&&dy(o,n[d])>=0&&(o.record.path!==n[d].record.path||!$d(o,n[d]));)d++;n.splice(d,0,o),o.record.name&&!po(o)&&c.set(o.record.name,o)}function u(o,d){let f,m={},h,g;if("name"in o&&o.name){if(f=c.get(o.name),!f)throw Oc(1,{location:o});g=f.record.name,m=Te(bo(d.params,f.keys.filter(C=>!C.optional).map(C=>C.name)),o.params&&bo(o.params,f.keys.map(C=>C.name))),h=f.stringify(m)}else if("path"in o)h=o.path,f=n.find(C=>C.re.test(h)),f&&(m=f.parse(h),g=f.record.name);else{if(f=d.name?c.get(d.name):n.find(C=>C.re.test(d.path)),!f)throw Oc(1,{location:o,currentLocation:d});g=f.record.name,m=Te({},d.params,o.params),h=f.stringify(m)}const S=[];let b=f;for(;b;)S.unshift(b.record),b=b.parent;return{name:g,path:h,params:m,matched:S,meta:py(S)}}return e.forEach(o=>l(o)),{addRoute:l,resolve:u,removeRoute:s,getRoutes:i,getRecordMatcher:a}}function bo(e,t){const n={};for(const c of t)c in e&&(n[c]=e[c]);return n}function yy(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:by(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function by(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const c in e.components)t[c]=typeof n=="boolean"?n:n[c];return t}function po(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function py(e){return e.reduce((t,n)=>Te(t,n.meta),{})}function ko(e,t){const n={};for(const c in e)n[c]=c in t?t[c]:e[c];return n}function $d(e,t){return t.children.some(n=>n===e||$d(e,n))}const Md=/#/g,ky=/&/g,Sy=/\//g,Cy=/=/g,_y=/\?/g,Bd=/\+/g,xy=/%5B/g,wy=/%5D/g,Rd=/%5E/g,jy=/%60/g,Od=/%7B/g,qy=/%7C/g,Ld=/%7D/g,Vy=/%20/g;function Di(e){return encodeURI(""+e).replace(qy,"|").replace(xy,"[").replace(wy,"]")}function Iy(e){return Di(e).replace(Od,"{").replace(Ld,"}").replace(Rd,"^")}function Ps(e){return Di(e).replace(Bd,"%2B").replace(Vy,"+").replace(Md,"%23").replace(ky,"%26").replace(jy,"`").replace(Od,"{").replace(Ld,"}").replace(Rd,"^")}function Ey(e){return Ps(e).replace(Cy,"%3D")}function Ay(e){return Di(e).replace(Md,"%23").replace(_y,"%3F")}function Py(e){return e==null?"":Ay(e).replace(Sy,"%2F")}function ml(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Ty(e){const t={};if(e===""||e==="?")return t;const c=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<c.length;++a){const l=c[a].replace(Bd," "),s=l.indexOf("="),i=ml(s<0?l:l.slice(0,s)),r=s<0?null:ml(l.slice(s+1));if(i in t){let u=t[i];Wt(u)||(u=t[i]=[u]),u.push(r)}else t[i]=r}return t}function So(e){let t="";for(let n in e){const c=e[n];if(n=Ey(n),c==null){c!==void 0&&(t+=(t.length?"&":"")+n);continue}(Wt(c)?c.map(l=>l&&Ps(l)):[c&&Ps(c)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+n,l!=null&&(t+="="+l))})}return t}function $y(e){const t={};for(const n in e){const c=e[n];c!==void 0&&(t[n]=Wt(c)?c.map(a=>a==null?null:""+a):c==null?c:""+c)}return t}const My=Symbol(""),Co=Symbol(""),zi=Symbol(""),Fd=Symbol(""),Ts=Symbol("");function sa(){let e=[];function t(c){return e.push(c),()=>{const a=e.indexOf(c);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function $n(e,t,n,c,a){const l=c&&(c.enterCallbacks[a]=c.enterCallbacks[a]||[]);return()=>new Promise((s,i)=>{const r=d=>{d===!1?i(Oc(4,{from:n,to:t})):d instanceof Error?i(d):sy(d)?i(Oc(2,{from:t,to:d})):(l&&c.enterCallbacks[a]===l&&typeof d=="function"&&l.push(d),s())},u=e.call(c&&c.instances[a],t,n,r);let o=Promise.resolve(u);e.length<3&&(o=o.then(r)),o.catch(d=>i(d))})}function ss(e,t,n,c){const a=[];for(const l of e)for(const s in l.components){let i=l.components[s];if(!(t!=="beforeRouteEnter"&&!l.instances[s]))if(By(i)){const u=(i.__vccOpts||i)[t];u&&a.push($n(u,n,c,l,s))}else{let r=i();a.push(()=>r.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${s}" at "${l.path}"`));const o=Dg(u)?u.default:u;l.components[s]=o;const f=(o.__vccOpts||o)[t];return f&&$n(f,n,c,l,s)()}))}}return a}function By(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function _o(e){const t=Ve(zi),n=Ve(Fd),c=y(()=>t.resolve(dt(e.to))),a=y(()=>{const{matched:r}=c.value,{length:u}=r,o=r[u-1],d=n.matched;if(!o||!d.length)return-1;const f=d.findIndex(Rc.bind(null,o));if(f>-1)return f;const m=xo(r[u-2]);return u>1&&xo(o)===m&&d[d.length-1].path!==m?d.findIndex(Rc.bind(null,r[u-2])):f}),l=y(()=>a.value>-1&&Fy(n.params,c.value.params)),s=y(()=>a.value>-1&&a.value===n.matched.length-1&&Ed(n.params,c.value.params));function i(r={}){return Ly(r)?t[dt(e.replace)?"replace":"push"](dt(e.to)).catch(ma):Promise.resolve()}return{route:c,href:y(()=>c.value.href),isActive:l,isExactActive:s,navigate:i}}const Ry=$i({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_o,setup(e,{slots:t}){const n=st(_o(e)),{options:c}=Ve(zi),a=y(()=>({[wo(e.activeClass,c.linkActiveClass,"router-link-active")]:n.isActive,[wo(e.exactActiveClass,c.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&t.default(n);return e.custom?l:rn("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},l)}}}),Oy=Ry;function Ly(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Fy(e,t){for(const n in t){const c=t[n],a=e[n];if(typeof c=="string"){if(c!==a)return!1}else if(!Wt(a)||a.length!==c.length||c.some((l,s)=>l!==a[s]))return!1}return!0}function xo(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const wo=(e,t,n)=>e??t??n,Ny=$i({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const c=Ve(Ts),a=y(()=>e.route||c.value),l=Ve(Co,0),s=y(()=>{let u=dt(l);const{matched:o}=a.value;let d;for(;(d=o[u])&&!d.components;)u++;return u}),i=y(()=>a.value.matched[s.value]);Ke(Co,y(()=>s.value+1)),Ke(My,i),Ke(Ts,a);const r=$();return ae(()=>[r.value,i.value,e.name],([u,o,d],[f,m,h])=>{o&&(o.instances[d]=u,m&&m!==o&&u&&u===f&&(o.leaveGuards.size||(o.leaveGuards=m.leaveGuards),o.updateGuards.size||(o.updateGuards=m.updateGuards))),u&&o&&(!m||!Rc(o,m)||!f)&&(o.enterCallbacks[d]||[]).forEach(g=>g(u))},{flush:"post"}),()=>{const u=a.value,o=e.name,d=i.value,f=d&&d.components[o];if(!f)return jo(n.default,{Component:f,route:u});const m=d.props[o],h=m?m===!0?u.params:typeof m=="function"?m(u):m:null,S=rn(f,Te({},h,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(d.instances[o]=null)},ref:r}));return jo(n.default,{Component:S,route:u})||S}}});function jo(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Dy=Ny;function zy(e){const t=gy(e.routes,e),n=e.parseQuery||Ty,c=e.stringifyQuery||So,a=e.history,l=sa(),s=sa(),i=sa(),r=Vi(An);let u=An;qc&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const o=as.bind(null,B=>""+B),d=as.bind(null,Py),f=as.bind(null,ml);function m(B,T){let O,re;return Pd(B)?(O=t.getRecordMatcher(B),re=T):re=B,t.addRoute(re,O)}function h(B){const T=t.getRecordMatcher(B);T&&t.removeRoute(T)}function g(){return t.getRoutes().map(B=>B.record)}function S(B){return!!t.getRecordMatcher(B)}function b(B,T){if(T=Te({},T||r.value),typeof B=="string"){const _=ls(n,B,T.path),A=t.resolve({path:_.path},T),L=a.createHref(_.fullPath);return Te(_,A,{params:f(A.params),hash:ml(_.hash),redirectedFrom:void 0,href:L})}let O;if("path"in B)O=Te({},B,{path:ls(n,B.path,T.path).path});else{const _=Te({},B.params);for(const A in _)_[A]==null&&delete _[A];O=Te({},B,{params:d(B.params)}),T.params=d(T.params)}const re=t.resolve(O,T),oe=B.hash||"";re.params=o(f(re.params));const je=Ug(c,Te({},B,{hash:Iy(oe),path:re.path})),ve=a.createHref(je);return Te({fullPath:je,hash:oe,query:c===So?$y(B.query):B.query||{}},re,{redirectedFrom:void 0,href:ve})}function C(B){return typeof B=="string"?ls(n,B,r.value.path):Te({},B)}function p(B,T){if(u!==B)return Oc(8,{from:T,to:B})}function P(B){return E(B)}function j(B){return P(Te(C(B),{replace:!0}))}function I(B){const T=B.matched[B.matched.length-1];if(T&&T.redirect){const{redirect:O}=T;let re=typeof O=="function"?O(B):O;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=C(re):{path:re},re.params={}),Te({query:B.query,hash:B.hash,params:"path"in re?{}:B.params},re)}}function E(B,T){const O=u=b(B),re=r.value,oe=B.state,je=B.force,ve=B.replace===!0,_=I(O);if(_)return E(Te(C(_),{state:typeof _=="object"?Te({},oe,_.state):oe,force:je,replace:ve}),T||O);const A=O;A.redirectedFrom=T;let L;return!je&&Wg(c,re,O)&&(L=Oc(16,{to:A,from:re}),R(re,re,!0,!1)),(L?Promise.resolve(L):x(A,re)).catch(U=>dn(U)?dn(U,2)?U:J(U):H(U,A,re)).then(U=>{if(U){if(dn(U,2))return E(Te({replace:ve},C(U.to),{state:typeof U.to=="object"?Te({},oe,U.to.state):oe,force:je}),T||A)}else U=V(A,re,!0,ve,oe);return q(A,re,U),U})}function k(B,T){const O=p(B,T);return O?Promise.reject(O):Promise.resolve()}function x(B,T){let O;const[re,oe,je]=Hy(B,T);O=ss(re.reverse(),"beforeRouteLeave",B,T);for(const _ of re)_.leaveGuards.forEach(A=>{O.push($n(A,B,T))});const ve=k.bind(null,B,T);return O.push(ve),Sc(O).then(()=>{O=[];for(const _ of l.list())O.push($n(_,B,T));return O.push(ve),Sc(O)}).then(()=>{O=ss(oe,"beforeRouteUpdate",B,T);for(const _ of oe)_.updateGuards.forEach(A=>{O.push($n(A,B,T))});return O.push(ve),Sc(O)}).then(()=>{O=[];for(const _ of B.matched)if(_.beforeEnter&&!T.matched.includes(_))if(Wt(_.beforeEnter))for(const A of _.beforeEnter)O.push($n(A,B,T));else O.push($n(_.beforeEnter,B,T));return O.push(ve),Sc(O)}).then(()=>(B.matched.forEach(_=>_.enterCallbacks={}),O=ss(je,"beforeRouteEnter",B,T),O.push(ve),Sc(O))).then(()=>{O=[];for(const _ of s.list())O.push($n(_,B,T));return O.push(ve),Sc(O)}).catch(_=>dn(_,8)?_:Promise.reject(_))}function q(B,T,O){for(const re of i.list())re(B,T,O)}function V(B,T,O,re,oe){const je=p(B,T);if(je)return je;const ve=T===An,_=qc?history.state:{};O&&(re||ve?a.replace(B.fullPath,Te({scroll:ve&&_&&_.scroll},oe)):a.push(B.fullPath,oe)),r.value=B,R(B,T,O,ve),J()}let w;function M(){w||(w=a.listen((B,T,O)=>{if(!ue.listening)return;const re=b(B),oe=I(re);if(oe){E(Te(oe,{replace:!0}),re).catch(ma);return}u=re;const je=r.value;qc&&ey(vo(je.fullPath,O.delta),$l()),x(re,je).catch(ve=>dn(ve,12)?ve:dn(ve,2)?(E(ve.to,re).then(_=>{dn(_,20)&&!O.delta&&O.type===ja.pop&&a.go(-1,!1)}).catch(ma),Promise.reject()):(O.delta&&a.go(-O.delta,!1),H(ve,re,je))).then(ve=>{ve=ve||V(re,je,!1),ve&&(O.delta&&!dn(ve,8)?a.go(-O.delta,!1):O.type===ja.pop&&dn(ve,20)&&a.go(-1,!1)),q(re,je,ve)}).catch(ma)}))}let N=sa(),Z=sa(),F;function H(B,T,O){J(B);const re=Z.list();return re.length?re.forEach(oe=>oe(B,T,O)):console.error(B),Promise.reject(B)}function D(){return F&&r.value!==An?Promise.resolve():new Promise((B,T)=>{N.add([B,T])})}function J(B){return F||(F=!B,M(),N.list().forEach(([T,O])=>B?O(B):T()),N.reset()),B}function R(B,T,O,re){const{scrollBehavior:oe}=e;if(!qc||!oe)return Promise.resolve();const je=!O&&ty(vo(B.fullPath,0))||(re||!O)&&history.state&&history.state.scroll||null;return Oe().then(()=>oe(B,T,je)).then(ve=>ve&&Jg(ve)).catch(ve=>H(ve,B,T))}const K=B=>a.go(B);let z;const fe=new Set,ue={currentRoute:r,listening:!0,addRoute:m,removeRoute:h,hasRoute:S,getRoutes:g,resolve:b,options:e,push:P,replace:j,go:K,back:()=>K(-1),forward:()=>K(1),beforeEach:l.add,beforeResolve:s.add,afterEach:i.add,onError:Z.add,isReady:D,install(B){const T=this;B.component("RouterLink",Oy),B.component("RouterView",Dy),B.config.globalProperties.$router=T,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>dt(r)}),qc&&!z&&r.value===An&&(z=!0,P(a.location).catch(oe=>{}));const O={};for(const oe in An)O[oe]=y(()=>r.value[oe]);B.provide(zi,T),B.provide(Fd,st(O)),B.provide(Ts,r);const re=B.unmount;fe.add(B),B.unmount=function(){fe.delete(B),fe.size<1&&(u=An,w&&w(),w=null,r.value=An,z=!1,F=!1),re()}}};return ue}function Sc(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Hy(e,t){const n=[],c=[],a=[],l=Math.max(t.matched.length,e.matched.length);for(let s=0;s<l;s++){const i=t.matched[s];i&&(e.matched.find(u=>Rc(u,i))?c.push(i):n.push(i));const r=e.matched[s];r&&(t.matched.find(u=>Rc(u,r))||a.push(r))}return[n,c,a]}const zn=(e,t)=>{const n=e.__vccOpts||e;for(const[c,a]of t)n[c]=a;return n},Uy={};function Wy(e,t,n,c,a,l){const s=Le("RouterView");return Be(),hn(s)}const Ky=zn(Uy,[["render",Wy]]),Yy={},Gy=et("h1",null,"司法試験過去問集",-1);function Xy(e,t){const n=Le("RouterLink");return Be(),ct("main",null,[Gy,v(n,{to:"/tantou"},{default:Ee(()=>[lt("短答")]),_:1})])}const Zy=zn(Yy,[["render",Xy]]),sl=[{year:"2022",num:"1",subject:"ken",q:`憲法が保障する基本的人権の制約理由に関する次のアからウまでの各記述について、最高裁判所の判例の趣旨に照らして、正しいものには○、誤っているものには×を付した場合の組合せを、後記１から８までの中から選びなさい。
ア．表現の自由などの精神的自由も、その行使の結果から本人を保護するために法律により制限を加えられることがあるが、こうした制限については、専門技術的な判断が伴うことから立法者に広い裁量が認められるので、目的との関連で著しく不合理であることが明らかである場合に限って、その効力を否定することができる。
イ．職業選択の自由は、社会生活における安全の保障及び秩序の維持等の消極的な目的や、国民経済の円満な発展や社会公共の便宜の促進、経済的弱者の保護等の社会政策及び経済政策上の積極的な目的のほか、租税の適正かつ確実な賦課徴収を図るという国家の財政目的のために制約され得る。
ウ．労働基本権は、勤労者の経済的地位の向上のための手段として認められたものであって、それ自体が目的とされる絶対的なものではないから、憲法第１３条のいう公共の福祉のための制約を受けるほか、公務員の争議行為の禁止の場合のように、勤労者を含めた国民全体の共同利益の見地からする制約を受ける。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"6"},{year:"2022",num:"2",subject:"ken",q:`私人間における人権保障に関する次のアからウまでの各記述について、正しいものには○、誤っているものには×を付した場合の組合せを、後記１から８までの中から選びなさい。
ア．最高裁判所は、株式会社による政党への政治資金の寄附が、国民の選挙権の自由な行使を直接に侵害するものであるとしつつ、会社にも政治活動の自由が保障されるため、当該侵害は社会的許容性の限度を超えるものではないと判断されることから、当該寄附が公序良俗に違反すると解することはできないとした。
イ．最高裁判所は、株式会社の就業規則において女子の定年年齢を男子より低く定める部分が、専ら女子であることのみを理由として差別したことに帰着するものとして、公序良俗に違反し無効であると解するに当たって、個人の尊厳と両性の本質的平等を解釈の基準として定める民法の規定とともに、法の下の平等を定める憲法第１４条第１項を参照した。
ウ．最高裁判所は、下級裁判所が、一定の集団に属する者の全体に対して人種差別的な発言をした者に対し、人種差別撤廃条約並びに同条約に照らして解釈される憲法第１３条及び第１４条第１項は私人相互の関係にも直接適用されるとして、民法第７０９条の規定により高額の損害賠償を命じた事例において、上告を棄却した。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"6"},{year:"2022",num:"3",subject:"ken",q:`法の下の平等に関する次のアからウまでの各記述について、最高裁判所の判例の趣旨に照らして、それぞれ正しい場合には１を、誤っている場合には２を選びなさい。
ア．国民への課税要件等を定めるには、極めて専門技術的な判断を要するため、租税法の分野における所得の性質の違い等を理由とする取扱いの区別については、その立法目的が正当なものであり、かつ、当該立法において具体的に採用された区別の態様が目的との関連で著しく不合理であることが明らかでない限り、その合理性は否定できず、憲法第１４条に違反しない。
イ．生存権は、生存に直結する権利であり精神的自由に準ずる権利である一方、これを具体化するための立法には高度の専門技術的な政策的判断を要するところ、併給調整条項の適用により、障害福祉年金の受給者と非受給者との間で児童扶養手当の受給に関する区別が生じるとしても、立法目的に合理的な根拠があり、かつ、立法目的と当該区別との間に実質的関連性が認められ、合理的理由のない差別とはいえないから、憲法第１４条に違反しない。
ウ．相続制度をどのように定めるかは、国の伝統、社会事情、国民感情や、その国における婚姻ないし親子関係に対する規律、国民の意識等を総合的に考慮するなど立法府の合理的な裁量判断に委ねられているが、嫡出性の有無による法定相続分の区別は、立法府に与えられた上記のような裁量権を考慮しても、こうした区別をすることについて合理的な根拠が認められないから、合理的理由のない差別として、憲法第１４条に違反する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"121"},{year:"2022",num:"4",subject:"ken",q:`憲法第２０条に関する次のアからウまでの各記述について、ｂの見解がａの見解の批判となっている場合には１を、そうでない場合には２を選びなさい。
ア．ａ．憲法第２０条第２項と同条第３項の規定は、その目的、趣旨、対象、範囲を異にしており、同条第２項の「宗教上の行為、祝典、儀式又は行事」は、必ずしも全てが同条第３項の「宗教的活動」に含まれるという関係にはない。
ｂ．憲法第２０条第３項の「宗教的活動」に含まれない宗教上の祝典、儀式、行事等であっても、国家がこれに参加を強制すれば、同条第２項違反の問題が生じ得る。
イ．ａ．憲法第２０条第３項にいう「宗教的活動」とは、国及びその機関の活動の中で宗教と関わりを持つ全ての行為を指すものではなく、その関わりが相当とされる限度を超えるものに限られる。
ｂ．国家が社会生活に規制を加え、あるいは教育、福祉、文化等に関する助成、援助等の諸施策を実施するに当たって、宗教と一定の関わりを生ずることは避けられない。
ウ．ａ．憲法第２０条第３項の「宗教的活動」とは、目的が宗教的意義を持ち、効果が宗教に対する援助、助長、促進又は圧迫、干渉等になるものをいい、その該当性判断において、一般人の宗教的評価や行為者の意図等の主観、行為が一般人に与える影響等も考慮すべきである。
ｂ．「宗教的活動」の該当性判断において一般人の宗教的評価等を考慮することは、多数者による少数者の信仰の抑圧につながる可能性がある。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"221"},{year:"2022",num:"5",subject:"ken",q:`表現の自由に関する次のアからウまでの各記述について、最高裁判所の判例の趣旨に照らして、正しいものには○、誤っているものには×を付した場合の組合せを、後記１から８までの中から選びなさい。
ア．ビラの配布のために集合住宅の共用部分及び敷地内に管理権者の承諾なく立ち入って、その管理権やそこで私的生活を営む者の私生活の平穏を侵害したとしても、ビラの内容が政治的意見を記載したものであれば、表現の自由の行使として尊重されるべきであるから、当該立入り行為を刑法第１３０条前段の罪に問うことは憲法第２１条第１項に違反し、許されない。
イ．公立図書館は、住民に対して思想、意見その他の種々の情報を含む図書館資料を提供してその教養を高めること等を目的とする公的な場であり、図書の著作者にとっては、その思想、意見等を公衆に伝達する公的な場でもあるから、図書の著作者は、公立図書館に対して表現の自由に基づいて自らの著作物を購入し、閲覧に供するよう求めることができる。
ウ．報道機関の報道が正しい内容を持つためには、報道のための取材の自由も憲法第２１条の精神に照らして十分尊重されなければならず、取材源の秘密は、取材の自由を確保するために必要なものとして重要な社会的価値を有するから、報道機関の記者が民事訴訟で証人として尋問された場合、取材源に関する証言の拒絶は、それによって真実発見及び裁判の公正が犠牲になるとしても、直ちに認められなければならない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"8"},{year:"2022",num:"6",subject:"ken",q:`新聞の記事に取り上げられた者が、当該記事に取り上げられたという理由のみによって、当該新聞を発行・販売する者に対し、当該記事に関する自己の反論文を無修正、無料で掲載することを求めることができるものとする、いわゆる反論権に関する次のアからウまでの各記述について、最高裁判所の判決（最高裁判所昭和６２年４月２４日第二小法廷判決、民集４１巻３号４９０頁）の趣旨に照らして、正しいものには○、誤っているものには×を付した場合の組合せを、後記１から８までの中から選びなさい。
ア．反論権の制度が認められると、新聞記事により自己の名誉を傷つけられあるいはそのプライバシーに属する事項等について誤った報道をされたとする者にとっては、機を失せず、同じ新聞紙上に自己の反論文の掲載を受けることができ、これにより当該記事に対する自己の主張を読者に訴える途が開かれることになる。したがって、反論権の制度が名誉あるいはプライバシーの保護に資するものがあることは否定し難い。
イ．反論権の制度は、民主主義社会において極めて重要な意味を持つ新聞等の表現の自由に対し重大な影響を及ぼすものである。したがって、記事を掲載した新聞が日刊全国紙であって、当該新聞による情報の提供が一般国民に対し強い影響力を持ち、当該記事が特定の者の名誉ないしプライバシーに重大な影響を及ぼし得る場合でない限り、具体的な成文法がないのに反論権を認めることはできない。
ウ．放送事業者に対して、一定の場合に、放送により権利の侵害を受けた本人等からの請求に基づく訂正放送を義務付ける放送法の規定や、他人の名誉を毀損した者に対して、裁判所が「名誉を回復するのに適切な処分」を命ずることができるとする民法第７２３条の規定は、反論権について直接規定したものではない。しかし、それらの規定は、それぞれの趣旨に鑑みれば、裁判において反論権を認める根拠となり得る。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"4"},{year:"2022",num:"7",subject:"ken",q:`憲法第２２条と海外旅行の自由に関する次のアからウまでの各記述について、ｂの見解がａの見解の批判となっている場合には１を、そうでない場合には２を選びなさい。
ア．ａ．海外旅行の自由は、海外に移住する自由に含まれる。
ｂ．憲法第２２条第１項は国内の関係、同条第２項は国外の関係を規律すると考えることは形式的に過ぎて適切ではない。
イ．ａ．海外旅行の自由は、移転の自由に含まれる。
ｂ．日本国の主権から離脱する自由として海外に移住し国籍を離脱する自由と、日本国の主権の保護を受けながら一時的に日本国外に渡航する自由とは異なる。
ウ．ａ．海外旅行の自由は、憲法第２２条ではなく、幸福追求権の一部分として憲法第１３条により保障される。
ｂ．移転の自由及び海外に移住する自由は、一時的な移動ではなく、生活の本拠を決定することを保障するものである。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"122"},{year:"2022",num:"8",subject:"ken",q:`教育に関する次のアからウまでの各記述について、最高裁判所の判例の趣旨に照らして、正しいものには○、誤っているものには×を付した場合の組合せを、後記１から８までの中から選びなさい。
ア．憲法第２６条の規定の背後には、子どもは学習権を有するとの観念が存在しており、子どもに対する教育は、専ら子どもの利益のために、教育を与える者の責務として行われるべきものであることからすると、教育の内容及び方法は、基本的に、子どもの教育の実施に当たる教師が決定すべきこととなる。
イ．教育内容に対する国家的介入は抑制的であることが要請され、誤った知識や一方的な観念を子どもに植え付けるような教育を施すことを国が強制することは許されないと解されるが、このことは、教育内容について決定する国の権能を否定する理由とはならない。
ウ．憲法第２６条第２項は、子女に教育を受けさせることを国民に義務付け、義務教育は無償とすると定めているのであるから、同項は、義務教育に関する限り、授業料のほか、教科書代金や学用品についても国が負担することを定めたものと解される。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"6"},{year:"2022",num:"9",subject:"ken",q:`刑事手続上の権利に関する次のアからウまでの各記述について、最高裁判所の判例の趣旨に照らして、それぞれ正しい場合には１を、誤っている場合には２を選びなさい。
ア．憲法第３１条の定める法定手続の保障は、直接には刑事手続に関するものであるが、行政手続にも及ぶと解すべき場合があり、その場合には行政処分の相手方に常に事前の告知、弁解、防御の機会を与える必要がある。
イ．憲法第３５条は、住居、書類及び所持品について、侵入、捜索及び押収を受けることのない権利を規定しているが、この規定の保障対象には、住居、書類及び所持品に準ずる私的領域に侵入されることのない権利が含まれる。
ウ．憲法第３８条第１項は、自己が刑事上の責任を問われるおそれのある事項について供述を強要されないことを保障するものであり、氏名の供述も、これによって自己が刑事上の責任を問われるおそれがあることから、原則として保障が及ぶ。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"212"},{year:"2022",num:"10",subject:"ken",q:`国家賠償請求に関する次のアからウまでの各記述について、最高裁判所の判例の趣旨に照らして、それぞれ正しい場合には１を、誤っている場合には２を選びなさい。
ア．公務員の不法行為について国又は公共団体に対し損害賠償を求める権利について、憲法第１７条は、「法律の定めるところ」による旨を規定している。これは、公務員のどのような行為によりいかなる要件で損害賠償責任を負うかを立法府の政策判断に委ねたものであって、立法府に無制限の裁量権を付与しているわけではない。
イ．公務員がその職務を行うに当たり、故意又は過失によって違法に他人に損害を加えた場合、国は当該公務員に代位して賠償責任を負う。しかし、国会議員には憲法第５１条で発言及び表決に対する免責特権が保障されているから、議員が国会で行った質疑等において個人の名誉を毀損する発言を行っても責任を問われることはないので、国が賠償責任を負うこともない。
ウ．国会議員の立法行為の国家賠償法上の違法の問題と立法内容の違憲の問題とは区別されるし、本質的に政治的なものである立法行為の適否を法的に評価するべきではない。したがって、国民に憲法上保障されている権利を違法に侵害することが明白な場合であっても、国会議員の立法行為が国家賠償法上の違法の評価を受けることはない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"122"},{year:"2022",num:"11",subject:"ken",q:`日本の憲法史に関する次のアからウまでの各記述について、それぞれ正しい場合には１を、誤っている場合には２を選びなさい。
ア．大日本帝国憲法の下では、天皇が有していた、作戦用兵の目的のために陸海軍を統括する統帥権について、国務大臣の輔弼の対象外とされたため、帝国議会は関与し得なかった。
イ．大日本帝国憲法の下では、内閣制度は憲法で規定されていなかった。また、帝国議会の権限が強く保障されていたので、各国務大臣は天皇ではなく帝国議会に対して責任を負うとされていた。
ウ．日本国憲法成立の法理に関する八月革命説は、ポツダム宣言の受諾によって天皇から国民に主権者が変更されたという説は現実社会の変化にそぐわない全くの擬制的な説明であると批判して、ポツダム宣言を受諾した１９４５年８月から革命が漸進的に進行し、占領体制から脱して国家主権を回復したときにその革命が成就し国民は真の主権者となった、とする説である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"122"},{year:"2022",num:"12",subject:"ken",q:`天皇に関する次のアからウまでの各記述について、正しいものには○、誤っているものには×を付した場合の組合せを、後記１から８までの中から選びなさい。
ア．天皇の国事行為には内閣の助言と承認が必要であるが、天皇が自ら発意し、内閣が閣議にかけて承認する場合、内閣は当該国事行為についての責任を負わない。
イ．天皇は、法律の定めるところにより、国事行為を委任することができるが、この委任については、内閣の助言と承認は必要ではない。
ウ．皇室に財産を譲り渡し、又は皇室が、財産を譲り受け、若しくは賜与することは、国会の議決に基づかなければならない、と憲法は定めている。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"7"},{year:"2022",num:"13",subject:"ken",q:`選挙権及び被選挙権に関する次のアからウまでの各記述について、最高裁判所の判例の趣旨に照らして、正しいものには○、誤っているものには×を付した場合の組合せを、後記１から８までの中から選びなさい。
ア．憲法第１５条第４項は、「すべて選挙における投票の秘密は、これを侵してはならない。」として投票の秘密を明文で保障しているが、選挙の公正が担保されることは、代表民主制の根幹をなすもので極めて重要であるから、選挙権のない者又は代理投票をした者の投票のような無効投票が存在する場合における議員の当選の効力を判断する手続の中で、こうした無効投票の投票先を明らかにするとしても、その限度では投票の秘密を侵害するものではない。
イ．労働組合は、団結権が保障されており、組合の団結を維持するための統制権の行使によって公職選挙における組合員の立候補の自由を制約することができるので、公職選挙において統一候補を擁立した場合、当該候補以外の組合員が立候補をやめなかったことを理由にその組合員を処分することができる。
ウ．組織的選挙運動管理者等が、買収等所定の選挙犯罪を犯して禁錮以上の刑に処せられた場合に、公職の候補者等であった者の当選を無効とし、かつ、これらの者が５年間当該選挙に係る選挙区において行われる当該公職に係る選挙に立候補することを禁止する旨を定めた公職選挙法の規定は、民主主義の根幹をなす公職選挙の公正を保持する極めて重要な法益を実現するための規定であり、立法目的は合理的であるとともに、立法目的を達成する手段として必要かつ合理的なものといえるから、憲法第１５条に違反しない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"7"},{year:"2022",num:"14",subject:"ken",q:`政党に関する次のアからウまでの各記述について、ｂの見解がａの見解の根拠となっている場合には１を、そうでない場合には２を選びなさい。
ア．ａ．政治資金の授受の規正その他の措置を講ずることを定めた政治資金規正法は、会社が政党及び政治資金団体に対して政治活動に関する寄附をすることを、一定の限度で認めている。
ｂ．政党は、議会制民主主義を支える不可欠の要素であり、かつ、国民の政治意思を形成する最も有力な媒体であるから、その健全な発展に協力することは、会社にとって当然の行為として期待される。
イ．ａ．国が政党に対し政党交付金による助成を行うことを定めた政党助成法は、政党に対する政党交付金の交付に当たっては、条件を付し、又はその使途について制限してはならないとしている。
ｂ．政党が議会制民主主義を支える不可欠の要素であることからすると、その結社としての活動の自由が制約されることはやむを得ない。
ウ．ａ．公職選挙法は、所属議員、直近の選挙における得票又は当該選挙における候補者に照らし一定以上の規模を有する政党のみに、衆議院及び参議院の比例代表選出議員の選挙に参加することを認めている。
ｂ．その所属する政党の規模の大小により、選挙への参加機会が均等でないことは、信条又は社会的身分による差別に当たる疑いがある。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"122"},{year:"2022",num:"15",subject:"ken",q:`内閣及び内閣総理大臣に関する次のアからウまでの各記述について、それぞれ正しい場合には１を、誤っている場合には２を選びなさい。
ア．最高裁判所の判例の趣旨に照らすと、内閣総理大臣は、憲法第７２条に規定された行政各部の指揮監督権限を閣議にかけて決定した方針に基づいて行使する必要があり、行政各部に対してその所掌事務について一定の方向で処理するよう指導、助言等の指示を与えたとしても、内閣としての事前の方針決定がなければ、事実上の影響力を行使したものにすぎず、内閣総理大臣の職務権限に属するものではない。
イ．内閣は憲法第７３条第１号により法律を誠実に執行する義務を負っているが、最高裁判所が違憲と判断した法律については、国会がこれを改廃する前であっても、内閣は、その執行を差し控えることができる。
ウ．憲法には内閣に法律案の提出権を認める規定はないものの、憲法では議院内閣制が採用されていることや、内閣に法律案の提出権を認めたからといって当然に国会の議決権が拘束されるわけではないことは、法律で内閣に法律案の提出権を付与することが憲法上禁じられていないと解する根拠となり得る。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"211"},{year:"2022",num:"16",subject:"ken",q:`裁判官の身分保障に関する次のアからウまでの各記述について、正しいものには○、誤っているものには×を付した場合の組合せを、後記１から８までの中から選びなさい。
ア．裁判官は、裁判により心身の故障のために職務を執ることができないと決定された場合を除いては、最高裁判所の裁判官については国民審査によることなしには、また、下級裁判所の裁判官については公の弾劾によることなしには、罷免されることはない。
イ．裁判官の罷免事由である「心身の故障」とは、裁判官の職務を遂行することができない程度の精神上の能力の喪失又は身体的故障で、相当長期間にわたって継続することが確実に予想される場合をいうと解されており、一時的な故障は、たとえそれがどのように重大なものであってもこれに当たらない。
ウ．憲法第７８条は、裁判官の懲戒処分は行政機関が行うことはできないと規定しているところ、これは、裁判官の懲戒処分は裁判所が行うべきことを定めているものと解されており、その手続については、法律上、裁判により行うことが規定されている。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"5"},{year:"2022",num:"17",subject:"ken",q:`司法権の限界に関する次のアからウまでの各記述について、最高裁判所の判例の趣旨に照らして、それぞれ正しい場合には１を、誤っている場合には２を選びなさい。
ア．地方議会の議員に対する出席停止の懲罰に関し、その懲罰を受けた議員が取消しを求める訴えは、法令の適用によって終局的に解決し得る法律上の争訟に当たるところ、議会により出席停止の懲罰処分を科されると、その議員は、住民の負託を受けた議員としての責務を十分に果たすことができなくなるから、当該処分が議会の自律的な権能に基づいてなされたものとして、議会に一定の裁量が認められるとしても、裁判所は、常にその適否を判断することができ、司法審査の対象となる。
イ．政党が組織内の自律的運営として党員に対してした除名処分は、原則として自律的な解決に委ねるのが相当であり、その除名処分が一般市民法秩序と直接の関係のない内部的な問題にとどまる限り、司法審査の対象とはならず、また、一般市民としての権利利益を侵害する場合であっても、その処分の当否は、当該政党の自律的な規範が公序良俗に反するなどの特段の事情のない限りその規範に照らし、規範がない場合は条理に基づき、適正な手続にのっとってされたか否かによって決すべきであり、司法審査もこの点に限られる。
ウ．三権分立の制度の下において、司法権の行使について、ある限度の制約は免れず、あらゆる国家行為が無制限に司法審査の対象となるわけではないと解すべきであるところ、衆議院の解散のような直接国家統治の基本に関する高度に政治性のある国家行為は、国会等の政治部門の判断に委ねられ、最終的に国民の政治判断に委ねられているものと解すべきであるから、衆議院の解散が違法であることを前提とする国会議員の歳費の支払を請求する訴えは、法律上の争訟に当たるとはいえない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"112"},{year:"2022",num:"18",subject:"ken",q:`財政に関する次のアからウまでの各記述について、正しいものには○、誤っているものには×を付した場合の組合せを、後記１から８までの中から選びなさい。
ア．予算の裏付けを必要とする法律が成立しているにもかかわらず、その執行に必要となる予算が不存在ないし不成立の場合、法律を誠実に執行すべき内閣としては、補正予算の提出、経費の流用、予備費の支出などにより、対処することが求められる。
イ．予備費は、予見し難い予算の不足に充てるため、国会の議決に基づいて設けられ、内閣の責任で支出されるものである。そのため、内閣は、その支出について、事後に国会の承諾を求める必要はない。
ウ．内閣は、毎年の国の収入支出の決算について、会計検査院の検査を経た上で、翌年度国会に提出しなければならない。提出された決算については、各議院で審議され、それを認めるか否かの審査がなされるが、そこで不承認とされても、決算の効力に影響は生じない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"3"},{year:"2022",num:"19",subject:"ken",q:`条例に関する次のアからウまでの各記述について、最高裁判所の判例の趣旨に照らして、正しいものには○、誤っているものには×を付した場合の組合せを、後記１から８までの中から選びなさい。
ア．憲法第９４条は、法律の範囲内で条例制定権を認めているが、ある事項について国の法令中にこれを規制する明文の規定がない場合であれば、当該事項について規制を設ける条例の規定は、国の法令に違反しない。
イ．条例は、公選の議員をもって組織する地方公共団体の議会の議決を経て制定される自治立法であって、国民の公選した議員をもって組織する国会の議決を経て制定される法律に類するものであるから、条例によって刑罰を定める場合、法律による条例への委任は、一般的・包括的委任で足りる。
ウ．憲法第９４条は、地方公共団体に条例制定権を認めており、ある事項を条例によって規制する結果として、地方公共団体ごとにその取扱いに差異が生じることがあり得るから、ある事項について条例によって刑罰を定める場合、地域によって刑罰の内容に差異が生じることも許容され得る。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"7"},{year:"2022",num:"20",subject:"ken",q:`憲法改正に関する次のアからウまでの各記述について、それぞれ正しい場合には１を、誤っている場合には２を選びなさい。
ア．憲法改正の公布は、天皇が内閣の助言と承認のもとで「国民の名で」行うものとされており、「国民の名で」というのは、憲法改正が主権の存する国民の意思によることを明らかにする趣旨である。
イ．憲法改正は、国会が発議し、国民の承認を経ることによって成立するもので、国民主権に関わることから、特別の国民投票又は直近の衆議院議員総選挙の際に行われる投票においてその過半数の賛成を必要とする。
ウ．憲法を始源的に創設する憲法制定権力と憲法によって与えられた憲法改正権とを区別する考えは、憲法改正には法的な限界があるとする見解の根拠となる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"121"},{year:"2022",num:"1",subject:"min",q:`未成年者に関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．未成年者が子を認知した場合、その未成年者の親権者は、認知を取り消すことができない。
イ．営業を許された未成年者がした法律行為は、その営業に関しないものであっても、取り消すことができない。
ウ．親権者の同意を得ずに契約を締結した未成年者は、成年に達するまでは、親権者の同意を得なければ、自らその契約を取り消すことができない。
エ．親権者の同意を得ずに契約を締結した未成年者は、成年に達するまでは、親権者の同意を得なければ、自らその契約の追認をすることができない。
オ．未成年者が、親権者の同意があると誤信させるために詐術を用いて契約を締結した場合、その契約は取り消すことができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2022",num:"2",subject:"min",q:`成年後見に関する次のアからオまでの各記述のうち、正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．成年被後見人が土地の贈与を受けた場合、その後見人は、その贈与を取り消すことができない。
イ．成年被後見人ＡがＢの意思表示を受けた場合、Ａの後見人Ｃがその意思表示を知った後は、Ｂは、その意思表示をもってＡに対抗することができる。
ウ．成年被後見人Ａが未成年者Ｂの法定代理人としてした行為は、Ａの行為能力の制限によっては取り消すことができない。
エ．成年被後見人Ａがその財産を管理する後見人に対して権利を有するときは、Ａが行為能力者となった時又は後任の法定代理人が就職した時から法定の期間を経過するまでの間は、その権利について、時効は完成しない。
オ．成年被後見人が協議上の離婚をするときには、その後見人の同意を得なければならない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"3"},{year:"2022",num:"3",subject:"min",q:`意思表示に関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．隔地者に対する意思表示は、相手方が了知するまでは効力を生じない。
イ．未成年者Ａと契約を締結したＢが、Ａの法定代理人Ｃに対してその契約を追認するかどうかを確答すべき旨の催告をした。この場合において、ＣがＢの定めた期間内に確答を発しないときは、Ｃは、その契約を取り消したものとみなされる。
ウ．心裡留保を理由とする意思表示の無効は、過失のある善意の第三者に対抗することができない。
エ．錯誤による意思表示は、その錯誤が表意者の重大な過失によるものであった場合において、相手方が表意者と同一の錯誤に陥っていたときは、取り消すことができない。
オ．相手方に対する意思表示について第三者が強迫を行った場合には、相手方がその事実を知ることができなかったとしても、その意思表示は取り消すことができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2022",num:"4",subject:"min",q:`取消しに関する次のアからオまでの各記述のうち、正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．取り消すことができる法律行為に基づく債務を保証した者は、その法律行為を取り消すことができない。
イ．被保佐人Ａがした法律行為を法定代理人が追認したときは、Ａは、以後、その法律行為を取り消すことができない。
ウ．Ａが第三者Ｂの詐欺によってＣに不動産を売る旨の意思表示をしたときは、その取消しは、Ｂ及びＣの双方に対する意思表示によってする。
エ．被保佐人Ａがした金銭の借入れが取り消された場合、Ａは、それまでに借入金を賭博で費消していたときでも、借入金全額を貸主に返還する義務を負う。
オ．取消権は、取り消すことができる行為をした時から５年間行使しないときは、時効によって消滅する。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2022",num:"5",subject:"min",q:`時効の援用に関する次のアからオまでの各記述のうち、判例の趣旨に照らし誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．後順位抵当権者は、先順位抵当権の被担保債権の消滅時効を援用することができる。
イ．Ａから甲土地上の建物を賃借しているＢは、Ａが取得時効に必要な期間、甲土地を占有している場合であっても、甲土地のＡの取得時効を援用することができない。
ウ．甲土地に抵当権が設定されてその旨の登記がされた後、甲土地を譲り受けた者は、その抵当権の被担保債権の消滅時効を援用することができる。
エ．詐害行為取消権を行使された受益者は、取消債権者の被保全債権の消滅時効を援用することができる。
オ．主たる債務者が時効の利益を放棄した場合、保証人は主たる債務の消滅時効を援用することができない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2022",num:"6",subject:"min",q:`不動産物権変動に関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．Ａがその所有する甲建物をＢに売却した場合において、甲建物の保存登記が未了であったときは、Ｂは、自己名義の登記がなくても、所有権の取得を第三者に対抗することができる。
イ．甲土地を所有するＡが死亡して子Ｂ及びＣが相続し、ＢとＣの遺産分割協議により甲土地はＢの単独所有とされた。その後、Ｃが、甲土地につきＣの単独所有とする登記をした上で、これをＤに売却したときは、Ｂは、Ｄに対し、甲土地の単独所有権の取得を対抗することができない。
ウ．Ａがその所有する甲土地にＢのために地上権を設定し、その旨の登記がされない間に甲土地にＣのために抵当権を設定してその旨の登記がされた後、Ｂの地上権の設定の登記がされた。この場合において、Ｃの抵当権が実行され、Ｄが甲土地を買い受けてその旨の登記がされたときは、Ｂは、Ｄに対し、地上権の取得を対抗することができる。
エ．Ａがその所有する甲土地にＢのために抵当権を設定し、その旨の登記がされた場合において、その登記をＣがＢの知らない間に不法に抹消したときは、Ｂは、再度登記がされない限り、抵当権の設定を第三者に対抗することができない。
オ．Ａがその所有する甲土地を相続人Ｂに承継させる旨の遺言をして死亡した場合には、Ｂは、Ｂと共にＡを相続したＣに対し、登記がなくても、甲土地の単独所有権の取得を対抗することができる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"4"},{year:"2022",num:"7",subject:"min",q:`物権の混同に関する次のアからオまでの各記述のうち、誤っているものを組み合わせたものは、後記１から５までのうちどれか。なお、次のアからオまでの各記述中の抵当権及び地上権は、いずれも登記がされているものとする。
ア．Ａが、その所有する甲土地に、Ｂのために第一順位の抵当権を、Ｃのために第二順位の抵当権をそれぞれ設定していた場合において、ＢがＡから甲土地を買い受けたときは、Ｂの抵当権は消滅する。
イ．Ａがその所有する甲土地にＢのために地上権を設定し、Ｂがこの地上権にＣのために抵当権を設定していた場合において、Ａが死亡し、ＢがＡを単独相続したときは、Ｂの地上権は消滅する。
ウ．Ａがその所有する甲土地にＢ社のために地上権を設定し、Ｂ社がこの地上権にＣ社のために抵当権を設定していた場合において、Ｂ社とＣ社が合併したときは、Ｃ社の抵当権は消滅する。
エ．Ａが、その所有する甲土地に、Ｂのために抵当権を設定した後、Ｃのために地上権を設定していた場合において、ＣがＡから甲土地の所有権の譲渡を受けたときは、Ｃの地上権は消滅する。
オ．Ａがその所有する甲土地にＢのために地上権を設定し、Ｂが甲土地上に建築した乙建物をＣに賃貸していた場合において、Ａが死亡し、ＢがＡを単独相続したときは、Ｂの地上権は消滅する。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2022",num:"8",subject:"min",q:`動産の引渡しに関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．Ａがその所有する絵画甲をＢに預けたままＣに売却した場合において、ＡがＢに対して以後Ｃのために甲を占有すべきことを命じ、Ｂがこれを承諾したときは、Ｃは、甲の所有権の取得を第三者に対抗することができる。
イ．Ａはその所有する登録済みの自動車甲をＢに売却して現実に引き渡したが、登録名義はＡのままであった。その後、Ａが甲をＣに売却し、登録名義をＣに移転した場合、Ｂは、甲の所有権の取得をＣに対抗することができる。
ウ．Ａは、その所有する絵画甲をＢに売却したが、甲の占有を継続し、以後Ｂのために占有する意思を表示した。その後、ＡはＢへの売却の事実を知っているＣに甲を売却し、現実に引き渡した。この場合、Ｃは、甲の所有権の取得をＢに対抗することができる。
エ．Ａはその所有する絵画甲をＢに預けていたが、Ｂは、Ａに無断で、Ｂが甲の所有者であると過失なく信じているＣに甲を売却した。Ｂは甲の占有を継続し、以後Ｃのために占有する意思を表示した。その後ＡがＢから甲の返還を受けた場合、ＣはＡに対し、所有権に基づいて甲の引渡しを請求することができない。
オ．Ａからその所有する絵画甲を預かり占有していたＢが、Ａから甲を購入した場合において、占有をＢに移転する旨の意思表示がＡＢ間でされたときは、Ｂは、甲の所有権の取得を第三者に対抗することができる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2022",num:"9",subject:"min",q:`袋地（他の土地に囲まれて公道に通じない土地）である甲土地の所有者Ａが、公道に至るために囲繞地（袋地を囲んでいる他の土地）であるＢ所有の乙土地を通行する権利（以下「囲繞地通行権」という。）を有する場合に関する次のアからオまでの各記述のうち、判例の趣旨に照らし誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．Ａが乙土地を通行する場所及び方法は、Ａのために必要であり、かつ、乙土地にとって損害が最も少ないものを選ばなければならない。
イ．Ａが乙土地上に通路を開設するためには、Ｂの承諾を得なければならない。
ウ．甲土地の地上権者Ｃは、Ｂの承諾を得なくても、乙土地を通行することができる。
エ．Ａが甲土地をＣから買い受けてその所有者となっていた場合には、Ａは、その所有権移転登記がなくても、乙土地を通行することができる。
オ．Ａが甲土地に隣接する丙土地を買い取り、丙土地を通行して公道に至ることができるようになった場合でも、Ａは乙土地について囲繞地通行権を有する。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2022",num:"10",subject:"min",q:`Ａ、Ｂ及びＣが甲土地を各３分の１の割合で共有している場合に関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．甲土地がＤによって不法に占有されている場合には、Ａは、Ｄに対し、甲土地の不法占有によりＡ、Ｂ及びＣが被った損害の全部の賠償を請求することができる。
イ．ＡがＢ及びＣの同意を得ずに農地である甲土地の宅地造成工事を完了した場合には、原状回復ができるときであっても、Ｂは、甲土地の原状回復を請求することができない。
ウ．ＡがＢに対する甲土地の管理費用の支払義務を履行しないまま１年が経過したときは、Ｂは、相当の償金を支払ってＡの持分を取得することができる。
エ．甲土地について現物分割の方法により共有物の分割をした場合には、Ａは、その分割によってＡ所有とされた部分につき、単独所有権を原始取得する。
オ．ＡがＢに対して甲土地の管理費用の支払請求権を有するときは、現物分割の方法により甲土地につき共有物の分割をするに際し、Ｂに帰属すべき部分をもって、その弁済に充てることができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2022",num:"11",subject:"min",q:`留置権に関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．ＡがＢの所有する甲建物を権原がないことを知りながら占有を開始した場合であっても、その後にＡが甲に関して生じた債権を取得したときは、Ａは、その債権の弁済を受けるまで、甲を留置することができる。
イ．Ａは、その所有する動産甲をＢに売り、Ｂは甲をＣに転売したが、Ａが甲の占有を続けている。この場合において、Ａは、Ｃからの引渡請求に対し、Ｂから代金が支払われるまで、甲について留置権を行使することができる。
ウ．留置権者は、留置物の滅失によって債務者が受けるべき保険金請求権に対しても、これを差し押さえることにより留置権を行使することができる。
エ．留置権者が債務者の承諾を得ずに留置物を賃貸した場合であっても、その賃貸が終了して留置権者が留置物の返還を受けていたときは、債務者は、留置権の消滅を請求することができない。
オ．留置権者が留置物の占有を奪われたとしても、占有回収の訴えによってその物の占有を回復すれば、留置権は消滅しない。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"4"},{year:"2022",num:"12",subject:"min",q:`Ａは、Ｂに対し、自己が所有する工作機械甲を売り、甲を引き渡した。この場合における動産の先取特権又は所有権留保特約（代金債権を担保する目的でされた、甲の所有権は代金完済時に移転する旨の特約）に関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．Ｂが弁済期到来後も代金債務を履行しない場合、Ａは、先取特権に基づき、Ｂに対して甲の引渡しを請求することができる。
イ．Ｂが甲をＣに売り、占有改定による引渡しがされた場合には、Ａは、Ｂが弁済期到来後も代金債務を履行しないときであっても、先取特権に基づいて甲を差し押さえることはできない。
ウ．Ｂが甲につきＣのための質権を設定し、引渡しを了した場合において、Ｃが質権を取得した時点でＡの先取特権があることを知らなかったときは、Ｃの質権は、Ａの先取特権に優先する。
エ．ＡＢ間の売買契約に所有権留保特約が付されていた場合、Ｂが代金完済前にＣから金銭を借り入れて甲に譲渡担保権を設定し、占有改定により甲の占有をＣに移転したときは、その後Ｂが代金の支払を怠ったとしても、Ａは、甲を処分して残代金の回収をすることはできない。
オ．ＡＢ間の売買契約に所有権留保特約が付されていた場合、Ｂが代金の支払を遅滞し、期限の利益を喪失した状態で、甲をＣ所有の土地に無断で放置したとしても、Ｃは、Ａに対して甲の撤去を請求することができない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2022",num:"13",subject:"min",q:`ＡのＢに対する貸金債権甲を被担保債権とし、ＢのＣに対する貸金債権乙を目的とする質権がＢにより設定され、ＢがＣに対して口頭でその旨の通知をした。この場合に関する次のアからオまでの各記述のうち、誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．Ｃは、Ｂから質権設定の通知を受けるまでにＢに対して債権乙に係る債務を弁済していた場合であっても、これをもってＡに対抗することができない。
イ．債権譲渡登記ファイルに質権の設定の登記がされたときは、Ａは、Ｃ以外の第三者に対して質権の設定を対抗することができる。
ウ．Ａは、債権甲及び債権乙が共に弁済期にあるときは、債権甲の金額の範囲内でＣから債権乙を直接取り立てることができる。
エ．債権甲の弁済期より前に債権乙の弁済期が到来したときは、Ａは、Ｃにその弁済をすべき金額を供託させることができる。
オ．Ａの債権質の効力は、債権乙に係る利息には及ばない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2022",num:"14",subject:"min",q:`抵当権に関する次のアからオまでの各記述のうち、正しいものを組み合わせたものは、後記１から５までのうちどれか。なお、次のアからオまでの各記述中の抵当権は、いずれも登記がされているものとする。
ア．Ａは、Ｂに対する債務を担保するため、Ａの所有する甲土地に、抵当権を設定した。この場合、Ｂが抵当権をＡの一般債権者Ｃに譲渡したときは、これをＢがＡに通知し、又はＡが承諾しなければ、Ｃは、Ａに抵当権の譲渡を対抗することができない。
イ．Ａは、その所有する甲土地に、Ｂのために第一順位の、Ｃのために第二順位の各抵当権を設定した。この場合、ＢがＣのために抵当権の順位を放棄したときは、ＢとＣの抵当権の順位が入れ替わる。
ウ．Ａは、その所有する甲土地に、Ｂのために第一順位の抵当権を、Ｃのために第二順位の抵当権を、Ｄのために第三順位の抵当権をそれぞれ設定した。この場合、抵当権の順位をＤ、Ｃ、Ｂの順に変更するには、Ｃの合意を要しない。
エ．Ａは、その所有する更地である甲土地にＢのために抵当権を設定し、その後、甲土地上に乙建物を建築した。この場合、Ｂが抵当権を実行し、甲土地と乙建物とが一括して競売されたときは、Ｂは乙建物の売却代金からも優先弁済を受けることができる。
オ．Ａは、その所有する甲土地にＢのために抵当権を設定し、その後、甲土地をＣに売却した。この場合、ＣがＢの請求に応じてＢにその代価を弁済したときは、抵当権は消滅する。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．イ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2022",num:"15",subject:"min",q:`甲土地上の法定地上権の成否に関する次のアからオまでの各記述のうち、判例の趣旨に照らし誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．甲土地及びその土地上の乙建物を所有していたＡが、甲土地に抵当権を設定した後に、乙建物を第三者に譲渡した。その後、抵当権が実行されＣが甲土地を取得したときは、法定地上権が成立する。
イ．Ａ所有の甲土地を賃借してその土地上に乙建物を所有していたＢが乙建物に抵当権を設定した後、Ａが乙建物の所有権を取得した。その後、抵当権が実行されＣが乙建物を取得したときは、法定地上権が成立する。
ウ．Ａ所有の甲土地を賃借してその土地上にＢが乙建物を所有していたところ、Ａが甲土地に第一順位の抵当権を設定した後、甲土地をＢに譲渡し、次いでＢが甲土地に第二順位の抵当権を設定した。その後、第二順位の抵当権が実行され、Ｃが甲土地を取得したときは、法定地上権が成立する。
エ．Ａ所有の甲土地を賃借してその土地上に乙建物を所有していたＢが、乙建物に第一順位の抵当権を設定した後、甲土地をＡから譲り受け、次いで乙建物に第二順位の抵当権を設定した。その後、第一順位の抵当権が実行され、Ｃが乙建物を取得したときは、法定地上権が成立する。
オ．Ａが甲土地及びその土地上の乙建物を所有していた。この場合において、甲土地の登記名義が前所有者Ｂのままであったとしても、乙建物に抵当権が設定され、抵当権の実行によりＣが乙建物を取得したときは、法定地上権が成立する。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2022",num:"16",subject:"min",q:`特定物の売買の売主が目的物の引渡債務について履行の提供をした場合に関する次のアからオまでの各記述のうち、判例の趣旨に照らし誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．買主が目的物の受領を拒み、その後に売主が買主に対して売買代金の支払を請求した場合、買主は、売主が履行の提供を継続し、又は改めて履行の提供をしなければ、同時履行の抗弁権を主張して売買代金の支払を拒むことができる。
イ．買主が目的物を受領することができない場合、売主は、履行の提供をした時から引渡しが完了するまで、契約及び取引上の社会通念に照らして定まる善良な管理者の注意をもって、目的物を保存しなければならない。
ウ．買主が目的物を受領することができない場合、売主が目的物の保管を続けるために必要となる費用は、買主が負担しなければならない。
エ．買主が目的物を受領することができない場合、売主は、履行の提供をした時から、目的物の引渡債務につき遅滞の責任を免れる。
オ．買主が目的物の受領を拒み、その後に、売主及び買主の双方の責めに帰することができない事由により目的物が滅失した場合、買主は契約を解除することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2022",num:"17",subject:"min",q:`履行の強制に関する次のアからオまでの各記述のうち、正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．債務者が不特定物の引渡債務を履行しない場合、債権者は、債務名義を得た上で、代替執行の方法により履行の強制をすることができる。
イ．債務者が所有権移転登記義務を履行しない場合、債権者は、債務名義を得た上で、間接強制の方法により履行の強制をすることができる。
ウ．債務者が一定以上の高さの建物を建築しない債務に反してその高さを超える建物を建築した場合、債権者は、その高さを超える部分の除去について、債務名義を得た上で、代替執行の方法により履行の強制をすることができる。
エ．債務者がその居住する建物の明渡債務を履行しない場合、債権者は、債務名義を得た上で、直接強制の方法により履行の強制をすることができる。
オ．債務者が小説を執筆する債務を履行しない場合、債権者は、債務名義を得た上で、間接強制の方法により履行の強制をすることができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2022",num:"18",subject:"min",q:`ＡのＢに対する債権を保全するための債権者代位権に関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．Ａが債権者代位権に基づき、ＢのＣに対する金銭債権の履行を請求した場合において、ＣがＢに対して既に当該金銭債務をその弁済期前に弁済していたときは、Ｃは、弁済による債権の消滅をＡに対抗することができない。
イ．ＢがＣに対する金銭債権の支払を求めて訴えを提起しているときは、Ａは、ＢのＣに対する金銭債権を代位行使することができない。
ウ．ＡがＢに対し、ＢがＣに対し、それぞれ金銭債権を有する場合には、Ａは、自己の債権の額を超えて、ＢのＣに対する債権を代位行使することができない。
エ．借地上の建物の賃借人Ａは、建物賃貸人である借地権者Ｂが土地賃貸人Ｃに対して有する建物買取請求権を代位行使することができる。
オ．Ｂが土地をその所有者Ｃから買い受け、これをＡに転売した場合において、ＢがＣに対する所有権移転登記手続請求権を行使しないときは、Ａは、ＢのＣに対する所有権移転登記手続請求権を代位行使して、登記を直接Ａに移転すべき旨をＣに請求することができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2022",num:"19",subject:"min",q:`保証に関する次のアからオまでの各記述のうち、正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．制限行為能力を理由に取り消すことができる債務を保証した者は、保証契約締結時にその取消しの原因を知っていたときは、主たる債務の不履行の場合又はその債務の取消しの場合においてこれと同一の目的を有する独立の債務を負担したものと推定される。
イ．主たる債務者の意思に反して保証がされた場合において、保証債務の弁済をした保証人は、主たる債務者に対し、その弁済の当時に主たる債務者が利益を受けた限度において求償権を有する。
ウ．主たる債務者の委託を受けないで保証がされた場合において、主たる債務者が債務の弁済をしたが、保証人にその事実を通知しなかった。保証人が主たる債務者による弁済の事実を知らないで保証債務の弁済をしたときは、保証人は、その弁済を有効とみなすことができる。
エ．債権者から保証債務の履行請求を受けた保証人が、債権者に対して有する自己の債権をもって相殺を援用したときは、主たる債務は対当額において消滅する。
オ．数人の連帯保証人の一人が債権者に対して保証債務の弁済をした場合は、その額が自己の負担部分を超えるかどうかにかかわらず、他の連帯保証人に対して求償をすることができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2022",num:"20",subject:"min",q:`ＡのＢに対する売買代金債権甲に譲渡禁止の特約がある場合に関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．Ａが将来発生すべき債権甲をＣに譲渡し、Ｂに対してその通知をした後、ＡＢ間で債権甲につき譲渡禁止の特約をし、その後債権甲が発生した。この場合には、Ｂは、Ｃに対し、Ｃがその特約の存在を知っていたものとみなして、債務の履行を拒むことができる。
イ．Ｃが譲渡禁止の特約の存在を知りながら債権甲を譲り受けた場合において、ＣがＢに対して相当の期間を定めてＣへの履行の催告をしたが、その期間内に履行がないときは、Ｂは、Ｃに対し、譲渡禁止を理由として債務の履行を拒むことができない。
ウ．Ｃが譲渡禁止の特約の存在を知りながら債権甲を譲り受け、その後Ｄにこれを譲渡した場合において、Ｄがその特約の存在について善意無重過失であったときは、Ｂは、Ｄに対し、譲渡禁止を理由として債務の履行を拒むことができない。
エ．債権甲が譲渡された場合には、Ｂは、債権甲の全額に相当する金銭を供託することができる。
オ．Ｃが、譲渡禁止の特約の存在を知りながら債権甲を譲り受けた場合において、Ｃの債権者Ｄが債権甲に対する強制執行をしたときは、Ｂは、Ｄに対し、譲渡禁止を理由として債務の履行を拒むことができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2022",num:"21",subject:"min",q:`弁済の目的物の供託に関する次のアからオまでの各記述のうち、判例の趣旨に照らし誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．弁済者は、口頭の提供をしても債権者が受領を拒むことが明確である場合には、弁済の目的物を直ちに供託することができる。
イ．弁済者は、債権者を確知することができず、それについて過失がないときは、弁済の目的物を供託することができる。
ウ．弁済者は、弁済の目的物を適法に供託した場合には、その目的物を取り戻すことができない。
エ．弁済者は、債権者のために弁済の目的物を供託したときは、遅滞なく、債権者に供託の通知をしなければならない。
オ．弁済者が債権者のために弁済の目的物を供託した場合には、その債権は、債権者が供託物の還付を受けた時に消滅する。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2022",num:"22",subject:"min",q:`相殺に関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．不法行為によって傷害を受けた被害者Ａは、加害者Ｂに対する損害賠償債権を自働債権とし、ＢがＡに対して有する貸金債権を受働債権とする相殺をすることができない。
イ．弁済期が到来していない債権の債務者は、その債権を受働債権とする相殺をすることができない。
ウ．返還時期の定めのない金銭消費貸借契約の貸主は、返還の催告をしてから相当期間が経過した後でなければ、その貸金債権を自働債権とする相殺をすることができない。
エ．ＡがＢに対して甲債権を有し、ＣがＡに対して消滅時効が完成したがその援用がされていない乙債権を有している。この場合において、ＢがＣから乙債権を譲り受け、その後Ａが消滅時効を援用したときは、Ｂは、乙債権を自動債権とする相殺をすることができない。
オ．差押えを受けた債権の第三債務者は、差押え前から有していた差押債務者に対する債権を自働債権とする相殺をもって差押債権者に対抗することができる。`,c1:"１．ア エ",c2:"２．ア ウ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2022",num:"23",subject:"min",q:`契約の解除等に関する次のアからオまでの各記述のうち、誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．期間の定めのない使用貸借契約が締結された場合において、使用及び収益の目的を定めなかったときは、貸主は、いつでも契約を解除することができる。
イ．期間の定めのない動産賃貸借契約の賃貸人は、いつでも解約の申入れをすることができる。
ウ．請負人は、仕事の完成前であれば、いつでも損害を賠償して請負契約を解除することができる。
エ．期間の定めのある有償の委任契約の受任者は、期間の満了前に契約を解除することができる。
オ．無償の寄託契約が書面によって締結された場合、受寄者は、寄託物を受け取るまでは契約を解除することができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2022",num:"24",subject:"min",q:`売買契約における解約手付に関する次のアからオまでの各記述のうち、判例の趣旨に照らし誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．売買契約において交付された手付は、解約手付と推定される。
イ．買主は、売主が契約の履行に着手していても、自ら履行に着手するまでは、解約手付による解除をすることができる。
ウ．買主は、自ら契約の履行に着手していても、売主が履行に着手するまでは、解約手付による解除をすることができる。
エ．売主は、買主に対し、手付金の倍額を償還する旨を口頭で告げて、解約手付による解除をすることができる。
オ．買主が解約手付による解除をした場合、売主に手付金の額を超える損害が生じたとしても、買主は損害賠償義務を負わない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2022",num:"25",subject:"min",q:`民法上の消費貸借に関する次のアからオまでの各記述のうち、誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．書面によらない消費貸借は、当事者の一方が種類、品質及び数量の同じ物をもって返還することを約して相手方から金銭その他の物を受け取ることによって、その効力を生ずる。
イ．書面でする消費貸借は、借主が貸主から目的物を受け取るまで、各当事者が解除をすることができる。
ウ．貸主は、特約がなければ、借主に対して利息を請求することができない。
エ．当事者が返還の時期を定めたときは、借主は、その時期の前に返還をすることができない。
オ．貸主から引き渡された物が種類又は品質に関して契約の内容に適合しないものであるときは、借主は、その物の価額を返還することができる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2022",num:"26",subject:"min",q:`ＡがＢからその所有する甲建物を賃借してＢに敷金を交付した場合に関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．Ｂは、Ａが賃料を支払わない場合、未払賃料額が敷金額の範囲内であっても、Ａが甲建物に備え付けた動産について先取特権を行使することができる。
イ．Ａは、賃貸借契約の存続中、Ｂに対して、賃料債務の弁済に敷金を充てるよう請求することができる。
ウ．Ａは、賃貸借契約が終了したときは、敷金が返還されるまで甲建物を留置することができる。
エ．Ａが賃借権をＣに適法に譲渡したときは、ＡはＢに対して敷金の返還を請求することができる。
オ．ＢがＣに甲建物を譲渡し、Ｃが賃貸人たる地位を承継した場合において、ＡがＢに対して賃貸借契約上の未履行の債務を負担していたときは、敷金はその債務の弁済に充当され、残額があれば、その返還に係る債務がＣに承継される。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2022",num:"27",subject:"min",q:`委任に関する次のアからオまでの各記述のうち、誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．当事者が委任事務の履行による成果に対して報酬の支払を約した場合において、その成果が引渡しを要するときは、委任者は、その成果の引渡しと同時に報酬を支払わなければならない。
イ．受任者は、やむを得ない事由がなくても、委任者の許諾を得ることなく復受任者を選任することができる。
ウ．委任者は、受任者に不利な時期には、委任を解除することができない。
エ．受任者は、委任事務を処理するのに必要と認められる費用を支出したときは、委任者に対し、その費用及び支出の日以後におけるその利息の償還を請求することができる。
オ．委任の解除は、将来に向かってのみその効力を生ずる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2022",num:"28",subject:"min",q:`事務管理に関する次のアからオまでの各記述のうち、判例の趣旨に照らし誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．管理者は、事務の管理をするにつき自己に過失なく損害を受けたときでも、本人に対し、その賠償を請求することができない。
イ．事務管理の開始後に、その管理が本人の意思に反することが明らかになった場合、管理者は、本人に対し、既に支出した費用の償還を請求することができない。
ウ．管理者が本人の名でした法律行為の効果は、事務管理の効果として直接本人に帰属する。
エ．管理者は、その事務が終了した後、本人に対し、遅滞なくその経過及び結果を報告しなければならない。
オ．管理者は、本人の財産に対する急迫の危害を免れさせるために事務管理をした場合には、悪意又は重大な過失があるのでなければ、これによって生じた損害を賠償する責任を負わない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2022",num:"29",subject:"min",q:`不法行為に関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．不法行為による損害賠償債務は、加害者が被害者から請求を受けた時から遅滞に陥る。
イ．不法行為による損害賠償の請求権は、不法行為の時から２０年間行使しないときは、時効によって消滅する。
ウ．名誉感情を侵害された場合、被害者は、これを理由として、名誉感情を回復するのに適当な処分を請求することができない。
エ．胎児Ａの父が不法行為により死亡した場合、Ａの母は、Ａが生まれる前であっても、Ａの代理人として、加害者に対し、Ａの固有の慰謝料を請求することができる。
オ．Ａの不法行為に対し、Ｂが第三者Ｃの権利を防衛するためＡに加害行為をしたときは、それがやむを得ないものであったとしても、ＢはＡに対し損害賠償責任を負う。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2022",num:"30",subject:"min",q:`婚姻の解消又は取消しに関する次のアからオまでの各記述のうち、正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．婚姻によって氏を改めた者が、婚姻中に称していた氏を協議上の離婚後も称するためにする届出は、離婚の届出と同時にする必要がある。
イ．夫婦の一方が死亡したときは、婚姻によって氏を改めた生存配偶者は、姻族関係を終了させなくても、婚姻前の氏に復することができる。
ウ．父母が協議上の離婚に当たって子の親権者を父と定めたときは、母は、家庭裁判所に対し、親権者の変更を請求することができない。
エ．未成年の子の父母は、子の監護に要する費用の分担に関する協議が調わない場合であっても、協議上の離婚をすることができる。
オ．婚姻の取消しは、婚姻時に遡ってその効力を生ずる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2022",num:"31",subject:"min",q:`いずれも婚姻していないＡ女とＢ男との間に子Ｃが生まれた場合に関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．ＡとＣとの法律上の母子関係は、認知によって生ずる。
イ．Ｂは、遺言によってＣを認知することができる。
ウ．Ｃは、Ｂが死亡したときは、以後ＢＣ間の父子関係についての認知の訴えを提起することができない。
エ．ＡＣ間及びＢＣ間の親子関係が共に生じた場合には、ＣはＢの氏を称する。
オ．ＡＣ間及びＢＣ間の親子関係が共に生じ、かつ、ＡとＢが婚姻した場合には、Ｃに対する親権はＡとＢが共同して行う。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"4"},{year:"2022",num:"32",subject:"min",q:`養子に関する次のアからオまでの各記述のうち、正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．Ａが、夫Ｂとその前妻との間の子Ｃの直系卑属である未成年者Ｄを養子とするためには、Ｂとともに養子縁組をすることを要しない。
イ．養子が１５歳未満であるときは、協議上の離縁は、養子の離縁後にその法定代理人となるべき者と養親との協議によってする。
ウ．養子縁組後に生まれた養子の子と養親との親族関係は、離縁により終了する。
エ．養子は、養親と離縁しない限り、他の者の養子となることはできない。
オ．嫡出でない子が養子となる特別養子縁組を成立させるためには、その子を認知した父の同意を要しない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2022",num:"33",subject:"min",q:`相続による権利義務の承継に関する次のアからオまでの各記述のうち、判例の趣旨に照らし誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．個人根保証契約における保証人の相続人は、主債務者と債権者が相続開始後に締結した契約に基づく主債務について履行する責任を負わない。
イ．土地の使用貸借の借主が死亡した場合、借主の相続人は、使用借権を相続して、その土地を使用し続けることができない。
ウ．土地を権原なく占有していた被相続人が死亡して相続が開始した場合、被相続人のその土地に対する占有は、相続人によって承継されない。
エ．無権代理人が本人を他の相続人と共に共同相続した場合において、無権代理行為を追認する権利は、相続人全員に不可分的に帰属する。
オ．遺産である賃貸不動産から相続開始後に生じた賃料債権は、遺産分割によって当該不動産を取得した者が、相続開始時に遡って取得する。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2022",num:"34",subject:"min",q:`Ａの相続財産の取得に関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．甲土地の共有持分がＡの相続財産に属する場合において、Ａに相続人がおらず、かつＡの債権者も受遺者もいないときは、その持分は他の共有者に帰属し、特別縁故者への分与の対象とならない。
イ．相続開始後にＡの子と認知されたＢが遺産分割を請求した場合において、他の共同相続人が既に遺産分割をしていたときは、その遺産分割は、効力を失う。
ウ．ＡからＡの相続財産に属する乙土地の遺贈を受けたＣは、Ａが死亡した後いつでも遺贈の放棄をすることができる。
エ．Ａの相続財産に属する丙土地を無償で管理していた特別寄与者であるＤは、その寄与に応じ、丙土地の持分を取得することができる。
オ．Ａの親族でないＥは、無償でＡの療養看護をしたことによりＡの財産の維持に特別の寄与をしても、特別寄与者には当たらない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2022",num:"35",subject:"min",q:`相続の承認及び放棄に関する次のアからオまでの各記述のうち、判例の趣旨に照らし誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．相続人が自己のために相続が開始した事実を知りながら相続財産に属する土地を売却したときは、その相続人は、単純承認をしたものとみなされる。
イ．相続の放棄をしたＡの子であるＢが被相続人の直系卑属であるときは、Ｂは、Ａを代襲して相続人となる。
ウ．相続人が数人あるときは、各相続人は、単独で限定承認をすることができる。
エ．限定承認者は、その固有財産におけるのと同一の注意をもって、相続財産の管理を継続しなければならない。
オ．相続人が未成年者であるときは、相続の承認又は放棄をすべき期間は、その法定代理人が未成年者のために相続の開始があったことを知った時から起算する。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2022",num:"36",subject:"min",q:`承諾に関する次のアからオまでの各記述のうち、判例の趣旨に照らし誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．債務者が債権譲渡を承諾した場合は、それが譲渡人又は譲受人のいずれに対してされたときであっても、譲受人はその債権譲渡を債務者に対抗することができる。
イ．隔地者に対して承諾期間を定めないでした申込みは、申込者が撤回する権利を留保した場合を除き、申込者が承諾の通知を受けるのに相当な期間を経過するまでは、撤回することができない。
ウ．債務者と引受人となる者との契約でされた併存的債務引受は、債権者が引受人となる者に対して承諾をした時に、その効力を生ずる。
エ．無報酬の受寄者は、寄託者の承諾がなくても、寄託物をその用法に従って使用することができる。
オ．成年の子については、その承諾がなくても、これを認知することができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2022",num:"37",subject:"min",q:`裁判所の許可等を要する事項に関する次のアからオまでの各記述のうち、正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．占有者が所有者に占有物を返還する際に所有者に有益費の償還を請求する場合には、その占有者が善意であったときでも、裁判所は、所有者の請求により、その償還について相当の期限を許与することができる。
イ．動産質権者は、その債権の弁済を受けない場合において、鑑定人の評価を得ないことについて正当な事由があるときは、鑑定人の評価に代えて裁判所の許可を得ることにより、質物をもって直ちに弁済に充てることができる。
ウ．債権者が弁済の目的物の受領を拒んだ場合において、その物の保存について過分の費用を要するときは、弁済者は、裁判所の許可を得て、その物を競売に付し、その代金を供託することができる。
エ．建物所有を目的としてＡから土地を賃借したＢが、その土地上に建築した建物を土地賃借権とともにＣに譲渡しようとする場合において、Ｃがその賃借権を取得してもＡに不利となるおそれがないにもかかわらず、Ａが賃借権の譲渡を承諾しないときは、裁判所は、Ｂの申立てにより、Ａの承諾に代わる許可を与えることができる。
オ．配偶者の直系卑属である未成年者を養子とするには、家庭裁判所の許可を得なければならない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2022",num:"1",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合、誤っているものを２個選びなさい。",c1:"１．甲は、麻薬であるヘロインの粉末を覚醒剤と誤信して営利目的で輸入した。ヘロインの営利目的輸入罪と覚醒剤の営利目的輸入罪の法定刑は同一であった。この場合、甲には、覚醒剤の営利目的輸入罪が成立する。",c2:"２．暴力団組員甲は、配下の組員乙に対し、抗争状態にある暴力団組員Ａとの間でもめごとが起きた場合にはＡを殺害してよいが、実際にＡを殺害するかは乙の判断に任せる旨伝えて拳銃を渡し、乙も了承したところ、乙は、Ａともめたことから、殺意をもってＡを射殺した。甲が乙とＡの間でもめごとが起きることがあり得ると認識していた場合、甲には、殺人罪の故意が認められる。",c3:"３．甲は、殺意をもってＡに向けて拳銃を発射したところ、その弾丸がＡを貫通し、その背後にいて甲がその存在を認識していなかったＢにも命中し、その結果、Ａが死亡し、Ｂが重傷を負った。この場合、甲には、Ａに対する殺人罪が成立するが、Ｂに対する殺人未遂罪は成立しない。",c4:"４．甲は、乙にＡへの暴行を教唆し、乙もその旨決意し、Ａに暴行を加えて死亡させたが、甲は同教唆の時点でＡが死亡する可能性を予見していなかった。この場合、甲には、傷害致死罪の教唆犯が成立する。",c5:"５．甲は、殺意をもってＡの首を絞めたところ、Ａが動かなくなったので、Ａが死亡したものと誤信し、犯行の発覚を防ぐ目的で、Ａを砂浜に運んで放置し、その結果、Ａが砂を吸引して窒息死した。この場合、甲には、殺人罪が成立する。",c6:"",c7:"",c8:"",a:"13"},{year:"2022",num:"2",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合、正しいものはどれか。",c1:"１．甲は、乙が熟睡していることに乗じてわいせつな行為をしたが、これに気付いて覚醒した乙から抵抗され、わいせつな行為を行う意思を喪失した後、逃走するため、乙に暴行を加えて負傷させた。この場合、甲に準強制わいせつ致傷罪は成立せず、準強制わいせつ罪と傷害罪が成立するにとどまる。",c2:"２．甲は、自己の性欲を刺激興奮させ又は満足させるという性的意図を有さず、専ら乙を侮辱して報復するため、乙を脅迫して裸にして写真撮影した。この場合、甲に強制わいせつ罪が成立することはない。",c3:"３．甲は、自らが管理する動画配信サイトにわいせつな動画のデータファイルをアップロードし、同サイトを利用した不特定の顧客によるダウンロード操作に応じて、同ファイルを当該顧客のパーソナルコンピュータに自動的に送信させ、同コンピュータに記録、保存させた。この場合、甲にわいせつ電磁的記録等送信頒布罪が成立する。",c4:"４．甲は、わいせつな内容を含む書籍を販売したが、その目的は作品の文芸的・思想的価値を社会に主張することであった。この場合、甲にわいせつ文書頒布罪が成立することはない。",c5:"５．甲は、日本国外で販売する目的で、日本国内において、わいせつな内容を含む書籍を所持した。この場合、甲にわいせつ文書有償頒布目的所持罪が成立する。",c6:"",c7:"",c8:"",a:"3"},{year:"2022",num:"3",subject:"kei",q:`詐欺罪の実行の着手に関する次の【事例】及び【判旨】についての後記アからオまでの各【記述】を検討し、正しい場合には１を、誤っている場合には２を選びなさい。
【事 例】
甲及び乙は、既に１００万円の詐欺被害に遭っていたＶに対し、警察官に成り済まして電話し、犯人検挙及び被害回復のために必要と誤信させ、Ｖに預金を払い戻させた上、警察官に成り済ました甲がＶ宅に赴き、捜査に必要であるから現金を預かるとのうそを言ってＶから現金をだまし取ることを計画した（以下「本件計画」という。）。その上で、乙は、本件計画に従ってＶに電話し、捜査に必要であるから預金を全部払い戻してほしいとうそを言い、これを信じたＶが預金を払い戻して帰宅すると、その約１時間後に再び乙がＶに電話し、間もなく警察官がＶ宅に行くとうそを言った。しかし、甲は、Ｖ宅に到着する直前、警察官に逮捕された。
【判 旨】
１回目と２回目の電話における各うそ（以下「本件うそ」という。）を述べた行為は、本件計画の一環として行われたものであり、本件うその内容は、本件計画上、Ｖが現金を交付するか否かを判断する前提となるよう予定された事項に係る重要なものであった。そして、このように段階を踏んでうそを重ねながら現金を交付させるための犯行計画の下において述べられた本件うそには、Ｖに現金の交付を求める行為に直接つながるうそが含まれており、既に１００万円の詐欺被害に遭っていたＶに対し、本件うそを真実であると誤信させることは、Ｖにおいて、間もなくＶ宅を訪問しようとしていた甲の求めに応じて即座に現金を交付してしまう危険性を著しく高めるものといえ、本件うそを一連のものとしてＶに対して述べた段階において、Ｖに現金の交付を求める文言を述べていないとしても、詐欺罪の実行の着手があったと認められる。
【記 述】
ア．【判旨】は、犯罪の実行行為自体ではなく、実行行為に密接で、被害を生じさせる客観的な危険性が認められる行為を開始することによっても未遂罪が成立し得るとする立場と矛盾しない。
イ．【判旨】は、本件うそとその後に予定されたうそを述べる行為全体を詐欺罪の構成要件である「人を欺く行為」と解した上で、一連の実行行為の開始があることから未遂犯の成立を認める立場と矛盾する。
ウ．【判旨】は、実行の着手を判断する際に行為者の犯行計画を考慮する立場を前提としている。
エ．【判旨】は、１回目の電話では実行の着手を認めず、２回目の電話で実行の着手が認められると明示している。
オ．【判旨】は、詐欺罪の実行の着手が認められるためには必ずしも財物交付要求行為が必要ないとの立場を前提としている。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"12121"},{year:"2022",num:"4",subject:"kei",q:"信用及び業務に対する罪に関する次の１から５までの各記述を判例の立場に従って検討した場合、正しいものを２個選びなさい。",c1:"１．人の業務に使用する電子計算機に対して不正な指令を入力した場合、その指令の内容が人の業務を妨害するおそれのあるものであれば、当該電子計算機の動作に影響を及ぼしていなくても、電子計算機損壊等業務妨害罪の既遂犯が成立し得る。",c2:"２．威力業務妨害罪における「威力」は、客観的にみて被害者の自由意思を制圧するに足りる勢力であればよく、現実に被害者が自由意思を制圧されたことを要しない。",c3:"３．偽計業務妨害罪における「偽計」とは、人を欺罔し、あるいは人の錯誤又は不知を利用することをいい、電話料金の支払を免れるための機器を電話回線に取り付けて課金装置の作動を不能にする行為は、これに該当しない。",c4:"４．信用毀損罪は、経済的な側面における人の社会的な評価を保護するものであり、同罪における「信用」には、人の支払能力又は支払意思に対する社会的な信頼だけでなく、販売される商品の品質に対する社会的な信頼も含まれる。",c5:"５．威力業務妨害罪における「威力」は、被害者の面前で行使される必要があるので、被害者が執務のために日頃使っている机の引き出しに猫の死骸をひそかに入れた場合、後に被害者がこれを発見するに至ったとしても、威力業務妨害罪は成立しない。",c6:"",c7:"",c8:"",a:"24"},{year:"2022",num:"5",subject:"kei",q:`次のアからオまでの各記述を判例の立場に従って検討した場合、誤っているものの個数を後記１から５までの中から選びなさい。
ア．甲は、乙（１０歳）の性器を指で触るわいせつな行為を行った。この場合、乙が同意していたのであれば、甲に強制わいせつ罪は成立しない。
イ．甲は、強制わいせつの目的を隠し、家まで送ると偽って乙を自動車に乗せて走り出し、途中でその目的に気付いた乙が降りたいと言ったにもかかわらず、同車を走行させ続けた。この場合、乙は、乗車時点では乗車に同意しているから、乙が降りたいと言った時点以降についてのみ、甲に監禁罪が成立する。
ウ．甲は、乙と保険金詐欺を共謀し、過失による自動車事故を装い、甲運転の自動車を乙運転の自動車に故意に追突させて、乙に傷害を負わせた。この場合、乙が傷害を負わされることに同意している以上、甲に傷害罪は成立しない。
エ．甲は、刑務所に服役したいと考えている乙と口裏を合わせ、乙の同意を得て、司法警察員に対し、乙に現金を窃取された旨の虚偽の被害届を提出した。この場合、乙の同意がある以上、甲に虚偽告訴罪は成立しない。
オ．甲は、現金自動預払機を利用する客のキャッシュカードの暗証番号を盗撮する機器を設置する目的で、行員が常駐しない銀行出張所内に立ち入った。この場合、甲による立入りの外観が一般の利用客のそれと異なることがなければ、甲に建造物侵入罪は成立しない。`,c1:"１．１個",c2:"２．２個",c3:"３．３個",c4:"４．４個",c5:"５．５個",c6:"",c7:"",c8:"",a:"5"},{year:"2022",num:"6",subject:"kei",q:`賄賂罪の保護法益について、
学生Ａ及びＢが次の【会話】のとおり議論している。【会話】中の①から⑤までの（ ）内に後記アからクまでの【語句群】から適切な語句を入れた場合、正しいものの組合せは、後記１から５までのうちどれか。
【会 話】
学生Ａ．私は、賄賂罪の保護法益について、公務員の職務の公正とこれに対する社会一般の信頼であると考えます。そして、賄賂罪の基本類型は、（①）と考えます。（①）において、現実に公務が賄賂によって左右されていない場合も処罰の対象とされるのは、公務が賄賂によって左右されたのではないかという不信感を国民に抱かせるからです。
学生Ｂ．判例と（②）立場に立つのですね。しかし、「社会一般の信頼」という概念は不明確ではありませんか。私は、端的に、公務員の職務の公正こそが賄賂罪の保護法益であると考えます。私の立場からは、（③）が賄賂罪の基本類型と考えられます。
学生Ａ．その場合、（①）は、どのように位置付けられるのですか。
学生Ｂ．（④）を根拠に処罰する危険犯と位置付けることになります。
学生Ａ．Ｂさんの立場からは、（⑤）の職務行為に関して賄賂を収受等した場合にも賄賂罪が成立することを説明するのは困難ではありませんか。
学生Ｂ．職務遂行時における賄賂への期待に基づく職務への影響の可能性を理由に可罰性を肯定することは可能であると考えます。
【語句群】
ア．単純収賄罪
イ．加重収賄罪
ウ．同じ
エ．異なる
オ．不正な職務行為が行われる危険
カ．職務の公正に対する信頼が害される危険
キ．過去
ク．将来`,c1:"１．①ア ②ウ ③イ ④オ ⑤キ",c2:"２．①ア ②エ ③イ ④カ ⑤キ",c3:"３．①ア ②ウ ③イ ④オ ⑤ク",c4:"４．①イ ②ウ ③ア ④カ ⑤ク",c5:"５．①イ ②エ ③ア ④カ ⑤ク",c6:"",c7:"",c8:"",a:"1"},{year:"2022",num:"7",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合、正しいものはどれか。",c1:"１．甲は、友人乙がＶ所有の自動車（以下「Ｖ車」という。）の車体をバットで叩いて損壊しているのを発見し、自分も加勢しようと考え、乙に気付かれないように物陰から石を投げ付け、Ｖ車の窓ガラスを割った。乙は、その直後に周囲を見回し、物陰にいた甲の姿を見て、甲がＶ車に石を投げ付けたと認識したが、それ以降は、甲及び乙のいずれも、Ｖ車の損壊行為を行わなかった。この場合、甲には、器物損壊罪の共同正犯が成立する。",c2:"２．甲と乙は、友人丙がＶから暴行を受けているのを発見し、丙を助けるために意思を通じ、正当防衛としてＶに暴行を加えた。これにより、攻撃の意思を失い攻撃をやめたＶが現場から逃走したため、甲は、暴行をやめたが、乙は、Ｖを追いかけて更にＶに暴行を加えて傷害を負わせた。その間、甲は、乙の行動に驚き、乙が暴行を加えるのを傍観していた。この場合、甲には、傷害罪の共同正犯が成立する。",c3:"３．甲と乙は、Ｖに対する強盗を共謀し、乙が先にＶ方に入り、甲のための侵入口を確保したが、現場付近に人が集まってきたことに気付いた甲は、乙に電話をかけ、「もう犯行をやめた方がよい。先に帰る。」と一方的に告げて、その場から立ち去った。その後、乙は、Ｖから現金を強取し、その際、Ｖに傷害を負わせた。この場合、甲には、住居侵入罪及び強盗致傷罪の共同正犯が成立する。",c4:"４．甲と乙は、Ｖに対する強盗を共謀し、甲がＶに包丁を示して、「金を出せ。」と要求したが、甲は、Ｖに憐憫の情を抱き、Ｖに「金は要らない。」と言うとともに、乙にも「お前も強盗なんかやめておけ。」と言ってその場を立ち去った。その後もＶは甲の脅迫によって反抗抑圧され続けており、乙は、その状態を利用してＶから現金を強取した。この場合、甲には、中止犯が成立する。",c5:"５．甲と乙は、Ｖの殺害を共謀し、甲がＶをナイフで切り付けて傷害を負わせたが、甲は、Ｖに憐憫の情を抱き、犯行をやめようと決意した。甲は、更にＶを切り付けようとする乙を羽交い締めにし、Ｖがその隙に逃走したため、乙は、犯行を継続できず、Ｖは、死亡するに至らなかった。この場合、甲と乙には、いずれも中止犯が成立する。",c6:"",c7:"",c8:"",a:"3"},{year:"2022",num:"8",subject:"kei",q:`責任能力に関する次のアからオまでの各記述を判例の立場に従って検討した場合、正しいものの組合せは、後記１から５までのうちどれか。
ア．心神喪失とは、精神の障害により事物の理非善悪を弁識する能力又はこの弁識に従って行動する能力のない状態を指すと解されているところ、ここにいう精神の障害とは、飲酒による酩酊等、一時的な精神状態の異常も含まれる。
イ．１３歳の少年の行為は、罰しないことが原則であるが、故意の犯罪行為により被害者を死亡させた場合、事案の重大性等の事情を考慮し、相当と認めるときは刑罰を科すことができる。
ウ．自ら日常的・継続的に覚醒剤を使用した影響により、継続的な精神障害が生じ、心神耗弱状態で傷害の犯行に及んだ場合には、自己の先行行為によって心神耗弱状態を招いたものであるから、刑法第３９条第２項を適用する余地はない。
エ．刑法第３９条第２項は刑の任意的減軽を定めているから、犯行時に心神耗弱の状態にあったとしても、その刑を減軽しないことができる。
オ．精神障害を有する同一人について、Ａという罪に当たる行為については責任能力があるが、Ｂという罪に当たる別の行為については責任能力がないという事態は観念し得る。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2022",num:"9",subject:"kei",q:`毀棄及び隠匿の罪の「毀棄」、「損壊」及び「傷害」の意義に関する次の各【見解】に従って後記１から５までの各【記述】を検討した場合、正しいものを２個選びなさい。
【見 解】
Ａ．対象物の効用を害する一切の行為をいう。
Ｂ．対象物の全部又は一部を物質的に破壊、毀損してその効用を害する行為をいう。
【記 述】`,c1:"１．いずれの見解によっても、器物損壊罪の客体は、公用文書等毀棄罪、私用文書等毀棄罪、建造物等損壊罪の客体以外の動産に限られ、不動産は含まれないと解することになる。",c2:"２．Ａの見解によれば、他人が観賞用に鳥籠内で飼っている小鳥を鳥籠から屋外に逃がした場合、器物損壊罪が成立することになる。",c3:"３．Ａの見解によれば、公衆トイレの外壁に美観を著しく損ねる落書きをし、そのままでの使用継続を困難にさせ、原状回復に相当の費用を生じさせた場合、建造物損壊罪が成立することになる。",c4:"４．Ｂの見解によれば、裁判所から隠匿目的で競売記録を持ち出し自宅で保管した場合、公用文書毀棄罪が成立することになる。",c5:"５．Ｂの見解によれば、信書隠匿罪は、器物損壊罪の構成要件にも当たる行為を特に軽く処罰する罪と解することになる。",c6:"",c7:"",c8:"",a:"23"},{year:"2022",num:"10",subject:"kei",q:"略取誘拐罪に関する次の１から５までの各記述を判例の立場に従って検討した場合、正しいものはどれか。",c1:"１．身の代金目的略取誘拐罪にいう「安否を憂慮する者」は、被拐取者の安否を親身になって憂慮するのが社会通念上当然とみられる特別な関係が被拐取者との間にある者に限らず、同情から被拐取者の安否を気遣う第三者も含む。",c2:"２．未成年者誘拐罪の手段である欺罔は、被誘拐者に対して用いられる必要があり、監護者に対して用いられる場合を含まない。",c3:"３．刑法第２２８条の２（解放による刑の減軽）が適用されるためには、被拐取者を、「安全な場所」に解放する必要があるところ、「安全」とは、被拐取者が救出されるまでの間におよそ危険が生じないことを意味するから、漠然とした抽象的な危険や不安感ないし危惧感を伴うのであれば、「安全な場所」とはいえない。",c4:"４．自ら移動する意思も能力も有していない生後間もない嬰児であっても、未成年者略取誘拐罪の客体に当たる。",c5:"５．未成年者略取罪の保護法益には親権者の監護権も含まれるので、親権者が、他の共同親権者の監護下にある未成年の子を略取する行為については、未成年者略取罪が成立することはない。",c6:"",c7:"",c8:"",a:"4"},{year:"2022",num:"11",subject:"kei",q:"共犯に関する次の１から５までの各記述を判例の立場に従って検討した場合、正しいものはどれか。",c1:"１．刑法第６０条における「実行」とは、基本的構成要件の実現に向けた行為に限定され、予備行為はこれに含まれないから、予備罪の共同正犯は成立しない。",c2:"２．実行共同正犯の成立に必要な各関与者間の意思連絡は、明示的なものだけではなく黙示的なものも含むが、共謀共同正犯においては、明示的な意思連絡が必要であり、黙示的な意思連絡では足りない。",c3:"３．ある犯罪が成立するについて当然予想され、その成立のために欠くことができない関与行為について、これを正犯として処罰する規定がない場合であっても、関与を受けた側の可罰的な行為の教唆又は幇助として処罰されることは当然である。",c4:"４．既に特定の犯罪の実行を確定的に決意している者に対してその実行を勧め、これによってその者の決意が強固になった場合、幇助犯は成立し得るが、教唆犯は成立しない。",c5:"５．犯行に必要な用具を第三者を介して正犯に提供した場合、正犯の犯行を間接的に幇助したことになるが、間接教唆と異なり、間接幇助を処罰する明文の規定が存在しないため、幇助犯は成立しない。",c6:"",c7:"",c8:"",a:"4"},{year:"2022",num:"12",subject:"kei",q:`学生Ａ、Ｂ及びＣは、次の【会話】のとおり議論している。【会話】中の①から⑤までの（ ）内から適切な語句を選んだ場合、正しいものの組合せは、後記１から５までのうちどれか。
【会 話】
学生Ａ．状態犯とは、法益侵害の発生と同時に犯罪が終了するが、その後も法益侵害状態が残存する犯罪です。傷害罪がその典型です。これに対し、継続犯とは、法益侵害が継続している間は犯罪の継続が認められる犯罪であり、監禁罪や、①（ａ．保護責任者不保護罪・ｂ．窃盗罪）がこれに当たると考えられます。
学生Ｂ．住居侵入罪を状態犯と解すべきか、継続犯と解すべきかは争いがあります。②（ｃ．状態犯・ｄ．継続犯）と解する立場は、反対説によると、侵入後の現場滞留についても住居侵入罪が成立し、不退去罪が規定されている意味が失われてしまうと同説を批判します。
学生Ｃ．私は、継続犯は、③（ｅ．構成要件該当行為・ｆ．構成要件的結果）が継続する犯罪であると考えます。私の見解からは、被害者の監禁中に監禁罪の法定刑を引き上げる新法が施行された場合、それ以降の監禁については、④（ｇ．新法・ｈ．旧法）が適用されることになります。
学生Ａ．私は、Ｃさんの継続犯に関する理解には賛成できません。例えば、行為者が被害者を監禁した後に眠り込んだ場合であっても犯罪は継続しますが、行為者が眠り込んだ後には意思に基づく身体の動静がない以上、Ｃさんの見解のように理解するのは困難だと考えるからです。
学生Ｂ．ところで、状態犯についても、犯罪の終了時期と既遂時期の関係について考える必要があります。私は、傷害罪については、両者は、⑤（ｉ．常に一致する・ｊ．一致するとは限らない）と考えます。被害者が一旦負傷した後、その傷害が悪化し続けることがあるからです。`,c1:"１．①ａ ②ｃ ③ｆ",c2:"２．①ａ ②ｄ ⑤ｉ",c3:"３．①ｂ ③ｅ ④ｈ",c4:"４．②ｃ ④ｇ ⑤ｉ",c5:"５．③ｅ ④ｇ ⑤ｊ",c6:"",c7:"",c8:"",a:"5"},{year:"2022",num:"13",subject:"kei",q:`次のアからオまでの各記述を判例の立場に従って検討した場合、誤っているものの組合せは、後記１から５までのうちどれか。
ア．甲は、Ａから金銭を借り入れるに際し、借入金を返済する意思も能力もないのに、知人Ｂに対し、「借入金は必ず自分で返済する。Ｂには迷惑をかけないので、保証人になってほしい。」とうそを言い、その旨Ｂを誤信させ、Ａに差し入れる予定の甲を借主とする金銭消費貸借契約書を閲読させ、その保証人欄に署名押印させた。この場合、甲には、有印私文書偽造罪が成立する。
イ．甲は、窃取したＡ名義のクレジットカードの番号等を冒用し、インターネット上の決済手段として使用できる電子マネーを不正入手しようと考え、Ａの氏名、同番号等の情報をインターネットを介してクレジットカード決済代行業者のコンピュータに送信し、Ａが上記電子マネー１０万円分を購入した旨の電磁的記録を作出し、これによってインターネット上で同電子マネーを利用することを可能とした。この場合、甲には、支払用カード電磁的記録不正作出罪が成立する。
ウ．県立高校を中途退学した甲は、母親Ａに見せて安心させる目的で、偽造された同高校校長Ｂ名義の甲の卒業証書を真正なものとしてＡに提示した。この場合、甲には、偽造有印公文書行使罪が成立する。
エ．指名手配され逃走中の甲は、本名を隠してＡ会社に正社員として就職しようと考え、同社に提出する目的で、履歴書用紙の氏名欄にＢという架空の氏名を記載し、その横にＢの姓を刻した印鑑を押印した上、真実と異なる生年月日、住所及び経歴を記載して履歴書を作成したが、その顔写真欄には甲自身の顔写真を貼付していた。この場合、甲には、有印私文書偽造罪が成立する。
オ．甲は、Ａから金銭を借り入れるに際し、数日前にＢが死亡したことを知りながら、Ａに差し入れる予定の金銭消費貸借契約書の借受人欄に、Ｂの氏名を冒用して署名押印し、一般人をしてＢが生存中に作成したと誤信させるおそれが十分に認められる文書を作成した。この場合、甲には、有印私文書偽造罪が成立する。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2022",num:"14",subject:"kei",q:`過失に関する次の各【見解】についての後記アからオまでの各【記述】のうち、誤っているものの組合せは、後記１から５までのうちどれか。
【見 解】
Ａ説：過失の本質は、結果の発生を予見することができたのに、精神を緊張させずにこれを予見しなかったことにある。
Ｂ説：過失の本質は、社会生活上必要な注意を怠り、結果を回避するための適切な措置を採らなかったことにあり、その前提として、構成要件的結果及び因果経過の基本部分に対する具体的な予見可能性が必要になる。
Ｃ説：過失の本質は、Ｂ説と同様であるが、結果に対する具体的な予見可能性を必要とせず、一般人に対して何らかの結果回避措置を命じるのが合理的であるといえる程度の危惧感があれば足りる。
【記 述】
ア．Ａ説からは、いわゆる信頼の原則を過失犯に適用する余地はない。
イ．Ａ説は、故意犯と過失犯は客観面が共通であり、両者は主観面において区別されるとの見解と親和的である。
ウ．Ｂ説に対しては、結果回避のための適切な措置と行政取締法規が定める義務とを区別するのは困難であり、行政取締法規の義務違反が刑法上の過失になってしまうとの批判が可能である。
エ．Ｂ説に対しては、自動車運転はそれ自体危険な行為であり、いかなる運転行為からも死傷結果が生じ得る以上、容易に予見可能性が認められ、過失犯の成立範囲が広くなりすぎるとの批判が可能である。
オ．Ｃ説に対しては、構成要件該当事実に関する具体的な予見可能性がないにもかかわらず、漠然とした危惧感だけで過失責任を追及することは責任主義に反するとの批判が可能である。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2022",num:"15",subject:"kei",q:`放火罪に関する次の各【見解】についての後記アからオまでの各【記述】を検討し、正しい場合には１を、誤っている場合には２を選びなさい。
【見 解】
Ａ．放火罪にいう「焼損」とは、火が媒介物を離れて目的物に燃え移り、目的物が独立して燃焼を継続し得るに至った状態を意味する。
Ｂ．放火罪にいう「焼損」とは、目的物の重要部分が燃焼し、本来の効用を喪失した状態を意味する。
【記 述】
ア．Ａの見解に対しては、Ｂの見解から、放火罪が公共危険罪であることを軽視しているとの批判が可能である。
イ．Ａの見解に対しては、Ｂの見解よりも中止犯が成立する範囲が狭くなるため、刑事政策的に望ましくないとの批判が可能である。
ウ．Ｂの見解に対しては、刑法第１０９条第２項、第１１０条第２項が自己所有物に対する放火を処罰していることから、放火罪の既遂時期をその財産犯的側面から決するのは妥当でないとの批判が可能である。
エ．Ｂの見解に対しては、客体が建造物の場合、全焼又は半焼に至らない限り放火罪が既遂に達しない可能性があり、その場合には既遂時期が遅きに失するとの批判が可能である。
オ．Ａ及びＢのいずれの見解に対しても、不燃性の建造物に放火した場合、内装の融解により有毒ガスが発生し、人の生命・身体に危険を生じさせたとしても、建造物自体が燃焼しない限り放火罪の既遂犯が成立しないため、処罰範囲が狭すぎるとの批判が可能である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"21111"},{year:"2022",num:"16",subject:"kei",q:`違法性に関する次のアからオまでの各記述を判例の立場に従って検討した場合、正しいものの個数を後記１から５までの中から選びなさい。
ア．私人が現行犯人を逮捕しようとする場合、犯人から抵抗を受けたときは、その際の状況からみて社会通念上逮捕のために必要かつ相当と認められる限度内の実力を行使したことで犯人に傷害を負わせたとしても、法令による行為に当たるから、傷害罪が成立することはない。
イ．勤労者の争議行為に際し、人の看守する建造物に看守者の意思に反して侵入した場合、法令による行為に当たるから、建造物侵入罪が成立することはない。
ウ．虚偽告訴の罪で起訴された者が、人違いで告訴したと気付きながら、公判廷において、公然と虚偽の事実を摘示して被告訴人の名誉を毀損した場合、被告人としての防御権の行使に当たるから、名誉毀損罪が成立することはない。
エ．商人が、自己と通謀して客を装い他の客の購買心をそそる者（いわゆる「さくら」）を使って、商品の効用が極めて大きく世評も売れ行きも良いように見せかけて客を欺罔し、これを信じた客に効用の乏しい商品を売り付けた場合、正当な業務による行為に当たるから、詐欺罪が成立することはない。
オ．宗教上の加持祈祷の行として他人の生命、身体に危害を及ぼす有形力を行使し、その結果、その他人を死亡させた場合、正当な業務による行為に当たるから、傷害致死罪が成立することはない。`,c1:"１．１個",c2:"２．２個",c3:"３．３個",c4:"４．４個",c5:"５．５個",c6:"",c7:"",c8:"",a:"1"},{year:"2022",num:"17",subject:"kei",q:"罪数に関する次の１から５までの各記述を判例の立場に従って検討した場合、誤っているものを２個選びなさい。",c1:"１．甲は、Ａから財物を詐取した上で当該財物の返還を免れるためにＡを殺害することを計画し、計画どおりにＡから財物を詐取し、その後、殺意をもってＡの胸部をナイフで刺して殺害し、これにより、財物の返還を免れるという財産上不法の利益を得た。甲には、詐欺罪と強盗殺人罪が成立し、これらは包括一罪となる。",c2:"２．暴力団幹部甲は、配下の組員数名とともに、Ａの身体に共同して危害を加える目的で、日本刀数本を準備してＡ方前に集合し、その直後、外に出てきたＡの顔面を手拳で数回殴打する暴行を加えた。甲には、凶器準備集合罪と暴行罪が成立し、これらは併合罪となる。",c3:"３．甲は、業務として猟銃を用いた狩猟に従事していた際、Ａを熊と誤認して発砲し、Ａに傷害を負わせ、その直後にＡを誤射したことに気付いたが、Ａを殺害して逃走しようと決意し、殺意をもってＡの胸部に向けて発砲し、Ａを即死させた。甲には、業務上過失傷害罪と殺人罪が成立し、これらは包括一罪となる。",c4:"４．甲は、Ａ銀行が発行したＢ名義のキャッシュカード１枚をＢから窃取した上、これを利用してＡ銀行の現金自動預払機から預金を不正に払い戻した。甲には、２個の窃盗罪が成立し、これらは併合罪となる。",c5:"５．甲は、対立する不良グループのメンバーＡ及びＢを襲撃することを計画し、路上で発見したＡをバットで１回殴打した直後、そばにいたＢを同バットで１回殴打し、両名に傷害を負わせた。甲には、２個の傷害罪が成立し、これらは包括一罪となる。",c6:"",c7:"",c8:"",a:"35"},{year:"2022",num:"18",subject:"kei",q:`死者の占有に関して、教授及び学生が次の【会話】のとおり議論している。【会話】中の①から⑥までの（ ）内に後記【語句群】から適切な語句を入れた場合、正しいものの組合せは、後記１から５までのうちのどれか。なお、①から⑥までの（ ）内にはそれぞれ異なる語句が入る。
【会 話】
教授．死者が生前身に付けていた財物を領得した場合の罪責については、見解の対立があるね。まず、甲がＡを殺害した直後、その殺害行為とは無関係の乙が、Ａが身に付けていた財布を領得した場合の乙の罪責は、判例の立場に従うとどうなるかな。
学生．（①）ことになります。
教授．そうだね。では次に、丙が当初から財物を領得する意思でＢを殺害し、Ｂの死亡直後に財布を領得した場合の罪責は、判例の立場に従うとどうなるかな。
学生．その場合には（②）ことになります。
教授．そうだね。この場合には、殺害行為と領得行為を一体として評価することができるね。それでは、丁がＣを殺害し、その直後に財物を領得する意図を生じてＣが身に付けていた財布を領得した場合、丁はいかなる罪責を負うだろうか。まず、判例の立場に従うとどうなるだろう。
学生．その場合には（③）と考えられますので、（④）ことになります。
教授．そうだね。しかし、判例の考え方に対しては、（⑤）と批判する立場があるけれども、そのような立場からすると、丁の罪責はどのように考えられるだろうか。
学生．（⑥）ことになります。
【語句群】
ａ．窃盗罪が成立する
ｂ．殺人罪及び遺失物等横領罪が成立する
ｃ．遺失物等横領罪が成立する
ｄ．強盗殺人罪が成立する
ｅ．強盗殺人罪及び遺失物等横領罪が成立する
ｆ．殺人罪及び窃盗罪が成立する
ｇ．死者も占有の主体として保護されるべき
ｈ．生前の占有を遡って侵害することはできない
ｉ．被害者が生前に有していた占有が侵害される
ｊ．法益の保護が十分でない`,c1:"１．①ａ ②ｅ ③ｇ ④ｆ ⑤ｊ ⑥ｄ",c2:"２．①ａ ②ｆ ③ｉ ④ｄ ⑤ｊ ⑥ｂ",c3:"３．①ｃ ②ｄ ③ｉ ④ｂ ⑤ｊ ⑥ｅ",c4:"４．①ｃ ②ｄ ③ｉ ④ｆ ⑤ｈ ⑥ｂ",c5:"５．①ｃ ②ｅ ③ｇ ④ｂ ⑤ｈ ⑥ｄ",c6:"",c7:"",c8:"",a:"4"},{year:"2022",num:"19",subject:"kei",q:`名誉に対する罪に関する次の【見解】についての後記１から５までの各【記述】のうち、誤っているものはどれか。
【見 解】
名誉毀損罪（刑法第２３０条）の保護法益は人の外部的名誉（社会的評価、社会的名誉）であり、侮辱罪（刑法第２３１条）の保護法益は人の主観的名誉（名誉感情）である。また、侮辱罪は、事実を摘示した場合にも成立し得る。
【記 述】`,c1:"１．この【見解】からは、意識を喪失した終末期の患者に対する侮辱罪が成立しないことになる。",c2:"２．この【見解】に対しては、侮辱罪の規定が公然性を要求していることを十分に説明できないとの批判が可能である。",c3:"３．この【見解】からは、刑法第２３１条の「事実を摘示しなくても」という文言は、事実の摘示の有無にかかわらず侮辱罪が成立し得るという趣旨で解釈される。",c4:"４．この【見解】からは、法人に対する侮辱罪の成立を認めることが可能である。",c5:"５．この【見解】からは、名誉毀損罪が成立する場合にも、同時に侮辱罪が成立する可能性がある。",c6:"",c7:"",c8:"",a:"4"},{year:"2022",num:"20",subject:"kei",q:`次の【事例】に関する後記アからオまでの各【記述】を判例の立場に従って検討し、正しい場合には１を、誤っている場合には２を選びなさい。
【事 例】
甲（女性、１６歳）は、高校の同級生Ａ（女性、１６歳）が非行グループと交際し、飲酒喫煙を繰り返していることを知り、それらのＡの具体的行動を、特に口止めもせずに同級生２名に告げたところ、同人らを介して、Ａの同行動がクラスの全生徒３０名の知るところとなった。甲のせいで自己の行状に関するうわさが広まったことを知ったＡは、甲を呼び出して暴行を加えた。そのことを知った甲の兄乙は、Ａに報復しようと考え、ある日の深夜、Ａ宅付近に自己の車を停め、Ａを待ち伏せていたところ、Ａの姉Ｂ（２０歳）がＡ宅に入ろうとするのを見て、ＢをＡと誤信し、Ｂを無理やり同車のトランクに押し込んで数キロメートル走行した上、郊外の廃工場に連行した。乙は、上記廃工場において、Ｂの顔面を数発殴打するとともに、はさみを使ってＢの頭髪を１０センチメートル程度切断した。乙は、Ｂが泣き出したのを見て満足し、その場から立ち去ることにしたが、その際、Ｂのバッグの中から財布を抜き取り、これを持ち去った。乙は、上記財布内にＢ名義の運転免許証やキャッシュカードが入っていたため、ＢをＡと間違えたことに気付いたが、同カードを不正に使用し、Ｂの預金で乙の友人Ｃへの借金を返済しようと考えた。乙は、コンビニエンスストアの現金自動預払機に同カードを挿入し、暗証番号としてＢの誕生日を入力したところ、取引ができる状態になったので、その場で、同現金自動預払機を操作し、Ｂ名義口座から直接Ｃ名義口座へ５０万円を送金した。その後、甲の交際相手丙は、乙が警察に逮捕されるのではないかと不安に思った甲からの依頼に応じ、乙の上記一連の犯行について、乙の身代わり犯人として警察に出頭した。
【記 述】
ア．甲が、Ａの上記行動を同級生２名に告げた行為は、特定かつ少数の者にＡの名誉を毀損する事実を摘示したにすぎないことから、名誉毀損罪が成立することはない。
イ．乙が、Ｂを無理やり自己の車のトランクに押し込み、上記廃工場に連行した行為は、Ｂを１６歳の未成年者と誤信していたのであるから、生命身体加害目的略取罪ではなく未成年者略取罪が成立する。
ウ．乙が、はさみを使ってＢの頭髪を切断した行為は、人の生理的機能を損なうものではないから、傷害罪は成立せず暴行罪が成立するにとどまる。
エ．乙が、Ｂ名義口座から直接Ｃ名義口座へ５０万円を送金した行為は、実質的には預金の占有を移転させる行為であるから、窃盗罪が成立する。
オ．丙が乙の身代わり犯人として警察に出頭した行為は、犯人の特定を誤らせることを通じて間接的に犯人の身柄確保を妨げるものにすぎないから、犯人隠避罪は成立せず、証拠偽造罪が成立する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"22122"},{year:"2021",num:"1",subject:"ken",q:`公務員や未決拘禁者など，公権力との関係で特別な法律関係にある者の権利制約に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．多数の被拘禁者を外部から隔離して収容する施設では，施設内でこれらの者を集団として管理するに当たり，内部の規律及び秩序を維持し，その正常な状態を保持する必要があるから，この目的のため必要がある場合には，未決拘禁者についても，身体の自由やその他の行為の自由に一定の制限が加えられることはやむを得ない。
イ．刑事収容施設内において喫煙を許すことにより，罪証隠滅のおそれがあり，また火災発生により被拘禁者の逃走や人道上の重大事態の発生も予想される一方，たばこは生活必需品とまではいえず嗜好品にすぎないことからすれば，喫煙の自由が憲法の保障する人権に含まれるとしても，制限の必要性の程度と制限される基本的人権の内容，これに加えられる具体的制限の態様とを総合的に考慮すると，施設内における喫煙禁止は必要かつ合理的なものといえる。
ウ．職権行使の独立が保障され，単独で又は合議体の一員として司法権を行使する主体として，国に対する訴訟を含めて中立・公正な立場から裁判を行うことが強く期待される裁判官に対する政治運動禁止の要請は，議会制民主主義の政治過程を経て決定された政策を，政治的偏向を排し組織の一員として忠実に遂行すべき立場にある一般職の国家公務員に対する政治的行為の禁止の要請ほどには強くないというべきである。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"2"},{year:"2021",num:"2",subject:"ken",q:`憲法の明文で規定されていない権利・自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには〇，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．髪型の自由は，自己決定権として憲法第１３条によって保障されるものである。それゆえ，非行を防止する目的で高校生らしい髪型を維持するよう求める校則の定めが，社会通念上不合理なものとはいえないとしても，これに反した生徒を退学させることは許されない。
イ．学籍番号，氏名，住所及び電話番号といった個人情報は，大学が個人識別等を行うための単純な情報である。それゆえ，このような個人情報については，プライバシーに係る情報として法的保護の対象とはならない。
ウ．指紋は，それ自体では個人の私生活や人格，思想，信条，良心等個人の内心に関する情報となるものではないが，何人も個人の私生活上の自由の一つとして，みだりに指紋の押なつを強制されない自由を有する。それゆえ，在留外国人の指紋押なつ制度は，国家機関が正当な理由なく指紋の押なつを強制するものであり，憲法第１３条の趣旨に反し，許されない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"8"},{year:"2021",num:"3",subject:"ken",q:`法の下の平等に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．尊属に対する尊重報恩は社会生活上の基本的道義であるが，このような自然的情愛ないし普遍的倫理の維持は，刑法上の保護に値するものではなく，尊属殺を通常の殺人よりも重く処罰する規定は，合理的な根拠に基づくものといえないから，憲法第１４条第１項に違反する。
イ．国籍法の規定が，同じく日本国民である父から認知された子でありながら，父母の婚姻により嫡出子たる身分を取得した者と異なり，父母が法律上の婚姻をしていない非嫡出子は同法所定の他の要件を満たしても日本国籍を取得することができないという区別を生じさせていることは，同規定の立法目的との合理的関連性を欠くものであり，憲法第１４条第１項に違反する。
ウ．女性に対し６か月の再婚禁止期間を定める規定の立法目的は，父性の推定の重複を回避し，父子関係をめぐる紛争の発生を未然に防ぐことにあると解され，６か月の再婚禁止期間を設けることはこの立法目的との関連において合理性を有するから，憲法第１４条第１項に違反しない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"6"},{year:"2021",num:"4",subject:"ken",q:`思想・良心の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法第１９条の保障する良心の自由は，単に事物に関する是非弁別の内心的自由のみならず，かかる是非弁別の判断に関する事項を外部的に表現するか否かの自由をも包含するものであるから，謝罪広告の掲載を命ずる判決は，良心の自由への直接的な制約となるが，その内容が名誉回復のために必要な限度にとどまるものであれば，同条に違反しない。
イ．公立中学校の校長が，同校の生徒について，大学生の政治集会に参加しているなどと記載した内申書を作成提出することは，同記載が生徒の思想，信条そのものを記載したものでなく，同記載に係る外部的行為によっては生徒の思想，信条を了知し得るものではないし，また，生徒の思想，信条自体を高等学校の入学者選抜の資料に供したものと解することはできないから，憲法第１９条に違反しない。
ウ．公立小学校の校長が，音楽専科の教諭に対し，入学式における国歌斉唱の際に「君が代」のピアノ伴奏を行うよう命ずることは，個人の歴史観ないし世界観に由来する行動と異なる外部的行為を求めるものとして，思想・良心の自由への間接的な制約となるが，地方公務員としての職務の公共性に加え，ピアノ伴奏が音楽専科の教諭にとって通常想定され期待される行為であることからすれば，許容される制約であり，憲法第１９条に違反しない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"212"},{year:"2021",num:"5",subject:"ken",q:`表現の自由に関する次のアからウまでの各記述について，ｂの見解がａの見解の批判となっている場合には１を，そうでない場合には２を選びなさい。
ア．ａ．表現の自由に対する規制について，表現の内容に着目した内容規制には，厳格な審査基準が妥当し，表現の時・場所・方法等の規制に関わる内容中立的規制の場合には，より緩やかな審査基準が妥当する。
ｂ．審査基準の枠組みの設定の仕方が図式的になり過ぎており，人によって極めて重要な意義を持つはずの表現の時・場所・方法等の規制の危険性・問題性を軽視している。
イ．ａ．商品知識の啓蒙や，意見の伝達等何らかの表現行為に関わる広告は，表現の自由の保障の対象となるが，純然たる営利広告は，経済的自由の保障の対象となる。
ｂ．消費者の側から見ると，純然たる営利広告も，一つの重要な生活情報としての意味を持ち得るから，それを表現の自由の保障の対象外としてしまうと，消費者の知る権利を害することになる。
ウ．ａ．表現行為に先立ち行政権がその内容を事前に審査し不適当と認める場合にその表現行為を禁止する検閲は，憲法第２１条第２項により絶対的に禁止され，同条第１項から導き出される広義の事前抑制の原則的禁止とは区別される。
ｂ．独立性を保障された司法権と行政権との区別は重要であり，また，検閲の禁止に例外を認める解釈は，憲法第２１条第２項が，「検閲は，これをしてはならない」と明記していることに反する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"112"},{year:"2021",num:"6",subject:"ken",q:`集会の自由に関する次のアからウまでの各記述について，ｂの見解がａの見解の批判となっている場合には１を，そうでない場合には２を選びなさい。
ア．ａ．地方公共団体は，公の施設を利用して特定の集会が開かれることにより，その集会の主催者と敵対するグループ等とが衝突して，人の生命・身体・財産が侵害され，公共の安全が損なわれる危険がある場合には，公の施設の利用を不許可とすることができる。
ｂ．主催者が集会を平穏に行おうとしているのに，その集会の目的や主催者の思想，信条に反対する他のグループ等がこれを実力で阻止し，妨害しようとして紛争を起こすおそれがあることを理由に公の施設の利用を拒むことは，憲法第２１条の趣旨に反する。
イ．ａ．所有権や管理権に基づく集会の規制が許されるかどうかの判断に当たっては，集会の場所が一般公衆が自由に出入りできるものであるときには，集会の自由の保障に可能な限り配慮する必要がある。
ｂ．主張や意見を社会に伝達する自由を保障する場合には，その表現の場を確保することが重要な意味を持ち，特に，表現の自由の行使が行動を伴うときには，表現のための物理的な場所が提供されなければ，意見を受け手に伝えることができない。
ウ．ａ．集会や集団行動については，公共の秩序を維持するため，又は公共の福祉が著しく害されることを防止するために一定の法的規制が必要であるから，集会等の時間，場所，方法を問わず，事前の許可を要すると条例で定めることもやむを得ない。
ｂ．集会や集団行動が他人の権利と衝突することがあるとしても，その衝突の程度は集会等の具体的態様によって大きく異なるから，一律に事前の許可にかからしめることは集会の自由に対する過大な制約である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"121"},{year:"2021",num:"7",subject:"ken",q:`憲法第２３条に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．大学の学問の自由と自治は，大学が学術の中心として深く真理を探究し，専門の学芸を教授研究することを本質とすることに基づくから，教授や研究者の研究，その結果の発表，研究結果の教授の自由とこれらを保障するための自治とを意味すると解されており，大学の学生が学問の自由を享有するのは，教授や研究者の有する特別な学問の自由と自治の効果としてである。
イ．子どもの教育は教師と子どもとの間の人格的接触を通じ，その個性に応じて行われなければならないが，全国的に一定の水準の教育を確保する必要があるので，教師に教授の具体的内容及び方法について裁量を認めることはできない。
ウ．大学における学生の集会が大学の学問の自由と自治を享有するか否かは，その集会が真に学問的な研究と発表のためのものか，実社会の政治的社会的活動に当たるかによって判断されるものであり，その集会が公開か否かといった点は考慮されない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"4"},{year:"2021",num:"8",subject:"ken",q:`財産権の制限と損失補償に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．法律の規定により財産上の権利の行使が制限される場合であっても，災害を未然に防止するという社会生活上のやむを得ない必要からその制限が当然受忍すべきものであるときは，憲法第２９条第３項による損失補償を要しない。
イ．財産上の権利の行使を制限する法律が補償規定を欠いている場合であっても，相当の資本を投入してきた者が，一般的に当然に受忍すべきものとされる範囲を超えて制限を受けるときは，憲法第２９条第３項を根拠として補償請求をする余地がある。
ウ．財産上の権利の行使を制限する法律に補償規定が置かれている場合であっても，その法律は，補償の内容が憲法第２９条第３項の要求する水準にあるか否かについて，憲法適合性の審査の対象となる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"111"},{year:"2021",num:"9",subject:"ken",q:`生存権に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法第２５条にいう「健康で文化的な最低限度の生活」は，抽象的・相対的な概念であって，その具体的な内容は，その時々における文化の発達の程度，経済的・社会的条件，一般的な国民生活の状況等との相関関係において判断決定されるべきものであるとともに，同規定を現実の立法として具体化するに当たっては，国の財政事情を無視することができず，高度の専門技術的な考察とそれに基づいた政策的判断を必要とする。
イ．憲法第２５条の生存権を具体化する趣旨の法律として，生活保護法等の法律が制定された場合，その法律は憲法第２５条と一体をなし，かかる法律の定める給付水準を正当な理由なくして引き下げることは憲法上許されない。
ウ．憲法第２５条第２項で定める防貧施策については広い立法裁量が認められる一方，同条第１項で定める救貧施策については，国は国民の最低限度の生活を保障する責務を負い，前者よりも厳格な違憲審査基準が用いられる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"4"},{year:"2021",num:"10",subject:"ken",q:`刑事補償請求権に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法第４０条は，抑留又は拘禁された後に刑事事件において無罪の裁判を受けた者について，その手続がたとえ憲法第３１条以下の諸権利の保障に反しなかったとしても，多大な犠牲を被っている以上，正義・衡平の観点から金銭による事後的救済を与えようとする趣旨の規定である。
イ．判例は，不起訴になった事実に関する抑留又は拘禁であっても，そのうちに実質上は，無罪となった事実についての抑留又は拘禁と認められるものがあるときは，その部分の抑留又は拘禁も，憲法第４０条にいう「抑留又は拘禁」に包含されると解している。
ウ．判例は，家庭裁判所における少年審判手続において非行事実がないことを理由とする不処分決定について，刑事事件において無罪の裁判を受けたことと実質的に同視できるとして，同決定を受けた者を刑事補償の対象としないことは憲法第４０条に違反すると解している。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"112"},{year:"2021",num:"11",subject:"ken",q:`主権に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．国民主権の原理に基づき，国及び普通地方公共団体による統治の在り方については日本国の統治者としての国民が最終的な責任を負うべきものであることからすると，外国人が普通地方公共団体の公務員に就任することは，その者が公権力の行使に当たる行為を行うかどうかにかかわらず，本来我が国の法体系の想定するところではない。
イ．裁判員制度は国民主権の理念に沿って司法の国民的基盤の強化を図るものであり，裁判員の職務等が司法権の行使に対する国民の参加という点で参政権と同様の権限を国民に付与するものであることからすると，裁判員の職務等を憲法第１８条後段が禁ずる「苦役」に当たるということは，必ずしも適切ではない。
ウ．天皇は日本国の象徴であり日本国民統合の象徴であるが，この地位は主権の存する日本国民の総意に基づくものであるとともに，民事裁判権が国民に由来する司法権の一作用であることからすれば，天皇に裁判所の民事裁判権が及ばないものと解することはできない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"6"},{year:"2021",num:"12",subject:"ken",q:`政党に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法は，政党について規定するところがないが，政党の存在を当然に予定しており，政党は，議会制民主主義を支える不可欠の要素であるから，国会が，参議院議員の選挙制度の仕組みを決めるに当たり，このような政党の国政上の重要な役割を踏まえて，政党を媒体として国民の政治意思を国政に反映させる名簿式比例代表制を採用することは，国会の裁量の範囲内である。
イ．政党に対しては，高度の自主性と自律性を与えて自主的に組織運営をなし得る自由を保障しなければならず，また，党員が政党の存立及び組織の秩序維持のために，自己の権利や自由に一定の制約を受けることがあるのも当然であるから，政党が党員に対してした除名処分の当否は，一般市民法秩序と直接の関係を有しない内部的な問題にとどまる限り，裁判所の審判権は及ばない。
ウ．衆議院の小選挙区選挙について，候補者届出政党にのみ政見放送を認め，候補者を含むそれ以外の者には政見放送を認めないものとする公職選挙法の規定は，選挙運動をする上で，候補者届出政党に所属する候補者とこれに所属しない候補者との間に単なる程度の違いを超える差異を設ける結果となり，国会に与えられた合理的裁量の限界を超えるものであるから，憲法第１４条第１項に違反する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"112"},{year:"2021",num:"13",subject:"ken",q:`憲法第９条の解釈に関する次のアからウまでの各記述について，ｂの見解がａの見解の批判となっている場合には１を，そうでない場合には２を選びなさい。
ア．ａ．憲法第９条第１項は，侵略戦争を放棄しているが，自衛戦争は放棄しておらず，同条第２項にいう「前項の目的」とは，第１項の「国際紛争を解決する手段として」の戦争の放棄のみを指すから，自衛のための戦力の保持は禁じられていない。
ｂ．自衛のための戦力と侵略のための戦力とを区別することは困難であり，戦力の保持を禁じた第２項の規定が無意味なものとなる。
イ．ａ．憲法第９条第１項は，侵略戦争を放棄しているが，自衛戦争は放棄しておらず，同条第２項にいう「前項の目的」とは，第１項全体の精神，すなわち「正義と秩序を基調とする国際平和を誠実に希求し」を指し，第２項によって警察力を上回る実力の保持が禁じられている。
ｂ．日本国憲法には，第６６条第２項の文民条項を除き，戦争開始の決定手続や軍隊の編制に関する規定が存在しない。
ウ．ａ．憲法第９条は，我が国が主権国として有する固有の自衛権まで否定するものではなく，自衛のために必要な最小限度の実力，すなわち自衛力の保持を禁じていない。
ｂ．個人の正当防衛の権利とは異なり，国家が固有の権利として自衛権を有するということはできない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"121"},{year:"2021",num:"14",subject:"ken",q:`国会議員の免責特権に関する次のアからウまでの各記述について，最高裁判所の判決（最高裁判所平成９年９月９日第三小法廷判決，民集５１巻８号３８５０頁）の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．国会議員は，議院で行った演説，討論又は表決に加えて，国会における意見の表明とみられる行為や，職務行為に付随する行為に関しては，国民全体に対する関係で政治的責任を負うにとどまり，個別の国民の権利に対応した関係での法的義務を負うものではないから，国会議員の上記の行為そのものが国家賠償法上の違法の評価を受けることはない。
イ．国会議員が，立法，条約締結の承認，財政の監督等の審議や国政に関する調査の過程で行う質疑等は，多数決原理により国家意思を形成する行為そのものではなく，国家意思の形成に向けられた行為であり，質疑等の内容が個別の国民の権利等に直接関わることも起こり得るので，質疑等において個人の権利を侵害した国会議員は，当該個人に対して損害賠償責任を負う。
ウ．国会議員が，質疑等において，職務と無関係に違法又は不当な目的をもって事実を摘示し，あるいは，あえて虚偽の事実を摘示して，個別の国民の名誉を毀損したと認められる特別の事情がある場合には，国家賠償法第１条第１項に基づいて，国に賠償を求めることができることもある。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"7"},{year:"2021",num:"15",subject:"ken",q:`内閣及び内閣総理大臣に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．内閣の総辞職について定める憲法第７０条の「内閣総理大臣が欠けたとき」には内閣総理大臣の辞職の場合を含まないとする見解によっても，その首長たる地位に鑑みれば，内閣総理大臣が辞職したときには，内閣は総辞職しなければならない。
イ．行政権が内閣に属する旨を定める憲法第６５条によれば，あらゆる行政を内閣が自ら行う必要まではないとしても，全ての行政について内閣が直接に指揮監督権を持つことが要求される。
ウ．憲法第６６条第２項は，内閣総理大臣及び国務大臣が「文民」であることを要求しているが，現職の自衛官は「文民」に該当しないので，内閣総理大臣及び国務大臣に任命することはできない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"3"},{year:"2021",num:"16",subject:"ken",q:`裁判の公開に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．判例によれば，憲法第８２条にいう「公開」は，国民一般に裁判の傍聴が許されるということを意味するから，何人も，裁判所に対して裁判を傍聴することを権利として要求することができる。
イ．判例によれば，刑事事件の証人尋問の際に，傍聴席と証人との間に衝立を置くなどして傍聴人から証人を見ることができないようにすることは，審理を公開することの意義を没却するものであるから，憲法第８２条に違反する。
ウ．裁判所が裁判官の全員一致で公の秩序又は善良の風俗を害するおそれがあると決することにより，傍聴人を退廷させて審理をすることができる場合であっても，判決の言渡しは，傍聴人を入廷させてしなければならない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"221"},{year:"2021",num:"17",subject:"ken",q:`憲法訴訟に関する次のアからウまでの各記述について，ｂの見解がａの見解の根拠となっている場合には１を，そうでない場合には２を選びなさい。
ア．ａ．公職選挙法上の選挙無効訴訟において，選挙人である原告は，同法の規定により一定の者の選挙権が制限されていることに関し，他者の選挙権の制限に係る同規定の違憲を主張して争うことはできない。
ｂ．公職選挙法の規定により選挙権の制限を受ける者は，自己の選挙権侵害を理由に救済を求める訴訟において同規定の違憲を主張することができる。
イ．ａ．規制範囲が過度に広範である疑いのある法律の規定であっても，これを合理的に解釈することにより，その規制対象を合憲的に規制し得る行為に限定でき，違憲の疑いを除去することができる場合には，裁判所は，同規定を違憲と判断すべきではない。
ｂ．法律の違憲判断を回避することにより立法府への干渉を最小限に抑えるとともに，基本的人権の保障を果たすことができる。
ウ．ａ．最高裁判所が法令を違憲無効とする判決をした場合，その判決の効力が及ぶのは当該事件限りであり，違憲と判断された法律は当該事件の訴訟当事者との関係においてのみその適用を排除される。
ｂ．法的安定性を確保するためには，最高裁判所は，自らの法令違憲の判断の効力が及ぶ範囲を制限する旨説示できる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"112"},{year:"2021",num:"18",subject:"ken",q:`憲法第８９条後段の「公の支配」の意義に関し，「国又は地方公共団体が，法令等により一定の監督をしていることで足りる」とする見解があるが，次のアからウまでの各記述について，かかる見解の根拠となる記述には○を，根拠とはならない記述には×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．「公の支配」を厳格に捉え過ぎると，公的援助の対象となっている私的な団体等の自主性を過度に損なうことになり，望ましくない。
イ．憲法第８９条後段の趣旨は，財政民主主義の見地から，慈善，教育，博愛の事業に対する公金の支出が公の財産の濫費，濫用にならないように，国や地方公共団体が監督することにある。
ウ．憲法第８９条後段が，慈善，教育，博愛を特に掲げ，それを同条前段の宗教団体に対する公金支出等の禁止と一体のものとして定めていることを重視すべきである。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"2"},{year:"2021",num:"19",subject:"ken",q:`地方自治に関する次のアからウまでの各記述について，正しいものには〇，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．地方自治の本質について，地方公共団体固有の前国家的な基本権を保障したものではなく，地方自治という歴史的・伝統的な制度を保障したものと解する立場に立つと，憲法第９２条に規定された「地方自治の本旨」には特別の法的意味がないこととなる。
イ．憲法は，都道府県と市町村という二層構造の地方公共団体を憲法上保障しておらず，地方公共団体の在り方は立法政策に委ねられるとする立場に立つと，現行の都道府県より更に大きな単位の地方公共団体を設け，三層構造とすることも許容されることとなる。
ウ．憲法第９５条は，「一の地方公共団体のみに適用される特別法」について規定するが，「一の地方公共団体」は，「一つの」ではなく，「特定の」地方公共団体を意味するものであるから，複数の地方公共団体に適用される法律についても，同条の規定する住民投票が必要になる場合がある。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"5"},{year:"2021",num:"20",subject:"ken",q:`条約に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．内閣が条約を締結するには国会の承認を経ることが憲法上必要であるとされる趣旨は，国会による政府の統制を確保することにあるから，国家間の合意の締結には，名称・内容のいかんを問わず，国会の承認が必要となる。
イ．憲法が条約に優位すると考える見解によっても，国際協調主義や，裁判所による違憲審査について定めた憲法第８１条に条約が列挙されていないことなどを理由として，条約が裁判所の違憲審査の対象に含まれないと解することは可能である。
ウ．条約が裁判所の違憲審査の対象となると考える見解によれば，条約が裁判所によって違憲と判断された場合，その国内法上の効力は否定されるが，国際法上の効力まで当然に否定されるわけではない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"211"},{year:"2021",num:"1",subject:"min",q:`失踪宣告に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．不在者の推定相続人は，家庭裁判所に失踪宣告の請求をすることができる。
イ．死亡の原因となるべき危難に遭遇した者の生死が，その危難が去った後１年間明らかでないことを理由として失踪宣告がされた場合には，失踪宣告を受けた者は，その危難が去った時に死亡したものとみなされる。
ウ．失踪宣告を受けて死亡したものとみなされたＡから甲土地を相続したＢが，Ｃに甲土地を売却した後に，Ａの失踪宣告が取り消された。この場合において，ＣがＡの生存につき善意であったときは，Ｂがこれにつき悪意であったとしても，その取消しは，ＢＣ間の売買契約による甲土地の所有権の移転に影響を及ぼさない。
エ．失踪宣告が取り消された場合，失踪宣告によって財産を得た者は，失踪者の生存につき善意であっても，財産を得ることによって受けた利益の全額を失踪者に返還しなければならない。
オ．失踪宣告を受けて死亡したものとみなされたＡが，失踪宣告が取り消される前に，Ｂから甲土地を買い受けた場合，この売買契約は，失踪宣告がされたことにつきＢが善意であるときに限り効力を有する。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2021",num:"2",subject:"min",q:`意思表示に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．表意者がその真意ではないことを知って意思表示をした場合において，相手方が，表意者の真意を具体的に知らなくても，その意思表示が表意者の真意ではないことを知り，又は知ることができたときは，その意思表示は無効である。
イ．表意者の意思表示がその真意ではないことを理由として無効とされた場合において，その無効は，善意であるが過失がある第三者に対抗することができる。
ウ．相手方と通じてした虚偽の意思表示の無効は，第三者がその表示の目的につき法律上の利害関係を有するに至った時に善意であれば，その後悪意になったとしても，その第三者に対抗することができない。
エ．相手方に対する意思表示について第三者が詐欺を行った場合，相手方がその事実を知らなかったとしても，それを知ることができたときは，表意者は，その意思表示を取り消すことができる。
オ．強迫による意思表示の取消しは，善意でかつ過失がない第三者に対抗することができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2021",num:"3",subject:"min",q:`ＡのＢに対する契約の解除の意思表示に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａが未成年者であるＢに対して契約を解除する旨の通知書を発送したところ，Ｂがその通知書を受け取り，Ｂの法定代理人がその解除の意思表示を知るに至った。この場合，Ａは，その意思表示をもってＢに対抗することができる。
イ．Ａは，Ｂに対して契約を解除する旨の通知書を何度も発送したが，Ｂは，正当な理由なく，その受取を拒んだ。この場合，Ａがした解除の意思表示は，到達したものとみなされる。
ウ．Ａは，Ｂに対して契約を解除する旨の通知書を発送した後に死亡し，その後，その通知書がＢのもとに到達した。この場合，Ａがした解除の意思表示は，その効力を妨げられない。
エ．Ａは，Ｂに対して契約を解除する旨の通知を電子メールで発信したが，通信システムの不具合によりその通知はＢに到達しなかった。この場合，Ａがした解除の意思表示は，その効力を生ずる。
オ．Ａは，Ｂに対して契約を解除する旨の通知書を発送しようとしたが，Ｂの所在を知らず，公示の方法によって解除の意思表示をした。この場合，Ｂの所在を知らないことについてＡに過失があったとしても，Ａがした解除の意思表示は，その効力を生ずる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2021",num:"4",subject:"min",q:`期間に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。なお，各記述において言及されている特定の日は，特に記載がない限り，いずれも日曜日，国民の祝日に関する法律に規定する休日その他の休日に当たらないものとする。
ア．ある年の５月１６日午後３時に「１週間以内に債務を履行する。」と合意された場合，その期間は，同日午前零時から起算する。
イ．ある年の６月３日午前１０時に「５時間以内に債務を履行する。」と合意された場合，その期間は，同日午前１０時から起算する。
ウ．合意によって定められた期間の末日が日曜日に当たる場合において，その日曜日に取引をする慣習があるときは，その期間は，その日に満了する。
エ．ある年の７月１２日午前１１時に「１か月以内に債務を履行する。」と合意された場合，その期間は，同年８月１３日午後１２時に満了する。
オ．うるう年ではない年の１月３０日午後５時に「１か月以内に債務を履行する。」と合意された場合，その期間は同年２月２８日午後１２時に満了する。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2021",num:"5",subject:"min",q:`債権の消滅時効に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．催告によって時効の完成が猶予されている間に債権者が再度の催告をしたときは，再度の催告の時から６か月を経過するまでの間は，時効は完成しない。
イ．時効の利益の放棄は債務者の意思表示のみにより効力を生じ，債権者の同意を要しない。
ウ．裁判上の請求がされ，その後，その請求に係る訴訟が訴えの取下げによって終了したときは，その終了の時から６か月を経過するまでの間は，時効は完成しない。
エ．消滅時効が完成した後に債務者が債務の承認をした場合において，その承認が時効完成の事実を知らずにされたものであるときは，債務者は，承認を撤回して時効を援用することができる。
オ．不動産の仮差押えがされたときは，その被保全債権の消滅時効は，その仮差押えの登記がされた時から新たにその進行を始める。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2021",num:"6",subject:"min",q:`物権的請求権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．甲土地の所有者Ａは，Ｂが所有する乙土地上に甲土地のための通行地役権の設定を受けた。その後，Ｂが乙土地上に大型トラック丙を駐車してＡによる乙土地の通行を妨げた場合，Ａは，Ｂに対して通行地役権に基づき丙の撤去を請求することができる。
イ．Ａ，Ｂ及びＣが甲土地を持分３分の１ずつで共有している場合，Ｃは単独で，甲土地を何の権原もなく占有するＤに対して甲土地の明渡しを請求することができない。
ウ．Ａは，Ｂが所有する甲土地上に何の権原もなく乙建物を建築し，その所有権保存登記がされた。その後，Ａが乙建物をＣに売却して所有権を移転した場合，Ｃヘの所有権移転登記がされていなくても，Ｂは，Ｃに対して所有権に基づき乙建物の収去を請求することができる。
エ．Ａが所有する甲土地にＢのために抵当権が設定され，その登記がされた後，Ｃは，甲土地上にＡが所有する樹木を何の権原もなく伐採し始めた。この場合，Ｂは，被担保債権の弁済期前であっても，Ｃに対して伐採の禁止を請求することができる。
オ．甲土地に設定された第一順位の抵当権の被担保債務が消滅したにもかかわらずその登記が抹消されていない場合，甲土地の第二順位の抵当権者は，第一順位の抵当権者に対してその登記の抹消を請求することができない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"4"},{year:"2021",num:"7",subject:"min",q:`物権変動に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａは，その所有する甲土地上に，Ｂのために第一順位の抵当権を，Ｃのために第二順位の抵当権をそれぞれ設定し，その登記がされた。その後，Ｃが甲土地をＡから相続によって取得した場合であっても，第二順位の抵当権は混同により消滅しない。
イ．Ａがその所有する甲土地をＢに売却した後，Ｂが甲土地をＣに転売し，それぞれその旨の登記がされた。その後，Ａは詐欺を理由としてＢとの売買契約を取り消した。Ｃは，Ａの売買の意思表示が詐欺によることを過失なく知らなかった場合，甲土地の所有権の取得を妨げられない。
ウ．ＡとＢが，甲建物及びその敷地である乙土地をそれぞれ共有していたところ，乙土地のＡの共有持分に抵当権が設定された。その後，その抵当権が実行され，Ｃがそれを買い受けた場合，甲建物のために乙土地上に地上権が成立する。
エ．Ａがその所有する甲土地をＢに売却した後，Ｂが甲土地をＣに転売し，それぞれその旨の登記がされた。その後，ＡとＢとの間の売買契約は，Ａが成年被後見人であることを理由として取り消された。Ｃが，Ａが成年被後見人であったことを過失なく知らなかった場合，Ａは，Ｃに対し，甲土地の所有権が自己にあることを主張することができない。
オ．地役権の要役地の所有権を単独で相続した者は，地役権設定行為に別段の定めがないときは，その土地の地役権も相続する。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2021",num:"8",subject:"min",q:`占有権に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａが自己所有の甲土地につき宅地造成工事を開始したために，隣接する乙土地に危険が生じている場合，乙土地に居住するＢは，工事開始時から１年が経過したときであっても，工事が完成する前であれば，Ａに対して占有保全の訴えを提起することができる。
イ．Ａが占有していた動産甲をＢが奪取した場合において，Ｂが甲の所有者であることが明らかになったときは，Ａによる占有回収の訴えは認められない。
ウ．ＡがＢ所有の動産甲を無断でＣに賃貸した後，Ｃの責めに帰すべき事由によって甲が損傷した場合，Ｂから甲の返還を求められたＣは，甲の所有者がＡであると過失なく信じていたとしても，その損害の全部の賠償をしなければならない。
エ．Ａが，自己が占有する動産甲をＢに売却し，甲を以後Ｂのために占有する旨の意思を表示したときは，Ｂは，甲の占有権を取得する。
オ．動産甲をその所有者Ａから賃借して占有していたＢが，Ａとの間で，Ａから甲を買い受けてＡの占有権を譲り受ける旨の合意をしたときは，Ｂの占有は，自主占有となる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2021",num:"9",subject:"min",q:`共有に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．金塊の共有者は，分割をしない旨の契約をしていない場合には，いつでも，その動産の分割を請求することができる。
イ．共有物分割訴訟においては，共有者の全員が当事者とならなければならない。
ウ．共有物の分割を求める裁判において共有物の現物を分割することができないとき，又は分割によってその価格を著しく減少させるおそれがあるときは，裁判所は，その競売を命じなければならない。
エ．各共有者は，他の共有者が共有物の分割によって取得した物について，その持分に応じて担保の責任を負う。
オ．共有者の一人が，その持分を譲渡するためには，他の共有者の同意を得なければならない。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2021",num:"10",subject:"min",q:`留置権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．留置権者が留置権を行使して目的物を留置している間は，留置権の被担保債権の消滅時効は，進行しない。
イ．賃借物について賃貸人Ａの負担に属する必要費を支出した賃借人Ｂは，賃貸借終了後，その償還請求権を被担保債権として留置権を行使している間に，更にＡの負担に属する必要費を支出した場合には，更に支出したものを含めた必要費全額の弁済を受けるまで，留置権を行使することができる。
ウ．留置権者は，債務者の承諾を得て留置物を第三者に賃貸してその賃料を自己の債権の弁済に充当することができる。
エ．建物の賃借人は，造作買取請求権の行使によって生じた賃貸人に対する代金債権を被担保債権として，建物について留置権を行使することができる。
オ．建物の賃借人が，賃貸借終了後，有益費の償還請求権を被担保債権として留置権を行使している場合において，賃貸人の請求により裁判所がその償還について期限を許与したときは，留置権は消滅する。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2021",num:"11",subject:"min",q:`ＡがＢに賃貸しているＡ所有の甲建物にＣのための抵当権が設定され，その登記がされている。この場合における抵当権に基づくＣの物上代位権の行使に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ｃのための抵当権の設定登記がされた後にＢがＡに対して金銭を貸し付け，その貸金債権の弁済期が到来した場合，ＡのＢに対する賃料債権についてＣが物上代位権を行使して差押えをした後であっても，Ｂは，Ａに対する貸金債権を自働債権とし，Ａの賃料債権を受働債権とする相殺をもって，Ｃに対抗することができる。
イ．ＡのＢに対する賃料債権についてＣが物上代位権を行使して差押えをした場合において，ＢがＣに賃料を支払わないままＡＢ間の賃貸借契約が終了し，Ｂが甲建物をＡに明け渡した。この場合において，ＢがＡにあらかじめ敷金を預託していたときは，Ｃが差し押さえた賃料債権は，敷金の充当によりその限度で消滅する。
ウ．Ｂが甲建物をＤに転貸した場合，Ｃは，ＢをＡと同視することが相当であるときを除き，ＢのＤに対する転貸賃料債権について物上代位権を行使することができる。
エ．ＡのＢに対する賃料債権をＡの一般債権者Ｅが差し押さえて転付命令を取得し，その転付命令がＢに送達された後は，Ｃは，同一の債権を差し押さえて物上代位権を行使してＥに対抗することができない。
オ．ＡのＢに対する賃料債権をＡの一般債権者Ｅが差し押さえ，その差押命令がＢに送達された後に，ＡがＣのために甲建物に抵当権を設定し，その登記がされた場合，Ｃは，同一の債権を差し押さえて物上代位権を行使してＥに対抗することができない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2021",num:"12",subject:"min",q:`動産質権に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．同一の動産について，複数の動産質権を設定することはできない。
イ．動産質権者は，質権設定者に，自己に代わって質物を占有させることができない。
ウ．動産質権者は，占有している質物について必要費を支出しても，所有者にその償還を請求することはできない。
エ．動産質権者は，被担保債権の弁済を受けないときは，正当な理由がある場合に限り，鑑定人の評価に従い質物をもって直ちに弁済に充てることを裁判所に請求することができる。
オ．動産質権者は，被担保債権について利息を請求する権利を有するときは，その満期となった最後の２年分についてのみ，その質権を行使することができる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2021",num:"13",subject:"min",q:`抵当権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．土地に抵当権が設定された後にその土地上に建物が築造された場合，抵当権者は，抵当権が設定されていない当該建物をその土地とともに一括して競売することができる。
イ．甲土地の所有権が自己にあると過失なく信じて１０年間その占有を継続した者は，甲土地上の抵当権の存在につき悪意であったときは，甲土地の所有権を時効取得することができない。
ウ．Ａが甲土地を賃借したが，その対抗要件を具備しない間に，甲土地にＢのための抵当権が設定されてその登記がされた。Ａは，この登記がされた後，賃借権の時効取得に必要とされる期間，甲土地を継続的に用益したとしても，競売により甲土地を買い受けたＣに対し，賃借権を時効により取得したと主張して，これを対抗することができない。
エ．ＡがＢ所有の甲土地を占有して取得時効が完成した後，所有権移転登記がされることのないまま，甲土地にＣのための抵当権が設定されてその登記がされた。Ａがその後引き続き時効取得に必要とされる期間，甲土地の占有を継続し，その期間の経過後に取得時効を援用した場合は，ＡがＣの抵当権の存在を容認していたときであっても，Ｃの抵当権は消滅する。
オ．債務の弁済と，当該債務の担保として設定された抵当権の設定登記の抹消登記手続とは，同時履行の関係に立つ。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2021",num:"14",subject:"min",q:`ＡがＢに対する債務を担保するために，Ａの所有する甲土地に第一順位の抵当権を設定し，その登記がされた。この場合における抵当権の処分に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ｂが，Ｃに対する債務を担保するために，甲土地の抵当権に転抵当権を設定したときは，Ａに対する通知又はＡの承諾がなければ，Ｃは，転抵当権の設定を受けたことをＡに対抗することができない。
イ．ＢがＡの一般債権者Ｄに対してその抵当権を譲渡するには，Ａの承諾を必要としない。
ウ．Ａが，甲土地について，Ｅのために第二順位の抵当権，Ｆのために第三順位の抵当権を設定し，その登記がされている場合において，ＢＦ間で抵当権の順位の変更が合意されたとき，その登記をしなければ変更の効力は生じない。
エ．Ａが，甲土地について，Ｇのために第二順位の抵当権，Ｈのために第三順位の抵当権を設定し，その登記がされている場合において，ＢのＨに対する抵当権の順位の譲渡は，その登記をしなければ譲渡の効力は生じない。
オ．Ａが，甲土地について，Ｉのために第二順位の抵当権を設定し，その登記がされている場合において，ＢがＩに対して抵当権の順位の放棄をしたときは，甲土地が競売されたときの配当において，ＩがＢに優先する。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2021",num:"15",subject:"min",q:`債務不履行による損害賠償に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．債務不履行に関して債権者に過失があった場合には，裁判所は，これを考慮して損害賠償の責任自体を否定することができる。
イ．金銭消費貸借契約による借入金返還債務の不履行に基づく損害賠償について，債務者は，不可抗力を理由として責任を免れることはできない。
ウ．特別の事情によって生じた損害については，当事者がその事情を現に予見していたときに限り，債権者は，その賠償を請求することができる。
エ．債務不履行による損害賠償は，金銭の支払以外の方法によってすることはできない。
オ．債権者が，損害賠償として，その債権の目的である物の価額の全部の支払を受けた場合，債務者は，債権者に対してその物に関する権利を取得する旨の意思表示をしなければ，その物に関する権利を取得することができない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2021",num:"16",subject:"min",q:`債務不履行による損害賠償についての契約条項に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．債務者は，一切損害賠償責任を負わない旨の免責条項がある場合でも，債務者が故意に債務を履行しなかったときには，当該免責条項による免責が認められない。
イ．損害賠償の額を予定する条項がある場合には，過失相殺による減額がされることはない。
ウ．定型約款中に損害賠償の額を予定する条項があって，定型約款準備者の相手方が，定型取引合意前に定型約款の内容を示すよう請求したにもかかわらず，定型約款準備者が正当な事由なくこれに応じないまま，定型取引合意がされたときは，当該条項は，合意されたものとはみなされない。
エ．債務不履行について履行に代わる損害賠償の額を予定した場合において，債務者からその予定額の支払の申出があったときでも，債権者は債務不履行を理由とする解除権の行使を妨げられない。
オ．違約金を定める条項は，実損害の賠償とは別に一定額の金銭を支払う旨の違約罰を定める条項であると推定される。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2021",num:"17",subject:"min",q:`債権者代位権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．債権者が債務者に属する権利を行使するためには，被保全債権がその権利の発生の前の原因に基づいて生じたものでなければならない。
イ．債権者は，債務者に属する権利であって差押えを禁じられたものについては，行使することができない。
ウ．債権者は，被代位権利の行使に係る訴えを提起したときは，遅滞なく，債務者に対し，訴訟告知をしなければならない。
エ．債権者は，債務者が第三者に対して負う債務に係る消滅時効の援用権を代位行使することができない。
オ．債権者が被代位権利の行使の事実を債務者に通知した場合であっても，債務者は被代位権利を行使することができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2021",num:"18",subject:"min",q:`Ａ，Ｂ及びＣの三人がＤに対して連帯して６００万円の金銭債権を有する場合（Ａ，Ｂ及びＣの分与されるべき利益は等しいものとする。）に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａは，Ｄに対して６００万円全額の請求をするに当たり，Ｂ及びＣの同意を得ることを要しない。
イ．ＡがＤに対して債権の全部を免除した場合であっても，ＢはＤに対して４００万円の限度で支払を請求することができる。
ウ．ＡのＤに対する権利が時効により消滅したが，ＢのＤに対する権利については消滅時効が完成していない場合，Ｂは，Ｄに対して６００万円の支払を請求することができる。
エ．ＤがＡに対して３００万円の金銭債権を有している場合において，ＤがＡに対して相殺を援用したときは，その相殺は２００万円の限度で効力を生ずる。
オ．ＣがＤを単独で相続した場合には，Ａは，Ｃに対して４００万円の支払を請求することができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2021",num:"19",subject:"min",q:`個人であるＡがＢのＣに対する債務を保証する場合に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａが，Ｂの委託を受けて，Ｂの事業に係る債務を保証しようとする場合，Ｂは，保証契約の締結に当たり，Ａに対し，Ｂの財産及び収支の状況について情報を提供しなければならない。
イ．Ｂの債務がＢの事業のために負担した貸金債務である場合，ＡＣ間の保証契約は，Ａが保証債務を履行する意思を保証契約の締結後速やかに公正証書で表示することにより，その効力を生ずる。
ウ．Ａが，Ｂの委託を受けて保証した場合，Ｃは，定期的に，Ａに対し，主たる債務の元本及び利息について，不履行の有無，残額及び弁済期が到来しているものの額に関する情報を提供しなければならない。
エ．Ｂがその有していた期限の利益を喪失した場合，Ｃは，Ａに対し，その旨を通知しなければならない。
オ．Ａの保証が根保証である場合，極度額が定められなければ，その効力は生じない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2021",num:"20",subject:"min",q:`債務引受に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．債務者が負担する債務の発生原因行為を債務者が詐欺を理由に取り消すことができる場合でも，引受人は，債権者に対して債務の履行を拒むことはできない。
イ．併存的債務引受は，債務者の意思に反する場合であっても，債権者と引受人となる者との契約により有効に成立する。
ウ．債務者と引受人となる者との間で免責的債務引受契約がされたときは，債権者への通知又は債権者の承諾により，その効力を債権者に対抗することができる。
エ．併存的債務引受において，引受人は，引き受けた債務を弁済した場合，債務者に対し，弁済額のうち債務者の負担部分に応じた額を求償することができる。
オ．免責的債務引受において，債権者は，債務者が免れる債務の担保として設定された担保権を，引受人が負担する債務に移すことはできない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2021",num:"21",subject:"min",q:`ＡのＢに対する金銭債権（以下「甲債権」という。）とＢのＡに対する金銭債権（以下「乙債権」という。）との相殺に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．甲債権と乙債権の両方の弁済期が到来した後，甲債権がＡからＣに譲渡され，その対抗要件が具備された。この場合において，Ｂは，ＣがＢのＣに対する金銭債権（丙債権）と甲債権とを相殺した後であっても，乙債権と甲債権との相殺をもってＣに対抗することができる。
イ．乙債権は，Ａの債権者であるＤが甲債権を差し押さえた後に，Ｂが他人から譲り受けたものであった。この場合，乙債権が差押え前の原因に基づいて生じたものであるとしても，Ｂは，乙債権と甲債権との相殺をもってＤに対抗することができない。
ウ．甲債権は，Ｂの悪意による不法行為に基づいて生じたＥのＢに対する損害賠償債権を，ＡがＥから譲り受けたものであった。この場合，Ｂは，乙債権と甲債権との相殺をもってＡに対抗することができる。
エ．甲債権の弁済期が到来した後に，Ａの債権者であるＦが甲債権を差し押さえた場合には，Ｂは，差押え前に取得していた乙債権の弁済期到来前であっても，乙債権と甲債権との相殺をもってＦに対抗することができる。
オ．Ａが甲債権をＧに譲渡し，その対抗要件が具備された後，Ｂが乙債権を取得した。この場合において，Ｂは，乙債権が対抗要件具備時より前の原因に基づいてＡＢ間で生じた債権であっても，乙債権と甲債権との相殺をもってＧに対抗することができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2021",num:"22",subject:"min",q:`契約の解除に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．解除権を有する者が，過失によって契約の目的物を返還することができなくなった場合には，自身が解除権を有することを知らなかったとしても，解除権は消滅する。
イ．契約の性質又は当事者の意思表示により，特定の日時又は一定の期間内に履行をしなければ契約の目的を達成することができない債務について，債務者が履行をしないでその時期を経過したときは，契約の解除をすることなく，当該債務は当然にその効力を失う。
ウ．債務の一部の履行が不能である場合において，残存する部分のみでは契約をした目的を達することができないときは，債権者は，催告をすることなく，直ちに契約の全部の解除をすることができる。
エ．解除権の行使について期間の定めがない場合において，相手方が，解除権を有する者に対し，相当の期間を定めて，その期間内に解除をするかどうかを確答すべき旨の催告をしたにもかかわらず，当該期間内に解除の通知を受けないときは，解除権は消滅する。
オ．解除権が行使された場合の原状回復において，金銭以外の物を返還するときは，その物を受領した時以後に生じた果実をも返還しなければならない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2021",num:"23",subject:"min",q:`ＡＢ間の売買契約において，売主Ａが買主Ｂに対して引き渡した目的物の数量が不足しており，契約の内容に適合しない場合の買主Ｂの権利に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．数量の不足がＡＢいずれの責めにも帰することができない事由によって生じた場合，ＢはＡＢ間の売買契約を解除することができない。
イ．数量の不足がＢの責めに帰すべき事由によって生じた場合，ＢはＡＢ間の売買契約を解除することができない。
ウ．数量の不足がＢの責めに帰すべき事由によって生じた場合，不足分の引渡しが可能であっても，Ｂは不足分の引渡しを請求することができない。
エ．不足分の引渡しが可能であり，Ａがその引渡しを申し出た場合であっても，Ｂは，その申出を拒んで直ちに代金の減額を請求することができる。
オ．Ｂが数量の不足を知った時から１年以内にその旨をＡに通知しない場合には，Ａが引渡しの時に数量の不足を知り又は重大な過失によって知らなかったときを除き，Ｂは損害賠償の請求をすることができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2021",num:"24",subject:"min",q:`贈与に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．死因贈与は，書面によることを要せず，当事者の合意のみで成立する。
イ．贈与者は，特約のない限り，目的物が特定した時の状態でこれを引き渡せば足りる。
ウ．受贈者は，贈与契約が書面によらない場合であっても，履行の終わっていない部分について贈与契約を解除することができない。
エ．負担付贈与においては，贈与者は，受贈者がその負担である義務の履行を怠ったことを理由として，贈与契約を解除することができない。
オ．登記された建物が書面によらずに贈与された場合，贈与者は，受贈者への目的物の引渡し及び所有権移転登記の双方がされるまでは，贈与契約を解除することができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2021",num:"25",subject:"min",q:`Ａは，Ｂとの間で，Ａが所有する甲建物をＢに使用させる旨の使用貸借契約を締結した。この場合におけるＡＢ間の法律関係について述べた次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ｂは，Ａの承諾がなくても，甲建物を第三者に使用させることができる。
イ．ＡＢ間の使用貸借契約が書面によるものでないときは，Ａは，甲建物をＢに引き渡すまでは，いつでもその契約を解除することができる。
ウ．Ｂは，甲建物について通常の必要費を支出したときは，その必要費をＡに請求することができる。
エ．ＡＢ間の使用貸借契約は，Ｂが展示会乙を開催することを目的とするものであった場合には，貸借期間を合意で決めていなかったとしても，展示会乙の会場としての使用を終えることによって終了する。
オ．Ｂは，甲建物を使用するに当たり，その壁面に取り外しができる棚を造り付けた。Ｂは，使用貸借契約が終了したときは，その取り外しに過分の費用を要するのでない限り，その棚を収去しなければならない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"1"},{year:"2021",num:"26",subject:"min",q:`賃貸借に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．処分の権限を有しない者は，短期賃貸借の存続期間を超える賃貸借をすることはできない。
イ．賃貸物である不動産が譲渡された場合，譲渡人と譲受人との間で賃貸人たる地位を譲受人に移転させる旨の合意をしても，賃借人の承諾がなければ，賃貸人たる地位を譲受人に移転させることはできない。
ウ．不動産賃貸借の対抗要件を備えた賃借人は，その不動産を第三者が正当な権原なく占有しているときには，その第三者に対して返還の請求をすることができる。
エ．耕作を目的とする土地の賃借人は，不可抗力によって賃料より少ない収益しか得られなかったときであっても，賃料の減額を請求することはできない。
オ．賃借物の全部が滅失その他の事由により使用及び収益をすることができなくなった場合には，賃貸借はこれによって終了する。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2021",num:"27",subject:"min",q:`寄託に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．寄託は，当事者の一方がある物を保管することを相手方に委託し，相手方がこれを承諾することによって，その効力を生ずる。
イ．受寄者は，寄託者の承諾を得なくても，やむを得ない事由があるときは，寄託物を第三者に保管させることができる。
ウ．受寄者は，寄託物について権利を主張する第三者から訴えを提起された場合には，寄託者が既にこれを知っているときを除き，遅滞なくその事実を寄託者に通知しなければならない。
エ．当事者が寄託物の返還の時期を定めた場合には，寄託者は，その返還の時期が到来するまで寄託物の返還を請求することができない。
オ．複数の者が寄託した物の種類及び品質が同一である場合には，受寄者は，各寄託者の承諾を得なくても，これらを混合して保管することができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2021",num:"28",subject:"min",q:`組合に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．金銭を出資の目的とした場合には，その出資を怠った組合員は，その利息を支払うほか，損害の賠償をしなければならない。
イ．組合の債権者は，債権の発生の時に各組合員の損失分担の割合を知っていた場合であっても，その選択に従い，各組合員に対して等しい割合でその権利を行使することができる。
ウ．組合員の債権者は，組合財産について，その組合員の持分の限度で権利を行使することができる。
エ．組合契約において，当事者が損益分配の割合を定めなかったときは，利益及び損失は，各組合員に等しい割合で分配される。
オ．脱退した組合員は，その脱退前に生じた組合の債務について，従前の責任の範囲内で弁済する責任を負う。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2021",num:"29",subject:"min",q:`不法行為に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．未成年者が他人に損害を加えた場合，その未成年者の親権者が損害賠償責任を負うことはあっても，未成年者が損害賠償責任を負うことはない。
イ．故意又は過失によって一時的に自己の行為の責任を弁識する能力を欠く状態を招いた者は，その状態にある間に他人に加えた損害について賠償責任を負う。
ウ．使用者が被用者の加害行為につき使用者責任に基づいて第三者に損害賠償をした場合であっても，使用者の被用者に対する求償権は生じない。
エ．請負人がその仕事について第三者に損害を加えた場合，注文又は指図について過失のない注文者は，その第三者に対する損害賠償責任を負わない。
オ．人の生命又は身体を害する不法行為による損害賠償請求権は，時効によって消滅しない。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2021",num:"30",subject:"min",q:`内縁関係にあるＡ男とＢ女に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡＢがＢの賃借したアパートで同居していた場合において，Ｂが死亡してＢに相続人がいないときは，Ａは，そのアパートの賃借人の権利義務を承継する。
イ．ＡＢの間に子Ｃが出生し，ＡがＣを認知した場合には，Ｃに対する親権は，ＡＢが共同して行う。
ウ．ＡＢがＢの所有する建物で同居していた場合において，Ｂの死亡により内縁関係が解消したときは，Ａは，Ｂの相続人に対して建物の所有権について財産分与を請求することができる。
エ．ＡがＢに無断で婚姻届を作成して届出をした場合において，Ｂが後に届出の事実を知ってこれを追認したときは，届出の当初に遡ってその婚姻が有効となる。
オ．Ａが日常の家事に関して第三者と取引をした場合，Ｂは，その取引によって生じた債務について責任を負わない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2021",num:"31",subject:"min",q:`親権に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａに対して親権を行うＢは，Ａに代わって，Ａの子であるＣに対して親権を行う。
イ．親権を行う者は，子の利益のために子の監護及び教育をする権利を有し，義務を負う。
ウ．子は，職業を営むに当たっては，親権を行う者の許可を得ることを要しない。
エ．父又は母による親権の行使が困難又は不適当であることにより子の利益を害するときであっても，子の祖父母は，親権停止の審判の請求をすることができない。
オ．親権を行う父又は母は，やむを得ない事由があるときは，家庭裁判所の許可を得て，親権又は管理権を辞することができる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"5"},{year:"2021",num:"32",subject:"min",q:`妻Ａと夫Ｂの間に子Ｃが，Ｂには父Ｄ及び弟Ｅが，Ａには前夫との間の子Ｆがいる。この事例に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ｃは，Ｂから扶養を受ける権利をＦに譲渡することはできない。
イ．ＡとＢが離婚した時にＣが未成年者であった場合において，Ｃの親権者をＡと定めたときは，ＢはＣに対する扶養義務を負わない。
ウ．Ｄを扶養すべき者の順序については，子であるＢ及びＥが先順位であり，孫であるＣが後順位である。
エ．家庭裁判所は，特別な事情があるときは，Ｅを扶養する義務をＡに負わせることができる。
オ．Ａを扶養してきたＣが，過去の扶養料をＦに求償する場合において，各自の分担額の協議が調わないときは，家庭裁判所が各自の資力その他一切の事情を考慮してこれを定める。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2021",num:"33",subject:"min",q:`相続分に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．共同相続人は，遺言によって相続分の指定がされた場合には，協議によって，指定された相続分と異なる相続分の割合による遺産分割をすることができない。
イ．共同相続人の一人であるＡが相続放棄をした後，被相続人がＡの相続分を指定する内容の遺言をしていたことが判明した場合には，Ａは，その遺言に従って相続をする。
ウ．共同相続人の一人は，自己の相続分を他の共同相続人以外の第三者に譲渡することができない。
エ．共同相続人の一人であるＡが自己の相続分の全部を他の共同相続人Ｂに譲渡した場合には，Ａは，遺産分割協議の当事者となることができない。
オ．遺言によって相続分の指定がされた場合であっても，相続債権者は，指定された相続分に応じた債務の承継を承認しない限り，法定相続分に応じて権利を行使することができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2021",num:"34",subject:"min",q:`被相続人Ａの配偶者Ｂは，Ａの死亡時に，Ａの財産に属していた甲建物に居住していた。この場合における甲建物についてのＢの配偶者居住権に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡＢの子であるＣが，Ａの死亡時に甲建物をＡと共有していた場合は，Ｂは，配偶者居住権を取得しない。
イ．配偶者居住権を取得したＢは，その配偶者居住権を譲渡することができる。
ウ．配偶者居住権を取得したＢは，甲建物の使用及び収益に必要な修繕をすることができる。
エ．相続によりＡから甲建物の所有権を取得したＤは，配偶者居住権を取得したＢに対し，配偶者居住権の設定の登記を備えさせる義務を負う。
オ．遺贈によりＢが配偶者居住権を取得した後，遺産分割によりＢ及び相続人Ｅが甲建物の共有持分をそれぞれ有するに至った場合は，その配偶者居住権は消滅する。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2021",num:"35",subject:"min",q:`遺留分に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．相続人が配偶者と妹一人のみであった場合には，妹は，遺留分を算定するための財産の価額に８分の１を乗じた額を遺留分として受ける。
イ．遺留分を算定するための財産の価額は，被相続人が相続開始の時において有した財産の価額にその贈与した財産の価額を加えた額から債務の全額を控除した額である。
ウ．相続開始前における遺留分の放棄は，家庭裁判所の許可を受けたときに限り，その効力を生ずる。
エ．共同相続人の一人が遺留分を放棄した場合は，他の各共同相続人の遺留分が増加する。
オ．遺留分権利者は，受遺者又は受贈者に対し，遺留分侵害額に相当する金銭の支払を請求することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2021",num:"36",subject:"min",q:`費用の負担に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．相続財産に関する費用は，相続人の過失によるものを除き，相続財産の中から支弁する。
イ．債務者が債務の履行を提供したが，債権者が債務の履行を受けることができなかった場合，それによって増加した履行の費用は，債務者が負担する。
ウ．賃貸借契約の締結に関する費用は，当事者双方が等しい割合で負担する。
エ．Ａの所有する甲土地を悪意で占有していたＢは，甲土地をＡに返還する場合には，甲土地に関して支出した通常の必要費の償還をＡに請求することはできない。
オ．Ａの所有する甲建物の配偶者居住権を有するＢは，甲建物をＡに返還する場合において，それ以前に支出した有益費につき，その価格の増加が返還時に現存するときは，Ａの選択に従い，その支出した金額又は増価額について償還を受けることができる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2021",num:"37",subject:"min",q:`書面等による契約に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．住宅の所有を目的として締結された定期借地権の設定契約は，公正証書によらなければその効力を生じない。
イ．保証契約は，その合意が電子メールを相互に送受信する方法によってされた場合には，書面が作成されていなくてもその効力を生じる。
ウ．贈与契約において，贈与者の意思表示が書面によってされている場合には，受贈者の意思表示が書面によってされていないときでも，贈与者は，贈与契約の解除をすることができない。
エ．金銭消費貸借契約は，書面によってされた場合であっても，借主が貸主から合意した金銭を受け取るまでは，その効力を生じない。
オ．書面によらない有償寄託契約の受寄者は，寄託物を受け取るまでは契約の解除をすることができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2021",num:"1",subject:"kei",q:"過失犯に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．共同正犯に関する刑法第６０条は，意思の連絡を要件としているので，過失犯には適用されない。",c2:"２．重過失とは，重大な結果を惹起する危険のある不注意な行為をすることをいう。",c3:"３．過失犯の成立に必要となる結果発生の予見可能性は，内容の特定しない一般的・抽象的な危惧感ないし不安感を抱く程度の予見の可能性で足りる。",c4:"４．行為者が法令に違反する行動をした事案においても信頼の原則が適用される場合がある。",c5:"５．ホテルの火災により死傷者が出た場合，火災発生時に現場にいなかったホテル経営者には業務上過失致死傷罪が成立することはない。",c6:"",c7:"",c8:"",a:"4"},{year:"2021",num:"2",subject:"kei",q:`住居侵入等の罪に関する次のアからオまでの各記述を判例の立場に従って検討し，正しい場合には１を，誤っている場合には２を選びなさい。
ア．甲は，警察署の敷地内に駐車中の捜査用車両のナンバーを把握しようと考え，外部から同敷地内への交通を制限するために設置され，内部をのぞき見ることができない構造になっている高さ２．５メートル，幅０．２メートルの同警察署の塀をよじ登り，その上に立った。この場合，甲には，建造物侵入未遂罪が成立するにとどまる。
イ．甲は，窃盗の目的で，乙が所有し，その扉や窓に施錠して管理していた空き家に立ち入った。この場合，甲には，邸宅侵入罪が成立する。
ウ．甲は，強盗の目的で，面識のない乙方に行き，その意図を隠しながら，玄関前で，「こんばんは。」と挨拶したところ，これを知人による来訪と勘違いした乙が，「どうぞ入ってください。」と答えたので，乙方内に立ち入った。この場合，甲には，住居侵入罪は成立しない。
エ．甲は，乙会社が所有するビルに窃盗に入る目的で，同ビルに接しており，同社が設置した門扉及び金網フェンスによって，同ビルの利用のために供されるものであることが明示され，部外者の出入りが制限されている敷地部分に立ち入ったが，同ビルに立ち入る前に警備員に取り押さえられた。この場合，甲には，建造物侵入未遂罪が成立するにとどまる。
オ．甲は，住居権者乙の意思に反し，乙方家屋に立ち入ったが，その後，乙から退去を求められたにもかかわらず数時間にわたって同家屋に居座った。この場合，甲には，住居侵入罪だけでなく，不退去罪も成立し，両罪は併合罪となる。`,c1:`２．５メートル，幅０．２メートルの同警察署の塀をよじ登り，その上に立った。この場合，甲には，建造物侵入未遂罪が成立するにとどまる。［No.２］
イ．甲は，窃盗の目的で，乙が所有し，その扉や窓に施錠して管理していた空き家に立ち入った。この場合，甲には，邸宅侵入罪が成立する。［No.３］
ウ．甲は，強盗の目的で，面識のない乙方に行き，その意図を隠しながら，玄関前で，「こんばんは。」と挨拶したところ，これを知人による来訪と勘違いした乙が，「どうぞ入ってください。」と答えたので，乙方内に立ち入った。この場合，甲には，住居侵入罪は成立しない。［No.４］
エ．甲は，乙会社が所有するビルに窃盗に入る目的で，同ビルに接しており，同社が設置した門扉及び金網フェンスによって，同ビルの利用のために供されるものであることが明示され，部外者の出入りが制限されている敷地部分に立ち入ったが，同ビルに立ち入る前に警備員に取り押さえられた。この場合，甲には，建造物侵入未遂罪が成立するにとどまる。［No.５］
オ．甲は，住居権者乙の意思に反し，乙方家屋に立ち入ったが，その後，乙から退去を求められたにもかかわらず数時間にわたって同家屋に居座った。この場合，甲には，住居侵入罪だけでなく，不退去罪も成立し，両罪は併合罪となる。［No.６］`,c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"21222"},{year:"2021",num:"3",subject:"kei",q:`次の【事例】及び【判旨】に関する後記１から５までの各【記述】のうち，正しいものを２個選びなさい。
【事 例】
Ｘは，Ａに電話を掛け，本来支払う必要のない違約金をＡが支払わなければならない旨うそを告げた。Ａはうそを見破ったが，警察官から，「だまされたふり作戦」（引き続き犯人側の要求どおりに行動しているふりをして犯人を現行犯逮捕しようとする捜査手法をいう。）に協力することを依頼された。Ａはこれに応じ，現金を某所に送付するようにというＸの指示に従ったふりをして，現金の代わりに模擬紙幣が入った荷物を同所に向けて発送した。その後，被告人は，Ｘから，報酬を支払う約束の下に荷物の受領を依頼され，詐欺の被害金を受け取る役割である可能性を認識しつつ，これを引き受け，「だまされたふり作戦」が開始されたことを認識せずに，上記場所で同荷物を受領し，警察官に現行犯逮捕された。
【判 旨】
被告人は，本件につき，Ｘによる欺罔行為がされた後，「だまされたふり作戦」が開始されたことを認識せずに，Ｘと共謀の上，本件を完遂する上で欺罔行為と一体のものとして予定されていた受領行為に関与している。そうすると，「だまされたふり作戦」の開始の有無にかかわらず，被告人は，その加功前の欺罔行為を含めた本件につき，詐欺未遂罪の共同正犯としての責任を負うと解するのが相当である。
【記 述】`,c1:"１．【判旨】は，被告人に詐欺未遂罪の共同正犯が成立するには，前記荷物の受領行為自体に未遂犯として処罰すべき法益侵害の危険性が必要であり，その危険性の有無は，一般人が認識可能であった事情及び被告人が特に認識した事情に基づいて判断すべきという立場に立った上で，一般人は，Ａが「だまされたふり作戦」に協力している事実を認識することが可能であったとの評価を前提としている。",c2:"２．【判旨】に対しては，Ａがうそを見破っている以上，被告人が関与した時点では，詐欺罪が既遂に至る可能性がなく，被告人が法益侵害の危険性を惹起したとはいえないとの批判が考えられる。",c3:"３．【判旨】を前提とした場合，強盗罪における財物奪取行為のみに関与した者には，同罪の共同正犯の成立を認めることはできない。",c4:"４．【判旨】は，欺罔行為と財物受領行為の一体性を根拠として，財物受領行為のみに関与した者について，詐欺罪の承継的共同正犯を認めるとの立場と矛盾するものではない。",c5:"５．【判旨】によれば，被告人がＸのＡに対する欺罔行為の内容を認識していても，同欺罔行為を自己の犯罪の手段として積極的に利用する意思がない場合には，詐欺未遂罪の共同正犯の成立が否定される。",c6:"",c7:"",c8:"",a:"24"},{year:"2021",num:"4",subject:"kei",q:`汚職の罪に関する次のアからオまでの各記述を判例の立場に従って検討した場合，正しいものの組合せは，後記１から５までのうちどれか。
ア．公務員になろうとする者が，その担当すべき職務に関し，請託を受けて，賄賂の収受を約束した後に公務員となったが，結局，賄賂を収受しなかった場合，事前収賄罪（刑法第１９７条第２項）が成立する。
イ．公務員が，その職務に関し，請託を受けて，第三者に賄賂を供与させた場合，職務上不正な行為をし，又は相当の行為をしなかったときに限り，第三者供賄罪（刑法第１９７条の２）が成立する。
ウ．公務員が，その職務に関し，賄賂を収受したとき，当該職務が適切なものであっても単純収賄罪（刑法第１９７条第１項前段）が成立する。
エ．公務員であった者が，その在職中に請託を受けて職務上不正な行為をしたことに関し，退職後に賄賂を収受した場合，事後収賄罪（刑法第１９７条の３第３項）は成立しない。
オ．犯人が収受した賄賂は，任意的没収の対象となる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2021",num:"5",subject:"kei",q:`次の【事例】及び各【見解】に関する後記１から５までの各【記述】を検討した場合，誤っているものはどれか。なお，共同正犯に関する刑法第６０条は，結果的加重犯にも適用されることを前提とする。
【事 例】
甲乙両名は，２人でＶに向けて石を投げることにし，それぞれＶに石を投げた。その際，甲には，傷害の故意しかなかったのに対し，乙には，未必的な殺意があった。両名が投げた石のうち，甲の投げた石がＶの頭部に当たり，Ｖが死亡するに至った。
【見 解】
Ａ説：共同正犯とは，数人が共同して特定の犯罪を行うことであり，構成要件の間に重なり合いがあれば，そのうちのより重い犯罪について共同正犯の成立を認め，軽い犯罪の故意しか有しない者には，軽い犯罪の刑を科す。
Ｂ説：共同正犯とは，数人が共同して特定の犯罪を行うことであり，構成要件の重なり合う限度で軽い犯罪の共同正犯の成立を認め，重い犯罪の故意を有する者には，共同正犯とは別に，その故意に応じた単独犯の成立を認める。
Ｃ説：共同正犯とは，数人が犯罪に至る行為過程を含めた行為を共同することであり，特定の犯罪を共同して実現する場合はもちろん，単なる行為を共同して各自の意図する犯罪を実現する場合も，それぞれの行為について共同正犯の成立を認める。
【記 述】`,c1:"１．Ａ説からは，甲と乙に殺人罪の共同正犯が成立するとの結論が導かれる。",c2:"２．Ａ説に対しては，罪名と科刑が分離し，妥当でないとの批判がある。",c3:"３．Ｂ説に対しては，重い犯罪の故意を有する乙について，重い犯罪の単独犯として構成した場合には，自らの行為と死亡結果の因果性を欠くことから，殺人既遂罪の成立を認めることが困難となるとの指摘がある。",c4:"４．Ｂ説とＣ説とで，甲に成立する罪名は異ならない。",c5:"５．Ｃ説からは，甲と乙に傷害致死罪の共同正犯が成立するにとどまるとの結論が導かれる。",c6:"",c7:"",c8:"",a:"5"},{year:"2021",num:"6",subject:"kei",q:"文書偽造の罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものを２個選びなさい。",c1:"１．偽造公文書行使罪の客体は，行使の目的で作成されたものでなければならない。",c2:"２．公務員である医師が，自己の勤務する市立病院の患者が裁判所に提出するための診断書に虚偽の病名を記載した場合，虚偽公文書作成罪が成立する。",c3:"３．行使の目的で，公務員の名義を冒用して公文書を作成したが，実際には当該公務員に当該文書の作成権限がなかった場合，当該文書が当該公務員の職務権限内で作成されたものと一般人が信じるに足る形式・外観を備えていれば，公文書偽造罪が成立する。",c4:"４．警察官から提示を求められたときに備え，偽造された自動車運転免許証を携帯して自動車を運転した場合，偽造公文書行使罪が成立する。",c5:"５．上司である公文書の作成権限のある公務員を補佐して公文書の起案を担当する公務員が，その地位を利用し，行使の目的で，その職務上起案を担当する公文書に内容虚偽の記載をした上，情を知らない上司に，当該文書の内容が真実であると誤信させ，これに署名押印させた場合，虚偽公文書作成罪は成立しない。",c6:"",c7:"",c8:"",a:"23"},{year:"2021",num:"7",subject:"kei",q:`次のアからオまでの各記述を判例の立場に従って検討した場合，誤っているものの組合せは，後記１から５までのうちどれか。
ア．甲は，情を知らない法務局の担当登記官Ａに対し，虚偽の申立てをして登記簿の磁気ディスクに不実の記録をさせた後，当該記録の内容を閲覧可能な状態にした。この場合，甲には，電磁的公正証書原本不実記録罪及び同供用罪が成立し，これらは牽連犯となる。
イ．甲は，乙がＡ及びＢをバットで順次殴打して両名を負傷させた際，これに先立ち，乙の意図を知りながら，乙にバットを手渡してそれらの犯行を幇助した。この場合，甲には，Ａ及びＢに対する２個の傷害罪の幇助犯が成立し，これらは観念的競合となる。
ウ．甲は，Ａ名義の預金口座から現金を引き出す目的で，ＡからＡ名義のキャッシュカードをだまし取るとともに，暗証番号を聞き出し，銀行の現金自動預払機で同キャッシュカードを使用して現金を引き出した。この場合，甲には，詐欺罪及び窃盗罪が成立し，これらは牽連犯となる。
エ．甲は，強制性交の目的でＡ宅に侵入したが，Ａが不在であったため目的を遂げられなかった。その後，甲は，居間に置かれていたＡ所有の腕時計を発見し，窃取しようと考えてこれを持ち去った。この場合，甲には，住居侵入罪及び窃盗罪が成立するが，これらは併合罪となる。
オ．甲は，身の代金を得る目的でＡを拐取した後，甲の自宅に監禁し，その間にＡの実父Ｂに対し，電話で身の代金を要求した。この場合，甲には，身の代金目的拐取罪，監禁罪及び拐取者身の代金要求罪が成立し，身の代金目的拐取罪と拐取者身の代金要求罪が牽連犯となり，これらの各罪と監禁罪は併合罪となる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2021",num:"8",subject:"kei",q:`学生Ａ，Ｂ及びＣは，次の【会話】のとおり議論している。【会話】中の①から⑥までの（ ）内に後記【語句群】から適切な語句を入れた場合，正しいものの組合せは，後記１から５までのうちどれか。なお，①から⑥までの（ ）内にはそれぞれ異なる語句が入る。
【会 話】
学生Ａ．私は，公務も公務員としての個人の社会的活動であり，その性質に関わりなく業務妨害罪によって保護されるべきなので，（①）と考えます。
学生Ｂ．私は，国家的法益と個人的法益では罪質が違うので，（②）と考えます。
学生Ｃ．Ｂ君の見解では，（③）ような威力による非権力的公務に対する妨害のときに業務妨害罪が成立せず，非権力的公務の保護が不十分との批判がありますね。このような批判を踏まえて，私は，（④）と考えます。
学生Ａ．Ｃ君の見解によると，（⑤）ような暴行による非権力的公務に対する妨害については，いかなる犯罪が成立するのでしょうか。
学生Ｃ．その場合には，業務妨害罪と公務執行妨害罪が成立すると考えます。
学生Ｂ．Ｃ君の見解に対しては，（⑥）との批判がありますね。
【語句群】
ａ．全ての公務が業務妨害罪の対象となる
ｂ．強制力を行使する権力的公務以外の公務に限って業務妨害罪の対象となる
ｃ．公務は一切業務妨害罪の対象とならない
ｄ．威力による非権力的公務に対する妨害のときに処罰の間隙が生じてしまう
ｅ．逮捕行為や強制執行のように，自力で抵抗を排除し得る機能を付与されている場合まで威力に対する保護を認めることになる
ｆ．公務は公共の福祉を目的とするので，民間の業務より厚く保護されるべきである
ｇ．公務に限って二重に保護する必要はない
ｈ．市役所の窓口業務を大声を上げて妨害した
ｉ．警察官による適法な捜索差押えの際，多数名で怒号しながら入口を塞いで警察官が捜索場所に立ち入るのを妨害した
ｊ．公立学校の入学試験監督員である教員を拳で殴って試験会場に入るのを阻止した`,c1:"１．①ａ ②ｃ ③ｊ",c2:"２．①ａ ④ｂ ⑥ｅ",c3:"３．②ｃ ③ｈ ④ａ",c4:"４．③ｈ ⑤ｉ ⑥ｇ",c5:"５．④ｂ ⑤ｊ ⑥ｇ",c6:"",c7:"",c8:"",a:"5"},{year:"2021",num:"9",subject:"kei",q:`次のアからオまでの各記述を判例の立場に従って検討し，正しい場合には１を，誤っている場合には２を選びなさい。
ア．甲は，勤務先の事務室で１人で残業をしていたところ，使用中の電気ストーブから周囲の可燃物に誤って引火させた。甲は，その時点での消火作業は容易であったにもかかわらず，同室を含む勤務先建物が焼損することを認容して，消火作業をすることなく，同室から立ち去り，その結果，同建物が全焼した。その行為当時，同建物の他の部屋では甲の同僚が仮眠中であり，甲もそのことを認識していた。この場合，甲に既発の火力を利用する意思がなければ，現住建造物等放火罪は成立しない。
イ．甲は，Ｖと２人きりのホテル客室で，その同意の下，Ｖに対し，覚醒剤を注射したところ，Ｖが体調の異変を訴え，錯乱状態に陥ったため，救急医療を要請する必要があることを認識し，その要請をしていれば，Ｖの救命は確実であったにもかかわらず，その要請をすることなく，Ｖを放置したまま同室から立ち去り，その結果，Ｖが死亡したが，甲に殺意はなかった。この場合，甲がＶを放置した行為とＶの死亡との間の因果関係に欠けることはなく，甲には，保護責任者遺棄等致死罪が成立する。
ウ．甲は，深夜，自動車を運転中，路上で過失により通行人Ｖに同車を衝突させて，歩行不能の重傷を負わせた上，一旦Ｖを同車に乗せて，降雪中の周囲にひとけのない路上に移動し，Ｖに対し，医師を呼んでくるとうそを言って，Ｖを同車から降ろし，同車で同路上から立ち去ったが，甲に殺意はなかった。この場合，甲には，Ｖを保護する責任があり，保護責任者遺棄等罪が成立する。
エ．甲は，自己の口座に振込先を誤った振込入金があったことを知ったが，銀行窓口において，窓口係員に対し，その受取人として上記の誤った振込入金があった旨を告知せずに，その払戻しを請求し，事情を知らない同係員をして，払戻しに応じさせた。この場合，甲には，上記の誤った振込入金があったことを告知する義務はなく，詐欺罪は成立しない。
オ．甲は，面識のない他人のＶと口論に及び，その首を絞めて窒息死させ，Ｖの死体をその場に放置して逃走した。この場合，甲には葬祭義務はなく，死体遺棄罪は成立しない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"21121"},{year:"2021",num:"10",subject:"kei",q:`窃盗罪における不法領得の意思についての次の各【見解】に従って後記の各【事例】における甲の罪責を検討した場合，後記１から５までの各【記述】のうち，正しいものはどれか。なお，後記の各【事例】における甲の行為は，いずれも窃盗罪の客観的要件を全て満たすものとする。
【見 解】
Ａ．不法領得の意思として，権利者を排除して所有者として振る舞う意思及び何らかの用途に従って利用・処分する意思が必要である。
Ｂ．不法領得の意思として，権利者を排除して所有者として振る舞う意思は必要であるが，何らかの用途に従って利用・処分する意思は不要である。
Ｃ．不法領得の意思として，何らかの用途に従って利用・処分する意思は必要であるが，権利者を排除して所有者として振る舞う意思は不要である。
Ｄ．不法領得の意思は不要である。
【事 例】
Ⅰ．甲は，勤務先の会社の上司乙を困らせる目的で，乙が机の引き出し内に保管していた同社の銀行届出印をひそかに持ち出し，自宅の天井裏に隠匿した。
Ⅱ．甲は，乙が不在であることを知り，一時的に借用して直ちに戻す意思で，乙方の玄関先に無施錠で駐輪されていた乙の自転車を無断で乗り出し，１００メートル先の店まで移動して用事を済ませ，その乗り出しから５分後，同自転車を同玄関先に戻した。
Ⅲ．甲は，Ｘ市議会議員選挙に際し，候補者乙の得票数を水増しする目的で，同市選挙管理委員会が保管していた投票用紙５０枚を投票所から持ち出し，乙の支持者らに交付して乙に対する投票を依頼した。
【記 述】`,c1:"１．Ａ及びＢいずれの見解によっても，事例Ⅰでは窃盗罪が成立する。",c2:"２．Ａ及びＤいずれの見解によっても，事例Ⅱでは窃盗罪が成立する。",c3:"３．Ｂ及びＣいずれの見解によっても，事例Ⅱでは窃盗罪が成立する。",c4:"４．Ｂ及びＤいずれの見解によっても，事例Ⅲでは窃盗罪が成立する。",c5:"５．Ｃ及びＤいずれの見解によっても，事例Ⅰでは窃盗罪が成立する。",c6:"",c7:"",c8:"",a:"4"},{year:"2021",num:"11",subject:"kei",q:"刑法上の没収及び追徴に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．犯罪行為の用に供した物（刑法第１９条第１項第２号）の没収は，物の危険性に着目した処分であるため，行為者が責任無能力を理由に無罪の言渡しをされたときであっても科すことができる。",c2:"２．犯罪行為の報酬として得た貴金属を売却して得た現金は，追徴ではなく，没収の対象となる。",c3:"３．強制性交の犯人が，被害者に犯行の様子を撮影録画したことを知らせて捜査機関に対し処罰を求めることを断念させる目的で，ひそかに撮影録画したデジタルビデオカセットは，犯罪行為の用に供した物ではないため，没収の対象とならない。",c4:"４．犯罪行為によって得た物(刑法第１９条第１項第３号)は，犯罪により不当に得た利益を犯人から剥奪する必要があるため，任意的没収ではなく，必要的没収の対象となる。",c5:"５．没収の対象は，刑罰の一身専属性の見地から，犯人の所有物に限られる。",c6:"",c7:"",c8:"",a:"2"},{year:"2021",num:"12",subject:"kei",q:`名誉毀損罪及び侮辱罪に関する次のアからオまでの各記述を判例の立場に従って検討した場合，正しいものの組合せは，後記１から５までのうちどれか。
ア．事実を摘示せずに公然と人を侮辱することを教唆した者に，侮辱教唆罪が成立することはない。
イ．弁護人が被告人の利益を擁護するためにした弁護活動であれば，それが名誉毀損罪の構成要件に該当する行為であっても，違法性が阻却されるため，名誉毀損罪が成立することはない。
ウ．人の社会的評価を害するに足りる事実を公然と摘示したとしても，その人の社会的評価が現実に害されていない場合，刑法第２３０条第１項にいう「人の名誉を毀損した」とはいえないため，名誉毀損罪は成立しない。
エ．私人の私生活の行状であっても，その携わる社会的活動の性質及びこれを通じて社会に及ぼす影響力の程度等によっては，刑法第２３０条の２第１項にいう「公共の利害に関する事実」に当たる場合がある。
オ．インターネットを利用して公然と虚偽の事実を摘示し，人の名誉を毀損した場合，他の表現手段を利用する場合と異なり，インターネットの個人利用者に要求される水準を満たす調査によって摘示した事実が真実か否かを確かめることなく発信したときに限り名誉毀損罪が成立する。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"1"},{year:"2021",num:"13",subject:"kei",q:`次の【事例】に関する後記アからオまでの各【記述】のうち，甲に殺人未遂罪の成立を認めるための論拠として適切なものの組合せは，後記１から５までのうちどれか。
【事 例】
甲は，知人の乙に，毒物を混入したワイン（以下「本件ワイン」という。）を送り付ければ，乙がそれを自ら飲んで死亡すると考えた。甲は，某日，本件ワインを宅配業者の事務所に持ち込み，３日後の配達指定をして，乙宅への配達を申し込んだ。しかし，本件ワインは，申込み当日，同事務所での保管中に瓶が破損して廃棄処分となったため，乙宅に配達されることはなかった。
【記 述】
ア．間接正犯の実行の着手については，被利用者の行為を基準として実行の着手を判断すべきところ，本件では，それと同様の考え方が妥当する。
イ．結果発生の一定の蓋然性が生じれば，未遂犯の成立を認めることができるところ，我が国の一般的な宅配業務の実情を前提とした場合，本件ワインの配達を申し込んだ時点で乙宅に到着することはほぼ確実といえる。
ウ．実行の着手は，行為者が，その犯行計画上，構成要件実現のためになすべきことを行った時点で認めることができる。
エ．甲が，宅配業者に依頼せず，自ら乙宅に本件ワインを届けようとした場合には，乙宅に本件ワインを届けるまでは殺人未遂罪が成立しないこととの均衡を考慮する必要がある。
オ．既遂結果発生の時間的に切迫した危険を内容とする未遂結果は，刑法第４３条の書かれざる構成要件要素である。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2021",num:"14",subject:"kei",q:`証拠隠滅等罪（刑法第１０４条）に関する次のアからオまでの各記述を判例の立場に従って検討した場合，正しいものの個数を後記１から５までの中から選びなさい。
ア．自己の犯罪行為に関する証拠の隠滅を他人に教唆し実行させた場合，証拠隠滅罪の教唆犯は成立しない。
イ．自己の配偶者の犯罪行為に関する証拠を隠滅した場合，証拠隠滅罪が成立する。
ウ．貸金返還請求訴訟における被告が，同訴訟の証拠である消費貸借契約書の原本を焼却した場合，証拠隠滅罪は成立しない。
エ．被告人の友人が，被告人の犯罪行為に関する偽証を証人に教唆し実行させた場合，証拠偽造罪の教唆犯は成立しない。
オ．いまだ捜査が開始されていない段階で，他人の犯罪行為に関する証拠を隠滅した場合，証拠隠滅罪が成立する。`,c1:"１．１個",c2:"２．２個",c3:"３．３個",c4:"４．４個",c5:"５．５個",c6:"",c7:"",c8:"",a:"4"},{year:"2021",num:"15",subject:"kei",q:`刑法第６５条について，学生Ａ，Ｂ及びＣが次の【会話】のとおり議論している。【会話】中の①から⑪までの（ ）内に後記【語句群】から適切な語句を入れた場合，正しいものの組合せは，後記１から５までのうちどれか。なお，①から⑪までの（ ）内にはそれぞれ異なる語句が入る。
【会 話】
学生Ａ．私は，「違法の連帯性，責任の個別性」の原則を強調する立場から，（①）と考えます。
学生Ｂ．Ａ君の見解には，（②）との批判がありますね。私は，刑法第６５条第１項が「共犯とする」，同条第２項が「通常の刑を科する」とそれぞれ規定していることに着目し，（③）と考えます。
学生Ｃ．ただ，Ｂ君の見解には，（④）との批判がありますね。刑法第６５条第１項が身分によって構成すべき犯罪を問題とし，同条第２項が身分によって刑の軽重がある犯罪を問題としていることに着目し，（⑤）と考えるべきではないかな。
学生Ｂ．でも，Ｃ君の見解にも，（⑥）との批判がありますね。ところで，Ｃ君の見解だと，甲が知人の乙を唆して乙の嬰児の生存に必要な食事をさせなかった事例では，甲の罪責はどうなりますか。
学生Ｃ．私は，刑法第２１７条（遺棄）と同法第２１８条（保護責任者遺棄等）の「遺棄」とは，行為者と要扶助者との間の場所的離隔を生じさせることをいい，同法第２１７条では作為による遺棄のみが処罰されていると考え，また，同法第２１８条の「必要な保護をしなかった」とは，場所的離隔を生じさせることなく要扶助者を不保護状態に置くことをいうと考えます。そうすると，同条の罪のうち，作為による保護責任者遺棄罪は（⑦）犯，保護責任者不保護罪は（⑧）犯になるため，乙とその嬰児との間に場所的離隔が生じていない本件では，甲には（⑨）と考えます。
学生Ａ．しかし，Ｃ君の見解では，甲が乙を唆して乙の嬰児を山に捨てさせた事例では，甲に（⑩）ため，不均衡な結論になるのではないかな。私は，保護責任者という身分は，必要な保護をしなかったことの違法性を基礎付け，遺棄の違法性を加重するため，（⑪）と考えます。したがって，私の見解からは，いずれの事例でも，甲には（⑨）と考えます。
【語句群】
ａ．刑法第６５条第１項は真正身分犯の成立及び科刑についての規定であり，同条第２項は不真正身分犯の成立及び科刑についての規定である
ｂ．刑法第６５条第１項は身分が違法性に関係する場合についての規定であり，同条第２項は身分が責任に関係する場合についての規定である
ｃ．刑法第６５条第１項は真正身分犯・不真正身分犯を通じて共犯の成立についての規定であり，同条第２項は不真正身分犯の科刑についての規定である
ｄ．犯罪の成立と科刑が分離されることになる
ｅ．真正身分犯が身分を連帯的に作用させ，不真正身分犯が身分を個別的に作用させることの実質的根拠が明らかでない
ｆ．身分が違法性に関係する場合と責任に関係する場合を区別することは困難
ｇ．責任身分
ｈ．違法身分
ｉ．真正身分
ｊ．不真正身分
ｋ．刑法第２１８条の罪の教唆犯が成立する
ｌ．刑法第２１７条の罪の教唆犯が成立する`,c1:"１．①ｂ ⑤ａ ⑨ｋ",c2:"２．②ｄ ⑥ｅ ⑪ｈ",c3:"３．②ｆ ⑦ｉ ⑧ｊ",c4:"４．③ｃ ④ｄ ⑪ｇ",c5:"５．③ｃ ⑥ｆ ⑩ｌ",c6:"",c7:"",c8:"",a:"1"},{year:"2021",num:"16",subject:"kei",q:"放火の罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものを２個選びなさい。",c1:"１．甲は，Ａが所有する自動二輪車に放火するため，これに使用するガソリンとライターを所持して同自動二輪車に近づいたが，甲に不審を抱いた警察官から職務質問を受け，放火するに至らなかった。この場合，甲には，放火予備罪は成立しない。",c2:"２．甲は，自己が所有する無人の木造倉庫に放火してこれを焼損し，よって公共の危険を生じさせ，その結果，Ａが居住する木造家屋に延焼させたが，その延焼についての認識はなかった。この場合，甲には，延焼罪は成立しない。",c3:"３．甲は，自己が所有する自動二輪車に放火してこれを焼損し，よって公共の危険を生じさせたが，その公共の危険が生じることについての認識はなかった。この場合，甲には，建造物等以外放火罪は成立しない。",c4:"４．甲は，隣人Ａが居住する木造家屋を焼損しようと考え，同家屋から１メートル離れた位置にある自己が所有する無人の木造倉庫に放火してこれを焼損したが，同家屋に延焼する危険を生じさせるにとどまった。この場合，甲には，現住建造物等放火未遂罪は成立しない。",c5:"５．甲は，Ａが１人で居住しており，他に誰もいなかった木造家屋内でＡを殺害し，その直後，同家屋に放火してこれを焼損した。この場合，甲には，現住建造物等放火罪は成立しない。",c6:"",c7:"",c8:"",a:"15"},{year:"2021",num:"17",subject:"kei",q:"正当防衛（刑法第３６条第１項）に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものを２個選びなさい。",c1:"１．刑法第３６条第１項における「急迫」というには，法益の侵害が現に存在していることを要する。",c2:"２．刑法第３６条第１項における「やむを得ずにした行為」というには，反撃行為が権利を防衛する手段として必要最小限度のものであること，すなわち侵害に対する防衛手段として相当性を有するものであることを要する。",c3:"３．急迫不正の侵害がないのにあると誤信して，防衛の意思で反撃行為を行った場合でも，正当防衛が成立し得る。",c4:"４．刑法第３６条第１項にいう「権利」は，個人的法益に限られ，国家的・社会的法益は，これに含まれない。",c5:"５．刑法第３６条第１項における「不正の侵害」というには，可罰的な行為であることを要しない。",c6:"",c7:"",c8:"",a:"25"},{year:"2021",num:"18",subject:"kei",q:"強盗の罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．甲は，銭湯の脱衣場で窃盗をしようと考え，客の財布を手に取って在中する金額を確認中，その様子を目撃した乙から声を掛けられたため，逮捕を免れる目的で，乙に反抗を抑圧するに足りる程度の暴行を加えて加療約１か月間を要する傷害を負わせた。この場合，甲には，事後強盗罪及び強盗致傷罪が成立し，両罪は観念的競合となる。",c2:"２．甲は，電車内で寝ていた乙の財布を盗んで電車を降りたが，乙が目を覚まして追い掛けてきたため，逮捕を免れる目的で，乙に暴行を加えたところ，乙が転倒して重傷を負い，反抗が抑圧された状態に至った。この場合，甲の暴行の程度を問わず，甲には，強盗致傷罪が成立する。",c3:"３．甲は，留守宅に侵入して窃盗をしようと考え，金品を物色中に家人が帰ってきたら同人に反抗を抑圧するに足りる程度の脅迫を加えて逃げる意図でサバイバルナイフを携帯し，住宅街を徘徊して侵入に適した留守宅を探したが，これを発見できず，侵入を断念した。この場合，甲には，強盗予備罪が成立する。",c4:"４．甲は，窃盗の目的で乙宅に侵入し，金品を物色中，乙に発見されたため，この機会に乙に暴行を加えて金品を奪おうと考え，乙に反抗を抑圧するに足りる程度の暴行を加え，金品を奪った。この場合，甲には，事後強盗罪が成立する。",c5:"５．甲は，乙宅に侵入して財布を盗んだ後，誰にも発見されずに１キロメートル離れた公園へ移動して財布内の現金を確認した。しかし，甲は，その金額に満足せず再度乙宅で窃盗をしようと考え，乙宅を出た３０分後に乙宅に戻り，その玄関扉を開けようとしたところ，帰宅していた乙に発見されたため，逮捕を免れる目的で，乙に反抗を抑圧するに足りる程度の暴行を加えた。この場合，甲には，事後強盗罪が成立する。",c6:"",c7:"",c8:"",a:"3"},{year:"2021",num:"19",subject:"kei",q:`緊急避難に関する次のアからオまでの各記述を判例の立場に従って検討した場合，正しいものの組合せは，後記１から５までのうちどれか。
ア．豪雨により稲苗が水に沈む危険が生じていたことから，排水のため他人の所有する下流の板堰を損壊した場合，「現在の危難」があるとは認められないので，緊急避難は成立しない。
イ．警察官の適法な逮捕行為に対し，逮捕を免れるためには他に方法がなかったので，第三者を突き飛ばして逃走し，よって同人に傷害を負わせた場合，緊急避難が成立し得る。
ウ．頭に拳銃を突き付けられて，覚醒剤の自己使用を強要され，これを拒むことができず，自己に覚醒剤を注射して使用した場合，犯罪行為の強要の手段は「現在の危難」に当たらないので，緊急避難は成立しない。
エ．吊橋が腐朽し，通行の際の揺れにより通行者の生命，身体等に危険が生じていたため，ダイナマイトを使用して同吊橋を爆破したが，通行制限の強化等適当な手段，方法を講ずる余地があった場合，同爆破行為は，「やむを得ずにした行為」とは認められないので，緊急避難は成立しない。
オ．甲が飼い犬Ａ（時価３０万円相当）を連れて山道を散歩中，乙が設置していた害獣駆除用の罠（時価３万円相当）にＡがかかり，その生命に危険が生じ，Ａを保護するためには他に方法がなかったので，その罠を損壊した場合，緊急避難が成立する（甲及び乙いずれにも過失がなかったものとする。）。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2021",num:"20",subject:"kei",q:`次の【事例】に関する後記アからオまでの各【記述】を判例の立場に従って検討し，正しい場合には１を，誤っている場合には２を選びなさい。
【事 例】
暴力団Ａ組の組員甲は，クラブで飲酒していた際，たまたま入店してきた旧知の暴力団Ｂ組の組員乙に因縁を付けられて口論になり，乙に拳で殴りかかった。乙は，これを避けた上，更に殴りかかろうとしてきた甲の胸部を拳で数回強打した。その数分後，Ｂ組の組員丙は，乙と待ち合わせをしていた上記クラブに到着し，その直後に甲の態度に激高し，いきなり甲の胸部を拳で数回強打した。甲は，全治約１か月間を要する肋骨骨折の傷害を負ったが，同傷害が乙と丙のいずれの暴行によって生じたのかは不明であった。甲は，一旦帰宅したものの怒りが収まらず，何か嫌がらせをしてやろうと考え，金属バットを持ち，覆面で顔を隠してＢ組事務所に行き，その玄関ドアを同バットでたたいて凹損させた。その直後，甲は，Ａ組事務所に行き，Ａ組の組員丁に対し，Ｂ組組員から殴られた腹いせにＢ組事務所の玄関ドアを凹損させたことを話した。丁は，Ｂ組との関係悪化を避けるとともに，甲の刑事責任を免れさせるため，甲との間で，犯行時間帯に甲がＡ組事務所にいたことにする旨の口裏合わせをした。また，丁は，Ｂ組組員複数名による襲撃を受ける可能性もあると考え，万が一に備えて，着衣のポケットに護身用として果物ナイフを入れた。他方，乙及び丙は，上記ドアが凹損させられたとの連絡を受け，甲の仕業だろうと考え，Ａ組事務所へ向かった。乙は，応対に出た丁に対し，「甲を出せ。」と言った。丁は，「何の話だ。」と応じたが，乙は，その態度に憤激し，「しらばっくれるな。」と言い，持っていた拳銃を取り出して丁に突き付けた。丁は，自己の身を守るため，上記ナイフで乙の腹部を１回突き刺し，乙に全治約１か月間を要する腹部刺創の傷害を負わせた。丁は，駆けつけた警察官に逮捕され，その後，逃走していた甲も上記ドアを凹損させた事実で逮捕された。丁は，甲の身柄拘束中，甲の犯行に関する参考人として取調べを受けた際，上記口裏合わせに従い，上記ドアが凹損させられた時間帯に甲がＡ組事務所にいた旨のうその供述をした。
【記 述】
ア．乙が甲の胸部を拳で強打した行為については，甲からの侵害が，乙が甲に因縁を付けたことにより招かれたものである以上，正当防衛又は過剰防衛が成立することはない。
イ．乙は，甲の肋骨骨折について，丙の行為のみにより生じた可能性がある以上，丙との間で共謀が成立していない限り，傷害罪の刑事責任を負わない。
ウ．甲がＢ組事務所の玄関ドアを凹損させた行為については，同ドアが工具を使用すれば容易に取り外せる構造であった場合，建造物損壊罪は成立しない。
エ．丁が果物ナイフで乙の腹部を突き刺した行為については，Ｂ組組員から襲撃を受けることを予期し，凶器ともいえるナイフを準備している以上，その予期の程度にかかわらず，侵害の急迫性を欠くものといえ，正当防衛又は過剰防衛は成立しない。
オ．丁が，甲の犯行に関する参考人として取調べを受けた際，Ｂ組事務所の玄関ドアが凹損させられた時間帯に甲がＡ組事務所にいた旨のうその供述をした行為については，犯人隠避罪が成立する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"22221"},{year:"2020",num:"1",subject:"ken",q:`外国人の人権に関する次のアからウまでの各記述について，ｂの見解がａの見解の根拠となっている場合には１を，そうでない場合には２を選びなさい。
ア．ａ．国は，在留期間中の憲法の基本的人権の保障を受ける行為を在留期間の更新の際に消極的な事情としてしんしゃくすることができる。
ｂ．外国人に対する憲法の基本的人権の保障は，外国人在留制度の枠内で与えられているにすぎない。
イ．ａ．憲法第９３条第２項の「住民」と，憲法第１５条第１項の「国民」とは統一的に理解されるべきであり，憲法第９３条第２項の「住民」は，日本「国民」であることがその前提となっている。
ｂ．地方公共団体の政治・行政は，国の政治・行政と互いに関連しており，地方公共団体が国の事務を処理することもある。
ウ．ａ．憲法第２２条第２項は，「何人も」との文言を用いているため，国籍離脱の自由は，我が国に在留する外国人にもその保障が及ぶ。
ｂ．憲法による基本的人権の保障は，権利の性質上日本国民のみをその対象としていると解されるものを除き，我が国に在留する外国人に対しても等しく及ぶ。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"112"},{year:"2020",num:"2",subject:"ken",q:`インターネット検索事業者に対し，自らの逮捕歴に関し検索結果として表示される情報の削除を求めることの可否について判断した最高裁判所の決定（最高裁判所平成２９年１月３１日第三小法廷決定，民集７１巻１号６３頁）に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．この決定は，個人のプライバシーに属する事実をみだりに公表されない利益が法的保護の対象となるとした上，過去に犯した罪の逮捕歴に係る事実は個人のプライバシーに属する事実に当たるものと判断した。
イ．この決定は，検索事業者の行う情報の収集，整理及び提供がプログラムにより自動的に行われることから，検索事業者が検索結果を表示することは，インターネット上の情報を媒介しているにすぎず，検索事業者自身による表現行為とはいえないとした。
ウ．この決定は，プライバシーに属する事実を公表されない法的利益と，ＵＲＬ等の情報を検索結果として提供する理由に関する諸事情を比較衡量し，前者の法的利益が優越することが明らかな場合には，その情報の削除を求めることができるという判断の枠組を示した。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ× ",a:"3"},{year:"2020",num:"3",subject:"ken",q:`選挙人の投票価値の平等に関する次のアからウまでの各記述について，ｂの見解がａの見解の根拠となっている場合には１を，そうでない場合には２を選びなさい。
ア．ａ．衆議院議員選挙においては，各選挙区間の議員１人当たりの有権者数の比率の較差が１対１を超えることは，憲法上正当化されない。
ｂ．投票価値の平等は，国民の意思を公正かつ効果的に代表するために国会が正当に考慮することのできる他の政策的な目的との関連において，調和的に実現されるべきである。
イ．ａ．参議院議員選挙においては，二院制の下，地域代表の性質を有するという参議院の特殊性により，投票価値の平等の要請が後退するのもやむを得ない。
ｂ．参議院は，国権の最高機関として適切に民意を国政に反映する義務を負っており，衆参両院の選挙制度は同質的とされるべきである。
ウ．ａ．地方議会議員選挙においては，当該地方公共団体の住民が，選挙権行使の資格だけでなく，投票価値においても平等に取り扱われるべきである。
ｂ．憲法第１４条第１項に定める法の下の平等は，選挙権に関しては，国民は全て政治的価値において平等であるべきとする徹底した平等化を志向するものである。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"221"},{year:"2020",num:"4",subject:"ken",q:`思想・良心の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには〇，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．企業内においても労働者の思想，信条等の精神的自由は十分尊重されるべきであることに鑑みると，企業がその労働者に対して特定政党への所属の有無を確認するだけでなく，当該政党に所属しない旨の書面を要求する行為は，それが企業秘密の漏えいという企業秩序違反行為に関する調査の一環として行われたとしても，労働者の思想・信条の自由に対する直接的制約であるから，その経緯や調査方法の相当性にかかわらず，違法性が認められる。
イ．公立学校の卒業式等の式典においてその教員に国旗掲揚の下での国歌斉唱の際に起立斉唱を求めることは，慣例上の儀礼的な所作を求めるものではあるが，自らの歴史観ないし世界観との関係で国歌や国旗に対する敬意の表明には応じ難いと考える者がこれらに対する敬意の表明の要素を含む行為を求められることは，その者の歴史観ないし世界観に由来する行動とは異なる外部的行動を求められることになり，その限りにおいて思想及び良心の自由についての間接的な制約となる面がある。
ウ．政治団体への寄付が強制加入団体である税理士会の目的の範囲内かどうかを判断するに当たっては，会員の思想・信条の自由との関係で，その会員には様々の思想・信条及び主義・主張を有する者が存在することが当然に予定されていること，政治団体に寄付するかどうかは選挙における投票の自由と表裏をなすものとして会員各人が個人的な政治的思想，見解，判断等に基づいて自主的に決定すべき事柄であることなどを考慮することが必要である。`,c1:"１．ア〇 イ〇 ウ〇",c2:"２．ア〇 イ〇 ウ×",c3:"３．ア〇 イ× ウ〇",c4:"４．ア〇 イ× ウ×",c5:"５．ア× イ〇 ウ〇",c6:"６．ア× イ〇 ウ×",c7:"７．ア× イ× ウ〇",c8:"８．ア× イ× ウ× ",a:"5"},{year:"2020",num:"5",subject:"ken",q:`政教分離原則に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．政教分離原則に基づく憲法の諸規定は，我が国における宗教事情の下で信教の自由を確実に実現するためには，単に信教の自由を無条件に保障するのみでは足りず，国家といかなる宗教との結び付きをも排除する必要性が大きかったことから設けられたものであり，国家と宗教との完全な分離を理想とし，国家の非宗教性ないし宗教的中立性を確保しようとしたものである。
イ．憲法第２０条第３項の禁止する「宗教的活動」とは，国及びその機関と宗教とのかかわり合いが相当とされる限度を超え，当該行為の目的が宗教的意義を持ち，その効果が宗教に対する援助，助長，促進又は圧迫，干渉等になるような行為をいうのであり，靖国神社の祭礼に際し，知事が玉串料として公金を支出して奉納した行為は，たとえそれが戦没者の慰霊及びその遺族の慰謝を直接の目的としてされたものであったとしても，これに該当する。
ウ．天皇の即位に伴って行われる皇室の儀式である大嘗祭に際し，知事が公費で出張した上，これに参列し拝礼した行為は，地方公共団体の長という公職にある者の社会的儀礼として，日本国及び日本国民統合の象徴である天皇の即位に祝意を表する目的で行われたものにすぎず，宗教とかかわり合いのある行為とはいえないから，憲法第２０条第３項の禁止する「宗教的活動」には該当しない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"2"},{year:"2020",num:"6",subject:"ken",q:`知る権利に関する次のアからウまでの各記述について，ｂの見解がａの見解の根拠となっている場合には１を，そうでない場合には２を選びなさい。
ア．ａ．マス・メディアの報道に対して反論記事の掲載等を求める権利は，憲法第２１条第１項が保障する表現の自由に含まれる知る権利の一局面であり，同項を直接の根拠として認められる。
ｂ．インターネットの普及によって双方向的な情報流通が可能となり，誰もが自ら情報の発信者となることが容易になった。
イ．ａ．日本放送協会の放送を受信することのできる受信設備を設置した者に受信契約の締結を強制する放送法の規定は，憲法第２１条第１項の保障する情報摂取の自由を制限するものであり，その合憲性は厳格に審査される必要がある。
ｂ．国民の知る権利を実現するためにいかなる放送制度を採用するかは立法裁量の問題である。
ウ．ａ．児童買春その他の犯罪から児童を保護すること等の目的のため，電子掲示板の運営者に届出義務を課した上，一定の書き込みに関する削除義務を課すことは，憲法第２１条第１項に違反する。
ｂ．インターネット上において表現の場を提供する行為は知る権利に資するものとして，憲法第２１条第１項の保障を受ける。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"221"},{year:"2020",num:"7",subject:"ken",q:`憲法第２３条に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法第２３条は，学問研究に関する外部からの干渉を許さない趣旨であるから，先端技術分野においても，研究活動の内容や方法等に対する制限は学会の自主規制等に委ねるべきであり，法律によって制約することは許されない。
イ．判例によれば，普通教育においては，児童生徒には大学の学生のような批判能力がなく，学校や教師を選択する余地も乏しいことなどから，憲法第２３条によっても，普通教育における教師に完全な教授の自由は認められない。
ウ．大学の自治は，大学における研究教育の自由を制度的に保障するために憲法第２３条によって保障されていると解されるから，教授の任免や施設の管理等，研究教育の内容に直接関係しない事項については，大学の自治権は及ばない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"212"},{year:"2020",num:"8",subject:"ken",q:`財産権に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法第２９条は，私有財産制度を制度として保障するものであり，国民の個々の財産権につき基本的人権として保障するものではない。
イ．法律で一旦定められた財産権の内容を事後の法律で変更しても，それが公共の福祉に適合するようにされたものである限り，違憲とはいえない。
ウ．憲法第２９条第３項の「公共のために用ひる」には，道路，ダム等の公共事業のために財産を収用する場合だけでなく，特定の個人が受益者となる場合も含まれることがある。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ× ",a:"5"},{year:"2020",num:"9",subject:"ken",q:`生存権とこれを具体化した法制度に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法第２５条の規定の趣旨に応えて具体的にどのような立法措置を講ずるかの選択決定は，立法府の広い裁量に委ねられているが，何ら合理的理由のない不当な差別的取扱いや，個人の尊厳を毀損するような内容の定めがあれば，憲法第１４条及び第１３条違反の問題を生じることがある。
イ．「健康で文化的な最低限度の生活」は，抽象的かつ相対的な概念であって，その具体的内容は，その時々における経済的・社会的条件，一般的な国民生活の状況等との相関関係において判断決定されるべきものであるが，老齢加算を廃止する保護基準の改定については，不利益変更であることに鑑み，厚生労働大臣に専門技術的かつ政策的見地からの広範な裁量権は認められない。
ウ．障害基礎年金の受給に関し保険料の拠出に関する要件を緩和するかどうかは国の財政事情等にも密接に関連する事項であるが，保険料負担能力のない２０歳以上６０歳未満の者のうち２０歳以上の学生とそれ以外の者との間に障害基礎年金の受給に関し差異が生じた場合，その合憲性については，憲法第２５条及び第１４条の趣旨に照らし，慎重に検討する必要がある。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"4"},{year:"2020",num:"10",subject:"ken",q:`裁判を受ける権利に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．大日本帝国憲法で「法律ニ定メタル裁判官ノ裁判」を受ける権利が保障されていたのに対し，日本国憲法第３２条が保障するのは「裁判所において裁判を受ける権利」であることを踏まえれば，憲法上国民の司法参加がおよそ禁じられていると解すべき理由はない。
イ．性質上純然たる訴訟事件の裁判が，憲法第８２条が定める例外に当たらないにもかかわらず，公開の法廷における対審及び判決によらず非公開でなされた場合には，裁判の公開を定めた憲法第８２条に違反するが，裁判を受ける権利を保障する憲法第３２条に違反することはない。
ウ．憲法第３２条は，訴訟の当事者が訴訟の目的である権利関係について裁判所の判断を求める法律上の利益を有することを前提として，そのような訴訟について本案の裁判を受ける権利を保障したものであって，その利益の有無にかかわらず常に本案につき裁判を受ける権利を保障したものではない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"121"},{year:"2020",num:"11",subject:"ken",q:`主権に関する次のアからエまでの各記述について，国政に関する最高の決定権という意味で主権の概念を用いたものの組合せを，後記１から６までの中から選びなさい。
ア．「日本国ノ主権ハ本州，北海道，九州及四国並ニ吾等ノ決定スル諸小島ニ局限セラルベシ」（ポツダム宣言第８項）というときの「主権」
イ．「日本国民は，（中略）ここに主権が国民に存することを宣言し，この憲法を確定する。」（憲法前文第１項）というときの「主権」
ウ．「政治道徳の法則は，普遍的なものであり，この法則に従ふことは，自国の主権を維持し，他国と対等関係に立たうとする各国の責務であると信ずる。」（憲法前文第３項）というときの「主権」
エ．「天皇は，日本国の象徴であり日本国民統合の象徴であつて，この地位は，主権の存する日本国民の総意に基く。」（憲法第１条）というときの「主権」`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．イとウ",c5:"５．イとエ",c6:"６．ウとエ",c7:"",c8:"",a:"5"},{year:"2020",num:"12",subject:"ken",q:`天皇が国会の開会式に出席して述べる「おことば」の憲法上の位置付けに関する次のアからウまでの各記述について，ｂの見解がａの見解の根拠となっている場合には１を，そうでない場合には２を選びなさい。
ア．ａ．天皇は象徴であり，「おことば」を述べることは象徴としての行為である。
ｂ．象徴という言葉は社会心理的な意味を有するものであり，天皇を象徴と定めた憲法の規定から法的効果を導くことはできない。
イ．ａ．天皇は公人であり，「おことば」を述べることは公人としての行為である。
ｂ．天皇の行為は限定するべきであり，天皇の行為には，憲法が定める国事行為と私的行為の二つしかないと考えるべきである。
ウ．ａ．天皇は憲法が列挙する国事行為を行い，「おことば」を述べることは「儀式を行ふこと」（憲法第７条第１０号）に含まれる。
ｂ．天皇が自ら儀式を主宰する場合だけでなく，式に参列して儀式的・儀礼的行為を行うことも「儀式を行ふこと」と解釈することができる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"221"},{year:"2020",num:"13",subject:"ken",q:`選挙権及び選挙制度に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．選挙権の法的性格について，国政への参加を国民に保障する権利という面のみを有すると考える見解に立っても，かかる権利であると同時に選挙人としての地位に基づいて公務員の選挙に関与する公務という側面も併せ有すると考える見解に立っても，選挙犯罪による被処罰者の選挙権及び被選挙権の停止を定める公職選挙法の規定が，憲法第１４条及び第４４条ただし書に違反する差別的待遇ではないと解することは可能である。
イ．判例は，平成１０年の改正前の公職選挙法が在外日本国民の選挙権を全く認めていなかったことは憲法第１５条第１項，第３項，第４３条第１項等に違反すると解し，さらに，同改正後の公職選挙法附則の規定が，当分の間，在外選挙制度の対象を比例代表選出議員の選挙に限定したことについても，同改正当時，比例代表選出議員の選挙についてだけ在外国民の投票を認めることとしたのには全く理由がなく，上記憲法各条項に違反すると解している。
ウ．判例は，政見放送が民主政治の根幹をなす政治上の表現の自由に基づくものであり，選挙運動の一つの重要な手段である一方，公職選挙法の規定によって禁じられた政見放送としての品位を損なう言動をした場合の責任は，事後的に候補者自身に負わせれば足りることを根拠として，放送事業者が政見放送において用いられた差別的用語を削除した行為を憲法第２１条第１項に違反すると解している。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"4"},{year:"2020",num:"14",subject:"ken",q:`憲法第４１条に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法第４１条の「国権の最高機関」につき，国政全般を統括する機関であるとの見解に立たないとしても，どの国家機関に帰属するのか不明確な権能については国会に属するものと推定することは可能である。
イ．憲法第４１条の「立法」につき，実質的意味の立法を意味しているとの見解に立つと，国民の権利を直接に制限し，義務を課す法規範についてのみ法律で定めれば足り，行政各部の組織の根本部分について法律で定めてはならないこととなる。
ウ．憲法第４１条の「唯一の立法機関」につき，内閣の法律案提出権を肯定する見解に立つと，法律案の提出は立法に不可欠の要素であるが，立法そのものではなく，その準備行為であって，国会が独占しなければならないものではないと解することとなる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"121"},{year:"2020",num:"15",subject:"ken",q:`内閣総理大臣による国務大臣の任命及び罷免に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．内閣総理大臣は国会議員以外の者を国務大臣に任命することができるが，国務大臣の過半数は国会議員の中から選ばなければならない。
イ．内閣総理大臣による国務大臣の任命には天皇の認証が必要であるが，内閣はこの認証に対する助言と承認を拒むことができない。
ウ．内閣総理大臣は任意に国務大臣を罷免することができるが，その効力発生には天皇の認証が必要である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"112"},{year:"2020",num:"16",subject:"ken",q:`違憲判断の方法に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．最高裁判所は，公務員による政党機関誌の配布が国家公務員法違反に問われた堀越事件（最高裁判所平成２４年１２月７日第二小法廷判決，刑集６６巻１２号１３３７頁）において，被告人の配布行為には公務員の職務の遂行の政治的中立性を損なうおそれが実質的に認められず，当該配布行為に罰則規定が適用される限りにおいて憲法第２１条第１項及び第３１条に違反すると判示した。
イ．最高裁判所は，市有地を無償で神社施設の敷地利用に供していた行為が政教分離原則に違反するかが問われた空知太神社訴訟（最高裁判所平成２２年１月２０日大法廷判決，民集６４巻１号１頁）において，同じ市による別の神社敷地の譲与行為に対する合憲判断と異なり，当該事案における敷地利用提供行為については憲法第８９条及び第２０条第１項後段に違反すると判示した。
ウ．最高裁判所は，郵便法の損害賠償責任免除・制限規定が憲法第１７条に違反するかが問われた訴訟（最高裁判所平成１４年９月１１日大法廷判決，民集５６巻７号１４３９頁）において，当該事案では郵便業務従事者の重過失により損害が生じており，郵便法はそのような場合にまで賠償責任の免除・制限を予定するものではないので，郵便法の上記規定が当該事案に適用される限りにおいて憲法第１７条に違反すると判示した。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"212"},{year:"2020",num:"17",subject:"ken",q:`地方自治に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．一の地方公共団体のみに適用される特別法の制定に当たっては，国による地方自治権の侵害を防止するとともに，地方公共団体の個性の尊重及び地方行政における民意の尊重のため，憲法第９５条により，当該地方公共団体の住民の投票においてその過半数を得ることが要求されているが，これまでに同条に基づく手続が実際にとられた例はない。
イ．判例によれば，憲法第８４条に規定する租税法律主義の下では，地方公共団体が国とは別途に課税権の主体となることは憲法上予定されておらず，地方公共団体が条例により租税を賦課する場合には，租税の税目，課税客体，課税標準，税率等の事項について，法律で定められた具体的な準則に基づかなければならない。
ウ．判例は，ある事項について国の法令中に明文の規定がない場合でも，当該法令全体からみて，規定の欠如が当該事項についていかなる規制をも施すことなく放置すべきものとする趣旨であると解されるときは，当該事項について条例で規律することが法令違反になり得るとしている。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"7"},{year:"2020",num:"18",subject:"ken",q:`条約に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．条約締結の国会承認については，衆議院の優越が認められており，条約承認の議案は，先に衆議院に提出しなければならない。
イ．条約を締結する権限は内閣にあるが，批准を要する条約についての批准書の認証は天皇の国事行為である。
ウ．条約は，国会による承認及び内閣による締結の後，天皇が国事行為としてこれを公布することによって有効に成立する。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ× ",a:"6"},{year:"2020",num:"19",subject:"ken",q:`次の対話は，憲法改正に関する教授と学生の対話である。教授の各質問に対する次のアからウまでの学生の各回答について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
教授．憲法第９６条第１項は，「この憲法の改正は，各議院の総議員の３分の２以上の賛成で，国会が，これを発議し，国民に提案してその承認を経なければならない。」と規定しているが，この「総議員」の意味には争いがあって，①法定議員数と解する説と，②現に各議院に在職する議員数の総数とする説があるね。②説の根拠として考えられるものは何かな。
ア．定足数が一定になり「総議員」の数を巡る争いを避けられること，憲法改正の発議要件を厳格にして議決を慎重にさせるのが憲法の趣旨に合致することなどがあります。
教授．それから，改正案を国会に提案する権限を内閣が有するか否かについても，肯定説と否定説とが対立しているね。肯定説に対しては，否定説の立場から，内閣の発案権を認めると国会の自主的審議権が害されるとの批判がされているが，この批判に対する肯定説の立場からの反論として，どのようなものが考えられるだろうか。
イ．内閣に発案権を認めたとしても，各議院は内閣の改正案に対する修正権を持つので，国会の自主的審議権を害するおそれはないとの反論が可能だと思います。
教授．憲法改正は，改正案が国民に提案され，国民投票が行われ，その過半数の賛成で承認されるのでなければ成立しないね。「過半数」の意味については，①有権者総数の過半数か，②無効投票を含めた投票総数の過半数か，③有効投票総数の過半数か，を巡り議論があるところだが，①説に対する批判として考えられるものを挙げてみよう。
ウ．①説に対しては，棄権者が全て改正案に反対の意思と評価されてしまう点で妥当ではないとの批判が考えられます。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"211"},{year:"2020",num:"20",subject:"ken",q:`憲法の法源に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．硬性憲法の原則を重視する立場をとっても，憲法の空白を埋める事実が反復・継続された場合に，国家機関を政治的に拘束する憲法慣習の成立を認めることができる。
イ．判例が，後の裁判を法的に拘束するという立場をとるならば，法律の合憲性に関する最高裁判所の判例を変更することは，後の最高裁判所であっても，許されない。
ウ．条約の国内法的効力は憲法に劣るという立場をとるならば，裁判所が，立法事実の存否を判断するための資料として，国際人権条約を参照することは，許されない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"4"},{year:"2020",num:"1",subject:"min",q:`補助に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．家庭裁判所は，精神上の障害により事理を弁識する能力が著しく不十分であり保佐開始の原因がある者についても，補助開始の審判をすることができる。
イ．本人以外の者の請求により補助開始の審判をするには，家庭裁判所が相当と認める場合を除き，本人の同意がなければならない。
ウ．補助開始の原因が消滅したときは，家庭裁判所は，職権で補助開始の審判を取り消すことができる。
エ．補助人の同意を得なければならない行為について，補助人が被補助人の利益を害するおそれがないにもかかわらず同意をしないときは，家庭裁判所は，被補助人の請求により，補助人の同意に代わる許可を与えることができる。
オ．家庭裁判所が特定の法律行為について補助人に代理権を付与する旨の審判をした場合であっても，被補助人は，その法律行為を自らすることができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2020",num:"2",subject:"min",q:`法人に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．法人は，その定款に記載された目的に含まれない行為であっても，その目的遂行に必要な行為については，権利能力を有する。
イ．理事が法人の機関として不法行為を行い，法人が不法行為責任を負う場合には，その理事は，個人として不法行為責任を負うことはない。
ウ．法人の代表者が職務権限外の取引行為をし，当該行為が外形的に当該法人の職務行為に属すると認められる場合であっても，相手方がその職務行為に属さないことを知っていたときは，法人は，代表者の当該行為に基づいて相手方に生じた損害の賠償責任を負わない。
エ．外国人が享有することのできない権利であっても，認許された外国法人は，日本において成立する同種の法人と同様に，その権利を取得することができる。
オ．設立登記が成立要件となっている法人について，設立登記がされていなくても，法人としての活動の実態がある場合には，予定されている定款の目的の範囲内での権利能力が認められる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2020",num:"3",subject:"min",q:`錯誤に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．錯誤を理由とする意思表示の取消しの可否について，錯誤の重要性は，表意者を基準として判断される。
イ．ＡのＢに対する意思表示がＡの錯誤を理由として取り消すことができるものである場合，Ｂも，Ａの錯誤を理由としてＡの意思表示を取り消すことができる。
ウ．負担のない贈与について贈与者であるＡの錯誤を理由とする取消しがされたが，受贈者であるＢが既に当該贈与契約に基づいて給付を受けていた場合，Ｂは，給付を受けた時に当該贈与契約が取り消すことができるものであることを知らなかったときは，現に利益を受けている限度において返還の義務を負う。
エ．ＡのＢに対する意思表示が錯誤を理由として取り消された場合，Ａは，その取消し前に利害関係を有するに至った善意無過失のＣに，その取消しを対抗することができない。
オ．ＡのＢに対する意思表示が錯誤に基づくものであって，その錯誤がＡの重大な過失によるものであった場合，Ａは，ＢがＡに錯誤があることを知り，又は重大な過失によって知らなかったときを除いて，錯誤を理由としてその意思表示を取り消すことができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2020",num:"4",subject:"min",q:`Ａは，Ｂの代理人と称して，Ｃとの間でＢの所有する土地をＣに売却する旨の売買契約を締結したが，実際にはその契約を締結する代理権を有していなかった。この事例に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡがＣに対する無権代理人の責任を負う場合，Ａは売買契約の履行をするか，又は損害賠償責任を負うかを自ら選択することができる。
イ．Ｂが売買契約を追認した場合，ＡはＣに対する無権代理人の責任を負わない。
ウ．代理権を有しないことを知らないことにつきＣに過失がある場合，Ａは，自己に代理権がないことを知っていたときであっても，Ｃに対する無権代理人の責任を負わない。
エ．売買契約の締結後にＡがＤと共にＢを相続した場合，Ｄの追認がない限り，Ａの相続分に相当する部分においても，売買契約は当然に有効となるものではない。
オ．売買契約の締結後にＢがＡを単独で相続した場合，売買契約は当該相続により当然に有効となるものではない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2020",num:"5",subject:"min",q:`消滅時効に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．債務不履行に基づく損害賠償請求権は，債権者が権利を行使することができることを知った時から５年間行使しない場合，時効によって消滅する。
イ．詐欺を理由とする取消権は，その行為の時から５年間行使しない場合，時効によって消滅する。
ウ．不法行為に基づく損害賠償請求権は，不法行為の時から２０年間行使しない場合，時効によって消滅する。
エ．１０年より短い時効期間の定めのある権利が確定判決によって確定した場合，その時効期間は，短い時効期間の定めによる。
オ．定期金の債権は，債権者が定期金の債権から生ずる金銭その他の物の給付を目的とする各債権を行使することができることを知った時から１０年間行使しない場合，時効によって消滅する。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"3"},{year:"2020",num:"6",subject:"min",q:`物権的請求権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａが地上権を有する甲土地に無断でＢがその所有する自動車を放置した場合，Ａは，Ｂに対し，地上権に基づく妨害排除請求権の行使として自動車を撤去するよう求めることはできない。
イ．Ａが所有する鉄塔が自然災害により傾き，鉄塔に隣接するＢの所有する甲建物を損傷させるおそれが生じた場合において，Ｂが所有権に基づく妨害予防請求権の行使として甲建物を損傷させないための措置を講ずるよう求めたときは，Ａは，過去に実際に一度でも甲建物を損傷させたことがないことを理由としてＢの請求を拒むことができる。
ウ．Ａの所有する自動車がＢの所有する山林に無断で放置され，２０年が経過した場合において，ＢがＡに対して所有権に基づく妨害排除請求権の行使として自動車の撤去を求めたときは，Ａは，妨害排除請求権の消滅時効を援用してＢの請求を拒むことができる。
エ．Ａが，Ａ所有の甲土地に洪水のため流されてきた自動車の所有者であるＢに対し，所有権に基づく妨害排除請求権の行使として自動車を撤去するよう求めた場合，Ｂは，所有権侵害について故意過失がないことを主張立証しても，Ａの請求を拒むことはできない。
オ．Ａの所有する甲土地に無断でＢがその所有する自転車を放置した場合において，ＡがＢに対して所有権に基づく妨害排除請求権の行使として自転車を撤去するよう求めたときは，Ｂは，自己が未成年者であることを理由としてＡの請求を拒むことはできない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2020",num:"7",subject:"min",q:`不動産の物権変動に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａ所有の甲土地をＡがＢに売却し，その後Ａが甲土地をＣに対し売却してその旨の登記がされ，更にＣが甲土地をＤに対し売却してその旨の登記がされた場合において，ＣがＢに対する関係で背信的悪意者に当たるときは，Ｂは，Ｄに対し，甲土地の所有権を登記がなくても主張することができる。
イ．Ａ所有の甲土地をＡがＢに売却し，その旨の登記がされたが，ＡがＢの詐欺を理由としてＡＢ間の売買契約を取り消した後，この取消しについて善意無過失のＣに対しＢが甲土地を売却し，その旨の登記がされた場合，Ａは，Ｃに対し，甲土地の所有権を登記がなくても主張することができる。
ウ．Ａ所有の甲土地をＡがＢに売却し，更にＢがＣに売却し，それぞれその旨の登記がされた場合において，その後，ＡがＡＢ間の売買契約をＢの甲土地の代金不払を理由に解除したときは，Ａは，Ｂの代金不払の事実を知らないＣに対し，甲土地の所有権を主張することができない。
エ．Ａ所有の甲土地をＡがＢに売却し，その旨の登記がされた場合において，その後，これより前から所有の意思をもって甲土地を占有していたＣについて取得時効が完成したときは，Ｃは，Ｂに対し，甲土地の所有権を主張することができない。
オ．甲土地を所有していたＡが遺言を残さずに死亡し，ＢとＣがＡを共同相続し，Ｃが甲土地をＢＣの共有とする共同相続登記をしてＣの持分にＤのために抵当権を設定し，その旨の登記がされた場合において，その後，ＢＣの遺産分割協議により甲土地がＢの単独所有とされたときは，Ｂは，Ｄに対し，抵当権設定登記の抹消を請求することができない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2020",num:"8",subject:"min",q:`即時取得に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａは，自己所有の宝石をＢに売却して現実の引渡しをした。その後，Ｂは，宝石をＣに売却して現実の引渡しをした。さらに，その後，Ａは，ＡＢ間の売買契約をＢの強迫を理由として取り消した。この場合，Ｃは，即時取得により宝石の所有権を取得することはない。
イ．未成年者Ａは，自己所有の宝石をＢに売却して現実の引渡しをした。その後，Ａは，ＡＢ間の売買契約を未成年であることを理由として取り消した。この場合，Ｂが即時取得により宝石の所有権を取得することはない。
ウ．Ａは，Ｂ所有の宝石をＢから賃借して引渡しを受けた上，宝石をＣに預けていたが，宝石をＤに売却し，Ｃに対し，宝石を今後Ｄのために占有するよう命じ，Ｄがこれを承諾した。この場合，Ｄは，宝石がＡ所有であると信じ，かつ，そのことに過失がなかったとしても，即時取得により宝石の所有権を取得することはない。
エ．Ａは，Ｂが置き忘れた宝石を，自己所有物であると過失なく信じて持ち帰った。この場合，Ａが即時取得により宝石の所有権を取得することはない。
オ．Ａは，ＢがＣから賃借していた宝石を盗み，Ｄに贈与した。Ｄが宝石をＡの所有物であると過失なく信じて現実の引渡しを受けた場合，Ｂは，宝石の盗難時から２年間は，Ｄに宝石の回復を請求することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2020",num:"9",subject:"min",q:`占有の訴えに関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａは自己の所有するコピー機をＢに賃貸していたが，Ｂはコピー機の賃貸借契約が終了した後もコピー機を使用し続け，Ａに返還しなかった。この場合，Ａは，Ｂに対し，占有回収の訴えによりコピー機の返還を請求することができる。
イ．Ａは，底面に「所有者Ａ」と印字されたシールを貼ってある自己所有のパソコンをＢに窃取された。その後，Ｂは，パソコンの外観に変更を加えることなく，パソコンを盗難の事情を知らないＣに譲渡した。この場合，Ａは，Ｃに対し，占有回収の訴えにより同パソコンの返還を請求することはできない。
ウ．Ａは自己の所有する工作機械をＢに賃貸していたが，Ｂは，工作機械の賃貸借契約継続中に工作機械をＣに窃取された。この場合，Ｂは，Ａから独立して，Ｃに対して占有回収の訴えを提起することができる。
エ．Ａは，自己の所有する自転車をＢに詐取された。この場合，Ａは，Ｂに対し，占有回収の訴えにより自転車の返還を請求することができる。
オ．Ａは，別荘地に土地を所有していた。その隣地の所有者であったＢは，Ａに無断で境界を越えてＡ所有の土地に塀を作り始め，２年後にその塀が完成した。Ａは，この時点において，Ｂに対し，占有保持の訴えによりその塀の撤去を請求することはできない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2020",num:"10",subject:"min",q:`地上権に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．地上権者は，地上権設定者に対し，その地上権の設定登記を請求する権利を有する。
イ．約定による地上権の存続期間は，２０年以上５０年以下の範囲内で定めなければならない。
ウ．地上権は，工作物又は竹木を所有する目的で土地を使用する権利である。
エ．地下又は空間は，工作物を所有するため，上下の範囲を定めて地上権の目的とすることができる。
オ．地上権は，地上権設定者の承諾を得なければ，譲渡することができない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2020",num:"11",subject:"min",q:`先取特権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．法人に対して電気料金債権を有する者は，供給した電気がその代表者及びその家族の生活に使用されていた場合，法人の財産について一般の先取特権を有する。
イ．旅館に宿泊客が持ち込んだ手荷物がその宿泊客の所有物でなく他人の所有物であった場合，旅館主は，その手荷物がその宿泊客の所有物であると過失なく信じたときであっても，その手荷物について旅館の宿泊の先取特権を行使することはできない。
ウ．動産の売主は，買主がその動産の転売によって得た売買代金債権につき，買主の一般債権者が当該売買代金債権を差し押さえた後は，動産の売買の先取特権に基づく物上代位権を行使することはできない。
エ．不動産の工事の先取特権の効力を保存するためには，工事を始める前にその費用の予算額を登記しなければならない。
オ．建物賃貸借において，賃借権が適法に譲渡され，譲受人が建物に動産を備え付けた場合，賃貸借関係から生じた賃貸人の債権が譲渡前に発生していたものであっても，不動産の賃貸の先取特権はその動産に及ぶ。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2020",num:"12",subject:"min",q:`債務者Ａは債権者ＢのためにＡの所有する不動産甲に抵当権を設定し，その旨の登記がされた。この場合における抵当権の消滅に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａは，抵当権を実行することができる時から２０年が経過すれば，被担保債権が消滅していなくても，抵当権が時効により消滅したと主張することができる。
イ．甲について，その後，ＡがＣのために抵当権を設定し，その旨の登記がされた場合において，ＢがＡから甲を買い受けたときは，Ｂの抵当権は消滅しない。
ウ．Ａの一般債権者が甲につき強制競売の申立てをし，当該強制競売手続において甲が売却されたときは，Ｂの抵当権は消滅する。
エ．甲について，その後，Ａから譲渡担保権の設定を受けたＤは，譲渡担保権の実行前であっても，抵当権消滅請求をすることにより，Ｂの抵当権を消滅させることができる。
オ．甲が建物である場合において，Ａが故意に甲を焼失させたときは，Ｂの抵当権は消滅しない。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"3"},{year:"2020",num:"13",subject:"min",q:`債務者Ａが債権者Ｂのために自己の所有する不動産に根抵当権を設定した場合に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ｂは，元本の確定前は，Ａに対する他の債権者Ｃに対してその順位を譲渡することができる。
イ．Ｂの根抵当権にＤのために転根抵当権が設定され，ＢがＡに転根抵当権の設定の通知をした場合，Ａは，元本の確定前であれば，Ｄの承諾を得なくてもＢに弁済することができる。
ウ．元本の確定前に，Ｂが根抵当権によって担保されていた債権をＥに譲渡した場合，それに伴って根抵当権もＥに移転する。
エ．後順位抵当権者Ｆがいる場合，Ａ及びＢが元本確定期日を変更するためには，Ｆの承諾が必要である。
オ．Ｂが数個の不動産について根抵当権を有する場合，同一の債権の担保として数個の不動産の上に根抵当権が設定された旨の登記がその設定と同時にされたときを除き，各不動産の代価についてそれぞれの極度額まで優先権を行使することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2020",num:"14",subject:"min",q:`譲渡担保に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．所有する土地に譲渡担保権を設定した債務者は，債務の弁済期が経過した後は，債権者が担保権の実行を完了する前であっても，債務の全額を弁済して目的物を受け戻すことはできない。
イ．所有する機械に譲渡担保権を設定して譲渡担保権者に現実の引渡しをした債務者Ａは，その債務の弁済をする場合，債務の弁済と譲渡担保権者のＡに対する目的物の引渡しとの同時履行を主張することはできない。
ウ．債務者Ａが所有する構成部分の変動する在庫商品に債権者Ｂのために譲渡担保権が設定された後，商品が滅失し，その損害をてん補するための損害保険金請求権をＡが取得したときは，Ａが営業を継続しているか否かにかかわらず，Ｂは，当該保険金請求権に対して物上代位権を行使することができる。
エ．土地の賃借人が借地上に所有する建物に譲渡担保権を設定した場合，その効力が土地の賃借権に及ぶことはない。
オ．譲渡担保権によって担保されるべき債権の範囲は，強行法規や公序良俗に反しない限り，設定契約の当事者間において元本，利息及び遅延損害金について自由に定めることができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2020",num:"15",subject:"min",q:`ＡとＢは，Ａが所有する骨董品甲をＢに１００万円で売却する旨の売買契約を締結した。この事例に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．売買契約の締結後，Ｂが代金１００万円を支払ったが，引渡期日前に，ＡがＢに対して甲を引き渡すつもりは全くないと告げ，Ｂの働きかけにもかかわらず翻意しないときは，Ｂは，引渡期日の到来を待つことなく，Ａに対し，債務の履行に代わる損害の賠償を請求することができる。
イ．売買契約の締結の前日に甲が焼失していたときは，当該売買契約は効力を生じない。
ウ．売買契約の締結後，Ｂが代金１００万円を支払ったが，Ａが甲をＢに引き渡す前に，甲がＢの責めに帰すべき事由により焼失した場合において，Ａが甲の焼失による損害をてん補するために支払われる損害保険金７０万円を得たときは，Ｂは，Ａに対し，７０万円の支払を請求することができる。
エ．売買契約の締結後，Ａが甲をＢに引き渡す前に，甲が第三者の失火により焼失したときは，Ｂの代金支払債務は当然に消滅する。
オ．Ａが引渡期日に甲の引渡しの提供をしたところ，Ｂが正当な理由なく受領を拒絶したため，Ａの下で甲を保管中に，Ａの重過失により甲が滅失したときは，Ｂは，代金の支払を拒むことができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2020",num:"16",subject:"min",q:`Ａは，その債権者を害することを知りながら，所有する骨董品甲をＢに贈与し，その際，Ｂも甲の贈与がＡの債権者を害することを知っていた。この事例におけるＡの債権者Ｃによる詐害行為取消権行使に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ｃが詐害行為取消訴訟を提起する場合，Ａを被告としなければならない。
イ．Ｂが，甲の贈与がＡの債権者を害することを知っていたＤに甲を売却し，引き渡した場合，Ｃは，Ｄに対し，ＢＤ間の甲の売買の取消しを請求することができる。
ウ．Ｂが，甲の贈与がＡの債権者を害することを知っていたＤに甲を売却し，引き渡した場合，Ｃは，Ｂに対し，ＡＢ間の甲の贈与の取消しを請求することができる。
エ．Ｃによる詐害行為取消請求を認容する確定判決の効力は，Ａの全ての債権者に対してもその効力を有する。
オ．Ｂが，甲の贈与がＡの債権者を害することを知っていたＤに甲を売却し，引き渡した場合において，ＣのＤに対する詐害行為取消請求を認容する判決が確定したときは，Ｄは，Ｂに対し，代金の返還を請求することができる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"5"},{year:"2020",num:"17",subject:"min",q:`ＡＢＣは，Ｄに対して，６０万円の借入金債務（以下「甲債務」という。）を連帯して負担し，負担部分は均等とする合意をしていた。この事例に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＤがＡに対して甲債務の支払請求訴訟を提起し，請求を認容する判決が確定した場合において，Ｄ及びＢが別段の意思を表示していないときは，甲債務の消滅時効は，Ｂについても判決確定の時から新たにその進行を始める。
イ．ＤがＣに対して甲債務を免除する意思表示をした場合において，Ｄ及びＡが別段の意思を表示していないときは，ＤがＡの債務を免除する意思を有していなかったとしても，Ｄは，Ａに対して６０万円の支払を請求することはできない。
ウ．甲債務と相殺適状にある３０万円の乙債務をＤがＣに対して負担している場合において，Ｃが乙債務につき相殺を援用しない間に，ＤがＡに６０万円の支払を請求したときは，Ａは，２０万円についてその支払を拒むことができる。
エ．Ｂは，甲債務の履行期にＤに対して１８万円を支払った場合，Ａ及びＣに求償することはできない。
オ．甲債務と相殺適状にある２０万円の乙債務をＤがＣに対して負担している場合において，Ａが，Ｃが甲債務の連帯債務者であることを知りながら，Ｃに通知せずにＤに６０万円を支払ってＣに求償し，Ｃが乙債務との相殺をもってＡに対抗したときは，Ａは，Ｄに対し，相殺によって消滅すべきであった乙債務２０万円の支払を請求することができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2020",num:"18",subject:"min",q:`ＡはＢ銀行に預金口座を開設し，金銭を預け入れた。この事例に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ｃが，Ｂ銀行のＤの預金口座に振込みをするつもりで，誤ってＡの預金口座への１００万円の振込みをＣの取引銀行に依頼し，その振込みが実行された場合，Ｃは，Ｂ銀行に対し，１００万円の支払を請求することができる。
イ．Ａが死亡してＥとＦがＡを相続した場合，Ｅは単独で，Ｂ銀行に対し，Ａ名義の預金口座の取引経過の開示を求めることができる。
ウ．ＡがＢ銀行に対して有する預金債権について，譲渡はできない旨の特約がされていた場合，ＡがＧとの間で，その預金債権をＧに譲渡する契約をしても，Ｇが特約について悪意又は重過失であったときは，その譲渡は効力を生じない。
エ．Ａの預金口座に係る預金が定期預金の場合，Ｂ銀行は，やむを得ない事由がなければ，Ａの同意なしに満期前に預金を払い戻すことはできない。
オ．ＨがＡに対する代金債務の全額をＡＨ間の合意によりＢ銀行のＡの預金口座への振込みによって支払った場合，その債務は，Ｈの振込みによってＡがＢ銀行に対して同額の預金の払戻しを請求する権利を取得した時に，弁済により消滅する。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2020",num:"19",subject:"min",q:`弁済による代位に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．物上保証人は，被担保債権を弁済した場合，代位により取得した被担保債権につき，対抗要件を備えなくても，これを行使することができる。
イ．保証人は，被担保債権の一部を弁済したが残債務がある場合，その弁済をした価額の限度において，代位により取得した被担保債権及びその担保権を単独で行使することができる。
ウ．保証人Ａと物上保証人Ｂとの間で，Ａが自己の弁済した全額につき債権者に代位することができる旨の特約をした場合において，弁済をしたＡが債権者に代位してＢ所有の不動産上の第一順位の抵当権を行使するときは，Ａはその特約の効力を当該不動産の後順位抵当権者に主張することはできない。
エ．債権者が故意に担保を減少させたとしても，そのことについて取引上の社会通念に照らして合理的な理由がある場合，保証人は，その担保の減少に基づく免責を主張することはできない。
オ．債権者が過失により担保を減少させた後に物上保証人から抵当目的不動産を譲り受けた者は，物上保証人と債権者との間に債権者の担保保存義務を免除する旨の特約がされていたために担保の減少に基づく免責が生じていなかった場合，債権者に対して担保の減少に基づく自己の免責を主張することはできない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2020",num:"20",subject:"min",q:`安全配慮義務に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．安全配慮義務違反を理由とする債務不履行に基づく損害賠償を請求する訴訟においては，原告は，安全配慮義務の内容を特定し，義務違反に該当する事実を主張立証する責任を負う。
イ．雇用契約上の安全配慮義務違反により死亡した者の遺族が債務不履行に基づく損害賠償を請求する場合には，遺族固有の慰謝料を請求することはできない。
ウ．元請企業は，下請企業に雇用されている労働者に対しても，特別な社会的接触の関係に入ったものとして，信義則上，安全配慮義務違反を理由とする債務不履行に基づく損害賠償債務を負うことがある。
エ．安全配慮義務違反を理由とする債務不履行に基づく損害賠償債務は，損害発生の時から履行遅滞に陥る。
オ．国の公務員である運転者Ａが公務遂行中に道路交通法上の通常の注意義務に違反して自動車事故を起こし，同乗していた国の公務員Ｂが負傷した場合，国は，Ｂに対し，安全配慮義務違反を理由とする債務不履行に基づく損害賠償債務を負う。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2020",num:"21",subject:"min",q:`法定利率及び約定利率に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．利息を生ずべき債権について約定利率の定めがないときは，その利率は，最初に利息が生じた時点における法定利率による。
イ．法定利率の割合は，３年を一期とするその期ごとに見直され，必ず変更される。
ウ．将来において負担すべき費用についての損害賠償の額を定める場合，その費用を負担すべき時までの利息相当額を法定利率により控除することはできない。
エ．債務者が貸金返還債務の履行を遅滞した場合，債権者は，法定利率又は約定利率により算定された額を超える損害が生じたことを証明しても，当該損害の賠償を請求することができない。
オ．金銭消費貸借契約の利息について法定利率を超える約定利率の定めがある場合，返済を遅滞した借主は，元本及び返済期日までの約定利率の割合による利息に加えて，当該金銭消費貸借契約を締結した時点における法定利率の割合による遅延損害金を返済期日の翌日から支払済みまで支払わなければならない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2020",num:"22",subject:"min",q:`契約の成立に関する次のアからオまでの各記述のうち，契約が成立していないものの組合せとして正しいものは，後記１から５までのうちどれか。
ア．ＡがＢに対し，承諾の期間を申込みから１週間と定めて撤回の権利の留保なく契約の申込みをし，その２日後に申込みを撤回したが，Ｂは申込みから５日後に承諾した。
イ．Ａが対話中にその終了後も契約の申込みが効力を失わない旨を表示せずに対話者であるＢに対して契約の申込みをしたところ，Ｂは対話終了後の翌日に承諾した。
ウ．Ｂは，Ａによる契約の申込みに対し，承諾の通知を発した後に死亡したが，Ａは，その承諾の通知の到達前にＢ死亡の事実を知っていた。
エ．ＡがＢに対して契約の申込みの通知を発した後に死亡したが，Ａは自らが死亡したとすればその申込みは効力を有しない旨の意思を表示しておらず，ＢはＡ死亡の事実を知らずに承諾した。
オ．ＡがＢに対して承諾の期間を申込みから１週間と定めて契約の申込みをしたところ，Ｂは申込みから１０日後に承諾した。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"4"},{year:"2020",num:"23",subject:"min",q:`ＡＢ間においてＡの所有する中古の時計甲の売買契約が締結された場合について述べた次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．売買契約において，Ａが甲を引き渡した日から１か月後にＢが代金を支払うことが定められていた場合であっても，Ａ及びＢの債務の履行後に第三者Ｃの詐欺を理由として契約が取り消されたときの双方の原状回復義務は，同時履行の関係に立つ。
イ．売買契約の締結時に甲がＤの住所に存在していたときであっても，引渡しをすべき場所について別段の意思表示がない限り，甲の引渡場所はＢの現在の住所である。
ウ．Ｂが，Ｅとの間で，売買契約における買主たる地位をＥに譲渡する旨の合意をした場合，Ａの承諾の有無にかかわらず，買主たる地位はＥに移転する。
エ．売買契約において契約の締結時には出生していなかったＦに甲の所有権を取得させることが定められた場合，売買契約は無効である。
オ．売買契約において第三者Ｇに甲の所有権を取得させることが定められ，Ｇの受益の意思表示がされた後，Ａが甲の引渡しを遅滞した場合，Ｂは，Ｇの承諾を得なければ，売買契約を解除することができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2020",num:"24",subject:"min",q:`他人の権利の売買に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．売主が他人の権利を取得して買主に移転することができない場合，買主は，契約時にその権利が売主に属しないことを知っていたとしても，それにより損害賠償の請求を妨げられない。
イ．売主が他人の権利を取得して買主に移転することができない場合，そのことについて売主の責めに帰すべき事由が存在しないときであっても，買主は売主に対して損害賠償請求をすることができる。
ウ．売買の目的である権利の一部が他人に属することにより，その権利の一部が買主に移転されず, 履行の追完が不能である場合，そのことについて買主の責めに帰すべき事由が存在しないときは，買主は，催告をすることなく，直ちに代金の減額を請求することができる。
エ．売主が他人の権利を取得して買主に移転することができない場合，買主は，契約時にその権利が売主に属しないことを知っていたときは，契約を解除することができない。
オ．売主が他人の権利を取得して買主に移転することができない場合，買主は，善意の売主に対しては，当該権利が他人の権利であることを知った時から１年以内にその旨を通知しなければ，損害賠償の請求をすることができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2020",num:"25",subject:"min",q:`賃貸借に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．賃貸不動産が譲渡され，その不動産の賃貸人たる地位がその譲受人に移転したときは，譲渡人が負っていた賃借人に対する費用の償還に係る債務は，譲受人が承継する。
イ．賃貸人は，賃借人の責めに帰すべき事由によって賃貸物の使用及び収益のために修繕が必要となったときであっても，その修繕をする義務を負う。
ウ．賃借物の一部が滅失その他の事由により使用及び収益をすることができなくなった場合において，それが賃借人の責めに帰することができない事由によるものであるときは，賃料は，その使用及び収益をすることができなくなった部分の割合に応じて，減額される。
エ．賃借人が適法に賃借物を転貸し，その後，賃貸人が賃借人との間の賃貸借を合意により解除した場合，賃貸人は，その解除の当時，賃借人の債務不履行による解除権を有していたときであっても，その合意解除をもって転借人に対抗することはできない。
オ．賃貸借が終了した場合，賃借人は，通常の使用及び収益によって生じた賃借物の損耗については，原状に復する義務を負わない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2020",num:"26",subject:"min",q:`委任に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．委任を解除した者は，その解除の時期にかかわらず，相手方に対する損害賠償責任を負わない。
イ．法律行為でない事務の委託については，法律行為の委任に関する民法の規定は準用されない。
ウ．受任者は，委任事務を処理するのに必要な費用につき，その費用を支払った後でなければ，これを委任者に請求することはできない。
エ．委任者が死亡しても委任が終了しないこととする当事者間の特約がある場合，委任は，委任者が死亡しても当然には終了しない。
オ．委任者が破産手続開始の決定を受けたことによって委任が終了した場合には，委任者は，破産手続開始の決定を受けたことを受任者に通知したとき，又は受任者が破産手続開始決定の事実を知っていたときでなければ，受任者に対し，委任の終了を主張することができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2020",num:"27",subject:"min",q:`組合に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．組合員は，組合財産に属する金銭債権につき，その持分に応じて単独で権利を行使することができる。
イ．組合の業務の決定は，業務執行者があるときであっても，組合員の過半数をもってする。
ウ．組合の存続期間を定めた場合であっても，各組合員は，やむを得ない事由があるときは，脱退することができる。
エ．組合の成立後に新たに加入した組合員は，その加入前に生じた組合の債務について弁済する責任を負わない。
オ．組合員は，組合員の過半数の同意がある場合には，清算前に組合財産の分割を求めることができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2020",num:"28",subject:"min",q:`不当利得に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．所有者から寄託された動産を受寄者が売却し，買主に即時取得が成立した場合，買主は，寄託者に対し，不当利得返還義務を負わない。
イ．第三者からだまし取った金銭を用いて債務が弁済された場合において，第三者からだまし取った金銭を用いて債務者が弁済をしたことを知らなかったことについて債権者に過失があるときは，債権者は，当該第三者に対して不当利得返還義務を負う。
ウ．過失により弁済期が到来したものと誤信をして，弁済期が到来する前に債務の弁済としての給付を行った者は，弁済期が到来するまでは，その給付したものの返還を求めることができる。
エ．債務者が債権の受領権限がない者に対し弁済をした場合において，真の債権者がその受領者に対して不当利得返還請求をしたときは，その受領者は，弁済をした債務者に過失があったことを主張して，請求を拒絶することができる。
オ．自らを債務者であると誤信して他人の債務を弁済した者は，債権者が善意でその債権を消滅時効により消滅させてしまった場合，債権者に対し弁済金の返還請求をすることができない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2020",num:"29",subject:"min",q:`不法行為に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．金銭債権を有する者が，その債務者を負傷させたことにより不法行為に基づく損害賠償債務を負った場合，当該金銭債権を自働債権，損害賠償債権を受働債権とする相殺をもって債務者に対抗することはできない。
イ．報道により他人の名誉を毀損した報道機関は，その報道が公共の利害に関する事実に係り，専ら公益を図ることに出たものであって，摘示した事実が真実であると信ずるにつき相当な理由があったとしても，その事実が真実であると証明できなかったときは，不法行為責任を負う。
ウ．子が他人の不法行為によって重傷を負った場合，その両親は，そのために子が生命を害されたときにも比肩すべき精神上の苦痛を受けたときは，自己の権利として加害者に慰謝料を請求することができる。
エ．未成年者が責任能力を有し被害者に対する不法行為責任を負う場合であっても，その監督義務者に未成年者に対する監督義務違反があり，その義務違反と当該未成年者の不法行為によって生じた結果との間に相当因果関係が認められるときには，監督義務者は被害者に対する不法行為責任を負う。
オ．使用者が被用者の加害行為につき使用者責任に基づいて第三者に損害賠償責任を負う場合，当該被用者は，加害行為につき故意又は重過失がない限り，当該第三者に対する損害賠償責任を負わない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2020",num:"30",subject:"min",q:`普通養子縁組に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．１７歳の者が縁組をして養子となるには，その法定代理人の同意を得なければならない。
イ．後見人が被後見人を養子とするには，家庭裁判所の許可を得なければならない。
ウ．配偶者のある者が配偶者の嫡出子を養子とする場合には，配偶者の同意を得ることを要しない。
エ．自己の孫を養子とする場合には，その孫が未成年者であっても，家庭裁判所の許可を得ることを要しない。
オ．縁組の当事者の一方が死亡した場合には，他方の当事者は，家庭裁判所の許可を得なければ離縁をすることができない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2020",num:"31",subject:"min",q:`親権を行う者とその子との間及び子相互間の利益相反行為に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．親権者が利益相反行為をした場合には，その行為は無権代理行為となる。
イ．親権者が共同相続人である数人の子を代理して遺産分割の協議をすることは，利益相反行為に当たる。
ウ．親権者とその数人の子が共同相続人である場合に，親権者が自ら相続の放棄をすると同時にその子全員を代理して相続の放棄をすることは，利益相反行為に当たらない。
エ．親権者がその子の名義で金銭を借り受け，その子が所有する不動産に抵当権を設定する場合であっても，親権者がその金銭を自らの用途に供する意図を有していたときには，利益相反行為に当たる。
オ．父母が共に親権者である場合に，父とその子との利益が相反する行為をするには，母が親権者として単独でその子のための代理行為をする必要がある。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2020",num:"32",subject:"min",q:`後見に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．未成年後見人が数人ある場合，身上の監護に関する権限については，家庭裁判所は，職権で，各未成年後見人が単独で又は数人の未成年後見人が職務を分掌して，その権限を行使すべきことを定めることができる。
イ．成年後見人が成年被後見人を代理してその居住している建物を売却する場合には，家庭裁判所の許可を得なければならない。
ウ．未成年被後見人Ａが成年に達した後後見の計算の終了前にＡと未成年後見人との間で契約を締結した場合，Ａは，その契約を取り消すことができる。
エ．成年後見人が成年被後見人を代理して預金の払戻しを受けるには，後見監督人があるときは，その同意を得なければならない。
オ．任意後見契約が登記されている場合に家庭裁判所が後見開始の審判をするには，本人の利益のため特に必要があると認めるときでなければならない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2020",num:"33",subject:"min",q:`遺贈に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．遺贈は，成年に達しなければ，することができない。
イ．寄与分は，被相続人が相続開始の時において有した財産の価額から遺贈の価額を控除した残額を超えることができない。
ウ．相続財産の一部の割合について包括遺贈を受けた者は，相続財産に属する債務を承継しない。
エ．Ａが所有する甲不動産をＢに生前贈与したが，所有権移転登記未了のうちにＣに遺贈する旨の遺言をし，Ａの死亡後にＡからＣへの遺贈を原因とする所有権移転登記がされた場合，ＣがＡの相続人であっても，Ｂは，Ｃに対し，甲不動産の所有権の取得を対抗することができない。
オ．遺贈は，遺言者の死亡以前に受遺者が死亡したときは，その効力を生じない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2020",num:"34",subject:"min",q:`遺言の執行に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．自筆証書遺言に係る遺言書を保管している相続人は，相続の開始を知った後，遅滞なく，遺言書を保管している旨を他の相続人に通知しなければならない。
イ．遺言執行者がないとき，又はなくなったときは，家庭裁判所は，利害関係人の請求によって，これを選任することができる。
ウ．遺言執行者がある場合には，遺贈の履行は，遺言執行者のみが行うことができ，遺言者の相続人がこれを行うことはできない。
エ．遺産分割方法の指定として遺産に属する預金債権の全部を相続人の一人に承継させる旨の遺言があったときは，遺言執行者は，遺言者がその遺言に別段の意思を表示した場合を除き，その預金の払戻しを請求することができる。
オ．遺言執行者は，遺言者がその遺言に別段の意思を表示した場合を除き，やむを得ない事由がなければ，第三者にその任務を行わせることができない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2020",num:"35",subject:"min",q:`相続と贈与に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．特別受益に当たる贈与の価額がその受贈者である相続人の具体的相続分の価額を超える場合，その相続人は，超過した価額に相当する財産を他の共同相続人に返還しなければならない。
イ．Ａが，婚姻後２１年が経過した時点で，Ａとその配偶者Ｂが居住するＡ所有のマンション甲をＢに贈与し，その後に死亡した場合，当該贈与については，その財産の価額を相続財産に算入することを要しない旨の意思表示（持戻し免除の意思表示）がされたものと推定される。
ウ．特別受益に当たる贈与は，地震により目的物が滅失した場合であっても，相続開始の時においてなお原状のままであるものとみなしてその価額を定める。
エ．不動産の死因贈与の受贈者Ａが贈与者Ｂの相続人である場合において，限定承認がされたときは，死因贈与に基づくＢからＡへの所有権移転登記が相続債権者Ｃによる差押登記よりも先にされたとしても，Ａは，Ｃに対し，その不動産の所有権の取得を対抗することができない。
オ．特別受益に当たる贈与は，当事者双方が遺留分権利者に損害を加えることを知ってしたものでない場合，相続開始前の１０年間にしたものに限り，遺留分を算定するための財産の価額に算入される。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2020",num:"36",subject:"min",q:`承継人に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．錯誤によって取り消すことができる行為は，錯誤による意思表示をした者の契約上の地位の承継人も，取り消すことができる。
イ．時効の完成猶予の効力は，その事由が生じた当事者の承継人に対しては生じない。
ウ．占有者の包括承継人は，取得時効に関して，自己の占有のみを主張することもできる。
エ．共有者の一人であるＡが共有物について他の共有者であるＢに対して有する債権は，Ｂの特定承継人に対しては，行使することができない。
オ．遺留分権利者の承継人は，遺留分侵害額に相当する金銭の支払を請求することができる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"3"},{year:"2020",num:"37",subject:"min",q:`撤回に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．選択債権について債務者が選択権行使の意思表示をした場合，その意思表示は，債権の弁済期前であっても，債権者の承諾を得なければ，撤回することができない。
イ．解除の意思表示は，撤回することができない。
ウ．相続の放棄は，相続の承認又は放棄をすべき期間内は，撤回することができる。
エ．遺贈の承認は，遺贈義務者が履行に着手するまでは，撤回することができる。
オ．遺言者は，その遺言を撤回する権利を放棄することができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2020",num:"1",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．甲は，Ｘに対し，暴行や脅迫を用いて，自殺するように執拗に要求し，要求に応じて崖から海に飛び込んで自殺するしかないとの精神状態に陥らせた上で，Ｘを崖から海に飛び込ませて死亡させた。この場合，甲に，Ｘに対する殺人罪は成立しない。",c2:"２．甲は，追死する意思がないのにあるように装い，その旨誤信したＸに心中を決意させた上で，毒物を渡し，それを飲み込ませて死亡させた。この場合，甲に，Ｘに対する殺人罪は成立しない。",c3:"３．甲は，財物を奪取するために，当該財物の占有者Ｘに対し，反抗を抑圧するに足りる程度の暴行や脅迫を用いて，当該財物を差し出すしかないとの精神状態に陥らせた上で，当該財物を差し出させた。この場合，甲に，Ｘに対する強盗罪は成立せず，窃盗罪の間接正犯が成立する。",c4:"４．甲は，日頃から暴行を加えて自己の意のままに従わせて万引きをさせていた満１２歳の実子Ｘに対し，これまでと同様に万引きを命じて実行させた。この場合，Ｘが是非善悪の判断能力を有する者であれば，甲に，窃盗罪の間接正犯は成立せず，Ｘとの間で同罪の共同正犯が成立する。",c5:"５．甲は，Ｘが管理する工事現場に保管されている同人所有の機械を，同人に成り済まして，甲をＸであると誤信した中古機械買取業者Ｙに売却し，同人に同機械を同所から搬出させた。この場合，甲に，Ｘに対する窃盗罪の間接正犯が成立する。",c6:"",c7:"",c8:"",a:"5"},{year:"2020",num:"2",subject:"kei",q:"横領の罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，誤っているものを２個選びなさい。",c1:"１．甲は，乙からの委託に基づき，同人所有の衣類が入った，施錠されていたスーツケース１個を預かり保管していたところ，衣類を古着屋に売却して自己の遊興費を得ようと考え，勝手に開錠し，中から衣類を取り出した。この場合，遅くとも衣類を取り出した時点で不法領得の意思の発現と認められる外部的行為があったといえるから，甲には，横領罪が成立する。",c2:"２．甲は，乙と共に一定の目的で積み立てていた現金を１個の金庫の中に入れて共同保管していたところ，乙に無断でその現金全てを抜き取り，自己の遊興費に費消した。この場合，甲には，横領罪が成立する。",c3:"３．株式会社の取締役経理部長甲は，同会社の株式の買い占めに対抗するための工作資金として自ら業務上保管していた会社の現金を第三者に交付した。この場合，甲が，会社の不利益を回避する意図を有していたとしても，当該現金の交付が会社にとって重大な経済的負担を伴うもので，甲が自己の弱みを隠す意図をも有していたなど，専ら会社のためにしたとは認められないときは，甲には，業務上横領罪が成立する。",c4:"４．甲は，乙から某日までに製茶を買い付けてほしい旨の依頼を受け，その買付資金として現金を預かっていたところ，その現金を確実に補填するあてがなかったにもかかわらず，後日補填するつもりで自己の遊興費に費消した。この場合，甲がたまたま補填することができ，約定どおりに製茶の買い付けを行ったとしても，甲には，横領罪が成立する。",c5:"５．甲は，自己が所有し，その旨登記されている土地を乙に売却し，その代金を受領したにもかかわらず，乙への移転登記が完了する前に，同土地に自己を債務者とし丙を抵当権者とする抵当権を設定し，その登記が完了した。この場合，同抵当権が実行されることなく，後日，その登記が抹消されたとしても，甲には，横領罪が成立する。",c6:"",c7:"",c8:"",a:"12"},{year:"2020",num:"3",subject:"kei",q:`学生Ａ及びＢは，過剰防衛に関する次の【事例】について，後記【会話】のとおり議論している。【会話】の中の①から④までの（ ）内から適切なものを選んだ場合，正しいものの組合せは，後記１から５までのうちどれか。
【事 例】
Ⅰ．甲は，同じ居室にいた乙が机を押し倒してきたため，反撃として，同机を乙に向けて押し返した。これにより，乙は転倒し，左手中指の腱を断裂した。乙は，机の下敷きになっており，直ちに強い攻撃はできなかったが，体勢を立て直せば間もなく攻撃を再開できる状況であった。甲は，引き続き，防衛の意思で，必要な限度を超えて，乙の顔面を殴ったが，これにより乙に怪我は生じなかった。
Ⅱ．甲は，乙からいきなり殴られ，更に攻撃を加えられそうになったので，反撃として，乙の顔面を殴った。乙は転倒して頭部を地面に打ち付け，意識を失って動かなくなったが，腹が立っていた甲は，引き続き，専ら攻撃の意思で，倒れている乙の胸部を蹴り付け，肋骨骨折を負わせた。その後，乙は，頭部を地面に打ち付けた際に生じた脳内出血が原因で死亡した。
【会 話】
学生Ａ. Ⅰの事例で，甲が机を押し返した行為は，急迫不正の侵害に対する反撃だけど，その行為と乙の顔面を殴った行為との関係は，どのように考えるべきだろうか。
学生Ｂ．その点は，時間的・場所的な関係や甲の主観面等に照らし，①（ａ．別個の行為・ｂ．一連一体の行為）と捉えるべきだろう。
学生Ａ．そうすると，甲には，どのような犯罪が成立するだろうか。
学生Ｂ．甲には，②（ｃ．過剰防衛としての傷害罪が成立する・ｄ．暴行罪のみが成立する）だろう。
学生Ａ．Ⅱの事例でも，甲が乙の顔面を殴った行為は，急迫不正の侵害に対する反撃であることに変わりないよね。甲には，どのような犯罪が成立するだろうか。
学生Ｂ．乙が意識を失って動かなくなっているのに，専ら攻撃の意思で蹴り付けているのだから，顔面を殴る行為と胸部を蹴り付ける行為の間には断絶があると思う。甲には，③（ｅ．過剰防衛としての傷害致死罪が成立する・ｆ．傷害罪のみが成立する）という結論が妥当だろう。
学生Ａ．Ⅱの事例で，Ｂ君のように，両暴行の間に断絶があると解すると，④（ｇ．違法性が否定されるべき行為が遡って違法と評価されることになる・ｈ．専ら攻撃の意思で胸部を蹴り付けた場合の方が，防衛の意思で胸部を蹴り付けた場合より軽い罪が成立する）という問題が生じるのではないか。
学生Ｂ．その点は，量刑上考慮すれば足りるという説明が可能なのではないか。`,c1:"１．①ａ ③ｅ",c2:"２．①ｂ ④ｇ",c3:"３．②ｄ ③ｅ",c4:"４．②ｃ ④ｇ",c5:"５．③ｆ ④ｈ",c6:"",c7:"",c8:"",a:"5"},{year:"2020",num:"4",subject:"kei",q:"遺棄の罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものを２個選びなさい。",c1:"１．遺棄罪（刑法第２１７条）の成立には，生命に対する危険の発生が必要である。",c2:"２．妊婦の依頼を受け，母体保護法上，許されない堕胎を行った産婦人科医師が，それにより出生した未熟児について，医療設備の整った病院に搬送することが容易であり，同病院の医療を受けさせれば，同児が短期間内に死亡することはなく，むしろ生育する可能性がある場合において，そのことを認識しながら，生存に必要な保護を行わず同児を死亡させたときは，同医師に，保護責任者遺棄等致死罪（刑法第２１９条，第２１８条）が成立し得る。",c3:"３．保護責任者遺棄等罪（刑法第２１８条）にいう「老年者，幼年者，身体障害者又は病者」は，例示列挙であり，同罪の客体はそれらの者に限られず，扶助を必要とする者であれば足りる。",c4:"４．保護責任者遺棄等致傷罪（刑法第２１９条，第２１８条）には，傷害結果に故意がある場合は含まれない。",c5:"５．保護責任者遺棄等罪（刑法第２１８条）における遺棄には，置き去りは含まれない。",c6:"",c7:"",c8:"",a:"24"},{year:"2020",num:"5",subject:"kei",q:`共犯と錯誤に関する次のアからオまでの各記述を判例の立場に従って検討した場合，正しいものの個数を後記１から５までの中から選びなさい。
ア．甲及び乙がＡに対する暴行を共謀したが，Ａの態度に激高した甲が殺意をもってＡを殺害した場合，甲及び乙に殺人罪の共同正犯が成立するが，乙は傷害致死罪の刑で処断される。
イ．甲及び乙がＡに対する強盗を共謀したが，その強盗の機会に，甲が過失によってＡに傷害を負わせた場合，甲及び乙に強盗致傷罪の共同正犯が成立する。
ウ．甲及び乙が共謀して，公務員Ａに虚偽の内容の公文書の作成を教唆することにしたが，乙はＡを買収することに失敗したため，甲に無断で，Ｂに公文書を偽造することを教唆し，Ｂが公文書を偽造した場合，甲に虚偽公文書作成罪の教唆犯が成立する。
エ．甲が乙にＡ方に侵入して金品を窃取するように教唆して，その犯行を決意させたが，乙はＡ方と誤認して隣のＢ方に侵入してしまい，Ｂ方から金品を窃取した場合，甲にＢ方への住居侵入罪及びＢに対する窃盗罪の教唆犯は成立しない。
オ．甲が乙の傷害行為を幇助する意思で，乙に包丁を貸与したところ，乙が殺意をもってその包丁でＡを刺殺した場合，甲に殺人罪の幇助犯が成立し，傷害致死罪の幇助犯は成立しない。`,c1:"１．０個",c2:"２．１個",c3:"３．２個",c4:"４．３個",c5:"５．４個",c6:"",c7:"",c8:"",a:"2"},{year:"2020",num:"6",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合，誤っているものはどれか。",c1:"１．甲は，乙から，大学の入学試験を代わりに受けてほしいと頼まれてこれを引き受け，乙に成り済まして入学試験を受け，乙名義で答案を作成して提出した。この場合，甲に有印私文書偽造罪が成立する。",c2:"２．甲は，架空請求により金銭をだまし取るために使おうと考え，実在しない「法務局民事訴訟管理センター」名義で，契約不履行による民事訴訟が提起されているので連絡をされたい旨記載されたはがきを印刷し，一般人をして実在する公務所が権限内で作成した公文書であると誤信させるに足りる程度の形式・外観を備えた文書を作成した。この場合，甲に有印公文書偽造罪が成立する。",c3:"３. 甲は，Ｘ市立病院の事務長を務める公務員であるが，同病院のために発注書を作成する権限を授与されていないのに，行使の目的で，同病院が業者Ａに医療器具を発注していないにもかかわらず，それを発注した旨を記載した内容虚偽の「Ｘ市立病院事務長甲」名義の発注書を作成した。この場合，甲に虚偽有印公文書作成罪が成立する。",c4:"４．甲は，支払督促制度を悪用して乙の財産を不正に差し押さえるなどして金銭を得ようと考え，乙に対する内容虚偽の支払督促を簡易裁判所に申し立てた上，乙宛ての支払督促正本等を配達しようとした郵便配達員に対し，乙本人を装い，郵便送達報告書の「受領者の押印又は署名」欄に乙の氏名を記載して提出し，支払督促正本等を受領した。この場合，甲に有印私文書偽造罪が成立する。",c5:`５．甲は，消費者金融業者に提出する目的で，公文書である乙の国民健康保険被保険者証の氏名欄に自己の氏名が印刷された紙を貼り付けた上で，複写機を使用してこれをコピーし，一般人をして甲の国民健康保険被保険者証の真正なコピーであると誤信させるに足りる程度の形式・外観を備えたものを作成した。この場合，甲に有印公文書偽造罪が成立する。
`,c6:"",c7:"",c8:"",a:"3"},{year:"2020",num:"7",subject:"kei",q:`学生Ａ，Ｂ及びＣは，後記【会話】のとおり議論している。【会話】中の①から⑤までの（ ）内から適切なものを選んだ場合，正しいものの組合せは，後記１から５までのうちどれか。
【会 話】
学生Ａ．人に意図的に害悪を加えることは，本来であれば許されないはずです。それにもかかわらず，刑罰という苦痛を人に与えることが正当化される実質的な根拠は何でしょうか。
学生Ｂ．私は，刑罰は犯罪に対する非難を含むもので，その意味で①（ａ．応報・ｂ．社会統制の手段）としての性質を持ち，②（ｃ．犯罪者の改善更生・ｄ．正義の実現）という観点に照らして，犯罪に対する反作用であること自体に刑罰の正当化根拠を見いだすことができると考えます。もう少し詳しく言うと，自らの意思で犯罪行為を行うことを決意し実行した犯罪者に対して，その意思決定を回顧的に非難する点に刑罰の正当化根拠があるということです。
学生Ｃ．Ｂ君は，③（ｅ．非決定論・ｆ．決定論）の立場を前提にしているのですね。しかし，（①）としての刑罰自体に刑罰を正当化する根拠があるという説明では，刑罰を科すことそれ自体が目的ということになりませんか。刑罰は，国家の制度の一種なのだから，国民の現実的な利益を実現する手段として合目的性の観点から正当化されるべきではないでしょうか。私は，刑罰を科すことが許される根拠は，④（ｇ．被害感情の緩和・ｈ．犯罪の予防）にあると思います。犯罪によって得られる快楽を上回る苦痛を刑罰として予告すれば，一般人に対する威嚇的な効果があるからです。刑罰は（④）という公的利益の達成に資するために，人に科すことが正当化されるのだと思います。
学生Ａ．私も，基本的にＣ君の考えに賛成ですが，（④）の観点を強調しすぎると，⑤（i．責任・ｊ．被害感情）の程度を超える刑罰を科すことも肯定されかねず，刑法の基本原則に反する帰結をもたらすことになるのではないでしょうか。`,c1:"１．①ａ ③ｆ",c2:"２．①ｂ ⑤ｊ",c3:"３．②ｄ ④ｈ",c4:"４．②ｃ ⑤ｉ",c5:"５．③ｅ ④ｇ",c6:"",c7:"",c8:"",a:"3"},{year:"2020",num:"8",subject:"kei",q:`公務執行妨害罪に関する次のアからオまでの各記述を判例の立場に従って検討し，正しい場合には１を，誤っている場合には２を選びなさい。
ア．甲は，市役所の生活保護係職員乙による生活保護に関する説明に不満を抱き，同人に罵声を浴びせながら抗議するとともに，丸めたパンフレットを同人の顔面付近に２，３回突き付け，そのうち１回はパンフレットの先端が同人の顎に触れ，さらに，約２回にわたり，乙が座っている椅子を両手で持って椅子の前脚を床から持ち上げては落とすことによりその身体を揺さぶった。甲の行為は，公務執行妨害罪にいう「暴行」に当たらないので，甲に公務執行妨害罪は成立しない。
イ．甲は，警察官乙らが捜索差押許可状に基づき甲方の捜索に来た際，乙らにより甲方玄関ドアの鍵が開けられる前に，居室内にあった覚醒剤入りの注射器を足で踏み付けて壊した。甲の行為は，公務執行妨害罪にいう「暴行」に当たらないので，甲に公務執行妨害罪は成立しない。
ウ．窃盗犯人甲は，その窃盗行為を目撃した制服警察官乙から追跡されている途中で，逮捕を免れるため，同人に対し，その反抗を抑圧するに足りる程度の暴行を加えて抵抗し，そのまま逃走した。甲には事後強盗罪のみが成立し，公務執行妨害罪は成立しない。
エ．甲は，日本国内にある外国大使館の職員乙がその大使館の業務に従事していた際に，同人の顔面を殴った。乙は「公務員」に当たらないので，甲に公務執行妨害罪は成立しない。
オ．甲は，税務調査を免れるため，同調査のため甲方に来た所轄税務署職員乙の顔面を殴った。その際，乙は，規則により調査時に携帯が義務付けられている検査章を携帯していなかったが，甲がその呈示を求めることはなかった。乙に規則違反があった以上，乙の調査は職務の権限外の行為であり，甲に公務執行妨害罪は成立しない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"21212"},{year:"2020",num:"9",subject:"kei",q:`原因において自由な行為に関する次の各【見解】に従って後記の各【事例】における甲の罪責を検討した場合，後記１から５までの各【記述】のうち，誤っているものはどれか。
【見 解】
Ａ．責任能力がある状態で行われた原因行為を実行行為と捉える。
Ｂ．責任能力を欠いた状態で行われた結果行為を実行行為と捉えつつ，責任能力は意思決定時に存在すれば足り，必ずしも実行行為時に存在することは必要ない。
【事 例】
Ⅰ．甲は，Ｘ宅に赴いて同人を殺害しようと決意し，心神喪失状態に陥る可能性があることを認識しつつ，自宅において景気づけのために覚醒剤を使用したところ，心神喪失状態に陥り，当初の計画どおりＸを殺害した。
Ⅱ．甲は，Ｘ宅に赴いて同人を殺害しようと決意し，心神喪失状態に陥る可能性があることを認識しつつ，自宅において景気づけのために覚醒剤を使用したところ，心神喪失状態に陥ったが，Ｘ宅には赴かず，Ｘの殺害には及ばなかった。
Ⅲ．甲は，覚醒剤を使用すると粗暴になり周囲に暴行を加える習癖があると知りつつ，覚醒剤を使用した結果，心神喪失状態に陥り，Ｘと口論になり，殺意を生じて同人を殺害した。
【記 述】`,c1:"１．Ａの見解によれば，事例Ⅰでは，甲に，Ｘに対する殺人既遂罪が成立し得る。",c2:"２．Ａの見解を採った上で，未遂犯の成立時期は結果発生の現実的な危険性が生じた段階に求められるべきで，それが常に実行行為の開始段階に認められる必然性はないと考えれば，事例Ⅱでは，甲に，Ｘに対する殺人未遂罪は成立しない。",c3:"３．Ａの見解によれば，事例Ⅲでは，甲に，Ｘに対する殺人既遂罪が成立し得る。",c4:"４．Ｂの見解によれば，事例Ⅰでは，甲に，Ｘに対する殺人既遂罪が成立し得る。",c5:"５．Ｂの見解によれば，事例Ⅱでは，甲に，Ｘに対する殺人未遂罪は成立しない。",c6:"",c7:"",c8:"",a:"3"},{year:"2020",num:"10",subject:"kei",q:"親族間の犯罪に関する特例について次の１から５までの各記述を判例の立場に従って検討した場合，誤っているものはどれか。",c1:"１．甲が，実母乙の使用するタンスから，乙がその友人丙から預かり同タンスに保管していた丙所有の宝石を窃取した場合，甲の窃取行為について刑は免除されない。",c2:"２．甲が，実父乙の内縁の妻である丙が乙から預かり保管していた乙所有の時計を窃取した場合，甲の窃取行為について刑は免除されない。",c3:"３．甲は，家庭裁判所から実父乙の成年後見人に選任されていたところ，後見の事務として業務上預かり保管中の乙の預金を引き出して自己の借金の返済に充てた場合，甲の横領行為について刑は免除されない。",c4:"４．甲が，友人乙を教唆して，乙の実父丙が所有し，管理している自動車を窃取させた場合，甲の窃盗教唆行為について刑は免除されない。",c5:"５．甲が，同居していない祖父乙を恐喝して同人から現金の交付を受けた場合，甲の恐喝行為について刑は免除されない。",c6:"",c7:"",c8:"",a:"5"},{year:"2020",num:"11",subject:"kei",q:`次のアからオまでの各記述を判例の立場に従って検討し，正しい場合には１を，誤っている場合には２を選びなさい。
ア．甲及び乙は，深夜，路上を一人で歩いていたＶ女を見付け，約６キロメートル先のひとけのない工事現場にＶ女を連れ込んで強制的にＶ女と性交しようと決意し，二人でＶ女の背後からその身体を抱きかかえながら，付近に停めていた自動車にＶ女を押し込んで乗せ，同車を発進させたが，性交には至らなかった。甲及び乙には，強制性交等未遂罪の共同正犯が成立する。
イ．甲は，強制的にＶ女と性交しようと決意し，深夜，路上において，Ｖ女を押さえ付けて反抗を抑圧したが，付近から人の声が聞こえたため性交を諦めて，Ｖ女のハンドバッグから財布を奪い取ろうと考え，「騒ぐな。殺すぞ。」と申し向けてＶ女の畏怖心を強めた上，財布を奪い取った。甲には，強盗・強制性交等未遂罪が成立する。
ウ．甲は，Ｖが居住する木造家屋に火をつけて焼損しようと考え，同家屋台所において，プロパンガスを多量かつ長時間にわたり放出するとともに，ガソリン約１８リットルを撒布したが，点火行為には至らなかった。甲には，現住建造物等放火未遂罪が成立する。
エ．甲は，Ｖを殺害する意思で，毒入りの菓子を箱詰めし，それをＶ宅に宛てて宅配便で発送した。しかし，仕事に嫌気が差した配達員により，その菓子は配達途中に川に捨てられた。甲には，殺人未遂罪が成立する。
オ．甲は，Ｖ宅に侵入し，金品を強取しようと決意し，Ｖを脅すためのナイフを入手した上，それを携行してＶ宅に向かった。しかし，Ｖ宅に至る手前で，罪悪感を覚え，計画を中止することに決め，自宅に引き返した。甲には，強盗予備罪の中止犯が成立する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"12122"},{year:"2020",num:"12",subject:"kei",q:"業務妨害罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，誤っているものはどれか。",c1:"１．利用客のキャッシュカードの暗証番号等を盗撮する目的で，現金自動預払機が２台設置されている銀行の無人出張所において，そのうち１台にカメラを設置し，当該現金自動預払機に客を誘導する意図で，一般客を装い，もう１台の現金自動預払機を２時間占拠した場合，偽計業務妨害罪が成立する。",c2:"２．講演会の主催者が閲覧する可能性を認識した上，インターネット上の掲示板に，当該講演会の会場に放火するという趣旨の書き込みをし，当該主催者に閲覧させた結果，当該講演会を中止させた場合，威力業務妨害罪が成立する。",c3:"３．公職選挙法上の選挙長による立候補届出受理事務を妨害する目的で，その届出場所において，突如大声を発し，ボールペンを机にたたき付けるという暴行・脅迫に至らない言動を用いてその事務を滞らせた場合，威力業務妨害罪が成立する。",c4:"４．知人Ａに対する嫌がらせの目的で，同人に成り済まし，同人に無断で宅配ピザ店に電話をかけてピザ５０枚を注文し，これを同人宅まで配達することを依頼して，同店店員にピザ５０枚を作らせ，配達させた場合，偽計業務妨害罪が成立する。",c5:"５．弁護士Ｘの弁護士としての活動を困難にさせる目的で，同人から，同人が携行し，その業務にとって重要な訴訟記録等が入ったかばんを奪い取った上，自宅に保管した場合，偽計業務妨害罪が成立する。",c6:"",c7:"",c8:"",a:"5"},{year:"2020",num:"13",subject:"kei",q:`幇助犯の成否について，学生Ａ及びＢが次の【会話】のとおり議論している。【会話】中の①から⑤までの（ ）内に後記アからオまでの【事例群】から適切な事例を入れた場合，正しいものの組合せは，後記１から５までのうちどれか。
【会 話】
学生Ａ． (①) に，乙に幇助犯は成立すると思うか。
学生Ｂ．幇助行為と結果との間に，物理的因果性も心理的因果性もないと思うので，乙に幇助犯は成立しないだろう。
学生Ａ． (②) は，どうだろうか。
学生Ｂ．乙の行為の有無にかかわらず，生じた結果は同じだったと考えると，共犯行為と結果との間の因果関係に欠けるという結論になるようにも思えるね。
学生Ａ．しかし，幇助犯は，正犯の実行が容易になり，結果の発生が促進されたという関係さえあれば，行為と結果との因果関係を認めるのが判例だろう。
学生Ｂ．なるほど。乙がいることで甲が安心でき，精神的に後押ししたという心理的因果性がありそうなので，乙に幇助犯の成立を認めるべきだね。
学生Ａ． (③) は，どうだろうか。
学生Ｂ． (②) と同じ理由で，乙に幇助犯の成立が認められるように思う。ただ，教唆犯の成立を認める余地もあるかもしれないね。
学生Ａ． (④) は，どうだろうか。
学生Ｂ．判例は片面的幇助を肯定する以上，乙に幇助犯が成立するんじゃないか。
学生Ａ． (⑤) は，どうだろうか。
学生Ｂ．この場合，乙の立場を考えれば，幇助犯が成立すると思うよ。
【事例群】
ア．乙が，甲が空き巣に入ろうとしていることを知りながら，甲に黙ってＶ方玄関の施錠を外したところ，甲が玄関からＶ方に侵入し，空き巣に成功した場合
イ．乙が，空き巣に入ろうと決意していた甲から頼まれ，甲が空き巣に入る際，見張りをしていたところ，特に何も起きないまま，甲が空き巣に成功した場合
ウ．甲が万引きをしようとしていることを目撃した店員乙が，甲と意思を通じることなく，甲の万引きを黙認し，甲が万引きに成功した場合
エ．甲が空き巣に入ることを知り，乙が甲に黙って見張りをしていたが，特に何も起きないまま，甲が空き巣に成功した場合
オ．乙が空き巣に使うことができるものとしてＶ方の合鍵を甲に渡したため，甲がＶ方に行ったが，無施錠であったため合鍵を使わず，空き巣に成功した場合`,c1:"１．①イ ②エ ③ア ④ウ ⑤オ",c2:"２．①イ ②エ ③オ ④ア ⑤ウ",c3:"３．①エ ②イ ③ウ ④オ ⑤ア",c4:"４．①エ ②イ ③オ ④ア ⑤ウ",c5:"５．①エ ②イ ③オ ④ウ ⑤ア",c6:"",c7:"",c8:"",a:"4"},{year:"2020",num:"14",subject:"kei",q:"放火罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものを２個選びなさい。",c1:"１．甲が自己の所有する空き家に放火したが，公共の危険が生じなかった場合，甲には，非現住建造物等放火未遂罪が成立する。",c2:"２．甲が乙に頼まれて，乙所有の大型家具を，丙が居住する家屋に近接する甲所有の畑地で燃やし始めたところ，周辺に火の粉が飛び散り，予期に反して，同家屋の屋根のひさしに飛び火して，同ひさしを焼損させたところで火が消し止められた場合，甲には，延焼罪が成立する。",c3:"３．甲が住宅内にいる乙を殺害する目的で放火し，住宅が焼失した上，乙が死亡した場合，甲には，殺人罪は成立せず，現住建造物等放火罪のみが成立する。",c4:"４．甲が，一部の部屋のみが現に住居に使用されている木造の集合住宅の空き部屋に放火し，同室のみを焼損させた場合，甲には，現住建造物等放火罪が成立する。",c5:"５．甲が憂さ晴らしの目的で，甲の世帯を含めて計３０世帯が居住するマンション内部に設置されたエレベーターのかご内に，灯油を染み込ませて点火した新聞紙を投げ入れて放火したが，エレベーターのかごの側壁を焼損したにとどまり，住居部分には延焼しなかった場合，甲には，現住建造物等放火未遂罪が成立する。",c6:"",c7:"",c8:"",a:"24"},{year:"2020",num:"15",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合，誤っているものを２個選びなさい。",c1:"１．甲は，火災保険金をだまし取る目的で，同居する家族が不在の間に，自宅に放火して焼失させ，その後，火災原因を偽って火災保険金の支払を受けた。この場合，甲には，現住建造物等放火罪及び詐欺罪が成立し，これらは併合罪となる。",c2:"２．甲は，強盗目的で，乙方に侵入した上，乙及び丙をそれぞれ殴打して緊縛し，その際，両名に怪我を負わせ，乙が管理していた現金１００万円を強取した。この場合，甲には，住居侵入罪及び１個の強盗致傷罪が成立し，これらは牽連犯となる。",c3:"３．甲は，乙を教唆して丙占有の自動車を盗むことを決意させ，乙にこれを実行させた後，乙から頼まれて，同自動車を預かり保管した。この場合，甲には，窃盗教唆罪及び盗品等保管罪が成立し，これらは牽連犯となる。",c4:"４．甲は，乙を殺害して金品を強取しようと考え，甲の自宅内で乙を殺害して現金を強取した後，引き続き，その死体を自宅の床下に埋めて遺棄した。この場合，甲には，強盗殺人罪及び死体遺棄罪が成立し，これらは併合罪となる。",c5:"５．甲は，乙名義で預金口座を開設する目的で，同人に成り済まし，同人名義で口座開設申込書を作成し，これを銀行の係員に提出して，乙名義の預金通帳の交付を受けた。この場合，甲には，有印私文書偽造罪，同行使罪及び詐欺罪が成立し，これらは牽連犯となる。",c6:"",c7:"",c8:"",a:"23"},{year:"2020",num:"16",subject:"kei",q:"名誉毀損罪及び侮辱罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．名誉毀損罪及び侮辱罪の保護法益は，いずれも人の外部的名誉であり，法人については，侮辱罪の客体になり得ない。",c2:"２．死者であっても，その外部的名誉を保護すべきことに変わりはないので，死者の名誉を毀損する事実が摘示された場合も，その事実の真偽にかかわらず，名誉毀損罪が成立し得る。",c3:"３．特定かつ少数の者に特定人の名誉を毀損する事実を摘示した場合，その内容が拡散する可能性があったとしても，「公然と」事実を摘示したことにはならない。",c4:"４．風評の形式を用いて人の社会的評価を低下させる事実が摘示された場合，刑法第２３０条の２にいう「真実であることの証明」の対象となるのは，風評が存在することではなく，そのような風評の内容たる事実が存在することである。",c5:"５．表現方法が嘲笑的であるとか，適切な調査がないまま他人の文章を転写しているなどといった，事実を摘示する際の表現方法や事実調査の程度は，摘示された事実が刑法第２３０条の２にいう「公共の利害に関する事実」に当たるか否かを判断する際に考慮すべき要素の一つである。",c6:"",c7:"",c8:"",a:"4"},{year:"2020",num:"17",subject:"kei",q:`緊急避難（刑法第３７条第１項）に関する次の【記述】の中の①から⑥までの（ ）内に，後記アからスまでの【語句群】から適切な語句を入れた場合，（ ）内に入るものの組合せとして正しいものは，後記１から５までのうちどれか。なお，①から⑥までの（ ）内にはそれぞれ異なる語句が入る。
【記 述】
緊急避難を（①）と解する見解によれば，その不処罰の根拠は，切迫した心理状態のために適法な行為を期待し得ないことに求められる。この見解によれば，緊急避難によって侵害を転嫁される第三者は緊急避難行為に対して（②）で対抗できることになる。この見解に対しては，刑法第３７条第１項が（③）を守るための緊急避難を認めていることと整合しないという批判がある。他方，緊急避難を（④）と解する見解によれば，その不処罰の根拠は，法益が衝突する状況下で被侵害法益と同等以上の法益を保全する行為は社会全体の利益を（⑤）させるものではないことに求められる。また，この見解に立つと，緊急避難行為に対して（②）で対抗することを認めるのは困難である。さらに，緊急避難を基本的には（④）と解しつつ，保全法益と被侵害法益がいずれも生命である場合には，（①）であると解する見解もある。この見解は，自己又は第三者の生命に対する危難を避けるために無関係の第三者の生命を犠牲にする行為を（⑥）と評価するのは不当であるという考え方に基づくものである。
【語句群】
ア．違法性阻却事由 
イ．責任阻却事由 
ウ．個人的法益 
エ．社会的法益
オ．他人の法益 
カ．自己の法益 
キ．増加 
ク．減少
 ケ．正当行為
コ．正当防衛 
サ．緊急避難 
シ．違法
 ス．違法でない`,c1:"１．①ア ③ウ ⑤ク",c2:"２．①イ ③エ ⑤キ",c3:"３．②ケ ④ア ⑥ス",c4:"４．②コ ⑤ク ⑥ス",c5:"５．③オ ④ア ⑥シ",c6:"",c7:"",c8:"",a:"4"},{year:"2020",num:"18",subject:"kei",q:`詐欺罪に関する次の【見解】についての後記アからオまでの各【記述】を検討し，正しい場合には１を，誤っている場合には２を選びなさい。
【見 解】
規約上，会員である名義人のみがクレジットカードを利用できるものとされ，その利用者が会員本人であることの確認義務が加盟店に課されている場合，名義人に成り済まし，クレジットカードを利用して商品を購入する行為は，その利用が名義人から許されており，かつ，利用代金が規約に従い名義人において決済されることが見込まれるときであっても，詐欺罪が成立する。
【記 述】
ア．この【見解】に対しては，名義人に依頼されてクレジットカードを利用して商品を購入した場合，詐欺罪の実質的違法性がなく，財産犯として処罰するのは行き過ぎであるとの批判が可能である。
イ．この【見解】は，クレジットカード利用者と名義人の同一性が加盟店にとって商品交付の判断の基礎となる重要な事項に当たると理解している。
ウ．この【見解】によれば，名義人に成り済ましてクレジットカードを利用して商品を購入する行為について，行為者が，当該名義人において現実に決済されるものと誤信していた場合でも，詐欺罪が成立し得ることとなる。
エ．この【見解】は，名義人の個別的な信用を基礎としてクレジットカードシステムが構築されていることを前提に，個々の事案における詐欺罪の成否の判断において，加盟店の経済的損失の有無を重視するものである。
オ．この【見解】に対しては，加盟店が名義人以外の利用であることを知りながら，クレジットカードの利用を認めた場合でも詐欺罪の既遂が成立することになり，妥当ではないとの批判が可能である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"11122"},{year:"2020",num:"19",subject:"kei",q:`故意に関する次の各【見解】についての後記１から５までの各【記述】のうち，誤っているものはどれか。
【見 解】
Ａ．故意の有無については，構成要件を基準にして判断すべきであるところ，殺人罪においては，行為者の認識した事実と発生した事実とが，「およそ人を殺す」という点で一致していれば故意が認められる。また，行為者の認識した客体に対しても，結果が発生した客体に対しても故意犯が成立する。
Ｂ．故意の有無については，構成要件を基準にして判断すべきであるところ，殺人罪においては，行為者の認識した事実と発生した事実とが，「その人を殺す」という点で一致していなければ意犯が成立する。故意は認められない。
【記 述】`,c1:"１．甲が，Ｘを焼死させようと思い，Ｘの全身に灯油をかけて火をつけたところ，Ｘが熱さに耐えかね，火を消そうとして近くの湖に飛び込んで溺死したという事例においては，Ａ，Ｂいずれの見解でも，甲に殺人既遂罪が成立する。",c2:"２．Ａの見解に対しては，甲が殺意をもってＸを狙い拳銃を発射したところ，弾丸がＸの腕を貫通した上，予想外にＹの胸部にも当たり，Ｘを負傷させるとともにＹを死亡させたという事例において，行為者に過剰な故意責任を課すことになり，責任主義に反するとの批判がある。",c3:"３．Ｂの見解によれば，【記述】２の事例で，甲にＹに対する殺人既遂罪が成立する。",c4:"４．Ｂの見解に対しては，客体の錯誤と方法の錯誤のいずれに当たるのかが必ずしも明らかではない場合において，故意の有無につき，どのように判断するのか明確ではないとの批判がある。",c5:"５．Ｂの見解によれば，甲がＸを殺害しようと考え，Ｘと似た者を見付けて，Ｘと思い，その者をナイフで刺し殺したが，実際には，その者はＹであったという事例において，甲にＹに対する殺人既遂罪が成立する。",c6:"",c7:"",c8:"",a:"3"},{year:"2020",num:"20",subject:"kei",q:`次の【事例】に関する後記アからエまでの各【記述】を判例の立場に従って検討した場合，正しいものの個数を後記１から５までの中から選びなさい。
【事 例】
甲は，某所公園内において，ベンチ上に置いてあるバッグ１個（以下「本件バッグ」という。）を発見し，誰かが置き忘れたものと考え，警察に届け出るため，これを手に取り，同公園から路上に出た。一方，本件バッグをベンチに置き忘れたことに気付いたＶは，同公園に戻ろうとして同路上に至ったところ，甲を発見した。Ｖは，甲が本件バッグを盗んだと疑い，「バッグを返せ。」と言いながら，甲の腹部を２回足で蹴り，甲から本件バッグを奪い，さらに，甲を蹴り上げるような仕草を続けた。甲は，Ｖの暴行を避けようとして，その胸付近を１回平手で突いたところ，その勢いでＶが後方に転倒し，後頭部を路面に打ち付け，失神した。甲は，その頃には，Ｖが本件バッグの所有者であると分かっていたが，Ｖの態度に怒りを覚えたことなどから，本件バッグを自己のものにしようと考え，失神しているＶからこれを取り上げて自宅に持ち帰った。その後，甲が本件バッグ内を確認したところ，Ｖ名義の預金口座のキャッシュカード等在中の財布，Ｖ所有の携帯電話機等の物品が入っていた。甲は，これらを見て，Ｖの氏名，勤務先のほか，携帯電話機にわいせつな盗撮画像が保存されていることを知り，これを奇貨とし，Ｖから上記キャッシュカードの暗証番号を聞き出して上記口座から預金を引き出そうと思い，勤務先にいたＶに電話をかけ，「あんた盗撮してるな。警察に携帯を持って行かれたくないなら，あんたのキャッシュカードの暗証番号を教えろ。」と要求するなどした。Ｖは，この要求を断れば，盗撮の事実が警察に露見すると思い，やむを得ず甲に同暗証番号を教えた。その後，甲は，上記キャッシュカードを用いて現金自動預払機から現金５０万円を引き出した。
【記 述】
ア．甲が本件バッグを警察に届け出るために某所公園内から持ち出した行為は，Ｖによる占有の回復を困難にする行為であるため，窃盗罪又は占有離脱物横領罪が成立する。
イ．Ｖは本件バッグを甲から取り返す目的で暴行を加えており，この暴行は正当行為に該当するため，甲がＶの胸付近を１回平手で突いた行為の違法性が阻却される余地はなく，甲には，暴行罪又は傷害罪が成立する。
ウ．甲が本件バッグをＶから取り上げた行為は，甲の暴行に起因するＶの失神状態に乗じて本件バッグの占有を取得したといえるため，強盗罪が成立する。
エ．甲が現金自動預払機から現金５０万円を引き出した行為は，甲が，これに先行してＶから暗証番号を聞き出した時点で，Ｖの預金の払戻しを受け得る地位を得たことにより，その預金の占有を取得したといえるため，窃盗罪は成立しない。`,c1:"１．０個",c2:"２．１個",c3:"３．２個",c4:"４．３個",c5:"５．４個",c6:"",c7:"",c8:"",a:"1"},{year:"2019",num:"1",subject:"ken",q:`国又は地方公共団体との特殊な法律関係における人権に関する次のアからウまでの各記述について，ｂの見解がａの見解の根拠となっている場合には１を，そうでない場合には２を選びなさい。
ア．ａ．当該法律関係の特殊性だけを理由とする基本的人権の制約は正当化できず，個々の法律関係ごとに，いかなる人権が，いかなる理由で，どの程度制限されるのかを具体的に検討すべきである。
ｂ．特殊な法律関係といっても様々な関係があり，それらを特殊な法律関係として一律に捉え，同様の人権制約が妥当すると解するのは相当でない。
イ．ａ．特別な法律関係にある者に対して公権力が包括的な支配権を有し，法律の根拠なく人権を制限することができ，それについて裁判所の審査が及ばないとする伝統的な特別権力関係論は，日本国憲法下では妥当し得ない。
ｂ．日本国憲法は，国会を唯一の立法機関とし，徹底した法治主義の原則をとり，基本的人権の尊重を基本原則としている。
ウ．ａ．刑事施設被収容者の収容関係について，人が国又は地方公共団体の通常の統治権に服することで成立する一般権力関係におけるのとは異なる人権制限を行う必要性は，現在もなお肯定できる。
ｂ．刑事施設被収容者といえども人権の享有主体であることに変わりはなく，取り分け未決勾留中の者については，無罪推定原則が及んでいる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"112"},{year:"2019",num:"2",subject:"ken",q:`私人間における人権保障に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．「憲法の人権規定は，私人間においても直接適用される」とする説のうち，私的自治の原則により，人権の効力は私人相互間の場合にはその本質的な核心が侵されない限度で相対化されることを認める見解は，こうした相対化を認める限度において，直接適用説といっても間接適用説に類似したものになる。
イ．「憲法の人権規定は，公権力の統治行動に対して個人の基本的な自由と平等を保障する目的に出たもので，私人相互の関係を直接規律することを予定するものではない」とする説を前提にすると，私人間における権利・自由の対立については，その侵害の態様，程度が社会的に許容し得る一定の限界を超える場合に，私法規定の解釈を通じてその間の適切な調整を図ることができるとの見解は採り得ない。
ウ．「私人間の関係においても，相互の社会的力関係の相違から，一方が他方に優越し，事実上後者が前者の意思に服従せざるを得ない場合，憲法の人権規定は私人間に直接適用される」とする説について，判例は，こうした支配関係はその支配力の態様，程度，規模等において様々であり，どのような場合にこれを国又は公共団体の支配と同視すべきかの判定が困難であるとしている。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"121"},{year:"2019",num:"3",subject:"ken",q:`憲法の明文で規定されていない権利・自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．何人も，個人に関する情報をみだりに第三者に開示又は公表されない自由を有するところ，行政機関が住民基本台帳ネットワークシステムにより個人情報を収集，管理又は利用することは，外部からの不当なアクセス等による情報漏えいの具体的な危険があるものの，正当な行政目的の範囲内において行われるものである以上，かかる自由を侵害するものではない。
イ．何人も，前科及び犯罪経歴をみだりに公開されない自由を有するところ，前科等の有無が訴訟の重要な争点となっていて，市区町村長に照会して回答を得なければ他に立証方法がない場合であっても，裁判所から市区町村長に照会することが可能であるから，市区町村長が弁護士法に基づく照会に応じて前科等につき報告することは，公権力の違法な行使として許されない。
ウ．何人も，その承諾なしに，みだりに容ぼう・姿態を撮影されない自由を有するところ，現に犯罪が行われ若しくは行われた後間がないと認められる場合であって，証拠保全の必要性及び緊急性があり，かつ，その撮影が一般的に許容される限度を超えない相当な方法をもって行われるときは，警察官による犯人の容ぼうの写真撮影は，憲法に違反しない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"221"},{year:"2019",num:"4",subject:"ken",q:`信教の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．内閣総理大臣が靖国神社を参拝する行為は，他の宗教を信じる者に心理的圧迫を加えることになるので，これにより自己の心情ないし宗教上の感情が害され不快の念を抱いた者は，国の宗教活動を禁じた憲法第２０条第３項の定める政教分離原則に違反することを理由として国に損害賠償を請求することができる。
イ．憲法第２０条第１項前段及び同条第２項によって保障される信教の自由は，自己の信仰と相容れない信仰を持つ者の信仰に基づく行為に対しても寛容であることを要請するものであり，県護国神社による殉職した自衛官の合祀は，遺族が同神社の宗教行事に参加を強制されるなどの干渉等とならない限り，同神社が自由になし得る。
ウ．憲法第２０条第３項の禁止する宗教的活動に含まれないとされる宗教上の祝典，儀式，行事等であっても，国又はその機関が，宗教的信条に反するとしてその参加を拒否する者に対してそれらへの参加を強制することは，その者の信教の自由を直接侵害するものとして同条第２項に違反する。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"5"},{year:"2019",num:"5",subject:"ken",q:`表現の自由の制約の合憲性に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．軽犯罪法第１条第３３号は，「みだりに他人の家屋その他の工作物にはり札をし」た者を処罰の対象としているところ，はり札をする行為自体は思想を外部に発表する手段の１つであると認められるものの，その手段が他人の財産権，管理権を不当に害することは許されないから，この程度の規制は，公共の福祉のため，許された必要かつ合理的な制限であるというべきである。
イ．公職選挙法第１３８条第１項は，選挙に関し，投票を得るなどの目的をもって「戸別訪問をすること」を禁止しているところ，戸別訪問は，容易に他の方法により代替され得るものではなく，通常，それ自体何らの悪性を有するものでもないから，その規制の合憲性を判断するに当たっては，他に目的を達成することができるより狭い範囲の規制方法があるか否かを検討すべきである。
ウ．関税法第６９条の１１第１項第７号（旧関税定率法第２１条第１項第３号）は，輸入を禁止する物品として「風俗を害すべき書籍，図画」等と規定しているが，我が国内における健全な性的風俗を維持確保すべきことは公共の福祉に合致するものである上，「風俗」という用語が「性的風俗」を意味することはその文言自体から明らかであるので，明確性の原則にも反せず，このような制限はやむを得ない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"4"},{year:"2019",num:"6",subject:"ken",q:`憲法第２１条に関する次のアからウまでの各記述について，ｂの見解がａの見解の根拠となっている場合には１を，そうでない場合には２を選びなさい。
ア．ａ．「検閲」とは，行政権が主体となって，思想内容等の表現物を対象とし，その全部又は一部の発表の禁止を目的として，対象とされる一定の表現物につき網羅的一般的に，発表前にその内容を審査した上，不適当と認めるものの発表を禁止することを，その特質として備えるものであり，絶対的に禁止される。
ｂ．大日本帝国憲法下においては，文書，図画ないし新聞，雑誌等を出版直前ないし発行時に提出させた上，その発売，頒布を禁止する権限が内務大臣に与えられ，その運用を通じて実質的な検閲が行われたほか，映画フィルムにつき典型的な検閲が行われる等，思想の自由な発表，交流が妨げられるに至った経験を有する。
イ．ａ．公務員又は公職選挙の候補者に対する評価，批判等の表現行為に関する出版物の公布等の事前差止めは，原則として許されず，その表現内容が真実でなく，又はそれが専ら公益を図る目的のものではないことが明白であって，かつ，被害者が重大にして著しく回復困難な損害を被るおそれがあるときにのみ例外的に許される。
ｂ．表現行為に対する事前抑制は，表現物がその自由市場に出る前に抑止してその内容を読者等の側に到達させる途を閉ざし又はその到達を遅らせてその意義を失わせ，公の批判の機会を減少させるものであり，性質上，予測に基づくものとならざるを得ないこと等から広汎にわたりやすく，濫用のおそれがある上，実際上の抑止的効果が大きい。
ウ．ａ．主催者が集会を平穏に行おうとしているのに，その集会の目的や主催者の思想，信条等に反対する者らが，これを実力で阻止し，妨害しようとして紛争を起こすおそれがあることを理由に公の施設の利用を拒むことができるのは，警察の警備等によってもなお混乱を防止することができないなど特別な事情がある場合に限られる。
ｂ．集団行動による思想等の表現は，現在する多数人の集合体自体の力によって支持されているから，平穏静粛な集団であっても，一瞬にして暴徒と化し，勢いの赴くところ実力によって法と秩序をじゅうりんし，集団行動の指揮者はもちろん警察力を以てしても如何ともし得ないような事態に発展する危険が存在する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"112"},{year:"2019",num:"7",subject:"ken",q:`職業の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．薬局の開設につき，これを許可制とすることの目的が，国民の生命及び健康に対する危険の防止にある場合，当該規制の合憲性を肯定するためには，それが重要な公共の利益のために必要かつ合理的な措置であることに加え，より緩やかな規制によってはその目的を十分に達成することができないと認められることも要する。
イ．個人の経済活動の自由に対して，社会経済全体の均衡のとれた調和的発展を図るという積極目的の規制を設けることが正当化される根拠として，国民の生存権やその一環としての勤労権が保障されているなど，経済的劣位に立つ者に対する適切な保護政策を行うことが憲法上の要請とされていることを挙げることができる。
ウ．酒類販売業について免許制とすることを定めた酒税法の規定は，酒類販売業者には経済的基盤の弱い中小事業者が多いことに照らし，酒類販売業者を相互間の過当競争による共倒れから保護するという積極目的の規制であり，当該規制の目的に合理性が認められ，その手段・態様も著しく不合理であることが明白であるとは認められないから，違憲ではない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"2"},{year:"2019",num:"8",subject:"ken",q:`刑事手続上の人権保障に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．起訴されていない余罪を被告人が自認している場合に余罪を実質上処罰する趣旨で被告人を重く処罰することは，憲法第３１条に由来する不告不理の原則に反するが，憲法第３８条第３項の規定する補強法則との関係では問題は生じない。
イ．迅速な裁判を受ける権利を保障する憲法第３７条第１項は，それ自体が裁判規範性を有しており，審理の著しい遅延の結果，被告人の上記権利が害される異常な事態が生じた場合には，法律上の具体的な根拠がなくても審理を打ち切るべきである。
ウ．ビデオリンク方式による証人尋問は，犯罪被害者等の保護の要請から，裁判の公開原則の例外として定められたものであり，公開裁判を受ける権利を保障した憲法第３７条第１項，裁判の公開を定めた憲法第８２条第１項に反しない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"212"},{year:"2019",num:"9",subject:"ken",q:`次の対話は，婚姻の自由に関する教授と学生の対話である。教授の各質問に対する次のアからウまでの学生の各回答について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
教授．婚姻の自由の憲法上の位置付けについての判例としては，再婚禁止期間一部違憲判決（最高裁判所平成２７年１２月１６日大法廷判決，民集６９巻８号２４２７頁）が重要ですが，この判決はどのように述べているでしょうか。
ア．この判決は，婚姻をするかどうか，いつ誰と婚姻をするかは当事者間の自由かつ平等な意思決定に委ねられるべきこと（婚姻をするについての自由）は，「憲法第２４条第１項によって保障される」としています。
教授．再婚禁止期間を定めた当時の民法第７３３条の規定は，婚姻をするについての自由の直接的な制約だとされましたが，夫婦同氏制を定める民法第７５０条について，夫婦同氏制合憲判決（最高裁判所平成２７年１２月１６日大法廷判決，民集６９巻８号２５８６頁）はどのように述べていますか。
イ．同条は，婚姻の効力の１つとして夫婦が夫又は妻の氏を称することを定めたものであり，婚姻をすることについての直接の制約を定めたものではないとした上で，このような事実上の制約については立法裁量の審査の際に考慮すべきであるとしています。
教授．ところで，近年，海外主要国では同性婚の権利が憲法上保障されているとする判決が出されたり，法改正あるいは憲法改正によって同性婚の権利が保障される例が増えてきています。憲法第２４条第１項は，婚姻が「両性の合意のみ」に基づいて成立するとしていますが，同条項の解釈論として，同性婚の権利はどのように考えられるでしょうか。
ウ．今，先生のおっしゃった文言を重視すれば，同性婚の権利を同条項が保障しているとするのは難しいと思います。他方，同条項は，家制度の下での婚姻に関する戸主権を否定することを主たる趣旨とするので，この文言を過度に重視すべきではないという見解もあります。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"5"},{year:"2019",num:"10",subject:"ken",q:`国民の義務に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法第２６条第２項は，保護する子女に普通教育を受けさせる国民の義務を定めている。この点，親権者には教育の自由があるから，子女に普通教育を受けさせない親権者に対し，法律に制裁規定を設けることはできない。
イ．憲法第２７条第１項は，勤労の義務を定めている。このため，国は，憲法第１８条によって禁止されている「その意に反する苦役」に当たらない程度のものであれば，法律の定めによって刑罰をもって国民に勤労を強制することができる。
ウ．憲法第３０条は，納税の義務を定めている。この規定は，国政の運営に必要な財政を支えるための国民としての当然の義務を確認したものにすぎず，法律の定めなくして具体的な納税義務を国民に課すことはできない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"7"},{year:"2019",num:"11",subject:"ken",q:`憲法の概念に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．「固有の意味の憲法」とは，国家の統治の在り方を定めた基本法としての近代前の憲法を指す。これに対して，「立憲的意味の憲法」とは，国家権力を制限して国民の権利を保障するという思想に基づく近代以降の憲法のことをいう。
イ．「形式的意味の憲法」とは，憲法という名称を与えられた成文の法典（憲法典）を指す。これに対して，「実質的意味の憲法」とは，その存在形式のいかんを問わず，内容的に憲法と観念されるもののことをいう。
ウ．「硬性憲法」とは，日本国憲法のように，憲法改正が困難な憲法を指す。これに対して，「軟性憲法」とは，ドイツ連邦共和国基本法のように，憲法改正が容易でこれまで繰り返し改正が成立してきた憲法のことをいう。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"6"},{year:"2019",num:"12",subject:"ken",q:`天皇に関する次のアからウまでの各記述について，正しいものには〇，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法第６条第１項は，天皇が国会の指名に基づいて内閣総理大臣を任命する旨定めているが，国会の議決で内閣総理大臣を指名している以上，天皇が内閣総理大臣を任命するに当たって，内閣の助言と承認は不要である。
イ．憲法第４条第２項の定める国事行為の委任は，憲法第５条の定める摂政を置く場合とは異なり，国事行為の臨時代行に関する法律の定める事由が発生した場合に，天皇が内閣の助言と承認に基づいて国事行為を委任するものである。
ウ．憲法第７条は，天皇の国事行為について列挙しているが，天皇の即位に際して行われる大嘗祭は，即位の礼と同様に憲法第７条第１０号の定める「儀式」に当たるから，国事行為として行うことができる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"6"},{year:"2019",num:"13",subject:"ken",q:`憲法第９条に関する次のアからウまでの各記述について，ｂの見解がａの見解の根拠となっている場合には１を，そうでない場合には２を選びなさい。
ア．ａ．戦争の放棄について規定した憲法第９条第１項は，自衛のためであると侵略のためであるとを問わず，全ての戦争を放棄することとしたものである。
ｂ．「国際紛争を解決する手段として」の「戦争」という文言は，戦争抛棄ニ関スル条約（いわゆる不戦条約）に見られるような，通常の国際法上の用例に従って解釈されるべきである。
イ．ａ．日本国とアメリカ合衆国との間の相互協力及び安全保障条約（いわゆる日米安保条約）に基づき日本国内に駐留するアメリカ合衆国の軍隊は，憲法第９条第２項で保持しないこととされた「戦力」に該当する。
ｂ．憲法第９条第２項が戦力の不保持を定めているのは，わが国が戦力を保持し，自らその主体となってこれに指揮権，管理権を行使することにより，同条第１項において放棄するとした侵略戦争を引き起こすことがないようにするためである。
ウ．ａ．憲法第９条に違反する具体的な立法又は行政処分により，個人に何らかの不利益が生じたとしても，同条で保障された個人の権利が侵害されたものということはできない。
ｂ．憲法第９条は，前文における平和主義の原則を受けて規定されたものであり，平和達成のための禁止事項を前文よりも具体的に列挙しているが，これは国家機関に対して一定の行為を禁止するものであって，その保護法益は国民一般の公益である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"221"},{year:"2019",num:"14",subject:"ken",q:`議院の権能に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．国政調査権について，議院が保持する諸権能を実効的に行使するために認められた権能であると解する見解によれば，各議院が，国政調査権の行使として，特定の事件について裁判所の下した判決の内容の当否を調査することが認められる。
イ．議院規則について，両議院の会議その他の手続及び内部の規律に関する国会法の規定に法的効力を認めると，国会法の改廃について両議院の意思が異なる場合に，参議院の自主性が損なわれるおそれがある。
ウ．議院による懲罰について，公開議場における戒告，公開議場における陳謝，一定期間の登院停止，除名の４種のいずれの懲罰を科すにも，議院がその組織体としての秩序を維持するため，出席議員の過半数の議決を要する。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"6"},{year:"2019",num:"15",subject:"ken",q:`内閣に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．内閣は，行政権の行使について，国会に対し連帯して責任を負うことから，閣議によってその職権を行うことが求められ，したがって，国務大臣の罷免については，閣議にかけて決定しなければ，行うことができない。
イ．国務大臣は，国会議員でない者からも選ぶことができるが，国会議員の中から選ばれた国務大臣は，その在任中に国会議員の身分を失った場合，その法的効果として自動的に国務大臣の身分を失う。
ウ．衆議院において内閣不信任決議案が可決されたときは，１０日以内に衆議院が解散されない限り，内閣は総辞職をしなければならないが，参議院における問責決議には，かかる法的効力はない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"221"},{year:"2019",num:"16",subject:"ken",q:`違憲判断の在り方に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．国籍法の規定に関し，日本国民である父と日本国民でない母との間に出生した子の国籍取得に過剰な要件を設けることにより区別を生じさせている部分のみを除いて合理的に解釈することは，裁判所が法律にない新たな国籍取得の要件を創設するもので，国会の本来的な機能である立法作用を行うものとして許されない。
イ．衆議院の議員定数配分規定が選挙権の平等に反して違憲と判断された場合，行政事件訴訟法の事情判決の規定には，一般的な法の基本原則に基づくものとして理解すべき要素も含まれていると考えられ，公職選挙法も選挙関係訴訟については上記規定の準用を明示的に排除していないため，事情判決の法理により，その選挙の違法を主文で宣言することができる。
ウ．嫡出でない子の相続分を嫡出子の相続分の２分の１とした民法の法定相続分規定は，遅くとも当該規定が違憲とされた事案の相続が開始した当時に憲法第１４条第１項に違反していたため，その当時以降に開始された他の相続につき，関係者間の法律関係が確定的な段階に至っていない事案であれば，違憲無効とされた当該規定の適用を排除した上で法律関係を確定的なものとするのが相当である。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"7"},{year:"2019",num:"17",subject:"ken",q:`財政に関する次のアからエまでの各記述について，正しいものの組合せを，後記１から６までの中から選びなさい。
ア．予算は法律であるとする予算法律説の立場に立てば，予算措置を必要とする法律が成立したのに，それを執行するための予算が伴わないという事態は生じ得ないこととなる。
イ．国会は，予算の議決に際し，増額修正を行うことができるが，予算の作成・提出権が内閣に専属していることから，原案に新たな項を加えることはいかなる場合も許されない。
ウ．国会の決算審査は，予算執行者である内閣の責任を明らかにするためのものであり，決算には法規範性がなく，不承認の議決がなされても，既になされた収入支出には影響がない。
エ．内閣は，毎年，国会に対し決算を提出するほか，定期に，少なくとも毎年１回，国会及び国民に対して財政状況を報告しなければならない。`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．イとウ",c5:"５．イとエ",c6:"６．ウとエ",c7:"",c8:"",a:"6"},{year:"2019",num:"18",subject:"ken",q:`地方自治に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．地方議会は地方公共団体における議事機関であり，国会と同様の議会自治・議会自律の原則が認められるから，地方議会議員が議会で行った演説，討論等について議会外で責任を問われない権利が憲法上保障される。
イ．小規模な普通地方公共団体の議事機関として，議会ではなく，選挙権を有する者全員によって組織される総会を設けることは，地方自治の本旨に反するものではないから，憲法第９３条第１項に反しない。
ウ．憲法第９３条第２項は，地方公共団体の長，地方議会の議員等を地方公共団体の住民が直接選挙すべき旨を定めており，地方公共団体の長及び地方議会の議員の解職請求があった場合にその可否を住民投票によって決すべきことも同項の要請である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"212"},{year:"2019",num:"19",subject:"ken",q:`憲法と条約の効力関係に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法優位説によれば，条約締結の機関と手続を定めた憲法の規定は，条約の形式的効力と関わりがないと考えることになる。
イ．条約優位説によれば，違憲審査権の対象に「条約」という文言がない憲法の規定は，憲法が条約との関係で必ずしも最高法規でないことを示していると考えることになる。
ウ．憲法優位説によれば，条約の承認手続と比べて憲法改正手続が厳格であることは，憲法が優位する効力を有する根拠となると考えることになる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"211"},{year:"2019",num:"20",subject:"ken",q:`日本国憲法の改正に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. 憲法改正の手続において必要とされる発議とは，通常の議案についていわれる発議が原案を提出することを意味するのとは異なり，国民に提案すべき憲法の改正案を国会が決定することを意味している。
イ. 国民による承認の要件として必要とされる過半数の賛成の意味については，憲法上複数の解釈があり得たが，それらの中から，法律で，有効投票総数の過半数の賛成をいうものと定められた。
ウ. 国民投票において過半数の賛成があったとしても，一定の投票率に達しなかったときは，その国民投票は成立せず，国民の承認を得られなかったものとする制度が，法律で設けられている。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"112"},{year:"2019",num:"1",subject:"min",q:`制限行為能力者の行為であることを理由とする取消しに関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．未成年者がした売買契約は，親権者の同意を得ないでした場合であっても，その契約が日常生活に関するものであるときは，取り消すことができない。
イ．成年被後見人がした売買契約は，成年後見人の同意を得てした場合であっても，その契約が日常生活に関するものであるときを除き，取り消すことができる。
ウ．被保佐人がした保証契約は，保佐人の同意を得てした場合には，取り消すことができない。
エ．被補助人が，補助人の同意を得なければならない行為を，その同意又はこれに代わる家庭裁判所の許可を得ないでしたときは，その行為は取り消すことができる。
オ．成年被後見人の行為であることを理由とする取消権の消滅時効の起算点は，成年被後見人が行為能力者となった時である。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2019",num:"2",subject:"min",q:`Ａがその財産の管理人を置かないで行方不明となったことから，家庭裁判所は，Ｂを不在者Ａの財産の管理人として選任した。この事例に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａが甲土地を所有している場合，ＢがＡを代理して甲土地をＣに売却するためには，家庭裁判所の許可を得る必要がある。
イ．Ａが所有する現金が発見された場合，ＢがＡを代理してその現金をＤ銀行のＡ名義普通預金口座に預け入れるためには，家庭裁判所の許可を得る必要はない。
ウ．ＡがＥに対して借入金債務を負っており，その債務が弁済期にある場合，ＢがＡのためにＥに対しその債務の弁済をするためには，家庭裁判所の許可を得る必要はない。
エ．Ａが被相続人Ｆの共同相続人の一人である場合，ＢがＡを代理してＦの他の共同相続人との間でＦの遺産について協議による遺産分割をするためには，家庭裁判所の許可を得る必要はない。
オ．Ａに子Ｇがいる場合，ＢがＡを代理してＧに対し結婚資金を贈与するためには，家庭裁判所の許可を得る必要はない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2019",num:"3",subject:"min",q:`代理に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａの代理人Ｂがその代理権の範囲内でＡのためにすることを示さずにＣと契約を締結した場合，Ｃにおいて，ＢがＡのために契約を締結することを知っていたのでなければ，ＡＣ間に契約の効力が生じることはない。
イ．Ａは，Ｂ及びＣからあらかじめ許諾を得た場合，Ｂ及びＣの双方を代理してＢＣ間の契約を締結することができる。
ウ．委任による代理人が本人の指名に従って復代理人を選任した場合，代理人は，選任時に復代理人が不適任であることを知っていたとしても，本人に対して復代理人の選任についての責任を負うことはない。
エ．法定代理人がやむを得ない事由があるために復代理人を選任した場合，代理人は，本人に対して復代理人の選任及び監督についての責任のみを負う。
オ．無権代理人は，本人の追認を得られなかったとしても，自己に代理権があると過失なく信じて行為をしたときは，相手方に対して履行又は損害賠償の責任を負わない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2019",num:"4",subject:"min",q:`条件に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．停止条件付法律行為は，当事者が条件が成就した場合の効果をその成就した時以前にさかのぼらせる意思を表示したとしても，条件が成就した時からその効果が生ずる。
イ．条件の成否が未定である間における当事者の権利義務は，一般の規定に従い，処分し，相続し，若しくは保存し，又はそのために担保を供することができる。
ウ．不能の解除条件を付した法律行為は，無効となる。
エ．条件が成就することによって不利益を受ける当事者が故意にその条件の成就を妨げたときは，相手方は，その条件が成就したものとみなすことができる。
オ．停止条件付法律行為は，その条件が単に債務者の意思のみに係るときは，無条件となる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2019",num:"5",subject:"min",q:`取得時効に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．時効期間中に建物が第三者の不法行為により一部損傷した場合の損害賠償請求権は，その建物の所有権を時効により取得した者に帰属する。
イ．不動産の所有権を時効により取得した者は，時効完成後にその不動産を譲り受けた者に対し，登記をしなくてもその所有権の取得を対抗することができる。
ウ．被相続人の占有により不動産の取得時効が完成した場合，その共同相続人の一人は，自己の相続分の限度においてのみ取得時効を援用することができる。
エ．自己の所有物を占有する者は，その物について取得時効を援用することができない。
オ．占有主体に変更があって承継された二個以上の占有が併せて主張される場合，占有者の善意無過失は，最初の占有者の占有開始時に判定される。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2019",num:"6",subject:"min",q:`不動産物権変動に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡがＡ所有の甲建物をＢに売却し，さらにＢがこれをＣに売却した場合，Ｃは，Ａに対し，登記をしなくても売買による甲建物の所有権の取得を対抗することができる。
イ．Ａ所有の甲土地についてＢがＡから遺贈を受けた場合において，Ａの共同相続人の一人であるＣの債権者Ｄが甲土地についてＣが共同相続したものとしてＣのその持分を差し押さえ，その旨の登記がされたときは，Ｂは，Ｄに対し，登記をしなくても遺贈による甲土地の単独所有権の取得を対抗することができる。
ウ．甲土地を所有するＡが遺言をしないで死亡し，二人の子ＢＣのうちＢが相続放棄をしてＣが唯一の相続人となった場合において，Ｂの債権者Ｄが甲土地についてＢも共同相続したものとしてＢのその持分を差し押さえ，その旨の登記がされたときは，Ｃは，Ｄに対し，登記をしなくても単独相続による甲土地の所有権の取得を対抗することができる。
エ．Ａ所有の甲土地をＡからＢが買い受けた後，Ｂの代金未払を理由にＡＢ間の売買契約が解除された場合において，その後にＢがＣに甲土地を売却しその旨の登記がされたときは，Ａは，Ｃに対し，解除による甲土地の所有権の復帰を対抗することができない。
オ．Ａが新築して所有する未登記の甲建物をＢが不法に占有している場合，Ａは，Ｂに対し，登記をしなければ甲建物の所有権の取得を対抗することができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2019",num:"7",subject:"min",q:`Ａは，その所有する動産甲をＢに保管させていた。この事例に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ｂは，甲をＣに売却し，Ｃは，甲がＢの所有物であると過失なく信じて，現実の引渡しを受けた。甲が道路運送車両法による登録を抹消された自動車であった場合，Ｃは，即時取得により甲の所有権を取得することができない。
イ．Ｂが死亡し，その唯一の相続人Ｄは，甲がＢの相続財産に属すると過失なく信じて，現実に占有を開始した。甲が宝石であった場合，Ｄは，即時取得により甲の所有権を取得する。
ウ．Ｂは，甲をＥに贈与し，Ｅは，甲がＢの所有物であると過失なく信じて，現実の引渡しを受けた。甲が宝石であった場合，Ｅは，即時取得により甲の所有権を取得する。
エ．Ｂの債権者により甲が強制競売に付され，Ｆは，甲がＢの所有物であると過失なく信じて，甲を競落し，現実の引渡しを受けた。甲が宝石であった場合，Ｆは，即時取得により甲の所有権を取得する。
オ．Ｂは，甲をＧに質入れし，Ｇは，甲がＢの所有物であると過失なく信じて，現実の引渡しを受けた。甲が宝石であった場合，Ｇは，即時取得により甲を目的とする質権を取得する。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2019",num:"8",subject:"min",q:`所有権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．土地の使用収益の権原なく播種された種子が苗に生育した場合，その苗の所有権は，播種した者ではなく，その土地の所有者が取得する。
イ．立木の所有権に関する明認方法は，現所有者と前所有者が共同して，現所有者名のほか，所有権の取得原因，前所有者名を表示することが必要である。
ウ．甲土地とその上の立木を所有するＡが立木の所有権を留保して甲土地をＢに譲渡した後，ＢがＣに甲土地を立木とともに譲渡した場合，Ａは，立木の所有権の留保について登記や明認方法を備えなくても，立木の所有権をＣに主張することができる。
エ．甲土地とその上の立木を所有するＡがＢに甲土地を立木とともに譲渡し，甲土地についてＡからＢへの所有権移転登記がされた後，ＣがＡから立木のみを譲り受け，立木について明認方法を備えた場合，Ｃは立木の所有権をＢに主張することができる。
オ．加工者が他人の木材のみを材料としてこれに工作を加えた場合において，その工作によって生じた価格が材料の価格を著しく超えるときは，加工者がその加工物の所有権を取得する。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2019",num:"9",subject:"min",q:`相隣関係に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡとＢが共有する土地の分割によって公道に通じないＡ所有の甲土地と公道に通じるＢ所有の乙土地が生じた場合において，甲土地から公道に至るためにはＣ所有の丙土地を通行するのが最も損害が少ないときは，Ａは，丙土地を通行することができる。
イ．土地の所有者は，隣地の所有者が隣地に設置した排水溝の破壊又は閉塞により自己の土地に損害が及んでいる場合，隣地の所有者に，排水溝の修繕又は障害の除去をさせることができる。
ウ．土地の所有者は，隣地の竹木の枝が境界線を越えているときは，自らその枝を切除することができる。
エ．境界線上に設けられた境界標は，相隣者の共有に属するものと推定される。
オ．土地の所有者は，隣地の所有者と共同の費用で，境界標を設けることができる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"1"},{year:"2019",num:"10",subject:"min",q:`Ａ，Ｂ及びＣが各３分の１の割合で甲建物を共有している場合に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａは，その持分に抵当権を設定する場合，Ｂ及びＣの同意を得る必要がある。
イ．ＤがＡ，Ｂ及びＣに無断でＤ名義の所有権移転登記をした場合，Ａは，Ｂ及びＣの同意を得ることなく単独で，Ｄに対してその所有権移転登記の抹消登記手続を請求することができる。
ウ．Ａは，その持分を放棄する場合，Ｂ又はＣの同意を得る必要がある。
エ．ＡがＢ及びＣに無断で甲建物をＥに引き渡し，無償で使用させている場合，Ｂは，Ｃの同意を得ることなく単独で，Ｅに対して甲建物の明渡しを請求することができる。
オ．ＡがＢに対して甲建物の管理に関する債権を有する場合において，Ｂがその持分をＦに譲渡したときは，Ａは，Ｆに対してもその債権を行使することができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2019",num:"11",subject:"min",q:`不動産を目的とする担保物権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．留置権者は，債務者の承諾を得なくても，目的不動産を賃貸することができる。
イ．不動産の保存の先取特権の効力を保存するためには，保存行為が完了した後直ちに登記をしなければならない。
ウ．不動産質権の設定後に質権者が質権設定者に目的不動産を占有させたとしても，質権の効力は影響を受けない。
エ．不動産質権者は，設定行為に定めがあるときは，その債権の利息を請求することができる。
オ．抵当権の存続期間は，１０年を超えることができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2019",num:"12",subject:"min",q:`留置権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．留置権者が目的物を紛失したときは，留置権は消滅する。
イ．他人の物の占有者は，その物に関して生じた債権が弁済期にないときであっても，その物を留置することができる。
ウ．債務者は，相当の担保を供して，留置権の消滅を請求することができる。
エ．留置権者は，留置権に基づき，目的物の競売を申し立てることはできない。
オ．Ａがその所有する甲建物をＢに売却して引き渡した後，Ａが甲建物をＣに売却してその旨の登記をした場合において，ＣがＢに対して甲建物の明渡請求をしたときは，Ｂは，Ａの債務不履行に基づく損害賠償請求権を被担保債権として，甲建物を留置することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2019",num:"13",subject:"min",q:`質権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．債権質の質権者は，質権の目的が金銭債権でない場合，これを直接に取り立てることはできない。
イ．動産質権者は，質物から生ずる果実を収取し，他の債権者に優先して被担保債権の弁済に充当することができる。
ウ．質権者は，質権設定者の承諾を得なければ，自己の債務の担保として質物をさらに質入れすることはできない。
エ．質権は，設定行為に定めがないときは，質物の隠れた瑕疵によって生じた損害の賠償を担保しない。
オ．Ａは，Ｂに対して有する債権を担保するために，ＢがＡに対して有する債権を目的として質権の設定を受けることができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2019",num:"14",subject:"min",q:`抵当権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．抵当権者は，目的物が第三者の行為により滅失した場合，物上代位により，所有者がその第三者に対して有する損害賠償請求権から優先弁済を受けることができる。
イ．一人の者が所有する互いに主従の関係にない甲乙２棟の建物が工事により１棟の丙建物となった場合において，甲建物と乙建物とにそれぞれ抵当権が設定されていたときは，それらの抵当権は，丙建物のうちの甲建物と乙建物の価格の割合に応じた持分を目的とするものとして存続する。
ウ．借地上の建物について抵当権が設定された場合，抵当権の効力は，敷地の賃借権に及ぶことはない。
エ．物の引渡請求権を担保するために抵当権を設定する契約は，無効である。
オ．後日発生すべき貸付金債権を担保するために抵当権を設定する契約がされ，その旨の登記がされた後にその貸付金債権が生じた場合，抵当権はその債権を有効に担保する。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"5"},{year:"2019",num:"15",subject:"min",q:`抵当権の効力が及ぶ範囲に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．抵当権設定者が，抵当権の目的である土地を第三者に賃貸していた場合，その担保する債権について不履行がなくても，抵当権の効力は，その賃料債権に及ぶ。
イ．土地の所有者が，土地に抵当権を設定した後，その土地上に立木を植栽した場合，抵当権の効力は，その立木に及ぶ。
ウ．抵当権設定者が，抵当権の目的である建物に宝石を持ち込んで保管していた場合，抵当権の効力は，その宝石に及ぶ。
エ．抵当権の目的である建物が天災のため崩壊し動産となった場合，抵当権の効力は，その動産に及ぶ。
オ．抵当権設定者から抵当権の目的である建物を賃借した賃借人が，その所有する取り外し可能なエアコンを建物内に設置している場合，抵当権の効力は，そのエアコンに及ばない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2019",num:"16",subject:"min",q:`債務者が設定した譲渡担保に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．債務者が弁済期に債務の弁済をしなかった場合において，不動産の譲渡担保権者が目的不動産を譲渡したときは，譲受人がいわゆる背信的悪意者に当たるときであっても，債務者は，残債務を弁済して目的不動産を受け戻すことができない。
イ．債務者は，被担保債権の弁済期後は，譲渡担保の目的物の受戻権を放棄することにより，譲渡担保権者に対し清算金の支払を請求することができる。
ウ．債務者が弁済期に債務の弁済をしなかった場合において，不動産の譲渡担保権者が目的不動産を譲渡したときは，債務者は，譲受人からの明渡請求に対し，譲渡担保権者に対する清算金支払請求権を被担保債権とする留置権を主張することができない。
エ．譲渡担保の被担保債権の弁済期後に目的不動産が譲渡担保権者の債権者によって差し押さえられ，その旨の登記がされた場合，債務者は，その後に被担保債権に係る債務の全額を弁済しても，差押債権者に対し，目的不動産の所有権を主張することができない。
オ．構成部分の変動する集合動産であっても，その種類，所在場所及び量的範囲を指定するなどの方法によって目的物の範囲が特定される場合には，一個の集合物として譲渡担保の目的とすることができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2019",num:"17",subject:"min",q:`保証に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．保証契約は，書面又はその内容を記録した電磁的記録によってされなければ，その効力を生じない。
イ．保証人は，債権者が保証人を指名した場合でも，行為能力者であることを要する。
ウ．貸金等根保証契約は，主たる債務の元本の確定すべき期日の定めがない場合，その効力を生じない。
エ．主たる債務につき期限が延長されても，その効力は保証債務には及ばない。
オ．保証人が催告の抗弁権を行使したにもかかわらず，債権者が催告を怠ったために主たる債務者から全部の弁済を得られなかったときは，保証人は，債権者が直ちに催告をすれば弁済を得ることができた限度において，その義務を免れる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"2"},{year:"2019",num:"18",subject:"min",q:`指名債権の譲渡に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．債権譲渡の予約について確定日付のある証書による債務者の承諾がされても，予約の完結による債権譲渡の効力は，その承諾をもって第三者に対抗することができない。
イ．将来発生すべき債権を目的とする債権譲渡契約は，その締結時において目的債権の発生が確実に期待されるものでなければ，効力を生じない。
ウ．未完成仕事部分に関する請負報酬金債権の譲渡について，債務者の異議をとどめない承諾がされても，譲受人がその債権が未完成仕事部分に関する請負報酬金債権であることを知っていた場合には，債務者は，その債権譲渡の承諾後に生じた仕事完成義務不履行を理由とする当該請負契約の解除をもって譲受人に対抗することができる。
エ．同一の債権を目的とする債権譲渡と債権差押えとの間の優劣は，債権譲渡についての債務者以外の第三者に対する対抗要件が具備された時と債権差押命令が発令された時の先後で決する。
オ．債権が二重に譲渡され，第一の債権譲渡について確定日付のある証書による通知が債務者に到達した後，第二の債権譲渡について確定日付のある証書による通知が債務者に到達した場合，第一の債権譲渡の確定日付が第二の債権譲渡の確定日付に後れるときは，第一の債権譲渡の譲受人は，債権の取得を第二の債権譲渡の譲受人に対抗することができない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2019",num:"19",subject:"min",q:`債務者Ａが債権者Ｂに対して負う金銭債務（以下「本件債務」という。）に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ｂは，Ａの意思に反しては，本件債務を免除することができない。
イ．第三者は，Ａの意思に反しても，本件債務を主たる債務とする保証をすることができる。
ウ．本件債務の物上保証人は，Ａの意思に反しては，本件債務を弁済することができない。
エ．Ｂと第三者Ｃとは，Ａの意思に反しては，Ｃに債務者を交替する更改をすることができない。
オ．Ｂは，Ａの意思に反しては，Ｂが第三者に対して負う金銭債務について，本件債務に係る債権をもって代物弁済をすることができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2019",num:"20",subject:"min",q:`弁済の提供に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．売買代金債権が譲渡され，債務者対抗要件が具備された場合であっても，債務者によるその代金の弁済の提供は，売買代金債権の譲渡人の現在の住所においてすれば足りる。
イ．特定物の売主は，その特定物を売買契約の締結当時から自己の住所に保管している場合，その引渡債務について弁済の提供をするに当たり，買主に対し，引渡しの準備をしたことを通知してその受領の催告をすれば足りる。
ウ．賃借人には債務不履行がないのに，賃貸人が債務不履行による賃貸借契約の解除を主張して賃料の受領を拒絶し，口頭の提供をしても賃料の弁済を受領しない意思が明確である場合，賃借人は，賃料債務について，口頭の提供をしなくても，履行遅滞の責任を負わない。
エ．不法行為の加害者Ａが被害者Ｂに対して第一審判決で支払を命じられた損害賠償金１億円の全額について弁済の提供をしたが，その後，控訴審判決において損害賠償金が２億円に増額され，それが確定した場合，Ａがした弁済の提供は，無効となる。
オ．甲土地の賃貸人がその賃料の支払を催告したのに対し，賃借人が，賃貸借の目的物ではない乙土地も共に賃貸借の目的物であると主張して，甲土地の賃料額を超える額の金員を，その全額が受領されるのでなければ支払わない意思で提供した場合，債務の本旨に従った弁済の提供があったものとはいえない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2019",num:"21",subject:"min",q:`更改及び混同に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．消費貸借契約の成立後，第三者が借主と連帯して債務弁済の責任を負担することを約することは，更改に当たる。
イ．債権者の交替による更改は，確定日付のある証書によってしなければ，第三者に対抗することができない。
ウ．保証人が主たる債務者を単独で相続した場合，保証債務を担保するために抵当権が設定されているときは，保証債務は消滅しない。
エ．更改の当事者は，更改前の債務の目的の限度であれば，その債務の担保として第三者が設定した抵当権を，その第三者の承諾を得ずに更改後の債務に移すことができる。
オ．Ａが所有する甲建物の賃借人ＢがＡから甲建物を譲り受けて占有を継続していたが，ＣがＡから甲建物を譲り受け，その旨の所有権移転登記を経由したため，Ｂにおいて甲建物の所有権の取得をＣに対抗することができなくなったときは，賃借権は，Ｃに対する関係で消滅しなかったものとなる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"1"},{year:"2019",num:"22",subject:"min",q:`同時履行に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．有償の委任契約における委任者の報酬支払義務と受任者の事務処理義務とは，同時履行の関係にある。
イ．売買の目的物である未登記建物に隠れた瑕疵があることを理由に売買契約が解除された場合，売主の代金返還義務と買主の建物返還義務とは，同時履行の関係にある。
ウ．建物賃貸借契約が終了し賃借人が造作買取請求権を行使した場合，賃貸人の造作買取代金支払義務と賃借人の建物明渡義務とは，同時履行の関係にある。
エ．未成年者が行為能力の制限を理由に動産売買契約を取り消した場合，両当事者が互いに負う返還義務返還義務は，同時履行の関係にある。
オ．期間満了による建物の賃貸借契約終了に伴う賃借人の建物明渡義務と賃貸人の敷金とは，同時履行の関係にある。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2019",num:"23",subject:"min",q:"契約に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．死因贈与は，負担付ですることができない。",c2:"２．準消費貸借は，目的物の引渡しがなければ成立しない。",c3:"３．使用貸借は，書面でしなければ成立しない。",c4:"４．寄託は，報酬を定めなければ成立しない。",c5:"５．民法上の組合契約の出資は，金銭を目的とするものに限られない。",c6:"",c7:"",c8:"",a:"5"},{year:"2019",num:"24",subject:"min",q:`ＡとＢは，平成３１年４月１日，Ａ所有の中古自転車（以下「甲」という。）を，同月１０日引渡し，同月２０日代金支払の約定でＢに売却する旨の売買契約を締結した。この事例に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．甲は，平成３１年４月８日，Ｂの責めに帰すべき事由により滅失した。この場合において，ＡがＢに対して同月２０日に代金の支払を請求したときは，Ｂは，この請求を拒むことができない。
イ．Ａは，Ｂに対し，平成３１年４月１０日，甲を引き渡したが，甲には売買契約の締結前から隠れた瑕疵があった。この場合において，その瑕疵の存在により契約をした目的を達することができないときは，Ｂは，売買契約を解除することができる。
ウ．Ａは，Ｂに対し，平成３１年４月１０日，甲を引き渡したが，Ｂは，同月２０日を経過しても代金を支払わず，同月２１日，事情を知らないＣに甲を売却し，引き渡した。この場合において，Ａが相当の期間を定めて催告してもＢが代金を支払わないときは，Ａは，Ｂとの間の売買契約を解除し，Ｃに対し，甲の返還を求めることができる。
エ．ＡがＢに約定どおり甲を引き渡さなかったことから，Ｂは，Ａに対し，平成３１年４月２１日，代金につき弁済の提供をしないまま，甲の引渡しを求めた。この場合，Ａは，Ｂに対し，同時履行の抗弁権を主張して，Ｂからの引渡請求を拒むことができる。
オ．Ａは，Ｂに対し，平成３１年４月２５日，甲を引き渡したが，Ｂは，Ａに対し，その後も代金を支払っていない。この場合，Ａは，Ｂに対し，甲の代金及び同月２１日からの利息の支払を求めることができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2019",num:"25",subject:"min",q:`資材置場とするためにされた建物所有を目的としない土地の賃貸借に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．賃貸借は，書面でしなければ，その効力を生じない。
イ．賃貸借の存続期間は，２０年を超えることができない。
ウ．当事者が賃貸借の期間を定めた場合であっても，賃貸人がその期間内に解約をする権利を合意により留保したときは，賃貸人は，いつでも解約の申入れをすることができる。
エ．賃貸借の期間が満了した後賃借人が土地の使用を継続する場合において，賃貸人がこれを知りながら異議を述べないときは，従前の賃貸借と同一の条件で更に賃貸借をしたものと推定される。
オ．賃貸借の期間を定めなかった場合において，当事者が解約の申入れをしたときは，賃貸借は，解約申入れの意思表示が相手方に到達した時に終了する。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2019",num:"26",subject:"min",q:`請負人の担保責任に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．仕事の目的物に重要でない瑕疵がある場合において，その修補に過分の費用を要するときは，注文者は，請負人に対し，瑕疵の修補を請求することができない。
イ．仕事の目的物に瑕疵があり，その修補を請求することができる場合であっても，注文者は，請負人に対し，瑕疵の修補に代わる損害賠償を請求することができる。
ウ．仕事の目的物の瑕疵が注文者の与えた指図によって生じたときは，請負人は，その指図が不適当であることを知りながら注文者に告げなかったときであっても，瑕疵担保責任を負わない。
エ．建物の建築の請負において，注文者による瑕疵修補の請求は，建物が完成した時から１年以内にしなければならない。
オ．請負人は，瑕疵担保責任を負わない旨の特約をしたときであっても，知りながら告げなかった事実については，その責任を免れない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2019",num:"27",subject:"min",q:`不法原因給付に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．強行法規に違反してされた給付であっても，不法原因給付に該当しないことがある。
イ．登記された建物が不倫関係の維持を目的として贈与され，受贈者に引き渡されたが，所有権移転登記手続はされていない場合，贈与者は，受贈者に対し，建物の明渡請求をすることができない。
ウ．贈与に基づく動産の引渡しが不法原因給付に該当し，不当利得に基づく動産の返還請求をすることができない場合，贈与者は，受贈者に対し，所有権に基づく動産の返還請求をすることができない。
エ．不法原因給付の給付者と受領者との間において，その給付後に，その原因となった契約を合意の上解除してその給付を返還する特約をしたとしても，給付者は，その返還を請求することができない。
オ．消費貸借が，その成立の経緯において，貸主の側に少しでも不法があったときは，借主の側に多大の不法があったとしても，貸主は貸金の返還を請求することができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2019",num:"28",subject:"min",q:`不法行為に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．土地の工作物の設置又は保存に瑕疵があることによって他人に損害が生じ，Ａがその工作物の占有者として損害賠償の責任を負う場合において，その損害を賠償したＡは，その損害の原因について責任を負うＢに対し，求償権を行使することができる。
イ．Ａが所有する樹木の植栽又は支持に瑕疵があることによってＢに損害が生じた場合であっても，Ａが相当の注意をもってその管理をしていたときは，Ａが損害賠償の責任を負うことはない。
ウ．Ａが所有する甲建物の設置又は保存に瑕疵があることによってＢに損害が生じた場合には，その瑕疵がＡの前の所有者が甲建物を所有していた時期に生じたものであるときであっても，Ａは，甲建物の所有者として損害賠償の責任を負う。
エ．Ａがその所有する甲建物をＢに賃貸し，Ｂが甲建物をＣに転貸し，それぞれ引渡しがされた場合には，甲建物の設置又は保存に瑕疵があることによって第三者に生じた損害について，Ｂが占有者として損害賠償の責任を負うことはない。
オ．土地の工作物の設置又は保存に瑕疵があることによってＡに損害が生じ，その工作物の占有者Ｂが損害賠償の責任を負う場合において，Ｂが無資力であるときは，その工作物の所有者も損害賠償の責任を負う。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2019",num:"29",subject:"min",q:`過失相殺及び損益相殺に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．被害者の過失を考慮するためには，被害者に自己の行為の責任を弁識するに足りる知能が備わっていることを要する。
イ．内縁の夫が運転する自動車に同乗していた者が，内縁の夫と第三者の双方の過失による交通事故で負傷し，第三者に対し損害賠償を請求する場合において，裁判所は，損害賠償の額を定めるに当たり，内縁の夫の過失を被害者側の過失として考慮することはできない。
ウ．複数の加害者の過失及び被害者の過失が競合する一つの交通事故において，その交通事故の原因となった全ての過失の割合（いわゆる絶対的過失割合）を認定することができるときには，絶対的過失割合に基づく被害者の過失による過失相殺をした損害賠償額について，加害者らは連帯して共同不法行為に基づく賠償責任を負う。
エ．被害者に対する加害行為と加害行為前から存在した被害者の疾患とが共に原因となって損害が発生した場合において，当該疾患の態様，程度などに照らし，加害者に損害の全部を賠償させるのが公平を失するときは，裁判所は，損害賠償の額を定めるに当たり，過失相殺の規定を類推適用して，被害者の疾患を考慮することができる。
オ．不法行為により死亡した被害者の相続人が加害者に対し不法行為に基づく損害賠償を請求した場合，裁判所は，生命保険契約に基づいて給付される死亡保険金の額を，損益相殺により損害賠償額から控除することができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2019",num:"30",subject:"min",q:`婚姻に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．成年被後見人は，成年後見人の同意がなくても婚姻をすることができる。
イ．婚姻の届出自体については当事者間に意思の合致があったとしても，それが単に他の目的を達するための便法として仮託されたものにすぎないときは，婚姻はその効力を生じない。
ウ．養親は，養子と離縁した場合には，その者と婚姻することができる。
エ．女性は，前婚の解消の時に懐胎していなかった場合には，前婚の解消の日から起算して１００日以内であっても，再婚をすることができる。
オ．Ａ男がＢ女を強迫して婚姻を成立させた後に，強迫を理由として婚姻が取り消された場合には，Ｂ女がその婚姻中に懐胎して子が出生したとしても，出生した子は，Ａ男の子とは推定されない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2019",num:"31",subject:"min",q:`夫婦に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．夫婦の一方が他の一方に対して有する債権について，婚姻中に消滅時効が完成することはない。
イ．夫婦である父母が共同して親権を行う場合において，その一方が子を代理する権限を共同名義で行使したときは，それが他の一方の意思に反したときであっても，代理行為の相手方が悪意でない限り，そのためにその行為の効力は妨げられない。
ウ．夫婦の一方について成年後見開始の審判がされた場合，他の一方が成年後見人になる。
エ．夫婦の一方が強度の精神病にかかり，回復の見込みがない場合であっても，裁判所は，一切の事情を考慮して婚姻の継続を相当と認めるときは，他の一方による離婚の請求を棄却することができる。
オ．夫婦の一方が日常の家事に関して第三者と法律行為をした場合は，他の一方は，その第三者に対し責任を負わない旨を予告していたときであっても，その法律行為によって生じた債務について，連帯してその責任を負う。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2019",num:"32",subject:"min",q:`父母の離婚に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．婚姻中の父母が別居し，子と同居していない親と同居している親との間で，子との面会交流について協議が調わない場合であっても，父母の離婚前は，家庭裁判所は，面会交流について相当な処分を命ずることはできない。
イ．父母が協議上の離婚をする際に，その協議により子を監護すべき者を定めたときは，家庭裁判所は，その定めを変更することができない。
ウ．父母の離婚により，子が母と氏を異にすることになった場合，その子が母の氏を称するためには，家庭裁判所の許可を得た上で，戸籍法の定めるところにより届け出ることが必要である。
エ．子の出生前に父母が離婚した場合には，母がその子の親権者となるが，その子が出生した後に，父母の協議によって父を親権者と定めることができる。
オ．父母が離婚した場合において，親権者と定められた母が死亡したときは，生存している父が，直ちに親権者となる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"5"},{year:"2019",num:"33",subject:"min",q:"Ａ及びＢの実子であるＣを養子とし，Ｄ及びＥを養親とする特別養子縁組に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．家庭裁判所が特別養子縁組を成立させるためには，Ｄ及びＥの請求が必要である。",c2:"２．家庭裁判所は，Ｄ及びＥが婚姻していない場合であっても，Ｃとの特別養子縁組を成立させることができる。",c3:"３．Ａ及びＢがＣを虐待していた場合には，ＣとＤ及びＥとの間で特別養子縁組を成立させるに当たり，Ａ及びＢの同意を得る必要はない。",c4:"４．特別養子縁組が成立した場合，Ａ及びＢとＣとの親族関係は終了する。",c5:"５．特別養子縁組が成立した場合，Ｄ及びＥは，特別養子縁組の離縁を請求することができない。",c6:"",c7:"",c8:"",a:"2"},{year:"2019",num:"34",subject:"min",q:`相続に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．相続人が数人ある場合において，被相続人が祖先の祭祀を主宰すべき者を指定していなかったとしても，被相続人が所有していた墳墓は，遺産分割の対象とならない。
イ．遺産分割は，相続の承認又は放棄をすべき期間内には，することができない。
ウ．複数の相続人が被相続人から賃借人の地位を承継したときは，被相続人が延滞していたその賃貸借に係る賃料債務は不可分債務となる。
エ．被相続人が他人の過失による交通事故によって即死した場合でも，その事故による被相続人の精神的損害についての慰謝料請求権は，相続の対象となる。
オ．遺産分割後に遺産である建物に隠れた瑕疵があったことが判明した場合であっても，その建物を遺産分割により取得した相続人は，他の相続人に対し，瑕疵担保責任を追及することができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2019",num:"35",subject:"min",q:`遺産分割に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．共同相続人Ａ及びＢのうち，Ｂが遺産分割協議書を偽造して，相続財産である甲不動産についてＢへの所有権移転登記をした場合，Ｂは，Ａの相続回復請求権の消滅時効を援用することができない。
イ．被相続人が，共同相続人Ａ及びＢのうち，Ａに甲不動産を相続させる旨の遺言を残して死亡し，その遺言が遺産分割の方法の指定と解される場合であっても，ＡＢ間の遺産分割協議を経なければ，Ａは甲不動産を取得することができない。
ウ．被相続人は，禁止期間を限定したとしても，遺言で遺産の分割を禁ずることはできない。
エ．Ａ及びＢが共同相続した甲不動産をＡが遺産分割協議により取得した場合において，相続開始から遺産分割までの間に甲不動産について生じた賃料債権は，その協議で特に定めなかったときは，Ａに帰属する。
オ．共同相続人である子Ａ及びＢが被相続人である父Ｃの唯一の相続財産である甲不動産について遺産分割をした後，認知の訴えにより，ＤがＣの子であるとされた場合において，Ｄが遺産分割を請求しようとするときは，Ｄは，価額のみによる支払の請求権を有する。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2019",num:"36",subject:"min",q:`人の死亡に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．代理権を授与した本人が死亡しても，代理権は消滅しない。
イ．寄託者が死亡した場合，返還時期の定めがあり，その期限が到来していなくても，受寄者は寄託物を返還することができる。
ウ．使用貸借は，貸主の死亡によっても，その効力を失わない。
エ．組合員は死亡によって脱退する。
オ．受遺者が遺言者よりも先に死亡したときは，受遺者の地位は，相続により受遺者の相続人に承継される。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2019",num:"37",subject:"min",q:`物の保存又は財産の管理についての注意義務に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．特定物の引渡しを目的とする債権の債務者は，債権者に受領遅滞があった場合であっても，善良な管理者の注意をもって，目的物を保存する義務を負う。
イ．特定物の引渡しを目的とする債権の債務者が負う目的物の保存の義務は，特約により軽減することができる。
ウ．贈与契約の贈与者は，目的物の引渡しまでの間，自己の財産に対するのと同一の注意をもって，目的物を保存すれば足りる。
エ．相続人は，相続の承認又は放棄をするまでの間，その固有財産におけるのと同一の注意をもって，相続財産を管理すれば足りる。
オ．限定承認者は，善良な管理者の注意をもって，相続財産を管理する義務を負う。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2019",num:"1",subject:"kei",q:`不作為犯に関する次のアからオまでの各記述を判例の立場に従って検討した場合，誤っているものの組合せは，後記１から５までのうちどれか。
ア．不作為犯は，結果発生を防止しなければならない義務が法律上の規定に基づくものでない場合であっても，成立する余地がある。
イ．不作為犯は，死体遺棄罪についても成立する余地がある。
ウ．不真正不作為犯の故意は，結果の発生を意欲していなくても，認められる余地がある。
エ．不作為犯は，作為可能性がない場合であっても，成立する余地がある。
オ．不作為犯の因果関係は，期待された作為に出ていれば結果が発生しなかったことが，合理的な疑いを超える程度に確実であったといえない場合であっても，その可能性さえあれば，認められる余地がある。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2019",num:"2",subject:"kei",q:`次の【事例】に関する後記アからエまでの各【記述】を判例の立場に従って検討した場合，正しいものの個数を後記１から５までの中から選びなさい。
【事 例】
甲及び乙は，宝石商の丙から宝石を奪うことを計画した。その計画は，甲が，宝石取引のあっせんにかこつけてホテルの一室に丙を呼び出し，別室の顧客に見せる必要があるとうそを言って丙から宝石を受領し，甲の退室後に，乙が同室に入って丙を殺害するという内容であった。甲は，計画に従って，ホテルの一室で丙から宝石を受領して退室し，それと入れ替わりに同室に立ち入った乙が丙の腹部を包丁で刺し，丙に重傷を負わせたが，殺害には至らなかった。
【記 述】
ア．甲が丙から宝石を受領した行為について詐欺罪が成立すると考えた場合，甲及び乙に，事後強盗による強盗殺人未遂罪が成立することはない。
イ．甲が丙から宝石を受領した行為について詐欺罪が成立すると考えた場合，同一の被害を二重に評価することはできないため，甲及び乙が，丙から宝石の代金相当額の支払を免れる意図を持っていたとしても，甲及び乙に，殺人未遂罪が成立するにとどまり，いわゆる二項強盗による強盗殺人未遂罪が成立することはない。
ウ．甲及び乙が，丙から宝石の代金相当額の支払を免れる意図を持っていたとしても，丙がこれを免除又は猶予する旨の財産的処分行為をしていないため，甲及び乙に，いわゆる二項強盗による強盗殺人未遂罪が成立することはない。
エ．乙が丙の腹部を包丁で刺した行為が，丙から宝石の占有を奪取する手段とならないと考えた場合，甲及び乙に，いわゆる一項強盗による強盗殺人未遂罪が成立することはない。`,c1:"１．０個",c2:"２．１個",c3:"３．２個",c4:"４．３個",c5:"５．４個",c6:"",c7:"",c8:"",a:"3"},{year:"2019",num:"3",subject:"kei",q:`承継的共犯に関する次の各【見解】についての後記アからオまでの各【記述】を検討し，正しい場合には１を，誤っている場合には２を選びなさい。
【見 解】
Ａ．共犯は，一個の犯罪を共同して行うものであり，後から犯罪に加担した者も，情を知って一罪の一部に加担した以上，犯罪全体について責任を負う。
Ｂ．共犯は，自己の行為と因果性がある範囲においてのみ責任を負うべきであって，自らが生じさせていない過去の事実について責任を負うべきではない。
Ｃ．先行者が生じさせた結果は承継しないが，先行者が生じさせた犯行を容易にする状態が存在する場合に，後行者がその状態を利用して犯罪を実現したときには，後行者も犯罪全体について責任を負う。
【記 述】
ア．Ａの見解に対しては，何を一罪として扱うかは，立法政策によって決まるため，一罪性に決定的な意味を認めるのは適切ではないとの批判が可能である。
イ．Ａの見解は，共犯の処罰根拠に関する因果的共犯論に基づいて主張されるものである。
ウ．Ｂの見解に対しては，複数の行為からなる犯罪で後行行為だけでは処罰されない場合に，処罰の間隙が生じるとの批判が可能である。
エ．Ｃの見解に対しては，単なる憂さ晴らしにより他人に暴行を加えて抗拒不能状態にした後，財物奪取の意思が生じ，その状態を利用して同人から財物を奪取した場合，一般に強盗罪が成立しないとされていることとの比較から問題があるとの批判が可能である。
オ．甲がＶに暴行を加えた後，なお強く抵抗するＶに乙が甲と共謀の上で暴行を加え，Ｖが負傷したが，その傷害結果が共謀成立の前後いずれの暴行によって生じたかを特定できない場合，Ｃの見解からは，乙には傷害罪の承継的共犯は成立しないことになるのが自然であるが，この帰結は刑法第２０７条との関係で不均衡であるとの批判が可能である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"12111"},{year:"2019",num:"4",subject:"kei",q:"傷害の罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．傷害罪は，他人の身体の生理的機能を毀損する犯罪であるから，精神疾患の一種である心的外傷後ストレス障害（いわゆるＰＴＳＤ）を負わせるなど精神的機能の障害を惹起した場合，傷害罪が成立することはない。",c2:"２．傷害罪は，暴行罪の結果的加重犯であるから，被害者に暴行を加えずに身体の生理的機能を毀損した場合，傷害罪が成立することはない。",c3:"３．被害者に睡眠薬を摂取させたことによって一定時間にわたり筋弛緩作用等を伴う急性薬物中毒の症状を生じさせた場合，傷害罪が成立することはない。",c4:"４．傷害の実行行為者をその現場において精神的に鼓舞する行為が傷害罪の幇助に当たる場合，現場助勢罪が成立することはない。",c5:"５．同時傷害の特例は，刑法の基本原理に対する重大な例外規定であり，厳格に適用されなければならないため，その要件を満たす傷害から被害者に死亡結果が生じた場合，同特例の適用により傷害致死罪が成立することはない。",c6:"",c7:"",c8:"",a:"4"},{year:"2019",num:"5",subject:"kei",q:`次の各【見解】と後記の各【事例】を前提として，後記アからエまでの各【記述】を検討し，正しい場合には１を，誤っている場合には２を選びなさい。
【見 解】
Ａ．行為当時，客観的に存在した全ての事情及び行為後に生じた事情のうち一般人が予見できた事情を判断の基礎とし，その行為から結果が発生することが相当であると認められる場合に因果関係を肯定する。
Ｂ．一般人が認識・予見できたであろう事情及び行為者が認識・予見していた事情を判断の基礎とし，その行為から結果が発生することが相当であると認められる場合に因果関係を肯定する。
Ｃ．行為の危険性が結果へと現実化したといえる場合に因果関係を肯定する。行為の危険性は行為時に存在した全ての事情を基礎として判断する。
【事 例】
Ⅰ．甲は，乙の顔面を手拳で１回殴打した。その殴打は，それだけで一般に人を死亡させるほどの強さではなかったが，乙はもともと特殊な病気により脳組織が脆弱となっており，その１回の殴打で脳組織が崩壊し，その結果，乙が死亡した。
Ⅱ．甲は，乙の首をナイフで突き刺し，直ちに治療しなければ数時間のうちに死亡するほどの出血を来す傷害を負わせた。乙は，直ちに病院で適切な医療処置を受け，一旦容体が安定したが，その後，医師の指示に従わず安静に努めなかったため，治療の効果が減殺され，前記傷害に基づき死亡した。
Ⅲ．甲は，路上で乙の頭部を激しく殴打し，直ちに治療しなければ１日後には死亡するほどの脳出血を伴う傷害を負わせ，倒れたまま動けない乙を残して立ち去った。そこへたまたま通り掛かった無関係の通行人が，乙の腹部を多数回蹴って，内臓を破裂させ，数時間後に乙は内臓破裂により死亡した。
【記 述】
甲の行為と乙の死亡との間の因果関係については，
ア．Ⅰの事例で，行為当時，乙は特殊な病気により脳組織が脆弱となっていることを一般人は認識できず，甲も認識していなかった場合，Ａ及びＣの見解からは肯定され，Ｂの見解からは否定される。
イ．Ⅰの事例で，行為当時，乙は特殊な病気により脳組織が脆弱となっていることを一般人は認識できず，甲も認識していなかったが，甲はこれを認識できた場合，ＡからＣまでのいずれの見解からも肯定される。
ウ．Ⅱの事例で，行為当時，乙が治療を受けた後，医師の指示に従わず安静に努めなくなることを一般人は予見できなかったが，甲は予見していた場合，Ｂの見解からは肯定され，Ａ及びＣの見解からは否定される。
エ．Ⅲの事例で，行為当時，乙が通行人に蹴られることを一般人は予見できず，甲も予見していなかった場合，ＡからＣまでのいずれの見解からも否定される。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"1221"},{year:"2019",num:"6",subject:"kei",q:`学生Ａ，Ｂ及びＣは，監禁罪の客体に関して，次の各【見解】のうち，いずれか異なる見解を採り，後記【事例】について【会話】のとおり検討している。学生Ａ，Ｂ及びＣの採る見解として正しいものの組合せは，後記１から５までのうちどれか。
【見 解】
ア．監禁されている時点で移動する一般的な能力がある者は，その時点で移動できなくても，監禁罪の客体となる。
イ．監禁されている時点で移動する一般的な能力があり，その時点で現実に移動できる者は，監禁罪の客体となる。
ウ．監禁されている時点で移動する一般的な能力があり，その時点で現実に移動でき，かつ，移動する意思がある者は，監禁罪の客体となる。
【事 例】
乙が窓のない部屋の中に一人でいたところ，甲は，午後１時から午後３時までの間，その部屋の唯一の出入口であるドアに外から施錠し，その間，乙がその部屋の外に出られないようにした。
【会 話】
学生Ａ．乙が甲による施錠に気付かなかった場合，Ｂ君が採る見解によれば，監禁罪は成立しますか。
学生Ｂ．成立します。
学生Ｃ．私が採る見解でも成立します。では，乙が午後０時３０分頃に眠ってしまい，その後，午後２時頃に目覚めて，甲による施錠に気付かないまま午後４時まで室内で過ごした場合，Ａ君が採る見解によれば，監禁罪は成立しますか。
学生Ａ．成立しません。
学生Ｂ．私が採る見解では，結論はＡ君と異なります。では，今のＣ君の事例を少し修正し，乙が午後３時過ぎに目覚め，甲による施錠に気付かなかったという場合，Ｃ君が採る見解によれば，監禁罪は成立しますか。
学生Ｃ．成立しません。`,c1:"１．Ａ－アＢ－ウＣ－イ",c2:"２．Ａ－イＢ－アＣ－ウ",c3:"３．Ａ－イＢ－ウＣ－ア",c4:"４．Ａ－ウＢ－アＣ－イ",c5:"５．Ａ－ウＢ－イＣ－ア",c6:"",c7:"",c8:"",a:"4"},{year:"2019",num:"7",subject:"kei",q:"罪数に関する次の１から５までの各記述を判例の立場に従って検討し，正しいものを２個選びなさい。",c1:"１．甲は，乙を恐喝して乙から財物の交付を受けるとともに財産上の利益を得た。甲には，包括して１個の恐喝罪が成立する。",c2:"２．甲は，乙ら３名をその面前で同時に恐喝して３名全員からそれぞれ財物を出させ，その３名分の財物の交付を乙から一括して受けた。甲には，３個の恐喝罪が成立し，これらは併合罪となる。",c3:"３．甲は，乙を恐喝して乙から財物の交付を受け，その恐喝の手段として用いられた暴行により乙に傷害を負わせた。甲には，恐喝罪と傷害罪が成立し，これらは併合罪となる。",c4:"４．甲は，恐喝の手段として乙を監禁し，その間に乙を脅迫して乙から財物の交付を受けた。甲には，監禁罪と恐喝罪が成立し，これらは併合罪となる。",c5:"５．甲は，乙が窃取した財物と知りながら，乙を恐喝してその財物の交付を受けた。甲には，盗品等無償譲受け罪と恐喝罪が成立し，これらは併合罪となる。",c6:"",c7:"",c8:"",a:"14"},{year:"2019",num:"8",subject:"kei",q:"放火罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，誤っているものを２個選びなさい。",c1:"１．「建造物」とは，家屋その他これに類する工作物であって，土地に定着し，人の起居出入りに適する構造を有するものをいい，毀損しなければ家屋から取り外すことができない状態にある雨戸は，「建造物」の一部に当たる。",c2:"２．「放火」とは，目的物の焼損を惹起させる行為をいい，目的物への直接的な点火行為に限られず，媒介物への点火行為であっても，その燃焼作用が継続して目的物に延焼し得るものである場合，「放火」に当たる。",c3:"３．「焼損」とは，火力により目的物の重要部分が焼失し，その本来の効用が失われた状態をいい，不燃性の建造物のコンクリート壁が媒介物の火力によって崩落した場合，「焼損」に当たる。",c4:"４．建造物等以外放火罪にいう「公共の危険」は，現住建造物等放火罪や他人所有非現住建造物等放火罪の客体である建造物等に対する延焼の危険に限られず，不特定又は多数の人の生命，身体又は前記建造物等以外の財産に対する危険も含まれる。",c5:"５．現住建造物等放火罪にいう「現に人が住居に使用し」の「人」には犯人が含まれるが，「現に人がいる」の「人」には犯人が含まれない。",c6:"",c7:"",c8:"",a:"35"},{year:"2019",num:"9",subject:"kei",q:"被害者の承諾に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．甲は，乙の承諾を得て，乙から借り受けた乙所有の重機を丙に転貸していたが，同重機の修理のため一時これを丙から預かった際，乙の承諾を得て，丙に無断で，自己の借金の返済として同重機を自己の債権者に譲渡した。この場合，甲には，横領罪が成立する。",c2:"２．甲は，自らが組長を務める暴力団の組員乙から，「暴力団を脱退したい。」との申出を受けたので，「落とし前として，指を詰めろ。」と言い，乙の承諾を得て，乙の右手小指の根元を出刃包丁で切断した。この場合，甲には，傷害罪は成立しない。",c3:"３．甲は，乙との不倫関係を清算しようと考え，真実は，乙と心中するつもりはないにもかかわらず，乙に対し，「あの世で一緒になろう。私も君の後を追って死ぬから。」と言って心中を持ちかけ，その旨誤信してこれを承諾した乙に毒薬を手渡したところ，乙がそれを飲んで死亡した。この場合，甲には，自殺関与罪が成立する。",c4:"４．甲は，知人乙から，「生活が苦しく刑務所に入りたいので，私から脅されたという事実をでっち上げて，私を告訴してほしい。」と依頼され，乙の承諾を得て，乙を脅迫罪で告訴した。この場合，甲には，虚偽告訴罪は成立しない。",c5:"５．甲は，自らが刑務官を務める刑務所で受刑中の成人女性乙と恋愛関係になり，乙の承諾を得て，勤務中，同刑務所内において，乙と性交した。この場合，甲には，特別公務員暴行陵虐罪が成立する。",c6:"",c7:"",c8:"",a:"5"},{year:"2019",num:"10",subject:"kei",q:"公務員職権濫用罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，誤っているものはどれか。",c1:"１．公務員職権濫用罪の成立には，必ずしも職権行使の相手方の意思に直接働きかけ，それを制圧することまで要しない。",c2:"２．公務員職権濫用罪の成立には，必ずしも公務員の不法な行為が職務としてなされることまで要しない。",c3:"３．公務員職権濫用罪にいう「職権」は，必ずしも法律上の強制力を伴うことまで要しない。",c4:"４．公務員職権濫用罪にいう「職権」は，職権行使の相手方に対し，必ずしも法律上又は事実上の負担や不利益を生ぜしめるに足りる特別の職務権限であることまで要しない。",c5:"５．公務員職権濫用罪にいう「権利の行使を妨害した」の「権利」は，必ずしも法律に明記されたものであることを要しない。",c6:"",c7:"",c8:"",a:"4"},{year:"2019",num:"11",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合，誤っているものを２個選びなさい。",c1:"１．甲は，乙から，甲宛てに荷物を発送したので受け取ってほしいと依頼され，もしかしたら同荷物には覚せい剤を含む身体に有害で違法な薬物が入っているかもしれないと思いながら，乙が覚せい剤を忍び込ませた荷物を受け取って所持していた。この場合，甲には，覚せい剤取締法違反（覚せい剤所持）の罪が成立する。",c2:"２．甲と乙は，丙に暴行を加えて傷害を負わせることを共謀したところ，乙において，丙に暴行を加えている最中に興奮して殺意を生じ，丙を殺害した。この場合，甲には，傷害罪の共同正犯が成立する。",c3:"３．甲は，乙が第三者から窃取した指輪を，もしかしたら盗品かもしれないと思いながら，あえて有償で乙から譲り受けた後，同指輪に乙と同じイニシャルが刻み込まれていることに気付き，盗品ではないと確信するに至った。この場合，甲には，盗品等有償譲受け罪が成立する。",c4:"４．甲は，わいせつな映像を録画したＤＶＤを，あらかじめその内容を再生して確認し，この程度ではわいせつ物には当たらないと考えて，多数の者に販売した。この場合，甲には，わいせつ物頒布罪が成立する。",c5:"５．甲は，乙を殺害しようと考え，乙の背部を狙って拳銃の弾丸を発射したところ，同弾丸が乙ではなく，乙の隣にいた丙の腹部に当たり，丙を死亡させた。この場合，甲には，乙に対する殺人未遂罪と丙に対する重過失致死罪が成立する。",c6:"",c7:"",c8:"",a:"25"},{year:"2019",num:"12",subject:"kei",q:`業務妨害罪に関する次の【見解】についての後記１から５までの各【記述】のうち，誤っているものはどれか。
【見 解】
業務妨害罪は人の社会的活動の自由を保護法益とするものであるが，公務も人の社会的活動にほかならないから，公務の性質いかんにかかわらず，同罪によって保護されると解するのが妥当である。
【記 述】`,c1:"１．この【見解】に対しては，公務執行妨害罪という国家的法益に対する罪と業務妨害罪のような個人的法益に対する罪とを安易に混同するものであるとの批判が可能である。",c2:"２．この【見解】に基づけば，公務員と共に公務に従事する非公務員に暴行を加えてその公務を妨害した場合，威力業務妨害罪が成立すると考えることが可能である。",c3:"３．この【見解】に対しては，逮捕行為のような強制力を行使する権力的公務は，暴行にも脅迫にも至らない手段による妨害を受けた時にそれを自力で排除し得るから，そのような公務まで業務として保護する必要はないとの批判が可能である。",c4:"４．この【見解】に基づけば，公務が暴行又は脅迫によって妨害された場合，公務執行妨害罪は業務妨害罪の特別法という関係にあるから前者のみが成立すると考えることが可能である。",c5:"５．この【見解】に対しては，威力や偽計による公務の妨害は公務執行妨害罪にも業務妨害罪にも当たらないこととなり，公務が業務に比して刑法上軽い保護しか受けられないという不都合があるとの批判が可能である。",c6:"",c7:"",c8:"",a:"5"},{year:"2019",num:"13",subject:"kei",q:`学生Ａ，Ｂ及びＣは，次の【事例】における窃盗罪の実行の着手時期について，後記【会話】のとおり議論している。【会話】中の①から⑥までの（ ）内から適切なものを選んだ場合，正しいものの組合せは，後記１から５までのうちどれか。
【事 例】
甲は，Ｘ宅のタンスに宝石が保管されていることを知ったため，その宝石を窃取する目的で，Ｘ宅に玄関から侵入し，宝石が保管されているタンスの在りかを探し始めて，それが置かれていた居間に立ち入ろうとしたところ，居間から出てきたＸと鉢合わせとなり，取り押さえられた。
【会 話】
学生Ａ．私は，甲がＸ宅に侵入した時点で窃盗罪の実行の着手を認めてよいと思います。この時点で，①（ａ．犯意の飛躍的表動があった・ｂ．法益侵害の危険が飛躍的に高まった）といえるからです。
学生Ｂ．Ａ君は，犯罪を行為者の危険な性格の発現であると考えているのですね。私は，実行の着手の「実行」とは構成要件該当行為のことで，「着手」とはそれを開始することだと解するので，【事例】では，窃盗罪の実行の着手は，②（ｃ．認められない・ｄ．居間に立ち入ろうとした時点で認められる）と考えます。
学生Ａ．Ｂ君の見解に対しては，実行の着手時期が③（ｅ．不明確になる・ｆ．遅くなり過ぎる）との批判がありますね。
学生Ｃ．私は，実行の着手時期とは，未遂犯の成立時期のことであるので，未遂犯の処罰根拠に遡り，実質的に考えることが必要だと思います。そのため，窃盗罪の実行の着手時期は，④（ｇ．占有侵害の現実的危険性が発生した・ｈ．窃取行為と密接に関連する行為を開始した）時点だと解するので，【事例】では，窃盗罪の実行の着手は，⑤（ｉ．認められない・ｊ．Ｘ宅内でタンスの在りかを探し始めた時点で認められる）と考えます。この点，Ｂ君の見解を修正し，実行の着手時期を⑥（ｋ．占有侵害の現実的危険性が発生した・ｌ．窃取行為と密接に関連する行為を開始した）時点とする見解もありますが，この見解に対しては，形式面を重視すると言いながら，結局，実質的な観点を取り入れているとの批判があります。`,c1:"１．①ａ ⑥ｋ",c2:"２．②ｃ ④ｈ",c3:"３．②ｄ ⑤ｉ",c4:"４．③ｆ ⑥ｌ",c5:"５．④ｇ ⑤ｊ",c6:"",c7:"",c8:"",a:"4"},{year:"2019",num:"14",subject:"kei",q:`学生Ａ，Ｂ及びＣは，次の各【事例】を題材にして，後記【会話】のとおり議論している。【会話】中の①から⑧までの（ ）内から適切な語句を選んだ場合，正しいものの組合せは，後記１から５までのうちどれか。
【事 例】
Ⅰ．店員甲は，自己の担当する売場の商品を勤務時間中にこっそり持ち出して，後日転売した。
Ⅱ．店員甲は，店長乙に言われて，店の売掛金を集金したが，これを持ち逃げした。
Ⅲ．甲は，パーティーで使うために友人乙から借りたネックレスを，無断で質入れした。
Ⅳ．甲は，登記名義を有する所有者乙から自己使用を条件に借りた土地を，しばらく自己使用した後，無断で丙に賃貸して利益を得た。
【会 話】
学生Ａ．事例Ⅰにおいて，甲にはどのような財産犯が成立するだろうか。
学生Ｂ．店の商品であれば，①（ａ．店長・ｂ．店員）が占有しているといえるから，②（ａ．横領罪・ｂ．窃盗罪）が成立すると思う。
学生Ｃ．反対だ。占有は，③（ａ．店長・ｂ．店員）にあると認めるべきだから，④（ａ．横領罪・ｂ．窃盗罪）が成立すると考える。
学生Ｂ．事例Ⅱにおいて，Ｃさんの見解によれば，甲に（④）は成立するのか。
学生Ｃ．成立すると考える。
学生Ａ．その結論は，事例Ⅱにおける判例の立場と一致しない。では，Ｃさんは，事例Ⅲにおいても，甲に（④）が成立すると考えるのか。
学生Ｃ．いや，成立しないと考える。物を人から借りている場合は別だ。
学生Ｂ．そうだとすると，Ｃさんは，事例Ⅳにおいて，甲には，どのような財産犯が成立すると考えるのか。
学生Ｃ．土地のような不動産の場合，動産とは異なり，その占有は，⑤（ａ．登記名義を有する者・ｂ．現実に不動産を占有・使用する者）にあると認めるべきだと思うから，土地に対する占有の程度・態様が著しく変更された場合，甲には⑥（ａ．横領罪・ｂ．不動産侵奪罪）が成立する可能性があると考える。
学生Ａ．そうだろうか。⑦（ａ．横領罪にいう「横領」・ｂ．不動産侵奪罪にいう「侵奪」）があったとはいえないのではないか。むしろ，Ｃさんの見解によれば，⑧（ａ．背任罪・ｂ．横領罪）の成否を検討すべきだと思う。`,c1:"１．①ａ ②ｂ ③ｂ ④ａ ⑤ａ ⑥ｂ ⑦ｂ ⑧ａ",c2:"２．①ａ ②ｂ ③ｂ ④ａ ⑤ｂ ⑥ａ ⑦ａ ⑧ｂ",c3:"３．①ｂ ②ａ ③ａ ④ｂ ⑤ａ ⑥ｂ ⑦ｂ ⑧ａ",c4:"４．①ｂ ②ａ ③ａ ④ｂ ⑤ａ ⑥ｂ ⑦ｂ ⑧ｂ",c5:"５．①ｂ ②ａ ③ａ ④ｂ ⑤ｂ ⑥ａ ⑦ａ ⑧ｂ",c6:"",c7:"",c8:"",a:"3"},{year:"2019",num:"15",subject:"kei",q:"正当防衛に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものを２個選びなさい。",c1:"１．当然又はほとんど確実に侵害が予期された場合において，単に予期された侵害を避けなかったにとどまらず，その機会を利用して積極的に相手方に対し加害行為をする意思で暴行に及んだときは，その暴行行為については，正当防衛が成立する余地はない。",c2:"２．いわゆるけんか闘争において相手方に対してした暴行行為については，正当防衛が成立する余地はない。",c3:"３．手拳で殴る素振りをしながら「お前殴られたいのか。」と言って近付いてきた相手方を，殺傷能力のある刃物を構えて脅した場合，その脅迫行為については，正当防衛が成立する余地はない。",c4:"４．自己に対しナイフを示して脅している相手方に対し専ら攻撃の意思で暴行に及んだ場合，その暴行行為については，正当防衛が成立する余地はない。",c5:"５．財産的権利を防衛するために相手方の身体に暴行を加えて傷害を負わせた場合，その暴行行為については，正当防衛が成立する余地はない。",c6:"",c7:"",c8:"",a:"14"},{year:"2019",num:"16",subject:"kei",q:`次のアからオまでの各【記述】を判例の立場に従って検討した場合，後記の各【結論】との組合せとして正しいものは，後記１から５までのうちどれか。なお，【結論】の詐欺罪には詐欺未遂罪も含むものとする。
【記 述】
ア．他人のためにその事務を処理する者が，任務に背いて，その他人を欺く行為をし，同人を錯誤に陥らせて財物を交付させた。
イ．他人を恐喝するに際して，脅迫文言の中に虚偽の部分があり，それも同人に畏怖の念を生じさせる一材料となって，その畏怖の結果として，同人に財物を交付させた。
ウ．新聞販売店から集金業務を委託されている集金員が，集金した購読料を同店に持ち帰らずに自己の用途に費消するつもりであるのに，これを秘して，正規の手続や方式に従って購読者から購読料を集金し，自己の遊興費に費消した。
エ．保険金を詐取する目的で，火災保険の付された自己所有の家屋に放火した。
オ．他人に売買代金として偽造通貨を行使し，同人を錯誤に陥らせて財物を交付させた。
【結 論】
Ⅰ．詐欺罪のみが成立し得る。
Ⅱ．詐欺罪と他の罪の双方が成立し得る。
Ⅲ．詐欺罪は成立しない。`,c1:"１．アⅠ－イⅡ ",c2:"２．アⅡ－ウⅢ ",c3:"３．イⅢ－エⅢ ",c4:"４．ウⅡ－オⅡ ",c5:"５．エⅡ－オⅢ",c6:"",c7:"",c8:"",a:"3"},{year:"2019",num:"17",subject:"kei",q:`過失犯に関する次のアからオまでの各記述を判例の立場に従って検討し，正しい場合には１を，誤っている場合には２を選びなさい。
ア．刑法第３８条第１項ただし書の「法律に特別の規定がある場合」とは，過失犯を処罰する旨の明文の規定がある場合に限られない。
イ．公務員が法令により付与された権限を行使するか否かについて，当該公務員に裁量が認められている場合，その権限の不行使を注意義務違反とする過失犯が成立することはない。
ウ．行政取締法規の義務は，過失犯の注意義務にもなるため，行政取締法規の義務を遵守する限り，他に慣習等から導かれる義務を遵守せずとも，過失犯が成立することはない。
エ．過失犯が成立するには，因果経過の予見可能性を要するため，現実の結果発生に至る経過を逐一具体的に予見できなければ，過失犯が成立することはない。
オ．業務上過失致死傷罪の「業務」とは，人が社会生活上の地位に基づき反復継続して行う行為であって，かつ，その行為が他人の生命身体等に危害を加えるおそれのあるものをいうため，他人の生命身体の危険を防止することを義務内容とする業務は，これに含まれない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"12222"},{year:"2019",num:"18",subject:"kei",q:"司法作用に対する罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．証人等威迫罪は，判決確定前であれば，その事件で証人として証言を終えた者を威迫した場合でも，成立する。",c2:"２．証人等威迫罪は，公判の結果に何らかの影響を及ぼそうとする意図がなければ，成立しない。",c3:"３．偽証罪は，証人がした虚偽の陳述が裁判の結果に影響しないのであれば，成立しない。",c4:"４．偽証罪は，証人が殊更記憶に反する陳述をした場合でも，陳述内容が真実であれば，成立しない。",c5:"５．虚偽告訴罪は，告訴の内容が客観的真実に合致していた場合でも，申告者が虚偽であると認識していれば，成立する。",c6:"",c7:"",c8:"",a:"1"},{year:"2019",num:"19",subject:"kei",q:"身分犯の共犯に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものを２個選びなさい。",c1:"１．刑法第６５条の身分には一時的な心理状態は含まれないので，目的犯に当たる犯罪行為を，当該目的を有する者と有しない者が共同して行った場合，同条の適用の余地はない。",c2:"２．刑法第６５条第２項は加減的身分のない者が当該身分のある者に加功した場合について規定するものであるので，賭博の常習性を有する者が有しない者に賭博を教唆した場合，同項の適用の余地はない。",c3:"３．非占有者が業務上の占有者による横領行為に加功した場合，当該非占有者には，刑法第６５条第１項の適用により業務上横領罪の共犯が成立し，同条第２項の適用により単純横領罪の刑が科される。",c4:"４．刑法第６５条の身分は，一定の犯罪行為に関する犯人の人的関係である特殊の地位又は状態の全てを指称するものであるので，責任能力のある者が刑事未成年者を教唆して犯罪を行わせた場合，同条が適用される。",c5:"５．自首による刑の減免は一身的な事由であるので，共犯者のうち一人に自首が成立する場合，刑法第６５条第１項の適用はなく，その減免の効果は自首した者以外には及ばない。",c6:"",c7:"",c8:"",a:"35"},{year:"2019",num:"20",subject:"kei",q:`次の【事例】に関する後記アからオまでの各【記述】を判例の立場に従って検討した場合，誤っているものの個数を後記１から５までの中から選びなさい。
【事 例】
　甲は，友人乙から，借金の返済に窮している旨の相談をされ，乙に対し，「実家に親父の高級腕時計がある。それを盗んで売りさばけば金になる。」と提案し，甲と別居する甲の実父Ｖ方からＶ所有の腕時計を盗むことを唆した。乙は，甲の提案を受け，Ｖ方に窃盗に入ることとしたが，仮に，窃盗を行う際にＶらに見付かって逮捕されそうになった場合には，Ｖらをナイフで脅してこれを抑圧し，逃走しようと考えた。
　乙は，某日午後０時頃，前記の意図でナイフを購入し，それを携帯してＶ方に向かい，同日午後１時頃，腕時計を盗む目的で，Ｖ方に窓から侵入した上，寝室でＶ所有の腕時計（時価１００万円相当）を窃取した。乙は，その後間もなく，Ｖ方玄関ドアの施錠を外して戸外に出て，誰からも発見，追跡されることなく，Ｖ方から約１キロメートル離れた公園まで逃げた。乙は，同所において，やはり現金も欲しいと考え，再度Ｖ方に窃盗に入ることを決意し，Ｖ方に戻り，同日午後１時３０分頃，Ｖ方玄関内に入ったところ，その直後に帰宅してきたＶと鉢合わせとなったことから，逮捕を免れるため，前記ナイフをＶの面前に示し，Ｖが恐怖の余り身動きできないうちに逃走した。
　乙は，翌日，甲に前記腕時計の売却を依頼した。甲は，同腕時計の売却先を探し，知人丙に対し，その買取りを申し向けたところ，丙が８０万円で購入する旨答えたことから，同腕時計を丙に売却した。甲は，丙から同腕時計の売却代金として８０万円を受け取ったが，その後，これを自己のものにしようと考え，乙に無断で，その全額を遊興費として費消した。
【記 述】
ア．乙が某日午後０時頃に購入したナイフを携帯してＶ方に向かったことについては，「強盗の罪を犯す目的」が認められないので，乙に強盗予備罪は成立しない。
イ．乙がＶをナイフで脅迫したことについては，腕時計の窃取行為との時間的・場所的な近接性に照らせば，窃盗の機会の継続中に行われたものといえるため，乙に事後強盗罪が成立する。
ウ．甲が乙に腕時計の窃盗を唆したことと，その売却をあっせんしたことは，原因と結果の関係に立つので，窃盗教唆罪と盗品等有償処分あっせん罪は牽連犯となる。
エ．Ｖの直系血族である甲には盗品等に関する罪について親族等の間の犯罪に関する特例が適用されるため，盗品等有償処分あっせん罪について，甲はその刑を免除される。
オ．甲が腕時計の売却代金を費消したことについては，同腕時計の窃盗犯人である乙は甲に対してその代金の引渡しを請求する権利がないので，甲に委託物横領罪は成立しない。`,c1:"１．１個",c2:"２．２個",c3:"３．３個",c4:"４．４個",c5:"５．５個",c6:"",c7:"",c8:"",a:"5"},{year:"2018",num:"1",subject:"ken",q:`次の対話は，公務員の人権に関する教授と学生の対話である。教授の各質問に対する次のアからウまでの学生の各回答について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
教授．公務員の地位のように権利主体と公権力との間に特殊な法律関係がある場合には，憲法の人権保障が原則として及ばないなどとする理論がありますね。このような理論によって公務員の人権に対する制約を正当化した最高裁判所の判決がありますか。
ア． はい。猿払事件判決（最高裁判所昭和４９年１１月６日大法廷判決，刑集２８巻９号３９３頁）が，先生のおっしゃる趣旨の判示をして，公務員の政治的意見表明の自由に対する制約を正当化しています。
教授．あなたの言うその判決は，国家公務員法第１０２条第１項が一定の行動類型に属する政治的行為を禁止していることに伴い生じ得る意見表明の自由の制約については，どのような判示をしていますか。
イ． 公務員の政治的中立性を損なうおそれのある行動類型に属する政治的行為を禁止することに伴い意見表明の自由が制約されることになっても，そのような制約は行動の禁止に伴う限度での間接的・付随的制約にとどまると判示しています。
教授．堀越事件判決（最高裁判所平成２４年１２月７日第二小法廷判決，刑集６６巻１２号１３３７頁）は，公務員のしたある行為が国家公務員法第１０２条第１項にいう「政治的行為」に該当するか否かの判断についてどのような枠組みを示していますか。
ウ． 同項にいう「政治的行為」の意義を，公務員の職務の遂行の政治的中立性を損なうおそれが実質的に認められるものと解した上，その判断においては，当該公務員の地位，その職務の内容や権限等，当該公務員がした行為の性質，態様，目的，内容等の諸般の事情を総合して判断するのが相当であると判示しています。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"211"},{year:"2018",num:"2",subject:"ken",q:`法の下の平等に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．子にとって自ら選択できないような事柄を理由に不利益を及ぼすことは許されず，子を個人として尊重し，その権利を保障すべきであるという考えが確立されてきたという事情は，嫡出子と嫡出でない子の法定相続分を区別する合理的な根拠が失われたと判断すべき根拠となる。
イ．憲法第１４条第１項は国民に対し法の下の平等を保障した規定であり，平等の要請は，事柄の性質に即応した合理的な根拠に基づくものでない限り，差別的な取扱いをすることを禁止する趣旨と解され，特に同項後段の事項は，合憲性の推定が排除される事項を限定列挙したものである。
ウ．地方公共団体が法律の範囲内で条例を制定することができるとしている条例制定権の規定（憲法第９４条）に照らすと，地方公共団体が売春の取締りについて各別に条例を制定する結果，その取扱いに差別を生ずることがあっても，地域差の故をもって憲法第１４条第１項に反するとはいえない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"3"},{year:"2018",num:"3",subject:"ken",q:`思想・良心の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．良心の自由とは是非弁別の判断に関する事項を外部に表現する自由及び表現しない自由をも広く含むと解されるが，裁判所が謝罪広告を強制したとしても，単に事態の真相を告白し，陳謝の意を表明するにとどまる限りは，良心の自由を不当に制限するものではない。
イ．司法書士会が大震災で被災した他県の司法書士会に復興支援拠出金を寄付することは，司法書士会の目的の範囲を逸脱せず，また，司法書士会がその寄付のために会員から負担金を徴収することは，強制加入団体であることを考慮しても，会員の政治的又は宗教的立場や思想，信条の自由を害するものではない。
ウ．破壊活動防止法第３９条及び第４０条のせん動罪は，政治目的をもって，所定の犯罪のせん動をすることを処罰するものであるが，せん動として外形に現れた客観的な行為を処罰の対象とするもので，行為の基礎となった思想，信条を処罰するものではないから，せん動罪が政治思想を処罰するもので憲法第１９条に違反するとの主張は前提を欠く。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"5"},{year:"2018",num:"4",subject:"ken",q:`信教の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．輸血以外に救命手段がない場合には輸血を拒否するという意思決定を尊重すべきとはいえないので，患者が，輸血を受けることは自己の宗教上の信念に反するとして，輸血を伴う医療行為を拒否するとの明確な意思を有していたとしても，このような意思決定をする権利は，人格権としての保護に値しない。
イ．信仰上の理由から剣道実技の履修を拒否した高等専門学校の生徒に対して学校長が行った原級留置処分及び退学処分は，履修拒否が生徒の信仰の核心部分と密接に関連する真しな理由からのものであり，代替措置の申入れに対して学校側はそれが不可能でないのに何ら検討することなく拒否したなどという事情の下では，裁量権の範囲を超えて違法である。
ウ．宗教法人に対する解散命令のような法的規制は，たとえ信者の宗教上の行為を法的に制約する効果を伴わないとしても，これに何らかの支障を生じさせることがあり得ることから，信教の自由の重要性に鑑み，憲法上，そのような規制が許容されるものであるかどうかは慎重に吟味しなければならない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"211"},{year:"2018",num:"5",subject:"ken",q:`次の見解は，インターネット上の名誉毀損罪の成否と表現の自由について論じたものである。この見解に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
「インターネットの利用者は，自己の見解を外部に向かって発信することができるから，インターネットを利用している被害者は，自己に向けられた加害者のインターネット上の表現行為に対し，言論による反論が可能である。したがって，インターネットの利用者が名誉毀損の表現行為をした場合には，新聞などのマス・メディアを通じた表現の場合よりも，名誉毀損罪の成立する範囲を限定すべきである。」
ア．この見解に対しては，インターネット上の全ての情報を知ることは不可能であり，自己の名誉を毀損する表現が存在することを知らない被害者に対して反論を要求すること自体，そもそも不可能である，という批判があり得る。
イ．言論の応酬により当不当を判断することができるのは意見や論評であって，事実の摘示による名誉毀損の場合には，被害者と加害者が言論の応酬をしても，インターネット利用者は真偽を判断することができないという指摘は，この見解の根拠となり得る。
ウ．この見解に対しては，インターネット上に載せた情報は，不特定多数の利用者が瞬時に閲覧可能となり，全世界に伝播される可能性もあることから，被害者のインターネット上の反論によって名誉の回復が図られる保証もない，という批判があり得る。
エ．言論による侵害に対しては，言論で対抗するのが表現の自由の基本原則であり，被害者が加害者に対し十分な反論ができ，功を奏するのであれば，被害者の社会的評価が害されるおそれはないという指摘は，この見解の根拠となり得る。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"1211"},{year:"2018",num:"6",subject:"ken",q:`集会の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．市民会館は，集会をするために必須の施設であるから，その使用について，届出制ではなく，許可制を採ることは，集会の自由を不当に制限することになる。
イ．道路については，交通の安全と円滑を図るという機能面が重視される結果，道路における集団行動の規制は，集会の自由に対する制限には当たらない。
ウ．市の管理する公園について，人の生命，身体又は財産が侵害され，公共の安全が損なわれる，明らかな差し迫った危険の発生が具体的に予見される場合でないのに，その使用を規制するのは，集会の自由を不当に制限することになる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"222"},{year:"2018",num:"7",subject:"ken",q:`学問の自由及び教育の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．大学における学生の集会が，大学の公認した団体が大学の許可を得て開催したものであれば，真に学問的な研究又はその結果の発表のためのものでなく，実社会の政治的社会的活動に当たる場合であっても，同集会への警察官の立入りは，大学の有する学問の自由と自治を侵害することとなる。
イ．学問の自由は，学問研究の自由とその研究結果の発表の自由だけでなく，その研究結果を教授する自由をも含むところ，教育の本質上，教師は，高等学校以下の普通教育においても，教授の自由を有し，自らの判断で教育内容を決定することができるのであって，国が教育内容の決定に介入することは許されない。
ウ．親は，子の将来に関して最も深い関心を持ち，かつ，配慮をすべき立場にある者として，子に対する教育の自由を有しており，このような親の教育の自由は，主として家庭教育等学校外における教育や学校選択の自由にあらわれるところ，親の学校選択の自由は，特定の学校の選択を強要又は妨害された場合，その侵害が問題となり得る。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"7"},{year:"2018",num:"8",subject:"ken",q:`居住・移転の自由に関する次のアからエまでの各記述について，明らかに誤っているものの組合せを，後記１から６までの中から選びなさい。
ア．自衛官につき，防衛大臣が指定する場所に居住しなければならないとする法律の規定は，当該国民が自ら自衛官に志願した結果として課される制約であるところ，我が国の防衛のためいつでも職務に従事できる態勢にあることが求められるという自衛官の職務の性質に照らし，このような居住地の制限は合理的な制限であって合憲と解される。
イ．外務大臣において，著しくかつ直接に日本国の利益又は公安を害するおそれがあると認めるに足りる相当な理由がある者につき一般旅券を発給しないことができるとする法律の規定は，単に旅券の発給を制限するに過ぎず，海外渡航の自由を制約するものではないため合憲と解される。
ウ．住民が住所を変更したときには市町村長に届け出なければならない旨を義務付ける法律の規定は，住所・居所の決定や移転それ自体を制限するものではなく，規制態様が軽微である反面，住民票の整備により得られる公益が大きいことから合憲と解される。
エ．破産手続中の破産者につき，裁判所の許可なく居住地を離れることを禁止する法律の規定は，破産手続という限られた期間内にのみ適用されるものに過ぎず，仮に裁判所の許可が得られなくても破産手続が終結すれば自由に居住地を離れることができるため，居住・移転の自由に対する制約が認められず合憲と解される。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．ア エ",c4:"４．イ ウ",c5:"５．イ エ",c6:"６．ウ エ",c7:"",c8:"",a:"5"},{year:"2018",num:"9",subject:"ken",q:`労働基本権に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法上，国は，労働基本権をむやみに制約する立法等の措置を行うことは許されず，また同時に，国は，労働者の労働基本権を保障する措置を講じる義務があり，その意味で，労働基本権には自由権としての側面と社会権としての側面があるといえる。
イ．労働基本権には，団結権，団体交渉権及び団体行動権があるが，これらのうち団結権は最も重要かつ基本的な権利であるから，団体交渉権や団体行動権について現行法上特別な制約に服している自衛官や警察官にも団結権は認められている。
ウ．判例は，労働基本権について，公務員にもその保障が及ぶとし，その制約の合憲性を判断する上で，職務の公共性は考慮されるべきではないとする一方，人事院が設けられていることなどの代替措置が整備されていることを重視して，一般私企業とは異なる制約に服するものとする。
エ．憲法第２８条は，その性質上，私人間の関係に適用される余地はなく，そのため，判例は，労働組合への加入を強制するために使用者と労働組合との間に締結されるユニオン・ショップ協定の効力を団結権との関係で判断する場合にも，憲法を直接適用していない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"1222"},{year:"2018",num:"10",subject:"ken",q:`憲法第２４条に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法第２４条第１項は，婚姻については当事者間の自由かつ平等な意思決定に委ねられるべきであるとの趣旨を明らかにしたものであるから，婚姻に関する法制度の内容が意に沿わないことを理由として婚姻しない者が生じるのであれば，その法制度を定めた法律は，憲法第２４条第１項の趣旨に沿わない制約を課しているものとの評価を免れないことになる。
イ．憲法第２４条第２項は，婚姻及び家族に関する事項について，具体的な制度の構築を第一次的には国会の合理的な立法裁量に委ねるとともに，その立法に当たっては，個人の尊厳と両性の本質的平等に立脚すべきであるとする要請，指針を示すことによって，その裁量の限界を画したものである。
ウ．憲法第２４条は，婚姻及び家族に関する立法において，憲法上の権利として保障される人格権を不当に侵害せず，かつ，両性の形式的な平等が保たれた内容の法律の制定を求めるにとどまらず，憲法上直接保障された権利とまではいえない人格的利益をも尊重すべきこと，両性の実質的な平等が保たれるように図ること等についても十分に配慮した法律の制定を求めるものである。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"5"},{year:"2018",num:"11",subject:"ken",q:`憲法の最高法規性に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法第９７条は，憲法の保障する基本的人権を侵すことのできない永久の権利と位置付けており，憲法の最高法規性を実質的に根拠付けるものと見ることができる。
イ．日本国憲法において抵抗権が認められているという見解は，憲法が最高法規であることと矛盾する。
ウ．憲法がその国の法体系において最高法規と位置付けられる場合において，国家緊急権がその中に明文で規定されることはあり得ない。
エ．抽象的違憲審査制と付随的違憲審査制のうちいずれの違憲審査制を採るかは，憲法の最高法規性から当然に導かれるわけではない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"1221"},{year:"2018",num:"12",subject:"ken",q:`天皇及び皇室に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．天皇が，法律の定めるところにより，国事行為を委任する場合，この委任行為自体は明らかに国事行為ではないから，内閣の助言と承認を要しない。
イ．国事行為は，形式的・儀礼的な行為であるため，国事行為としての天皇の行為がなくても，政令の公布や国会の召集の法的効力は発生する。
ウ．摂政は，天皇の名で国事行為を行う天皇の法定代理機関であり，天皇が未成年のときなど皇室典範に定める原因が生じることにより設置される。
エ．憲法第８８条は，すべて皇室財産は国に属すると規定しており，皇室が私有財産を保有したり運用したりすることは禁じられている。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"2212"},{year:"2018",num:"13",subject:"ken",q:`選挙に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．判例は，参議院議員選挙における定数不均衡の問題について，参議院の半数改選制の要請を踏まえれば投票価値の平等が一定の限度で譲歩を求められても憲法に違反するとはいえないとして，衆議院の場合よりも広い立法裁量を認めてきており，これまで違憲状態を認定したことはない。
イ．判例は，衆議院議員選挙におけるいわゆる１人別枠方式について，小選挙区比例代表並立制の導入に当たり，直ちに人口比例のみに基づいて定数配分を行った場合の影響に配慮するための方策であり，新選挙制度が定着し運用が安定すればその合理性は失われるとしている。
ウ．判例は，公職選挙法による選挙運動用の文書図画の頒布・掲示の規制について，表現の自由に対する最小限の制約とはいえないが，憲法第４７条の趣旨に照らせば，国会の定めた選挙運動のルールは合理的と考えられないような特段の事情のない限り尊重されなければならず，当該規制は立法裁量の範囲を逸脱しているとまではいえないので合憲であるとしている。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"212"},{year:"2018",num:"14",subject:"ken",q:`憲法第９条に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法第９条第２項が保持を禁止した戦力とは，我が国がその主体となってこれに指揮権，管理権を行使し得る戦力に限られず，我が国との安全保障条約に基づき我が国に駐留する外国の軍隊も，我が国の要請に応じて武力を行使する可能性があるので，同項の戦力に該当し得る。
イ．憲法前文が定める平和的生存権は，憲法第９条及び第３章の規定によって具体化され，裁判規範として現実的・個別的内容を持つものであるから，森林法上の保安林指定の解除処分が自衛隊の基地の建設を目的とするものである場合，周辺の住民は，同処分の取消訴訟において，平和的生存権の侵害のおそれを根拠として原告適格を有する。
ウ．国が自衛隊の用地を取得するために私人と締結した土地売買契約は，当該契約が実質的にみて公権力の発動たる行為と何ら変わりがないといえるような特段の事情のない限り，憲法第９条の直接適用を受けず，私人間の利害関係の公平な調整を目的とする私法の適用を受けるに過ぎない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"7"},{year:"2018",num:"15",subject:"ken",q:`衆議院の優越に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．条約の承認に関する衆議院の優越の程度は，法律案の議決，予算の議決のいずれの場合と比べても小さい。
イ．参議院と比べて衆議院の方が議員の任期が短いこと，衆議院に解散の制度があることは，衆議院の優越の根拠とはならない。
ウ．憲法改正の発議及び予備費支出の承諾については，議決において衆議院の優越はなく，両議院の議決は対等である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"221"},{year:"2018",num:"16",subject:"ken",q:`弾劾裁判所に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．弾劾裁判所に対し裁判官の罷免を求める訴追は，国会の両議院において当該裁判官の罷免を求める議案が可決されることにより，国会が行う。
イ．国会の両議院の議員で組織される弾劾裁判所は，国会が閉会中であっても活動することができる。
ウ．弾劾裁判所により罷免の裁判の宣告を受けた裁判官は，最高裁判所に対し，その裁判を不服として取消しを求めることができる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"6"},{year:"2018",num:"17",subject:"ken",q:`司法審査が団体の内部事項に関する行為に及ぶかに関する次の学生アからエまでの各発言について，正しいものの組合せを，後記１から６までの中から選びなさい。
ア．「自律的な団体の内部紛争に対して司法審査が及ぶかという問題に関して，地方議会には，国会の両議院のような自律権はないものの，地方議会議員に対する懲罰としての除名処分は，内部規律の問題であるから，司法審査の対象とはならないとした判例があるよ。」
イ．「判例の考え方からすると，発声障害により自ら発声することができない地方議会議員が，第三者による代読等，自らの発声以外の方法による発言を希望したのに対し，これを認めないという地方議会の決定は，純然たる内部規律の問題であるから，司法審査の対象にはならないことになるね。」
ウ．「大学の単位認定行為は，特段の事情のない限り，純然たる大学内部の問題であって，大学の自主的な判断に委ねられるべきだから，司法審査の対象とならないとした判例もあったな。」
エ．「判例の考え方からすると，特定の授業科目の単位の取得が国家資格取得の前提要件とされている場合には，大学の単位認定行為が司法審査の対象になる可能性もあるね。」`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．ア エ",c4:"４．イ ウ",c5:"５．イ エ",c6:"６．ウ エ",c7:"",c8:"",a:"6"},{year:"2018",num:"18",subject:"ken",q:`旭川市国民健康保険条例違憲訴訟判決（最高裁判所平成１８年３月１日大法廷判決，民集６０巻２号５８７頁）に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. 憲法第８４条は，「あらたに租税を課し，又は現行の租税を変更するには，法律又は法律の定める条件によることを必要とする。」と定めているところ，同条にいう「法律」には条例も含まれるとする見解は，この判決と矛盾抵触する。
イ. この判決によれば，租税以外の公課であっても，租税に類似する性質を有するものについては，憲法第８４条の趣旨が及ぶところ，その賦課徴収の強制の度合いは，当該公課と租税との類似性を検討するときの要素となる。
ウ. この判決は，法律の委任に基づき保険料の賦課要件を定めるべき条例が保険料率の決定等を市長に委任していることにつき，委任された事項の内容や保険料率に係る算定基準の定め方等を検討して，憲法第８４条の趣旨に反しないものと判断した。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"211"},{year:"2018",num:"19",subject:"ken",q:`次の文章は，憲法上の地方公共団体の意義について述べた最高裁判所の判決（最高裁判所昭和３８年３月２７日大法廷判決，刑集１７巻２号１２１頁）の判示を要約したものである。この判決に関する次のアからエまでの各記述について，明らかに誤っているものの組合せを，後記１から６までの中から選びなさい。
「憲法が特に一章を設けて地方自治を保障するにいたったのは，新憲法の基調とする政治民主化の一環として，住民の日常生活に密接な関連をもつ公共的事務は，その地方の住民の手でその住民の団体が主体となって処理する政治形態を保障しようとする趣旨からである。この趣旨に徴するときは，憲法第９３条第２項にいう地方公共団体といい得るためには，単に法律で地方公共団体として取り扱われているということだけでは足らず，事実上住民が経済的文化的に密接な共同生活を営み，共同体意識をもっているという社会的基盤が存在し，沿革的にみても，また現実の行政の上においても，相当程度の自主立法権，自主行政権，自主財政権等地方自治の基本的権能を附与された地域団体であることを必要とするものというべきである。」
ア．この判決は，憲法によって保障された地方自治がどのような性質を有するかという問題について，個人が国家に対して固有かつ不可侵の権利を持つのと同様に，地方公共団体もまた固有の前国家的な基本権を有するという立場に立つものである。
イ．この判決は，「事実上住民が経済的文化的に密接な共同生活を営み，共同体意識をもっているという社会的基盤」の存在を地方公共団体の要件として挙げるが，｢共同体意識｣というのは測定不能で漠然とした概念ではないかとの批判がある。
ウ．この判決のように，沿革上及び行政上の実態を基準に，憲法上の地方公共団体に当たるか否かを判断することは，憲法の下位規範である地方自治法によって憲法の解釈を行うこととなるとの指摘がある。
エ．この判決には，憲法第９２条にいう｢地方自治の本旨｣が，第９３条で具体化されている住民自治と第９４条で具体化されている団体自治によって構成されていると解する余地がなくなるという問題点がある。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．ア エ",c4:"４．イ ウ",c5:"５．イ エ",c6:"６．ウ エ",c7:"",c8:"",a:"3"},{year:"2018",num:"20",subject:"ken",q:`憲法改正に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．国会法によれば，議員が憲法改正原案を発議するには，衆議院においては議員１００人以上，参議院においては議員５０人以上の賛成を要するが，その発議に当たっては，内容において関連する事項ごとに区分して行うものとされている。
イ．国会が発議した憲法改正に関する国民の承認は，衆議院議員総選挙又は参議院議員通常選挙の際に行われる国民投票によることも可能であるが，これらの選挙の際に行われる場合は日本国憲法の改正手続に関する法律は適用されない。
ウ．日本国憲法の改正手続に関する法律では，憲法改正案に対する国民投票運動に関し，公職選挙法により規制される選挙運動と比較すると，戸別訪問の禁止がないなど規制が緩和されている。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"3"},{year:"2018",num:"1",subject:"min",q:`胎児に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．胎児を受贈者として死因贈与をすることはできない。
イ．胎児を受遺者として遺贈をすることはできない。
ウ．胎児の父は，胎児の母の承諾を得ても，胎児を認知することはできない。
エ．胎児の母は，胎児を代理して認知の訴えを提起することはできない。
オ．胎児のときに不法行為を受けた者は，出生前にその父母が胎児を代理して加害者とした和解に拘束される。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2018",num:"2",subject:"min",q:`法人に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．法人は成年後見人になることができない。
イ．法人は民法上の組合の組合員になることができない。
ウ．法人は財産以外の損害について不法行為に基づき損害賠償を請求することができない。
エ．法人は遺言執行者になることができる。
オ．法人は特別縁故者として相続財産の分与を受けることができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2018",num:"3",subject:"min",q:`意思表示に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．土地の仮装譲受人が当該土地上に建物を建築してこれを他人に賃貸した場合，その建物賃借人は，民法第９４条第２項の「第三者」に当たらない。
イ．強迫による意思表示の取消しが認められるためには，表意者が，畏怖の結果，完全に意思の自由を失ったことを要する。
ウ．Ａを欺罔してその農地を買い受けたＢが，農地法上の許可を停止条件とする所有権移転の仮登記を得た上で，当該売買契約上の権利をＣに譲渡して当該仮登記移転の付記登記をした場合には，Ｃは民法第９６条第３項の「第三者」に当たる。
エ．協議離婚に伴う財産分与契約において，分与者は，自己に譲渡所得税が課されることを知らず，課税されないとの理解を当然の前提とし，かつ，その旨を黙示的に表示していた場合であっても，財産分与契約について錯誤による無効を主張することはできない。
オ．特定の意思表示が記載された内容証明郵便が受取人不在のために配達することができず，留置期間の経過により差出人に還付された場合，受取人がその内容を十分に推知することができ，受領も困難でなかったとしても，当該意思表示が受取人に到達したものと認められることはない。
（参照条文）民法
（虚偽表示）第９４条 （略）
２ 前項の規定による意思表示の無効は，善意の第三者に対抗することができない。
（詐欺又は強迫）第９６条 １，２（略）
３ 前二項の規定による詐欺による意思表示の取消しは，善意の第三者に対抗することができない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2018",num:"4",subject:"min",q:`任意代理に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．特定の法律行為をすることを委託された代理人が本人の指図に従ってその行為をした場合，本人は，自ら過失によって知らなかった事情について代理人が過失なく知らなかったことを主張することができない。
イ．権限の定めのない代理人は，保存行為をする権限のみを有する。
ウ．代理人が相手方と通謀して売買契約の締結を仮装した場合，相手方は，本人がその通謀虚偽表示を知っていたか否かにかかわらず，当該売買契約の無効を主張することができる。
エ．代理人が保佐開始の審判を受けたときは，代理権は消滅する。
オ．代理人が相手方と売買契約を締結した後，その代理人が制限行為能力者であったことが判明した場合であっても，本人は当該売買契約を行為能力の制限によって取り消すことができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2018",num:"5",subject:"min",q:`追認に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．無権代理行為について本人が追認を拒絶した後は，本人であっても追認によってその行為を有効とすることができない。
イ．事実上の夫婦の一方が他方の意思に基づかないで婚姻届を作成して提出した場合において，当時両名に夫婦としての実質的生活関係が存在し，かつ，後に他方が届出の事実を知ってこれを追認したときは，その婚姻は追認時から将来に向かって効力を生ずる。
ウ．代理権を有しない者がした契約を本人が相手方に対して追認した場合であっても，契約の時においてその者が代理権を有しないことを相手方が知らなかったときは，相手方は契約を取り消すことができる。
エ．親権者の代理行為が利益相反行為に当たる場合，本人は，成年に達すれば，追認することができる。
オ．養子縁組が法定代理人でない者の代諾によるために無効である場合であっても，養子本人は，縁組の承諾をすることができる満１５歳に達すれば，追認することができる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2018",num:"6",subject:"min",q:`消滅時効の中断に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．判決により確定した不法行為に基づく損害賠償請求権の消滅時効期間は１０年である。
イ．訴訟上相殺の主張がされ，受働債権につき債務の承認がされたものと認められる場合において，その後相殺の主張が撤回されたときは，承認による時効中断の効力は失われる。
ウ．一個の債権の数量的な一部についてのみ判決を求める旨を明示して訴えの提起があった場合，裁判上の請求による時効中断の効力は，その一部の範囲においてのみ生じ，残部に及ばない。
エ．不動産の仮差押えによる時効中断の効力は，仮差押えの被保全債権について本案の勝訴判決が確定した時に消滅する。
オ．目的物の引渡請求訴訟において留置権の抗弁を主張したときは，その被担保債権について裁判上の請求による時効中断の効力を生ずる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2018",num:"7",subject:"min",q:`Ａは，Ｂとの間でＡが所有する甲土地を売却する旨の売買契約（以下「本件第１売買契約」という。）を締結し，Ｂからその代金の支払を受けたが，ＡからＢへの所有権移転登記手続をせず，Ｃとの間で甲土地を売却する旨の売買契約（以下「本件第２売買契約」という。）を締結し，ＡからＣへの所有権移転登記手続をした。その後，Ａは行方不明になり，Ｂは，Ｃに対し，所有権に基づいてＣからＢへの移転登記手続請求訴訟を提起した。この場合に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ｂは，請求原因として，Ａが甲土地を所有していたこと，本件第１売買契約の成立及びＣの登記の存在を主張立証しなければならない。
イ．Ｃは，対抗要件の抗弁を主張する場合には，本件第２売買契約の成立及びＣが本件第２売買契約締結当時，本件第１売買契約について善意無過失であったことを主張立証しなければならない。
ウ．Ｃは，ＢがＢのＣに対する登記請求権を行使することができる時から２０年以上行使していなかったとしても，その登記請求権の時効による消滅をもって，抗弁とすることはできない。
エ．Ｃが抗弁として本件第２売買契約の成立及びＣの登記がこれに基づくことを主張立証した場合，Ｂは，Ｃが本件第２売買契約締結当時，本件第１売買契約について悪意であったことをもって，再抗弁とすることができる。
オ．本件第２売買契約がＡの錯誤により無効であった場合，Ｃが抗弁として本件第２売買契約の成立及びＣの登記がこれに基づくことを主張立証したときは，Ｂは，本件第２売買契約についてＡに要素の錯誤があることをもって，再抗弁とすることができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2018",num:"8",subject:"min",q:`占有権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．占有保持の訴えは，妨害の存する間のみ提起することができる。
イ．Ａが所有する甲建物にＡと同居しているＡの未成年の子Ｂは，甲建物の占有権を有しない。
ウ．Ａは，Ｂが所有する甲土地を解除条件付でＢから買い受ける旨の売買契約を締結し，当該売買契約に基づいてＢから甲土地の引渡しを受けた。その後，解除条件が成就した場合，Ａの甲土地に対する占有は自主占有でなくなる。
エ．甲土地を占有していた権利能力なき社団が一般社団法人になった場合，その一般社団法人は，甲土地の取得時効を主張するに際して，権利能力なき社団として占有した期間を併せて主張することができる。
オ．占有の訴えに対し，本権に基づく反訴を提起することはできない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2018",num:"9",subject:"min",q:`用益物権に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．無償の地上権を設定することはできない。
イ．地上権は，存続期間を定めないで，設定することができる。
ウ．無償の永小作権を設定することはできない。
エ．無償の地役権を設定することはできない。
オ．地役権は，存続期間を定めないで，設定することができる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2018",num:"10",subject:"min",q:`不動産物権変動に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．未成年者ＡがＡ所有の甲土地をＢに売却し，その旨の所有権移転登記がされた後，Ｂが，Ａの未成年の事実を過失なく知らないＣに甲土地を売却し，その旨の所有権移転登記がされた場合において，ＡがＢに対する売買の意思表示を取り消したときは，Ｃは，Ａに対し，甲土地の所有権の取得を主張することができない。
イ．ＡがＡ所有の甲土地をＢに売却し，その代金が未払である間に，ＡからＢへ所有権移転登記がされた後，Ｂが，Ｂの代金未払の事実を知っているＣに甲土地を売却し，その旨の所有権移転登記がされた場合において，ＡがＢの履行遅滞によりＡＢ間の売買契約を解除したときは，Ｃは，Ａに対し，甲土地の所有権の取得を主張することができない。
ウ．ＡがＡ所有の甲土地をＢに売却したが，代金の支払をめぐってＡＢ間で争いを生じ，その後，Ｂが甲土地の所有権を有することを確認する旨の示談が成立した場合において，当該示談に立会人として関与し，示談書に立会人として署名捺印していたＣが，ＡからＢに所有権移転登記がされる前に，Ａに対する債権に基づいて，Ａ名義の甲土地を差し押さえ，その旨の差押えの登記がされたときは，Ｂは，Ｃに対し，甲土地の所有権の取得を主張することができない。
エ．ＡがＡ所有の甲土地をＢに売却した後，ＣがＢを害する目的で甲土地をＡから買い受け，その旨の所有権移転登記がされた場合において，Ｃが事情を知らないＤに対して甲土地を売却し，その旨の所有権移転登記がされたときは，Ｂは，Ｄに対し，甲土地の所有権の取得を主張することができる。
オ．ＢがＡ所有のＡ名義の甲土地を占有し，取得時効が完成した後，ＣがＡから甲土地について抵当権の設定を受けて抵当権設定登記がされた場合において，Ｂがその抵当権の設定の事実を知らずにその後引き続き時効取得に必要な期間甲土地を占有し，その期間経過後に取得時効を援用したときは，Ｂは，Ｃに対し，抵当権の消滅を主張することができる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"2"},{year:"2018",num:"11",subject:"min",q:`所有権の取得に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡがＡ所有の甲土地をＢに譲渡し，Ｂが甲土地上に立木を植栽して明認方法を施した場合において，その後，ＡがＣに甲土地を譲渡して，Ｃに対する所有権移転登記をしたときは，明認方法が存続していたとしても，ＢはＣに対して，立木の所有権を対抗することができない。
イ．ＡがＢに対して，完成した建物の所有権の帰属について特約をせずに，Ａ所有の土地上に建物を建築することを注文したところ，Ｂが自ら材料を提供して建前を建築した段階で工事を中止した場合（その時点における時価４００万円相当）において，Ａから残工事を請け負ったＣが自ら材料を提供して当該建前を独立の不動産である建物に仕上げ（その時点における時価９００万円相当），かつ，ＡがＣに代金を支払っていないときは，当該建物の所有権は，Ｃに帰属する。
ウ．Ａの所有する船舶（時価６００万円相当）に，Ｂの所有する発動機（時価４００万円相当）が取り付けられた場合において，損傷しなければこれらを分離することができず，主従の区別がつかないときは，当該発動機付船舶は，３対２の割合でＡとＢが共有する。
エ．Ａが所有する建物を賃借したＢがＡの同意を得て増築をした場合には，その増築部分について取引上の独立性がなくても，増築部分の所有権は，Ｂに帰属する。
オ．Ａの所有する液体甲（１００立方メートル）が，Ｂの所有する液体乙（１０立方メートル）と混和して識別することができなくなり，液体丙（１１０立方メートル）となった場合において，Ａが液体丙の所有権を取得したときは，ＢはＡに対し，不当利得の規定に従い，その償金を請求することができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2018",num:"12",subject:"min",q:`担保物権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．留置権は，その目的物の一部が債務者に引き渡された場合，目的物の残部についても消滅する。
イ．ＡがＢに対して動産売買の先取特権を有していた場合，ＢがＣに対してその目的物である動産を売却し，占有改定によりこれを引き渡したとしても，Ａの動産売買の先取特権は消滅しない。
ウ．動産質権の設定は，指図による占有移転をもって目的物を債権者に引き渡すことによっても，その効力を生じる。
エ．不動産質権については，質権者と質権設定者との間の特約で，質権者が目的物を使用収益しない旨を定めることができる。
オ．抵当権者は，目的物が不法に占有された場合であっても，不法占有者に対して，抵当権に基づいて目的物を直接自己に明け渡すよう求めることはできない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2018",num:"13",subject:"min",q:`抵当権の効力に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．抵当不動産についてその所有者から地上権を買い受けた第三者が，抵当権者の請求に応じてその抵当権者にその代価を弁済したときは，抵当権は，その第三者のために消滅する。
イ．主たる債務者の承継人は，抵当権消滅請求をすることができない。
ウ．建物の賃貸借は，その登記がなくても，建物の引渡しがあったときは，その引渡し前に登記をした抵当権を有する全ての者が同意をし，かつ，その同意の登記があれば，その同意をした抵当権者に対抗することができる。
エ．抵当不動産をその所有者から買い受けた者は，その不動産について必要費を支出した場合において，抵当権の実行によりその不動産が競売されたときは，その代価から最先順位の抵当権者より先にその支出した額の償還を受けることができる。
オ．抵当権者に対抗することができない賃貸借により抵当権の目的である土地を使用収益する者は，抵当権の実行によりその土地が競売された場合，買受人の買受けの時から６か月を経過するまでは，その土地を買受人に明け渡す必要がない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2018",num:"14",subject:"min",q:`法定地上権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａが所有する甲土地及びその上の乙建物にＢのために共同抵当権が設定された後，乙建物が取り壊され，甲土地上に新たにＡが所有する丙建物が建築されて，丙建物につきＣのために抵当権が設定された場合において，甲土地に対するＢの抵当権の実行によりＤが甲土地を取得したときは，法定地上権が成立する。
イ．Ａが所有する更地の甲土地に第一順位の抵当権が設定された後，甲土地上にＡが所有する乙建物が建築され，甲土地に第二順位の抵当権が設定された場合において，第二順位の抵当権の実行によりＢが甲土地を取得したときは，法定地上権は成立しない。
ウ．Ａが所有する甲土地上にＢが所有する乙建物があるところ，甲土地にＣのために第一順位の抵当権が設定された後，Ｂが甲土地の所有権を取得し，甲土地にＤのために第二順位の抵当権を設定した場合において，Ｃの抵当権が弁済により消滅し，その後，Ｄの抵当権の実行によりＥが甲土地を取得したときは，法定地上権が成立する。
エ．Ａが甲土地及びその上の乙建物を所有しているが，甲土地の所有権移転登記をしていなかったところ，乙建物に抵当権が設定され，抵当権の実行によりＢが乙建物を取得したときは，法定地上権は成立しない。
オ．ＡとＢが共有する甲土地上にＡが所有する乙建物があるところ，Ａが甲土地の共有持分について抵当権を設定した場合において，抵当権の実行によりＣがその共有持分を取得したときは，法定地上権が成立する。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2018",num:"15",subject:"min",q:`根抵当権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．元本の確定前において債務者を変更するには，後順位の抵当権者の承諾を得なければならない。
イ．根抵当権者は，担保すべき元本の確定すべき期日の定めがない場合，いつでも，担保すべき元本の確定を請求することができる。
ウ．根抵当権者は，根抵当権を実行した場合，当該競売手続において極度額を超える部分について配当を受けることはない。
エ．根抵当権の極度額の減額をするには，利害関係を有する者の承諾を得ることを要しない。
オ．元本の確定後においては，根抵当権設定者は，その根抵当権の極度額を，現に存する債務の額と以後２年間に生ずべき利息その他の定期金及び債務の不履行による損害賠償の額とを加えた額に減額することを請求することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2018",num:"16",subject:"min",q:`債権の目的に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．金銭に見積もることができないものは，債権の目的とすることができない。
イ．外国の通貨で債権額を指定した場合には，債務者は，日本の通貨で弁済をすることができない。
ウ．元本債権が消滅したとしても，弁済期が到来した利息債権は，当然には消滅しない。
エ．甲倉庫内の米のうち１トンの引渡しを受ける旨の制限種類債権は，甲倉庫内の米が全て滅失したときは，履行不能となる。
オ．選択債権においては，別段の意思表示がないときは，選択権は債権者に属する。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2018",num:"17",subject:"min",q:`詐害行為取消権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．相続の放棄は，相続の放棄をした債務者が債務の履行を長期間怠るなど背信性の程度が著しい場合に限り，詐害行為取消権の対象となる。
イ．不動産の買主は，その売主がその不動産を第三者に贈与した場合，それによって売主が無資力となったとしても，当該贈与を詐害行為取消権の対象とすることができない。
ウ．詐害行為取消権の対象となる贈与の目的物が不可分なものであるときは，その価額が債権額を超過する場合であっても，贈与の全部について取り消すことができる。
エ．贈与が虚偽表示に該当することを知らない転得者との関係において，当該贈与を詐害行為取消権の対象とすることはできない。
オ．債務者が自己の第三者に対する債権を譲渡した場合において，債務者がこれについてした確定日付のある債権譲渡の通知は，詐害行為取消権行使の対象とならない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2018",num:"18",subject:"min",q:`保証に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．保証が付された債権が譲渡された場合においては，譲渡人から主たる債務者に対して債権譲渡の通知をすれば，保証人に対して通知をしなくても，譲受人は保証人に対して保証債務の履行を請求することができる。
イ．未成年者が法定代理人の同意を得ずに債務を負担する行為をした場合において，その債務の保証人は，保証契約締結の当時，未成年者が法定代理人の同意を得ずに債務を負担する行為をしたことを知っており，かつ，その後に，当該未成年者の行為が，未成年者の行為であることを理由に取り消されたときは，当該未成年者が負担していた債務と同一の目的を有する独立の債務を負担したものと推定される。
ウ．主たる債務者が債権者に対し反対債権を有している場合であっても，保証人は，債権者から保証債務の履行を請求されたときは，保証債務を履行しなければならない。
エ．主たる債務について違約金の定めがない場合，保証人は，債権者との間で，保証債務についてのみ違約金を約定することができない。
オ．特定物の売買契約が売主の債務不履行により解除され，売主が代金返還義務を負担したときは，売主のための保証人は，反対の特約のない限り，当該代金返還義務について保証の責任を負う。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2018",num:"19",subject:"min",q:`弁済に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．委託を受けない保証人は，主たる債務者の意思に反して弁済することができない。
イ．弁済を受領する権限を有しない者に対する弁済は，債権者がこれによって利益を受けたとしても，債権者に対し効力を有しない。
ウ．第三者は，当事者が合意により禁止したときは，弁済をすることができない。
エ．弁済の時期について不確定期限があるときは，債務者は，その期限の到来した後に履行の請求を受けた時又はその期限の到来したことを知った時のいずれか早い時から遅滞の責任を負う。
オ．預金通帳を盗んだ者が預金通帳を使用して現金自動入出機から預金の払戻しを受ける行為については，弁済の効力が生じることはない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"5"},{year:"2018",num:"20",subject:"min",q:`弁済の目的物の供託に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．債務の弁済について利害関係を有する第三者が債権者に弁済の提供をしたのに債権者がその受領を拒んだ場合，当該第三者は，債務者の意思に反するときは，供託することができない。
イ．口頭の提供をしても債権者が弁済の受領を拒むことが明確な場合，債務者は，口頭の提供をしなくても，供託することができる。
ウ．指名債権が二重に譲渡され，確定日付のある２つの譲渡通知が債務者に到達したが，その先後関係が不明である場合，債務者は供託することができる。
エ．金銭債務について弁済供託がされた場合，債権者が供託金を受け取った時に債務は消滅する。
オ．自己が相当と考える額を債務者が供託した場合には，債務の全額に満たなくても，その額については供託は有効である。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2018",num:"21",subject:"min",q:`相殺に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．抵当不動産の所有権を取得したＡが，抵当権者Ｂに対する売買代金債権を有している場合には，当該売買代金債権と抵当権の被担保債務であるＣに対する貸金債務とを対当額において相殺することができる。
イ．弁済期の定めのない貸金債権を有する者は，当該貸金債権の債務者に対して，弁済期が未到来の売買代金債務を負担している場合には，当該売買代金債務の期限の利益を放棄した上で，これらの債権債務を対当額において相殺することができる。
ウ．請負代金債務を負担する注文者が，請負人に対する貸金債権を譲り受けたが，譲受けの時点で当該貸金債権の消滅時効が完成していた。その後，請負人により消滅時効が援用された場合，注文者は，これらの債権債務を対当額において相殺することができない。
エ．車両同士の交通事故が双方の運転者の過失に基因して発生し，双方に物的損害のみが生じた場合，一方の運転者は，双方の損害賠償債権を対当額において相殺することができる。
オ．ＡがＢ銀行に対する定期預金債権を有していたところ，Ｃが，Ａと称して，Ｂ銀行に対し，その定期預金債権を担保とした貸付けの申込みをし，Ｂ銀行は，ＣをＡと誤信したため貸付けに応じた。この場合，Ｂ銀行は，貸付けの際に，Ｃを預金者本人と認定するにつき金融機関として負担すべき相当の注意義務を尽くしていたとしても，その貸付債権と定期預金債権とを対当額において相殺することができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2018",num:"22",subject:"min",q:`免除に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．債権者が債務者に免除の意思を表示した場合，免除の効果は，債務者が債権者に対して免除の利益を享受する意思を表示した時に発生する。
イ．債務の免除があった場合において，債務者が債務の免除を受けたことを忘れて弁済したときは，債務者はその返還を求めることはできない。
ウ．Ａに対し，ＢＣＤが等しい負担部分で３００万円の連帯債務を負っている場合において，ＡがＣについて連帯の免除をしたときでも，Ｂ及びＤは，Ａに対し，３００万円の連帯債務を負う。
エ．Ａに対し，ＢＣＤが等しい負担部分で３００万円の連帯債務を負っている場合において，ＡがＣに対して３００万円の連帯債務全額について免除をしたときでも，Ｂ及びＤは，Ａに対し，３００万円の連帯債務を負う。
オ．主たる債務者について債務の免除があった場合には，連帯保証人の債務は消滅する。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2018",num:"23",subject:"min",q:`民法上の金銭消費貸借に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．金銭消費貸借の予約は，書面によらなければならない。
イ．貸主が借主の指示する第三者に金銭を交付した場合であっても，金銭消費貸借は効力を生ずる。
ウ．金銭消費貸借において，反対の意思の表示がない限り，貸主は法定利率による利息を請求することができる。
エ．金銭消費貸借において貸主が利息を請求することができる場合，借主は，特約のない限り，元本を受け取った日を含めて利息を支払わなければならない。
オ．金銭消費貸借において，返還場所に関する合意をしなかった場合には，借主は貸主の現在の住所に弁済金を持参して返還をしなければならない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2018",num:"24",subject:"min",q:`使用貸借に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．建物の使用貸借において，目的建物に瑕疵があり，貸主がそれを知らなかったことについて過失がある場合には，貸主は担保責任を負う。
イ．Ａの共同相続人の一人であるＢが相続開始前からＡの許諾を得て遺産である建物においてＡと同居していた場合，ＢはＡの死亡時から遺産分割により当該建物の所有関係が最終的に確定するまでの間であっても，当該建物を無償で使用することができない。
ウ．建物所有者ＡとＢの間で，Ａの海外赴任中に限り無償でその所有建物をＢが借り受ける旨の合意をしたが，その引渡し前に，Ａが第三者Ｃと賃貸借契約を締結して当該建物を引き渡した場合，ＢはＡに対して，使用貸借契約に基づく債務の不履行による損害賠償請求をすることができない。
エ．借主が有益費を支出した場合において，その価格の増加が現存するときは，貸主は，その選択に従い，借主が支出した金額又は増価額のいずれかを償還すれば足りる。
オ．借主が貸主に無断で第三者に借用物を引き渡して使用させたときは，貸主は，借主に対して，催告をしなければ，契約を解除することができない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2018",num:"25",subject:"min",q:`Ａは，Ｂに対し，Ａの所有する甲建物を賃料月額１０万円で賃貸し，甲建物をＢに引き渡した。その後，Ｂは，Ｃに対し，甲建物を賃料月額１２万円で賃貸し，甲建物をＣに引き渡した。この事例に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡがＢＣ間の賃貸借を承諾していた場合，Ａは，Ｃに対し，甲建物の賃料として月額１２万円の支払を請求することができる。
イ．ＡがＢＣ間の賃貸借を承諾していた場合，Ｃは，甲建物の修繕を直接Ａに対し請求することができない。
ウ．ＡがＢＣ間の賃貸借を承諾していた場合において，ＡがＢとの間で甲建物の賃貸借を合意解除したときは，Ａは，Ｃに対し，甲建物の明渡しを請求することができる。
エ．ＡがＢＣ間の賃貸借を承諾していなかった場合において，ＡＢ間の賃貸借が終了したときは，Ａは，Ｃに対し，所有権に基づく甲建物の明渡しを請求することはできるが，ＡＢ間の賃貸借の終了に基づく甲建物の明渡しを請求することはできない。
オ．ＡがＢＣ間の賃貸借を承諾していなかった場合，Ａは，当然にＡＢ間の賃貸借を解除することができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2018",num:"26",subject:"min",q:`委任に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．無償委任の受任者は，自己のためにするのと同一の注意をもって，委任事務を処理しなければならない。
イ．受任者は，いつでも，第三者に委任事務の処理を委託することができる。
ウ．受任者は，委任事務を処理するのに必要と認められる費用を支出したときは，委任者に対し，その費用及び支出の日以後におけるその利息の償還を請求することができる。
エ．委任は，受任者が後見開始の審判を受けたときは，終了する。
オ．受任者は，やむを得ない事由がなければ，委任契約を解除することができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2018",num:"27",subject:"min",q:`和解に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡがＢに対してＡＢ間の売買契約に基づく甲不動産の引渡しを請求したが，Ｂがこれを拒否したため争いを生じた場合には，ＡＢ間で，ＢがＡに対して係争物とは全く関係のない乙不動産を譲り渡す旨の和解契約を締結することはできない。
イ．Ａから債権を買い受けたＢとその債権の債務者であるＣとの間で和解契約が締結された。この和解に際しては，その債権に係る支払額が争われ，ＡＢ間の売買契約が有効か否かは争われていなかったが，後に売買契約が無効であることが判明したときは，Ｂは，当該和解契約の錯誤による無効を主張することができる。
ウ．Ａは，Ｂとの賭博に負けたため，Ｃに事情を話して小切手を振り出させ，これらの経緯を知るＢに交付したところ，ＢＣ間で，小切手の支払金額につき争いが生じ，和解契約が成立した。この場合，ＢＣ間の和解契約は公序良俗に反し無効である。
エ．Ａは，Ｂの運転する自動車と接触し負傷したため，Ｂに対し損害賠償を請求したところ，ＡＢ間で，全損害を把握し難い状況の下において，ＢがＡに対して早急に少額の賠償金を支払い，Ａはそれ以外請求しない旨の和解契約が成立した。その後，Ａに和解契約の当時は予期し得なかった後遺症が生じた。この場合，Ａは，Ｂに対し，新たに生じた後遺症につき損害賠償を請求することができる。
オ．Ａは，自己の所有する建物をＢに賃貸したが，Ｂが賃料の支払を遅滞したため，Ｂに対して賃料の支払を請求し，ＡＢ間で，Ｂが以後賃料の支払を１か月分でも怠ったときには賃貸借契約は当然解除となる旨の和解契約が成立した。この場合，その後に賃料の不払があったときは，Ｂは，信頼関係の不破壊を主張して解除の効力を争うことができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2018",num:"28",subject:"min",q:`Ａが長期出張で不在中に，Ａの居宅の生け垣の一部が強風により倒壊した。その後，Ａの居宅の隣地に居宅を有するＢがＡのために義務なく行った行為に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ｂが自ら生け垣を修理した場合には，Ｂは，Ａに対し，その修理に対する報酬の支払を請求することはできない。
イ．Ｂが造園業者に依頼して生け垣の修理をさせた場合には，Ｂは，Ａに対し，造園業者へ未払の請負代金を支払うよう請求することはできない。
ウ．Ｂが自ら生け垣を修理した後，台風により生け垣全体が倒壊した場合において，生け垣の修理がＡの意思に反していたときは，Ｂは，Ａに対し，その修理に要した費用の支払を請求することはできない。
エ．Ｂが自ら生け垣の修理を始めたが，途中で放置したために生け垣全体が枯れてしまった場合には，Ａは，Ｂに対し，生け垣が枯れた分の損害の賠償を請求することはできない。
オ．Ｂが，Ａの居宅の防犯だけでなくＢの居宅の防犯も目的として自ら生け垣を修理した場合には，Ｂは，Ａに対し，その修理に要した費用の支払を請求することはできない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2018",num:"29",subject:"min",q:`不法行為に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．精神上の障害により責任無能力者となった夫と同居する妻は，責任無能力者である夫を監督する法定の義務を負う者として，夫が第三者に加えた損害を賠償する責任を負う。
イ．請負人がその仕事について第三者に損害を加えた場合には，その注文又は指図について注文者に過失があったときを除き，注文者は，その損害を賠償する責任を負わない。
ウ．土地の工作物の設置又は保存に瑕疵があることによって他人に損害が生じた場合において，その工作物の所有者が損害の発生を防止するのに必要な注意をしたときは，その工作物の占有者が，その損害を賠償する責任を負う。
エ．動物の占有者は，その動物の種類及び性質に従い相当の注意をもってその管理をしたときは，その動物が他人に加えた損害を賠償する責任を負わない。
オ．交通事故により傷害を受けた者が搬送先の医師の診療上の過失により死亡した場合には，交通事故の加害者と医師が被害者の被った損害について連帯して賠償する責任を負うことはない。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2018",num:"30",subject:"min",q:`親子関係をめぐる訴訟に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．嫡出否認の訴えは，夫のほか，子の血縁上の父も提起することができる。
イ．妻以外の第三者が生んだ子を嫡出子として出生を届け出たため戸籍上嫡出子となっている子について，夫が父子関係を争う場合，嫡出否認の訴えによることはできない。
ウ．夫が長期間服役しており，妻が夫の子を懐胎することが不可能であったと認められる時期に妻が懐胎した子について，夫が父子関係を争う場合には，嫡出否認の訴えによらなければならない。
エ．母子関係の存在を争う第三者は，母と子のどちらか一方が死亡した後は，親子関係不存在確認の訴えを提起することができない。
オ．女性が，再婚禁止期間内に婚姻届が誤って受理されて再婚し，出産した場合において，生まれた子に対し嫡出の推定が重複するときは，父を定めることを目的とする訴えによって裁判所がこれを定める。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2018",num:"31",subject:"min",q:`いずれも婚姻をしていないＡ男とＢ女との間に子Ｃが生まれた。この場合に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａが成年被後見人であるとしても，ＡがＣを認知するにはＡの成年後見人の同意を要しない。
イ．ＡがＣを認知した場合，Ｃの監護について必要な事項は，家庭裁判所がこれを定める。
ウ．Ｃは，Ａが死亡した場合，認知の訴えを提起することができない。
エ．ＡがＣを認知した後，ＡとＢが婚姻したとしても，Ｃは嫡出子の身分を取得することはない。
オ．ＡがＣを認知しない間にＣが死亡した場合において，Ｃに未成年の子Ｄがあったときは，Ｄの承諾を得なくとも，ＡはＣを認知することができる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2018",num:"32",subject:"min",q:`相続人に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａが死亡した場合，Ａの兄Ｂの子ＣがＡの代襲相続人となることはない。
イ．Ａが死亡した場合，Ａの祖父ＢがＡの相続人となることはない。
ウ．Ａの子Ｂが相続人の欠格事由に該当し，その相続権を失った場合において，その後，Ａの死亡前にＢがＣを養子とする養子縁組をしたときは，ＣはＡの代襲相続人となる。
エ．Ａが妻Ｂの懐胎中に死亡した場合において，その後，出生した子ＣはＡの相続人とならない。
オ．Ａが死亡した場合において，Ａの子Ｂが相続の放棄をしたときは，Ｂの子ＣはＡの代襲相続人となることはない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2018",num:"33",subject:"min",q:`相続の承認又は放棄に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．相続の放棄をした者は，その放棄によって相続人となった者が相続財産の管理を始めることができるまで，善良な管理者の注意をもって，その財産の管理を継続しなければならない。
イ．共同相続人に強迫されて相続の放棄をした者は，その旨を家庭裁判所に申述して放棄の取消しをすることができる。
ウ．相続人Ａが相続の放棄をしたことにより相続人となったＢが相続の承認をした場合であっても，Ｂの承認後にＡが私に相続財産を消費した場合には，Ａは単純承認をしたものとみなされる。
エ．限定承認者は，相続債権者及び受遺者に対する公告の期間の満了前には，相続債権者及び受遺者に対して弁済を拒むことができる。
オ．共同相続人のうち一人が相続の放棄をした場合，他の共同相続人は限定承認をすることができなくなる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2018",num:"34",subject:"min",q:`相続人の不存在に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．相続人があることは明らかでないが，相続財産全部の包括受遺者があることは明らかである場合には，相続財産法人は成立しない。
イ．相続財産法人が成立し，家庭裁判所によって相続財産の管理人が選任された後に，相続人のあることが明らかになった場合には，その時点で，相続財産管理人の代理権は消滅する。
ウ．共有者の一人が相続人なくして死亡した場合において，相続債権者及び受遺者に対する清算手続が終了したときは，その共有持分は他の共有者に帰属し，特別縁故者への財産分与の対象にはならない。
エ．相続人は，相続人の捜索の公告の期間内に相続人としての権利を主張しなかった場合には，特別縁故者に対する相続財産の分与後，残余財産があったとしても，相続権を主張することができない。
オ．家庭裁判所は，特別縁故者に対して相続財産の分与をする場合，清算後残存すべき相続財産の全部を与えることはできない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2018",num:"35",subject:"min",q:`遺言の方式に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．自筆証書遺言における押印を指印によってすることはできない。
イ．秘密証書遺言をするには，遺言者が証書の本文及び氏名を自書し，押印をしなければならない。
ウ．公正証書遺言において，遺言者が署名することができない場合には，公証人がその事由を付記して，署名に代えることができる。
エ．自筆証書遺言の加除その他の変更は，遺言者が，その場所を指示し，これを変更した旨を付記して特にこれに署名し，かつ，その変更の場所に押印をしなければ，その効力を生じない。
オ．成年被後見人が事理弁識能力を一時回復した時において遺言をするには，医師二人以上の立会いがなければならない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2018",num:"36",subject:"min",q:`混同に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．債権質に供されている債権を債務者が相続したときは，当該債権は消滅する。
イ．賃貸人たる地位と転借人たる地位とが同一人に帰属した場合，転貸借関係は消滅する。
ウ．連帯債務者の一人と債権者との間に混同があったときは，当該連帯債務者は弁済をしたものとみなされ，他の連帯債務者に対して負担部分の割合に応じて求償することができる。
エ．甲土地の賃借権が対抗要件を具備した後に，甲土地に抵当権が設定された場合において，甲土地の所有権と賃借権が同一人に帰属するに至ったときは，賃借権は消滅する。
オ．保証人が債権者を相続したときは，保証債務は消滅する。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2018",num:"1",subject:"kei",q:`刑罰論に関する次の各【見解】についての後記１から５までの各【記述】のうち，誤っているものを２個選びなさい。
【見 解】
Ａ．刑罰の目的は，行為者が将来再び犯罪を行うのを予防することにある。
Ｂ．刑罰の目的は，刑罰による威嚇を通して一般人が犯罪を行うのを予防することにある。
Ｃ．刑罰は，犯罪を行った者が果たさなければならないしょく罪である。
Ｄ．刑罰の目的は，処罰により行為者の行為が犯罪であると公的に確認され，これを通して一般人が犯罪を行うのを予防することにある。
【記 述】`,c1:"１．Ａの見解に対しては，軽微な犯罪を行った者であっても，その更生に必要であれば，長期の拘禁刑を科すことが正当化されるおそれがあるとの批判が可能である。",c2:"２．Ｂの見解に対しては，刑罰は重ければ重いほどよいという考え方に陥るおそれがあるとの批判が可能である。",c3:"３．Ｃの見解は，軽微な犯罪を行った者であっても，一般予防の必要性が高いときはその刑を重くしなければならないとの考え方に親和的である。",c4:"４．Ｃの見解に対しては，犯罪を行った者に対し，その処罰を猶予する余地がなくなるとの批判が可能である。",c5:"５．Ｄの見解は，自由意思の存在を認めない決定論を前提として初めて成り立つものである。",c6:"",c7:"",c8:"",a:"35"},{year:"2018",num:"2",subject:"kei",q:`次のアからオまでの各記述を判例の立場に従って検討した場合，正しいものの組合せは，後記１から５までのうちどれか。
ア．甲は，同僚Ａを会社の備品倉庫内に閉じ込めて困らせようと考え，午後７時頃，Ａが一人で作業をしていた同倉庫の全ての出入口扉に外側から鍵を掛けた。Ａはそのことに気付かず，もともと同倉庫で深夜遅くまで仕事をするつもりであったので，そのまま作業を続けていたところ，午後１０時頃，たまたま同倉庫にやって来た他の従業員が出入口扉の鍵を開けた。この場合，甲には監禁罪は成立し得ない。
イ．甲は，別居中の元妻Ａが単独で親権を有する生後数日のＢを連れ去ろうと考え，Ａ方を訪問した上，Ａがトイレに行っている隙に，ベビーベッドで寝ていたＢを連れ去った。この場合，Ｂには移動の自由が全くないから，甲には未成年者略取罪は成立し得ない。
ウ．甲は，捜査車両をのぞき見て同車両のナンバーを把握するため，警察署の建物及び敷地への外部からの立入りを制限するとともに内部をのぞき見ることができない構造として作用し，建物の利用のために供されている高さ約２．５メートルのコンクリート塀を正当な理由なくよじ登り，その上部に立って同警察署の敷地内の捜査車両を見て立ち去った。この場合，甲には建造物侵入罪は成立し得ない。
エ．甲は，Ａに恨みを抱き，「ふざけるな。おまえの妻Ｂを酷い目に遭わせてやる。」という電子メールをＡ宛てに送り付けた。ＢがＡの内縁の妻であった場合，甲には脅迫罪は成立し得ない。
オ．甲は，深夜，Ａ方に侵入し，泥酔して熟睡中のＡにわいせつ行為をして，Ａに全く気付かれないままＡ方を出た後，Ａ方から約１００メートル離れた路上で，警ら中の警察官Ｂから職務質問を受けたため，逮捕を免れる目的で，Ｂを拳骨で殴打してＢに傷害を負わせた。この場合，甲には準強制わいせつ致傷罪は成立し得ない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2018",num:"3",subject:"kei",q:`過失犯の本質について，学生Ａ及びＢが次の【会話】のとおり議論している。【会話】中の①から④までの（ ）内に後記アからキまでの【発言】から適切なものを選んだ場合，正しいものの組合せは，後記１から５までのうちどれか。
【会 話】
学生Ａ．私は，過失犯の本質について，精神を緊張させたならば結果発生を予見することが可能であったにもかかわらず，これを予見しなかったことにあると考えています。私が採る見解では，過失犯の体系上，一般的に，（①）の判断において，信頼の原則を考慮することになります。
学生Ｂ．Ａ君が採る見解に対しては，（②）という批判がありますね。私は，過失犯の本質について，社会生活上必要な注意を尽くさないで，結果回避のための適切な措置を採らなかったことにあると考えています。
学生Ａ．Ｂ君が採る見解に対しては，「結果回避のための適切な措置」について，（③）という批判があります。また，Ｂ君が指摘した批判に対しては，私が採る見解でも，（④）ことにより，対応することができるとの反論ができます。
【発 言】
ア．予見可能性
イ．結果回避義務
ウ．行政取締法規が定める義務に帰着せざるを得ず，刑法上の過失犯が行政取締法規違反の結果的加重犯になってしまう
エ．予見可能性のみで過失を認めると，過失犯の処罰範囲が広くなり過ぎる
オ．重大な結果が予見可能であるにもかかわらず，それを回避する義務がないというのは妥当ではない
カ．実行行為の内容として実質的危険性を要求する
キ．予見可能性を結果回避義務を導く前提要件として位置付ける`,c1:"１．①ア ②ウ ③エ ④キ",c2:"２．①ア ②エ ③ウ ④カ",c3:"３．①ア ②エ ③オ ④キ",c4:"４．①イ ②ウ ③オ ④カ",c5:"５．①イ ②エ ③ウ ④キ",c6:"",c7:"",c8:"",a:"2"},{year:"2018",num:"4",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．甲は，Ａから現金を借り入れるに当たり，借入金をＡに自ら返済する意思も能力もないのに，乙に対し，「自分がＡに返済するので，保証人として名前を貸してほしい。」とうそを言い，その旨乙を誤信させ，乙に，Ａを貸主，甲を借主とする消費貸借契約書の保証人欄に署名押印させた。乙は錯誤に基づいて署名押印しているから，甲には有印私文書偽造罪の間接正犯が成立する。",c2:"２．甲は，取引先乙に見せて自己に信用があることを誇示するだけの目的で，偽造された約束手形を真正なものとして乙に提示した。偽造有価証券行使罪の「行使」といえるためには，偽造有価証券を真正なものとして流通に置く必要があるから，甲には同罪は成立しない。",c3:"３．甲は，偽名を用いて会社に就職しようと考え，同会社に提出する目的で，履歴書用紙に，架空人Ａの氏名を記載し，その氏名の横にＡと刻した印鑑を押印するとともに，自己の顔写真を貼り付けて履歴書を作成した。同履歴書の作成名義人と作成者との人格の同一性にそごを生じさせるものとは認められないから，甲には有印私文書偽造罪は成立しない。",c4:"４．甲は，信販会社の財産上の事務処理を誤らせる目的で，権限がないのに，同会社の会員名義のクレジットカードの電磁的記録を白地のカード板の磁気部分に印磁して，クレジットカードを構成する電磁的記録を作成したが，その外観は一般人が真正な支払用カードと誤認する程度のものではなかった。支払用カード電磁的記録不正作出罪が成立するためには，一般人が真正な支払用カードと誤認する程度の外観を備える必要はないから，甲には同罪が成立する。",c5:"５．県立高校を中途退学した甲は，父親乙に見せて安心させるだけの目的で，偽造された同高校校長Ａ名義の甲の卒業証書を真正なものとして乙に提示した。甲は，同卒業証書を乙に見せただけであり，公文書に対する公共の信用を害するおそれがないから，甲には偽造有印公文書行使罪は成立しない。",c6:"",c7:"",c8:"",a:"4"},{year:"2018",num:"5",subject:"kei",q:`違法性に関する次のアからオまでの各記述を判例の立場に従って検討し，正しい場合には１を，誤っている場合には２を選びなさい。
ア．殺人被告事件の弁護人が，同被告事件の真犯人は被告人の兄であると考え，第一審の有罪判決後に行った記者会見で「同被告事件の真犯人は被告人の兄である。」旨発表した場合，弁護活動の一環として行ったものであるから，正当な業務行為として違法性が阻却され，名誉毀損罪は成立し得ない。
イ．宗教家が，異常な言動を示すようになっていた娘を連れてきた信者の求めに応じ，その娘の不調の原因を取り去る目的で，宗教上の行為として，同人の身体を手で押さえ付け，流れ落ちる滝の水を同人の顔面に打ち当てた結果，同人を窒息死させた場合，宗教活動の一環として行ったものであるから，正当な業務行為として違法性が阻却され，傷害致死罪は成立し得ない。
ウ．現行犯人を逮捕しようとする私人が，犯人から抵抗を受け，逮捕のために社会通念上必要かつ相当な範囲で実力を行使し同人に傷害を負わせた場合，法令による行為として違法性が阻却され，傷害罪は成立し得ない。
エ．借地人が，自己の借地内にある自己所有の店舗を増築する必要に迫られ，その借地内に突き出ている隣の家屋の屋根をその所有者の承諾なく切除した場合，自救行為として違法性が阻却され，建造物損壊罪は成立し得ない。
オ．新聞記者が，取材の目的で国家公務員に秘密漏示を唆した場合，取材の自由は憲法上保障される表現の自由に由来し，十分尊重されるべきであるから，正当な業務行為として違法性が阻却され，国家公務員法違反の罪（秘密漏示教唆罪）は成立し得ない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"22122"},{year:"2018",num:"6",subject:"kei",q:`賄賂罪（あっせん収賄罪を除く。）に関する次のアからオまでの各記述を判例の立場に従って検討した場合，正しいものの組合せは，後記１から５までのうちどれか。
ア．賄賂罪の「賄賂」は，公務員の職務に関する不正な利益であれば足り，個別の職務行為との間に具体的な対価関係があることを要しない。
イ．賄賂罪は，賄賂を収受し，又はその要求若しくは約束をした時点でそれらの行為をした者が公務員でなければ，いかなる場合でも成立しない。
ウ．賄賂罪の「職務」とは，公務員がその地位に伴い公務として取り扱うべき執務をいうが，独立の決裁権限がなく，単に上司の補助をする立場の公務員が取り扱う事務はこれに該当しない。
エ．賄賂罪の「職務」は，公務員の一般的職務権限に属するものであれば足り，公務員が現に具体的に担当している事務であることを要しない。
オ．賄賂罪の「職務」は，賄賂を収受し，又はその要求若しくは約束をした時点で公務員の一般的職務権限に属している必要があり，公務員が一般的職務権限を異にする他の職務に転じた後に前の職務に関して賄賂を収受した場合には，賄賂罪は成立しない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2018",num:"7",subject:"kei",q:`学生Ａ，Ｂ及びＣは，次の【事例】における甲の罪責について，後記【会話】のとおり議論している。【会話】中の①から④までの（ ）内から適切なものを選んだ場合，正しいものの組合せは，後記１から５までのうちどれか。
【事 例】
甲は，過失による自動車追突事故を偽装して保険会社から保険金を詐取することを計画し，乙に同計画を打ち明け，乙の真意に基づく同意を得た上で，自己の運転する自動車を乙が運転する自動車に追突させた。その結果，乙は軽微な傷害を負った。
【会 話】
学生Ａ．被害者が自己の身体に対する傷害を同意した場合に傷害罪が成立するか否かにつき，私は，判例と①（ａ．同様の・ｂ．異なる）立場に立っており，単に同意が存在するという事実だけではなく，その同意を得た動機，目的，身体傷害の手段，方法，損傷の部位，程度など諸般の事情を照らし合わせて，傷害罪の成否を決すべきであると考えます。乙の同意は，保険金詐取という違法な目的に利用するために得られた違法なものであり，これにより，乙に対する傷害行為の違法性が阻却されることはないので，甲には傷害罪が成立すると考えます。
学生Ｂ．Ａ君の見解に対しては，②（ｃ．個人の自己決定権を重視し過ぎている・ｄ．不可罰である詐欺の予備行為を傷害罪で処罰することになる）という批判があります。
学生Ｃ．私は，乙の有効な同意がある限り，刑法によって保護すべき法益の侵害がないので，乙に対する傷害行為については，傷害罪の構成要件該当性を欠き，甲には傷害罪が成立しないと考えます。
学生Ａ．Ｃ君の見解に対しては，③（ｅ．傷害罪の処罰根拠と合理的な関連性のない事情を考慮し過ぎている・ｆ．死亡の結果が発生した場合に傷害致死罪が不成立となるのは不当である）と批判することが可能です。
学生Ｃ．同意殺人罪に対応する同意傷害罪の規定がない以上，私の見解のように，同意傷害は不可罰であると解すべきです。
学生Ｂ．しかし，④（ｇ．同意殺人罪の法定刑に比して傷害罪の法定刑は重い・ｈ．同意殺人罪は，殺人罪の法定刑の下限の重さが考慮されて，その減軽類型として特に設けられたものである）ので，同意傷害罪の規定がないことは理由にならないと思います。`,c1:"１．①ａ ②ｃ ③ｅ ④ｈ",c2:"２．①ａ ②ｄ ③ｆ ④ｇ",c3:"３．①ａ ②ｄ ③ｆ ④ｈ",c4:"４．①ｂ ②ｃ ③ｅ ④ｇ",c5:"５．①ｂ ②ｄ ③ｆ ④ｇ",c6:"",c7:"",c8:"",a:"3"},{year:"2018",num:"8",subject:"kei",q:`次のアからオまでの各記述における甲の罪責について判例の立場に従って検討した場合，正しいものの組合せは，後記１から５までのうちどれか。
ア．甲が，自然湖の一部に設けられた乙のいけすから逃げ出した乙所有の錦鯉３０匹を，同湖内の同いけすから離れた場所で発見し，乙が所有する錦鯉であると認識しながら，これらを自己のものにしようと考えて捕獲した場合，窃盗罪が成立する。
イ．甲は，パチスロ機に針金を差し込んで誤作動させてメダルを窃取することを乙と共謀し，乙による窃盗の犯行を周囲から見えにくくするため，乙の隣のパチスロ機で通常の遊戯を行い，それによりメダルを取得した。この場合，甲自身が遊戯したパチスロ機で取得したメダルについても窃盗罪が成立する。
ウ．甲が，乙から封かんされた現金２０万円入りの封筒を渡されてそれを丙に届けるように依頼されたが，丙方に向かう途中で封筒内の現金が欲しくなり，封を開いて封筒に入っていた現金のうち５万円を取り出してこれを自己のものとし，残りの現金が入った封筒を丙に交付した場合，取り出した５万円について窃盗罪が成立する。
エ．甲は，乙から，乙が海中に落とした腕時計の引き揚げを依頼され，その腕時計が落ちた場所の大体の位置を指示された。甲が，乙から指示された海中付近を探索した結果，同腕時計を発見したが，それを乙に知らせることなく，同腕時計を引き揚げて自己のものとした場合，窃盗罪が成立する。
オ．甲が，満員電車に乗っていた際，隣の席に座っていた見ず知らずの乙が財布を座席に置き忘れたままＸ駅で下車したのを目撃し，乙の財布とその中身を自己のものにしようと考え，次のＹ駅に到着した時点で乙の財布を取得した上，同駅で下車し自宅に持ち帰った場合，窃盗罪が成立する。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2018",num:"9",subject:"kei",q:"次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．刑の全部の執行猶予の言渡しを受けた者が，猶予の期間内に更に罪を犯しても，罰金に処せられたときには，刑の全部の執行猶予の言渡しを取り消さなくてもよい。",c2:"２．懲役に処せられた者がその執行を終わった日から５年以内に更に罪を犯し，その者を有期懲役に処するとき，その刑は，その罪について定めた懲役の長期の２倍以下とするが，その場合でも懲役２０年までしか上げることができない。",c3:"３．懲役又は禁錮に処せられた者に改悛の状があるときは，無期刑については１０年を経過した後，行政官庁の処分によって仮に釈放することができる。",c4:"４．１個の行為が２個以上の罪名に触れる場合，それらの罪についていずれも有期懲役に処するとき，その刑は，その最も重い罪について定めた刑の長期にその２分の１を加えたものを長期とする。",c5:"５．親告罪に当たる罪を犯した者が，捜査機関及び告訴権者に発覚する前に，告訴権者に対して自己の犯罪事実を自発的に告げ，告訴するかどうかについて告訴権者の措置に委ねた場合，その刑を減軽することができる。",c6:"",c7:"",c8:"",a:"24"},{year:"2018",num:"10",subject:"kei",q:`強盗致傷罪に関する次の各【見解】ＡないしＤに従って後記各【事例】ⅠないしⅢにおける甲の罪責を検討し，後記１から５までの各【記述】のうち，正しいものを２個選びなさい。
【見 解】
Ａ．致傷結果は，強盗の機会に行われた行為から発生すれば足りる。
Ｂ．致傷結果は，強盗の手段である暴行から発生する必要がある。
Ｃ．致傷結果は，強盗の手段である暴行のほか，強盗の機会に行われた行為のうち，強盗行為とその性質上密接な関連性を有する行為から発生する必要がある。
Ｄ．致傷結果は，強盗の手段である暴行のほか，強盗の機会に刑法第２３８条所定の目的で行う暴行から発生する必要がある。
【事 例】
Ⅰ．甲は，自らの強盗の犯行を乙に目撃されたところ，犯行の翌日，犯行現場から約１０キロメートル離れた路上において，たまたま乙に発見され，乙に捕まらないようにするため，乙の顔面を拳骨で多数回殴打し，乙に傷害を負わせた。
Ⅱ．甲は，乙から金品を強取することを丙と計画し，丙と共に乙方に侵入して乙から金品を強取したが，その直後，乙方において，丙に対する日頃の不満を解消するためだけに，丙の顔面を拳骨で多数回殴打し，丙に傷害を負わせた。
Ⅲ．甲は，乙から金品を強取することを計画し，乙方に侵入して乙に包丁を突き付けて金品を要求したが，これに乙が応じなかったため，金品強取を諦めて逃走しようとしたところ，乙から金品を強取できなかった腹いせに，乙とは別の部屋で寝ていた１歳の丙の腹部を多数回蹴り付け，丙に傷害を負わせた。
【記 述】`,c1:"１．Ａの見解によれば，事例ⅠからⅢのいずれでも強盗致傷罪が成立する。",c2:"２．Ｂの見解によれば，事例ⅠからⅢのいずれでも強盗致傷罪が成立しない。",c3:"３．Ｃの見解によれば，事例Ⅱでは強盗致傷罪が成立しない。",c4:"４．Ｄの見解によれば，事例Ⅰでは強盗致傷罪が成立する。",c5:"５．Ｄの見解によれば，事例Ⅲでは強盗致傷罪が成立する。",c6:"",c7:"",c8:"",a:"23"},{year:"2018",num:"11",subject:"kei",q:"責任能力に関する次の１から５までの各記述のうち，判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．裁判所は，責任能力の有無・程度について，専門家たる精神医学者の意見を十分に尊重して判定すべきであるから，精神鑑定の意見の一部だけを採用することは許されない。",c2:"２．行為者が犯行時に心神耗弱状態にあった場合でも，その刑を減軽しないことができる。",c3:"３．犯行時に事物の是非善悪を弁識する能力が著しく減退していても，行動を制御する能力が十分に保たれていれば，完全責任能力が認められることがある。",c4:"４．精神の障害がなければ，心神喪失又は心神耗弱と認められる余地はない。",c5:"５．１４歳の者は，事物の是非善悪を弁識し，その弁識に従って行動する能力が十分に認められる場合であっても，処罰されない。",c6:"",c7:"",c8:"",a:"4"},{year:"2018",num:"12",subject:"kei",q:"詐欺罪に関する次の１から５までの各記述のうち，判例の立場に従って検討した場合，誤っているものはどれか。",c1:"１．航空会社の空港係員に対し，内心では，外国への不法入国を企てている知人を搭乗させるつもりであるのに，自らが搭乗するとうそを言って，あらかじめ航空券を購入していた航空便について搭乗券の交付を求め，同係員から搭乗券の交付を受けた場合，当該搭乗券についての詐欺罪が成立する。",c2:"２．自動車販売会社の販売員に対し，その代金を支払う意思も能力もないのに，これらがあるように装って自動車の購入を申し込み，分割払いの約定で同販売員から自動車の引渡しを受けた場合，代金完済まで同自動車の所有権が同会社に留保されていても，詐欺罪が成立する。",c3:"３．他人名義の国民健康保険被保険者証を利用して消費者金融から借入れをしようと考え，その他人に成り済まして，市役所職員を欺いて国民健康保険被保険者証の交付を受けた場合，詐欺罪が成立する。",c4:"４．自己名義の銀行預金口座に多額の誤った振込みがなされていることを知った上で，同銀行の窓口係員に対し，誤った振込みがあった旨を告知することなく同口座の残金全額の払戻しを請求し，同係員から即時にその払戻しを受けた場合，詐欺罪が成立する。",c5:"５．他人所有の土地を当該他人から買い受けた事実がないのに，当該他人から盗んだ印鑑を押して登記申請に必要な書類を偽造した上，これを登記官に提出し，当該他人に無断で，自己への所有権移転登記を完了させた場合，当該土地についての詐欺罪が成立する。",c6:"",c7:"",c8:"",a:"5"},{year:"2018",num:"13",subject:"kei",q:`共犯の従属性に関する次の【見解】に従って後記１から５までの各【記述】を検討した場合，正しいものを２個選びなさい。
【見 解】
共犯が成立するためには，正犯の行為が構成要件に該当し，違法性を具備することを要する。
【記 述】`,c1:"１．甲が強盗犯人Ａの妻乙を唆してＡを蔵匿させた場合，甲には犯人蔵匿罪の教唆犯は成立し得ない。",c2:"２．甲が刑法第４１条の刑事未成年者に当たる乙を唆して窃盗を行わせた場合，甲には窃盗罪の教唆犯は成立し得ない。",c3:"３．甲が乙にＡが一人で居住する家屋に侵入するよう唆したところ，乙がＡの承諾を得て平穏にその家屋に立ち入った場合，甲には住居侵入罪の教唆犯は成立し得ない。",c4:"４．甲が乙を唆して私文書を偽造させたが，乙に行使の目的がなかった場合，甲には私文書偽造罪の教唆犯は成立し得ない。",c5:"５．甲が乙に偽証するよう唆したところ，乙が証人として法律により宣誓した上，虚偽の陳述をしたが，証人尋問手続が終了した後，判決言渡し前に自白した場合，甲には偽証罪の教唆犯は成立し得ない。",c6:"",c7:"",c8:"",a:"34"},{year:"2018",num:"14",subject:"kei",q:"逃走の罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．拘置所に未決勾留中の甲は，逃走しようと考え，房内の換気孔周辺の壁を削って損壊したものの，脱出可能な穴を開けられなかった。甲に加重逃走罪の未遂罪が成立する余地はない。",c2:"２．確定判決によってＡ刑務所に収容されていた甲は，Ｂ刑務所への護送中，刑務官の隙を見て護送車から脱出し，刑務官の追跡を完全に振り切って民家の庭に隠れたが，しばらくして，付近の捜索を継続していた刑務官に発見されて護送車に連れ戻された。甲に逃走罪の既遂罪が成立する余地はない。",c3:"３．刑務官である甲は，勤務先の拘置所に未決勾留中で，自らが看守していた被告人乙を逃走させようと考え，乙の房の扉を解錠し，乙を同拘置所から逃走させた。甲に看守者逃走援助罪が成立する余地はない。",c4:"４．確定判決によって刑務所に収容されていた甲は，その看守に当たっていた刑務官に対する単なる反抗として同刑務官を押し倒したところ，同刑務官が気絶したため，その隙に逃走しようと思い立ち，同刑務所から逃走した。甲に加重逃走罪が成立する余地はない。",c5:"５．甲は，逮捕状により警察官に逮捕された乙の身柄を奪い返そうと考え，路上において，乙を連行中の同警察官に対し，体当たりをする暴行を加え，同警察官がひるんだ隙に，同所から乙を連れ去った。甲に被拘禁者奪取罪が成立する余地はない。",c6:"",c7:"",c8:"",a:"4"},{year:"2018",num:"15",subject:"kei",q:`学生Ａ，Ｂ及びＣは，身分犯の共犯に関して，次の【会話】のとおり検討している。【会話】中の①から③までの（ ）内から適切なものを選んだ場合，正しいものの組合せは，後記１から５までのうちどれか。
【会 話】
学生Ａ．私は，刑法第６５条第１項は構成的身分の連帯作用を，同条第２項は加減的身分の個別作用を定めたものであると考えます。そして，財物を占有していない甲が，その財物を業務上占有する乙を教唆して，その財物を横領させた事案では，甲には，業務上横領罪の教唆犯が成立すると考えます。
学生Ｂ．Ａ君は，業務上横領罪における「業務」や「占有」という点について，①（ａ．「業務上占有」していることが，非占有者との関係で構成的身分・ｂ．「占有」は構成的身分であり，「業務」は加減的身分）と考えているのですね。私は，刑法第６５条第１項は「共犯とする」と規定し，身分犯における共犯の成立について定めたもの，同条第２項は「通常の刑を科する」と規定し，非身分者について刑の個別作用を定めたものであると考えています。同じ事案につき，私の立場からすると，甲には，②（ｃ．単純横領罪の教唆犯が成立し，同罪の刑が科せられる・ｄ．業務上横領罪の教唆犯が成立し，同罪の刑が科せられる・ｅ．業務上横領罪の教唆犯が成立し，単純横領罪の刑が科せられる）ことになります。
学生Ｃ．Ｂ君は，遺失物等横領罪の刑は「通常の刑」ではないと考えているのですね。私は，刑法第６５条第１項は行為の違法性に関係する身分，すなわち違法身分の連帯作用を，同条第２項は行為者の責任に関係する身分，すなわち責任身分の個別作用を規定したものであると考えます。私の見解に立ち，占有者という身分を違法身分，業務者という身分を責任身分と考えた場合，甲には，③（ｆ．単純横領罪の教唆犯が成立する・ｇ．業務上横領罪の教唆犯が成立する・ｈ．業務上横領罪の教唆犯が成立し，単純横領罪の刑が科せられる）ことになります。`,c1:"１．①ａ ②ｄ ③ｈ",c2:"２．①ａ ②ｅ ③ｆ",c3:"３．①ａ ②ｅ ③ｈ",c4:"４．①ｂ ②ｃ ③ｆ",c5:"５．①ｂ ②ｅ ③ｇ",c6:"",c7:"",c8:"",a:"2"},{year:"2018",num:"16",subject:"kei",q:`放火の罪に関する次のアからオまでの各記述を判例の立場に従って検討し，正しい場合には１を，誤っている場合には２を選びなさい。
ア．甲は，自己が所有する家屋に一人で居住していたが，同家屋に掛けられた火災保険の保険金を詐取しようと考え，同家屋に放火して全焼させ，公共の危険を生じさせた。甲には自己所有非現住建造物等放火罪（刑法第１０９条第２項）が成立する。
イ．甲は，競売手続を妨害する目的で，人が住んでいるように見せ掛けるため，空き屋であった家屋に家財道具を持ち込むなどして住居として使用可能な状態にした上，自己が経営する会社の従業員５名を約１か月半前から１０数回にわたり交替で泊まり込ませていたところ，同従業員らが不在にしている隙に，同家屋に放火して全焼させた。甲には現住建造物等放火罪（刑法第１０８条）が成立する。
ウ．甲は，乙が住居に使用する家屋及びこれに隣接する丙が住居に使用する家屋を燃やそうと考え，乙の家屋に放火してその火を丙の家屋に燃え移らせ，乙及び丙の各家屋を共に全焼させた。甲には１個の現住建造物等放火罪（刑法第１０８条）が成立する。
エ．甲は，住宅街の中にある駐車場内に駐車されていた乙所有の自動車にガソリンをまいて放火したところ，同自動車が勢いよく炎上し，その付近に駐車されていた所有者の異なる自動車３台に火が燃え移りかねない状態になったが，付近の建造物に燃え移る危険は生じなかった。甲には他人所有建造物等以外放火罪（刑法第１１０条第１項）は成立しない。
オ．甲は，乙が住居に使用する家屋を燃やそうと考え，同家屋の６畳和室に敷かれた布団に灯油をまいて放火し，火は布団からその下に敷かれた畳に燃え移って炎上したが，他に燃え移る前に乙によって消し止められた。甲には現住建造物等放火罪（刑法第１０８条）の既遂罪が成立する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"21122"},{year:"2018",num:"17",subject:"kei",q:`次の【事例】における甲の罪責について，判例の立場に従って検討した場合，正しいものは，後記１から５までのうちどれか。
【事 例】
　甲は，バーの経営者Ａから現金を強取しようと考え，１２歳の長男乙に，「Ａのバーに行ってお金をとってきて。覆面を付けて，『金だ。』とか言ってモデルガンを見せなさい。」と言い聞かせた。乙は，当初警察に捕まることを恐れて嫌がっていたが，結局小遣い欲しさから承諾し，甲から覆面とモデルガンを受け取った。
　乙は，Ａのバーまで行き，甲から指示された方法に従って，覆面を付けモデルガンを拳銃のように見せ掛け，Ａを脅迫してその反抗を抑圧した。さらに，乙は，自己の判断により，外から人が来ないようにするためバーの出入口ドアの鍵を掛け，Ａを店内のトイレに閉じ込めた。その後，乙は，レジ内の現金を強取し，外に出ようとしたところ，トイレから脱出して乙に向かってきたＡから腕をつかまれたため，これを激しく振り払った。その結果，Ａは転倒して負傷した。
　乙は，逃走して自宅に戻り，強取した現金を全て甲に渡した。甲はその現金の中から乙に小遣いを与え，その余を生活費等に費消した。`,c1:"１．強盗致傷罪の教唆犯が成立する。",c2:"２．強盗罪の間接正犯が成立する。",c3:"３．強盗致傷罪の間接正犯が成立する。",c4:"４．強盗罪の共同正犯が成立する。",c5:"５．強盗致傷罪の共同正犯が成立する。",c6:"",c7:"",c8:"",a:"5"},{year:"2018",num:"18",subject:"kei",q:"信用及び業務に対する罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．信用毀損罪における「流布」とは，虚偽の風説を不特定又は多数の人が認識可能な状態に置くことをいい，行為者自らが直接に不特定又は多数の人に告知する場合のみならず，特定かつ少数の者を通じて順次不特定又は多数の人に伝播させる場合も含まれる。",c2:"２．電子計算機損壊等業務妨害罪は，電子計算機に向けられた加害行為を手段とする業務妨害行為を処罰対象とするものであるところ，同罪の加害行為は，「人の業務に使用する電子計算機若しくはその用に供する電磁的記録を損壊」することと「人の業務に使用する電子計算機に虚偽の情報若しくは不正な指令を与え」ることに限られる。",c3:"３．威力業務妨害罪における「威力を用いて」とは，人の意思を制圧するような勢力を行使することをいい，このような勢力が業務に従事している人に対して直接行使されることを要する。",c4:"４．信用毀損罪は，公訴が提起されることにより公判において事件の内容が明らかになり，かえって被害者の信用が損なわれる事態を招くおそれがあるため，被害者による告訴がなければ公訴を提起することができない。",c5:"５．強制力を行使しない公務は，業務妨害罪における「業務」には該当するが，公務執行妨害罪における「職務」には該当しない。",c6:"",c7:"",c8:"",a:"1"},{year:"2018",num:"19",subject:"kei",q:`次の【見解】に従って後記の【事例】及び各【記述】を検討した場合，【事例】よりも逮捕監禁行為と死亡との間の因果関係を肯定する判断に結び付きやすいものは，後記１から５までの各【記述】のうちどれか。
【見 解】
因果関係の存否は，行為の危険性が結果に現実化したものと評価できるかどうかで判断すべきであり，その評価に当たっては，介在事情の異常性と結果への寄与度を考慮すべきである。
【事 例】
Ａは，普通乗用自動車（以下「Ａ車」という。）後部のトランク内にＶを押し込み，トランクカバーを閉めて脱出不能にしＡ車を発進走行させた後，市街地の路上で停車させた。Ａ車の停車場所は，片側１車線のほぼ直線の道路上であった。Ａ車が停車して数分後，後方からＸが運転する普通乗用自動車（以下「Ｘ車」という。）が走行してきたが，Ｘは前方不注視（脇見運転）のため，Ａ車の後部に真後ろからＸ車を追突させた。これによって同トランク内に閉じ込められていたＶは傷害を負い，救助が得られないまま同傷害により死亡した。
【記 述】`,c1:"１．上記【事例】において，仮に，Ａ車の停車場所が片側３車線道路の道路端に設けられた路上駐車場であった場合",c2:"２．上記【事例】において，仮に，Ａが，Ａ車後部のトランク内にＶを押し込み，トランクカバーを閉める際に同カバーをＶに強く打ち付ける暴行を加えてＶに重度の傷害を負わせ，その結果，Ｘ車の追突時にはＶが既に瀕死状態に陥っており，Ｘ車の追突により同傷害が悪化してＶの死期が幾分早まった場合",c3:"３．上記【事例】において，仮に，Ｖが，Ｘ車の追突直後，通行人の通報により臨場した救急車で病院へ搬送されたが，同病院の医師の重大な医療過誤により死亡した場合",c4:"４．上記【事例】において，仮に，Ｘが，Ａ車後部のトランク内にＶが閉じ込められていることを知っており，Ｖを殺害する目的で，あえてＸ車をＡ車に追突させた場合",c5:"５．上記【事例】において，仮に，駐車中のＡ車にＸ車が追突せず，飛行中のヘリコプターが墜落してＡ車に衝突し，これによってＶが傷害を負って死亡した場合",c6:"",c7:"",c8:"",a:"2"},{year:"2018",num:"20",subject:"kei",q:`次の【事例】に関する後記アからオまでの各【記述】を判例の立場に従って検討し，正しい場合には１を，誤っている場合には２を選びなさい。
【事 例】
　甲は，別居している実弟Ａとの間で，自己が所有するＸ市内の土地（以下「本件土地」という。）を代金３０００万円で売却する売買契約を締結し，Ａから代金全額の支払を受けたものの，本件土地の所有権移転登記は未了のままであった。
　そこで，甲は，自己が経営する会社の資金繰りのため，自らが保管していた本件土地の登記済証を利用し，事情を知らないＢに対して，本件土地に抵当権を設定するので，それを担保に１０００万円を融資してほしい旨申し入れたところ，Ｂは，これを了承した。数日後，甲は，Ｂから１０００万円の融資を受けた上，Ａに無断で本件土地の抵当権設定登記を完了した。
　Ｘ市の土木部長である乙は，本件土地を乙個人として購入したいと考え，甲に対して，その旨を申し入れた。甲は，乙に対して，本件土地は既にＡに売却済みであるが，登記名義は自分に残っているので，代金２０００万円で売却してもよい旨を伝えたところ，乙は，これを了承した。そして，乙は，Ｙ市内に時価７００万円の農地（以下「本件農地」という。）を所有していたことから，本件土地の購入資金を調達するため，それまでにＸ市発注の公共工事の受注に際して，土木部長として便宜を図ってきた建築業を営むＣに対して，本件農地を時価で買い取ってほしい旨を依頼した。Ｃは，本件農地にはそれまで買手が全く見付からず，乙が苦労していることを知りながら，かねてＸ市発注の公共工事の受注に際して乙が有利な取り計らいをしてくれたことに対する謝礼の趣旨に加え，時価であれば損をすることもないと考えて，乙の依頼を了承した。そして，Ｃは，乙と本件農地の売買契約を締結した上で，乙に現金７００万円を手渡した。
　その後，甲は，Ａに無断で乙と本件土地の売買契約を締結し，乙から代金全額の支払を受けた上，本件土地の所有権が売買により乙に移転した旨の登記を完了した。
【記 述】
ア．甲がＡに無断で本件土地に抵当権を設定し，その旨の登記を完了したことについては，甲に横領罪が成立するが，Ａは甲の実弟であるので，告訴がなければ公訴を提起することができない。
イ．甲が本件土地をＡに無断で乙に売却し，所有権移転登記を完了したことについては，それ以前に甲がＡに無断で本件土地に抵当権を設定し，その旨の登記を完了したことによって，犯罪の成立は妨げられないので，甲に横領罪が成立する。
ウ．乙は，本件農地を時価でＣに売却したのであるから，乙がＣから交付を受けた現金７００万円は通常の経済取引に基づく不動産の購入代金であり，不正な利益としての賄賂には当たらないので，乙に収賄罪（収受）は成立しない。
エ．仮に，乙が，Ｃに対して，時価を超える１０００万円で本件農地を購入するよう依頼したが，Ｃはこの依頼を拒否した場合，収賄罪と贈賄罪は対向犯として必要的共犯の関係にあるので，乙に収賄罪（要求）は成立しない。
オ．乙は，甲から本件土地が既にＡに売却済みであることを知らされながら，Ａに無断で本件土地を購入し，所有権移転登記を完了したのであるから，乙に横領罪の共同正犯が成立する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"11222"},{year:"2017",num:"1",subject:"ken",q:`公権力との間で特別な法律関係にある個人に対する人権の制約に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．公務員の労働基本権の制限に関し，全農林警職法事件判決（最高裁判所昭和４８年４月２５日大法廷判決，刑集２７巻４号５４７頁）以降の最高裁判所の判例は，職務の内容にかかわらず公務員の争議行為を一律に禁止することについて，合憲とする判断を維持している。
イ．公権力が特別権力関係に属する個人に対して包括的な支配権を有し，その個人の人権を法律の根拠なくして制限することができるほか，特別権力関係内部における公権力の行為は司法審査に服さないとする特別権力関係論は，日本国憲法の下では妥当し難い。
ウ．かつて特別権力関係とされた在監関係につき，現在では，刑事収容施設及び被収容者等の処遇に関する法律において刑事施設被収容者の権利義務が明確化され，書籍等の閲覧，外部の者との面会及び信書の発受の各制限についてその要件が法定されたことにより，刑事施設の長らはそれらの制限の可否について裁量を失った。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"2"},{year:"2017",num:"2",subject:"ken",q:`夫婦が婚姻の際に定めるところに従い夫又は妻の氏を称すると定める民法第７５０条の規定が，憲法第１３条の規定に違反するか否かについて判示した最高裁判所の判決（最高裁判所平成２７年１２月１６日大法廷判決，民集６９巻８号２５８６頁）に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．前記判決は，氏名について，その個人からみれば，人が個人として尊重される基礎であり，その個人の人格の象徴であって，人格権の一内容を構成するが，具体的な法制度を離れて，氏が変更されること自体を捉えて直ちに人格権を侵害し，違憲であるか否かを論ずるのは相当ではないとした。
イ．前記判決は，氏には，名とは切り離された存在として社会の構成要素である家族の呼称としての意義があるとの点を強調して，婚姻を含めた身分関係の変動に伴って自らの意思に関わりなく氏が改められるとしてもやむを得ないという結論を導いている。
ウ．前記判決は，現行の法制度の下における氏の性質等に鑑み，婚姻の際に「氏の変更を強制されない自由」が憲法上の権利として保障される人格権の一内容であるといえるとしつつも，結論として，民法第７５０条の規定が憲法第１３条に違反するとまではいえないとした。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"122"},{year:"2017",num:"3",subject:"ken",q:`日本国民である父親から出生後に認知された子の日本国籍の取得をめぐる国籍法違憲判決（最高裁判所平成２０年６月４日大法廷判決，民集６２巻６号１３６７頁）に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．前記判決は，日本国民を血統上の親として出生しながら，日本国籍を生来的に取得できなかった子について，日本国籍を生来的に取得した子よりも日本国籍の取得の要件を加重すべきであるとする立法目的には，法律婚を尊重する観点から合理的な根拠があるとした。
イ．前記判決は，日本国民である父親から出生後に認知された子について，父母の婚姻が日本国籍の取得の要件とされている点をして，立法目的との合理的関連性の認められる範囲を著しく超える手段を採用したものであるとした。
ウ．前記判決は，婚姻関係にない父母から出生した子について将来にわたって不合理な偏見を生じさせるおそれがあることなどを指摘し，父母の婚姻という事柄をもって日本国籍の取得の要件に区別を生じさせることに合理的な理由があるか否かについては慎重に検討することが必要であるとした。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"212"},{year:"2017",num:"4",subject:"ken",q:`思想・良心の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．企業が従業員を採用するに際して，その者の在学中における団体加入や学生運動参加の事実の有無について申告を求めることは，その事実がその者の思想・良心と全く関係ないものではないから，違法である。
イ．市立小学校の入学式における国歌斉唱の際に「君が代」のピアノ伴奏をする行為は，音楽専科の教諭にとって通常想定され期待されるものであり，当該教諭が特定の思想を有するということを外部に表明する行為であると評価することは困難なものである。
ウ．公立高等学校の卒業式における国歌斉唱の際に起立斉唱する行為は，学校の儀礼的行事における慣例上の儀礼的な所作としての性質を有するものであり，同校の校長が教諭に当該行為を命じても，当該教諭の思想・良心の自由を何ら制約するものではない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"212"},{year:"2017",num:"5",subject:"ken",q:`いわゆる政教分離に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．国公有地が特定の宗教的施設の敷地として無償提供された場合に政教分離原則に違反するか否かを判断するに当たり，当該宗教的施設の性格，当該無償提供に至る経緯及びその提供の態様については考慮に入れるべきであるが，これらに対する一般人の評価についてまで考慮に入れることは，多数者による少数者の宗教的抑圧につながるおそれがあるので相当ではない。
イ．宗教上の祝典，儀式，行事については，その目的が宗教的意義を持ち，その効果が宗教に対する援助，助長，促進又は圧迫，干渉等になるような行為であれば，憲法第２０条第３項により禁止される「宗教的活動」に含まれるが，その判断に当たっては，社会通念に従って客観的になされなければならないから，行為者がどのような宗教的意識を有していたかについてまで考慮に入れるべきではない。
ウ．地方公共団体が町内会に対し特定の宗教的施設の敷地として公有地を無償で利用に供してきたところ，当該行為が政教分離原則に違反するおそれがあるためにこれを是正解消する必要がある一方で，当該宗教的施設を撤去させることを図るとすると，信教の自由に重大な不利益を及ぼしかねないことなどの事情がある場合には，当該町内会に当該公有地を譲与したとしても直ちに政教分離原則に違反するとはいえない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"221"},{year:"2017",num:"6",subject:"ken",q:`公務員宿舎である集合住宅の各室玄関ドアの新聞受けに，政治的意見を記載したビラを投かんする目的で同集合住宅の敷地等に立ち入った事案について判示した最高裁判所の判決（平成２０年４月１１日第二小法廷判決，刑集６２巻５号１２１７頁）に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．前記判決は，被告人らによる政治的意見を記載したビラの配布は，表現の自由の行使ということができ，その行為を刑法第１３０条前段の罪により処罰することは，表現そのものを処罰することの憲法適合性が問題となるとした。
イ．前記判決は，表現の自由は，送り手の情報が妨げられることなく受け手に受領されることを当然に内包しており，本件で被告人らの行為に刑事罰を科すことは，本件公務員宿舎の居住者が情報に接する機会を奪い，その受領権を侵害することになるとした。
ウ．前記判決は，本件立入りの場所が自衛隊・防衛庁当局が管理するものであることから，いわゆるパブリック・フォーラムたる性質を持つものであることを前提としつつ，判示したものである。
エ．前記判決の後の判決（最高裁判所平成２１年１１月３０日第二小法廷判決，刑集６３巻９号１７６５頁）では，政党のビラを配布するために民間の分譲マンションの各住戸の廊下等共用部分に立ち入った行為につき，表現の自由の重要性に鑑み，当該マンションの管理者が商業的な宣伝・広告のビラのみならず政党のビラを配布することまで禁止するのは合理性を欠くとして，かかる行為を刑法第１３０条の罪に問うことは憲法第２１条第１項に反する旨判示された。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"2222"},{year:"2017",num:"7",subject:"ken",q:`取材の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．報道機関の取材結果に対する裁判所による提出命令の可否の判断に当たっては，個別事情を考慮することなく，公正な刑事裁判の一般的価値とこれと対立する取材の自由・報道の自由の一般的価値とを比較衡量して判断するという手法によるのが相当である。
イ．適正迅速な捜査は公正な刑事裁判の不可欠の前提であることから，取材の自由に対する制約の許否に関しては捜査と公判とで本質的な差異はなく，したがって，差押えの主体にかかわらず，報道機関の取材結果に対する差押えの可否を判断する際の基本的な考え方は変わらない。
ウ．民事訴訟における，報道関係者による取材源に係る証言拒絶は，当該報道が公共の利益に関わり，取材方法が適切であり，取材源が秘密の開示を承諾していない場合には，当該民事事件が社会的意義や影響のある重大な民事事件であっても，原則として許容される。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"6"},{year:"2017",num:"8",subject:"ken",q:`憲法第２２条第１項の解釈に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．農業災害補償法が一定の稲作農業者を農業共済組合に当然に加入させる仕組みを採用したことの合憲性は，当該仕組みが国民の主食である米の生産の確保と稲作を行う自作農の経営の保護を目的とすることから，必要最小限度の規制であるか否かによって判断される。
イ．憲法第２２条第１項は職業選択の自由を保障しているが，いわゆる営業の自由は，財産権の行使という側面を併せ有することから，同項及び第２９条第１項の規定によって根拠付けられる。
ウ．職業の許可制は，狭義の職業の選択の自由そのものに制約を課す強力な制限であるため，社会政策ないしは経済政策上の積極的な目的のための措置であっても，より緩やかな規制によってはその目的を十分に達することができない場合でなければ，合憲性を肯定し得ない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"8"},{year:"2017",num:"9",subject:"ken",q:`第三者所有物没収事件判決（最高裁判所昭和３７年１１月２８日大法廷判決，刑集１６巻１１号１５９３頁）に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．前記判決は，被告人以外の第三者の所有物（以下「第三者所有物」という。）を没収する場合において，当該第三者に対し告知，弁解，防御の機会を与えることなくその所有物を没収することは，適正な法律手続によらないで財産権を侵害する制裁を科するに外ならない旨判示した。
イ．前記判決は，被告人に対する附加刑として科される第三者所有物に対する没収の言渡により，当該第三者の占有権が剥奪されるにとどまり，所有権剥奪の効果は生じないことを，その判断の前提としている。
ウ．前記判決では，第三者所有物について没収の言渡を受けた被告人は，その没収の裁判の違憲を理由として上告することができるとされた。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"3"},{year:"2017",num:"10",subject:"ken",q:`生存権とこれを具体化した法制度に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．国民年金制度は，憲法第２５条の趣旨を実現するために設けられた社会保障上の制度であるから，同条の趣旨にこたえて具体的にどのような立法措置を講ずるかの選択決定は，立法府の広い裁量にゆだねられており，著しく合理性を欠き明らかに裁量の逸脱，濫用とみざるを得ないような場合を除いて，裁判所が審査判断するに適しない事柄であり，何ら合理的理由のない不当な差別的取扱いがあっても，憲法第１４条違反の問題は生じ得ない。
イ．憲法第２５条にいう「健康で文化的な最低限度の生活」は，きわめて抽象的・相対的な概念であって，その具体的内容は，その時々における文化の発達の程度，経済的・社会的条件，一般的な国民生活の状況等との相関関係において判断決定されるべきものであるから，国の立法として具体化される場合にも，国の財政事情は考慮されるべきではない。
ウ．国は，難民条約の批准及びこれに伴う国会審議等を契機に，外国人に対する生活保護について一定の範囲で国際法及び国内公法上の義務を負うことを認めるに至ったものであり，少なくとも永住外国人にも憲法第２５条第１項の保障が及ぶものとなったと解すべきであるから，生活保護法の適用対象となる「国民」には永住外国人も含まれる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"8"},{year:"2017",num:"11",subject:"ken",q:`刑事補償請求権に関する次の学生アからエまでの各発言について，正しいものの組合せを，後記１から６までの中から選びなさい。
ア．「抑留又は拘禁という人権制限措置を受けたけれども結果として無罪とされた者に，相応の補償をすることによって，公平の要請を満たそうとするのが憲法第４０条なんだね。」
イ．「無罪判決を受けた刑事被告人が，抑留又は拘禁されたことを理由に，憲法第１７条に定める国家賠償を求め得るケースはあり得ないからね。」
ウ．「憲法第４０条は『無罪の裁判を受けたとき』について定めているけど，この文言の意味について，無罪判決が確定したとき又は一旦確定していた有罪判決が再審の結果取り消されて無罪が言い渡されたときを意味すると解する説によれば，同条は免訴や公訴棄却の裁判を受けた場合についても補償することを要請していることになるよ。」
エ．「不起訴となった事実Ａに基づく抑留又は拘禁であっても，そのうちに実質上は無罪となった事実Ｂについての抑留又は拘禁であると認められるものがあるときは，その部分の抑留又は拘禁も憲法第４０条の『抑留又は拘禁』に包含されるとした最高裁判所の判例があったな。」`,c1:"１．ア イ ",c2:"２．ア ウ ",c3:"３．ア エ ",c4:"４．イ ウ ",c5:"５．イ エ ",c6:"６．ウ エ",c7:"",c8:"",a:"3"},{year:"2017",num:"12",subject:"ken",q:`天皇に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．天皇の人権には，天皇の象徴たる地位に基づく制約があり，特定の政党に加入することや国籍を離脱することは認められないが，学問の自由についてはかかる制約を受けることなく一般の国民と同等に保障されている。
イ．判例は，天皇が日本国の象徴であり日本国民統合の象徴であることに鑑み，天皇には民事裁判権が及ばないとし，摂政についても，天皇の名でその国事に関する行為を行うことから同様であるとしている。
ウ．憲法第２条は，皇位が世襲のものである旨定めているところ，その具体的な在り方を定める皇室典範において，皇位の継承において皇長子の長子より皇次子を優先させることとしても憲法に反するものではない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"221"},{year:"2017",num:"13",subject:"ken",q:`選挙権及び選挙制度に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法は，国民主権の原理に基づき，国民に対して，両議院の議員の選挙において投票をすることによって国の政治に参加することができる権利の保障は認めているが，投票をする機会の平等までは保障していない。
イ．選挙運動の一つの手段である政見放送において，政見放送の品位を損なう言動を禁止した公職選挙法第１５０条の２の規定に違反する言動がそのまま放送される利益は，法的に保護された利益とはいえず，したがって，上記言動がそのまま放送されなかったとしても，法的利益の侵害があったとはいえない。
ウ．憲法は，両議院の議員の選挙において投票をすることを，一定の年齢に達した国民の固有の権利として保障しており，自ら選挙の公正を害する行為をした者等の選挙権について一定の制限をすることは別として，選挙権又はその行使を制限するためには，そのような制限をすることがやむを得ないと認められる事由がなければならない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"211"},{year:"2017",num:"14",subject:"ken",q:`政党に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法には政党について直接規定されていないが，政党は，憲法の定める議会制民主主義を支える上で極めて重要な存在であることから，憲法は，政党の存在を当然に予定しているとするのが判例の立場である。
イ．憲法第５１条は，「両議院の議員は，議院で行つた演説，討論又は表決について，院外で責任を問はれない。」と定め，国民の代表たる国会議員の職務執行の自由を保障しているから，議院内での国会議員による発言や表決を理由にその所属政党が除名処分をすることはできない。
ウ．政党がその所属党員に対してした除名その他の処分の当否について，裁判所は，原則として適正な手続にのっとってされたか否かを審査して判断すべきであり，一般市民としての権利利益を侵害する場合に限り処分内容の当否を審査できるとするのが判例の立場である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"122"},{year:"2017",num:"15",subject:"ken",q:`国会の立法手続に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．国会の活動につき，憲法は，常会（第５２条），臨時会（第５３条），特別会（第５４条第１項）というように一定の期間を単位として行う会期制を採用し，国会法は，会期内に議決に至らなかった議案は後会に継続しないという会期不継続の原則を採用している。
イ．国会の議事手続については両議院の自主性を尊重すべきであるから，裁判所としては，法律制定の議事手続に関する事実を審理して当該法律の有効無効を判断すべきではないというのが判例の立場である。
ウ．内閣の法律案提出権が認められるのは，議院内閣制においては国会と内閣との協働が当然に要請されており，憲法第７２条の「議案」に法律案も含まれるからであるとの立場に立ったとしても，法律により内閣の法律案提出権を否定することができる。`,c1:"１．ア〇 イ〇 ウ〇",c2:"２．ア〇 イ〇 ウ×",c3:"３．ア〇 イ× ウ〇",c4:"４．ア〇 イ× ウ×",c5:"５．ア× イ〇 ウ〇",c6:"６．ア× イ〇 ウ×",c7:"７．ア× イ× ウ〇",c8:"８．ア× イ× ウ×",a:"2"},{year:"2017",num:"16",subject:"ken",q:`内閣及び内閣総理大臣に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法は閣議について規定していないが，内閣が行政権の行使について国会に対し連帯して責任を負うとする憲法第６６条第３項の趣旨により，会合しないで文書を各大臣間に持ち回って署名を得る持ち回り閣議は許されないとされている。
イ．内閣の総辞職について規定している憲法第７０条の「内閣総理大臣が欠けたとき」とは，内閣総理大臣が死亡した場合のほか，憲法第５８条第２項に基づき内閣総理大臣が除名により国会議員の地位を失った場合に限られる。
ウ．憲法第７３条第６号は，内閣の政令制定権を規定しているところ，法律を執行するための必要な細則を定める執行命令及び法律が政令に委任した事項を定める委任命令は許されるが，既存の法律に代替する内容を定める代行命令は許されない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"221"},{year:"2017",num:"17",subject:"ken",q:`最高裁判所の規則制定権に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．最高裁判所は，裁判所の内部規律に関する事項について規則を定める権限を有するが，憲法第７６条第３項は，すべて裁判官は憲法及び法律にのみ拘束されると定めているから，裁判官を対象とする事項を規則で制定することはできない。
イ．最高裁判所の制定する規則は，その対象となる事項が規則を制定した機関の内部事項に限られないという点で，議院規則と異なる性質を有する。
ウ．「この法律に定めるもののほか，非訟事件の手続に関し必要な事項は，最高裁判所規則で定める。」との非訟事件手続法第２条の規定は，憲法第７７条第１項において規則の対象とされている「訴訟に関する手続」に非訟事件の手続が含まれないとの立場を前提としている。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"6"},{year:"2017",num:"18",subject:"ken",q:`裁判所の違憲審査に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．裁判所は，処罰対象となる行為が過度に広汎であることが争われている罰則の合憲性の判断に当たり，その規制目的や当該目的達成の手段としての合理性等を審査する場合がある。
イ．合憲限定解釈は，合憲性が争われている法令について法令違憲との判決を下すことを回避する手段の一つである。
ウ．合憲的な適用であることが明らかである場合には，適用された法令に合憲的に適用できる部分と違憲的に適用される可能性のある部分とが不可分の関係で含まれていたとしても，法令違憲と判断する余地はないことになる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"2"},{year:"2017",num:"19",subject:"ken",q:`財政に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．「租税を除く外，国が国権に基いて収納する課徴金及び法律上又は事実上国の独占に属する事業における専売価格若しくは事業料金については，すべて法律又は国会の議決に基いて定めなければならない。」と規定する財政法第３条について，その根拠を憲法第８３条の財政民主主義に求める見解に対しては，財政法第３条は，具体的な金額又は金額算定基準まで法律によって定めることまで要求していないのであるから，憲法第８３条と矛盾することになるとの批判が妥当する。
イ．最高裁判所の判例によれば，個人への特別の給付に対する反対給付として当該個人に対して課する国民健康保険料のような金銭給付は憲法第８４条の「租税」には当たらないと狭く解したとしても，「租税」以外の公課の賦課要件について定めた条例が憲法第８４条の趣旨に反することはあり得る。
ウ．国費を支出するには国会の議決に基づくことを必要とするが，国費の支出に関する国会の議決は使途の確定した支出についてなされるべきものであるから，使途が未確定である予備費を設けることについては国会の議決を要しない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"212"},{year:"2017",num:"20",subject:"ken",q:`憲法改正に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法改正には，国民投票において「その過半数の賛成」を必要とするとされているが，日本国憲法の改正手続に関する法律によって，「その過半数」とは，有権者総数の過半数を意味するとされている。
イ．憲法第９６条第２項は，国民の承認を経た憲法改正について，「直ちにこれを公布する」と定めているが，ここで「直ちに」とされているのは，公布を恣意的に遅らせてはならないことを定めたものである。
ウ．憲法を始源的に創設する「憲法制定権力」と憲法によって与えられた「憲法改正権」とは同質であるとの見解は，憲法改正の限界について理論上限界はないとする立場の根拠となり得る。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"5"},{year:"2017",num:"1",subject:"min",q:`Ａが１９歳で，親権に服する男性であることを前提として，次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａがその親権者から営業を行うことを許可された後に親権者の同意を得ずに売買契約を締結した場合には，その売買契約がその営業に関しないものであっても，Ａは，その売買契約を取り消すことができない。
イ．Ａの親権者が，新聞配達のアルバイトによりＡが得る金銭の処分をＡに許していた場合において，Ａがそのアルバイトによって得た金銭で自転車を購入したときは，Ａがその売買契約を締結する際に親権者の同意を得ていないときであっても，Ａは，その売買契約を取り消すことができない。
ウ．Ａがその親権者の同意を得ずにＡＢ間に生まれた子を認知した場合であっても，Ａは，その認知を取り消すことができない。
エ．Ａが精神上の障害により事理を弁識する能力を欠く常況にある場合でも，Ａが成年に達するまでは，家庭裁判所は，Ａについて後見開始の審判をすることができない。
オ．Ａが相続によって得た財産から１００万円をＢに贈与する旨の契約を書面によらずに締結した場合において，書面によらない贈与であることを理由にＡがその贈与を撤回したときでも，Ａが贈与の撤回について親権者の同意を得ていなかったときは，Ａは，贈与の撤回を取り消すことができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2017",num:"2",subject:"min",q:`被保佐人Ａが保佐人の同意又はこれに代わる家庭裁判所の許可を得ずにＢに対してＡ所有の甲土地を売り渡したことを前提として，当該売買契約の効力に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＢがＡの保佐人に対し当該売買契約を追認するかどうか確答することを１か月の期間を定めて催告した場合において，保佐監督人があるときは，保佐人が保佐監督人の同意を得てその期間内に追認の確答を発しなければ，当該売買契約を取り消したものとみなされる。
イ．ＢがＡに対し当該売買契約について保佐人の追認を得ることを１か月の期間を定めて催告した場合において，Ａがその期間内にその追認を得た旨の通知を発しないときは，当該売買契約を取り消したものとみなされる。
ウ．Ａが行為能力者となった後に，ＢがＡに対し当該売買契約を追認するかどうか確答することを１か月の期間を定めて催告した場合において，Ａがその期間内に確答を発しないときは，当該売買契約を追認したものとみなされる。
エ．Ａが行為能力者となった後に，ＡがＢから甲土地の所有権移転登記手続の請求を受けたときは，当該売買契約を追認したものとみなされる。
オ．Ａが行為能力者となった後に，Ａが甲土地の売買代金債権を他人に譲渡したときは，当該売買契約を追認したものとみなされる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2017",num:"3",subject:"min",q:`失踪宣告に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．沈没した船舶の中に在ったＡについて失踪宣告がされた場合には，Ａはその沈没事故の後１年が経過した時に死亡したものとみなされる。
イ．Ａの生死が７年間明らかでなかったことから，Ａについて失踪宣告がされた場合には，Ａは，７年間の期間が満了した時に死亡したものとみなされる。
ウ．Ａの生死が７年間明らかでなかったことから，Ａについて失踪宣告がされ，Ａが死亡したものとみなされた後にＡの生存が判明した場合でも，失踪宣告がされた後にＡがした売買契約は，失踪宣告が取り消されなければ有効とはならない。
エ．Ａの生死が７年間明らかでなかったことから，Ａについて失踪宣告がされ，Ａが死亡したものとみなされた後に，Ａの子であるＢがＡ所有の甲土地を遺産分割により取得した。その後，Ｂは，Ｃに甲土地を売却したが，その売却後にＡの生存が判明し，Ａの失踪宣告は取り消された。その売買契約の時点で，Ａの生存についてＢが善意であっても，Ｃが悪意であるときは，Ｃは，甲土地の所有権を取得することができない。
オ．Ａの生死が７年間明らかでなかったことから，Ａについて失踪宣告がされ，Ａが死亡したものとみなされた後に，Ａの生存が判明したが，失踪宣告が取り消されずにＡが死亡した場合には，もはやその失踪宣告を取り消すことができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2017",num:"4",subject:"min",q:`虚偽表示に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．甲土地を所有するＡがＢと通謀して甲土地をＢに仮装譲渡し，ＡからＢへの所有権移転登記がされた後，Ｂの債権者Ｃが甲土地を差し押さえた場合において，その差押えの時にＣが仮装譲渡について善意であったときは，Ａは，Ｃに対し，Ｂへの譲渡が無効であることを主張することができない。
イ．甲土地を所有するＡがＢと通謀して甲土地をＢに仮装譲渡した後に，ＣがＢとの間で甲土地についてＣを予約者とする売買予約を締結した場合，仮装譲渡についてＣが予約成立の時に善意であっても，予約完結権行使の時に悪意であれば，Ｃは，Ａに対し，甲土地の所有権を主張することができない。
ウ．甲土地を所有するＡがＢと通謀して甲土地にＢのための抵当権設定を仮装した後，その抵当権設定が仮装であることについて善意のＣがＢから転抵当権の設定を受け，その旨の登記がされた場合には，Ａは，Ｃに対し，原抵当権の設定が無効であることを主張することができない。
エ．甲土地を所有するＡがＢと通謀して甲土地をＢに仮装譲渡し，ＡからＢへの所有権移転登記がされた後に，Ｂが死亡した場合において，Ｂが死亡した時にＢの相続人であるＣが仮装譲渡について善意であったときは，Ａは，Ｃに対し，甲土地の所有権を主張することができない。
オ．甲土地を所有するＡがＢと通謀して甲土地をＢに仮装譲渡し，ＡからＢへの所有権移転登記がされた後に，ＢがＣに甲土地を譲渡し，さらに，ＣがＤに甲土地を譲渡した場合において，Ｃが仮装譲渡について悪意であったときは，Ｄが仮装譲渡について善意であったとしても，Ａは，Ｄに対し，甲土地の所有権を主張することができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2017",num:"5",subject:"min",q:`代理に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．代理人が自己又は第三者の利益を図るために契約をした場合において，それが代理人の権限内の行為であるときは，本人は，代理人の意図を知らなかったことについて相手方に過失があったとしても，その行為について責任を免れることができない。
イ．第三者に対して他人に代理権を与えた旨を表示した者は，その他人に代理権が与えられていないことをその第三者が知り，又は過失によって知らなかったことを主張立証すれば，その表示された代理権の範囲内においてされた行為について責任を免れる。
ウ．権限外の行為の表見代理は，代理人として行為をした者が当該行為をするための権限を有すると相手方が信じたことにつき本人に過失がなかったときは成立しない。
エ．代理権消滅後の表見代理は，相手方が代理人として行為をした者との間でその代理権の消滅前に取引をしたことがなかったときは成立しない。
オ．相手方から履行の請求を受けた無権代理人は，表見代理が成立することを理由として無権代理人の責任を免れることはできない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2017",num:"6",subject:"min",q:`時効に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．買主の売主に対する瑕疵担保による損害賠償請求権の消滅時効は，買主が目的物の引渡しを受けた時から進行を始める。
イ．遺留分権利者が減殺請求によって取得した不動産の所有権に基づく登記請求権は，時効によって消滅することはない。
ウ．相続財産に関しては，相続財産管理人が選任された場合でも，相続人が確定するまでの間は，時効は完成しない。
エ．主たる債務者がその債務について時効の利益を放棄した場合には，その保証人に対してもその効力を生ずる。
オ．債務者が，消滅時効完成後に債権者に対して債務を分割して支払う旨の申出をした場合には，時効完成の事実を知らなかったときでも，その後その時効を援用することは許されない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2017",num:"7",subject:"min",q:`登記に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡからＢ，ＢからＣに甲土地が順次売却され，それぞれその売買代金が支払われたが，所有権の登記名義がＡのままである場合，Ｃは，Ｂに代位して，Ａに対し，ＡからＢへの所有権移転登記手続を請求することはできない。
イ．Ａ所有の甲土地及び乙土地に抵当権を有するＢは，甲土地の抵当権設定の登記の抹消をするつもりで，誤って乙土地の抵当権設定の登記の抹消を申請し，その旨の登記がされた。この場合でも，Ｂは，乙土地の抵当権設定の登記の抹消後に上記事情を知らずに乙土地に抵当権の設定を受けたＣに対し，Ｂの抵当権が優先することを主張することができる。
ウ．Ａは，Ｂから代理権を与えられていないのに，Ｂの代理人として，Ｃとの間で，Ｂ所有の甲土地にＣの債権を担保するための抵当権設定契約を締結し，その旨の登記がされた。この場合において，Ｂがその抵当権設定契約を追認したときは，Ｂは，Ｃに対し，その抵当権設定の登記の無効を主張することはできない。
エ．Ａは，Ｂ所有の土地上に権原なく建物を建築して居住しているが，Ｃと通謀してその建物についてＡからＣへの所有権移転登記をした。Ｃが実際にはその建物を所有したことがない場合でも，Ｃは，Ｂに対し，建物収去土地明渡の義務を負う。
オ．Ａは，その所有する甲建物の滅失後に新築した乙建物について，新たな保存登記をせずに甲建物の登記を流用して，Ｂとの間で，停止条件付代物弁済契約に基づく所有権移転請求権保全の仮登記をし，その後，代物弁済を原因として仮登記に基づく本登記をした。この場合，その本登記は無効である。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2017",num:"8",subject:"min",q:`物権の消滅等に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡとＢが甲土地を共有している場合において，Ａがその共有持分を放棄したときは，Ａの共有持分はＢに帰属する。
イ．Ａ所有の甲土地には，第一順位の抵当権を有しているＢと第二順位の抵当権を有しているＣがおり，他には抵当権者がいない場合，ＣがＡから甲土地を譲り受けたときでもＣの抵当権は消滅しない。
ウ．Ａ所有の甲土地についてＢが建物所有目的で地上権の設定を受けてその旨の登記がされ，甲土地上にＢが乙建物を建築して所有権保存登記がされた後に，甲土地にＣのための抵当権が設定され，その旨の登記がされた場合には，その後にＡが単独でＢを相続したときでも，その地上権は消滅しない。
エ．ＡとＢは，建物所有目的で，ＣからＣ所有の甲土地を賃借した。その後，Ｃが死亡してＡが単独で甲土地を相続した場合，Ａの賃借権は消滅しない。
オ．Ａ所有の甲土地についてＢが建物所有目的で地上権の設定を受けてその旨の登記がされ，甲土地上にＢが乙建物を建築して所有権保存登記がされた後に，乙建物にＣのための抵当権が設定され，その旨の登記がされた。その後，Ｂは，Ａに対し，その地上権を放棄する旨の意思表示をした。この抵当権が実行され，Ｄが乙建物を取得した場合，Ｄは，Ａに対し，地上権を主張することができない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2017",num:"9",subject:"min",q:`物権についての費用負担，償金等に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡとＢが共有する土地の分割によって公道に通じない甲土地と公道に通じる乙土地が生じた場合，甲土地の所有者Ａは，公道に至るため，Ｂの所有する乙土地を通行することができるが，その通行について償金を支払う必要がある。
イ．２棟の建物がその所有者を異にし，かつ，その間に空地があるときは，各所有者は，他の所有者と共同の費用で，その境界に囲障を設けることができる。
ウ．Ａ所有の主たる動産とＢ所有の従たる動産が，付合により，損傷しなければ分離することができなくなったときは，その合成物の所有権はＡに帰属するが，ＢはＡに対して償金を請求することができる。
エ．ＡとＢが建物を共有する場合において，ＡがＢの持分に応じた管理費用について立替払をし，Ｂに対して償還義務の履行の催告をしたにもかかわらず，Ｂがその義務を１年以内に履行しないときは，Ａは，相当の償金を支払ってＢの持分を取得することができる。
オ．Ａが，その所有する甲土地の排水を通過させるため，甲土地より低地である乙土地の所有者Ｂが既に設けていた排水設備を使用し始めた場合，Ａは，その利益を受ける割合に応じて，同設備の保存費用を分担する必要があるが，同設備の設置費用を分担する必要はない。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2017",num:"10",subject:"min",q:`複数の者が共同で権利を有する場合に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａ，Ｂ及びＣの３名が各３分の１の割合による持分を有する建物について，Ａが単独でその建物を占有している場合，Ｂは，Ａに対し，その建物の明渡しを請求することができる。
イ．Ａ，Ｂ及びＣの３名が各３分の１の割合による持分を有する土地につき，Ａがその所有者をＡのみとする登記をした場合，Ｂは，Ａに対し，Ａ，Ｂ及びＣの３名の持分を各３分の１とする更正登記手続を求めることができる。
ウ．Ａ，Ｂ及びＣの３名が共同相続し，その遺産分割の前に，法定相続分に応じた持分の割合により相続登記がされた土地につき，ＣからＤに不実の持分権移転登記がされた場合，Ａは，Ｄに対し，当該持分権移転登記の抹消登記手続を求めることができる。
エ．入会権は，登記がなくても第三者に対抗することができる。
オ．入会団体の構成員が採枝・採草の収益を行う権能を有する入会地がある場合において，その入会地にＡ名義の不実の地上権設定登記があるときは，その入会団体の構成員であるＢは，Ａに対し，入会地におけるＢの使用収益権に基づき，当該地上権設定登記の抹消登記手続を求めることができる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"5"},{year:"2017",num:"11",subject:"min",q:`留置権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡがＢから甲建物を賃借し，Ｂに敷金を交付していた場合において，その賃貸借契約が終了したときは，Ａは，敷金が返還されるまで甲建物を留置することができる。
イ．ＡからＢ，ＢからＣに建設機械が順次売却され，ＢがＡに対して代金を支払っていない場合に，Ｃが提起した所有権に基づく建設機械の引渡請求訴訟においてＡの留置権が認められるときは，Ｃの請求は棄却される。
ウ．ＡがＢから甲建物を賃借していたが，Ａの賃料不払によりその賃貸借契約が解除された後，明渡しの準備をしている間にＡが甲建物について有益費を支出した場合，Ａは，Ｂに対し，その費用の償還請求権を被担保債権とする留置権を行使して甲建物の明渡しを拒むことはできない。
エ．甲土地の借地権者であるＡが甲土地上にある建物について買取請求権を行使した場合，Ａは，甲土地の賃貸人であるＢに対し，その買取代金債権を被担保債権とする留置権を行使して甲土地の明渡しを拒むことはできない。
オ．甲建物の賃貸人Ａが，賃借人Ｂに対して賃貸借契約の終了に基づき甲建物の明渡しを請求したのに対し，Ｂが賃貸借の期間中に支出した有益費の償還請求権に基づいて留置権を行使し，従前と同様の態様で甲建物に居住した場合，Ｂは，Ａに対し，その居住による利得を返還する義務を負う。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2017",num:"12",subject:"min",q:`物上代位に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．抵当権者は，抵当権設定登記がされた後に物上代位の目的債権が譲渡されて第三者に対する対抗要件が備えられた場合においても，目的債権を差し押さえて物上代位権を行使することができる。
イ．動産売買の先取特権者は，物上代位の目的債権が譲渡されて第三者に対する対抗要件が備えられた後においては，目的債権を差し押さえて物上代位権を行使することはできない。
ウ．抵当権者は，抵当権設定登記がされた後に物上代位の目的債権が転付命令の確定により差押債権者に移転した場合においても，目的債権を差し押さえて物上代位権を行使することができる。
エ．抵当権者が物上代位権を行使して賃料債権の差押えをした後は，抵当不動産の賃借人は，抵当権設定登記の後に賃貸人に対して取得した債権を自働債権とし，賃料債権を受働債権とする相殺をもって抵当権者に対抗することはできない。
オ． 抵当権者が物上代位権を行使して賃料債権の差押えをした場合には，その後に賃貸借契約が終了し，抵当不動産が明け渡されたとしても，抵当不動産の賃借人は，抵当権者に対し，敷金の充当によって当該賃料債権が消滅したことを主張することはできない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2017",num:"13",subject:"min",q:`先取特権の順位に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．共益の費用の先取特権は，全ての特別の先取特権に優先する。
イ．農地の天然果実については，農業労務の先取特権が不動産賃貸の先取特権に優先する。
ウ．工事を始める前にその費用の予算額を登記した不動産工事の先取特権は，その登記に先立って設定登記がされている抵当権に優先する。
エ．同一の不動産について不動産保存の先取特権と不動産工事の先取特権が競合する場合，その優先権の順位は同一となる。
オ．同一の目的物について同一順位の先取特権者が数人あるときは，各先取特権者は，その債権額の割合に応じて弁済を受ける。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2017",num:"14",subject:"min",q:`質権又は譲渡担保権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．同一の動産について複数の質権を設定することはできないが，同一の動産について複数の譲渡担保権を設定することはできる。
イ．動産を目的とする質権は占有改定の方法によるその動産の引渡しによっては効力を生じないが，動産を目的とする譲渡担保権はその設定契約によって設定され，占有改定の方法によるその動産の引渡しがあれば，譲渡担保権者は第三者に譲渡担保権を対抗することができる。
ウ．債権質の目的である債権の弁済期が到来した場合には，被担保債権の弁済期が到来していないときであっても，質権者は，債権質の目的である債権を直接に取り立てることができる。
エ．債権であってこれを譲り渡すにはその証書を交付することを要するものを質権の目的とするときは，質権の設定は，その証書を交付することによって，その効力を生ずる。
オ．動産を目的とする譲渡担保権が設定されている場合，その設定者は，正当な権原なくその動産を占有する者に対し，その動産の返還を請求することができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2017",num:"15",subject:"min",q:`Ａ所有の甲土地には，ＢのＡに対する５００万円の債権を担保するための第一順位の抵当権，ＣのＡに対する１０００万円の債権を担保するための第二順位の抵当権及びＤのＡに対する２０００万円の債権を担保するための第三順位の抵当権がそれぞれ設定されているが，ＥのＡに対する２０００万円の債権を担保するための担保権は設定されていない。この場合において，甲土地の競売により２５００万円が配当されることになったときに関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。なお，各債権者が有する債権の利息及び損害金並びに執行費用は考慮しないものとする。
ア．競売の申立て前にＥの利益のためにＢの抵当権が譲渡されて対抗要件が備えられていたときは，Ｃに１０００万円，Ｄに１０００万円，Ｅに５００万円が配当される。
イ．競売の申立て前にＥの利益のためにＢの抵当権が放棄されて対抗要件が備えられていたときは，Ｂに１００万円，Ｃに１０００万円，Ｄに１０００万円，Ｅに４００万円が配当される。
ウ．競売の申立て前にＤの利益のためにＢの抵当権の順位が譲渡されて対抗要件が備えられていたときは，Ｃに５００万円，Ｄに２０００万円が配当される。
エ．競売の申立て前にＤの利益のためにＢの抵当権の順位が放棄されて対抗要件が備えられていたときは，Ｃに１０００万円，Ｄに１５００万円が配当される。
オ．競売の申立て前に抵当権の順位が変更されてＤの抵当権が第一順位，Ｃの抵当権が第二順位，Ｂの抵当権が第三順位となったときは，Ｃに１０００万円，Ｄに１５００万円が配当される。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2017",num:"16",subject:"min",q:`債務不履行に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．動産の売買契約が締結され，その代金の一部が支払われた後で，当該売買契約が債務不履行を理由に解除された場合，売主は，受領した売買代金の一部を返還するに当たり，その受領の時からの利息を付す必要はない。
イ．売買代金の履行遅滞に基づく損害賠償請求において，同時履行の抗弁権が存在する場合には履行遅滞に陥らないとの見解に立つ場合，損害賠償を求める原告は，請求原因事実として自己の債務の履行又は履行の提供を主張立証しなければならない。
ウ．ＡＢ間で売買契約が締結され，Ａが債務不履行に陥っている場合において，ＡがＢに対して相当の期間を定めて契約を解除するかどうかを確答すべき旨の催告をしたにもかかわらず，Ｂがその期間内に解除の通知をしないときは，Ａは，以後債務不履行責任を負わない。
エ．ＡがＢに建物を賃貸し，ＢがＡの承諾を得てＣに同建物を転貸した場合において，ＡＢ間の賃貸借契約がＢの債務不履行を理由とする解除により終了したときは，ＡがＣに建物の返還を請求しても，Ａが転貸借を承諾していた以上，ＢＣ間の転貸借契約におけるＢのＣに対する債務は履行不能とはならない。
オ．期限の定めのない金銭消費貸借契約の借主は，貸主が相当の期間を定めずに催告をしても，相当の期間を経過した時から履行遅滞の責任を負う。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2017",num:"17",subject:"min",q:`債権者代位権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．債権者は，自己の債権の履行期が到来していなくても，保存行為については，債務者に代位して債務者の権利を行使することができる。
イ．ＡとＢがＣに対していずれも１５０万円の金銭債権を有している場合において，ＣがＤに対し１００万円の金銭債権を有しているときは，Ａは，自己の債権を保全するため，５０万円の限度でＣのＤに対する債権を代位行使することができる。
ウ．金銭債権の債権者Ａが，債務者Ｂの第三債務者Ｃに対する甲動産の引渡請求権を代位行使する場合，Ａは，Ｃに対し，Ａの債権額にかかわらず，Ａに甲動産を引き渡すことを求めることができる。
エ．債権者Ａが債務者Ｂの第三債務者Ｃに対する債権を代位行使する場合において，ＣがＢに対する債権を自働債権とする相殺の抗弁を提出したときは，Ａは，ＢがＣに対して主張することができる再抗弁事由のほか，Ａの独自の事情に基づく再抗弁も提出することができる。
オ．土地の所有者Ａからその土地を賃借したＢは，その土地を不法に占有するＣがいる場合，賃借権について対抗要件を具備しているか否かにかかわらず，賃借権を保全するために，ＡのＣに対する所有権に基づく返還請求権を代位行使することができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2017",num:"18",subject:"min",q:`連帯債務に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．連帯債務者の一人について弁済期を他の連帯債務者と異にすることはできない。
イ．連帯債務者の一人と債権者との間に更改があったときは，他の連帯債務者は従来の債務を免れ，更改によって新たに発生した債務について責任を負わない。
ウ．ＡとＢがＣに対して連帯債務を負っている場合において，Ａが債務全額の弁済をしたが，Ｂに対する通知を怠ったため，Ｂは，Ａの弁済を知らなかった。この場合において，その後ＣがＢに対し債務の履行を請求し，これに応じてＢが債務全額の弁済をしたときは，ＢがＡに対して事前にＣから履行の請求を受けた旨の通知をしなかったとしても，Ｂは，Ａに対し，自己の弁済が有効である旨主張することができる。
エ．連帯債務者の一人が債務を承認したことによる時効中断の効力は，他の連帯債務者には及ばない。
オ．ＡとＢがＣに対して連帯債務を負う旨の契約をＣとの間で締結した場合において，契約締結の当時Ａが意思無能力であったときは，Ｂは，Ａの負担部分について債務を免れる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2017",num:"19",subject:"min",q:`指名債権の譲渡に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．債権譲渡禁止の特約に反して債権を譲渡した債権者は，債務者が譲渡を承諾した場合を除き，同特約の存在を理由に譲渡の無効を主張することができる。
イ．債権の譲受人は，譲渡人に代位して債務者に対して債権譲渡の通知をすることにより，その債権譲渡を債務者に対抗することはできない。
ウ．抵当不動産の第三取得者が被担保債権の弁済をしたことによって抵当権が消滅した場合，その後，被担保債権の債権者がその債権を第三者に譲渡し，債務者が異議をとどめないで債権譲渡を承諾しても，当該第三取得者に対する関係においては，抵当権の効力は復活しない。
エ．債権が二重に譲渡され，第一の債権譲渡について譲渡人が債務者に対して確定日付のある証書によらずに通知をした後に，第二の債権譲渡について譲渡人が債務者に対して確定日付のある証書による通知をした場合，第一の譲受人は債権の取得を債務者にも対抗することができない。
オ．債権が二重に譲渡され，確定日付のある証書による通知が同時に債務者に到達したときは，譲受人の一人から弁済の請求を受けた債務者は，同順位の譲受人が他に存在することを理由として弁済の責任を免れることができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2017",num:"20",subject:"min",q:`債務の引受けに関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．債権者Ａが，債務者Ｂの意思に反して，引受人Ｃとの間で併存的債務引受の契約をした場合，その効力は生じない。
イ．債権者Ａに対する債務者Ｂの債務について，Ｃを引受人とする併存的債務引受の効力が生じた場合において，Ｂの債務が時効により消滅したとしても，ＡはＣに対して債務の全額を請求することができる。
ウ．債権者Ａは，債務者Ｂの意思に反しない場合，引受人Ｃとの二者間の契約により，免責的債務引受の効力を生じさせることができる。
エ．債権者Ａに対する債務者Ｂの債務について，Ｃを引受人とする免責的債務引受の効力が生じた場合には，Ｂの債務を担保するために第三者Ｄが設定していた抵当権は，Ｃの債務を担保することについてＤの同意がない限り，消滅する。
オ．中古自動車の売買契約における売主Ａに対する買主Ｂの代金債務について，Ｃを引受人とする免責的債務引受の効力が生じた場合において，その自動車に隠れた瑕疵があり契約の目的を達成することができないときは，Ｃはその売買契約を解除することができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2017",num:"21",subject:"min",q:`弁済に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡのＢに対する債権を目的としてＡがＣのために質権を設定し，ＡがＢに対してその質権の設定を通知した後であっても，ＢがＡに弁済をした場合には，Ｂは，Ｃに対してもその弁済の効果を対抗することができる。
イ．Ａがその所有する土地をＢに賃貸し，Ｂがその土地上にあるＢ所有の建物をＣに賃貸していた場合，Ｃは，Ｂの意思に反するときでも，ＡＢ間の賃貸借契約における賃料について，Ａに弁済をすることができる。
ウ．ＡのＢに対する債権についてＣがＡの代理人であると偽って，Ｂから弁済を受けた場合には，表見代理の要件を満たさない限り，Ｂは，Ａに対し，その弁済が有効であると主張することはできない。
エ．ＡのＢに対する債権についてＢが弁済を受領する権限がないＣに対して弁済をした場合において，Ａがこれによって利益を受けたときは，Ｃに弁済を受領する権限がないことをＢが知っていたとしても，Ａが利益を受けた限度で，その弁済は効力を有する。
オ．動産の引渡債務を負うＡが，債権者Ｂに対し，他人の所有する動産を弁済として引き渡し，その動産が他人の物であることを知らずにＢがその動産を消費した場合，その弁済は有効となる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2017",num:"22",subject:"min",q:`ＡのＢに対する１０００万円の債務（以下「本件債務」という。）について，ＡＢ間でＡ所有の甲土地で代物弁済をする合意をした場合に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ｂが，甲土地の所有権を取得するには，代物弁済の合意に加えて，給付の完了として対抗要件を具備する必要がある。
イ．代物弁済の合意をしても，その所有権移転登記手続の完了前であれば，ＡはＢに１０００万円を支払って，本件債務を弁済により消滅させることができる。
ウ．ＡがＣから売買契約により甲土地の所有権を取得した後に代物弁済の合意がされ，その合意に基づいてＡからＢへの所有権移転登記がされた後，ＣがＡの強迫を理由としてその売買契約を取り消したときは，Ａは，Ｂに対し，本件債務の消滅を主張することができない。
エ．代物弁済がされて一旦甲土地の所有権がＢに移転した後，本件債務の発生原因となった契約が解除された場合でも，甲土地の所有権はＢに帰属する。
オ．甲土地の所有権移転登記手続に必要な書類をＢがＡから受領した時点で本件債務の消滅の効果が生じるという特約がある場合，ＢがＡからその書類を受領した時に，本件債務の消滅の効果が生じる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2017",num:"23",subject:"min",q:`隔地者間の契約に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．承諾者が申込みに条件を付して承諾し，その他変更を加えてこれを承諾したときは，その申込みの拒絶とともに新たな申込みをしたものとみなされる。
イ．申込者の意思表示又は取引上の慣習により承諾の通知を必要としない場合には，契約は，承諾の意思表示と認めるべき事実があった時に成立する。
ウ．承諾期間の定めのある申込みに対し，その承諾の通知がその期間内に発送された場合には，その承諾の通知が申込者に到達しなかったときであっても，契約は成立し，その効力が生ずる。
エ．申込者は，遅延した承諾を新たな申込みとみなすことができる。
オ．承諾期間の定めのない申込みに対し承諾の通知が発送された後，申込みの撤回の通知が承諾者に到達した場合において，その申込みの撤回の通知が通常の場合には承諾の通知の発送の前に到達すべき時に発送したものであることを承諾者が知ることができたときは，承諾者が申込みの撤回の通知が延着した旨の通知を申込者に対して発送したか否かにかかわらず，契約は成立しなかったものとみなされる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2017",num:"24",subject:"min",q:`売買契約の解除に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．債務不履行を理由に売買契約が解除された場合において，その債務不履行の時から１０年を経過したときは，解除による原状回復請求権の消滅時効が完成する。
イ．売主が目的物を引き渡し，買主が代金の一部を支払った場合において，債務不履行を理由に売買契約が解除されたときは，売主の目的物返還請求権と買主の代金返還請求権とは，同時履行の関係にない。
ウ．売主が目的物を引き渡したが，買主が代金を履行期の経過後も支払わない場合において，売主が買主に対して相当の期間を定めて債務の履行の催告をしたとしても，売主がその催告に際して履行がなければ解除する旨の通知をしていないときは，売主は，相当期間の経過後も当該売買契約を解除することができない。
エ．売主が目的物を引き渡したが，買主が代金を履行期の経過後も支払わない場合において，売主が買主に対して相当の期間を定めて代金の支払を催告したにもかかわらず，買主が代金の支払を拒絶する意思を明確に表示したときは，売主は，相当の期間が経過する前であっても，当該売買契約を解除することができる。
オ．買主の債務不履行を理由に売主が解除権を取得したとしても，その解除権の行使前に買主がその債務を履行したときは，売主は，その解除権を行使することができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2017",num:"25",subject:"min",q:`贈与に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．書面によらないで動産の贈与がされ，その引渡しがされた場合において，その引渡しが占有改定により行われたときは，贈与者は，贈与を撤回することができる。
イ．贈与者が他人の不動産を贈与した場合において，他人の物であることを知りながら受贈者に告げなかったときは，贈与者は，その不動産の所有権を取得して受贈者に移転する義務を負う。
ウ．定期の給付を目的とする贈与は，受贈者の死亡によって，その効力を失うが，贈与者が死亡しても，その効力は失われない。
エ．贈与については，負担付きのものであっても，双務契約に関する規定は準用されない。
オ．書面によって死因贈与がされたとしても，贈与者は，生前，いつでもその贈与を撤回することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2017",num:"26",subject:"min",q:"不動産の売買契約に基づき売主が買主に対して代金の支払を訴訟で請求する場合に関する次の１から５までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．売主は，請求原因において，売買契約締結当時，その目的物が売主の所有であったことを主張する必要がある。",c2:"２．買主が抗弁として同時履行の抗弁を主張した場合には，売主は，代金の支払を目的物の引渡し及び所有権移転登記手続よりも先に履行する旨の合意があったことを再抗弁として主張することができる。",c3:"３．売買契約の目的不動産について隠れた瑕疵があり，買主が損害賠償請求権を有する場合には，売主の代金請求権と買主の損害賠償請求権は同時履行の関係にある。",c4:"４．売主が目的物の引渡しについて履行の提供をした場合でも，その提供が継続されていないときは，買主は同時履行の抗弁権を失わない。",c5:"５．売買契約の目的不動産について抵当権の登記があるときは，買主は，抵当権消滅請求の手続が終わるまで，代金の支払を拒むことができる。",c6:"",c7:"",c8:"",a:"1"},{year:"2017",num:"27",subject:"min",q:`Ａ所有の甲土地をＢがＣに対して売り渡す旨の契約（以下「本件売買契約」という。）が締結された場合に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．本件売買契約が締結された時に，Ａが甲土地を他の者に譲渡する意思がなく，ＢがＡから甲土地の所有権を取得することができない場合であっても，本件売買契約は有効に成立する。
イ．Ｂが死亡し，ＡがＢを単独で相続したときは，Ａは，Ｃに対し，甲土地の売主としての履行を拒むことはできない。
ウ．Ｃが甲土地の引渡しをＢから受けるのと同時にＢに対して甲土地の代金を支払ったが，Ｂが甲土地の所有権を取得することができなかったことから，Ｃは，本件売買契約を解除した。その後，ＣがＡから甲土地の引渡しを請求されたときは，Ｃは，Ｂから甲土地の代金の返還を受けるまで，甲土地を留置することができる。
エ．本件売買契約が締結された時にＢが甲土地の所有権がＢに属しないことを知らず，Ｃが甲土地の所有権がＢに属しないことを知っていた場合において，Ｂが甲土地の所有権を取得してＣに移転することができないときは，Ｂは，Ｃに対し，甲土地の所有権を移転することができない旨を通知して，本件売買契約を解除することができる。
オ．Ｃが本件売買契約の締結時に甲土地の所有権がＢに属しないことを知らなかった場合において，Ｂが甲土地の所有権を取得してＣに移転することができないときは，Ｃは，甲土地の所有権がＢに属しないことを知った時から１年以内に限り，本件売買契約を解除することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2017",num:"28",subject:"min",q:`請負に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．請負人は，仕事の目的物の引渡しを要する場合には，これを引き渡した後でなければ，報酬を請求することができない。
イ．請負人が仕事の目的物を引き渡した場合において，その目的物に瑕疵があり，注文者が瑕疵の修補に代わる損害賠償を請求したときは，注文者は，その賠償を受けるまでは報酬全額の支払を拒むことができる。
ウ．建築請負の目的物である建物に重大な瑕疵があって建て替えるほかはない場合であっても，注文者は，請負人に対し，建物の建替えに要する費用相当額の損害賠償を請求することはできない。
エ．請負人の担保責任の存続期間は，これを契約で伸長することができない。
オ．請負人が仕事を完成しない間は，注文者は，いつでも損害を賠償して契約の解除をすることができるが，契約の目的である仕事の内容が可分である場合において，請負人が既に仕事の一部を完成させており，その完成部分が注文者にとって有益なものであるときは，未完成部分に限り，契約を解除することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2017",num:"29",subject:"min",q:`寄託に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。なお，次のアからエまでの各記述の寄託は，消費寄託ではないものとする。
ア．受寄者は，無償で寄託を受けた場合には，自己の財産に対するのと同一の注意をもって，寄託物を保管すれば足りる。
イ．寄託者は，有償か無償かを問わず，過失なく寄託物の性質若しくは瑕疵を知らなかったとき，又は受寄者がこれを知っていたときを除いて，寄託物の性質又は瑕疵によって生じた損害を受寄者に賠償しなければならない。
ウ．受寄者は，寄託者の承諾を得なければ，寄託物を使用し，又は第三者にこれを保管させることができない。
エ．受寄者は，寄託物の返還時期の定めがあるときであっても，寄託者に対して返還する旨の通知をした後，相当の期間が経過すれば，返還時期の前に寄託物を返還することができる。
オ．消費寄託における寄託者は，寄託物の返還時期の定めがあるときであっても，いつでも寄託物の返還を請求することができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2017",num:"30",subject:"min",q:`Ａが運転するタクシーとＢが運転するタクシーが衝突する交通事故（以下「本件事故」という。）が発生し，Ａが運転するタクシーの乗客Ｃが負傷し，Ｃに３００万円の損害が生じた。本件事故についての過失割合は，Ａが４割で，Ｂが６割であり，Ｃに過失はなかった。この事例に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＣがＡに対して本件事故後３年以内に損害賠償を請求する訴訟を提起すれば，ＣのＢに対する損害賠償請求権の消滅時効も中断する。
イ．ＢがＣに対して損害賠償債務の弁済として１００万円の支払をした場合には，Ｂは，Ａに対し，４０万円を求償することができる。
ウ．Ｂが，Ｃとの間で，ＢがＣに対して２００万円を支払うとともに，ＣがＡの損害賠償債務及びＢのその余の損害賠償債務を免除する旨の和解契約を締結した場合であっても，Ｃは，Ａに対し，１００万円の支払を求めることができる。
エ．Ａに使用者Ｄがおり，Ｄが本件事故について使用者責任を負う場合において，ＤがＣに対して損害賠償債務の弁済として３００万円を支払ったときは，Ｄは，Ａに対し，信義則上相当と認められる限度において求償することができる。
オ．Ｂに使用者Ｅがおり，Ｅが本件事故について使用者責任を負う場合において，ＡがＣに対して損害賠償債務の弁済として３００万円を支払ったときは，Ａは，Ｅに対し，１８０万円を求償することができる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2017",num:"31",subject:"min",q:`Ａ男はＢ女と婚姻したが，Ｂには姉Ｃと妹Ｄがおり，Ｃには配偶者Ｅがいる。その後，Ａは，Ｂの同意を得て，Ｆを養子としたが，その縁組前からＦには子Ｇがいた。この場合に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＥはＡの親族である。
イ．ＧはＡの親族ではない。
ウ．Ｂが死亡した場合，Ａが姻族関係を終了させる意思表示をしない限り，ＡとＣとの親族関係は終了しない。
エ．ＡがＢと離婚した後であっても，ＡはＤと婚姻することができない。
オ．家庭裁判所は，特別の事情があるときは，Ｄを扶養する義務をＡに負わせることができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2017",num:"32",subject:"min",q:`離婚に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．協議上の離婚は戸籍法の定めるところにより届け出ることによって効力を生じ，判決による離婚は離婚請求を認容する判決が確定した時に効力を生ずる。
イ．婚姻によって氏を改めた夫又は妻が，婚姻中に称していた氏を協議上の離婚後も続けて称するためには，離婚の届出をする時に併せてその届出をする必要がある。
ウ．夫婦に未成年の子がいる場合には，子の監護に要する費用の分担に関する協議が調わない限り，協議上の離婚をすることはできない。
エ．ＡＢ夫婦に未成年の子がいる場合には，協議上の離婚をする際の合意によっても，離婚後にＡＢ両名をその子の親権者と定めることはできない。
オ．裁判所は，離婚訴訟において財産分与を命ずるに当たり，当事者の一方が過当に負担した婚姻費用の清算のための給付を含めて財産分与の額及び方法を定めることができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2017",num:"33",subject:"min",q:`成年後見に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．精神上の障害により事理を弁識する能力を欠く常況にある者についても，その者の配偶者が保佐開始の審判を求める申立てをした場合には，家庭裁判所は，保佐開始の審判をすることができる。
イ．家庭裁判所が本人以外の者の請求によって，本人のために特定の法律行為について保佐人に代理権を付与する旨の審判をするには，本人の同意がなければならない。
ウ．家庭裁判所は，後見開始の審判をするときは，職権で，成年後見人を選任する。
エ．成年後見人と本人との利益が相反する行為については，成年後見人は，成年後見監督人がいる場合であっても，本人のために特別代理人を選任することを家庭裁判所に請求しなければならない。
オ．任意後見契約が登記された後に，家庭裁判所が任意後見監督人を選任した場合において，本人が任意後見人の同意を得ずに本人所有の不動産を売却する旨の売買契約を締結したときは，その売買契約は，本人が任意後見人の同意を得ずにしたことを理由に取り消すことができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2017",num:"34",subject:"min",q:`次の【事例】において，Ａを被相続人とする遺産分割におけるＢ，Ｃ及びＤの具体的相続分の額として，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。なお，遺産分割の対象となる財産並びに贈与及び遺贈の目的財産の価額は相続開始時の価額を示しており，その後に価額の変動はないものとする。
【事 例】
⑴ 相続人
Ａの相続人は，配偶者であるＢと，子であるＣ及びＤとする。
⑵ 遺産分割の対象となる財産
３０００万円の金銭
⑶ 時系列
① Ａは，平成２１年２月２１日，Ｂに対し，Ｂの生計の資本としてＡ所有の区分所有建物（価額２１００万円）を贈与した。
② Ａは，平成２４年４月２４日，Ｃに対し，Ｃの生計の資本として１０００万円を贈与した。
③ Ａは，平成２５年５月２０日，Ｃの子であるＥに対し，Ｅの生計の資本として１０００万円を贈与した。
④ Ａは，平成２５年１０月２０日，Ｄに対し，Ａ所有の土地（価額１０００万円）を遺贈する旨の遺言を作成した。
⑤ Ａは，平成２６年２月２６日に死亡した。
⑥ 家庭裁判所は，寄与分を定める処分の審判において，Ｃに３００万円の寄与分があるとの判断を示し，この審判は平成２７年３月２１日に確定した。`,c1:"１．Ｂ：１２５０万円 Ｃ：１０７５万円 Ｄ：６７５万円",c2:"２．Ｂ：１３００万円 Ｃ：１０００万円 Ｄ：７００万円",c3:"３．Ｂ：１４００万円 Ｃ： ９００万円 Ｄ：７００万円",c4:"４．Ｂ：１７５０万円 Ｃ： ３２５万円 Ｄ：９２５万円",c5:"５．Ｂ：１８００万円 Ｃ： ２５０万円 Ｄ：９５０万円",c6:"",c7:"",c8:"",a:"2"},{year:"2017",num:"35",subject:"min",q:"遺留分に関する次の１から５までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．被相続人Ａの子Ｂが相続放棄をした場合，Ｂの子Ｃが遺留分権利者となる。",c2:"２．自己を被保険者とする生命保険契約の契約者が，死亡の半年前に死亡保険金の受取人を相続人の一人に変更した場合，遺留分権利者は，その変更行為の減殺を請求することができる。",c3:"３．特別受益に当たる贈与について，贈与者である被相続人がその財産の価額を相続財産に算入することを要しない旨の意思表示（持戻し免除の意思表示）をした場合であっても，その贈与の価額は遺留分算定の基礎となる財産の価額に算入される。",c4:"４．遺留分減殺請求権は，遺留分権利者が，相続の開始を知った時から１年間行使しないときは，時効によって消滅する。",c5:"５．相続の開始前に遺留分を放棄することはできない。",c6:"",c7:"",c8:"",a:"3"},{year:"2017",num:"36",subject:"min",q:"団体等に関する次の１から５までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．組合の債権者は，各組合員に対して，その権利を行使することができない。",c2:"２．組合員の債権者は，組合財産に対して，その権利を行使することができる。",c3:"３．一般社団法人の債権者は，各社員に対して，その権利を行使することができる。",c4:"４．一般社団法人の社員の債権者は，法人の財産に対して，その権利を行使することができない。",c5:"５．権利能力なき社団の債権者は，各構成員に対して，その権利を行使することができる。",c6:"",c7:"",c8:"",a:"4"},{year:"2017",num:"37",subject:"min",q:`契約の第三者に対する効力に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．建物建築工事請負契約において，注文者と請負人との間に，契約が中途で解除された際の出来形部分の所有権は注文者に帰属する旨の約定がある場合に，当該契約が中途で解除されたときは，その請負人が下請負人に当該工事を請け負わせ，下請負人が自ら材料を提供して出来形部分を築造したとしても，当該出来形部分の所有権は注文者に帰属する。
イ．債務者と引受人との間の契約でする併存的債務引受は，債権者が引受けによる利益を享受する意思を表示しなくても，その効力が生ずる。
ウ．委任による代理人が適法に復代理人を選任した場合において，その復代理人が委任事務を処理するに当たり金銭その他の物を受領したときは，復代理人は，本人に対して受領物を引き渡す義務を負う。
エ．受寄者が寄託された宝石を適法に第三者に保管させたときは，その第三者は寄託者に対して，保管費用の償還を請求することができる。
オ．賃借人が適法に賃借物を転貸したときは，転借人は賃貸人に対して，賃借物の修繕を請求することができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2017",num:"1",subject:"kei",q:`次の【見解】に関する後記１から５までの各【記述】のうち，誤っているものはどれか。
【見 解】
間接正犯については，被利用者の行為時に実行の着手を認めるべきである。
【記 述】`,c1:"１．【見解】は，実行行為時と実行の着手時期が一致することを要しないとする考え方と矛盾しない。",c2:"２．【見解】に対しては，利用者にとって偶然の事情で実行の着手時期を決することになり不合理であると批判できる。",c3:"３．【見解】は，離隔犯において到達時に実行の着手を認める考え方と矛盾しない。",c4:"４．【見解】に対しては，責任無能力者を利用する場合には，責任無能力者に規範意識の障害がないというだけで，直ちに結果発生の切迫した危険があるとはいえないと批判できる。",c5:"５．【見解】は，自然的に観察して結果発生に向けた直接の原因となる行為を重視する考え方と矛盾しない。",c6:"",c7:"",c8:"",a:"4"},{year:"2017",num:"2",subject:"kei",q:`略取，誘拐及び人身売買の罪に関する次のアからオまでの各記述を判例の立場に従って検討した場合，誤っているものの組合せは，後記１から５までのうちどれか。
ア．営利の目的で未成年者を買い受けた場合，未成年者買受け罪のみが成立する。
イ．身の代金目的誘拐罪は，近親者その他誘拐された者の安否を憂慮する者の憂慮に乗じてその財物を交付させる目的を主観的要素とする目的犯である。
ウ．身の代金目的で成年者を略取し，公訴が提起される前に同成年者を安全な場所に解放すれば，身の代金目的略取罪の刑が必要的に減軽される。
エ．未成年者誘拐罪は親告罪である。
オ．親権者は，未成年者誘拐罪の主体とはならない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2017",num:"3",subject:"kei",q:`次のアからオまでの各記述を判例の立場に従って検討した場合，正しいものの組合せは，後記１から５までのうちどれか。
ア．甲は，乙を殺害する目的で，乙を含む複数の者の飲用に供されているペットボトル内のお茶に致死量の劇薬を投入した。その結果，そのお茶を飲用した複数の者全員が死亡した。この場合，甲には，前記お茶を飲用して死亡した者の数に応じた殺人罪の故意が認められる。
イ．覚せい剤を含有する粉末を所持していた甲は，同粉末が身体に有害で違法な薬物であることは認識していたが，覚せい剤や麻薬ではないと認識していた。この場合，甲には覚せい剤取締法違反（覚せい剤所持）の罪の故意が認められる。
ウ．甲は，客観的にはわいせつな文書を，その意味内容は理解しつつも，刑法上のわいせつな文書に該当しないと考え，多数の者に販売した。この場合，甲にわいせつ物頒布罪の故意は認められない。
エ．甲は，乙宅前路上に置かれていた自転車を，乙の所有物と認識して持ち去ったが，実際には同自転車は無主物だった。この場合，甲には遺失物横領罪が成立する。
オ．甲は，第三者が起こした交通事故により瀕死の重傷を負い路上に倒れていた乙を，既に死亡していると思って山中に遺棄した。この場合，甲に死体遺棄罪は成立しない。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"2"},{year:"2017",num:"4",subject:"kei",q:"各種偽造の罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものを２個選びなさい。",c1:"１．甲は，他人の自動車運転免許証に甲の写真を貼り付けた偽造自動車運転免許証を入手し，これを携帯して自動車を運転中に検問で停止を求められ，情を知らない警察官に同免許証を真正に成立したものとして提示した。提示した時には同免許証に表示されている有効期間が経過していたとしても，甲には偽造公文書行使罪が成立する。",c2:"２．公務員でない甲は，情を知らない公務員に対し虚偽の申立てをして登記簿に不実の記載をさせ，その登記簿謄本の交付を受けた。甲には虚偽公文書作成罪の間接正犯が成立する。",c3:"３．甲は，情を知らずに釣銭として偽造通貨を受け取ったところ，その後，それが偽造通貨であることに気付いたが，行使の目的でそのまま所持した。甲には偽造通貨収得罪が成立する。",c4:"４．甲は，行使の目的で，他人が振り出した額面１０万円の小切手の金額欄に「０」を加え，額面１００万円の小切手に改ざんした。甲には有価証券変造罪が成立する。",c5:"５．弁護士資格のない甲は，Ｘ弁護士会に実在する自己と同姓同名の弁護士を装い，これを信じた乙から依頼を受けて弁護士としての業務を行った後，乙から報酬を得るために，「Ｘ弁護士会所属 弁護士甲」名義の弁護士報酬金請求書を作成した。甲には私文書偽造罪が成立しない。",c6:"",c7:"",c8:"",a:"14"},{year:"2017",num:"5",subject:"kei",q:"正当防衛及び緊急避難に関する次の１から５までの各記述を判例の立場に従って検討し，正しいものを２個選びなさい。",c1:"１．正当防衛は，法益の侵害が現に存在している場合のほか，法益の侵害が間近に差し迫っている場合にも成立する余地があるが，緊急避難は，危難が間近に差し迫っている場合に成立する余地はない。",c2:"２．正当防衛が成立するためには，防衛行為が侵害に対する防衛手段として相当性を有するものであることを要するから，防衛行為によって生じた害が避けようとした害の程度を超えた場合に正当防衛が成立する余地はない。",c3:"３．正当防衛が成立する行為を避けるために相手方又は第三者の法益を侵害した場合，緊急避難が成立する余地があるが，正当防衛が成立する余地はない。",c4:"４．過剰避難について，その刑を減軽も免除もしないことはできるが，過剰防衛については，その刑を減軽又は免除しなければならない。",c5:"５．自然現象によって生じた法益侵害を避けるために第三者の法益を侵害した場合，緊急避難が成立する余地があるが，正当防衛が成立する余地はない。",c6:"",c7:"",c8:"",a:"35"},{year:"2017",num:"6",subject:"kei",q:`わいせつ物頒布等の罪に関する次のアからオまでの各記述を判例の立場に従って検討し，甲に（ ）内の罪が成立しないものの組合せは，後記１から５までのうちどれか。
ア．インターネットを介した書籍販売業を営む甲は，日本語で書かれたわいせつな文書である小説を，その購入を申し込んできた日本国内在住の多数の外国人に販売したところ，いずれの外国人も日本語の読解能力に乏しく，同小説の内容を理解できなかった。（わいせつ物頒布罪）
イ．甲は，インターネットを介して多数の希望者を募った上，その希望者らに無料で交付する目的で，わいせつな映像を記録したＤＶＤを所持した。（わいせつ物有償頒布目的所持罪）
ウ．甲は，わいせつな映像を記録したＤＶＤの販売業者に対してそのＤＶＤの購入を申し込み，これを購入した。（わいせつ物頒布罪の教唆犯）
エ．ＤＶＤのレンタル業を営む甲は，わいせつな映像を記録したＤＶＤを，多数の顧客へ有償で貸し出した。（わいせつ物頒布罪）
オ．甲がインターネットを介したわいせつな映像の販売業を営み始めたところ，その購入を申し込んできた顧客は１名だけであったが，甲は，その者に対して，電子メールに同映像のデータを添付して送信した。（わいせつ物頒布罪）`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2017",num:"7",subject:"kei",q:`次の【記述】中の①から④までの（ ）内から適切な語句を選んだ場合，その組合せとして正しいものは，後記１から５までのうちどれか。
【記 述】
被害者の同意が問題となる場合としては，一般に以下のような分類がなされている。第１は，被害者の意思に反することが構成要件要素になっている場合であり，この類型においては，被害者の同意は構成要件該当性を阻却する。窃盗罪は，この類型に①（ａ．入る・ｂ．入らない）。第２は，被害者の同意の有無が犯罪の成立に影響を及ぼさない場合である。１３歳未満の者に対するわいせつ行為は，この類型に②（ｃ．入る・ｄ．入らない）。第３は，被害者の同意がある場合とない場合が分けて規定され，被害者の同意があると軽い方の罪が成立する場合である。業務上堕胎罪は，この類型に③（ｅ．入る・ｆ．入らない）。第４は，被害者の同意が行為の違法性を阻却する場合である。住居侵入罪の「侵入」を住居権者・管理権者の意思に反する立入りと解した場合，同罪は，この類型に④（ｇ．入る・ｈ．入らない）。`,c1:"１．①ａ ②ｃ ③ｅ ④ｈ",c2:"２．①ａ ②ｃ ③ｆ ④ｈ",c3:"３．①ａ ②ｄ ③ｆ ④ｇ",c4:"４．①ｂ ②ｃ ③ｅ ④ｈ",c5:"５．①ｂ ②ｄ ③ｆ ④ｇ",c6:"",c7:"",c8:"",a:"1"},{year:"2017",num:"8",subject:"kei",q:`不法領得の意思に関する次のアからオまでの各記述を判例の立場に従って検討し，正しい場合には１を，誤っている場合には２を選びなさい。
ア．甲は，町議会議員選挙に際し，特定の候補者を当選させるため，後日その候補者の氏名を記載して投票の中に混入することにより同候補者の得票数を増加させる目的で，投票所管理者乙の保管する同選挙の投票用紙を密かに持ち出した。この場合，甲に不法領得の意思は認められず，窃盗罪は成立しない。
イ．Ａ市建設部長である甲は，不正工事の発覚を恐れ自宅に隠匿する目的で，自己が業務上保管している公文書である市立小学校の設計書を市役所外に持ち出した。この場合，甲に不法領得の意思は認められず，業務上横領罪は成立しない。
ウ．甲は，自宅で分解して売却できそうな部品を中古部品屋に売却する目的で，知人乙所有の自動車を乙に無断で運転してその場から走り去った。この場合，甲に不法領得の意思は認められず，窃盗罪は成立しない。
エ．新聞購読料の集金業務に従事する甲は，購読料として集金した現金を遊興のため全額費消して横領した後，その発覚を免れる目的で，新たに購読料として集金した現金を穴埋めに充てた。この場合，穴埋めに充てた現金について，甲に不法領得の意思は認められず，業務上横領罪は成立しない。
オ．甲は，乙宛てに送達されてきた支払督促状を乙に成り済まして受領して廃棄することにより，送達が適式になされたものとして支払督促の効力を生じさせ，乙所有の財産を不正に差し押さえようと考え，郵便配達員丙を欺いて同督促状の交付を受けて廃棄した。この場合，甲に不法領得の意思は認められず，詐欺罪は成立しない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"22221"},{year:"2017",num:"9",subject:"kei",q:`没収と追徴に関する次のアからオまでの各記述を判例の立場に従って検討した場合，正しいものの組合せは，後記１から５までのうちどれか。
ア．主物を没収するときは，その従物も没収できる。
イ．判決により没収の言渡しをするためには，対象物が判決時に裁判所により押収されている必要がある。
ウ．被害者宅に侵入して行われた窃盗事犯において，被害者宅への侵入に際して道具として使用された鉄棒は，住居侵入罪について公訴提起されていなければ没収できない。
エ．窃盗によって取得された盗品は，取得物件であるが，没収できない場合がある。
オ．収賄罪において，収受した賄賂が没収不能となった時点で，収受時と比較してその価額が減じていた場合には，没収不能時の価額を追徴することになる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2017",num:"10",subject:"kei",q:"信用及び業務に対する罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．威力業務妨害罪における「威力」は，暴行又は脅迫を用いることを要し，騒音喧騒により人の意思を制圧して業務を妨害した場合，同罪は成立しない。",c2:"２．偽計業務妨害罪における「偽計」は，直接人に向けられていなくてもよい。",c3:"３．信用毀損罪における「信用」は，人の支払能力又は支払意思に対する社会的な信頼に限定されず，経済的側面とは関係のない社会的な信頼を害した場合も，同罪が成立する。",c4:"４．業務妨害罪における「業務」は，社会生活上又は個人生活上の地位に基づき反復継続して従事する事務であるから，学生の学習活動を妨害した場合も，同罪が成立する。",c5:"５．信用毀損罪は危険犯であるが，業務妨害罪は侵害犯である。",c6:"",c7:"",c8:"",a:"2"},{year:"2017",num:"11",subject:"kei",q:`次の【事例】に関する後記アからエまでの各【記述】を判例の立場に従って検討し，誤っているものを全て選んだ場合の組合せは，後記１から５までのうちどれか。
【事 例】
土木作業員甲及び乙は，現場監督者丙の監督の下で，Ｘ川に架かる鉄橋の橋脚を特殊なＡ鋼材を用いて補強する工事に従事していたが，作業に手間取り，工期が迫ってきたことから，甲及び乙の２人で相談した上で，より短期間で作業を終えることができる強度の弱いＢ鋼材を用いた補強工事を共同して行った。その結果，工期内に工事を終えることはできたものの，その後発生した豪雨の際，Ａ鋼材ではなくＢ鋼材を用いたことによる強度不足のために前記橋脚が崩落し，たまたま前記鉄橋上を走行していたＶ１運転のトラックがＸ川に転落し，Ｖ１が死亡した。なお，甲及び乙は同等の立場にあり，甲及び乙のいずれについても，Ｂ鋼材を工事に用いた場合に強度不足のために前記橋脚が崩落することを予見していなかったものの，その予見可能性があったものとする。
【記 述】
ア．甲及び乙には，強度の弱いＢ鋼材で補強工事を行うことの意思連絡はあるが，不注意の共同はあり得ないから，甲及び乙に業務上過失致死罪の共同正犯が成立する余地はない。
イ．丙は，甲及び乙が強度の弱いＢ鋼材で補強工事を行っていることを認識していたが，工期が迫っていたことから，これを黙認したという場合，直接行為者である甲及び乙に過失が認められたとしても，更に丙に過失が認められる余地がある。
ウ．仮に，甲及び乙において，Ｖ１が死亡するに至る実際の因果経過を具体的に予見することが不可能であった場合，甲及び乙には業務上過失致死罪は成立しない。
エ．仮に，Ｖ１運転のトラックの荷台に，Ｖ１に無断でＶ２が乗り込んでおり，同トラックがＸ川に転落したことによって，Ｖ１及びＶ２の両名が死亡した場合，甲及び乙にはＶ２に対する業務上過失致死罪は成立しない。`,c1:"１．ア イ ウ",c2:"２．ア ウ エ",c3:"３．ア エ",c4:"４．イ ウ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"2"},{year:"2017",num:"12",subject:"kei",q:`次のアからオまでの各記述を判例の立場に従って検討し，正しい場合には１を，誤っている場合には２を選びなさい。
ア．甲は，自転車Ａが，乙が自ら窃取した自転車Ｂからサドルを取り外し，乙所有の別の自転車本体に容易に着脱可能な状態で取り付けて完成させたものであると知りつつ，乙から自転車Ａを購入した。甲には盗品等有償譲受け罪が成立する。
イ．甲は，盗品であると知りつつ，窃盗犯人乙から依頼を受けて保管していた宝石を乙に返却した後，改めて乙から依頼を受け，預かった同宝石を事情を知らない丙に売却した。甲には盗品等有償処分あっせん罪のみが成立する。
ウ．甲は，刑法第４１条の刑事未成年である乙が窃取した物を，盗品であると知りつつ，乙から無償で譲り受けた。甲には盗品等無償譲受け罪は成立しない。
エ．甲は，親族関係にない窃盗犯人乙から盗品の保管を依頼された。甲は，同盗品が，甲の実父丙の自宅から窃取された丙所有の物であると知りつつ，乙からの依頼を受け入れて，同盗品を保管した。甲は盗品等保管罪の刑が免除される。
オ．甲は，妻乙が，親族関係にない窃盗犯人丙から盗品であると知りつつ購入した物を，乙から依頼を受け，盗品であると知りつつ，乙の指定した場所まで運んだ。甲は盗品等運搬罪の刑が免除される。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"12222"},{year:"2017",num:"13",subject:"kei",q:"責任能力に関する次の１から５までの各記述を判例の立場に従って検討し，正しいものを２個選びなさい。",c1:"１．１３歳の少年であっても，事物の理非善悪を弁識する能力及びその弁識に従って行動する能力が備わっていれば，責任能力が認められることがある。",c2:"２．責任能力の有無は法律判断であり，専ら裁判所の評価に委ねられるべきであるため，その前提となる生物学的・心理学的要素についても，最終的には裁判所により判断される。",c3:"３．相手の頭部を殴打する暴行を加えた時点で行為者に責任能力が存在したとしても，その暴行により相手が死亡した時点で行為者に責任能力が存在しなければ，死亡の結果について行為者に刑事責任を問うことはできない。",c4:"４．犯行当時，行為者に重度の精神疾患があれば，そのことだけで直ちに心神喪失の状態にあったと判断されることになる。",c5:"５．飲酒の際，飲酒後に酒酔い運転をする意思が認められる場合には，実際に酒酔い運転をした時に酩酊による心神耗弱の状態にあったとしても，行為者に完全責任能力が認められることがある。",c6:"",c7:"",c8:"",a:"25"},{year:"2017",num:"14",subject:"kei",q:`犯人蔵匿及び証拠隠滅の罪に関する次のアからオまでの各記述を判例の立場に従って検討した場合，正しいものの組合せは，後記１から５までのうちどれか。
ア．犯人の親族が当該犯人の利益のために犯人蔵匿罪を犯したときは，当該親族に対する刑は減軽しなければならない。
イ．犯人隠避罪の「罰金以上の刑に当たる罪を犯した者」には，犯人として既に逮捕・勾留されている者は含まれない。
ウ．証拠隠滅罪の「他人の刑事事件」は，犯人蔵匿罪と異なり，罰金以上の刑に当たる罪に限られない。
エ．証人等威迫罪の「威迫」は，相手と面会して直接なされる場合に限られ，文書を送付して相手にその内容を了知させる方法によりなされる場合を含まない。
オ．犯人が自己の刑事事件の裁判に必要な知識を有する証人を威迫した場合，証人等威迫罪が成立する。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2017",num:"15",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．甲が乙に対し，深夜の公園で待ち伏せしてＡから金品を喝取するように教唆したところ，乙は，その旨決意し，深夜の公園でＡを待ち伏せしたが，偶然通り掛かったＢをＡと誤認してＢから金品を喝取した。乙は，人違いに気付き，引き続きＡを待ち伏せして，通り掛かったＡから金品を喝取しようとしてＡを脅迫したが，Ａに逃げられてしまい金品を喝取することができなかった。甲にはＡに対する恐喝未遂罪の教唆犯のみが成立する。",c2:"２．甲が乙に対し，Ａをナイフで脅してＡから金品を強取するように教唆したところ，乙は，その旨決意し，Ａをナイフで脅したが，その最中に殺意を抱き，Ａの腹部をナイフで刺してＡに傷害を負わせ，Ａから金品を強取したものの，Ａを殺害するには至らなかった。甲には強盗罪の教唆犯が成立するにとどまる。",c3:"３．甲が乙に対し，留守宅であるＡ方に侵入して金品を窃取するように教唆したところ，乙は，その旨決意したが，Ｂ方をＡ方と誤認してＢ方に侵入し，その場にいたＢから金品を強取した。甲にはＢ方への住居侵入罪及びＢに対する窃盗罪の教唆犯が成立する。",c4:"４．甲が乙に対し，現住建造物であるＡ家屋に放火するように教唆したところ，乙は，その旨決意し，Ａ家屋に延焼させる目的で，Ａ家屋に隣接した現住建造物であるＢ家屋に放火したが，Ｂ家屋のみを焼損し，Ａ家屋には燃え移らなかった。甲にはＡ家屋に対する現住建造物等放火未遂罪の教唆犯のみが成立する。",c5:"５．甲は，土建業者ＡがＢ市発注予定の土木工事を請け負うためＢ市役所土木係員乙に現金を供与しようと考えていることを知り，乙に対し，Ａに工事予定価格を教える見返りとしてＡから現金を受け取り，Ａに工事予定価格を教えるように教唆したところ，乙は，その旨決意し，Ａとの間で，Ａに工事予定価格を教える旨約束して，Ａから現金１００万円を受け取ったが，その後，工事予定価格を教えなかった。甲には加重収賄罪の教唆犯が成立する。",c6:"",c7:"",c8:"",a:"3"},{year:"2017",num:"16",subject:"kei",q:`次の【見解】に関する後記アからオまでの各【記述】のうち，正しいものの組合せは，後記１から５までのうちどれか。
【見 解】
横領罪の目的物は，犯人が占有する他人の物であり，物の給付者において民法上その返還を請求できるものであることを要しないので，不法な目的で金銭を委託した場合，委託者に返還請求権が認められなくても，受託者がこれを領得する行為には，横領罪が成立する。
【記 述】
ア．この【見解】に対しては，民法第７０８条にいう「給付」に「委託」は含まれないとする立場を前提としなければならず，妥当でないとの批判ができる。
イ．この【見解】は，使途を定めて委託された金銭の所有権は受託者に移転しないとする立場と明らかに矛盾するものである。
ウ．この【見解】に対しては，受託者が民法第７０８条に基づいて委託者からの返還請求を拒む行為にも横領罪が成立することになりかねず，妥当でないとの批判ができる。
エ．この【見解】は，横領罪の保護法益が所有権であることを重視し，委託信任関係の破壊という点を全く考慮していない。
オ．この【見解】に対しては，不法原因給付の目的物の所有権は，給付者において給付した物の返還を請求できないことの反射的効果として，受給者に帰属するに至ったと解すべきであるとする立場を前提とすると，横領罪にいう「他人の物」を領得したわけではないのに受託者に横領罪の成立を認めることになり，妥当でないとの批判ができる。
（参照条文）民法
第７０８条　不法な原因のために給付をした者は，その給付したものの返還を請求することができない。ただし，不法な原因が受益者についてのみ存したときは，この限りでない。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2017",num:"17",subject:"kei",q:`次のアからオまでの各事例における甲の罪責について，判例の立場に従って検討し，（ ）内の犯罪が既遂になる場合には１を，未遂にとどまる場合には２を，既遂にも未遂にもならない場合には３を選びなさい。
ア．甲は，会社事務所内において現金を窃取して，戸外に出たところを警備員乙に発見されて取り押さえられそうになったため，逮捕を免れようと考え，乙に対し，刃体の長さ２０センチメートルの出刃包丁をその腹部に突き付け，「ぶっ殺すぞ。」と怒鳴り付けたが，偶然その場を通り掛かった警察官に取り押さえられ，逮捕を免れることができなかった。（事後強盗罪）
イ．甲は，行使の目的で，カラープリンターを用いて，複写用紙に真正な千円札の表面及び裏面を複写して千円札を偽造しようとしたが，カラープリンターの操作を誤ったため，完成したものは，一般人がこれを一見した場合に真正な千円札と誤認する程度の外観を備えたものではなかった。（通貨偽造罪）
ウ．甲は，通行中の乙に因縁を付けて乙から現金を脅し取ろうと考え，乙に対し，「俺をにらんできただろ。金を払えば許してやる。金を出せ。」などと大声で怒鳴り付けて反抗を抑圧するに至らない程度の脅迫を加え，同脅迫により畏怖した乙は，甲に現金を直接手渡さなかったものの，甲が乙のズボンのポケットから乙が所有する現金在中の財布を抜き取って持ち去るのを黙認した。（恐喝罪）
エ．甲は，知り合いの女性乙を自己が運転する自動車に乗せて同車内において強いて姦淫しようと考え，乙に対し，「自宅まで送ってあげる。」とうそを言ったところ，乙は，これを信じて同車に乗り込んだが，甲の態度を不審に思い即座に同車から降りた。（強姦罪）
オ．甲は，会社事務所にある現金を窃取する目的で，門塀に囲まれ，警備員が配置されて出入りが制限されている同事務所の敷地内に塀を乗り越えて立ち入ったが，同事務所の建物に立ち入る前に警備員に発見され敷地外に逃走した。（建造物侵入罪）`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"12131"},{year:"2017",num:"18",subject:"kei",q:"名誉毀損罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．摘示される「事実」は，非公知のものでなければならないから，公知の事実を摘示した場合には，名誉毀損罪は成立しない。",c2:"２．事実の摘示が「公然」といえるためには，摘示内容を不特定かつ多数人が認識し得る状態にあったことが必要であるから，不特定ではあるが，少数人しか認識し得ない状態にとどまる場合には，名誉毀損罪は成立しない。",c3:"３．名誉の主体である「人」は，自然人に限られるから，法人の名誉を毀損した場合には，名誉毀損罪は成立しない。",c4:"４．死者の名誉を毀損したとしても，虚偽の事実を摘示した場合でなければ処罰されないから，摘示した事実が真実である場合には，名誉毀損罪として処罰されない。",c5:"５．人の名誉を侵害するに足りる事実を公然と摘示したとしても，現実に人の名誉が侵害されていない場合には，名誉毀損罪は成立しない。",c6:"",c7:"",c8:"",a:"4"},{year:"2017",num:"19",subject:"kei",q:`
学生Ａ，Ｂ及びＣは，次の【事例】における甲の罪責について，後記【会話】のとおり検討している。【会話】中の①から⑤までの（ ）内から適切な語句を選んだ場合，正しいものの組合せは，後記１から５までのうちどれか。
【事 例】
甲は，乙がＶに対して暴行を加えていたところに通り掛かり，乙との間で共謀を遂げた上，乙と一緒にＶに対して暴行を加えた。Ｖは，甲の共謀加担前後にわたる一連の暴行を加えられた際に１個の傷害を負ったが，Ｖの傷害が，甲の共謀加担前の乙の暴行により生じたのか，甲の共謀加担後の甲又は乙の暴行により生じたのかは，証拠上不明であった。
【会 話】
学生Ａ．私は，共犯は自己の行為と因果関係を有する結果についてのみ責任を負うという見解に立ち，後行者は，共謀加担前の先行者の暴行により生じた傷害結果には因果性を及ぼし得ないと考えます。事例の場合，甲には①（ａ．暴行罪・ｂ．傷害罪）の共同正犯が成立すると考えます。事例とは異なり，Ｖの傷害が甲の共謀加担後の甲又は乙の暴行により生じたことが証拠上明らかな場合，甲には傷害罪の共同正犯が②（ｃ．成立する・ｄ．成立しない）と考えます。
学生Ｂ．Ａ君の見解に対しては，甲に対する傷害罪の成立範囲が③（ｅ．狭く・ｆ．広く）なり過ぎるとの批判が可能ですね。
学生Ｃ．私は，事例の場合には，同時傷害の特例としての刑法第２０７条が適用され，甲は，Ｖの傷害結果について責任を負うと考えます。その理由の一つとして，仮に甲が乙と意思の連絡なく，Ｖに暴行を加えた場合に比べ，事例における甲が④（ｇ．不利・ｈ．有利）に扱われることになるのは不均衡であると考えられることが挙げられます。
学生Ｂ．乙には，甲の共謀加担前後にわたる一連の暴行の際にＶに生じた傷害結果についての傷害罪が成立するのであり，傷害結果について責任を負う者が誰もいなくなるわけではないということは，Ｃ君の⑤（ｉ．見解に対する批判・ｊ．見解の根拠）となり得ますね。`,c1:"１．①ａ ②ｃ ③ｅ ④ｈ ⑤ｉ",c2:"２．①ｂ ②ｄ ③ｆ ④ｇ ⑤ｊ",c3:"３．①ａ ②ｃ ③ｆ ④ｇ ⑤ｊ",c4:"４．①ｂ ②ｃ ③ｅ ④ｈ ⑤ｉ",c5:"５．①ａ ②ｃ ③ｅ ④ｇ ⑤ｊ",c6:"",c7:"",c8:"",a:"1"},{year:"2017",num:"20",subject:"kei",q:`次の【事例】に関する後記１から５までの各【記述】を判例の立場に従って検討し，正しいものを２個選びなさい。
【事 例】
　甲は，覚せい剤の密売人である乙から，偽造した１万円札と引換えに覚せい剤をだまし取ろうと考え，１万円札の偽造に使用する目的で，作業部屋を自己名義で賃借した上，印刷機及び印刷用紙を購入して同部屋に運び込み，それらを使用して１万円札１００枚を偽造した。（①）
　その後，甲は，ホテルの部屋で乙と会い，乙に対し，１００万円相当の覚せい剤（以下「本件覚せい剤」という。）の代金として，偽造した１万円札１００枚を渡した。乙は，甲から渡された１万円札が偽札であることに気付かずに，甲に対し，本件覚せい剤を渡し，甲は，これを持って同部屋を出た。（②）
　甲は，本件覚せい剤をホテルの駐車場に駐車中の自己の自動車内に置いたところ，甲が乙に渡した１万円札が偽札であることに気付いて追い掛けてきた乙から，本件覚せい剤を返還するように求められた。甲は，本件覚せい剤の返還を免れるため，殺意をもって乙の首を両手で絞めて乙を殺害した。（③）
　その数日後，甲は，本件覚せい剤を所持しているのを警察官に現認され，覚せい剤取締法違反の現行犯人として逮捕され，Ａ警察署に連行された。警察官丙は，Ａ警察署の取調室において，甲の弁解録取手続を行い，甲の供述内容を弁解録取書に記載した上，同弁解録取書を甲に手渡して内容の確認を求めたところ，甲は，署名押印する前に同弁解録取書を両手で破った。（④）
　甲は，同取調室から逃げ出し，Ａ警察署の敷地外に出た。（⑤）
【記 述】`,c1:"１．①について，甲が作業部屋を自己名義で賃借した行為は，通貨偽造罪の予備行為に該当することから，その段階で甲には通貨偽造等準備罪が成立する。",c2:"２．②について，甲には詐欺罪が成立し，偽造通貨行使罪は詐欺罪に吸収される。",c3:"３．③について，覚せい剤は，法定の除外事由なく所持することが禁じられた物であるが，甲は，本件覚せい剤の返還を免れるために乙を殺害していることから，甲には強盗殺人罪が成立する。",c4:"４．④について，丙が作成した弁解録取書には，甲の署名押印がないが，甲の供述内容が記載されていることから，甲には公用文書等毀棄罪が成立する。",c5:"５．⑤について，甲は，逮捕中に逃走し，Ａ警察署の敷地外に出ていることから，甲には単純逃走罪が成立する。",c6:"",c7:"",c8:"",a:"34"},{year:"2016",num:"1",subject:"ken",q:`私人間における人権保障に関する次のアからウまでの各記述について，判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい｡
ア．企業者は，雇用の自由を有するから，労働者の思想，信条を理由として雇入れを拒んでも当然に違法ということはできないが，労働者の採否決定に当たり，その思想，信条を調査し，労働者に関連事項の申告を求めることまでは許されない。
イ．大学は，その設置目的を達成するため，必要な事項を定めて学生を規律する権能を有するから，私立大学が，その伝統，校風や教育方針に鑑み，学内外における学生の政治的活動につき，かなり広範な規律を及ぼしても，直ちに不合理ということはできない。
ウ．長期間にわたり形成された地方の慣習に根ざした権利である入会権については，その慣習が存続しているときは最大限尊重すべきであるから，権利者の資格を原則として男子孫に限る旨の特定の地域団体における慣習も，直ちに公序良俗に反するとはいえない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"212"},{year:"2016",num:"2",subject:"ken",q:`憲法の明文で規定されていない権利・自由に関する次のアからウまでの各記述について，判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい｡
ア．前科は人の名誉，信用に直接関わる事項であり，前科のある者もこれをみだりに公開されないという法的保護に値する利益を有するが，「裁判所に提出するため」との申出理由の記載があれば，市区町村長が弁護士法に基づく照会に応じて前科を報告することは許される。
イ．大学が講演会を主催する際に集めた参加学生の学籍番号，氏名，住所及び電話番号は，個人の内心に関する情報ではなく，大学が個人識別を行うための単純な情報であって，秘匿の必要性が高くはないから，プライバシーに係る情報として法的保護の対象にならない。
ウ．個人の私生活上の自由の一つとして，何人もその承諾なしにみだりにその容ぼう・姿態を撮影されない自由を有するが，速度違反車両の自動撮影を行う自動速度監視装置による写真撮影は，犯罪捜査の必要性・相当性があるから，本人の同意や裁判官の令状がなくても許される。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"7"},{year:"2016",num:"3",subject:"ken",q:`法の下の平等に関する次のアからウまでの各記述について，判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい｡
ア．憲法は，外国人を日本国民と全く平等に扱うことまでは要求していないが，我が国に入国する全ての外国人に対し，法律により，日本国民と異なる規制を設けることは，人種的な差別をする趣旨ではなくても，憲法第１４条第１項後段の「人種」による差別として許されない。
イ．選挙権の平等には各選挙人の投票価値の平等も含まれるが，国会によって定められた選挙制度における投票価値が不平等であっても，その不平等が国会の有する裁量権の行使として合理的と認められるのであれば，憲法第１４条に違反しない。
ウ．条例においては，一定の取締規定を設け，法律による委任の範囲で，その違反に対する罰則を規定することが許されるが，禁錮又は懲役の刑は，全国一律に規律すべきものと解されるので，それぞれの条例の間で法定刑が異なる場合は，憲法第１４条に違反する。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"6"},{year:"2016",num:"4",subject:"ken",q:`都立高等学校の校長が教諭に対し，卒業式における国歌斉唱の際に国旗に向かって起立し国歌を斉唱することを命じた職務命令が，憲法第１９条に違反するか否かについて判示した最高裁判所の判決（最高裁判所平成２３年５月３０日第二小法廷判決，民集６５巻４号１７８０頁）に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい｡
ア．卒業式等の式典における国歌斉唱の際の起立斉唱行為は，一般的，客観的に見て，これらの式典における慣例上の儀礼的な所作としての性質を有するものであり，校長の職務命令は，「日の丸」や「君が代」に関する当該教諭の歴史観ないし世界観それ自体を否定するものということはできない。
イ．国旗に向かって起立し国歌を斉唱する行為は，一般的，客観的に見て，特定の思想の表明として外部から認識されるものと評価すべきであり，卒業式等の式典における国歌斉唱の際の起立斉唱行為が職務命令に従って行われたものと外部から認識することも困難であって，校長の職務命令は，特定の思想の有無について告白することを強要する面がある。
ウ．卒業式等の式典における国歌斉唱の際の起立斉唱行為は，一般的，客観的に見て，国旗及び国歌に対する敬意の表明の要素を含む行為であり，歴史観ないし世界観との関係で「日の丸」や「君が代」に敬意を表明することには応じ難いと考える者が上記行為を求められることは，思想及び良心の自由についての間接的な制約となる面があることは否定し難い。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"121"},{year:"2016",num:"5",subject:"ken",q:`信教の自由に関する次のアからウまでの各記述について，判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい｡ 
ア．神社において死者の合祀を行うことが遺族である配偶者の心の静謐を害する場合，その遺族は，静謐な宗教的環境の下で信仰生活を送るべき利益である宗教的人格権を侵害されたと主張して，損害賠償を請求できる。
イ．僧侶が病者の平癒を祈願して加持祈祷を行うに当たり，病者の手足を縛って線香の火に当てるなどして同人を死亡させることは，医療上一般に承認された治療行為とは到底認められず，信教の自由の保障の限界を逸脱したものであって許されない。
ウ．宗教法人法の解散命令によって宗教法人を解散しても，信者は，法人格を有しない宗教団体を存続させたり宗教上の行為を行ったりすることができるので，宗教上の行為を継続するに当たり何ら支障はない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"212"},{year:"2016",num:"6",subject:"ken",q:`知る権利に関する次のアからウまでの各記述について，判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．様々な意見，知識，情報の伝達の媒体である新聞紙等の閲読の自由が憲法上保障されるべきことは，表現の自由を保障した憲法第２１条の規定の趣旨，目的から，いわばその派生原理として当然に導かれるものである。
イ．新聞等の記事が特定の者の名誉ないしプライバシーに重大な影響を及ぼし，その者に対する不法行為が成立する場合には，具体的な成文法がなくても，反論権の制度として，反論文掲載請求権が認められる。
ウ．自己の思想，意見を形成するために自由な情報の受領は不可欠であるから，特に，国の政府機関が保有する情報の開示請求権は，これを具体化する法律がない場合であっても，当然に具体的権利として認められ，司法上の救済を受けることができる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"4"},{year:"2016",num:"7",subject:"ken",q:`学問の自由に関する次のアからウまでの各記述について，判例の趣旨に照らして，正しいものには○を，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい｡
ア．学問の自由は，学問的研究の自由とその研究成果の発表の自由を指しており，憲法第２３条は大学が学術の中心として深く真理を探究することを本質とすることに鑑みて規定されたものであるから，同条の保障は大学の教授や研究者を対象とするものであり，国民一般はその保障の対象ではない。
イ．大学における学問の自由を保障するために伝統的に大学の自治が認められているところ，学内集会について大学の自治の保障が及ぶか否かの判断に当たって，その集会の目的や性格を考慮することは，学内で行われる活動をその思想内容に着目して規制することになり，大学の自治を認めた趣旨に抵触するから，許されない。
ウ．普通教育の場において使用される教科書は学術研究の結果の発表を目的とするものではなく，教科書検定は，記載内容がいまだ学界において支持を得ていないとき，あるいは当該教科課程で取り上げるにふさわしい内容と認められないときなど一定の検定基準に違反する場合に，教科書の形態における研究結果の発表を制限するにすぎないから，憲法第２３条に反しない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"7"},{year:"2016",num:"8",subject:"ken",q:`生存権に関する次の見解に対する論評としてなされた次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい｡
「憲法第２５条の生存権を具体化する趣旨の法律が制定された以上，その法律は憲法第２５条と一体をなし，かかる法律の定める保護基準を正当な理由なくして引き下げることは憲法上許されない。」
ア．この見解に対しては，憲法第２５条第１項が禁止しているのは「健康で文化的な最低限度の生活」の水準を下回ることだけであり，保護基準の引下げによってもかかる水準を上回る場合にまで，正当な理由を必要とする根拠は同条項から導くことはできないとの批判が可能である。
イ．この見解は，憲法第２５条を具体化する立法措置の選択決定は立法府の広い裁量に委ねられているとした，最高裁判所の判決（最高裁判所昭和５７年７月７日大法廷判決，民集３６巻７号１２３５頁）の趣旨から論理的に導くことができる。
ウ．この見解によれば，過去の国会の判断が現在及び将来の国会を拘束することになるが，憲法第２５条を具体化する趣旨の法律についてのみ，かかる拘束が憲法上要請されていると解することは困難であるとの批判が可能である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"121"},{year:"2016",num:"9",subject:"ken",q:`労働基本権に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい｡
ア．公務員の争議行為の制限は国民生活全体の利益を維持増進する必要との調和の見地から合理性の認められる必要最小限度のものでなければならず，職務の性質や違いを考慮することなく公務員の争議行為を一律に禁止することは憲法上許されないとするのが判例の立場である｡
イ．憲法により団結権が保障されている労働組合においては，組合の目的の範囲内にある活動であれば，その全ての活動について組合員に対して統制権を行使し得るから，労働組合が統制権に基づいて組合員を除名した処分には司法審査が及ばない。
ウ．憲法第２８条が保障する労働基本権は，使用者との関係において労働者の権利を保護することを目的の一つとするので，私人相互の関係でも意味を持ち，契約自由の原則は制限されることになる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"221"},{year:"2016",num:"10",subject:"ken",q:`人身の自由に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい｡
ア．警察官が，酒気を帯びて車両を運転するおそれがあると認めて呼気検査を求めたのに対し，これを拒否した者を処罰する道路交通法の規定は，「何人も，自己に不利益な供述を強要されない」と定める憲法第３８条第１項の規定に違反しない。
イ．刑事被告人は，公費で自己のために強制的手続により証人を求める権利を有する（憲法第３７条第２項）から，裁判所は刑事被告人が自身の弁護のために必要であると主張している証人全員の尋問を採用しなければならない。
ウ．有罪判決を受けた刑事被告人に対し，裁判所に出廷させた証人に旅費，日当及び宿泊料を負担させることは，「刑事被告人は，公費で自己のために強制的手続により証人を求める権利を有する」と定める憲法第３７条第２項の規定に違反しない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"3"},{year:"2016",num:"11",subject:"ken",q:`憲法の規範内容が踏みにじられたり不当に変質させられたりしないようにする様々な国法上の工夫は，広く「憲法の保障」と言われるが，その代表的な方法や考え方に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい｡
ア．国家緊急権は，外敵の侵入，内乱や大規模な災害などにより国家の存立が脅かされる事態に至った場合に執り得る非常措置権とされるが，平常時における立憲主義の一時停止を認める権限であるから，憲法の明文で国家緊急権を容認している例は諸外国にもない。
イ．抵抗権は，政府による権力の濫用によって立憲主義秩序が破壊された場合に国民がそれに反抗する権利とされるが，実力の行使を伴う危険なものであるから，権利として実定法化することは不可能である。
ウ．憲法の連続性を維持するための特別な手続を定める憲法改正規定や憲法の最高法規性を確保するために特別な合憲性統制の途を設ける違憲審査制は，ともに憲法の保障の一つの方法として位置付けられる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"221"},{year:"2016",num:"12",subject:"ken",q:`天皇が国会開会式に出席した上で述べる「おことば」の憲法上の位置付けに関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい｡
ア．「おことば」を象徴としての地位に基づく公的行為であると捉える見解については，象徴としての地位が天皇の一身専属のものであることを前提にすると，天皇の権能を代行する摂政は「おことば」を述べることができないのではないかという問題点がある。
イ．「おことば」を国事行為である国会の召集（憲法第７条第２号）と密接に関連する行為として準国事行為と位置付ける見解については，「おことば」について内閣による「助言と承認」を通じたコントロールを及ぼす余地がなくなるという問題点がある。
ウ．「おことば」は国事行為である「儀式を行ふ」（憲法第７条第１０号）に含まれるという見解については，上記「儀式を行ふ」を「儀式を主宰する」という意味に解すると，文理上無理があるという問題点がある。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"3"},{year:"2016",num:"13",subject:"ken",q:`憲法第９条の解釈に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい｡
ア．第１項で，侵略戦争は放棄されているが，自衛戦争は放棄されていないとし，第２項の「前項の目的を達するため」を，侵略戦争放棄の目的を達するためとする見解に対しては，日本国憲法には，第６６条第２項の文民条項以外に戦争や軍隊を予定する規定が存在しないとの批判が当てはまる。
イ．第１項で，侵略戦争は放棄されているが，自衛戦争は放棄されていないとし，第２項の「前項の目的を達するため」を，戦争を放棄するに至った動機を一般的に指すとする見解に対しては，国際法上の用例によると，「国際紛争を解決する手段としての戦争」は「国家の政策の手段としての戦争」と同義であり，こうした用例を尊重すべきであるとの批判が当てはまる。
ウ．第１項で，侵略戦争は放棄されているが，自衛戦争は放棄されていないとし，第２項の「前項の目的を達するため」を，戦争を放棄するに至った動機を一般的に指すとする見解と，第１項で，自衛戦争を含む全ての戦争が放棄されているとする見解のいずれの見解を採っても，憲法第９条により，全ての戦争が放棄されているとの結論が導かれる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"3"},{year:"2016",num:"14",subject:"ken",q:`いわゆる在外邦人選挙権制限違憲訴訟上告審判決（最高裁判所平成１７年９月１４日大法廷判決，民集５９巻７号２０８７頁）に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい｡
ア．前記判決は，国政選挙の選挙権について，「国民の国政への参加の機会を保障する基本的権利として議会制民主主義の根幹を成すものであり，民主国家においては，一定の年齢に達した国民の全てに平等に与えられるべきものである」と指摘しているが，同判決の考え方に従ったとしても，自ら選挙の公正を害する行為をした者の選挙権について一定の制限をすることまで違憲となるわけではない。
イ．比例代表選出議員の選挙と異なり，衆議院小選挙区選出議員の選挙及び参議院選挙区選出議員の選挙については，選挙権を行使する者が日本国内の特定地域に現に居住していることを前提としているから，上記判決の考え方に従ったとしても，衆議院小選挙区選出議員の選挙及び参議院選挙区選出議員の選挙における在外日本国民の選挙権の行使を制限することまで違憲となるわけではない。
ウ．前記判決は，在外日本国民の選挙権行使を制限する公職選挙法の規定について違憲と判断したものであるが，「仮に当該立法の内容又は立法不作為が憲法の規定に違反するものであるとしても，それゆえに国会議員の立法行為又は立法不作為が直ちに違法の評価を受けるものではない」として，立法不作為を理由とする国家賠償請求は認めなかった。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"122"},{year:"2016",num:"15",subject:"ken",q:`議院の自律権に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい｡
ア．議員の資格争訟の裁判について規定している憲法第５５条は，議員資格に関する判断を議院の自律的な審査に委ねる趣旨のものであるが，議員の選挙に関する争訟の裁判は裁判所の権限に属するので，各議院の下した議員資格に関する判断についても裁判所で争うことができる。
イ．議院の規則制定について規定している憲法第５８条第２項は，各議院が独立して議事を審議し議決する以上，当然のことを定めた規定であり，「各々その会議その他の手続及び内部の規律に関する」事項について，原則として両議院の自主的なルールに委ねる趣旨である。
ウ．議員の懲罰について規定している憲法第５８条第２項は，議院がその組織体としての秩序を維持し，その機能の運営を円滑ならしめるためのものであるため，議場内に限らず，議場外の行為でも懲罰の対象となるが，会議の運営と関係のない個人的行為は懲罰の対象とならない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"5"},{year:"2016",num:"16",subject:"ken",q:`内閣及び内閣総理大臣に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい｡
ア．大日本帝国憲法において内閣総理大臣は同輩中の首席にすぎなかったのに対し，日本国憲法が内閣総理大臣に首長としての地位を認め，その権限を強化しているのは，内閣の一体性と統一性を確保し，内閣の国会に対する連帯責任の強化を図るものである。
イ．判例によれば，内閣総理大臣は，閣議にかけて決定した方針が存在しない場合においても，少なくとも内閣の明示の意思に反しない限り，行政各部に対し，随時その所掌事務について一定の方向で処理するよう指導，助言等の指示を与える権限を有する。
ウ．内閣は，憲法第７３条第１号により法律を執行する義務を負うから，たとえ内閣が違憲と判断する法律であっても，その法律を執行しなければならず，また，最高裁判所が違憲と判断した場合でも，国会がその法律を改廃しない限りは，その執行をしなければならない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"2"},{year:"2016",num:"17",subject:"ken",q:`違憲審査に関する次のアからウまでの各記述について，判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい｡
ア．第三者の所有物を没収する言渡しを受けた被告人は，当該第三者の権利を援用して，所有者に対し何ら告知，弁解，防御の機会を与えることなくその所有権を奪うことは憲法に違反する旨主張することはできない。
イ．嫡出でない子の相続分を嫡出子の相続分の２分の１とする民法の規定は，遅くとも同規定が違憲とされた事案の被相続人の相続が開始した時点において，憲法第１４条第１項に違反していたとする最高裁判所の決定は，当該事案限りのものであって，先例としての事実上の拘束性はない。
ウ．日本国民である父と外国人である母との間に生まれた嫡出でない子につき，父母の婚姻及びその認知等所定の要件を備えた場合に届出により日本国籍が取得できる旨定めた国籍法（平成２０年法律第８８号による改正前のもの。以下同じ。）第３条第１項は，憲法第１４条第１項に違反するが，血統主義を補完するために出生後の国籍取得の制度を設けた国籍法の趣旨に照らし，同法第３条第１項を全部無効とする解釈は採り得ない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"221"},{year:"2016",num:"18",subject:"ken",q:`政党が党員にした処分に対する裁判所の審査権に関する次のアからウまでの各記述について，判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい｡
ア．政党の党員が，その政党の存立や秩序維持のために，自己の権利や自由に制約を受けることがあることは当然であり，政党が組織内の自律的運営として党員に対して行った処分の当否については，原則として自律的な解決に委ねるのが相当である。
イ．政党が党員に対して行った処分が，一般市民法秩序と直接の関係を有しない政党の内部的な問題にとどまるものである場合，裁判所は，その処分を司法審査の対象とするか否かについて，処分の内容や制約される党員の権利の性質等を考慮して，個別に判断するべきである。
ウ．政党が党員に対して行った処分が，党員の一般市民としての権利利益を侵害すると認められる場合，その処分は司法審査の対象となり，裁判所は，政党の有する内部規律に関する決定権に照らしてその処分の内容が合理的か否かについて審査するべきである。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"122"},{year:"2016",num:"19",subject:"ken",q:`予算に関し，法律とは別個の国法上の独自の形式であると解する見解（予算法形式説）があるが，次のアからウまでの各記述について，かかる見解からの記述として正しいものには○を，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．後法は前法に優位するという原則に基づき，法律を予算により変更することが可能となり，予算と法律の不一致を合理的に解決できる。
イ．予算案の議決方法は，原則として，法律案に関する憲法第５９条第１項で示されており，憲法第６０条は，その例外的な方法のみを示したものと解される。
ウ．国法の公布について定める憲法第７条第１号に「予算」が掲げられていない以上，予算の公布が憲法上義務付けられていると解することはできない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"7"},{year:"2016",num:"20",subject:"ken",q:`条約に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい｡
ア．締結について国会の承認を要する条約は，条約，規約，協約，協定，議定書，宣言，憲章など名称の如何を問わず，国会による承認の手続のほかに，天皇の国事行為としての批准書の認証を要する。
イ．条約の締結に必要な国会の承認については，予算の場合と同様，衆議院の優越が認められており，両議院が異なる議決をした場合，衆議院で出席議員の３分の２以上の多数で再び可決したときは，条約が承認される。
ウ．憲法は，文書による国家間の合意の全てについて，国会の承認を要すると定めたものではなく，既に有効に成立している条約の委任に基づいた細部の取決めについては，国会の承認まで要しない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"221"},{year:"2016",num:"1",subject:"min",q:`未成年者に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。なお，本問では，婚姻による成年擬制を考慮する必要はない。
ア．未成年者は，養親となることができない。
イ．１５歳に達した未成年者は，遺言の証人となることができる。
ウ．一種又は数種の営業を許された未成年者は，その営業に関しては，成年者と同一の行為能力を有する。
エ．未成年者は，法定代理人の同意を得ずにした法律行為を単独で取り消すことができる。
オ．未成年者は，代理人となることができない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"4"},{year:"2016",num:"2",subject:"min",q:`錯誤に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．法律行為の要素に錯誤が生じ，その錯誤により意思表示をした場合であっても，その意思表示の時から２０年が経過すれば，表意者は，錯誤による意思表示の無効を主張することができない。
イ．相手方の詐欺により法律行為の要素に錯誤が生じ，その錯誤により意思表示をした場合であっても，表意者は，錯誤による意思表示の無効を主張することができる。
ウ．Ａを売主，Ｂを買主とする売買契約に基づく商品の売買代金をＣが立替払する旨の契約がＢＣ間で締結され，ＢのＣに対する立替金償還債務をＤが連帯保証した場合において，Ｄが，ＣＤ間の連帯保証契約締結当時，実際にはＡＢ間の売買契約が存在しないことを知らなかったときは，Ｄは，ＣＤ間の連帯保証契約について錯誤による無効を主張することができる。
エ．他にも連帯保証人となる者がいるとの債務者の説明を信じて連帯保証人となった者は，特にその旨が表示され連帯保証契約の内容とされていたとしても，連帯保証契約について錯誤による無効を主張することができない。
オ．Ａの所有する甲土地の売買契約が，Ｂを売主，Ｃを買主として成立した場合において，Ｃは，ＢＣ間の売買契約締結当時，甲土地がＢの所有するものでなければ売買をしない旨の意思表示をしたとしても，ＢＣ間の売買契約について錯誤による無効を主張することができない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2016",num:"3",subject:"min",q:`意思表示に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．成年被後見人であるＡがＢから日用品を買い受けた場合，Ａが成年被後見人であることをＢが知らなかったとしても，Ａの成年後見人Ｃは，当該日用品の売買契約を取り消すことができる。
イ．ＡがＢから契約解除の意思表示を受けた時にＡが成年被後見人であった場合，Ａの成年後見人ＣがＢの契約解除の意思表示を知るまで，当該契約解除の効力は生じない。
ウ．Ａが隔地者Ｂに対し契約申込みの通知を発した後，Ａが行為能力を喪失した場合，Ｂがその事実を知っていたとしても，当該契約申込みの効力は生じる。
エ．Ａが隔地者Ｂに対し契約解除の通知を発した後，Ａが行為能力を喪失した場合，Ｂがその事実を知っていたとしても，当該契約解除の効力は生じる。
オ．Ａが隔地者Ｂに対し契約承諾の通知を発した後，Ａが行為能力を喪失した場合，Ｂがその事実を知っていたとしても，当該契約は成立する。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2016",num:"4",subject:"min",q:`代理に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．無権代理行為の相手方は，代理人が代理権を有しないことを過失によって知らなかったときは，民法上の無権代理人の責任を追及することができない。
イ．代理権は，代理人が後見開始の審判を受けたときは消滅する。
ウ．成年後見人は，やむを得ない事由があるときでなければ，復代理人を選任することができない。
エ．委任による代理人がやむを得ない事由があるため復代理人を選任した場合，復代理人は，復代理の委任事務を処理するのに必要と認められる費用を支出したときであっても，本人に対し，その費用の償還を直接請求することはできない。
オ．Ａの代理人ＢがＣの詐欺により売買契約を締結した場合，Ｂは当該売買契約を取り消すことができるが，Ａは当該売買契約を取り消すことができない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2016",num:"5",subject:"min",q:`時効の援用に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．抵当不動産の第三取得者は，その抵当権の被担保債権の消滅時効を援用することができる。
イ．先順位抵当権の被担保債権の消滅により後順位抵当権者に対する配当額が増加する場合，当該後順位抵当権者は，先順位抵当権の被担保債権の消滅時効を援用することができる。
ウ．詐害行為の受益者は，詐害行為取消権を行使している債権者の被保全債権について，その消滅時効を援用することができない。
エ．譲渡担保権者が被担保債権の弁済期後に譲渡担保の目的物を第三者に譲渡したときは，その第三者は譲渡担保権設定者が譲渡担保権者に対し有する清算金支払請求権の消滅時効を援用することができる。
オ．建物の敷地所有権の帰属につき争いがある場合において，その敷地上の建物の賃借人は，建物の賃貸人が敷地所有権を時効取得しなければ建物賃借権を失うときは，建物の賃貸人による敷地所有権の取得時効を援用することができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2016",num:"6",subject:"min",q:"物権的請求権に関する次の１から４までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．Ａ所有の甲土地上に権原なく乙建物を所有しているＢがＣに乙建物を売却した場合において，ＣがＢからの乙建物の所有権移転登記を経由していないときは，Ａは，Ｃに対し，乙建物の収去及び甲土地の明渡しを求めることができない。",c2:"２．Ａ所有の甲土地上に権原なく乙建物を所有しているＢがＣに乙建物を売却し，ＣがＢからの乙建物の所有権移転登記を経由した後，ＣがＤに乙建物を売却した場合には，ＤがＣからの乙建物の所有権移転登記を経由していないときであっても，Ａは，Ｃに対し，乙建物の収去及び甲土地の明渡しを求めることができない。",c3:"３．Ａがその所有する甲土地をＢに賃貸し，Ｂが甲土地を自動車の駐車場として利用していたところ，甲土地の賃借権の登記がされない間に，ＡがＣに対し甲土地を売却した場合において，ＣがＡからの甲土地の所有権移転登記を経由していないときは，Ｂは，Ｃからの甲土地の明渡請求を拒むことができる。",c4:"４．Ａ所有の甲土地に隣接する乙土地の所有者であるＢが乙土地を掘り下げたために，両土地の間に高低差が生じ，甲土地が崩落する危険が生じている場合において，その危険が生じた時から２０年を経過した後にＡがＢに対し甲土地の崩落防止措置を請求したときは，Ｂはその請求権の消滅時効を援用することができる。",c5:"",c6:"",c7:"",c8:"",a:"3"},{year:"2016",num:"7",subject:"min",q:`登記請求権及び物権的請求権に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡがＢ所有の甲土地をＢから買い受け，ＢからＡへの所有権移転登記を経由した後に，ＡＢ間の売買契約が解除された場合，Ｂは，Ａに対し，甲土地の所有権移転登記の抹消登記手続を請求することができる。
イ．ＡがＢとの間の売買契約に基づき買い受けた甲土地がＢの所有でなかった場合，Ａは，Ｂに対し，甲土地の所有権移転登記手続を請求することができない。
ウ．動産質権者は，第三者に質物の占有を奪われたときは，質権に基づきその質物の返還を請求することができる。
エ．判例によれば，抵当不動産の所有者Ａから占有権原の設定を受けてこれを占有するＢに対し，抵当権者Ｃが抵当権に基づく妨害排除請求権を行使することができる場合，Ａにおいて抵当権に対する侵害が生じないように抵当不動産を適切に維持管理することが期待できないときには，Ｃは，Ｂに対し，直接自己への抵当不動産の明渡しを請求することができる。
オ．地役権者は，承役地を不法占拠している者に対し，地役権に基づき，自己への承役地の明渡しを請求することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2016",num:"8",subject:"min",q:`甲土地を所有するＡには，その妻Ｂとの間に子Ｃ及びＤがいる。この場合において，Ａが死亡したときの不動産物権変動に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ｃが相続放棄をした後に，甲土地について法定相続分に応じた持分の割合により相続登記をした上で，甲土地の４分の１の持分をＥに売却し，ＣからＥへの持分移転登記を経由した場合，Ｅは，Ｂ及びＤに対し，甲土地について４分の１の持分の取得を主張することができる。
イ．ＡがＥに甲土地を遺贈し，遺言により指定された遺言執行者Ｆがある場合において，Ｂが，甲土地について法定相続分に応じた持分の割合により相続登記をした上で，甲土地の２分の１の持分をＧに売却し，ＢからＧへの持分移転登記を経由したときは，Ｅは，Ｇに対し，甲土地の所有権の取得を主張することができる。
ウ．Ｂ，Ｃ及びＤの遺産分割協議により，甲土地はＢが取得することとされた場合であっても，その後，Ｄが，甲土地について法定相続分に応じた持分の割合により相続登記をした上で，甲土地の４分の１の持分をＥに売却し，ＤからＥへの持分移転登記を経由したときには，Ｅは，Ｂに対し，甲土地について４分の１の持分の取得を主張することができる。
エ．Ａが「甲土地はＣに相続させる」旨の遺言をしていた場合において，Ｂが，甲土地について法定相続分に応じた持分の割合により相続登記をした上で，甲土地の２分の１の持分をＥに売却し，ＢからＥへの持分移転登記を経由したときには，Ｃは，Ｅに対し，甲土地の所有権の取得を主張することができない。
オ．Ｄが甲土地を単独で相続した旨の不実の登記をした上で，甲土地をＥに売却し，ＤからＥへの所有権移転登記を経由した場合，Ｂは，Ｅに対し，甲土地について２分の１の持分の取得を主張することができない。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"3"},{year:"2016",num:"9",subject:"min",q:`動産の即時取得に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａがその占有する時計をＢに売却した場合において，Ｂが，即時取得により当該時計の所有権を取得したことを主張するためには，当該時計の引渡しの当時，自己に過失がなかったことを立証しなければならない。
イ．Ａがその占有する時計をＢに売却した場合において，Ｂが，当該時計の引渡しの当時，当該時計の所有者がＡであることに疑いを持っていたときは，Ｂは即時取得により当該時計の所有権を取得することができない。
ウ．Ａがその占有する時計をＢに売却した場合において，その売買契約の際に，以後ＡがＢのために占有する意思を表示したが，当該時計の引渡しが現実にされていないときは，Ｂは即時取得により当該時計の所有権を取得することができない。
エ．Ａ所有の土地上にある立木を，Ｂが，Ｂ所有の土地上にあるものと過失なく信じて伐採した場合には，Ｂは，即時取得により当該伐木の所有権を取得する。
オ．Ａがその占有する中古自動車をＢに売却し，現実に引き渡した場合において，当該中古自動車につき道路運送車両法による登録がされていたときは，Ｂは，即時取得により当該中古自動車の所有権を取得することができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2016",num:"10",subject:"min",q:`相隣関係及び地役権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．共有物の分割によって袋地（他人の土地に囲まれて公道に通じない土地）が生じた場合，当該袋地の所有者は，囲繞地（袋地を囲んでいる土地）のうち，他の分割者の所有地についてのみ無償の通行権を有するが，その通行権は，他の分割者の所有地について売買がされた場合には消滅する。
イ．袋地の所有権を取得した者は，所有権取得登記を経由していなくても，囲繞地の所有者及び囲繞地につき利用権を有する者に対して，公道に至るため囲繞地を通行する権利を主張することができる。
ウ．甲土地を所有するＡは，甲土地の賃借人であるＢがＣ所有の乙土地の上に通路を開設した場合であっても，Ａがその通路の利用を２０年間続けていたときには，甲土地を要役地，乙土地を承役地とする通行地役権の時効取得を主張することができる。
エ．甲土地を所有するＡと，乙土地を所有するＢとの間で，甲土地を要役地，乙土地を承役地とする通行地役権設定の合意がされたが，通行地役権の設定登記がない場合，その後，Ａから甲土地を譲り受けたＣは，甲土地の所有権移転の登記を経由しても，Ｂに対し，通行地役権を主張することができない。
オ．甲土地をＡとＢが共有する場合において，Ｂが，甲土地を要役地，Ｃ所有の乙土地を承役地とする通行地役権を時効により取得したときは，Ａも，甲土地を要役地，乙土地を承役地とする通行地役権を取得する。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2016",num:"11",subject:"min",q:"担保物権に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．同一不動産上の先取特権，質権及び抵当権の優先権の順位は，当該各担保物権の登記の前後によって決まる。",c2:"２．留置権，先取特権，質権及び抵当権には，いずれも物上代位性が認められる。",c3:"３．留置権は，占有を第三者に奪われた場合も消滅しないが，その場合には，第三者に対抗することができない。",c4:"４．留置権者及び抵当権者は，いずれも目的物の競売を申し立てることができる。",c5:"５．動産先取特権は，動産質権に優先する。",c6:"",c7:"",c8:"",a:"4"},{year:"2016",num:"12",subject:"min",q:`留置権及び質権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．民法上の留置権の成立には，目的物と牽連性のある債権の存在及び債権者による目的物の占有が必要であるが，その債権の成立時に債権者が目的物を占有している必要はない。
イ．質権者が任意に質権設定者に質物を返還した場合，質権は消滅する。
ウ．必要費償還請求権を被担保債権として建物を留置している留置権者は，その建物のための必要費を更に支出した場合，後者の必要費償還請求権を被担保債権として留置権を行使することはできない。
エ．仮登記担保権の実行により不動産の所有権を取得した仮登記担保権者が，債務者に清算金を支払わないでその不動産を第三者に譲渡した場合，債務者は，清算金支払請求権を被担保債権として，譲受人たる第三者に対し，その不動産につき留置権を行使することができる。
オ．質権の目的物を所有する債務者が，質権者に対して被担保債権を消滅させずに目的物の返還を求める訴訟を提起した場合に質権の主張が認められるときは，債務者の請求は棄却されるが，留置権の目的物を所有する債務者が，留置権者に対して被担保債権を消滅させずに目的物の返還を求める訴訟を提起した場合に留置権の主張が認められるときは，引換給付判決がされる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2016",num:"13",subject:"min",q:`先取特権に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．建物の賃貸人は，賃借人が賃料を支払わない場合，敷金を受け取っており，未払賃料額が敷金額の範囲内であっても，賃借人が当該建物に備え付けた動産について先取特権を行使することができる。
イ．建物の賃借人が，家具店から購入して当該建物に備え付けたタンスについて未だ売買代金を支払わず，かつ，建物の賃料の支払も怠っている場合，家具店が当該タンスについて有する先取特権は，建物の賃貸人が当該タンスについて有する先取特権に優先する。
ウ．会社の従業員は，会社が給料を支払っていない場合，その給料債権につき，未払となっている期間にかかわらず，当該会社の総財産について先取特権を有する。
エ．会社が，電器店から購入した冷蔵庫の売買代金を支払わず，かつ，従業員への給料も支払っていない場合，電器店が当該冷蔵庫について有する先取特権は，従業員が当該冷蔵庫について有する先取特権に優先する。
オ．債務者が約定担保物権，留置権及び特別の先取特権の目的とされていない不動産と動産を有している場合，一般の先取特権者は，まず不動産から弁済を受け，なお不足がある場合に動産から弁済を受ける。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"5"},{year:"2016",num:"14",subject:"min",q:"抵当権に関する次の１から４までの各記述のうち，正しいものはどれか。",c1:"１．抵当権は，目的物の交換価値を把握する権利であるから，被担保債権額が抵当不動産の価格を上回っていても，物上保証人が抵当不動産の価格に相当する額を弁済すれば，抵当権は消滅する。",c2:"２．抵当権の被担保債権について不履行があった場合であっても，抵当権の効力は，その後に生じた抵当不動産の果実には及ばない。",c3:"３．抵当権者が第三取得者に対して代価弁済の請求をした場合，第三取得者は，その請求に応じなければならない。",c4:"４．第一順位の抵当権者の被担保債権が弁済により消滅した場合，第二順位の抵当権者は，消滅した第一順位の抵当権の抹消登記手続を求めることができる。",c5:"",c6:"",c7:"",c8:"",a:"4"},{year:"2016",num:"15",subject:"min",q:"Ａは，Ｂに対する６００万円の債権を担保するため，Ｂ所有の甲土地及び乙土地に，第一順位の共同抵当権を有している。Ｃは，Ｂに対する４００万円の債権を担保するため，甲土地に，第二順位の抵当権を有している。この場合に関する次の１から４までの各記述のうち，誤っているものはどれか。なお，各記述において，競売の結果として債権者に配当することが可能な金額は，甲土地につき５００万円，乙土地につき１０００万円であり，また，各債権者が有する債権の利息及び損害金は考慮しないものとする。",c1:"１．Ａが甲土地及び乙土地に設定された抵当権を同時に実行した場合，Ａは甲土地から２００万円，乙土地から４００万円の配当を受け，Ｃは甲土地から３００万円の配当を受けることができる。",c2:"２．先に甲土地に設定された抵当権が実行されてＡが５００万円の配当を受け，その後に乙土地に設定された抵当権が実行された場合，Ａは１００万円の配当を受け，Ｃは３００万円の配当を受けることができる。",c3:"３．先に乙土地に設定された抵当権が実行された場合，Ａは６００万円の配当を受け，その後に甲土地に設定された抵当権が実行されたときには，Ｃは３００万円の配当を受けることができる。",c4:"４．Ａが乙土地に設定された抵当権を放棄した後に，甲土地に設定された抵当権が実行された場合，Ａは２００万円の配当を受け，Ｃは３００万円の配当を受けることができる。",c5:"",c6:"",c7:"",c8:"",a:"3"},{year:"2016",num:"16",subject:"min",q:`根抵当権に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．根抵当権者は，元本確定前の根抵当権の全部又は一部を譲渡することができるが，その場合，根抵当権設定者の承諾を得る必要はない。
イ．元本確定前において，根抵当権の担保すべき債権の範囲の変更をするときは，後順位抵当権者の承諾を得なければならない。
ウ．根抵当権の債務者の変更は，元本確定前に登記をしなかったときは，その変更をしなかったものとみなされる。
エ．根抵当権の設定時に元本確定期日を定めなかった場合，当該根抵当権の設定は無効である。
オ．元本の確定した根抵当権は，確定した元本のほか，その利息についても，極度額を限度として担保する。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2016",num:"17",subject:"min",q:"債権に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．金銭債権は，当事者の意思表示によって，不可分債権とすることはできない。",c2:"２．判例によれば，履行の場所につき別段の定めのない種類債権の目的物は，債務者が債権者の住所に目的物を発送した時に特定する。",c3:"３．不可分債権者の一人が債務者に対して債務を免除した場合であっても，他の不可分債権者は，債務者に対し，債務の全部の履行を請求することができる。",c4:"４．生命又は身体が侵害されたことによって生じた不法行為に基づく損害賠償請求権は，その性質上，第三者に譲渡することはできない。",c5:"５．債権の目的が数個の給付の中から選択によって定まるときは，その選択権は，債権者に属する。",c6:"",c7:"",c8:"",a:"3"},{year:"2016",num:"18",subject:"min",q:`履行の強制に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．判例によれば，不作為を目的とする債務の強制執行として間接強制をするには，債権者において，債務者がその不作為義務に違反するおそれがあることを立証すれば足り，債務者が現にその不作為義務に違反していることを立証する必要はない。
イ．判例によれば，事態の真相を告白して陳謝の意を表明する内容の謝罪広告を新聞紙に掲載すべきことを命ずる判決の執行は，間接強制によらなければならず，代替執行をすることはできない。
ウ．不作為を目的とする債務については，債務者の費用で，債務者がした行為の結果を除去することを裁判所に請求することができる。
エ．工作物の撤去を命ずる判決が確定した場合，その判決の執行は，代替執行によることができるが，間接強制によることはできない。
オ．登記義務者に対し所有権移転登記手続を命ずる判決が確定した場合，その判決の執行は間接強制によらなければならない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2016",num:"19",subject:"min",q:`債権者代位権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．債務者に代位して登記の移転を求める場合には，債権者は，第三債務者から直接自己へ登記を移転すべき旨の請求をすることはできない。
イ．債務者が既に自ら権利を行使している場合には，その行使の方法又は結果の良否にかかわらず，債権者は，その権利について債権者代位権を行使できない。
ウ．債権者Ａが債務者Ｂに代位して，Ｂの有する債権を行使した場合において，第三債務者ＣがＢに対して同時履行の抗弁を主張することができるときであっても，Ｃは，Ａに対しては，同時履行の抗弁を主張することはできない。
エ．ＡのＢに対する１００万円の債権を被保全債権として，ＢのＣに対する５０万円の債権につきＡがＣに対して債権者代位訴訟を提起したときには，Ａは，請求原因において，Ｂの無資力を主張・立証する必要はない。
オ．債権者代位権を行使するためには，被保全債権が代位行使される債権よりも先に成立している必要はない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2016",num:"20",subject:"min",q:`弁済による代位に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．債務者の意思に反することなく有効に弁済した第三者は，弁済によって当然に債権者に代位する。
イ．判例によれば，不動産を目的とする一つの抵当権が数個の債権を担保し，そのうちの一つの債権のみについての保証人が当該債権に係る残債務全額につき代位弁済した場合において，抵当権の実行による売却代金が被担保債権の全てを消滅させるに足りないときには，債権者と保証人は，両者間にその売却代金からの弁済の受領について特段の合意がない限り，その売却代金につき，債権者が有する残債権額と保証人が代位によって取得した債権額に応じて案分して弁済を受ける。
ウ．代位弁済によって，全部の弁済を受けた債権者は，債権に関する証書を代位者に交付すれば足り，自己の占有する担保物を代位者に交付する必要はない。
エ．ＡのＢに対する１２００万円の債権について，保証人Ｃ，物上保証人Ｄ（担保物の価額９００万円），物上保証人Ｅ（担保物の価額３００万円）が存在する場合，Ｃ，Ｄ及びＥの間における弁済による代位の割合は，２対３対１となる。
オ．判例によれば，保証人が債権者に代位弁済した後，債務者から当該保証人に対し一部弁済があったときは，その弁済は，保証人が代位弁済によって取得した求償権だけでなく，債権者に代位して取得した原債権に対しても弁済があったものとして，それぞれに充当される。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2016",num:"21",subject:"min",q:`保証に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．賃借人の保証人は，賃貸借契約が更新された後の賃料債務についても保証債務を負うが，賃料不払によって賃貸借契約が解除された場合，賃借人が目的物を返還しないことにより賃貸人に与えた損害の賠償については保証債務を負わない。
イ．建物賃貸借契約の存続期間中に賃借人の保証人が死亡した場合において，その相続人は，相続開始後に生じた賃借人の債務についても保証債務を負う。
ウ．身元保証契約において，使用者が，被用者に業務上不適任又は不誠実な事跡があって，そのために身元保証人の責任を惹起するおそれがあることを知ったときは，使用者は，遅滞なく身元保証人にその旨を通知しなければならない。
エ．貸金等根保証契約において元本確定期日がその貸金等根保証契約の締結の日から６年を経過する日と定められている場合，その元本確定期日は，その貸金等根保証契約の締結の日から５年を経過する日となる。
オ．根保証契約の元本確定期日前に根保証契約の主たる債務の範囲に含まれる債権が譲渡されたときは，その譲受人は，保証人に対し，当該保証債務の履行を求めることができない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2016",num:"22",subject:"min",q:`契約に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．贈与は，当事者の一方が自己の財産を無償で相手方に与える意思を表示し，相手方が受諾をすることによって，その効力を生ずるから，贈与を受ける者が贈与の申込みをし，相手方がこれを承諾しても贈与の効力は生じない。
イ．売買契約において瑕疵担保責任を免除する特約がある場合であっても，その当時売買の目的物について瑕疵があることを売主が知りながらその瑕疵があることを告げなかったときには，売主は瑕疵担保責任を免れない。
ウ．判例によれば，ＡがＢ所有の甲建物を賃貸権限を有しないＣから賃借している場合において，ＢがＡに甲建物の明渡しを求めたときは，Ａは，甲建物を使用収益することができなくなるおそれが生じたものとして，Ｃに対し，それ以降の賃料の支払を拒絶することができる。
エ．賃借人が適法に賃借物を転貸した場合において，賃貸人が賃借人に対し賃借物の修繕義務を負うときは，賃貸人は，転借人に対しても直接に賃借物の修繕義務を負う。
オ．有償の金銭消費寄託契約において，当事者が返還の時期を定めなかったときは，寄託者は，受寄者に対し相当の期間を定めて催告をしなければ，金銭の返還を請求することができない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2016",num:"23",subject:"min",q:`Ａは，Ｂとの間で，Ａの所有する著名な陶芸家の銘が入った絵皿（以下「甲」という。）をＢに３００万円で売り，代金はＢがＣに支払うとの合意をした。この事例に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡＢ間の売買契約の当時，Ｃが胎児であり，受益の意思表示をすることができなかったときは，その後Ｃが出生したとしてもＡＢ間の売買契約は無効である。
イ．ＡＢ間の売買契約が締結され，Ｃが受益の意思表示をした後，実は甲が贋作であることが判明し，ＢがＡの詐欺を理由に売買契約を取り消した場合，ＣがＡの詐欺について善意無過失であるときは，Ｂは詐欺取消しをＣに対抗することができない。
ウ．Ｃに対して債権を有するＤは，ＡＢ間の売買契約が締結された後，Ｃが受益の意思表示をせず，かつ無資力である場合には，Ｃに代位して受益の意思表示をすることができる。
エ．ＡＢ間の売買契約が締結された後，ＡがＢに甲を引き渡したにもかかわらず，ＢがＣに甲の代金３００万円を支払わない場合には，ＣはＢに催告した上，ＡＢ間の売買契約を解除することができる。
オ．ＡＢ間の売買契約が，ＡのＣに対する宝石の売買契約に基づく代金債務を弁済するために締結され，Ｃが受益の意思表示をした場合において，Ａがその目的をＢに告げていなかったときは，ＡＣ間の宝石の売買契約が無効であっても，Ｃは，Ｂに対し，甲の代金３００万円の請求をすることができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2016",num:"24",subject:"min",q:`売買に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．解約手付の授受された売買契約の買主は，自ら履行に着手した場合でも，売主が履行に着手するまでは，手付を放棄して売買契約の解除をすることができる。
イ．甲土地の売買契約がＡを売主，Ｂを買主として締結され，ＡからＢに甲土地の引渡しがされたが，甲土地がＣの所有であった場合において，Ａが甲土地の権利をＣから取得してＢに移転することができないことを理由にＢが甲土地の売買契約を解除したときは，Ｂは，Ａに対し，その解除までの間の甲土地の使用利益を返還しなければならない。
ウ．建物とその敷地の賃借権とが売買契約の目的とされた場合には，敷地に欠陥があり，賃貸人がその欠陥について修繕義務を負担するときであっても，買主は，売主に対し，その欠陥が売買の目的物の隠れた瑕疵に該当することを理由として瑕疵担保責任を追及することができる。
エ．売買契約の目的物に隠れた瑕疵がある場合において，買主がその瑕疵があることを知った時から１年以内に瑕疵担保による損害賠償の請求をしたときは，その時点で買主が目的物の引渡しを受けた時から１０年を経過していたときであっても，その損害賠償請求権につき消滅時効は完成しない。
オ．建物の強制競売の手続が開始され，借地権の存在を前提として建物の売却が実施されたことが明らかであるにもかかわらず，実際には建物の買受人が代金を納付した時点において借地権が存在しなかったことにより，建物の買受人がその目的を達することができず，かつ，債務者が無資力であるときは，建物の買受人は，強制競売による建物の売買契約を解除した上，売却代金の配当を受けた債権者に対し，その代金の返還を請求することができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2016",num:"25",subject:"min",q:`不動産賃貸借に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．建物所有を目的とする土地賃貸借の賃借人が，その親族名義で所有権保存登記をした建物を借地上に所有していても，当該借地の新取得者に対し借地権を対抗できない。
イ．自己の所有建物を賃貸して賃借人に引き渡した者が，賃貸借契約継続中に当該建物を第三者に譲渡してその所有権を移転した場合には，賃貸人たる地位を譲渡する旨の旧所有者と新所有者間の合意がなければ，賃貸人の地位は新所有者に移転しない。
ウ．対抗力のない賃借権が設定されている土地の所有権の譲渡において，新所有者が旧所有者の賃貸人としての地位を承継するには，賃借人の承諾は必要でない。
エ．土地賃貸借の賃借人は，当該土地の所有権移転に伴い賃貸人たる地位を譲り受けた者に対し，当該土地の所有権移転登記が経由されていないことを理由として，賃料の支払請求を拒むことができない。
オ．建物賃貸借契約において，当該建物の所有権移転に伴い賃貸人たる地位の承継があった場合は，承継の時点で旧賃貸人に対する未払の賃料債務があっても，旧賃貸人に差し入れられた敷金全額についての権利義務関係が新賃貸人に承継される。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"1"},{year:"2016",num:"26",subject:"min",q:`委任契約に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．委任契約を債務不履行により解除したときは，その解除は，将来に向かってのみその効力を生ずる。
イ．準委任契約は，書面でしなくてもその効力を生ずるが，委任契約は，書面でしなければ，その効力を生じない。
ウ．受任者がその委任事務処理の必要上負担した債務を委任者に対し受任者に代わって弁済することを請求する権利については，委任者がこれを受働債権として相殺することはできない。
エ．委任契約は，受任者の死亡によって終了するが，委任者の死亡によっては終了しない。
オ．受任者は，特約がなくとも，委任者に対して報酬を請求することができる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2016",num:"27",subject:"min",q:`民法上の組合に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．組合の債権者は，債権の発生の時に組合員の損失分担の割合を知らなかったときは，個々の組合員に対して等しい割合で権利を行使することができる。
イ．組合の債務者は，その債務と組合員に対する債権とを相殺することができる。
ウ．組合は，不動産について組合名義の所有権移転登記を備えることはできない。
エ．除名された組合員は，持分の払戻しを受けることができない。
オ．組合は，その目的である事業の成功によって解散する。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2016",num:"28",subject:"min",q:`不当利得に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．債務が存在しないにもかかわらず，その事実を過失により知らないで債務の弁済として給付をした者は，その給付したものの返還を請求することができない。
イ．抵当権者は，自己の抵当権が設定された不動産について競売がされた場合には，不動産競売事件の配当期日において配当異議の申出をしなかったとしても，債権又は優先権を有しないにもかかわらず配当を受けた債権者に対し，その者が配当を受けたことによって自己が配当を受けることができなかった金銭相当額の金員について不当利得返還請求をすることができる。
ウ．建物賃借人との間の請負契約に基づき，請負人が建物の修繕工事をしたが，建物賃借人が請負代金を支払わないまま無資力となった場合において，建物賃貸借契約に建物の修繕工事の費用は建物賃借人が負担するとの特約があるときは，建物賃貸人である建物所有者が対価関係なしにその工事に要した財産及び労務の提供に相当する利益を受けたかどうかにかかわらず，建物所有者は，法律上の原因なくしてその利益を受けたことになる。
エ．金銭の交付によって生じた不当利得の利益が存しないことについては，不当利得返還請求権の消滅を主張する者が主張・立証責任を負う。
オ．不当利得における悪意の受益者は，損失を被った者に対してその受けた利益に利息を付して返還しなければならないが，その者になお損害があるときは，不法行為の要件を充足していないとしても，その者に対してその損害を賠償しなければならない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2016",num:"29",subject:"min",q:"不法行為に関する次の１から５までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．不法行為による損害賠償債務は，不法行為の時に，催告を要することなく遅滞に陥る。",c2:"２．被用者の重大な過失により火災が発生した場合において，使用者にその被用者の選任及び監督について過失があるときは，使用者は，その選任及び監督についての過失が重大なものではないことを理由として，その火災により生じた損害を賠償する責任を免れることはできない。",c3:"３．事業の執行について不法行為を行った被用者が損害を賠償する責任を負うときであっても，その被用者を雇用する法人の代表者は，被用者の選任又は監督を現実に担当していなければ，被用者の不法行為について，代理監督者として損害を賠償する責任を負わない。",c4:"４．交通事故の被害者が事故に起因する後遺障害のために労働能力の一部を喪失した後，別の原因により死亡した場合，労働能力の一部喪失による財産上の損害の額の算定に当たっては，交通事故と被害者の死亡との間に相当因果関係があって死亡による損害の賠償をも請求できる場合に限り，死亡後の生活費を控除することができる。",c5:"５．自己の行為の責任を弁識するに足りる知能を備えていない未成年者の行為により火災が発生した場合において，未成年者にその火災につき重大な過失がなかったときは，その未成年者を監督する法定の義務を負う者はその火災により生じた損害を賠償する責任を負わない。",c6:"",c7:"",c8:"",a:"5"},{year:"2016",num:"30",subject:"min",q:`夫婦であるＡとＢの間に未成年の子Ｃがいる場合に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａが成年被後見人である場合には，Ｃに対する親権はＡの成年後見人とＢが共同で行使する。
イ．ＡとＢがいずれも１８歳である場合には，Ｃに対する親権は，Ａの親権者とＢの親権者が共同で行使し，ＡとＢのいずれにも親権者がいない場合には，家庭裁判所がＣについて未成年後見人を選任する。
ウ．Ｃが１８歳である場合には，Ａが死亡し，その後にＢの親権が停止されたときでも，Ｃは，Ｂの同意を得れば婚姻をすることができる。
エ．ＡとＢが離婚し，ＢがＣの親権者となった後に，ＢがＤと再婚し，ＣがＤの養子となった場合には，ＢとＤがＣの親権者となる。
オ．判例によれば，Ａが死亡し，その相続人がＢとＣの二人であり，ＢがＣの親権者である場合において，ＢがＡを被相続人とする相続につき自ら相続放棄をするのと同時にＣを代理してＣについて相続放棄をしたときは，Ｂ及びＣの相続放棄はいずれも有効となる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2016",num:"31",subject:"min",q:`普通養子縁組に関する次の１から４までの各記述のうち，正しいものはどれか。
`,c1:"１．養子は養親と離縁しない限り，他の者の養子になることはできない。",c2:"２．配偶者のある者が未成年者を養子とするには，配偶者の嫡出子を養子とする場合又は配偶者がその意思を表示することができない場合を除き，配偶者とともにしなければならない。",c3:"３．後見人が被後見人を養子にする場合において，その被後見人が未成年者であり，後見人と親族関係にないときは，未成年者を養子とすることについて家庭裁判所の許可を得れば，被後見人を養子とすることについて家庭裁判所の許可を得る必要はない。",c4:"４．未成年者は，父母の共同親権に服する間は，祖父母との間で養子縁組をすることができない。",c5:"",c6:"",c7:"",c8:"",a:"2"},{year:"2016",num:"32",subject:"min",q:`扶養に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．家庭裁判所は，特別の事情があるときは，甥と叔母との間においても，扶養の義務を負わせることができる。
イ．扶養の程度又は方法について協議が調わずに家庭裁判所の審判がされた場合には，その後事情に変更を生じたときであっても，当事者間の協議によってその変更又は取消しをすることはできない。
ウ．判例によれば，扶養権利者を扶養した扶養義務者が他の扶養義務者に対して求償する場合における各自の分担額は，扶養義務者間で協議が調わないときは，家庭裁判所がこれを定めるべきであって，地方裁判所がこれを定めることはできない。
エ．子を認知した父がその子の親権者でない場合には，その父は，その子を扶養する義務を負わない。
オ．扶養をする義務のある者が数人ある場合において，扶養をすべき者の順序について，当事者間に協議が調わないとき，又は協議をすることができないときは，家庭裁判所がこれを定める。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2016",num:"33",subject:"min",q:`共同相続に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．共同相続人であるＡとＢの間で遺産分割協議が成立した場合において，Ａがその協議において負担した債務を履行しないときであっても，ＢはＡの債務不履行を理由に遺産分割協議を解除することはできない。
イ．共同相続人は，既に成立している遺産分割協議の全部を共同相続人全員の合意により解除した上で，改めて遺産分割協議を成立させることはできない。
ウ．共同相続が生じた場合，相続人の一人であるＡは，遺産の分割までの間は，相続開始時に存した金銭を相続財産として保管している他の相続人Ｂに対して，自己の相続分に相当する金銭の支払を求めることはできない。
エ．Ａ及びＢがＣに対して４００万円の連帯債務を負担していたところ，Ａが死亡し，その妻Ｄ及び子Ｅが相続した場合，Ｃは，Ｅに対して，Ａの負担していた４００万円の債務全額の支払を請求することができる。
オ．Ａ，Ｂ及びＣが共同相続した甲土地の共有持分権をＣから譲り受けたＤが，Ａ及びＢとの共有関係の解消のためにとるべき裁判手続は，遺産分割審判である。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"1"},{year:"2016",num:"34",subject:"min",q:`遺言に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．被相続人が遺言で推定相続人を廃除する意思を表示したときは，それにより推定相続人の廃除の効力が生ずる。
イ．判例によれば，相続人による遺言書の破棄又は隠匿は，相続に関して不当な利益を目的とするものでなかったときは，相続人の欠格事由に当たらない。
ウ．被相続人は，遺言により，遺産分割の方法を定めることを第三者に委託することができる。
エ．夫婦は，同一の証書で遺言をすることができる。
オ．複数の遺贈が遺留分を侵害し，遺留分減殺請求権が行使されている場合において，遺言者がその遺言に別段の意思を表示していなかったときは，各遺贈 は ， そ の目的の価額の割合に応じて減殺される。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2016",num:"35",subject:"min",q:`地上権及び土地賃借権に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．地上権と土地賃借権は，いずれも抵当権の目的とすることができない。
イ．土地所有者は，地上権者に対し，土地を使用に適する状態にする義務を負わないが，賃貸人は，賃借人に対し，土地を使用に適する状態にする義務を負う。
ウ．地上権者は，土地所有者の承諾を得ることなく地上権を第三者に譲渡することができるが，賃借人は，賃貸人の承諾又はそれに代わる裁判所の許可を得なければ，土地賃借権を譲渡することができない。
エ．判例によれば，地上権は時効により取得できるが，土地賃借権は時効により取得できない。
オ．土地について有益費を支出し，その価格の増加が現存する場合において，地上権者と賃借人は，いずれも，その選択に従い，支出した金額又は増価額の償還を土地所有者に請求することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2016",num:"36",subject:"min",q:`Ａ所有の甲土地に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａは，ＢからＢの取引上の信用のために，甲土地の所有権を仮装譲渡するように依頼を受け，Ｂへの所有権移転登記を了した。この場合において，Ｂから甲土地を譲り受けたＣが，仮装譲渡について善意のときは，登記を備えていなくてもＡに対して甲土地の所有権取得を主張することができる。
イ．Ａは，ＢからＢの取引上の信用のために，甲土地の所有権を仮装譲渡するように依頼を受け，Ｂへの所有権移転登記を了した。この場合において，Ｂの死亡によりその単独相続人として所有権移転登記を了したＣが，仮装譲渡について善意のときは，Ａに対して甲土地の所有権を主張することができる。
ウ．Ｄは，建物所有を目的としてＡから甲土地を賃借し，甲土地上に乙建物を建築してＤ名義で乙建物の所有権保存登記を有している。Ａは，ＢからＢの取引上の信用のために，甲土地の所有権を仮装譲渡するように依頼を受け，Ｂへの所有権移転登記を了した。この場合において，Ｂから甲土地を仮装譲渡であることについて善意で譲り受けて登記を備えたＣは，仮装譲渡であることをＤが知っていたときは，甲土地の賃借権を否定することができる。
エ．Ａは，ＢからＢの取引上の信用のために，甲土地の所有権を仮装譲渡するように依頼を受け，Ｂへの所有権移転登記を了した。この場合において，Ｂから甲土地を仮装譲渡であることについて善意で譲り受けたＣから更に甲土地を譲り受けて登記を備えたＤは，仮装譲渡について悪意であったとしても甲土地の所有権を取得する。
オ．Ｄは，建物所有を目的としてＡから甲土地を賃借し，甲土地上に乙建物を建築してＤ名義で乙建物の所有権保存登記を有している。Ｄは，ＢからＢの取引上の信用のために，乙建物の所有権を仮装譲渡するように依頼を受け，Ｂへの所有権移転登記を了した。この場合において，仮装譲渡であることを知らなかったＡは，Ｂに対して，賃借権の譲渡を承諾し，地代の支払を求めることができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2016",num:"1",subject:"kei",q:`学生Ａ，Ｂ及びＣは，不真正不作為犯の作為義務違反に関して次の【会話】のとおり検討している。【会話】中の①から⑤までの（ ）内から適切な語句を選んだ場合，正しいものの組合せは，後記１から５までのうちどれか。ただし，【会話】中の「法律上の防止義務」とは，法令，法律行為，条理等に基づき法益侵害を防止する法的義務をいい，また，いずれの事例も結果回避は容易であったとする。
【会 話】
学生Ａ．「甲は，人通りの多い市街地で自動車を運転していた際，誤って乙を跳ねて重傷を負わせたが，怖くなったことから，乙を放置したまま逃走したところ，乙が死亡した。」という事例において，殺人罪の成否に関し，不真正不作為犯の作為義務を検討してみよう。私は，不真正不作為犯の作為義務違反は，法律上の防止義務を負う者が，法益侵害への因果関係を具体的・現実的に支配している状況下で防止措置を採らなかった場合に認められると考えるので，甲には作為義務違反が①（ａ．認められる・ｂ．認められない）ことになる。
学生Ｂ．私は，不真正不作為犯の作為義務違反は，法律上の防止義務を負う者が，既に発生している法益侵害の危険を利用する意思で防止措置を採らなかった場合に認められると考えるので，この事例では，甲には作為義務違反が②（ａ．認められる・ｂ．認められない）ことになる。
学生Ｃ．私は，不真正不作為犯の作為義務違反は，法益侵害に向かう因果の流れを自ら設定した者が，その法益侵害の防止措置を採らなかった場合に認められると考えるので，この事例では，甲には作為義務違反が③（ａ．認められる・ｂ．認められない）ことになる。
学生Ａ．次に，「一人暮らしをしている丙は，自宅に遊びに来ていた丁が帰った後，丁のたばこの火の不始末でカーテンが燃えているのに気付いたが，家に掛けてある火災保険の保険金を手に入れようと考え，そのまま放置して外出したところ，カーテンの火が燃え移って家が全焼した。」という事例において，非現住建造物等放火罪の成否に関し，不真正不作為犯の作為義務を検討してみよう。Ｃ君の立場からだと，丙には作為義務違反が④（ａ．認められる・ｂ．認められない）ことになるよね。
学生Ｂ．先ほど話した私の立場からは，今の事例では，丙には作為義務違反が⑤（ａ．認められる・ｂ．認められない）ことになる。`,c1:"１．①ａ ②ｂ ③ａ ④ａ ⑤ｂ",c2:"２．①ａ ②ａ ③ｂ ④ａ ⑤ｂ",c3:"３．①ｂ ②ａ ③ａ ④ｂ ⑤ｂ",c4:"４．①ｂ ②ｂ ③ａ ④ｂ ⑤ａ",c5:"５．①ｂ ②ｂ ③ｂ ④ａ ⑤ａ",c6:"",c7:"",c8:"",a:"4"},{year:"2016",num:"2",subject:"kei",q:`次のアからオまでの各記述を判例の立場に従って検討し，甲に横領罪が成立する場合には１を，成立しない場合には２を選びなさい。
ア．甲は，自己が所有する不動産を乙に売却したが，乙への所有権移転登記が完了する前に，同不動産を丙に売却し，丙への所有権移転登記を完了した。
イ．甲は，所有権留保の約定付き割賦売買契約に基づき２４回の月賦払いで，自動車販売会社から自動車を購入し，同自動車の引渡しを受けたが，３回分を支払った時点で，自己の借金の担保として，同自動車を金融業者に提供した。
ウ．甲は，乙から盗品を売却するよう依頼され，同盗品を丙に売却したが，その売却代金を着服した。
エ．甲は，自己が所有する不動産を乙に売却したが，乙への所有権移転登記が完了する前に，丙との間で金銭消費貸借契約を締結した事実及びその担保として同不動産に係る抵当権設定契約を締結した事実がないにもかかわらず，同不動産について，丙を権利者とする不実の抵当権設定仮登記を完了した。
オ．甲は，自己が所有する不動産について，乙を権利者とする抵当権を設定したが，その抵当権設定登記が完了する前に，同不動産について，丙を権利者とする抵当権を設定し，その抵当権設定登記を完了した。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"11112"},{year:"2016",num:"3",subject:"kei",q:`次の【事例】に関する後記１から５までの各記述のうち，甲に窃盗罪の従犯の成立を肯定する論拠となり得ないものはどれか。
【事 例】
甲は，乙又は乙の友人が窃盗罪を犯そうとしていることを知り，その手助けのため，乙に対し，同罪の遂行に必要な道具を貸したところ，さらに，乙はその道具を友人丙に貸し，丙がこれを用いて同罪を犯した。なお，丙には同罪の正犯が成立し，乙にはその従犯が成立するものとする。`,c1:"１．従犯には独立した犯罪性が認められる。",c2:"２．従犯の幇助には，教唆者を教唆した者については正犯の刑を科すとする刑法第６１条第２項のような規定がない。",c3:"３．共犯は修正された構成要件に該当する行為であるところ，従犯もその構成要件においては「正犯」となる。",c4:"４．幇助は正犯を容易にすることであるという定義からすると，幇助行為が直接的になされたか，間接的になされたかは必ずしも問われない。",c5:"５．教唆犯に対する幇助行為は従犯として処罰される。",c6:"",c7:"",c8:"",a:"2"},{year:"2016",num:"4",subject:"kei",q:`文書偽造の罪に関する次のアからオまでの各記述を判例の立場に従って検討した場合，Ｘに（ ）内の罪が成立しないものの組合せとして正しいものは，後記１から５までのうちどれか。
ア．医師Ｘは，Ｙに依頼され，Ｙが保険会社に提出するために虚偽の病名を記載した診断書を作成した。（虚偽診断書作成罪）
イ．Ｘは，自動車運転免許の効力停止中に自動車を運転し，速度違反の取締りを受けた際，警察官に対し，あらかじめＹから名義使用の承諾を受けていたことから，Ｙの氏名を名乗り，交通事件原票の供述者欄にＹ名義で署名押印した。（有印私文書偽造罪）
ウ．Ｙの代理人でないＸは，Ｙに無断で，行使の目的をもって，金銭消費貸借契約書用紙に「Ｙ代理人Ｘ」と記載し，その横に「Ｘ」と刻した印鑑を押すなどして，Ｙを債務者とする金銭消費貸借契約書を作成した。（有印私文書偽造罪）
エ．Ｘは，身分証明書として使おうと考え，Ａ県公安委員会が発行したＹの自動車運転免許証の写真をＸの写真に貼り替えた。（有印公文書偽造罪）
オ．Ｘは，Ｙの所有する不動産を勝手に売却しようと考え，Ｙに無断で，行使の目的をもって，不動産の売買契約書用紙に売主として「Ｙ」と記載するなどして，同不動産の売買契約書を作成したが，「Ｙ」と刻した印鑑は押さなかった。（無印私文書偽造罪）`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2016",num:"5",subject:"kei",q:"因果関係に関する次の１から５までの各記述を判例の立場に従って検討し，正しいものを２個選びなさい。",c1:"１．甲が，殺害目的でＶの首を両手で絞め，失神してぐったりとしたＶを死んだものと誤解し，死体を隠すつもりでＶを雪山に運んで放置したところ，Ｖは意識を回復しないまま凍死した。甲がＶの首を両手で絞めた行為とＶの死亡との間には，因果関係がない。",c2:"２．甲が，心臓発作を起こしやすい持病を持ったＶを突き飛ばして尻餅をつくように路上に転倒させたところ，Ｖはその転倒のショックで心臓発作を起こして死亡した。Ｖにその持病があることを甲が知り得なかった場合でも，甲がＶを突き飛ばして路上に転倒させた行為とＶの死亡との間には，因果関係がある。",c3:"３．甲は，Ｖの頸部を包丁で刺し，Ｖは，同刺創に基づく血液循環障害による脳機能障害により死亡した。その死亡するまでの経過は，Ｖは，受傷後，病院で緊急手術を受けて一命をとりとめ，引き続き安静な状態で治療を継続すれば数週間で退院することが可能であったものの，安静にすることなく病室内を歩き回ったため治療の効果が上がらず，同脳機能障害により死亡したというものであった。この場合でも，甲がＶの頸部を包丁で刺した行為とＶの死亡との間には，因果関係がある。",c4:"４．甲は，深夜，市街地にある道幅の狭い車道上に無灯火のまま駐車していた普通乗用自動車の後部トランクにＶを閉じ込めて監禁したが，数分後，たまたま普通乗用自動車で通り掛かった乙が居眠り運転をして同車を甲の普通乗用自動車の後部トランクに衝突させ，Ｖは全身打撲の傷害を負い死亡した。甲がＶをトランクに監禁した行為とＶの死亡との間には，因果関係がない。",c5:"５．甲は，ホテルの一室で未成年者Ｖに求められてその腕に覚せい剤を注射したところ，その場でＶが錯乱状態に陥った。甲は，覚せい剤を注射した事実の発覚を恐れ，そのままＶを放置して逃走し，Ｖは覚せい剤中毒により死亡した。Ｖが錯乱状態に陥った時点で甲がＶに適切な治療を受けさせることによりＶを救命できた可能性が僅かでもあれば，甲がＶを放置した行為とＶの死亡との間には，因果関係がある。",c6:"",c7:"",c8:"",a:"23"},{year:"2016",num:"6",subject:"kei",q:`住居を侵す罪に関する次のアからオまでの各記述を判例の立場に従って検討し，正しい場合には１を，誤っている場合には２を選びなさい。
ア．強盗の意図を隠してＡ方の玄関前で「こんばんは。」と言ったところ，来客と勘違いしたＡから「どうぞお入りください。」と言われてＡ方住居に立ち入った場合，住居侵入罪が成立する。
イ．建造物への立入りが平穏な態様で行われた場合には，管理権者があらかじめ立入り拒否の意思を積極的に明示していない限り，建造物侵入罪が成立することはない。
ウ．平穏を害する態様での住居への立入りであっても，住居権者の同意に基づくものである場合には，住居侵入罪の構成要件には該当するが，違法性が阻却される。
エ．現金自動預払機が設置されている銀行支店出張所は，一般の利用客の立入りが許容されている場所であるので，同機を利用する客のキャッシュカードの暗証番号等を盗撮する目的で立ち入っても，平穏な態様での立入りであれば，建造物侵入罪が成立することはない。
オ．住居権者の意思に反して住居に立ち入った上，その後，退去を求められたにもかかわらず数日間にわたってその住居に滞留した場合には，住居侵入罪だけでなく，不退去罪も成立する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"12222"},{year:"2016",num:"7",subject:"kei",q:"罪数に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．甲は，偽造された１万円札を使って価格１万円の商品をだまし取ろうと考え，事情を知らない商店の店員Ａに対し，同商品の購入を申し込み，代金として同１万円札を渡して，Ａから同商品の交付を受けた。甲には，詐欺罪と偽造通貨行使罪が成立し，これらは観念的競合となる。",c2:"２．甲は，Ａを監禁するために逮捕し，それに引き続きＡを監禁した。甲には，逮捕罪と監禁罪が成立し，これらは牽連犯となる。",c3:"３．甲及び乙は，共同でＡの身体に危害を加える目的で，凶器として用いる鉄パイプをそれぞれ準備して集合し，その後，その目的を遂げるため，鉄パイプで代わる代わるＡの身体を殴打して傷害を負わせた。甲には，凶器準備集合罪と傷害罪が成立し，これらは牽連犯となる。",c4:"４．甲は，Ａを監禁してＡから金品を喝取しようと考え，Ａをビルの一室に閉じ込めて監禁し，その上で，同室内において，監禁により畏怖していたＡに対し，金品の交付を要求しながら脅迫して畏怖させ，Ａから金品を脅し取った。甲には，監禁罪と恐喝罪が成立し，これらは牽連犯となる。",c5:"５．甲は，ＡがＢ銀行に預け入れていた預金を不正に払い戻して金銭を得る目的で，Ａから，Ｂ銀行が発行したＡ名義の預金通帳を窃取した上，Ｂ銀行の窓口において，行員に対し，Ａに成り済まして，同預金通帳を使って預金を不正に払い戻して金銭を得た。甲には，窃盗罪と詐欺罪が成立し，これらは併合罪となる。",c6:"",c7:"",c8:"",a:"5"},{year:"2016",num:"8",subject:"kei",q:"わいせつの罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，誤っているものはどれか。",c1:"１．甲は，人通りの多い駅構内において，自己の性器を露出させたが，実際には，それに気付いた人はいなかった。この場合，甲には公然わいせつ罪は成立しない。",c2:"２．甲は，日本国外で販売する目的で，日本国内において，わいせつな映像が録画されたＤＶＤを所持した。この場合，甲にはわいせつ物有償頒布目的所持罪は成立しない。",c3:"３．甲は，友人乙からの土産に対するお礼として，わいせつな映像が録画されたＤＶＤ１枚を乙にプレゼントした。この場合，甲にはわいせつ物頒布罪は成立しない。",c4:"４．甲は，不特定多数の通行人を勧誘して５名の客を集めた上，自宅であるマンションの一室において，外部との出入りを完全に遮断した状態で，わいせつな映像が録画されたＤＶＤを再生し，その５名の客に有料で見せた。この場合，甲にはわいせつ物公然陳列罪が成立する。",c5:"５．甲は，海水浴場において，不特定多数の者の面前で，乙女の衣服を全てはぎ取るなどして強いてわいせつな行為をした。この場合，甲には，強制わいせつ罪が成立するのみならず，公然わいせつ罪も成立する。",c6:"",c7:"",c8:"",a:"1"},{year:"2016",num:"9",subject:"kei",q:"正当防衛及び緊急避難に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．国家的法益を防衛するための正当防衛が成立する余地はない。",c2:"２．相手方から急迫不正の侵害を受け，第三者の所有物を用いて相手方に反撃し，同所有物を損壊した場合において，その行為が器物損壊罪の構成要件に該当するとき，その行為につき緊急避難が成立する余地はない。",c3:"３．相手方から急迫不正の侵害を受け，これに逆上して相手方に反撃を加えた場合，正当防衛が成立する余地はない。",c4:"４．相手方から急迫不正の侵害を受け，相手方に反撃を加えた場合，その侵害が相手方の過失に基づくものであれば，正当防衛が成立する余地はない。",c5:"５．正当防衛が成立する行為に対しては，正当防衛が成立する余地はない。",c6:"",c7:"",c8:"",a:"5"},{year:"2016",num:"10",subject:"kei",q:"公務執行妨害罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．窃盗犯人甲は，その窃盗行為を目撃した警ら中の制服警察官乙からその窃盗の機会に現行犯逮捕されそうになり，逮捕を免れるため，乙に対して，その反抗を抑圧するに足りる程度の暴行を加えて抵抗し，そのまま逃走した。甲には事後強盗罪が成立し，これに公務執行妨害罪は吸収されるから，同罪は成立しない。",c2:"２．甲は，税務署の職員乙が甲宅において税務調査をしていたところ，乙の近くでその調査を補助していた民間人である丙に対し，「殺すぞ。」などと危害を加える旨申し向け，これにより乙の職務の執行を一時中断させた。甲は乙を直接脅迫したものではないから，甲には公務執行妨害罪は成立しない。",c3:"３．甲は，制服警察官乙から職務質問を受けている丙の右手をつかんで引っ張り，その場から一緒に走って逃走したところ，これを追い掛けた乙が，走りながら，丙の肩をつかもうとして手を伸ばしたが，その肩をつかめずにバランスを崩して路上に転倒した。甲の丙に対する行為は乙に対する暴行とはいえないから，甲には公務執行妨害罪は成立しない。",c4:"４．甲は，警ら中の制服警察官乙が職務質問をしようとしてきたことから，これを免れるため，乙の職務質問開始前に乙に暴行を加え，乙がひるんだ隙に逃走した。乙が職務質問を開始する前に暴行を加えたにすぎないから，甲には公務執行妨害罪は成立しない。",c5:"５．甲は，制服警察官乙から丙が職務質問を受けているのを見て，これをやめさせようと拳大の石塊を乙に向けて投げ，その臀部に命中させたが，乙が職務質問を中断することはなかった。現実に乙の職務の執行を妨害するに至っていないから，甲には公務執行妨害罪は成立しない。",c6:"",c7:"",c8:"",a:"3"},{year:"2016",num:"11",subject:"kei",q:"過失犯に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．監督過失とは, 直接行為者が過失を犯さないように監督する注意義務に違反する過失をいう｡監督過失を認めるには，直接行為者に構成要件的結果が発生することの予見可能性があれば足り，直接行為者を監督すべき立場にある監督者には，構成要件的結果が発生することの予見可能性までは必要とされない。",c2:"２．重過失とは，注意義務違反の程度が著しく，それによって発生した構成要件的結果が重大なものをいう。",c3:"３．信頼の原則は，交通事故の過失犯だけに適用されるものであり，それ以外の過失犯に適用される余地はない。",c4:"４．注意義務に違反して人を負傷させた場合であっても，相手方に重大な過失があったときには,過失相殺が適用されるので，過失の責任を免れることができる。",c5:"５．過失犯の成立に必要な注意義務は，必ずしも法令上の根拠があることを要しない。",c6:"",c7:"",c8:"",a:"5"},{year:"2016",num:"12",subject:"kei",q:`次のアからエまでの各記述を判例の立場に従って検討した場合，正しいものの組合せは，後記１から５までのうちどれか。
ア．Ａの知人Ｂは，料理が趣味であり，自宅のパソコンに料理のレシピのデータを保存していた。Ａは，Ｂと口論をした際，Ｂが大事にしている同データを壊してやろうと思い，同パソコンをたたき壊した。同パソコンを壊したＡの行為について，電子計算機損壊等業務妨害罪は成立せず，器物損壊罪が成立する。
イ．Ａは，Ｂに成り済まし，銀行の窓口行員Ｃに対し，Ｂ名義の口座の預金をＡ名義の口座に振込入金するよう依頼した。Ｃは，ＡをＢと思い込み，コンピュータの端末を操作して，同銀行が業務用に使用している電子計算機にアクセスし，前記依頼のとおり振込入金の処理をした。Ｂに成り済まし，Ｃに振込入金の処理を行わせたＡの行為について，電子計算機使用詐欺罪が成立する。
ウ．Ａは，盗んだ財布の中に，不正に作られた電磁的記録をその構成部分とするクレジットカードが入っていることに気付き，同カードを使用するつもりはなかったが，機会があれば友人に見せようと考え，同カードを自己の財布に入れて持ち歩いていた。同カードを持っていたＡの行為について，不正電磁的記録カード所持罪は成立しない。
エ．Ａは，同僚Ｂのパソコンに，コンピュータウイルスを感染させてＢの業務を妨害しようと考え，コンピュータウイルスを作成したが，自宅のパソコンでその効果を試したところ，市販のウイルス対策ソフトで検出されてしまうことが分かったため，同ウイルスを使用することは断念した。同ウイルスを作成して試した一連のＡの行為について，電子計算機損壊等業務妨害罪の未遂罪が成立する。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．ア エ",c4:"４．イ エ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"2"},{year:"2016",num:"13",subject:"kei",q:`次のアからオまでの各記述における甲の罪責について，判例の立場に従って検討し，（ ）内の犯罪が既遂になる場合には１を，未遂にとどまる場合には２を，既遂にも未遂にもならない場合には３を選びなさい。
ア．甲は，所持金がなかったことから代金を支払わずに食事をしようと考え，飲食店に行って料理を注文し，これを食べた後，代金を請求した店員に対し，財布を忘れたので自宅に取りに帰ると嘘を言ったが，店員にその嘘を見破られた。（詐欺罪）
イ．甲は，Ａを殺害しようと考え，Ｂから致死性の毒薬であると告げられて小瓶入りの液体を購入し，コーヒーに同液体を入れて，これをＡに飲ませたものの，同液体は水であったため，Ａは死亡しなかった。（殺人罪）
ウ．甲は，Ａと同居している自宅を燃やそうと考え，自宅の和室に新聞紙が入った段ボール箱を置き，同新聞紙にライターで点火したが，その直後に帰宅したＡが燃えている同段ボール箱を発見して消火したため，同段ボール箱の直下の畳だけが焼損した。（現住建造物等放火罪）
エ．甲は，駅のホームのベンチで寝ているＡの隣に座ったところ，Ａのズボンのポケットに財布が入っていることに気付き，これを盗もうと考え，手を差し伸べて同ポケットの外側に触れたが，駅員が近付いてきたので，財布に触れることはできなかった。（窃盗罪）
オ．甲は，交通事故を装って保険会社から保険金をだまし取ろうと考え，Ａに依頼して，甲運転の自動車にＡ運転の自動車を衝突させ，警察官に交通事故を申告したが，Ａが警察官から追及されて偽装事故であると認めたため，保険金を請求しなかった。（詐欺罪）`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"13223"},{year:"2016",num:"14",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．甲は，Ａの太ももを蹴って怪我をさせたが，甲には，Ａに傷害を負わせるまでの意思はなかった。甲には傷害罪は成立しない。",c2:"２．甲，乙及び丙が，互いに意思の連絡をすることなく，同一の機会にそれぞれＡに暴行を加えて怪我をさせたところ，その怪我は，乙又は丙いずれかの暴行によるものであり，甲の暴行によるものではなかった。Ａがその怪我により死亡した場合，乙及び丙には傷害致死罪が成立し，甲には傷害罪が成立する。",c3:"３．甲は，四畳半の室内で，Ａを脅す目的で，さやから抜いた日本刀をその面前で数回振り回したところ，誤ってその日本刀の刃先がＡの腕に当たり，Ａに怪我を負わせた。甲には傷害罪は成立しない。",c4:"４．甲は，路上でトラブルとなったＡの顔面を１回殴ったところ，Ａは，その暴行によりバランスを崩し，足下にあった石につまずいて路上に転倒し，頭部を強く打ち付けて怪我をし，これにより数時間後に死亡した。甲がＡの死亡の結果を全く予見していなかった場合でも，甲には傷害致死罪が成立する。",c5:`５．甲は，Ａら数名が殴り合いのけんかをしているところにたまたま通り掛かり,｢もっとやれ｡｣と言ってはやし立てた。Ａらけんかの当事者が怪我をせず，Ａらの暴行が互いの相手に対する暴行罪にとどまる場合でも，甲には現場助勢罪（刑法第２０６条）が成立する。
`,c6:"",c7:"",c8:"",a:"4"},{year:"2016",num:"15",subject:"kei",q:`学生Ａ，Ｂ及びＣは，事実の錯誤に関して，次の【会話】のとおり検討している。【会話】中の①から⑪までの（ ）内から適切な語句を選んだ場合，正しいものの組合せは，後記１から５までのうちどれか。
【会 話】
学生Ａ．Ｘが甲を狙って殺人の故意で拳銃を発射し，甲にかすり傷を負わせ，さらに，その弾丸が偶然に乙に命中して乙を死亡させた事例について考えてみよう。私は，同一の構成要件の範囲内であれば，故意を阻却しないと考え，故意の個数については，①（ａ．故意の個数を問題としない・ｂ．故意の個数を問題とし一個の故意を認める）立場を採ります。ですから，私は，事例の場合，故意犯としては乙に対する殺人既遂罪のみが成立すると考えます。
学生Ｂ．私は，基本的にはＡ君と同じ立場ですが，故意の個数について，②（ｃ．故意の個数を問題としない・ｄ．故意の個数を問題とし一個の故意を認める）立場に立ちます。Ａ君の考えだと，③（ｅ．意図した・ｆ．意図しない）複数の客体に既遂の結果が発生した場合，いずれの客体に故意犯を認めるのか不明だからです。
学生Ｃ．Ｂ君の立場は，④（ｇ．罪刑法定主義・ｈ．責任主義）に反することになりませんか。私は，この原則を尊重し，⑤（ｉ．客体の錯誤・ｊ．方法の錯誤）の場合には故意を認めますが，⑥（ｋ．客体の錯誤・ｌ．方法の錯誤）の場合には故意を認めるべきではないと思います。ですから，私は，事例の場合，乙に対する殺人既遂罪は成立しないと考えます。
学生Ａ．でも，Ｃ君の立場では，方法の錯誤と客体の錯誤との明確な区別が可能であることが前提となりますね。また，未遂犯や過失犯を処罰する規定の有無によっては，処罰の範囲が不当に⑦（ｍ．狭まる・ｎ．広がる）ことになると思います。一方で，Ｂ君の立場では，処断刑が不当に重くなりませんか。
学生Ｂ．私は，甲に対する罪と乙に対する罪の関係を⑧（ｏ．併合罪・ｐ．観念的競合）と考えますので，処断刑はＡ君の立場による場合と同一となります。
学生Ａ．でも，複数の客体に既遂の結果が発生した場合，⑨（ｑ．意図した・ｒ．意図しない）客体についての⑩（ｓ．故意犯・ｔ．過失犯）を，刑を⑪（ｕ．重くする・ｖ．軽くする）方向で量刑上考慮するとなると，やはり問題ではないでしょうか。`,c1:"１．①ｂ ②ｃ ③ｆ ④ｇ ⑤ｊ ⑥ｋ ⑦ｍ ⑧ｐ ⑨ｑ ⑩ｓ ⑪ｖ",c2:"２．①ａ ②ｄ ③ｅ ④ｇ ⑤ｊ ⑥ｋ ⑦ｎ ⑧ｏ ⑨ｒ ⑩ｔ ⑪ｖ",c3:"３．①ｂ ②ｃ ③ｆ ④ｈ ⑤ｉ ⑥ｌ ⑦ｍ ⑧ｐ ⑨ｒ ⑩ｓ ⑪ｕ",c4:"４．①ａ ②ｄ ③ｅ ④ｈ ⑤ｉ ⑥ｌ ⑦ｎ ⑧ｏ ⑨ｑ ⑩ｓ ⑪ｕ",c5:"５．①ｂ ②ｃ ③ｆ ④ｈ ⑤ｉ ⑥ｌ ⑦ｎ ⑧ｐ ⑨ｒ ⑩ｔ ⑪ｕ",c6:"",c7:"",c8:"",a:"3"},{year:"2016",num:"16",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．甲は，警察官から職務質問をされそうになったのでその場から急いで立ち去ろうと考え，たまたま路上に駐車されていた他人所有の自動車に乗り込み，適当な場所で乗り捨てるつもりで，同自動車を運転してその場から走り去った。この場合，甲には，不法領得の意思が認められ，窃盗罪が成立する。",c2:"２．甲は，タクシーの売上金を奪おうと考えて，乗客を装ってタクシーに乗り込み，行き先を指定して人気のない場所に誘導した上，同所で，乗車料金を請求してきた運転手の首元に鋭利なガラス片を突き付けて売上金を渡すよう要求したが，同運転手から抵抗されて売上金を手に入れることができず，そのままその場から立ち去った。この場合，甲には強盗未遂罪のみが成立する。",c3:"３．甲は，視力回復の効果が全くない飲料について，その効果が絶大で入手困難なものと偽って,信じた客にこれを販売し，その代金として現金の交付を受けたが，その販売価格は適正，妥当なものであった。この場合，甲には詐欺罪は成立しない。",c4:"４．甲は，乙がその同居の親族から盗んできたカメラを，盗品であると知りながら乙から購入した。この場合，乙は，窃盗罪についての刑が免除されることから，甲には盗品等有償譲受け罪は成立しない。",c5:"５．甲は，乙所有の土地について，価格が暴落すると偽って，これを信じた乙との間で，時価の半額で同土地を買い受ける旨の売買契約を締結した。この場合，その売買契約が成立したことのみをもって，甲には詐欺既遂罪が成立する。",c6:"",c7:"",c8:"",a:"1"},{year:"2016",num:"17",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討し，甲に（ ）内の罪名の間接正犯が成立しないものを２個選びなさい。",c1:"１．甲は，是非弁別能力を有する１２歳の長男乙に対し，強盗の犯行方法を教示し，その際に使う凶器を提供して強盗を実行するよう指示したが，その指示は乙の意思を抑圧するものではなく，乙は，自らの意思により強盗の犯行を決意し，甲から提供された凶器を使って，状況によって臨機応変に対処して強盗を実行した。（強盗罪）",c2:"２．医師ではない甲は，妊婦乙からの依頼を受けて乙への堕胎手術を開始したが，その最中に乙の生命が危険な状態に陥ったため，医師丙に依頼し，胎児を乙の母体外に排出させた。（同意堕胎罪）",c3:"３．公務員ではない甲は，公証人乙に対して虚偽の申立てをし，事情を知らない乙をして，公文書である公正証書の原本に虚偽の記載をさせた。（虚偽公文書作成罪）",c4:"４．甲は，事情を知らない新聞社の従業員乙に依頼して，同社の新聞紙上に，丙に無断で丙名義の事実証明に関する広告文を掲載させた。（私文書偽造罪）",c5:"５．甲は，乙所有の建材を自己の所有物であると偽って，事情を知らない丙に売却し，丙をして,乙の建材置場から当該建材を搬出させた。（窃盗罪）",c6:"",c7:"",c8:"",a:"13"},{year:"2016",num:"18",subject:"kei",q:"逃走の罪に関する次の１から５までの各記述を判例の立場に従って検討し，正しいものを２個選びなさい。",c1:"１．勾留状によって拘置所に勾留されていた甲は，面会者から密かに差し入れられた合い鍵を用いて房の扉を開け，拘置所から逃走した。甲には加重逃走罪の既遂罪が成立する。",c2:"２．確定判決によって刑務所に収容されていた甲は，同房に服役中の乙と逃走する旨の相談をしていたところ，ある日，房の扉が施錠されていないことに気付き，房から出て刑務所から逃走したが，乙は思いとどまり，房の外に出なかった。甲には加重逃走罪の既遂罪が成立する。",c3:"３．勾留状によって拘置所に勾留されていた甲は，隣の房に勾留されていた乙に依頼して乙の同房者丙を殴ってもらい，拘置所職員が乙の行動を制止している隙に拘置所から逃走した。甲には加重逃走罪の既遂罪が成立する。",c4:"４．確定判決によってＡ刑務所に収容されていた甲は，Ｂ刑務所への護送中，護送車両から逃走した。甲には単純逃走罪の既遂罪が成立する。",c5:"５．甲は，勾留状によって拘置所に勾留されていた乙を逃走させるため，乙の房の合い鍵を乙に差し入れたが，乙は拘置所から逃走しなかった。甲には逃走援助罪の既遂罪が成立する。",c6:"",c7:"",c8:"",a:"45"},{year:"2016",num:"19",subject:"kei",q:"共犯に関する次の１から５までの各記述を判例の立場に従って検討し，誤っているものを２個選びなさい。",c1:"１．甲がＡの殺害を乙に教唆したところ，乙はＡの殺害を丙に教唆し，さらに，丙はＡの殺害を丁に教唆し，丁がＡを殺害した。甲には，殺人罪の教唆犯が成立する。",c2:"２．乙は，路上で，Ａの頭部を殴って転倒させ，Ａに脳挫傷の傷害を負わせたが，その直後に駆けつけた甲は，Ａが乙の暴行によって倒れて苦しんでいることを知り，Ａの抵抗が困難になっている状態を利用してＡに暴行を加えようと考え，乙と意思を通じ，代わる代わるＡの腹部を蹴り，腹部に打撲傷の傷害を負わせた。甲には，脳挫傷の傷害についても乙との傷害罪の共同正犯が成立する。",c3:"３．甲は，乙からＡの殺害計画を打ち明けられ毒薬の入手を依頼されたことから，毒薬を購入して乙に渡したが，乙は，毒薬での殺害計画を変更し，Ａを包丁で刺して殺害した。甲には，殺人予備罪の共同正犯が成立する。",c4:"４．甲と乙は，Ａ方に強盗に入ることを計画し，それぞれ包丁を持ってＡ方に侵入し，Ａを包丁で脅した上，室内を物色していたところ，家人Ｂ，Ｃに犯行を目撃され，甲はＢに捕まったが，乙は逮捕を免れるためＣの腕を包丁で切り付けて傷害を負わせた。甲には，住居侵入罪のほか強盗致傷罪の共同正犯が成立する。",c5:"５．暴力団組員乙は，対立する暴力団組長Ａを殺害することを決意し，誰にも犯行の決意を打ち明けることなく，小刀を持ってＡ方に向かったところ，乙の舎弟である甲は，乙の決意を察し，仮に乙がＡから反撃されそうになった場合は，自分がＡを殺害しようと考え，乙に何も告げることなく，拳銃を持ってＡ方付近に先回りして隠れていたが，乙は，玄関先に出てきたＡを小刀で一突きして殺害した。甲には，乙の殺人罪の従犯が成立する。",c6:"",c7:"",c8:"",a:"25"},{year:"2016",num:"20",subject:"kei",q:`次の【事例】に関する後記アからエまでの各【記述】を判例の立場に従って検討した場合，正しいものの組合せは，後記１から５までのうちどれか。
【事 例】
　甲は，内縁の妻Ａと同居していたところ，遊興費に窮し，Ａ所有のドレス２０着及び指輪１個と，Ａ管理のＡ名義のクレジットカード１枚（その規約上，会員である名義人のみが利用でき，他人への譲渡，貸与等が禁じられ，また，加盟店は，利用者が会員本人であることを善良な管理者の注意義務をもって確認することが定められている。）を，Ａの部屋から盗み出した。
　甲は，丙にドレス及び指輪の売却を仲介してもらおうと考え，これらの盗品を丙方に運ぼうとした。しかし，甲は，ドレスの数が多く一人で運ぶのが困難であったため，乙に対し，ドレスと指輪が盗品であることを話した上で，丙宅への運搬を手伝ってほしいと頼んだ。乙がこれを了解したので，甲及び乙は，指輪とドレスのうち１０着を甲が，残りのドレス１０着を乙が，それぞれ運転する自動車に載せて丙宅へ運ぶこととし，これらの盗品を丙宅へ運んだ。
　丙は，ドレス及び指輪を，甲がＡから盗んできたものであることを承知した上で甲から預かり，甲からの依頼どおりに売却先を探すこととしたが，指輪についてはＡが母親の形見として大切にしていたものであることを知っていたことから，高値でＡに売り付けようと考え，後日，Ａに対し，代金５０万円で指輪を売却し，その売却代金を甲に渡した。
　また，甲は，Ａから盗んだクレジットカードを担保として丁から現金３０万円を借りたが，その際，丁に対し，「これはＡ名義のクレジットカードだけど，Ａから使用を許されており，お前がこのカードを利用して買物をしても，その利用代金はＡにおいて決済される。」と伝えた。その後，甲が丁に対して金を返さなかったことから，丁は，甲の話を信じ，デパートにおいて，Ａに成り済まして同カードを用いて腕時計１個を購入した。
【記 述】
ア．甲がＡの指輪を盗んだことにつき，甲の行為は窃盗罪に該当するが，Ａは甲の内縁の妻であるから，刑法第２４４条第１項により刑が免除される。
イ．乙が盗品のドレス１０着を，窃盗犯人である甲が指輪とドレス１０着を，それぞれ丙宅まで運搬したことにつき，乙は甲と共同してこれら盗品を運搬したのであるから，乙にはドレス２０着全てと指輪につき盗品等運搬罪が成立する。
ウ．丙がＡを相手方として指輪の売却をあっせんしたことにつき，Ａは窃盗の被害者であるが，丙には盗品等処分あっせん罪が成立する。
エ．丁がＡ名義のクレジットカードで腕時計を購入したことにつき，丁は，Ａから同カードの使用を許されており，かつ，自らの使用に係る同カードの利用代金がＡにおいて決済されるものと信じていたので，丁に詐欺罪は成立しない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"3"},{year:"2015",num:"1",subject:"ken",q:`国家公務員法第１０２条第１項にいう「政治的行為」の意義について判断した最高裁判所の二つの判決（最高裁判所平成２４年１２月７日第二小法廷判決，刑集６６巻１２号１３３７頁及び同１７２２頁）に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．「政治的行為」とは，公務員の政治的な行為一般ではなく，公務員の職務の遂行の政治的中立性を損なうおそれが，観念的なものにとどまらず，現実的に起こり得るものとして実質的に認められるものを指す。
イ．管理職的地位にある公務員が政党機関紙の配布といった殊更に一定の政治的傾向を顕著に示す行動に出た場合には，その指揮命令や指導監督を通じてその部下等の職務の遂行や組織の運営にもその傾向に沿った影響を及ぼすことになりかねず，「政治的行為」に該当する。
ウ．公務員の職務の遂行の政治的中立性を損なうおそれが認められるか否かは，諸般の事情を総合して判断する必要があるが，公務員の政治的な行為が勤務外で行われた場合には，そのおそれは存在しないと考えられる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"2"},{year:"2015",num:"2",subject:"ken",q:`法の下の平等に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法第１４条第１項の「社会的身分」とは，人が社会において占める継続的な地位をいうから，高齢であることはこれに当たらないので，町長が町職員の余剰を整理する際，高齢のみを基準として対象者を選択しても，平等原則には反しない。
イ．併給調整条項の適用により，障害福祉年金を受けることのできる者とそうでない者との間に児童扶養手当の受給に関して差別が生じても，両給付が基本的に同一の性格を有し，併給調整に立法裁量があることなどに照らすと，合理的理由のない不当なものとはいえない。
ウ．租税法の定立は立法府の政策的，技術的判断に委ねるほかないから，この分野における取扱いの区別は，立法目的が正当であり，かつ，区別の態様が立法目的との関連で著しく不合理であることが明らかでない限り，憲法第１４条第１項に違反するとはいえない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"211"},{year:"2015",num:"3",subject:"ken",q:`信教の自由に関する次のアからエまでの各記述について，誤っているもの二つの組合せを，後記１から６までの中から選びなさい。
ア．信教の自由には内心における信仰の自由が含まれるが，信仰の自由は，内心にとどまるものである限り，制約が一切許されない。
イ．宗教とは無関係な行政上の要請により，宗教を信じているか，いずれの宗教団体に属しているかなど，個人の信仰に関する申告をさせることも，内心における信仰の自由の侵害となる。
ウ．宗教的行為の自由は，憲法第２０条第１項前段ではなく，「宗教上の行為」等に「参加することを強制されない」と規定する同条第２項により保障される。
エ．特定の宗教の宣伝や共同で宗教的行為を行うことを目的とする団体を結成する自由は，信教の自由ではなく，憲法第２１条第１項の結社の自由として保障される。`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．イとウ",c5:"５．イとエ",c6:"６．ウとエ",c7:"",c8:"",a:"6"},{year:"2015",num:"4",subject:"ken",q:`報道の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．法廷内における被告人の容ぼう等につき，手錠，腰縄により身体の拘束を受けている状態が描かれたイラスト画を被告人の承諾なく公表する行為は，被告人を侮辱し，名誉感情を侵害するものというべきで，その人格的利益を侵害する。
イ．報道機関の取材源は，一般に，それがみだりに開示されると将来にわたる自由で円滑な取材活動が妨げられることになるため，民事訴訟法上，取材源の秘密については職業の秘密に当たるので，当該事案における利害の個別的な比較衡量を行うまでもなく証言拒絶が認められる。
ウ．少年法第６１条が禁止する推知報道に該当するか否かは，少年と面識のある特定多数の者あるいは少年の生活基盤としてきた地域社会の不特定多数の者が，少年を当該事件の本人であると推知することができるかを基準にして判断すべきである。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"122"},{year:"2015",num:"5",subject:"ken",q:`通信の秘密に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．通信の秘密の保障の目的は，私生活の自由を保護することにあるだけでなく，公権力による通信内容の探索の可能性を断つことにより自由な表現伝達手段を確保することにもある。
イ．通信の秘密は，特定の他者との通信の秘密を保障するものであり，はがき，手紙のほか，電話，電信もその保障の対象に含まれるが，インターネット上の通信はこれに含まれない。
ウ．通信の秘密の保障は，通信の内容のみならず，通信の当事者の氏名，住所，通信の日時，通信の個数など通信に関する全ての事項に及ぶ。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"3"},{year:"2015",num:"6",subject:"ken",q:`営業の自由に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．営業の自由を市場における私的な独占からの自由と捉える見解によれば，事業者に対し一定の取引分野での競争を不当に制限する行為を禁止する立法は，自由を促進する立法と位置付けられる。
イ．営業の自由が歴史的には公序として形成されてきたものであるとしても，憲法は「国家からの自由」を中心に人権を保障することを第一義とするものであるから，営業の自由を憲法第２２条第１項で保障される人権と解することは可能である。
ウ．営業の自由の内容を開業・廃業と営業活動に分け，前者は憲法第２２条第１項，後者は憲法第２９条により保障されるとする見解は，営業の自由の保障根拠を憲法第２２条第１項のみに求める見解と比べて，営業の自由を広く保障する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"112"},{year:"2015",num:"7",subject:"ken",q:`憲法第２５条に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法第２５条第１項で定める救貧施策においては国民の最低限度の生活を保障しなければならないが，同条第２項で定める防貧施策においては広い立法裁量が認められると解する立場によっても，救貧施策は生活保護法による公的扶助に限定されないと解することはできる。
イ．憲法第２５条第１項は，将来に向けた政策の指針を定めたもので，国民の権利を保障するものではないと解するプログラム規定説によっても，裁判所が同項に基づいて個々の法律について国民の生存権を侵害するか否かを判断できる。
ウ．いわゆる朝日訴訟においては，生活保護法に基づく生活扶助を廃止するとともに医療扶助を変更する旨の保護変更決定について，これを認容した厚生大臣の裁決自体の裁量権の逸脱・濫用が争われたのではなく，生活保護法自体が憲法第２５条第１項に違反するとして争われた。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"122"},{year:"2015",num:"8",subject:"ken",q:`学校教育に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法第２６条が子どもの学習権を保障していることから，教育の内容及び方法を誰がいかにして決定し得るかという問題に対する一定の結論が当然に導き出されるわけではない。
イ．親の教育の自由は，主として家庭教育等，学校外での教育において現れるものであり，学校選択の自由はこれに含まれない。
ウ．国が一定の教育水準確保のために定立する学習指導要領は，生徒側の教育内容に対する批判能力の程度及び学校選択の余地等に鑑みれば，高等学校では法的拘束力を持たない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"4"},{year:"2015",num:"9",subject:"ken",q:`財産権の保障に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法第２９条第１項は財産権の不可侵性を規定しているが，同項が保障するのは，私有財産制ではなく，個人が現に有する財産を侵害されないということである。
イ．憲法第２９条第２項は財産権の内容は法律で定めるとするが，入会権のような慣習に基づく伝統的な権利も憲法上の財産権に含まれる。
ウ．憲法第２９条第３項は私有財産を正当な補償の下に公共のために用いることができるとするが，こうした規定は歴史的には福祉国家理念を背景にして制定されるに至った。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"212"},{year:"2015",num:"10",subject:"ken",q:`国民の義務に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法第２６条第２項は保護する子女に普通教育を受けさせる国民の義務を定めているが，これは子どもが普通教育を受ける義務を負うことも意味するから，宗教上の信念に基づき授業内容の一部を受講しないと，子どもが同項違反の責任を問われる。
イ．憲法第２７条第１項は国民の勤労義務を定めるが，これを道徳的な訓示規定と解すると，勤労の能力ある者がその機会があるのに勤労しない場合に生活保護を受給できないとする制度を設けることは，同項の訓示規定としての性格に反し憲法上許されないこととなる。
ウ．憲法第３０条の定める国民の納税義務は憲法上の義務であるが，その義務は法律によって具体化されるので，国民が租税法規に従って税金を納付しない場合でも，法的には租税法規違反にとどまる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"7"},{year:"2015",num:"11",subject:"ken",q:`近代立憲主義に関する次のアからウの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．近代立憲主義とは，成文憲法に基づいて国家運営を行おうとする思想ないし実践を意味する。それは，イギリスにおける１２１５年のマグナカルタによって確立された。
イ．１７８９年のフランス人権宣言は近代立憲主義の内容を簡潔に示している。それによれば，「憲法」というためには，「権力の分立」が定められていれば足りる。
ウ．１９世紀の「自由国家」と形容される時代には自由の保障が強調されていた。しかし，その自由の保障のために，違憲立法審査権を裁判所に認める国は例外的であった。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"221"},{year:"2015",num:"12",subject:"ken",q:`二院制に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．日本国憲法が二院制を採用したのは，異なる選挙制度や議員の任期が異なること等によって，多角的かつ長期的な視点からの民意を反映させ，衆議院と参議院との権限の抑制，均衡を図り，国政の運営の安定性，継続性を確保しようとしたものと解される。
イ．衆議院と参議院の関係について，日本国憲法は，衆議院に法律案及び予算の先議権を認めているが，法律案及び予算について両議院の意見が対立した場合には，両院協議会を開かなければならないとしている。
ウ．参議院議員選挙に関して，判例は，半数改選という憲法上の要請，そして都道府県を単位とする参議院の選挙区選挙における地域代表的性格という特殊性を重視して，都道府県を各選挙区の単位とする仕組みを維持することを是認し続けている。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"122"},{year:"2015",num:"13",subject:"ken",q:`憲法第４１条の「唯一の立法機関」に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．「唯一の立法機関」の意味の一つは，国会中心立法の原則である。それは，形式的意味の立法が専ら国会で法律という形式で定められなければならないという原則である。
イ．国会中心立法の原則には例外がある。その例外は，憲法に特別の定めがある最高裁判所規則の制定だけである。
ウ．「唯一の立法機関」の意味の一つは，国会単独立法の原則である。それは，国会による立法は，国会以外の機関の参与を必要としないで成立するという原則である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"221"},{year:"2015",num:"14",subject:"ken",q:`委任立法に関する次のアからエまでの各記述について，誤っているもの二つの組合せを，後記１から６までの中から選びなさい。
ア．憲法第７３条第６号は委任命令を一般的に認めているが，多数説は，専門技術性と迅速な対応の必要性から，権利や義務に関して法律の内容の詳細規定の命令への委任を認めている。
イ．憲法第４１条からして，命令に委任する場合には，白紙委任が禁止される。さらに，学説は，当該法律の本質をなす部分や重要事項に関して議会が定めることを求める。
ウ．判例は，被勾留者には一般市民としての自由が制約されることを理由に，１４歳未満の者との接見を原則として認めていなかった当時の監獄法施行規則を委任の趣旨の範囲内とした。
エ．判例は，インターネット販売が認められる医薬品を一定の医薬品に限定した薬事法施行規則について，法律の委任の範囲を逸脱した違法なものであるとした。`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．イとウ",c5:"５．イとエ",c6:"６．ウとエ",c7:"",c8:"",a:"2"},{year:"2015",num:"15",subject:"ken",q:`国政調査権の行使に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．国政調査権は，各議院を構成する個々の国会議員についても認められている権能であるので，個々の国会議員も行使することができる。
イ．内閣は，各議院から国政調査権に基づき報告又は記録の提出を求められた場合には，国家の重大な利益に悪影響を及ぼすときであっても拒むことができない。
ウ．各議院は，国政調査権の行使として，公務員のみならず私人に対しても，証人として出頭して証言することを求めることができる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"7"},{year:"2015",num:"16",subject:"ken",q:`選挙に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．衆議院議員選挙における１人別枠方式については，人口の少ない県に居住する国民の意思をも十分に国政に反映させるという目的は合理的であるが，その結果生じる投票価値の較差が過大であるから違憲である。
イ．国民の選挙権を制限するためには，そのような制限をすることがやむを得ないと認められる事由がなければならないが，選挙権の保障には投票をする機会の保障は含まれないため，投票機会の確保のための措置を採るか採らないかについては広汎な立法裁量が認められる。
ウ．衆議院議員選挙では，小選挙区の候補者のほか，所属する候補者届出政党にも選挙運動が認められており，無所属の候補者は政見放送ができないなど非常に不利であるが，他に十分な手段があるため，政策・政党本位の選挙制度の実現のための立法裁量の範囲を逸脱していない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"221"},{year:"2015",num:"17",subject:"ken",q:`内閣及び内閣総理大臣に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法第６５条第１項は，「行政権は，内閣に属する」と規定している。行政権とは全ての国家作用のうちから立法作用と司法作用を除いた残りの作用であるとすると，立法作用と司法作用以外の全ての国家作用について内閣が自ら行うことが必要となる。
イ．内閣は，行政権の行使につき，国会に対し連帯して責任を負う。これは，特定の国務大臣がその所管事項に関して単独の責任を負うことを否定するものではなく，個別の国務大臣に対する衆議院及び参議院の問責決議も認められるが，それらには法的効力はない。
ウ．内閣総理大臣は，内閣という合議体において，単なる同輩中の首席ではなく，首長の立場にあり，その他の国務大臣の任免権を専権として有する。したがって，文民統制の観点から内閣総理大臣は文民でなければならないとしても，その他の国務大臣が文民である必要はない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"6"},{year:"2015",num:"18",subject:"ken",q:`合憲限定解釈に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．合憲限定解釈に対しては，立法者の意思を超えて法文の意味を書き換えてしまう可能性があり，立法権の簒奪につながりかねないという問題がある。
イ．合憲限定解釈に対しては，当該解釈が不明確であると，犯罪構成要件の保障的機能を失わせ，憲法第３１条違反の疑いを生じさせるという問題がある。
ウ．判例は，集会の自由の規制が問題となった広島市暴走族追放条例について，条例の改正が立法技術上困難でないから，あえて合憲限定解釈をする必要はないとした。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"2"},{year:"2015",num:"19",subject:"ken",q:`憲法第８９条後段の「公の支配」の意義に関し，「国又は地方公共団体が当該事業の予算を定め，その執行を監督し，さらにその人事に関与するなど，その事業の根本的方向に重大な影響を及ぼすことのできる権力を有する」ことを要すると解する見解があるが，次のアからウまでの各記述について，かかる見解と同じ立場からの記述には○を，異なる立場からの記述には×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．慈善，教育，博愛の事業を行うのは，通常，法律に基づき国の監督を受ける公益法人であり，学校法人も公益法人として法的規制を受けるので，「公の支配」に属する。
イ．現行法の私立学校に対する助成については，監督官庁の権限が報告を徴したり，勧告を行ったりすることに限られているので，違憲の疑いがある。
ウ．憲法第８９条後段の立法趣旨は，私的事業の自主性を確保するために公権力による干渉の危険を除こうとすることにある。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"5"},{year:"2015",num:"20",subject:"ken",q:`地方自治に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法上の「地方公共団体」とは，沿革的に見ても，また現実の行政の上においても，相当程度の自主立法権，自主行政権，自主財政権等，地方自治の基本的権能を付与された地域団体であれば足り，共同体意識を持っているという社会的基盤が存在する必要はない。
イ．憲法上の条例制定権は当然には罰則制定権を含まず，刑罰権設定は本来国家事務であり，条例中に罰則を設けるには法律の授権が必要であるが，条例は，行政府の命令と異なり，民主的立法であり実質的に法律に準ずるもので，条例への罰則の委任は一般的・包括的委任で足りる。
ウ．地方公共団体は，地方自治の本旨に従い，その財産を管理し事務を処理し及び行政を執行する権能を有し，その遂行のためには，その財源を自ら調達する権能を有することが必要であるから，地方自治の不可欠の要素として，課税権の主体となることが憲法上予定されている。\f`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"221"},{year:"2015",num:"1",subject:"min",q:`法律行為に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．代理権を有しない者が本人のためにすることを示して契約を締結した場合，本人がその契約の相手方に対して追認を拒絶する旨を表示することは，法律行為に当たる。
イ．債権者が債務者に対してその債務を免除する旨を表示することは，法律行為に当たる。
ウ．債権者が債務者に対してあらかじめ弁済の受領を拒絶する旨を表示することは，法律行為に当たる。
エ．２人が互いに同種の目的を有する債務を負担する場合において，双方の債務が弁済期にあるときに，債務者の一方が相手方に対してその対当額について相殺をする旨を表示することは，法律行為に当たる。
オ．債務の消滅時効が完成する前に，債務者が債権者に対してその債務の承認をする旨を表示することは，法律行為に当たる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2015",num:"2",subject:"min",q:"意思表示に関する次の１から４までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．Ａは，その所有する甲土地についてＢと仮装の売買契約を締結し，その旨の所有権移転登記をした。その後，Ｂがこの事情を知らないＣに甲土地を売却した場合，ＢからＣへの所有権移転登記がされていないときでも，Ａは，Ｃに対し，ＡＢ間の売買契約の無効を主張することができない。",c2:"２．Ａは，その所有する甲土地についてＢと仮装の売買契約を締結し，その旨の所有権移転登記をした。その後，Ｂがこの事情を知らないＣから５００万円を借り入れたが，その返済を怠ったことから，Ｃが甲土地を差し押さえた場合，甲土地の差押えの前にＣがこの事情を知ったとしても，Ａは，Ｃに対し，ＡＢ間の売買契約の無効を主張することができない。",c3:"３．Ａの代理人であるＢは，その代理権の範囲内でＡを代理してＣから１０００万円を借り入れる旨の契約を締結したが，その契約締結の当時，Ｂは，Ｃから借り入れた金銭を着服する意図を有しており，実際に１０００万円を着服した。この場合において，Ｃが，その契約締結の当時，Ｂの意図を知ることができたときは，Ａは，Ｃに対し，その契約の効力が自己に及ばないことを主張することができる。",c4:"４．ＡのＢに対する甲土地の売買契約の意思表示について法律行為の要素に錯誤があった場合でも，Ａに自らの錯誤を理由としてその意思表示の無効を主張する意思がないときには，Ｂは，Ａの意思表示の無効を主張することはできない。",c5:"",c6:"",c7:"",c8:"",a:"2"},{year:"2015",num:"3",subject:"min",q:`代理に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａの代理人として土地を購入する権限を与えられたＢが，Ｃとの間で甲土地の売買契約を締結する際に，Ｂの従業員Ｄに命じて甲土地の売買契約書に「Ａの代理人Ｂ」という署名をさせた場合でも，ＡＣ間に売買契約の効力が生ずる。
イ．Ａの代理人として土地を購入する権限を与えられたＢが，Ａの許諾を得て復代理人Ｃを選任し，ＣがＤとの間で甲土地の売買契約を締結した場合，ＣがＤに対しＡのために売買契約を締結することを示しただけで，自らが代理人Ｂによって選任された復代理人であることを示さなかったときは，ＡＤ間に売買契約の効力は生じない。
ウ．Ａの代理人として土地を購入する権限を与えられたＢが，ＣのＢに対する詐欺により，Ａのためにすることを示してＣとの間で甲土地の売買契約を締結した場合，Ａは，その売買契約を取り消すことができない。
エ．Ａの代理人として土地を購入する権限を与えられたＢが，Ｃから甲土地を売却する権限を与えられてＣの代理人にもなり，Ａ及びＣを代理してＡＣ間の甲土地の売買契約を締結した場合，Ｂが双方代理であることをＡ及びＣの双方にあらかじめ通知したときは，ＡＣ間に売買契約の効力が生ずる。
オ．Ａの代理人として土地を購入する権限を与えられたＢが，Ａのためにすることを示さずにＣとの間で甲土地の売買契約を締結した場合，ＢがＡのために売買契約を締結することをＣが知ることができたときは，ＡＣ間に売買契約の効力が生ずる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2015",num:"4",subject:"min",q:"表見法理に関する次の１から４までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．ＡがＢに対しＡ所有の甲土地を売却する代理権を与えていないのに，その代理権を与えた旨をＣに表示し，ＢがＡの代理人としてＣとの間で甲土地の売買契約を締結した場合，Ａは，ＣがＢに代理権がないと知っていたこと，又は過失により知らなかったことを立証しなければ，甲土地の引渡債務を免れることができない。",c2:"２．ＡがＢと通謀してＡ所有の甲土地につきＡＢ間で売買予約がされた旨仮装し，Ｂへの所有権移転登記請求権保全の仮登記をした後，Ｂが偽造書類を用いて仮登記を本登記にした上で，善意無過失のＣに甲土地を売却し，Ｃへの所有権移転登記をした場合，Ｃは，Ａに対し，甲土地の所有権をＣが有することを主張することができる。",c3:"３．ＡがＢと通謀してＡ所有の甲土地につきＡＢ間で売買契約がされた旨仮装し，Ｂへの所有権移転登記をした後，Ｂが甲土地をＣに売却した場合，Ａは，ＣがＡＢ間の売買契約が虚偽表示であることを知っていたことを立証しなければ，Ｃに対し，甲土地の所有権をＡが有することを主張することができない。",c4:"４．ＡがＢに対しＡ所有の甲土地を売却する代理権を与えていないのに，Ｂが甲土地につきＡからＢへの所有権移転登記をした上で，その事情について善意無過失のＣに甲土地を売却した場合，Ａが甲土地の登記済証及びＡの印鑑登録証明書をＢに預けたままにし，Ａの面前でＢがＡの実印を登記申請書に押捺するのを漫然と見ていたなど，Ａの帰責性の程度が自ら外観の作出に積極的に関与した場合やこれを知りながらあえて放置した場合と同視し得るほど重いときは，Ｃは，Ａに対し，甲土地の所有権をＣが有することを主張することができる。",c5:"",c6:"",c7:"",c8:"",a:"3"},{year:"2015",num:"5",subject:"min",q:`条件及び期限に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．医学部に入学したＡがＢから金銭を借り入れた際に「借入金は私が医師になった時に返済する。」と約束していたが，その後，Ａの父親が急死し，Ａがその父親の事業を継がざるを得なくなったため医学部を中途退学した場合，Ａは，Ｂに対する借入金の返還債務を免れる。
イ．家屋の賃貸人Ａがその家屋の賃借人Ｂに対し，Ｂが滞納している賃料を所定の期限までに支払わない場合にはその家屋の賃貸借契約を解除する旨の意思表示をすることは，単独行為に条件を付することになっても許される。
ウ．ＡがＢに対し「将来気が向いたら，私が所有する甲自動車を贈与する。」と約束したとしても，その贈与契約は無効である。
エ．ＡがＢに対し「Ｂが医学部の卒業試験に合格したら，私が所有する甲自動車を贈与する。」と約束した場合，卒業試験の前にＡが甲自動車を第三者Ｃに売却したときは，Ｂは，Ａに対し，それにより生じた損害の賠償を請求することができる。
オ．ＡがＢに対し「私の所有する乙土地の購入希望者をＢが見つけることができ，Ｂの仲介により売買契約に至れば，その仲介報酬を支払う。」と約束した場合，Ａが，Ｂの見つけてきた乙土地の購入希望者との間で，Ｂの仲介によらずに直接乙土地の売買契約を結んだときは，Ｂは，Ａに対し，仲介報酬を請求することができない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2015",num:"6",subject:"min",q:"消滅時効の中断に関する次の１から４までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．時効期間が経過する前に，被保佐人である債務者が保佐人の同意を得ることなくその債務を承認した場合，その債権の消滅時効は中断しない。",c2:"２．時効期間が経過する前に，債権者が第三者に債権を譲渡し，債務者がその債権の譲渡について債権の譲受人に対し承諾をした場合，その債権の消滅時効は中断する。",c3:"３．時効期間が経過する前に，債務者が債権者の代理人に対し支払猶予の申入れをした場合，その債権の消滅時効は中断する。",c4:"４．時効期間が経過する前に，債務者が債権者に対し債務の承認をした場合，被担保債権について生じた消滅時効中断の効力を，その債権の物上保証人が否定することは許されない。",c5:"",c6:"",c7:"",c8:"",a:"1"},{year:"2015",num:"7",subject:"min",q:`不動産登記に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡがＡ所有の甲土地をＢに売却し，その旨の所有権移転登記がされた後，Ｂは，甲土地をＣに売却し，その旨の所有権移転登記がされた。その後，ＡがＢの強迫を理由としてＢに対する売買の意思表示を取り消した場合，Ａは，Ｃに対し，甲土地の所有権がＡからＢに移転していないことを主張することができる。
イ．ＡがＡ所有の甲土地をＢに売却し，その旨の所有権移転登記がされた後，Ａは，Ｂの詐欺を理由としてＢに対する売買の意思表示を取り消した。その後，ＢがＣに甲土地を売却し，Ｃへの所有権移転登記をした場合，Ａは，Ｃに対し，甲土地の所有権がＢからＡに復帰したことを主張することができない。
ウ．Ａは亡Ｂから亡Ｂの所有していた乙土地の遺贈を受けたが，その旨の所有権移転登記をしていなかった。その後，亡Ｂの共同相続人の一人であるＣの債権者Ｄが乙土地についてＣの相続分に相当する持分を差し押さえ，その旨の登記がされた。この場合，Ａは，Ｄに対し，乙土地の所有権を亡Ｂから取得したことを主張することができる。
エ．ＡがＢ所有の乙土地を占有し，取得時効が完成した場合において，その取得時効が完成する前に，Ｃが乙土地をＢから譲り受けると同時に乙土地の所有権移転登記をしたときは，Ａは，Ｃに対し，乙土地の所有権を時効取得したことを主張することができる。
オ．ＡがＢ所有の乙土地を占有し，取得時効が完成した場合において，その取得時効が完成する前に，Ｃが乙土地をＢから譲り受け，その取得時効の完成後にＣが乙土地の所有権移転登記をしたときは，Ａは，Ｃに対し，乙土地の所有権を時効取得したことを主張することができない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2015",num:"8",subject:"min",q:`登記請求権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａの所有する甲土地がＡからＢ，ＢからＣに順次譲渡された場合において，Ｂは，甲土地の所有権を喪失していても，Ａに対し，ＡからＢへの所有権移転登記手続を請求することができる。
イ．Ａの所有する甲土地がＡからＢ，ＢからＣに順次譲渡されたにもかかわらず，登記名義がなおＡに残っている場合，Ｃは，Ａに対し，ＡからＣに対する真正な登記名義の回復を原因とする所有権移転登記手続を請求することはできない。
ウ．Ａの所有する甲土地についてＡからＢ，ＢからＣへの所有権移転登記がされている場合，それぞれの所有権移転登記に対応する権利変動がないときは，Ａは，Ｃに対し，直接自己への所有権移転登記手続を請求することはできない。
エ．Ａの所有する甲土地についてＡからＢ，ＢからＣへの各売買を原因とする所有権移転登記がされている場合，ＡからＢ，ＢからＣへの各売買がいずれも無効であるときは，Ａは，Ｃに対し，ＢからＣへの所有権移転登記の抹消登記手続を請求することができるが，Ｂは，Ｃに対し，ＢからＣへの所有権移転登記の抹消登記手続を請求することはできない。
オ．Ａが，Ｂに売却した甲土地について所有権移転登記手続をしない間に死亡し，Ａの共同相続人であるＣとＤがＡの代金債権と所有権移転登記義務を相続した場合，Ｄがその所有権移転登記義務の履行を拒絶しているため，Ｂが同時履行の抗弁権を理由として代金を支払わないときは，Ｃは，Ｂに対する自己の代金債権を保全するため，Ｂに代位して，ＢのＤに対する所有権移転登記手続請求権を行使することはできない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2015",num:"9",subject:"min",q:`Ａが３分の１，Ｂが３分の２の持分で甲土地を共有している場合に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａは，Ｂに無断で，甲土地の自己の持分について抵当権を設定することができない。
イ．Ａに無断でＢが甲土地を農地から宅地にする造成工事を行い，甲土地の形状を変更している場合，Ａは，Ｂに対し，その工事の差止めを求めることができる。
ウ．Ａに無断でＢが甲土地上に乙建物を建て，甲土地全体を単独で使用している場合，Ａは，Ｂに対し，自己の持分割合に応じ，甲土地の地代相当額の支払を請求することができる。
エ．甲土地の利用方法についてＡとＢが協議したが意見が一致せず，Ａに無断でＢがＣと甲土地の賃貸借契約を締結し，Ｃが甲土地を占有している場合，Ａは，Ｃに対し，甲土地全体の明渡しを求めることができる。
オ．ＡがＢに無断で甲土地全体を単独で占有している場合であっても，Ｂは，自分の共有持分が過半数を超えることを理由として，Ａに対し，甲土地全体の明渡しを求めることはできない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2015",num:"10",subject:"min",q:`共有物の分割に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．遺産分割前において共同相続人の一人から遺産を構成する不動産の共有持分権を譲り受けた第三者が，その不動産の共同所有関係の解消を求めるためには，共有物分割訴訟によらなければならない。
イ．共有物の分割請求をした共有者が多数の場合，分割請求をされた共有者の持分の限度で現物を分割し，その余は分割請求をした共有者の共有として残す方法により共有物の分割をすることはできない。
ウ．共有物を共有者のうちの一人の単独所有又は数人の共有とし，これらの者から他の共有者に対して持分の価格を賠償させる方法により共有物の分割をすることはできない。
エ．裁判所は，共有物の現物分割が物理的に不可能な場合のみでなく，社会通念上適正な現物分割が著しく困難な場合にも，共有物の競売を命ずることができる。
オ．数個の共有建物を一括して分割の対象とし，共有者各自が各個の建物の単独所有権を取得する方法により共有物の分割をすることはできない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2015",num:"11",subject:"min",q:`地役権に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．地役権者がその権利の一部を行使しないときは，その部分のみが時効によって消滅する。
イ．要役地に隣接しない土地を承役地として地役権を設定することはできない。
ウ．要役地が数人の共有に属する場合において，要役地の共有者の一人は，その持分につき，その土地のために存する地役権を放棄することができる。
エ．要役地が数人の共有に属する場合において，その一人のために時効の中断があるときは，その中断は，他の共有者のためにも，その効力を生ずる。
オ．要役地の所有者は，地役権を要役地から分離して譲渡することができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2015",num:"12",subject:"min",q:`先取特権に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．一般の先取特権者は，債務者の財産の中の動産が売却されて買主にその引渡しがされた場合，債務者が取得する代金債権について，その払渡しの前に差押えをしなくても先取特権を行使することができる。
イ．宿泊客が旅館に持ち込んだ手荷物がその宿泊客の所有物でない場合，旅館の主人は，その手荷物がその宿泊客の所有物であると過失なく信じたとしても，その手荷物について先取特権を行使することができない。
ウ．家屋の賃借人がその家屋に備え付けた家具が競売された場合において，その執行費用に関する先取特権は，その家屋の賃貸人が賃料債権に基づき家具について有する先取特権に優先する。
エ．動産売買の先取特権の目的物について質権が設定された場合，動産売買の先取特権が質権に優先する。
オ．判例によれば，日用品の供給の先取特権は，債務者が法人のときは認められない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2015",num:"13",subject:"min",q:"Ａが，Ａ所有の甲動産を占有するＢに対し，所有権に基づく甲動産の引渡請求訴訟を提起したところ，Ｂは，Ａの夫Ｃから質権の設定を受けその質権を即時取得した旨の反論をした。この場合に関する次の１から４までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．占有者が占有物について行使する権利は，適法に有するものと推定されるから，Ｂは，質権の即時取得の成立を基礎付ける事実を主張・立証する必要はない。",c2:"２．Ｂは，Ｃとの間で質権設定の合意をし，その合意に基づいてＣから甲動産の引渡しを受けたことを主張・立証する必要がある。",c3:"３．Ｂは，質権の被担保債権の発生原因事実を主張・立証する必要はなく，Ａが，質権の被担保債権の消滅原因事実を主張・立証する必要がある。",c4:"４．Ｂは，Ｃに甲動産の所有権がないことについてＢが善意であることを主張・立証する必要はないが，Ｂに過失がないことを主張・立証する必要がある。",c5:"",c6:"",c7:"",c8:"",a:"2"},{year:"2015",num:"14",subject:"min",q:`譲渡担保に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．不動産が譲渡担保の目的とされ，譲渡担保権の設定者から譲渡担保権者への所有権移転登記がされた場合において，譲渡担保権の設定者は，その譲渡担保権に係る債務の弁済と，その不動産の譲渡担保権者から譲渡担保権の設定者への所有権移転登記手続との同時履行を主張することができない。
イ．対抗要件を備えた集合動産譲渡担保権の設定者が，その目的とされた動産につき通常の営業の範囲を超える売却処分をし，その動産を占有改定の方法により買主に引き渡した場合，買主はその動産の所有権を取得することができる。
ウ．不動産の譲渡担保において，債務者が弁済期にその譲渡担保権に係る債務を弁済しない場合，譲渡担保権者がその不動産を譲渡したときは，譲受人は確定的にその不動産の所有権を取得し，債務者は債務を弁済してその不動産を受け戻すことができない。
エ．不動産が譲渡担保の目的とされ，譲渡担保権の設定者から譲渡担保権者への所有権移転登記がされた場合において，その譲渡担保権に係る債務の弁済により譲渡担保権が消滅した後にその不動産が譲渡担保権者から第三者に譲渡されたときは，譲渡担保権の設定者は，登記がなければ，その所有権をその不動産を譲り受けた第三者に対抗することができない。
オ．集合動産の譲渡担保権者は，その譲渡担保権の設定者が通常の営業を継続している場合であっても，その目的とされた動産が滅失したときは，その損害をてん補するために設定者に支払われる損害保険金の請求権に対して物上代位権を行使することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2015",num:"15",subject:"min",q:`債務不履行による損害賠償に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．消費貸借の約定利率が法定利率を超える場合，借主が返済を遅滞したときにおける損害賠償の額は，約定利率により計算される額であり，貸主は，約定利率により計算される額を超える損害が生じていることを立証しても，その賠償を借主に請求することはできない。
イ．家屋の賃借人が賃貸借契約の終了後もその家屋を賃貸人に返還しない場合，賃貸人は，その賃貸借契約で定められた賃料に相当する額の損害賠償を賃借人に請求することができるが，賃貸人がその賃貸借契約の終了後に別の者との間でその家屋の賃貸借契約を締結し，その賃貸借契約で定められた賃料が従前の賃料を上回るときであっても，その新たな賃料に基づく損害賠償を賃借人に請求することはできない。
ウ．営業用店舗の賃貸人が修繕義務の履行を怠ったために賃借人がその店舗で営業をすることができなかった場合，賃借人は，これにより生じた営業利益の喪失による損害の賠償を，債務不履行により通常生ずべき損害として請求することができるが，賃借人が営業をその店舗とは別の場所で再開するなどの損害を回避又は減少させる措置を何ら執らなかったときは，そのような措置を執ることができた時期以降に生じた損害の全ての賠償を請求することはできない。
エ．当事者が債務不履行について損害賠償の額を予定している場合，裁判所は，その損害賠償の予定額を増減することはできず，過失相殺により賠償額を減額することもできない。
オ．当事者が損害賠償の方法について金銭以外の物による旨の合意をしても，その効力は認められない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"1"},{year:"2015",num:"16",subject:"min",q:"債権者が債務者に対する債権を保全する必要がある場合に関する次の１から４までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．離婚に伴う財産分与請求権は，協議又は審判によって具体化されるまではその範囲及び内容が不確定・不明確であるため，これを被保全債権として債権者代位権を行使することはできない。",c2:"２．債務者が第三者に対してした意思表示が錯誤によるものであったことを認めているときは，債務者自らが錯誤無効を主張する意思がなくても，債権者は，債務者が第三者に対してした意思表示の無効を主張することができる。",c3:"３．債権者が，債務者に対する金銭債権に基づき，債務者の第三債務者に対する金銭債権を代位行使する場合，債権者は，自己の債務者に対する債権額の範囲においてのみ，債務者の第三債務者に対する金銭債権を行使することができる。",c4:"４．債権者は，債務者が第三者に対して負う債務について，債務者に代わってその消滅時効を援用することができない。",c5:"",c6:"",c7:"",c8:"",a:"4"},{year:"2015",num:"17",subject:"min",q:`ＡがＢに対して融資をしていたところ，Ｂがその所有する建物をＢの妻Ｃに贈与し，その旨の所有権移転登記手続をしたことから，Ａが詐害行為取消訴訟を提起した。この場合に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａは，ＢからＣへの所有権移転登記の抹消登記手続を請求することができるほか，ＣからＡへの所有権移転登記手続を請求することもできる。
イ．Ａは，ＢからＣへの所有権移転登記の抹消登記手続を請求することなく，ＢＣ間の贈与契約の取消しを請求することができる。
ウ．Ａは，詐害行為の取消しを請求するに際しては，Ｂ及びＣの両方を被告として訴えを提起しなければならない。
エ．Ａは，ＢＣ間の贈与契約が債権者であるＡを害すること及びそのことをＢ及びＣが知っていたことを主張・立証しなければならない。
オ．Ａは，ＢＣ間の贈与契約の当時Ｂが無資力であったことを主張・立証すれば足り，詐害行為取消訴訟の口頭弁論終結時までにＢの資力が回復したことは，Ｃが主張・立証しなければならない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2015",num:"18",subject:"min",q:"ＡがＢに金銭を貸し付け，ＣがＡに対しＢの借入金債務を保証したが，ＢがＡに対する借入金の返還を怠ったことから，Ａが，Ｃに対して保証債務の履行を請求する訴えを提起した場合に関する次の１から４までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．Ｃは，保証債務の消滅時効を自ら援用しなくても，Ｂが主たる債務の消滅時効を援用したことを抗弁として主張することができる。",c2:"２．Ｃは，Ｂが主たる債務の消滅時効を援用していない場合でも，主たる債務の消滅時効を援用して抗弁を主張することができる。",c3:"３．Ｃが保証債務の消滅時効を援用して抗弁を主張するのに対し，主たる債務の消滅時効が完成する前にＢがその債務の一部を弁済したことは，時効中断の再抗弁となる。",c4:"４．Ｃが主たる債務の消滅時効を援用して抗弁を主張するのに対し，主たる債務の消滅時効が完成する前にＣが保証債務の一部を弁済したことは，時効中断の再抗弁となる。",c5:"",c6:"",c7:"",c8:"",a:"4"},{year:"2015",num:"19",subject:"min",q:`債務の履行と弁済に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．安全配慮義務の違反を理由とする債務不履行に基づく損害賠償債務は，その義務の違反により損害が発生した時から遅滞に陥る。
イ．弁済をすべき場所について別段の意思表示がない場合には，特定物の引渡しは，債権発生の時にその物が存在した場所においてしなければならないが，その他の弁済は債権者の現在の住所においてしなければならない。
ウ．弁済の費用について別段の意思表示がない場合には，債権者と債務者の双方が等しい割合でその費用を負担するが，債権者が住所の移転その他の行為によって弁済の費用を増加させたときは，その増加額は債権者が負担する。
エ．Ａの所有する甲土地を，Ｂが建物の所有を目的として賃借し，Ｂが甲土地上に乙建物を建築して乙建物をＣに賃貸した場合，ＢがＡに対し甲土地の賃料の支払を拒絶しているときは，Ｃは，Ａに対し甲土地の賃料の支払をすることができる。
オ．金銭消費貸借の借主が，元本，利息及び費用の総額に足りない金銭を貸主に弁済する場合には，それをまず元本に充当することを指定することができ，貸主が直ちに異議を述べない限り，その充当の指定は効力を有する。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2015",num:"20",subject:"min",q:`相殺に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡのＢに対する甲債権が差し押さえられた後，ＢがＡに対する乙債権を取得した場合，Ｂは，乙債権を自働債権として甲債権と相殺することができる。
イ．賃貸人が賃料の不払を理由として賃貸借契約を解除した後，賃借人が解除後に存在を知った賃貸人に対する債権と賃料債務を相殺により消滅させたとしても，賃貸借契約の解除の効力には影響がない。
ウ．継続的契約の当事者が，その契約が終了したときに債権債務が残っていた場合は相殺することをあらかじめ合意していたとしても，その合意は無効である。
エ．債権が不法行為によって生じたときは，その債権者は，その債権を自働債権として相殺することができる。
オ．注文者は，請負人に対する目的物の瑕疵の修補に代わる損害賠償債権を自働債権として，請負人の注文者に対する報酬債権と相殺することはできない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2015",num:"21",subject:"min",q:`同時履行の抗弁に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．判例によれば，家屋の賃貸借契約の締結時に敷金が差し入れられた場合，その賃貸借契約の終了に伴う賃借人の家屋明渡債務と賃貸人の敷金返還債務とは，同時履行の関係にない。
イ．双務契約における一方の債権が第三者に譲渡され，譲渡人が債務者に譲渡の通知をした後その債務者が遅滞なく異議を述べなかった場合，その債務者は，その債権の譲受人からの債務の履行の請求に対し，同時履行の抗弁を主張することができない。
ウ．売買契約における双方の債務の履行期が同じである場合において，その履行期が経過したときであっても，一方の当事者は，自己の債務について弁済又はその提供をしなければ，債務不履行に基づく契約の解除をすることができない。
エ．売買契約の解除により両当事者が互いに原状回復義務を負う場合，両当事者の原状回復義務は同時履行の関係にない。
オ．ＡがＢに対し美術品を売却した際，ＢのＡに対する美術品の代金債務とＡのＢに対する美術品の引渡債務の履行期を同一とすることが合意された場合，Ａは，ＢのＡに対する美術品の代金債務についてその履行期が到来しても，ＡのＢに対する美術品の引渡債務について弁済又はその提供をしていないときは，ＡのＢに対する美術品の代金債権とそれとは別にＢがＡに対して有する貸金債権とを対当額で相殺することができない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2015",num:"22",subject:"min",q:"契約締結後に債務の履行に障害が生じた場合に関する次の１から４までの各記述のうち，誤っているものはどれか。",c1:"１．特定物の売買契約において，売主の責めに帰すべき事由により目的物引渡債務が履行不能になった場合，その売買契約の効力は法律上当然に失われ，買主は，代金を支払う義務を免れる。",c2:"２．建物の賃貸借契約において，賃借人の責めに帰すべき事由により建物が滅失した場合，その賃貸借契約は法律上当然に終了し，賃借人は，それ以降賃料を支払う義務を負わない。",c3:"３．建物の建築を目的とする請負契約において，当事者双方の責めに帰することができない事由により建築途中の建物が滅失した場合であっても，請負人は，新たに建物を建築し，これを完成させなければ，注文者に対し，請負代金全額の支払を請求することはできない。",c4:"４．有償寄託契約において，受寄者の責めに帰することができない事由により寄託物の返還債務が履行不能になった場合，受寄者は，寄託者に対し，約定の存続期間のうち履行不能になった後の期間についての報酬の支払を求めることができない。",c5:"",c6:"",c7:"",c8:"",a:"1"},{year:"2015",num:"23",subject:"min",q:`賃貸借契約及び消費貸借契約に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．賃貸借契約において賃貸人が目的物の所有者である場合，その目的物の所有権は賃借人に移転しないが，消費貸借契約において貸主が目的物の所有者である場合，その目的物の所有権は借主に移転する。
イ．賃貸借契約は，諾成契約であるから，当事者間の合意によって成立するが，消費貸借契約は，要物契約であるから，当事者間で，当事者の一方が金銭その他の物を引き渡すことを約し，相手方がその引渡しを受けた物と種類，品質及び数量の同じ物をもって返還することを約したとしても，その合意は無効である。
ウ．賃貸借契約における賃料の支払時期も，利息付きの消費貸借契約における利息の支払時期も，当事者の合意により自由に定めることができる。
エ．賃貸借契約において当事者が期間を定めなかった場合に貸主が解約の申入れをしたときは，借主は，法定の期間内は目的物を返還しなくても遅滞の責任を負わないが，消費貸借契約において当事者が返還の時期を定めなかった場合に貸主が返還を請求したときは，借主は，直ちに目的物を返還しなければ遅滞の責任を負う。
オ．賃貸借契約において当事者が期間を定めなかった場合，借主はいつでも解約の申入れをすることができるが，消費貸借契約において当事者が返還の時期を定めなかった場合，無利息の消費貸借契約のときに限り，借主はいつでも解約の申入れをすることができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2015",num:"24",subject:"min",q:"賃貸借及び使用貸借に関する次の１から４までの各記述のうち，使用貸借にのみ当てはまるものはどれか。なお，本問において，賃貸借の賃貸人及び使用貸借の貸主は，いずれも「貸主」といい，賃貸借の賃借人及び使用貸借の借主は，いずれも「借主」という。",c1:"１．借主は，目的物の通常の必要費を負担する。",c2:"２．借主は，契約又はその目的物の性質によって定まった用法に従い，目的物の使用及び収益をしなければならない。",c3:"３．貸主が死亡した場合，契約は当然に終了する。",c4:"４．借主は，契約が終了した場合，目的物を原状に復さなければならないが，借主が目的物に附属させた物を収去するには，貸主の同意を得る必要がある。",c5:"",c6:"",c7:"",c8:"",a:"1"},{year:"2015",num:"25",subject:"min",q:`Ａは，Ｂとの間で，Ａが所有する２階建ての甲建物を月額５０万円の賃料で賃貸する旨の契約を締結し，甲建物をＢに引き渡した。その後，Ｂは，Ａの承諾を得て，Ｃとの間で，甲建物を月額５０万円の賃料で転貸する旨の契約を締結し，甲建物をＣに引き渡した。それからしばらくして甲建物の屋根の不具合により雨漏りが発生し，Ｃは，甲建物の２階部分を使用することができなくなった。この場合に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ｃは，Ｂに対し，甲建物の屋根の不具合を修繕するよう請求することができる。
イ．Ｃは，Ｂが甲建物の屋根の不具合の修繕を拒絶するときは，Ａに対し，甲建物の屋根の不具合を修繕するよう請求することができる。
ウ．ＡがＢに対して甲建物の２階部分を使用することができなくなった日以後の賃料の支払を請求した場合，Ｂは，甲建物の２階部分の割合に相当する賃料については，その支払を拒絶することができる。
エ．ＡがＣに対して甲建物の２階部分を使用することができなくなった日以後の賃料の支払を請求した場合，Ｃは，甲建物の２階部分の割合に相当する賃料についても，その支払を拒絶することができない。
オ．判例によれば，甲建物の屋根の不具合がＣの責めに帰すべき事由によって生じた場合，Ａは，Ｂに対し，甲建物の屋根の不具合により生じた損害の賠償を請求することができない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"1"},{year:"2015",num:"26",subject:"min",q:`請負契約に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．請負人が債務の本旨に従って仕事を完成した後であっても，注文者は，損害を賠償して契約の解除をすることができる。
イ．判例によれば，建物の建築を目的とする請負契約の請負人は，自ら材料を提供したか，注文者が材料を提供したかにかかわらず，完成した建物の所有権を取得する。
ウ．注文者が破産手続開始の決定を受けたときは，請負人は，契約の解除をすることができる。
エ．仕事の目的物の引渡しを要する場合には，注文者は，仕事の目的物の引渡しを受けるまで，請負人に対し，報酬の支払を拒むことができる。
オ．請負人は，注文者との間で瑕疵担保責任を負わない旨の特約をした場合であっても，瑕疵があることを知りながらこれを注文者に告げずに仕事の目的物を引き渡したときには，その瑕疵についての担保責任を免れることができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2015",num:"27",subject:"min",q:`請負人の瑕疵担保責任に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．仕事の目的物の引渡しを要する場合において，その引渡しの時に目的物の瑕疵が明らかであったときは，請負人は瑕疵担保責任を負わない。
イ．仕事の目的物に瑕疵がある場合，注文者は，その瑕疵の修補に代えて，又はその修補とともに，損害賠償の請求をすることができる。
ウ．仕事の目的物の瑕疵が注文者の供した材料の性質又は注文者の与えた指図によって生じた場合，請負人は，その材料又は指図が不適当であることを知りながら注文者に告げなかったときを除き，瑕疵担保責任を負わない。
エ．仕事の目的物に瑕疵がある場合において，その瑕疵を修補することが不能であるときは，注文者は，請負契約を解除することができる。
オ．仕事の目的物の引渡しを要しない場合，請負人の瑕疵担保責任の存続期間は，その仕事が終了した時から起算する。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2015",num:"28",subject:"min",q:`不法行為に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．他人の生命を侵害した者は，被害者の相続人に対してのみ慰謝料を支払う義務を負う。
イ．被害者が死亡していない場合には，被害者の近親者は，慰謝料を請求することができない。
ウ．ある事業のために他人を使用する者は，被用者がその事業の執行について第三者に加えた損害を賠償する責任を負うが，この責任は，被用者に賠償の資力があったとしても免れることができない。
エ．被害者が加害者の使用者に対し使用者責任に基づく損害賠償を請求する場合，被害者は，加害者による不法行為があったことに加え，加害者の使用者が加害者である被用者の選任及びその事業の監督について相当の注意をしていなかったことを主張・立証しなければならない。
オ．過失によって一時的に自己の行為の責任を弁識する能力を欠く状態を招いた者は，その間に他人に加えた損害について賠償の責任を負う。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2015",num:"29",subject:"min",q:`婚姻が解消した場合の法律関係に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．婚姻によって氏を改めた者は，婚姻が夫婦の一方の死亡によって解消した場合であるか離婚によって解消した場合であるかを問わず，婚姻前の氏に戻るが，法定の期間内に届出をすれば，婚姻が解消した際に称していた氏を称することができる。
イ．婚姻が離婚により終了した場合には，姻族関係は当然に終了するが，婚姻が夫婦の一方の死亡により終了した場合には，姻族関係は生存配偶者が姻族関係を終了させる意思を表示したときに限り終了する。
ウ．婚姻中の夫婦の間に生まれた子が未成年であるときは，協議上の離婚の際に，父母の一方を親権者と定めなければならず，この定めについては，家庭裁判所の許可を要しない。
エ．婚姻が離婚により終了した場合には，配偶者の財産分与請求権が認められ，また，婚姻が夫婦の一方の死亡により終了した場合には，生存配偶者の相続権が認められるが，判例によれば，配偶者について認められるこれらの権利は，内縁関係にある者についても類推して認められる。
オ．判例によれば，協議上の離婚をした夫婦の一方は，相手方に対し財産の分与を請求した場合には，相手方に対し慰謝料を請求することはできない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2015",num:"30",subject:"min",q:`親子関係に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．婚姻成立後２００日以内に生まれた子であっても，同棲開始の時から２００日経過後に生まれたときは，嫡出子であることが推定され，親子関係を否定するには，嫡出否認の方法によらなければならない。
イ．父が，嫡出でない子について嫡出子として出生の届出をし，それが受理された場合であっても，その出生の届出は，認知の届出としての効力を有しない。
ウ．離婚後３００日以内に生まれた子であっても，嫡出の推定が及ばないときには，その子は，血縁上の父に対して認知の訴えを提起することができる。
エ．女性が，他人の卵子を用いた生殖補助医療により子を懐胎し出産した場合であっても，出生した子の母は，その子を懐胎し出産した女性である。
オ．保存された男性の精子を用いてその男性の死亡後に行われた人工生殖によって女性が子を懐胎し出産した場合には，その男性と子の間に法律上の親子関係は認められない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2015",num:"31",subject:"min",q:`親権と未成年後見に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．後見人は，正当な事由があるときは，家庭裁判所の許可を得て，その任務を辞することができる。
イ．親権を行う者が財産管理権を有しない場合に選任された未成年後見人であっても，財産管理権のほか，身上監護権も有する。
ウ．離婚に際し，協議により父母の一方を親権者と定めた場合には，父母の協議により親権者を変更することができる。
エ．親権停止の審判によって未成年者に対して親権を行う者がなくなるときは，後見が開始する。
オ．特別養子を除く養子（いわゆる普通養子）は，実親及び養親の共同親権に服する。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2015",num:"32",subject:"min",q:`後見に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．任意後見契約が登記されている場合，家庭裁判所は，本人の利益のため特に必要があると認めるときに限り，後見開始の審判をすることができる。
イ．成年後見人は，成年被後見人に代わって成年被後見人の居住の用に供する建物を売却するには，家庭裁判所の許可を得なければならないが，成年被後見人に代わって成年被後見人の居住の用に供する建物の賃貸借契約を解除するには，家庭裁判所の許可を得る必要はない。
ウ．後見開始の審判を受ける者に配偶者がある場合には，その配偶者に成年後見人の職務を行うことができない事情があるときを除き，その配偶者が成年後見人に就任する。
エ．成年後見及び未成年後見のいずれにおいても，家庭裁判所は２人以上の後見人を選任して，後見事務を分掌させることができる。
オ．破産者は，後見人となることができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2015",num:"33",subject:"min",q:`遺贈に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．遺贈は，相続人に対してすることができない。
イ．包括遺贈を受けた者は，相続財産に属する債務を承継する。
ウ．受遺者が遺言者より先に死亡した場合は，遺言者が遺言において別段の意思を表示していない限り，受遺者の相続人が遺贈を受ける権利を相続する。
エ．遺言者が遺言において別段の意思を表示していない限り，受遺者は，遺贈の履行を請求することができる時から果実を取得する。
オ．遺贈の承認及び放棄は，撤回することができない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2015",num:"34",subject:"min",q:`遺留分に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．遺留分権利者の債権者は，遺留分権利者がその遺留分を放棄しない限り，遺留分減殺請求権を債権者代位の目的とすることができる。
イ．遺言者の財産全部の包括遺贈に対して遺留分権利者が減殺請求権を行使した場合，遺留分権利者に帰属する権利は，遺産分割の対象となる相続財産とならない。
ウ．包括遺贈の場合においても，被相続人の兄弟姉妹が相続人であるときは，その兄弟姉妹は，遺留分を有しない。
エ．遺留分減殺請求権は，裁判上行使しなければならない。
オ．遺留分権利者は，受贈者に対して減殺請求をした場合，その後に受贈者から贈与の目的物を譲り受けた者に対して更に減殺請求をすることができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2015",num:"35",subject:"min",q:`催告に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．被保佐人との間で不動産の売買契約を締結した者が，保佐人に対し，１か月以上の期間を定めて，その期間内にその売買契約を追認するかどうかを確答すべき旨の催告をし，保佐人がその期間内に確答を発しなかった場合には，その売買契約を追認したものとみなされる。
イ．無権代理人がした売買契約について，その売買契約の相手方が，本人に対し，相当の期間を定めて，その期間内にその売買契約を追認するかどうかを確答すべき旨の催告をし，本人がその期間内に確答をしなかった場合には，その売買契約を追認したものとみなされる。
ウ．債権者があらかじめ弁済の受領を拒んでいるときは，債務者は，弁済の準備をしたことを通知してその受領の催告をすれば，債務不履行責任を免れる。
エ．債務不履行に基づく解除権が発生した場合，その相手方が，解除権を有する者に対し，相当の期間を定めて，その期間内に解除をするかどうかを確答すべき旨の催告をし，その期間内に解除の通知を受けなかったときは，解除権は，消滅する。
オ．遺贈義務者が，受遺者に対し，相当の期間を定めて，その期間内にその遺贈の承認又は放棄をすべき旨の催告をし，受遺者がその期間内に遺贈義務者に対してその意思を表示しなかった場合には，その遺贈を放棄したものとみなされる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2015",num:"36",subject:"min",q:`利息に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．留置権者は，留置物から生ずる果実を収取し，他の債権者に先立って，これを自己の債権の弁済に充当することができるが，その果実は，被担保債権の利息に充当され，なお剰余があるときでも，元本に充当することはできない。
イ．債務者が利息の支払を１年分以上延滞し，債権者が催告をしても，債務者がその利息を支払わないときは，債権者は，これを元本に組み入れることができる。
ウ．主たる債務者の委託を受けないで保証をした保証人が弁済をしたときは，主たる債務者は，弁済がされた日以後の法定利息をその保証人に支払わなければならない。
エ．売主が，買主から売買代金の一部を受領した後，買主の債務不履行を理由として売買契約を解除した場合において，売主がその売買代金の一部として受領した金銭を買主に返還するときは，その受領の時から利息を付さなければならない。
オ．売買契約において，売主の目的物引渡義務が先履行とされ，かつ，代金の支払について期限がある場合，買主は，その目的物の引渡しを受けた後も，代金の支払についての期限が到来するまでは，利息を支払う必要がない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2015",num:"1",subject:"kei",q:`次のアからオまでの各記述を判例の立場に従って検討した場合，正しいものの組合せは，後記１から５までのうちどれか。
ア．不真正不作為犯の作為義務は，法律上の規定に基づかなければならない。
イ．不真正不作為犯が成立するために，作為可能性を必要としない場合もある。
ウ．不真正不作為犯の因果関係が認められるためには，期待された作為をしていれば結果が発生しなかったことが，合理的な疑いを超える程度に確実であったことが必要である。
エ．不真正不作為犯は，殺人罪や放火罪については成立するが，財産犯については成立しない。
オ．不作為による放火罪が成立するためには，既発の火力を利用する意思は必ずしも必要ではない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2015",num:"2",subject:"kei",q:"業務妨害罪に関する次の１から５までの各記述を判例の立場に従って検討し，誤っているものを２個選びなさい。",c1:"１．業務妨害罪における「業務」とは，職業その他社会生活上の地位に基づいて継続して行う事務又は事業をいい，営利を目的とするものでなくても「業務」に含まれる。",c2:"２．業務妨害罪における「業務」は，業務自体が適法なものであることを要するから，行政取締法規に違反した営業行為は「業務」には当たらない。",c3:"３．強制力を行使しない非権力的公務は，公務執行妨害罪における「公務」に当たるとともに業務妨害罪における「業務」にも当たる。",c4:"４．威力業務妨害罪における威力を「用いて」といえるためには，威力が直接現に業務に従事している他人に対してなされることを要する。",c5:"５．業務妨害罪における「妨害」とは，現に業務妨害の結果が発生したことを必要とせず，業務を妨害するに足りる行為があることをもって足りる。",c6:"",c7:"",c8:"",a:"24"},{year:"2015",num:"3",subject:"kei",q:`次のアからオまでの各事例を判例の立場に従って検討し，（ ）内の甲の行為とＶの死亡との間に因果関係が認められる場合には１を，認められない場合には２を選びなさい。
ア．甲は，自宅に遊びに来た友人Ｖの態度に腹を立て，その頭部を平手で１回殴打したところ，Ｖが家から出て行ったので，謝りながらＶを追い掛けた。Ｖは，甲が謝りながら追い掛けてきたことに気付いたが，甲と話をしたくなかったので，甲に追い付かれないように，あえて遮断機が下りていた踏切に入ったところ，列車にひかれ，内臓破裂により死亡した。（甲がＶの頭部を平手で１回殴打した行為）
イ．甲は，マンション４階の甲方居間で，Ｖの頭部や腹部を木刀で多数回殴打した。Ｖは，このままでは殺されると思い，甲の隙を見て逃走することを決意し，窓からすぐ隣のマンションのベランダに飛び移ろうとしたが，これに失敗して転落し，脳挫滅により死亡した。（甲がＶの頭部や腹部を木刀で多数回殴打した行為）
ウ．甲は，Ｖに致死量の毒薬を飲ませたが，その毒薬が効く前に，Ｖは，事情を知らない乙に出刃包丁で腹部を刺されて失血死した。（甲がＶに致死量の毒薬を飲ませた行為）
エ．甲は，路上でＶの頭部を木刀で多数回殴打し，これにより直ちに治療しなければ数時間後には死亡するほどの脳出血を伴う傷害をＶに負わせ，倒れたまま動けないＶを残して立ち去った。そこへ，たまたま通り掛かった事情を知らない乙が，Ｖの頭部を１回蹴り付け，Ｖは，当初の脳出血が悪化し，死期が若干早まって死亡した。（甲がＶの頭部を木刀で多数回殴打した行為）
オ．甲は，面識のないＶが電車内で酔って絡んできたため，Ｖの顔面を拳で１回殴打したところ，もともとＶは特殊な病気により脳の組織が脆弱となっており，その１回の殴打で脳の組織が崩壊し，その結果Ｖが死亡した。（甲がＶの顔面を拳で１回殴打した行為）`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"21211"},{year:"2015",num:"4",subject:"kei",q:"偽造公文書の行使に関する次の１から５までの各記述を判例の立場に従って検討し，正しいものを２個選びなさい。",c1:"１．行使の目的なしに作成された偽造公文書は，偽造公文書行使罪の客体とならない。",c2:"２．偽造公文書の内容，形式を口頭で他人に告知するだけでは，偽造公文書行使罪は成立しない。",c3:"３．偽造公文書を相手方に示して錯誤に陥れ，相手方から現金の交付を受けた場合，偽造公文書行使罪は詐欺罪に吸収され，詐欺罪のみが成立する。",c4:"４．交際相手と結婚するために自己に生活能力があることを示そうとして，偽造した国家試験合格証書を当該相手に見せた場合，偽造公文書行使罪が成立する。",c5:"５．自動車を運転する際，警察官から運転免許証の提示を求められれば提示するつもりで偽造した運転免許証を携帯した場合，偽造公文書行使罪が成立する。",c6:"",c7:"",c8:"",a:"24"},{year:"2015",num:"5",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合，誤っているものはどれか。",c1:"１．甲は，Ｘを眠らせてＸが左腕に着けていた高級腕時計を外して持ち去ろうと考え，Ｘに多量の睡眠薬を飲ませたが，Ｘが眠らなかったため，Ｘの腕時計に触れることすらできなかった。甲には昏酔強盗未遂罪が成立する。",c2:"２．拘置所に勾留中の甲は，逃走しようと考え，収容されていた房の壁を削り取って穴を開けたが，その穴が脱出可能な程度の大きさになる前に発見されたため，逃走行為に及ばなかった。甲には加重逃走未遂罪が成立する。",c3:"３．甲は，Ｘから現金を脅し取ろうと考え，「殺されたくなければ１００万円をよこせ。」などとＸを恐喝する内容の手紙をポストに投かんし，その手紙はＸ方に配達されたが，手紙を見たＸの妻は冗談であると思い，その内容をＸに伝えなかった。甲には恐喝未遂罪が成立する。",c4:"４．甲は，Ｘ方の居間に置かれた金庫に多額の現金が入れてあることを知り，これを盗む目的で，Ｘ方の無施錠のドアから玄関に入ったが，Ｘにその場で発見されたため，逃走した。甲には窃盗未遂罪が成立する。",c5:"５．甲は，Ｘに対し，Ｘの孫を装って電話をかけ，「おじいちゃん。金がなくて困っているので，今から言う俺の口座に１００万円を送金して。」と言って現金をだまし取ろうとしたが，その声が孫の声と違うことに気付いたＸは，甲から指定された口座に送金しなかった。甲には詐欺未遂罪が成立する。",c6:"",c7:"",c8:"",a:"4"},{year:"2015",num:"6",subject:"kei",q:"次の１から５までの各事例における甲のＶに対する罪責について，判例の立場に従って検討した場合，甲に殺人罪が成立しないものはどれか。",c1:"１．甲は，Ｖには自殺がどのようなものかを理解する能力がなく，しかもＶが甲の命ずることには何でも服従するのを利用してＶを死亡させようと考え，Ｖに対して，首を吊る方法を教えた上，これを実行するよう命じた。Ｖは，甲から命じられたとおりに，教えられた方法で自ら首を吊って窒息死した。",c2:"２．甲は，真冬の深夜，河川堤防でＶに激しい暴行を加えたところ，Ｖは走って逃げ出した。甲は，逃げるＶを堤防際まで追い詰めれば，逃げ場を失ったＶが堤防から下の川に飛び込んで溺死するかもしれないがそれでも構わないと考え，Ｖを堤防際まで追い詰めた。逃げ場を失ったＶは，甲からの暴行を免れるため，堤防から約３メートル下の川に飛び込んで溺死した。",c3:"３．甲は，Ｖから，包丁で腹部を突き刺して殺してほしいと依頼され，これを真意から出た依頼であると信じて包丁でＶの腹部を突き刺したが，その依頼はＶの冗談であって，Ｖの真意から出たものではなかった。Ｖは，甲から腹部を包丁で刺されたことにより失血死した。",c4:"４．甲は，妻と話し合って一家心中することとし，妻と５歳になる息子Ｖからそれぞれ一家心中することの承諾を得た上，妻とＶを殺すため，同人らの腹部を包丁で刺した。妻とＶは，甲から腹部を包丁で刺されたことにより失血死した。",c5:"５．甲は，Ｖから心中を持ち掛けられたことを利用して，Ｖを死亡させようと考え，自らは死ぬ気がないのに，Ｖとの心中を了承した。Ｖは，甲の真意を知っていれば死ぬことはなかったが，甲も一緒に死んでくれるものと誤信したまま，甲の目の前で，甲が用意した致死量の毒を飲んで中毒死した。",c6:"",c7:"",c8:"",a:"3"},{year:"2015",num:"7",subject:"kei",q:`学生Ａと学生Ｂは，次の【事例】における甲の罪責について後記【会話】のとおり検討している。【会話】中の①から⑧までの（ ）内から適切な語句を選んだ場合，正しいものの組合せは，後記１から５までのうちどれか。
【事 例】
甲は，乙に対し，殺意をもって，拳銃の引き金を引いて銃弾１発を発射し，乙の胸部に命中させて乙を殺害した。甲が拳銃で乙に狙いを付ける直前，乙は，甲に対し，殺意をもって，拳銃で狙いを付けて引き金を引こうとしていたものの，甲が発射した銃弾によって死亡したことから，引き金を引くには至らなかった。なお，甲は，乙が拳銃で自己に狙いを付けていることを知らなかった。
【会 話】
学生Ａ．甲の行為は，殺人罪の構成要件に該当する。そして，正当防衛の成立要件として，防衛の意思が必要であると考えると，甲には①（ａ．殺人既遂罪が成立し・ｂ．正当防衛が認められ），防衛の意思は不要であると考えると，甲には②（ｃ．殺人既遂罪が成立する・ｄ．正当防衛が認められる）ことになる。
学生Ｂ．最近では，防衛の意思必要説，不要説のいずれからも，甲には殺人未遂罪が成立し得るという見解が有力に主張されている。防衛の意思必要説からの殺人未遂罪説は，違法性は行為無価値と結果無価値の総合から構成されるという違法二元論を根拠とし，③（ｅ．行為無価値の存在と結果無価値の欠如・ｆ．行為無価値の欠如と結果無価値の存在）を理由に，一方，防衛の意思不要説からの殺人未遂罪説は，④（ｇ．適法・ｈ．違法）な結果が発生する具体的危険があることを理由に，それぞれ殺人未遂罪が成立し得ると説明している。
学生Ａ．しかし，防衛の意思不要説からの殺人未遂罪説に対しては，⑤（ｉ．「侵害はよいが侵害を試みることは許されない」・ｊ．「侵害を試みることはよいが侵害は許されない」）ことになるとの批判がある。
学生Ｂ．もともと，防衛の意思不要説からの殺人未遂罪説が問題にしている危険は，⑥（ｋ．別のあり得た違法結果・ｌ．当該結果）を発生させる危険ではなく，⑦（ｍ．別のあり得た違法結果・ｎ．当該結果）を発生させる危険と言われている。だから，その批判は当たらない。
学生Ａ．いずれにせよ，殺人未遂罪説は，実際に乙が死亡しているのだから，罪刑法定主義上，問題があると思う。
学生Ｂ．刑法第４３条は，「犯罪の実行に着手してこれを遂げなかった」と規定しており，これを，⑧（ｏ．構成要件的結果・ｐ．構成要件に該当する違法な結果）が発生しなかったという意味に理解すれば，文言解釈としての問題はないと思う。`,c1:"１．①ａ ②ｄ ③ｅ ④ｈ ⑤ｉ ⑥ｋ ⑦ｎ ⑧ｏ",c2:"２．①ｂ ②ｃ ③ｅ ④ｇ ⑤ｊ ⑥ｋ ⑦ｎ ⑧ｐ",c3:"３．①ｂ ②ｃ ③ｆ ④ｇ ⑤ｊ ⑥ｋ ⑦ｎ ⑧ｏ",c4:"４．①ａ ②ｄ ③ｅ ④ｈ ⑤ｉ ⑥ｌ ⑦ｍ ⑧ｐ",c5:"５．①ａ ②ｄ ③ｆ ④ｈ ⑤ｊ ⑥ｌ ⑦ｍ ⑧ｐ",c6:"",c7:"",c8:"",a:"4"},{year:"2015",num:"8",subject:"kei",q:`次のアからオまでの各記述を判例の立場に従って検討した場合，誤っているものの組合せは，後記１から５までのうちどれか。
ア．準強制わいせつ罪（刑法第１７８条第１項）の「心神喪失」とは，責任能力における心神喪失と同義である。
イ．第三者の暴行・脅迫によって女子が「抗拒不能」の状態に陥っているのを利用して，同人を姦淫した場合，準強姦罪（刑法第１７８条第２項）が成立する。
ウ．２名以上の者が，女子を強姦する目的でそれぞれ暴行を加えて同人の反抗を著しく困難な状態にした上，犯行現場にいる者のうち１名が姦淫行為に及んだ場合，集団強姦罪（刑法第１７８条の２）が成立する。
エ．女子を強姦する目的で暴行を加えたところ，その暴行によって同人が死亡したため，姦淫するに至らなかった場合，強姦致死罪（刑法第１８１条第２項）が成立する。
オ．女子に対して準強制わいせつ罪に当たる行為をし，同人に騒がれて捕まりそうになり，わいせつな行為を行う意思を喪失してその場から逃走するため同人に暴行を加えて傷害を負わせた場合，強制わいせつ致傷罪（刑法第１８１条第１項）は成立せず，準強制わいせつ罪と傷害罪が成立する。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2015",num:"9",subject:"kei",q:`次の【事例】に関する１から５までの各【記述】を判例の立場に従って検討し，正しいものを２個選びなさい。
【事 例】
　Ａは，外国へ旅行に行った際，旅行先で知り合ったＢから，荷物を預けるので手荷物として日本まで運んでほしいと依頼され，これを了承し，その荷物を日本に持ち込んだが，荷物の中身は覚せい剤であった。
　なお，覚せい剤をみだりに日本に持ち込んだ場合には覚せい剤取締法の輸入罪が成立し，麻薬をみだりに日本に持ち込んだ場合には麻薬及び向精神薬取締法の輸入罪が成立するものとする。
【記 述】`,c1:"１．Ａは，Ｂから預かった荷物の中身は「薬物ではない。」と聞かされていたが，「薬物以外の何か違法なものかもしれない。」と思ってこれを日本に持ち込んだ場合，Ａには覚せい剤取締法の輸入罪が成立する。",c2:"２．Ａは，Ｂから預かった荷物の中身は「覚せい剤である。」と思ったものの，覚せい剤を日本に持ち込むことは法律上禁止されていないと考えてこれを日本に持ち込んだ場合，Ａには覚せい剤取締法の輸入罪が成立する。",c3:"３．Ａは，Ｂから預かった荷物の中身は「覚せい剤である。」と聞かされたものの，覚せい剤が違法な薬物であることを知らず，「覚せい剤とは高価な化粧品のことである。」と認識してこれを日本に持ち込んだ場合でも，「覚せい剤」という認識がある以上，Ａには覚せい剤取締法の輸入罪が成立する。",c4:"４．Ａは，Ｂから預かった荷物の中身は「覚せい剤かもしれないし，もしかしたら麻薬かもしれない。」と思ってこれを日本に持ち込んだ場合，Ａには客体の認識に錯誤があり，麻薬及び向精神薬取締法の輸入罪の法定刑が覚せい剤取締法の輸入罪の法定刑よりも軽いときには，Ａには麻薬及び向精神薬取締法の輸入罪が成立する。",c5:"５．Ａは，Ｂから預かった荷物の中身は「覚せい剤ではないが，麻薬である。」と思ってこれを日本に持ち込んだ場合，覚せい剤取締法の輸入罪の法定刑と麻薬及び向精神薬取締法の輸入罪の法定刑が同じときには，Ａには覚せい剤取締法の輸入罪が成立する。",c6:"",c7:"",c8:"",a:"25"},{year:"2015",num:"10",subject:"kei",q:`次の【記述】中の①から⑨までの（ ）内から適切な語句を選んだ場合，正しいものの組合せは，後記１から５までのうちどれか。
【記 述】
強盗罪における強取とは，相手方の反抗を①（ａ．困難にする・ｂ．抑圧する）に足りる程度の暴行・脅迫を加え，相手方の②（ｃ．意思に反し・ｄ．瑕疵ある意思に基づき），相手方の占有に属する財物を自己又は第三者の占有に移転することをいう。強取と③（ｅ．窃盗罪における窃取・ｆ．恐喝罪における喝取）との区別は，実行行為としての暴行・脅迫の有無であり，強取と④（ｇ．窃盗罪における窃取・ｈ．恐喝罪における喝取）との区別は，相手方の反抗を①（ａ．困難にする・ｂ．抑圧する）に足りる程度の暴行・脅迫であるか否か，つまり，暴行・脅迫の程度である。それゆえ，恐喝罪は，⑤（ｉ．委託物横領罪・ｊ．詐欺罪）と同様，相手方の⑥（ｋ．意思に反し・ｌ．瑕疵ある意思に基づき），財物を交付させる犯罪である。そして，強盗罪や⑦（ｍ．窃盗罪・ｎ．恐喝罪）のように，相手方の②（ｃ．意思に反し・ｄ．瑕疵ある意思に基づき），相手方の占有に属する財物を自己又は第三者の占有に移転する犯罪を⑧（ｏ．奪取罪・ｐ．交付罪）と呼び，恐喝罪や⑤（ｉ．委託物横領罪・ｊ．詐欺罪）のように，相手方の⑥（ｋ．意思に反し・ｌ．瑕疵ある意思に基づき），相手方の占有に属する財物を自己又は第三者の占有に移転する犯罪を⑨（ｑ．奪取罪・ｒ．交付罪）と呼んで区別することができる。`,c1:"１．①ａ ②ｃ ③ｅ ④ｈ ⑤ｊ ⑥ｋ ⑦ｎ ⑧ｐ ⑨ｑ",c2:"２．①ｂ ②ｃ ③ｅ ④ｈ ⑤ｊ ⑥ｌ ⑦ｍ ⑧ｐ ⑨ｑ",c3:"３．①ａ ②ｄ ③ｆ ④ｇ ⑤ｉ ⑥ｌ ⑦ｎ ⑧ｐ ⑨ｑ",c4:"４．①ｂ ②ｄ ③ｆ ④ｇ ⑤ｉ ⑥ｋ ⑦ｍ ⑧ｏ ⑨ｒ",c5:"５．①ｂ ②ｃ ③ｅ ④ｈ ⑤ｊ ⑥ｌ ⑦ｍ ⑧ｏ ⑨ｒ",c6:"",c7:"",c8:"",a:"5"},{year:"2015",num:"11",subject:"kei",q:"責任能力に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものは どれか。",c1:"１．ある人が同じ精神の障害の状態にありながら，ある行為については完全な責任能力が認められ，他の行為については完全な責任能力が認められないことがある。",c2:"２．心神喪失とは，精神の障害により事物の理非善悪を弁識する能力及びその弁識に従って行動する能力のいずれもない状態をいう。",c3:"３．心神喪失は，精神の障害がある場合に限られるから，アルコールによって一時的にそのような状態に陥った場合は心神喪失と認めることはできない。",c4:"４．心神耗弱は，責任能力が著しく減退しているにすぎないから，その刑を減軽しないこともできる。",c5:"５．１３歳の少年が人を殺害した場合，少年法の規定に基づく手続を経れば，その少年に刑罰を科すことができる。",c6:"",c7:"",c8:"",a:"1"},{year:"2015",num:"12",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合，誤っているものはどれか。",c1:"１．盗品等無償譲受け罪が成立するためには，無償譲受けについて契約を締結しただけでは足りず，盗品等が現実に移転されることが必要であるが，盗品等有償譲受け罪は，有償譲受けにつ いて契約を締結しただけで成立する。",c2:"２．盗品等の売買をあっせんすれば，あっせん自体が無償であっても，盗品等有償処分あっせん罪が成立する。",c3:"３．盗品等有償譲受け罪の客体に対する故意は，財産罪に当たる行為によって領得された物であ ることの認識があれば足り，いかなる財産罪に当たるかの認識までは不要である。",c4:"４．盗品等の売買をあっせんすれば，盗品等が現実に移転されなくても，盗品等有償処分あっせん罪が成立する。",c5:"５．盗品等有償譲受け罪の犯人が本犯である窃盗犯人の配偶者である場合，当該盗品等有償譲受け罪の犯人について，その刑は免除される。",c6:"",c7:"",c8:"",a:"1"},{year:"2015",num:"13",subject:"kei",q:`教授Ｘと学生Ｙは，事後強盗罪の共犯に関する事例について後記【会話】のとおり検討している。【会話】中の①から④までの（ ）内から適切な語句を選んだ場合，正しいものの組合せは，後記１から５までのうちどれか。
【会 話】
教授Ｘ．窃盗犯人甲は，自己を逮捕しようと追い掛けてきた被害者Ｖに対し，逮捕を免れる目的で，Ｖの反抗を抑圧する程度の暴行を加えました。甲にはどのような犯罪が成立しますか。
学生Ｙ．甲には事後強盗罪が成立します。
教授Ｘ．それでは，甲がＶから追い掛けられている時に，甲の知人乙が，偶然通り掛かり，その状況から甲がＶの物を盗んだのだと認識し，甲と意思を通じて，甲の逮捕を免れさせる目的で，Ｖに対し，Ｖの反抗を抑圧する程度の暴行を加えた場合，乙の共犯としての罪責はどうなりますか。
学生Ｙ．事後強盗罪を真正身分犯と考え，刑法第６５条についての判例の立場に立てば，乙には①（ａ．刑法第６５条第１項により事後強盗罪・ｂ．刑法第６５条第２項により暴行罪）が成立します。
教授Ｘ．事後強盗罪を不真正身分犯と考える立場では，乙の共犯としての罪責はどうなりますか。
学生Ｙ．事後強盗罪を不真正身分犯と考えた上で，刑法第６５条第１項は構成的身分及び加減的身分を通じて，身分犯における共犯の成立の規定であり，同条第２項は加減的身分について刑の個別作用を定めたものと解する立場に立てば，乙には②（ｃ．刑法第６５条第１項により事後強盗罪が成立するが，同条第２項により暴行罪の刑を科す・ｄ．刑法第６５条第１項と同条第２項の双方を適用して，暴行罪が成立する）ことになります。
教授Ｘ．事後強盗罪を身分犯と考えない立場では，乙の共犯としての罪責はどうなりますか。
学生Ｙ．事後強盗罪を窃盗と暴行の結合犯と考える立場もあります。この立場に立ち，乙に事後強盗罪が成立するという考え方は，乙の承継的共同正犯を③（ｅ．肯定・ｆ．否定）しています。
教授Ｘ．事後強盗罪を結合犯と考える立場に対しては，どのような批判がありますか。
学生Ｙ．④（ｇ．窃盗の既遂・未遂によって事後強盗罪の既遂・未遂が決まることを説明できない・ｈ．窃盗に着手しただけで事後強盗罪の未遂を肯定することになってしまうのではないか）という批判があります。`,c1:"１．①ａ ②ｄ ③ｅ ④ｇ",c2:"２．①ｂ ②ｄ ③ｆ ④ｈ",c3:"３．①ａ ②ｃ ③ｅ ④ｈ",c4:"４．①ｂ ②ｄ ③ｆ ④ｇ",c5:"５．①ａ ②ｃ ③ｅ ④ｇ",c6:"",c7:"",c8:"",a:"3"},{year:"2015",num:"14",subject:"kei",q:"証拠隠滅等の罪に関する次の１から５までの各記述を判例の立場に従って検討し，正しいものを２個選びなさい。",c1:"１．甲は，Ａが窃盗被告事件で公判請求されたと知り，同事件に関するＡに有利な情状証拠を隠匿した。甲には証拠隠滅罪は成立しない。",c2:"２．甲は，親族Ａが犯した傷害被疑事件につき，他人を教唆してＡの犯行に関わる証拠を隠滅させた。甲には，親族による犯罪に関する特例（刑法第１０５条）が適用され，証拠隠滅罪の教唆犯は成立しない。",c3:"３．甲は，Ａが犯した殺人被疑事件につき，目撃者Ｂが捜査機関から事情聴取の要請を受けたことを知り，その聴取を妨害するため，Ｂを甲方に２か月間監禁した。甲には証拠隠滅罪が成立する。",c4:"４．甲は，Ａの強盗被告事件に証人として出廷し，法律により宣誓の上，自己の記憶と異なる偽りの事実を証言し，これに基づく証人尋問調書が作成された。甲には証拠偽造罪が成立する。",c5:"５．甲は，自己が犯した強制わいせつ被疑事件に関する証拠の隠滅をＡに教唆して実行させた。甲には証拠隠滅罪の教唆犯が成立する。",c6:"",c7:"",c8:"",a:"35"},{year:"2015",num:"15",subject:"kei",q:`結果的加重犯の共同正犯の成立が認められることを前提に，次の【事例】及び各【見解】に関する後記１から５までの各【記述】を検討し，誤っているものを２個選びなさい。
【事 例】
甲と乙は，丙に対する傷害を共謀し，共同して木刀で丙の手足を殴打していた際，甲は丙に対する殺意を抱き，木刀で丙の頭部を殴打し，丙はその殴打により脳挫傷で死亡した。なお，乙は，甲が殺意を抱いたことを知らなかった。
【見 解】
Ａ説：共同正犯とは，数人が犯罪に至る行為過程を含めた行為を共同することであり，特定の犯罪を共同して実現する場合はもちろんのこと，単なる行為を共同して各自の意図する犯罪を実現する場合も，それぞれの行為について共同正犯の成立を認める。
Ｂ説：共同正犯とは，数人の者が共同して特定の犯罪を行うことであり，構成要件の間に重なり合いがあれば，そのうちのより重い犯罪について共同正犯の成立を認め，軽い犯罪の故意しかない者には，軽い犯罪の刑を科す。
Ｃ説：共同正犯とは，数人の者が共同して特定の犯罪を行うことであり，構成要件の重なり合う限度で軽い犯罪の共同正犯の成立を認める。
【記 述】`,c1:"１．Ａ説からは，甲と乙に殺人罪の共同正犯が成立するとの結論が導かれる。",c2:"２．Ｂ説からは，甲と乙に殺人罪の共同正犯が成立するとの結論が導かれる。",c3:"３．Ｂ説に対しては，犯罪の成立と科刑が分離するのは妥当でないと批判できる。",c4:"４．Ｃ説からは，甲と乙に傷害致死罪の共同正犯が成立し，甲には殺人罪の単独犯が成立するとの結論が導かれる。",c5:"５．Ｃ説に対しては，Ａ説やＢ説から，共同正犯の成立範囲が広すぎると批判できる。",c6:"",c7:"",c8:"",a:"15"},{year:"2015",num:"16",subject:"kei",q:"事後強盗罪に関する次の１から５までの各記述を判例の立場に従って検討し，正しいものを２個選びなさい。",c1:"１．窃盗既遂犯人のみが事後強盗罪の主体となる。",c2:"２．事後強盗罪は，強盗罪と同様，財物と財産上の利益について成立する。",c3:"３．窃盗犯人が窃盗の現場で逮捕を免れるために暴行・脅迫を加えた相手方が，現に当該窃盗犯人を逮捕する意図を有していなくても，事後強盗罪は成立する。",c4:"４．窃盗犯人が窃盗の現場で逮捕を免れるために相手方を殺害した場合，強盗殺人罪は成立しない。",c5:"５．強盗予備罪の「強盗の罪を犯す目的」には，事後強盗を犯す目的も含まれる。",c6:"",c7:"",c8:"",a:"35"},{year:"2015",num:"17",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合，誤っているものはどれか。",c1:"１．甲は，酒に酔った状態で，自動車を無免許で運転した。甲には酒酔い運転の罪と無免許運転の罪が成立し，これらは観念的競合となる。",c2:"２．甲及び乙は，対立する暴走族の構成員を襲撃することを共謀し，同構成員であるＸ，Ｙ及びＺに対し，殴る蹴るの暴行を加え，それぞれに傷害を負わせた。甲及び乙にはそれぞれ３個の傷害罪が成立し，これらは併合罪となる。",c3:"３．甲は，乙がＸ及びＹを殺害するつもりでいることを知ったことから，凶器としてナイフ１本を乙に手渡したところ，乙は，同ナイフを用いてＸ及びＹを殺害した。甲には２個の殺人幇助の罪が成立し，これらは併合罪となる。",c4:"４．甲は，離婚した元妻Ｘを殺害する目的で，深夜，Ｘの母親Ｙ宅に侵入し，その場にいたＸ，Ｙ及びＹの子Ｚを順次殺害した。甲には１個の住居侵入罪と３個の殺人罪が成立するが，住居侵入罪と各殺人罪は牽連犯となり，全体が科刑上一罪となる。",c5:"５．甲は，身の代金を得る目的でＸを拐取し，更にＸを監禁し，その間にＸの近親者に対して身の代金を要求した。甲には身の代金目的拐取罪，拐取者身の代金要求罪及び監禁罪が成立し，身の代金目的拐取罪と拐取者身の代金要求罪は牽連犯となり，これらの各罪と監禁罪は併合罪となる。",c6:"",c7:"",c8:"",a:"3"},{year:"2015",num:"18",subject:"kei",q:`次の【事例】に関する後記１から５までの甲の罪責を判例の立場に従って検討した場合，甲に（ ）内の犯罪が成立しないものはどれか。
【事 例】
甲は，Ａ方から高価な壺を盗み出した。Ａは，これに気付いて甲を追い掛けたが，甲は，逃げ切って帰宅し，盗んだ上記壺を自宅のテーブルに置いていた。警察官は，甲の本件窃盗事件の捜査を開始した。`,c1:"１．警察官は，甲を立会人として本件窃盗事件に係る捜索差押許可状に基づき甲方を捜索中，テーブルに上記壺が置かれているのを発見し，これを差し押さえようとして手を伸ばしたところ，甲は，腹立ち紛れにその壺を取り上げ，その場で床にたたき付けて粉々に割った。（公務執行妨害罪）",c2:"２．甲は，自宅において，本件窃盗事件に係る捜索差押許可状に基づく捜索を受けた際，自宅に隠し持っていた覚せい剤が警察官に発見されることを恐れ，これを密かにトイレに流した。（証拠隠滅罪）",c3:"３．甲は，本件窃盗事件で通常逮捕され，警察署において弁解録取の手続を受けた際，警察官が甲の供述を記載した弁解録取書を手に取って破った。（公用文書毀棄罪）",c4:"４．甲は，本件窃盗事件について発付された勾留状の執行により留置施設に留置されていたが，留置担当者の隙を見て同施設から外へ逃走した。(単純逃走罪）",c5:"５．甲は，本件窃盗事件について犯人ではないと否認していたが，公判請求され，公判でＡが被害状況を証言したことを逆恨みし，公判係属中，Ａに対して「自分が有罪になったら，Ａの自宅へ行って直接会ってお礼をさせてもらう。」旨の手紙を送り，Ａはこれを読んで不安に思った。（証人威迫罪）",c6:"",c7:"",c8:"",a:"2"},{year:"2015",num:"19",subject:"kei",q:`罪刑法定主義に関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。
ア．犯罪と刑罰は，「法律」によって定められていなければならず，この「法律」には，法律の委任を受けた政令，条例及び慣習法が含まれる。
イ．行為の時に適法であった行為を，その後の法律によって遡って犯罪とすることは，許されない。
ウ．ある刑罰法規につき，条文の文言を，語義の可能な範囲内で通常の意味よりも広げて解釈することは，許されない。
エ．刑の長期と短期を定めて言い渡し，現実の執行期間をその範囲内において執行機関の裁量に委ねることは，許されない。
オ．ある刑罰法規が，犯罪に比べて著しく均衡を失する重い刑罰を規定している場合，当該刑罰法規は違憲である。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2015",num:"20",subject:"kei",q:`次の【事例】に関する後記アからオまでの各【記述】を判例の立場に従って検討し，正しい場合には１を，誤っている場合には２を選びなさい。
【事 例】
借金の返済に苦しんでいた甲とその内縁の妻乙は，Ａ市が発行した乙を被保険者とする国民健康保険被保険者証の氏名を乙から実在しない丙に改変し，丙になりすまして消費者金融会社から借入れをして現金を手に入れることを相談した。甲と相談したとおり，乙は，上記国民健康保険被保険者証の被保険者氏名欄に乙とあるのを丙と書き換えた。そして，乙は，消費者金融会社の無人借入手続コーナーにおいて，借入申込書に丙の氏名を記載し，丙と刻した印鑑を押捺するなどして丙名義の借入申込書１通を完成させた上，同申込書及び氏名を丙に改変した上記国民健康保険被保険者証の内容を，同コーナーに設置された機械を使用し，同機械に接続されている同社本店の端末機に送信し，同社の貸付手続担当者に対し，丙であるかのように装って１００万円の借入れを申し込んだ。同担当者は，当該申込みをした者が真実丙であり，かつ，貸付金は約定のとおりに返済されるものと誤信し，同社の貸付システムに従って丙名義の借入カードを上記コーナーに設置された機械から発券した。乙は，その場で同カードを入手し，同カードを現金自動入出機に挿入して同機から現金１００万円を引き出した。その後，乙は，上記行為に及んだことを後悔し，自宅で，甲に一緒に自首をしようと持ち掛けた。甲は，これを聞いて激高し，乙を窒息死させようと考え，その首を絞めたところ，乙は首を絞められたことによるショックで心不全になり死亡した。甲は，乙の死亡から約３０分後，死亡して横たわっている乙の指に時価２０万円相当の乙の指輪がはめてあることに気が付き，同指輪を奪って逃走した。
【記 述】
ア．乙が国民健康保険被保険者証の被保険者氏名欄を丙と書き換えた行為については，単に文書の内容を書き換えたにすぎないから，甲と乙には，公文書偽造罪ではなく，公文書変造罪が成立する。
イ．乙が丙名義の借入申込書を作成した行為については，丙が実在しなくても，一般人をして真正に作成された文書であると誤信させる危険があるから，甲と乙には有印私文書偽造罪が成立する。
ウ．甲と乙は，当初から現金１００万円を手に入れる目的で丙名義の借入カードを入手し，同カードを利用して現金１００万円を引き出したのだから，甲と乙には現金１００万円について詐欺罪が成立する。
エ．甲は，乙を窒息死させようとしていたが，乙はそれとは別の原因で死亡するに至ったのであるから，甲には，乙の首を絞めて死亡させた行為について殺人既遂罪は成立せず，殺人未遂罪と過失致死罪が成立する。
オ．甲が乙の指輪を奪った行為については，その時点で乙は既に死んでいるから，甲には，窃盗罪ではなく，占有離脱物横領罪が成立する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"21222"},{year:"2014",num:"1",subject:"ken",q:`「法の支配」の原理に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．「法の支配」は，「人による支配」を排斥し，権力を「法」で拘束することによって国民の権利・自由を保障することを目的とする原理である。
イ．「法の支配」は，「法律による行政」の原理を意味するものであり，その法律自体の内容は問わない原理である。
ウ．日本国憲法も，憲法の最高法規性，基本的人権の保障，特別裁判所の設置の禁止，そして裁判所による違憲立法審査権等からして，「法の支配」の原理に立脚しているといえる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"121"},{year:"2014",num:"2",subject:"ken",q:`人権の享有主体に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．外国人の場合には，我が国との関係が日本国民とは異なるので，日本国民に比べて裁判を受ける権利の保障の程度に差を設けることも許される。
イ．法人は，現代社会におけるその役割の重要性からすると，全ての人権について，自然人と同程度の保障を受ける。
ウ．未成年者は，精神的・肉体的に未成熟なことから，成人とは異なった特別の保護を必要とする場合があり，このような趣旨から，憲法は児童の酷使を禁止している。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"7"},{year:"2014",num:"3",subject:"ken",q:`法の下の平等に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．日本国籍は重要な法的地位であり，父母の婚姻による嫡出子たる身分の取得は子が自らの意思や努力によっては変えられない事柄であることから，こうした事柄により国籍取得に関して区別することに合理的な理由があるか否かについては，慎重な検討が必要である。
イ．非嫡出子という身分は子が自らの意思や努力によって変えることはできないから，嫡出性の有無による法定相続分の区別の合理性については，立法目的自体の合理性及び当該目的と手段との実質的関連性についてより強い合理性の存否を検討すべきである。
ウ．尊属殺という特別の罪を設け，刑罰を加重すること自体は直ちに違憲とはならないが，加重の程度が極端であって，立法目的達成の手段として甚だしく均衡を失し，これを正当化し得べき根拠を見出し得ないときは，その差別は著しく不合理なものとして違憲となる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"121"},{year:"2014",num:"4",subject:"ken",q:`憲法第１９条の保障する思想・良心の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．企業が従業員に対して特定政党の党員か否かを調査することは，当該調査の必要性があり，不利益な取扱いのおそれがあることを示唆せず，強要にわたらない限り，許容される。
イ．裁判所が謝罪広告を強制しても，単に事態の真相を告白し，陳謝の意を表明するにとどまる場合は，良心の自由を不当に制限することにはならない。
ウ．中学校の内申書にその学校の全共闘を名乗って機関紙を発行したなどと記載した場合，それ自体は客観的な事実であっても，その記載に係る外部的行為から一定の思想信条を了知し得る。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"2"},{year:"2014",num:"5",subject:"ken",q:`信教の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．生徒が自らの信仰に基づき，その通学する公立校で義務付けられている授業の履修を拒んだため不利益処分を受けることになっても，公教育が特例なしに実施されるべきであることに鑑み，その不利益の内容や程度に関わりなく，これを受忍しなければならない。
イ．僧侶がその業務として遂行した行為の結果，刑法上の犯罪構成要件に該当することになった場合，その行為の目的や内容に宗教上の意義が認められるときは，たとえそれが著しく社会的妥当性を欠くものであっても，正当な業務行為として処罰の対象とはならない。
ウ．宗教法人が法令に違反して著しく反社会的な行為を組織的に行ったため，裁判所から宗教法人法所定の解散命令を受け，法人格を失った宗教団体やその信者が宗教上の行為を継続する上で支障が生じても，その支障は間接的で事実上のものにとどまるので，やむを得ない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"7"},{year:"2014",num:"6",subject:"ken",q:`憲法第２１条第２項前段の「検閲」に関する次のアからウまでの各記述について，ｂの見解がａの見解の批判となっている場合には１を，そうでない場合には２を選びなさい。
ア．ａ．名誉毀損のおそれのある記事を掲載した書籍の販売等を，裁判所の仮処分により事前差止めするのは，「検閲」に該当しない。
ｂ．「検閲」の解釈に当たっては，過去に検閲が行政権により濫用されたという歴史的経緯を踏まえる必要がある。
イ．ａ．外国で出版済みの書籍について，輸入禁制品である「公安又は風俗を害すべき書籍」に該当するか否かを税関が検査するのは，「検閲」に該当しない。
ｂ．「検閲」は，表現の自由に対する制約という側面と，この自由と一体をなす知る権利に対する制約という側面がある。
ウ．ａ．受刑者の逃走防止等を目的として，その発信しようとする信書の内容を刑務所長が事前に検査するのは，「検閲」に該当しない。
ｂ．「検閲」の禁止は，国民に対する関係では，絶対的に禁止されるが，特殊の法律関係にある者については，異なる取扱いが認められる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"212"},{year:"2014",num:"7",subject:"ken",q:`知る権利や表現の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．表現の自由は，公立図書館に自己の著作物の収蔵を求めることまで保障するものではないから，公立図書館で閲覧に供された図書を職員が著作者の思想や信条を理由として廃棄することは，その思想，意見等を公衆に伝達する利益を不当に損なうものとはいえない。
イ．放送事業者は，限られた電波の使用の免許を受けた者であって，公的な性格を有するものであり，放送による権利侵害や放送された事項が真実でないことが判明した場合に訂正放送が義務付けられているが，これは視聴者に対し反論権を認めるものではない。
ウ．集団行動を法的に規制する場合，表現の自由の保障に可能な限り配慮する必要があるため，集団行動が行われ得るような場所を包括的に掲げたり，その行われる場所のいかんを問わないものとしたりすることは許されない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"6"},{year:"2014",num:"8",subject:"ken",q:`学問の自由や大学の自治に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．教授の自由の保障は，その沿革上，高等教育の場である大学に限られ，普通教育の場における教師の教授の自由は，学問の自由やその他の憲法上の自由として保障されているわけではない。
イ．大学は，自治権を有し，その施設及び学生の管理に関して自主的に決定する権利を有することから，警察は，大学の了解なしには大学構内において令状に基づく犯罪捜査を行うことはできない。
ウ．大学教授が授業中に行ったその所属学部の執行部への批判を理由として，当該学部が当該教授の授業開講を認めない措置を採るような場合には，学問の自由と大学の自治とが対立的な関係に立つ。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"7"},{year:"2014",num:"9",subject:"ken",q:`職業の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．酒類販売の免許制に関する立法事実が変化しているので，当該免許制の合憲性は厳格度を高めた基準で審査されるが，酒税法が定める免許基準は依然として合理性を有する。
イ．特定産業における経営の安定を目的とする生糸の輸入制限は，零細な他の産業に犠牲を強いることになるので，その合憲性は慎重に審査されるが，著しく不合理とはいえない。
ウ．登記制度が国民の権利義務等に重大な影響を及ぼすことなどから，原則として司法書士に登記業務の独占を認める職域規制は，公共の福祉に合致した合理的な規制である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"221"},{year:"2014",num:"10",subject:"ken",q:`社会保障制度の合憲性をめぐる理由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．限られた財源の下で福祉的給付を行うに当たり，国が自国民を在留外国人より優先的に扱うことは許されるが，特別永住者について障害福祉年金の支給対象から一切除外することは，不合理な差別となる。
イ．障害基礎年金の受給に関し，保険料の拠出要件を緩和するか否かは国の財政事情等に密接に関連するから，保険料負担能力のない２０歳以上６０歳未満の者のうち学生とそれ以外の者との間に障害基礎年金の受給に関し差異が生じていたとしても，不合理とはいえない。
ウ．生活保護法に基づいて生活保護を受けるのは，単なる国の恩恵ないし社会政策の実施に伴う反射的利益ではなく，法的権利であるから，保護基準の改定（老齢加算の廃止）に基づく保護の不利益変更は，その改定自体に正当な理由がない限り違法となる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"212"},{year:"2014",num:"11",subject:"ken",q:`裁判員の参加する刑事裁判に関する法律（以下「裁判員法」という。）に基づき裁判官以外の者が構成員となった裁判体によって裁判が行われる制度（以下「裁判員制度」という。）の合憲性について判断した最高裁判所の判決（最高裁判所平成２３年１１月１６日大法廷判決，刑集６５巻８号１２８５頁）に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法が採用する統治の基本原理や刑事裁判の諸原則，憲法制定当時の歴史的状況を含めた憲法制定の経緯及び憲法の関連規定の文理を総合的に検討すれば，憲法は一般的に国民の司法参加を許容しているといえる。
イ．裁判員法が規定する評決制度の下で，裁判官が時に自らの意見と異なる結論に従わざるを得ない場合があるとしても，憲法が国民の司法参加を許容し，裁判員法が憲法に適合するようにこれを法制化したものである以上，憲法第７６条第３項には反しない。
ウ．裁判員制度は，参政権と同様の権限を国民に付与するものではないが，辞退制度や旅費・日当の支給等の経済的措置を講じていることを考慮すれば，裁判員の職務は憲法第１８条の「苦役」に当たらない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"2"},{year:"2014",num:"12",subject:"ken",q:`天皇の国事行為及び内閣の助言と承認に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．国事行為のうち，その行為自体が名目的・儀礼的なものであっても，天皇は，自らの判断に基づき，内閣の助言と承認を拒むことは許されない。
イ．憲法は，天皇の無答責を明文で規定していないので，内閣の助言と承認のもとで行われた天皇の国事行為であっても，内閣の責任のほかに天皇が責任を負うことがあり得る。
ウ．国政に関する権能を天皇に付与しない限り，憲法で定められている国事行為以外の行為について，新たな国事行為として法律で定めることも許される。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"122"},{year:"2014",num:"13",subject:"ken",q:`選挙に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．公職選挙法は，投票を得るなどの目的で戸別訪問をすること自体を禁止しているが，選挙運動の重要性に照らすと，その禁止の範囲は憲法に適合するよう限定して解釈しなければならない。
イ．いわゆる立候補の自由は，選挙権の自由な行使と表裏の関係にあり，自由かつ公正な選挙を維持する上で極めて重要であるとして，憲法第１５条第１項によって保障されていると解すべきである。
ウ．選挙や当選の効力に関する争訟において，誰が誰に対して投票したかを解明し，これを公表することは，選挙投票の全般にわたってその秘密を確保しようとする無記名投票制度の精神に反する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"211"},{year:"2014",num:"14",subject:"ken",q:`憲法第４３条第１項の「全国民の代表」に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法第４３条第１項は，国会が民意を反映すべき機関であると同時に，国民代表機関であることも意味する。
イ．各選挙区において選出された議員は，「全国民の代表」となるので，選挙区民から法的に責任を問われることはない。
ウ．議員が実質的には政党の媒介によってのみ国民代表者となり得るとする見解に立つと，党議拘束の慣行は，議員が「全国民の代表」であることと矛盾抵触する。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"2"},{year:"2014",num:"15",subject:"ken",q:`独立行政委員会に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．独立行政委員会が規則制定という準立法的作用を行うことは，国会を唯一の立法機関と定める憲法第４１条に反するものではない。
イ．行政権は内閣に属すると定める憲法第６５条により，独立行政委員会の職務全般に対しては，内閣の直接的な指揮監督権が及ぶ。
ウ．独立行政委員会が裁決や審決という準司法的作用を行うことは，たとえ前審であっても，全て司法権は裁判所に属する旨を定める憲法第７６条第１項に反し，許されない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"4"},{year:"2014",num:"16",subject:"ken",q:`司法権に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．下級裁判所は，最高裁判所が制定した裁判所の内部規律及び司法事務処理に関する規則に拘束されるから，最高裁判所が，下級裁判所の裁判官に対して，具体的事件について，どのような判断を行うべきか指示することも許される。
イ．裁判官の職権の独立は，裁判に対して不当な影響を与えるおそれのある一切の外部的行為の排除を要求するが，一般国民やマスメディアによる裁判内容の批判は，表現の自由の行使の一場面であるから許される。
ウ．国政調査権は議院にとって重要な権能であるが，司法権の独立の観点からして，具体的事件について，その判決の事実認定や量刑が適切かどうかを調査することは，国政調査権の範囲を逸脱するものであり，許されない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"5"},{year:"2014",num:"17",subject:"ken",q:`裁判所が違憲とした議員定数配分規定に基づいて行われた選挙の効力に関する次のアからウまでの各記述について，正しいもの全てを挙げた組合せを，後記１から７までの中から選びなさい。
ア．一般的な法の基本原則に基づくものとして事情判決の法理を適用して，選挙を無効とせず違法の宣言にとどめるのは，当該選挙を無効とすることによって憲法が所期していない結果を生じることを回避するためである。
イ．定数配分規定の違憲判断を選挙の効力と結び付けず，訴訟が提起された選挙区の選挙だけを無効とする手法は，投票価値が不平等であるとされた選挙区からの代表者がいない状態で定数配分規定の是正が行われるという問題がある。
ウ．定数配分規定の違憲判断を選挙の効力と結び付けない判決の将来効の法理は，再選挙を執行することが事実上不可能であることや，事情判決を繰り返すことによって生じる司法審査制自体への弊害という問題にも対処しようとするものである。`,c1:"１．ア",c2:"２．イ",c3:"３．ウ",c4:"４．アイ",c5:"５．アウ",c6:"６．イウ",c7:"７．アイウ",c8:"",a:"7"},{year:"2014",num:"18",subject:"ken",q:`憲法の定める租税法律主義に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．租税の賦課は法律又は法律の定める条件によらなければならないが，条例は公選の議員で組織する議会の議決を経て制定される自治立法であるから，一定の範囲内で条例による租税の賦課徴収ができる。
イ．課税の根拠法律があるにもかかわらず長年にわたり課税されなかった物については，非課税の慣習法が成立しているとみるべきであるから，新たにその物に課税することは，それがその根拠法律の正しい解釈に基づくものであるとしても，租税法律主義に反する。
ウ．租税法律主義は，社会全体に対する財やサービスを提供するための資金を租税として強制的に徴収する場合について規定したものであるから，個人への給付に対する反対給付としての性質を有する保険料等については適用がなく，また，その趣旨も及ばない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"122"},{year:"2014",num:"19",subject:"ken",q:`地方自治に関する次のアからウまでの各記述について，ａの見解とｂの見解が両立する場合には１を，両立しない場合には２を選びなさい。
ア．ａ．憲法第２９条第２項は，財産権の内容を法律で定める旨規定しているから，法律で個別的な委任がある場合を除いて，条例で規制することはできない。
ｂ．財産権は全国的な取引の対象となる点で取引の安全を図る必要があるため，その規制は国の事務に属するが，地方的な特殊な事情があれば条例によっても規制できる。
イ．ａ．憲法第９５条が地方自治特別法に住民の過半数の同意を求めるのは，特定の地方公共団体の本質に関わるような不利益な特例を設けることを防止する趣旨である。
ｂ．憲法第９５条は，国会の単独立法権の例外を認めるもので，地方公共団体が独自の条例を制定する権限を有することの根拠規定の一つである。
ウ．ａ．憲法第９４条の「行政の執行」には租税の賦課・徴収が含まれているから，憲法は抽象的には地方公共団体の課税権を承認している。
ｂ．地方自治法第２２３条が，地方公共団体は「法律の定めるところ」により地方税を賦課徴収できると定めているのは，地方公共団体独自の課税権を承認する趣旨である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"211"},{year:"2014",num:"20",subject:"ken",q:`条約に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．国家間の合意には，条約のほか，協定，取極，規約，憲章，議定書など様々な名称のものがあり，その締結には常に国会の承認を必要とする。
イ．条約の効力は憲法の効力に優位するとの見解によれば，条約締結権に関する憲法の規定は，条約の効力の根拠を定めたものではないことになる。
ウ．国会の条約修正権を肯定する見解も，修正議決に従った内容の条約を締結するためには相手国との再交渉を必要とする。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"211"},{year:"2014",num:"21",subject:"gyo",q:`国土交通大臣は，道路占用許可（以下「許可」という。）について，道路法及び同法第３３条第１項に基づく政令の定めよりも具体的に許可の基準を示す通知（以下「本件通知」という。）を策定した。そして，本件通知を，道路管理者として許可を行う権限を有する各地方整備局長，各都道府県知事，及びその他の行政庁に発出した。各地方整備局は，国土交通省に置かれる行政機関（地方支分部局）である。許可の基準を定める政令及び本件通知に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
（参照条文）道路法
第３２条 道路に次の各号のいずれかに掲げる工作物，物件又は施設を設け，継続して道路を使用しようとする場合においては，道路管理者の許可を受けなければならない。
一～七 （略）
２～５ （略）
第３３条 道路管理者は，道路の占用が前条第１項各号のいずれかに該当するものであつて道路の敷地外に余地がないためにやむを得ないものであり，かつ，（中略）政令で定める基準に適合する場合に限り，同条第１項（中略）の許可を与えることができる。
２ （略）
ア．仮に，許可の基準を政令で定める旨の，道路法第３３条第１項におけるような明文の規定が法律になければ，許可の基準を政令で定めることは認められない。
イ．各地方整備局長は，本件通知の内容を，許可に係る行政手続法上の審査基準として公にすることができる。
ウ．私人が各地方整備局長に対し，本件通知に具体的に定められていない事情を理由に許可を求めることは，平等原則及び信義則に反し認められない。
エ．本件通知は，その内容が道路法に違反していなければ，下級行政庁である各都道府県知事に対する通達として，各都道府県知事を拘束する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"1122"},{year:"2014",num:"22",subject:"gyo",q:`行政処分に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らし，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．青色申告に係る法人税の更正処分における附記理由不備の瑕疵は，後日これについての審査請求に対する裁決において処分の具体的根拠が明らかにされたとしても，それにより治癒されるものではない。
イ．原子炉の周辺住民が，人格権に基づき原子炉設置の差止めを求める民事訴訟を提起するには，あらかじめ原子炉設置許可の取消し又は無効確認の判決を得ておく必要がある。
ウ．行政庁は，自らのした行政処分が当初から違法であったことを後日認識したときは，取消しを認める旨の明文規定の有無を問わず，また，争訟を裁断する行政処分であっても，当該行政処分を自ら取り消すことができる。`,c1:"１．ア〇 イ〇 ウ○",c2:"２．ア〇 イ〇 ウ×",c3:"３．ア〇 イ× ウ○",c4:"４．ア〇 イ× ウ×",c5:"５．ア× イ〇 ウ○",c6:"６．ア× イ〇 ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"4"},{year:"2014",num:"23",subject:"gyo",q:`行政手続法第２章の「申請に対する処分」に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．行政手続法第６条に定める標準処理期間には，申請が形式上の要件に適合しない場合の当該申請の補正に要する期間は含まれず，適法な申請の処理に要する期間のみが含まれる。
イ．行政手続法第７条に定める「申請がその事務所に到達したとき」とは，当該申請を取り扱うこととされている事務所の職員により，受付印を押印する等，申請を受領した旨の意思が表示された時点をいう。
ウ．申請期間を徒過していることを根拠に，申請を不適法として拒否処分を行う場合には，申請者に対して，行政手続法第８条に基づき当該処分の理由を示す必要はない。`,c1:"１．ア〇 イ〇 ウ○",c2:"２．ア〇 イ〇 ウ×",c3:"３．ア〇 イ× ウ○",c4:"４．ア〇 イ× ウ×",c5:"５．ア× イ〇 ウ○",c6:"６．ア× イ〇 ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"4"},{year:"2014",num:"24",subject:"gyo",q:`行政裁量に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．処分を行う行政庁に裁量権が認められる場合でも，当該行政庁は，理由なく特定の個人を差別的に取り扱い不利益を及ぼす自由を有するものではなく，この意味において，行政庁の裁量権には一定の限界がある。
イ．処分を行う行政庁に裁量権が認められる場合には，処分が社会通念上著しく妥当性を欠き，裁量権の濫用に当たるものでない限り，処分の理由の提示に不備があったとしても，そのことを理由として処分が違法とされることはない。
ウ．規制を目的とする不利益処分について，処分の根拠法令が処分を行うか否かの点で行政庁に効果裁量を認めている場合には，処分を行わないという行政庁の不作為が違法となることはない。
エ．処分の根拠法令が，処分要件該当性の判断について行政庁に要件裁量を認めている場合には，事実認定について行政庁に裁量が広く認められる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"1222"},{year:"2014",num:"25",subject:"gyo",q:`行政指導に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．度を超えた圧力による行政指導が行われた場合には，実際に行政指導に従わなかったときでも，精神的苦痛による損害に係る賠償請求が可能となることがある。
イ．最高裁判所の判例によれば，申請に対する処分を留保されたままでの行政指導には応じられないことを真摯かつ明確に意思表示した行政指導の相手方に対して，行政指導を継続しているという理由でなお処分を留保しても，処分の留保が違法とは評価されない場合がある。
ウ．行政手続法によれば，口頭で行政指導を行う場合には，行政指導の趣旨及び内容並びに責任者を明確に示す必要はなく，行政指導の相手方からこれらを記載した書面の交付を求められたときに，当該行政指導に携わる者がこれらを記載した書面を交付すれば足りる。
エ．行政手続法の行政指導に関する規定には，地方公共団体の機関が行う行政指導にも適用されるものがある。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"1122"},{year:"2014",num:"26",subject:"gyo",q:`行政主体が当事者となる契約に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らし，正しいものに〇，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．市が市営の老人福祉施設を民間事業者に移管するために，施設の資産の譲渡先としてその運営を引き継ぐ事業者を公募したが，応募者に対して市長が「決定に至らなかった」旨の通知を行った場合，当該通知は，法令に基づかずに行った公募の応募者に対し，その者を相手方として契約を締結しないこととした事実を告知するものにすぎないから，抗告訴訟の対象となる行政処分には当たらない。
イ．地方公共団体が公共工事の指名競争入札に参加させようとする者を指名するに当たり，地元企業か否かを考慮することは，価格の有利性確保という入札制度の趣旨とは無関係の観点を考慮に入れるものであるから，許されない。
ウ．水道事業を経営する地方公共団体が水道料金を定めるに当たり，当該地方公共団体の住民基本台帳に記録されていない別荘に係る給水契約者とそれ以外の給水契約者との間で基本料金に差異を設けることは，平等原則に反し，許されない。`,c1:"１．ア〇 イ〇 ウ○",c2:"２．ア〇 イ〇 ウ×",c3:"３．ア〇 イ× ウ○",c4:"４．ア〇 イ× ウ×",c5:"５．ア× イ〇 ウ○",c6:"６．ア× イ〇 ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"4"},{year:"2014",num:"27",subject:"gyo",q:`甲市は，条例（以下「本件条例」という。）により，⑴甲市内においてパチンコ店の建築をしようとする者は市長の同意を得なければならないこと，⑵市長は，商業地域以外の用途地域においては，上記の同意をしないものとすること，及び，⑶市長は，上記の同意を得ないでパチンコ店の建築をしようとする者に対し，建築の中止等の命令を発することができることを定めていた。ただし，上記命令の違反に対する罰則は，定められていなかった。Ａは，パチンコ店を建築しようとして，本件条例に基づく建築の同意を申請したが，甲市長Ｂは，建築予定地が準工業地域に属することから，本件条例に基づき，不同意とした。しかし，Ａが建築工事に着手したため，Ｂは，本件条例に基づき，建築工事中止命令（以下「本件命令」という。）を発した。これに対し，Ａが工事を続行したため，甲市は，Ａを相手取って，工事の続行禁止を求める民事訴訟（以下「本件訴え」という。）を提起した。この事案に関する次のアからエまでの各記述について，法令又は最高裁判所の判例に照らし，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．本件命令は行政指導の性質を有するにすぎず，そもそも法的強制になじまないから，本件訴えは不適法である。
イ．仮に，本件命令違反に対する罰則が本件条例に置かれている場合には，Ｂは，行政代執行法に基づく代執行により，本件命令に基づく義務の履行を確保することができる。
ウ．仮に，本件命令違反に対する執行罰の規定が本件条例に置かれている場合には，Ｂは，Ａに対して執行罰としての過料を課すことにより，本件命令に基づく義務の履行を確保することができる。
エ．本件訴えは，法規の適用の適正ないし一般公益の保護を目的とするものであって，自己の権利利益の保護救済を目的とするものではないから，法律上の争訟に当たらない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"2221"},{year:"2014",num:"28",subject:"gyo",q:`Ａは，海岸保全区域に当たる海岸で，海岸管理者であるＢ県知事の許可を受けずに，レジャー施設（以下「本件施設」という。）を設置しており，更に本件施設を拡張しようとしている。これに対し，Ｂ県知事は，海岸法(以下「法」という。)第１２条により本件施設の除却を求める処分（以下「本件監督処分」という。），及びＡが本件監督処分に従わない場合の代執行（以下「本件代執行」という。）を含めて，様々な措置を執ることを検討している。Ａに対し執ることが想定される措置に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
（参照条文）海岸法
第７条 海岸管理者以外の者が海岸保全区域（中略）内において，海岸保全施設以外の施設又は工作物（以下（中略）第１２条において「他の施設等」という。）を設けて当該海岸保全区域を占用しようとするときは，（中略）海岸管理者の許可を受けなければならない。
２ （略）
第１１条 海岸管理者は，（中略）第７条第１項（中略）の規定による許可を受けた者から占用料（中略）を徴収することができる。（以下略）
第１２条 海岸管理者は，次の各号の一に該当する者に対して（中略）他の施設等の（中略）除却（中略）を命ずることができる。
一 第７条第１項（中略）の規定に違反した者
二・三 （略）
２～１０ （略）
第４１条 次の各号の一に該当する者は，一年以下の懲役又は五十万円以下の罰金に処する。
一 第７条第１項の規定に違反して海岸保全区域を占用した者
二・三 （略）
ア．Ａが本件代執行に現場で抵抗する場合に，Ｂ県知事が抵抗を排除するために執り得る措置を定める規定は，行政代執行法に置かれていない。
イ．最高裁判所の判例によれば，本件監督処分を準備する調査を担当して本件施設に係る情報を収集したＢ県の職員が，Ａを法第４１条第１号の罪について刑事告発することは認められない。
ウ．Ｂ県が，法第７条第１項に違反したＡから，法第１１条の占用料に相当する金額を，法のこれらの規定に基づく行政上の秩序罰として徴収することはできない。
エ．最高裁判所の判例によれば，Ｂ県が，占有保全の訴えを提起して，Ａによる本件施設の拡張を予防することはできない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"1212"},{year:"2014",num:"29",subject:"gyo",q:`行政機関の保有する情報の公開に関する法律（以下「情報公開法」という。）に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．情報公開法は，国民主権の理念にのっとり，政府の諸活動について国民に説明する責務が全うされるようにするとともに，国民の的確な理解と批判の下にある公正で民主的な行政の推進に資することを目的とするものであるから，行政文書の開示請求権は，外国人には認められていない。
イ．情報公開法は，公にすることにより国の安全が害されるおそれがあると行政機関の長が認めることにつき相当の理由がある情報を不開示情報としているが，これは，この種の情報については，開示・不開示の判断に高度の政策的判断が伴い，また，国防，外交上の専門的，技術的判断を要するという特殊性があるため，行政機関の長の判断に裁量を認める趣旨である。
ウ．行政機関の長は，情報公開法に基づく開示請求に係る行政文書が他の行政機関により作成されたものである場合，当該行政文書の開示の是非を判断することができないので，当該開示請求を却下することができる。
エ．行政機関の長は，国，独立行政法人等，地方公共団体，地方独立行政法人及び開示請求者以外の者（以下「第三者」という。）に関する情報が記録されている行政文書を情報公開法第７条の規定により開示しようとするときは，開示決定に先立ち，所在の判明している第三者に対し，意見書を提出する機会を与えなければならない。
（参照条文）情報公開法
第７条 行政機関の長は，開示請求に係る行政文書に不開示情報が記録されている場合であっても，公益上特に必要があると認めるときは，開示請求者に対し，当該行政文書を開示することができる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"2121"},{year:"2014",num:"30",subject:"gyo",q:`原告適格に関する次のアからウまでの各記述について，それぞれ①の法令に関する説明を前提にした場合に，②の記述が最高裁判所の判例の内容として正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．①建築基準法第５９条の２第１項は，建築物の容積率制限，高さ制限に関し，一定規模以上の広さの敷地を有し，かつ，敷地内に一定規模以上の空地を有する場合においては，安全，防火等の観点から支障がないと認められることなどの要件を満たすときに限り，これらの制限を緩和することを認めている。②この規定は，建築物の倒壊，炎上等による被害が直接的に及ぶことが想定される周辺の一定範囲の地域に存する他の建築物についてその居住者の生命，身体の安全等及び財産としてのその建築物を，個々人の個別的利益としても保護すべきものとする趣旨を含むものと解されるから，同条第１項の総合設計許可に係る建築物の倒壊，炎上等により直接的な被害を受けることが予想される範囲の地域に存する建築物に居住し又はこれを所有する者は，当該許可の取消しを求める原告適格を有する。
イ．①風俗営業等の規制及び業務の適正化等に関する法律（以下「法」という。）第４条第２項第２号は，風俗営業の許可の基準につき，良好な風俗環境を保全するため特にその設置を制限する必要があるものとして政令で定める基準に従い都道府県の条例（以下「施行条例」という。）で定める地域内に営業所があるときは風俗営業の許可をしてはならないと定め，法の委任を受けて規定された風俗営業等の規制及び業務の適正化等に関する法律施行令（以下「施行令」という。）第６条第１号イの規定は，「住居が多数集合しており，住居以外の用途に供される土地が少ない地域」を風俗営業の制限地域とすべきことを基準として定めている。②これらの規定から，法の風俗営業の許可に関する規定が一般的公益の保護に加えて個々人の個別的利益をも保護すべきものとする趣旨を含むことを読み取ることは困難であり，施行令第６条第１号イの規定は，専ら公益保護の観点から基準を定めていると解するのが相当である。そうすると，上記の基準に従って規定された施行条例が定める地域に住居する者は，風俗営業の許可の取消しを求める原告適格を有するとはいえない。
ウ．①自転車競技法（平成１９年法律第８２号による改正前のもの）第４条第２項は，場外車券発売施設につき，申請に係る施設の位置，構造及び設備が経済産業省令で定める基準に適合する場合に限りその許可をすることができる旨定め，これを受けて規定された自転車競技法施行規則（平成１８年経済産業省令第１２６号による改正前のもの）第１５条第１項第１号は，上記の基準として，学校その他の文教施設及び病院その他の医療施設（以下，これらを併せて「医療施設等」という。）から相当の距離を有し，文教上又は保健衛生上著しい支障を来すおそれがないこと（以下，この基準を「位置基準」という。）を定めている。②一般に，場外車券発売施設が設置，運営された場合に周辺住民等が被る可能性のある被害は，交通，風紀，教育など広い意味での生活環境の悪化であって，基本的には公益に属する利益というべきである。そうすると，医療施設等の開設者は，位置基準を根拠として当該施設の設置許可の取消しを求める原告適格を有するとはいえない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"2"},{year:"2014",num:"31",subject:"gyo",q:`取消訴訟の審理に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．処分について審査請求をすることができる場合であっても，法律に特段の定めのない限り，直ちに処分の取消しの訴えを提起することができる。
イ．処分の取消しの訴えとその処分についての審査請求を棄却した裁決の取消しの訴えとを提起することができる場合，これらの訴えは併合して提起しなければならない。
ウ．処分の根拠法令が裁決主義を採用している場合には，裁決の取消しの訴えにおいて原処分の違法を主張することができる。
エ．建築基準法上の指定確認検査機関による建築確認処分の取消しの訴えにおいては，当該機関を指定した国土交通大臣又は都道府県知事の所属する国又は地方公共団体が被告となる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"1212"},{year:"2014",num:"32",subject:"gyo",q:`行政事件訴訟の審理に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．数名の者が共同訴訟人として処分の取消しの訴えを適法に提起することができるのは，訴訟の目的がそれらの者について合一にのみ確定すべき場合に限られる。
イ．処分の取消しの訴えを提起するに当たっては，同一の被告に対する民事訴訟であれば，これを適法に併合して提起することができる。
ウ．処分についての審査請求を棄却した裁決の取消しの訴えを適法に提起した後，原告は，法令に特別の定めがある場合を除き，口頭弁論の終結に至るまで，当該処分の取消しの訴えをこれに併合して適法に提起することができる。
エ．法令に基づく申請に対し相当の期間内に何らの処分がされないとして義務付けの訴えを提起する場合には，当該処分に係る不作為の違法確認の訴えをこれに併合して提起しなければならない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"2211"},{year:"2014",num:"33",subject:"gyo",q:`在外日本人である原告らが，①平成１０年法律第４７号による改正前の公職選挙法が，原告らに衆議院議員の選挙及び参議院議員の選挙における選挙権の行使を認めていなかったことが違法であることの確認，②同改正後の公職選挙法が，原告らに衆議院小選挙区選出議員の選挙及び参議院選挙区選出議員の選挙における選挙権の行使を認めていないことが違法であることの確認及び③原告らが今後直近に実施される上記②の各選挙において選挙権を行使する権利を有することの確認を求める各訴えに関する最高裁判所平成１７年９月１４日大法廷判決（民集５９巻７号２０８７頁）についての次のアからウまでの各記述のうち，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．この判決は，上記①の訴えは，過去の法律関係の確認を求めるものであって，確認の利益を欠くから，不適法であるとした。
イ．この判決は，上記②の訴えは，抽象的に立法不作為の違法確認を求めるものであって，法律上の争訟に当たらないから，不適法であるとした。
ウ．この判決は，上記③の訴えが適法であると判断するに当たり，選挙権は侵害を受けた後に争うことによっては権利行使の実質を回復することができない性質のものであることを考慮している。`,c1:"１．ア〇 イ〇 ウ○",c2:"２．ア〇 イ〇 ウ×",c3:"３．ア〇 イ× ウ○",c4:"４．ア〇 イ× ウ×",c5:"５．ア× イ〇 ウ○",c6:"６．ア× イ〇 ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"3"},{year:"2014",num:"34",subject:"gyo",q:`Ａ市の住民であるＸは，Ａ市の職員が公金の支出の手続においてした財務会計上の行為に問題があると考え，地方自治法の規定に基づき住民監査請求をすること及び住民訴訟を提起することを検討している。このような事例に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．住民監査請求において，Ｘは，当該財務会計上の行為が違法なものであることのみを主張することができ，それが不当なものであると主張することはできない。
イ．Ｘは，事案の重要性その他の事情によっては，住民監査請求をすることなく，適法に住民訴訟を提起することができる。
ウ．Ｘは，住民監査請求をし監査の結果の通知を受けた場合において，一定の期間内でなければ，適法に住民訴訟を提起することができない。
エ．住民訴訟において，Ｘは，当該財務会計上の行為が違法なものであることのみを主張することができ，それが不当なものであると主張することはできない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"2211"},{year:"2014",num:"35",subject:"gyo",q:`仮の救済に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．処分の取消しの訴えの提起があった場合において，当該処分についての執行停止の申立ての管轄裁判所は，当該本案の係属する裁判所である。
イ．裁判所による確定した仮の義務付けの決定に基づいて行政庁が処分をした場合において，裁判所は，事情が変更したときは，当該決定における相手方の申立てにより，当該決定を取り消すことができる。
ウ．裁判所による仮の差止めの決定は，第三者に対しても効力を有する。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"2"},{year:"2014",num:"36",subject:"gyo",q:`国家賠償に関する次のアからウまでの各記述について，最高裁判所の判例に照らし，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．Ａ県警察の警察官がいわゆる交通犯罪の捜査を行うにつき故意又は過失によって違法に他人に損害を加えた場合においては，Ａ県だけではなく，原則として，国もまた，国家賠償法第１条第１項に基づいて損害賠償責任を負う。
イ．国立公園内にＢ県が設置した周回路におけるかけ橋の設置管理の瑕疵により，観光客がかけ橋から足を踏み外して転落し重傷を負った場合，国は，Ｂ県に対する補助金の交付によりかけ橋の設置費用の２分の１近くを負担していたとしても，法律上の設置費用負担義務を負っていなければ，国家賠償法に基づいて損害賠償責任を負うことはない。
ウ．社会福祉法人Ｃの設置する児童養護施設に，児童福祉法に基づくＤ県の措置により入所した児童が，施設の職員Ｅの養育監護上の過失によって，他の入所児童から暴行を受けて負傷した場合であって，Ｅの養育監護行為が，国家賠償法第１条第１項の適用上，県の公権力の行使に当たる公務員の職務行為とされるときには，Ｅ個人が民法第７０９条に基づく損害賠償責任を負わないのみならず，使用者であるＣも同法第７１５条に基づく損害賠償責任を負わない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"7"},{year:"2014",num:"37",subject:"gyo",q:`損失補償に関する次のアからエまでの各記述は，最高裁判所の判例の内容を示したものである（かぎ括弧内の記述は，最高裁判所の判例の原文をそのまま抜き出したものである。）。４つのうち，損失補償の要否の判断に影響を及ぼした主要な要素が他の判例と最も異なっているものを１つ，後記１から４までの中から選びなさい。
ア．「鉱業法六四条の定める制限は，鉄道，河川，公園，学校，病院，図書館等の公共施設及び建物の管理運営上支障ある事態の発生を未然に防止するため，これらの近傍において鉱物を採掘する場合には管理庁又は管理人の承諾を得ることが必要であることを定めたものにすぎず，この種の制限は，公共の福祉のためにする一般的な最小限度の制限であり，何人もこれをやむを得ないものとして当然受忍しなければならないものであつて，特定の人に対し特別の財産上の犠牲を強いるものとはいえないから，同条の規定によつて損失を被つたとしても，憲法二九条三項を根拠にして補償請求をすることができないものと解するのが相当である。」
イ．奈良県ため池の保全に関する条例は，「災害を防止し公共の福祉を保持するためのものであり，その四条二号は，ため池の堤とうを使用する財産上の権利の行使を著しく制限するものではあるが，結局それは，災害を防止し公共の福祉を保持する上に社会生活上已むを得ないものであり，そのような制約は，ため池の堤とうを使用し得る財産権を有する者が当然受忍しなければならない責務というべきものであつて，憲法二九条三項の損失補償はこれを必要としないと解するのが相当である。」
ウ．都有行政財産である土地について建物所有を目的とし期間の定めなくされた使用許可が当該行政財産本来の用途又は目的上の必要に基づき将来に向かって取り消された事案においては，「都有行政財産たる土地につき使用許可によつて与えられた使用権は，それが期間の定めのない場合であれば，当該行政財産本来の用途または目的上の必要を生じたときはその時点において原則として消滅すべきものであり，また，権利自体に右のような制約が内在しているものとして付与されているものとみるのが相当である」から，使用権者は，特別の事情のない限り，その取消しによる土地使用権喪失についての補償を求めることはできない。
エ．道路法７０条１項による「補償の対象は，道路工事の施行による土地の形状の変更を直接の原因として生じた隣接地の用益又は管理上の障害を除去するためにやむを得ない必要があつてした前記工作物の新築，増築，修繕若しくは移転又は切土若しくは盛土の工事に起因する損失に限られると解するのが相当である。したがつて，警察法規が一定の危険物の保管場所等につき保安物件との間に一定の離隔距離を保持すべきことなどを内容とする技術上の基準を定めている場合において，道路工事の施行の結果，警察違反の状態を生じ，危険物保有者が右技術上の基準に適合するように工作物の移転等を余儀なくされ，これによつて損失を被つたとしても，それは道路工事の施行によつて警察規制に基づく損失がたまたま現実化するに至つたものにすぎず，このような損失は，道路法七〇条一項の定める補償の対象には属しないものというべきである。」`,c1:"１．ア",c2:"２．イ",c3:"３．ウ",c4:"４．エ",c5:"",c6:"",c7:"",c8:"",a:"3"},{year:"2014",num:"38",subject:"gyo",q:`行政不服審査に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．行政庁の不作為についての不服申立てに関しては不服申立期間の制限がなく，不作為状態の続く限りいつでも申立てが可能である。
イ．処分庁が誤って法定の期間よりも長い期間を審査請求期間として教示した場合において，その教示された期間内に審査請求がされたときは，当該審査請求は，法定の審査請求期間内にされたものとみなされる。
ウ．処分庁の上級行政庁である審査庁は，処分庁に対する一般的指揮監督権を有するから，裁決で当該処分を審査請求人の不利益に変更することもできる。`,c1:"１．ア〇 イ〇 ウ○",c2:"２．ア〇 イ〇 ウ×",c3:"３．ア〇 イ× ウ○",c4:"４．ア〇 イ× ウ×",c5:"５．ア× イ〇 ウ○",c6:"６．ア× イ〇 ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"2"},{year:"2014",num:"39",subject:"gyo",q:`普通地方公共団体の活動の規律に係る地方自治法の定めに関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．普通地方公共団体は，法律若しくはこれに基づく政令又は条例に特別の定めがない限り，権利の放棄を行う場合，議会の議決を要する。
イ．普通地方公共団体は，執行機関である長に対する諮問機関として，地方自治法の定める委員会及び委員を置かなければならない。
ウ．普通地方公共団体は，法律又はこれに基づく政令に特別の定めがない限り，公の施設の設置及び管理に関する事項を，条例で定めなければならない。
エ．各大臣は，担任する事務に関し，都道府県の自治事務の処理が法令の規定に違反していると認める場合，当該都道府県に対し，当該自治事務の処理について違反の是正のため必要な措置を講ずるように求めることができる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"1211"},{year:"2014",num:"40",subject:"gyo",q:`独立行政法人に関する次のアからウまでの各記述について，法令に照らし，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．独立行政法人とは，公共上の見地から確実に実施されることが必要な事業ではあるが，民間の主体に委ねても実施されることが十分に期待されるものについて，これを効率的かつ効果的に実施させることを目的として設立される法人をいう。
イ．何人も，独立行政法人等の保有する個人情報の保護に関する法律の定める要件を満たす場合には，独立行政法人の保有する自己を本人とする個人情報の開示を請求することができる。
ウ．独立行政法人の行う業務は，いずれも高い公共性を有するものであるから，全ての独立行政法人の役員及び職員は，国家公務員とされている。`,c1:"１．ア〇 イ〇 ウ○",c2:"２．ア〇 イ〇 ウ×",c3:"３．ア〇 イ× ウ○",c4:"４．ア〇 イ× ウ×",c5:"５．ア× イ〇 ウ○",c6:"６．ア× イ〇 ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",a:"6"},{year:"2014",num:"1",subject:"min",q:`制限行為能力に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．未成年者が婚姻をする場合に，未成年後見人があるときは，その同意を得なければならない。
イ．成年被後見人がした遺言は，成年後見人が取り消すことができる。
ウ．保佐開始の審判は，本人の同意がなくてもすることができる。
エ．保佐人の同意を得なければならない行為について，保佐人が被保佐人の利益を害するおそれがないにもかかわらず同意をしないときは，家庭裁判所は，被保佐人の請求により，保佐人の同意に代わる許可を与えることができる。
オ．本人以外の者の請求により補助開始の審判をするには，本人の同意が必要である。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2014",num:"2",subject:"min",q:`詐欺又は強迫による意思表示に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．相手方に対する意思表示について第三者が詐欺を行った場合において，相手方がその事実を知っていたときには，その意思表示を取り消すことができるが，第三者が強迫を行った場合においては，相手方がその事実を知らなかったときでも，その意思表示を取り消すことができる。
イ．Ａがその所有する不動産をＢに売却する旨の契約が締結され，これに基づきＡからＢへの所有権移転登記がされた場合において，Ａが詐欺を理由としてその意思表示を取り消したときには，その旨の登記をしなければ，その取消し後にＢからその不動産を買い受けたＣに対抗することができないが，Ａが強迫を理由としてその意思表示を取り消したときには，その旨の登記をしなくても，その取消し後にＢからその不動産を買い受けたＣに対抗することができる。
ウ．強迫による意思表示の取消しが認められるためには，表意者が完全に意思の自由を失って意思表示をしたことを要する。
エ．相手方に欺罔された結果，法律行為の要素に錯誤が生じ，その錯誤により意思表示をした場合には，錯誤による意思表示の無効を主張することも，詐欺による意思表示の取消しをすることもできる。
オ．連帯債務者の一人であるＡが代物弁済をした後，その代物弁済を詐欺を理由として取り消した場合，他の連帯債務者は，Ａの代物弁済が詐欺によるものであることを知らなかったときであっても，債権者に対し，代物弁済による債務の消滅を主張することはできない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2014",num:"3",subject:"min",q:`代理人の権限に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．売買契約を締結する権限を与えられて代理人となった者は，相手方からその売買契約を取り消す旨の意思表示を受ける権限を有する。
イ．成年被後見人が日常生活に関する行為をすることができる場合，成年後見人は，成年被後見人の日常生活に関する法律行為について成年被後見人を代理することはできない。
ウ．家庭裁判所が選任した不在者の財産の管理人は，不在者を被告とする土地明渡請求訴訟の第一審において不在者が敗訴した場合，家庭裁判所の許可を得ないで控訴をすることができる。
エ．委任による代理人は，本人の許諾を得たときのほか，やむを得ない事由があるときにも，復代理人を選任することができる。
オ．個別に代理権の授権がなければ，日常の家事に関する事項についても，夫婦の一方は，他の一方のために法律行為をすることはできない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2014",num:"4",subject:"min",q:`無権代理に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．本人に代わって弁済を受領する権限がない者が本人の有する債権について本人に代わって弁済を受領した後に，第三者が当該債権を差し押さえて転付命令を得た場合において，その後に本人がその弁済受領行為を追認したときは，当該第三者は，転付命令により当該債権を取得することはできない。
イ．本人が無権代理行為の追認を拒絶した場合であっても，その後に無権代理人が本人を相続したときは，無権代理行為は有効になる。
ウ．無権代理人を相続した本人は，無権代理行為について追認を拒絶することができる地位にあったことを理由として，無権代理人の責任を免れることができない。
エ．本人が無権代理人に対して無権代理行為を追認したとしても，相手方がこれを知るまでの間は，本人は，無権代理人に対しても追認の効果を主張することができない。
オ．無権代理人が本人を他の相続人と共に共同相続した場合において，他の共同相続人の一人が追認を拒絶したときは，無権代理行為は有効にならない。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2014",num:"5",subject:"min",q:`取得時効に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．１０年の取得時効を援用して所有権の取得を主張する者は，占有を開始した時及びその時から１０年を経過した時の２つの時点の占有を主張・立証すれば足り，所有の意思をもって，平穏に，かつ，公然と物を占有したこと，占有の開始時に善意無過失であったことについて主張・立証する必要はない。
イ．時効期間を計算する際には，その期間が午前零時から始まるときを除き，期間の初日は算入しない。
ウ．外形的客観的にみて占有者が他人の所有権を排斥して占有する意思を有していなかったと解される事情を証明すれば，所有の意思を否定することができる。
エ．Ａが所有する不動産についてＢが占有を継続したことにより取得時効が完成しても，Ｂは，その登記をしなければ，その後にＡからその不動産を取得したＣに対しては，時効による権利の取得を対抗することができない。
オ．他人が所有する土地を自己所有の土地として第三者に賃貸した者は，その第三者が２０年間その土地を占有したとしても，取得時効によりその土地の所有権を取得することはできない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2014",num:"6",subject:"min",q:`消滅時効の起算点に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．不確定期限の定めのある債権の消滅時効は，債権者が期限の到来を知った時から進行する。
イ．契約解除に基づく原状回復義務が履行不能になった場合において，その履行不能による損害賠償請求権の消滅時効は，原状回復義務が履行不能になった時から進行する。
ウ．無断転貸を理由とする土地賃貸借契約の解除権の消滅時効は，転借人が転貸借契約に基づいて当該土地の使用収益を開始した時から進行する。
エ．安全配慮義務違反による損害賠償請求権の消滅時効は，損害が発生した時から進行する。
オ．１０回に分割して弁済する旨の約定がある場合において，債務者が１回でも弁済を怠ったときは債権者の請求により直ちに残債務全額を弁済すべきものとする約定があるときには，残債権全額の消滅時効は，債務者が弁済を怠った時から進行する。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2014",num:"7",subject:"min",q:"Ａが所有して占有していた動産甲が，ＡからＢへ売られてＢに引き渡され，その後にＢからＣへ売られてＣに引き渡された場合において，ＡがＣに対して所有権に基づき動産甲の返還を請求する訴訟を提起し，請求原因としてＡが動産甲を所有していたこと及びＣが動産甲を占有していることを主張し，これらについてＣの自白が成立したときに関する次の１から４までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．Ｃは，Ａが所有権を失ったことを主張する抗弁として，動産甲がＢからＣへ売られたことを主張・立証しなければならず，Ｃがこれを主張・立証した場合において，Ａが，再抗弁として，動産甲がＡからＢへ売られたこと及びＡＢ間の売買契約に無効原因があることを主張・立証したときは，Ａの請求が認容される。",c2:"２．Ｃは，Ａが所有権を失ったことを主張する抗弁として，動産甲がＡからＢへ売られたこと及び動産甲がＢからＣへ売られたことを主張・立証しなければならず，Ｃがこれらを主張・立証した場合において，Ａが，再抗弁として，ＢＣ間の売買契約に無効原因があることを主張・立証したときは，Ａの請求が認容される。",c3:"３．Ｃは，Ａが所有権を失ったことを主張する抗弁として，動産甲がＡからＢへ売られたことを主張・立証しなければならず，Ｃがこれを主張・立証した場合において，Ａが再抗弁として適切な主張・立証をしないときは，Ａの請求が棄却される。",c4:"４．Ｃは，Ａが所有権を失ったことを主張する抗弁として，動産甲がＡからＢへ売られたこと及びＡＢ間の売買に基づく引渡しがされたことを主張・立証しなければならず，Ｃがこれらを主張・立証した場合において，Ａが，再抗弁として，ＡＢ間の売買契約に取消原因があること及びＢＣ間の売買契約が締結された後にＢに対してＡＢ間の売買契約を取り消す旨の意思表示をしたことを主張・立証したときは，Ａの請求が認容される。",c5:"",c6:"",c7:"",c8:"",a:"3"},{year:"2014",num:"8",subject:"min",q:`登記請求権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａは，ＢからＢ所有の土地を買う旨の契約をし，その代金を支払ったが，所有権移転登記をしていなかった。この売買契約を締結した後１０年が経過した場合には，Ａは，Ｂに対し，売買契約により取得した所有権に基づき所有権移転登記手続を請求することができない。
イ．ＡからＢ，ＢからＣへ土地が順次売却された後，Ｂの同意なくＡからＣへの所有権移転登記がされた場合，現在の権利関係と登記の内容が一致する限り，Ｂはその所有権移転登記の抹消登記手続を請求することはできない。
ウ．ＡがＢの所有する土地に第一順位の抵当権を有し，その抵当権の設定登記がされた後に，その抵当権の被担保債権が弁済により消滅した場合，第二順位の抵当権者であるＣは，Ａに対し，抵当権設定登記の抹消登記手続を請求することはできない。
エ．Ａは，ＢからＣ所有の土地を買う旨の契約をした場合，その土地についてＣを登記名義人とする登記がされていても，Ｂに対し，売買契約に基づき，その土地についてＢからＡへの所有権移転登記手続を請求することができる。
オ．Ａはその所有する土地をＢに遺贈する旨の遺言をしていたが，Ａが死亡した後，Ｂがその土地の所有権移転登記をしない間に，Ａの唯一の相続人であるＣが，ＡからＣへの相続を原因とする所有権移転登記をした上で，その土地をＤに売却してＣからＤへの所有権移転登記をした場合，Ｂは，Ｄに対し，ＣからＤへの所有権移転登記の抹消登記手続を請求することができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2014",num:"9",subject:"min",q:`登記に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡがＢから売買によってＢ所有の甲土地を取得し，ＢからＡへの所有権移転登記がされた後に，ＡＢ間の売買契約が解除され，その後，ＡからＣへ甲土地が譲渡され，ＡからＣへの所有権移転登記がされた場合，Ｂは，Ｃに対し，ＡからＣへの所有権移転登記の抹消登記手続を請求することができる。
イ．ＡがＡ所有の甲土地をＢに譲渡した後，これをＣにも譲渡した場合，Ｃが背信的悪意者とされる場合であっても，Ｂは，Ｃからの譲受人Ｄが背信的悪意者でない限り，Ｄに対して自己の所有権を主張するためには登記が必要である。
ウ．ＡがＢに賃貸している甲土地をＣに譲渡した場合において，Ｃが所有権移転登記をしていない場合は，ＢはＣに対して賃料の支払を拒むことができる。
エ．ＡとＢは，被相続人Ｃが所有していた甲土地を共同相続したが，Ｂは，甲土地についてＡに無断で相続を原因としてＣからＢへの所有権移転登記をし，さらに，Ｄへ甲土地を譲渡した場合，Ａの持分について，ＡがＤに対して自己の権利を主張するためには登記が必要である。
オ．ＡとＢは，被相続人Ｃが所有していた甲土地を共同相続し，Ａが甲土地を単独で相続する旨の遺産分割を成立させた。その後，Ｂが，甲土地について相続を原因としてＡＢの共有とする登記をし，さらにＢの持分をＤへ譲渡した場合，Ｂの持分について，ＡがＤに対して自己の権利を主張するためには登記が必要である。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2014",num:"10",subject:"min",q:"Ａ大学の図書館所蔵の書籍甲を，同大学教授Ｂが借り出し，図書館と同一の構内にある自己の研究室で利用していたことを前提として，次の１から４までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．Ｂが海外出張のため１週間大学を留守にしていた間に，Ｃが甲を盗み出して現に所持している場合，Ｂは，Ｃに対し，占有回収の訴えにより甲の返還を求めることができる。",c2:"２．Ｂが目を離した隙に，Ｄが甲を盗み出した上，自己の物と偽ってＥに売却し，引き渡した。甲にはＡ大学図書館の蔵書印が押捺されており，Ｅは，Ｄが甲を横領したものであると考えていた場合であっても，Ｂは，Ｅに対し，占有回収の訴えにより甲の返還を求めることはできない。",c3:"３．Ｂが研究室から自宅に甲を持ち帰る途中，電車内に甲を置き忘れたところ，Ｆがこれを拾得して現に所持している場合，Ｂは，Ｆに対し，占有回収の訴えにより甲の返還を求めることができる。",c4:"４．Ｂは，助手Ｇに対し，甲の一部について複写するよう指示して甲を預けたところ，Ｇが目を離した隙にＨが甲を盗み出して現に所持している場合，Ｂは，Ｈに対し，占有回収の訴えにより甲の返還を求めることはできない。",c5:"",c6:"",c7:"",c8:"",a:"34"},{year:"2014",num:"11",subject:"min",q:`物権又はその得喪若しくは変更について当事者がする合意に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．抵当権の順位の変更は，各抵当権者の合意のみによって効力を生ずるが，それを第三者に対抗するためには，その登記をしなければならない。
イ．土地を所有する者が売主となる売買において，当事者間で合意をすれば土地上の立木についての所有権を当該売主に留保することができるが，それを第三者に対抗するためには，当該売主が立木の所有者である旨を公示する対抗要件を具備しなければならない。
ウ．抵当権者は，利息その他の定期金の全額を被担保債権とする旨の定めを設定行為でしたときは，その定めに従い他の債権者に優先して抵当権を行使することができる。
エ．売買においては，目的物の所有権は，契約成立時に移転することが原則であるが，これと異なる時期に所有権が移転するものと定めることができる。
オ．不動産質権者は，設定者の承諾を得なければ，質権の目的である不動産の使用及び収益をすることができない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2014",num:"12",subject:"min",q:`相隣関係に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．土地の所有者は，隣地との境界付近において建物を修繕するため必要な範囲内で，隣地の使用を請求することができるが，隣地所有者がこれにより損害を受けたときは，その償金を支払わなければならない。
イ．土地の分割によって公道に通じない土地が生じた場合には，その土地の所有者は，公道に至るため，他の分割者の所有地のみを通行することができ，その通行について償金を支払う必要はない。
ウ．土地の所有者は，やむを得ない事由がある場合には，直接に雨水を隣地に注ぐ構造の屋根を設けることができるが，隣地所有者がこれにより損害を受けたときは，その償金を支払わなければならない。
エ．土地の境界線から５０センチメートル以上の距離を保って建物を築造しなければならない場合においても，境界線に接して建築をしようとする者がいるときに，隣地の所有者は，その建築を中止させ，又は変更させることができない。
オ．土地の所有者は，隣地の竹木の枝が境界線を越えるときは，その枝を切除することができ，かつ，その費用を隣地の所有者に請求することができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．ウ エ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2014",num:"13",subject:"min",q:`留置権に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．債権者は，債務者との合意によって先取特権の設定を受けることはできないが，債務者との合意により留置権の設定を受けることはできる。
イ．留置権者は，留置物について留置権に基づき競売を申し立てることができ，換価金から優先的に弁済を受けることができる。
ウ．留置権者が債務者の承諾を得ずに留置物を賃貸した場合，債務者は，留置権の消滅を請求することができる。
エ．請負人が，注文者に対する報酬債権を被担保債権として，留置権に基づき仕事の目的物の引渡しを拒んでいる場合，その報酬債権の消滅時効の進行は妨げられない。
オ．留置権者は，目的物の滅失によって債務者が受けるべき金銭その他の物に対して物上代位をすることができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2014",num:"14",subject:"min",q:`抵当権に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．保証人の求償権は，主たる債務者が弁済しないときに保証人が弁済することによって生じる将来の債権であるから，保証人の求償権を被担保債権として抵当権を設定することはできない。
イ．土地を賃借し，その土地上に建物を所有している者が，その建物に抵当権を設定した場合であっても，土地の賃貸人が賃借人との合意により賃貸借契約を解除したときは，土地の賃貸人は，その解除による賃借権の消滅を抵当権者に対抗することができる。
ウ．抵当不動産を買い受けた第三者が，抵当権者の請求に応じてその抵当権者にその代価を弁済したときは，抵当権は，その第三者のために消滅する。
エ．抵当権を実行することができる時から２０年が経過すれば，抵当権設定者は，抵当権者に対し，時効による抵当権の消滅を主張することができる。
オ．Ａ所有の建物について，Ｂが第一順位の抵当権を，Ｃが第二順位の抵当権をそれぞれ有している場合，ＢがＡからその建物を買い受けた場合であっても，第一順位の抵当権は消滅しない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2014",num:"15",subject:"min",q:"法定地上権に関する次の１から４までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．Ａが所有する甲土地に，その更地としての評価に基づき，Ｂのための抵当権が設定され，その後，甲土地上にＡ所有の乙建物が建てられた後，抵当権が実行された結果，Ｃが甲土地の所有者になった場合，Ｂが抵当権設定時，甲土地上にＡ所有の乙建物が建てられることをあらかじめ承諾していたとしても，甲土地に乙建物のための法定地上権は成立しない。",c2:"２．Ａが所有する甲土地に，Ｂのための第一順位の抵当権が設定され，その後，Ｂの承諾を受けて甲土地上にＡ所有の乙建物が建てられ，さらに，甲土地にＣのための第二順位の抵当権が設定された後，Ｃの申立てに基づいて甲土地の抵当権が実行された結果，Ｄが甲土地の所有者になった場合，甲土地に乙建物のための法定地上権が成立する。",c3:"３．Ａが所有する甲土地上に，Ａ所有の乙建物が存在し，その後，甲土地にＢのための抵当権が設定され，抵当権が実行された結果，Ｃが甲土地の所有者になった場合，Ａが乙建物の所有権の登記をしていなかったときは，甲土地に乙建物のための法定地上権は成立しない。",c4:"４．Ａが所有する甲土地上に，Ａ所有の乙建物が建てられ，その後，甲土地と乙建物にＢのための第一順位の共同抵当権がそれぞれ設定され，さらに，乙建物が取り壊されて甲土地上にＡ所有の丙建物が建てられた場合，その後，丙建物にＢのための第一順位の共同抵当権が設定され，甲土地の抵当権が実行された結果，Ｃが甲土地の所有者になったときであっても，甲土地に丙建物のための法定地上権は成立しない。",c5:"",c6:"",c7:"",c8:"",a:"1"},{year:"2014",num:"16",subject:"min",q:`売買契約においてその目的物であるワインを種類のみで指定し，買主の住所で引き渡すこととされていた場合に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．売主が債務の本旨に従って買主の住所にワインを持参したのに，買主がその受領を拒んだ場合には，その後売主がそのワインを故意に滅失させたときであっても，売主は，ワインの引渡債務の不履行を理由とする損害賠償責任を負わない。
イ．売主が債務の本旨に従って買主の住所にワインを持参したが，買主がその受領を拒んだ場合において，その後そのワインが保管されていた倉庫が第三者の放火によって焼失し，ワインが滅失したときには，売主は，ワインの引渡債務を免れる。
ウ．売主が債務の本旨に従って買主の住所にワインを持参したが，買主がその受領を拒んだ場合において，その後そのワインが買主の過失により滅失したときは，買主は，ワインの代金債務を免れない。
エ．売主が債務の本旨に従って買主の住所にワインを持参したが，買主がその受領を拒んだ場合には，その１週間後に売主が買主に対してワインの代金の支払を求めてきたときであっても，買主は，ワインの引渡しとの同時履行の抗弁を主張することができない。
オ．買主があらかじめワインの受領を拒んでいる場合において，売主が弁済の準備をしたことを買主に通知してその受領を催告したときは，売主は，約定の期日に買主の住所にワインを持参しなくても，ワインの引渡債務の不履行を理由とする損害賠償責任を負わない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2014",num:"17",subject:"min",q:`詐害行為取消権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．共同相続人間で成立した遺産分割協議は，詐害行為取消権の対象とならない。
イ．詐害行為取消権が成立するためには，債務者が債権者を害することを意図して法律行為をする必要がある。
ウ．債務超過の状態にある者が離婚に伴う財産分与として配偶者に金銭の給付をする旨の合意は，その額が財産分与として不相当に過大で，財産分与に仮託された財産処分と認められる事情がある場合，不相当に過大な部分について，その限度において詐害行為として取り消すことができる。
エ．抵当権が設定されている一個の建物を，その抵当権者に代物弁済として供した債務者の行為が詐害行為となる場合，他の一般債権者は，当該建物の価額から当該抵当権の被担保債権額を控除した残額の範囲で取り消すことができ，その限度において価額の賠償を請求することが許されるにとどまり，当該建物自体を債務者の一般財産として回復することはできない。
オ．詐害行為取消権は，訴訟において行使しなければならないが，訴えによる必要はなく，抗弁によって行使することもできる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2014",num:"18",subject:"min",q:"Ａに対し，ＢＣＤが等しい負担部分で３００万円の連帯債務を負っている場合に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．ＡがＢに対して履行の請求をしても，そのことを知らないＣ及びＤについては，時効中断の効力を生じない。",c2:"２．ＢがＡに対して有する金銭債権を自働債権として相殺をしても，Ｃ及びＤに相殺の効力は及ばない。",c3:"３．ＡがＢに対して３００万円の連帯債務の全額について免除をした場合には，Ｃ及びＤは，Ａに対し，２００万円の連帯債務を負う。",c4:"４．Ｂのために消滅時効が完成しても，Ｃ及びＤは，Ａに対し，３００万円の連帯債務を負う。",c5:"５．判例によれば，Ｂが６０万円を弁済しても，Ｂの負担部分の範囲内であるから，Ｃ及びＤに対して求償することはできない。",c6:"",c7:"",c8:"",a:"3"},{year:"2014",num:"19",subject:"min",q:`ＡのＢに対する金銭債務について，ＣがＢとの間で保証契約を締結した場合に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡのＢに対する債務に関して違約金の定めがなかった場合，ＢＣ間の保証契約において違約金の定めをすることはできない。
イ．Ａが未成年者であって，その法定代理人の同意を得ないでＢに対する債務を負担する行為をした場合において，Ｃが，保証契約締結の当時，そのことを知っており，その後，Ａの行為が取り消されたときには，Ｃは，Ａの負担していた債務と同一の目的を有する独立の債務を負担したものと推定される。
ウ．ＡのＢに対する債務の額が５００万円であり，ＣがＡの依頼を受けてＢとの間で保証契約を締結した場合において，Ａが，その後取得したＢに対する３００万円の金銭債権を自働債権として，Ｂに対する債務と相殺をしようと考えていたところ，ＣがＡに対して通知することなくＢに５００万円を弁済したときには，ＡはＣから５００万円の求償を受けても，相殺をすることができる地位にあったことを主張して，３００万円の範囲でこれを拒むことができる。
エ．Ｃが，Ａの意思に反してＢとの間で保証契約を締結し，Ｂに保証債務の弁済をした場合には，Ｃは，Ａが現に利益を受けている限度でのみ，Ａに対して求償をすることができる。
オ．判例によれば，ＡのＢに対する債務につき消滅時効が完成した場合において，Ａが時効の利益を放棄したときには，Ｃは，もはや時効の援用をすることができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2014",num:"20",subject:"min",q:"弁済の目的物の供託に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．債務の弁済について利害関係を有する第三者が弁済の提供をしたのに，債権者がその受領を拒む場合には，当該第三者は，債務者の意思に反するときであっても，供託をすることができる。",c2:"２．債務者が債権者を確知することができない場合には，確知することができないことについての過失の有無を問わず，供託をすることができる。",c3:"３．債務者が供託をした場合であっても，債権者が供託物を受け取らない限り，債務は消滅しない。",c4:"４．債務者が供託をした場合，債権者が同意しない限り，債務者は供託物を取り戻すことができない。",c5:"５．供託をした債務者が債権者に対して同時履行の抗弁を主張することができる場合，債権者が供託物を受け取るためには，債務者に対して反対給付をしなければならない。",c6:"",c7:"",c8:"",a:"15"},{year:"2014",num:"21",subject:"min",q:`弁済及び相殺に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａ名義のＢ銀行に対する預金に係る通帳と印鑑を窃取したＣが，Ａの代理人と称して，Ｂ銀行から預金の払戻しを受けた場合，Ｃは，自己のためにする意思でしたものではなく，債権の準占有者には当たらないので，Ｂ銀行の過失の有無にかかわらず，弁済の効力は生じない。
イ．ＡがＢ銀行に対する定期預金債権を有していたところ，Ｃが，Ａと称して，Ｂ銀行に対し，その定期預金債権を担保とした貸付けの申込みをし，Ｂ銀行は，ＣをＡと誤信したため貸付けに応じた。その後，貸付金債権の履行期に弁済がなかったため，Ｂ銀行がその貸付金債権を自働債権としてその定期預金債権と相殺をした場合において，貸付けの際に，金融機関として負担すべき相当の注意義務を尽くしていたときは，Ｂ銀行は，その相殺をもってＡに対抗することができる。
ウ．債務者の弁済が，債権の準占有者に対する弁済として有効となる場合においては，真の債権者は，弁済を受けた者に対し，不当利得返還請求をすることができない。
エ．ＡがＢに対して取立債務を負っている場合において，その履行期にＢが取立てをしなかったとしても，Ａが口頭の提供をしていないときは，Ａは債務不履行責任を免れない。
オ．Ａは，Ｂに対する債権をＣ及びＤに二重に譲渡し，それぞれの譲渡につきＢに対して確定日付のある証書で通知をしたが，その到達はＣへの譲渡についてのものが先であった場合において，ＢがＤに対してした弁済が効力を生ずるためには，Ｄを真の債権者であると信ずるにつき相当な理由があることを要する。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2014",num:"22",subject:"min",q:"贈与に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．贈与は，自己の財産を無償で相手方に与える意思を表示することにより成立する単独行為である。",c2:"２．書面によらない贈与であれば，履行の終わった部分についても撤回することができる。",c3:"３．贈与者は，贈与した特定物を引き渡すまでの間，善良な管理者の注意をもってその物を保存する義務を負う。",c4:"４．贈与者は，贈与した特定物に瑕疵があった場合，売主と同様の担保責任を負う。",c5:"５．他人の物を目的とする贈与は，贈与者がその物の権利を取得した時からその効力を生ずる。",c6:"",c7:"",c8:"",a:"3"},{year:"2014",num:"23",subject:"min",q:`売買に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．買主は，目的物の引渡しを先に受けた場合でも，目的物の引渡しを受けた場所において代金を支払わなければならない。
イ．売主は，目的物の引渡しを遅滞している場合でも，引渡しまでは，これを使用し果実を取得することができるが，買主が代金を支払った後は，果実を取得することはできない。
ウ．買主は，買い受けた不動産について抵当権，先取特権又は質権の登記があるときは，抵当権，先取特権又は質権の消滅請求の手続が終わるまで，その代金の支払を拒むことができる。
エ．買主が売主に手付を交付した場合，売主が手付の倍額を償還して契約を解除するためには，口頭により手付の倍額を償還する旨を告げ，その受領を催告すれば足りる。
オ．賃借地上にある建物の売買契約が締結された場合，売主は，その建物の敷地を目的とする賃借権の譲渡につき賃貸人の承諾を得て，敷地の賃借権を買主に移転する義務を負う。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2014",num:"24",subject:"min",q:`使用貸借に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．当事者が返還時期及び使用収益の目的を定めなかった場合，貸主は，相当の期間を定めて返還の催告をしなければ，使用貸借の目的物の返還を求めることはできない。
イ．判例によれば，建物の借主がその建物に課される公租公課に相当する額を全て負担している場合には，特別の事情のない限り，当該建物の貸借関係を使用貸借と認めることはできない。
ウ．貸主は，使用貸借の目的物に瑕疵があることを知っていた場合，その存在を借主に告げていれば，瑕疵担保責任を負わない。
エ．借主は，使用貸借の目的物について，善良な管理者の注意をもって保管する義務を負う。
オ．借主が死亡した場合，その相続人は，使用貸借の目的物を借主として使用収益する地位を承継する。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"5"},{year:"2014",num:"25",subject:"min",q:"消費貸借に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．判例によれば，利息付きの消費貸借において，借主は，特約のない限り，元本を受け取った日を含めた利息を支払わなければならない。",c2:"２．民法上の消費貸借は，利息に関する約定をしなかった場合，無利息の消費貸借となる。",c3:"３．利息付きの消費貸借において，物に隠れた瑕疵があったときは，貸主は，瑕疵がない物をもってこれに代えなければならない。",c4:"４．消費貸借の予約は，その後に借主が破産手続開始の決定を受けた場合であっても，その効力を失わない。",c5:"５．借主は，契約に定めた時期に先立って返還することができるが，貸主の利益を害することはできない。",c6:"",c7:"",c8:"",a:"4"},{year:"2014",num:"26",subject:"min",q:"賃貸借契約において敷金が差し入れられていた場合に関する次の１から５までの各記述のうち，判例の趣旨に照らし誤っているものを２個選びなさい。",c1:"１．建物の賃貸借契約において，目的建物の譲受人が賃貸人たる地位を承継した場合，敷金は譲渡人に対する賃貸借契約上の債務があればこれに充当された上で譲受人に承継されるため，賃借人は，賃貸借契約が終了し目的建物を明け渡したときは，譲受人に対し，敷金の返還を請求することができる。",c2:"２．土地の賃貸借契約において，目的土地上の建物の所有権が土地賃借権とともに譲渡され，その土地賃借権の譲渡について賃貸人の承諾がある場合，敷金についての権利関係も土地賃借権とともに移転するため，土地賃借権の譲受人は，契約が終了し目的土地を明け渡したときは，賃貸人に対し，譲渡人が差し入れていた敷金の返還を請求することができる。",c3:"３．建物の賃貸借契約において，契約が終了し目的建物が明け渡された後に敷金の返還請求がされた場合，賃料の未払があるときは，敷金が当然に充当されるため，賃貸人が賃借人に相殺の意思表示をする必要はない。",c4:"４．敷金は賃借人が賃貸借期間中に負担する債務を担保するものであるから，賃借人は，賃料の未払がある場合であっても，差し入れてある敷金をもって賃料債務に充当する旨を主張することにより，敷金の額に満つるまでは，未払賃料の支払を拒むことができる。",c5:"５．建物の賃貸借契約において，敷金返還請求権は，賃貸借契約が終了し目的建物が明け渡された時点において，それまでに生じた被担保債権を控除した残額につき具体的に発生するものであるから，賃貸借契約が終了した後であっても，目的建物が明け渡される前においては，転付命令の対象とはならない。",c6:"",c7:"",c8:"",a:"24"},{year:"2014",num:"27",subject:"min",q:`Ａが首輪の付いている飼い主不明の犬を発見し，その不明の飼い主のために犬の世話をした場合に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａが自分の家に犬を連れて帰り，世話をしている場合，犬の飼い主に対して報酬を請求することはできない。
イ．Ａが自分の家に犬を連れて帰り，世話をしている場合，犬の世話について要求される注意義務の程度は自己の財産に対するのと同一の注意で足りる。
ウ．Ａが自分の家に犬を連れて帰り，世話をしていたところ，犬が下駄箱の上に置かれていた花瓶を倒し，壊してしまった。この場合，Ａに過失がなかったとすると，Ａは犬の飼い主に対して損害賠償を請求することができる。
エ．Ａが自分の家に犬を連れて帰り，世話をしていたところ，犬が家の塀を乗り越え，通行人Ｂに怪我をさせた。この場合のＡは，所有の意思を持たないため，動物の占有者としての責任を負わず，ＢがＡに対して損害賠償を請求するには，Ａの過失を立証しなければならない。
オ．Ａは，犬を発見した時，犬が怪我をしていたので，獣医に治療を受けさせ，治療費を支払った。その後，飼い主が犬の返還を求めてきた場合，Ａは，支払った治療費の償還を受けるまで，犬の引渡しを拒むことができる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2014",num:"28",subject:"min",q:`不当利得に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａが公正証書を債務名義としてＢの財産に強制執行をしようとしている場合，Ｂは，その強制執行に係る債務を既に弁済したことを知りつつ，後日返還を請求する旨を留保して，強制執行を避けるためやむを得ずＡに債務の弁済として金員を支払ったときは，Ａに対し，その金員の返還を請求することはできない。
イ．Ａ銀行は，Ｂに帰属している預金を誤ってＣに払い戻したものの，その払戻しについて過失があった場合，その預金について，Ｂへの払戻しをしていないときでも，Ｃに対し，支払った金員の返還を請求することができる。
ウ．債権者Ａが債務者Ｂに対する債権を被担保債権としてＣ所有の不動産の上に抵当権の設定を受けたが，当該抵当権は，Ｂが権限なくＣを代理して設定したものであった場合，その抵当権の実行により不動産の所有権を喪失したＣは，抵当権の実行手続において配当を受けたＡに対し，不当利得の返還を請求することはできない。
エ．債務者Ａが，第三者Ｂから横領した金銭を自己の金銭と識別することができない状態にした上，その金銭で自己の債権者Ｃに対する債務の弁済に充てた場合であっても，社会通念上，Ｂの金銭でＣの利益を図ったと認めるに足りる連結があり，ＣがＡの横領を知り，又は知らなかったことについて重大な過失があるときは，Ｂは，Ｃに対し，不当利得の返還を請求することができる。
オ．ＡがＢに不法な原因のために土地を譲渡し，所有権移転登記をした場合，Ａは，Ｂに対し，不当利得に基づきその返還を請求することができないときであっても，土地の所有権に基づき，所有権移転登記の抹消を請求することができる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2014",num:"29",subject:"min",q:"不法行為に関する次の１から４までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．Ａの前方不注意による自動車の運転によってＢが重傷を負い，Ｂを治療したＣの過失によってＢが死亡した場合において，ＡＣの各行為が共同不法行為となるときであっても，Ｂの死亡という結果の発生に対するＡ及びＣの寄与の割合をそれぞれ確定することができるときは，Ａは，Ｂの死亡による損害の全額を賠償する責任を負わない。",c2:"２．土地の工作物の設置又は保存に瑕疵があることによってＡに損害が生じた場合において，その工作物の占有者であるＢが損害の発生を防止するのに必要な注意をしたときは，その工作物の所有者であるＣが，Ａに対し，その損害を賠償する責任を負う。",c3:"３．複数の加害者であるＡＢの過失と被害者Ｃの過失が競合する１つの交通事故において，その交通事故の原因となった全ての過失の割合を認定することができ，Ａ，Ｂ及びＣの過失割合が順次５：３：２である場合には，ＡＢは，Ｃに対し，連帯して，その損害の８割に相当する額を賠償する責任を負う。",c4:"４．Ａの不法行為により未成年者Ｂが重傷を負った場合において，Ｂが事理弁識能力を有していなかったときであっても，その損害の発生についてＢの親に監督上の過失が認められるときには，Ａは，過失相殺による損害額の減額を主張することができる。",c5:"",c6:"",c7:"",c8:"",a:"1"},{year:"2014",num:"30",subject:"min",q:"Ａ及びＢが婚姻し，Ａの氏を称することにした場合において，その間の子Ｃが満１８歳であった時にＡ及びＢが離婚したことを前提として，次の１から４までの各記述のうち，誤っているものはどれか。",c1:"１．Ａ及びＢの離婚に際し，Ｃの親権者と定められたＢが婚姻前の氏に復した場合に，未成年者であるＣがＢの氏を称するためには，家庭裁判所の許可を得る必要がある。",c2:"２．Ａ及びＢの離婚に際し，Ｃの親権者と定められたＢが，婚姻前の氏に復したことにより，子が父又は母と氏を異にする場合に該当するとして，Ｃが法定の手続に従いＢの氏を称するに至った場合に，Ｃが成年に達した時から法定の期間内にＡの氏に復するためには，家庭裁判所の許可を得る必要はない。",c3:"３．Ａ及びＢの離婚に際し，Ｃの親権者と定められたＢが，Ａとの離婚後にＤと婚姻し，Ｄの氏を称することとした場合，未成年者であるＣは，Ｄの養子となる縁組をしたときに限り，Ｄの氏を称することができる。",c4:"４．Ａ及びＢの離婚当時，Ｅと婚姻してＥの氏を称することとしていたＣは，その後Ｆの養子となる縁組をした場合であっても，Ｆの氏を称することはできない。",c5:"",c6:"",c7:"",c8:"",a:"3"},{year:"2014",num:"31",subject:"min",q:`親権及び未成年後見に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．父又は母による親権の行使が困難又は不相当なことにより子の利益を害するときは，家庭裁判所は，期間を定めることなく親権停止の審判をすることができる。
イ．子の出生前に父母が離婚した場合には，父又は母の請求により，家庭裁判所が親権者を定める。
ウ．未成年後見人が複数いる場合には，共同でその権限を行使するのが原則であるが，家庭裁判所は，その一部の者について，財産に関する権限のみを単独で行使すべきことを定めることができる。
エ．法人は未成年後見人になることができない。
オ．親権を行う者は，自己のためにするのと同一の注意をもって，その管理権を行わなければならない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2014",num:"32",subject:"min",q:`Ａ（３０歳）Ｂ（３０歳）夫婦が，婚姻していないＣ（４２歳）とＤ（４２歳）の間の子Ｅ（４歳）を養子にする場合において，ＣはＥを認知し，ＤはＥの親権者であることを前提として，次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡＢ夫婦がＥとの間で普通養子縁組をする場合においては，Ｄの承諾を得るとともに，家庭裁判所の許可を得る必要があるが，Ｃの同意を得る必要はない。
イ．ＡＢ夫婦とＥとの間で特別養子縁組を成立させるためには，夫婦がともに養親とならなければならず，ＡとＥとの間でのみ特別養子縁組を成立させることはできない。
ウ．ＡＢ夫婦がＥとの間で普通養子縁組をする場合であっても，ＡＢ夫婦がＥの親権者となるためには，親権者の変更について家庭裁判所の許可を得なければならない。
エ．ＡＢ夫婦がＥとの間で普通養子縁組をした場合においては，ＤＥ間の親族関係は存続するが，ＣＥ間の親族関係は終了する。
オ．ＡＢ夫婦とＥとの間で特別養子縁組が成立した場合においては，ＣＥ間及びＤＥ間の親族関係は終了する。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2014",num:"33",subject:"min",q:`相続人と相続の効果に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．代襲相続は，被代襲者が死亡した場合には認められるが，被代襲者が相続欠格又は推定相続人（相続が開始した場合に相続人となるべき者）の廃除によって相続資格を失った場合には認められない。
イ．封印のある自筆証書による遺言書が検認を経ずに開封された場合，相続に関する遺言は無効となる。
ウ．推定相続人の廃除は，遺留分を有する推定相続人についてのみ認められており，被相続人の兄弟姉妹については認められていない。
エ．判例によれば，Ａが死亡し（第１相続），その相続の承認又は放棄をすべき期間中に，Ａの相続人であるＡの子Ｂが死亡した場合（第２相続），Ｂの相続人であるＢの子Ｃは，第２相続の承認又は放棄をすべき期間中に，第１相続と第２相続についてともに相続の承認をすることができるが，第１相続を放棄して，第２相続のみを承認することはできない。
オ．判例によれば，遺言により相続分の指定がされている場合であっても，被相続人の債権者は，法定相続人に対し，法定相続分に従った相続債務の履行を求めることができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2014",num:"34",subject:"min",q:`遺産分割に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．共同相続人の一人であるＡが相続開始前から被相続人の許諾を得て遺産である甲建物において被相続人と同居してきたときは，相続が開始した時から遺産分割が終了するまでの間，引き続きＡに甲建物を無償で使用させる旨の合意があったものと推認され，被相続人の地位を承継した他の相続人らが貸主となり，Ａを借主とする甲建物の使用貸借契約関係が存続することになる。
イ．共同相続人が全員の合意によって遺産分割前に遺産である土地を第三者に売却した場合において，その売買に係る代金債権は，不可分債権である。
ウ．被相続人が所有し，その名義で所有権の登記がされている甲土地を相続人の一人であるＡに相続させる旨の遺言が遺産分割の方法の指定と解される場合，Ａは，登記をしなくても甲土地の所有権の取得を第三者に対抗することができる。
エ．嫡出でない子がいる母の死亡による相続について，その子が遺産の分割を請求しようとする場合において，他の共同相続人らがその子の存在を知らないまま，既に遺産分割の協議を成立させていたときは，その子は，他の共同相続人らに対し，価額のみによる支払の請求権を有する。
オ．遺産分割後に遺産である建物に隠れた瑕疵があったことが判明した場合であっても，当該建物を遺産分割により取得した相続人は，他の相続人に対し，瑕疵担保責任を追及することができない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2014",num:"35",subject:"min",q:`被相続人Ａの遺産は，甲土地（死亡時の価額３０００万円）及び乙建物（死亡時の価額１０００万円）であり，相続債務は存在せず，法定相続人は配偶者Ｂ並びにＡＢ間の子Ｃ及びＤであることを前提として，次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。ただし，特に言及がある場合を除き，相続開始時の貨幣価値への換算並びに特別受益及び寄与分は考えなくてよい。
ア．Ｃが，遺産の維持又は増加につき８００万円相当の特別の寄与をしていた場合，具体的相続分は，Ｂ及びＣがそれぞれ１６００万円，Ｄが８００万円である。
イ．Ａが，死亡する３年前にＤに生計の資本として１０００万円を贈与していた場合，具体的相続分は，Ｂが２５００万円，Ｃが１２５０万円，Ｄが２５０万円である。
ウ．Ａが，死亡する３年前にＣに生計の資本として１０００万円を贈与していたが，遺言で，相続の際には，当該贈与は各自の相続分の算定から除外するように指示していた場合，具体的相続分は，Ｂが２０００万円，Ｃ及びＤがそれぞれ１０００万円である。
エ．Ａが，死亡する３年前にＣに生計の資本として４００万円を贈与し，さらに，遺言で甲土地及び乙建物をＢに相続させるとしていた場合，Ｄは甲土地及び乙建物について遺留分減殺請求をすることができるが，Ｃは遺留分減殺請求をすることができない。
オ．Ａが遺言で甲土地及び乙建物をＣに相続させるとしていた場合において，Ｄが甲土地及び乙建物について遺留分減殺請求権を行使したときは，Ｃは，乙建物についてのみ価額による弁償をすることはできない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2014",num:"36",subject:"min",q:`必要費に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．義務なく他人のために事務の管理を始めた者は，本人のために有益な債務を負担した場合において，その債務が弁済期にあるときは，本人に対し，自己に代わってその弁済をすることを請求することができる。
イ．占有者は，占有物について通常の必要費を支出した場合であっても，果実を取得したときには，回復者にその償還をさせることはできない。
ウ．動産質権者は，継続して占有している質物について通常の必要費を支出した場合であっても，所有者にその償還をさせることはできない。
エ．留置権者は，留置物について通常の必要費を支出した場合には，所有者にその償還をさせることができる。
オ．抵当不動産の第三取得者は，抵当不動産について通常の必要費を支出した場合には，果実を取得したときであっても，抵当不動産の代価から，他の債権者より先にその償還を受けることができる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2014",num:"37",subject:"min",q:`民法と特別法の関係に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．一般社団法人は，法令の規定に従い，定款で定められた目的の範囲内において，権利を有し，義務を負う。
イ．法人が指名債権である金銭債権を譲渡した場合において，当該債権の譲渡につき債権譲渡登記ファイルに譲渡の登記がされたときであっても，その債権の譲渡は，確定日付のある証書によって，譲渡人が債務者に通知をし，又は債務者が承諾をしなければ，債務者以外の第三者に対抗することができない。
ウ．消費者契約（消費者と事業者との間で締結される契約）において，事業者の詐欺により消費者がした意思表示は，取り消すことができる。
エ．建物の賃貸借は，これを登記した場合には，その建物の引渡しがされていないときであっても，その後その建物について物権を取得した者に対し，その効力を生ずる。
オ．製造物（製造又は加工された動産）を業として製造した者は，その引き渡した製造物の欠陥により他人の財産を侵害した場合，故意又は過失がなかったことを証明すれば，それによって生じた損害を賠償する責任を負わない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2014",num:"38",subject:"syo",q:"株式会社を設立する際の定款に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．定款の絶対的記載事項のうち，発行可能株式総数は，登記すべき事項ではない。",c2:"２．支店の所在地は，定款の絶対的記載事項である。",c3:"３．判例によれば，定款に定めのない財産引受けは無効であり，会社の成立後，その財産引受契約を承認する株主総会の特別決議をしても，これによって無効な財産引受契約が有効となるものではない。",c4:"４．定款の認証の手数料は，定款に定めがなくても，成立後の会社が負担する。",c5:"５．公証人による認証を受けた定款を会社の成立後に変更する場合には，改めて公証人による認証を受ける必要はない。",c6:"",c7:"",c8:"",a:"12"},{year:"2014",num:"39",subject:"syo",q:`単元株制度に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．発行済株式の総数が２０万株である会社の単元株式数は，１０００を超えることはできない。
イ．株主は，単元未満株式について，定款に定めがある場合に限り，株主総会において議決権を行使することができる。
ウ．株主は，単元未満株式について，定款に定めがある場合に限り，会社に対してその買取りを請求することができる。
エ．取締役会設置会社でない会社において，単元株式数を減少するには，株主総会の決議が必要である。
オ．種類株式発行会社においては，単元株式数は，株式の種類ごとに定めなければならない。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2014",num:"40",subject:"syo",q:`株式に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．他人の承諾を得てその名義を用いて募集株式の引受けがされた場合には，特段の事情がない限り，その名義の使用を承諾した者が株主となる。
イ．株券発行会社が株券として会社法所定の要件を満たす文書を作成した場合には，その文書は，株主に交付される前であっても，株券としての効力を有する。
ウ．会社の承認を得ないで譲渡制限株式を譲渡担保に供した場合には，その譲渡担保権の設定は，契約当事者間においては有効である。
エ．会社と従業員との間で，従業員の退職に際してはその有する当該会社の譲渡制限株式を会社の指定する者に譲渡する旨の合意をした場合には，その合意は，無効である。
オ．新株発行の無効の訴えにおいて，会社法所定の出訴期間の経過後に新たな無効事由を追加して主張することは，許されない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2014",num:"41",subject:"syo",q:`新株予約権に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．会社は，その発行する新株予約権を引き受ける者の募集をしようとするときは，募集新株予約権と引換えにする金銭の払込みの期日を定めなければならない。
イ．新株予約権は，これを発行した会社の貸借対照表において，負債の部に計上される。
ウ．新株予約権の行使に際し，金銭以外の財産を出資の目的とすることができる。
エ．会社は，その有する自己新株予約権を行使することができない。
オ．募集新株予約権の発行が法令に違反する場合において，既存の新株予約権者が不利益を受けるおそれがあるときは，その新株予約権者は，会社に対し，新株予約権の発行をやめることを請求することができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2014",num:"42",subject:"syo",q:`株主総会に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．株主総会は，会社の本店の所在地において招集しなければならない。
イ．会社法上の公開会社でない取締役会設置会社においては，株主総会の招集通知は，口頭ですることができる。
ウ．譲渡による株式の取得について会社の承認を要する旨の定款の定めは，株主総会の特別決議により，廃止することができる。
エ．取締役がその任務を怠った場合における会社に対する損害賠償責任は，総株主の同意がある場合には，株主総会の決議を経ることなく，これを免除することができる。
オ．株主総会の決議について特別の利害関係を有する者が議長として議事を主宰した場合には，その株主総会の決議は，無効である。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"5"},{year:"2014",num:"43",subject:"syo",q:`取締役及び取締役会に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．取締役会を構成する取締役は，社外取締役であっても，取締役会に上程された事柄についてだけ監視するにとどまらず，代表取締役による会社の業務執行一般につき，これを監視する職務を有する。
イ．取締役会の開催に当たり，取締役の一部の者に対する招集通知を欠いた場合において，その取締役が出席してもなお決議の結果に影響がないと認めるべき特段の事情があるときは，その決議は有効である。
ウ．取締役会の定足数は，開会時に充足されただけでは足りず，討議及び議決の全過程を通じて維持されなければならない。
エ．代表取締役の解職に関する取締役会の決議については，その決議がその代表取締役に告知されて初めて解職の効果が生ずる。
オ．代表取締役が取締役会の決議を経ないで重要な業務執行に該当する取引をした場合には，特段の事情がない限り，その会社以外の者も，取締役会の決議を経ていないことを理由とするその取引の無効を主張することができる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"5"},{year:"2014",num:"44",subject:"syo",q:"会社法上の公開会社の代表取締役の行為を監督・是正する手段に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．会社法所定の要件を満たす株主は，代表取締役による会社の業務執行に関し，法令に違反する重大な事実があることを疑うに足りる事由があるときは，会社の業務及び財産の状況を調査させるため，裁判所に対し，検査役の選任の申立てをすることができる。",c2:"２．会社法所定の要件を満たす株主は，取締役に対し，代表取締役を取締役から解任することを議題とすること及びその理由を示して，株主総会の招集を請求することができる。",c3:"３．会社法所定の要件を満たす株主は，代表取締役の職務の執行に関し法令に違反する重大な事実があった場合には，その代表取締役を取締役から解任することを議案とする株主総会が開催されたか否かを問わず，訴えをもってその解任を請求することができる。",c4:"４．会社法所定の要件を満たす株主は，代表取締役が法令に違反する行為をし，その行為によって会社に著しい損害が生ずるおそれがあるときは，その代表取締役に対し，その行為をやめることを請求することができる。",c5:"５．監査役は，代表取締役につき法令に違反する事実があると認めるときは，遅滞なく，その旨を取締役会に報告しなければならない。",c6:"",c7:"",c8:"",a:"34"},{year:"2014",num:"45",subject:"syo",q:`監査役会設置会社の会計監査人に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．会計監査人の報酬は，定款にその額を定めていないときは，株主総会の決議によって定めなければならない。
イ．会計監査人は，選任後１年以内に終了する事業年度のうち最終のものに関する定時株主総会において別段の決議がされなかったときは，その株主総会において再任されたものとみなされる。
ウ．会計監査人が欠けた場合において，遅滞なく会計監査人が選任されないときは，裁判所は，利害関係人の申立てにより，一時会計監査人の職務を行うべき者を選任することができる。
エ．会計監査人は，取締役が不正の行為をし，又は不正の行為をするおそれがあると認めるときは，遅滞なく，その旨を取締役会に報告しなければならない。
オ．会計監査人は，その職務を行うについて悪意又は重大な過失があったときは，これによって第三者に生じた損害を賠償する責任を負う。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2014",num:"46",subject:"syo",q:"会社法上の公開会社である委員会設置会社の業務執行に関する次の１から５までの各事項のうち，その決定を執行役に委任することができるものを２個選びなさい。",c1:"１．重要な財産の処分",c2:"２．取締役の報酬の決定",c3:"３．株主総会に提出する会計監査人の解任に関する議案の内容の決定",c4:"４．執行役が２名以上ある場合における代表執行役の選定",c5:"５．払込金額が募集株式を引き受ける者に特に有利な金額でない場合における募集株式の発行に係る募集事項の決定",c6:"",c7:"",c8:"",a:"15"},{year:"2014",num:"47",subject:"syo",q:`株式会社の剰余金の配当に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。なお，この会社の純資産額は，３００万円を下回らないものとする。
ア．判例によれば，株主の会社に対する剰余金配当請求権は，剰余金の配当に関する事項が株主総会又は取締役会の決議によって定められる前においても，株式から分離して，これを第三者に譲渡することができる。
イ．判例によれば，会社は，定款において，剰余金の配当につき，効力発生日から５年を経過しても請求がないときはその支払義務を免れる旨を定めることができない。
ウ．会計監査人設置会社でない会社が，定款の定めに基づき，１事業年度の途中において１回に限り取締役会の決議によって剰余金の配当をする場合には，その配当財産は，金銭でなければならない。
エ．金銭以外の財産を配当財産とする剰余金の配当をするには，当該配当財産に代えて金銭を交付することを会社に対して請求する権利を株主に与えるか否かにかかわらず，株主総会の特別決議によらなければならない。
オ．会社が分配可能額を超えて剰余金の配当をした場合には，会社の債権者は，その債権額を上限として，剰余金の配当を受けた株主に対し，交付を受けた配当財産の帳簿価額に相当する金銭を直接自己に支払うよう請求することができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2014",num:"48",subject:"syo",q:`株式会社の発行する社債に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．社債は，その総額が最終事業年度の末日において会社に現存する純資産額を超える場合であっても，発行することができる。
イ．会社が自己が発行した社債を取得するには，定款に別段の定めがない限り，株主総会の決議によらなければならない。
ウ．判例の趣旨によれば，会社は，弁済期の到来した社債権者に対する金銭債権を自働債権とし，社債権者の会社に対する社債の償還請求権を受働債権として，対当額において相殺をすることができる。
エ．社債権者集会において，社債の全部についてするその支払の猶予に関する事項を可決するには，議決権を有する社債権者の過半数が出席し，かつ，出席した議決権者の議決権の総額の３分の２以上の議決権を有する者の同意がなければならない。
オ．社債権者集会の決議の方法が法令に違反し，又は著しく不公正なときは，社債権者は，訴えをもってその決議の取消しを請求することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2014",num:"49",subject:"syo",q:`組織再編行為に係る契約又は計画が株主総会において承認された場合には，反対株主に，自己の有する株式を公正な価格で買い取ることを会社に請求する権利が認められている。この反対株主の株式買取請求権に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．株式買取請求権は，組織再編行為に無効原因がない場合にも認められる。
イ．当事者の申立てにより，裁判所が株式の価格について決定をしたときは，会社は，裁判所の決定した価格に加え，これに対する当該決定の確定後の年６分の利率により算定した利息をも支払わなければならない。
ウ．組織再編行為に係る契約又は計画を承認する株主総会において議決権を行使することができない株主には，株式買取請求権は認められない。
エ．株式買取請求権を行使した株主は，いつでも，会社の承諾を得ることなく，その株式買取請求を撤回することができる。
オ．株式買取請求権が認められる趣旨は，判例によれば，反対株主に会社からの退出の機会を与えるとともに，退出を選択した株主には，組織再編行為がされなかったとした場合と経済的に同等の状態を確保し，さらに，組織再編による相乗効果その他の企業価値の増加が生ずる場合には，これを適切に分配し得るものとすることにより，反対株主の利益を一定の範囲で保障することにある。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2014",num:"50",subject:"syo",q:`株式会社を当事会社とする組織再編行為と登記に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．吸収合併存続会社は，吸収合併の登記をした日に，吸収合併消滅会社の権利義務を承継する。
イ．吸収合併消滅会社の吸収合併による解散は，吸収合併の登記の後でなければ，これをもって第三者に対抗することができない。
ウ．新設合併設立会社は，その本店の所在地において設立の登記をした日に，新設合併消滅会社の権利義務を承継する。
エ．同一の不動産について，その差押えと吸収分割による権利義務の承継との間の優劣は，不動産の差押えの登記の時と吸収分割承継会社が吸収分割の登記をした時の先後で決する。
オ．株式交換完全子会社の株主は，株式交換の登記がされた日に，株式交換完全親会社の株主となる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2014",num:"51",subject:"syo",q:`株式会社の組織に関する訴えに関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．設立の無効の訴えに係る請求を認容する判決が確定したときは，会社は，清算の目的の範囲内において，清算が結了するまでは存続するものとみなされる。
イ．株主総会の決議が無効であることの確認の訴えは，その決議の日から３か月以内に提起しなければならない。
ウ．自己株式の処分の無効の訴えは，自己株式の処分をした会社及びその処分された株式を現在有する株主を被告として，提起しなければならない。
エ．株式交換の無効の訴えに係る請求を棄却する確定判決は，第三者に対してもその効力を有する。
オ．新株予約権の発行の無効の訴えに係る請求を認容する判決が確定したときは，その新株予約権は，将来に向かってその効力を失う。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2014",num:"52",subject:"syo",q:"個人商人の商号に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．商人の商号は，その商人の氏又は名を含まなければならない。",c2:"２．商人が数種の独立した営業を行うときは，その商人は，その各営業につき異なる商号を使用することができる。",c3:"３．商人は，自己と誤認されるおそれのある名称を不正の目的をもって使用する者がある場合において，その名称の使用によって営業上の利益が侵害されたときであっても，商号の登記をしていない限り，その侵害の停止を請求することができない。",c4:"４．自己の商号を使用して営業を行うことを他人に許諾した商人は，当該商人がその営業を行うものと誤認して当該他人と取引をした者に対し，その取引によって生じた債務を当該他人の財産をもって完済することができない場合に限り，連帯してその債務を弁済する責任を負う。",c5:"５．商人は，その営業を廃止するときは，その商号を譲渡することができる。",c6:"",c7:"",c8:"",a:"25"},{year:"2014",num:"53",subject:"syo",q:`次のアからオまでの各債権のうち，判例の趣旨によれば商法第５２２条の適用又は準用がないものを組み合わせたものは，後記１から５までのうちどれか。
ア．商行為によって生じた債務の不履行に基づく損害賠償請求権
イ．債権者のためには商行為ではなく，債務者のためにのみ商行為である行為によって生じた債権
ウ．商行為である金銭消費貸借に関し，利息制限法所定の制限を超えて支払われた利息・損害金についての不当利得返還請求権
エ．質屋を営む個人が商人ではない個人の顧客に対して貸付けを行った場合におけるその貸付債権
オ．満期を白地として振り出された約束手形の白地補充権
（参照条文）
商法第５２２条
 商行為によって生じた債権は，この法律に別段の定めがある場合を除き，５年間行使しないときは，時効によって消滅する。ただし，他の法令に５年間より短い時効期間の定めがあるときは，その定めるところによる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"5"},{year:"2014",num:"54",subject:"syo",q:`商人及び商行為に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。なお，各記述に係る事項について，当事者間に別段の合意はないものとする。
ア．判例によれば，商行為の代理人が本人のためにすることを示さないでこれをした場合において，相手方において，代理人が本人のためにすることを知らなかったときは，代理人は自己のためにその行為をしたものとみなされ，相手方は，本人に対して履行の請求をすることができない。
イ．商人がその営業の範囲内において他人のために金銭の立替えをしたときは，その他人に対し，立替えの日以後の年６分の利率により算定した利息を請求することができる。
ウ．商人がその営業の部類に属する契約の申込みを受けた場合において，その申込みとともに受け取った物品があるときでも，平常取引をする者から申込みを受けたときでなければ，その商人は，その物品を保管する義務を負わない。
エ．判例によれば，保証人がある場合において，保証が債権者にとって商行為であるときは，主たる債務者及び保証人が各別の行為によって債務を負担したときであっても，その債務は，各自が連帯して負担する。
オ．写真の撮影を業とする商人がその営業の部類に属する取引によって商人でない顧客に対して債権を有し，その弁済期が到来している場合において，その商人がその顧客の物を占有しているときは，当該債権がその物に関して生じたものでなくても，その商人は，当該債権の弁済を受けるまで，その物を留置することができる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"3"},{year:"2014",num:"55",subject:"syo",q:`約束手形に関する次のアからオまでの各規律のうち，約束手形の流通性を高める趣旨によるものとしてふさわしくないものを組み合わせたものは，後記１から５までのうちどれか。
ア．約束手形の振出人は，為替手形の引受人と同一の義務を負う。
イ．約束手形の金額が文字及び数字によって記載された場合において，文字によって記載された金額と数字によって記載された金額とに差異があるときは，文字によって記載された金額が手形金額となる。
ウ．約束手形に偽造の署名がある場合でも，他の署名者の債務は，その効力を妨げられない。
エ．約束手形の取得者には，手形法所定の要件の下で善意取得が認められる。
オ．約束手形の所持人が裏書人に対して遡求権を行使するためには，原則として，満期又はこれに次ぐ２取引日内に振出人に対して支払のための呈示をするなど，手形法所定の要件を満たさなければならない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2014",num:"56",subject:"syo",q:"約束手形の振出人と裏書人の手形法上の地位に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．振出人は，手形に「指図禁止」の文字を記載することができるが，裏書人は，新たな裏書を禁止することはできない。",c2:"２．手形金額を１００万円とする手形が振り出された後に，手形金額が２００万円に変造され，その後，裏書がされた場合には，振出人及び裏書人は，１００万円の限度で手形上の債務を負う。",c3:"３．受取人の記載のない手形について振出人に対し手形上の権利を行使するには，受取人の記載を補充する必要があるが，被裏書人の記載のない手形について裏書人に対し手形上の権利を行使するには，被裏書人の記載を補充する必要はない。",c4:"４．振出人及び裏書人が手形所持人に対して合同して責任を負うときは，手形所持人が振出人に対して手形上の債務の履行を請求しても，裏書人に対しては時効の中断の効力を生じない。",c5:"５．手形上の権利は，振出人に対するものであっても，裏書人に対するものであっても，満期の日から１年間行使しないときは，時効により消滅する。",c6:"",c7:"",c8:"",a:"34"},{year:"2014",num:"57",subject:"mso",q:"当事者に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．訴え又は訴えられることにより判決の名宛人となる者が当事者であるとする考え方によれば，訴訟物として他人の権利を主張する者であっても当事者になることができる。",c2:"２．判例の趣旨によれば，土地の共有者の一人が不実の登記名義を有する者を被告としてその抹消登記手続を求める訴えを提起することはできない。",c3:"３．胎児は，不法行為に基づく損害賠償請求権を訴訟物とするときは，当事者になることができる。",c4:"４．判例の趣旨によれば，土地所有者がその所有権に基づいて土地上の建物の共有者を相手方として建物収去土地明渡しを求める訴えを提起する場合には，建物共有者全員を被告にしなければならない。",c5:"５．解散した法人は，清算の目的の範囲内では存続するとみなされるから，その限度で当事者となることができる。",c6:"",c7:"",c8:"",a:"24"},{year:"2014",num:"58",subject:"mso",q:"選定当事者に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．訴訟の係属の後，共同の利益を有する多数の原告の中から，全員のために原告となるべき者が選定されたときは，他の原告は，当然に訴訟から脱退する。",c2:"２．選定当事者の選定は，書面で証明しなければならない。",c3:"３．第三者が係属中の訴訟の原告を自己のためにも原告となるべき者として選定した場合には，選定当事者は，その選定者のために請求の追加をすることができる。",c4:"４．複数の選定当事者のうち一部の者が死亡したときは，訴訟手続は中断する。",c5:"５．選定者は，いつでも選定を撤回することができる。",c6:"",c7:"",c8:"",a:"4"},{year:"2014",num:"59",subject:"mso",q:"訴訟能力に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．法定代理人によらずに未成年者が提起した訴えにおいて，裁判所が請求を棄却する判決をした場合には，その者が自ら提起した控訴は，不適法である。",c2:"２．訴訟の係属中に当事者につき保佐開始の審判がされても，訴訟手続は中断しない。",c3:"３．未成年者が営業を許された場合であっても，その営業に関して訴訟行為をするには，法定代理人によらなければならない。",c4:"４．未成年者が法定代理人によらずにした訴訟行為は，その者が訴訟係属中に成年に達したときは，当然に行為の時にさかのぼって有効となる。",c5:"５．成年被後見人は，日用品の購入に関する訴えを，法定代理人によらずに提起することができる。",c6:"",c7:"",c8:"",a:"2"},{year:"2014",num:"60",subject:"mso",q:"請求の併合に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．配偶者の不貞行為を理由として離婚の訴えを家庭裁判所に提起する場合には，原告は，被告に対する当該不貞行為による慰謝料請求を併合することができる。",c2:"２．土地の所有者が地上建物の所有者に対して建物収去土地明渡しを求める訴えを当該土地の所在地を管轄する裁判所に提起する場合には，原告は，被告に対する貸金返還請求を併合することができない。",c3:"３．土地の明渡請求と当該土地の明渡しまでの賃料に相当する額の損害の賠償請求とが一の訴えでされた場合には，裁判所は，各請求について判決をする必要がある。",c4:"４．消費貸借契約に基づく貸金１００万円の支払請求と，仮に当該契約が無効であるときには不当利得として同額の支払を求める請求とが一の訴えでされた場合において，裁判所は，前者の請求を認容するときは，後者の請求について判決をする必要はない。",c5:"５．不特定物の引渡しの請求とその執行不能の場合における代償請求とが一の訴えでされた場合において，裁判所は，前者の請求を認容するときは，後者の請求について判決をする必要はない。",c6:"",c7:"",c8:"",a:"25"},{year:"2014",num:"61",subject:"mso",q:"訴えの変更に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．判例の趣旨によれば，訴えの変更は，請求の基礎に変更があるときは，相手方が異議を述べなかったときでも許されない。",c2:"２．訴えの変更は，相手方の陳述した事実に基づいてする場合であっても，著しく訴訟手続を遅滞させるときは，許されない。",c3:"３．判例の趣旨によれば，いわゆる訴えの交換的変更においては，旧請求について訴えの取下げ及び相手方の同意又は請求の放棄がなくても，旧請求の訴訟係属は消滅する。",c4:"４．判例の趣旨によれば，ある土地の所有権確認請求訴訟において，原告が初め被告からのその売買による取得を主張し，後にその時効による取得を主張することは，訴えの変更に当たる。",c5:"５．離婚請求に当該婚姻の取消請求を追加することは，請求の基礎の変更にかかわらず，許される。",c6:"",c7:"",c8:"",a:"25"},{year:"2014",num:"62",subject:"mso",q:"訴状審査に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．訴状の審査は，受訴裁判所が行う。",c2:"２．証拠の引用又は添付の不備は，補正命令の対象となる。",c3:"３．補正命令の対象となる事項については，裁判所書記官に命じて補正を促すことができない。",c4:"４．訴状が被告に送達された後は，訴状を却下することができない。",c5:"５．訴状を却下する命令に対しては，不服を申し立てることができない。",c6:"",c7:"",c8:"",a:"4"},{year:"2014",num:"63",subject:"mso",q:"受命裁判官に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．裁判長は，合議体の構成員以外の裁判官を受命裁判官として指定することができる。",c2:"２．裁判所は，相当と認めるときは，受命裁判官に命じて，裁判所外において検証をさせることができる。",c3:"３．弁論準備手続を行う受命裁判官は，文書の証拠調べをすることができない。",c4:"４．受命裁判官が証人尋問を行う場合において，裁判所及び裁判長の職務は，その裁判官が行うが，尋問の順序の変更についての異議の裁判は，受訴裁判所が行う。",c5:"５．裁判所は，受命裁判官をして和解を試みさせることができる。",c6:"",c7:"",c8:"",a:"13"},{year:"2014",num:"64",subject:"mso",q:`当事者の欠席に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．公示送達の方法により訴状及び第一回口頭弁論期日の呼出状が送達された場合において，被告が当該期日に欠席したときは，原告の主張した事実を自白したものとみなす。
イ．最初の弁論準備手続の期日に当事者の一方が欠席した場合には，その当事者があらかじめ提出した準備書面に記載した事項を陳述したものとみなすことができる。
ウ．裁判所は，当事者双方が期日に欠席した場合においても，証人尋問を実施することができる。
エ．判例の趣旨によれば，適法な呼出しを受けた当事者双方が欠席した口頭弁論の期日において弁論を終結し，判決の言渡しのための期日を告知したときは，同期日の呼出状を送達することを要する。
オ．裁判所は，当事者の双方が口頭弁論の期日に欠席した場合において，審理の現状及び当事者の訴訟追行の状況を考慮して相当と認めるときは，終局判決をすることができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2014",num:"65",subject:"mso",q:`訴訟手続における当事者の同意・異議に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．第一審裁判所は，訴訟が法令の定めによりその専属管轄に属する場合においても，当事者の申立て及び相手方の同意があるときは，訴訟の全部又は一部を申立てに係る地方裁判所又は簡易裁判所に移送しなければならない。
イ．当事者が補助参加について異議を述べなければ，補助参加人が参加の理由を疎明する必要はない。
ウ．裁判所は，争点及び証拠の整理をするに当たり，訴訟関係を明瞭にするため必要があると認める場合において，専門的な知見に基づく説明を聴くために専門委員を手続に関与させるときは，当事者の同意を得なければならない。
エ．裁判所は，争点及び証拠の整理を行うため必要があると認める場合において，事件を弁論準備手続に付するときは，当事者の同意を得なければならない。
オ．控訴審において，反訴の提起の相手方が異議を述べないで反訴の本案について弁論をしたときは，反訴の提起に同意したものとみなされる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2014",num:"66",subject:"mso",q:`弁論準備手続に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．弁論準備手続では，相手方が出頭している場合であっても，準備書面に記載していない事実を主張することができない。
イ．弁論準備手続の期日において，証人尋問の採否を決定することができる。
ウ．裁判所及び当事者双方が音声の送受信により同時に通話をすることができる方法によって弁論準備手続の期日における手続を行う場合には，当該期日において和解をすることができない。
エ．弁論準備手続で提出された資料は，当事者が口頭弁論において弁論準備手続の結果を陳述しなければ，これを訴訟資料とすることができない。
オ．弁論準備手続の終結後には，新たな攻撃又は防御の方法を提出することができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2014",num:"67",subject:"mso",q:`調査の嘱託に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．調査の嘱託は，裁判所が職権ですることができる。
イ．判例の趣旨によれば，調査の嘱託の嘱託先が嘱託に応じて書面を裁判所に送付した場合において，裁判所が当該書面を証拠とするには，口頭弁論において提示して当事者に意見陳述の機会を与えれば足り，当事者の援用を要しない。
ウ．調査の嘱託は，個人に対してすることができる。
エ．調査の嘱託の嘱託先が調査に応じない場合には，過料の制裁が科される。
オ．調査の嘱託を釈明処分としてすることはできない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2014",num:"68",subject:"mso",q:"証人尋問又は当事者尋問に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．証人の尋問は，その尋問の申出をした当事者及び他の当事者より先に裁判長がすることはできない。",c2:"２．当事者本人を尋問する場合においてその当事者に宣誓をさせるかどうかは，裁判所の裁量に委ねられている。",c3:"３．裁判所は，当事者本人を尋問する場合においては，その当事者が正当な理由なく期日に出頭しないときでも，その勾引を命ずることはできない。",c4:"４．裁判所は，相当と認める場合において，当事者に異議がないときは，証人の尋問に代え，その証人に書面の提出をさせることができる。",c5:"５．当事者の訴訟代理人を尋問するときは，当事者尋問の規定による。",c6:"",c7:"",c8:"",a:"15"},{year:"2014",num:"69",subject:"mso",q:"文書の作成者に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．Ａ名義の文書が存在する場合に，その作成者がＡとなるのは，Ａ自らが文書を作成した場合であり，Ａの依頼を受けた使者Ｂが文書を作成した場合の作成者はＢである。",c2:"２．Ａ名義の文書をＢが無断で作成した場合であっても，当該文書がＢを作成者とするものとして提出されたときは，その成立の真正が認められる。",c3:"３．挙証者の相手方が文書の成立の真正につき認否をしなかった場合には，成立に争いがあるものとして扱われる。",c4:"４．債務者とその連帯保証人の署名がある借用証書は，一通の書面であっても，作成者が複数の文書である。",c5:"５．判例の趣旨によれば，相手方が，文書について，挙証者の主張する作成者の意思に基づいて作成されたものであることを認めたときでも，裁判所はそれに拘束されず，当該作成者の意思に基づいて作成されたものではないと判断することができる。",c6:"",c7:"",c8:"",a:"13"},{year:"2014",num:"70",subject:"mso",q:`Ｘは，Ｙに対し，Ｙの脇見運転による過失を原因とする交通事故により傷害を受け，５００万円の損害を被ったと主張して，不法行為に基づく損害賠償請求として５００万円の支払を求める訴えを提起したところ，Ｙは，Ｘには飛び出してきた不注意があるが，自分にも脇見運転による過失があったことを認めると主張した。Ｘ及びＹからこれ以外の主張がなかったとして，次のアからウまでの裁判所の判決に関する後記１から５までの各記述のうち，判例の趣旨に照らし正しいものはどれか。
ア．裁判所は，証拠調べの結果，ＹがＸに対して５００万円の弁済をしている事実を認めて，Ｘの請求を棄却する判決をした。
イ．裁判所は，証拠調べの結果，不法行為の成立を認めつつ，Ｘの飛び出しの事実を認めて，３００万円の範囲で，Ｘの請求を認容した。
ウ．裁判所は，証拠調べの結果，Ｙの脇見運転による過失は認められないとして，Ｘの請求を棄却した。`,c1:"１．アからウまでのいずれの判決も，弁論主義に反する。",c2:"２．アからウまでのいずれの判決も，弁論主義に反しない。",c3:"３．アの判決は弁論主義に反するが，イ及びウの判決は弁論主義に反しない。",c4:"４．ア及びイの判決は弁論主義に反するが，ウの判決は弁論主義に反しない。",c5:"５．ア及びウの判決は弁論主義に反するが，イの判決は弁論主義に反しない。",c6:"",c7:"",c8:"",a:"5"},{year:"2014",num:"71",subject:"mso",q:`Ｘは，Ｙと締結した自らを注文主とする建物建築請負契約をＹの債務不履行を理由に工事完成前に解除し，Ｙを被告として，総額１０００万円の損害賠償債権のうちの一部であることを明示して４００万円の支払を求める訴えを提起した。この場合における次のアからウまでの各記述について説明した後記１から５までのうち，判例の趣旨に照らし正しいものはどれか。
ア．Ｙから何らの抗弁が提出されることなくＸの請求を全部認容する判決が確定したときは，この確定判決の既判力は，残部の請求に及ばない。
イ．裁判所は，Ｙの債務不履行に基づくＸの１０００万円の損害賠償債権は認められるが，Ｙから提出されたＸに対する売買代金債権４００万円を自働債権とする相殺の抗弁に理由があるとの心証を得たときは，Ｘの請求を棄却すべきである。
ウ．Ｙの債務不履行が認められないとしてＸの請求を棄却する判決が確定したときは，ＸがＹに対し残部の支払を求める訴えを提起することは，特段の事情がない限り，信義則に反して許されない。`,c1:"１．アからウまでの各記述はいずれも正しい。",c2:"２．アの記述は正しくないが，イ及びウの各記述は正しい。",c3:"３．イの記述は正しくないが，ア及びウの各記述は正しい。",c4:"４．ウの記述は正しくないが，ア及びイの各記述は正しい。",c5:"５．ア及びイの各記述は正しくないが，ウの記述は正しい。",c6:"",c7:"",c8:"",a:"3"},{year:"2014",num:"72",subject:"mso",q:"訴えの取下げに関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．訴えは，その一部を取り下げることができる。",c2:"２．訴えは，控訴審では取り下げることができない。",c3:"３．訴えの取下げは，相手方が本案について口頭弁論をした後には，その同意なしにすることができない。",c4:"４．訴えの取下げは，和解の期日において口頭ですることができる。",c5:"５．請求を放棄した場合と異なり，訴えを取り下げた場合には，確定判決と同一の効力は生じない。",c6:"",c7:"",c8:"",a:"2"},{year:"2014",num:"73",subject:"mso",q:"当事者が訴訟外でした合意に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．第一審の管轄裁判所を定める当事者の合意が電磁的記録によってされたときは，その合意は，効力を生じない。",c2:"２．判例の趣旨によれば，原告と被告との間で訴えの取下げの合意が成立したときは，訴訟は，直ちに終了する。",c3:"３．訴訟の管轄をある地方裁判所の専属管轄とする旨の合意がある場合であっても，訴えが他の地方裁判所に提起され，被告が管轄違いの抗弁を提出しないで本案について弁論をしたときは，その地方裁判所は，管轄権を有する。",c4:"４．紛争を特定しないで一切起訴しない旨の合意は，有効である。",c5:"５．当事者双方が，第一審の終局判決の後，共に上告をする権利を留保して控訴をしない旨の合意をしたときは，その合意は，有効である。",c6:"",c7:"",c8:"",a:"35"},{year:"2014",num:"74",subject:"mso",q:"控訴に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．訴訟費用の負担の裁判に対しては，独立して控訴をすることができない。",c2:"２．控訴が不適法でその不備を補正することができないことが明らかであるときは，第一審裁判所は，決定で，控訴を却下しなければならない。",c3:"３．控訴審の口頭弁論期日において，当事者は，第一審における口頭弁論の結果を陳述しなければならない。",c4:"４．第一審判決がその理由によれば不当である場合においても，他の理由により正当であるときは，控訴裁判所は，控訴を棄却しなければならない。",c5:"５．附帯控訴は，控訴の取下げがあったときは，控訴期間内に提起されたものであっても，その効力を失う。",c6:"",c7:"",c8:"",a:"5"},{year:"2014",num:"75",subject:"mso",q:"再審に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．法律により判決に関与することができない裁判官が判決に関与した場合には，当事者が上告によりその事由を主張したときであっても，再審の訴えを提起することができる。",c2:"２．確定判決が前に確定した判決と抵触することを再審事由とする場合には，再審期間の制限はない。",c3:"３．再審の訴えを提起した当事者は，不服の理由を変更することができる。",c4:"４．裁判所は，再審の訴えが不適法である場合には，判決で，これを却下し，再審の事由がない場合には，判決で，再審の請求を棄却しなければならない。",c5:"５．裁判所は，再審の本案の審理及び裁判をする場合において，判決を正当とするときは，再審の請求を棄却しなければならない。",c6:"",c7:"",c8:"",a:"14"},{year:"2014",num:"1",subject:"kei",q:"刑罰論に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．応報刑論は，産業革命に伴う工業化・都市化によって累犯が増加したことを契機として，支持者が増えた。",c2:"２．応報刑論に対しては，重大な犯罪を犯した者であっても，再犯可能性がなければ刑罰を科すことができなくなるとの批判がある。",c3:"３．応報刑論に対しては，論者が前提としている人間の意思の自由が科学的に証明されていないとの批判がある。",c4:"４．応報刑論に対しては，犯罪を防止するために罪刑の均衡を失した重罰化を招くおそれがあるとの批判がある。",c5:"５．応報刑論に対しては，刑罰と保安処分の区別がなくなるとの批判がある。",c6:"",c7:"",c8:"",a:"3"},{year:"2014",num:"2",subject:"kei",q:"窃盗罪に関する次の１から５までの各記述を判例の立場に従って検討し，正しいものを２個選びなさい。",c1:"１．宿泊客が，旅館の貸与した浴衣を自分のものにしようと考え，これを着用したまま，玄関にいた支配人に「ちょっと向かいのポストまで手紙を出してくる。」と告げ，支配人に「いってらっしゃいませ。」と言われて旅館を立ち去った行為には，窃盗罪は成立しない。",c2:"２．送金銀行の手違いで，自己名義の預金口座に誤って入金されたことを知った者が，これを自分のものにしようと考え，同口座のキャッシュカードを用いて現金自動預払機から全額を引き出した行為には，窃盗罪は成立しない。",c3:"３．民家で火災が発生し，消火活動に参加した者が，一人暮らしだった住人の焼死体に付いていた金のネックレスを発見して自分のものにしようと考え，これを取り外して持ち去った行為には，窃盗罪は成立しない。",c4:"４．施錠された友人所有のキャリーバッグを同人から預かり保管していた者が，在中する衣類を自分のものにしようと考え，友人に無断でキャリーバッグの施錠を解き，同衣類を取り出した行為には，窃盗罪は成立しない。",c5:"５．パチスロ機を誤作動させてメダルを窃取することを共謀した者が，実行者の犯行を隠ぺいするため，実行者の隣で通常の遊戯方法によりメダルを取得した場合，そのメダルを被害品とする窃盗罪は成立しない。",c6:"",c7:"",c8:"",a:"35"},{year:"2014",num:"3",subject:"kei",q:`次のアからオまでの各記述を判例の立場に従って検討し，正しい場合には１を，誤っている場合には２を選びなさい。
ア．法律を知らなかったとしても，そのことによって，罪を犯す意思がなかったとすることはできないが，情状により，その刑を減軽し，又は免除することができる。
イ．心神喪失又は心神耗弱に該当するかどうかは法律判断であって，専ら裁判所の判断に委ねられており，犯行当時の病状，犯行前の生活状態，犯行の動機・態様等を総合して判断される。
ウ．先天的に耳が聞こえない者の行為については，必要的にその刑を減軽し，又は免除する。
エ．１４歳未満の者であっても，行為の是非善悪を弁識し，その弁識に従って行動する能力が十分に認められる場合があり，そのような者については処罰されることがある。
オ．親告罪について，告訴権者に対して自己の犯罪事実を告げ，その措置に委ねたときは，刑を減軽することができる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"21221"},{year:"2014",num:"4",subject:"kei",q:`賄賂罪についての次の【判旨】に関する後記１から５までの各【記述】のうち，【判旨】の理解として正しいものはどれか。
【判 旨】
甲は，Ａ県警察の警部補としてＡ県警察Ｘ警察署地域課に勤務し，犯罪の捜査等の職務に従事していたものであるが，公正証書原本不実記載等の事件につきＡ県警察Ｙ警察署長に対し告発状を提出していた者から，同事件について，告発状の検討，助言，捜査情報の提供，捜査関係者への働き掛けなどの有利かつ便宜な取り計らいを受けたいとの趣旨の下に供与されるものであることを知りながら，現金の供与を受けたというのである。警察法等の関係法令によれば，Ａ県警察の警察官の犯罪捜査に関する職務権限は，Ａ県警察の管轄区域であるＡ県の全域に及ぶと解されることなどに照らすと，甲が，Ｘ警察署管内の交番に勤務しており，Ｙ警察署刑事課の担当する上記事件の捜査に関与していなかったとしても，甲の上記行為は，その職務に関し賄賂を収受したものであるというべきである。
【記 述】`,c1:"１．この【判旨】は，Ｘ警察署地域課とＹ警察署刑事課とは一般的職務権限を異にするが，同じＡ県警察内であり犯罪捜査という点で職務が密接に関連することから，甲が受けた現金の供与も甲の職務に関するものと認めたものである。",c2:"２．この【判旨】は，職務関連性の判断において，甲が所属するＡ県警察の警察官に対して法令が与えた一般的職務権限に属する職務行為であるか否かを重視している。",c3:"３．この【判旨】は，警察官が捜査情報を漏えいすることはそもそも禁じられているので，これが職務行為や職務密接関連行為に該当することはないと考えている。",c4:"４．この【判旨】は，甲が以前Ｙ警察署刑事課に勤務中に扱った事件に関して，Ｘ警察署地域課に異動になった後に現金の供与を受けたとしても，供与を受けた時点で公務員である以上収賄罪が成立することを認めたものである。",c5:"５．この【判旨】は，当該事件の捜査を担当しているＹ警察署刑事課所属の警察官への働き掛けは，あっせん収賄罪にいう「あっせん」であり，これが職務行為や職務密接関連行為に該当することはないと考えている。",c6:"",c7:"",c8:"",a:"2"},{year:"2014",num:"5",subject:"kei",q:`次の【事例】及び【判旨】に関する後記１から５までの各【記述】のうち，正しいものはどれか。
【事 例】
スキューバダイビングの潜水指導者である被告人は，夜間，指導補助者としての経験が極めて浅く夜間潜水の経験も数回の指導補助者と，潜水経験に乏しく技術が未熟で夜間潜水の経験のない受講生を連れて，夜間潜水の講習指導を開始した。被告人は，指導補助者及び受講生と共に潜水を開始し，途中，魚を捕えて受講生に見せた後，再び移動を開始したが，その際，指導補助者と受講生がそのまま自分に付いてくるものと考え，指導補助者に特別の指示を与えることなく，後方を確認しないまま前進した。この間，指導補助者と受講生は，魚の動きに気をとられて被告人の移動に気付かず，海流によって沖に流された。これにより，被告人は指導補助者と受講生を見失い，他方，指導補助者は被告人を探して沖に向かって数十メートル水中移動を行い，受講生もこれに追随した。指導補助者は，受講生の圧縮空気タンク内の空気量が少なくなっていることを確認して一旦海上に浮上したものの，風波のため水面移動が困難であると判断し，受講生に再び水中移動を指示した。これに従った受講生は，自分の空気量を確認しないまま水中移動を続けたため，途中で空気を使い果たしてしまい，パニック状態に陥り，自ら適切な措置を採ることができないまま，でき死するに至った。
【判 旨】
被告人が，夜間潜水の講習指導中，受講生らの動向に注意することなく不用意に移動して受講生らのそばから離れ，同人らを見失うに至った行為は，それ自体が，指導者からの適切な指示，誘導がなければ事態に適応した措置を講ずることができないおそれがあった受講生をして，海中で空気を使い果たし，ひいては適切な措置を講ずることもできないままに，でき死させる結果を引き起こしかねない危険性を持つものであり，被告人を見失った後の指導補助者及び受講生に適切を欠く行動があったことは否定できないが，それは被告人の上記行為から誘発されたものであって，被告人の行為と受講生の死亡との間の因果関係を肯定するに妨げないというべきである。
【記 述】`,c1:"１．【判旨】は，行為時に一般人が認識・予見が可能であった事情及び行為者が特に認識・予見していた事情を考慮して因果関係の有無を判断する見解に立つことを示している。",c2:"２．【判旨】は，被告人の行為と結果発生との間の因果関係の有無を判断するに際し，その間に介在した被害者である受講生の行動と被告人の行為との関係を考慮していない。",c3:"３．【判旨】は，被告人の行為の危険性が結果へと現実化したか否かによって，被告人の行為と結果発生との間の因果関係の有無を判断したものと理解することができる。",c4:"４．【判旨】は，被告人の行為と結果発生との間に条件関係が認められれば，因果関係を肯定することを示している。",c5:"５．【判旨】は，被告人の行為が結果発生の危険性を有するものである場合には，第三者である指導補助者の適切を欠くどのような行為が介在したとしても，その行為は被告人の行為により誘発されたことになるとしている。",c6:"",c7:"",c8:"",a:"3"},{year:"2014",num:"6",subject:"kei",q:"各種偽造の罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．偽造通貨行使罪及び偽造有価証券行使罪の「行使」とは，各客体を真正なものとして使用することをいい，例えば，自己に資力があることを証明するために偽造紙幣又は偽造株券を相手に示すことも「行使」に該当する。",c2:"２．偽造通貨，偽造有価証券又は偽造公文書を行使の目的で情を知る者に占有移転した場合には，各客体の交付罪が成立する。",c3:"３．偽造通貨行使罪，偽造有価証券行使罪及び偽造公文書行使罪の各客体は，いずれも行使の目的で作成されたものでなければならない。",c4:"４．偽造通貨又は偽造有価証券を行使して相手から金品をだまし取った場合，詐欺罪は偽造通貨行使罪には吸収されるが，詐欺罪と偽造有価証券行使罪とは牽連犯となる。",c5:"５．偽造通貨又は偽造有価証券を収得した後に，それが偽造されたものであることを知るに至った者が，これを行使した場合には，各客体の収得後知情行使罪が成立する。",c6:"",c7:"",c8:"",a:"4"},{year:"2014",num:"7",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討し，正しいものを２個選びなさい。",c1:"１．Ａは，ＢがＶを殺害しようとして拳銃で狙っているのを見て，Ｂの発射した弾丸がＶに命中しなかった場合には自らＶを射殺してＢの目的を達成させようと考え，Ｂの知らない間に拳銃を持って付近に待機していたが，Ｂの発射した弾丸がＶに当たってＶが死亡した。この場合，Ａには殺人既遂罪の幇助犯が成立する。",c2:"２．Ａは，Ｂが賭博場を開くことを知って，これを手伝うつもりでＢには告げずに客を誘って賭博場に案内して賭博をさせた。この場合，Ａには賭博場開張図利罪の幇助犯が成立する。",c3:"３．Ａは，ＢがＶを殴打しようとしているときに，Ｂに気付かれずにＶの足を押さえ付けたため，Ｂは，Ｖの顔面を殴打して顔面打撲の傷害を負わせることができた。この場合，Ａには傷害罪の共同正犯が成立する。",c4:"４．Ａは，Ｂにその夫Ｖを殺害させようと考えて，Ｂの知らない間に，Ｖの不倫の現場写真と拳銃をＢの居宅のテーブルに置いておいたところ，それを見たＢがＶに対する殺意を抱き，その拳銃を発砲してＶを殺害した。この場合，Ａには殺人既遂罪の単独正犯が成立する。",c5:"５．Ａは，ＢがＶに致死量に満たない毒入りのコーヒーを渡したのを知って，Ｖを殺害しようと考え，Ｂの知らない間に，Ｂの入れた毒と併せて致死量となる量の毒をそのコーヒーに入れ，その後，Ｖがそのコーヒーを飲んで死亡した。この場合，Ａには殺人既遂罪の単独正犯が成立する。",c6:"",c7:"",c8:"",a:"25"},{year:"2014",num:"8",subject:"kei",q:"次の１から５までの各事例における甲の罪責を判例の立場に従って検討した場合，甲に電子計算機使用詐欺罪が成立するものはどれか。",c1:"１．甲は，電磁的記録部分を偽造したキャッシュカードを使って現金を得ようと考え，これを乙銀行に設置された現金自動預払機に挿入して作動させ，これに保管されていた現金を引き出した。",c2:"２．甲は，消費者金融会社の無人契約機を使い，同無人契約機とオンラインで結ばれているオンラインセンターにいたオペレーター乙に対し，Ｘに成り済まして会員契約を締結した上，同無人契約機を操作して金銭の借入れを申し込み，甲をＸと誤信した乙に同社の電子計算機を操作させ，同社名義の預金口座から甲の管理するＸ名義の預金口座に５０万円を振り込ませた。",c3:"３．甲は，Ａの所有する不動産を勝手に処分するために，Ｘ地方法務局の登記官乙に対し，Ａの所有権登記がある不動産につき自己に所有権が移転した旨内容虚偽の申告をし，乙をして同法務局内の電子計算機に接続されたハードディスクに記録されていた同不動産の登記に関する電磁的記録をその旨書き換えさせた。",c4:"４．甲は，盗んだクレジットカードの名義人乙を装い，インターネットを使用した取引の決済に用いることができる電子マネーの購入手続として，乙の氏名やカード番号等の情報をインターネットを介してクレジットカード会社が使用する電子計算機に送信し，同電子計算機に接続されたハードディスクに乙が電子マネーを購入した旨の電磁的記録を作ってその電子マネーの利用権を取得した。",c5:"５．甲は，自己がインターネット上に開設した天気予報サイトのホームページの閲覧数を増やして広告収入を増やそうと考え，競合会社の電子計算機に接続されたハードディスクに記録されていた同社の天気予報サイトのホームページに関する電磁的記録を書き換えて予報が外れるようにさせたところ，自己の開設したサイトのホームページ閲覧数が増えて広告収入も増えた。",c6:"",c7:"",c8:"",a:"4"},{year:"2014",num:"9",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合，誤っているものはどれか。",c1:"１．甲は，電話線を盗む目的で，電柱に架設されていた電話会社所有の電話線を切断しているところを警察官に発見された。甲には窃盗罪の実行の着手が認められる。",c2:"２．甲は，深夜，金品窃取の目的で電器店に侵入し，懐中電灯で真っ暗な店内を照らしたところ，陳列棚に電気器具類があることを認識したが，なるべく現金を盗みたいと思い，歩いてレジの前に至ったところで警備員に発見された。甲には窃盗罪の実行の着手が認められる。",c3:"３．甲は，夜間，一人で歩いていたＶ女を見付け，約５キロメートル先のひとけのない工事現場にＶ女を連れ込んで強姦することを決意し，Ｖ女を殴って失神させた上，近くに停めていたダンプカーの助手席にＶ女を乗せて発進させた。甲には強姦罪の実行の着手が認められる。",c4:"４．甲は，X の住んでいる家を焼損する目的で，これと約５０センチメートル隔てて隣接している木造物置小屋の中のわらや薪に灯油をまいて放火したが，物置小屋の一部を焼損するにとどまった。甲には現住建造物等放火罪の実行の着手が認められる。",c5:"５．甲は，登校中の子供に毒入りジュースを飲ませてこれを殺害する目的で，前日の夜に，夜間は人通りのない通学路に致死量を超える毒を混入させたペットボトル入りのジュースを置いた。甲には殺人罪の実行の着手が認められる。",c6:"",c7:"",c8:"",a:"5"},{year:"2014",num:"10",subject:"kei",q:`刑法第２３０条の２に関する次の各【見解】についての後記アからオまでの各【記述】を検討し，正しい場合には１を，誤っている場合には２を選びなさい。
【見 解】
Ａ説：刑法第２３０条の２の規定は，名誉毀損罪について真実性の証明がなされたことを処罰阻却事由として定めたものである。
Ｂ説：刑法第２３０条の２の規定は，他人の名誉を毀損する表現の内容が証明可能な程度に真実であることを違法性阻却事由として定めたものである。
【記 述】
ア．Ａ説は，刑法第２３０条の２が真実性の証明に係る立証責任を被告人に負担させていることと整合的であると評価されている。
イ．Ｂ説に対しては，他人の名誉を毀損する表現をした者がその表現内容について真実であると信じた場合には，常に故意がないことになり相当でないという批判が向けられている。
ウ．Ａ説に立つことと，相当な資料・根拠に基づく言論活動について刑法第３５条による違法性阻却の余地を認めることは両立しない。
エ．Ｂ説によれば，他人の名誉を毀損した者が，その表現した事実が証明可能な程度に真実であると誤信し，その誤信したことについて，確実な資料・根拠に照らし相当の理由がある場合には，違法性が阻却されると考えることになる。
オ．Ａ説に対しては，真実の言論について違法性を認める点に疑問があるとの批判が向けられている。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"12221"},{year:"2014",num:"11",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討し，正しいものを２個選びなさい。",c1:"１．甲は，乙に対し，丙の日本刀を盗んでくれば高値で買ってやると申し向け，乙が盗んできた日本刀を買い受けた。甲には，窃盗教唆罪及び盗品等有償譲受け罪が成立し，これらは併合罪となる。",c2:"２．甲は，乙が強盗を行うつもりであることを知りながら，乙に模造拳銃１丁を貸し与えたところ，乙は，２店のコンビニエンスストアで，同模造拳銃を使ってそれぞれ強盗を行った。甲には，２個の強盗幇助罪が成立し，これらは併合罪となる。",c3:"３．甲は，乙を殺害する目的で乙が居住する家に侵入し，乙及び偶然その場に居合わせた丙をそれぞれ殺害した。甲には，乙に対する住居侵入罪及び殺人罪が成立し，これらは牽連犯となり，これと丙に対する殺人罪が併合罪となる。",c4:"４．甲は，強盗の目的で，路上を連れ立って歩いていた乙及び丙に対し，包丁の刃先を両名の方に向けながら「お前ら金を出せ。出さないと殺すぞ。」と言って脅迫し，両名からそれぞれ現金を奪った。甲には，２個の強盗罪が成立し，これらは併合罪となる。",c5:"５．甲は，恐喝の手段として乙を監禁し，乙から現金を喝取した。甲には，監禁罪及び恐喝罪が成立し，これらは併合罪となる。",c6:"",c7:"",c8:"",a:"15"},{year:"2014",num:"12",subject:"kei",q:"刑法第１３０条の住居侵入等の罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．本罪の客体は，人の住居若しくは邸宅，又は人の看守する建造物若しくは艦船である。",c2:"２．刑法第１３０条の規定する「看守」とは，現実に人が監視していることを意味し，単に出入口に鍵をかけてその鍵を保管しただけでは足りない。",c3:"３．集合住宅の１階出入口から各居室の玄関までの共用部分は，刑法第１３０条の規定する「住居」に当たる。",c4:"４．建造物に付属し，その利用に供される囲にょう地は，刑法第１３０条の規定する「建造物」に当たる。",c5:"５．１棟の建物の低層階に商業施設，高層階に住居がそれぞれ存在する場合，当該建物全体が刑法第１３０条の規定する「住居」に当たる。",c6:"",c7:"",c8:"",a:"4"},{year:"2014",num:"13",subject:"kei",q:`故意に関する次の各【見解】についての後記１から５までの各【記述】のうち，正しいものを２個選びなさい。
【見 解】
Ａ説：故意の有無については，構成要件を基準にして判断すべきであり，殺人罪においては，行為者の認識した事実と発生した事実が，およそ「人を殺す」という点で一致していれば故意が認められる。
Ｂ説：故意の有無については，構成要件を基準にして判断すべきであるが，殺人罪においては，行為者の認識した事実と発生した事実が，「その人を殺す」という点で一致していなければ故意は認められない。
【記 述】`,c1:"１．Ａ説に対しては，客体の錯誤と方法の錯誤の区別が必ずしも明らかではない場合があり，その場合の故意の有無につき，どのように判断するのか明確ではないとの批判がある。",c2:"２．Ｂ説に対しては，故意以外の構成要件該当性は法益主体ごとに判断するのに，故意の有無についてのみ法益主体の相違を問題にしないのは論理的でないとの批判がある。",c3:"３．侵害が生じた客体に錯誤はないが，侵害に至る因果関係に錯誤がある場合の故意の有無について，Ａ説かＢ説かによる差はない。",c4:"４．駅のホームにいた人を甲だと思い，甲を殺そうと考え，電車が近づいてきたときにその人をホームから突き落としてれき死させたところ，その人が甲ではなく，別人の乙であった場合，Ａ説・Ｂ説のいずれによっても，乙に対する殺人罪の故意が認められることになる。",c5:"５．狩猟中，動く物体を見付け，これを日頃から恨みを抱いていた甲だと思い，甲を殺そうと考え，その動く物体を狙って猟銃を発砲し，これに弾丸を命中させたが，実際に弾丸が命中したのは，甲ではなく，甲の飼い犬であった場合，Ａ説によれば器物損壊罪の故意が認められ，Ｂ説によれば同罪の故意が認められないことになる。",c6:"",c7:"",c8:"",a:"34"},{year:"2014",num:"14",subject:"kei",q:"強盗の罪に関する次の１から５までの各記述を判例の立場に従って検討し，正しいものを２個選びなさい。",c1:"１．甲は，金品窃取の目的で乙方内を物色中，金品を手にする前に乙に見付かり，逮捕を免れるため，乙に暴行を加えてその反抗を抑圧し，逃走した。甲には事後強盗未遂罪が成立する。",c2:"２．甲は，金品窃取の目的で乙方の金庫の扉を開けていたところを乙に見付かり，自分が犯人であることを警察に告げられることを防ぐため，乙を殺害し，そのまま逃走した。甲には強盗殺人未遂罪が成立する。",c3:"３．甲は，路上で乙とけんかになり，乙の胸をナイフで刺して殺害したが，そのすぐ後，乙が身に付けていた腕時計に気付き，自分のものにしようと考え，これを持ち去った。甲には強盗殺人既遂罪が成立する。",c4:"４．甲が，金品を奪う目的で，乙に暴行を加えてその反抗を抑圧したところ，乙は，持っていたバッグをその場に放置して逃走したことから，甲は，そのバッグを持ち去った。甲に強盗既遂罪は成立しない。",c5:"５．甲は，深夜，事務所で窃盗をしようと考え，窃盗の際に誰かに発見されたら包丁で脅して逃げるため，これを携帯しながら盗みに入ることができそうな事務所を探して街をはいかいしていたが，悔悟の念を生じたため，盗みに入ることを断念した。甲に強盗予備罪の中止犯は成立しない。",c6:"",c7:"",c8:"",a:"15"},{year:"2014",num:"15",subject:"kei",q:`次の【事例】及び各【見解】に関する後記１から５までの各【記述】のうち，誤っているものはどれか。
【事 例】
甲は，乙から裁判の証人として請求されてＸ裁判所から呼出しを受けたところ，証人尋問期日の３日前にその不出頭を懸念した乙から「俺が裁判所まで連れて行くから，証人尋問の日までここにいろ。」と言われ，見張りを付けられてマンションの一室に監禁された。甲は，自己の生命身体に対する危険は感じなかったものの，証人として出廷したくないと思い，同室に放火して騒ぎを起こし，見張りの者が消火に当たっている隙に逃亡しようと考え，同室の壁等に灯油をまいて放火し，同室の一部及びその上階の第三者が住む部屋の一部を焼損させた。
【見 解】
Ａ説：当該避難行為が「やむを得ずにした行為」でなければ緊急避難は認められないが，当該行為が危難を避けるための一つの方法と認められれば，法益権衡の要件を欠いても過剰避難が成立する。
Ｂ説：当該避難行為が「やむを得ずにした行為」でなければ緊急避難は認められないが，「やむを得ずにした行為」でなくとも法益権衡の要件を充たしていれば過剰避難が成立し，また，「やむを得ずにした行為」であって，法益権衡の要件を欠く場合にも過剰避難が成立する。
Ｃ説：当該避難行為が「やむを得ずにした行為」でなければ緊急避難，過剰避難とも認められず，過剰避難は，「やむを得ずにした行為」であって，かつ，法益権衡の要件を欠く場合に成立する。
【記 述】`,c1:"１．【事例】に，更に「事件当時，部屋の窓から逃走するなどして脱出することは可能であった」との事情がある場合，Ａ説からは甲に過剰避難が成立することになる。",c2:"２．【事例】に，更に「事件当時，甲が部屋から脱出する手段はほかになかった」との事情がある場合，Ｂ説からは甲に過剰避難が成立することになる。",c3:"３．【事例】に，更に「事件当時，部屋の窓から逃走するなどして脱出することは可能であった」との事情がある場合，Ｃ説からは甲に過剰避難が成立することになる。",c4:"４．【事例】に，更に「事件当時，部屋の窓から逃走するなどして脱出することは可能であった」との事情がある場合，Ｂ説からは甲には緊急避難の成立も過剰避難の成立も認められない。",c5:"５．【事例】に，更に「事件当時，甲が部屋から脱出する手段はほかになかった」との事情がある場合，Ｃ説からは甲に過剰避難が成立することになる。",c6:"",c7:"",c8:"",a:"3"},{year:"2014",num:"16",subject:"kei",q:"次の１から５までの各記述のうち，犯人が他人を教唆して自己を隠避させた場合に犯人隠避教唆罪の成立を認める見解の根拠となり得るものを２個選びなさい。",c1:"１．教唆犯の処罰根拠は，正犯者を犯罪に引き込み，有責で処罰される状態に陥れたことにある。",c2:"２．犯人隠避は，隠避させる者に犯人が働き掛けることによって行われるのが通常予定される事態であるから，本来は必要的共犯と理解すべき犯罪類型である。",c3:"３．正犯行為に期待可能性がないのであれば，教唆行為にも期待可能性はない。",c4:"４．犯人自ら逃げ隠れる行為のみが，法律の放任行為として国家による干渉を受けない防御の自由の範囲内にある。",c5:"５．教唆にとどまると可罰的であるのに，より犯情の重い正犯に及ぶと不可罰になるのは相当でない。",c6:"",c7:"",c8:"",a:"14"},{year:"2014",num:"17",subject:"kei",q:`教授Ｘと学生Ｙは，次の【事例】における甲の罪責について後記【会話】のとおり検討している。【会話】中の①から⑤までの（ ）内から適切な語句を選んだ場合，正しいものの組合せは，後記１から５までのうちどれか。
【事 例】
甲は，Ｖが宅地造成地に駐車して所有・占有していたパワーショベルを盗もうと思い，重機販売業者の乙に前記パワーショベルを同所から搬出させた。
【会 話】
教授Ｘ．【事例】において，甲が，事情を全く知らない乙に対し，前記パワーショベルは甲の所有・占有である旨説明して売却し，乙に前記パワーショベルを搬出させたという事実関係があるとしましょう。甲の罪責はどうなりますか。
学生Ｙ．パワーショベルを搬出したのは乙ですが，乙は，事情を全く知らず，規範的障害のないままパワーショベルを搬出したので，乙には窃盗罪の①（ア．故意・イ．法益侵害）がないと思います。甲は，乙を道具のように利用してＶのパワーショベルを盗んだので，窃盗罪の間接正犯が成立すると思います。
教授Ｘ．甲には，いつの時点で窃盗罪の実行の着手が認められるのですか。
学生Ｙ．私は，実行の着手は法益侵害の具体的危険が発生した時に認められると考えた上で，間接正犯の場合には，被利用者の行為開始時に実行の着手が認められると考えます。したがって，②（ウ．乙が甲との間でパワーショベルを購入する契約を締結した時に・エ．乙がパワーショベルを搬出する作業を開始した時に），甲には実行の着手が認められると思います。
教授Ｘ．では，【事例】において，甲が，パワーショベルを盗むため，事情を知らない乙に先ほどと同様の説明をして売却したが，その後，乙が，宅地造成地に向かう途中で甲の計画にたまたま気付き，自分のものにするつもりでパワーショベルを盗むことを自ら決意して搬出したという事実関係があるとしましょう。先ほどの場合と何か違ってきますか。
学生Ｙ．乙は，盗むことを自ら決意してパワーショベルを搬出したのですから，乙には窃盗罪の③（オ．正犯・カ．幇助犯）が成立します。そして，乙には，パワーショベルを搬出する前に甲の計画を知って規範的障害が認められるので，もはや甲の道具とはいえません。したがって，乙が搬出した行為を甲の実行行為と評価することはできません。
教授Ｘ．その場合の甲の罪責はどうなりますか。
学生Ｙ．甲は，間接正犯を犯す意思で，客観的には乙に窃盗を決意させたので，甲には，窃盗既遂罪の④（キ．幇助犯・ク．教唆犯）が成立すると思います。
教授Ｘ．これはＹ君の考え方とは異なるのですが，間接正犯の実行の着手時期につき，利用者が被利用者を道具として利用した時点とする考え方に立った場合，結論はどのように変わりますか。
学生Ｙ．甲には，窃盗既遂罪の④（キ．幇助犯・ク．教唆犯）のほかに，⑤（ケ．窃盗未遂罪・コ．窃盗既遂罪）の間接正犯が成立すると思います。`,c1:"１．①ア ②エ ③オ ④ク ⑤ケ",c2:"２．①イ ②ウ ③オ ④キ ⑤コ",c3:"３．①ア ②エ ③オ ④ク ⑤コ",c4:"４．①イ ②ウ ③カ ④キ ⑤コ",c5:"５．①ア ②エ ③カ ④キ ⑤ケ",c6:"",c7:"",c8:"",a:"1"},{year:"2014",num:"18",subject:"kei",q:"放火等の罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．Ａは，Ｂが居住する家屋に隣接する無人の倉庫に灯油をまいて放火したところ，Ｂ居住の家屋にまで延焼したが，Ａは，Ｂ居住の家屋に延焼することまで予想していなかった。その倉庫がＢ所有のものであった場合，Ａには延焼罪（刑法第１１１条第１項）が成立する。",c2:"２．Ａは，無人の倉庫に放火しようとして，その倉庫に灯油をまいてライターで火をつけたが炎は燃え上がらず，燃焼には至らなかった。その倉庫がＡ所有のものであった場合，Ａには非現住建造物等放火罪（刑法第１０９条第２項）の未遂罪が成立する。",c3:"３．Ａは，無人の倉庫に放火するためにこれに使用するガソリンとライターを持ってその倉庫に向かっていたところ，Ａに不審を抱いた警察官から職務質問を受け，倉庫に放火するには至らなかった。その倉庫がＡ所有のものであった場合，Ａに放火予備罪（刑法第１１３条）は成立しない。",c4:"４．Ａは，Ａ所有の倉庫に放火しようと考え，その倉庫の近くの消火栓から放水できないように同消火栓に工作をしたが，放火するには至らなかった。Ａには消火妨害罪（刑法第１１４条）が成立する。",c5:"５．Ａは，無人の倉庫に灯油をまいて放火し，これを焼損したが，公共の危険は生じなかった。その倉庫が火災保険の付されたＡ所有のものであった場合，Ａに非現住建造物等放火罪（刑法第１０９条第１項）は成立しない。",c6:"",c7:"",c8:"",a:"3"},{year:"2014",num:"19",subject:"kei",q:`次の【事例】及び【判旨】に関する後記１から５までの各【記述】のうち，正しいものを２個選びなさい。
【事 例】
暴力団組長である被告人は，被告人を警護するスワットと呼ばれる複数のボディーガードを配下に持ち，被告人が車両で移動する際には，拳銃及びそれに適合する実包（以下「拳銃等」という。）を携帯したスワットが被告人車両の前後の車両に乗車するなどして，被告人を警護することを常としていた。被告人は，本件犯行時，車両で移動したが，その際，拳銃等を携帯したスワットらが被告人車両の前後の車両に乗車し，被告人車両と隊列を組んで移動するなどして，被告人の警護に当たった。
【判 旨】
被告人は，スワットらに対して拳銃等を携行して警護するように直接指示を下さなくても，スワットらが自発的に被告人を警護するために本件拳銃等を所持していることを確定的に認識しながら，それを当然のこととして受け入れて認容し，そのことをスワットらも承知しており，被告人とスワットらとの間に拳銃等の所持につき黙示的に意思の連絡があった。そして，スワットらは被告人の警護のために本件拳銃等を所持しながら終始被告人の近辺にいて被告人と行動を共にしていたものであり，彼らを指揮命令する権限を有する被告人の地位と彼らによって警護を受けるという被告人の立場を併せ考えれば，実質的には，正に被告人がスワットらに本件拳銃等を所持させていたと評し得る。よって，被告人には，本件拳銃等の所持について，スワットらとの間で，銃砲刀剣類所持等取締法違反の罪の共謀共同正犯が成立する。
【記 述】`,c1:"１．【判旨】の考え方によれば，共謀共同正犯が成立するためには，実行行為者とその背後者の間に明示の意思連絡が常に必要なわけではない。",c2:"２．【判旨】の考え方によれば，およそ実行行為者とその背後者の間に意思連絡がある場合には，背後者について狭義の共犯が成立することはなく，共謀共同正犯が成立することとなる。",c3:"３．【判旨】の考え方によれば，共謀共同正犯が成立するためには，一般に，実行行為を行わない者に実行行為者に対する指揮命令権限が必要である。",c4:"４．【判旨】の考え方によれば，仮に【事例】において，現実には被告人がスワットらの拳銃等の所持を認識・認容していたのに，スワットらは，これらの所持に被告人が気付いていないと思っていた場合でも，被告人には共謀共同正犯が成立することとなる。",c5:"５．【判旨】では，被告人が犯行現場付近にいて犯行と密接な関係を保っていたことや被告人の組織内での地位が，被告人を共同正犯と評価する上での重要な事情として考慮されている。",c6:"",c7:"",c8:"",a:"15"},{year:"2014",num:"20",subject:"kei",q:`次の【事例】に関する後記アからオまでの各【記述】を判例の立場に従って検討し，正しい場合には１を，誤っている場合には２を選びなさい。
【事 例】
　甲は，知人のＡをだまして，Ａ所有の土地・建物（以下「本件不動産」という。）を時価よりも割安な価格で入手した上，他人に転売してもうけを得ようと考えた。そこで，甲は，Ａに対し，実際にはそのような事実はないのに，「本件不動産は，現在は公表されていないが，大規模な地盤沈下のおそれのある地域にある。」と伝えた上，「公表される前に，俺が買ってやる。」と言った。Ａは，元々，本件不動産を子供に相続させるつもりであり，他人に売り渡すつもりはなかったが，甲の言葉を信じ，低額でも処分しようと思い，某月１日，甲との間で，通常の取引価額の半額程度である２０００万円で本件不動産を売却する旨の売買契約を締結した。そして，甲は，同月３日，本件不動産の自己への所有権移転登記を行うとともに，本件不動産の売買代金として，現金２０００万円をＡに支払い，同月５日，本件不動産の引渡しを受けた。
　その後，甲は，乙との間で本件不動産に関する売買の交渉を行ったが，その過程で，乙は，甲がＡをだまして相当安い価格で本件不動産を入手したことを知った。しかし，乙は，甲から，売買代金として通常の取引価額よりも低額である３０００万円を提示されたことから，同月２０日，甲との間で本件不動産の売買契約を締結し，同日，乙への所有権移転登記を行った。
　一方，甲は，知人の丙に前記売買代金として現金３０００万円を受け取らせ，Ｂ銀行の甲名義の預金口座に直ちに同代金を入金させることとし，同月１８日，その旨を丙に指示した。丙は，それまでの経緯を知らないまま，甲の指示に従い，同月２０日，乙から現金３０００万円を受領した。ところが，丙は，多額の借金を抱えており，Ｂ銀行に向かう途中，「この現金を元に一もうけして借金返済に充てよう。」と考え，競馬場に行き，乙から受領した現金の全額を馬券購入に充てた。すると，総額で１０００万円のもうけが出たので，丙は，同月２１日，現金３０００万円をＢ銀行の甲名義の預金口座に入金し，もうけに相当する現金１０００万円を自己の借金返済に充てて費消した。
【記 述】
ア．甲には，本件不動産の自己への所有権移転登記が完了した時点で，詐欺既遂罪が成立する。
イ．甲が本件不動産の乙への所有権移転登記を行った行為には，横領罪が成立する。
ウ．乙には，本件不動産の自己への所有権移転登記が完了した時点で，詐欺既遂罪の幇助犯が成立する。
エ．乙が本件不動産を譲り受けた行為には，盗品等有償譲受け罪が成立する。
オ．丙は甲に財産上の損害を与えていないので，丙に横領罪は成立しない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"12212"},{year:"2014",num:"21",subject:"kso",q:`次の【事例】において，司法警察員が後記アからオまでの【捜査】を行った場合，あらかじめ令状の発付を受けていなければ適法と評価される余地のないものは幾つあるか。後記１から６までのうちから選びなさい。ただし，判例がある場合には，それに照らして考えるものとする。
【事 例】
司法警察員は，被害者Ｖの殺害死体が発見されたことから，その捜査を開始したところ，Ｖの預金が，同死体の発見された前日にＶのキャッシュカードを用いて銀行の現金自動預払機から払い戻されていたことを把握し，同銀行に設置された防犯カメラを解析した。その結果，Ｖの預金を払い戻した人物の容貌がＶの知人Ａの容貌と類似していることが判明し，司法警察員は，Ａを被疑者として次のアからオまでの【捜査】を実施した。
【捜 査】
ア．Ａに知られずに，公道上を歩行中のＡの容貌を写真撮影した。
イ．Ａに知られずに，Ａの自宅から公道上のごみ集積所に排出されたごみ袋を持ち帰った。
ウ．Ａに知られずに，Ａと取引のある金融機関にＡの負債内容の報告を求め，それを記録した書面の交付を受けた。
エ．Ａの同意に基づいて採取した口腔内細胞を試料として，ＡのＤＮＡ型を検査した。
オ．Ａに対し，Ａの同意に基づいてポリグラフ検査を実施した。`,c1:"１．０個",c2:"２．１個",c3:"３．２個",c4:"４．３個",c5:"５．４個",c6:"６．５個",c7:"",c8:"",a:"1"},{year:"2014",num:"22",subject:"kso",q:`次の【記述】は，自動車検問に関する最高裁判所の判例からの引用である。【記述】中の①から③までの（ ）内から適切な語句を選んだ場合，その組合せとして正しいものは，後記１から５までのうちどれか。
【記 述】
「警察法２条１項が『交通の取締』を警察の責務として定めていることに照らすと，交通の安全及び交通秩序の維持などに必要な警察の諸活動は，強制力を伴わない任意手段による限り，一般的に許容されるべきものであるが，それが国民の権利，自由の干渉にわたるおそれのある事項にかかわる場合には，任意手段によるからといって無制限に許されるべきものでないことも同条２項及び①（ａ．刑事訴訟法１８９条 ｂ．警察官職務執行法１条）などの趣旨にかんがみ明らかである。しかしながら，自動車の運転者は，②（ａ．公道において自動車を利用することを許されていること ｂ．警察が犯罪があると思料するときに，捜査するものとされていること）に伴う当然の負担として，合理的に必要な限度で行われる交通の取締に協力すべきものであること，その他現時における交通違反，交通事故の状況などをも考慮すると，警察官が，交通取締の一環として交通違反の多発する地域等の適当な場所において，交通違反の予防，検挙のための自動車検問を実施し，同所を通過する自動車に対して③（ａ．走行の外観上の不審な点の有無及び程度等の諸般の事情を勘案した上 ｂ．走行の外観上の不審な点の有無にかかわりなく）短時分の停止を求めて，運転者などに対し必要な事項についての質問などをすることは，それが相手方の任意の協力を求める形で行われ，自動車の利用者の自由を不当に制約することにならない方法，態様で行われる限り，適法なものと解すべきである。」`,c1:"１．①ａ ②ａ ③ａ",c2:"２．①ａ ②ｂ ③ａ",c3:"３．①ａ ②ｂ ③ｂ",c4:"４．①ｂ ②ａ ③ａ",c5:"５．①ｂ ②ａ ③ｂ",c6:"",c7:"",c8:"",a:"5"},{year:"2014",num:"23",subject:"kso",q:`次の【事例】について述べた後記アからオまでの【記述】のうち，正しいものの組合せは，後記１から５までのうちどれか。ただし，判例がある場合には，それに照らして考えるものとする。
【事 例】
司法巡査は，「路上で人がバットで殴られている。」旨の１１０番通報に基づき，事件現場に急行したところ，現場到着時に犯人が逃走していたことから，傷害を負った被害者から被害状況や犯人の服装・体格等を聴取し，犯人の探索を開始した。司法巡査は，事件発生の約３０分後に事件現場から約５００メートル離れた路上において，被害者が供述した犯人の服装・体格と一致する人物甲がバットを持って歩いているのを認め，甲に「ちょっと待って。」と声を掛けて停止を求めた。すると，甲が直ちに逃走を開始したため，司法巡査は甲を追跡し，甲を傷害罪の準現行犯人として逮捕した。甲は，逮捕翌日に，傷害罪により検察官に送致された。
【記 述】
ア．司法巡査は，甲を準現行犯人として逮捕するに当たり，甲に逮捕の理由を告げなければならない。
イ．甲が司法巡査から「ちょっと待って。」と声を掛けられて直ちに逃走を開始したことは，「誰何されて逃走しようとするとき。」（刑事訴訟法第２１２条第２項第４号）に該当する。
ウ．甲の逮捕後，勾留請求前の時点で本件が強盗目的で敢行されたと疑うに足りる相当な理由が生じた場合には，検察官は，強盗致傷罪で勾留を請求することが可能である。
エ．甲を傷害罪で勾留した後，本件が強盗目的で敢行された疑いが生じた場合であっても，強盗目的であったことの捜査のために勾留期間を延長することは許されない。
オ．甲を傷害罪で勾留した後，甲が「強盗目的で事件を起こした。」旨供述した場合には，傷害罪による勾留中に強盗致傷罪で逮捕しても適法である。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2014",num:"24",subject:"kso",q:`逮捕状による逮捕と起訴前の勾留に関する次のアからオまでの各記述のうち，正しい場合には１を，誤っている場合には２を選びなさい。ただし，判例がある場合には，それに照らして考えるものとする。
ア．どちらも，死刑又は無期若しくは長期３年を超える懲役若しくは禁錮に当たる事件であれば，裁判官は，被疑者が身体を拘束されている期間中，いつでも国選弁護人を付すことができる。
イ．どちらも，刑事訴訟法上，不服申立ての手段がない。
ウ．どちらも，保釈は認められない。
エ．どちらも，令状を執行した後，被疑者に対し，直ちに犯罪事実の要旨及び弁護人を選任することができる旨を告げた上，弁解の機会を与えなければならない。
オ．どちらも，司法警察員の請求により裁判官が令状を発付する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"22122"},{year:"2014",num:"25",subject:"kso",q:`次のアからオまでの各記述のうち，誤っているものの組合せは，後記１から５までのうちどれか。
ア．電磁的記録を保管する者その他の電磁的記録を利用する権限を有する者に命じて必要とする電磁的記録を記録媒体に記録させ，又は印刷させた上，当該記録媒体を差し押さえる場合，裁判官の発する令状に，記録させ若しくは印刷させるべき電磁的記録及びこれを記録させ若しくは印刷させるべき者の記載がなされる必要がある。
イ．差し押さえるべき物が電子計算機である場合，当該電子計算機に電気通信回線で接続している記録媒体であって，当該電子計算機で作成若しくは変更した電磁的記録又は当該電子計算機で変更若しくは消去することができることとされている電磁的記録を保管するために使用されていると認めるに足りる状況にあるものから，その電磁的記録を当該電子計算機又は他の記録媒体に複写した上，当該電子計算機又は当該他の記録媒体を差し押さえるときには，裁判官の発する令状に，差し押さえるべき物の記載とは別に，その複写すべきものの範囲の記載がなされる必要はない。
ウ．差し押さえるべき物が電磁的記録に係る記録媒体であるときは，裁判官の発する令状により差押えを実施する者は，その差押えに代えて，差押えを受ける者に差し押さえるべき記録媒体に記録された電磁的記録を他の記録媒体に複写させ，印刷させ，又は移転させた上，当該他の記録媒体を差し押さえる権限を有する。
エ．差し押さえるべき物が電磁的記録に係る記録媒体であるときは，裁判官の発する令状により捜索又は差押えを実施する者は，処分を受ける者に対し，電子計算機の操作その他の必要な協力を求めることができる。
オ．裁判官の発する令状により，電磁的記録を保管する者その他の電磁的記録を利用する権限を有する者に命じて必要とする電磁的記録を記録媒体に記録させ，又は印刷させた上，当該記録媒体を差し押さえる場合，被疑者又は弁護人は，その実施に立ち会う権利を有する。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"4"},{year:"2014",num:"26",subject:"kso",q:`次のⅠないしⅣの【見解】は，医師が捜査機関の依頼に基づき，人の身体から注射器を用いて血液を採取するに当たり，相手方の意思に反して直接強制して採取するために必要と考えられる令状に関するものである。【見解】に関する後記アからオまでの【記述】のうち，誤っているものの組合せは，後記１から５までのうちどれか。
【見 解】
Ⅰ．身体検査令状によるべきである。
Ⅱ．鑑定処分許可状によるべきである。
Ⅲ．身体検査令状と鑑定処分許可状を併用すべきである。
Ⅳ．捜索差押許可状によるべきである。
【記 述】
ア．Ⅰの見解に対しては，捜査機関が血液を採取するわけではないとの批判がある。
イ．Ⅱの見解に対しては，鑑定処分としての身体検査の域を超えるから許されないとの批判がある。
ウ．Ⅱの見解に対しては，直接強制するための明文の規定が存しないとの批判がある。
エ．Ⅲの見解に対しては，採血が検証としての身体検査の域を超える以上，併用することに意味がないとの批判がある。
オ．Ⅳの見解に対しては，人の老廃物である尿と血液とを区別して考える必要はないとの批判がある。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2014",num:"27",subject:"kso",q:`次のアからオまでの各記述は，犯罪の捜査に欠くことのできない知識を有すると明らかに認められる者が取調べに対して供述を拒んだため，検察官が刑事訴訟法第２２６条に基づき証人尋問を請求する場合に関する記述である。各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。
ア．検察官は，第１回公判期日後には証人尋問を請求することができない。
イ．検察官が起訴後に証人尋問を請求する場合でも，請求先は裁判所ではなく裁判官である。
ウ．被告人，被疑者及び弁護人は，必ず証人尋問に立ち会う権利を有する。
エ．証人尋問が実施された後，裁判所は，公判期日において，その尋問の結果を記載した書面を取り調べなければならない。
オ．証人は，召喚に応じなくとも，勾引されることがない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"1"},{year:"2014",num:"28",subject:"kso",q:`公訴に関する次のアからオまでの各記述のうち，正しい場合には１を，誤っている場合には２を選びなさい。
ア．検察官は，公訴を提起するに足りる犯罪の嫌疑が十分にあると思料するときは，必ず公訴を提起しなければならない。
イ．検察官は，第一審の判決があるまで，公訴を取り消すことができる。
ウ．検察官は，告訴のあった事件について，公訴を提起したときは，その旨を告訴人に通知する必要はない。
エ．共犯の１人に対してした公訴の提起による時効の停止は，他の共犯に対してその効力を有する。
オ．公訴事実は，数個の訴因を択一的に記載することは許されない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"21212"},{year:"2014",num:"29",subject:"kso",q:`次の【見解】は，公訴を提起された被告人は誰かを特定する基準に関するものである。後記アからエまでの【事例】のうち，この【見解】によれば甲を被告人として扱うことが可能なものは幾つあるか。後記１から５までのうちから選びなさい。
【見 解】
公訴を提起された被告人は誰かを特定する基準については，起訴状あるいは判決書の表示のみによってではなく，公訴を提起した検察官の意思や，現実に審理の過程において被告人として行動し，取り扱われた者が誰であるかも併せ考えて判定するのが相当である。
【事 例】
ア．窃盗事件の真犯人甲が，現行犯人として逮捕された際に，乙と名のった結果，被疑者欄に「乙」と記載された勾留状により勾留され，勾留中のまま，被告人欄に「乙」と記載された起訴状により地方裁判所に公訴を提起されたが，第１回公判期日の前に，甲が乙と名のっていたことが発覚した。
イ．窃盗事件の真犯人乙が，逮捕・勾留されていない状態で取調べを受け，被告人欄に「乙」と記載された起訴状により地方裁判所に公訴を提起された後，甲は，乙から依頼を受けてその身代わりとして第１回公判期日に出頭したが，人定質問の段階で，身代わりであることが発覚した。
ウ．窃盗事件の真犯人甲が，逮捕・勾留されていない状態で取調べを受けた際に，乙と名のった結果，被告人欄に「乙」と記載された起訴状により地方裁判所に公訴を提起された。同起訴状の謄本を受け取った甲が，第１回公判期日に出頭したが，冒頭手続が終了した後，甲が乙と名のっていたことが発覚した。
エ．窃盗事件の真犯人甲は，逮捕・勾留されていない状態であったことから，乙に身代わりとなることを依頼した。乙が，同事件の被疑者として取調べを受けた結果，被告人欄に「乙」と記載された起訴状により地方裁判所に公訴を提起された。同起訴状の謄本を受け取った乙が，第１回公判期日に出頭したが，同期日の審理が終了した段階で，身代わりであることが発覚した。`,c1:"１．０個",c2:"２．１個",c3:"３．２個",c4:"４．３個",c5:"５．４個",c6:"",c7:"",c8:"",a:"3"},{year:"2014",num:"30",subject:"kso",q:`次の【事例】に関する共同審理について述べた後記アからエまでの【記述】のうち，正しいものは幾つあるか。後記１から５までのうちから選びなさい。ただし，判例がある場合には，それに照らして考えるものとする。
【事 例】
被告人Ａと被告人Ｂは，共謀の上，Ａ方で覚せい剤を所持したとの覚せい剤取締法違反に係る公訴事実で起訴された。公判廷では，Ａは，Ｂと共に犯行に及んだことを認める旨の供述をしているが，Ｂは，自己の関与を否定する旨の供述をしている。検察官は，Ａ方から押収された覚せい剤，同覚せい剤の鑑定書，Ａ方の捜索差押調書等の証拠調べを請求している。
【記 述】
ア．本件では，被告人らの防御が互いに相反しているから，裁判所は，必ず弁論を分離しなければならない。
イ．前記覚せい剤の証拠調べ請求について，Ａの弁護人は「異議なし」との意見を述べ，Ｂの弁護人は「関連性なし」との意見を述べた場合，裁判所はＢとの関係でも同覚せい剤を証拠として採用し，取り調べることが許される。
ウ．Ａの弁護人だけでなく，Ｂの弁護人も，Ａに対し，その供述を求めるための質問をすることができる。
エ．Ｂについては，Ａの公判廷における自白を根拠に有罪とされることがあるが，Ａについては，Ｂとの共同所持の事実の補強証拠が取調べ請求されていないから，このままでは共同所持の事実で有罪とされることはない。`,c1:"１．０個",c2:"２．１個",c3:"３．２個",c4:"４．３個",c5:"５．４個",c6:"",c7:"",c8:"",a:"3"},{year:"2014",num:"31",subject:"kso",q:`弁護人の活動等に関する次の【事例】について述べた後記アからオまでの【記述】のうち，誤っているものの組合せは，後記１から５までのうちどれか。
【事 例】
　勾留中の被告人甲は，傷害の公訴事実により，Ｈ地方裁判所に起訴されるとともに，Ｈ地方裁判所裁判官から接見禁止の裁判を受けた。①その後，被告人甲の弁護人に選任されたＡは，Ｈ拘置所において，被告人甲と接見し，正当防衛の主張をする弁護方針を立てた。
　本件傷害被告事件は，公判前整理手続に付されたところ，この公判前整理手続の中で，検察官は，検察官が目撃者Ｗの供述を録取した供述録取書１通［供述録取書ア］の取調べを請求し，弁護人Ａにも開示したが，警察官が目撃者Ｗの供述を録取した供述録取書１通［供述録取書イ］については，その取調べを請求することもなく，弁護人Ａにも開示しなかった。そこで，②弁護人Ａは，検察官に対し，刑事訴訟法第３１６条の１５に基づき，［供述録取書ア］の証明力を判断するために重要な証拠として，［供述録取書イ］の開示を請求した。また，③弁護人Ａは，公判前整理手続の中で，刑事訴訟法第３１６条の１７に基づき，裁判所及び検察官に対し，正当防衛の主張等証明予定事実その他公判期日においてすることを予定している事実上及び法律上の主張を明らかにした。
　その後，公判前整理手続が終了して第１回公判期日が開かれたところ，④検察官は，同公判において，冒頭陳述を行った。また，同公判において，目撃者Ｗの証人尋問が実施された後，検察官は，刑事訴訟法第３２１条第１項第２号後段に基づき，［供述録取書ア］の取調べを請求したところ，⑤裁判所は，弁護人Ａの意見を聴いた上で，［供述録取書ア］の取調べを決定した。
　その後，本件傷害被告事件は，第２回公判期日において結審し，第３回公判期日において，被告人甲は，有罪判決を受けたが，その時点で控訴するかどうか態度を明らかにしなかった。⑥その翌日，被告人甲は，弁護人Ａに対して，前記有罪判決に対して控訴してもらいたい旨の手紙を発送した。
【記 述】
ア．下線部①の接見は，接見禁止の裁判を受けた被告人に対する接見であるので，立会人が付いた接見である。
イ．弁護人Ａは，下線部②の請求を行うに際し，あらかじめ，下線部③に記載された主張を明らかにする必要はない。
ウ．弁護人Ａ又は被告人甲は，下線部④の冒頭陳述に引き続き，正当防衛の主張を明らかにしなければならない。
エ．弁護人Ａは，下線部⑤の決定については，これに先立ち裁判所から意見を聴かれているものの異議を申し立てることができる。
オ．弁護人Ａは，下線部⑥の手紙を受領する以前に，控訴することができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2014",num:"32",subject:"kso",q:`次の【事例】における【Ａの証人尋問】に関して述べた後記アからオまでの【記述】のうち，正しいものの組合せは，後記１から５までのうちどれか。
【事 例】
Ａは，平成２６年２月３日，司法警察員から職務質問を受け，所持していた覚せい剤を発見されて逮捕された。Ａは，同月１２日，検察官による取調べにおいて，前記覚せい剤は知人甲から買った旨供述し，その旨記載された検察官調書が作成された。その後，甲に対する捜査が行われ，甲は，Ａに対して前記覚せい剤を譲渡した事実で，同年３月２日に起訴されたが，公判において公訴事実を否認した。検察官は，甲の公判において，Ａの前記検察官調書の証拠調べを請求したが，弁護人が不同意の意見を述べたので，Ａの証人尋問を請求し，次のとおりの証人尋問が実施された。
【Ａの証人尋問】
検察官．（ア）あなたは，平成２６年２月３日，所持していた覚せい剤を司法警察員に発見されたのですね。
Ａ．はい。
検察官．あなたは，その覚せい剤をどうやって手に入れたのですか。
Ａ．路上で，見知らぬ人から買いました。
検察官．（イ）知人から買ったのではありませんか。
Ａ．知人から買ったものではありません。
検察官．あなたは，平成２６年２月１２日，検察官の取調べを受けた際，誰から覚せい剤を買ったと説明しましたか。
Ａ．覚えていません。
検察官．（ウ）あなたは，検察官に対し，「甲から覚せい剤を買った。」と説明したのではありませんか。
Ａ．そのように述べたかもしれません。
（中略）
検察官．（エ）（検察官が，Ａに，前記検察官調書の署名及び指印部分を示す。）これは，あなたの署名及び指印に間違いありませんか。
Ａ．間違いありません。
【記 述】
ア．下線部（ア）の尋問方法は，誘導尋問に該当するが，甲及びその弁護人が争わないことが明らかであれば，許される。
イ．下線部（イ）の尋問方法は，甲が争う事項に関する誘導尋問に該当するから，許されない。
ウ．下線部（ウ）の尋問方法は，書面を朗読するものであるから，許されない。
エ．下線部（エ）の尋問方法は，記憶を喚起するために供述を録取した書面を示すものであるから，許されない。
オ．検察官が，Ａの前記検察官調書を刑事訴訟法第３２１条第１項第２号に基づき証拠調べ請求した場合，前記検察官調書は，公判でのＡの証言よりも検察官の取調べにおける供述を信用すべき特別の情況が存しなければ，証拠能力を有しない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2014",num:"33",subject:"kso",q:`次のⅠからⅢまでの【見解】は，刑事訴訟法第３２６条の同意（以下「同意」という。）の性質に関する考え方を述べたものである。これらの【見解】について述べた後記アからオまでの【記述】のうち，正しいものの組合せは，後記１から５までのうちどれか。
【見 解】
Ⅰ．同意は，公判において供述者に対し反対尋問を行う権利を放棄することである。
Ⅱ．同意は，公判において証拠能力を付与する訴訟行為である。
Ⅲ．同意は，原供述時において供述者に対し反対尋問を行うことができなかったこと，あるいは原供述時において裁判所が供述者の供述態度を観察することができなかったことについて，責問権を放棄することである。
【記 述】
ア．Ⅰの見解に対しては，検察官が請求した被告人以外の者の供述調書について，被告人側がこれを同意した上で，その証明力を争うために供述者の証人尋問を請求することができないことになるという批判がある。
イ．Ⅰの見解に対しては，捜索差押手続が違法であっても，同意をすれば，同手続の捜索差押調書は証拠能力を有することになるという批判がある。
ウ．Ⅱの見解に対しては，伝聞法則を反対尋問権の保障の観点からしか理解しておらず，裁判所による供述態度の観察という直接主義の観点が欠落しているという批判がある。
エ．Ⅱの見解に対しては，同意の性質が伝聞証拠が排除される趣旨と関連しなくなり，刑事訴訟法第３２６条が同法第３２０条第１項で排除される伝聞証拠について証拠能力を認める規定となっていることとそぐわないという批判がある。
オ．Ⅲの見解に対しては，刑事訴訟法第３２６条第１項が被告人の供述調書についても規定していることを説明できないという批判がある。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"2"},{year:"2014",num:"34",subject:"kso",q:`次の学生ＡないしＤの【会話】は，脅迫事件の被害者が脅迫を受けている現場の音声を録音した録音テープを，犯行時の状況を立証するために用いる場合の証拠能力について議論するものである。証拠とすることの同意（刑事訴訟法第３２６条）がない限り，同法第３２１条第３項の要件を満たさなければならないとする見解からの発言をする学生の人数は，後記１から５までのうちどれか。
【会 話】
学生Ａ．この場合の録音テープは，犯罪が行われた現場の状況を録音したもので，現場の状況を音声の面から，つまり聴覚の面から明らかにするというものですよね。
学生Ｂ．その意味では，聴覚と視覚という違いはあるけれど，証拠能力については，現場の状況を視覚の面から明らかにする現場写真と同じように考えていいんじゃないかな。僕は，写真は機械的方法によって現場の状況をそのまま記録するもので，そこに供述の要素は含まれないし，録音でも音声を記録する上での機械的正確さは保障されていると思うね。
学生Ｃ．私は，録音の過程で，録音機器を操作したり，記録された情報を編集したりするというような作為が介在する点を重視すべきだと思います。
学生Ｄ．録音の過程での人の作為による誤りと，人の知覚・記憶・表現に伴う誤りとは，本質的に違うものですよ。
学生Ａ．私は，現場写真にせよ，現場録音の録音テープにせよ，現場の状況を報告するために人の手によって作成されるものであるという性質を持つことを考えるべきだと思います。そうすると，録音テープの作成者が，公判廷で録音テープが真正に作成されたものであることを供述することが，録音テープの証拠能力を認める要件として必要になります。
学生Ｂ．録音テープの作成過程について，現場の状況が正確に録音されているかどうかなどを確認するには，録音をした者の証人尋問をするのが一番有効だろうね。でも，僕の立場からすると，証拠能力の要件は関連性で足りるので，録音者の証人尋問が絶対に必要とまではならないな。
学生Ｃ．私は，録音機器の操作や録音後の編集などによる誤りの危険性があるから，録音者に対する反対尋問による確認がなされることが，必要不可欠だと考えます。
学生Ｄ．それじゃあ，現場の状況が録音されているのが明らかなのに，録音者が誰か分からないときには，問題なんじゃないですか。そもそもＣさんが言っているのは，証拠能力の問題なのかな。`,c1:"１．０人",c2:"２．１人",c3:"３．２人",c4:"４．３人",c5:"５．４人",c6:"",c7:"",c8:"",a:"3"},{year:"2014",num:"35",subject:"kso",q:`被害者参加に関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。
ア．業務上過失致傷の罪の被害者は，同罪に係る被告事件の手続への参加を申し出ることができない。
イ．被害者参加人は，公判前整理手続期日に出席することができる。
ウ．被害者参加人による証人の尋問が許される事項は，情状に関する事項（犯罪事実に関するものを除く。）についての証人の供述の証明力を争うために必要な事項に限られる。
エ．被害者参加人による被告人に対する質問は，刑事訴訟法の規定による意見の陳述をするために必要があると認められる事項に限って許される。
オ．被害者参加人による事実又は法律の適用についての意見は，犯罪事実の認定のための証拠とすることはできないが，刑の量定のための証拠とすることは許される。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2014",num:"36",subject:"kso",q:`地方裁判所における第一審の判決宣告後の勾留に関する次のアからオまでの各記述のうち，正しい場合には１を，誤っている場合には２を選びなさい。
ア．詐欺被告事件で勾留中の被告人につき懲役３年，執行猶予５年の有罪判決が宣告された場合，その判決が確定するまでは，被告人は引き続き勾留される。
イ．業務上横領被告事件で保釈中の被告人につき懲役４年の実刑の有罪判決が宣告された場合，その判決が確定するまでは，被告人の保釈は効力を失わない。
ウ．強盗被告事件で勾留中の被告人につき無罪判決が宣告された場合，その判決が確定するまでは，被告人は引き続き勾留される。
エ．道路交通法違反被告事件で勾留中の被告人につき懲役６月の実刑の有罪判決が宣告された場合，被告人には権利保釈（必要的保釈）の規定の適用はない。
オ．傷害被告事件で勾留中の被告人につき懲役２年の実刑の有罪判決が宣告された後，宣告した裁判所のした被告人の保釈請求を却下する決定に対しては，被告人は高等裁判所に抗告をすることができる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"22211"},{year:"2014",num:"37",subject:"kso",q:`　次のⅠ及びⅡの【見解】は，公判前整理手続において刑事訴訟法第３１６条の１５により証拠開示の対象となる証拠の類型として，「被告人以外の者の供述録取書等であって，検察官が特定の検察官請求証拠により直接証明しようとする事実の有無に関する供述を内容とするもの」を掲げる同条第１項第６号の解釈に関するものである。
　「参考人から『・・・』旨聴き取った。」との捜査官の聴取捜査報告書（以下「本件捜査報告書」という。）が存在し，参考人の「・・・」という供述が「検察官が特定の検察官請求証拠により直接証明しようとする事実の有無に関する」内容のものである場合，この本件捜査報告書が前記の証拠の類型（以下「６号の証拠の類型」という。）に該当するかどうかについて述べた後記アからオまでの【記述】のうち，正しいものの組合せは，後記１から５までのうちどれか。ただし，「供述録取書等」とは，「供述書，供述を録取した書面で供述者の署名若しくは押印のあるもの・・・」（同法第３１６条の１４第２号）をいう。
【見 解】
Ⅰ．「検察官が特定の検察官請求証拠により直接証明しようとする事実の有無に関する供述」は，供述者が直接体験した事実に関する供述に限る。
Ⅱ．「検察官が特定の検察官請求証拠により直接証明しようとする事実の有無に関する供述」には，供述者が直接体験した事実に関する供述のほか，供述者が他者から伝聞した供述も含む。
【記 述】
ア．本件捜査報告書について，参考人の供述を録取した供述録取書であるとの見方に立ち，Ⅰの【見解】を採るならば，同報告書は，「検察官請求証拠により直接証明しようとする事実の有無に関する供述を内容とするもの」といえるが，参考人の署名若しくは押印がない場合には「供述録取書等」に当たらないので，６号の証拠の類型に該当しない。
イ．本件捜査報告書について，参考人の供述を録取した供述録取書であるとの見方に立ち，Ⅰの【見解】を採るならば，同報告書は，「検察官請求証拠により直接証明しようとする事実の有無に関する供述を内容とするもの」といえ，捜査官の署名若しくは押印がある場合には「供述録取書等」に当たるので，６号の証拠の類型に該当する。
ウ．本件捜査報告書について，参考人の供述を聴き取った捜査官の供述書であるとの見方に立ち，Ⅰの【見解】を採るならば，同報告書は，「検察官請求証拠により直接証明しようとする事実の有無に関する供述を内容とするもの」といえ，捜査官の供述書として「供述録取書等」に当たるから，６号の証拠の類型に該当する。
エ．本件捜査報告書について，参考人の供述を録取した供述録取書であるとの見方に立ち，Ⅱの【見解】を採るならば，同報告書は，「検察官請求証拠により直接証明しようとする事実の有無に関する供述を内容とするもの」といえず，参考人の署名若しくは押印がない場合には「供述録取書等」にも当たらないので，６号の証拠の類型に該当しない。
オ．本件捜査報告書について，参考人の供述を聴き取った捜査官の供述書であるとの見方に立ち，Ⅱの【見解】を採るならば，同報告書は，「検察官請求証拠により直接証明しようとする事実の有無に関する供述を内容とするもの」といえ，捜査官の供述書として「供述録取書等」に当たるから，６号の証拠の類型に該当する。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",a:"2"},{year:"2014",num:"38",subject:"kso",q:`保釈に関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。
ア．保釈の請求をすることができるのは，勾留されている被告人及びその弁護人のみである。
イ．被疑者の国選弁護人は，公訴の提起後に改めて第一審の弁護人として選任されない限り，保釈の請求をすることができない。
ウ．裁判所は，第一審の公判審理中に保釈の請求があったときは，刑事訴訟法第８９条各号所定の事由がある場合を除いて，保釈を許さなければならない。
エ．裁判所は，保釈の請求がない場合又は刑事訴訟法第８９条各号所定の事由がある場合でも，適当と認めるときは職権で保釈を許すことができる。
オ．公訴の提起があった後，第１回公判期日までの保釈に関する裁判は，公訴の提起を受けた裁判所の事件の審判に関与すべき裁判官のみが行う。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"4"},{year:"2014",num:"39",subject:"kso",q:`外国人（日本国籍を有さず，かつ日本語に通じない者をいう。以下同じ。）の刑事手続に関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。ただし，判例がある場合には，それに照らして考えるものとする。
ア．司法警察員がその所持する逮捕状により外国人である被疑者を逮捕する場合，同被疑者に逮捕状を示さなくても違法ではない。
イ．外国人である被疑者を通訳を介して取り調べる場合，その供述録取書を日本語で作成しても違法ではない。
ウ．外国人である被告人の公判において，検察官及び弁護人に異議がなく，裁判所が許可すれば，同被告人の理解する外国語で公判手続を進めても違法ではない。
エ．外国人である被告人が日本に適法に在留する資格を有しない場合でも，同被告人の保釈を許すことは違法ではない。
オ．外国人である被告人の公判において，判決の言渡しに限っては，通訳を付さずにしても違法ではない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",a:"3"},{year:"2014",num:"40",subject:"kso",q:`刑事事件の上告審に関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。
ア．高等裁判所がした第一審又は第二審の判決に対しては，憲法の違反があること，憲法の解釈に誤りがあること又は最高裁判所の判例と相反する判断をしたことだけではなく，判決に影響を及ぼすべき重大な事実の誤認があることも，適法な上告理由となる。
イ．高等裁判所が上告審として裁判権を有する場合がある。
ウ．上告審は純粋な法律審であるから，事実の取調べを行うことはできない。
エ．上告裁判所は，判決に影響を及ぼすべき法令の違反があって，原判決を破棄しなければ著しく正義に反すると認めるときは，判決で原判決を破棄することができる。
オ．上告裁判所は，第二審の判決が最高裁判所の判例と相反する判断をした場合において，その判例を変更して原判決を維持するのを相当とするときは，これを破棄しなくともよい。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",a:"5"}];function bn(e){return Array.isArray?Array.isArray(e):zd(e)==="[object Array]"}const Qy=1/0;function Jy(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-Qy?"-0":t}function e1(e){return e==null?"":Jy(e)}function nn(e){return typeof e=="string"}function Nd(e){return typeof e=="number"}function t1(e){return e===!0||e===!1||n1(e)&&zd(e)=="[object Boolean]"}function Dd(e){return typeof e=="object"}function n1(e){return Dd(e)&&e!==null}function wt(e){return e!=null}function is(e){return!e.trim().length}function zd(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const c1="Incorrect 'index' type",a1=e=>`Invalid value for key ${e}`,l1=e=>`Pattern length exceeds max of ${e}.`,s1=e=>`Missing ${e} property in key`,i1=e=>`Property 'weight' in key '${e}' must be a positive integer`,qo=Object.prototype.hasOwnProperty;class r1{constructor(t){this._keys=[],this._keyMap={};let n=0;t.forEach(c=>{let a=Hd(c);n+=a.weight,this._keys.push(a),this._keyMap[a.id]=a,n+=a.weight}),this._keys.forEach(c=>{c.weight/=n})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Hd(e){let t=null,n=null,c=null,a=1,l=null;if(nn(e)||bn(e))c=e,t=Vo(e),n=$s(e);else{if(!qo.call(e,"name"))throw new Error(s1("name"));const s=e.name;if(c=s,qo.call(e,"weight")&&(a=e.weight,a<=0))throw new Error(i1(s));t=Vo(s),n=$s(s),l=e.getFn}return{path:t,id:n,weight:a,src:c,getFn:l}}function Vo(e){return bn(e)?e:e.split(".")}function $s(e){return bn(e)?e.join("."):e}function o1(e,t){let n=[],c=!1;const a=(l,s,i)=>{if(wt(l))if(!s[i])n.push(l);else{let r=s[i];const u=l[r];if(!wt(u))return;if(i===s.length-1&&(nn(u)||Nd(u)||t1(u)))n.push(e1(u));else if(bn(u)){c=!0;for(let o=0,d=u.length;o<d;o+=1)a(u[o],s,i+1)}else s.length&&a(u,s,i+1)}};return a(e,nn(t)?t.split("."):t,0),c?n:n[0]}const u1={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},d1={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},f1={location:0,threshold:.6,distance:100},v1={useExtendedSearch:!1,getFn:o1,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var ke={...d1,...u1,...f1,...v1};const m1=/[^ ]+/g;function h1(e=1,t=3){const n=new Map,c=Math.pow(10,t);return{get(a){const l=a.match(m1).length;if(n.has(l))return n.get(l);const s=1/Math.pow(l,.5*e),i=parseFloat(Math.round(s*c)/c);return n.set(l,i),i},clear(){n.clear()}}}class Hi{constructor({getFn:t=ke.getFn,fieldNormWeight:n=ke.fieldNormWeight}={}){this.norm=h1(n,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((n,c)=>{this._keysMap[n.id]=c})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,nn(this.docs[0])?this.docs.forEach((t,n)=>{this._addString(t,n)}):this.docs.forEach((t,n)=>{this._addObject(t,n)}),this.norm.clear())}add(t){const n=this.size();nn(t)?this._addString(t,n):this._addObject(t,n)}removeAt(t){this.records.splice(t,1);for(let n=t,c=this.size();n<c;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(t,n){return t[this._keysMap[n]]}size(){return this.records.length}_addString(t,n){if(!wt(t)||is(t))return;let c={v:t,i:n,n:this.norm.get(t)};this.records.push(c)}_addObject(t,n){let c={i:n,$:{}};this.keys.forEach((a,l)=>{let s=a.getFn?a.getFn(t):this.getFn(t,a.path);if(wt(s)){if(bn(s)){let i=[];const r=[{nestedArrIndex:-1,value:s}];for(;r.length;){const{nestedArrIndex:u,value:o}=r.pop();if(wt(o))if(nn(o)&&!is(o)){let d={v:o,i:u,n:this.norm.get(o)};i.push(d)}else bn(o)&&o.forEach((d,f)=>{r.push({nestedArrIndex:f,value:d})})}c.$[l]=i}else if(nn(s)&&!is(s)){let i={v:s,n:this.norm.get(s)};c.$[l]=i}}}),this.records.push(c)}toJSON(){return{keys:this.keys,records:this.records}}}function Ud(e,t,{getFn:n=ke.getFn,fieldNormWeight:c=ke.fieldNormWeight}={}){const a=new Hi({getFn:n,fieldNormWeight:c});return a.setKeys(e.map(Hd)),a.setSources(t),a.create(),a}function g1(e,{getFn:t=ke.getFn,fieldNormWeight:n=ke.fieldNormWeight}={}){const{keys:c,records:a}=e,l=new Hi({getFn:t,fieldNormWeight:n});return l.setKeys(c),l.setIndexRecords(a),l}function Xa(e,{errors:t=0,currentLocation:n=0,expectedLocation:c=0,distance:a=ke.distance,ignoreLocation:l=ke.ignoreLocation}={}){const s=t/e.length;if(l)return s;const i=Math.abs(c-n);return a?s+i/a:i?1:s}function y1(e=[],t=ke.minMatchCharLength){let n=[],c=-1,a=-1,l=0;for(let s=e.length;l<s;l+=1){let i=e[l];i&&c===-1?c=l:!i&&c!==-1&&(a=l-1,a-c+1>=t&&n.push([c,a]),c=-1)}return e[l-1]&&l-c>=t&&n.push([c,l-1]),n}const ac=32;function b1(e,t,n,{location:c=ke.location,distance:a=ke.distance,threshold:l=ke.threshold,findAllMatches:s=ke.findAllMatches,minMatchCharLength:i=ke.minMatchCharLength,includeMatches:r=ke.includeMatches,ignoreLocation:u=ke.ignoreLocation}={}){if(t.length>ac)throw new Error(l1(ac));const o=t.length,d=e.length,f=Math.max(0,Math.min(c,d));let m=l,h=f;const g=i>1||r,S=g?Array(d):[];let b;for(;(b=e.indexOf(t,h))>-1;){let E=Xa(t,{currentLocation:b,expectedLocation:f,distance:a,ignoreLocation:u});if(m=Math.min(E,m),h=b+o,g){let k=0;for(;k<o;)S[b+k]=1,k+=1}}h=-1;let C=[],p=1,P=o+d;const j=1<<o-1;for(let E=0;E<o;E+=1){let k=0,x=P;for(;k<x;)Xa(t,{errors:E,currentLocation:f+x,expectedLocation:f,distance:a,ignoreLocation:u})<=m?k=x:P=x,x=Math.floor((P-k)/2+k);P=x;let q=Math.max(1,f-x+1),V=s?d:Math.min(f+x,d)+o,w=Array(V+2);w[V+1]=(1<<E)-1;for(let N=V;N>=q;N-=1){let Z=N-1,F=n[e.charAt(Z)];if(g&&(S[Z]=+!!F),w[N]=(w[N+1]<<1|1)&F,E&&(w[N]|=(C[N+1]|C[N])<<1|1|C[N+1]),w[N]&j&&(p=Xa(t,{errors:E,currentLocation:Z,expectedLocation:f,distance:a,ignoreLocation:u}),p<=m)){if(m=p,h=Z,h<=f)break;q=Math.max(1,2*f-h)}}if(Xa(t,{errors:E+1,currentLocation:f,expectedLocation:f,distance:a,ignoreLocation:u})>m)break;C=w}const I={isMatch:h>=0,score:Math.max(.001,p)};if(g){const E=y1(S,i);E.length?r&&(I.indices=E):I.isMatch=!1}return I}function p1(e){let t={};for(let n=0,c=e.length;n<c;n+=1){const a=e.charAt(n);t[a]=(t[a]||0)|1<<c-n-1}return t}class Wd{constructor(t,{location:n=ke.location,threshold:c=ke.threshold,distance:a=ke.distance,includeMatches:l=ke.includeMatches,findAllMatches:s=ke.findAllMatches,minMatchCharLength:i=ke.minMatchCharLength,isCaseSensitive:r=ke.isCaseSensitive,ignoreLocation:u=ke.ignoreLocation}={}){if(this.options={location:n,threshold:c,distance:a,includeMatches:l,findAllMatches:s,minMatchCharLength:i,isCaseSensitive:r,ignoreLocation:u},this.pattern=r?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const o=(f,m)=>{this.chunks.push({pattern:f,alphabet:p1(f),startIndex:m})},d=this.pattern.length;if(d>ac){let f=0;const m=d%ac,h=d-m;for(;f<h;)o(this.pattern.substr(f,ac),f),f+=ac;if(m){const g=d-ac;o(this.pattern.substr(g),g)}}else o(this.pattern,0)}searchIn(t){const{isCaseSensitive:n,includeMatches:c}=this.options;if(n||(t=t.toLowerCase()),this.pattern===t){let h={isMatch:!0,score:0};return c&&(h.indices=[[0,t.length-1]]),h}const{location:a,distance:l,threshold:s,findAllMatches:i,minMatchCharLength:r,ignoreLocation:u}=this.options;let o=[],d=0,f=!1;this.chunks.forEach(({pattern:h,alphabet:g,startIndex:S})=>{const{isMatch:b,score:C,indices:p}=b1(t,h,g,{location:a+S,distance:l,threshold:s,findAllMatches:i,minMatchCharLength:r,includeMatches:c,ignoreLocation:u});b&&(f=!0),d+=C,b&&p&&(o=[...o,...p])});let m={isMatch:f,score:f?d/this.chunks.length:1};return f&&c&&(m.indices=o),m}}class Hn{constructor(t){this.pattern=t}static isMultiMatch(t){return Io(t,this.multiRegex)}static isSingleMatch(t){return Io(t,this.singleRegex)}search(){}}function Io(e,t){const n=e.match(t);return n?n[1]:null}class k1 extends Hn{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const n=t===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class S1 extends Hn{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const c=t.indexOf(this.pattern)===-1;return{isMatch:c,score:c?0:1,indices:[0,t.length-1]}}}class C1 extends Hn{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const n=t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class _1 extends Hn{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const n=!t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class x1 extends Hn{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const n=t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class w1 extends Hn{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const n=!t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class Kd extends Hn{constructor(t,{location:n=ke.location,threshold:c=ke.threshold,distance:a=ke.distance,includeMatches:l=ke.includeMatches,findAllMatches:s=ke.findAllMatches,minMatchCharLength:i=ke.minMatchCharLength,isCaseSensitive:r=ke.isCaseSensitive,ignoreLocation:u=ke.ignoreLocation}={}){super(t),this._bitapSearch=new Wd(t,{location:n,threshold:c,distance:a,includeMatches:l,findAllMatches:s,minMatchCharLength:i,isCaseSensitive:r,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class Yd extends Hn{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let n=0,c;const a=[],l=this.pattern.length;for(;(c=t.indexOf(this.pattern,n))>-1;)n=c+l,a.push([c,n-1]);const s=!!a.length;return{isMatch:s,score:s?0:1,indices:a}}}const Ms=[k1,Yd,C1,_1,w1,x1,S1,Kd],Eo=Ms.length,j1=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,q1="|";function V1(e,t={}){return e.split(q1).map(n=>{let c=n.trim().split(j1).filter(l=>l&&!!l.trim()),a=[];for(let l=0,s=c.length;l<s;l+=1){const i=c[l];let r=!1,u=-1;for(;!r&&++u<Eo;){const o=Ms[u];let d=o.isMultiMatch(i);d&&(a.push(new o(d,t)),r=!0)}if(!r)for(u=-1;++u<Eo;){const o=Ms[u];let d=o.isSingleMatch(i);if(d){a.push(new o(d,t));break}}}return a})}const I1=new Set([Kd.type,Yd.type]);class E1{constructor(t,{isCaseSensitive:n=ke.isCaseSensitive,includeMatches:c=ke.includeMatches,minMatchCharLength:a=ke.minMatchCharLength,ignoreLocation:l=ke.ignoreLocation,findAllMatches:s=ke.findAllMatches,location:i=ke.location,threshold:r=ke.threshold,distance:u=ke.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:c,minMatchCharLength:a,findAllMatches:s,ignoreLocation:l,location:i,threshold:r,distance:u},this.pattern=n?t:t.toLowerCase(),this.query=V1(this.pattern,this.options)}static condition(t,n){return n.useExtendedSearch}searchIn(t){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:c,isCaseSensitive:a}=this.options;t=a?t:t.toLowerCase();let l=0,s=[],i=0;for(let r=0,u=n.length;r<u;r+=1){const o=n[r];s.length=0,l=0;for(let d=0,f=o.length;d<f;d+=1){const m=o[d],{isMatch:h,indices:g,score:S}=m.search(t);if(h){if(l+=1,i+=S,c){const b=m.constructor.type;I1.has(b)?s=[...s,...g]:s.push(g)}}else{i=0,l=0,s.length=0;break}}if(l){let d={isMatch:!0,score:i/l};return c&&(d.indices=s),d}}return{isMatch:!1,score:1}}}const Bs=[];function A1(...e){Bs.push(...e)}function Rs(e,t){for(let n=0,c=Bs.length;n<c;n+=1){let a=Bs[n];if(a.condition(e,t))return new a(e,t)}return new Wd(e,t)}const hl={AND:"$and",OR:"$or"},Os={PATH:"$path",PATTERN:"$val"},Ls=e=>!!(e[hl.AND]||e[hl.OR]),P1=e=>!!e[Os.PATH],T1=e=>!bn(e)&&Dd(e)&&!Ls(e),Ao=e=>({[hl.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function Gd(e,t,{auto:n=!0}={}){const c=a=>{let l=Object.keys(a);const s=P1(a);if(!s&&l.length>1&&!Ls(a))return c(Ao(a));if(T1(a)){const r=s?a[Os.PATH]:l[0],u=s?a[Os.PATTERN]:a[r];if(!nn(u))throw new Error(a1(r));const o={keyId:$s(r),pattern:u};return n&&(o.searcher=Rs(u,t)),o}let i={children:[],operator:l[0]};return l.forEach(r=>{const u=a[r];bn(u)&&u.forEach(o=>{i.children.push(c(o))})}),i};return Ls(e)||(e=Ao(e)),c(e)}function $1(e,{ignoreFieldNorm:t=ke.ignoreFieldNorm}){e.forEach(n=>{let c=1;n.matches.forEach(({key:a,norm:l,score:s})=>{const i=a?a.weight:null;c*=Math.pow(s===0&&i?Number.EPSILON:s,(i||1)*(t?1:l))}),n.score=c})}function M1(e,t){const n=e.matches;t.matches=[],wt(n)&&n.forEach(c=>{if(!wt(c.indices)||!c.indices.length)return;const{indices:a,value:l}=c;let s={indices:a,value:l};c.key&&(s.key=c.key.src),c.idx>-1&&(s.refIndex=c.idx),t.matches.push(s)})}function B1(e,t){t.score=e.score}function R1(e,t,{includeMatches:n=ke.includeMatches,includeScore:c=ke.includeScore}={}){const a=[];return n&&a.push(M1),c&&a.push(B1),e.map(l=>{const{idx:s}=l,i={item:t[s],refIndex:s};return a.length&&a.forEach(r=>{r(l,i)}),i})}class Uc{constructor(t,n={},c){this.options={...ke,...n},this.options.useExtendedSearch,this._keyStore=new r1(this.options.keys),this.setCollection(t,c)}setCollection(t,n){if(this._docs=t,n&&!(n instanceof Hi))throw new Error(c1);this._myIndex=n||Ud(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){wt(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const n=[];for(let c=0,a=this._docs.length;c<a;c+=1){const l=this._docs[c];t(l,c)&&(this.removeAt(c),c-=1,a-=1,n.push(l))}return n}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:n=-1}={}){const{includeMatches:c,includeScore:a,shouldSort:l,sortFn:s,ignoreFieldNorm:i}=this.options;let r=nn(t)?nn(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return $1(r,{ignoreFieldNorm:i}),l&&r.sort(s),Nd(n)&&n>-1&&(r=r.slice(0,n)),R1(r,this._docs,{includeMatches:c,includeScore:a})}_searchStringList(t){const n=Rs(t,this.options),{records:c}=this._myIndex,a=[];return c.forEach(({v:l,i:s,n:i})=>{if(!wt(l))return;const{isMatch:r,score:u,indices:o}=n.searchIn(l);r&&a.push({item:l,idx:s,matches:[{score:u,value:l,norm:i,indices:o}]})}),a}_searchLogical(t){const n=Gd(t,this.options),c=(i,r,u)=>{if(!i.children){const{keyId:d,searcher:f}=i,m=this._findMatches({key:this._keyStore.get(d),value:this._myIndex.getValueForItemAtKeyId(r,d),searcher:f});return m&&m.length?[{idx:u,item:r,matches:m}]:[]}const o=[];for(let d=0,f=i.children.length;d<f;d+=1){const m=i.children[d],h=c(m,r,u);if(h.length)o.push(...h);else if(i.operator===hl.AND)return[]}return o},a=this._myIndex.records,l={},s=[];return a.forEach(({$:i,i:r})=>{if(wt(i)){let u=c(n,i,r);u.length&&(l[r]||(l[r]={idx:r,item:i,matches:[]},s.push(l[r])),u.forEach(({matches:o})=>{l[r].matches.push(...o)}))}}),s}_searchObjectList(t){const n=Rs(t,this.options),{keys:c,records:a}=this._myIndex,l=[];return a.forEach(({$:s,i})=>{if(!wt(s))return;let r=[];c.forEach((u,o)=>{r.push(...this._findMatches({key:u,value:s[o],searcher:n}))}),r.length&&l.push({idx:i,item:s,matches:r})}),l}_findMatches({key:t,value:n,searcher:c}){if(!wt(n))return[];let a=[];if(bn(n))n.forEach(({v:l,i:s,n:i})=>{if(!wt(l))return;const{isMatch:r,score:u,indices:o}=c.searchIn(l);r&&a.push({score:u,key:t,value:l,idx:s,norm:i,indices:o})});else{const{v:l,n:s}=n,{isMatch:i,score:r,indices:u}=c.searchIn(l);i&&a.push({score:r,key:t,value:l,norm:s,indices:u})}return a}}Uc.version="6.6.2";Uc.createIndex=Ud;Uc.parseIndex=g1;Uc.config=ke;Uc.parseQuery=Gd;A1(E1);function Ui(e){switch(e){case"ken":return"憲法";case"gyo":return"行政法";case"min":return"民法";case"syo":return"商法";case"mso":return"民事訴訟法";case"kei":return"刑法";case"kso":return"刑事訴訟法"}}const O1={data(){return{word:"",results:[]}},methods:{search(){var e={threshold:.3,includeMatches:!0,keys:["q","c1","c2","c3","c4","c5"]},t=new Uc(sl,e);this.results=t.search(this.word)},highlight(e,t){console.log(t);const n=[];let c=0;for(let a=0;a<t.length;a++){let l=e.slice(c,t[a][0])+'<span style="font-weight:bold; background-color:yellow;">',s=e.slice(t[a][0],t[a][1]+1)+"</span>";if(n.push(l,s),c=t[a][1]+1,a==t.length-1){let i=e.slice(t[a][1]+1);n.push(i)}}return n.join("")},onClick(e){let t=this.$router.resolve({name:"tantou",params:{subject:e.subject,year:e.year,qNum:e.num}});window.open(t.href,"_blank")},subjectFull(e){return Ui(e)}}},L1=et("h1",null,"司法試験過去問集・検索",-1),F1=et("thead",null,[et("tr",null,[et("th",null," 科目 "),et("th",null," 年度 "),et("th",null," 問題番号 "),et("th",null," 問題 ")])],-1),N1=["onClick"],D1=["innerHTML"];function z1(e,t,n,c,a,l){const s=Le("v-text-field"),i=Le("v-table");return Be(),ct("main",null,[L1,v(s,{modelValue:a.word,"onUpdate:modelValue":[t[0]||(t[0]=r=>a.word=r),l.search],density:"compact",variant:"solo",label:"検索","append-inner-icon":"mdi-magnify","single-line":""},null,8,["modelValue","onUpdate:modelValue"]),v(i,null,{default:Ee(()=>[F1,et("tbody",null,[(Be(!0),ct(me,null,Mn(a.results,r=>(Be(),ct("tr",{key:r.refIndex,class:"tr-link",onClick:u=>l.onClick(r.item)},[et("td",null,Jt(l.subjectFull(r.item.subject)),1),et("td",null,Jt(r.item.year),1),et("td",null,Jt(r.item.num),1),et("td",{innerHTML:l.highlight(r.item.q,r.matches[0].indices)},null,8,D1)],8,N1))),128))])]),_:1})])}const H1=zn(O1,[["render",z1]]),U1={data(){return{open:[],subjects:["ken","gyo","min","syo","mso","kei","kso"]}},methods:{subjectFull(e){return Ui(e)},years(e){return["gyo","syo","mso","kso"].includes(e)?["2014","2013","2012","2011","2010","2009","2008","2007","2006"]:["2022","2021","2020","2019","2018","2017","2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006"]},qNum(e,t){return e=="gyo"&&t==2014?21:e=="syo"&&t==2014?38:e=="mso"&&t==2014?57:e=="kso"&&t==2014?21:1}}},W1=et("h1",null,"司法試験過去問集・短答",-1);function K1(e,t,n,c,a,l){const s=Le("v-list-item"),i=Le("v-list-group"),r=Le("v-list");return Be(),ct("main",null,[W1,v(r,{opened:a.open,"onUpdate:opened":t[0]||(t[0]=u=>a.open=u)},{default:Ee(()=>[(Be(!0),ct(me,null,Mn(a.subjects,u=>(Be(),hn(i,{value:u},{activator:Ee(({props:o})=>[v(s,le(o,{title:l.subjectFull(u)}),null,16,["title"])]),default:Ee(()=>[(Be(!0),ct(me,null,Mn(l.years(u),o=>(Be(),hn(s,{title:o,to:"/tantou/"+u+"/"+o+"/"+l.qNum(u,o)},null,8,["title","to"]))),256))]),_:2},1032,["value"]))),256))]),_:1},8,["opened"])])}const Y1=zn(U1,[["render",K1]]);const G1={props:{datum:{},subjectFull:"",num:"",year:""},computed:{title(){return this.subjectFull+this.year+"年第"+this.num+"問"},filteredQ(){return this.datum.q.replace(/\n/g,`

`)}}};function X1(e,t,n,c,a,l){const s=Le("v-card-text"),i=Le("v-card");return Be(),hn(i,{title:l.title,variant:"outlined"},{default:Ee(()=>[v(s,{class:"q"},{default:Ee(()=>[lt(Jt(l.filteredQ),1)]),_:1})]),_:1},8,["title"])}const Z1=zn(G1,[["render",X1],["__scopeId","data-v-56f6fcd4"]]);const Q1={emits:["showAnswer"],props:{datum:{}},data(){return{toggle_multiple:[],toggle1:"",toggle2:"",toggle3:"",toggle4:"",toggle5:""}},computed:{filteredChoices(){return Object.keys(this.datum).filter(e=>e.startsWith("c")).filter(e=>this.datum[e]!="").map(e=>this.datum[e])}},methods:{hankaku2Zenkaku(e){return e.replace(/[０-９]/g,function(t){return String.fromCharCode(t.charCodeAt(0)-65248)})},getResult(e){let t="";typeof e=="object"?(t=Object.values(e).map(a=>a+1).reduce((a,l)=>a+String(l)).slice(0,this.datum.a.length),this.toggle_multiple=[],this.toggle1="",this.toggle2="",this.toggle3="",this.toggle4="",this.toggle5=""):t=e.substr(0,1);const n=this.hankaku2Zenkaku(t)==this.datum.a;this.$emit("showAnswer",n)},setToggle(e){return"toggle"+String(e)}}};function J1(e,t,n,c,a,l){const s=Le("v-btn"),i=Le("v-item"),r=Le("v-col"),u=Le("v-row"),o=Le("v-container"),d=Le("v-item-group");return n.datum.a.length>2?(Be(),ct(me,{key:0},[(Be(!0),ct(me,null,Mn(n.datum.a.length,f=>(Be(),ct("div",null,[v(d,{modelValue:e.$data["toggle"+f],"onUpdate:modelValue":m=>e.$data["toggle"+f]=m,mandatory:"","selected-class":"bg-grey"},{default:Ee(()=>[v(o,null,{default:Ee(()=>[v(u,null,{default:Ee(()=>[(Be(),ct(me,null,Mn(2,m=>v(r,{cols:"1"},{default:Ee(()=>[v(i,null,{default:Ee(({selectedClass:h,toggle:g})=>[v(s,{class:$c(h),onClick:g},{default:Ee(()=>[lt(Jt(m),1)]),_:2},1032,["class","onClick"])]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue"])]))),256)),v(s,{onClick:t[0]||(t[0]=f=>l.getResult([a.toggle1,a.toggle2,a.toggle3,a.toggle4,a.toggle5]))},{default:Ee(()=>[lt("解答確認")]),_:1})],64)):n.datum.a.length==2?(Be(),ct(me,{key:1},[v(o,null,{default:Ee(()=>[v(d,{modelValue:a.toggle_multiple,"onUpdate:modelValue":t[1]||(t[1]=f=>a.toggle_multiple=f),multiple:"","selected-class":"bg-grey"},{default:Ee(()=>[(Be(!0),ct(me,null,Mn(l.filteredChoices,f=>(Be(),hn(i,null,{default:Ee(({selectedClass:m,toggle:h})=>[v(u,{align:"center"},{default:Ee(()=>[v(r,{cols:"1"},{default:Ee(()=>[v(s,{class:$c(m),onClick:h},{default:Ee(()=>[lt(Jt(f.substr(0,2)),1)]),_:2},1032,["class","onClick"])]),_:2},1024),v(r,{cols:"11",class:"choice"},{default:Ee(()=>[lt(Jt(f.substr(2)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1},8,["modelValue"])]),_:1}),v(s,{onClick:t[2]||(t[2]=f=>l.getResult(a.toggle_multiple))},{default:Ee(()=>[lt("解答確認")]),_:1})],64)):(Be(),hn(o,{key:2},{default:Ee(()=>[(Be(!0),ct(me,null,Mn(l.filteredChoices,f=>(Be(),hn(u,{align:"center"},{default:Ee(()=>[v(r,{cols:"1"},{default:Ee(()=>[v(s,{onClick:m=>l.getResult(f)},{default:Ee(()=>[lt(Jt(f.substr(0,2)),1)]),_:2},1032,["onClick"])]),_:2},1024),v(r,{cols:"11",class:"choice"},{default:Ee(()=>[lt(Jt(f.substr(2)),1)]),_:2},1024)]),_:2},1024))),256))]),_:1}))}const eb=zn(Q1,[["render",J1],["__scopeId","data-v-800dbb2d"]]);const tb={props:{datum:{},show:Boolean,correct:Boolean}},nb={class:"result"},cb={key:0,style:{color:"red"}},ab={key:1,style:{color:"blue"}},lb={class:"answer"};function sb(e,t,n,c,a,l){return Be(),ct("div",{class:$c({hide:!n.show})},[et("div",nb,[n.correct?(Be(),ct("p",cb,"○　正解")):(Be(),ct("p",ab,"×　不正解"))]),et("p",lb,"正解："+Jt(n.datum.a),1)],2)}const ib=zn(tb,[["render",sb],["__scopeId","data-v-73dba6f6"]]),rb={components:{QuestionComponent:Z1,ChoicesComponent:eb,ResultComponent:ib},data(){return{num:this.$route.params.qNum,subject:this.$route.params.subject,year:this.$route.params.year,subjectFull:"",datum:{},correct:!1,show:!1,questions:[]}},created(){const e=sl.filter(n=>n.subject==this.subject&&n.year==this.year),t=Number(e[0].num);this.questions=this.range(t,t+e.length),this.datum=sl.filter(n=>n.subject==this.subject&&n.year==this.year&&n.num==this.num)[0],this.subjectFull=Ui(this.subject)},computed:{breadcrumbs(){return[{text:"司法試験過去問集",disabled:!1,to:{name:"home"}},{text:"短答",disabled:!1,to:{name:"tantouTop"}},{text:this.subjectFull,disabled:!1,to:{name:"tantouTop"}},{text:this.year+"年",disabled:!1,to:{name:"tantou",params:{subject:this.subject,qNum:1}}},{text:"第"+this.num+"問",disabled:!1,to:{name:"tantou",params:{subject:this.subject,qNum:this.num}}}]}},beforeRouteUpdate(e,t,n){this.num=e.params.qNum,this.subject=e.params.subject,this.year=e.params.year,this.datum=sl.filter(c=>c.subject==e.params.subject&&c.year==e.params.year&&c.num==e.params.qNum)[0],this.correct=!1,this.show=!1,window.scrollTo(0,0),n()},methods:{prevQ(){this.$router.push({name:"tantou",params:{qNum:Number(this.num)-1}})},nextQ(){this.$router.push({name:"tantou",params:{qNum:Number(this.num)+1}})},showAnswer(e){this.correct=e,this.show=!0,window.scrollBy(0,1e3)},range(e,t){let n=[];for(let c=e;c<t;c++)n.push(c);return n}}},ob=et("h1",null,"司法試験過去問集・短答",-1);function ub(e,t,n,c,a,l){const s=Le("v-list-item"),i=Le("v-list"),r=Le("v-navigation-drawer"),u=Le("v-breadcrumbs"),o=Le("QuestionComponent"),d=Le("ChoicesComponent"),f=Le("ResultComponent"),m=Le("v-btn"),h=Le("v-main"),g=Le("v-layout");return Be(),hn(g,null,{default:Ee(()=>[v(r,{permanent:"",width:"150"},{default:Ee(()=>[v(i,{nav:""},{default:Ee(()=>[(Be(!0),ct(me,null,Mn(a.questions,S=>(Be(),hn(s,{title:"第"+S+"問",to:"/tantou/"+a.subject+"/"+a.year+"/"+S,ref_for:!0,ref:"question"},null,8,["title","to"]))),256))]),_:1})]),_:1}),v(h,null,{default:Ee(()=>[ob,v(u,{items:l.breadcrumbs,divider:">"},null,8,["items"]),v(o,{datum:a.datum,subjectFull:a.subjectFull,num:a.num,year:a.year},null,8,["datum","subjectFull","num","year"]),v(d,{datum:a.datum,onShowAnswer:l.showAnswer},null,8,["datum","onShowAnswer"]),v(f,{datum:a.datum,show:a.show,correct:a.correct},null,8,["datum","show","correct"]),v(m,{onClick:l.prevQ},{default:Ee(()=>[lt("前の問題")]),_:1},8,["onClick"]),lt("　"),v(m,{onClick:l.nextQ},{default:Ee(()=>[lt("次の問題")]),_:1},8,["onClick"])]),_:1})]),_:1})}const db=zn(rb,[["render",ub]]),fb=zy({history:ly("/shihoushiken/"),routes:[{path:"/",name:"home",component:Zy},{path:"/search",name:"search",component:H1},{path:"/tantou",name:"tantouTop",component:Y1},{path:"/tantou/:subject/:year/:qNum",name:"tantou",component:db}]});function Po(e,t,n){vb(e,t),t.set(e,n)}function vb(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function mb(e,t,n){var c=Xd(e,t,"set");return hb(e,c,n),n}function hb(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}function Qn(e,t){var n=Xd(e,t,"get");return gb(e,n)}function Xd(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function gb(e,t){return t.get?t.get.call(e):t.value}function Zd(e,t,n){const c=t.length-1;if(c<0)return e===void 0?n:e;for(let a=0;a<c;a++){if(e==null)return n;e=e[t[a]]}return e==null||e[t[c]]===void 0?n:e[t[c]]}function vc(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime()||e!==Object(e)||t!==Object(t))return!1;const n=Object.keys(e);return n.length!==Object.keys(t).length?!1:n.every(c=>vc(e[c],t[c]))}function Fs(e,t,n){return e==null||!t||typeof t!="string"?n:e[t]!==void 0?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),Zd(e,t.split("."),n))}function tn(e,t,n){if(t==null)return e===void 0?n:e;if(e!==Object(e)){if(typeof t!="function")return n;const a=t(e,n);return typeof a>"u"?n:a}if(typeof t=="string")return Fs(e,t,n);if(Array.isArray(t))return Zd(e,t,n);if(typeof t!="function")return n;const c=t(e,n);return typeof c>"u"?n:c}function cn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:e},(n,c)=>t+c)}function ie(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(e==null||e===""))return isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${t}`:void 0}function Ns(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function yb(e){return e==null?void 0:e.$el}const To=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16}),Ds=Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function Qd(e){return Object.keys(e)}function Wc(e,t,n){const c=Object.create(null),a=Object.create(null);for(const l in e)t.some(s=>s instanceof RegExp?s.test(l):s===l)&&!(n!=null&&n.some(s=>s===l))?c[l]=e[l]:a[l]=e[l];return[c,a]}function un(e,t){const n={...e};return t.forEach(c=>delete n[c]),n}function mc(e){return Wc(e,["class","style","id",/^data-/])}function Tt(e){return e==null?[]:Array.isArray(e)?e:[e]}function ft(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(t,Math.min(n,e))}function $o(e){const t=e.toString().trim();return t.includes(".")?t.length-t.indexOf(".")-1:0}function Mo(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return e+n.repeat(Math.max(0,t-e.length))}function bb(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let c=0;for(;c<e.length;)n.push(e.substr(c,t)),c+=t;return n}function Bo(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3;if(e<t)return`${e} B`;const n=t===1024?["Ki","Mi","Gi"]:["k","M","G"];let c=-1;for(;Math.abs(e)>=t&&c<n.length-1;)e/=t,++c;return`${e.toFixed(1)} ${n[c]}B`}function pn(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const c={};for(const a in e)c[a]=e[a];for(const a in t){const l=e[a],s=t[a];if(Ns(l)&&Ns(s)){c[a]=pn(l,s,n);continue}if(Array.isArray(l)&&Array.isArray(s)&&n){c[a]=n(l,s);continue}c[a]=s}return c}function On(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(On.cache.has(e))return On.cache.get(e);const t=e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return On.cache.set(e,t),t}On.cache=new Map;function ga(e,t){if(!t||typeof t!="object")return[];if(Array.isArray(t))return t.map(n=>ga(e,n)).flat(1);if(Array.isArray(t.children))return t.children.map(n=>ga(e,n)).flat(1);if(t.component){if(Object.getOwnPropertySymbols(t.component.provides).includes(e))return[t.component];if(t.component.subTree)return ga(e,t.component.subTree).flat(1)}return[]}var Za=new WeakMap,Cc=new WeakMap;class pb{constructor(t){Po(this,Za,{writable:!0,value:[]}),Po(this,Cc,{writable:!0,value:0}),this.size=t}push(t){Qn(this,Za)[Qn(this,Cc)]=t,mb(this,Cc,(Qn(this,Cc)+1)%this.size)}values(){return Qn(this,Za).slice(Qn(this,Cc)).concat(Qn(this,Za).slice(0,Qn(this,Cc)))}}function kb(e){return"touches"in e?{clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}:{clientX:e.clientX,clientY:e.clientY}}function Wi(e){const t=st({}),n=y(e);return Kt(()=>{for(const c in n.value)t[c]=n.value[c]},{flush:"sync"}),Ii(t)}function gl(e,t){return e.includes(t)}const Sb=/^on[^a-z]/,Cb=e=>Sb.test(e),an=()=>[Function,Array];function Ro(e,t){return t="on"+Cn(t),!!(e[t]||e[`${t}Once`]||e[`${t}Capture`]||e[`${t}OnceCapture`]||e[`${t}CaptureOnce`])}function Ki(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),c=1;c<t;c++)n[c-1]=arguments[c];if(Array.isArray(e))for(const a of e)a(...n);else typeof e=="function"&&e(...n)}function Yi(e){const t=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map(n=>`${n}:not([tabindex="-1"]):not([disabled])`).join(", ");return[...e.querySelectorAll(t)]}function Jd(e,t){var a,l,s;const n=Yi(e),c=n.indexOf(document.activeElement);if(!t)e.contains(document.activeElement)||(a=n[0])==null||a.focus();else if(t==="first")(l=n[0])==null||l.focus();else if(t==="last")(s=n.at(-1))==null||s.focus();else{let i,r=c;const u=t==="next"?1:-1;do r+=u,i=n[r];while((!i||i.offsetParent==null)&&r<n.length&&r>=0);i?i.focus():Jd(e,t==="next"?"first":"last")}}const ef=["top","bottom"],_b=["start","end","left","right"];function zs(e,t){let[n,c]=e.split(" ");return c||(c=gl(ef,n)?"start":gl(_b,n)?"top":"center"),{side:Hs(n,t),align:Hs(c,t)}}function Hs(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function rs(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function os(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function Oo(e){return{side:e.align,align:e.side}}function Lo(e){return gl(ef,e.side)?"y":"x"}class Tc{constructor(t){let{x:n,y:c,width:a,height:l}=t;this.x=n,this.y=c,this.width=a,this.height=l}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Fo(e,t){return{x:{before:Math.max(0,t.left-e.left),after:Math.max(0,e.right-t.right)},y:{before:Math.max(0,t.top-e.top),after:Math.max(0,e.bottom-t.bottom)}}}function Gi(e){const t=e.getBoundingClientRect(),n=getComputedStyle(e),c=n.transform;if(c){let a,l,s,i,r;if(c.startsWith("matrix3d("))a=c.slice(9,-1).split(/, /),l=+a[0],s=+a[5],i=+a[12],r=+a[13];else if(c.startsWith("matrix("))a=c.slice(7,-1).split(/, /),l=+a[0],s=+a[3],i=+a[4],r=+a[5];else return new Tc(t);const u=n.transformOrigin,o=t.x-i-(1-l)*parseFloat(u),d=t.y-r-(1-s)*parseFloat(u.slice(u.indexOf(" ")+1)),f=l?t.width/l:e.offsetWidth+1,m=s?t.height/s:e.offsetHeight+1;return new Tc({x:o,y:d,width:f,height:m})}else return new Tc(t)}function sc(e,t,n){if(typeof e.animate>"u")return{finished:Promise.resolve()};let c;try{c=e.animate(t,n)}catch{return{finished:Promise.resolve()}}return typeof c.finished>"u"&&(c.finished=new Promise(a=>{c.onfinish=()=>{a(c)}})),c}function tf(e,t,n){if(n&&(t={__isVue:!0,$parent:n,$options:t}),t){if(t.$_alreadyWarned=t.$_alreadyWarned||[],t.$_alreadyWarned.includes(e))return;t.$_alreadyWarned.push(e)}return`[Vuetify] ${e}`+(t?jb(t):"")}function Ln(e,t,n){const c=tf(e,t,n);c!=null&&console.warn(c)}function Us(e,t,n){const c=tf(e,t,n);c!=null&&console.error(c)}const xb=/(?:^|[-_])(\w)/g,wb=e=>e.replace(xb,t=>t.toUpperCase()).replace(/[-_]/g,"");function us(e,t){if(e.$root===e)return"<Root>";const n=typeof e=="function"&&e.cid!=null?e.options:e.__isVue?e.$options||e.constructor.options:e||{};let c=n.name||n._componentTag;const a=n.__file;if(!c&&a){const l=a.match(/([^/\\]+)\.vue$/);c=l==null?void 0:l[1]}return(c?`<${wb(c)}>`:"<Anonymous>")+(a&&t!==!1?` at ${a}`:"")}function jb(e){if(e.__isVue&&e.$parent){const t=[];let n=0;for(;e;){if(t.length>0){const c=t[t.length-1];if(c.constructor===e.constructor){n++,e=e.$parent;continue}else n>0&&(t[t.length-1]=[c,n],n=0)}t.push(e),e=e.$parent}return`

found in

`+t.map((c,a)=>`${a===0?"---> ":" ".repeat(5+a*2)}${Array.isArray(c)?`${us(c[0])}... (${c[1]} recursive calls)`:us(c)}`).join(`
`)}else return`

(found in ${us(e)})`}const qb=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],Vb=e=>e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055,Ib=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],Eb=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function nf(e){const t=Array(3),n=Vb,c=qb;for(let a=0;a<3;++a)t[a]=Math.round(ft(n(c[a][0]*e[0]+c[a][1]*e[1]+c[a][2]*e[2]))*255);return{r:t[0],g:t[1],b:t[2]}}function Xi(e){let{r:t,g:n,b:c}=e;const a=[0,0,0],l=Eb,s=Ib;t=l(t/255),n=l(n/255),c=l(c/255);for(let i=0;i<3;++i)a[i]=s[i][0]*t+s[i][1]*n+s[i][2]*c;return a}const yl=.20689655172413793,Ab=e=>e>yl**3?Math.cbrt(e):e/(3*yl**2)+4/29,Pb=e=>e>yl?e**3:3*yl**2*(e-4/29);function cf(e){const t=Ab,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function af(e){const t=Pb,n=(e[0]+16)/116;return[t(n+e[1]/500)*.95047,t(n),t(n-e[2]/200)*1.08883]}function No(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}function ic(e){if(typeof e=="number")return(isNaN(e)||e<0||e>16777215)&&Ln(`'${e}' is not a valid hex color`),{r:(e&16711680)>>16,g:(e&65280)>>8,b:e&255};if(typeof e=="string"){let t=e.startsWith("#")?e.slice(1):e;[3,4].includes(t.length)?t=t.split("").map(c=>c+c).join(""):[6,8].includes(t.length)||Ln(`'${e}' is not a valid hex(a) color`);const n=parseInt(t,16);return(isNaN(n)||n<0||n>4294967295)&&Ln(`'${e}' is not a valid hex(a) color`),uf(t)}else throw new TypeError(`Colors can only be numbers or strings, recieved ${e==null?e:e.constructor.name} instead`)}function Ml(e){const{h:t,s:n,v:c,a}=e,l=i=>{const r=(i+t/60)%6;return c-c*n*Math.max(Math.min(r,4-r,1),0)},s=[l(5),l(3),l(1)].map(i=>Math.round(i*255));return{r:s[0],g:s[1],b:s[2],a}}function Zi(e){if(!e)return{h:0,s:1,v:1,a:1};const t=e.r/255,n=e.g/255,c=e.b/255,a=Math.max(t,n,c),l=Math.min(t,n,c);let s=0;a!==l&&(a===t?s=60*(0+(n-c)/(a-l)):a===n?s=60*(2+(c-t)/(a-l)):a===c&&(s=60*(4+(t-n)/(a-l)))),s<0&&(s=s+360);const i=a===0?0:(a-l)/a,r=[s,i,a];return{h:r[0],s:r[1],v:r[2],a:e.a}}function lf(e){const{h:t,s:n,v:c,a}=e,l=c-c*n/2,s=l===1||l===0?0:(c-l)/Math.min(l,1-l);return{h:t,s,l,a}}function sf(e){const{h:t,s:n,l:c,a}=e,l=c+n*Math.min(c,1-c),s=l===0?0:2-2*c/l;return{h:t,s,v:l,a}}function Tb(e){let{r:t,g:n,b:c,a}=e;return a===void 0?`rgb(${t}, ${n}, ${c})`:`rgba(${t}, ${n}, ${c}, ${a})`}function rf(e){return Tb(Ml(e))}function Qa(e){const t=Math.round(e).toString(16);return("00".substr(0,2-t.length)+t).toUpperCase()}function of(e){let{r:t,g:n,b:c,a}=e;return`#${[Qa(t),Qa(n),Qa(c),a!==void 0?Qa(Math.round(a*255)):""].join("")}`}function uf(e){e=vf(e);let[t,n,c,a]=bb(e,2).map(l=>parseInt(l,16));return a=a===void 0?a:a/255,{r:t,g:n,b:c,a}}function df(e){const t=uf(e);return Zi(t)}function ff(e){return of(Ml(e))}function vf(e){return e.startsWith("#")&&(e=e.slice(1)),e=e.replace(/([^0-9a-f])/gi,"F"),(e.length===3||e.length===4)&&(e=e.split("").map(t=>t+t).join("")),e.length!==6&&(e=Mo(Mo(e,6),8,"F")),e}function $b(e,t){const n=cf(Xi(e));return n[0]=n[0]+t*10,nf(af(n))}function Mb(e,t){const n=cf(Xi(e));return n[0]=n[0]-t*10,nf(af(n))}function Ws(e){const t=ic(e);return Xi(t)[1]}function Bb(e,t){const n=Ws(e),c=Ws(t),a=Math.max(n,c),l=Math.min(n,c);return(a+.05)/(l+.05)}function ye(e,t){return n=>Object.keys(e).reduce((c,a)=>{const s=typeof e[a]=="object"&&e[a]!=null&&!Array.isArray(e[a])?e[a]:{type:e[a]};return n&&a in n?c[a]={...s,default:n[a]}:c[a]=s,t&&!c[a].source&&(c[a].source=t),c},{})}const ne=ye({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function Nn(e,t){let n;function c(){n=ki(),n.run(()=>t.length?t(()=>{n==null||n.stop(),c()}):t())}ae(e,a=>{a&&!n?c():a||(n==null||n.stop(),n=void 0)},{immediate:!0}),Vt(()=>{n==null||n.stop()})}const qa=Symbol.for("vuetify:defaults");function Rb(e){return $(e)}function Qi(){const e=Ve(qa);if(!e)throw new Error("[Vuetify] Could not find defaults instance");return e}function Je(e,t){const n=Qi(),c=$(e),a=y(()=>{if(dt(t==null?void 0:t.disabled))return n.value;const s=dt(t==null?void 0:t.scoped),i=dt(t==null?void 0:t.reset),r=dt(t==null?void 0:t.root);let u=pn(c.value,{prev:n.value});if(s)return u;if(i||r){const o=Number(i||1/0);for(let d=0;d<=o&&!(!u||!("prev"in u));d++)u=u.prev;return u}return u.prev?pn(u.prev,u):u});return Ke(qa,a),a}function Ob(e,t){var n,c;return typeof((n=e.props)==null?void 0:n[t])<"u"||typeof((c=e.props)==null?void 0:c[On(t)])<"u"}function Lb(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Qi();const c=rt("useDefaults");if(t=t??c.type.name??c.type.__name,!t)throw new Error("[Vuetify] Could not determine component name");const a=y(()=>{var r;return(r=n.value)==null?void 0:r[e._as??t]}),l=new Proxy(e,{get(r,u){var d,f,m,h;const o=Reflect.get(r,u);return u==="class"||u==="style"?[(d=a.value)==null?void 0:d[u],o].filter(g=>g!=null):typeof u=="string"&&!Ob(c.vnode,u)?((f=a.value)==null?void 0:f[u])??((h=(m=n.value)==null?void 0:m.global)==null?void 0:h[u])??o:o}}),s=Vi();Kt(()=>{if(a.value){const r=Object.entries(a.value).filter(u=>{let[o]=u;return o.startsWith(o[0].toUpperCase())});r.length&&(s.value=Object.fromEntries(r))}});function i(){Nn(s,()=>{var r;Je(pn(((r=zb(qa))==null?void 0:r.value)??{},s.value))})}return{props:l,provideSubDefaults:i}}function Mt(e){if(e._setup=e._setup??e.setup,!e.name)return Ln("The component is missing an explicit name, unable to generate default prop value"),e;if(e._setup){e.props=ye(e.props??{},On(e.name))();const t=Object.keys(e.props);e.filterProps=function(c){return Wc(c,t,["class","style"])},e.props._as=String,e.setup=function(c,a){const l=Qi();if(!l.value)return e._setup(c,a);const{props:s,provideSubDefaults:i}=Lb(c,c._as??e.name,l),r=e._setup(s,a);return i(),r}}return e}function W(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t=>(e?Mt:$i)(t)}function Yt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return W()({name:n??Cn($t(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...ne()},setup(c,a){let{slots:l}=a;return()=>{var s;return rn(c.tag,{class:[e,c.class],style:c.style},(s=l.default)==null?void 0:s.call(l))}}})}function mf(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}const Va="cubic-bezier(0.4, 0, 0.2, 1)",Fb="cubic-bezier(0.0, 0, 0.2, 1)",Nb="cubic-bezier(0.4, 0, 1, 1)";function rt(e,t){const n=Pl();if(!n)throw new Error(`[Vuetify] ${e} ${t||"must be called from inside a setup function"}`);return n}function xn(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const t=rt(e).type;return On((t==null?void 0:t.aliasName)||(t==null?void 0:t.name))}let hf=0,il=new WeakMap;function ht(){const e=rt("getUid");if(il.has(e))return il.get(e);{const t=hf++;return il.set(e,t),t}}ht.reset=()=>{hf=0,il=new WeakMap};function gf(e){for(;e;){if(Ji(e))return e;e=e.parentElement}return document.scrollingElement}function bl(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(Ji(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function Ji(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}const Xe=typeof window<"u",er=Xe&&"IntersectionObserver"in window,Db=Xe&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),Ks=Xe&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports("selector(:focus-visible)");function zb(e){const{provides:t}=rt("injectSelf");if(t&&e in t)return t[e]}function Hb(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function X(e){const t=rt("useRender");t.render=e}function Ce(e,t,n){let c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:d=>d,a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:d=>d;const l=rt("useProxiedModel"),s=$(e[t]!==void 0?e[t]:n),i=On(t),u=y(i!==t?()=>{var d,f,m,h;return e[t],!!(((d=l.vnode.props)!=null&&d.hasOwnProperty(t)||(f=l.vnode.props)!=null&&f.hasOwnProperty(i))&&((m=l.vnode.props)!=null&&m.hasOwnProperty(`onUpdate:${t}`)||(h=l.vnode.props)!=null&&h.hasOwnProperty(`onUpdate:${i}`)))}:()=>{var d,f;return e[t],!!((d=l.vnode.props)!=null&&d.hasOwnProperty(t)&&((f=l.vnode.props)!=null&&f.hasOwnProperty(`onUpdate:${t}`)))});Nn(()=>!u.value,()=>{ae(()=>e[t],d=>{s.value=d})});const o=y({get(){const d=e[t];return c(u.value?d:s.value)},set(d){const f=a(d),m=xe(u.value?e[t]:s.value);m===f||c(m)===d||(s.value=f,l==null||l.emit(`update:${t}`,f))}});return Object.defineProperty(o,"externalValue",{get:()=>u.value?e[t]:s.value}),o}const Ub={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},Do="$vuetify.",zo=(e,t)=>e.replace(/\{(\d+)\}/g,(n,c)=>String(t[+c])),yf=(e,t,n)=>function(c){for(var a=arguments.length,l=new Array(a>1?a-1:0),s=1;s<a;s++)l[s-1]=arguments[s];if(!c.startsWith(Do))return zo(c,l);const i=c.replace(Do,""),r=e.value&&n.value[e.value],u=t.value&&n.value[t.value];let o=Fs(r,i,null);return o||(Ln(`Translation key "${c}" not found in "${e.value}", trying fallback locale`),o=Fs(u,i,null)),o||(Us(`Translation key "${c}" not found in fallback`),o=c),typeof o!="string"&&(Us(`Translation key "${c}" has a non-string value`),o=c),zo(o,l)};function bf(e,t){return(n,c)=>new Intl.NumberFormat([e.value,t.value],c).format(n)}function ds(e,t,n){const c=Ce(e,t,e[t]??n.value);return c.value=e[t]??n.value,ae(n,a=>{e[t]==null&&(c.value=n.value)}),c}function pf(e){return t=>{const n=ds(t,"locale",e.current),c=ds(t,"fallback",e.fallback),a=ds(t,"messages",e.messages);return{name:"vuetify",current:n,fallback:c,messages:a,t:yf(n,c,a),n:bf(n,c),provide:pf({current:n,fallback:c,messages:a})}}}function Wb(e){const t=$((e==null?void 0:e.locale)??"en"),n=$((e==null?void 0:e.fallback)??"en"),c=$({en:Ub,...e==null?void 0:e.messages});return{name:"vuetify",current:t,fallback:n,messages:c,t:yf(t,n,c),n:bf(t,n),provide:pf({current:t,fallback:n,messages:c})}}const Kb={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1},Lc=Symbol.for("vuetify:locale");function Yb(e){return e.name!=null}function Gb(e){const t=e!=null&&e.adapter&&Yb(e==null?void 0:e.adapter)?e==null?void 0:e.adapter:Wb(e),n=Zb(t,e);return{...t,...n}}function Bt(){const e=Ve(Lc);if(!e)throw new Error("[Vuetify] Could not find injected locale instance");return e}function Xb(e){const t=Ve(Lc);if(!t)throw new Error("[Vuetify] Could not find injected locale instance");const n=t.provide(e),c=Qb(n,t.rtl,e),a={...n,...c};return Ke(Lc,a),a}function Zb(e,t){const n=$((t==null?void 0:t.rtl)??Kb),c=y(()=>n.value[e.current.value]??!1);return{isRtl:c,rtl:n,rtlClasses:y(()=>`v-locale--is-${c.value?"rtl":"ltr"}`)}}function Qb(e,t,n){const c=y(()=>n.rtl??t.value[e.current.value]??!1);return{isRtl:c,rtl:t,rtlClasses:y(()=>`v-locale--is-${c.value?"rtl":"ltr"}`)}}function wn(){const e=Ve(Lc);if(!e)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:e.isRtl,rtlClasses:e.rtlClasses}}function Jb(e){let t=[];const n=[],c=kf(e),a=Sf(e);for(let l=0;l<c.getDay();l++)t.push(null);for(let l=1;l<=a.getDate();l++){const s=new Date(e.getFullYear(),e.getMonth(),l);t.push(s),t.length===7&&(n.push(t),t=[])}for(let l=t.length;l<7;l++)t.push(null);return n.push(t),n}function kf(e){return new Date(e.getFullYear(),e.getMonth(),1)}function Sf(e){return new Date(e.getFullYear(),e.getMonth()+1,0)}function e2(e){if(e==null)return null;if(e instanceof Date)return e;if(typeof e=="string"){const t=Date.parse(e);if(!isNaN(t))return new Date(t)}return null}const t2={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:0,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:0,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0},Ho=new Date(2e3,0,2);function n2(e){const t=t2[e.slice(-2).toUpperCase()];return cn(7).map(n=>{const c=new Date(Ho);return c.setDate(Ho.getDate()+t+n),new Intl.DateTimeFormat(e,{weekday:"long"}).format(c)})}function c2(e,t,n){const c=new Date(e);let a={};switch(t){case"fullDateWithWeekday":a={weekday:"long",day:"numeric",month:"long",year:"numeric"};break;case"normalDateWithWeekday":a={weekday:"short",day:"numeric",month:"short",year:"numeric"};break;case"keyboardDate":a={};break;case"monthAndDate":a={month:"long",day:"numeric"};break;case"monthAndYear":a={month:"long",year:"numeric"};break;default:a={timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,a).format(c)}function a2(e,t){const n=new Date(e);return n.setDate(n.getDate()+t),n}function l2(e,t){const n=new Date(e);return n.setMonth(n.getMonth()+t),n}function s2(e){return e.getFullYear()}function i2(e){return e.getMonth()}function r2(e){return new Date(e.getFullYear(),0,1)}function o2(e){return new Date(e.getFullYear(),11,31)}function fs(e){return new Date(e,0,1)}function u2(e){let t=e.getFullYear(),n=fs(t);if(e<n)t=t-1,n=fs(t);else{const l=fs(t+1);e>=l&&(t=t+1,n=l)}const c=Math.abs(e.getTime()-n.getTime()),a=Math.ceil(c/(1e3*60*60*24));return Math.floor(a/7)+1}function d2(e,t){return Cf(e,t[0])&&v2(e,t[1])}function f2(e){const t=new Date(e);return t instanceof Date&&!isNaN(t.getTime())}function Cf(e,t){return e.getTime()>t.getTime()}function v2(e,t){return e.getTime()<t.getTime()}function m2(e,t){return e.getTime()===t.getTime()}function h2(e,t){return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function g2(e,t){return e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function y2(e,t,n){const c=new Date(e),a=new Date(t);return n==="month"?c.getMonth()-a.getMonth()+(c.getFullYear()-a.getFullYear())*12:Math.floor((c.getTime()-a.getTime())/(1e3*60*60*24))}function b2(e,t){const n=new Date(e);return n.setFullYear(t),n}class p2{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"en";this.locale=t}date(t){return e2(t)}addDays(t,n){return a2(t,n)}addMonths(t,n){return l2(t,n)}getWeekArray(t){return Jb(t)}startOfMonth(t){return kf(t)}endOfMonth(t){return Sf(t)}format(t,n){return c2(t,n,this.locale)}isEqual(t,n){return m2(t,n)}isValid(t){return f2(t)}isWithinRange(t,n){return d2(t,n)}isAfter(t,n){return Cf(t,n)}isSameDay(t,n){return h2(t,n)}isSameMonth(t,n){return g2(t,n)}setYear(t,n){return b2(t,n)}getDiff(t,n,c){return y2(t,n,c)}getWeek(t){return u2(t)}getWeekdays(){return n2(this.locale)}getYear(t){return s2(t)}getMonth(t){return i2(t)}startOfYear(t){return r2(t)}endOfYear(t){return o2(t)}}const Uo=Symbol.for("vuetify:date-adapter");function k2(e){return e??{adapter:p2}}const Bl=["sm","md","lg","xl","xxl"],Ys=Symbol.for("vuetify:display"),Wo={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},S2=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Wo;return pn(Wo,e)};function Ko(e){return Xe&&!e?window.innerWidth:0}function Yo(e){return Xe&&!e?window.innerHeight:0}function Go(e){const t=Xe&&!e?window.navigator.userAgent:"ssr";function n(h){return!!t.match(h)}const c=n(/android/i),a=n(/iphone|ipad|ipod/i),l=n(/cordova/i),s=n(/electron/i),i=n(/chrome/i),r=n(/edge/i),u=n(/firefox/i),o=n(/opera/i),d=n(/win/i),f=n(/mac/i),m=n(/linux/i);return{android:c,ios:a,cordova:l,electron:s,chrome:i,edge:r,firefox:u,opera:o,win:d,mac:f,linux:m,touch:Db,ssr:t==="ssr"}}function C2(e,t){const{thresholds:n,mobileBreakpoint:c}=S2(e),a=$(Yo(t)),l=Vi(Go(t)),s=st({}),i=$(Ko(t));function r(){a.value=Yo(),i.value=Ko()}function u(){r(),l.value=Go()}return Kt(()=>{const o=i.value<n.sm,d=i.value<n.md&&!o,f=i.value<n.lg&&!(d||o),m=i.value<n.xl&&!(f||d||o),h=i.value<n.xxl&&!(m||f||d||o),g=i.value>=n.xxl,S=o?"xs":d?"sm":f?"md":m?"lg":h?"xl":"xxl",b=typeof c=="number"?c:n[c],C=i.value<b;s.xs=o,s.sm=d,s.md=f,s.lg=m,s.xl=h,s.xxl=g,s.smAndUp=!o,s.mdAndUp=!(o||d),s.lgAndUp=!(o||d||f),s.xlAndUp=!(o||d||f||m),s.smAndDown=!(f||m||h||g),s.mdAndDown=!(m||h||g),s.lgAndDown=!(h||g),s.xlAndDown=!g,s.name=S,s.height=a.value,s.width=i.value,s.mobile=C,s.mobileBreakpoint=c,s.platform=l.value,s.thresholds=n}),Xe&&window.addEventListener("resize",r,{passive:!0}),{...Ii(s),update:u,ssr:!!t}}function hc(){const e=Ve(Ys);if(!e)throw new Error("Could not find Vuetify display injection");return e}const _2={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"},x2={component:e=>rn(nr,{...e,class:"mdi"})},pe=[String,Function,Object,Array],Gs=Symbol.for("vuetify:icons"),Rl=ye({icon:{type:pe},tag:{type:String,required:!0}},"icon"),Xs=W()({name:"VComponentIcon",props:Rl(),setup(e,t){let{slots:n}=t;return()=>{const c=e.icon;return v(e.tag,null,{default:()=>{var a;return[e.icon?v(c,null,null):(a=n.default)==null?void 0:a.call(n)]}})}}}),tr=Mt({name:"VSvgIcon",inheritAttrs:!1,props:Rl(),setup(e,t){let{attrs:n}=t;return()=>v(e.tag,le(n,{style:null}),{default:()=>[v("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(e.icon)?e.icon.map(c=>Array.isArray(c)?v("path",{d:c[0],"fill-opacity":c[1]},null):v("path",{d:c},null)):v("path",{d:e.icon},null)])]})}}),w2=Mt({name:"VLigatureIcon",props:Rl(),setup(e){return()=>v(e.tag,null,{default:()=>[e.icon]})}}),nr=Mt({name:"VClassIcon",props:Rl(),setup(e){return()=>v(e.tag,{class:e.icon},null)}}),j2={svg:{component:tr},class:{component:nr}};function q2(e){return pn({defaultSet:"mdi",sets:{...j2,mdi:x2},aliases:_2},e)}const V2=e=>{const t=Ve(Gs);if(!t)throw new Error("Missing Vuetify Icons provide!");return{iconData:y(()=>{var r;const c=dt(e);if(!c)return{component:Xs};let a=c;if(typeof a=="string"&&(a=a.trim(),a.startsWith("$")&&(a=(r=t.aliases)==null?void 0:r[a.slice(1)])),!a)throw new Error(`Could not find aliased icon "${c}"`);if(Array.isArray(a))return{component:tr,icon:a};if(typeof a!="string")return{component:Xs,icon:a};const l=Object.keys(t.sets).find(u=>typeof a=="string"&&a.startsWith(`${u}:`)),s=l?a.slice(l.length+1):a;return{component:t.sets[l??t.defaultSet].component,icon:s}})}},_c=2.4,Xo=.2126729,Zo=.7151522,Qo=.072175,I2=.55,E2=.58,A2=.57,P2=.62,Ja=.03,Jo=1.45,T2=5e-4,$2=1.25,M2=1.25,eu=.078,tu=12.82051282051282,el=.06,nu=.001;function cu(e,t){const n=(e.r/255)**_c,c=(e.g/255)**_c,a=(e.b/255)**_c,l=(t.r/255)**_c,s=(t.g/255)**_c,i=(t.b/255)**_c;let r=n*Xo+c*Zo+a*Qo,u=l*Xo+s*Zo+i*Qo;if(r<=Ja&&(r+=(Ja-r)**Jo),u<=Ja&&(u+=(Ja-u)**Jo),Math.abs(u-r)<T2)return 0;let o;if(u>r){const d=(u**I2-r**E2)*$2;o=d<nu?0:d<eu?d-d*tu*el:d-el}else{const d=(u**P2-r**A2)*M2;o=d>-nu?0:d>-eu?d-d*tu*el:d+el}return o*100}const Ia=Symbol.for("vuetify:theme"),Ie=ye({theme:String},"theme"),ia={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-variant":"#BDBDBD","on-surface-variant":"#424242",primary:"#BB86FC","primary-darken-1":"#3700B3",secondary:"#03DAC5","secondary-darken-1":"#03DAC5",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}};function B2(){var n,c;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ia;if(!e)return{...ia,isDisabled:!0};const t={};for(const[a,l]of Object.entries(e.themes??{})){const s=l.dark||a==="dark"?(n=ia.themes)==null?void 0:n.dark:(c=ia.themes)==null?void 0:c.light;t[a]=pn(s,l)}return pn(ia,{...e,themes:t})}function R2(e){const t=st(B2(e)),n=$(t.defaultTheme),c=$(t.themes),a=y(()=>{const o={};for(const[d,f]of Object.entries(c.value)){const m=o[d]={...f,colors:{...f.colors}};if(t.variations)for(const h of t.variations.colors){const g=m.colors[h];if(g)for(const S of["lighten","darken"]){const b=S==="lighten"?$b:Mb;for(const C of cn(t.variations[S],1))m.colors[`${h}-${S}-${C}`]=of(b(ic(g),C))}}for(const h of Object.keys(m.colors)){if(/^on-[a-z]/.test(h)||m.colors[`on-${h}`])continue;const g=`on-${h}`,S=ic(m.colors[h]),b=Math.abs(cu(ic(0),S)),C=Math.abs(cu(ic(16777215),S));m.colors[g]=C>Math.min(b,50)?"#fff":"#000"}}return o}),l=y(()=>a.value[n.value]),s=y(()=>{const o=[];l.value.dark&&Jn(o,":root",["color-scheme: dark"]),Jn(o,":root",au(l.value));for(const[h,g]of Object.entries(a.value))Jn(o,`.v-theme--${h}`,[`color-scheme: ${g.dark?"dark":"normal"}`,...au(g)]);const d=[],f=[],m=new Set(Object.values(a.value).flatMap(h=>Object.keys(h.colors)));for(const h of m)/^on-[a-z]/.test(h)?Jn(f,`.${h}`,[`color: rgb(var(--v-theme-${h})) !important`]):(Jn(d,`.bg-${h}`,[`--v-theme-overlay-multiplier: var(--v-theme-${h}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${h})) !important`,`color: rgb(var(--v-theme-on-${h})) !important`]),Jn(f,`.text-${h}`,[`color: rgb(var(--v-theme-${h})) !important`]),Jn(f,`.border-${h}`,[`--v-border-color: var(--v-theme-${h})`]));return o.push(...d,...f),o.map((h,g)=>g===0?h:`    ${h}`).join("")});function i(){return{style:[{children:s.value,id:"vuetify-theme-stylesheet",nonce:t.cspNonce||!1}]}}function r(o){const d=o._context.provides.usehead;if(d)if(d.push){const m=d.push(i);ae(s,()=>{m.patch(i)})}else Xe?(d.addHeadObjs(y(i)),Kt(()=>d.updateDOM())):d.addHeadObjs(i());else{let h=function(){if(!t.isDisabled){if(typeof document<"u"&&!m){const g=document.createElement("style");g.type="text/css",g.id="vuetify-theme-stylesheet",t.cspNonce&&g.setAttribute("nonce",t.cspNonce),m=g,document.head.appendChild(m)}m&&(m.innerHTML=s.value)}};var f=h;let m=Xe?document.getElementById("vuetify-theme-stylesheet"):null;ae(s,h,{immediate:!0})}}const u=y(()=>t.isDisabled?void 0:`v-theme--${n.value}`);return{install:r,isDisabled:t.isDisabled,name:n,themes:c,current:l,computedThemes:a,themeClasses:u,styles:s,global:{name:n,current:l}}}function Pe(e){rt("provideTheme");const t=Ve(Ia,null);if(!t)throw new Error("Could not find Vuetify theme injection");const n=y(()=>e.theme??(t==null?void 0:t.name.value)),c=y(()=>t.isDisabled?void 0:`v-theme--${n.value}`),a={...t,name:n,themeClasses:c};return Ke(Ia,a),a}function _f(){rt("useTheme");const e=Ve(Ia,null);if(!e)throw new Error("Could not find Vuetify theme injection");return e}function Jn(e,t,n){e.push(`${t} {
`,...n.map(c=>`  ${c};
`),`}
`)}function au(e){const t=e.dark?2:1,n=e.dark?1:2,c=[];for(const[a,l]of Object.entries(e.colors)){const s=ic(l);c.push(`--v-theme-${a}: ${s.r},${s.g},${s.b}`),a.startsWith("on-")||c.push(`--v-theme-${a}-overlay-multiplier: ${Ws(l)>.18?t:n}`)}for(const[a,l]of Object.entries(e.variables)){const s=typeof l=="string"&&l.startsWith("#")?ic(l):void 0,i=s?`${s.r}, ${s.g}, ${s.b}`:void 0;c.push(`--v-${a}: ${i??l}`)}return c}function sn(e){const t=$(),n=$();if(Xe){const c=new ResizeObserver(a=>{e==null||e(a,c),a.length&&(n.value=a[0].contentRect)});pt(()=>{c.disconnect()}),ae(t,(a,l)=>{l&&(c.unobserve(l),n.value=void 0),a&&c.observe(a)},{flush:"post"})}return{resizeRef:t,contentRect:$a(n)}}const pl=Symbol.for("vuetify:layout"),xf=Symbol.for("vuetify:layout-item"),lu=1e3,wf=ye({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Kc=ye({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function O2(){const e=Ve(pl);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Yc(e){const t=Ve(pl);if(!t)throw new Error("[Vuetify] Could not find injected layout");const n=e.id??`layout-item-${ht()}`,c=rt("useLayoutItem");Ke(xf,{id:n});const a=$(!1);sd(()=>a.value=!0),ld(()=>a.value=!1);const{layoutItemStyles:l,layoutItemScrimStyles:s}=t.register(c,{...e,active:y(()=>a.value?!1:e.active.value),id:n});return pt(()=>t.unregister(n)),{layoutItemStyles:l,layoutRect:t.layoutRect,layoutItemScrimStyles:s}}const L2=(e,t,n,c)=>{let a={top:0,left:0,right:0,bottom:0};const l=[{id:"",layer:{...a}}];for(const s of e){const i=t.get(s),r=n.get(s),u=c.get(s);if(!i||!r||!u)continue;const o={...a,[i.value]:parseInt(a[i.value],10)+(u.value?parseInt(r.value,10):0)};l.push({id:s,layer:o}),a=o}return l};function jf(e){const t=Ve(pl,null),n=y(()=>t?t.rootZIndex.value-100:lu),c=$([]),a=st(new Map),l=st(new Map),s=st(new Map),i=st(new Map),r=st(new Map),{resizeRef:u,contentRect:o}=sn(),d=y(()=>{const I=new Map,E=e.overlaps??[];for(const k of E.filter(x=>x.includes(":"))){const[x,q]=k.split(":");if(!c.value.includes(x)||!c.value.includes(q))continue;const V=a.get(x),w=a.get(q),M=l.get(x),N=l.get(q);!V||!w||!M||!N||(I.set(q,{position:V.value,amount:parseInt(M.value,10)}),I.set(x,{position:w.value,amount:-parseInt(N.value,10)}))}return I}),f=y(()=>{const I=[...new Set([...s.values()].map(k=>k.value))].sort((k,x)=>k-x),E=[];for(const k of I){const x=c.value.filter(q=>{var V;return((V=s.get(q))==null?void 0:V.value)===k});E.push(...x)}return L2(E,a,l,i)}),m=y(()=>!Array.from(r.values()).some(I=>I.value)),h=y(()=>f.value[f.value.length-1].layer),g=y(()=>({"--v-layout-left":ie(h.value.left),"--v-layout-right":ie(h.value.right),"--v-layout-top":ie(h.value.top),"--v-layout-bottom":ie(h.value.bottom),...m.value?void 0:{transition:"none"}})),S=y(()=>f.value.slice(1).map((I,E)=>{let{id:k}=I;const{layer:x}=f.value[E],q=l.get(k),V=a.get(k);return{id:k,...x,size:Number(q.value),position:V.value}})),b=I=>S.value.find(E=>E.id===I),C=rt("createLayout"),p=$(!1);mt(()=>{p.value=!0}),Ke(pl,{register:(I,E)=>{let{id:k,order:x,position:q,layoutSize:V,elementSize:w,active:M,disableTransitions:N,absolute:Z}=E;s.set(k,x),a.set(k,q),l.set(k,V),i.set(k,M),N&&r.set(k,N);const H=ga(xf,C==null?void 0:C.vnode).indexOf(I);H>-1?c.value.splice(H,0,k):c.value.push(k);const D=y(()=>S.value.findIndex(z=>z.id===k)),J=y(()=>n.value+f.value.length*2-D.value*2),R=y(()=>{const z=q.value==="left"||q.value==="right",fe=q.value==="right",ue=q.value==="bottom",B={[q.value]:0,zIndex:J.value,transform:`translate${z?"X":"Y"}(${(M.value?0:-110)*(fe||ue?-1:1)}%)`,position:Z.value||n.value!==lu?"absolute":"fixed",...m.value?void 0:{transition:"none"}};if(!p.value)return B;const T=S.value[D.value];if(!T)throw new Error(`[Vuetify] Could not find layout item "${k}"`);const O=d.value.get(k);return O&&(T[O.position]+=O.amount),{...B,height:z?`calc(100% - ${T.top}px - ${T.bottom}px)`:w.value?`${w.value}px`:void 0,left:fe?void 0:`${T.left}px`,right:fe?`${T.right}px`:void 0,top:q.value!=="bottom"?`${T.top}px`:void 0,bottom:q.value!=="top"?`${T.bottom}px`:void 0,width:z?w.value?`${w.value}px`:void 0:`calc(100% - ${T.left}px - ${T.right}px)`}}),K=y(()=>({zIndex:J.value-1}));return{layoutItemStyles:R,layoutItemScrimStyles:K,zIndex:J}},unregister:I=>{s.delete(I),a.delete(I),l.delete(I),i.delete(I),r.delete(I),c.value=c.value.filter(E=>E!==I)},mainRect:h,mainStyles:g,getLayoutItem:b,items:S,layoutRect:o,rootZIndex:n});const P=y(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),j=y(()=>({zIndex:n.value,position:t?"relative":void 0,overflow:t?"hidden":void 0}));return{layoutClasses:P,layoutStyles:j,getLayoutItem:b,items:S,layoutRect:o,layoutRef:u}}function qf(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:t,...n}=e,c=pn(t,n),{aliases:a={},components:l={},directives:s={}}=c,i=Rb(c.defaults),r=C2(c.display,c.ssr),u=R2(c.theme),o=q2(c.icons),d=Gb(c.locale),f=k2(c.date);return{install:h=>{for(const g in s)h.directive(g,s[g]);for(const g in l)h.component(g,l[g]);for(const g in a)h.component(g,Mt({...a[g],name:g,aliasName:a[g].name}));if(u.install(h),h.provide(qa,i),h.provide(Ys,r),h.provide(Ia,u),h.provide(Gs,o),h.provide(Lc,d),h.provide(Uo,f),Xe&&c.ssr)if(h.$nuxt)h.$nuxt.hook("app:suspense:resolve",()=>{r.update()});else{const{mount:g}=h;h.mount=function(){const S=g(...arguments);return Oe(()=>r.update()),h.mount=g,S}}ht.reset(),h.mixin({computed:{$vuetify(){return st({defaults:xc.call(this,qa),display:xc.call(this,Ys),theme:xc.call(this,Ia),icons:xc.call(this,Gs),locale:xc.call(this,Lc),date:xc.call(this,Uo)})}}})},defaults:i,display:r,theme:u,icons:o,locale:d,date:f}}const F2="3.2.2";qf.version=F2;function xc(e){var c,a;const t=this.$,n=((c=t.parent)==null?void 0:c.provides)??((a=t.vnode.appContext)==null?void 0:a.provides);if(n&&e in n)return n[e]}const N2=W()({name:"VApp",props:{...ne(),...wf({fullHeight:!0}),...Ie()},setup(e,t){let{slots:n}=t;const c=Pe(e),{layoutClasses:a,layoutStyles:l,getLayoutItem:s,items:i,layoutRef:r}=jf(e),{rtlClasses:u}=wn();return X(()=>{var o;return v("div",{ref:r,class:["v-application",c.themeClasses.value,a.value,u.value,e.class],style:[l.value,e.style]},[v("div",{class:"v-application__wrap"},[(o=n.default)==null?void 0:o.call(n)])])}),{getLayoutItem:s,items:i,theme:c}}});const $e=W(!1)({name:"VDefaultsProvider",props:{defaults:Object,disabled:Boolean,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,t){let{slots:n}=t;const{defaults:c,disabled:a,reset:l,root:s,scoped:i}=Ii(e);return Je(c,{reset:l,root:s,scoped:i,disabled:a}),()=>{var r;return(r=n.default)==null?void 0:r.call(n)}}});function It(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"center center",n=arguments.length>2?arguments[2]:void 0;return W()({name:e,props:{disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:n},origin:{type:String,default:t}},setup(c,a){let{slots:l}=a;const s={onBeforeEnter(i){i.style.transformOrigin=c.origin},onLeave(i){if(c.leaveAbsolute){const{offsetTop:r,offsetLeft:u,offsetWidth:o,offsetHeight:d}=i;i._transitionInitialStyles={position:i.style.position,top:i.style.top,left:i.style.left,width:i.style.width,height:i.style.height},i.style.position="absolute",i.style.top=`${r}px`,i.style.left=`${u}px`,i.style.width=`${o}px`,i.style.height=`${d}px`}c.hideOnLeave&&i.style.setProperty("display","none","important")},onAfterLeave(i){if(c.leaveAbsolute&&(i!=null&&i._transitionInitialStyles)){const{position:r,top:u,left:o,width:d,height:f}=i._transitionInitialStyles;delete i._transitionInitialStyles,i.style.position=r||"",i.style.top=u||"",i.style.left=o||"",i.style.width=d||"",i.style.height=f||""}}};return()=>{const i=c.group?Ag:ln;return rn(i,{name:c.disabled?"":e,css:!c.disabled,...c.group?void 0:{mode:c.mode},...c.disabled?{}:s},l.default)}}})}function Vf(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return W()({name:e,props:{mode:{type:String,default:n},disabled:Boolean},setup(c,a){let{slots:l}=a;return()=>rn(ln,{name:c.disabled?"":e,css:!c.disabled,...c.disabled?{}:t},l.default)}})}function If(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",c=$t(`offset-${n}`);return{onBeforeEnter(s){s._parent=s.parentNode,s._initialStyle={transition:s.style.transition,overflow:s.style.overflow,[n]:s.style[n]}},onEnter(s){const i=s._initialStyle;s.style.setProperty("transition","none","important"),s.style.overflow="hidden";const r=`${s[c]}px`;s.style[n]="0",s.offsetHeight,s.style.transition=i.transition,e&&s._parent&&s._parent.classList.add(e),requestAnimationFrame(()=>{s.style[n]=r})},onAfterEnter:l,onEnterCancelled:l,onLeave(s){s._initialStyle={transition:"",overflow:s.style.overflow,[n]:s.style[n]},s.style.overflow="hidden",s.style[n]=`${s[c]}px`,s.offsetHeight,requestAnimationFrame(()=>s.style[n]="0")},onAfterLeave:a,onLeaveCancelled:a};function a(s){e&&s._parent&&s._parent.classList.remove(e),l(s)}function l(s){const i=s._initialStyle[n];s.style.overflow=s._initialStyle.overflow,i!=null&&(s.style[n]=i),delete s._initialStyle}}const Ol=W()({name:"VDialogTransition",props:{target:Object},setup(e,t){let{slots:n}=t;const c={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,l){var f;await new Promise(m=>requestAnimationFrame(m)),await new Promise(m=>requestAnimationFrame(m)),a.style.visibility="";const{x:s,y:i,sx:r,sy:u,speed:o}=iu(e.target,a),d=sc(a,[{transform:`translate(${s}px, ${i}px) scale(${r}, ${u})`,opacity:0},{}],{duration:225*o,easing:Fb});(f=su(a))==null||f.forEach(m=>{sc(m,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*o,easing:Va})}),d.finished.then(()=>l())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,l){var f;await new Promise(m=>requestAnimationFrame(m));const{x:s,y:i,sx:r,sy:u,speed:o}=iu(e.target,a);sc(a,[{},{transform:`translate(${s}px, ${i}px) scale(${r}, ${u})`,opacity:0}],{duration:125*o,easing:Nb}).finished.then(()=>l()),(f=su(a))==null||f.forEach(m=>{sc(m,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*o,easing:Va})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?v(ln,le({name:"dialog-transition"},c,{css:!1}),n):v(ln,{name:"dialog-transition"},n)}});function su(e){var n;const t=(n=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:n.children;return t&&[...t]}function iu(e,t){const n=e.getBoundingClientRect(),c=Gi(t),[a,l]=getComputedStyle(t).transformOrigin.split(" ").map(b=>parseFloat(b)),[s,i]=getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");let r=n.left+n.width/2;s==="left"||i==="left"?r-=n.width/2:(s==="right"||i==="right")&&(r+=n.width/2);let u=n.top+n.height/2;s==="top"||i==="top"?u-=n.height/2:(s==="bottom"||i==="bottom")&&(u+=n.height/2);const o=n.width/c.width,d=n.height/c.height,f=Math.max(1,o,d),m=o/f||0,h=d/f||0,g=c.width*c.height/(window.innerWidth*window.innerHeight),S=g>.12?Math.min(1.5,(g-.12)*10+1):1;return{x:r-(a+c.left),y:u-(l+c.top),sx:m,sy:h,speed:S}}const D2=It("fab-transition","center center","out-in"),z2=It("dialog-bottom-transition"),H2=It("dialog-top-transition"),Zs=It("fade-transition"),Ef=It("scale-transition"),U2=It("scroll-x-transition"),W2=It("scroll-x-reverse-transition"),K2=It("scroll-y-transition"),Y2=It("scroll-y-reverse-transition"),G2=It("slide-x-transition"),X2=It("slide-x-reverse-transition"),cr=It("slide-y-transition"),Z2=It("slide-y-reverse-transition"),Ll=Vf("expand-transition",If()),ar=Vf("expand-x-transition",If("",!0));const Rt=ye({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Ot(e){return{dimensionStyles:y(()=>({height:ie(e.height),maxHeight:ie(e.maxHeight),maxWidth:ie(e.maxWidth),minHeight:ie(e.minHeight),minWidth:ie(e.minWidth),width:ie(e.width)}))}}function Q2(e){return{aspectStyles:y(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const Af=W()({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...ne(),...Rt()},setup(e,t){let{slots:n}=t;const{aspectStyles:c}=Q2(e),{dimensionStyles:a}=Ot(e);return X(()=>{var l;return v("div",{class:["v-responsive",e.class],style:[a.value,e.style]},[v("div",{class:"v-responsive__sizer",style:c.value},null),(l=n.additional)==null?void 0:l.call(n),n.default&&v("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}});function J2(e,t){if(!er)return;const n=t.modifiers||{},c=t.value,{handler:a,options:l}=typeof c=="object"?c:{handler:c,options:{}},s=new IntersectionObserver(function(){var d;let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;const u=(d=e._observe)==null?void 0:d[t.instance.$.uid];if(!u)return;const o=i.some(f=>f.isIntersecting);a&&(!n.quiet||u.init)&&(!n.once||o||u.init)&&a(o,i,r),o&&n.once?Pf(e,t):u.init=!0},l);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:s},s.observe(e)}function Pf(e,t){var c;const n=(c=e._observe)==null?void 0:c[t.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const Ba={mounted:J2,unmounted:Pf},jn=ye({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),Ht=(e,t)=>{let{slots:n}=t;const{transition:c,...a}=e,{component:l=ln,...s}=typeof c=="object"?c:{};return rn(l,le(typeof c=="string"?{name:c}:s,a),n)},Gc=W()({name:"VImg",directives:{intersect:Ba},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...ne(),...jn()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:n,slots:c}=t;const a=$(""),l=$(),s=$(e.eager?"loading":"idle"),i=$(),r=$(),u=y(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),o=y(()=>u.value.aspect||i.value/r.value||0);ae(()=>e.src,()=>{d(s.value!=="idle")}),ae(o,(k,x)=>{!k&&x&&l.value&&S(l.value)}),El(()=>d());function d(k){if(!(e.eager&&k)&&!(er&&!k&&!e.eager)){if(s.value="loading",u.value.lazySrc){const x=new Image;x.src=u.value.lazySrc,S(x,null)}u.value.src&&Oe(()=>{var x,q;if(n("loadstart",((x=l.value)==null?void 0:x.currentSrc)||u.value.src),(q=l.value)!=null&&q.complete){if(l.value.naturalWidth||m(),s.value==="error")return;o.value||S(l.value,null),f()}else o.value||S(l.value),h()})}}function f(){var k;h(),s.value="loaded",n("load",((k=l.value)==null?void 0:k.currentSrc)||u.value.src)}function m(){var k;s.value="error",n("error",((k=l.value)==null?void 0:k.currentSrc)||u.value.src)}function h(){const k=l.value;k&&(a.value=k.currentSrc||k.src)}let g=-1;function S(k){let x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const q=()=>{clearTimeout(g);const{naturalHeight:V,naturalWidth:w}=k;V||w?(i.value=w,r.value=V):!k.complete&&s.value==="loading"&&x!=null?g=window.setTimeout(q,x):(k.currentSrc.endsWith(".svg")||k.currentSrc.startsWith("data:image/svg+xml"))&&(i.value=1,r.value=1)};q()}const b=y(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),C=()=>{var q;if(!u.value.src||s.value==="idle")return null;const k=v("img",{class:["v-img__img",b.value],src:u.value.src,srcset:u.value.srcset,alt:e.alt,sizes:e.sizes,ref:l,onLoad:f,onError:m},null),x=(q=c.sources)==null?void 0:q.call(c);return v(Ht,{transition:e.transition,appear:!0},{default:()=>[He(x?v("picture",{class:"v-img__picture"},[x,k]):k,[[on,s.value==="loaded"]])]})},p=()=>v(Ht,{transition:e.transition},{default:()=>[u.value.lazySrc&&s.value!=="loaded"&&v("img",{class:["v-img__img","v-img__img--preload",b.value],src:u.value.lazySrc,alt:e.alt},null)]}),P=()=>c.placeholder?v(Ht,{transition:e.transition,appear:!0},{default:()=>[(s.value==="loading"||s.value==="error"&&!c.error)&&v("div",{class:"v-img__placeholder"},[c.placeholder()])]}):null,j=()=>c.error?v(Ht,{transition:e.transition,appear:!0},{default:()=>[s.value==="error"&&v("div",{class:"v-img__error"},[c.error()])]}):null,I=()=>e.gradient?v("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,E=$(!1);{const k=ae(o,x=>{x&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{E.value=!0})}),k())})}return X(()=>He(v(Af,{class:["v-img",{"v-img--booting":!E.value},e.class],style:[{width:ie(e.width==="auto"?i.value:e.width)},e.style],aspectRatio:o.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>v(me,null,[v(C,null,null),v(p,null,null),v(I,null,null),v(P,null,null),v(j,null,null)]),default:c.default}),[[Ct("intersect"),{handler:d,options:e.options},null,{once:!0}]])),{currentSrc:a,image:l,state:s,naturalWidth:i,naturalHeight:r}}}),_e=ye({tag:{type:String,default:"div"}},"tag"),Tf=ye({text:String,...ne(),..._e()},"v-toolbar-title"),lr=W()({name:"VToolbarTitle",props:Tf(),setup(e,t){let{slots:n}=t;return X(()=>{const c=!!(n.default||n.text||e.text);return v(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var a;return[c&&v("div",{class:"v-toolbar-title__placeholder"},[n.text?n.text():e.text,(a=n.default)==null?void 0:a.call(n)])]}})}),{}}}),Et=ye({border:[Boolean,Number,String]},"border");function Lt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xn();return{borderClasses:y(()=>{const c=We(e)?e.value:e.border,a=[];if(c===!0||c==="")a.push(`${t}--border`);else if(typeof c=="string"||c===0)for(const l of String(c).split(" "))a.push(`border-${l}`);return a})}}const tt=ye({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function ot(e){return{elevationClasses:y(()=>{const n=We(e)?e.value:e.elevation,c=[];return n==null||c.push(`elevation-${n}`),c})}}const De=ye({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function Ue(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xn();return{roundedClasses:y(()=>{const c=We(e)?e.value:e.rounded,a=[];if(c===!0||c==="")a.push(`${t}--rounded`);else if(typeof c=="string"||c===0)for(const l of String(c).split(" "))a.push(`rounded-${l}`);return a})}}function sr(e){return Wi(()=>{const t=[],n={};return e.value.background&&(No(e.value.background)?n.backgroundColor=e.value.background:t.push(`bg-${e.value.background}`)),e.value.text&&(No(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}})}function vt(e,t){const n=y(()=>({text:We(e)?e.value:t?e[t]:null})),{colorClasses:c,colorStyles:a}=sr(n);return{textColorClasses:c,textColorStyles:a}}function Ze(e,t){const n=y(()=>({background:We(e)?e.value:t?e[t]:null})),{colorClasses:c,colorStyles:a}=sr(n);return{backgroundColorClasses:c,backgroundColorStyles:a}}const e0=[null,"prominent","default","comfortable","compact"],$f=ye({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>e0.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Et(),...ne(),...tt(),...De(),..._e({tag:"header"}),...Ie()},"v-toolbar"),Qs=W()({name:"VToolbar",props:$f(),setup(e,t){var f;let{slots:n}=t;const{backgroundColorClasses:c,backgroundColorStyles:a}=Ze(Y(e,"color")),{borderClasses:l}=Lt(e),{elevationClasses:s}=ot(e),{roundedClasses:i}=Ue(e),{themeClasses:r}=Pe(e),u=$(!!(e.extended||(f=n.extension)!=null&&f.call(n))),o=y(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),d=y(()=>u.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Je({VBtn:{variant:"text"}}),X(()=>{var S;const m=!!(e.title||n.title),h=!!(n.image||e.image),g=(S=n.extension)==null?void 0:S.call(n);return u.value=!!(e.extended||g),v(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},c.value,l.value,s.value,i.value,r.value,e.class],style:[a.value,e.style]},{default:()=>[h&&v("div",{key:"image",class:"v-toolbar__image"},[n.image?v($e,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},n.image):v(Gc,{key:"image-img",cover:!0,src:e.image},null)]),v($e,{defaults:{VTabs:{height:ie(o.value)}}},{default:()=>{var b,C,p;return[v("div",{class:"v-toolbar__content",style:{height:ie(o.value)}},[n.prepend&&v("div",{class:"v-toolbar__prepend"},[(b=n.prepend)==null?void 0:b.call(n)]),m&&v(lr,{key:"title",text:e.title},{text:n.title}),(C=n.default)==null?void 0:C.call(n),n.append&&v("div",{class:"v-toolbar__append"},[(p=n.append)==null?void 0:p.call(n)])])]}}),v($e,{defaults:{VTabs:{height:ie(d.value)}}},{default:()=>[v(Ll,null,{default:()=>[u.value&&v("div",{class:"v-toolbar__extension",style:{height:ie(d.value)}},[g])]})]})]})}),{contentHeight:o,extensionHeight:d}}}),t0=ye({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function n0(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:n}=t;let c=0;const a=$(null),l=$(0),s=$(0),i=$(0),r=$(!1),u=$(!1),o=y(()=>Number(e.scrollThreshold)),d=y(()=>ft((o.value-l.value)/o.value||0)),f=()=>{const m=a.value;!m||n&&!n.value||(c=l.value,l.value="window"in m?m.pageYOffset:m.scrollTop,u.value=l.value<c,i.value=Math.abs(l.value-o.value))};return ae(u,()=>{s.value=s.value||l.value}),ae(r,()=>{s.value=0}),mt(()=>{ae(()=>e.scrollTarget,m=>{var g;const h=m?document.querySelector(m):window;if(!h){Ln(`Unable to locate element with identifier ${m}`,Pl());return}h!==a.value&&((g=a.value)==null||g.removeEventListener("scroll",f),a.value=h,a.value.addEventListener("scroll",f,{passive:!0}))},{immediate:!0})}),pt(()=>{var m;(m=a.value)==null||m.removeEventListener("scroll",f)}),n&&ae(n,f,{immediate:!0}),{scrollThreshold:o,currentScroll:l,currentThreshold:i,isScrollActive:r,scrollRatio:d,isScrollingUp:u,savedScroll:s}}function gc(){const e=$(!1);return mt(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:y(()=>e.value?void 0:{transition:"none !important"}),isBooted:$a(e)}}const c0=W()({name:"VAppBar",props:{scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...$f(),...Kc(),...t0(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const c=$(),a=Ce(e,"modelValue"),l=y(()=>{var p;const C=new Set(((p=e.scrollBehavior)==null?void 0:p.split(" "))??[]);return{hide:C.has("hide"),inverted:C.has("inverted"),collapse:C.has("collapse"),elevate:C.has("elevate"),fadeImage:C.has("fade-image")}}),s=y(()=>{const C=l.value;return C.hide||C.inverted||C.collapse||C.elevate||C.fadeImage||!a.value}),{currentScroll:i,scrollThreshold:r,isScrollingUp:u,scrollRatio:o}=n0(e,{canScroll:s}),d=y(()=>e.collapse||l.value.collapse&&(l.value.inverted?o.value>0:o.value===0)),f=y(()=>e.flat||l.value.elevate&&(l.value.inverted?i.value>0:i.value===0)),m=y(()=>l.value.fadeImage?l.value.inverted?1-o.value:o.value:void 0),h=y(()=>{var P,j;if(l.value.hide&&l.value.inverted)return 0;const C=((P=c.value)==null?void 0:P.contentHeight)??0,p=((j=c.value)==null?void 0:j.extensionHeight)??0;return C+p});function g(){l.value.hide?l.value.inverted?a.value=i.value>r.value:a.value=u.value||i.value<r.value:a.value=!0}ae(i,g,{immediate:!0}),ae(l,g);const{ssrBootStyles:S}=gc(),{layoutItemStyles:b}=Yc({id:e.name,order:y(()=>parseInt(e.order,10)),position:Y(e,"location"),layoutSize:h,elementSize:$(void 0),active:a,absolute:Y(e,"absolute")});return X(()=>{const[C]=Qs.filterProps(e);return v(Qs,le({ref:c,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...b.value,"--v-toolbar-image-opacity":m.value,height:void 0,...S.value},e.style]},C,{collapse:d.value,flat:f.value}),n)}),{}}});const a0=[null,"default","comfortable","compact"],nt=ye({density:{type:String,default:"default",validator:e=>a0.includes(e)}},"density");function gt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xn();return{densityClasses:y(()=>`${t}--density-${e.density}`)}}const l0=["elevated","flat","tonal","outlined","text","plain"];function yc(e,t){return v(me,null,[e&&v("span",{key:"overlay",class:`${t}__overlay`},null),v("span",{key:"underlay",class:`${t}__underlay`},null)])}const Ft=ye({color:String,variant:{type:String,default:"elevated",validator:e=>l0.includes(e)}},"variant");function bc(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xn();const n=y(()=>{const{variant:l}=dt(e);return`${t}--variant-${l}`}),{colorClasses:c,colorStyles:a}=sr(y(()=>{const{variant:l,color:s}=dt(e);return{[["elevated","flat"].includes(l)?"background":"text"]:s}}));return{colorClasses:c,colorStyles:a,variantClasses:n}}const Mf=ye({divided:Boolean,...Et(),...ne(),...nt(),...tt(),...De(),..._e(),...Ie(),...Ft()},"v-btn-group"),Js=W()({name:"VBtnGroup",props:Mf(),setup(e,t){let{slots:n}=t;const{themeClasses:c}=Pe(e),{densityClasses:a}=gt(e),{borderClasses:l}=Lt(e),{elevationClasses:s}=ot(e),{roundedClasses:i}=Ue(e);Je({VBtn:{height:"auto",color:Y(e,"color"),density:Y(e,"density"),flat:!0,variant:Y(e,"variant")}}),X(()=>v(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},c.value,l.value,a.value,s.value,i.value,e.class],style:e.style},n))}}),Xc=ye({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Zc=ye({value:null,disabled:Boolean,selectedClass:String},"group-item");function Qc(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const c=rt("useGroupItem");if(!c)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const a=ht();Ke(Symbol.for(`${t.description}:id`),a);const l=Ve(t,null);if(!l){if(!n)return l;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const s=Y(e,"value"),i=y(()=>l.disabled.value||e.disabled);l.register({id:a,value:s,disabled:i},c),pt(()=>{l.unregister(a)});const r=y(()=>l.isSelected(a)),u=y(()=>r.value&&[l.selectedClass.value,e.selectedClass]);return ae(r,o=>{c.emit("group:selected",{value:o})}),{id:a,isSelected:r,toggle:()=>l.select(a,!r.value),select:o=>l.select(a,o),selectedClass:u,value:s,disabled:i,group:l}}function pc(e,t){let n=!1;const c=st([]),a=Ce(e,"modelValue",[],f=>f==null?[]:Bf(c,Tt(f)),f=>{const m=i0(c,f);return e.multiple?m:m[0]}),l=rt("useGroup");function s(f,m){const h=f,g=Symbol.for(`${t.description}:id`),b=ga(g,l==null?void 0:l.vnode).indexOf(m);b>-1?c.splice(b,0,h):c.push(h)}function i(f){if(n)return;r();const m=c.findIndex(h=>h.id===f);c.splice(m,1)}function r(){const f=c.find(m=>!m.disabled);f&&e.mandatory==="force"&&!a.value.length&&(a.value=[f.id])}mt(()=>{r()}),pt(()=>{n=!0});function u(f,m){const h=c.find(g=>g.id===f);if(!(m&&(h!=null&&h.disabled)))if(e.multiple){const g=a.value.slice(),S=g.findIndex(C=>C===f),b=~S;if(m=m??!b,b&&e.mandatory&&g.length<=1||!b&&e.max!=null&&g.length+1>e.max)return;S<0&&m?g.push(f):S>=0&&!m&&g.splice(S,1),a.value=g}else{const g=a.value.includes(f);if(e.mandatory&&g)return;a.value=m??!g?[f]:[]}}function o(f){if(e.multiple&&Ln('This method is not supported when using "multiple" prop'),a.value.length){const m=a.value[0],h=c.findIndex(b=>b.id===m);let g=(h+f)%c.length,S=c[g];for(;S.disabled&&g!==h;)g=(g+f)%c.length,S=c[g];if(S.disabled)return;a.value=[c[g].id]}else{const m=c.find(h=>!h.disabled);m&&(a.value=[m.id])}}const d={register:s,unregister:i,selected:a,select:u,disabled:Y(e,"disabled"),prev:()=>o(c.length-1),next:()=>o(1),isSelected:f=>a.value.includes(f),selectedClass:y(()=>e.selectedClass),items:y(()=>c),getItemIndex:f=>s0(c,f)};return Ke(t,d),d}function s0(e,t){const n=Bf(e,[t]);return n.length?e.findIndex(c=>c.id===n[0]):-1}function Bf(e,t){const n=[];for(let c=0;c<e.length;c++){const a=e[c];a.value!=null?t.find(l=>vc(l,a.value))!=null&&n.push(a.id):t.includes(c)&&n.push(a.id)}return n}function i0(e,t){const n=[];for(let c=0;c<e.length;c++){const a=e[c];t.includes(a.id)&&n.push(a.value!=null?a.value:c)}return n}const ir=Symbol.for("vuetify:v-btn-toggle"),r0=W()({name:"VBtnToggle",props:{...Mf(),...Xc()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const{isSelected:c,next:a,prev:l,select:s,selected:i}=pc(e,ir);return X(()=>{const[r]=Js.filterProps(e);return v(Js,le({class:["v-btn-toggle",e.class]},r,{style:e.style}),{default:()=>{var u;return[(u=n.default)==null?void 0:u.call(n,{isSelected:c,next:a,prev:l,select:s,selected:i})]}})}),{next:a,prev:l,select:s}}});const o0=["x-small","small","default","large","x-large"],qn=ye({size:{type:[String,Number],default:"default"}},"size");function Jc(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xn();return Wi(()=>{let n,c;return gl(o0,e.size)?n=`${t}--size-${e.size}`:e.size&&(c={width:ie(e.size),height:ie(e.size)}),{sizeClasses:n,sizeStyles:c}})}const u0=ye({color:String,start:Boolean,end:Boolean,icon:pe,...ne(),...qn(),..._e({tag:"i"}),...Ie()},"v-icon"),ze=W()({name:"VIcon",props:u0(),setup(e,t){let{attrs:n,slots:c}=t;const a=$(),{themeClasses:l}=Pe(e),{iconData:s}=V2(y(()=>a.value||e.icon)),{sizeClasses:i}=Jc(e),{textColorClasses:r,textColorStyles:u}=vt(Y(e,"color"));return X(()=>{var d,f;const o=(d=c.default)==null?void 0:d.call(c);return o&&(a.value=(f=o.filter(m=>m.type===Ma&&m.children&&typeof m.children=="string")[0])==null?void 0:f.children),v(s.value.component,{tag:e.tag,icon:s.value.icon,class:["v-icon","notranslate",l.value,i.value,r.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[i.value?void 0:{fontSize:ie(e.size),height:ie(e.size),width:ie(e.size)},u.value,e.style],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>[o]})}),{}}});function rr(e,t){const n=$(),c=$(!1);if(er){const a=new IntersectionObserver(l=>{e==null||e(l,a),c.value=!!l.find(s=>s.isIntersecting)},t);pt(()=>{a.disconnect()}),ae(n,(l,s)=>{s&&(a.unobserve(s),c.value=!1),l&&a.observe(l)},{flush:"post"})}return{intersectionRef:n,isIntersecting:c}}const or=W()({name:"VProgressCircular",props:{bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...ne(),...qn(),..._e({tag:"div"}),...Ie()},setup(e,t){let{slots:n}=t;const c=20,a=2*Math.PI*c,l=$(),{themeClasses:s}=Pe(e),{sizeClasses:i,sizeStyles:r}=Jc(e),{textColorClasses:u,textColorStyles:o}=vt(Y(e,"color")),{textColorClasses:d,textColorStyles:f}=vt(Y(e,"bgColor")),{intersectionRef:m,isIntersecting:h}=rr(),{resizeRef:g,contentRect:S}=sn(),b=y(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),C=y(()=>Number(e.width)),p=y(()=>r.value?Number(e.size):S.value?S.value.width:Math.max(C.value,32)),P=y(()=>c/(1-C.value/p.value)*2),j=y(()=>C.value/p.value*P.value),I=y(()=>ie((100-b.value)/100*a));return Kt(()=>{m.value=l.value,g.value=l.value}),X(()=>v(e.tag,{ref:l,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":h.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},s.value,i.value,u.value,e.class],style:[r.value,o.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:b.value},{default:()=>[v("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${P.value} ${P.value}`},[v("circle",{class:["v-progress-circular__underlay",d.value],style:f.value,fill:"transparent",cx:"50%",cy:"50%",r:c,"stroke-width":j.value,"stroke-dasharray":a,"stroke-dashoffset":0},null),v("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:c,"stroke-width":j.value,"stroke-dasharray":a,"stroke-dashoffset":I.value},null)]),n.default&&v("div",{class:"v-progress-circular__content"},[n.default({value:b.value})])]})),{}}});const ei=Symbol("rippleStop"),d0=80;function ru(e,t){e.style.transform=t,e.style.webkitTransform=t}function ti(e){return e.constructor.name==="TouchEvent"}function Rf(e){return e.constructor.name==="KeyboardEvent"}const f0=function(e,t){var d;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},c=0,a=0;if(!Rf(e)){const f=t.getBoundingClientRect(),m=ti(e)?e.touches[e.touches.length-1]:e;c=m.clientX-f.left,a=m.clientY-f.top}let l=0,s=.3;(d=t._ripple)!=null&&d.circle?(s=.15,l=t.clientWidth/2,l=n.center?l:l+Math.sqrt((c-l)**2+(a-l)**2)/4):l=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const i=`${(t.clientWidth-l*2)/2}px`,r=`${(t.clientHeight-l*2)/2}px`,u=n.center?i:`${c-l}px`,o=n.center?r:`${a-l}px`;return{radius:l,scale:s,x:u,y:o,centerX:i,centerY:r}},kl={show(e,t){var m;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((m=t==null?void 0:t._ripple)!=null&&m.enabled))return;const c=document.createElement("span"),a=document.createElement("span");c.appendChild(a),c.className="v-ripple__container",n.class&&(c.className+=` ${n.class}`);const{radius:l,scale:s,x:i,y:r,centerX:u,centerY:o}=f0(e,t,n),d=`${l*2}px`;a.className="v-ripple__animation",a.style.width=d,a.style.height=d,t.appendChild(c);const f=window.getComputedStyle(t);f&&f.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),a.classList.add("v-ripple__animation--enter"),a.classList.add("v-ripple__animation--visible"),ru(a,`translate(${i}, ${r}) scale3d(${s},${s},${s})`),a.dataset.activated=String(performance.now()),setTimeout(()=>{a.classList.remove("v-ripple__animation--enter"),a.classList.add("v-ripple__animation--in"),ru(a,`translate(${u}, ${o}) scale3d(1,1,1)`)},0)},hide(e){var l;if(!((l=e==null?void 0:e._ripple)!=null&&l.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const c=performance.now()-Number(n.dataset.activated),a=Math.max(250-c,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var i;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((i=n.parentNode)==null?void 0:i.parentNode)===e&&e.removeChild(n.parentNode)},300)},a)}};function Of(e){return typeof e>"u"||!!e}function Ea(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[ei])){if(e[ei]=!0,ti(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||Rf(e),n._ripple.class&&(t.class=n._ripple.class),ti(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{kl.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var c;(c=n==null?void 0:n._ripple)!=null&&c.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},d0)}else kl.show(e,n,t)}}function ou(e){e[ei]=!0}function jt(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{jt(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),kl.hide(t)}}function Lf(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let Aa=!1;function Ff(e){!Aa&&(e.keyCode===To.enter||e.keyCode===To.space)&&(Aa=!0,Ea(e))}function Nf(e){Aa=!1,jt(e)}function Df(e){Aa&&(Aa=!1,jt(e))}function zf(e,t,n){const{value:c,modifiers:a}=t,l=Of(c);if(l||kl.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=l,e._ripple.centered=a.center,e._ripple.circle=a.circle,Ns(c)&&c.class&&(e._ripple.class=c.class),l&&!n){if(a.stop){e.addEventListener("touchstart",ou,{passive:!0}),e.addEventListener("mousedown",ou);return}e.addEventListener("touchstart",Ea,{passive:!0}),e.addEventListener("touchend",jt,{passive:!0}),e.addEventListener("touchmove",Lf,{passive:!0}),e.addEventListener("touchcancel",jt),e.addEventListener("mousedown",Ea),e.addEventListener("mouseup",jt),e.addEventListener("mouseleave",jt),e.addEventListener("keydown",Ff),e.addEventListener("keyup",Nf),e.addEventListener("blur",Df),e.addEventListener("dragstart",jt,{passive:!0})}else!l&&n&&Hf(e)}function Hf(e){e.removeEventListener("mousedown",Ea),e.removeEventListener("touchstart",Ea),e.removeEventListener("touchend",jt),e.removeEventListener("touchmove",Lf),e.removeEventListener("touchcancel",jt),e.removeEventListener("mouseup",jt),e.removeEventListener("mouseleave",jt),e.removeEventListener("keydown",Ff),e.removeEventListener("keyup",Nf),e.removeEventListener("dragstart",jt),e.removeEventListener("blur",Df)}function v0(e,t){zf(e,t,!1)}function m0(e){delete e._ripple,Hf(e)}function h0(e,t){if(t.value===t.oldValue)return;const n=Of(t.oldValue);zf(e,t,n)}const Un={mounted:v0,unmounted:m0,updated:h0};const uu={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Wn=ye({location:String},"location");function Kn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:c}=wn();return{locationStyles:y(()=>{if(!e.location)return{};const{side:l,align:s}=zs(e.location.split(" ").length>1?e.location:`${e.location} center`,c.value);function i(u){return n?n(u):0}const r={};return l!=="center"&&(t?r[uu[l]]=`calc(100% - ${i(l)}px)`:r[l]=0),s!=="center"?t?r[uu[s]]=`calc(100% - ${i(s)}px)`:r[s]=0:(l==="center"?r.top=r.left="50%":r[{top:"left",bottom:"left",left:"top",right:"top"}[l]]="50%",r.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[l]),r})}}const ur=W()({name:"VProgressLinear",props:{absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...ne(),...Wn({location:"top"}),...De(),..._e(),...Ie()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const c=Ce(e,"modelValue"),{isRtl:a}=wn(),{themeClasses:l}=Pe(e),{locationStyles:s}=Kn(e),{textColorClasses:i,textColorStyles:r}=vt(e,"color"),{backgroundColorClasses:u,backgroundColorStyles:o}=Ze(y(()=>e.bgColor||e.color)),{backgroundColorClasses:d,backgroundColorStyles:f}=Ze(e,"color"),{roundedClasses:m}=Ue(e),{intersectionRef:h,isIntersecting:g}=rr(),S=y(()=>parseInt(e.max,10)),b=y(()=>parseInt(e.height,10)),C=y(()=>parseFloat(e.bufferValue)/S.value*100),p=y(()=>parseFloat(c.value)/S.value*100),P=y(()=>a.value!==e.reverse),j=y(()=>e.indeterminate?"fade-transition":"slide-x-transition"),I=y(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function E(k){if(!h.value)return;const{left:x,right:q,width:V}=h.value.getBoundingClientRect(),w=P.value?V-k.clientX+(q-V):k.clientX-x;c.value=Math.round(w/V*S.value)}return X(()=>v(e.tag,{ref:h,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&g.value,"v-progress-linear--reverse":P.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},m.value,l.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?ie(b.value):0,"--v-progress-linear-height":ie(b.value),...s.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:p.value,onClick:e.clickable&&E},{default:()=>[e.stream&&v("div",{key:"stream",class:["v-progress-linear__stream",i.value],style:{...r.value,[P.value?"left":"right"]:ie(-b.value),borderTop:`${ie(b.value/2)} dotted`,opacity:I.value,top:`calc(50% - ${ie(b.value/4)})`,width:ie(100-C.value,"%"),"--v-progress-linear-stream-to":ie(b.value*(P.value?1:-1))}},null),v("div",{class:["v-progress-linear__background",u.value],style:[o.value,{opacity:I.value,width:ie(e.stream?C.value:100,"%")}]},null),v(ln,{name:j.value},{default:()=>[e.indeterminate?v("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(k=>v("div",{key:k,class:["v-progress-linear__indeterminate",k,d.value],style:f.value},null))]):v("div",{class:["v-progress-linear__determinate",d.value],style:[f.value,{width:ie(p.value,"%")}]},null)]}),n.default&&v("div",{class:"v-progress-linear__content"},[n.default({value:p.value,buffer:C.value})])]})),{}}}),dr=ye({loading:[Boolean,String]},"loader");function Fl(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xn();return{loaderClasses:y(()=>({[`${t}--loading`]:e.loading}))}}function fr(e,t){var c;let{slots:n}=t;return v("div",{class:`${e.name}__loader`},[((c=n.default)==null?void 0:c.call(n,{color:e.color,isActive:e.active}))||v(ur,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const g0=["static","relative","fixed","absolute","sticky"],ea=ye({position:{type:String,validator:e=>g0.includes(e)}},"position");function ta(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xn();return{positionClasses:y(()=>e.position?`${t}--${e.position}`:void 0)}}function Uf(){var e,t;return(t=(e=rt("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function Ra(e,t){const n=Ih("RouterLink"),c=y(()=>!!(e.href||e.to)),a=y(()=>(c==null?void 0:c.value)||Ro(t,"click")||Ro(e,"click"));if(typeof n=="string")return{isLink:c,isClickable:a,href:Y(e,"href")};const l=e.to?n.useLink(e):void 0;return{isLink:c,isClickable:a,route:l==null?void 0:l.route,navigate:l==null?void 0:l.navigate,isActive:l&&y(()=>{var s,i;return e.exact?(s=l.isExactActive)==null?void 0:s.value:(i=l.isActive)==null?void 0:i.value}),href:y(()=>e.to?l==null?void 0:l.route.value.href:e.href)}}const Oa=ye({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let vs=!1;function y0(e,t){let n=!1,c,a;Xe&&(Oe(()=>{window.addEventListener("popstate",l),c=e==null?void 0:e.beforeEach((s,i,r)=>{vs?n?t(r):r():setTimeout(()=>n?t(r):r()),vs=!0}),a=e==null?void 0:e.afterEach(()=>{vs=!1})}),Vt(()=>{window.removeEventListener("popstate",l),c==null||c(),a==null||a()}));function l(s){var i;(i=s.state)!=null&&i.replaced||(n=!0,setTimeout(()=>n=!1))}}function b0(e,t){ae(()=>{var n;return(n=e.isActive)==null?void 0:n.value},n=>{e.isLink.value&&n&&t&&Oe(()=>{t(!0)})},{immediate:!0})}const vr=ye({active:{type:Boolean,default:void 0},symbol:{type:null,default:ir},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:pe,appendIcon:pe,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},text:String,...Et(),...ne(),...nt(),...Rt(),...tt(),...Zc(),...dr(),...Wn(),...ea(),...De(),...Oa(),...qn(),..._e({tag:"button"}),...Ie(),...Ft({variant:"elevated"})},"v-btn"),bt=W()({name:"VBtn",directives:{Ripple:Un},props:vr(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:n,slots:c}=t;const{themeClasses:a}=Pe(e),{borderClasses:l}=Lt(e),{colorClasses:s,colorStyles:i,variantClasses:r}=bc(e),{densityClasses:u}=gt(e),{dimensionStyles:o}=Ot(e),{elevationClasses:d}=ot(e),{loaderClasses:f}=Fl(e),{locationStyles:m}=Kn(e),{positionClasses:h}=ta(e),{roundedClasses:g}=Ue(e),{sizeClasses:S,sizeStyles:b}=Jc(e),C=Qc(e,e.symbol,!1),p=Ra(e,n),P=y(()=>{var x;return e.active!==void 0?e.active:p.isLink.value?(x=p.isActive)==null?void 0:x.value:C==null?void 0:C.isSelected.value}),j=y(()=>(C==null?void 0:C.disabled.value)||e.disabled),I=y(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),E=y(()=>{if(e.value!==void 0)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function k(x){var q;j.value||((q=p.navigate)==null||q.call(p,x),C==null||C.toggle())}return b0(p,C==null?void 0:C.select),X(()=>{var N,Z;const x=p.isLink.value?"a":e.tag,q=!!(e.prependIcon||c.prepend),V=!!(e.appendIcon||c.append),w=!!(e.icon&&e.icon!==!0),M=(C==null?void 0:C.isSelected.value)&&(!p.isLink.value||((N=p.isActive)==null?void 0:N.value))||!C||((Z=p.isActive)==null?void 0:Z.value);return He(v(x,{type:x==="a"?void 0:"button",class:["v-btn",C==null?void 0:C.selectedClass.value,{"v-btn--active":P.value,"v-btn--block":e.block,"v-btn--disabled":j.value,"v-btn--elevated":I.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},a.value,l.value,M?s.value:void 0,u.value,d.value,f.value,h.value,g.value,S.value,r.value,e.class],style:[M?i.value:void 0,o.value,m.value,b.value,e.style],disabled:j.value||void 0,href:p.href.value,onClick:k,value:E.value},{default:()=>{var F;return[yc(!0,"v-btn"),!e.icon&&q&&v("span",{key:"prepend",class:"v-btn__prepend"},[c.prepend?v($e,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},c.prepend):v(ze,{key:"prepend-icon",icon:e.prependIcon},null)]),v("span",{class:"v-btn__content","data-no-activator":""},[!c.default&&w?v(ze,{key:"content-icon",icon:e.icon},null):v($e,{key:"content-defaults",disabled:!w,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var H;return[((H=c.default)==null?void 0:H.call(c))??e.text]}})]),!e.icon&&V&&v("span",{key:"append",class:"v-btn__append"},[c.append?v($e,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},c.append):v(ze,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&v("span",{key:"loader",class:"v-btn__loader"},[((F=c.loader)==null?void 0:F.call(c))??v(or,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[Ct("ripple"),!j.value&&e.ripple,null]])}),{}}}),p0=W()({name:"VAppBarNavIcon",props:vr({icon:"$menu",variant:"text"}),setup(e,t){let{slots:n}=t;return X(()=>v(bt,le(e,{class:["v-app-bar-nav-icon"]}),n)),{}}}),k0=W()({name:"VToolbarItems",props:{...ne(),...Ft({variant:"text"})},setup(e,t){let{slots:n}=t;return Je({VBtn:{color:Y(e,"color"),height:"inherit",variant:Y(e,"variant")}}),X(()=>{var c;return v("div",{class:["v-toolbar-items",e.class],style:e.style},[(c=n.default)==null?void 0:c.call(n)])}),{}}}),S0=W()({name:"VAppBarTitle",props:Tf(),setup(e,t){let{slots:n}=t;return X(()=>v(lr,le(e,{class:"v-app-bar-title"}),n)),{}}});const Wf=Yt("v-alert-title"),C0=["success","info","warning","error"],_0=W()({name:"VAlert",props:{border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:pe,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>C0.includes(e)},...ne(),...nt(),...Rt(),...tt(),...Wn(),...ea(),...De(),..._e(),...Ie(),...Ft({variant:"flat"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{emit:n,slots:c}=t;const a=Ce(e,"modelValue"),l=y(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),s=y(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:i}=Pe(e),{colorClasses:r,colorStyles:u,variantClasses:o}=bc(s),{densityClasses:d}=gt(e),{dimensionStyles:f}=Ot(e),{elevationClasses:m}=ot(e),{locationStyles:h}=Kn(e),{positionClasses:g}=ta(e),{roundedClasses:S}=Ue(e),{textColorClasses:b,textColorStyles:C}=vt(Y(e,"borderColor")),{t:p}=Bt(),P=y(()=>({"aria-label":p(e.closeLabel),onClick(j){a.value=!1,n("click:close",j)}}));return()=>{const j=!!(c.prepend||l.value),I=!!(c.title||e.title),E=!!(e.text||c.text),k=!!(c.close||e.closable);return a.value&&v(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},i.value,r.value,d.value,m.value,g.value,S.value,o.value,e.class],style:[u.value,f.value,h.value,e.style],role:"alert"},{default:()=>{var x,q;return[yc(!1,"v-alert"),e.border&&v("div",{key:"border",class:["v-alert__border",b.value],style:C.value},null),j&&v("div",{key:"prepend",class:"v-alert__prepend"},[c.prepend?v($e,{key:"prepend-defaults",disabled:!l.value,defaults:{VIcon:{density:e.density,icon:l.value,size:e.prominent?44:28}}},c.prepend):v(ze,{key:"prepend-icon",density:e.density,icon:l.value,size:e.prominent?44:28},null)]),v("div",{class:"v-alert__content"},[I&&v(Wf,{key:"title"},{default:()=>{var V;return[((V=c.title)==null?void 0:V.call(c))??e.title]}}),E&&(((x=c.text)==null?void 0:x.call(c))??e.text),(q=c.default)==null?void 0:q.call(c)]),c.append&&v("div",{key:"append",class:"v-alert__append"},[c.append()]),k&&v("div",{key:"close",class:"v-alert__close"},[c.close?v($e,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var V;return[(V=c.close)==null?void 0:V.call(c,{props:P.value})]}}):v(bt,le({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},P.value),null)])]}})}}});function Kf(e){const{t}=Bt();function n(c){let{name:a}=c;const l={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[a],s=e[`onClick:${a}`],i=s&&l?t(`$vuetify.input.${l}`,e.label??""):void 0;return v(ze,{icon:e[`${a}Icon`],"aria-label":i,onClick:s},null)}return{InputIcon:n}}const na=W()({name:"VLabel",props:{text:String,clickable:Boolean,...ne(),...Ie()},setup(e,t){let{slots:n}=t;return X(()=>{var c;return v("label",{class:["v-label",{"v-label--clickable":e.clickable},e.class],style:e.style},[e.text,(c=n.default)==null?void 0:c.call(n)])}),{}}}),ua=W()({name:"VFieldLabel",props:{floating:Boolean,...ne()},setup(e,t){let{slots:n}=t;return X(()=>v(na,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},n)),{}}}),Nl=ye({focused:Boolean,"onUpdate:focused":an()},"focus");function Yn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xn();const n=Ce(e,"focused"),c=y(()=>({[`${t}--focused`]:n.value}));function a(){n.value=!0}function l(){n.value=!1}return{focusClasses:c,isFocused:n,focus:a,blur:l}}const x0=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],Dl=ye({appendInnerIcon:pe,bgColor:String,clearable:Boolean,clearIcon:{type:pe,default:"$clear"},active:Boolean,color:String,baseColor:String,dirty:Boolean,disabled:Boolean,error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:pe,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>x0.includes(e)},"onClick:clear":an(),"onClick:appendInner":an(),"onClick:prependInner":an(),...ne(),...dr(),...De(),...Ie()},"v-field"),La=W()({name:"VField",inheritAttrs:!1,props:{id:String,...Nl(),...Dl()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:n,emit:c,slots:a}=t;const{themeClasses:l}=Pe(e),{loaderClasses:s}=Fl(e),{focusClasses:i,isFocused:r,focus:u,blur:o}=Yn(e),{InputIcon:d}=Kf(e),{roundedClasses:f}=Ue(e),m=y(()=>e.dirty||e.active),h=y(()=>!e.singleLine&&!!(e.label||a.label)),g=ht(),S=y(()=>e.id||`input-${g}`),b=y(()=>`${S.value}-messages`),C=$(),p=$(),P=$(),{backgroundColorClasses:j,backgroundColorStyles:I}=Ze(Y(e,"bgColor")),{textColorClasses:E,textColorStyles:k}=vt(y(()=>e.error||e.disabled?void 0:m.value&&r.value?e.color:e.baseColor));ae(m,V=>{if(h.value){const w=C.value.$el,M=p.value.$el;requestAnimationFrame(()=>{const N=Gi(w),Z=M.getBoundingClientRect(),F=Z.x-N.x,H=Z.y-N.y-(N.height/2-Z.height/2),D=Z.width/.75,J=Math.abs(D-N.width)>1?{maxWidth:ie(D)}:void 0,R=getComputedStyle(w),K=getComputedStyle(M),z=parseFloat(R.transitionDuration)*1e3||150,fe=parseFloat(K.getPropertyValue("--v-field-label-scale")),ue=K.getPropertyValue("color");w.style.visibility="visible",M.style.visibility="hidden",sc(w,{transform:`translate(${F}px, ${H}px) scale(${fe})`,color:ue,...J},{duration:z,easing:Va,direction:V?"normal":"reverse"}).finished.then(()=>{w.style.removeProperty("visibility"),M.style.removeProperty("visibility")})})}},{flush:"post"});const x=y(()=>({isActive:m,isFocused:r,controlRef:P,blur:o,focus:u}));function q(V){V.target!==document.activeElement&&V.preventDefault()}return X(()=>{var F,H,D;const V=e.variant==="outlined",w=a["prepend-inner"]||e.prependInnerIcon,M=!!(e.clearable||a.clear),N=!!(a["append-inner"]||e.appendInnerIcon||M),Z=a.label?a.label({label:e.label,props:{for:S.value}}):e.label;return v("div",le({class:["v-field",{"v-field--active":m.value,"v-field--appended":N,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":w,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!Z,[`v-field--variant-${e.variant}`]:!0},l.value,j.value,i.value,s.value,f.value,e.class],style:[I.value,k.value,e.style],onClick:q},n),[v("div",{class:"v-field__overlay"},null),v(fr,{name:"v-field",active:!!e.loading,color:e.error?"error":e.color},{default:a.loader}),w&&v("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&v(d,{key:"prepend-icon",name:"prependInner"},null),(F=a["prepend-inner"])==null?void 0:F.call(a,x.value)]),v("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&h.value&&v(ua,{key:"floating-label",ref:p,class:[E.value],floating:!0,for:S.value},{default:()=>[Z]}),v(ua,{ref:C,for:S.value},{default:()=>[Z]}),(H=a.default)==null?void 0:H.call(a,{...x.value,props:{id:S.value,class:"v-field__input","aria-describedby":b.value},focus:u,blur:o})]),M&&v(ar,{key:"clear"},{default:()=>[He(v("div",{class:"v-field__clearable",onMousedown:J=>{J.preventDefault(),J.stopPropagation()}},[a.clear?a.clear():v(d,{name:"clear"},null)]),[[on,e.dirty]])]}),N&&v("div",{key:"append",class:"v-field__append-inner"},[(D=a["append-inner"])==null?void 0:D.call(a,x.value),e.appendInnerIcon&&v(d,{key:"append-icon",name:"appendInner"},null)]),v("div",{class:["v-field__outline",E.value]},[V&&v(me,null,[v("div",{class:"v-field__outline__start"},null),h.value&&v("div",{class:"v-field__outline__notch"},[v(ua,{ref:p,floating:!0,for:S.value},{default:()=>[Z]})]),v("div",{class:"v-field__outline__end"},null)]),["plain","underlined"].includes(e.variant)&&h.value&&v(ua,{ref:p,floating:!0,for:S.value},{default:()=>[Z]})])])}),{controlRef:P}}});function mr(e){const t=Object.keys(La.props).filter(n=>!Cb(n)&&n!=="class"&&n!=="style");return Wc(e,t)}const Yf=W()({name:"VMessages",props:{active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...ne(),...jn({transition:{component:cr,leaveAbsolute:!0,group:!0}})},setup(e,t){let{slots:n}=t;const c=y(()=>Tt(e.messages)),{textColorClasses:a,textColorStyles:l}=vt(y(()=>e.color));return X(()=>v(Ht,{transition:e.transition,tag:"div",class:["v-messages",a.value,e.class],style:[l.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&c.value.map((s,i)=>v("div",{class:"v-messages__message",key:`${i}-${c.value}`},[n.message?n.message({message:s}):s]))]})),{}}}),Gf=Symbol.for("vuetify:form"),w0=ye({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function j0(e){const t=Ce(e,"modelValue"),n=y(()=>e.disabled),c=y(()=>e.readonly),a=$(!1),l=$([]),s=$([]);async function i(){const o=[];let d=!0;s.value=[],a.value=!0;for(const f of l.value){const m=await f.validate();if(m.length>0&&(d=!1,o.push({id:f.id,errorMessages:m})),!d&&e.fastFail)break}return s.value=o,a.value=!1,{valid:d,errors:s.value}}function r(){l.value.forEach(o=>o.reset()),t.value=null}function u(){l.value.forEach(o=>o.resetValidation()),s.value=[],t.value=null}return ae(l,()=>{let o=0,d=0;const f=[];for(const m of l.value)m.isValid===!1?(d++,f.push({id:m.id,errorMessages:m.errorMessages})):m.isValid===!0&&o++;s.value=f,t.value=d>0?!1:o===l.value.length?!0:null},{deep:!0}),Ke(Gf,{register:o=>{let{id:d,validate:f,reset:m,resetValidation:h}=o;l.value.some(g=>g.id===d)&&Ln(`Duplicate input name "${d}"`),l.value.push({id:d,validate:f,reset:m,resetValidation:h,isValid:null,errorMessages:[]})},unregister:o=>{l.value=l.value.filter(d=>d.id!==o)},update:(o,d,f)=>{const m=l.value.find(h=>h.id===o);m&&(m.isValid=d,m.errorMessages=f)},isDisabled:n,isReadonly:c,isValidating:a,items:l,validateOn:Y(e,"validateOn")}),{errors:s,isDisabled:n,isReadonly:c,isValidating:a,items:l,validate:i,reset:r,resetValidation:u}}function zl(){return Ve(Gf,null)}const Xf=ye({disabled:Boolean,error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:Boolean,rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...Nl()},"validation");function Zf(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xn(),n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ht();const c=Ce(e,"modelValue"),a=y(()=>e.validationValue===void 0?c.value:e.validationValue),l=zl(),s=$([]),i=$(!0),r=y(()=>!!(Tt(c.value===""?null:c.value).length||Tt(a.value===""?null:a.value).length)),u=y(()=>!!(e.disabled||l!=null&&l.isDisabled.value)),o=y(()=>!!(e.readonly||l!=null&&l.isReadonly.value)),d=y(()=>e.errorMessages.length?Tt(e.errorMessages).slice(0,Math.max(0,+e.maxErrors)):s.value),f=y(()=>e.error||d.value.length?!1:e.rules.length&&i.value?null:!0),m=$(!1),h=y(()=>({[`${t}--error`]:f.value===!1,[`${t}--dirty`]:r.value,[`${t}--disabled`]:u.value,[`${t}--readonly`]:o.value})),g=y(()=>e.name??dt(n));El(()=>{l==null||l.register({id:g.value,validate:p,reset:b,resetValidation:C})}),pt(()=>{l==null||l.unregister(g.value)});const S=y(()=>e.validateOn||(l==null?void 0:l.validateOn.value)||"input");mt(()=>l==null?void 0:l.update(g.value,f.value,d.value)),Nn(()=>S.value==="input",()=>{ae(a,()=>{if(a.value!=null)p();else if(e.focused){const P=ae(()=>e.focused,j=>{j||p(),P()})}})}),Nn(()=>S.value==="blur",()=>{ae(()=>e.focused,P=>{P||p()})}),ae(f,()=>{l==null||l.update(g.value,f.value,d.value)});function b(){C(),c.value=null}function C(){i.value=!0,s.value=[]}async function p(){const P=[];m.value=!0;for(const j of e.rules){if(P.length>=+(e.maxErrors??1))break;const E=await(typeof j=="function"?j:()=>j)(a.value);if(E!==!0){if(typeof E!="string"){console.warn(`${E} is not a valid value. Rule functions must return boolean true or a string.`);continue}P.push(E)}}return s.value=P,m.value=!1,i.value=!1,s.value}return{errorMessages:d,isDirty:r,isDisabled:u,isReadonly:o,isPristine:i,isValid:f,isValidating:m,reset:b,resetValidation:C,validate:p,validationClasses:h}}const Vn=ye({id:String,appendIcon:pe,prependIcon:pe,hideDetails:[Boolean,String],hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":an(),"onClick:append":an(),...ne(),...nt(),...Xf()},"v-input"),it=W()({name:"VInput",props:{...Vn()},emits:{"update:modelValue":e=>!0},setup(e,t){let{attrs:n,slots:c,emit:a}=t;const{densityClasses:l}=gt(e),{InputIcon:s}=Kf(e),i=ht(),r=y(()=>e.id||`input-${i}`),u=y(()=>`${r.value}-messages`),{errorMessages:o,isDirty:d,isDisabled:f,isReadonly:m,isPristine:h,isValid:g,isValidating:S,reset:b,resetValidation:C,validate:p,validationClasses:P}=Zf(e,"v-input",r),j=y(()=>({id:r,messagesId:u,isDirty:d,isDisabled:f,isReadonly:m,isPristine:h,isValid:g,isValidating:S,reset:b,resetValidation:C,validate:p})),I=y(()=>o.value.length>0?o.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages);return X(()=>{var V,w,M,N;const E=!!(c.prepend||e.prependIcon),k=!!(c.append||e.appendIcon),x=I.value.length>0,q=!e.hideDetails||e.hideDetails==="auto"&&(x||!!c.details);return v("div",{class:["v-input",`v-input--${e.direction}`,l.value,P.value,e.class],style:e.style},[E&&v("div",{key:"prepend",class:"v-input__prepend"},[(V=c.prepend)==null?void 0:V.call(c,j.value),e.prependIcon&&v(s,{key:"prepend-icon",name:"prepend"},null)]),c.default&&v("div",{class:"v-input__control"},[(w=c.default)==null?void 0:w.call(c,j.value)]),k&&v("div",{key:"append",class:"v-input__append"},[e.appendIcon&&v(s,{key:"append-icon",name:"append"},null),(M=c.append)==null?void 0:M.call(c,j.value)]),q&&v("div",{class:"v-input__details"},[v(Yf,{id:u.value,active:x,messages:I.value},{message:c.message}),(N=c.details)==null?void 0:N.call(c,j.value)])])}),{reset:b,resetValidation:C,validate:p}}});const Hl=W()({name:"VCounter",functional:!0,props:{active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...ne(),...jn({transition:{component:cr}})},setup(e,t){let{slots:n}=t;const c=y(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return X(()=>v(Ht,{transition:e.transition},{default:()=>[He(v("div",{class:["v-counter",e.class],style:e.style},[n.default?n.default({counter:c.value,max:e.max,value:e.value}):c.value]),[[on,e.active]])]})),{}}}),ms=Symbol("Forwarded refs");function hs(e,t){let n=e;for(;n;){const c=Reflect.getOwnPropertyDescriptor(n,t);if(c)return c;n=Object.getPrototypeOf(n)}}function Gt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),c=1;c<t;c++)n[c-1]=arguments[c];return e[ms]=n,new Proxy(e,{get(a,l){if(Reflect.has(a,l))return Reflect.get(a,l);if(!(typeof l=="symbol"||l.startsWith("__"))){for(const s of n)if(s.value&&Reflect.has(s.value,l)){const i=Reflect.get(s.value,l);return typeof i=="function"?i.bind(s.value):i}}},has(a,l){if(Reflect.has(a,l))return!0;if(typeof l=="symbol"||l.startsWith("__"))return!1;for(const s of n)if(s.value&&Reflect.has(s.value,l))return!0;return!1},getOwnPropertyDescriptor(a,l){var i;const s=Reflect.getOwnPropertyDescriptor(a,l);if(s)return s;if(!(typeof l=="symbol"||l.startsWith("__"))){for(const r of n){if(!r.value)continue;const u=hs(r.value,l)??("_"in r.value?hs((i=r.value._)==null?void 0:i.setupState,l):void 0);if(u)return u}for(const r of n){const u=r.value&&r.value[ms];if(!u)continue;const o=u.slice();for(;o.length;){const d=o.shift(),f=hs(d.value,l);if(f)return f;const m=d.value&&d.value[ms];m&&o.push(...m)}}}}})}const q0=["color","file","time","date","datetime-local","week","month"],Ul=ye({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"},modelModifiers:Object,...Vn(),...Dl()},"v-text-field"),fc=W()({name:"VTextField",directives:{Intersect:Ba},inheritAttrs:!1,props:Ul(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:n,emit:c,slots:a}=t;const l=Ce(e,"modelValue"),{isFocused:s,focus:i,blur:r}=Yn(e),u=y(()=>typeof e.counterValue=="function"?e.counterValue(l.value):(l.value??"").toString().length),o=y(()=>{if(n.maxlength)return n.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function d(j,I){var E,k;!e.autofocus||!j||(k=(E=I[0].target)==null?void 0:E.focus)==null||k.call(E)}const f=$(),m=$(),h=$(),g=y(()=>q0.includes(e.type)||e.persistentPlaceholder||s.value||e.active);function S(){var j;h.value!==document.activeElement&&((j=h.value)==null||j.focus()),s.value||i()}function b(j){c("mousedown:control",j),j.target!==h.value&&(S(),j.preventDefault())}function C(j){S(),c("click:control",j)}function p(j){j.stopPropagation(),S(),Oe(()=>{l.value=null,Ki(e["onClick:clear"],j)})}function P(j){var E;const I=j.target;if(l.value=I.value,(E=e.modelModifiers)!=null&&E.trim&&["text","search","password","tel","url"].includes(e.type)){const k=[I.selectionStart,I.selectionEnd];Oe(()=>{I.selectionStart=k[0],I.selectionEnd=k[1]})}}return X(()=>{const j=!!(a.counter||e.counter||e.counterValue),I=!!(j||a.details),[E,k]=mc(n),[{modelValue:x,...q}]=it.filterProps(e),[V]=mr(e);return v(it,le({ref:f,modelValue:l.value,"onUpdate:modelValue":w=>l.value=w,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)},e.class],style:e.style},E,q,{focused:s.value}),{...a,default:w=>{let{id:M,isDisabled:N,isDirty:Z,isReadonly:F,isValid:H}=w;return v(La,le({ref:m,onMousedown:b,onClick:C,"onClick:clear":p,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},V,{id:M.value,active:g.value||Z.value,dirty:Z.value||e.dirty,disabled:N.value,focused:s.value,error:H.value===!1}),{...a,default:D=>{let{props:{class:J,...R}}=D;const K=He(v("input",le({ref:h,value:l.value,onInput:P,autofocus:e.autofocus,readonly:F.value,disabled:N.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:S,onBlur:r},R,k),null),[[Ct("intersect"),{handler:d},null,{once:!0}]]);return v(me,null,[e.prefix&&v("span",{class:"v-text-field__prefix"},[e.prefix]),a.default?v("div",{class:J,"data-no-activator":""},[a.default(),K]):yn(K,{class:J}),e.suffix&&v("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:I?w=>{var M;return v(me,null,[(M=a.details)==null?void 0:M.call(a,w),j&&v(me,null,[v("span",null,null),v(Hl,{active:e.persistentCounter||s.value,value:u.value,max:o.value},a.counter)])])}:void 0})}),Gt({},f,m,h)}});const Qf=Symbol.for("vuetify:selection-control-group"),hr=ye({color:String,disabled:Boolean,error:Boolean,id:String,inline:Boolean,falseIcon:pe,trueIcon:pe,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,modelValue:null,type:String,valueComparator:{type:Function,default:vc},...Ie(),...nt()},"v-selection-control-group"),Jf=W()({name:"VSelectionControlGroup",props:{defaultsTarget:{type:String,default:"VSelectionControl"},...ne(),...hr()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const c=Ce(e,"modelValue"),a=ht(),l=y(()=>e.id||`v-selection-control-group-${a}`),s=y(()=>e.name||l.value),i=new Set;return Ke(Qf,{modelValue:c,forceUpdate:()=>{i.forEach(r=>r())},onForceUpdate:r=>{i.add(r),Vt(()=>{i.delete(r)})}}),Je({[e.defaultsTarget]:{color:Y(e,"color"),disabled:Y(e,"disabled"),density:Y(e,"density"),error:Y(e,"error"),inline:Y(e,"inline"),modelValue:c,multiple:y(()=>!!e.multiple||e.multiple==null&&Array.isArray(c.value)),name:s,falseIcon:Y(e,"falseIcon"),trueIcon:Y(e,"trueIcon"),readonly:Y(e,"readonly"),ripple:Y(e,"ripple"),type:Y(e,"type"),valueComparator:Y(e,"valueComparator")}}),X(()=>{var r;return v("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(r=n.default)==null?void 0:r.call(n)])}),{}}}),Wl=ye({label:String,trueValue:null,falseValue:null,value:null,...ne(),...hr()},"v-selection-control");function V0(e){const t=Ve(Qf,void 0),{densityClasses:n}=gt(e),c=Ce(e,"modelValue"),a=y(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),l=y(()=>e.falseValue!==void 0?e.falseValue:!1),s=y(()=>!!e.multiple||e.multiple==null&&Array.isArray(c.value)),i=y({get(){const d=t?t.modelValue.value:c.value;return s.value?d.some(f=>e.valueComparator(f,a.value)):e.valueComparator(d,a.value)},set(d){if(e.readonly)return;const f=d?a.value:l.value;let m=f;s.value&&(m=d?[...Tt(c.value),f]:Tt(c.value).filter(h=>!e.valueComparator(h,a.value))),t?t.modelValue.value=m:c.value=m}}),{textColorClasses:r,textColorStyles:u}=vt(y(()=>i.value&&!e.error&&!e.disabled?e.color:void 0)),o=y(()=>i.value?e.trueIcon:e.falseIcon);return{group:t,densityClasses:n,trueValue:a,falseValue:l,model:i,textColorClasses:r,textColorStyles:u,icon:o}}const Fc=W()({name:"VSelectionControl",directives:{Ripple:Un},inheritAttrs:!1,props:Wl(),emits:{"update:modelValue":e=>!0},setup(e,t){let{attrs:n,slots:c}=t;const{group:a,densityClasses:l,icon:s,model:i,textColorClasses:r,textColorStyles:u,trueValue:o}=V0(e),d=ht(),f=y(()=>e.id||`input-${d}`),m=$(!1),h=$(!1),g=$();a==null||a.onForceUpdate(()=>{g.value&&(g.value.checked=i.value)});function S(p){m.value=!0,(!Ks||Ks&&p.target.matches(":focus-visible"))&&(h.value=!0)}function b(){m.value=!1,h.value=!1}function C(p){e.readonly&&a&&Oe(()=>a.forceUpdate()),i.value=p.target.checked}return X(()=>{var I,E;const p=c.label?c.label({label:e.label,props:{for:f.value}}):e.label,[P,j]=mc(n);return v("div",le({class:["v-selection-control",{"v-selection-control--dirty":i.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":m.value,"v-selection-control--focus-visible":h.value,"v-selection-control--inline":e.inline},l.value,e.class]},P,{style:e.style}),[v("div",{class:["v-selection-control__wrapper",r.value],style:u.value},[(I=c.default)==null?void 0:I.call(c),He(v("div",{class:["v-selection-control__input"]},[s.value&&v(ze,{key:"icon",icon:s.value},null),v("input",le({ref:g,checked:i.value,disabled:e.disabled,id:f.value,onBlur:b,onFocus:S,onInput:C,"aria-disabled":e.readonly,type:e.type,value:o.value,name:e.name,"aria-checked":e.type==="checkbox"?i.value:void 0},j),null),(E=c.input)==null?void 0:E.call(c,{model:i,textColorClasses:r,textColorStyles:u,props:{onFocus:S,onBlur:b,id:f.value}})]),[[Ct("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),p&&v(na,{for:f.value,clickable:!0},{default:()=>[p]})])}),{isFocused:m,input:g}}}),ev=ye({indeterminate:Boolean,indeterminateIcon:{type:pe,default:"$checkboxIndeterminate"},...Wl({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"v-checkbox-btn"),Nc=W()({name:"VCheckboxBtn",props:ev(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,t){let{slots:n}=t;const c=Ce(e,"indeterminate"),a=Ce(e,"modelValue");function l(r){c.value&&(c.value=!1)}const s=y(()=>e.indeterminate?e.indeterminateIcon:e.falseIcon),i=y(()=>e.indeterminate?e.indeterminateIcon:e.trueIcon);return X(()=>v(Fc,le(e,{modelValue:a.value,"onUpdate:modelValue":[r=>a.value=r,l],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:s.value,trueIcon:i.value,"aria-checked":e.indeterminate?"mixed":void 0}),n)),{}}}),I0=W()({name:"VCheckbox",inheritAttrs:!1,props:{...Vn(),...un(ev(),["inline"])},emits:{"update:focused":e=>!0},setup(e,t){let{attrs:n,slots:c}=t;const{isFocused:a,focus:l,blur:s}=Yn(e),i=ht(),r=y(()=>e.id||`checkbox-${i}`);return X(()=>{const[u,o]=mc(n),[d,f]=it.filterProps(e),[m,h]=Nc.filterProps(e);return v(it,le({class:["v-checkbox",e.class]},u,d,{id:r.value,focused:a.value,style:e.style}),{...c,default:g=>{let{id:S,messagesId:b,isDisabled:C,isReadonly:p}=g;return v(Nc,le(m,{id:S.value,"aria-describedby":b.value,disabled:C.value,readonly:p.value},o,{onFocus:l,onBlur:s}),c)}})}),{}}});const E0=ye({start:Boolean,end:Boolean,icon:pe,image:String,...ne(),...nt(),...De(),...qn(),..._e(),...Ie(),...Ft({variant:"flat"})},"v-avatar"),Dn=W()({name:"VAvatar",props:E0(),setup(e,t){let{slots:n}=t;const{themeClasses:c}=Pe(e),{colorClasses:a,colorStyles:l,variantClasses:s}=bc(e),{densityClasses:i}=gt(e),{roundedClasses:r}=Ue(e),{sizeClasses:u,sizeStyles:o}=Jc(e);return X(()=>v(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},c.value,a.value,i.value,r.value,u.value,s.value,e.class],style:[l.value,o.value,e.style]},{default:()=>{var d;return[e.image?v(Gc,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?v(ze,{key:"icon",icon:e.icon},null):(d=n.default)==null?void 0:d.call(n),yc(!1,"v-avatar")]}})),{}}});const tv=Symbol.for("vuetify:v-chip-group"),A0=W()({name:"VChipGroup",props:{column:Boolean,filter:Boolean,valueComparator:{type:Function,default:vc},...ne(),...Xc({selectedClass:"v-chip--selected"}),..._e(),...Ie(),...Ft({variant:"tonal"})},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const{themeClasses:c}=Pe(e),{isSelected:a,select:l,next:s,prev:i,selected:r}=pc(e,tv);return Je({VChip:{color:Y(e,"color"),disabled:Y(e,"disabled"),filter:Y(e,"filter"),variant:Y(e,"variant")}}),X(()=>v(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},c.value,e.class],style:e.style},{default:()=>{var u;return[(u=n.default)==null?void 0:u.call(n,{isSelected:a,select:l,next:s,prev:i,selected:r.value})]}})),{}}}),Fa=W()({name:"VChip",directives:{Ripple:Un},props:{activeClass:String,appendAvatar:String,appendIcon:pe,closable:Boolean,closeIcon:{type:pe,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:pe,ripple:{type:Boolean,default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:an(),onClickOnce:an(),...Et(),...ne(),...nt(),...tt(),...Zc(),...De(),...Oa(),...qn(),..._e({tag:"span"}),...Ie(),...Ft({variant:"tonal"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,t){let{attrs:n,emit:c,slots:a}=t;const{t:l}=Bt(),{borderClasses:s}=Lt(e),{colorClasses:i,colorStyles:r,variantClasses:u}=bc(e),{densityClasses:o}=gt(e),{elevationClasses:d}=ot(e),{roundedClasses:f}=Ue(e),{sizeClasses:m}=Jc(e),{themeClasses:h}=Pe(e),g=Ce(e,"modelValue"),S=Qc(e,tv,!1),b=Ra(e,n),C=y(()=>e.link!==!1&&b.isLink.value),p=y(()=>!e.disabled&&e.link!==!1&&(!!S||e.link||b.isClickable.value)),P=y(()=>({"aria-label":l(e.closeLabel),onClick(E){g.value=!1,c("click:close",E)}}));function j(E){var k;c("click",E),p.value&&((k=b.navigate)==null||k.call(b,E),S==null||S.toggle())}function I(E){(E.key==="Enter"||E.key===" ")&&(E.preventDefault(),j(E))}return()=>{const E=b.isLink.value?"a":e.tag,k=!!(e.appendIcon||e.appendAvatar),x=!!(k||a.append),q=!!(a.close||e.closable),V=!!(a.filter||e.filter)&&S,w=!!(e.prependIcon||e.prependAvatar),M=!!(w||a.prepend),N=!S||S.isSelected.value;return g.value&&He(v(E,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":p.value,"v-chip--filter":V,"v-chip--pill":e.pill},h.value,s.value,N?i.value:void 0,o.value,d.value,f.value,m.value,u.value,S==null?void 0:S.selectedClass.value,e.class],style:[N?r.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:b.href.value,tabindex:p.value?0:void 0,onClick:j,onKeydown:p.value&&!C.value&&I},{default:()=>{var Z;return[yc(p.value,"v-chip"),V&&v(ar,{key:"filter"},{default:()=>[He(v("div",{class:"v-chip__filter"},[a.filter?He(v($e,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},null),[[Ct("slot"),a.filter,"default"]]):v(ze,{key:"filter-icon",icon:e.filterIcon},null)]),[[on,S.isSelected.value]])]}),M&&v("div",{key:"prepend",class:"v-chip__prepend"},[a.prepend?v($e,{key:"prepend-defaults",disabled:!w,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},a.prepend):v(me,null,[e.prependIcon&&v(ze,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&v(Dn,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),((Z=a.default)==null?void 0:Z.call(a,{isSelected:S==null?void 0:S.isSelected.value,selectedClass:S==null?void 0:S.selectedClass.value,select:S==null?void 0:S.select,toggle:S==null?void 0:S.toggle,value:S==null?void 0:S.value.value,disabled:e.disabled}))??e.text,x&&v("div",{key:"append",class:"v-chip__append"},[a.append?v($e,{key:"append-defaults",disabled:!k,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},a.append):v(me,null,[e.appendIcon&&v(ze,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&v(Dn,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),q&&v("div",le({key:"close",class:"v-chip__close"},P.value),[a.close?v($e,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},a.close):v(ze,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Ct("ripple"),p.value&&e.ripple,null]])}}});const nv=W()({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...ne(),...Ie()},setup(e,t){let{attrs:n}=t;const{themeClasses:c}=Pe(e),{textColorClasses:a,textColorStyles:l}=vt(Y(e,"color")),s=y(()=>{const i={};return e.length&&(i[e.vertical?"maxHeight":"maxWidth"]=ie(e.length)),e.thickness&&(i[e.vertical?"borderRightWidth":"borderTopWidth"]=ie(e.thickness)),i});return X(()=>v("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},c.value,a.value,e.class],style:[s.value,l.value,e.style],"aria-orientation":!n.role||n.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${n.role||"separator"}`},null)),{}}}),ni=Symbol.for("vuetify:list");function cv(){const e=Ve(ni,{hasPrepend:$(!1),updateHasPrepend:()=>null}),t={hasPrepend:$(!1),updateHasPrepend:n=>{n&&(t.hasPrepend.value=n)}};return Ke(ni,t),e}function av(){return Ve(ni,null)}const P0={open:e=>{let{id:t,value:n,opened:c,parents:a}=e;if(n){const l=new Set;l.add(t);let s=a.get(t);for(;s!=null;)l.add(s),s=a.get(s);return l}else return c.delete(t),c},select:()=>null},lv={open:e=>{let{id:t,value:n,opened:c,parents:a}=e;if(n){let l=a.get(t);for(c.add(t);l!=null&&l!==t;)c.add(l),l=a.get(l);return c}else c.delete(t);return c},select:()=>null},T0={open:lv.open,select:e=>{let{id:t,value:n,opened:c,parents:a}=e;if(!n)return c;const l=[];let s=a.get(t);for(;s!=null;)l.push(s),s=a.get(s);return new Set(l)}},gr=e=>{const t={select:n=>{let{id:c,value:a,selected:l}=n;if(c=xe(c),e&&!a){const s=Array.from(l.entries()).reduce((i,r)=>{let[u,o]=r;return o==="on"?[...i,u]:i},[]);if(s.length===1&&s[0]===c)return l}return l.set(c,a?"on":"off"),l},in:(n,c,a)=>{let l=new Map;for(const s of n||[])l=t.select({id:s,value:!0,selected:new Map(l),children:c,parents:a});return l},out:n=>{const c=[];for(const[a,l]of n.entries())l==="on"&&c.push(a);return c}};return t},sv=e=>{const t=gr(e);return{select:c=>{let{selected:a,id:l,...s}=c;l=xe(l);const i=a.has(l)?new Map([[l,a.get(l)]]):new Map;return t.select({...s,id:l,selected:i})},in:(c,a,l)=>{let s=new Map;return c!=null&&c.length&&(s=t.in(c.slice(0,1),a,l)),s},out:(c,a,l)=>t.out(c,a,l)}},$0=e=>{const t=gr(e);return{select:c=>{let{id:a,selected:l,children:s,...i}=c;return a=xe(a),s.has(a)?l:t.select({id:a,selected:l,children:s,...i})},in:t.in,out:t.out}},M0=e=>{const t=sv(e);return{select:c=>{let{id:a,selected:l,children:s,...i}=c;return a=xe(a),s.has(a)?l:t.select({id:a,selected:l,children:s,...i})},in:t.in,out:t.out}},B0=e=>{const t={select:n=>{let{id:c,value:a,selected:l,children:s,parents:i}=n;c=xe(c);const r=new Map(l),u=[c];for(;u.length;){const d=u.shift();l.set(d,a?"on":"off"),s.has(d)&&u.push(...s.get(d))}let o=i.get(c);for(;o;){const d=s.get(o),f=d.every(h=>l.get(h)==="on"),m=d.every(h=>!l.has(h)||l.get(h)==="off");l.set(o,f?"on":m?"off":"indeterminate"),o=i.get(o)}return e&&!a&&Array.from(l.entries()).reduce((f,m)=>{let[h,g]=m;return g==="on"?[...f,h]:f},[]).length===0?r:l},in:(n,c,a)=>{let l=new Map;for(const s of n||[])l=t.select({id:s,value:!0,selected:new Map(l),children:c,parents:a});return l},out:(n,c)=>{const a=[];for(const[l,s]of n.entries())s==="on"&&!c.has(l)&&a.push(l);return a}};return t},Pa=Symbol.for("vuetify:nested"),iv={id:$(),root:{register:()=>null,unregister:()=>null,parents:$(new Map),children:$(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:$(new Set),selected:$(new Map),selectedValues:$([])}},R0=ye({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),O0=e=>{let t=!1;const n=$(new Map),c=$(new Map),a=Ce(e,"opened",e.opened,d=>new Set(d),d=>[...d.values()]),l=y(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return M0(e.mandatory);case"leaf":return $0(e.mandatory);case"independent":return gr(e.mandatory);case"single-independent":return sv(e.mandatory);case"classic":default:return B0(e.mandatory)}}),s=y(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return T0;case"single":return P0;case"multiple":default:return lv}}),i=Ce(e,"selected",e.selected,d=>l.value.in(d,n.value,c.value),d=>l.value.out(d,n.value,c.value));pt(()=>{t=!0});function r(d){const f=[];let m=d;for(;m!=null;)f.unshift(m),m=c.value.get(m);return f}const u=rt("nested"),o={id:$(),root:{opened:a,selected:i,selectedValues:y(()=>{const d=[];for(const[f,m]of i.value.entries())m==="on"&&d.push(f);return d}),register:(d,f,m)=>{f&&d!==f&&c.value.set(d,f),m&&n.value.set(d,[]),f!=null&&n.value.set(f,[...n.value.get(f)||[],d])},unregister:d=>{if(t)return;n.value.delete(d);const f=c.value.get(d);if(f){const m=n.value.get(f)??[];n.value.set(f,m.filter(h=>h!==d))}c.value.delete(d),a.value.delete(d)},open:(d,f,m)=>{u.emit("click:open",{id:d,value:f,path:r(d),event:m});const h=s.value.open({id:d,value:f,opened:new Set(a.value),children:n.value,parents:c.value,event:m});h&&(a.value=h)},openOnSelect:(d,f,m)=>{const h=s.value.select({id:d,value:f,selected:new Map(i.value),opened:new Set(a.value),children:n.value,parents:c.value,event:m});h&&(a.value=h)},select:(d,f,m)=>{u.emit("click:select",{id:d,value:f,path:r(d),event:m});const h=l.value.select({id:d,value:f,selected:new Map(i.value),children:n.value,parents:c.value,event:m});h&&(i.value=h),o.root.openOnSelect(d,f,m)},children:n,parents:c}};return Ke(Pa,o),o.root},rv=(e,t)=>{const n=Ve(Pa,iv),c=Symbol(ht()),a=y(()=>e.value??c),l={...n,id:a,open:(s,i)=>n.root.open(a.value,s,i),openOnSelect:(s,i)=>n.root.openOnSelect(a.value,s,i),isOpen:y(()=>n.root.opened.value.has(a.value)),parent:y(()=>n.root.parents.value.get(a.value)),select:(s,i)=>n.root.select(a.value,s,i),isSelected:y(()=>n.root.selected.value.get(xe(a.value))==="on"),isIndeterminate:y(()=>n.root.selected.value.get(a.value)==="indeterminate"),isLeaf:y(()=>!n.root.children.value.get(a.value)),isGroupActivator:n.isGroupActivator};return!n.isGroupActivator&&n.root.register(a.value,n.id.value,t),pt(()=>{!n.isGroupActivator&&n.root.unregister(a.value)}),t&&Ke(Pa,l),l},L0=()=>{const e=Ve(Pa,iv);Ke(Pa,{...e,isGroupActivator:!0})},F0=Mt({name:"VListGroupActivator",setup(e,t){let{slots:n}=t;return L0(),()=>{var c;return(c=n.default)==null?void 0:c.call(n)}}}),N0=ye({activeColor:String,color:String,collapseIcon:{type:pe,default:"$collapse"},expandIcon:{type:pe,default:"$expand"},prependIcon:pe,appendIcon:pe,fluid:Boolean,subgroup:Boolean,value:null,...ne(),..._e()},"v-list-group"),ci=W()({name:"VListGroup",props:{title:String,...N0()},setup(e,t){let{slots:n}=t;const{isOpen:c,open:a,id:l}=rv(Y(e,"value"),!0),s=y(()=>`v-list-group--id-${String(l.value)}`),i=av(),{isBooted:r}=gc();function u(m){a(!c.value,m)}const o=y(()=>({onClick:u,class:"v-list-group__header",id:s.value})),d=y(()=>c.value?e.collapseIcon:e.expandIcon),f=y(()=>({VListItem:{active:c.value,activeColor:e.activeColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&d.value,appendIcon:e.appendIcon||!e.subgroup&&d.value,title:e.title,value:e.value}}));return X(()=>v(e.tag,{class:["v-list-group",{"v-list-group--prepend":i==null?void 0:i.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":c.value},e.class],style:e.style},{default:()=>[n.activator&&v($e,{defaults:f.value},{default:()=>[v(F0,null,{default:()=>[n.activator({props:o.value,isOpen:c.value})]})]}),v(Ht,{transition:{component:Ll},disabled:!r.value},{default:()=>{var m;return[He(v("div",{class:"v-list-group__items",role:"group","aria-labelledby":s.value},[(m=n.default)==null?void 0:m.call(n)]),[[on,c.value]])]}})]})),{}}});const ov=Yt("v-list-item-subtitle"),uv=Yt("v-list-item-title"),kn=W()({name:"VListItem",directives:{Ripple:Un},props:{active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:pe,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:pe,ripple:{type:Boolean,default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:an(),onClickOnce:an(),...Et(),...ne(),...nt(),...Rt(),...tt(),...De(),...Oa(),..._e(),...Ie(),...Ft({variant:"text"})},emits:{click:e=>!0},setup(e,t){let{attrs:n,slots:c,emit:a}=t;const l=Ra(e,n),s=y(()=>e.value??l.href.value),{select:i,isSelected:r,isIndeterminate:u,isGroupActivator:o,root:d,parent:f,openOnSelect:m}=rv(s,!1),h=av(),g=y(()=>{var H;return e.active!==!1&&(e.active||((H=l.isActive)==null?void 0:H.value)||r.value)}),S=y(()=>e.link!==!1&&l.isLink.value),b=y(()=>!e.disabled&&e.link!==!1&&(e.link||l.isClickable.value||e.value!=null&&!!h)),C=y(()=>e.rounded||e.nav),p=y(()=>({color:g.value?e.activeColor??e.color:e.color,variant:e.variant}));ae(()=>{var H;return(H=l.isActive)==null?void 0:H.value},H=>{H&&f.value!=null&&d.open(f.value,!0),H&&m(H)},{immediate:!0});const{themeClasses:P}=Pe(e),{borderClasses:j}=Lt(e),{colorClasses:I,colorStyles:E,variantClasses:k}=bc(p),{densityClasses:x}=gt(e),{dimensionStyles:q}=Ot(e),{elevationClasses:V}=ot(e),{roundedClasses:w}=Ue(C),M=y(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),N=y(()=>({isActive:g.value,select:i,isSelected:r.value,isIndeterminate:u.value}));function Z(H){var D;a("click",H),!(o||!b.value)&&((D=l.navigate)==null||D.call(l,H),e.value!=null&&i(!r.value,H))}function F(H){(H.key==="Enter"||H.key===" ")&&(H.preventDefault(),Z(H))}return X(()=>{const H=S.value?"a":e.tag,D=!h||r.value||g.value,J=c.title||e.title,R=c.subtitle||e.subtitle,K=!!(e.appendAvatar||e.appendIcon),z=!!(K||c.append),fe=!!(e.prependAvatar||e.prependIcon),ue=!!(fe||c.prepend);return h==null||h.updateHasPrepend(ue),He(v(H,{class:["v-list-item",{"v-list-item--active":g.value,"v-list-item--disabled":e.disabled,"v-list-item--link":b.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!ue&&(h==null?void 0:h.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&g.value},P.value,j.value,D?I.value:void 0,x.value,V.value,M.value,w.value,k.value,e.class],style:[D?E.value:void 0,q.value,e.style],href:l.href.value,tabindex:b.value?0:void 0,onClick:Z,onKeydown:b.value&&!S.value&&F},{default:()=>{var B;return[yc(b.value||g.value,"v-list-item"),ue&&v("div",{key:"prepend",class:"v-list-item__prepend"},[c.prepend?v($e,{key:"prepend-defaults",disabled:!fe,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var T;return[(T=c.prepend)==null?void 0:T.call(c,N.value)]}}):v(me,null,[e.prependAvatar&&v(Dn,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&v(ze,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),v("div",{class:"v-list-item__content","data-no-activator":""},[J&&v(uv,{key:"title"},{default:()=>{var T;return[((T=c.title)==null?void 0:T.call(c,{title:e.title}))??e.title]}}),R&&v(ov,{key:"subtitle"},{default:()=>{var T;return[((T=c.subtitle)==null?void 0:T.call(c,{subtitle:e.subtitle}))??e.subtitle]}}),(B=c.default)==null?void 0:B.call(c,N.value)]),z&&v("div",{key:"append",class:"v-list-item__append"},[c.append?v($e,{key:"append-defaults",disabled:!K,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var T;return[(T=c.append)==null?void 0:T.call(c,N.value)]}}):v(me,null,[e.appendIcon&&v(ze,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&v(Dn,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])]}}),[[Ct("ripple"),b.value&&e.ripple]])}),{}}}),dv=W()({name:"VListSubheader",props:{color:String,inset:Boolean,sticky:Boolean,title:String,...ne(),..._e()},setup(e,t){let{slots:n}=t;const{textColorClasses:c,textColorStyles:a}=vt(Y(e,"color"));return X(()=>{const l=!!(n.default||e.title);return v(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},c.value,e.class],style:[{textColorStyles:a},e.style]},{default:()=>{var s;return[l&&v("div",{class:"v-list-subheader__text"},[((s=n.default)==null?void 0:s.call(n))??e.title])]}})}),{}}}),fv=W()({name:"VListChildren",props:{items:Array},setup(e,t){let{slots:n}=t;return cv(),()=>{var c,a;return((c=n.default)==null?void 0:c.call(n))??((a=e.items)==null?void 0:a.map(l=>{var m,h;let{children:s,props:i,type:r,raw:u}=l;if(r==="divider")return((m=n.divider)==null?void 0:m.call(n,{props:i}))??v(nv,i,null);if(r==="subheader")return((h=n.subheader)==null?void 0:h.call(n,{props:i}))??v(dv,i,{default:n.subheader});const o={subtitle:n.subtitle?g=>{var S;return(S=n.subtitle)==null?void 0:S.call(n,{...g,item:u})}:void 0,prepend:n.prepend?g=>{var S;return(S=n.prepend)==null?void 0:S.call(n,{...g,item:u})}:void 0,append:n.append?g=>{var S;return(S=n.append)==null?void 0:S.call(n,{...g,item:u})}:void 0,default:n.default?g=>{var S;return(S=n.default)==null?void 0:S.call(n,{...g,item:u})}:void 0,title:n.title?g=>{var S;return(S=n.title)==null?void 0:S.call(n,{...g,item:u})}:void 0},[d,f]=ci.filterProps(i);return s?v(ci,le({value:i==null?void 0:i.value},d),{activator:g=>{let{props:S}=g;return n.header?n.header({props:{...i,...S}}):v(kn,le(i,S),o)},default:()=>v(fv,{items:s},n)}):n.item?n.item(i):v(kn,i,o)}))}}}),vv=ye({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"item");function Vc(e,t){const n=tn(t,e.itemTitle,t),c=e.returnObject?t:tn(t,e.itemValue,n),a=tn(t,e.itemChildren),l=e.itemProps===!0?typeof t=="object"&&t!=null&&!Array.isArray(t)?"children"in t?Wc(t,["children"])[1]:t:void 0:tn(t,e.itemProps),s={title:n,value:c,...l};return{title:String(s.title??""),value:s.value,props:s,children:Array.isArray(a)?mv(e,a):void 0,raw:t}}function mv(e,t){const n=[];for(const c of t)n.push(Vc(e,c));return n}function yr(e){const t=y(()=>mv(e,e.items));function n(a){return a.map(l=>t.value.find(i=>vc(l,i.value))??Vc(e,l))}function c(a){return a.map(l=>{let{props:s}=l;return s.value})}return{items:t,transformIn:n,transformOut:c}}function D0(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function z0(e,t){const n=tn(t,e.itemType,"item"),c=D0(t)?t:tn(t,e.itemTitle),a=tn(t,e.itemValue,void 0),l=tn(t,e.itemChildren),s=e.itemProps===!0?Wc(t,["children"])[1]:tn(t,e.itemProps),i={title:c,value:a,...s};return{type:n,title:i.title,value:i.value,props:i,children:n==="item"&&l?hv(e,l):void 0,raw:t}}function hv(e,t){const n=[];for(const c of t)n.push(z0(e,c));return n}function H0(e){return{items:y(()=>hv(e,e.items))}}const Kl=W()({name:"VList",props:{activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...R0({selectStrategy:"single-leaf",openStrategy:"list"}),...Et(),...ne(),...nt(),...Rt(),...tt(),itemType:{type:String,default:"type"},...vv(),...De(),..._e(),...Ie(),...Ft({variant:"text"})},emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,t){let{slots:n}=t;const{items:c}=H0(e),{themeClasses:a}=Pe(e),{backgroundColorClasses:l,backgroundColorStyles:s}=Ze(Y(e,"bgColor")),{borderClasses:i}=Lt(e),{densityClasses:r}=gt(e),{dimensionStyles:u}=Ot(e),{elevationClasses:o}=ot(e),{roundedClasses:d}=Ue(e),{open:f,select:m}=O0(e),h=y(()=>e.lines?`v-list--${e.lines}-line`:void 0),g=Y(e,"activeColor"),S=Y(e,"color");cv(),Je({VListGroup:{activeColor:g,color:S},VListItem:{activeClass:Y(e,"activeClass"),activeColor:g,color:S,density:Y(e,"density"),disabled:Y(e,"disabled"),lines:Y(e,"lines"),nav:Y(e,"nav"),variant:Y(e,"variant")}});const b=$(!1),C=$();function p(k){b.value=!0}function P(k){b.value=!1}function j(k){var x;!b.value&&!(k.relatedTarget&&((x=C.value)!=null&&x.contains(k.relatedTarget)))&&E()}function I(k){if(C.value){if(k.key==="ArrowDown")E("next");else if(k.key==="ArrowUp")E("prev");else if(k.key==="Home")E("first");else if(k.key==="End")E("last");else return;k.preventDefault()}}function E(k){if(C.value)return Jd(C.value,k)}return X(()=>v(e.tag,{ref:C,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},a.value,l.value,i.value,r.value,o.value,h.value,d.value,e.class],style:[s.value,u.value,e.style],role:"listbox","aria-activedescendant":void 0,onFocusin:p,onFocusout:P,onFocus:j,onKeydown:I},{default:()=>[v(fv,{items:c.value},n)]})),{open:f,select:m,focus:E}}}),U0=Yt("v-list-img"),W0=W()({name:"VListItemAction",props:{start:Boolean,end:Boolean,...ne(),..._e()},setup(e,t){let{slots:n}=t;return X(()=>v(e.tag,{class:["v-list-item-action",{"v-list-item-action--start":e.start,"v-list-item-action--end":e.end},e.class],style:e.style},n)),{}}}),K0=W()({name:"VListItemMedia",props:{start:Boolean,end:Boolean,...ne(),..._e()},setup(e,t){let{slots:n}=t;return X(()=>v(e.tag,{class:["v-list-item-media",{"v-list-item-media--start":e.start,"v-list-item-media--end":e.end},e.class],style:e.style},n)),{}}});const gv=ye({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function yv(e,t){const n={},c=a=>()=>{if(!Xe)return Promise.resolve(!0);const l=a==="openDelay";return n.closeDelay&&window.clearTimeout(n.closeDelay),delete n.closeDelay,n.openDelay&&window.clearTimeout(n.openDelay),delete n.openDelay,new Promise(s=>{const i=parseInt(e[a]??0,10);n[a]=window.setTimeout(()=>{t==null||t(l),s(l)},i)})};return{runCloseDelay:c("closeDelay"),runOpenDelay:c("openDelay")}}const ai=Symbol.for("vuetify:v-menu"),Y0=ye({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...gv()},"v-overlay-activator");function G0(e,t){let{isActive:n,isTop:c}=t;const a=$();let l=!1,s=!1,i=!0;const r=y(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),u=y(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!r.value),{runOpenDelay:o,runCloseDelay:d}=yv(e,p=>{p===(e.openOnHover&&l||r.value&&s)&&!(e.openOnHover&&n.value&&!c.value)&&(n.value!==p&&(i=!0),n.value=p)}),f={click:p=>{p.stopPropagation(),a.value=p.currentTarget||p.target,n.value=!n.value},mouseenter:p=>{var P;(P=p.sourceCapabilities)!=null&&P.firesTouchEvents||(l=!0,a.value=p.currentTarget||p.target,o())},mouseleave:p=>{l=!1,d()},focus:p=>{Ks&&!p.target.matches(":focus-visible")||(s=!0,p.stopPropagation(),a.value=p.currentTarget||p.target,o())},blur:p=>{s=!1,p.stopPropagation(),d()}},m=y(()=>{const p={};return u.value&&(p.click=f.click),e.openOnHover&&(p.mouseenter=f.mouseenter,p.mouseleave=f.mouseleave),r.value&&(p.focus=f.focus,p.blur=f.blur),p}),h=y(()=>{const p={};if(e.openOnHover&&(p.mouseenter=()=>{l=!0,o()},p.mouseleave=()=>{l=!1,d()}),e.closeOnContentClick){const P=Ve(ai,null);p.click=()=>{n.value=!1,P==null||P.closeParents()}}return p}),g=y(()=>{const p={};return e.openOnHover&&(p.mouseenter=()=>{i&&(l=!0,i=!1,o())},p.mouseleave=()=>{l=!1,d()}),p});ae(c,p=>{p&&(e.openOnHover&&!l&&(!r.value||!s)||r.value&&!s&&(!e.openOnHover||!l))&&(n.value=!1)});const S=$();Kt(()=>{S.value&&Oe(()=>{const p=S.value;a.value=yb(p)?p.$el:p})});const b=rt("useActivator");let C;return ae(()=>!!e.activator,p=>{p&&Xe?(C=ki(),C.run(()=>{X0(e,b,{activatorEl:a,activatorEvents:m})})):C&&C.stop()},{flush:"post",immediate:!0}),Vt(()=>{C==null||C.stop()}),{activatorEl:a,activatorRef:S,activatorEvents:m,contentEvents:h,scrimEvents:g}}function X0(e,t,n){let{activatorEl:c,activatorEvents:a}=n;ae(()=>e.activator,(r,u)=>{if(u&&r!==u){const o=i(u);o&&s(o)}r&&Oe(()=>l())},{immediate:!0}),ae(()=>e.activatorProps,()=>{l()}),Vt(()=>{s()});function l(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;r&&(Object.entries(a.value).forEach(o=>{let[d,f]=o;r.addEventListener(d,f)}),Object.keys(u).forEach(o=>{u[o]==null?r.removeAttribute(o):r.setAttribute(o,u[o])}))}function s(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;r&&(Object.entries(a.value).forEach(o=>{let[d,f]=o;r.removeEventListener(d,f)}),Object.keys(u).forEach(o=>{r.removeAttribute(o)}))}function i(){var o,d;let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,u;if(r)if(r==="parent"){let f=(d=(o=t==null?void 0:t.proxy)==null?void 0:o.$el)==null?void 0:d.parentNode;for(;f.hasAttribute("data-no-activator");)f=f.parentNode;u=f}else typeof r=="string"?u=document.querySelector(r):"$el"in r?u=r.$el:u=r;return c.value=(u==null?void 0:u.nodeType)===Node.ELEMENT_NODE?u:null,c.value}}const Yl=ye({eager:Boolean},"lazy");function br(e,t){const n=$(!1),c=y(()=>n.value||e.eager||t.value);ae(t,()=>n.value=!0);function a(){e.eager||(n.value=!1)}return{isBooted:n,hasContent:c,onAfterLeave:a}}function gs(e,t){return{x:e.x+t.x,y:e.y+t.y}}function Z0(e,t){return{x:e.x-t.x,y:e.y-t.y}}function du(e,t){if(e.side==="top"||e.side==="bottom"){const{side:n,align:c}=e,a=c==="left"?0:c==="center"?t.width/2:c==="right"?t.width:c,l=n==="top"?0:n==="bottom"?t.height:n;return gs({x:a,y:l},t)}else if(e.side==="left"||e.side==="right"){const{side:n,align:c}=e,a=n==="left"?0:n==="right"?t.width:n,l=c==="top"?0:c==="center"?t.height/2:c==="bottom"?t.height:c;return gs({x:a,y:l},t)}return gs({x:t.width/2,y:t.height/2},t)}const bv={static:ep,connected:np},Q0=ye({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in bv},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"v-overlay-location-strategies");function J0(e,t){const n=$({}),c=$();Xe&&(Nn(()=>!!(t.isActive.value&&e.locationStrategy),l=>{var s,i;ae(()=>e.locationStrategy,l),Vt(()=>{c.value=void 0}),typeof e.locationStrategy=="function"?c.value=(s=e.locationStrategy(t,e,n))==null?void 0:s.updateLocation:c.value=(i=bv[e.locationStrategy](t,e,n))==null?void 0:i.updateLocation}),window.addEventListener("resize",a,{passive:!0}),Vt(()=>{window.removeEventListener("resize",a),c.value=void 0}));function a(l){var s;(s=c.value)==null||s.call(c,l)}return{contentStyles:n,updateLocation:c}}function ep(){}function tp(e,t){const n=Gi(e);return t?n.x+=parseFloat(e.style.right||0):n.x-=parseFloat(e.style.left||0),n.y-=parseFloat(e.style.top||0),n}function np(e,t,n){Hb(e.activatorEl.value)&&Object.assign(n.value,{position:"fixed"});const{preferredAnchor:a,preferredOrigin:l}=Wi(()=>{const h=zs(t.location,e.isRtl.value),g=t.origin==="overlap"?h:t.origin==="auto"?rs(h):zs(t.origin,e.isRtl.value);return h.side===g.side&&h.align===os(g).align?{preferredAnchor:Oo(h),preferredOrigin:Oo(g)}:{preferredAnchor:h,preferredOrigin:g}}),[s,i,r,u]=["minWidth","minHeight","maxWidth","maxHeight"].map(h=>y(()=>{const g=parseFloat(t[h]);return isNaN(g)?1/0:g})),o=y(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const h=t.offset.split(" ").map(parseFloat);return h.length<2&&h.push(0),h}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let d=!1;const f=new ResizeObserver(()=>{d&&m()});ae([e.activatorEl,e.contentEl],(h,g)=>{let[S,b]=h,[C,p]=g;C&&f.unobserve(C),S&&f.observe(S),p&&f.unobserve(p),b&&f.observe(b)},{immediate:!0}),Vt(()=>{f.disconnect()});function m(){if(d=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>d=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const h=e.activatorEl.value.getBoundingClientRect(),g=tp(e.contentEl.value,e.isRtl.value),S=bl(e.contentEl.value),b=12;S.length||(S.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(g.x+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),g.y+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const C=S.reduce((V,w)=>{const M=w.getBoundingClientRect(),N=new Tc({x:w===document.documentElement?0:M.x,y:w===document.documentElement?0:M.y,width:w.clientWidth,height:w.clientHeight});return V?new Tc({x:Math.max(V.left,N.left),y:Math.max(V.top,N.top),width:Math.min(V.right,N.right)-Math.max(V.left,N.left),height:Math.min(V.bottom,N.bottom)-Math.max(V.top,N.top)}):N},void 0);C.x+=b,C.y+=b,C.width-=b*2,C.height-=b*2;let p={anchor:a.value,origin:l.value};function P(V){const w=new Tc(g),M=du(V.anchor,h),N=du(V.origin,w);let{x:Z,y:F}=Z0(M,N);switch(V.anchor.side){case"top":F-=o.value[0];break;case"bottom":F+=o.value[0];break;case"left":Z-=o.value[0];break;case"right":Z+=o.value[0];break}switch(V.anchor.align){case"top":F-=o.value[1];break;case"bottom":F+=o.value[1];break;case"left":Z-=o.value[1];break;case"right":Z+=o.value[1];break}return w.x+=Z,w.y+=F,w.width=Math.min(w.width,r.value),w.height=Math.min(w.height,u.value),{overflows:Fo(w,C),x:Z,y:F}}let j=0,I=0;const E={x:0,y:0},k={x:!1,y:!1};let x=-1;for(;;){if(x++>10){Us("Infinite loop detected in connectedLocationStrategy");break}const{x:V,y:w,overflows:M}=P(p);j+=V,I+=w,g.x+=V,g.y+=w;{const N=Lo(p.anchor),Z=M.x.before||M.x.after,F=M.y.before||M.y.after;let H=!1;if(["x","y"].forEach(D=>{if(D==="x"&&Z&&!k.x||D==="y"&&F&&!k.y){const J={anchor:{...p.anchor},origin:{...p.origin}},R=D==="x"?N==="y"?os:rs:N==="y"?rs:os;J.anchor=R(J.anchor),J.origin=R(J.origin);const{overflows:K}=P(J);(K[D].before<=M[D].before&&K[D].after<=M[D].after||K[D].before+K[D].after<(M[D].before+M[D].after)/2)&&(p=J,H=k[D]=!0)}}),H)continue}M.x.before&&(j+=M.x.before,g.x+=M.x.before),M.x.after&&(j-=M.x.after,g.x-=M.x.after),M.y.before&&(I+=M.y.before,g.y+=M.y.before),M.y.after&&(I-=M.y.after,g.y-=M.y.after);{const N=Fo(g,C);E.x=C.width-N.x.before-N.x.after,E.y=C.height-N.y.before-N.y.after,j+=N.x.before,g.x+=N.x.before,I+=N.y.before,g.y+=N.y.before}break}const q=Lo(p.anchor);return Object.assign(n.value,{"--v-overlay-anchor-origin":`${p.anchor.side} ${p.anchor.align}`,transformOrigin:`${p.origin.side} ${p.origin.align}`,top:ie(ys(I)),left:e.isRtl.value?void 0:ie(ys(j)),right:e.isRtl.value?ie(ys(-j)):void 0,minWidth:ie(q==="y"?Math.min(s.value,h.width):s.value),maxWidth:ie(fu(ft(E.x,s.value===1/0?0:s.value,r.value))),maxHeight:ie(fu(ft(E.y,i.value===1/0?0:i.value,u.value)))}),{available:E,contentBox:g}}return ae(()=>[a.value,l.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>m()),Oe(()=>{const h=m();if(!h)return;const{available:g,contentBox:S}=h;S.height>g.y&&requestAnimationFrame(()=>{m(),requestAnimationFrame(()=>{m()})})}),{updateLocation:m}}function ys(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function fu(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let li=!0;const Sl=[];function cp(e){!li||Sl.length?(Sl.push(e),si()):(li=!1,e(),si())}let vu=-1;function si(){cancelAnimationFrame(vu),vu=requestAnimationFrame(()=>{const e=Sl.shift();e&&e(),Sl.length?si():li=!0})}const rl={none:null,close:sp,block:ip,reposition:rp},ap=ye({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in rl}},"v-overlay-scroll-strategies");function lp(e,t){if(!Xe)return;let n;Kt(async()=>{n==null||n.stop(),t.isActive.value&&e.scrollStrategy&&(n=ki(),await Oe(),n.active&&n.run(()=>{var c;typeof e.scrollStrategy=="function"?e.scrollStrategy(t,e,n):(c=rl[e.scrollStrategy])==null||c.call(rl,t,e,n)}))}),Vt(()=>{n==null||n.stop()})}function sp(e){function t(n){e.isActive.value=!1}pv(e.activatorEl.value??e.contentEl.value,t)}function ip(e,t){var s;const n=(s=e.root.value)==null?void 0:s.offsetParent,c=[...new Set([...bl(e.activatorEl.value,t.contained?n:void 0),...bl(e.contentEl.value,t.contained?n:void 0)])].filter(i=>!i.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,l=(i=>Ji(i)&&i)(n||document.documentElement);l&&e.root.value.classList.add("v-overlay--scroll-blocked"),c.forEach((i,r)=>{i.style.setProperty("--v-body-scroll-x",ie(-i.scrollLeft)),i.style.setProperty("--v-body-scroll-y",ie(-i.scrollTop)),i.style.setProperty("--v-scrollbar-offset",ie(a)),i.classList.add("v-overlay-scroll-blocked")}),Vt(()=>{c.forEach((i,r)=>{const u=parseFloat(i.style.getPropertyValue("--v-body-scroll-x")),o=parseFloat(i.style.getPropertyValue("--v-body-scroll-y"));i.style.removeProperty("--v-body-scroll-x"),i.style.removeProperty("--v-body-scroll-y"),i.style.removeProperty("--v-scrollbar-offset"),i.classList.remove("v-overlay-scroll-blocked"),i.scrollLeft=-u,i.scrollTop=-o}),l&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function rp(e,t,n){let c=!1,a=-1,l=-1;function s(i){cp(()=>{var o,d;const r=performance.now();(d=(o=e.updateLocation).value)==null||d.call(o,i),c=(performance.now()-r)/(1e3/60)>2})}l=(typeof requestIdleCallback>"u"?i=>i():requestIdleCallback)(()=>{n.run(()=>{pv(e.activatorEl.value??e.contentEl.value,i=>{c?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{s(i)})})):s(i)})})}),Vt(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(l),cancelAnimationFrame(a)})}function pv(e,t){const n=[document,...bl(e)];n.forEach(c=>{c.addEventListener("scroll",t,{passive:!0})}),Vt(()=>{n.forEach(c=>{c.removeEventListener("scroll",t)})})}function kv(){if(!Xe)return $(!1);const{ssr:e}=hc();if(e){const t=$(!1);return mt(()=>{t.value=!0}),t}else return $(!0)}function Na(){const t=rt("useScopeId").vnode.scopeId;return{scopeId:t?{[t]:""}:void 0}}const mu=Symbol.for("vuetify:stack"),ra=st([]);function op(e,t,n){const c=rt("useStack"),a=!n,l=Ve(mu,void 0),s=st({activeChildren:new Set});Ke(mu,s);const i=$(+t.value);Nn(e,()=>{var d;const o=(d=ra.at(-1))==null?void 0:d[1];i.value=o?o+10:+t.value,a&&ra.push([c.uid,i.value]),l==null||l.activeChildren.add(c.uid),Vt(()=>{if(a){const f=xe(ra).findIndex(m=>m[0]===c.uid);ra.splice(f,1)}l==null||l.activeChildren.delete(c.uid)})});const r=$(!0);a&&Kt(()=>{var d;const o=((d=ra.at(-1))==null?void 0:d[0])===c.uid;setTimeout(()=>r.value=o)});const u=y(()=>!s.activeChildren.size);return{globalTop:$a(r),localTop:u,stackStyles:y(()=>({zIndex:i.value}))}}function up(e){return{teleportTarget:y(()=>{const n=e.value;if(n===!0||!Xe)return;const c=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(c==null)return;let a=c.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",c.appendChild(a)),a})}}function dp(){return!0}function Sv(e,t,n){if(!e||Cv(e,n)===!1)return!1;const c=mf(t);if(typeof ShadowRoot<"u"&&c instanceof ShadowRoot&&c.host===e.target)return!1;const a=(typeof n.value=="object"&&n.value.include||(()=>[]))();return a.push(t),!a.some(l=>l==null?void 0:l.contains(e.target))}function Cv(e,t){return(typeof t.value=="object"&&t.value.closeConditional||dp)(e)}function fp(e,t,n){const c=typeof n.value=="function"?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&Sv(e,t,n)&&setTimeout(()=>{Cv(e,n)&&c&&c(e)},0)}function hu(e,t){const n=mf(e);t(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&t(n)}const _v={mounted(e,t){const n=a=>fp(a,e,t),c=a=>{e._clickOutside.lastMousedownWasOutside=Sv(a,e,t)};hu(e,a=>{a.addEventListener("click",n,!0),a.addEventListener("mousedown",c,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:c}},unmounted(e,t){e._clickOutside&&(hu(e,n=>{var l;if(!n||!((l=e._clickOutside)!=null&&l[t.instance.$.uid]))return;const{onClick:c,onMousedown:a}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",c,!0),n.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[t.instance.$.uid])}};function vp(e){const{modelValue:t,color:n,...c}=e;return v(ln,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&v("div",le({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},c),null)]})}const Da=ye({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3},...Y0(),...ne(),...Rt(),...Yl(),...Q0(),...ap(),...Ie(),...jn()},"v-overlay"),Sn=W()({name:"VOverlay",directives:{ClickOutside:_v},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Da()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,t){let{slots:n,attrs:c,emit:a}=t;const l=Ce(e,"modelValue"),s=y({get:()=>l.value,set:J=>{J&&e.disabled||(l.value=J)}}),{teleportTarget:i}=up(y(()=>e.attach||e.contained)),{themeClasses:r}=Pe(e),{rtlClasses:u,isRtl:o}=wn(),{hasContent:d,onAfterLeave:f}=br(e,s),m=Ze(y(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:h,localTop:g,stackStyles:S}=op(s,Y(e,"zIndex"),e._disableGlobalStack),{activatorEl:b,activatorRef:C,activatorEvents:p,contentEvents:P,scrimEvents:j}=G0(e,{isActive:s,isTop:g}),{dimensionStyles:I}=Ot(e),E=kv(),{scopeId:k}=Na();ae(()=>e.disabled,J=>{J&&(s.value=!1)});const x=$(),q=$(),{contentStyles:V,updateLocation:w}=J0(e,{isRtl:o,contentEl:q,activatorEl:b,isActive:s});lp(e,{root:x,contentEl:q,activatorEl:b,isActive:s,updateLocation:w});function M(J){a("click:outside",J),e.persistent?D():s.value=!1}function N(){return s.value&&h.value}Xe&&ae(s,J=>{J?window.addEventListener("keydown",Z):window.removeEventListener("keydown",Z)},{immediate:!0});function Z(J){J.key==="Escape"&&h.value&&(e.persistent?D():s.value=!1)}const F=Uf();Nn(()=>e.closeOnBack,()=>{y0(F,J=>{h.value&&s.value?(J(!1),e.persistent?D():s.value=!1):J()})});const H=$();ae(()=>s.value&&(e.absolute||e.contained)&&i.value==null,J=>{if(J){const R=gf(x.value);R&&R!==document.scrollingElement&&(H.value=R.scrollTop)}});function D(){e.noClickAnimation||q.value&&sc(q.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:Va})}return X(()=>{var J;return v(me,null,[(J=n.activator)==null?void 0:J.call(n,{isActive:s.value,props:le({ref:C},Ql(p.value),e.activatorProps)}),E.value&&v(Gh,{disabled:!i.value,to:i.value},{default:()=>[d.value&&v("div",le({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},r.value,u.value,e.class],style:[S.value,{top:ie(H.value)},e.style],ref:x},k,c),[v(vp,le({color:m,modelValue:s.value&&!!e.scrim},Ql(j.value)),null),v(Ht,{appear:!0,persisted:!0,transition:e.transition,target:b.value,onAfterLeave:()=>{f(),a("afterLeave")}},{default:()=>{var R;return[He(v("div",le({ref:q,class:["v-overlay__content",e.contentClass],style:[I.value,V.value]},Ql(P.value),e.contentProps),[(R=n.default)==null?void 0:R.call(n,{isActive:s})]),[[on,s.value],[Ct("click-outside"),{handler:M,closeConditional:N,include:()=>[b.value]}]])]}})])]})])}),{activatorEl:b,animateClick:D,contentEl:q,globalTop:h,localTop:g,updateLocation:w}}}),Gl=W()({name:"VMenu",props:{id:String,...un(Da({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:Ol}}),["absolute"])},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const c=Ce(e,"modelValue"),{scopeId:a}=Na(),l=ht(),s=y(()=>e.id||`v-menu-${l}`),i=$(),r=Ve(ai,null),u=$(0);Ke(ai,{register(){++u.value},unregister(){--u.value},closeParents(){setTimeout(()=>{u.value||(c.value=!1,r==null||r.closeParents())},40)}}),ae(c,f=>{f?r==null||r.register():r==null||r.unregister()});function o(){r==null||r.closeParents()}const d=y(()=>le({"aria-haspopup":"menu","aria-expanded":String(c.value),"aria-owns":s.value},e.activatorProps));return X(()=>{const[f]=Sn.filterProps(e);return v(Sn,le({ref:i,class:["v-menu",e.class],style:e.style},f,{modelValue:c.value,"onUpdate:modelValue":m=>c.value=m,absolute:!0,activatorProps:d.value,"onClick:outside":o},a),{activator:n.activator,default:function(){for(var m=arguments.length,h=new Array(m),g=0;g<m;g++)h[g]=arguments[g];return v($e,{root:!0},{default:()=>{var S;return[(S=n.default)==null?void 0:S.call(n,...h)]}})}})}),Gt({id:s,ΨopenChildren:u},i)}}),pr=ye({chips:Boolean,closableChips:Boolean,eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:pe,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,valueComparator:{type:Function,default:vc},...vv({itemChildren:!1})},"v-select"),mp=W()({name:"VSelect",props:{...pr(),...un(Ul({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...jn({transition:{component:Ol}})},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,t){let{slots:n}=t;const{t:c}=Bt(),a=$(),l=$(),s=Ce(e,"menu"),i=y({get:()=>s.value,set:V=>{var w;s.value&&!V&&((w=l.value)!=null&&w.ΨopenChildren)||(s.value=V)}}),{items:r,transformIn:u,transformOut:o}=yr(e),d=Ce(e,"modelValue",[],V=>u(Tt(V)),V=>{const w=o(V);return e.multiple?w:w[0]??null}),f=zl(),m=y(()=>d.value.map(V=>r.value.find(w=>e.valueComparator(w.value,V.value))||V)),h=y(()=>m.value.map(V=>V.props.value)),g=$(!1);let S="",b;const C=y(()=>e.hideSelected?r.value.filter(V=>!m.value.some(w=>w===V)):r.value),p=$();function P(V){e.openOnClear&&(i.value=!0)}function j(){e.hideNoData&&!r.value.length||e.readonly||f!=null&&f.isReadonly.value||(i.value=!i.value)}function I(V){var F,H,D,J;if(e.readonly||f!=null&&f.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(V.key)&&V.preventDefault(),["Enter","ArrowDown"," "].includes(V.key)&&(i.value=!0),["Escape","Tab"].includes(V.key)&&(i.value=!1),V.key==="ArrowDown"?(F=p.value)==null||F.focus("next"):V.key==="ArrowUp"?(H=p.value)==null||H.focus("prev"):V.key==="Home"?(D=p.value)==null||D.focus("first"):V.key==="End"&&((J=p.value)==null||J.focus("last"));const w=1e3;function M(R){const K=R.key.length===1,z=!R.ctrlKey&&!R.metaKey&&!R.altKey;return K&&z}if(e.multiple||!M(V))return;const N=performance.now();N-b>w&&(S=""),S+=V.key.toLowerCase(),b=N;const Z=r.value.find(R=>R.title.toLowerCase().startsWith(S));Z!==void 0&&(d.value=[Z])}function E(V){if(e.multiple){const w=h.value.findIndex(M=>e.valueComparator(M,V.value));if(w===-1)d.value=[...d.value,V];else{const M=[...d.value];M.splice(w,1),d.value=M}}else d.value=[V],i.value=!1}function k(V){var w;(w=p.value)!=null&&w.$el.contains(V.relatedTarget)||(i.value=!1)}function x(V){g.value=!0}function q(V){var w;V.relatedTarget==null&&((w=a.value)==null||w.focus())}return X(()=>{const V=!!(e.chips||n.chip),w=!!(!e.hideNoData||C.value.length||n.prepend||n.append||n["no-data"]),M=d.value.length>0,[N]=fc.filterProps(e),Z=M||!g.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return v(fc,le({ref:a},N,{modelValue:d.value.map(F=>F.props.value).join(", "),"onUpdate:modelValue":F=>{F==null&&(d.value=[])},focused:g.value,"onUpdate:focused":F=>g.value=F,validationValue:d.externalValue,dirty:M,class:["v-select",{"v-select--active-menu":i.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":d.value.length},e.class],style:e.style,appendInnerIcon:e.menuIcon,readonly:!0,placeholder:Z,"onClick:clear":P,"onMousedown:control":j,onBlur:k,onKeydown:I}),{...n,default:()=>v(me,null,[v(Gl,le({ref:l,modelValue:i.value,"onUpdate:modelValue":F=>i.value=F,activator:"parent",contentClass:"v-select__content",eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition},e.menuProps),{default:()=>[w&&v(Kl,{ref:p,selected:h.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:F=>F.preventDefault(),onFocusin:x,onFocusout:q},{default:()=>{var F,H,D;return[!C.value.length&&!e.hideNoData&&(((F=n["no-data"])==null?void 0:F.call(n))??v(kn,{title:c(e.noDataText)},null)),(H=n["prepend-item"])==null?void 0:H.call(n),C.value.map((J,R)=>{var K;return n.item?(K=n.item)==null?void 0:K.call(n,{item:J,index:R,props:le(J.props,{onClick:()=>E(J)})}):v(kn,le({key:R},J.props,{onClick:()=>E(J)}),{prepend:z=>{let{isSelected:fe}=z;return v(me,null,[e.multiple&&!e.hideSelected?v(Nc,{modelValue:fe,ripple:!1,tabindex:"-1"},null):void 0,J.props.prependIcon&&v(ze,{icon:J.props.prependIcon},null)])}})}),(D=n["append-item"])==null?void 0:D.call(n)]}})]}),m.value.map((F,H)=>{var R;function D(K){K.stopPropagation(),K.preventDefault(),E(F)}const J={"onClick:close":D,onMousedown(K){K.preventDefault(),K.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0};return v("div",{key:F.value,class:"v-select__selection"},[V?n.chip?v($e,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:F.title}}},{default:()=>{var K;return[(K=n.chip)==null?void 0:K.call(n,{item:F,index:H,props:J})]}}):v(Fa,le({key:"chip",closable:e.closableChips,size:"small",text:F.title},J),null):((R=n.selection)==null?void 0:R.call(n,{item:F,index:H}))??v("span",{class:"v-select__selection-text"},[F.title,e.multiple&&H<m.value.length-1&&v("span",{class:"v-select__selection-comma"},[lt(",")])])])})])})}),Gt({isFocused:g,menu:i,select:E},a)}}),hp=(e,t,n)=>e==null||t==null?-1:e.toString().toLocaleLowerCase().indexOf(t.toString().toLocaleLowerCase()),xv=ye({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function gp(e,t,n){var i;const c=[],a=(n==null?void 0:n.default)??hp,l=n!=null&&n.filterKeys?Tt(n.filterKeys):!1,s=Object.keys((n==null?void 0:n.customKeyFilter)??{}).length;if(!(e!=null&&e.length))return c;e:for(let r=0;r<e.length;r++){const u=e[r],o={},d={};let f=-1;if(t&&!(n!=null&&n.noFilter)){if(typeof u=="object"){const g=l||Object.keys(u);for(const S of g){const b=tn(u,S,u),C=(i=n==null?void 0:n.customKeyFilter)==null?void 0:i[S];if(f=C?C(b,t,u):a(b,t,u),f!==-1&&f!==!1)C?o[S]=f:d[S]=f;else if((n==null?void 0:n.filterMode)==="every")continue e}}else f=a(u,t,u),f!==-1&&f!==!1&&(d.title=f);const m=Object.keys(d).length,h=Object.keys(o).length;if(!m&&!h||(n==null?void 0:n.filterMode)==="union"&&h!==s&&!m||(n==null?void 0:n.filterMode)==="intersection"&&(h!==s||!m))continue}c.push({index:r,matches:{...d,...o}})}return c}function wv(e,t,n,c){const a=y(()=>typeof(n==null?void 0:n.value)!="string"&&typeof(n==null?void 0:n.value)!="number"?"":String(n.value)),l=$([]),s=$(new Map);Kt(()=>{l.value=[],s.value=new Map;const r=dt(t);gp(r,a.value,{customKeyFilter:e.customKeyFilter,default:e.customFilter,filterKeys:dt(c==null?void 0:c.filterKeys)??e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}).forEach(o=>{let{index:d,matches:f}=o;const m=r[d];l.value.push(m),s.value.set(m.value,f)})});function i(r){return s.value.get(r.value)}return{filteredItems:l,filteredMatches:s,getMatches:i}}function yp(e,t,n){if(t==null)return e;if(Array.isArray(t))throw new Error("Multiple matches is not implemented");return typeof t=="number"&&~t?v(me,null,[v("span",{class:"v-autocomplete__unmask"},[e.substr(0,t)]),v("span",{class:"v-autocomplete__mask"},[e.substr(t,n)]),v("span",{class:"v-autocomplete__unmask"},[e.substr(t+n)])]):e}const bp=W()({name:"VAutocomplete",props:{search:String,...xv({filterKeys:["title"]}),...pr(),...un(Ul({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...jn({transition:!1})},emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,t){let{slots:n}=t;const{t:c}=Bt(),a=$(),l=$(!1),s=$(!0),i=$(),r=Ce(e,"menu"),u=y({get:()=>r.value,set:R=>{var K;r.value&&!R&&((K=i.value)!=null&&K.ΨopenChildren)||(r.value=R)}}),o=$(-1),d=y(()=>{var R;return(R=a.value)==null?void 0:R.color}),{items:f,transformIn:m,transformOut:h}=yr(e),{textColorClasses:g,textColorStyles:S}=vt(d),b=Ce(e,"search",""),C=Ce(e,"modelValue",[],R=>m(Tt(R)),R=>{const K=h(R);return e.multiple?K:K[0]??null}),p=zl(),{filteredItems:P,getMatches:j}=wv(e,f,y(()=>s.value?void 0:b.value)),I=y(()=>C.value.map(R=>f.value.find(K=>e.valueComparator(K.value,R.value))||R)),E=y(()=>e.hideSelected?P.value.filter(R=>!I.value.some(K=>K.value===R.value)):P.value),k=y(()=>I.value.map(R=>R.props.value)),x=y(()=>I.value[o.value]),q=$();function V(R){e.openOnClear&&(u.value=!0),b.value=""}function w(){e.hideNoData&&!f.value.length||e.readonly||p!=null&&p.isReadonly.value||(u.value=!0)}function M(R){var fe,ue,B,T;if(e.readonly||p!=null&&p.isReadonly.value)return;const K=a.value.selectionStart,z=k.value.length;if((o.value>-1||["Enter","ArrowDown","ArrowUp"].includes(R.key))&&R.preventDefault(),["Enter","ArrowDown"].includes(R.key)&&(u.value=!0),["Escape"].includes(R.key)&&(u.value=!1),["Enter","Escape","Tab"].includes(R.key)&&(s.value=!0),R.key==="ArrowDown"?(fe=q.value)==null||fe.focus("next"):R.key==="ArrowUp"&&((ue=q.value)==null||ue.focus("prev")),!!e.multiple){if(["Backspace","Delete"].includes(R.key)){if(o.value<0){R.key==="Backspace"&&!b.value&&(o.value=z-1);return}const O=o.value;x.value&&J(x.value),o.value=O>=z-1?z-2:O}if(R.key==="ArrowLeft"){if(o.value<0&&K>0)return;const O=o.value>-1?o.value-1:z-1;I.value[O]?o.value=O:(o.value=-1,a.value.setSelectionRange((B=b.value)==null?void 0:B.length,(T=b.value)==null?void 0:T.length))}if(R.key==="ArrowRight"){if(o.value<0)return;const O=o.value+1;I.value[O]?o.value=O:(o.value=-1,a.value.setSelectionRange(0,0))}}}function N(R){b.value=R.target.value}function Z(){l.value&&(s.value=!0)}function F(R){l.value=!0}function H(R){var K;R.relatedTarget==null&&((K=a.value)==null||K.focus())}const D=$(!1);function J(R){if(e.multiple){const K=k.value.findIndex(z=>e.valueComparator(z,R.value));if(K===-1)C.value=[...C.value,R];else{const z=[...C.value];z.splice(K,1),C.value=z}}else C.value=[R],D.value=!0,n.selection||(b.value=R.title),u.value=!1,s.value=!0,Oe(()=>D.value=!1)}return ae(l,R=>{var K;R?(D.value=!0,b.value=e.multiple||n.selection?"":String(((K=I.value.at(-1))==null?void 0:K.props.title)??""),s.value=!0,Oe(()=>D.value=!1)):(!e.multiple&&!b.value&&(C.value=[]),u.value=!1,b.value="")}),ae(b,R=>{!l.value||D.value||(R&&(u.value=!0),s.value=!R)}),X(()=>{const R=!!(e.chips||n.chip),K=!!(!e.hideNoData||E.value.length||n.prepend||n.append||n["no-data"]),z=C.value.length>0,[fe]=fc.filterProps(e);return v(fc,le({ref:a},fe,{modelValue:b.value,"onUpdate:modelValue":ue=>{ue==null&&(C.value=[])},focused:l.value,"onUpdate:focused":ue=>l.value=ue,validationValue:C.externalValue,dirty:z,onInput:N,class:["v-autocomplete",{"v-autocomplete--active-menu":u.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selecting-index":o.value>-1,[`v-autocomplete--${e.multiple?"multiple":"single"}`]:!0,"v-autocomplete--selection-slot":!!n.selection},e.class],style:e.style,appendInnerIcon:e.menuIcon,readonly:e.readonly,placeholder:z?void 0:e.placeholder,"onClick:clear":V,"onMousedown:control":w,onKeydown:M}),{...n,default:()=>v(me,null,[v(Gl,le({ref:i,modelValue:u.value,"onUpdate:modelValue":ue=>u.value=ue,activator:"parent",contentClass:"v-autocomplete__content",eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:Z},e.menuProps),{default:()=>[K&&v(Kl,{ref:q,selected:k.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:ue=>ue.preventDefault(),onFocusin:F,onFocusout:H},{default:()=>{var ue,B,T;return[!E.value.length&&!e.hideNoData&&(((ue=n["no-data"])==null?void 0:ue.call(n))??v(kn,{title:c(e.noDataText)},null)),(B=n["prepend-item"])==null?void 0:B.call(n),E.value.map(O=>{var re;return((re=n.item)==null?void 0:re.call(n,{item:O,props:le(O.props,{onClick:()=>J(O)})}))??v(kn,le({key:O.value},O.props,{onClick:()=>J(O)}),{prepend:oe=>{let{isSelected:je}=oe;return v(me,null,[e.multiple&&!e.hideSelected?v(Nc,{modelValue:je,ripple:!1,tabindex:"-1"},null):void 0,O.props.prependIcon&&v(ze,{icon:O.props.prependIcon},null)])},title:()=>{var oe,je;return s.value?O.title:yp(O.title,(oe=j(O))==null?void 0:oe.title,((je=b.value)==null?void 0:je.length)??0)}})}),(T=n["append-item"])==null?void 0:T.call(n)]}})]}),I.value.map((ue,B)=>{var re;function T(oe){oe.stopPropagation(),oe.preventDefault(),J(ue)}const O={"onClick:close":T,onMousedown(oe){oe.preventDefault(),oe.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0};return v("div",{key:ue.value,class:["v-autocomplete__selection",B===o.value&&["v-autocomplete__selection--selected",g.value]],style:B===o.value?S.value:{}},[R?n.chip?v($e,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:ue.title}}},{default:()=>{var oe;return[(oe=n.chip)==null?void 0:oe.call(n,{item:ue,index:B,props:O})]}}):v(Fa,le({key:"chip",closable:e.closableChips,size:"small",text:ue.title},O),null):((re=n.selection)==null?void 0:re.call(n,{item:ue,index:B}))??v("span",{class:"v-autocomplete__selection-text"},[ue.title,e.multiple&&B<I.value.length-1&&v("span",{class:"v-autocomplete__selection-comma"},[lt(",")])])])})])})}),Gt({isFocused:l,isPristine:s,menu:u,search:b,filteredItems:P,select:J},a)}});const pp=W()({name:"VBadge",inheritAttrs:!1,props:{bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:pe,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...ne(),...Wn({location:"top end"}),...De(),..._e(),...Ie(),...jn({transition:"scale-rotate-transition"})},setup(e,t){const{backgroundColorClasses:n,backgroundColorStyles:c}=Ze(Y(e,"color")),{roundedClasses:a}=Ue(e),{t:l}=Bt(),{textColorClasses:s,textColorStyles:i}=vt(Y(e,"textColor")),{themeClasses:r}=_f(),{locationStyles:u}=Kn(e,!0,o=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(o)?+(e.offsetY??0):["left","right"].includes(o)?+(e.offsetX??0):0));return X(()=>{const o=Number(e.content),d=!e.max||isNaN(o)?e.content:o<=+e.max?o:`${e.max}+`,[f,m]=Wc(t.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return v(e.tag,le({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},m,{style:e.style}),{default:()=>{var h,g;return[v("div",{class:"v-badge__wrapper"},[(g=(h=t.slots).default)==null?void 0:g.call(h),v(Ht,{transition:e.transition},{default:()=>{var S,b;return[He(v("span",le({class:["v-badge__badge",r.value,n.value,a.value,s.value],style:[c.value,i.value,e.inline?{}:u.value],"aria-atomic":"true","aria-label":l(e.label,o),"aria-live":"polite",role:"status"},f),[e.dot?void 0:t.slots.badge?(b=(S=t.slots).badge)==null?void 0:b.call(S):e.icon?v(ze,{icon:e.icon},null):d]),[[on,e.modelValue]])]}})])]}})}),{}}});const jv=W()({name:"VBannerActions",props:{color:String,density:String,...ne()},setup(e,t){let{slots:n}=t;return Je({VBtn:{color:e.color,density:e.density,variant:"text"}}),X(()=>{var c;return v("div",{class:["v-banner-actions",e.class],style:e.style},[(c=n.default)==null?void 0:c.call(n)])}),{}}}),qv=Yt("v-banner-text"),kp=W()({name:"VBanner",props:{avatar:String,color:String,icon:pe,lines:String,stacked:Boolean,sticky:Boolean,text:String,...Et(),...ne(),...nt(),...Rt(),...tt(),...Wn(),...ea(),...De(),..._e(),...Ie()},setup(e,t){let{slots:n}=t;const{borderClasses:c}=Lt(e),{densityClasses:a}=gt(e),{mobile:l}=hc(),{dimensionStyles:s}=Ot(e),{elevationClasses:i}=ot(e),{locationStyles:r}=Kn(e),{positionClasses:u}=ta(e),{roundedClasses:o}=Ue(e),{themeClasses:d}=Pe(e),f=Y(e,"color"),m=Y(e,"density");Je({VBannerActions:{color:f,density:m}}),X(()=>{const h=!!(e.text||n.text),g=!!(e.avatar||e.icon),S=!!(g||n.prepend);return v(e.tag,{class:["v-banner",{"v-banner--stacked":e.stacked||l.value,"v-banner--sticky":e.sticky,[`v-banner--${e.lines}-line`]:!!e.lines},c.value,a.value,i.value,u.value,o.value,d.value,e.class],style:[s.value,r.value,e.style],role:"banner"},{default:()=>{var b;return[S&&v("div",{key:"prepend",class:"v-banner__prepend"},[n.prepend?v($e,{key:"prepend-defaults",disabled:!g,defaults:{VAvatar:{color:f.value,density:m.value,icon:e.icon,image:e.avatar}}},n.prepend):v(Dn,{key:"prepend-avatar",color:f.value,density:m.value,icon:e.icon,image:e.avatar},null)]),v("div",{class:"v-banner__content"},[h&&v(qv,{key:"text"},{default:()=>{var C;return[((C=n.text)==null?void 0:C.call(n))??e.text]}}),(b=n.default)==null?void 0:b.call(n)]),n.actions&&v(jv,{key:"actions"},n.actions)]}})})}});const Sp=W()({name:"VBottomNavigation",props:{bgColor:String,color:String,grow:Boolean,mode:{type:String,validator:e=>!e||["horizontal","shift"].includes(e)},height:{type:[Number,String],default:56},active:{type:Boolean,default:!0},...Et(),...ne(),...nt(),...tt(),...De(),...Kc({name:"bottom-navigation"}),..._e({tag:"header"}),...Xc({modelValue:!0,selectedClass:"v-btn--selected"}),...Ie()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const{themeClasses:c}=_f(),{borderClasses:a}=Lt(e),{backgroundColorClasses:l,backgroundColorStyles:s}=Ze(Y(e,"bgColor")),{densityClasses:i}=gt(e),{elevationClasses:r}=ot(e),{roundedClasses:u}=Ue(e),{ssrBootStyles:o}=gc(),d=y(()=>Number(e.height)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0)),f=Y(e,"active"),{layoutItemStyles:m}=Yc({id:e.name,order:y(()=>parseInt(e.order,10)),position:y(()=>"bottom"),layoutSize:y(()=>f.value?d.value:0),elementSize:d,active:f,absolute:Y(e,"absolute")});return pc(e,ir),Je({VBtn:{color:Y(e,"color"),density:Y(e,"density"),stacked:y(()=>e.mode!=="horizontal"),variant:"text"}},{scoped:!0}),X(()=>v(e.tag,{class:["v-bottom-navigation",{"v-bottom-navigation--active":f.value,"v-bottom-navigation--grow":e.grow,"v-bottom-navigation--shift":e.mode==="shift"},c.value,l.value,a.value,i.value,r.value,u.value,e.class],style:[s.value,m.value,{height:ie(d.value),transform:`translateY(${ie(f.value?0:100,"%")})`},o.value,e.style]},{default:()=>[n.default&&v("div",{class:"v-bottom-navigation__content"},[n.default()])]})),{}}});const Vv=W()({name:"VBreadcrumbsDivider",props:{divider:[Number,String],...ne()},setup(e,t){let{slots:n}=t;return X(()=>{var c;return v("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[((c=n==null?void 0:n.default)==null?void 0:c.call(n))??e.divider])}),{}}}),Iv=W()({name:"VBreadcrumbsItem",props:{active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...ne(),...Oa(),..._e({tag:"li"})},setup(e,t){let{slots:n,attrs:c}=t;const a=Ra(e,c),l=y(()=>{var u;return e.active||((u=a.isActive)==null?void 0:u.value)}),s=y(()=>l.value?e.activeColor:e.color),{textColorClasses:i,textColorStyles:r}=vt(s);return X(()=>{const u=a.isLink.value?"a":e.tag;return v(u,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":l.value,"v-breadcrumbs-item--disabled":e.disabled,"v-breadcrumbs-item--link":a.isLink.value,[`${e.activeClass}`]:l.value&&e.activeClass},i.value,e.class],style:[r.value,e.style],href:a.href.value,"aria-current":l.value?"page":void 0,onClick:a.navigate},{default:()=>{var o;return[((o=n.default)==null?void 0:o.call(n))??e.title]}})}),{}}}),Cp=W()({name:"VBreadcrumbs",props:{activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:pe,items:{type:Array,default:()=>[]},...ne(),...nt(),...De(),..._e({tag:"ul"})},setup(e,t){let{slots:n}=t;const{backgroundColorClasses:c,backgroundColorStyles:a}=Ze(Y(e,"bgColor")),{densityClasses:l}=gt(e),{roundedClasses:s}=Ue(e);Je({VBreadcrumbsDivider:{divider:Y(e,"divider")},VBreadcrumbsItem:{activeClass:Y(e,"activeClass"),activeColor:Y(e,"activeColor"),color:Y(e,"color"),disabled:Y(e,"disabled")}});const i=y(()=>e.items.map(r=>typeof r=="string"?{item:{title:r},raw:r}:{item:r,raw:r}));return X(()=>{const r=!!(n.prepend||e.icon);return v(e.tag,{class:["v-breadcrumbs",c.value,l.value,s.value,e.class],style:[a.value,e.style]},{default:()=>{var u;return[r&&v("div",{key:"prepend",class:"v-breadcrumbs__prepend"},[n.prepend?v($e,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},n.prepend):v(ze,{key:"prepend-icon",start:!0,icon:e.icon},null)]),i.value.map((o,d,f)=>{let{item:m,raw:h}=o;return v(me,null,[v(Iv,le({key:m.title,disabled:d>=f.length-1},m),{default:n.title?()=>{var g;return(g=n.title)==null?void 0:g.call(n,{item:h,index:d})}:void 0}),d<f.length-1&&v(Vv,null,{default:n.divider?()=>{var g;return(g=n.divider)==null?void 0:g.call(n,{item:h,index:d})}:void 0})])}),(u=n.default)==null?void 0:u.call(n)]}})}),{}}});const Ev=W()({name:"VCardActions",props:ne(),setup(e,t){let{slots:n}=t;return Je({VBtn:{variant:"text"}}),X(()=>{var c;return v("div",{class:["v-card-actions",e.class],style:e.style},[(c=n.default)==null?void 0:c.call(n)])}),{}}}),Av=Yt("v-card-subtitle"),Pv=Yt("v-card-title"),Tv=W()({name:"VCardItem",props:{appendAvatar:String,appendIcon:pe,prependAvatar:String,prependIcon:pe,subtitle:String,title:String,...ne(),...nt()},setup(e,t){let{slots:n}=t;return X(()=>{var u;const c=!!(e.prependAvatar||e.prependIcon),a=!!(c||n.prepend),l=!!(e.appendAvatar||e.appendIcon),s=!!(l||n.append),i=!!(e.title||n.title),r=!!(e.subtitle||n.subtitle);return v("div",{class:["v-card-item",e.class],style:e.style},[a&&v("div",{key:"prepend",class:"v-card-item__prepend"},[n.prepend?v($e,{key:"prepend-defaults",disabled:!c,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},n.prepend):c&&v(Dn,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),v("div",{class:"v-card-item__content"},[i&&v(Pv,{key:"title"},{default:()=>{var o;return[((o=n.title)==null?void 0:o.call(n))??e.title]}}),r&&v(Av,{key:"subtitle"},{default:()=>{var o;return[((o=n.subtitle)==null?void 0:o.call(n))??e.subtitle]}}),(u=n.default)==null?void 0:u.call(n)]),s&&v("div",{key:"append",class:"v-card-item__append"},[n.append?v($e,{key:"append-defaults",disabled:!l,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},n.append):l&&v(Dn,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),$v=Yt("v-card-text"),_p=W()({name:"VCard",directives:{Ripple:Un},props:{appendAvatar:String,appendIcon:pe,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:pe,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...Et(),...ne(),...nt(),...Rt(),...tt(),...dr(),...Wn(),...ea(),...De(),...Oa(),..._e(),...Ie(),...Ft({variant:"elevated"})},setup(e,t){let{attrs:n,slots:c}=t;const{themeClasses:a}=Pe(e),{borderClasses:l}=Lt(e),{colorClasses:s,colorStyles:i,variantClasses:r}=bc(e),{densityClasses:u}=gt(e),{dimensionStyles:o}=Ot(e),{elevationClasses:d}=ot(e),{loaderClasses:f}=Fl(e),{locationStyles:m}=Kn(e),{positionClasses:h}=ta(e),{roundedClasses:g}=Ue(e),S=Ra(e,n),b=y(()=>e.link!==!1&&S.isLink.value),C=y(()=>!e.disabled&&e.link!==!1&&(e.link||S.isClickable.value));return X(()=>{const p=b.value?"a":e.tag,P=!!(c.title||e.title),j=!!(c.subtitle||e.subtitle),I=P||j,E=!!(c.append||e.appendAvatar||e.appendIcon),k=!!(c.prepend||e.prependAvatar||e.prependIcon),x=!!(c.image||e.image),q=I||k||E,V=!!(c.text||e.text);return He(v(p,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":C.value},a.value,l.value,s.value,u.value,d.value,f.value,h.value,g.value,r.value,e.class],style:[i.value,o.value,m.value,e.style],href:S.href.value,onClick:C.value&&S.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var w;return[x&&v("div",{key:"image",class:"v-card__image"},[c.image?v($e,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},c.image):v(Gc,{key:"image-img",cover:!0,src:e.image},null)]),v(fr,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:c.loader}),q&&v(Tv,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:c.item,prepend:c.prepend,title:c.title,subtitle:c.subtitle,append:c.append}),V&&v($v,{key:"text"},{default:()=>{var M;return[((M=c.text)==null?void 0:M.call(c))??e.text]}}),(w=c.default)==null?void 0:w.call(c),c.actions&&v(Ev,null,{default:c.actions}),yc(C.value,"v-card")]}}),[[Ct("ripple"),C.value&&e.ripple]])}),{}}});const xp=e=>{const{touchstartX:t,touchendX:n,touchstartY:c,touchendY:a}=e,l=.5,s=16;e.offsetX=n-t,e.offsetY=a-c,Math.abs(e.offsetY)<l*Math.abs(e.offsetX)&&(e.left&&n<t-s&&e.left(e),e.right&&n>t+s&&e.right(e)),Math.abs(e.offsetX)<l*Math.abs(e.offsetY)&&(e.up&&a<c-s&&e.up(e),e.down&&a>c+s&&e.down(e))};function wp(e,t){var c;const n=e.changedTouches[0];t.touchstartX=n.clientX,t.touchstartY=n.clientY,(c=t.start)==null||c.call(t,{originalEvent:e,...t})}function jp(e,t){var c;const n=e.changedTouches[0];t.touchendX=n.clientX,t.touchendY=n.clientY,(c=t.end)==null||c.call(t,{originalEvent:e,...t}),xp(t)}function qp(e,t){var c;const n=e.changedTouches[0];t.touchmoveX=n.clientX,t.touchmoveY=n.clientY,(c=t.move)==null||c.call(t,{originalEvent:e,...t})}function Vp(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:n=>wp(n,t),touchend:n=>jp(n,t),touchmove:n=>qp(n,t)}}function Ip(e,t){var i;const n=t.value,c=n!=null&&n.parent?e.parentElement:e,a=(n==null?void 0:n.options)??{passive:!0},l=(i=t.instance)==null?void 0:i.$.uid;if(!c||!l)return;const s=Vp(t.value);c._touchHandlers=c._touchHandlers??Object.create(null),c._touchHandlers[l]=s,Qd(s).forEach(r=>{c.addEventListener(r,s[r],a)})}function Ep(e,t){var l,s;const n=(l=t.value)!=null&&l.parent?e.parentElement:e,c=(s=t.instance)==null?void 0:s.$.uid;if(!(n!=null&&n._touchHandlers)||!c)return;const a=n._touchHandlers[c];Qd(a).forEach(i=>{n.removeEventListener(i,a[i])}),delete n._touchHandlers[c]}const kr={mounted:Ip,unmounted:Ep},Mv=Symbol.for("vuetify:v-window"),Bv=Symbol.for("vuetify:v-window-group"),Rv=ye({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{default:"force"},...ne(),..._e(),...Ie()},"v-window"),Ov=W()({name:"VWindow",directives:{Touch:kr},props:Rv(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const{themeClasses:c}=Pe(e),{isRtl:a}=wn(),{t:l}=Bt(),s=pc(e,Bv),i=$(),r=y(()=>a.value?!e.reverse:e.reverse),u=$(!1),o=y(()=>{const P=e.direction==="vertical"?"y":"x",I=(r.value?!u.value:u.value)?"-reverse":"";return`v-window-${P}${I}-transition`}),d=$(0),f=$(void 0),m=y(()=>s.items.value.findIndex(P=>s.selected.value.includes(P.id)));ae(m,(P,j)=>{const I=s.items.value.length,E=I-1;I<=2?u.value=P<j:P===E&&j===0?u.value=!0:P===0&&j===E?u.value=!1:u.value=P<j}),Ke(Mv,{transition:o,isReversed:u,transitionCount:d,transitionHeight:f,rootRef:i});const h=y(()=>e.continuous||m.value!==0),g=y(()=>e.continuous||m.value!==s.items.value.length-1);function S(){h.value&&s.prev()}function b(){g.value&&s.next()}const C=y(()=>{const P=[],j={icon:a.value?e.nextIcon:e.prevIcon,class:`v-window__${r.value?"right":"left"}`,onClick:s.prev,ariaLabel:l("$vuetify.carousel.prev")};P.push(h.value?n.prev?n.prev({props:j}):v(bt,j,null):v("div",null,null));const I={icon:a.value?e.prevIcon:e.nextIcon,class:`v-window__${r.value?"left":"right"}`,onClick:s.next,ariaLabel:l("$vuetify.carousel.next")};return P.push(g.value?n.next?n.next({props:I}):v(bt,I,null):v("div",null,null)),P}),p=y(()=>e.touch===!1?e.touch:{...{left:()=>{r.value?S():b()},right:()=>{r.value?b():S()},start:j=>{let{originalEvent:I}=j;I.stopPropagation()}},...e.touch===!0?{}:e.touch});return X(()=>He(v(e.tag,{ref:i,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},c.value,e.class],style:e.style},{default:()=>{var P,j;return[v("div",{class:"v-window__container",style:{height:f.value}},[(P=n.default)==null?void 0:P.call(n,{group:s}),e.showArrows!==!1&&v("div",{class:"v-window__controls"},[C.value])]),(j=n.additional)==null?void 0:j.call(n,{group:s})]}}),[[Ct("touch"),p.value]])),{group:s}}}),Ap=W()({name:"VCarousel",props:{color:String,cycle:Boolean,delimiterIcon:{type:pe,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...Rv({continuous:!0,mandatory:"force",showArrows:!0})},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const c=Ce(e,"modelValue"),{t:a}=Bt(),l=$();let s=-1;ae(c,r),ae(()=>e.interval,r),ae(()=>e.cycle,u=>{u?r():window.clearTimeout(s)}),mt(i);function i(){!e.cycle||!l.value||(s=window.setTimeout(l.value.group.next,+e.interval>0?+e.interval:6e3))}function r(){window.clearTimeout(s),window.requestAnimationFrame(i)}return X(()=>v(Ov,{ref:l,modelValue:c.value,"onUpdate:modelValue":u=>c.value=u,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:ie(e.height)},e.style],continuous:!0,mandatory:"force",showArrows:e.showArrows},{default:n.default,additional:u=>{let{group:o}=u;return v(me,null,[!e.hideDelimiters&&v("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[o.items.value.length>0&&v($e,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[o.items.value.map((d,f)=>{const m={id:`carousel-item-${d.id}`,"aria-label":a("$vuetify.carousel.ariaLabel.delimiter",f+1,o.items.value.length),class:[o.isSelected(d.id)&&"v-btn--active"],onClick:()=>o.select(d.id,!0)};return n.item?n.item({props:m,item:d}):v(bt,le(d,m),null)})]})]),e.progress&&v(ur,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(o.getItemIndex(c.value)+1)/o.items.value.length*100},null)])},prev:n.prev,next:n.next})),{}}}),Lv=W()({name:"VWindowItem",directives:{Touch:kr},props:{reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...ne(),...Zc(),...Yl()},emits:{"group:selected":e=>!0},setup(e,t){let{slots:n}=t;const c=Ve(Mv),a=Qc(e,Bv),{isBooted:l}=gc();if(!c||!a)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=$(!1),i=y(()=>c.isReversed.value?e.reverseTransition!==!1:e.transition!==!1);function r(){!s.value||!c||(s.value=!1,c.transitionCount.value>0&&(c.transitionCount.value-=1,c.transitionCount.value===0&&(c.transitionHeight.value=void 0)))}function u(){var h;s.value||!c||(s.value=!0,c.transitionCount.value===0&&(c.transitionHeight.value=ie((h=c.rootRef.value)==null?void 0:h.clientHeight)),c.transitionCount.value+=1)}function o(){r()}function d(h){s.value&&Oe(()=>{!i.value||!s.value||!c||(c.transitionHeight.value=ie(h.clientHeight))})}const f=y(()=>{const h=c.isReversed.value?e.reverseTransition:e.transition;return i.value?{name:typeof h!="string"?c.transition.value:h,onBeforeEnter:u,onAfterEnter:r,onEnterCancelled:o,onBeforeLeave:u,onAfterLeave:r,onLeaveCancelled:o,onEnter:d}:!1}),{hasContent:m}=br(e,a.isSelected);return X(()=>v(Ht,{transition:f.value,disabled:!l.value},{default:()=>{var h;return[He(v("div",{class:["v-window-item",a.selectedClass.value,e.class],style:e.style},[m.value&&((h=n.default)==null?void 0:h.call(n))]),[[on,a.isSelected.value]])]}})),{}}}),Pp=W()({name:"VCarouselItem",inheritAttrs:!1,props:{value:null,...ne()},setup(e,t){let{slots:n,attrs:c}=t;X(()=>v(Lv,{class:["v-carousel-item",e.class],style:e.style,value:e.value},{default:()=>[v(Gc,c,n)]}))}});const Tp=Yt("v-code");const Fv=ye({color:String,...Et(),...ne(),...Rt(),...tt(),...Wn(),...ea(),...De(),..._e(),...Ie()},"v-sheet"),ii=W()({name:"VSheet",props:{...Fv()},setup(e,t){let{slots:n}=t;const{themeClasses:c}=Pe(e),{backgroundColorClasses:a,backgroundColorStyles:l}=Ze(Y(e,"color")),{borderClasses:s}=Lt(e),{dimensionStyles:i}=Ot(e),{elevationClasses:r}=ot(e),{locationStyles:u}=Kn(e),{positionClasses:o}=ta(e),{roundedClasses:d}=Ue(e);return X(()=>v(e.tag,{class:["v-sheet",c.value,a.value,s.value,r.value,o.value,d.value,e.class],style:[l.value,i.value,u.value,e.style]},n)),{}}});const $p=Mt({name:"VColorPickerCanvas",props:{color:{type:Object},disabled:Boolean,dotSize:{type:[Number,String],default:10},height:{type:[Number,String],default:150},width:{type:[Number,String],default:300},...ne()},emits:{"update:color":e=>!0,"update:position":e=>!0},setup(e,t){let{emit:n}=t;const c=$(!1),a=$(!1),l=$({x:0,y:0}),s=y(()=>{const{x:b,y:C}=l.value,p=parseInt(e.dotSize,10)/2;return{width:ie(e.dotSize),height:ie(e.dotSize),transform:`translate(${ie(b-p)}, ${ie(C-p)})`}}),i=$(),r=$(parseFloat(e.width)),u=$(parseFloat(e.height)),{resizeRef:o}=sn(b=>{var P;if(!((P=o.value)!=null&&P.offsetParent))return;const{width:C,height:p}=b[0].contentRect;r.value=C,u.value=p});function d(b,C,p){const{left:P,top:j,width:I,height:E}=p;l.value={x:ft(b-P,0,I),y:ft(C-j,0,E)}}function f(b){e.disabled||!i.value||d(b.clientX,b.clientY,i.value.getBoundingClientRect())}function m(b){b.preventDefault(),!e.disabled&&(c.value=!0,window.addEventListener("mousemove",h),window.addEventListener("mouseup",g),window.addEventListener("touchmove",h),window.addEventListener("touchend",g))}function h(b){if(e.disabled||!i.value)return;c.value=!0;const C=kb(b);d(C.clientX,C.clientY,i.value.getBoundingClientRect())}function g(){window.removeEventListener("mousemove",h),window.removeEventListener("mouseup",g),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",g)}ae(l,()=>{var p,P;if(a.value){a.value=!1;return}if(!i.value)return;const{x:b,y:C}=l.value;n("update:color",{h:((p=e.color)==null?void 0:p.h)??0,s:ft(b,0,r.value)/r.value,v:1-ft(C,0,u.value)/u.value,a:((P=e.color)==null?void 0:P.a)??1})});function S(){var j;if(!i.value)return;const b=i.value,C=b.getContext("2d");if(!C)return;const p=C.createLinearGradient(0,0,b.width,0);p.addColorStop(0,"hsla(0, 0%, 100%, 1)"),p.addColorStop(1,`hsla(${((j=e.color)==null?void 0:j.h)??0}, 100%, 50%, 1)`),C.fillStyle=p,C.fillRect(0,0,b.width,b.height);const P=C.createLinearGradient(0,0,0,b.height);P.addColorStop(0,"hsla(0, 0%, 100%, 0)"),P.addColorStop(1,"hsla(0, 0%, 0%, 1)"),C.fillStyle=P,C.fillRect(0,0,b.width,b.height)}return ae(()=>{var b;return(b=e.color)==null?void 0:b.h},S,{immediate:!0}),ae(()=>[r.value,u.value],(b,C)=>{S(),l.value={x:l.value.x*b[0]/C[0],y:l.value.y*b[1]/C[1]}},{flush:"post"}),ae(()=>e.color,()=>{if(c.value){c.value=!1;return}a.value=!0,l.value=e.color?{x:e.color.s*r.value,y:(1-e.color.v)*u.value}:{x:0,y:0}},{deep:!0,immediate:!0}),mt(()=>S()),X(()=>v("div",{ref:o,class:["v-color-picker-canvas",e.class],style:e.style,onClick:f,onMousedown:m,onTouchstart:m},[v("canvas",{ref:i,width:r.value,height:u.value},null),e.color&&v("div",{class:["v-color-picker-canvas__dot",{"v-color-picker-canvas__dot--disabled":e.disabled}],style:s.value},null)])),{}}});function rc(e,t){return t.every(n=>e.hasOwnProperty(n))}function Nv(e){if(!e)return null;let t=null;if(typeof e=="string"){const n=vf(e);t=df(n)}return typeof e=="object"&&(rc(e,["r","g","b"])?t=Zi(e):rc(e,["h","s","l"])?t=sf(e):rc(e,["h","s","v"])&&(t=e)),t}function Mp(e,t){if(t){const{a:n,...c}=e;return c}return e}function Bp(e,t){if(t==null||typeof t=="string"){const n=ff(e);return e.a===1?n.slice(0,7):n}if(typeof t=="object"){let n;return rc(t,["r","g","b"])?n=Ml(e):rc(t,["h","s","l"])?n=lf(e):rc(t,["h","s","v"])&&(n=e),Mp(n,!rc(t,["a"])&&e.a===1)}return e}const ya={h:0,s:0,v:1,a:1},ri={inputProps:{type:"number",min:0},inputs:[{label:"R",max:255,step:1,getValue:e=>Math.round(e.r),getColor:(e,t)=>({...e,r:Number(t)})},{label:"G",max:255,step:1,getValue:e=>Math.round(e.g),getColor:(e,t)=>({...e,g:Number(t)})},{label:"B",max:255,step:1,getValue:e=>Math.round(e.b),getColor:(e,t)=>({...e,b:Number(t)})},{label:"A",max:1,step:.01,getValue:e=>{let{a:t}=e;return t?Math.round(t*100)/100:1},getColor:(e,t)=>({...e,a:Number(t)})}],to:Ml,from:Zi};var xu;const Rp={...ri,inputs:(xu=ri.inputs)==null?void 0:xu.slice(0,3)},oi={inputProps:{type:"number",min:0},inputs:[{label:"H",max:360,step:1,getValue:e=>Math.round(e.h),getColor:(e,t)=>({...e,h:Number(t)})},{label:"S",max:1,step:.01,getValue:e=>Math.round(e.s*100)/100,getColor:(e,t)=>({...e,s:Number(t)})},{label:"L",max:1,step:.01,getValue:e=>Math.round(e.l*100)/100,getColor:(e,t)=>({...e,l:Number(t)})},{label:"A",max:1,step:.01,getValue:e=>{let{a:t}=e;return t?Math.round(t*100)/100:1},getColor:(e,t)=>({...e,a:Number(t)})}],to:lf,from:sf},Op={...oi,inputs:oi.inputs.slice(0,3)},Dv={inputProps:{type:"text"},inputs:[{label:"HEXA",getValue:e=>e,getColor:(e,t)=>t}],to:ff,from:df},Lp={...Dv,inputs:[{label:"HEX",getValue:e=>e.slice(0,7),getColor:(e,t)=>t}]},oc={rgb:Rp,rgba:ri,hsl:Op,hsla:oi,hex:Lp,hexa:Dv},Fp=e=>{let{label:t,...n}=e;return v("div",{class:"v-color-picker-edit__input"},[v("input",n,null),v("span",null,[t])])},Np=Mt({name:"VColorPickerEdit",props:{color:Object,disabled:Boolean,mode:{type:String,default:"rgba",validator:e=>Object.keys(oc).includes(e)},modes:{type:Array,default:()=>Object.keys(oc),validator:e=>Array.isArray(e)&&e.every(t=>Object.keys(oc).includes(t))},...ne()},emits:{"update:color":e=>!0,"update:mode":e=>!0},setup(e,t){let{emit:n}=t;const c=y(()=>e.modes.map(l=>({...oc[l],name:l}))),a=y(()=>{var i;const l=c.value.find(r=>r.name===e.mode);if(!l)return[];const s=e.color?l.to(e.color):null;return(i=l.inputs)==null?void 0:i.map(r=>{let{getValue:u,getColor:o,...d}=r;return{...l.inputProps,...d,disabled:e.disabled,value:s&&u(s),onChange:f=>{const m=f.target;m&&n("update:color",l.from(o(s??ya,m.value)))}}})});return X(()=>{var l;return v("div",{class:["v-color-picker-edit",e.class],style:e.style},[(l=a.value)==null?void 0:l.map(s=>v(Fp,s,null)),c.value.length>1&&v(bt,{icon:"$unfold",size:"x-small",variant:"plain",onClick:()=>{const s=c.value.findIndex(i=>i.name===e.mode);n("update:mode",c.value[(s+1)%c.value.length].name)}},null)])}),{}}});const Sr=Symbol.for("vuetify:v-slider");function ui(e,t,n){const c=n==="vertical",a=t.getBoundingClientRect(),l="touches"in e?e.touches[0]:e;return c?l.clientY-(a.top+a.height/2):l.clientX-(a.left+a.width/2)}function Dp(e,t){return"touches"in e&&e.touches.length?e.touches[0][t]:"changedTouches"in e&&e.changedTouches.length?e.changedTouches[0][t]:e[t]}const zv=ye({disabled:Boolean,error:Boolean,readonly:Boolean,max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:0},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:e=>typeof e=="boolean"||e==="always"},thumbSize:{type:[Number,String],default:20},showTicks:{type:[Boolean,String],default:!1,validator:e=>typeof e=="boolean"||e==="always"},ticks:{type:[Array,Object]},tickSize:{type:[Number,String],default:2},color:String,trackColor:String,trackFillColor:String,trackSize:{type:[Number,String],default:4},direction:{type:String,default:"horizontal",validator:e=>["vertical","horizontal"].includes(e)},reverse:Boolean,...De(),...tt({elevation:2})},"slider"),Hv=e=>{const t=y(()=>parseFloat(e.min)),n=y(()=>parseFloat(e.max)),c=y(()=>+e.step>0?parseFloat(e.step):0),a=y(()=>Math.max($o(c.value),$o(t.value)));function l(s){if(c.value<=0)return s;const i=ft(s,t.value,n.value),r=t.value%c.value,u=Math.round((i-r)/c.value)*c.value+r;return parseFloat(Math.min(u,n.value).toFixed(a.value))}return{min:t,max:n,step:c,decimals:a,roundValue:l}},Uv=e=>{let{props:t,steps:n,onSliderStart:c,onSliderMove:a,onSliderEnd:l,getActiveThumb:s}=e;const{isRtl:i}=wn(),r=Y(t,"reverse"),u=y(()=>{let T=i.value?"rtl":"ltr";return t.reverse&&(T=T==="rtl"?"ltr":"rtl"),T}),{min:o,max:d,step:f,decimals:m,roundValue:h}=n,g=y(()=>parseInt(t.thumbSize,10)),S=y(()=>parseInt(t.tickSize,10)),b=y(()=>parseInt(t.trackSize,10)),C=y(()=>(d.value-o.value)/f.value),p=Y(t,"disabled"),P=y(()=>t.direction==="vertical"),j=y(()=>t.error||t.disabled?void 0:t.thumbColor??t.color),I=y(()=>t.error||t.disabled?void 0:t.trackColor??t.color),E=y(()=>t.error||t.disabled?void 0:t.trackFillColor??t.color),k=$(!1),x=$(0),q=$(),V=$();function w(T){var U;const O=t.direction==="vertical",re=O?"top":"left",oe=O?"height":"width",je=O?"clientY":"clientX",{[re]:ve,[oe]:_}=(U=q.value)==null?void 0:U.$el.getBoundingClientRect(),A=Dp(T,je);let L=Math.min(Math.max((A-ve-x.value)/_,0),1)||0;return(O||u.value==="rtl")&&(L=1-L),h(o.value+L*(d.value-o.value))}const M=T=>{l({value:w(T)}),k.value=!1,x.value=0},N=T=>{V.value=s(T),V.value&&(V.value.focus(),k.value=!0,V.value.contains(T.target)?x.value=ui(T,V.value,t.direction):(x.value=0,a({value:w(T)})),c({value:w(T)}))},Z={passive:!0,capture:!0};function F(T){a({value:w(T)})}function H(T){T.stopPropagation(),T.preventDefault(),M(T),window.removeEventListener("mousemove",F,Z),window.removeEventListener("mouseup",H)}function D(T){var O;M(T),window.removeEventListener("touchmove",F,Z),(O=T.target)==null||O.removeEventListener("touchend",D)}function J(T){var O;N(T),window.addEventListener("touchmove",F,Z),(O=T.target)==null||O.addEventListener("touchend",D,{passive:!1})}function R(T){T.preventDefault(),N(T),window.addEventListener("mousemove",F,Z),window.addEventListener("mouseup",H,{passive:!1})}const K=T=>{const O=(T-o.value)/(d.value-o.value)*100;return ft(isNaN(O)?0:O,0,100)},z=Y(t,"showTicks"),fe=y(()=>z.value?t.ticks?Array.isArray(t.ticks)?t.ticks.map(T=>({value:T,position:K(T),label:T.toString()})):Object.keys(t.ticks).map(T=>({value:parseFloat(T),position:K(parseFloat(T)),label:t.ticks[T]})):C.value!==1/0?cn(C.value+1).map(T=>{const O=o.value+T*f.value;return{value:O,position:K(O)}}):[]:[]),ue=y(()=>fe.value.some(T=>{let{label:O}=T;return!!O})),B={activeThumbRef:V,color:Y(t,"color"),decimals:m,disabled:p,direction:Y(t,"direction"),elevation:Y(t,"elevation"),hasLabels:ue,horizontalDirection:u,isReversed:r,min:o,max:d,mousePressed:k,numTicks:C,onSliderMousedown:R,onSliderTouchstart:J,parsedTicks:fe,parseMouseMove:w,position:K,readonly:Y(t,"readonly"),rounded:Y(t,"rounded"),roundValue:h,showTicks:z,startOffset:x,step:f,thumbSize:g,thumbColor:j,thumbLabel:Y(t,"thumbLabel"),ticks:Y(t,"ticks"),tickSize:S,trackColor:I,trackContainerRef:q,trackFillColor:E,trackSize:b,vertical:P};return Ke(Sr,B),B},di=W()({name:"VSliderThumb",directives:{Ripple:Un},props:{focused:Boolean,max:{type:Number,required:!0},min:{type:Number,required:!0},modelValue:{type:Number,required:!0},position:{type:Number,required:!0},ripple:{type:Boolean,default:!0},...ne()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n,emit:c}=t;const a=Ve(Sr);if(!a)throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");const{thumbColor:l,step:s,vertical:i,disabled:r,thumbSize:u,thumbLabel:o,direction:d,readonly:f,elevation:m,isReversed:h,horizontalDirection:g,mousePressed:S,decimals:b}=a,{textColorClasses:C,textColorStyles:p}=vt(l),{pageup:P,pagedown:j,end:I,home:E,left:k,right:x,down:q,up:V}=Ds,w=[P,j,I,E,k,x,q,V],M=y(()=>s.value?[1,2,3]:[1,5,10]);function N(F,H){if(!w.includes(F.key))return;F.preventDefault();const D=s.value||.1,J=(e.max-e.min)/D;if([k,x,q,V].includes(F.key)){const K=(g.value==="rtl"?[k,V]:[x,V]).includes(F.key)?1:-1,z=F.shiftKey?2:F.ctrlKey?1:0;H=H+K*D*M.value[z]}else if(F.key===E)H=e.min;else if(F.key===I)H=e.max;else{const R=F.key===j?1:-1;H=H-R*D*(J>100?J/10:10)}return Math.max(e.min,Math.min(e.max,H))}function Z(F){const H=N(F,e.modelValue);H!=null&&c("update:modelValue",H)}return X(()=>{const F=ie(i.value||h.value?100-e.position:e.position,"%"),{elevationClasses:H}=ot(y(()=>r.value?void 0:m.value));return v("div",{class:["v-slider-thumb",{"v-slider-thumb--focused":e.focused,"v-slider-thumb--pressed":e.focused&&S.value},e.class],style:[{"--v-slider-thumb-position":F,"--v-slider-thumb-size":ie(u.value)},e.style],role:"slider",tabindex:r.value?-1:0,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.modelValue,"aria-readonly":f.value,"aria-orientation":d.value,onKeydown:f.value?void 0:Z},[v("div",{class:["v-slider-thumb__surface",C.value,H.value],style:{...p.value}},null),He(v("div",{class:["v-slider-thumb__ripple",C.value],style:p.value},null),[[Ct("ripple"),e.ripple,null,{circle:!0,center:!0}]]),v(Ef,{origin:"bottom center"},{default:()=>{var D;return[He(v("div",{class:"v-slider-thumb__label-container"},[v("div",{class:["v-slider-thumb__label"]},[v("div",null,[((D=n["thumb-label"])==null?void 0:D.call(n,{modelValue:e.modelValue}))??e.modelValue.toFixed(s.value?b.value:1)])])]),[[on,o.value&&e.focused||o.value==="always"]])]}})])}),{}}});const Wv=W()({name:"VSliderTrack",props:{start:{type:Number,required:!0},stop:{type:Number,required:!0},...ne()},emits:{},setup(e,t){let{slots:n}=t;const c=Ve(Sr);if(!c)throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");const{color:a,horizontalDirection:l,parsedTicks:s,rounded:i,showTicks:r,tickSize:u,trackColor:o,trackFillColor:d,trackSize:f,vertical:m,min:h,max:g}=c,{roundedClasses:S}=Ue(i),{backgroundColorClasses:b,backgroundColorStyles:C}=Ze(d),{backgroundColorClasses:p,backgroundColorStyles:P}=Ze(o),j=y(()=>`inset-${m.value?"block-end":"inline-start"}`),I=y(()=>m.value?"height":"width"),E=y(()=>({[j.value]:"0%",[I.value]:"100%"})),k=y(()=>e.stop-e.start),x=y(()=>({[j.value]:ie(e.start,"%"),[I.value]:ie(k.value,"%")})),q=y(()=>r.value?(m.value?s.value.slice().reverse():s.value).map((w,M)=>{var F;const N=m.value?"bottom":"margin-inline-start",Z=w.value!==h.value&&w.value!==g.value?ie(w.position,"%"):void 0;return v("div",{key:w.value,class:["v-slider-track__tick",{"v-slider-track__tick--filled":w.position>=e.start&&w.position<=e.stop,"v-slider-track__tick--first":w.value===h.value,"v-slider-track__tick--last":w.value===g.value}],style:{[N]:Z}},[(w.label||n["tick-label"])&&v("div",{class:"v-slider-track__tick-label"},[((F=n["tick-label"])==null?void 0:F.call(n,{tick:w,index:M}))??w.label])])}):[]);return X(()=>v("div",{class:["v-slider-track",S.value,e.class],style:[{"--v-slider-track-size":ie(f.value),"--v-slider-tick-size":ie(u.value),direction:m.value?void 0:l.value},e.style]},[v("div",{class:["v-slider-track__background",p.value,{"v-slider-track__background--opacity":!!a.value||!d.value}],style:{...E.value,...P.value}},null),v("div",{class:["v-slider-track__fill",b.value],style:{...x.value,...C.value}},null),r.value&&v("div",{class:["v-slider-track__ticks",{"v-slider-track__ticks--always-show":r.value==="always"}]},[q.value])])),{}}}),fi=W()({name:"VSlider",props:{...Nl(),...zv(),...Vn(),modelValue:{type:[Number,String],default:0}},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,start:e=>!0,end:e=>!0},setup(e,t){let{slots:n,emit:c}=t;const a=$(),l=Hv(e),s=Ce(e,"modelValue",void 0,j=>{const I=typeof j=="string"?parseFloat(j):j??l.min.value;return l.roundValue(I)}),{min:i,max:r,mousePressed:u,roundValue:o,onSliderMousedown:d,onSliderTouchstart:f,trackContainerRef:m,position:h,hasLabels:g,readonly:S}=Uv({props:e,steps:l,onSliderStart:()=>{c("start",s.value)},onSliderEnd:j=>{let{value:I}=j;const E=o(I);s.value=E,c("end",E)},onSliderMove:j=>{let{value:I}=j;return s.value=o(I)},getActiveThumb:()=>{var j;return(j=a.value)==null?void 0:j.$el}}),{isFocused:b,focus:C,blur:p}=Yn(e),P=y(()=>h(s.value));return X(()=>{const[j,I]=it.filterProps(e),E=!!(e.label||n.label||n.prepend);return v(it,le({class:["v-slider",{"v-slider--has-labels":!!n["tick-label"]||g.value,"v-slider--focused":b.value,"v-slider--pressed":u.value,"v-slider--disabled":e.disabled},e.class],style:e.style},j,{focused:b.value}),{...n,prepend:E?k=>{var x,q;return v(me,null,[((x=n.label)==null?void 0:x.call(n,k))??e.label?v(na,{id:k.id.value,class:"v-slider__label",text:e.label},null):void 0,(q=n.prepend)==null?void 0:q.call(n,k)])}:void 0,default:k=>{let{id:x,messagesId:q}=k;return v("div",{class:"v-slider__container",onMousedown:S.value?void 0:d,onTouchstartPassive:S.value?void 0:f},[v("input",{id:x.value,name:e.name||x.value,disabled:e.disabled,readonly:e.readonly,tabindex:"-1",value:s.value},null),v(Wv,{ref:m,start:0,stop:P.value},{"tick-label":n["tick-label"]}),v(di,{ref:a,"aria-describedby":q.value,focused:b.value,min:i.value,max:r.value,modelValue:s.value,"onUpdate:modelValue":V=>s.value=V,position:P.value,elevation:e.elevation,onFocus:C,onBlur:p},{"thumb-label":n["thumb-label"]})])}})}),{}}}),zp=Mt({name:"VColorPickerPreview",props:{color:{type:Object},disabled:Boolean,hideAlpha:Boolean,...ne()},emits:{"update:color":e=>!0},setup(e,t){let{emit:n}=t;return X(()=>{var c,a;return v("div",{class:["v-color-picker-preview",{"v-color-picker-preview--hide-alpha":e.hideAlpha},e.class],style:e.style},[v("div",{class:"v-color-picker-preview__dot"},[v("div",{style:{background:rf(e.color??ya)}},null)]),v("div",{class:"v-color-picker-preview__sliders"},[v(fi,{class:"v-color-picker-preview__track v-color-picker-preview__hue",modelValue:(c=e.color)==null?void 0:c.h,"onUpdate:modelValue":l=>n("update:color",{...e.color??ya,h:l}),step:0,min:0,max:360,disabled:e.disabled,thumbSize:14,trackSize:8,trackFillColor:"white",hideDetails:!0},null),!e.hideAlpha&&v(fi,{class:"v-color-picker-preview__track v-color-picker-preview__alpha",modelValue:((a=e.color)==null?void 0:a.a)??1,"onUpdate:modelValue":l=>n("update:color",{...e.color??ya,a:l}),step:1/256,min:0,max:1,disabled:e.disabled,thumbSize:14,trackSize:8,trackFillColor:"white",hideDetails:!0},null)])])}),{}}});const Hp=Object.freeze({base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"}),Up=Object.freeze({base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"}),Wp=Object.freeze({base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"}),Kp=Object.freeze({base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"}),Yp=Object.freeze({base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"}),Gp=Object.freeze({base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"}),Xp=Object.freeze({base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"}),Zp=Object.freeze({base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"}),Qp=Object.freeze({base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"}),Jp=Object.freeze({base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"}),ek=Object.freeze({base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"}),tk=Object.freeze({base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"}),nk=Object.freeze({base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"}),ck=Object.freeze({base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"}),ak=Object.freeze({base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"}),lk=Object.freeze({base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"}),sk=Object.freeze({base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"}),ik=Object.freeze({base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"}),rk=Object.freeze({base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"}),ok=Object.freeze({black:"#000000",white:"#ffffff",transparent:"#ffffff00"}),uk=Object.freeze({red:Hp,pink:Up,purple:Wp,deepPurple:Kp,indigo:Yp,blue:Gp,lightBlue:Xp,cyan:Zp,teal:Qp,green:Jp,lightGreen:ek,lime:tk,yellow:nk,amber:ck,orange:ak,deepOrange:lk,brown:sk,blueGrey:ik,grey:rk,shades:ok});function dk(e){return Object.keys(e).map(t=>{const n=e[t];return n.base?[n.base,n.darken4,n.darken3,n.darken2,n.darken1,n.lighten1,n.lighten2,n.lighten3,n.lighten4,n.lighten5]:[n.black,n.white,n.transparent]})}const fk=Mt({name:"VColorPickerSwatches",props:{swatches:{type:Array,default:()=>dk(uk)},disabled:Boolean,color:Object,maxHeight:[Number,String],...ne()},emits:{"update:color":e=>!0},setup(e,t){let{emit:n}=t;return X(()=>v("div",{class:["v-color-picker-swatches",e.class],style:[{maxHeight:ie(e.maxHeight)},e.style]},[v("div",null,[e.swatches.map(c=>v("div",{class:"v-color-picker-swatches__swatch"},[c.map(a=>{const l=Nv(a);return v("div",{class:"v-color-picker-swatches__color",onClick:()=>l&&n("update:color",l)},[v("div",{style:{background:a}},[e.color&&vc(e.color,l)?v(ze,{size:"x-small",icon:"$success",color:Bb(a,"#FFFFFF")>2?"white":"black"},null):void 0])])})]))])])),{}}}),vk=Mt({name:"VColorPicker",props:{canvasHeight:{type:[String,Number],default:150},disabled:Boolean,dotSize:{type:[Number,String],default:10},hideCanvas:Boolean,hideSliders:Boolean,hideInputs:Boolean,mode:{type:String,default:"rgba",validator:e=>Object.keys(oc).includes(e)},modes:{type:Array,default:()=>Object.keys(oc),validator:e=>Array.isArray(e)&&e.every(t=>Object.keys(oc).includes(t))},showSwatches:Boolean,swatches:Array,swatchesMaxHeight:{type:[Number,String],default:150},modelValue:{type:[Object,String]},...un(Fv({width:300}),["height","location","minHeight","maxHeight","minWidth","maxWidth"])},emits:{"update:modelValue":e=>!0,"update:mode":e=>!0},setup(e){const t=Ce(e,"mode"),n=$(null),c=Ce(e,"modelValue",void 0,l=>{let s=Nv(l);return s?(n.value&&(s={...s,h:n.value.h},n.value=null),s):null},l=>l?Bp(l,e.modelValue):null),a=l=>{c.value=l,n.value=l};return mt(()=>{e.modes.includes(t.value)||(t.value=e.modes[0])}),Je({VSlider:{color:void 0,trackColor:void 0,trackFillColor:void 0}}),X(()=>{const[l]=ii.filterProps(e);return v(ii,le({rounded:e.rounded,elevation:e.elevation,theme:e.theme,class:["v-color-picker",e.class],style:[{"--v-color-picker-color-hsv":rf({...c.value??ya,a:1})},e.style]},l,{maxWidth:e.width}),{default:()=>[!e.hideCanvas&&v($p,{key:"canvas",color:c.value,"onUpdate:color":a,disabled:e.disabled,dotSize:e.dotSize,width:e.width,height:e.canvasHeight},null),(!e.hideSliders||!e.hideInputs)&&v("div",{key:"controls",class:"v-color-picker__controls"},[!e.hideSliders&&v(zp,{key:"preview",color:c.value,"onUpdate:color":a,hideAlpha:!t.value.endsWith("a"),disabled:e.disabled},null),!e.hideInputs&&v(Np,{key:"edit",modes:e.modes,mode:t.value,"onUpdate:mode":s=>t.value=s,color:c.value,"onUpdate:color":a,disabled:e.disabled},null)]),e.showSwatches&&v(fk,{key:"swatches",color:c.value,"onUpdate:color":a,maxHeight:e.swatchesMaxHeight,swatches:e.swatches,disabled:e.disabled},null)]})}),{}}});function mk(e,t,n){if(t==null)return e;if(Array.isArray(t))throw new Error("Multiple matches is not implemented");return typeof t=="number"&&~t?v(me,null,[v("span",{class:"v-combobox__unmask"},[e.substr(0,t)]),v("span",{class:"v-combobox__mask"},[e.substr(t,n)]),v("span",{class:"v-combobox__unmask"},[e.substr(t+n)])]):e}const hk=W()({name:"VCombobox",props:{delimiters:Array,...xv({filterKeys:["title"]}),...pr({hideNoData:!0,returnObject:!0}),...un(Ul({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...jn({transition:!1})},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:search":e=>!0,"update:menu":e=>!0},setup(e,t){var K;let{emit:n,slots:c}=t;const{t:a}=Bt(),l=$(),s=$(!1),i=$(!0),r=$(),u=Ce(e,"menu"),o=y({get:()=>u.value,set:z=>{var fe;u.value&&!z&&((fe=r.value)!=null&&fe.ΨopenChildren)||(u.value=z)}}),d=$(-1);let f=!1;const m=y(()=>{var z;return(z=l.value)==null?void 0:z.color}),{items:h,transformIn:g,transformOut:S}=yr(e),{textColorClasses:b,textColorStyles:C}=vt(m),p=Ce(e,"modelValue",[],z=>g(Tt(z)),z=>{const fe=S(z);return e.multiple?fe:fe[0]??null}),P=zl(),j=$(e.multiple?"":((K=p.value[0])==null?void 0:K.title)??""),I=y({get:()=>j.value,set:z=>{var fe;if(j.value=z,e.multiple||(p.value=[Vc(e,z)]),z&&e.multiple&&((fe=e.delimiters)!=null&&fe.length)){const ue=z.split(new RegExp(`(?:${e.delimiters.join("|")})+`));ue.length>1&&(ue.forEach(B=>{B=B.trim(),B&&D(Vc(e,B))}),j.value="")}z||(d.value=-1),i.value=!z}});ae(j,z=>{f?Oe(()=>f=!1):s.value&&!o.value&&(o.value=!0),n("update:search",z)}),ae(p,z=>{var fe;e.multiple||(j.value=((fe=z[0])==null?void 0:fe.title)??"")});const{filteredItems:E,getMatches:k}=wv(e,h,y(()=>i.value?void 0:I.value)),x=y(()=>p.value.map(z=>h.value.find(fe=>e.valueComparator(fe.value,z.value))||z)),q=y(()=>e.hideSelected?E.value.filter(z=>!x.value.some(fe=>fe.value===z.value)):E.value),V=y(()=>x.value.map(z=>z.props.value)),w=y(()=>x.value[d.value]),M=$();function N(z){f=!0,e.openOnClear&&(o.value=!0)}function Z(){e.hideNoData&&!h.value.length||e.readonly||P!=null&&P.isReadonly.value||(o.value=!0)}function F(z){var B,T;if(e.readonly||P!=null&&P.isReadonly.value)return;const fe=l.value.selectionStart,ue=V.value.length;if((d.value>-1||["Enter","ArrowDown","ArrowUp"].includes(z.key))&&z.preventDefault(),["Enter","ArrowDown"].includes(z.key)&&(o.value=!0),["Escape"].includes(z.key)&&(o.value=!1),["Enter","Escape","Tab"].includes(z.key)&&(i.value=!0),z.key==="ArrowDown"?(B=M.value)==null||B.focus("next"):z.key==="ArrowUp"&&((T=M.value)==null||T.focus("prev")),!!e.multiple){if(["Backspace","Delete"].includes(z.key)){if(d.value<0){z.key==="Backspace"&&!I.value&&(d.value=ue-1);return}const O=d.value;w.value&&D(w.value),d.value=O>=ue-1?ue-2:O}if(z.key==="ArrowLeft"){if(d.value<0&&fe>0)return;const O=d.value>-1?d.value-1:ue-1;x.value[O]?d.value=O:(d.value=-1,l.value.setSelectionRange(I.value.length,I.value.length))}if(z.key==="ArrowRight"){if(d.value<0)return;const O=d.value+1;x.value[O]?d.value=O:(d.value=-1,l.value.setSelectionRange(0,0))}z.key==="Enter"&&I.value&&(D(Vc(e,I.value)),I.value="")}}function H(){s.value&&(i.value=!0)}function D(z){if(e.multiple){const fe=V.value.findIndex(ue=>e.valueComparator(ue,z.value));if(fe===-1)p.value=[...p.value,z];else{const ue=[...p.value];ue.splice(fe,1),p.value=ue}I.value=""}else p.value=[z],j.value=z.title,Oe(()=>{o.value=!1,i.value=!0})}function J(z){s.value=!0}function R(z){var fe;z.relatedTarget==null&&((fe=l.value)==null||fe.focus())}return ae(E,z=>{!z.length&&e.hideNoData&&(o.value=!1)}),ae(s,z=>{if(z)d.value=-1;else{if(o.value=!1,!e.multiple||!I.value)return;p.value=[...p.value,Vc(e,I.value)],I.value=""}}),X(()=>{const z=!!(e.chips||c.chip),fe=!!(!e.hideNoData||q.value.length||c.prepend||c.append||c["no-data"]),ue=p.value.length>0,[B]=fc.filterProps(e);return v(fc,le({ref:l},B,{modelValue:I.value,"onUpdate:modelValue":[T=>I.value=T,T=>{T==null&&(p.value=[])}],focused:s.value,"onUpdate:focused":T=>s.value=T,validationValue:p.externalValue,dirty:ue,class:["v-combobox",{"v-combobox--active-menu":o.value,"v-combobox--chips":!!e.chips,"v-combobox--selecting-index":d.value>-1,[`v-combobox--${e.multiple?"multiple":"single"}`]:!0},e.class],style:e.style,appendInnerIcon:e.items.length?e.menuIcon:void 0,readonly:e.readonly,placeholder:ue?void 0:e.placeholder,"onClick:clear":N,"onMousedown:control":Z,onKeydown:F}),{...c,default:()=>v(me,null,[v(Gl,le({ref:r,modelValue:o.value,"onUpdate:modelValue":T=>o.value=T,activator:"parent",contentClass:"v-combobox__content",eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:H},e.menuProps),{default:()=>[fe&&v(Kl,{ref:M,selected:V.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:T=>T.preventDefault(),onFocusin:J,onFocusout:R},{default:()=>{var T,O,re;return[!q.value.length&&!e.hideNoData&&(((T=c["no-data"])==null?void 0:T.call(c))??v(kn,{title:a(e.noDataText)},null)),(O=c["prepend-item"])==null?void 0:O.call(c),q.value.map(oe=>{var je;return((je=c.item)==null?void 0:je.call(c,{item:oe,props:le(oe.props,{onClick:()=>D(oe)})}))??v(kn,le({key:oe.value},oe.props,{onClick:()=>D(oe)}),{prepend:ve=>{let{isSelected:_}=ve;return v(me,null,[e.multiple&&!e.hideSelected?v(Nc,{modelValue:_,ripple:!1,tabindex:"-1"},null):void 0,oe.props.prependIcon&&v(ze,{icon:oe.props.prependIcon},null)])},title:()=>{var ve,_;return i.value?oe.title:mk(oe.title,(ve=k(oe))==null?void 0:ve.title,((_=I.value)==null?void 0:_.length)??0)}})}),(re=c["append-item"])==null?void 0:re.call(c)]}})]}),x.value.map((T,O)=>{var je;function re(ve){ve.stopPropagation(),ve.preventDefault(),D(T)}const oe={"onClick:close":re,onMousedown(ve){ve.preventDefault(),ve.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0};return v("div",{key:T.value,class:["v-combobox__selection",O===d.value&&["v-combobox__selection--selected",b.value]],style:O===d.value?C.value:{}},[z?c.chip?v($e,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:T.title}}},{default:()=>{var ve;return[(ve=c.chip)==null?void 0:ve.call(c,{item:T,index:O,props:oe})]}}):v(Fa,le({key:"chip",closable:e.closableChips,size:"small",text:T.title},oe),null):((je=c.selection)==null?void 0:je.call(c,{item:T,index:O}))??v("span",{class:"v-combobox__selection-text"},[T.title,e.multiple&&O<x.value.length-1&&v("span",{class:"v-combobox__selection-comma"},[lt(",")])])])})])})}),Gt({isFocused:s,isPristine:i,menu:o,search:I,selectionIndex:d,filteredItems:E,select:D},l)}});const gk=W()({name:"VDialog",props:{fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...Da({origin:"center center",scrollStrategy:"block",transition:{component:Ol},zIndex:2400})},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const c=Ce(e,"modelValue"),{scopeId:a}=Na(),l=$();function s(r){var d,f;const u=r.relatedTarget,o=r.target;if(u!==o&&((d=l.value)!=null&&d.contentEl)&&((f=l.value)!=null&&f.globalTop)&&![document,l.value.contentEl].includes(o)&&!l.value.contentEl.contains(o)){const m=Yi(l.value.contentEl);if(!m.length)return;const h=m[0],g=m[m.length-1];u===h?g.focus():h.focus()}}Xe&&ae(()=>c.value&&e.retainFocus,r=>{r?document.addEventListener("focusin",s):document.removeEventListener("focusin",s)},{immediate:!0}),ae(c,async r=>{var u,o;await Oe(),r?(u=l.value.contentEl)==null||u.focus({preventScroll:!0}):(o=l.value.activatorEl)==null||o.focus({preventScroll:!0})});const i=y(()=>le({"aria-haspopup":"dialog","aria-expanded":String(c.value)},e.activatorProps));return X(()=>{const[r]=Sn.filterProps(e);return v(Sn,le({ref:l,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},r,{modelValue:c.value,"onUpdate:modelValue":u=>c.value=u,"aria-modal":"true",activatorProps:i.value,role:"dialog"},a),{activator:n.activator,default:function(){for(var u=arguments.length,o=new Array(u),d=0;d<u;d++)o[d]=arguments[d];return v($e,{root:!0},{default:()=>{var f;return[(f=n.default)==null?void 0:f.call(n,...o)]}})}})}),Gt({},l)}});const Ta=Symbol.for("vuetify:v-expansion-panel"),yk=["default","accordion","inset","popout"],bk=W()({name:"VExpansionPanels",props:{color:String,variant:{type:String,default:"default",validator:e=>yk.includes(e)},readonly:Boolean,...ne(),...Xc(),..._e(),...Ie()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;pc(e,Ta);const{themeClasses:c}=Pe(e),a=y(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return Je({VExpansionPanel:{color:Y(e,"color")},VExpansionPanelTitle:{readonly:Y(e,"readonly")}}),X(()=>v(e.tag,{class:["v-expansion-panels",c.value,a.value,e.class],style:e.style},n)),{}}}),Kv=ye({color:String,expandIcon:{type:pe,default:"$expand"},collapseIcon:{type:pe,default:"$collapse"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean},"v-expansion-panel-title"),Yv=W()({name:"VExpansionPanelTitle",directives:{Ripple:Un},props:{...ne(),...Kv()},setup(e,t){let{slots:n}=t;const c=Ve(Ta);if(!c)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:a,backgroundColorStyles:l}=Ze(e,"color"),s=y(()=>({collapseIcon:e.collapseIcon,disabled:c.disabled.value,expanded:c.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return X(()=>{var i;return He(v("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":c.isSelected.value},a.value,e.class],style:[l.value,e.style],type:"button",tabindex:c.disabled.value?-1:void 0,disabled:c.disabled.value,"aria-expanded":c.isSelected.value,onClick:e.readonly?void 0:c.toggle},[v("span",{class:"v-expansion-panel-title__overlay"},null),(i=n.default)==null?void 0:i.call(n,s.value),!e.hideActions&&v("span",{class:"v-expansion-panel-title__icon"},[n.actions?n.actions(s.value):v(ze,{icon:c.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[Ct("ripple"),e.ripple]])}),{}}}),Gv=W()({name:"VExpansionPanelText",props:{...ne(),...Yl()},setup(e,t){let{slots:n}=t;const c=Ve(Ta);if(!c)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:a,onAfterLeave:l}=br(e,c.isSelected);return X(()=>v(Ll,{onAfterLeave:l},{default:()=>{var s;return[He(v("div",{class:["v-expansion-panel-text",e.class],style:e.style},[n.default&&a.value&&v("div",{class:"v-expansion-panel-text__wrapper"},[(s=n.default)==null?void 0:s.call(n)])]),[[on,c.isSelected.value]])]}})),{}}}),pk=W()({name:"VExpansionPanel",props:{title:String,text:String,bgColor:String,...ne(),...tt(),...Zc(),...Yl(),...De(),..._e(),...Kv()},emits:{"group:selected":e=>!0},setup(e,t){let{slots:n}=t;const c=Qc(e,Ta),{backgroundColorClasses:a,backgroundColorStyles:l}=Ze(e,"bgColor"),{elevationClasses:s}=ot(e),{roundedClasses:i}=Ue(e),r=y(()=>(c==null?void 0:c.disabled.value)||e.disabled),u=y(()=>c.group.items.value.reduce((f,m,h)=>(c.group.selected.value.includes(m.id)&&f.push(h),f),[])),o=y(()=>{const f=c.group.items.value.findIndex(m=>m.id===c.id);return!c.isSelected.value&&u.value.some(m=>m-f===1)}),d=y(()=>{const f=c.group.items.value.findIndex(m=>m.id===c.id);return!c.isSelected.value&&u.value.some(m=>m-f===-1)});return Ke(Ta,c),X(()=>{const f=!!(n.text||e.text),m=!!(n.title||e.title);return v(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":c.isSelected.value,"v-expansion-panel--before-active":o.value,"v-expansion-panel--after-active":d.value,"v-expansion-panel--disabled":r.value},i.value,a.value,e.class],style:[l.value,e.style],"aria-expanded":c.isSelected.value},{default:()=>{var h;return[v("div",{class:["v-expansion-panel__shadow",...s.value]},null),m&&v(Yv,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[n.title?n.title():e.title]}),f&&v(Gv,{key:"text",eager:e.eager},{default:()=>[n.text?n.text():e.text]}),(h=n.default)==null?void 0:h.call(n)]}})}),{}}});const kk=W()({name:"VFileInput",inheritAttrs:!1,props:{chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(e)},...Vn({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>Tt(e).every(t=>t!=null&&typeof t=="object")},...Dl({clearable:!0})},emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:n,emit:c,slots:a}=t;const{t:l}=Bt(),s=Ce(e,"modelValue"),{isFocused:i,focus:r,blur:u}=Yn(e),o=y(()=>typeof e.showSize!="boolean"?e.showSize:void 0),d=y(()=>(s.value??[]).reduce((k,x)=>{let{size:q=0}=x;return k+q},0)),f=y(()=>Bo(d.value,o.value)),m=y(()=>(s.value??[]).map(k=>{const{name:x="",size:q=0}=k;return e.showSize?`${x} (${Bo(q,o.value)})`:x})),h=y(()=>{var x;const k=((x=s.value)==null?void 0:x.length)??0;return e.showSize?l(e.counterSizeString,k,f.value):l(e.counterString,k)}),g=$(),S=$(),b=$(),C=y(()=>i.value||e.active);function p(){var k;b.value!==document.activeElement&&((k=b.value)==null||k.focus()),i.value||r()}function P(k){I(k)}function j(k){c("mousedown:control",k)}function I(k){var x;(x=b.value)==null||x.click(),c("click:control",k)}function E(k){k.stopPropagation(),p(),Oe(()=>{s.value=[],Ki(e["onClick:clear"],k)})}return ae(s,k=>{(!Array.isArray(k)||!k.length)&&b.value&&(b.value.value="")}),X(()=>{const k=!!(a.counter||e.counter),x=!!(k||a.details),[q,V]=mc(n),[{modelValue:w,...M}]=it.filterProps(e),[N]=mr(e);return v(it,le({ref:g,modelValue:s.value,"onUpdate:modelValue":Z=>s.value=Z,class:["v-file-input",e.class],style:e.style,"onClick:prepend":P},q,M,{focused:i.value}),{...a,default:Z=>{let{id:F,isDisabled:H,isDirty:D,isReadonly:J,isValid:R}=Z;return v(La,le({ref:S,"prepend-icon":e.prependIcon,onMousedown:j,onClick:I,"onClick:clear":E,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},N,{id:F.value,active:C.value||D.value,dirty:D.value,disabled:H.value,focused:i.value,error:R.value===!1}),{...a,default:K=>{var ue;let{props:{class:z,...fe}}=K;return v(me,null,[v("input",le({ref:b,type:"file",readonly:J.value,disabled:H.value,multiple:e.multiple,name:e.name,onClick:B=>{B.stopPropagation(),p()},onChange:B=>{if(!B.target)return;const T=B.target;s.value=[...T.files??[]]},onFocus:p,onBlur:u},fe,V),null),v("div",{class:z},[!!((ue=s.value)!=null&&ue.length)&&(a.selection?a.selection({fileNames:m.value,totalBytes:d.value,totalBytesReadable:f.value}):e.chips?m.value.map(B=>v(Fa,{key:B,size:"small",color:e.color},{default:()=>[B]})):m.value.join(", "))])])}})},details:x?Z=>{var F,H;return v(me,null,[(F=a.details)==null?void 0:F.call(a,Z),k&&v(me,null,[v("span",null,null),v(Hl,{active:!!((H=s.value)!=null&&H.length),value:h.value},a.counter)])])}:void 0})}),Gt({},g,S,b)}});const Sk=W()({name:"VFooter",props:{app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...Et(),...ne(),...tt(),...Kc(),...De(),..._e({tag:"footer"}),...Ie()},setup(e,t){let{slots:n}=t;const{themeClasses:c}=Pe(e),{backgroundColorClasses:a,backgroundColorStyles:l}=Ze(Y(e,"color")),{borderClasses:s}=Lt(e),{elevationClasses:i}=ot(e),{roundedClasses:r}=Ue(e),u=$(32),{resizeRef:o}=sn(m=>{m.length&&(u.value=m[0].target.clientHeight)}),d=y(()=>e.height==="auto"?u.value:parseInt(e.height,10)),{layoutItemStyles:f}=Yc({id:e.name,order:y(()=>parseInt(e.order,10)),position:y(()=>"bottom"),layoutSize:d,elementSize:y(()=>e.height==="auto"?void 0:d.value),active:y(()=>e.app),absolute:Y(e,"absolute")});return X(()=>v(e.tag,{ref:o,class:["v-footer",c.value,a.value,s.value,i.value,r.value,e.class],style:[l.value,e.app?f.value:void 0,e.style]},n)),{}}}),Ck=W()({name:"VForm",props:{...ne(),...w0()},emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,t){let{slots:n,emit:c}=t;const a=j0(e),l=$();function s(r){r.preventDefault(),a.reset()}function i(r){const u=r,o=a.validate();u.then=o.then.bind(o),u.catch=o.catch.bind(o),u.finally=o.finally.bind(o),c("submit",u),u.defaultPrevented||o.then(d=>{var m;let{valid:f}=d;f&&((m=l.value)==null||m.submit())}),u.preventDefault()}return X(()=>{var r;return v("form",{ref:l,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:s,onSubmit:i},[(r=n.default)==null?void 0:r.call(n,a)])}),Gt(a,l)}});const _k=W()({name:"VContainer",props:{fluid:{type:Boolean,default:!1},...ne(),..._e()},setup(e,t){let{slots:n}=t;return X(()=>v(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},e.class],style:e.style},n)),{}}}),Xv=(()=>Bl.reduce((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e),{}))(),Zv=(()=>Bl.reduce((e,t)=>{const n="offset"+Cn(t);return e[n]={type:[String,Number],default:null},e},{}))(),Qv=(()=>Bl.reduce((e,t)=>{const n="order"+Cn(t);return e[n]={type:[String,Number],default:null},e},{}))(),gu={col:Object.keys(Xv),offset:Object.keys(Zv),order:Object.keys(Qv)};function xk(e,t,n){let c=e;if(!(n==null||n===!1)){if(t){const a=t.replace(e,"");c+=`-${a}`}return e==="col"&&(c="v-"+c),e==="col"&&(n===""||n===!0)||(c+=`-${n}`),c.toLowerCase()}}const wk=["auto","start","end","center","baseline","stretch"],jk=W()({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...Xv,offset:{type:[String,Number],default:null},...Zv,order:{type:[String,Number],default:null},...Qv,alignSelf:{type:String,default:null,validator:e=>wk.includes(e)},...ne(),..._e()},setup(e,t){let{slots:n}=t;const c=y(()=>{const a=[];let l;for(l in gu)gu[l].forEach(i=>{const r=e[i],u=xk(l,i,r);u&&a.push(u)});const s=a.some(i=>i.startsWith("v-col-"));return a.push({"v-col":!s||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),a});return()=>{var a;return rn(e.tag,{class:[c.value,e.class],style:e.style},(a=n.default)==null?void 0:a.call(n))}}}),Cr=["start","end","center"],Jv=["space-between","space-around","space-evenly"];function _r(e,t){return Bl.reduce((n,c)=>{const a=e+Cn(c);return n[a]=t(),n},{})}const qk=[...Cr,"baseline","stretch"],em=e=>qk.includes(e),tm=_r("align",()=>({type:String,default:null,validator:em})),Vk=[...Cr,...Jv],nm=e=>Vk.includes(e),cm=_r("justify",()=>({type:String,default:null,validator:nm})),Ik=[...Cr,...Jv,"stretch"],am=e=>Ik.includes(e),lm=_r("alignContent",()=>({type:String,default:null,validator:am})),yu={align:Object.keys(tm),justify:Object.keys(cm),alignContent:Object.keys(lm)},Ek={align:"align",justify:"justify",alignContent:"align-content"};function Ak(e,t,n){let c=Ek[e];if(n!=null){if(t){const a=t.replace(e,"");c+=`-${a}`}return c+=`-${n}`,c.toLowerCase()}}const Pk=W()({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:em},...tm,justify:{type:String,default:null,validator:nm},...cm,alignContent:{type:String,default:null,validator:am},...lm,...ne(),..._e()},setup(e,t){let{slots:n}=t;const c=y(()=>{const a=[];let l;for(l in yu)yu[l].forEach(s=>{const i=e[s],r=Ak(l,s,i);r&&a.push(r)});return a.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),a});return()=>{var a;return rn(e.tag,{class:["v-row",c.value,e.class],style:e.style},(a=n.default)==null?void 0:a.call(n))}}}),Tk=Yt("flex-grow-1","div","VSpacer"),$k=W()({name:"VHover",props:{disabled:Boolean,modelValue:{type:Boolean,default:void 0},...gv()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const c=Ce(e,"modelValue"),{runOpenDelay:a,runCloseDelay:l}=yv(e,s=>!e.disabled&&(c.value=s));return()=>{var s;return(s=n.default)==null?void 0:s.call(n,{isHovering:c.value,props:{onMouseenter:a,onMouseleave:l}})}}});const sm=Symbol.for("vuetify:v-item-group"),Mk=W()({name:"VItemGroup",props:{...ne(),...Xc({selectedClass:"v-item--selected"}),..._e(),...Ie()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const{themeClasses:c}=Pe(e),{isSelected:a,select:l,next:s,prev:i,selected:r}=pc(e,sm);return()=>v(e.tag,{class:["v-item-group",c.value,e.class],style:e.style},{default:()=>{var u;return[(u=n.default)==null?void 0:u.call(n,{isSelected:a,select:l,next:s,prev:i,selected:r.value})]}})}}),Bk=W()({name:"VItem",props:Zc(),emits:{"group:selected":e=>!0},setup(e,t){let{slots:n}=t;const{isSelected:c,select:a,toggle:l,selectedClass:s,value:i,disabled:r}=Qc(e,sm);return()=>{var u;return(u=n.default)==null?void 0:u.call(n,{isSelected:c.value,selectedClass:s.value,select:a,toggle:l,value:i.value,disabled:r.value})}}});const Rk=Yt("v-kbd");const Ok=W()({name:"VLayout",props:{...ne(),...wf()},setup(e,t){let{slots:n}=t;const{layoutClasses:c,layoutStyles:a,getLayoutItem:l,items:s,layoutRef:i}=jf(e);return X(()=>{var r;return v("div",{ref:i,class:[c.value,e.class],style:[a.value,e.style]},[(r=n.default)==null?void 0:r.call(n)])}),{getLayoutItem:l,items:s}}});const Lk=W()({name:"VLayoutItem",props:{position:{type:String,required:!0},size:{type:[Number,String],default:300},modelValue:Boolean,...ne(),...Kc()},setup(e,t){let{slots:n}=t;const{layoutItemStyles:c}=Yc({id:e.name,order:y(()=>parseInt(e.order,10)),position:Y(e,"position"),elementSize:Y(e,"size"),layoutSize:Y(e,"size"),active:Y(e,"modelValue"),absolute:Y(e,"absolute")});return()=>{var a;return v("div",{class:["v-layout-item",e.class],style:[c.value,e.style]},[(a=n.default)==null?void 0:a.call(n)])}}}),Fk=W()({name:"VLazy",directives:{intersect:Ba},props:{modelValue:Boolean,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},...ne(),...Rt(),..._e(),...jn({transition:"fade-transition"})},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const{dimensionStyles:c}=Ot(e),a=Ce(e,"modelValue");function l(s){a.value||(a.value=s)}return X(()=>He(v(e.tag,{class:["v-lazy",e.class],style:[c.value,e.style]},{default:()=>[a.value&&v(Ht,{transition:e.transition,appear:!0},{default:()=>{var s;return[(s=n.default)==null?void 0:s.call(n)]}})]}),[[Ct("intersect"),{handler:l,options:e.options},null]])),{}}});const Nk=W()({name:"VLocaleProvider",props:{locale:String,fallbackLocale:String,messages:Object,rtl:{type:Boolean,default:void 0},...ne()},setup(e,t){let{slots:n}=t;const{rtlClasses:c}=Xb(e);return X(()=>{var a;return v("div",{class:["v-locale-provider",c.value,e.class],style:e.style},[(a=n.default)==null?void 0:a.call(n)])}),{}}});const Dk=W()({name:"VMain",props:{scrollable:Boolean,...ne(),..._e({tag:"main"})},setup(e,t){let{slots:n}=t;const{mainStyles:c}=O2(),{ssrBootStyles:a}=gc();return X(()=>v(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[c.value,a.value,e.style]},{default:()=>{var l,s;return[e.scrollable?v("div",{class:"v-main__scroller"},[(l=n.default)==null?void 0:l.call(n)]):(s=n.default)==null?void 0:s.call(n)]}})),{}}});function zk(e){let{rootEl:t,isSticky:n,layoutItemStyles:c}=e;const a=$(!1),l=$(0),s=y(()=>{const u=typeof a.value=="boolean"?"top":a.value;return[n.value?{top:"auto",bottom:"auto",height:void 0}:void 0,a.value?{[u]:ie(l.value)}:{top:c.value.top}]});mt(()=>{ae(n,u=>{u?window.addEventListener("scroll",r,{passive:!0}):window.removeEventListener("scroll",r)},{immediate:!0})}),pt(()=>{document.removeEventListener("scroll",r)});let i=0;function r(){const u=i>window.scrollY?"up":"down",o=t.value.getBoundingClientRect(),d=parseFloat(c.value.top??0),f=window.scrollY-Math.max(0,l.value-d),m=o.height+Math.max(l.value,d)-window.scrollY-window.innerHeight;o.height<window.innerHeight-d?(a.value="top",l.value=d):u==="up"&&a.value==="bottom"||u==="down"&&a.value==="top"?(l.value=window.scrollY+o.top,a.value=!0):u==="down"&&m<=0?(l.value=0,a.value="bottom"):u==="up"&&f<=0&&(l.value=o.top+f,a.value="top"),i=window.scrollY}return{isStuck:a,stickyStyles:s}}const Hk=100,Uk=20;function bu(e){const t=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*t}function pu(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let t=0;for(let n=e.length-1;n>0;n--){if(e[n].t===e[n-1].t)continue;const c=bu(t),a=(e[n].d-e[n-1].d)/(e[n].t-e[n-1].t);t+=(a-c)*Math.abs(a),n===e.length-1&&(t*=.5)}return bu(t)*1e3}function Wk(){const e={};function t(a){Array.from(a.changedTouches).forEach(l=>{(e[l.identifier]??(e[l.identifier]=new pb(Uk))).push([a.timeStamp,l])})}function n(a){Array.from(a.changedTouches).forEach(l=>{delete e[l.identifier]})}function c(a){var u;const l=(u=e[a])==null?void 0:u.values().reverse();if(!l)throw new Error(`No samples for touch id ${a}`);const s=l[0],i=[],r=[];for(const o of l){if(s[0]-o[0]>Hk)break;i.push({t:o[0],d:o[1].clientX}),r.push({t:o[0],d:o[1].clientY})}return{x:pu(i),y:pu(r),get direction(){const{x:o,y:d}=this,[f,m]=[Math.abs(o),Math.abs(d)];return f>m&&o>=0?"right":f>m&&o<=0?"left":m>f&&d>=0?"down":m>f&&d<=0?"up":Kk()}}}return{addMovement:t,endTouch:n,getVelocity:c}}function Kk(){throw new Error}function Yk(e){let{isActive:t,isTemporary:n,width:c,touchless:a,position:l}=e;mt(()=>{window.addEventListener("touchstart",b,{passive:!0}),window.addEventListener("touchmove",C,{passive:!1}),window.addEventListener("touchend",p,{passive:!0})}),pt(()=>{window.removeEventListener("touchstart",b),window.removeEventListener("touchmove",C),window.removeEventListener("touchend",p)});const s=y(()=>["left","right"].includes(l.value)),{addMovement:i,endTouch:r,getVelocity:u}=Wk();let o=!1;const d=$(!1),f=$(0),m=$(0);let h;function g(j,I){return(l.value==="left"?j:l.value==="right"?document.documentElement.clientWidth-j:l.value==="top"?j:l.value==="bottom"?document.documentElement.clientHeight-j:wc())-(I?c.value:0)}function S(j){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const E=l.value==="left"?(j-m.value)/c.value:l.value==="right"?(document.documentElement.clientWidth-j-m.value)/c.value:l.value==="top"?(j-m.value)/c.value:l.value==="bottom"?(document.documentElement.clientHeight-j-m.value)/c.value:wc();return I?Math.max(0,Math.min(1,E)):E}function b(j){if(a.value)return;const I=j.changedTouches[0].clientX,E=j.changedTouches[0].clientY,k=25,x=l.value==="left"?I<k:l.value==="right"?I>document.documentElement.clientWidth-k:l.value==="top"?E<k:l.value==="bottom"?E>document.documentElement.clientHeight-k:wc(),q=t.value&&(l.value==="left"?I<c.value:l.value==="right"?I>document.documentElement.clientWidth-c.value:l.value==="top"?E<c.value:l.value==="bottom"?E>document.documentElement.clientHeight-c.value:wc());(x||q||t.value&&n.value)&&(o=!0,h=[I,E],m.value=g(s.value?I:E,t.value),f.value=S(s.value?I:E),r(j),i(j))}function C(j){const I=j.changedTouches[0].clientX,E=j.changedTouches[0].clientY;if(o){if(!j.cancelable){o=!1;return}const x=Math.abs(I-h[0]),q=Math.abs(E-h[1]);(s.value?x>q&&x>3:q>x&&q>3)?(d.value=!0,o=!1):(s.value?q:x)>3&&(o=!1)}if(!d.value)return;j.preventDefault(),i(j);const k=S(s.value?I:E,!1);f.value=Math.max(0,Math.min(1,k)),k>1?m.value=g(s.value?I:E,!0):k<0&&(m.value=g(s.value?I:E,!1))}function p(j){if(o=!1,!d.value)return;i(j),d.value=!1;const I=u(j.changedTouches[0].identifier),E=Math.abs(I.x),k=Math.abs(I.y);(s.value?E>k&&E>400:k>E&&k>3)?t.value=I.direction===({left:"right",right:"left",top:"down",bottom:"up"}[l.value]||wc()):t.value=f.value>.5}const P=y(()=>d.value?{transform:l.value==="left"?`translateX(calc(-100% + ${f.value*c.value}px))`:l.value==="right"?`translateX(calc(100% - ${f.value*c.value}px))`:l.value==="top"?`translateY(calc(-100% + ${f.value*c.value}px))`:l.value==="bottom"?`translateY(calc(100% - ${f.value*c.value}px))`:wc(),transition:"none"}:void 0);return{isDragging:d,dragProgress:f,dragStyles:P}}function wc(){throw new Error}const Gk=["start","end","left","right","top","bottom"],Xk=W()({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Gk.includes(e)},sticky:Boolean,...Et(),...ne(),...tt(),...Kc(),...De(),..._e({tag:"nav"}),...Ie()},emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,t){let{attrs:n,emit:c,slots:a}=t;const{isRtl:l}=wn(),{themeClasses:s}=Pe(e),{borderClasses:i}=Lt(e),{backgroundColorClasses:r,backgroundColorStyles:u}=Ze(Y(e,"color")),{elevationClasses:o}=ot(e),{mobile:d}=hc(),{roundedClasses:f}=Ue(e),m=Uf(),h=Ce(e,"modelValue",null,D=>!!D),{ssrBootStyles:g}=gc(),S=$(),b=$(!1),C=y(()=>e.rail&&e.expandOnHover&&b.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),p=y(()=>Hs(e.location,l.value)),P=y(()=>!e.permanent&&(d.value||e.temporary)),j=y(()=>e.sticky&&!P.value&&p.value!=="bottom");e.expandOnHover&&e.rail!=null&&ae(b,D=>c("update:rail",!D)),e.disableResizeWatcher||ae(P,D=>!e.permanent&&Oe(()=>h.value=!D)),!e.disableRouteWatcher&&m&&ae(m.currentRoute,()=>P.value&&(h.value=!1)),ae(()=>e.permanent,D=>{D&&(h.value=!0)}),El(()=>{e.modelValue!=null||P.value||(h.value=e.permanent||!d.value)});const{isDragging:I,dragProgress:E,dragStyles:k}=Yk({isActive:h,isTemporary:P,width:C,touchless:Y(e,"touchless"),position:p}),x=y(()=>{const D=P.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):C.value;return I.value?D*E.value:D}),{layoutItemStyles:q,layoutItemScrimStyles:V}=Yc({id:e.name,order:y(()=>parseInt(e.order,10)),position:p,layoutSize:x,elementSize:C,active:y(()=>h.value||I.value),disableTransitions:y(()=>I.value),absolute:y(()=>e.absolute||j.value&&typeof w.value!="string")}),{isStuck:w,stickyStyles:M}=zk({rootEl:S,isSticky:j,layoutItemStyles:q}),N=Ze(y(()=>typeof e.scrim=="string"?e.scrim:null)),Z=y(()=>({...I.value?{opacity:E.value*.2,transition:"none"}:void 0,...V.value}));Je({VList:{bgColor:"transparent"}});function F(){b.value=!0}function H(){b.value=!1}return X(()=>{const D=a.image||e.image;return v(me,null,[v(e.tag,le({ref:S,onMouseenter:F,onMouseleave:H,class:["v-navigation-drawer",`v-navigation-drawer--${p.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":b.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":P.value,"v-navigation-drawer--active":h.value,"v-navigation-drawer--sticky":j.value},s.value,r.value,i.value,o.value,f.value,e.class],style:[u.value,q.value,k.value,g.value,M.value,e.style]},n),{default:()=>{var J,R,K,z;return[D&&v("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?(J=a.image)==null?void 0:J.call(a,{image:e.image}):v("img",{src:e.image,alt:""},null)]),a.prepend&&v("div",{class:"v-navigation-drawer__prepend"},[(R=a.prepend)==null?void 0:R.call(a)]),v("div",{class:"v-navigation-drawer__content"},[(K=a.default)==null?void 0:K.call(a)]),a.append&&v("div",{class:"v-navigation-drawer__append"},[(z=a.append)==null?void 0:z.call(a)])]}}),v(ln,{name:"fade-transition"},{default:()=>[P.value&&(I.value||h.value)&&!!e.scrim&&v("div",{class:["v-navigation-drawer__scrim",N.backgroundColorClasses.value],style:[Z.value,N.backgroundColorStyles.value],onClick:()=>h.value=!1},null)]})])}),{isStuck:w}}}),Zk=Mt({name:"VNoSsr",setup(e,t){let{slots:n}=t;const c=kv();return()=>{var a;return c.value&&((a=n.default)==null?void 0:a.call(n))}}});function Qk(){const e=$([]);rd(()=>e.value=[]);function t(n,c){e.value[c]=n}return{refs:e,updateRef:t}}const Jk=W()({name:"VPagination",props:{activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:pe,default:"$first"},prevIcon:{type:pe,default:"$prev"},nextIcon:{type:pe,default:"$next"},lastIcon:{type:pe,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...Et(),...ne(),...nt(),...tt(),...De(),...qn(),..._e({tag:"nav"}),...Ie(),...Ft({variant:"text"})},emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,t){let{slots:n,emit:c}=t;const a=Ce(e,"modelValue"),{t:l,n:s}=Bt(),{isRtl:i}=wn(),{themeClasses:r}=Pe(e),{width:u}=hc(),o=$(-1);Je(void 0,{scoped:!0});const{resizeRef:d}=sn(k=>{if(!k.length)return;const{target:x,contentRect:q}=k[0],V=x.querySelector(".v-pagination__list > *");if(!V)return;const w=q.width,M=V.offsetWidth+parseFloat(getComputedStyle(V).marginRight)*2;o.value=g(w,M)}),f=y(()=>parseInt(e.length,10)),m=y(()=>parseInt(e.start,10)),h=y(()=>e.totalVisible?parseInt(e.totalVisible,10):o.value>=0?o.value:g(u.value,58));function g(k,x){const q=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((k-x*q)/x).toFixed(2)))}const S=y(()=>{if(f.value<=0||isNaN(f.value)||f.value>Number.MAX_SAFE_INTEGER)return[];if(h.value<=1)return[a.value];if(f.value<=h.value)return cn(f.value,m.value);const k=h.value%2===0,x=k?h.value/2:Math.floor(h.value/2),q=k?x:x+1,V=f.value-x;if(q-a.value>=0)return[...cn(Math.max(1,h.value-1),m.value),e.ellipsis,f.value];if(a.value-V>=(k?1:0)){const w=h.value-1,M=f.value-w+m.value;return[m.value,e.ellipsis,...cn(w,M)]}else{const w=Math.max(1,h.value-3),M=w===1?a.value:a.value-Math.ceil(w/2)+m.value;return[m.value,e.ellipsis,...cn(w,M),e.ellipsis,f.value]}});function b(k,x,q){k.preventDefault(),a.value=x,q&&c(q,x)}const{refs:C,updateRef:p}=Qk();Je({VPaginationBtn:{color:Y(e,"color"),border:Y(e,"border"),density:Y(e,"density"),size:Y(e,"size"),variant:Y(e,"variant"),rounded:Y(e,"rounded"),elevation:Y(e,"elevation")}});const P=y(()=>S.value.map((k,x)=>{const q=V=>p(V,x);if(typeof k=="string")return{isActive:!1,key:`ellipsis-${x}`,page:k,props:{ref:q,ellipsis:!0,icon:!0,disabled:!0}};{const V=k===a.value;return{isActive:V,key:k,page:s(k),props:{ref:q,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:V?e.activeColor:e.color,ariaCurrent:V,ariaLabel:l(V?e.currentPageAriaLabel:e.pageAriaLabel,k),onClick:w=>b(w,k)}}}})),j=y(()=>{const k=!!e.disabled||a.value<=m.value,x=!!e.disabled||a.value>=m.value+f.value-1;return{first:e.showFirstLastPage?{icon:i.value?e.lastIcon:e.firstIcon,onClick:q=>b(q,m.value,"first"),disabled:k,ariaLabel:l(e.firstAriaLabel),ariaDisabled:k}:void 0,prev:{icon:i.value?e.nextIcon:e.prevIcon,onClick:q=>b(q,a.value-1,"prev"),disabled:k,ariaLabel:l(e.previousAriaLabel),ariaDisabled:k},next:{icon:i.value?e.prevIcon:e.nextIcon,onClick:q=>b(q,a.value+1,"next"),disabled:x,ariaLabel:l(e.nextAriaLabel),ariaDisabled:x},last:e.showFirstLastPage?{icon:i.value?e.firstIcon:e.lastIcon,onClick:q=>b(q,m.value+f.value-1,"last"),disabled:x,ariaLabel:l(e.lastAriaLabel),ariaDisabled:x}:void 0}});function I(){var x;const k=a.value-m.value;(x=C.value[k])==null||x.$el.focus()}function E(k){k.key===Ds.left&&!e.disabled&&a.value>+e.start?(a.value=a.value-1,Oe(I)):k.key===Ds.right&&!e.disabled&&a.value<m.value+f.value-1&&(a.value=a.value+1,Oe(I))}return X(()=>v(e.tag,{ref:d,class:["v-pagination",r.value,e.class],style:e.style,role:"navigation","aria-label":l(e.ariaLabel),onKeydown:E,"data-test":"v-pagination-root"},{default:()=>[v("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&v("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[n.first?n.first(j.value.first):v(bt,le({_as:"VPaginationBtn"},j.value.first),null)]),v("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[n.prev?n.prev(j.value.prev):v(bt,le({_as:"VPaginationBtn"},j.value.prev),null)]),P.value.map((k,x)=>v("li",{key:k.key,class:["v-pagination__item",{"v-pagination__item--is-active":k.isActive}],"data-test":"v-pagination-item"},[n.item?n.item(k):v(bt,le({_as:"VPaginationBtn"},k.props),{default:()=>[k.page]})])),v("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[n.next?n.next(j.value.next):v(bt,le({_as:"VPaginationBtn"},j.value.next),null)]),e.showFirstLastPage&&v("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[n.last?n.last(j.value.last):v(bt,le({_as:"VPaginationBtn"},j.value.last),null)])])]})),{}}});function e4(e){return Math.floor(Math.abs(e))*Math.sign(e)}const t4=W()({name:"VParallax",props:{scale:{type:[Number,String],default:.5},...ne()},setup(e,t){let{slots:n}=t;const{intersectionRef:c,isIntersecting:a}=rr(),{resizeRef:l,contentRect:s}=sn(),{height:i}=hc(),r=$();Kt(()=>{var m;c.value=l.value=(m=r.value)==null?void 0:m.$el});let u;ae(a,m=>{m?(u=gf(c.value),u=u===document.scrollingElement?document:u,u.addEventListener("scroll",f,{passive:!0}),f()):u.removeEventListener("scroll",f)}),pt(()=>{u==null||u.removeEventListener("scroll",f)}),ae(i,f),ae(()=>{var m;return(m=s.value)==null?void 0:m.height},f);const o=y(()=>1-ft(+e.scale));let d=-1;function f(){a.value&&(cancelAnimationFrame(d),d=requestAnimationFrame(()=>{var j;const m=((j=r.value)==null?void 0:j.$el).querySelector(".v-img__img");if(!m)return;const h=u instanceof Document?document.documentElement.clientHeight:u.clientHeight,g=u instanceof Document?window.scrollY:u.scrollTop,S=c.value.getBoundingClientRect().top+g,b=s.value.height,C=S+(b-h)/2,p=e4((g-C)*o.value),P=Math.max(1,(o.value*(h-b)+b)/b);m.style.setProperty("transform",`translateY(${p}px) scale(${P})`)}))}return X(()=>v(Gc,{class:["v-parallax",{"v-parallax--active":a.value},e.class],style:e.style,ref:r,cover:!0,onLoadstart:f,onLoad:f},n)),{}}}),n4=W()({name:"VRadio",props:{...Wl({falseIcon:"$radioOff",trueIcon:"$radioOn"})},setup(e,t){let{slots:n}=t;return X(()=>v(Fc,le(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),n)),{}}});const c4=W()({name:"VRadioGroup",inheritAttrs:!1,props:{height:{type:[Number,String],default:"auto"},...Vn(),...un(hr(),["multiple"]),trueIcon:{type:pe,default:"$radioOn"},falseIcon:{type:pe,default:"$radioOff"},type:{type:String,default:"radio"}},emits:{"update:modelValue":e=>!0},setup(e,t){let{attrs:n,slots:c}=t;const a=ht(),l=y(()=>e.id||`radio-group-${a}`),s=Ce(e,"modelValue");return X(()=>{const[i,r]=mc(n),[u,o]=it.filterProps(e),[d,f]=Fc.filterProps(e),m=c.label?c.label({label:e.label,props:{for:l.value}}):e.label;return v(it,le({class:["v-radio-group",e.class],style:e.style},i,u,{modelValue:s.value,"onUpdate:modelValue":h=>s.value=h,id:l.value}),{...c,default:h=>{let{id:g,messagesId:S,isDisabled:b,isReadonly:C}=h;return v(me,null,[m&&v(na,{id:g.value},{default:()=>[m]}),v(Jf,le(d,{id:g.value,"aria-describedby":S.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:b.value,readonly:C.value,"aria-labelledby":m?g.value:void 0,multiple:!1},r,{modelValue:s.value,"onUpdate:modelValue":p=>s.value=p}),c)])}})}),{}}}),a4=W()({name:"VRangeSlider",props:{...Nl(),...Vn(),...zv(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,end:e=>!0,start:e=>!0},setup(e,t){let{slots:n,emit:c}=t;const a=$(),l=$(),s=$();function i(k){if(!a.value||!l.value)return;const x=ui(k,a.value.$el,e.direction),q=ui(k,l.value.$el,e.direction),V=Math.abs(x),w=Math.abs(q);return V<w||V===w&&x<0?a.value.$el:l.value.$el}const r=Hv(e),u=Ce(e,"modelValue",void 0,k=>k!=null&&k.length?k.map(x=>r.roundValue(x)):[0,0]),{activeThumbRef:o,hasLabels:d,max:f,min:m,mousePressed:h,onSliderMousedown:g,onSliderTouchstart:S,position:b,trackContainerRef:C}=Uv({props:e,steps:r,onSliderStart:()=>{c("start",u.value)},onSliderEnd:k=>{var V;let{value:x}=k;const q=o.value===((V=a.value)==null?void 0:V.$el)?[x,u.value[1]]:[u.value[0],x];u.value=q,c("end",q)},onSliderMove:k=>{var w,M,N,Z;let{value:x}=k;const[q,V]=u.value;!e.strict&&q===V&&q!==m.value&&(o.value=x>q?(w=l.value)==null?void 0:w.$el:(M=a.value)==null?void 0:M.$el,(N=o.value)==null||N.focus()),o.value===((Z=a.value)==null?void 0:Z.$el)?u.value=[Math.min(x,V),V]:u.value=[q,Math.max(q,x)]},getActiveThumb:i}),{isFocused:p,focus:P,blur:j}=Yn(e),I=y(()=>b(u.value[0])),E=y(()=>b(u.value[1]));return X(()=>{const[k,x]=it.filterProps(e),q=!!(e.label||n.label||n.prepend);return v(it,le({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!n["tick-label"]||d.value,"v-slider--focused":p.value,"v-slider--pressed":h.value,"v-slider--disabled":e.disabled},e.class],style:e.style,ref:s},k,{focused:p.value}),{...n,prepend:q?V=>{var w,M;return v(me,null,[((w=n.label)==null?void 0:w.call(n,V))??e.label?v(na,{class:"v-slider__label",text:e.label},null):void 0,(M=n.prepend)==null?void 0:M.call(n,V)])}:void 0,default:V=>{var N,Z;let{id:w,messagesId:M}=V;return v("div",{class:"v-slider__container",onMousedown:g,onTouchstartPassive:S},[v("input",{id:`${w.value}_start`,name:e.name||w.value,disabled:e.disabled,readonly:e.readonly,tabindex:"-1",value:u.value[0]},null),v("input",{id:`${w.value}_stop`,name:e.name||w.value,disabled:e.disabled,readonly:e.readonly,tabindex:"-1",value:u.value[1]},null),v(Wv,{ref:C,start:I.value,stop:E.value},{"tick-label":n["tick-label"]}),v(di,{ref:a,"aria-describedby":M.value,focused:p&&o.value===((N=a.value)==null?void 0:N.$el),modelValue:u.value[0],"onUpdate:modelValue":F=>u.value=[F,u.value[1]],onFocus:F=>{var H,D,J,R;P(),o.value=(H=a.value)==null?void 0:H.$el,u.value[0]===u.value[1]&&u.value[1]===m.value&&F.relatedTarget!==((D=l.value)==null?void 0:D.$el)&&((J=a.value)==null||J.$el.blur(),(R=l.value)==null||R.$el.focus())},onBlur:()=>{j(),o.value=void 0},min:m.value,max:u.value[1],position:I.value},{"thumb-label":n["thumb-label"]}),v(di,{ref:l,"aria-describedby":M.value,focused:p&&o.value===((Z=l.value)==null?void 0:Z.$el),modelValue:u.value[1],"onUpdate:modelValue":F=>u.value=[u.value[0],F],onFocus:F=>{var H,D,J,R;P(),o.value=(H=l.value)==null?void 0:H.$el,u.value[0]===u.value[1]&&u.value[0]===f.value&&F.relatedTarget!==((D=a.value)==null?void 0:D.$el)&&((J=l.value)==null||J.$el.blur(),(R=a.value)==null||R.$el.focus())},onBlur:()=>{j(),o.value=void 0},min:u.value[0],max:f.value,position:E.value},{"thumb-label":n["thumb-label"]})])}})}),{}}});const l4=W()({name:"VRating",props:{name:String,itemAriaLabel:{type:String,default:"$vuetify.rating.ariaLabel.item"},activeColor:String,color:String,clearable:Boolean,disabled:Boolean,emptyIcon:{type:pe,default:"$ratingEmpty"},fullIcon:{type:pe,default:"$ratingFull"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,modelValue:{type:[Number,String],default:0},itemLabels:Array,itemLabelPosition:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},ripple:Boolean,...ne(),...nt(),...qn(),..._e(),...Ie()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const{t:c}=Bt(),{themeClasses:a}=Pe(e),l=Ce(e,"modelValue"),s=y(()=>ft(parseFloat(l.value),0,+e.length)),i=y(()=>cn(Number(e.length),1)),r=y(()=>i.value.flatMap(g=>e.halfIncrements?[g-.5,g]:[g])),u=$(-1),o=y(()=>r.value.map(g=>{const S=e.hover&&u.value>-1,b=s.value>=g,C=u.value>=g,P=(S?C:b)?e.fullIcon:e.emptyIcon,j=e.activeColor??e.color,I=b||C?j:e.color;return{isFilled:b,isHovered:C,icon:P,color:I}})),d=y(()=>[0,...r.value].map(g=>{function S(){u.value=g}function b(){u.value=-1}function C(){e.disabled||e.readonly||(l.value=s.value===g&&e.clearable?0:g)}return{onMouseenter:e.hover?S:void 0,onMouseleave:e.hover?b:void 0,onClick:C}})),f=y(()=>e.name??`v-rating-${ht()}`);function m(g){var k,x;let{value:S,index:b,showStar:C=!0}=g;const{onMouseenter:p,onMouseleave:P,onClick:j}=d.value[b+1],I=`${f.value}-${String(S).replace(".","-")}`,E={color:(k=o.value[b])==null?void 0:k.color,density:e.density,disabled:e.disabled,icon:(x=o.value[b])==null?void 0:x.icon,ripple:e.ripple,size:e.size,variant:"plain"};return v(me,null,[v("label",{for:I,class:{"v-rating__item--half":e.halfIncrements&&S%1>0,"v-rating__item--full":e.halfIncrements&&S%1===0},onMouseenter:p,onMouseleave:P,onClick:j},[v("span",{class:"v-rating__hidden"},[c(e.itemAriaLabel,S,e.length)]),C?n.item?n.item({...o.value[b],props:E,value:S,index:b,rating:s.value}):v(bt,E,null):void 0]),v("input",{class:"v-rating__hidden",name:f.value,id:I,type:"radio",value:S,checked:s.value===S,tabindex:-1,readonly:e.readonly,disabled:e.disabled},null)])}function h(g){return n["item-label"]?n["item-label"](g):g.label?v("span",null,[g.label]):v("span",null,[lt(" ")])}return X(()=>{var S;const g=!!((S=e.itemLabels)!=null&&S.length)||n["item-label"];return v(e.tag,{class:["v-rating",{"v-rating--hover":e.hover,"v-rating--readonly":e.readonly},a.value,e.class],style:e.style},{default:()=>[v(m,{value:0,index:-1,showStar:!1},null),i.value.map((b,C)=>{var p,P;return v("div",{class:"v-rating__wrapper"},[g&&e.itemLabelPosition==="top"?h({value:b,index:C,label:(p=e.itemLabels)==null?void 0:p[C]}):void 0,v("div",{class:"v-rating__item"},[e.halfIncrements?v(me,null,[v(m,{value:b-.5,index:C*2},null),v(m,{value:b,index:C*2+1},null)]):v(m,{value:b,index:C},null)]),g&&e.itemLabelPosition==="bottom"?h({value:b,index:C,label:(P=e.itemLabels)==null?void 0:P[C]}):void 0])})]})}),{}}});function ku(e){const n=Math.abs(e);return Math.sign(e)*(n/((1/.501-2)*(1-n)+1))}function Su(e){let{selectedElement:t,containerSize:n,contentSize:c,isRtl:a,currentScrollOffset:l,isHorizontal:s}=e;const i=s?t.clientWidth:t.clientHeight,r=s?t.offsetLeft:t.offsetTop,u=a&&s?c-r-i:r,o=n+l,d=i+u,f=i*.4;return u<=l?l=Math.max(u-f,0):o<=d&&(l=Math.min(l-(o-d-f),c-n)),l}function s4(e){let{selectedElement:t,containerSize:n,contentSize:c,isRtl:a,isHorizontal:l}=e;const s=l?t.clientWidth:t.clientHeight,i=l?t.offsetLeft:t.offsetTop,r=a&&l?c-i-s/2-n/2:i+s/2-n/2;return Math.min(c-n,Math.max(0,r))}const im=Symbol.for("vuetify:v-slide-group"),rm=ye({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:im},nextIcon:{type:pe,default:"$next"},prevIcon:{type:pe,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...ne(),..._e(),...Xc({selectedClass:"v-slide-group-item--active"})},"v-slide-group"),vi=W()({name:"VSlideGroup",props:rm(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const{isRtl:c}=wn(),{mobile:a}=hc(),l=pc(e,e.symbol),s=$(!1),i=$(0),r=$(0),u=$(0),o=y(()=>e.direction==="horizontal"),{resizeRef:d,contentRect:f}=sn(),{resizeRef:m,contentRect:h}=sn(),g=y(()=>l.selected.value.length?l.items.value.findIndex(R=>R.id===l.selected.value[0]):-1),S=y(()=>l.selected.value.length?l.items.value.findIndex(R=>R.id===l.selected.value[l.selected.value.length-1]):-1);if(Xe){let R=-1;ae(()=>[l.selected.value,f.value,h.value,o.value],()=>{cancelAnimationFrame(R),R=requestAnimationFrame(()=>{if(f.value&&h.value){const K=o.value?"width":"height";r.value=f.value[K],u.value=h.value[K],s.value=r.value+1<u.value}if(g.value>=0&&m.value){const K=m.value.children[S.value];g.value===0||!s.value?i.value=0:e.centerActive?i.value=s4({selectedElement:K,containerSize:r.value,contentSize:u.value,isRtl:c.value,isHorizontal:o.value}):s.value&&(i.value=Su({selectedElement:K,containerSize:r.value,contentSize:u.value,isRtl:c.value,currentScrollOffset:i.value,isHorizontal:o.value}))}})})}const b=$(!1);let C=0,p=0;function P(R){const K=o.value?"clientX":"clientY";p=(c.value&&o.value?-1:1)*i.value,C=R.touches[0][K],b.value=!0}function j(R){if(!s.value)return;const K=o.value?"clientX":"clientY",z=c.value&&o.value?-1:1;i.value=z*(p+C-R.touches[0][K])}function I(R){const K=u.value-r.value;i.value<0||!s.value?i.value=0:i.value>=K&&(i.value=K),b.value=!1}function E(){d.value&&(d.value[o.value?"scrollLeft":"scrollTop"]=0)}const k=$(!1);function x(R){if(k.value=!0,!(!s.value||!m.value)){for(const K of R.composedPath())for(const z of m.value.children)if(z===K){i.value=Su({selectedElement:z,containerSize:r.value,contentSize:u.value,isRtl:c.value,currentScrollOffset:i.value,isHorizontal:o.value});return}}}function q(R){k.value=!1}function V(R){var K;!k.value&&!(R.relatedTarget&&((K=m.value)!=null&&K.contains(R.relatedTarget)))&&M()}function w(R){m.value&&(o.value?R.key==="ArrowRight"?M(c.value?"prev":"next"):R.key==="ArrowLeft"&&M(c.value?"next":"prev"):R.key==="ArrowDown"?M("next"):R.key==="ArrowUp"&&M("prev"),R.key==="Home"?M("first"):R.key==="End"&&M("last"))}function M(R){var K,z,fe,ue,B;if(m.value)if(!R)(K=Yi(m.value)[0])==null||K.focus();else if(R==="next"){const T=(z=m.value.querySelector(":focus"))==null?void 0:z.nextElementSibling;T?T.focus():M("first")}else if(R==="prev"){const T=(fe=m.value.querySelector(":focus"))==null?void 0:fe.previousElementSibling;T?T.focus():M("last")}else R==="first"?(ue=m.value.firstElementChild)==null||ue.focus():R==="last"&&((B=m.value.lastElementChild)==null||B.focus())}function N(R){const K=i.value+(R==="prev"?-1:1)*r.value;i.value=ft(K,0,u.value-r.value)}const Z=y(()=>{let R=i.value>u.value-r.value?-(u.value-r.value)+ku(u.value-r.value-i.value):-i.value;i.value<=0&&(R=ku(-i.value));const K=c.value&&o.value?-1:1;return{transform:`translate${o.value?"X":"Y"}(${K*R}px)`,transition:b.value?"none":"",willChange:b.value?"transform":""}}),F=y(()=>({next:l.next,prev:l.prev,select:l.select,isSelected:l.isSelected})),H=y(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!a.value;case!0:return s.value||Math.abs(i.value)>0;case"mobile":return a.value||s.value||Math.abs(i.value)>0;default:return!a.value&&(s.value||Math.abs(i.value)>0)}}),D=y(()=>Math.abs(i.value)>0),J=y(()=>u.value>Math.abs(i.value)+r.value);return X(()=>v(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!o.value,"v-slide-group--has-affixes":H.value,"v-slide-group--is-overflowing":s.value},e.class],style:e.style,tabindex:k.value||l.selected.value.length?-1:0,onFocus:V},{default:()=>{var R,K,z;return[H.value&&v("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!D.value}],onClick:()=>N("prev")},[((R=n.prev)==null?void 0:R.call(n,F.value))??v(Zs,null,{default:()=>[v(ze,{icon:c.value?e.nextIcon:e.prevIcon},null)]})]),v("div",{key:"container",ref:d,class:"v-slide-group__container",onScroll:E},[v("div",{ref:m,class:"v-slide-group__content",style:Z.value,onTouchstartPassive:P,onTouchmovePassive:j,onTouchendPassive:I,onFocusin:x,onFocusout:q,onKeydown:w},[(K=n.default)==null?void 0:K.call(n,F.value)])]),H.value&&v("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!J.value}],onClick:()=>N("next")},[((z=n.next)==null?void 0:z.call(n,F.value))??v(Zs,null,{default:()=>[v(ze,{icon:c.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:l.selected,scrollTo:N,scrollOffset:i,focus:M}}}),i4=W()({name:"VSlideGroupItem",props:{...Zc()},emits:{"group:selected":e=>!0},setup(e,t){let{slots:n}=t;const c=Qc(e,im);return()=>{var a;return(a=n.default)==null?void 0:a.call(n,{isSelected:c.isSelected.value,select:c.select,toggle:c.toggle,selectedClass:c.selectedClass.value})}}});const r4=W()({name:"VSnackbar",props:{multiLine:Boolean,timeout:{type:[Number,String],default:5e3},vertical:Boolean,...Wn({location:"bottom"}),...ea(),...De(),...Ft(),...Ie(),...un(Da({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const c=Ce(e,"modelValue"),{locationStyles:a}=Kn(e),{positionClasses:l}=ta(e),{scopeId:s}=Na(),{themeClasses:i}=Pe(e),{colorClasses:r,colorStyles:u,variantClasses:o}=bc(e),{roundedClasses:d}=Ue(e),f=$();ae(c,h),ae(()=>e.timeout,h),mt(()=>{c.value&&h()});let m=-1;function h(){window.clearTimeout(m);const S=Number(e.timeout);!c.value||S===-1||(m=window.setTimeout(()=>{c.value=!1},S))}function g(){window.clearTimeout(m)}return X(()=>{const[S]=Sn.filterProps(e);return v(Sn,le({ref:f,class:["v-snackbar",{"v-snackbar--active":c.value,"v-snackbar--multi-line":e.multiLine&&!e.vertical,"v-snackbar--vertical":e.vertical},l.value,e.class],style:e.style},S,{modelValue:c.value,"onUpdate:modelValue":b=>c.value=b,contentProps:le({class:["v-snackbar__wrapper",i.value,r.value,d.value,o.value],style:[a.value,u.value],onPointerenter:g,onPointerleave:h},S.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0},s),{default:()=>[yc(!1,"v-snackbar"),n.default&&v("div",{class:"v-snackbar__content",role:"status","aria-live":"polite"},[n.default()]),n.actions&&v($e,{defaults:{VBtn:{variant:"text",ripple:!1}}},{default:()=>[v("div",{class:"v-snackbar__actions"},[n.actions()])]})],activator:n.activator})}),Gt({},f)}});const o4=W()({name:"VSwitch",inheritAttrs:!1,props:{indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...Vn(),...Wl()},emits:{"update:focused":e=>!0,"update:modelValue":()=>!0,"update:indeterminate":e=>!0},setup(e,t){let{attrs:n,slots:c}=t;const a=Ce(e,"indeterminate"),l=Ce(e,"modelValue"),{loaderClasses:s}=Fl(e),{isFocused:i,focus:r,blur:u}=Yn(e),o=y(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),d=ht(),f=y(()=>e.id||`switch-${d}`);function m(){a.value&&(a.value=!1)}return X(()=>{const[h,g]=mc(n),[S,b]=it.filterProps(e),[C,p]=Fc.filterProps(e),P=$();function j(I){var E,k;I.stopPropagation(),I.preventDefault(),(k=(E=P.value)==null?void 0:E.input)==null||k.click()}return v(it,le({class:["v-switch",{"v-switch--inset":e.inset},{"v-switch--indeterminate":a.value},s.value,e.class],style:e.style},h,S,{id:f.value,focused:i.value}),{...c,default:I=>{let{id:E,messagesId:k,isDisabled:x,isReadonly:q,isValid:V}=I;return v(Fc,le({ref:P},C,{modelValue:l.value,"onUpdate:modelValue":[w=>l.value=w,m],id:E.value,"aria-describedby":k.value,type:"checkbox","aria-checked":a.value?"mixed":void 0,disabled:x.value,readonly:q.value,onFocus:r,onBlur:u},g),{...c,default:()=>v("div",{class:"v-switch__track",onClick:j},null),input:w=>{let{textColorClasses:M,textColorStyles:N}=w;return v("div",{class:["v-switch__thumb",M.value],style:N.value},[e.loading&&v(fr,{name:"v-switch",active:!0,color:V.value===!1?void 0:o.value},{default:Z=>c.loader?c.loader(Z):v(or,{active:Z.isActive,color:Z.color,indeterminate:!0,size:"16",width:"2"},null)})])}})}})}),{}}});const u4=W()({name:"VSystemBar",props:{color:String,height:[Number,String],window:Boolean,...ne(),...tt(),...Kc(),...De(),..._e(),...Ie()},setup(e,t){let{slots:n}=t;const{themeClasses:c}=Pe(e),{backgroundColorClasses:a,backgroundColorStyles:l}=Ze(Y(e,"color")),{elevationClasses:s}=ot(e),{roundedClasses:i}=Ue(e),{ssrBootStyles:r}=gc(),u=y(()=>e.height??(e.window?32:24)),{layoutItemStyles:o}=Yc({id:e.name,order:y(()=>parseInt(e.order,10)),position:$("top"),layoutSize:u,elementSize:u,active:y(()=>!0),absolute:Y(e,"absolute")});return X(()=>v(e.tag,{class:["v-system-bar",{"v-system-bar--window":e.window},c.value,a.value,s.value,i.value,e.class],style:[l.value,o.value,r.value,e.style]},n)),{}}});const om=Symbol.for("vuetify:v-tabs"),um=W()({name:"VTab",props:{fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...un(vr({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},setup(e,t){let{slots:n,attrs:c}=t;const{textColorClasses:a,textColorStyles:l}=vt(e,"sliderColor"),s=y(()=>e.direction==="horizontal"),i=$(!1),r=$(),u=$();function o(d){var m,h;let{value:f}=d;if(i.value=f,f){const g=(h=(m=r.value)==null?void 0:m.$el.parentElement)==null?void 0:h.querySelector(".v-tab--selected .v-tab__slider"),S=u.value;if(!g||!S)return;const b=getComputedStyle(g).color,C=g.getBoundingClientRect(),p=S.getBoundingClientRect(),P=s.value?"x":"y",j=s.value?"X":"Y",I=s.value?"right":"bottom",E=s.value?"width":"height",k=C[P],x=p[P],q=k>x?C[I]-p[I]:C[P]-p[P],V=Math.sign(q)>0?s.value?"right":"bottom":Math.sign(q)<0?s.value?"left":"top":"center",M=(Math.abs(q)+(Math.sign(q)<0?C[E]:p[E]))/Math.max(C[E],p[E]),N=C[E]/p[E],Z=1.5;sc(S,{backgroundColor:[b,""],transform:[`translate${j}(${q}px) scale${j}(${N})`,`translate${j}(${q/Z}px) scale${j}(${(M-1)/Z+1})`,""],transformOrigin:Array(3).fill(V)},{duration:225,easing:Va})}}return X(()=>{const[d]=bt.filterProps(e);return v(bt,le({symbol:om,ref:r,class:["v-tab",e.class],style:e.style,tabindex:i.value?0:-1,role:"tab","aria-selected":String(i.value),active:!1,block:e.fixed,maxWidth:e.fixed?300:void 0,rounded:0},d,c,{"onGroup:selected":o}),{default:()=>{var f;return[((f=n.default)==null?void 0:f.call(n))??e.text,!e.hideSlider&&v("div",{ref:u,class:["v-tab__slider",a.value],style:l.value},null)]}})}),{}}});function d4(e){return e?e.map(t=>typeof t=="string"?{title:t,value:t}:t):[]}const f4=W()({name:"VTabs",props:{alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...rm({mandatory:"force"}),...nt(),..._e()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const c=Ce(e,"modelValue"),a=y(()=>d4(e.items)),{densityClasses:l}=gt(e),{backgroundColorClasses:s,backgroundColorStyles:i}=Ze(Y(e,"bgColor"));return Je({VTab:{color:Y(e,"color"),direction:Y(e,"direction"),stacked:Y(e,"stacked"),fixed:Y(e,"fixedTabs"),sliderColor:Y(e,"sliderColor"),hideSlider:Y(e,"hideSlider")}}),X(()=>{const[r]=vi.filterProps(e);return v(vi,le(r,{modelValue:c.value,"onUpdate:modelValue":u=>c.value=u,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},l.value,s.value,e.class],style:[{"--v-tabs-height":ie(e.height)},i.value,e.style],role:"tablist",symbol:om}),{default:()=>[n.default?n.default():a.value.map(u=>v(um,le(u,{key:u.title}),null))]})}),{}}});const v4=W()({name:"VTable",props:{fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...ne(),...nt(),..._e(),...Ie()},setup(e,t){let{slots:n}=t;const{themeClasses:c}=Pe(e),{densityClasses:a}=gt(e);return X(()=>v(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!n.top,"v-table--has-bottom":!!n.bottom,"v-table--hover":e.hover},c.value,a.value,e.class],style:e.style},{default:()=>{var l,s,i;return[(l=n.top)==null?void 0:l.call(n),n.default?v("div",{class:"v-table__wrapper",style:{height:ie(e.height)}},[v("table",null,[n.default()])]):(s=n.wrapper)==null?void 0:s.call(n),(i=n.bottom)==null?void 0:i.call(n)]}})),{}}});const m4=W()({name:"VTextarea",directives:{Intersect:Ba},inheritAttrs:!1,props:{autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...Vn(),...Dl()},emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:n,emit:c,slots:a}=t;const l=Ce(e,"modelValue"),{isFocused:s,focus:i,blur:r}=Yn(e),u=y(()=>typeof e.counterValue=="function"?e.counterValue(l.value):(l.value||"").toString().length),o=y(()=>{if(n.maxlength)return n.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function d(x,q){var V,w;!e.autofocus||!x||(w=(V=q[0].target)==null?void 0:V.focus)==null||w.call(V)}const f=$(),m=$(),h=$(""),g=$(),S=y(()=>e.persistentPlaceholder||s.value||e.active);function b(){var x;g.value!==document.activeElement&&((x=g.value)==null||x.focus()),s.value||i()}function C(x){b(),c("click:control",x)}function p(x){c("mousedown:control",x)}function P(x){x.stopPropagation(),b(),Oe(()=>{l.value="",Ki(e["onClick:clear"],x)})}function j(x){var V;const q=x.target;if(l.value=q.value,(V=e.modelModifiers)!=null&&V.trim){const w=[q.selectionStart,q.selectionEnd];Oe(()=>{q.selectionStart=w[0],q.selectionEnd=w[1]})}}const I=$();function E(){e.autoGrow&&Oe(()=>{if(!I.value||!m.value)return;const x=getComputedStyle(I.value),q=getComputedStyle(m.value.$el),V=parseFloat(x.getPropertyValue("--v-field-padding-top"))+parseFloat(x.getPropertyValue("--v-input-padding-top"))+parseFloat(x.getPropertyValue("--v-field-padding-bottom")),w=I.value.scrollHeight,M=parseFloat(x.lineHeight),N=Math.max(parseFloat(e.rows)*M+V,parseFloat(q.getPropertyValue("--v-input-control-height"))),Z=parseFloat(e.maxRows)*M+V||1/0;h.value=ie(ft(w??0,N,Z))})}mt(E),ae(l,E),ae(()=>e.rows,E),ae(()=>e.maxRows,E),ae(()=>e.density,E);let k;return ae(I,x=>{x?(k=new ResizeObserver(E),k.observe(I.value)):k==null||k.disconnect()}),pt(()=>{k==null||k.disconnect()}),X(()=>{const x=!!(a.counter||e.counter||e.counterValue),q=!!(x||a.details),[V,w]=mc(n),[{modelValue:M,...N}]=it.filterProps(e),[Z]=mr(e);return v(it,le({ref:f,modelValue:l.value,"onUpdate:modelValue":F=>l.value=F,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)},e.class],style:e.style},V,N,{focused:s.value}),{...a,default:F=>{let{isDisabled:H,isDirty:D,isReadonly:J,isValid:R}=F;return v(La,le({ref:m,style:{"--v-textarea-control-height":h.value},onClick:C,onMousedown:p,"onClick:clear":P,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},Z,{active:S.value||D.value,dirty:D.value||e.dirty,disabled:H.value,focused:s.value,error:R.value===!1}),{...a,default:K=>{let{props:{class:z,...fe}}=K;return v(me,null,[e.prefix&&v("span",{class:"v-text-field__prefix"},[e.prefix]),He(v("textarea",le({ref:g,class:z,value:l.value,onInput:j,autofocus:e.autofocus,readonly:J.value,disabled:H.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:b,onBlur:r},fe,w),null),[[Ct("intersect"),{handler:d},null,{once:!0}]]),e.autoGrow&&He(v("textarea",{class:[z,"v-textarea__sizer"],"onUpdate:modelValue":ue=>l.value=ue,ref:I,readonly:!0,"aria-hidden":"true"},null),[[Rg,l.value]]),e.suffix&&v("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:q?F=>{var H;return v(me,null,[(H=a.details)==null?void 0:H.call(a,F),x&&v(me,null,[v("span",null,null),v(Hl,{active:e.persistentCounter||s.value,value:u.value,max:o.value},a.counter)])])}:void 0})}),Gt({},f,m,g)}});const h4=W()({name:"VThemeProvider",props:{withBackground:Boolean,...ne(),...Ie(),..._e()},setup(e,t){let{slots:n}=t;const{themeClasses:c}=Pe(e);return()=>{var a;return e.withBackground?v(e.tag,{class:["v-theme-provider",c.value,e.class],style:e.style},{default:()=>{var l;return[(l=n.default)==null?void 0:l.call(n)]}}):(a=n.default)==null?void 0:a.call(n)}}});const g4=W()({name:"VTimeline",props:{align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineInset:{type:[String,Number],default:0},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...ne(),...nt(),..._e(),...Ie()},setup(e,t){let{slots:n}=t;const{themeClasses:c}=Pe(e),{densityClasses:a}=gt(e);Je({VTimelineDivider:{lineColor:Y(e,"lineColor")},VTimelineItem:{density:Y(e,"density"),lineInset:Y(e,"lineInset")}});const l=y(()=>{const i=e.side?e.side:e.density!=="default"?"end":null;return i&&`v-timeline--side-${i}`}),s=y(()=>{const i=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return i;case"start":return i[0];case"end":return i[1];default:return null}});return X(()=>v(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,s.value,{"v-timeline--inset-line":!!e.lineInset},c.value,a.value,l.value,e.class],style:[{"--v-timeline-line-thickness":ie(e.lineThickness)},e.style]},n)),{}}}),y4=W()({name:"VTimelineDivider",props:{dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:pe,iconColor:String,lineColor:String,...ne(),...De(),...qn(),...tt()},setup(e,t){let{slots:n}=t;const{sizeClasses:c,sizeStyles:a}=Jc(e,"v-timeline-divider__dot"),{backgroundColorStyles:l,backgroundColorClasses:s}=Ze(Y(e,"dotColor")),{roundedClasses:i}=Ue(e,"v-timeline-divider__dot"),{elevationClasses:r}=ot(e),{backgroundColorClasses:u,backgroundColorStyles:o}=Ze(Y(e,"lineColor"));return X(()=>v("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot},e.class],style:e.style},[v("div",{class:["v-timeline-divider__before",u.value],style:o.value},null),!e.hideDot&&v("div",{key:"dot",class:["v-timeline-divider__dot",r.value,i.value,c.value],style:a.value},[v("div",{class:["v-timeline-divider__inner-dot",s.value,i.value],style:l.value},[n.default?v($e,{key:"icon-defaults",disabled:!e.icon,defaults:{VIcon:{color:e.iconColor,icon:e.icon,size:e.size}}},n.default):v(ze,{key:"icon",color:e.iconColor,icon:e.icon,size:e.size},null)])]),v("div",{class:["v-timeline-divider__after",u.value],style:o.value},null)])),{}}}),b4=W()({name:"VTimelineItem",props:{density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:pe,iconColor:String,lineInset:[Number,String],...ne(),...Rt(),...tt(),...De(),...qn(),..._e()},setup(e,t){let{slots:n}=t;const{dimensionStyles:c}=Ot(e),a=$(0),l=$();return ae(l,s=>{var i;s&&(a.value=((i=s.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:i.getBoundingClientRect().width)??0)},{flush:"post"}),X(()=>{var s,i;return v("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot},e.class],style:[{"--v-timeline-dot-size":ie(a.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${ie(e.lineInset)})`:ie(0)},e.style]},[v("div",{class:"v-timeline-item__body",style:c.value},[(s=n.default)==null?void 0:s.call(n)]),v(y4,{ref:l,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:n.icon}),e.density!=="compact"&&v("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((i=n.opposite)==null?void 0:i.call(n))])])}),{}}});const p4=W()({name:"VTooltip",props:{id:String,text:String,...un(Da({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const c=Ce(e,"modelValue"),{scopeId:a}=Na(),l=ht(),s=y(()=>e.id||`v-tooltip-${l}`),i=$(),r=y(()=>e.location.split(" ").length>1?e.location:e.location+" center"),u=y(()=>e.origin==="auto"||e.origin==="overlap"||e.origin.split(" ").length>1||e.location.split(" ").length>1?e.origin:e.origin+" center"),o=y(()=>e.transition?e.transition:c.value?"scale-transition":"fade-transition"),d=y(()=>le({"aria-describedby":s.value},e.activatorProps));return X(()=>{const[f]=Sn.filterProps(e);return v(Sn,le({ref:i,class:["v-tooltip",e.class],style:e.style,id:s.value},f,{modelValue:c.value,"onUpdate:modelValue":m=>c.value=m,transition:o.value,absolute:!0,location:r.value,origin:u.value,persistent:!0,role:"tooltip",activatorProps:d.value,_disableGlobalStack:!0},a),{activator:n.activator,default:function(){var S;for(var m=arguments.length,h=new Array(m),g=0;g<m;g++)h[g]=arguments[g];return((S=n.default)==null?void 0:S.call(n,...h))??e.text}})}),Gt({},i)}}),k4=W()({name:"VValidation",props:{...Xf()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const c=Zf(e,"validation");return()=>{var a;return(a=n.default)==null?void 0:a.call(n,c)}}});const S4=W()({name:"VVirtualScrollItem",props:{dynamicHeight:Boolean,...ne()},emits:{"update:height":e=>!0},setup(e,t){let{emit:n,slots:c}=t;const{resizeRef:a,contentRect:l}=sn();Nn(()=>e.dynamicHeight,()=>{ae(()=>{var i;return(i=l.value)==null?void 0:i.height},i=>{i!=null&&n("update:height",i)})});function s(){e.dynamicHeight&&l.value&&n("update:height",l.value.height)}Mi(s),X(()=>{var i;return v("div",{ref:e.dynamicHeight?a:void 0,class:["v-virtual-scroll__item",e.class],style:e.style},[(i=c.default)==null?void 0:i.call(c)])})}}),Cu=-1,_u=1,C4=W()({name:"VVirtualScroll",props:{items:{type:Array,default:()=>[]},itemHeight:[Number,String],...ne(),...Rt()},setup(e,t){let{slots:n}=t;const c=$(0),a=$(e.itemHeight),l=y({get:()=>parseInt(a.value??0,10),set(x){a.value=x}}),s=$(),{resizeRef:i,contentRect:r}=sn();Kt(()=>{i.value=s.value});const u=hc(),o=new Map;let d=cn(e.items.length).map(()=>l.value);const f=y(()=>{var x;return Math.max(12,Math.ceil((((x=r.value)==null?void 0:x.height)??u.height.value)/l.value*1.7+1))});function m(x,q){l.value=Math.max(l.value,q),d[x]=q,o.set(e.items[x],q)}function h(x){return d.slice(0,x).reduce((q,V)=>q+(V||l.value),0)}function g(x){const q=e.items.length;let V=0,w=0;for(;w<x&&V<q;)w+=d[V++]||l.value;return V-1}let S=0;function b(){if(!s.value||!r.value)return;const x=r.value.height,q=s.value.scrollTop,V=q<S?Cu:_u,w=g(q+x/2),M=Math.round(f.value/3);V===Cu&&w<=c.value+M*2-1?c.value=ft(w-M,0,e.items.length):V===_u&&w>=c.value+M*2-1&&(c.value=ft(w-M,0,e.items.length-f.value)),S=s.value.scrollTop}function C(x){if(!s.value)return;const q=h(x);s.value.scrollTop=q}const p=y(()=>e.items.map((x,q)=>({raw:x,index:q}))),P=y(()=>Math.min(e.items.length,c.value+f.value)),j=y(()=>p.value.slice(c.value,P.value)),I=y(()=>h(c.value)),E=y(()=>h(e.items.length)-h(P.value)),{dimensionStyles:k}=Ot(e);return mt(()=>{l.value||(l.value=d.slice(c.value,P.value).reduce((x,q)=>x+q,0)/f.value)}),ae(()=>e.items.length,()=>{d=cn(e.items.length).map(()=>l.value),o.forEach((x,q)=>{const V=e.items.indexOf(q);V===-1?o.delete(q):d[V]=x})}),X(()=>v("div",{ref:s,class:["v-virtual-scroll",e.class],onScroll:b,style:[k.value,e.style]},[v("div",{class:"v-virtual-scroll__container",style:{paddingTop:ie(I.value),paddingBottom:ie(E.value)}},[j.value.map(x=>v(S4,{key:x.index,dynamicHeight:!e.itemHeight,"onUpdate:height":q=>m(x.index,q)},{default:()=>{var q;return[(q=n.default)==null?void 0:q.call(n,{item:x.raw,index:x.index})]}}))])])),{scrollToIndex:C}}}),_4=Object.freeze(Object.defineProperty({__proto__:null,VAlert:_0,VAlertTitle:Wf,VApp:N2,VAppBar:c0,VAppBarNavIcon:p0,VAppBarTitle:S0,VAutocomplete:bp,VAvatar:Dn,VBadge:pp,VBanner:kp,VBannerActions:jv,VBannerText:qv,VBottomNavigation:Sp,VBreadcrumbs:Cp,VBreadcrumbsDivider:Vv,VBreadcrumbsItem:Iv,VBtn:bt,VBtnGroup:Js,VBtnToggle:r0,VCard:_p,VCardActions:Ev,VCardItem:Tv,VCardSubtitle:Av,VCardText:$v,VCardTitle:Pv,VCarousel:Ap,VCarouselItem:Pp,VCheckbox:I0,VCheckboxBtn:Nc,VChip:Fa,VChipGroup:A0,VClassIcon:nr,VCode:Tp,VCol:jk,VColorPicker:vk,VCombobox:hk,VComponentIcon:Xs,VContainer:_k,VCounter:Hl,VDefaultsProvider:$e,VDialog:gk,VDialogBottomTransition:z2,VDialogTopTransition:H2,VDialogTransition:Ol,VDivider:nv,VExpandTransition:Ll,VExpandXTransition:ar,VExpansionPanel:pk,VExpansionPanelText:Gv,VExpansionPanelTitle:Yv,VExpansionPanels:bk,VFabTransition:D2,VFadeTransition:Zs,VField:La,VFieldLabel:ua,VFileInput:kk,VFooter:Sk,VForm:Ck,VHover:$k,VIcon:ze,VImg:Gc,VInput:it,VItem:Bk,VItemGroup:Mk,VKbd:Rk,VLabel:na,VLayout:Ok,VLayoutItem:Lk,VLazy:Fk,VLigatureIcon:w2,VList:Kl,VListGroup:ci,VListImg:U0,VListItem:kn,VListItemAction:W0,VListItemMedia:K0,VListItemSubtitle:ov,VListItemTitle:uv,VListSubheader:dv,VLocaleProvider:Nk,VMain:Dk,VMenu:Gl,VMessages:Yf,VNavigationDrawer:Xk,VNoSsr:Zk,VOverlay:Sn,VPagination:Jk,VParallax:t4,VProgressCircular:or,VProgressLinear:ur,VRadio:n4,VRadioGroup:c4,VRangeSlider:a4,VRating:l4,VResponsive:Af,VRow:Pk,VScaleTransition:Ef,VScrollXReverseTransition:W2,VScrollXTransition:U2,VScrollYReverseTransition:Y2,VScrollYTransition:K2,VSelect:mp,VSelectionControl:Fc,VSelectionControlGroup:Jf,VSheet:ii,VSlideGroup:vi,VSlideGroupItem:i4,VSlideXReverseTransition:X2,VSlideXTransition:G2,VSlideYReverseTransition:Z2,VSlideYTransition:cr,VSlider:fi,VSnackbar:r4,VSpacer:Tk,VSvgIcon:tr,VSwitch:o4,VSystemBar:u4,VTab:um,VTable:v4,VTabs:f4,VTextField:fc,VTextarea:m4,VThemeProvider:h4,VTimeline:g4,VTimelineItem:b4,VToolbar:Qs,VToolbarItems:k0,VToolbarTitle:lr,VTooltip:p4,VValidation:k4,VVirtualScroll:C4,VWindow:Ov,VWindowItem:Lv},Symbol.toStringTag,{value:"Module"}));function x4(e,t){const n=t.modifiers||{},c=t.value,{once:a,immediate:l,...s}=n,i=!Object.keys(s).length,{handler:r,options:u}=typeof c=="object"?c:{handler:c,options:{attributes:(s==null?void 0:s.attr)??i,characterData:(s==null?void 0:s.char)??i,childList:(s==null?void 0:s.child)??i,subtree:(s==null?void 0:s.sub)??i}},o=new MutationObserver(function(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],f=arguments.length>1?arguments[1]:void 0;r==null||r(d,f),a&&dm(e,t)});l&&(r==null||r([],o)),e._mutate=Object(e._mutate),e._mutate[t.instance.$.uid]={observer:o},o.observe(e,u)}function dm(e,t){var n;(n=e._mutate)!=null&&n[t.instance.$.uid]&&(e._mutate[t.instance.$.uid].observer.disconnect(),delete e._mutate[t.instance.$.uid])}const w4={mounted:x4,unmounted:dm};function j4(e,t){var a,l;const n=t.value,c={passive:!((a=t.modifiers)!=null&&a.active)};window.addEventListener("resize",n,c),e._onResize=Object(e._onResize),e._onResize[t.instance.$.uid]={handler:n,options:c},(l=t.modifiers)!=null&&l.quiet||n()}function q4(e,t){var a;if(!((a=e._onResize)!=null&&a[t.instance.$.uid]))return;const{handler:n,options:c}=e._onResize[t.instance.$.uid];window.removeEventListener("resize",n,c),delete e._onResize[t.instance.$.uid]}const V4={mounted:j4,unmounted:q4};function fm(e,t){const{self:n=!1}=t.modifiers??{},c=t.value,a=typeof c=="object"&&c.options||{passive:!0},l=typeof c=="function"||"handleEvent"in c?c:c.handler,s=n?e:t.arg?document.querySelector(t.arg):window;s&&(s.addEventListener("scroll",l,a),e._onScroll=Object(e._onScroll),e._onScroll[t.instance.$.uid]={handler:l,options:a,target:n?void 0:s})}function vm(e,t){var l;if(!((l=e._onScroll)!=null&&l[t.instance.$.uid]))return;const{handler:n,options:c,target:a=e}=e._onScroll[t.instance.$.uid];a.removeEventListener("scroll",n,c),delete e._onScroll[t.instance.$.uid]}function I4(e,t){t.value!==t.oldValue&&(vm(e,t),fm(e,t))}const E4={mounted:fm,unmounted:vm,updated:I4},A4=Object.freeze(Object.defineProperty({__proto__:null,ClickOutside:_v,Intersect:Ba,Mutate:w4,Resize:V4,Ripple:Un,Scroll:E4,Touch:kr},Symbol.toStringTag,{value:"Module"})),P4=qf({components:_4,directives:A4}),xr=Fg(Ky);xr.use(fb);xr.use(P4);xr.mount("#app");

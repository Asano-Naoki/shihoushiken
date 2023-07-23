(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function c(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();function ms(e,t){const n=Object.create(null),c=e.split(",");for(let a=0;a<c.length;a++)n[c[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function hs(e){if(be(e)){const t={};for(let n=0;n<e.length;n++){const c=e[n],a=Ye(c)?gm(c):hs(c);if(a)for(const l in a)t[l]=a[l]}return t}else{if(Ye(e))return e;if(Ne(e))return e}}const vm=/;(?![^(]*\))/g,mm=/:([^]+)/,hm=/\/\*.*?\*\//gs;function gm(e){const t={};return e.replace(hm,"").split(vm).forEach(n=>{if(n){const c=n.split(mm);c.length>1&&(t[c[0].trim()]=c[1].trim())}}),t}function $c(e){let t="";if(Ye(e))t=e;else if(be(e))for(let n=0;n<e.length;n++){const c=$c(e[n]);c&&(t+=c+" ")}else if(Ne(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ym="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bm=ms(ym);function xu(e){return!!e||e===""}const Jt=e=>Ye(e)?e:e==null?"":be(e)||Ne(e)&&(e.toString===Iu||!we(e.toString))?JSON.stringify(e,wu,2):String(e),wu=(e,t)=>t&&t.__v_isRef?wu(e,t.value):Ac(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[c,a])=>(n[`${c} =>`]=a,n),{})}:ju(t)?{[`Set(${t.size})`]:[...t.values()]}:Ne(t)&&!be(t)&&!Eu(t)?String(t):t,Fe={},Ec=[],Ut=()=>{},pm=()=>!1,km=/^on[^a-z]/,Cl=e=>km.test(e),gs=e=>e.startsWith("onUpdate:"),at=Object.assign,ys=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Sm=Object.prototype.hasOwnProperty,qe=(e,t)=>Sm.call(e,t),be=Array.isArray,Ac=e=>_l(e)==="[object Map]",ju=e=>_l(e)==="[object Set]",we=e=>typeof e=="function",Ye=e=>typeof e=="string",bs=e=>typeof e=="symbol",Ne=e=>e!==null&&typeof e=="object",Vu=e=>Ne(e)&&we(e.then)&&we(e.catch),Iu=Object.prototype.toString,_l=e=>Iu.call(e),Cm=e=>_l(e).slice(8,-1),Eu=e=>_l(e)==="[object Object]",ps=e=>Ye(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,tl=ms(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xl=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},_m=/-(\w)/g,$t=xl(e=>e.replace(_m,(t,n)=>n?n.toUpperCase():"")),xm=/\B([A-Z])/g,Dc=xl(e=>e.replace(xm,"-$1").toLowerCase()),Cn=xl(e=>e.charAt(0).toUpperCase()+e.slice(1)),nl=xl(e=>e?`on${Cn(e)}`:""),ba=(e,t)=>!Object.is(e,t),cl=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ol=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},bi=e=>{const t=parseFloat(e);return isNaN(t)?e:t},wm=e=>{const t=Ye(e)?Number(e):NaN;return isNaN(t)?e:t};let Vr;const jm=()=>Vr||(Vr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let xt;class Au{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xt,!t&&xt&&(this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=xt;try{return xt=this,t()}finally{xt=n}}}on(){xt=this}off(){xt=this.parent}stop(t){if(this._active){let n,c;for(n=0,c=this.effects.length;n<c;n++)this.effects[n].stop();for(n=0,c=this.cleanups.length;n<c;n++)this.cleanups[n]();if(this.scopes)for(n=0,c=this.scopes.length;n<c;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function ks(e){return new Au(e)}function Vm(e,t=xt){t&&t.active&&t.effects.push(e)}function Im(){return xt}function It(e){xt&&xt.cleanups.push(e)}const Ss=e=>{const t=new Set(e);return t.w=0,t.n=0,t},qu=e=>(e.w&Fn)>0,Pu=e=>(e.n&Fn)>0,Em=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Fn},Am=e=>{const{deps:t}=e;if(t.length){let n=0;for(let c=0;c<t.length;c++){const a=t[c];qu(a)&&!Pu(a)?a.delete(e):t[n++]=a,a.w&=~Fn,a.n&=~Fn}t.length=n}},ul=new WeakMap;let oa=0,Fn=1;const pi=30;let Dt;const uc=Symbol(""),ki=Symbol("");class Cs{constructor(t,n=null,c){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Vm(this,c)}run(){if(!this.active)return this.fn();let t=Dt,n=Bn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Dt,Dt=this,Bn=!0,Fn=1<<++oa,oa<=pi?Em(this):Ir(this),this.fn()}finally{oa<=pi&&Am(this),Fn=1<<--oa,Dt=this.parent,Bn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Dt===this?this.deferStop=!0:this.active&&(Ir(this),this.onStop&&this.onStop(),this.active=!1)}}function Ir(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Bn=!0;const Tu=[];function zc(){Tu.push(Bn),Bn=!1}function Hc(){const e=Tu.pop();Bn=e===void 0?!0:e}function St(e,t,n){if(Bn&&Dt){let c=ul.get(e);c||ul.set(e,c=new Map);let a=c.get(n);a||c.set(n,a=Ss()),$u(a)}}function $u(e,t){let n=!1;oa<=pi?Pu(e)||(e.n|=Fn,n=!qu(e)):n=!e.has(Dt),n&&(e.add(Dt),Dt.deps.push(e))}function gn(e,t,n,c,a,l){const i=ul.get(e);if(!i)return;let s=[];if(t==="clear")s=[...i.values()];else if(n==="length"&&be(e)){const r=Number(c);i.forEach((u,o)=>{(o==="length"||o>=r)&&s.push(u)})}else switch(n!==void 0&&s.push(i.get(n)),t){case"add":be(e)?ps(n)&&s.push(i.get("length")):(s.push(i.get(uc)),Ac(e)&&s.push(i.get(ki)));break;case"delete":be(e)||(s.push(i.get(uc)),Ac(e)&&s.push(i.get(ki)));break;case"set":Ac(e)&&s.push(i.get(uc));break}if(s.length===1)s[0]&&Si(s[0]);else{const r=[];for(const u of s)u&&r.push(...u);Si(Ss(r))}}function Si(e,t){const n=be(e)?e:[...e];for(const c of n)c.computed&&Er(c);for(const c of n)c.computed||Er(c)}function Er(e,t){(e!==Dt||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function qm(e,t){var n;return(n=ul.get(e))===null||n===void 0?void 0:n.get(t)}const Pm=ms("__proto__,__v_isRef,__isVue"),Mu=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(bs)),Tm=_s(),$m=_s(!1,!0),Mm=_s(!0),Ar=Bm();function Bm(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const c=xe(this);for(let l=0,i=this.length;l<i;l++)St(c,"get",l+"");const a=c[t](...n);return a===-1||a===!1?c[t](...n.map(xe)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){zc();const c=xe(this)[t].apply(this,n);return Hc(),c}}),e}function Rm(e){const t=xe(this);return St(t,"has",e),t.hasOwnProperty(e)}function _s(e=!1,t=!1){return function(c,a,l){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&l===(e?t?Jm:Fu:t?Lu:Ou).get(c))return c;const i=be(c);if(!e){if(i&&qe(Ar,a))return Reflect.get(Ar,a,l);if(a==="hasOwnProperty")return Rm}const s=Reflect.get(c,a,l);return(bs(a)?Mu.has(a):Pm(a))||(e||St(c,"get",a),t)?s:We(s)?i&&ps(a)?s:s.value:Ne(s)?e?$a(s):it(s):s}}const Om=Bu(),Lm=Bu(!0);function Bu(e=!1){return function(n,c,a,l){let i=n[c];if(Mc(i)&&We(i)&&!We(a))return!1;if(!e&&(!dl(a)&&!Mc(a)&&(i=xe(i),a=xe(a)),!be(n)&&We(i)&&!We(a)))return i.value=a,!0;const s=be(n)&&ps(c)?Number(c)<n.length:qe(n,c),r=Reflect.set(n,c,a,l);return n===xe(l)&&(s?ba(a,i)&&gn(n,"set",c,a):gn(n,"add",c,a)),r}}function Fm(e,t){const n=qe(e,t);e[t];const c=Reflect.deleteProperty(e,t);return c&&n&&gn(e,"delete",t,void 0),c}function Nm(e,t){const n=Reflect.has(e,t);return(!bs(t)||!Mu.has(t))&&St(e,"has",t),n}function Dm(e){return St(e,"iterate",be(e)?"length":uc),Reflect.ownKeys(e)}const Ru={get:Tm,set:Om,deleteProperty:Fm,has:Nm,ownKeys:Dm},zm={get:Mm,set(e,t){return!0},deleteProperty(e,t){return!0}},Hm=at({},Ru,{get:$m,set:Lm}),xs=e=>e,wl=e=>Reflect.getPrototypeOf(e);function za(e,t,n=!1,c=!1){e=e.__v_raw;const a=xe(e),l=xe(t);n||(t!==l&&St(a,"get",t),St(a,"get",l));const{has:i}=wl(a),s=c?xs:n?Vs:pa;if(i.call(a,t))return s(e.get(t));if(i.call(a,l))return s(e.get(l));e!==a&&e.get(t)}function Ha(e,t=!1){const n=this.__v_raw,c=xe(n),a=xe(e);return t||(e!==a&&St(c,"has",e),St(c,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Ua(e,t=!1){return e=e.__v_raw,!t&&St(xe(e),"iterate",uc),Reflect.get(e,"size",e)}function qr(e){e=xe(e);const t=xe(this);return wl(t).has.call(t,e)||(t.add(e),gn(t,"add",e,e)),this}function Pr(e,t){t=xe(t);const n=xe(this),{has:c,get:a}=wl(n);let l=c.call(n,e);l||(e=xe(e),l=c.call(n,e));const i=a.call(n,e);return n.set(e,t),l?ba(t,i)&&gn(n,"set",e,t):gn(n,"add",e,t),this}function Tr(e){const t=xe(this),{has:n,get:c}=wl(t);let a=n.call(t,e);a||(e=xe(e),a=n.call(t,e)),c&&c.call(t,e);const l=t.delete(e);return a&&gn(t,"delete",e,void 0),l}function $r(){const e=xe(this),t=e.size!==0,n=e.clear();return t&&gn(e,"clear",void 0,void 0),n}function Wa(e,t){return function(c,a){const l=this,i=l.__v_raw,s=xe(i),r=t?xs:e?Vs:pa;return!e&&St(s,"iterate",uc),i.forEach((u,o)=>c.call(a,r(u),r(o),l))}}function Ka(e,t,n){return function(...c){const a=this.__v_raw,l=xe(a),i=Ac(l),s=e==="entries"||e===Symbol.iterator&&i,r=e==="keys"&&i,u=a[e](...c),o=n?xs:t?Vs:pa;return!t&&St(l,"iterate",r?ki:uc),{next(){const{value:d,done:f}=u.next();return f?{value:d,done:f}:{value:s?[o(d[0]),o(d[1])]:o(d),done:f}},[Symbol.iterator](){return this}}}}function En(e){return function(...t){return e==="delete"?!1:this}}function Um(){const e={get(l){return za(this,l)},get size(){return Ua(this)},has:Ha,add:qr,set:Pr,delete:Tr,clear:$r,forEach:Wa(!1,!1)},t={get(l){return za(this,l,!1,!0)},get size(){return Ua(this)},has:Ha,add:qr,set:Pr,delete:Tr,clear:$r,forEach:Wa(!1,!0)},n={get(l){return za(this,l,!0)},get size(){return Ua(this,!0)},has(l){return Ha.call(this,l,!0)},add:En("add"),set:En("set"),delete:En("delete"),clear:En("clear"),forEach:Wa(!0,!1)},c={get(l){return za(this,l,!0,!0)},get size(){return Ua(this,!0)},has(l){return Ha.call(this,l,!0)},add:En("add"),set:En("set"),delete:En("delete"),clear:En("clear"),forEach:Wa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{e[l]=Ka(l,!1,!1),n[l]=Ka(l,!0,!1),t[l]=Ka(l,!1,!0),c[l]=Ka(l,!0,!0)}),[e,n,t,c]}const[Wm,Km,Ym,Gm]=Um();function ws(e,t){const n=t?e?Gm:Ym:e?Km:Wm;return(c,a,l)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?c:Reflect.get(qe(n,a)&&a in c?n:c,a,l)}const Xm={get:ws(!1,!1)},Zm={get:ws(!1,!0)},Qm={get:ws(!0,!1)},Ou=new WeakMap,Lu=new WeakMap,Fu=new WeakMap,Jm=new WeakMap;function eh(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function th(e){return e.__v_skip||!Object.isExtensible(e)?0:eh(Cm(e))}function it(e){return Mc(e)?e:js(e,!1,Ru,Xm,Ou)}function nh(e){return js(e,!1,Hm,Zm,Lu)}function $a(e){return js(e,!0,zm,Qm,Fu)}function js(e,t,n,c,a){if(!Ne(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const l=a.get(e);if(l)return l;const i=th(e);if(i===0)return e;const s=new Proxy(e,i===2?c:n);return a.set(e,s),s}function qc(e){return Mc(e)?qc(e.__v_raw):!!(e&&e.__v_isReactive)}function Mc(e){return!!(e&&e.__v_isReadonly)}function dl(e){return!!(e&&e.__v_isShallow)}function Nu(e){return qc(e)||Mc(e)}function xe(e){const t=e&&e.__v_raw;return t?xe(t):e}function Du(e){return ol(e,"__v_skip",!0),e}const pa=e=>Ne(e)?it(e):e,Vs=e=>Ne(e)?$a(e):e;function zu(e){Bn&&Dt&&(e=xe(e),$u(e.dep||(e.dep=Ss())))}function Hu(e,t){e=xe(e);const n=e.dep;n&&Si(n)}function We(e){return!!(e&&e.__v_isRef===!0)}function $(e){return Uu(e,!1)}function Is(e){return Uu(e,!0)}function Uu(e,t){return We(e)?e:new ch(e,t)}class ch{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:xe(t),this._value=n?t:pa(t)}get value(){return zu(this),this._value}set value(t){const n=this.__v_isShallow||dl(t)||Mc(t);t=n?t:xe(t),ba(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:pa(t),Hu(this))}}function dt(e){return We(e)?e.value:e}const ah={get:(e,t,n)=>dt(Reflect.get(e,t,n)),set:(e,t,n,c)=>{const a=e[t];return We(a)&&!We(n)?(a.value=n,!0):Reflect.set(e,t,n,c)}};function Wu(e){return qc(e)?e:new Proxy(e,ah)}function Es(e){const t=be(e)?new Array(e.length):{};for(const n in e)t[n]=Y(e,n);return t}class lh{constructor(t,n,c){this._object=t,this._key=n,this._defaultValue=c,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return qm(xe(this._object),this._key)}}function Y(e,t,n){const c=e[t];return We(c)?c:new lh(e,t,n)}var Ku;class ih{constructor(t,n,c,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Ku]=!1,this._dirty=!0,this.effect=new Cs(t,()=>{this._dirty||(this._dirty=!0,Hu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=c}get value(){const t=xe(this);return zu(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Ku="__v_isReadonly";function sh(e,t,n=!1){let c,a;const l=we(e);return l?(c=e,a=Ut):(c=e.get,a=e.set),new ih(c,a,l||!a,n)}function Rn(e,t,n,c){let a;try{a=c?e(...c):e()}catch(l){jl(l,t,n)}return a}function Pt(e,t,n,c){if(we(e)){const l=Rn(e,t,n,c);return l&&Vu(l)&&l.catch(i=>{jl(i,t,n)}),l}const a=[];for(let l=0;l<e.length;l++)a.push(Pt(e[l],t,n,c));return a}function jl(e,t,n,c=!0){const a=t?t.vnode:null;if(t){let l=t.parent;const i=t.proxy,s=n;for(;l;){const u=l.ec;if(u){for(let o=0;o<u.length;o++)if(u[o](e,i,s)===!1)return}l=l.parent}const r=t.appContext.config.errorHandler;if(r){Rn(r,null,10,[e,i,s]);return}}rh(e,n,a,c)}function rh(e,t,n,c=!0){console.error(e)}let ka=!1,Ci=!1;const ut=[];let en=0;const Pc=[];let vn=null,tc=0;const Yu=Promise.resolve();let As=null;function Oe(e){const t=As||Yu;return e?t.then(this?e.bind(this):e):t}function oh(e){let t=en+1,n=ut.length;for(;t<n;){const c=t+n>>>1;Sa(ut[c])<e?t=c+1:n=c}return t}function qs(e){(!ut.length||!ut.includes(e,ka&&e.allowRecurse?en+1:en))&&(e.id==null?ut.push(e):ut.splice(oh(e.id),0,e),Gu())}function Gu(){!ka&&!Ci&&(Ci=!0,As=Yu.then(Zu))}function uh(e){const t=ut.indexOf(e);t>en&&ut.splice(t,1)}function dh(e){be(e)?Pc.push(...e):(!vn||!vn.includes(e,e.allowRecurse?tc+1:tc))&&Pc.push(e),Gu()}function Mr(e,t=ka?en+1:0){for(;t<ut.length;t++){const n=ut[t];n&&n.pre&&(ut.splice(t,1),t--,n())}}function Xu(e){if(Pc.length){const t=[...new Set(Pc)];if(Pc.length=0,vn){vn.push(...t);return}for(vn=t,vn.sort((n,c)=>Sa(n)-Sa(c)),tc=0;tc<vn.length;tc++)vn[tc]();vn=null,tc=0}}const Sa=e=>e.id==null?1/0:e.id,fh=(e,t)=>{const n=Sa(e)-Sa(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Zu(e){Ci=!1,ka=!0,ut.sort(fh);const t=Ut;try{for(en=0;en<ut.length;en++){const n=ut[en];n&&n.active!==!1&&Rn(n,null,14)}}finally{en=0,ut.length=0,Xu(),ka=!1,As=null,(ut.length||Pc.length)&&Zu()}}function vh(e,t,...n){if(e.isUnmounted)return;const c=e.vnode.props||Fe;let a=n;const l=t.startsWith("update:"),i=l&&t.slice(7);if(i&&i in c){const o=`${i==="modelValue"?"model":i}Modifiers`,{number:d,trim:f}=c[o]||Fe;f&&(a=n.map(m=>Ye(m)?m.trim():m)),d&&(a=n.map(bi))}let s,r=c[s=nl(t)]||c[s=nl($t(t))];!r&&l&&(r=c[s=nl(Dc(t))]),r&&Pt(r,e,6,a);const u=c[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Pt(u,e,6,a)}}function Qu(e,t,n=!1){const c=t.emitsCache,a=c.get(e);if(a!==void 0)return a;const l=e.emits;let i={},s=!1;if(!we(e)){const r=u=>{const o=Qu(u,t,!0);o&&(s=!0,at(i,o))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!l&&!s?(Ne(e)&&c.set(e,null),null):(be(l)?l.forEach(r=>i[r]=null):at(i,l),Ne(e)&&c.set(e,i),i)}function Vl(e,t){return!e||!Cl(t)?!1:(t=t.slice(2).replace(/Once$/,""),qe(e,t[0].toLowerCase()+t.slice(1))||qe(e,Dc(t))||qe(e,t))}let Vt=null,Ju=null;function fl(e){const t=Vt;return Vt=e,Ju=e&&e.type.__scopeId||null,t}function Ae(e,t=Vt,n){if(!t||e._n)return e;const c=(...a)=>{c._d&&Wr(-1);const l=fl(t);let i;try{i=e(...a)}finally{fl(l),c._d&&Wr(1)}return i};return c._n=!0,c._c=!0,c._d=!0,c}function Xl(e){const{type:t,vnode:n,proxy:c,withProxy:a,props:l,propsOptions:[i],slots:s,attrs:r,emit:u,render:o,renderCache:d,data:f,setupState:m,ctx:h,inheritAttrs:g}=e;let S,b;const C=fl(e);try{if(n.shapeFlag&4){const P=a||c;S=Qt(o.call(P,P,d,l,m,f,h)),b=r}else{const P=t;S=Qt(P.length>1?P(l,{attrs:r,slots:s,emit:u}):P(l,null)),b=t.props?r:mh(r)}}catch(P){va.length=0,jl(P,e,1),S=v(mn)}let p=S;if(b&&g!==!1){const P=Object.keys(b),{shapeFlag:j}=p;P.length&&j&7&&(i&&P.some(gs)&&(b=hh(b,i)),p=yn(p,b))}return n.dirs&&(p=yn(p),p.dirs=p.dirs?p.dirs.concat(n.dirs):n.dirs),n.transition&&(p.transition=n.transition),S=p,fl(C),S}const mh=e=>{let t;for(const n in e)(n==="class"||n==="style"||Cl(n))&&((t||(t={}))[n]=e[n]);return t},hh=(e,t)=>{const n={};for(const c in e)(!gs(c)||!(c.slice(9)in t))&&(n[c]=e[c]);return n};function gh(e,t,n){const{props:c,children:a,component:l}=e,{props:i,children:s,patchFlag:r}=t,u=l.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&r>=0){if(r&1024)return!0;if(r&16)return c?Br(c,i,u):!!i;if(r&8){const o=t.dynamicProps;for(let d=0;d<o.length;d++){const f=o[d];if(i[f]!==c[f]&&!Vl(u,f))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:c===i?!1:c?i?Br(c,i,u):!0:!!i;return!1}function Br(e,t,n){const c=Object.keys(t);if(c.length!==Object.keys(e).length)return!0;for(let a=0;a<c.length;a++){const l=c[a];if(t[l]!==e[l]&&!Vl(n,l))return!0}return!1}function yh({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const bh=e=>e.__isSuspense;function ph(e,t){t&&t.pendingBranch?be(e)?t.effects.push(...e):t.effects.push(e):dh(e)}function Ke(e,t){if(Ge){let n=Ge.provides;const c=Ge.parent&&Ge.parent.provides;c===n&&(n=Ge.provides=Object.create(c)),n[e]=t}}function Ie(e,t,n=!1){const c=Ge||Vt;if(c){const a=c.parent==null?c.vnode.appContext&&c.vnode.appContext.provides:c.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&we(t)?t.call(c.proxy):t}}function Kt(e,t){return Ps(e,null,t)}const Ya={};function ae(e,t,n){return Ps(e,t,n)}function Ps(e,t,{immediate:n,deep:c,flush:a,onTrack:l,onTrigger:i}=Fe){const s=Im()===(Ge==null?void 0:Ge.scope)?Ge:null;let r,u=!1,o=!1;if(We(e)?(r=()=>e.value,u=dl(e)):qc(e)?(r=()=>e,c=!0):be(e)?(o=!0,u=e.some(p=>qc(p)||dl(p)),r=()=>e.map(p=>{if(We(p))return p.value;if(qc(p))return lc(p);if(we(p))return Rn(p,s,2)})):we(e)?t?r=()=>Rn(e,s,2):r=()=>{if(!(s&&s.isUnmounted))return d&&d(),Pt(e,s,3,[f])}:r=Ut,t&&c){const p=r;r=()=>lc(p())}let d,f=p=>{d=b.onStop=()=>{Rn(p,s,4)}},m;if(wa)if(f=Ut,t?n&&Pt(t,s,3,[r(),o?[]:void 0,f]):r(),a==="sync"){const p=rg();m=p.__watcherHandles||(p.__watcherHandles=[])}else return Ut;let h=o?new Array(e.length).fill(Ya):Ya;const g=()=>{if(b.active)if(t){const p=b.run();(c||u||(o?p.some((P,j)=>ba(P,h[j])):ba(p,h)))&&(d&&d(),Pt(t,s,3,[p,h===Ya?void 0:o&&h[0]===Ya?[]:h,f]),h=p)}else b.run()};g.allowRecurse=!!t;let S;a==="sync"?S=g:a==="post"?S=()=>kt(g,s&&s.suspense):(g.pre=!0,s&&(g.id=s.uid),S=()=>qs(g));const b=new Cs(r,S);t?n?g():h=b.run():a==="post"?kt(b.run.bind(b),s&&s.suspense):b.run();const C=()=>{b.stop(),s&&s.scope&&ys(s.scope.effects,b)};return m&&m.push(C),C}function kh(e,t,n){const c=this.proxy,a=Ye(e)?e.includes(".")?ed(c,e):()=>c[e]:e.bind(c,c);let l;we(t)?l=t:(l=t.handler,n=t);const i=Ge;Bc(this);const s=Ps(a,l.bind(c),n);return i?Bc(i):dc(),s}function ed(e,t){const n=t.split(".");return()=>{let c=e;for(let a=0;a<n.length&&c;a++)c=c[n[a]];return c}}function lc(e,t){if(!Ne(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),We(e))lc(e.value,t);else if(be(e))for(let n=0;n<e.length;n++)lc(e[n],t);else if(ju(e)||Ac(e))e.forEach(n=>{lc(n,t)});else if(Eu(e))for(const n in e)lc(e[n],t);return e}function td(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return mt(()=>{e.isMounted=!0}),pt(()=>{e.isUnmounting=!0}),e}const qt=[Function,Array],Sh={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:qt,onEnter:qt,onAfterEnter:qt,onEnterCancelled:qt,onBeforeLeave:qt,onLeave:qt,onAfterLeave:qt,onLeaveCancelled:qt,onBeforeAppear:qt,onAppear:qt,onAfterAppear:qt,onAppearCancelled:qt},setup(e,{slots:t}){const n=Pl(),c=td();let a;return()=>{const l=t.default&&Ts(t.default(),!0);if(!l||!l.length)return;let i=l[0];if(l.length>1){for(const g of l)if(g.type!==mn){i=g;break}}const s=xe(e),{mode:r}=s;if(c.isLeaving)return Zl(i);const u=Rr(i);if(!u)return Zl(i);const o=Ca(u,s,c,n);_a(u,o);const d=n.subTree,f=d&&Rr(d);let m=!1;const{getTransitionKey:h}=u.type;if(h){const g=h();a===void 0?a=g:g!==a&&(a=g,m=!0)}if(f&&f.type!==mn&&(!nc(u,f)||m)){const g=Ca(f,s,c,n);if(_a(f,g),r==="out-in")return c.isLeaving=!0,g.afterLeave=()=>{c.isLeaving=!1,n.update.active!==!1&&n.update()},Zl(i);r==="in-out"&&u.type!==mn&&(g.delayLeave=(S,b,C)=>{const p=cd(c,f);p[String(f.key)]=f,S._leaveCb=()=>{b(),S._leaveCb=void 0,delete o.delayedLeave},o.delayedLeave=C})}return i}}},nd=Sh;function cd(e,t){const{leavingVNodes:n}=e;let c=n.get(t.type);return c||(c=Object.create(null),n.set(t.type,c)),c}function Ca(e,t,n,c){const{appear:a,mode:l,persisted:i=!1,onBeforeEnter:s,onEnter:r,onAfterEnter:u,onEnterCancelled:o,onBeforeLeave:d,onLeave:f,onAfterLeave:m,onLeaveCancelled:h,onBeforeAppear:g,onAppear:S,onAfterAppear:b,onAppearCancelled:C}=t,p=String(e.key),P=cd(n,e),j=(k,x)=>{k&&Pt(k,c,9,x)},E=(k,x)=>{const V=x[1];j(k,x),be(k)?k.every(I=>I.length<=1)&&V():k.length<=1&&V()},A={mode:l,persisted:i,beforeEnter(k){let x=s;if(!n.isMounted)if(a)x=g||s;else return;k._leaveCb&&k._leaveCb(!0);const V=P[p];V&&nc(e,V)&&V.el._leaveCb&&V.el._leaveCb(),j(x,[k])},enter(k){let x=r,V=u,I=o;if(!n.isMounted)if(a)x=S||r,V=b||u,I=C||o;else return;let w=!1;const M=k._enterCb=N=>{w||(w=!0,N?j(I,[k]):j(V,[k]),A.delayedLeave&&A.delayedLeave(),k._enterCb=void 0)};x?E(x,[k,M]):M()},leave(k,x){const V=String(e.key);if(k._enterCb&&k._enterCb(!0),n.isUnmounting)return x();j(d,[k]);let I=!1;const w=k._leaveCb=M=>{I||(I=!0,x(),M?j(h,[k]):j(m,[k]),k._leaveCb=void 0,P[V]===e&&delete P[V])};P[V]=e,f?E(f,[k,w]):w()},clone(k){return Ca(k,t,n,c)}};return A}function Zl(e){if(Il(e))return e=yn(e),e.children=null,e}function Rr(e){return Il(e)?e.children?e.children[0]:void 0:e}function _a(e,t){e.shapeFlag&6&&e.component?_a(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Ts(e,t=!1,n){let c=[],a=0;for(let l=0;l<e.length;l++){let i=e[l];const s=n==null?i.key:String(n)+String(i.key!=null?i.key:l);i.type===me?(i.patchFlag&128&&a++,c=c.concat(Ts(i.children,t,s))):(t||i.type!==mn)&&c.push(s!=null?yn(i,{key:s}):i)}if(a>1)for(let l=0;l<c.length;l++)c[l].patchFlag=-2;return c}function $s(e){return we(e)?{setup:e,name:e.name}:e}const al=e=>!!e.type.__asyncLoader,Il=e=>e.type.__isKeepAlive;function ad(e,t){id(e,"a",t)}function ld(e,t){id(e,"da",t)}function id(e,t,n=Ge){const c=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(El(t,c,n),n){let a=n.parent;for(;a&&a.parent;)Il(a.parent.vnode)&&Ch(c,t,n,a),a=a.parent}}function Ch(e,t,n,c){const a=El(t,e,c,!0);rd(()=>{ys(c[t],a)},n)}function El(e,t,n=Ge,c=!1){if(n){const a=n[e]||(n[e]=[]),l=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;zc(),Bc(n);const s=Pt(t,n,e,i);return dc(),Hc(),s});return c?a.unshift(l):a.push(l),l}}const _n=e=>(t,n=Ge)=>(!wa||e==="sp")&&El(e,(...c)=>t(...c),n),Al=_n("bm"),mt=_n("m"),sd=_n("bu"),Ms=_n("u"),pt=_n("bum"),rd=_n("um"),_h=_n("sp"),xh=_n("rtg"),wh=_n("rtc");function jh(e,t=Ge){El("ec",e,t)}function He(e,t){const n=Vt;if(n===null)return e;const c=Tl(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let l=0;l<t.length;l++){let[i,s,r,u=Fe]=t[l];i&&(we(i)&&(i={mounted:i,updated:i}),i.deep&&lc(s),a.push({dir:i,instance:c,value:s,oldValue:void 0,arg:r,modifiers:u}))}return e}function Gn(e,t,n,c){const a=e.dirs,l=t&&t.dirs;for(let i=0;i<a.length;i++){const s=a[i];l&&(s.oldValue=l[i].value);let r=s.dir[c];r&&(zc(),Pt(r,n,8,[e.el,s,e,t]),Hc())}}const Bs="components",Vh="directives";function Le(e,t){return Rs(Bs,e,!0,t)||e}const od=Symbol();function Ih(e){return Ye(e)?Rs(Bs,e,!1)||e:e||od}function Ct(e){return Rs(Vh,e)}function Rs(e,t,n=!0,c=!1){const a=Vt||Ge;if(a){const l=a.type;if(e===Bs){const s=lg(l,!1);if(s&&(s===t||s===$t(t)||s===Cn($t(t))))return l}const i=Or(a[e]||l[e],t)||Or(a.appContext[e],t);return!i&&c?l:i}}function Or(e,t){return e&&(e[t]||e[$t(t)]||e[Cn($t(t))])}function Mn(e,t,n,c){let a;const l=n&&n[c];if(be(e)||Ye(e)){a=new Array(e.length);for(let i=0,s=e.length;i<s;i++)a[i]=t(e[i],i,void 0,l&&l[i])}else if(typeof e=="number"){a=new Array(e);for(let i=0;i<e;i++)a[i]=t(i+1,i,void 0,l&&l[i])}else if(Ne(e))if(e[Symbol.iterator])a=Array.from(e,(i,s)=>t(i,s,void 0,l&&l[s]));else{const i=Object.keys(e);a=new Array(i.length);for(let s=0,r=i.length;s<r;s++){const u=i[s];a[s]=t(e[u],u,s,l&&l[s])}}else a=[];return n&&(n[c]=a),a}function Ql(e,t){const n={};for(const c in e)n[t&&/[A-Z]/.test(c)?`on:${c}`:nl(c)]=e[c];return n}const _i=e=>e?kd(e)?Tl(e)||e.proxy:_i(e.parent):null,da=at(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>_i(e.parent),$root:e=>_i(e.root),$emit:e=>e.emit,$options:e=>Os(e),$forceUpdate:e=>e.f||(e.f=()=>qs(e.update)),$nextTick:e=>e.n||(e.n=Oe.bind(e.proxy)),$watch:e=>kh.bind(e)}),Jl=(e,t)=>e!==Fe&&!e.__isScriptSetup&&qe(e,t),Eh={get({_:e},t){const{ctx:n,setupState:c,data:a,props:l,accessCache:i,type:s,appContext:r}=e;let u;if(t[0]!=="$"){const m=i[t];if(m!==void 0)switch(m){case 1:return c[t];case 2:return a[t];case 4:return n[t];case 3:return l[t]}else{if(Jl(c,t))return i[t]=1,c[t];if(a!==Fe&&qe(a,t))return i[t]=2,a[t];if((u=e.propsOptions[0])&&qe(u,t))return i[t]=3,l[t];if(n!==Fe&&qe(n,t))return i[t]=4,n[t];xi&&(i[t]=0)}}const o=da[t];let d,f;if(o)return t==="$attrs"&&St(e,"get",t),o(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==Fe&&qe(n,t))return i[t]=4,n[t];if(f=r.config.globalProperties,qe(f,t))return f[t]},set({_:e},t,n){const{data:c,setupState:a,ctx:l}=e;return Jl(a,t)?(a[t]=n,!0):c!==Fe&&qe(c,t)?(c[t]=n,!0):qe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(l[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:c,appContext:a,propsOptions:l}},i){let s;return!!n[i]||e!==Fe&&qe(e,i)||Jl(t,i)||(s=l[0])&&qe(s,i)||qe(c,i)||qe(da,i)||qe(a.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:qe(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let xi=!0;function Ah(e){const t=Os(e),n=e.proxy,c=e.ctx;xi=!1,t.beforeCreate&&Lr(t.beforeCreate,e,"bc");const{data:a,computed:l,methods:i,watch:s,provide:r,inject:u,created:o,beforeMount:d,mounted:f,beforeUpdate:m,updated:h,activated:g,deactivated:S,beforeDestroy:b,beforeUnmount:C,destroyed:p,unmounted:P,render:j,renderTracked:E,renderTriggered:A,errorCaptured:k,serverPrefetch:x,expose:V,inheritAttrs:I,components:w,directives:M,filters:N}=t;if(u&&qh(u,c,null,e.appContext.config.unwrapInjectedRef),i)for(const H in i){const D=i[H];we(D)&&(c[H]=D.bind(n))}if(a){const H=a.call(n,n);Ne(H)&&(e.data=it(H))}if(xi=!0,l)for(const H in l){const D=l[H],J=we(D)?D.bind(n,n):we(D.get)?D.get.bind(n,n):Ut,R=!we(D)&&we(D.set)?D.set.bind(n):Ut,K=y({get:J,set:R});Object.defineProperty(c,H,{enumerable:!0,configurable:!0,get:()=>K.value,set:z=>K.value=z})}if(s)for(const H in s)ud(s[H],c,n,H);if(r){const H=we(r)?r.call(n):r;Reflect.ownKeys(H).forEach(D=>{Ke(D,H[D])})}o&&Lr(o,e,"c");function F(H,D){be(D)?D.forEach(J=>H(J.bind(n))):D&&H(D.bind(n))}if(F(Al,d),F(mt,f),F(sd,m),F(Ms,h),F(ad,g),F(ld,S),F(jh,k),F(wh,E),F(xh,A),F(pt,C),F(rd,P),F(_h,x),be(V))if(V.length){const H=e.exposed||(e.exposed={});V.forEach(D=>{Object.defineProperty(H,D,{get:()=>n[D],set:J=>n[D]=J})})}else e.exposed||(e.exposed={});j&&e.render===Ut&&(e.render=j),I!=null&&(e.inheritAttrs=I),w&&(e.components=w),M&&(e.directives=M)}function qh(e,t,n=Ut,c=!1){be(e)&&(e=wi(e));for(const a in e){const l=e[a];let i;Ne(l)?"default"in l?i=Ie(l.from||a,l.default,!0):i=Ie(l.from||a):i=Ie(l),We(i)&&c?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):t[a]=i}}function Lr(e,t,n){Pt(be(e)?e.map(c=>c.bind(t.proxy)):e.bind(t.proxy),t,n)}function ud(e,t,n,c){const a=c.includes(".")?ed(n,c):()=>n[c];if(Ye(e)){const l=t[e];we(l)&&ae(a,l)}else if(we(e))ae(a,e.bind(n));else if(Ne(e))if(be(e))e.forEach(l=>ud(l,t,n,c));else{const l=we(e.handler)?e.handler.bind(n):t[e.handler];we(l)&&ae(a,l,e)}}function Os(e){const t=e.type,{mixins:n,extends:c}=t,{mixins:a,optionsCache:l,config:{optionMergeStrategies:i}}=e.appContext,s=l.get(t);let r;return s?r=s:!a.length&&!n&&!c?r=t:(r={},a.length&&a.forEach(u=>vl(r,u,i,!0)),vl(r,t,i)),Ne(t)&&l.set(t,r),r}function vl(e,t,n,c=!1){const{mixins:a,extends:l}=t;l&&vl(e,l,n,!0),a&&a.forEach(i=>vl(e,i,n,!0));for(const i in t)if(!(c&&i==="expose")){const s=Ph[i]||n&&n[i];e[i]=s?s(e[i],t[i]):t[i]}return e}const Ph={data:Fr,props:ec,emits:ec,methods:ec,computed:ec,beforeCreate:yt,created:yt,beforeMount:yt,mounted:yt,beforeUpdate:yt,updated:yt,beforeDestroy:yt,beforeUnmount:yt,destroyed:yt,unmounted:yt,activated:yt,deactivated:yt,errorCaptured:yt,serverPrefetch:yt,components:ec,directives:ec,watch:$h,provide:Fr,inject:Th};function Fr(e,t){return t?e?function(){return at(we(e)?e.call(this,this):e,we(t)?t.call(this,this):t)}:t:e}function Th(e,t){return ec(wi(e),wi(t))}function wi(e){if(be(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function yt(e,t){return e?[...new Set([].concat(e,t))]:t}function ec(e,t){return e?at(at(Object.create(null),e),t):t}function $h(e,t){if(!e)return t;if(!t)return e;const n=at(Object.create(null),e);for(const c in t)n[c]=yt(e[c],t[c]);return n}function Mh(e,t,n,c=!1){const a={},l={};ol(l,ql,1),e.propsDefaults=Object.create(null),dd(e,t,a,l);for(const i in e.propsOptions[0])i in a||(a[i]=void 0);n?e.props=c?a:nh(a):e.type.props?e.props=a:e.props=l,e.attrs=l}function Bh(e,t,n,c){const{props:a,attrs:l,vnode:{patchFlag:i}}=e,s=xe(a),[r]=e.propsOptions;let u=!1;if((c||i>0)&&!(i&16)){if(i&8){const o=e.vnode.dynamicProps;for(let d=0;d<o.length;d++){let f=o[d];if(Vl(e.emitsOptions,f))continue;const m=t[f];if(r)if(qe(l,f))m!==l[f]&&(l[f]=m,u=!0);else{const h=$t(f);a[h]=ji(r,s,h,m,e,!1)}else m!==l[f]&&(l[f]=m,u=!0)}}}else{dd(e,t,a,l)&&(u=!0);let o;for(const d in s)(!t||!qe(t,d)&&((o=Dc(d))===d||!qe(t,o)))&&(r?n&&(n[d]!==void 0||n[o]!==void 0)&&(a[d]=ji(r,s,d,void 0,e,!0)):delete a[d]);if(l!==s)for(const d in l)(!t||!qe(t,d))&&(delete l[d],u=!0)}u&&gn(e,"set","$attrs")}function dd(e,t,n,c){const[a,l]=e.propsOptions;let i=!1,s;if(t)for(let r in t){if(tl(r))continue;const u=t[r];let o;a&&qe(a,o=$t(r))?!l||!l.includes(o)?n[o]=u:(s||(s={}))[o]=u:Vl(e.emitsOptions,r)||(!(r in c)||u!==c[r])&&(c[r]=u,i=!0)}if(l){const r=xe(n),u=s||Fe;for(let o=0;o<l.length;o++){const d=l[o];n[d]=ji(a,r,d,u[d],e,!qe(u,d))}}return i}function ji(e,t,n,c,a,l){const i=e[n];if(i!=null){const s=qe(i,"default");if(s&&c===void 0){const r=i.default;if(i.type!==Function&&we(r)){const{propsDefaults:u}=a;n in u?c=u[n]:(Bc(a),c=u[n]=r.call(null,t),dc())}else c=r}i[0]&&(l&&!s?c=!1:i[1]&&(c===""||c===Dc(n))&&(c=!0))}return c}function fd(e,t,n=!1){const c=t.propsCache,a=c.get(e);if(a)return a;const l=e.props,i={},s=[];let r=!1;if(!we(e)){const o=d=>{r=!0;const[f,m]=fd(d,t,!0);at(i,f),m&&s.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}if(!l&&!r)return Ne(e)&&c.set(e,Ec),Ec;if(be(l))for(let o=0;o<l.length;o++){const d=$t(l[o]);Nr(d)&&(i[d]=Fe)}else if(l)for(const o in l){const d=$t(o);if(Nr(d)){const f=l[o],m=i[d]=be(f)||we(f)?{type:f}:Object.assign({},f);if(m){const h=Hr(Boolean,m.type),g=Hr(String,m.type);m[0]=h>-1,m[1]=g<0||h<g,(h>-1||qe(m,"default"))&&s.push(d)}}}const u=[i,s];return Ne(e)&&c.set(e,u),u}function Nr(e){return e[0]!=="$"}function Dr(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function zr(e,t){return Dr(e)===Dr(t)}function Hr(e,t){return be(t)?t.findIndex(n=>zr(n,e)):we(t)&&zr(t,e)?0:-1}const vd=e=>e[0]==="_"||e==="$stable",Ls=e=>be(e)?e.map(Qt):[Qt(e)],Rh=(e,t,n)=>{if(t._n)return t;const c=Ae((...a)=>Ls(t(...a)),n);return c._c=!1,c},md=(e,t,n)=>{const c=e._ctx;for(const a in e){if(vd(a))continue;const l=e[a];if(we(l))t[a]=Rh(a,l,c);else if(l!=null){const i=Ls(l);t[a]=()=>i}}},hd=(e,t)=>{const n=Ls(t);e.slots.default=()=>n},Oh=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=xe(t),ol(t,"_",n)):md(t,e.slots={})}else e.slots={},t&&hd(e,t);ol(e.slots,ql,1)},Lh=(e,t,n)=>{const{vnode:c,slots:a}=e;let l=!0,i=Fe;if(c.shapeFlag&32){const s=t._;s?n&&s===1?l=!1:(at(a,t),!n&&s===1&&delete a._):(l=!t.$stable,md(t,a)),i=t}else t&&(hd(e,t),i={default:1});if(l)for(const s in a)!vd(s)&&!(s in i)&&delete a[s]};function gd(){return{app:null,config:{isNativeTag:pm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fh=0;function Nh(e,t){return function(c,a=null){we(c)||(c=Object.assign({},c)),a!=null&&!Ne(a)&&(a=null);const l=gd(),i=new Set;let s=!1;const r=l.app={_uid:Fh++,_component:c,_props:a,_container:null,_context:l,_instance:null,version:og,get config(){return l.config},set config(u){},use(u,...o){return i.has(u)||(u&&we(u.install)?(i.add(u),u.install(r,...o)):we(u)&&(i.add(u),u(r,...o))),r},mixin(u){return l.mixins.includes(u)||l.mixins.push(u),r},component(u,o){return o?(l.components[u]=o,r):l.components[u]},directive(u,o){return o?(l.directives[u]=o,r):l.directives[u]},mount(u,o,d){if(!s){const f=v(c,a);return f.appContext=l,o&&t?t(f,u):e(f,u,d),s=!0,r._container=u,u.__vue_app__=r,Tl(f.component)||f.component.proxy}},unmount(){s&&(e(null,r._container),delete r._container.__vue_app__)},provide(u,o){return l.provides[u]=o,r}};return r}}function Vi(e,t,n,c,a=!1){if(be(e)){e.forEach((f,m)=>Vi(f,t&&(be(t)?t[m]:t),n,c,a));return}if(al(c)&&!a)return;const l=c.shapeFlag&4?Tl(c.component)||c.component.proxy:c.el,i=a?null:l,{i:s,r}=e,u=t&&t.r,o=s.refs===Fe?s.refs={}:s.refs,d=s.setupState;if(u!=null&&u!==r&&(Ye(u)?(o[u]=null,qe(d,u)&&(d[u]=null)):We(u)&&(u.value=null)),we(r))Rn(r,s,12,[i,o]);else{const f=Ye(r),m=We(r);if(f||m){const h=()=>{if(e.f){const g=f?qe(d,r)?d[r]:o[r]:r.value;a?be(g)&&ys(g,l):be(g)?g.includes(l)||g.push(l):f?(o[r]=[l],qe(d,r)&&(d[r]=o[r])):(r.value=[l],e.k&&(o[e.k]=r.value))}else f?(o[r]=i,qe(d,r)&&(d[r]=i)):m&&(r.value=i,e.k&&(o[e.k]=i))};i?(h.id=-1,kt(h,n)):h()}}}const kt=ph;function Dh(e){return zh(e)}function zh(e,t){const n=jm();n.__VUE__=!0;const{insert:c,remove:a,patchProp:l,createElement:i,createText:s,createComment:r,setText:u,setElementText:o,parentNode:d,nextSibling:f,setScopeId:m=Ut,insertStaticContent:h}=e,g=(_,q,L,U=null,G=null,te=null,ie=!1,ee=null,ce=!!q.dynamicChildren)=>{if(_===q)return;_&&!nc(_,q)&&(U=O(_),z(_,G,te,!0),_=null),q.patchFlag===-2&&(ce=!1,q.dynamicChildren=null);const{type:Q,ref:he,shapeFlag:de}=q;switch(Q){case Ma:S(_,q,L,U);break;case mn:b(_,q,L,U);break;case ei:_==null&&C(q,L,U,ie);break;case me:w(_,q,L,U,G,te,ie,ee,ce);break;default:de&1?j(_,q,L,U,G,te,ie,ee,ce):de&6?M(_,q,L,U,G,te,ie,ee,ce):(de&64||de&128)&&Q.process(_,q,L,U,G,te,ie,ee,ce,oe)}he!=null&&G&&Vi(he,_&&_.ref,te,q||_,!q)},S=(_,q,L,U)=>{if(_==null)c(q.el=s(q.children),L,U);else{const G=q.el=_.el;q.children!==_.children&&u(G,q.children)}},b=(_,q,L,U)=>{_==null?c(q.el=r(q.children||""),L,U):q.el=_.el},C=(_,q,L,U)=>{[_.el,_.anchor]=h(_.children,q,L,U,_.el,_.anchor)},p=({el:_,anchor:q},L,U)=>{let G;for(;_&&_!==q;)G=f(_),c(_,L,U),_=G;c(q,L,U)},P=({el:_,anchor:q})=>{let L;for(;_&&_!==q;)L=f(_),a(_),_=L;a(q)},j=(_,q,L,U,G,te,ie,ee,ce)=>{ie=ie||q.type==="svg",_==null?E(q,L,U,G,te,ie,ee,ce):x(_,q,G,te,ie,ee,ce)},E=(_,q,L,U,G,te,ie,ee)=>{let ce,Q;const{type:he,props:de,shapeFlag:ge,transition:Se,dirs:Ve}=_;if(ce=_.el=i(_.type,te,de&&de.is,de),ge&8?o(ce,_.children):ge&16&&k(_.children,ce,null,U,G,te&&he!=="foreignObject",ie,ee),Ve&&Gn(_,null,U,"created"),A(ce,_,_.scopeId,ie,U),de){for(const Me in de)Me!=="value"&&!tl(Me)&&l(ce,Me,null,de[Me],te,_.children,U,G,T);"value"in de&&l(ce,"value",null,de.value),(Q=de.onVnodeBeforeMount)&&Zt(Q,U,_)}Ve&&Gn(_,null,U,"beforeMount");const Re=(!G||G&&!G.pendingBranch)&&Se&&!Se.persisted;Re&&Se.beforeEnter(ce),c(ce,q,L),((Q=de&&de.onVnodeMounted)||Re||Ve)&&kt(()=>{Q&&Zt(Q,U,_),Re&&Se.enter(ce),Ve&&Gn(_,null,U,"mounted")},G)},A=(_,q,L,U,G)=>{if(L&&m(_,L),U)for(let te=0;te<U.length;te++)m(_,U[te]);if(G){let te=G.subTree;if(q===te){const ie=G.vnode;A(_,ie,ie.scopeId,ie.slotScopeIds,G.parent)}}},k=(_,q,L,U,G,te,ie,ee,ce=0)=>{for(let Q=ce;Q<_.length;Q++){const he=_[Q]=ee?Tn(_[Q]):Qt(_[Q]);g(null,he,q,L,U,G,te,ie,ee)}},x=(_,q,L,U,G,te,ie)=>{const ee=q.el=_.el;let{patchFlag:ce,dynamicChildren:Q,dirs:he}=q;ce|=_.patchFlag&16;const de=_.props||Fe,ge=q.props||Fe;let Se;L&&Xn(L,!1),(Se=ge.onVnodeBeforeUpdate)&&Zt(Se,L,q,_),he&&Gn(q,_,L,"beforeUpdate"),L&&Xn(L,!0);const Ve=G&&q.type!=="foreignObject";if(Q?V(_.dynamicChildren,Q,ee,L,U,Ve,te):ie||D(_,q,ee,null,L,U,Ve,te,!1),ce>0){if(ce&16)I(ee,q,de,ge,L,U,G);else if(ce&2&&de.class!==ge.class&&l(ee,"class",null,ge.class,G),ce&4&&l(ee,"style",de.style,ge.style,G),ce&8){const Re=q.dynamicProps;for(let Me=0;Me<Re.length;Me++){const Qe=Re[Me],Nt=de[Qe],kc=ge[Qe];(kc!==Nt||Qe==="value")&&l(ee,Qe,Nt,kc,G,_.children,L,U,T)}}ce&1&&_.children!==q.children&&o(ee,q.children)}else!ie&&Q==null&&I(ee,q,de,ge,L,U,G);((Se=ge.onVnodeUpdated)||he)&&kt(()=>{Se&&Zt(Se,L,q,_),he&&Gn(q,_,L,"updated")},U)},V=(_,q,L,U,G,te,ie)=>{for(let ee=0;ee<q.length;ee++){const ce=_[ee],Q=q[ee],he=ce.el&&(ce.type===me||!nc(ce,Q)||ce.shapeFlag&70)?d(ce.el):L;g(ce,Q,he,null,U,G,te,ie,!0)}},I=(_,q,L,U,G,te,ie)=>{if(L!==U){if(L!==Fe)for(const ee in L)!tl(ee)&&!(ee in U)&&l(_,ee,L[ee],null,ie,q.children,G,te,T);for(const ee in U){if(tl(ee))continue;const ce=U[ee],Q=L[ee];ce!==Q&&ee!=="value"&&l(_,ee,Q,ce,ie,q.children,G,te,T)}"value"in U&&l(_,"value",L.value,U.value)}},w=(_,q,L,U,G,te,ie,ee,ce)=>{const Q=q.el=_?_.el:s(""),he=q.anchor=_?_.anchor:s("");let{patchFlag:de,dynamicChildren:ge,slotScopeIds:Se}=q;Se&&(ee=ee?ee.concat(Se):Se),_==null?(c(Q,L,U),c(he,L,U),k(q.children,L,he,G,te,ie,ee,ce)):de>0&&de&64&&ge&&_.dynamicChildren?(V(_.dynamicChildren,ge,L,G,te,ie,ee),(q.key!=null||G&&q===G.subTree)&&Fs(_,q,!0)):D(_,q,L,he,G,te,ie,ee,ce)},M=(_,q,L,U,G,te,ie,ee,ce)=>{q.slotScopeIds=ee,_==null?q.shapeFlag&512?G.ctx.activate(q,L,U,ie,ce):N(q,L,U,G,te,ie,ce):Z(_,q,ce)},N=(_,q,L,U,G,te,ie)=>{const ee=_.component=eg(_,U,G);if(Il(_)&&(ee.ctx.renderer=oe),tg(ee),ee.asyncDep){if(G&&G.registerDep(ee,F),!_.el){const ce=ee.subTree=v(mn);b(null,ce,q,L)}return}F(ee,_,q,L,G,te,ie)},Z=(_,q,L)=>{const U=q.component=_.component;if(gh(_,q,L))if(U.asyncDep&&!U.asyncResolved){H(U,q,L);return}else U.next=q,uh(U.update),U.update();else q.el=_.el,U.vnode=q},F=(_,q,L,U,G,te,ie)=>{const ee=()=>{if(_.isMounted){let{next:he,bu:de,u:ge,parent:Se,vnode:Ve}=_,Re=he,Me;Xn(_,!1),he?(he.el=Ve.el,H(_,he,ie)):he=Ve,de&&cl(de),(Me=he.props&&he.props.onVnodeBeforeUpdate)&&Zt(Me,Se,he,Ve),Xn(_,!0);const Qe=Xl(_),Nt=_.subTree;_.subTree=Qe,g(Nt,Qe,d(Nt.el),O(Nt),_,G,te),he.el=Qe.el,Re===null&&yh(_,Qe.el),ge&&kt(ge,G),(Me=he.props&&he.props.onVnodeUpdated)&&kt(()=>Zt(Me,Se,he,Ve),G)}else{let he;const{el:de,props:ge}=q,{bm:Se,m:Ve,parent:Re}=_,Me=al(q);if(Xn(_,!1),Se&&cl(Se),!Me&&(he=ge&&ge.onVnodeBeforeMount)&&Zt(he,Re,q),Xn(_,!0),de&&ve){const Qe=()=>{_.subTree=Xl(_),ve(de,_.subTree,_,G,null)};Me?q.type.__asyncLoader().then(()=>!_.isUnmounted&&Qe()):Qe()}else{const Qe=_.subTree=Xl(_);g(null,Qe,L,U,_,G,te),q.el=Qe.el}if(Ve&&kt(Ve,G),!Me&&(he=ge&&ge.onVnodeMounted)){const Qe=q;kt(()=>Zt(he,Re,Qe),G)}(q.shapeFlag&256||Re&&al(Re.vnode)&&Re.vnode.shapeFlag&256)&&_.a&&kt(_.a,G),_.isMounted=!0,q=L=U=null}},ce=_.effect=new Cs(ee,()=>qs(Q),_.scope),Q=_.update=()=>ce.run();Q.id=_.uid,Xn(_,!0),Q()},H=(_,q,L)=>{q.component=_;const U=_.vnode.props;_.vnode=q,_.next=null,Bh(_,q.props,U,L),Lh(_,q.children,L),zc(),Mr(),Hc()},D=(_,q,L,U,G,te,ie,ee,ce=!1)=>{const Q=_&&_.children,he=_?_.shapeFlag:0,de=q.children,{patchFlag:ge,shapeFlag:Se}=q;if(ge>0){if(ge&128){R(Q,de,L,U,G,te,ie,ee,ce);return}else if(ge&256){J(Q,de,L,U,G,te,ie,ee,ce);return}}Se&8?(he&16&&T(Q,G,te),de!==Q&&o(L,de)):he&16?Se&16?R(Q,de,L,U,G,te,ie,ee,ce):T(Q,G,te,!0):(he&8&&o(L,""),Se&16&&k(de,L,U,G,te,ie,ee,ce))},J=(_,q,L,U,G,te,ie,ee,ce)=>{_=_||Ec,q=q||Ec;const Q=_.length,he=q.length,de=Math.min(Q,he);let ge;for(ge=0;ge<de;ge++){const Se=q[ge]=ce?Tn(q[ge]):Qt(q[ge]);g(_[ge],Se,L,null,G,te,ie,ee,ce)}Q>he?T(_,G,te,!0,!1,de):k(q,L,U,G,te,ie,ee,ce,de)},R=(_,q,L,U,G,te,ie,ee,ce)=>{let Q=0;const he=q.length;let de=_.length-1,ge=he-1;for(;Q<=de&&Q<=ge;){const Se=_[Q],Ve=q[Q]=ce?Tn(q[Q]):Qt(q[Q]);if(nc(Se,Ve))g(Se,Ve,L,null,G,te,ie,ee,ce);else break;Q++}for(;Q<=de&&Q<=ge;){const Se=_[de],Ve=q[ge]=ce?Tn(q[ge]):Qt(q[ge]);if(nc(Se,Ve))g(Se,Ve,L,null,G,te,ie,ee,ce);else break;de--,ge--}if(Q>de){if(Q<=ge){const Se=ge+1,Ve=Se<he?q[Se].el:U;for(;Q<=ge;)g(null,q[Q]=ce?Tn(q[Q]):Qt(q[Q]),L,Ve,G,te,ie,ee,ce),Q++}}else if(Q>ge)for(;Q<=de;)z(_[Q],G,te,!0),Q++;else{const Se=Q,Ve=Q,Re=new Map;for(Q=Ve;Q<=ge;Q++){const _t=q[Q]=ce?Tn(q[Q]):Qt(q[Q]);_t.key!=null&&Re.set(_t.key,Q)}let Me,Qe=0;const Nt=ge-Ve+1;let kc=!1,xr=0;const ca=new Array(Nt);for(Q=0;Q<Nt;Q++)ca[Q]=0;for(Q=Se;Q<=de;Q++){const _t=_[Q];if(Qe>=Nt){z(_t,G,te,!0);continue}let Xt;if(_t.key!=null)Xt=Re.get(_t.key);else for(Me=Ve;Me<=ge;Me++)if(ca[Me-Ve]===0&&nc(_t,q[Me])){Xt=Me;break}Xt===void 0?z(_t,G,te,!0):(ca[Xt-Ve]=Q+1,Xt>=xr?xr=Xt:kc=!0,g(_t,q[Xt],L,null,G,te,ie,ee,ce),Qe++)}const wr=kc?Hh(ca):Ec;for(Me=wr.length-1,Q=Nt-1;Q>=0;Q--){const _t=Ve+Q,Xt=q[_t],jr=_t+1<he?q[_t+1].el:U;ca[Q]===0?g(null,Xt,L,jr,G,te,ie,ee,ce):kc&&(Me<0||Q!==wr[Me]?K(Xt,L,jr,2):Me--)}}},K=(_,q,L,U,G=null)=>{const{el:te,type:ie,transition:ee,children:ce,shapeFlag:Q}=_;if(Q&6){K(_.component.subTree,q,L,U);return}if(Q&128){_.suspense.move(q,L,U);return}if(Q&64){ie.move(_,q,L,oe);return}if(ie===me){c(te,q,L);for(let de=0;de<ce.length;de++)K(ce[de],q,L,U);c(_.anchor,q,L);return}if(ie===ei){p(_,q,L);return}if(U!==2&&Q&1&&ee)if(U===0)ee.beforeEnter(te),c(te,q,L),kt(()=>ee.enter(te),G);else{const{leave:de,delayLeave:ge,afterLeave:Se}=ee,Ve=()=>c(te,q,L),Re=()=>{de(te,()=>{Ve(),Se&&Se()})};ge?ge(te,Ve,Re):Re()}else c(te,q,L)},z=(_,q,L,U=!1,G=!1)=>{const{type:te,props:ie,ref:ee,children:ce,dynamicChildren:Q,shapeFlag:he,patchFlag:de,dirs:ge}=_;if(ee!=null&&Vi(ee,null,L,_,!0),he&256){q.ctx.deactivate(_);return}const Se=he&1&&ge,Ve=!al(_);let Re;if(Ve&&(Re=ie&&ie.onVnodeBeforeUnmount)&&Zt(Re,q,_),he&6)B(_.component,L,U);else{if(he&128){_.suspense.unmount(L,U);return}Se&&Gn(_,null,q,"beforeUnmount"),he&64?_.type.remove(_,q,L,G,oe,U):Q&&(te!==me||de>0&&de&64)?T(Q,q,L,!1,!0):(te===me&&de&384||!G&&he&16)&&T(ce,q,L),U&&fe(_)}(Ve&&(Re=ie&&ie.onVnodeUnmounted)||Se)&&kt(()=>{Re&&Zt(Re,q,_),Se&&Gn(_,null,q,"unmounted")},L)},fe=_=>{const{type:q,el:L,anchor:U,transition:G}=_;if(q===me){ue(L,U);return}if(q===ei){P(_);return}const te=()=>{a(L),G&&!G.persisted&&G.afterLeave&&G.afterLeave()};if(_.shapeFlag&1&&G&&!G.persisted){const{leave:ie,delayLeave:ee}=G,ce=()=>ie(L,te);ee?ee(_.el,te,ce):ce()}else te()},ue=(_,q)=>{let L;for(;_!==q;)L=f(_),a(_),_=L;a(q)},B=(_,q,L)=>{const{bum:U,scope:G,update:te,subTree:ie,um:ee}=_;U&&cl(U),G.stop(),te&&(te.active=!1,z(ie,_,q,L)),ee&&kt(ee,q),kt(()=>{_.isUnmounted=!0},q),q&&q.pendingBranch&&!q.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===q.pendingId&&(q.deps--,q.deps===0&&q.resolve())},T=(_,q,L,U=!1,G=!1,te=0)=>{for(let ie=te;ie<_.length;ie++)z(_[ie],q,L,U,G)},O=_=>_.shapeFlag&6?O(_.component.subTree):_.shapeFlag&128?_.suspense.next():f(_.anchor||_.el),re=(_,q,L)=>{_==null?q._vnode&&z(q._vnode,null,null,!0):g(q._vnode||null,_,q,null,null,null,L),Mr(),Xu(),q._vnode=_},oe={p:g,um:z,m:K,r:fe,mt:N,mc:k,pc:D,pbc:V,n:O,o:e};let je,ve;return t&&([je,ve]=t(oe)),{render:re,hydrate:je,createApp:Nh(re,je)}}function Xn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Fs(e,t,n=!1){const c=e.children,a=t.children;if(be(c)&&be(a))for(let l=0;l<c.length;l++){const i=c[l];let s=a[l];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[l]=Tn(a[l]),s.el=i.el),n||Fs(i,s)),s.type===Ma&&(s.el=i.el)}}function Hh(e){const t=e.slice(),n=[0];let c,a,l,i,s;const r=e.length;for(c=0;c<r;c++){const u=e[c];if(u!==0){if(a=n[n.length-1],e[a]<u){t[c]=a,n.push(c);continue}for(l=0,i=n.length-1;l<i;)s=l+i>>1,e[n[s]]<u?l=s+1:i=s;u<e[n[l]]&&(l>0&&(t[c]=n[l-1]),n[l]=c)}}for(l=n.length,i=n[l-1];l-- >0;)n[l]=i,i=t[i];return n}const Uh=e=>e.__isTeleport,fa=e=>e&&(e.disabled||e.disabled===""),Ur=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Ii=(e,t)=>{const n=e&&e.to;return Ye(n)?t?t(n):null:n},Wh={__isTeleport:!0,process(e,t,n,c,a,l,i,s,r,u){const{mc:o,pc:d,pbc:f,o:{insert:m,querySelector:h,createText:g,createComment:S}}=u,b=fa(t.props);let{shapeFlag:C,children:p,dynamicChildren:P}=t;if(e==null){const j=t.el=g(""),E=t.anchor=g("");m(j,n,c),m(E,n,c);const A=t.target=Ii(t.props,h),k=t.targetAnchor=g("");A&&(m(k,A),i=i||Ur(A));const x=(V,I)=>{C&16&&o(p,V,I,a,l,i,s,r)};b?x(n,E):A&&x(A,k)}else{t.el=e.el;const j=t.anchor=e.anchor,E=t.target=e.target,A=t.targetAnchor=e.targetAnchor,k=fa(e.props),x=k?n:E,V=k?j:A;if(i=i||Ur(E),P?(f(e.dynamicChildren,P,x,a,l,i,s),Fs(e,t,!0)):r||d(e,t,x,V,a,l,i,s,!1),b)k||Ga(t,n,j,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const I=t.target=Ii(t.props,h);I&&Ga(t,I,null,u,0)}else k&&Ga(t,E,A,u,1)}yd(t)},remove(e,t,n,c,{um:a,o:{remove:l}},i){const{shapeFlag:s,children:r,anchor:u,targetAnchor:o,target:d,props:f}=e;if(d&&l(o),(i||!fa(f))&&(l(u),s&16))for(let m=0;m<r.length;m++){const h=r[m];a(h,t,n,!0,!!h.dynamicChildren)}},move:Ga,hydrate:Kh};function Ga(e,t,n,{o:{insert:c},m:a},l=2){l===0&&c(e.targetAnchor,t,n);const{el:i,anchor:s,shapeFlag:r,children:u,props:o}=e,d=l===2;if(d&&c(i,t,n),(!d||fa(o))&&r&16)for(let f=0;f<u.length;f++)a(u[f],t,n,2);d&&c(s,t,n)}function Kh(e,t,n,c,a,l,{o:{nextSibling:i,parentNode:s,querySelector:r}},u){const o=t.target=Ii(t.props,r);if(o){const d=o._lpa||o.firstChild;if(t.shapeFlag&16)if(fa(t.props))t.anchor=u(i(e),t,s(e),n,c,a,l),t.targetAnchor=d;else{t.anchor=i(e);let f=d;for(;f;)if(f=i(f),f&&f.nodeType===8&&f.data==="teleport anchor"){t.targetAnchor=f,o._lpa=t.targetAnchor&&i(t.targetAnchor);break}u(d,t,o,n,c,a,l)}yd(t)}return t.anchor&&i(t.anchor)}const Yh=Wh;function yd(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const me=Symbol(void 0),Ma=Symbol(void 0),mn=Symbol(void 0),ei=Symbol(void 0),va=[];let zt=null;function Be(e=!1){va.push(zt=e?null:[])}function Gh(){va.pop(),zt=va[va.length-1]||null}let xa=1;function Wr(e){xa+=e}function bd(e){return e.dynamicChildren=xa>0?zt||Ec:null,Gh(),xa>0&&zt&&zt.push(e),e}function ct(e,t,n,c,a,l){return bd(et(e,t,n,c,a,l,!0))}function hn(e,t,n,c,a){return bd(v(e,t,n,c,a,!0))}function Ei(e){return e?e.__v_isVNode===!0:!1}function nc(e,t){return e.type===t.type&&e.key===t.key}const ql="__vInternal",pd=({key:e})=>e??null,ll=({ref:e,ref_key:t,ref_for:n})=>e!=null?Ye(e)||We(e)||we(e)?{i:Vt,r:e,k:t,f:!!n}:e:null;function et(e,t=null,n=null,c=0,a=null,l=e===me?0:1,i=!1,s=!1){const r={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&pd(t),ref:t&&ll(t),scopeId:Ju,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:c,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Vt};return s?(Ns(r,n),l&128&&e.normalize(r)):n&&(r.shapeFlag|=Ye(n)?8:16),xa>0&&!i&&zt&&(r.patchFlag>0||l&6)&&r.patchFlag!==32&&zt.push(r),r}const v=Xh;function Xh(e,t=null,n=null,c=0,a=null,l=!1){if((!e||e===od)&&(e=mn),Ei(e)){const s=yn(e,t,!0);return n&&Ns(s,n),xa>0&&!l&&zt&&(s.shapeFlag&6?zt[zt.indexOf(e)]=s:zt.push(s)),s.patchFlag|=-2,s}if(ig(e)&&(e=e.__vccOpts),t){t=Zh(t);let{class:s,style:r}=t;s&&!Ye(s)&&(t.class=$c(s)),Ne(r)&&(Nu(r)&&!be(r)&&(r=at({},r)),t.style=hs(r))}const i=Ye(e)?1:bh(e)?128:Uh(e)?64:Ne(e)?4:we(e)?2:0;return et(e,t,n,c,a,i,l,!0)}function Zh(e){return e?Nu(e)||ql in e?at({},e):e:null}function yn(e,t,n=!1){const{props:c,ref:a,patchFlag:l,children:i}=e,s=t?le(c||{},t):c;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&pd(s),ref:t&&t.ref?n&&a?be(a)?a.concat(ll(t)):[a,ll(t)]:ll(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==me?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&yn(e.ssContent),ssFallback:e.ssFallback&&yn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function lt(e=" ",t=0){return v(Ma,null,e,t)}function Qt(e){return e==null||typeof e=="boolean"?v(mn):be(e)?v(me,null,e.slice()):typeof e=="object"?Tn(e):v(Ma,null,String(e))}function Tn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:yn(e)}function Ns(e,t){let n=0;const{shapeFlag:c}=e;if(t==null)t=null;else if(be(t))n=16;else if(typeof t=="object")if(c&65){const a=t.default;a&&(a._c&&(a._d=!1),Ns(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(ql in t)?t._ctx=Vt:a===3&&Vt&&(Vt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else we(t)?(t={default:t,_ctx:Vt},n=32):(t=String(t),c&64?(n=16,t=[lt(t)]):n=8);e.children=t,e.shapeFlag|=n}function le(...e){const t={};for(let n=0;n<e.length;n++){const c=e[n];for(const a in c)if(a==="class")t.class!==c.class&&(t.class=$c([t.class,c.class]));else if(a==="style")t.style=hs([t.style,c.style]);else if(Cl(a)){const l=t[a],i=c[a];i&&l!==i&&!(be(l)&&l.includes(i))&&(t[a]=l?[].concat(l,i):i)}else a!==""&&(t[a]=c[a])}return t}function Zt(e,t,n,c=null){Pt(e,t,7,[n,c])}const Qh=gd();let Jh=0;function eg(e,t,n){const c=e.type,a=(t?t.appContext:e.appContext)||Qh,l={uid:Jh++,vnode:e,type:c,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Au(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fd(c,a),emitsOptions:Qu(c,a),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:c.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=vh.bind(null,l),e.ce&&e.ce(l),l}let Ge=null;const Pl=()=>Ge||Vt,Bc=e=>{Ge=e,e.scope.on()},dc=()=>{Ge&&Ge.scope.off(),Ge=null};function kd(e){return e.vnode.shapeFlag&4}let wa=!1;function tg(e,t=!1){wa=t;const{props:n,children:c}=e.vnode,a=kd(e);Mh(e,n,a,t),Oh(e,c);const l=a?ng(e,t):void 0;return wa=!1,l}function ng(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Du(new Proxy(e.ctx,Eh));const{setup:c}=n;if(c){const a=e.setupContext=c.length>1?ag(e):null;Bc(e),zc();const l=Rn(c,e,0,[e.props,a]);if(Hc(),dc(),Vu(l)){if(l.then(dc,dc),t)return l.then(i=>{Kr(e,i,t)}).catch(i=>{jl(i,e,0)});e.asyncDep=l}else Kr(e,l,t)}else Sd(e,t)}function Kr(e,t,n){we(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ne(t)&&(e.setupState=Wu(t)),Sd(e,n)}let Yr;function Sd(e,t,n){const c=e.type;if(!e.render){if(!t&&Yr&&!c.render){const a=c.template||Os(e).template;if(a){const{isCustomElement:l,compilerOptions:i}=e.appContext.config,{delimiters:s,compilerOptions:r}=c,u=at(at({isCustomElement:l,delimiters:s},i),r);c.render=Yr(a,u)}}e.render=c.render||Ut}Bc(e),zc(),Ah(e),Hc(),dc()}function cg(e){return new Proxy(e.attrs,{get(t,n){return St(e,"get","$attrs"),t[n]}})}function ag(e){const t=c=>{e.exposed=c||{}};let n;return{get attrs(){return n||(n=cg(e))},slots:e.slots,emit:e.emit,expose:t}}function Tl(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Wu(Du(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in da)return da[n](e)},has(t,n){return n in t||n in da}}))}function lg(e,t=!0){return we(e)?e.displayName||e.name:e.name||t&&e.__name}function ig(e){return we(e)&&"__vccOpts"in e}const y=(e,t)=>sh(e,t,wa);function rn(e,t,n){const c=arguments.length;return c===2?Ne(t)&&!be(t)?Ei(t)?v(e,null,[t]):v(e,t):v(e,null,t):(c>3?n=Array.prototype.slice.call(arguments,2):c===3&&Ei(n)&&(n=[n]),v(e,t,n))}const sg=Symbol(""),rg=()=>Ie(sg),og="3.2.47",ug="http://www.w3.org/2000/svg",cc=typeof document<"u"?document:null,Gr=cc&&cc.createElement("template"),dg={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,c)=>{const a=t?cc.createElementNS(ug,e):cc.createElement(e,n?{is:n}:void 0);return e==="select"&&c&&c.multiple!=null&&a.setAttribute("multiple",c.multiple),a},createText:e=>cc.createTextNode(e),createComment:e=>cc.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>cc.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,c,a,l){const i=n?n.previousSibling:t.lastChild;if(a&&(a===l||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===l||!(a=a.nextSibling)););else{Gr.innerHTML=c?`<svg>${e}</svg>`:e;const s=Gr.content;if(c){const r=s.firstChild;for(;r.firstChild;)s.appendChild(r.firstChild);s.removeChild(r)}t.insertBefore(s,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function fg(e,t,n){const c=e._vtc;c&&(t=(t?[t,...c]:[...c]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function vg(e,t,n){const c=e.style,a=Ye(n);if(n&&!a){if(t&&!Ye(t))for(const l in t)n[l]==null&&Ai(c,l,"");for(const l in n)Ai(c,l,n[l])}else{const l=c.display;a?t!==n&&(c.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(c.display=l)}}const Xr=/\s*!important$/;function Ai(e,t,n){if(be(n))n.forEach(c=>Ai(e,t,c));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const c=mg(e,t);Xr.test(n)?e.setProperty(Dc(c),n.replace(Xr,""),"important"):e[c]=n}}const Zr=["Webkit","Moz","ms"],ti={};function mg(e,t){const n=ti[t];if(n)return n;let c=$t(t);if(c!=="filter"&&c in e)return ti[t]=c;c=Cn(c);for(let a=0;a<Zr.length;a++){const l=Zr[a]+c;if(l in e)return ti[t]=l}return t}const Qr="http://www.w3.org/1999/xlink";function hg(e,t,n,c,a){if(c&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Qr,t.slice(6,t.length)):e.setAttributeNS(Qr,t,n);else{const l=bm(t);n==null||l&&!xu(n)?e.removeAttribute(t):e.setAttribute(t,l?"":n)}}function gg(e,t,n,c,a,l,i){if(t==="innerHTML"||t==="textContent"){c&&i(c,a,l),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const r=n??"";(e.value!==r||e.tagName==="OPTION")&&(e.value=r),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const r=typeof e[t];r==="boolean"?n=xu(n):n==null&&r==="string"?(n="",s=!0):r==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function jc(e,t,n,c){e.addEventListener(t,n,c)}function yg(e,t,n,c){e.removeEventListener(t,n,c)}function bg(e,t,n,c,a=null){const l=e._vei||(e._vei={}),i=l[t];if(c&&i)i.value=c;else{const[s,r]=pg(t);if(c){const u=l[t]=Cg(c,a);jc(e,s,u,r)}else i&&(yg(e,s,i,r),l[t]=void 0)}}const Jr=/(?:Once|Passive|Capture)$/;function pg(e){let t;if(Jr.test(e)){t={};let c;for(;c=e.match(Jr);)e=e.slice(0,e.length-c[0].length),t[c[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Dc(e.slice(2)),t]}let ni=0;const kg=Promise.resolve(),Sg=()=>ni||(kg.then(()=>ni=0),ni=Date.now());function Cg(e,t){const n=c=>{if(!c._vts)c._vts=Date.now();else if(c._vts<=n.attached)return;Pt(_g(c,n.value),t,5,[c])};return n.value=e,n.attached=Sg(),n}function _g(e,t){if(be(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(c=>a=>!a._stopped&&c&&c(a))}else return t}const eo=/^on[a-z]/,xg=(e,t,n,c,a=!1,l,i,s,r)=>{t==="class"?fg(e,c,a):t==="style"?vg(e,n,c):Cl(t)?gs(t)||bg(e,t,n,c,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):wg(e,t,c,a))?gg(e,t,c,l,i,s,r):(t==="true-value"?e._trueValue=c:t==="false-value"&&(e._falseValue=c),hg(e,t,c,a))};function wg(e,t,n,c){return c?!!(t==="innerHTML"||t==="textContent"||t in e&&eo.test(t)&&we(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||eo.test(t)&&Ye(n)?!1:t in e}const An="transition",aa="animation",ln=(e,{slots:t})=>rn(nd,_d(e),t);ln.displayName="Transition";const Cd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},jg=ln.props=at({},nd.props,Cd),Zn=(e,t=[])=>{be(e)?e.forEach(n=>n(...t)):e&&e(...t)},to=e=>e?be(e)?e.some(t=>t.length>1):e.length>1:!1;function _d(e){const t={};for(const w in e)w in Cd||(t[w]=e[w]);if(e.css===!1)return t;const{name:n="v",type:c,duration:a,enterFromClass:l=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:r=l,appearActiveClass:u=i,appearToClass:o=s,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,h=Vg(a),g=h&&h[0],S=h&&h[1],{onBeforeEnter:b,onEnter:C,onEnterCancelled:p,onLeave:P,onLeaveCancelled:j,onBeforeAppear:E=b,onAppear:A=C,onAppearCancelled:k=p}=t,x=(w,M,N)=>{Pn(w,M?o:s),Pn(w,M?u:i),N&&N()},V=(w,M)=>{w._isLeaving=!1,Pn(w,d),Pn(w,m),Pn(w,f),M&&M()},I=w=>(M,N)=>{const Z=w?A:C,F=()=>x(M,w,N);Zn(Z,[M,F]),no(()=>{Pn(M,w?r:l),fn(M,w?o:s),to(Z)||co(M,c,g,F)})};return at(t,{onBeforeEnter(w){Zn(b,[w]),fn(w,l),fn(w,i)},onBeforeAppear(w){Zn(E,[w]),fn(w,r),fn(w,u)},onEnter:I(!1),onAppear:I(!0),onLeave(w,M){w._isLeaving=!0;const N=()=>V(w,M);fn(w,d),wd(),fn(w,f),no(()=>{w._isLeaving&&(Pn(w,d),fn(w,m),to(P)||co(w,c,S,N))}),Zn(P,[w,N])},onEnterCancelled(w){x(w,!1),Zn(p,[w])},onAppearCancelled(w){x(w,!0),Zn(k,[w])},onLeaveCancelled(w){V(w),Zn(j,[w])}})}function Vg(e){if(e==null)return null;if(Ne(e))return[ci(e.enter),ci(e.leave)];{const t=ci(e);return[t,t]}}function ci(e){return wm(e)}function fn(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function Pn(e,t){t.split(/\s+/).forEach(c=>c&&e.classList.remove(c));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function no(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Ig=0;function co(e,t,n,c){const a=e._endId=++Ig,l=()=>{a===e._endId&&c()};if(n)return setTimeout(l,n);const{type:i,timeout:s,propCount:r}=xd(e,t);if(!i)return c();const u=i+"end";let o=0;const d=()=>{e.removeEventListener(u,f),l()},f=m=>{m.target===e&&++o>=r&&d()};setTimeout(()=>{o<r&&d()},s+1),e.addEventListener(u,f)}function xd(e,t){const n=window.getComputedStyle(e),c=h=>(n[h]||"").split(", "),a=c(`${An}Delay`),l=c(`${An}Duration`),i=ao(a,l),s=c(`${aa}Delay`),r=c(`${aa}Duration`),u=ao(s,r);let o=null,d=0,f=0;t===An?i>0&&(o=An,d=i,f=l.length):t===aa?u>0&&(o=aa,d=u,f=r.length):(d=Math.max(i,u),o=d>0?i>u?An:aa:null,f=o?o===An?l.length:r.length:0);const m=o===An&&/\b(transform|all)(,|$)/.test(c(`${An}Property`).toString());return{type:o,timeout:d,propCount:f,hasTransform:m}}function ao(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,c)=>lo(n)+lo(e[c])))}function lo(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function wd(){return document.body.offsetHeight}const jd=new WeakMap,Vd=new WeakMap,Id={name:"TransitionGroup",props:at({},jg,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=Pl(),c=td();let a,l;return Ms(()=>{if(!a.length)return;const i=e.moveClass||`${e.name||"v"}-move`;if(!$g(a[0].el,n.vnode.el,i))return;a.forEach(qg),a.forEach(Pg);const s=a.filter(Tg);wd(),s.forEach(r=>{const u=r.el,o=u.style;fn(u,i),o.transform=o.webkitTransform=o.transitionDuration="";const d=u._moveCb=f=>{f&&f.target!==u||(!f||/transform$/.test(f.propertyName))&&(u.removeEventListener("transitionend",d),u._moveCb=null,Pn(u,i))};u.addEventListener("transitionend",d)})}),()=>{const i=xe(e),s=_d(i);let r=i.tag||me;a=l,l=t.default?Ts(t.default()):[];for(let u=0;u<l.length;u++){const o=l[u];o.key!=null&&_a(o,Ca(o,s,c,n))}if(a)for(let u=0;u<a.length;u++){const o=a[u];_a(o,Ca(o,s,c,n)),jd.set(o,o.el.getBoundingClientRect())}return v(r,null,l)}}},Eg=e=>delete e.mode;Id.props;const Ag=Id;function qg(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function Pg(e){Vd.set(e,e.el.getBoundingClientRect())}function Tg(e){const t=jd.get(e),n=Vd.get(e),c=t.left-n.left,a=t.top-n.top;if(c||a){const l=e.el.style;return l.transform=l.webkitTransform=`translate(${c}px,${a}px)`,l.transitionDuration="0s",e}}function $g(e,t,n){const c=e.cloneNode();e._vtc&&e._vtc.forEach(i=>{i.split(/\s+/).forEach(s=>s&&c.classList.remove(s))}),n.split(/\s+/).forEach(i=>i&&c.classList.add(i)),c.style.display="none";const a=t.nodeType===1?t:t.parentNode;a.appendChild(c);const{hasTransform:l}=xd(c);return a.removeChild(c),l}const io=e=>{const t=e.props["onUpdate:modelValue"]||!1;return be(t)?n=>cl(t,n):t};function Mg(e){e.target.composing=!0}function so(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Bg={created(e,{modifiers:{lazy:t,trim:n,number:c}},a){e._assign=io(a);const l=c||a.props&&a.props.type==="number";jc(e,t?"change":"input",i=>{if(i.target.composing)return;let s=e.value;n&&(s=s.trim()),l&&(s=bi(s)),e._assign(s)}),n&&jc(e,"change",()=>{e.value=e.value.trim()}),t||(jc(e,"compositionstart",Mg),jc(e,"compositionend",so),jc(e,"change",so))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:c,number:a}},l){if(e._assign=io(l),e.composing||document.activeElement===e&&e.type!=="range"&&(n||c&&e.value.trim()===t||(a||e.type==="number")&&bi(e.value)===t))return;const i=t??"";e.value!==i&&(e.value=i)}},on={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):la(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:c}){!t!=!n&&(c?t?(c.beforeEnter(e),la(e,!0),c.enter(e)):c.leave(e,()=>{la(e,!1)}):la(e,t))},beforeUnmount(e,{value:t}){la(e,t)}};function la(e,t){e.style.display=t?e._vod:"none"}const Rg=at({patchProp:xg},dg);let ro;function Og(){return ro||(ro=Dh(Rg))}const Lg=(...e)=>{const t=Og().createApp(...e),{mount:n}=t;return t.mount=c=>{const a=Fg(c);if(!a)return;const l=t._component;!we(l)&&!l.render&&!l.template&&(l.template=a.innerHTML),a.innerHTML="";const i=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),i},t};function Fg(e){return Ye(e)?document.querySelector(e):e}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Vc=typeof window<"u";function Ng(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Te=Object.assign;function ai(e,t){const n={};for(const c in t){const a=t[c];n[c]=Wt(a)?a.map(e):e(a)}return n}const ma=()=>{},Wt=Array.isArray,Dg=/\/$/,zg=e=>e.replace(Dg,"");function li(e,t,n="/"){let c,a={},l="",i="";const s=t.indexOf("#");let r=t.indexOf("?");return s<r&&s>=0&&(r=-1),r>-1&&(c=t.slice(0,r),l=t.slice(r+1,s>-1?s:t.length),a=e(l)),s>-1&&(c=c||t.slice(0,s),i=t.slice(s,t.length)),c=Kg(c??t,n),{fullPath:c+(l&&"?")+l+i,path:c,query:a,hash:i}}function Hg(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function oo(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Ug(e,t,n){const c=t.matched.length-1,a=n.matched.length-1;return c>-1&&c===a&&Rc(t.matched[c],n.matched[a])&&Ed(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Rc(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ed(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Wg(e[n],t[n]))return!1;return!0}function Wg(e,t){return Wt(e)?uo(e,t):Wt(t)?uo(t,e):e===t}function uo(e,t){return Wt(t)?e.length===t.length&&e.every((n,c)=>n===t[c]):e.length===1&&e[0]===t}function Kg(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),c=e.split("/");let a=n.length-1,l,i;for(l=0;l<c.length;l++)if(i=c[l],i!==".")if(i==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+c.slice(l-(l===c.length?1:0)).join("/")}var ja;(function(e){e.pop="pop",e.push="push"})(ja||(ja={}));var ha;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ha||(ha={}));function Yg(e){if(!e)if(Vc){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),zg(e)}const Gg=/^[^#]+#/;function Xg(e,t){return e.replace(Gg,"#")+t}function Zg(e,t){const n=document.documentElement.getBoundingClientRect(),c=e.getBoundingClientRect();return{behavior:t.behavior,left:c.left-n.left-(t.left||0),top:c.top-n.top-(t.top||0)}}const $l=()=>({left:window.pageXOffset,top:window.pageYOffset});function Qg(e){let t;if("el"in e){const n=e.el,c=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?c?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=Zg(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function fo(e,t){return(history.state?history.state.position-t:-1)+e}const qi=new Map;function Jg(e,t){qi.set(e,t)}function ey(e){const t=qi.get(e);return qi.delete(e),t}let ty=()=>location.protocol+"//"+location.host;function Ad(e,t){const{pathname:n,search:c,hash:a}=t,l=e.indexOf("#");if(l>-1){let s=a.includes(e.slice(l))?e.slice(l).length:1,r=a.slice(s);return r[0]!=="/"&&(r="/"+r),oo(r,"")}return oo(n,e)+c+a}function ny(e,t,n,c){let a=[],l=[],i=null;const s=({state:f})=>{const m=Ad(e,location),h=n.value,g=t.value;let S=0;if(f){if(n.value=m,t.value=f,i&&i===h){i=null;return}S=g?f.position-g.position:0}else c(m);a.forEach(b=>{b(n.value,h,{delta:S,type:ja.pop,direction:S?S>0?ha.forward:ha.back:ha.unknown})})};function r(){i=n.value}function u(f){a.push(f);const m=()=>{const h=a.indexOf(f);h>-1&&a.splice(h,1)};return l.push(m),m}function o(){const{history:f}=window;f.state&&f.replaceState(Te({},f.state,{scroll:$l()}),"")}function d(){for(const f of l)f();l=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",o)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",o),{pauseListeners:r,listen:u,destroy:d}}function vo(e,t,n,c=!1,a=!1){return{back:e,current:t,forward:n,replaced:c,position:window.history.length,scroll:a?$l():null}}function cy(e){const{history:t,location:n}=window,c={value:Ad(e,n)},a={value:t.state};a.value||l(c.value,{back:null,current:c.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(r,u,o){const d=e.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+r:ty()+e+r;try{t[o?"replaceState":"pushState"](u,"",f),a.value=u}catch(m){console.error(m),n[o?"replace":"assign"](f)}}function i(r,u){const o=Te({},t.state,vo(a.value.back,r,a.value.forward,!0),u,{position:a.value.position});l(r,o,!0),c.value=r}function s(r,u){const o=Te({},a.value,t.state,{forward:r,scroll:$l()});l(o.current,o,!0);const d=Te({},vo(c.value,r,null),{position:o.position+1},u);l(r,d,!1),c.value=r}return{location:c,state:a,push:s,replace:i}}function ay(e){e=Yg(e);const t=cy(e),n=ny(e,t.state,t.location,t.replace);function c(l,i=!0){i||n.pauseListeners(),history.go(l)}const a=Te({location:"",base:e,go:c,createHref:Xg.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function ly(e){return typeof e=="string"||e&&typeof e=="object"}function qd(e){return typeof e=="string"||typeof e=="symbol"}const qn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Pd=Symbol("");var mo;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(mo||(mo={}));function Oc(e,t){return Te(new Error,{type:e,[Pd]:!0},t)}function dn(e,t){return e instanceof Error&&Pd in e&&(t==null||!!(e.type&t))}const ho="[^/]+?",iy={sensitive:!1,strict:!1,start:!0,end:!0},sy=/[.+*?^${}()[\]/\\]/g;function ry(e,t){const n=Te({},iy,t),c=[];let a=n.start?"^":"";const l=[];for(const u of e){const o=u.length?[]:[90];n.strict&&!u.length&&(a+="/");for(let d=0;d<u.length;d++){const f=u[d];let m=40+(n.sensitive?.25:0);if(f.type===0)d||(a+="/"),a+=f.value.replace(sy,"\\$&"),m+=40;else if(f.type===1){const{value:h,repeatable:g,optional:S,regexp:b}=f;l.push({name:h,repeatable:g,optional:S});const C=b||ho;if(C!==ho){m+=10;try{new RegExp(`(${C})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${h}" (${C}): `+P.message)}}let p=g?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;d||(p=S&&u.length<2?`(?:/${p})`:"/"+p),S&&(p+="?"),a+=p,m+=20,S&&(m+=-8),g&&(m+=-20),C===".*"&&(m+=-50)}o.push(m)}c.push(o)}if(n.strict&&n.end){const u=c.length-1;c[u][c[u].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const i=new RegExp(a,n.sensitive?"":"i");function s(u){const o=u.match(i),d={};if(!o)return null;for(let f=1;f<o.length;f++){const m=o[f]||"",h=l[f-1];d[h.name]=m&&h.repeatable?m.split("/"):m}return d}function r(u){let o="",d=!1;for(const f of e){(!d||!o.endsWith("/"))&&(o+="/"),d=!1;for(const m of f)if(m.type===0)o+=m.value;else if(m.type===1){const{value:h,repeatable:g,optional:S}=m,b=h in u?u[h]:"";if(Wt(b)&&!g)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const C=Wt(b)?b.join("/"):b;if(!C)if(S)f.length<2&&(o.endsWith("/")?o=o.slice(0,-1):d=!0);else throw new Error(`Missing required param "${h}"`);o+=C}}return o||"/"}return{re:i,score:c,keys:l,parse:s,stringify:r}}function oy(e,t){let n=0;for(;n<e.length&&n<t.length;){const c=t[n]-e[n];if(c)return c;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function uy(e,t){let n=0;const c=e.score,a=t.score;for(;n<c.length&&n<a.length;){const l=oy(c[n],a[n]);if(l)return l;n++}if(Math.abs(a.length-c.length)===1){if(go(c))return 1;if(go(a))return-1}return a.length-c.length}function go(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const dy={type:0,value:""},fy=/[a-zA-Z0-9_]/;function vy(e){if(!e)return[[]];if(e==="/")return[[dy]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,c=n;const a=[];let l;function i(){l&&a.push(l),l=[]}let s=0,r,u="",o="";function d(){u&&(n===0?l.push({type:0,value:u}):n===1||n===2||n===3?(l.length>1&&(r==="*"||r==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:u,regexp:o,repeatable:r==="*"||r==="+",optional:r==="*"||r==="?"})):t("Invalid state to consume buffer"),u="")}function f(){u+=r}for(;s<e.length;){if(r=e[s++],r==="\\"&&n!==2){c=n,n=4;continue}switch(n){case 0:r==="/"?(u&&d(),i()):r===":"?(d(),n=1):f();break;case 4:f(),n=c;break;case 1:r==="("?n=2:fy.test(r)?f():(d(),n=0,r!=="*"&&r!=="?"&&r!=="+"&&s--);break;case 2:r===")"?o[o.length-1]=="\\"?o=o.slice(0,-1)+r:n=3:o+=r;break;case 3:d(),n=0,r!=="*"&&r!=="?"&&r!=="+"&&s--,o="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),d(),i(),a}function my(e,t,n){const c=ry(vy(e.path),n),a=Te(c,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function hy(e,t){const n=[],c=new Map;t=po({strict:!1,end:!0,sensitive:!1},t);function a(o){return c.get(o)}function l(o,d,f){const m=!f,h=gy(o);h.aliasOf=f&&f.record;const g=po(t,o),S=[h];if("alias"in o){const p=typeof o.alias=="string"?[o.alias]:o.alias;for(const P of p)S.push(Te({},h,{components:f?f.record.components:h.components,path:P,aliasOf:f?f.record:h}))}let b,C;for(const p of S){const{path:P}=p;if(d&&P[0]!=="/"){const j=d.record.path,E=j[j.length-1]==="/"?"":"/";p.path=d.record.path+(P&&E+P)}if(b=my(p,d,g),f?f.alias.push(b):(C=C||b,C!==b&&C.alias.push(b),m&&o.name&&!bo(b)&&i(o.name)),h.children){const j=h.children;for(let E=0;E<j.length;E++)l(j[E],b,f&&f.children[E])}f=f||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&r(b)}return C?()=>{i(C)}:ma}function i(o){if(qd(o)){const d=c.get(o);d&&(c.delete(o),n.splice(n.indexOf(d),1),d.children.forEach(i),d.alias.forEach(i))}else{const d=n.indexOf(o);d>-1&&(n.splice(d,1),o.record.name&&c.delete(o.record.name),o.children.forEach(i),o.alias.forEach(i))}}function s(){return n}function r(o){let d=0;for(;d<n.length&&uy(o,n[d])>=0&&(o.record.path!==n[d].record.path||!Td(o,n[d]));)d++;n.splice(d,0,o),o.record.name&&!bo(o)&&c.set(o.record.name,o)}function u(o,d){let f,m={},h,g;if("name"in o&&o.name){if(f=c.get(o.name),!f)throw Oc(1,{location:o});g=f.record.name,m=Te(yo(d.params,f.keys.filter(C=>!C.optional).map(C=>C.name)),o.params&&yo(o.params,f.keys.map(C=>C.name))),h=f.stringify(m)}else if("path"in o)h=o.path,f=n.find(C=>C.re.test(h)),f&&(m=f.parse(h),g=f.record.name);else{if(f=d.name?c.get(d.name):n.find(C=>C.re.test(d.path)),!f)throw Oc(1,{location:o,currentLocation:d});g=f.record.name,m=Te({},d.params,o.params),h=f.stringify(m)}const S=[];let b=f;for(;b;)S.unshift(b.record),b=b.parent;return{name:g,path:h,params:m,matched:S,meta:by(S)}}return e.forEach(o=>l(o)),{addRoute:l,resolve:u,removeRoute:i,getRoutes:s,getRecordMatcher:a}}function yo(e,t){const n={};for(const c of t)c in e&&(n[c]=e[c]);return n}function gy(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:yy(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function yy(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const c in e.components)t[c]=typeof n=="boolean"?n:n[c];return t}function bo(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function by(e){return e.reduce((t,n)=>Te(t,n.meta),{})}function po(e,t){const n={};for(const c in e)n[c]=c in t?t[c]:e[c];return n}function Td(e,t){return t.children.some(n=>n===e||Td(e,n))}const $d=/#/g,py=/&/g,ky=/\//g,Sy=/=/g,Cy=/\?/g,Md=/\+/g,_y=/%5B/g,xy=/%5D/g,Bd=/%5E/g,wy=/%60/g,Rd=/%7B/g,jy=/%7C/g,Od=/%7D/g,Vy=/%20/g;function Ds(e){return encodeURI(""+e).replace(jy,"|").replace(_y,"[").replace(xy,"]")}function Iy(e){return Ds(e).replace(Rd,"{").replace(Od,"}").replace(Bd,"^")}function Pi(e){return Ds(e).replace(Md,"%2B").replace(Vy,"+").replace($d,"%23").replace(py,"%26").replace(wy,"`").replace(Rd,"{").replace(Od,"}").replace(Bd,"^")}function Ey(e){return Pi(e).replace(Sy,"%3D")}function Ay(e){return Ds(e).replace($d,"%23").replace(Cy,"%3F")}function qy(e){return e==null?"":Ay(e).replace(ky,"%2F")}function ml(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Py(e){const t={};if(e===""||e==="?")return t;const c=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<c.length;++a){const l=c[a].replace(Md," "),i=l.indexOf("="),s=ml(i<0?l:l.slice(0,i)),r=i<0?null:ml(l.slice(i+1));if(s in t){let u=t[s];Wt(u)||(u=t[s]=[u]),u.push(r)}else t[s]=r}return t}function ko(e){let t="";for(let n in e){const c=e[n];if(n=Ey(n),c==null){c!==void 0&&(t+=(t.length?"&":"")+n);continue}(Wt(c)?c.map(l=>l&&Pi(l)):[c&&Pi(c)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+n,l!=null&&(t+="="+l))})}return t}function Ty(e){const t={};for(const n in e){const c=e[n];c!==void 0&&(t[n]=Wt(c)?c.map(a=>a==null?null:""+a):c==null?c:""+c)}return t}const $y=Symbol(""),So=Symbol(""),zs=Symbol(""),Ld=Symbol(""),Ti=Symbol("");function ia(){let e=[];function t(c){return e.push(c),()=>{const a=e.indexOf(c);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function $n(e,t,n,c,a){const l=c&&(c.enterCallbacks[a]=c.enterCallbacks[a]||[]);return()=>new Promise((i,s)=>{const r=d=>{d===!1?s(Oc(4,{from:n,to:t})):d instanceof Error?s(d):ly(d)?s(Oc(2,{from:t,to:d})):(l&&c.enterCallbacks[a]===l&&typeof d=="function"&&l.push(d),i())},u=e.call(c&&c.instances[a],t,n,r);let o=Promise.resolve(u);e.length<3&&(o=o.then(r)),o.catch(d=>s(d))})}function ii(e,t,n,c){const a=[];for(const l of e)for(const i in l.components){let s=l.components[i];if(!(t!=="beforeRouteEnter"&&!l.instances[i]))if(My(s)){const u=(s.__vccOpts||s)[t];u&&a.push($n(u,n,c,l,i))}else{let r=s();a.push(()=>r.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${l.path}"`));const o=Ng(u)?u.default:u;l.components[i]=o;const f=(o.__vccOpts||o)[t];return f&&$n(f,n,c,l,i)()}))}}return a}function My(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Co(e){const t=Ie(zs),n=Ie(Ld),c=y(()=>t.resolve(dt(e.to))),a=y(()=>{const{matched:r}=c.value,{length:u}=r,o=r[u-1],d=n.matched;if(!o||!d.length)return-1;const f=d.findIndex(Rc.bind(null,o));if(f>-1)return f;const m=_o(r[u-2]);return u>1&&_o(o)===m&&d[d.length-1].path!==m?d.findIndex(Rc.bind(null,r[u-2])):f}),l=y(()=>a.value>-1&&Ly(n.params,c.value.params)),i=y(()=>a.value>-1&&a.value===n.matched.length-1&&Ed(n.params,c.value.params));function s(r={}){return Oy(r)?t[dt(e.replace)?"replace":"push"](dt(e.to)).catch(ma):Promise.resolve()}return{route:c,href:y(()=>c.value.href),isActive:l,isExactActive:i,navigate:s}}const By=$s({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Co,setup(e,{slots:t}){const n=it(Co(e)),{options:c}=Ie(zs),a=y(()=>({[xo(e.activeClass,c.linkActiveClass,"router-link-active")]:n.isActive,[xo(e.exactActiveClass,c.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&t.default(n);return e.custom?l:rn("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},l)}}}),Ry=By;function Oy(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ly(e,t){for(const n in t){const c=t[n],a=e[n];if(typeof c=="string"){if(c!==a)return!1}else if(!Wt(a)||a.length!==c.length||c.some((l,i)=>l!==a[i]))return!1}return!0}function _o(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const xo=(e,t,n)=>e??t??n,Fy=$s({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const c=Ie(Ti),a=y(()=>e.route||c.value),l=Ie(So,0),i=y(()=>{let u=dt(l);const{matched:o}=a.value;let d;for(;(d=o[u])&&!d.components;)u++;return u}),s=y(()=>a.value.matched[i.value]);Ke(So,y(()=>i.value+1)),Ke($y,s),Ke(Ti,a);const r=$();return ae(()=>[r.value,s.value,e.name],([u,o,d],[f,m,h])=>{o&&(o.instances[d]=u,m&&m!==o&&u&&u===f&&(o.leaveGuards.size||(o.leaveGuards=m.leaveGuards),o.updateGuards.size||(o.updateGuards=m.updateGuards))),u&&o&&(!m||!Rc(o,m)||!f)&&(o.enterCallbacks[d]||[]).forEach(g=>g(u))},{flush:"post"}),()=>{const u=a.value,o=e.name,d=s.value,f=d&&d.components[o];if(!f)return wo(n.default,{Component:f,route:u});const m=d.props[o],h=m?m===!0?u.params:typeof m=="function"?m(u):m:null,S=rn(f,Te({},h,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(d.instances[o]=null)},ref:r}));return wo(n.default,{Component:S,route:u})||S}}});function wo(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Ny=Fy;function Dy(e){const t=hy(e.routes,e),n=e.parseQuery||Py,c=e.stringifyQuery||ko,a=e.history,l=ia(),i=ia(),s=ia(),r=Is(qn);let u=qn;Vc&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const o=ai.bind(null,B=>""+B),d=ai.bind(null,qy),f=ai.bind(null,ml);function m(B,T){let O,re;return qd(B)?(O=t.getRecordMatcher(B),re=T):re=B,t.addRoute(re,O)}function h(B){const T=t.getRecordMatcher(B);T&&t.removeRoute(T)}function g(){return t.getRoutes().map(B=>B.record)}function S(B){return!!t.getRecordMatcher(B)}function b(B,T){if(T=Te({},T||r.value),typeof B=="string"){const _=li(n,B,T.path),q=t.resolve({path:_.path},T),L=a.createHref(_.fullPath);return Te(_,q,{params:f(q.params),hash:ml(_.hash),redirectedFrom:void 0,href:L})}let O;if("path"in B)O=Te({},B,{path:li(n,B.path,T.path).path});else{const _=Te({},B.params);for(const q in _)_[q]==null&&delete _[q];O=Te({},B,{params:d(B.params)}),T.params=d(T.params)}const re=t.resolve(O,T),oe=B.hash||"";re.params=o(f(re.params));const je=Hg(c,Te({},B,{hash:Iy(oe),path:re.path})),ve=a.createHref(je);return Te({fullPath:je,hash:oe,query:c===ko?Ty(B.query):B.query||{}},re,{redirectedFrom:void 0,href:ve})}function C(B){return typeof B=="string"?li(n,B,r.value.path):Te({},B)}function p(B,T){if(u!==B)return Oc(8,{from:T,to:B})}function P(B){return A(B)}function j(B){return P(Te(C(B),{replace:!0}))}function E(B){const T=B.matched[B.matched.length-1];if(T&&T.redirect){const{redirect:O}=T;let re=typeof O=="function"?O(B):O;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=C(re):{path:re},re.params={}),Te({query:B.query,hash:B.hash,params:"path"in re?{}:B.params},re)}}function A(B,T){const O=u=b(B),re=r.value,oe=B.state,je=B.force,ve=B.replace===!0,_=E(O);if(_)return A(Te(C(_),{state:typeof _=="object"?Te({},oe,_.state):oe,force:je,replace:ve}),T||O);const q=O;q.redirectedFrom=T;let L;return!je&&Ug(c,re,O)&&(L=Oc(16,{to:q,from:re}),R(re,re,!0,!1)),(L?Promise.resolve(L):x(q,re)).catch(U=>dn(U)?dn(U,2)?U:J(U):H(U,q,re)).then(U=>{if(U){if(dn(U,2))return A(Te({replace:ve},C(U.to),{state:typeof U.to=="object"?Te({},oe,U.to.state):oe,force:je}),T||q)}else U=I(q,re,!0,ve,oe);return V(q,re,U),U})}function k(B,T){const O=p(B,T);return O?Promise.reject(O):Promise.resolve()}function x(B,T){let O;const[re,oe,je]=zy(B,T);O=ii(re.reverse(),"beforeRouteLeave",B,T);for(const _ of re)_.leaveGuards.forEach(q=>{O.push($n(q,B,T))});const ve=k.bind(null,B,T);return O.push(ve),Sc(O).then(()=>{O=[];for(const _ of l.list())O.push($n(_,B,T));return O.push(ve),Sc(O)}).then(()=>{O=ii(oe,"beforeRouteUpdate",B,T);for(const _ of oe)_.updateGuards.forEach(q=>{O.push($n(q,B,T))});return O.push(ve),Sc(O)}).then(()=>{O=[];for(const _ of B.matched)if(_.beforeEnter&&!T.matched.includes(_))if(Wt(_.beforeEnter))for(const q of _.beforeEnter)O.push($n(q,B,T));else O.push($n(_.beforeEnter,B,T));return O.push(ve),Sc(O)}).then(()=>(B.matched.forEach(_=>_.enterCallbacks={}),O=ii(je,"beforeRouteEnter",B,T),O.push(ve),Sc(O))).then(()=>{O=[];for(const _ of i.list())O.push($n(_,B,T));return O.push(ve),Sc(O)}).catch(_=>dn(_,8)?_:Promise.reject(_))}function V(B,T,O){for(const re of s.list())re(B,T,O)}function I(B,T,O,re,oe){const je=p(B,T);if(je)return je;const ve=T===qn,_=Vc?history.state:{};O&&(re||ve?a.replace(B.fullPath,Te({scroll:ve&&_&&_.scroll},oe)):a.push(B.fullPath,oe)),r.value=B,R(B,T,O,ve),J()}let w;function M(){w||(w=a.listen((B,T,O)=>{if(!ue.listening)return;const re=b(B),oe=E(re);if(oe){A(Te(oe,{replace:!0}),re).catch(ma);return}u=re;const je=r.value;Vc&&Jg(fo(je.fullPath,O.delta),$l()),x(re,je).catch(ve=>dn(ve,12)?ve:dn(ve,2)?(A(ve.to,re).then(_=>{dn(_,20)&&!O.delta&&O.type===ja.pop&&a.go(-1,!1)}).catch(ma),Promise.reject()):(O.delta&&a.go(-O.delta,!1),H(ve,re,je))).then(ve=>{ve=ve||I(re,je,!1),ve&&(O.delta&&!dn(ve,8)?a.go(-O.delta,!1):O.type===ja.pop&&dn(ve,20)&&a.go(-1,!1)),V(re,je,ve)}).catch(ma)}))}let N=ia(),Z=ia(),F;function H(B,T,O){J(B);const re=Z.list();return re.length?re.forEach(oe=>oe(B,T,O)):console.error(B),Promise.reject(B)}function D(){return F&&r.value!==qn?Promise.resolve():new Promise((B,T)=>{N.add([B,T])})}function J(B){return F||(F=!B,M(),N.list().forEach(([T,O])=>B?O(B):T()),N.reset()),B}function R(B,T,O,re){const{scrollBehavior:oe}=e;if(!Vc||!oe)return Promise.resolve();const je=!O&&ey(fo(B.fullPath,0))||(re||!O)&&history.state&&history.state.scroll||null;return Oe().then(()=>oe(B,T,je)).then(ve=>ve&&Qg(ve)).catch(ve=>H(ve,B,T))}const K=B=>a.go(B);let z;const fe=new Set,ue={currentRoute:r,listening:!0,addRoute:m,removeRoute:h,hasRoute:S,getRoutes:g,resolve:b,options:e,push:P,replace:j,go:K,back:()=>K(-1),forward:()=>K(1),beforeEach:l.add,beforeResolve:i.add,afterEach:s.add,onError:Z.add,isReady:D,install(B){const T=this;B.component("RouterLink",Ry),B.component("RouterView",Ny),B.config.globalProperties.$router=T,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>dt(r)}),Vc&&!z&&r.value===qn&&(z=!0,P(a.location).catch(oe=>{}));const O={};for(const oe in qn)O[oe]=y(()=>r.value[oe]);B.provide(zs,T),B.provide(Ld,it(O)),B.provide(Ti,r);const re=B.unmount;fe.add(B),B.unmount=function(){fe.delete(B),fe.size<1&&(u=qn,w&&w(),w=null,r.value=qn,z=!1,F=!1),re()}}};return ue}function Sc(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function zy(e,t){const n=[],c=[],a=[],l=Math.max(t.matched.length,e.matched.length);for(let i=0;i<l;i++){const s=t.matched[i];s&&(e.matched.find(u=>Rc(u,s))?c.push(s):n.push(s));const r=e.matched[i];r&&(t.matched.find(u=>Rc(u,r))||a.push(r))}return[n,c,a]}const zn=(e,t)=>{const n=e.__vccOpts||e;for(const[c,a]of t)n[c]=a;return n},Hy={};function Uy(e,t,n,c,a,l){const i=Le("RouterView");return Be(),hn(i)}const Wy=zn(Hy,[["render",Uy]]),Ky={},Yy=et("h1",null,"司法試験過去問集",-1);function Gy(e,t){const n=Le("RouterLink");return Be(),ct("main",null,[Yy,v(n,{to:"/tantou"},{default:Ae(()=>[lt("短答")]),_:1})])}const Xy=zn(Ky,[["render",Gy]]),il=[{year:"2022",num:"1",subject:"ken",q:`憲法が保障する基本的人権の制約理由に関する次のアからウまでの各記述について、最高裁判所の判例の趣旨に照らして、正しいものには○、誤っているものには×を付した場合の組合せを、後記１から８までの中から選びなさい。
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
オ．甲が乙の指輪を奪った行為については，その時点で乙は既に死んでいるから，甲には，窃盗罪ではなく，占有離脱物横領罪が成立する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",a:"21222"}];function bn(e){return Array.isArray?Array.isArray(e):Dd(e)==="[object Array]"}const Zy=1/0;function Qy(e){if(typeof e=="string")return e;let t=e+"";return t=="0"&&1/e==-Zy?"-0":t}function Jy(e){return e==null?"":Qy(e)}function nn(e){return typeof e=="string"}function Fd(e){return typeof e=="number"}function e1(e){return e===!0||e===!1||t1(e)&&Dd(e)=="[object Boolean]"}function Nd(e){return typeof e=="object"}function t1(e){return Nd(e)&&e!==null}function wt(e){return e!=null}function si(e){return!e.trim().length}function Dd(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const n1="Incorrect 'index' type",c1=e=>`Invalid value for key ${e}`,a1=e=>`Pattern length exceeds max of ${e}.`,l1=e=>`Missing ${e} property in key`,i1=e=>`Property 'weight' in key '${e}' must be a positive integer`,jo=Object.prototype.hasOwnProperty;class s1{constructor(t){this._keys=[],this._keyMap={};let n=0;t.forEach(c=>{let a=zd(c);n+=a.weight,this._keys.push(a),this._keyMap[a.id]=a,n+=a.weight}),this._keys.forEach(c=>{c.weight/=n})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function zd(e){let t=null,n=null,c=null,a=1,l=null;if(nn(e)||bn(e))c=e,t=Vo(e),n=$i(e);else{if(!jo.call(e,"name"))throw new Error(l1("name"));const i=e.name;if(c=i,jo.call(e,"weight")&&(a=e.weight,a<=0))throw new Error(i1(i));t=Vo(i),n=$i(i),l=e.getFn}return{path:t,id:n,weight:a,src:c,getFn:l}}function Vo(e){return bn(e)?e:e.split(".")}function $i(e){return bn(e)?e.join("."):e}function r1(e,t){let n=[],c=!1;const a=(l,i,s)=>{if(wt(l))if(!i[s])n.push(l);else{let r=i[s];const u=l[r];if(!wt(u))return;if(s===i.length-1&&(nn(u)||Fd(u)||e1(u)))n.push(Jy(u));else if(bn(u)){c=!0;for(let o=0,d=u.length;o<d;o+=1)a(u[o],i,s+1)}else i.length&&a(u,i,s+1)}};return a(e,nn(t)?t.split("."):t,0),c?n:n[0]}const o1={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},u1={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},d1={location:0,threshold:.6,distance:100},f1={useExtendedSearch:!1,getFn:r1,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var ke={...u1,...o1,...d1,...f1};const v1=/[^ ]+/g;function m1(e=1,t=3){const n=new Map,c=Math.pow(10,t);return{get(a){const l=a.match(v1).length;if(n.has(l))return n.get(l);const i=1/Math.pow(l,.5*e),s=parseFloat(Math.round(i*c)/c);return n.set(l,s),s},clear(){n.clear()}}}class Hs{constructor({getFn:t=ke.getFn,fieldNormWeight:n=ke.fieldNormWeight}={}){this.norm=m1(n,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((n,c)=>{this._keysMap[n.id]=c})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,nn(this.docs[0])?this.docs.forEach((t,n)=>{this._addString(t,n)}):this.docs.forEach((t,n)=>{this._addObject(t,n)}),this.norm.clear())}add(t){const n=this.size();nn(t)?this._addString(t,n):this._addObject(t,n)}removeAt(t){this.records.splice(t,1);for(let n=t,c=this.size();n<c;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(t,n){return t[this._keysMap[n]]}size(){return this.records.length}_addString(t,n){if(!wt(t)||si(t))return;let c={v:t,i:n,n:this.norm.get(t)};this.records.push(c)}_addObject(t,n){let c={i:n,$:{}};this.keys.forEach((a,l)=>{let i=a.getFn?a.getFn(t):this.getFn(t,a.path);if(wt(i)){if(bn(i)){let s=[];const r=[{nestedArrIndex:-1,value:i}];for(;r.length;){const{nestedArrIndex:u,value:o}=r.pop();if(wt(o))if(nn(o)&&!si(o)){let d={v:o,i:u,n:this.norm.get(o)};s.push(d)}else bn(o)&&o.forEach((d,f)=>{r.push({nestedArrIndex:f,value:d})})}c.$[l]=s}else if(nn(i)&&!si(i)){let s={v:i,n:this.norm.get(i)};c.$[l]=s}}}),this.records.push(c)}toJSON(){return{keys:this.keys,records:this.records}}}function Hd(e,t,{getFn:n=ke.getFn,fieldNormWeight:c=ke.fieldNormWeight}={}){const a=new Hs({getFn:n,fieldNormWeight:c});return a.setKeys(e.map(zd)),a.setSources(t),a.create(),a}function h1(e,{getFn:t=ke.getFn,fieldNormWeight:n=ke.fieldNormWeight}={}){const{keys:c,records:a}=e,l=new Hs({getFn:t,fieldNormWeight:n});return l.setKeys(c),l.setIndexRecords(a),l}function Xa(e,{errors:t=0,currentLocation:n=0,expectedLocation:c=0,distance:a=ke.distance,ignoreLocation:l=ke.ignoreLocation}={}){const i=t/e.length;if(l)return i;const s=Math.abs(c-n);return a?i+s/a:s?1:i}function g1(e=[],t=ke.minMatchCharLength){let n=[],c=-1,a=-1,l=0;for(let i=e.length;l<i;l+=1){let s=e[l];s&&c===-1?c=l:!s&&c!==-1&&(a=l-1,a-c+1>=t&&n.push([c,a]),c=-1)}return e[l-1]&&l-c>=t&&n.push([c,l-1]),n}const ac=32;function y1(e,t,n,{location:c=ke.location,distance:a=ke.distance,threshold:l=ke.threshold,findAllMatches:i=ke.findAllMatches,minMatchCharLength:s=ke.minMatchCharLength,includeMatches:r=ke.includeMatches,ignoreLocation:u=ke.ignoreLocation}={}){if(t.length>ac)throw new Error(a1(ac));const o=t.length,d=e.length,f=Math.max(0,Math.min(c,d));let m=l,h=f;const g=s>1||r,S=g?Array(d):[];let b;for(;(b=e.indexOf(t,h))>-1;){let A=Xa(t,{currentLocation:b,expectedLocation:f,distance:a,ignoreLocation:u});if(m=Math.min(A,m),h=b+o,g){let k=0;for(;k<o;)S[b+k]=1,k+=1}}h=-1;let C=[],p=1,P=o+d;const j=1<<o-1;for(let A=0;A<o;A+=1){let k=0,x=P;for(;k<x;)Xa(t,{errors:A,currentLocation:f+x,expectedLocation:f,distance:a,ignoreLocation:u})<=m?k=x:P=x,x=Math.floor((P-k)/2+k);P=x;let V=Math.max(1,f-x+1),I=i?d:Math.min(f+x,d)+o,w=Array(I+2);w[I+1]=(1<<A)-1;for(let N=I;N>=V;N-=1){let Z=N-1,F=n[e.charAt(Z)];if(g&&(S[Z]=+!!F),w[N]=(w[N+1]<<1|1)&F,A&&(w[N]|=(C[N+1]|C[N])<<1|1|C[N+1]),w[N]&j&&(p=Xa(t,{errors:A,currentLocation:Z,expectedLocation:f,distance:a,ignoreLocation:u}),p<=m)){if(m=p,h=Z,h<=f)break;V=Math.max(1,2*f-h)}}if(Xa(t,{errors:A+1,currentLocation:f,expectedLocation:f,distance:a,ignoreLocation:u})>m)break;C=w}const E={isMatch:h>=0,score:Math.max(.001,p)};if(g){const A=g1(S,s);A.length?r&&(E.indices=A):E.isMatch=!1}return E}function b1(e){let t={};for(let n=0,c=e.length;n<c;n+=1){const a=e.charAt(n);t[a]=(t[a]||0)|1<<c-n-1}return t}class Ud{constructor(t,{location:n=ke.location,threshold:c=ke.threshold,distance:a=ke.distance,includeMatches:l=ke.includeMatches,findAllMatches:i=ke.findAllMatches,minMatchCharLength:s=ke.minMatchCharLength,isCaseSensitive:r=ke.isCaseSensitive,ignoreLocation:u=ke.ignoreLocation}={}){if(this.options={location:n,threshold:c,distance:a,includeMatches:l,findAllMatches:i,minMatchCharLength:s,isCaseSensitive:r,ignoreLocation:u},this.pattern=r?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const o=(f,m)=>{this.chunks.push({pattern:f,alphabet:b1(f),startIndex:m})},d=this.pattern.length;if(d>ac){let f=0;const m=d%ac,h=d-m;for(;f<h;)o(this.pattern.substr(f,ac),f),f+=ac;if(m){const g=d-ac;o(this.pattern.substr(g),g)}}else o(this.pattern,0)}searchIn(t){const{isCaseSensitive:n,includeMatches:c}=this.options;if(n||(t=t.toLowerCase()),this.pattern===t){let h={isMatch:!0,score:0};return c&&(h.indices=[[0,t.length-1]]),h}const{location:a,distance:l,threshold:i,findAllMatches:s,minMatchCharLength:r,ignoreLocation:u}=this.options;let o=[],d=0,f=!1;this.chunks.forEach(({pattern:h,alphabet:g,startIndex:S})=>{const{isMatch:b,score:C,indices:p}=y1(t,h,g,{location:a+S,distance:l,threshold:i,findAllMatches:s,minMatchCharLength:r,includeMatches:c,ignoreLocation:u});b&&(f=!0),d+=C,b&&p&&(o=[...o,...p])});let m={isMatch:f,score:f?d/this.chunks.length:1};return f&&c&&(m.indices=o),m}}class Hn{constructor(t){this.pattern=t}static isMultiMatch(t){return Io(t,this.multiRegex)}static isSingleMatch(t){return Io(t,this.singleRegex)}search(){}}function Io(e,t){const n=e.match(t);return n?n[1]:null}class p1 extends Hn{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const n=t===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class k1 extends Hn{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const c=t.indexOf(this.pattern)===-1;return{isMatch:c,score:c?0:1,indices:[0,t.length-1]}}}class S1 extends Hn{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const n=t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class C1 extends Hn{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const n=!t.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class _1 extends Hn{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const n=t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class x1 extends Hn{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const n=!t.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class Wd extends Hn{constructor(t,{location:n=ke.location,threshold:c=ke.threshold,distance:a=ke.distance,includeMatches:l=ke.includeMatches,findAllMatches:i=ke.findAllMatches,minMatchCharLength:s=ke.minMatchCharLength,isCaseSensitive:r=ke.isCaseSensitive,ignoreLocation:u=ke.ignoreLocation}={}){super(t),this._bitapSearch=new Ud(t,{location:n,threshold:c,distance:a,includeMatches:l,findAllMatches:i,minMatchCharLength:s,isCaseSensitive:r,ignoreLocation:u})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class Kd extends Hn{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let n=0,c;const a=[],l=this.pattern.length;for(;(c=t.indexOf(this.pattern,n))>-1;)n=c+l,a.push([c,n-1]);const i=!!a.length;return{isMatch:i,score:i?0:1,indices:a}}}const Mi=[p1,Kd,S1,C1,x1,_1,k1,Wd],Eo=Mi.length,w1=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,j1="|";function V1(e,t={}){return e.split(j1).map(n=>{let c=n.trim().split(w1).filter(l=>l&&!!l.trim()),a=[];for(let l=0,i=c.length;l<i;l+=1){const s=c[l];let r=!1,u=-1;for(;!r&&++u<Eo;){const o=Mi[u];let d=o.isMultiMatch(s);d&&(a.push(new o(d,t)),r=!0)}if(!r)for(u=-1;++u<Eo;){const o=Mi[u];let d=o.isSingleMatch(s);if(d){a.push(new o(d,t));break}}}return a})}const I1=new Set([Wd.type,Kd.type]);class E1{constructor(t,{isCaseSensitive:n=ke.isCaseSensitive,includeMatches:c=ke.includeMatches,minMatchCharLength:a=ke.minMatchCharLength,ignoreLocation:l=ke.ignoreLocation,findAllMatches:i=ke.findAllMatches,location:s=ke.location,threshold:r=ke.threshold,distance:u=ke.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:c,minMatchCharLength:a,findAllMatches:i,ignoreLocation:l,location:s,threshold:r,distance:u},this.pattern=n?t:t.toLowerCase(),this.query=V1(this.pattern,this.options)}static condition(t,n){return n.useExtendedSearch}searchIn(t){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:c,isCaseSensitive:a}=this.options;t=a?t:t.toLowerCase();let l=0,i=[],s=0;for(let r=0,u=n.length;r<u;r+=1){const o=n[r];i.length=0,l=0;for(let d=0,f=o.length;d<f;d+=1){const m=o[d],{isMatch:h,indices:g,score:S}=m.search(t);if(h){if(l+=1,s+=S,c){const b=m.constructor.type;I1.has(b)?i=[...i,...g]:i.push(g)}}else{s=0,l=0,i.length=0;break}}if(l){let d={isMatch:!0,score:s/l};return c&&(d.indices=i),d}}return{isMatch:!1,score:1}}}const Bi=[];function A1(...e){Bi.push(...e)}function Ri(e,t){for(let n=0,c=Bi.length;n<c;n+=1){let a=Bi[n];if(a.condition(e,t))return new a(e,t)}return new Ud(e,t)}const hl={AND:"$and",OR:"$or"},Oi={PATH:"$path",PATTERN:"$val"},Li=e=>!!(e[hl.AND]||e[hl.OR]),q1=e=>!!e[Oi.PATH],P1=e=>!bn(e)&&Nd(e)&&!Li(e),Ao=e=>({[hl.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function Yd(e,t,{auto:n=!0}={}){const c=a=>{let l=Object.keys(a);const i=q1(a);if(!i&&l.length>1&&!Li(a))return c(Ao(a));if(P1(a)){const r=i?a[Oi.PATH]:l[0],u=i?a[Oi.PATTERN]:a[r];if(!nn(u))throw new Error(c1(r));const o={keyId:$i(r),pattern:u};return n&&(o.searcher=Ri(u,t)),o}let s={children:[],operator:l[0]};return l.forEach(r=>{const u=a[r];bn(u)&&u.forEach(o=>{s.children.push(c(o))})}),s};return Li(e)||(e=Ao(e)),c(e)}function T1(e,{ignoreFieldNorm:t=ke.ignoreFieldNorm}){e.forEach(n=>{let c=1;n.matches.forEach(({key:a,norm:l,score:i})=>{const s=a?a.weight:null;c*=Math.pow(i===0&&s?Number.EPSILON:i,(s||1)*(t?1:l))}),n.score=c})}function $1(e,t){const n=e.matches;t.matches=[],wt(n)&&n.forEach(c=>{if(!wt(c.indices)||!c.indices.length)return;const{indices:a,value:l}=c;let i={indices:a,value:l};c.key&&(i.key=c.key.src),c.idx>-1&&(i.refIndex=c.idx),t.matches.push(i)})}function M1(e,t){t.score=e.score}function B1(e,t,{includeMatches:n=ke.includeMatches,includeScore:c=ke.includeScore}={}){const a=[];return n&&a.push($1),c&&a.push(M1),e.map(l=>{const{idx:i}=l,s={item:t[i],refIndex:i};return a.length&&a.forEach(r=>{r(l,s)}),s})}class Uc{constructor(t,n={},c){this.options={...ke,...n},this.options.useExtendedSearch,this._keyStore=new s1(this.options.keys),this.setCollection(t,c)}setCollection(t,n){if(this._docs=t,n&&!(n instanceof Hs))throw new Error(n1);this._myIndex=n||Hd(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){wt(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const n=[];for(let c=0,a=this._docs.length;c<a;c+=1){const l=this._docs[c];t(l,c)&&(this.removeAt(c),c-=1,a-=1,n.push(l))}return n}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:n=-1}={}){const{includeMatches:c,includeScore:a,shouldSort:l,sortFn:i,ignoreFieldNorm:s}=this.options;let r=nn(t)?nn(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return T1(r,{ignoreFieldNorm:s}),l&&r.sort(i),Fd(n)&&n>-1&&(r=r.slice(0,n)),B1(r,this._docs,{includeMatches:c,includeScore:a})}_searchStringList(t){const n=Ri(t,this.options),{records:c}=this._myIndex,a=[];return c.forEach(({v:l,i,n:s})=>{if(!wt(l))return;const{isMatch:r,score:u,indices:o}=n.searchIn(l);r&&a.push({item:l,idx:i,matches:[{score:u,value:l,norm:s,indices:o}]})}),a}_searchLogical(t){const n=Yd(t,this.options),c=(s,r,u)=>{if(!s.children){const{keyId:d,searcher:f}=s,m=this._findMatches({key:this._keyStore.get(d),value:this._myIndex.getValueForItemAtKeyId(r,d),searcher:f});return m&&m.length?[{idx:u,item:r,matches:m}]:[]}const o=[];for(let d=0,f=s.children.length;d<f;d+=1){const m=s.children[d],h=c(m,r,u);if(h.length)o.push(...h);else if(s.operator===hl.AND)return[]}return o},a=this._myIndex.records,l={},i=[];return a.forEach(({$:s,i:r})=>{if(wt(s)){let u=c(n,s,r);u.length&&(l[r]||(l[r]={idx:r,item:s,matches:[]},i.push(l[r])),u.forEach(({matches:o})=>{l[r].matches.push(...o)}))}}),i}_searchObjectList(t){const n=Ri(t,this.options),{keys:c,records:a}=this._myIndex,l=[];return a.forEach(({$:i,i:s})=>{if(!wt(i))return;let r=[];c.forEach((u,o)=>{r.push(...this._findMatches({key:u,value:i[o],searcher:n}))}),r.length&&l.push({idx:s,item:i,matches:r})}),l}_findMatches({key:t,value:n,searcher:c}){if(!wt(n))return[];let a=[];if(bn(n))n.forEach(({v:l,i,n:s})=>{if(!wt(l))return;const{isMatch:r,score:u,indices:o}=c.searchIn(l);r&&a.push({score:u,key:t,value:l,idx:i,norm:s,indices:o})});else{const{v:l,n:i}=n,{isMatch:s,score:r,indices:u}=c.searchIn(l);s&&a.push({score:r,key:t,value:l,norm:i,indices:u})}return a}}Uc.version="6.6.2";Uc.createIndex=Hd;Uc.parseIndex=h1;Uc.config=ke;Uc.parseQuery=Yd;A1(E1);const R1={data(){return{word:"",results:[],test:"あいうえおかきくけこ",test2:"aaaaa",matches:[[2,2],[4,5],[7,9]]}},methods:{search(){var e={threshold:.3,includeMatches:!0,keys:["q","c1","c2","c3","c4","c5"]},t=new Uc(il,e);this.results=t.search(this.word)},highlight(e,t){console.log(t);const n=[];let c=0;for(let a=0;a<t.length;a++){let l=e.slice(c,t[a][0])+'<span style="font-weight:bold; background-color:yellow;">',i=e.slice(t[a][0],t[a][1]+1)+"</span>";if(n.push(l,i),c=t[a][1]+1,a==t.length-1){let s=e.slice(t[a][1]+1);n.push(s)}}return n.join("")},onClick(e){let t=this.$router.resolve({name:"tantou",params:{subject:e.subject,year:e.year,qNum:e.num}});window.open(t.href,"_blank")}}},O1=et("h1",null,"司法試験過去問集・検索",-1),L1=et("thead",null,[et("tr",null,[et("th",null," 科目 "),et("th",null," 年度 "),et("th",null," 問題番号 "),et("th",null," 問題 ")])],-1),F1=["onClick"],N1=["innerHTML"];function D1(e,t,n,c,a,l){const i=Le("v-text-field"),s=Le("v-table");return Be(),ct("main",null,[O1,v(i,{modelValue:a.word,"onUpdate:modelValue":[t[0]||(t[0]=r=>a.word=r),l.search],density:"compact",variant:"solo",label:"検索","append-inner-icon":"mdi-magnify","single-line":""},null,8,["modelValue","onUpdate:modelValue"]),v(s,null,{default:Ae(()=>[L1,et("tbody",null,[(Be(!0),ct(me,null,Mn(a.results,r=>(Be(),ct("tr",{key:r.refIndex,class:"tr-link",onClick:u=>l.onClick(r.item)},[et("td",null,Jt(r.item.subject),1),et("td",null,Jt(r.item.year),1),et("td",null,Jt(r.item.num),1),et("td",{innerHTML:l.highlight(r.item.q,r.matches[0].indices)},null,8,N1)],8,F1))),128))])]),_:1})])}const z1=zn(R1,[["render",D1]]),H1={data(){return{open:[],subjects:["ken","min","kei"],years:["2022","2021","2020","2019","2018"],cruds:[["Create","mdi-plus-outline"],["Read","mdi-file-outline"],["Update","mdi-update"],["Delete","mdi-delete"]]}},methods:{subjectFull(e){switch(e){case"ken":return"憲法";case"min":return"民法";case"kei":return"刑法"}}}},U1=et("h1",null,"司法試験過去問集・短答",-1);function W1(e,t,n,c,a,l){const i=Le("v-list-item"),s=Le("v-list-group"),r=Le("v-list");return Be(),ct("main",null,[U1,v(r,{opened:a.open,"onUpdate:opened":t[0]||(t[0]=u=>a.open=u)},{default:Ae(()=>[(Be(!0),ct(me,null,Mn(a.subjects,u=>(Be(),hn(s,{value:u},{activator:Ae(({props:o})=>[v(i,le(o,{title:l.subjectFull(u)}),null,16,["title"])]),default:Ae(()=>[(Be(!0),ct(me,null,Mn(a.years,o=>(Be(),hn(i,{title:o,to:"/tantou/"+u+"/"+o+"/1"},null,8,["title","to"]))),256))]),_:2},1032,["value"]))),256))]),_:1},8,["opened"])])}const K1=zn(H1,[["render",W1]]);const Y1={props:{datum:{},subjectFull:"",num:"",year:""},computed:{title(){return this.subjectFull+this.year+"年第"+this.num+"問"},filteredQ(){return this.datum.q.replace(/\n/g,`

`)}}};function G1(e,t,n,c,a,l){const i=Le("v-card-text"),s=Le("v-card");return Be(),hn(s,{title:l.title,variant:"outlined"},{default:Ae(()=>[v(i,{class:"q"},{default:Ae(()=>[lt(Jt(l.filteredQ),1)]),_:1})]),_:1},8,["title"])}const X1=zn(Y1,[["render",G1],["__scopeId","data-v-56f6fcd4"]]);const Z1={emits:["showAnswer"],props:{datum:{}},data(){return{toggle_multiple:[],toggle1:"",toggle2:"",toggle3:"",toggle4:"",toggle5:""}},computed:{filteredChoices(){return Object.keys(this.datum).filter(e=>e.startsWith("c")).filter(e=>this.datum[e]!="").map(e=>this.datum[e])}},methods:{hankaku2Zenkaku(e){return e.replace(/[０-９]/g,function(t){return String.fromCharCode(t.charCodeAt(0)-65248)})},getResult(e){let t="";typeof e=="object"?(t=Object.values(e).map(a=>a+1).reduce((a,l)=>a+String(l)).slice(0,this.datum.a.length),this.toggle_multiple=[],this.toggle1="",this.toggle2="",this.toggle3="",this.toggle4="",this.toggle5=""):t=e.substr(0,1);const n=this.hankaku2Zenkaku(t)==this.datum.a;this.$emit("showAnswer",n)},setToggle(e){return"toggle"+String(e)}}};function Q1(e,t,n,c,a,l){const i=Le("v-btn"),s=Le("v-item"),r=Le("v-col"),u=Le("v-row"),o=Le("v-container"),d=Le("v-item-group");return n.datum.a.length>2?(Be(),ct(me,{key:0},[(Be(!0),ct(me,null,Mn(n.datum.a.length,f=>(Be(),ct("div",null,[v(d,{modelValue:e.$data["toggle"+f],"onUpdate:modelValue":m=>e.$data["toggle"+f]=m,mandatory:"","selected-class":"bg-grey"},{default:Ae(()=>[v(o,null,{default:Ae(()=>[v(u,null,{default:Ae(()=>[(Be(),ct(me,null,Mn(2,m=>v(r,{cols:"1"},{default:Ae(()=>[v(s,null,{default:Ae(({selectedClass:h,toggle:g})=>[v(i,{class:$c(h),onClick:g},{default:Ae(()=>[lt(Jt(m),1)]),_:2},1032,["class","onClick"])]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue"])]))),256)),v(i,{onClick:t[0]||(t[0]=f=>l.getResult([a.toggle1,a.toggle2,a.toggle3,a.toggle4,a.toggle5]))},{default:Ae(()=>[lt("解答確認")]),_:1})],64)):n.datum.a.length==2?(Be(),ct(me,{key:1},[v(o,null,{default:Ae(()=>[v(d,{modelValue:a.toggle_multiple,"onUpdate:modelValue":t[1]||(t[1]=f=>a.toggle_multiple=f),multiple:"","selected-class":"bg-grey"},{default:Ae(()=>[(Be(!0),ct(me,null,Mn(l.filteredChoices,f=>(Be(),hn(s,null,{default:Ae(({selectedClass:m,toggle:h})=>[v(u,{align:"center"},{default:Ae(()=>[v(r,{cols:"1"},{default:Ae(()=>[v(i,{class:$c(m),onClick:h},{default:Ae(()=>[lt(Jt(f.substr(0,2)),1)]),_:2},1032,["class","onClick"])]),_:2},1024),v(r,{cols:"11",class:"choice"},{default:Ae(()=>[lt(Jt(f.substr(2)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1},8,["modelValue"])]),_:1}),v(i,{onClick:t[2]||(t[2]=f=>l.getResult(a.toggle_multiple))},{default:Ae(()=>[lt("解答確認")]),_:1})],64)):(Be(),hn(o,{key:2},{default:Ae(()=>[(Be(!0),ct(me,null,Mn(l.filteredChoices,f=>(Be(),hn(u,{align:"center"},{default:Ae(()=>[v(r,{cols:"1"},{default:Ae(()=>[v(i,{onClick:m=>l.getResult(f)},{default:Ae(()=>[lt(Jt(f.substr(0,2)),1)]),_:2},1032,["onClick"])]),_:2},1024),v(r,{cols:"11",class:"choice"},{default:Ae(()=>[lt(Jt(f.substr(2)),1)]),_:2},1024)]),_:2},1024))),256))]),_:1}))}const J1=zn(Z1,[["render",Q1],["__scopeId","data-v-800dbb2d"]]);const eb={props:{datum:{},show:Boolean,correct:Boolean}},tb={class:"result"},nb={key:0,style:{color:"red"}},cb={key:1,style:{color:"blue"}},ab={class:"answer"};function lb(e,t,n,c,a,l){return Be(),ct("div",{class:$c({hide:!n.show})},[et("div",tb,[n.correct?(Be(),ct("p",nb,"○　正解")):(Be(),ct("p",cb,"×　不正解"))]),et("p",ab,"正解："+Jt(n.datum.a),1)],2)}const ib=zn(eb,[["render",lb],["__scopeId","data-v-73dba6f6"]]),sb={components:{QuestionComponent:X1,ChoicesComponent:J1,ResultComponent:ib},data(){return{num:this.$route.params.qNum,subject:this.$route.params.subject,year:this.$route.params.year,subjectFull:"",datum:{},correct:!1,show:!1,questions:[]}},created(){switch(this.questions=this.range(1,il.filter(e=>e.subject==this.subject&&e.year==this.year).length),this.datum=il.filter(e=>e.subject==this.subject&&e.year==this.year&&e.num==this.num)[0],this.subject){case"ken":this.subjectFull="憲法";break;case"min":this.subjectFull="民法";break;case"kei":this.subjectFull="刑法";break}},computed:{breadcrumbs(){return[{text:"司法試験過去問集",disabled:!1,to:{name:"home"}},{text:"短答",disabled:!1,to:{name:"tantouTop"}},{text:this.subjectFull,disabled:!1,to:{name:"tantouTop"}},{text:this.year+"年",disabled:!1,to:{name:"tantou",params:{subject:this.subject,qNum:1}}},{text:"第"+this.num+"問",disabled:!1,to:{name:"tantou",params:{subject:this.subject,qNum:this.num}}}]}},beforeRouteUpdate(e,t,n){this.num=e.params.qNum,this.subject=e.params.subject,this.year=e.params.year,this.datum=il.filter(c=>c.subject==e.params.subject&&c.year==e.params.year&&c.num==e.params.qNum)[0],this.correct=!1,this.show=!1,window.scrollTo(0,0),n()},methods:{prevQ(){this.$router.push({name:"tantou",params:{qNum:Number(this.num)-1}})},nextQ(){this.$router.push({name:"tantou",params:{qNum:Number(this.num)+1}})},showAnswer(e){this.correct=e,this.show=!0,window.scrollBy(0,1e3)},range(e,t){let n=[];for(let c=e;c<=t;c++)n.push(c);return n}}},rb=et("h1",null,"司法試験過去問集・短答",-1);function ob(e,t,n,c,a,l){const i=Le("v-list-item"),s=Le("v-list"),r=Le("v-navigation-drawer"),u=Le("v-breadcrumbs"),o=Le("QuestionComponent"),d=Le("ChoicesComponent"),f=Le("ResultComponent"),m=Le("v-btn"),h=Le("v-main"),g=Le("v-layout");return Be(),hn(g,null,{default:Ae(()=>[v(r,{permanent:"",width:"150"},{default:Ae(()=>[v(s,{nav:""},{default:Ae(()=>[(Be(!0),ct(me,null,Mn(a.questions,S=>(Be(),hn(i,{title:"第"+S+"問",to:"/tantou/"+a.subject+"/"+a.year+"/"+S,ref_for:!0,ref:"question"},null,8,["title","to"]))),256))]),_:1})]),_:1}),v(h,null,{default:Ae(()=>[rb,v(u,{items:l.breadcrumbs,divider:">"},null,8,["items"]),v(o,{datum:a.datum,subjectFull:a.subjectFull,num:a.num,year:a.year},null,8,["datum","subjectFull","num","year"]),v(d,{datum:a.datum,onShowAnswer:l.showAnswer},null,8,["datum","onShowAnswer"]),v(f,{datum:a.datum,show:a.show,correct:a.correct},null,8,["datum","show","correct"]),v(m,{onClick:l.prevQ},{default:Ae(()=>[lt("前の問題")]),_:1},8,["onClick"]),lt("　"),v(m,{onClick:l.nextQ},{default:Ae(()=>[lt("次の問題")]),_:1},8,["onClick"])]),_:1})]),_:1})}const ub=zn(sb,[["render",ob]]),db=Dy({history:ay("/shihoushiken/"),routes:[{path:"/",name:"home",component:Xy},{path:"/search",name:"search",component:z1},{path:"/tantou",name:"tantouTop",component:K1},{path:"/tantou/:subject/:year/:qNum",name:"tantou",component:ub}]});function qo(e,t,n){fb(e,t),t.set(e,n)}function fb(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function vb(e,t,n){var c=Gd(e,t,"set");return mb(e,c,n),n}function mb(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}function Qn(e,t){var n=Gd(e,t,"get");return hb(e,n)}function Gd(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function hb(e,t){return t.get?t.get.call(e):t.value}function Xd(e,t,n){const c=t.length-1;if(c<0)return e===void 0?n:e;for(let a=0;a<c;a++){if(e==null)return n;e=e[t[a]]}return e==null||e[t[c]]===void 0?n:e[t[c]]}function vc(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime()||e!==Object(e)||t!==Object(t))return!1;const n=Object.keys(e);return n.length!==Object.keys(t).length?!1:n.every(c=>vc(e[c],t[c]))}function Fi(e,t,n){return e==null||!t||typeof t!="string"?n:e[t]!==void 0?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),Xd(e,t.split("."),n))}function tn(e,t,n){if(t==null)return e===void 0?n:e;if(e!==Object(e)){if(typeof t!="function")return n;const a=t(e,n);return typeof a>"u"?n:a}if(typeof t=="string")return Fi(e,t,n);if(Array.isArray(t))return Xd(e,t,n);if(typeof t!="function")return n;const c=t(e,n);return typeof c>"u"?n:c}function cn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:e},(n,c)=>t+c)}function se(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(e==null||e===""))return isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${t}`:void 0}function Ni(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function gb(e){return e==null?void 0:e.$el}const Po=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16}),Di=Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function Zd(e){return Object.keys(e)}function Wc(e,t,n){const c=Object.create(null),a=Object.create(null);for(const l in e)t.some(i=>i instanceof RegExp?i.test(l):i===l)&&!(n!=null&&n.some(i=>i===l))?c[l]=e[l]:a[l]=e[l];return[c,a]}function un(e,t){const n={...e};return t.forEach(c=>delete n[c]),n}function mc(e){return Wc(e,["class","style","id",/^data-/])}function Tt(e){return e==null?[]:Array.isArray(e)?e:[e]}function ft(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(t,Math.min(n,e))}function To(e){const t=e.toString().trim();return t.includes(".")?t.length-t.indexOf(".")-1:0}function $o(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return e+n.repeat(Math.max(0,t-e.length))}function yb(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let c=0;for(;c<e.length;)n.push(e.substr(c,t)),c+=t;return n}function Mo(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3;if(e<t)return`${e} B`;const n=t===1024?["Ki","Mi","Gi"]:["k","M","G"];let c=-1;for(;Math.abs(e)>=t&&c<n.length-1;)e/=t,++c;return`${e.toFixed(1)} ${n[c]}B`}function pn(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const c={};for(const a in e)c[a]=e[a];for(const a in t){const l=e[a],i=t[a];if(Ni(l)&&Ni(i)){c[a]=pn(l,i,n);continue}if(Array.isArray(l)&&Array.isArray(i)&&n){c[a]=n(l,i);continue}c[a]=i}return c}function On(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(On.cache.has(e))return On.cache.get(e);const t=e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return On.cache.set(e,t),t}On.cache=new Map;function ga(e,t){if(!t||typeof t!="object")return[];if(Array.isArray(t))return t.map(n=>ga(e,n)).flat(1);if(Array.isArray(t.children))return t.children.map(n=>ga(e,n)).flat(1);if(t.component){if(Object.getOwnPropertySymbols(t.component.provides).includes(e))return[t.component];if(t.component.subTree)return ga(e,t.component.subTree).flat(1)}return[]}var Za=new WeakMap,Cc=new WeakMap;class bb{constructor(t){qo(this,Za,{writable:!0,value:[]}),qo(this,Cc,{writable:!0,value:0}),this.size=t}push(t){Qn(this,Za)[Qn(this,Cc)]=t,vb(this,Cc,(Qn(this,Cc)+1)%this.size)}values(){return Qn(this,Za).slice(Qn(this,Cc)).concat(Qn(this,Za).slice(0,Qn(this,Cc)))}}function pb(e){return"touches"in e?{clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}:{clientX:e.clientX,clientY:e.clientY}}function Us(e){const t=it({}),n=y(e);return Kt(()=>{for(const c in n.value)t[c]=n.value[c]},{flush:"sync"}),Es(t)}function gl(e,t){return e.includes(t)}const kb=/^on[^a-z]/,Sb=e=>kb.test(e),an=()=>[Function,Array];function Bo(e,t){return t="on"+Cn(t),!!(e[t]||e[`${t}Once`]||e[`${t}Capture`]||e[`${t}OnceCapture`]||e[`${t}CaptureOnce`])}function Ws(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),c=1;c<t;c++)n[c-1]=arguments[c];if(Array.isArray(e))for(const a of e)a(...n);else typeof e=="function"&&e(...n)}function Ks(e){const t=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map(n=>`${n}:not([tabindex="-1"]):not([disabled])`).join(", ");return[...e.querySelectorAll(t)]}function Qd(e,t){var a,l,i;const n=Ks(e),c=n.indexOf(document.activeElement);if(!t)e.contains(document.activeElement)||(a=n[0])==null||a.focus();else if(t==="first")(l=n[0])==null||l.focus();else if(t==="last")(i=n.at(-1))==null||i.focus();else{let s,r=c;const u=t==="next"?1:-1;do r+=u,s=n[r];while((!s||s.offsetParent==null)&&r<n.length&&r>=0);s?s.focus():Qd(e,t==="next"?"first":"last")}}const Jd=["top","bottom"],Cb=["start","end","left","right"];function zi(e,t){let[n,c]=e.split(" ");return c||(c=gl(Jd,n)?"start":gl(Cb,n)?"top":"center"),{side:Hi(n,t),align:Hi(c,t)}}function Hi(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function ri(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function oi(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function Ro(e){return{side:e.align,align:e.side}}function Oo(e){return gl(Jd,e.side)?"y":"x"}class Tc{constructor(t){let{x:n,y:c,width:a,height:l}=t;this.x=n,this.y=c,this.width=a,this.height=l}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Lo(e,t){return{x:{before:Math.max(0,t.left-e.left),after:Math.max(0,e.right-t.right)},y:{before:Math.max(0,t.top-e.top),after:Math.max(0,e.bottom-t.bottom)}}}function Ys(e){const t=e.getBoundingClientRect(),n=getComputedStyle(e),c=n.transform;if(c){let a,l,i,s,r;if(c.startsWith("matrix3d("))a=c.slice(9,-1).split(/, /),l=+a[0],i=+a[5],s=+a[12],r=+a[13];else if(c.startsWith("matrix("))a=c.slice(7,-1).split(/, /),l=+a[0],i=+a[3],s=+a[4],r=+a[5];else return new Tc(t);const u=n.transformOrigin,o=t.x-s-(1-l)*parseFloat(u),d=t.y-r-(1-i)*parseFloat(u.slice(u.indexOf(" ")+1)),f=l?t.width/l:e.offsetWidth+1,m=i?t.height/i:e.offsetHeight+1;return new Tc({x:o,y:d,width:f,height:m})}else return new Tc(t)}function ic(e,t,n){if(typeof e.animate>"u")return{finished:Promise.resolve()};let c;try{c=e.animate(t,n)}catch{return{finished:Promise.resolve()}}return typeof c.finished>"u"&&(c.finished=new Promise(a=>{c.onfinish=()=>{a(c)}})),c}function ef(e,t,n){if(n&&(t={__isVue:!0,$parent:n,$options:t}),t){if(t.$_alreadyWarned=t.$_alreadyWarned||[],t.$_alreadyWarned.includes(e))return;t.$_alreadyWarned.push(e)}return`[Vuetify] ${e}`+(t?wb(t):"")}function Ln(e,t,n){const c=ef(e,t,n);c!=null&&console.warn(c)}function Ui(e,t,n){const c=ef(e,t,n);c!=null&&console.error(c)}const _b=/(?:^|[-_])(\w)/g,xb=e=>e.replace(_b,t=>t.toUpperCase()).replace(/[-_]/g,"");function ui(e,t){if(e.$root===e)return"<Root>";const n=typeof e=="function"&&e.cid!=null?e.options:e.__isVue?e.$options||e.constructor.options:e||{};let c=n.name||n._componentTag;const a=n.__file;if(!c&&a){const l=a.match(/([^/\\]+)\.vue$/);c=l==null?void 0:l[1]}return(c?`<${xb(c)}>`:"<Anonymous>")+(a&&t!==!1?` at ${a}`:"")}function wb(e){if(e.__isVue&&e.$parent){const t=[];let n=0;for(;e;){if(t.length>0){const c=t[t.length-1];if(c.constructor===e.constructor){n++,e=e.$parent;continue}else n>0&&(t[t.length-1]=[c,n],n=0)}t.push(e),e=e.$parent}return`

found in

`+t.map((c,a)=>`${a===0?"---> ":" ".repeat(5+a*2)}${Array.isArray(c)?`${ui(c[0])}... (${c[1]} recursive calls)`:ui(c)}`).join(`
`)}else return`

(found in ${ui(e)})`}const jb=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],Vb=e=>e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055,Ib=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],Eb=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function tf(e){const t=Array(3),n=Vb,c=jb;for(let a=0;a<3;++a)t[a]=Math.round(ft(n(c[a][0]*e[0]+c[a][1]*e[1]+c[a][2]*e[2]))*255);return{r:t[0],g:t[1],b:t[2]}}function Gs(e){let{r:t,g:n,b:c}=e;const a=[0,0,0],l=Eb,i=Ib;t=l(t/255),n=l(n/255),c=l(c/255);for(let s=0;s<3;++s)a[s]=i[s][0]*t+i[s][1]*n+i[s][2]*c;return a}const yl=.20689655172413793,Ab=e=>e>yl**3?Math.cbrt(e):e/(3*yl**2)+4/29,qb=e=>e>yl?e**3:3*yl**2*(e-4/29);function nf(e){const t=Ab,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function cf(e){const t=qb,n=(e[0]+16)/116;return[t(n+e[1]/500)*.95047,t(n),t(n-e[2]/200)*1.08883]}function Fo(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}function sc(e){if(typeof e=="number")return(isNaN(e)||e<0||e>16777215)&&Ln(`'${e}' is not a valid hex color`),{r:(e&16711680)>>16,g:(e&65280)>>8,b:e&255};if(typeof e=="string"){let t=e.startsWith("#")?e.slice(1):e;[3,4].includes(t.length)?t=t.split("").map(c=>c+c).join(""):[6,8].includes(t.length)||Ln(`'${e}' is not a valid hex(a) color`);const n=parseInt(t,16);return(isNaN(n)||n<0||n>4294967295)&&Ln(`'${e}' is not a valid hex(a) color`),of(t)}else throw new TypeError(`Colors can only be numbers or strings, recieved ${e==null?e:e.constructor.name} instead`)}function Ml(e){const{h:t,s:n,v:c,a}=e,l=s=>{const r=(s+t/60)%6;return c-c*n*Math.max(Math.min(r,4-r,1),0)},i=[l(5),l(3),l(1)].map(s=>Math.round(s*255));return{r:i[0],g:i[1],b:i[2],a}}function Xs(e){if(!e)return{h:0,s:1,v:1,a:1};const t=e.r/255,n=e.g/255,c=e.b/255,a=Math.max(t,n,c),l=Math.min(t,n,c);let i=0;a!==l&&(a===t?i=60*(0+(n-c)/(a-l)):a===n?i=60*(2+(c-t)/(a-l)):a===c&&(i=60*(4+(t-n)/(a-l)))),i<0&&(i=i+360);const s=a===0?0:(a-l)/a,r=[i,s,a];return{h:r[0],s:r[1],v:r[2],a:e.a}}function af(e){const{h:t,s:n,v:c,a}=e,l=c-c*n/2,i=l===1||l===0?0:(c-l)/Math.min(l,1-l);return{h:t,s:i,l,a}}function lf(e){const{h:t,s:n,l:c,a}=e,l=c+n*Math.min(c,1-c),i=l===0?0:2-2*c/l;return{h:t,s:i,v:l,a}}function Pb(e){let{r:t,g:n,b:c,a}=e;return a===void 0?`rgb(${t}, ${n}, ${c})`:`rgba(${t}, ${n}, ${c}, ${a})`}function sf(e){return Pb(Ml(e))}function Qa(e){const t=Math.round(e).toString(16);return("00".substr(0,2-t.length)+t).toUpperCase()}function rf(e){let{r:t,g:n,b:c,a}=e;return`#${[Qa(t),Qa(n),Qa(c),a!==void 0?Qa(Math.round(a*255)):""].join("")}`}function of(e){e=ff(e);let[t,n,c,a]=yb(e,2).map(l=>parseInt(l,16));return a=a===void 0?a:a/255,{r:t,g:n,b:c,a}}function uf(e){const t=of(e);return Xs(t)}function df(e){return rf(Ml(e))}function ff(e){return e.startsWith("#")&&(e=e.slice(1)),e=e.replace(/([^0-9a-f])/gi,"F"),(e.length===3||e.length===4)&&(e=e.split("").map(t=>t+t).join("")),e.length!==6&&(e=$o($o(e,6),8,"F")),e}function Tb(e,t){const n=nf(Gs(e));return n[0]=n[0]+t*10,tf(cf(n))}function $b(e,t){const n=nf(Gs(e));return n[0]=n[0]-t*10,tf(cf(n))}function Wi(e){const t=sc(e);return Gs(t)[1]}function Mb(e,t){const n=Wi(e),c=Wi(t),a=Math.max(n,c),l=Math.min(n,c);return(a+.05)/(l+.05)}function ye(e,t){return n=>Object.keys(e).reduce((c,a)=>{const i=typeof e[a]=="object"&&e[a]!=null&&!Array.isArray(e[a])?e[a]:{type:e[a]};return n&&a in n?c[a]={...i,default:n[a]}:c[a]=i,t&&!c[a].source&&(c[a].source=t),c},{})}const ne=ye({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function Nn(e,t){let n;function c(){n=ks(),n.run(()=>t.length?t(()=>{n==null||n.stop(),c()}):t())}ae(e,a=>{a&&!n?c():a||(n==null||n.stop(),n=void 0)},{immediate:!0}),It(()=>{n==null||n.stop()})}const Va=Symbol.for("vuetify:defaults");function Bb(e){return $(e)}function Zs(){const e=Ie(Va);if(!e)throw new Error("[Vuetify] Could not find defaults instance");return e}function Je(e,t){const n=Zs(),c=$(e),a=y(()=>{if(dt(t==null?void 0:t.disabled))return n.value;const i=dt(t==null?void 0:t.scoped),s=dt(t==null?void 0:t.reset),r=dt(t==null?void 0:t.root);let u=pn(c.value,{prev:n.value});if(i)return u;if(s||r){const o=Number(s||1/0);for(let d=0;d<=o&&!(!u||!("prev"in u));d++)u=u.prev;return u}return u.prev?pn(u.prev,u):u});return Ke(Va,a),a}function Rb(e,t){var n,c;return typeof((n=e.props)==null?void 0:n[t])<"u"||typeof((c=e.props)==null?void 0:c[On(t)])<"u"}function Ob(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Zs();const c=rt("useDefaults");if(t=t??c.type.name??c.type.__name,!t)throw new Error("[Vuetify] Could not determine component name");const a=y(()=>{var r;return(r=n.value)==null?void 0:r[e._as??t]}),l=new Proxy(e,{get(r,u){var d,f,m,h;const o=Reflect.get(r,u);return u==="class"||u==="style"?[(d=a.value)==null?void 0:d[u],o].filter(g=>g!=null):typeof u=="string"&&!Rb(c.vnode,u)?((f=a.value)==null?void 0:f[u])??((h=(m=n.value)==null?void 0:m.global)==null?void 0:h[u])??o:o}}),i=Is();Kt(()=>{if(a.value){const r=Object.entries(a.value).filter(u=>{let[o]=u;return o.startsWith(o[0].toUpperCase())});r.length&&(i.value=Object.fromEntries(r))}});function s(){Nn(i,()=>{var r;Je(pn(((r=Db(Va))==null?void 0:r.value)??{},i.value))})}return{props:l,provideSubDefaults:s}}function Mt(e){if(e._setup=e._setup??e.setup,!e.name)return Ln("The component is missing an explicit name, unable to generate default prop value"),e;if(e._setup){e.props=ye(e.props??{},On(e.name))();const t=Object.keys(e.props);e.filterProps=function(c){return Wc(c,t,["class","style"])},e.props._as=String,e.setup=function(c,a){const l=Zs();if(!l.value)return e._setup(c,a);const{props:i,provideSubDefaults:s}=Ob(c,c._as??e.name,l),r=e._setup(i,a);return s(),r}}return e}function W(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t=>(e?Mt:$s)(t)}function Yt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return W()({name:n??Cn($t(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...ne()},setup(c,a){let{slots:l}=a;return()=>{var i;return rn(c.tag,{class:[e,c.class],style:c.style},(i=l.default)==null?void 0:i.call(l))}}})}function vf(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}const Ia="cubic-bezier(0.4, 0, 0.2, 1)",Lb="cubic-bezier(0.0, 0, 0.2, 1)",Fb="cubic-bezier(0.4, 0, 1, 1)";function rt(e,t){const n=Pl();if(!n)throw new Error(`[Vuetify] ${e} ${t||"must be called from inside a setup function"}`);return n}function xn(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const t=rt(e).type;return On((t==null?void 0:t.aliasName)||(t==null?void 0:t.name))}let mf=0,sl=new WeakMap;function ht(){const e=rt("getUid");if(sl.has(e))return sl.get(e);{const t=mf++;return sl.set(e,t),t}}ht.reset=()=>{mf=0,sl=new WeakMap};function hf(e){for(;e;){if(Qs(e))return e;e=e.parentElement}return document.scrollingElement}function bl(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(Qs(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function Qs(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}const Xe=typeof window<"u",Js=Xe&&"IntersectionObserver"in window,Nb=Xe&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),Ki=Xe&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports("selector(:focus-visible)");function Db(e){const{provides:t}=rt("injectSelf");if(t&&e in t)return t[e]}function zb(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function X(e){const t=rt("useRender");t.render=e}function Ce(e,t,n){let c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:d=>d,a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:d=>d;const l=rt("useProxiedModel"),i=$(e[t]!==void 0?e[t]:n),s=On(t),u=y(s!==t?()=>{var d,f,m,h;return e[t],!!(((d=l.vnode.props)!=null&&d.hasOwnProperty(t)||(f=l.vnode.props)!=null&&f.hasOwnProperty(s))&&((m=l.vnode.props)!=null&&m.hasOwnProperty(`onUpdate:${t}`)||(h=l.vnode.props)!=null&&h.hasOwnProperty(`onUpdate:${s}`)))}:()=>{var d,f;return e[t],!!((d=l.vnode.props)!=null&&d.hasOwnProperty(t)&&((f=l.vnode.props)!=null&&f.hasOwnProperty(`onUpdate:${t}`)))});Nn(()=>!u.value,()=>{ae(()=>e[t],d=>{i.value=d})});const o=y({get(){const d=e[t];return c(u.value?d:i.value)},set(d){const f=a(d),m=xe(u.value?e[t]:i.value);m===f||c(m)===d||(i.value=f,l==null||l.emit(`update:${t}`,f))}});return Object.defineProperty(o,"externalValue",{get:()=>u.value?e[t]:i.value}),o}const Hb={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},No="$vuetify.",Do=(e,t)=>e.replace(/\{(\d+)\}/g,(n,c)=>String(t[+c])),gf=(e,t,n)=>function(c){for(var a=arguments.length,l=new Array(a>1?a-1:0),i=1;i<a;i++)l[i-1]=arguments[i];if(!c.startsWith(No))return Do(c,l);const s=c.replace(No,""),r=e.value&&n.value[e.value],u=t.value&&n.value[t.value];let o=Fi(r,s,null);return o||(Ln(`Translation key "${c}" not found in "${e.value}", trying fallback locale`),o=Fi(u,s,null)),o||(Ui(`Translation key "${c}" not found in fallback`),o=c),typeof o!="string"&&(Ui(`Translation key "${c}" has a non-string value`),o=c),Do(o,l)};function yf(e,t){return(n,c)=>new Intl.NumberFormat([e.value,t.value],c).format(n)}function di(e,t,n){const c=Ce(e,t,e[t]??n.value);return c.value=e[t]??n.value,ae(n,a=>{e[t]==null&&(c.value=n.value)}),c}function bf(e){return t=>{const n=di(t,"locale",e.current),c=di(t,"fallback",e.fallback),a=di(t,"messages",e.messages);return{name:"vuetify",current:n,fallback:c,messages:a,t:gf(n,c,a),n:yf(n,c),provide:bf({current:n,fallback:c,messages:a})}}}function Ub(e){const t=$((e==null?void 0:e.locale)??"en"),n=$((e==null?void 0:e.fallback)??"en"),c=$({en:Hb,...e==null?void 0:e.messages});return{name:"vuetify",current:t,fallback:n,messages:c,t:gf(t,n,c),n:yf(t,n),provide:bf({current:t,fallback:n,messages:c})}}const Wb={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1},Lc=Symbol.for("vuetify:locale");function Kb(e){return e.name!=null}function Yb(e){const t=e!=null&&e.adapter&&Kb(e==null?void 0:e.adapter)?e==null?void 0:e.adapter:Ub(e),n=Xb(t,e);return{...t,...n}}function Bt(){const e=Ie(Lc);if(!e)throw new Error("[Vuetify] Could not find injected locale instance");return e}function Gb(e){const t=Ie(Lc);if(!t)throw new Error("[Vuetify] Could not find injected locale instance");const n=t.provide(e),c=Zb(n,t.rtl,e),a={...n,...c};return Ke(Lc,a),a}function Xb(e,t){const n=$((t==null?void 0:t.rtl)??Wb),c=y(()=>n.value[e.current.value]??!1);return{isRtl:c,rtl:n,rtlClasses:y(()=>`v-locale--is-${c.value?"rtl":"ltr"}`)}}function Zb(e,t,n){const c=y(()=>n.rtl??t.value[e.current.value]??!1);return{isRtl:c,rtl:t,rtlClasses:y(()=>`v-locale--is-${c.value?"rtl":"ltr"}`)}}function wn(){const e=Ie(Lc);if(!e)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:e.isRtl,rtlClasses:e.rtlClasses}}function Qb(e){let t=[];const n=[],c=pf(e),a=kf(e);for(let l=0;l<c.getDay();l++)t.push(null);for(let l=1;l<=a.getDate();l++){const i=new Date(e.getFullYear(),e.getMonth(),l);t.push(i),t.length===7&&(n.push(t),t=[])}for(let l=t.length;l<7;l++)t.push(null);return n.push(t),n}function pf(e){return new Date(e.getFullYear(),e.getMonth(),1)}function kf(e){return new Date(e.getFullYear(),e.getMonth()+1,0)}function Jb(e){if(e==null)return null;if(e instanceof Date)return e;if(typeof e=="string"){const t=Date.parse(e);if(!isNaN(t))return new Date(t)}return null}const e2={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:0,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:0,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0},zo=new Date(2e3,0,2);function t2(e){const t=e2[e.slice(-2).toUpperCase()];return cn(7).map(n=>{const c=new Date(zo);return c.setDate(zo.getDate()+t+n),new Intl.DateTimeFormat(e,{weekday:"long"}).format(c)})}function n2(e,t,n){const c=new Date(e);let a={};switch(t){case"fullDateWithWeekday":a={weekday:"long",day:"numeric",month:"long",year:"numeric"};break;case"normalDateWithWeekday":a={weekday:"short",day:"numeric",month:"short",year:"numeric"};break;case"keyboardDate":a={};break;case"monthAndDate":a={month:"long",day:"numeric"};break;case"monthAndYear":a={month:"long",year:"numeric"};break;default:a={timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,a).format(c)}function c2(e,t){const n=new Date(e);return n.setDate(n.getDate()+t),n}function a2(e,t){const n=new Date(e);return n.setMonth(n.getMonth()+t),n}function l2(e){return e.getFullYear()}function i2(e){return e.getMonth()}function s2(e){return new Date(e.getFullYear(),0,1)}function r2(e){return new Date(e.getFullYear(),11,31)}function fi(e){return new Date(e,0,1)}function o2(e){let t=e.getFullYear(),n=fi(t);if(e<n)t=t-1,n=fi(t);else{const l=fi(t+1);e>=l&&(t=t+1,n=l)}const c=Math.abs(e.getTime()-n.getTime()),a=Math.ceil(c/(1e3*60*60*24));return Math.floor(a/7)+1}function u2(e,t){return Sf(e,t[0])&&f2(e,t[1])}function d2(e){const t=new Date(e);return t instanceof Date&&!isNaN(t.getTime())}function Sf(e,t){return e.getTime()>t.getTime()}function f2(e,t){return e.getTime()<t.getTime()}function v2(e,t){return e.getTime()===t.getTime()}function m2(e,t){return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function h2(e,t){return e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function g2(e,t,n){const c=new Date(e),a=new Date(t);return n==="month"?c.getMonth()-a.getMonth()+(c.getFullYear()-a.getFullYear())*12:Math.floor((c.getTime()-a.getTime())/(1e3*60*60*24))}function y2(e,t){const n=new Date(e);return n.setFullYear(t),n}class b2{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"en";this.locale=t}date(t){return Jb(t)}addDays(t,n){return c2(t,n)}addMonths(t,n){return a2(t,n)}getWeekArray(t){return Qb(t)}startOfMonth(t){return pf(t)}endOfMonth(t){return kf(t)}format(t,n){return n2(t,n,this.locale)}isEqual(t,n){return v2(t,n)}isValid(t){return d2(t)}isWithinRange(t,n){return u2(t,n)}isAfter(t,n){return Sf(t,n)}isSameDay(t,n){return m2(t,n)}isSameMonth(t,n){return h2(t,n)}setYear(t,n){return y2(t,n)}getDiff(t,n,c){return g2(t,n,c)}getWeek(t){return o2(t)}getWeekdays(){return t2(this.locale)}getYear(t){return l2(t)}getMonth(t){return i2(t)}startOfYear(t){return s2(t)}endOfYear(t){return r2(t)}}const Ho=Symbol.for("vuetify:date-adapter");function p2(e){return e??{adapter:b2}}const Bl=["sm","md","lg","xl","xxl"],Yi=Symbol.for("vuetify:display"),Uo={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},k2=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Uo;return pn(Uo,e)};function Wo(e){return Xe&&!e?window.innerWidth:0}function Ko(e){return Xe&&!e?window.innerHeight:0}function Yo(e){const t=Xe&&!e?window.navigator.userAgent:"ssr";function n(h){return!!t.match(h)}const c=n(/android/i),a=n(/iphone|ipad|ipod/i),l=n(/cordova/i),i=n(/electron/i),s=n(/chrome/i),r=n(/edge/i),u=n(/firefox/i),o=n(/opera/i),d=n(/win/i),f=n(/mac/i),m=n(/linux/i);return{android:c,ios:a,cordova:l,electron:i,chrome:s,edge:r,firefox:u,opera:o,win:d,mac:f,linux:m,touch:Nb,ssr:t==="ssr"}}function S2(e,t){const{thresholds:n,mobileBreakpoint:c}=k2(e),a=$(Ko(t)),l=Is(Yo(t)),i=it({}),s=$(Wo(t));function r(){a.value=Ko(),s.value=Wo()}function u(){r(),l.value=Yo()}return Kt(()=>{const o=s.value<n.sm,d=s.value<n.md&&!o,f=s.value<n.lg&&!(d||o),m=s.value<n.xl&&!(f||d||o),h=s.value<n.xxl&&!(m||f||d||o),g=s.value>=n.xxl,S=o?"xs":d?"sm":f?"md":m?"lg":h?"xl":"xxl",b=typeof c=="number"?c:n[c],C=s.value<b;i.xs=o,i.sm=d,i.md=f,i.lg=m,i.xl=h,i.xxl=g,i.smAndUp=!o,i.mdAndUp=!(o||d),i.lgAndUp=!(o||d||f),i.xlAndUp=!(o||d||f||m),i.smAndDown=!(f||m||h||g),i.mdAndDown=!(m||h||g),i.lgAndDown=!(h||g),i.xlAndDown=!g,i.name=S,i.height=a.value,i.width=s.value,i.mobile=C,i.mobileBreakpoint=c,i.platform=l.value,i.thresholds=n}),Xe&&window.addEventListener("resize",r,{passive:!0}),{...Es(i),update:u,ssr:!!t}}function hc(){const e=Ie(Yi);if(!e)throw new Error("Could not find Vuetify display injection");return e}const C2={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"},_2={component:e=>rn(tr,{...e,class:"mdi"})},pe=[String,Function,Object,Array],Gi=Symbol.for("vuetify:icons"),Rl=ye({icon:{type:pe},tag:{type:String,required:!0}},"icon"),Xi=W()({name:"VComponentIcon",props:Rl(),setup(e,t){let{slots:n}=t;return()=>{const c=e.icon;return v(e.tag,null,{default:()=>{var a;return[e.icon?v(c,null,null):(a=n.default)==null?void 0:a.call(n)]}})}}}),er=Mt({name:"VSvgIcon",inheritAttrs:!1,props:Rl(),setup(e,t){let{attrs:n}=t;return()=>v(e.tag,le(n,{style:null}),{default:()=>[v("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(e.icon)?e.icon.map(c=>Array.isArray(c)?v("path",{d:c[0],"fill-opacity":c[1]},null):v("path",{d:c},null)):v("path",{d:e.icon},null)])]})}}),x2=Mt({name:"VLigatureIcon",props:Rl(),setup(e){return()=>v(e.tag,null,{default:()=>[e.icon]})}}),tr=Mt({name:"VClassIcon",props:Rl(),setup(e){return()=>v(e.tag,{class:e.icon},null)}}),w2={svg:{component:er},class:{component:tr}};function j2(e){return pn({defaultSet:"mdi",sets:{...w2,mdi:_2},aliases:C2},e)}const V2=e=>{const t=Ie(Gi);if(!t)throw new Error("Missing Vuetify Icons provide!");return{iconData:y(()=>{var r;const c=dt(e);if(!c)return{component:Xi};let a=c;if(typeof a=="string"&&(a=a.trim(),a.startsWith("$")&&(a=(r=t.aliases)==null?void 0:r[a.slice(1)])),!a)throw new Error(`Could not find aliased icon "${c}"`);if(Array.isArray(a))return{component:er,icon:a};if(typeof a!="string")return{component:Xi,icon:a};const l=Object.keys(t.sets).find(u=>typeof a=="string"&&a.startsWith(`${u}:`)),i=l?a.slice(l.length+1):a;return{component:t.sets[l??t.defaultSet].component,icon:i}})}},_c=2.4,Go=.2126729,Xo=.7151522,Zo=.072175,I2=.55,E2=.58,A2=.57,q2=.62,Ja=.03,Qo=1.45,P2=5e-4,T2=1.25,$2=1.25,Jo=.078,eu=12.82051282051282,el=.06,tu=.001;function nu(e,t){const n=(e.r/255)**_c,c=(e.g/255)**_c,a=(e.b/255)**_c,l=(t.r/255)**_c,i=(t.g/255)**_c,s=(t.b/255)**_c;let r=n*Go+c*Xo+a*Zo,u=l*Go+i*Xo+s*Zo;if(r<=Ja&&(r+=(Ja-r)**Qo),u<=Ja&&(u+=(Ja-u)**Qo),Math.abs(u-r)<P2)return 0;let o;if(u>r){const d=(u**I2-r**E2)*T2;o=d<tu?0:d<Jo?d-d*eu*el:d-el}else{const d=(u**q2-r**A2)*$2;o=d>-tu?0:d>-Jo?d-d*eu*el:d+el}return o*100}const Ea=Symbol.for("vuetify:theme"),Ee=ye({theme:String},"theme"),sa={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-variant":"#BDBDBD","on-surface-variant":"#424242",primary:"#BB86FC","primary-darken-1":"#3700B3",secondary:"#03DAC5","secondary-darken-1":"#03DAC5",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}};function M2(){var n,c;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:sa;if(!e)return{...sa,isDisabled:!0};const t={};for(const[a,l]of Object.entries(e.themes??{})){const i=l.dark||a==="dark"?(n=sa.themes)==null?void 0:n.dark:(c=sa.themes)==null?void 0:c.light;t[a]=pn(i,l)}return pn(sa,{...e,themes:t})}function B2(e){const t=it(M2(e)),n=$(t.defaultTheme),c=$(t.themes),a=y(()=>{const o={};for(const[d,f]of Object.entries(c.value)){const m=o[d]={...f,colors:{...f.colors}};if(t.variations)for(const h of t.variations.colors){const g=m.colors[h];if(g)for(const S of["lighten","darken"]){const b=S==="lighten"?Tb:$b;for(const C of cn(t.variations[S],1))m.colors[`${h}-${S}-${C}`]=rf(b(sc(g),C))}}for(const h of Object.keys(m.colors)){if(/^on-[a-z]/.test(h)||m.colors[`on-${h}`])continue;const g=`on-${h}`,S=sc(m.colors[h]),b=Math.abs(nu(sc(0),S)),C=Math.abs(nu(sc(16777215),S));m.colors[g]=C>Math.min(b,50)?"#fff":"#000"}}return o}),l=y(()=>a.value[n.value]),i=y(()=>{const o=[];l.value.dark&&Jn(o,":root",["color-scheme: dark"]),Jn(o,":root",cu(l.value));for(const[h,g]of Object.entries(a.value))Jn(o,`.v-theme--${h}`,[`color-scheme: ${g.dark?"dark":"normal"}`,...cu(g)]);const d=[],f=[],m=new Set(Object.values(a.value).flatMap(h=>Object.keys(h.colors)));for(const h of m)/^on-[a-z]/.test(h)?Jn(f,`.${h}`,[`color: rgb(var(--v-theme-${h})) !important`]):(Jn(d,`.bg-${h}`,[`--v-theme-overlay-multiplier: var(--v-theme-${h}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${h})) !important`,`color: rgb(var(--v-theme-on-${h})) !important`]),Jn(f,`.text-${h}`,[`color: rgb(var(--v-theme-${h})) !important`]),Jn(f,`.border-${h}`,[`--v-border-color: var(--v-theme-${h})`]));return o.push(...d,...f),o.map((h,g)=>g===0?h:`    ${h}`).join("")});function s(){return{style:[{children:i.value,id:"vuetify-theme-stylesheet",nonce:t.cspNonce||!1}]}}function r(o){const d=o._context.provides.usehead;if(d)if(d.push){const m=d.push(s);ae(i,()=>{m.patch(s)})}else Xe?(d.addHeadObjs(y(s)),Kt(()=>d.updateDOM())):d.addHeadObjs(s());else{let h=function(){if(!t.isDisabled){if(typeof document<"u"&&!m){const g=document.createElement("style");g.type="text/css",g.id="vuetify-theme-stylesheet",t.cspNonce&&g.setAttribute("nonce",t.cspNonce),m=g,document.head.appendChild(m)}m&&(m.innerHTML=i.value)}};var f=h;let m=Xe?document.getElementById("vuetify-theme-stylesheet"):null;ae(i,h,{immediate:!0})}}const u=y(()=>t.isDisabled?void 0:`v-theme--${n.value}`);return{install:r,isDisabled:t.isDisabled,name:n,themes:c,current:l,computedThemes:a,themeClasses:u,styles:i,global:{name:n,current:l}}}function Pe(e){rt("provideTheme");const t=Ie(Ea,null);if(!t)throw new Error("Could not find Vuetify theme injection");const n=y(()=>e.theme??(t==null?void 0:t.name.value)),c=y(()=>t.isDisabled?void 0:`v-theme--${n.value}`),a={...t,name:n,themeClasses:c};return Ke(Ea,a),a}function Cf(){rt("useTheme");const e=Ie(Ea,null);if(!e)throw new Error("Could not find Vuetify theme injection");return e}function Jn(e,t,n){e.push(`${t} {
`,...n.map(c=>`  ${c};
`),`}
`)}function cu(e){const t=e.dark?2:1,n=e.dark?1:2,c=[];for(const[a,l]of Object.entries(e.colors)){const i=sc(l);c.push(`--v-theme-${a}: ${i.r},${i.g},${i.b}`),a.startsWith("on-")||c.push(`--v-theme-${a}-overlay-multiplier: ${Wi(l)>.18?t:n}`)}for(const[a,l]of Object.entries(e.variables)){const i=typeof l=="string"&&l.startsWith("#")?sc(l):void 0,s=i?`${i.r}, ${i.g}, ${i.b}`:void 0;c.push(`--v-${a}: ${s??l}`)}return c}function sn(e){const t=$(),n=$();if(Xe){const c=new ResizeObserver(a=>{e==null||e(a,c),a.length&&(n.value=a[0].contentRect)});pt(()=>{c.disconnect()}),ae(t,(a,l)=>{l&&(c.unobserve(l),n.value=void 0),a&&c.observe(a)},{flush:"post"})}return{resizeRef:t,contentRect:$a(n)}}const pl=Symbol.for("vuetify:layout"),_f=Symbol.for("vuetify:layout-item"),au=1e3,xf=ye({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Kc=ye({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function R2(){const e=Ie(pl);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Yc(e){const t=Ie(pl);if(!t)throw new Error("[Vuetify] Could not find injected layout");const n=e.id??`layout-item-${ht()}`,c=rt("useLayoutItem");Ke(_f,{id:n});const a=$(!1);ld(()=>a.value=!0),ad(()=>a.value=!1);const{layoutItemStyles:l,layoutItemScrimStyles:i}=t.register(c,{...e,active:y(()=>a.value?!1:e.active.value),id:n});return pt(()=>t.unregister(n)),{layoutItemStyles:l,layoutRect:t.layoutRect,layoutItemScrimStyles:i}}const O2=(e,t,n,c)=>{let a={top:0,left:0,right:0,bottom:0};const l=[{id:"",layer:{...a}}];for(const i of e){const s=t.get(i),r=n.get(i),u=c.get(i);if(!s||!r||!u)continue;const o={...a,[s.value]:parseInt(a[s.value],10)+(u.value?parseInt(r.value,10):0)};l.push({id:i,layer:o}),a=o}return l};function wf(e){const t=Ie(pl,null),n=y(()=>t?t.rootZIndex.value-100:au),c=$([]),a=it(new Map),l=it(new Map),i=it(new Map),s=it(new Map),r=it(new Map),{resizeRef:u,contentRect:o}=sn(),d=y(()=>{const E=new Map,A=e.overlaps??[];for(const k of A.filter(x=>x.includes(":"))){const[x,V]=k.split(":");if(!c.value.includes(x)||!c.value.includes(V))continue;const I=a.get(x),w=a.get(V),M=l.get(x),N=l.get(V);!I||!w||!M||!N||(E.set(V,{position:I.value,amount:parseInt(M.value,10)}),E.set(x,{position:w.value,amount:-parseInt(N.value,10)}))}return E}),f=y(()=>{const E=[...new Set([...i.values()].map(k=>k.value))].sort((k,x)=>k-x),A=[];for(const k of E){const x=c.value.filter(V=>{var I;return((I=i.get(V))==null?void 0:I.value)===k});A.push(...x)}return O2(A,a,l,s)}),m=y(()=>!Array.from(r.values()).some(E=>E.value)),h=y(()=>f.value[f.value.length-1].layer),g=y(()=>({"--v-layout-left":se(h.value.left),"--v-layout-right":se(h.value.right),"--v-layout-top":se(h.value.top),"--v-layout-bottom":se(h.value.bottom),...m.value?void 0:{transition:"none"}})),S=y(()=>f.value.slice(1).map((E,A)=>{let{id:k}=E;const{layer:x}=f.value[A],V=l.get(k),I=a.get(k);return{id:k,...x,size:Number(V.value),position:I.value}})),b=E=>S.value.find(A=>A.id===E),C=rt("createLayout"),p=$(!1);mt(()=>{p.value=!0}),Ke(pl,{register:(E,A)=>{let{id:k,order:x,position:V,layoutSize:I,elementSize:w,active:M,disableTransitions:N,absolute:Z}=A;i.set(k,x),a.set(k,V),l.set(k,I),s.set(k,M),N&&r.set(k,N);const H=ga(_f,C==null?void 0:C.vnode).indexOf(E);H>-1?c.value.splice(H,0,k):c.value.push(k);const D=y(()=>S.value.findIndex(z=>z.id===k)),J=y(()=>n.value+f.value.length*2-D.value*2),R=y(()=>{const z=V.value==="left"||V.value==="right",fe=V.value==="right",ue=V.value==="bottom",B={[V.value]:0,zIndex:J.value,transform:`translate${z?"X":"Y"}(${(M.value?0:-110)*(fe||ue?-1:1)}%)`,position:Z.value||n.value!==au?"absolute":"fixed",...m.value?void 0:{transition:"none"}};if(!p.value)return B;const T=S.value[D.value];if(!T)throw new Error(`[Vuetify] Could not find layout item "${k}"`);const O=d.value.get(k);return O&&(T[O.position]+=O.amount),{...B,height:z?`calc(100% - ${T.top}px - ${T.bottom}px)`:w.value?`${w.value}px`:void 0,left:fe?void 0:`${T.left}px`,right:fe?`${T.right}px`:void 0,top:V.value!=="bottom"?`${T.top}px`:void 0,bottom:V.value!=="top"?`${T.bottom}px`:void 0,width:z?w.value?`${w.value}px`:void 0:`calc(100% - ${T.left}px - ${T.right}px)`}}),K=y(()=>({zIndex:J.value-1}));return{layoutItemStyles:R,layoutItemScrimStyles:K,zIndex:J}},unregister:E=>{i.delete(E),a.delete(E),l.delete(E),s.delete(E),r.delete(E),c.value=c.value.filter(A=>A!==E)},mainRect:h,mainStyles:g,getLayoutItem:b,items:S,layoutRect:o,rootZIndex:n});const P=y(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),j=y(()=>({zIndex:n.value,position:t?"relative":void 0,overflow:t?"hidden":void 0}));return{layoutClasses:P,layoutStyles:j,getLayoutItem:b,items:S,layoutRect:o,layoutRef:u}}function jf(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:t,...n}=e,c=pn(t,n),{aliases:a={},components:l={},directives:i={}}=c,s=Bb(c.defaults),r=S2(c.display,c.ssr),u=B2(c.theme),o=j2(c.icons),d=Yb(c.locale),f=p2(c.date);return{install:h=>{for(const g in i)h.directive(g,i[g]);for(const g in l)h.component(g,l[g]);for(const g in a)h.component(g,Mt({...a[g],name:g,aliasName:a[g].name}));if(u.install(h),h.provide(Va,s),h.provide(Yi,r),h.provide(Ea,u),h.provide(Gi,o),h.provide(Lc,d),h.provide(Ho,f),Xe&&c.ssr)if(h.$nuxt)h.$nuxt.hook("app:suspense:resolve",()=>{r.update()});else{const{mount:g}=h;h.mount=function(){const S=g(...arguments);return Oe(()=>r.update()),h.mount=g,S}}ht.reset(),h.mixin({computed:{$vuetify(){return it({defaults:xc.call(this,Va),display:xc.call(this,Yi),theme:xc.call(this,Ea),icons:xc.call(this,Gi),locale:xc.call(this,Lc),date:xc.call(this,Ho)})}}})},defaults:s,display:r,theme:u,icons:o,locale:d,date:f}}const L2="3.2.2";jf.version=L2;function xc(e){var c,a;const t=this.$,n=((c=t.parent)==null?void 0:c.provides)??((a=t.vnode.appContext)==null?void 0:a.provides);if(n&&e in n)return n[e]}const F2=W()({name:"VApp",props:{...ne(),...xf({fullHeight:!0}),...Ee()},setup(e,t){let{slots:n}=t;const c=Pe(e),{layoutClasses:a,layoutStyles:l,getLayoutItem:i,items:s,layoutRef:r}=wf(e),{rtlClasses:u}=wn();return X(()=>{var o;return v("div",{ref:r,class:["v-application",c.themeClasses.value,a.value,u.value,e.class],style:[l.value,e.style]},[v("div",{class:"v-application__wrap"},[(o=n.default)==null?void 0:o.call(n)])])}),{getLayoutItem:i,items:s,theme:c}}});const $e=W(!1)({name:"VDefaultsProvider",props:{defaults:Object,disabled:Boolean,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,t){let{slots:n}=t;const{defaults:c,disabled:a,reset:l,root:i,scoped:s}=Es(e);return Je(c,{reset:l,root:i,scoped:s,disabled:a}),()=>{var r;return(r=n.default)==null?void 0:r.call(n)}}});function Et(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"center center",n=arguments.length>2?arguments[2]:void 0;return W()({name:e,props:{disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:n},origin:{type:String,default:t}},setup(c,a){let{slots:l}=a;const i={onBeforeEnter(s){s.style.transformOrigin=c.origin},onLeave(s){if(c.leaveAbsolute){const{offsetTop:r,offsetLeft:u,offsetWidth:o,offsetHeight:d}=s;s._transitionInitialStyles={position:s.style.position,top:s.style.top,left:s.style.left,width:s.style.width,height:s.style.height},s.style.position="absolute",s.style.top=`${r}px`,s.style.left=`${u}px`,s.style.width=`${o}px`,s.style.height=`${d}px`}c.hideOnLeave&&s.style.setProperty("display","none","important")},onAfterLeave(s){if(c.leaveAbsolute&&(s!=null&&s._transitionInitialStyles)){const{position:r,top:u,left:o,width:d,height:f}=s._transitionInitialStyles;delete s._transitionInitialStyles,s.style.position=r||"",s.style.top=u||"",s.style.left=o||"",s.style.width=d||"",s.style.height=f||""}}};return()=>{const s=c.group?Ag:ln;return rn(s,{name:c.disabled?"":e,css:!c.disabled,...c.group?void 0:{mode:c.mode},...c.disabled?{}:i},l.default)}}})}function Vf(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return W()({name:e,props:{mode:{type:String,default:n},disabled:Boolean},setup(c,a){let{slots:l}=a;return()=>rn(ln,{name:c.disabled?"":e,css:!c.disabled,...c.disabled?{}:t},l.default)}})}function If(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",c=$t(`offset-${n}`);return{onBeforeEnter(i){i._parent=i.parentNode,i._initialStyle={transition:i.style.transition,overflow:i.style.overflow,[n]:i.style[n]}},onEnter(i){const s=i._initialStyle;i.style.setProperty("transition","none","important"),i.style.overflow="hidden";const r=`${i[c]}px`;i.style[n]="0",i.offsetHeight,i.style.transition=s.transition,e&&i._parent&&i._parent.classList.add(e),requestAnimationFrame(()=>{i.style[n]=r})},onAfterEnter:l,onEnterCancelled:l,onLeave(i){i._initialStyle={transition:"",overflow:i.style.overflow,[n]:i.style[n]},i.style.overflow="hidden",i.style[n]=`${i[c]}px`,i.offsetHeight,requestAnimationFrame(()=>i.style[n]="0")},onAfterLeave:a,onLeaveCancelled:a};function a(i){e&&i._parent&&i._parent.classList.remove(e),l(i)}function l(i){const s=i._initialStyle[n];i.style.overflow=i._initialStyle.overflow,s!=null&&(i.style[n]=s),delete i._initialStyle}}const Ol=W()({name:"VDialogTransition",props:{target:Object},setup(e,t){let{slots:n}=t;const c={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,l){var f;await new Promise(m=>requestAnimationFrame(m)),await new Promise(m=>requestAnimationFrame(m)),a.style.visibility="";const{x:i,y:s,sx:r,sy:u,speed:o}=iu(e.target,a),d=ic(a,[{transform:`translate(${i}px, ${s}px) scale(${r}, ${u})`,opacity:0},{}],{duration:225*o,easing:Lb});(f=lu(a))==null||f.forEach(m=>{ic(m,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*o,easing:Ia})}),d.finished.then(()=>l())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,l){var f;await new Promise(m=>requestAnimationFrame(m));const{x:i,y:s,sx:r,sy:u,speed:o}=iu(e.target,a);ic(a,[{},{transform:`translate(${i}px, ${s}px) scale(${r}, ${u})`,opacity:0}],{duration:125*o,easing:Fb}).finished.then(()=>l()),(f=lu(a))==null||f.forEach(m=>{ic(m,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*o,easing:Ia})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?v(ln,le({name:"dialog-transition"},c,{css:!1}),n):v(ln,{name:"dialog-transition"},n)}});function lu(e){var n;const t=(n=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:n.children;return t&&[...t]}function iu(e,t){const n=e.getBoundingClientRect(),c=Ys(t),[a,l]=getComputedStyle(t).transformOrigin.split(" ").map(b=>parseFloat(b)),[i,s]=getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");let r=n.left+n.width/2;i==="left"||s==="left"?r-=n.width/2:(i==="right"||s==="right")&&(r+=n.width/2);let u=n.top+n.height/2;i==="top"||s==="top"?u-=n.height/2:(i==="bottom"||s==="bottom")&&(u+=n.height/2);const o=n.width/c.width,d=n.height/c.height,f=Math.max(1,o,d),m=o/f||0,h=d/f||0,g=c.width*c.height/(window.innerWidth*window.innerHeight),S=g>.12?Math.min(1.5,(g-.12)*10+1):1;return{x:r-(a+c.left),y:u-(l+c.top),sx:m,sy:h,speed:S}}const N2=Et("fab-transition","center center","out-in"),D2=Et("dialog-bottom-transition"),z2=Et("dialog-top-transition"),Zi=Et("fade-transition"),Ef=Et("scale-transition"),H2=Et("scroll-x-transition"),U2=Et("scroll-x-reverse-transition"),W2=Et("scroll-y-transition"),K2=Et("scroll-y-reverse-transition"),Y2=Et("slide-x-transition"),G2=Et("slide-x-reverse-transition"),nr=Et("slide-y-transition"),X2=Et("slide-y-reverse-transition"),Ll=Vf("expand-transition",If()),cr=Vf("expand-x-transition",If("",!0));const Rt=ye({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Ot(e){return{dimensionStyles:y(()=>({height:se(e.height),maxHeight:se(e.maxHeight),maxWidth:se(e.maxWidth),minHeight:se(e.minHeight),minWidth:se(e.minWidth),width:se(e.width)}))}}function Z2(e){return{aspectStyles:y(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const Af=W()({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...ne(),...Rt()},setup(e,t){let{slots:n}=t;const{aspectStyles:c}=Z2(e),{dimensionStyles:a}=Ot(e);return X(()=>{var l;return v("div",{class:["v-responsive",e.class],style:[a.value,e.style]},[v("div",{class:"v-responsive__sizer",style:c.value},null),(l=n.additional)==null?void 0:l.call(n),n.default&&v("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}});function Q2(e,t){if(!Js)return;const n=t.modifiers||{},c=t.value,{handler:a,options:l}=typeof c=="object"?c:{handler:c,options:{}},i=new IntersectionObserver(function(){var d;let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;const u=(d=e._observe)==null?void 0:d[t.instance.$.uid];if(!u)return;const o=s.some(f=>f.isIntersecting);a&&(!n.quiet||u.init)&&(!n.once||o||u.init)&&a(o,s,r),o&&n.once?qf(e,t):u.init=!0},l);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:i},i.observe(e)}function qf(e,t){var c;const n=(c=e._observe)==null?void 0:c[t.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const Ba={mounted:Q2,unmounted:qf},jn=ye({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),Ht=(e,t)=>{let{slots:n}=t;const{transition:c,...a}=e,{component:l=ln,...i}=typeof c=="object"?c:{};return rn(l,le(typeof c=="string"?{name:c}:i,a),n)},Gc=W()({name:"VImg",directives:{intersect:Ba},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...ne(),...jn()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:n,slots:c}=t;const a=$(""),l=$(),i=$(e.eager?"loading":"idle"),s=$(),r=$(),u=y(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),o=y(()=>u.value.aspect||s.value/r.value||0);ae(()=>e.src,()=>{d(i.value!=="idle")}),ae(o,(k,x)=>{!k&&x&&l.value&&S(l.value)}),Al(()=>d());function d(k){if(!(e.eager&&k)&&!(Js&&!k&&!e.eager)){if(i.value="loading",u.value.lazySrc){const x=new Image;x.src=u.value.lazySrc,S(x,null)}u.value.src&&Oe(()=>{var x,V;if(n("loadstart",((x=l.value)==null?void 0:x.currentSrc)||u.value.src),(V=l.value)!=null&&V.complete){if(l.value.naturalWidth||m(),i.value==="error")return;o.value||S(l.value,null),f()}else o.value||S(l.value),h()})}}function f(){var k;h(),i.value="loaded",n("load",((k=l.value)==null?void 0:k.currentSrc)||u.value.src)}function m(){var k;i.value="error",n("error",((k=l.value)==null?void 0:k.currentSrc)||u.value.src)}function h(){const k=l.value;k&&(a.value=k.currentSrc||k.src)}let g=-1;function S(k){let x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const V=()=>{clearTimeout(g);const{naturalHeight:I,naturalWidth:w}=k;I||w?(s.value=w,r.value=I):!k.complete&&i.value==="loading"&&x!=null?g=window.setTimeout(V,x):(k.currentSrc.endsWith(".svg")||k.currentSrc.startsWith("data:image/svg+xml"))&&(s.value=1,r.value=1)};V()}const b=y(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),C=()=>{var V;if(!u.value.src||i.value==="idle")return null;const k=v("img",{class:["v-img__img",b.value],src:u.value.src,srcset:u.value.srcset,alt:e.alt,sizes:e.sizes,ref:l,onLoad:f,onError:m},null),x=(V=c.sources)==null?void 0:V.call(c);return v(Ht,{transition:e.transition,appear:!0},{default:()=>[He(x?v("picture",{class:"v-img__picture"},[x,k]):k,[[on,i.value==="loaded"]])]})},p=()=>v(Ht,{transition:e.transition},{default:()=>[u.value.lazySrc&&i.value!=="loaded"&&v("img",{class:["v-img__img","v-img__img--preload",b.value],src:u.value.lazySrc,alt:e.alt},null)]}),P=()=>c.placeholder?v(Ht,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!c.error)&&v("div",{class:"v-img__placeholder"},[c.placeholder()])]}):null,j=()=>c.error?v(Ht,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&v("div",{class:"v-img__error"},[c.error()])]}):null,E=()=>e.gradient?v("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,A=$(!1);{const k=ae(o,x=>{x&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{A.value=!0})}),k())})}return X(()=>He(v(Af,{class:["v-img",{"v-img--booting":!A.value},e.class],style:[{width:se(e.width==="auto"?s.value:e.width)},e.style],aspectRatio:o.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>v(me,null,[v(C,null,null),v(p,null,null),v(E,null,null),v(P,null,null),v(j,null,null)]),default:c.default}),[[Ct("intersect"),{handler:d,options:e.options},null,{once:!0}]])),{currentSrc:a,image:l,state:i,naturalWidth:s,naturalHeight:r}}}),_e=ye({tag:{type:String,default:"div"}},"tag"),Pf=ye({text:String,...ne(),..._e()},"v-toolbar-title"),ar=W()({name:"VToolbarTitle",props:Pf(),setup(e,t){let{slots:n}=t;return X(()=>{const c=!!(n.default||n.text||e.text);return v(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var a;return[c&&v("div",{class:"v-toolbar-title__placeholder"},[n.text?n.text():e.text,(a=n.default)==null?void 0:a.call(n)])]}})}),{}}}),At=ye({border:[Boolean,Number,String]},"border");function Lt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xn();return{borderClasses:y(()=>{const c=We(e)?e.value:e.border,a=[];if(c===!0||c==="")a.push(`${t}--border`);else if(typeof c=="string"||c===0)for(const l of String(c).split(" "))a.push(`border-${l}`);return a})}}const tt=ye({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function ot(e){return{elevationClasses:y(()=>{const n=We(e)?e.value:e.elevation,c=[];return n==null||c.push(`elevation-${n}`),c})}}const De=ye({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function Ue(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xn();return{roundedClasses:y(()=>{const c=We(e)?e.value:e.rounded,a=[];if(c===!0||c==="")a.push(`${t}--rounded`);else if(typeof c=="string"||c===0)for(const l of String(c).split(" "))a.push(`rounded-${l}`);return a})}}function lr(e){return Us(()=>{const t=[],n={};return e.value.background&&(Fo(e.value.background)?n.backgroundColor=e.value.background:t.push(`bg-${e.value.background}`)),e.value.text&&(Fo(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}})}function vt(e,t){const n=y(()=>({text:We(e)?e.value:t?e[t]:null})),{colorClasses:c,colorStyles:a}=lr(n);return{textColorClasses:c,textColorStyles:a}}function Ze(e,t){const n=y(()=>({background:We(e)?e.value:t?e[t]:null})),{colorClasses:c,colorStyles:a}=lr(n);return{backgroundColorClasses:c,backgroundColorStyles:a}}const J2=[null,"prominent","default","comfortable","compact"],Tf=ye({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>J2.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...At(),...ne(),...tt(),...De(),..._e({tag:"header"}),...Ee()},"v-toolbar"),Qi=W()({name:"VToolbar",props:Tf(),setup(e,t){var f;let{slots:n}=t;const{backgroundColorClasses:c,backgroundColorStyles:a}=Ze(Y(e,"color")),{borderClasses:l}=Lt(e),{elevationClasses:i}=ot(e),{roundedClasses:s}=Ue(e),{themeClasses:r}=Pe(e),u=$(!!(e.extended||(f=n.extension)!=null&&f.call(n))),o=y(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),d=y(()=>u.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Je({VBtn:{variant:"text"}}),X(()=>{var S;const m=!!(e.title||n.title),h=!!(n.image||e.image),g=(S=n.extension)==null?void 0:S.call(n);return u.value=!!(e.extended||g),v(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},c.value,l.value,i.value,s.value,r.value,e.class],style:[a.value,e.style]},{default:()=>[h&&v("div",{key:"image",class:"v-toolbar__image"},[n.image?v($e,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},n.image):v(Gc,{key:"image-img",cover:!0,src:e.image},null)]),v($e,{defaults:{VTabs:{height:se(o.value)}}},{default:()=>{var b,C,p;return[v("div",{class:"v-toolbar__content",style:{height:se(o.value)}},[n.prepend&&v("div",{class:"v-toolbar__prepend"},[(b=n.prepend)==null?void 0:b.call(n)]),m&&v(ar,{key:"title",text:e.title},{text:n.title}),(C=n.default)==null?void 0:C.call(n),n.append&&v("div",{class:"v-toolbar__append"},[(p=n.append)==null?void 0:p.call(n)])])]}}),v($e,{defaults:{VTabs:{height:se(d.value)}}},{default:()=>[v(Ll,null,{default:()=>[u.value&&v("div",{class:"v-toolbar__extension",style:{height:se(d.value)}},[g])]})]})]})}),{contentHeight:o,extensionHeight:d}}}),e0=ye({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function t0(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:n}=t;let c=0;const a=$(null),l=$(0),i=$(0),s=$(0),r=$(!1),u=$(!1),o=y(()=>Number(e.scrollThreshold)),d=y(()=>ft((o.value-l.value)/o.value||0)),f=()=>{const m=a.value;!m||n&&!n.value||(c=l.value,l.value="window"in m?m.pageYOffset:m.scrollTop,u.value=l.value<c,s.value=Math.abs(l.value-o.value))};return ae(u,()=>{i.value=i.value||l.value}),ae(r,()=>{i.value=0}),mt(()=>{ae(()=>e.scrollTarget,m=>{var g;const h=m?document.querySelector(m):window;if(!h){Ln(`Unable to locate element with identifier ${m}`,Pl());return}h!==a.value&&((g=a.value)==null||g.removeEventListener("scroll",f),a.value=h,a.value.addEventListener("scroll",f,{passive:!0}))},{immediate:!0})}),pt(()=>{var m;(m=a.value)==null||m.removeEventListener("scroll",f)}),n&&ae(n,f,{immediate:!0}),{scrollThreshold:o,currentScroll:l,currentThreshold:s,isScrollActive:r,scrollRatio:d,isScrollingUp:u,savedScroll:i}}function gc(){const e=$(!1);return mt(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:y(()=>e.value?void 0:{transition:"none !important"}),isBooted:$a(e)}}const n0=W()({name:"VAppBar",props:{scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Tf(),...Kc(),...e0(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const c=$(),a=Ce(e,"modelValue"),l=y(()=>{var p;const C=new Set(((p=e.scrollBehavior)==null?void 0:p.split(" "))??[]);return{hide:C.has("hide"),inverted:C.has("inverted"),collapse:C.has("collapse"),elevate:C.has("elevate"),fadeImage:C.has("fade-image")}}),i=y(()=>{const C=l.value;return C.hide||C.inverted||C.collapse||C.elevate||C.fadeImage||!a.value}),{currentScroll:s,scrollThreshold:r,isScrollingUp:u,scrollRatio:o}=t0(e,{canScroll:i}),d=y(()=>e.collapse||l.value.collapse&&(l.value.inverted?o.value>0:o.value===0)),f=y(()=>e.flat||l.value.elevate&&(l.value.inverted?s.value>0:s.value===0)),m=y(()=>l.value.fadeImage?l.value.inverted?1-o.value:o.value:void 0),h=y(()=>{var P,j;if(l.value.hide&&l.value.inverted)return 0;const C=((P=c.value)==null?void 0:P.contentHeight)??0,p=((j=c.value)==null?void 0:j.extensionHeight)??0;return C+p});function g(){l.value.hide?l.value.inverted?a.value=s.value>r.value:a.value=u.value||s.value<r.value:a.value=!0}ae(s,g,{immediate:!0}),ae(l,g);const{ssrBootStyles:S}=gc(),{layoutItemStyles:b}=Yc({id:e.name,order:y(()=>parseInt(e.order,10)),position:Y(e,"location"),layoutSize:h,elementSize:$(void 0),active:a,absolute:Y(e,"absolute")});return X(()=>{const[C]=Qi.filterProps(e);return v(Qi,le({ref:c,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...b.value,"--v-toolbar-image-opacity":m.value,height:void 0,...S.value},e.style]},C,{collapse:d.value,flat:f.value}),n)}),{}}});const c0=[null,"default","comfortable","compact"],nt=ye({density:{type:String,default:"default",validator:e=>c0.includes(e)}},"density");function gt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xn();return{densityClasses:y(()=>`${t}--density-${e.density}`)}}const a0=["elevated","flat","tonal","outlined","text","plain"];function yc(e,t){return v(me,null,[e&&v("span",{key:"overlay",class:`${t}__overlay`},null),v("span",{key:"underlay",class:`${t}__underlay`},null)])}const Ft=ye({color:String,variant:{type:String,default:"elevated",validator:e=>a0.includes(e)}},"variant");function bc(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xn();const n=y(()=>{const{variant:l}=dt(e);return`${t}--variant-${l}`}),{colorClasses:c,colorStyles:a}=lr(y(()=>{const{variant:l,color:i}=dt(e);return{[["elevated","flat"].includes(l)?"background":"text"]:i}}));return{colorClasses:c,colorStyles:a,variantClasses:n}}const $f=ye({divided:Boolean,...At(),...ne(),...nt(),...tt(),...De(),..._e(),...Ee(),...Ft()},"v-btn-group"),Ji=W()({name:"VBtnGroup",props:$f(),setup(e,t){let{slots:n}=t;const{themeClasses:c}=Pe(e),{densityClasses:a}=gt(e),{borderClasses:l}=Lt(e),{elevationClasses:i}=ot(e),{roundedClasses:s}=Ue(e);Je({VBtn:{height:"auto",color:Y(e,"color"),density:Y(e,"density"),flat:!0,variant:Y(e,"variant")}}),X(()=>v(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},c.value,l.value,a.value,i.value,s.value,e.class],style:e.style},n))}}),Xc=ye({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Zc=ye({value:null,disabled:Boolean,selectedClass:String},"group-item");function Qc(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const c=rt("useGroupItem");if(!c)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const a=ht();Ke(Symbol.for(`${t.description}:id`),a);const l=Ie(t,null);if(!l){if(!n)return l;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const i=Y(e,"value"),s=y(()=>l.disabled.value||e.disabled);l.register({id:a,value:i,disabled:s},c),pt(()=>{l.unregister(a)});const r=y(()=>l.isSelected(a)),u=y(()=>r.value&&[l.selectedClass.value,e.selectedClass]);return ae(r,o=>{c.emit("group:selected",{value:o})}),{id:a,isSelected:r,toggle:()=>l.select(a,!r.value),select:o=>l.select(a,o),selectedClass:u,value:i,disabled:s,group:l}}function pc(e,t){let n=!1;const c=it([]),a=Ce(e,"modelValue",[],f=>f==null?[]:Mf(c,Tt(f)),f=>{const m=i0(c,f);return e.multiple?m:m[0]}),l=rt("useGroup");function i(f,m){const h=f,g=Symbol.for(`${t.description}:id`),b=ga(g,l==null?void 0:l.vnode).indexOf(m);b>-1?c.splice(b,0,h):c.push(h)}function s(f){if(n)return;r();const m=c.findIndex(h=>h.id===f);c.splice(m,1)}function r(){const f=c.find(m=>!m.disabled);f&&e.mandatory==="force"&&!a.value.length&&(a.value=[f.id])}mt(()=>{r()}),pt(()=>{n=!0});function u(f,m){const h=c.find(g=>g.id===f);if(!(m&&(h!=null&&h.disabled)))if(e.multiple){const g=a.value.slice(),S=g.findIndex(C=>C===f),b=~S;if(m=m??!b,b&&e.mandatory&&g.length<=1||!b&&e.max!=null&&g.length+1>e.max)return;S<0&&m?g.push(f):S>=0&&!m&&g.splice(S,1),a.value=g}else{const g=a.value.includes(f);if(e.mandatory&&g)return;a.value=m??!g?[f]:[]}}function o(f){if(e.multiple&&Ln('This method is not supported when using "multiple" prop'),a.value.length){const m=a.value[0],h=c.findIndex(b=>b.id===m);let g=(h+f)%c.length,S=c[g];for(;S.disabled&&g!==h;)g=(g+f)%c.length,S=c[g];if(S.disabled)return;a.value=[c[g].id]}else{const m=c.find(h=>!h.disabled);m&&(a.value=[m.id])}}const d={register:i,unregister:s,selected:a,select:u,disabled:Y(e,"disabled"),prev:()=>o(c.length-1),next:()=>o(1),isSelected:f=>a.value.includes(f),selectedClass:y(()=>e.selectedClass),items:y(()=>c),getItemIndex:f=>l0(c,f)};return Ke(t,d),d}function l0(e,t){const n=Mf(e,[t]);return n.length?e.findIndex(c=>c.id===n[0]):-1}function Mf(e,t){const n=[];for(let c=0;c<e.length;c++){const a=e[c];a.value!=null?t.find(l=>vc(l,a.value))!=null&&n.push(a.id):t.includes(c)&&n.push(a.id)}return n}function i0(e,t){const n=[];for(let c=0;c<e.length;c++){const a=e[c];t.includes(a.id)&&n.push(a.value!=null?a.value:c)}return n}const ir=Symbol.for("vuetify:v-btn-toggle"),s0=W()({name:"VBtnToggle",props:{...$f(),...Xc()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const{isSelected:c,next:a,prev:l,select:i,selected:s}=pc(e,ir);return X(()=>{const[r]=Ji.filterProps(e);return v(Ji,le({class:["v-btn-toggle",e.class]},r,{style:e.style}),{default:()=>{var u;return[(u=n.default)==null?void 0:u.call(n,{isSelected:c,next:a,prev:l,select:i,selected:s})]}})}),{next:a,prev:l,select:i}}});const r0=["x-small","small","default","large","x-large"],Vn=ye({size:{type:[String,Number],default:"default"}},"size");function Jc(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xn();return Us(()=>{let n,c;return gl(r0,e.size)?n=`${t}--size-${e.size}`:e.size&&(c={width:se(e.size),height:se(e.size)}),{sizeClasses:n,sizeStyles:c}})}const o0=ye({color:String,start:Boolean,end:Boolean,icon:pe,...ne(),...Vn(),..._e({tag:"i"}),...Ee()},"v-icon"),ze=W()({name:"VIcon",props:o0(),setup(e,t){let{attrs:n,slots:c}=t;const a=$(),{themeClasses:l}=Pe(e),{iconData:i}=V2(y(()=>a.value||e.icon)),{sizeClasses:s}=Jc(e),{textColorClasses:r,textColorStyles:u}=vt(Y(e,"color"));return X(()=>{var d,f;const o=(d=c.default)==null?void 0:d.call(c);return o&&(a.value=(f=o.filter(m=>m.type===Ma&&m.children&&typeof m.children=="string")[0])==null?void 0:f.children),v(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",l.value,s.value,r.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[s.value?void 0:{fontSize:se(e.size),height:se(e.size),width:se(e.size)},u.value,e.style],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>[o]})}),{}}});function sr(e,t){const n=$(),c=$(!1);if(Js){const a=new IntersectionObserver(l=>{e==null||e(l,a),c.value=!!l.find(i=>i.isIntersecting)},t);pt(()=>{a.disconnect()}),ae(n,(l,i)=>{i&&(a.unobserve(i),c.value=!1),l&&a.observe(l)},{flush:"post"})}return{intersectionRef:n,isIntersecting:c}}const rr=W()({name:"VProgressCircular",props:{bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...ne(),...Vn(),..._e({tag:"div"}),...Ee()},setup(e,t){let{slots:n}=t;const c=20,a=2*Math.PI*c,l=$(),{themeClasses:i}=Pe(e),{sizeClasses:s,sizeStyles:r}=Jc(e),{textColorClasses:u,textColorStyles:o}=vt(Y(e,"color")),{textColorClasses:d,textColorStyles:f}=vt(Y(e,"bgColor")),{intersectionRef:m,isIntersecting:h}=sr(),{resizeRef:g,contentRect:S}=sn(),b=y(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),C=y(()=>Number(e.width)),p=y(()=>r.value?Number(e.size):S.value?S.value.width:Math.max(C.value,32)),P=y(()=>c/(1-C.value/p.value)*2),j=y(()=>C.value/p.value*P.value),E=y(()=>se((100-b.value)/100*a));return Kt(()=>{m.value=l.value,g.value=l.value}),X(()=>v(e.tag,{ref:l,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":h.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},i.value,s.value,u.value,e.class],style:[r.value,o.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:b.value},{default:()=>[v("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${P.value} ${P.value}`},[v("circle",{class:["v-progress-circular__underlay",d.value],style:f.value,fill:"transparent",cx:"50%",cy:"50%",r:c,"stroke-width":j.value,"stroke-dasharray":a,"stroke-dashoffset":0},null),v("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:c,"stroke-width":j.value,"stroke-dasharray":a,"stroke-dashoffset":E.value},null)]),n.default&&v("div",{class:"v-progress-circular__content"},[n.default({value:b.value})])]})),{}}});const es=Symbol("rippleStop"),u0=80;function su(e,t){e.style.transform=t,e.style.webkitTransform=t}function ts(e){return e.constructor.name==="TouchEvent"}function Bf(e){return e.constructor.name==="KeyboardEvent"}const d0=function(e,t){var d;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},c=0,a=0;if(!Bf(e)){const f=t.getBoundingClientRect(),m=ts(e)?e.touches[e.touches.length-1]:e;c=m.clientX-f.left,a=m.clientY-f.top}let l=0,i=.3;(d=t._ripple)!=null&&d.circle?(i=.15,l=t.clientWidth/2,l=n.center?l:l+Math.sqrt((c-l)**2+(a-l)**2)/4):l=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const s=`${(t.clientWidth-l*2)/2}px`,r=`${(t.clientHeight-l*2)/2}px`,u=n.center?s:`${c-l}px`,o=n.center?r:`${a-l}px`;return{radius:l,scale:i,x:u,y:o,centerX:s,centerY:r}},kl={show(e,t){var m;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((m=t==null?void 0:t._ripple)!=null&&m.enabled))return;const c=document.createElement("span"),a=document.createElement("span");c.appendChild(a),c.className="v-ripple__container",n.class&&(c.className+=` ${n.class}`);const{radius:l,scale:i,x:s,y:r,centerX:u,centerY:o}=d0(e,t,n),d=`${l*2}px`;a.className="v-ripple__animation",a.style.width=d,a.style.height=d,t.appendChild(c);const f=window.getComputedStyle(t);f&&f.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),a.classList.add("v-ripple__animation--enter"),a.classList.add("v-ripple__animation--visible"),su(a,`translate(${s}, ${r}) scale3d(${i},${i},${i})`),a.dataset.activated=String(performance.now()),setTimeout(()=>{a.classList.remove("v-ripple__animation--enter"),a.classList.add("v-ripple__animation--in"),su(a,`translate(${u}, ${o}) scale3d(1,1,1)`)},0)},hide(e){var l;if(!((l=e==null?void 0:e._ripple)!=null&&l.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const c=performance.now()-Number(n.dataset.activated),a=Math.max(250-c,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var s;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((s=n.parentNode)==null?void 0:s.parentNode)===e&&e.removeChild(n.parentNode)},300)},a)}};function Rf(e){return typeof e>"u"||!!e}function Aa(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[es])){if(e[es]=!0,ts(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||Bf(e),n._ripple.class&&(t.class=n._ripple.class),ts(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{kl.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var c;(c=n==null?void 0:n._ripple)!=null&&c.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},u0)}else kl.show(e,n,t)}}function ru(e){e[es]=!0}function jt(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{jt(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),kl.hide(t)}}function Of(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let qa=!1;function Lf(e){!qa&&(e.keyCode===Po.enter||e.keyCode===Po.space)&&(qa=!0,Aa(e))}function Ff(e){qa=!1,jt(e)}function Nf(e){qa&&(qa=!1,jt(e))}function Df(e,t,n){const{value:c,modifiers:a}=t,l=Rf(c);if(l||kl.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=l,e._ripple.centered=a.center,e._ripple.circle=a.circle,Ni(c)&&c.class&&(e._ripple.class=c.class),l&&!n){if(a.stop){e.addEventListener("touchstart",ru,{passive:!0}),e.addEventListener("mousedown",ru);return}e.addEventListener("touchstart",Aa,{passive:!0}),e.addEventListener("touchend",jt,{passive:!0}),e.addEventListener("touchmove",Of,{passive:!0}),e.addEventListener("touchcancel",jt),e.addEventListener("mousedown",Aa),e.addEventListener("mouseup",jt),e.addEventListener("mouseleave",jt),e.addEventListener("keydown",Lf),e.addEventListener("keyup",Ff),e.addEventListener("blur",Nf),e.addEventListener("dragstart",jt,{passive:!0})}else!l&&n&&zf(e)}function zf(e){e.removeEventListener("mousedown",Aa),e.removeEventListener("touchstart",Aa),e.removeEventListener("touchend",jt),e.removeEventListener("touchmove",Of),e.removeEventListener("touchcancel",jt),e.removeEventListener("mouseup",jt),e.removeEventListener("mouseleave",jt),e.removeEventListener("keydown",Lf),e.removeEventListener("keyup",Ff),e.removeEventListener("dragstart",jt),e.removeEventListener("blur",Nf)}function f0(e,t){Df(e,t,!1)}function v0(e){delete e._ripple,zf(e)}function m0(e,t){if(t.value===t.oldValue)return;const n=Rf(t.oldValue);Df(e,t,n)}const Un={mounted:f0,unmounted:v0,updated:m0};const ou={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Wn=ye({location:String},"location");function Kn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:c}=wn();return{locationStyles:y(()=>{if(!e.location)return{};const{side:l,align:i}=zi(e.location.split(" ").length>1?e.location:`${e.location} center`,c.value);function s(u){return n?n(u):0}const r={};return l!=="center"&&(t?r[ou[l]]=`calc(100% - ${s(l)}px)`:r[l]=0),i!=="center"?t?r[ou[i]]=`calc(100% - ${s(i)}px)`:r[i]=0:(l==="center"?r.top=r.left="50%":r[{top:"left",bottom:"left",left:"top",right:"top"}[l]]="50%",r.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[l]),r})}}const or=W()({name:"VProgressLinear",props:{absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...ne(),...Wn({location:"top"}),...De(),..._e(),...Ee()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const c=Ce(e,"modelValue"),{isRtl:a}=wn(),{themeClasses:l}=Pe(e),{locationStyles:i}=Kn(e),{textColorClasses:s,textColorStyles:r}=vt(e,"color"),{backgroundColorClasses:u,backgroundColorStyles:o}=Ze(y(()=>e.bgColor||e.color)),{backgroundColorClasses:d,backgroundColorStyles:f}=Ze(e,"color"),{roundedClasses:m}=Ue(e),{intersectionRef:h,isIntersecting:g}=sr(),S=y(()=>parseInt(e.max,10)),b=y(()=>parseInt(e.height,10)),C=y(()=>parseFloat(e.bufferValue)/S.value*100),p=y(()=>parseFloat(c.value)/S.value*100),P=y(()=>a.value!==e.reverse),j=y(()=>e.indeterminate?"fade-transition":"slide-x-transition"),E=y(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function A(k){if(!h.value)return;const{left:x,right:V,width:I}=h.value.getBoundingClientRect(),w=P.value?I-k.clientX+(V-I):k.clientX-x;c.value=Math.round(w/I*S.value)}return X(()=>v(e.tag,{ref:h,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&g.value,"v-progress-linear--reverse":P.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},m.value,l.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?se(b.value):0,"--v-progress-linear-height":se(b.value),...i.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:p.value,onClick:e.clickable&&A},{default:()=>[e.stream&&v("div",{key:"stream",class:["v-progress-linear__stream",s.value],style:{...r.value,[P.value?"left":"right"]:se(-b.value),borderTop:`${se(b.value/2)} dotted`,opacity:E.value,top:`calc(50% - ${se(b.value/4)})`,width:se(100-C.value,"%"),"--v-progress-linear-stream-to":se(b.value*(P.value?1:-1))}},null),v("div",{class:["v-progress-linear__background",u.value],style:[o.value,{opacity:E.value,width:se(e.stream?C.value:100,"%")}]},null),v(ln,{name:j.value},{default:()=>[e.indeterminate?v("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(k=>v("div",{key:k,class:["v-progress-linear__indeterminate",k,d.value],style:f.value},null))]):v("div",{class:["v-progress-linear__determinate",d.value],style:[f.value,{width:se(p.value,"%")}]},null)]}),n.default&&v("div",{class:"v-progress-linear__content"},[n.default({value:p.value,buffer:C.value})])]})),{}}}),ur=ye({loading:[Boolean,String]},"loader");function Fl(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xn();return{loaderClasses:y(()=>({[`${t}--loading`]:e.loading}))}}function dr(e,t){var c;let{slots:n}=t;return v("div",{class:`${e.name}__loader`},[((c=n.default)==null?void 0:c.call(n,{color:e.color,isActive:e.active}))||v(or,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const h0=["static","relative","fixed","absolute","sticky"],ea=ye({position:{type:String,validator:e=>h0.includes(e)}},"position");function ta(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xn();return{positionClasses:y(()=>e.position?`${t}--${e.position}`:void 0)}}function Hf(){var e,t;return(t=(e=rt("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function Ra(e,t){const n=Ih("RouterLink"),c=y(()=>!!(e.href||e.to)),a=y(()=>(c==null?void 0:c.value)||Bo(t,"click")||Bo(e,"click"));if(typeof n=="string")return{isLink:c,isClickable:a,href:Y(e,"href")};const l=e.to?n.useLink(e):void 0;return{isLink:c,isClickable:a,route:l==null?void 0:l.route,navigate:l==null?void 0:l.navigate,isActive:l&&y(()=>{var i,s;return e.exact?(i=l.isExactActive)==null?void 0:i.value:(s=l.isActive)==null?void 0:s.value}),href:y(()=>e.to?l==null?void 0:l.route.value.href:e.href)}}const Oa=ye({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let vi=!1;function g0(e,t){let n=!1,c,a;Xe&&(Oe(()=>{window.addEventListener("popstate",l),c=e==null?void 0:e.beforeEach((i,s,r)=>{vi?n?t(r):r():setTimeout(()=>n?t(r):r()),vi=!0}),a=e==null?void 0:e.afterEach(()=>{vi=!1})}),It(()=>{window.removeEventListener("popstate",l),c==null||c(),a==null||a()}));function l(i){var s;(s=i.state)!=null&&s.replaced||(n=!0,setTimeout(()=>n=!1))}}function y0(e,t){ae(()=>{var n;return(n=e.isActive)==null?void 0:n.value},n=>{e.isLink.value&&n&&t&&Oe(()=>{t(!0)})},{immediate:!0})}const fr=ye({active:{type:Boolean,default:void 0},symbol:{type:null,default:ir},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:pe,appendIcon:pe,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},text:String,...At(),...ne(),...nt(),...Rt(),...tt(),...Zc(),...ur(),...Wn(),...ea(),...De(),...Oa(),...Vn(),..._e({tag:"button"}),...Ee(),...Ft({variant:"elevated"})},"v-btn"),bt=W()({name:"VBtn",directives:{Ripple:Un},props:fr(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:n,slots:c}=t;const{themeClasses:a}=Pe(e),{borderClasses:l}=Lt(e),{colorClasses:i,colorStyles:s,variantClasses:r}=bc(e),{densityClasses:u}=gt(e),{dimensionStyles:o}=Ot(e),{elevationClasses:d}=ot(e),{loaderClasses:f}=Fl(e),{locationStyles:m}=Kn(e),{positionClasses:h}=ta(e),{roundedClasses:g}=Ue(e),{sizeClasses:S,sizeStyles:b}=Jc(e),C=Qc(e,e.symbol,!1),p=Ra(e,n),P=y(()=>{var x;return e.active!==void 0?e.active:p.isLink.value?(x=p.isActive)==null?void 0:x.value:C==null?void 0:C.isSelected.value}),j=y(()=>(C==null?void 0:C.disabled.value)||e.disabled),E=y(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),A=y(()=>{if(e.value!==void 0)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function k(x){var V;j.value||((V=p.navigate)==null||V.call(p,x),C==null||C.toggle())}return y0(p,C==null?void 0:C.select),X(()=>{var N,Z;const x=p.isLink.value?"a":e.tag,V=!!(e.prependIcon||c.prepend),I=!!(e.appendIcon||c.append),w=!!(e.icon&&e.icon!==!0),M=(C==null?void 0:C.isSelected.value)&&(!p.isLink.value||((N=p.isActive)==null?void 0:N.value))||!C||((Z=p.isActive)==null?void 0:Z.value);return He(v(x,{type:x==="a"?void 0:"button",class:["v-btn",C==null?void 0:C.selectedClass.value,{"v-btn--active":P.value,"v-btn--block":e.block,"v-btn--disabled":j.value,"v-btn--elevated":E.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},a.value,l.value,M?i.value:void 0,u.value,d.value,f.value,h.value,g.value,S.value,r.value,e.class],style:[M?s.value:void 0,o.value,m.value,b.value,e.style],disabled:j.value||void 0,href:p.href.value,onClick:k,value:A.value},{default:()=>{var F;return[yc(!0,"v-btn"),!e.icon&&V&&v("span",{key:"prepend",class:"v-btn__prepend"},[c.prepend?v($e,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},c.prepend):v(ze,{key:"prepend-icon",icon:e.prependIcon},null)]),v("span",{class:"v-btn__content","data-no-activator":""},[!c.default&&w?v(ze,{key:"content-icon",icon:e.icon},null):v($e,{key:"content-defaults",disabled:!w,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var H;return[((H=c.default)==null?void 0:H.call(c))??e.text]}})]),!e.icon&&I&&v("span",{key:"append",class:"v-btn__append"},[c.append?v($e,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},c.append):v(ze,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&v("span",{key:"loader",class:"v-btn__loader"},[((F=c.loader)==null?void 0:F.call(c))??v(rr,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[Ct("ripple"),!j.value&&e.ripple,null]])}),{}}}),b0=W()({name:"VAppBarNavIcon",props:fr({icon:"$menu",variant:"text"}),setup(e,t){let{slots:n}=t;return X(()=>v(bt,le(e,{class:["v-app-bar-nav-icon"]}),n)),{}}}),p0=W()({name:"VToolbarItems",props:{...ne(),...Ft({variant:"text"})},setup(e,t){let{slots:n}=t;return Je({VBtn:{color:Y(e,"color"),height:"inherit",variant:Y(e,"variant")}}),X(()=>{var c;return v("div",{class:["v-toolbar-items",e.class],style:e.style},[(c=n.default)==null?void 0:c.call(n)])}),{}}}),k0=W()({name:"VAppBarTitle",props:Pf(),setup(e,t){let{slots:n}=t;return X(()=>v(ar,le(e,{class:"v-app-bar-title"}),n)),{}}});const Uf=Yt("v-alert-title"),S0=["success","info","warning","error"],C0=W()({name:"VAlert",props:{border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:pe,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>S0.includes(e)},...ne(),...nt(),...Rt(),...tt(),...Wn(),...ea(),...De(),..._e(),...Ee(),...Ft({variant:"flat"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{emit:n,slots:c}=t;const a=Ce(e,"modelValue"),l=y(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),i=y(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:s}=Pe(e),{colorClasses:r,colorStyles:u,variantClasses:o}=bc(i),{densityClasses:d}=gt(e),{dimensionStyles:f}=Ot(e),{elevationClasses:m}=ot(e),{locationStyles:h}=Kn(e),{positionClasses:g}=ta(e),{roundedClasses:S}=Ue(e),{textColorClasses:b,textColorStyles:C}=vt(Y(e,"borderColor")),{t:p}=Bt(),P=y(()=>({"aria-label":p(e.closeLabel),onClick(j){a.value=!1,n("click:close",j)}}));return()=>{const j=!!(c.prepend||l.value),E=!!(c.title||e.title),A=!!(e.text||c.text),k=!!(c.close||e.closable);return a.value&&v(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},s.value,r.value,d.value,m.value,g.value,S.value,o.value,e.class],style:[u.value,f.value,h.value,e.style],role:"alert"},{default:()=>{var x,V;return[yc(!1,"v-alert"),e.border&&v("div",{key:"border",class:["v-alert__border",b.value],style:C.value},null),j&&v("div",{key:"prepend",class:"v-alert__prepend"},[c.prepend?v($e,{key:"prepend-defaults",disabled:!l.value,defaults:{VIcon:{density:e.density,icon:l.value,size:e.prominent?44:28}}},c.prepend):v(ze,{key:"prepend-icon",density:e.density,icon:l.value,size:e.prominent?44:28},null)]),v("div",{class:"v-alert__content"},[E&&v(Uf,{key:"title"},{default:()=>{var I;return[((I=c.title)==null?void 0:I.call(c))??e.title]}}),A&&(((x=c.text)==null?void 0:x.call(c))??e.text),(V=c.default)==null?void 0:V.call(c)]),c.append&&v("div",{key:"append",class:"v-alert__append"},[c.append()]),k&&v("div",{key:"close",class:"v-alert__close"},[c.close?v($e,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var I;return[(I=c.close)==null?void 0:I.call(c,{props:P.value})]}}):v(bt,le({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},P.value),null)])]}})}}});function Wf(e){const{t}=Bt();function n(c){let{name:a}=c;const l={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[a],i=e[`onClick:${a}`],s=i&&l?t(`$vuetify.input.${l}`,e.label??""):void 0;return v(ze,{icon:e[`${a}Icon`],"aria-label":s,onClick:i},null)}return{InputIcon:n}}const na=W()({name:"VLabel",props:{text:String,clickable:Boolean,...ne(),...Ee()},setup(e,t){let{slots:n}=t;return X(()=>{var c;return v("label",{class:["v-label",{"v-label--clickable":e.clickable},e.class],style:e.style},[e.text,(c=n.default)==null?void 0:c.call(n)])}),{}}}),ua=W()({name:"VFieldLabel",props:{floating:Boolean,...ne()},setup(e,t){let{slots:n}=t;return X(()=>v(na,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},n)),{}}}),Nl=ye({focused:Boolean,"onUpdate:focused":an()},"focus");function Yn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xn();const n=Ce(e,"focused"),c=y(()=>({[`${t}--focused`]:n.value}));function a(){n.value=!0}function l(){n.value=!1}return{focusClasses:c,isFocused:n,focus:a,blur:l}}const _0=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],Dl=ye({appendInnerIcon:pe,bgColor:String,clearable:Boolean,clearIcon:{type:pe,default:"$clear"},active:Boolean,color:String,baseColor:String,dirty:Boolean,disabled:Boolean,error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:pe,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>_0.includes(e)},"onClick:clear":an(),"onClick:appendInner":an(),"onClick:prependInner":an(),...ne(),...ur(),...De(),...Ee()},"v-field"),La=W()({name:"VField",inheritAttrs:!1,props:{id:String,...Nl(),...Dl()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:n,emit:c,slots:a}=t;const{themeClasses:l}=Pe(e),{loaderClasses:i}=Fl(e),{focusClasses:s,isFocused:r,focus:u,blur:o}=Yn(e),{InputIcon:d}=Wf(e),{roundedClasses:f}=Ue(e),m=y(()=>e.dirty||e.active),h=y(()=>!e.singleLine&&!!(e.label||a.label)),g=ht(),S=y(()=>e.id||`input-${g}`),b=y(()=>`${S.value}-messages`),C=$(),p=$(),P=$(),{backgroundColorClasses:j,backgroundColorStyles:E}=Ze(Y(e,"bgColor")),{textColorClasses:A,textColorStyles:k}=vt(y(()=>e.error||e.disabled?void 0:m.value&&r.value?e.color:e.baseColor));ae(m,I=>{if(h.value){const w=C.value.$el,M=p.value.$el;requestAnimationFrame(()=>{const N=Ys(w),Z=M.getBoundingClientRect(),F=Z.x-N.x,H=Z.y-N.y-(N.height/2-Z.height/2),D=Z.width/.75,J=Math.abs(D-N.width)>1?{maxWidth:se(D)}:void 0,R=getComputedStyle(w),K=getComputedStyle(M),z=parseFloat(R.transitionDuration)*1e3||150,fe=parseFloat(K.getPropertyValue("--v-field-label-scale")),ue=K.getPropertyValue("color");w.style.visibility="visible",M.style.visibility="hidden",ic(w,{transform:`translate(${F}px, ${H}px) scale(${fe})`,color:ue,...J},{duration:z,easing:Ia,direction:I?"normal":"reverse"}).finished.then(()=>{w.style.removeProperty("visibility"),M.style.removeProperty("visibility")})})}},{flush:"post"});const x=y(()=>({isActive:m,isFocused:r,controlRef:P,blur:o,focus:u}));function V(I){I.target!==document.activeElement&&I.preventDefault()}return X(()=>{var F,H,D;const I=e.variant==="outlined",w=a["prepend-inner"]||e.prependInnerIcon,M=!!(e.clearable||a.clear),N=!!(a["append-inner"]||e.appendInnerIcon||M),Z=a.label?a.label({label:e.label,props:{for:S.value}}):e.label;return v("div",le({class:["v-field",{"v-field--active":m.value,"v-field--appended":N,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":w,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!Z,[`v-field--variant-${e.variant}`]:!0},l.value,j.value,s.value,i.value,f.value,e.class],style:[E.value,k.value,e.style],onClick:V},n),[v("div",{class:"v-field__overlay"},null),v(dr,{name:"v-field",active:!!e.loading,color:e.error?"error":e.color},{default:a.loader}),w&&v("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&v(d,{key:"prepend-icon",name:"prependInner"},null),(F=a["prepend-inner"])==null?void 0:F.call(a,x.value)]),v("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&h.value&&v(ua,{key:"floating-label",ref:p,class:[A.value],floating:!0,for:S.value},{default:()=>[Z]}),v(ua,{ref:C,for:S.value},{default:()=>[Z]}),(H=a.default)==null?void 0:H.call(a,{...x.value,props:{id:S.value,class:"v-field__input","aria-describedby":b.value},focus:u,blur:o})]),M&&v(cr,{key:"clear"},{default:()=>[He(v("div",{class:"v-field__clearable",onMousedown:J=>{J.preventDefault(),J.stopPropagation()}},[a.clear?a.clear():v(d,{name:"clear"},null)]),[[on,e.dirty]])]}),N&&v("div",{key:"append",class:"v-field__append-inner"},[(D=a["append-inner"])==null?void 0:D.call(a,x.value),e.appendInnerIcon&&v(d,{key:"append-icon",name:"appendInner"},null)]),v("div",{class:["v-field__outline",A.value]},[I&&v(me,null,[v("div",{class:"v-field__outline__start"},null),h.value&&v("div",{class:"v-field__outline__notch"},[v(ua,{ref:p,floating:!0,for:S.value},{default:()=>[Z]})]),v("div",{class:"v-field__outline__end"},null)]),["plain","underlined"].includes(e.variant)&&h.value&&v(ua,{ref:p,floating:!0,for:S.value},{default:()=>[Z]})])])}),{controlRef:P}}});function vr(e){const t=Object.keys(La.props).filter(n=>!Sb(n)&&n!=="class"&&n!=="style");return Wc(e,t)}const Kf=W()({name:"VMessages",props:{active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...ne(),...jn({transition:{component:nr,leaveAbsolute:!0,group:!0}})},setup(e,t){let{slots:n}=t;const c=y(()=>Tt(e.messages)),{textColorClasses:a,textColorStyles:l}=vt(y(()=>e.color));return X(()=>v(Ht,{transition:e.transition,tag:"div",class:["v-messages",a.value,e.class],style:[l.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&c.value.map((i,s)=>v("div",{class:"v-messages__message",key:`${s}-${c.value}`},[n.message?n.message({message:i}):i]))]})),{}}}),Yf=Symbol.for("vuetify:form"),x0=ye({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function w0(e){const t=Ce(e,"modelValue"),n=y(()=>e.disabled),c=y(()=>e.readonly),a=$(!1),l=$([]),i=$([]);async function s(){const o=[];let d=!0;i.value=[],a.value=!0;for(const f of l.value){const m=await f.validate();if(m.length>0&&(d=!1,o.push({id:f.id,errorMessages:m})),!d&&e.fastFail)break}return i.value=o,a.value=!1,{valid:d,errors:i.value}}function r(){l.value.forEach(o=>o.reset()),t.value=null}function u(){l.value.forEach(o=>o.resetValidation()),i.value=[],t.value=null}return ae(l,()=>{let o=0,d=0;const f=[];for(const m of l.value)m.isValid===!1?(d++,f.push({id:m.id,errorMessages:m.errorMessages})):m.isValid===!0&&o++;i.value=f,t.value=d>0?!1:o===l.value.length?!0:null},{deep:!0}),Ke(Yf,{register:o=>{let{id:d,validate:f,reset:m,resetValidation:h}=o;l.value.some(g=>g.id===d)&&Ln(`Duplicate input name "${d}"`),l.value.push({id:d,validate:f,reset:m,resetValidation:h,isValid:null,errorMessages:[]})},unregister:o=>{l.value=l.value.filter(d=>d.id!==o)},update:(o,d,f)=>{const m=l.value.find(h=>h.id===o);m&&(m.isValid=d,m.errorMessages=f)},isDisabled:n,isReadonly:c,isValidating:a,items:l,validateOn:Y(e,"validateOn")}),{errors:i,isDisabled:n,isReadonly:c,isValidating:a,items:l,validate:s,reset:r,resetValidation:u}}function zl(){return Ie(Yf,null)}const Gf=ye({disabled:Boolean,error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:Boolean,rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...Nl()},"validation");function Xf(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xn(),n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ht();const c=Ce(e,"modelValue"),a=y(()=>e.validationValue===void 0?c.value:e.validationValue),l=zl(),i=$([]),s=$(!0),r=y(()=>!!(Tt(c.value===""?null:c.value).length||Tt(a.value===""?null:a.value).length)),u=y(()=>!!(e.disabled||l!=null&&l.isDisabled.value)),o=y(()=>!!(e.readonly||l!=null&&l.isReadonly.value)),d=y(()=>e.errorMessages.length?Tt(e.errorMessages).slice(0,Math.max(0,+e.maxErrors)):i.value),f=y(()=>e.error||d.value.length?!1:e.rules.length&&s.value?null:!0),m=$(!1),h=y(()=>({[`${t}--error`]:f.value===!1,[`${t}--dirty`]:r.value,[`${t}--disabled`]:u.value,[`${t}--readonly`]:o.value})),g=y(()=>e.name??dt(n));Al(()=>{l==null||l.register({id:g.value,validate:p,reset:b,resetValidation:C})}),pt(()=>{l==null||l.unregister(g.value)});const S=y(()=>e.validateOn||(l==null?void 0:l.validateOn.value)||"input");mt(()=>l==null?void 0:l.update(g.value,f.value,d.value)),Nn(()=>S.value==="input",()=>{ae(a,()=>{if(a.value!=null)p();else if(e.focused){const P=ae(()=>e.focused,j=>{j||p(),P()})}})}),Nn(()=>S.value==="blur",()=>{ae(()=>e.focused,P=>{P||p()})}),ae(f,()=>{l==null||l.update(g.value,f.value,d.value)});function b(){C(),c.value=null}function C(){s.value=!0,i.value=[]}async function p(){const P=[];m.value=!0;for(const j of e.rules){if(P.length>=+(e.maxErrors??1))break;const A=await(typeof j=="function"?j:()=>j)(a.value);if(A!==!0){if(typeof A!="string"){console.warn(`${A} is not a valid value. Rule functions must return boolean true or a string.`);continue}P.push(A)}}return i.value=P,m.value=!1,s.value=!1,i.value}return{errorMessages:d,isDirty:r,isDisabled:u,isReadonly:o,isPristine:s,isValid:f,isValidating:m,reset:b,resetValidation:C,validate:p,validationClasses:h}}const In=ye({id:String,appendIcon:pe,prependIcon:pe,hideDetails:[Boolean,String],hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":an(),"onClick:append":an(),...ne(),...nt(),...Gf()},"v-input"),st=W()({name:"VInput",props:{...In()},emits:{"update:modelValue":e=>!0},setup(e,t){let{attrs:n,slots:c,emit:a}=t;const{densityClasses:l}=gt(e),{InputIcon:i}=Wf(e),s=ht(),r=y(()=>e.id||`input-${s}`),u=y(()=>`${r.value}-messages`),{errorMessages:o,isDirty:d,isDisabled:f,isReadonly:m,isPristine:h,isValid:g,isValidating:S,reset:b,resetValidation:C,validate:p,validationClasses:P}=Xf(e,"v-input",r),j=y(()=>({id:r,messagesId:u,isDirty:d,isDisabled:f,isReadonly:m,isPristine:h,isValid:g,isValidating:S,reset:b,resetValidation:C,validate:p})),E=y(()=>o.value.length>0?o.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages);return X(()=>{var I,w,M,N;const A=!!(c.prepend||e.prependIcon),k=!!(c.append||e.appendIcon),x=E.value.length>0,V=!e.hideDetails||e.hideDetails==="auto"&&(x||!!c.details);return v("div",{class:["v-input",`v-input--${e.direction}`,l.value,P.value,e.class],style:e.style},[A&&v("div",{key:"prepend",class:"v-input__prepend"},[(I=c.prepend)==null?void 0:I.call(c,j.value),e.prependIcon&&v(i,{key:"prepend-icon",name:"prepend"},null)]),c.default&&v("div",{class:"v-input__control"},[(w=c.default)==null?void 0:w.call(c,j.value)]),k&&v("div",{key:"append",class:"v-input__append"},[e.appendIcon&&v(i,{key:"append-icon",name:"append"},null),(M=c.append)==null?void 0:M.call(c,j.value)]),V&&v("div",{class:"v-input__details"},[v(Kf,{id:u.value,active:x,messages:E.value},{message:c.message}),(N=c.details)==null?void 0:N.call(c,j.value)])])}),{reset:b,resetValidation:C,validate:p}}});const Hl=W()({name:"VCounter",functional:!0,props:{active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...ne(),...jn({transition:{component:nr}})},setup(e,t){let{slots:n}=t;const c=y(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return X(()=>v(Ht,{transition:e.transition},{default:()=>[He(v("div",{class:["v-counter",e.class],style:e.style},[n.default?n.default({counter:c.value,max:e.max,value:e.value}):c.value]),[[on,e.active]])]})),{}}}),mi=Symbol("Forwarded refs");function hi(e,t){let n=e;for(;n;){const c=Reflect.getOwnPropertyDescriptor(n,t);if(c)return c;n=Object.getPrototypeOf(n)}}function Gt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),c=1;c<t;c++)n[c-1]=arguments[c];return e[mi]=n,new Proxy(e,{get(a,l){if(Reflect.has(a,l))return Reflect.get(a,l);if(!(typeof l=="symbol"||l.startsWith("__"))){for(const i of n)if(i.value&&Reflect.has(i.value,l)){const s=Reflect.get(i.value,l);return typeof s=="function"?s.bind(i.value):s}}},has(a,l){if(Reflect.has(a,l))return!0;if(typeof l=="symbol"||l.startsWith("__"))return!1;for(const i of n)if(i.value&&Reflect.has(i.value,l))return!0;return!1},getOwnPropertyDescriptor(a,l){var s;const i=Reflect.getOwnPropertyDescriptor(a,l);if(i)return i;if(!(typeof l=="symbol"||l.startsWith("__"))){for(const r of n){if(!r.value)continue;const u=hi(r.value,l)??("_"in r.value?hi((s=r.value._)==null?void 0:s.setupState,l):void 0);if(u)return u}for(const r of n){const u=r.value&&r.value[mi];if(!u)continue;const o=u.slice();for(;o.length;){const d=o.shift(),f=hi(d.value,l);if(f)return f;const m=d.value&&d.value[mi];m&&o.push(...m)}}}}})}const j0=["color","file","time","date","datetime-local","week","month"],Ul=ye({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"},modelModifiers:Object,...In(),...Dl()},"v-text-field"),fc=W()({name:"VTextField",directives:{Intersect:Ba},inheritAttrs:!1,props:Ul(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:n,emit:c,slots:a}=t;const l=Ce(e,"modelValue"),{isFocused:i,focus:s,blur:r}=Yn(e),u=y(()=>typeof e.counterValue=="function"?e.counterValue(l.value):(l.value??"").toString().length),o=y(()=>{if(n.maxlength)return n.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function d(j,E){var A,k;!e.autofocus||!j||(k=(A=E[0].target)==null?void 0:A.focus)==null||k.call(A)}const f=$(),m=$(),h=$(),g=y(()=>j0.includes(e.type)||e.persistentPlaceholder||i.value||e.active);function S(){var j;h.value!==document.activeElement&&((j=h.value)==null||j.focus()),i.value||s()}function b(j){c("mousedown:control",j),j.target!==h.value&&(S(),j.preventDefault())}function C(j){S(),c("click:control",j)}function p(j){j.stopPropagation(),S(),Oe(()=>{l.value=null,Ws(e["onClick:clear"],j)})}function P(j){var A;const E=j.target;if(l.value=E.value,(A=e.modelModifiers)!=null&&A.trim&&["text","search","password","tel","url"].includes(e.type)){const k=[E.selectionStart,E.selectionEnd];Oe(()=>{E.selectionStart=k[0],E.selectionEnd=k[1]})}}return X(()=>{const j=!!(a.counter||e.counter||e.counterValue),E=!!(j||a.details),[A,k]=mc(n),[{modelValue:x,...V}]=st.filterProps(e),[I]=vr(e);return v(st,le({ref:f,modelValue:l.value,"onUpdate:modelValue":w=>l.value=w,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)},e.class],style:e.style},A,V,{focused:i.value}),{...a,default:w=>{let{id:M,isDisabled:N,isDirty:Z,isReadonly:F,isValid:H}=w;return v(La,le({ref:m,onMousedown:b,onClick:C,"onClick:clear":p,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},I,{id:M.value,active:g.value||Z.value,dirty:Z.value||e.dirty,disabled:N.value,focused:i.value,error:H.value===!1}),{...a,default:D=>{let{props:{class:J,...R}}=D;const K=He(v("input",le({ref:h,value:l.value,onInput:P,autofocus:e.autofocus,readonly:F.value,disabled:N.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:S,onBlur:r},R,k),null),[[Ct("intersect"),{handler:d},null,{once:!0}]]);return v(me,null,[e.prefix&&v("span",{class:"v-text-field__prefix"},[e.prefix]),a.default?v("div",{class:J,"data-no-activator":""},[a.default(),K]):yn(K,{class:J}),e.suffix&&v("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:E?w=>{var M;return v(me,null,[(M=a.details)==null?void 0:M.call(a,w),j&&v(me,null,[v("span",null,null),v(Hl,{active:e.persistentCounter||i.value,value:u.value,max:o.value},a.counter)])])}:void 0})}),Gt({},f,m,h)}});const Zf=Symbol.for("vuetify:selection-control-group"),mr=ye({color:String,disabled:Boolean,error:Boolean,id:String,inline:Boolean,falseIcon:pe,trueIcon:pe,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,modelValue:null,type:String,valueComparator:{type:Function,default:vc},...Ee(),...nt()},"v-selection-control-group"),Qf=W()({name:"VSelectionControlGroup",props:{defaultsTarget:{type:String,default:"VSelectionControl"},...ne(),...mr()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const c=Ce(e,"modelValue"),a=ht(),l=y(()=>e.id||`v-selection-control-group-${a}`),i=y(()=>e.name||l.value),s=new Set;return Ke(Zf,{modelValue:c,forceUpdate:()=>{s.forEach(r=>r())},onForceUpdate:r=>{s.add(r),It(()=>{s.delete(r)})}}),Je({[e.defaultsTarget]:{color:Y(e,"color"),disabled:Y(e,"disabled"),density:Y(e,"density"),error:Y(e,"error"),inline:Y(e,"inline"),modelValue:c,multiple:y(()=>!!e.multiple||e.multiple==null&&Array.isArray(c.value)),name:i,falseIcon:Y(e,"falseIcon"),trueIcon:Y(e,"trueIcon"),readonly:Y(e,"readonly"),ripple:Y(e,"ripple"),type:Y(e,"type"),valueComparator:Y(e,"valueComparator")}}),X(()=>{var r;return v("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(r=n.default)==null?void 0:r.call(n)])}),{}}}),Wl=ye({label:String,trueValue:null,falseValue:null,value:null,...ne(),...mr()},"v-selection-control");function V0(e){const t=Ie(Zf,void 0),{densityClasses:n}=gt(e),c=Ce(e,"modelValue"),a=y(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),l=y(()=>e.falseValue!==void 0?e.falseValue:!1),i=y(()=>!!e.multiple||e.multiple==null&&Array.isArray(c.value)),s=y({get(){const d=t?t.modelValue.value:c.value;return i.value?d.some(f=>e.valueComparator(f,a.value)):e.valueComparator(d,a.value)},set(d){if(e.readonly)return;const f=d?a.value:l.value;let m=f;i.value&&(m=d?[...Tt(c.value),f]:Tt(c.value).filter(h=>!e.valueComparator(h,a.value))),t?t.modelValue.value=m:c.value=m}}),{textColorClasses:r,textColorStyles:u}=vt(y(()=>s.value&&!e.error&&!e.disabled?e.color:void 0)),o=y(()=>s.value?e.trueIcon:e.falseIcon);return{group:t,densityClasses:n,trueValue:a,falseValue:l,model:s,textColorClasses:r,textColorStyles:u,icon:o}}const Fc=W()({name:"VSelectionControl",directives:{Ripple:Un},inheritAttrs:!1,props:Wl(),emits:{"update:modelValue":e=>!0},setup(e,t){let{attrs:n,slots:c}=t;const{group:a,densityClasses:l,icon:i,model:s,textColorClasses:r,textColorStyles:u,trueValue:o}=V0(e),d=ht(),f=y(()=>e.id||`input-${d}`),m=$(!1),h=$(!1),g=$();a==null||a.onForceUpdate(()=>{g.value&&(g.value.checked=s.value)});function S(p){m.value=!0,(!Ki||Ki&&p.target.matches(":focus-visible"))&&(h.value=!0)}function b(){m.value=!1,h.value=!1}function C(p){e.readonly&&a&&Oe(()=>a.forceUpdate()),s.value=p.target.checked}return X(()=>{var E,A;const p=c.label?c.label({label:e.label,props:{for:f.value}}):e.label,[P,j]=mc(n);return v("div",le({class:["v-selection-control",{"v-selection-control--dirty":s.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":m.value,"v-selection-control--focus-visible":h.value,"v-selection-control--inline":e.inline},l.value,e.class]},P,{style:e.style}),[v("div",{class:["v-selection-control__wrapper",r.value],style:u.value},[(E=c.default)==null?void 0:E.call(c),He(v("div",{class:["v-selection-control__input"]},[i.value&&v(ze,{key:"icon",icon:i.value},null),v("input",le({ref:g,checked:s.value,disabled:e.disabled,id:f.value,onBlur:b,onFocus:S,onInput:C,"aria-disabled":e.readonly,type:e.type,value:o.value,name:e.name,"aria-checked":e.type==="checkbox"?s.value:void 0},j),null),(A=c.input)==null?void 0:A.call(c,{model:s,textColorClasses:r,textColorStyles:u,props:{onFocus:S,onBlur:b,id:f.value}})]),[[Ct("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),p&&v(na,{for:f.value,clickable:!0},{default:()=>[p]})])}),{isFocused:m,input:g}}}),Jf=ye({indeterminate:Boolean,indeterminateIcon:{type:pe,default:"$checkboxIndeterminate"},...Wl({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"v-checkbox-btn"),Nc=W()({name:"VCheckboxBtn",props:Jf(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,t){let{slots:n}=t;const c=Ce(e,"indeterminate"),a=Ce(e,"modelValue");function l(r){c.value&&(c.value=!1)}const i=y(()=>e.indeterminate?e.indeterminateIcon:e.falseIcon),s=y(()=>e.indeterminate?e.indeterminateIcon:e.trueIcon);return X(()=>v(Fc,le(e,{modelValue:a.value,"onUpdate:modelValue":[r=>a.value=r,l],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:i.value,trueIcon:s.value,"aria-checked":e.indeterminate?"mixed":void 0}),n)),{}}}),I0=W()({name:"VCheckbox",inheritAttrs:!1,props:{...In(),...un(Jf(),["inline"])},emits:{"update:focused":e=>!0},setup(e,t){let{attrs:n,slots:c}=t;const{isFocused:a,focus:l,blur:i}=Yn(e),s=ht(),r=y(()=>e.id||`checkbox-${s}`);return X(()=>{const[u,o]=mc(n),[d,f]=st.filterProps(e),[m,h]=Nc.filterProps(e);return v(st,le({class:["v-checkbox",e.class]},u,d,{id:r.value,focused:a.value,style:e.style}),{...c,default:g=>{let{id:S,messagesId:b,isDisabled:C,isReadonly:p}=g;return v(Nc,le(m,{id:S.value,"aria-describedby":b.value,disabled:C.value,readonly:p.value},o,{onFocus:l,onBlur:i}),c)}})}),{}}});const E0=ye({start:Boolean,end:Boolean,icon:pe,image:String,...ne(),...nt(),...De(),...Vn(),..._e(),...Ee(),...Ft({variant:"flat"})},"v-avatar"),Dn=W()({name:"VAvatar",props:E0(),setup(e,t){let{slots:n}=t;const{themeClasses:c}=Pe(e),{colorClasses:a,colorStyles:l,variantClasses:i}=bc(e),{densityClasses:s}=gt(e),{roundedClasses:r}=Ue(e),{sizeClasses:u,sizeStyles:o}=Jc(e);return X(()=>v(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},c.value,a.value,s.value,r.value,u.value,i.value,e.class],style:[l.value,o.value,e.style]},{default:()=>{var d;return[e.image?v(Gc,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?v(ze,{key:"icon",icon:e.icon},null):(d=n.default)==null?void 0:d.call(n),yc(!1,"v-avatar")]}})),{}}});const ev=Symbol.for("vuetify:v-chip-group"),A0=W()({name:"VChipGroup",props:{column:Boolean,filter:Boolean,valueComparator:{type:Function,default:vc},...ne(),...Xc({selectedClass:"v-chip--selected"}),..._e(),...Ee(),...Ft({variant:"tonal"})},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const{themeClasses:c}=Pe(e),{isSelected:a,select:l,next:i,prev:s,selected:r}=pc(e,ev);return Je({VChip:{color:Y(e,"color"),disabled:Y(e,"disabled"),filter:Y(e,"filter"),variant:Y(e,"variant")}}),X(()=>v(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},c.value,e.class],style:e.style},{default:()=>{var u;return[(u=n.default)==null?void 0:u.call(n,{isSelected:a,select:l,next:i,prev:s,selected:r.value})]}})),{}}}),Fa=W()({name:"VChip",directives:{Ripple:Un},props:{activeClass:String,appendAvatar:String,appendIcon:pe,closable:Boolean,closeIcon:{type:pe,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:pe,ripple:{type:Boolean,default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:an(),onClickOnce:an(),...At(),...ne(),...nt(),...tt(),...Zc(),...De(),...Oa(),...Vn(),..._e({tag:"span"}),...Ee(),...Ft({variant:"tonal"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,t){let{attrs:n,emit:c,slots:a}=t;const{t:l}=Bt(),{borderClasses:i}=Lt(e),{colorClasses:s,colorStyles:r,variantClasses:u}=bc(e),{densityClasses:o}=gt(e),{elevationClasses:d}=ot(e),{roundedClasses:f}=Ue(e),{sizeClasses:m}=Jc(e),{themeClasses:h}=Pe(e),g=Ce(e,"modelValue"),S=Qc(e,ev,!1),b=Ra(e,n),C=y(()=>e.link!==!1&&b.isLink.value),p=y(()=>!e.disabled&&e.link!==!1&&(!!S||e.link||b.isClickable.value)),P=y(()=>({"aria-label":l(e.closeLabel),onClick(A){g.value=!1,c("click:close",A)}}));function j(A){var k;c("click",A),p.value&&((k=b.navigate)==null||k.call(b,A),S==null||S.toggle())}function E(A){(A.key==="Enter"||A.key===" ")&&(A.preventDefault(),j(A))}return()=>{const A=b.isLink.value?"a":e.tag,k=!!(e.appendIcon||e.appendAvatar),x=!!(k||a.append),V=!!(a.close||e.closable),I=!!(a.filter||e.filter)&&S,w=!!(e.prependIcon||e.prependAvatar),M=!!(w||a.prepend),N=!S||S.isSelected.value;return g.value&&He(v(A,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":p.value,"v-chip--filter":I,"v-chip--pill":e.pill},h.value,i.value,N?s.value:void 0,o.value,d.value,f.value,m.value,u.value,S==null?void 0:S.selectedClass.value,e.class],style:[N?r.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:b.href.value,tabindex:p.value?0:void 0,onClick:j,onKeydown:p.value&&!C.value&&E},{default:()=>{var Z;return[yc(p.value,"v-chip"),I&&v(cr,{key:"filter"},{default:()=>[He(v("div",{class:"v-chip__filter"},[a.filter?He(v($e,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},null),[[Ct("slot"),a.filter,"default"]]):v(ze,{key:"filter-icon",icon:e.filterIcon},null)]),[[on,S.isSelected.value]])]}),M&&v("div",{key:"prepend",class:"v-chip__prepend"},[a.prepend?v($e,{key:"prepend-defaults",disabled:!w,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},a.prepend):v(me,null,[e.prependIcon&&v(ze,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&v(Dn,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),((Z=a.default)==null?void 0:Z.call(a,{isSelected:S==null?void 0:S.isSelected.value,selectedClass:S==null?void 0:S.selectedClass.value,select:S==null?void 0:S.select,toggle:S==null?void 0:S.toggle,value:S==null?void 0:S.value.value,disabled:e.disabled}))??e.text,x&&v("div",{key:"append",class:"v-chip__append"},[a.append?v($e,{key:"append-defaults",disabled:!k,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},a.append):v(me,null,[e.appendIcon&&v(ze,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&v(Dn,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),V&&v("div",le({key:"close",class:"v-chip__close"},P.value),[a.close?v($e,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},a.close):v(ze,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Ct("ripple"),p.value&&e.ripple,null]])}}});const tv=W()({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...ne(),...Ee()},setup(e,t){let{attrs:n}=t;const{themeClasses:c}=Pe(e),{textColorClasses:a,textColorStyles:l}=vt(Y(e,"color")),i=y(()=>{const s={};return e.length&&(s[e.vertical?"maxHeight":"maxWidth"]=se(e.length)),e.thickness&&(s[e.vertical?"borderRightWidth":"borderTopWidth"]=se(e.thickness)),s});return X(()=>v("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},c.value,a.value,e.class],style:[i.value,l.value,e.style],"aria-orientation":!n.role||n.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${n.role||"separator"}`},null)),{}}}),ns=Symbol.for("vuetify:list");function nv(){const e=Ie(ns,{hasPrepend:$(!1),updateHasPrepend:()=>null}),t={hasPrepend:$(!1),updateHasPrepend:n=>{n&&(t.hasPrepend.value=n)}};return Ke(ns,t),e}function cv(){return Ie(ns,null)}const q0={open:e=>{let{id:t,value:n,opened:c,parents:a}=e;if(n){const l=new Set;l.add(t);let i=a.get(t);for(;i!=null;)l.add(i),i=a.get(i);return l}else return c.delete(t),c},select:()=>null},av={open:e=>{let{id:t,value:n,opened:c,parents:a}=e;if(n){let l=a.get(t);for(c.add(t);l!=null&&l!==t;)c.add(l),l=a.get(l);return c}else c.delete(t);return c},select:()=>null},P0={open:av.open,select:e=>{let{id:t,value:n,opened:c,parents:a}=e;if(!n)return c;const l=[];let i=a.get(t);for(;i!=null;)l.push(i),i=a.get(i);return new Set(l)}},hr=e=>{const t={select:n=>{let{id:c,value:a,selected:l}=n;if(c=xe(c),e&&!a){const i=Array.from(l.entries()).reduce((s,r)=>{let[u,o]=r;return o==="on"?[...s,u]:s},[]);if(i.length===1&&i[0]===c)return l}return l.set(c,a?"on":"off"),l},in:(n,c,a)=>{let l=new Map;for(const i of n||[])l=t.select({id:i,value:!0,selected:new Map(l),children:c,parents:a});return l},out:n=>{const c=[];for(const[a,l]of n.entries())l==="on"&&c.push(a);return c}};return t},lv=e=>{const t=hr(e);return{select:c=>{let{selected:a,id:l,...i}=c;l=xe(l);const s=a.has(l)?new Map([[l,a.get(l)]]):new Map;return t.select({...i,id:l,selected:s})},in:(c,a,l)=>{let i=new Map;return c!=null&&c.length&&(i=t.in(c.slice(0,1),a,l)),i},out:(c,a,l)=>t.out(c,a,l)}},T0=e=>{const t=hr(e);return{select:c=>{let{id:a,selected:l,children:i,...s}=c;return a=xe(a),i.has(a)?l:t.select({id:a,selected:l,children:i,...s})},in:t.in,out:t.out}},$0=e=>{const t=lv(e);return{select:c=>{let{id:a,selected:l,children:i,...s}=c;return a=xe(a),i.has(a)?l:t.select({id:a,selected:l,children:i,...s})},in:t.in,out:t.out}},M0=e=>{const t={select:n=>{let{id:c,value:a,selected:l,children:i,parents:s}=n;c=xe(c);const r=new Map(l),u=[c];for(;u.length;){const d=u.shift();l.set(d,a?"on":"off"),i.has(d)&&u.push(...i.get(d))}let o=s.get(c);for(;o;){const d=i.get(o),f=d.every(h=>l.get(h)==="on"),m=d.every(h=>!l.has(h)||l.get(h)==="off");l.set(o,f?"on":m?"off":"indeterminate"),o=s.get(o)}return e&&!a&&Array.from(l.entries()).reduce((f,m)=>{let[h,g]=m;return g==="on"?[...f,h]:f},[]).length===0?r:l},in:(n,c,a)=>{let l=new Map;for(const i of n||[])l=t.select({id:i,value:!0,selected:new Map(l),children:c,parents:a});return l},out:(n,c)=>{const a=[];for(const[l,i]of n.entries())i==="on"&&!c.has(l)&&a.push(l);return a}};return t},Pa=Symbol.for("vuetify:nested"),iv={id:$(),root:{register:()=>null,unregister:()=>null,parents:$(new Map),children:$(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:$(new Set),selected:$(new Map),selectedValues:$([])}},B0=ye({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),R0=e=>{let t=!1;const n=$(new Map),c=$(new Map),a=Ce(e,"opened",e.opened,d=>new Set(d),d=>[...d.values()]),l=y(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return $0(e.mandatory);case"leaf":return T0(e.mandatory);case"independent":return hr(e.mandatory);case"single-independent":return lv(e.mandatory);case"classic":default:return M0(e.mandatory)}}),i=y(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return P0;case"single":return q0;case"multiple":default:return av}}),s=Ce(e,"selected",e.selected,d=>l.value.in(d,n.value,c.value),d=>l.value.out(d,n.value,c.value));pt(()=>{t=!0});function r(d){const f=[];let m=d;for(;m!=null;)f.unshift(m),m=c.value.get(m);return f}const u=rt("nested"),o={id:$(),root:{opened:a,selected:s,selectedValues:y(()=>{const d=[];for(const[f,m]of s.value.entries())m==="on"&&d.push(f);return d}),register:(d,f,m)=>{f&&d!==f&&c.value.set(d,f),m&&n.value.set(d,[]),f!=null&&n.value.set(f,[...n.value.get(f)||[],d])},unregister:d=>{if(t)return;n.value.delete(d);const f=c.value.get(d);if(f){const m=n.value.get(f)??[];n.value.set(f,m.filter(h=>h!==d))}c.value.delete(d),a.value.delete(d)},open:(d,f,m)=>{u.emit("click:open",{id:d,value:f,path:r(d),event:m});const h=i.value.open({id:d,value:f,opened:new Set(a.value),children:n.value,parents:c.value,event:m});h&&(a.value=h)},openOnSelect:(d,f,m)=>{const h=i.value.select({id:d,value:f,selected:new Map(s.value),opened:new Set(a.value),children:n.value,parents:c.value,event:m});h&&(a.value=h)},select:(d,f,m)=>{u.emit("click:select",{id:d,value:f,path:r(d),event:m});const h=l.value.select({id:d,value:f,selected:new Map(s.value),children:n.value,parents:c.value,event:m});h&&(s.value=h),o.root.openOnSelect(d,f,m)},children:n,parents:c}};return Ke(Pa,o),o.root},sv=(e,t)=>{const n=Ie(Pa,iv),c=Symbol(ht()),a=y(()=>e.value??c),l={...n,id:a,open:(i,s)=>n.root.open(a.value,i,s),openOnSelect:(i,s)=>n.root.openOnSelect(a.value,i,s),isOpen:y(()=>n.root.opened.value.has(a.value)),parent:y(()=>n.root.parents.value.get(a.value)),select:(i,s)=>n.root.select(a.value,i,s),isSelected:y(()=>n.root.selected.value.get(xe(a.value))==="on"),isIndeterminate:y(()=>n.root.selected.value.get(a.value)==="indeterminate"),isLeaf:y(()=>!n.root.children.value.get(a.value)),isGroupActivator:n.isGroupActivator};return!n.isGroupActivator&&n.root.register(a.value,n.id.value,t),pt(()=>{!n.isGroupActivator&&n.root.unregister(a.value)}),t&&Ke(Pa,l),l},O0=()=>{const e=Ie(Pa,iv);Ke(Pa,{...e,isGroupActivator:!0})},L0=Mt({name:"VListGroupActivator",setup(e,t){let{slots:n}=t;return O0(),()=>{var c;return(c=n.default)==null?void 0:c.call(n)}}}),F0=ye({activeColor:String,color:String,collapseIcon:{type:pe,default:"$collapse"},expandIcon:{type:pe,default:"$expand"},prependIcon:pe,appendIcon:pe,fluid:Boolean,subgroup:Boolean,value:null,...ne(),..._e()},"v-list-group"),cs=W()({name:"VListGroup",props:{title:String,...F0()},setup(e,t){let{slots:n}=t;const{isOpen:c,open:a,id:l}=sv(Y(e,"value"),!0),i=y(()=>`v-list-group--id-${String(l.value)}`),s=cv(),{isBooted:r}=gc();function u(m){a(!c.value,m)}const o=y(()=>({onClick:u,class:"v-list-group__header",id:i.value})),d=y(()=>c.value?e.collapseIcon:e.expandIcon),f=y(()=>({VListItem:{active:c.value,activeColor:e.activeColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&d.value,appendIcon:e.appendIcon||!e.subgroup&&d.value,title:e.title,value:e.value}}));return X(()=>v(e.tag,{class:["v-list-group",{"v-list-group--prepend":s==null?void 0:s.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":c.value},e.class],style:e.style},{default:()=>[n.activator&&v($e,{defaults:f.value},{default:()=>[v(L0,null,{default:()=>[n.activator({props:o.value,isOpen:c.value})]})]}),v(Ht,{transition:{component:Ll},disabled:!r.value},{default:()=>{var m;return[He(v("div",{class:"v-list-group__items",role:"group","aria-labelledby":i.value},[(m=n.default)==null?void 0:m.call(n)]),[[on,c.value]])]}})]})),{}}});const rv=Yt("v-list-item-subtitle"),ov=Yt("v-list-item-title"),kn=W()({name:"VListItem",directives:{Ripple:Un},props:{active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:pe,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:pe,ripple:{type:Boolean,default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:an(),onClickOnce:an(),...At(),...ne(),...nt(),...Rt(),...tt(),...De(),...Oa(),..._e(),...Ee(),...Ft({variant:"text"})},emits:{click:e=>!0},setup(e,t){let{attrs:n,slots:c,emit:a}=t;const l=Ra(e,n),i=y(()=>e.value??l.href.value),{select:s,isSelected:r,isIndeterminate:u,isGroupActivator:o,root:d,parent:f,openOnSelect:m}=sv(i,!1),h=cv(),g=y(()=>{var H;return e.active!==!1&&(e.active||((H=l.isActive)==null?void 0:H.value)||r.value)}),S=y(()=>e.link!==!1&&l.isLink.value),b=y(()=>!e.disabled&&e.link!==!1&&(e.link||l.isClickable.value||e.value!=null&&!!h)),C=y(()=>e.rounded||e.nav),p=y(()=>({color:g.value?e.activeColor??e.color:e.color,variant:e.variant}));ae(()=>{var H;return(H=l.isActive)==null?void 0:H.value},H=>{H&&f.value!=null&&d.open(f.value,!0),H&&m(H)},{immediate:!0});const{themeClasses:P}=Pe(e),{borderClasses:j}=Lt(e),{colorClasses:E,colorStyles:A,variantClasses:k}=bc(p),{densityClasses:x}=gt(e),{dimensionStyles:V}=Ot(e),{elevationClasses:I}=ot(e),{roundedClasses:w}=Ue(C),M=y(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),N=y(()=>({isActive:g.value,select:s,isSelected:r.value,isIndeterminate:u.value}));function Z(H){var D;a("click",H),!(o||!b.value)&&((D=l.navigate)==null||D.call(l,H),e.value!=null&&s(!r.value,H))}function F(H){(H.key==="Enter"||H.key===" ")&&(H.preventDefault(),Z(H))}return X(()=>{const H=S.value?"a":e.tag,D=!h||r.value||g.value,J=c.title||e.title,R=c.subtitle||e.subtitle,K=!!(e.appendAvatar||e.appendIcon),z=!!(K||c.append),fe=!!(e.prependAvatar||e.prependIcon),ue=!!(fe||c.prepend);return h==null||h.updateHasPrepend(ue),He(v(H,{class:["v-list-item",{"v-list-item--active":g.value,"v-list-item--disabled":e.disabled,"v-list-item--link":b.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!ue&&(h==null?void 0:h.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&g.value},P.value,j.value,D?E.value:void 0,x.value,I.value,M.value,w.value,k.value,e.class],style:[D?A.value:void 0,V.value,e.style],href:l.href.value,tabindex:b.value?0:void 0,onClick:Z,onKeydown:b.value&&!S.value&&F},{default:()=>{var B;return[yc(b.value||g.value,"v-list-item"),ue&&v("div",{key:"prepend",class:"v-list-item__prepend"},[c.prepend?v($e,{key:"prepend-defaults",disabled:!fe,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var T;return[(T=c.prepend)==null?void 0:T.call(c,N.value)]}}):v(me,null,[e.prependAvatar&&v(Dn,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&v(ze,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),v("div",{class:"v-list-item__content","data-no-activator":""},[J&&v(ov,{key:"title"},{default:()=>{var T;return[((T=c.title)==null?void 0:T.call(c,{title:e.title}))??e.title]}}),R&&v(rv,{key:"subtitle"},{default:()=>{var T;return[((T=c.subtitle)==null?void 0:T.call(c,{subtitle:e.subtitle}))??e.subtitle]}}),(B=c.default)==null?void 0:B.call(c,N.value)]),z&&v("div",{key:"append",class:"v-list-item__append"},[c.append?v($e,{key:"append-defaults",disabled:!K,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var T;return[(T=c.append)==null?void 0:T.call(c,N.value)]}}):v(me,null,[e.appendIcon&&v(ze,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&v(Dn,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])]}}),[[Ct("ripple"),b.value&&e.ripple]])}),{}}}),uv=W()({name:"VListSubheader",props:{color:String,inset:Boolean,sticky:Boolean,title:String,...ne(),..._e()},setup(e,t){let{slots:n}=t;const{textColorClasses:c,textColorStyles:a}=vt(Y(e,"color"));return X(()=>{const l=!!(n.default||e.title);return v(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},c.value,e.class],style:[{textColorStyles:a},e.style]},{default:()=>{var i;return[l&&v("div",{class:"v-list-subheader__text"},[((i=n.default)==null?void 0:i.call(n))??e.title])]}})}),{}}}),dv=W()({name:"VListChildren",props:{items:Array},setup(e,t){let{slots:n}=t;return nv(),()=>{var c,a;return((c=n.default)==null?void 0:c.call(n))??((a=e.items)==null?void 0:a.map(l=>{var m,h;let{children:i,props:s,type:r,raw:u}=l;if(r==="divider")return((m=n.divider)==null?void 0:m.call(n,{props:s}))??v(tv,s,null);if(r==="subheader")return((h=n.subheader)==null?void 0:h.call(n,{props:s}))??v(uv,s,{default:n.subheader});const o={subtitle:n.subtitle?g=>{var S;return(S=n.subtitle)==null?void 0:S.call(n,{...g,item:u})}:void 0,prepend:n.prepend?g=>{var S;return(S=n.prepend)==null?void 0:S.call(n,{...g,item:u})}:void 0,append:n.append?g=>{var S;return(S=n.append)==null?void 0:S.call(n,{...g,item:u})}:void 0,default:n.default?g=>{var S;return(S=n.default)==null?void 0:S.call(n,{...g,item:u})}:void 0,title:n.title?g=>{var S;return(S=n.title)==null?void 0:S.call(n,{...g,item:u})}:void 0},[d,f]=cs.filterProps(s);return i?v(cs,le({value:s==null?void 0:s.value},d),{activator:g=>{let{props:S}=g;return n.header?n.header({props:{...s,...S}}):v(kn,le(s,S),o)},default:()=>v(dv,{items:i},n)}):n.item?n.item(s):v(kn,s,o)}))}}}),fv=ye({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"item");function Ic(e,t){const n=tn(t,e.itemTitle,t),c=e.returnObject?t:tn(t,e.itemValue,n),a=tn(t,e.itemChildren),l=e.itemProps===!0?typeof t=="object"&&t!=null&&!Array.isArray(t)?"children"in t?Wc(t,["children"])[1]:t:void 0:tn(t,e.itemProps),i={title:n,value:c,...l};return{title:String(i.title??""),value:i.value,props:i,children:Array.isArray(a)?vv(e,a):void 0,raw:t}}function vv(e,t){const n=[];for(const c of t)n.push(Ic(e,c));return n}function gr(e){const t=y(()=>vv(e,e.items));function n(a){return a.map(l=>t.value.find(s=>vc(l,s.value))??Ic(e,l))}function c(a){return a.map(l=>{let{props:i}=l;return i.value})}return{items:t,transformIn:n,transformOut:c}}function N0(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function D0(e,t){const n=tn(t,e.itemType,"item"),c=N0(t)?t:tn(t,e.itemTitle),a=tn(t,e.itemValue,void 0),l=tn(t,e.itemChildren),i=e.itemProps===!0?Wc(t,["children"])[1]:tn(t,e.itemProps),s={title:c,value:a,...i};return{type:n,title:s.title,value:s.value,props:s,children:n==="item"&&l?mv(e,l):void 0,raw:t}}function mv(e,t){const n=[];for(const c of t)n.push(D0(e,c));return n}function z0(e){return{items:y(()=>mv(e,e.items))}}const Kl=W()({name:"VList",props:{activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...B0({selectStrategy:"single-leaf",openStrategy:"list"}),...At(),...ne(),...nt(),...Rt(),...tt(),itemType:{type:String,default:"type"},...fv(),...De(),..._e(),...Ee(),...Ft({variant:"text"})},emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,t){let{slots:n}=t;const{items:c}=z0(e),{themeClasses:a}=Pe(e),{backgroundColorClasses:l,backgroundColorStyles:i}=Ze(Y(e,"bgColor")),{borderClasses:s}=Lt(e),{densityClasses:r}=gt(e),{dimensionStyles:u}=Ot(e),{elevationClasses:o}=ot(e),{roundedClasses:d}=Ue(e),{open:f,select:m}=R0(e),h=y(()=>e.lines?`v-list--${e.lines}-line`:void 0),g=Y(e,"activeColor"),S=Y(e,"color");nv(),Je({VListGroup:{activeColor:g,color:S},VListItem:{activeClass:Y(e,"activeClass"),activeColor:g,color:S,density:Y(e,"density"),disabled:Y(e,"disabled"),lines:Y(e,"lines"),nav:Y(e,"nav"),variant:Y(e,"variant")}});const b=$(!1),C=$();function p(k){b.value=!0}function P(k){b.value=!1}function j(k){var x;!b.value&&!(k.relatedTarget&&((x=C.value)!=null&&x.contains(k.relatedTarget)))&&A()}function E(k){if(C.value){if(k.key==="ArrowDown")A("next");else if(k.key==="ArrowUp")A("prev");else if(k.key==="Home")A("first");else if(k.key==="End")A("last");else return;k.preventDefault()}}function A(k){if(C.value)return Qd(C.value,k)}return X(()=>v(e.tag,{ref:C,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},a.value,l.value,s.value,r.value,o.value,h.value,d.value,e.class],style:[i.value,u.value,e.style],role:"listbox","aria-activedescendant":void 0,onFocusin:p,onFocusout:P,onFocus:j,onKeydown:E},{default:()=>[v(dv,{items:c.value},n)]})),{open:f,select:m,focus:A}}}),H0=Yt("v-list-img"),U0=W()({name:"VListItemAction",props:{start:Boolean,end:Boolean,...ne(),..._e()},setup(e,t){let{slots:n}=t;return X(()=>v(e.tag,{class:["v-list-item-action",{"v-list-item-action--start":e.start,"v-list-item-action--end":e.end},e.class],style:e.style},n)),{}}}),W0=W()({name:"VListItemMedia",props:{start:Boolean,end:Boolean,...ne(),..._e()},setup(e,t){let{slots:n}=t;return X(()=>v(e.tag,{class:["v-list-item-media",{"v-list-item-media--start":e.start,"v-list-item-media--end":e.end},e.class],style:e.style},n)),{}}});const hv=ye({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function gv(e,t){const n={},c=a=>()=>{if(!Xe)return Promise.resolve(!0);const l=a==="openDelay";return n.closeDelay&&window.clearTimeout(n.closeDelay),delete n.closeDelay,n.openDelay&&window.clearTimeout(n.openDelay),delete n.openDelay,new Promise(i=>{const s=parseInt(e[a]??0,10);n[a]=window.setTimeout(()=>{t==null||t(l),i(l)},s)})};return{runCloseDelay:c("closeDelay"),runOpenDelay:c("openDelay")}}const as=Symbol.for("vuetify:v-menu"),K0=ye({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...hv()},"v-overlay-activator");function Y0(e,t){let{isActive:n,isTop:c}=t;const a=$();let l=!1,i=!1,s=!0;const r=y(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),u=y(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!r.value),{runOpenDelay:o,runCloseDelay:d}=gv(e,p=>{p===(e.openOnHover&&l||r.value&&i)&&!(e.openOnHover&&n.value&&!c.value)&&(n.value!==p&&(s=!0),n.value=p)}),f={click:p=>{p.stopPropagation(),a.value=p.currentTarget||p.target,n.value=!n.value},mouseenter:p=>{var P;(P=p.sourceCapabilities)!=null&&P.firesTouchEvents||(l=!0,a.value=p.currentTarget||p.target,o())},mouseleave:p=>{l=!1,d()},focus:p=>{Ki&&!p.target.matches(":focus-visible")||(i=!0,p.stopPropagation(),a.value=p.currentTarget||p.target,o())},blur:p=>{i=!1,p.stopPropagation(),d()}},m=y(()=>{const p={};return u.value&&(p.click=f.click),e.openOnHover&&(p.mouseenter=f.mouseenter,p.mouseleave=f.mouseleave),r.value&&(p.focus=f.focus,p.blur=f.blur),p}),h=y(()=>{const p={};if(e.openOnHover&&(p.mouseenter=()=>{l=!0,o()},p.mouseleave=()=>{l=!1,d()}),e.closeOnContentClick){const P=Ie(as,null);p.click=()=>{n.value=!1,P==null||P.closeParents()}}return p}),g=y(()=>{const p={};return e.openOnHover&&(p.mouseenter=()=>{s&&(l=!0,s=!1,o())},p.mouseleave=()=>{l=!1,d()}),p});ae(c,p=>{p&&(e.openOnHover&&!l&&(!r.value||!i)||r.value&&!i&&(!e.openOnHover||!l))&&(n.value=!1)});const S=$();Kt(()=>{S.value&&Oe(()=>{const p=S.value;a.value=gb(p)?p.$el:p})});const b=rt("useActivator");let C;return ae(()=>!!e.activator,p=>{p&&Xe?(C=ks(),C.run(()=>{G0(e,b,{activatorEl:a,activatorEvents:m})})):C&&C.stop()},{flush:"post",immediate:!0}),It(()=>{C==null||C.stop()}),{activatorEl:a,activatorRef:S,activatorEvents:m,contentEvents:h,scrimEvents:g}}function G0(e,t,n){let{activatorEl:c,activatorEvents:a}=n;ae(()=>e.activator,(r,u)=>{if(u&&r!==u){const o=s(u);o&&i(o)}r&&Oe(()=>l())},{immediate:!0}),ae(()=>e.activatorProps,()=>{l()}),It(()=>{i()});function l(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s(),u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;r&&(Object.entries(a.value).forEach(o=>{let[d,f]=o;r.addEventListener(d,f)}),Object.keys(u).forEach(o=>{u[o]==null?r.removeAttribute(o):r.setAttribute(o,u[o])}))}function i(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:s(),u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;r&&(Object.entries(a.value).forEach(o=>{let[d,f]=o;r.removeEventListener(d,f)}),Object.keys(u).forEach(o=>{r.removeAttribute(o)}))}function s(){var o,d;let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,u;if(r)if(r==="parent"){let f=(d=(o=t==null?void 0:t.proxy)==null?void 0:o.$el)==null?void 0:d.parentNode;for(;f.hasAttribute("data-no-activator");)f=f.parentNode;u=f}else typeof r=="string"?u=document.querySelector(r):"$el"in r?u=r.$el:u=r;return c.value=(u==null?void 0:u.nodeType)===Node.ELEMENT_NODE?u:null,c.value}}const Yl=ye({eager:Boolean},"lazy");function yr(e,t){const n=$(!1),c=y(()=>n.value||e.eager||t.value);ae(t,()=>n.value=!0);function a(){e.eager||(n.value=!1)}return{isBooted:n,hasContent:c,onAfterLeave:a}}function gi(e,t){return{x:e.x+t.x,y:e.y+t.y}}function X0(e,t){return{x:e.x-t.x,y:e.y-t.y}}function uu(e,t){if(e.side==="top"||e.side==="bottom"){const{side:n,align:c}=e,a=c==="left"?0:c==="center"?t.width/2:c==="right"?t.width:c,l=n==="top"?0:n==="bottom"?t.height:n;return gi({x:a,y:l},t)}else if(e.side==="left"||e.side==="right"){const{side:n,align:c}=e,a=n==="left"?0:n==="right"?t.width:n,l=c==="top"?0:c==="center"?t.height/2:c==="bottom"?t.height:c;return gi({x:a,y:l},t)}return gi({x:t.width/2,y:t.height/2},t)}const yv={static:J0,connected:tp},Z0=ye({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in yv},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"v-overlay-location-strategies");function Q0(e,t){const n=$({}),c=$();Xe&&(Nn(()=>!!(t.isActive.value&&e.locationStrategy),l=>{var i,s;ae(()=>e.locationStrategy,l),It(()=>{c.value=void 0}),typeof e.locationStrategy=="function"?c.value=(i=e.locationStrategy(t,e,n))==null?void 0:i.updateLocation:c.value=(s=yv[e.locationStrategy](t,e,n))==null?void 0:s.updateLocation}),window.addEventListener("resize",a,{passive:!0}),It(()=>{window.removeEventListener("resize",a),c.value=void 0}));function a(l){var i;(i=c.value)==null||i.call(c,l)}return{contentStyles:n,updateLocation:c}}function J0(){}function ep(e,t){const n=Ys(e);return t?n.x+=parseFloat(e.style.right||0):n.x-=parseFloat(e.style.left||0),n.y-=parseFloat(e.style.top||0),n}function tp(e,t,n){zb(e.activatorEl.value)&&Object.assign(n.value,{position:"fixed"});const{preferredAnchor:a,preferredOrigin:l}=Us(()=>{const h=zi(t.location,e.isRtl.value),g=t.origin==="overlap"?h:t.origin==="auto"?ri(h):zi(t.origin,e.isRtl.value);return h.side===g.side&&h.align===oi(g).align?{preferredAnchor:Ro(h),preferredOrigin:Ro(g)}:{preferredAnchor:h,preferredOrigin:g}}),[i,s,r,u]=["minWidth","minHeight","maxWidth","maxHeight"].map(h=>y(()=>{const g=parseFloat(t[h]);return isNaN(g)?1/0:g})),o=y(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const h=t.offset.split(" ").map(parseFloat);return h.length<2&&h.push(0),h}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let d=!1;const f=new ResizeObserver(()=>{d&&m()});ae([e.activatorEl,e.contentEl],(h,g)=>{let[S,b]=h,[C,p]=g;C&&f.unobserve(C),S&&f.observe(S),p&&f.unobserve(p),b&&f.observe(b)},{immediate:!0}),It(()=>{f.disconnect()});function m(){if(d=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>d=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const h=e.activatorEl.value.getBoundingClientRect(),g=ep(e.contentEl.value,e.isRtl.value),S=bl(e.contentEl.value),b=12;S.length||(S.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(g.x+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),g.y+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const C=S.reduce((I,w)=>{const M=w.getBoundingClientRect(),N=new Tc({x:w===document.documentElement?0:M.x,y:w===document.documentElement?0:M.y,width:w.clientWidth,height:w.clientHeight});return I?new Tc({x:Math.max(I.left,N.left),y:Math.max(I.top,N.top),width:Math.min(I.right,N.right)-Math.max(I.left,N.left),height:Math.min(I.bottom,N.bottom)-Math.max(I.top,N.top)}):N},void 0);C.x+=b,C.y+=b,C.width-=b*2,C.height-=b*2;let p={anchor:a.value,origin:l.value};function P(I){const w=new Tc(g),M=uu(I.anchor,h),N=uu(I.origin,w);let{x:Z,y:F}=X0(M,N);switch(I.anchor.side){case"top":F-=o.value[0];break;case"bottom":F+=o.value[0];break;case"left":Z-=o.value[0];break;case"right":Z+=o.value[0];break}switch(I.anchor.align){case"top":F-=o.value[1];break;case"bottom":F+=o.value[1];break;case"left":Z-=o.value[1];break;case"right":Z+=o.value[1];break}return w.x+=Z,w.y+=F,w.width=Math.min(w.width,r.value),w.height=Math.min(w.height,u.value),{overflows:Lo(w,C),x:Z,y:F}}let j=0,E=0;const A={x:0,y:0},k={x:!1,y:!1};let x=-1;for(;;){if(x++>10){Ui("Infinite loop detected in connectedLocationStrategy");break}const{x:I,y:w,overflows:M}=P(p);j+=I,E+=w,g.x+=I,g.y+=w;{const N=Oo(p.anchor),Z=M.x.before||M.x.after,F=M.y.before||M.y.after;let H=!1;if(["x","y"].forEach(D=>{if(D==="x"&&Z&&!k.x||D==="y"&&F&&!k.y){const J={anchor:{...p.anchor},origin:{...p.origin}},R=D==="x"?N==="y"?oi:ri:N==="y"?ri:oi;J.anchor=R(J.anchor),J.origin=R(J.origin);const{overflows:K}=P(J);(K[D].before<=M[D].before&&K[D].after<=M[D].after||K[D].before+K[D].after<(M[D].before+M[D].after)/2)&&(p=J,H=k[D]=!0)}}),H)continue}M.x.before&&(j+=M.x.before,g.x+=M.x.before),M.x.after&&(j-=M.x.after,g.x-=M.x.after),M.y.before&&(E+=M.y.before,g.y+=M.y.before),M.y.after&&(E-=M.y.after,g.y-=M.y.after);{const N=Lo(g,C);A.x=C.width-N.x.before-N.x.after,A.y=C.height-N.y.before-N.y.after,j+=N.x.before,g.x+=N.x.before,E+=N.y.before,g.y+=N.y.before}break}const V=Oo(p.anchor);return Object.assign(n.value,{"--v-overlay-anchor-origin":`${p.anchor.side} ${p.anchor.align}`,transformOrigin:`${p.origin.side} ${p.origin.align}`,top:se(yi(E)),left:e.isRtl.value?void 0:se(yi(j)),right:e.isRtl.value?se(yi(-j)):void 0,minWidth:se(V==="y"?Math.min(i.value,h.width):i.value),maxWidth:se(du(ft(A.x,i.value===1/0?0:i.value,r.value))),maxHeight:se(du(ft(A.y,s.value===1/0?0:s.value,u.value)))}),{available:A,contentBox:g}}return ae(()=>[a.value,l.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>m()),Oe(()=>{const h=m();if(!h)return;const{available:g,contentBox:S}=h;S.height>g.y&&requestAnimationFrame(()=>{m(),requestAnimationFrame(()=>{m()})})}),{updateLocation:m}}function yi(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function du(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ls=!0;const Sl=[];function np(e){!ls||Sl.length?(Sl.push(e),is()):(ls=!1,e(),is())}let fu=-1;function is(){cancelAnimationFrame(fu),fu=requestAnimationFrame(()=>{const e=Sl.shift();e&&e(),Sl.length?is():ls=!0})}const rl={none:null,close:lp,block:ip,reposition:sp},cp=ye({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in rl}},"v-overlay-scroll-strategies");function ap(e,t){if(!Xe)return;let n;Kt(async()=>{n==null||n.stop(),t.isActive.value&&e.scrollStrategy&&(n=ks(),await Oe(),n.active&&n.run(()=>{var c;typeof e.scrollStrategy=="function"?e.scrollStrategy(t,e,n):(c=rl[e.scrollStrategy])==null||c.call(rl,t,e,n)}))}),It(()=>{n==null||n.stop()})}function lp(e){function t(n){e.isActive.value=!1}bv(e.activatorEl.value??e.contentEl.value,t)}function ip(e,t){var i;const n=(i=e.root.value)==null?void 0:i.offsetParent,c=[...new Set([...bl(e.activatorEl.value,t.contained?n:void 0),...bl(e.contentEl.value,t.contained?n:void 0)])].filter(s=>!s.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,l=(s=>Qs(s)&&s)(n||document.documentElement);l&&e.root.value.classList.add("v-overlay--scroll-blocked"),c.forEach((s,r)=>{s.style.setProperty("--v-body-scroll-x",se(-s.scrollLeft)),s.style.setProperty("--v-body-scroll-y",se(-s.scrollTop)),s.style.setProperty("--v-scrollbar-offset",se(a)),s.classList.add("v-overlay-scroll-blocked")}),It(()=>{c.forEach((s,r)=>{const u=parseFloat(s.style.getPropertyValue("--v-body-scroll-x")),o=parseFloat(s.style.getPropertyValue("--v-body-scroll-y"));s.style.removeProperty("--v-body-scroll-x"),s.style.removeProperty("--v-body-scroll-y"),s.style.removeProperty("--v-scrollbar-offset"),s.classList.remove("v-overlay-scroll-blocked"),s.scrollLeft=-u,s.scrollTop=-o}),l&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function sp(e,t,n){let c=!1,a=-1,l=-1;function i(s){np(()=>{var o,d;const r=performance.now();(d=(o=e.updateLocation).value)==null||d.call(o,s),c=(performance.now()-r)/(1e3/60)>2})}l=(typeof requestIdleCallback>"u"?s=>s():requestIdleCallback)(()=>{n.run(()=>{bv(e.activatorEl.value??e.contentEl.value,s=>{c?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{i(s)})})):i(s)})})}),It(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(l),cancelAnimationFrame(a)})}function bv(e,t){const n=[document,...bl(e)];n.forEach(c=>{c.addEventListener("scroll",t,{passive:!0})}),It(()=>{n.forEach(c=>{c.removeEventListener("scroll",t)})})}function pv(){if(!Xe)return $(!1);const{ssr:e}=hc();if(e){const t=$(!1);return mt(()=>{t.value=!0}),t}else return $(!0)}function Na(){const t=rt("useScopeId").vnode.scopeId;return{scopeId:t?{[t]:""}:void 0}}const vu=Symbol.for("vuetify:stack"),ra=it([]);function rp(e,t,n){const c=rt("useStack"),a=!n,l=Ie(vu,void 0),i=it({activeChildren:new Set});Ke(vu,i);const s=$(+t.value);Nn(e,()=>{var d;const o=(d=ra.at(-1))==null?void 0:d[1];s.value=o?o+10:+t.value,a&&ra.push([c.uid,s.value]),l==null||l.activeChildren.add(c.uid),It(()=>{if(a){const f=xe(ra).findIndex(m=>m[0]===c.uid);ra.splice(f,1)}l==null||l.activeChildren.delete(c.uid)})});const r=$(!0);a&&Kt(()=>{var d;const o=((d=ra.at(-1))==null?void 0:d[0])===c.uid;setTimeout(()=>r.value=o)});const u=y(()=>!i.activeChildren.size);return{globalTop:$a(r),localTop:u,stackStyles:y(()=>({zIndex:s.value}))}}function op(e){return{teleportTarget:y(()=>{const n=e.value;if(n===!0||!Xe)return;const c=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(c==null)return;let a=c.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",c.appendChild(a)),a})}}function up(){return!0}function kv(e,t,n){if(!e||Sv(e,n)===!1)return!1;const c=vf(t);if(typeof ShadowRoot<"u"&&c instanceof ShadowRoot&&c.host===e.target)return!1;const a=(typeof n.value=="object"&&n.value.include||(()=>[]))();return a.push(t),!a.some(l=>l==null?void 0:l.contains(e.target))}function Sv(e,t){return(typeof t.value=="object"&&t.value.closeConditional||up)(e)}function dp(e,t,n){const c=typeof n.value=="function"?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&kv(e,t,n)&&setTimeout(()=>{Sv(e,n)&&c&&c(e)},0)}function mu(e,t){const n=vf(e);t(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&t(n)}const Cv={mounted(e,t){const n=a=>dp(a,e,t),c=a=>{e._clickOutside.lastMousedownWasOutside=kv(a,e,t)};mu(e,a=>{a.addEventListener("click",n,!0),a.addEventListener("mousedown",c,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:c}},unmounted(e,t){e._clickOutside&&(mu(e,n=>{var l;if(!n||!((l=e._clickOutside)!=null&&l[t.instance.$.uid]))return;const{onClick:c,onMousedown:a}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",c,!0),n.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[t.instance.$.uid])}};function fp(e){const{modelValue:t,color:n,...c}=e;return v(ln,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&v("div",le({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},c),null)]})}const Da=ye({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3},...K0(),...ne(),...Rt(),...Yl(),...Z0(),...cp(),...Ee(),...jn()},"v-overlay"),Sn=W()({name:"VOverlay",directives:{ClickOutside:Cv},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Da()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,t){let{slots:n,attrs:c,emit:a}=t;const l=Ce(e,"modelValue"),i=y({get:()=>l.value,set:J=>{J&&e.disabled||(l.value=J)}}),{teleportTarget:s}=op(y(()=>e.attach||e.contained)),{themeClasses:r}=Pe(e),{rtlClasses:u,isRtl:o}=wn(),{hasContent:d,onAfterLeave:f}=yr(e,i),m=Ze(y(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:h,localTop:g,stackStyles:S}=rp(i,Y(e,"zIndex"),e._disableGlobalStack),{activatorEl:b,activatorRef:C,activatorEvents:p,contentEvents:P,scrimEvents:j}=Y0(e,{isActive:i,isTop:g}),{dimensionStyles:E}=Ot(e),A=pv(),{scopeId:k}=Na();ae(()=>e.disabled,J=>{J&&(i.value=!1)});const x=$(),V=$(),{contentStyles:I,updateLocation:w}=Q0(e,{isRtl:o,contentEl:V,activatorEl:b,isActive:i});ap(e,{root:x,contentEl:V,activatorEl:b,isActive:i,updateLocation:w});function M(J){a("click:outside",J),e.persistent?D():i.value=!1}function N(){return i.value&&h.value}Xe&&ae(i,J=>{J?window.addEventListener("keydown",Z):window.removeEventListener("keydown",Z)},{immediate:!0});function Z(J){J.key==="Escape"&&h.value&&(e.persistent?D():i.value=!1)}const F=Hf();Nn(()=>e.closeOnBack,()=>{g0(F,J=>{h.value&&i.value?(J(!1),e.persistent?D():i.value=!1):J()})});const H=$();ae(()=>i.value&&(e.absolute||e.contained)&&s.value==null,J=>{if(J){const R=hf(x.value);R&&R!==document.scrollingElement&&(H.value=R.scrollTop)}});function D(){e.noClickAnimation||V.value&&ic(V.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:Ia})}return X(()=>{var J;return v(me,null,[(J=n.activator)==null?void 0:J.call(n,{isActive:i.value,props:le({ref:C},Ql(p.value),e.activatorProps)}),A.value&&v(Yh,{disabled:!s.value,to:s.value},{default:()=>[d.value&&v("div",le({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":i.value,"v-overlay--contained":e.contained},r.value,u.value,e.class],style:[S.value,{top:se(H.value)},e.style],ref:x},k,c),[v(fp,le({color:m,modelValue:i.value&&!!e.scrim},Ql(j.value)),null),v(Ht,{appear:!0,persisted:!0,transition:e.transition,target:b.value,onAfterLeave:()=>{f(),a("afterLeave")}},{default:()=>{var R;return[He(v("div",le({ref:V,class:["v-overlay__content",e.contentClass],style:[E.value,I.value]},Ql(P.value),e.contentProps),[(R=n.default)==null?void 0:R.call(n,{isActive:i})]),[[on,i.value],[Ct("click-outside"),{handler:M,closeConditional:N,include:()=>[b.value]}]])]}})])]})])}),{activatorEl:b,animateClick:D,contentEl:V,globalTop:h,localTop:g,updateLocation:w}}}),Gl=W()({name:"VMenu",props:{id:String,...un(Da({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:Ol}}),["absolute"])},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const c=Ce(e,"modelValue"),{scopeId:a}=Na(),l=ht(),i=y(()=>e.id||`v-menu-${l}`),s=$(),r=Ie(as,null),u=$(0);Ke(as,{register(){++u.value},unregister(){--u.value},closeParents(){setTimeout(()=>{u.value||(c.value=!1,r==null||r.closeParents())},40)}}),ae(c,f=>{f?r==null||r.register():r==null||r.unregister()});function o(){r==null||r.closeParents()}const d=y(()=>le({"aria-haspopup":"menu","aria-expanded":String(c.value),"aria-owns":i.value},e.activatorProps));return X(()=>{const[f]=Sn.filterProps(e);return v(Sn,le({ref:s,class:["v-menu",e.class],style:e.style},f,{modelValue:c.value,"onUpdate:modelValue":m=>c.value=m,absolute:!0,activatorProps:d.value,"onClick:outside":o},a),{activator:n.activator,default:function(){for(var m=arguments.length,h=new Array(m),g=0;g<m;g++)h[g]=arguments[g];return v($e,{root:!0},{default:()=>{var S;return[(S=n.default)==null?void 0:S.call(n,...h)]}})}})}),Gt({id:i,ΨopenChildren:u},s)}}),br=ye({chips:Boolean,closableChips:Boolean,eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:pe,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,valueComparator:{type:Function,default:vc},...fv({itemChildren:!1})},"v-select"),vp=W()({name:"VSelect",props:{...br(),...un(Ul({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...jn({transition:{component:Ol}})},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,t){let{slots:n}=t;const{t:c}=Bt(),a=$(),l=$(),i=Ce(e,"menu"),s=y({get:()=>i.value,set:I=>{var w;i.value&&!I&&((w=l.value)!=null&&w.ΨopenChildren)||(i.value=I)}}),{items:r,transformIn:u,transformOut:o}=gr(e),d=Ce(e,"modelValue",[],I=>u(Tt(I)),I=>{const w=o(I);return e.multiple?w:w[0]??null}),f=zl(),m=y(()=>d.value.map(I=>r.value.find(w=>e.valueComparator(w.value,I.value))||I)),h=y(()=>m.value.map(I=>I.props.value)),g=$(!1);let S="",b;const C=y(()=>e.hideSelected?r.value.filter(I=>!m.value.some(w=>w===I)):r.value),p=$();function P(I){e.openOnClear&&(s.value=!0)}function j(){e.hideNoData&&!r.value.length||e.readonly||f!=null&&f.isReadonly.value||(s.value=!s.value)}function E(I){var F,H,D,J;if(e.readonly||f!=null&&f.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(I.key)&&I.preventDefault(),["Enter","ArrowDown"," "].includes(I.key)&&(s.value=!0),["Escape","Tab"].includes(I.key)&&(s.value=!1),I.key==="ArrowDown"?(F=p.value)==null||F.focus("next"):I.key==="ArrowUp"?(H=p.value)==null||H.focus("prev"):I.key==="Home"?(D=p.value)==null||D.focus("first"):I.key==="End"&&((J=p.value)==null||J.focus("last"));const w=1e3;function M(R){const K=R.key.length===1,z=!R.ctrlKey&&!R.metaKey&&!R.altKey;return K&&z}if(e.multiple||!M(I))return;const N=performance.now();N-b>w&&(S=""),S+=I.key.toLowerCase(),b=N;const Z=r.value.find(R=>R.title.toLowerCase().startsWith(S));Z!==void 0&&(d.value=[Z])}function A(I){if(e.multiple){const w=h.value.findIndex(M=>e.valueComparator(M,I.value));if(w===-1)d.value=[...d.value,I];else{const M=[...d.value];M.splice(w,1),d.value=M}}else d.value=[I],s.value=!1}function k(I){var w;(w=p.value)!=null&&w.$el.contains(I.relatedTarget)||(s.value=!1)}function x(I){g.value=!0}function V(I){var w;I.relatedTarget==null&&((w=a.value)==null||w.focus())}return X(()=>{const I=!!(e.chips||n.chip),w=!!(!e.hideNoData||C.value.length||n.prepend||n.append||n["no-data"]),M=d.value.length>0,[N]=fc.filterProps(e),Z=M||!g.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return v(fc,le({ref:a},N,{modelValue:d.value.map(F=>F.props.value).join(", "),"onUpdate:modelValue":F=>{F==null&&(d.value=[])},focused:g.value,"onUpdate:focused":F=>g.value=F,validationValue:d.externalValue,dirty:M,class:["v-select",{"v-select--active-menu":s.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":d.value.length},e.class],style:e.style,appendInnerIcon:e.menuIcon,readonly:!0,placeholder:Z,"onClick:clear":P,"onMousedown:control":j,onBlur:k,onKeydown:E}),{...n,default:()=>v(me,null,[v(Gl,le({ref:l,modelValue:s.value,"onUpdate:modelValue":F=>s.value=F,activator:"parent",contentClass:"v-select__content",eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition},e.menuProps),{default:()=>[w&&v(Kl,{ref:p,selected:h.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:F=>F.preventDefault(),onFocusin:x,onFocusout:V},{default:()=>{var F,H,D;return[!C.value.length&&!e.hideNoData&&(((F=n["no-data"])==null?void 0:F.call(n))??v(kn,{title:c(e.noDataText)},null)),(H=n["prepend-item"])==null?void 0:H.call(n),C.value.map((J,R)=>{var K;return n.item?(K=n.item)==null?void 0:K.call(n,{item:J,index:R,props:le(J.props,{onClick:()=>A(J)})}):v(kn,le({key:R},J.props,{onClick:()=>A(J)}),{prepend:z=>{let{isSelected:fe}=z;return v(me,null,[e.multiple&&!e.hideSelected?v(Nc,{modelValue:fe,ripple:!1,tabindex:"-1"},null):void 0,J.props.prependIcon&&v(ze,{icon:J.props.prependIcon},null)])}})}),(D=n["append-item"])==null?void 0:D.call(n)]}})]}),m.value.map((F,H)=>{var R;function D(K){K.stopPropagation(),K.preventDefault(),A(F)}const J={"onClick:close":D,onMousedown(K){K.preventDefault(),K.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0};return v("div",{key:F.value,class:"v-select__selection"},[I?n.chip?v($e,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:F.title}}},{default:()=>{var K;return[(K=n.chip)==null?void 0:K.call(n,{item:F,index:H,props:J})]}}):v(Fa,le({key:"chip",closable:e.closableChips,size:"small",text:F.title},J),null):((R=n.selection)==null?void 0:R.call(n,{item:F,index:H}))??v("span",{class:"v-select__selection-text"},[F.title,e.multiple&&H<m.value.length-1&&v("span",{class:"v-select__selection-comma"},[lt(",")])])])})])})}),Gt({isFocused:g,menu:s,select:A},a)}}),mp=(e,t,n)=>e==null||t==null?-1:e.toString().toLocaleLowerCase().indexOf(t.toString().toLocaleLowerCase()),_v=ye({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function hp(e,t,n){var s;const c=[],a=(n==null?void 0:n.default)??mp,l=n!=null&&n.filterKeys?Tt(n.filterKeys):!1,i=Object.keys((n==null?void 0:n.customKeyFilter)??{}).length;if(!(e!=null&&e.length))return c;e:for(let r=0;r<e.length;r++){const u=e[r],o={},d={};let f=-1;if(t&&!(n!=null&&n.noFilter)){if(typeof u=="object"){const g=l||Object.keys(u);for(const S of g){const b=tn(u,S,u),C=(s=n==null?void 0:n.customKeyFilter)==null?void 0:s[S];if(f=C?C(b,t,u):a(b,t,u),f!==-1&&f!==!1)C?o[S]=f:d[S]=f;else if((n==null?void 0:n.filterMode)==="every")continue e}}else f=a(u,t,u),f!==-1&&f!==!1&&(d.title=f);const m=Object.keys(d).length,h=Object.keys(o).length;if(!m&&!h||(n==null?void 0:n.filterMode)==="union"&&h!==i&&!m||(n==null?void 0:n.filterMode)==="intersection"&&(h!==i||!m))continue}c.push({index:r,matches:{...d,...o}})}return c}function xv(e,t,n,c){const a=y(()=>typeof(n==null?void 0:n.value)!="string"&&typeof(n==null?void 0:n.value)!="number"?"":String(n.value)),l=$([]),i=$(new Map);Kt(()=>{l.value=[],i.value=new Map;const r=dt(t);hp(r,a.value,{customKeyFilter:e.customKeyFilter,default:e.customFilter,filterKeys:dt(c==null?void 0:c.filterKeys)??e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}).forEach(o=>{let{index:d,matches:f}=o;const m=r[d];l.value.push(m),i.value.set(m.value,f)})});function s(r){return i.value.get(r.value)}return{filteredItems:l,filteredMatches:i,getMatches:s}}function gp(e,t,n){if(t==null)return e;if(Array.isArray(t))throw new Error("Multiple matches is not implemented");return typeof t=="number"&&~t?v(me,null,[v("span",{class:"v-autocomplete__unmask"},[e.substr(0,t)]),v("span",{class:"v-autocomplete__mask"},[e.substr(t,n)]),v("span",{class:"v-autocomplete__unmask"},[e.substr(t+n)])]):e}const yp=W()({name:"VAutocomplete",props:{search:String,..._v({filterKeys:["title"]}),...br(),...un(Ul({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...jn({transition:!1})},emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,t){let{slots:n}=t;const{t:c}=Bt(),a=$(),l=$(!1),i=$(!0),s=$(),r=Ce(e,"menu"),u=y({get:()=>r.value,set:R=>{var K;r.value&&!R&&((K=s.value)!=null&&K.ΨopenChildren)||(r.value=R)}}),o=$(-1),d=y(()=>{var R;return(R=a.value)==null?void 0:R.color}),{items:f,transformIn:m,transformOut:h}=gr(e),{textColorClasses:g,textColorStyles:S}=vt(d),b=Ce(e,"search",""),C=Ce(e,"modelValue",[],R=>m(Tt(R)),R=>{const K=h(R);return e.multiple?K:K[0]??null}),p=zl(),{filteredItems:P,getMatches:j}=xv(e,f,y(()=>i.value?void 0:b.value)),E=y(()=>C.value.map(R=>f.value.find(K=>e.valueComparator(K.value,R.value))||R)),A=y(()=>e.hideSelected?P.value.filter(R=>!E.value.some(K=>K.value===R.value)):P.value),k=y(()=>E.value.map(R=>R.props.value)),x=y(()=>E.value[o.value]),V=$();function I(R){e.openOnClear&&(u.value=!0),b.value=""}function w(){e.hideNoData&&!f.value.length||e.readonly||p!=null&&p.isReadonly.value||(u.value=!0)}function M(R){var fe,ue,B,T;if(e.readonly||p!=null&&p.isReadonly.value)return;const K=a.value.selectionStart,z=k.value.length;if((o.value>-1||["Enter","ArrowDown","ArrowUp"].includes(R.key))&&R.preventDefault(),["Enter","ArrowDown"].includes(R.key)&&(u.value=!0),["Escape"].includes(R.key)&&(u.value=!1),["Enter","Escape","Tab"].includes(R.key)&&(i.value=!0),R.key==="ArrowDown"?(fe=V.value)==null||fe.focus("next"):R.key==="ArrowUp"&&((ue=V.value)==null||ue.focus("prev")),!!e.multiple){if(["Backspace","Delete"].includes(R.key)){if(o.value<0){R.key==="Backspace"&&!b.value&&(o.value=z-1);return}const O=o.value;x.value&&J(x.value),o.value=O>=z-1?z-2:O}if(R.key==="ArrowLeft"){if(o.value<0&&K>0)return;const O=o.value>-1?o.value-1:z-1;E.value[O]?o.value=O:(o.value=-1,a.value.setSelectionRange((B=b.value)==null?void 0:B.length,(T=b.value)==null?void 0:T.length))}if(R.key==="ArrowRight"){if(o.value<0)return;const O=o.value+1;E.value[O]?o.value=O:(o.value=-1,a.value.setSelectionRange(0,0))}}}function N(R){b.value=R.target.value}function Z(){l.value&&(i.value=!0)}function F(R){l.value=!0}function H(R){var K;R.relatedTarget==null&&((K=a.value)==null||K.focus())}const D=$(!1);function J(R){if(e.multiple){const K=k.value.findIndex(z=>e.valueComparator(z,R.value));if(K===-1)C.value=[...C.value,R];else{const z=[...C.value];z.splice(K,1),C.value=z}}else C.value=[R],D.value=!0,n.selection||(b.value=R.title),u.value=!1,i.value=!0,Oe(()=>D.value=!1)}return ae(l,R=>{var K;R?(D.value=!0,b.value=e.multiple||n.selection?"":String(((K=E.value.at(-1))==null?void 0:K.props.title)??""),i.value=!0,Oe(()=>D.value=!1)):(!e.multiple&&!b.value&&(C.value=[]),u.value=!1,b.value="")}),ae(b,R=>{!l.value||D.value||(R&&(u.value=!0),i.value=!R)}),X(()=>{const R=!!(e.chips||n.chip),K=!!(!e.hideNoData||A.value.length||n.prepend||n.append||n["no-data"]),z=C.value.length>0,[fe]=fc.filterProps(e);return v(fc,le({ref:a},fe,{modelValue:b.value,"onUpdate:modelValue":ue=>{ue==null&&(C.value=[])},focused:l.value,"onUpdate:focused":ue=>l.value=ue,validationValue:C.externalValue,dirty:z,onInput:N,class:["v-autocomplete",{"v-autocomplete--active-menu":u.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selecting-index":o.value>-1,[`v-autocomplete--${e.multiple?"multiple":"single"}`]:!0,"v-autocomplete--selection-slot":!!n.selection},e.class],style:e.style,appendInnerIcon:e.menuIcon,readonly:e.readonly,placeholder:z?void 0:e.placeholder,"onClick:clear":I,"onMousedown:control":w,onKeydown:M}),{...n,default:()=>v(me,null,[v(Gl,le({ref:s,modelValue:u.value,"onUpdate:modelValue":ue=>u.value=ue,activator:"parent",contentClass:"v-autocomplete__content",eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:Z},e.menuProps),{default:()=>[K&&v(Kl,{ref:V,selected:k.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:ue=>ue.preventDefault(),onFocusin:F,onFocusout:H},{default:()=>{var ue,B,T;return[!A.value.length&&!e.hideNoData&&(((ue=n["no-data"])==null?void 0:ue.call(n))??v(kn,{title:c(e.noDataText)},null)),(B=n["prepend-item"])==null?void 0:B.call(n),A.value.map(O=>{var re;return((re=n.item)==null?void 0:re.call(n,{item:O,props:le(O.props,{onClick:()=>J(O)})}))??v(kn,le({key:O.value},O.props,{onClick:()=>J(O)}),{prepend:oe=>{let{isSelected:je}=oe;return v(me,null,[e.multiple&&!e.hideSelected?v(Nc,{modelValue:je,ripple:!1,tabindex:"-1"},null):void 0,O.props.prependIcon&&v(ze,{icon:O.props.prependIcon},null)])},title:()=>{var oe,je;return i.value?O.title:gp(O.title,(oe=j(O))==null?void 0:oe.title,((je=b.value)==null?void 0:je.length)??0)}})}),(T=n["append-item"])==null?void 0:T.call(n)]}})]}),E.value.map((ue,B)=>{var re;function T(oe){oe.stopPropagation(),oe.preventDefault(),J(ue)}const O={"onClick:close":T,onMousedown(oe){oe.preventDefault(),oe.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0};return v("div",{key:ue.value,class:["v-autocomplete__selection",B===o.value&&["v-autocomplete__selection--selected",g.value]],style:B===o.value?S.value:{}},[R?n.chip?v($e,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:ue.title}}},{default:()=>{var oe;return[(oe=n.chip)==null?void 0:oe.call(n,{item:ue,index:B,props:O})]}}):v(Fa,le({key:"chip",closable:e.closableChips,size:"small",text:ue.title},O),null):((re=n.selection)==null?void 0:re.call(n,{item:ue,index:B}))??v("span",{class:"v-autocomplete__selection-text"},[ue.title,e.multiple&&B<E.value.length-1&&v("span",{class:"v-autocomplete__selection-comma"},[lt(",")])])])})])})}),Gt({isFocused:l,isPristine:i,menu:u,search:b,filteredItems:P,select:J},a)}});const bp=W()({name:"VBadge",inheritAttrs:!1,props:{bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:pe,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...ne(),...Wn({location:"top end"}),...De(),..._e(),...Ee(),...jn({transition:"scale-rotate-transition"})},setup(e,t){const{backgroundColorClasses:n,backgroundColorStyles:c}=Ze(Y(e,"color")),{roundedClasses:a}=Ue(e),{t:l}=Bt(),{textColorClasses:i,textColorStyles:s}=vt(Y(e,"textColor")),{themeClasses:r}=Cf(),{locationStyles:u}=Kn(e,!0,o=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(o)?+(e.offsetY??0):["left","right"].includes(o)?+(e.offsetX??0):0));return X(()=>{const o=Number(e.content),d=!e.max||isNaN(o)?e.content:o<=+e.max?o:`${e.max}+`,[f,m]=Wc(t.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return v(e.tag,le({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},m,{style:e.style}),{default:()=>{var h,g;return[v("div",{class:"v-badge__wrapper"},[(g=(h=t.slots).default)==null?void 0:g.call(h),v(Ht,{transition:e.transition},{default:()=>{var S,b;return[He(v("span",le({class:["v-badge__badge",r.value,n.value,a.value,i.value],style:[c.value,s.value,e.inline?{}:u.value],"aria-atomic":"true","aria-label":l(e.label,o),"aria-live":"polite",role:"status"},f),[e.dot?void 0:t.slots.badge?(b=(S=t.slots).badge)==null?void 0:b.call(S):e.icon?v(ze,{icon:e.icon},null):d]),[[on,e.modelValue]])]}})])]}})}),{}}});const wv=W()({name:"VBannerActions",props:{color:String,density:String,...ne()},setup(e,t){let{slots:n}=t;return Je({VBtn:{color:e.color,density:e.density,variant:"text"}}),X(()=>{var c;return v("div",{class:["v-banner-actions",e.class],style:e.style},[(c=n.default)==null?void 0:c.call(n)])}),{}}}),jv=Yt("v-banner-text"),pp=W()({name:"VBanner",props:{avatar:String,color:String,icon:pe,lines:String,stacked:Boolean,sticky:Boolean,text:String,...At(),...ne(),...nt(),...Rt(),...tt(),...Wn(),...ea(),...De(),..._e(),...Ee()},setup(e,t){let{slots:n}=t;const{borderClasses:c}=Lt(e),{densityClasses:a}=gt(e),{mobile:l}=hc(),{dimensionStyles:i}=Ot(e),{elevationClasses:s}=ot(e),{locationStyles:r}=Kn(e),{positionClasses:u}=ta(e),{roundedClasses:o}=Ue(e),{themeClasses:d}=Pe(e),f=Y(e,"color"),m=Y(e,"density");Je({VBannerActions:{color:f,density:m}}),X(()=>{const h=!!(e.text||n.text),g=!!(e.avatar||e.icon),S=!!(g||n.prepend);return v(e.tag,{class:["v-banner",{"v-banner--stacked":e.stacked||l.value,"v-banner--sticky":e.sticky,[`v-banner--${e.lines}-line`]:!!e.lines},c.value,a.value,s.value,u.value,o.value,d.value,e.class],style:[i.value,r.value,e.style],role:"banner"},{default:()=>{var b;return[S&&v("div",{key:"prepend",class:"v-banner__prepend"},[n.prepend?v($e,{key:"prepend-defaults",disabled:!g,defaults:{VAvatar:{color:f.value,density:m.value,icon:e.icon,image:e.avatar}}},n.prepend):v(Dn,{key:"prepend-avatar",color:f.value,density:m.value,icon:e.icon,image:e.avatar},null)]),v("div",{class:"v-banner__content"},[h&&v(jv,{key:"text"},{default:()=>{var C;return[((C=n.text)==null?void 0:C.call(n))??e.text]}}),(b=n.default)==null?void 0:b.call(n)]),n.actions&&v(wv,{key:"actions"},n.actions)]}})})}});const kp=W()({name:"VBottomNavigation",props:{bgColor:String,color:String,grow:Boolean,mode:{type:String,validator:e=>!e||["horizontal","shift"].includes(e)},height:{type:[Number,String],default:56},active:{type:Boolean,default:!0},...At(),...ne(),...nt(),...tt(),...De(),...Kc({name:"bottom-navigation"}),..._e({tag:"header"}),...Xc({modelValue:!0,selectedClass:"v-btn--selected"}),...Ee()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const{themeClasses:c}=Cf(),{borderClasses:a}=Lt(e),{backgroundColorClasses:l,backgroundColorStyles:i}=Ze(Y(e,"bgColor")),{densityClasses:s}=gt(e),{elevationClasses:r}=ot(e),{roundedClasses:u}=Ue(e),{ssrBootStyles:o}=gc(),d=y(()=>Number(e.height)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0)),f=Y(e,"active"),{layoutItemStyles:m}=Yc({id:e.name,order:y(()=>parseInt(e.order,10)),position:y(()=>"bottom"),layoutSize:y(()=>f.value?d.value:0),elementSize:d,active:f,absolute:Y(e,"absolute")});return pc(e,ir),Je({VBtn:{color:Y(e,"color"),density:Y(e,"density"),stacked:y(()=>e.mode!=="horizontal"),variant:"text"}},{scoped:!0}),X(()=>v(e.tag,{class:["v-bottom-navigation",{"v-bottom-navigation--active":f.value,"v-bottom-navigation--grow":e.grow,"v-bottom-navigation--shift":e.mode==="shift"},c.value,l.value,a.value,s.value,r.value,u.value,e.class],style:[i.value,m.value,{height:se(d.value),transform:`translateY(${se(f.value?0:100,"%")})`},o.value,e.style]},{default:()=>[n.default&&v("div",{class:"v-bottom-navigation__content"},[n.default()])]})),{}}});const Vv=W()({name:"VBreadcrumbsDivider",props:{divider:[Number,String],...ne()},setup(e,t){let{slots:n}=t;return X(()=>{var c;return v("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[((c=n==null?void 0:n.default)==null?void 0:c.call(n))??e.divider])}),{}}}),Iv=W()({name:"VBreadcrumbsItem",props:{active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...ne(),...Oa(),..._e({tag:"li"})},setup(e,t){let{slots:n,attrs:c}=t;const a=Ra(e,c),l=y(()=>{var u;return e.active||((u=a.isActive)==null?void 0:u.value)}),i=y(()=>l.value?e.activeColor:e.color),{textColorClasses:s,textColorStyles:r}=vt(i);return X(()=>{const u=a.isLink.value?"a":e.tag;return v(u,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":l.value,"v-breadcrumbs-item--disabled":e.disabled,"v-breadcrumbs-item--link":a.isLink.value,[`${e.activeClass}`]:l.value&&e.activeClass},s.value,e.class],style:[r.value,e.style],href:a.href.value,"aria-current":l.value?"page":void 0,onClick:a.navigate},{default:()=>{var o;return[((o=n.default)==null?void 0:o.call(n))??e.title]}})}),{}}}),Sp=W()({name:"VBreadcrumbs",props:{activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:pe,items:{type:Array,default:()=>[]},...ne(),...nt(),...De(),..._e({tag:"ul"})},setup(e,t){let{slots:n}=t;const{backgroundColorClasses:c,backgroundColorStyles:a}=Ze(Y(e,"bgColor")),{densityClasses:l}=gt(e),{roundedClasses:i}=Ue(e);Je({VBreadcrumbsDivider:{divider:Y(e,"divider")},VBreadcrumbsItem:{activeClass:Y(e,"activeClass"),activeColor:Y(e,"activeColor"),color:Y(e,"color"),disabled:Y(e,"disabled")}});const s=y(()=>e.items.map(r=>typeof r=="string"?{item:{title:r},raw:r}:{item:r,raw:r}));return X(()=>{const r=!!(n.prepend||e.icon);return v(e.tag,{class:["v-breadcrumbs",c.value,l.value,i.value,e.class],style:[a.value,e.style]},{default:()=>{var u;return[r&&v("div",{key:"prepend",class:"v-breadcrumbs__prepend"},[n.prepend?v($e,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},n.prepend):v(ze,{key:"prepend-icon",start:!0,icon:e.icon},null)]),s.value.map((o,d,f)=>{let{item:m,raw:h}=o;return v(me,null,[v(Iv,le({key:m.title,disabled:d>=f.length-1},m),{default:n.title?()=>{var g;return(g=n.title)==null?void 0:g.call(n,{item:h,index:d})}:void 0}),d<f.length-1&&v(Vv,null,{default:n.divider?()=>{var g;return(g=n.divider)==null?void 0:g.call(n,{item:h,index:d})}:void 0})])}),(u=n.default)==null?void 0:u.call(n)]}})}),{}}});const Ev=W()({name:"VCardActions",props:ne(),setup(e,t){let{slots:n}=t;return Je({VBtn:{variant:"text"}}),X(()=>{var c;return v("div",{class:["v-card-actions",e.class],style:e.style},[(c=n.default)==null?void 0:c.call(n)])}),{}}}),Av=Yt("v-card-subtitle"),qv=Yt("v-card-title"),Pv=W()({name:"VCardItem",props:{appendAvatar:String,appendIcon:pe,prependAvatar:String,prependIcon:pe,subtitle:String,title:String,...ne(),...nt()},setup(e,t){let{slots:n}=t;return X(()=>{var u;const c=!!(e.prependAvatar||e.prependIcon),a=!!(c||n.prepend),l=!!(e.appendAvatar||e.appendIcon),i=!!(l||n.append),s=!!(e.title||n.title),r=!!(e.subtitle||n.subtitle);return v("div",{class:["v-card-item",e.class],style:e.style},[a&&v("div",{key:"prepend",class:"v-card-item__prepend"},[n.prepend?v($e,{key:"prepend-defaults",disabled:!c,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},n.prepend):c&&v(Dn,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),v("div",{class:"v-card-item__content"},[s&&v(qv,{key:"title"},{default:()=>{var o;return[((o=n.title)==null?void 0:o.call(n))??e.title]}}),r&&v(Av,{key:"subtitle"},{default:()=>{var o;return[((o=n.subtitle)==null?void 0:o.call(n))??e.subtitle]}}),(u=n.default)==null?void 0:u.call(n)]),i&&v("div",{key:"append",class:"v-card-item__append"},[n.append?v($e,{key:"append-defaults",disabled:!l,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},n.append):l&&v(Dn,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Tv=Yt("v-card-text"),Cp=W()({name:"VCard",directives:{Ripple:Un},props:{appendAvatar:String,appendIcon:pe,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:pe,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...At(),...ne(),...nt(),...Rt(),...tt(),...ur(),...Wn(),...ea(),...De(),...Oa(),..._e(),...Ee(),...Ft({variant:"elevated"})},setup(e,t){let{attrs:n,slots:c}=t;const{themeClasses:a}=Pe(e),{borderClasses:l}=Lt(e),{colorClasses:i,colorStyles:s,variantClasses:r}=bc(e),{densityClasses:u}=gt(e),{dimensionStyles:o}=Ot(e),{elevationClasses:d}=ot(e),{loaderClasses:f}=Fl(e),{locationStyles:m}=Kn(e),{positionClasses:h}=ta(e),{roundedClasses:g}=Ue(e),S=Ra(e,n),b=y(()=>e.link!==!1&&S.isLink.value),C=y(()=>!e.disabled&&e.link!==!1&&(e.link||S.isClickable.value));return X(()=>{const p=b.value?"a":e.tag,P=!!(c.title||e.title),j=!!(c.subtitle||e.subtitle),E=P||j,A=!!(c.append||e.appendAvatar||e.appendIcon),k=!!(c.prepend||e.prependAvatar||e.prependIcon),x=!!(c.image||e.image),V=E||k||A,I=!!(c.text||e.text);return He(v(p,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":C.value},a.value,l.value,i.value,u.value,d.value,f.value,h.value,g.value,r.value,e.class],style:[s.value,o.value,m.value,e.style],href:S.href.value,onClick:C.value&&S.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var w;return[x&&v("div",{key:"image",class:"v-card__image"},[c.image?v($e,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},c.image):v(Gc,{key:"image-img",cover:!0,src:e.image},null)]),v(dr,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:c.loader}),V&&v(Pv,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:c.item,prepend:c.prepend,title:c.title,subtitle:c.subtitle,append:c.append}),I&&v(Tv,{key:"text"},{default:()=>{var M;return[((M=c.text)==null?void 0:M.call(c))??e.text]}}),(w=c.default)==null?void 0:w.call(c),c.actions&&v(Ev,null,{default:c.actions}),yc(C.value,"v-card")]}}),[[Ct("ripple"),C.value&&e.ripple]])}),{}}});const _p=e=>{const{touchstartX:t,touchendX:n,touchstartY:c,touchendY:a}=e,l=.5,i=16;e.offsetX=n-t,e.offsetY=a-c,Math.abs(e.offsetY)<l*Math.abs(e.offsetX)&&(e.left&&n<t-i&&e.left(e),e.right&&n>t+i&&e.right(e)),Math.abs(e.offsetX)<l*Math.abs(e.offsetY)&&(e.up&&a<c-i&&e.up(e),e.down&&a>c+i&&e.down(e))};function xp(e,t){var c;const n=e.changedTouches[0];t.touchstartX=n.clientX,t.touchstartY=n.clientY,(c=t.start)==null||c.call(t,{originalEvent:e,...t})}function wp(e,t){var c;const n=e.changedTouches[0];t.touchendX=n.clientX,t.touchendY=n.clientY,(c=t.end)==null||c.call(t,{originalEvent:e,...t}),_p(t)}function jp(e,t){var c;const n=e.changedTouches[0];t.touchmoveX=n.clientX,t.touchmoveY=n.clientY,(c=t.move)==null||c.call(t,{originalEvent:e,...t})}function Vp(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:n=>xp(n,t),touchend:n=>wp(n,t),touchmove:n=>jp(n,t)}}function Ip(e,t){var s;const n=t.value,c=n!=null&&n.parent?e.parentElement:e,a=(n==null?void 0:n.options)??{passive:!0},l=(s=t.instance)==null?void 0:s.$.uid;if(!c||!l)return;const i=Vp(t.value);c._touchHandlers=c._touchHandlers??Object.create(null),c._touchHandlers[l]=i,Zd(i).forEach(r=>{c.addEventListener(r,i[r],a)})}function Ep(e,t){var l,i;const n=(l=t.value)!=null&&l.parent?e.parentElement:e,c=(i=t.instance)==null?void 0:i.$.uid;if(!(n!=null&&n._touchHandlers)||!c)return;const a=n._touchHandlers[c];Zd(a).forEach(s=>{n.removeEventListener(s,a[s])}),delete n._touchHandlers[c]}const pr={mounted:Ip,unmounted:Ep},$v=Symbol.for("vuetify:v-window"),Mv=Symbol.for("vuetify:v-window-group"),Bv=ye({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{default:"force"},...ne(),..._e(),...Ee()},"v-window"),Rv=W()({name:"VWindow",directives:{Touch:pr},props:Bv(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const{themeClasses:c}=Pe(e),{isRtl:a}=wn(),{t:l}=Bt(),i=pc(e,Mv),s=$(),r=y(()=>a.value?!e.reverse:e.reverse),u=$(!1),o=y(()=>{const P=e.direction==="vertical"?"y":"x",E=(r.value?!u.value:u.value)?"-reverse":"";return`v-window-${P}${E}-transition`}),d=$(0),f=$(void 0),m=y(()=>i.items.value.findIndex(P=>i.selected.value.includes(P.id)));ae(m,(P,j)=>{const E=i.items.value.length,A=E-1;E<=2?u.value=P<j:P===A&&j===0?u.value=!0:P===0&&j===A?u.value=!1:u.value=P<j}),Ke($v,{transition:o,isReversed:u,transitionCount:d,transitionHeight:f,rootRef:s});const h=y(()=>e.continuous||m.value!==0),g=y(()=>e.continuous||m.value!==i.items.value.length-1);function S(){h.value&&i.prev()}function b(){g.value&&i.next()}const C=y(()=>{const P=[],j={icon:a.value?e.nextIcon:e.prevIcon,class:`v-window__${r.value?"right":"left"}`,onClick:i.prev,ariaLabel:l("$vuetify.carousel.prev")};P.push(h.value?n.prev?n.prev({props:j}):v(bt,j,null):v("div",null,null));const E={icon:a.value?e.prevIcon:e.nextIcon,class:`v-window__${r.value?"left":"right"}`,onClick:i.next,ariaLabel:l("$vuetify.carousel.next")};return P.push(g.value?n.next?n.next({props:E}):v(bt,E,null):v("div",null,null)),P}),p=y(()=>e.touch===!1?e.touch:{...{left:()=>{r.value?S():b()},right:()=>{r.value?b():S()},start:j=>{let{originalEvent:E}=j;E.stopPropagation()}},...e.touch===!0?{}:e.touch});return X(()=>He(v(e.tag,{ref:s,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},c.value,e.class],style:e.style},{default:()=>{var P,j;return[v("div",{class:"v-window__container",style:{height:f.value}},[(P=n.default)==null?void 0:P.call(n,{group:i}),e.showArrows!==!1&&v("div",{class:"v-window__controls"},[C.value])]),(j=n.additional)==null?void 0:j.call(n,{group:i})]}}),[[Ct("touch"),p.value]])),{group:i}}}),Ap=W()({name:"VCarousel",props:{color:String,cycle:Boolean,delimiterIcon:{type:pe,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...Bv({continuous:!0,mandatory:"force",showArrows:!0})},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const c=Ce(e,"modelValue"),{t:a}=Bt(),l=$();let i=-1;ae(c,r),ae(()=>e.interval,r),ae(()=>e.cycle,u=>{u?r():window.clearTimeout(i)}),mt(s);function s(){!e.cycle||!l.value||(i=window.setTimeout(l.value.group.next,+e.interval>0?+e.interval:6e3))}function r(){window.clearTimeout(i),window.requestAnimationFrame(s)}return X(()=>v(Rv,{ref:l,modelValue:c.value,"onUpdate:modelValue":u=>c.value=u,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:se(e.height)},e.style],continuous:!0,mandatory:"force",showArrows:e.showArrows},{default:n.default,additional:u=>{let{group:o}=u;return v(me,null,[!e.hideDelimiters&&v("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[o.items.value.length>0&&v($e,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[o.items.value.map((d,f)=>{const m={id:`carousel-item-${d.id}`,"aria-label":a("$vuetify.carousel.ariaLabel.delimiter",f+1,o.items.value.length),class:[o.isSelected(d.id)&&"v-btn--active"],onClick:()=>o.select(d.id,!0)};return n.item?n.item({props:m,item:d}):v(bt,le(d,m),null)})]})]),e.progress&&v(or,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(o.getItemIndex(c.value)+1)/o.items.value.length*100},null)])},prev:n.prev,next:n.next})),{}}}),Ov=W()({name:"VWindowItem",directives:{Touch:pr},props:{reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...ne(),...Zc(),...Yl()},emits:{"group:selected":e=>!0},setup(e,t){let{slots:n}=t;const c=Ie($v),a=Qc(e,Mv),{isBooted:l}=gc();if(!c||!a)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const i=$(!1),s=y(()=>c.isReversed.value?e.reverseTransition!==!1:e.transition!==!1);function r(){!i.value||!c||(i.value=!1,c.transitionCount.value>0&&(c.transitionCount.value-=1,c.transitionCount.value===0&&(c.transitionHeight.value=void 0)))}function u(){var h;i.value||!c||(i.value=!0,c.transitionCount.value===0&&(c.transitionHeight.value=se((h=c.rootRef.value)==null?void 0:h.clientHeight)),c.transitionCount.value+=1)}function o(){r()}function d(h){i.value&&Oe(()=>{!s.value||!i.value||!c||(c.transitionHeight.value=se(h.clientHeight))})}const f=y(()=>{const h=c.isReversed.value?e.reverseTransition:e.transition;return s.value?{name:typeof h!="string"?c.transition.value:h,onBeforeEnter:u,onAfterEnter:r,onEnterCancelled:o,onBeforeLeave:u,onAfterLeave:r,onLeaveCancelled:o,onEnter:d}:!1}),{hasContent:m}=yr(e,a.isSelected);return X(()=>v(Ht,{transition:f.value,disabled:!l.value},{default:()=>{var h;return[He(v("div",{class:["v-window-item",a.selectedClass.value,e.class],style:e.style},[m.value&&((h=n.default)==null?void 0:h.call(n))]),[[on,a.isSelected.value]])]}})),{}}}),qp=W()({name:"VCarouselItem",inheritAttrs:!1,props:{value:null,...ne()},setup(e,t){let{slots:n,attrs:c}=t;X(()=>v(Ov,{class:["v-carousel-item",e.class],style:e.style,value:e.value},{default:()=>[v(Gc,c,n)]}))}});const Pp=Yt("v-code");const Lv=ye({color:String,...At(),...ne(),...Rt(),...tt(),...Wn(),...ea(),...De(),..._e(),...Ee()},"v-sheet"),ss=W()({name:"VSheet",props:{...Lv()},setup(e,t){let{slots:n}=t;const{themeClasses:c}=Pe(e),{backgroundColorClasses:a,backgroundColorStyles:l}=Ze(Y(e,"color")),{borderClasses:i}=Lt(e),{dimensionStyles:s}=Ot(e),{elevationClasses:r}=ot(e),{locationStyles:u}=Kn(e),{positionClasses:o}=ta(e),{roundedClasses:d}=Ue(e);return X(()=>v(e.tag,{class:["v-sheet",c.value,a.value,i.value,r.value,o.value,d.value,e.class],style:[l.value,s.value,u.value,e.style]},n)),{}}});const Tp=Mt({name:"VColorPickerCanvas",props:{color:{type:Object},disabled:Boolean,dotSize:{type:[Number,String],default:10},height:{type:[Number,String],default:150},width:{type:[Number,String],default:300},...ne()},emits:{"update:color":e=>!0,"update:position":e=>!0},setup(e,t){let{emit:n}=t;const c=$(!1),a=$(!1),l=$({x:0,y:0}),i=y(()=>{const{x:b,y:C}=l.value,p=parseInt(e.dotSize,10)/2;return{width:se(e.dotSize),height:se(e.dotSize),transform:`translate(${se(b-p)}, ${se(C-p)})`}}),s=$(),r=$(parseFloat(e.width)),u=$(parseFloat(e.height)),{resizeRef:o}=sn(b=>{var P;if(!((P=o.value)!=null&&P.offsetParent))return;const{width:C,height:p}=b[0].contentRect;r.value=C,u.value=p});function d(b,C,p){const{left:P,top:j,width:E,height:A}=p;l.value={x:ft(b-P,0,E),y:ft(C-j,0,A)}}function f(b){e.disabled||!s.value||d(b.clientX,b.clientY,s.value.getBoundingClientRect())}function m(b){b.preventDefault(),!e.disabled&&(c.value=!0,window.addEventListener("mousemove",h),window.addEventListener("mouseup",g),window.addEventListener("touchmove",h),window.addEventListener("touchend",g))}function h(b){if(e.disabled||!s.value)return;c.value=!0;const C=pb(b);d(C.clientX,C.clientY,s.value.getBoundingClientRect())}function g(){window.removeEventListener("mousemove",h),window.removeEventListener("mouseup",g),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",g)}ae(l,()=>{var p,P;if(a.value){a.value=!1;return}if(!s.value)return;const{x:b,y:C}=l.value;n("update:color",{h:((p=e.color)==null?void 0:p.h)??0,s:ft(b,0,r.value)/r.value,v:1-ft(C,0,u.value)/u.value,a:((P=e.color)==null?void 0:P.a)??1})});function S(){var j;if(!s.value)return;const b=s.value,C=b.getContext("2d");if(!C)return;const p=C.createLinearGradient(0,0,b.width,0);p.addColorStop(0,"hsla(0, 0%, 100%, 1)"),p.addColorStop(1,`hsla(${((j=e.color)==null?void 0:j.h)??0}, 100%, 50%, 1)`),C.fillStyle=p,C.fillRect(0,0,b.width,b.height);const P=C.createLinearGradient(0,0,0,b.height);P.addColorStop(0,"hsla(0, 0%, 100%, 0)"),P.addColorStop(1,"hsla(0, 0%, 0%, 1)"),C.fillStyle=P,C.fillRect(0,0,b.width,b.height)}return ae(()=>{var b;return(b=e.color)==null?void 0:b.h},S,{immediate:!0}),ae(()=>[r.value,u.value],(b,C)=>{S(),l.value={x:l.value.x*b[0]/C[0],y:l.value.y*b[1]/C[1]}},{flush:"post"}),ae(()=>e.color,()=>{if(c.value){c.value=!1;return}a.value=!0,l.value=e.color?{x:e.color.s*r.value,y:(1-e.color.v)*u.value}:{x:0,y:0}},{deep:!0,immediate:!0}),mt(()=>S()),X(()=>v("div",{ref:o,class:["v-color-picker-canvas",e.class],style:e.style,onClick:f,onMousedown:m,onTouchstart:m},[v("canvas",{ref:s,width:r.value,height:u.value},null),e.color&&v("div",{class:["v-color-picker-canvas__dot",{"v-color-picker-canvas__dot--disabled":e.disabled}],style:i.value},null)])),{}}});function rc(e,t){return t.every(n=>e.hasOwnProperty(n))}function Fv(e){if(!e)return null;let t=null;if(typeof e=="string"){const n=ff(e);t=uf(n)}return typeof e=="object"&&(rc(e,["r","g","b"])?t=Xs(e):rc(e,["h","s","l"])?t=lf(e):rc(e,["h","s","v"])&&(t=e)),t}function $p(e,t){if(t){const{a:n,...c}=e;return c}return e}function Mp(e,t){if(t==null||typeof t=="string"){const n=df(e);return e.a===1?n.slice(0,7):n}if(typeof t=="object"){let n;return rc(t,["r","g","b"])?n=Ml(e):rc(t,["h","s","l"])?n=af(e):rc(t,["h","s","v"])&&(n=e),$p(n,!rc(t,["a"])&&e.a===1)}return e}const ya={h:0,s:0,v:1,a:1},rs={inputProps:{type:"number",min:0},inputs:[{label:"R",max:255,step:1,getValue:e=>Math.round(e.r),getColor:(e,t)=>({...e,r:Number(t)})},{label:"G",max:255,step:1,getValue:e=>Math.round(e.g),getColor:(e,t)=>({...e,g:Number(t)})},{label:"B",max:255,step:1,getValue:e=>Math.round(e.b),getColor:(e,t)=>({...e,b:Number(t)})},{label:"A",max:1,step:.01,getValue:e=>{let{a:t}=e;return t?Math.round(t*100)/100:1},getColor:(e,t)=>({...e,a:Number(t)})}],to:Ml,from:Xs};var _u;const Bp={...rs,inputs:(_u=rs.inputs)==null?void 0:_u.slice(0,3)},os={inputProps:{type:"number",min:0},inputs:[{label:"H",max:360,step:1,getValue:e=>Math.round(e.h),getColor:(e,t)=>({...e,h:Number(t)})},{label:"S",max:1,step:.01,getValue:e=>Math.round(e.s*100)/100,getColor:(e,t)=>({...e,s:Number(t)})},{label:"L",max:1,step:.01,getValue:e=>Math.round(e.l*100)/100,getColor:(e,t)=>({...e,l:Number(t)})},{label:"A",max:1,step:.01,getValue:e=>{let{a:t}=e;return t?Math.round(t*100)/100:1},getColor:(e,t)=>({...e,a:Number(t)})}],to:af,from:lf},Rp={...os,inputs:os.inputs.slice(0,3)},Nv={inputProps:{type:"text"},inputs:[{label:"HEXA",getValue:e=>e,getColor:(e,t)=>t}],to:df,from:uf},Op={...Nv,inputs:[{label:"HEX",getValue:e=>e.slice(0,7),getColor:(e,t)=>t}]},oc={rgb:Bp,rgba:rs,hsl:Rp,hsla:os,hex:Op,hexa:Nv},Lp=e=>{let{label:t,...n}=e;return v("div",{class:"v-color-picker-edit__input"},[v("input",n,null),v("span",null,[t])])},Fp=Mt({name:"VColorPickerEdit",props:{color:Object,disabled:Boolean,mode:{type:String,default:"rgba",validator:e=>Object.keys(oc).includes(e)},modes:{type:Array,default:()=>Object.keys(oc),validator:e=>Array.isArray(e)&&e.every(t=>Object.keys(oc).includes(t))},...ne()},emits:{"update:color":e=>!0,"update:mode":e=>!0},setup(e,t){let{emit:n}=t;const c=y(()=>e.modes.map(l=>({...oc[l],name:l}))),a=y(()=>{var s;const l=c.value.find(r=>r.name===e.mode);if(!l)return[];const i=e.color?l.to(e.color):null;return(s=l.inputs)==null?void 0:s.map(r=>{let{getValue:u,getColor:o,...d}=r;return{...l.inputProps,...d,disabled:e.disabled,value:i&&u(i),onChange:f=>{const m=f.target;m&&n("update:color",l.from(o(i??ya,m.value)))}}})});return X(()=>{var l;return v("div",{class:["v-color-picker-edit",e.class],style:e.style},[(l=a.value)==null?void 0:l.map(i=>v(Lp,i,null)),c.value.length>1&&v(bt,{icon:"$unfold",size:"x-small",variant:"plain",onClick:()=>{const i=c.value.findIndex(s=>s.name===e.mode);n("update:mode",c.value[(i+1)%c.value.length].name)}},null)])}),{}}});const kr=Symbol.for("vuetify:v-slider");function us(e,t,n){const c=n==="vertical",a=t.getBoundingClientRect(),l="touches"in e?e.touches[0]:e;return c?l.clientY-(a.top+a.height/2):l.clientX-(a.left+a.width/2)}function Np(e,t){return"touches"in e&&e.touches.length?e.touches[0][t]:"changedTouches"in e&&e.changedTouches.length?e.changedTouches[0][t]:e[t]}const Dv=ye({disabled:Boolean,error:Boolean,readonly:Boolean,max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:0},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:e=>typeof e=="boolean"||e==="always"},thumbSize:{type:[Number,String],default:20},showTicks:{type:[Boolean,String],default:!1,validator:e=>typeof e=="boolean"||e==="always"},ticks:{type:[Array,Object]},tickSize:{type:[Number,String],default:2},color:String,trackColor:String,trackFillColor:String,trackSize:{type:[Number,String],default:4},direction:{type:String,default:"horizontal",validator:e=>["vertical","horizontal"].includes(e)},reverse:Boolean,...De(),...tt({elevation:2})},"slider"),zv=e=>{const t=y(()=>parseFloat(e.min)),n=y(()=>parseFloat(e.max)),c=y(()=>+e.step>0?parseFloat(e.step):0),a=y(()=>Math.max(To(c.value),To(t.value)));function l(i){if(c.value<=0)return i;const s=ft(i,t.value,n.value),r=t.value%c.value,u=Math.round((s-r)/c.value)*c.value+r;return parseFloat(Math.min(u,n.value).toFixed(a.value))}return{min:t,max:n,step:c,decimals:a,roundValue:l}},Hv=e=>{let{props:t,steps:n,onSliderStart:c,onSliderMove:a,onSliderEnd:l,getActiveThumb:i}=e;const{isRtl:s}=wn(),r=Y(t,"reverse"),u=y(()=>{let T=s.value?"rtl":"ltr";return t.reverse&&(T=T==="rtl"?"ltr":"rtl"),T}),{min:o,max:d,step:f,decimals:m,roundValue:h}=n,g=y(()=>parseInt(t.thumbSize,10)),S=y(()=>parseInt(t.tickSize,10)),b=y(()=>parseInt(t.trackSize,10)),C=y(()=>(d.value-o.value)/f.value),p=Y(t,"disabled"),P=y(()=>t.direction==="vertical"),j=y(()=>t.error||t.disabled?void 0:t.thumbColor??t.color),E=y(()=>t.error||t.disabled?void 0:t.trackColor??t.color),A=y(()=>t.error||t.disabled?void 0:t.trackFillColor??t.color),k=$(!1),x=$(0),V=$(),I=$();function w(T){var U;const O=t.direction==="vertical",re=O?"top":"left",oe=O?"height":"width",je=O?"clientY":"clientX",{[re]:ve,[oe]:_}=(U=V.value)==null?void 0:U.$el.getBoundingClientRect(),q=Np(T,je);let L=Math.min(Math.max((q-ve-x.value)/_,0),1)||0;return(O||u.value==="rtl")&&(L=1-L),h(o.value+L*(d.value-o.value))}const M=T=>{l({value:w(T)}),k.value=!1,x.value=0},N=T=>{I.value=i(T),I.value&&(I.value.focus(),k.value=!0,I.value.contains(T.target)?x.value=us(T,I.value,t.direction):(x.value=0,a({value:w(T)})),c({value:w(T)}))},Z={passive:!0,capture:!0};function F(T){a({value:w(T)})}function H(T){T.stopPropagation(),T.preventDefault(),M(T),window.removeEventListener("mousemove",F,Z),window.removeEventListener("mouseup",H)}function D(T){var O;M(T),window.removeEventListener("touchmove",F,Z),(O=T.target)==null||O.removeEventListener("touchend",D)}function J(T){var O;N(T),window.addEventListener("touchmove",F,Z),(O=T.target)==null||O.addEventListener("touchend",D,{passive:!1})}function R(T){T.preventDefault(),N(T),window.addEventListener("mousemove",F,Z),window.addEventListener("mouseup",H,{passive:!1})}const K=T=>{const O=(T-o.value)/(d.value-o.value)*100;return ft(isNaN(O)?0:O,0,100)},z=Y(t,"showTicks"),fe=y(()=>z.value?t.ticks?Array.isArray(t.ticks)?t.ticks.map(T=>({value:T,position:K(T),label:T.toString()})):Object.keys(t.ticks).map(T=>({value:parseFloat(T),position:K(parseFloat(T)),label:t.ticks[T]})):C.value!==1/0?cn(C.value+1).map(T=>{const O=o.value+T*f.value;return{value:O,position:K(O)}}):[]:[]),ue=y(()=>fe.value.some(T=>{let{label:O}=T;return!!O})),B={activeThumbRef:I,color:Y(t,"color"),decimals:m,disabled:p,direction:Y(t,"direction"),elevation:Y(t,"elevation"),hasLabels:ue,horizontalDirection:u,isReversed:r,min:o,max:d,mousePressed:k,numTicks:C,onSliderMousedown:R,onSliderTouchstart:J,parsedTicks:fe,parseMouseMove:w,position:K,readonly:Y(t,"readonly"),rounded:Y(t,"rounded"),roundValue:h,showTicks:z,startOffset:x,step:f,thumbSize:g,thumbColor:j,thumbLabel:Y(t,"thumbLabel"),ticks:Y(t,"ticks"),tickSize:S,trackColor:E,trackContainerRef:V,trackFillColor:A,trackSize:b,vertical:P};return Ke(kr,B),B},ds=W()({name:"VSliderThumb",directives:{Ripple:Un},props:{focused:Boolean,max:{type:Number,required:!0},min:{type:Number,required:!0},modelValue:{type:Number,required:!0},position:{type:Number,required:!0},ripple:{type:Boolean,default:!0},...ne()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n,emit:c}=t;const a=Ie(kr);if(!a)throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");const{thumbColor:l,step:i,vertical:s,disabled:r,thumbSize:u,thumbLabel:o,direction:d,readonly:f,elevation:m,isReversed:h,horizontalDirection:g,mousePressed:S,decimals:b}=a,{textColorClasses:C,textColorStyles:p}=vt(l),{pageup:P,pagedown:j,end:E,home:A,left:k,right:x,down:V,up:I}=Di,w=[P,j,E,A,k,x,V,I],M=y(()=>i.value?[1,2,3]:[1,5,10]);function N(F,H){if(!w.includes(F.key))return;F.preventDefault();const D=i.value||.1,J=(e.max-e.min)/D;if([k,x,V,I].includes(F.key)){const K=(g.value==="rtl"?[k,I]:[x,I]).includes(F.key)?1:-1,z=F.shiftKey?2:F.ctrlKey?1:0;H=H+K*D*M.value[z]}else if(F.key===A)H=e.min;else if(F.key===E)H=e.max;else{const R=F.key===j?1:-1;H=H-R*D*(J>100?J/10:10)}return Math.max(e.min,Math.min(e.max,H))}function Z(F){const H=N(F,e.modelValue);H!=null&&c("update:modelValue",H)}return X(()=>{const F=se(s.value||h.value?100-e.position:e.position,"%"),{elevationClasses:H}=ot(y(()=>r.value?void 0:m.value));return v("div",{class:["v-slider-thumb",{"v-slider-thumb--focused":e.focused,"v-slider-thumb--pressed":e.focused&&S.value},e.class],style:[{"--v-slider-thumb-position":F,"--v-slider-thumb-size":se(u.value)},e.style],role:"slider",tabindex:r.value?-1:0,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.modelValue,"aria-readonly":f.value,"aria-orientation":d.value,onKeydown:f.value?void 0:Z},[v("div",{class:["v-slider-thumb__surface",C.value,H.value],style:{...p.value}},null),He(v("div",{class:["v-slider-thumb__ripple",C.value],style:p.value},null),[[Ct("ripple"),e.ripple,null,{circle:!0,center:!0}]]),v(Ef,{origin:"bottom center"},{default:()=>{var D;return[He(v("div",{class:"v-slider-thumb__label-container"},[v("div",{class:["v-slider-thumb__label"]},[v("div",null,[((D=n["thumb-label"])==null?void 0:D.call(n,{modelValue:e.modelValue}))??e.modelValue.toFixed(i.value?b.value:1)])])]),[[on,o.value&&e.focused||o.value==="always"]])]}})])}),{}}});const Uv=W()({name:"VSliderTrack",props:{start:{type:Number,required:!0},stop:{type:Number,required:!0},...ne()},emits:{},setup(e,t){let{slots:n}=t;const c=Ie(kr);if(!c)throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");const{color:a,horizontalDirection:l,parsedTicks:i,rounded:s,showTicks:r,tickSize:u,trackColor:o,trackFillColor:d,trackSize:f,vertical:m,min:h,max:g}=c,{roundedClasses:S}=Ue(s),{backgroundColorClasses:b,backgroundColorStyles:C}=Ze(d),{backgroundColorClasses:p,backgroundColorStyles:P}=Ze(o),j=y(()=>`inset-${m.value?"block-end":"inline-start"}`),E=y(()=>m.value?"height":"width"),A=y(()=>({[j.value]:"0%",[E.value]:"100%"})),k=y(()=>e.stop-e.start),x=y(()=>({[j.value]:se(e.start,"%"),[E.value]:se(k.value,"%")})),V=y(()=>r.value?(m.value?i.value.slice().reverse():i.value).map((w,M)=>{var F;const N=m.value?"bottom":"margin-inline-start",Z=w.value!==h.value&&w.value!==g.value?se(w.position,"%"):void 0;return v("div",{key:w.value,class:["v-slider-track__tick",{"v-slider-track__tick--filled":w.position>=e.start&&w.position<=e.stop,"v-slider-track__tick--first":w.value===h.value,"v-slider-track__tick--last":w.value===g.value}],style:{[N]:Z}},[(w.label||n["tick-label"])&&v("div",{class:"v-slider-track__tick-label"},[((F=n["tick-label"])==null?void 0:F.call(n,{tick:w,index:M}))??w.label])])}):[]);return X(()=>v("div",{class:["v-slider-track",S.value,e.class],style:[{"--v-slider-track-size":se(f.value),"--v-slider-tick-size":se(u.value),direction:m.value?void 0:l.value},e.style]},[v("div",{class:["v-slider-track__background",p.value,{"v-slider-track__background--opacity":!!a.value||!d.value}],style:{...A.value,...P.value}},null),v("div",{class:["v-slider-track__fill",b.value],style:{...x.value,...C.value}},null),r.value&&v("div",{class:["v-slider-track__ticks",{"v-slider-track__ticks--always-show":r.value==="always"}]},[V.value])])),{}}}),fs=W()({name:"VSlider",props:{...Nl(),...Dv(),...In(),modelValue:{type:[Number,String],default:0}},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,start:e=>!0,end:e=>!0},setup(e,t){let{slots:n,emit:c}=t;const a=$(),l=zv(e),i=Ce(e,"modelValue",void 0,j=>{const E=typeof j=="string"?parseFloat(j):j??l.min.value;return l.roundValue(E)}),{min:s,max:r,mousePressed:u,roundValue:o,onSliderMousedown:d,onSliderTouchstart:f,trackContainerRef:m,position:h,hasLabels:g,readonly:S}=Hv({props:e,steps:l,onSliderStart:()=>{c("start",i.value)},onSliderEnd:j=>{let{value:E}=j;const A=o(E);i.value=A,c("end",A)},onSliderMove:j=>{let{value:E}=j;return i.value=o(E)},getActiveThumb:()=>{var j;return(j=a.value)==null?void 0:j.$el}}),{isFocused:b,focus:C,blur:p}=Yn(e),P=y(()=>h(i.value));return X(()=>{const[j,E]=st.filterProps(e),A=!!(e.label||n.label||n.prepend);return v(st,le({class:["v-slider",{"v-slider--has-labels":!!n["tick-label"]||g.value,"v-slider--focused":b.value,"v-slider--pressed":u.value,"v-slider--disabled":e.disabled},e.class],style:e.style},j,{focused:b.value}),{...n,prepend:A?k=>{var x,V;return v(me,null,[((x=n.label)==null?void 0:x.call(n,k))??e.label?v(na,{id:k.id.value,class:"v-slider__label",text:e.label},null):void 0,(V=n.prepend)==null?void 0:V.call(n,k)])}:void 0,default:k=>{let{id:x,messagesId:V}=k;return v("div",{class:"v-slider__container",onMousedown:S.value?void 0:d,onTouchstartPassive:S.value?void 0:f},[v("input",{id:x.value,name:e.name||x.value,disabled:e.disabled,readonly:e.readonly,tabindex:"-1",value:i.value},null),v(Uv,{ref:m,start:0,stop:P.value},{"tick-label":n["tick-label"]}),v(ds,{ref:a,"aria-describedby":V.value,focused:b.value,min:s.value,max:r.value,modelValue:i.value,"onUpdate:modelValue":I=>i.value=I,position:P.value,elevation:e.elevation,onFocus:C,onBlur:p},{"thumb-label":n["thumb-label"]})])}})}),{}}}),Dp=Mt({name:"VColorPickerPreview",props:{color:{type:Object},disabled:Boolean,hideAlpha:Boolean,...ne()},emits:{"update:color":e=>!0},setup(e,t){let{emit:n}=t;return X(()=>{var c,a;return v("div",{class:["v-color-picker-preview",{"v-color-picker-preview--hide-alpha":e.hideAlpha},e.class],style:e.style},[v("div",{class:"v-color-picker-preview__dot"},[v("div",{style:{background:sf(e.color??ya)}},null)]),v("div",{class:"v-color-picker-preview__sliders"},[v(fs,{class:"v-color-picker-preview__track v-color-picker-preview__hue",modelValue:(c=e.color)==null?void 0:c.h,"onUpdate:modelValue":l=>n("update:color",{...e.color??ya,h:l}),step:0,min:0,max:360,disabled:e.disabled,thumbSize:14,trackSize:8,trackFillColor:"white",hideDetails:!0},null),!e.hideAlpha&&v(fs,{class:"v-color-picker-preview__track v-color-picker-preview__alpha",modelValue:((a=e.color)==null?void 0:a.a)??1,"onUpdate:modelValue":l=>n("update:color",{...e.color??ya,a:l}),step:1/256,min:0,max:1,disabled:e.disabled,thumbSize:14,trackSize:8,trackFillColor:"white",hideDetails:!0},null)])])}),{}}});const zp=Object.freeze({base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"}),Hp=Object.freeze({base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"}),Up=Object.freeze({base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"}),Wp=Object.freeze({base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"}),Kp=Object.freeze({base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"}),Yp=Object.freeze({base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"}),Gp=Object.freeze({base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"}),Xp=Object.freeze({base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"}),Zp=Object.freeze({base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"}),Qp=Object.freeze({base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"}),Jp=Object.freeze({base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"}),ek=Object.freeze({base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"}),tk=Object.freeze({base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"}),nk=Object.freeze({base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"}),ck=Object.freeze({base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"}),ak=Object.freeze({base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"}),lk=Object.freeze({base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"}),ik=Object.freeze({base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"}),sk=Object.freeze({base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"}),rk=Object.freeze({black:"#000000",white:"#ffffff",transparent:"#ffffff00"}),ok=Object.freeze({red:zp,pink:Hp,purple:Up,deepPurple:Wp,indigo:Kp,blue:Yp,lightBlue:Gp,cyan:Xp,teal:Zp,green:Qp,lightGreen:Jp,lime:ek,yellow:tk,amber:nk,orange:ck,deepOrange:ak,brown:lk,blueGrey:ik,grey:sk,shades:rk});function uk(e){return Object.keys(e).map(t=>{const n=e[t];return n.base?[n.base,n.darken4,n.darken3,n.darken2,n.darken1,n.lighten1,n.lighten2,n.lighten3,n.lighten4,n.lighten5]:[n.black,n.white,n.transparent]})}const dk=Mt({name:"VColorPickerSwatches",props:{swatches:{type:Array,default:()=>uk(ok)},disabled:Boolean,color:Object,maxHeight:[Number,String],...ne()},emits:{"update:color":e=>!0},setup(e,t){let{emit:n}=t;return X(()=>v("div",{class:["v-color-picker-swatches",e.class],style:[{maxHeight:se(e.maxHeight)},e.style]},[v("div",null,[e.swatches.map(c=>v("div",{class:"v-color-picker-swatches__swatch"},[c.map(a=>{const l=Fv(a);return v("div",{class:"v-color-picker-swatches__color",onClick:()=>l&&n("update:color",l)},[v("div",{style:{background:a}},[e.color&&vc(e.color,l)?v(ze,{size:"x-small",icon:"$success",color:Mb(a,"#FFFFFF")>2?"white":"black"},null):void 0])])})]))])])),{}}}),fk=Mt({name:"VColorPicker",props:{canvasHeight:{type:[String,Number],default:150},disabled:Boolean,dotSize:{type:[Number,String],default:10},hideCanvas:Boolean,hideSliders:Boolean,hideInputs:Boolean,mode:{type:String,default:"rgba",validator:e=>Object.keys(oc).includes(e)},modes:{type:Array,default:()=>Object.keys(oc),validator:e=>Array.isArray(e)&&e.every(t=>Object.keys(oc).includes(t))},showSwatches:Boolean,swatches:Array,swatchesMaxHeight:{type:[Number,String],default:150},modelValue:{type:[Object,String]},...un(Lv({width:300}),["height","location","minHeight","maxHeight","minWidth","maxWidth"])},emits:{"update:modelValue":e=>!0,"update:mode":e=>!0},setup(e){const t=Ce(e,"mode"),n=$(null),c=Ce(e,"modelValue",void 0,l=>{let i=Fv(l);return i?(n.value&&(i={...i,h:n.value.h},n.value=null),i):null},l=>l?Mp(l,e.modelValue):null),a=l=>{c.value=l,n.value=l};return mt(()=>{e.modes.includes(t.value)||(t.value=e.modes[0])}),Je({VSlider:{color:void 0,trackColor:void 0,trackFillColor:void 0}}),X(()=>{const[l]=ss.filterProps(e);return v(ss,le({rounded:e.rounded,elevation:e.elevation,theme:e.theme,class:["v-color-picker",e.class],style:[{"--v-color-picker-color-hsv":sf({...c.value??ya,a:1})},e.style]},l,{maxWidth:e.width}),{default:()=>[!e.hideCanvas&&v(Tp,{key:"canvas",color:c.value,"onUpdate:color":a,disabled:e.disabled,dotSize:e.dotSize,width:e.width,height:e.canvasHeight},null),(!e.hideSliders||!e.hideInputs)&&v("div",{key:"controls",class:"v-color-picker__controls"},[!e.hideSliders&&v(Dp,{key:"preview",color:c.value,"onUpdate:color":a,hideAlpha:!t.value.endsWith("a"),disabled:e.disabled},null),!e.hideInputs&&v(Fp,{key:"edit",modes:e.modes,mode:t.value,"onUpdate:mode":i=>t.value=i,color:c.value,"onUpdate:color":a,disabled:e.disabled},null)]),e.showSwatches&&v(dk,{key:"swatches",color:c.value,"onUpdate:color":a,maxHeight:e.swatchesMaxHeight,swatches:e.swatches,disabled:e.disabled},null)]})}),{}}});function vk(e,t,n){if(t==null)return e;if(Array.isArray(t))throw new Error("Multiple matches is not implemented");return typeof t=="number"&&~t?v(me,null,[v("span",{class:"v-combobox__unmask"},[e.substr(0,t)]),v("span",{class:"v-combobox__mask"},[e.substr(t,n)]),v("span",{class:"v-combobox__unmask"},[e.substr(t+n)])]):e}const mk=W()({name:"VCombobox",props:{delimiters:Array,..._v({filterKeys:["title"]}),...br({hideNoData:!0,returnObject:!0}),...un(Ul({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...jn({transition:!1})},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:search":e=>!0,"update:menu":e=>!0},setup(e,t){var K;let{emit:n,slots:c}=t;const{t:a}=Bt(),l=$(),i=$(!1),s=$(!0),r=$(),u=Ce(e,"menu"),o=y({get:()=>u.value,set:z=>{var fe;u.value&&!z&&((fe=r.value)!=null&&fe.ΨopenChildren)||(u.value=z)}}),d=$(-1);let f=!1;const m=y(()=>{var z;return(z=l.value)==null?void 0:z.color}),{items:h,transformIn:g,transformOut:S}=gr(e),{textColorClasses:b,textColorStyles:C}=vt(m),p=Ce(e,"modelValue",[],z=>g(Tt(z)),z=>{const fe=S(z);return e.multiple?fe:fe[0]??null}),P=zl(),j=$(e.multiple?"":((K=p.value[0])==null?void 0:K.title)??""),E=y({get:()=>j.value,set:z=>{var fe;if(j.value=z,e.multiple||(p.value=[Ic(e,z)]),z&&e.multiple&&((fe=e.delimiters)!=null&&fe.length)){const ue=z.split(new RegExp(`(?:${e.delimiters.join("|")})+`));ue.length>1&&(ue.forEach(B=>{B=B.trim(),B&&D(Ic(e,B))}),j.value="")}z||(d.value=-1),s.value=!z}});ae(j,z=>{f?Oe(()=>f=!1):i.value&&!o.value&&(o.value=!0),n("update:search",z)}),ae(p,z=>{var fe;e.multiple||(j.value=((fe=z[0])==null?void 0:fe.title)??"")});const{filteredItems:A,getMatches:k}=xv(e,h,y(()=>s.value?void 0:E.value)),x=y(()=>p.value.map(z=>h.value.find(fe=>e.valueComparator(fe.value,z.value))||z)),V=y(()=>e.hideSelected?A.value.filter(z=>!x.value.some(fe=>fe.value===z.value)):A.value),I=y(()=>x.value.map(z=>z.props.value)),w=y(()=>x.value[d.value]),M=$();function N(z){f=!0,e.openOnClear&&(o.value=!0)}function Z(){e.hideNoData&&!h.value.length||e.readonly||P!=null&&P.isReadonly.value||(o.value=!0)}function F(z){var B,T;if(e.readonly||P!=null&&P.isReadonly.value)return;const fe=l.value.selectionStart,ue=I.value.length;if((d.value>-1||["Enter","ArrowDown","ArrowUp"].includes(z.key))&&z.preventDefault(),["Enter","ArrowDown"].includes(z.key)&&(o.value=!0),["Escape"].includes(z.key)&&(o.value=!1),["Enter","Escape","Tab"].includes(z.key)&&(s.value=!0),z.key==="ArrowDown"?(B=M.value)==null||B.focus("next"):z.key==="ArrowUp"&&((T=M.value)==null||T.focus("prev")),!!e.multiple){if(["Backspace","Delete"].includes(z.key)){if(d.value<0){z.key==="Backspace"&&!E.value&&(d.value=ue-1);return}const O=d.value;w.value&&D(w.value),d.value=O>=ue-1?ue-2:O}if(z.key==="ArrowLeft"){if(d.value<0&&fe>0)return;const O=d.value>-1?d.value-1:ue-1;x.value[O]?d.value=O:(d.value=-1,l.value.setSelectionRange(E.value.length,E.value.length))}if(z.key==="ArrowRight"){if(d.value<0)return;const O=d.value+1;x.value[O]?d.value=O:(d.value=-1,l.value.setSelectionRange(0,0))}z.key==="Enter"&&E.value&&(D(Ic(e,E.value)),E.value="")}}function H(){i.value&&(s.value=!0)}function D(z){if(e.multiple){const fe=I.value.findIndex(ue=>e.valueComparator(ue,z.value));if(fe===-1)p.value=[...p.value,z];else{const ue=[...p.value];ue.splice(fe,1),p.value=ue}E.value=""}else p.value=[z],j.value=z.title,Oe(()=>{o.value=!1,s.value=!0})}function J(z){i.value=!0}function R(z){var fe;z.relatedTarget==null&&((fe=l.value)==null||fe.focus())}return ae(A,z=>{!z.length&&e.hideNoData&&(o.value=!1)}),ae(i,z=>{if(z)d.value=-1;else{if(o.value=!1,!e.multiple||!E.value)return;p.value=[...p.value,Ic(e,E.value)],E.value=""}}),X(()=>{const z=!!(e.chips||c.chip),fe=!!(!e.hideNoData||V.value.length||c.prepend||c.append||c["no-data"]),ue=p.value.length>0,[B]=fc.filterProps(e);return v(fc,le({ref:l},B,{modelValue:E.value,"onUpdate:modelValue":[T=>E.value=T,T=>{T==null&&(p.value=[])}],focused:i.value,"onUpdate:focused":T=>i.value=T,validationValue:p.externalValue,dirty:ue,class:["v-combobox",{"v-combobox--active-menu":o.value,"v-combobox--chips":!!e.chips,"v-combobox--selecting-index":d.value>-1,[`v-combobox--${e.multiple?"multiple":"single"}`]:!0},e.class],style:e.style,appendInnerIcon:e.items.length?e.menuIcon:void 0,readonly:e.readonly,placeholder:ue?void 0:e.placeholder,"onClick:clear":N,"onMousedown:control":Z,onKeydown:F}),{...c,default:()=>v(me,null,[v(Gl,le({ref:r,modelValue:o.value,"onUpdate:modelValue":T=>o.value=T,activator:"parent",contentClass:"v-combobox__content",eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:H},e.menuProps),{default:()=>[fe&&v(Kl,{ref:M,selected:I.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:T=>T.preventDefault(),onFocusin:J,onFocusout:R},{default:()=>{var T,O,re;return[!V.value.length&&!e.hideNoData&&(((T=c["no-data"])==null?void 0:T.call(c))??v(kn,{title:a(e.noDataText)},null)),(O=c["prepend-item"])==null?void 0:O.call(c),V.value.map(oe=>{var je;return((je=c.item)==null?void 0:je.call(c,{item:oe,props:le(oe.props,{onClick:()=>D(oe)})}))??v(kn,le({key:oe.value},oe.props,{onClick:()=>D(oe)}),{prepend:ve=>{let{isSelected:_}=ve;return v(me,null,[e.multiple&&!e.hideSelected?v(Nc,{modelValue:_,ripple:!1,tabindex:"-1"},null):void 0,oe.props.prependIcon&&v(ze,{icon:oe.props.prependIcon},null)])},title:()=>{var ve,_;return s.value?oe.title:vk(oe.title,(ve=k(oe))==null?void 0:ve.title,((_=E.value)==null?void 0:_.length)??0)}})}),(re=c["append-item"])==null?void 0:re.call(c)]}})]}),x.value.map((T,O)=>{var je;function re(ve){ve.stopPropagation(),ve.preventDefault(),D(T)}const oe={"onClick:close":re,onMousedown(ve){ve.preventDefault(),ve.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0};return v("div",{key:T.value,class:["v-combobox__selection",O===d.value&&["v-combobox__selection--selected",b.value]],style:O===d.value?C.value:{}},[z?c.chip?v($e,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:T.title}}},{default:()=>{var ve;return[(ve=c.chip)==null?void 0:ve.call(c,{item:T,index:O,props:oe})]}}):v(Fa,le({key:"chip",closable:e.closableChips,size:"small",text:T.title},oe),null):((je=c.selection)==null?void 0:je.call(c,{item:T,index:O}))??v("span",{class:"v-combobox__selection-text"},[T.title,e.multiple&&O<x.value.length-1&&v("span",{class:"v-combobox__selection-comma"},[lt(",")])])])})])})}),Gt({isFocused:i,isPristine:s,menu:o,search:E,selectionIndex:d,filteredItems:A,select:D},l)}});const hk=W()({name:"VDialog",props:{fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...Da({origin:"center center",scrollStrategy:"block",transition:{component:Ol},zIndex:2400})},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const c=Ce(e,"modelValue"),{scopeId:a}=Na(),l=$();function i(r){var d,f;const u=r.relatedTarget,o=r.target;if(u!==o&&((d=l.value)!=null&&d.contentEl)&&((f=l.value)!=null&&f.globalTop)&&![document,l.value.contentEl].includes(o)&&!l.value.contentEl.contains(o)){const m=Ks(l.value.contentEl);if(!m.length)return;const h=m[0],g=m[m.length-1];u===h?g.focus():h.focus()}}Xe&&ae(()=>c.value&&e.retainFocus,r=>{r?document.addEventListener("focusin",i):document.removeEventListener("focusin",i)},{immediate:!0}),ae(c,async r=>{var u,o;await Oe(),r?(u=l.value.contentEl)==null||u.focus({preventScroll:!0}):(o=l.value.activatorEl)==null||o.focus({preventScroll:!0})});const s=y(()=>le({"aria-haspopup":"dialog","aria-expanded":String(c.value)},e.activatorProps));return X(()=>{const[r]=Sn.filterProps(e);return v(Sn,le({ref:l,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},r,{modelValue:c.value,"onUpdate:modelValue":u=>c.value=u,"aria-modal":"true",activatorProps:s.value,role:"dialog"},a),{activator:n.activator,default:function(){for(var u=arguments.length,o=new Array(u),d=0;d<u;d++)o[d]=arguments[d];return v($e,{root:!0},{default:()=>{var f;return[(f=n.default)==null?void 0:f.call(n,...o)]}})}})}),Gt({},l)}});const Ta=Symbol.for("vuetify:v-expansion-panel"),gk=["default","accordion","inset","popout"],yk=W()({name:"VExpansionPanels",props:{color:String,variant:{type:String,default:"default",validator:e=>gk.includes(e)},readonly:Boolean,...ne(),...Xc(),..._e(),...Ee()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;pc(e,Ta);const{themeClasses:c}=Pe(e),a=y(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return Je({VExpansionPanel:{color:Y(e,"color")},VExpansionPanelTitle:{readonly:Y(e,"readonly")}}),X(()=>v(e.tag,{class:["v-expansion-panels",c.value,a.value,e.class],style:e.style},n)),{}}}),Wv=ye({color:String,expandIcon:{type:pe,default:"$expand"},collapseIcon:{type:pe,default:"$collapse"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean},"v-expansion-panel-title"),Kv=W()({name:"VExpansionPanelTitle",directives:{Ripple:Un},props:{...ne(),...Wv()},setup(e,t){let{slots:n}=t;const c=Ie(Ta);if(!c)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:a,backgroundColorStyles:l}=Ze(e,"color"),i=y(()=>({collapseIcon:e.collapseIcon,disabled:c.disabled.value,expanded:c.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return X(()=>{var s;return He(v("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":c.isSelected.value},a.value,e.class],style:[l.value,e.style],type:"button",tabindex:c.disabled.value?-1:void 0,disabled:c.disabled.value,"aria-expanded":c.isSelected.value,onClick:e.readonly?void 0:c.toggle},[v("span",{class:"v-expansion-panel-title__overlay"},null),(s=n.default)==null?void 0:s.call(n,i.value),!e.hideActions&&v("span",{class:"v-expansion-panel-title__icon"},[n.actions?n.actions(i.value):v(ze,{icon:c.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[Ct("ripple"),e.ripple]])}),{}}}),Yv=W()({name:"VExpansionPanelText",props:{...ne(),...Yl()},setup(e,t){let{slots:n}=t;const c=Ie(Ta);if(!c)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:a,onAfterLeave:l}=yr(e,c.isSelected);return X(()=>v(Ll,{onAfterLeave:l},{default:()=>{var i;return[He(v("div",{class:["v-expansion-panel-text",e.class],style:e.style},[n.default&&a.value&&v("div",{class:"v-expansion-panel-text__wrapper"},[(i=n.default)==null?void 0:i.call(n)])]),[[on,c.isSelected.value]])]}})),{}}}),bk=W()({name:"VExpansionPanel",props:{title:String,text:String,bgColor:String,...ne(),...tt(),...Zc(),...Yl(),...De(),..._e(),...Wv()},emits:{"group:selected":e=>!0},setup(e,t){let{slots:n}=t;const c=Qc(e,Ta),{backgroundColorClasses:a,backgroundColorStyles:l}=Ze(e,"bgColor"),{elevationClasses:i}=ot(e),{roundedClasses:s}=Ue(e),r=y(()=>(c==null?void 0:c.disabled.value)||e.disabled),u=y(()=>c.group.items.value.reduce((f,m,h)=>(c.group.selected.value.includes(m.id)&&f.push(h),f),[])),o=y(()=>{const f=c.group.items.value.findIndex(m=>m.id===c.id);return!c.isSelected.value&&u.value.some(m=>m-f===1)}),d=y(()=>{const f=c.group.items.value.findIndex(m=>m.id===c.id);return!c.isSelected.value&&u.value.some(m=>m-f===-1)});return Ke(Ta,c),X(()=>{const f=!!(n.text||e.text),m=!!(n.title||e.title);return v(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":c.isSelected.value,"v-expansion-panel--before-active":o.value,"v-expansion-panel--after-active":d.value,"v-expansion-panel--disabled":r.value},s.value,a.value,e.class],style:[l.value,e.style],"aria-expanded":c.isSelected.value},{default:()=>{var h;return[v("div",{class:["v-expansion-panel__shadow",...i.value]},null),m&&v(Kv,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[n.title?n.title():e.title]}),f&&v(Yv,{key:"text",eager:e.eager},{default:()=>[n.text?n.text():e.text]}),(h=n.default)==null?void 0:h.call(n)]}})}),{}}});const pk=W()({name:"VFileInput",inheritAttrs:!1,props:{chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(e)},...In({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>Tt(e).every(t=>t!=null&&typeof t=="object")},...Dl({clearable:!0})},emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:n,emit:c,slots:a}=t;const{t:l}=Bt(),i=Ce(e,"modelValue"),{isFocused:s,focus:r,blur:u}=Yn(e),o=y(()=>typeof e.showSize!="boolean"?e.showSize:void 0),d=y(()=>(i.value??[]).reduce((k,x)=>{let{size:V=0}=x;return k+V},0)),f=y(()=>Mo(d.value,o.value)),m=y(()=>(i.value??[]).map(k=>{const{name:x="",size:V=0}=k;return e.showSize?`${x} (${Mo(V,o.value)})`:x})),h=y(()=>{var x;const k=((x=i.value)==null?void 0:x.length)??0;return e.showSize?l(e.counterSizeString,k,f.value):l(e.counterString,k)}),g=$(),S=$(),b=$(),C=y(()=>s.value||e.active);function p(){var k;b.value!==document.activeElement&&((k=b.value)==null||k.focus()),s.value||r()}function P(k){E(k)}function j(k){c("mousedown:control",k)}function E(k){var x;(x=b.value)==null||x.click(),c("click:control",k)}function A(k){k.stopPropagation(),p(),Oe(()=>{i.value=[],Ws(e["onClick:clear"],k)})}return ae(i,k=>{(!Array.isArray(k)||!k.length)&&b.value&&(b.value.value="")}),X(()=>{const k=!!(a.counter||e.counter),x=!!(k||a.details),[V,I]=mc(n),[{modelValue:w,...M}]=st.filterProps(e),[N]=vr(e);return v(st,le({ref:g,modelValue:i.value,"onUpdate:modelValue":Z=>i.value=Z,class:["v-file-input",e.class],style:e.style,"onClick:prepend":P},V,M,{focused:s.value}),{...a,default:Z=>{let{id:F,isDisabled:H,isDirty:D,isReadonly:J,isValid:R}=Z;return v(La,le({ref:S,"prepend-icon":e.prependIcon,onMousedown:j,onClick:E,"onClick:clear":A,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},N,{id:F.value,active:C.value||D.value,dirty:D.value,disabled:H.value,focused:s.value,error:R.value===!1}),{...a,default:K=>{var ue;let{props:{class:z,...fe}}=K;return v(me,null,[v("input",le({ref:b,type:"file",readonly:J.value,disabled:H.value,multiple:e.multiple,name:e.name,onClick:B=>{B.stopPropagation(),p()},onChange:B=>{if(!B.target)return;const T=B.target;i.value=[...T.files??[]]},onFocus:p,onBlur:u},fe,I),null),v("div",{class:z},[!!((ue=i.value)!=null&&ue.length)&&(a.selection?a.selection({fileNames:m.value,totalBytes:d.value,totalBytesReadable:f.value}):e.chips?m.value.map(B=>v(Fa,{key:B,size:"small",color:e.color},{default:()=>[B]})):m.value.join(", "))])])}})},details:x?Z=>{var F,H;return v(me,null,[(F=a.details)==null?void 0:F.call(a,Z),k&&v(me,null,[v("span",null,null),v(Hl,{active:!!((H=i.value)!=null&&H.length),value:h.value},a.counter)])])}:void 0})}),Gt({},g,S,b)}});const kk=W()({name:"VFooter",props:{app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...At(),...ne(),...tt(),...Kc(),...De(),..._e({tag:"footer"}),...Ee()},setup(e,t){let{slots:n}=t;const{themeClasses:c}=Pe(e),{backgroundColorClasses:a,backgroundColorStyles:l}=Ze(Y(e,"color")),{borderClasses:i}=Lt(e),{elevationClasses:s}=ot(e),{roundedClasses:r}=Ue(e),u=$(32),{resizeRef:o}=sn(m=>{m.length&&(u.value=m[0].target.clientHeight)}),d=y(()=>e.height==="auto"?u.value:parseInt(e.height,10)),{layoutItemStyles:f}=Yc({id:e.name,order:y(()=>parseInt(e.order,10)),position:y(()=>"bottom"),layoutSize:d,elementSize:y(()=>e.height==="auto"?void 0:d.value),active:y(()=>e.app),absolute:Y(e,"absolute")});return X(()=>v(e.tag,{ref:o,class:["v-footer",c.value,a.value,i.value,s.value,r.value,e.class],style:[l.value,e.app?f.value:void 0,e.style]},n)),{}}}),Sk=W()({name:"VForm",props:{...ne(),...x0()},emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,t){let{slots:n,emit:c}=t;const a=w0(e),l=$();function i(r){r.preventDefault(),a.reset()}function s(r){const u=r,o=a.validate();u.then=o.then.bind(o),u.catch=o.catch.bind(o),u.finally=o.finally.bind(o),c("submit",u),u.defaultPrevented||o.then(d=>{var m;let{valid:f}=d;f&&((m=l.value)==null||m.submit())}),u.preventDefault()}return X(()=>{var r;return v("form",{ref:l,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:i,onSubmit:s},[(r=n.default)==null?void 0:r.call(n,a)])}),Gt(a,l)}});const Ck=W()({name:"VContainer",props:{fluid:{type:Boolean,default:!1},...ne(),..._e()},setup(e,t){let{slots:n}=t;return X(()=>v(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},e.class],style:e.style},n)),{}}}),Gv=(()=>Bl.reduce((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e),{}))(),Xv=(()=>Bl.reduce((e,t)=>{const n="offset"+Cn(t);return e[n]={type:[String,Number],default:null},e},{}))(),Zv=(()=>Bl.reduce((e,t)=>{const n="order"+Cn(t);return e[n]={type:[String,Number],default:null},e},{}))(),hu={col:Object.keys(Gv),offset:Object.keys(Xv),order:Object.keys(Zv)};function _k(e,t,n){let c=e;if(!(n==null||n===!1)){if(t){const a=t.replace(e,"");c+=`-${a}`}return e==="col"&&(c="v-"+c),e==="col"&&(n===""||n===!0)||(c+=`-${n}`),c.toLowerCase()}}const xk=["auto","start","end","center","baseline","stretch"],wk=W()({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...Gv,offset:{type:[String,Number],default:null},...Xv,order:{type:[String,Number],default:null},...Zv,alignSelf:{type:String,default:null,validator:e=>xk.includes(e)},...ne(),..._e()},setup(e,t){let{slots:n}=t;const c=y(()=>{const a=[];let l;for(l in hu)hu[l].forEach(s=>{const r=e[s],u=_k(l,s,r);u&&a.push(u)});const i=a.some(s=>s.startsWith("v-col-"));return a.push({"v-col":!i||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),a});return()=>{var a;return rn(e.tag,{class:[c.value,e.class],style:e.style},(a=n.default)==null?void 0:a.call(n))}}}),Sr=["start","end","center"],Qv=["space-between","space-around","space-evenly"];function Cr(e,t){return Bl.reduce((n,c)=>{const a=e+Cn(c);return n[a]=t(),n},{})}const jk=[...Sr,"baseline","stretch"],Jv=e=>jk.includes(e),em=Cr("align",()=>({type:String,default:null,validator:Jv})),Vk=[...Sr,...Qv],tm=e=>Vk.includes(e),nm=Cr("justify",()=>({type:String,default:null,validator:tm})),Ik=[...Sr,...Qv,"stretch"],cm=e=>Ik.includes(e),am=Cr("alignContent",()=>({type:String,default:null,validator:cm})),gu={align:Object.keys(em),justify:Object.keys(nm),alignContent:Object.keys(am)},Ek={align:"align",justify:"justify",alignContent:"align-content"};function Ak(e,t,n){let c=Ek[e];if(n!=null){if(t){const a=t.replace(e,"");c+=`-${a}`}return c+=`-${n}`,c.toLowerCase()}}const qk=W()({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Jv},...em,justify:{type:String,default:null,validator:tm},...nm,alignContent:{type:String,default:null,validator:cm},...am,...ne(),..._e()},setup(e,t){let{slots:n}=t;const c=y(()=>{const a=[];let l;for(l in gu)gu[l].forEach(i=>{const s=e[i],r=Ak(l,i,s);r&&a.push(r)});return a.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),a});return()=>{var a;return rn(e.tag,{class:["v-row",c.value,e.class],style:e.style},(a=n.default)==null?void 0:a.call(n))}}}),Pk=Yt("flex-grow-1","div","VSpacer"),Tk=W()({name:"VHover",props:{disabled:Boolean,modelValue:{type:Boolean,default:void 0},...hv()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const c=Ce(e,"modelValue"),{runOpenDelay:a,runCloseDelay:l}=gv(e,i=>!e.disabled&&(c.value=i));return()=>{var i;return(i=n.default)==null?void 0:i.call(n,{isHovering:c.value,props:{onMouseenter:a,onMouseleave:l}})}}});const lm=Symbol.for("vuetify:v-item-group"),$k=W()({name:"VItemGroup",props:{...ne(),...Xc({selectedClass:"v-item--selected"}),..._e(),...Ee()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const{themeClasses:c}=Pe(e),{isSelected:a,select:l,next:i,prev:s,selected:r}=pc(e,lm);return()=>v(e.tag,{class:["v-item-group",c.value,e.class],style:e.style},{default:()=>{var u;return[(u=n.default)==null?void 0:u.call(n,{isSelected:a,select:l,next:i,prev:s,selected:r.value})]}})}}),Mk=W()({name:"VItem",props:Zc(),emits:{"group:selected":e=>!0},setup(e,t){let{slots:n}=t;const{isSelected:c,select:a,toggle:l,selectedClass:i,value:s,disabled:r}=Qc(e,lm);return()=>{var u;return(u=n.default)==null?void 0:u.call(n,{isSelected:c.value,selectedClass:i.value,select:a,toggle:l,value:s.value,disabled:r.value})}}});const Bk=Yt("v-kbd");const Rk=W()({name:"VLayout",props:{...ne(),...xf()},setup(e,t){let{slots:n}=t;const{layoutClasses:c,layoutStyles:a,getLayoutItem:l,items:i,layoutRef:s}=wf(e);return X(()=>{var r;return v("div",{ref:s,class:[c.value,e.class],style:[a.value,e.style]},[(r=n.default)==null?void 0:r.call(n)])}),{getLayoutItem:l,items:i}}});const Ok=W()({name:"VLayoutItem",props:{position:{type:String,required:!0},size:{type:[Number,String],default:300},modelValue:Boolean,...ne(),...Kc()},setup(e,t){let{slots:n}=t;const{layoutItemStyles:c}=Yc({id:e.name,order:y(()=>parseInt(e.order,10)),position:Y(e,"position"),elementSize:Y(e,"size"),layoutSize:Y(e,"size"),active:Y(e,"modelValue"),absolute:Y(e,"absolute")});return()=>{var a;return v("div",{class:["v-layout-item",e.class],style:[c.value,e.style]},[(a=n.default)==null?void 0:a.call(n)])}}}),Lk=W()({name:"VLazy",directives:{intersect:Ba},props:{modelValue:Boolean,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},...ne(),...Rt(),..._e(),...jn({transition:"fade-transition"})},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const{dimensionStyles:c}=Ot(e),a=Ce(e,"modelValue");function l(i){a.value||(a.value=i)}return X(()=>He(v(e.tag,{class:["v-lazy",e.class],style:[c.value,e.style]},{default:()=>[a.value&&v(Ht,{transition:e.transition,appear:!0},{default:()=>{var i;return[(i=n.default)==null?void 0:i.call(n)]}})]}),[[Ct("intersect"),{handler:l,options:e.options},null]])),{}}});const Fk=W()({name:"VLocaleProvider",props:{locale:String,fallbackLocale:String,messages:Object,rtl:{type:Boolean,default:void 0},...ne()},setup(e,t){let{slots:n}=t;const{rtlClasses:c}=Gb(e);return X(()=>{var a;return v("div",{class:["v-locale-provider",c.value,e.class],style:e.style},[(a=n.default)==null?void 0:a.call(n)])}),{}}});const Nk=W()({name:"VMain",props:{scrollable:Boolean,...ne(),..._e({tag:"main"})},setup(e,t){let{slots:n}=t;const{mainStyles:c}=R2(),{ssrBootStyles:a}=gc();return X(()=>v(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[c.value,a.value,e.style]},{default:()=>{var l,i;return[e.scrollable?v("div",{class:"v-main__scroller"},[(l=n.default)==null?void 0:l.call(n)]):(i=n.default)==null?void 0:i.call(n)]}})),{}}});function Dk(e){let{rootEl:t,isSticky:n,layoutItemStyles:c}=e;const a=$(!1),l=$(0),i=y(()=>{const u=typeof a.value=="boolean"?"top":a.value;return[n.value?{top:"auto",bottom:"auto",height:void 0}:void 0,a.value?{[u]:se(l.value)}:{top:c.value.top}]});mt(()=>{ae(n,u=>{u?window.addEventListener("scroll",r,{passive:!0}):window.removeEventListener("scroll",r)},{immediate:!0})}),pt(()=>{document.removeEventListener("scroll",r)});let s=0;function r(){const u=s>window.scrollY?"up":"down",o=t.value.getBoundingClientRect(),d=parseFloat(c.value.top??0),f=window.scrollY-Math.max(0,l.value-d),m=o.height+Math.max(l.value,d)-window.scrollY-window.innerHeight;o.height<window.innerHeight-d?(a.value="top",l.value=d):u==="up"&&a.value==="bottom"||u==="down"&&a.value==="top"?(l.value=window.scrollY+o.top,a.value=!0):u==="down"&&m<=0?(l.value=0,a.value="bottom"):u==="up"&&f<=0&&(l.value=o.top+f,a.value="top"),s=window.scrollY}return{isStuck:a,stickyStyles:i}}const zk=100,Hk=20;function yu(e){const t=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*t}function bu(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let t=0;for(let n=e.length-1;n>0;n--){if(e[n].t===e[n-1].t)continue;const c=yu(t),a=(e[n].d-e[n-1].d)/(e[n].t-e[n-1].t);t+=(a-c)*Math.abs(a),n===e.length-1&&(t*=.5)}return yu(t)*1e3}function Uk(){const e={};function t(a){Array.from(a.changedTouches).forEach(l=>{(e[l.identifier]??(e[l.identifier]=new bb(Hk))).push([a.timeStamp,l])})}function n(a){Array.from(a.changedTouches).forEach(l=>{delete e[l.identifier]})}function c(a){var u;const l=(u=e[a])==null?void 0:u.values().reverse();if(!l)throw new Error(`No samples for touch id ${a}`);const i=l[0],s=[],r=[];for(const o of l){if(i[0]-o[0]>zk)break;s.push({t:o[0],d:o[1].clientX}),r.push({t:o[0],d:o[1].clientY})}return{x:bu(s),y:bu(r),get direction(){const{x:o,y:d}=this,[f,m]=[Math.abs(o),Math.abs(d)];return f>m&&o>=0?"right":f>m&&o<=0?"left":m>f&&d>=0?"down":m>f&&d<=0?"up":Wk()}}}return{addMovement:t,endTouch:n,getVelocity:c}}function Wk(){throw new Error}function Kk(e){let{isActive:t,isTemporary:n,width:c,touchless:a,position:l}=e;mt(()=>{window.addEventListener("touchstart",b,{passive:!0}),window.addEventListener("touchmove",C,{passive:!1}),window.addEventListener("touchend",p,{passive:!0})}),pt(()=>{window.removeEventListener("touchstart",b),window.removeEventListener("touchmove",C),window.removeEventListener("touchend",p)});const i=y(()=>["left","right"].includes(l.value)),{addMovement:s,endTouch:r,getVelocity:u}=Uk();let o=!1;const d=$(!1),f=$(0),m=$(0);let h;function g(j,E){return(l.value==="left"?j:l.value==="right"?document.documentElement.clientWidth-j:l.value==="top"?j:l.value==="bottom"?document.documentElement.clientHeight-j:wc())-(E?c.value:0)}function S(j){let E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const A=l.value==="left"?(j-m.value)/c.value:l.value==="right"?(document.documentElement.clientWidth-j-m.value)/c.value:l.value==="top"?(j-m.value)/c.value:l.value==="bottom"?(document.documentElement.clientHeight-j-m.value)/c.value:wc();return E?Math.max(0,Math.min(1,A)):A}function b(j){if(a.value)return;const E=j.changedTouches[0].clientX,A=j.changedTouches[0].clientY,k=25,x=l.value==="left"?E<k:l.value==="right"?E>document.documentElement.clientWidth-k:l.value==="top"?A<k:l.value==="bottom"?A>document.documentElement.clientHeight-k:wc(),V=t.value&&(l.value==="left"?E<c.value:l.value==="right"?E>document.documentElement.clientWidth-c.value:l.value==="top"?A<c.value:l.value==="bottom"?A>document.documentElement.clientHeight-c.value:wc());(x||V||t.value&&n.value)&&(o=!0,h=[E,A],m.value=g(i.value?E:A,t.value),f.value=S(i.value?E:A),r(j),s(j))}function C(j){const E=j.changedTouches[0].clientX,A=j.changedTouches[0].clientY;if(o){if(!j.cancelable){o=!1;return}const x=Math.abs(E-h[0]),V=Math.abs(A-h[1]);(i.value?x>V&&x>3:V>x&&V>3)?(d.value=!0,o=!1):(i.value?V:x)>3&&(o=!1)}if(!d.value)return;j.preventDefault(),s(j);const k=S(i.value?E:A,!1);f.value=Math.max(0,Math.min(1,k)),k>1?m.value=g(i.value?E:A,!0):k<0&&(m.value=g(i.value?E:A,!1))}function p(j){if(o=!1,!d.value)return;s(j),d.value=!1;const E=u(j.changedTouches[0].identifier),A=Math.abs(E.x),k=Math.abs(E.y);(i.value?A>k&&A>400:k>A&&k>3)?t.value=E.direction===({left:"right",right:"left",top:"down",bottom:"up"}[l.value]||wc()):t.value=f.value>.5}const P=y(()=>d.value?{transform:l.value==="left"?`translateX(calc(-100% + ${f.value*c.value}px))`:l.value==="right"?`translateX(calc(100% - ${f.value*c.value}px))`:l.value==="top"?`translateY(calc(-100% + ${f.value*c.value}px))`:l.value==="bottom"?`translateY(calc(100% - ${f.value*c.value}px))`:wc(),transition:"none"}:void 0);return{isDragging:d,dragProgress:f,dragStyles:P}}function wc(){throw new Error}const Yk=["start","end","left","right","top","bottom"],Gk=W()({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Yk.includes(e)},sticky:Boolean,...At(),...ne(),...tt(),...Kc(),...De(),..._e({tag:"nav"}),...Ee()},emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,t){let{attrs:n,emit:c,slots:a}=t;const{isRtl:l}=wn(),{themeClasses:i}=Pe(e),{borderClasses:s}=Lt(e),{backgroundColorClasses:r,backgroundColorStyles:u}=Ze(Y(e,"color")),{elevationClasses:o}=ot(e),{mobile:d}=hc(),{roundedClasses:f}=Ue(e),m=Hf(),h=Ce(e,"modelValue",null,D=>!!D),{ssrBootStyles:g}=gc(),S=$(),b=$(!1),C=y(()=>e.rail&&e.expandOnHover&&b.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),p=y(()=>Hi(e.location,l.value)),P=y(()=>!e.permanent&&(d.value||e.temporary)),j=y(()=>e.sticky&&!P.value&&p.value!=="bottom");e.expandOnHover&&e.rail!=null&&ae(b,D=>c("update:rail",!D)),e.disableResizeWatcher||ae(P,D=>!e.permanent&&Oe(()=>h.value=!D)),!e.disableRouteWatcher&&m&&ae(m.currentRoute,()=>P.value&&(h.value=!1)),ae(()=>e.permanent,D=>{D&&(h.value=!0)}),Al(()=>{e.modelValue!=null||P.value||(h.value=e.permanent||!d.value)});const{isDragging:E,dragProgress:A,dragStyles:k}=Kk({isActive:h,isTemporary:P,width:C,touchless:Y(e,"touchless"),position:p}),x=y(()=>{const D=P.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):C.value;return E.value?D*A.value:D}),{layoutItemStyles:V,layoutItemScrimStyles:I}=Yc({id:e.name,order:y(()=>parseInt(e.order,10)),position:p,layoutSize:x,elementSize:C,active:y(()=>h.value||E.value),disableTransitions:y(()=>E.value),absolute:y(()=>e.absolute||j.value&&typeof w.value!="string")}),{isStuck:w,stickyStyles:M}=Dk({rootEl:S,isSticky:j,layoutItemStyles:V}),N=Ze(y(()=>typeof e.scrim=="string"?e.scrim:null)),Z=y(()=>({...E.value?{opacity:A.value*.2,transition:"none"}:void 0,...I.value}));Je({VList:{bgColor:"transparent"}});function F(){b.value=!0}function H(){b.value=!1}return X(()=>{const D=a.image||e.image;return v(me,null,[v(e.tag,le({ref:S,onMouseenter:F,onMouseleave:H,class:["v-navigation-drawer",`v-navigation-drawer--${p.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":b.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":P.value,"v-navigation-drawer--active":h.value,"v-navigation-drawer--sticky":j.value},i.value,r.value,s.value,o.value,f.value,e.class],style:[u.value,V.value,k.value,g.value,M.value,e.style]},n),{default:()=>{var J,R,K,z;return[D&&v("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?(J=a.image)==null?void 0:J.call(a,{image:e.image}):v("img",{src:e.image,alt:""},null)]),a.prepend&&v("div",{class:"v-navigation-drawer__prepend"},[(R=a.prepend)==null?void 0:R.call(a)]),v("div",{class:"v-navigation-drawer__content"},[(K=a.default)==null?void 0:K.call(a)]),a.append&&v("div",{class:"v-navigation-drawer__append"},[(z=a.append)==null?void 0:z.call(a)])]}}),v(ln,{name:"fade-transition"},{default:()=>[P.value&&(E.value||h.value)&&!!e.scrim&&v("div",{class:["v-navigation-drawer__scrim",N.backgroundColorClasses.value],style:[Z.value,N.backgroundColorStyles.value],onClick:()=>h.value=!1},null)]})])}),{isStuck:w}}}),Xk=Mt({name:"VNoSsr",setup(e,t){let{slots:n}=t;const c=pv();return()=>{var a;return c.value&&((a=n.default)==null?void 0:a.call(n))}}});function Zk(){const e=$([]);sd(()=>e.value=[]);function t(n,c){e.value[c]=n}return{refs:e,updateRef:t}}const Qk=W()({name:"VPagination",props:{activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:pe,default:"$first"},prevIcon:{type:pe,default:"$prev"},nextIcon:{type:pe,default:"$next"},lastIcon:{type:pe,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...At(),...ne(),...nt(),...tt(),...De(),...Vn(),..._e({tag:"nav"}),...Ee(),...Ft({variant:"text"})},emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,t){let{slots:n,emit:c}=t;const a=Ce(e,"modelValue"),{t:l,n:i}=Bt(),{isRtl:s}=wn(),{themeClasses:r}=Pe(e),{width:u}=hc(),o=$(-1);Je(void 0,{scoped:!0});const{resizeRef:d}=sn(k=>{if(!k.length)return;const{target:x,contentRect:V}=k[0],I=x.querySelector(".v-pagination__list > *");if(!I)return;const w=V.width,M=I.offsetWidth+parseFloat(getComputedStyle(I).marginRight)*2;o.value=g(w,M)}),f=y(()=>parseInt(e.length,10)),m=y(()=>parseInt(e.start,10)),h=y(()=>e.totalVisible?parseInt(e.totalVisible,10):o.value>=0?o.value:g(u.value,58));function g(k,x){const V=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((k-x*V)/x).toFixed(2)))}const S=y(()=>{if(f.value<=0||isNaN(f.value)||f.value>Number.MAX_SAFE_INTEGER)return[];if(h.value<=1)return[a.value];if(f.value<=h.value)return cn(f.value,m.value);const k=h.value%2===0,x=k?h.value/2:Math.floor(h.value/2),V=k?x:x+1,I=f.value-x;if(V-a.value>=0)return[...cn(Math.max(1,h.value-1),m.value),e.ellipsis,f.value];if(a.value-I>=(k?1:0)){const w=h.value-1,M=f.value-w+m.value;return[m.value,e.ellipsis,...cn(w,M)]}else{const w=Math.max(1,h.value-3),M=w===1?a.value:a.value-Math.ceil(w/2)+m.value;return[m.value,e.ellipsis,...cn(w,M),e.ellipsis,f.value]}});function b(k,x,V){k.preventDefault(),a.value=x,V&&c(V,x)}const{refs:C,updateRef:p}=Zk();Je({VPaginationBtn:{color:Y(e,"color"),border:Y(e,"border"),density:Y(e,"density"),size:Y(e,"size"),variant:Y(e,"variant"),rounded:Y(e,"rounded"),elevation:Y(e,"elevation")}});const P=y(()=>S.value.map((k,x)=>{const V=I=>p(I,x);if(typeof k=="string")return{isActive:!1,key:`ellipsis-${x}`,page:k,props:{ref:V,ellipsis:!0,icon:!0,disabled:!0}};{const I=k===a.value;return{isActive:I,key:k,page:i(k),props:{ref:V,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:I?e.activeColor:e.color,ariaCurrent:I,ariaLabel:l(I?e.currentPageAriaLabel:e.pageAriaLabel,k),onClick:w=>b(w,k)}}}})),j=y(()=>{const k=!!e.disabled||a.value<=m.value,x=!!e.disabled||a.value>=m.value+f.value-1;return{first:e.showFirstLastPage?{icon:s.value?e.lastIcon:e.firstIcon,onClick:V=>b(V,m.value,"first"),disabled:k,ariaLabel:l(e.firstAriaLabel),ariaDisabled:k}:void 0,prev:{icon:s.value?e.nextIcon:e.prevIcon,onClick:V=>b(V,a.value-1,"prev"),disabled:k,ariaLabel:l(e.previousAriaLabel),ariaDisabled:k},next:{icon:s.value?e.prevIcon:e.nextIcon,onClick:V=>b(V,a.value+1,"next"),disabled:x,ariaLabel:l(e.nextAriaLabel),ariaDisabled:x},last:e.showFirstLastPage?{icon:s.value?e.firstIcon:e.lastIcon,onClick:V=>b(V,m.value+f.value-1,"last"),disabled:x,ariaLabel:l(e.lastAriaLabel),ariaDisabled:x}:void 0}});function E(){var x;const k=a.value-m.value;(x=C.value[k])==null||x.$el.focus()}function A(k){k.key===Di.left&&!e.disabled&&a.value>+e.start?(a.value=a.value-1,Oe(E)):k.key===Di.right&&!e.disabled&&a.value<m.value+f.value-1&&(a.value=a.value+1,Oe(E))}return X(()=>v(e.tag,{ref:d,class:["v-pagination",r.value,e.class],style:e.style,role:"navigation","aria-label":l(e.ariaLabel),onKeydown:A,"data-test":"v-pagination-root"},{default:()=>[v("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&v("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[n.first?n.first(j.value.first):v(bt,le({_as:"VPaginationBtn"},j.value.first),null)]),v("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[n.prev?n.prev(j.value.prev):v(bt,le({_as:"VPaginationBtn"},j.value.prev),null)]),P.value.map((k,x)=>v("li",{key:k.key,class:["v-pagination__item",{"v-pagination__item--is-active":k.isActive}],"data-test":"v-pagination-item"},[n.item?n.item(k):v(bt,le({_as:"VPaginationBtn"},k.props),{default:()=>[k.page]})])),v("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[n.next?n.next(j.value.next):v(bt,le({_as:"VPaginationBtn"},j.value.next),null)]),e.showFirstLastPage&&v("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[n.last?n.last(j.value.last):v(bt,le({_as:"VPaginationBtn"},j.value.last),null)])])]})),{}}});function Jk(e){return Math.floor(Math.abs(e))*Math.sign(e)}const eS=W()({name:"VParallax",props:{scale:{type:[Number,String],default:.5},...ne()},setup(e,t){let{slots:n}=t;const{intersectionRef:c,isIntersecting:a}=sr(),{resizeRef:l,contentRect:i}=sn(),{height:s}=hc(),r=$();Kt(()=>{var m;c.value=l.value=(m=r.value)==null?void 0:m.$el});let u;ae(a,m=>{m?(u=hf(c.value),u=u===document.scrollingElement?document:u,u.addEventListener("scroll",f,{passive:!0}),f()):u.removeEventListener("scroll",f)}),pt(()=>{u==null||u.removeEventListener("scroll",f)}),ae(s,f),ae(()=>{var m;return(m=i.value)==null?void 0:m.height},f);const o=y(()=>1-ft(+e.scale));let d=-1;function f(){a.value&&(cancelAnimationFrame(d),d=requestAnimationFrame(()=>{var j;const m=((j=r.value)==null?void 0:j.$el).querySelector(".v-img__img");if(!m)return;const h=u instanceof Document?document.documentElement.clientHeight:u.clientHeight,g=u instanceof Document?window.scrollY:u.scrollTop,S=c.value.getBoundingClientRect().top+g,b=i.value.height,C=S+(b-h)/2,p=Jk((g-C)*o.value),P=Math.max(1,(o.value*(h-b)+b)/b);m.style.setProperty("transform",`translateY(${p}px) scale(${P})`)}))}return X(()=>v(Gc,{class:["v-parallax",{"v-parallax--active":a.value},e.class],style:e.style,ref:r,cover:!0,onLoadstart:f,onLoad:f},n)),{}}}),tS=W()({name:"VRadio",props:{...Wl({falseIcon:"$radioOff",trueIcon:"$radioOn"})},setup(e,t){let{slots:n}=t;return X(()=>v(Fc,le(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),n)),{}}});const nS=W()({name:"VRadioGroup",inheritAttrs:!1,props:{height:{type:[Number,String],default:"auto"},...In(),...un(mr(),["multiple"]),trueIcon:{type:pe,default:"$radioOn"},falseIcon:{type:pe,default:"$radioOff"},type:{type:String,default:"radio"}},emits:{"update:modelValue":e=>!0},setup(e,t){let{attrs:n,slots:c}=t;const a=ht(),l=y(()=>e.id||`radio-group-${a}`),i=Ce(e,"modelValue");return X(()=>{const[s,r]=mc(n),[u,o]=st.filterProps(e),[d,f]=Fc.filterProps(e),m=c.label?c.label({label:e.label,props:{for:l.value}}):e.label;return v(st,le({class:["v-radio-group",e.class],style:e.style},s,u,{modelValue:i.value,"onUpdate:modelValue":h=>i.value=h,id:l.value}),{...c,default:h=>{let{id:g,messagesId:S,isDisabled:b,isReadonly:C}=h;return v(me,null,[m&&v(na,{id:g.value},{default:()=>[m]}),v(Qf,le(d,{id:g.value,"aria-describedby":S.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:b.value,readonly:C.value,"aria-labelledby":m?g.value:void 0,multiple:!1},r,{modelValue:i.value,"onUpdate:modelValue":p=>i.value=p}),c)])}})}),{}}}),cS=W()({name:"VRangeSlider",props:{...Nl(),...In(),...Dv(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,end:e=>!0,start:e=>!0},setup(e,t){let{slots:n,emit:c}=t;const a=$(),l=$(),i=$();function s(k){if(!a.value||!l.value)return;const x=us(k,a.value.$el,e.direction),V=us(k,l.value.$el,e.direction),I=Math.abs(x),w=Math.abs(V);return I<w||I===w&&x<0?a.value.$el:l.value.$el}const r=zv(e),u=Ce(e,"modelValue",void 0,k=>k!=null&&k.length?k.map(x=>r.roundValue(x)):[0,0]),{activeThumbRef:o,hasLabels:d,max:f,min:m,mousePressed:h,onSliderMousedown:g,onSliderTouchstart:S,position:b,trackContainerRef:C}=Hv({props:e,steps:r,onSliderStart:()=>{c("start",u.value)},onSliderEnd:k=>{var I;let{value:x}=k;const V=o.value===((I=a.value)==null?void 0:I.$el)?[x,u.value[1]]:[u.value[0],x];u.value=V,c("end",V)},onSliderMove:k=>{var w,M,N,Z;let{value:x}=k;const[V,I]=u.value;!e.strict&&V===I&&V!==m.value&&(o.value=x>V?(w=l.value)==null?void 0:w.$el:(M=a.value)==null?void 0:M.$el,(N=o.value)==null||N.focus()),o.value===((Z=a.value)==null?void 0:Z.$el)?u.value=[Math.min(x,I),I]:u.value=[V,Math.max(V,x)]},getActiveThumb:s}),{isFocused:p,focus:P,blur:j}=Yn(e),E=y(()=>b(u.value[0])),A=y(()=>b(u.value[1]));return X(()=>{const[k,x]=st.filterProps(e),V=!!(e.label||n.label||n.prepend);return v(st,le({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!n["tick-label"]||d.value,"v-slider--focused":p.value,"v-slider--pressed":h.value,"v-slider--disabled":e.disabled},e.class],style:e.style,ref:i},k,{focused:p.value}),{...n,prepend:V?I=>{var w,M;return v(me,null,[((w=n.label)==null?void 0:w.call(n,I))??e.label?v(na,{class:"v-slider__label",text:e.label},null):void 0,(M=n.prepend)==null?void 0:M.call(n,I)])}:void 0,default:I=>{var N,Z;let{id:w,messagesId:M}=I;return v("div",{class:"v-slider__container",onMousedown:g,onTouchstartPassive:S},[v("input",{id:`${w.value}_start`,name:e.name||w.value,disabled:e.disabled,readonly:e.readonly,tabindex:"-1",value:u.value[0]},null),v("input",{id:`${w.value}_stop`,name:e.name||w.value,disabled:e.disabled,readonly:e.readonly,tabindex:"-1",value:u.value[1]},null),v(Uv,{ref:C,start:E.value,stop:A.value},{"tick-label":n["tick-label"]}),v(ds,{ref:a,"aria-describedby":M.value,focused:p&&o.value===((N=a.value)==null?void 0:N.$el),modelValue:u.value[0],"onUpdate:modelValue":F=>u.value=[F,u.value[1]],onFocus:F=>{var H,D,J,R;P(),o.value=(H=a.value)==null?void 0:H.$el,u.value[0]===u.value[1]&&u.value[1]===m.value&&F.relatedTarget!==((D=l.value)==null?void 0:D.$el)&&((J=a.value)==null||J.$el.blur(),(R=l.value)==null||R.$el.focus())},onBlur:()=>{j(),o.value=void 0},min:m.value,max:u.value[1],position:E.value},{"thumb-label":n["thumb-label"]}),v(ds,{ref:l,"aria-describedby":M.value,focused:p&&o.value===((Z=l.value)==null?void 0:Z.$el),modelValue:u.value[1],"onUpdate:modelValue":F=>u.value=[u.value[0],F],onFocus:F=>{var H,D,J,R;P(),o.value=(H=l.value)==null?void 0:H.$el,u.value[0]===u.value[1]&&u.value[0]===f.value&&F.relatedTarget!==((D=a.value)==null?void 0:D.$el)&&((J=l.value)==null||J.$el.blur(),(R=a.value)==null||R.$el.focus())},onBlur:()=>{j(),o.value=void 0},min:u.value[0],max:f.value,position:A.value},{"thumb-label":n["thumb-label"]})])}})}),{}}});const aS=W()({name:"VRating",props:{name:String,itemAriaLabel:{type:String,default:"$vuetify.rating.ariaLabel.item"},activeColor:String,color:String,clearable:Boolean,disabled:Boolean,emptyIcon:{type:pe,default:"$ratingEmpty"},fullIcon:{type:pe,default:"$ratingFull"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,modelValue:{type:[Number,String],default:0},itemLabels:Array,itemLabelPosition:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},ripple:Boolean,...ne(),...nt(),...Vn(),..._e(),...Ee()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const{t:c}=Bt(),{themeClasses:a}=Pe(e),l=Ce(e,"modelValue"),i=y(()=>ft(parseFloat(l.value),0,+e.length)),s=y(()=>cn(Number(e.length),1)),r=y(()=>s.value.flatMap(g=>e.halfIncrements?[g-.5,g]:[g])),u=$(-1),o=y(()=>r.value.map(g=>{const S=e.hover&&u.value>-1,b=i.value>=g,C=u.value>=g,P=(S?C:b)?e.fullIcon:e.emptyIcon,j=e.activeColor??e.color,E=b||C?j:e.color;return{isFilled:b,isHovered:C,icon:P,color:E}})),d=y(()=>[0,...r.value].map(g=>{function S(){u.value=g}function b(){u.value=-1}function C(){e.disabled||e.readonly||(l.value=i.value===g&&e.clearable?0:g)}return{onMouseenter:e.hover?S:void 0,onMouseleave:e.hover?b:void 0,onClick:C}})),f=y(()=>e.name??`v-rating-${ht()}`);function m(g){var k,x;let{value:S,index:b,showStar:C=!0}=g;const{onMouseenter:p,onMouseleave:P,onClick:j}=d.value[b+1],E=`${f.value}-${String(S).replace(".","-")}`,A={color:(k=o.value[b])==null?void 0:k.color,density:e.density,disabled:e.disabled,icon:(x=o.value[b])==null?void 0:x.icon,ripple:e.ripple,size:e.size,variant:"plain"};return v(me,null,[v("label",{for:E,class:{"v-rating__item--half":e.halfIncrements&&S%1>0,"v-rating__item--full":e.halfIncrements&&S%1===0},onMouseenter:p,onMouseleave:P,onClick:j},[v("span",{class:"v-rating__hidden"},[c(e.itemAriaLabel,S,e.length)]),C?n.item?n.item({...o.value[b],props:A,value:S,index:b,rating:i.value}):v(bt,A,null):void 0]),v("input",{class:"v-rating__hidden",name:f.value,id:E,type:"radio",value:S,checked:i.value===S,tabindex:-1,readonly:e.readonly,disabled:e.disabled},null)])}function h(g){return n["item-label"]?n["item-label"](g):g.label?v("span",null,[g.label]):v("span",null,[lt(" ")])}return X(()=>{var S;const g=!!((S=e.itemLabels)!=null&&S.length)||n["item-label"];return v(e.tag,{class:["v-rating",{"v-rating--hover":e.hover,"v-rating--readonly":e.readonly},a.value,e.class],style:e.style},{default:()=>[v(m,{value:0,index:-1,showStar:!1},null),s.value.map((b,C)=>{var p,P;return v("div",{class:"v-rating__wrapper"},[g&&e.itemLabelPosition==="top"?h({value:b,index:C,label:(p=e.itemLabels)==null?void 0:p[C]}):void 0,v("div",{class:"v-rating__item"},[e.halfIncrements?v(me,null,[v(m,{value:b-.5,index:C*2},null),v(m,{value:b,index:C*2+1},null)]):v(m,{value:b,index:C},null)]),g&&e.itemLabelPosition==="bottom"?h({value:b,index:C,label:(P=e.itemLabels)==null?void 0:P[C]}):void 0])})]})}),{}}});function pu(e){const n=Math.abs(e);return Math.sign(e)*(n/((1/.501-2)*(1-n)+1))}function ku(e){let{selectedElement:t,containerSize:n,contentSize:c,isRtl:a,currentScrollOffset:l,isHorizontal:i}=e;const s=i?t.clientWidth:t.clientHeight,r=i?t.offsetLeft:t.offsetTop,u=a&&i?c-r-s:r,o=n+l,d=s+u,f=s*.4;return u<=l?l=Math.max(u-f,0):o<=d&&(l=Math.min(l-(o-d-f),c-n)),l}function lS(e){let{selectedElement:t,containerSize:n,contentSize:c,isRtl:a,isHorizontal:l}=e;const i=l?t.clientWidth:t.clientHeight,s=l?t.offsetLeft:t.offsetTop,r=a&&l?c-s-i/2-n/2:s+i/2-n/2;return Math.min(c-n,Math.max(0,r))}const im=Symbol.for("vuetify:v-slide-group"),sm=ye({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:im},nextIcon:{type:pe,default:"$next"},prevIcon:{type:pe,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...ne(),..._e(),...Xc({selectedClass:"v-slide-group-item--active"})},"v-slide-group"),vs=W()({name:"VSlideGroup",props:sm(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const{isRtl:c}=wn(),{mobile:a}=hc(),l=pc(e,e.symbol),i=$(!1),s=$(0),r=$(0),u=$(0),o=y(()=>e.direction==="horizontal"),{resizeRef:d,contentRect:f}=sn(),{resizeRef:m,contentRect:h}=sn(),g=y(()=>l.selected.value.length?l.items.value.findIndex(R=>R.id===l.selected.value[0]):-1),S=y(()=>l.selected.value.length?l.items.value.findIndex(R=>R.id===l.selected.value[l.selected.value.length-1]):-1);if(Xe){let R=-1;ae(()=>[l.selected.value,f.value,h.value,o.value],()=>{cancelAnimationFrame(R),R=requestAnimationFrame(()=>{if(f.value&&h.value){const K=o.value?"width":"height";r.value=f.value[K],u.value=h.value[K],i.value=r.value+1<u.value}if(g.value>=0&&m.value){const K=m.value.children[S.value];g.value===0||!i.value?s.value=0:e.centerActive?s.value=lS({selectedElement:K,containerSize:r.value,contentSize:u.value,isRtl:c.value,isHorizontal:o.value}):i.value&&(s.value=ku({selectedElement:K,containerSize:r.value,contentSize:u.value,isRtl:c.value,currentScrollOffset:s.value,isHorizontal:o.value}))}})})}const b=$(!1);let C=0,p=0;function P(R){const K=o.value?"clientX":"clientY";p=(c.value&&o.value?-1:1)*s.value,C=R.touches[0][K],b.value=!0}function j(R){if(!i.value)return;const K=o.value?"clientX":"clientY",z=c.value&&o.value?-1:1;s.value=z*(p+C-R.touches[0][K])}function E(R){const K=u.value-r.value;s.value<0||!i.value?s.value=0:s.value>=K&&(s.value=K),b.value=!1}function A(){d.value&&(d.value[o.value?"scrollLeft":"scrollTop"]=0)}const k=$(!1);function x(R){if(k.value=!0,!(!i.value||!m.value)){for(const K of R.composedPath())for(const z of m.value.children)if(z===K){s.value=ku({selectedElement:z,containerSize:r.value,contentSize:u.value,isRtl:c.value,currentScrollOffset:s.value,isHorizontal:o.value});return}}}function V(R){k.value=!1}function I(R){var K;!k.value&&!(R.relatedTarget&&((K=m.value)!=null&&K.contains(R.relatedTarget)))&&M()}function w(R){m.value&&(o.value?R.key==="ArrowRight"?M(c.value?"prev":"next"):R.key==="ArrowLeft"&&M(c.value?"next":"prev"):R.key==="ArrowDown"?M("next"):R.key==="ArrowUp"&&M("prev"),R.key==="Home"?M("first"):R.key==="End"&&M("last"))}function M(R){var K,z,fe,ue,B;if(m.value)if(!R)(K=Ks(m.value)[0])==null||K.focus();else if(R==="next"){const T=(z=m.value.querySelector(":focus"))==null?void 0:z.nextElementSibling;T?T.focus():M("first")}else if(R==="prev"){const T=(fe=m.value.querySelector(":focus"))==null?void 0:fe.previousElementSibling;T?T.focus():M("last")}else R==="first"?(ue=m.value.firstElementChild)==null||ue.focus():R==="last"&&((B=m.value.lastElementChild)==null||B.focus())}function N(R){const K=s.value+(R==="prev"?-1:1)*r.value;s.value=ft(K,0,u.value-r.value)}const Z=y(()=>{let R=s.value>u.value-r.value?-(u.value-r.value)+pu(u.value-r.value-s.value):-s.value;s.value<=0&&(R=pu(-s.value));const K=c.value&&o.value?-1:1;return{transform:`translate${o.value?"X":"Y"}(${K*R}px)`,transition:b.value?"none":"",willChange:b.value?"transform":""}}),F=y(()=>({next:l.next,prev:l.prev,select:l.select,isSelected:l.isSelected})),H=y(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!a.value;case!0:return i.value||Math.abs(s.value)>0;case"mobile":return a.value||i.value||Math.abs(s.value)>0;default:return!a.value&&(i.value||Math.abs(s.value)>0)}}),D=y(()=>Math.abs(s.value)>0),J=y(()=>u.value>Math.abs(s.value)+r.value);return X(()=>v(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!o.value,"v-slide-group--has-affixes":H.value,"v-slide-group--is-overflowing":i.value},e.class],style:e.style,tabindex:k.value||l.selected.value.length?-1:0,onFocus:I},{default:()=>{var R,K,z;return[H.value&&v("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!D.value}],onClick:()=>N("prev")},[((R=n.prev)==null?void 0:R.call(n,F.value))??v(Zi,null,{default:()=>[v(ze,{icon:c.value?e.nextIcon:e.prevIcon},null)]})]),v("div",{key:"container",ref:d,class:"v-slide-group__container",onScroll:A},[v("div",{ref:m,class:"v-slide-group__content",style:Z.value,onTouchstartPassive:P,onTouchmovePassive:j,onTouchendPassive:E,onFocusin:x,onFocusout:V,onKeydown:w},[(K=n.default)==null?void 0:K.call(n,F.value)])]),H.value&&v("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!J.value}],onClick:()=>N("next")},[((z=n.next)==null?void 0:z.call(n,F.value))??v(Zi,null,{default:()=>[v(ze,{icon:c.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:l.selected,scrollTo:N,scrollOffset:s,focus:M}}}),iS=W()({name:"VSlideGroupItem",props:{...Zc()},emits:{"group:selected":e=>!0},setup(e,t){let{slots:n}=t;const c=Qc(e,im);return()=>{var a;return(a=n.default)==null?void 0:a.call(n,{isSelected:c.isSelected.value,select:c.select,toggle:c.toggle,selectedClass:c.selectedClass.value})}}});const sS=W()({name:"VSnackbar",props:{multiLine:Boolean,timeout:{type:[Number,String],default:5e3},vertical:Boolean,...Wn({location:"bottom"}),...ea(),...De(),...Ft(),...Ee(),...un(Da({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const c=Ce(e,"modelValue"),{locationStyles:a}=Kn(e),{positionClasses:l}=ta(e),{scopeId:i}=Na(),{themeClasses:s}=Pe(e),{colorClasses:r,colorStyles:u,variantClasses:o}=bc(e),{roundedClasses:d}=Ue(e),f=$();ae(c,h),ae(()=>e.timeout,h),mt(()=>{c.value&&h()});let m=-1;function h(){window.clearTimeout(m);const S=Number(e.timeout);!c.value||S===-1||(m=window.setTimeout(()=>{c.value=!1},S))}function g(){window.clearTimeout(m)}return X(()=>{const[S]=Sn.filterProps(e);return v(Sn,le({ref:f,class:["v-snackbar",{"v-snackbar--active":c.value,"v-snackbar--multi-line":e.multiLine&&!e.vertical,"v-snackbar--vertical":e.vertical},l.value,e.class],style:e.style},S,{modelValue:c.value,"onUpdate:modelValue":b=>c.value=b,contentProps:le({class:["v-snackbar__wrapper",s.value,r.value,d.value,o.value],style:[a.value,u.value],onPointerenter:g,onPointerleave:h},S.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0},i),{default:()=>[yc(!1,"v-snackbar"),n.default&&v("div",{class:"v-snackbar__content",role:"status","aria-live":"polite"},[n.default()]),n.actions&&v($e,{defaults:{VBtn:{variant:"text",ripple:!1}}},{default:()=>[v("div",{class:"v-snackbar__actions"},[n.actions()])]})],activator:n.activator})}),Gt({},f)}});const rS=W()({name:"VSwitch",inheritAttrs:!1,props:{indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...In(),...Wl()},emits:{"update:focused":e=>!0,"update:modelValue":()=>!0,"update:indeterminate":e=>!0},setup(e,t){let{attrs:n,slots:c}=t;const a=Ce(e,"indeterminate"),l=Ce(e,"modelValue"),{loaderClasses:i}=Fl(e),{isFocused:s,focus:r,blur:u}=Yn(e),o=y(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),d=ht(),f=y(()=>e.id||`switch-${d}`);function m(){a.value&&(a.value=!1)}return X(()=>{const[h,g]=mc(n),[S,b]=st.filterProps(e),[C,p]=Fc.filterProps(e),P=$();function j(E){var A,k;E.stopPropagation(),E.preventDefault(),(k=(A=P.value)==null?void 0:A.input)==null||k.click()}return v(st,le({class:["v-switch",{"v-switch--inset":e.inset},{"v-switch--indeterminate":a.value},i.value,e.class],style:e.style},h,S,{id:f.value,focused:s.value}),{...c,default:E=>{let{id:A,messagesId:k,isDisabled:x,isReadonly:V,isValid:I}=E;return v(Fc,le({ref:P},C,{modelValue:l.value,"onUpdate:modelValue":[w=>l.value=w,m],id:A.value,"aria-describedby":k.value,type:"checkbox","aria-checked":a.value?"mixed":void 0,disabled:x.value,readonly:V.value,onFocus:r,onBlur:u},g),{...c,default:()=>v("div",{class:"v-switch__track",onClick:j},null),input:w=>{let{textColorClasses:M,textColorStyles:N}=w;return v("div",{class:["v-switch__thumb",M.value],style:N.value},[e.loading&&v(dr,{name:"v-switch",active:!0,color:I.value===!1?void 0:o.value},{default:Z=>c.loader?c.loader(Z):v(rr,{active:Z.isActive,color:Z.color,indeterminate:!0,size:"16",width:"2"},null)})])}})}})}),{}}});const oS=W()({name:"VSystemBar",props:{color:String,height:[Number,String],window:Boolean,...ne(),...tt(),...Kc(),...De(),..._e(),...Ee()},setup(e,t){let{slots:n}=t;const{themeClasses:c}=Pe(e),{backgroundColorClasses:a,backgroundColorStyles:l}=Ze(Y(e,"color")),{elevationClasses:i}=ot(e),{roundedClasses:s}=Ue(e),{ssrBootStyles:r}=gc(),u=y(()=>e.height??(e.window?32:24)),{layoutItemStyles:o}=Yc({id:e.name,order:y(()=>parseInt(e.order,10)),position:$("top"),layoutSize:u,elementSize:u,active:y(()=>!0),absolute:Y(e,"absolute")});return X(()=>v(e.tag,{class:["v-system-bar",{"v-system-bar--window":e.window},c.value,a.value,i.value,s.value,e.class],style:[l.value,o.value,r.value,e.style]},n)),{}}});const rm=Symbol.for("vuetify:v-tabs"),om=W()({name:"VTab",props:{fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...un(fr({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},setup(e,t){let{slots:n,attrs:c}=t;const{textColorClasses:a,textColorStyles:l}=vt(e,"sliderColor"),i=y(()=>e.direction==="horizontal"),s=$(!1),r=$(),u=$();function o(d){var m,h;let{value:f}=d;if(s.value=f,f){const g=(h=(m=r.value)==null?void 0:m.$el.parentElement)==null?void 0:h.querySelector(".v-tab--selected .v-tab__slider"),S=u.value;if(!g||!S)return;const b=getComputedStyle(g).color,C=g.getBoundingClientRect(),p=S.getBoundingClientRect(),P=i.value?"x":"y",j=i.value?"X":"Y",E=i.value?"right":"bottom",A=i.value?"width":"height",k=C[P],x=p[P],V=k>x?C[E]-p[E]:C[P]-p[P],I=Math.sign(V)>0?i.value?"right":"bottom":Math.sign(V)<0?i.value?"left":"top":"center",M=(Math.abs(V)+(Math.sign(V)<0?C[A]:p[A]))/Math.max(C[A],p[A]),N=C[A]/p[A],Z=1.5;ic(S,{backgroundColor:[b,""],transform:[`translate${j}(${V}px) scale${j}(${N})`,`translate${j}(${V/Z}px) scale${j}(${(M-1)/Z+1})`,""],transformOrigin:Array(3).fill(I)},{duration:225,easing:Ia})}}return X(()=>{const[d]=bt.filterProps(e);return v(bt,le({symbol:rm,ref:r,class:["v-tab",e.class],style:e.style,tabindex:s.value?0:-1,role:"tab","aria-selected":String(s.value),active:!1,block:e.fixed,maxWidth:e.fixed?300:void 0,rounded:0},d,c,{"onGroup:selected":o}),{default:()=>{var f;return[((f=n.default)==null?void 0:f.call(n))??e.text,!e.hideSlider&&v("div",{ref:u,class:["v-tab__slider",a.value],style:l.value},null)]}})}),{}}});function uS(e){return e?e.map(t=>typeof t=="string"?{title:t,value:t}:t):[]}const dS=W()({name:"VTabs",props:{alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...sm({mandatory:"force"}),...nt(),..._e()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const c=Ce(e,"modelValue"),a=y(()=>uS(e.items)),{densityClasses:l}=gt(e),{backgroundColorClasses:i,backgroundColorStyles:s}=Ze(Y(e,"bgColor"));return Je({VTab:{color:Y(e,"color"),direction:Y(e,"direction"),stacked:Y(e,"stacked"),fixed:Y(e,"fixedTabs"),sliderColor:Y(e,"sliderColor"),hideSlider:Y(e,"hideSlider")}}),X(()=>{const[r]=vs.filterProps(e);return v(vs,le(r,{modelValue:c.value,"onUpdate:modelValue":u=>c.value=u,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},l.value,i.value,e.class],style:[{"--v-tabs-height":se(e.height)},s.value,e.style],role:"tablist",symbol:rm}),{default:()=>[n.default?n.default():a.value.map(u=>v(om,le(u,{key:u.title}),null))]})}),{}}});const fS=W()({name:"VTable",props:{fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...ne(),...nt(),..._e(),...Ee()},setup(e,t){let{slots:n}=t;const{themeClasses:c}=Pe(e),{densityClasses:a}=gt(e);return X(()=>v(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!n.top,"v-table--has-bottom":!!n.bottom,"v-table--hover":e.hover},c.value,a.value,e.class],style:e.style},{default:()=>{var l,i,s;return[(l=n.top)==null?void 0:l.call(n),n.default?v("div",{class:"v-table__wrapper",style:{height:se(e.height)}},[v("table",null,[n.default()])]):(i=n.wrapper)==null?void 0:i.call(n),(s=n.bottom)==null?void 0:s.call(n)]}})),{}}});const vS=W()({name:"VTextarea",directives:{Intersect:Ba},inheritAttrs:!1,props:{autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...In(),...Dl()},emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:n,emit:c,slots:a}=t;const l=Ce(e,"modelValue"),{isFocused:i,focus:s,blur:r}=Yn(e),u=y(()=>typeof e.counterValue=="function"?e.counterValue(l.value):(l.value||"").toString().length),o=y(()=>{if(n.maxlength)return n.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function d(x,V){var I,w;!e.autofocus||!x||(w=(I=V[0].target)==null?void 0:I.focus)==null||w.call(I)}const f=$(),m=$(),h=$(""),g=$(),S=y(()=>e.persistentPlaceholder||i.value||e.active);function b(){var x;g.value!==document.activeElement&&((x=g.value)==null||x.focus()),i.value||s()}function C(x){b(),c("click:control",x)}function p(x){c("mousedown:control",x)}function P(x){x.stopPropagation(),b(),Oe(()=>{l.value="",Ws(e["onClick:clear"],x)})}function j(x){var I;const V=x.target;if(l.value=V.value,(I=e.modelModifiers)!=null&&I.trim){const w=[V.selectionStart,V.selectionEnd];Oe(()=>{V.selectionStart=w[0],V.selectionEnd=w[1]})}}const E=$();function A(){e.autoGrow&&Oe(()=>{if(!E.value||!m.value)return;const x=getComputedStyle(E.value),V=getComputedStyle(m.value.$el),I=parseFloat(x.getPropertyValue("--v-field-padding-top"))+parseFloat(x.getPropertyValue("--v-input-padding-top"))+parseFloat(x.getPropertyValue("--v-field-padding-bottom")),w=E.value.scrollHeight,M=parseFloat(x.lineHeight),N=Math.max(parseFloat(e.rows)*M+I,parseFloat(V.getPropertyValue("--v-input-control-height"))),Z=parseFloat(e.maxRows)*M+I||1/0;h.value=se(ft(w??0,N,Z))})}mt(A),ae(l,A),ae(()=>e.rows,A),ae(()=>e.maxRows,A),ae(()=>e.density,A);let k;return ae(E,x=>{x?(k=new ResizeObserver(A),k.observe(E.value)):k==null||k.disconnect()}),pt(()=>{k==null||k.disconnect()}),X(()=>{const x=!!(a.counter||e.counter||e.counterValue),V=!!(x||a.details),[I,w]=mc(n),[{modelValue:M,...N}]=st.filterProps(e),[Z]=vr(e);return v(st,le({ref:f,modelValue:l.value,"onUpdate:modelValue":F=>l.value=F,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)},e.class],style:e.style},I,N,{focused:i.value}),{...a,default:F=>{let{isDisabled:H,isDirty:D,isReadonly:J,isValid:R}=F;return v(La,le({ref:m,style:{"--v-textarea-control-height":h.value},onClick:C,onMousedown:p,"onClick:clear":P,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},Z,{active:S.value||D.value,dirty:D.value||e.dirty,disabled:H.value,focused:i.value,error:R.value===!1}),{...a,default:K=>{let{props:{class:z,...fe}}=K;return v(me,null,[e.prefix&&v("span",{class:"v-text-field__prefix"},[e.prefix]),He(v("textarea",le({ref:g,class:z,value:l.value,onInput:j,autofocus:e.autofocus,readonly:J.value,disabled:H.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:b,onBlur:r},fe,w),null),[[Ct("intersect"),{handler:d},null,{once:!0}]]),e.autoGrow&&He(v("textarea",{class:[z,"v-textarea__sizer"],"onUpdate:modelValue":ue=>l.value=ue,ref:E,readonly:!0,"aria-hidden":"true"},null),[[Bg,l.value]]),e.suffix&&v("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:V?F=>{var H;return v(me,null,[(H=a.details)==null?void 0:H.call(a,F),x&&v(me,null,[v("span",null,null),v(Hl,{active:e.persistentCounter||i.value,value:u.value,max:o.value},a.counter)])])}:void 0})}),Gt({},f,m,g)}});const mS=W()({name:"VThemeProvider",props:{withBackground:Boolean,...ne(),...Ee(),..._e()},setup(e,t){let{slots:n}=t;const{themeClasses:c}=Pe(e);return()=>{var a;return e.withBackground?v(e.tag,{class:["v-theme-provider",c.value,e.class],style:e.style},{default:()=>{var l;return[(l=n.default)==null?void 0:l.call(n)]}}):(a=n.default)==null?void 0:a.call(n)}}});const hS=W()({name:"VTimeline",props:{align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineInset:{type:[String,Number],default:0},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...ne(),...nt(),..._e(),...Ee()},setup(e,t){let{slots:n}=t;const{themeClasses:c}=Pe(e),{densityClasses:a}=gt(e);Je({VTimelineDivider:{lineColor:Y(e,"lineColor")},VTimelineItem:{density:Y(e,"density"),lineInset:Y(e,"lineInset")}});const l=y(()=>{const s=e.side?e.side:e.density!=="default"?"end":null;return s&&`v-timeline--side-${s}`}),i=y(()=>{const s=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return s;case"start":return s[0];case"end":return s[1];default:return null}});return X(()=>v(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,i.value,{"v-timeline--inset-line":!!e.lineInset},c.value,a.value,l.value,e.class],style:[{"--v-timeline-line-thickness":se(e.lineThickness)},e.style]},n)),{}}}),gS=W()({name:"VTimelineDivider",props:{dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:pe,iconColor:String,lineColor:String,...ne(),...De(),...Vn(),...tt()},setup(e,t){let{slots:n}=t;const{sizeClasses:c,sizeStyles:a}=Jc(e,"v-timeline-divider__dot"),{backgroundColorStyles:l,backgroundColorClasses:i}=Ze(Y(e,"dotColor")),{roundedClasses:s}=Ue(e,"v-timeline-divider__dot"),{elevationClasses:r}=ot(e),{backgroundColorClasses:u,backgroundColorStyles:o}=Ze(Y(e,"lineColor"));return X(()=>v("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot},e.class],style:e.style},[v("div",{class:["v-timeline-divider__before",u.value],style:o.value},null),!e.hideDot&&v("div",{key:"dot",class:["v-timeline-divider__dot",r.value,s.value,c.value],style:a.value},[v("div",{class:["v-timeline-divider__inner-dot",i.value,s.value],style:l.value},[n.default?v($e,{key:"icon-defaults",disabled:!e.icon,defaults:{VIcon:{color:e.iconColor,icon:e.icon,size:e.size}}},n.default):v(ze,{key:"icon",color:e.iconColor,icon:e.icon,size:e.size},null)])]),v("div",{class:["v-timeline-divider__after",u.value],style:o.value},null)])),{}}}),yS=W()({name:"VTimelineItem",props:{density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:pe,iconColor:String,lineInset:[Number,String],...ne(),...Rt(),...tt(),...De(),...Vn(),..._e()},setup(e,t){let{slots:n}=t;const{dimensionStyles:c}=Ot(e),a=$(0),l=$();return ae(l,i=>{var s;i&&(a.value=((s=i.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:s.getBoundingClientRect().width)??0)},{flush:"post"}),X(()=>{var i,s;return v("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot},e.class],style:[{"--v-timeline-dot-size":se(a.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${se(e.lineInset)})`:se(0)},e.style]},[v("div",{class:"v-timeline-item__body",style:c.value},[(i=n.default)==null?void 0:i.call(n)]),v(gS,{ref:l,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:n.icon}),e.density!=="compact"&&v("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((s=n.opposite)==null?void 0:s.call(n))])])}),{}}});const bS=W()({name:"VTooltip",props:{id:String,text:String,...un(Da({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const c=Ce(e,"modelValue"),{scopeId:a}=Na(),l=ht(),i=y(()=>e.id||`v-tooltip-${l}`),s=$(),r=y(()=>e.location.split(" ").length>1?e.location:e.location+" center"),u=y(()=>e.origin==="auto"||e.origin==="overlap"||e.origin.split(" ").length>1||e.location.split(" ").length>1?e.origin:e.origin+" center"),o=y(()=>e.transition?e.transition:c.value?"scale-transition":"fade-transition"),d=y(()=>le({"aria-describedby":i.value},e.activatorProps));return X(()=>{const[f]=Sn.filterProps(e);return v(Sn,le({ref:s,class:["v-tooltip",e.class],style:e.style,id:i.value},f,{modelValue:c.value,"onUpdate:modelValue":m=>c.value=m,transition:o.value,absolute:!0,location:r.value,origin:u.value,persistent:!0,role:"tooltip",activatorProps:d.value,_disableGlobalStack:!0},a),{activator:n.activator,default:function(){var S;for(var m=arguments.length,h=new Array(m),g=0;g<m;g++)h[g]=arguments[g];return((S=n.default)==null?void 0:S.call(n,...h))??e.text}})}),Gt({},s)}}),pS=W()({name:"VValidation",props:{...Gf()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const c=Xf(e,"validation");return()=>{var a;return(a=n.default)==null?void 0:a.call(n,c)}}});const kS=W()({name:"VVirtualScrollItem",props:{dynamicHeight:Boolean,...ne()},emits:{"update:height":e=>!0},setup(e,t){let{emit:n,slots:c}=t;const{resizeRef:a,contentRect:l}=sn();Nn(()=>e.dynamicHeight,()=>{ae(()=>{var s;return(s=l.value)==null?void 0:s.height},s=>{s!=null&&n("update:height",s)})});function i(){e.dynamicHeight&&l.value&&n("update:height",l.value.height)}Ms(i),X(()=>{var s;return v("div",{ref:e.dynamicHeight?a:void 0,class:["v-virtual-scroll__item",e.class],style:e.style},[(s=c.default)==null?void 0:s.call(c)])})}}),Su=-1,Cu=1,SS=W()({name:"VVirtualScroll",props:{items:{type:Array,default:()=>[]},itemHeight:[Number,String],...ne(),...Rt()},setup(e,t){let{slots:n}=t;const c=$(0),a=$(e.itemHeight),l=y({get:()=>parseInt(a.value??0,10),set(x){a.value=x}}),i=$(),{resizeRef:s,contentRect:r}=sn();Kt(()=>{s.value=i.value});const u=hc(),o=new Map;let d=cn(e.items.length).map(()=>l.value);const f=y(()=>{var x;return Math.max(12,Math.ceil((((x=r.value)==null?void 0:x.height)??u.height.value)/l.value*1.7+1))});function m(x,V){l.value=Math.max(l.value,V),d[x]=V,o.set(e.items[x],V)}function h(x){return d.slice(0,x).reduce((V,I)=>V+(I||l.value),0)}function g(x){const V=e.items.length;let I=0,w=0;for(;w<x&&I<V;)w+=d[I++]||l.value;return I-1}let S=0;function b(){if(!i.value||!r.value)return;const x=r.value.height,V=i.value.scrollTop,I=V<S?Su:Cu,w=g(V+x/2),M=Math.round(f.value/3);I===Su&&w<=c.value+M*2-1?c.value=ft(w-M,0,e.items.length):I===Cu&&w>=c.value+M*2-1&&(c.value=ft(w-M,0,e.items.length-f.value)),S=i.value.scrollTop}function C(x){if(!i.value)return;const V=h(x);i.value.scrollTop=V}const p=y(()=>e.items.map((x,V)=>({raw:x,index:V}))),P=y(()=>Math.min(e.items.length,c.value+f.value)),j=y(()=>p.value.slice(c.value,P.value)),E=y(()=>h(c.value)),A=y(()=>h(e.items.length)-h(P.value)),{dimensionStyles:k}=Ot(e);return mt(()=>{l.value||(l.value=d.slice(c.value,P.value).reduce((x,V)=>x+V,0)/f.value)}),ae(()=>e.items.length,()=>{d=cn(e.items.length).map(()=>l.value),o.forEach((x,V)=>{const I=e.items.indexOf(V);I===-1?o.delete(V):d[I]=x})}),X(()=>v("div",{ref:i,class:["v-virtual-scroll",e.class],onScroll:b,style:[k.value,e.style]},[v("div",{class:"v-virtual-scroll__container",style:{paddingTop:se(E.value),paddingBottom:se(A.value)}},[j.value.map(x=>v(kS,{key:x.index,dynamicHeight:!e.itemHeight,"onUpdate:height":V=>m(x.index,V)},{default:()=>{var V;return[(V=n.default)==null?void 0:V.call(n,{item:x.raw,index:x.index})]}}))])])),{scrollToIndex:C}}}),CS=Object.freeze(Object.defineProperty({__proto__:null,VAlert:C0,VAlertTitle:Uf,VApp:F2,VAppBar:n0,VAppBarNavIcon:b0,VAppBarTitle:k0,VAutocomplete:yp,VAvatar:Dn,VBadge:bp,VBanner:pp,VBannerActions:wv,VBannerText:jv,VBottomNavigation:kp,VBreadcrumbs:Sp,VBreadcrumbsDivider:Vv,VBreadcrumbsItem:Iv,VBtn:bt,VBtnGroup:Ji,VBtnToggle:s0,VCard:Cp,VCardActions:Ev,VCardItem:Pv,VCardSubtitle:Av,VCardText:Tv,VCardTitle:qv,VCarousel:Ap,VCarouselItem:qp,VCheckbox:I0,VCheckboxBtn:Nc,VChip:Fa,VChipGroup:A0,VClassIcon:tr,VCode:Pp,VCol:wk,VColorPicker:fk,VCombobox:mk,VComponentIcon:Xi,VContainer:Ck,VCounter:Hl,VDefaultsProvider:$e,VDialog:hk,VDialogBottomTransition:D2,VDialogTopTransition:z2,VDialogTransition:Ol,VDivider:tv,VExpandTransition:Ll,VExpandXTransition:cr,VExpansionPanel:bk,VExpansionPanelText:Yv,VExpansionPanelTitle:Kv,VExpansionPanels:yk,VFabTransition:N2,VFadeTransition:Zi,VField:La,VFieldLabel:ua,VFileInput:pk,VFooter:kk,VForm:Sk,VHover:Tk,VIcon:ze,VImg:Gc,VInput:st,VItem:Mk,VItemGroup:$k,VKbd:Bk,VLabel:na,VLayout:Rk,VLayoutItem:Ok,VLazy:Lk,VLigatureIcon:x2,VList:Kl,VListGroup:cs,VListImg:H0,VListItem:kn,VListItemAction:U0,VListItemMedia:W0,VListItemSubtitle:rv,VListItemTitle:ov,VListSubheader:uv,VLocaleProvider:Fk,VMain:Nk,VMenu:Gl,VMessages:Kf,VNavigationDrawer:Gk,VNoSsr:Xk,VOverlay:Sn,VPagination:Qk,VParallax:eS,VProgressCircular:rr,VProgressLinear:or,VRadio:tS,VRadioGroup:nS,VRangeSlider:cS,VRating:aS,VResponsive:Af,VRow:qk,VScaleTransition:Ef,VScrollXReverseTransition:U2,VScrollXTransition:H2,VScrollYReverseTransition:K2,VScrollYTransition:W2,VSelect:vp,VSelectionControl:Fc,VSelectionControlGroup:Qf,VSheet:ss,VSlideGroup:vs,VSlideGroupItem:iS,VSlideXReverseTransition:G2,VSlideXTransition:Y2,VSlideYReverseTransition:X2,VSlideYTransition:nr,VSlider:fs,VSnackbar:sS,VSpacer:Pk,VSvgIcon:er,VSwitch:rS,VSystemBar:oS,VTab:om,VTable:fS,VTabs:dS,VTextField:fc,VTextarea:vS,VThemeProvider:mS,VTimeline:hS,VTimelineItem:yS,VToolbar:Qi,VToolbarItems:p0,VToolbarTitle:ar,VTooltip:bS,VValidation:pS,VVirtualScroll:SS,VWindow:Rv,VWindowItem:Ov},Symbol.toStringTag,{value:"Module"}));function _S(e,t){const n=t.modifiers||{},c=t.value,{once:a,immediate:l,...i}=n,s=!Object.keys(i).length,{handler:r,options:u}=typeof c=="object"?c:{handler:c,options:{attributes:(i==null?void 0:i.attr)??s,characterData:(i==null?void 0:i.char)??s,childList:(i==null?void 0:i.child)??s,subtree:(i==null?void 0:i.sub)??s}},o=new MutationObserver(function(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],f=arguments.length>1?arguments[1]:void 0;r==null||r(d,f),a&&um(e,t)});l&&(r==null||r([],o)),e._mutate=Object(e._mutate),e._mutate[t.instance.$.uid]={observer:o},o.observe(e,u)}function um(e,t){var n;(n=e._mutate)!=null&&n[t.instance.$.uid]&&(e._mutate[t.instance.$.uid].observer.disconnect(),delete e._mutate[t.instance.$.uid])}const xS={mounted:_S,unmounted:um};function wS(e,t){var a,l;const n=t.value,c={passive:!((a=t.modifiers)!=null&&a.active)};window.addEventListener("resize",n,c),e._onResize=Object(e._onResize),e._onResize[t.instance.$.uid]={handler:n,options:c},(l=t.modifiers)!=null&&l.quiet||n()}function jS(e,t){var a;if(!((a=e._onResize)!=null&&a[t.instance.$.uid]))return;const{handler:n,options:c}=e._onResize[t.instance.$.uid];window.removeEventListener("resize",n,c),delete e._onResize[t.instance.$.uid]}const VS={mounted:wS,unmounted:jS};function dm(e,t){const{self:n=!1}=t.modifiers??{},c=t.value,a=typeof c=="object"&&c.options||{passive:!0},l=typeof c=="function"||"handleEvent"in c?c:c.handler,i=n?e:t.arg?document.querySelector(t.arg):window;i&&(i.addEventListener("scroll",l,a),e._onScroll=Object(e._onScroll),e._onScroll[t.instance.$.uid]={handler:l,options:a,target:n?void 0:i})}function fm(e,t){var l;if(!((l=e._onScroll)!=null&&l[t.instance.$.uid]))return;const{handler:n,options:c,target:a=e}=e._onScroll[t.instance.$.uid];a.removeEventListener("scroll",n,c),delete e._onScroll[t.instance.$.uid]}function IS(e,t){t.value!==t.oldValue&&(fm(e,t),dm(e,t))}const ES={mounted:dm,unmounted:fm,updated:IS},AS=Object.freeze(Object.defineProperty({__proto__:null,ClickOutside:Cv,Intersect:Ba,Mutate:xS,Resize:VS,Ripple:Un,Scroll:ES,Touch:pr},Symbol.toStringTag,{value:"Module"})),qS=jf({components:CS,directives:AS}),_r=Lg(Wy);_r.use(db);_r.use(qS);_r.mount("#app");

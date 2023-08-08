(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&t(u)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();function bl(e,c){const n=Object.create(null),t=e.split(",");for(let a=0;a<t.length;a++)n[t[a]]=!0;return c?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function hl(e){if(je(e)){const c={};for(let n=0;n<e.length;n++){const t=e[n],a=Xe(t)?km(t):hl(t);if(a)for(const s in a)c[s]=a[s]}return c}else{if(Xe(e))return e;if(De(e))return e}}const gm=/;(?![^(]*\))/g,jm=/:([^]+)/,qm=/\/\*.*?\*\//gs;function km(e){const c={};return e.replace(qm,"").split(gm).forEach(n=>{if(n){const t=n.split(jm);t.length>1&&(c[t[0].trim()]=t[1].trim())}}),c}function Nn(e){let c="";if(Xe(e))c=e;else if(je(e))for(let n=0;n<e.length;n++){const t=Nn(e[n]);t&&(c+=t+" ")}else if(De(e))for(const n in e)e[n]&&(c+=n+" ");return c.trim()}const pm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sm=bl(pm);function wo(e){return!!e||e===""}const zc=e=>Xe(e)?e:e==null?"":je(e)||De(e)&&(e.toString===Ao||!we(e.toString))?JSON.stringify(e,xo,2):String(e),xo=(e,c)=>c&&c.__v_isRef?xo(e,c.value):Et(c)?{[`Map(${c.size})`]:[...c.entries()].reduce((n,[t,a])=>(n[`${t} =>`]=a,n),{})}:Vo(c)?{[`Set(${c.size})`]:[...c.values()]}:De(c)&&!je(c)&&!Eo(c)?String(c):c,Ne={},At=[],Kc=()=>{},_m=()=>!1,Cm=/^on[^a-z]/,Ss=e=>Cm.test(e),gl=e=>e.startsWith("onUpdate:"),sc=Object.assign,jl=(e,c)=>{const n=e.indexOf(c);n>-1&&e.splice(n,1)},wm=Object.prototype.hasOwnProperty,Te=(e,c)=>wm.call(e,c),je=Array.isArray,Et=e=>_s(e)==="[object Map]",Vo=e=>_s(e)==="[object Set]",we=e=>typeof e=="function",Xe=e=>typeof e=="string",ql=e=>typeof e=="symbol",De=e=>e!==null&&typeof e=="object",Io=e=>De(e)&&we(e.then)&&we(e.catch),Ao=Object.prototype.toString,_s=e=>Ao.call(e),xm=e=>_s(e).slice(8,-1),Eo=e=>_s(e)==="[object Object]",kl=e=>Xe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ts=bl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Cs=e=>{const c=Object.create(null);return n=>c[n]||(c[n]=e(n))},Vm=/-(\w)/g,Mc=Cs(e=>e.replace(Vm,(c,n)=>n?n.toUpperCase():"")),Im=/\B([A-Z])/g,Dt=Cs(e=>e.replace(Im,"-$1").toLowerCase()),_n=Cs(e=>e.charAt(0).toUpperCase()+e.slice(1)),as=Cs(e=>e?`on${_n(e)}`:""),qa=(e,c)=>!Object.is(e,c),ss=(e,c)=>{for(let n=0;n<e.length;n++)e[n](c)},os=(e,c,n)=>{Object.defineProperty(e,c,{configurable:!0,enumerable:!1,value:n})},qu=e=>{const c=parseFloat(e);return isNaN(c)?e:c},Am=e=>{const c=Xe(e)?Number(e):NaN;return isNaN(c)?e:c};let Ir;const Em=()=>Ir||(Ir=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Cc;class Po{constructor(c=!1){this.detached=c,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Cc,!c&&Cc&&(this.index=(Cc.scopes||(Cc.scopes=[])).push(this)-1)}get active(){return this._active}run(c){if(this._active){const n=Cc;try{return Cc=this,c()}finally{Cc=n}}}on(){Cc=this}off(){Cc=this.parent}stop(c){if(this._active){let n,t;for(n=0,t=this.effects.length;n<t;n++)this.effects[n].stop();for(n=0,t=this.cleanups.length;n<t;n++)this.cleanups[n]();if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!c){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function pl(e){return new Po(e)}function Pm(e,c=Cc){c&&c.active&&c.effects.push(e)}function Tm(){return Cc}function Ic(e){Cc&&Cc.cleanups.push(e)}const Sl=e=>{const c=new Set(e);return c.w=0,c.n=0,c},To=e=>(e.w&Dn)>0,$o=e=>(e.n&Dn)>0,$m=({deps:e})=>{if(e.length)for(let c=0;c<e.length;c++)e[c].w|=Dn},Mm=e=>{const{deps:c}=e;if(c.length){let n=0;for(let t=0;t<c.length;t++){const a=c[t];To(a)&&!$o(a)?a.delete(e):c[n++]=a,a.w&=~Dn,a.n&=~Dn}c.length=n}},ds=new WeakMap;let oa=0,Dn=1;const ku=30;let Hc;const dt=Symbol(""),pu=Symbol("");class _l{constructor(c,n=null,t){this.fn=c,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Pm(this,t)}run(){if(!this.active)return this.fn();let c=Hc,n=Rn;for(;c;){if(c===this)return;c=c.parent}try{return this.parent=Hc,Hc=this,Rn=!0,Dn=1<<++oa,oa<=ku?$m(this):Ar(this),this.fn()}finally{oa<=ku&&Mm(this),Dn=1<<--oa,Hc=this.parent,Rn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Hc===this?this.deferStop=!0:this.active&&(Ar(this),this.onStop&&this.onStop(),this.active=!1)}}function Ar(e){const{deps:c}=e;if(c.length){for(let n=0;n<c.length;n++)c[n].delete(e);c.length=0}}let Rn=!0;const Mo=[];function zt(){Mo.push(Rn),Rn=!1}function Ht(){const e=Mo.pop();Rn=e===void 0?!0:e}function pc(e,c,n){if(Rn&&Hc){let t=ds.get(e);t||ds.set(e,t=new Map);let a=t.get(n);a||t.set(n,a=Sl()),Bo(a)}}function Bo(e,c){let n=!1;oa<=ku?$o(e)||(e.n|=Dn,n=!To(e)):n=!e.has(Hc),n&&(e.add(Hc),Hc.deps.push(e))}function gn(e,c,n,t,a,s){const u=ds.get(e);if(!u)return;let l=[];if(c==="clear")l=[...u.values()];else if(n==="length"&&je(e)){const r=Number(t);u.forEach((o,i)=>{(i==="length"||i>=r)&&l.push(o)})}else switch(n!==void 0&&l.push(u.get(n)),c){case"add":je(e)?kl(n)&&l.push(u.get("length")):(l.push(u.get(dt)),Et(e)&&l.push(u.get(pu)));break;case"delete":je(e)||(l.push(u.get(dt)),Et(e)&&l.push(u.get(pu)));break;case"set":Et(e)&&l.push(u.get(dt));break}if(l.length===1)l[0]&&Su(l[0]);else{const r=[];for(const o of l)o&&r.push(...o);Su(Sl(r))}}function Su(e,c){const n=je(e)?e:[...e];for(const t of n)t.computed&&Er(t);for(const t of n)t.computed||Er(t)}function Er(e,c){(e!==Hc||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function Bm(e,c){var n;return(n=ds.get(e))===null||n===void 0?void 0:n.get(c)}const Rm=bl("__proto__,__v_isRef,__isVue"),Ro=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ql)),Om=Cl(),Lm=Cl(!1,!0),Fm=Cl(!0),Pr=Nm();function Nm(){const e={};return["includes","indexOf","lastIndexOf"].forEach(c=>{e[c]=function(...n){const t=Ce(this);for(let s=0,u=this.length;s<u;s++)pc(t,"get",s+"");const a=t[c](...n);return a===-1||a===!1?t[c](...n.map(Ce)):a}}),["push","pop","shift","unshift","splice"].forEach(c=>{e[c]=function(...n){zt();const t=Ce(this)[c].apply(this,n);return Ht(),t}}),e}function Dm(e){const c=Ce(this);return pc(c,"has",e),c.hasOwnProperty(e)}function Cl(e=!1,c=!1){return function(t,a,s){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return c;if(a==="__v_raw"&&s===(e?c?a0:Do:c?No:Fo).get(t))return t;const u=je(t);if(!e){if(u&&Te(Pr,a))return Reflect.get(Pr,a,s);if(a==="hasOwnProperty")return Dm}const l=Reflect.get(t,a,s);return(ql(a)?Ro.has(a):Rm(a))||(e||pc(t,"get",a),c)?l:Ye(l)?u&&kl(a)?l:l.value:De(l)?e?Ba(l):uc(l):l}}const zm=Oo(),Hm=Oo(!0);function Oo(e=!1){return function(n,t,a,s){let u=n[t];if(Mt(u)&&Ye(u)&&!Ye(a))return!1;if(!e&&(!fs(a)&&!Mt(a)&&(u=Ce(u),a=Ce(a)),!je(n)&&Ye(u)&&!Ye(a)))return u.value=a,!0;const l=je(n)&&kl(t)?Number(t)<n.length:Te(n,t),r=Reflect.set(n,t,a,s);return n===Ce(s)&&(l?qa(a,u)&&gn(n,"set",t,a):gn(n,"add",t,a)),r}}function Um(e,c){const n=Te(e,c);e[c];const t=Reflect.deleteProperty(e,c);return t&&n&&gn(e,"delete",c,void 0),t}function Wm(e,c){const n=Reflect.has(e,c);return(!ql(c)||!Ro.has(c))&&pc(e,"has",c),n}function Km(e){return pc(e,"iterate",je(e)?"length":dt),Reflect.ownKeys(e)}const Lo={get:Om,set:zm,deleteProperty:Um,has:Wm,ownKeys:Km},Ym={get:Fm,set(e,c){return!0},deleteProperty(e,c){return!0}},Gm=sc({},Lo,{get:Lm,set:Hm}),wl=e=>e,ws=e=>Reflect.getPrototypeOf(e);function Ua(e,c,n=!1,t=!1){e=e.__v_raw;const a=Ce(e),s=Ce(c);n||(c!==s&&pc(a,"get",c),pc(a,"get",s));const{has:u}=ws(a),l=t?wl:n?Il:ka;if(u.call(a,c))return l(e.get(c));if(u.call(a,s))return l(e.get(s));e!==a&&e.get(c)}function Wa(e,c=!1){const n=this.__v_raw,t=Ce(n),a=Ce(e);return c||(e!==a&&pc(t,"has",e),pc(t,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Ka(e,c=!1){return e=e.__v_raw,!c&&pc(Ce(e),"iterate",dt),Reflect.get(e,"size",e)}function Tr(e){e=Ce(e);const c=Ce(this);return ws(c).has.call(c,e)||(c.add(e),gn(c,"add",e,e)),this}function $r(e,c){c=Ce(c);const n=Ce(this),{has:t,get:a}=ws(n);let s=t.call(n,e);s||(e=Ce(e),s=t.call(n,e));const u=a.call(n,e);return n.set(e,c),s?qa(c,u)&&gn(n,"set",e,c):gn(n,"add",e,c),this}function Mr(e){const c=Ce(this),{has:n,get:t}=ws(c);let a=n.call(c,e);a||(e=Ce(e),a=n.call(c,e)),t&&t.call(c,e);const s=c.delete(e);return a&&gn(c,"delete",e,void 0),s}function Br(){const e=Ce(this),c=e.size!==0,n=e.clear();return c&&gn(e,"clear",void 0,void 0),n}function Ya(e,c){return function(t,a){const s=this,u=s.__v_raw,l=Ce(u),r=c?wl:e?Il:ka;return!e&&pc(l,"iterate",dt),u.forEach((o,i)=>t.call(a,r(o),r(i),s))}}function Ga(e,c,n){return function(...t){const a=this.__v_raw,s=Ce(a),u=Et(s),l=e==="entries"||e===Symbol.iterator&&u,r=e==="keys"&&u,o=a[e](...t),i=n?wl:c?Il:ka;return!c&&pc(s,"iterate",r?pu:dt),{next(){const{value:d,done:f}=o.next();return f?{value:d,done:f}:{value:l?[i(d[0]),i(d[1])]:i(d),done:f}},[Symbol.iterator](){return this}}}}function En(e){return function(...c){return e==="delete"?!1:this}}function Xm(){const e={get(s){return Ua(this,s)},get size(){return Ka(this)},has:Wa,add:Tr,set:$r,delete:Mr,clear:Br,forEach:Ya(!1,!1)},c={get(s){return Ua(this,s,!1,!0)},get size(){return Ka(this)},has:Wa,add:Tr,set:$r,delete:Mr,clear:Br,forEach:Ya(!1,!0)},n={get(s){return Ua(this,s,!0)},get size(){return Ka(this,!0)},has(s){return Wa.call(this,s,!0)},add:En("add"),set:En("set"),delete:En("delete"),clear:En("clear"),forEach:Ya(!0,!1)},t={get(s){return Ua(this,s,!0,!0)},get size(){return Ka(this,!0)},has(s){return Wa.call(this,s,!0)},add:En("add"),set:En("set"),delete:En("delete"),clear:En("clear"),forEach:Ya(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Ga(s,!1,!1),n[s]=Ga(s,!0,!1),c[s]=Ga(s,!1,!0),t[s]=Ga(s,!0,!0)}),[e,n,c,t]}const[Qm,Zm,Jm,e0]=Xm();function xl(e,c){const n=c?e?e0:Jm:e?Zm:Qm;return(t,a,s)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?t:Reflect.get(Te(n,a)&&a in t?n:t,a,s)}const c0={get:xl(!1,!1)},n0={get:xl(!1,!0)},t0={get:xl(!0,!1)},Fo=new WeakMap,No=new WeakMap,Do=new WeakMap,a0=new WeakMap;function s0(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function u0(e){return e.__v_skip||!Object.isExtensible(e)?0:s0(xm(e))}function uc(e){return Mt(e)?e:Vl(e,!1,Lo,c0,Fo)}function l0(e){return Vl(e,!1,Gm,n0,No)}function Ba(e){return Vl(e,!0,Ym,t0,Do)}function Vl(e,c,n,t,a){if(!De(e)||e.__v_raw&&!(c&&e.__v_isReactive))return e;const s=a.get(e);if(s)return s;const u=u0(e);if(u===0)return e;const l=new Proxy(e,u===2?t:n);return a.set(e,l),l}function Pt(e){return Mt(e)?Pt(e.__v_raw):!!(e&&e.__v_isReactive)}function Mt(e){return!!(e&&e.__v_isReadonly)}function fs(e){return!!(e&&e.__v_isShallow)}function zo(e){return Pt(e)||Mt(e)}function Ce(e){const c=e&&e.__v_raw;return c?Ce(c):e}function Ho(e){return os(e,"__v_skip",!0),e}const ka=e=>De(e)?uc(e):e,Il=e=>De(e)?Ba(e):e;function Uo(e){Rn&&Hc&&(e=Ce(e),Bo(e.dep||(e.dep=Sl())))}function Wo(e,c){e=Ce(e);const n=e.dep;n&&Su(n)}function Ye(e){return!!(e&&e.__v_isRef===!0)}function $(e){return Ko(e,!1)}function Al(e){return Ko(e,!0)}function Ko(e,c){return Ye(e)?e:new r0(e,c)}class r0{constructor(c,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?c:Ce(c),this._value=n?c:ka(c)}get value(){return Uo(this),this._value}set value(c){const n=this.__v_isShallow||fs(c)||Mt(c);c=n?c:Ce(c),qa(c,this._rawValue)&&(this._rawValue=c,this._value=n?c:ka(c),Wo(this))}}function dc(e){return Ye(e)?e.value:e}const i0={get:(e,c,n)=>dc(Reflect.get(e,c,n)),set:(e,c,n,t)=>{const a=e[c];return Ye(a)&&!Ye(n)?(a.value=n,!0):Reflect.set(e,c,n,t)}};function Yo(e){return Pt(e)?e:new Proxy(e,i0)}function El(e){const c=je(e)?new Array(e.length):{};for(const n in e)c[n]=Y(e,n);return c}class o0{constructor(c,n,t){this._object=c,this._key=n,this._defaultValue=t,this.__v_isRef=!0}get value(){const c=this._object[this._key];return c===void 0?this._defaultValue:c}set value(c){this._object[this._key]=c}get dep(){return Bm(Ce(this._object),this._key)}}function Y(e,c,n){const t=e[c];return Ye(t)?t:new o0(e,c,n)}var Go;class d0{constructor(c,n,t,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Go]=!1,this._dirty=!0,this.effect=new _l(c,()=>{this._dirty||(this._dirty=!0,Wo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=t}get value(){const c=Ce(this);return Uo(c),(c._dirty||!c._cacheable)&&(c._dirty=!1,c._value=c.effect.run()),c._value}set value(c){this._setter(c)}}Go="__v_isReadonly";function f0(e,c,n=!1){let t,a;const s=we(e);return s?(t=e,a=Kc):(t=e.get,a=e.set),new d0(t,a,s||!a,n)}function On(e,c,n,t){let a;try{a=t?e(...t):e()}catch(s){xs(s,c,n)}return a}function Tc(e,c,n,t){if(we(e)){const s=On(e,c,n,t);return s&&Io(s)&&s.catch(u=>{xs(u,c,n)}),s}const a=[];for(let s=0;s<e.length;s++)a.push(Tc(e[s],c,n,t));return a}function xs(e,c,n,t=!0){const a=c?c.vnode:null;if(c){let s=c.parent;const u=c.proxy,l=n;for(;s;){const o=s.ec;if(o){for(let i=0;i<o.length;i++)if(o[i](e,u,l)===!1)return}s=s.parent}const r=c.appContext.config.errorHandler;if(r){On(r,null,10,[e,u,l]);return}}m0(e,n,a,t)}function m0(e,c,n,t=!0){console.error(e)}let pa=!1,_u=!1;const oc=[];let nn=0;const Tt=[];let bn=null,nt=0;const Xo=Promise.resolve();let Pl=null;function Fe(e){const c=Pl||Xo;return e?c.then(this?e.bind(this):e):c}function v0(e){let c=nn+1,n=oc.length;for(;c<n;){const t=c+n>>>1;Sa(oc[t])<e?c=t+1:n=t}return c}function Tl(e){(!oc.length||!oc.includes(e,pa&&e.allowRecurse?nn+1:nn))&&(e.id==null?oc.push(e):oc.splice(v0(e.id),0,e),Qo())}function Qo(){!pa&&!_u&&(_u=!0,Pl=Xo.then(Jo))}function y0(e){const c=oc.indexOf(e);c>nn&&oc.splice(c,1)}function b0(e){je(e)?Tt.push(...e):(!bn||!bn.includes(e,e.allowRecurse?nt+1:nt))&&Tt.push(e),Qo()}function Rr(e,c=pa?nn+1:0){for(;c<oc.length;c++){const n=oc[c];n&&n.pre&&(oc.splice(c,1),c--,n())}}function Zo(e){if(Tt.length){const c=[...new Set(Tt)];if(Tt.length=0,bn){bn.push(...c);return}for(bn=c,bn.sort((n,t)=>Sa(n)-Sa(t)),nt=0;nt<bn.length;nt++)bn[nt]();bn=null,nt=0}}const Sa=e=>e.id==null?1/0:e.id,h0=(e,c)=>{const n=Sa(e)-Sa(c);if(n===0){if(e.pre&&!c.pre)return-1;if(c.pre&&!e.pre)return 1}return n};function Jo(e){_u=!1,pa=!0,oc.sort(h0);const c=Kc;try{for(nn=0;nn<oc.length;nn++){const n=oc[nn];n&&n.active!==!1&&On(n,null,14)}}finally{nn=0,oc.length=0,Zo(),pa=!1,Pl=null,(oc.length||Tt.length)&&Jo()}}function g0(e,c,...n){if(e.isUnmounted)return;const t=e.vnode.props||Ne;let a=n;const s=c.startsWith("update:"),u=s&&c.slice(7);if(u&&u in t){const i=`${u==="modelValue"?"model":u}Modifiers`,{number:d,trim:f}=t[i]||Ne;f&&(a=n.map(v=>Xe(v)?v.trim():v)),d&&(a=n.map(qu))}let l,r=t[l=as(c)]||t[l=as(Mc(c))];!r&&s&&(r=t[l=as(Dt(c))]),r&&Tc(r,e,6,a);const o=t[l+"Once"];if(o){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Tc(o,e,6,a)}}function e1(e,c,n=!1){const t=c.emitsCache,a=t.get(e);if(a!==void 0)return a;const s=e.emits;let u={},l=!1;if(!we(e)){const r=o=>{const i=e1(o,c,!0);i&&(l=!0,sc(u,i))};!n&&c.mixins.length&&c.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!s&&!l?(De(e)&&t.set(e,null),null):(je(s)?s.forEach(r=>u[r]=null):sc(u,s),De(e)&&t.set(e,u),u)}function Vs(e,c){return!e||!Ss(c)?!1:(c=c.slice(2).replace(/Once$/,""),Te(e,c[0].toLowerCase()+c.slice(1))||Te(e,Dt(c))||Te(e,c))}let Vc=null,Is=null;function ms(e){const c=Vc;return Vc=e,Is=e&&e.type.__scopeId||null,c}function j0(e){Is=e}function q0(){Is=null}function ge(e,c=Vc,n){if(!c||e._n)return e;const t=(...a)=>{t._d&&Yr(-1);const s=ms(c);let u;try{u=e(...a)}finally{ms(s),t._d&&Yr(1)}return u};return t._n=!0,t._c=!0,t._d=!0,t}function Zs(e){const{type:c,vnode:n,proxy:t,withProxy:a,props:s,propsOptions:[u],slots:l,attrs:r,emit:o,render:i,renderCache:d,data:f,setupState:v,ctx:y,inheritAttrs:b}=e;let k,g;const p=ms(e);try{if(n.shapeFlag&4){const P=a||t;k=cn(i.call(P,P,d,s,v,f,y)),g=r}else{const P=c;k=cn(P.length>1?P(s,{attrs:r,slots:l,emit:o}):P(s,null)),g=c.props?r:k0(r)}}catch(P){va.length=0,xs(P,e,1),k=m(hn)}let j=k;if(g&&b!==!1){const P=Object.keys(g),{shapeFlag:w}=j;P.length&&w&7&&(u&&P.some(gl)&&(g=p0(g,u)),j=jn(j,g))}return n.dirs&&(j=jn(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),k=j,ms(p),k}const k0=e=>{let c;for(const n in e)(n==="class"||n==="style"||Ss(n))&&((c||(c={}))[n]=e[n]);return c},p0=(e,c)=>{const n={};for(const t in e)(!gl(t)||!(t.slice(9)in c))&&(n[t]=e[t]);return n};function S0(e,c,n){const{props:t,children:a,component:s}=e,{props:u,children:l,patchFlag:r}=c,o=s.emitsOptions;if(c.dirs||c.transition)return!0;if(n&&r>=0){if(r&1024)return!0;if(r&16)return t?Or(t,u,o):!!u;if(r&8){const i=c.dynamicProps;for(let d=0;d<i.length;d++){const f=i[d];if(u[f]!==t[f]&&!Vs(o,f))return!0}}}else return(a||l)&&(!l||!l.$stable)?!0:t===u?!1:t?u?Or(t,u,o):!0:!!u;return!1}function Or(e,c,n){const t=Object.keys(c);if(t.length!==Object.keys(e).length)return!0;for(let a=0;a<t.length;a++){const s=t[a];if(c[s]!==e[s]&&!Vs(n,s))return!0}return!1}function _0({vnode:e,parent:c},n){for(;c&&c.subTree===e;)(e=c.vnode).el=n,c=c.parent}const C0=e=>e.__isSuspense;function w0(e,c){c&&c.pendingBranch?je(e)?c.effects.push(...e):c.effects.push(e):b0(e)}function Ge(e,c){if(Ze){let n=Ze.provides;const t=Ze.parent&&Ze.parent.provides;t===n&&(n=Ze.provides=Object.create(t)),n[e]=c}}function Ee(e,c,n=!1){const t=Ze||Vc;if(t){const a=t.parent==null?t.vnode.appContext&&t.vnode.appContext.provides:t.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&we(c)?c.call(t.proxy):c}}function Gc(e,c){return $l(e,null,c)}const Xa={};function ae(e,c,n){return $l(e,c,n)}function $l(e,c,{immediate:n,deep:t,flush:a,onTrack:s,onTrigger:u}=Ne){const l=Tm()===(Ze==null?void 0:Ze.scope)?Ze:null;let r,o=!1,i=!1;if(Ye(e)?(r=()=>e.value,o=fs(e)):Pt(e)?(r=()=>e,t=!0):je(e)?(i=!0,o=e.some(j=>Pt(j)||fs(j)),r=()=>e.map(j=>{if(Ye(j))return j.value;if(Pt(j))return ut(j);if(we(j))return On(j,l,2)})):we(e)?c?r=()=>On(e,l,2):r=()=>{if(!(l&&l.isUnmounted))return d&&d(),Tc(e,l,3,[f])}:r=Kc,c&&t){const j=r;r=()=>ut(j())}let d,f=j=>{d=g.onStop=()=>{On(j,l,4)}},v;if(xa)if(f=Kc,c?n&&Tc(c,l,3,[r(),i?[]:void 0,f]):r(),a==="sync"){const j=y2();v=j.__watcherHandles||(j.__watcherHandles=[])}else return Kc;let y=i?new Array(e.length).fill(Xa):Xa;const b=()=>{if(g.active)if(c){const j=g.run();(t||o||(i?j.some((P,w)=>qa(P,y[w])):qa(j,y)))&&(d&&d(),Tc(c,l,3,[j,y===Xa?void 0:i&&y[0]===Xa?[]:y,f]),y=j)}else g.run()};b.allowRecurse=!!c;let k;a==="sync"?k=b:a==="post"?k=()=>qc(b,l&&l.suspense):(b.pre=!0,l&&(b.id=l.uid),k=()=>Tl(b));const g=new _l(r,k);c?n?b():y=g.run():a==="post"?qc(g.run.bind(g),l&&l.suspense):g.run();const p=()=>{g.stop(),l&&l.scope&&jl(l.scope.effects,g)};return v&&v.push(p),p}function x0(e,c,n){const t=this.proxy,a=Xe(e)?e.includes(".")?c1(t,e):()=>t[e]:e.bind(t,t);let s;we(c)?s=c:(s=c.handler,n=c);const u=Ze;Bt(this);const l=$l(a,s.bind(t),n);return u?Bt(u):ft(),l}function c1(e,c){const n=c.split(".");return()=>{let t=e;for(let a=0;a<n.length&&t;a++)t=t[n[a]];return t}}function ut(e,c){if(!De(e)||e.__v_skip||(c=c||new Set,c.has(e)))return e;if(c.add(e),Ye(e))ut(e.value,c);else if(je(e))for(let n=0;n<e.length;n++)ut(e[n],c);else if(Vo(e)||Et(e))e.forEach(n=>{ut(n,c)});else if(Eo(e))for(const n in e)ut(e[n],c);return e}function n1(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return vc(()=>{e.isMounted=!0}),jc(()=>{e.isUnmounting=!0}),e}const Pc=[Function,Array],V0={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Pc,onEnter:Pc,onAfterEnter:Pc,onEnterCancelled:Pc,onBeforeLeave:Pc,onLeave:Pc,onAfterLeave:Pc,onLeaveCancelled:Pc,onBeforeAppear:Pc,onAppear:Pc,onAfterAppear:Pc,onAppearCancelled:Pc},setup(e,{slots:c}){const n=$s(),t=n1();let a;return()=>{const s=c.default&&Ml(c.default(),!0);if(!s||!s.length)return;let u=s[0];if(s.length>1){for(const b of s)if(b.type!==hn){u=b;break}}const l=Ce(e),{mode:r}=l;if(t.isLeaving)return Js(u);const o=Lr(u);if(!o)return Js(u);const i=_a(o,l,t,n);Ca(o,i);const d=n.subTree,f=d&&Lr(d);let v=!1;const{getTransitionKey:y}=o.type;if(y){const b=y();a===void 0?a=b:b!==a&&(a=b,v=!0)}if(f&&f.type!==hn&&(!tt(o,f)||v)){const b=_a(f,l,t,n);if(Ca(f,b),r==="out-in")return t.isLeaving=!0,b.afterLeave=()=>{t.isLeaving=!1,n.update.active!==!1&&n.update()},Js(u);r==="in-out"&&o.type!==hn&&(b.delayLeave=(k,g,p)=>{const j=a1(t,f);j[String(f.key)]=f,k._leaveCb=()=>{g(),k._leaveCb=void 0,delete i.delayedLeave},i.delayedLeave=p})}return u}}},t1=V0;function a1(e,c){const{leavingVNodes:n}=e;let t=n.get(c.type);return t||(t=Object.create(null),n.set(c.type,t)),t}function _a(e,c,n,t){const{appear:a,mode:s,persisted:u=!1,onBeforeEnter:l,onEnter:r,onAfterEnter:o,onEnterCancelled:i,onBeforeLeave:d,onLeave:f,onAfterLeave:v,onLeaveCancelled:y,onBeforeAppear:b,onAppear:k,onAfterAppear:g,onAppearCancelled:p}=c,j=String(e.key),P=a1(n,e),w=(q,_)=>{q&&Tc(q,t,9,_)},I=(q,_)=>{const x=_[1];w(q,_),je(q)?q.every(V=>V.length<=1)&&x():q.length<=1&&x()},A={mode:s,persisted:u,beforeEnter(q){let _=l;if(!n.isMounted)if(a)_=b||l;else return;q._leaveCb&&q._leaveCb(!0);const x=P[j];x&&tt(e,x)&&x.el._leaveCb&&x.el._leaveCb(),w(_,[q])},enter(q){let _=r,x=o,V=i;if(!n.isMounted)if(a)_=k||r,x=g||o,V=p||i;else return;let C=!1;const M=q._enterCb=N=>{C||(C=!0,N?w(V,[q]):w(x,[q]),A.delayedLeave&&A.delayedLeave(),q._enterCb=void 0)};_?I(_,[q,M]):M()},leave(q,_){const x=String(e.key);if(q._enterCb&&q._enterCb(!0),n.isUnmounting)return _();w(d,[q]);let V=!1;const C=q._leaveCb=M=>{V||(V=!0,_(),M?w(y,[q]):w(v,[q]),q._leaveCb=void 0,P[x]===e&&delete P[x])};P[x]=e,f?I(f,[q,C]):C()},clone(q){return _a(q,c,n,t)}};return A}function Js(e){if(As(e))return e=jn(e),e.children=null,e}function Lr(e){return As(e)?e.children?e.children[0]:void 0:e}function Ca(e,c){e.shapeFlag&6&&e.component?Ca(e.component.subTree,c):e.shapeFlag&128?(e.ssContent.transition=c.clone(e.ssContent),e.ssFallback.transition=c.clone(e.ssFallback)):e.transition=c}function Ml(e,c=!1,n){let t=[],a=0;for(let s=0;s<e.length;s++){let u=e[s];const l=n==null?u.key:String(n)+String(u.key!=null?u.key:s);u.type===me?(u.patchFlag&128&&a++,t=t.concat(Ml(u.children,c,l))):(c||u.type!==hn)&&t.push(l!=null?jn(u,{key:l}):u)}if(a>1)for(let s=0;s<t.length;s++)t[s].patchFlag=-2;return t}function Bl(e){return we(e)?{setup:e,name:e.name}:e}const us=e=>!!e.type.__asyncLoader,As=e=>e.type.__isKeepAlive;function s1(e,c){l1(e,"a",c)}function u1(e,c){l1(e,"da",c)}function l1(e,c,n=Ze){const t=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Es(c,t,n),n){let a=n.parent;for(;a&&a.parent;)As(a.parent.vnode)&&I0(t,c,n,a),a=a.parent}}function I0(e,c,n,t){const a=Es(c,e,t,!0);i1(()=>{jl(t[c],a)},n)}function Es(e,c,n=Ze,t=!1){if(n){const a=n[e]||(n[e]=[]),s=c.__weh||(c.__weh=(...u)=>{if(n.isUnmounted)return;zt(),Bt(n);const l=Tc(c,n,e,u);return ft(),Ht(),l});return t?a.unshift(s):a.push(s),s}}const Cn=e=>(c,n=Ze)=>(!xa||e==="sp")&&Es(e,(...t)=>c(...t),n),Ps=Cn("bm"),vc=Cn("m"),r1=Cn("bu"),Rl=Cn("u"),jc=Cn("bum"),i1=Cn("um"),A0=Cn("sp"),E0=Cn("rtg"),P0=Cn("rtc");function T0(e,c=Ze){Es("ec",e,c)}function We(e,c){const n=Vc;if(n===null)return e;const t=Ms(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let s=0;s<c.length;s++){let[u,l,r,o=Ne]=c[s];u&&(we(u)&&(u={mounted:u,updated:u}),u.deep&&ut(l),a.push({dir:u,instance:t,value:l,oldValue:void 0,arg:r,modifiers:o}))}return e}function Xn(e,c,n,t){const a=e.dirs,s=c&&c.dirs;for(let u=0;u<a.length;u++){const l=a[u];s&&(l.oldValue=s[u].value);let r=l.dir[t];r&&(zt(),Tc(r,n,8,[e.el,l,e,c]),Ht())}}const Ol="components",$0="directives";function xe(e,c){return Ll(Ol,e,!0,c)||e}const o1=Symbol();function M0(e){return Xe(e)?Ll(Ol,e,!1)||e:e||o1}function Sc(e){return Ll($0,e)}function Ll(e,c,n=!0,t=!1){const a=Vc||Ze;if(a){const s=a.type;if(e===Ol){const l=f2(s,!1);if(l&&(l===c||l===Mc(c)||l===_n(Mc(c))))return s}const u=Fr(a[e]||s[e],c)||Fr(a.appContext[e],c);return!u&&t?s:u}}function Fr(e,c){return e&&(e[c]||e[Mc(c)]||e[_n(Mc(c))])}function an(e,c,n,t){let a;const s=n&&n[t];if(je(e)||Xe(e)){a=new Array(e.length);for(let u=0,l=e.length;u<l;u++)a[u]=c(e[u],u,void 0,s&&s[u])}else if(typeof e=="number"){a=new Array(e);for(let u=0;u<e;u++)a[u]=c(u+1,u,void 0,s&&s[u])}else if(De(e))if(e[Symbol.iterator])a=Array.from(e,(u,l)=>c(u,l,void 0,s&&s[l]));else{const u=Object.keys(e);a=new Array(u.length);for(let l=0,r=u.length;l<r;l++){const o=u[l];a[l]=c(e[o],o,l,s&&s[l])}}else a=[];return n&&(n[t]=a),a}function eu(e,c){const n={};for(const t in e)n[c&&/[A-Z]/.test(t)?`on:${t}`:as(t)]=e[t];return n}const Cu=e=>e?k1(e)?Ms(e)||e.proxy:Cu(e.parent):null,fa=sc(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Cu(e.parent),$root:e=>Cu(e.root),$emit:e=>e.emit,$options:e=>Fl(e),$forceUpdate:e=>e.f||(e.f=()=>Tl(e.update)),$nextTick:e=>e.n||(e.n=Fe.bind(e.proxy)),$watch:e=>x0.bind(e)}),cu=(e,c)=>e!==Ne&&!e.__isScriptSetup&&Te(e,c),B0={get({_:e},c){const{ctx:n,setupState:t,data:a,props:s,accessCache:u,type:l,appContext:r}=e;let o;if(c[0]!=="$"){const v=u[c];if(v!==void 0)switch(v){case 1:return t[c];case 2:return a[c];case 4:return n[c];case 3:return s[c]}else{if(cu(t,c))return u[c]=1,t[c];if(a!==Ne&&Te(a,c))return u[c]=2,a[c];if((o=e.propsOptions[0])&&Te(o,c))return u[c]=3,s[c];if(n!==Ne&&Te(n,c))return u[c]=4,n[c];wu&&(u[c]=0)}}const i=fa[c];let d,f;if(i)return c==="$attrs"&&pc(e,"get",c),i(e);if((d=l.__cssModules)&&(d=d[c]))return d;if(n!==Ne&&Te(n,c))return u[c]=4,n[c];if(f=r.config.globalProperties,Te(f,c))return f[c]},set({_:e},c,n){const{data:t,setupState:a,ctx:s}=e;return cu(a,c)?(a[c]=n,!0):t!==Ne&&Te(t,c)?(t[c]=n,!0):Te(e.props,c)||c[0]==="$"&&c.slice(1)in e?!1:(s[c]=n,!0)},has({_:{data:e,setupState:c,accessCache:n,ctx:t,appContext:a,propsOptions:s}},u){let l;return!!n[u]||e!==Ne&&Te(e,u)||cu(c,u)||(l=s[0])&&Te(l,u)||Te(t,u)||Te(fa,u)||Te(a.config.globalProperties,u)},defineProperty(e,c,n){return n.get!=null?e._.accessCache[c]=0:Te(n,"value")&&this.set(e,c,n.value,null),Reflect.defineProperty(e,c,n)}};let wu=!0;function R0(e){const c=Fl(e),n=e.proxy,t=e.ctx;wu=!1,c.beforeCreate&&Nr(c.beforeCreate,e,"bc");const{data:a,computed:s,methods:u,watch:l,provide:r,inject:o,created:i,beforeMount:d,mounted:f,beforeUpdate:v,updated:y,activated:b,deactivated:k,beforeDestroy:g,beforeUnmount:p,destroyed:j,unmounted:P,render:w,renderTracked:I,renderTriggered:A,errorCaptured:q,serverPrefetch:_,expose:x,inheritAttrs:V,components:C,directives:M,filters:N}=c;if(o&&O0(o,t,null,e.appContext.config.unwrapInjectedRef),u)for(const H in u){const D=u[H];we(D)&&(t[H]=D.bind(n))}if(a){const H=a.call(n,n);De(H)&&(e.data=uc(H))}if(wu=!0,s)for(const H in s){const D=s[H],J=we(D)?D.bind(n,n):we(D.get)?D.get.bind(n,n):Kc,R=!we(D)&&we(D.set)?D.set.bind(n):Kc,K=h({get:J,set:R});Object.defineProperty(t,H,{enumerable:!0,configurable:!0,get:()=>K.value,set:z=>K.value=z})}if(l)for(const H in l)d1(l[H],t,n,H);if(r){const H=we(r)?r.call(n):r;Reflect.ownKeys(H).forEach(D=>{Ge(D,H[D])})}i&&Nr(i,e,"c");function F(H,D){je(D)?D.forEach(J=>H(J.bind(n))):D&&H(D.bind(n))}if(F(Ps,d),F(vc,f),F(r1,v),F(Rl,y),F(s1,b),F(u1,k),F(T0,q),F(P0,I),F(E0,A),F(jc,p),F(i1,P),F(A0,_),je(x))if(x.length){const H=e.exposed||(e.exposed={});x.forEach(D=>{Object.defineProperty(H,D,{get:()=>n[D],set:J=>n[D]=J})})}else e.exposed||(e.exposed={});w&&e.render===Kc&&(e.render=w),V!=null&&(e.inheritAttrs=V),C&&(e.components=C),M&&(e.directives=M)}function O0(e,c,n=Kc,t=!1){je(e)&&(e=xu(e));for(const a in e){const s=e[a];let u;De(s)?"default"in s?u=Ee(s.from||a,s.default,!0):u=Ee(s.from||a):u=Ee(s),Ye(u)&&t?Object.defineProperty(c,a,{enumerable:!0,configurable:!0,get:()=>u.value,set:l=>u.value=l}):c[a]=u}}function Nr(e,c,n){Tc(je(e)?e.map(t=>t.bind(c.proxy)):e.bind(c.proxy),c,n)}function d1(e,c,n,t){const a=t.includes(".")?c1(n,t):()=>n[t];if(Xe(e)){const s=c[e];we(s)&&ae(a,s)}else if(we(e))ae(a,e.bind(n));else if(De(e))if(je(e))e.forEach(s=>d1(s,c,n,t));else{const s=we(e.handler)?e.handler.bind(n):c[e.handler];we(s)&&ae(a,s,e)}}function Fl(e){const c=e.type,{mixins:n,extends:t}=c,{mixins:a,optionsCache:s,config:{optionMergeStrategies:u}}=e.appContext,l=s.get(c);let r;return l?r=l:!a.length&&!n&&!t?r=c:(r={},a.length&&a.forEach(o=>vs(r,o,u,!0)),vs(r,c,u)),De(c)&&s.set(c,r),r}function vs(e,c,n,t=!1){const{mixins:a,extends:s}=c;s&&vs(e,s,n,!0),a&&a.forEach(u=>vs(e,u,n,!0));for(const u in c)if(!(t&&u==="expose")){const l=L0[u]||n&&n[u];e[u]=l?l(e[u],c[u]):c[u]}return e}const L0={data:Dr,props:ct,emits:ct,methods:ct,computed:ct,beforeCreate:hc,created:hc,beforeMount:hc,mounted:hc,beforeUpdate:hc,updated:hc,beforeDestroy:hc,beforeUnmount:hc,destroyed:hc,unmounted:hc,activated:hc,deactivated:hc,errorCaptured:hc,serverPrefetch:hc,components:ct,directives:ct,watch:N0,provide:Dr,inject:F0};function Dr(e,c){return c?e?function(){return sc(we(e)?e.call(this,this):e,we(c)?c.call(this,this):c)}:c:e}function F0(e,c){return ct(xu(e),xu(c))}function xu(e){if(je(e)){const c={};for(let n=0;n<e.length;n++)c[e[n]]=e[n];return c}return e}function hc(e,c){return e?[...new Set([].concat(e,c))]:c}function ct(e,c){return e?sc(sc(Object.create(null),e),c):c}function N0(e,c){if(!e)return c;if(!c)return e;const n=sc(Object.create(null),e);for(const t in c)n[t]=hc(e[t],c[t]);return n}function D0(e,c,n,t=!1){const a={},s={};os(s,Ts,1),e.propsDefaults=Object.create(null),f1(e,c,a,s);for(const u in e.propsOptions[0])u in a||(a[u]=void 0);n?e.props=t?a:l0(a):e.type.props?e.props=a:e.props=s,e.attrs=s}function z0(e,c,n,t){const{props:a,attrs:s,vnode:{patchFlag:u}}=e,l=Ce(a),[r]=e.propsOptions;let o=!1;if((t||u>0)&&!(u&16)){if(u&8){const i=e.vnode.dynamicProps;for(let d=0;d<i.length;d++){let f=i[d];if(Vs(e.emitsOptions,f))continue;const v=c[f];if(r)if(Te(s,f))v!==s[f]&&(s[f]=v,o=!0);else{const y=Mc(f);a[y]=Vu(r,l,y,v,e,!1)}else v!==s[f]&&(s[f]=v,o=!0)}}}else{f1(e,c,a,s)&&(o=!0);let i;for(const d in l)(!c||!Te(c,d)&&((i=Dt(d))===d||!Te(c,i)))&&(r?n&&(n[d]!==void 0||n[i]!==void 0)&&(a[d]=Vu(r,l,d,void 0,e,!0)):delete a[d]);if(s!==l)for(const d in s)(!c||!Te(c,d))&&(delete s[d],o=!0)}o&&gn(e,"set","$attrs")}function f1(e,c,n,t){const[a,s]=e.propsOptions;let u=!1,l;if(c)for(let r in c){if(ts(r))continue;const o=c[r];let i;a&&Te(a,i=Mc(r))?!s||!s.includes(i)?n[i]=o:(l||(l={}))[i]=o:Vs(e.emitsOptions,r)||(!(r in t)||o!==t[r])&&(t[r]=o,u=!0)}if(s){const r=Ce(n),o=l||Ne;for(let i=0;i<s.length;i++){const d=s[i];n[d]=Vu(a,r,d,o[d],e,!Te(o,d))}}return u}function Vu(e,c,n,t,a,s){const u=e[n];if(u!=null){const l=Te(u,"default");if(l&&t===void 0){const r=u.default;if(u.type!==Function&&we(r)){const{propsDefaults:o}=a;n in o?t=o[n]:(Bt(a),t=o[n]=r.call(null,c),ft())}else t=r}u[0]&&(s&&!l?t=!1:u[1]&&(t===""||t===Dt(n))&&(t=!0))}return t}function m1(e,c,n=!1){const t=c.propsCache,a=t.get(e);if(a)return a;const s=e.props,u={},l=[];let r=!1;if(!we(e)){const i=d=>{r=!0;const[f,v]=m1(d,c,!0);sc(u,f),v&&l.push(...v)};!n&&c.mixins.length&&c.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!s&&!r)return De(e)&&t.set(e,At),At;if(je(s))for(let i=0;i<s.length;i++){const d=Mc(s[i]);zr(d)&&(u[d]=Ne)}else if(s)for(const i in s){const d=Mc(i);if(zr(d)){const f=s[i],v=u[d]=je(f)||we(f)?{type:f}:Object.assign({},f);if(v){const y=Wr(Boolean,v.type),b=Wr(String,v.type);v[0]=y>-1,v[1]=b<0||y<b,(y>-1||Te(v,"default"))&&l.push(d)}}}const o=[u,l];return De(e)&&t.set(e,o),o}function zr(e){return e[0]!=="$"}function Hr(e){const c=e&&e.toString().match(/^\s*(function|class) (\w+)/);return c?c[2]:e===null?"null":""}function Ur(e,c){return Hr(e)===Hr(c)}function Wr(e,c){return je(c)?c.findIndex(n=>Ur(n,e)):we(c)&&Ur(c,e)?0:-1}const v1=e=>e[0]==="_"||e==="$stable",Nl=e=>je(e)?e.map(cn):[cn(e)],H0=(e,c,n)=>{if(c._n)return c;const t=ge((...a)=>Nl(c(...a)),n);return t._c=!1,t},y1=(e,c,n)=>{const t=e._ctx;for(const a in e){if(v1(a))continue;const s=e[a];if(we(s))c[a]=H0(a,s,t);else if(s!=null){const u=Nl(s);c[a]=()=>u}}},b1=(e,c)=>{const n=Nl(c);e.slots.default=()=>n},U0=(e,c)=>{if(e.vnode.shapeFlag&32){const n=c._;n?(e.slots=Ce(c),os(c,"_",n)):y1(c,e.slots={})}else e.slots={},c&&b1(e,c);os(e.slots,Ts,1)},W0=(e,c,n)=>{const{vnode:t,slots:a}=e;let s=!0,u=Ne;if(t.shapeFlag&32){const l=c._;l?n&&l===1?s=!1:(sc(a,c),!n&&l===1&&delete a._):(s=!c.$stable,y1(c,a)),u=c}else c&&(b1(e,c),u={default:1});if(s)for(const l in a)!v1(l)&&!(l in u)&&delete a[l]};function h1(){return{app:null,config:{isNativeTag:_m,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let K0=0;function Y0(e,c){return function(t,a=null){we(t)||(t=Object.assign({},t)),a!=null&&!De(a)&&(a=null);const s=h1(),u=new Set;let l=!1;const r=s.app={_uid:K0++,_component:t,_props:a,_container:null,_context:s,_instance:null,version:b2,get config(){return s.config},set config(o){},use(o,...i){return u.has(o)||(o&&we(o.install)?(u.add(o),o.install(r,...i)):we(o)&&(u.add(o),o(r,...i))),r},mixin(o){return s.mixins.includes(o)||s.mixins.push(o),r},component(o,i){return i?(s.components[o]=i,r):s.components[o]},directive(o,i){return i?(s.directives[o]=i,r):s.directives[o]},mount(o,i,d){if(!l){const f=m(t,a);return f.appContext=s,i&&c?c(f,o):e(f,o,d),l=!0,r._container=o,o.__vue_app__=r,Ms(f.component)||f.component.proxy}},unmount(){l&&(e(null,r._container),delete r._container.__vue_app__)},provide(o,i){return s.provides[o]=i,r}};return r}}function Iu(e,c,n,t,a=!1){if(je(e)){e.forEach((f,v)=>Iu(f,c&&(je(c)?c[v]:c),n,t,a));return}if(us(t)&&!a)return;const s=t.shapeFlag&4?Ms(t.component)||t.component.proxy:t.el,u=a?null:s,{i:l,r}=e,o=c&&c.r,i=l.refs===Ne?l.refs={}:l.refs,d=l.setupState;if(o!=null&&o!==r&&(Xe(o)?(i[o]=null,Te(d,o)&&(d[o]=null)):Ye(o)&&(o.value=null)),we(r))On(r,l,12,[u,i]);else{const f=Xe(r),v=Ye(r);if(f||v){const y=()=>{if(e.f){const b=f?Te(d,r)?d[r]:i[r]:r.value;a?je(b)&&jl(b,s):je(b)?b.includes(s)||b.push(s):f?(i[r]=[s],Te(d,r)&&(d[r]=i[r])):(r.value=[s],e.k&&(i[e.k]=r.value))}else f?(i[r]=u,Te(d,r)&&(d[r]=u)):v&&(r.value=u,e.k&&(i[e.k]=u))};u?(y.id=-1,qc(y,n)):y()}}}const qc=w0;function G0(e){return X0(e)}function X0(e,c){const n=Em();n.__VUE__=!0;const{insert:t,remove:a,patchProp:s,createElement:u,createText:l,createComment:r,setText:o,setElementText:i,parentNode:d,nextSibling:f,setScopeId:v=Kc,insertStaticContent:y}=e,b=(S,E,L,U=null,G=null,ce=null,ue=!1,ee=null,te=!!E.dynamicChildren)=>{if(S===E)return;S&&!tt(S,E)&&(U=O(S),z(S,G,ce,!0),S=null),E.patchFlag===-2&&(te=!1,E.dynamicChildren=null);const{type:Z,ref:ye,shapeFlag:de}=E;switch(Z){case Ra:k(S,E,L,U);break;case hn:g(S,E,L,U);break;case nu:S==null&&p(E,L,U,ue);break;case me:C(S,E,L,U,G,ce,ue,ee,te);break;default:de&1?w(S,E,L,U,G,ce,ue,ee,te):de&6?M(S,E,L,U,G,ce,ue,ee,te):(de&64||de&128)&&Z.process(S,E,L,U,G,ce,ue,ee,te,ie)}ye!=null&&G&&Iu(ye,S&&S.ref,ce,E||S,!E)},k=(S,E,L,U)=>{if(S==null)t(E.el=l(E.children),L,U);else{const G=E.el=S.el;E.children!==S.children&&o(G,E.children)}},g=(S,E,L,U)=>{S==null?t(E.el=r(E.children||""),L,U):E.el=S.el},p=(S,E,L,U)=>{[S.el,S.anchor]=y(S.children,E,L,U,S.el,S.anchor)},j=({el:S,anchor:E},L,U)=>{let G;for(;S&&S!==E;)G=f(S),t(S,L,U),S=G;t(E,L,U)},P=({el:S,anchor:E})=>{let L;for(;S&&S!==E;)L=f(S),a(S),S=L;a(E)},w=(S,E,L,U,G,ce,ue,ee,te)=>{ue=ue||E.type==="svg",S==null?I(E,L,U,G,ce,ue,ee,te):_(S,E,G,ce,ue,ee,te)},I=(S,E,L,U,G,ce,ue,ee)=>{let te,Z;const{type:ye,props:de,shapeFlag:be,transition:pe,dirs:Ie}=S;if(te=S.el=u(S.type,ce,de&&de.is,de),be&8?i(te,S.children):be&16&&q(S.children,te,null,U,G,ce&&ye!=="foreignObject",ue,ee),Ie&&Xn(S,null,U,"created"),A(te,S,S.scopeId,ue,U),de){for(const Re in de)Re!=="value"&&!ts(Re)&&s(te,Re,null,de[Re],ce,S.children,U,G,T);"value"in de&&s(te,"value",null,de.value),(Z=de.onVnodeBeforeMount)&&en(Z,U,S)}Ie&&Xn(S,null,U,"beforeMount");const Le=(!G||G&&!G.pendingBranch)&&pe&&!pe.persisted;Le&&pe.beforeEnter(te),t(te,E,L),((Z=de&&de.onVnodeMounted)||Le||Ie)&&qc(()=>{Z&&en(Z,U,S),Le&&pe.enter(te),Ie&&Xn(S,null,U,"mounted")},G)},A=(S,E,L,U,G)=>{if(L&&v(S,L),U)for(let ce=0;ce<U.length;ce++)v(S,U[ce]);if(G){let ce=G.subTree;if(E===ce){const ue=G.vnode;A(S,ue,ue.scopeId,ue.slotScopeIds,G.parent)}}},q=(S,E,L,U,G,ce,ue,ee,te=0)=>{for(let Z=te;Z<S.length;Z++){const ye=S[Z]=ee?Mn(S[Z]):cn(S[Z]);b(null,ye,E,L,U,G,ce,ue,ee)}},_=(S,E,L,U,G,ce,ue)=>{const ee=E.el=S.el;let{patchFlag:te,dynamicChildren:Z,dirs:ye}=E;te|=S.patchFlag&16;const de=S.props||Ne,be=E.props||Ne;let pe;L&&Qn(L,!1),(pe=be.onVnodeBeforeUpdate)&&en(pe,L,E,S),ye&&Xn(E,S,L,"beforeUpdate"),L&&Qn(L,!0);const Ie=G&&E.type!=="foreignObject";if(Z?x(S.dynamicChildren,Z,ee,L,U,Ie,ce):ue||D(S,E,ee,null,L,U,Ie,ce,!1),te>0){if(te&16)V(ee,E,de,be,L,U,G);else if(te&2&&de.class!==be.class&&s(ee,"class",null,be.class,G),te&4&&s(ee,"style",de.style,be.style,G),te&8){const Le=E.dynamicProps;for(let Re=0;Re<Le.length;Re++){const cc=Le[Re],Dc=de[cc],kt=be[cc];(kt!==Dc||cc==="value")&&s(ee,cc,Dc,kt,G,S.children,L,U,T)}}te&1&&S.children!==E.children&&i(ee,E.children)}else!ue&&Z==null&&V(ee,E,de,be,L,U,G);((pe=be.onVnodeUpdated)||ye)&&qc(()=>{pe&&en(pe,L,E,S),ye&&Xn(E,S,L,"updated")},U)},x=(S,E,L,U,G,ce,ue)=>{for(let ee=0;ee<E.length;ee++){const te=S[ee],Z=E[ee],ye=te.el&&(te.type===me||!tt(te,Z)||te.shapeFlag&70)?d(te.el):L;b(te,Z,ye,null,U,G,ce,ue,!0)}},V=(S,E,L,U,G,ce,ue)=>{if(L!==U){if(L!==Ne)for(const ee in L)!ts(ee)&&!(ee in U)&&s(S,ee,L[ee],null,ue,E.children,G,ce,T);for(const ee in U){if(ts(ee))continue;const te=U[ee],Z=L[ee];te!==Z&&ee!=="value"&&s(S,ee,Z,te,ue,E.children,G,ce,T)}"value"in U&&s(S,"value",L.value,U.value)}},C=(S,E,L,U,G,ce,ue,ee,te)=>{const Z=E.el=S?S.el:l(""),ye=E.anchor=S?S.anchor:l("");let{patchFlag:de,dynamicChildren:be,slotScopeIds:pe}=E;pe&&(ee=ee?ee.concat(pe):pe),S==null?(t(Z,L,U),t(ye,L,U),q(E.children,L,ye,G,ce,ue,ee,te)):de>0&&de&64&&be&&S.dynamicChildren?(x(S.dynamicChildren,be,L,G,ce,ue,ee),(E.key!=null||G&&E===G.subTree)&&Dl(S,E,!0)):D(S,E,L,ye,G,ce,ue,ee,te)},M=(S,E,L,U,G,ce,ue,ee,te)=>{E.slotScopeIds=ee,S==null?E.shapeFlag&512?G.ctx.activate(E,L,U,ue,te):N(E,L,U,G,ce,ue,te):Q(S,E,te)},N=(S,E,L,U,G,ce,ue)=>{const ee=S.component=l2(S,U,G);if(As(S)&&(ee.ctx.renderer=ie),r2(ee),ee.asyncDep){if(G&&G.registerDep(ee,F),!S.el){const te=ee.subTree=m(hn);g(null,te,E,L)}return}F(ee,S,E,L,G,ce,ue)},Q=(S,E,L)=>{const U=E.component=S.component;if(S0(S,E,L))if(U.asyncDep&&!U.asyncResolved){H(U,E,L);return}else U.next=E,y0(U.update),U.update();else E.el=S.el,U.vnode=E},F=(S,E,L,U,G,ce,ue)=>{const ee=()=>{if(S.isMounted){let{next:ye,bu:de,u:be,parent:pe,vnode:Ie}=S,Le=ye,Re;Qn(S,!1),ye?(ye.el=Ie.el,H(S,ye,ue)):ye=Ie,de&&ss(de),(Re=ye.props&&ye.props.onVnodeBeforeUpdate)&&en(Re,pe,ye,Ie),Qn(S,!0);const cc=Zs(S),Dc=S.subTree;S.subTree=cc,b(Dc,cc,d(Dc.el),O(Dc),S,G,ce),ye.el=cc.el,Le===null&&_0(S,cc.el),be&&qc(be,G),(Re=ye.props&&ye.props.onVnodeUpdated)&&qc(()=>en(Re,pe,ye,Ie),G)}else{let ye;const{el:de,props:be}=E,{bm:pe,m:Ie,parent:Le}=S,Re=us(E);if(Qn(S,!1),pe&&ss(pe),!Re&&(ye=be&&be.onVnodeBeforeMount)&&en(ye,Le,E),Qn(S,!0),de&&ve){const cc=()=>{S.subTree=Zs(S),ve(de,S.subTree,S,G,null)};Re?E.type.__asyncLoader().then(()=>!S.isUnmounted&&cc()):cc()}else{const cc=S.subTree=Zs(S);b(null,cc,L,U,S,G,ce),E.el=cc.el}if(Ie&&qc(Ie,G),!Re&&(ye=be&&be.onVnodeMounted)){const cc=E;qc(()=>en(ye,Le,cc),G)}(E.shapeFlag&256||Le&&us(Le.vnode)&&Le.vnode.shapeFlag&256)&&S.a&&qc(S.a,G),S.isMounted=!0,E=L=U=null}},te=S.effect=new _l(ee,()=>Tl(Z),S.scope),Z=S.update=()=>te.run();Z.id=S.uid,Qn(S,!0),Z()},H=(S,E,L)=>{E.component=S;const U=S.vnode.props;S.vnode=E,S.next=null,z0(S,E.props,U,L),W0(S,E.children,L),zt(),Rr(),Ht()},D=(S,E,L,U,G,ce,ue,ee,te=!1)=>{const Z=S&&S.children,ye=S?S.shapeFlag:0,de=E.children,{patchFlag:be,shapeFlag:pe}=E;if(be>0){if(be&128){R(Z,de,L,U,G,ce,ue,ee,te);return}else if(be&256){J(Z,de,L,U,G,ce,ue,ee,te);return}}pe&8?(ye&16&&T(Z,G,ce),de!==Z&&i(L,de)):ye&16?pe&16?R(Z,de,L,U,G,ce,ue,ee,te):T(Z,G,ce,!0):(ye&8&&i(L,""),pe&16&&q(de,L,U,G,ce,ue,ee,te))},J=(S,E,L,U,G,ce,ue,ee,te)=>{S=S||At,E=E||At;const Z=S.length,ye=E.length,de=Math.min(Z,ye);let be;for(be=0;be<de;be++){const pe=E[be]=te?Mn(E[be]):cn(E[be]);b(S[be],pe,L,null,G,ce,ue,ee,te)}Z>ye?T(S,G,ce,!0,!1,de):q(E,L,U,G,ce,ue,ee,te,de)},R=(S,E,L,U,G,ce,ue,ee,te)=>{let Z=0;const ye=E.length;let de=S.length-1,be=ye-1;for(;Z<=de&&Z<=be;){const pe=S[Z],Ie=E[Z]=te?Mn(E[Z]):cn(E[Z]);if(tt(pe,Ie))b(pe,Ie,L,null,G,ce,ue,ee,te);else break;Z++}for(;Z<=de&&Z<=be;){const pe=S[de],Ie=E[be]=te?Mn(E[be]):cn(E[be]);if(tt(pe,Ie))b(pe,Ie,L,null,G,ce,ue,ee,te);else break;de--,be--}if(Z>de){if(Z<=be){const pe=be+1,Ie=pe<ye?E[pe].el:U;for(;Z<=be;)b(null,E[Z]=te?Mn(E[Z]):cn(E[Z]),L,Ie,G,ce,ue,ee,te),Z++}}else if(Z>be)for(;Z<=de;)z(S[Z],G,ce,!0),Z++;else{const pe=Z,Ie=Z,Le=new Map;for(Z=Ie;Z<=be;Z++){const _c=E[Z]=te?Mn(E[Z]):cn(E[Z]);_c.key!=null&&Le.set(_c.key,Z)}let Re,cc=0;const Dc=be-Ie+1;let kt=!1,wr=0;const aa=new Array(Dc);for(Z=0;Z<Dc;Z++)aa[Z]=0;for(Z=pe;Z<=de;Z++){const _c=S[Z];if(cc>=Dc){z(_c,G,ce,!0);continue}let Jc;if(_c.key!=null)Jc=Le.get(_c.key);else for(Re=Ie;Re<=be;Re++)if(aa[Re-Ie]===0&&tt(_c,E[Re])){Jc=Re;break}Jc===void 0?z(_c,G,ce,!0):(aa[Jc-Ie]=Z+1,Jc>=wr?wr=Jc:kt=!0,b(_c,E[Jc],L,null,G,ce,ue,ee,te),cc++)}const xr=kt?Q0(aa):At;for(Re=xr.length-1,Z=Dc-1;Z>=0;Z--){const _c=Ie+Z,Jc=E[_c],Vr=_c+1<ye?E[_c+1].el:U;aa[Z]===0?b(null,Jc,L,Vr,G,ce,ue,ee,te):kt&&(Re<0||Z!==xr[Re]?K(Jc,L,Vr,2):Re--)}}},K=(S,E,L,U,G=null)=>{const{el:ce,type:ue,transition:ee,children:te,shapeFlag:Z}=S;if(Z&6){K(S.component.subTree,E,L,U);return}if(Z&128){S.suspense.move(E,L,U);return}if(Z&64){ue.move(S,E,L,ie);return}if(ue===me){t(ce,E,L);for(let de=0;de<te.length;de++)K(te[de],E,L,U);t(S.anchor,E,L);return}if(ue===nu){j(S,E,L);return}if(U!==2&&Z&1&&ee)if(U===0)ee.beforeEnter(ce),t(ce,E,L),qc(()=>ee.enter(ce),G);else{const{leave:de,delayLeave:be,afterLeave:pe}=ee,Ie=()=>t(ce,E,L),Le=()=>{de(ce,()=>{Ie(),pe&&pe()})};be?be(ce,Ie,Le):Le()}else t(ce,E,L)},z=(S,E,L,U=!1,G=!1)=>{const{type:ce,props:ue,ref:ee,children:te,dynamicChildren:Z,shapeFlag:ye,patchFlag:de,dirs:be}=S;if(ee!=null&&Iu(ee,null,L,S,!0),ye&256){E.ctx.deactivate(S);return}const pe=ye&1&&be,Ie=!us(S);let Le;if(Ie&&(Le=ue&&ue.onVnodeBeforeUnmount)&&en(Le,E,S),ye&6)B(S.component,L,U);else{if(ye&128){S.suspense.unmount(L,U);return}pe&&Xn(S,null,E,"beforeUnmount"),ye&64?S.type.remove(S,E,L,G,ie,U):Z&&(ce!==me||de>0&&de&64)?T(Z,E,L,!1,!0):(ce===me&&de&384||!G&&ye&16)&&T(te,E,L),U&&fe(S)}(Ie&&(Le=ue&&ue.onVnodeUnmounted)||pe)&&qc(()=>{Le&&en(Le,E,S),pe&&Xn(S,null,E,"unmounted")},L)},fe=S=>{const{type:E,el:L,anchor:U,transition:G}=S;if(E===me){oe(L,U);return}if(E===nu){P(S);return}const ce=()=>{a(L),G&&!G.persisted&&G.afterLeave&&G.afterLeave()};if(S.shapeFlag&1&&G&&!G.persisted){const{leave:ue,delayLeave:ee}=G,te=()=>ue(L,ce);ee?ee(S.el,ce,te):te()}else ce()},oe=(S,E)=>{let L;for(;S!==E;)L=f(S),a(S),S=L;a(E)},B=(S,E,L)=>{const{bum:U,scope:G,update:ce,subTree:ue,um:ee}=S;U&&ss(U),G.stop(),ce&&(ce.active=!1,z(ue,S,E,L)),ee&&qc(ee,E),qc(()=>{S.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&S.asyncDep&&!S.asyncResolved&&S.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},T=(S,E,L,U=!1,G=!1,ce=0)=>{for(let ue=ce;ue<S.length;ue++)z(S[ue],E,L,U,G)},O=S=>S.shapeFlag&6?O(S.component.subTree):S.shapeFlag&128?S.suspense.next():f(S.anchor||S.el),re=(S,E,L)=>{S==null?E._vnode&&z(E._vnode,null,null,!0):b(E._vnode||null,S,E,null,null,null,L),Rr(),Zo(),E._vnode=S},ie={p:b,um:z,m:K,r:fe,mt:N,mc:q,pc:D,pbc:x,n:O,o:e};let Ve,ve;return c&&([Ve,ve]=c(ie)),{render:re,hydrate:Ve,createApp:Y0(re,Ve)}}function Qn({effect:e,update:c},n){e.allowRecurse=c.allowRecurse=n}function Dl(e,c,n=!1){const t=e.children,a=c.children;if(je(t)&&je(a))for(let s=0;s<t.length;s++){const u=t[s];let l=a[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=a[s]=Mn(a[s]),l.el=u.el),n||Dl(u,l)),l.type===Ra&&(l.el=u.el)}}function Q0(e){const c=e.slice(),n=[0];let t,a,s,u,l;const r=e.length;for(t=0;t<r;t++){const o=e[t];if(o!==0){if(a=n[n.length-1],e[a]<o){c[t]=a,n.push(t);continue}for(s=0,u=n.length-1;s<u;)l=s+u>>1,e[n[l]]<o?s=l+1:u=l;o<e[n[s]]&&(s>0&&(c[t]=n[s-1]),n[s]=t)}}for(s=n.length,u=n[s-1];s-- >0;)n[s]=u,u=c[u];return n}const Z0=e=>e.__isTeleport,ma=e=>e&&(e.disabled||e.disabled===""),Kr=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Au=(e,c)=>{const n=e&&e.to;return Xe(n)?c?c(n):null:n},J0={__isTeleport:!0,process(e,c,n,t,a,s,u,l,r,o){const{mc:i,pc:d,pbc:f,o:{insert:v,querySelector:y,createText:b,createComment:k}}=o,g=ma(c.props);let{shapeFlag:p,children:j,dynamicChildren:P}=c;if(e==null){const w=c.el=b(""),I=c.anchor=b("");v(w,n,t),v(I,n,t);const A=c.target=Au(c.props,y),q=c.targetAnchor=b("");A&&(v(q,A),u=u||Kr(A));const _=(x,V)=>{p&16&&i(j,x,V,a,s,u,l,r)};g?_(n,I):A&&_(A,q)}else{c.el=e.el;const w=c.anchor=e.anchor,I=c.target=e.target,A=c.targetAnchor=e.targetAnchor,q=ma(e.props),_=q?n:I,x=q?w:A;if(u=u||Kr(I),P?(f(e.dynamicChildren,P,_,a,s,u,l),Dl(e,c,!0)):r||d(e,c,_,x,a,s,u,l,!1),g)q||Qa(c,n,w,o,1);else if((c.props&&c.props.to)!==(e.props&&e.props.to)){const V=c.target=Au(c.props,y);V&&Qa(c,V,null,o,0)}else q&&Qa(c,I,A,o,1)}g1(c)},remove(e,c,n,t,{um:a,o:{remove:s}},u){const{shapeFlag:l,children:r,anchor:o,targetAnchor:i,target:d,props:f}=e;if(d&&s(i),(u||!ma(f))&&(s(o),l&16))for(let v=0;v<r.length;v++){const y=r[v];a(y,c,n,!0,!!y.dynamicChildren)}},move:Qa,hydrate:e2};function Qa(e,c,n,{o:{insert:t},m:a},s=2){s===0&&t(e.targetAnchor,c,n);const{el:u,anchor:l,shapeFlag:r,children:o,props:i}=e,d=s===2;if(d&&t(u,c,n),(!d||ma(i))&&r&16)for(let f=0;f<o.length;f++)a(o[f],c,n,2);d&&t(l,c,n)}function e2(e,c,n,t,a,s,{o:{nextSibling:u,parentNode:l,querySelector:r}},o){const i=c.target=Au(c.props,r);if(i){const d=i._lpa||i.firstChild;if(c.shapeFlag&16)if(ma(c.props))c.anchor=o(u(e),c,l(e),n,t,a,s),c.targetAnchor=d;else{c.anchor=u(e);let f=d;for(;f;)if(f=u(f),f&&f.nodeType===8&&f.data==="teleport anchor"){c.targetAnchor=f,i._lpa=c.targetAnchor&&u(c.targetAnchor);break}o(d,c,i,n,t,a,s)}g1(c)}return c.anchor&&u(c.anchor)}const c2=J0;function g1(e){const c=e.ctx;if(c&&c.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",c.uid),n=n.nextSibling;c.ut()}}const me=Symbol(void 0),Ra=Symbol(void 0),hn=Symbol(void 0),nu=Symbol(void 0),va=[];let Uc=null;function Ae(e=!1){va.push(Uc=e?null:[])}function n2(){va.pop(),Uc=va[va.length-1]||null}let wa=1;function Yr(e){wa+=e}function j1(e){return e.dynamicChildren=wa>0?Uc||At:null,n2(),wa>0&&Uc&&Uc.push(e),e}function Qe(e,c,n,t,a,s){return j1(He(e,c,n,t,a,s,!0))}function kc(e,c,n,t,a){return j1(m(e,c,n,t,a,!0))}function Eu(e){return e?e.__v_isVNode===!0:!1}function tt(e,c){return e.type===c.type&&e.key===c.key}const Ts="__vInternal",q1=({key:e})=>e??null,ls=({ref:e,ref_key:c,ref_for:n})=>e!=null?Xe(e)||Ye(e)||we(e)?{i:Vc,r:e,k:c,f:!!n}:e:null;function He(e,c=null,n=null,t=0,a=null,s=e===me?0:1,u=!1,l=!1){const r={__v_isVNode:!0,__v_skip:!0,type:e,props:c,key:c&&q1(c),ref:c&&ls(c),scopeId:Is,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:t,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Vc};return l?(zl(r,n),s&128&&e.normalize(r)):n&&(r.shapeFlag|=Xe(n)?8:16),wa>0&&!u&&Uc&&(r.patchFlag>0||s&6)&&r.patchFlag!==32&&Uc.push(r),r}const m=t2;function t2(e,c=null,n=null,t=0,a=null,s=!1){if((!e||e===o1)&&(e=hn),Eu(e)){const l=jn(e,c,!0);return n&&zl(l,n),wa>0&&!s&&Uc&&(l.shapeFlag&6?Uc[Uc.indexOf(e)]=l:Uc.push(l)),l.patchFlag|=-2,l}if(m2(e)&&(e=e.__vccOpts),c){c=a2(c);let{class:l,style:r}=c;l&&!Xe(l)&&(c.class=Nn(l)),De(r)&&(zo(r)&&!je(r)&&(r=sc({},r)),c.style=hl(r))}const u=Xe(e)?1:C0(e)?128:Z0(e)?64:De(e)?4:we(e)?2:0;return He(e,c,n,t,a,u,s,!0)}function a2(e){return e?zo(e)||Ts in e?sc({},e):e:null}function jn(e,c,n=!1){const{props:t,ref:a,patchFlag:s,children:u}=e,l=c?se(t||{},c):t;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&q1(l),ref:c&&c.ref?n&&a?je(a)?a.concat(ls(c)):[a,ls(c)]:ls(c):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:u,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:c&&e.type!==me?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&jn(e.ssContent),ssFallback:e.ssFallback&&jn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Oe(e=" ",c=0){return m(Ra,null,e,c)}function cn(e){return e==null||typeof e=="boolean"?m(hn):je(e)?m(me,null,e.slice()):typeof e=="object"?Mn(e):m(Ra,null,String(e))}function Mn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:jn(e)}function zl(e,c){let n=0;const{shapeFlag:t}=e;if(c==null)c=null;else if(je(c))n=16;else if(typeof c=="object")if(t&65){const a=c.default;a&&(a._c&&(a._d=!1),zl(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=c._;!a&&!(Ts in c)?c._ctx=Vc:a===3&&Vc&&(Vc.slots._===1?c._=1:(c._=2,e.patchFlag|=1024))}else we(c)?(c={default:c,_ctx:Vc},n=32):(c=String(c),t&64?(n=16,c=[Oe(c)]):n=8);e.children=c,e.shapeFlag|=n}function se(...e){const c={};for(let n=0;n<e.length;n++){const t=e[n];for(const a in t)if(a==="class")c.class!==t.class&&(c.class=Nn([c.class,t.class]));else if(a==="style")c.style=hl([c.style,t.style]);else if(Ss(a)){const s=c[a],u=t[a];u&&s!==u&&!(je(s)&&s.includes(u))&&(c[a]=s?[].concat(s,u):u)}else a!==""&&(c[a]=t[a])}return c}function en(e,c,n,t=null){Tc(e,c,7,[n,t])}const s2=h1();let u2=0;function l2(e,c,n){const t=e.type,a=(c?c.appContext:e.appContext)||s2,s={uid:u2++,vnode:e,type:t,parent:c,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Po(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:c?c.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:m1(t,a),emitsOptions:e1(t,a),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:t.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=c?c.root:s,s.emit=g0.bind(null,s),e.ce&&e.ce(s),s}let Ze=null;const $s=()=>Ze||Vc,Bt=e=>{Ze=e,e.scope.on()},ft=()=>{Ze&&Ze.scope.off(),Ze=null};function k1(e){return e.vnode.shapeFlag&4}let xa=!1;function r2(e,c=!1){xa=c;const{props:n,children:t}=e.vnode,a=k1(e);D0(e,n,a,c),U0(e,t);const s=a?i2(e,c):void 0;return xa=!1,s}function i2(e,c){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ho(new Proxy(e.ctx,B0));const{setup:t}=n;if(t){const a=e.setupContext=t.length>1?d2(e):null;Bt(e),zt();const s=On(t,e,0,[e.props,a]);if(Ht(),ft(),Io(s)){if(s.then(ft,ft),c)return s.then(u=>{Gr(e,u,c)}).catch(u=>{xs(u,e,0)});e.asyncDep=s}else Gr(e,s,c)}else p1(e,c)}function Gr(e,c,n){we(c)?e.type.__ssrInlineRender?e.ssrRender=c:e.render=c:De(c)&&(e.setupState=Yo(c)),p1(e,n)}let Xr;function p1(e,c,n){const t=e.type;if(!e.render){if(!c&&Xr&&!t.render){const a=t.template||Fl(e).template;if(a){const{isCustomElement:s,compilerOptions:u}=e.appContext.config,{delimiters:l,compilerOptions:r}=t,o=sc(sc({isCustomElement:s,delimiters:l},u),r);t.render=Xr(a,o)}}e.render=t.render||Kc}Bt(e),zt(),R0(e),Ht(),ft()}function o2(e){return new Proxy(e.attrs,{get(c,n){return pc(e,"get","$attrs"),c[n]}})}function d2(e){const c=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=o2(e))},slots:e.slots,emit:e.emit,expose:c}}function Ms(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Yo(Ho(e.exposed)),{get(c,n){if(n in c)return c[n];if(n in fa)return fa[n](e)},has(c,n){return n in c||n in fa}}))}function f2(e,c=!0){return we(e)?e.displayName||e.name:e.name||c&&e.__name}function m2(e){return we(e)&&"__vccOpts"in e}const h=(e,c)=>f0(e,c,xa);function dn(e,c,n){const t=arguments.length;return t===2?De(c)&&!je(c)?Eu(c)?m(e,null,[c]):m(e,c):m(e,null,c):(t>3?n=Array.prototype.slice.call(arguments,2):t===3&&Eu(n)&&(n=[n]),m(e,c,n))}const v2=Symbol(""),y2=()=>Ee(v2),b2="3.2.47",h2="http://www.w3.org/2000/svg",at=typeof document<"u"?document:null,Qr=at&&at.createElement("template"),g2={insert:(e,c,n)=>{c.insertBefore(e,n||null)},remove:e=>{const c=e.parentNode;c&&c.removeChild(e)},createElement:(e,c,n,t)=>{const a=c?at.createElementNS(h2,e):at.createElement(e,n?{is:n}:void 0);return e==="select"&&t&&t.multiple!=null&&a.setAttribute("multiple",t.multiple),a},createText:e=>at.createTextNode(e),createComment:e=>at.createComment(e),setText:(e,c)=>{e.nodeValue=c},setElementText:(e,c)=>{e.textContent=c},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>at.querySelector(e),setScopeId(e,c){e.setAttribute(c,"")},insertStaticContent(e,c,n,t,a,s){const u=n?n.previousSibling:c.lastChild;if(a&&(a===s||a.nextSibling))for(;c.insertBefore(a.cloneNode(!0),n),!(a===s||!(a=a.nextSibling)););else{Qr.innerHTML=t?`<svg>${e}</svg>`:e;const l=Qr.content;if(t){const r=l.firstChild;for(;r.firstChild;)l.appendChild(r.firstChild);l.removeChild(r)}c.insertBefore(l,n)}return[u?u.nextSibling:c.firstChild,n?n.previousSibling:c.lastChild]}};function j2(e,c,n){const t=e._vtc;t&&(c=(c?[c,...t]:[...t]).join(" ")),c==null?e.removeAttribute("class"):n?e.setAttribute("class",c):e.className=c}function q2(e,c,n){const t=e.style,a=Xe(n);if(n&&!a){if(c&&!Xe(c))for(const s in c)n[s]==null&&Pu(t,s,"");for(const s in n)Pu(t,s,n[s])}else{const s=t.display;a?c!==n&&(t.cssText=n):c&&e.removeAttribute("style"),"_vod"in e&&(t.display=s)}}const Zr=/\s*!important$/;function Pu(e,c,n){if(je(n))n.forEach(t=>Pu(e,c,t));else if(n==null&&(n=""),c.startsWith("--"))e.setProperty(c,n);else{const t=k2(e,c);Zr.test(n)?e.setProperty(Dt(t),n.replace(Zr,""),"important"):e[t]=n}}const Jr=["Webkit","Moz","ms"],tu={};function k2(e,c){const n=tu[c];if(n)return n;let t=Mc(c);if(t!=="filter"&&t in e)return tu[c]=t;t=_n(t);for(let a=0;a<Jr.length;a++){const s=Jr[a]+t;if(s in e)return tu[c]=s}return c}const ei="http://www.w3.org/1999/xlink";function p2(e,c,n,t,a){if(t&&c.startsWith("xlink:"))n==null?e.removeAttributeNS(ei,c.slice(6,c.length)):e.setAttributeNS(ei,c,n);else{const s=Sm(c);n==null||s&&!wo(n)?e.removeAttribute(c):e.setAttribute(c,s?"":n)}}function S2(e,c,n,t,a,s,u){if(c==="innerHTML"||c==="textContent"){t&&u(t,a,s),e[c]=n??"";return}if(c==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const r=n??"";(e.value!==r||e.tagName==="OPTION")&&(e.value=r),n==null&&e.removeAttribute(c);return}let l=!1;if(n===""||n==null){const r=typeof e[c];r==="boolean"?n=wo(n):n==null&&r==="string"?(n="",l=!0):r==="number"&&(n=0,l=!0)}try{e[c]=n}catch{}l&&e.removeAttribute(c)}function xt(e,c,n,t){e.addEventListener(c,n,t)}function _2(e,c,n,t){e.removeEventListener(c,n,t)}function C2(e,c,n,t,a=null){const s=e._vei||(e._vei={}),u=s[c];if(t&&u)u.value=t;else{const[l,r]=w2(c);if(t){const o=s[c]=I2(t,a);xt(e,l,o,r)}else u&&(_2(e,l,u,r),s[c]=void 0)}}const ci=/(?:Once|Passive|Capture)$/;function w2(e){let c;if(ci.test(e)){c={};let t;for(;t=e.match(ci);)e=e.slice(0,e.length-t[0].length),c[t[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Dt(e.slice(2)),c]}let au=0;const x2=Promise.resolve(),V2=()=>au||(x2.then(()=>au=0),au=Date.now());function I2(e,c){const n=t=>{if(!t._vts)t._vts=Date.now();else if(t._vts<=n.attached)return;Tc(A2(t,n.value),c,5,[t])};return n.value=e,n.attached=V2(),n}function A2(e,c){if(je(c)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},c.map(t=>a=>!a._stopped&&t&&t(a))}else return c}const ni=/^on[a-z]/,E2=(e,c,n,t,a=!1,s,u,l,r)=>{c==="class"?j2(e,t,a):c==="style"?q2(e,n,t):Ss(c)?gl(c)||C2(e,c,n,t,u):(c[0]==="."?(c=c.slice(1),!0):c[0]==="^"?(c=c.slice(1),!1):P2(e,c,t,a))?S2(e,c,t,s,u,l,r):(c==="true-value"?e._trueValue=t:c==="false-value"&&(e._falseValue=t),p2(e,c,t,a))};function P2(e,c,n,t){return t?!!(c==="innerHTML"||c==="textContent"||c in e&&ni.test(c)&&we(n)):c==="spellcheck"||c==="draggable"||c==="translate"||c==="form"||c==="list"&&e.tagName==="INPUT"||c==="type"&&e.tagName==="TEXTAREA"||ni.test(c)&&Xe(n)?!1:c in e}const Pn="transition",sa="animation",rn=(e,{slots:c})=>dn(t1,_1(e),c);rn.displayName="Transition";const S1={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},T2=rn.props=sc({},t1.props,S1),Zn=(e,c=[])=>{je(e)?e.forEach(n=>n(...c)):e&&e(...c)},ti=e=>e?je(e)?e.some(c=>c.length>1):e.length>1:!1;function _1(e){const c={};for(const C in e)C in S1||(c[C]=e[C]);if(e.css===!1)return c;const{name:n="v",type:t,duration:a,enterFromClass:s=`${n}-enter-from`,enterActiveClass:u=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:r=s,appearActiveClass:o=u,appearToClass:i=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=e,y=$2(a),b=y&&y[0],k=y&&y[1],{onBeforeEnter:g,onEnter:p,onEnterCancelled:j,onLeave:P,onLeaveCancelled:w,onBeforeAppear:I=g,onAppear:A=p,onAppearCancelled:q=j}=c,_=(C,M,N)=>{$n(C,M?i:l),$n(C,M?o:u),N&&N()},x=(C,M)=>{C._isLeaving=!1,$n(C,d),$n(C,v),$n(C,f),M&&M()},V=C=>(M,N)=>{const Q=C?A:p,F=()=>_(M,C,N);Zn(Q,[M,F]),ai(()=>{$n(M,C?r:s),yn(M,C?i:l),ti(Q)||si(M,t,b,F)})};return sc(c,{onBeforeEnter(C){Zn(g,[C]),yn(C,s),yn(C,u)},onBeforeAppear(C){Zn(I,[C]),yn(C,r),yn(C,o)},onEnter:V(!1),onAppear:V(!0),onLeave(C,M){C._isLeaving=!0;const N=()=>x(C,M);yn(C,d),w1(),yn(C,f),ai(()=>{C._isLeaving&&($n(C,d),yn(C,v),ti(P)||si(C,t,k,N))}),Zn(P,[C,N])},onEnterCancelled(C){_(C,!1),Zn(j,[C])},onAppearCancelled(C){_(C,!0),Zn(q,[C])},onLeaveCancelled(C){x(C),Zn(w,[C])}})}function $2(e){if(e==null)return null;if(De(e))return[su(e.enter),su(e.leave)];{const c=su(e);return[c,c]}}function su(e){return Am(e)}function yn(e,c){c.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(c)}function $n(e,c){c.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(c),n.size||(e._vtc=void 0))}function ai(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let M2=0;function si(e,c,n,t){const a=e._endId=++M2,s=()=>{a===e._endId&&t()};if(n)return setTimeout(s,n);const{type:u,timeout:l,propCount:r}=C1(e,c);if(!u)return t();const o=u+"end";let i=0;const d=()=>{e.removeEventListener(o,f),s()},f=v=>{v.target===e&&++i>=r&&d()};setTimeout(()=>{i<r&&d()},l+1),e.addEventListener(o,f)}function C1(e,c){const n=window.getComputedStyle(e),t=y=>(n[y]||"").split(", "),a=t(`${Pn}Delay`),s=t(`${Pn}Duration`),u=ui(a,s),l=t(`${sa}Delay`),r=t(`${sa}Duration`),o=ui(l,r);let i=null,d=0,f=0;c===Pn?u>0&&(i=Pn,d=u,f=s.length):c===sa?o>0&&(i=sa,d=o,f=r.length):(d=Math.max(u,o),i=d>0?u>o?Pn:sa:null,f=i?i===Pn?s.length:r.length:0);const v=i===Pn&&/\b(transform|all)(,|$)/.test(t(`${Pn}Property`).toString());return{type:i,timeout:d,propCount:f,hasTransform:v}}function ui(e,c){for(;e.length<c.length;)e=e.concat(e);return Math.max(...c.map((n,t)=>li(n)+li(e[t])))}function li(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function w1(){return document.body.offsetHeight}const x1=new WeakMap,V1=new WeakMap,I1={name:"TransitionGroup",props:sc({},T2,{tag:String,moveClass:String}),setup(e,{slots:c}){const n=$s(),t=n1();let a,s;return Rl(()=>{if(!a.length)return;const u=e.moveClass||`${e.name||"v"}-move`;if(!N2(a[0].el,n.vnode.el,u))return;a.forEach(O2),a.forEach(L2);const l=a.filter(F2);w1(),l.forEach(r=>{const o=r.el,i=o.style;yn(o,u),i.transform=i.webkitTransform=i.transitionDuration="";const d=o._moveCb=f=>{f&&f.target!==o||(!f||/transform$/.test(f.propertyName))&&(o.removeEventListener("transitionend",d),o._moveCb=null,$n(o,u))};o.addEventListener("transitionend",d)})}),()=>{const u=Ce(e),l=_1(u);let r=u.tag||me;a=s,s=c.default?Ml(c.default()):[];for(let o=0;o<s.length;o++){const i=s[o];i.key!=null&&Ca(i,_a(i,l,t,n))}if(a)for(let o=0;o<a.length;o++){const i=a[o];Ca(i,_a(i,l,t,n)),x1.set(i,i.el.getBoundingClientRect())}return m(r,null,s)}}},B2=e=>delete e.mode;I1.props;const R2=I1;function O2(e){const c=e.el;c._moveCb&&c._moveCb(),c._enterCb&&c._enterCb()}function L2(e){V1.set(e,e.el.getBoundingClientRect())}function F2(e){const c=x1.get(e),n=V1.get(e),t=c.left-n.left,a=c.top-n.top;if(t||a){const s=e.el.style;return s.transform=s.webkitTransform=`translate(${t}px,${a}px)`,s.transitionDuration="0s",e}}function N2(e,c,n){const t=e.cloneNode();e._vtc&&e._vtc.forEach(u=>{u.split(/\s+/).forEach(l=>l&&t.classList.remove(l))}),n.split(/\s+/).forEach(u=>u&&t.classList.add(u)),t.style.display="none";const a=c.nodeType===1?c:c.parentNode;a.appendChild(t);const{hasTransform:s}=C1(t);return a.removeChild(t),s}const ri=e=>{const c=e.props["onUpdate:modelValue"]||!1;return je(c)?n=>ss(c,n):c};function D2(e){e.target.composing=!0}function ii(e){const c=e.target;c.composing&&(c.composing=!1,c.dispatchEvent(new Event("input")))}const z2={created(e,{modifiers:{lazy:c,trim:n,number:t}},a){e._assign=ri(a);const s=t||a.props&&a.props.type==="number";xt(e,c?"change":"input",u=>{if(u.target.composing)return;let l=e.value;n&&(l=l.trim()),s&&(l=qu(l)),e._assign(l)}),n&&xt(e,"change",()=>{e.value=e.value.trim()}),c||(xt(e,"compositionstart",D2),xt(e,"compositionend",ii),xt(e,"change",ii))},mounted(e,{value:c}){e.value=c??""},beforeUpdate(e,{value:c,modifiers:{lazy:n,trim:t,number:a}},s){if(e._assign=ri(s),e.composing||document.activeElement===e&&e.type!=="range"&&(n||t&&e.value.trim()===c||(a||e.type==="number")&&qu(e.value)===c))return;const u=c??"";e.value!==u&&(e.value=u)}},fn={beforeMount(e,{value:c},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&c?n.beforeEnter(e):ua(e,c)},mounted(e,{value:c},{transition:n}){n&&c&&n.enter(e)},updated(e,{value:c,oldValue:n},{transition:t}){!c!=!n&&(t?c?(t.beforeEnter(e),ua(e,!0),t.enter(e)):t.leave(e,()=>{ua(e,!1)}):ua(e,c))},beforeUnmount(e,{value:c}){ua(e,c)}};function ua(e,c){e.style.display=c?e._vod:"none"}const H2=sc({patchProp:E2},g2);let oi;function U2(){return oi||(oi=G0(H2))}const W2=(...e)=>{const c=U2().createApp(...e),{mount:n}=c;return c.mount=t=>{const a=K2(t);if(!a)return;const s=c._component;!we(s)&&!s.render&&!s.template&&(s.template=a.innerHTML),a.innerHTML="";const u=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),u},c};function K2(e){return Xe(e)?document.querySelector(e):e}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Vt=typeof window<"u";function Y2(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Me=Object.assign;function uu(e,c){const n={};for(const t in c){const a=c[t];n[t]=Yc(a)?a.map(e):e(a)}return n}const ya=()=>{},Yc=Array.isArray,G2=/\/$/,X2=e=>e.replace(G2,"");function lu(e,c,n="/"){let t,a={},s="",u="";const l=c.indexOf("#");let r=c.indexOf("?");return l<r&&l>=0&&(r=-1),r>-1&&(t=c.slice(0,r),s=c.slice(r+1,l>-1?l:c.length),a=e(s)),l>-1&&(t=t||c.slice(0,l),u=c.slice(l,c.length)),t=ev(t??c,n),{fullPath:t+(s&&"?")+s+u,path:t,query:a,hash:u}}function Q2(e,c){const n=c.query?e(c.query):"";return c.path+(n&&"?")+n+(c.hash||"")}function di(e,c){return!c||!e.toLowerCase().startsWith(c.toLowerCase())?e:e.slice(c.length)||"/"}function Z2(e,c,n){const t=c.matched.length-1,a=n.matched.length-1;return t>-1&&t===a&&Rt(c.matched[t],n.matched[a])&&A1(c.params,n.params)&&e(c.query)===e(n.query)&&c.hash===n.hash}function Rt(e,c){return(e.aliasOf||e)===(c.aliasOf||c)}function A1(e,c){if(Object.keys(e).length!==Object.keys(c).length)return!1;for(const n in e)if(!J2(e[n],c[n]))return!1;return!0}function J2(e,c){return Yc(e)?fi(e,c):Yc(c)?fi(c,e):e===c}function fi(e,c){return Yc(c)?e.length===c.length&&e.every((n,t)=>n===c[t]):e.length===1&&e[0]===c}function ev(e,c){if(e.startsWith("/"))return e;if(!e)return c;const n=c.split("/"),t=e.split("/");let a=n.length-1,s,u;for(s=0;s<t.length;s++)if(u=t[s],u!==".")if(u==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+t.slice(s-(s===t.length?1:0)).join("/")}var Va;(function(e){e.pop="pop",e.push="push"})(Va||(Va={}));var ba;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ba||(ba={}));function cv(e){if(!e)if(Vt){const c=document.querySelector("base");e=c&&c.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),X2(e)}const nv=/^[^#]+#/;function tv(e,c){return e.replace(nv,"#")+c}function av(e,c){const n=document.documentElement.getBoundingClientRect(),t=e.getBoundingClientRect();return{behavior:c.behavior,left:t.left-n.left-(c.left||0),top:t.top-n.top-(c.top||0)}}const Bs=()=>({left:window.pageXOffset,top:window.pageYOffset});function sv(e){let c;if("el"in e){const n=e.el,t=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?t?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;c=av(a,e)}else c=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(c):window.scrollTo(c.left!=null?c.left:window.pageXOffset,c.top!=null?c.top:window.pageYOffset)}function mi(e,c){return(history.state?history.state.position-c:-1)+e}const Tu=new Map;function uv(e,c){Tu.set(e,c)}function lv(e){const c=Tu.get(e);return Tu.delete(e),c}let rv=()=>location.protocol+"//"+location.host;function E1(e,c){const{pathname:n,search:t,hash:a}=c,s=e.indexOf("#");if(s>-1){let l=a.includes(e.slice(s))?e.slice(s).length:1,r=a.slice(l);return r[0]!=="/"&&(r="/"+r),di(r,"")}return di(n,e)+t+a}function iv(e,c,n,t){let a=[],s=[],u=null;const l=({state:f})=>{const v=E1(e,location),y=n.value,b=c.value;let k=0;if(f){if(n.value=v,c.value=f,u&&u===y){u=null;return}k=b?f.position-b.position:0}else t(v);a.forEach(g=>{g(n.value,y,{delta:k,type:Va.pop,direction:k?k>0?ba.forward:ba.back:ba.unknown})})};function r(){u=n.value}function o(f){a.push(f);const v=()=>{const y=a.indexOf(f);y>-1&&a.splice(y,1)};return s.push(v),v}function i(){const{history:f}=window;f.state&&f.replaceState(Me({},f.state,{scroll:Bs()}),"")}function d(){for(const f of s)f();s=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",i)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",i),{pauseListeners:r,listen:o,destroy:d}}function vi(e,c,n,t=!1,a=!1){return{back:e,current:c,forward:n,replaced:t,position:window.history.length,scroll:a?Bs():null}}function ov(e){const{history:c,location:n}=window,t={value:E1(e,n)},a={value:c.state};a.value||s(t.value,{back:null,current:t.value,forward:null,position:c.length-1,replaced:!0,scroll:null},!0);function s(r,o,i){const d=e.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+r:rv()+e+r;try{c[i?"replaceState":"pushState"](o,"",f),a.value=o}catch(v){console.error(v),n[i?"replace":"assign"](f)}}function u(r,o){const i=Me({},c.state,vi(a.value.back,r,a.value.forward,!0),o,{position:a.value.position});s(r,i,!0),t.value=r}function l(r,o){const i=Me({},a.value,c.state,{forward:r,scroll:Bs()});s(i.current,i,!0);const d=Me({},vi(t.value,r,null),{position:i.position+1},o);s(r,d,!1),t.value=r}return{location:t,state:a,push:l,replace:u}}function dv(e){e=cv(e);const c=ov(e),n=iv(e,c.state,c.location,c.replace);function t(s,u=!0){u||n.pauseListeners(),history.go(s)}const a=Me({location:"",base:e,go:t,createHref:tv.bind(null,e)},c,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>c.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>c.state.value}),a}function fv(e){return typeof e=="string"||e&&typeof e=="object"}function P1(e){return typeof e=="string"||typeof e=="symbol"}const Tn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},T1=Symbol("");var yi;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(yi||(yi={}));function Ot(e,c){return Me(new Error,{type:e,[T1]:!0},c)}function vn(e,c){return e instanceof Error&&T1 in e&&(c==null||!!(e.type&c))}const bi="[^/]+?",mv={sensitive:!1,strict:!1,start:!0,end:!0},vv=/[.+*?^${}()[\]/\\]/g;function yv(e,c){const n=Me({},mv,c),t=[];let a=n.start?"^":"";const s=[];for(const o of e){const i=o.length?[]:[90];n.strict&&!o.length&&(a+="/");for(let d=0;d<o.length;d++){const f=o[d];let v=40+(n.sensitive?.25:0);if(f.type===0)d||(a+="/"),a+=f.value.replace(vv,"\\$&"),v+=40;else if(f.type===1){const{value:y,repeatable:b,optional:k,regexp:g}=f;s.push({name:y,repeatable:b,optional:k});const p=g||bi;if(p!==bi){v+=10;try{new RegExp(`(${p})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${y}" (${p}): `+P.message)}}let j=b?`((?:${p})(?:/(?:${p}))*)`:`(${p})`;d||(j=k&&o.length<2?`(?:/${j})`:"/"+j),k&&(j+="?"),a+=j,v+=20,k&&(v+=-8),b&&(v+=-20),p===".*"&&(v+=-50)}i.push(v)}t.push(i)}if(n.strict&&n.end){const o=t.length-1;t[o][t[o].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const u=new RegExp(a,n.sensitive?"":"i");function l(o){const i=o.match(u),d={};if(!i)return null;for(let f=1;f<i.length;f++){const v=i[f]||"",y=s[f-1];d[y.name]=v&&y.repeatable?v.split("/"):v}return d}function r(o){let i="",d=!1;for(const f of e){(!d||!i.endsWith("/"))&&(i+="/"),d=!1;for(const v of f)if(v.type===0)i+=v.value;else if(v.type===1){const{value:y,repeatable:b,optional:k}=v,g=y in o?o[y]:"";if(Yc(g)&&!b)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const p=Yc(g)?g.join("/"):g;if(!p)if(k)f.length<2&&(i.endsWith("/")?i=i.slice(0,-1):d=!0);else throw new Error(`Missing required param "${y}"`);i+=p}}return i||"/"}return{re:u,score:t,keys:s,parse:l,stringify:r}}function bv(e,c){let n=0;for(;n<e.length&&n<c.length;){const t=c[n]-e[n];if(t)return t;n++}return e.length<c.length?e.length===1&&e[0]===40+40?-1:1:e.length>c.length?c.length===1&&c[0]===40+40?1:-1:0}function hv(e,c){let n=0;const t=e.score,a=c.score;for(;n<t.length&&n<a.length;){const s=bv(t[n],a[n]);if(s)return s;n++}if(Math.abs(a.length-t.length)===1){if(hi(t))return 1;if(hi(a))return-1}return a.length-t.length}function hi(e){const c=e[e.length-1];return e.length>0&&c[c.length-1]<0}const gv={type:0,value:""},jv=/[a-zA-Z0-9_]/;function qv(e){if(!e)return[[]];if(e==="/")return[[gv]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function c(v){throw new Error(`ERR (${n})/"${o}": ${v}`)}let n=0,t=n;const a=[];let s;function u(){s&&a.push(s),s=[]}let l=0,r,o="",i="";function d(){o&&(n===0?s.push({type:0,value:o}):n===1||n===2||n===3?(s.length>1&&(r==="*"||r==="+")&&c(`A repeatable param (${o}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:o,regexp:i,repeatable:r==="*"||r==="+",optional:r==="*"||r==="?"})):c("Invalid state to consume buffer"),o="")}function f(){o+=r}for(;l<e.length;){if(r=e[l++],r==="\\"&&n!==2){t=n,n=4;continue}switch(n){case 0:r==="/"?(o&&d(),u()):r===":"?(d(),n=1):f();break;case 4:f(),n=t;break;case 1:r==="("?n=2:jv.test(r)?f():(d(),n=0,r!=="*"&&r!=="?"&&r!=="+"&&l--);break;case 2:r===")"?i[i.length-1]=="\\"?i=i.slice(0,-1)+r:n=3:i+=r;break;case 3:d(),n=0,r!=="*"&&r!=="?"&&r!=="+"&&l--,i="";break;default:c("Unknown state");break}}return n===2&&c(`Unfinished custom RegExp for param "${o}"`),d(),u(),a}function kv(e,c,n){const t=yv(qv(e.path),n),a=Me(t,{record:e,parent:c,children:[],alias:[]});return c&&!a.record.aliasOf==!c.record.aliasOf&&c.children.push(a),a}function pv(e,c){const n=[],t=new Map;c=qi({strict:!1,end:!0,sensitive:!1},c);function a(i){return t.get(i)}function s(i,d,f){const v=!f,y=Sv(i);y.aliasOf=f&&f.record;const b=qi(c,i),k=[y];if("alias"in i){const j=typeof i.alias=="string"?[i.alias]:i.alias;for(const P of j)k.push(Me({},y,{components:f?f.record.components:y.components,path:P,aliasOf:f?f.record:y}))}let g,p;for(const j of k){const{path:P}=j;if(d&&P[0]!=="/"){const w=d.record.path,I=w[w.length-1]==="/"?"":"/";j.path=d.record.path+(P&&I+P)}if(g=kv(j,d,b),f?f.alias.push(g):(p=p||g,p!==g&&p.alias.push(g),v&&i.name&&!ji(g)&&u(i.name)),y.children){const w=y.children;for(let I=0;I<w.length;I++)s(w[I],g,f&&f.children[I])}f=f||g,(g.record.components&&Object.keys(g.record.components).length||g.record.name||g.record.redirect)&&r(g)}return p?()=>{u(p)}:ya}function u(i){if(P1(i)){const d=t.get(i);d&&(t.delete(i),n.splice(n.indexOf(d),1),d.children.forEach(u),d.alias.forEach(u))}else{const d=n.indexOf(i);d>-1&&(n.splice(d,1),i.record.name&&t.delete(i.record.name),i.children.forEach(u),i.alias.forEach(u))}}function l(){return n}function r(i){let d=0;for(;d<n.length&&hv(i,n[d])>=0&&(i.record.path!==n[d].record.path||!$1(i,n[d]));)d++;n.splice(d,0,i),i.record.name&&!ji(i)&&t.set(i.record.name,i)}function o(i,d){let f,v={},y,b;if("name"in i&&i.name){if(f=t.get(i.name),!f)throw Ot(1,{location:i});b=f.record.name,v=Me(gi(d.params,f.keys.filter(p=>!p.optional).map(p=>p.name)),i.params&&gi(i.params,f.keys.map(p=>p.name))),y=f.stringify(v)}else if("path"in i)y=i.path,f=n.find(p=>p.re.test(y)),f&&(v=f.parse(y),b=f.record.name);else{if(f=d.name?t.get(d.name):n.find(p=>p.re.test(d.path)),!f)throw Ot(1,{location:i,currentLocation:d});b=f.record.name,v=Me({},d.params,i.params),y=f.stringify(v)}const k=[];let g=f;for(;g;)k.unshift(g.record),g=g.parent;return{name:b,path:y,params:v,matched:k,meta:Cv(k)}}return e.forEach(i=>s(i)),{addRoute:s,resolve:o,removeRoute:u,getRoutes:l,getRecordMatcher:a}}function gi(e,c){const n={};for(const t of c)t in e&&(n[t]=e[t]);return n}function Sv(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:_v(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function _v(e){const c={},n=e.props||!1;if("component"in e)c.default=n;else for(const t in e.components)c[t]=typeof n=="boolean"?n:n[t];return c}function ji(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Cv(e){return e.reduce((c,n)=>Me(c,n.meta),{})}function qi(e,c){const n={};for(const t in e)n[t]=t in c?c[t]:e[t];return n}function $1(e,c){return c.children.some(n=>n===e||$1(e,n))}const M1=/#/g,wv=/&/g,xv=/\//g,Vv=/=/g,Iv=/\?/g,B1=/\+/g,Av=/%5B/g,Ev=/%5D/g,R1=/%5E/g,Pv=/%60/g,O1=/%7B/g,Tv=/%7C/g,L1=/%7D/g,$v=/%20/g;function Hl(e){return encodeURI(""+e).replace(Tv,"|").replace(Av,"[").replace(Ev,"]")}function Mv(e){return Hl(e).replace(O1,"{").replace(L1,"}").replace(R1,"^")}function $u(e){return Hl(e).replace(B1,"%2B").replace($v,"+").replace(M1,"%23").replace(wv,"%26").replace(Pv,"`").replace(O1,"{").replace(L1,"}").replace(R1,"^")}function Bv(e){return $u(e).replace(Vv,"%3D")}function Rv(e){return Hl(e).replace(M1,"%23").replace(Iv,"%3F")}function Ov(e){return e==null?"":Rv(e).replace(xv,"%2F")}function ys(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Lv(e){const c={};if(e===""||e==="?")return c;const t=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<t.length;++a){const s=t[a].replace(B1," "),u=s.indexOf("="),l=ys(u<0?s:s.slice(0,u)),r=u<0?null:ys(s.slice(u+1));if(l in c){let o=c[l];Yc(o)||(o=c[l]=[o]),o.push(r)}else c[l]=r}return c}function ki(e){let c="";for(let n in e){const t=e[n];if(n=Bv(n),t==null){t!==void 0&&(c+=(c.length?"&":"")+n);continue}(Yc(t)?t.map(s=>s&&$u(s)):[t&&$u(t)]).forEach(s=>{s!==void 0&&(c+=(c.length?"&":"")+n,s!=null&&(c+="="+s))})}return c}function Fv(e){const c={};for(const n in e){const t=e[n];t!==void 0&&(c[n]=Yc(t)?t.map(a=>a==null?null:""+a):t==null?t:""+t)}return c}const Nv=Symbol(""),pi=Symbol(""),Ul=Symbol(""),F1=Symbol(""),Mu=Symbol("");function la(){let e=[];function c(t){return e.push(t),()=>{const a=e.indexOf(t);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:c,list:()=>e,reset:n}}function Bn(e,c,n,t,a){const s=t&&(t.enterCallbacks[a]=t.enterCallbacks[a]||[]);return()=>new Promise((u,l)=>{const r=d=>{d===!1?l(Ot(4,{from:n,to:c})):d instanceof Error?l(d):fv(d)?l(Ot(2,{from:c,to:d})):(s&&t.enterCallbacks[a]===s&&typeof d=="function"&&s.push(d),u())},o=e.call(t&&t.instances[a],c,n,r);let i=Promise.resolve(o);e.length<3&&(i=i.then(r)),i.catch(d=>l(d))})}function ru(e,c,n,t){const a=[];for(const s of e)for(const u in s.components){let l=s.components[u];if(!(c!=="beforeRouteEnter"&&!s.instances[u]))if(Dv(l)){const o=(l.__vccOpts||l)[c];o&&a.push(Bn(o,n,t,s,u))}else{let r=l();a.push(()=>r.then(o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${u}" at "${s.path}"`));const i=Y2(o)?o.default:o;s.components[u]=i;const f=(i.__vccOpts||i)[c];return f&&Bn(f,n,t,s,u)()}))}}return a}function Dv(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Si(e){const c=Ee(Ul),n=Ee(F1),t=h(()=>c.resolve(dc(e.to))),a=h(()=>{const{matched:r}=t.value,{length:o}=r,i=r[o-1],d=n.matched;if(!i||!d.length)return-1;const f=d.findIndex(Rt.bind(null,i));if(f>-1)return f;const v=_i(r[o-2]);return o>1&&_i(i)===v&&d[d.length-1].path!==v?d.findIndex(Rt.bind(null,r[o-2])):f}),s=h(()=>a.value>-1&&Wv(n.params,t.value.params)),u=h(()=>a.value>-1&&a.value===n.matched.length-1&&A1(n.params,t.value.params));function l(r={}){return Uv(r)?c[dc(e.replace)?"replace":"push"](dc(e.to)).catch(ya):Promise.resolve()}return{route:t,href:h(()=>t.value.href),isActive:s,isExactActive:u,navigate:l}}const zv=Bl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Si,setup(e,{slots:c}){const n=uc(Si(e)),{options:t}=Ee(Ul),a=h(()=>({[Ci(e.activeClass,t.linkActiveClass,"router-link-active")]:n.isActive,[Ci(e.exactActiveClass,t.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=c.default&&c.default(n);return e.custom?s:dn("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},s)}}}),Hv=zv;function Uv(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const c=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(c))return}return e.preventDefault&&e.preventDefault(),!0}}function Wv(e,c){for(const n in c){const t=c[n],a=e[n];if(typeof t=="string"){if(t!==a)return!1}else if(!Yc(a)||a.length!==t.length||t.some((s,u)=>s!==a[u]))return!1}return!0}function _i(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ci=(e,c,n)=>e??c??n,Kv=Bl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:c,slots:n}){const t=Ee(Mu),a=h(()=>e.route||t.value),s=Ee(pi,0),u=h(()=>{let o=dc(s);const{matched:i}=a.value;let d;for(;(d=i[o])&&!d.components;)o++;return o}),l=h(()=>a.value.matched[u.value]);Ge(pi,h(()=>u.value+1)),Ge(Nv,l),Ge(Mu,a);const r=$();return ae(()=>[r.value,l.value,e.name],([o,i,d],[f,v,y])=>{i&&(i.instances[d]=o,v&&v!==i&&o&&o===f&&(i.leaveGuards.size||(i.leaveGuards=v.leaveGuards),i.updateGuards.size||(i.updateGuards=v.updateGuards))),o&&i&&(!v||!Rt(i,v)||!f)&&(i.enterCallbacks[d]||[]).forEach(b=>b(o))},{flush:"post"}),()=>{const o=a.value,i=e.name,d=l.value,f=d&&d.components[i];if(!f)return wi(n.default,{Component:f,route:o});const v=d.props[i],y=v?v===!0?o.params:typeof v=="function"?v(o):v:null,k=dn(f,Me({},y,c,{onVnodeUnmounted:g=>{g.component.isUnmounted&&(d.instances[i]=null)},ref:r}));return wi(n.default,{Component:k,route:o})||k}}});function wi(e,c){if(!e)return null;const n=e(c);return n.length===1?n[0]:n}const Yv=Kv;function Gv(e){const c=pv(e.routes,e),n=e.parseQuery||Lv,t=e.stringifyQuery||ki,a=e.history,s=la(),u=la(),l=la(),r=Al(Tn);let o=Tn;Vt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const i=uu.bind(null,B=>""+B),d=uu.bind(null,Ov),f=uu.bind(null,ys);function v(B,T){let O,re;return P1(B)?(O=c.getRecordMatcher(B),re=T):re=B,c.addRoute(re,O)}function y(B){const T=c.getRecordMatcher(B);T&&c.removeRoute(T)}function b(){return c.getRoutes().map(B=>B.record)}function k(B){return!!c.getRecordMatcher(B)}function g(B,T){if(T=Me({},T||r.value),typeof B=="string"){const S=lu(n,B,T.path),E=c.resolve({path:S.path},T),L=a.createHref(S.fullPath);return Me(S,E,{params:f(E.params),hash:ys(S.hash),redirectedFrom:void 0,href:L})}let O;if("path"in B)O=Me({},B,{path:lu(n,B.path,T.path).path});else{const S=Me({},B.params);for(const E in S)S[E]==null&&delete S[E];O=Me({},B,{params:d(B.params)}),T.params=d(T.params)}const re=c.resolve(O,T),ie=B.hash||"";re.params=i(f(re.params));const Ve=Q2(t,Me({},B,{hash:Mv(ie),path:re.path})),ve=a.createHref(Ve);return Me({fullPath:Ve,hash:ie,query:t===ki?Fv(B.query):B.query||{}},re,{redirectedFrom:void 0,href:ve})}function p(B){return typeof B=="string"?lu(n,B,r.value.path):Me({},B)}function j(B,T){if(o!==B)return Ot(8,{from:T,to:B})}function P(B){return A(B)}function w(B){return P(Me(p(B),{replace:!0}))}function I(B){const T=B.matched[B.matched.length-1];if(T&&T.redirect){const{redirect:O}=T;let re=typeof O=="function"?O(B):O;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=p(re):{path:re},re.params={}),Me({query:B.query,hash:B.hash,params:"path"in re?{}:B.params},re)}}function A(B,T){const O=o=g(B),re=r.value,ie=B.state,Ve=B.force,ve=B.replace===!0,S=I(O);if(S)return A(Me(p(S),{state:typeof S=="object"?Me({},ie,S.state):ie,force:Ve,replace:ve}),T||O);const E=O;E.redirectedFrom=T;let L;return!Ve&&Z2(t,re,O)&&(L=Ot(16,{to:E,from:re}),R(re,re,!0,!1)),(L?Promise.resolve(L):_(E,re)).catch(U=>vn(U)?vn(U,2)?U:J(U):H(U,E,re)).then(U=>{if(U){if(vn(U,2))return A(Me({replace:ve},p(U.to),{state:typeof U.to=="object"?Me({},ie,U.to.state):ie,force:Ve}),T||E)}else U=V(E,re,!0,ve,ie);return x(E,re,U),U})}function q(B,T){const O=j(B,T);return O?Promise.reject(O):Promise.resolve()}function _(B,T){let O;const[re,ie,Ve]=Xv(B,T);O=ru(re.reverse(),"beforeRouteLeave",B,T);for(const S of re)S.leaveGuards.forEach(E=>{O.push(Bn(E,B,T))});const ve=q.bind(null,B,T);return O.push(ve),pt(O).then(()=>{O=[];for(const S of s.list())O.push(Bn(S,B,T));return O.push(ve),pt(O)}).then(()=>{O=ru(ie,"beforeRouteUpdate",B,T);for(const S of ie)S.updateGuards.forEach(E=>{O.push(Bn(E,B,T))});return O.push(ve),pt(O)}).then(()=>{O=[];for(const S of B.matched)if(S.beforeEnter&&!T.matched.includes(S))if(Yc(S.beforeEnter))for(const E of S.beforeEnter)O.push(Bn(E,B,T));else O.push(Bn(S.beforeEnter,B,T));return O.push(ve),pt(O)}).then(()=>(B.matched.forEach(S=>S.enterCallbacks={}),O=ru(Ve,"beforeRouteEnter",B,T),O.push(ve),pt(O))).then(()=>{O=[];for(const S of u.list())O.push(Bn(S,B,T));return O.push(ve),pt(O)}).catch(S=>vn(S,8)?S:Promise.reject(S))}function x(B,T,O){for(const re of l.list())re(B,T,O)}function V(B,T,O,re,ie){const Ve=j(B,T);if(Ve)return Ve;const ve=T===Tn,S=Vt?history.state:{};O&&(re||ve?a.replace(B.fullPath,Me({scroll:ve&&S&&S.scroll},ie)):a.push(B.fullPath,ie)),r.value=B,R(B,T,O,ve),J()}let C;function M(){C||(C=a.listen((B,T,O)=>{if(!oe.listening)return;const re=g(B),ie=I(re);if(ie){A(Me(ie,{replace:!0}),re).catch(ya);return}o=re;const Ve=r.value;Vt&&uv(mi(Ve.fullPath,O.delta),Bs()),_(re,Ve).catch(ve=>vn(ve,12)?ve:vn(ve,2)?(A(ve.to,re).then(S=>{vn(S,20)&&!O.delta&&O.type===Va.pop&&a.go(-1,!1)}).catch(ya),Promise.reject()):(O.delta&&a.go(-O.delta,!1),H(ve,re,Ve))).then(ve=>{ve=ve||V(re,Ve,!1),ve&&(O.delta&&!vn(ve,8)?a.go(-O.delta,!1):O.type===Va.pop&&vn(ve,20)&&a.go(-1,!1)),x(re,Ve,ve)}).catch(ya)}))}let N=la(),Q=la(),F;function H(B,T,O){J(B);const re=Q.list();return re.length?re.forEach(ie=>ie(B,T,O)):console.error(B),Promise.reject(B)}function D(){return F&&r.value!==Tn?Promise.resolve():new Promise((B,T)=>{N.add([B,T])})}function J(B){return F||(F=!B,M(),N.list().forEach(([T,O])=>B?O(B):T()),N.reset()),B}function R(B,T,O,re){const{scrollBehavior:ie}=e;if(!Vt||!ie)return Promise.resolve();const Ve=!O&&lv(mi(B.fullPath,0))||(re||!O)&&history.state&&history.state.scroll||null;return Fe().then(()=>ie(B,T,Ve)).then(ve=>ve&&sv(ve)).catch(ve=>H(ve,B,T))}const K=B=>a.go(B);let z;const fe=new Set,oe={currentRoute:r,listening:!0,addRoute:v,removeRoute:y,hasRoute:k,getRoutes:b,resolve:g,options:e,push:P,replace:w,go:K,back:()=>K(-1),forward:()=>K(1),beforeEach:s.add,beforeResolve:u.add,afterEach:l.add,onError:Q.add,isReady:D,install(B){const T=this;B.component("RouterLink",Hv),B.component("RouterView",Yv),B.config.globalProperties.$router=T,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>dc(r)}),Vt&&!z&&r.value===Tn&&(z=!0,P(a.location).catch(ie=>{}));const O={};for(const ie in Tn)O[ie]=h(()=>r.value[ie]);B.provide(Ul,T),B.provide(F1,uc(O)),B.provide(Mu,r);const re=B.unmount;fe.add(B),B.unmount=function(){fe.delete(B),fe.size<1&&(o=Tn,C&&C(),C=null,r.value=Tn,z=!1,F=!1),re()}}};return oe}function pt(e){return e.reduce((c,n)=>c.then(()=>n()),Promise.resolve())}function Xv(e,c){const n=[],t=[],a=[],s=Math.max(c.matched.length,e.matched.length);for(let u=0;u<s;u++){const l=c.matched[u];l&&(e.matched.find(o=>Rt(o,l))?t.push(l):n.push(l));const r=e.matched[u];r&&(c.matched.find(o=>Rt(o,r))||a.push(r))}return[n,t,a]}const Xc=(e,c)=>{const n=e.__vccOpts||e;for(const[t,a]of c)n[t]=a;return n},Qv={};function Zv(e,c,n,t,a,s){const u=xe("RouterView");return Ae(),kc(u)}const Jv=Xc(Qv,[["render",Zv]]),ey={methods:{tantou(){this.$router.push({name:"tantouTop"})},random(){this.$router.push({name:"random"})},search(){this.$router.push({name:"search"})}}},cy=He("h1",null,"司法試験過去問題集",-1),ny=He("br",null,null,-1);function ty(e,c,n,t,a,s){const u=xe("v-btn");return Ae(),Qe("main",null,[cy,ny,m(u,{onClick:s.tantou},{default:ge(()=>[Oe("短答・科目年度別")]),_:1},8,["onClick"]),Oe("　"),m(u,{onClick:s.random},{default:ge(()=>[Oe("短答・ランダム")]),_:1},8,["onClick"]),Oe("　"),m(u,{onClick:s.search},{default:ge(()=>[Oe("検索")]),_:1},8,["onClick"])])}const ay=Xc(ey,[["render",ty]]),ha=[{year:"2023",num:"1",subject:"ken",q:`憲法第１３条に関する次のアからウまでの各記述について、正しいものには○、誤っているものには×を付した場合の組合せを、後記１から８までの中から選びなさい。
ア．最高裁判所は、本人の意思に反し、かつ令状なしでなされた警察官による写真撮影行為の違法性が争われた事件において、憲法第１３条は、国民の私生活上の自由が警察権等の国家権力の行使に対しても保護されるべきことを規定したものであるとした。
イ．最高裁判所は、自己消費を目的とする酒類製造を処罰することの合理性が争われた事件において、自己消費目的の酒類製造の自由は人格的生存に不可欠であるとまでは断じ難く、制約しても憲法第１３条に違反するものでないとした。
ウ．最高裁判所は、市営地下鉄内における商業宣伝放送の違法性が争われた事件において、聞きたくない音を聞かない自由は、人格的利益に含まれると解することもできないものではないが、精神的自由の一つに含まれるため、憲法第１３条によって保障されるとの主張は適当でないとした。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"4"},{year:"2023",num:"2",subject:"ken",q:`憲法第１９条の保障する思想・良心の自由に関する次のアからウまでの各記述について、最高裁判所の判例の趣旨に照らして、それぞれ正しい場合には１を、誤っている場合には２を選びなさい。
ア．企業者が特定の思想、信条を有する者を、それを理由に雇い入れることを拒んでも、当然に違法とすることはできず、企業者が労働者の採否決定に当たり、その者の思想、信条を調査し、そのためにその者から関連事項について申告を求めることも違法行為とすべき理由はないが、いったん労働者を雇い入れ、その者に雇用関係上の一定の地位を与えた後では、特定の信条を有することを理由として解雇することは違法である。
イ．司法書士の業務の円滑な遂行による公的機能の回復に資するため、大震災により被災した他県の司法書士会に支援金を寄付することは、司法書士会の権利能力の範囲内にあるというべきであり、このような支援金寄付のため、司法書士会が会員から負担金を徴収することは、司法書士会が強制加入団体であることを考慮しても、会員の政治的又は宗教的立場や思想信条の自由を害するものではない。
ウ．企業内においても労働者の思想、信条等の精神的自由は十分尊重されるべきであることから、企業が労働者に対し、その者が特定の政党に所属するかどうかに関する書面の提出を求めることは、それがたとえ企業の組織秩序の維持を目的とする調査の一環であり、強要にわたるような態様のものでなかったとしても、社会的に許容し得る限界を超えて労働者の精神的自由を侵害した違法行為である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"112"},{year:"2023",num:"3",subject:"ken",q:`表現の自由に関する次のアからウまでの各記述について、最高裁判所の判例の趣旨に照らして、それぞれ正しい場合には１を、誤っている場合には２を選びなさい。
ア．情報摂取のためになされる筆記行為の自由は、憲法第２１条第１項の精神に照らして尊重されるべきであって、傍聴人が法廷でメモを取る自由は、そこで見聞する裁判を認識、記憶するためになされる限り、尊重に値し、故なく妨げられてはならないから、その制限又は禁止に対する審査に当たっては、表現の自由に制約を加える場合に一般的に必要とされる厳格な基準が要求される。
イ．公務員又は公職選挙の候補者に対する評価、批判等の表現行為に関する事前差止めは、原則として許されず、例外的に、その表現内容が真実でなく、又はそれが専ら公益を図る目的のものではないことが明白であって、かつ、被害者が重大にして著しく回復困難な損害を被るおそれがあるときにのみ許されるが、その場合には迅速を旨とする仮処分手続による以上、原則として、口頭弁論や債務者審尋を経る必要はない。
ウ．少年法第６１条が禁止する推知報道に当たるか否かは、少年と面識のある特定多数の者あるいは少年が生活基盤としてきた地域社会の不特定多数の者ではなく、不特定多数の一般人が、当該事件報道記事等により、少年を当該事件の本人であると推知することができるかを基準にして判断すべきである。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"221"},{year:"2023",num:"4",subject:"ken",q:`集会の自由に関する次のアからウまでの各記述について、最高裁判所の判例の趣旨に照らして、正しいものには○、誤っているものには×を付した場合の組合せを、後記１から８までの中から選びなさい。
ア．集団行進が行われることによって一般交通の用に供せられるべき道路の機能を著しく害するものと認められ、また、条件を付与することによってもかかる事態の発生を阻止することができないと予測される場合には、当該集団行進について不許可処分がなされたとしても憲法第２１条に反しない。
イ．公共の秩序を保持し、又は公共の福祉が著しく侵されることを防止するため、特定の場所又は方法につき、合理的かつ明確な基準の下に、集団行進についてあらかじめ許可を受けることを必要とするとの規定を設けたとしても憲法第２１条に反しない。
ウ．皇居外苑などの国民公園は、国が直接公共の用に供した財産であるとしても、集会のために設置されたものではないため、公園を集会に使用するための許可の申請について、公園の管理権者はその許否を自由に決することができ、不許可処分を行っても憲法第２１条に反しない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2023",num:"5",subject:"ken",q:`学問の自由に関する次のアからウまでの各記述について、最高裁判所の判例の趣旨に照らして、正しいものには○、誤っているものには×を付した場合の組合せを、後記１から８までの中から選びなさい。
ア．普通教育の場において使用される教科書は、研究結果の発表を直接の目的とするものではないものの、研究結果の発表という面があることから、記載内容がいまだ学界において支持を得ていないときに検定基準を満たさないとする教科書検定処分は憲法第２３条に違反する。
イ．大学における学問の自由を保障するために、伝統的に大学の自治が認められており、この自治は、特に大学の教授その他の研究者の人事に関して認められるとともに、大学の施設と学生の管理についてもある程度で認められる。
ウ．憲法第２３条の学問の自由は、学問研究の自由とその研究結果の発表の自由とを含むものであるが、教育ないし教授の自由は、学問の自由と密接な関係を有するけれども、学問の自由に含まれるものではない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"6"},{year:"2023",num:"6",subject:"ken",q:`財産権の保障に関する次のアからウまでの各記述について、ｂの見解がａの見解の批判となっている場合には１を、そうでない場合には２を選びなさい。
ア．ａ．憲法第２９条第１項と同条第２項を整合的に理解すれば、同条第１項は、法律で定める財産権の不可侵を規定したものということになる。
ｂ．同条第１項が、法律で定める財産権を保障するにすぎないというのでは、憲法規範としての意義が著しく減殺されてしまう。
イ．ａ．憲法第２９条第１項が保障する私有財産制度とは、生産手段の私有を内容とする資本主義体制の保障を意味する。
ｂ．もし単に個人の生存に不可欠の物的手段のみを保障する趣旨ならば、社会主義国家の憲法と同様にその点を明示したはずである。また、憲法第２２条第１項は、営業の自由を保障している。
ウ．ａ．憲法第２９条第１項が保障する財産権は、人間が、人間としての価値ある生活を営む上に必要な物的手段の享有を意味する。
ｂ．基幹産業の国有化は、同条第３項の正当な補償を条件として、同条第２項の「公共の福祉」を実現する立法府の裁量に委ねられている。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"122"},{year:"2023",num:"7",subject:"ken",q:`生存権に関する次のアからウまでの各記述について、正しいものには○、誤っているものには×を付した場合の組合せを、後記１から８までの中から選びなさい。
ア．堀木訴訟判決（最高裁判所昭和５７年７月７日大法廷判決、民集３６巻７号１２３５頁）は、憲法第２５条の規定の要請にこたえて制定された法令において、憲法第１４条違反の問題を生じる余地はあるが、併給調整を行うかどうかは立法府の裁量の範囲内に属し、併給調整条項の適用により、児童扶養手当の受給に関して差別を生ずることになるとしても、身体障害者、母子に対する諸施策及び生活保護制度の存在などに照らして総合的に判断すると、かかる差別はなんら合理的理由のない不当なものであるとはいえないとした。
イ．朝日訴訟判決（最高裁判所昭和４２年５月２４日大法廷判決、民集２１巻５号１０４３頁）は、憲法第２５条第１項は、直接個々の国民に対して具体的権利を賦与したものではないが、厚生大臣が、現実の生活条件を無視して著しく低い基準を設定する等憲法及び生活保護法の趣旨・目的に反し、法律によって与えられた裁量権の限界をこえた場合または裁量権を濫用した場合、違法な行為として司法審査の対象となるとした。
ウ．総評サラリーマン税金訴訟判決（最高裁判所平成元年２月７日第三小法廷判決、集民１５６号８７頁）は、国家は、国民各自が自らの手で健康で文化的な最低限度の生活を維持することを阻害してはならないのであって、これを阻害する立法は憲法第２５条に違反するとしつつ、所得税法中の給与所得に係る課税関係規定について、憲法第２５条の規定の趣旨を踏まえて具体的にどのような立法措置を講ずるかは、立法府の広い裁量に委ねられるとした。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2023",num:"8",subject:"ken",q:`労働基本権に関する次のアからウまでの各記述について、最高裁判所の判例の趣旨に照らして、それぞれ正しい場合には１を、誤っている場合には２を選びなさい。
ア．ユニオン・ショップ協定とは、労働協約において、使用者が従業員のうち労働組合に加入しない者及び労働組合の組合員でなくなった者を解雇する義務を負う定めを置くことをいうが、ユニオン・ショップ協定において、使用者が同協定を締結した組合以外の他の労働組合に加入している者を解雇する義務を負うと定めることは、憲法第２８条が保障する労働者の組合選択の自由及び他の労働組合の団結権を侵害するため許されない。
イ．労働組合は、憲法第２８条が団結権を保障する効果として、組合員に対する統制権を有するから、労働組合が、地方議会議員の選挙に当たり、統一候補を決定して組合を挙げて選挙運動を推進している場合に、組合の方針に反して立候補しようとする組合員に対し、立候補の取りやめを要求し、これに従わないことを統制違反として処分することは許される。
ウ．憲法第２８条の労働基本権の保障は公務員に対しても及ぶが、国家公務員の従事する職務には公共性がある一方、法律によりその主要な勤務条件が定められ、身分が保障されているほか、適切な代償措置が講じられていることなどからすれば、法律により国家公務員の争議行為を禁止することは、勤労者をも含めた国民全体の共同利益の見地からするとやむを得ない制約というべきであって、憲法第２８条に違反しない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"121"},{year:"2023",num:"9",subject:"ken",q:`人身の自由に関する次のアからウまでの各記述について、最高裁判所の判例の趣旨に照らして、それぞれ正しい場合には１を、誤っている場合には２を選びなさい。
ア．憲法第３４条前段の弁護人依頼権の規定は、単に被疑者が弁護人を選任することを官憲が妨害してはならないというにとどまるものではなく、弁護人から援助を受ける機会を実質的に保障しているものと解すべきであり、刑事訴訟法第３９条第１項の接見交通権は、憲法第３４条の趣旨にのっとり設けられたものである。
イ．憲法第３５条の下で令状なく住居に侵入し捜索・押収ができるのは、裁判官が発した令状による逮捕の場合、現行犯逮捕の場合及び緊急逮捕の場合に限られ、現行犯として逮捕する要件は備わっていたが、現実には逮捕しない場合は含まれない。
ウ．交通事故を起こした運転者は、警察官に対し、交通事故発生の日時、場所、死傷者の数などを報告する義務を負うが、道路における危険とこれによる被害の増大を防止し、交通の安全を図るという目的のためには、刑事責任を負うことにつながるような自己に不利益な供述をさせることもやむを得ないから、この報告義務を定めた法律は、憲法第３８条第１項に違反しない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"122"},{year:"2023",num:"10",subject:"ken",q:`次の対話は、憲法第２４条に関する教授と学生の対話である。教授の各質問に対する次のアからウまでの学生の各回答について、正しいものには○、誤っているものには×を付した場合の組合せを、後記１から８までの中から選びなさい。
教授．再婚禁止期間違憲判決（最高裁判所平成２７年１２月１６日大法廷判決、民集６９巻８号２４２７頁）は、婚姻の自由の憲法上の位置付けについてどのように述べていましたか。
ア．この判決は、憲法第２４条第１項は、婚姻をするかどうか、いつ誰と婚姻をするかについては、当事者間の自由かつ平等な意思決定に委ねられるべきであるという趣旨を明らかにしたものと解され、このような婚姻の自由について、憲法第２４条第１項の規定の趣旨に照らし、十分尊重に値するものと解することができる、と述べています。
教授．再婚禁止期間違憲判決は、民法第７３３条第１項の規定のうち１００日を超えて再婚禁止期間を設ける部分は、憲法第１４条第１項、第２４条第２項に違反するに至っていたと判断しましたが、同判決は、民法第７３３条第１項の立法目的やＤＮＡ検査により親子関係の有無が確認できることについて、どのように述べていましたか。
イ．同判決は、民法第７３３条第１項の立法目的は、女性の再婚後に生まれた子につき父性の推定の重複を回避し、もって父子関係をめぐる紛争の発生を未然に防ぐことにあったとし、現代社会においては、ＤＮＡ検査技術が進歩し、極めて高い確率で生物学上の親子関係の有無が確認できるようになったことから、その立法目的は合理性を欠くに至ったと述べています。
教授．夫婦同氏を定める民法第７５０条が憲法第２４条に違反しないという見解は、婚姻前の氏を通称として使用することが近時社会的に広まっていることを、論拠とすることはできるでしょうか。
ウ．婚姻により氏を改める者は、氏を改めることにより、いわゆるアイデンティティの喪失感を抱くなど、様々な不利益を受けることがありますが、通称使用が近時社会的に広まっていることは、今述べた不利益を一定程度緩和することにつながります。したがって、教授がおっしゃった見解は、通称使用が拡大していることを論拠とすることができます。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"3"},{year:"2023",num:"11",subject:"ken",q:`主権に関する次のアからウまでの各記述について、ｂの見解がａの見解の根拠となっている場合には１を、そうでない場合には２を選びなさい。
ア．ａ．憲法は国会を国権の最高機関としているが、ここでの国権とは統治権を意味しており、国会は立法機関であるだけでなく、この意味での国権の発動全般を統括すべき地位にある。
ｂ．憲法が定める権力分立制の下では、立法権の行使などを通じ国会が中心的な役割を果たす一方、内閣には衆議院の解散を決定する権限が、また裁判所には法律の憲法適合性を判断する権限が認められるなど、相互の抑制・均衡が図られている。
イ．ａ．統治権のうち行政に関する部分は、憲法上国と地方とに配分され、内閣が行使する行政権と、地方公共団体が行政を執行する権能から構成される。
ｂ．近代主権国家では、統治権という意味での主権は不可分一体であり、地方公共団体の権能もかかる国家の統治権から伝来するものであって、国家の法律による承認ないし委任に依拠し、またその限度で認められる。
ウ．ａ．最高裁判所の裁判官の任命に関する国民の審査権は、主権者の権能の一内容である点において選挙権と同様の性質を有する。
ｂ．憲法は、主権が国民に存すると規定するとともに、最高裁判所に国家行為の憲法適合性を判断する権限を有する終審裁判所という重要な地位・権限を付与している。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"221"},{year:"2023",num:"12",subject:"ken",q:`選挙制度に関する次のアからウまでの各記述について、最高裁判所の判例の趣旨に照らして、それぞれ正しい場合には１を、誤っている場合には２を選びなさい。
ア．政党等から名簿登載者の除名届が提出されているにもかかわらず、選挙長ないし選挙会が当該除名の有効性を審査すべきものとすれば、政党等による組織内の自律的運営に属する事項について、その政党等の意思に反して行政権が介入することになる。こうしたことから、公職選挙法は、名簿届出政党等による名簿登載者の除名について、選挙長ないし選挙会の審査の対象を形式的な事項にとどめている。
イ．戸別訪問の禁止は、意見表明そのものの制約を目的とするものではなく、意見表明の手段方法のもたらす弊害を防止し、もって選挙の自由と公正を確保することを目的としている。こうしたことから、公職選挙法の戸別訪問禁止規定は、公正な選挙の実施に対する明白かつ現在の危険をもたらす戸別訪問のみを禁止する規定として限定して解釈される限りで合憲となる。
ウ．立候補の自由が選挙権の自由な行使と表裏の関係にある重要な基本的人権であることからすると、選挙制度を政党本位のものとするという国会の裁量にも限界がある。こうしたことから、立候補の自由に配慮して、公職選挙法上、衆議院議員選挙における重複立候補者が所属する政治団体については、一定数以上の国会議員を有することを要するといった限定は課されていない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"122"},{year:"2023",num:"13",subject:"ken",q:`憲法第９条に関する次のアからウまでの各記述について、正しいものには○、誤っているものには×を付した場合の組合せを、後記１から８までの中から選びなさい。
ア．憲法第９条第２項で否認されている交戦権の内容を、国家が交戦者として有する権利とする国際法上の用例に従って解するのでなく、国家として戦争を行う権利と広く解する見解に対しては、同条第１項の規定との重複が避けられないとの批判がある。
イ．判例は、憲法第９条第１項によっても我が国が主権国家として持つ固有の自衛権は何ら否定されたものでなく、同条第２項は自衛のための戦力の保持まで禁じたものではないから、我が国の平和と安全の維持を目的としたアメリカ合衆国軍隊の駐留は同条に違反しないとしている。
ウ．判例は、憲法前文に規定されている「平和のうちに生存する権利」はあらゆる基本的人権を支える基礎的な権利であるため、具体的訴訟においても、それ自体で独立して私法上の行為の効力を判断する基準になるとしている。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"4"},{year:"2023",num:"14",subject:"ken",q:`国会の立法手続に関する次のアからウまでの各記述について、正しいものには○、誤っているものには×を付した場合の組合せを、後記１から８までの中から選びなさい。
ア．内閣総理大臣その他の国務大臣は、法律案について両議院から答弁又は説明のため出席を求められたときは、出席する義務がある一方、法律案について発言するためであっても、議院から求められない限り、自己が議席を有しない議院に出席することはできない。
イ．法律案は、衆議院が可決し、参議院がこれと異なった議決をした場合、衆議院が両議院の協議会を開くことを求めなくても、衆議院で出席議員の３分の２以上の多数で再び可決したときは、法律となる。
ウ．法律には、国務大臣全員が署名し、内閣総理大臣が連署することが必要であるが、これは、法律に対する執行責任を明示するために求められるにすぎず、それ自体は法律の成立要件ではない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"6"},{year:"2023",num:"15",subject:"ken",q:`内閣に関する次のアからウまでの各記述について、それぞれ正しい場合には１を、誤っている場合には２を選びなさい。
ア．衆議院において内閣不信任決議案が可決されたときは、１０日以内に衆議院が解散されない限り、内閣は総辞職をしなければならないが、参議院における問責決議には、かかる法的効力はない。
イ．内閣総理大臣は、国会議員でなければならないから、国会議員の当選の効力に関する訴訟の結果、自己の当選が無効となったときは、憲法第７０条の「内閣総理大臣が欠けたとき」に当たり、内閣は、総辞職をしなければならない。
ウ．衆議院議員総選挙又は参議院議員通常選挙の後に初めて国会が召集されたときは、憲法の規定により、内閣は、総辞職をしなければならない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"112"},{year:"2023",num:"16",subject:"ken",q:`司法権の範囲ないし限界に関する次のアからウまでの各記述について、最高裁判所の判例の趣旨に照らして、正しいものには〇、誤っているものには×を付した場合の組合せを、後記１から８までの中から選びなさい。
ア．裁判所がその固有の権限に基づいて審判することのできる対象は、裁判所法第３条にいう「法律上の争訟」、すなわち当事者間の具体的な権利義務ないし法律関係の存否に関する紛争であって、かつ、それが法令の適用により終局的に解決することができるものに限られる。したがって、具体的な権利義務ないし法律関係に関する紛争であっても、法令の適用による終局的解決に適しないものは裁判所の司法審査の対象になり得ない。
イ．特定の者の宗教活動上の地位の存否を審理、判断するにつき、宗教団体の教義ないし信仰の内容に立ち入って審理、判断することが必要不可欠である場合には、裁判所は、その者が宗教活動上の地位にあるか否かを審理、判断することができず、その結果、宗教活動上の地位に基づく宗教法人の代表役員の地位の存否についても審理、判断することができない。この場合には、宗教法人の代表役員の地位の存否の確認を求める訴えは、裁判所法第３条にいう「法律上の争訟」に当たらない。
ウ．大学の単位の授与（認定）という行為は、学生が履修した授業科目について合格したことを確認する教育上の措置であり、卒業の要件をなすものであるから、一般市民法秩序と直接の関係を有するものであることは明らかである。それゆえ、純然たる大学内部の問題とはいえず、大学の自主的、自律的な判断のみに委ねられるべきものではなく、裁判所の司法審査の対象となる。`,c1:"１．ア〇 イ〇 ウ〇",c2:"２．ア〇 イ〇 ウ×",c3:"３．ア〇 イ× ウ〇",c4:"４．ア〇 イ× ウ×",c5:"５．ア× イ〇 ウ〇",c6:"６．ア× イ〇 ウ×",c7:"７．ア× イ× ウ〇",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2023",num:"17",subject:"ken",q:`違憲審査に関する次のアからウまでの各記述について、正しいものには○、誤っているものには×を付した場合の組合せを、後記１から８までの中から選びなさい。
ア．警察予備隊違憲訴訟判決（最高裁判所昭和２７年１０月８日大法廷判決、民集６巻９号７８３頁）は、出訴等に関する手続を法律で定めれば、最高裁判所には法令等の合憲性を抽象的・一般的に審査・決定する権限を付与することもできるという考え方を否定するものではないと見る余地もある。
イ．判例によれば、関税法の没収規定に基づき、密輸しようとした第三者の所有物について没収の言渡しを受けた被告人が、当該規定が、第三者の財産について、第三者に何らの告知、弁解、防御の機会を与えることなく所有権を奪うものであるとし、第三者の権利を援用して違憲の主張をすることは、訴訟において他人の権利に干渉し救済を求めるものであるから許されない。
ウ．判例によれば、公職選挙法の規定において、一定の者につき選挙権を制限していることの憲法適合性については、当該者が自己の選挙権の侵害を理由にその救済を求めて提起する訴訟においてこれを争うことの可否はおくとしても、同法第２０４条の選挙無効訴訟において選挙人らが他者の選挙権の制限に係る当該規定の違憲を主張してこれを争うことは法律上予定されていない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"3"},{year:"2023",num:"18",subject:"ken",q:`財政に関する次のアからウまでの各記述について、最高裁判所の判例の趣旨に照らして、それぞれ正しい場合には１を、誤っている場合には２を選びなさい。
ア．市町村が行う国民健康保険における保険料は、憲法第８４条に規定する租税には当たらないが、国民健康保険は強制加入とされ、保険料が強制徴収されるものであり、賦課徴収の強制の度合いにおいては租税に類似する性質を有するため、憲法第８４条の趣旨が及ぶ。
イ．暦年途中の租税法規の変更及びその暦年当初からの適用によって納税者の租税法規上の地位が変更され、課税関係における法的安定に影響が及び得る場合の憲法第８４条適合性については、変更の対象となる納税者の租税法規上の地位の性質、変更の程度及び変更により保護される公益の性質などの諸事情を総合的に勘案して判断すべきである。
ウ．長く課税されることがなかったパチンコ球遊器について、行政の内部命令である通達によって課税の物件たる遊戯具に該当するとして課税の対象とされたことは、通達の内容が法の正しい解釈に合致するものであっても、憲法第８４条に違反する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"112"},{year:"2023",num:"19",subject:"ken",q:`地方自治に関する次のアからウまでの各記述について、最高裁判所の判例の趣旨に照らして、それぞれ正しい場合には１を、誤っている場合には２を選びなさい。
ア．憲法上、国会に広範な議院自律権が認められ、国会議員の発言について免責特権が保障されているが、地方議会についても、その機能を適切に果たさせるために、国会と同様の議会自治・議会自律の権能が認められることから、地方議会の議員の発言についても、免責特権が認められる。
イ．憲法第９３条第２項にいう「住民」とは、地方公共団体の区域内に住所を有する日本国民を意味するが、外国人のうち永住者等であってその居住する区域の地方公共団体と特段に緊密な関係を持つに至ったと認められるものについて、法律により、地方公共団体の長や議会の議員に対する選挙権を付与することは、憲法上禁止されていない。
ウ．地方公共団体が、地方自治の本旨に従って、財産を管理し、事務を処理し、及び行政を執行するためには、その財源を自ら調達する権能が必要であるから、地方自治の不可欠の要素として、国とは別途に課税権の主体となることが憲法上予定されており、租税の税目、課税客体、課税標準、税率等の事項について、法律で定められた具体的な準則に従う必要はない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"212"},{year:"2023",num:"20",subject:"ken",q:`条約に関する次のアからウまでの各記述について、正しいものには○、誤っているものには×を付した場合の組合せを、後記１から８までの中から選びなさい。
ア．憲法と条約の関係につき、憲法優位説の立場からは、日本国が締結した条約を誠実に遵守することを必要とする旨規定する憲法第９８条第２項について、有効に成立した条約の国内法的効力を認め、その遵守を強調したものであると考えることになる。
イ．砂川事件判決（最高裁判所昭和３４年１２月１６日大法廷判決、刑集１３巻１３号３２２５頁）は、日本国とアメリカ合衆国との間の安全保障条約（いわゆる旧日米安全保障条約）につき、一見極めて明白に違憲無効であると認められない限りは裁判所の司法審査権の範囲外であるとしたが、同条約が高度の政治性を有することを理由としており、条約であることを理由にはしていないことを踏まえると、条約について違憲審査の対象となり得るとの見解を採ったものと理解することができる。
ウ．条約の締結には国会の承認が必要であるが、衆議院が承認の議決をし、参議院でこれと異なった議決をした場合には、衆議院で出席議員の３分の２以上の多数で再び承認の議決をしたときは、衆議院の議決が国会の議決となる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2023",num:"1",subject:"min",q:`胎児に関する次のアからオまでの各記述のうち、判例の趣旨に照らし誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．ＡがＢの母Ｃとの間で締結した、Ａの所有する甲土地をＢに無償で与える旨の第三者のためにする契約は、その成立の時にＢが胎児であったとしても、そのためにその効力を妨げられない。
イ．胎児の父が胎児を認知するには、胎児の母の承諾を得なければならない。
ウ．胎児を受贈者として死因贈与をすることができる。
エ．胎児が不法行為により損害を受けたときは、胎児の両親は、出生前に胎児を代理して加害者に対し損害賠償請求をすることができる。
オ．胎児の母は、認知の訴えを提起することができない。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2023",num:"2",subject:"min",q:`意思能力に関する次のアからオまでの各記述のうち、誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．意思能力とは、自己の行為の責任を弁識する能力をいう。
イ．契約の当事者がその意思表示をした時に意思能力を有しなかったときは、その契約の無効を善意無過失の第三者にも対抗することができる。
ウ．契約の当事者がその意思表示をした時に意思能力を有しなかった場合において、その契約に基づく債務の履行として給付を受けたときは、現に利益を受けている限度において、返還の義務を負う。
エ．契約の申込者が申込みの通知を発した後に意思能力を有しない常況にある者となった場合において、その相手方が承諾の通知を発するまでにその事実が生じたことを知ったときは、その申込みは、その効力を有しない。
オ．婚姻の当事者が婚姻届を作成した時に意思能力を有しないことは、婚姻の取消しの原因となる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2023",num:"3",subject:"min",q:`不在者の財産管理に関する次のアからオまでの各記述のうち、誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．不在者とは、従来の住所又は居所を去り、その所在を知ることができない者をいう。
イ．不在者がその財産の管理人を置かなかったときは、利害関係人のみならず検察官も、家庭裁判所に対し、その財産の管理について必要な処分を命ずるよう請求することができる。
ウ．家庭裁判所は、不在者が置いた管理人に対し、不在者の財産の保存に必要と認める処分を命ずることができる。
エ．不在者が置いた管理人は、不在者の生存が明らかである場合であっても、家庭裁判所の許可を得ることにより、不在者が定めた権限を超える行為をすることができる。
オ．家庭裁判所が選任した不在者の財産の管理人は、相続人である不在者を代理してそれ以外の相続人との間で協議による遺産分割をするときは、家庭裁判所の許可を得なければならない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2023",num:"4",subject:"min",q:`代理に関する次のアからオまでの各記述のうち、誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．特定の法律行為をすることを委託された代理人がその行為をした場合において、本人が自ら知っていた事情について代理人が知らなかったことを主張することができないのは、代理人が本人の指図に従ってその行為をしたときに限られる。
イ．法定代理人は、やむを得ない事由により復代理人を選任したときは、本人に対してその選任及び監督についての責任のみを負う。
ウ．制限行為能力者が他の制限行為能力者の法定代理人としてした行為は、行為能力の制限を理由として取り消すことができる。
エ．Ａが、Ｂの代理人として、ＡＢ間の契約に基づくＢのＡに対する債務の履行をしたときは、その履行は、代理権を有しない者がした行為とみなされる。
オ．権限の定めのない代理人は、代理の目的である物又は権利の性質を変えない範囲内において、その利用又は改良を目的とする行為をする権限を有する。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2023",num:"5",subject:"min",q:`無効又は取消しに関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．Ａに強迫されたＢが５０万円をＣに贈与する旨の意思表示をＣに対してした場合において、強迫につき善意のＣがＢから受領した５０万円を遊興のために費消したときは、その後、Ｂが贈与の意思表示を取り消したとしても、Ｃは、Ｂに対し、何らの返還義務も負わない。
イ．ＡがＢを欺罔して、Ｂ所有の甲土地をＡに贈与する旨の意思表示をＢにさせた場合、Ａは、Ｂに対し、相当の期間を定めて、その期間内に当該意思表示を追認するかどうかを確答すべき旨の催告をすることができる。
ウ．ＡのＢに対する意思表示がＡの重大な過失による錯誤に基づくものであった場合には、Ａに錯誤があることをＢが重大な過失によって知らなかったとしても、Ａは、錯誤を理由にその意思表示を取り消すことができない。
エ．ＡとＢとが通謀してＡ所有の甲土地をＢに売買する旨を仮装し、Ｂへの所有権移転登記がされた後、Ｂが甲土地をＣに売却し、更にＣが甲土地をＤに売却した場合において、ＣがＡＢ間の仮装を知っていたときは、ＤがＡＢ間の仮装を知らなかったとしても、Ａは、Ｄに対し、ＡＢ間の売買の意思表示の無効を対抗することができる。
オ．Ａがその真意ではないことを知りながらＡの所有する甲土地をＢに売る旨の意思表示をした場合において、ＢがＡの意思表示が真意ではないことを知ることができたためにＡの意思表示が無効であったとしても、善意のＣがＢから甲土地を買い受けたときは、Ａは、Ｃに対し、その無効を対抗することができない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2023",num:"6",subject:"min",q:`条件に関する次のアからオまでの各記述のうち、正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．ＡがＢとの間で、Ｂが一定期間窃盗をしなかったら１０万円をＢに与える旨の贈与契約を締結した場合において、その期間窃盗をしなかったＢがＡに１０万円の支払を請求したときは、Ａは、これを拒むことができる。
イ．停止条件付きの動産の贈与契約が締結された場合において、贈与者が信義則に反し故意にその条件の成就を妨げたときは、受贈者は、動産の引渡しを請求することができる。
ウ．互いに同種の目的を有する債務を負担している者の間で、一定の事由が発生したら意思表示を待たずに当然に相殺の効力が生ずる旨の合意をしたとしても、相殺の効力は、その事由の発生によって当然には生じない。
エ．ＡがＢとの間で、Ｂが甲大学に合格したらＡの所有する動産乙をＢに与える旨の贈与契約を締結した後、合否未定の間にＡが乙を過失により損傷した場合には、Ｂが甲大学に合格しても、Ａは、Ｂに対し、損害賠償義務を負わない。
オ．ＡがＢとの間で、Ａの気が向いたらＢに１０万円を与える旨の贈与契約を締結した場合において、ＢがＡに１０万円の支払を請求したときは、Ａは、これを拒むことができない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2023",num:"7",subject:"min",q:`取得時効に関する次のアからオまでの各記述のうち、判例の趣旨に照らし誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．相続人は、所有権の時効取得を主張するに際し、その選択に従い、自己の占有のみを主張し、又は被相続人の占有に自己の占有を併せて主張することができる。
イ．占有取得の原因である権原又は占有に関する事情によって外形的客観的に所有の意思があるといえない場合であっても、占有者が内心において他人の所有権を排斥して占有する意思を有していたときは、所有の意思があると認められる。
ウ．１０年の取得時効によって不動産の所有権を取得したと主張する者は、当該不動産を自己の所有と信じたことにつき無過失であったことの立証責任を負う。
エ．地上権の取得時効期間は、時効取得を主張する者の主観的事情にかかわらず、１０年である。
オ．地役権は、継続的に行使され、かつ、外形上認識することができるものに限り、時効によって取得することができる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2023",num:"8",subject:"min",q:`登記請求権に関する次のアからオまでの各記述のうち、判例の趣旨に照らし誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．Ａの所有する甲土地がＡからＢ、ＢからＣに順次売却された場合において、所有権の登記名義人がＡのままであるときは、Ｃは、Ａに対し、ＡからＣへの真正な登記名義の回復を原因とする所有権移転登記手続を請求することができる。
イ．Ａの所有する甲土地につき、Ｂが第一順位の抵当権を有し、Ｃが第二順位の抵当権を有する場合において、Ｂの抵当権の被担保債権が弁済により消滅したときは、Ｃは、Ｂに対し、抵当権設定登記の抹消登記手続を請求することができる。
ウ．Ａがその所有する甲土地をＢに売却したにもかかわらず、ＡからＢへの所有権移転登記手続にＢが協力しないときは、Ａは、Ｂに対し、その所有権移転登記手続を請求することができる。
エ．Ａの所有する甲土地を購入したＢが、甲土地をＣに売却してその所有権を失った場合には、Ｂは、Ａに対し、ＡからＢへの所有権移転登記手続を請求することができない。
オ．Ａの所有する甲土地がＡからＢ、ＢからＣに順次売却されて、それぞれその旨の所有権移転登記がされた場合において、いずれの売買契約も無効であるときは、Ｂは、Ｃに対し、ＢからＣへの所有権移転登記の抹消登記手続を請求することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2023",num:"9",subject:"min",q:`不動産を目的とする権利変動の対抗に関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．竹木所有のための地上権を時効取得した者は、登記をしなくても、その後にその地上権の目的土地を購入しその旨の登記をした者に地上権の取得を対抗することができる。
イ．承役地について地役権設定登記がされている場合において、要役地が譲渡されたときは、譲受人は、要役地の所有権移転登記があれば、第三者に地役権の移転を対抗することができる。
ウ．一般先取特権は、不動産についてその登記がされていなくても、当該不動産上に存する登記がされた抵当権に優先する。
エ．引渡しにより対抗要件を具備した建物の賃貸借につき、その引渡し前に登記をした抵当権を有する全ての者が同意をしたときは、賃借人は、抵当権の実行により当該建物を買い受けた者に賃借権の設定を対抗することができる。
オ．永小作権を目的として抵当権を設定した永小作人は、その永小作権を放棄したとしても、その放棄をもって抵当権者に対抗することができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2023",num:"10",subject:"min",q:`占有回収の訴えに関する次のアからオまでの各記述のうち、誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．Ａが所有し占有する動産甲をＢが窃取した場合、Ａは、Ｂに対して、所有権に基づく甲の返還請求と、占有回収の訴えによる甲の返還請求とを同時にすることができる。
イ．Ａが所有し占有する動産甲をＢが詐取した場合において、ＣがＢのもとから甲を窃取したときは、Ｂは、Ｃに対して、占有回収の訴えによって甲の返還を求めることができない。
ウ．Ａが所有する動産甲についてＢが留置権を行使している場合において、ＣがＢのもとから甲を窃取したときは、Ｂは、Ｃに対して、占有回収の訴えによって甲の返還を求めることができない。
エ．Ａが所有し占有する動産甲を窃取したＢが、その事実につき善意であるＣに甲を売却し引き渡した場合、Ａは、Ｃに対して、占有回収の訴えによって甲の返還を求めることができない。
オ．Ａが自己所有の動産甲をＢに賃貸し引き渡していた場合において、ＣがＢのもとから甲を窃取したときは、Ａは、Ｃに対して、占有回収の訴えによって甲の返還を求めることができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2023",num:"11",subject:"min",q:`付合、混和及び加工に関する次のアからオまでの各記述のうち、判例の趣旨に照らし誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．Ａから建物の建築を請け負ったＢが、Ａの所有する甲土地上に自ら材料を調達して建築工事を行った場合において、未だ独立の建物とはいえない建前の段階で工事を中断したときは、その建前の所有権は、Ａに帰属する。
イ．Ａがその所有する甲建物をＢに賃貸した場合において、ＢがＡの承諾を得て甲建物に増築をしたときは、その増築部分に取引上の独立性がなくても、その増築部分の所有権は、Ｂに帰属する。
ウ．Ａがその所有する種子をＢの所有する土地に無権原でまいた場合において、種子が生育して苗となったときは、その苗の所有権は、Ｂに帰属する。
エ．Ａが所有するワイン甲とＢが所有するワイン乙とが混和して識別することができなくなった場合において、甲と乙について主従の区別をすることができないときは、その混和物は、その混和の時における価格の割合に応じてＡとＢとが共有する。
オ．ＡがＢの所有する鋼板甲に工作を加えて作品乙を製作した場合において、工作によって生じた価格が甲の価格を著しく超えるときは、乙の所有権は、Ａに帰属する。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2023",num:"12",subject:"min",q:`用益物権に関する次のアからオまでの各記述のうち、判例の趣旨に照らし誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．地上権設定契約において地上権の譲渡を禁止する旨が合意された場合であっても、地上権の譲渡は、その効力を妨げられない。
イ．法定地上権を取得した者は、その地上権の目的である土地の所有者に対して地代を支払うことを要しない。
ウ．無償の永小作権は、設定することができない。
エ．地役権は、存続期間を定めないで設定することができる。
オ．入会権の行使を妨害する者に対する妨害排除請求権の行使は、別段の慣習がない限り、入会団体の構成員の全員でしなければならない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2023",num:"13",subject:"min",q:`先取特権の順位及び効力に関する次のアからオまでの各記述のうち、判例の趣旨に照らし誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．Ａの不動産賃貸の先取特権の目的である動産甲について、ＢがＡの利益となる保存をしたことにより動産保存の先取特権を取得したときは、Ａは、Ｂに対し、その優先権を行使することができない。
イ．Ａが賃貸した土地で収穫された果実がＡの不動産賃貸の先取特権の目的である場合において、その果実に対してＢが農業労務の先取特権を有するときは、Ａは、Ｂに対し、その優先権を行使することができる。
ウ．ＡがＢに対してＡ所有の動産甲を売却して現実の引渡しをした後、ＢがＣに対して甲を売却し、Ｂが甲を以後Ｃのために占有する旨の合意がＢＣ間でされたときは、Ａは、甲について、動産売買の先取特権を行使することができない。
エ．ＡがＢに対して動産甲を売却したことにより甲につき動産売買の先取特権を有する場合において、Ｂが甲につきＣのために質権を設定したときは、Ａは、Ｃの質権に先立って、その先取特権を行使することができる。
オ．Ａ所有の建物について、Ｂが登記をした不動産保存の先取特権を有し、Ｃが登記をした抵当権を有するときは、Ｂの登記がＣの登記に後れたとしても、Ｂは、Ｃの抵当権に先立って、その先取特権を行使することができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2023",num:"14",subject:"min",q:`Ａが、Ｂに対して有するα債権の担保として、甲土地及び乙土地について第一順位の抵当権を共同抵当として有する場合に関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．甲土地及び乙土地がＢの所有である場合において、両土地についてＡの抵当権が実行され、同時にその代価を配当すべきときは、後順位抵当権者がいないとしても、各土地の価額に応じてα債権の負担を按分する。
イ．甲土地がＢの所有であり、乙土地がＣの所有であって、甲土地には第二順位の抵当権者Ｄがいる場合において、Ａが甲土地のみについて抵当権を実行し、その代価からα債権の全部の弁済を受けたときは、Ｄは、乙土地についてＡに代位してその抵当権を行使することができる。
ウ．甲土地がＢの所有であり、乙土地がＣの所有であって、甲土地には第二順位の抵当権者Ｄがいる場合において、Ａが乙土地のみについて抵当権を実行し、その代価からα債権の全部の弁済を受けたときは、Ｃは、甲土地についてＡに代位してその抵当権を行使することができる。
エ．甲土地及び乙土地がＢの所有であり、甲土地には第二順位の抵当権者Ｃがいる場合において、Ａが乙土地の抵当権を放棄して、甲土地について抵当権を実行したときは、乙土地に抵当権が設定されていたことを考慮せずに配当が実施される。
オ．甲土地及び乙土地がＣの所有であって、甲土地には第二順位の抵当権者Ｄがいる場合において、Ａが甲土地のみについて抵当権を実行し、その代価からα債権の全部の弁済を受けたときは、Ⅾは、乙土地についてＡに代位してその抵当権を行使することができない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2023",num:"15",subject:"min",q:`根抵当権に関する次のアからオまでの各記述のうち、誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．元本確定期日を定めなかった場合でも、根抵当権の設定は有効である。
イ．元本の確定前においては、根抵当権者は、根抵当権設定者の承諾を得て、根抵当権を譲渡することができる。
ウ．元本の確定前に根抵当権者から被担保債権を取得した者は、その債権について根抵当権を行使することができない。
エ．元本の確定前にする根抵当権の被担保債権の範囲の変更は、後順位抵当権者の承諾を得なければ、することができない。
オ．元本が確定した後は、根抵当権によって担保される利息や損害金は、通算して最後の２年分に限定される。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2023",num:"16",subject:"min",q:`不動産の譲渡担保に関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．設定者は、被担保債権について不履行があった後は、譲渡担保権者に対し、受戻権を放棄することにより、清算金の支払を請求することができる。
イ．被担保債権について不履行があった後、譲渡担保権者の債権者が目的物を差し押さえ、その旨の登記がされたときは、設定者は、その後に被担保債権を弁済しても、第三者異議の訴えにより強制執行の不許を求めることができない。
ウ．設定者は、被担保債権が弁済されない限り、正当な権原なく目的物を占有する者に対し、その明渡しを請求することができない。
エ．被担保債権について不履行があった後、譲渡担保権者が譲渡担保権の実行として目的物を譲渡したときは、設定者は、譲受人からの明渡請求に対し、譲渡担保権者に対する清算金支払請求権を被担保債権とする留置権を主張することができない。
オ．譲渡担保権者は、被担保債権について不履行があったときは、設定者との間で帰属清算の合意がされていたとしても、目的物を処分する権限を取得する。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2023",num:"17",subject:"min",q:`履行遅滞に関する次のアからオまでの各記述のうち、判例の趣旨に照らし誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．取立債務の履行について確定期限がある場合には、債権者が取立行為をしないときであっても、債務者は、その期限の到来した時から遅滞の責任を負う。
イ．債務の履行について不確定期限があるときは、債務者は、その期限の到来後に履行の請求を受けた時又はその期限の到来を知った時のいずれか早い時から遅滞の責任を負う。
ウ．返還時期の定めがない消費貸借において、貸主が相当の期間を定めないで催告をしたときは、借主は、その催告後相当の期間を経過した時から遅滞の責任を負う。
エ．債権者が受益者に対する詐害行為取消請求に係る訴えにおいて受領金の返還を請求したときは、その受領金の返還債務は、その請求を認容する判決の確定時に遅滞に陥る。
オ．不法行為に基づく損害賠償債務は、催告を要することなく、損害の発生と同時に遅滞に陥る。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2023",num:"18",subject:"min",q:`ＡがＢとの間の売買契約に基づきＢに対して２０００万円の売買代金債権を有している。この場合における詐害行為取消権に関する次のアからオまでの各記述のうち、判例の趣旨に照らし誤っているものを組み合わせたものは、後記１から５までのうちどれか。なお、各記述において、Ｂは、無資力であり、各行為が債権者を害することを知っていたものとする。
ア．支払不能の状態にあるＢは、Ｃに対する債務を弁済した。この場合、Ａを害する意図がＣにあったとしても、Ｂとの通謀がなければ、Ａは、当該弁済について詐害行為取消請求をすることができない。
イ．Ｂは、Ｄに対する５００万円の借入金債務について、Ｂが所有する２０００万円相当の土地をもってＤに代物弁済した。この場合において、当該代物弁済が債権者を害することをＤが知っていたときは、Ａは、Ｄに対し、当該代物弁済のうち５００万円に相当する部分以外の部分について詐害行為取消請求をすることができる。
ウ．Ｂは、Ａとの間で売買契約を締結する前に、Ｅに対する債権をＦに譲渡していたものの、その譲渡についての確定日付のある証書によるＥへの通知は、Ａの売買代金債権の発生後にされた。この場合、Ａは、当該通知について詐害行為取消請求をすることができる。
エ．ＡとＢとの間で、売買代金債権について強制執行をしない旨の合意が成立していた。この場合、Ｂがその所有する土地をＧに贈与し、当該贈与が債権者を害することをＧが知っていたとしても、Ａは、当該贈与について詐害行為取消請求をすることができない。
オ．Ｂがその所有する動産甲をＨに贈与し、更にＨが甲をＩに贈与し、それぞれ引渡しがされた。この場合において、Ａは、Ｉに対する詐害行為取消請求において財産返還を請求することができるときは、Ｈに対する詐害行為取消請求において価額償還を請求することができない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2023",num:"19",subject:"min",q:`根保証契約に関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．個人根保証契約は、極度額の定めを書面又はその内容を記録した電磁的記録によってしなければ、その効力を生じない。
イ．賃貸借契約に基づいて生ずる賃料債務を主たる債務とする個人根保証契約において、元本確定期日の定めがないときは、個人根保証契約の締結の日から法定の期間を経過すれば、主たる債務の元本は確定する。
ウ．個人根保証契約の保証人が死亡したときは、主たる債務の元本は確定する。
エ．主たる債務の範囲に含まれる債務の弁済期が到来したときであっても、主たる債務の元本が確定していなければ、債権者は、保証人に対して保証債務の履行を求めることができない。
オ．主たる債務の元本が確定したときは、保証人は、確定した元本に関し確定後に発生した利息について、その履行をする責任を負わない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2023",num:"20",subject:"min",q:`弁済に関する次のアからオまでの各記述のうち、判例の趣旨に照らし誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．債権の目的が特定物の引渡しである場合において、弁済をすべき場所について別段の意思表示がないときは、その引渡しは、債権者の現在の住所においてしなければならない。
イ．建物の所有を目的とする土地の賃貸借がされた場合において、その建物を賃借した者は、土地の賃借人の意思に反しても、その土地の賃料債務の弁済をすることができる。
ウ．金銭債権の債務者は、一部弁済をするときは、債権者に対し、一部弁済と引換えに、その弁済の限度で受取証書の交付を請求することができる。
エ．金銭債権の債務者が債権者との間で金銭の支払に代えて特定物を譲渡することにより債務を消滅させる旨の契約をしたときは、目的物の所有権は、別段の意思表示がない限り、その契約がされた時点で債権者に移転する。
オ．債権者Ａから弁済を受領する権限を付与されていないＢが、Ａの代理人と称して債権を行使し、債務者Ｃから弁済を受領したときは、Ｃが善意無過失であったとしても、その弁済は効力を有しない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2023",num:"21",subject:"min",q:`ＡのＢに対する金銭債権（以下「甲債権」という。）とＢのＡに対する金銭債権（以下「乙債権」という。）との相殺に関する次のアからオまでの各記述のうち、判例の趣旨に照らし誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．甲債権が売買代金債権であり、乙債権がＢの所有するパソコンをＡが過失によって損傷したことによる不法行為に基づく損害賠償債権であったときは、Ａは、相殺をもってＢに対抗することができる。
イ．ＡがＢのＣに対する債務をＢの委託を受けて保証していた場合において、Ｂの債権者Ｄが売買代金債権である乙債権を差し押さえた後、ＡがＣに対する保証債務を履行し、求償権である甲債権を取得したときは、Ａは、相殺をもってＤに対抗することができる。
ウ．甲債権がＡＢ間のパソコンの売買に基づく売買代金債権であったときは、Ａは、Ｂに対してパソコンの引渡しの提供をしていなくても、乙債権との相殺をもってＢに対抗することができる。
エ．甲債権と乙債権とが相殺適状となった後に甲債権が時効によって消滅した場合において、その後、ＢがＡに対して乙債権の履行を請求したときは、Ａは、相殺をもってＢに対抗することができる。
オ．甲債権について弁済期が到来していなくても、乙債権について弁済期が到来していれば、Ａは、相殺をもってＢに対抗することができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2023",num:"22",subject:"min",q:`更改及び混同に関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．債務者の交替による更改は、更改前の債務者の意思に反しても、債権者と更改後に債務者となる者との契約によってすることができる。
イ．債務者の交替による更改後の債務者は、更改前の債務者に対して求償権を取得しない。
ウ．債権者の交替による更改をする場合、更改前の債権者は、債務者の承諾を得なければ、更改前に債務者がその債務の担保として設定していた質権を更改後の債務に移すことができない。
エ．Ａが死亡してその唯一の相続人であるＢが限定承認をしたときは、ＡがＢに対して有した債権は、混同により消滅する。
オ．Ａがその所有する甲建物をＢに賃貸し、ＢがこれをＣに転貸した場合において、ＣがＡから甲建物を購入して賃貸人たる地位がＣに帰属したときは、転貸借関係は、混同により消滅する。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2023",num:"23",subject:"min",q:`同時履行の抗弁に関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．質権の被担保債権に係る債務と質物の返還義務とは、同時履行の関係にある。
イ．賃貸借が終了した場合における敷金の返還義務と賃借物の返還義務とは、同時履行の関係にある。
ウ．注文者に引き渡された仕事の目的物の品質が請負契約の内容に適合しないものである場合、注文者の報酬支払義務と、請負人の修補に代わる損害賠償義務とは、同時履行の関係にある。
エ．不動産の売買契約の履行として売主への代金の支払と買主への所有権移転登記がされた後、売主が第三者の詐欺を理由として売買契約を取り消した場合、代金返還義務と所有権移転登記の抹消登記手続義務とは、同時履行の関係にある。
オ．債権に関する証書がある場合において、その債権に係る債務と証書の返還義務とは、同時履行の関係にある。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2023",num:"24",subject:"min",q:`契約の解除に関する次のアからオまでの各記述のうち、判例の趣旨に照らし誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．債務者が債務の履行をせず、債権者が期間を定めないでその履行の催告をした場合において、その催告の時から相当の期間を経過しても債務が履行されないときは、債権者は、契約を解除することができる。
イ．債務者が債務の履行をしない場合において、その不履行が債務者の責めに帰することができない事由によるものであるときは、債権者は、契約を解除することができない。
ウ．債務者が債務の履行をせず、債権者が催告をしても契約をした目的を達するのに足りる履行がされる見込みがないことが明らかなときは、債権者は、催告をせずに直ちに契約を解除することができる。
エ．ＡＢ間で締結された契約に基づき発生したＡのＢに対する債権甲をＡがＣに譲渡し、債務者対抗要件が具備された場合において、その後、ＢがＡの債務不履行により当該契約を解除したときは、Ｃは、Ｂに対し、甲の履行を請求することができる。
オ．賃借人が死亡し、複数の相続人が賃借権を共同相続した場合、賃貸人が賃貸借契約を解除するには、その相続人全員に対して解除の意思表示をしなければならない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2023",num:"25",subject:"min",q:`売買契約に基づき買主Ａが売主Ｂから引渡しを受けた動産甲の品質が契約の内容に適合しないものである場合に関する次のアからオまでの各記述のうち、誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．Ｂは、Ａから甲の修補の請求を受けた場合であっても、Ａに不相当な負担を課するものでないときは、代替物の引渡しによる履行の追完をすることができる。
イ．不適合が追完不能であるためにＡのＢに対する履行の追完の請求が認められないときは、Ａは、Ｂに対し、代金の減額を請求することができない。
ウ．不適合がＡの責めに帰すべき事由によるものであるときは、Ａは、Ｂに対し、甲の修補と代金の減額のいずれの請求もすることができない。
エ．不適合がＡＢ双方の責めに帰することができない事由によるものであるときは、Ａは、Ｂに対し、代金の減額を請求することができない。
オ．Ｂが引渡し時に不適合を過失なく知らなかった場合において、Ａが不適合を知った時から法定の期間内にその旨をＢに通知しなかったときは、Ａは、Ｂに対し、損害賠償を請求することができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2023",num:"26",subject:"min",q:`報酬に関する次のアからオまでの各記述のうち、誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．建物の建築を請け負った請負人は、完成した建物を注文者に引き渡した後でなければ、報酬を請求することができない。
イ．注文者の責めに帰すべき事由によって請負人が仕事を完成することができなくなったときは、注文者は、報酬の支払を拒むことができない。
ウ．受任者が委任事務の履行後にその報酬を受けるべき場合において、委任が履行の中途で終了したときは、受任者は、既にした履行の割合に応じて報酬を請求することができる。
エ．受寄者は、特約がなくても、報酬を請求することができる。
オ．民法上の組合における業務執行組合員は、特約がない限り、報酬を請求することができない。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2023",num:"27",subject:"min",q:`Ａがその所有する動産甲をＢに賃貸した場合に関する次のアからオまでの各記述のうち、正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．賃貸借が書面によらないでされた場合、Ａは、Ｂが甲の引渡しを受けるまで、契約の解除をすることができる。
イ．賃貸借の期間が定められなかった場合において、Ａが解約の申入れをしたときは、賃貸借は直ちに終了する。
ウ．賃貸借の期間が定められた場合において、Ａがその期間内に解約をする権利を留保する旨の合意がされたときは、Ａは、いつでも解約の申入れをすることができる。
エ．賃貸借の期間が満了した後もＢが甲の使用を継続する場合には、これをもって賃貸借は更新されたものと推定される。
オ．Ｂが、Ａの承諾を得て甲をＣに転貸していた場合において、ＡＢ間の賃貸借の期間が満了し、その賃貸借が更新されなかったときは、Ａは、Ｃに対して、所有権に基づいて甲の引渡しを請求することができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2023",num:"28",subject:"min",q:`委任契約に関する次のアからオまでの各記述のうち、誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．受任者は、委任契約が終了した後は、遅滞なく委任事務の処理の経過及び結果を報告しなければならない。
イ．受任者は、委任事務を処理するに当たって収取した法定果実を委任者に引き渡す義務はない。
ウ．無償の委任契約であっても、受任者は、委任の本旨に従い、善良な管理者の注意をもって、委任事務を処理しなければならない。
エ．委任者の死亡により委任契約が終了した場合であっても、急迫の事情があるときは、受任者は、委任者の相続人が委任事務を処理することができるに至るまで、必要な処分をしなければならない。
オ．委任者の利益だけでなく、受任者の利益をも目的とする委任契約においては、委任者は、やむを得ない事由がなければ、契約を解除することができない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2023",num:"29",subject:"min",q:`不当利得に関する次のアからオまでの各記述のうち、判例の趣旨に照らし誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．甲土地につき抵当権の設定を受け、その旨の登記をしたＡは、甲土地についての不動産競売事件の配当期日において配当異議の申出をしなかった場合には、Ａに対する優先権を有しないにもかかわらず配当を受けた一般債権者Ｂに対し、不当利得に基づく返還請求をすることができない。
イ．善意の受益者がその利得に法律上の原因がないことを認識した後にその利益が消滅したときは、その受益者は、現に利益が存しないことを理由として不当利得に基づく返還請求を拒むことができない。
ウ．未登記の建物が不倫関係の維持を目的として贈与され、その建物の引渡しがされたときは、贈与者は、受贈者に対し、不当利得に基づいてその建物の返還を請求することができない。
エ．不法な原因のために給付をした者は、不法な原因が受益者についてのみ存した場合であっても、給付したものの返還を請求することができない。
オ．Ａがその所有する動産をＢに贈与し、その引渡しをしたことが不法原因給付に該当し、不当利得に基づく動産の返還請求をすることができないときは、Ａは、Ｂに対し、所有権に基づく動産の返還請求をすることもできない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2023",num:"30",subject:"min",q:`不法行為に関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．不法行為の被害者は、不法行為に起因する後遺障害による逸失利益について、定期金による賠償を求めることができない。
イ．被用者が使用者の事業の執行について重大な過失により失火して第三者に損害を加えた場合には、使用者は、被用者の選任監督について重大な過失があるときに限り、損害賠償の責任を負う。
ウ．被用者が、使用者の事業の執行について第三者に損害を加えた場合において、その損害を賠償したときは、被用者は、使用者に対して求償権を行使することができない。
エ．土地の工作物の設置又は保存に瑕疵があることによって他人に損害を生じた場合において、その工作物の占有者が損害の発生を防止するのに必要な注意をしたときは、その工作物の所有者が損害賠償の責任を負う。
オ．損害賠償の額を定めるに当たり、被害を受けた未成年者の過失を考慮するためには、その未成年者に事理を弁識するに足りる知能が備わっていれば足りる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2023",num:"31",subject:"min",q:`親族関係に関する次のアからオまでの各記述のうち、判例の趣旨に照らし誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．配偶者は、１親等の姻族である。
イ．配偶者の姉の夫は、親族ではない。
ウ．Ａを養親とし、Ｂを養子とする普通養子縁組が成立した場合において、その縁組前からＢに子Ｃがいたときは、ＡとＣとの間には親族関係が生じない。
エ．妻の親と夫の親とは、互いに親族である。
オ．夫が死亡した場合、妻が姻族関係を終了させる意思表示をしない限り、夫の兄弟姉妹と妻との姻族関係は終了しない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2023",num:"32",subject:"min",q:`父Ａと母Ｂとの間に生まれた子であるＣを養子とし、婚姻しているＤとＥとを養親とする特別養子縁組に関する次のアからオまでの各記述のうち、誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．ＡとＢとは婚姻しておらず、ＡがＣを認知している場合において、Ｃの親権者がＢであるときは、特別養子縁組の成立には、Ｂの同意があれば足り、Ａの同意は不要である。
イ．特別養子縁組の成立には、家庭裁判所に対するＤ及びＥからの請求がなければならない。
ウ．Ｃが１５歳に達している場合においては、特別養子縁組の成立には、Ｃの同意がなければならない。
エ．Ｄ及びＥは、そのいずれもが２５歳に達していない限り、養親となることができない。
オ．特別養子縁組が成立した場合、Ａ及びＢとＣとの親族関係は終了する。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2023",num:"33",subject:"min",q:`相続の承認及び放棄に関する次のアからオまでの各記述のうち、誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．他の共同相続人に強迫されて相続の放棄をした者が相続の放棄の取消しをしようとするときは、その旨を家庭裁判所に申述しなければならない。
イ．相続人は、相続の承認又は放棄をするまでの間、その固有財産におけるのと同一の注意をもって、相続財産を管理しなければならない。
ウ．相続の放棄をした者は、その放棄の時に相続財産に属する財産を現に占有しているときは、善良な管理者の注意をもって、その財産を管理しなければならない。
エ．相続人Ａが相続の放棄をしたことにより相続人となったＢが相続の承認をした場合には、Ａは、その後に相続財産の一部を私に消費したとしても、単純承認をしたものとはみなされない。
オ．限定承認者は、受遺者に弁済した後でなければ、相続債権者に弁済することができない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2023",num:"34",subject:"min",q:`遺言に関する次のアからオまでの各記述のうち、誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．成年被後見人が事理弁識能力を一時回復した時において遺言をするには、医師二人以上の立会いがなければならない。
イ．夫婦は、同一の証書によって遺言をすることができる。
ウ．Ａがその所有する甲建物をＢに遺贈する旨の公正証書による遺言をする場合、Ｂの妻Ｃは、遺言の証人となることができない。
エ．Ａがその所有する甲建物をＢに遺贈する旨の遺言をしたが、Ａの死亡前にＢが死亡した場合、Ｂの子Ｃが受遺者の地位を承継する。
オ．公正証書による遺言をした者は、その遺言を自筆証書による遺言によって撤回することができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2023",num:"35",subject:"min",q:`相続人の不存在に関する次のアからオまでの各記述のうち、判例の趣旨に照らし誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．相続人が存在しない場合であっても、相続財産全部の包括受遺者が存在するときは、相続財産法人は成立しない。
イ．相続財産の清算人が選任された後に相続人のあることが明らかになった場合には、相続財産の清算人の代理権は、それによって直ちに消滅する。
ウ．家庭裁判所は、相当と認めるときは、職権で、特別縁故者に相続財産の分与をすることができる。
エ．ＡがＢのために抵当権を設定したものの、その登記がされないうちにＡが死亡した場合において、Ａの相続人が存在せず相続財産法人が成立したときは、Ｂは、相続財産法人に対して抵当権設定登記手続を請求することができない。
オ．相続財産の清算人が相続財産に属する財産を売却するときは、家庭裁判所の許可を得なければならない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2023",num:"36",subject:"min",q:`重大な過失に関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．代理人が自己の利益を図る目的で代理権の範囲内の行為をした場合には、相手方がその目的を知り、又は重大な過失によって知らなかったときに限り、その行為は、代理権を有しない者がした行為とみなされる。
イ．預貯金債権について当事者がした譲渡制限の特約は、その債権に対する強制執行をした差押債権者に対しては、その者がその特約の存在を知り、又は重大な過失によって知らなかったとしても、対抗することができない。
ウ．債権について当事者がした相殺を禁止する旨の特約は、その債権の譲受人がその特約の存在を知り、又は重大な過失によって知らなかった場合には、その譲受人に対抗することができる。
エ．債務の弁済として給付をした者は、給付の時において債務の存在しないことを知り、又は重大な過失によって知らなかったときは、その給付したものの返還を請求することができない。
オ．賃借人が失火によって賃借物を滅失させたときは、賃貸人は、賃借人に重大な過失がない限り、債務不履行による損害賠償の請求をすることができない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2023",num:"1",subject:"kei",q:`次のアからオまでの各記述を判例の立場に従って検討し、正しい場合には１を、誤っている場合には２を選びなさい。
ア．甲は、客観的にわいせつ性を有する書籍につき、その内容を確認して理解したものの、この程度では刑法上のわいせつな文書には該当しないと考え、同書籍を多数の者に販売した。この場合、甲にわいせつ物頒布罪は成立しない。
イ．甲は、Ａ方前路上に置かれていた自転車を、Ａの所有物と認識して持ち去ったが、実際には同自転車は捨てられた物であり、誰の所有にも占有にも属さないものであった。この場合、甲に遺失物等横領罪が成立する。
ウ．甲は、男性Ａが、酩酊して暴れ回る女性Ｂを介抱するために取り押さえているのを見て、ＡがＢに対し無理矢理わいせつ行為に及ぼうとしていると誤信し、Ｂを助けるため、自己の暴行の内容を認識しつつＡに暴行を加え、傷害を負わせた。甲の暴行の程度が、甲が認識した急迫不正の侵害に対する防衛手段としての相当性を超えていた場合であっても、甲に傷害罪は成立しない。
エ．甲は、乙に対し、Ａ方に侵入して金品を窃取するように唆したところ、乙は、犯行を決意し、Ａ方に侵入しようとしたが、施錠を解錠できず、犯行を断念した。帰路において、乙は、Ｂ方に侵入し、Ｂから金品を強取した。甲の教唆行為と乙のＢ方における住居侵入及び強盗との間に因果関係が認められない場合であっても、甲に住居侵入罪及び窃盗罪の教唆犯が成立する。
オ．甲は、乙が窃取したバッグを、これが盗品かもしれないがそれでも構わないと思って購入した。この場合、甲に盗品等有償譲受け罪が成立する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"22221"},{year:"2023",num:"2",subject:"kei",q:`暴行罪及び傷害罪に関する次のアからオまでの各記述を判例の立場に従って検討した場合、誤っているものの個数を後記１から５までの中から選びなさい。
ア．相手方の眼前に抜き身の日本刀を突き付けたとしても、その刃が同人に接触しない限り、暴行罪が成立することはない。
イ．相手方の意思に反して、その耳元で楽器を大音量で鳴らし続けた場合には、人の身体に対して不法な攻撃を加えたものとして暴行罪が成立し得る。
ウ．ひそかに相手方に睡眠薬を摂取させ、２時間にわたり意識を失わせるとともに筋弛緩作用を伴う急性薬物中毒の症状を生じさせたとしても、覚醒後の健康状態に支障がない場合には、傷害罪が成立することはない。
エ．性病を有する者が、性行為を行えば相手方に感染させる危険性があると認識しながら、情を秘して同人と性行為を行い、同人に性病を感染させたとしても、同人が性行為に同意している場合には、傷害罪が成立することはない。
オ．相手方に暴行を加えて負傷させた者が、傷害結果が発生することについて認識を欠いている場合には、傷害罪が成立することはない。`,c1:"１．１個",c2:"２．２個",c3:"３．３個",c4:"４．４個",c5:"５．５個",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2023",num:"3",subject:"kei",q:`次の【判旨】に関する後記１から５までの各【記述】のうち、誤っているものを２個選びなさい。
【判旨】
共謀共同正犯が成立するには、二人以上の者が、特定の犯罪を行うため、共同意思の下に一体となって互いに他人の行為を利用し、各自の意思を実行に移すことを内容とする謀議をなし、よって犯罪を実行した事実が認められなければならない。したがって、このような関係において共謀に参加した事実が認められる以上、直接実行行為に関与しない者でも、他人の行為をいわば自己の手段として犯罪を行ったという意味において、その間刑責の成立に差異を生ずると解すべき理由はない。さればこの関係において実行行為に直接関与したかどうか、その分担又は役割のいかんは、共犯の刑責自体の成立を左右するものではないと解する。
【記述】`,c1:"１．【判旨】を前提にすると、殺意を有する者と傷害の故意にとどまる者との間で共謀共同正犯が成立する余地はない。",c2:"２．【判旨】は、共同正犯の成立には、実行行為の一部を分担することは必要ないとの立場に立っている。",c3:"３．【判旨】は、共謀共同正犯の成立には、単に関与者の内心における意思の合致があるだけでは十分でなく、客観的な謀議行為が必要であるとする考えと矛盾しない。",c4:"４．【判旨】に対しては、共同正犯を教唆及び幇助と区別することが困難になるとの批判がある。",c5:"５．【判旨】を前提にすると、共謀共同正犯の成立には、実行行為を行わない者が実行行為者に対して指揮命令をすることが必要である。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"15"},{year:"2023",num:"4",subject:"kei",q:"次の１から５までの各事例における甲の罪責について判例の立場に従って検討した場合、甲に窃盗罪が成立しないものはどれか。",c1:"１．甲は、Ｖ宅内において、Ｖが所在を見失っていたＶ所有の指輪を発見し、これを自己のものにしようと考えて無断で持ち去った。",c2:"２．甲は、Ｖが海中に取り落としたＶ所有の金塊について、Ｖからおおよその落下場所を教えてもらった上で回収を依頼され、Ｖの眼前で同所に潜り、同金塊を同所付近で発見したものの、これを自己のものにしようと考えて無断で持ち去った。",c3:"３．甲は、看守者のいない仏堂に所有者Ｖが据え置いてまつっていた仏像を、自己のものにしようと考えて無断で持ち去った。",c4:"４．甲は、Ⅴが乙から窃取した乙所有の腕時計を、これが盗品であることを知りながら自己のものにしようと考えて、Ⅴ宅に忍び込んで無断で持ち去った。",c5:"５．甲は、満員電車内において、乗客Ｖが網棚にかばんを置き忘れたままＡ駅で下車したのを目撃し、Ｂ駅で下車する際、同かばんを自己のものにしようと考えて無断で持ち去った。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2023",num:"5",subject:"kei",q:`次のアからオまでの各記述を判例の立場に従って検討した場合、正しいものの組合せは、後記１から５までのうちどれか。
ア．甲は、Ａが居住するＡ所有の家屋に放火し、同家屋を全焼させた上、同家屋に隣接するＢが居住するＢ所有の家屋にも火を燃え移らせて同家屋を全焼させた。この場合、甲には２個の現住建造物等放火罪が成立し、これらは観念的競合となる。
イ．甲は、行使の目的で１万円札を偽造し、Ａが経営する商店において、事情を知らないＡに対し、１万円の商品の購入を申し込み、その代金として偽造の１万円札をＡに手渡して同商品の交付を受けた。この場合、甲には通貨偽造罪、偽造通貨行使罪及び詐欺罪が成立し、これらは牽連犯となる。
ウ．暴力団員甲及び乙は、対立する暴力団員Ａ及びＢを襲撃して殺害することを共謀し、路上を連れ立って歩いていたＡ及びＢを待ち構えた上で、甲がＡを、乙がＢを、それぞれ殺害した。この場合、甲及び乙を共同正犯とする２個の殺人罪が成立し、これらは併合罪となる。
エ．甲は、酒に酔った状態で、自動車を無免許で運転した。この場合、甲には酒酔い運転の罪と無免許運転の罪が成立し、これらは観念的競合となる。
オ．甲は、恐喝目的でＡを監禁し、監禁のための暴行等により畏怖しているＡを更に脅迫して現金を喝取した。この場合、監禁罪と恐喝罪が成立し、これらは牽連犯となる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2023",num:"6",subject:"kei",q:`性的自由に対する罪に関する次のアからオまでの各記述を判例の立場に従って検討し、正しい場合には１を、誤っている場合には２を選びなさい。
ア．強制わいせつ罪は、暴行又は脅迫を用いて相手方の反抗を著しく困難にしてわいせつな行為をした場合に成立するから、不意をついて相手方の陰部に触れた場合には、同罪が成立することはない。
イ．強制性交の目的で、相手方の顔面を数回殴る暴行を加え、同人に鼻骨骨折の傷害を負わせたが、そのまま同人に逃げられたため、性交するに至らなかった場合には、強制性交等未遂罪と傷害罪が成立し、両罪は観念的競合となるのであり、強制性交等致傷罪は成立しない。
ウ．１３歳の者に対し、その者を現に監護する者であることによる影響力があることに乗じてわいせつな行為をした場合には、暴行又は脅迫を用いた場合でなくとも監護者わいせつ罪が成立する。
エ．強制わいせつ罪は、被害者の名誉等を保護する観点から親告罪とされているから、告訴がなければ公訴を提起できない。
オ．強制性交の目的で、殺意をもって、強度の暴行を加えた上で相手方と性交し、同暴行により、同人を死亡させた場合には、強制性交等致死罪のみが成立する。

令和５年７月１６日に実施された令和５年司法試験短答式試験において、刑法第６問が、同月１３日に施行された「刑法及び刑事訴訟法の一部を改正する法律」（令和５年法律第６６号）による改正後の刑法ではなく、同改正前の刑法に基づいて出題されていたにもかかわらず、その旨の広報がされていませんでした。同問の採点に当たっては、受験者全員を正答として取り扱うこととします。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:""},{year:"2023",num:"7",subject:"kei",q:`学生Ａ及びＢは、次の【事例】における甲の罪責について、後記【会話】のとおり議論している。【会話】中の①から⑤までの（ ）内に後記【語句群】から適切な語句を入れた場合、正しいものの組合せは、後記１から５までのうちどれか。なお、①から⑤までの（ ）内にはそれぞれ異なる語句が入る。
【事例】
甲は、殺意をもって、Ｘの腕の静脈内に蒸留水と空気を注射したが、当該空気量が疾病のない健常人に対する致死量未満であったためＸは死ななかった。また、甲は、当該空気量が上記致死量未満とは知らなかった。なお、当該空気量であっても被注射者の身体的条件等によっては死亡する危険はあった。
【会話】
学生Ａ．未遂犯と不能犯の区別に関してはいろいろな考え方がありますが、行為の時点において一般人が認識し得た事情と行為者が特に知っていた事情を基礎とし、一般人が結果発生の危険を感じる場合には可罰的未遂を肯定する考え方に立ち、本事例では一般人が結果発生の危険を感じるとすれば、甲に殺人未遂罪が（①）ことになりますね。
学生Ｂ．この考え方に対しては、（②）ことになるという批判がありますね。では、結果発生の危険性を事後的客観的に判断する考え方に立った場合、甲の罪責をどう考えますか。
学生Ａ．（③）という考え方によれば、身体的条件等によっては死亡の危険があったので、甲に殺人未遂罪が成立します。一方で、結果発生の危険性を事後的客観的に判断する考え方を徹底すれば、（④）ことになりませんか。
学生Ｂ．そうとは限りませんよ。結果が発生しなかった原因究明と同時に、いかなる事情があれば結果発生があり得たかを明らかにし、（⑤）可能性を判断すれば妥当な結論を導けます。
【語句群】
ａ．成立する
ｂ．成立しない
ｃ．迷信犯に未遂犯を認める
ｄ．印象で未遂犯処罰を決める
ｅ．行為者の認識内容が客観的真実に合致するか否かによって区別する
ｆ．結果発生の絶対的不能・相対的不能によって区別する
ｇ．行為者の誤信が相当と認められる
ｈ．結果発生をもたらす仮定的事実が存在し得た
ｉ．結果不発生の原因を解明できた場合、すべて不能犯となる`,c1:"１．①ａ ②ｃ ③ｅ ④ｇ ⑤ｈ",c2:"２．①ａ ②ｄ ③ｆ ④ｉ ⑤ｈ",c3:"３．①ａ ②ｅ ③ｆ ④ｃ ⑤ｇ",c4:"４．①ｂ ②ｄ ③ｅ ④ｉ ⑤ｇ",c5:"５．①ｂ ②ｉ ③ｆ ④ｃ ⑤ｇ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2023",num:"8",subject:"kei",q:"放火の罪に関する次の１から５までの各記述を判例の立場に従って検討した場合、正しいものを２個選びなさい。",c1:"１．人が居住する木造建物Ａと人が居住していない木造建物Ｂは、木造の渡り廊下で接合され、渡り廊下を通じて人の行き来のある構造となっていた。甲は、これらの事実を認識した上で、その当時誰もいなかった建物Ｂに放火して建物Ｂを焼損した。この場合、建物Ａに延焼しなければ、甲に現住建造物等放火既遂罪が成立することはない。",c2:"２．甲は、Ｖがその家族と共に居住する木造家屋に放火してこれを焼損した。この場合、Ｖとその家族が１泊２日の旅行中で不在であり、甲がそのことを認識して放火したのであれば、甲に現住建造物等放火既遂罪が成立することはない。",c3:"３．甲は、妻と二人で居住する木造家屋を燃やそうと考え、壁に掛けられたカレンダーに火をつけた。この場合、上記カレンダーが焼損した時点で、これに気付いた妻に火を消し止められ、他に燃え移らなかったのであれば、甲に現住建造物等放火既遂罪が成立することはない。",c4:"４．甲は、火災保険金を詐取する目的で、自己が単独で居住し、かつ、誰も現在しない木造家屋に放火してこれを焼損した。この場合、刑法第１０８条の「現に人が住居に使用し又は現に人がいる」の「人」に犯人は含まれないから、甲に現住建造物等放火既遂罪が成立することはない。",c5:"５．甲は、Ｖが居住する木造家屋の押し入れの床にガソリンをまいて火をつけたところ、同押し入れの床板が独立して燃焼するに至ったが、他に燃え移る前に消し止められた。この場合、上記家屋の効用を失うに至っていなければ、甲に現住建造物等放火既遂罪が成立することはない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"34"},{year:"2023",num:"9",subject:"kei",q:"不作為犯に関する次の１から５までの各記述を判例の立場に従って検討した場合、正しいものを２個選びなさい。",c1:"１．詐欺罪については積極的な欺罔行為を要するから、不作為による欺罔行為が認められることはない。",c2:"２．不作為による幇助犯が成立するためには、作為に出ることで確実に正犯の実行を阻止できたという関係は不要である。",c3:"３．結果犯における不真正不作為犯の故意について、結果の発生を積極的に意欲することは不要である。",c4:"４．不作為による殺人罪が成立するためには、行為者と生命の危機に瀕した者との間に親族関係や契約関係が必要であるから、行為者が、そのような関係にない重篤な患者に対する医師の治療を打ち切らせて同患者を一人暮らしの自宅に引き取った上、その生命を維持するために必要な医療措置を受けさせずに同患者を死亡させたとしても、殺人罪は成立し得ない。",c5:"５．不真正不作為犯の成立には、作為可能性を必要としない場合がある。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"23"},{year:"2023",num:"10",subject:"kei",q:`学生Ａ及びＢは、次の【事例】における甲の罪責について、後記【会話】のとおり議論している。【会話】中の①から⑤までの（ ）内から適切な語句を選んだ場合、正しいものの組合せは、後記１から５までのうちどれか。
【事例】
甲は、Ｘ県から代金１億円で請け負った土木工事を完成させ、同工事で生じた汚泥５トンを搬出して適法に処理した。上記工事に関する請負契約では、甲が工事で生じた汚泥を全て搬出することが義務付けられていたが、請負代金はその搬出量にかかわらず定額とされ、汚泥の処理方法についての定めもなかった。もっとも、上記契約締結の際、Ｘ県が汚泥搬出量は５０トンを下らないと予測していたため、甲は、実際の搬出量を報告すれば、Ｘ県が行う工事完成検査の際に不法投棄を疑われ、その調査のために請負代金の支払が延期されると懸念し、Ｘ県に対し、汚泥５０トンを搬出して適法に処理したと虚偽の報告をし、Ｘ県職員をその旨誤信させ、請負代金１億円の支払を受けた。なお、甲が虚偽の報告をしなければ、Ｘ県が不法投棄について調査を行い、請負代金の支払時期が遅れたことは確実であった。
【会話】
学生Ａ．詐欺罪の成否を問題とした場合、財産上の損害をどう考えますか。
学生Ｂ．詐欺罪における財産上の損害の有無は、①（ａ．財物の占有・支配の喪失それ自体によって・ｂ．被害者の取引目的達成の有無も考慮して）判断すべきです。本事例では、請負契約の目的である工事が完成し、かつ、その請負代金は定額なので、Ｘ県に財産上の損害はないと考えます。
学生Ａ．Ｂさんのように、財産上の損害を実質的に把握するとしても、本事例では、②（ｃ．Ｘ県の代金支払時期を早めた・ｄ．Ｘ県の代金減額請求権を侵害した）という点で、財産上の損害を認め得ると思います。
学生Ｂ．Ａさんの見解では、③（ｅ．一日でも支払時期を早めれば詐欺罪が成立する・ｆ．未成年であることを秘して成人向け雑誌を購入した者にまで詐欺罪が成立する）ことになりかねず、妥当でないと考えます。
学生Ａ．いや、私は、判例と同様に、④（ｇ．全体財産の減少が認められる・ｈ．社会通念上別個の支払に当たるといい得る程度の期間、支払時期を早めた）場合に限って財産上の損害を認めますので、その批判は当たりません。ところで、Ｂさんは、本事例において、詐欺未遂罪の成立も否定しますか。
学生Ｂ．甲の虚偽報告の有無にかかわらずＸ県は代金を支払わざるを得ませんので、そもそも、⑤（ｉ．欺罔行為がない・ｊ．財物の交付行為がない）と考えます。したがって、詐欺未遂罪も成立しません。`,c1:"１．①ａ ③ｅ ⑤ｉ",c2:"２．①ｂ ②ｃ ④ｇ",c3:"３．①ｂ ④ｈ ⑤ｉ",c4:"４．②ｃ ③ｆ ④ｇ",c5:"５．②ｄ ③ｅ ⑤ｊ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2023",num:"11",subject:"kei",q:`賄賂罪に関する次のアからオまでの各記述を判例の立場に従って検討した場合、正しいものの組合せは、後記１から５までのうちどれか。
ア．公立中学校の教員が、自らが担任を務める生徒の保護者から商品券を受け取った場合、それが慣行的社交儀礼としてなされたものであっても、常に「賄賂」に当たる。
イ．賄賂罪の客体である「賄賂」の対象となり得る利益は、有体物に限られないものの、財産上の利益である必要がある。
ウ．収賄罪において賄賂と対価関係に立つ行為は、法令上公務員の一般的職務権限に属する行為であれば足り、公務員が具体的事情の下においてその行為を適法に行うことができたかどうかは問わない。
エ．第三者供賄罪において、賄賂の供与を受ける「第三者」に法人は含まれない。
オ．裁判所は、収賄の共同正犯者が共同して収受した賄賂について、共犯者各自に対し、公務員の身分の有無にかかわらず、それぞれその価額全部の追徴を命じることができ、相当と認められる場合には、裁量により、各自にそれぞれ一部の額の追徴を命じ、あるいは一部の者にのみ追徴を科することも許される。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2023",num:"12",subject:"kei",q:`緊急避難に関する次のアからオまでの各記述を判例の立場に従って検討した場合、正しいものの組合せは、後記１から５までのうちどれか。
ア．緊急避難は、自己又は他人の生命、身体、自由又は財産という個人的法益に対する現在の危難を避けるためにした行為に成立するものであるから、国家的法益に対する危難を避けるためにした行為に緊急避難が成立することはない。
イ．避難行為により避けようとした害の程度が生じた害の程度を上回る場合だけでなく、両者が同程度の場合にも、緊急避難は成立し得る。
ウ．緊急避難における現在の危難は、危難が現に存在している場合のみならず、間近に押し迫っている場合も含む。
エ．過剰避難が成立する場合、情状によって、その刑を減軽することはできるが免除することはできない。
オ．緊急避難におけるやむを得ずにした行為とは、正当防衛におけるのと同様に、手段として必要最小限度のものであること、すなわち相当性を有するものであれば足りる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2023",num:"13",subject:"kei",q:`学生Ａ及びＢは、次の【事例】における甲の罪責について、後記【会話】のとおり議論している。【会話】中の①から⑥までの（ ）内に後記【語句群】から適切な語句を入れた場合、正しいものの組合せは、後記１から５までのうちどれか。なお、①から⑥までの（ ）内にはそれぞれ異なる語句が入る。
【事例】
甲は、自らを溺愛していた交際中のＶに対し、実際には追死する意思がないのに追死すると欺き、Ｖに、甲が追死するものと誤信させ、死ぬことを承諾させた。その上で、甲は、下記のⅠ又はⅡの行為に及んだ。
Ⅰ．Ｖの承諾を得てＶの頸部を両手で絞め、Ｖを窒息死させた。
Ⅱ．Ｖの承諾を得てＶに致死量の毒物を渡し、その毒物を服用させて、Ｖを中毒死させた。
【会話】
学生Ａ．まず、Ⅰの事例について考えましょう。Ｖは（①）といえるので、甲が追死することを誤信していたとしても、Ｖの生命を放棄する意思は有効であり、甲に（②）は成立せず、（③）が成立すると考えます。
学生Ｂ．私としては、Ｖは（④）といえるので、Ｖの生命を放棄する意思は無効であり、甲に（②）が成立すると考えます。
学生Ａ．Ⅱの事例において、甲に（②）が成立するかについては、ＢさんのようにＶの生命を放棄する意思は無効であると考えるとしても、甲に（⑤）が成立するかを更に検討する必要がありますよね。
学生Ｂ．Ｖは（⑥）といえるので、甲に（②）が成立すると考えます。
【語句群】
ア．甲に自己の行為を支配されていない
イ．自己が死亡すること自体は認識し、これを承諾していた
ウ．甲の言葉を信じ込み、甲の意思どおりに行動した
エ．真意に沿わない重大な瑕疵ある意思に基づいて死を決意した
オ．殺人罪
カ．刑法第２０２条の罪
キ．間接正犯
ク．共同正犯
（参照条文）刑法
第２０２条 人を教唆し若しくは幇助して自殺させ、又は人をその嘱託を受け若しくはその承諾を得て殺した者は、６月以上７年以下の懲役又は禁錮に処する。`,c1:"１．①ア ②オ ③カ ④イ ⑤キ ⑥ウ",c2:"２．①ア ②カ ③オ ④ウ ⑤ク ⑥イ",c3:"３．①ア ②カ ③オ ④エ ⑤ク ⑥ウ",c4:"４．①イ ②オ ③カ ④ア ⑤キ ⑥エ",c5:"５．①イ ②オ ③カ ④エ ⑤キ ⑥ウ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2023",num:"14",subject:"kei",q:`身分犯の共犯に関して、学生Ａ及びＢが次の【会話】のとおり議論している。【会話】中の①から⑤までの（ ）内に後記【語句群】から適切な語句を入れた場合、正しいものの組合せは、後記１から５までのうちどれか。なお、①から⑤までの（ ）内にはそれぞれ異なる語句が入る。
【会話】
学生Ａ．業務者でも財物の占有者でもない甲が、財物を業務上占有する乙を教唆して当該財物を横領させたという事例について考えてみましょう。私は、刑法第６５条との関係では真正身分犯と不真正身分犯との区別は重要でなく、同条第１項が違法身分の連帯的作用を、同条第２項が責任身分の個別的作用を定めたという見解に立ち、占有者を違法身分、業務者を責任身分と解するので、甲には（①）の教唆犯が成立すると考えます。
学生Ｂ．Ａさんの見解には、（②）との批判がありますね。私は、甲に業務上横領罪の教唆犯が成立し、単純横領罪の刑を科すべきと考えます。私は、まず（③）という考え方に立ち、業務上横領罪について（④）と考えて刑法第６５条第１項を適用します。その上で、単純横領罪の刑を科すのは（⑤）と考えるからです。
【語句群】
ａ．業務上横領罪
ｂ．単純横領罪
ｃ．刑法第６５条の文言に反する
ｄ．刑法第６５条第２項は成立罪名まで個別化する規定である
ｅ．成立する罪名と科刑の分離を回避すべきだ
ｆ．業務者ではない占有者が業務上横領に加功した場合との刑の均衡を図るべきだ
ｇ．刑法第６５条第１項が真正身分犯について身分の連帯的作用を、同条第２項が不真正身分犯について身分の個別的作用を定めた規定である
ｈ．不真正身分犯
ｉ．真正身分犯
（参照条文）刑法
第６５条 犯人の身分によって構成すべき犯罪行為に加功したときは、身分のない者であっても、共犯とする。
２ 身分によって特に刑の軽重があるときは、身分のない者には通常の刑を科する。`,c1:"１．①ａ ②ｄ ③ｇ ④ｈ ⑤ｅ",c2:"２．①ａ ②ｆ ③ｅ ④ｉ ⑤ｄ",c3:"３．①ｂ ②ｃ ③ｆ ④ｈ ⑤ｅ",c4:"４．①ｂ ②ｃ ③ｇ ④ｉ ⑤ｆ",c5:"５．①ｂ ②ｅ ③ｄ ④ｈ ⑤ｆ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2023",num:"15",subject:"kei",q:"文書偽造の罪に関する次の１から５までの各記述を判例の立場に従って検討した場合、正しいものはどれか。",c1:"１．公務員でない甲は、行使の目的で、情を知らない市役所の係員Ａに虚偽の申立てをして、市長名義の虚偽の課税証明書を作成させた。この場合、甲に虚偽公文書作成罪は成立しない。",c2:"２．甲は、無免許で自動車を運転中に取締りを受けた際、かねてより知人Ａから氏名等の使用の許諾を受けていたことから、Ａの氏名等を称し、行使の目的で、交通事件原票中の供述書欄末尾に「Ａ」と署名した。この場合、甲に私文書偽造罪は成立しない。",c3:"３．甲は、Ａに１００万円を貸し付けていたが、Ａから借用書を徴していなかったため、行使の目的で、Ａに無断で、甲から１００万円を借用した旨のＡ名義の借用書を作成した。この場合、甲に私文書偽造罪は成立しない。",c4:"４．甲は、民間団体Ａから国際運転免許証の作成を委託され、行使の目的で、外観が正規の国際運転免許証に酷似するＡ名義の文書を作成したが、Ａに正規の国際運転免許証を発給する権限はなく、甲もそのことを知っていた。この場合、甲に私文書偽造罪は成立しない。",c5:"５．甲は、同姓同名の弁護士がいることを利用して弁護士を装い、不動産業者Ａから土地調査の依頼を受け、行使の目的で、作成名義人として「弁護士甲」と記載した土地調査に関する書面を作成しＡに交付した。この場合、甲に私文書偽造罪は成立しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2023",num:"16",subject:"kei",q:`共犯の要素従属性に関して、学生Ａ及びＢが次の【会話】のとおり議論している。【会話】中の①から⑥までの（ ）内に後記【語句群】から適切な語句を入れた場合、正しいものの組合せは、後記１から５までのうちどれか。なお、①から⑥までの（ ）内にはそれぞれ異なる語句が入る。
【会話】
学生Ａ．（①）ことからも、共犯を処罰するためには、正犯が（②）を備える必要があると考えます。
学生Ｂ．Ａさんの見解によれば、甲が乙に指示して構成要件に該当する行為を実行させたが、（③）において、甲に責任を問うことができなくなり、不当ではありませんか。
学生Ａ．その場合、甲に（④）を幅広く認めることで妥当な結論を得られます。
学生Ｂ．でも、乙が刑事未成年者ながら是非弁別能力があり、その意思が抑圧されていない場合にまで（④）を認めることは無理がありますね。他方で、適法な行為を援助する行為を処罰の対象とするのは妥当ではありません。私は、（⑤）べきと考えるので、共犯を処罰するためには、正犯が（⑥）を備えることが必要であり、それで足りることになります。
【語句群】
ａ．違法は連帯的に作用するが、責任は個別的に作用する
ｂ．教唆犯については刑法第６１条が「犯罪」という文言を使っている
ｃ．違法性阻却事由については、行為者ごとの違法の相対性も認められる
ｄ．構成要件該当性
ｅ．構成要件該当性及び違法性
ｆ．構成要件該当性、違法性及び有責性
ｇ．乙の行為に違法性阻却事由が認められる事案
ｈ．乙の行為に責任阻却事由が認められる事案
ｉ．間接正犯
ｊ．幇助犯`,c1:"１．①ａ ③ｇ ⑤ｃ",c2:"２．①ｂ ③ｈ ⑤ｃ",c3:"３．①ｃ ④ｉ ⑤ａ",c4:"４．②ｄ ④ｊ ⑥ｆ",c5:"５．②ｆ ④ｉ ⑥ｅ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2023",num:"17",subject:"kei",q:`刑法第２３０条の２に関する次の各【見解】についての後記１から５までの各【記述】のうち、正しいものはどれか。
【見 解】Ａ説：刑法第２３０条の２の規定は、名誉毀損罪について真実性の証明がなされたことを処罰阻却事由として定めたものである。Ｂ説：刑法第２３０条の２の規定は、他人の名誉を毀損する表現の内容が証明可能な程度に真実であることを違法性阻却事由として定めたものである。
【記 述】`,c1:"１．Ａ説に対しては、刑法第２３０条の２が真実性の証明に係る立証責任を被告人に負担させていることと整合的でないとの批判がある。",c2:"２．Ａ説によれば、真実性の証明に失敗した場合、刑法第３５条によって違法性が阻却される余地はない。",c3:"３．Ａ説は、いい加減な調査に基づいたものであれば、結果的に真実であることが証明された場合でも、その表現を違法とすべきであるとの考え方と整合的である。",c4:"４．Ｂ説は、真実性の証明の成功・不成功は、名誉毀損行為が行われた後の事情であって、犯罪の成否とは無関係であることを根拠としている。",c5:"５．Ｂ説からは、他人の名誉を毀損する表現をした者が、その表現内容を真実と誤信した場合には、常に故意がないことになる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2023",num:"18",subject:"kei",q:"正当防衛に関する次の１から５までの各記述を判例の立場に従って検討した場合、正しいものを２個選びなさい。",c1:"１．刑法第３６条第１項における「権利」には、個人の生命、身体、自由のみならず、財産も含まれる。",c2:"２．急迫不正の侵害に対する反撃行為について防衛の意思と攻撃の意思が併存する場合、正当防衛が成立するには、その主従を比較して、前者が優越する必要がある。",c3:"３．凶器を持たない相手からの侵害行為に対抗する場合、正当防衛が成立するには、凶器を持たずに対抗する必要がある。",c4:"４．正当防衛は、不正の侵害に対して成立するから、相手方の過失行為に対しては、正当防衛は成立し得ない。",c5:"５．急迫不正の侵害に対して憤激又は逆上して反撃を加えた場合でも、正当防衛は成立し得る。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"15"},{year:"2023",num:"19",subject:"kei",q:`背任罪に関する次の【判旨】についての後記１から５までの各【記述】のうち、正しいものはどれか。
【判旨】
刑法第２４７条にいう「本人に財産上の損害を加えたとき」とは、経済的見地において本人の財産状態を評価し、被告人の行為によって、本人の財産の価値が減少したとき又は増加すべかりし価値が増加しなかったときをいうと解すべきであるところ、信用保証協会Ａ支所長の被告人が同協会をして返済能力のないＢの債務を保証させたときは、同債務がいまだ不履行の段階に至らず、したがって同協会の財産に、代位弁済による現実の損失がいまだ生じていないとしても、経済的見地においては、同協会の財産的価値は減少したものと評価されるから、同条にいう「本人に財産上の損害を加えたとき」に当たるというべきである。
【記述】`,c1:"１．【判旨】は、保証債務の負担を「財産上の損害」とし、背任罪を本人の全体財産に対する罪であることを否定している。",c2:"２．【判旨】によれば、上記信用保証協会による上記保証債務の負担後、Ｂが偶然金銭を入手して主債務を期限内に弁済した場合に、背任罪の未遂罪の成立を認めることになる。",c3:"３．【判旨】は、保証債務の負担が「財産上の損害」に当たるか否かを判断するに当たり、主債務者の返済能力を問わないとの判断をしたものである。",c4:"４．【判旨】は、保証債務の負担をもって「財産上の損害」と認めているから、背任罪が侵害犯であることを否定している。",c5:"５．【判旨】に対しては、どの程度の財産的価値の減少をもって「損害」というのかが明確ではないという批判が可能である。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2023",num:"20",subject:"kei",q:`次の【事例】に関する後記アからオまでの各【記述】を判例の立場に従って検討し、正しい場合には１を、誤っている場合には２を選びなさい。
【事例】
甲は、高齢女性Ａから同人名義のキャッシュカード（以下「カード」という。）を不正に入手するため、甲が警察官を装いＡに電話をかけ、これからＡ方を訪れる警察官の確認を受けながらカードを封筒に入れ、同封筒をＡ方において保管する必要があるとうそを言い、警察官に成り済ました乙（２５歳、男性）がＡ方を訪れ、隙を見て同封筒を別の封筒とすり替えて持ち去り、カードを丙に渡して甲に届けさせる計画（以下「本件計画」という。）を考え、乙に本件計画の実行を指示し、乙はこれを承諾した。某日午前９時頃、本件計画に基づき、甲がＡに電話をかけて上記うそを言い、乙は、同日午前９時１５分頃、Ａ方を訪ね、Ａにカードを封筒に入れるよう求めた。しかし、乙の態度を不審に思ったＡが、乙に身分証の提示を求めたので、乙は、逮捕を免れるとともに本件計画どおりにカードを手に入れるため、Ａを手拳で多数回殴り、恐怖で抵抗できないＡからカードを奪って持ち去った。同日午前９時２０分頃、乙は、甲に電話で、本件計画どおりカードを入手したと伝えた。同日午前９時３０分頃、甲は、丙に電話をかけ、本件計画の内容を初めて説明し、乙からカードを受け取って甲に届けるよう依頼し、丙はこれを承諾した。丙は、同日午前１１時頃、乙と合流し、カードを受け取って乙と別れ、自動車でＡ方から約５０キロメートル離れた甲方に向かったが、同日午後０時３０分頃、甲方付近で降車した際、制服警察官ＢからＡ方での事件とは関係なく職務質問を受けた。その際、丙は、Ｂを殴り、Ｂに全治２週間を要する打撲傷を負わせ、その隙に上記自動車で逃走し、同日午後１時頃、甲と合流して甲にカードを届けた。その後、丙の交際相手丁は、丙が上記一連の犯行を行い、警察から捜査されていることを認識しつつ、丙を丁の自宅にかくまった。
【記 述】
ア．乙がＡからカードを奪った行為は、窃盗罪の実行に着手した後、Ａに暴行を加えてこれを奪取したことになるから、乙に事後強盗既遂罪が成立する。
イ．甲が乙のＡに対する暴行・脅迫を認識も予見もしていなかった場合、乙がＡからカードを奪取した行為について、甲に窃盗未遂罪の共同正犯が成立するにとどまる。
ウ．甲は、当初から丙にカードを運搬させる計画であり、その運搬は重要な役割であるから、丙には盗品等運搬罪ではなく窃盗罪の共同正犯が成立する。
エ．丙がＢを殴って負傷させた行為には、公務執行妨害罪と傷害罪が成立し、これらは観念的競合となる。
オ．丙のいずれの行為についても、証拠上、犯罪の嫌疑が不十分として不起訴となった場合、丁が丙をかくまった行為について犯人蔵匿罪は成立しない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"22212"},{year:"2022",num:"1",subject:"ken",q:`憲法が保障する基本的人権の制約理由に関する次のアからウまでの各記述について、最高裁判所の判例の趣旨に照らして、正しいものには○、誤っているものには×を付した場合の組合せを、後記１から８までの中から選びなさい。
ア．表現の自由などの精神的自由も、その行使の結果から本人を保護するために法律により制限を加えられることがあるが、こうした制限については、専門技術的な判断が伴うことから立法者に広い裁量が認められるので、目的との関連で著しく不合理であることが明らかである場合に限って、その効力を否定することができる。
イ．職業選択の自由は、社会生活における安全の保障及び秩序の維持等の消極的な目的や、国民経済の円満な発展や社会公共の便宜の促進、経済的弱者の保護等の社会政策及び経済政策上の積極的な目的のほか、租税の適正かつ確実な賦課徴収を図るという国家の財政目的のために制約され得る。
ウ．労働基本権は、勤労者の経済的地位の向上のための手段として認められたものであって、それ自体が目的とされる絶対的なものではないから、憲法第１３条のいう公共の福祉のための制約を受けるほか、公務員の争議行為の禁止の場合のように、勤労者を含めた国民全体の共同利益の見地からする制約を受ける。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"6"},{year:"2022",num:"2",subject:"ken",q:`私人間における人権保障に関する次のアからウまでの各記述について、正しいものには○、誤っているものには×を付した場合の組合せを、後記１から８までの中から選びなさい。
ア．最高裁判所は、株式会社による政党への政治資金の寄附が、国民の選挙権の自由な行使を直接に侵害するものであるとしつつ、会社にも政治活動の自由が保障されるため、当該侵害は社会的許容性の限度を超えるものではないと判断されることから、当該寄附が公序良俗に違反すると解することはできないとした。
イ．最高裁判所は、株式会社の就業規則において女子の定年年齢を男子より低く定める部分が、専ら女子であることのみを理由として差別したことに帰着するものとして、公序良俗に違反し無効であると解するに当たって、個人の尊厳と両性の本質的平等を解釈の基準として定める民法の規定とともに、法の下の平等を定める憲法第１４条第１項を参照した。
ウ．最高裁判所は、下級裁判所が、一定の集団に属する者の全体に対して人種差別的な発言をした者に対し、人種差別撤廃条約並びに同条約に照らして解釈される憲法第１３条及び第１４条第１項は私人相互の関係にも直接適用されるとして、民法第７０９条の規定により高額の損害賠償を命じた事例において、上告を棄却した。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"6"},{year:"2022",num:"3",subject:"ken",q:`法の下の平等に関する次のアからウまでの各記述について、最高裁判所の判例の趣旨に照らして、それぞれ正しい場合には１を、誤っている場合には２を選びなさい。
ア．国民への課税要件等を定めるには、極めて専門技術的な判断を要するため、租税法の分野における所得の性質の違い等を理由とする取扱いの区別については、その立法目的が正当なものであり、かつ、当該立法において具体的に採用された区別の態様が目的との関連で著しく不合理であることが明らかでない限り、その合理性は否定できず、憲法第１４条に違反しない。
イ．生存権は、生存に直結する権利であり精神的自由に準ずる権利である一方、これを具体化するための立法には高度の専門技術的な政策的判断を要するところ、併給調整条項の適用により、障害福祉年金の受給者と非受給者との間で児童扶養手当の受給に関する区別が生じるとしても、立法目的に合理的な根拠があり、かつ、立法目的と当該区別との間に実質的関連性が認められ、合理的理由のない差別とはいえないから、憲法第１４条に違反しない。
ウ．相続制度をどのように定めるかは、国の伝統、社会事情、国民感情や、その国における婚姻ないし親子関係に対する規律、国民の意識等を総合的に考慮するなど立法府の合理的な裁量判断に委ねられているが、嫡出性の有無による法定相続分の区別は、立法府に与えられた上記のような裁量権を考慮しても、こうした区別をすることについて合理的な根拠が認められないから、合理的理由のない差別として、憲法第１４条に違反する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"121"},{year:"2022",num:"4",subject:"ken",q:`憲法第２０条に関する次のアからウまでの各記述について、ｂの見解がａの見解の批判となっている場合には１を、そうでない場合には２を選びなさい。
ア．ａ．憲法第２０条第２項と同条第３項の規定は、その目的、趣旨、対象、範囲を異にしており、同条第２項の「宗教上の行為、祝典、儀式又は行事」は、必ずしも全てが同条第３項の「宗教的活動」に含まれるという関係にはない。
ｂ．憲法第２０条第３項の「宗教的活動」に含まれない宗教上の祝典、儀式、行事等であっても、国家がこれに参加を強制すれば、同条第２項違反の問題が生じ得る。
イ．ａ．憲法第２０条第３項にいう「宗教的活動」とは、国及びその機関の活動の中で宗教と関わりを持つ全ての行為を指すものではなく、その関わりが相当とされる限度を超えるものに限られる。
ｂ．国家が社会生活に規制を加え、あるいは教育、福祉、文化等に関する助成、援助等の諸施策を実施するに当たって、宗教と一定の関わりを生ずることは避けられない。
ウ．ａ．憲法第２０条第３項の「宗教的活動」とは、目的が宗教的意義を持ち、効果が宗教に対する援助、助長、促進又は圧迫、干渉等になるものをいい、その該当性判断において、一般人の宗教的評価や行為者の意図等の主観、行為が一般人に与える影響等も考慮すべきである。
ｂ．「宗教的活動」の該当性判断において一般人の宗教的評価等を考慮することは、多数者による少数者の信仰の抑圧につながる可能性がある。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"221"},{year:"2022",num:"5",subject:"ken",q:`表現の自由に関する次のアからウまでの各記述について、最高裁判所の判例の趣旨に照らして、正しいものには○、誤っているものには×を付した場合の組合せを、後記１から８までの中から選びなさい。
ア．ビラの配布のために集合住宅の共用部分及び敷地内に管理権者の承諾なく立ち入って、その管理権やそこで私的生活を営む者の私生活の平穏を侵害したとしても、ビラの内容が政治的意見を記載したものであれば、表現の自由の行使として尊重されるべきであるから、当該立入り行為を刑法第１３０条前段の罪に問うことは憲法第２１条第１項に違反し、許されない。
イ．公立図書館は、住民に対して思想、意見その他の種々の情報を含む図書館資料を提供してその教養を高めること等を目的とする公的な場であり、図書の著作者にとっては、その思想、意見等を公衆に伝達する公的な場でもあるから、図書の著作者は、公立図書館に対して表現の自由に基づいて自らの著作物を購入し、閲覧に供するよう求めることができる。
ウ．報道機関の報道が正しい内容を持つためには、報道のための取材の自由も憲法第２１条の精神に照らして十分尊重されなければならず、取材源の秘密は、取材の自由を確保するために必要なものとして重要な社会的価値を有するから、報道機関の記者が民事訴訟で証人として尋問された場合、取材源に関する証言の拒絶は、それによって真実発見及び裁判の公正が犠牲になるとしても、直ちに認められなければならない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"8"},{year:"2022",num:"6",subject:"ken",q:`新聞の記事に取り上げられた者が、当該記事に取り上げられたという理由のみによって、当該新聞を発行・販売する者に対し、当該記事に関する自己の反論文を無修正、無料で掲載することを求めることができるものとする、いわゆる反論権に関する次のアからウまでの各記述について、最高裁判所の判決（最高裁判所昭和６２年４月２４日第二小法廷判決、民集４１巻３号４９０頁）の趣旨に照らして、正しいものには○、誤っているものには×を付した場合の組合せを、後記１から８までの中から選びなさい。
ア．反論権の制度が認められると、新聞記事により自己の名誉を傷つけられあるいはそのプライバシーに属する事項等について誤った報道をされたとする者にとっては、機を失せず、同じ新聞紙上に自己の反論文の掲載を受けることができ、これにより当該記事に対する自己の主張を読者に訴える途が開かれることになる。したがって、反論権の制度が名誉あるいはプライバシーの保護に資するものがあることは否定し難い。
イ．反論権の制度は、民主主義社会において極めて重要な意味を持つ新聞等の表現の自由に対し重大な影響を及ぼすものである。したがって、記事を掲載した新聞が日刊全国紙であって、当該新聞による情報の提供が一般国民に対し強い影響力を持ち、当該記事が特定の者の名誉ないしプライバシーに重大な影響を及ぼし得る場合でない限り、具体的な成文法がないのに反論権を認めることはできない。
ウ．放送事業者に対して、一定の場合に、放送により権利の侵害を受けた本人等からの請求に基づく訂正放送を義務付ける放送法の規定や、他人の名誉を毀損した者に対して、裁判所が「名誉を回復するのに適切な処分」を命ずることができるとする民法第７２３条の規定は、反論権について直接規定したものではない。しかし、それらの規定は、それぞれの趣旨に鑑みれば、裁判において反論権を認める根拠となり得る。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"4"},{year:"2022",num:"7",subject:"ken",q:`憲法第２２条と海外旅行の自由に関する次のアからウまでの各記述について、ｂの見解がａの見解の批判となっている場合には１を、そうでない場合には２を選びなさい。
ア．ａ．海外旅行の自由は、海外に移住する自由に含まれる。
ｂ．憲法第２２条第１項は国内の関係、同条第２項は国外の関係を規律すると考えることは形式的に過ぎて適切ではない。
イ．ａ．海外旅行の自由は、移転の自由に含まれる。
ｂ．日本国の主権から離脱する自由として海外に移住し国籍を離脱する自由と、日本国の主権の保護を受けながら一時的に日本国外に渡航する自由とは異なる。
ウ．ａ．海外旅行の自由は、憲法第２２条ではなく、幸福追求権の一部分として憲法第１３条により保障される。
ｂ．移転の自由及び海外に移住する自由は、一時的な移動ではなく、生活の本拠を決定することを保障するものである。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"122"},{year:"2022",num:"8",subject:"ken",q:`教育に関する次のアからウまでの各記述について、最高裁判所の判例の趣旨に照らして、正しいものには○、誤っているものには×を付した場合の組合せを、後記１から８までの中から選びなさい。
ア．憲法第２６条の規定の背後には、子どもは学習権を有するとの観念が存在しており、子どもに対する教育は、専ら子どもの利益のために、教育を与える者の責務として行われるべきものであることからすると、教育の内容及び方法は、基本的に、子どもの教育の実施に当たる教師が決定すべきこととなる。
イ．教育内容に対する国家的介入は抑制的であることが要請され、誤った知識や一方的な観念を子どもに植え付けるような教育を施すことを国が強制することは許されないと解されるが、このことは、教育内容について決定する国の権能を否定する理由とはならない。
ウ．憲法第２６条第２項は、子女に教育を受けさせることを国民に義務付け、義務教育は無償とすると定めているのであるから、同項は、義務教育に関する限り、授業料のほか、教科書代金や学用品についても国が負担することを定めたものと解される。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"6"},{year:"2022",num:"9",subject:"ken",q:`刑事手続上の権利に関する次のアからウまでの各記述について、最高裁判所の判例の趣旨に照らして、それぞれ正しい場合には１を、誤っている場合には２を選びなさい。
ア．憲法第３１条の定める法定手続の保障は、直接には刑事手続に関するものであるが、行政手続にも及ぶと解すべき場合があり、その場合には行政処分の相手方に常に事前の告知、弁解、防御の機会を与える必要がある。
イ．憲法第３５条は、住居、書類及び所持品について、侵入、捜索及び押収を受けることのない権利を規定しているが、この規定の保障対象には、住居、書類及び所持品に準ずる私的領域に侵入されることのない権利が含まれる。
ウ．憲法第３８条第１項は、自己が刑事上の責任を問われるおそれのある事項について供述を強要されないことを保障するものであり、氏名の供述も、これによって自己が刑事上の責任を問われるおそれがあることから、原則として保障が及ぶ。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"212"},{year:"2022",num:"10",subject:"ken",q:`国家賠償請求に関する次のアからウまでの各記述について、最高裁判所の判例の趣旨に照らして、それぞれ正しい場合には１を、誤っている場合には２を選びなさい。
ア．公務員の不法行為について国又は公共団体に対し損害賠償を求める権利について、憲法第１７条は、「法律の定めるところ」による旨を規定している。これは、公務員のどのような行為によりいかなる要件で損害賠償責任を負うかを立法府の政策判断に委ねたものであって、立法府に無制限の裁量権を付与しているわけではない。
イ．公務員がその職務を行うに当たり、故意又は過失によって違法に他人に損害を加えた場合、国は当該公務員に代位して賠償責任を負う。しかし、国会議員には憲法第５１条で発言及び表決に対する免責特権が保障されているから、議員が国会で行った質疑等において個人の名誉を毀損する発言を行っても責任を問われることはないので、国が賠償責任を負うこともない。
ウ．国会議員の立法行為の国家賠償法上の違法の問題と立法内容の違憲の問題とは区別されるし、本質的に政治的なものである立法行為の適否を法的に評価するべきではない。したがって、国民に憲法上保障されている権利を違法に侵害することが明白な場合であっても、国会議員の立法行為が国家賠償法上の違法の評価を受けることはない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"122"},{year:"2022",num:"11",subject:"ken",q:`日本の憲法史に関する次のアからウまでの各記述について、それぞれ正しい場合には１を、誤っている場合には２を選びなさい。
ア．大日本帝国憲法の下では、天皇が有していた、作戦用兵の目的のために陸海軍を統括する統帥権について、国務大臣の輔弼の対象外とされたため、帝国議会は関与し得なかった。
イ．大日本帝国憲法の下では、内閣制度は憲法で規定されていなかった。また、帝国議会の権限が強く保障されていたので、各国務大臣は天皇ではなく帝国議会に対して責任を負うとされていた。
ウ．日本国憲法成立の法理に関する八月革命説は、ポツダム宣言の受諾によって天皇から国民に主権者が変更されたという説は現実社会の変化にそぐわない全くの擬制的な説明であると批判して、ポツダム宣言を受諾した１９４５年８月から革命が漸進的に進行し、占領体制から脱して国家主権を回復したときにその革命が成就し国民は真の主権者となった、とする説である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"122"},{year:"2022",num:"12",subject:"ken",q:`天皇に関する次のアからウまでの各記述について、正しいものには○、誤っているものには×を付した場合の組合せを、後記１から８までの中から選びなさい。
ア．天皇の国事行為には内閣の助言と承認が必要であるが、天皇が自ら発意し、内閣が閣議にかけて承認する場合、内閣は当該国事行為についての責任を負わない。
イ．天皇は、法律の定めるところにより、国事行為を委任することができるが、この委任については、内閣の助言と承認は必要ではない。
ウ．皇室に財産を譲り渡し、又は皇室が、財産を譲り受け、若しくは賜与することは、国会の議決に基づかなければならない、と憲法は定めている。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2022",num:"13",subject:"ken",q:`選挙権及び被選挙権に関する次のアからウまでの各記述について、最高裁判所の判例の趣旨に照らして、正しいものには○、誤っているものには×を付した場合の組合せを、後記１から８までの中から選びなさい。
ア．憲法第１５条第４項は、「すべて選挙における投票の秘密は、これを侵してはならない。」として投票の秘密を明文で保障しているが、選挙の公正が担保されることは、代表民主制の根幹をなすもので極めて重要であるから、選挙権のない者又は代理投票をした者の投票のような無効投票が存在する場合における議員の当選の効力を判断する手続の中で、こうした無効投票の投票先を明らかにするとしても、その限度では投票の秘密を侵害するものではない。
イ．労働組合は、団結権が保障されており、組合の団結を維持するための統制権の行使によって公職選挙における組合員の立候補の自由を制約することができるので、公職選挙において統一候補を擁立した場合、当該候補以外の組合員が立候補をやめなかったことを理由にその組合員を処分することができる。
ウ．組織的選挙運動管理者等が、買収等所定の選挙犯罪を犯して禁錮以上の刑に処せられた場合に、公職の候補者等であった者の当選を無効とし、かつ、これらの者が５年間当該選挙に係る選挙区において行われる当該公職に係る選挙に立候補することを禁止する旨を定めた公職選挙法の規定は、民主主義の根幹をなす公職選挙の公正を保持する極めて重要な法益を実現するための規定であり、立法目的は合理的であるとともに、立法目的を達成する手段として必要かつ合理的なものといえるから、憲法第１５条に違反しない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2022",num:"14",subject:"ken",q:`政党に関する次のアからウまでの各記述について、ｂの見解がａの見解の根拠となっている場合には１を、そうでない場合には２を選びなさい。
ア．ａ．政治資金の授受の規正その他の措置を講ずることを定めた政治資金規正法は、会社が政党及び政治資金団体に対して政治活動に関する寄附をすることを、一定の限度で認めている。
ｂ．政党は、議会制民主主義を支える不可欠の要素であり、かつ、国民の政治意思を形成する最も有力な媒体であるから、その健全な発展に協力することは、会社にとって当然の行為として期待される。
イ．ａ．国が政党に対し政党交付金による助成を行うことを定めた政党助成法は、政党に対する政党交付金の交付に当たっては、条件を付し、又はその使途について制限してはならないとしている。
ｂ．政党が議会制民主主義を支える不可欠の要素であることからすると、その結社としての活動の自由が制約されることはやむを得ない。
ウ．ａ．公職選挙法は、所属議員、直近の選挙における得票又は当該選挙における候補者に照らし一定以上の規模を有する政党のみに、衆議院及び参議院の比例代表選出議員の選挙に参加することを認めている。
ｂ．その所属する政党の規模の大小により、選挙への参加機会が均等でないことは、信条又は社会的身分による差別に当たる疑いがある。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"122"},{year:"2022",num:"15",subject:"ken",q:`内閣及び内閣総理大臣に関する次のアからウまでの各記述について、それぞれ正しい場合には１を、誤っている場合には２を選びなさい。
ア．最高裁判所の判例の趣旨に照らすと、内閣総理大臣は、憲法第７２条に規定された行政各部の指揮監督権限を閣議にかけて決定した方針に基づいて行使する必要があり、行政各部に対してその所掌事務について一定の方向で処理するよう指導、助言等の指示を与えたとしても、内閣としての事前の方針決定がなければ、事実上の影響力を行使したものにすぎず、内閣総理大臣の職務権限に属するものではない。
イ．内閣は憲法第７３条第１号により法律を誠実に執行する義務を負っているが、最高裁判所が違憲と判断した法律については、国会がこれを改廃する前であっても、内閣は、その執行を差し控えることができる。
ウ．憲法には内閣に法律案の提出権を認める規定はないものの、憲法では議院内閣制が採用されていることや、内閣に法律案の提出権を認めたからといって当然に国会の議決権が拘束されるわけではないことは、法律で内閣に法律案の提出権を付与することが憲法上禁じられていないと解する根拠となり得る。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"211"},{year:"2022",num:"16",subject:"ken",q:`裁判官の身分保障に関する次のアからウまでの各記述について、正しいものには○、誤っているものには×を付した場合の組合せを、後記１から８までの中から選びなさい。
ア．裁判官は、裁判により心身の故障のために職務を執ることができないと決定された場合を除いては、最高裁判所の裁判官については国民審査によることなしには、また、下級裁判所の裁判官については公の弾劾によることなしには、罷免されることはない。
イ．裁判官の罷免事由である「心身の故障」とは、裁判官の職務を遂行することができない程度の精神上の能力の喪失又は身体的故障で、相当長期間にわたって継続することが確実に予想される場合をいうと解されており、一時的な故障は、たとえそれがどのように重大なものであってもこれに当たらない。
ウ．憲法第７８条は、裁判官の懲戒処分は行政機関が行うことはできないと規定しているところ、これは、裁判官の懲戒処分は裁判所が行うべきことを定めているものと解されており、その手続については、法律上、裁判により行うことが規定されている。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"5"},{year:"2022",num:"17",subject:"ken",q:`司法権の限界に関する次のアからウまでの各記述について、最高裁判所の判例の趣旨に照らして、それぞれ正しい場合には１を、誤っている場合には２を選びなさい。
ア．地方議会の議員に対する出席停止の懲罰に関し、その懲罰を受けた議員が取消しを求める訴えは、法令の適用によって終局的に解決し得る法律上の争訟に当たるところ、議会により出席停止の懲罰処分を科されると、その議員は、住民の負託を受けた議員としての責務を十分に果たすことができなくなるから、当該処分が議会の自律的な権能に基づいてなされたものとして、議会に一定の裁量が認められるとしても、裁判所は、常にその適否を判断することができ、司法審査の対象となる。
イ．政党が組織内の自律的運営として党員に対してした除名処分は、原則として自律的な解決に委ねるのが相当であり、その除名処分が一般市民法秩序と直接の関係のない内部的な問題にとどまる限り、司法審査の対象とはならず、また、一般市民としての権利利益を侵害する場合であっても、その処分の当否は、当該政党の自律的な規範が公序良俗に反するなどの特段の事情のない限りその規範に照らし、規範がない場合は条理に基づき、適正な手続にのっとってされたか否かによって決すべきであり、司法審査もこの点に限られる。
ウ．三権分立の制度の下において、司法権の行使について、ある限度の制約は免れず、あらゆる国家行為が無制限に司法審査の対象となるわけではないと解すべきであるところ、衆議院の解散のような直接国家統治の基本に関する高度に政治性のある国家行為は、国会等の政治部門の判断に委ねられ、最終的に国民の政治判断に委ねられているものと解すべきであるから、衆議院の解散が違法であることを前提とする国会議員の歳費の支払を請求する訴えは、法律上の争訟に当たるとはいえない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"112"},{year:"2022",num:"18",subject:"ken",q:`財政に関する次のアからウまでの各記述について、正しいものには○、誤っているものには×を付した場合の組合せを、後記１から８までの中から選びなさい。
ア．予算の裏付けを必要とする法律が成立しているにもかかわらず、その執行に必要となる予算が不存在ないし不成立の場合、法律を誠実に執行すべき内閣としては、補正予算の提出、経費の流用、予備費の支出などにより、対処することが求められる。
イ．予備費は、予見し難い予算の不足に充てるため、国会の議決に基づいて設けられ、内閣の責任で支出されるものである。そのため、内閣は、その支出について、事後に国会の承諾を求める必要はない。
ウ．内閣は、毎年の国の収入支出の決算について、会計検査院の検査を経た上で、翌年度国会に提出しなければならない。提出された決算については、各議院で審議され、それを認めるか否かの審査がなされるが、そこで不承認とされても、決算の効力に影響は生じない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"3"},{year:"2022",num:"19",subject:"ken",q:`条例に関する次のアからウまでの各記述について、最高裁判所の判例の趣旨に照らして、正しいものには○、誤っているものには×を付した場合の組合せを、後記１から８までの中から選びなさい。
ア．憲法第９４条は、法律の範囲内で条例制定権を認めているが、ある事項について国の法令中にこれを規制する明文の規定がない場合であれば、当該事項について規制を設ける条例の規定は、国の法令に違反しない。
イ．条例は、公選の議員をもって組織する地方公共団体の議会の議決を経て制定される自治立法であって、国民の公選した議員をもって組織する国会の議決を経て制定される法律に類するものであるから、条例によって刑罰を定める場合、法律による条例への委任は、一般的・包括的委任で足りる。
ウ．憲法第９４条は、地方公共団体に条例制定権を認めており、ある事項を条例によって規制する結果として、地方公共団体ごとにその取扱いに差異が生じることがあり得るから、ある事項について条例によって刑罰を定める場合、地域によって刑罰の内容に差異が生じることも許容され得る。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2022",num:"20",subject:"ken",q:`憲法改正に関する次のアからウまでの各記述について、それぞれ正しい場合には１を、誤っている場合には２を選びなさい。
ア．憲法改正の公布は、天皇が内閣の助言と承認のもとで「国民の名で」行うものとされており、「国民の名で」というのは、憲法改正が主権の存する国民の意思によることを明らかにする趣旨である。
イ．憲法改正は、国会が発議し、国民の承認を経ることによって成立するもので、国民主権に関わることから、特別の国民投票又は直近の衆議院議員総選挙の際に行われる投票においてその過半数の賛成を必要とする。
ウ．憲法を始源的に創設する憲法制定権力と憲法によって与えられた憲法改正権とを区別する考えは、憲法改正には法的な限界があるとする見解の根拠となる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"121"},{year:"2022",num:"1",subject:"min",q:`未成年者に関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．未成年者が子を認知した場合、その未成年者の親権者は、認知を取り消すことができない。
イ．営業を許された未成年者がした法律行為は、その営業に関しないものであっても、取り消すことができない。
ウ．親権者の同意を得ずに契約を締結した未成年者は、成年に達するまでは、親権者の同意を得なければ、自らその契約を取り消すことができない。
エ．親権者の同意を得ずに契約を締結した未成年者は、成年に達するまでは、親権者の同意を得なければ、自らその契約の追認をすることができない。
オ．未成年者が、親権者の同意があると誤信させるために詐術を用いて契約を締結した場合、その契約は取り消すことができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2022",num:"2",subject:"min",q:`成年後見に関する次のアからオまでの各記述のうち、正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．成年被後見人が土地の贈与を受けた場合、その後見人は、その贈与を取り消すことができない。
イ．成年被後見人ＡがＢの意思表示を受けた場合、Ａの後見人Ｃがその意思表示を知った後は、Ｂは、その意思表示をもってＡに対抗することができる。
ウ．成年被後見人Ａが未成年者Ｂの法定代理人としてした行為は、Ａの行為能力の制限によっては取り消すことができない。
エ．成年被後見人Ａがその財産を管理する後見人に対して権利を有するときは、Ａが行為能力者となった時又は後任の法定代理人が就職した時から法定の期間を経過するまでの間は、その権利について、時効は完成しない。
オ．成年被後見人が協議上の離婚をするときには、その後見人の同意を得なければならない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2022",num:"3",subject:"min",q:`意思表示に関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．隔地者に対する意思表示は、相手方が了知するまでは効力を生じない。
イ．未成年者Ａと契約を締結したＢが、Ａの法定代理人Ｃに対してその契約を追認するかどうかを確答すべき旨の催告をした。この場合において、ＣがＢの定めた期間内に確答を発しないときは、Ｃは、その契約を取り消したものとみなされる。
ウ．心裡留保を理由とする意思表示の無効は、過失のある善意の第三者に対抗することができない。
エ．錯誤による意思表示は、その錯誤が表意者の重大な過失によるものであった場合において、相手方が表意者と同一の錯誤に陥っていたときは、取り消すことができない。
オ．相手方に対する意思表示について第三者が強迫を行った場合には、相手方がその事実を知ることができなかったとしても、その意思表示は取り消すことができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2022",num:"4",subject:"min",q:`取消しに関する次のアからオまでの各記述のうち、正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．取り消すことができる法律行為に基づく債務を保証した者は、その法律行為を取り消すことができない。
イ．被保佐人Ａがした法律行為を法定代理人が追認したときは、Ａは、以後、その法律行為を取り消すことができない。
ウ．Ａが第三者Ｂの詐欺によってＣに不動産を売る旨の意思表示をしたときは、その取消しは、Ｂ及びＣの双方に対する意思表示によってする。
エ．被保佐人Ａがした金銭の借入れが取り消された場合、Ａは、それまでに借入金を賭博で費消していたときでも、借入金全額を貸主に返還する義務を負う。
オ．取消権は、取り消すことができる行為をした時から５年間行使しないときは、時効によって消滅する。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2022",num:"5",subject:"min",q:`時効の援用に関する次のアからオまでの各記述のうち、判例の趣旨に照らし誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．後順位抵当権者は、先順位抵当権の被担保債権の消滅時効を援用することができる。
イ．Ａから甲土地上の建物を賃借しているＢは、Ａが取得時効に必要な期間、甲土地を占有している場合であっても、甲土地のＡの取得時効を援用することができない。
ウ．甲土地に抵当権が設定されてその旨の登記がされた後、甲土地を譲り受けた者は、その抵当権の被担保債権の消滅時効を援用することができる。
エ．詐害行為取消権を行使された受益者は、取消債権者の被保全債権の消滅時効を援用することができる。
オ．主たる債務者が時効の利益を放棄した場合、保証人は主たる債務の消滅時効を援用することができない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2022",num:"6",subject:"min",q:`不動産物権変動に関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．Ａがその所有する甲建物をＢに売却した場合において、甲建物の保存登記が未了であったときは、Ｂは、自己名義の登記がなくても、所有権の取得を第三者に対抗することができる。
イ．甲土地を所有するＡが死亡して子Ｂ及びＣが相続し、ＢとＣの遺産分割協議により甲土地はＢの単独所有とされた。その後、Ｃが、甲土地につきＣの単独所有とする登記をした上で、これをＤに売却したときは、Ｂは、Ｄに対し、甲土地の単独所有権の取得を対抗することができない。
ウ．Ａがその所有する甲土地にＢのために地上権を設定し、その旨の登記がされない間に甲土地にＣのために抵当権を設定してその旨の登記がされた後、Ｂの地上権の設定の登記がされた。この場合において、Ｃの抵当権が実行され、Ｄが甲土地を買い受けてその旨の登記がされたときは、Ｂは、Ｄに対し、地上権の取得を対抗することができる。
エ．Ａがその所有する甲土地にＢのために抵当権を設定し、その旨の登記がされた場合において、その登記をＣがＢの知らない間に不法に抹消したときは、Ｂは、再度登記がされない限り、抵当権の設定を第三者に対抗することができない。
オ．Ａがその所有する甲土地を相続人Ｂに承継させる旨の遺言をして死亡した場合には、Ｂは、Ｂと共にＡを相続したＣに対し、登記がなくても、甲土地の単独所有権の取得を対抗することができる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2022",num:"7",subject:"min",q:`物権の混同に関する次のアからオまでの各記述のうち、誤っているものを組み合わせたものは、後記１から５までのうちどれか。なお、次のアからオまでの各記述中の抵当権及び地上権は、いずれも登記がされているものとする。
ア．Ａが、その所有する甲土地に、Ｂのために第一順位の抵当権を、Ｃのために第二順位の抵当権をそれぞれ設定していた場合において、ＢがＡから甲土地を買い受けたときは、Ｂの抵当権は消滅する。
イ．Ａがその所有する甲土地にＢのために地上権を設定し、Ｂがこの地上権にＣのために抵当権を設定していた場合において、Ａが死亡し、ＢがＡを単独相続したときは、Ｂの地上権は消滅する。
ウ．Ａがその所有する甲土地にＢ社のために地上権を設定し、Ｂ社がこの地上権にＣ社のために抵当権を設定していた場合において、Ｂ社とＣ社が合併したときは、Ｃ社の抵当権は消滅する。
エ．Ａが、その所有する甲土地に、Ｂのために抵当権を設定した後、Ｃのために地上権を設定していた場合において、ＣがＡから甲土地の所有権の譲渡を受けたときは、Ｃの地上権は消滅する。
オ．Ａがその所有する甲土地にＢのために地上権を設定し、Ｂが甲土地上に建築した乙建物をＣに賃貸していた場合において、Ａが死亡し、ＢがＡを単独相続したときは、Ｂの地上権は消滅する。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2022",num:"8",subject:"min",q:`動産の引渡しに関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．Ａがその所有する絵画甲をＢに預けたままＣに売却した場合において、ＡがＢに対して以後Ｃのために甲を占有すべきことを命じ、Ｂがこれを承諾したときは、Ｃは、甲の所有権の取得を第三者に対抗することができる。
イ．Ａはその所有する登録済みの自動車甲をＢに売却して現実に引き渡したが、登録名義はＡのままであった。その後、Ａが甲をＣに売却し、登録名義をＣに移転した場合、Ｂは、甲の所有権の取得をＣに対抗することができる。
ウ．Ａは、その所有する絵画甲をＢに売却したが、甲の占有を継続し、以後Ｂのために占有する意思を表示した。その後、ＡはＢへの売却の事実を知っているＣに甲を売却し、現実に引き渡した。この場合、Ｃは、甲の所有権の取得をＢに対抗することができる。
エ．Ａはその所有する絵画甲をＢに預けていたが、Ｂは、Ａに無断で、Ｂが甲の所有者であると過失なく信じているＣに甲を売却した。Ｂは甲の占有を継続し、以後Ｃのために占有する意思を表示した。その後ＡがＢから甲の返還を受けた場合、ＣはＡに対し、所有権に基づいて甲の引渡しを請求することができない。
オ．Ａからその所有する絵画甲を預かり占有していたＢが、Ａから甲を購入した場合において、占有をＢに移転する旨の意思表示がＡＢ間でされたときは、Ｂは、甲の所有権の取得を第三者に対抗することができる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2022",num:"9",subject:"min",q:`袋地（他の土地に囲まれて公道に通じない土地）である甲土地の所有者Ａが、公道に至るために囲繞地（袋地を囲んでいる他の土地）であるＢ所有の乙土地を通行する権利（以下「囲繞地通行権」という。）を有する場合に関する次のアからオまでの各記述のうち、判例の趣旨に照らし誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．Ａが乙土地を通行する場所及び方法は、Ａのために必要であり、かつ、乙土地にとって損害が最も少ないものを選ばなければならない。
イ．Ａが乙土地上に通路を開設するためには、Ｂの承諾を得なければならない。
ウ．甲土地の地上権者Ｃは、Ｂの承諾を得なくても、乙土地を通行することができる。
エ．Ａが甲土地をＣから買い受けてその所有者となっていた場合には、Ａは、その所有権移転登記がなくても、乙土地を通行することができる。
オ．Ａが甲土地に隣接する丙土地を買い取り、丙土地を通行して公道に至ることができるようになった場合でも、Ａは乙土地について囲繞地通行権を有する。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2022",num:"10",subject:"min",q:`Ａ、Ｂ及びＣが甲土地を各３分の１の割合で共有している場合に関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．甲土地がＤによって不法に占有されている場合には、Ａは、Ｄに対し、甲土地の不法占有によりＡ、Ｂ及びＣが被った損害の全部の賠償を請求することができる。
イ．ＡがＢ及びＣの同意を得ずに農地である甲土地の宅地造成工事を完了した場合には、原状回復ができるときであっても、Ｂは、甲土地の原状回復を請求することができない。
ウ．ＡがＢに対する甲土地の管理費用の支払義務を履行しないまま１年が経過したときは、Ｂは、相当の償金を支払ってＡの持分を取得することができる。
エ．甲土地について現物分割の方法により共有物の分割をした場合には、Ａは、その分割によってＡ所有とされた部分につき、単独所有権を原始取得する。
オ．ＡがＢに対して甲土地の管理費用の支払請求権を有するときは、現物分割の方法により甲土地につき共有物の分割をするに際し、Ｂに帰属すべき部分をもって、その弁済に充てることができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2022",num:"11",subject:"min",q:`留置権に関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．ＡがＢの所有する甲建物を権原がないことを知りながら占有を開始した場合であっても、その後にＡが甲に関して生じた債権を取得したときは、Ａは、その債権の弁済を受けるまで、甲を留置することができる。
イ．Ａは、その所有する動産甲をＢに売り、Ｂは甲をＣに転売したが、Ａが甲の占有を続けている。この場合において、Ａは、Ｃからの引渡請求に対し、Ｂから代金が支払われるまで、甲について留置権を行使することができる。
ウ．留置権者は、留置物の滅失によって債務者が受けるべき保険金請求権に対しても、これを差し押さえることにより留置権を行使することができる。
エ．留置権者が債務者の承諾を得ずに留置物を賃貸した場合であっても、その賃貸が終了して留置権者が留置物の返還を受けていたときは、債務者は、留置権の消滅を請求することができない。
オ．留置権者が留置物の占有を奪われたとしても、占有回収の訴えによってその物の占有を回復すれば、留置権は消滅しない。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2022",num:"12",subject:"min",q:`Ａは、Ｂに対し、自己が所有する工作機械甲を売り、甲を引き渡した。この場合における動産の先取特権又は所有権留保特約（代金債権を担保する目的でされた、甲の所有権は代金完済時に移転する旨の特約）に関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．Ｂが弁済期到来後も代金債務を履行しない場合、Ａは、先取特権に基づき、Ｂに対して甲の引渡しを請求することができる。
イ．Ｂが甲をＣに売り、占有改定による引渡しがされた場合には、Ａは、Ｂが弁済期到来後も代金債務を履行しないときであっても、先取特権に基づいて甲を差し押さえることはできない。
ウ．Ｂが甲につきＣのための質権を設定し、引渡しを了した場合において、Ｃが質権を取得した時点でＡの先取特権があることを知らなかったときは、Ｃの質権は、Ａの先取特権に優先する。
エ．ＡＢ間の売買契約に所有権留保特約が付されていた場合、Ｂが代金完済前にＣから金銭を借り入れて甲に譲渡担保権を設定し、占有改定により甲の占有をＣに移転したときは、その後Ｂが代金の支払を怠ったとしても、Ａは、甲を処分して残代金の回収をすることはできない。
オ．ＡＢ間の売買契約に所有権留保特約が付されていた場合、Ｂが代金の支払を遅滞し、期限の利益を喪失した状態で、甲をＣ所有の土地に無断で放置したとしても、Ｃは、Ａに対して甲の撤去を請求することができない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2022",num:"13",subject:"min",q:`ＡのＢに対する貸金債権甲を被担保債権とし、ＢのＣに対する貸金債権乙を目的とする質権がＢにより設定され、ＢがＣに対して口頭でその旨の通知をした。この場合に関する次のアからオまでの各記述のうち、誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．Ｃは、Ｂから質権設定の通知を受けるまでにＢに対して債権乙に係る債務を弁済していた場合であっても、これをもってＡに対抗することができない。
イ．債権譲渡登記ファイルに質権の設定の登記がされたときは、Ａは、Ｃ以外の第三者に対して質権の設定を対抗することができる。
ウ．Ａは、債権甲及び債権乙が共に弁済期にあるときは、債権甲の金額の範囲内でＣから債権乙を直接取り立てることができる。
エ．債権甲の弁済期より前に債権乙の弁済期が到来したときは、Ａは、Ｃにその弁済をすべき金額を供託させることができる。
オ．Ａの債権質の効力は、債権乙に係る利息には及ばない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2022",num:"14",subject:"min",q:`抵当権に関する次のアからオまでの各記述のうち、正しいものを組み合わせたものは、後記１から５までのうちどれか。なお、次のアからオまでの各記述中の抵当権は、いずれも登記がされているものとする。
ア．Ａは、Ｂに対する債務を担保するため、Ａの所有する甲土地に、抵当権を設定した。この場合、Ｂが抵当権をＡの一般債権者Ｃに譲渡したときは、これをＢがＡに通知し、又はＡが承諾しなければ、Ｃは、Ａに抵当権の譲渡を対抗することができない。
イ．Ａは、その所有する甲土地に、Ｂのために第一順位の、Ｃのために第二順位の各抵当権を設定した。この場合、ＢがＣのために抵当権の順位を放棄したときは、ＢとＣの抵当権の順位が入れ替わる。
ウ．Ａは、その所有する甲土地に、Ｂのために第一順位の抵当権を、Ｃのために第二順位の抵当権を、Ｄのために第三順位の抵当権をそれぞれ設定した。この場合、抵当権の順位をＤ、Ｃ、Ｂの順に変更するには、Ｃの合意を要しない。
エ．Ａは、その所有する更地である甲土地にＢのために抵当権を設定し、その後、甲土地上に乙建物を建築した。この場合、Ｂが抵当権を実行し、甲土地と乙建物とが一括して競売されたときは、Ｂは乙建物の売却代金からも優先弁済を受けることができる。
オ．Ａは、その所有する甲土地にＢのために抵当権を設定し、その後、甲土地をＣに売却した。この場合、ＣがＢの請求に応じてＢにその代価を弁済したときは、抵当権は消滅する。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．イ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2022",num:"15",subject:"min",q:`甲土地上の法定地上権の成否に関する次のアからオまでの各記述のうち、判例の趣旨に照らし誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．甲土地及びその土地上の乙建物を所有していたＡが、甲土地に抵当権を設定した後に、乙建物を第三者に譲渡した。その後、抵当権が実行されＣが甲土地を取得したときは、法定地上権が成立する。
イ．Ａ所有の甲土地を賃借してその土地上に乙建物を所有していたＢが乙建物に抵当権を設定した後、Ａが乙建物の所有権を取得した。その後、抵当権が実行されＣが乙建物を取得したときは、法定地上権が成立する。
ウ．Ａ所有の甲土地を賃借してその土地上にＢが乙建物を所有していたところ、Ａが甲土地に第一順位の抵当権を設定した後、甲土地をＢに譲渡し、次いでＢが甲土地に第二順位の抵当権を設定した。その後、第二順位の抵当権が実行され、Ｃが甲土地を取得したときは、法定地上権が成立する。
エ．Ａ所有の甲土地を賃借してその土地上に乙建物を所有していたＢが、乙建物に第一順位の抵当権を設定した後、甲土地をＡから譲り受け、次いで乙建物に第二順位の抵当権を設定した。その後、第一順位の抵当権が実行され、Ｃが乙建物を取得したときは、法定地上権が成立する。
オ．Ａが甲土地及びその土地上の乙建物を所有していた。この場合において、甲土地の登記名義が前所有者Ｂのままであったとしても、乙建物に抵当権が設定され、抵当権の実行によりＣが乙建物を取得したときは、法定地上権が成立する。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2022",num:"16",subject:"min",q:`特定物の売買の売主が目的物の引渡債務について履行の提供をした場合に関する次のアからオまでの各記述のうち、判例の趣旨に照らし誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．買主が目的物の受領を拒み、その後に売主が買主に対して売買代金の支払を請求した場合、買主は、売主が履行の提供を継続し、又は改めて履行の提供をしなければ、同時履行の抗弁権を主張して売買代金の支払を拒むことができる。
イ．買主が目的物を受領することができない場合、売主は、履行の提供をした時から引渡しが完了するまで、契約及び取引上の社会通念に照らして定まる善良な管理者の注意をもって、目的物を保存しなければならない。
ウ．買主が目的物を受領することができない場合、売主が目的物の保管を続けるために必要となる費用は、買主が負担しなければならない。
エ．買主が目的物を受領することができない場合、売主は、履行の提供をした時から、目的物の引渡債務につき遅滞の責任を免れる。
オ．買主が目的物の受領を拒み、その後に、売主及び買主の双方の責めに帰することができない事由により目的物が滅失した場合、買主は契約を解除することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2022",num:"17",subject:"min",q:`履行の強制に関する次のアからオまでの各記述のうち、正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．債務者が不特定物の引渡債務を履行しない場合、債権者は、債務名義を得た上で、代替執行の方法により履行の強制をすることができる。
イ．債務者が所有権移転登記義務を履行しない場合、債権者は、債務名義を得た上で、間接強制の方法により履行の強制をすることができる。
ウ．債務者が一定以上の高さの建物を建築しない債務に反してその高さを超える建物を建築した場合、債権者は、その高さを超える部分の除去について、債務名義を得た上で、代替執行の方法により履行の強制をすることができる。
エ．債務者がその居住する建物の明渡債務を履行しない場合、債権者は、債務名義を得た上で、直接強制の方法により履行の強制をすることができる。
オ．債務者が小説を執筆する債務を履行しない場合、債権者は、債務名義を得た上で、間接強制の方法により履行の強制をすることができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2022",num:"18",subject:"min",q:`ＡのＢに対する債権を保全するための債権者代位権に関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．Ａが債権者代位権に基づき、ＢのＣに対する金銭債権の履行を請求した場合において、ＣがＢに対して既に当該金銭債務をその弁済期前に弁済していたときは、Ｃは、弁済による債権の消滅をＡに対抗することができない。
イ．ＢがＣに対する金銭債権の支払を求めて訴えを提起しているときは、Ａは、ＢのＣに対する金銭債権を代位行使することができない。
ウ．ＡがＢに対し、ＢがＣに対し、それぞれ金銭債権を有する場合には、Ａは、自己の債権の額を超えて、ＢのＣに対する債権を代位行使することができない。
エ．借地上の建物の賃借人Ａは、建物賃貸人である借地権者Ｂが土地賃貸人Ｃに対して有する建物買取請求権を代位行使することができる。
オ．Ｂが土地をその所有者Ｃから買い受け、これをＡに転売した場合において、ＢがＣに対する所有権移転登記手続請求権を行使しないときは、Ａは、ＢのＣに対する所有権移転登記手続請求権を代位行使して、登記を直接Ａに移転すべき旨をＣに請求することができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2022",num:"19",subject:"min",q:`保証に関する次のアからオまでの各記述のうち、正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．制限行為能力を理由に取り消すことができる債務を保証した者は、保証契約締結時にその取消しの原因を知っていたときは、主たる債務の不履行の場合又はその債務の取消しの場合においてこれと同一の目的を有する独立の債務を負担したものと推定される。
イ．主たる債務者の意思に反して保証がされた場合において、保証債務の弁済をした保証人は、主たる債務者に対し、その弁済の当時に主たる債務者が利益を受けた限度において求償権を有する。
ウ．主たる債務者の委託を受けないで保証がされた場合において、主たる債務者が債務の弁済をしたが、保証人にその事実を通知しなかった。保証人が主たる債務者による弁済の事実を知らないで保証債務の弁済をしたときは、保証人は、その弁済を有効とみなすことができる。
エ．債権者から保証債務の履行請求を受けた保証人が、債権者に対して有する自己の債権をもって相殺を援用したときは、主たる債務は対当額において消滅する。
オ．数人の連帯保証人の一人が債権者に対して保証債務の弁済をした場合は、その額が自己の負担部分を超えるかどうかにかかわらず、他の連帯保証人に対して求償をすることができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2022",num:"20",subject:"min",q:`ＡのＢに対する売買代金債権甲に譲渡禁止の特約がある場合に関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．Ａが将来発生すべき債権甲をＣに譲渡し、Ｂに対してその通知をした後、ＡＢ間で債権甲につき譲渡禁止の特約をし、その後債権甲が発生した。この場合には、Ｂは、Ｃに対し、Ｃがその特約の存在を知っていたものとみなして、債務の履行を拒むことができる。
イ．Ｃが譲渡禁止の特約の存在を知りながら債権甲を譲り受けた場合において、ＣがＢに対して相当の期間を定めてＣへの履行の催告をしたが、その期間内に履行がないときは、Ｂは、Ｃに対し、譲渡禁止を理由として債務の履行を拒むことができない。
ウ．Ｃが譲渡禁止の特約の存在を知りながら債権甲を譲り受け、その後Ｄにこれを譲渡した場合において、Ｄがその特約の存在について善意無重過失であったときは、Ｂは、Ｄに対し、譲渡禁止を理由として債務の履行を拒むことができない。
エ．債権甲が譲渡された場合には、Ｂは、債権甲の全額に相当する金銭を供託することができる。
オ．Ｃが、譲渡禁止の特約の存在を知りながら債権甲を譲り受けた場合において、Ｃの債権者Ｄが債権甲に対する強制執行をしたときは、Ｂは、Ｄに対し、譲渡禁止を理由として債務の履行を拒むことができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2022",num:"21",subject:"min",q:`弁済の目的物の供託に関する次のアからオまでの各記述のうち、判例の趣旨に照らし誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．弁済者は、口頭の提供をしても債権者が受領を拒むことが明確である場合には、弁済の目的物を直ちに供託することができる。
イ．弁済者は、債権者を確知することができず、それについて過失がないときは、弁済の目的物を供託することができる。
ウ．弁済者は、弁済の目的物を適法に供託した場合には、その目的物を取り戻すことができない。
エ．弁済者は、債権者のために弁済の目的物を供託したときは、遅滞なく、債権者に供託の通知をしなければならない。
オ．弁済者が債権者のために弁済の目的物を供託した場合には、その債権は、債権者が供託物の還付を受けた時に消滅する。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2022",num:"22",subject:"min",q:`相殺に関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．不法行為によって傷害を受けた被害者Ａは、加害者Ｂに対する損害賠償債権を自働債権とし、ＢがＡに対して有する貸金債権を受働債権とする相殺をすることができない。
イ．弁済期が到来していない債権の債務者は、その債権を受働債権とする相殺をすることができない。
ウ．返還時期の定めのない金銭消費貸借契約の貸主は、返還の催告をしてから相当期間が経過した後でなければ、その貸金債権を自働債権とする相殺をすることができない。
エ．ＡがＢに対して甲債権を有し、ＣがＡに対して消滅時効が完成したがその援用がされていない乙債権を有している。この場合において、ＢがＣから乙債権を譲り受け、その後Ａが消滅時効を援用したときは、Ｂは、乙債権を自動債権とする相殺をすることができない。
オ．差押えを受けた債権の第三債務者は、差押え前から有していた差押債務者に対する債権を自働債権とする相殺をもって差押債権者に対抗することができる。`,c1:"１．ア エ",c2:"２．ア ウ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2022",num:"23",subject:"min",q:`契約の解除等に関する次のアからオまでの各記述のうち、誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．期間の定めのない使用貸借契約が締結された場合において、使用及び収益の目的を定めなかったときは、貸主は、いつでも契約を解除することができる。
イ．期間の定めのない動産賃貸借契約の賃貸人は、いつでも解約の申入れをすることができる。
ウ．請負人は、仕事の完成前であれば、いつでも損害を賠償して請負契約を解除することができる。
エ．期間の定めのある有償の委任契約の受任者は、期間の満了前に契約を解除することができる。
オ．無償の寄託契約が書面によって締結された場合、受寄者は、寄託物を受け取るまでは契約を解除することができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2022",num:"24",subject:"min",q:`売買契約における解約手付に関する次のアからオまでの各記述のうち、判例の趣旨に照らし誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．売買契約において交付された手付は、解約手付と推定される。
イ．買主は、売主が契約の履行に着手していても、自ら履行に着手するまでは、解約手付による解除をすることができる。
ウ．買主は、自ら契約の履行に着手していても、売主が履行に着手するまでは、解約手付による解除をすることができる。
エ．売主は、買主に対し、手付金の倍額を償還する旨を口頭で告げて、解約手付による解除をすることができる。
オ．買主が解約手付による解除をした場合、売主に手付金の額を超える損害が生じたとしても、買主は損害賠償義務を負わない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2022",num:"25",subject:"min",q:`民法上の消費貸借に関する次のアからオまでの各記述のうち、誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．書面によらない消費貸借は、当事者の一方が種類、品質及び数量の同じ物をもって返還することを約して相手方から金銭その他の物を受け取ることによって、その効力を生ずる。
イ．書面でする消費貸借は、借主が貸主から目的物を受け取るまで、各当事者が解除をすることができる。
ウ．貸主は、特約がなければ、借主に対して利息を請求することができない。
エ．当事者が返還の時期を定めたときは、借主は、その時期の前に返還をすることができない。
オ．貸主から引き渡された物が種類又は品質に関して契約の内容に適合しないものであるときは、借主は、その物の価額を返還することができる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2022",num:"26",subject:"min",q:`ＡがＢからその所有する甲建物を賃借してＢに敷金を交付した場合に関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．Ｂは、Ａが賃料を支払わない場合、未払賃料額が敷金額の範囲内であっても、Ａが甲建物に備え付けた動産について先取特権を行使することができる。
イ．Ａは、賃貸借契約の存続中、Ｂに対して、賃料債務の弁済に敷金を充てるよう請求することができる。
ウ．Ａは、賃貸借契約が終了したときは、敷金が返還されるまで甲建物を留置することができる。
エ．Ａが賃借権をＣに適法に譲渡したときは、ＡはＢに対して敷金の返還を請求することができる。
オ．ＢがＣに甲建物を譲渡し、Ｃが賃貸人たる地位を承継した場合において、ＡがＢに対して賃貸借契約上の未履行の債務を負担していたときは、敷金はその債務の弁済に充当され、残額があれば、その返還に係る債務がＣに承継される。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2022",num:"27",subject:"min",q:`委任に関する次のアからオまでの各記述のうち、誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．当事者が委任事務の履行による成果に対して報酬の支払を約した場合において、その成果が引渡しを要するときは、委任者は、その成果の引渡しと同時に報酬を支払わなければならない。
イ．受任者は、やむを得ない事由がなくても、委任者の許諾を得ることなく復受任者を選任することができる。
ウ．委任者は、受任者に不利な時期には、委任を解除することができない。
エ．受任者は、委任事務を処理するのに必要と認められる費用を支出したときは、委任者に対し、その費用及び支出の日以後におけるその利息の償還を請求することができる。
オ．委任の解除は、将来に向かってのみその効力を生ずる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2022",num:"28",subject:"min",q:`事務管理に関する次のアからオまでの各記述のうち、判例の趣旨に照らし誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．管理者は、事務の管理をするにつき自己に過失なく損害を受けたときでも、本人に対し、その賠償を請求することができない。
イ．事務管理の開始後に、その管理が本人の意思に反することが明らかになった場合、管理者は、本人に対し、既に支出した費用の償還を請求することができない。
ウ．管理者が本人の名でした法律行為の効果は、事務管理の効果として直接本人に帰属する。
エ．管理者は、その事務が終了した後、本人に対し、遅滞なくその経過及び結果を報告しなければならない。
オ．管理者は、本人の財産に対する急迫の危害を免れさせるために事務管理をした場合には、悪意又は重大な過失があるのでなければ、これによって生じた損害を賠償する責任を負わない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2022",num:"29",subject:"min",q:`不法行為に関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．不法行為による損害賠償債務は、加害者が被害者から請求を受けた時から遅滞に陥る。
イ．不法行為による損害賠償の請求権は、不法行為の時から２０年間行使しないときは、時効によって消滅する。
ウ．名誉感情を侵害された場合、被害者は、これを理由として、名誉感情を回復するのに適当な処分を請求することができない。
エ．胎児Ａの父が不法行為により死亡した場合、Ａの母は、Ａが生まれる前であっても、Ａの代理人として、加害者に対し、Ａの固有の慰謝料を請求することができる。
オ．Ａの不法行為に対し、Ｂが第三者Ｃの権利を防衛するためＡに加害行為をしたときは、それがやむを得ないものであったとしても、ＢはＡに対し損害賠償責任を負う。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2022",num:"30",subject:"min",q:`婚姻の解消又は取消しに関する次のアからオまでの各記述のうち、正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．婚姻によって氏を改めた者が、婚姻中に称していた氏を協議上の離婚後も称するためにする届出は、離婚の届出と同時にする必要がある。
イ．夫婦の一方が死亡したときは、婚姻によって氏を改めた生存配偶者は、姻族関係を終了させなくても、婚姻前の氏に復することができる。
ウ．父母が協議上の離婚に当たって子の親権者を父と定めたときは、母は、家庭裁判所に対し、親権者の変更を請求することができない。
エ．未成年の子の父母は、子の監護に要する費用の分担に関する協議が調わない場合であっても、協議上の離婚をすることができる。
オ．婚姻の取消しは、婚姻時に遡ってその効力を生ずる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2022",num:"31",subject:"min",q:`いずれも婚姻していないＡ女とＢ男との間に子Ｃが生まれた場合に関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．ＡとＣとの法律上の母子関係は、認知によって生ずる。
イ．Ｂは、遺言によってＣを認知することができる。
ウ．Ｃは、Ｂが死亡したときは、以後ＢＣ間の父子関係についての認知の訴えを提起することができない。
エ．ＡＣ間及びＢＣ間の親子関係が共に生じた場合には、ＣはＢの氏を称する。
オ．ＡＣ間及びＢＣ間の親子関係が共に生じ、かつ、ＡとＢが婚姻した場合には、Ｃに対する親権はＡとＢが共同して行う。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2022",num:"32",subject:"min",q:`養子に関する次のアからオまでの各記述のうち、正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．Ａが、夫Ｂとその前妻との間の子Ｃの直系卑属である未成年者Ｄを養子とするためには、Ｂとともに養子縁組をすることを要しない。
イ．養子が１５歳未満であるときは、協議上の離縁は、養子の離縁後にその法定代理人となるべき者と養親との協議によってする。
ウ．養子縁組後に生まれた養子の子と養親との親族関係は、離縁により終了する。
エ．養子は、養親と離縁しない限り、他の者の養子となることはできない。
オ．嫡出でない子が養子となる特別養子縁組を成立させるためには、その子を認知した父の同意を要しない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2022",num:"33",subject:"min",q:`相続による権利義務の承継に関する次のアからオまでの各記述のうち、判例の趣旨に照らし誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．個人根保証契約における保証人の相続人は、主債務者と債権者が相続開始後に締結した契約に基づく主債務について履行する責任を負わない。
イ．土地の使用貸借の借主が死亡した場合、借主の相続人は、使用借権を相続して、その土地を使用し続けることができない。
ウ．土地を権原なく占有していた被相続人が死亡して相続が開始した場合、被相続人のその土地に対する占有は、相続人によって承継されない。
エ．無権代理人が本人を他の相続人と共に共同相続した場合において、無権代理行為を追認する権利は、相続人全員に不可分的に帰属する。
オ．遺産である賃貸不動産から相続開始後に生じた賃料債権は、遺産分割によって当該不動産を取得した者が、相続開始時に遡って取得する。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2022",num:"34",subject:"min",q:`Ａの相続財産の取得に関する次のアからオまでの各記述のうち、判例の趣旨に照らし正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．甲土地の共有持分がＡの相続財産に属する場合において、Ａに相続人がおらず、かつＡの債権者も受遺者もいないときは、その持分は他の共有者に帰属し、特別縁故者への分与の対象とならない。
イ．相続開始後にＡの子と認知されたＢが遺産分割を請求した場合において、他の共同相続人が既に遺産分割をしていたときは、その遺産分割は、効力を失う。
ウ．ＡからＡの相続財産に属する乙土地の遺贈を受けたＣは、Ａが死亡した後いつでも遺贈の放棄をすることができる。
エ．Ａの相続財産に属する丙土地を無償で管理していた特別寄与者であるＤは、その寄与に応じ、丙土地の持分を取得することができる。
オ．Ａの親族でないＥは、無償でＡの療養看護をしたことによりＡの財産の維持に特別の寄与をしても、特別寄与者には当たらない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2022",num:"35",subject:"min",q:`相続の承認及び放棄に関する次のアからオまでの各記述のうち、判例の趣旨に照らし誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．相続人が自己のために相続が開始した事実を知りながら相続財産に属する土地を売却したときは、その相続人は、単純承認をしたものとみなされる。
イ．相続の放棄をしたＡの子であるＢが被相続人の直系卑属であるときは、Ｂは、Ａを代襲して相続人となる。
ウ．相続人が数人あるときは、各相続人は、単独で限定承認をすることができる。
エ．限定承認者は、その固有財産におけるのと同一の注意をもって、相続財産の管理を継続しなければならない。
オ．相続人が未成年者であるときは、相続の承認又は放棄をすべき期間は、その法定代理人が未成年者のために相続の開始があったことを知った時から起算する。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2022",num:"36",subject:"min",q:`承諾に関する次のアからオまでの各記述のうち、判例の趣旨に照らし誤っているものを組み合わせたものは、後記１から５までのうちどれか。
ア．債務者が債権譲渡を承諾した場合は、それが譲渡人又は譲受人のいずれに対してされたときであっても、譲受人はその債権譲渡を債務者に対抗することができる。
イ．隔地者に対して承諾期間を定めないでした申込みは、申込者が撤回する権利を留保した場合を除き、申込者が承諾の通知を受けるのに相当な期間を経過するまでは、撤回することができない。
ウ．債務者と引受人となる者との契約でされた併存的債務引受は、債権者が引受人となる者に対して承諾をした時に、その効力を生ずる。
エ．無報酬の受寄者は、寄託者の承諾がなくても、寄託物をその用法に従って使用することができる。
オ．成年の子については、その承諾がなくても、これを認知することができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2022",num:"37",subject:"min",q:`裁判所の許可等を要する事項に関する次のアからオまでの各記述のうち、正しいものを組み合わせたものは、後記１から５までのうちどれか。
ア．占有者が所有者に占有物を返還する際に所有者に有益費の償還を請求する場合には、その占有者が善意であったときでも、裁判所は、所有者の請求により、その償還について相当の期限を許与することができる。
イ．動産質権者は、その債権の弁済を受けない場合において、鑑定人の評価を得ないことについて正当な事由があるときは、鑑定人の評価に代えて裁判所の許可を得ることにより、質物をもって直ちに弁済に充てることができる。
ウ．債権者が弁済の目的物の受領を拒んだ場合において、その物の保存について過分の費用を要するときは、弁済者は、裁判所の許可を得て、その物を競売に付し、その代金を供託することができる。
エ．建物所有を目的としてＡから土地を賃借したＢが、その土地上に建築した建物を土地賃借権とともにＣに譲渡しようとする場合において、Ｃがその賃借権を取得してもＡに不利となるおそれがないにもかかわらず、Ａが賃借権の譲渡を承諾しないときは、裁判所は、Ｂの申立てにより、Ａの承諾に代わる許可を与えることができる。
オ．配偶者の直系卑属である未成年者を養子とするには、家庭裁判所の許可を得なければならない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2022",num:"1",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合、誤っているものを２個選びなさい。",c1:"１．甲は、麻薬であるヘロインの粉末を覚醒剤と誤信して営利目的で輸入した。ヘロインの営利目的輸入罪と覚醒剤の営利目的輸入罪の法定刑は同一であった。この場合、甲には、覚醒剤の営利目的輸入罪が成立する。",c2:"２．暴力団組員甲は、配下の組員乙に対し、抗争状態にある暴力団組員Ａとの間でもめごとが起きた場合にはＡを殺害してよいが、実際にＡを殺害するかは乙の判断に任せる旨伝えて拳銃を渡し、乙も了承したところ、乙は、Ａともめたことから、殺意をもってＡを射殺した。甲が乙とＡの間でもめごとが起きることがあり得ると認識していた場合、甲には、殺人罪の故意が認められる。",c3:"３．甲は、殺意をもってＡに向けて拳銃を発射したところ、その弾丸がＡを貫通し、その背後にいて甲がその存在を認識していなかったＢにも命中し、その結果、Ａが死亡し、Ｂが重傷を負った。この場合、甲には、Ａに対する殺人罪が成立するが、Ｂに対する殺人未遂罪は成立しない。",c4:"４．甲は、乙にＡへの暴行を教唆し、乙もその旨決意し、Ａに暴行を加えて死亡させたが、甲は同教唆の時点でＡが死亡する可能性を予見していなかった。この場合、甲には、傷害致死罪の教唆犯が成立する。",c5:"５．甲は、殺意をもってＡの首を絞めたところ、Ａが動かなくなったので、Ａが死亡したものと誤信し、犯行の発覚を防ぐ目的で、Ａを砂浜に運んで放置し、その結果、Ａが砂を吸引して窒息死した。この場合、甲には、殺人罪が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"13"},{year:"2022",num:"2",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合、正しいものはどれか。",c1:"１．甲は、乙が熟睡していることに乗じてわいせつな行為をしたが、これに気付いて覚醒した乙から抵抗され、わいせつな行為を行う意思を喪失した後、逃走するため、乙に暴行を加えて負傷させた。この場合、甲に準強制わいせつ致傷罪は成立せず、準強制わいせつ罪と傷害罪が成立するにとどまる。",c2:"２．甲は、自己の性欲を刺激興奮させ又は満足させるという性的意図を有さず、専ら乙を侮辱して報復するため、乙を脅迫して裸にして写真撮影した。この場合、甲に強制わいせつ罪が成立することはない。",c3:"３．甲は、自らが管理する動画配信サイトにわいせつな動画のデータファイルをアップロードし、同サイトを利用した不特定の顧客によるダウンロード操作に応じて、同ファイルを当該顧客のパーソナルコンピュータに自動的に送信させ、同コンピュータに記録、保存させた。この場合、甲にわいせつ電磁的記録等送信頒布罪が成立する。",c4:"４．甲は、わいせつな内容を含む書籍を販売したが、その目的は作品の文芸的・思想的価値を社会に主張することであった。この場合、甲にわいせつ文書頒布罪が成立することはない。",c5:"５．甲は、日本国外で販売する目的で、日本国内において、わいせつな内容を含む書籍を所持した。この場合、甲にわいせつ文書有償頒布目的所持罪が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2022",num:"3",subject:"kei",q:`詐欺罪の実行の着手に関する次の【事例】及び【判旨】についての後記アからオまでの各【記述】を検討し、正しい場合には１を、誤っている場合には２を選びなさい。
【事 例】
甲及び乙は、既に１００万円の詐欺被害に遭っていたＶに対し、警察官に成り済まして電話し、犯人検挙及び被害回復のために必要と誤信させ、Ｖに預金を払い戻させた上、警察官に成り済ました甲がＶ宅に赴き、捜査に必要であるから現金を預かるとのうそを言ってＶから現金をだまし取ることを計画した（以下「本件計画」という。）。その上で、乙は、本件計画に従ってＶに電話し、捜査に必要であるから預金を全部払い戻してほしいとうそを言い、これを信じたＶが預金を払い戻して帰宅すると、その約１時間後に再び乙がＶに電話し、間もなく警察官がＶ宅に行くとうそを言った。しかし、甲は、Ｖ宅に到着する直前、警察官に逮捕された。
【判 旨】
１回目と２回目の電話における各うそ（以下「本件うそ」という。）を述べた行為は、本件計画の一環として行われたものであり、本件うその内容は、本件計画上、Ｖが現金を交付するか否かを判断する前提となるよう予定された事項に係る重要なものであった。そして、このように段階を踏んでうそを重ねながら現金を交付させるための犯行計画の下において述べられた本件うそには、Ｖに現金の交付を求める行為に直接つながるうそが含まれており、既に１００万円の詐欺被害に遭っていたＶに対し、本件うそを真実であると誤信させることは、Ｖにおいて、間もなくＶ宅を訪問しようとしていた甲の求めに応じて即座に現金を交付してしまう危険性を著しく高めるものといえ、本件うそを一連のものとしてＶに対して述べた段階において、Ｖに現金の交付を求める文言を述べていないとしても、詐欺罪の実行の着手があったと認められる。
【記 述】
ア．【判旨】は、犯罪の実行行為自体ではなく、実行行為に密接で、被害を生じさせる客観的な危険性が認められる行為を開始することによっても未遂罪が成立し得るとする立場と矛盾しない。
イ．【判旨】は、本件うそとその後に予定されたうそを述べる行為全体を詐欺罪の構成要件である「人を欺く行為」と解した上で、一連の実行行為の開始があることから未遂犯の成立を認める立場と矛盾する。
ウ．【判旨】は、実行の着手を判断する際に行為者の犯行計画を考慮する立場を前提としている。
エ．【判旨】は、１回目の電話では実行の着手を認めず、２回目の電話で実行の着手が認められると明示している。
オ．【判旨】は、詐欺罪の実行の着手が認められるためには必ずしも財物交付要求行為が必要ないとの立場を前提としている。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"12121"},{year:"2022",num:"4",subject:"kei",q:"信用及び業務に対する罪に関する次の１から５までの各記述を判例の立場に従って検討した場合、正しいものを２個選びなさい。",c1:"１．人の業務に使用する電子計算機に対して不正な指令を入力した場合、その指令の内容が人の業務を妨害するおそれのあるものであれば、当該電子計算機の動作に影響を及ぼしていなくても、電子計算機損壊等業務妨害罪の既遂犯が成立し得る。",c2:"２．威力業務妨害罪における「威力」は、客観的にみて被害者の自由意思を制圧するに足りる勢力であればよく、現実に被害者が自由意思を制圧されたことを要しない。",c3:"３．偽計業務妨害罪における「偽計」とは、人を欺罔し、あるいは人の錯誤又は不知を利用することをいい、電話料金の支払を免れるための機器を電話回線に取り付けて課金装置の作動を不能にする行為は、これに該当しない。",c4:"４．信用毀損罪は、経済的な側面における人の社会的な評価を保護するものであり、同罪における「信用」には、人の支払能力又は支払意思に対する社会的な信頼だけでなく、販売される商品の品質に対する社会的な信頼も含まれる。",c5:"５．威力業務妨害罪における「威力」は、被害者の面前で行使される必要があるので、被害者が執務のために日頃使っている机の引き出しに猫の死骸をひそかに入れた場合、後に被害者がこれを発見するに至ったとしても、威力業務妨害罪は成立しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"24"},{year:"2022",num:"5",subject:"kei",q:`次のアからオまでの各記述を判例の立場に従って検討した場合、誤っているものの個数を後記１から５までの中から選びなさい。
ア．甲は、乙（１０歳）の性器を指で触るわいせつな行為を行った。この場合、乙が同意していたのであれば、甲に強制わいせつ罪は成立しない。
イ．甲は、強制わいせつの目的を隠し、家まで送ると偽って乙を自動車に乗せて走り出し、途中でその目的に気付いた乙が降りたいと言ったにもかかわらず、同車を走行させ続けた。この場合、乙は、乗車時点では乗車に同意しているから、乙が降りたいと言った時点以降についてのみ、甲に監禁罪が成立する。
ウ．甲は、乙と保険金詐欺を共謀し、過失による自動車事故を装い、甲運転の自動車を乙運転の自動車に故意に追突させて、乙に傷害を負わせた。この場合、乙が傷害を負わされることに同意している以上、甲に傷害罪は成立しない。
エ．甲は、刑務所に服役したいと考えている乙と口裏を合わせ、乙の同意を得て、司法警察員に対し、乙に現金を窃取された旨の虚偽の被害届を提出した。この場合、乙の同意がある以上、甲に虚偽告訴罪は成立しない。
オ．甲は、現金自動預払機を利用する客のキャッシュカードの暗証番号を盗撮する機器を設置する目的で、行員が常駐しない銀行出張所内に立ち入った。この場合、甲による立入りの外観が一般の利用客のそれと異なることがなければ、甲に建造物侵入罪は成立しない。`,c1:"１．１個",c2:"２．２個",c3:"３．３個",c4:"４．４個",c5:"５．５個",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2022",num:"6",subject:"kei",q:`賄賂罪の保護法益について、
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
ク．将来`,c1:"１．①ア ②ウ ③イ ④オ ⑤キ",c2:"２．①ア ②エ ③イ ④カ ⑤キ",c3:"３．①ア ②ウ ③イ ④オ ⑤ク",c4:"４．①イ ②ウ ③ア ④カ ⑤ク",c5:"５．①イ ②エ ③ア ④カ ⑤ク",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2022",num:"7",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合、正しいものはどれか。",c1:"１．甲は、友人乙がＶ所有の自動車（以下「Ｖ車」という。）の車体をバットで叩いて損壊しているのを発見し、自分も加勢しようと考え、乙に気付かれないように物陰から石を投げ付け、Ｖ車の窓ガラスを割った。乙は、その直後に周囲を見回し、物陰にいた甲の姿を見て、甲がＶ車に石を投げ付けたと認識したが、それ以降は、甲及び乙のいずれも、Ｖ車の損壊行為を行わなかった。この場合、甲には、器物損壊罪の共同正犯が成立する。",c2:"２．甲と乙は、友人丙がＶから暴行を受けているのを発見し、丙を助けるために意思を通じ、正当防衛としてＶに暴行を加えた。これにより、攻撃の意思を失い攻撃をやめたＶが現場から逃走したため、甲は、暴行をやめたが、乙は、Ｖを追いかけて更にＶに暴行を加えて傷害を負わせた。その間、甲は、乙の行動に驚き、乙が暴行を加えるのを傍観していた。この場合、甲には、傷害罪の共同正犯が成立する。",c3:"３．甲と乙は、Ｖに対する強盗を共謀し、乙が先にＶ方に入り、甲のための侵入口を確保したが、現場付近に人が集まってきたことに気付いた甲は、乙に電話をかけ、「もう犯行をやめた方がよい。先に帰る。」と一方的に告げて、その場から立ち去った。その後、乙は、Ｖから現金を強取し、その際、Ｖに傷害を負わせた。この場合、甲には、住居侵入罪及び強盗致傷罪の共同正犯が成立する。",c4:"４．甲と乙は、Ｖに対する強盗を共謀し、甲がＶに包丁を示して、「金を出せ。」と要求したが、甲は、Ｖに憐憫の情を抱き、Ｖに「金は要らない。」と言うとともに、乙にも「お前も強盗なんかやめておけ。」と言ってその場を立ち去った。その後もＶは甲の脅迫によって反抗抑圧され続けており、乙は、その状態を利用してＶから現金を強取した。この場合、甲には、中止犯が成立する。",c5:"５．甲と乙は、Ｖの殺害を共謀し、甲がＶをナイフで切り付けて傷害を負わせたが、甲は、Ｖに憐憫の情を抱き、犯行をやめようと決意した。甲は、更にＶを切り付けようとする乙を羽交い締めにし、Ｖがその隙に逃走したため、乙は、犯行を継続できず、Ｖは、死亡するに至らなかった。この場合、甲と乙には、いずれも中止犯が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2022",num:"8",subject:"kei",q:`責任能力に関する次のアからオまでの各記述を判例の立場に従って検討した場合、正しいものの組合せは、後記１から５までのうちどれか。
ア．心神喪失とは、精神の障害により事物の理非善悪を弁識する能力又はこの弁識に従って行動する能力のない状態を指すと解されているところ、ここにいう精神の障害とは、飲酒による酩酊等、一時的な精神状態の異常も含まれる。
イ．１３歳の少年の行為は、罰しないことが原則であるが、故意の犯罪行為により被害者を死亡させた場合、事案の重大性等の事情を考慮し、相当と認めるときは刑罰を科すことができる。
ウ．自ら日常的・継続的に覚醒剤を使用した影響により、継続的な精神障害が生じ、心神耗弱状態で傷害の犯行に及んだ場合には、自己の先行行為によって心神耗弱状態を招いたものであるから、刑法第３９条第２項を適用する余地はない。
エ．刑法第３９条第２項は刑の任意的減軽を定めているから、犯行時に心神耗弱の状態にあったとしても、その刑を減軽しないことができる。
オ．精神障害を有する同一人について、Ａという罪に当たる行為については責任能力があるが、Ｂという罪に当たる別の行為については責任能力がないという事態は観念し得る。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2022",num:"9",subject:"kei",q:`毀棄及び隠匿の罪の「毀棄」、「損壊」及び「傷害」の意義に関する次の各【見解】に従って後記１から５までの各【記述】を検討した場合、正しいものを２個選びなさい。
【見 解】
Ａ．対象物の効用を害する一切の行為をいう。
Ｂ．対象物の全部又は一部を物質的に破壊、毀損してその効用を害する行為をいう。
【記 述】`,c1:"１．いずれの見解によっても、器物損壊罪の客体は、公用文書等毀棄罪、私用文書等毀棄罪、建造物等損壊罪の客体以外の動産に限られ、不動産は含まれないと解することになる。",c2:"２．Ａの見解によれば、他人が観賞用に鳥籠内で飼っている小鳥を鳥籠から屋外に逃がした場合、器物損壊罪が成立することになる。",c3:"３．Ａの見解によれば、公衆トイレの外壁に美観を著しく損ねる落書きをし、そのままでの使用継続を困難にさせ、原状回復に相当の費用を生じさせた場合、建造物損壊罪が成立することになる。",c4:"４．Ｂの見解によれば、裁判所から隠匿目的で競売記録を持ち出し自宅で保管した場合、公用文書毀棄罪が成立することになる。",c5:"５．Ｂの見解によれば、信書隠匿罪は、器物損壊罪の構成要件にも当たる行為を特に軽く処罰する罪と解することになる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"23"},{year:"2022",num:"10",subject:"kei",q:"略取誘拐罪に関する次の１から５までの各記述を判例の立場に従って検討した場合、正しいものはどれか。",c1:"１．身の代金目的略取誘拐罪にいう「安否を憂慮する者」は、被拐取者の安否を親身になって憂慮するのが社会通念上当然とみられる特別な関係が被拐取者との間にある者に限らず、同情から被拐取者の安否を気遣う第三者も含む。",c2:"２．未成年者誘拐罪の手段である欺罔は、被誘拐者に対して用いられる必要があり、監護者に対して用いられる場合を含まない。",c3:"３．刑法第２２８条の２（解放による刑の減軽）が適用されるためには、被拐取者を、「安全な場所」に解放する必要があるところ、「安全」とは、被拐取者が救出されるまでの間におよそ危険が生じないことを意味するから、漠然とした抽象的な危険や不安感ないし危惧感を伴うのであれば、「安全な場所」とはいえない。",c4:"４．自ら移動する意思も能力も有していない生後間もない嬰児であっても、未成年者略取誘拐罪の客体に当たる。",c5:"５．未成年者略取罪の保護法益には親権者の監護権も含まれるので、親権者が、他の共同親権者の監護下にある未成年の子を略取する行為については、未成年者略取罪が成立することはない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2022",num:"11",subject:"kei",q:"共犯に関する次の１から５までの各記述を判例の立場に従って検討した場合、正しいものはどれか。",c1:"１．刑法第６０条における「実行」とは、基本的構成要件の実現に向けた行為に限定され、予備行為はこれに含まれないから、予備罪の共同正犯は成立しない。",c2:"２．実行共同正犯の成立に必要な各関与者間の意思連絡は、明示的なものだけではなく黙示的なものも含むが、共謀共同正犯においては、明示的な意思連絡が必要であり、黙示的な意思連絡では足りない。",c3:"３．ある犯罪が成立するについて当然予想され、その成立のために欠くことができない関与行為について、これを正犯として処罰する規定がない場合であっても、関与を受けた側の可罰的な行為の教唆又は幇助として処罰されることは当然である。",c4:"４．既に特定の犯罪の実行を確定的に決意している者に対してその実行を勧め、これによってその者の決意が強固になった場合、幇助犯は成立し得るが、教唆犯は成立しない。",c5:"５．犯行に必要な用具を第三者を介して正犯に提供した場合、正犯の犯行を間接的に幇助したことになるが、間接教唆と異なり、間接幇助を処罰する明文の規定が存在しないため、幇助犯は成立しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2022",num:"12",subject:"kei",q:`学生Ａ、Ｂ及びＣは、次の【会話】のとおり議論している。【会話】中の①から⑤までの（ ）内から適切な語句を選んだ場合、正しいものの組合せは、後記１から５までのうちどれか。
【会 話】
学生Ａ．状態犯とは、法益侵害の発生と同時に犯罪が終了するが、その後も法益侵害状態が残存する犯罪です。傷害罪がその典型です。これに対し、継続犯とは、法益侵害が継続している間は犯罪の継続が認められる犯罪であり、監禁罪や、①（ａ．保護責任者不保護罪・ｂ．窃盗罪）がこれに当たると考えられます。
学生Ｂ．住居侵入罪を状態犯と解すべきか、継続犯と解すべきかは争いがあります。②（ｃ．状態犯・ｄ．継続犯）と解する立場は、反対説によると、侵入後の現場滞留についても住居侵入罪が成立し、不退去罪が規定されている意味が失われてしまうと同説を批判します。
学生Ｃ．私は、継続犯は、③（ｅ．構成要件該当行為・ｆ．構成要件的結果）が継続する犯罪であると考えます。私の見解からは、被害者の監禁中に監禁罪の法定刑を引き上げる新法が施行された場合、それ以降の監禁については、④（ｇ．新法・ｈ．旧法）が適用されることになります。
学生Ａ．私は、Ｃさんの継続犯に関する理解には賛成できません。例えば、行為者が被害者を監禁した後に眠り込んだ場合であっても犯罪は継続しますが、行為者が眠り込んだ後には意思に基づく身体の動静がない以上、Ｃさんの見解のように理解するのは困難だと考えるからです。
学生Ｂ．ところで、状態犯についても、犯罪の終了時期と既遂時期の関係について考える必要があります。私は、傷害罪については、両者は、⑤（ｉ．常に一致する・ｊ．一致するとは限らない）と考えます。被害者が一旦負傷した後、その傷害が悪化し続けることがあるからです。`,c1:"１．①ａ ②ｃ ③ｆ",c2:"２．①ａ ②ｄ ⑤ｉ",c3:"３．①ｂ ③ｅ ④ｈ",c4:"４．②ｃ ④ｇ ⑤ｉ",c5:"５．③ｅ ④ｇ ⑤ｊ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2022",num:"13",subject:"kei",q:`次のアからオまでの各記述を判例の立場に従って検討した場合、誤っているものの組合せは、後記１から５までのうちどれか。
ア．甲は、Ａから金銭を借り入れるに際し、借入金を返済する意思も能力もないのに、知人Ｂに対し、「借入金は必ず自分で返済する。Ｂには迷惑をかけないので、保証人になってほしい。」とうそを言い、その旨Ｂを誤信させ、Ａに差し入れる予定の甲を借主とする金銭消費貸借契約書を閲読させ、その保証人欄に署名押印させた。この場合、甲には、有印私文書偽造罪が成立する。
イ．甲は、窃取したＡ名義のクレジットカードの番号等を冒用し、インターネット上の決済手段として使用できる電子マネーを不正入手しようと考え、Ａの氏名、同番号等の情報をインターネットを介してクレジットカード決済代行業者のコンピュータに送信し、Ａが上記電子マネー１０万円分を購入した旨の電磁的記録を作出し、これによってインターネット上で同電子マネーを利用することを可能とした。この場合、甲には、支払用カード電磁的記録不正作出罪が成立する。
ウ．県立高校を中途退学した甲は、母親Ａに見せて安心させる目的で、偽造された同高校校長Ｂ名義の甲の卒業証書を真正なものとしてＡに提示した。この場合、甲には、偽造有印公文書行使罪が成立する。
エ．指名手配され逃走中の甲は、本名を隠してＡ会社に正社員として就職しようと考え、同社に提出する目的で、履歴書用紙の氏名欄にＢという架空の氏名を記載し、その横にＢの姓を刻した印鑑を押印した上、真実と異なる生年月日、住所及び経歴を記載して履歴書を作成したが、その顔写真欄には甲自身の顔写真を貼付していた。この場合、甲には、有印私文書偽造罪が成立する。
オ．甲は、Ａから金銭を借り入れるに際し、数日前にＢが死亡したことを知りながら、Ａに差し入れる予定の金銭消費貸借契約書の借受人欄に、Ｂの氏名を冒用して署名押印し、一般人をしてＢが生存中に作成したと誤信させるおそれが十分に認められる文書を作成した。この場合、甲には、有印私文書偽造罪が成立する。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2022",num:"14",subject:"kei",q:`過失に関する次の各【見解】についての後記アからオまでの各【記述】のうち、誤っているものの組合せは、後記１から５までのうちどれか。
【見 解】
Ａ説：過失の本質は、結果の発生を予見することができたのに、精神を緊張させずにこれを予見しなかったことにある。
Ｂ説：過失の本質は、社会生活上必要な注意を怠り、結果を回避するための適切な措置を採らなかったことにあり、その前提として、構成要件的結果及び因果経過の基本部分に対する具体的な予見可能性が必要になる。
Ｃ説：過失の本質は、Ｂ説と同様であるが、結果に対する具体的な予見可能性を必要とせず、一般人に対して何らかの結果回避措置を命じるのが合理的であるといえる程度の危惧感があれば足りる。
【記 述】
ア．Ａ説からは、いわゆる信頼の原則を過失犯に適用する余地はない。
イ．Ａ説は、故意犯と過失犯は客観面が共通であり、両者は主観面において区別されるとの見解と親和的である。
ウ．Ｂ説に対しては、結果回避のための適切な措置と行政取締法規が定める義務とを区別するのは困難であり、行政取締法規の義務違反が刑法上の過失になってしまうとの批判が可能である。
エ．Ｂ説に対しては、自動車運転はそれ自体危険な行為であり、いかなる運転行為からも死傷結果が生じ得る以上、容易に予見可能性が認められ、過失犯の成立範囲が広くなりすぎるとの批判が可能である。
オ．Ｃ説に対しては、構成要件該当事実に関する具体的な予見可能性がないにもかかわらず、漠然とした危惧感だけで過失責任を追及することは責任主義に反するとの批判が可能である。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2022",num:"15",subject:"kei",q:`放火罪に関する次の各【見解】についての後記アからオまでの各【記述】を検討し、正しい場合には１を、誤っている場合には２を選びなさい。
【見 解】
Ａ．放火罪にいう「焼損」とは、火が媒介物を離れて目的物に燃え移り、目的物が独立して燃焼を継続し得るに至った状態を意味する。
Ｂ．放火罪にいう「焼損」とは、目的物の重要部分が燃焼し、本来の効用を喪失した状態を意味する。
【記 述】
ア．Ａの見解に対しては、Ｂの見解から、放火罪が公共危険罪であることを軽視しているとの批判が可能である。
イ．Ａの見解に対しては、Ｂの見解よりも中止犯が成立する範囲が狭くなるため、刑事政策的に望ましくないとの批判が可能である。
ウ．Ｂの見解に対しては、刑法第１０９条第２項、第１１０条第２項が自己所有物に対する放火を処罰していることから、放火罪の既遂時期をその財産犯的側面から決するのは妥当でないとの批判が可能である。
エ．Ｂの見解に対しては、客体が建造物の場合、全焼又は半焼に至らない限り放火罪が既遂に達しない可能性があり、その場合には既遂時期が遅きに失するとの批判が可能である。
オ．Ａ及びＢのいずれの見解に対しても、不燃性の建造物に放火した場合、内装の融解により有毒ガスが発生し、人の生命・身体に危険を生じさせたとしても、建造物自体が燃焼しない限り放火罪の既遂犯が成立しないため、処罰範囲が狭すぎるとの批判が可能である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"21111"},{year:"2022",num:"16",subject:"kei",q:`違法性に関する次のアからオまでの各記述を判例の立場に従って検討した場合、正しいものの個数を後記１から５までの中から選びなさい。
ア．私人が現行犯人を逮捕しようとする場合、犯人から抵抗を受けたときは、その際の状況からみて社会通念上逮捕のために必要かつ相当と認められる限度内の実力を行使したことで犯人に傷害を負わせたとしても、法令による行為に当たるから、傷害罪が成立することはない。
イ．勤労者の争議行為に際し、人の看守する建造物に看守者の意思に反して侵入した場合、法令による行為に当たるから、建造物侵入罪が成立することはない。
ウ．虚偽告訴の罪で起訴された者が、人違いで告訴したと気付きながら、公判廷において、公然と虚偽の事実を摘示して被告訴人の名誉を毀損した場合、被告人としての防御権の行使に当たるから、名誉毀損罪が成立することはない。
エ．商人が、自己と通謀して客を装い他の客の購買心をそそる者（いわゆる「さくら」）を使って、商品の効用が極めて大きく世評も売れ行きも良いように見せかけて客を欺罔し、これを信じた客に効用の乏しい商品を売り付けた場合、正当な業務による行為に当たるから、詐欺罪が成立することはない。
オ．宗教上の加持祈祷の行として他人の生命、身体に危害を及ぼす有形力を行使し、その結果、その他人を死亡させた場合、正当な業務による行為に当たるから、傷害致死罪が成立することはない。`,c1:"１．１個",c2:"２．２個",c3:"３．３個",c4:"４．４個",c5:"５．５個",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2022",num:"17",subject:"kei",q:"罪数に関する次の１から５までの各記述を判例の立場に従って検討した場合、誤っているものを２個選びなさい。",c1:"１．甲は、Ａから財物を詐取した上で当該財物の返還を免れるためにＡを殺害することを計画し、計画どおりにＡから財物を詐取し、その後、殺意をもってＡの胸部をナイフで刺して殺害し、これにより、財物の返還を免れるという財産上不法の利益を得た。甲には、詐欺罪と強盗殺人罪が成立し、これらは包括一罪となる。",c2:"２．暴力団幹部甲は、配下の組員数名とともに、Ａの身体に共同して危害を加える目的で、日本刀数本を準備してＡ方前に集合し、その直後、外に出てきたＡの顔面を手拳で数回殴打する暴行を加えた。甲には、凶器準備集合罪と暴行罪が成立し、これらは併合罪となる。",c3:"３．甲は、業務として猟銃を用いた狩猟に従事していた際、Ａを熊と誤認して発砲し、Ａに傷害を負わせ、その直後にＡを誤射したことに気付いたが、Ａを殺害して逃走しようと決意し、殺意をもってＡの胸部に向けて発砲し、Ａを即死させた。甲には、業務上過失傷害罪と殺人罪が成立し、これらは包括一罪となる。",c4:"４．甲は、Ａ銀行が発行したＢ名義のキャッシュカード１枚をＢから窃取した上、これを利用してＡ銀行の現金自動預払機から預金を不正に払い戻した。甲には、２個の窃盗罪が成立し、これらは併合罪となる。",c5:"５．甲は、対立する不良グループのメンバーＡ及びＢを襲撃することを計画し、路上で発見したＡをバットで１回殴打した直後、そばにいたＢを同バットで１回殴打し、両名に傷害を負わせた。甲には、２個の傷害罪が成立し、これらは包括一罪となる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"35"},{year:"2022",num:"18",subject:"kei",q:`死者の占有に関して、教授及び学生が次の【会話】のとおり議論している。【会話】中の①から⑥までの（ ）内に後記【語句群】から適切な語句を入れた場合、正しいものの組合せは、後記１から５までのうちのどれか。なお、①から⑥までの（ ）内にはそれぞれ異なる語句が入る。
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
ｊ．法益の保護が十分でない`,c1:"１．①ａ ②ｅ ③ｇ ④ｆ ⑤ｊ ⑥ｄ",c2:"２．①ａ ②ｆ ③ｉ ④ｄ ⑤ｊ ⑥ｂ",c3:"３．①ｃ ②ｄ ③ｉ ④ｂ ⑤ｊ ⑥ｅ",c4:"４．①ｃ ②ｄ ③ｉ ④ｆ ⑤ｈ ⑥ｂ",c5:"５．①ｃ ②ｅ ③ｇ ④ｂ ⑤ｈ ⑥ｄ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2022",num:"19",subject:"kei",q:`名誉に対する罪に関する次の【見解】についての後記１から５までの各【記述】のうち、誤っているものはどれか。
【見 解】
名誉毀損罪（刑法第２３０条）の保護法益は人の外部的名誉（社会的評価、社会的名誉）であり、侮辱罪（刑法第２３１条）の保護法益は人の主観的名誉（名誉感情）である。また、侮辱罪は、事実を摘示した場合にも成立し得る。
【記 述】`,c1:"１．この【見解】からは、意識を喪失した終末期の患者に対する侮辱罪が成立しないことになる。",c2:"２．この【見解】に対しては、侮辱罪の規定が公然性を要求していることを十分に説明できないとの批判が可能である。",c3:"３．この【見解】からは、刑法第２３１条の「事実を摘示しなくても」という文言は、事実の摘示の有無にかかわらず侮辱罪が成立し得るという趣旨で解釈される。",c4:"４．この【見解】からは、法人に対する侮辱罪の成立を認めることが可能である。",c5:"５．この【見解】からは、名誉毀損罪が成立する場合にも、同時に侮辱罪が成立する可能性がある。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2022",num:"20",subject:"kei",q:`次の【事例】に関する後記アからオまでの各【記述】を判例の立場に従って検討し、正しい場合には１を、誤っている場合には２を選びなさい。
【事 例】
甲（女性、１６歳）は、高校の同級生Ａ（女性、１６歳）が非行グループと交際し、飲酒喫煙を繰り返していることを知り、それらのＡの具体的行動を、特に口止めもせずに同級生２名に告げたところ、同人らを介して、Ａの同行動がクラスの全生徒３０名の知るところとなった。甲のせいで自己の行状に関するうわさが広まったことを知ったＡは、甲を呼び出して暴行を加えた。そのことを知った甲の兄乙は、Ａに報復しようと考え、ある日の深夜、Ａ宅付近に自己の車を停め、Ａを待ち伏せていたところ、Ａの姉Ｂ（２０歳）がＡ宅に入ろうとするのを見て、ＢをＡと誤信し、Ｂを無理やり同車のトランクに押し込んで数キロメートル走行した上、郊外の廃工場に連行した。乙は、上記廃工場において、Ｂの顔面を数発殴打するとともに、はさみを使ってＢの頭髪を１０センチメートル程度切断した。乙は、Ｂが泣き出したのを見て満足し、その場から立ち去ることにしたが、その際、Ｂのバッグの中から財布を抜き取り、これを持ち去った。乙は、上記財布内にＢ名義の運転免許証やキャッシュカードが入っていたため、ＢをＡと間違えたことに気付いたが、同カードを不正に使用し、Ｂの預金で乙の友人Ｃへの借金を返済しようと考えた。乙は、コンビニエンスストアの現金自動預払機に同カードを挿入し、暗証番号としてＢの誕生日を入力したところ、取引ができる状態になったので、その場で、同現金自動預払機を操作し、Ｂ名義口座から直接Ｃ名義口座へ５０万円を送金した。その後、甲の交際相手丙は、乙が警察に逮捕されるのではないかと不安に思った甲からの依頼に応じ、乙の上記一連の犯行について、乙の身代わり犯人として警察に出頭した。
【記 述】
ア．甲が、Ａの上記行動を同級生２名に告げた行為は、特定かつ少数の者にＡの名誉を毀損する事実を摘示したにすぎないことから、名誉毀損罪が成立することはない。
イ．乙が、Ｂを無理やり自己の車のトランクに押し込み、上記廃工場に連行した行為は、Ｂを１６歳の未成年者と誤信していたのであるから、生命身体加害目的略取罪ではなく未成年者略取罪が成立する。
ウ．乙が、はさみを使ってＢの頭髪を切断した行為は、人の生理的機能を損なうものではないから、傷害罪は成立せず暴行罪が成立するにとどまる。
エ．乙が、Ｂ名義口座から直接Ｃ名義口座へ５０万円を送金した行為は、実質的には預金の占有を移転させる行為であるから、窃盗罪が成立する。
オ．丙が乙の身代わり犯人として警察に出頭した行為は、犯人の特定を誤らせることを通じて間接的に犯人の身柄確保を妨げるものにすぎないから、犯人隠避罪は成立せず、証拠偽造罪が成立する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"22122"},{year:"2021",num:"1",subject:"ken",q:`公務員や未決拘禁者など，公権力との関係で特別な法律関係にある者の権利制約に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．多数の被拘禁者を外部から隔離して収容する施設では，施設内でこれらの者を集団として管理するに当たり，内部の規律及び秩序を維持し，その正常な状態を保持する必要があるから，この目的のため必要がある場合には，未決拘禁者についても，身体の自由やその他の行為の自由に一定の制限が加えられることはやむを得ない。
イ．刑事収容施設内において喫煙を許すことにより，罪証隠滅のおそれがあり，また火災発生により被拘禁者の逃走や人道上の重大事態の発生も予想される一方，たばこは生活必需品とまではいえず嗜好品にすぎないことからすれば，喫煙の自由が憲法の保障する人権に含まれるとしても，制限の必要性の程度と制限される基本的人権の内容，これに加えられる具体的制限の態様とを総合的に考慮すると，施設内における喫煙禁止は必要かつ合理的なものといえる。
ウ．職権行使の独立が保障され，単独で又は合議体の一員として司法権を行使する主体として，国に対する訴訟を含めて中立・公正な立場から裁判を行うことが強く期待される裁判官に対する政治運動禁止の要請は，議会制民主主義の政治過程を経て決定された政策を，政治的偏向を排し組織の一員として忠実に遂行すべき立場にある一般職の国家公務員に対する政治的行為の禁止の要請ほどには強くないというべきである。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2021",num:"2",subject:"ken",q:`憲法の明文で規定されていない権利・自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには〇，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．髪型の自由は，自己決定権として憲法第１３条によって保障されるものである。それゆえ，非行を防止する目的で高校生らしい髪型を維持するよう求める校則の定めが，社会通念上不合理なものとはいえないとしても，これに反した生徒を退学させることは許されない。
イ．学籍番号，氏名，住所及び電話番号といった個人情報は，大学が個人識別等を行うための単純な情報である。それゆえ，このような個人情報については，プライバシーに係る情報として法的保護の対象とはならない。
ウ．指紋は，それ自体では個人の私生活や人格，思想，信条，良心等個人の内心に関する情報となるものではないが，何人も個人の私生活上の自由の一つとして，みだりに指紋の押なつを強制されない自由を有する。それゆえ，在留外国人の指紋押なつ制度は，国家機関が正当な理由なく指紋の押なつを強制するものであり，憲法第１３条の趣旨に反し，許されない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"8"},{year:"2021",num:"3",subject:"ken",q:`法の下の平等に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．尊属に対する尊重報恩は社会生活上の基本的道義であるが，このような自然的情愛ないし普遍的倫理の維持は，刑法上の保護に値するものではなく，尊属殺を通常の殺人よりも重く処罰する規定は，合理的な根拠に基づくものといえないから，憲法第１４条第１項に違反する。
イ．国籍法の規定が，同じく日本国民である父から認知された子でありながら，父母の婚姻により嫡出子たる身分を取得した者と異なり，父母が法律上の婚姻をしていない非嫡出子は同法所定の他の要件を満たしても日本国籍を取得することができないという区別を生じさせていることは，同規定の立法目的との合理的関連性を欠くものであり，憲法第１４条第１項に違反する。
ウ．女性に対し６か月の再婚禁止期間を定める規定の立法目的は，父性の推定の重複を回避し，父子関係をめぐる紛争の発生を未然に防ぐことにあると解され，６か月の再婚禁止期間を設けることはこの立法目的との関連において合理性を有するから，憲法第１４条第１項に違反しない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"6"},{year:"2021",num:"4",subject:"ken",q:`思想・良心の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法第１９条の保障する良心の自由は，単に事物に関する是非弁別の内心的自由のみならず，かかる是非弁別の判断に関する事項を外部的に表現するか否かの自由をも包含するものであるから，謝罪広告の掲載を命ずる判決は，良心の自由への直接的な制約となるが，その内容が名誉回復のために必要な限度にとどまるものであれば，同条に違反しない。
イ．公立中学校の校長が，同校の生徒について，大学生の政治集会に参加しているなどと記載した内申書を作成提出することは，同記載が生徒の思想，信条そのものを記載したものでなく，同記載に係る外部的行為によっては生徒の思想，信条を了知し得るものではないし，また，生徒の思想，信条自体を高等学校の入学者選抜の資料に供したものと解することはできないから，憲法第１９条に違反しない。
ウ．公立小学校の校長が，音楽専科の教諭に対し，入学式における国歌斉唱の際に「君が代」のピアノ伴奏を行うよう命ずることは，個人の歴史観ないし世界観に由来する行動と異なる外部的行為を求めるものとして，思想・良心の自由への間接的な制約となるが，地方公務員としての職務の公共性に加え，ピアノ伴奏が音楽専科の教諭にとって通常想定され期待される行為であることからすれば，許容される制約であり，憲法第１９条に違反しない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"212"},{year:"2021",num:"5",subject:"ken",q:`表現の自由に関する次のアからウまでの各記述について，ｂの見解がａの見解の批判となっている場合には１を，そうでない場合には２を選びなさい。
ア．ａ．表現の自由に対する規制について，表現の内容に着目した内容規制には，厳格な審査基準が妥当し，表現の時・場所・方法等の規制に関わる内容中立的規制の場合には，より緩やかな審査基準が妥当する。
ｂ．審査基準の枠組みの設定の仕方が図式的になり過ぎており，人によって極めて重要な意義を持つはずの表現の時・場所・方法等の規制の危険性・問題性を軽視している。
イ．ａ．商品知識の啓蒙や，意見の伝達等何らかの表現行為に関わる広告は，表現の自由の保障の対象となるが，純然たる営利広告は，経済的自由の保障の対象となる。
ｂ．消費者の側から見ると，純然たる営利広告も，一つの重要な生活情報としての意味を持ち得るから，それを表現の自由の保障の対象外としてしまうと，消費者の知る権利を害することになる。
ウ．ａ．表現行為に先立ち行政権がその内容を事前に審査し不適当と認める場合にその表現行為を禁止する検閲は，憲法第２１条第２項により絶対的に禁止され，同条第１項から導き出される広義の事前抑制の原則的禁止とは区別される。
ｂ．独立性を保障された司法権と行政権との区別は重要であり，また，検閲の禁止に例外を認める解釈は，憲法第２１条第２項が，「検閲は，これをしてはならない」と明記していることに反する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"112"},{year:"2021",num:"6",subject:"ken",q:`集会の自由に関する次のアからウまでの各記述について，ｂの見解がａの見解の批判となっている場合には１を，そうでない場合には２を選びなさい。
ア．ａ．地方公共団体は，公の施設を利用して特定の集会が開かれることにより，その集会の主催者と敵対するグループ等とが衝突して，人の生命・身体・財産が侵害され，公共の安全が損なわれる危険がある場合には，公の施設の利用を不許可とすることができる。
ｂ．主催者が集会を平穏に行おうとしているのに，その集会の目的や主催者の思想，信条に反対する他のグループ等がこれを実力で阻止し，妨害しようとして紛争を起こすおそれがあることを理由に公の施設の利用を拒むことは，憲法第２１条の趣旨に反する。
イ．ａ．所有権や管理権に基づく集会の規制が許されるかどうかの判断に当たっては，集会の場所が一般公衆が自由に出入りできるものであるときには，集会の自由の保障に可能な限り配慮する必要がある。
ｂ．主張や意見を社会に伝達する自由を保障する場合には，その表現の場を確保することが重要な意味を持ち，特に，表現の自由の行使が行動を伴うときには，表現のための物理的な場所が提供されなければ，意見を受け手に伝えることができない。
ウ．ａ．集会や集団行動については，公共の秩序を維持するため，又は公共の福祉が著しく害されることを防止するために一定の法的規制が必要であるから，集会等の時間，場所，方法を問わず，事前の許可を要すると条例で定めることもやむを得ない。
ｂ．集会や集団行動が他人の権利と衝突することがあるとしても，その衝突の程度は集会等の具体的態様によって大きく異なるから，一律に事前の許可にかからしめることは集会の自由に対する過大な制約である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"121"},{year:"2021",num:"7",subject:"ken",q:`憲法第２３条に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．大学の学問の自由と自治は，大学が学術の中心として深く真理を探究し，専門の学芸を教授研究することを本質とすることに基づくから，教授や研究者の研究，その結果の発表，研究結果の教授の自由とこれらを保障するための自治とを意味すると解されており，大学の学生が学問の自由を享有するのは，教授や研究者の有する特別な学問の自由と自治の効果としてである。
イ．子どもの教育は教師と子どもとの間の人格的接触を通じ，その個性に応じて行われなければならないが，全国的に一定の水準の教育を確保する必要があるので，教師に教授の具体的内容及び方法について裁量を認めることはできない。
ウ．大学における学生の集会が大学の学問の自由と自治を享有するか否かは，その集会が真に学問的な研究と発表のためのものか，実社会の政治的社会的活動に当たるかによって判断されるものであり，その集会が公開か否かといった点は考慮されない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"4"},{year:"2021",num:"8",subject:"ken",q:`財産権の制限と損失補償に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．法律の規定により財産上の権利の行使が制限される場合であっても，災害を未然に防止するという社会生活上のやむを得ない必要からその制限が当然受忍すべきものであるときは，憲法第２９条第３項による損失補償を要しない。
イ．財産上の権利の行使を制限する法律が補償規定を欠いている場合であっても，相当の資本を投入してきた者が，一般的に当然に受忍すべきものとされる範囲を超えて制限を受けるときは，憲法第２９条第３項を根拠として補償請求をする余地がある。
ウ．財産上の権利の行使を制限する法律に補償規定が置かれている場合であっても，その法律は，補償の内容が憲法第２９条第３項の要求する水準にあるか否かについて，憲法適合性の審査の対象となる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"111"},{year:"2021",num:"9",subject:"ken",q:`生存権に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法第２５条にいう「健康で文化的な最低限度の生活」は，抽象的・相対的な概念であって，その具体的な内容は，その時々における文化の発達の程度，経済的・社会的条件，一般的な国民生活の状況等との相関関係において判断決定されるべきものであるとともに，同規定を現実の立法として具体化するに当たっては，国の財政事情を無視することができず，高度の専門技術的な考察とそれに基づいた政策的判断を必要とする。
イ．憲法第２５条の生存権を具体化する趣旨の法律として，生活保護法等の法律が制定された場合，その法律は憲法第２５条と一体をなし，かかる法律の定める給付水準を正当な理由なくして引き下げることは憲法上許されない。
ウ．憲法第２５条第２項で定める防貧施策については広い立法裁量が認められる一方，同条第１項で定める救貧施策については，国は国民の最低限度の生活を保障する責務を負い，前者よりも厳格な違憲審査基準が用いられる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"4"},{year:"2021",num:"10",subject:"ken",q:`刑事補償請求権に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法第４０条は，抑留又は拘禁された後に刑事事件において無罪の裁判を受けた者について，その手続がたとえ憲法第３１条以下の諸権利の保障に反しなかったとしても，多大な犠牲を被っている以上，正義・衡平の観点から金銭による事後的救済を与えようとする趣旨の規定である。
イ．判例は，不起訴になった事実に関する抑留又は拘禁であっても，そのうちに実質上は，無罪となった事実についての抑留又は拘禁と認められるものがあるときは，その部分の抑留又は拘禁も，憲法第４０条にいう「抑留又は拘禁」に包含されると解している。
ウ．判例は，家庭裁判所における少年審判手続において非行事実がないことを理由とする不処分決定について，刑事事件において無罪の裁判を受けたことと実質的に同視できるとして，同決定を受けた者を刑事補償の対象としないことは憲法第４０条に違反すると解している。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"112"},{year:"2021",num:"11",subject:"ken",q:`主権に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．国民主権の原理に基づき，国及び普通地方公共団体による統治の在り方については日本国の統治者としての国民が最終的な責任を負うべきものであることからすると，外国人が普通地方公共団体の公務員に就任することは，その者が公権力の行使に当たる行為を行うかどうかにかかわらず，本来我が国の法体系の想定するところではない。
イ．裁判員制度は国民主権の理念に沿って司法の国民的基盤の強化を図るものであり，裁判員の職務等が司法権の行使に対する国民の参加という点で参政権と同様の権限を国民に付与するものであることからすると，裁判員の職務等を憲法第１８条後段が禁ずる「苦役」に当たるということは，必ずしも適切ではない。
ウ．天皇は日本国の象徴であり日本国民統合の象徴であるが，この地位は主権の存する日本国民の総意に基づくものであるとともに，民事裁判権が国民に由来する司法権の一作用であることからすれば，天皇に裁判所の民事裁判権が及ばないものと解することはできない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"6"},{year:"2021",num:"12",subject:"ken",q:`政党に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法は，政党について規定するところがないが，政党の存在を当然に予定しており，政党は，議会制民主主義を支える不可欠の要素であるから，国会が，参議院議員の選挙制度の仕組みを決めるに当たり，このような政党の国政上の重要な役割を踏まえて，政党を媒体として国民の政治意思を国政に反映させる名簿式比例代表制を採用することは，国会の裁量の範囲内である。
イ．政党に対しては，高度の自主性と自律性を与えて自主的に組織運営をなし得る自由を保障しなければならず，また，党員が政党の存立及び組織の秩序維持のために，自己の権利や自由に一定の制約を受けることがあるのも当然であるから，政党が党員に対してした除名処分の当否は，一般市民法秩序と直接の関係を有しない内部的な問題にとどまる限り，裁判所の審判権は及ばない。
ウ．衆議院の小選挙区選挙について，候補者届出政党にのみ政見放送を認め，候補者を含むそれ以外の者には政見放送を認めないものとする公職選挙法の規定は，選挙運動をする上で，候補者届出政党に所属する候補者とこれに所属しない候補者との間に単なる程度の違いを超える差異を設ける結果となり，国会に与えられた合理的裁量の限界を超えるものであるから，憲法第１４条第１項に違反する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"112"},{year:"2021",num:"13",subject:"ken",q:`憲法第９条の解釈に関する次のアからウまでの各記述について，ｂの見解がａの見解の批判となっている場合には１を，そうでない場合には２を選びなさい。
ア．ａ．憲法第９条第１項は，侵略戦争を放棄しているが，自衛戦争は放棄しておらず，同条第２項にいう「前項の目的」とは，第１項の「国際紛争を解決する手段として」の戦争の放棄のみを指すから，自衛のための戦力の保持は禁じられていない。
ｂ．自衛のための戦力と侵略のための戦力とを区別することは困難であり，戦力の保持を禁じた第２項の規定が無意味なものとなる。
イ．ａ．憲法第９条第１項は，侵略戦争を放棄しているが，自衛戦争は放棄しておらず，同条第２項にいう「前項の目的」とは，第１項全体の精神，すなわち「正義と秩序を基調とする国際平和を誠実に希求し」を指し，第２項によって警察力を上回る実力の保持が禁じられている。
ｂ．日本国憲法には，第６６条第２項の文民条項を除き，戦争開始の決定手続や軍隊の編制に関する規定が存在しない。
ウ．ａ．憲法第９条は，我が国が主権国として有する固有の自衛権まで否定するものではなく，自衛のために必要な最小限度の実力，すなわち自衛力の保持を禁じていない。
ｂ．個人の正当防衛の権利とは異なり，国家が固有の権利として自衛権を有するということはできない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"121"},{year:"2021",num:"14",subject:"ken",q:`国会議員の免責特権に関する次のアからウまでの各記述について，最高裁判所の判決（最高裁判所平成９年９月９日第三小法廷判決，民集５１巻８号３８５０頁）の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．国会議員は，議院で行った演説，討論又は表決に加えて，国会における意見の表明とみられる行為や，職務行為に付随する行為に関しては，国民全体に対する関係で政治的責任を負うにとどまり，個別の国民の権利に対応した関係での法的義務を負うものではないから，国会議員の上記の行為そのものが国家賠償法上の違法の評価を受けることはない。
イ．国会議員が，立法，条約締結の承認，財政の監督等の審議や国政に関する調査の過程で行う質疑等は，多数決原理により国家意思を形成する行為そのものではなく，国家意思の形成に向けられた行為であり，質疑等の内容が個別の国民の権利等に直接関わることも起こり得るので，質疑等において個人の権利を侵害した国会議員は，当該個人に対して損害賠償責任を負う。
ウ．国会議員が，質疑等において，職務と無関係に違法又は不当な目的をもって事実を摘示し，あるいは，あえて虚偽の事実を摘示して，個別の国民の名誉を毀損したと認められる特別の事情がある場合には，国家賠償法第１条第１項に基づいて，国に賠償を求めることができることもある。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2021",num:"15",subject:"ken",q:`内閣及び内閣総理大臣に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．内閣の総辞職について定める憲法第７０条の「内閣総理大臣が欠けたとき」には内閣総理大臣の辞職の場合を含まないとする見解によっても，その首長たる地位に鑑みれば，内閣総理大臣が辞職したときには，内閣は総辞職しなければならない。
イ．行政権が内閣に属する旨を定める憲法第６５条によれば，あらゆる行政を内閣が自ら行う必要まではないとしても，全ての行政について内閣が直接に指揮監督権を持つことが要求される。
ウ．憲法第６６条第２項は，内閣総理大臣及び国務大臣が「文民」であることを要求しているが，現職の自衛官は「文民」に該当しないので，内閣総理大臣及び国務大臣に任命することはできない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"3"},{year:"2021",num:"16",subject:"ken",q:`裁判の公開に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．判例によれば，憲法第８２条にいう「公開」は，国民一般に裁判の傍聴が許されるということを意味するから，何人も，裁判所に対して裁判を傍聴することを権利として要求することができる。
イ．判例によれば，刑事事件の証人尋問の際に，傍聴席と証人との間に衝立を置くなどして傍聴人から証人を見ることができないようにすることは，審理を公開することの意義を没却するものであるから，憲法第８２条に違反する。
ウ．裁判所が裁判官の全員一致で公の秩序又は善良の風俗を害するおそれがあると決することにより，傍聴人を退廷させて審理をすることができる場合であっても，判決の言渡しは，傍聴人を入廷させてしなければならない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"221"},{year:"2021",num:"17",subject:"ken",q:`憲法訴訟に関する次のアからウまでの各記述について，ｂの見解がａの見解の根拠となっている場合には１を，そうでない場合には２を選びなさい。
ア．ａ．公職選挙法上の選挙無効訴訟において，選挙人である原告は，同法の規定により一定の者の選挙権が制限されていることに関し，他者の選挙権の制限に係る同規定の違憲を主張して争うことはできない。
ｂ．公職選挙法の規定により選挙権の制限を受ける者は，自己の選挙権侵害を理由に救済を求める訴訟において同規定の違憲を主張することができる。
イ．ａ．規制範囲が過度に広範である疑いのある法律の規定であっても，これを合理的に解釈することにより，その規制対象を合憲的に規制し得る行為に限定でき，違憲の疑いを除去することができる場合には，裁判所は，同規定を違憲と判断すべきではない。
ｂ．法律の違憲判断を回避することにより立法府への干渉を最小限に抑えるとともに，基本的人権の保障を果たすことができる。
ウ．ａ．最高裁判所が法令を違憲無効とする判決をした場合，その判決の効力が及ぶのは当該事件限りであり，違憲と判断された法律は当該事件の訴訟当事者との関係においてのみその適用を排除される。
ｂ．法的安定性を確保するためには，最高裁判所は，自らの法令違憲の判断の効力が及ぶ範囲を制限する旨説示できる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"112"},{year:"2021",num:"18",subject:"ken",q:`憲法第８９条後段の「公の支配」の意義に関し，「国又は地方公共団体が，法令等により一定の監督をしていることで足りる」とする見解があるが，次のアからウまでの各記述について，かかる見解の根拠となる記述には○を，根拠とはならない記述には×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．「公の支配」を厳格に捉え過ぎると，公的援助の対象となっている私的な団体等の自主性を過度に損なうことになり，望ましくない。
イ．憲法第８９条後段の趣旨は，財政民主主義の見地から，慈善，教育，博愛の事業に対する公金の支出が公の財産の濫費，濫用にならないように，国や地方公共団体が監督することにある。
ウ．憲法第８９条後段が，慈善，教育，博愛を特に掲げ，それを同条前段の宗教団体に対する公金支出等の禁止と一体のものとして定めていることを重視すべきである。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2021",num:"19",subject:"ken",q:`地方自治に関する次のアからウまでの各記述について，正しいものには〇，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．地方自治の本質について，地方公共団体固有の前国家的な基本権を保障したものではなく，地方自治という歴史的・伝統的な制度を保障したものと解する立場に立つと，憲法第９２条に規定された「地方自治の本旨」には特別の法的意味がないこととなる。
イ．憲法は，都道府県と市町村という二層構造の地方公共団体を憲法上保障しておらず，地方公共団体の在り方は立法政策に委ねられるとする立場に立つと，現行の都道府県より更に大きな単位の地方公共団体を設け，三層構造とすることも許容されることとなる。
ウ．憲法第９５条は，「一の地方公共団体のみに適用される特別法」について規定するが，「一の地方公共団体」は，「一つの」ではなく，「特定の」地方公共団体を意味するものであるから，複数の地方公共団体に適用される法律についても，同条の規定する住民投票が必要になる場合がある。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"5"},{year:"2021",num:"20",subject:"ken",q:`条約に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．内閣が条約を締結するには国会の承認を経ることが憲法上必要であるとされる趣旨は，国会による政府の統制を確保することにあるから，国家間の合意の締結には，名称・内容のいかんを問わず，国会の承認が必要となる。
イ．憲法が条約に優位すると考える見解によっても，国際協調主義や，裁判所による違憲審査について定めた憲法第８１条に条約が列挙されていないことなどを理由として，条約が裁判所の違憲審査の対象に含まれないと解することは可能である。
ウ．条約が裁判所の違憲審査の対象となると考える見解によれば，条約が裁判所によって違憲と判断された場合，その国内法上の効力は否定されるが，国際法上の効力まで当然に否定されるわけではない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"211"},{year:"2021",num:"1",subject:"min",q:`失踪宣告に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．不在者の推定相続人は，家庭裁判所に失踪宣告の請求をすることができる。
イ．死亡の原因となるべき危難に遭遇した者の生死が，その危難が去った後１年間明らかでないことを理由として失踪宣告がされた場合には，失踪宣告を受けた者は，その危難が去った時に死亡したものとみなされる。
ウ．失踪宣告を受けて死亡したものとみなされたＡから甲土地を相続したＢが，Ｃに甲土地を売却した後に，Ａの失踪宣告が取り消された。この場合において，ＣがＡの生存につき善意であったときは，Ｂがこれにつき悪意であったとしても，その取消しは，ＢＣ間の売買契約による甲土地の所有権の移転に影響を及ぼさない。
エ．失踪宣告が取り消された場合，失踪宣告によって財産を得た者は，失踪者の生存につき善意であっても，財産を得ることによって受けた利益の全額を失踪者に返還しなければならない。
オ．失踪宣告を受けて死亡したものとみなされたＡが，失踪宣告が取り消される前に，Ｂから甲土地を買い受けた場合，この売買契約は，失踪宣告がされたことにつきＢが善意であるときに限り効力を有する。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2021",num:"2",subject:"min",q:`意思表示に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．表意者がその真意ではないことを知って意思表示をした場合において，相手方が，表意者の真意を具体的に知らなくても，その意思表示が表意者の真意ではないことを知り，又は知ることができたときは，その意思表示は無効である。
イ．表意者の意思表示がその真意ではないことを理由として無効とされた場合において，その無効は，善意であるが過失がある第三者に対抗することができる。
ウ．相手方と通じてした虚偽の意思表示の無効は，第三者がその表示の目的につき法律上の利害関係を有するに至った時に善意であれば，その後悪意になったとしても，その第三者に対抗することができない。
エ．相手方に対する意思表示について第三者が詐欺を行った場合，相手方がその事実を知らなかったとしても，それを知ることができたときは，表意者は，その意思表示を取り消すことができる。
オ．強迫による意思表示の取消しは，善意でかつ過失がない第三者に対抗することができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2021",num:"3",subject:"min",q:`ＡのＢに対する契約の解除の意思表示に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａが未成年者であるＢに対して契約を解除する旨の通知書を発送したところ，Ｂがその通知書を受け取り，Ｂの法定代理人がその解除の意思表示を知るに至った。この場合，Ａは，その意思表示をもってＢに対抗することができる。
イ．Ａは，Ｂに対して契約を解除する旨の通知書を何度も発送したが，Ｂは，正当な理由なく，その受取を拒んだ。この場合，Ａがした解除の意思表示は，到達したものとみなされる。
ウ．Ａは，Ｂに対して契約を解除する旨の通知書を発送した後に死亡し，その後，その通知書がＢのもとに到達した。この場合，Ａがした解除の意思表示は，その効力を妨げられない。
エ．Ａは，Ｂに対して契約を解除する旨の通知を電子メールで発信したが，通信システムの不具合によりその通知はＢに到達しなかった。この場合，Ａがした解除の意思表示は，その効力を生ずる。
オ．Ａは，Ｂに対して契約を解除する旨の通知書を発送しようとしたが，Ｂの所在を知らず，公示の方法によって解除の意思表示をした。この場合，Ｂの所在を知らないことについてＡに過失があったとしても，Ａがした解除の意思表示は，その効力を生ずる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2021",num:"4",subject:"min",q:`期間に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。なお，各記述において言及されている特定の日は，特に記載がない限り，いずれも日曜日，国民の祝日に関する法律に規定する休日その他の休日に当たらないものとする。
ア．ある年の５月１６日午後３時に「１週間以内に債務を履行する。」と合意された場合，その期間は，同日午前零時から起算する。
イ．ある年の６月３日午前１０時に「５時間以内に債務を履行する。」と合意された場合，その期間は，同日午前１０時から起算する。
ウ．合意によって定められた期間の末日が日曜日に当たる場合において，その日曜日に取引をする慣習があるときは，その期間は，その日に満了する。
エ．ある年の７月１２日午前１１時に「１か月以内に債務を履行する。」と合意された場合，その期間は，同年８月１３日午後１２時に満了する。
オ．うるう年ではない年の１月３０日午後５時に「１か月以内に債務を履行する。」と合意された場合，その期間は同年２月２８日午後１２時に満了する。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2021",num:"5",subject:"min",q:`債権の消滅時効に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．催告によって時効の完成が猶予されている間に債権者が再度の催告をしたときは，再度の催告の時から６か月を経過するまでの間は，時効は完成しない。
イ．時効の利益の放棄は債務者の意思表示のみにより効力を生じ，債権者の同意を要しない。
ウ．裁判上の請求がされ，その後，その請求に係る訴訟が訴えの取下げによって終了したときは，その終了の時から６か月を経過するまでの間は，時効は完成しない。
エ．消滅時効が完成した後に債務者が債務の承認をした場合において，その承認が時効完成の事実を知らずにされたものであるときは，債務者は，承認を撤回して時効を援用することができる。
オ．不動産の仮差押えがされたときは，その被保全債権の消滅時効は，その仮差押えの登記がされた時から新たにその進行を始める。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2021",num:"6",subject:"min",q:`物権的請求権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．甲土地の所有者Ａは，Ｂが所有する乙土地上に甲土地のための通行地役権の設定を受けた。その後，Ｂが乙土地上に大型トラック丙を駐車してＡによる乙土地の通行を妨げた場合，Ａは，Ｂに対して通行地役権に基づき丙の撤去を請求することができる。
イ．Ａ，Ｂ及びＣが甲土地を持分３分の１ずつで共有している場合，Ｃは単独で，甲土地を何の権原もなく占有するＤに対して甲土地の明渡しを請求することができない。
ウ．Ａは，Ｂが所有する甲土地上に何の権原もなく乙建物を建築し，その所有権保存登記がされた。その後，Ａが乙建物をＣに売却して所有権を移転した場合，Ｃヘの所有権移転登記がされていなくても，Ｂは，Ｃに対して所有権に基づき乙建物の収去を請求することができる。
エ．Ａが所有する甲土地にＢのために抵当権が設定され，その登記がされた後，Ｃは，甲土地上にＡが所有する樹木を何の権原もなく伐採し始めた。この場合，Ｂは，被担保債権の弁済期前であっても，Ｃに対して伐採の禁止を請求することができる。
オ．甲土地に設定された第一順位の抵当権の被担保債務が消滅したにもかかわらずその登記が抹消されていない場合，甲土地の第二順位の抵当権者は，第一順位の抵当権者に対してその登記の抹消を請求することができない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2021",num:"7",subject:"min",q:`物権変動に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａは，その所有する甲土地上に，Ｂのために第一順位の抵当権を，Ｃのために第二順位の抵当権をそれぞれ設定し，その登記がされた。その後，Ｃが甲土地をＡから相続によって取得した場合であっても，第二順位の抵当権は混同により消滅しない。
イ．Ａがその所有する甲土地をＢに売却した後，Ｂが甲土地をＣに転売し，それぞれその旨の登記がされた。その後，Ａは詐欺を理由としてＢとの売買契約を取り消した。Ｃは，Ａの売買の意思表示が詐欺によることを過失なく知らなかった場合，甲土地の所有権の取得を妨げられない。
ウ．ＡとＢが，甲建物及びその敷地である乙土地をそれぞれ共有していたところ，乙土地のＡの共有持分に抵当権が設定された。その後，その抵当権が実行され，Ｃがそれを買い受けた場合，甲建物のために乙土地上に地上権が成立する。
エ．Ａがその所有する甲土地をＢに売却した後，Ｂが甲土地をＣに転売し，それぞれその旨の登記がされた。その後，ＡとＢとの間の売買契約は，Ａが成年被後見人であることを理由として取り消された。Ｃが，Ａが成年被後見人であったことを過失なく知らなかった場合，Ａは，Ｃに対し，甲土地の所有権が自己にあることを主張することができない。
オ．地役権の要役地の所有権を単独で相続した者は，地役権設定行為に別段の定めがないときは，その土地の地役権も相続する。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2021",num:"8",subject:"min",q:`占有権に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａが自己所有の甲土地につき宅地造成工事を開始したために，隣接する乙土地に危険が生じている場合，乙土地に居住するＢは，工事開始時から１年が経過したときであっても，工事が完成する前であれば，Ａに対して占有保全の訴えを提起することができる。
イ．Ａが占有していた動産甲をＢが奪取した場合において，Ｂが甲の所有者であることが明らかになったときは，Ａによる占有回収の訴えは認められない。
ウ．ＡがＢ所有の動産甲を無断でＣに賃貸した後，Ｃの責めに帰すべき事由によって甲が損傷した場合，Ｂから甲の返還を求められたＣは，甲の所有者がＡであると過失なく信じていたとしても，その損害の全部の賠償をしなければならない。
エ．Ａが，自己が占有する動産甲をＢに売却し，甲を以後Ｂのために占有する旨の意思を表示したときは，Ｂは，甲の占有権を取得する。
オ．動産甲をその所有者Ａから賃借して占有していたＢが，Ａとの間で，Ａから甲を買い受けてＡの占有権を譲り受ける旨の合意をしたときは，Ｂの占有は，自主占有となる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2021",num:"9",subject:"min",q:`共有に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．金塊の共有者は，分割をしない旨の契約をしていない場合には，いつでも，その動産の分割を請求することができる。
イ．共有物分割訴訟においては，共有者の全員が当事者とならなければならない。
ウ．共有物の分割を求める裁判において共有物の現物を分割することができないとき，又は分割によってその価格を著しく減少させるおそれがあるときは，裁判所は，その競売を命じなければならない。
エ．各共有者は，他の共有者が共有物の分割によって取得した物について，その持分に応じて担保の責任を負う。
オ．共有者の一人が，その持分を譲渡するためには，他の共有者の同意を得なければならない。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2021",num:"10",subject:"min",q:`留置権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．留置権者が留置権を行使して目的物を留置している間は，留置権の被担保債権の消滅時効は，進行しない。
イ．賃借物について賃貸人Ａの負担に属する必要費を支出した賃借人Ｂは，賃貸借終了後，その償還請求権を被担保債権として留置権を行使している間に，更にＡの負担に属する必要費を支出した場合には，更に支出したものを含めた必要費全額の弁済を受けるまで，留置権を行使することができる。
ウ．留置権者は，債務者の承諾を得て留置物を第三者に賃貸してその賃料を自己の債権の弁済に充当することができる。
エ．建物の賃借人は，造作買取請求権の行使によって生じた賃貸人に対する代金債権を被担保債権として，建物について留置権を行使することができる。
オ．建物の賃借人が，賃貸借終了後，有益費の償還請求権を被担保債権として留置権を行使している場合において，賃貸人の請求により裁判所がその償還について期限を許与したときは，留置権は消滅する。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2021",num:"11",subject:"min",q:`ＡがＢに賃貸しているＡ所有の甲建物にＣのための抵当権が設定され，その登記がされている。この場合における抵当権に基づくＣの物上代位権の行使に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ｃのための抵当権の設定登記がされた後にＢがＡに対して金銭を貸し付け，その貸金債権の弁済期が到来した場合，ＡのＢに対する賃料債権についてＣが物上代位権を行使して差押えをした後であっても，Ｂは，Ａに対する貸金債権を自働債権とし，Ａの賃料債権を受働債権とする相殺をもって，Ｃに対抗することができる。
イ．ＡのＢに対する賃料債権についてＣが物上代位権を行使して差押えをした場合において，ＢがＣに賃料を支払わないままＡＢ間の賃貸借契約が終了し，Ｂが甲建物をＡに明け渡した。この場合において，ＢがＡにあらかじめ敷金を預託していたときは，Ｃが差し押さえた賃料債権は，敷金の充当によりその限度で消滅する。
ウ．Ｂが甲建物をＤに転貸した場合，Ｃは，ＢをＡと同視することが相当であるときを除き，ＢのＤに対する転貸賃料債権について物上代位権を行使することができる。
エ．ＡのＢに対する賃料債権をＡの一般債権者Ｅが差し押さえて転付命令を取得し，その転付命令がＢに送達された後は，Ｃは，同一の債権を差し押さえて物上代位権を行使してＥに対抗することができない。
オ．ＡのＢに対する賃料債権をＡの一般債権者Ｅが差し押さえ，その差押命令がＢに送達された後に，ＡがＣのために甲建物に抵当権を設定し，その登記がされた場合，Ｃは，同一の債権を差し押さえて物上代位権を行使してＥに対抗することができない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2021",num:"12",subject:"min",q:`動産質権に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．同一の動産について，複数の動産質権を設定することはできない。
イ．動産質権者は，質権設定者に，自己に代わって質物を占有させることができない。
ウ．動産質権者は，占有している質物について必要費を支出しても，所有者にその償還を請求することはできない。
エ．動産質権者は，被担保債権の弁済を受けないときは，正当な理由がある場合に限り，鑑定人の評価に従い質物をもって直ちに弁済に充てることを裁判所に請求することができる。
オ．動産質権者は，被担保債権について利息を請求する権利を有するときは，その満期となった最後の２年分についてのみ，その質権を行使することができる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2021",num:"13",subject:"min",q:`抵当権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．土地に抵当権が設定された後にその土地上に建物が築造された場合，抵当権者は，抵当権が設定されていない当該建物をその土地とともに一括して競売することができる。
イ．甲土地の所有権が自己にあると過失なく信じて１０年間その占有を継続した者は，甲土地上の抵当権の存在につき悪意であったときは，甲土地の所有権を時効取得することができない。
ウ．Ａが甲土地を賃借したが，その対抗要件を具備しない間に，甲土地にＢのための抵当権が設定されてその登記がされた。Ａは，この登記がされた後，賃借権の時効取得に必要とされる期間，甲土地を継続的に用益したとしても，競売により甲土地を買い受けたＣに対し，賃借権を時効により取得したと主張して，これを対抗することができない。
エ．ＡがＢ所有の甲土地を占有して取得時効が完成した後，所有権移転登記がされることのないまま，甲土地にＣのための抵当権が設定されてその登記がされた。Ａがその後引き続き時効取得に必要とされる期間，甲土地の占有を継続し，その期間の経過後に取得時効を援用した場合は，ＡがＣの抵当権の存在を容認していたときであっても，Ｃの抵当権は消滅する。
オ．債務の弁済と，当該債務の担保として設定された抵当権の設定登記の抹消登記手続とは，同時履行の関係に立つ。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2021",num:"14",subject:"min",q:`ＡがＢに対する債務を担保するために，Ａの所有する甲土地に第一順位の抵当権を設定し，その登記がされた。この場合における抵当権の処分に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ｂが，Ｃに対する債務を担保するために，甲土地の抵当権に転抵当権を設定したときは，Ａに対する通知又はＡの承諾がなければ，Ｃは，転抵当権の設定を受けたことをＡに対抗することができない。
イ．ＢがＡの一般債権者Ｄに対してその抵当権を譲渡するには，Ａの承諾を必要としない。
ウ．Ａが，甲土地について，Ｅのために第二順位の抵当権，Ｆのために第三順位の抵当権を設定し，その登記がされている場合において，ＢＦ間で抵当権の順位の変更が合意されたとき，その登記をしなければ変更の効力は生じない。
エ．Ａが，甲土地について，Ｇのために第二順位の抵当権，Ｈのために第三順位の抵当権を設定し，その登記がされている場合において，ＢのＨに対する抵当権の順位の譲渡は，その登記をしなければ譲渡の効力は生じない。
オ．Ａが，甲土地について，Ｉのために第二順位の抵当権を設定し，その登記がされている場合において，ＢがＩに対して抵当権の順位の放棄をしたときは，甲土地が競売されたときの配当において，ＩがＢに優先する。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2021",num:"15",subject:"min",q:`債務不履行による損害賠償に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．債務不履行に関して債権者に過失があった場合には，裁判所は，これを考慮して損害賠償の責任自体を否定することができる。
イ．金銭消費貸借契約による借入金返還債務の不履行に基づく損害賠償について，債務者は，不可抗力を理由として責任を免れることはできない。
ウ．特別の事情によって生じた損害については，当事者がその事情を現に予見していたときに限り，債権者は，その賠償を請求することができる。
エ．債務不履行による損害賠償は，金銭の支払以外の方法によってすることはできない。
オ．債権者が，損害賠償として，その債権の目的である物の価額の全部の支払を受けた場合，債務者は，債権者に対してその物に関する権利を取得する旨の意思表示をしなければ，その物に関する権利を取得することができない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2021",num:"16",subject:"min",q:`債務不履行による損害賠償についての契約条項に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．債務者は，一切損害賠償責任を負わない旨の免責条項がある場合でも，債務者が故意に債務を履行しなかったときには，当該免責条項による免責が認められない。
イ．損害賠償の額を予定する条項がある場合には，過失相殺による減額がされることはない。
ウ．定型約款中に損害賠償の額を予定する条項があって，定型約款準備者の相手方が，定型取引合意前に定型約款の内容を示すよう請求したにもかかわらず，定型約款準備者が正当な事由なくこれに応じないまま，定型取引合意がされたときは，当該条項は，合意されたものとはみなされない。
エ．債務不履行について履行に代わる損害賠償の額を予定した場合において，債務者からその予定額の支払の申出があったときでも，債権者は債務不履行を理由とする解除権の行使を妨げられない。
オ．違約金を定める条項は，実損害の賠償とは別に一定額の金銭を支払う旨の違約罰を定める条項であると推定される。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2021",num:"17",subject:"min",q:`債権者代位権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．債権者が債務者に属する権利を行使するためには，被保全債権がその権利の発生の前の原因に基づいて生じたものでなければならない。
イ．債権者は，債務者に属する権利であって差押えを禁じられたものについては，行使することができない。
ウ．債権者は，被代位権利の行使に係る訴えを提起したときは，遅滞なく，債務者に対し，訴訟告知をしなければならない。
エ．債権者は，債務者が第三者に対して負う債務に係る消滅時効の援用権を代位行使することができない。
オ．債権者が被代位権利の行使の事実を債務者に通知した場合であっても，債務者は被代位権利を行使することができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2021",num:"18",subject:"min",q:`Ａ，Ｂ及びＣの三人がＤに対して連帯して６００万円の金銭債権を有する場合（Ａ，Ｂ及びＣの分与されるべき利益は等しいものとする。）に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａは，Ｄに対して６００万円全額の請求をするに当たり，Ｂ及びＣの同意を得ることを要しない。
イ．ＡがＤに対して債権の全部を免除した場合であっても，ＢはＤに対して４００万円の限度で支払を請求することができる。
ウ．ＡのＤに対する権利が時効により消滅したが，ＢのＤに対する権利については消滅時効が完成していない場合，Ｂは，Ｄに対して６００万円の支払を請求することができる。
エ．ＤがＡに対して３００万円の金銭債権を有している場合において，ＤがＡに対して相殺を援用したときは，その相殺は２００万円の限度で効力を生ずる。
オ．ＣがＤを単独で相続した場合には，Ａは，Ｃに対して４００万円の支払を請求することができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2021",num:"19",subject:"min",q:`個人であるＡがＢのＣに対する債務を保証する場合に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａが，Ｂの委託を受けて，Ｂの事業に係る債務を保証しようとする場合，Ｂは，保証契約の締結に当たり，Ａに対し，Ｂの財産及び収支の状況について情報を提供しなければならない。
イ．Ｂの債務がＢの事業のために負担した貸金債務である場合，ＡＣ間の保証契約は，Ａが保証債務を履行する意思を保証契約の締結後速やかに公正証書で表示することにより，その効力を生ずる。
ウ．Ａが，Ｂの委託を受けて保証した場合，Ｃは，定期的に，Ａに対し，主たる債務の元本及び利息について，不履行の有無，残額及び弁済期が到来しているものの額に関する情報を提供しなければならない。
エ．Ｂがその有していた期限の利益を喪失した場合，Ｃは，Ａに対し，その旨を通知しなければならない。
オ．Ａの保証が根保証である場合，極度額が定められなければ，その効力は生じない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2021",num:"20",subject:"min",q:`債務引受に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．債務者が負担する債務の発生原因行為を債務者が詐欺を理由に取り消すことができる場合でも，引受人は，債権者に対して債務の履行を拒むことはできない。
イ．併存的債務引受は，債務者の意思に反する場合であっても，債権者と引受人となる者との契約により有効に成立する。
ウ．債務者と引受人となる者との間で免責的債務引受契約がされたときは，債権者への通知又は債権者の承諾により，その効力を債権者に対抗することができる。
エ．併存的債務引受において，引受人は，引き受けた債務を弁済した場合，債務者に対し，弁済額のうち債務者の負担部分に応じた額を求償することができる。
オ．免責的債務引受において，債権者は，債務者が免れる債務の担保として設定された担保権を，引受人が負担する債務に移すことはできない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2021",num:"21",subject:"min",q:`ＡのＢに対する金銭債権（以下「甲債権」という。）とＢのＡに対する金銭債権（以下「乙債権」という。）との相殺に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．甲債権と乙債権の両方の弁済期が到来した後，甲債権がＡからＣに譲渡され，その対抗要件が具備された。この場合において，Ｂは，ＣがＢのＣに対する金銭債権（丙債権）と甲債権とを相殺した後であっても，乙債権と甲債権との相殺をもってＣに対抗することができる。
イ．乙債権は，Ａの債権者であるＤが甲債権を差し押さえた後に，Ｂが他人から譲り受けたものであった。この場合，乙債権が差押え前の原因に基づいて生じたものであるとしても，Ｂは，乙債権と甲債権との相殺をもってＤに対抗することができない。
ウ．甲債権は，Ｂの悪意による不法行為に基づいて生じたＥのＢに対する損害賠償債権を，ＡがＥから譲り受けたものであった。この場合，Ｂは，乙債権と甲債権との相殺をもってＡに対抗することができる。
エ．甲債権の弁済期が到来した後に，Ａの債権者であるＦが甲債権を差し押さえた場合には，Ｂは，差押え前に取得していた乙債権の弁済期到来前であっても，乙債権と甲債権との相殺をもってＦに対抗することができる。
オ．Ａが甲債権をＧに譲渡し，その対抗要件が具備された後，Ｂが乙債権を取得した。この場合において，Ｂは，乙債権が対抗要件具備時より前の原因に基づいてＡＢ間で生じた債権であっても，乙債権と甲債権との相殺をもってＧに対抗することができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2021",num:"22",subject:"min",q:`契約の解除に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．解除権を有する者が，過失によって契約の目的物を返還することができなくなった場合には，自身が解除権を有することを知らなかったとしても，解除権は消滅する。
イ．契約の性質又は当事者の意思表示により，特定の日時又は一定の期間内に履行をしなければ契約の目的を達成することができない債務について，債務者が履行をしないでその時期を経過したときは，契約の解除をすることなく，当該債務は当然にその効力を失う。
ウ．債務の一部の履行が不能である場合において，残存する部分のみでは契約をした目的を達することができないときは，債権者は，催告をすることなく，直ちに契約の全部の解除をすることができる。
エ．解除権の行使について期間の定めがない場合において，相手方が，解除権を有する者に対し，相当の期間を定めて，その期間内に解除をするかどうかを確答すべき旨の催告をしたにもかかわらず，当該期間内に解除の通知を受けないときは，解除権は消滅する。
オ．解除権が行使された場合の原状回復において，金銭以外の物を返還するときは，その物を受領した時以後に生じた果実をも返還しなければならない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2021",num:"23",subject:"min",q:`ＡＢ間の売買契約において，売主Ａが買主Ｂに対して引き渡した目的物の数量が不足しており，契約の内容に適合しない場合の買主Ｂの権利に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．数量の不足がＡＢいずれの責めにも帰することができない事由によって生じた場合，ＢはＡＢ間の売買契約を解除することができない。
イ．数量の不足がＢの責めに帰すべき事由によって生じた場合，ＢはＡＢ間の売買契約を解除することができない。
ウ．数量の不足がＢの責めに帰すべき事由によって生じた場合，不足分の引渡しが可能であっても，Ｂは不足分の引渡しを請求することができない。
エ．不足分の引渡しが可能であり，Ａがその引渡しを申し出た場合であっても，Ｂは，その申出を拒んで直ちに代金の減額を請求することができる。
オ．Ｂが数量の不足を知った時から１年以内にその旨をＡに通知しない場合には，Ａが引渡しの時に数量の不足を知り又は重大な過失によって知らなかったときを除き，Ｂは損害賠償の請求をすることができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2021",num:"24",subject:"min",q:`贈与に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．死因贈与は，書面によることを要せず，当事者の合意のみで成立する。
イ．贈与者は，特約のない限り，目的物が特定した時の状態でこれを引き渡せば足りる。
ウ．受贈者は，贈与契約が書面によらない場合であっても，履行の終わっていない部分について贈与契約を解除することができない。
エ．負担付贈与においては，贈与者は，受贈者がその負担である義務の履行を怠ったことを理由として，贈与契約を解除することができない。
オ．登記された建物が書面によらずに贈与された場合，贈与者は，受贈者への目的物の引渡し及び所有権移転登記の双方がされるまでは，贈与契約を解除することができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2021",num:"25",subject:"min",q:`Ａは，Ｂとの間で，Ａが所有する甲建物をＢに使用させる旨の使用貸借契約を締結した。この場合におけるＡＢ間の法律関係について述べた次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ｂは，Ａの承諾がなくても，甲建物を第三者に使用させることができる。
イ．ＡＢ間の使用貸借契約が書面によるものでないときは，Ａは，甲建物をＢに引き渡すまでは，いつでもその契約を解除することができる。
ウ．Ｂは，甲建物について通常の必要費を支出したときは，その必要費をＡに請求することができる。
エ．ＡＢ間の使用貸借契約は，Ｂが展示会乙を開催することを目的とするものであった場合には，貸借期間を合意で決めていなかったとしても，展示会乙の会場としての使用を終えることによって終了する。
オ．Ｂは，甲建物を使用するに当たり，その壁面に取り外しができる棚を造り付けた。Ｂは，使用貸借契約が終了したときは，その取り外しに過分の費用を要するのでない限り，その棚を収去しなければならない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2021",num:"26",subject:"min",q:`賃貸借に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．処分の権限を有しない者は，短期賃貸借の存続期間を超える賃貸借をすることはできない。
イ．賃貸物である不動産が譲渡された場合，譲渡人と譲受人との間で賃貸人たる地位を譲受人に移転させる旨の合意をしても，賃借人の承諾がなければ，賃貸人たる地位を譲受人に移転させることはできない。
ウ．不動産賃貸借の対抗要件を備えた賃借人は，その不動産を第三者が正当な権原なく占有しているときには，その第三者に対して返還の請求をすることができる。
エ．耕作を目的とする土地の賃借人は，不可抗力によって賃料より少ない収益しか得られなかったときであっても，賃料の減額を請求することはできない。
オ．賃借物の全部が滅失その他の事由により使用及び収益をすることができなくなった場合には，賃貸借はこれによって終了する。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2021",num:"27",subject:"min",q:`寄託に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．寄託は，当事者の一方がある物を保管することを相手方に委託し，相手方がこれを承諾することによって，その効力を生ずる。
イ．受寄者は，寄託者の承諾を得なくても，やむを得ない事由があるときは，寄託物を第三者に保管させることができる。
ウ．受寄者は，寄託物について権利を主張する第三者から訴えを提起された場合には，寄託者が既にこれを知っているときを除き，遅滞なくその事実を寄託者に通知しなければならない。
エ．当事者が寄託物の返還の時期を定めた場合には，寄託者は，その返還の時期が到来するまで寄託物の返還を請求することができない。
オ．複数の者が寄託した物の種類及び品質が同一である場合には，受寄者は，各寄託者の承諾を得なくても，これらを混合して保管することができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2021",num:"28",subject:"min",q:`組合に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．金銭を出資の目的とした場合には，その出資を怠った組合員は，その利息を支払うほか，損害の賠償をしなければならない。
イ．組合の債権者は，債権の発生の時に各組合員の損失分担の割合を知っていた場合であっても，その選択に従い，各組合員に対して等しい割合でその権利を行使することができる。
ウ．組合員の債権者は，組合財産について，その組合員の持分の限度で権利を行使することができる。
エ．組合契約において，当事者が損益分配の割合を定めなかったときは，利益及び損失は，各組合員に等しい割合で分配される。
オ．脱退した組合員は，その脱退前に生じた組合の債務について，従前の責任の範囲内で弁済する責任を負う。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2021",num:"29",subject:"min",q:`不法行為に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．未成年者が他人に損害を加えた場合，その未成年者の親権者が損害賠償責任を負うことはあっても，未成年者が損害賠償責任を負うことはない。
イ．故意又は過失によって一時的に自己の行為の責任を弁識する能力を欠く状態を招いた者は，その状態にある間に他人に加えた損害について賠償責任を負う。
ウ．使用者が被用者の加害行為につき使用者責任に基づいて第三者に損害賠償をした場合であっても，使用者の被用者に対する求償権は生じない。
エ．請負人がその仕事について第三者に損害を加えた場合，注文又は指図について過失のない注文者は，その第三者に対する損害賠償責任を負わない。
オ．人の生命又は身体を害する不法行為による損害賠償請求権は，時効によって消滅しない。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2021",num:"30",subject:"min",q:`内縁関係にあるＡ男とＢ女に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡＢがＢの賃借したアパートで同居していた場合において，Ｂが死亡してＢに相続人がいないときは，Ａは，そのアパートの賃借人の権利義務を承継する。
イ．ＡＢの間に子Ｃが出生し，ＡがＣを認知した場合には，Ｃに対する親権は，ＡＢが共同して行う。
ウ．ＡＢがＢの所有する建物で同居していた場合において，Ｂの死亡により内縁関係が解消したときは，Ａは，Ｂの相続人に対して建物の所有権について財産分与を請求することができる。
エ．ＡがＢに無断で婚姻届を作成して届出をした場合において，Ｂが後に届出の事実を知ってこれを追認したときは，届出の当初に遡ってその婚姻が有効となる。
オ．Ａが日常の家事に関して第三者と取引をした場合，Ｂは，その取引によって生じた債務について責任を負わない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2021",num:"31",subject:"min",q:`親権に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａに対して親権を行うＢは，Ａに代わって，Ａの子であるＣに対して親権を行う。
イ．親権を行う者は，子の利益のために子の監護及び教育をする権利を有し，義務を負う。
ウ．子は，職業を営むに当たっては，親権を行う者の許可を得ることを要しない。
エ．父又は母による親権の行使が困難又は不適当であることにより子の利益を害するときであっても，子の祖父母は，親権停止の審判の請求をすることができない。
オ．親権を行う父又は母は，やむを得ない事由があるときは，家庭裁判所の許可を得て，親権又は管理権を辞することができる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2021",num:"32",subject:"min",q:`妻Ａと夫Ｂの間に子Ｃが，Ｂには父Ｄ及び弟Ｅが，Ａには前夫との間の子Ｆがいる。この事例に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ｃは，Ｂから扶養を受ける権利をＦに譲渡することはできない。
イ．ＡとＢが離婚した時にＣが未成年者であった場合において，Ｃの親権者をＡと定めたときは，ＢはＣに対する扶養義務を負わない。
ウ．Ｄを扶養すべき者の順序については，子であるＢ及びＥが先順位であり，孫であるＣが後順位である。
エ．家庭裁判所は，特別な事情があるときは，Ｅを扶養する義務をＡに負わせることができる。
オ．Ａを扶養してきたＣが，過去の扶養料をＦに求償する場合において，各自の分担額の協議が調わないときは，家庭裁判所が各自の資力その他一切の事情を考慮してこれを定める。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2021",num:"33",subject:"min",q:`相続分に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．共同相続人は，遺言によって相続分の指定がされた場合には，協議によって，指定された相続分と異なる相続分の割合による遺産分割をすることができない。
イ．共同相続人の一人であるＡが相続放棄をした後，被相続人がＡの相続分を指定する内容の遺言をしていたことが判明した場合には，Ａは，その遺言に従って相続をする。
ウ．共同相続人の一人は，自己の相続分を他の共同相続人以外の第三者に譲渡することができない。
エ．共同相続人の一人であるＡが自己の相続分の全部を他の共同相続人Ｂに譲渡した場合には，Ａは，遺産分割協議の当事者となることができない。
オ．遺言によって相続分の指定がされた場合であっても，相続債権者は，指定された相続分に応じた債務の承継を承認しない限り，法定相続分に応じて権利を行使することができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2021",num:"34",subject:"min",q:`被相続人Ａの配偶者Ｂは，Ａの死亡時に，Ａの財産に属していた甲建物に居住していた。この場合における甲建物についてのＢの配偶者居住権に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡＢの子であるＣが，Ａの死亡時に甲建物をＡと共有していた場合は，Ｂは，配偶者居住権を取得しない。
イ．配偶者居住権を取得したＢは，その配偶者居住権を譲渡することができる。
ウ．配偶者居住権を取得したＢは，甲建物の使用及び収益に必要な修繕をすることができる。
エ．相続によりＡから甲建物の所有権を取得したＤは，配偶者居住権を取得したＢに対し，配偶者居住権の設定の登記を備えさせる義務を負う。
オ．遺贈によりＢが配偶者居住権を取得した後，遺産分割によりＢ及び相続人Ｅが甲建物の共有持分をそれぞれ有するに至った場合は，その配偶者居住権は消滅する。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2021",num:"35",subject:"min",q:`遺留分に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．相続人が配偶者と妹一人のみであった場合には，妹は，遺留分を算定するための財産の価額に８分の１を乗じた額を遺留分として受ける。
イ．遺留分を算定するための財産の価額は，被相続人が相続開始の時において有した財産の価額にその贈与した財産の価額を加えた額から債務の全額を控除した額である。
ウ．相続開始前における遺留分の放棄は，家庭裁判所の許可を受けたときに限り，その効力を生ずる。
エ．共同相続人の一人が遺留分を放棄した場合は，他の各共同相続人の遺留分が増加する。
オ．遺留分権利者は，受遺者又は受贈者に対し，遺留分侵害額に相当する金銭の支払を請求することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2021",num:"36",subject:"min",q:`費用の負担に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．相続財産に関する費用は，相続人の過失によるものを除き，相続財産の中から支弁する。
イ．債務者が債務の履行を提供したが，債権者が債務の履行を受けることができなかった場合，それによって増加した履行の費用は，債務者が負担する。
ウ．賃貸借契約の締結に関する費用は，当事者双方が等しい割合で負担する。
エ．Ａの所有する甲土地を悪意で占有していたＢは，甲土地をＡに返還する場合には，甲土地に関して支出した通常の必要費の償還をＡに請求することはできない。
オ．Ａの所有する甲建物の配偶者居住権を有するＢは，甲建物をＡに返還する場合において，それ以前に支出した有益費につき，その価格の増加が返還時に現存するときは，Ａの選択に従い，その支出した金額又は増価額について償還を受けることができる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2021",num:"37",subject:"min",q:`書面等による契約に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．住宅の所有を目的として締結された定期借地権の設定契約は，公正証書によらなければその効力を生じない。
イ．保証契約は，その合意が電子メールを相互に送受信する方法によってされた場合には，書面が作成されていなくてもその効力を生じる。
ウ．贈与契約において，贈与者の意思表示が書面によってされている場合には，受贈者の意思表示が書面によってされていないときでも，贈与者は，贈与契約の解除をすることができない。
エ．金銭消費貸借契約は，書面によってされた場合であっても，借主が貸主から合意した金銭を受け取るまでは，その効力を生じない。
オ．書面によらない有償寄託契約の受寄者は，寄託物を受け取るまでは契約の解除をすることができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2021",num:"1",subject:"kei",q:"過失犯に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．共同正犯に関する刑法第６０条は，意思の連絡を要件としているので，過失犯には適用されない。",c2:"２．重過失とは，重大な結果を惹起する危険のある不注意な行為をすることをいう。",c3:"３．過失犯の成立に必要となる結果発生の予見可能性は，内容の特定しない一般的・抽象的な危惧感ないし不安感を抱く程度の予見の可能性で足りる。",c4:"４．行為者が法令に違反する行動をした事案においても信頼の原則が適用される場合がある。",c5:"５．ホテルの火災により死傷者が出た場合，火災発生時に現場にいなかったホテル経営者には業務上過失致死傷罪が成立することはない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2021",num:"2",subject:"kei",q:`住居侵入等の罪に関する次のアからオまでの各記述を判例の立場に従って検討し，正しい場合には１を，誤っている場合には２を選びなさい。
ア．甲は，警察署の敷地内に駐車中の捜査用車両のナンバーを把握しようと考え，外部から同敷地内への交通を制限するために設置され，内部をのぞき見ることができない構造になっている高さ２．５メートル，幅０．２メートルの同警察署の塀をよじ登り，その上に立った。この場合，甲には，建造物侵入未遂罪が成立するにとどまる。
イ．甲は，窃盗の目的で，乙が所有し，その扉や窓に施錠して管理していた空き家に立ち入った。この場合，甲には，邸宅侵入罪が成立する。
ウ．甲は，強盗の目的で，面識のない乙方に行き，その意図を隠しながら，玄関前で，「こんばんは。」と挨拶したところ，これを知人による来訪と勘違いした乙が，「どうぞ入ってください。」と答えたので，乙方内に立ち入った。この場合，甲には，住居侵入罪は成立しない。
エ．甲は，乙会社が所有するビルに窃盗に入る目的で，同ビルに接しており，同社が設置した門扉及び金網フェンスによって，同ビルの利用のために供されるものであることが明示され，部外者の出入りが制限されている敷地部分に立ち入ったが，同ビルに立ち入る前に警備員に取り押さえられた。この場合，甲には，建造物侵入未遂罪が成立するにとどまる。
オ．甲は，住居権者乙の意思に反し，乙方家屋に立ち入ったが，その後，乙から退去を求められたにもかかわらず数時間にわたって同家屋に居座った。この場合，甲には，住居侵入罪だけでなく，不退去罪も成立し，両罪は併合罪となる。`,c1:`２．５メートル，幅０．２メートルの同警察署の塀をよじ登り，その上に立った。この場合，甲には，建造物侵入未遂罪が成立するにとどまる。［No.２］
イ．甲は，窃盗の目的で，乙が所有し，その扉や窓に施錠して管理していた空き家に立ち入った。この場合，甲には，邸宅侵入罪が成立する。［No.３］
ウ．甲は，強盗の目的で，面識のない乙方に行き，その意図を隠しながら，玄関前で，「こんばんは。」と挨拶したところ，これを知人による来訪と勘違いした乙が，「どうぞ入ってください。」と答えたので，乙方内に立ち入った。この場合，甲には，住居侵入罪は成立しない。［No.４］
エ．甲は，乙会社が所有するビルに窃盗に入る目的で，同ビルに接しており，同社が設置した門扉及び金網フェンスによって，同ビルの利用のために供されるものであることが明示され，部外者の出入りが制限されている敷地部分に立ち入ったが，同ビルに立ち入る前に警備員に取り押さえられた。この場合，甲には，建造物侵入未遂罪が成立するにとどまる。［No.５］
オ．甲は，住居権者乙の意思に反し，乙方家屋に立ち入ったが，その後，乙から退去を求められたにもかかわらず数時間にわたって同家屋に居座った。この場合，甲には，住居侵入罪だけでなく，不退去罪も成立し，両罪は併合罪となる。［No.６］`,c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"21222"},{year:"2021",num:"3",subject:"kei",q:`次の【事例】及び【判旨】に関する後記１から５までの各【記述】のうち，正しいものを２個選びなさい。
【事 例】
Ｘは，Ａに電話を掛け，本来支払う必要のない違約金をＡが支払わなければならない旨うそを告げた。Ａはうそを見破ったが，警察官から，「だまされたふり作戦」（引き続き犯人側の要求どおりに行動しているふりをして犯人を現行犯逮捕しようとする捜査手法をいう。）に協力することを依頼された。Ａはこれに応じ，現金を某所に送付するようにというＸの指示に従ったふりをして，現金の代わりに模擬紙幣が入った荷物を同所に向けて発送した。その後，被告人は，Ｘから，報酬を支払う約束の下に荷物の受領を依頼され，詐欺の被害金を受け取る役割である可能性を認識しつつ，これを引き受け，「だまされたふり作戦」が開始されたことを認識せずに，上記場所で同荷物を受領し，警察官に現行犯逮捕された。
【判 旨】
被告人は，本件につき，Ｘによる欺罔行為がされた後，「だまされたふり作戦」が開始されたことを認識せずに，Ｘと共謀の上，本件を完遂する上で欺罔行為と一体のものとして予定されていた受領行為に関与している。そうすると，「だまされたふり作戦」の開始の有無にかかわらず，被告人は，その加功前の欺罔行為を含めた本件につき，詐欺未遂罪の共同正犯としての責任を負うと解するのが相当である。
【記 述】`,c1:"１．【判旨】は，被告人に詐欺未遂罪の共同正犯が成立するには，前記荷物の受領行為自体に未遂犯として処罰すべき法益侵害の危険性が必要であり，その危険性の有無は，一般人が認識可能であった事情及び被告人が特に認識した事情に基づいて判断すべきという立場に立った上で，一般人は，Ａが「だまされたふり作戦」に協力している事実を認識することが可能であったとの評価を前提としている。",c2:"２．【判旨】に対しては，Ａがうそを見破っている以上，被告人が関与した時点では，詐欺罪が既遂に至る可能性がなく，被告人が法益侵害の危険性を惹起したとはいえないとの批判が考えられる。",c3:"３．【判旨】を前提とした場合，強盗罪における財物奪取行為のみに関与した者には，同罪の共同正犯の成立を認めることはできない。",c4:"４．【判旨】は，欺罔行為と財物受領行為の一体性を根拠として，財物受領行為のみに関与した者について，詐欺罪の承継的共同正犯を認めるとの立場と矛盾するものではない。",c5:"５．【判旨】によれば，被告人がＸのＡに対する欺罔行為の内容を認識していても，同欺罔行為を自己の犯罪の手段として積極的に利用する意思がない場合には，詐欺未遂罪の共同正犯の成立が否定される。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"24"},{year:"2021",num:"4",subject:"kei",q:`汚職の罪に関する次のアからオまでの各記述を判例の立場に従って検討した場合，正しいものの組合せは，後記１から５までのうちどれか。
ア．公務員になろうとする者が，その担当すべき職務に関し，請託を受けて，賄賂の収受を約束した後に公務員となったが，結局，賄賂を収受しなかった場合，事前収賄罪（刑法第１９７条第２項）が成立する。
イ．公務員が，その職務に関し，請託を受けて，第三者に賄賂を供与させた場合，職務上不正な行為をし，又は相当の行為をしなかったときに限り，第三者供賄罪（刑法第１９７条の２）が成立する。
ウ．公務員が，その職務に関し，賄賂を収受したとき，当該職務が適切なものであっても単純収賄罪（刑法第１９７条第１項前段）が成立する。
エ．公務員であった者が，その在職中に請託を受けて職務上不正な行為をしたことに関し，退職後に賄賂を収受した場合，事後収賄罪（刑法第１９７条の３第３項）は成立しない。
オ．犯人が収受した賄賂は，任意的没収の対象となる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2021",num:"5",subject:"kei",q:`次の【事例】及び各【見解】に関する後記１から５までの各【記述】を検討した場合，誤っているものはどれか。なお，共同正犯に関する刑法第６０条は，結果的加重犯にも適用されることを前提とする。
【事 例】
甲乙両名は，２人でＶに向けて石を投げることにし，それぞれＶに石を投げた。その際，甲には，傷害の故意しかなかったのに対し，乙には，未必的な殺意があった。両名が投げた石のうち，甲の投げた石がＶの頭部に当たり，Ｖが死亡するに至った。
【見 解】
Ａ説：共同正犯とは，数人が共同して特定の犯罪を行うことであり，構成要件の間に重なり合いがあれば，そのうちのより重い犯罪について共同正犯の成立を認め，軽い犯罪の故意しか有しない者には，軽い犯罪の刑を科す。
Ｂ説：共同正犯とは，数人が共同して特定の犯罪を行うことであり，構成要件の重なり合う限度で軽い犯罪の共同正犯の成立を認め，重い犯罪の故意を有する者には，共同正犯とは別に，その故意に応じた単独犯の成立を認める。
Ｃ説：共同正犯とは，数人が犯罪に至る行為過程を含めた行為を共同することであり，特定の犯罪を共同して実現する場合はもちろん，単なる行為を共同して各自の意図する犯罪を実現する場合も，それぞれの行為について共同正犯の成立を認める。
【記 述】`,c1:"１．Ａ説からは，甲と乙に殺人罪の共同正犯が成立するとの結論が導かれる。",c2:"２．Ａ説に対しては，罪名と科刑が分離し，妥当でないとの批判がある。",c3:"３．Ｂ説に対しては，重い犯罪の故意を有する乙について，重い犯罪の単独犯として構成した場合には，自らの行為と死亡結果の因果性を欠くことから，殺人既遂罪の成立を認めることが困難となるとの指摘がある。",c4:"４．Ｂ説とＣ説とで，甲に成立する罪名は異ならない。",c5:"５．Ｃ説からは，甲と乙に傷害致死罪の共同正犯が成立するにとどまるとの結論が導かれる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2021",num:"6",subject:"kei",q:"文書偽造の罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものを２個選びなさい。",c1:"１．偽造公文書行使罪の客体は，行使の目的で作成されたものでなければならない。",c2:"２．公務員である医師が，自己の勤務する市立病院の患者が裁判所に提出するための診断書に虚偽の病名を記載した場合，虚偽公文書作成罪が成立する。",c3:"３．行使の目的で，公務員の名義を冒用して公文書を作成したが，実際には当該公務員に当該文書の作成権限がなかった場合，当該文書が当該公務員の職務権限内で作成されたものと一般人が信じるに足る形式・外観を備えていれば，公文書偽造罪が成立する。",c4:"４．警察官から提示を求められたときに備え，偽造された自動車運転免許証を携帯して自動車を運転した場合，偽造公文書行使罪が成立する。",c5:"５．上司である公文書の作成権限のある公務員を補佐して公文書の起案を担当する公務員が，その地位を利用し，行使の目的で，その職務上起案を担当する公文書に内容虚偽の記載をした上，情を知らない上司に，当該文書の内容が真実であると誤信させ，これに署名押印させた場合，虚偽公文書作成罪は成立しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"23"},{year:"2021",num:"7",subject:"kei",q:`次のアからオまでの各記述を判例の立場に従って検討した場合，誤っているものの組合せは，後記１から５までのうちどれか。
ア．甲は，情を知らない法務局の担当登記官Ａに対し，虚偽の申立てをして登記簿の磁気ディスクに不実の記録をさせた後，当該記録の内容を閲覧可能な状態にした。この場合，甲には，電磁的公正証書原本不実記録罪及び同供用罪が成立し，これらは牽連犯となる。
イ．甲は，乙がＡ及びＢをバットで順次殴打して両名を負傷させた際，これに先立ち，乙の意図を知りながら，乙にバットを手渡してそれらの犯行を幇助した。この場合，甲には，Ａ及びＢに対する２個の傷害罪の幇助犯が成立し，これらは観念的競合となる。
ウ．甲は，Ａ名義の預金口座から現金を引き出す目的で，ＡからＡ名義のキャッシュカードをだまし取るとともに，暗証番号を聞き出し，銀行の現金自動預払機で同キャッシュカードを使用して現金を引き出した。この場合，甲には，詐欺罪及び窃盗罪が成立し，これらは牽連犯となる。
エ．甲は，強制性交の目的でＡ宅に侵入したが，Ａが不在であったため目的を遂げられなかった。その後，甲は，居間に置かれていたＡ所有の腕時計を発見し，窃取しようと考えてこれを持ち去った。この場合，甲には，住居侵入罪及び窃盗罪が成立するが，これらは併合罪となる。
オ．甲は，身の代金を得る目的でＡを拐取した後，甲の自宅に監禁し，その間にＡの実父Ｂに対し，電話で身の代金を要求した。この場合，甲には，身の代金目的拐取罪，監禁罪及び拐取者身の代金要求罪が成立し，身の代金目的拐取罪と拐取者身の代金要求罪が牽連犯となり，これらの各罪と監禁罪は併合罪となる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2021",num:"8",subject:"kei",q:`学生Ａ，Ｂ及びＣは，次の【会話】のとおり議論している。【会話】中の①から⑥までの（ ）内に後記【語句群】から適切な語句を入れた場合，正しいものの組合せは，後記１から５までのうちどれか。なお，①から⑥までの（ ）内にはそれぞれ異なる語句が入る。
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
ｊ．公立学校の入学試験監督員である教員を拳で殴って試験会場に入るのを阻止した`,c1:"１．①ａ ②ｃ ③ｊ",c2:"２．①ａ ④ｂ ⑥ｅ",c3:"３．②ｃ ③ｈ ④ａ",c4:"４．③ｈ ⑤ｉ ⑥ｇ",c5:"５．④ｂ ⑤ｊ ⑥ｇ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2021",num:"9",subject:"kei",q:`次のアからオまでの各記述を判例の立場に従って検討し，正しい場合には１を，誤っている場合には２を選びなさい。
ア．甲は，勤務先の事務室で１人で残業をしていたところ，使用中の電気ストーブから周囲の可燃物に誤って引火させた。甲は，その時点での消火作業は容易であったにもかかわらず，同室を含む勤務先建物が焼損することを認容して，消火作業をすることなく，同室から立ち去り，その結果，同建物が全焼した。その行為当時，同建物の他の部屋では甲の同僚が仮眠中であり，甲もそのことを認識していた。この場合，甲に既発の火力を利用する意思がなければ，現住建造物等放火罪は成立しない。
イ．甲は，Ｖと２人きりのホテル客室で，その同意の下，Ｖに対し，覚醒剤を注射したところ，Ｖが体調の異変を訴え，錯乱状態に陥ったため，救急医療を要請する必要があることを認識し，その要請をしていれば，Ｖの救命は確実であったにもかかわらず，その要請をすることなく，Ｖを放置したまま同室から立ち去り，その結果，Ｖが死亡したが，甲に殺意はなかった。この場合，甲がＶを放置した行為とＶの死亡との間の因果関係に欠けることはなく，甲には，保護責任者遺棄等致死罪が成立する。
ウ．甲は，深夜，自動車を運転中，路上で過失により通行人Ｖに同車を衝突させて，歩行不能の重傷を負わせた上，一旦Ｖを同車に乗せて，降雪中の周囲にひとけのない路上に移動し，Ｖに対し，医師を呼んでくるとうそを言って，Ｖを同車から降ろし，同車で同路上から立ち去ったが，甲に殺意はなかった。この場合，甲には，Ｖを保護する責任があり，保護責任者遺棄等罪が成立する。
エ．甲は，自己の口座に振込先を誤った振込入金があったことを知ったが，銀行窓口において，窓口係員に対し，その受取人として上記の誤った振込入金があった旨を告知せずに，その払戻しを請求し，事情を知らない同係員をして，払戻しに応じさせた。この場合，甲には，上記の誤った振込入金があったことを告知する義務はなく，詐欺罪は成立しない。
オ．甲は，面識のない他人のＶと口論に及び，その首を絞めて窒息死させ，Ｖの死体をその場に放置して逃走した。この場合，甲には葬祭義務はなく，死体遺棄罪は成立しない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"21121"},{year:"2021",num:"10",subject:"kei",q:`窃盗罪における不法領得の意思についての次の各【見解】に従って後記の各【事例】における甲の罪責を検討した場合，後記１から５までの各【記述】のうち，正しいものはどれか。なお，後記の各【事例】における甲の行為は，いずれも窃盗罪の客観的要件を全て満たすものとする。
【見 解】
Ａ．不法領得の意思として，権利者を排除して所有者として振る舞う意思及び何らかの用途に従って利用・処分する意思が必要である。
Ｂ．不法領得の意思として，権利者を排除して所有者として振る舞う意思は必要であるが，何らかの用途に従って利用・処分する意思は不要である。
Ｃ．不法領得の意思として，何らかの用途に従って利用・処分する意思は必要であるが，権利者を排除して所有者として振る舞う意思は不要である。
Ｄ．不法領得の意思は不要である。
【事 例】
Ⅰ．甲は，勤務先の会社の上司乙を困らせる目的で，乙が机の引き出し内に保管していた同社の銀行届出印をひそかに持ち出し，自宅の天井裏に隠匿した。
Ⅱ．甲は，乙が不在であることを知り，一時的に借用して直ちに戻す意思で，乙方の玄関先に無施錠で駐輪されていた乙の自転車を無断で乗り出し，１００メートル先の店まで移動して用事を済ませ，その乗り出しから５分後，同自転車を同玄関先に戻した。
Ⅲ．甲は，Ｘ市議会議員選挙に際し，候補者乙の得票数を水増しする目的で，同市選挙管理委員会が保管していた投票用紙５０枚を投票所から持ち出し，乙の支持者らに交付して乙に対する投票を依頼した。
【記 述】`,c1:"１．Ａ及びＢいずれの見解によっても，事例Ⅰでは窃盗罪が成立する。",c2:"２．Ａ及びＤいずれの見解によっても，事例Ⅱでは窃盗罪が成立する。",c3:"３．Ｂ及びＣいずれの見解によっても，事例Ⅱでは窃盗罪が成立する。",c4:"４．Ｂ及びＤいずれの見解によっても，事例Ⅲでは窃盗罪が成立する。",c5:"５．Ｃ及びＤいずれの見解によっても，事例Ⅰでは窃盗罪が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2021",num:"11",subject:"kei",q:"刑法上の没収及び追徴に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．犯罪行為の用に供した物（刑法第１９条第１項第２号）の没収は，物の危険性に着目した処分であるため，行為者が責任無能力を理由に無罪の言渡しをされたときであっても科すことができる。",c2:"２．犯罪行為の報酬として得た貴金属を売却して得た現金は，追徴ではなく，没収の対象となる。",c3:"３．強制性交の犯人が，被害者に犯行の様子を撮影録画したことを知らせて捜査機関に対し処罰を求めることを断念させる目的で，ひそかに撮影録画したデジタルビデオカセットは，犯罪行為の用に供した物ではないため，没収の対象とならない。",c4:"４．犯罪行為によって得た物(刑法第１９条第１項第３号)は，犯罪により不当に得た利益を犯人から剥奪する必要があるため，任意的没収ではなく，必要的没収の対象となる。",c5:"５．没収の対象は，刑罰の一身専属性の見地から，犯人の所有物に限られる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2021",num:"12",subject:"kei",q:`名誉毀損罪及び侮辱罪に関する次のアからオまでの各記述を判例の立場に従って検討した場合，正しいものの組合せは，後記１から５までのうちどれか。
ア．事実を摘示せずに公然と人を侮辱することを教唆した者に，侮辱教唆罪が成立することはない。
イ．弁護人が被告人の利益を擁護するためにした弁護活動であれば，それが名誉毀損罪の構成要件に該当する行為であっても，違法性が阻却されるため，名誉毀損罪が成立することはない。
ウ．人の社会的評価を害するに足りる事実を公然と摘示したとしても，その人の社会的評価が現実に害されていない場合，刑法第２３０条第１項にいう「人の名誉を毀損した」とはいえないため，名誉毀損罪は成立しない。
エ．私人の私生活の行状であっても，その携わる社会的活動の性質及びこれを通じて社会に及ぼす影響力の程度等によっては，刑法第２３０条の２第１項にいう「公共の利害に関する事実」に当たる場合がある。
オ．インターネットを利用して公然と虚偽の事実を摘示し，人の名誉を毀損した場合，他の表現手段を利用する場合と異なり，インターネットの個人利用者に要求される水準を満たす調査によって摘示した事実が真実か否かを確かめることなく発信したときに限り名誉毀損罪が成立する。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2021",num:"13",subject:"kei",q:`次の【事例】に関する後記アからオまでの各【記述】のうち，甲に殺人未遂罪の成立を認めるための論拠として適切なものの組合せは，後記１から５までのうちどれか。
【事 例】
甲は，知人の乙に，毒物を混入したワイン（以下「本件ワイン」という。）を送り付ければ，乙がそれを自ら飲んで死亡すると考えた。甲は，某日，本件ワインを宅配業者の事務所に持ち込み，３日後の配達指定をして，乙宅への配達を申し込んだ。しかし，本件ワインは，申込み当日，同事務所での保管中に瓶が破損して廃棄処分となったため，乙宅に配達されることはなかった。
【記 述】
ア．間接正犯の実行の着手については，被利用者の行為を基準として実行の着手を判断すべきところ，本件では，それと同様の考え方が妥当する。
イ．結果発生の一定の蓋然性が生じれば，未遂犯の成立を認めることができるところ，我が国の一般的な宅配業務の実情を前提とした場合，本件ワインの配達を申し込んだ時点で乙宅に到着することはほぼ確実といえる。
ウ．実行の着手は，行為者が，その犯行計画上，構成要件実現のためになすべきことを行った時点で認めることができる。
エ．甲が，宅配業者に依頼せず，自ら乙宅に本件ワインを届けようとした場合には，乙宅に本件ワインを届けるまでは殺人未遂罪が成立しないこととの均衡を考慮する必要がある。
オ．既遂結果発生の時間的に切迫した危険を内容とする未遂結果は，刑法第４３条の書かれざる構成要件要素である。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2021",num:"14",subject:"kei",q:`証拠隠滅等罪（刑法第１０４条）に関する次のアからオまでの各記述を判例の立場に従って検討した場合，正しいものの個数を後記１から５までの中から選びなさい。
ア．自己の犯罪行為に関する証拠の隠滅を他人に教唆し実行させた場合，証拠隠滅罪の教唆犯は成立しない。
イ．自己の配偶者の犯罪行為に関する証拠を隠滅した場合，証拠隠滅罪が成立する。
ウ．貸金返還請求訴訟における被告が，同訴訟の証拠である消費貸借契約書の原本を焼却した場合，証拠隠滅罪は成立しない。
エ．被告人の友人が，被告人の犯罪行為に関する偽証を証人に教唆し実行させた場合，証拠偽造罪の教唆犯は成立しない。
オ．いまだ捜査が開始されていない段階で，他人の犯罪行為に関する証拠を隠滅した場合，証拠隠滅罪が成立する。`,c1:"１．１個",c2:"２．２個",c3:"３．３個",c4:"４．４個",c5:"５．５個",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2021",num:"15",subject:"kei",q:`刑法第６５条について，学生Ａ，Ｂ及びＣが次の【会話】のとおり議論している。【会話】中の①から⑪までの（ ）内に後記【語句群】から適切な語句を入れた場合，正しいものの組合せは，後記１から５までのうちどれか。なお，①から⑪までの（ ）内にはそれぞれ異なる語句が入る。
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
ｌ．刑法第２１７条の罪の教唆犯が成立する`,c1:"１．①ｂ ⑤ａ ⑨ｋ",c2:"２．②ｄ ⑥ｅ ⑪ｈ",c3:"３．②ｆ ⑦ｉ ⑧ｊ",c4:"４．③ｃ ④ｄ ⑪ｇ",c5:"５．③ｃ ⑥ｆ ⑩ｌ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2021",num:"16",subject:"kei",q:"放火の罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものを２個選びなさい。",c1:"１．甲は，Ａが所有する自動二輪車に放火するため，これに使用するガソリンとライターを所持して同自動二輪車に近づいたが，甲に不審を抱いた警察官から職務質問を受け，放火するに至らなかった。この場合，甲には，放火予備罪は成立しない。",c2:"２．甲は，自己が所有する無人の木造倉庫に放火してこれを焼損し，よって公共の危険を生じさせ，その結果，Ａが居住する木造家屋に延焼させたが，その延焼についての認識はなかった。この場合，甲には，延焼罪は成立しない。",c3:"３．甲は，自己が所有する自動二輪車に放火してこれを焼損し，よって公共の危険を生じさせたが，その公共の危険が生じることについての認識はなかった。この場合，甲には，建造物等以外放火罪は成立しない。",c4:"４．甲は，隣人Ａが居住する木造家屋を焼損しようと考え，同家屋から１メートル離れた位置にある自己が所有する無人の木造倉庫に放火してこれを焼損したが，同家屋に延焼する危険を生じさせるにとどまった。この場合，甲には，現住建造物等放火未遂罪は成立しない。",c5:"５．甲は，Ａが１人で居住しており，他に誰もいなかった木造家屋内でＡを殺害し，その直後，同家屋に放火してこれを焼損した。この場合，甲には，現住建造物等放火罪は成立しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"15"},{year:"2021",num:"17",subject:"kei",q:"正当防衛（刑法第３６条第１項）に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものを２個選びなさい。",c1:"１．刑法第３６条第１項における「急迫」というには，法益の侵害が現に存在していることを要する。",c2:"２．刑法第３６条第１項における「やむを得ずにした行為」というには，反撃行為が権利を防衛する手段として必要最小限度のものであること，すなわち侵害に対する防衛手段として相当性を有するものであることを要する。",c3:"３．急迫不正の侵害がないのにあると誤信して，防衛の意思で反撃行為を行った場合でも，正当防衛が成立し得る。",c4:"４．刑法第３６条第１項にいう「権利」は，個人的法益に限られ，国家的・社会的法益は，これに含まれない。",c5:"５．刑法第３６条第１項における「不正の侵害」というには，可罰的な行為であることを要しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"25"},{year:"2021",num:"18",subject:"kei",q:"強盗の罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．甲は，銭湯の脱衣場で窃盗をしようと考え，客の財布を手に取って在中する金額を確認中，その様子を目撃した乙から声を掛けられたため，逮捕を免れる目的で，乙に反抗を抑圧するに足りる程度の暴行を加えて加療約１か月間を要する傷害を負わせた。この場合，甲には，事後強盗罪及び強盗致傷罪が成立し，両罪は観念的競合となる。",c2:"２．甲は，電車内で寝ていた乙の財布を盗んで電車を降りたが，乙が目を覚まして追い掛けてきたため，逮捕を免れる目的で，乙に暴行を加えたところ，乙が転倒して重傷を負い，反抗が抑圧された状態に至った。この場合，甲の暴行の程度を問わず，甲には，強盗致傷罪が成立する。",c3:"３．甲は，留守宅に侵入して窃盗をしようと考え，金品を物色中に家人が帰ってきたら同人に反抗を抑圧するに足りる程度の脅迫を加えて逃げる意図でサバイバルナイフを携帯し，住宅街を徘徊して侵入に適した留守宅を探したが，これを発見できず，侵入を断念した。この場合，甲には，強盗予備罪が成立する。",c4:"４．甲は，窃盗の目的で乙宅に侵入し，金品を物色中，乙に発見されたため，この機会に乙に暴行を加えて金品を奪おうと考え，乙に反抗を抑圧するに足りる程度の暴行を加え，金品を奪った。この場合，甲には，事後強盗罪が成立する。",c5:"５．甲は，乙宅に侵入して財布を盗んだ後，誰にも発見されずに１キロメートル離れた公園へ移動して財布内の現金を確認した。しかし，甲は，その金額に満足せず再度乙宅で窃盗をしようと考え，乙宅を出た３０分後に乙宅に戻り，その玄関扉を開けようとしたところ，帰宅していた乙に発見されたため，逮捕を免れる目的で，乙に反抗を抑圧するに足りる程度の暴行を加えた。この場合，甲には，事後強盗罪が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2021",num:"19",subject:"kei",q:`緊急避難に関する次のアからオまでの各記述を判例の立場に従って検討した場合，正しいものの組合せは，後記１から５までのうちどれか。
ア．豪雨により稲苗が水に沈む危険が生じていたことから，排水のため他人の所有する下流の板堰を損壊した場合，「現在の危難」があるとは認められないので，緊急避難は成立しない。
イ．警察官の適法な逮捕行為に対し，逮捕を免れるためには他に方法がなかったので，第三者を突き飛ばして逃走し，よって同人に傷害を負わせた場合，緊急避難が成立し得る。
ウ．頭に拳銃を突き付けられて，覚醒剤の自己使用を強要され，これを拒むことができず，自己に覚醒剤を注射して使用した場合，犯罪行為の強要の手段は「現在の危難」に当たらないので，緊急避難は成立しない。
エ．吊橋が腐朽し，通行の際の揺れにより通行者の生命，身体等に危険が生じていたため，ダイナマイトを使用して同吊橋を爆破したが，通行制限の強化等適当な手段，方法を講ずる余地があった場合，同爆破行為は，「やむを得ずにした行為」とは認められないので，緊急避難は成立しない。
オ．甲が飼い犬Ａ（時価３０万円相当）を連れて山道を散歩中，乙が設置していた害獣駆除用の罠（時価３万円相当）にＡがかかり，その生命に危険が生じ，Ａを保護するためには他に方法がなかったので，その罠を損壊した場合，緊急避難が成立する（甲及び乙いずれにも過失がなかったものとする。）。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2021",num:"20",subject:"kei",q:`次の【事例】に関する後記アからオまでの各【記述】を判例の立場に従って検討し，正しい場合には１を，誤っている場合には２を選びなさい。
【事 例】
暴力団Ａ組の組員甲は，クラブで飲酒していた際，たまたま入店してきた旧知の暴力団Ｂ組の組員乙に因縁を付けられて口論になり，乙に拳で殴りかかった。乙は，これを避けた上，更に殴りかかろうとしてきた甲の胸部を拳で数回強打した。その数分後，Ｂ組の組員丙は，乙と待ち合わせをしていた上記クラブに到着し，その直後に甲の態度に激高し，いきなり甲の胸部を拳で数回強打した。甲は，全治約１か月間を要する肋骨骨折の傷害を負ったが，同傷害が乙と丙のいずれの暴行によって生じたのかは不明であった。甲は，一旦帰宅したものの怒りが収まらず，何か嫌がらせをしてやろうと考え，金属バットを持ち，覆面で顔を隠してＢ組事務所に行き，その玄関ドアを同バットでたたいて凹損させた。その直後，甲は，Ａ組事務所に行き，Ａ組の組員丁に対し，Ｂ組組員から殴られた腹いせにＢ組事務所の玄関ドアを凹損させたことを話した。丁は，Ｂ組との関係悪化を避けるとともに，甲の刑事責任を免れさせるため，甲との間で，犯行時間帯に甲がＡ組事務所にいたことにする旨の口裏合わせをした。また，丁は，Ｂ組組員複数名による襲撃を受ける可能性もあると考え，万が一に備えて，着衣のポケットに護身用として果物ナイフを入れた。他方，乙及び丙は，上記ドアが凹損させられたとの連絡を受け，甲の仕業だろうと考え，Ａ組事務所へ向かった。乙は，応対に出た丁に対し，「甲を出せ。」と言った。丁は，「何の話だ。」と応じたが，乙は，その態度に憤激し，「しらばっくれるな。」と言い，持っていた拳銃を取り出して丁に突き付けた。丁は，自己の身を守るため，上記ナイフで乙の腹部を１回突き刺し，乙に全治約１か月間を要する腹部刺創の傷害を負わせた。丁は，駆けつけた警察官に逮捕され，その後，逃走していた甲も上記ドアを凹損させた事実で逮捕された。丁は，甲の身柄拘束中，甲の犯行に関する参考人として取調べを受けた際，上記口裏合わせに従い，上記ドアが凹損させられた時間帯に甲がＡ組事務所にいた旨のうその供述をした。
【記 述】
ア．乙が甲の胸部を拳で強打した行為については，甲からの侵害が，乙が甲に因縁を付けたことにより招かれたものである以上，正当防衛又は過剰防衛が成立することはない。
イ．乙は，甲の肋骨骨折について，丙の行為のみにより生じた可能性がある以上，丙との間で共謀が成立していない限り，傷害罪の刑事責任を負わない。
ウ．甲がＢ組事務所の玄関ドアを凹損させた行為については，同ドアが工具を使用すれば容易に取り外せる構造であった場合，建造物損壊罪は成立しない。
エ．丁が果物ナイフで乙の腹部を突き刺した行為については，Ｂ組組員から襲撃を受けることを予期し，凶器ともいえるナイフを準備している以上，その予期の程度にかかわらず，侵害の急迫性を欠くものといえ，正当防衛又は過剰防衛は成立しない。
オ．丁が，甲の犯行に関する参考人として取調べを受けた際，Ｂ組事務所の玄関ドアが凹損させられた時間帯に甲がＡ組事務所にいた旨のうその供述をした行為については，犯人隠避罪が成立する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"22221"},{year:"2020",num:"1",subject:"ken",q:`外国人の人権に関する次のアからウまでの各記述について，ｂの見解がａの見解の根拠となっている場合には１を，そうでない場合には２を選びなさい。
ア．ａ．国は，在留期間中の憲法の基本的人権の保障を受ける行為を在留期間の更新の際に消極的な事情としてしんしゃくすることができる。
ｂ．外国人に対する憲法の基本的人権の保障は，外国人在留制度の枠内で与えられているにすぎない。
イ．ａ．憲法第９３条第２項の「住民」と，憲法第１５条第１項の「国民」とは統一的に理解されるべきであり，憲法第９３条第２項の「住民」は，日本「国民」であることがその前提となっている。
ｂ．地方公共団体の政治・行政は，国の政治・行政と互いに関連しており，地方公共団体が国の事務を処理することもある。
ウ．ａ．憲法第２２条第２項は，「何人も」との文言を用いているため，国籍離脱の自由は，我が国に在留する外国人にもその保障が及ぶ。
ｂ．憲法による基本的人権の保障は，権利の性質上日本国民のみをその対象としていると解されるものを除き，我が国に在留する外国人に対しても等しく及ぶ。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"112"},{year:"2020",num:"2",subject:"ken",q:`インターネット検索事業者に対し，自らの逮捕歴に関し検索結果として表示される情報の削除を求めることの可否について判断した最高裁判所の決定（最高裁判所平成２９年１月３１日第三小法廷決定，民集７１巻１号６３頁）に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．この決定は，個人のプライバシーに属する事実をみだりに公表されない利益が法的保護の対象となるとした上，過去に犯した罪の逮捕歴に係る事実は個人のプライバシーに属する事実に当たるものと判断した。
イ．この決定は，検索事業者の行う情報の収集，整理及び提供がプログラムにより自動的に行われることから，検索事業者が検索結果を表示することは，インターネット上の情報を媒介しているにすぎず，検索事業者自身による表現行為とはいえないとした。
ウ．この決定は，プライバシーに属する事実を公表されない法的利益と，ＵＲＬ等の情報を検索結果として提供する理由に関する諸事情を比較衡量し，前者の法的利益が優越することが明らかな場合には，その情報の削除を求めることができるという判断の枠組を示した。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ× ",c9:"",c10:"",a:"3"},{year:"2020",num:"3",subject:"ken",q:`選挙人の投票価値の平等に関する次のアからウまでの各記述について，ｂの見解がａの見解の根拠となっている場合には１を，そうでない場合には２を選びなさい。
ア．ａ．衆議院議員選挙においては，各選挙区間の議員１人当たりの有権者数の比率の較差が１対１を超えることは，憲法上正当化されない。
ｂ．投票価値の平等は，国民の意思を公正かつ効果的に代表するために国会が正当に考慮することのできる他の政策的な目的との関連において，調和的に実現されるべきである。
イ．ａ．参議院議員選挙においては，二院制の下，地域代表の性質を有するという参議院の特殊性により，投票価値の平等の要請が後退するのもやむを得ない。
ｂ．参議院は，国権の最高機関として適切に民意を国政に反映する義務を負っており，衆参両院の選挙制度は同質的とされるべきである。
ウ．ａ．地方議会議員選挙においては，当該地方公共団体の住民が，選挙権行使の資格だけでなく，投票価値においても平等に取り扱われるべきである。
ｂ．憲法第１４条第１項に定める法の下の平等は，選挙権に関しては，国民は全て政治的価値において平等であるべきとする徹底した平等化を志向するものである。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"221"},{year:"2020",num:"4",subject:"ken",q:`思想・良心の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには〇，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．企業内においても労働者の思想，信条等の精神的自由は十分尊重されるべきであることに鑑みると，企業がその労働者に対して特定政党への所属の有無を確認するだけでなく，当該政党に所属しない旨の書面を要求する行為は，それが企業秘密の漏えいという企業秩序違反行為に関する調査の一環として行われたとしても，労働者の思想・信条の自由に対する直接的制約であるから，その経緯や調査方法の相当性にかかわらず，違法性が認められる。
イ．公立学校の卒業式等の式典においてその教員に国旗掲揚の下での国歌斉唱の際に起立斉唱を求めることは，慣例上の儀礼的な所作を求めるものではあるが，自らの歴史観ないし世界観との関係で国歌や国旗に対する敬意の表明には応じ難いと考える者がこれらに対する敬意の表明の要素を含む行為を求められることは，その者の歴史観ないし世界観に由来する行動とは異なる外部的行動を求められることになり，その限りにおいて思想及び良心の自由についての間接的な制約となる面がある。
ウ．政治団体への寄付が強制加入団体である税理士会の目的の範囲内かどうかを判断するに当たっては，会員の思想・信条の自由との関係で，その会員には様々の思想・信条及び主義・主張を有する者が存在することが当然に予定されていること，政治団体に寄付するかどうかは選挙における投票の自由と表裏をなすものとして会員各人が個人的な政治的思想，見解，判断等に基づいて自主的に決定すべき事柄であることなどを考慮することが必要である。`,c1:"１．ア〇 イ〇 ウ〇",c2:"２．ア〇 イ〇 ウ×",c3:"３．ア〇 イ× ウ〇",c4:"４．ア〇 イ× ウ×",c5:"５．ア× イ〇 ウ〇",c6:"６．ア× イ〇 ウ×",c7:"７．ア× イ× ウ〇",c8:"８．ア× イ× ウ× ",c9:"",c10:"",a:"5"},{year:"2020",num:"5",subject:"ken",q:`政教分離原則に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．政教分離原則に基づく憲法の諸規定は，我が国における宗教事情の下で信教の自由を確実に実現するためには，単に信教の自由を無条件に保障するのみでは足りず，国家といかなる宗教との結び付きをも排除する必要性が大きかったことから設けられたものであり，国家と宗教との完全な分離を理想とし，国家の非宗教性ないし宗教的中立性を確保しようとしたものである。
イ．憲法第２０条第３項の禁止する「宗教的活動」とは，国及びその機関と宗教とのかかわり合いが相当とされる限度を超え，当該行為の目的が宗教的意義を持ち，その効果が宗教に対する援助，助長，促進又は圧迫，干渉等になるような行為をいうのであり，靖国神社の祭礼に際し，知事が玉串料として公金を支出して奉納した行為は，たとえそれが戦没者の慰霊及びその遺族の慰謝を直接の目的としてされたものであったとしても，これに該当する。
ウ．天皇の即位に伴って行われる皇室の儀式である大嘗祭に際し，知事が公費で出張した上，これに参列し拝礼した行為は，地方公共団体の長という公職にある者の社会的儀礼として，日本国及び日本国民統合の象徴である天皇の即位に祝意を表する目的で行われたものにすぎず，宗教とかかわり合いのある行為とはいえないから，憲法第２０条第３項の禁止する「宗教的活動」には該当しない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2020",num:"6",subject:"ken",q:`知る権利に関する次のアからウまでの各記述について，ｂの見解がａの見解の根拠となっている場合には１を，そうでない場合には２を選びなさい。
ア．ａ．マス・メディアの報道に対して反論記事の掲載等を求める権利は，憲法第２１条第１項が保障する表現の自由に含まれる知る権利の一局面であり，同項を直接の根拠として認められる。
ｂ．インターネットの普及によって双方向的な情報流通が可能となり，誰もが自ら情報の発信者となることが容易になった。
イ．ａ．日本放送協会の放送を受信することのできる受信設備を設置した者に受信契約の締結を強制する放送法の規定は，憲法第２１条第１項の保障する情報摂取の自由を制限するものであり，その合憲性は厳格に審査される必要がある。
ｂ．国民の知る権利を実現するためにいかなる放送制度を採用するかは立法裁量の問題である。
ウ．ａ．児童買春その他の犯罪から児童を保護すること等の目的のため，電子掲示板の運営者に届出義務を課した上，一定の書き込みに関する削除義務を課すことは，憲法第２１条第１項に違反する。
ｂ．インターネット上において表現の場を提供する行為は知る権利に資するものとして，憲法第２１条第１項の保障を受ける。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"221"},{year:"2020",num:"7",subject:"ken",q:`憲法第２３条に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法第２３条は，学問研究に関する外部からの干渉を許さない趣旨であるから，先端技術分野においても，研究活動の内容や方法等に対する制限は学会の自主規制等に委ねるべきであり，法律によって制約することは許されない。
イ．判例によれば，普通教育においては，児童生徒には大学の学生のような批判能力がなく，学校や教師を選択する余地も乏しいことなどから，憲法第２３条によっても，普通教育における教師に完全な教授の自由は認められない。
ウ．大学の自治は，大学における研究教育の自由を制度的に保障するために憲法第２３条によって保障されていると解されるから，教授の任免や施設の管理等，研究教育の内容に直接関係しない事項については，大学の自治権は及ばない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"212"},{year:"2020",num:"8",subject:"ken",q:`財産権に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法第２９条は，私有財産制度を制度として保障するものであり，国民の個々の財産権につき基本的人権として保障するものではない。
イ．法律で一旦定められた財産権の内容を事後の法律で変更しても，それが公共の福祉に適合するようにされたものである限り，違憲とはいえない。
ウ．憲法第２９条第３項の「公共のために用ひる」には，道路，ダム等の公共事業のために財産を収用する場合だけでなく，特定の個人が受益者となる場合も含まれることがある。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ× ",c9:"",c10:"",a:"5"},{year:"2020",num:"9",subject:"ken",q:`生存権とこれを具体化した法制度に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法第２５条の規定の趣旨に応えて具体的にどのような立法措置を講ずるかの選択決定は，立法府の広い裁量に委ねられているが，何ら合理的理由のない不当な差別的取扱いや，個人の尊厳を毀損するような内容の定めがあれば，憲法第１４条及び第１３条違反の問題を生じることがある。
イ．「健康で文化的な最低限度の生活」は，抽象的かつ相対的な概念であって，その具体的内容は，その時々における経済的・社会的条件，一般的な国民生活の状況等との相関関係において判断決定されるべきものであるが，老齢加算を廃止する保護基準の改定については，不利益変更であることに鑑み，厚生労働大臣に専門技術的かつ政策的見地からの広範な裁量権は認められない。
ウ．障害基礎年金の受給に関し保険料の拠出に関する要件を緩和するかどうかは国の財政事情等にも密接に関連する事項であるが，保険料負担能力のない２０歳以上６０歳未満の者のうち２０歳以上の学生とそれ以外の者との間に障害基礎年金の受給に関し差異が生じた場合，その合憲性については，憲法第２５条及び第１４条の趣旨に照らし，慎重に検討する必要がある。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"4"},{year:"2020",num:"10",subject:"ken",q:`裁判を受ける権利に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．大日本帝国憲法で「法律ニ定メタル裁判官ノ裁判」を受ける権利が保障されていたのに対し，日本国憲法第３２条が保障するのは「裁判所において裁判を受ける権利」であることを踏まえれば，憲法上国民の司法参加がおよそ禁じられていると解すべき理由はない。
イ．性質上純然たる訴訟事件の裁判が，憲法第８２条が定める例外に当たらないにもかかわらず，公開の法廷における対審及び判決によらず非公開でなされた場合には，裁判の公開を定めた憲法第８２条に違反するが，裁判を受ける権利を保障する憲法第３２条に違反することはない。
ウ．憲法第３２条は，訴訟の当事者が訴訟の目的である権利関係について裁判所の判断を求める法律上の利益を有することを前提として，そのような訴訟について本案の裁判を受ける権利を保障したものであって，その利益の有無にかかわらず常に本案につき裁判を受ける権利を保障したものではない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"121"},{year:"2020",num:"11",subject:"ken",q:`主権に関する次のアからエまでの各記述について，国政に関する最高の決定権という意味で主権の概念を用いたものの組合せを，後記１から６までの中から選びなさい。
ア．「日本国ノ主権ハ本州，北海道，九州及四国並ニ吾等ノ決定スル諸小島ニ局限セラルベシ」（ポツダム宣言第８項）というときの「主権」
イ．「日本国民は，（中略）ここに主権が国民に存することを宣言し，この憲法を確定する。」（憲法前文第１項）というときの「主権」
ウ．「政治道徳の法則は，普遍的なものであり，この法則に従ふことは，自国の主権を維持し，他国と対等関係に立たうとする各国の責務であると信ずる。」（憲法前文第３項）というときの「主権」
エ．「天皇は，日本国の象徴であり日本国民統合の象徴であつて，この地位は，主権の存する日本国民の総意に基く。」（憲法第１条）というときの「主権」`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．イとウ",c5:"５．イとエ",c6:"６．ウとエ",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2020",num:"12",subject:"ken",q:`天皇が国会の開会式に出席して述べる「おことば」の憲法上の位置付けに関する次のアからウまでの各記述について，ｂの見解がａの見解の根拠となっている場合には１を，そうでない場合には２を選びなさい。
ア．ａ．天皇は象徴であり，「おことば」を述べることは象徴としての行為である。
ｂ．象徴という言葉は社会心理的な意味を有するものであり，天皇を象徴と定めた憲法の規定から法的効果を導くことはできない。
イ．ａ．天皇は公人であり，「おことば」を述べることは公人としての行為である。
ｂ．天皇の行為は限定するべきであり，天皇の行為には，憲法が定める国事行為と私的行為の二つしかないと考えるべきである。
ウ．ａ．天皇は憲法が列挙する国事行為を行い，「おことば」を述べることは「儀式を行ふこと」（憲法第７条第１０号）に含まれる。
ｂ．天皇が自ら儀式を主宰する場合だけでなく，式に参列して儀式的・儀礼的行為を行うことも「儀式を行ふこと」と解釈することができる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"221"},{year:"2020",num:"13",subject:"ken",q:`選挙権及び選挙制度に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．選挙権の法的性格について，国政への参加を国民に保障する権利という面のみを有すると考える見解に立っても，かかる権利であると同時に選挙人としての地位に基づいて公務員の選挙に関与する公務という側面も併せ有すると考える見解に立っても，選挙犯罪による被処罰者の選挙権及び被選挙権の停止を定める公職選挙法の規定が，憲法第１４条及び第４４条ただし書に違反する差別的待遇ではないと解することは可能である。
イ．判例は，平成１０年の改正前の公職選挙法が在外日本国民の選挙権を全く認めていなかったことは憲法第１５条第１項，第３項，第４３条第１項等に違反すると解し，さらに，同改正後の公職選挙法附則の規定が，当分の間，在外選挙制度の対象を比例代表選出議員の選挙に限定したことについても，同改正当時，比例代表選出議員の選挙についてだけ在外国民の投票を認めることとしたのには全く理由がなく，上記憲法各条項に違反すると解している。
ウ．判例は，政見放送が民主政治の根幹をなす政治上の表現の自由に基づくものであり，選挙運動の一つの重要な手段である一方，公職選挙法の規定によって禁じられた政見放送としての品位を損なう言動をした場合の責任は，事後的に候補者自身に負わせれば足りることを根拠として，放送事業者が政見放送において用いられた差別的用語を削除した行為を憲法第２１条第１項に違反すると解している。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"4"},{year:"2020",num:"14",subject:"ken",q:`憲法第４１条に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法第４１条の「国権の最高機関」につき，国政全般を統括する機関であるとの見解に立たないとしても，どの国家機関に帰属するのか不明確な権能については国会に属するものと推定することは可能である。
イ．憲法第４１条の「立法」につき，実質的意味の立法を意味しているとの見解に立つと，国民の権利を直接に制限し，義務を課す法規範についてのみ法律で定めれば足り，行政各部の組織の根本部分について法律で定めてはならないこととなる。
ウ．憲法第４１条の「唯一の立法機関」につき，内閣の法律案提出権を肯定する見解に立つと，法律案の提出は立法に不可欠の要素であるが，立法そのものではなく，その準備行為であって，国会が独占しなければならないものではないと解することとなる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"121"},{year:"2020",num:"15",subject:"ken",q:`内閣総理大臣による国務大臣の任命及び罷免に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．内閣総理大臣は国会議員以外の者を国務大臣に任命することができるが，国務大臣の過半数は国会議員の中から選ばなければならない。
イ．内閣総理大臣による国務大臣の任命には天皇の認証が必要であるが，内閣はこの認証に対する助言と承認を拒むことができない。
ウ．内閣総理大臣は任意に国務大臣を罷免することができるが，その効力発生には天皇の認証が必要である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"112"},{year:"2020",num:"16",subject:"ken",q:`違憲判断の方法に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．最高裁判所は，公務員による政党機関誌の配布が国家公務員法違反に問われた堀越事件（最高裁判所平成２４年１２月７日第二小法廷判決，刑集６６巻１２号１３３７頁）において，被告人の配布行為には公務員の職務の遂行の政治的中立性を損なうおそれが実質的に認められず，当該配布行為に罰則規定が適用される限りにおいて憲法第２１条第１項及び第３１条に違反すると判示した。
イ．最高裁判所は，市有地を無償で神社施設の敷地利用に供していた行為が政教分離原則に違反するかが問われた空知太神社訴訟（最高裁判所平成２２年１月２０日大法廷判決，民集６４巻１号１頁）において，同じ市による別の神社敷地の譲与行為に対する合憲判断と異なり，当該事案における敷地利用提供行為については憲法第８９条及び第２０条第１項後段に違反すると判示した。
ウ．最高裁判所は，郵便法の損害賠償責任免除・制限規定が憲法第１７条に違反するかが問われた訴訟（最高裁判所平成１４年９月１１日大法廷判決，民集５６巻７号１４３９頁）において，当該事案では郵便業務従事者の重過失により損害が生じており，郵便法はそのような場合にまで賠償責任の免除・制限を予定するものではないので，郵便法の上記規定が当該事案に適用される限りにおいて憲法第１７条に違反すると判示した。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"212"},{year:"2020",num:"17",subject:"ken",q:`地方自治に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．一の地方公共団体のみに適用される特別法の制定に当たっては，国による地方自治権の侵害を防止するとともに，地方公共団体の個性の尊重及び地方行政における民意の尊重のため，憲法第９５条により，当該地方公共団体の住民の投票においてその過半数を得ることが要求されているが，これまでに同条に基づく手続が実際にとられた例はない。
イ．判例によれば，憲法第８４条に規定する租税法律主義の下では，地方公共団体が国とは別途に課税権の主体となることは憲法上予定されておらず，地方公共団体が条例により租税を賦課する場合には，租税の税目，課税客体，課税標準，税率等の事項について，法律で定められた具体的な準則に基づかなければならない。
ウ．判例は，ある事項について国の法令中に明文の規定がない場合でも，当該法令全体からみて，規定の欠如が当該事項についていかなる規制をも施すことなく放置すべきものとする趣旨であると解されるときは，当該事項について条例で規律することが法令違反になり得るとしている。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2020",num:"18",subject:"ken",q:`条約に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．条約締結の国会承認については，衆議院の優越が認められており，条約承認の議案は，先に衆議院に提出しなければならない。
イ．条約を締結する権限は内閣にあるが，批准を要する条約についての批准書の認証は天皇の国事行為である。
ウ．条約は，国会による承認及び内閣による締結の後，天皇が国事行為としてこれを公布することによって有効に成立する。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ× ",c9:"",c10:"",a:"6"},{year:"2020",num:"19",subject:"ken",q:`次の対話は，憲法改正に関する教授と学生の対話である。教授の各質問に対する次のアからウまでの学生の各回答について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
教授．憲法第９６条第１項は，「この憲法の改正は，各議院の総議員の３分の２以上の賛成で，国会が，これを発議し，国民に提案してその承認を経なければならない。」と規定しているが，この「総議員」の意味には争いがあって，①法定議員数と解する説と，②現に各議院に在職する議員数の総数とする説があるね。②説の根拠として考えられるものは何かな。
ア．定足数が一定になり「総議員」の数を巡る争いを避けられること，憲法改正の発議要件を厳格にして議決を慎重にさせるのが憲法の趣旨に合致することなどがあります。
教授．それから，改正案を国会に提案する権限を内閣が有するか否かについても，肯定説と否定説とが対立しているね。肯定説に対しては，否定説の立場から，内閣の発案権を認めると国会の自主的審議権が害されるとの批判がされているが，この批判に対する肯定説の立場からの反論として，どのようなものが考えられるだろうか。
イ．内閣に発案権を認めたとしても，各議院は内閣の改正案に対する修正権を持つので，国会の自主的審議権を害するおそれはないとの反論が可能だと思います。
教授．憲法改正は，改正案が国民に提案され，国民投票が行われ，その過半数の賛成で承認されるのでなければ成立しないね。「過半数」の意味については，①有権者総数の過半数か，②無効投票を含めた投票総数の過半数か，③有効投票総数の過半数か，を巡り議論があるところだが，①説に対する批判として考えられるものを挙げてみよう。
ウ．①説に対しては，棄権者が全て改正案に反対の意思と評価されてしまう点で妥当ではないとの批判が考えられます。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"211"},{year:"2020",num:"20",subject:"ken",q:`憲法の法源に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．硬性憲法の原則を重視する立場をとっても，憲法の空白を埋める事実が反復・継続された場合に，国家機関を政治的に拘束する憲法慣習の成立を認めることができる。
イ．判例が，後の裁判を法的に拘束するという立場をとるならば，法律の合憲性に関する最高裁判所の判例を変更することは，後の最高裁判所であっても，許されない。
ウ．条約の国内法的効力は憲法に劣るという立場をとるならば，裁判所が，立法事実の存否を判断するための資料として，国際人権条約を参照することは，許されない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"4"},{year:"2020",num:"1",subject:"min",q:`補助に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．家庭裁判所は，精神上の障害により事理を弁識する能力が著しく不十分であり保佐開始の原因がある者についても，補助開始の審判をすることができる。
イ．本人以外の者の請求により補助開始の審判をするには，家庭裁判所が相当と認める場合を除き，本人の同意がなければならない。
ウ．補助開始の原因が消滅したときは，家庭裁判所は，職権で補助開始の審判を取り消すことができる。
エ．補助人の同意を得なければならない行為について，補助人が被補助人の利益を害するおそれがないにもかかわらず同意をしないときは，家庭裁判所は，被補助人の請求により，補助人の同意に代わる許可を与えることができる。
オ．家庭裁判所が特定の法律行為について補助人に代理権を付与する旨の審判をした場合であっても，被補助人は，その法律行為を自らすることができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2020",num:"2",subject:"min",q:`法人に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．法人は，その定款に記載された目的に含まれない行為であっても，その目的遂行に必要な行為については，権利能力を有する。
イ．理事が法人の機関として不法行為を行い，法人が不法行為責任を負う場合には，その理事は，個人として不法行為責任を負うことはない。
ウ．法人の代表者が職務権限外の取引行為をし，当該行為が外形的に当該法人の職務行為に属すると認められる場合であっても，相手方がその職務行為に属さないことを知っていたときは，法人は，代表者の当該行為に基づいて相手方に生じた損害の賠償責任を負わない。
エ．外国人が享有することのできない権利であっても，認許された外国法人は，日本において成立する同種の法人と同様に，その権利を取得することができる。
オ．設立登記が成立要件となっている法人について，設立登記がされていなくても，法人としての活動の実態がある場合には，予定されている定款の目的の範囲内での権利能力が認められる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2020",num:"3",subject:"min",q:`錯誤に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．錯誤を理由とする意思表示の取消しの可否について，錯誤の重要性は，表意者を基準として判断される。
イ．ＡのＢに対する意思表示がＡの錯誤を理由として取り消すことができるものである場合，Ｂも，Ａの錯誤を理由としてＡの意思表示を取り消すことができる。
ウ．負担のない贈与について贈与者であるＡの錯誤を理由とする取消しがされたが，受贈者であるＢが既に当該贈与契約に基づいて給付を受けていた場合，Ｂは，給付を受けた時に当該贈与契約が取り消すことができるものであることを知らなかったときは，現に利益を受けている限度において返還の義務を負う。
エ．ＡのＢに対する意思表示が錯誤を理由として取り消された場合，Ａは，その取消し前に利害関係を有するに至った善意無過失のＣに，その取消しを対抗することができない。
オ．ＡのＢに対する意思表示が錯誤に基づくものであって，その錯誤がＡの重大な過失によるものであった場合，Ａは，ＢがＡに錯誤があることを知り，又は重大な過失によって知らなかったときを除いて，錯誤を理由としてその意思表示を取り消すことができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2020",num:"4",subject:"min",q:`Ａは，Ｂの代理人と称して，Ｃとの間でＢの所有する土地をＣに売却する旨の売買契約を締結したが，実際にはその契約を締結する代理権を有していなかった。この事例に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡがＣに対する無権代理人の責任を負う場合，Ａは売買契約の履行をするか，又は損害賠償責任を負うかを自ら選択することができる。
イ．Ｂが売買契約を追認した場合，ＡはＣに対する無権代理人の責任を負わない。
ウ．代理権を有しないことを知らないことにつきＣに過失がある場合，Ａは，自己に代理権がないことを知っていたときであっても，Ｃに対する無権代理人の責任を負わない。
エ．売買契約の締結後にＡがＤと共にＢを相続した場合，Ｄの追認がない限り，Ａの相続分に相当する部分においても，売買契約は当然に有効となるものではない。
オ．売買契約の締結後にＢがＡを単独で相続した場合，売買契約は当該相続により当然に有効となるものではない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2020",num:"5",subject:"min",q:`消滅時効に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．債務不履行に基づく損害賠償請求権は，債権者が権利を行使することができることを知った時から５年間行使しない場合，時効によって消滅する。
イ．詐欺を理由とする取消権は，その行為の時から５年間行使しない場合，時効によって消滅する。
ウ．不法行為に基づく損害賠償請求権は，不法行為の時から２０年間行使しない場合，時効によって消滅する。
エ．１０年より短い時効期間の定めのある権利が確定判決によって確定した場合，その時効期間は，短い時効期間の定めによる。
オ．定期金の債権は，債権者が定期金の債権から生ずる金銭その他の物の給付を目的とする各債権を行使することができることを知った時から１０年間行使しない場合，時効によって消滅する。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2020",num:"6",subject:"min",q:`物権的請求権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａが地上権を有する甲土地に無断でＢがその所有する自動車を放置した場合，Ａは，Ｂに対し，地上権に基づく妨害排除請求権の行使として自動車を撤去するよう求めることはできない。
イ．Ａが所有する鉄塔が自然災害により傾き，鉄塔に隣接するＢの所有する甲建物を損傷させるおそれが生じた場合において，Ｂが所有権に基づく妨害予防請求権の行使として甲建物を損傷させないための措置を講ずるよう求めたときは，Ａは，過去に実際に一度でも甲建物を損傷させたことがないことを理由としてＢの請求を拒むことができる。
ウ．Ａの所有する自動車がＢの所有する山林に無断で放置され，２０年が経過した場合において，ＢがＡに対して所有権に基づく妨害排除請求権の行使として自動車の撤去を求めたときは，Ａは，妨害排除請求権の消滅時効を援用してＢの請求を拒むことができる。
エ．Ａが，Ａ所有の甲土地に洪水のため流されてきた自動車の所有者であるＢに対し，所有権に基づく妨害排除請求権の行使として自動車を撤去するよう求めた場合，Ｂは，所有権侵害について故意過失がないことを主張立証しても，Ａの請求を拒むことはできない。
オ．Ａの所有する甲土地に無断でＢがその所有する自転車を放置した場合において，ＡがＢに対して所有権に基づく妨害排除請求権の行使として自転車を撤去するよう求めたときは，Ｂは，自己が未成年者であることを理由としてＡの請求を拒むことはできない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2020",num:"7",subject:"min",q:`不動産の物権変動に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａ所有の甲土地をＡがＢに売却し，その後Ａが甲土地をＣに対し売却してその旨の登記がされ，更にＣが甲土地をＤに対し売却してその旨の登記がされた場合において，ＣがＢに対する関係で背信的悪意者に当たるときは，Ｂは，Ｄに対し，甲土地の所有権を登記がなくても主張することができる。
イ．Ａ所有の甲土地をＡがＢに売却し，その旨の登記がされたが，ＡがＢの詐欺を理由としてＡＢ間の売買契約を取り消した後，この取消しについて善意無過失のＣに対しＢが甲土地を売却し，その旨の登記がされた場合，Ａは，Ｃに対し，甲土地の所有権を登記がなくても主張することができる。
ウ．Ａ所有の甲土地をＡがＢに売却し，更にＢがＣに売却し，それぞれその旨の登記がされた場合において，その後，ＡがＡＢ間の売買契約をＢの甲土地の代金不払を理由に解除したときは，Ａは，Ｂの代金不払の事実を知らないＣに対し，甲土地の所有権を主張することができない。
エ．Ａ所有の甲土地をＡがＢに売却し，その旨の登記がされた場合において，その後，これより前から所有の意思をもって甲土地を占有していたＣについて取得時効が完成したときは，Ｃは，Ｂに対し，甲土地の所有権を主張することができない。
オ．甲土地を所有していたＡが遺言を残さずに死亡し，ＢとＣがＡを共同相続し，Ｃが甲土地をＢＣの共有とする共同相続登記をしてＣの持分にＤのために抵当権を設定し，その旨の登記がされた場合において，その後，ＢＣの遺産分割協議により甲土地がＢの単独所有とされたときは，Ｂは，Ｄに対し，抵当権設定登記の抹消を請求することができない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2020",num:"8",subject:"min",q:`即時取得に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａは，自己所有の宝石をＢに売却して現実の引渡しをした。その後，Ｂは，宝石をＣに売却して現実の引渡しをした。さらに，その後，Ａは，ＡＢ間の売買契約をＢの強迫を理由として取り消した。この場合，Ｃは，即時取得により宝石の所有権を取得することはない。
イ．未成年者Ａは，自己所有の宝石をＢに売却して現実の引渡しをした。その後，Ａは，ＡＢ間の売買契約を未成年であることを理由として取り消した。この場合，Ｂが即時取得により宝石の所有権を取得することはない。
ウ．Ａは，Ｂ所有の宝石をＢから賃借して引渡しを受けた上，宝石をＣに預けていたが，宝石をＤに売却し，Ｃに対し，宝石を今後Ｄのために占有するよう命じ，Ｄがこれを承諾した。この場合，Ｄは，宝石がＡ所有であると信じ，かつ，そのことに過失がなかったとしても，即時取得により宝石の所有権を取得することはない。
エ．Ａは，Ｂが置き忘れた宝石を，自己所有物であると過失なく信じて持ち帰った。この場合，Ａが即時取得により宝石の所有権を取得することはない。
オ．Ａは，ＢがＣから賃借していた宝石を盗み，Ｄに贈与した。Ｄが宝石をＡの所有物であると過失なく信じて現実の引渡しを受けた場合，Ｂは，宝石の盗難時から２年間は，Ｄに宝石の回復を請求することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2020",num:"9",subject:"min",q:`占有の訴えに関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａは自己の所有するコピー機をＢに賃貸していたが，Ｂはコピー機の賃貸借契約が終了した後もコピー機を使用し続け，Ａに返還しなかった。この場合，Ａは，Ｂに対し，占有回収の訴えによりコピー機の返還を請求することができる。
イ．Ａは，底面に「所有者Ａ」と印字されたシールを貼ってある自己所有のパソコンをＢに窃取された。その後，Ｂは，パソコンの外観に変更を加えることなく，パソコンを盗難の事情を知らないＣに譲渡した。この場合，Ａは，Ｃに対し，占有回収の訴えにより同パソコンの返還を請求することはできない。
ウ．Ａは自己の所有する工作機械をＢに賃貸していたが，Ｂは，工作機械の賃貸借契約継続中に工作機械をＣに窃取された。この場合，Ｂは，Ａから独立して，Ｃに対して占有回収の訴えを提起することができる。
エ．Ａは，自己の所有する自転車をＢに詐取された。この場合，Ａは，Ｂに対し，占有回収の訴えにより自転車の返還を請求することができる。
オ．Ａは，別荘地に土地を所有していた。その隣地の所有者であったＢは，Ａに無断で境界を越えてＡ所有の土地に塀を作り始め，２年後にその塀が完成した。Ａは，この時点において，Ｂに対し，占有保持の訴えによりその塀の撤去を請求することはできない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2020",num:"10",subject:"min",q:`地上権に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．地上権者は，地上権設定者に対し，その地上権の設定登記を請求する権利を有する。
イ．約定による地上権の存続期間は，２０年以上５０年以下の範囲内で定めなければならない。
ウ．地上権は，工作物又は竹木を所有する目的で土地を使用する権利である。
エ．地下又は空間は，工作物を所有するため，上下の範囲を定めて地上権の目的とすることができる。
オ．地上権は，地上権設定者の承諾を得なければ，譲渡することができない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2020",num:"11",subject:"min",q:`先取特権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．法人に対して電気料金債権を有する者は，供給した電気がその代表者及びその家族の生活に使用されていた場合，法人の財産について一般の先取特権を有する。
イ．旅館に宿泊客が持ち込んだ手荷物がその宿泊客の所有物でなく他人の所有物であった場合，旅館主は，その手荷物がその宿泊客の所有物であると過失なく信じたときであっても，その手荷物について旅館の宿泊の先取特権を行使することはできない。
ウ．動産の売主は，買主がその動産の転売によって得た売買代金債権につき，買主の一般債権者が当該売買代金債権を差し押さえた後は，動産の売買の先取特権に基づく物上代位権を行使することはできない。
エ．不動産の工事の先取特権の効力を保存するためには，工事を始める前にその費用の予算額を登記しなければならない。
オ．建物賃貸借において，賃借権が適法に譲渡され，譲受人が建物に動産を備え付けた場合，賃貸借関係から生じた賃貸人の債権が譲渡前に発生していたものであっても，不動産の賃貸の先取特権はその動産に及ぶ。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2020",num:"12",subject:"min",q:`債務者Ａは債権者ＢのためにＡの所有する不動産甲に抵当権を設定し，その旨の登記がされた。この場合における抵当権の消滅に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａは，抵当権を実行することができる時から２０年が経過すれば，被担保債権が消滅していなくても，抵当権が時効により消滅したと主張することができる。
イ．甲について，その後，ＡがＣのために抵当権を設定し，その旨の登記がされた場合において，ＢがＡから甲を買い受けたときは，Ｂの抵当権は消滅しない。
ウ．Ａの一般債権者が甲につき強制競売の申立てをし，当該強制競売手続において甲が売却されたときは，Ｂの抵当権は消滅する。
エ．甲について，その後，Ａから譲渡担保権の設定を受けたＤは，譲渡担保権の実行前であっても，抵当権消滅請求をすることにより，Ｂの抵当権を消滅させることができる。
オ．甲が建物である場合において，Ａが故意に甲を焼失させたときは，Ｂの抵当権は消滅しない。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2020",num:"13",subject:"min",q:`債務者Ａが債権者Ｂのために自己の所有する不動産に根抵当権を設定した場合に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ｂは，元本の確定前は，Ａに対する他の債権者Ｃに対してその順位を譲渡することができる。
イ．Ｂの根抵当権にＤのために転根抵当権が設定され，ＢがＡに転根抵当権の設定の通知をした場合，Ａは，元本の確定前であれば，Ｄの承諾を得なくてもＢに弁済することができる。
ウ．元本の確定前に，Ｂが根抵当権によって担保されていた債権をＥに譲渡した場合，それに伴って根抵当権もＥに移転する。
エ．後順位抵当権者Ｆがいる場合，Ａ及びＢが元本確定期日を変更するためには，Ｆの承諾が必要である。
オ．Ｂが数個の不動産について根抵当権を有する場合，同一の債権の担保として数個の不動産の上に根抵当権が設定された旨の登記がその設定と同時にされたときを除き，各不動産の代価についてそれぞれの極度額まで優先権を行使することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2020",num:"14",subject:"min",q:`譲渡担保に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．所有する土地に譲渡担保権を設定した債務者は，債務の弁済期が経過した後は，債権者が担保権の実行を完了する前であっても，債務の全額を弁済して目的物を受け戻すことはできない。
イ．所有する機械に譲渡担保権を設定して譲渡担保権者に現実の引渡しをした債務者Ａは，その債務の弁済をする場合，債務の弁済と譲渡担保権者のＡに対する目的物の引渡しとの同時履行を主張することはできない。
ウ．債務者Ａが所有する構成部分の変動する在庫商品に債権者Ｂのために譲渡担保権が設定された後，商品が滅失し，その損害をてん補するための損害保険金請求権をＡが取得したときは，Ａが営業を継続しているか否かにかかわらず，Ｂは，当該保険金請求権に対して物上代位権を行使することができる。
エ．土地の賃借人が借地上に所有する建物に譲渡担保権を設定した場合，その効力が土地の賃借権に及ぶことはない。
オ．譲渡担保権によって担保されるべき債権の範囲は，強行法規や公序良俗に反しない限り，設定契約の当事者間において元本，利息及び遅延損害金について自由に定めることができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2020",num:"15",subject:"min",q:`ＡとＢは，Ａが所有する骨董品甲をＢに１００万円で売却する旨の売買契約を締結した。この事例に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．売買契約の締結後，Ｂが代金１００万円を支払ったが，引渡期日前に，ＡがＢに対して甲を引き渡すつもりは全くないと告げ，Ｂの働きかけにもかかわらず翻意しないときは，Ｂは，引渡期日の到来を待つことなく，Ａに対し，債務の履行に代わる損害の賠償を請求することができる。
イ．売買契約の締結の前日に甲が焼失していたときは，当該売買契約は効力を生じない。
ウ．売買契約の締結後，Ｂが代金１００万円を支払ったが，Ａが甲をＢに引き渡す前に，甲がＢの責めに帰すべき事由により焼失した場合において，Ａが甲の焼失による損害をてん補するために支払われる損害保険金７０万円を得たときは，Ｂは，Ａに対し，７０万円の支払を請求することができる。
エ．売買契約の締結後，Ａが甲をＢに引き渡す前に，甲が第三者の失火により焼失したときは，Ｂの代金支払債務は当然に消滅する。
オ．Ａが引渡期日に甲の引渡しの提供をしたところ，Ｂが正当な理由なく受領を拒絶したため，Ａの下で甲を保管中に，Ａの重過失により甲が滅失したときは，Ｂは，代金の支払を拒むことができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2020",num:"16",subject:"min",q:`Ａは，その債権者を害することを知りながら，所有する骨董品甲をＢに贈与し，その際，Ｂも甲の贈与がＡの債権者を害することを知っていた。この事例におけるＡの債権者Ｃによる詐害行為取消権行使に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ｃが詐害行為取消訴訟を提起する場合，Ａを被告としなければならない。
イ．Ｂが，甲の贈与がＡの債権者を害することを知っていたＤに甲を売却し，引き渡した場合，Ｃは，Ｄに対し，ＢＤ間の甲の売買の取消しを請求することができる。
ウ．Ｂが，甲の贈与がＡの債権者を害することを知っていたＤに甲を売却し，引き渡した場合，Ｃは，Ｂに対し，ＡＢ間の甲の贈与の取消しを請求することができる。
エ．Ｃによる詐害行為取消請求を認容する確定判決の効力は，Ａの全ての債権者に対してもその効力を有する。
オ．Ｂが，甲の贈与がＡの債権者を害することを知っていたＤに甲を売却し，引き渡した場合において，ＣのＤに対する詐害行為取消請求を認容する判決が確定したときは，Ｄは，Ｂに対し，代金の返還を請求することができる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2020",num:"17",subject:"min",q:`ＡＢＣは，Ｄに対して，６０万円の借入金債務（以下「甲債務」という。）を連帯して負担し，負担部分は均等とする合意をしていた。この事例に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＤがＡに対して甲債務の支払請求訴訟を提起し，請求を認容する判決が確定した場合において，Ｄ及びＢが別段の意思を表示していないときは，甲債務の消滅時効は，Ｂについても判決確定の時から新たにその進行を始める。
イ．ＤがＣに対して甲債務を免除する意思表示をした場合において，Ｄ及びＡが別段の意思を表示していないときは，ＤがＡの債務を免除する意思を有していなかったとしても，Ｄは，Ａに対して６０万円の支払を請求することはできない。
ウ．甲債務と相殺適状にある３０万円の乙債務をＤがＣに対して負担している場合において，Ｃが乙債務につき相殺を援用しない間に，ＤがＡに６０万円の支払を請求したときは，Ａは，２０万円についてその支払を拒むことができる。
エ．Ｂは，甲債務の履行期にＤに対して１８万円を支払った場合，Ａ及びＣに求償することはできない。
オ．甲債務と相殺適状にある２０万円の乙債務をＤがＣに対して負担している場合において，Ａが，Ｃが甲債務の連帯債務者であることを知りながら，Ｃに通知せずにＤに６０万円を支払ってＣに求償し，Ｃが乙債務との相殺をもってＡに対抗したときは，Ａは，Ｄに対し，相殺によって消滅すべきであった乙債務２０万円の支払を請求することができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2020",num:"18",subject:"min",q:`ＡはＢ銀行に預金口座を開設し，金銭を預け入れた。この事例に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ｃが，Ｂ銀行のＤの預金口座に振込みをするつもりで，誤ってＡの預金口座への１００万円の振込みをＣの取引銀行に依頼し，その振込みが実行された場合，Ｃは，Ｂ銀行に対し，１００万円の支払を請求することができる。
イ．Ａが死亡してＥとＦがＡを相続した場合，Ｅは単独で，Ｂ銀行に対し，Ａ名義の預金口座の取引経過の開示を求めることができる。
ウ．ＡがＢ銀行に対して有する預金債権について，譲渡はできない旨の特約がされていた場合，ＡがＧとの間で，その預金債権をＧに譲渡する契約をしても，Ｇが特約について悪意又は重過失であったときは，その譲渡は効力を生じない。
エ．Ａの預金口座に係る預金が定期預金の場合，Ｂ銀行は，やむを得ない事由がなければ，Ａの同意なしに満期前に預金を払い戻すことはできない。
オ．ＨがＡに対する代金債務の全額をＡＨ間の合意によりＢ銀行のＡの預金口座への振込みによって支払った場合，その債務は，Ｈの振込みによってＡがＢ銀行に対して同額の預金の払戻しを請求する権利を取得した時に，弁済により消滅する。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2020",num:"19",subject:"min",q:`弁済による代位に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．物上保証人は，被担保債権を弁済した場合，代位により取得した被担保債権につき，対抗要件を備えなくても，これを行使することができる。
イ．保証人は，被担保債権の一部を弁済したが残債務がある場合，その弁済をした価額の限度において，代位により取得した被担保債権及びその担保権を単独で行使することができる。
ウ．保証人Ａと物上保証人Ｂとの間で，Ａが自己の弁済した全額につき債権者に代位することができる旨の特約をした場合において，弁済をしたＡが債権者に代位してＢ所有の不動産上の第一順位の抵当権を行使するときは，Ａはその特約の効力を当該不動産の後順位抵当権者に主張することはできない。
エ．債権者が故意に担保を減少させたとしても，そのことについて取引上の社会通念に照らして合理的な理由がある場合，保証人は，その担保の減少に基づく免責を主張することはできない。
オ．債権者が過失により担保を減少させた後に物上保証人から抵当目的不動産を譲り受けた者は，物上保証人と債権者との間に債権者の担保保存義務を免除する旨の特約がされていたために担保の減少に基づく免責が生じていなかった場合，債権者に対して担保の減少に基づく自己の免責を主張することはできない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2020",num:"20",subject:"min",q:`安全配慮義務に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．安全配慮義務違反を理由とする債務不履行に基づく損害賠償を請求する訴訟においては，原告は，安全配慮義務の内容を特定し，義務違反に該当する事実を主張立証する責任を負う。
イ．雇用契約上の安全配慮義務違反により死亡した者の遺族が債務不履行に基づく損害賠償を請求する場合には，遺族固有の慰謝料を請求することはできない。
ウ．元請企業は，下請企業に雇用されている労働者に対しても，特別な社会的接触の関係に入ったものとして，信義則上，安全配慮義務違反を理由とする債務不履行に基づく損害賠償債務を負うことがある。
エ．安全配慮義務違反を理由とする債務不履行に基づく損害賠償債務は，損害発生の時から履行遅滞に陥る。
オ．国の公務員である運転者Ａが公務遂行中に道路交通法上の通常の注意義務に違反して自動車事故を起こし，同乗していた国の公務員Ｂが負傷した場合，国は，Ｂに対し，安全配慮義務違反を理由とする債務不履行に基づく損害賠償債務を負う。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2020",num:"21",subject:"min",q:`法定利率及び約定利率に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．利息を生ずべき債権について約定利率の定めがないときは，その利率は，最初に利息が生じた時点における法定利率による。
イ．法定利率の割合は，３年を一期とするその期ごとに見直され，必ず変更される。
ウ．将来において負担すべき費用についての損害賠償の額を定める場合，その費用を負担すべき時までの利息相当額を法定利率により控除することはできない。
エ．債務者が貸金返還債務の履行を遅滞した場合，債権者は，法定利率又は約定利率により算定された額を超える損害が生じたことを証明しても，当該損害の賠償を請求することができない。
オ．金銭消費貸借契約の利息について法定利率を超える約定利率の定めがある場合，返済を遅滞した借主は，元本及び返済期日までの約定利率の割合による利息に加えて，当該金銭消費貸借契約を締結した時点における法定利率の割合による遅延損害金を返済期日の翌日から支払済みまで支払わなければならない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2020",num:"22",subject:"min",q:`契約の成立に関する次のアからオまでの各記述のうち，契約が成立していないものの組合せとして正しいものは，後記１から５までのうちどれか。
ア．ＡがＢに対し，承諾の期間を申込みから１週間と定めて撤回の権利の留保なく契約の申込みをし，その２日後に申込みを撤回したが，Ｂは申込みから５日後に承諾した。
イ．Ａが対話中にその終了後も契約の申込みが効力を失わない旨を表示せずに対話者であるＢに対して契約の申込みをしたところ，Ｂは対話終了後の翌日に承諾した。
ウ．Ｂは，Ａによる契約の申込みに対し，承諾の通知を発した後に死亡したが，Ａは，その承諾の通知の到達前にＢ死亡の事実を知っていた。
エ．ＡがＢに対して契約の申込みの通知を発した後に死亡したが，Ａは自らが死亡したとすればその申込みは効力を有しない旨の意思を表示しておらず，ＢはＡ死亡の事実を知らずに承諾した。
オ．ＡがＢに対して承諾の期間を申込みから１週間と定めて契約の申込みをしたところ，Ｂは申込みから１０日後に承諾した。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2020",num:"23",subject:"min",q:`ＡＢ間においてＡの所有する中古の時計甲の売買契約が締結された場合について述べた次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．売買契約において，Ａが甲を引き渡した日から１か月後にＢが代金を支払うことが定められていた場合であっても，Ａ及びＢの債務の履行後に第三者Ｃの詐欺を理由として契約が取り消されたときの双方の原状回復義務は，同時履行の関係に立つ。
イ．売買契約の締結時に甲がＤの住所に存在していたときであっても，引渡しをすべき場所について別段の意思表示がない限り，甲の引渡場所はＢの現在の住所である。
ウ．Ｂが，Ｅとの間で，売買契約における買主たる地位をＥに譲渡する旨の合意をした場合，Ａの承諾の有無にかかわらず，買主たる地位はＥに移転する。
エ．売買契約において契約の締結時には出生していなかったＦに甲の所有権を取得させることが定められた場合，売買契約は無効である。
オ．売買契約において第三者Ｇに甲の所有権を取得させることが定められ，Ｇの受益の意思表示がされた後，Ａが甲の引渡しを遅滞した場合，Ｂは，Ｇの承諾を得なければ，売買契約を解除することができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2020",num:"24",subject:"min",q:`他人の権利の売買に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．売主が他人の権利を取得して買主に移転することができない場合，買主は，契約時にその権利が売主に属しないことを知っていたとしても，それにより損害賠償の請求を妨げられない。
イ．売主が他人の権利を取得して買主に移転することができない場合，そのことについて売主の責めに帰すべき事由が存在しないときであっても，買主は売主に対して損害賠償請求をすることができる。
ウ．売買の目的である権利の一部が他人に属することにより，その権利の一部が買主に移転されず, 履行の追完が不能である場合，そのことについて買主の責めに帰すべき事由が存在しないときは，買主は，催告をすることなく，直ちに代金の減額を請求することができる。
エ．売主が他人の権利を取得して買主に移転することができない場合，買主は，契約時にその権利が売主に属しないことを知っていたときは，契約を解除することができない。
オ．売主が他人の権利を取得して買主に移転することができない場合，買主は，善意の売主に対しては，当該権利が他人の権利であることを知った時から１年以内にその旨を通知しなければ，損害賠償の請求をすることができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2020",num:"25",subject:"min",q:`賃貸借に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．賃貸不動産が譲渡され，その不動産の賃貸人たる地位がその譲受人に移転したときは，譲渡人が負っていた賃借人に対する費用の償還に係る債務は，譲受人が承継する。
イ．賃貸人は，賃借人の責めに帰すべき事由によって賃貸物の使用及び収益のために修繕が必要となったときであっても，その修繕をする義務を負う。
ウ．賃借物の一部が滅失その他の事由により使用及び収益をすることができなくなった場合において，それが賃借人の責めに帰することができない事由によるものであるときは，賃料は，その使用及び収益をすることができなくなった部分の割合に応じて，減額される。
エ．賃借人が適法に賃借物を転貸し，その後，賃貸人が賃借人との間の賃貸借を合意により解除した場合，賃貸人は，その解除の当時，賃借人の債務不履行による解除権を有していたときであっても，その合意解除をもって転借人に対抗することはできない。
オ．賃貸借が終了した場合，賃借人は，通常の使用及び収益によって生じた賃借物の損耗については，原状に復する義務を負わない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2020",num:"26",subject:"min",q:`委任に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．委任を解除した者は，その解除の時期にかかわらず，相手方に対する損害賠償責任を負わない。
イ．法律行為でない事務の委託については，法律行為の委任に関する民法の規定は準用されない。
ウ．受任者は，委任事務を処理するのに必要な費用につき，その費用を支払った後でなければ，これを委任者に請求することはできない。
エ．委任者が死亡しても委任が終了しないこととする当事者間の特約がある場合，委任は，委任者が死亡しても当然には終了しない。
オ．委任者が破産手続開始の決定を受けたことによって委任が終了した場合には，委任者は，破産手続開始の決定を受けたことを受任者に通知したとき，又は受任者が破産手続開始決定の事実を知っていたときでなければ，受任者に対し，委任の終了を主張することができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2020",num:"27",subject:"min",q:`組合に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．組合員は，組合財産に属する金銭債権につき，その持分に応じて単独で権利を行使することができる。
イ．組合の業務の決定は，業務執行者があるときであっても，組合員の過半数をもってする。
ウ．組合の存続期間を定めた場合であっても，各組合員は，やむを得ない事由があるときは，脱退することができる。
エ．組合の成立後に新たに加入した組合員は，その加入前に生じた組合の債務について弁済する責任を負わない。
オ．組合員は，組合員の過半数の同意がある場合には，清算前に組合財産の分割を求めることができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2020",num:"28",subject:"min",q:`不当利得に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．所有者から寄託された動産を受寄者が売却し，買主に即時取得が成立した場合，買主は，寄託者に対し，不当利得返還義務を負わない。
イ．第三者からだまし取った金銭を用いて債務が弁済された場合において，第三者からだまし取った金銭を用いて債務者が弁済をしたことを知らなかったことについて債権者に過失があるときは，債権者は，当該第三者に対して不当利得返還義務を負う。
ウ．過失により弁済期が到来したものと誤信をして，弁済期が到来する前に債務の弁済としての給付を行った者は，弁済期が到来するまでは，その給付したものの返還を求めることができる。
エ．債務者が債権の受領権限がない者に対し弁済をした場合において，真の債権者がその受領者に対して不当利得返還請求をしたときは，その受領者は，弁済をした債務者に過失があったことを主張して，請求を拒絶することができる。
オ．自らを債務者であると誤信して他人の債務を弁済した者は，債権者が善意でその債権を消滅時効により消滅させてしまった場合，債権者に対し弁済金の返還請求をすることができない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2020",num:"29",subject:"min",q:`不法行為に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．金銭債権を有する者が，その債務者を負傷させたことにより不法行為に基づく損害賠償債務を負った場合，当該金銭債権を自働債権，損害賠償債権を受働債権とする相殺をもって債務者に対抗することはできない。
イ．報道により他人の名誉を毀損した報道機関は，その報道が公共の利害に関する事実に係り，専ら公益を図ることに出たものであって，摘示した事実が真実であると信ずるにつき相当な理由があったとしても，その事実が真実であると証明できなかったときは，不法行為責任を負う。
ウ．子が他人の不法行為によって重傷を負った場合，その両親は，そのために子が生命を害されたときにも比肩すべき精神上の苦痛を受けたときは，自己の権利として加害者に慰謝料を請求することができる。
エ．未成年者が責任能力を有し被害者に対する不法行為責任を負う場合であっても，その監督義務者に未成年者に対する監督義務違反があり，その義務違反と当該未成年者の不法行為によって生じた結果との間に相当因果関係が認められるときには，監督義務者は被害者に対する不法行為責任を負う。
オ．使用者が被用者の加害行為につき使用者責任に基づいて第三者に損害賠償責任を負う場合，当該被用者は，加害行為につき故意又は重過失がない限り，当該第三者に対する損害賠償責任を負わない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2020",num:"30",subject:"min",q:`普通養子縁組に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．１７歳の者が縁組をして養子となるには，その法定代理人の同意を得なければならない。
イ．後見人が被後見人を養子とするには，家庭裁判所の許可を得なければならない。
ウ．配偶者のある者が配偶者の嫡出子を養子とする場合には，配偶者の同意を得ることを要しない。
エ．自己の孫を養子とする場合には，その孫が未成年者であっても，家庭裁判所の許可を得ることを要しない。
オ．縁組の当事者の一方が死亡した場合には，他方の当事者は，家庭裁判所の許可を得なければ離縁をすることができない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2020",num:"31",subject:"min",q:`親権を行う者とその子との間及び子相互間の利益相反行為に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．親権者が利益相反行為をした場合には，その行為は無権代理行為となる。
イ．親権者が共同相続人である数人の子を代理して遺産分割の協議をすることは，利益相反行為に当たる。
ウ．親権者とその数人の子が共同相続人である場合に，親権者が自ら相続の放棄をすると同時にその子全員を代理して相続の放棄をすることは，利益相反行為に当たらない。
エ．親権者がその子の名義で金銭を借り受け，その子が所有する不動産に抵当権を設定する場合であっても，親権者がその金銭を自らの用途に供する意図を有していたときには，利益相反行為に当たる。
オ．父母が共に親権者である場合に，父とその子との利益が相反する行為をするには，母が親権者として単独でその子のための代理行為をする必要がある。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2020",num:"32",subject:"min",q:`後見に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．未成年後見人が数人ある場合，身上の監護に関する権限については，家庭裁判所は，職権で，各未成年後見人が単独で又は数人の未成年後見人が職務を分掌して，その権限を行使すべきことを定めることができる。
イ．成年後見人が成年被後見人を代理してその居住している建物を売却する場合には，家庭裁判所の許可を得なければならない。
ウ．未成年被後見人Ａが成年に達した後後見の計算の終了前にＡと未成年後見人との間で契約を締結した場合，Ａは，その契約を取り消すことができる。
エ．成年後見人が成年被後見人を代理して預金の払戻しを受けるには，後見監督人があるときは，その同意を得なければならない。
オ．任意後見契約が登記されている場合に家庭裁判所が後見開始の審判をするには，本人の利益のため特に必要があると認めるときでなければならない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2020",num:"33",subject:"min",q:`遺贈に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．遺贈は，成年に達しなければ，することができない。
イ．寄与分は，被相続人が相続開始の時において有した財産の価額から遺贈の価額を控除した残額を超えることができない。
ウ．相続財産の一部の割合について包括遺贈を受けた者は，相続財産に属する債務を承継しない。
エ．Ａが所有する甲不動産をＢに生前贈与したが，所有権移転登記未了のうちにＣに遺贈する旨の遺言をし，Ａの死亡後にＡからＣへの遺贈を原因とする所有権移転登記がされた場合，ＣがＡの相続人であっても，Ｂは，Ｃに対し，甲不動産の所有権の取得を対抗することができない。
オ．遺贈は，遺言者の死亡以前に受遺者が死亡したときは，その効力を生じない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2020",num:"34",subject:"min",q:`遺言の執行に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．自筆証書遺言に係る遺言書を保管している相続人は，相続の開始を知った後，遅滞なく，遺言書を保管している旨を他の相続人に通知しなければならない。
イ．遺言執行者がないとき，又はなくなったときは，家庭裁判所は，利害関係人の請求によって，これを選任することができる。
ウ．遺言執行者がある場合には，遺贈の履行は，遺言執行者のみが行うことができ，遺言者の相続人がこれを行うことはできない。
エ．遺産分割方法の指定として遺産に属する預金債権の全部を相続人の一人に承継させる旨の遺言があったときは，遺言執行者は，遺言者がその遺言に別段の意思を表示した場合を除き，その預金の払戻しを請求することができる。
オ．遺言執行者は，遺言者がその遺言に別段の意思を表示した場合を除き，やむを得ない事由がなければ，第三者にその任務を行わせることができない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2020",num:"35",subject:"min",q:`相続と贈与に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．特別受益に当たる贈与の価額がその受贈者である相続人の具体的相続分の価額を超える場合，その相続人は，超過した価額に相当する財産を他の共同相続人に返還しなければならない。
イ．Ａが，婚姻後２１年が経過した時点で，Ａとその配偶者Ｂが居住するＡ所有のマンション甲をＢに贈与し，その後に死亡した場合，当該贈与については，その財産の価額を相続財産に算入することを要しない旨の意思表示（持戻し免除の意思表示）がされたものと推定される。
ウ．特別受益に当たる贈与は，地震により目的物が滅失した場合であっても，相続開始の時においてなお原状のままであるものとみなしてその価額を定める。
エ．不動産の死因贈与の受贈者Ａが贈与者Ｂの相続人である場合において，限定承認がされたときは，死因贈与に基づくＢからＡへの所有権移転登記が相続債権者Ｃによる差押登記よりも先にされたとしても，Ａは，Ｃに対し，その不動産の所有権の取得を対抗することができない。
オ．特別受益に当たる贈与は，当事者双方が遺留分権利者に損害を加えることを知ってしたものでない場合，相続開始前の１０年間にしたものに限り，遺留分を算定するための財産の価額に算入される。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2020",num:"36",subject:"min",q:`承継人に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．錯誤によって取り消すことができる行為は，錯誤による意思表示をした者の契約上の地位の承継人も，取り消すことができる。
イ．時効の完成猶予の効力は，その事由が生じた当事者の承継人に対しては生じない。
ウ．占有者の包括承継人は，取得時効に関して，自己の占有のみを主張することもできる。
エ．共有者の一人であるＡが共有物について他の共有者であるＢに対して有する債権は，Ｂの特定承継人に対しては，行使することができない。
オ．遺留分権利者の承継人は，遺留分侵害額に相当する金銭の支払を請求することができる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2020",num:"37",subject:"min",q:`撤回に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．選択債権について債務者が選択権行使の意思表示をした場合，その意思表示は，債権の弁済期前であっても，債権者の承諾を得なければ，撤回することができない。
イ．解除の意思表示は，撤回することができない。
ウ．相続の放棄は，相続の承認又は放棄をすべき期間内は，撤回することができる。
エ．遺贈の承認は，遺贈義務者が履行に着手するまでは，撤回することができる。
オ．遺言者は，その遺言を撤回する権利を放棄することができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2020",num:"1",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．甲は，Ｘに対し，暴行や脅迫を用いて，自殺するように執拗に要求し，要求に応じて崖から海に飛び込んで自殺するしかないとの精神状態に陥らせた上で，Ｘを崖から海に飛び込ませて死亡させた。この場合，甲に，Ｘに対する殺人罪は成立しない。",c2:"２．甲は，追死する意思がないのにあるように装い，その旨誤信したＸに心中を決意させた上で，毒物を渡し，それを飲み込ませて死亡させた。この場合，甲に，Ｘに対する殺人罪は成立しない。",c3:"３．甲は，財物を奪取するために，当該財物の占有者Ｘに対し，反抗を抑圧するに足りる程度の暴行や脅迫を用いて，当該財物を差し出すしかないとの精神状態に陥らせた上で，当該財物を差し出させた。この場合，甲に，Ｘに対する強盗罪は成立せず，窃盗罪の間接正犯が成立する。",c4:"４．甲は，日頃から暴行を加えて自己の意のままに従わせて万引きをさせていた満１２歳の実子Ｘに対し，これまでと同様に万引きを命じて実行させた。この場合，Ｘが是非善悪の判断能力を有する者であれば，甲に，窃盗罪の間接正犯は成立せず，Ｘとの間で同罪の共同正犯が成立する。",c5:"５．甲は，Ｘが管理する工事現場に保管されている同人所有の機械を，同人に成り済まして，甲をＸであると誤信した中古機械買取業者Ｙに売却し，同人に同機械を同所から搬出させた。この場合，甲に，Ｘに対する窃盗罪の間接正犯が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2020",num:"2",subject:"kei",q:"横領の罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，誤っているものを２個選びなさい。",c1:"１．甲は，乙からの委託に基づき，同人所有の衣類が入った，施錠されていたスーツケース１個を預かり保管していたところ，衣類を古着屋に売却して自己の遊興費を得ようと考え，勝手に開錠し，中から衣類を取り出した。この場合，遅くとも衣類を取り出した時点で不法領得の意思の発現と認められる外部的行為があったといえるから，甲には，横領罪が成立する。",c2:"２．甲は，乙と共に一定の目的で積み立てていた現金を１個の金庫の中に入れて共同保管していたところ，乙に無断でその現金全てを抜き取り，自己の遊興費に費消した。この場合，甲には，横領罪が成立する。",c3:"３．株式会社の取締役経理部長甲は，同会社の株式の買い占めに対抗するための工作資金として自ら業務上保管していた会社の現金を第三者に交付した。この場合，甲が，会社の不利益を回避する意図を有していたとしても，当該現金の交付が会社にとって重大な経済的負担を伴うもので，甲が自己の弱みを隠す意図をも有していたなど，専ら会社のためにしたとは認められないときは，甲には，業務上横領罪が成立する。",c4:"４．甲は，乙から某日までに製茶を買い付けてほしい旨の依頼を受け，その買付資金として現金を預かっていたところ，その現金を確実に補填するあてがなかったにもかかわらず，後日補填するつもりで自己の遊興費に費消した。この場合，甲がたまたま補填することができ，約定どおりに製茶の買い付けを行ったとしても，甲には，横領罪が成立する。",c5:"５．甲は，自己が所有し，その旨登記されている土地を乙に売却し，その代金を受領したにもかかわらず，乙への移転登記が完了する前に，同土地に自己を債務者とし丙を抵当権者とする抵当権を設定し，その登記が完了した。この場合，同抵当権が実行されることなく，後日，その登記が抹消されたとしても，甲には，横領罪が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"12"},{year:"2020",num:"3",subject:"kei",q:`学生Ａ及びＢは，過剰防衛に関する次の【事例】について，後記【会話】のとおり議論している。【会話】の中の①から④までの（ ）内から適切なものを選んだ場合，正しいものの組合せは，後記１から５までのうちどれか。
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
学生Ｂ．その点は，量刑上考慮すれば足りるという説明が可能なのではないか。`,c1:"１．①ａ ③ｅ",c2:"２．①ｂ ④ｇ",c3:"３．②ｄ ③ｅ",c4:"４．②ｃ ④ｇ",c5:"５．③ｆ ④ｈ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2020",num:"4",subject:"kei",q:"遺棄の罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものを２個選びなさい。",c1:"１．遺棄罪（刑法第２１７条）の成立には，生命に対する危険の発生が必要である。",c2:"２．妊婦の依頼を受け，母体保護法上，許されない堕胎を行った産婦人科医師が，それにより出生した未熟児について，医療設備の整った病院に搬送することが容易であり，同病院の医療を受けさせれば，同児が短期間内に死亡することはなく，むしろ生育する可能性がある場合において，そのことを認識しながら，生存に必要な保護を行わず同児を死亡させたときは，同医師に，保護責任者遺棄等致死罪（刑法第２１９条，第２１８条）が成立し得る。",c3:"３．保護責任者遺棄等罪（刑法第２１８条）にいう「老年者，幼年者，身体障害者又は病者」は，例示列挙であり，同罪の客体はそれらの者に限られず，扶助を必要とする者であれば足りる。",c4:"４．保護責任者遺棄等致傷罪（刑法第２１９条，第２１８条）には，傷害結果に故意がある場合は含まれない。",c5:"５．保護責任者遺棄等罪（刑法第２１８条）における遺棄には，置き去りは含まれない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"24"},{year:"2020",num:"5",subject:"kei",q:`共犯と錯誤に関する次のアからオまでの各記述を判例の立場に従って検討した場合，正しいものの個数を後記１から５までの中から選びなさい。
ア．甲及び乙がＡに対する暴行を共謀したが，Ａの態度に激高した甲が殺意をもってＡを殺害した場合，甲及び乙に殺人罪の共同正犯が成立するが，乙は傷害致死罪の刑で処断される。
イ．甲及び乙がＡに対する強盗を共謀したが，その強盗の機会に，甲が過失によってＡに傷害を負わせた場合，甲及び乙に強盗致傷罪の共同正犯が成立する。
ウ．甲及び乙が共謀して，公務員Ａに虚偽の内容の公文書の作成を教唆することにしたが，乙はＡを買収することに失敗したため，甲に無断で，Ｂに公文書を偽造することを教唆し，Ｂが公文書を偽造した場合，甲に虚偽公文書作成罪の教唆犯が成立する。
エ．甲が乙にＡ方に侵入して金品を窃取するように教唆して，その犯行を決意させたが，乙はＡ方と誤認して隣のＢ方に侵入してしまい，Ｂ方から金品を窃取した場合，甲にＢ方への住居侵入罪及びＢに対する窃盗罪の教唆犯は成立しない。
オ．甲が乙の傷害行為を幇助する意思で，乙に包丁を貸与したところ，乙が殺意をもってその包丁でＡを刺殺した場合，甲に殺人罪の幇助犯が成立し，傷害致死罪の幇助犯は成立しない。`,c1:"１．０個",c2:"２．１個",c3:"３．２個",c4:"４．３個",c5:"５．４個",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2020",num:"6",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合，誤っているものはどれか。",c1:"１．甲は，乙から，大学の入学試験を代わりに受けてほしいと頼まれてこれを引き受け，乙に成り済まして入学試験を受け，乙名義で答案を作成して提出した。この場合，甲に有印私文書偽造罪が成立する。",c2:"２．甲は，架空請求により金銭をだまし取るために使おうと考え，実在しない「法務局民事訴訟管理センター」名義で，契約不履行による民事訴訟が提起されているので連絡をされたい旨記載されたはがきを印刷し，一般人をして実在する公務所が権限内で作成した公文書であると誤信させるに足りる程度の形式・外観を備えた文書を作成した。この場合，甲に有印公文書偽造罪が成立する。",c3:"３．甲は，Ｘ市立病院の事務長を務める公務員であるが，同病院のために発注書を作成する権限を授与されていないのに，行使の目的で，同病院が業者Ａに医療器具を発注していないにもかかわらず，それを発注した旨を記載した内容虚偽の「Ｘ市立病院事務長甲」名義の発注書を作成した。この場合，甲に虚偽有印公文書作成罪が成立する。",c4:"４．甲は，支払督促制度を悪用して乙の財産を不正に差し押さえるなどして金銭を得ようと考え，乙に対する内容虚偽の支払督促を簡易裁判所に申し立てた上，乙宛ての支払督促正本等を配達しようとした郵便配達員に対し，乙本人を装い，郵便送達報告書の「受領者の押印又は署名」欄に乙の氏名を記載して提出し，支払督促正本等を受領した。この場合，甲に有印私文書偽造罪が成立する。",c5:`５．甲は，消費者金融業者に提出する目的で，公文書である乙の国民健康保険被保険者証の氏名欄に自己の氏名が印刷された紙を貼り付けた上で，複写機を使用してこれをコピーし，一般人をして甲の国民健康保険被保険者証の真正なコピーであると誤信させるに足りる程度の形式・外観を備えたものを作成した。この場合，甲に有印公文書偽造罪が成立する。
`,c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2020",num:"7",subject:"kei",q:`学生Ａ，Ｂ及びＣは，後記【会話】のとおり議論している。【会話】中の①から⑤までの（ ）内から適切なものを選んだ場合，正しいものの組合せは，後記１から５までのうちどれか。
【会 話】
学生Ａ．人に意図的に害悪を加えることは，本来であれば許されないはずです。それにもかかわらず，刑罰という苦痛を人に与えることが正当化される実質的な根拠は何でしょうか。
学生Ｂ．私は，刑罰は犯罪に対する非難を含むもので，その意味で①（ａ．応報・ｂ．社会統制の手段）としての性質を持ち，②（ｃ．犯罪者の改善更生・ｄ．正義の実現）という観点に照らして，犯罪に対する反作用であること自体に刑罰の正当化根拠を見いだすことができると考えます。もう少し詳しく言うと，自らの意思で犯罪行為を行うことを決意し実行した犯罪者に対して，その意思決定を回顧的に非難する点に刑罰の正当化根拠があるということです。
学生Ｃ．Ｂ君は，③（ｅ．非決定論・ｆ．決定論）の立場を前提にしているのですね。しかし，（①）としての刑罰自体に刑罰を正当化する根拠があるという説明では，刑罰を科すことそれ自体が目的ということになりませんか。刑罰は，国家の制度の一種なのだから，国民の現実的な利益を実現する手段として合目的性の観点から正当化されるべきではないでしょうか。私は，刑罰を科すことが許される根拠は，④（ｇ．被害感情の緩和・ｈ．犯罪の予防）にあると思います。犯罪によって得られる快楽を上回る苦痛を刑罰として予告すれば，一般人に対する威嚇的な効果があるからです。刑罰は（④）という公的利益の達成に資するために，人に科すことが正当化されるのだと思います。
学生Ａ．私も，基本的にＣ君の考えに賛成ですが，（④）の観点を強調しすぎると，⑤（i．責任・ｊ．被害感情）の程度を超える刑罰を科すことも肯定されかねず，刑法の基本原則に反する帰結をもたらすことになるのではないでしょうか。`,c1:"１．①ａ ③ｆ",c2:"２．①ｂ ⑤ｊ",c3:"３．②ｄ ④ｈ",c4:"４．②ｃ ⑤ｉ",c5:"５．③ｅ ④ｇ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2020",num:"8",subject:"kei",q:`公務執行妨害罪に関する次のアからオまでの各記述を判例の立場に従って検討し，正しい場合には１を，誤っている場合には２を選びなさい。
ア．甲は，市役所の生活保護係職員乙による生活保護に関する説明に不満を抱き，同人に罵声を浴びせながら抗議するとともに，丸めたパンフレットを同人の顔面付近に２，３回突き付け，そのうち１回はパンフレットの先端が同人の顎に触れ，さらに，約２回にわたり，乙が座っている椅子を両手で持って椅子の前脚を床から持ち上げては落とすことによりその身体を揺さぶった。甲の行為は，公務執行妨害罪にいう「暴行」に当たらないので，甲に公務執行妨害罪は成立しない。
イ．甲は，警察官乙らが捜索差押許可状に基づき甲方の捜索に来た際，乙らにより甲方玄関ドアの鍵が開けられる前に，居室内にあった覚醒剤入りの注射器を足で踏み付けて壊した。甲の行為は，公務執行妨害罪にいう「暴行」に当たらないので，甲に公務執行妨害罪は成立しない。
ウ．窃盗犯人甲は，その窃盗行為を目撃した制服警察官乙から追跡されている途中で，逮捕を免れるため，同人に対し，その反抗を抑圧するに足りる程度の暴行を加えて抵抗し，そのまま逃走した。甲には事後強盗罪のみが成立し，公務執行妨害罪は成立しない。
エ．甲は，日本国内にある外国大使館の職員乙がその大使館の業務に従事していた際に，同人の顔面を殴った。乙は「公務員」に当たらないので，甲に公務執行妨害罪は成立しない。
オ．甲は，税務調査を免れるため，同調査のため甲方に来た所轄税務署職員乙の顔面を殴った。その際，乙は，規則により調査時に携帯が義務付けられている検査章を携帯していなかったが，甲がその呈示を求めることはなかった。乙に規則違反があった以上，乙の調査は職務の権限外の行為であり，甲に公務執行妨害罪は成立しない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"21212"},{year:"2020",num:"9",subject:"kei",q:`原因において自由な行為に関する次の各【見解】に従って後記の各【事例】における甲の罪責を検討した場合，後記１から５までの各【記述】のうち，誤っているものはどれか。
【見 解】
Ａ．責任能力がある状態で行われた原因行為を実行行為と捉える。
Ｂ．責任能力を欠いた状態で行われた結果行為を実行行為と捉えつつ，責任能力は意思決定時に存在すれば足り，必ずしも実行行為時に存在することは必要ない。
【事 例】
Ⅰ．甲は，Ｘ宅に赴いて同人を殺害しようと決意し，心神喪失状態に陥る可能性があることを認識しつつ，自宅において景気づけのために覚醒剤を使用したところ，心神喪失状態に陥り，当初の計画どおりＸを殺害した。
Ⅱ．甲は，Ｘ宅に赴いて同人を殺害しようと決意し，心神喪失状態に陥る可能性があることを認識しつつ，自宅において景気づけのために覚醒剤を使用したところ，心神喪失状態に陥ったが，Ｘ宅には赴かず，Ｘの殺害には及ばなかった。
Ⅲ．甲は，覚醒剤を使用すると粗暴になり周囲に暴行を加える習癖があると知りつつ，覚醒剤を使用した結果，心神喪失状態に陥り，Ｘと口論になり，殺意を生じて同人を殺害した。
【記 述】`,c1:"１．Ａの見解によれば，事例Ⅰでは，甲に，Ｘに対する殺人既遂罪が成立し得る。",c2:"２．Ａの見解を採った上で，未遂犯の成立時期は結果発生の現実的な危険性が生じた段階に求められるべきで，それが常に実行行為の開始段階に認められる必然性はないと考えれば，事例Ⅱでは，甲に，Ｘに対する殺人未遂罪は成立しない。",c3:"３．Ａの見解によれば，事例Ⅲでは，甲に，Ｘに対する殺人既遂罪が成立し得る。",c4:"４．Ｂの見解によれば，事例Ⅰでは，甲に，Ｘに対する殺人既遂罪が成立し得る。",c5:"５．Ｂの見解によれば，事例Ⅱでは，甲に，Ｘに対する殺人未遂罪は成立しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2020",num:"10",subject:"kei",q:"親族間の犯罪に関する特例について次の１から５までの各記述を判例の立場に従って検討した場合，誤っているものはどれか。",c1:"１．甲が，実母乙の使用するタンスから，乙がその友人丙から預かり同タンスに保管していた丙所有の宝石を窃取した場合，甲の窃取行為について刑は免除されない。",c2:"２．甲が，実父乙の内縁の妻である丙が乙から預かり保管していた乙所有の時計を窃取した場合，甲の窃取行為について刑は免除されない。",c3:"３．甲は，家庭裁判所から実父乙の成年後見人に選任されていたところ，後見の事務として業務上預かり保管中の乙の預金を引き出して自己の借金の返済に充てた場合，甲の横領行為について刑は免除されない。",c4:"４．甲が，友人乙を教唆して，乙の実父丙が所有し，管理している自動車を窃取させた場合，甲の窃盗教唆行為について刑は免除されない。",c5:"５．甲が，同居していない祖父乙を恐喝して同人から現金の交付を受けた場合，甲の恐喝行為について刑は免除されない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2020",num:"11",subject:"kei",q:`次のアからオまでの各記述を判例の立場に従って検討し，正しい場合には１を，誤っている場合には２を選びなさい。
ア．甲及び乙は，深夜，路上を一人で歩いていたＶ女を見付け，約６キロメートル先のひとけのない工事現場にＶ女を連れ込んで強制的にＶ女と性交しようと決意し，二人でＶ女の背後からその身体を抱きかかえながら，付近に停めていた自動車にＶ女を押し込んで乗せ，同車を発進させたが，性交には至らなかった。甲及び乙には，強制性交等未遂罪の共同正犯が成立する。
イ．甲は，強制的にＶ女と性交しようと決意し，深夜，路上において，Ｖ女を押さえ付けて反抗を抑圧したが，付近から人の声が聞こえたため性交を諦めて，Ｖ女のハンドバッグから財布を奪い取ろうと考え，「騒ぐな。殺すぞ。」と申し向けてＶ女の畏怖心を強めた上，財布を奪い取った。甲には，強盗・強制性交等未遂罪が成立する。
ウ．甲は，Ｖが居住する木造家屋に火をつけて焼損しようと考え，同家屋台所において，プロパンガスを多量かつ長時間にわたり放出するとともに，ガソリン約１８リットルを撒布したが，点火行為には至らなかった。甲には，現住建造物等放火未遂罪が成立する。
エ．甲は，Ｖを殺害する意思で，毒入りの菓子を箱詰めし，それをＶ宅に宛てて宅配便で発送した。しかし，仕事に嫌気が差した配達員により，その菓子は配達途中に川に捨てられた。甲には，殺人未遂罪が成立する。
オ．甲は，Ｖ宅に侵入し，金品を強取しようと決意し，Ｖを脅すためのナイフを入手した上，それを携行してＶ宅に向かった。しかし，Ｖ宅に至る手前で，罪悪感を覚え，計画を中止することに決め，自宅に引き返した。甲には，強盗予備罪の中止犯が成立する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"12122"},{year:"2020",num:"12",subject:"kei",q:"業務妨害罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，誤っているものはどれか。",c1:"１．利用客のキャッシュカードの暗証番号等を盗撮する目的で，現金自動預払機が２台設置されている銀行の無人出張所において，そのうち１台にカメラを設置し，当該現金自動預払機に客を誘導する意図で，一般客を装い，もう１台の現金自動預払機を２時間占拠した場合，偽計業務妨害罪が成立する。",c2:"２．講演会の主催者が閲覧する可能性を認識した上，インターネット上の掲示板に，当該講演会の会場に放火するという趣旨の書き込みをし，当該主催者に閲覧させた結果，当該講演会を中止させた場合，威力業務妨害罪が成立する。",c3:"３．公職選挙法上の選挙長による立候補届出受理事務を妨害する目的で，その届出場所において，突如大声を発し，ボールペンを机にたたき付けるという暴行・脅迫に至らない言動を用いてその事務を滞らせた場合，威力業務妨害罪が成立する。",c4:"４．知人Ａに対する嫌がらせの目的で，同人に成り済まし，同人に無断で宅配ピザ店に電話をかけてピザ５０枚を注文し，これを同人宅まで配達することを依頼して，同店店員にピザ５０枚を作らせ，配達させた場合，偽計業務妨害罪が成立する。",c5:"５．弁護士Ｘの弁護士としての活動を困難にさせる目的で，同人から，同人が携行し，その業務にとって重要な訴訟記録等が入ったかばんを奪い取った上，自宅に保管した場合，偽計業務妨害罪が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2020",num:"13",subject:"kei",q:`幇助犯の成否について，学生Ａ及びＢが次の【会話】のとおり議論している。【会話】中の①から⑤までの（ ）内に後記アからオまでの【事例群】から適切な事例を入れた場合，正しいものの組合せは，後記１から５までのうちどれか。
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
オ．乙が空き巣に使うことができるものとしてＶ方の合鍵を甲に渡したため，甲がＶ方に行ったが，無施錠であったため合鍵を使わず，空き巣に成功した場合`,c1:"１．①イ ②エ ③ア ④ウ ⑤オ",c2:"２．①イ ②エ ③オ ④ア ⑤ウ",c3:"３．①エ ②イ ③ウ ④オ ⑤ア",c4:"４．①エ ②イ ③オ ④ア ⑤ウ",c5:"５．①エ ②イ ③オ ④ウ ⑤ア",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2020",num:"14",subject:"kei",q:"放火罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものを２個選びなさい。",c1:"１．甲が自己の所有する空き家に放火したが，公共の危険が生じなかった場合，甲には，非現住建造物等放火未遂罪が成立する。",c2:"２．甲が乙に頼まれて，乙所有の大型家具を，丙が居住する家屋に近接する甲所有の畑地で燃やし始めたところ，周辺に火の粉が飛び散り，予期に反して，同家屋の屋根のひさしに飛び火して，同ひさしを焼損させたところで火が消し止められた場合，甲には，延焼罪が成立する。",c3:"３．甲が住宅内にいる乙を殺害する目的で放火し，住宅が焼失した上，乙が死亡した場合，甲には，殺人罪は成立せず，現住建造物等放火罪のみが成立する。",c4:"４．甲が，一部の部屋のみが現に住居に使用されている木造の集合住宅の空き部屋に放火し，同室のみを焼損させた場合，甲には，現住建造物等放火罪が成立する。",c5:"５．甲が憂さ晴らしの目的で，甲の世帯を含めて計３０世帯が居住するマンション内部に設置されたエレベーターのかご内に，灯油を染み込ませて点火した新聞紙を投げ入れて放火したが，エレベーターのかごの側壁を焼損したにとどまり，住居部分には延焼しなかった場合，甲には，現住建造物等放火未遂罪が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"24"},{year:"2020",num:"15",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合，誤っているものを２個選びなさい。",c1:"１．甲は，火災保険金をだまし取る目的で，同居する家族が不在の間に，自宅に放火して焼失させ，その後，火災原因を偽って火災保険金の支払を受けた。この場合，甲には，現住建造物等放火罪及び詐欺罪が成立し，これらは併合罪となる。",c2:"２．甲は，強盗目的で，乙方に侵入した上，乙及び丙をそれぞれ殴打して緊縛し，その際，両名に怪我を負わせ，乙が管理していた現金１００万円を強取した。この場合，甲には，住居侵入罪及び１個の強盗致傷罪が成立し，これらは牽連犯となる。",c3:"３．甲は，乙を教唆して丙占有の自動車を盗むことを決意させ，乙にこれを実行させた後，乙から頼まれて，同自動車を預かり保管した。この場合，甲には，窃盗教唆罪及び盗品等保管罪が成立し，これらは牽連犯となる。",c4:"４．甲は，乙を殺害して金品を強取しようと考え，甲の自宅内で乙を殺害して現金を強取した後，引き続き，その死体を自宅の床下に埋めて遺棄した。この場合，甲には，強盗殺人罪及び死体遺棄罪が成立し，これらは併合罪となる。",c5:"５．甲は，乙名義で預金口座を開設する目的で，同人に成り済まし，同人名義で口座開設申込書を作成し，これを銀行の係員に提出して，乙名義の預金通帳の交付を受けた。この場合，甲には，有印私文書偽造罪，同行使罪及び詐欺罪が成立し，これらは牽連犯となる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"23"},{year:"2020",num:"16",subject:"kei",q:"名誉毀損罪及び侮辱罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．名誉毀損罪及び侮辱罪の保護法益は，いずれも人の外部的名誉であり，法人については，侮辱罪の客体になり得ない。",c2:"２．死者であっても，その外部的名誉を保護すべきことに変わりはないので，死者の名誉を毀損する事実が摘示された場合も，その事実の真偽にかかわらず，名誉毀損罪が成立し得る。",c3:"３．特定かつ少数の者に特定人の名誉を毀損する事実を摘示した場合，その内容が拡散する可能性があったとしても，「公然と」事実を摘示したことにはならない。",c4:"４．風評の形式を用いて人の社会的評価を低下させる事実が摘示された場合，刑法第２３０条の２にいう「真実であることの証明」の対象となるのは，風評が存在することではなく，そのような風評の内容たる事実が存在することである。",c5:"５．表現方法が嘲笑的であるとか，適切な調査がないまま他人の文章を転写しているなどといった，事実を摘示する際の表現方法や事実調査の程度は，摘示された事実が刑法第２３０条の２にいう「公共の利害に関する事実」に当たるか否かを判断する際に考慮すべき要素の一つである。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2020",num:"17",subject:"kei",q:`緊急避難（刑法第３７条第１項）に関する次の【記述】の中の①から⑥までの（ ）内に，後記アからスまでの【語句群】から適切な語句を入れた場合，（ ）内に入るものの組合せとして正しいものは，後記１から５までのうちどれか。なお，①から⑥までの（ ）内にはそれぞれ異なる語句が入る。
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
 ス．違法でない`,c1:"１．①ア ③ウ ⑤ク",c2:"２．①イ ③エ ⑤キ",c3:"３．②ケ ④ア ⑥ス",c4:"４．②コ ⑤ク ⑥ス",c5:"５．③オ ④ア ⑥シ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2020",num:"18",subject:"kei",q:`詐欺罪に関する次の【見解】についての後記アからオまでの各【記述】を検討し，正しい場合には１を，誤っている場合には２を選びなさい。
【見 解】
規約上，会員である名義人のみがクレジットカードを利用できるものとされ，その利用者が会員本人であることの確認義務が加盟店に課されている場合，名義人に成り済まし，クレジットカードを利用して商品を購入する行為は，その利用が名義人から許されており，かつ，利用代金が規約に従い名義人において決済されることが見込まれるときであっても，詐欺罪が成立する。
【記 述】
ア．この【見解】に対しては，名義人に依頼されてクレジットカードを利用して商品を購入した場合，詐欺罪の実質的違法性がなく，財産犯として処罰するのは行き過ぎであるとの批判が可能である。
イ．この【見解】は，クレジットカード利用者と名義人の同一性が加盟店にとって商品交付の判断の基礎となる重要な事項に当たると理解している。
ウ．この【見解】によれば，名義人に成り済ましてクレジットカードを利用して商品を購入する行為について，行為者が，当該名義人において現実に決済されるものと誤信していた場合でも，詐欺罪が成立し得ることとなる。
エ．この【見解】は，名義人の個別的な信用を基礎としてクレジットカードシステムが構築されていることを前提に，個々の事案における詐欺罪の成否の判断において，加盟店の経済的損失の有無を重視するものである。
オ．この【見解】に対しては，加盟店が名義人以外の利用であることを知りながら，クレジットカードの利用を認めた場合でも詐欺罪の既遂が成立することになり，妥当ではないとの批判が可能である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"11122"},{year:"2020",num:"19",subject:"kei",q:`故意に関する次の各【見解】についての後記１から５までの各【記述】のうち，誤っているものはどれか。
【見 解】
Ａ．故意の有無については，構成要件を基準にして判断すべきであるところ，殺人罪においては，行為者の認識した事実と発生した事実とが，「およそ人を殺す」という点で一致していれば故意が認められる。また，行為者の認識した客体に対しても，結果が発生した客体に対しても故意犯が成立する。
Ｂ．故意の有無については，構成要件を基準にして判断すべきであるところ，殺人罪においては，行為者の認識した事実と発生した事実とが，「その人を殺す」という点で一致していなければ意犯が成立する。故意は認められない。
【記 述】`,c1:"１．甲が，Ｘを焼死させようと思い，Ｘの全身に灯油をかけて火をつけたところ，Ｘが熱さに耐えかね，火を消そうとして近くの湖に飛び込んで溺死したという事例においては，Ａ，Ｂいずれの見解でも，甲に殺人既遂罪が成立する。",c2:"２．Ａの見解に対しては，甲が殺意をもってＸを狙い拳銃を発射したところ，弾丸がＸの腕を貫通した上，予想外にＹの胸部にも当たり，Ｘを負傷させるとともにＹを死亡させたという事例において，行為者に過剰な故意責任を課すことになり，責任主義に反するとの批判がある。",c3:"３．Ｂの見解によれば，【記述】２の事例で，甲にＹに対する殺人既遂罪が成立する。",c4:"４．Ｂの見解に対しては，客体の錯誤と方法の錯誤のいずれに当たるのかが必ずしも明らかではない場合において，故意の有無につき，どのように判断するのか明確ではないとの批判がある。",c5:"５．Ｂの見解によれば，甲がＸを殺害しようと考え，Ｘと似た者を見付けて，Ｘと思い，その者をナイフで刺し殺したが，実際には，その者はＹであったという事例において，甲にＹに対する殺人既遂罪が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2020",num:"20",subject:"kei",q:`次の【事例】に関する後記アからエまでの各【記述】を判例の立場に従って検討した場合，正しいものの個数を後記１から５までの中から選びなさい。
【事 例】
甲は，某所公園内において，ベンチ上に置いてあるバッグ１個（以下「本件バッグ」という。）を発見し，誰かが置き忘れたものと考え，警察に届け出るため，これを手に取り，同公園から路上に出た。一方，本件バッグをベンチに置き忘れたことに気付いたＶは，同公園に戻ろうとして同路上に至ったところ，甲を発見した。Ｖは，甲が本件バッグを盗んだと疑い，「バッグを返せ。」と言いながら，甲の腹部を２回足で蹴り，甲から本件バッグを奪い，さらに，甲を蹴り上げるような仕草を続けた。甲は，Ｖの暴行を避けようとして，その胸付近を１回平手で突いたところ，その勢いでＶが後方に転倒し，後頭部を路面に打ち付け，失神した。甲は，その頃には，Ｖが本件バッグの所有者であると分かっていたが，Ｖの態度に怒りを覚えたことなどから，本件バッグを自己のものにしようと考え，失神しているＶからこれを取り上げて自宅に持ち帰った。その後，甲が本件バッグ内を確認したところ，Ｖ名義の預金口座のキャッシュカード等在中の財布，Ｖ所有の携帯電話機等の物品が入っていた。甲は，これらを見て，Ｖの氏名，勤務先のほか，携帯電話機にわいせつな盗撮画像が保存されていることを知り，これを奇貨とし，Ｖから上記キャッシュカードの暗証番号を聞き出して上記口座から預金を引き出そうと思い，勤務先にいたＶに電話をかけ，「あんた盗撮してるな。警察に携帯を持って行かれたくないなら，あんたのキャッシュカードの暗証番号を教えろ。」と要求するなどした。Ｖは，この要求を断れば，盗撮の事実が警察に露見すると思い，やむを得ず甲に同暗証番号を教えた。その後，甲は，上記キャッシュカードを用いて現金自動預払機から現金５０万円を引き出した。
【記 述】
ア．甲が本件バッグを警察に届け出るために某所公園内から持ち出した行為は，Ｖによる占有の回復を困難にする行為であるため，窃盗罪又は占有離脱物横領罪が成立する。
イ．Ｖは本件バッグを甲から取り返す目的で暴行を加えており，この暴行は正当行為に該当するため，甲がＶの胸付近を１回平手で突いた行為の違法性が阻却される余地はなく，甲には，暴行罪又は傷害罪が成立する。
ウ．甲が本件バッグをＶから取り上げた行為は，甲の暴行に起因するＶの失神状態に乗じて本件バッグの占有を取得したといえるため，強盗罪が成立する。
エ．甲が現金自動預払機から現金５０万円を引き出した行為は，甲が，これに先行してＶから暗証番号を聞き出した時点で，Ｖの預金の払戻しを受け得る地位を得たことにより，その預金の占有を取得したといえるため，窃盗罪は成立しない。`,c1:"１．０個",c2:"２．１個",c3:"３．２個",c4:"４．３個",c5:"５．４個",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2019",num:"1",subject:"ken",q:`国又は地方公共団体との特殊な法律関係における人権に関する次のアからウまでの各記述について，ｂの見解がａの見解の根拠となっている場合には１を，そうでない場合には２を選びなさい。
ア．ａ．当該法律関係の特殊性だけを理由とする基本的人権の制約は正当化できず，個々の法律関係ごとに，いかなる人権が，いかなる理由で，どの程度制限されるのかを具体的に検討すべきである。
ｂ．特殊な法律関係といっても様々な関係があり，それらを特殊な法律関係として一律に捉え，同様の人権制約が妥当すると解するのは相当でない。
イ．ａ．特別な法律関係にある者に対して公権力が包括的な支配権を有し，法律の根拠なく人権を制限することができ，それについて裁判所の審査が及ばないとする伝統的な特別権力関係論は，日本国憲法下では妥当し得ない。
ｂ．日本国憲法は，国会を唯一の立法機関とし，徹底した法治主義の原則をとり，基本的人権の尊重を基本原則としている。
ウ．ａ．刑事施設被収容者の収容関係について，人が国又は地方公共団体の通常の統治権に服することで成立する一般権力関係におけるのとは異なる人権制限を行う必要性は，現在もなお肯定できる。
ｂ．刑事施設被収容者といえども人権の享有主体であることに変わりはなく，取り分け未決勾留中の者については，無罪推定原則が及んでいる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"112"},{year:"2019",num:"2",subject:"ken",q:`私人間における人権保障に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．「憲法の人権規定は，私人間においても直接適用される」とする説のうち，私的自治の原則により，人権の効力は私人相互間の場合にはその本質的な核心が侵されない限度で相対化されることを認める見解は，こうした相対化を認める限度において，直接適用説といっても間接適用説に類似したものになる。
イ．「憲法の人権規定は，公権力の統治行動に対して個人の基本的な自由と平等を保障する目的に出たもので，私人相互の関係を直接規律することを予定するものではない」とする説を前提にすると，私人間における権利・自由の対立については，その侵害の態様，程度が社会的に許容し得る一定の限界を超える場合に，私法規定の解釈を通じてその間の適切な調整を図ることができるとの見解は採り得ない。
ウ．「私人間の関係においても，相互の社会的力関係の相違から，一方が他方に優越し，事実上後者が前者の意思に服従せざるを得ない場合，憲法の人権規定は私人間に直接適用される」とする説について，判例は，こうした支配関係はその支配力の態様，程度，規模等において様々であり，どのような場合にこれを国又は公共団体の支配と同視すべきかの判定が困難であるとしている。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"121"},{year:"2019",num:"3",subject:"ken",q:`憲法の明文で規定されていない権利・自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．何人も，個人に関する情報をみだりに第三者に開示又は公表されない自由を有するところ，行政機関が住民基本台帳ネットワークシステムにより個人情報を収集，管理又は利用することは，外部からの不当なアクセス等による情報漏えいの具体的な危険があるものの，正当な行政目的の範囲内において行われるものである以上，かかる自由を侵害するものではない。
イ．何人も，前科及び犯罪経歴をみだりに公開されない自由を有するところ，前科等の有無が訴訟の重要な争点となっていて，市区町村長に照会して回答を得なければ他に立証方法がない場合であっても，裁判所から市区町村長に照会することが可能であるから，市区町村長が弁護士法に基づく照会に応じて前科等につき報告することは，公権力の違法な行使として許されない。
ウ．何人も，その承諾なしに，みだりに容ぼう・姿態を撮影されない自由を有するところ，現に犯罪が行われ若しくは行われた後間がないと認められる場合であって，証拠保全の必要性及び緊急性があり，かつ，その撮影が一般的に許容される限度を超えない相当な方法をもって行われるときは，警察官による犯人の容ぼうの写真撮影は，憲法に違反しない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"221"},{year:"2019",num:"4",subject:"ken",q:`信教の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．内閣総理大臣が靖国神社を参拝する行為は，他の宗教を信じる者に心理的圧迫を加えることになるので，これにより自己の心情ないし宗教上の感情が害され不快の念を抱いた者は，国の宗教活動を禁じた憲法第２０条第３項の定める政教分離原則に違反することを理由として国に損害賠償を請求することができる。
イ．憲法第２０条第１項前段及び同条第２項によって保障される信教の自由は，自己の信仰と相容れない信仰を持つ者の信仰に基づく行為に対しても寛容であることを要請するものであり，県護国神社による殉職した自衛官の合祀は，遺族が同神社の宗教行事に参加を強制されるなどの干渉等とならない限り，同神社が自由になし得る。
ウ．憲法第２０条第３項の禁止する宗教的活動に含まれないとされる宗教上の祝典，儀式，行事等であっても，国又はその機関が，宗教的信条に反するとしてその参加を拒否する者に対してそれらへの参加を強制することは，その者の信教の自由を直接侵害するものとして同条第２項に違反する。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"5"},{year:"2019",num:"5",subject:"ken",q:`表現の自由の制約の合憲性に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．軽犯罪法第１条第３３号は，「みだりに他人の家屋その他の工作物にはり札をし」た者を処罰の対象としているところ，はり札をする行為自体は思想を外部に発表する手段の１つであると認められるものの，その手段が他人の財産権，管理権を不当に害することは許されないから，この程度の規制は，公共の福祉のため，許された必要かつ合理的な制限であるというべきである。
イ．公職選挙法第１３８条第１項は，選挙に関し，投票を得るなどの目的をもって「戸別訪問をすること」を禁止しているところ，戸別訪問は，容易に他の方法により代替され得るものではなく，通常，それ自体何らの悪性を有するものでもないから，その規制の合憲性を判断するに当たっては，他に目的を達成することができるより狭い範囲の規制方法があるか否かを検討すべきである。
ウ．関税法第６９条の１１第１項第７号（旧関税定率法第２１条第１項第３号）は，輸入を禁止する物品として「風俗を害すべき書籍，図画」等と規定しているが，我が国内における健全な性的風俗を維持確保すべきことは公共の福祉に合致するものである上，「風俗」という用語が「性的風俗」を意味することはその文言自体から明らかであるので，明確性の原則にも反せず，このような制限はやむを得ない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"4"},{year:"2019",num:"6",subject:"ken",q:`憲法第２１条に関する次のアからウまでの各記述について，ｂの見解がａの見解の根拠となっている場合には１を，そうでない場合には２を選びなさい。
ア．ａ．「検閲」とは，行政権が主体となって，思想内容等の表現物を対象とし，その全部又は一部の発表の禁止を目的として，対象とされる一定の表現物につき網羅的一般的に，発表前にその内容を審査した上，不適当と認めるものの発表を禁止することを，その特質として備えるものであり，絶対的に禁止される。
ｂ．大日本帝国憲法下においては，文書，図画ないし新聞，雑誌等を出版直前ないし発行時に提出させた上，その発売，頒布を禁止する権限が内務大臣に与えられ，その運用を通じて実質的な検閲が行われたほか，映画フィルムにつき典型的な検閲が行われる等，思想の自由な発表，交流が妨げられるに至った経験を有する。
イ．ａ．公務員又は公職選挙の候補者に対する評価，批判等の表現行為に関する出版物の公布等の事前差止めは，原則として許されず，その表現内容が真実でなく，又はそれが専ら公益を図る目的のものではないことが明白であって，かつ，被害者が重大にして著しく回復困難な損害を被るおそれがあるときにのみ例外的に許される。
ｂ．表現行為に対する事前抑制は，表現物がその自由市場に出る前に抑止してその内容を読者等の側に到達させる途を閉ざし又はその到達を遅らせてその意義を失わせ，公の批判の機会を減少させるものであり，性質上，予測に基づくものとならざるを得ないこと等から広汎にわたりやすく，濫用のおそれがある上，実際上の抑止的効果が大きい。
ウ．ａ．主催者が集会を平穏に行おうとしているのに，その集会の目的や主催者の思想，信条等に反対する者らが，これを実力で阻止し，妨害しようとして紛争を起こすおそれがあることを理由に公の施設の利用を拒むことができるのは，警察の警備等によってもなお混乱を防止することができないなど特別な事情がある場合に限られる。
ｂ．集団行動による思想等の表現は，現在する多数人の集合体自体の力によって支持されているから，平穏静粛な集団であっても，一瞬にして暴徒と化し，勢いの赴くところ実力によって法と秩序をじゅうりんし，集団行動の指揮者はもちろん警察力を以てしても如何ともし得ないような事態に発展する危険が存在する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"112"},{year:"2019",num:"7",subject:"ken",q:`職業の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．薬局の開設につき，これを許可制とすることの目的が，国民の生命及び健康に対する危険の防止にある場合，当該規制の合憲性を肯定するためには，それが重要な公共の利益のために必要かつ合理的な措置であることに加え，より緩やかな規制によってはその目的を十分に達成することができないと認められることも要する。
イ．個人の経済活動の自由に対して，社会経済全体の均衡のとれた調和的発展を図るという積極目的の規制を設けることが正当化される根拠として，国民の生存権やその一環としての勤労権が保障されているなど，経済的劣位に立つ者に対する適切な保護政策を行うことが憲法上の要請とされていることを挙げることができる。
ウ．酒類販売業について免許制とすることを定めた酒税法の規定は，酒類販売業者には経済的基盤の弱い中小事業者が多いことに照らし，酒類販売業者を相互間の過当競争による共倒れから保護するという積極目的の規制であり，当該規制の目的に合理性が認められ，その手段・態様も著しく不合理であることが明白であるとは認められないから，違憲ではない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2019",num:"8",subject:"ken",q:`刑事手続上の人権保障に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．起訴されていない余罪を被告人が自認している場合に余罪を実質上処罰する趣旨で被告人を重く処罰することは，憲法第３１条に由来する不告不理の原則に反するが，憲法第３８条第３項の規定する補強法則との関係では問題は生じない。
イ．迅速な裁判を受ける権利を保障する憲法第３７条第１項は，それ自体が裁判規範性を有しており，審理の著しい遅延の結果，被告人の上記権利が害される異常な事態が生じた場合には，法律上の具体的な根拠がなくても審理を打ち切るべきである。
ウ．ビデオリンク方式による証人尋問は，犯罪被害者等の保護の要請から，裁判の公開原則の例外として定められたものであり，公開裁判を受ける権利を保障した憲法第３７条第１項，裁判の公開を定めた憲法第８２条第１項に反しない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"212"},{year:"2019",num:"9",subject:"ken",q:`次の対話は，婚姻の自由に関する教授と学生の対話である。教授の各質問に対する次のアからウまでの学生の各回答について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
教授．婚姻の自由の憲法上の位置付けについての判例としては，再婚禁止期間一部違憲判決（最高裁判所平成２７年１２月１６日大法廷判決，民集６９巻８号２４２７頁）が重要ですが，この判決はどのように述べているでしょうか。
ア．この判決は，婚姻をするかどうか，いつ誰と婚姻をするかは当事者間の自由かつ平等な意思決定に委ねられるべきこと（婚姻をするについての自由）は，「憲法第２４条第１項によって保障される」としています。
教授．再婚禁止期間を定めた当時の民法第７３３条の規定は，婚姻をするについての自由の直接的な制約だとされましたが，夫婦同氏制を定める民法第７５０条について，夫婦同氏制合憲判決（最高裁判所平成２７年１２月１６日大法廷判決，民集６９巻８号２５８６頁）はどのように述べていますか。
イ．同条は，婚姻の効力の１つとして夫婦が夫又は妻の氏を称することを定めたものであり，婚姻をすることについての直接の制約を定めたものではないとした上で，このような事実上の制約については立法裁量の審査の際に考慮すべきであるとしています。
教授．ところで，近年，海外主要国では同性婚の権利が憲法上保障されているとする判決が出されたり，法改正あるいは憲法改正によって同性婚の権利が保障される例が増えてきています。憲法第２４条第１項は，婚姻が「両性の合意のみ」に基づいて成立するとしていますが，同条項の解釈論として，同性婚の権利はどのように考えられるでしょうか。
ウ．今，先生のおっしゃった文言を重視すれば，同性婚の権利を同条項が保障しているとするのは難しいと思います。他方，同条項は，家制度の下での婚姻に関する戸主権を否定することを主たる趣旨とするので，この文言を過度に重視すべきではないという見解もあります。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"5"},{year:"2019",num:"10",subject:"ken",q:`国民の義務に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法第２６条第２項は，保護する子女に普通教育を受けさせる国民の義務を定めている。この点，親権者には教育の自由があるから，子女に普通教育を受けさせない親権者に対し，法律に制裁規定を設けることはできない。
イ．憲法第２７条第１項は，勤労の義務を定めている。このため，国は，憲法第１８条によって禁止されている「その意に反する苦役」に当たらない程度のものであれば，法律の定めによって刑罰をもって国民に勤労を強制することができる。
ウ．憲法第３０条は，納税の義務を定めている。この規定は，国政の運営に必要な財政を支えるための国民としての当然の義務を確認したものにすぎず，法律の定めなくして具体的な納税義務を国民に課すことはできない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2019",num:"11",subject:"ken",q:`憲法の概念に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．「固有の意味の憲法」とは，国家の統治の在り方を定めた基本法としての近代前の憲法を指す。これに対して，「立憲的意味の憲法」とは，国家権力を制限して国民の権利を保障するという思想に基づく近代以降の憲法のことをいう。
イ．「形式的意味の憲法」とは，憲法という名称を与えられた成文の法典（憲法典）を指す。これに対して，「実質的意味の憲法」とは，その存在形式のいかんを問わず，内容的に憲法と観念されるもののことをいう。
ウ．「硬性憲法」とは，日本国憲法のように，憲法改正が困難な憲法を指す。これに対して，「軟性憲法」とは，ドイツ連邦共和国基本法のように，憲法改正が容易でこれまで繰り返し改正が成立してきた憲法のことをいう。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"6"},{year:"2019",num:"12",subject:"ken",q:`天皇に関する次のアからウまでの各記述について，正しいものには〇，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法第６条第１項は，天皇が国会の指名に基づいて内閣総理大臣を任命する旨定めているが，国会の議決で内閣総理大臣を指名している以上，天皇が内閣総理大臣を任命するに当たって，内閣の助言と承認は不要である。
イ．憲法第４条第２項の定める国事行為の委任は，憲法第５条の定める摂政を置く場合とは異なり，国事行為の臨時代行に関する法律の定める事由が発生した場合に，天皇が内閣の助言と承認に基づいて国事行為を委任するものである。
ウ．憲法第７条は，天皇の国事行為について列挙しているが，天皇の即位に際して行われる大嘗祭は，即位の礼と同様に憲法第７条第１０号の定める「儀式」に当たるから，国事行為として行うことができる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"6"},{year:"2019",num:"13",subject:"ken",q:`憲法第９条に関する次のアからウまでの各記述について，ｂの見解がａの見解の根拠となっている場合には１を，そうでない場合には２を選びなさい。
ア．ａ．戦争の放棄について規定した憲法第９条第１項は，自衛のためであると侵略のためであるとを問わず，全ての戦争を放棄することとしたものである。
ｂ．「国際紛争を解決する手段として」の「戦争」という文言は，戦争抛棄ニ関スル条約（いわゆる不戦条約）に見られるような，通常の国際法上の用例に従って解釈されるべきである。
イ．ａ．日本国とアメリカ合衆国との間の相互協力及び安全保障条約（いわゆる日米安保条約）に基づき日本国内に駐留するアメリカ合衆国の軍隊は，憲法第９条第２項で保持しないこととされた「戦力」に該当する。
ｂ．憲法第９条第２項が戦力の不保持を定めているのは，わが国が戦力を保持し，自らその主体となってこれに指揮権，管理権を行使することにより，同条第１項において放棄するとした侵略戦争を引き起こすことがないようにするためである。
ウ．ａ．憲法第９条に違反する具体的な立法又は行政処分により，個人に何らかの不利益が生じたとしても，同条で保障された個人の権利が侵害されたものということはできない。
ｂ．憲法第９条は，前文における平和主義の原則を受けて規定されたものであり，平和達成のための禁止事項を前文よりも具体的に列挙しているが，これは国家機関に対して一定の行為を禁止するものであって，その保護法益は国民一般の公益である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"221"},{year:"2019",num:"14",subject:"ken",q:`議院の権能に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．国政調査権について，議院が保持する諸権能を実効的に行使するために認められた権能であると解する見解によれば，各議院が，国政調査権の行使として，特定の事件について裁判所の下した判決の内容の当否を調査することが認められる。
イ．議院規則について，両議院の会議その他の手続及び内部の規律に関する国会法の規定に法的効力を認めると，国会法の改廃について両議院の意思が異なる場合に，参議院の自主性が損なわれるおそれがある。
ウ．議院による懲罰について，公開議場における戒告，公開議場における陳謝，一定期間の登院停止，除名の４種のいずれの懲罰を科すにも，議院がその組織体としての秩序を維持するため，出席議員の過半数の議決を要する。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"6"},{year:"2019",num:"15",subject:"ken",q:`内閣に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．内閣は，行政権の行使について，国会に対し連帯して責任を負うことから，閣議によってその職権を行うことが求められ，したがって，国務大臣の罷免については，閣議にかけて決定しなければ，行うことができない。
イ．国務大臣は，国会議員でない者からも選ぶことができるが，国会議員の中から選ばれた国務大臣は，その在任中に国会議員の身分を失った場合，その法的効果として自動的に国務大臣の身分を失う。
ウ．衆議院において内閣不信任決議案が可決されたときは，１０日以内に衆議院が解散されない限り，内閣は総辞職をしなければならないが，参議院における問責決議には，かかる法的効力はない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"221"},{year:"2019",num:"16",subject:"ken",q:`違憲判断の在り方に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．国籍法の規定に関し，日本国民である父と日本国民でない母との間に出生した子の国籍取得に過剰な要件を設けることにより区別を生じさせている部分のみを除いて合理的に解釈することは，裁判所が法律にない新たな国籍取得の要件を創設するもので，国会の本来的な機能である立法作用を行うものとして許されない。
イ．衆議院の議員定数配分規定が選挙権の平等に反して違憲と判断された場合，行政事件訴訟法の事情判決の規定には，一般的な法の基本原則に基づくものとして理解すべき要素も含まれていると考えられ，公職選挙法も選挙関係訴訟については上記規定の準用を明示的に排除していないため，事情判決の法理により，その選挙の違法を主文で宣言することができる。
ウ．嫡出でない子の相続分を嫡出子の相続分の２分の１とした民法の法定相続分規定は，遅くとも当該規定が違憲とされた事案の相続が開始した当時に憲法第１４条第１項に違反していたため，その当時以降に開始された他の相続につき，関係者間の法律関係が確定的な段階に至っていない事案であれば，違憲無効とされた当該規定の適用を排除した上で法律関係を確定的なものとするのが相当である。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2019",num:"17",subject:"ken",q:`財政に関する次のアからエまでの各記述について，正しいものの組合せを，後記１から６までの中から選びなさい。
ア．予算は法律であるとする予算法律説の立場に立てば，予算措置を必要とする法律が成立したのに，それを執行するための予算が伴わないという事態は生じ得ないこととなる。
イ．国会は，予算の議決に際し，増額修正を行うことができるが，予算の作成・提出権が内閣に専属していることから，原案に新たな項を加えることはいかなる場合も許されない。
ウ．国会の決算審査は，予算執行者である内閣の責任を明らかにするためのものであり，決算には法規範性がなく，不承認の議決がなされても，既になされた収入支出には影響がない。
エ．内閣は，毎年，国会に対し決算を提出するほか，定期に，少なくとも毎年１回，国会及び国民に対して財政状況を報告しなければならない。`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．イとウ",c5:"５．イとエ",c6:"６．ウとエ",c7:"",c8:"",c9:"",c10:"",a:"6"},{year:"2019",num:"18",subject:"ken",q:`地方自治に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．地方議会は地方公共団体における議事機関であり，国会と同様の議会自治・議会自律の原則が認められるから，地方議会議員が議会で行った演説，討論等について議会外で責任を問われない権利が憲法上保障される。
イ．小規模な普通地方公共団体の議事機関として，議会ではなく，選挙権を有する者全員によって組織される総会を設けることは，地方自治の本旨に反するものではないから，憲法第９３条第１項に反しない。
ウ．憲法第９３条第２項は，地方公共団体の長，地方議会の議員等を地方公共団体の住民が直接選挙すべき旨を定めており，地方公共団体の長及び地方議会の議員の解職請求があった場合にその可否を住民投票によって決すべきことも同項の要請である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"212"},{year:"2019",num:"19",subject:"ken",q:`憲法と条約の効力関係に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法優位説によれば，条約締結の機関と手続を定めた憲法の規定は，条約の形式的効力と関わりがないと考えることになる。
イ．条約優位説によれば，違憲審査権の対象に「条約」という文言がない憲法の規定は，憲法が条約との関係で必ずしも最高法規でないことを示していると考えることになる。
ウ．憲法優位説によれば，条約の承認手続と比べて憲法改正手続が厳格であることは，憲法が優位する効力を有する根拠となると考えることになる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"211"},{year:"2019",num:"20",subject:"ken",q:`日本国憲法の改正に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. 憲法改正の手続において必要とされる発議とは，通常の議案についていわれる発議が原案を提出することを意味するのとは異なり，国民に提案すべき憲法の改正案を国会が決定することを意味している。
イ. 国民による承認の要件として必要とされる過半数の賛成の意味については，憲法上複数の解釈があり得たが，それらの中から，法律で，有効投票総数の過半数の賛成をいうものと定められた。
ウ. 国民投票において過半数の賛成があったとしても，一定の投票率に達しなかったときは，その国民投票は成立せず，国民の承認を得られなかったものとする制度が，法律で設けられている。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"112"},{year:"2019",num:"1",subject:"min",q:`制限行為能力者の行為であることを理由とする取消しに関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．未成年者がした売買契約は，親権者の同意を得ないでした場合であっても，その契約が日常生活に関するものであるときは，取り消すことができない。
イ．成年被後見人がした売買契約は，成年後見人の同意を得てした場合であっても，その契約が日常生活に関するものであるときを除き，取り消すことができる。
ウ．被保佐人がした保証契約は，保佐人の同意を得てした場合には，取り消すことができない。
エ．被補助人が，補助人の同意を得なければならない行為を，その同意又はこれに代わる家庭裁判所の許可を得ないでしたときは，その行為は取り消すことができる。
オ．成年被後見人の行為であることを理由とする取消権の消滅時効の起算点は，成年被後見人が行為能力者となった時である。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2019",num:"2",subject:"min",q:`Ａがその財産の管理人を置かないで行方不明となったことから，家庭裁判所は，Ｂを不在者Ａの財産の管理人として選任した。この事例に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａが甲土地を所有している場合，ＢがＡを代理して甲土地をＣに売却するためには，家庭裁判所の許可を得る必要がある。
イ．Ａが所有する現金が発見された場合，ＢがＡを代理してその現金をＤ銀行のＡ名義普通預金口座に預け入れるためには，家庭裁判所の許可を得る必要はない。
ウ．ＡがＥに対して借入金債務を負っており，その債務が弁済期にある場合，ＢがＡのためにＥに対しその債務の弁済をするためには，家庭裁判所の許可を得る必要はない。
エ．Ａが被相続人Ｆの共同相続人の一人である場合，ＢがＡを代理してＦの他の共同相続人との間でＦの遺産について協議による遺産分割をするためには，家庭裁判所の許可を得る必要はない。
オ．Ａに子Ｇがいる場合，ＢがＡを代理してＧに対し結婚資金を贈与するためには，家庭裁判所の許可を得る必要はない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2019",num:"3",subject:"min",q:`代理に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａの代理人Ｂがその代理権の範囲内でＡのためにすることを示さずにＣと契約を締結した場合，Ｃにおいて，ＢがＡのために契約を締結することを知っていたのでなければ，ＡＣ間に契約の効力が生じることはない。
イ．Ａは，Ｂ及びＣからあらかじめ許諾を得た場合，Ｂ及びＣの双方を代理してＢＣ間の契約を締結することができる。
ウ．委任による代理人が本人の指名に従って復代理人を選任した場合，代理人は，選任時に復代理人が不適任であることを知っていたとしても，本人に対して復代理人の選任についての責任を負うことはない。
エ．法定代理人がやむを得ない事由があるために復代理人を選任した場合，代理人は，本人に対して復代理人の選任及び監督についての責任のみを負う。
オ．無権代理人は，本人の追認を得られなかったとしても，自己に代理権があると過失なく信じて行為をしたときは，相手方に対して履行又は損害賠償の責任を負わない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2019",num:"4",subject:"min",q:`条件に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．停止条件付法律行為は，当事者が条件が成就した場合の効果をその成就した時以前にさかのぼらせる意思を表示したとしても，条件が成就した時からその効果が生ずる。
イ．条件の成否が未定である間における当事者の権利義務は，一般の規定に従い，処分し，相続し，若しくは保存し，又はそのために担保を供することができる。
ウ．不能の解除条件を付した法律行為は，無効となる。
エ．条件が成就することによって不利益を受ける当事者が故意にその条件の成就を妨げたときは，相手方は，その条件が成就したものとみなすことができる。
オ．停止条件付法律行為は，その条件が単に債務者の意思のみに係るときは，無条件となる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2019",num:"5",subject:"min",q:`取得時効に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．時効期間中に建物が第三者の不法行為により一部損傷した場合の損害賠償請求権は，その建物の所有権を時効により取得した者に帰属する。
イ．不動産の所有権を時効により取得した者は，時効完成後にその不動産を譲り受けた者に対し，登記をしなくてもその所有権の取得を対抗することができる。
ウ．被相続人の占有により不動産の取得時効が完成した場合，その共同相続人の一人は，自己の相続分の限度においてのみ取得時効を援用することができる。
エ．自己の所有物を占有する者は，その物について取得時効を援用することができない。
オ．占有主体に変更があって承継された二個以上の占有が併せて主張される場合，占有者の善意無過失は，最初の占有者の占有開始時に判定される。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2019",num:"6",subject:"min",q:`不動産物権変動に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡがＡ所有の甲建物をＢに売却し，さらにＢがこれをＣに売却した場合，Ｃは，Ａに対し，登記をしなくても売買による甲建物の所有権の取得を対抗することができる。
イ．Ａ所有の甲土地についてＢがＡから遺贈を受けた場合において，Ａの共同相続人の一人であるＣの債権者Ｄが甲土地についてＣが共同相続したものとしてＣのその持分を差し押さえ，その旨の登記がされたときは，Ｂは，Ｄに対し，登記をしなくても遺贈による甲土地の単独所有権の取得を対抗することができる。
ウ．甲土地を所有するＡが遺言をしないで死亡し，二人の子ＢＣのうちＢが相続放棄をしてＣが唯一の相続人となった場合において，Ｂの債権者Ｄが甲土地についてＢも共同相続したものとしてＢのその持分を差し押さえ，その旨の登記がされたときは，Ｃは，Ｄに対し，登記をしなくても単独相続による甲土地の所有権の取得を対抗することができる。
エ．Ａ所有の甲土地をＡからＢが買い受けた後，Ｂの代金未払を理由にＡＢ間の売買契約が解除された場合において，その後にＢがＣに甲土地を売却しその旨の登記がされたときは，Ａは，Ｃに対し，解除による甲土地の所有権の復帰を対抗することができない。
オ．Ａが新築して所有する未登記の甲建物をＢが不法に占有している場合，Ａは，Ｂに対し，登記をしなければ甲建物の所有権の取得を対抗することができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2019",num:"7",subject:"min",q:`Ａは，その所有する動産甲をＢに保管させていた。この事例に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ｂは，甲をＣに売却し，Ｃは，甲がＢの所有物であると過失なく信じて，現実の引渡しを受けた。甲が道路運送車両法による登録を抹消された自動車であった場合，Ｃは，即時取得により甲の所有権を取得することができない。
イ．Ｂが死亡し，その唯一の相続人Ｄは，甲がＢの相続財産に属すると過失なく信じて，現実に占有を開始した。甲が宝石であった場合，Ｄは，即時取得により甲の所有権を取得する。
ウ．Ｂは，甲をＥに贈与し，Ｅは，甲がＢの所有物であると過失なく信じて，現実の引渡しを受けた。甲が宝石であった場合，Ｅは，即時取得により甲の所有権を取得する。
エ．Ｂの債権者により甲が強制競売に付され，Ｆは，甲がＢの所有物であると過失なく信じて，甲を競落し，現実の引渡しを受けた。甲が宝石であった場合，Ｆは，即時取得により甲の所有権を取得する。
オ．Ｂは，甲をＧに質入れし，Ｇは，甲がＢの所有物であると過失なく信じて，現実の引渡しを受けた。甲が宝石であった場合，Ｇは，即時取得により甲を目的とする質権を取得する。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2019",num:"8",subject:"min",q:`所有権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．土地の使用収益の権原なく播種された種子が苗に生育した場合，その苗の所有権は，播種した者ではなく，その土地の所有者が取得する。
イ．立木の所有権に関する明認方法は，現所有者と前所有者が共同して，現所有者名のほか，所有権の取得原因，前所有者名を表示することが必要である。
ウ．甲土地とその上の立木を所有するＡが立木の所有権を留保して甲土地をＢに譲渡した後，ＢがＣに甲土地を立木とともに譲渡した場合，Ａは，立木の所有権の留保について登記や明認方法を備えなくても，立木の所有権をＣに主張することができる。
エ．甲土地とその上の立木を所有するＡがＢに甲土地を立木とともに譲渡し，甲土地についてＡからＢへの所有権移転登記がされた後，ＣがＡから立木のみを譲り受け，立木について明認方法を備えた場合，Ｃは立木の所有権をＢに主張することができる。
オ．加工者が他人の木材のみを材料としてこれに工作を加えた場合において，その工作によって生じた価格が材料の価格を著しく超えるときは，加工者がその加工物の所有権を取得する。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2019",num:"9",subject:"min",q:`相隣関係に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡとＢが共有する土地の分割によって公道に通じないＡ所有の甲土地と公道に通じるＢ所有の乙土地が生じた場合において，甲土地から公道に至るためにはＣ所有の丙土地を通行するのが最も損害が少ないときは，Ａは，丙土地を通行することができる。
イ．土地の所有者は，隣地の所有者が隣地に設置した排水溝の破壊又は閉塞により自己の土地に損害が及んでいる場合，隣地の所有者に，排水溝の修繕又は障害の除去をさせることができる。
ウ．土地の所有者は，隣地の竹木の枝が境界線を越えているときは，自らその枝を切除することができる。
エ．境界線上に設けられた境界標は，相隣者の共有に属するものと推定される。
オ．土地の所有者は，隣地の所有者と共同の費用で，境界標を設けることができる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2019",num:"10",subject:"min",q:`Ａ，Ｂ及びＣが各３分の１の割合で甲建物を共有している場合に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａは，その持分に抵当権を設定する場合，Ｂ及びＣの同意を得る必要がある。
イ．ＤがＡ，Ｂ及びＣに無断でＤ名義の所有権移転登記をした場合，Ａは，Ｂ及びＣの同意を得ることなく単独で，Ｄに対してその所有権移転登記の抹消登記手続を請求することができる。
ウ．Ａは，その持分を放棄する場合，Ｂ又はＣの同意を得る必要がある。
エ．ＡがＢ及びＣに無断で甲建物をＥに引き渡し，無償で使用させている場合，Ｂは，Ｃの同意を得ることなく単独で，Ｅに対して甲建物の明渡しを請求することができる。
オ．ＡがＢに対して甲建物の管理に関する債権を有する場合において，Ｂがその持分をＦに譲渡したときは，Ａは，Ｆに対してもその債権を行使することができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2019",num:"11",subject:"min",q:`不動産を目的とする担保物権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．留置権者は，債務者の承諾を得なくても，目的不動産を賃貸することができる。
イ．不動産の保存の先取特権の効力を保存するためには，保存行為が完了した後直ちに登記をしなければならない。
ウ．不動産質権の設定後に質権者が質権設定者に目的不動産を占有させたとしても，質権の効力は影響を受けない。
エ．不動産質権者は，設定行為に定めがあるときは，その債権の利息を請求することができる。
オ．抵当権の存続期間は，１０年を超えることができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2019",num:"12",subject:"min",q:`留置権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．留置権者が目的物を紛失したときは，留置権は消滅する。
イ．他人の物の占有者は，その物に関して生じた債権が弁済期にないときであっても，その物を留置することができる。
ウ．債務者は，相当の担保を供して，留置権の消滅を請求することができる。
エ．留置権者は，留置権に基づき，目的物の競売を申し立てることはできない。
オ．Ａがその所有する甲建物をＢに売却して引き渡した後，Ａが甲建物をＣに売却してその旨の登記をした場合において，ＣがＢに対して甲建物の明渡請求をしたときは，Ｂは，Ａの債務不履行に基づく損害賠償請求権を被担保債権として，甲建物を留置することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2019",num:"13",subject:"min",q:`質権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．債権質の質権者は，質権の目的が金銭債権でない場合，これを直接に取り立てることはできない。
イ．動産質権者は，質物から生ずる果実を収取し，他の債権者に優先して被担保債権の弁済に充当することができる。
ウ．質権者は，質権設定者の承諾を得なければ，自己の債務の担保として質物をさらに質入れすることはできない。
エ．質権は，設定行為に定めがないときは，質物の隠れた瑕疵によって生じた損害の賠償を担保しない。
オ．Ａは，Ｂに対して有する債権を担保するために，ＢがＡに対して有する債権を目的として質権の設定を受けることができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2019",num:"14",subject:"min",q:`抵当権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．抵当権者は，目的物が第三者の行為により滅失した場合，物上代位により，所有者がその第三者に対して有する損害賠償請求権から優先弁済を受けることができる。
イ．一人の者が所有する互いに主従の関係にない甲乙２棟の建物が工事により１棟の丙建物となった場合において，甲建物と乙建物とにそれぞれ抵当権が設定されていたときは，それらの抵当権は，丙建物のうちの甲建物と乙建物の価格の割合に応じた持分を目的とするものとして存続する。
ウ．借地上の建物について抵当権が設定された場合，抵当権の効力は，敷地の賃借権に及ぶことはない。
エ．物の引渡請求権を担保するために抵当権を設定する契約は，無効である。
オ．後日発生すべき貸付金債権を担保するために抵当権を設定する契約がされ，その旨の登記がされた後にその貸付金債権が生じた場合，抵当権はその債権を有効に担保する。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2019",num:"15",subject:"min",q:`抵当権の効力が及ぶ範囲に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．抵当権設定者が，抵当権の目的である土地を第三者に賃貸していた場合，その担保する債権について不履行がなくても，抵当権の効力は，その賃料債権に及ぶ。
イ．土地の所有者が，土地に抵当権を設定した後，その土地上に立木を植栽した場合，抵当権の効力は，その立木に及ぶ。
ウ．抵当権設定者が，抵当権の目的である建物に宝石を持ち込んで保管していた場合，抵当権の効力は，その宝石に及ぶ。
エ．抵当権の目的である建物が天災のため崩壊し動産となった場合，抵当権の効力は，その動産に及ぶ。
オ．抵当権設定者から抵当権の目的である建物を賃借した賃借人が，その所有する取り外し可能なエアコンを建物内に設置している場合，抵当権の効力は，そのエアコンに及ばない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2019",num:"16",subject:"min",q:`債務者が設定した譲渡担保に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．債務者が弁済期に債務の弁済をしなかった場合において，不動産の譲渡担保権者が目的不動産を譲渡したときは，譲受人がいわゆる背信的悪意者に当たるときであっても，債務者は，残債務を弁済して目的不動産を受け戻すことができない。
イ．債務者は，被担保債権の弁済期後は，譲渡担保の目的物の受戻権を放棄することにより，譲渡担保権者に対し清算金の支払を請求することができる。
ウ．債務者が弁済期に債務の弁済をしなかった場合において，不動産の譲渡担保権者が目的不動産を譲渡したときは，債務者は，譲受人からの明渡請求に対し，譲渡担保権者に対する清算金支払請求権を被担保債権とする留置権を主張することができない。
エ．譲渡担保の被担保債権の弁済期後に目的不動産が譲渡担保権者の債権者によって差し押さえられ，その旨の登記がされた場合，債務者は，その後に被担保債権に係る債務の全額を弁済しても，差押債権者に対し，目的不動産の所有権を主張することができない。
オ．構成部分の変動する集合動産であっても，その種類，所在場所及び量的範囲を指定するなどの方法によって目的物の範囲が特定される場合には，一個の集合物として譲渡担保の目的とすることができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2019",num:"17",subject:"min",q:`保証に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．保証契約は，書面又はその内容を記録した電磁的記録によってされなければ，その効力を生じない。
イ．保証人は，債権者が保証人を指名した場合でも，行為能力者であることを要する。
ウ．貸金等根保証契約は，主たる債務の元本の確定すべき期日の定めがない場合，その効力を生じない。
エ．主たる債務につき期限が延長されても，その効力は保証債務には及ばない。
オ．保証人が催告の抗弁権を行使したにもかかわらず，債権者が催告を怠ったために主たる債務者から全部の弁済を得られなかったときは，保証人は，債権者が直ちに催告をすれば弁済を得ることができた限度において，その義務を免れる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2019",num:"18",subject:"min",q:`指名債権の譲渡に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．債権譲渡の予約について確定日付のある証書による債務者の承諾がされても，予約の完結による債権譲渡の効力は，その承諾をもって第三者に対抗することができない。
イ．将来発生すべき債権を目的とする債権譲渡契約は，その締結時において目的債権の発生が確実に期待されるものでなければ，効力を生じない。
ウ．未完成仕事部分に関する請負報酬金債権の譲渡について，債務者の異議をとどめない承諾がされても，譲受人がその債権が未完成仕事部分に関する請負報酬金債権であることを知っていた場合には，債務者は，その債権譲渡の承諾後に生じた仕事完成義務不履行を理由とする当該請負契約の解除をもって譲受人に対抗することができる。
エ．同一の債権を目的とする債権譲渡と債権差押えとの間の優劣は，債権譲渡についての債務者以外の第三者に対する対抗要件が具備された時と債権差押命令が発令された時の先後で決する。
オ．債権が二重に譲渡され，第一の債権譲渡について確定日付のある証書による通知が債務者に到達した後，第二の債権譲渡について確定日付のある証書による通知が債務者に到達した場合，第一の債権譲渡の確定日付が第二の債権譲渡の確定日付に後れるときは，第一の債権譲渡の譲受人は，債権の取得を第二の債権譲渡の譲受人に対抗することができない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2019",num:"19",subject:"min",q:`債務者Ａが債権者Ｂに対して負う金銭債務（以下「本件債務」という。）に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ｂは，Ａの意思に反しては，本件債務を免除することができない。
イ．第三者は，Ａの意思に反しても，本件債務を主たる債務とする保証をすることができる。
ウ．本件債務の物上保証人は，Ａの意思に反しては，本件債務を弁済することができない。
エ．Ｂと第三者Ｃとは，Ａの意思に反しては，Ｃに債務者を交替する更改をすることができない。
オ．Ｂは，Ａの意思に反しては，Ｂが第三者に対して負う金銭債務について，本件債務に係る債権をもって代物弁済をすることができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2019",num:"20",subject:"min",q:`弁済の提供に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．売買代金債権が譲渡され，債務者対抗要件が具備された場合であっても，債務者によるその代金の弁済の提供は，売買代金債権の譲渡人の現在の住所においてすれば足りる。
イ．特定物の売主は，その特定物を売買契約の締結当時から自己の住所に保管している場合，その引渡債務について弁済の提供をするに当たり，買主に対し，引渡しの準備をしたことを通知してその受領の催告をすれば足りる。
ウ．賃借人には債務不履行がないのに，賃貸人が債務不履行による賃貸借契約の解除を主張して賃料の受領を拒絶し，口頭の提供をしても賃料の弁済を受領しない意思が明確である場合，賃借人は，賃料債務について，口頭の提供をしなくても，履行遅滞の責任を負わない。
エ．不法行為の加害者Ａが被害者Ｂに対して第一審判決で支払を命じられた損害賠償金１億円の全額について弁済の提供をしたが，その後，控訴審判決において損害賠償金が２億円に増額され，それが確定した場合，Ａがした弁済の提供は，無効となる。
オ．甲土地の賃貸人がその賃料の支払を催告したのに対し，賃借人が，賃貸借の目的物ではない乙土地も共に賃貸借の目的物であると主張して，甲土地の賃料額を超える額の金員を，その全額が受領されるのでなければ支払わない意思で提供した場合，債務の本旨に従った弁済の提供があったものとはいえない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2019",num:"21",subject:"min",q:`更改及び混同に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．消費貸借契約の成立後，第三者が借主と連帯して債務弁済の責任を負担することを約することは，更改に当たる。
イ．債権者の交替による更改は，確定日付のある証書によってしなければ，第三者に対抗することができない。
ウ．保証人が主たる債務者を単独で相続した場合，保証債務を担保するために抵当権が設定されているときは，保証債務は消滅しない。
エ．更改の当事者は，更改前の債務の目的の限度であれば，その債務の担保として第三者が設定した抵当権を，その第三者の承諾を得ずに更改後の債務に移すことができる。
オ．Ａが所有する甲建物の賃借人ＢがＡから甲建物を譲り受けて占有を継続していたが，ＣがＡから甲建物を譲り受け，その旨の所有権移転登記を経由したため，Ｂにおいて甲建物の所有権の取得をＣに対抗することができなくなったときは，賃借権は，Ｃに対する関係で消滅しなかったものとなる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2019",num:"22",subject:"min",q:`同時履行に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．有償の委任契約における委任者の報酬支払義務と受任者の事務処理義務とは，同時履行の関係にある。
イ．売買の目的物である未登記建物に隠れた瑕疵があることを理由に売買契約が解除された場合，売主の代金返還義務と買主の建物返還義務とは，同時履行の関係にある。
ウ．建物賃貸借契約が終了し賃借人が造作買取請求権を行使した場合，賃貸人の造作買取代金支払義務と賃借人の建物明渡義務とは，同時履行の関係にある。
エ．未成年者が行為能力の制限を理由に動産売買契約を取り消した場合，両当事者が互いに負う返還義務返還義務は，同時履行の関係にある。
オ．期間満了による建物の賃貸借契約終了に伴う賃借人の建物明渡義務と賃貸人の敷金とは，同時履行の関係にある。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2019",num:"23",subject:"min",q:"契約に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．死因贈与は，負担付ですることができない。",c2:"２．準消費貸借は，目的物の引渡しがなければ成立しない。",c3:"３．使用貸借は，書面でしなければ成立しない。",c4:"４．寄託は，報酬を定めなければ成立しない。",c5:"５．民法上の組合契約の出資は，金銭を目的とするものに限られない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2019",num:"24",subject:"min",q:`ＡとＢは，平成３１年４月１日，Ａ所有の中古自転車（以下「甲」という。）を，同月１０日引渡し，同月２０日代金支払の約定でＢに売却する旨の売買契約を締結した。この事例に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．甲は，平成３１年４月８日，Ｂの責めに帰すべき事由により滅失した。この場合において，ＡがＢに対して同月２０日に代金の支払を請求したときは，Ｂは，この請求を拒むことができない。
イ．Ａは，Ｂに対し，平成３１年４月１０日，甲を引き渡したが，甲には売買契約の締結前から隠れた瑕疵があった。この場合において，その瑕疵の存在により契約をした目的を達することができないときは，Ｂは，売買契約を解除することができる。
ウ．Ａは，Ｂに対し，平成３１年４月１０日，甲を引き渡したが，Ｂは，同月２０日を経過しても代金を支払わず，同月２１日，事情を知らないＣに甲を売却し，引き渡した。この場合において，Ａが相当の期間を定めて催告してもＢが代金を支払わないときは，Ａは，Ｂとの間の売買契約を解除し，Ｃに対し，甲の返還を求めることができる。
エ．ＡがＢに約定どおり甲を引き渡さなかったことから，Ｂは，Ａに対し，平成３１年４月２１日，代金につき弁済の提供をしないまま，甲の引渡しを求めた。この場合，Ａは，Ｂに対し，同時履行の抗弁権を主張して，Ｂからの引渡請求を拒むことができる。
オ．Ａは，Ｂに対し，平成３１年４月２５日，甲を引き渡したが，Ｂは，Ａに対し，その後も代金を支払っていない。この場合，Ａは，Ｂに対し，甲の代金及び同月２１日からの利息の支払を求めることができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2019",num:"25",subject:"min",q:`資材置場とするためにされた建物所有を目的としない土地の賃貸借に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．賃貸借は，書面でしなければ，その効力を生じない。
イ．賃貸借の存続期間は，２０年を超えることができない。
ウ．当事者が賃貸借の期間を定めた場合であっても，賃貸人がその期間内に解約をする権利を合意により留保したときは，賃貸人は，いつでも解約の申入れをすることができる。
エ．賃貸借の期間が満了した後賃借人が土地の使用を継続する場合において，賃貸人がこれを知りながら異議を述べないときは，従前の賃貸借と同一の条件で更に賃貸借をしたものと推定される。
オ．賃貸借の期間を定めなかった場合において，当事者が解約の申入れをしたときは，賃貸借は，解約申入れの意思表示が相手方に到達した時に終了する。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2019",num:"26",subject:"min",q:`請負人の担保責任に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．仕事の目的物に重要でない瑕疵がある場合において，その修補に過分の費用を要するときは，注文者は，請負人に対し，瑕疵の修補を請求することができない。
イ．仕事の目的物に瑕疵があり，その修補を請求することができる場合であっても，注文者は，請負人に対し，瑕疵の修補に代わる損害賠償を請求することができる。
ウ．仕事の目的物の瑕疵が注文者の与えた指図によって生じたときは，請負人は，その指図が不適当であることを知りながら注文者に告げなかったときであっても，瑕疵担保責任を負わない。
エ．建物の建築の請負において，注文者による瑕疵修補の請求は，建物が完成した時から１年以内にしなければならない。
オ．請負人は，瑕疵担保責任を負わない旨の特約をしたときであっても，知りながら告げなかった事実については，その責任を免れない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2019",num:"27",subject:"min",q:`不法原因給付に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．強行法規に違反してされた給付であっても，不法原因給付に該当しないことがある。
イ．登記された建物が不倫関係の維持を目的として贈与され，受贈者に引き渡されたが，所有権移転登記手続はされていない場合，贈与者は，受贈者に対し，建物の明渡請求をすることができない。
ウ．贈与に基づく動産の引渡しが不法原因給付に該当し，不当利得に基づく動産の返還請求をすることができない場合，贈与者は，受贈者に対し，所有権に基づく動産の返還請求をすることができない。
エ．不法原因給付の給付者と受領者との間において，その給付後に，その原因となった契約を合意の上解除してその給付を返還する特約をしたとしても，給付者は，その返還を請求することができない。
オ．消費貸借が，その成立の経緯において，貸主の側に少しでも不法があったときは，借主の側に多大の不法があったとしても，貸主は貸金の返還を請求することができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2019",num:"28",subject:"min",q:`不法行為に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．土地の工作物の設置又は保存に瑕疵があることによって他人に損害が生じ，Ａがその工作物の占有者として損害賠償の責任を負う場合において，その損害を賠償したＡは，その損害の原因について責任を負うＢに対し，求償権を行使することができる。
イ．Ａが所有する樹木の植栽又は支持に瑕疵があることによってＢに損害が生じた場合であっても，Ａが相当の注意をもってその管理をしていたときは，Ａが損害賠償の責任を負うことはない。
ウ．Ａが所有する甲建物の設置又は保存に瑕疵があることによってＢに損害が生じた場合には，その瑕疵がＡの前の所有者が甲建物を所有していた時期に生じたものであるときであっても，Ａは，甲建物の所有者として損害賠償の責任を負う。
エ．Ａがその所有する甲建物をＢに賃貸し，Ｂが甲建物をＣに転貸し，それぞれ引渡しがされた場合には，甲建物の設置又は保存に瑕疵があることによって第三者に生じた損害について，Ｂが占有者として損害賠償の責任を負うことはない。
オ．土地の工作物の設置又は保存に瑕疵があることによってＡに損害が生じ，その工作物の占有者Ｂが損害賠償の責任を負う場合において，Ｂが無資力であるときは，その工作物の所有者も損害賠償の責任を負う。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2019",num:"29",subject:"min",q:`過失相殺及び損益相殺に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．被害者の過失を考慮するためには，被害者に自己の行為の責任を弁識するに足りる知能が備わっていることを要する。
イ．内縁の夫が運転する自動車に同乗していた者が，内縁の夫と第三者の双方の過失による交通事故で負傷し，第三者に対し損害賠償を請求する場合において，裁判所は，損害賠償の額を定めるに当たり，内縁の夫の過失を被害者側の過失として考慮することはできない。
ウ．複数の加害者の過失及び被害者の過失が競合する一つの交通事故において，その交通事故の原因となった全ての過失の割合（いわゆる絶対的過失割合）を認定することができるときには，絶対的過失割合に基づく被害者の過失による過失相殺をした損害賠償額について，加害者らは連帯して共同不法行為に基づく賠償責任を負う。
エ．被害者に対する加害行為と加害行為前から存在した被害者の疾患とが共に原因となって損害が発生した場合において，当該疾患の態様，程度などに照らし，加害者に損害の全部を賠償させるのが公平を失するときは，裁判所は，損害賠償の額を定めるに当たり，過失相殺の規定を類推適用して，被害者の疾患を考慮することができる。
オ．不法行為により死亡した被害者の相続人が加害者に対し不法行為に基づく損害賠償を請求した場合，裁判所は，生命保険契約に基づいて給付される死亡保険金の額を，損益相殺により損害賠償額から控除することができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2019",num:"30",subject:"min",q:`婚姻に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．成年被後見人は，成年後見人の同意がなくても婚姻をすることができる。
イ．婚姻の届出自体については当事者間に意思の合致があったとしても，それが単に他の目的を達するための便法として仮託されたものにすぎないときは，婚姻はその効力を生じない。
ウ．養親は，養子と離縁した場合には，その者と婚姻することができる。
エ．女性は，前婚の解消の時に懐胎していなかった場合には，前婚の解消の日から起算して１００日以内であっても，再婚をすることができる。
オ．Ａ男がＢ女を強迫して婚姻を成立させた後に，強迫を理由として婚姻が取り消された場合には，Ｂ女がその婚姻中に懐胎して子が出生したとしても，出生した子は，Ａ男の子とは推定されない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2019",num:"31",subject:"min",q:`夫婦に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．夫婦の一方が他の一方に対して有する債権について，婚姻中に消滅時効が完成することはない。
イ．夫婦である父母が共同して親権を行う場合において，その一方が子を代理する権限を共同名義で行使したときは，それが他の一方の意思に反したときであっても，代理行為の相手方が悪意でない限り，そのためにその行為の効力は妨げられない。
ウ．夫婦の一方について成年後見開始の審判がされた場合，他の一方が成年後見人になる。
エ．夫婦の一方が強度の精神病にかかり，回復の見込みがない場合であっても，裁判所は，一切の事情を考慮して婚姻の継続を相当と認めるときは，他の一方による離婚の請求を棄却することができる。
オ．夫婦の一方が日常の家事に関して第三者と法律行為をした場合は，他の一方は，その第三者に対し責任を負わない旨を予告していたときであっても，その法律行為によって生じた債務について，連帯してその責任を負う。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2019",num:"32",subject:"min",q:`父母の離婚に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．婚姻中の父母が別居し，子と同居していない親と同居している親との間で，子との面会交流について協議が調わない場合であっても，父母の離婚前は，家庭裁判所は，面会交流について相当な処分を命ずることはできない。
イ．父母が協議上の離婚をする際に，その協議により子を監護すべき者を定めたときは，家庭裁判所は，その定めを変更することができない。
ウ．父母の離婚により，子が母と氏を異にすることになった場合，その子が母の氏を称するためには，家庭裁判所の許可を得た上で，戸籍法の定めるところにより届け出ることが必要である。
エ．子の出生前に父母が離婚した場合には，母がその子の親権者となるが，その子が出生した後に，父母の協議によって父を親権者と定めることができる。
オ．父母が離婚した場合において，親権者と定められた母が死亡したときは，生存している父が，直ちに親権者となる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2019",num:"33",subject:"min",q:"Ａ及びＢの実子であるＣを養子とし，Ｄ及びＥを養親とする特別養子縁組に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．家庭裁判所が特別養子縁組を成立させるためには，Ｄ及びＥの請求が必要である。",c2:"２．家庭裁判所は，Ｄ及びＥが婚姻していない場合であっても，Ｃとの特別養子縁組を成立させることができる。",c3:"３．Ａ及びＢがＣを虐待していた場合には，ＣとＤ及びＥとの間で特別養子縁組を成立させるに当たり，Ａ及びＢの同意を得る必要はない。",c4:"４．特別養子縁組が成立した場合，Ａ及びＢとＣとの親族関係は終了する。",c5:"５．特別養子縁組が成立した場合，Ｄ及びＥは，特別養子縁組の離縁を請求することができない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2019",num:"34",subject:"min",q:`相続に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．相続人が数人ある場合において，被相続人が祖先の祭祀を主宰すべき者を指定していなかったとしても，被相続人が所有していた墳墓は，遺産分割の対象とならない。
イ．遺産分割は，相続の承認又は放棄をすべき期間内には，することができない。
ウ．複数の相続人が被相続人から賃借人の地位を承継したときは，被相続人が延滞していたその賃貸借に係る賃料債務は不可分債務となる。
エ．被相続人が他人の過失による交通事故によって即死した場合でも，その事故による被相続人の精神的損害についての慰謝料請求権は，相続の対象となる。
オ．遺産分割後に遺産である建物に隠れた瑕疵があったことが判明した場合であっても，その建物を遺産分割により取得した相続人は，他の相続人に対し，瑕疵担保責任を追及することができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2019",num:"35",subject:"min",q:`遺産分割に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．共同相続人Ａ及びＢのうち，Ｂが遺産分割協議書を偽造して，相続財産である甲不動産についてＢへの所有権移転登記をした場合，Ｂは，Ａの相続回復請求権の消滅時効を援用することができない。
イ．被相続人が，共同相続人Ａ及びＢのうち，Ａに甲不動産を相続させる旨の遺言を残して死亡し，その遺言が遺産分割の方法の指定と解される場合であっても，ＡＢ間の遺産分割協議を経なければ，Ａは甲不動産を取得することができない。
ウ．被相続人は，禁止期間を限定したとしても，遺言で遺産の分割を禁ずることはできない。
エ．Ａ及びＢが共同相続した甲不動産をＡが遺産分割協議により取得した場合において，相続開始から遺産分割までの間に甲不動産について生じた賃料債権は，その協議で特に定めなかったときは，Ａに帰属する。
オ．共同相続人である子Ａ及びＢが被相続人である父Ｃの唯一の相続財産である甲不動産について遺産分割をした後，認知の訴えにより，ＤがＣの子であるとされた場合において，Ｄが遺産分割を請求しようとするときは，Ｄは，価額のみによる支払の請求権を有する。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2019",num:"36",subject:"min",q:`人の死亡に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．代理権を授与した本人が死亡しても，代理権は消滅しない。
イ．寄託者が死亡した場合，返還時期の定めがあり，その期限が到来していなくても，受寄者は寄託物を返還することができる。
ウ．使用貸借は，貸主の死亡によっても，その効力を失わない。
エ．組合員は死亡によって脱退する。
オ．受遺者が遺言者よりも先に死亡したときは，受遺者の地位は，相続により受遺者の相続人に承継される。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2019",num:"37",subject:"min",q:`物の保存又は財産の管理についての注意義務に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．特定物の引渡しを目的とする債権の債務者は，債権者に受領遅滞があった場合であっても，善良な管理者の注意をもって，目的物を保存する義務を負う。
イ．特定物の引渡しを目的とする債権の債務者が負う目的物の保存の義務は，特約により軽減することができる。
ウ．贈与契約の贈与者は，目的物の引渡しまでの間，自己の財産に対するのと同一の注意をもって，目的物を保存すれば足りる。
エ．相続人は，相続の承認又は放棄をするまでの間，その固有財産におけるのと同一の注意をもって，相続財産を管理すれば足りる。
オ．限定承認者は，善良な管理者の注意をもって，相続財産を管理する義務を負う。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2019",num:"1",subject:"kei",q:`不作為犯に関する次のアからオまでの各記述を判例の立場に従って検討した場合，誤っているものの組合せは，後記１から５までのうちどれか。
ア．不作為犯は，結果発生を防止しなければならない義務が法律上の規定に基づくものでない場合であっても，成立する余地がある。
イ．不作為犯は，死体遺棄罪についても成立する余地がある。
ウ．不真正不作為犯の故意は，結果の発生を意欲していなくても，認められる余地がある。
エ．不作為犯は，作為可能性がない場合であっても，成立する余地がある。
オ．不作為犯の因果関係は，期待された作為に出ていれば結果が発生しなかったことが，合理的な疑いを超える程度に確実であったといえない場合であっても，その可能性さえあれば，認められる余地がある。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2019",num:"2",subject:"kei",q:`次の【事例】に関する後記アからエまでの各【記述】を判例の立場に従って検討した場合，正しいものの個数を後記１から５までの中から選びなさい。
【事 例】
甲及び乙は，宝石商の丙から宝石を奪うことを計画した。その計画は，甲が，宝石取引のあっせんにかこつけてホテルの一室に丙を呼び出し，別室の顧客に見せる必要があるとうそを言って丙から宝石を受領し，甲の退室後に，乙が同室に入って丙を殺害するという内容であった。甲は，計画に従って，ホテルの一室で丙から宝石を受領して退室し，それと入れ替わりに同室に立ち入った乙が丙の腹部を包丁で刺し，丙に重傷を負わせたが，殺害には至らなかった。
【記 述】
ア．甲が丙から宝石を受領した行為について詐欺罪が成立すると考えた場合，甲及び乙に，事後強盗による強盗殺人未遂罪が成立することはない。
イ．甲が丙から宝石を受領した行為について詐欺罪が成立すると考えた場合，同一の被害を二重に評価することはできないため，甲及び乙が，丙から宝石の代金相当額の支払を免れる意図を持っていたとしても，甲及び乙に，殺人未遂罪が成立するにとどまり，いわゆる二項強盗による強盗殺人未遂罪が成立することはない。
ウ．甲及び乙が，丙から宝石の代金相当額の支払を免れる意図を持っていたとしても，丙がこれを免除又は猶予する旨の財産的処分行為をしていないため，甲及び乙に，いわゆる二項強盗による強盗殺人未遂罪が成立することはない。
エ．乙が丙の腹部を包丁で刺した行為が，丙から宝石の占有を奪取する手段とならないと考えた場合，甲及び乙に，いわゆる一項強盗による強盗殺人未遂罪が成立することはない。`,c1:"１．０個",c2:"２．１個",c3:"３．２個",c4:"４．３個",c5:"５．４個",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2019",num:"3",subject:"kei",q:`承継的共犯に関する次の各【見解】についての後記アからオまでの各【記述】を検討し，正しい場合には１を，誤っている場合には２を選びなさい。
【見 解】
Ａ．共犯は，一個の犯罪を共同して行うものであり，後から犯罪に加担した者も，情を知って一罪の一部に加担した以上，犯罪全体について責任を負う。
Ｂ．共犯は，自己の行為と因果性がある範囲においてのみ責任を負うべきであって，自らが生じさせていない過去の事実について責任を負うべきではない。
Ｃ．先行者が生じさせた結果は承継しないが，先行者が生じさせた犯行を容易にする状態が存在する場合に，後行者がその状態を利用して犯罪を実現したときには，後行者も犯罪全体について責任を負う。
【記 述】
ア．Ａの見解に対しては，何を一罪として扱うかは，立法政策によって決まるため，一罪性に決定的な意味を認めるのは適切ではないとの批判が可能である。
イ．Ａの見解は，共犯の処罰根拠に関する因果的共犯論に基づいて主張されるものである。
ウ．Ｂの見解に対しては，複数の行為からなる犯罪で後行行為だけでは処罰されない場合に，処罰の間隙が生じるとの批判が可能である。
エ．Ｃの見解に対しては，単なる憂さ晴らしにより他人に暴行を加えて抗拒不能状態にした後，財物奪取の意思が生じ，その状態を利用して同人から財物を奪取した場合，一般に強盗罪が成立しないとされていることとの比較から問題があるとの批判が可能である。
オ．甲がＶに暴行を加えた後，なお強く抵抗するＶに乙が甲と共謀の上で暴行を加え，Ｖが負傷したが，その傷害結果が共謀成立の前後いずれの暴行によって生じたかを特定できない場合，Ｃの見解からは，乙には傷害罪の承継的共犯は成立しないことになるのが自然であるが，この帰結は刑法第２０７条との関係で不均衡であるとの批判が可能である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"12111"},{year:"2019",num:"4",subject:"kei",q:"傷害の罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．傷害罪は，他人の身体の生理的機能を毀損する犯罪であるから，精神疾患の一種である心的外傷後ストレス障害（いわゆるＰＴＳＤ）を負わせるなど精神的機能の障害を惹起した場合，傷害罪が成立することはない。",c2:"２．傷害罪は，暴行罪の結果的加重犯であるから，被害者に暴行を加えずに身体の生理的機能を毀損した場合，傷害罪が成立することはない。",c3:"３．被害者に睡眠薬を摂取させたことによって一定時間にわたり筋弛緩作用等を伴う急性薬物中毒の症状を生じさせた場合，傷害罪が成立することはない。",c4:"４．傷害の実行行為者をその現場において精神的に鼓舞する行為が傷害罪の幇助に当たる場合，現場助勢罪が成立することはない。",c5:"５．同時傷害の特例は，刑法の基本原理に対する重大な例外規定であり，厳格に適用されなければならないため，その要件を満たす傷害から被害者に死亡結果が生じた場合，同特例の適用により傷害致死罪が成立することはない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2019",num:"5",subject:"kei",q:`次の各【見解】と後記の各【事例】を前提として，後記アからエまでの各【記述】を検討し，正しい場合には１を，誤っている場合には２を選びなさい。
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
エ．Ⅲの事例で，行為当時，乙が通行人に蹴られることを一般人は予見できず，甲も予見していなかった場合，ＡからＣまでのいずれの見解からも否定される。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1221"},{year:"2019",num:"6",subject:"kei",q:`学生Ａ，Ｂ及びＣは，監禁罪の客体に関して，次の各【見解】のうち，いずれか異なる見解を採り，後記【事例】について【会話】のとおり検討している。学生Ａ，Ｂ及びＣの採る見解として正しいものの組合せは，後記１から５までのうちどれか。
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
学生Ｃ．成立しません。`,c1:"１．Ａ－アＢ－ウＣ－イ",c2:"２．Ａ－イＢ－アＣ－ウ",c3:"３．Ａ－イＢ－ウＣ－ア",c4:"４．Ａ－ウＢ－アＣ－イ",c5:"５．Ａ－ウＢ－イＣ－ア",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2019",num:"7",subject:"kei",q:"罪数に関する次の１から５までの各記述を判例の立場に従って検討し，正しいものを２個選びなさい。",c1:"１．甲は，乙を恐喝して乙から財物の交付を受けるとともに財産上の利益を得た。甲には，包括して１個の恐喝罪が成立する。",c2:"２．甲は，乙ら３名をその面前で同時に恐喝して３名全員からそれぞれ財物を出させ，その３名分の財物の交付を乙から一括して受けた。甲には，３個の恐喝罪が成立し，これらは併合罪となる。",c3:"３．甲は，乙を恐喝して乙から財物の交付を受け，その恐喝の手段として用いられた暴行により乙に傷害を負わせた。甲には，恐喝罪と傷害罪が成立し，これらは併合罪となる。",c4:"４．甲は，恐喝の手段として乙を監禁し，その間に乙を脅迫して乙から財物の交付を受けた。甲には，監禁罪と恐喝罪が成立し，これらは併合罪となる。",c5:"５．甲は，乙が窃取した財物と知りながら，乙を恐喝してその財物の交付を受けた。甲には，盗品等無償譲受け罪と恐喝罪が成立し，これらは併合罪となる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"14"},{year:"2019",num:"8",subject:"kei",q:"放火罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，誤っているものを２個選びなさい。",c1:"１．「建造物」とは，家屋その他これに類する工作物であって，土地に定着し，人の起居出入りに適する構造を有するものをいい，毀損しなければ家屋から取り外すことができない状態にある雨戸は，「建造物」の一部に当たる。",c2:"２．「放火」とは，目的物の焼損を惹起させる行為をいい，目的物への直接的な点火行為に限られず，媒介物への点火行為であっても，その燃焼作用が継続して目的物に延焼し得るものである場合，「放火」に当たる。",c3:"３．「焼損」とは，火力により目的物の重要部分が焼失し，その本来の効用が失われた状態をいい，不燃性の建造物のコンクリート壁が媒介物の火力によって崩落した場合，「焼損」に当たる。",c4:"４．建造物等以外放火罪にいう「公共の危険」は，現住建造物等放火罪や他人所有非現住建造物等放火罪の客体である建造物等に対する延焼の危険に限られず，不特定又は多数の人の生命，身体又は前記建造物等以外の財産に対する危険も含まれる。",c5:"５．現住建造物等放火罪にいう「現に人が住居に使用し」の「人」には犯人が含まれるが，「現に人がいる」の「人」には犯人が含まれない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"35"},{year:"2019",num:"9",subject:"kei",q:"被害者の承諾に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．甲は，乙の承諾を得て，乙から借り受けた乙所有の重機を丙に転貸していたが，同重機の修理のため一時これを丙から預かった際，乙の承諾を得て，丙に無断で，自己の借金の返済として同重機を自己の債権者に譲渡した。この場合，甲には，横領罪が成立する。",c2:"２．甲は，自らが組長を務める暴力団の組員乙から，「暴力団を脱退したい。」との申出を受けたので，「落とし前として，指を詰めろ。」と言い，乙の承諾を得て，乙の右手小指の根元を出刃包丁で切断した。この場合，甲には，傷害罪は成立しない。",c3:"３．甲は，乙との不倫関係を清算しようと考え，真実は，乙と心中するつもりはないにもかかわらず，乙に対し，「あの世で一緒になろう。私も君の後を追って死ぬから。」と言って心中を持ちかけ，その旨誤信してこれを承諾した乙に毒薬を手渡したところ，乙がそれを飲んで死亡した。この場合，甲には，自殺関与罪が成立する。",c4:"４．甲は，知人乙から，「生活が苦しく刑務所に入りたいので，私から脅されたという事実をでっち上げて，私を告訴してほしい。」と依頼され，乙の承諾を得て，乙を脅迫罪で告訴した。この場合，甲には，虚偽告訴罪は成立しない。",c5:"５．甲は，自らが刑務官を務める刑務所で受刑中の成人女性乙と恋愛関係になり，乙の承諾を得て，勤務中，同刑務所内において，乙と性交した。この場合，甲には，特別公務員暴行陵虐罪が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2019",num:"10",subject:"kei",q:"公務員職権濫用罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，誤っているものはどれか。",c1:"１．公務員職権濫用罪の成立には，必ずしも職権行使の相手方の意思に直接働きかけ，それを制圧することまで要しない。",c2:"２．公務員職権濫用罪の成立には，必ずしも公務員の不法な行為が職務としてなされることまで要しない。",c3:"３．公務員職権濫用罪にいう「職権」は，必ずしも法律上の強制力を伴うことまで要しない。",c4:"４．公務員職権濫用罪にいう「職権」は，職権行使の相手方に対し，必ずしも法律上又は事実上の負担や不利益を生ぜしめるに足りる特別の職務権限であることまで要しない。",c5:"５．公務員職権濫用罪にいう「権利の行使を妨害した」の「権利」は，必ずしも法律に明記されたものであることを要しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2019",num:"11",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合，誤っているものを２個選びなさい。",c1:"１．甲は，乙から，甲宛てに荷物を発送したので受け取ってほしいと依頼され，もしかしたら同荷物には覚せい剤を含む身体に有害で違法な薬物が入っているかもしれないと思いながら，乙が覚せい剤を忍び込ませた荷物を受け取って所持していた。この場合，甲には，覚せい剤取締法違反（覚せい剤所持）の罪が成立する。",c2:"２．甲と乙は，丙に暴行を加えて傷害を負わせることを共謀したところ，乙において，丙に暴行を加えている最中に興奮して殺意を生じ，丙を殺害した。この場合，甲には，傷害罪の共同正犯が成立する。",c3:"３．甲は，乙が第三者から窃取した指輪を，もしかしたら盗品かもしれないと思いながら，あえて有償で乙から譲り受けた後，同指輪に乙と同じイニシャルが刻み込まれていることに気付き，盗品ではないと確信するに至った。この場合，甲には，盗品等有償譲受け罪が成立する。",c4:"４．甲は，わいせつな映像を録画したＤＶＤを，あらかじめその内容を再生して確認し，この程度ではわいせつ物には当たらないと考えて，多数の者に販売した。この場合，甲には，わいせつ物頒布罪が成立する。",c5:"５．甲は，乙を殺害しようと考え，乙の背部を狙って拳銃の弾丸を発射したところ，同弾丸が乙ではなく，乙の隣にいた丙の腹部に当たり，丙を死亡させた。この場合，甲には，乙に対する殺人未遂罪と丙に対する重過失致死罪が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"25"},{year:"2019",num:"12",subject:"kei",q:`業務妨害罪に関する次の【見解】についての後記１から５までの各【記述】のうち，誤っているものはどれか。
【見 解】
業務妨害罪は人の社会的活動の自由を保護法益とするものであるが，公務も人の社会的活動にほかならないから，公務の性質いかんにかかわらず，同罪によって保護されると解するのが妥当である。
【記 述】`,c1:"１．この【見解】に対しては，公務執行妨害罪という国家的法益に対する罪と業務妨害罪のような個人的法益に対する罪とを安易に混同するものであるとの批判が可能である。",c2:"２．この【見解】に基づけば，公務員と共に公務に従事する非公務員に暴行を加えてその公務を妨害した場合，威力業務妨害罪が成立すると考えることが可能である。",c3:"３．この【見解】に対しては，逮捕行為のような強制力を行使する権力的公務は，暴行にも脅迫にも至らない手段による妨害を受けた時にそれを自力で排除し得るから，そのような公務まで業務として保護する必要はないとの批判が可能である。",c4:"４．この【見解】に基づけば，公務が暴行又は脅迫によって妨害された場合，公務執行妨害罪は業務妨害罪の特別法という関係にあるから前者のみが成立すると考えることが可能である。",c5:"５．この【見解】に対しては，威力や偽計による公務の妨害は公務執行妨害罪にも業務妨害罪にも当たらないこととなり，公務が業務に比して刑法上軽い保護しか受けられないという不都合があるとの批判が可能である。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2019",num:"13",subject:"kei",q:`学生Ａ，Ｂ及びＣは，次の【事例】における窃盗罪の実行の着手時期について，後記【会話】のとおり議論している。【会話】中の①から⑥までの（ ）内から適切なものを選んだ場合，正しいものの組合せは，後記１から５までのうちどれか。
【事 例】
甲は，Ｘ宅のタンスに宝石が保管されていることを知ったため，その宝石を窃取する目的で，Ｘ宅に玄関から侵入し，宝石が保管されているタンスの在りかを探し始めて，それが置かれていた居間に立ち入ろうとしたところ，居間から出てきたＸと鉢合わせとなり，取り押さえられた。
【会 話】
学生Ａ．私は，甲がＸ宅に侵入した時点で窃盗罪の実行の着手を認めてよいと思います。この時点で，①（ａ．犯意の飛躍的表動があった・ｂ．法益侵害の危険が飛躍的に高まった）といえるからです。
学生Ｂ．Ａ君は，犯罪を行為者の危険な性格の発現であると考えているのですね。私は，実行の着手の「実行」とは構成要件該当行為のことで，「着手」とはそれを開始することだと解するので，【事例】では，窃盗罪の実行の着手は，②（ｃ．認められない・ｄ．居間に立ち入ろうとした時点で認められる）と考えます。
学生Ａ．Ｂ君の見解に対しては，実行の着手時期が③（ｅ．不明確になる・ｆ．遅くなり過ぎる）との批判がありますね。
学生Ｃ．私は，実行の着手時期とは，未遂犯の成立時期のことであるので，未遂犯の処罰根拠に遡り，実質的に考えることが必要だと思います。そのため，窃盗罪の実行の着手時期は，④（ｇ．占有侵害の現実的危険性が発生した・ｈ．窃取行為と密接に関連する行為を開始した）時点だと解するので，【事例】では，窃盗罪の実行の着手は，⑤（ｉ．認められない・ｊ．Ｘ宅内でタンスの在りかを探し始めた時点で認められる）と考えます。この点，Ｂ君の見解を修正し，実行の着手時期を⑥（ｋ．占有侵害の現実的危険性が発生した・ｌ．窃取行為と密接に関連する行為を開始した）時点とする見解もありますが，この見解に対しては，形式面を重視すると言いながら，結局，実質的な観点を取り入れているとの批判があります。`,c1:"１．①ａ ⑥ｋ",c2:"２．②ｃ ④ｈ",c3:"３．②ｄ ⑤ｉ",c4:"４．③ｆ ⑥ｌ",c5:"５．④ｇ ⑤ｊ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2019",num:"14",subject:"kei",q:`学生Ａ，Ｂ及びＣは，次の各【事例】を題材にして，後記【会話】のとおり議論している。【会話】中の①から⑧までの（ ）内から適切な語句を選んだ場合，正しいものの組合せは，後記１から５までのうちどれか。
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
学生Ａ．そうだろうか。⑦（ａ．横領罪にいう「横領」・ｂ．不動産侵奪罪にいう「侵奪」）があったとはいえないのではないか。むしろ，Ｃさんの見解によれば，⑧（ａ．背任罪・ｂ．横領罪）の成否を検討すべきだと思う。`,c1:"１．①ａ ②ｂ ③ｂ ④ａ ⑤ａ ⑥ｂ ⑦ｂ ⑧ａ",c2:"２．①ａ ②ｂ ③ｂ ④ａ ⑤ｂ ⑥ａ ⑦ａ ⑧ｂ",c3:"３．①ｂ ②ａ ③ａ ④ｂ ⑤ａ ⑥ｂ ⑦ｂ ⑧ａ",c4:"４．①ｂ ②ａ ③ａ ④ｂ ⑤ａ ⑥ｂ ⑦ｂ ⑧ｂ",c5:"５．①ｂ ②ａ ③ａ ④ｂ ⑤ｂ ⑥ａ ⑦ａ ⑧ｂ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2019",num:"15",subject:"kei",q:"正当防衛に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものを２個選びなさい。",c1:"１．当然又はほとんど確実に侵害が予期された場合において，単に予期された侵害を避けなかったにとどまらず，その機会を利用して積極的に相手方に対し加害行為をする意思で暴行に及んだときは，その暴行行為については，正当防衛が成立する余地はない。",c2:"２．いわゆるけんか闘争において相手方に対してした暴行行為については，正当防衛が成立する余地はない。",c3:"３．手拳で殴る素振りをしながら「お前殴られたいのか。」と言って近付いてきた相手方を，殺傷能力のある刃物を構えて脅した場合，その脅迫行為については，正当防衛が成立する余地はない。",c4:"４．自己に対しナイフを示して脅している相手方に対し専ら攻撃の意思で暴行に及んだ場合，その暴行行為については，正当防衛が成立する余地はない。",c5:"５．財産的権利を防衛するために相手方の身体に暴行を加えて傷害を負わせた場合，その暴行行為については，正当防衛が成立する余地はない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"14"},{year:"2019",num:"16",subject:"kei",q:`次のアからオまでの各【記述】を判例の立場に従って検討した場合，後記の各【結論】との組合せとして正しいものは，後記１から５までのうちどれか。なお，【結論】の詐欺罪には詐欺未遂罪も含むものとする。
【記 述】
ア．他人のためにその事務を処理する者が，任務に背いて，その他人を欺く行為をし，同人を錯誤に陥らせて財物を交付させた。
イ．他人を恐喝するに際して，脅迫文言の中に虚偽の部分があり，それも同人に畏怖の念を生じさせる一材料となって，その畏怖の結果として，同人に財物を交付させた。
ウ．新聞販売店から集金業務を委託されている集金員が，集金した購読料を同店に持ち帰らずに自己の用途に費消するつもりであるのに，これを秘して，正規の手続や方式に従って購読者から購読料を集金し，自己の遊興費に費消した。
エ．保険金を詐取する目的で，火災保険の付された自己所有の家屋に放火した。
オ．他人に売買代金として偽造通貨を行使し，同人を錯誤に陥らせて財物を交付させた。
【結 論】
Ⅰ．詐欺罪のみが成立し得る。
Ⅱ．詐欺罪と他の罪の双方が成立し得る。
Ⅲ．詐欺罪は成立しない。`,c1:"１．アⅠ－イⅡ ",c2:"２．アⅡ－ウⅢ ",c3:"３．イⅢ－エⅢ ",c4:"４．ウⅡ－オⅡ ",c5:"５．エⅡ－オⅢ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2019",num:"17",subject:"kei",q:`過失犯に関する次のアからオまでの各記述を判例の立場に従って検討し，正しい場合には１を，誤っている場合には２を選びなさい。
ア．刑法第３８条第１項ただし書の「法律に特別の規定がある場合」とは，過失犯を処罰する旨の明文の規定がある場合に限られない。
イ．公務員が法令により付与された権限を行使するか否かについて，当該公務員に裁量が認められている場合，その権限の不行使を注意義務違反とする過失犯が成立することはない。
ウ．行政取締法規の義務は，過失犯の注意義務にもなるため，行政取締法規の義務を遵守する限り，他に慣習等から導かれる義務を遵守せずとも，過失犯が成立することはない。
エ．過失犯が成立するには，因果経過の予見可能性を要するため，現実の結果発生に至る経過を逐一具体的に予見できなければ，過失犯が成立することはない。
オ．業務上過失致死傷罪の「業務」とは，人が社会生活上の地位に基づき反復継続して行う行為であって，かつ，その行為が他人の生命身体等に危害を加えるおそれのあるものをいうため，他人の生命身体の危険を防止することを義務内容とする業務は，これに含まれない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"12222"},{year:"2019",num:"18",subject:"kei",q:"司法作用に対する罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．証人等威迫罪は，判決確定前であれば，その事件で証人として証言を終えた者を威迫した場合でも，成立する。",c2:"２．証人等威迫罪は，公判の結果に何らかの影響を及ぼそうとする意図がなければ，成立しない。",c3:"３．偽証罪は，証人がした虚偽の陳述が裁判の結果に影響しないのであれば，成立しない。",c4:"４．偽証罪は，証人が殊更記憶に反する陳述をした場合でも，陳述内容が真実であれば，成立しない。",c5:"５．虚偽告訴罪は，告訴の内容が客観的真実に合致していた場合でも，申告者が虚偽であると認識していれば，成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2019",num:"19",subject:"kei",q:"身分犯の共犯に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものを２個選びなさい。",c1:"１．刑法第６５条の身分には一時的な心理状態は含まれないので，目的犯に当たる犯罪行為を，当該目的を有する者と有しない者が共同して行った場合，同条の適用の余地はない。",c2:"２．刑法第６５条第２項は加減的身分のない者が当該身分のある者に加功した場合について規定するものであるので，賭博の常習性を有する者が有しない者に賭博を教唆した場合，同項の適用の余地はない。",c3:"３．非占有者が業務上の占有者による横領行為に加功した場合，当該非占有者には，刑法第６５条第１項の適用により業務上横領罪の共犯が成立し，同条第２項の適用により単純横領罪の刑が科される。",c4:"４．刑法第６５条の身分は，一定の犯罪行為に関する犯人の人的関係である特殊の地位又は状態の全てを指称するものであるので，責任能力のある者が刑事未成年者を教唆して犯罪を行わせた場合，同条が適用される。",c5:"５．自首による刑の減免は一身的な事由であるので，共犯者のうち一人に自首が成立する場合，刑法第６５条第１項の適用はなく，その減免の効果は自首した者以外には及ばない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"35"},{year:"2019",num:"20",subject:"kei",q:`次の【事例】に関する後記アからオまでの各【記述】を判例の立場に従って検討した場合，誤っているものの個数を後記１から５までの中から選びなさい。
【事 例】
　甲は，友人乙から，借金の返済に窮している旨の相談をされ，乙に対し，「実家に親父の高級腕時計がある。それを盗んで売りさばけば金になる。」と提案し，甲と別居する甲の実父Ｖ方からＶ所有の腕時計を盗むことを唆した。乙は，甲の提案を受け，Ｖ方に窃盗に入ることとしたが，仮に，窃盗を行う際にＶらに見付かって逮捕されそうになった場合には，Ｖらをナイフで脅してこれを抑圧し，逃走しようと考えた。
　乙は，某日午後０時頃，前記の意図でナイフを購入し，それを携帯してＶ方に向かい，同日午後１時頃，腕時計を盗む目的で，Ｖ方に窓から侵入した上，寝室でＶ所有の腕時計（時価１００万円相当）を窃取した。乙は，その後間もなく，Ｖ方玄関ドアの施錠を外して戸外に出て，誰からも発見，追跡されることなく，Ｖ方から約１キロメートル離れた公園まで逃げた。乙は，同所において，やはり現金も欲しいと考え，再度Ｖ方に窃盗に入ることを決意し，Ｖ方に戻り，同日午後１時３０分頃，Ｖ方玄関内に入ったところ，その直後に帰宅してきたＶと鉢合わせとなったことから，逮捕を免れるため，前記ナイフをＶの面前に示し，Ｖが恐怖の余り身動きできないうちに逃走した。
　乙は，翌日，甲に前記腕時計の売却を依頼した。甲は，同腕時計の売却先を探し，知人丙に対し，その買取りを申し向けたところ，丙が８０万円で購入する旨答えたことから，同腕時計を丙に売却した。甲は，丙から同腕時計の売却代金として８０万円を受け取ったが，その後，これを自己のものにしようと考え，乙に無断で，その全額を遊興費として費消した。
【記 述】
ア．乙が某日午後０時頃に購入したナイフを携帯してＶ方に向かったことについては，「強盗の罪を犯す目的」が認められないので，乙に強盗予備罪は成立しない。
イ．乙がＶをナイフで脅迫したことについては，腕時計の窃取行為との時間的・場所的な近接性に照らせば，窃盗の機会の継続中に行われたものといえるため，乙に事後強盗罪が成立する。
ウ．甲が乙に腕時計の窃盗を唆したことと，その売却をあっせんしたことは，原因と結果の関係に立つので，窃盗教唆罪と盗品等有償処分あっせん罪は牽連犯となる。
エ．Ｖの直系血族である甲には盗品等に関する罪について親族等の間の犯罪に関する特例が適用されるため，盗品等有償処分あっせん罪について，甲はその刑を免除される。
オ．甲が腕時計の売却代金を費消したことについては，同腕時計の窃盗犯人である乙は甲に対してその代金の引渡しを請求する権利がないので，甲に委託物横領罪は成立しない。`,c1:"１．１個",c2:"２．２個",c3:"３．３個",c4:"４．４個",c5:"５．５個",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2018",num:"1",subject:"ken",q:`次の対話は，公務員の人権に関する教授と学生の対話である。教授の各質問に対する次のアからウまでの学生の各回答について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
教授．公務員の地位のように権利主体と公権力との間に特殊な法律関係がある場合には，憲法の人権保障が原則として及ばないなどとする理論がありますね。このような理論によって公務員の人権に対する制約を正当化した最高裁判所の判決がありますか。
ア． はい。猿払事件判決（最高裁判所昭和４９年１１月６日大法廷判決，刑集２８巻９号３９３頁）が，先生のおっしゃる趣旨の判示をして，公務員の政治的意見表明の自由に対する制約を正当化しています。
教授．あなたの言うその判決は，国家公務員法第１０２条第１項が一定の行動類型に属する政治的行為を禁止していることに伴い生じ得る意見表明の自由の制約については，どのような判示をしていますか。
イ． 公務員の政治的中立性を損なうおそれのある行動類型に属する政治的行為を禁止することに伴い意見表明の自由が制約されることになっても，そのような制約は行動の禁止に伴う限度での間接的・付随的制約にとどまると判示しています。
教授．堀越事件判決（最高裁判所平成２４年１２月７日第二小法廷判決，刑集６６巻１２号１３３７頁）は，公務員のしたある行為が国家公務員法第１０２条第１項にいう「政治的行為」に該当するか否かの判断についてどのような枠組みを示していますか。
ウ． 同項にいう「政治的行為」の意義を，公務員の職務の遂行の政治的中立性を損なうおそれが実質的に認められるものと解した上，その判断においては，当該公務員の地位，その職務の内容や権限等，当該公務員がした行為の性質，態様，目的，内容等の諸般の事情を総合して判断するのが相当であると判示しています。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"211"},{year:"2018",num:"2",subject:"ken",q:`法の下の平等に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．子にとって自ら選択できないような事柄を理由に不利益を及ぼすことは許されず，子を個人として尊重し，その権利を保障すべきであるという考えが確立されてきたという事情は，嫡出子と嫡出でない子の法定相続分を区別する合理的な根拠が失われたと判断すべき根拠となる。
イ．憲法第１４条第１項は国民に対し法の下の平等を保障した規定であり，平等の要請は，事柄の性質に即応した合理的な根拠に基づくものでない限り，差別的な取扱いをすることを禁止する趣旨と解され，特に同項後段の事項は，合憲性の推定が排除される事項を限定列挙したものである。
ウ．地方公共団体が法律の範囲内で条例を制定することができるとしている条例制定権の規定（憲法第９４条）に照らすと，地方公共団体が売春の取締りについて各別に条例を制定する結果，その取扱いに差別を生ずることがあっても，地域差の故をもって憲法第１４条第１項に反するとはいえない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"3"},{year:"2018",num:"3",subject:"ken",q:`思想・良心の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．良心の自由とは是非弁別の判断に関する事項を外部に表現する自由及び表現しない自由をも広く含むと解されるが，裁判所が謝罪広告を強制したとしても，単に事態の真相を告白し，陳謝の意を表明するにとどまる限りは，良心の自由を不当に制限するものではない。
イ．司法書士会が大震災で被災した他県の司法書士会に復興支援拠出金を寄付することは，司法書士会の目的の範囲を逸脱せず，また，司法書士会がその寄付のために会員から負担金を徴収することは，強制加入団体であることを考慮しても，会員の政治的又は宗教的立場や思想，信条の自由を害するものではない。
ウ．破壊活動防止法第３９条及び第４０条のせん動罪は，政治目的をもって，所定の犯罪のせん動をすることを処罰するものであるが，せん動として外形に現れた客観的な行為を処罰の対象とするもので，行為の基礎となった思想，信条を処罰するものではないから，せん動罪が政治思想を処罰するもので憲法第１９条に違反するとの主張は前提を欠く。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"5"},{year:"2018",num:"4",subject:"ken",q:`信教の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．輸血以外に救命手段がない場合には輸血を拒否するという意思決定を尊重すべきとはいえないので，患者が，輸血を受けることは自己の宗教上の信念に反するとして，輸血を伴う医療行為を拒否するとの明確な意思を有していたとしても，このような意思決定をする権利は，人格権としての保護に値しない。
イ．信仰上の理由から剣道実技の履修を拒否した高等専門学校の生徒に対して学校長が行った原級留置処分及び退学処分は，履修拒否が生徒の信仰の核心部分と密接に関連する真しな理由からのものであり，代替措置の申入れに対して学校側はそれが不可能でないのに何ら検討することなく拒否したなどという事情の下では，裁量権の範囲を超えて違法である。
ウ．宗教法人に対する解散命令のような法的規制は，たとえ信者の宗教上の行為を法的に制約する効果を伴わないとしても，これに何らかの支障を生じさせることがあり得ることから，信教の自由の重要性に鑑み，憲法上，そのような規制が許容されるものであるかどうかは慎重に吟味しなければならない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"211"},{year:"2018",num:"5",subject:"ken",q:`次の見解は，インターネット上の名誉毀損罪の成否と表現の自由について論じたものである。この見解に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
「インターネットの利用者は，自己の見解を外部に向かって発信することができるから，インターネットを利用している被害者は，自己に向けられた加害者のインターネット上の表現行為に対し，言論による反論が可能である。したがって，インターネットの利用者が名誉毀損の表現行為をした場合には，新聞などのマス・メディアを通じた表現の場合よりも，名誉毀損罪の成立する範囲を限定すべきである。」
ア．この見解に対しては，インターネット上の全ての情報を知ることは不可能であり，自己の名誉を毀損する表現が存在することを知らない被害者に対して反論を要求すること自体，そもそも不可能である，という批判があり得る。
イ．言論の応酬により当不当を判断することができるのは意見や論評であって，事実の摘示による名誉毀損の場合には，被害者と加害者が言論の応酬をしても，インターネット利用者は真偽を判断することができないという指摘は，この見解の根拠となり得る。
ウ．この見解に対しては，インターネット上に載せた情報は，不特定多数の利用者が瞬時に閲覧可能となり，全世界に伝播される可能性もあることから，被害者のインターネット上の反論によって名誉の回復が図られる保証もない，という批判があり得る。
エ．言論による侵害に対しては，言論で対抗するのが表現の自由の基本原則であり，被害者が加害者に対し十分な反論ができ，功を奏するのであれば，被害者の社会的評価が害されるおそれはないという指摘は，この見解の根拠となり得る。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1211"},{year:"2018",num:"6",subject:"ken",q:`集会の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．市民会館は，集会をするために必須の施設であるから，その使用について，届出制ではなく，許可制を採ることは，集会の自由を不当に制限することになる。
イ．道路については，交通の安全と円滑を図るという機能面が重視される結果，道路における集団行動の規制は，集会の自由に対する制限には当たらない。
ウ．市の管理する公園について，人の生命，身体又は財産が侵害され，公共の安全が損なわれる，明らかな差し迫った危険の発生が具体的に予見される場合でないのに，その使用を規制するのは，集会の自由を不当に制限することになる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"222"},{year:"2018",num:"7",subject:"ken",q:`学問の自由及び教育の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．大学における学生の集会が，大学の公認した団体が大学の許可を得て開催したものであれば，真に学問的な研究又はその結果の発表のためのものでなく，実社会の政治的社会的活動に当たる場合であっても，同集会への警察官の立入りは，大学の有する学問の自由と自治を侵害することとなる。
イ．学問の自由は，学問研究の自由とその研究結果の発表の自由だけでなく，その研究結果を教授する自由をも含むところ，教育の本質上，教師は，高等学校以下の普通教育においても，教授の自由を有し，自らの判断で教育内容を決定することができるのであって，国が教育内容の決定に介入することは許されない。
ウ．親は，子の将来に関して最も深い関心を持ち，かつ，配慮をすべき立場にある者として，子に対する教育の自由を有しており，このような親の教育の自由は，主として家庭教育等学校外における教育や学校選択の自由にあらわれるところ，親の学校選択の自由は，特定の学校の選択を強要又は妨害された場合，その侵害が問題となり得る。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2018",num:"8",subject:"ken",q:`居住・移転の自由に関する次のアからエまでの各記述について，明らかに誤っているものの組合せを，後記１から６までの中から選びなさい。
ア．自衛官につき，防衛大臣が指定する場所に居住しなければならないとする法律の規定は，当該国民が自ら自衛官に志願した結果として課される制約であるところ，我が国の防衛のためいつでも職務に従事できる態勢にあることが求められるという自衛官の職務の性質に照らし，このような居住地の制限は合理的な制限であって合憲と解される。
イ．外務大臣において，著しくかつ直接に日本国の利益又は公安を害するおそれがあると認めるに足りる相当な理由がある者につき一般旅券を発給しないことができるとする法律の規定は，単に旅券の発給を制限するに過ぎず，海外渡航の自由を制約するものではないため合憲と解される。
ウ．住民が住所を変更したときには市町村長に届け出なければならない旨を義務付ける法律の規定は，住所・居所の決定や移転それ自体を制限するものではなく，規制態様が軽微である反面，住民票の整備により得られる公益が大きいことから合憲と解される。
エ．破産手続中の破産者につき，裁判所の許可なく居住地を離れることを禁止する法律の規定は，破産手続という限られた期間内にのみ適用されるものに過ぎず，仮に裁判所の許可が得られなくても破産手続が終結すれば自由に居住地を離れることができるため，居住・移転の自由に対する制約が認められず合憲と解される。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．ア エ",c4:"４．イ ウ",c5:"５．イ エ",c6:"６．ウ エ",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2018",num:"9",subject:"ken",q:`労働基本権に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法上，国は，労働基本権をむやみに制約する立法等の措置を行うことは許されず，また同時に，国は，労働者の労働基本権を保障する措置を講じる義務があり，その意味で，労働基本権には自由権としての側面と社会権としての側面があるといえる。
イ．労働基本権には，団結権，団体交渉権及び団体行動権があるが，これらのうち団結権は最も重要かつ基本的な権利であるから，団体交渉権や団体行動権について現行法上特別な制約に服している自衛官や警察官にも団結権は認められている。
ウ．判例は，労働基本権について，公務員にもその保障が及ぶとし，その制約の合憲性を判断する上で，職務の公共性は考慮されるべきではないとする一方，人事院が設けられていることなどの代替措置が整備されていることを重視して，一般私企業とは異なる制約に服するものとする。
エ．憲法第２８条は，その性質上，私人間の関係に適用される余地はなく，そのため，判例は，労働組合への加入を強制するために使用者と労働組合との間に締結されるユニオン・ショップ協定の効力を団結権との関係で判断する場合にも，憲法を直接適用していない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1222"},{year:"2018",num:"10",subject:"ken",q:`憲法第２４条に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法第２４条第１項は，婚姻については当事者間の自由かつ平等な意思決定に委ねられるべきであるとの趣旨を明らかにしたものであるから，婚姻に関する法制度の内容が意に沿わないことを理由として婚姻しない者が生じるのであれば，その法制度を定めた法律は，憲法第２４条第１項の趣旨に沿わない制約を課しているものとの評価を免れないことになる。
イ．憲法第２４条第２項は，婚姻及び家族に関する事項について，具体的な制度の構築を第一次的には国会の合理的な立法裁量に委ねるとともに，その立法に当たっては，個人の尊厳と両性の本質的平等に立脚すべきであるとする要請，指針を示すことによって，その裁量の限界を画したものである。
ウ．憲法第２４条は，婚姻及び家族に関する立法において，憲法上の権利として保障される人格権を不当に侵害せず，かつ，両性の形式的な平等が保たれた内容の法律の制定を求めるにとどまらず，憲法上直接保障された権利とまではいえない人格的利益をも尊重すべきこと，両性の実質的な平等が保たれるように図ること等についても十分に配慮した法律の制定を求めるものである。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"5"},{year:"2018",num:"11",subject:"ken",q:`憲法の最高法規性に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法第９７条は，憲法の保障する基本的人権を侵すことのできない永久の権利と位置付けており，憲法の最高法規性を実質的に根拠付けるものと見ることができる。
イ．日本国憲法において抵抗権が認められているという見解は，憲法が最高法規であることと矛盾する。
ウ．憲法がその国の法体系において最高法規と位置付けられる場合において，国家緊急権がその中に明文で規定されることはあり得ない。
エ．抽象的違憲審査制と付随的違憲審査制のうちいずれの違憲審査制を採るかは，憲法の最高法規性から当然に導かれるわけではない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1221"},{year:"2018",num:"12",subject:"ken",q:`天皇及び皇室に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．天皇が，法律の定めるところにより，国事行為を委任する場合，この委任行為自体は明らかに国事行為ではないから，内閣の助言と承認を要しない。
イ．国事行為は，形式的・儀礼的な行為であるため，国事行為としての天皇の行為がなくても，政令の公布や国会の召集の法的効力は発生する。
ウ．摂政は，天皇の名で国事行為を行う天皇の法定代理機関であり，天皇が未成年のときなど皇室典範に定める原因が生じることにより設置される。
エ．憲法第８８条は，すべて皇室財産は国に属すると規定しており，皇室が私有財産を保有したり運用したりすることは禁じられている。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2212"},{year:"2018",num:"13",subject:"ken",q:`選挙に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．判例は，参議院議員選挙における定数不均衡の問題について，参議院の半数改選制の要請を踏まえれば投票価値の平等が一定の限度で譲歩を求められても憲法に違反するとはいえないとして，衆議院の場合よりも広い立法裁量を認めてきており，これまで違憲状態を認定したことはない。
イ．判例は，衆議院議員選挙におけるいわゆる１人別枠方式について，小選挙区比例代表並立制の導入に当たり，直ちに人口比例のみに基づいて定数配分を行った場合の影響に配慮するための方策であり，新選挙制度が定着し運用が安定すればその合理性は失われるとしている。
ウ．判例は，公職選挙法による選挙運動用の文書図画の頒布・掲示の規制について，表現の自由に対する最小限の制約とはいえないが，憲法第４７条の趣旨に照らせば，国会の定めた選挙運動のルールは合理的と考えられないような特段の事情のない限り尊重されなければならず，当該規制は立法裁量の範囲を逸脱しているとまではいえないので合憲であるとしている。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"212"},{year:"2018",num:"14",subject:"ken",q:`憲法第９条に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法第９条第２項が保持を禁止した戦力とは，我が国がその主体となってこれに指揮権，管理権を行使し得る戦力に限られず，我が国との安全保障条約に基づき我が国に駐留する外国の軍隊も，我が国の要請に応じて武力を行使する可能性があるので，同項の戦力に該当し得る。
イ．憲法前文が定める平和的生存権は，憲法第９条及び第３章の規定によって具体化され，裁判規範として現実的・個別的内容を持つものであるから，森林法上の保安林指定の解除処分が自衛隊の基地の建設を目的とするものである場合，周辺の住民は，同処分の取消訴訟において，平和的生存権の侵害のおそれを根拠として原告適格を有する。
ウ．国が自衛隊の用地を取得するために私人と締結した土地売買契約は，当該契約が実質的にみて公権力の発動たる行為と何ら変わりがないといえるような特段の事情のない限り，憲法第９条の直接適用を受けず，私人間の利害関係の公平な調整を目的とする私法の適用を受けるに過ぎない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2018",num:"15",subject:"ken",q:`衆議院の優越に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．条約の承認に関する衆議院の優越の程度は，法律案の議決，予算の議決のいずれの場合と比べても小さい。
イ．参議院と比べて衆議院の方が議員の任期が短いこと，衆議院に解散の制度があることは，衆議院の優越の根拠とはならない。
ウ．憲法改正の発議及び予備費支出の承諾については，議決において衆議院の優越はなく，両議院の議決は対等である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"221"},{year:"2018",num:"16",subject:"ken",q:`弾劾裁判所に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．弾劾裁判所に対し裁判官の罷免を求める訴追は，国会の両議院において当該裁判官の罷免を求める議案が可決されることにより，国会が行う。
イ．国会の両議院の議員で組織される弾劾裁判所は，国会が閉会中であっても活動することができる。
ウ．弾劾裁判所により罷免の裁判の宣告を受けた裁判官は，最高裁判所に対し，その裁判を不服として取消しを求めることができる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"6"},{year:"2018",num:"17",subject:"ken",q:`司法審査が団体の内部事項に関する行為に及ぶかに関する次の学生アからエまでの各発言について，正しいものの組合せを，後記１から６までの中から選びなさい。
ア．「自律的な団体の内部紛争に対して司法審査が及ぶかという問題に関して，地方議会には，国会の両議院のような自律権はないものの，地方議会議員に対する懲罰としての除名処分は，内部規律の問題であるから，司法審査の対象とはならないとした判例があるよ。」
イ．「判例の考え方からすると，発声障害により自ら発声することができない地方議会議員が，第三者による代読等，自らの発声以外の方法による発言を希望したのに対し，これを認めないという地方議会の決定は，純然たる内部規律の問題であるから，司法審査の対象にはならないことになるね。」
ウ．「大学の単位認定行為は，特段の事情のない限り，純然たる大学内部の問題であって，大学の自主的な判断に委ねられるべきだから，司法審査の対象とならないとした判例もあったな。」
エ．「判例の考え方からすると，特定の授業科目の単位の取得が国家資格取得の前提要件とされている場合には，大学の単位認定行為が司法審査の対象になる可能性もあるね。」`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．ア エ",c4:"４．イ ウ",c5:"５．イ エ",c6:"６．ウ エ",c7:"",c8:"",c9:"",c10:"",a:"6"},{year:"2018",num:"18",subject:"ken",q:`旭川市国民健康保険条例違憲訴訟判決（最高裁判所平成１８年３月１日大法廷判決，民集６０巻２号５８７頁）に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. 憲法第８４条は，「あらたに租税を課し，又は現行の租税を変更するには，法律又は法律の定める条件によることを必要とする。」と定めているところ，同条にいう「法律」には条例も含まれるとする見解は，この判決と矛盾抵触する。
イ. この判決によれば，租税以外の公課であっても，租税に類似する性質を有するものについては，憲法第８４条の趣旨が及ぶところ，その賦課徴収の強制の度合いは，当該公課と租税との類似性を検討するときの要素となる。
ウ. この判決は，法律の委任に基づき保険料の賦課要件を定めるべき条例が保険料率の決定等を市長に委任していることにつき，委任された事項の内容や保険料率に係る算定基準の定め方等を検討して，憲法第８４条の趣旨に反しないものと判断した。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"211"},{year:"2018",num:"19",subject:"ken",q:`次の文章は，憲法上の地方公共団体の意義について述べた最高裁判所の判決（最高裁判所昭和３８年３月２７日大法廷判決，刑集１７巻２号１２１頁）の判示を要約したものである。この判決に関する次のアからエまでの各記述について，明らかに誤っているものの組合せを，後記１から６までの中から選びなさい。
「憲法が特に一章を設けて地方自治を保障するにいたったのは，新憲法の基調とする政治民主化の一環として，住民の日常生活に密接な関連をもつ公共的事務は，その地方の住民の手でその住民の団体が主体となって処理する政治形態を保障しようとする趣旨からである。この趣旨に徴するときは，憲法第９３条第２項にいう地方公共団体といい得るためには，単に法律で地方公共団体として取り扱われているということだけでは足らず，事実上住民が経済的文化的に密接な共同生活を営み，共同体意識をもっているという社会的基盤が存在し，沿革的にみても，また現実の行政の上においても，相当程度の自主立法権，自主行政権，自主財政権等地方自治の基本的権能を附与された地域団体であることを必要とするものというべきである。」
ア．この判決は，憲法によって保障された地方自治がどのような性質を有するかという問題について，個人が国家に対して固有かつ不可侵の権利を持つのと同様に，地方公共団体もまた固有の前国家的な基本権を有するという立場に立つものである。
イ．この判決は，「事実上住民が経済的文化的に密接な共同生活を営み，共同体意識をもっているという社会的基盤」の存在を地方公共団体の要件として挙げるが，｢共同体意識｣というのは測定不能で漠然とした概念ではないかとの批判がある。
ウ．この判決のように，沿革上及び行政上の実態を基準に，憲法上の地方公共団体に当たるか否かを判断することは，憲法の下位規範である地方自治法によって憲法の解釈を行うこととなるとの指摘がある。
エ．この判決には，憲法第９２条にいう｢地方自治の本旨｣が，第９３条で具体化されている住民自治と第９４条で具体化されている団体自治によって構成されていると解する余地がなくなるという問題点がある。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．ア エ",c4:"４．イ ウ",c5:"５．イ エ",c6:"６．ウ エ",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2018",num:"20",subject:"ken",q:`憲法改正に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．国会法によれば，議員が憲法改正原案を発議するには，衆議院においては議員１００人以上，参議院においては議員５０人以上の賛成を要するが，その発議に当たっては，内容において関連する事項ごとに区分して行うものとされている。
イ．国会が発議した憲法改正に関する国民の承認は，衆議院議員総選挙又は参議院議員通常選挙の際に行われる国民投票によることも可能であるが，これらの選挙の際に行われる場合は日本国憲法の改正手続に関する法律は適用されない。
ウ．日本国憲法の改正手続に関する法律では，憲法改正案に対する国民投票運動に関し，公職選挙法により規制される選挙運動と比較すると，戸別訪問の禁止がないなど規制が緩和されている。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"3"},{year:"2018",num:"1",subject:"min",q:`胎児に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．胎児を受贈者として死因贈与をすることはできない。
イ．胎児を受遺者として遺贈をすることはできない。
ウ．胎児の父は，胎児の母の承諾を得ても，胎児を認知することはできない。
エ．胎児の母は，胎児を代理して認知の訴えを提起することはできない。
オ．胎児のときに不法行為を受けた者は，出生前にその父母が胎児を代理して加害者とした和解に拘束される。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2018",num:"2",subject:"min",q:`法人に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．法人は成年後見人になることができない。
イ．法人は民法上の組合の組合員になることができない。
ウ．法人は財産以外の損害について不法行為に基づき損害賠償を請求することができない。
エ．法人は遺言執行者になることができる。
オ．法人は特別縁故者として相続財産の分与を受けることができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2018",num:"3",subject:"min",q:`意思表示に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．土地の仮装譲受人が当該土地上に建物を建築してこれを他人に賃貸した場合，その建物賃借人は，民法第９４条第２項の「第三者」に当たらない。
イ．強迫による意思表示の取消しが認められるためには，表意者が，畏怖の結果，完全に意思の自由を失ったことを要する。
ウ．Ａを欺罔してその農地を買い受けたＢが，農地法上の許可を停止条件とする所有権移転の仮登記を得た上で，当該売買契約上の権利をＣに譲渡して当該仮登記移転の付記登記をした場合には，Ｃは民法第９６条第３項の「第三者」に当たる。
エ．協議離婚に伴う財産分与契約において，分与者は，自己に譲渡所得税が課されることを知らず，課税されないとの理解を当然の前提とし，かつ，その旨を黙示的に表示していた場合であっても，財産分与契約について錯誤による無効を主張することはできない。
オ．特定の意思表示が記載された内容証明郵便が受取人不在のために配達することができず，留置期間の経過により差出人に還付された場合，受取人がその内容を十分に推知することができ，受領も困難でなかったとしても，当該意思表示が受取人に到達したものと認められることはない。
（参照条文）民法
（虚偽表示）第９４条 （略）
２ 前項の規定による意思表示の無効は，善意の第三者に対抗することができない。
（詐欺又は強迫）第９６条 １，２（略）
３ 前二項の規定による詐欺による意思表示の取消しは，善意の第三者に対抗することができない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2018",num:"4",subject:"min",q:`任意代理に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．特定の法律行為をすることを委託された代理人が本人の指図に従ってその行為をした場合，本人は，自ら過失によって知らなかった事情について代理人が過失なく知らなかったことを主張することができない。
イ．権限の定めのない代理人は，保存行為をする権限のみを有する。
ウ．代理人が相手方と通謀して売買契約の締結を仮装した場合，相手方は，本人がその通謀虚偽表示を知っていたか否かにかかわらず，当該売買契約の無効を主張することができる。
エ．代理人が保佐開始の審判を受けたときは，代理権は消滅する。
オ．代理人が相手方と売買契約を締結した後，その代理人が制限行為能力者であったことが判明した場合であっても，本人は当該売買契約を行為能力の制限によって取り消すことができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2018",num:"5",subject:"min",q:`追認に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．無権代理行為について本人が追認を拒絶した後は，本人であっても追認によってその行為を有効とすることができない。
イ．事実上の夫婦の一方が他方の意思に基づかないで婚姻届を作成して提出した場合において，当時両名に夫婦としての実質的生活関係が存在し，かつ，後に他方が届出の事実を知ってこれを追認したときは，その婚姻は追認時から将来に向かって効力を生ずる。
ウ．代理権を有しない者がした契約を本人が相手方に対して追認した場合であっても，契約の時においてその者が代理権を有しないことを相手方が知らなかったときは，相手方は契約を取り消すことができる。
エ．親権者の代理行為が利益相反行為に当たる場合，本人は，成年に達すれば，追認することができる。
オ．養子縁組が法定代理人でない者の代諾によるために無効である場合であっても，養子本人は，縁組の承諾をすることができる満１５歳に達すれば，追認することができる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2018",num:"6",subject:"min",q:`消滅時効の中断に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．判決により確定した不法行為に基づく損害賠償請求権の消滅時効期間は１０年である。
イ．訴訟上相殺の主張がされ，受働債権につき債務の承認がされたものと認められる場合において，その後相殺の主張が撤回されたときは，承認による時効中断の効力は失われる。
ウ．一個の債権の数量的な一部についてのみ判決を求める旨を明示して訴えの提起があった場合，裁判上の請求による時効中断の効力は，その一部の範囲においてのみ生じ，残部に及ばない。
エ．不動産の仮差押えによる時効中断の効力は，仮差押えの被保全債権について本案の勝訴判決が確定した時に消滅する。
オ．目的物の引渡請求訴訟において留置権の抗弁を主張したときは，その被担保債権について裁判上の請求による時効中断の効力を生ずる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2018",num:"7",subject:"min",q:`Ａは，Ｂとの間でＡが所有する甲土地を売却する旨の売買契約（以下「本件第１売買契約」という。）を締結し，Ｂからその代金の支払を受けたが，ＡからＢへの所有権移転登記手続をせず，Ｃとの間で甲土地を売却する旨の売買契約（以下「本件第２売買契約」という。）を締結し，ＡからＣへの所有権移転登記手続をした。その後，Ａは行方不明になり，Ｂは，Ｃに対し，所有権に基づいてＣからＢへの移転登記手続請求訴訟を提起した。この場合に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ｂは，請求原因として，Ａが甲土地を所有していたこと，本件第１売買契約の成立及びＣの登記の存在を主張立証しなければならない。
イ．Ｃは，対抗要件の抗弁を主張する場合には，本件第２売買契約の成立及びＣが本件第２売買契約締結当時，本件第１売買契約について善意無過失であったことを主張立証しなければならない。
ウ．Ｃは，ＢがＢのＣに対する登記請求権を行使することができる時から２０年以上行使していなかったとしても，その登記請求権の時効による消滅をもって，抗弁とすることはできない。
エ．Ｃが抗弁として本件第２売買契約の成立及びＣの登記がこれに基づくことを主張立証した場合，Ｂは，Ｃが本件第２売買契約締結当時，本件第１売買契約について悪意であったことをもって，再抗弁とすることができる。
オ．本件第２売買契約がＡの錯誤により無効であった場合，Ｃが抗弁として本件第２売買契約の成立及びＣの登記がこれに基づくことを主張立証したときは，Ｂは，本件第２売買契約についてＡに要素の錯誤があることをもって，再抗弁とすることができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2018",num:"8",subject:"min",q:`占有権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．占有保持の訴えは，妨害の存する間のみ提起することができる。
イ．Ａが所有する甲建物にＡと同居しているＡの未成年の子Ｂは，甲建物の占有権を有しない。
ウ．Ａは，Ｂが所有する甲土地を解除条件付でＢから買い受ける旨の売買契約を締結し，当該売買契約に基づいてＢから甲土地の引渡しを受けた。その後，解除条件が成就した場合，Ａの甲土地に対する占有は自主占有でなくなる。
エ．甲土地を占有していた権利能力なき社団が一般社団法人になった場合，その一般社団法人は，甲土地の取得時効を主張するに際して，権利能力なき社団として占有した期間を併せて主張することができる。
オ．占有の訴えに対し，本権に基づく反訴を提起することはできない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2018",num:"9",subject:"min",q:`用益物権に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．無償の地上権を設定することはできない。
イ．地上権は，存続期間を定めないで，設定することができる。
ウ．無償の永小作権を設定することはできない。
エ．無償の地役権を設定することはできない。
オ．地役権は，存続期間を定めないで，設定することができる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2018",num:"10",subject:"min",q:`不動産物権変動に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．未成年者ＡがＡ所有の甲土地をＢに売却し，その旨の所有権移転登記がされた後，Ｂが，Ａの未成年の事実を過失なく知らないＣに甲土地を売却し，その旨の所有権移転登記がされた場合において，ＡがＢに対する売買の意思表示を取り消したときは，Ｃは，Ａに対し，甲土地の所有権の取得を主張することができない。
イ．ＡがＡ所有の甲土地をＢに売却し，その代金が未払である間に，ＡからＢへ所有権移転登記がされた後，Ｂが，Ｂの代金未払の事実を知っているＣに甲土地を売却し，その旨の所有権移転登記がされた場合において，ＡがＢの履行遅滞によりＡＢ間の売買契約を解除したときは，Ｃは，Ａに対し，甲土地の所有権の取得を主張することができない。
ウ．ＡがＡ所有の甲土地をＢに売却したが，代金の支払をめぐってＡＢ間で争いを生じ，その後，Ｂが甲土地の所有権を有することを確認する旨の示談が成立した場合において，当該示談に立会人として関与し，示談書に立会人として署名捺印していたＣが，ＡからＢに所有権移転登記がされる前に，Ａに対する債権に基づいて，Ａ名義の甲土地を差し押さえ，その旨の差押えの登記がされたときは，Ｂは，Ｃに対し，甲土地の所有権の取得を主張することができない。
エ．ＡがＡ所有の甲土地をＢに売却した後，ＣがＢを害する目的で甲土地をＡから買い受け，その旨の所有権移転登記がされた場合において，Ｃが事情を知らないＤに対して甲土地を売却し，その旨の所有権移転登記がされたときは，Ｂは，Ｄに対し，甲土地の所有権の取得を主張することができる。
オ．ＢがＡ所有のＡ名義の甲土地を占有し，取得時効が完成した後，ＣがＡから甲土地について抵当権の設定を受けて抵当権設定登記がされた場合において，Ｂがその抵当権の設定の事実を知らずにその後引き続き時効取得に必要な期間甲土地を占有し，その期間経過後に取得時効を援用したときは，Ｂは，Ｃに対し，抵当権の消滅を主張することができる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2018",num:"11",subject:"min",q:`所有権の取得に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡがＡ所有の甲土地をＢに譲渡し，Ｂが甲土地上に立木を植栽して明認方法を施した場合において，その後，ＡがＣに甲土地を譲渡して，Ｃに対する所有権移転登記をしたときは，明認方法が存続していたとしても，ＢはＣに対して，立木の所有権を対抗することができない。
イ．ＡがＢに対して，完成した建物の所有権の帰属について特約をせずに，Ａ所有の土地上に建物を建築することを注文したところ，Ｂが自ら材料を提供して建前を建築した段階で工事を中止した場合（その時点における時価４００万円相当）において，Ａから残工事を請け負ったＣが自ら材料を提供して当該建前を独立の不動産である建物に仕上げ（その時点における時価９００万円相当），かつ，ＡがＣに代金を支払っていないときは，当該建物の所有権は，Ｃに帰属する。
ウ．Ａの所有する船舶（時価６００万円相当）に，Ｂの所有する発動機（時価４００万円相当）が取り付けられた場合において，損傷しなければこれらを分離することができず，主従の区別がつかないときは，当該発動機付船舶は，３対２の割合でＡとＢが共有する。
エ．Ａが所有する建物を賃借したＢがＡの同意を得て増築をした場合には，その増築部分について取引上の独立性がなくても，増築部分の所有権は，Ｂに帰属する。
オ．Ａの所有する液体甲（１００立方メートル）が，Ｂの所有する液体乙（１０立方メートル）と混和して識別することができなくなり，液体丙（１１０立方メートル）となった場合において，Ａが液体丙の所有権を取得したときは，ＢはＡに対し，不当利得の規定に従い，その償金を請求することができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2018",num:"12",subject:"min",q:`担保物権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．留置権は，その目的物の一部が債務者に引き渡された場合，目的物の残部についても消滅する。
イ．ＡがＢに対して動産売買の先取特権を有していた場合，ＢがＣに対してその目的物である動産を売却し，占有改定によりこれを引き渡したとしても，Ａの動産売買の先取特権は消滅しない。
ウ．動産質権の設定は，指図による占有移転をもって目的物を債権者に引き渡すことによっても，その効力を生じる。
エ．不動産質権については，質権者と質権設定者との間の特約で，質権者が目的物を使用収益しない旨を定めることができる。
オ．抵当権者は，目的物が不法に占有された場合であっても，不法占有者に対して，抵当権に基づいて目的物を直接自己に明け渡すよう求めることはできない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2018",num:"13",subject:"min",q:`抵当権の効力に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．抵当不動産についてその所有者から地上権を買い受けた第三者が，抵当権者の請求に応じてその抵当権者にその代価を弁済したときは，抵当権は，その第三者のために消滅する。
イ．主たる債務者の承継人は，抵当権消滅請求をすることができない。
ウ．建物の賃貸借は，その登記がなくても，建物の引渡しがあったときは，その引渡し前に登記をした抵当権を有する全ての者が同意をし，かつ，その同意の登記があれば，その同意をした抵当権者に対抗することができる。
エ．抵当不動産をその所有者から買い受けた者は，その不動産について必要費を支出した場合において，抵当権の実行によりその不動産が競売されたときは，その代価から最先順位の抵当権者より先にその支出した額の償還を受けることができる。
オ．抵当権者に対抗することができない賃貸借により抵当権の目的である土地を使用収益する者は，抵当権の実行によりその土地が競売された場合，買受人の買受けの時から６か月を経過するまでは，その土地を買受人に明け渡す必要がない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2018",num:"14",subject:"min",q:`法定地上権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａが所有する甲土地及びその上の乙建物にＢのために共同抵当権が設定された後，乙建物が取り壊され，甲土地上に新たにＡが所有する丙建物が建築されて，丙建物につきＣのために抵当権が設定された場合において，甲土地に対するＢの抵当権の実行によりＤが甲土地を取得したときは，法定地上権が成立する。
イ．Ａが所有する更地の甲土地に第一順位の抵当権が設定された後，甲土地上にＡが所有する乙建物が建築され，甲土地に第二順位の抵当権が設定された場合において，第二順位の抵当権の実行によりＢが甲土地を取得したときは，法定地上権は成立しない。
ウ．Ａが所有する甲土地上にＢが所有する乙建物があるところ，甲土地にＣのために第一順位の抵当権が設定された後，Ｂが甲土地の所有権を取得し，甲土地にＤのために第二順位の抵当権を設定した場合において，Ｃの抵当権が弁済により消滅し，その後，Ｄの抵当権の実行によりＥが甲土地を取得したときは，法定地上権が成立する。
エ．Ａが甲土地及びその上の乙建物を所有しているが，甲土地の所有権移転登記をしていなかったところ，乙建物に抵当権が設定され，抵当権の実行によりＢが乙建物を取得したときは，法定地上権は成立しない。
オ．ＡとＢが共有する甲土地上にＡが所有する乙建物があるところ，Ａが甲土地の共有持分について抵当権を設定した場合において，抵当権の実行によりＣがその共有持分を取得したときは，法定地上権が成立する。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2018",num:"15",subject:"min",q:`根抵当権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．元本の確定前において債務者を変更するには，後順位の抵当権者の承諾を得なければならない。
イ．根抵当権者は，担保すべき元本の確定すべき期日の定めがない場合，いつでも，担保すべき元本の確定を請求することができる。
ウ．根抵当権者は，根抵当権を実行した場合，当該競売手続において極度額を超える部分について配当を受けることはない。
エ．根抵当権の極度額の減額をするには，利害関係を有する者の承諾を得ることを要しない。
オ．元本の確定後においては，根抵当権設定者は，その根抵当権の極度額を，現に存する債務の額と以後２年間に生ずべき利息その他の定期金及び債務の不履行による損害賠償の額とを加えた額に減額することを請求することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2018",num:"16",subject:"min",q:`債権の目的に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．金銭に見積もることができないものは，債権の目的とすることができない。
イ．外国の通貨で債権額を指定した場合には，債務者は，日本の通貨で弁済をすることができない。
ウ．元本債権が消滅したとしても，弁済期が到来した利息債権は，当然には消滅しない。
エ．甲倉庫内の米のうち１トンの引渡しを受ける旨の制限種類債権は，甲倉庫内の米が全て滅失したときは，履行不能となる。
オ．選択債権においては，別段の意思表示がないときは，選択権は債権者に属する。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2018",num:"17",subject:"min",q:`詐害行為取消権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．相続の放棄は，相続の放棄をした債務者が債務の履行を長期間怠るなど背信性の程度が著しい場合に限り，詐害行為取消権の対象となる。
イ．不動産の買主は，その売主がその不動産を第三者に贈与した場合，それによって売主が無資力となったとしても，当該贈与を詐害行為取消権の対象とすることができない。
ウ．詐害行為取消権の対象となる贈与の目的物が不可分なものであるときは，その価額が債権額を超過する場合であっても，贈与の全部について取り消すことができる。
エ．贈与が虚偽表示に該当することを知らない転得者との関係において，当該贈与を詐害行為取消権の対象とすることはできない。
オ．債務者が自己の第三者に対する債権を譲渡した場合において，債務者がこれについてした確定日付のある債権譲渡の通知は，詐害行為取消権行使の対象とならない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2018",num:"18",subject:"min",q:`保証に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．保証が付された債権が譲渡された場合においては，譲渡人から主たる債務者に対して債権譲渡の通知をすれば，保証人に対して通知をしなくても，譲受人は保証人に対して保証債務の履行を請求することができる。
イ．未成年者が法定代理人の同意を得ずに債務を負担する行為をした場合において，その債務の保証人は，保証契約締結の当時，未成年者が法定代理人の同意を得ずに債務を負担する行為をしたことを知っており，かつ，その後に，当該未成年者の行為が，未成年者の行為であることを理由に取り消されたときは，当該未成年者が負担していた債務と同一の目的を有する独立の債務を負担したものと推定される。
ウ．主たる債務者が債権者に対し反対債権を有している場合であっても，保証人は，債権者から保証債務の履行を請求されたときは，保証債務を履行しなければならない。
エ．主たる債務について違約金の定めがない場合，保証人は，債権者との間で，保証債務についてのみ違約金を約定することができない。
オ．特定物の売買契約が売主の債務不履行により解除され，売主が代金返還義務を負担したときは，売主のための保証人は，反対の特約のない限り，当該代金返還義務について保証の責任を負う。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2018",num:"19",subject:"min",q:`弁済に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．委託を受けない保証人は，主たる債務者の意思に反して弁済することができない。
イ．弁済を受領する権限を有しない者に対する弁済は，債権者がこれによって利益を受けたとしても，債権者に対し効力を有しない。
ウ．第三者は，当事者が合意により禁止したときは，弁済をすることができない。
エ．弁済の時期について不確定期限があるときは，債務者は，その期限の到来した後に履行の請求を受けた時又はその期限の到来したことを知った時のいずれか早い時から遅滞の責任を負う。
オ．預金通帳を盗んだ者が預金通帳を使用して現金自動入出機から預金の払戻しを受ける行為については，弁済の効力が生じることはない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2018",num:"20",subject:"min",q:`弁済の目的物の供託に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．債務の弁済について利害関係を有する第三者が債権者に弁済の提供をしたのに債権者がその受領を拒んだ場合，当該第三者は，債務者の意思に反するときは，供託することができない。
イ．口頭の提供をしても債権者が弁済の受領を拒むことが明確な場合，債務者は，口頭の提供をしなくても，供託することができる。
ウ．指名債権が二重に譲渡され，確定日付のある２つの譲渡通知が債務者に到達したが，その先後関係が不明である場合，債務者は供託することができる。
エ．金銭債務について弁済供託がされた場合，債権者が供託金を受け取った時に債務は消滅する。
オ．自己が相当と考える額を債務者が供託した場合には，債務の全額に満たなくても，その額については供託は有効である。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2018",num:"21",subject:"min",q:`相殺に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．抵当不動産の所有権を取得したＡが，抵当権者Ｂに対する売買代金債権を有している場合には，当該売買代金債権と抵当権の被担保債務であるＣに対する貸金債務とを対当額において相殺することができる。
イ．弁済期の定めのない貸金債権を有する者は，当該貸金債権の債務者に対して，弁済期が未到来の売買代金債務を負担している場合には，当該売買代金債務の期限の利益を放棄した上で，これらの債権債務を対当額において相殺することができる。
ウ．請負代金債務を負担する注文者が，請負人に対する貸金債権を譲り受けたが，譲受けの時点で当該貸金債権の消滅時効が完成していた。その後，請負人により消滅時効が援用された場合，注文者は，これらの債権債務を対当額において相殺することができない。
エ．車両同士の交通事故が双方の運転者の過失に基因して発生し，双方に物的損害のみが生じた場合，一方の運転者は，双方の損害賠償債権を対当額において相殺することができる。
オ．ＡがＢ銀行に対する定期預金債権を有していたところ，Ｃが，Ａと称して，Ｂ銀行に対し，その定期預金債権を担保とした貸付けの申込みをし，Ｂ銀行は，ＣをＡと誤信したため貸付けに応じた。この場合，Ｂ銀行は，貸付けの際に，Ｃを預金者本人と認定するにつき金融機関として負担すべき相当の注意義務を尽くしていたとしても，その貸付債権と定期預金債権とを対当額において相殺することができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2018",num:"22",subject:"min",q:`免除に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．債権者が債務者に免除の意思を表示した場合，免除の効果は，債務者が債権者に対して免除の利益を享受する意思を表示した時に発生する。
イ．債務の免除があった場合において，債務者が債務の免除を受けたことを忘れて弁済したときは，債務者はその返還を求めることはできない。
ウ．Ａに対し，ＢＣＤが等しい負担部分で３００万円の連帯債務を負っている場合において，ＡがＣについて連帯の免除をしたときでも，Ｂ及びＤは，Ａに対し，３００万円の連帯債務を負う。
エ．Ａに対し，ＢＣＤが等しい負担部分で３００万円の連帯債務を負っている場合において，ＡがＣに対して３００万円の連帯債務全額について免除をしたときでも，Ｂ及びＤは，Ａに対し，３００万円の連帯債務を負う。
オ．主たる債務者について債務の免除があった場合には，連帯保証人の債務は消滅する。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2018",num:"23",subject:"min",q:`民法上の金銭消費貸借に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．金銭消費貸借の予約は，書面によらなければならない。
イ．貸主が借主の指示する第三者に金銭を交付した場合であっても，金銭消費貸借は効力を生ずる。
ウ．金銭消費貸借において，反対の意思の表示がない限り，貸主は法定利率による利息を請求することができる。
エ．金銭消費貸借において貸主が利息を請求することができる場合，借主は，特約のない限り，元本を受け取った日を含めて利息を支払わなければならない。
オ．金銭消費貸借において，返還場所に関する合意をしなかった場合には，借主は貸主の現在の住所に弁済金を持参して返還をしなければならない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2018",num:"24",subject:"min",q:`使用貸借に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．建物の使用貸借において，目的建物に瑕疵があり，貸主がそれを知らなかったことについて過失がある場合には，貸主は担保責任を負う。
イ．Ａの共同相続人の一人であるＢが相続開始前からＡの許諾を得て遺産である建物においてＡと同居していた場合，ＢはＡの死亡時から遺産分割により当該建物の所有関係が最終的に確定するまでの間であっても，当該建物を無償で使用することができない。
ウ．建物所有者ＡとＢの間で，Ａの海外赴任中に限り無償でその所有建物をＢが借り受ける旨の合意をしたが，その引渡し前に，Ａが第三者Ｃと賃貸借契約を締結して当該建物を引き渡した場合，ＢはＡに対して，使用貸借契約に基づく債務の不履行による損害賠償請求をすることができない。
エ．借主が有益費を支出した場合において，その価格の増加が現存するときは，貸主は，その選択に従い，借主が支出した金額又は増価額のいずれかを償還すれば足りる。
オ．借主が貸主に無断で第三者に借用物を引き渡して使用させたときは，貸主は，借主に対して，催告をしなければ，契約を解除することができない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2018",num:"25",subject:"min",q:`Ａは，Ｂに対し，Ａの所有する甲建物を賃料月額１０万円で賃貸し，甲建物をＢに引き渡した。その後，Ｂは，Ｃに対し，甲建物を賃料月額１２万円で賃貸し，甲建物をＣに引き渡した。この事例に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡがＢＣ間の賃貸借を承諾していた場合，Ａは，Ｃに対し，甲建物の賃料として月額１２万円の支払を請求することができる。
イ．ＡがＢＣ間の賃貸借を承諾していた場合，Ｃは，甲建物の修繕を直接Ａに対し請求することができない。
ウ．ＡがＢＣ間の賃貸借を承諾していた場合において，ＡがＢとの間で甲建物の賃貸借を合意解除したときは，Ａは，Ｃに対し，甲建物の明渡しを請求することができる。
エ．ＡがＢＣ間の賃貸借を承諾していなかった場合において，ＡＢ間の賃貸借が終了したときは，Ａは，Ｃに対し，所有権に基づく甲建物の明渡しを請求することはできるが，ＡＢ間の賃貸借の終了に基づく甲建物の明渡しを請求することはできない。
オ．ＡがＢＣ間の賃貸借を承諾していなかった場合，Ａは，当然にＡＢ間の賃貸借を解除することができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2018",num:"26",subject:"min",q:`委任に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．無償委任の受任者は，自己のためにするのと同一の注意をもって，委任事務を処理しなければならない。
イ．受任者は，いつでも，第三者に委任事務の処理を委託することができる。
ウ．受任者は，委任事務を処理するのに必要と認められる費用を支出したときは，委任者に対し，その費用及び支出の日以後におけるその利息の償還を請求することができる。
エ．委任は，受任者が後見開始の審判を受けたときは，終了する。
オ．受任者は，やむを得ない事由がなければ，委任契約を解除することができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2018",num:"27",subject:"min",q:`和解に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡがＢに対してＡＢ間の売買契約に基づく甲不動産の引渡しを請求したが，Ｂがこれを拒否したため争いを生じた場合には，ＡＢ間で，ＢがＡに対して係争物とは全く関係のない乙不動産を譲り渡す旨の和解契約を締結することはできない。
イ．Ａから債権を買い受けたＢとその債権の債務者であるＣとの間で和解契約が締結された。この和解に際しては，その債権に係る支払額が争われ，ＡＢ間の売買契約が有効か否かは争われていなかったが，後に売買契約が無効であることが判明したときは，Ｂは，当該和解契約の錯誤による無効を主張することができる。
ウ．Ａは，Ｂとの賭博に負けたため，Ｃに事情を話して小切手を振り出させ，これらの経緯を知るＢに交付したところ，ＢＣ間で，小切手の支払金額につき争いが生じ，和解契約が成立した。この場合，ＢＣ間の和解契約は公序良俗に反し無効である。
エ．Ａは，Ｂの運転する自動車と接触し負傷したため，Ｂに対し損害賠償を請求したところ，ＡＢ間で，全損害を把握し難い状況の下において，ＢがＡに対して早急に少額の賠償金を支払い，Ａはそれ以外請求しない旨の和解契約が成立した。その後，Ａに和解契約の当時は予期し得なかった後遺症が生じた。この場合，Ａは，Ｂに対し，新たに生じた後遺症につき損害賠償を請求することができる。
オ．Ａは，自己の所有する建物をＢに賃貸したが，Ｂが賃料の支払を遅滞したため，Ｂに対して賃料の支払を請求し，ＡＢ間で，Ｂが以後賃料の支払を１か月分でも怠ったときには賃貸借契約は当然解除となる旨の和解契約が成立した。この場合，その後に賃料の不払があったときは，Ｂは，信頼関係の不破壊を主張して解除の効力を争うことができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2018",num:"28",subject:"min",q:`Ａが長期出張で不在中に，Ａの居宅の生け垣の一部が強風により倒壊した。その後，Ａの居宅の隣地に居宅を有するＢがＡのために義務なく行った行為に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ｂが自ら生け垣を修理した場合には，Ｂは，Ａに対し，その修理に対する報酬の支払を請求することはできない。
イ．Ｂが造園業者に依頼して生け垣の修理をさせた場合には，Ｂは，Ａに対し，造園業者へ未払の請負代金を支払うよう請求することはできない。
ウ．Ｂが自ら生け垣を修理した後，台風により生け垣全体が倒壊した場合において，生け垣の修理がＡの意思に反していたときは，Ｂは，Ａに対し，その修理に要した費用の支払を請求することはできない。
エ．Ｂが自ら生け垣の修理を始めたが，途中で放置したために生け垣全体が枯れてしまった場合には，Ａは，Ｂに対し，生け垣が枯れた分の損害の賠償を請求することはできない。
オ．Ｂが，Ａの居宅の防犯だけでなくＢの居宅の防犯も目的として自ら生け垣を修理した場合には，Ｂは，Ａに対し，その修理に要した費用の支払を請求することはできない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2018",num:"29",subject:"min",q:`不法行為に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．精神上の障害により責任無能力者となった夫と同居する妻は，責任無能力者である夫を監督する法定の義務を負う者として，夫が第三者に加えた損害を賠償する責任を負う。
イ．請負人がその仕事について第三者に損害を加えた場合には，その注文又は指図について注文者に過失があったときを除き，注文者は，その損害を賠償する責任を負わない。
ウ．土地の工作物の設置又は保存に瑕疵があることによって他人に損害が生じた場合において，その工作物の所有者が損害の発生を防止するのに必要な注意をしたときは，その工作物の占有者が，その損害を賠償する責任を負う。
エ．動物の占有者は，その動物の種類及び性質に従い相当の注意をもってその管理をしたときは，その動物が他人に加えた損害を賠償する責任を負わない。
オ．交通事故により傷害を受けた者が搬送先の医師の診療上の過失により死亡した場合には，交通事故の加害者と医師が被害者の被った損害について連帯して賠償する責任を負うことはない。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2018",num:"30",subject:"min",q:`親子関係をめぐる訴訟に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．嫡出否認の訴えは，夫のほか，子の血縁上の父も提起することができる。
イ．妻以外の第三者が生んだ子を嫡出子として出生を届け出たため戸籍上嫡出子となっている子について，夫が父子関係を争う場合，嫡出否認の訴えによることはできない。
ウ．夫が長期間服役しており，妻が夫の子を懐胎することが不可能であったと認められる時期に妻が懐胎した子について，夫が父子関係を争う場合には，嫡出否認の訴えによらなければならない。
エ．母子関係の存在を争う第三者は，母と子のどちらか一方が死亡した後は，親子関係不存在確認の訴えを提起することができない。
オ．女性が，再婚禁止期間内に婚姻届が誤って受理されて再婚し，出産した場合において，生まれた子に対し嫡出の推定が重複するときは，父を定めることを目的とする訴えによって裁判所がこれを定める。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2018",num:"31",subject:"min",q:`いずれも婚姻をしていないＡ男とＢ女との間に子Ｃが生まれた。この場合に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａが成年被後見人であるとしても，ＡがＣを認知するにはＡの成年後見人の同意を要しない。
イ．ＡがＣを認知した場合，Ｃの監護について必要な事項は，家庭裁判所がこれを定める。
ウ．Ｃは，Ａが死亡した場合，認知の訴えを提起することができない。
エ．ＡがＣを認知した後，ＡとＢが婚姻したとしても，Ｃは嫡出子の身分を取得することはない。
オ．ＡがＣを認知しない間にＣが死亡した場合において，Ｃに未成年の子Ｄがあったときは，Ｄの承諾を得なくとも，ＡはＣを認知することができる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2018",num:"32",subject:"min",q:`相続人に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａが死亡した場合，Ａの兄Ｂの子ＣがＡの代襲相続人となることはない。
イ．Ａが死亡した場合，Ａの祖父ＢがＡの相続人となることはない。
ウ．Ａの子Ｂが相続人の欠格事由に該当し，その相続権を失った場合において，その後，Ａの死亡前にＢがＣを養子とする養子縁組をしたときは，ＣはＡの代襲相続人となる。
エ．Ａが妻Ｂの懐胎中に死亡した場合において，その後，出生した子ＣはＡの相続人とならない。
オ．Ａが死亡した場合において，Ａの子Ｂが相続の放棄をしたときは，Ｂの子ＣはＡの代襲相続人となることはない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2018",num:"33",subject:"min",q:`相続の承認又は放棄に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．相続の放棄をした者は，その放棄によって相続人となった者が相続財産の管理を始めることができるまで，善良な管理者の注意をもって，その財産の管理を継続しなければならない。
イ．共同相続人に強迫されて相続の放棄をした者は，その旨を家庭裁判所に申述して放棄の取消しをすることができる。
ウ．相続人Ａが相続の放棄をしたことにより相続人となったＢが相続の承認をした場合であっても，Ｂの承認後にＡが私に相続財産を消費した場合には，Ａは単純承認をしたものとみなされる。
エ．限定承認者は，相続債権者及び受遺者に対する公告の期間の満了前には，相続債権者及び受遺者に対して弁済を拒むことができる。
オ．共同相続人のうち一人が相続の放棄をした場合，他の共同相続人は限定承認をすることができなくなる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2018",num:"34",subject:"min",q:`相続人の不存在に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．相続人があることは明らかでないが，相続財産全部の包括受遺者があることは明らかである場合には，相続財産法人は成立しない。
イ．相続財産法人が成立し，家庭裁判所によって相続財産の管理人が選任された後に，相続人のあることが明らかになった場合には，その時点で，相続財産管理人の代理権は消滅する。
ウ．共有者の一人が相続人なくして死亡した場合において，相続債権者及び受遺者に対する清算手続が終了したときは，その共有持分は他の共有者に帰属し，特別縁故者への財産分与の対象にはならない。
エ．相続人は，相続人の捜索の公告の期間内に相続人としての権利を主張しなかった場合には，特別縁故者に対する相続財産の分与後，残余財産があったとしても，相続権を主張することができない。
オ．家庭裁判所は，特別縁故者に対して相続財産の分与をする場合，清算後残存すべき相続財産の全部を与えることはできない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2018",num:"35",subject:"min",q:`遺言の方式に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．自筆証書遺言における押印を指印によってすることはできない。
イ．秘密証書遺言をするには，遺言者が証書の本文及び氏名を自書し，押印をしなければならない。
ウ．公正証書遺言において，遺言者が署名することができない場合には，公証人がその事由を付記して，署名に代えることができる。
エ．自筆証書遺言の加除その他の変更は，遺言者が，その場所を指示し，これを変更した旨を付記して特にこれに署名し，かつ，その変更の場所に押印をしなければ，その効力を生じない。
オ．成年被後見人が事理弁識能力を一時回復した時において遺言をするには，医師二人以上の立会いがなければならない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2018",num:"36",subject:"min",q:`混同に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．債権質に供されている債権を債務者が相続したときは，当該債権は消滅する。
イ．賃貸人たる地位と転借人たる地位とが同一人に帰属した場合，転貸借関係は消滅する。
ウ．連帯債務者の一人と債権者との間に混同があったときは，当該連帯債務者は弁済をしたものとみなされ，他の連帯債務者に対して負担部分の割合に応じて求償することができる。
エ．甲土地の賃借権が対抗要件を具備した後に，甲土地に抵当権が設定された場合において，甲土地の所有権と賃借権が同一人に帰属するに至ったときは，賃借権は消滅する。
オ．保証人が債権者を相続したときは，保証債務は消滅する。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2018",num:"1",subject:"kei",q:`刑罰論に関する次の各【見解】についての後記１から５までの各【記述】のうち，誤っているものを２個選びなさい。
【見 解】
Ａ．刑罰の目的は，行為者が将来再び犯罪を行うのを予防することにある。
Ｂ．刑罰の目的は，刑罰による威嚇を通して一般人が犯罪を行うのを予防することにある。
Ｃ．刑罰は，犯罪を行った者が果たさなければならないしょく罪である。
Ｄ．刑罰の目的は，処罰により行為者の行為が犯罪であると公的に確認され，これを通して一般人が犯罪を行うのを予防することにある。
【記 述】`,c1:"１．Ａの見解に対しては，軽微な犯罪を行った者であっても，その更生に必要であれば，長期の拘禁刑を科すことが正当化されるおそれがあるとの批判が可能である。",c2:"２．Ｂの見解に対しては，刑罰は重ければ重いほどよいという考え方に陥るおそれがあるとの批判が可能である。",c3:"３．Ｃの見解は，軽微な犯罪を行った者であっても，一般予防の必要性が高いときはその刑を重くしなければならないとの考え方に親和的である。",c4:"４．Ｃの見解に対しては，犯罪を行った者に対し，その処罰を猶予する余地がなくなるとの批判が可能である。",c5:"５．Ｄの見解は，自由意思の存在を認めない決定論を前提として初めて成り立つものである。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"35"},{year:"2018",num:"2",subject:"kei",q:`次のアからオまでの各記述を判例の立場に従って検討した場合，正しいものの組合せは，後記１から５までのうちどれか。
ア．甲は，同僚Ａを会社の備品倉庫内に閉じ込めて困らせようと考え，午後７時頃，Ａが一人で作業をしていた同倉庫の全ての出入口扉に外側から鍵を掛けた。Ａはそのことに気付かず，もともと同倉庫で深夜遅くまで仕事をするつもりであったので，そのまま作業を続けていたところ，午後１０時頃，たまたま同倉庫にやって来た他の従業員が出入口扉の鍵を開けた。この場合，甲には監禁罪は成立し得ない。
イ．甲は，別居中の元妻Ａが単独で親権を有する生後数日のＢを連れ去ろうと考え，Ａ方を訪問した上，Ａがトイレに行っている隙に，ベビーベッドで寝ていたＢを連れ去った。この場合，Ｂには移動の自由が全くないから，甲には未成年者略取罪は成立し得ない。
ウ．甲は，捜査車両をのぞき見て同車両のナンバーを把握するため，警察署の建物及び敷地への外部からの立入りを制限するとともに内部をのぞき見ることができない構造として作用し，建物の利用のために供されている高さ約２．５メートルのコンクリート塀を正当な理由なくよじ登り，その上部に立って同警察署の敷地内の捜査車両を見て立ち去った。この場合，甲には建造物侵入罪は成立し得ない。
エ．甲は，Ａに恨みを抱き，「ふざけるな。おまえの妻Ｂを酷い目に遭わせてやる。」という電子メールをＡ宛てに送り付けた。ＢがＡの内縁の妻であった場合，甲には脅迫罪は成立し得ない。
オ．甲は，深夜，Ａ方に侵入し，泥酔して熟睡中のＡにわいせつ行為をして，Ａに全く気付かれないままＡ方を出た後，Ａ方から約１００メートル離れた路上で，警ら中の警察官Ｂから職務質問を受けたため，逮捕を免れる目的で，Ｂを拳骨で殴打してＢに傷害を負わせた。この場合，甲には準強制わいせつ致傷罪は成立し得ない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2018",num:"3",subject:"kei",q:`過失犯の本質について，学生Ａ及びＢが次の【会話】のとおり議論している。【会話】中の①から④までの（ ）内に後記アからキまでの【発言】から適切なものを選んだ場合，正しいものの組合せは，後記１から５までのうちどれか。
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
キ．予見可能性を結果回避義務を導く前提要件として位置付ける`,c1:"１．①ア ②ウ ③エ ④キ",c2:"２．①ア ②エ ③ウ ④カ",c3:"３．①ア ②エ ③オ ④キ",c4:"４．①イ ②ウ ③オ ④カ",c5:"５．①イ ②エ ③ウ ④キ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2018",num:"4",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．甲は，Ａから現金を借り入れるに当たり，借入金をＡに自ら返済する意思も能力もないのに，乙に対し，「自分がＡに返済するので，保証人として名前を貸してほしい。」とうそを言い，その旨乙を誤信させ，乙に，Ａを貸主，甲を借主とする消費貸借契約書の保証人欄に署名押印させた。乙は錯誤に基づいて署名押印しているから，甲には有印私文書偽造罪の間接正犯が成立する。",c2:"２．甲は，取引先乙に見せて自己に信用があることを誇示するだけの目的で，偽造された約束手形を真正なものとして乙に提示した。偽造有価証券行使罪の「行使」といえるためには，偽造有価証券を真正なものとして流通に置く必要があるから，甲には同罪は成立しない。",c3:"３．甲は，偽名を用いて会社に就職しようと考え，同会社に提出する目的で，履歴書用紙に，架空人Ａの氏名を記載し，その氏名の横にＡと刻した印鑑を押印するとともに，自己の顔写真を貼り付けて履歴書を作成した。同履歴書の作成名義人と作成者との人格の同一性にそごを生じさせるものとは認められないから，甲には有印私文書偽造罪は成立しない。",c4:"４．甲は，信販会社の財産上の事務処理を誤らせる目的で，権限がないのに，同会社の会員名義のクレジットカードの電磁的記録を白地のカード板の磁気部分に印磁して，クレジットカードを構成する電磁的記録を作成したが，その外観は一般人が真正な支払用カードと誤認する程度のものではなかった。支払用カード電磁的記録不正作出罪が成立するためには，一般人が真正な支払用カードと誤認する程度の外観を備える必要はないから，甲には同罪が成立する。",c5:"５．県立高校を中途退学した甲は，父親乙に見せて安心させるだけの目的で，偽造された同高校校長Ａ名義の甲の卒業証書を真正なものとして乙に提示した。甲は，同卒業証書を乙に見せただけであり，公文書に対する公共の信用を害するおそれがないから，甲には偽造有印公文書行使罪は成立しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2018",num:"5",subject:"kei",q:`違法性に関する次のアからオまでの各記述を判例の立場に従って検討し，正しい場合には１を，誤っている場合には２を選びなさい。
ア．殺人被告事件の弁護人が，同被告事件の真犯人は被告人の兄であると考え，第一審の有罪判決後に行った記者会見で「同被告事件の真犯人は被告人の兄である。」旨発表した場合，弁護活動の一環として行ったものであるから，正当な業務行為として違法性が阻却され，名誉毀損罪は成立し得ない。
イ．宗教家が，異常な言動を示すようになっていた娘を連れてきた信者の求めに応じ，その娘の不調の原因を取り去る目的で，宗教上の行為として，同人の身体を手で押さえ付け，流れ落ちる滝の水を同人の顔面に打ち当てた結果，同人を窒息死させた場合，宗教活動の一環として行ったものであるから，正当な業務行為として違法性が阻却され，傷害致死罪は成立し得ない。
ウ．現行犯人を逮捕しようとする私人が，犯人から抵抗を受け，逮捕のために社会通念上必要かつ相当な範囲で実力を行使し同人に傷害を負わせた場合，法令による行為として違法性が阻却され，傷害罪は成立し得ない。
エ．借地人が，自己の借地内にある自己所有の店舗を増築する必要に迫られ，その借地内に突き出ている隣の家屋の屋根をその所有者の承諾なく切除した場合，自救行為として違法性が阻却され，建造物損壊罪は成立し得ない。
オ．新聞記者が，取材の目的で国家公務員に秘密漏示を唆した場合，取材の自由は憲法上保障される表現の自由に由来し，十分尊重されるべきであるから，正当な業務行為として違法性が阻却され，国家公務員法違反の罪（秘密漏示教唆罪）は成立し得ない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"22122"},{year:"2018",num:"6",subject:"kei",q:`賄賂罪（あっせん収賄罪を除く。）に関する次のアからオまでの各記述を判例の立場に従って検討した場合，正しいものの組合せは，後記１から５までのうちどれか。
ア．賄賂罪の「賄賂」は，公務員の職務に関する不正な利益であれば足り，個別の職務行為との間に具体的な対価関係があることを要しない。
イ．賄賂罪は，賄賂を収受し，又はその要求若しくは約束をした時点でそれらの行為をした者が公務員でなければ，いかなる場合でも成立しない。
ウ．賄賂罪の「職務」とは，公務員がその地位に伴い公務として取り扱うべき執務をいうが，独立の決裁権限がなく，単に上司の補助をする立場の公務員が取り扱う事務はこれに該当しない。
エ．賄賂罪の「職務」は，公務員の一般的職務権限に属するものであれば足り，公務員が現に具体的に担当している事務であることを要しない。
オ．賄賂罪の「職務」は，賄賂を収受し，又はその要求若しくは約束をした時点で公務員の一般的職務権限に属している必要があり，公務員が一般的職務権限を異にする他の職務に転じた後に前の職務に関して賄賂を収受した場合には，賄賂罪は成立しない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2018",num:"7",subject:"kei",q:`学生Ａ，Ｂ及びＣは，次の【事例】における甲の罪責について，後記【会話】のとおり議論している。【会話】中の①から④までの（ ）内から適切なものを選んだ場合，正しいものの組合せは，後記１から５までのうちどれか。
【事 例】
甲は，過失による自動車追突事故を偽装して保険会社から保険金を詐取することを計画し，乙に同計画を打ち明け，乙の真意に基づく同意を得た上で，自己の運転する自動車を乙が運転する自動車に追突させた。その結果，乙は軽微な傷害を負った。
【会 話】
学生Ａ．被害者が自己の身体に対する傷害を同意した場合に傷害罪が成立するか否かにつき，私は，判例と①（ａ．同様の・ｂ．異なる）立場に立っており，単に同意が存在するという事実だけではなく，その同意を得た動機，目的，身体傷害の手段，方法，損傷の部位，程度など諸般の事情を照らし合わせて，傷害罪の成否を決すべきであると考えます。乙の同意は，保険金詐取という違法な目的に利用するために得られた違法なものであり，これにより，乙に対する傷害行為の違法性が阻却されることはないので，甲には傷害罪が成立すると考えます。
学生Ｂ．Ａ君の見解に対しては，②（ｃ．個人の自己決定権を重視し過ぎている・ｄ．不可罰である詐欺の予備行為を傷害罪で処罰することになる）という批判があります。
学生Ｃ．私は，乙の有効な同意がある限り，刑法によって保護すべき法益の侵害がないので，乙に対する傷害行為については，傷害罪の構成要件該当性を欠き，甲には傷害罪が成立しないと考えます。
学生Ａ．Ｃ君の見解に対しては，③（ｅ．傷害罪の処罰根拠と合理的な関連性のない事情を考慮し過ぎている・ｆ．死亡の結果が発生した場合に傷害致死罪が不成立となるのは不当である）と批判することが可能です。
学生Ｃ．同意殺人罪に対応する同意傷害罪の規定がない以上，私の見解のように，同意傷害は不可罰であると解すべきです。
学生Ｂ．しかし，④（ｇ．同意殺人罪の法定刑に比して傷害罪の法定刑は重い・ｈ．同意殺人罪は，殺人罪の法定刑の下限の重さが考慮されて，その減軽類型として特に設けられたものである）ので，同意傷害罪の規定がないことは理由にならないと思います。`,c1:"１．①ａ ②ｃ ③ｅ ④ｈ",c2:"２．①ａ ②ｄ ③ｆ ④ｇ",c3:"３．①ａ ②ｄ ③ｆ ④ｈ",c4:"４．①ｂ ②ｃ ③ｅ ④ｇ",c5:"５．①ｂ ②ｄ ③ｆ ④ｇ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2018",num:"8",subject:"kei",q:`次のアからオまでの各記述における甲の罪責について判例の立場に従って検討した場合，正しいものの組合せは，後記１から５までのうちどれか。
ア．甲が，自然湖の一部に設けられた乙のいけすから逃げ出した乙所有の錦鯉３０匹を，同湖内の同いけすから離れた場所で発見し，乙が所有する錦鯉であると認識しながら，これらを自己のものにしようと考えて捕獲した場合，窃盗罪が成立する。
イ．甲は，パチスロ機に針金を差し込んで誤作動させてメダルを窃取することを乙と共謀し，乙による窃盗の犯行を周囲から見えにくくするため，乙の隣のパチスロ機で通常の遊戯を行い，それによりメダルを取得した。この場合，甲自身が遊戯したパチスロ機で取得したメダルについても窃盗罪が成立する。
ウ．甲が，乙から封かんされた現金２０万円入りの封筒を渡されてそれを丙に届けるように依頼されたが，丙方に向かう途中で封筒内の現金が欲しくなり，封を開いて封筒に入っていた現金のうち５万円を取り出してこれを自己のものとし，残りの現金が入った封筒を丙に交付した場合，取り出した５万円について窃盗罪が成立する。
エ．甲は，乙から，乙が海中に落とした腕時計の引き揚げを依頼され，その腕時計が落ちた場所の大体の位置を指示された。甲が，乙から指示された海中付近を探索した結果，同腕時計を発見したが，それを乙に知らせることなく，同腕時計を引き揚げて自己のものとした場合，窃盗罪が成立する。
オ．甲が，満員電車に乗っていた際，隣の席に座っていた見ず知らずの乙が財布を座席に置き忘れたままＸ駅で下車したのを目撃し，乙の財布とその中身を自己のものにしようと考え，次のＹ駅に到着した時点で乙の財布を取得した上，同駅で下車し自宅に持ち帰った場合，窃盗罪が成立する。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2018",num:"9",subject:"kei",q:"次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．刑の全部の執行猶予の言渡しを受けた者が，猶予の期間内に更に罪を犯しても，罰金に処せられたときには，刑の全部の執行猶予の言渡しを取り消さなくてもよい。",c2:"２．懲役に処せられた者がその執行を終わった日から５年以内に更に罪を犯し，その者を有期懲役に処するとき，その刑は，その罪について定めた懲役の長期の２倍以下とするが，その場合でも懲役２０年までしか上げることができない。",c3:"３．懲役又は禁錮に処せられた者に改悛の状があるときは，無期刑については１０年を経過した後，行政官庁の処分によって仮に釈放することができる。",c4:"４．１個の行為が２個以上の罪名に触れる場合，それらの罪についていずれも有期懲役に処するとき，その刑は，その最も重い罪について定めた刑の長期にその２分の１を加えたものを長期とする。",c5:"５．親告罪に当たる罪を犯した者が，捜査機関及び告訴権者に発覚する前に，告訴権者に対して自己の犯罪事実を自発的に告げ，告訴するかどうかについて告訴権者の措置に委ねた場合，その刑を減軽することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"24"},{year:"2018",num:"10",subject:"kei",q:`強盗致傷罪に関する次の各【見解】ＡないしＤに従って後記各【事例】ⅠないしⅢにおける甲の罪責を検討し，後記１から５までの各【記述】のうち，正しいものを２個選びなさい。
【見 解】
Ａ．致傷結果は，強盗の機会に行われた行為から発生すれば足りる。
Ｂ．致傷結果は，強盗の手段である暴行から発生する必要がある。
Ｃ．致傷結果は，強盗の手段である暴行のほか，強盗の機会に行われた行為のうち，強盗行為とその性質上密接な関連性を有する行為から発生する必要がある。
Ｄ．致傷結果は，強盗の手段である暴行のほか，強盗の機会に刑法第２３８条所定の目的で行う暴行から発生する必要がある。
【事 例】
Ⅰ．甲は，自らの強盗の犯行を乙に目撃されたところ，犯行の翌日，犯行現場から約１０キロメートル離れた路上において，たまたま乙に発見され，乙に捕まらないようにするため，乙の顔面を拳骨で多数回殴打し，乙に傷害を負わせた。
Ⅱ．甲は，乙から金品を強取することを丙と計画し，丙と共に乙方に侵入して乙から金品を強取したが，その直後，乙方において，丙に対する日頃の不満を解消するためだけに，丙の顔面を拳骨で多数回殴打し，丙に傷害を負わせた。
Ⅲ．甲は，乙から金品を強取することを計画し，乙方に侵入して乙に包丁を突き付けて金品を要求したが，これに乙が応じなかったため，金品強取を諦めて逃走しようとしたところ，乙から金品を強取できなかった腹いせに，乙とは別の部屋で寝ていた１歳の丙の腹部を多数回蹴り付け，丙に傷害を負わせた。
【記 述】`,c1:"１．Ａの見解によれば，事例ⅠからⅢのいずれでも強盗致傷罪が成立する。",c2:"２．Ｂの見解によれば，事例ⅠからⅢのいずれでも強盗致傷罪が成立しない。",c3:"３．Ｃの見解によれば，事例Ⅱでは強盗致傷罪が成立しない。",c4:"４．Ｄの見解によれば，事例Ⅰでは強盗致傷罪が成立する。",c5:"５．Ｄの見解によれば，事例Ⅲでは強盗致傷罪が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"23"},{year:"2018",num:"11",subject:"kei",q:"責任能力に関する次の１から５までの各記述のうち，判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．裁判所は，責任能力の有無・程度について，専門家たる精神医学者の意見を十分に尊重して判定すべきであるから，精神鑑定の意見の一部だけを採用することは許されない。",c2:"２．行為者が犯行時に心神耗弱状態にあった場合でも，その刑を減軽しないことができる。",c3:"３．犯行時に事物の是非善悪を弁識する能力が著しく減退していても，行動を制御する能力が十分に保たれていれば，完全責任能力が認められることがある。",c4:"４．精神の障害がなければ，心神喪失又は心神耗弱と認められる余地はない。",c5:"５．１４歳の者は，事物の是非善悪を弁識し，その弁識に従って行動する能力が十分に認められる場合であっても，処罰されない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2018",num:"12",subject:"kei",q:"詐欺罪に関する次の１から５までの各記述のうち，判例の立場に従って検討した場合，誤っているものはどれか。",c1:"１．航空会社の空港係員に対し，内心では，外国への不法入国を企てている知人を搭乗させるつもりであるのに，自らが搭乗するとうそを言って，あらかじめ航空券を購入していた航空便について搭乗券の交付を求め，同係員から搭乗券の交付を受けた場合，当該搭乗券についての詐欺罪が成立する。",c2:"２．自動車販売会社の販売員に対し，その代金を支払う意思も能力もないのに，これらがあるように装って自動車の購入を申し込み，分割払いの約定で同販売員から自動車の引渡しを受けた場合，代金完済まで同自動車の所有権が同会社に留保されていても，詐欺罪が成立する。",c3:"３．他人名義の国民健康保険被保険者証を利用して消費者金融から借入れをしようと考え，その他人に成り済まして，市役所職員を欺いて国民健康保険被保険者証の交付を受けた場合，詐欺罪が成立する。",c4:"４．自己名義の銀行預金口座に多額の誤った振込みがなされていることを知った上で，同銀行の窓口係員に対し，誤った振込みがあった旨を告知することなく同口座の残金全額の払戻しを請求し，同係員から即時にその払戻しを受けた場合，詐欺罪が成立する。",c5:"５．他人所有の土地を当該他人から買い受けた事実がないのに，当該他人から盗んだ印鑑を押して登記申請に必要な書類を偽造した上，これを登記官に提出し，当該他人に無断で，自己への所有権移転登記を完了させた場合，当該土地についての詐欺罪が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2018",num:"13",subject:"kei",q:`共犯の従属性に関する次の【見解】に従って後記１から５までの各【記述】を検討した場合，正しいものを２個選びなさい。
【見 解】
共犯が成立するためには，正犯の行為が構成要件に該当し，違法性を具備することを要する。
【記 述】`,c1:"１．甲が強盗犯人Ａの妻乙を唆してＡを蔵匿させた場合，甲には犯人蔵匿罪の教唆犯は成立し得ない。",c2:"２．甲が刑法第４１条の刑事未成年者に当たる乙を唆して窃盗を行わせた場合，甲には窃盗罪の教唆犯は成立し得ない。",c3:"３．甲が乙にＡが一人で居住する家屋に侵入するよう唆したところ，乙がＡの承諾を得て平穏にその家屋に立ち入った場合，甲には住居侵入罪の教唆犯は成立し得ない。",c4:"４．甲が乙を唆して私文書を偽造させたが，乙に行使の目的がなかった場合，甲には私文書偽造罪の教唆犯は成立し得ない。",c5:"５．甲が乙に偽証するよう唆したところ，乙が証人として法律により宣誓した上，虚偽の陳述をしたが，証人尋問手続が終了した後，判決言渡し前に自白した場合，甲には偽証罪の教唆犯は成立し得ない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"34"},{year:"2018",num:"14",subject:"kei",q:"逃走の罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．拘置所に未決勾留中の甲は，逃走しようと考え，房内の換気孔周辺の壁を削って損壊したものの，脱出可能な穴を開けられなかった。甲に加重逃走罪の未遂罪が成立する余地はない。",c2:"２．確定判決によってＡ刑務所に収容されていた甲は，Ｂ刑務所への護送中，刑務官の隙を見て護送車から脱出し，刑務官の追跡を完全に振り切って民家の庭に隠れたが，しばらくして，付近の捜索を継続していた刑務官に発見されて護送車に連れ戻された。甲に逃走罪の既遂罪が成立する余地はない。",c3:"３．刑務官である甲は，勤務先の拘置所に未決勾留中で，自らが看守していた被告人乙を逃走させようと考え，乙の房の扉を解錠し，乙を同拘置所から逃走させた。甲に看守者逃走援助罪が成立する余地はない。",c4:"４．確定判決によって刑務所に収容されていた甲は，その看守に当たっていた刑務官に対する単なる反抗として同刑務官を押し倒したところ，同刑務官が気絶したため，その隙に逃走しようと思い立ち，同刑務所から逃走した。甲に加重逃走罪が成立する余地はない。",c5:"５．甲は，逮捕状により警察官に逮捕された乙の身柄を奪い返そうと考え，路上において，乙を連行中の同警察官に対し，体当たりをする暴行を加え，同警察官がひるんだ隙に，同所から乙を連れ去った。甲に被拘禁者奪取罪が成立する余地はない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2018",num:"15",subject:"kei",q:`学生Ａ，Ｂ及びＣは，身分犯の共犯に関して，次の【会話】のとおり検討している。【会話】中の①から③までの（ ）内から適切なものを選んだ場合，正しいものの組合せは，後記１から５までのうちどれか。
【会 話】
学生Ａ．私は，刑法第６５条第１項は構成的身分の連帯作用を，同条第２項は加減的身分の個別作用を定めたものであると考えます。そして，財物を占有していない甲が，その財物を業務上占有する乙を教唆して，その財物を横領させた事案では，甲には，業務上横領罪の教唆犯が成立すると考えます。
学生Ｂ．Ａ君は，業務上横領罪における「業務」や「占有」という点について，①（ａ．「業務上占有」していることが，非占有者との関係で構成的身分・ｂ．「占有」は構成的身分であり，「業務」は加減的身分）と考えているのですね。私は，刑法第６５条第１項は「共犯とする」と規定し，身分犯における共犯の成立について定めたもの，同条第２項は「通常の刑を科する」と規定し，非身分者について刑の個別作用を定めたものであると考えています。同じ事案につき，私の立場からすると，甲には，②（ｃ．単純横領罪の教唆犯が成立し，同罪の刑が科せられる・ｄ．業務上横領罪の教唆犯が成立し，同罪の刑が科せられる・ｅ．業務上横領罪の教唆犯が成立し，単純横領罪の刑が科せられる）ことになります。
学生Ｃ．Ｂ君は，遺失物等横領罪の刑は「通常の刑」ではないと考えているのですね。私は，刑法第６５条第１項は行為の違法性に関係する身分，すなわち違法身分の連帯作用を，同条第２項は行為者の責任に関係する身分，すなわち責任身分の個別作用を規定したものであると考えます。私の見解に立ち，占有者という身分を違法身分，業務者という身分を責任身分と考えた場合，甲には，③（ｆ．単純横領罪の教唆犯が成立する・ｇ．業務上横領罪の教唆犯が成立する・ｈ．業務上横領罪の教唆犯が成立し，単純横領罪の刑が科せられる）ことになります。`,c1:"１．①ａ ②ｄ ③ｈ",c2:"２．①ａ ②ｅ ③ｆ",c3:"３．①ａ ②ｅ ③ｈ",c4:"４．①ｂ ②ｃ ③ｆ",c5:"５．①ｂ ②ｅ ③ｇ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2018",num:"16",subject:"kei",q:`放火の罪に関する次のアからオまでの各記述を判例の立場に従って検討し，正しい場合には１を，誤っている場合には２を選びなさい。
ア．甲は，自己が所有する家屋に一人で居住していたが，同家屋に掛けられた火災保険の保険金を詐取しようと考え，同家屋に放火して全焼させ，公共の危険を生じさせた。甲には自己所有非現住建造物等放火罪（刑法第１０９条第２項）が成立する。
イ．甲は，競売手続を妨害する目的で，人が住んでいるように見せ掛けるため，空き屋であった家屋に家財道具を持ち込むなどして住居として使用可能な状態にした上，自己が経営する会社の従業員５名を約１か月半前から１０数回にわたり交替で泊まり込ませていたところ，同従業員らが不在にしている隙に，同家屋に放火して全焼させた。甲には現住建造物等放火罪（刑法第１０８条）が成立する。
ウ．甲は，乙が住居に使用する家屋及びこれに隣接する丙が住居に使用する家屋を燃やそうと考え，乙の家屋に放火してその火を丙の家屋に燃え移らせ，乙及び丙の各家屋を共に全焼させた。甲には１個の現住建造物等放火罪（刑法第１０８条）が成立する。
エ．甲は，住宅街の中にある駐車場内に駐車されていた乙所有の自動車にガソリンをまいて放火したところ，同自動車が勢いよく炎上し，その付近に駐車されていた所有者の異なる自動車３台に火が燃え移りかねない状態になったが，付近の建造物に燃え移る危険は生じなかった。甲には他人所有建造物等以外放火罪（刑法第１１０条第１項）は成立しない。
オ．甲は，乙が住居に使用する家屋を燃やそうと考え，同家屋の６畳和室に敷かれた布団に灯油をまいて放火し，火は布団からその下に敷かれた畳に燃え移って炎上したが，他に燃え移る前に乙によって消し止められた。甲には現住建造物等放火罪（刑法第１０８条）の既遂罪が成立する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"21122"},{year:"2018",num:"17",subject:"kei",q:`次の【事例】における甲の罪責について，判例の立場に従って検討した場合，正しいものは，後記１から５までのうちどれか。
【事 例】
　甲は，バーの経営者Ａから現金を強取しようと考え，１２歳の長男乙に，「Ａのバーに行ってお金をとってきて。覆面を付けて，『金だ。』とか言ってモデルガンを見せなさい。」と言い聞かせた。乙は，当初警察に捕まることを恐れて嫌がっていたが，結局小遣い欲しさから承諾し，甲から覆面とモデルガンを受け取った。
　乙は，Ａのバーまで行き，甲から指示された方法に従って，覆面を付けモデルガンを拳銃のように見せ掛け，Ａを脅迫してその反抗を抑圧した。さらに，乙は，自己の判断により，外から人が来ないようにするためバーの出入口ドアの鍵を掛け，Ａを店内のトイレに閉じ込めた。その後，乙は，レジ内の現金を強取し，外に出ようとしたところ，トイレから脱出して乙に向かってきたＡから腕をつかまれたため，これを激しく振り払った。その結果，Ａは転倒して負傷した。
　乙は，逃走して自宅に戻り，強取した現金を全て甲に渡した。甲はその現金の中から乙に小遣いを与え，その余を生活費等に費消した。`,c1:"１．強盗致傷罪の教唆犯が成立する。",c2:"２．強盗罪の間接正犯が成立する。",c3:"３．強盗致傷罪の間接正犯が成立する。",c4:"４．強盗罪の共同正犯が成立する。",c5:"５．強盗致傷罪の共同正犯が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2018",num:"18",subject:"kei",q:"信用及び業務に対する罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．信用毀損罪における「流布」とは，虚偽の風説を不特定又は多数の人が認識可能な状態に置くことをいい，行為者自らが直接に不特定又は多数の人に告知する場合のみならず，特定かつ少数の者を通じて順次不特定又は多数の人に伝播させる場合も含まれる。",c2:"２．電子計算機損壊等業務妨害罪は，電子計算機に向けられた加害行為を手段とする業務妨害行為を処罰対象とするものであるところ，同罪の加害行為は，「人の業務に使用する電子計算機若しくはその用に供する電磁的記録を損壊」することと「人の業務に使用する電子計算機に虚偽の情報若しくは不正な指令を与え」ることに限られる。",c3:"３．威力業務妨害罪における「威力を用いて」とは，人の意思を制圧するような勢力を行使することをいい，このような勢力が業務に従事している人に対して直接行使されることを要する。",c4:"４．信用毀損罪は，公訴が提起されることにより公判において事件の内容が明らかになり，かえって被害者の信用が損なわれる事態を招くおそれがあるため，被害者による告訴がなければ公訴を提起することができない。",c5:"５．強制力を行使しない公務は，業務妨害罪における「業務」には該当するが，公務執行妨害罪における「職務」には該当しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2018",num:"19",subject:"kei",q:`次の【見解】に従って後記の【事例】及び各【記述】を検討した場合，【事例】よりも逮捕監禁行為と死亡との間の因果関係を肯定する判断に結び付きやすいものは，後記１から５までの各【記述】のうちどれか。
【見 解】
因果関係の存否は，行為の危険性が結果に現実化したものと評価できるかどうかで判断すべきであり，その評価に当たっては，介在事情の異常性と結果への寄与度を考慮すべきである。
【事 例】
Ａは，普通乗用自動車（以下「Ａ車」という。）後部のトランク内にＶを押し込み，トランクカバーを閉めて脱出不能にしＡ車を発進走行させた後，市街地の路上で停車させた。Ａ車の停車場所は，片側１車線のほぼ直線の道路上であった。Ａ車が停車して数分後，後方からＸが運転する普通乗用自動車（以下「Ｘ車」という。）が走行してきたが，Ｘは前方不注視（脇見運転）のため，Ａ車の後部に真後ろからＸ車を追突させた。これによって同トランク内に閉じ込められていたＶは傷害を負い，救助が得られないまま同傷害により死亡した。
【記 述】`,c1:"１．上記【事例】において，仮に，Ａ車の停車場所が片側３車線道路の道路端に設けられた路上駐車場であった場合",c2:"２．上記【事例】において，仮に，Ａが，Ａ車後部のトランク内にＶを押し込み，トランクカバーを閉める際に同カバーをＶに強く打ち付ける暴行を加えてＶに重度の傷害を負わせ，その結果，Ｘ車の追突時にはＶが既に瀕死状態に陥っており，Ｘ車の追突により同傷害が悪化してＶの死期が幾分早まった場合",c3:"３．上記【事例】において，仮に，Ｖが，Ｘ車の追突直後，通行人の通報により臨場した救急車で病院へ搬送されたが，同病院の医師の重大な医療過誤により死亡した場合",c4:"４．上記【事例】において，仮に，Ｘが，Ａ車後部のトランク内にＶが閉じ込められていることを知っており，Ｖを殺害する目的で，あえてＸ車をＡ車に追突させた場合",c5:"５．上記【事例】において，仮に，駐車中のＡ車にＸ車が追突せず，飛行中のヘリコプターが墜落してＡ車に衝突し，これによってＶが傷害を負って死亡した場合",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2018",num:"20",subject:"kei",q:`次の【事例】に関する後記アからオまでの各【記述】を判例の立場に従って検討し，正しい場合には１を，誤っている場合には２を選びなさい。
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
オ．乙は，甲から本件土地が既にＡに売却済みであることを知らされながら，Ａに無断で本件土地を購入し，所有権移転登記を完了したのであるから，乙に横領罪の共同正犯が成立する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"11222"},{year:"2017",num:"1",subject:"ken",q:`公権力との間で特別な法律関係にある個人に対する人権の制約に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．公務員の労働基本権の制限に関し，全農林警職法事件判決（最高裁判所昭和４８年４月２５日大法廷判決，刑集２７巻４号５４７頁）以降の最高裁判所の判例は，職務の内容にかかわらず公務員の争議行為を一律に禁止することについて，合憲とする判断を維持している。
イ．公権力が特別権力関係に属する個人に対して包括的な支配権を有し，その個人の人権を法律の根拠なくして制限することができるほか，特別権力関係内部における公権力の行為は司法審査に服さないとする特別権力関係論は，日本国憲法の下では妥当し難い。
ウ．かつて特別権力関係とされた在監関係につき，現在では，刑事収容施設及び被収容者等の処遇に関する法律において刑事施設被収容者の権利義務が明確化され，書籍等の閲覧，外部の者との面会及び信書の発受の各制限についてその要件が法定されたことにより，刑事施設の長らはそれらの制限の可否について裁量を失った。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2017",num:"2",subject:"ken",q:`夫婦が婚姻の際に定めるところに従い夫又は妻の氏を称すると定める民法第７５０条の規定が，憲法第１３条の規定に違反するか否かについて判示した最高裁判所の判決（最高裁判所平成２７年１２月１６日大法廷判決，民集６９巻８号２５８６頁）に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．前記判決は，氏名について，その個人からみれば，人が個人として尊重される基礎であり，その個人の人格の象徴であって，人格権の一内容を構成するが，具体的な法制度を離れて，氏が変更されること自体を捉えて直ちに人格権を侵害し，違憲であるか否かを論ずるのは相当ではないとした。
イ．前記判決は，氏には，名とは切り離された存在として社会の構成要素である家族の呼称としての意義があるとの点を強調して，婚姻を含めた身分関係の変動に伴って自らの意思に関わりなく氏が改められるとしてもやむを得ないという結論を導いている。
ウ．前記判決は，現行の法制度の下における氏の性質等に鑑み，婚姻の際に「氏の変更を強制されない自由」が憲法上の権利として保障される人格権の一内容であるといえるとしつつも，結論として，民法第７５０条の規定が憲法第１３条に違反するとまではいえないとした。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"122"},{year:"2017",num:"3",subject:"ken",q:`日本国民である父親から出生後に認知された子の日本国籍の取得をめぐる国籍法違憲判決（最高裁判所平成２０年６月４日大法廷判決，民集６２巻６号１３６７頁）に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．前記判決は，日本国民を血統上の親として出生しながら，日本国籍を生来的に取得できなかった子について，日本国籍を生来的に取得した子よりも日本国籍の取得の要件を加重すべきであるとする立法目的には，法律婚を尊重する観点から合理的な根拠があるとした。
イ．前記判決は，日本国民である父親から出生後に認知された子について，父母の婚姻が日本国籍の取得の要件とされている点をして，立法目的との合理的関連性の認められる範囲を著しく超える手段を採用したものであるとした。
ウ．前記判決は，婚姻関係にない父母から出生した子について将来にわたって不合理な偏見を生じさせるおそれがあることなどを指摘し，父母の婚姻という事柄をもって日本国籍の取得の要件に区別を生じさせることに合理的な理由があるか否かについては慎重に検討することが必要であるとした。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"212"},{year:"2017",num:"4",subject:"ken",q:`思想・良心の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．企業が従業員を採用するに際して，その者の在学中における団体加入や学生運動参加の事実の有無について申告を求めることは，その事実がその者の思想・良心と全く関係ないものではないから，違法である。
イ．市立小学校の入学式における国歌斉唱の際に「君が代」のピアノ伴奏をする行為は，音楽専科の教諭にとって通常想定され期待されるものであり，当該教諭が特定の思想を有するということを外部に表明する行為であると評価することは困難なものである。
ウ．公立高等学校の卒業式における国歌斉唱の際に起立斉唱する行為は，学校の儀礼的行事における慣例上の儀礼的な所作としての性質を有するものであり，同校の校長が教諭に当該行為を命じても，当該教諭の思想・良心の自由を何ら制約するものではない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"212"},{year:"2017",num:"5",subject:"ken",q:`いわゆる政教分離に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．国公有地が特定の宗教的施設の敷地として無償提供された場合に政教分離原則に違反するか否かを判断するに当たり，当該宗教的施設の性格，当該無償提供に至る経緯及びその提供の態様については考慮に入れるべきであるが，これらに対する一般人の評価についてまで考慮に入れることは，多数者による少数者の宗教的抑圧につながるおそれがあるので相当ではない。
イ．宗教上の祝典，儀式，行事については，その目的が宗教的意義を持ち，その効果が宗教に対する援助，助長，促進又は圧迫，干渉等になるような行為であれば，憲法第２０条第３項により禁止される「宗教的活動」に含まれるが，その判断に当たっては，社会通念に従って客観的になされなければならないから，行為者がどのような宗教的意識を有していたかについてまで考慮に入れるべきではない。
ウ．地方公共団体が町内会に対し特定の宗教的施設の敷地として公有地を無償で利用に供してきたところ，当該行為が政教分離原則に違反するおそれがあるためにこれを是正解消する必要がある一方で，当該宗教的施設を撤去させることを図るとすると，信教の自由に重大な不利益を及ぼしかねないことなどの事情がある場合には，当該町内会に当該公有地を譲与したとしても直ちに政教分離原則に違反するとはいえない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"221"},{year:"2017",num:"6",subject:"ken",q:`公務員宿舎である集合住宅の各室玄関ドアの新聞受けに，政治的意見を記載したビラを投かんする目的で同集合住宅の敷地等に立ち入った事案について判示した最高裁判所の判決（平成２０年４月１１日第二小法廷判決，刑集６２巻５号１２１７頁）に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．前記判決は，被告人らによる政治的意見を記載したビラの配布は，表現の自由の行使ということができ，その行為を刑法第１３０条前段の罪により処罰することは，表現そのものを処罰することの憲法適合性が問題となるとした。
イ．前記判決は，表現の自由は，送り手の情報が妨げられることなく受け手に受領されることを当然に内包しており，本件で被告人らの行為に刑事罰を科すことは，本件公務員宿舎の居住者が情報に接する機会を奪い，その受領権を侵害することになるとした。
ウ．前記判決は，本件立入りの場所が自衛隊・防衛庁当局が管理するものであることから，いわゆるパブリック・フォーラムたる性質を持つものであることを前提としつつ，判示したものである。
エ．前記判決の後の判決（最高裁判所平成２１年１１月３０日第二小法廷判決，刑集６３巻９号１７６５頁）では，政党のビラを配布するために民間の分譲マンションの各住戸の廊下等共用部分に立ち入った行為につき，表現の自由の重要性に鑑み，当該マンションの管理者が商業的な宣伝・広告のビラのみならず政党のビラを配布することまで禁止するのは合理性を欠くとして，かかる行為を刑法第１３０条の罪に問うことは憲法第２１条第１項に反する旨判示された。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2222"},{year:"2017",num:"7",subject:"ken",q:`取材の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．報道機関の取材結果に対する裁判所による提出命令の可否の判断に当たっては，個別事情を考慮することなく，公正な刑事裁判の一般的価値とこれと対立する取材の自由・報道の自由の一般的価値とを比較衡量して判断するという手法によるのが相当である。
イ．適正迅速な捜査は公正な刑事裁判の不可欠の前提であることから，取材の自由に対する制約の許否に関しては捜査と公判とで本質的な差異はなく，したがって，差押えの主体にかかわらず，報道機関の取材結果に対する差押えの可否を判断する際の基本的な考え方は変わらない。
ウ．民事訴訟における，報道関係者による取材源に係る証言拒絶は，当該報道が公共の利益に関わり，取材方法が適切であり，取材源が秘密の開示を承諾していない場合には，当該民事事件が社会的意義や影響のある重大な民事事件であっても，原則として許容される。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"6"},{year:"2017",num:"8",subject:"ken",q:`憲法第２２条第１項の解釈に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．農業災害補償法が一定の稲作農業者を農業共済組合に当然に加入させる仕組みを採用したことの合憲性は，当該仕組みが国民の主食である米の生産の確保と稲作を行う自作農の経営の保護を目的とすることから，必要最小限度の規制であるか否かによって判断される。
イ．憲法第２２条第１項は職業選択の自由を保障しているが，いわゆる営業の自由は，財産権の行使という側面を併せ有することから，同項及び第２９条第１項の規定によって根拠付けられる。
ウ．職業の許可制は，狭義の職業の選択の自由そのものに制約を課す強力な制限であるため，社会政策ないしは経済政策上の積極的な目的のための措置であっても，より緩やかな規制によってはその目的を十分に達することができない場合でなければ，合憲性を肯定し得ない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"8"},{year:"2017",num:"9",subject:"ken",q:`第三者所有物没収事件判決（最高裁判所昭和３７年１１月２８日大法廷判決，刑集１６巻１１号１５９３頁）に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．前記判決は，被告人以外の第三者の所有物（以下「第三者所有物」という。）を没収する場合において，当該第三者に対し告知，弁解，防御の機会を与えることなくその所有物を没収することは，適正な法律手続によらないで財産権を侵害する制裁を科するに外ならない旨判示した。
イ．前記判決は，被告人に対する附加刑として科される第三者所有物に対する没収の言渡により，当該第三者の占有権が剥奪されるにとどまり，所有権剥奪の効果は生じないことを，その判断の前提としている。
ウ．前記判決では，第三者所有物について没収の言渡を受けた被告人は，その没収の裁判の違憲を理由として上告することができるとされた。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"3"},{year:"2017",num:"10",subject:"ken",q:`生存権とこれを具体化した法制度に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．国民年金制度は，憲法第２５条の趣旨を実現するために設けられた社会保障上の制度であるから，同条の趣旨にこたえて具体的にどのような立法措置を講ずるかの選択決定は，立法府の広い裁量にゆだねられており，著しく合理性を欠き明らかに裁量の逸脱，濫用とみざるを得ないような場合を除いて，裁判所が審査判断するに適しない事柄であり，何ら合理的理由のない不当な差別的取扱いがあっても，憲法第１４条違反の問題は生じ得ない。
イ．憲法第２５条にいう「健康で文化的な最低限度の生活」は，きわめて抽象的・相対的な概念であって，その具体的内容は，その時々における文化の発達の程度，経済的・社会的条件，一般的な国民生活の状況等との相関関係において判断決定されるべきものであるから，国の立法として具体化される場合にも，国の財政事情は考慮されるべきではない。
ウ．国は，難民条約の批准及びこれに伴う国会審議等を契機に，外国人に対する生活保護について一定の範囲で国際法及び国内公法上の義務を負うことを認めるに至ったものであり，少なくとも永住外国人にも憲法第２５条第１項の保障が及ぶものとなったと解すべきであるから，生活保護法の適用対象となる「国民」には永住外国人も含まれる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"8"},{year:"2017",num:"11",subject:"ken",q:`刑事補償請求権に関する次の学生アからエまでの各発言について，正しいものの組合せを，後記１から６までの中から選びなさい。
ア．「抑留又は拘禁という人権制限措置を受けたけれども結果として無罪とされた者に，相応の補償をすることによって，公平の要請を満たそうとするのが憲法第４０条なんだね。」
イ．「無罪判決を受けた刑事被告人が，抑留又は拘禁されたことを理由に，憲法第１７条に定める国家賠償を求め得るケースはあり得ないからね。」
ウ．「憲法第４０条は『無罪の裁判を受けたとき』について定めているけど，この文言の意味について，無罪判決が確定したとき又は一旦確定していた有罪判決が再審の結果取り消されて無罪が言い渡されたときを意味すると解する説によれば，同条は免訴や公訴棄却の裁判を受けた場合についても補償することを要請していることになるよ。」
エ．「不起訴となった事実Ａに基づく抑留又は拘禁であっても，そのうちに実質上は無罪となった事実Ｂについての抑留又は拘禁であると認められるものがあるときは，その部分の抑留又は拘禁も憲法第４０条の『抑留又は拘禁』に包含されるとした最高裁判所の判例があったな。」`,c1:"１．ア イ ",c2:"２．ア ウ ",c3:"３．ア エ ",c4:"４．イ ウ ",c5:"５．イ エ ",c6:"６．ウ エ",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2017",num:"12",subject:"ken",q:`天皇に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．天皇の人権には，天皇の象徴たる地位に基づく制約があり，特定の政党に加入することや国籍を離脱することは認められないが，学問の自由についてはかかる制約を受けることなく一般の国民と同等に保障されている。
イ．判例は，天皇が日本国の象徴であり日本国民統合の象徴であることに鑑み，天皇には民事裁判権が及ばないとし，摂政についても，天皇の名でその国事に関する行為を行うことから同様であるとしている。
ウ．憲法第２条は，皇位が世襲のものである旨定めているところ，その具体的な在り方を定める皇室典範において，皇位の継承において皇長子の長子より皇次子を優先させることとしても憲法に反するものではない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"221"},{year:"2017",num:"13",subject:"ken",q:`選挙権及び選挙制度に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法は，国民主権の原理に基づき，国民に対して，両議院の議員の選挙において投票をすることによって国の政治に参加することができる権利の保障は認めているが，投票をする機会の平等までは保障していない。
イ．選挙運動の一つの手段である政見放送において，政見放送の品位を損なう言動を禁止した公職選挙法第１５０条の２の規定に違反する言動がそのまま放送される利益は，法的に保護された利益とはいえず，したがって，上記言動がそのまま放送されなかったとしても，法的利益の侵害があったとはいえない。
ウ．憲法は，両議院の議員の選挙において投票をすることを，一定の年齢に達した国民の固有の権利として保障しており，自ら選挙の公正を害する行為をした者等の選挙権について一定の制限をすることは別として，選挙権又はその行使を制限するためには，そのような制限をすることがやむを得ないと認められる事由がなければならない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"211"},{year:"2017",num:"14",subject:"ken",q:`政党に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法には政党について直接規定されていないが，政党は，憲法の定める議会制民主主義を支える上で極めて重要な存在であることから，憲法は，政党の存在を当然に予定しているとするのが判例の立場である。
イ．憲法第５１条は，「両議院の議員は，議院で行つた演説，討論又は表決について，院外で責任を問はれない。」と定め，国民の代表たる国会議員の職務執行の自由を保障しているから，議院内での国会議員による発言や表決を理由にその所属政党が除名処分をすることはできない。
ウ．政党がその所属党員に対してした除名その他の処分の当否について，裁判所は，原則として適正な手続にのっとってされたか否かを審査して判断すべきであり，一般市民としての権利利益を侵害する場合に限り処分内容の当否を審査できるとするのが判例の立場である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"122"},{year:"2017",num:"15",subject:"ken",q:`国会の立法手続に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．国会の活動につき，憲法は，常会（第５２条），臨時会（第５３条），特別会（第５４条第１項）というように一定の期間を単位として行う会期制を採用し，国会法は，会期内に議決に至らなかった議案は後会に継続しないという会期不継続の原則を採用している。
イ．国会の議事手続については両議院の自主性を尊重すべきであるから，裁判所としては，法律制定の議事手続に関する事実を審理して当該法律の有効無効を判断すべきではないというのが判例の立場である。
ウ．内閣の法律案提出権が認められるのは，議院内閣制においては国会と内閣との協働が当然に要請されており，憲法第７２条の「議案」に法律案も含まれるからであるとの立場に立ったとしても，法律により内閣の法律案提出権を否定することができる。`,c1:"１．ア〇 イ〇 ウ〇",c2:"２．ア〇 イ〇 ウ×",c3:"３．ア〇 イ× ウ〇",c4:"４．ア〇 イ× ウ×",c5:"５．ア× イ〇 ウ〇",c6:"６．ア× イ〇 ウ×",c7:"７．ア× イ× ウ〇",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2017",num:"16",subject:"ken",q:`内閣及び内閣総理大臣に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法は閣議について規定していないが，内閣が行政権の行使について国会に対し連帯して責任を負うとする憲法第６６条第３項の趣旨により，会合しないで文書を各大臣間に持ち回って署名を得る持ち回り閣議は許されないとされている。
イ．内閣の総辞職について規定している憲法第７０条の「内閣総理大臣が欠けたとき」とは，内閣総理大臣が死亡した場合のほか，憲法第５８条第２項に基づき内閣総理大臣が除名により国会議員の地位を失った場合に限られる。
ウ．憲法第７３条第６号は，内閣の政令制定権を規定しているところ，法律を執行するための必要な細則を定める執行命令及び法律が政令に委任した事項を定める委任命令は許されるが，既存の法律に代替する内容を定める代行命令は許されない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"221"},{year:"2017",num:"17",subject:"ken",q:`最高裁判所の規則制定権に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．最高裁判所は，裁判所の内部規律に関する事項について規則を定める権限を有するが，憲法第７６条第３項は，すべて裁判官は憲法及び法律にのみ拘束されると定めているから，裁判官を対象とする事項を規則で制定することはできない。
イ．最高裁判所の制定する規則は，その対象となる事項が規則を制定した機関の内部事項に限られないという点で，議院規則と異なる性質を有する。
ウ．「この法律に定めるもののほか，非訟事件の手続に関し必要な事項は，最高裁判所規則で定める。」との非訟事件手続法第２条の規定は，憲法第７７条第１項において規則の対象とされている「訴訟に関する手続」に非訟事件の手続が含まれないとの立場を前提としている。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"6"},{year:"2017",num:"18",subject:"ken",q:`裁判所の違憲審査に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．裁判所は，処罰対象となる行為が過度に広汎であることが争われている罰則の合憲性の判断に当たり，その規制目的や当該目的達成の手段としての合理性等を審査する場合がある。
イ．合憲限定解釈は，合憲性が争われている法令について法令違憲との判決を下すことを回避する手段の一つである。
ウ．合憲的な適用であることが明らかである場合には，適用された法令に合憲的に適用できる部分と違憲的に適用される可能性のある部分とが不可分の関係で含まれていたとしても，法令違憲と判断する余地はないことになる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2017",num:"19",subject:"ken",q:`財政に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．「租税を除く外，国が国権に基いて収納する課徴金及び法律上又は事実上国の独占に属する事業における専売価格若しくは事業料金については，すべて法律又は国会の議決に基いて定めなければならない。」と規定する財政法第３条について，その根拠を憲法第８３条の財政民主主義に求める見解に対しては，財政法第３条は，具体的な金額又は金額算定基準まで法律によって定めることまで要求していないのであるから，憲法第８３条と矛盾することになるとの批判が妥当する。
イ．最高裁判所の判例によれば，個人への特別の給付に対する反対給付として当該個人に対して課する国民健康保険料のような金銭給付は憲法第８４条の「租税」には当たらないと狭く解したとしても，「租税」以外の公課の賦課要件について定めた条例が憲法第８４条の趣旨に反することはあり得る。
ウ．国費を支出するには国会の議決に基づくことを必要とするが，国費の支出に関する国会の議決は使途の確定した支出についてなされるべきものであるから，使途が未確定である予備費を設けることについては国会の議決を要しない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"212"},{year:"2017",num:"20",subject:"ken",q:`憲法改正に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法改正には，国民投票において「その過半数の賛成」を必要とするとされているが，日本国憲法の改正手続に関する法律によって，「その過半数」とは，有権者総数の過半数を意味するとされている。
イ．憲法第９６条第２項は，国民の承認を経た憲法改正について，「直ちにこれを公布する」と定めているが，ここで「直ちに」とされているのは，公布を恣意的に遅らせてはならないことを定めたものである。
ウ．憲法を始源的に創設する「憲法制定権力」と憲法によって与えられた「憲法改正権」とは同質であるとの見解は，憲法改正の限界について理論上限界はないとする立場の根拠となり得る。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"5"},{year:"2017",num:"1",subject:"min",q:`Ａが１９歳で，親権に服する男性であることを前提として，次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａがその親権者から営業を行うことを許可された後に親権者の同意を得ずに売買契約を締結した場合には，その売買契約がその営業に関しないものであっても，Ａは，その売買契約を取り消すことができない。
イ．Ａの親権者が，新聞配達のアルバイトによりＡが得る金銭の処分をＡに許していた場合において，Ａがそのアルバイトによって得た金銭で自転車を購入したときは，Ａがその売買契約を締結する際に親権者の同意を得ていないときであっても，Ａは，その売買契約を取り消すことができない。
ウ．Ａがその親権者の同意を得ずにＡＢ間に生まれた子を認知した場合であっても，Ａは，その認知を取り消すことができない。
エ．Ａが精神上の障害により事理を弁識する能力を欠く常況にある場合でも，Ａが成年に達するまでは，家庭裁判所は，Ａについて後見開始の審判をすることができない。
オ．Ａが相続によって得た財産から１００万円をＢに贈与する旨の契約を書面によらずに締結した場合において，書面によらない贈与であることを理由にＡがその贈与を撤回したときでも，Ａが贈与の撤回について親権者の同意を得ていなかったときは，Ａは，贈与の撤回を取り消すことができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2017",num:"2",subject:"min",q:`被保佐人Ａが保佐人の同意又はこれに代わる家庭裁判所の許可を得ずにＢに対してＡ所有の甲土地を売り渡したことを前提として，当該売買契約の効力に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＢがＡの保佐人に対し当該売買契約を追認するかどうか確答することを１か月の期間を定めて催告した場合において，保佐監督人があるときは，保佐人が保佐監督人の同意を得てその期間内に追認の確答を発しなければ，当該売買契約を取り消したものとみなされる。
イ．ＢがＡに対し当該売買契約について保佐人の追認を得ることを１か月の期間を定めて催告した場合において，Ａがその期間内にその追認を得た旨の通知を発しないときは，当該売買契約を取り消したものとみなされる。
ウ．Ａが行為能力者となった後に，ＢがＡに対し当該売買契約を追認するかどうか確答することを１か月の期間を定めて催告した場合において，Ａがその期間内に確答を発しないときは，当該売買契約を追認したものとみなされる。
エ．Ａが行為能力者となった後に，ＡがＢから甲土地の所有権移転登記手続の請求を受けたときは，当該売買契約を追認したものとみなされる。
オ．Ａが行為能力者となった後に，Ａが甲土地の売買代金債権を他人に譲渡したときは，当該売買契約を追認したものとみなされる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2017",num:"3",subject:"min",q:`失踪宣告に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．沈没した船舶の中に在ったＡについて失踪宣告がされた場合には，Ａはその沈没事故の後１年が経過した時に死亡したものとみなされる。
イ．Ａの生死が７年間明らかでなかったことから，Ａについて失踪宣告がされた場合には，Ａは，７年間の期間が満了した時に死亡したものとみなされる。
ウ．Ａの生死が７年間明らかでなかったことから，Ａについて失踪宣告がされ，Ａが死亡したものとみなされた後にＡの生存が判明した場合でも，失踪宣告がされた後にＡがした売買契約は，失踪宣告が取り消されなければ有効とはならない。
エ．Ａの生死が７年間明らかでなかったことから，Ａについて失踪宣告がされ，Ａが死亡したものとみなされた後に，Ａの子であるＢがＡ所有の甲土地を遺産分割により取得した。その後，Ｂは，Ｃに甲土地を売却したが，その売却後にＡの生存が判明し，Ａの失踪宣告は取り消された。その売買契約の時点で，Ａの生存についてＢが善意であっても，Ｃが悪意であるときは，Ｃは，甲土地の所有権を取得することができない。
オ．Ａの生死が７年間明らかでなかったことから，Ａについて失踪宣告がされ，Ａが死亡したものとみなされた後に，Ａの生存が判明したが，失踪宣告が取り消されずにＡが死亡した場合には，もはやその失踪宣告を取り消すことができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2017",num:"4",subject:"min",q:`虚偽表示に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．甲土地を所有するＡがＢと通謀して甲土地をＢに仮装譲渡し，ＡからＢへの所有権移転登記がされた後，Ｂの債権者Ｃが甲土地を差し押さえた場合において，その差押えの時にＣが仮装譲渡について善意であったときは，Ａは，Ｃに対し，Ｂへの譲渡が無効であることを主張することができない。
イ．甲土地を所有するＡがＢと通謀して甲土地をＢに仮装譲渡した後に，ＣがＢとの間で甲土地についてＣを予約者とする売買予約を締結した場合，仮装譲渡についてＣが予約成立の時に善意であっても，予約完結権行使の時に悪意であれば，Ｃは，Ａに対し，甲土地の所有権を主張することができない。
ウ．甲土地を所有するＡがＢと通謀して甲土地にＢのための抵当権設定を仮装した後，その抵当権設定が仮装であることについて善意のＣがＢから転抵当権の設定を受け，その旨の登記がされた場合には，Ａは，Ｃに対し，原抵当権の設定が無効であることを主張することができない。
エ．甲土地を所有するＡがＢと通謀して甲土地をＢに仮装譲渡し，ＡからＢへの所有権移転登記がされた後に，Ｂが死亡した場合において，Ｂが死亡した時にＢの相続人であるＣが仮装譲渡について善意であったときは，Ａは，Ｃに対し，甲土地の所有権を主張することができない。
オ．甲土地を所有するＡがＢと通謀して甲土地をＢに仮装譲渡し，ＡからＢへの所有権移転登記がされた後に，ＢがＣに甲土地を譲渡し，さらに，ＣがＤに甲土地を譲渡した場合において，Ｃが仮装譲渡について悪意であったときは，Ｄが仮装譲渡について善意であったとしても，Ａは，Ｄに対し，甲土地の所有権を主張することができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2017",num:"5",subject:"min",q:`代理に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．代理人が自己又は第三者の利益を図るために契約をした場合において，それが代理人の権限内の行為であるときは，本人は，代理人の意図を知らなかったことについて相手方に過失があったとしても，その行為について責任を免れることができない。
イ．第三者に対して他人に代理権を与えた旨を表示した者は，その他人に代理権が与えられていないことをその第三者が知り，又は過失によって知らなかったことを主張立証すれば，その表示された代理権の範囲内においてされた行為について責任を免れる。
ウ．権限外の行為の表見代理は，代理人として行為をした者が当該行為をするための権限を有すると相手方が信じたことにつき本人に過失がなかったときは成立しない。
エ．代理権消滅後の表見代理は，相手方が代理人として行為をした者との間でその代理権の消滅前に取引をしたことがなかったときは成立しない。
オ．相手方から履行の請求を受けた無権代理人は，表見代理が成立することを理由として無権代理人の責任を免れることはできない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2017",num:"6",subject:"min",q:`時効に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．買主の売主に対する瑕疵担保による損害賠償請求権の消滅時効は，買主が目的物の引渡しを受けた時から進行を始める。
イ．遺留分権利者が減殺請求によって取得した不動産の所有権に基づく登記請求権は，時効によって消滅することはない。
ウ．相続財産に関しては，相続財産管理人が選任された場合でも，相続人が確定するまでの間は，時効は完成しない。
エ．主たる債務者がその債務について時効の利益を放棄した場合には，その保証人に対してもその効力を生ずる。
オ．債務者が，消滅時効完成後に債権者に対して債務を分割して支払う旨の申出をした場合には，時効完成の事実を知らなかったときでも，その後その時効を援用することは許されない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2017",num:"7",subject:"min",q:`登記に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡからＢ，ＢからＣに甲土地が順次売却され，それぞれその売買代金が支払われたが，所有権の登記名義がＡのままである場合，Ｃは，Ｂに代位して，Ａに対し，ＡからＢへの所有権移転登記手続を請求することはできない。
イ．Ａ所有の甲土地及び乙土地に抵当権を有するＢは，甲土地の抵当権設定の登記の抹消をするつもりで，誤って乙土地の抵当権設定の登記の抹消を申請し，その旨の登記がされた。この場合でも，Ｂは，乙土地の抵当権設定の登記の抹消後に上記事情を知らずに乙土地に抵当権の設定を受けたＣに対し，Ｂの抵当権が優先することを主張することができる。
ウ．Ａは，Ｂから代理権を与えられていないのに，Ｂの代理人として，Ｃとの間で，Ｂ所有の甲土地にＣの債権を担保するための抵当権設定契約を締結し，その旨の登記がされた。この場合において，Ｂがその抵当権設定契約を追認したときは，Ｂは，Ｃに対し，その抵当権設定の登記の無効を主張することはできない。
エ．Ａは，Ｂ所有の土地上に権原なく建物を建築して居住しているが，Ｃと通謀してその建物についてＡからＣへの所有権移転登記をした。Ｃが実際にはその建物を所有したことがない場合でも，Ｃは，Ｂに対し，建物収去土地明渡の義務を負う。
オ．Ａは，その所有する甲建物の滅失後に新築した乙建物について，新たな保存登記をせずに甲建物の登記を流用して，Ｂとの間で，停止条件付代物弁済契約に基づく所有権移転請求権保全の仮登記をし，その後，代物弁済を原因として仮登記に基づく本登記をした。この場合，その本登記は無効である。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2017",num:"8",subject:"min",q:`物権の消滅等に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡとＢが甲土地を共有している場合において，Ａがその共有持分を放棄したときは，Ａの共有持分はＢに帰属する。
イ．Ａ所有の甲土地には，第一順位の抵当権を有しているＢと第二順位の抵当権を有しているＣがおり，他には抵当権者がいない場合，ＣがＡから甲土地を譲り受けたときでもＣの抵当権は消滅しない。
ウ．Ａ所有の甲土地についてＢが建物所有目的で地上権の設定を受けてその旨の登記がされ，甲土地上にＢが乙建物を建築して所有権保存登記がされた後に，甲土地にＣのための抵当権が設定され，その旨の登記がされた場合には，その後にＡが単独でＢを相続したときでも，その地上権は消滅しない。
エ．ＡとＢは，建物所有目的で，ＣからＣ所有の甲土地を賃借した。その後，Ｃが死亡してＡが単独で甲土地を相続した場合，Ａの賃借権は消滅しない。
オ．Ａ所有の甲土地についてＢが建物所有目的で地上権の設定を受けてその旨の登記がされ，甲土地上にＢが乙建物を建築して所有権保存登記がされた後に，乙建物にＣのための抵当権が設定され，その旨の登記がされた。その後，Ｂは，Ａに対し，その地上権を放棄する旨の意思表示をした。この抵当権が実行され，Ｄが乙建物を取得した場合，Ｄは，Ａに対し，地上権を主張することができない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2017",num:"9",subject:"min",q:`物権についての費用負担，償金等に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡとＢが共有する土地の分割によって公道に通じない甲土地と公道に通じる乙土地が生じた場合，甲土地の所有者Ａは，公道に至るため，Ｂの所有する乙土地を通行することができるが，その通行について償金を支払う必要がある。
イ．２棟の建物がその所有者を異にし，かつ，その間に空地があるときは，各所有者は，他の所有者と共同の費用で，その境界に囲障を設けることができる。
ウ．Ａ所有の主たる動産とＢ所有の従たる動産が，付合により，損傷しなければ分離することができなくなったときは，その合成物の所有権はＡに帰属するが，ＢはＡに対して償金を請求することができる。
エ．ＡとＢが建物を共有する場合において，ＡがＢの持分に応じた管理費用について立替払をし，Ｂに対して償還義務の履行の催告をしたにもかかわらず，Ｂがその義務を１年以内に履行しないときは，Ａは，相当の償金を支払ってＢの持分を取得することができる。
オ．Ａが，その所有する甲土地の排水を通過させるため，甲土地より低地である乙土地の所有者Ｂが既に設けていた排水設備を使用し始めた場合，Ａは，その利益を受ける割合に応じて，同設備の保存費用を分担する必要があるが，同設備の設置費用を分担する必要はない。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2017",num:"10",subject:"min",q:`複数の者が共同で権利を有する場合に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａ，Ｂ及びＣの３名が各３分の１の割合による持分を有する建物について，Ａが単独でその建物を占有している場合，Ｂは，Ａに対し，その建物の明渡しを請求することができる。
イ．Ａ，Ｂ及びＣの３名が各３分の１の割合による持分を有する土地につき，Ａがその所有者をＡのみとする登記をした場合，Ｂは，Ａに対し，Ａ，Ｂ及びＣの３名の持分を各３分の１とする更正登記手続を求めることができる。
ウ．Ａ，Ｂ及びＣの３名が共同相続し，その遺産分割の前に，法定相続分に応じた持分の割合により相続登記がされた土地につき，ＣからＤに不実の持分権移転登記がされた場合，Ａは，Ｄに対し，当該持分権移転登記の抹消登記手続を求めることができる。
エ．入会権は，登記がなくても第三者に対抗することができる。
オ．入会団体の構成員が採枝・採草の収益を行う権能を有する入会地がある場合において，その入会地にＡ名義の不実の地上権設定登記があるときは，その入会団体の構成員であるＢは，Ａに対し，入会地におけるＢの使用収益権に基づき，当該地上権設定登記の抹消登記手続を求めることができる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2017",num:"11",subject:"min",q:`留置権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡがＢから甲建物を賃借し，Ｂに敷金を交付していた場合において，その賃貸借契約が終了したときは，Ａは，敷金が返還されるまで甲建物を留置することができる。
イ．ＡからＢ，ＢからＣに建設機械が順次売却され，ＢがＡに対して代金を支払っていない場合に，Ｃが提起した所有権に基づく建設機械の引渡請求訴訟においてＡの留置権が認められるときは，Ｃの請求は棄却される。
ウ．ＡがＢから甲建物を賃借していたが，Ａの賃料不払によりその賃貸借契約が解除された後，明渡しの準備をしている間にＡが甲建物について有益費を支出した場合，Ａは，Ｂに対し，その費用の償還請求権を被担保債権とする留置権を行使して甲建物の明渡しを拒むことはできない。
エ．甲土地の借地権者であるＡが甲土地上にある建物について買取請求権を行使した場合，Ａは，甲土地の賃貸人であるＢに対し，その買取代金債権を被担保債権とする留置権を行使して甲土地の明渡しを拒むことはできない。
オ．甲建物の賃貸人Ａが，賃借人Ｂに対して賃貸借契約の終了に基づき甲建物の明渡しを請求したのに対し，Ｂが賃貸借の期間中に支出した有益費の償還請求権に基づいて留置権を行使し，従前と同様の態様で甲建物に居住した場合，Ｂは，Ａに対し，その居住による利得を返還する義務を負う。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2017",num:"12",subject:"min",q:`物上代位に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．抵当権者は，抵当権設定登記がされた後に物上代位の目的債権が譲渡されて第三者に対する対抗要件が備えられた場合においても，目的債権を差し押さえて物上代位権を行使することができる。
イ．動産売買の先取特権者は，物上代位の目的債権が譲渡されて第三者に対する対抗要件が備えられた後においては，目的債権を差し押さえて物上代位権を行使することはできない。
ウ．抵当権者は，抵当権設定登記がされた後に物上代位の目的債権が転付命令の確定により差押債権者に移転した場合においても，目的債権を差し押さえて物上代位権を行使することができる。
エ．抵当権者が物上代位権を行使して賃料債権の差押えをした後は，抵当不動産の賃借人は，抵当権設定登記の後に賃貸人に対して取得した債権を自働債権とし，賃料債権を受働債権とする相殺をもって抵当権者に対抗することはできない。
オ． 抵当権者が物上代位権を行使して賃料債権の差押えをした場合には，その後に賃貸借契約が終了し，抵当不動産が明け渡されたとしても，抵当不動産の賃借人は，抵当権者に対し，敷金の充当によって当該賃料債権が消滅したことを主張することはできない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2017",num:"13",subject:"min",q:`先取特権の順位に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．共益の費用の先取特権は，全ての特別の先取特権に優先する。
イ．農地の天然果実については，農業労務の先取特権が不動産賃貸の先取特権に優先する。
ウ．工事を始める前にその費用の予算額を登記した不動産工事の先取特権は，その登記に先立って設定登記がされている抵当権に優先する。
エ．同一の不動産について不動産保存の先取特権と不動産工事の先取特権が競合する場合，その優先権の順位は同一となる。
オ．同一の目的物について同一順位の先取特権者が数人あるときは，各先取特権者は，その債権額の割合に応じて弁済を受ける。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2017",num:"14",subject:"min",q:`質権又は譲渡担保権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．同一の動産について複数の質権を設定することはできないが，同一の動産について複数の譲渡担保権を設定することはできる。
イ．動産を目的とする質権は占有改定の方法によるその動産の引渡しによっては効力を生じないが，動産を目的とする譲渡担保権はその設定契約によって設定され，占有改定の方法によるその動産の引渡しがあれば，譲渡担保権者は第三者に譲渡担保権を対抗することができる。
ウ．債権質の目的である債権の弁済期が到来した場合には，被担保債権の弁済期が到来していないときであっても，質権者は，債権質の目的である債権を直接に取り立てることができる。
エ．債権であってこれを譲り渡すにはその証書を交付することを要するものを質権の目的とするときは，質権の設定は，その証書を交付することによって，その効力を生ずる。
オ．動産を目的とする譲渡担保権が設定されている場合，その設定者は，正当な権原なくその動産を占有する者に対し，その動産の返還を請求することができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2017",num:"15",subject:"min",q:`Ａ所有の甲土地には，ＢのＡに対する５００万円の債権を担保するための第一順位の抵当権，ＣのＡに対する１０００万円の債権を担保するための第二順位の抵当権及びＤのＡに対する２０００万円の債権を担保するための第三順位の抵当権がそれぞれ設定されているが，ＥのＡに対する２０００万円の債権を担保するための担保権は設定されていない。この場合において，甲土地の競売により２５００万円が配当されることになったときに関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。なお，各債権者が有する債権の利息及び損害金並びに執行費用は考慮しないものとする。
ア．競売の申立て前にＥの利益のためにＢの抵当権が譲渡されて対抗要件が備えられていたときは，Ｃに１０００万円，Ｄに１０００万円，Ｅに５００万円が配当される。
イ．競売の申立て前にＥの利益のためにＢの抵当権が放棄されて対抗要件が備えられていたときは，Ｂに１００万円，Ｃに１０００万円，Ｄに１０００万円，Ｅに４００万円が配当される。
ウ．競売の申立て前にＤの利益のためにＢの抵当権の順位が譲渡されて対抗要件が備えられていたときは，Ｃに５００万円，Ｄに２０００万円が配当される。
エ．競売の申立て前にＤの利益のためにＢの抵当権の順位が放棄されて対抗要件が備えられていたときは，Ｃに１０００万円，Ｄに１５００万円が配当される。
オ．競売の申立て前に抵当権の順位が変更されてＤの抵当権が第一順位，Ｃの抵当権が第二順位，Ｂの抵当権が第三順位となったときは，Ｃに１０００万円，Ｄに１５００万円が配当される。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2017",num:"16",subject:"min",q:`債務不履行に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．動産の売買契約が締結され，その代金の一部が支払われた後で，当該売買契約が債務不履行を理由に解除された場合，売主は，受領した売買代金の一部を返還するに当たり，その受領の時からの利息を付す必要はない。
イ．売買代金の履行遅滞に基づく損害賠償請求において，同時履行の抗弁権が存在する場合には履行遅滞に陥らないとの見解に立つ場合，損害賠償を求める原告は，請求原因事実として自己の債務の履行又は履行の提供を主張立証しなければならない。
ウ．ＡＢ間で売買契約が締結され，Ａが債務不履行に陥っている場合において，ＡがＢに対して相当の期間を定めて契約を解除するかどうかを確答すべき旨の催告をしたにもかかわらず，Ｂがその期間内に解除の通知をしないときは，Ａは，以後債務不履行責任を負わない。
エ．ＡがＢに建物を賃貸し，ＢがＡの承諾を得てＣに同建物を転貸した場合において，ＡＢ間の賃貸借契約がＢの債務不履行を理由とする解除により終了したときは，ＡがＣに建物の返還を請求しても，Ａが転貸借を承諾していた以上，ＢＣ間の転貸借契約におけるＢのＣに対する債務は履行不能とはならない。
オ．期限の定めのない金銭消費貸借契約の借主は，貸主が相当の期間を定めずに催告をしても，相当の期間を経過した時から履行遅滞の責任を負う。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2017",num:"17",subject:"min",q:`債権者代位権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．債権者は，自己の債権の履行期が到来していなくても，保存行為については，債務者に代位して債務者の権利を行使することができる。
イ．ＡとＢがＣに対していずれも１５０万円の金銭債権を有している場合において，ＣがＤに対し１００万円の金銭債権を有しているときは，Ａは，自己の債権を保全するため，５０万円の限度でＣのＤに対する債権を代位行使することができる。
ウ．金銭債権の債権者Ａが，債務者Ｂの第三債務者Ｃに対する甲動産の引渡請求権を代位行使する場合，Ａは，Ｃに対し，Ａの債権額にかかわらず，Ａに甲動産を引き渡すことを求めることができる。
エ．債権者Ａが債務者Ｂの第三債務者Ｃに対する債権を代位行使する場合において，ＣがＢに対する債権を自働債権とする相殺の抗弁を提出したときは，Ａは，ＢがＣに対して主張することができる再抗弁事由のほか，Ａの独自の事情に基づく再抗弁も提出することができる。
オ．土地の所有者Ａからその土地を賃借したＢは，その土地を不法に占有するＣがいる場合，賃借権について対抗要件を具備しているか否かにかかわらず，賃借権を保全するために，ＡのＣに対する所有権に基づく返還請求権を代位行使することができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2017",num:"18",subject:"min",q:`連帯債務に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．連帯債務者の一人について弁済期を他の連帯債務者と異にすることはできない。
イ．連帯債務者の一人と債権者との間に更改があったときは，他の連帯債務者は従来の債務を免れ，更改によって新たに発生した債務について責任を負わない。
ウ．ＡとＢがＣに対して連帯債務を負っている場合において，Ａが債務全額の弁済をしたが，Ｂに対する通知を怠ったため，Ｂは，Ａの弁済を知らなかった。この場合において，その後ＣがＢに対し債務の履行を請求し，これに応じてＢが債務全額の弁済をしたときは，ＢがＡに対して事前にＣから履行の請求を受けた旨の通知をしなかったとしても，Ｂは，Ａに対し，自己の弁済が有効である旨主張することができる。
エ．連帯債務者の一人が債務を承認したことによる時効中断の効力は，他の連帯債務者には及ばない。
オ．ＡとＢがＣに対して連帯債務を負う旨の契約をＣとの間で締結した場合において，契約締結の当時Ａが意思無能力であったときは，Ｂは，Ａの負担部分について債務を免れる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2017",num:"19",subject:"min",q:`指名債権の譲渡に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．債権譲渡禁止の特約に反して債権を譲渡した債権者は，債務者が譲渡を承諾した場合を除き，同特約の存在を理由に譲渡の無効を主張することができる。
イ．債権の譲受人は，譲渡人に代位して債務者に対して債権譲渡の通知をすることにより，その債権譲渡を債務者に対抗することはできない。
ウ．抵当不動産の第三取得者が被担保債権の弁済をしたことによって抵当権が消滅した場合，その後，被担保債権の債権者がその債権を第三者に譲渡し，債務者が異議をとどめないで債権譲渡を承諾しても，当該第三取得者に対する関係においては，抵当権の効力は復活しない。
エ．債権が二重に譲渡され，第一の債権譲渡について譲渡人が債務者に対して確定日付のある証書によらずに通知をした後に，第二の債権譲渡について譲渡人が債務者に対して確定日付のある証書による通知をした場合，第一の譲受人は債権の取得を債務者にも対抗することができない。
オ．債権が二重に譲渡され，確定日付のある証書による通知が同時に債務者に到達したときは，譲受人の一人から弁済の請求を受けた債務者は，同順位の譲受人が他に存在することを理由として弁済の責任を免れることができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2017",num:"20",subject:"min",q:`債務の引受けに関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．債権者Ａが，債務者Ｂの意思に反して，引受人Ｃとの間で併存的債務引受の契約をした場合，その効力は生じない。
イ．債権者Ａに対する債務者Ｂの債務について，Ｃを引受人とする併存的債務引受の効力が生じた場合において，Ｂの債務が時効により消滅したとしても，ＡはＣに対して債務の全額を請求することができる。
ウ．債権者Ａは，債務者Ｂの意思に反しない場合，引受人Ｃとの二者間の契約により，免責的債務引受の効力を生じさせることができる。
エ．債権者Ａに対する債務者Ｂの債務について，Ｃを引受人とする免責的債務引受の効力が生じた場合には，Ｂの債務を担保するために第三者Ｄが設定していた抵当権は，Ｃの債務を担保することについてＤの同意がない限り，消滅する。
オ．中古自動車の売買契約における売主Ａに対する買主Ｂの代金債務について，Ｃを引受人とする免責的債務引受の効力が生じた場合において，その自動車に隠れた瑕疵があり契約の目的を達成することができないときは，Ｃはその売買契約を解除することができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2017",num:"21",subject:"min",q:`弁済に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡのＢに対する債権を目的としてＡがＣのために質権を設定し，ＡがＢに対してその質権の設定を通知した後であっても，ＢがＡに弁済をした場合には，Ｂは，Ｃに対してもその弁済の効果を対抗することができる。
イ．Ａがその所有する土地をＢに賃貸し，Ｂがその土地上にあるＢ所有の建物をＣに賃貸していた場合，Ｃは，Ｂの意思に反するときでも，ＡＢ間の賃貸借契約における賃料について，Ａに弁済をすることができる。
ウ．ＡのＢに対する債権についてＣがＡの代理人であると偽って，Ｂから弁済を受けた場合には，表見代理の要件を満たさない限り，Ｂは，Ａに対し，その弁済が有効であると主張することはできない。
エ．ＡのＢに対する債権についてＢが弁済を受領する権限がないＣに対して弁済をした場合において，Ａがこれによって利益を受けたときは，Ｃに弁済を受領する権限がないことをＢが知っていたとしても，Ａが利益を受けた限度で，その弁済は効力を有する。
オ．動産の引渡債務を負うＡが，債権者Ｂに対し，他人の所有する動産を弁済として引き渡し，その動産が他人の物であることを知らずにＢがその動産を消費した場合，その弁済は有効となる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2017",num:"22",subject:"min",q:`ＡのＢに対する１０００万円の債務（以下「本件債務」という。）について，ＡＢ間でＡ所有の甲土地で代物弁済をする合意をした場合に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ｂが，甲土地の所有権を取得するには，代物弁済の合意に加えて，給付の完了として対抗要件を具備する必要がある。
イ．代物弁済の合意をしても，その所有権移転登記手続の完了前であれば，ＡはＢに１０００万円を支払って，本件債務を弁済により消滅させることができる。
ウ．ＡがＣから売買契約により甲土地の所有権を取得した後に代物弁済の合意がされ，その合意に基づいてＡからＢへの所有権移転登記がされた後，ＣがＡの強迫を理由としてその売買契約を取り消したときは，Ａは，Ｂに対し，本件債務の消滅を主張することができない。
エ．代物弁済がされて一旦甲土地の所有権がＢに移転した後，本件債務の発生原因となった契約が解除された場合でも，甲土地の所有権はＢに帰属する。
オ．甲土地の所有権移転登記手続に必要な書類をＢがＡから受領した時点で本件債務の消滅の効果が生じるという特約がある場合，ＢがＡからその書類を受領した時に，本件債務の消滅の効果が生じる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2017",num:"23",subject:"min",q:`隔地者間の契約に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．承諾者が申込みに条件を付して承諾し，その他変更を加えてこれを承諾したときは，その申込みの拒絶とともに新たな申込みをしたものとみなされる。
イ．申込者の意思表示又は取引上の慣習により承諾の通知を必要としない場合には，契約は，承諾の意思表示と認めるべき事実があった時に成立する。
ウ．承諾期間の定めのある申込みに対し，その承諾の通知がその期間内に発送された場合には，その承諾の通知が申込者に到達しなかったときであっても，契約は成立し，その効力が生ずる。
エ．申込者は，遅延した承諾を新たな申込みとみなすことができる。
オ．承諾期間の定めのない申込みに対し承諾の通知が発送された後，申込みの撤回の通知が承諾者に到達した場合において，その申込みの撤回の通知が通常の場合には承諾の通知の発送の前に到達すべき時に発送したものであることを承諾者が知ることができたときは，承諾者が申込みの撤回の通知が延着した旨の通知を申込者に対して発送したか否かにかかわらず，契約は成立しなかったものとみなされる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2017",num:"24",subject:"min",q:`売買契約の解除に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．債務不履行を理由に売買契約が解除された場合において，その債務不履行の時から１０年を経過したときは，解除による原状回復請求権の消滅時効が完成する。
イ．売主が目的物を引き渡し，買主が代金の一部を支払った場合において，債務不履行を理由に売買契約が解除されたときは，売主の目的物返還請求権と買主の代金返還請求権とは，同時履行の関係にない。
ウ．売主が目的物を引き渡したが，買主が代金を履行期の経過後も支払わない場合において，売主が買主に対して相当の期間を定めて債務の履行の催告をしたとしても，売主がその催告に際して履行がなければ解除する旨の通知をしていないときは，売主は，相当期間の経過後も当該売買契約を解除することができない。
エ．売主が目的物を引き渡したが，買主が代金を履行期の経過後も支払わない場合において，売主が買主に対して相当の期間を定めて代金の支払を催告したにもかかわらず，買主が代金の支払を拒絶する意思を明確に表示したときは，売主は，相当の期間が経過する前であっても，当該売買契約を解除することができる。
オ．買主の債務不履行を理由に売主が解除権を取得したとしても，その解除権の行使前に買主がその債務を履行したときは，売主は，その解除権を行使することができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2017",num:"25",subject:"min",q:`贈与に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．書面によらないで動産の贈与がされ，その引渡しがされた場合において，その引渡しが占有改定により行われたときは，贈与者は，贈与を撤回することができる。
イ．贈与者が他人の不動産を贈与した場合において，他人の物であることを知りながら受贈者に告げなかったときは，贈与者は，その不動産の所有権を取得して受贈者に移転する義務を負う。
ウ．定期の給付を目的とする贈与は，受贈者の死亡によって，その効力を失うが，贈与者が死亡しても，その効力は失われない。
エ．贈与については，負担付きのものであっても，双務契約に関する規定は準用されない。
オ．書面によって死因贈与がされたとしても，贈与者は，生前，いつでもその贈与を撤回することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2017",num:"26",subject:"min",q:"不動産の売買契約に基づき売主が買主に対して代金の支払を訴訟で請求する場合に関する次の１から５までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．売主は，請求原因において，売買契約締結当時，その目的物が売主の所有であったことを主張する必要がある。",c2:"２．買主が抗弁として同時履行の抗弁を主張した場合には，売主は，代金の支払を目的物の引渡し及び所有権移転登記手続よりも先に履行する旨の合意があったことを再抗弁として主張することができる。",c3:"３．売買契約の目的不動産について隠れた瑕疵があり，買主が損害賠償請求権を有する場合には，売主の代金請求権と買主の損害賠償請求権は同時履行の関係にある。",c4:"４．売主が目的物の引渡しについて履行の提供をした場合でも，その提供が継続されていないときは，買主は同時履行の抗弁権を失わない。",c5:"５．売買契約の目的不動産について抵当権の登記があるときは，買主は，抵当権消滅請求の手続が終わるまで，代金の支払を拒むことができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2017",num:"27",subject:"min",q:`Ａ所有の甲土地をＢがＣに対して売り渡す旨の契約（以下「本件売買契約」という。）が締結された場合に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．本件売買契約が締結された時に，Ａが甲土地を他の者に譲渡する意思がなく，ＢがＡから甲土地の所有権を取得することができない場合であっても，本件売買契約は有効に成立する。
イ．Ｂが死亡し，ＡがＢを単独で相続したときは，Ａは，Ｃに対し，甲土地の売主としての履行を拒むことはできない。
ウ．Ｃが甲土地の引渡しをＢから受けるのと同時にＢに対して甲土地の代金を支払ったが，Ｂが甲土地の所有権を取得することができなかったことから，Ｃは，本件売買契約を解除した。その後，ＣがＡから甲土地の引渡しを請求されたときは，Ｃは，Ｂから甲土地の代金の返還を受けるまで，甲土地を留置することができる。
エ．本件売買契約が締結された時にＢが甲土地の所有権がＢに属しないことを知らず，Ｃが甲土地の所有権がＢに属しないことを知っていた場合において，Ｂが甲土地の所有権を取得してＣに移転することができないときは，Ｂは，Ｃに対し，甲土地の所有権を移転することができない旨を通知して，本件売買契約を解除することができる。
オ．Ｃが本件売買契約の締結時に甲土地の所有権がＢに属しないことを知らなかった場合において，Ｂが甲土地の所有権を取得してＣに移転することができないときは，Ｃは，甲土地の所有権がＢに属しないことを知った時から１年以内に限り，本件売買契約を解除することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2017",num:"28",subject:"min",q:`請負に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．請負人は，仕事の目的物の引渡しを要する場合には，これを引き渡した後でなければ，報酬を請求することができない。
イ．請負人が仕事の目的物を引き渡した場合において，その目的物に瑕疵があり，注文者が瑕疵の修補に代わる損害賠償を請求したときは，注文者は，その賠償を受けるまでは報酬全額の支払を拒むことができる。
ウ．建築請負の目的物である建物に重大な瑕疵があって建て替えるほかはない場合であっても，注文者は，請負人に対し，建物の建替えに要する費用相当額の損害賠償を請求することはできない。
エ．請負人の担保責任の存続期間は，これを契約で伸長することができない。
オ．請負人が仕事を完成しない間は，注文者は，いつでも損害を賠償して契約の解除をすることができるが，契約の目的である仕事の内容が可分である場合において，請負人が既に仕事の一部を完成させており，その完成部分が注文者にとって有益なものであるときは，未完成部分に限り，契約を解除することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2017",num:"29",subject:"min",q:`寄託に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。なお，次のアからエまでの各記述の寄託は，消費寄託ではないものとする。
ア．受寄者は，無償で寄託を受けた場合には，自己の財産に対するのと同一の注意をもって，寄託物を保管すれば足りる。
イ．寄託者は，有償か無償かを問わず，過失なく寄託物の性質若しくは瑕疵を知らなかったとき，又は受寄者がこれを知っていたときを除いて，寄託物の性質又は瑕疵によって生じた損害を受寄者に賠償しなければならない。
ウ．受寄者は，寄託者の承諾を得なければ，寄託物を使用し，又は第三者にこれを保管させることができない。
エ．受寄者は，寄託物の返還時期の定めがあるときであっても，寄託者に対して返還する旨の通知をした後，相当の期間が経過すれば，返還時期の前に寄託物を返還することができる。
オ．消費寄託における寄託者は，寄託物の返還時期の定めがあるときであっても，いつでも寄託物の返還を請求することができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2017",num:"30",subject:"min",q:`Ａが運転するタクシーとＢが運転するタクシーが衝突する交通事故（以下「本件事故」という。）が発生し，Ａが運転するタクシーの乗客Ｃが負傷し，Ｃに３００万円の損害が生じた。本件事故についての過失割合は，Ａが４割で，Ｂが６割であり，Ｃに過失はなかった。この事例に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＣがＡに対して本件事故後３年以内に損害賠償を請求する訴訟を提起すれば，ＣのＢに対する損害賠償請求権の消滅時効も中断する。
イ．ＢがＣに対して損害賠償債務の弁済として１００万円の支払をした場合には，Ｂは，Ａに対し，４０万円を求償することができる。
ウ．Ｂが，Ｃとの間で，ＢがＣに対して２００万円を支払うとともに，ＣがＡの損害賠償債務及びＢのその余の損害賠償債務を免除する旨の和解契約を締結した場合であっても，Ｃは，Ａに対し，１００万円の支払を求めることができる。
エ．Ａに使用者Ｄがおり，Ｄが本件事故について使用者責任を負う場合において，ＤがＣに対して損害賠償債務の弁済として３００万円を支払ったときは，Ｄは，Ａに対し，信義則上相当と認められる限度において求償することができる。
オ．Ｂに使用者Ｅがおり，Ｅが本件事故について使用者責任を負う場合において，ＡがＣに対して損害賠償債務の弁済として３００万円を支払ったときは，Ａは，Ｅに対し，１８０万円を求償することができる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2017",num:"31",subject:"min",q:`Ａ男はＢ女と婚姻したが，Ｂには姉Ｃと妹Ｄがおり，Ｃには配偶者Ｅがいる。その後，Ａは，Ｂの同意を得て，Ｆを養子としたが，その縁組前からＦには子Ｇがいた。この場合に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＥはＡの親族である。
イ．ＧはＡの親族ではない。
ウ．Ｂが死亡した場合，Ａが姻族関係を終了させる意思表示をしない限り，ＡとＣとの親族関係は終了しない。
エ．ＡがＢと離婚した後であっても，ＡはＤと婚姻することができない。
オ．家庭裁判所は，特別の事情があるときは，Ｄを扶養する義務をＡに負わせることができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2017",num:"32",subject:"min",q:`離婚に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．協議上の離婚は戸籍法の定めるところにより届け出ることによって効力を生じ，判決による離婚は離婚請求を認容する判決が確定した時に効力を生ずる。
イ．婚姻によって氏を改めた夫又は妻が，婚姻中に称していた氏を協議上の離婚後も続けて称するためには，離婚の届出をする時に併せてその届出をする必要がある。
ウ．夫婦に未成年の子がいる場合には，子の監護に要する費用の分担に関する協議が調わない限り，協議上の離婚をすることはできない。
エ．ＡＢ夫婦に未成年の子がいる場合には，協議上の離婚をする際の合意によっても，離婚後にＡＢ両名をその子の親権者と定めることはできない。
オ．裁判所は，離婚訴訟において財産分与を命ずるに当たり，当事者の一方が過当に負担した婚姻費用の清算のための給付を含めて財産分与の額及び方法を定めることができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2017",num:"33",subject:"min",q:`成年後見に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．精神上の障害により事理を弁識する能力を欠く常況にある者についても，その者の配偶者が保佐開始の審判を求める申立てをした場合には，家庭裁判所は，保佐開始の審判をすることができる。
イ．家庭裁判所が本人以外の者の請求によって，本人のために特定の法律行為について保佐人に代理権を付与する旨の審判をするには，本人の同意がなければならない。
ウ．家庭裁判所は，後見開始の審判をするときは，職権で，成年後見人を選任する。
エ．成年後見人と本人との利益が相反する行為については，成年後見人は，成年後見監督人がいる場合であっても，本人のために特別代理人を選任することを家庭裁判所に請求しなければならない。
オ．任意後見契約が登記された後に，家庭裁判所が任意後見監督人を選任した場合において，本人が任意後見人の同意を得ずに本人所有の不動産を売却する旨の売買契約を締結したときは，その売買契約は，本人が任意後見人の同意を得ずにしたことを理由に取り消すことができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2017",num:"34",subject:"min",q:`次の【事例】において，Ａを被相続人とする遺産分割におけるＢ，Ｃ及びＤの具体的相続分の額として，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。なお，遺産分割の対象となる財産並びに贈与及び遺贈の目的財産の価額は相続開始時の価額を示しており，その後に価額の変動はないものとする。
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
⑥ 家庭裁判所は，寄与分を定める処分の審判において，Ｃに３００万円の寄与分があるとの判断を示し，この審判は平成２７年３月２１日に確定した。`,c1:"１．Ｂ：１２５０万円 Ｃ：１０７５万円 Ｄ：６７５万円",c2:"２．Ｂ：１３００万円 Ｃ：１０００万円 Ｄ：７００万円",c3:"３．Ｂ：１４００万円 Ｃ： ９００万円 Ｄ：７００万円",c4:"４．Ｂ：１７５０万円 Ｃ： ３２５万円 Ｄ：９２５万円",c5:"５．Ｂ：１８００万円 Ｃ： ２５０万円 Ｄ：９５０万円",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2017",num:"35",subject:"min",q:"遺留分に関する次の１から５までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．被相続人Ａの子Ｂが相続放棄をした場合，Ｂの子Ｃが遺留分権利者となる。",c2:"２．自己を被保険者とする生命保険契約の契約者が，死亡の半年前に死亡保険金の受取人を相続人の一人に変更した場合，遺留分権利者は，その変更行為の減殺を請求することができる。",c3:"３．特別受益に当たる贈与について，贈与者である被相続人がその財産の価額を相続財産に算入することを要しない旨の意思表示（持戻し免除の意思表示）をした場合であっても，その贈与の価額は遺留分算定の基礎となる財産の価額に算入される。",c4:"４．遺留分減殺請求権は，遺留分権利者が，相続の開始を知った時から１年間行使しないときは，時効によって消滅する。",c5:"５．相続の開始前に遺留分を放棄することはできない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2017",num:"36",subject:"min",q:"団体等に関する次の１から５までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．組合の債権者は，各組合員に対して，その権利を行使することができない。",c2:"２．組合員の債権者は，組合財産に対して，その権利を行使することができる。",c3:"３．一般社団法人の債権者は，各社員に対して，その権利を行使することができる。",c4:"４．一般社団法人の社員の債権者は，法人の財産に対して，その権利を行使することができない。",c5:"５．権利能力なき社団の債権者は，各構成員に対して，その権利を行使することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2017",num:"37",subject:"min",q:`契約の第三者に対する効力に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．建物建築工事請負契約において，注文者と請負人との間に，契約が中途で解除された際の出来形部分の所有権は注文者に帰属する旨の約定がある場合に，当該契約が中途で解除されたときは，その請負人が下請負人に当該工事を請け負わせ，下請負人が自ら材料を提供して出来形部分を築造したとしても，当該出来形部分の所有権は注文者に帰属する。
イ．債務者と引受人との間の契約でする併存的債務引受は，債権者が引受けによる利益を享受する意思を表示しなくても，その効力が生ずる。
ウ．委任による代理人が適法に復代理人を選任した場合において，その復代理人が委任事務を処理するに当たり金銭その他の物を受領したときは，復代理人は，本人に対して受領物を引き渡す義務を負う。
エ．受寄者が寄託された宝石を適法に第三者に保管させたときは，その第三者は寄託者に対して，保管費用の償還を請求することができる。
オ．賃借人が適法に賃借物を転貸したときは，転借人は賃貸人に対して，賃借物の修繕を請求することができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2017",num:"1",subject:"kei",q:`次の【見解】に関する後記１から５までの各【記述】のうち，誤っているものはどれか。
【見 解】
間接正犯については，被利用者の行為時に実行の着手を認めるべきである。
【記 述】`,c1:"１．【見解】は，実行行為時と実行の着手時期が一致することを要しないとする考え方と矛盾しない。",c2:"２．【見解】に対しては，利用者にとって偶然の事情で実行の着手時期を決することになり不合理であると批判できる。",c3:"３．【見解】は，離隔犯において到達時に実行の着手を認める考え方と矛盾しない。",c4:"４．【見解】に対しては，責任無能力者を利用する場合には，責任無能力者に規範意識の障害がないというだけで，直ちに結果発生の切迫した危険があるとはいえないと批判できる。",c5:"５．【見解】は，自然的に観察して結果発生に向けた直接の原因となる行為を重視する考え方と矛盾しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2017",num:"2",subject:"kei",q:`略取，誘拐及び人身売買の罪に関する次のアからオまでの各記述を判例の立場に従って検討した場合，誤っているものの組合せは，後記１から５までのうちどれか。
ア．営利の目的で未成年者を買い受けた場合，未成年者買受け罪のみが成立する。
イ．身の代金目的誘拐罪は，近親者その他誘拐された者の安否を憂慮する者の憂慮に乗じてその財物を交付させる目的を主観的要素とする目的犯である。
ウ．身の代金目的で成年者を略取し，公訴が提起される前に同成年者を安全な場所に解放すれば，身の代金目的略取罪の刑が必要的に減軽される。
エ．未成年者誘拐罪は親告罪である。
オ．親権者は，未成年者誘拐罪の主体とはならない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2017",num:"3",subject:"kei",q:`次のアからオまでの各記述を判例の立場に従って検討した場合，正しいものの組合せは，後記１から５までのうちどれか。
ア．甲は，乙を殺害する目的で，乙を含む複数の者の飲用に供されているペットボトル内のお茶に致死量の劇薬を投入した。その結果，そのお茶を飲用した複数の者全員が死亡した。この場合，甲には，前記お茶を飲用して死亡した者の数に応じた殺人罪の故意が認められる。
イ．覚せい剤を含有する粉末を所持していた甲は，同粉末が身体に有害で違法な薬物であることは認識していたが，覚せい剤や麻薬ではないと認識していた。この場合，甲には覚せい剤取締法違反（覚せい剤所持）の罪の故意が認められる。
ウ．甲は，客観的にはわいせつな文書を，その意味内容は理解しつつも，刑法上のわいせつな文書に該当しないと考え，多数の者に販売した。この場合，甲にわいせつ物頒布罪の故意は認められない。
エ．甲は，乙宅前路上に置かれていた自転車を，乙の所有物と認識して持ち去ったが，実際には同自転車は無主物だった。この場合，甲には遺失物横領罪が成立する。
オ．甲は，第三者が起こした交通事故により瀕死の重傷を負い路上に倒れていた乙を，既に死亡していると思って山中に遺棄した。この場合，甲に死体遺棄罪は成立しない。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2017",num:"4",subject:"kei",q:"各種偽造の罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものを２個選びなさい。",c1:"１．甲は，他人の自動車運転免許証に甲の写真を貼り付けた偽造自動車運転免許証を入手し，これを携帯して自動車を運転中に検問で停止を求められ，情を知らない警察官に同免許証を真正に成立したものとして提示した。提示した時には同免許証に表示されている有効期間が経過していたとしても，甲には偽造公文書行使罪が成立する。",c2:"２．公務員でない甲は，情を知らない公務員に対し虚偽の申立てをして登記簿に不実の記載をさせ，その登記簿謄本の交付を受けた。甲には虚偽公文書作成罪の間接正犯が成立する。",c3:"３．甲は，情を知らずに釣銭として偽造通貨を受け取ったところ，その後，それが偽造通貨であることに気付いたが，行使の目的でそのまま所持した。甲には偽造通貨収得罪が成立する。",c4:"４．甲は，行使の目的で，他人が振り出した額面１０万円の小切手の金額欄に「０」を加え，額面１００万円の小切手に改ざんした。甲には有価証券変造罪が成立する。",c5:"５．弁護士資格のない甲は，Ｘ弁護士会に実在する自己と同姓同名の弁護士を装い，これを信じた乙から依頼を受けて弁護士としての業務を行った後，乙から報酬を得るために，「Ｘ弁護士会所属 弁護士甲」名義の弁護士報酬金請求書を作成した。甲には私文書偽造罪が成立しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"14"},{year:"2017",num:"5",subject:"kei",q:"正当防衛及び緊急避難に関する次の１から５までの各記述を判例の立場に従って検討し，正しいものを２個選びなさい。",c1:"１．正当防衛は，法益の侵害が現に存在している場合のほか，法益の侵害が間近に差し迫っている場合にも成立する余地があるが，緊急避難は，危難が間近に差し迫っている場合に成立する余地はない。",c2:"２．正当防衛が成立するためには，防衛行為が侵害に対する防衛手段として相当性を有するものであることを要するから，防衛行為によって生じた害が避けようとした害の程度を超えた場合に正当防衛が成立する余地はない。",c3:"３．正当防衛が成立する行為を避けるために相手方又は第三者の法益を侵害した場合，緊急避難が成立する余地があるが，正当防衛が成立する余地はない。",c4:"４．過剰避難について，その刑を減軽も免除もしないことはできるが，過剰防衛については，その刑を減軽又は免除しなければならない。",c5:"５．自然現象によって生じた法益侵害を避けるために第三者の法益を侵害した場合，緊急避難が成立する余地があるが，正当防衛が成立する余地はない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"35"},{year:"2017",num:"6",subject:"kei",q:`わいせつ物頒布等の罪に関する次のアからオまでの各記述を判例の立場に従って検討し，甲に（ ）内の罪が成立しないものの組合せは，後記１から５までのうちどれか。
ア．インターネットを介した書籍販売業を営む甲は，日本語で書かれたわいせつな文書である小説を，その購入を申し込んできた日本国内在住の多数の外国人に販売したところ，いずれの外国人も日本語の読解能力に乏しく，同小説の内容を理解できなかった。（わいせつ物頒布罪）
イ．甲は，インターネットを介して多数の希望者を募った上，その希望者らに無料で交付する目的で，わいせつな映像を記録したＤＶＤを所持した。（わいせつ物有償頒布目的所持罪）
ウ．甲は，わいせつな映像を記録したＤＶＤの販売業者に対してそのＤＶＤの購入を申し込み，これを購入した。（わいせつ物頒布罪の教唆犯）
エ．ＤＶＤのレンタル業を営む甲は，わいせつな映像を記録したＤＶＤを，多数の顧客へ有償で貸し出した。（わいせつ物頒布罪）
オ．甲がインターネットを介したわいせつな映像の販売業を営み始めたところ，その購入を申し込んできた顧客は１名だけであったが，甲は，その者に対して，電子メールに同映像のデータを添付して送信した。（わいせつ物頒布罪）`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2017",num:"7",subject:"kei",q:`次の【記述】中の①から④までの（ ）内から適切な語句を選んだ場合，その組合せとして正しいものは，後記１から５までのうちどれか。
【記 述】
被害者の同意が問題となる場合としては，一般に以下のような分類がなされている。第１は，被害者の意思に反することが構成要件要素になっている場合であり，この類型においては，被害者の同意は構成要件該当性を阻却する。窃盗罪は，この類型に①（ａ．入る・ｂ．入らない）。第２は，被害者の同意の有無が犯罪の成立に影響を及ぼさない場合である。１３歳未満の者に対するわいせつ行為は，この類型に②（ｃ．入る・ｄ．入らない）。第３は，被害者の同意がある場合とない場合が分けて規定され，被害者の同意があると軽い方の罪が成立する場合である。業務上堕胎罪は，この類型に③（ｅ．入る・ｆ．入らない）。第４は，被害者の同意が行為の違法性を阻却する場合である。住居侵入罪の「侵入」を住居権者・管理権者の意思に反する立入りと解した場合，同罪は，この類型に④（ｇ．入る・ｈ．入らない）。`,c1:"１．①ａ ②ｃ ③ｅ ④ｈ",c2:"２．①ａ ②ｃ ③ｆ ④ｈ",c3:"３．①ａ ②ｄ ③ｆ ④ｇ",c4:"４．①ｂ ②ｃ ③ｅ ④ｈ",c5:"５．①ｂ ②ｄ ③ｆ ④ｇ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2017",num:"8",subject:"kei",q:`不法領得の意思に関する次のアからオまでの各記述を判例の立場に従って検討し，正しい場合には１を，誤っている場合には２を選びなさい。
ア．甲は，町議会議員選挙に際し，特定の候補者を当選させるため，後日その候補者の氏名を記載して投票の中に混入することにより同候補者の得票数を増加させる目的で，投票所管理者乙の保管する同選挙の投票用紙を密かに持ち出した。この場合，甲に不法領得の意思は認められず，窃盗罪は成立しない。
イ．Ａ市建設部長である甲は，不正工事の発覚を恐れ自宅に隠匿する目的で，自己が業務上保管している公文書である市立小学校の設計書を市役所外に持ち出した。この場合，甲に不法領得の意思は認められず，業務上横領罪は成立しない。
ウ．甲は，自宅で分解して売却できそうな部品を中古部品屋に売却する目的で，知人乙所有の自動車を乙に無断で運転してその場から走り去った。この場合，甲に不法領得の意思は認められず，窃盗罪は成立しない。
エ．新聞購読料の集金業務に従事する甲は，購読料として集金した現金を遊興のため全額費消して横領した後，その発覚を免れる目的で，新たに購読料として集金した現金を穴埋めに充てた。この場合，穴埋めに充てた現金について，甲に不法領得の意思は認められず，業務上横領罪は成立しない。
オ．甲は，乙宛てに送達されてきた支払督促状を乙に成り済まして受領して廃棄することにより，送達が適式になされたものとして支払督促の効力を生じさせ，乙所有の財産を不正に差し押さえようと考え，郵便配達員丙を欺いて同督促状の交付を受けて廃棄した。この場合，甲に不法領得の意思は認められず，詐欺罪は成立しない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"22221"},{year:"2017",num:"9",subject:"kei",q:`没収と追徴に関する次のアからオまでの各記述を判例の立場に従って検討した場合，正しいものの組合せは，後記１から５までのうちどれか。
ア．主物を没収するときは，その従物も没収できる。
イ．判決により没収の言渡しをするためには，対象物が判決時に裁判所により押収されている必要がある。
ウ．被害者宅に侵入して行われた窃盗事犯において，被害者宅への侵入に際して道具として使用された鉄棒は，住居侵入罪について公訴提起されていなければ没収できない。
エ．窃盗によって取得された盗品は，取得物件であるが，没収できない場合がある。
オ．収賄罪において，収受した賄賂が没収不能となった時点で，収受時と比較してその価額が減じていた場合には，没収不能時の価額を追徴することになる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2017",num:"10",subject:"kei",q:"信用及び業務に対する罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．威力業務妨害罪における「威力」は，暴行又は脅迫を用いることを要し，騒音喧騒により人の意思を制圧して業務を妨害した場合，同罪は成立しない。",c2:"２．偽計業務妨害罪における「偽計」は，直接人に向けられていなくてもよい。",c3:"３．信用毀損罪における「信用」は，人の支払能力又は支払意思に対する社会的な信頼に限定されず，経済的側面とは関係のない社会的な信頼を害した場合も，同罪が成立する。",c4:"４．業務妨害罪における「業務」は，社会生活上又は個人生活上の地位に基づき反復継続して従事する事務であるから，学生の学習活動を妨害した場合も，同罪が成立する。",c5:"５．信用毀損罪は危険犯であるが，業務妨害罪は侵害犯である。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2017",num:"11",subject:"kei",q:`次の【事例】に関する後記アからエまでの各【記述】を判例の立場に従って検討し，誤っているものを全て選んだ場合の組合せは，後記１から５までのうちどれか。
【事 例】
土木作業員甲及び乙は，現場監督者丙の監督の下で，Ｘ川に架かる鉄橋の橋脚を特殊なＡ鋼材を用いて補強する工事に従事していたが，作業に手間取り，工期が迫ってきたことから，甲及び乙の２人で相談した上で，より短期間で作業を終えることができる強度の弱いＢ鋼材を用いた補強工事を共同して行った。その結果，工期内に工事を終えることはできたものの，その後発生した豪雨の際，Ａ鋼材ではなくＢ鋼材を用いたことによる強度不足のために前記橋脚が崩落し，たまたま前記鉄橋上を走行していたＶ１運転のトラックがＸ川に転落し，Ｖ１が死亡した。なお，甲及び乙は同等の立場にあり，甲及び乙のいずれについても，Ｂ鋼材を工事に用いた場合に強度不足のために前記橋脚が崩落することを予見していなかったものの，その予見可能性があったものとする。
【記 述】
ア．甲及び乙には，強度の弱いＢ鋼材で補強工事を行うことの意思連絡はあるが，不注意の共同はあり得ないから，甲及び乙に業務上過失致死罪の共同正犯が成立する余地はない。
イ．丙は，甲及び乙が強度の弱いＢ鋼材で補強工事を行っていることを認識していたが，工期が迫っていたことから，これを黙認したという場合，直接行為者である甲及び乙に過失が認められたとしても，更に丙に過失が認められる余地がある。
ウ．仮に，甲及び乙において，Ｖ１が死亡するに至る実際の因果経過を具体的に予見することが不可能であった場合，甲及び乙には業務上過失致死罪は成立しない。
エ．仮に，Ｖ１運転のトラックの荷台に，Ｖ１に無断でＶ２が乗り込んでおり，同トラックがＸ川に転落したことによって，Ｖ１及びＶ２の両名が死亡した場合，甲及び乙にはＶ２に対する業務上過失致死罪は成立しない。`,c1:"１．ア イ ウ",c2:"２．ア ウ エ",c3:"３．ア エ",c4:"４．イ ウ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2017",num:"12",subject:"kei",q:`次のアからオまでの各記述を判例の立場に従って検討し，正しい場合には１を，誤っている場合には２を選びなさい。
ア．甲は，自転車Ａが，乙が自ら窃取した自転車Ｂからサドルを取り外し，乙所有の別の自転車本体に容易に着脱可能な状態で取り付けて完成させたものであると知りつつ，乙から自転車Ａを購入した。甲には盗品等有償譲受け罪が成立する。
イ．甲は，盗品であると知りつつ，窃盗犯人乙から依頼を受けて保管していた宝石を乙に返却した後，改めて乙から依頼を受け，預かった同宝石を事情を知らない丙に売却した。甲には盗品等有償処分あっせん罪のみが成立する。
ウ．甲は，刑法第４１条の刑事未成年である乙が窃取した物を，盗品であると知りつつ，乙から無償で譲り受けた。甲には盗品等無償譲受け罪は成立しない。
エ．甲は，親族関係にない窃盗犯人乙から盗品の保管を依頼された。甲は，同盗品が，甲の実父丙の自宅から窃取された丙所有の物であると知りつつ，乙からの依頼を受け入れて，同盗品を保管した。甲は盗品等保管罪の刑が免除される。
オ．甲は，妻乙が，親族関係にない窃盗犯人丙から盗品であると知りつつ購入した物を，乙から依頼を受け，盗品であると知りつつ，乙の指定した場所まで運んだ。甲は盗品等運搬罪の刑が免除される。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"12222"},{year:"2017",num:"13",subject:"kei",q:"責任能力に関する次の１から５までの各記述を判例の立場に従って検討し，正しいものを２個選びなさい。",c1:"１．１３歳の少年であっても，事物の理非善悪を弁識する能力及びその弁識に従って行動する能力が備わっていれば，責任能力が認められることがある。",c2:"２．責任能力の有無は法律判断であり，専ら裁判所の評価に委ねられるべきであるため，その前提となる生物学的・心理学的要素についても，最終的には裁判所により判断される。",c3:"３．相手の頭部を殴打する暴行を加えた時点で行為者に責任能力が存在したとしても，その暴行により相手が死亡した時点で行為者に責任能力が存在しなければ，死亡の結果について行為者に刑事責任を問うことはできない。",c4:"４．犯行当時，行為者に重度の精神疾患があれば，そのことだけで直ちに心神喪失の状態にあったと判断されることになる。",c5:"５．飲酒の際，飲酒後に酒酔い運転をする意思が認められる場合には，実際に酒酔い運転をした時に酩酊による心神耗弱の状態にあったとしても，行為者に完全責任能力が認められることがある。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"25"},{year:"2017",num:"14",subject:"kei",q:`犯人蔵匿及び証拠隠滅の罪に関する次のアからオまでの各記述を判例の立場に従って検討した場合，正しいものの組合せは，後記１から５までのうちどれか。
ア．犯人の親族が当該犯人の利益のために犯人蔵匿罪を犯したときは，当該親族に対する刑は減軽しなければならない。
イ．犯人隠避罪の「罰金以上の刑に当たる罪を犯した者」には，犯人として既に逮捕・勾留されている者は含まれない。
ウ．証拠隠滅罪の「他人の刑事事件」は，犯人蔵匿罪と異なり，罰金以上の刑に当たる罪に限られない。
エ．証人等威迫罪の「威迫」は，相手と面会して直接なされる場合に限られ，文書を送付して相手にその内容を了知させる方法によりなされる場合を含まない。
オ．犯人が自己の刑事事件の裁判に必要な知識を有する証人を威迫した場合，証人等威迫罪が成立する。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2017",num:"15",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．甲が乙に対し，深夜の公園で待ち伏せしてＡから金品を喝取するように教唆したところ，乙は，その旨決意し，深夜の公園でＡを待ち伏せしたが，偶然通り掛かったＢをＡと誤認してＢから金品を喝取した。乙は，人違いに気付き，引き続きＡを待ち伏せして，通り掛かったＡから金品を喝取しようとしてＡを脅迫したが，Ａに逃げられてしまい金品を喝取することができなかった。甲にはＡに対する恐喝未遂罪の教唆犯のみが成立する。",c2:"２．甲が乙に対し，Ａをナイフで脅してＡから金品を強取するように教唆したところ，乙は，その旨決意し，Ａをナイフで脅したが，その最中に殺意を抱き，Ａの腹部をナイフで刺してＡに傷害を負わせ，Ａから金品を強取したものの，Ａを殺害するには至らなかった。甲には強盗罪の教唆犯が成立するにとどまる。",c3:"３．甲が乙に対し，留守宅であるＡ方に侵入して金品を窃取するように教唆したところ，乙は，その旨決意したが，Ｂ方をＡ方と誤認してＢ方に侵入し，その場にいたＢから金品を強取した。甲にはＢ方への住居侵入罪及びＢに対する窃盗罪の教唆犯が成立する。",c4:"４．甲が乙に対し，現住建造物であるＡ家屋に放火するように教唆したところ，乙は，その旨決意し，Ａ家屋に延焼させる目的で，Ａ家屋に隣接した現住建造物であるＢ家屋に放火したが，Ｂ家屋のみを焼損し，Ａ家屋には燃え移らなかった。甲にはＡ家屋に対する現住建造物等放火未遂罪の教唆犯のみが成立する。",c5:"５．甲は，土建業者ＡがＢ市発注予定の土木工事を請け負うためＢ市役所土木係員乙に現金を供与しようと考えていることを知り，乙に対し，Ａに工事予定価格を教える見返りとしてＡから現金を受け取り，Ａに工事予定価格を教えるように教唆したところ，乙は，その旨決意し，Ａとの間で，Ａに工事予定価格を教える旨約束して，Ａから現金１００万円を受け取ったが，その後，工事予定価格を教えなかった。甲には加重収賄罪の教唆犯が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2017",num:"16",subject:"kei",q:`次の【見解】に関する後記アからオまでの各【記述】のうち，正しいものの組合せは，後記１から５までのうちどれか。
【見 解】
横領罪の目的物は，犯人が占有する他人の物であり，物の給付者において民法上その返還を請求できるものであることを要しないので，不法な目的で金銭を委託した場合，委託者に返還請求権が認められなくても，受託者がこれを領得する行為には，横領罪が成立する。
【記 述】
ア．この【見解】に対しては，民法第７０８条にいう「給付」に「委託」は含まれないとする立場を前提としなければならず，妥当でないとの批判ができる。
イ．この【見解】は，使途を定めて委託された金銭の所有権は受託者に移転しないとする立場と明らかに矛盾するものである。
ウ．この【見解】に対しては，受託者が民法第７０８条に基づいて委託者からの返還請求を拒む行為にも横領罪が成立することになりかねず，妥当でないとの批判ができる。
エ．この【見解】は，横領罪の保護法益が所有権であることを重視し，委託信任関係の破壊という点を全く考慮していない。
オ．この【見解】に対しては，不法原因給付の目的物の所有権は，給付者において給付した物の返還を請求できないことの反射的効果として，受給者に帰属するに至ったと解すべきであるとする立場を前提とすると，横領罪にいう「他人の物」を領得したわけではないのに受託者に横領罪の成立を認めることになり，妥当でないとの批判ができる。
（参照条文）民法
第７０８条　不法な原因のために給付をした者は，その給付したものの返還を請求することができない。ただし，不法な原因が受益者についてのみ存したときは，この限りでない。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2017",num:"17",subject:"kei",q:`次のアからオまでの各事例における甲の罪責について，判例の立場に従って検討し，（ ）内の犯罪が既遂になる場合には１を，未遂にとどまる場合には２を，既遂にも未遂にもならない場合には３を選びなさい。
ア．甲は，会社事務所内において現金を窃取して，戸外に出たところを警備員乙に発見されて取り押さえられそうになったため，逮捕を免れようと考え，乙に対し，刃体の長さ２０センチメートルの出刃包丁をその腹部に突き付け，「ぶっ殺すぞ。」と怒鳴り付けたが，偶然その場を通り掛かった警察官に取り押さえられ，逮捕を免れることができなかった。（事後強盗罪）
イ．甲は，行使の目的で，カラープリンターを用いて，複写用紙に真正な千円札の表面及び裏面を複写して千円札を偽造しようとしたが，カラープリンターの操作を誤ったため，完成したものは，一般人がこれを一見した場合に真正な千円札と誤認する程度の外観を備えたものではなかった。（通貨偽造罪）
ウ．甲は，通行中の乙に因縁を付けて乙から現金を脅し取ろうと考え，乙に対し，「俺をにらんできただろ。金を払えば許してやる。金を出せ。」などと大声で怒鳴り付けて反抗を抑圧するに至らない程度の脅迫を加え，同脅迫により畏怖した乙は，甲に現金を直接手渡さなかったものの，甲が乙のズボンのポケットから乙が所有する現金在中の財布を抜き取って持ち去るのを黙認した。（恐喝罪）
エ．甲は，知り合いの女性乙を自己が運転する自動車に乗せて同車内において強いて姦淫しようと考え，乙に対し，「自宅まで送ってあげる。」とうそを言ったところ，乙は，これを信じて同車に乗り込んだが，甲の態度を不審に思い即座に同車から降りた。（強姦罪）
オ．甲は，会社事務所にある現金を窃取する目的で，門塀に囲まれ，警備員が配置されて出入りが制限されている同事務所の敷地内に塀を乗り越えて立ち入ったが，同事務所の建物に立ち入る前に警備員に発見され敷地外に逃走した。（建造物侵入罪）`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"12131"},{year:"2017",num:"18",subject:"kei",q:"名誉毀損罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．摘示される「事実」は，非公知のものでなければならないから，公知の事実を摘示した場合には，名誉毀損罪は成立しない。",c2:"２．事実の摘示が「公然」といえるためには，摘示内容を不特定かつ多数人が認識し得る状態にあったことが必要であるから，不特定ではあるが，少数人しか認識し得ない状態にとどまる場合には，名誉毀損罪は成立しない。",c3:"３．名誉の主体である「人」は，自然人に限られるから，法人の名誉を毀損した場合には，名誉毀損罪は成立しない。",c4:"４．死者の名誉を毀損したとしても，虚偽の事実を摘示した場合でなければ処罰されないから，摘示した事実が真実である場合には，名誉毀損罪として処罰されない。",c5:"５．人の名誉を侵害するに足りる事実を公然と摘示したとしても，現実に人の名誉が侵害されていない場合には，名誉毀損罪は成立しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2017",num:"19",subject:"kei",q:`
学生Ａ，Ｂ及びＣは，次の【事例】における甲の罪責について，後記【会話】のとおり検討している。【会話】中の①から⑤までの（ ）内から適切な語句を選んだ場合，正しいものの組合せは，後記１から５までのうちどれか。
【事 例】
甲は，乙がＶに対して暴行を加えていたところに通り掛かり，乙との間で共謀を遂げた上，乙と一緒にＶに対して暴行を加えた。Ｖは，甲の共謀加担前後にわたる一連の暴行を加えられた際に１個の傷害を負ったが，Ｖの傷害が，甲の共謀加担前の乙の暴行により生じたのか，甲の共謀加担後の甲又は乙の暴行により生じたのかは，証拠上不明であった。
【会 話】
学生Ａ．私は，共犯は自己の行為と因果関係を有する結果についてのみ責任を負うという見解に立ち，後行者は，共謀加担前の先行者の暴行により生じた傷害結果には因果性を及ぼし得ないと考えます。事例の場合，甲には①（ａ．暴行罪・ｂ．傷害罪）の共同正犯が成立すると考えます。事例とは異なり，Ｖの傷害が甲の共謀加担後の甲又は乙の暴行により生じたことが証拠上明らかな場合，甲には傷害罪の共同正犯が②（ｃ．成立する・ｄ．成立しない）と考えます。
学生Ｂ．Ａ君の見解に対しては，甲に対する傷害罪の成立範囲が③（ｅ．狭く・ｆ．広く）なり過ぎるとの批判が可能ですね。
学生Ｃ．私は，事例の場合には，同時傷害の特例としての刑法第２０７条が適用され，甲は，Ｖの傷害結果について責任を負うと考えます。その理由の一つとして，仮に甲が乙と意思の連絡なく，Ｖに暴行を加えた場合に比べ，事例における甲が④（ｇ．不利・ｈ．有利）に扱われることになるのは不均衡であると考えられることが挙げられます。
学生Ｂ．乙には，甲の共謀加担前後にわたる一連の暴行の際にＶに生じた傷害結果についての傷害罪が成立するのであり，傷害結果について責任を負う者が誰もいなくなるわけではないということは，Ｃ君の⑤（ｉ．見解に対する批判・ｊ．見解の根拠）となり得ますね。`,c1:"１．①ａ ②ｃ ③ｅ ④ｈ ⑤ｉ",c2:"２．①ｂ ②ｄ ③ｆ ④ｇ ⑤ｊ",c3:"３．①ａ ②ｃ ③ｆ ④ｇ ⑤ｊ",c4:"４．①ｂ ②ｃ ③ｅ ④ｈ ⑤ｉ",c5:"５．①ａ ②ｃ ③ｅ ④ｇ ⑤ｊ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2017",num:"20",subject:"kei",q:`次の【事例】に関する後記１から５までの各【記述】を判例の立場に従って検討し，正しいものを２個選びなさい。
【事 例】
　甲は，覚せい剤の密売人である乙から，偽造した１万円札と引換えに覚せい剤をだまし取ろうと考え，１万円札の偽造に使用する目的で，作業部屋を自己名義で賃借した上，印刷機及び印刷用紙を購入して同部屋に運び込み，それらを使用して１万円札１００枚を偽造した。（①）
　その後，甲は，ホテルの部屋で乙と会い，乙に対し，１００万円相当の覚せい剤（以下「本件覚せい剤」という。）の代金として，偽造した１万円札１００枚を渡した。乙は，甲から渡された１万円札が偽札であることに気付かずに，甲に対し，本件覚せい剤を渡し，甲は，これを持って同部屋を出た。（②）
　甲は，本件覚せい剤をホテルの駐車場に駐車中の自己の自動車内に置いたところ，甲が乙に渡した１万円札が偽札であることに気付いて追い掛けてきた乙から，本件覚せい剤を返還するように求められた。甲は，本件覚せい剤の返還を免れるため，殺意をもって乙の首を両手で絞めて乙を殺害した。（③）
　その数日後，甲は，本件覚せい剤を所持しているのを警察官に現認され，覚せい剤取締法違反の現行犯人として逮捕され，Ａ警察署に連行された。警察官丙は，Ａ警察署の取調室において，甲の弁解録取手続を行い，甲の供述内容を弁解録取書に記載した上，同弁解録取書を甲に手渡して内容の確認を求めたところ，甲は，署名押印する前に同弁解録取書を両手で破った。（④）
　甲は，同取調室から逃げ出し，Ａ警察署の敷地外に出た。（⑤）
【記 述】`,c1:"１．①について，甲が作業部屋を自己名義で賃借した行為は，通貨偽造罪の予備行為に該当することから，その段階で甲には通貨偽造等準備罪が成立する。",c2:"２．②について，甲には詐欺罪が成立し，偽造通貨行使罪は詐欺罪に吸収される。",c3:"３．③について，覚せい剤は，法定の除外事由なく所持することが禁じられた物であるが，甲は，本件覚せい剤の返還を免れるために乙を殺害していることから，甲には強盗殺人罪が成立する。",c4:"４．④について，丙が作成した弁解録取書には，甲の署名押印がないが，甲の供述内容が記載されていることから，甲には公用文書等毀棄罪が成立する。",c5:"５．⑤について，甲は，逮捕中に逃走し，Ａ警察署の敷地外に出ていることから，甲には単純逃走罪が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"34"},{year:"2016",num:"1",subject:"ken",q:`私人間における人権保障に関する次のアからウまでの各記述について，判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい｡
ア．企業者は，雇用の自由を有するから，労働者の思想，信条を理由として雇入れを拒んでも当然に違法ということはできないが，労働者の採否決定に当たり，その思想，信条を調査し，労働者に関連事項の申告を求めることまでは許されない。
イ．大学は，その設置目的を達成するため，必要な事項を定めて学生を規律する権能を有するから，私立大学が，その伝統，校風や教育方針に鑑み，学内外における学生の政治的活動につき，かなり広範な規律を及ぼしても，直ちに不合理ということはできない。
ウ．長期間にわたり形成された地方の慣習に根ざした権利である入会権については，その慣習が存続しているときは最大限尊重すべきであるから，権利者の資格を原則として男子孫に限る旨の特定の地域団体における慣習も，直ちに公序良俗に反するとはいえない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"212"},{year:"2016",num:"2",subject:"ken",q:`憲法の明文で規定されていない権利・自由に関する次のアからウまでの各記述について，判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい｡
ア．前科は人の名誉，信用に直接関わる事項であり，前科のある者もこれをみだりに公開されないという法的保護に値する利益を有するが，「裁判所に提出するため」との申出理由の記載があれば，市区町村長が弁護士法に基づく照会に応じて前科を報告することは許される。
イ．大学が講演会を主催する際に集めた参加学生の学籍番号，氏名，住所及び電話番号は，個人の内心に関する情報ではなく，大学が個人識別を行うための単純な情報であって，秘匿の必要性が高くはないから，プライバシーに係る情報として法的保護の対象にならない。
ウ．個人の私生活上の自由の一つとして，何人もその承諾なしにみだりにその容ぼう・姿態を撮影されない自由を有するが，速度違反車両の自動撮影を行う自動速度監視装置による写真撮影は，犯罪捜査の必要性・相当性があるから，本人の同意や裁判官の令状がなくても許される。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2016",num:"3",subject:"ken",q:`法の下の平等に関する次のアからウまでの各記述について，判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい｡
ア．憲法は，外国人を日本国民と全く平等に扱うことまでは要求していないが，我が国に入国する全ての外国人に対し，法律により，日本国民と異なる規制を設けることは，人種的な差別をする趣旨ではなくても，憲法第１４条第１項後段の「人種」による差別として許されない。
イ．選挙権の平等には各選挙人の投票価値の平等も含まれるが，国会によって定められた選挙制度における投票価値が不平等であっても，その不平等が国会の有する裁量権の行使として合理的と認められるのであれば，憲法第１４条に違反しない。
ウ．条例においては，一定の取締規定を設け，法律による委任の範囲で，その違反に対する罰則を規定することが許されるが，禁錮又は懲役の刑は，全国一律に規律すべきものと解されるので，それぞれの条例の間で法定刑が異なる場合は，憲法第１４条に違反する。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"6"},{year:"2016",num:"4",subject:"ken",q:`都立高等学校の校長が教諭に対し，卒業式における国歌斉唱の際に国旗に向かって起立し国歌を斉唱することを命じた職務命令が，憲法第１９条に違反するか否かについて判示した最高裁判所の判決（最高裁判所平成２３年５月３０日第二小法廷判決，民集６５巻４号１７８０頁）に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい｡
ア．卒業式等の式典における国歌斉唱の際の起立斉唱行為は，一般的，客観的に見て，これらの式典における慣例上の儀礼的な所作としての性質を有するものであり，校長の職務命令は，「日の丸」や「君が代」に関する当該教諭の歴史観ないし世界観それ自体を否定するものということはできない。
イ．国旗に向かって起立し国歌を斉唱する行為は，一般的，客観的に見て，特定の思想の表明として外部から認識されるものと評価すべきであり，卒業式等の式典における国歌斉唱の際の起立斉唱行為が職務命令に従って行われたものと外部から認識することも困難であって，校長の職務命令は，特定の思想の有無について告白することを強要する面がある。
ウ．卒業式等の式典における国歌斉唱の際の起立斉唱行為は，一般的，客観的に見て，国旗及び国歌に対する敬意の表明の要素を含む行為であり，歴史観ないし世界観との関係で「日の丸」や「君が代」に敬意を表明することには応じ難いと考える者が上記行為を求められることは，思想及び良心の自由についての間接的な制約となる面があることは否定し難い。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"121"},{year:"2016",num:"5",subject:"ken",q:`信教の自由に関する次のアからウまでの各記述について，判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい｡ 
ア．神社において死者の合祀を行うことが遺族である配偶者の心の静謐を害する場合，その遺族は，静謐な宗教的環境の下で信仰生活を送るべき利益である宗教的人格権を侵害されたと主張して，損害賠償を請求できる。
イ．僧侶が病者の平癒を祈願して加持祈祷を行うに当たり，病者の手足を縛って線香の火に当てるなどして同人を死亡させることは，医療上一般に承認された治療行為とは到底認められず，信教の自由の保障の限界を逸脱したものであって許されない。
ウ．宗教法人法の解散命令によって宗教法人を解散しても，信者は，法人格を有しない宗教団体を存続させたり宗教上の行為を行ったりすることができるので，宗教上の行為を継続するに当たり何ら支障はない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"212"},{year:"2016",num:"6",subject:"ken",q:`知る権利に関する次のアからウまでの各記述について，判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．様々な意見，知識，情報の伝達の媒体である新聞紙等の閲読の自由が憲法上保障されるべきことは，表現の自由を保障した憲法第２１条の規定の趣旨，目的から，いわばその派生原理として当然に導かれるものである。
イ．新聞等の記事が特定の者の名誉ないしプライバシーに重大な影響を及ぼし，その者に対する不法行為が成立する場合には，具体的な成文法がなくても，反論権の制度として，反論文掲載請求権が認められる。
ウ．自己の思想，意見を形成するために自由な情報の受領は不可欠であるから，特に，国の政府機関が保有する情報の開示請求権は，これを具体化する法律がない場合であっても，当然に具体的権利として認められ，司法上の救済を受けることができる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"4"},{year:"2016",num:"7",subject:"ken",q:`学問の自由に関する次のアからウまでの各記述について，判例の趣旨に照らして，正しいものには○を，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい｡
ア．学問の自由は，学問的研究の自由とその研究成果の発表の自由を指しており，憲法第２３条は大学が学術の中心として深く真理を探究することを本質とすることに鑑みて規定されたものであるから，同条の保障は大学の教授や研究者を対象とするものであり，国民一般はその保障の対象ではない。
イ．大学における学問の自由を保障するために伝統的に大学の自治が認められているところ，学内集会について大学の自治の保障が及ぶか否かの判断に当たって，その集会の目的や性格を考慮することは，学内で行われる活動をその思想内容に着目して規制することになり，大学の自治を認めた趣旨に抵触するから，許されない。
ウ．普通教育の場において使用される教科書は学術研究の結果の発表を目的とするものではなく，教科書検定は，記載内容がいまだ学界において支持を得ていないとき，あるいは当該教科課程で取り上げるにふさわしい内容と認められないときなど一定の検定基準に違反する場合に，教科書の形態における研究結果の発表を制限するにすぎないから，憲法第２３条に反しない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2016",num:"8",subject:"ken",q:`生存権に関する次の見解に対する論評としてなされた次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい｡
「憲法第２５条の生存権を具体化する趣旨の法律が制定された以上，その法律は憲法第２５条と一体をなし，かかる法律の定める保護基準を正当な理由なくして引き下げることは憲法上許されない。」
ア．この見解に対しては，憲法第２５条第１項が禁止しているのは「健康で文化的な最低限度の生活」の水準を下回ることだけであり，保護基準の引下げによってもかかる水準を上回る場合にまで，正当な理由を必要とする根拠は同条項から導くことはできないとの批判が可能である。
イ．この見解は，憲法第２５条を具体化する立法措置の選択決定は立法府の広い裁量に委ねられているとした，最高裁判所の判決（最高裁判所昭和５７年７月７日大法廷判決，民集３６巻７号１２３５頁）の趣旨から論理的に導くことができる。
ウ．この見解によれば，過去の国会の判断が現在及び将来の国会を拘束することになるが，憲法第２５条を具体化する趣旨の法律についてのみ，かかる拘束が憲法上要請されていると解することは困難であるとの批判が可能である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"121"},{year:"2016",num:"9",subject:"ken",q:`労働基本権に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい｡
ア．公務員の争議行為の制限は国民生活全体の利益を維持増進する必要との調和の見地から合理性の認められる必要最小限度のものでなければならず，職務の性質や違いを考慮することなく公務員の争議行為を一律に禁止することは憲法上許されないとするのが判例の立場である｡
イ．憲法により団結権が保障されている労働組合においては，組合の目的の範囲内にある活動であれば，その全ての活動について組合員に対して統制権を行使し得るから，労働組合が統制権に基づいて組合員を除名した処分には司法審査が及ばない。
ウ．憲法第２８条が保障する労働基本権は，使用者との関係において労働者の権利を保護することを目的の一つとするので，私人相互の関係でも意味を持ち，契約自由の原則は制限されることになる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"221"},{year:"2016",num:"10",subject:"ken",q:`人身の自由に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい｡
ア．警察官が，酒気を帯びて車両を運転するおそれがあると認めて呼気検査を求めたのに対し，これを拒否した者を処罰する道路交通法の規定は，「何人も，自己に不利益な供述を強要されない」と定める憲法第３８条第１項の規定に違反しない。
イ．刑事被告人は，公費で自己のために強制的手続により証人を求める権利を有する（憲法第３７条第２項）から，裁判所は刑事被告人が自身の弁護のために必要であると主張している証人全員の尋問を採用しなければならない。
ウ．有罪判決を受けた刑事被告人に対し，裁判所に出廷させた証人に旅費，日当及び宿泊料を負担させることは，「刑事被告人は，公費で自己のために強制的手続により証人を求める権利を有する」と定める憲法第３７条第２項の規定に違反しない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"3"},{year:"2016",num:"11",subject:"ken",q:`憲法の規範内容が踏みにじられたり不当に変質させられたりしないようにする様々な国法上の工夫は，広く「憲法の保障」と言われるが，その代表的な方法や考え方に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい｡
ア．国家緊急権は，外敵の侵入，内乱や大規模な災害などにより国家の存立が脅かされる事態に至った場合に執り得る非常措置権とされるが，平常時における立憲主義の一時停止を認める権限であるから，憲法の明文で国家緊急権を容認している例は諸外国にもない。
イ．抵抗権は，政府による権力の濫用によって立憲主義秩序が破壊された場合に国民がそれに反抗する権利とされるが，実力の行使を伴う危険なものであるから，権利として実定法化することは不可能である。
ウ．憲法の連続性を維持するための特別な手続を定める憲法改正規定や憲法の最高法規性を確保するために特別な合憲性統制の途を設ける違憲審査制は，ともに憲法の保障の一つの方法として位置付けられる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"221"},{year:"2016",num:"12",subject:"ken",q:`天皇が国会開会式に出席した上で述べる「おことば」の憲法上の位置付けに関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい｡
ア．「おことば」を象徴としての地位に基づく公的行為であると捉える見解については，象徴としての地位が天皇の一身専属のものであることを前提にすると，天皇の権能を代行する摂政は「おことば」を述べることができないのではないかという問題点がある。
イ．「おことば」を国事行為である国会の召集（憲法第７条第２号）と密接に関連する行為として準国事行為と位置付ける見解については，「おことば」について内閣による「助言と承認」を通じたコントロールを及ぼす余地がなくなるという問題点がある。
ウ．「おことば」は国事行為である「儀式を行ふ」（憲法第７条第１０号）に含まれるという見解については，上記「儀式を行ふ」を「儀式を主宰する」という意味に解すると，文理上無理があるという問題点がある。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"3"},{year:"2016",num:"13",subject:"ken",q:`憲法第９条の解釈に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい｡
ア．第１項で，侵略戦争は放棄されているが，自衛戦争は放棄されていないとし，第２項の「前項の目的を達するため」を，侵略戦争放棄の目的を達するためとする見解に対しては，日本国憲法には，第６６条第２項の文民条項以外に戦争や軍隊を予定する規定が存在しないとの批判が当てはまる。
イ．第１項で，侵略戦争は放棄されているが，自衛戦争は放棄されていないとし，第２項の「前項の目的を達するため」を，戦争を放棄するに至った動機を一般的に指すとする見解に対しては，国際法上の用例によると，「国際紛争を解決する手段としての戦争」は「国家の政策の手段としての戦争」と同義であり，こうした用例を尊重すべきであるとの批判が当てはまる。
ウ．第１項で，侵略戦争は放棄されているが，自衛戦争は放棄されていないとし，第２項の「前項の目的を達するため」を，戦争を放棄するに至った動機を一般的に指すとする見解と，第１項で，自衛戦争を含む全ての戦争が放棄されているとする見解のいずれの見解を採っても，憲法第９条により，全ての戦争が放棄されているとの結論が導かれる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"3"},{year:"2016",num:"14",subject:"ken",q:`いわゆる在外邦人選挙権制限違憲訴訟上告審判決（最高裁判所平成１７年９月１４日大法廷判決，民集５９巻７号２０８７頁）に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい｡
ア．前記判決は，国政選挙の選挙権について，「国民の国政への参加の機会を保障する基本的権利として議会制民主主義の根幹を成すものであり，民主国家においては，一定の年齢に達した国民の全てに平等に与えられるべきものである」と指摘しているが，同判決の考え方に従ったとしても，自ら選挙の公正を害する行為をした者の選挙権について一定の制限をすることまで違憲となるわけではない。
イ．比例代表選出議員の選挙と異なり，衆議院小選挙区選出議員の選挙及び参議院選挙区選出議員の選挙については，選挙権を行使する者が日本国内の特定地域に現に居住していることを前提としているから，上記判決の考え方に従ったとしても，衆議院小選挙区選出議員の選挙及び参議院選挙区選出議員の選挙における在外日本国民の選挙権の行使を制限することまで違憲となるわけではない。
ウ．前記判決は，在外日本国民の選挙権行使を制限する公職選挙法の規定について違憲と判断したものであるが，「仮に当該立法の内容又は立法不作為が憲法の規定に違反するものであるとしても，それゆえに国会議員の立法行為又は立法不作為が直ちに違法の評価を受けるものではない」として，立法不作為を理由とする国家賠償請求は認めなかった。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"122"},{year:"2016",num:"15",subject:"ken",q:`議院の自律権に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい｡
ア．議員の資格争訟の裁判について規定している憲法第５５条は，議員資格に関する判断を議院の自律的な審査に委ねる趣旨のものであるが，議員の選挙に関する争訟の裁判は裁判所の権限に属するので，各議院の下した議員資格に関する判断についても裁判所で争うことができる。
イ．議院の規則制定について規定している憲法第５８条第２項は，各議院が独立して議事を審議し議決する以上，当然のことを定めた規定であり，「各々その会議その他の手続及び内部の規律に関する」事項について，原則として両議院の自主的なルールに委ねる趣旨である。
ウ．議員の懲罰について規定している憲法第５８条第２項は，議院がその組織体としての秩序を維持し，その機能の運営を円滑ならしめるためのものであるため，議場内に限らず，議場外の行為でも懲罰の対象となるが，会議の運営と関係のない個人的行為は懲罰の対象とならない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"5"},{year:"2016",num:"16",subject:"ken",q:`内閣及び内閣総理大臣に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい｡
ア．大日本帝国憲法において内閣総理大臣は同輩中の首席にすぎなかったのに対し，日本国憲法が内閣総理大臣に首長としての地位を認め，その権限を強化しているのは，内閣の一体性と統一性を確保し，内閣の国会に対する連帯責任の強化を図るものである。
イ．判例によれば，内閣総理大臣は，閣議にかけて決定した方針が存在しない場合においても，少なくとも内閣の明示の意思に反しない限り，行政各部に対し，随時その所掌事務について一定の方向で処理するよう指導，助言等の指示を与える権限を有する。
ウ．内閣は，憲法第７３条第１号により法律を執行する義務を負うから，たとえ内閣が違憲と判断する法律であっても，その法律を執行しなければならず，また，最高裁判所が違憲と判断した場合でも，国会がその法律を改廃しない限りは，その執行をしなければならない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2016",num:"17",subject:"ken",q:`違憲審査に関する次のアからウまでの各記述について，判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい｡
ア．第三者の所有物を没収する言渡しを受けた被告人は，当該第三者の権利を援用して，所有者に対し何ら告知，弁解，防御の機会を与えることなくその所有権を奪うことは憲法に違反する旨主張することはできない。
イ．嫡出でない子の相続分を嫡出子の相続分の２分の１とする民法の規定は，遅くとも同規定が違憲とされた事案の被相続人の相続が開始した時点において，憲法第１４条第１項に違反していたとする最高裁判所の決定は，当該事案限りのものであって，先例としての事実上の拘束性はない。
ウ．日本国民である父と外国人である母との間に生まれた嫡出でない子につき，父母の婚姻及びその認知等所定の要件を備えた場合に届出により日本国籍が取得できる旨定めた国籍法（平成２０年法律第８８号による改正前のもの。以下同じ。）第３条第１項は，憲法第１４条第１項に違反するが，血統主義を補完するために出生後の国籍取得の制度を設けた国籍法の趣旨に照らし，同法第３条第１項を全部無効とする解釈は採り得ない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"221"},{year:"2016",num:"18",subject:"ken",q:`政党が党員にした処分に対する裁判所の審査権に関する次のアからウまでの各記述について，判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい｡
ア．政党の党員が，その政党の存立や秩序維持のために，自己の権利や自由に制約を受けることがあることは当然であり，政党が組織内の自律的運営として党員に対して行った処分の当否については，原則として自律的な解決に委ねるのが相当である。
イ．政党が党員に対して行った処分が，一般市民法秩序と直接の関係を有しない政党の内部的な問題にとどまるものである場合，裁判所は，その処分を司法審査の対象とするか否かについて，処分の内容や制約される党員の権利の性質等を考慮して，個別に判断するべきである。
ウ．政党が党員に対して行った処分が，党員の一般市民としての権利利益を侵害すると認められる場合，その処分は司法審査の対象となり，裁判所は，政党の有する内部規律に関する決定権に照らしてその処分の内容が合理的か否かについて審査するべきである。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"122"},{year:"2016",num:"19",subject:"ken",q:`予算に関し，法律とは別個の国法上の独自の形式であると解する見解（予算法形式説）があるが，次のアからウまでの各記述について，かかる見解からの記述として正しいものには○を，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．後法は前法に優位するという原則に基づき，法律を予算により変更することが可能となり，予算と法律の不一致を合理的に解決できる。
イ．予算案の議決方法は，原則として，法律案に関する憲法第５９条第１項で示されており，憲法第６０条は，その例外的な方法のみを示したものと解される。
ウ．国法の公布について定める憲法第７条第１号に「予算」が掲げられていない以上，予算の公布が憲法上義務付けられていると解することはできない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2016",num:"20",subject:"ken",q:`条約に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい｡
ア．締結について国会の承認を要する条約は，条約，規約，協約，協定，議定書，宣言，憲章など名称の如何を問わず，国会による承認の手続のほかに，天皇の国事行為としての批准書の認証を要する。
イ．条約の締結に必要な国会の承認については，予算の場合と同様，衆議院の優越が認められており，両議院が異なる議決をした場合，衆議院で出席議員の３分の２以上の多数で再び可決したときは，条約が承認される。
ウ．憲法は，文書による国家間の合意の全てについて，国会の承認を要すると定めたものではなく，既に有効に成立している条約の委任に基づいた細部の取決めについては，国会の承認まで要しない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"221"},{year:"2016",num:"1",subject:"min",q:`未成年者に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。なお，本問では，婚姻による成年擬制を考慮する必要はない。
ア．未成年者は，養親となることができない。
イ．１５歳に達した未成年者は，遺言の証人となることができる。
ウ．一種又は数種の営業を許された未成年者は，その営業に関しては，成年者と同一の行為能力を有する。
エ．未成年者は，法定代理人の同意を得ずにした法律行為を単独で取り消すことができる。
オ．未成年者は，代理人となることができない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2016",num:"2",subject:"min",q:`錯誤に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．法律行為の要素に錯誤が生じ，その錯誤により意思表示をした場合であっても，その意思表示の時から２０年が経過すれば，表意者は，錯誤による意思表示の無効を主張することができない。
イ．相手方の詐欺により法律行為の要素に錯誤が生じ，その錯誤により意思表示をした場合であっても，表意者は，錯誤による意思表示の無効を主張することができる。
ウ．Ａを売主，Ｂを買主とする売買契約に基づく商品の売買代金をＣが立替払する旨の契約がＢＣ間で締結され，ＢのＣに対する立替金償還債務をＤが連帯保証した場合において，Ｄが，ＣＤ間の連帯保証契約締結当時，実際にはＡＢ間の売買契約が存在しないことを知らなかったときは，Ｄは，ＣＤ間の連帯保証契約について錯誤による無効を主張することができる。
エ．他にも連帯保証人となる者がいるとの債務者の説明を信じて連帯保証人となった者は，特にその旨が表示され連帯保証契約の内容とされていたとしても，連帯保証契約について錯誤による無効を主張することができない。
オ．Ａの所有する甲土地の売買契約が，Ｂを売主，Ｃを買主として成立した場合において，Ｃは，ＢＣ間の売買契約締結当時，甲土地がＢの所有するものでなければ売買をしない旨の意思表示をしたとしても，ＢＣ間の売買契約について錯誤による無効を主張することができない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2016",num:"3",subject:"min",q:`意思表示に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．成年被後見人であるＡがＢから日用品を買い受けた場合，Ａが成年被後見人であることをＢが知らなかったとしても，Ａの成年後見人Ｃは，当該日用品の売買契約を取り消すことができる。
イ．ＡがＢから契約解除の意思表示を受けた時にＡが成年被後見人であった場合，Ａの成年後見人ＣがＢの契約解除の意思表示を知るまで，当該契約解除の効力は生じない。
ウ．Ａが隔地者Ｂに対し契約申込みの通知を発した後，Ａが行為能力を喪失した場合，Ｂがその事実を知っていたとしても，当該契約申込みの効力は生じる。
エ．Ａが隔地者Ｂに対し契約解除の通知を発した後，Ａが行為能力を喪失した場合，Ｂがその事実を知っていたとしても，当該契約解除の効力は生じる。
オ．Ａが隔地者Ｂに対し契約承諾の通知を発した後，Ａが行為能力を喪失した場合，Ｂがその事実を知っていたとしても，当該契約は成立する。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2016",num:"4",subject:"min",q:`代理に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．無権代理行為の相手方は，代理人が代理権を有しないことを過失によって知らなかったときは，民法上の無権代理人の責任を追及することができない。
イ．代理権は，代理人が後見開始の審判を受けたときは消滅する。
ウ．成年後見人は，やむを得ない事由があるときでなければ，復代理人を選任することができない。
エ．委任による代理人がやむを得ない事由があるため復代理人を選任した場合，復代理人は，復代理の委任事務を処理するのに必要と認められる費用を支出したときであっても，本人に対し，その費用の償還を直接請求することはできない。
オ．Ａの代理人ＢがＣの詐欺により売買契約を締結した場合，Ｂは当該売買契約を取り消すことができるが，Ａは当該売買契約を取り消すことができない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2016",num:"5",subject:"min",q:`時効の援用に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．抵当不動産の第三取得者は，その抵当権の被担保債権の消滅時効を援用することができる。
イ．先順位抵当権の被担保債権の消滅により後順位抵当権者に対する配当額が増加する場合，当該後順位抵当権者は，先順位抵当権の被担保債権の消滅時効を援用することができる。
ウ．詐害行為の受益者は，詐害行為取消権を行使している債権者の被保全債権について，その消滅時効を援用することができない。
エ．譲渡担保権者が被担保債権の弁済期後に譲渡担保の目的物を第三者に譲渡したときは，その第三者は譲渡担保権設定者が譲渡担保権者に対し有する清算金支払請求権の消滅時効を援用することができる。
オ．建物の敷地所有権の帰属につき争いがある場合において，その敷地上の建物の賃借人は，建物の賃貸人が敷地所有権を時効取得しなければ建物賃借権を失うときは，建物の賃貸人による敷地所有権の取得時効を援用することができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2016",num:"6",subject:"min",q:"物権的請求権に関する次の１から４までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．Ａ所有の甲土地上に権原なく乙建物を所有しているＢがＣに乙建物を売却した場合において，ＣがＢからの乙建物の所有権移転登記を経由していないときは，Ａは，Ｃに対し，乙建物の収去及び甲土地の明渡しを求めることができない。",c2:"２．Ａ所有の甲土地上に権原なく乙建物を所有しているＢがＣに乙建物を売却し，ＣがＢからの乙建物の所有権移転登記を経由した後，ＣがＤに乙建物を売却した場合には，ＤがＣからの乙建物の所有権移転登記を経由していないときであっても，Ａは，Ｃに対し，乙建物の収去及び甲土地の明渡しを求めることができない。",c3:"３．Ａがその所有する甲土地をＢに賃貸し，Ｂが甲土地を自動車の駐車場として利用していたところ，甲土地の賃借権の登記がされない間に，ＡがＣに対し甲土地を売却した場合において，ＣがＡからの甲土地の所有権移転登記を経由していないときは，Ｂは，Ｃからの甲土地の明渡請求を拒むことができる。",c4:"４．Ａ所有の甲土地に隣接する乙土地の所有者であるＢが乙土地を掘り下げたために，両土地の間に高低差が生じ，甲土地が崩落する危険が生じている場合において，その危険が生じた時から２０年を経過した後にＡがＢに対し甲土地の崩落防止措置を請求したときは，Ｂはその請求権の消滅時効を援用することができる。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2016",num:"7",subject:"min",q:`登記請求権及び物権的請求権に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡがＢ所有の甲土地をＢから買い受け，ＢからＡへの所有権移転登記を経由した後に，ＡＢ間の売買契約が解除された場合，Ｂは，Ａに対し，甲土地の所有権移転登記の抹消登記手続を請求することができる。
イ．ＡがＢとの間の売買契約に基づき買い受けた甲土地がＢの所有でなかった場合，Ａは，Ｂに対し，甲土地の所有権移転登記手続を請求することができない。
ウ．動産質権者は，第三者に質物の占有を奪われたときは，質権に基づきその質物の返還を請求することができる。
エ．判例によれば，抵当不動産の所有者Ａから占有権原の設定を受けてこれを占有するＢに対し，抵当権者Ｃが抵当権に基づく妨害排除請求権を行使することができる場合，Ａにおいて抵当権に対する侵害が生じないように抵当不動産を適切に維持管理することが期待できないときには，Ｃは，Ｂに対し，直接自己への抵当不動産の明渡しを請求することができる。
オ．地役権者は，承役地を不法占拠している者に対し，地役権に基づき，自己への承役地の明渡しを請求することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2016",num:"8",subject:"min",q:`甲土地を所有するＡには，その妻Ｂとの間に子Ｃ及びＤがいる。この場合において，Ａが死亡したときの不動産物権変動に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ｃが相続放棄をした後に，甲土地について法定相続分に応じた持分の割合により相続登記をした上で，甲土地の４分の１の持分をＥに売却し，ＣからＥへの持分移転登記を経由した場合，Ｅは，Ｂ及びＤに対し，甲土地について４分の１の持分の取得を主張することができる。
イ．ＡがＥに甲土地を遺贈し，遺言により指定された遺言執行者Ｆがある場合において，Ｂが，甲土地について法定相続分に応じた持分の割合により相続登記をした上で，甲土地の２分の１の持分をＧに売却し，ＢからＧへの持分移転登記を経由したときは，Ｅは，Ｇに対し，甲土地の所有権の取得を主張することができる。
ウ．Ｂ，Ｃ及びＤの遺産分割協議により，甲土地はＢが取得することとされた場合であっても，その後，Ｄが，甲土地について法定相続分に応じた持分の割合により相続登記をした上で，甲土地の４分の１の持分をＥに売却し，ＤからＥへの持分移転登記を経由したときには，Ｅは，Ｂに対し，甲土地について４分の１の持分の取得を主張することができる。
エ．Ａが「甲土地はＣに相続させる」旨の遺言をしていた場合において，Ｂが，甲土地について法定相続分に応じた持分の割合により相続登記をした上で，甲土地の２分の１の持分をＥに売却し，ＢからＥへの持分移転登記を経由したときには，Ｃは，Ｅに対し，甲土地の所有権の取得を主張することができない。
オ．Ｄが甲土地を単独で相続した旨の不実の登記をした上で，甲土地をＥに売却し，ＤからＥへの所有権移転登記を経由した場合，Ｂは，Ｅに対し，甲土地について２分の１の持分の取得を主張することができない。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2016",num:"9",subject:"min",q:`動産の即時取得に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａがその占有する時計をＢに売却した場合において，Ｂが，即時取得により当該時計の所有権を取得したことを主張するためには，当該時計の引渡しの当時，自己に過失がなかったことを立証しなければならない。
イ．Ａがその占有する時計をＢに売却した場合において，Ｂが，当該時計の引渡しの当時，当該時計の所有者がＡであることに疑いを持っていたときは，Ｂは即時取得により当該時計の所有権を取得することができない。
ウ．Ａがその占有する時計をＢに売却した場合において，その売買契約の際に，以後ＡがＢのために占有する意思を表示したが，当該時計の引渡しが現実にされていないときは，Ｂは即時取得により当該時計の所有権を取得することができない。
エ．Ａ所有の土地上にある立木を，Ｂが，Ｂ所有の土地上にあるものと過失なく信じて伐採した場合には，Ｂは，即時取得により当該伐木の所有権を取得する。
オ．Ａがその占有する中古自動車をＢに売却し，現実に引き渡した場合において，当該中古自動車につき道路運送車両法による登録がされていたときは，Ｂは，即時取得により当該中古自動車の所有権を取得することができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2016",num:"10",subject:"min",q:`相隣関係及び地役権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．共有物の分割によって袋地（他人の土地に囲まれて公道に通じない土地）が生じた場合，当該袋地の所有者は，囲繞地（袋地を囲んでいる土地）のうち，他の分割者の所有地についてのみ無償の通行権を有するが，その通行権は，他の分割者の所有地について売買がされた場合には消滅する。
イ．袋地の所有権を取得した者は，所有権取得登記を経由していなくても，囲繞地の所有者及び囲繞地につき利用権を有する者に対して，公道に至るため囲繞地を通行する権利を主張することができる。
ウ．甲土地を所有するＡは，甲土地の賃借人であるＢがＣ所有の乙土地の上に通路を開設した場合であっても，Ａがその通路の利用を２０年間続けていたときには，甲土地を要役地，乙土地を承役地とする通行地役権の時効取得を主張することができる。
エ．甲土地を所有するＡと，乙土地を所有するＢとの間で，甲土地を要役地，乙土地を承役地とする通行地役権設定の合意がされたが，通行地役権の設定登記がない場合，その後，Ａから甲土地を譲り受けたＣは，甲土地の所有権移転の登記を経由しても，Ｂに対し，通行地役権を主張することができない。
オ．甲土地をＡとＢが共有する場合において，Ｂが，甲土地を要役地，Ｃ所有の乙土地を承役地とする通行地役権を時効により取得したときは，Ａも，甲土地を要役地，乙土地を承役地とする通行地役権を取得する。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2016",num:"11",subject:"min",q:"担保物権に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．同一不動産上の先取特権，質権及び抵当権の優先権の順位は，当該各担保物権の登記の前後によって決まる。",c2:"２．留置権，先取特権，質権及び抵当権には，いずれも物上代位性が認められる。",c3:"３．留置権は，占有を第三者に奪われた場合も消滅しないが，その場合には，第三者に対抗することができない。",c4:"４．留置権者及び抵当権者は，いずれも目的物の競売を申し立てることができる。",c5:"５．動産先取特権は，動産質権に優先する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2016",num:"12",subject:"min",q:`留置権及び質権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．民法上の留置権の成立には，目的物と牽連性のある債権の存在及び債権者による目的物の占有が必要であるが，その債権の成立時に債権者が目的物を占有している必要はない。
イ．質権者が任意に質権設定者に質物を返還した場合，質権は消滅する。
ウ．必要費償還請求権を被担保債権として建物を留置している留置権者は，その建物のための必要費を更に支出した場合，後者の必要費償還請求権を被担保債権として留置権を行使することはできない。
エ．仮登記担保権の実行により不動産の所有権を取得した仮登記担保権者が，債務者に清算金を支払わないでその不動産を第三者に譲渡した場合，債務者は，清算金支払請求権を被担保債権として，譲受人たる第三者に対し，その不動産につき留置権を行使することができる。
オ．質権の目的物を所有する債務者が，質権者に対して被担保債権を消滅させずに目的物の返還を求める訴訟を提起した場合に質権の主張が認められるときは，債務者の請求は棄却されるが，留置権の目的物を所有する債務者が，留置権者に対して被担保債権を消滅させずに目的物の返還を求める訴訟を提起した場合に留置権の主張が認められるときは，引換給付判決がされる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2016",num:"13",subject:"min",q:`先取特権に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．建物の賃貸人は，賃借人が賃料を支払わない場合，敷金を受け取っており，未払賃料額が敷金額の範囲内であっても，賃借人が当該建物に備え付けた動産について先取特権を行使することができる。
イ．建物の賃借人が，家具店から購入して当該建物に備え付けたタンスについて未だ売買代金を支払わず，かつ，建物の賃料の支払も怠っている場合，家具店が当該タンスについて有する先取特権は，建物の賃貸人が当該タンスについて有する先取特権に優先する。
ウ．会社の従業員は，会社が給料を支払っていない場合，その給料債権につき，未払となっている期間にかかわらず，当該会社の総財産について先取特権を有する。
エ．会社が，電器店から購入した冷蔵庫の売買代金を支払わず，かつ，従業員への給料も支払っていない場合，電器店が当該冷蔵庫について有する先取特権は，従業員が当該冷蔵庫について有する先取特権に優先する。
オ．債務者が約定担保物権，留置権及び特別の先取特権の目的とされていない不動産と動産を有している場合，一般の先取特権者は，まず不動産から弁済を受け，なお不足がある場合に動産から弁済を受ける。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2016",num:"14",subject:"min",q:"抵当権に関する次の１から４までの各記述のうち，正しいものはどれか。",c1:"１．抵当権は，目的物の交換価値を把握する権利であるから，被担保債権額が抵当不動産の価格を上回っていても，物上保証人が抵当不動産の価格に相当する額を弁済すれば，抵当権は消滅する。",c2:"２．抵当権の被担保債権について不履行があった場合であっても，抵当権の効力は，その後に生じた抵当不動産の果実には及ばない。",c3:"３．抵当権者が第三取得者に対して代価弁済の請求をした場合，第三取得者は，その請求に応じなければならない。",c4:"４．第一順位の抵当権者の被担保債権が弁済により消滅した場合，第二順位の抵当権者は，消滅した第一順位の抵当権の抹消登記手続を求めることができる。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2016",num:"15",subject:"min",q:"Ａは，Ｂに対する６００万円の債権を担保するため，Ｂ所有の甲土地及び乙土地に，第一順位の共同抵当権を有している。Ｃは，Ｂに対する４００万円の債権を担保するため，甲土地に，第二順位の抵当権を有している。この場合に関する次の１から４までの各記述のうち，誤っているものはどれか。なお，各記述において，競売の結果として債権者に配当することが可能な金額は，甲土地につき５００万円，乙土地につき１０００万円であり，また，各債権者が有する債権の利息及び損害金は考慮しないものとする。",c1:"１．Ａが甲土地及び乙土地に設定された抵当権を同時に実行した場合，Ａは甲土地から２００万円，乙土地から４００万円の配当を受け，Ｃは甲土地から３００万円の配当を受けることができる。",c2:"２．先に甲土地に設定された抵当権が実行されてＡが５００万円の配当を受け，その後に乙土地に設定された抵当権が実行された場合，Ａは１００万円の配当を受け，Ｃは３００万円の配当を受けることができる。",c3:"３．先に乙土地に設定された抵当権が実行された場合，Ａは６００万円の配当を受け，その後に甲土地に設定された抵当権が実行されたときには，Ｃは３００万円の配当を受けることができる。",c4:"４．Ａが乙土地に設定された抵当権を放棄した後に，甲土地に設定された抵当権が実行された場合，Ａは２００万円の配当を受け，Ｃは３００万円の配当を受けることができる。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2016",num:"16",subject:"min",q:`根抵当権に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．根抵当権者は，元本確定前の根抵当権の全部又は一部を譲渡することができるが，その場合，根抵当権設定者の承諾を得る必要はない。
イ．元本確定前において，根抵当権の担保すべき債権の範囲の変更をするときは，後順位抵当権者の承諾を得なければならない。
ウ．根抵当権の債務者の変更は，元本確定前に登記をしなかったときは，その変更をしなかったものとみなされる。
エ．根抵当権の設定時に元本確定期日を定めなかった場合，当該根抵当権の設定は無効である。
オ．元本の確定した根抵当権は，確定した元本のほか，その利息についても，極度額を限度として担保する。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2016",num:"17",subject:"min",q:"債権に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．金銭債権は，当事者の意思表示によって，不可分債権とすることはできない。",c2:"２．判例によれば，履行の場所につき別段の定めのない種類債権の目的物は，債務者が債権者の住所に目的物を発送した時に特定する。",c3:"３．不可分債権者の一人が債務者に対して債務を免除した場合であっても，他の不可分債権者は，債務者に対し，債務の全部の履行を請求することができる。",c4:"４．生命又は身体が侵害されたことによって生じた不法行為に基づく損害賠償請求権は，その性質上，第三者に譲渡することはできない。",c5:"５．債権の目的が数個の給付の中から選択によって定まるときは，その選択権は，債権者に属する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2016",num:"18",subject:"min",q:`履行の強制に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．判例によれば，不作為を目的とする債務の強制執行として間接強制をするには，債権者において，債務者がその不作為義務に違反するおそれがあることを立証すれば足り，債務者が現にその不作為義務に違反していることを立証する必要はない。
イ．判例によれば，事態の真相を告白して陳謝の意を表明する内容の謝罪広告を新聞紙に掲載すべきことを命ずる判決の執行は，間接強制によらなければならず，代替執行をすることはできない。
ウ．不作為を目的とする債務については，債務者の費用で，債務者がした行為の結果を除去することを裁判所に請求することができる。
エ．工作物の撤去を命ずる判決が確定した場合，その判決の執行は，代替執行によることができるが，間接強制によることはできない。
オ．登記義務者に対し所有権移転登記手続を命ずる判決が確定した場合，その判決の執行は間接強制によらなければならない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2016",num:"19",subject:"min",q:`債権者代位権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．債務者に代位して登記の移転を求める場合には，債権者は，第三債務者から直接自己へ登記を移転すべき旨の請求をすることはできない。
イ．債務者が既に自ら権利を行使している場合には，その行使の方法又は結果の良否にかかわらず，債権者は，その権利について債権者代位権を行使できない。
ウ．債権者Ａが債務者Ｂに代位して，Ｂの有する債権を行使した場合において，第三債務者ＣがＢに対して同時履行の抗弁を主張することができるときであっても，Ｃは，Ａに対しては，同時履行の抗弁を主張することはできない。
エ．ＡのＢに対する１００万円の債権を被保全債権として，ＢのＣに対する５０万円の債権につきＡがＣに対して債権者代位訴訟を提起したときには，Ａは，請求原因において，Ｂの無資力を主張・立証する必要はない。
オ．債権者代位権を行使するためには，被保全債権が代位行使される債権よりも先に成立している必要はない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2016",num:"20",subject:"min",q:`弁済による代位に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．債務者の意思に反することなく有効に弁済した第三者は，弁済によって当然に債権者に代位する。
イ．判例によれば，不動産を目的とする一つの抵当権が数個の債権を担保し，そのうちの一つの債権のみについての保証人が当該債権に係る残債務全額につき代位弁済した場合において，抵当権の実行による売却代金が被担保債権の全てを消滅させるに足りないときには，債権者と保証人は，両者間にその売却代金からの弁済の受領について特段の合意がない限り，その売却代金につき，債権者が有する残債権額と保証人が代位によって取得した債権額に応じて案分して弁済を受ける。
ウ．代位弁済によって，全部の弁済を受けた債権者は，債権に関する証書を代位者に交付すれば足り，自己の占有する担保物を代位者に交付する必要はない。
エ．ＡのＢに対する１２００万円の債権について，保証人Ｃ，物上保証人Ｄ（担保物の価額９００万円），物上保証人Ｅ（担保物の価額３００万円）が存在する場合，Ｃ，Ｄ及びＥの間における弁済による代位の割合は，２対３対１となる。
オ．判例によれば，保証人が債権者に代位弁済した後，債務者から当該保証人に対し一部弁済があったときは，その弁済は，保証人が代位弁済によって取得した求償権だけでなく，債権者に代位して取得した原債権に対しても弁済があったものとして，それぞれに充当される。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2016",num:"21",subject:"min",q:`保証に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．賃借人の保証人は，賃貸借契約が更新された後の賃料債務についても保証債務を負うが，賃料不払によって賃貸借契約が解除された場合，賃借人が目的物を返還しないことにより賃貸人に与えた損害の賠償については保証債務を負わない。
イ．建物賃貸借契約の存続期間中に賃借人の保証人が死亡した場合において，その相続人は，相続開始後に生じた賃借人の債務についても保証債務を負う。
ウ．身元保証契約において，使用者が，被用者に業務上不適任又は不誠実な事跡があって，そのために身元保証人の責任を惹起するおそれがあることを知ったときは，使用者は，遅滞なく身元保証人にその旨を通知しなければならない。
エ．貸金等根保証契約において元本確定期日がその貸金等根保証契約の締結の日から６年を経過する日と定められている場合，その元本確定期日は，その貸金等根保証契約の締結の日から５年を経過する日となる。
オ．根保証契約の元本確定期日前に根保証契約の主たる債務の範囲に含まれる債権が譲渡されたときは，その譲受人は，保証人に対し，当該保証債務の履行を求めることができない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2016",num:"22",subject:"min",q:`契約に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．贈与は，当事者の一方が自己の財産を無償で相手方に与える意思を表示し，相手方が受諾をすることによって，その効力を生ずるから，贈与を受ける者が贈与の申込みをし，相手方がこれを承諾しても贈与の効力は生じない。
イ．売買契約において瑕疵担保責任を免除する特約がある場合であっても，その当時売買の目的物について瑕疵があることを売主が知りながらその瑕疵があることを告げなかったときには，売主は瑕疵担保責任を免れない。
ウ．判例によれば，ＡがＢ所有の甲建物を賃貸権限を有しないＣから賃借している場合において，ＢがＡに甲建物の明渡しを求めたときは，Ａは，甲建物を使用収益することができなくなるおそれが生じたものとして，Ｃに対し，それ以降の賃料の支払を拒絶することができる。
エ．賃借人が適法に賃借物を転貸した場合において，賃貸人が賃借人に対し賃借物の修繕義務を負うときは，賃貸人は，転借人に対しても直接に賃借物の修繕義務を負う。
オ．有償の金銭消費寄託契約において，当事者が返還の時期を定めなかったときは，寄託者は，受寄者に対し相当の期間を定めて催告をしなければ，金銭の返還を請求することができない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2016",num:"23",subject:"min",q:`Ａは，Ｂとの間で，Ａの所有する著名な陶芸家の銘が入った絵皿（以下「甲」という。）をＢに３００万円で売り，代金はＢがＣに支払うとの合意をした。この事例に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡＢ間の売買契約の当時，Ｃが胎児であり，受益の意思表示をすることができなかったときは，その後Ｃが出生したとしてもＡＢ間の売買契約は無効である。
イ．ＡＢ間の売買契約が締結され，Ｃが受益の意思表示をした後，実は甲が贋作であることが判明し，ＢがＡの詐欺を理由に売買契約を取り消した場合，ＣがＡの詐欺について善意無過失であるときは，Ｂは詐欺取消しをＣに対抗することができない。
ウ．Ｃに対して債権を有するＤは，ＡＢ間の売買契約が締結された後，Ｃが受益の意思表示をせず，かつ無資力である場合には，Ｃに代位して受益の意思表示をすることができる。
エ．ＡＢ間の売買契約が締結された後，ＡがＢに甲を引き渡したにもかかわらず，ＢがＣに甲の代金３００万円を支払わない場合には，ＣはＢに催告した上，ＡＢ間の売買契約を解除することができる。
オ．ＡＢ間の売買契約が，ＡのＣに対する宝石の売買契約に基づく代金債務を弁済するために締結され，Ｃが受益の意思表示をした場合において，Ａがその目的をＢに告げていなかったときは，ＡＣ間の宝石の売買契約が無効であっても，Ｃは，Ｂに対し，甲の代金３００万円の請求をすることができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2016",num:"24",subject:"min",q:`売買に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．解約手付の授受された売買契約の買主は，自ら履行に着手した場合でも，売主が履行に着手するまでは，手付を放棄して売買契約の解除をすることができる。
イ．甲土地の売買契約がＡを売主，Ｂを買主として締結され，ＡからＢに甲土地の引渡しがされたが，甲土地がＣの所有であった場合において，Ａが甲土地の権利をＣから取得してＢに移転することができないことを理由にＢが甲土地の売買契約を解除したときは，Ｂは，Ａに対し，その解除までの間の甲土地の使用利益を返還しなければならない。
ウ．建物とその敷地の賃借権とが売買契約の目的とされた場合には，敷地に欠陥があり，賃貸人がその欠陥について修繕義務を負担するときであっても，買主は，売主に対し，その欠陥が売買の目的物の隠れた瑕疵に該当することを理由として瑕疵担保責任を追及することができる。
エ．売買契約の目的物に隠れた瑕疵がある場合において，買主がその瑕疵があることを知った時から１年以内に瑕疵担保による損害賠償の請求をしたときは，その時点で買主が目的物の引渡しを受けた時から１０年を経過していたときであっても，その損害賠償請求権につき消滅時効は完成しない。
オ．建物の強制競売の手続が開始され，借地権の存在を前提として建物の売却が実施されたことが明らかであるにもかかわらず，実際には建物の買受人が代金を納付した時点において借地権が存在しなかったことにより，建物の買受人がその目的を達することができず，かつ，債務者が無資力であるときは，建物の買受人は，強制競売による建物の売買契約を解除した上，売却代金の配当を受けた債権者に対し，その代金の返還を請求することができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2016",num:"25",subject:"min",q:`不動産賃貸借に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．建物所有を目的とする土地賃貸借の賃借人が，その親族名義で所有権保存登記をした建物を借地上に所有していても，当該借地の新取得者に対し借地権を対抗できない。
イ．自己の所有建物を賃貸して賃借人に引き渡した者が，賃貸借契約継続中に当該建物を第三者に譲渡してその所有権を移転した場合には，賃貸人たる地位を譲渡する旨の旧所有者と新所有者間の合意がなければ，賃貸人の地位は新所有者に移転しない。
ウ．対抗力のない賃借権が設定されている土地の所有権の譲渡において，新所有者が旧所有者の賃貸人としての地位を承継するには，賃借人の承諾は必要でない。
エ．土地賃貸借の賃借人は，当該土地の所有権移転に伴い賃貸人たる地位を譲り受けた者に対し，当該土地の所有権移転登記が経由されていないことを理由として，賃料の支払請求を拒むことができない。
オ．建物賃貸借契約において，当該建物の所有権移転に伴い賃貸人たる地位の承継があった場合は，承継の時点で旧賃貸人に対する未払の賃料債務があっても，旧賃貸人に差し入れられた敷金全額についての権利義務関係が新賃貸人に承継される。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2016",num:"26",subject:"min",q:`委任契約に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．委任契約を債務不履行により解除したときは，その解除は，将来に向かってのみその効力を生ずる。
イ．準委任契約は，書面でしなくてもその効力を生ずるが，委任契約は，書面でしなければ，その効力を生じない。
ウ．受任者がその委任事務処理の必要上負担した債務を委任者に対し受任者に代わって弁済することを請求する権利については，委任者がこれを受働債権として相殺することはできない。
エ．委任契約は，受任者の死亡によって終了するが，委任者の死亡によっては終了しない。
オ．受任者は，特約がなくとも，委任者に対して報酬を請求することができる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2016",num:"27",subject:"min",q:`民法上の組合に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．組合の債権者は，債権の発生の時に組合員の損失分担の割合を知らなかったときは，個々の組合員に対して等しい割合で権利を行使することができる。
イ．組合の債務者は，その債務と組合員に対する債権とを相殺することができる。
ウ．組合は，不動産について組合名義の所有権移転登記を備えることはできない。
エ．除名された組合員は，持分の払戻しを受けることができない。
オ．組合は，その目的である事業の成功によって解散する。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2016",num:"28",subject:"min",q:`不当利得に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．債務が存在しないにもかかわらず，その事実を過失により知らないで債務の弁済として給付をした者は，その給付したものの返還を請求することができない。
イ．抵当権者は，自己の抵当権が設定された不動産について競売がされた場合には，不動産競売事件の配当期日において配当異議の申出をしなかったとしても，債権又は優先権を有しないにもかかわらず配当を受けた債権者に対し，その者が配当を受けたことによって自己が配当を受けることができなかった金銭相当額の金員について不当利得返還請求をすることができる。
ウ．建物賃借人との間の請負契約に基づき，請負人が建物の修繕工事をしたが，建物賃借人が請負代金を支払わないまま無資力となった場合において，建物賃貸借契約に建物の修繕工事の費用は建物賃借人が負担するとの特約があるときは，建物賃貸人である建物所有者が対価関係なしにその工事に要した財産及び労務の提供に相当する利益を受けたかどうかにかかわらず，建物所有者は，法律上の原因なくしてその利益を受けたことになる。
エ．金銭の交付によって生じた不当利得の利益が存しないことについては，不当利得返還請求権の消滅を主張する者が主張・立証責任を負う。
オ．不当利得における悪意の受益者は，損失を被った者に対してその受けた利益に利息を付して返還しなければならないが，その者になお損害があるときは，不法行為の要件を充足していないとしても，その者に対してその損害を賠償しなければならない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2016",num:"29",subject:"min",q:"不法行為に関する次の１から５までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．不法行為による損害賠償債務は，不法行為の時に，催告を要することなく遅滞に陥る。",c2:"２．被用者の重大な過失により火災が発生した場合において，使用者にその被用者の選任及び監督について過失があるときは，使用者は，その選任及び監督についての過失が重大なものではないことを理由として，その火災により生じた損害を賠償する責任を免れることはできない。",c3:"３．事業の執行について不法行為を行った被用者が損害を賠償する責任を負うときであっても，その被用者を雇用する法人の代表者は，被用者の選任又は監督を現実に担当していなければ，被用者の不法行為について，代理監督者として損害を賠償する責任を負わない。",c4:"４．交通事故の被害者が事故に起因する後遺障害のために労働能力の一部を喪失した後，別の原因により死亡した場合，労働能力の一部喪失による財産上の損害の額の算定に当たっては，交通事故と被害者の死亡との間に相当因果関係があって死亡による損害の賠償をも請求できる場合に限り，死亡後の生活費を控除することができる。",c5:"５．自己の行為の責任を弁識するに足りる知能を備えていない未成年者の行為により火災が発生した場合において，未成年者にその火災につき重大な過失がなかったときは，その未成年者を監督する法定の義務を負う者はその火災により生じた損害を賠償する責任を負わない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2016",num:"30",subject:"min",q:`夫婦であるＡとＢの間に未成年の子Ｃがいる場合に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａが成年被後見人である場合には，Ｃに対する親権はＡの成年後見人とＢが共同で行使する。
イ．ＡとＢがいずれも１８歳である場合には，Ｃに対する親権は，Ａの親権者とＢの親権者が共同で行使し，ＡとＢのいずれにも親権者がいない場合には，家庭裁判所がＣについて未成年後見人を選任する。
ウ．Ｃが１８歳である場合には，Ａが死亡し，その後にＢの親権が停止されたときでも，Ｃは，Ｂの同意を得れば婚姻をすることができる。
エ．ＡとＢが離婚し，ＢがＣの親権者となった後に，ＢがＤと再婚し，ＣがＤの養子となった場合には，ＢとＤがＣの親権者となる。
オ．判例によれば，Ａが死亡し，その相続人がＢとＣの二人であり，ＢがＣの親権者である場合において，ＢがＡを被相続人とする相続につき自ら相続放棄をするのと同時にＣを代理してＣについて相続放棄をしたときは，Ｂ及びＣの相続放棄はいずれも有効となる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2016",num:"31",subject:"min",q:`普通養子縁組に関する次の１から４までの各記述のうち，正しいものはどれか。
`,c1:"１．養子は養親と離縁しない限り，他の者の養子になることはできない。",c2:"２．配偶者のある者が未成年者を養子とするには，配偶者の嫡出子を養子とする場合又は配偶者がその意思を表示することができない場合を除き，配偶者とともにしなければならない。",c3:"３．後見人が被後見人を養子にする場合において，その被後見人が未成年者であり，後見人と親族関係にないときは，未成年者を養子とすることについて家庭裁判所の許可を得れば，被後見人を養子とすることについて家庭裁判所の許可を得る必要はない。",c4:"４．未成年者は，父母の共同親権に服する間は，祖父母との間で養子縁組をすることができない。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2016",num:"32",subject:"min",q:`扶養に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．家庭裁判所は，特別の事情があるときは，甥と叔母との間においても，扶養の義務を負わせることができる。
イ．扶養の程度又は方法について協議が調わずに家庭裁判所の審判がされた場合には，その後事情に変更を生じたときであっても，当事者間の協議によってその変更又は取消しをすることはできない。
ウ．判例によれば，扶養権利者を扶養した扶養義務者が他の扶養義務者に対して求償する場合における各自の分担額は，扶養義務者間で協議が調わないときは，家庭裁判所がこれを定めるべきであって，地方裁判所がこれを定めることはできない。
エ．子を認知した父がその子の親権者でない場合には，その父は，その子を扶養する義務を負わない。
オ．扶養をする義務のある者が数人ある場合において，扶養をすべき者の順序について，当事者間に協議が調わないとき，又は協議をすることができないときは，家庭裁判所がこれを定める。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2016",num:"33",subject:"min",q:`共同相続に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．共同相続人であるＡとＢの間で遺産分割協議が成立した場合において，Ａがその協議において負担した債務を履行しないときであっても，ＢはＡの債務不履行を理由に遺産分割協議を解除することはできない。
イ．共同相続人は，既に成立している遺産分割協議の全部を共同相続人全員の合意により解除した上で，改めて遺産分割協議を成立させることはできない。
ウ．共同相続が生じた場合，相続人の一人であるＡは，遺産の分割までの間は，相続開始時に存した金銭を相続財産として保管している他の相続人Ｂに対して，自己の相続分に相当する金銭の支払を求めることはできない。
エ．Ａ及びＢがＣに対して４００万円の連帯債務を負担していたところ，Ａが死亡し，その妻Ｄ及び子Ｅが相続した場合，Ｃは，Ｅに対して，Ａの負担していた４００万円の債務全額の支払を請求することができる。
オ．Ａ，Ｂ及びＣが共同相続した甲土地の共有持分権をＣから譲り受けたＤが，Ａ及びＢとの共有関係の解消のためにとるべき裁判手続は，遺産分割審判である。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2016",num:"34",subject:"min",q:`遺言に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．被相続人が遺言で推定相続人を廃除する意思を表示したときは，それにより推定相続人の廃除の効力が生ずる。
イ．判例によれば，相続人による遺言書の破棄又は隠匿は，相続に関して不当な利益を目的とするものでなかったときは，相続人の欠格事由に当たらない。
ウ．被相続人は，遺言により，遺産分割の方法を定めることを第三者に委託することができる。
エ．夫婦は，同一の証書で遺言をすることができる。
オ．複数の遺贈が遺留分を侵害し，遺留分減殺請求権が行使されている場合において，遺言者がその遺言に別段の意思を表示していなかったときは，各遺贈 は ， そ の目的の価額の割合に応じて減殺される。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2016",num:"35",subject:"min",q:`地上権及び土地賃借権に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．地上権と土地賃借権は，いずれも抵当権の目的とすることができない。
イ．土地所有者は，地上権者に対し，土地を使用に適する状態にする義務を負わないが，賃貸人は，賃借人に対し，土地を使用に適する状態にする義務を負う。
ウ．地上権者は，土地所有者の承諾を得ることなく地上権を第三者に譲渡することができるが，賃借人は，賃貸人の承諾又はそれに代わる裁判所の許可を得なければ，土地賃借権を譲渡することができない。
エ．判例によれば，地上権は時効により取得できるが，土地賃借権は時効により取得できない。
オ．土地について有益費を支出し，その価格の増加が現存する場合において，地上権者と賃借人は，いずれも，その選択に従い，支出した金額又は増価額の償還を土地所有者に請求することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2016",num:"36",subject:"min",q:`Ａ所有の甲土地に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａは，ＢからＢの取引上の信用のために，甲土地の所有権を仮装譲渡するように依頼を受け，Ｂへの所有権移転登記を了した。この場合において，Ｂから甲土地を譲り受けたＣが，仮装譲渡について善意のときは，登記を備えていなくてもＡに対して甲土地の所有権取得を主張することができる。
イ．Ａは，ＢからＢの取引上の信用のために，甲土地の所有権を仮装譲渡するように依頼を受け，Ｂへの所有権移転登記を了した。この場合において，Ｂの死亡によりその単独相続人として所有権移転登記を了したＣが，仮装譲渡について善意のときは，Ａに対して甲土地の所有権を主張することができる。
ウ．Ｄは，建物所有を目的としてＡから甲土地を賃借し，甲土地上に乙建物を建築してＤ名義で乙建物の所有権保存登記を有している。Ａは，ＢからＢの取引上の信用のために，甲土地の所有権を仮装譲渡するように依頼を受け，Ｂへの所有権移転登記を了した。この場合において，Ｂから甲土地を仮装譲渡であることについて善意で譲り受けて登記を備えたＣは，仮装譲渡であることをＤが知っていたときは，甲土地の賃借権を否定することができる。
エ．Ａは，ＢからＢの取引上の信用のために，甲土地の所有権を仮装譲渡するように依頼を受け，Ｂへの所有権移転登記を了した。この場合において，Ｂから甲土地を仮装譲渡であることについて善意で譲り受けたＣから更に甲土地を譲り受けて登記を備えたＤは，仮装譲渡について悪意であったとしても甲土地の所有権を取得する。
オ．Ｄは，建物所有を目的としてＡから甲土地を賃借し，甲土地上に乙建物を建築してＤ名義で乙建物の所有権保存登記を有している。Ｄは，ＢからＢの取引上の信用のために，乙建物の所有権を仮装譲渡するように依頼を受け，Ｂへの所有権移転登記を了した。この場合において，仮装譲渡であることを知らなかったＡは，Ｂに対して，賃借権の譲渡を承諾し，地代の支払を求めることができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2016",num:"1",subject:"kei",q:`学生Ａ，Ｂ及びＣは，不真正不作為犯の作為義務違反に関して次の【会話】のとおり検討している。【会話】中の①から⑤までの（ ）内から適切な語句を選んだ場合，正しいものの組合せは，後記１から５までのうちどれか。ただし，【会話】中の「法律上の防止義務」とは，法令，法律行為，条理等に基づき法益侵害を防止する法的義務をいい，また，いずれの事例も結果回避は容易であったとする。
【会 話】
学生Ａ．「甲は，人通りの多い市街地で自動車を運転していた際，誤って乙を跳ねて重傷を負わせたが，怖くなったことから，乙を放置したまま逃走したところ，乙が死亡した。」という事例において，殺人罪の成否に関し，不真正不作為犯の作為義務を検討してみよう。私は，不真正不作為犯の作為義務違反は，法律上の防止義務を負う者が，法益侵害への因果関係を具体的・現実的に支配している状況下で防止措置を採らなかった場合に認められると考えるので，甲には作為義務違反が①（ａ．認められる・ｂ．認められない）ことになる。
学生Ｂ．私は，不真正不作為犯の作為義務違反は，法律上の防止義務を負う者が，既に発生している法益侵害の危険を利用する意思で防止措置を採らなかった場合に認められると考えるので，この事例では，甲には作為義務違反が②（ａ．認められる・ｂ．認められない）ことになる。
学生Ｃ．私は，不真正不作為犯の作為義務違反は，法益侵害に向かう因果の流れを自ら設定した者が，その法益侵害の防止措置を採らなかった場合に認められると考えるので，この事例では，甲には作為義務違反が③（ａ．認められる・ｂ．認められない）ことになる。
学生Ａ．次に，「一人暮らしをしている丙は，自宅に遊びに来ていた丁が帰った後，丁のたばこの火の不始末でカーテンが燃えているのに気付いたが，家に掛けてある火災保険の保険金を手に入れようと考え，そのまま放置して外出したところ，カーテンの火が燃え移って家が全焼した。」という事例において，非現住建造物等放火罪の成否に関し，不真正不作為犯の作為義務を検討してみよう。Ｃ君の立場からだと，丙には作為義務違反が④（ａ．認められる・ｂ．認められない）ことになるよね。
学生Ｂ．先ほど話した私の立場からは，今の事例では，丙には作為義務違反が⑤（ａ．認められる・ｂ．認められない）ことになる。`,c1:"１．①ａ ②ｂ ③ａ ④ａ ⑤ｂ",c2:"２．①ａ ②ａ ③ｂ ④ａ ⑤ｂ",c3:"３．①ｂ ②ａ ③ａ ④ｂ ⑤ｂ",c4:"４．①ｂ ②ｂ ③ａ ④ｂ ⑤ａ",c5:"５．①ｂ ②ｂ ③ｂ ④ａ ⑤ａ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2016",num:"2",subject:"kei",q:`次のアからオまでの各記述を判例の立場に従って検討し，甲に横領罪が成立する場合には１を，成立しない場合には２を選びなさい。
ア．甲は，自己が所有する不動産を乙に売却したが，乙への所有権移転登記が完了する前に，同不動産を丙に売却し，丙への所有権移転登記を完了した。
イ．甲は，所有権留保の約定付き割賦売買契約に基づき２４回の月賦払いで，自動車販売会社から自動車を購入し，同自動車の引渡しを受けたが，３回分を支払った時点で，自己の借金の担保として，同自動車を金融業者に提供した。
ウ．甲は，乙から盗品を売却するよう依頼され，同盗品を丙に売却したが，その売却代金を着服した。
エ．甲は，自己が所有する不動産を乙に売却したが，乙への所有権移転登記が完了する前に，丙との間で金銭消費貸借契約を締結した事実及びその担保として同不動産に係る抵当権設定契約を締結した事実がないにもかかわらず，同不動産について，丙を権利者とする不実の抵当権設定仮登記を完了した。
オ．甲は，自己が所有する不動産について，乙を権利者とする抵当権を設定したが，その抵当権設定登記が完了する前に，同不動産について，丙を権利者とする抵当権を設定し，その抵当権設定登記を完了した。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"11112"},{year:"2016",num:"3",subject:"kei",q:`次の【事例】に関する後記１から５までの各記述のうち，甲に窃盗罪の従犯の成立を肯定する論拠となり得ないものはどれか。
【事 例】
甲は，乙又は乙の友人が窃盗罪を犯そうとしていることを知り，その手助けのため，乙に対し，同罪の遂行に必要な道具を貸したところ，さらに，乙はその道具を友人丙に貸し，丙がこれを用いて同罪を犯した。なお，丙には同罪の正犯が成立し，乙にはその従犯が成立するものとする。`,c1:"１．従犯には独立した犯罪性が認められる。",c2:"２．従犯の幇助には，教唆者を教唆した者については正犯の刑を科すとする刑法第６１条第２項のような規定がない。",c3:"３．共犯は修正された構成要件に該当する行為であるところ，従犯もその構成要件においては「正犯」となる。",c4:"４．幇助は正犯を容易にすることであるという定義からすると，幇助行為が直接的になされたか，間接的になされたかは必ずしも問われない。",c5:"５．教唆犯に対する幇助行為は従犯として処罰される。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2016",num:"4",subject:"kei",q:`文書偽造の罪に関する次のアからオまでの各記述を判例の立場に従って検討した場合，Ｘに（ ）内の罪が成立しないものの組合せとして正しいものは，後記１から５までのうちどれか。
ア．医師Ｘは，Ｙに依頼され，Ｙが保険会社に提出するために虚偽の病名を記載した診断書を作成した。（虚偽診断書作成罪）
イ．Ｘは，自動車運転免許の効力停止中に自動車を運転し，速度違反の取締りを受けた際，警察官に対し，あらかじめＹから名義使用の承諾を受けていたことから，Ｙの氏名を名乗り，交通事件原票の供述者欄にＹ名義で署名押印した。（有印私文書偽造罪）
ウ．Ｙの代理人でないＸは，Ｙに無断で，行使の目的をもって，金銭消費貸借契約書用紙に「Ｙ代理人Ｘ」と記載し，その横に「Ｘ」と刻した印鑑を押すなどして，Ｙを債務者とする金銭消費貸借契約書を作成した。（有印私文書偽造罪）
エ．Ｘは，身分証明書として使おうと考え，Ａ県公安委員会が発行したＹの自動車運転免許証の写真をＸの写真に貼り替えた。（有印公文書偽造罪）
オ．Ｘは，Ｙの所有する不動産を勝手に売却しようと考え，Ｙに無断で，行使の目的をもって，不動産の売買契約書用紙に売主として「Ｙ」と記載するなどして，同不動産の売買契約書を作成したが，「Ｙ」と刻した印鑑は押さなかった。（無印私文書偽造罪）`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2016",num:"5",subject:"kei",q:"因果関係に関する次の１から５までの各記述を判例の立場に従って検討し，正しいものを２個選びなさい。",c1:"１．甲が，殺害目的でＶの首を両手で絞め，失神してぐったりとしたＶを死んだものと誤解し，死体を隠すつもりでＶを雪山に運んで放置したところ，Ｖは意識を回復しないまま凍死した。甲がＶの首を両手で絞めた行為とＶの死亡との間には，因果関係がない。",c2:"２．甲が，心臓発作を起こしやすい持病を持ったＶを突き飛ばして尻餅をつくように路上に転倒させたところ，Ｖはその転倒のショックで心臓発作を起こして死亡した。Ｖにその持病があることを甲が知り得なかった場合でも，甲がＶを突き飛ばして路上に転倒させた行為とＶの死亡との間には，因果関係がある。",c3:"３．甲は，Ｖの頸部を包丁で刺し，Ｖは，同刺創に基づく血液循環障害による脳機能障害により死亡した。その死亡するまでの経過は，Ｖは，受傷後，病院で緊急手術を受けて一命をとりとめ，引き続き安静な状態で治療を継続すれば数週間で退院することが可能であったものの，安静にすることなく病室内を歩き回ったため治療の効果が上がらず，同脳機能障害により死亡したというものであった。この場合でも，甲がＶの頸部を包丁で刺した行為とＶの死亡との間には，因果関係がある。",c4:"４．甲は，深夜，市街地にある道幅の狭い車道上に無灯火のまま駐車していた普通乗用自動車の後部トランクにＶを閉じ込めて監禁したが，数分後，たまたま普通乗用自動車で通り掛かった乙が居眠り運転をして同車を甲の普通乗用自動車の後部トランクに衝突させ，Ｖは全身打撲の傷害を負い死亡した。甲がＶをトランクに監禁した行為とＶの死亡との間には，因果関係がない。",c5:"５．甲は，ホテルの一室で未成年者Ｖに求められてその腕に覚せい剤を注射したところ，その場でＶが錯乱状態に陥った。甲は，覚せい剤を注射した事実の発覚を恐れ，そのままＶを放置して逃走し，Ｖは覚せい剤中毒により死亡した。Ｖが錯乱状態に陥った時点で甲がＶに適切な治療を受けさせることによりＶを救命できた可能性が僅かでもあれば，甲がＶを放置した行為とＶの死亡との間には，因果関係がある。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"23"},{year:"2016",num:"6",subject:"kei",q:`住居を侵す罪に関する次のアからオまでの各記述を判例の立場に従って検討し，正しい場合には１を，誤っている場合には２を選びなさい。
ア．強盗の意図を隠してＡ方の玄関前で「こんばんは。」と言ったところ，来客と勘違いしたＡから「どうぞお入りください。」と言われてＡ方住居に立ち入った場合，住居侵入罪が成立する。
イ．建造物への立入りが平穏な態様で行われた場合には，管理権者があらかじめ立入り拒否の意思を積極的に明示していない限り，建造物侵入罪が成立することはない。
ウ．平穏を害する態様での住居への立入りであっても，住居権者の同意に基づくものである場合には，住居侵入罪の構成要件には該当するが，違法性が阻却される。
エ．現金自動預払機が設置されている銀行支店出張所は，一般の利用客の立入りが許容されている場所であるので，同機を利用する客のキャッシュカードの暗証番号等を盗撮する目的で立ち入っても，平穏な態様での立入りであれば，建造物侵入罪が成立することはない。
オ．住居権者の意思に反して住居に立ち入った上，その後，退去を求められたにもかかわらず数日間にわたってその住居に滞留した場合には，住居侵入罪だけでなく，不退去罪も成立する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"12222"},{year:"2016",num:"7",subject:"kei",q:"罪数に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．甲は，偽造された１万円札を使って価格１万円の商品をだまし取ろうと考え，事情を知らない商店の店員Ａに対し，同商品の購入を申し込み，代金として同１万円札を渡して，Ａから同商品の交付を受けた。甲には，詐欺罪と偽造通貨行使罪が成立し，これらは観念的競合となる。",c2:"２．甲は，Ａを監禁するために逮捕し，それに引き続きＡを監禁した。甲には，逮捕罪と監禁罪が成立し，これらは牽連犯となる。",c3:"３．甲及び乙は，共同でＡの身体に危害を加える目的で，凶器として用いる鉄パイプをそれぞれ準備して集合し，その後，その目的を遂げるため，鉄パイプで代わる代わるＡの身体を殴打して傷害を負わせた。甲には，凶器準備集合罪と傷害罪が成立し，これらは牽連犯となる。",c4:"４．甲は，Ａを監禁してＡから金品を喝取しようと考え，Ａをビルの一室に閉じ込めて監禁し，その上で，同室内において，監禁により畏怖していたＡに対し，金品の交付を要求しながら脅迫して畏怖させ，Ａから金品を脅し取った。甲には，監禁罪と恐喝罪が成立し，これらは牽連犯となる。",c5:"５．甲は，ＡがＢ銀行に預け入れていた預金を不正に払い戻して金銭を得る目的で，Ａから，Ｂ銀行が発行したＡ名義の預金通帳を窃取した上，Ｂ銀行の窓口において，行員に対し，Ａに成り済まして，同預金通帳を使って預金を不正に払い戻して金銭を得た。甲には，窃盗罪と詐欺罪が成立し，これらは併合罪となる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2016",num:"8",subject:"kei",q:"わいせつの罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，誤っているものはどれか。",c1:"１．甲は，人通りの多い駅構内において，自己の性器を露出させたが，実際には，それに気付いた人はいなかった。この場合，甲には公然わいせつ罪は成立しない。",c2:"２．甲は，日本国外で販売する目的で，日本国内において，わいせつな映像が録画されたＤＶＤを所持した。この場合，甲にはわいせつ物有償頒布目的所持罪は成立しない。",c3:"３．甲は，友人乙からの土産に対するお礼として，わいせつな映像が録画されたＤＶＤ１枚を乙にプレゼントした。この場合，甲にはわいせつ物頒布罪は成立しない。",c4:"４．甲は，不特定多数の通行人を勧誘して５名の客を集めた上，自宅であるマンションの一室において，外部との出入りを完全に遮断した状態で，わいせつな映像が録画されたＤＶＤを再生し，その５名の客に有料で見せた。この場合，甲にはわいせつ物公然陳列罪が成立する。",c5:"５．甲は，海水浴場において，不特定多数の者の面前で，乙女の衣服を全てはぎ取るなどして強いてわいせつな行為をした。この場合，甲には，強制わいせつ罪が成立するのみならず，公然わいせつ罪も成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2016",num:"9",subject:"kei",q:"正当防衛及び緊急避難に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．国家的法益を防衛するための正当防衛が成立する余地はない。",c2:"２．相手方から急迫不正の侵害を受け，第三者の所有物を用いて相手方に反撃し，同所有物を損壊した場合において，その行為が器物損壊罪の構成要件に該当するとき，その行為につき緊急避難が成立する余地はない。",c3:"３．相手方から急迫不正の侵害を受け，これに逆上して相手方に反撃を加えた場合，正当防衛が成立する余地はない。",c4:"４．相手方から急迫不正の侵害を受け，相手方に反撃を加えた場合，その侵害が相手方の過失に基づくものであれば，正当防衛が成立する余地はない。",c5:"５．正当防衛が成立する行為に対しては，正当防衛が成立する余地はない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2016",num:"10",subject:"kei",q:"公務執行妨害罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．窃盗犯人甲は，その窃盗行為を目撃した警ら中の制服警察官乙からその窃盗の機会に現行犯逮捕されそうになり，逮捕を免れるため，乙に対して，その反抗を抑圧するに足りる程度の暴行を加えて抵抗し，そのまま逃走した。甲には事後強盗罪が成立し，これに公務執行妨害罪は吸収されるから，同罪は成立しない。",c2:"２．甲は，税務署の職員乙が甲宅において税務調査をしていたところ，乙の近くでその調査を補助していた民間人である丙に対し，「殺すぞ。」などと危害を加える旨申し向け，これにより乙の職務の執行を一時中断させた。甲は乙を直接脅迫したものではないから，甲には公務執行妨害罪は成立しない。",c3:"３．甲は，制服警察官乙から職務質問を受けている丙の右手をつかんで引っ張り，その場から一緒に走って逃走したところ，これを追い掛けた乙が，走りながら，丙の肩をつかもうとして手を伸ばしたが，その肩をつかめずにバランスを崩して路上に転倒した。甲の丙に対する行為は乙に対する暴行とはいえないから，甲には公務執行妨害罪は成立しない。",c4:"４．甲は，警ら中の制服警察官乙が職務質問をしようとしてきたことから，これを免れるため，乙の職務質問開始前に乙に暴行を加え，乙がひるんだ隙に逃走した。乙が職務質問を開始する前に暴行を加えたにすぎないから，甲には公務執行妨害罪は成立しない。",c5:"５．甲は，制服警察官乙から丙が職務質問を受けているのを見て，これをやめさせようと拳大の石塊を乙に向けて投げ，その臀部に命中させたが，乙が職務質問を中断することはなかった。現実に乙の職務の執行を妨害するに至っていないから，甲には公務執行妨害罪は成立しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2016",num:"11",subject:"kei",q:"過失犯に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．監督過失とは, 直接行為者が過失を犯さないように監督する注意義務に違反する過失をいう｡監督過失を認めるには，直接行為者に構成要件的結果が発生することの予見可能性があれば足り，直接行為者を監督すべき立場にある監督者には，構成要件的結果が発生することの予見可能性までは必要とされない。",c2:"２．重過失とは，注意義務違反の程度が著しく，それによって発生した構成要件的結果が重大なものをいう。",c3:"３．信頼の原則は，交通事故の過失犯だけに適用されるものであり，それ以外の過失犯に適用される余地はない。",c4:"４．注意義務に違反して人を負傷させた場合であっても，相手方に重大な過失があったときには,過失相殺が適用されるので，過失の責任を免れることができる。",c5:"５．過失犯の成立に必要な注意義務は，必ずしも法令上の根拠があることを要しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2016",num:"12",subject:"kei",q:`次のアからエまでの各記述を判例の立場に従って検討した場合，正しいものの組合せは，後記１から５までのうちどれか。
ア．Ａの知人Ｂは，料理が趣味であり，自宅のパソコンに料理のレシピのデータを保存していた。Ａは，Ｂと口論をした際，Ｂが大事にしている同データを壊してやろうと思い，同パソコンをたたき壊した。同パソコンを壊したＡの行為について，電子計算機損壊等業務妨害罪は成立せず，器物損壊罪が成立する。
イ．Ａは，Ｂに成り済まし，銀行の窓口行員Ｃに対し，Ｂ名義の口座の預金をＡ名義の口座に振込入金するよう依頼した。Ｃは，ＡをＢと思い込み，コンピュータの端末を操作して，同銀行が業務用に使用している電子計算機にアクセスし，前記依頼のとおり振込入金の処理をした。Ｂに成り済まし，Ｃに振込入金の処理を行わせたＡの行為について，電子計算機使用詐欺罪が成立する。
ウ．Ａは，盗んだ財布の中に，不正に作られた電磁的記録をその構成部分とするクレジットカードが入っていることに気付き，同カードを使用するつもりはなかったが，機会があれば友人に見せようと考え，同カードを自己の財布に入れて持ち歩いていた。同カードを持っていたＡの行為について，不正電磁的記録カード所持罪は成立しない。
エ．Ａは，同僚Ｂのパソコンに，コンピュータウイルスを感染させてＢの業務を妨害しようと考え，コンピュータウイルスを作成したが，自宅のパソコンでその効果を試したところ，市販のウイルス対策ソフトで検出されてしまうことが分かったため，同ウイルスを使用することは断念した。同ウイルスを作成して試した一連のＡの行為について，電子計算機損壊等業務妨害罪の未遂罪が成立する。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．ア エ",c4:"４．イ エ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2016",num:"13",subject:"kei",q:`次のアからオまでの各記述における甲の罪責について，判例の立場に従って検討し，（ ）内の犯罪が既遂になる場合には１を，未遂にとどまる場合には２を，既遂にも未遂にもならない場合には３を選びなさい。
ア．甲は，所持金がなかったことから代金を支払わずに食事をしようと考え，飲食店に行って料理を注文し，これを食べた後，代金を請求した店員に対し，財布を忘れたので自宅に取りに帰ると嘘を言ったが，店員にその嘘を見破られた。（詐欺罪）
イ．甲は，Ａを殺害しようと考え，Ｂから致死性の毒薬であると告げられて小瓶入りの液体を購入し，コーヒーに同液体を入れて，これをＡに飲ませたものの，同液体は水であったため，Ａは死亡しなかった。（殺人罪）
ウ．甲は，Ａと同居している自宅を燃やそうと考え，自宅の和室に新聞紙が入った段ボール箱を置き，同新聞紙にライターで点火したが，その直後に帰宅したＡが燃えている同段ボール箱を発見して消火したため，同段ボール箱の直下の畳だけが焼損した。（現住建造物等放火罪）
エ．甲は，駅のホームのベンチで寝ているＡの隣に座ったところ，Ａのズボンのポケットに財布が入っていることに気付き，これを盗もうと考え，手を差し伸べて同ポケットの外側に触れたが，駅員が近付いてきたので，財布に触れることはできなかった。（窃盗罪）
オ．甲は，交通事故を装って保険会社から保険金をだまし取ろうと考え，Ａに依頼して，甲運転の自動車にＡ運転の自動車を衝突させ，警察官に交通事故を申告したが，Ａが警察官から追及されて偽装事故であると認めたため，保険金を請求しなかった。（詐欺罪）`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"13223"},{year:"2016",num:"14",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．甲は，Ａの太ももを蹴って怪我をさせたが，甲には，Ａに傷害を負わせるまでの意思はなかった。甲には傷害罪は成立しない。",c2:"２．甲，乙及び丙が，互いに意思の連絡をすることなく，同一の機会にそれぞれＡに暴行を加えて怪我をさせたところ，その怪我は，乙又は丙いずれかの暴行によるものであり，甲の暴行によるものではなかった。Ａがその怪我により死亡した場合，乙及び丙には傷害致死罪が成立し，甲には傷害罪が成立する。",c3:"３．甲は，四畳半の室内で，Ａを脅す目的で，さやから抜いた日本刀をその面前で数回振り回したところ，誤ってその日本刀の刃先がＡの腕に当たり，Ａに怪我を負わせた。甲には傷害罪は成立しない。",c4:"４．甲は，路上でトラブルとなったＡの顔面を１回殴ったところ，Ａは，その暴行によりバランスを崩し，足下にあった石につまずいて路上に転倒し，頭部を強く打ち付けて怪我をし，これにより数時間後に死亡した。甲がＡの死亡の結果を全く予見していなかった場合でも，甲には傷害致死罪が成立する。",c5:`５．甲は，Ａら数名が殴り合いのけんかをしているところにたまたま通り掛かり,｢もっとやれ｡｣と言ってはやし立てた。Ａらけんかの当事者が怪我をせず，Ａらの暴行が互いの相手に対する暴行罪にとどまる場合でも，甲には現場助勢罪（刑法第２０６条）が成立する。
`,c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2016",num:"15",subject:"kei",q:`学生Ａ，Ｂ及びＣは，事実の錯誤に関して，次の【会話】のとおり検討している。【会話】中の①から⑪までの（ ）内から適切な語句を選んだ場合，正しいものの組合せは，後記１から５までのうちどれか。
【会 話】
学生Ａ．Ｘが甲を狙って殺人の故意で拳銃を発射し，甲にかすり傷を負わせ，さらに，その弾丸が偶然に乙に命中して乙を死亡させた事例について考えてみよう。私は，同一の構成要件の範囲内であれば，故意を阻却しないと考え，故意の個数については，①（ａ．故意の個数を問題としない・ｂ．故意の個数を問題とし一個の故意を認める）立場を採ります。ですから，私は，事例の場合，故意犯としては乙に対する殺人既遂罪のみが成立すると考えます。
学生Ｂ．私は，基本的にはＡ君と同じ立場ですが，故意の個数について，②（ｃ．故意の個数を問題としない・ｄ．故意の個数を問題とし一個の故意を認める）立場に立ちます。Ａ君の考えだと，③（ｅ．意図した・ｆ．意図しない）複数の客体に既遂の結果が発生した場合，いずれの客体に故意犯を認めるのか不明だからです。
学生Ｃ．Ｂ君の立場は，④（ｇ．罪刑法定主義・ｈ．責任主義）に反することになりませんか。私は，この原則を尊重し，⑤（ｉ．客体の錯誤・ｊ．方法の錯誤）の場合には故意を認めますが，⑥（ｋ．客体の錯誤・ｌ．方法の錯誤）の場合には故意を認めるべきではないと思います。ですから，私は，事例の場合，乙に対する殺人既遂罪は成立しないと考えます。
学生Ａ．でも，Ｃ君の立場では，方法の錯誤と客体の錯誤との明確な区別が可能であることが前提となりますね。また，未遂犯や過失犯を処罰する規定の有無によっては，処罰の範囲が不当に⑦（ｍ．狭まる・ｎ．広がる）ことになると思います。一方で，Ｂ君の立場では，処断刑が不当に重くなりませんか。
学生Ｂ．私は，甲に対する罪と乙に対する罪の関係を⑧（ｏ．併合罪・ｐ．観念的競合）と考えますので，処断刑はＡ君の立場による場合と同一となります。
学生Ａ．でも，複数の客体に既遂の結果が発生した場合，⑨（ｑ．意図した・ｒ．意図しない）客体についての⑩（ｓ．故意犯・ｔ．過失犯）を，刑を⑪（ｕ．重くする・ｖ．軽くする）方向で量刑上考慮するとなると，やはり問題ではないでしょうか。`,c1:"１．①ｂ ②ｃ ③ｆ ④ｇ ⑤ｊ ⑥ｋ ⑦ｍ ⑧ｐ ⑨ｑ ⑩ｓ ⑪ｖ",c2:"２．①ａ ②ｄ ③ｅ ④ｇ ⑤ｊ ⑥ｋ ⑦ｎ ⑧ｏ ⑨ｒ ⑩ｔ ⑪ｖ",c3:"３．①ｂ ②ｃ ③ｆ ④ｈ ⑤ｉ ⑥ｌ ⑦ｍ ⑧ｐ ⑨ｒ ⑩ｓ ⑪ｕ",c4:"４．①ａ ②ｄ ③ｅ ④ｈ ⑤ｉ ⑥ｌ ⑦ｎ ⑧ｏ ⑨ｑ ⑩ｓ ⑪ｕ",c5:"５．①ｂ ②ｃ ③ｆ ④ｈ ⑤ｉ ⑥ｌ ⑦ｎ ⑧ｐ ⑨ｒ ⑩ｔ ⑪ｕ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2016",num:"16",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．甲は，警察官から職務質問をされそうになったのでその場から急いで立ち去ろうと考え，たまたま路上に駐車されていた他人所有の自動車に乗り込み，適当な場所で乗り捨てるつもりで，同自動車を運転してその場から走り去った。この場合，甲には，不法領得の意思が認められ，窃盗罪が成立する。",c2:"２．甲は，タクシーの売上金を奪おうと考えて，乗客を装ってタクシーに乗り込み，行き先を指定して人気のない場所に誘導した上，同所で，乗車料金を請求してきた運転手の首元に鋭利なガラス片を突き付けて売上金を渡すよう要求したが，同運転手から抵抗されて売上金を手に入れることができず，そのままその場から立ち去った。この場合，甲には強盗未遂罪のみが成立する。",c3:"３．甲は，視力回復の効果が全くない飲料について，その効果が絶大で入手困難なものと偽って,信じた客にこれを販売し，その代金として現金の交付を受けたが，その販売価格は適正，妥当なものであった。この場合，甲には詐欺罪は成立しない。",c4:"４．甲は，乙がその同居の親族から盗んできたカメラを，盗品であると知りながら乙から購入した。この場合，乙は，窃盗罪についての刑が免除されることから，甲には盗品等有償譲受け罪は成立しない。",c5:"５．甲は，乙所有の土地について，価格が暴落すると偽って，これを信じた乙との間で，時価の半額で同土地を買い受ける旨の売買契約を締結した。この場合，その売買契約が成立したことのみをもって，甲には詐欺既遂罪が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2016",num:"17",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討し，甲に（ ）内の罪名の間接正犯が成立しないものを２個選びなさい。",c1:"１．甲は，是非弁別能力を有する１２歳の長男乙に対し，強盗の犯行方法を教示し，その際に使う凶器を提供して強盗を実行するよう指示したが，その指示は乙の意思を抑圧するものではなく，乙は，自らの意思により強盗の犯行を決意し，甲から提供された凶器を使って，状況によって臨機応変に対処して強盗を実行した。（強盗罪）",c2:"２．医師ではない甲は，妊婦乙からの依頼を受けて乙への堕胎手術を開始したが，その最中に乙の生命が危険な状態に陥ったため，医師丙に依頼し，胎児を乙の母体外に排出させた。（同意堕胎罪）",c3:"３．公務員ではない甲は，公証人乙に対して虚偽の申立てをし，事情を知らない乙をして，公文書である公正証書の原本に虚偽の記載をさせた。（虚偽公文書作成罪）",c4:"４．甲は，事情を知らない新聞社の従業員乙に依頼して，同社の新聞紙上に，丙に無断で丙名義の事実証明に関する広告文を掲載させた。（私文書偽造罪）",c5:"５．甲は，乙所有の建材を自己の所有物であると偽って，事情を知らない丙に売却し，丙をして,乙の建材置場から当該建材を搬出させた。（窃盗罪）",c6:"",c7:"",c8:"",c9:"",c10:"",a:"13"},{year:"2016",num:"18",subject:"kei",q:"逃走の罪に関する次の１から５までの各記述を判例の立場に従って検討し，正しいものを２個選びなさい。",c1:"１．勾留状によって拘置所に勾留されていた甲は，面会者から密かに差し入れられた合い鍵を用いて房の扉を開け，拘置所から逃走した。甲には加重逃走罪の既遂罪が成立する。",c2:"２．確定判決によって刑務所に収容されていた甲は，同房に服役中の乙と逃走する旨の相談をしていたところ，ある日，房の扉が施錠されていないことに気付き，房から出て刑務所から逃走したが，乙は思いとどまり，房の外に出なかった。甲には加重逃走罪の既遂罪が成立する。",c3:"３．勾留状によって拘置所に勾留されていた甲は，隣の房に勾留されていた乙に依頼して乙の同房者丙を殴ってもらい，拘置所職員が乙の行動を制止している隙に拘置所から逃走した。甲には加重逃走罪の既遂罪が成立する。",c4:"４．確定判決によってＡ刑務所に収容されていた甲は，Ｂ刑務所への護送中，護送車両から逃走した。甲には単純逃走罪の既遂罪が成立する。",c5:"５．甲は，勾留状によって拘置所に勾留されていた乙を逃走させるため，乙の房の合い鍵を乙に差し入れたが，乙は拘置所から逃走しなかった。甲には逃走援助罪の既遂罪が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"45"},{year:"2016",num:"19",subject:"kei",q:"共犯に関する次の１から５までの各記述を判例の立場に従って検討し，誤っているものを２個選びなさい。",c1:"１．甲がＡの殺害を乙に教唆したところ，乙はＡの殺害を丙に教唆し，さらに，丙はＡの殺害を丁に教唆し，丁がＡを殺害した。甲には，殺人罪の教唆犯が成立する。",c2:"２．乙は，路上で，Ａの頭部を殴って転倒させ，Ａに脳挫傷の傷害を負わせたが，その直後に駆けつけた甲は，Ａが乙の暴行によって倒れて苦しんでいることを知り，Ａの抵抗が困難になっている状態を利用してＡに暴行を加えようと考え，乙と意思を通じ，代わる代わるＡの腹部を蹴り，腹部に打撲傷の傷害を負わせた。甲には，脳挫傷の傷害についても乙との傷害罪の共同正犯が成立する。",c3:"３．甲は，乙からＡの殺害計画を打ち明けられ毒薬の入手を依頼されたことから，毒薬を購入して乙に渡したが，乙は，毒薬での殺害計画を変更し，Ａを包丁で刺して殺害した。甲には，殺人予備罪の共同正犯が成立する。",c4:"４．甲と乙は，Ａ方に強盗に入ることを計画し，それぞれ包丁を持ってＡ方に侵入し，Ａを包丁で脅した上，室内を物色していたところ，家人Ｂ，Ｃに犯行を目撃され，甲はＢに捕まったが，乙は逮捕を免れるためＣの腕を包丁で切り付けて傷害を負わせた。甲には，住居侵入罪のほか強盗致傷罪の共同正犯が成立する。",c5:"５．暴力団組員乙は，対立する暴力団組長Ａを殺害することを決意し，誰にも犯行の決意を打ち明けることなく，小刀を持ってＡ方に向かったところ，乙の舎弟である甲は，乙の決意を察し，仮に乙がＡから反撃されそうになった場合は，自分がＡを殺害しようと考え，乙に何も告げることなく，拳銃を持ってＡ方付近に先回りして隠れていたが，乙は，玄関先に出てきたＡを小刀で一突きして殺害した。甲には，乙の殺人罪の従犯が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"25"},{year:"2016",num:"20",subject:"kei",q:`次の【事例】に関する後記アからエまでの各【記述】を判例の立場に従って検討した場合，正しいものの組合せは，後記１から５までのうちどれか。
【事 例】
　甲は，内縁の妻Ａと同居していたところ，遊興費に窮し，Ａ所有のドレス２０着及び指輪１個と，Ａ管理のＡ名義のクレジットカード１枚（その規約上，会員である名義人のみが利用でき，他人への譲渡，貸与等が禁じられ，また，加盟店は，利用者が会員本人であることを善良な管理者の注意義務をもって確認することが定められている。）を，Ａの部屋から盗み出した。
　甲は，丙にドレス及び指輪の売却を仲介してもらおうと考え，これらの盗品を丙方に運ぼうとした。しかし，甲は，ドレスの数が多く一人で運ぶのが困難であったため，乙に対し，ドレスと指輪が盗品であることを話した上で，丙宅への運搬を手伝ってほしいと頼んだ。乙がこれを了解したので，甲及び乙は，指輪とドレスのうち１０着を甲が，残りのドレス１０着を乙が，それぞれ運転する自動車に載せて丙宅へ運ぶこととし，これらの盗品を丙宅へ運んだ。
　丙は，ドレス及び指輪を，甲がＡから盗んできたものであることを承知した上で甲から預かり，甲からの依頼どおりに売却先を探すこととしたが，指輪についてはＡが母親の形見として大切にしていたものであることを知っていたことから，高値でＡに売り付けようと考え，後日，Ａに対し，代金５０万円で指輪を売却し，その売却代金を甲に渡した。
　また，甲は，Ａから盗んだクレジットカードを担保として丁から現金３０万円を借りたが，その際，丁に対し，「これはＡ名義のクレジットカードだけど，Ａから使用を許されており，お前がこのカードを利用して買物をしても，その利用代金はＡにおいて決済される。」と伝えた。その後，甲が丁に対して金を返さなかったことから，丁は，甲の話を信じ，デパートにおいて，Ａに成り済まして同カードを用いて腕時計１個を購入した。
【記 述】
ア．甲がＡの指輪を盗んだことにつき，甲の行為は窃盗罪に該当するが，Ａは甲の内縁の妻であるから，刑法第２４４条第１項により刑が免除される。
イ．乙が盗品のドレス１０着を，窃盗犯人である甲が指輪とドレス１０着を，それぞれ丙宅まで運搬したことにつき，乙は甲と共同してこれら盗品を運搬したのであるから，乙にはドレス２０着全てと指輪につき盗品等運搬罪が成立する。
ウ．丙がＡを相手方として指輪の売却をあっせんしたことにつき，Ａは窃盗の被害者であるが，丙には盗品等処分あっせん罪が成立する。
エ．丁がＡ名義のクレジットカードで腕時計を購入したことにつき，丁は，Ａから同カードの使用を許されており，かつ，自らの使用に係る同カードの利用代金がＡにおいて決済されるものと信じていたので，丁に詐欺罪は成立しない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2015",num:"1",subject:"ken",q:`国家公務員法第１０２条第１項にいう「政治的行為」の意義について判断した最高裁判所の二つの判決（最高裁判所平成２４年１２月７日第二小法廷判決，刑集６６巻１２号１３３７頁及び同１７２２頁）に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．「政治的行為」とは，公務員の政治的な行為一般ではなく，公務員の職務の遂行の政治的中立性を損なうおそれが，観念的なものにとどまらず，現実的に起こり得るものとして実質的に認められるものを指す。
イ．管理職的地位にある公務員が政党機関紙の配布といった殊更に一定の政治的傾向を顕著に示す行動に出た場合には，その指揮命令や指導監督を通じてその部下等の職務の遂行や組織の運営にもその傾向に沿った影響を及ぼすことになりかねず，「政治的行為」に該当する。
ウ．公務員の職務の遂行の政治的中立性を損なうおそれが認められるか否かは，諸般の事情を総合して判断する必要があるが，公務員の政治的な行為が勤務外で行われた場合には，そのおそれは存在しないと考えられる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2015",num:"2",subject:"ken",q:`法の下の平等に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法第１４条第１項の「社会的身分」とは，人が社会において占める継続的な地位をいうから，高齢であることはこれに当たらないので，町長が町職員の余剰を整理する際，高齢のみを基準として対象者を選択しても，平等原則には反しない。
イ．併給調整条項の適用により，障害福祉年金を受けることのできる者とそうでない者との間に児童扶養手当の受給に関して差別が生じても，両給付が基本的に同一の性格を有し，併給調整に立法裁量があることなどに照らすと，合理的理由のない不当なものとはいえない。
ウ．租税法の定立は立法府の政策的，技術的判断に委ねるほかないから，この分野における取扱いの区別は，立法目的が正当であり，かつ，区別の態様が立法目的との関連で著しく不合理であることが明らかでない限り，憲法第１４条第１項に違反するとはいえない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"211"},{year:"2015",num:"3",subject:"ken",q:`信教の自由に関する次のアからエまでの各記述について，誤っているもの二つの組合せを，後記１から６までの中から選びなさい。
ア．信教の自由には内心における信仰の自由が含まれるが，信仰の自由は，内心にとどまるものである限り，制約が一切許されない。
イ．宗教とは無関係な行政上の要請により，宗教を信じているか，いずれの宗教団体に属しているかなど，個人の信仰に関する申告をさせることも，内心における信仰の自由の侵害となる。
ウ．宗教的行為の自由は，憲法第２０条第１項前段ではなく，「宗教上の行為」等に「参加することを強制されない」と規定する同条第２項により保障される。
エ．特定の宗教の宣伝や共同で宗教的行為を行うことを目的とする団体を結成する自由は，信教の自由ではなく，憲法第２１条第１項の結社の自由として保障される。`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．イとウ",c5:"５．イとエ",c6:"６．ウとエ",c7:"",c8:"",c9:"",c10:"",a:"6"},{year:"2015",num:"4",subject:"ken",q:`報道の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．法廷内における被告人の容ぼう等につき，手錠，腰縄により身体の拘束を受けている状態が描かれたイラスト画を被告人の承諾なく公表する行為は，被告人を侮辱し，名誉感情を侵害するものというべきで，その人格的利益を侵害する。
イ．報道機関の取材源は，一般に，それがみだりに開示されると将来にわたる自由で円滑な取材活動が妨げられることになるため，民事訴訟法上，取材源の秘密については職業の秘密に当たるので，当該事案における利害の個別的な比較衡量を行うまでもなく証言拒絶が認められる。
ウ．少年法第６１条が禁止する推知報道に該当するか否かは，少年と面識のある特定多数の者あるいは少年の生活基盤としてきた地域社会の不特定多数の者が，少年を当該事件の本人であると推知することができるかを基準にして判断すべきである。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"122"},{year:"2015",num:"5",subject:"ken",q:`通信の秘密に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．通信の秘密の保障の目的は，私生活の自由を保護することにあるだけでなく，公権力による通信内容の探索の可能性を断つことにより自由な表現伝達手段を確保することにもある。
イ．通信の秘密は，特定の他者との通信の秘密を保障するものであり，はがき，手紙のほか，電話，電信もその保障の対象に含まれるが，インターネット上の通信はこれに含まれない。
ウ．通信の秘密の保障は，通信の内容のみならず，通信の当事者の氏名，住所，通信の日時，通信の個数など通信に関する全ての事項に及ぶ。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"3"},{year:"2015",num:"6",subject:"ken",q:`営業の自由に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．営業の自由を市場における私的な独占からの自由と捉える見解によれば，事業者に対し一定の取引分野での競争を不当に制限する行為を禁止する立法は，自由を促進する立法と位置付けられる。
イ．営業の自由が歴史的には公序として形成されてきたものであるとしても，憲法は「国家からの自由」を中心に人権を保障することを第一義とするものであるから，営業の自由を憲法第２２条第１項で保障される人権と解することは可能である。
ウ．営業の自由の内容を開業・廃業と営業活動に分け，前者は憲法第２２条第１項，後者は憲法第２９条により保障されるとする見解は，営業の自由の保障根拠を憲法第２２条第１項のみに求める見解と比べて，営業の自由を広く保障する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"112"},{year:"2015",num:"7",subject:"ken",q:`憲法第２５条に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法第２５条第１項で定める救貧施策においては国民の最低限度の生活を保障しなければならないが，同条第２項で定める防貧施策においては広い立法裁量が認められると解する立場によっても，救貧施策は生活保護法による公的扶助に限定されないと解することはできる。
イ．憲法第２５条第１項は，将来に向けた政策の指針を定めたもので，国民の権利を保障するものではないと解するプログラム規定説によっても，裁判所が同項に基づいて個々の法律について国民の生存権を侵害するか否かを判断できる。
ウ．いわゆる朝日訴訟においては，生活保護法に基づく生活扶助を廃止するとともに医療扶助を変更する旨の保護変更決定について，これを認容した厚生大臣の裁決自体の裁量権の逸脱・濫用が争われたのではなく，生活保護法自体が憲法第２５条第１項に違反するとして争われた。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"122"},{year:"2015",num:"8",subject:"ken",q:`学校教育に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法第２６条が子どもの学習権を保障していることから，教育の内容及び方法を誰がいかにして決定し得るかという問題に対する一定の結論が当然に導き出されるわけではない。
イ．親の教育の自由は，主として家庭教育等，学校外での教育において現れるものであり，学校選択の自由はこれに含まれない。
ウ．国が一定の教育水準確保のために定立する学習指導要領は，生徒側の教育内容に対する批判能力の程度及び学校選択の余地等に鑑みれば，高等学校では法的拘束力を持たない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"4"},{year:"2015",num:"9",subject:"ken",q:`財産権の保障に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法第２９条第１項は財産権の不可侵性を規定しているが，同項が保障するのは，私有財産制ではなく，個人が現に有する財産を侵害されないということである。
イ．憲法第２９条第２項は財産権の内容は法律で定めるとするが，入会権のような慣習に基づく伝統的な権利も憲法上の財産権に含まれる。
ウ．憲法第２９条第３項は私有財産を正当な補償の下に公共のために用いることができるとするが，こうした規定は歴史的には福祉国家理念を背景にして制定されるに至った。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"212"},{year:"2015",num:"10",subject:"ken",q:`国民の義務に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法第２６条第２項は保護する子女に普通教育を受けさせる国民の義務を定めているが，これは子どもが普通教育を受ける義務を負うことも意味するから，宗教上の信念に基づき授業内容の一部を受講しないと，子どもが同項違反の責任を問われる。
イ．憲法第２７条第１項は国民の勤労義務を定めるが，これを道徳的な訓示規定と解すると，勤労の能力ある者がその機会があるのに勤労しない場合に生活保護を受給できないとする制度を設けることは，同項の訓示規定としての性格に反し憲法上許されないこととなる。
ウ．憲法第３０条の定める国民の納税義務は憲法上の義務であるが，その義務は法律によって具体化されるので，国民が租税法規に従って税金を納付しない場合でも，法的には租税法規違反にとどまる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2015",num:"11",subject:"ken",q:`近代立憲主義に関する次のアからウの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．近代立憲主義とは，成文憲法に基づいて国家運営を行おうとする思想ないし実践を意味する。それは，イギリスにおける１２１５年のマグナカルタによって確立された。
イ．１７８９年のフランス人権宣言は近代立憲主義の内容を簡潔に示している。それによれば，「憲法」というためには，「権力の分立」が定められていれば足りる。
ウ．１９世紀の「自由国家」と形容される時代には自由の保障が強調されていた。しかし，その自由の保障のために，違憲立法審査権を裁判所に認める国は例外的であった。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"221"},{year:"2015",num:"12",subject:"ken",q:`二院制に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．日本国憲法が二院制を採用したのは，異なる選挙制度や議員の任期が異なること等によって，多角的かつ長期的な視点からの民意を反映させ，衆議院と参議院との権限の抑制，均衡を図り，国政の運営の安定性，継続性を確保しようとしたものと解される。
イ．衆議院と参議院の関係について，日本国憲法は，衆議院に法律案及び予算の先議権を認めているが，法律案及び予算について両議院の意見が対立した場合には，両院協議会を開かなければならないとしている。
ウ．参議院議員選挙に関して，判例は，半数改選という憲法上の要請，そして都道府県を単位とする参議院の選挙区選挙における地域代表的性格という特殊性を重視して，都道府県を各選挙区の単位とする仕組みを維持することを是認し続けている。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"122"},{year:"2015",num:"13",subject:"ken",q:`憲法第４１条の「唯一の立法機関」に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．「唯一の立法機関」の意味の一つは，国会中心立法の原則である。それは，形式的意味の立法が専ら国会で法律という形式で定められなければならないという原則である。
イ．国会中心立法の原則には例外がある。その例外は，憲法に特別の定めがある最高裁判所規則の制定だけである。
ウ．「唯一の立法機関」の意味の一つは，国会単独立法の原則である。それは，国会による立法は，国会以外の機関の参与を必要としないで成立するという原則である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"221"},{year:"2015",num:"14",subject:"ken",q:`委任立法に関する次のアからエまでの各記述について，誤っているもの二つの組合せを，後記１から６までの中から選びなさい。
ア．憲法第７３条第６号は委任命令を一般的に認めているが，多数説は，専門技術性と迅速な対応の必要性から，権利や義務に関して法律の内容の詳細規定の命令への委任を認めている。
イ．憲法第４１条からして，命令に委任する場合には，白紙委任が禁止される。さらに，学説は，当該法律の本質をなす部分や重要事項に関して議会が定めることを求める。
ウ．判例は，被勾留者には一般市民としての自由が制約されることを理由に，１４歳未満の者との接見を原則として認めていなかった当時の監獄法施行規則を委任の趣旨の範囲内とした。
エ．判例は，インターネット販売が認められる医薬品を一定の医薬品に限定した薬事法施行規則について，法律の委任の範囲を逸脱した違法なものであるとした。`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．イとウ",c5:"５．イとエ",c6:"６．ウとエ",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2015",num:"15",subject:"ken",q:`国政調査権の行使に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．国政調査権は，各議院を構成する個々の国会議員についても認められている権能であるので，個々の国会議員も行使することができる。
イ．内閣は，各議院から国政調査権に基づき報告又は記録の提出を求められた場合には，国家の重大な利益に悪影響を及ぼすときであっても拒むことができない。
ウ．各議院は，国政調査権の行使として，公務員のみならず私人に対しても，証人として出頭して証言することを求めることができる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2015",num:"16",subject:"ken",q:`選挙に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．衆議院議員選挙における１人別枠方式については，人口の少ない県に居住する国民の意思をも十分に国政に反映させるという目的は合理的であるが，その結果生じる投票価値の較差が過大であるから違憲である。
イ．国民の選挙権を制限するためには，そのような制限をすることがやむを得ないと認められる事由がなければならないが，選挙権の保障には投票をする機会の保障は含まれないため，投票機会の確保のための措置を採るか採らないかについては広汎な立法裁量が認められる。
ウ．衆議院議員選挙では，小選挙区の候補者のほか，所属する候補者届出政党にも選挙運動が認められており，無所属の候補者は政見放送ができないなど非常に不利であるが，他に十分な手段があるため，政策・政党本位の選挙制度の実現のための立法裁量の範囲を逸脱していない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"221"},{year:"2015",num:"17",subject:"ken",q:`内閣及び内閣総理大臣に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法第６５条第１項は，「行政権は，内閣に属する」と規定している。行政権とは全ての国家作用のうちから立法作用と司法作用を除いた残りの作用であるとすると，立法作用と司法作用以外の全ての国家作用について内閣が自ら行うことが必要となる。
イ．内閣は，行政権の行使につき，国会に対し連帯して責任を負う。これは，特定の国務大臣がその所管事項に関して単独の責任を負うことを否定するものではなく，個別の国務大臣に対する衆議院及び参議院の問責決議も認められるが，それらには法的効力はない。
ウ．内閣総理大臣は，内閣という合議体において，単なる同輩中の首席ではなく，首長の立場にあり，その他の国務大臣の任免権を専権として有する。したがって，文民統制の観点から内閣総理大臣は文民でなければならないとしても，その他の国務大臣が文民である必要はない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"6"},{year:"2015",num:"18",subject:"ken",q:`合憲限定解釈に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．合憲限定解釈に対しては，立法者の意思を超えて法文の意味を書き換えてしまう可能性があり，立法権の簒奪につながりかねないという問題がある。
イ．合憲限定解釈に対しては，当該解釈が不明確であると，犯罪構成要件の保障的機能を失わせ，憲法第３１条違反の疑いを生じさせるという問題がある。
ウ．判例は，集会の自由の規制が問題となった広島市暴走族追放条例について，条例の改正が立法技術上困難でないから，あえて合憲限定解釈をする必要はないとした。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2015",num:"19",subject:"ken",q:`憲法第８９条後段の「公の支配」の意義に関し，「国又は地方公共団体が当該事業の予算を定め，その執行を監督し，さらにその人事に関与するなど，その事業の根本的方向に重大な影響を及ぼすことのできる権力を有する」ことを要すると解する見解があるが，次のアからウまでの各記述について，かかる見解と同じ立場からの記述には○を，異なる立場からの記述には×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．慈善，教育，博愛の事業を行うのは，通常，法律に基づき国の監督を受ける公益法人であり，学校法人も公益法人として法的規制を受けるので，「公の支配」に属する。
イ．現行法の私立学校に対する助成については，監督官庁の権限が報告を徴したり，勧告を行ったりすることに限られているので，違憲の疑いがある。
ウ．憲法第８９条後段の立法趣旨は，私的事業の自主性を確保するために公権力による干渉の危険を除こうとすることにある。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"5"},{year:"2015",num:"20",subject:"ken",q:`地方自治に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法上の「地方公共団体」とは，沿革的に見ても，また現実の行政の上においても，相当程度の自主立法権，自主行政権，自主財政権等，地方自治の基本的権能を付与された地域団体であれば足り，共同体意識を持っているという社会的基盤が存在する必要はない。
イ．憲法上の条例制定権は当然には罰則制定権を含まず，刑罰権設定は本来国家事務であり，条例中に罰則を設けるには法律の授権が必要であるが，条例は，行政府の命令と異なり，民主的立法であり実質的に法律に準ずるもので，条例への罰則の委任は一般的・包括的委任で足りる。
ウ．地方公共団体は，地方自治の本旨に従い，その財産を管理し事務を処理し及び行政を執行する権能を有し，その遂行のためには，その財源を自ら調達する権能を有することが必要であるから，地方自治の不可欠の要素として，課税権の主体となることが憲法上予定されている。\f`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"221"},{year:"2015",num:"1",subject:"min",q:`法律行為に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．代理権を有しない者が本人のためにすることを示して契約を締結した場合，本人がその契約の相手方に対して追認を拒絶する旨を表示することは，法律行為に当たる。
イ．債権者が債務者に対してその債務を免除する旨を表示することは，法律行為に当たる。
ウ．債権者が債務者に対してあらかじめ弁済の受領を拒絶する旨を表示することは，法律行為に当たる。
エ．２人が互いに同種の目的を有する債務を負担する場合において，双方の債務が弁済期にあるときに，債務者の一方が相手方に対してその対当額について相殺をする旨を表示することは，法律行為に当たる。
オ．債務の消滅時効が完成する前に，債務者が債権者に対してその債務の承認をする旨を表示することは，法律行為に当たる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2015",num:"2",subject:"min",q:"意思表示に関する次の１から４までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．Ａは，その所有する甲土地についてＢと仮装の売買契約を締結し，その旨の所有権移転登記をした。その後，Ｂがこの事情を知らないＣに甲土地を売却した場合，ＢからＣへの所有権移転登記がされていないときでも，Ａは，Ｃに対し，ＡＢ間の売買契約の無効を主張することができない。",c2:"２．Ａは，その所有する甲土地についてＢと仮装の売買契約を締結し，その旨の所有権移転登記をした。その後，Ｂがこの事情を知らないＣから５００万円を借り入れたが，その返済を怠ったことから，Ｃが甲土地を差し押さえた場合，甲土地の差押えの前にＣがこの事情を知ったとしても，Ａは，Ｃに対し，ＡＢ間の売買契約の無効を主張することができない。",c3:"３．Ａの代理人であるＢは，その代理権の範囲内でＡを代理してＣから１０００万円を借り入れる旨の契約を締結したが，その契約締結の当時，Ｂは，Ｃから借り入れた金銭を着服する意図を有しており，実際に１０００万円を着服した。この場合において，Ｃが，その契約締結の当時，Ｂの意図を知ることができたときは，Ａは，Ｃに対し，その契約の効力が自己に及ばないことを主張することができる。",c4:"４．ＡのＢに対する甲土地の売買契約の意思表示について法律行為の要素に錯誤があった場合でも，Ａに自らの錯誤を理由としてその意思表示の無効を主張する意思がないときには，Ｂは，Ａの意思表示の無効を主張することはできない。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2015",num:"3",subject:"min",q:`代理に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａの代理人として土地を購入する権限を与えられたＢが，Ｃとの間で甲土地の売買契約を締結する際に，Ｂの従業員Ｄに命じて甲土地の売買契約書に「Ａの代理人Ｂ」という署名をさせた場合でも，ＡＣ間に売買契約の効力が生ずる。
イ．Ａの代理人として土地を購入する権限を与えられたＢが，Ａの許諾を得て復代理人Ｃを選任し，ＣがＤとの間で甲土地の売買契約を締結した場合，ＣがＤに対しＡのために売買契約を締結することを示しただけで，自らが代理人Ｂによって選任された復代理人であることを示さなかったときは，ＡＤ間に売買契約の効力は生じない。
ウ．Ａの代理人として土地を購入する権限を与えられたＢが，ＣのＢに対する詐欺により，Ａのためにすることを示してＣとの間で甲土地の売買契約を締結した場合，Ａは，その売買契約を取り消すことができない。
エ．Ａの代理人として土地を購入する権限を与えられたＢが，Ｃから甲土地を売却する権限を与えられてＣの代理人にもなり，Ａ及びＣを代理してＡＣ間の甲土地の売買契約を締結した場合，Ｂが双方代理であることをＡ及びＣの双方にあらかじめ通知したときは，ＡＣ間に売買契約の効力が生ずる。
オ．Ａの代理人として土地を購入する権限を与えられたＢが，Ａのためにすることを示さずにＣとの間で甲土地の売買契約を締結した場合，ＢがＡのために売買契約を締結することをＣが知ることができたときは，ＡＣ間に売買契約の効力が生ずる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2015",num:"4",subject:"min",q:"表見法理に関する次の１から４までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．ＡがＢに対しＡ所有の甲土地を売却する代理権を与えていないのに，その代理権を与えた旨をＣに表示し，ＢがＡの代理人としてＣとの間で甲土地の売買契約を締結した場合，Ａは，ＣがＢに代理権がないと知っていたこと，又は過失により知らなかったことを立証しなければ，甲土地の引渡債務を免れることができない。",c2:"２．ＡがＢと通謀してＡ所有の甲土地につきＡＢ間で売買予約がされた旨仮装し，Ｂへの所有権移転登記請求権保全の仮登記をした後，Ｂが偽造書類を用いて仮登記を本登記にした上で，善意無過失のＣに甲土地を売却し，Ｃへの所有権移転登記をした場合，Ｃは，Ａに対し，甲土地の所有権をＣが有することを主張することができる。",c3:"３．ＡがＢと通謀してＡ所有の甲土地につきＡＢ間で売買契約がされた旨仮装し，Ｂへの所有権移転登記をした後，Ｂが甲土地をＣに売却した場合，Ａは，ＣがＡＢ間の売買契約が虚偽表示であることを知っていたことを立証しなければ，Ｃに対し，甲土地の所有権をＡが有することを主張することができない。",c4:"４．ＡがＢに対しＡ所有の甲土地を売却する代理権を与えていないのに，Ｂが甲土地につきＡからＢへの所有権移転登記をした上で，その事情について善意無過失のＣに甲土地を売却した場合，Ａが甲土地の登記済証及びＡの印鑑登録証明書をＢに預けたままにし，Ａの面前でＢがＡの実印を登記申請書に押捺するのを漫然と見ていたなど，Ａの帰責性の程度が自ら外観の作出に積極的に関与した場合やこれを知りながらあえて放置した場合と同視し得るほど重いときは，Ｃは，Ａに対し，甲土地の所有権をＣが有することを主張することができる。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2015",num:"5",subject:"min",q:`条件及び期限に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．医学部に入学したＡがＢから金銭を借り入れた際に「借入金は私が医師になった時に返済する。」と約束していたが，その後，Ａの父親が急死し，Ａがその父親の事業を継がざるを得なくなったため医学部を中途退学した場合，Ａは，Ｂに対する借入金の返還債務を免れる。
イ．家屋の賃貸人Ａがその家屋の賃借人Ｂに対し，Ｂが滞納している賃料を所定の期限までに支払わない場合にはその家屋の賃貸借契約を解除する旨の意思表示をすることは，単独行為に条件を付することになっても許される。
ウ．ＡがＢに対し「将来気が向いたら，私が所有する甲自動車を贈与する。」と約束したとしても，その贈与契約は無効である。
エ．ＡがＢに対し「Ｂが医学部の卒業試験に合格したら，私が所有する甲自動車を贈与する。」と約束した場合，卒業試験の前にＡが甲自動車を第三者Ｃに売却したときは，Ｂは，Ａに対し，それにより生じた損害の賠償を請求することができる。
オ．ＡがＢに対し「私の所有する乙土地の購入希望者をＢが見つけることができ，Ｂの仲介により売買契約に至れば，その仲介報酬を支払う。」と約束した場合，Ａが，Ｂの見つけてきた乙土地の購入希望者との間で，Ｂの仲介によらずに直接乙土地の売買契約を結んだときは，Ｂは，Ａに対し，仲介報酬を請求することができない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2015",num:"6",subject:"min",q:"消滅時効の中断に関する次の１から４までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．時効期間が経過する前に，被保佐人である債務者が保佐人の同意を得ることなくその債務を承認した場合，その債権の消滅時効は中断しない。",c2:"２．時効期間が経過する前に，債権者が第三者に債権を譲渡し，債務者がその債権の譲渡について債権の譲受人に対し承諾をした場合，その債権の消滅時効は中断する。",c3:"３．時効期間が経過する前に，債務者が債権者の代理人に対し支払猶予の申入れをした場合，その債権の消滅時効は中断する。",c4:"４．時効期間が経過する前に，債務者が債権者に対し債務の承認をした場合，被担保債権について生じた消滅時効中断の効力を，その債権の物上保証人が否定することは許されない。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2015",num:"7",subject:"min",q:`不動産登記に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡがＡ所有の甲土地をＢに売却し，その旨の所有権移転登記がされた後，Ｂは，甲土地をＣに売却し，その旨の所有権移転登記がされた。その後，ＡがＢの強迫を理由としてＢに対する売買の意思表示を取り消した場合，Ａは，Ｃに対し，甲土地の所有権がＡからＢに移転していないことを主張することができる。
イ．ＡがＡ所有の甲土地をＢに売却し，その旨の所有権移転登記がされた後，Ａは，Ｂの詐欺を理由としてＢに対する売買の意思表示を取り消した。その後，ＢがＣに甲土地を売却し，Ｃへの所有権移転登記をした場合，Ａは，Ｃに対し，甲土地の所有権がＢからＡに復帰したことを主張することができない。
ウ．Ａは亡Ｂから亡Ｂの所有していた乙土地の遺贈を受けたが，その旨の所有権移転登記をしていなかった。その後，亡Ｂの共同相続人の一人であるＣの債権者Ｄが乙土地についてＣの相続分に相当する持分を差し押さえ，その旨の登記がされた。この場合，Ａは，Ｄに対し，乙土地の所有権を亡Ｂから取得したことを主張することができる。
エ．ＡがＢ所有の乙土地を占有し，取得時効が完成した場合において，その取得時効が完成する前に，Ｃが乙土地をＢから譲り受けると同時に乙土地の所有権移転登記をしたときは，Ａは，Ｃに対し，乙土地の所有権を時効取得したことを主張することができる。
オ．ＡがＢ所有の乙土地を占有し，取得時効が完成した場合において，その取得時効が完成する前に，Ｃが乙土地をＢから譲り受け，その取得時効の完成後にＣが乙土地の所有権移転登記をしたときは，Ａは，Ｃに対し，乙土地の所有権を時効取得したことを主張することができない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2015",num:"8",subject:"min",q:`登記請求権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａの所有する甲土地がＡからＢ，ＢからＣに順次譲渡された場合において，Ｂは，甲土地の所有権を喪失していても，Ａに対し，ＡからＢへの所有権移転登記手続を請求することができる。
イ．Ａの所有する甲土地がＡからＢ，ＢからＣに順次譲渡されたにもかかわらず，登記名義がなおＡに残っている場合，Ｃは，Ａに対し，ＡからＣに対する真正な登記名義の回復を原因とする所有権移転登記手続を請求することはできない。
ウ．Ａの所有する甲土地についてＡからＢ，ＢからＣへの所有権移転登記がされている場合，それぞれの所有権移転登記に対応する権利変動がないときは，Ａは，Ｃに対し，直接自己への所有権移転登記手続を請求することはできない。
エ．Ａの所有する甲土地についてＡからＢ，ＢからＣへの各売買を原因とする所有権移転登記がされている場合，ＡからＢ，ＢからＣへの各売買がいずれも無効であるときは，Ａは，Ｃに対し，ＢからＣへの所有権移転登記の抹消登記手続を請求することができるが，Ｂは，Ｃに対し，ＢからＣへの所有権移転登記の抹消登記手続を請求することはできない。
オ．Ａが，Ｂに売却した甲土地について所有権移転登記手続をしない間に死亡し，Ａの共同相続人であるＣとＤがＡの代金債権と所有権移転登記義務を相続した場合，Ｄがその所有権移転登記義務の履行を拒絶しているため，Ｂが同時履行の抗弁権を理由として代金を支払わないときは，Ｃは，Ｂに対する自己の代金債権を保全するため，Ｂに代位して，ＢのＤに対する所有権移転登記手続請求権を行使することはできない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2015",num:"9",subject:"min",q:`Ａが３分の１，Ｂが３分の２の持分で甲土地を共有している場合に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａは，Ｂに無断で，甲土地の自己の持分について抵当権を設定することができない。
イ．Ａに無断でＢが甲土地を農地から宅地にする造成工事を行い，甲土地の形状を変更している場合，Ａは，Ｂに対し，その工事の差止めを求めることができる。
ウ．Ａに無断でＢが甲土地上に乙建物を建て，甲土地全体を単独で使用している場合，Ａは，Ｂに対し，自己の持分割合に応じ，甲土地の地代相当額の支払を請求することができる。
エ．甲土地の利用方法についてＡとＢが協議したが意見が一致せず，Ａに無断でＢがＣと甲土地の賃貸借契約を締結し，Ｃが甲土地を占有している場合，Ａは，Ｃに対し，甲土地全体の明渡しを求めることができる。
オ．ＡがＢに無断で甲土地全体を単独で占有している場合であっても，Ｂは，自分の共有持分が過半数を超えることを理由として，Ａに対し，甲土地全体の明渡しを求めることはできない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2015",num:"10",subject:"min",q:`共有物の分割に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．遺産分割前において共同相続人の一人から遺産を構成する不動産の共有持分権を譲り受けた第三者が，その不動産の共同所有関係の解消を求めるためには，共有物分割訴訟によらなければならない。
イ．共有物の分割請求をした共有者が多数の場合，分割請求をされた共有者の持分の限度で現物を分割し，その余は分割請求をした共有者の共有として残す方法により共有物の分割をすることはできない。
ウ．共有物を共有者のうちの一人の単独所有又は数人の共有とし，これらの者から他の共有者に対して持分の価格を賠償させる方法により共有物の分割をすることはできない。
エ．裁判所は，共有物の現物分割が物理的に不可能な場合のみでなく，社会通念上適正な現物分割が著しく困難な場合にも，共有物の競売を命ずることができる。
オ．数個の共有建物を一括して分割の対象とし，共有者各自が各個の建物の単独所有権を取得する方法により共有物の分割をすることはできない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2015",num:"11",subject:"min",q:`地役権に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．地役権者がその権利の一部を行使しないときは，その部分のみが時効によって消滅する。
イ．要役地に隣接しない土地を承役地として地役権を設定することはできない。
ウ．要役地が数人の共有に属する場合において，要役地の共有者の一人は，その持分につき，その土地のために存する地役権を放棄することができる。
エ．要役地が数人の共有に属する場合において，その一人のために時効の中断があるときは，その中断は，他の共有者のためにも，その効力を生ずる。
オ．要役地の所有者は，地役権を要役地から分離して譲渡することができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2015",num:"12",subject:"min",q:`先取特権に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．一般の先取特権者は，債務者の財産の中の動産が売却されて買主にその引渡しがされた場合，債務者が取得する代金債権について，その払渡しの前に差押えをしなくても先取特権を行使することができる。
イ．宿泊客が旅館に持ち込んだ手荷物がその宿泊客の所有物でない場合，旅館の主人は，その手荷物がその宿泊客の所有物であると過失なく信じたとしても，その手荷物について先取特権を行使することができない。
ウ．家屋の賃借人がその家屋に備え付けた家具が競売された場合において，その執行費用に関する先取特権は，その家屋の賃貸人が賃料債権に基づき家具について有する先取特権に優先する。
エ．動産売買の先取特権の目的物について質権が設定された場合，動産売買の先取特権が質権に優先する。
オ．判例によれば，日用品の供給の先取特権は，債務者が法人のときは認められない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2015",num:"13",subject:"min",q:"Ａが，Ａ所有の甲動産を占有するＢに対し，所有権に基づく甲動産の引渡請求訴訟を提起したところ，Ｂは，Ａの夫Ｃから質権の設定を受けその質権を即時取得した旨の反論をした。この場合に関する次の１から４までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．占有者が占有物について行使する権利は，適法に有するものと推定されるから，Ｂは，質権の即時取得の成立を基礎付ける事実を主張・立証する必要はない。",c2:"２．Ｂは，Ｃとの間で質権設定の合意をし，その合意に基づいてＣから甲動産の引渡しを受けたことを主張・立証する必要がある。",c3:"３．Ｂは，質権の被担保債権の発生原因事実を主張・立証する必要はなく，Ａが，質権の被担保債権の消滅原因事実を主張・立証する必要がある。",c4:"４．Ｂは，Ｃに甲動産の所有権がないことについてＢが善意であることを主張・立証する必要はないが，Ｂに過失がないことを主張・立証する必要がある。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2015",num:"14",subject:"min",q:`譲渡担保に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．不動産が譲渡担保の目的とされ，譲渡担保権の設定者から譲渡担保権者への所有権移転登記がされた場合において，譲渡担保権の設定者は，その譲渡担保権に係る債務の弁済と，その不動産の譲渡担保権者から譲渡担保権の設定者への所有権移転登記手続との同時履行を主張することができない。
イ．対抗要件を備えた集合動産譲渡担保権の設定者が，その目的とされた動産につき通常の営業の範囲を超える売却処分をし，その動産を占有改定の方法により買主に引き渡した場合，買主はその動産の所有権を取得することができる。
ウ．不動産の譲渡担保において，債務者が弁済期にその譲渡担保権に係る債務を弁済しない場合，譲渡担保権者がその不動産を譲渡したときは，譲受人は確定的にその不動産の所有権を取得し，債務者は債務を弁済してその不動産を受け戻すことができない。
エ．不動産が譲渡担保の目的とされ，譲渡担保権の設定者から譲渡担保権者への所有権移転登記がされた場合において，その譲渡担保権に係る債務の弁済により譲渡担保権が消滅した後にその不動産が譲渡担保権者から第三者に譲渡されたときは，譲渡担保権の設定者は，登記がなければ，その所有権をその不動産を譲り受けた第三者に対抗することができない。
オ．集合動産の譲渡担保権者は，その譲渡担保権の設定者が通常の営業を継続している場合であっても，その目的とされた動産が滅失したときは，その損害をてん補するために設定者に支払われる損害保険金の請求権に対して物上代位権を行使することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2015",num:"15",subject:"min",q:`債務不履行による損害賠償に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．消費貸借の約定利率が法定利率を超える場合，借主が返済を遅滞したときにおける損害賠償の額は，約定利率により計算される額であり，貸主は，約定利率により計算される額を超える損害が生じていることを立証しても，その賠償を借主に請求することはできない。
イ．家屋の賃借人が賃貸借契約の終了後もその家屋を賃貸人に返還しない場合，賃貸人は，その賃貸借契約で定められた賃料に相当する額の損害賠償を賃借人に請求することができるが，賃貸人がその賃貸借契約の終了後に別の者との間でその家屋の賃貸借契約を締結し，その賃貸借契約で定められた賃料が従前の賃料を上回るときであっても，その新たな賃料に基づく損害賠償を賃借人に請求することはできない。
ウ．営業用店舗の賃貸人が修繕義務の履行を怠ったために賃借人がその店舗で営業をすることができなかった場合，賃借人は，これにより生じた営業利益の喪失による損害の賠償を，債務不履行により通常生ずべき損害として請求することができるが，賃借人が営業をその店舗とは別の場所で再開するなどの損害を回避又は減少させる措置を何ら執らなかったときは，そのような措置を執ることができた時期以降に生じた損害の全ての賠償を請求することはできない。
エ．当事者が債務不履行について損害賠償の額を予定している場合，裁判所は，その損害賠償の予定額を増減することはできず，過失相殺により賠償額を減額することもできない。
オ．当事者が損害賠償の方法について金銭以外の物による旨の合意をしても，その効力は認められない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2015",num:"16",subject:"min",q:"債権者が債務者に対する債権を保全する必要がある場合に関する次の１から４までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．離婚に伴う財産分与請求権は，協議又は審判によって具体化されるまではその範囲及び内容が不確定・不明確であるため，これを被保全債権として債権者代位権を行使することはできない。",c2:"２．債務者が第三者に対してした意思表示が錯誤によるものであったことを認めているときは，債務者自らが錯誤無効を主張する意思がなくても，債権者は，債務者が第三者に対してした意思表示の無効を主張することができる。",c3:"３．債権者が，債務者に対する金銭債権に基づき，債務者の第三債務者に対する金銭債権を代位行使する場合，債権者は，自己の債務者に対する債権額の範囲においてのみ，債務者の第三債務者に対する金銭債権を行使することができる。",c4:"４．債権者は，債務者が第三者に対して負う債務について，債務者に代わってその消滅時効を援用することができない。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2015",num:"17",subject:"min",q:`ＡがＢに対して融資をしていたところ，Ｂがその所有する建物をＢの妻Ｃに贈与し，その旨の所有権移転登記手続をしたことから，Ａが詐害行為取消訴訟を提起した。この場合に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａは，ＢからＣへの所有権移転登記の抹消登記手続を請求することができるほか，ＣからＡへの所有権移転登記手続を請求することもできる。
イ．Ａは，ＢからＣへの所有権移転登記の抹消登記手続を請求することなく，ＢＣ間の贈与契約の取消しを請求することができる。
ウ．Ａは，詐害行為の取消しを請求するに際しては，Ｂ及びＣの両方を被告として訴えを提起しなければならない。
エ．Ａは，ＢＣ間の贈与契約が債権者であるＡを害すること及びそのことをＢ及びＣが知っていたことを主張・立証しなければならない。
オ．Ａは，ＢＣ間の贈与契約の当時Ｂが無資力であったことを主張・立証すれば足り，詐害行為取消訴訟の口頭弁論終結時までにＢの資力が回復したことは，Ｃが主張・立証しなければならない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2015",num:"18",subject:"min",q:"ＡがＢに金銭を貸し付け，ＣがＡに対しＢの借入金債務を保証したが，ＢがＡに対する借入金の返還を怠ったことから，Ａが，Ｃに対して保証債務の履行を請求する訴えを提起した場合に関する次の１から４までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．Ｃは，保証債務の消滅時効を自ら援用しなくても，Ｂが主たる債務の消滅時効を援用したことを抗弁として主張することができる。",c2:"２．Ｃは，Ｂが主たる債務の消滅時効を援用していない場合でも，主たる債務の消滅時効を援用して抗弁を主張することができる。",c3:"３．Ｃが保証債務の消滅時効を援用して抗弁を主張するのに対し，主たる債務の消滅時効が完成する前にＢがその債務の一部を弁済したことは，時効中断の再抗弁となる。",c4:"４．Ｃが主たる債務の消滅時効を援用して抗弁を主張するのに対し，主たる債務の消滅時効が完成する前にＣが保証債務の一部を弁済したことは，時効中断の再抗弁となる。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2015",num:"19",subject:"min",q:`債務の履行と弁済に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．安全配慮義務の違反を理由とする債務不履行に基づく損害賠償債務は，その義務の違反により損害が発生した時から遅滞に陥る。
イ．弁済をすべき場所について別段の意思表示がない場合には，特定物の引渡しは，債権発生の時にその物が存在した場所においてしなければならないが，その他の弁済は債権者の現在の住所においてしなければならない。
ウ．弁済の費用について別段の意思表示がない場合には，債権者と債務者の双方が等しい割合でその費用を負担するが，債権者が住所の移転その他の行為によって弁済の費用を増加させたときは，その増加額は債権者が負担する。
エ．Ａの所有する甲土地を，Ｂが建物の所有を目的として賃借し，Ｂが甲土地上に乙建物を建築して乙建物をＣに賃貸した場合，ＢがＡに対し甲土地の賃料の支払を拒絶しているときは，Ｃは，Ａに対し甲土地の賃料の支払をすることができる。
オ．金銭消費貸借の借主が，元本，利息及び費用の総額に足りない金銭を貸主に弁済する場合には，それをまず元本に充当することを指定することができ，貸主が直ちに異議を述べない限り，その充当の指定は効力を有する。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2015",num:"20",subject:"min",q:`相殺に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡのＢに対する甲債権が差し押さえられた後，ＢがＡに対する乙債権を取得した場合，Ｂは，乙債権を自働債権として甲債権と相殺することができる。
イ．賃貸人が賃料の不払を理由として賃貸借契約を解除した後，賃借人が解除後に存在を知った賃貸人に対する債権と賃料債務を相殺により消滅させたとしても，賃貸借契約の解除の効力には影響がない。
ウ．継続的契約の当事者が，その契約が終了したときに債権債務が残っていた場合は相殺することをあらかじめ合意していたとしても，その合意は無効である。
エ．債権が不法行為によって生じたときは，その債権者は，その債権を自働債権として相殺することができる。
オ．注文者は，請負人に対する目的物の瑕疵の修補に代わる損害賠償債権を自働債権として，請負人の注文者に対する報酬債権と相殺することはできない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2015",num:"21",subject:"min",q:`同時履行の抗弁に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．判例によれば，家屋の賃貸借契約の締結時に敷金が差し入れられた場合，その賃貸借契約の終了に伴う賃借人の家屋明渡債務と賃貸人の敷金返還債務とは，同時履行の関係にない。
イ．双務契約における一方の債権が第三者に譲渡され，譲渡人が債務者に譲渡の通知をした後その債務者が遅滞なく異議を述べなかった場合，その債務者は，その債権の譲受人からの債務の履行の請求に対し，同時履行の抗弁を主張することができない。
ウ．売買契約における双方の債務の履行期が同じである場合において，その履行期が経過したときであっても，一方の当事者は，自己の債務について弁済又はその提供をしなければ，債務不履行に基づく契約の解除をすることができない。
エ．売買契約の解除により両当事者が互いに原状回復義務を負う場合，両当事者の原状回復義務は同時履行の関係にない。
オ．ＡがＢに対し美術品を売却した際，ＢのＡに対する美術品の代金債務とＡのＢに対する美術品の引渡債務の履行期を同一とすることが合意された場合，Ａは，ＢのＡに対する美術品の代金債務についてその履行期が到来しても，ＡのＢに対する美術品の引渡債務について弁済又はその提供をしていないときは，ＡのＢに対する美術品の代金債権とそれとは別にＢがＡに対して有する貸金債権とを対当額で相殺することができない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2015",num:"22",subject:"min",q:"契約締結後に債務の履行に障害が生じた場合に関する次の１から４までの各記述のうち，誤っているものはどれか。",c1:"１．特定物の売買契約において，売主の責めに帰すべき事由により目的物引渡債務が履行不能になった場合，その売買契約の効力は法律上当然に失われ，買主は，代金を支払う義務を免れる。",c2:"２．建物の賃貸借契約において，賃借人の責めに帰すべき事由により建物が滅失した場合，その賃貸借契約は法律上当然に終了し，賃借人は，それ以降賃料を支払う義務を負わない。",c3:"３．建物の建築を目的とする請負契約において，当事者双方の責めに帰することができない事由により建築途中の建物が滅失した場合であっても，請負人は，新たに建物を建築し，これを完成させなければ，注文者に対し，請負代金全額の支払を請求することはできない。",c4:"４．有償寄託契約において，受寄者の責めに帰することができない事由により寄託物の返還債務が履行不能になった場合，受寄者は，寄託者に対し，約定の存続期間のうち履行不能になった後の期間についての報酬の支払を求めることができない。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2015",num:"23",subject:"min",q:`賃貸借契約及び消費貸借契約に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．賃貸借契約において賃貸人が目的物の所有者である場合，その目的物の所有権は賃借人に移転しないが，消費貸借契約において貸主が目的物の所有者である場合，その目的物の所有権は借主に移転する。
イ．賃貸借契約は，諾成契約であるから，当事者間の合意によって成立するが，消費貸借契約は，要物契約であるから，当事者間で，当事者の一方が金銭その他の物を引き渡すことを約し，相手方がその引渡しを受けた物と種類，品質及び数量の同じ物をもって返還することを約したとしても，その合意は無効である。
ウ．賃貸借契約における賃料の支払時期も，利息付きの消費貸借契約における利息の支払時期も，当事者の合意により自由に定めることができる。
エ．賃貸借契約において当事者が期間を定めなかった場合に貸主が解約の申入れをしたときは，借主は，法定の期間内は目的物を返還しなくても遅滞の責任を負わないが，消費貸借契約において当事者が返還の時期を定めなかった場合に貸主が返還を請求したときは，借主は，直ちに目的物を返還しなければ遅滞の責任を負う。
オ．賃貸借契約において当事者が期間を定めなかった場合，借主はいつでも解約の申入れをすることができるが，消費貸借契約において当事者が返還の時期を定めなかった場合，無利息の消費貸借契約のときに限り，借主はいつでも解約の申入れをすることができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2015",num:"24",subject:"min",q:"賃貸借及び使用貸借に関する次の１から４までの各記述のうち，使用貸借にのみ当てはまるものはどれか。なお，本問において，賃貸借の賃貸人及び使用貸借の貸主は，いずれも「貸主」といい，賃貸借の賃借人及び使用貸借の借主は，いずれも「借主」という。",c1:"１．借主は，目的物の通常の必要費を負担する。",c2:"２．借主は，契約又はその目的物の性質によって定まった用法に従い，目的物の使用及び収益をしなければならない。",c3:"３．貸主が死亡した場合，契約は当然に終了する。",c4:"４．借主は，契約が終了した場合，目的物を原状に復さなければならないが，借主が目的物に附属させた物を収去するには，貸主の同意を得る必要がある。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2015",num:"25",subject:"min",q:`Ａは，Ｂとの間で，Ａが所有する２階建ての甲建物を月額５０万円の賃料で賃貸する旨の契約を締結し，甲建物をＢに引き渡した。その後，Ｂは，Ａの承諾を得て，Ｃとの間で，甲建物を月額５０万円の賃料で転貸する旨の契約を締結し，甲建物をＣに引き渡した。それからしばらくして甲建物の屋根の不具合により雨漏りが発生し，Ｃは，甲建物の２階部分を使用することができなくなった。この場合に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ｃは，Ｂに対し，甲建物の屋根の不具合を修繕するよう請求することができる。
イ．Ｃは，Ｂが甲建物の屋根の不具合の修繕を拒絶するときは，Ａに対し，甲建物の屋根の不具合を修繕するよう請求することができる。
ウ．ＡがＢに対して甲建物の２階部分を使用することができなくなった日以後の賃料の支払を請求した場合，Ｂは，甲建物の２階部分の割合に相当する賃料については，その支払を拒絶することができる。
エ．ＡがＣに対して甲建物の２階部分を使用することができなくなった日以後の賃料の支払を請求した場合，Ｃは，甲建物の２階部分の割合に相当する賃料についても，その支払を拒絶することができない。
オ．判例によれば，甲建物の屋根の不具合がＣの責めに帰すべき事由によって生じた場合，Ａは，Ｂに対し，甲建物の屋根の不具合により生じた損害の賠償を請求することができない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2015",num:"26",subject:"min",q:`請負契約に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．請負人が債務の本旨に従って仕事を完成した後であっても，注文者は，損害を賠償して契約の解除をすることができる。
イ．判例によれば，建物の建築を目的とする請負契約の請負人は，自ら材料を提供したか，注文者が材料を提供したかにかかわらず，完成した建物の所有権を取得する。
ウ．注文者が破産手続開始の決定を受けたときは，請負人は，契約の解除をすることができる。
エ．仕事の目的物の引渡しを要する場合には，注文者は，仕事の目的物の引渡しを受けるまで，請負人に対し，報酬の支払を拒むことができる。
オ．請負人は，注文者との間で瑕疵担保責任を負わない旨の特約をした場合であっても，瑕疵があることを知りながらこれを注文者に告げずに仕事の目的物を引き渡したときには，その瑕疵についての担保責任を免れることができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2015",num:"27",subject:"min",q:`請負人の瑕疵担保責任に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．仕事の目的物の引渡しを要する場合において，その引渡しの時に目的物の瑕疵が明らかであったときは，請負人は瑕疵担保責任を負わない。
イ．仕事の目的物に瑕疵がある場合，注文者は，その瑕疵の修補に代えて，又はその修補とともに，損害賠償の請求をすることができる。
ウ．仕事の目的物の瑕疵が注文者の供した材料の性質又は注文者の与えた指図によって生じた場合，請負人は，その材料又は指図が不適当であることを知りながら注文者に告げなかったときを除き，瑕疵担保責任を負わない。
エ．仕事の目的物に瑕疵がある場合において，その瑕疵を修補することが不能であるときは，注文者は，請負契約を解除することができる。
オ．仕事の目的物の引渡しを要しない場合，請負人の瑕疵担保責任の存続期間は，その仕事が終了した時から起算する。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2015",num:"28",subject:"min",q:`不法行為に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．他人の生命を侵害した者は，被害者の相続人に対してのみ慰謝料を支払う義務を負う。
イ．被害者が死亡していない場合には，被害者の近親者は，慰謝料を請求することができない。
ウ．ある事業のために他人を使用する者は，被用者がその事業の執行について第三者に加えた損害を賠償する責任を負うが，この責任は，被用者に賠償の資力があったとしても免れることができない。
エ．被害者が加害者の使用者に対し使用者責任に基づく損害賠償を請求する場合，被害者は，加害者による不法行為があったことに加え，加害者の使用者が加害者である被用者の選任及びその事業の監督について相当の注意をしていなかったことを主張・立証しなければならない。
オ．過失によって一時的に自己の行為の責任を弁識する能力を欠く状態を招いた者は，その間に他人に加えた損害について賠償の責任を負う。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2015",num:"29",subject:"min",q:`婚姻が解消した場合の法律関係に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．婚姻によって氏を改めた者は，婚姻が夫婦の一方の死亡によって解消した場合であるか離婚によって解消した場合であるかを問わず，婚姻前の氏に戻るが，法定の期間内に届出をすれば，婚姻が解消した際に称していた氏を称することができる。
イ．婚姻が離婚により終了した場合には，姻族関係は当然に終了するが，婚姻が夫婦の一方の死亡により終了した場合には，姻族関係は生存配偶者が姻族関係を終了させる意思を表示したときに限り終了する。
ウ．婚姻中の夫婦の間に生まれた子が未成年であるときは，協議上の離婚の際に，父母の一方を親権者と定めなければならず，この定めについては，家庭裁判所の許可を要しない。
エ．婚姻が離婚により終了した場合には，配偶者の財産分与請求権が認められ，また，婚姻が夫婦の一方の死亡により終了した場合には，生存配偶者の相続権が認められるが，判例によれば，配偶者について認められるこれらの権利は，内縁関係にある者についても類推して認められる。
オ．判例によれば，協議上の離婚をした夫婦の一方は，相手方に対し財産の分与を請求した場合には，相手方に対し慰謝料を請求することはできない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2015",num:"30",subject:"min",q:`親子関係に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．婚姻成立後２００日以内に生まれた子であっても，同棲開始の時から２００日経過後に生まれたときは，嫡出子であることが推定され，親子関係を否定するには，嫡出否認の方法によらなければならない。
イ．父が，嫡出でない子について嫡出子として出生の届出をし，それが受理された場合であっても，その出生の届出は，認知の届出としての効力を有しない。
ウ．離婚後３００日以内に生まれた子であっても，嫡出の推定が及ばないときには，その子は，血縁上の父に対して認知の訴えを提起することができる。
エ．女性が，他人の卵子を用いた生殖補助医療により子を懐胎し出産した場合であっても，出生した子の母は，その子を懐胎し出産した女性である。
オ．保存された男性の精子を用いてその男性の死亡後に行われた人工生殖によって女性が子を懐胎し出産した場合には，その男性と子の間に法律上の親子関係は認められない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2015",num:"31",subject:"min",q:`親権と未成年後見に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．後見人は，正当な事由があるときは，家庭裁判所の許可を得て，その任務を辞することができる。
イ．親権を行う者が財産管理権を有しない場合に選任された未成年後見人であっても，財産管理権のほか，身上監護権も有する。
ウ．離婚に際し，協議により父母の一方を親権者と定めた場合には，父母の協議により親権者を変更することができる。
エ．親権停止の審判によって未成年者に対して親権を行う者がなくなるときは，後見が開始する。
オ．特別養子を除く養子（いわゆる普通養子）は，実親及び養親の共同親権に服する。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2015",num:"32",subject:"min",q:`後見に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．任意後見契約が登記されている場合，家庭裁判所は，本人の利益のため特に必要があると認めるときに限り，後見開始の審判をすることができる。
イ．成年後見人は，成年被後見人に代わって成年被後見人の居住の用に供する建物を売却するには，家庭裁判所の許可を得なければならないが，成年被後見人に代わって成年被後見人の居住の用に供する建物の賃貸借契約を解除するには，家庭裁判所の許可を得る必要はない。
ウ．後見開始の審判を受ける者に配偶者がある場合には，その配偶者に成年後見人の職務を行うことができない事情があるときを除き，その配偶者が成年後見人に就任する。
エ．成年後見及び未成年後見のいずれにおいても，家庭裁判所は２人以上の後見人を選任して，後見事務を分掌させることができる。
オ．破産者は，後見人となることができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2015",num:"33",subject:"min",q:`遺贈に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．遺贈は，相続人に対してすることができない。
イ．包括遺贈を受けた者は，相続財産に属する債務を承継する。
ウ．受遺者が遺言者より先に死亡した場合は，遺言者が遺言において別段の意思を表示していない限り，受遺者の相続人が遺贈を受ける権利を相続する。
エ．遺言者が遺言において別段の意思を表示していない限り，受遺者は，遺贈の履行を請求することができる時から果実を取得する。
オ．遺贈の承認及び放棄は，撤回することができない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2015",num:"34",subject:"min",q:`遺留分に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．遺留分権利者の債権者は，遺留分権利者がその遺留分を放棄しない限り，遺留分減殺請求権を債権者代位の目的とすることができる。
イ．遺言者の財産全部の包括遺贈に対して遺留分権利者が減殺請求権を行使した場合，遺留分権利者に帰属する権利は，遺産分割の対象となる相続財産とならない。
ウ．包括遺贈の場合においても，被相続人の兄弟姉妹が相続人であるときは，その兄弟姉妹は，遺留分を有しない。
エ．遺留分減殺請求権は，裁判上行使しなければならない。
オ．遺留分権利者は，受贈者に対して減殺請求をした場合，その後に受贈者から贈与の目的物を譲り受けた者に対して更に減殺請求をすることができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2015",num:"35",subject:"min",q:`催告に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．被保佐人との間で不動産の売買契約を締結した者が，保佐人に対し，１か月以上の期間を定めて，その期間内にその売買契約を追認するかどうかを確答すべき旨の催告をし，保佐人がその期間内に確答を発しなかった場合には，その売買契約を追認したものとみなされる。
イ．無権代理人がした売買契約について，その売買契約の相手方が，本人に対し，相当の期間を定めて，その期間内にその売買契約を追認するかどうかを確答すべき旨の催告をし，本人がその期間内に確答をしなかった場合には，その売買契約を追認したものとみなされる。
ウ．債権者があらかじめ弁済の受領を拒んでいるときは，債務者は，弁済の準備をしたことを通知してその受領の催告をすれば，債務不履行責任を免れる。
エ．債務不履行に基づく解除権が発生した場合，その相手方が，解除権を有する者に対し，相当の期間を定めて，その期間内に解除をするかどうかを確答すべき旨の催告をし，その期間内に解除の通知を受けなかったときは，解除権は，消滅する。
オ．遺贈義務者が，受遺者に対し，相当の期間を定めて，その期間内にその遺贈の承認又は放棄をすべき旨の催告をし，受遺者がその期間内に遺贈義務者に対してその意思を表示しなかった場合には，その遺贈を放棄したものとみなされる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2015",num:"36",subject:"min",q:`利息に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．留置権者は，留置物から生ずる果実を収取し，他の債権者に先立って，これを自己の債権の弁済に充当することができるが，その果実は，被担保債権の利息に充当され，なお剰余があるときでも，元本に充当することはできない。
イ．債務者が利息の支払を１年分以上延滞し，債権者が催告をしても，債務者がその利息を支払わないときは，債権者は，これを元本に組み入れることができる。
ウ．主たる債務者の委託を受けないで保証をした保証人が弁済をしたときは，主たる債務者は，弁済がされた日以後の法定利息をその保証人に支払わなければならない。
エ．売主が，買主から売買代金の一部を受領した後，買主の債務不履行を理由として売買契約を解除した場合において，売主がその売買代金の一部として受領した金銭を買主に返還するときは，その受領の時から利息を付さなければならない。
オ．売買契約において，売主の目的物引渡義務が先履行とされ，かつ，代金の支払について期限がある場合，買主は，その目的物の引渡しを受けた後も，代金の支払についての期限が到来するまでは，利息を支払う必要がない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2015",num:"1",subject:"kei",q:`次のアからオまでの各記述を判例の立場に従って検討した場合，正しいものの組合せは，後記１から５までのうちどれか。
ア．不真正不作為犯の作為義務は，法律上の規定に基づかなければならない。
イ．不真正不作為犯が成立するために，作為可能性を必要としない場合もある。
ウ．不真正不作為犯の因果関係が認められるためには，期待された作為をしていれば結果が発生しなかったことが，合理的な疑いを超える程度に確実であったことが必要である。
エ．不真正不作為犯は，殺人罪や放火罪については成立するが，財産犯については成立しない。
オ．不作為による放火罪が成立するためには，既発の火力を利用する意思は必ずしも必要ではない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2015",num:"2",subject:"kei",q:"業務妨害罪に関する次の１から５までの各記述を判例の立場に従って検討し，誤っているものを２個選びなさい。",c1:"１．業務妨害罪における「業務」とは，職業その他社会生活上の地位に基づいて継続して行う事務又は事業をいい，営利を目的とするものでなくても「業務」に含まれる。",c2:"２．業務妨害罪における「業務」は，業務自体が適法なものであることを要するから，行政取締法規に違反した営業行為は「業務」には当たらない。",c3:"３．強制力を行使しない非権力的公務は，公務執行妨害罪における「公務」に当たるとともに業務妨害罪における「業務」にも当たる。",c4:"４．威力業務妨害罪における威力を「用いて」といえるためには，威力が直接現に業務に従事している他人に対してなされることを要する。",c5:"５．業務妨害罪における「妨害」とは，現に業務妨害の結果が発生したことを必要とせず，業務を妨害するに足りる行為があることをもって足りる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"24"},{year:"2015",num:"3",subject:"kei",q:`次のアからオまでの各事例を判例の立場に従って検討し，（ ）内の甲の行為とＶの死亡との間に因果関係が認められる場合には１を，認められない場合には２を選びなさい。
ア．甲は，自宅に遊びに来た友人Ｖの態度に腹を立て，その頭部を平手で１回殴打したところ，Ｖが家から出て行ったので，謝りながらＶを追い掛けた。Ｖは，甲が謝りながら追い掛けてきたことに気付いたが，甲と話をしたくなかったので，甲に追い付かれないように，あえて遮断機が下りていた踏切に入ったところ，列車にひかれ，内臓破裂により死亡した。（甲がＶの頭部を平手で１回殴打した行為）
イ．甲は，マンション４階の甲方居間で，Ｖの頭部や腹部を木刀で多数回殴打した。Ｖは，このままでは殺されると思い，甲の隙を見て逃走することを決意し，窓からすぐ隣のマンションのベランダに飛び移ろうとしたが，これに失敗して転落し，脳挫滅により死亡した。（甲がＶの頭部や腹部を木刀で多数回殴打した行為）
ウ．甲は，Ｖに致死量の毒薬を飲ませたが，その毒薬が効く前に，Ｖは，事情を知らない乙に出刃包丁で腹部を刺されて失血死した。（甲がＶに致死量の毒薬を飲ませた行為）
エ．甲は，路上でＶの頭部を木刀で多数回殴打し，これにより直ちに治療しなければ数時間後には死亡するほどの脳出血を伴う傷害をＶに負わせ，倒れたまま動けないＶを残して立ち去った。そこへ，たまたま通り掛かった事情を知らない乙が，Ｖの頭部を１回蹴り付け，Ｖは，当初の脳出血が悪化し，死期が若干早まって死亡した。（甲がＶの頭部を木刀で多数回殴打した行為）
オ．甲は，面識のないＶが電車内で酔って絡んできたため，Ｖの顔面を拳で１回殴打したところ，もともとＶは特殊な病気により脳の組織が脆弱となっており，その１回の殴打で脳の組織が崩壊し，その結果Ｖが死亡した。（甲がＶの顔面を拳で１回殴打した行為）`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"21211"},{year:"2015",num:"4",subject:"kei",q:"偽造公文書の行使に関する次の１から５までの各記述を判例の立場に従って検討し，正しいものを２個選びなさい。",c1:"１．行使の目的なしに作成された偽造公文書は，偽造公文書行使罪の客体とならない。",c2:"２．偽造公文書の内容，形式を口頭で他人に告知するだけでは，偽造公文書行使罪は成立しない。",c3:"３．偽造公文書を相手方に示して錯誤に陥れ，相手方から現金の交付を受けた場合，偽造公文書行使罪は詐欺罪に吸収され，詐欺罪のみが成立する。",c4:"４．交際相手と結婚するために自己に生活能力があることを示そうとして，偽造した国家試験合格証書を当該相手に見せた場合，偽造公文書行使罪が成立する。",c5:"５．自動車を運転する際，警察官から運転免許証の提示を求められれば提示するつもりで偽造した運転免許証を携帯した場合，偽造公文書行使罪が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"24"},{year:"2015",num:"5",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合，誤っているものはどれか。",c1:"１．甲は，Ｘを眠らせてＸが左腕に着けていた高級腕時計を外して持ち去ろうと考え，Ｘに多量の睡眠薬を飲ませたが，Ｘが眠らなかったため，Ｘの腕時計に触れることすらできなかった。甲には昏酔強盗未遂罪が成立する。",c2:"２．拘置所に勾留中の甲は，逃走しようと考え，収容されていた房の壁を削り取って穴を開けたが，その穴が脱出可能な程度の大きさになる前に発見されたため，逃走行為に及ばなかった。甲には加重逃走未遂罪が成立する。",c3:"３．甲は，Ｘから現金を脅し取ろうと考え，「殺されたくなければ１００万円をよこせ。」などとＸを恐喝する内容の手紙をポストに投かんし，その手紙はＸ方に配達されたが，手紙を見たＸの妻は冗談であると思い，その内容をＸに伝えなかった。甲には恐喝未遂罪が成立する。",c4:"４．甲は，Ｘ方の居間に置かれた金庫に多額の現金が入れてあることを知り，これを盗む目的で，Ｘ方の無施錠のドアから玄関に入ったが，Ｘにその場で発見されたため，逃走した。甲には窃盗未遂罪が成立する。",c5:"５．甲は，Ｘに対し，Ｘの孫を装って電話をかけ，「おじいちゃん。金がなくて困っているので，今から言う俺の口座に１００万円を送金して。」と言って現金をだまし取ろうとしたが，その声が孫の声と違うことに気付いたＸは，甲から指定された口座に送金しなかった。甲には詐欺未遂罪が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2015",num:"6",subject:"kei",q:"次の１から５までの各事例における甲のＶに対する罪責について，判例の立場に従って検討した場合，甲に殺人罪が成立しないものはどれか。",c1:"１．甲は，Ｖには自殺がどのようなものかを理解する能力がなく，しかもＶが甲の命ずることには何でも服従するのを利用してＶを死亡させようと考え，Ｖに対して，首を吊る方法を教えた上，これを実行するよう命じた。Ｖは，甲から命じられたとおりに，教えられた方法で自ら首を吊って窒息死した。",c2:"２．甲は，真冬の深夜，河川堤防でＶに激しい暴行を加えたところ，Ｖは走って逃げ出した。甲は，逃げるＶを堤防際まで追い詰めれば，逃げ場を失ったＶが堤防から下の川に飛び込んで溺死するかもしれないがそれでも構わないと考え，Ｖを堤防際まで追い詰めた。逃げ場を失ったＶは，甲からの暴行を免れるため，堤防から約３メートル下の川に飛び込んで溺死した。",c3:"３．甲は，Ｖから，包丁で腹部を突き刺して殺してほしいと依頼され，これを真意から出た依頼であると信じて包丁でＶの腹部を突き刺したが，その依頼はＶの冗談であって，Ｖの真意から出たものではなかった。Ｖは，甲から腹部を包丁で刺されたことにより失血死した。",c4:"４．甲は，妻と話し合って一家心中することとし，妻と５歳になる息子Ｖからそれぞれ一家心中することの承諾を得た上，妻とＶを殺すため，同人らの腹部を包丁で刺した。妻とＶは，甲から腹部を包丁で刺されたことにより失血死した。",c5:"５．甲は，Ｖから心中を持ち掛けられたことを利用して，Ｖを死亡させようと考え，自らは死ぬ気がないのに，Ｖとの心中を了承した。Ｖは，甲の真意を知っていれば死ぬことはなかったが，甲も一緒に死んでくれるものと誤信したまま，甲の目の前で，甲が用意した致死量の毒を飲んで中毒死した。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2015",num:"7",subject:"kei",q:`学生Ａと学生Ｂは，次の【事例】における甲の罪責について後記【会話】のとおり検討している。【会話】中の①から⑧までの（ ）内から適切な語句を選んだ場合，正しいものの組合せは，後記１から５までのうちどれか。
【事 例】
甲は，乙に対し，殺意をもって，拳銃の引き金を引いて銃弾１発を発射し，乙の胸部に命中させて乙を殺害した。甲が拳銃で乙に狙いを付ける直前，乙は，甲に対し，殺意をもって，拳銃で狙いを付けて引き金を引こうとしていたものの，甲が発射した銃弾によって死亡したことから，引き金を引くには至らなかった。なお，甲は，乙が拳銃で自己に狙いを付けていることを知らなかった。
【会 話】
学生Ａ．甲の行為は，殺人罪の構成要件に該当する。そして，正当防衛の成立要件として，防衛の意思が必要であると考えると，甲には①（ａ．殺人既遂罪が成立し・ｂ．正当防衛が認められ），防衛の意思は不要であると考えると，甲には②（ｃ．殺人既遂罪が成立する・ｄ．正当防衛が認められる）ことになる。
学生Ｂ．最近では，防衛の意思必要説，不要説のいずれからも，甲には殺人未遂罪が成立し得るという見解が有力に主張されている。防衛の意思必要説からの殺人未遂罪説は，違法性は行為無価値と結果無価値の総合から構成されるという違法二元論を根拠とし，③（ｅ．行為無価値の存在と結果無価値の欠如・ｆ．行為無価値の欠如と結果無価値の存在）を理由に，一方，防衛の意思不要説からの殺人未遂罪説は，④（ｇ．適法・ｈ．違法）な結果が発生する具体的危険があることを理由に，それぞれ殺人未遂罪が成立し得ると説明している。
学生Ａ．しかし，防衛の意思不要説からの殺人未遂罪説に対しては，⑤（ｉ．「侵害はよいが侵害を試みることは許されない」・ｊ．「侵害を試みることはよいが侵害は許されない」）ことになるとの批判がある。
学生Ｂ．もともと，防衛の意思不要説からの殺人未遂罪説が問題にしている危険は，⑥（ｋ．別のあり得た違法結果・ｌ．当該結果）を発生させる危険ではなく，⑦（ｍ．別のあり得た違法結果・ｎ．当該結果）を発生させる危険と言われている。だから，その批判は当たらない。
学生Ａ．いずれにせよ，殺人未遂罪説は，実際に乙が死亡しているのだから，罪刑法定主義上，問題があると思う。
学生Ｂ．刑法第４３条は，「犯罪の実行に着手してこれを遂げなかった」と規定しており，これを，⑧（ｏ．構成要件的結果・ｐ．構成要件に該当する違法な結果）が発生しなかったという意味に理解すれば，文言解釈としての問題はないと思う。`,c1:"１．①ａ ②ｄ ③ｅ ④ｈ ⑤ｉ ⑥ｋ ⑦ｎ ⑧ｏ",c2:"２．①ｂ ②ｃ ③ｅ ④ｇ ⑤ｊ ⑥ｋ ⑦ｎ ⑧ｐ",c3:"３．①ｂ ②ｃ ③ｆ ④ｇ ⑤ｊ ⑥ｋ ⑦ｎ ⑧ｏ",c4:"４．①ａ ②ｄ ③ｅ ④ｈ ⑤ｉ ⑥ｌ ⑦ｍ ⑧ｐ",c5:"５．①ａ ②ｄ ③ｆ ④ｈ ⑤ｊ ⑥ｌ ⑦ｍ ⑧ｐ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2015",num:"8",subject:"kei",q:`次のアからオまでの各記述を判例の立場に従って検討した場合，誤っているものの組合せは，後記１から５までのうちどれか。
ア．準強制わいせつ罪（刑法第１７８条第１項）の「心神喪失」とは，責任能力における心神喪失と同義である。
イ．第三者の暴行・脅迫によって女子が「抗拒不能」の状態に陥っているのを利用して，同人を姦淫した場合，準強姦罪（刑法第１７８条第２項）が成立する。
ウ．２名以上の者が，女子を強姦する目的でそれぞれ暴行を加えて同人の反抗を著しく困難な状態にした上，犯行現場にいる者のうち１名が姦淫行為に及んだ場合，集団強姦罪（刑法第１７８条の２）が成立する。
エ．女子を強姦する目的で暴行を加えたところ，その暴行によって同人が死亡したため，姦淫するに至らなかった場合，強姦致死罪（刑法第１８１条第２項）が成立する。
オ．女子に対して準強制わいせつ罪に当たる行為をし，同人に騒がれて捕まりそうになり，わいせつな行為を行う意思を喪失してその場から逃走するため同人に暴行を加えて傷害を負わせた場合，強制わいせつ致傷罪（刑法第１８１条第１項）は成立せず，準強制わいせつ罪と傷害罪が成立する。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2015",num:"9",subject:"kei",q:`次の【事例】に関する１から５までの各【記述】を判例の立場に従って検討し，正しいものを２個選びなさい。
【事 例】
　Ａは，外国へ旅行に行った際，旅行先で知り合ったＢから，荷物を預けるので手荷物として日本まで運んでほしいと依頼され，これを了承し，その荷物を日本に持ち込んだが，荷物の中身は覚せい剤であった。
　なお，覚せい剤をみだりに日本に持ち込んだ場合には覚せい剤取締法の輸入罪が成立し，麻薬をみだりに日本に持ち込んだ場合には麻薬及び向精神薬取締法の輸入罪が成立するものとする。
【記 述】`,c1:"１．Ａは，Ｂから預かった荷物の中身は「薬物ではない。」と聞かされていたが，「薬物以外の何か違法なものかもしれない。」と思ってこれを日本に持ち込んだ場合，Ａには覚せい剤取締法の輸入罪が成立する。",c2:"２．Ａは，Ｂから預かった荷物の中身は「覚せい剤である。」と思ったものの，覚せい剤を日本に持ち込むことは法律上禁止されていないと考えてこれを日本に持ち込んだ場合，Ａには覚せい剤取締法の輸入罪が成立する。",c3:"３．Ａは，Ｂから預かった荷物の中身は「覚せい剤である。」と聞かされたものの，覚せい剤が違法な薬物であることを知らず，「覚せい剤とは高価な化粧品のことである。」と認識してこれを日本に持ち込んだ場合でも，「覚せい剤」という認識がある以上，Ａには覚せい剤取締法の輸入罪が成立する。",c4:"４．Ａは，Ｂから預かった荷物の中身は「覚せい剤かもしれないし，もしかしたら麻薬かもしれない。」と思ってこれを日本に持ち込んだ場合，Ａには客体の認識に錯誤があり，麻薬及び向精神薬取締法の輸入罪の法定刑が覚せい剤取締法の輸入罪の法定刑よりも軽いときには，Ａには麻薬及び向精神薬取締法の輸入罪が成立する。",c5:"５．Ａは，Ｂから預かった荷物の中身は「覚せい剤ではないが，麻薬である。」と思ってこれを日本に持ち込んだ場合，覚せい剤取締法の輸入罪の法定刑と麻薬及び向精神薬取締法の輸入罪の法定刑が同じときには，Ａには覚せい剤取締法の輸入罪が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"25"},{year:"2015",num:"10",subject:"kei",q:`次の【記述】中の①から⑨までの（ ）内から適切な語句を選んだ場合，正しいものの組合せは，後記１から５までのうちどれか。
【記 述】
強盗罪における強取とは，相手方の反抗を①（ａ．困難にする・ｂ．抑圧する）に足りる程度の暴行・脅迫を加え，相手方の②（ｃ．意思に反し・ｄ．瑕疵ある意思に基づき），相手方の占有に属する財物を自己又は第三者の占有に移転することをいう。強取と③（ｅ．窃盗罪における窃取・ｆ．恐喝罪における喝取）との区別は，実行行為としての暴行・脅迫の有無であり，強取と④（ｇ．窃盗罪における窃取・ｈ．恐喝罪における喝取）との区別は，相手方の反抗を①（ａ．困難にする・ｂ．抑圧する）に足りる程度の暴行・脅迫であるか否か，つまり，暴行・脅迫の程度である。それゆえ，恐喝罪は，⑤（ｉ．委託物横領罪・ｊ．詐欺罪）と同様，相手方の⑥（ｋ．意思に反し・ｌ．瑕疵ある意思に基づき），財物を交付させる犯罪である。そして，強盗罪や⑦（ｍ．窃盗罪・ｎ．恐喝罪）のように，相手方の②（ｃ．意思に反し・ｄ．瑕疵ある意思に基づき），相手方の占有に属する財物を自己又は第三者の占有に移転する犯罪を⑧（ｏ．奪取罪・ｐ．交付罪）と呼び，恐喝罪や⑤（ｉ．委託物横領罪・ｊ．詐欺罪）のように，相手方の⑥（ｋ．意思に反し・ｌ．瑕疵ある意思に基づき），相手方の占有に属する財物を自己又は第三者の占有に移転する犯罪を⑨（ｑ．奪取罪・ｒ．交付罪）と呼んで区別することができる。`,c1:"１．①ａ ②ｃ ③ｅ ④ｈ ⑤ｊ ⑥ｋ ⑦ｎ ⑧ｐ ⑨ｑ",c2:"２．①ｂ ②ｃ ③ｅ ④ｈ ⑤ｊ ⑥ｌ ⑦ｍ ⑧ｐ ⑨ｑ",c3:"３．①ａ ②ｄ ③ｆ ④ｇ ⑤ｉ ⑥ｌ ⑦ｎ ⑧ｐ ⑨ｑ",c4:"４．①ｂ ②ｄ ③ｆ ④ｇ ⑤ｉ ⑥ｋ ⑦ｍ ⑧ｏ ⑨ｒ",c5:"５．①ｂ ②ｃ ③ｅ ④ｈ ⑤ｊ ⑥ｌ ⑦ｍ ⑧ｏ ⑨ｒ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2015",num:"11",subject:"kei",q:"責任能力に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものは どれか。",c1:"１．ある人が同じ精神の障害の状態にありながら，ある行為については完全な責任能力が認められ，他の行為については完全な責任能力が認められないことがある。",c2:"２．心神喪失とは，精神の障害により事物の理非善悪を弁識する能力及びその弁識に従って行動する能力のいずれもない状態をいう。",c3:"３．心神喪失は，精神の障害がある場合に限られるから，アルコールによって一時的にそのような状態に陥った場合は心神喪失と認めることはできない。",c4:"４．心神耗弱は，責任能力が著しく減退しているにすぎないから，その刑を減軽しないこともできる。",c5:"５．１３歳の少年が人を殺害した場合，少年法の規定に基づく手続を経れば，その少年に刑罰を科すことができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2015",num:"12",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合，誤っているものはどれか。",c1:"１．盗品等無償譲受け罪が成立するためには，無償譲受けについて契約を締結しただけでは足りず，盗品等が現実に移転されることが必要であるが，盗品等有償譲受け罪は，有償譲受けにつ いて契約を締結しただけで成立する。",c2:"２．盗品等の売買をあっせんすれば，あっせん自体が無償であっても，盗品等有償処分あっせん罪が成立する。",c3:"３．盗品等有償譲受け罪の客体に対する故意は，財産罪に当たる行為によって領得された物であ ることの認識があれば足り，いかなる財産罪に当たるかの認識までは不要である。",c4:"４．盗品等の売買をあっせんすれば，盗品等が現実に移転されなくても，盗品等有償処分あっせん罪が成立する。",c5:"５．盗品等有償譲受け罪の犯人が本犯である窃盗犯人の配偶者である場合，当該盗品等有償譲受け罪の犯人について，その刑は免除される。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2015",num:"13",subject:"kei",q:`教授Ｘと学生Ｙは，事後強盗罪の共犯に関する事例について後記【会話】のとおり検討している。【会話】中の①から④までの（ ）内から適切な語句を選んだ場合，正しいものの組合せは，後記１から５までのうちどれか。
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
学生Ｙ．④（ｇ．窃盗の既遂・未遂によって事後強盗罪の既遂・未遂が決まることを説明できない・ｈ．窃盗に着手しただけで事後強盗罪の未遂を肯定することになってしまうのではないか）という批判があります。`,c1:"１．①ａ ②ｄ ③ｅ ④ｇ",c2:"２．①ｂ ②ｄ ③ｆ ④ｈ",c3:"３．①ａ ②ｃ ③ｅ ④ｈ",c4:"４．①ｂ ②ｄ ③ｆ ④ｇ",c5:"５．①ａ ②ｃ ③ｅ ④ｇ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2015",num:"14",subject:"kei",q:"証拠隠滅等の罪に関する次の１から５までの各記述を判例の立場に従って検討し，正しいものを２個選びなさい。",c1:"１．甲は，Ａが窃盗被告事件で公判請求されたと知り，同事件に関するＡに有利な情状証拠を隠匿した。甲には証拠隠滅罪は成立しない。",c2:"２．甲は，親族Ａが犯した傷害被疑事件につき，他人を教唆してＡの犯行に関わる証拠を隠滅させた。甲には，親族による犯罪に関する特例（刑法第１０５条）が適用され，証拠隠滅罪の教唆犯は成立しない。",c3:"３．甲は，Ａが犯した殺人被疑事件につき，目撃者Ｂが捜査機関から事情聴取の要請を受けたことを知り，その聴取を妨害するため，Ｂを甲方に２か月間監禁した。甲には証拠隠滅罪が成立する。",c4:"４．甲は，Ａの強盗被告事件に証人として出廷し，法律により宣誓の上，自己の記憶と異なる偽りの事実を証言し，これに基づく証人尋問調書が作成された。甲には証拠偽造罪が成立する。",c5:"５．甲は，自己が犯した強制わいせつ被疑事件に関する証拠の隠滅をＡに教唆して実行させた。甲には証拠隠滅罪の教唆犯が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"35"},{year:"2015",num:"15",subject:"kei",q:`結果的加重犯の共同正犯の成立が認められることを前提に，次の【事例】及び各【見解】に関する後記１から５までの各【記述】を検討し，誤っているものを２個選びなさい。
【事 例】
甲と乙は，丙に対する傷害を共謀し，共同して木刀で丙の手足を殴打していた際，甲は丙に対する殺意を抱き，木刀で丙の頭部を殴打し，丙はその殴打により脳挫傷で死亡した。なお，乙は，甲が殺意を抱いたことを知らなかった。
【見 解】
Ａ説：共同正犯とは，数人が犯罪に至る行為過程を含めた行為を共同することであり，特定の犯罪を共同して実現する場合はもちろんのこと，単なる行為を共同して各自の意図する犯罪を実現する場合も，それぞれの行為について共同正犯の成立を認める。
Ｂ説：共同正犯とは，数人の者が共同して特定の犯罪を行うことであり，構成要件の間に重なり合いがあれば，そのうちのより重い犯罪について共同正犯の成立を認め，軽い犯罪の故意しかない者には，軽い犯罪の刑を科す。
Ｃ説：共同正犯とは，数人の者が共同して特定の犯罪を行うことであり，構成要件の重なり合う限度で軽い犯罪の共同正犯の成立を認める。
【記 述】`,c1:"１．Ａ説からは，甲と乙に殺人罪の共同正犯が成立するとの結論が導かれる。",c2:"２．Ｂ説からは，甲と乙に殺人罪の共同正犯が成立するとの結論が導かれる。",c3:"３．Ｂ説に対しては，犯罪の成立と科刑が分離するのは妥当でないと批判できる。",c4:"４．Ｃ説からは，甲と乙に傷害致死罪の共同正犯が成立し，甲には殺人罪の単独犯が成立するとの結論が導かれる。",c5:"５．Ｃ説に対しては，Ａ説やＢ説から，共同正犯の成立範囲が広すぎると批判できる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"15"},{year:"2015",num:"16",subject:"kei",q:"事後強盗罪に関する次の１から５までの各記述を判例の立場に従って検討し，正しいものを２個選びなさい。",c1:"１．窃盗既遂犯人のみが事後強盗罪の主体となる。",c2:"２．事後強盗罪は，強盗罪と同様，財物と財産上の利益について成立する。",c3:"３．窃盗犯人が窃盗の現場で逮捕を免れるために暴行・脅迫を加えた相手方が，現に当該窃盗犯人を逮捕する意図を有していなくても，事後強盗罪は成立する。",c4:"４．窃盗犯人が窃盗の現場で逮捕を免れるために相手方を殺害した場合，強盗殺人罪は成立しない。",c5:"５．強盗予備罪の「強盗の罪を犯す目的」には，事後強盗を犯す目的も含まれる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"35"},{year:"2015",num:"17",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合，誤っているものはどれか。",c1:"１．甲は，酒に酔った状態で，自動車を無免許で運転した。甲には酒酔い運転の罪と無免許運転の罪が成立し，これらは観念的競合となる。",c2:"２．甲及び乙は，対立する暴走族の構成員を襲撃することを共謀し，同構成員であるＸ，Ｙ及びＺに対し，殴る蹴るの暴行を加え，それぞれに傷害を負わせた。甲及び乙にはそれぞれ３個の傷害罪が成立し，これらは併合罪となる。",c3:"３．甲は，乙がＸ及びＹを殺害するつもりでいることを知ったことから，凶器としてナイフ１本を乙に手渡したところ，乙は，同ナイフを用いてＸ及びＹを殺害した。甲には２個の殺人幇助の罪が成立し，これらは併合罪となる。",c4:"４．甲は，離婚した元妻Ｘを殺害する目的で，深夜，Ｘの母親Ｙ宅に侵入し，その場にいたＸ，Ｙ及びＹの子Ｚを順次殺害した。甲には１個の住居侵入罪と３個の殺人罪が成立するが，住居侵入罪と各殺人罪は牽連犯となり，全体が科刑上一罪となる。",c5:"５．甲は，身の代金を得る目的でＸを拐取し，更にＸを監禁し，その間にＸの近親者に対して身の代金を要求した。甲には身の代金目的拐取罪，拐取者身の代金要求罪及び監禁罪が成立し，身の代金目的拐取罪と拐取者身の代金要求罪は牽連犯となり，これらの各罪と監禁罪は併合罪となる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2015",num:"18",subject:"kei",q:`次の【事例】に関する後記１から５までの甲の罪責を判例の立場に従って検討した場合，甲に（ ）内の犯罪が成立しないものはどれか。
【事 例】
甲は，Ａ方から高価な壺を盗み出した。Ａは，これに気付いて甲を追い掛けたが，甲は，逃げ切って帰宅し，盗んだ上記壺を自宅のテーブルに置いていた。警察官は，甲の本件窃盗事件の捜査を開始した。`,c1:"１．警察官は，甲を立会人として本件窃盗事件に係る捜索差押許可状に基づき甲方を捜索中，テーブルに上記壺が置かれているのを発見し，これを差し押さえようとして手を伸ばしたところ，甲は，腹立ち紛れにその壺を取り上げ，その場で床にたたき付けて粉々に割った。（公務執行妨害罪）",c2:"２．甲は，自宅において，本件窃盗事件に係る捜索差押許可状に基づく捜索を受けた際，自宅に隠し持っていた覚せい剤が警察官に発見されることを恐れ，これを密かにトイレに流した。（証拠隠滅罪）",c3:"３．甲は，本件窃盗事件で通常逮捕され，警察署において弁解録取の手続を受けた際，警察官が甲の供述を記載した弁解録取書を手に取って破った。（公用文書毀棄罪）",c4:"４．甲は，本件窃盗事件について発付された勾留状の執行により留置施設に留置されていたが，留置担当者の隙を見て同施設から外へ逃走した。(単純逃走罪）",c5:"５．甲は，本件窃盗事件について犯人ではないと否認していたが，公判請求され，公判でＡが被害状況を証言したことを逆恨みし，公判係属中，Ａに対して「自分が有罪になったら，Ａの自宅へ行って直接会ってお礼をさせてもらう。」旨の手紙を送り，Ａはこれを読んで不安に思った。（証人威迫罪）",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2015",num:"19",subject:"kei",q:`罪刑法定主義に関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。
ア．犯罪と刑罰は，「法律」によって定められていなければならず，この「法律」には，法律の委任を受けた政令，条例及び慣習法が含まれる。
イ．行為の時に適法であった行為を，その後の法律によって遡って犯罪とすることは，許されない。
ウ．ある刑罰法規につき，条文の文言を，語義の可能な範囲内で通常の意味よりも広げて解釈することは，許されない。
エ．刑の長期と短期を定めて言い渡し，現実の執行期間をその範囲内において執行機関の裁量に委ねることは，許されない。
オ．ある刑罰法規が，犯罪に比べて著しく均衡を失する重い刑罰を規定している場合，当該刑罰法規は違憲である。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2015",num:"20",subject:"kei",q:`次の【事例】に関する後記アからオまでの各【記述】を判例の立場に従って検討し，正しい場合には１を，誤っている場合には２を選びなさい。
【事 例】
借金の返済に苦しんでいた甲とその内縁の妻乙は，Ａ市が発行した乙を被保険者とする国民健康保険被保険者証の氏名を乙から実在しない丙に改変し，丙になりすまして消費者金融会社から借入れをして現金を手に入れることを相談した。甲と相談したとおり，乙は，上記国民健康保険被保険者証の被保険者氏名欄に乙とあるのを丙と書き換えた。そして，乙は，消費者金融会社の無人借入手続コーナーにおいて，借入申込書に丙の氏名を記載し，丙と刻した印鑑を押捺するなどして丙名義の借入申込書１通を完成させた上，同申込書及び氏名を丙に改変した上記国民健康保険被保険者証の内容を，同コーナーに設置された機械を使用し，同機械に接続されている同社本店の端末機に送信し，同社の貸付手続担当者に対し，丙であるかのように装って１００万円の借入れを申し込んだ。同担当者は，当該申込みをした者が真実丙であり，かつ，貸付金は約定のとおりに返済されるものと誤信し，同社の貸付システムに従って丙名義の借入カードを上記コーナーに設置された機械から発券した。乙は，その場で同カードを入手し，同カードを現金自動入出機に挿入して同機から現金１００万円を引き出した。その後，乙は，上記行為に及んだことを後悔し，自宅で，甲に一緒に自首をしようと持ち掛けた。甲は，これを聞いて激高し，乙を窒息死させようと考え，その首を絞めたところ，乙は首を絞められたことによるショックで心不全になり死亡した。甲は，乙の死亡から約３０分後，死亡して横たわっている乙の指に時価２０万円相当の乙の指輪がはめてあることに気が付き，同指輪を奪って逃走した。
【記 述】
ア．乙が国民健康保険被保険者証の被保険者氏名欄を丙と書き換えた行為については，単に文書の内容を書き換えたにすぎないから，甲と乙には，公文書偽造罪ではなく，公文書変造罪が成立する。
イ．乙が丙名義の借入申込書を作成した行為については，丙が実在しなくても，一般人をして真正に作成された文書であると誤信させる危険があるから，甲と乙には有印私文書偽造罪が成立する。
ウ．甲と乙は，当初から現金１００万円を手に入れる目的で丙名義の借入カードを入手し，同カードを利用して現金１００万円を引き出したのだから，甲と乙には現金１００万円について詐欺罪が成立する。
エ．甲は，乙を窒息死させようとしていたが，乙はそれとは別の原因で死亡するに至ったのであるから，甲には，乙の首を絞めて死亡させた行為について殺人既遂罪は成立せず，殺人未遂罪と過失致死罪が成立する。
オ．甲が乙の指輪を奪った行為については，その時点で乙は既に死んでいるから，甲には，窃盗罪ではなく，占有離脱物横領罪が成立する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"21222"},{year:"2014",num:"1",subject:"ken",q:`「法の支配」の原理に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．「法の支配」は，「人による支配」を排斥し，権力を「法」で拘束することによって国民の権利・自由を保障することを目的とする原理である。
イ．「法の支配」は，「法律による行政」の原理を意味するものであり，その法律自体の内容は問わない原理である。
ウ．日本国憲法も，憲法の最高法規性，基本的人権の保障，特別裁判所の設置の禁止，そして裁判所による違憲立法審査権等からして，「法の支配」の原理に立脚しているといえる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"121"},{year:"2014",num:"2",subject:"ken",q:`人権の享有主体に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．外国人の場合には，我が国との関係が日本国民とは異なるので，日本国民に比べて裁判を受ける権利の保障の程度に差を設けることも許される。
イ．法人は，現代社会におけるその役割の重要性からすると，全ての人権について，自然人と同程度の保障を受ける。
ウ．未成年者は，精神的・肉体的に未成熟なことから，成人とは異なった特別の保護を必要とする場合があり，このような趣旨から，憲法は児童の酷使を禁止している。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2014",num:"3",subject:"ken",q:`法の下の平等に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．日本国籍は重要な法的地位であり，父母の婚姻による嫡出子たる身分の取得は子が自らの意思や努力によっては変えられない事柄であることから，こうした事柄により国籍取得に関して区別することに合理的な理由があるか否かについては，慎重な検討が必要である。
イ．非嫡出子という身分は子が自らの意思や努力によって変えることはできないから，嫡出性の有無による法定相続分の区別の合理性については，立法目的自体の合理性及び当該目的と手段との実質的関連性についてより強い合理性の存否を検討すべきである。
ウ．尊属殺という特別の罪を設け，刑罰を加重すること自体は直ちに違憲とはならないが，加重の程度が極端であって，立法目的達成の手段として甚だしく均衡を失し，これを正当化し得べき根拠を見出し得ないときは，その差別は著しく不合理なものとして違憲となる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"121"},{year:"2014",num:"4",subject:"ken",q:`憲法第１９条の保障する思想・良心の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．企業が従業員に対して特定政党の党員か否かを調査することは，当該調査の必要性があり，不利益な取扱いのおそれがあることを示唆せず，強要にわたらない限り，許容される。
イ．裁判所が謝罪広告を強制しても，単に事態の真相を告白し，陳謝の意を表明するにとどまる場合は，良心の自由を不当に制限することにはならない。
ウ．中学校の内申書にその学校の全共闘を名乗って機関紙を発行したなどと記載した場合，それ自体は客観的な事実であっても，その記載に係る外部的行為から一定の思想信条を了知し得る。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2014",num:"5",subject:"ken",q:`信教の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．生徒が自らの信仰に基づき，その通学する公立校で義務付けられている授業の履修を拒んだため不利益処分を受けることになっても，公教育が特例なしに実施されるべきであることに鑑み，その不利益の内容や程度に関わりなく，これを受忍しなければならない。
イ．僧侶がその業務として遂行した行為の結果，刑法上の犯罪構成要件に該当することになった場合，その行為の目的や内容に宗教上の意義が認められるときは，たとえそれが著しく社会的妥当性を欠くものであっても，正当な業務行為として処罰の対象とはならない。
ウ．宗教法人が法令に違反して著しく反社会的な行為を組織的に行ったため，裁判所から宗教法人法所定の解散命令を受け，法人格を失った宗教団体やその信者が宗教上の行為を継続する上で支障が生じても，その支障は間接的で事実上のものにとどまるので，やむを得ない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2014",num:"6",subject:"ken",q:`憲法第２１条第２項前段の「検閲」に関する次のアからウまでの各記述について，ｂの見解がａの見解の批判となっている場合には１を，そうでない場合には２を選びなさい。
ア．ａ．名誉毀損のおそれのある記事を掲載した書籍の販売等を，裁判所の仮処分により事前差止めするのは，「検閲」に該当しない。
ｂ．「検閲」の解釈に当たっては，過去に検閲が行政権により濫用されたという歴史的経緯を踏まえる必要がある。
イ．ａ．外国で出版済みの書籍について，輸入禁制品である「公安又は風俗を害すべき書籍」に該当するか否かを税関が検査するのは，「検閲」に該当しない。
ｂ．「検閲」は，表現の自由に対する制約という側面と，この自由と一体をなす知る権利に対する制約という側面がある。
ウ．ａ．受刑者の逃走防止等を目的として，その発信しようとする信書の内容を刑務所長が事前に検査するのは，「検閲」に該当しない。
ｂ．「検閲」の禁止は，国民に対する関係では，絶対的に禁止されるが，特殊の法律関係にある者については，異なる取扱いが認められる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"212"},{year:"2014",num:"7",subject:"ken",q:`知る権利や表現の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．表現の自由は，公立図書館に自己の著作物の収蔵を求めることまで保障するものではないから，公立図書館で閲覧に供された図書を職員が著作者の思想や信条を理由として廃棄することは，その思想，意見等を公衆に伝達する利益を不当に損なうものとはいえない。
イ．放送事業者は，限られた電波の使用の免許を受けた者であって，公的な性格を有するものであり，放送による権利侵害や放送された事項が真実でないことが判明した場合に訂正放送が義務付けられているが，これは視聴者に対し反論権を認めるものではない。
ウ．集団行動を法的に規制する場合，表現の自由の保障に可能な限り配慮する必要があるため，集団行動が行われ得るような場所を包括的に掲げたり，その行われる場所のいかんを問わないものとしたりすることは許されない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"6"},{year:"2014",num:"8",subject:"ken",q:`学問の自由や大学の自治に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．教授の自由の保障は，その沿革上，高等教育の場である大学に限られ，普通教育の場における教師の教授の自由は，学問の自由やその他の憲法上の自由として保障されているわけではない。
イ．大学は，自治権を有し，その施設及び学生の管理に関して自主的に決定する権利を有することから，警察は，大学の了解なしには大学構内において令状に基づく犯罪捜査を行うことはできない。
ウ．大学教授が授業中に行ったその所属学部の執行部への批判を理由として，当該学部が当該教授の授業開講を認めない措置を採るような場合には，学問の自由と大学の自治とが対立的な関係に立つ。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2014",num:"9",subject:"ken",q:`職業の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．酒類販売の免許制に関する立法事実が変化しているので，当該免許制の合憲性は厳格度を高めた基準で審査されるが，酒税法が定める免許基準は依然として合理性を有する。
イ．特定産業における経営の安定を目的とする生糸の輸入制限は，零細な他の産業に犠牲を強いることになるので，その合憲性は慎重に審査されるが，著しく不合理とはいえない。
ウ．登記制度が国民の権利義務等に重大な影響を及ぼすことなどから，原則として司法書士に登記業務の独占を認める職域規制は，公共の福祉に合致した合理的な規制である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"221"},{year:"2014",num:"10",subject:"ken",q:`社会保障制度の合憲性をめぐる理由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．限られた財源の下で福祉的給付を行うに当たり，国が自国民を在留外国人より優先的に扱うことは許されるが，特別永住者について障害福祉年金の支給対象から一切除外することは，不合理な差別となる。
イ．障害基礎年金の受給に関し，保険料の拠出要件を緩和するか否かは国の財政事情等に密接に関連するから，保険料負担能力のない２０歳以上６０歳未満の者のうち学生とそれ以外の者との間に障害基礎年金の受給に関し差異が生じていたとしても，不合理とはいえない。
ウ．生活保護法に基づいて生活保護を受けるのは，単なる国の恩恵ないし社会政策の実施に伴う反射的利益ではなく，法的権利であるから，保護基準の改定（老齢加算の廃止）に基づく保護の不利益変更は，その改定自体に正当な理由がない限り違法となる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"212"},{year:"2014",num:"11",subject:"ken",q:`裁判員の参加する刑事裁判に関する法律（以下「裁判員法」という。）に基づき裁判官以外の者が構成員となった裁判体によって裁判が行われる制度（以下「裁判員制度」という。）の合憲性について判断した最高裁判所の判決（最高裁判所平成２３年１１月１６日大法廷判決，刑集６５巻８号１２８５頁）に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法が採用する統治の基本原理や刑事裁判の諸原則，憲法制定当時の歴史的状況を含めた憲法制定の経緯及び憲法の関連規定の文理を総合的に検討すれば，憲法は一般的に国民の司法参加を許容しているといえる。
イ．裁判員法が規定する評決制度の下で，裁判官が時に自らの意見と異なる結論に従わざるを得ない場合があるとしても，憲法が国民の司法参加を許容し，裁判員法が憲法に適合するようにこれを法制化したものである以上，憲法第７６条第３項には反しない。
ウ．裁判員制度は，参政権と同様の権限を国民に付与するものではないが，辞退制度や旅費・日当の支給等の経済的措置を講じていることを考慮すれば，裁判員の職務は憲法第１８条の「苦役」に当たらない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2014",num:"12",subject:"ken",q:`天皇の国事行為及び内閣の助言と承認に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．国事行為のうち，その行為自体が名目的・儀礼的なものであっても，天皇は，自らの判断に基づき，内閣の助言と承認を拒むことは許されない。
イ．憲法は，天皇の無答責を明文で規定していないので，内閣の助言と承認のもとで行われた天皇の国事行為であっても，内閣の責任のほかに天皇が責任を負うことがあり得る。
ウ．国政に関する権能を天皇に付与しない限り，憲法で定められている国事行為以外の行為について，新たな国事行為として法律で定めることも許される。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"122"},{year:"2014",num:"13",subject:"ken",q:`選挙に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．公職選挙法は，投票を得るなどの目的で戸別訪問をすること自体を禁止しているが，選挙運動の重要性に照らすと，その禁止の範囲は憲法に適合するよう限定して解釈しなければならない。
イ．いわゆる立候補の自由は，選挙権の自由な行使と表裏の関係にあり，自由かつ公正な選挙を維持する上で極めて重要であるとして，憲法第１５条第１項によって保障されていると解すべきである。
ウ．選挙や当選の効力に関する争訟において，誰が誰に対して投票したかを解明し，これを公表することは，選挙投票の全般にわたってその秘密を確保しようとする無記名投票制度の精神に反する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"211"},{year:"2014",num:"14",subject:"ken",q:`憲法第４３条第１項の「全国民の代表」に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法第４３条第１項は，国会が民意を反映すべき機関であると同時に，国民代表機関であることも意味する。
イ．各選挙区において選出された議員は，「全国民の代表」となるので，選挙区民から法的に責任を問われることはない。
ウ．議員が実質的には政党の媒介によってのみ国民代表者となり得るとする見解に立つと，党議拘束の慣行は，議員が「全国民の代表」であることと矛盾抵触する。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2014",num:"15",subject:"ken",q:`独立行政委員会に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．独立行政委員会が規則制定という準立法的作用を行うことは，国会を唯一の立法機関と定める憲法第４１条に反するものではない。
イ．行政権は内閣に属すると定める憲法第６５条により，独立行政委員会の職務全般に対しては，内閣の直接的な指揮監督権が及ぶ。
ウ．独立行政委員会が裁決や審決という準司法的作用を行うことは，たとえ前審であっても，全て司法権は裁判所に属する旨を定める憲法第７６条第１項に反し，許されない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"4"},{year:"2014",num:"16",subject:"ken",q:`司法権に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．下級裁判所は，最高裁判所が制定した裁判所の内部規律及び司法事務処理に関する規則に拘束されるから，最高裁判所が，下級裁判所の裁判官に対して，具体的事件について，どのような判断を行うべきか指示することも許される。
イ．裁判官の職権の独立は，裁判に対して不当な影響を与えるおそれのある一切の外部的行為の排除を要求するが，一般国民やマスメディアによる裁判内容の批判は，表現の自由の行使の一場面であるから許される。
ウ．国政調査権は議院にとって重要な権能であるが，司法権の独立の観点からして，具体的事件について，その判決の事実認定や量刑が適切かどうかを調査することは，国政調査権の範囲を逸脱するものであり，許されない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"5"},{year:"2014",num:"17",subject:"ken",q:`裁判所が違憲とした議員定数配分規定に基づいて行われた選挙の効力に関する次のアからウまでの各記述について，正しいもの全てを挙げた組合せを，後記１から７までの中から選びなさい。
ア．一般的な法の基本原則に基づくものとして事情判決の法理を適用して，選挙を無効とせず違法の宣言にとどめるのは，当該選挙を無効とすることによって憲法が所期していない結果を生じることを回避するためである。
イ．定数配分規定の違憲判断を選挙の効力と結び付けず，訴訟が提起された選挙区の選挙だけを無効とする手法は，投票価値が不平等であるとされた選挙区からの代表者がいない状態で定数配分規定の是正が行われるという問題がある。
ウ．定数配分規定の違憲判断を選挙の効力と結び付けない判決の将来効の法理は，再選挙を執行することが事実上不可能であることや，事情判決を繰り返すことによって生じる司法審査制自体への弊害という問題にも対処しようとするものである。`,c1:"１．ア",c2:"２．イ",c3:"３．ウ",c4:"４．アイ",c5:"５．アウ",c6:"６．イウ",c7:"７．アイウ",c8:"",c9:"",c10:"",a:"7"},{year:"2014",num:"18",subject:"ken",q:`憲法の定める租税法律主義に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．租税の賦課は法律又は法律の定める条件によらなければならないが，条例は公選の議員で組織する議会の議決を経て制定される自治立法であるから，一定の範囲内で条例による租税の賦課徴収ができる。
イ．課税の根拠法律があるにもかかわらず長年にわたり課税されなかった物については，非課税の慣習法が成立しているとみるべきであるから，新たにその物に課税することは，それがその根拠法律の正しい解釈に基づくものであるとしても，租税法律主義に反する。
ウ．租税法律主義は，社会全体に対する財やサービスを提供するための資金を租税として強制的に徴収する場合について規定したものであるから，個人への給付に対する反対給付としての性質を有する保険料等については適用がなく，また，その趣旨も及ばない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"122"},{year:"2014",num:"19",subject:"ken",q:`地方自治に関する次のアからウまでの各記述について，ａの見解とｂの見解が両立する場合には１を，両立しない場合には２を選びなさい。
ア．ａ．憲法第２９条第２項は，財産権の内容を法律で定める旨規定しているから，法律で個別的な委任がある場合を除いて，条例で規制することはできない。
ｂ．財産権は全国的な取引の対象となる点で取引の安全を図る必要があるため，その規制は国の事務に属するが，地方的な特殊な事情があれば条例によっても規制できる。
イ．ａ．憲法第９５条が地方自治特別法に住民の過半数の同意を求めるのは，特定の地方公共団体の本質に関わるような不利益な特例を設けることを防止する趣旨である。
ｂ．憲法第９５条は，国会の単独立法権の例外を認めるもので，地方公共団体が独自の条例を制定する権限を有することの根拠規定の一つである。
ウ．ａ．憲法第９４条の「行政の執行」には租税の賦課・徴収が含まれているから，憲法は抽象的には地方公共団体の課税権を承認している。
ｂ．地方自治法第２２３条が，地方公共団体は「法律の定めるところ」により地方税を賦課徴収できると定めているのは，地方公共団体独自の課税権を承認する趣旨である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"211"},{year:"2014",num:"20",subject:"ken",q:`条約に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．国家間の合意には，条約のほか，協定，取極，規約，憲章，議定書など様々な名称のものがあり，その締結には常に国会の承認を必要とする。
イ．条約の効力は憲法の効力に優位するとの見解によれば，条約締結権に関する憲法の規定は，条約の効力の根拠を定めたものではないことになる。
ウ．国会の条約修正権を肯定する見解も，修正議決に従った内容の条約を締結するためには相手国との再交渉を必要とする。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"211"},{year:"2014",num:"21",subject:"gyo",q:`国土交通大臣は，道路占用許可（以下「許可」という。）について，道路法及び同法第３３条第１項に基づく政令の定めよりも具体的に許可の基準を示す通知（以下「本件通知」という。）を策定した。そして，本件通知を，道路管理者として許可を行う権限を有する各地方整備局長，各都道府県知事，及びその他の行政庁に発出した。各地方整備局は，国土交通省に置かれる行政機関（地方支分部局）である。許可の基準を定める政令及び本件通知に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
（参照条文）道路法
第３２条 道路に次の各号のいずれかに掲げる工作物，物件又は施設を設け，継続して道路を使用しようとする場合においては，道路管理者の許可を受けなければならない。
一～七 （略）
２～５ （略）
第３３条 道路管理者は，道路の占用が前条第１項各号のいずれかに該当するものであつて道路の敷地外に余地がないためにやむを得ないものであり，かつ，（中略）政令で定める基準に適合する場合に限り，同条第１項（中略）の許可を与えることができる。
２ （略）
ア．仮に，許可の基準を政令で定める旨の，道路法第３３条第１項におけるような明文の規定が法律になければ，許可の基準を政令で定めることは認められない。
イ．各地方整備局長は，本件通知の内容を，許可に係る行政手続法上の審査基準として公にすることができる。
ウ．私人が各地方整備局長に対し，本件通知に具体的に定められていない事情を理由に許可を求めることは，平等原則及び信義則に反し認められない。
エ．本件通知は，その内容が道路法に違反していなければ，下級行政庁である各都道府県知事に対する通達として，各都道府県知事を拘束する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1122"},{year:"2014",num:"22",subject:"gyo",q:`行政処分に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らし，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．青色申告に係る法人税の更正処分における附記理由不備の瑕疵は，後日これについての審査請求に対する裁決において処分の具体的根拠が明らかにされたとしても，それにより治癒されるものではない。
イ．原子炉の周辺住民が，人格権に基づき原子炉設置の差止めを求める民事訴訟を提起するには，あらかじめ原子炉設置許可の取消し又は無効確認の判決を得ておく必要がある。
ウ．行政庁は，自らのした行政処分が当初から違法であったことを後日認識したときは，取消しを認める旨の明文規定の有無を問わず，また，争訟を裁断する行政処分であっても，当該行政処分を自ら取り消すことができる。`,c1:"１．ア〇 イ〇 ウ○",c2:"２．ア〇 イ〇 ウ×",c3:"３．ア〇 イ× ウ○",c4:"４．ア〇 イ× ウ×",c5:"５．ア× イ〇 ウ○",c6:"６．ア× イ〇 ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"4"},{year:"2014",num:"23",subject:"gyo",q:`行政手続法第２章の「申請に対する処分」に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．行政手続法第６条に定める標準処理期間には，申請が形式上の要件に適合しない場合の当該申請の補正に要する期間は含まれず，適法な申請の処理に要する期間のみが含まれる。
イ．行政手続法第７条に定める「申請がその事務所に到達したとき」とは，当該申請を取り扱うこととされている事務所の職員により，受付印を押印する等，申請を受領した旨の意思が表示された時点をいう。
ウ．申請期間を徒過していることを根拠に，申請を不適法として拒否処分を行う場合には，申請者に対して，行政手続法第８条に基づき当該処分の理由を示す必要はない。`,c1:"１．ア〇 イ〇 ウ○",c2:"２．ア〇 イ〇 ウ×",c3:"３．ア〇 イ× ウ○",c4:"４．ア〇 イ× ウ×",c5:"５．ア× イ〇 ウ○",c6:"６．ア× イ〇 ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"4"},{year:"2014",num:"24",subject:"gyo",q:`行政裁量に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．処分を行う行政庁に裁量権が認められる場合でも，当該行政庁は，理由なく特定の個人を差別的に取り扱い不利益を及ぼす自由を有するものではなく，この意味において，行政庁の裁量権には一定の限界がある。
イ．処分を行う行政庁に裁量権が認められる場合には，処分が社会通念上著しく妥当性を欠き，裁量権の濫用に当たるものでない限り，処分の理由の提示に不備があったとしても，そのことを理由として処分が違法とされることはない。
ウ．規制を目的とする不利益処分について，処分の根拠法令が処分を行うか否かの点で行政庁に効果裁量を認めている場合には，処分を行わないという行政庁の不作為が違法となることはない。
エ．処分の根拠法令が，処分要件該当性の判断について行政庁に要件裁量を認めている場合には，事実認定について行政庁に裁量が広く認められる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1222"},{year:"2014",num:"25",subject:"gyo",q:`行政指導に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．度を超えた圧力による行政指導が行われた場合には，実際に行政指導に従わなかったときでも，精神的苦痛による損害に係る賠償請求が可能となることがある。
イ．最高裁判所の判例によれば，申請に対する処分を留保されたままでの行政指導には応じられないことを真摯かつ明確に意思表示した行政指導の相手方に対して，行政指導を継続しているという理由でなお処分を留保しても，処分の留保が違法とは評価されない場合がある。
ウ．行政手続法によれば，口頭で行政指導を行う場合には，行政指導の趣旨及び内容並びに責任者を明確に示す必要はなく，行政指導の相手方からこれらを記載した書面の交付を求められたときに，当該行政指導に携わる者がこれらを記載した書面を交付すれば足りる。
エ．行政手続法の行政指導に関する規定には，地方公共団体の機関が行う行政指導にも適用されるものがある。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1122"},{year:"2014",num:"26",subject:"gyo",q:`行政主体が当事者となる契約に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らし，正しいものに〇，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．市が市営の老人福祉施設を民間事業者に移管するために，施設の資産の譲渡先としてその運営を引き継ぐ事業者を公募したが，応募者に対して市長が「決定に至らなかった」旨の通知を行った場合，当該通知は，法令に基づかずに行った公募の応募者に対し，その者を相手方として契約を締結しないこととした事実を告知するものにすぎないから，抗告訴訟の対象となる行政処分には当たらない。
イ．地方公共団体が公共工事の指名競争入札に参加させようとする者を指名するに当たり，地元企業か否かを考慮することは，価格の有利性確保という入札制度の趣旨とは無関係の観点を考慮に入れるものであるから，許されない。
ウ．水道事業を経営する地方公共団体が水道料金を定めるに当たり，当該地方公共団体の住民基本台帳に記録されていない別荘に係る給水契約者とそれ以外の給水契約者との間で基本料金に差異を設けることは，平等原則に反し，許されない。`,c1:"１．ア〇 イ〇 ウ○",c2:"２．ア〇 イ〇 ウ×",c3:"３．ア〇 イ× ウ○",c4:"４．ア〇 イ× ウ×",c5:"５．ア× イ〇 ウ○",c6:"６．ア× イ〇 ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"4"},{year:"2014",num:"27",subject:"gyo",q:`甲市は，条例（以下「本件条例」という。）により，⑴甲市内においてパチンコ店の建築をしようとする者は市長の同意を得なければならないこと，⑵市長は，商業地域以外の用途地域においては，上記の同意をしないものとすること，及び，⑶市長は，上記の同意を得ないでパチンコ店の建築をしようとする者に対し，建築の中止等の命令を発することができることを定めていた。ただし，上記命令の違反に対する罰則は，定められていなかった。Ａは，パチンコ店を建築しようとして，本件条例に基づく建築の同意を申請したが，甲市長Ｂは，建築予定地が準工業地域に属することから，本件条例に基づき，不同意とした。しかし，Ａが建築工事に着手したため，Ｂは，本件条例に基づき，建築工事中止命令（以下「本件命令」という。）を発した。これに対し，Ａが工事を続行したため，甲市は，Ａを相手取って，工事の続行禁止を求める民事訴訟（以下「本件訴え」という。）を提起した。この事案に関する次のアからエまでの各記述について，法令又は最高裁判所の判例に照らし，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．本件命令は行政指導の性質を有するにすぎず，そもそも法的強制になじまないから，本件訴えは不適法である。
イ．仮に，本件命令違反に対する罰則が本件条例に置かれている場合には，Ｂは，行政代執行法に基づく代執行により，本件命令に基づく義務の履行を確保することができる。
ウ．仮に，本件命令違反に対する執行罰の規定が本件条例に置かれている場合には，Ｂは，Ａに対して執行罰としての過料を課すことにより，本件命令に基づく義務の履行を確保することができる。
エ．本件訴えは，法規の適用の適正ないし一般公益の保護を目的とするものであって，自己の権利利益の保護救済を目的とするものではないから，法律上の争訟に当たらない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2221"},{year:"2014",num:"28",subject:"gyo",q:`Ａは，海岸保全区域に当たる海岸で，海岸管理者であるＢ県知事の許可を受けずに，レジャー施設（以下「本件施設」という。）を設置しており，更に本件施設を拡張しようとしている。これに対し，Ｂ県知事は，海岸法(以下「法」という。)第１２条により本件施設の除却を求める処分（以下「本件監督処分」という。），及びＡが本件監督処分に従わない場合の代執行（以下「本件代執行」という。）を含めて，様々な措置を執ることを検討している。Ａに対し執ることが想定される措置に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
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
エ．最高裁判所の判例によれば，Ｂ県が，占有保全の訴えを提起して，Ａによる本件施設の拡張を予防することはできない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1212"},{year:"2014",num:"29",subject:"gyo",q:`行政機関の保有する情報の公開に関する法律（以下「情報公開法」という。）に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．情報公開法は，国民主権の理念にのっとり，政府の諸活動について国民に説明する責務が全うされるようにするとともに，国民の的確な理解と批判の下にある公正で民主的な行政の推進に資することを目的とするものであるから，行政文書の開示請求権は，外国人には認められていない。
イ．情報公開法は，公にすることにより国の安全が害されるおそれがあると行政機関の長が認めることにつき相当の理由がある情報を不開示情報としているが，これは，この種の情報については，開示・不開示の判断に高度の政策的判断が伴い，また，国防，外交上の専門的，技術的判断を要するという特殊性があるため，行政機関の長の判断に裁量を認める趣旨である。
ウ．行政機関の長は，情報公開法に基づく開示請求に係る行政文書が他の行政機関により作成されたものである場合，当該行政文書の開示の是非を判断することができないので，当該開示請求を却下することができる。
エ．行政機関の長は，国，独立行政法人等，地方公共団体，地方独立行政法人及び開示請求者以外の者（以下「第三者」という。）に関する情報が記録されている行政文書を情報公開法第７条の規定により開示しようとするときは，開示決定に先立ち，所在の判明している第三者に対し，意見書を提出する機会を与えなければならない。
（参照条文）情報公開法
第７条 行政機関の長は，開示請求に係る行政文書に不開示情報が記録されている場合であっても，公益上特に必要があると認めるときは，開示請求者に対し，当該行政文書を開示することができる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2121"},{year:"2014",num:"30",subject:"gyo",q:`原告適格に関する次のアからウまでの各記述について，それぞれ①の法令に関する説明を前提にした場合に，②の記述が最高裁判所の判例の内容として正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．①建築基準法第５９条の２第１項は，建築物の容積率制限，高さ制限に関し，一定規模以上の広さの敷地を有し，かつ，敷地内に一定規模以上の空地を有する場合においては，安全，防火等の観点から支障がないと認められることなどの要件を満たすときに限り，これらの制限を緩和することを認めている。②この規定は，建築物の倒壊，炎上等による被害が直接的に及ぶことが想定される周辺の一定範囲の地域に存する他の建築物についてその居住者の生命，身体の安全等及び財産としてのその建築物を，個々人の個別的利益としても保護すべきものとする趣旨を含むものと解されるから，同条第１項の総合設計許可に係る建築物の倒壊，炎上等により直接的な被害を受けることが予想される範囲の地域に存する建築物に居住し又はこれを所有する者は，当該許可の取消しを求める原告適格を有する。
イ．①風俗営業等の規制及び業務の適正化等に関する法律（以下「法」という。）第４条第２項第２号は，風俗営業の許可の基準につき，良好な風俗環境を保全するため特にその設置を制限する必要があるものとして政令で定める基準に従い都道府県の条例（以下「施行条例」という。）で定める地域内に営業所があるときは風俗営業の許可をしてはならないと定め，法の委任を受けて規定された風俗営業等の規制及び業務の適正化等に関する法律施行令（以下「施行令」という。）第６条第１号イの規定は，「住居が多数集合しており，住居以外の用途に供される土地が少ない地域」を風俗営業の制限地域とすべきことを基準として定めている。②これらの規定から，法の風俗営業の許可に関する規定が一般的公益の保護に加えて個々人の個別的利益をも保護すべきものとする趣旨を含むことを読み取ることは困難であり，施行令第６条第１号イの規定は，専ら公益保護の観点から基準を定めていると解するのが相当である。そうすると，上記の基準に従って規定された施行条例が定める地域に住居する者は，風俗営業の許可の取消しを求める原告適格を有するとはいえない。
ウ．①自転車競技法（平成１９年法律第８２号による改正前のもの）第４条第２項は，場外車券発売施設につき，申請に係る施設の位置，構造及び設備が経済産業省令で定める基準に適合する場合に限りその許可をすることができる旨定め，これを受けて規定された自転車競技法施行規則（平成１８年経済産業省令第１２６号による改正前のもの）第１５条第１項第１号は，上記の基準として，学校その他の文教施設及び病院その他の医療施設（以下，これらを併せて「医療施設等」という。）から相当の距離を有し，文教上又は保健衛生上著しい支障を来すおそれがないこと（以下，この基準を「位置基準」という。）を定めている。②一般に，場外車券発売施設が設置，運営された場合に周辺住民等が被る可能性のある被害は，交通，風紀，教育など広い意味での生活環境の悪化であって，基本的には公益に属する利益というべきである。そうすると，医療施設等の開設者は，位置基準を根拠として当該施設の設置許可の取消しを求める原告適格を有するとはいえない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2014",num:"31",subject:"gyo",q:`取消訴訟の審理に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．処分について審査請求をすることができる場合であっても，法律に特段の定めのない限り，直ちに処分の取消しの訴えを提起することができる。
イ．処分の取消しの訴えとその処分についての審査請求を棄却した裁決の取消しの訴えとを提起することができる場合，これらの訴えは併合して提起しなければならない。
ウ．処分の根拠法令が裁決主義を採用している場合には，裁決の取消しの訴えにおいて原処分の違法を主張することができる。
エ．建築基準法上の指定確認検査機関による建築確認処分の取消しの訴えにおいては，当該機関を指定した国土交通大臣又は都道府県知事の所属する国又は地方公共団体が被告となる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1212"},{year:"2014",num:"32",subject:"gyo",q:`行政事件訴訟の審理に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．数名の者が共同訴訟人として処分の取消しの訴えを適法に提起することができるのは，訴訟の目的がそれらの者について合一にのみ確定すべき場合に限られる。
イ．処分の取消しの訴えを提起するに当たっては，同一の被告に対する民事訴訟であれば，これを適法に併合して提起することができる。
ウ．処分についての審査請求を棄却した裁決の取消しの訴えを適法に提起した後，原告は，法令に特別の定めがある場合を除き，口頭弁論の終結に至るまで，当該処分の取消しの訴えをこれに併合して適法に提起することができる。
エ．法令に基づく申請に対し相当の期間内に何らの処分がされないとして義務付けの訴えを提起する場合には，当該処分に係る不作為の違法確認の訴えをこれに併合して提起しなければならない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2211"},{year:"2014",num:"33",subject:"gyo",q:`在外日本人である原告らが，①平成１０年法律第４７号による改正前の公職選挙法が，原告らに衆議院議員の選挙及び参議院議員の選挙における選挙権の行使を認めていなかったことが違法であることの確認，②同改正後の公職選挙法が，原告らに衆議院小選挙区選出議員の選挙及び参議院選挙区選出議員の選挙における選挙権の行使を認めていないことが違法であることの確認及び③原告らが今後直近に実施される上記②の各選挙において選挙権を行使する権利を有することの確認を求める各訴えに関する最高裁判所平成１７年９月１４日大法廷判決（民集５９巻７号２０８７頁）についての次のアからウまでの各記述のうち，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．この判決は，上記①の訴えは，過去の法律関係の確認を求めるものであって，確認の利益を欠くから，不適法であるとした。
イ．この判決は，上記②の訴えは，抽象的に立法不作為の違法確認を求めるものであって，法律上の争訟に当たらないから，不適法であるとした。
ウ．この判決は，上記③の訴えが適法であると判断するに当たり，選挙権は侵害を受けた後に争うことによっては権利行使の実質を回復することができない性質のものであることを考慮している。`,c1:"１．ア〇 イ〇 ウ○",c2:"２．ア〇 イ〇 ウ×",c3:"３．ア〇 イ× ウ○",c4:"４．ア〇 イ× ウ×",c5:"５．ア× イ〇 ウ○",c6:"６．ア× イ〇 ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"3"},{year:"2014",num:"34",subject:"gyo",q:`Ａ市の住民であるＸは，Ａ市の職員が公金の支出の手続においてした財務会計上の行為に問題があると考え，地方自治法の規定に基づき住民監査請求をすること及び住民訴訟を提起することを検討している。このような事例に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．住民監査請求において，Ｘは，当該財務会計上の行為が違法なものであることのみを主張することができ，それが不当なものであると主張することはできない。
イ．Ｘは，事案の重要性その他の事情によっては，住民監査請求をすることなく，適法に住民訴訟を提起することができる。
ウ．Ｘは，住民監査請求をし監査の結果の通知を受けた場合において，一定の期間内でなければ，適法に住民訴訟を提起することができない。
エ．住民訴訟において，Ｘは，当該財務会計上の行為が違法なものであることのみを主張することができ，それが不当なものであると主張することはできない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2211"},{year:"2014",num:"35",subject:"gyo",q:`仮の救済に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．処分の取消しの訴えの提起があった場合において，当該処分についての執行停止の申立ての管轄裁判所は，当該本案の係属する裁判所である。
イ．裁判所による確定した仮の義務付けの決定に基づいて行政庁が処分をした場合において，裁判所は，事情が変更したときは，当該決定における相手方の申立てにより，当該決定を取り消すことができる。
ウ．裁判所による仮の差止めの決定は，第三者に対しても効力を有する。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2014",num:"36",subject:"gyo",q:`国家賠償に関する次のアからウまでの各記述について，最高裁判所の判例に照らし，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．Ａ県警察の警察官がいわゆる交通犯罪の捜査を行うにつき故意又は過失によって違法に他人に損害を加えた場合においては，Ａ県だけではなく，原則として，国もまた，国家賠償法第１条第１項に基づいて損害賠償責任を負う。
イ．国立公園内にＢ県が設置した周回路におけるかけ橋の設置管理の瑕疵により，観光客がかけ橋から足を踏み外して転落し重傷を負った場合，国は，Ｂ県に対する補助金の交付によりかけ橋の設置費用の２分の１近くを負担していたとしても，法律上の設置費用負担義務を負っていなければ，国家賠償法に基づいて損害賠償責任を負うことはない。
ウ．社会福祉法人Ｃの設置する児童養護施設に，児童福祉法に基づくＤ県の措置により入所した児童が，施設の職員Ｅの養育監護上の過失によって，他の入所児童から暴行を受けて負傷した場合であって，Ｅの養育監護行為が，国家賠償法第１条第１項の適用上，県の公権力の行使に当たる公務員の職務行為とされるときには，Ｅ個人が民法第７０９条に基づく損害賠償責任を負わないのみならず，使用者であるＣも同法第７１５条に基づく損害賠償責任を負わない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2014",num:"37",subject:"gyo",q:`損失補償に関する次のアからエまでの各記述は，最高裁判所の判例の内容を示したものである（かぎ括弧内の記述は，最高裁判所の判例の原文をそのまま抜き出したものである。）。４つのうち，損失補償の要否の判断に影響を及ぼした主要な要素が他の判例と最も異なっているものを１つ，後記１から４までの中から選びなさい。
ア．「鉱業法六四条の定める制限は，鉄道，河川，公園，学校，病院，図書館等の公共施設及び建物の管理運営上支障ある事態の発生を未然に防止するため，これらの近傍において鉱物を採掘する場合には管理庁又は管理人の承諾を得ることが必要であることを定めたものにすぎず，この種の制限は，公共の福祉のためにする一般的な最小限度の制限であり，何人もこれをやむを得ないものとして当然受忍しなければならないものであつて，特定の人に対し特別の財産上の犠牲を強いるものとはいえないから，同条の規定によつて損失を被つたとしても，憲法二九条三項を根拠にして補償請求をすることができないものと解するのが相当である。」
イ．奈良県ため池の保全に関する条例は，「災害を防止し公共の福祉を保持するためのものであり，その四条二号は，ため池の堤とうを使用する財産上の権利の行使を著しく制限するものではあるが，結局それは，災害を防止し公共の福祉を保持する上に社会生活上已むを得ないものであり，そのような制約は，ため池の堤とうを使用し得る財産権を有する者が当然受忍しなければならない責務というべきものであつて，憲法二九条三項の損失補償はこれを必要としないと解するのが相当である。」
ウ．都有行政財産である土地について建物所有を目的とし期間の定めなくされた使用許可が当該行政財産本来の用途又は目的上の必要に基づき将来に向かって取り消された事案においては，「都有行政財産たる土地につき使用許可によつて与えられた使用権は，それが期間の定めのない場合であれば，当該行政財産本来の用途または目的上の必要を生じたときはその時点において原則として消滅すべきものであり，また，権利自体に右のような制約が内在しているものとして付与されているものとみるのが相当である」から，使用権者は，特別の事情のない限り，その取消しによる土地使用権喪失についての補償を求めることはできない。
エ．道路法７０条１項による「補償の対象は，道路工事の施行による土地の形状の変更を直接の原因として生じた隣接地の用益又は管理上の障害を除去するためにやむを得ない必要があつてした前記工作物の新築，増築，修繕若しくは移転又は切土若しくは盛土の工事に起因する損失に限られると解するのが相当である。したがつて，警察法規が一定の危険物の保管場所等につき保安物件との間に一定の離隔距離を保持すべきことなどを内容とする技術上の基準を定めている場合において，道路工事の施行の結果，警察違反の状態を生じ，危険物保有者が右技術上の基準に適合するように工作物の移転等を余儀なくされ，これによつて損失を被つたとしても，それは道路工事の施行によつて警察規制に基づく損失がたまたま現実化するに至つたものにすぎず，このような損失は，道路法七〇条一項の定める補償の対象には属しないものというべきである。」`,c1:"１．ア",c2:"２．イ",c3:"３．ウ",c4:"４．エ",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2014",num:"38",subject:"gyo",q:`行政不服審査に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．行政庁の不作為についての不服申立てに関しては不服申立期間の制限がなく，不作為状態の続く限りいつでも申立てが可能である。
イ．処分庁が誤って法定の期間よりも長い期間を審査請求期間として教示した場合において，その教示された期間内に審査請求がされたときは，当該審査請求は，法定の審査請求期間内にされたものとみなされる。
ウ．処分庁の上級行政庁である審査庁は，処分庁に対する一般的指揮監督権を有するから，裁決で当該処分を審査請求人の不利益に変更することもできる。`,c1:"１．ア〇 イ〇 ウ○",c2:"２．ア〇 イ〇 ウ×",c3:"３．ア〇 イ× ウ○",c4:"４．ア〇 イ× ウ×",c5:"５．ア× イ〇 ウ○",c6:"６．ア× イ〇 ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2014",num:"39",subject:"gyo",q:`普通地方公共団体の活動の規律に係る地方自治法の定めに関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．普通地方公共団体は，法律若しくはこれに基づく政令又は条例に特別の定めがない限り，権利の放棄を行う場合，議会の議決を要する。
イ．普通地方公共団体は，執行機関である長に対する諮問機関として，地方自治法の定める委員会及び委員を置かなければならない。
ウ．普通地方公共団体は，法律又はこれに基づく政令に特別の定めがない限り，公の施設の設置及び管理に関する事項を，条例で定めなければならない。
エ．各大臣は，担任する事務に関し，都道府県の自治事務の処理が法令の規定に違反していると認める場合，当該都道府県に対し，当該自治事務の処理について違反の是正のため必要な措置を講ずるように求めることができる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1211"},{year:"2014",num:"40",subject:"gyo",q:`独立行政法人に関する次のアからウまでの各記述について，法令に照らし，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．独立行政法人とは，公共上の見地から確実に実施されることが必要な事業ではあるが，民間の主体に委ねても実施されることが十分に期待されるものについて，これを効率的かつ効果的に実施させることを目的として設立される法人をいう。
イ．何人も，独立行政法人等の保有する個人情報の保護に関する法律の定める要件を満たす場合には，独立行政法人の保有する自己を本人とする個人情報の開示を請求することができる。
ウ．独立行政法人の行う業務は，いずれも高い公共性を有するものであるから，全ての独立行政法人の役員及び職員は，国家公務員とされている。`,c1:"１．ア〇 イ〇 ウ○",c2:"２．ア〇 イ〇 ウ×",c3:"３．ア〇 イ× ウ○",c4:"４．ア〇 イ× ウ×",c5:"５．ア× イ〇 ウ○",c6:"６．ア× イ〇 ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"6"},{year:"2014",num:"1",subject:"min",q:`制限行為能力に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．未成年者が婚姻をする場合に，未成年後見人があるときは，その同意を得なければならない。
イ．成年被後見人がした遺言は，成年後見人が取り消すことができる。
ウ．保佐開始の審判は，本人の同意がなくてもすることができる。
エ．保佐人の同意を得なければならない行為について，保佐人が被保佐人の利益を害するおそれがないにもかかわらず同意をしないときは，家庭裁判所は，被保佐人の請求により，保佐人の同意に代わる許可を与えることができる。
オ．本人以外の者の請求により補助開始の審判をするには，本人の同意が必要である。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2014",num:"2",subject:"min",q:`詐欺又は強迫による意思表示に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．相手方に対する意思表示について第三者が詐欺を行った場合において，相手方がその事実を知っていたときには，その意思表示を取り消すことができるが，第三者が強迫を行った場合においては，相手方がその事実を知らなかったときでも，その意思表示を取り消すことができる。
イ．Ａがその所有する不動産をＢに売却する旨の契約が締結され，これに基づきＡからＢへの所有権移転登記がされた場合において，Ａが詐欺を理由としてその意思表示を取り消したときには，その旨の登記をしなければ，その取消し後にＢからその不動産を買い受けたＣに対抗することができないが，Ａが強迫を理由としてその意思表示を取り消したときには，その旨の登記をしなくても，その取消し後にＢからその不動産を買い受けたＣに対抗することができる。
ウ．強迫による意思表示の取消しが認められるためには，表意者が完全に意思の自由を失って意思表示をしたことを要する。
エ．相手方に欺罔された結果，法律行為の要素に錯誤が生じ，その錯誤により意思表示をした場合には，錯誤による意思表示の無効を主張することも，詐欺による意思表示の取消しをすることもできる。
オ．連帯債務者の一人であるＡが代物弁済をした後，その代物弁済を詐欺を理由として取り消した場合，他の連帯債務者は，Ａの代物弁済が詐欺によるものであることを知らなかったときであっても，債権者に対し，代物弁済による債務の消滅を主張することはできない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2014",num:"3",subject:"min",q:`代理人の権限に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．売買契約を締結する権限を与えられて代理人となった者は，相手方からその売買契約を取り消す旨の意思表示を受ける権限を有する。
イ．成年被後見人が日常生活に関する行為をすることができる場合，成年後見人は，成年被後見人の日常生活に関する法律行為について成年被後見人を代理することはできない。
ウ．家庭裁判所が選任した不在者の財産の管理人は，不在者を被告とする土地明渡請求訴訟の第一審において不在者が敗訴した場合，家庭裁判所の許可を得ないで控訴をすることができる。
エ．委任による代理人は，本人の許諾を得たときのほか，やむを得ない事由があるときにも，復代理人を選任することができる。
オ．個別に代理権の授権がなければ，日常の家事に関する事項についても，夫婦の一方は，他の一方のために法律行為をすることはできない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2014",num:"4",subject:"min",q:`無権代理に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．本人に代わって弁済を受領する権限がない者が本人の有する債権について本人に代わって弁済を受領した後に，第三者が当該債権を差し押さえて転付命令を得た場合において，その後に本人がその弁済受領行為を追認したときは，当該第三者は，転付命令により当該債権を取得することはできない。
イ．本人が無権代理行為の追認を拒絶した場合であっても，その後に無権代理人が本人を相続したときは，無権代理行為は有効になる。
ウ．無権代理人を相続した本人は，無権代理行為について追認を拒絶することができる地位にあったことを理由として，無権代理人の責任を免れることができない。
エ．本人が無権代理人に対して無権代理行為を追認したとしても，相手方がこれを知るまでの間は，本人は，無権代理人に対しても追認の効果を主張することができない。
オ．無権代理人が本人を他の相続人と共に共同相続した場合において，他の共同相続人の一人が追認を拒絶したときは，無権代理行為は有効にならない。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2014",num:"5",subject:"min",q:`取得時効に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．１０年の取得時効を援用して所有権の取得を主張する者は，占有を開始した時及びその時から１０年を経過した時の２つの時点の占有を主張・立証すれば足り，所有の意思をもって，平穏に，かつ，公然と物を占有したこと，占有の開始時に善意無過失であったことについて主張・立証する必要はない。
イ．時効期間を計算する際には，その期間が午前零時から始まるときを除き，期間の初日は算入しない。
ウ．外形的客観的にみて占有者が他人の所有権を排斥して占有する意思を有していなかったと解される事情を証明すれば，所有の意思を否定することができる。
エ．Ａが所有する不動産についてＢが占有を継続したことにより取得時効が完成しても，Ｂは，その登記をしなければ，その後にＡからその不動産を取得したＣに対しては，時効による権利の取得を対抗することができない。
オ．他人が所有する土地を自己所有の土地として第三者に賃貸した者は，その第三者が２０年間その土地を占有したとしても，取得時効によりその土地の所有権を取得することはできない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2014",num:"6",subject:"min",q:`消滅時効の起算点に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．不確定期限の定めのある債権の消滅時効は，債権者が期限の到来を知った時から進行する。
イ．契約解除に基づく原状回復義務が履行不能になった場合において，その履行不能による損害賠償請求権の消滅時効は，原状回復義務が履行不能になった時から進行する。
ウ．無断転貸を理由とする土地賃貸借契約の解除権の消滅時効は，転借人が転貸借契約に基づいて当該土地の使用収益を開始した時から進行する。
エ．安全配慮義務違反による損害賠償請求権の消滅時効は，損害が発生した時から進行する。
オ．１０回に分割して弁済する旨の約定がある場合において，債務者が１回でも弁済を怠ったときは債権者の請求により直ちに残債務全額を弁済すべきものとする約定があるときには，残債権全額の消滅時効は，債務者が弁済を怠った時から進行する。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2014",num:"7",subject:"min",q:"Ａが所有して占有していた動産甲が，ＡからＢへ売られてＢに引き渡され，その後にＢからＣへ売られてＣに引き渡された場合において，ＡがＣに対して所有権に基づき動産甲の返還を請求する訴訟を提起し，請求原因としてＡが動産甲を所有していたこと及びＣが動産甲を占有していることを主張し，これらについてＣの自白が成立したときに関する次の１から４までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．Ｃは，Ａが所有権を失ったことを主張する抗弁として，動産甲がＢからＣへ売られたことを主張・立証しなければならず，Ｃがこれを主張・立証した場合において，Ａが，再抗弁として，動産甲がＡからＢへ売られたこと及びＡＢ間の売買契約に無効原因があることを主張・立証したときは，Ａの請求が認容される。",c2:"２．Ｃは，Ａが所有権を失ったことを主張する抗弁として，動産甲がＡからＢへ売られたこと及び動産甲がＢからＣへ売られたことを主張・立証しなければならず，Ｃがこれらを主張・立証した場合において，Ａが，再抗弁として，ＢＣ間の売買契約に無効原因があることを主張・立証したときは，Ａの請求が認容される。",c3:"３．Ｃは，Ａが所有権を失ったことを主張する抗弁として，動産甲がＡからＢへ売られたことを主張・立証しなければならず，Ｃがこれを主張・立証した場合において，Ａが再抗弁として適切な主張・立証をしないときは，Ａの請求が棄却される。",c4:"４．Ｃは，Ａが所有権を失ったことを主張する抗弁として，動産甲がＡからＢへ売られたこと及びＡＢ間の売買に基づく引渡しがされたことを主張・立証しなければならず，Ｃがこれらを主張・立証した場合において，Ａが，再抗弁として，ＡＢ間の売買契約に取消原因があること及びＢＣ間の売買契約が締結された後にＢに対してＡＢ間の売買契約を取り消す旨の意思表示をしたことを主張・立証したときは，Ａの請求が認容される。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2014",num:"8",subject:"min",q:`登記請求権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａは，ＢからＢ所有の土地を買う旨の契約をし，その代金を支払ったが，所有権移転登記をしていなかった。この売買契約を締結した後１０年が経過した場合には，Ａは，Ｂに対し，売買契約により取得した所有権に基づき所有権移転登記手続を請求することができない。
イ．ＡからＢ，ＢからＣへ土地が順次売却された後，Ｂの同意なくＡからＣへの所有権移転登記がされた場合，現在の権利関係と登記の内容が一致する限り，Ｂはその所有権移転登記の抹消登記手続を請求することはできない。
ウ．ＡがＢの所有する土地に第一順位の抵当権を有し，その抵当権の設定登記がされた後に，その抵当権の被担保債権が弁済により消滅した場合，第二順位の抵当権者であるＣは，Ａに対し，抵当権設定登記の抹消登記手続を請求することはできない。
エ．Ａは，ＢからＣ所有の土地を買う旨の契約をした場合，その土地についてＣを登記名義人とする登記がされていても，Ｂに対し，売買契約に基づき，その土地についてＢからＡへの所有権移転登記手続を請求することができる。
オ．Ａはその所有する土地をＢに遺贈する旨の遺言をしていたが，Ａが死亡した後，Ｂがその土地の所有権移転登記をしない間に，Ａの唯一の相続人であるＣが，ＡからＣへの相続を原因とする所有権移転登記をした上で，その土地をＤに売却してＣからＤへの所有権移転登記をした場合，Ｂは，Ｄに対し，ＣからＤへの所有権移転登記の抹消登記手続を請求することができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2014",num:"9",subject:"min",q:`登記に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡがＢから売買によってＢ所有の甲土地を取得し，ＢからＡへの所有権移転登記がされた後に，ＡＢ間の売買契約が解除され，その後，ＡからＣへ甲土地が譲渡され，ＡからＣへの所有権移転登記がされた場合，Ｂは，Ｃに対し，ＡからＣへの所有権移転登記の抹消登記手続を請求することができる。
イ．ＡがＡ所有の甲土地をＢに譲渡した後，これをＣにも譲渡した場合，Ｃが背信的悪意者とされる場合であっても，Ｂは，Ｃからの譲受人Ｄが背信的悪意者でない限り，Ｄに対して自己の所有権を主張するためには登記が必要である。
ウ．ＡがＢに賃貸している甲土地をＣに譲渡した場合において，Ｃが所有権移転登記をしていない場合は，ＢはＣに対して賃料の支払を拒むことができる。
エ．ＡとＢは，被相続人Ｃが所有していた甲土地を共同相続したが，Ｂは，甲土地についてＡに無断で相続を原因としてＣからＢへの所有権移転登記をし，さらに，Ｄへ甲土地を譲渡した場合，Ａの持分について，ＡがＤに対して自己の権利を主張するためには登記が必要である。
オ．ＡとＢは，被相続人Ｃが所有していた甲土地を共同相続し，Ａが甲土地を単独で相続する旨の遺産分割を成立させた。その後，Ｂが，甲土地について相続を原因としてＡＢの共有とする登記をし，さらにＢの持分をＤへ譲渡した場合，Ｂの持分について，ＡがＤに対して自己の権利を主張するためには登記が必要である。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2014",num:"10",subject:"min",q:"Ａ大学の図書館所蔵の書籍甲を，同大学教授Ｂが借り出し，図書館と同一の構内にある自己の研究室で利用していたことを前提として，次の１から４までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．Ｂが海外出張のため１週間大学を留守にしていた間に，Ｃが甲を盗み出して現に所持している場合，Ｂは，Ｃに対し，占有回収の訴えにより甲の返還を求めることができる。",c2:"２．Ｂが目を離した隙に，Ｄが甲を盗み出した上，自己の物と偽ってＥに売却し，引き渡した。甲にはＡ大学図書館の蔵書印が押捺されており，Ｅは，Ｄが甲を横領したものであると考えていた場合であっても，Ｂは，Ｅに対し，占有回収の訴えにより甲の返還を求めることはできない。",c3:"３．Ｂが研究室から自宅に甲を持ち帰る途中，電車内に甲を置き忘れたところ，Ｆがこれを拾得して現に所持している場合，Ｂは，Ｆに対し，占有回収の訴えにより甲の返還を求めることができる。",c4:"４．Ｂは，助手Ｇに対し，甲の一部について複写するよう指示して甲を預けたところ，Ｇが目を離した隙にＨが甲を盗み出して現に所持している場合，Ｂは，Ｈに対し，占有回収の訴えにより甲の返還を求めることはできない。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"34"},{year:"2014",num:"11",subject:"min",q:`物権又はその得喪若しくは変更について当事者がする合意に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．抵当権の順位の変更は，各抵当権者の合意のみによって効力を生ずるが，それを第三者に対抗するためには，その登記をしなければならない。
イ．土地を所有する者が売主となる売買において，当事者間で合意をすれば土地上の立木についての所有権を当該売主に留保することができるが，それを第三者に対抗するためには，当該売主が立木の所有者である旨を公示する対抗要件を具備しなければならない。
ウ．抵当権者は，利息その他の定期金の全額を被担保債権とする旨の定めを設定行為でしたときは，その定めに従い他の債権者に優先して抵当権を行使することができる。
エ．売買においては，目的物の所有権は，契約成立時に移転することが原則であるが，これと異なる時期に所有権が移転するものと定めることができる。
オ．不動産質権者は，設定者の承諾を得なければ，質権の目的である不動産の使用及び収益をすることができない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2014",num:"12",subject:"min",q:`相隣関係に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．土地の所有者は，隣地との境界付近において建物を修繕するため必要な範囲内で，隣地の使用を請求することができるが，隣地所有者がこれにより損害を受けたときは，その償金を支払わなければならない。
イ．土地の分割によって公道に通じない土地が生じた場合には，その土地の所有者は，公道に至るため，他の分割者の所有地のみを通行することができ，その通行について償金を支払う必要はない。
ウ．土地の所有者は，やむを得ない事由がある場合には，直接に雨水を隣地に注ぐ構造の屋根を設けることができるが，隣地所有者がこれにより損害を受けたときは，その償金を支払わなければならない。
エ．土地の境界線から５０センチメートル以上の距離を保って建物を築造しなければならない場合においても，境界線に接して建築をしようとする者がいるときに，隣地の所有者は，その建築を中止させ，又は変更させることができない。
オ．土地の所有者は，隣地の竹木の枝が境界線を越えるときは，その枝を切除することができ，かつ，その費用を隣地の所有者に請求することができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．ウ エ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2014",num:"13",subject:"min",q:`留置権に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．債権者は，債務者との合意によって先取特権の設定を受けることはできないが，債務者との合意により留置権の設定を受けることはできる。
イ．留置権者は，留置物について留置権に基づき競売を申し立てることができ，換価金から優先的に弁済を受けることができる。
ウ．留置権者が債務者の承諾を得ずに留置物を賃貸した場合，債務者は，留置権の消滅を請求することができる。
エ．請負人が，注文者に対する報酬債権を被担保債権として，留置権に基づき仕事の目的物の引渡しを拒んでいる場合，その報酬債権の消滅時効の進行は妨げられない。
オ．留置権者は，目的物の滅失によって債務者が受けるべき金銭その他の物に対して物上代位をすることができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2014",num:"14",subject:"min",q:`抵当権に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．保証人の求償権は，主たる債務者が弁済しないときに保証人が弁済することによって生じる将来の債権であるから，保証人の求償権を被担保債権として抵当権を設定することはできない。
イ．土地を賃借し，その土地上に建物を所有している者が，その建物に抵当権を設定した場合であっても，土地の賃貸人が賃借人との合意により賃貸借契約を解除したときは，土地の賃貸人は，その解除による賃借権の消滅を抵当権者に対抗することができる。
ウ．抵当不動産を買い受けた第三者が，抵当権者の請求に応じてその抵当権者にその代価を弁済したときは，抵当権は，その第三者のために消滅する。
エ．抵当権を実行することができる時から２０年が経過すれば，抵当権設定者は，抵当権者に対し，時効による抵当権の消滅を主張することができる。
オ．Ａ所有の建物について，Ｂが第一順位の抵当権を，Ｃが第二順位の抵当権をそれぞれ有している場合，ＢがＡからその建物を買い受けた場合であっても，第一順位の抵当権は消滅しない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2014",num:"15",subject:"min",q:"法定地上権に関する次の１から４までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．Ａが所有する甲土地に，その更地としての評価に基づき，Ｂのための抵当権が設定され，その後，甲土地上にＡ所有の乙建物が建てられた後，抵当権が実行された結果，Ｃが甲土地の所有者になった場合，Ｂが抵当権設定時，甲土地上にＡ所有の乙建物が建てられることをあらかじめ承諾していたとしても，甲土地に乙建物のための法定地上権は成立しない。",c2:"２．Ａが所有する甲土地に，Ｂのための第一順位の抵当権が設定され，その後，Ｂの承諾を受けて甲土地上にＡ所有の乙建物が建てられ，さらに，甲土地にＣのための第二順位の抵当権が設定された後，Ｃの申立てに基づいて甲土地の抵当権が実行された結果，Ｄが甲土地の所有者になった場合，甲土地に乙建物のための法定地上権が成立する。",c3:"３．Ａが所有する甲土地上に，Ａ所有の乙建物が存在し，その後，甲土地にＢのための抵当権が設定され，抵当権が実行された結果，Ｃが甲土地の所有者になった場合，Ａが乙建物の所有権の登記をしていなかったときは，甲土地に乙建物のための法定地上権は成立しない。",c4:"４．Ａが所有する甲土地上に，Ａ所有の乙建物が建てられ，その後，甲土地と乙建物にＢのための第一順位の共同抵当権がそれぞれ設定され，さらに，乙建物が取り壊されて甲土地上にＡ所有の丙建物が建てられた場合，その後，丙建物にＢのための第一順位の共同抵当権が設定され，甲土地の抵当権が実行された結果，Ｃが甲土地の所有者になったときであっても，甲土地に丙建物のための法定地上権は成立しない。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2014",num:"16",subject:"min",q:`売買契約においてその目的物であるワインを種類のみで指定し，買主の住所で引き渡すこととされていた場合に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．売主が債務の本旨に従って買主の住所にワインを持参したのに，買主がその受領を拒んだ場合には，その後売主がそのワインを故意に滅失させたときであっても，売主は，ワインの引渡債務の不履行を理由とする損害賠償責任を負わない。
イ．売主が債務の本旨に従って買主の住所にワインを持参したが，買主がその受領を拒んだ場合において，その後そのワインが保管されていた倉庫が第三者の放火によって焼失し，ワインが滅失したときには，売主は，ワインの引渡債務を免れる。
ウ．売主が債務の本旨に従って買主の住所にワインを持参したが，買主がその受領を拒んだ場合において，その後そのワインが買主の過失により滅失したときは，買主は，ワインの代金債務を免れない。
エ．売主が債務の本旨に従って買主の住所にワインを持参したが，買主がその受領を拒んだ場合には，その１週間後に売主が買主に対してワインの代金の支払を求めてきたときであっても，買主は，ワインの引渡しとの同時履行の抗弁を主張することができない。
オ．買主があらかじめワインの受領を拒んでいる場合において，売主が弁済の準備をしたことを買主に通知してその受領を催告したときは，売主は，約定の期日に買主の住所にワインを持参しなくても，ワインの引渡債務の不履行を理由とする損害賠償責任を負わない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2014",num:"17",subject:"min",q:`詐害行為取消権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．共同相続人間で成立した遺産分割協議は，詐害行為取消権の対象とならない。
イ．詐害行為取消権が成立するためには，債務者が債権者を害することを意図して法律行為をする必要がある。
ウ．債務超過の状態にある者が離婚に伴う財産分与として配偶者に金銭の給付をする旨の合意は，その額が財産分与として不相当に過大で，財産分与に仮託された財産処分と認められる事情がある場合，不相当に過大な部分について，その限度において詐害行為として取り消すことができる。
エ．抵当権が設定されている一個の建物を，その抵当権者に代物弁済として供した債務者の行為が詐害行為となる場合，他の一般債権者は，当該建物の価額から当該抵当権の被担保債権額を控除した残額の範囲で取り消すことができ，その限度において価額の賠償を請求することが許されるにとどまり，当該建物自体を債務者の一般財産として回復することはできない。
オ．詐害行為取消権は，訴訟において行使しなければならないが，訴えによる必要はなく，抗弁によって行使することもできる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2014",num:"18",subject:"min",q:"Ａに対し，ＢＣＤが等しい負担部分で３００万円の連帯債務を負っている場合に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．ＡがＢに対して履行の請求をしても，そのことを知らないＣ及びＤについては，時効中断の効力を生じない。",c2:"２．ＢがＡに対して有する金銭債権を自働債権として相殺をしても，Ｃ及びＤに相殺の効力は及ばない。",c3:"３．ＡがＢに対して３００万円の連帯債務の全額について免除をした場合には，Ｃ及びＤは，Ａに対し，２００万円の連帯債務を負う。",c4:"４．Ｂのために消滅時効が完成しても，Ｃ及びＤは，Ａに対し，３００万円の連帯債務を負う。",c5:"５．判例によれば，Ｂが６０万円を弁済しても，Ｂの負担部分の範囲内であるから，Ｃ及びＤに対して求償することはできない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2014",num:"19",subject:"min",q:`ＡのＢに対する金銭債務について，ＣがＢとの間で保証契約を締結した場合に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡのＢに対する債務に関して違約金の定めがなかった場合，ＢＣ間の保証契約において違約金の定めをすることはできない。
イ．Ａが未成年者であって，その法定代理人の同意を得ないでＢに対する債務を負担する行為をした場合において，Ｃが，保証契約締結の当時，そのことを知っており，その後，Ａの行為が取り消されたときには，Ｃは，Ａの負担していた債務と同一の目的を有する独立の債務を負担したものと推定される。
ウ．ＡのＢに対する債務の額が５００万円であり，ＣがＡの依頼を受けてＢとの間で保証契約を締結した場合において，Ａが，その後取得したＢに対する３００万円の金銭債権を自働債権として，Ｂに対する債務と相殺をしようと考えていたところ，ＣがＡに対して通知することなくＢに５００万円を弁済したときには，ＡはＣから５００万円の求償を受けても，相殺をすることができる地位にあったことを主張して，３００万円の範囲でこれを拒むことができる。
エ．Ｃが，Ａの意思に反してＢとの間で保証契約を締結し，Ｂに保証債務の弁済をした場合には，Ｃは，Ａが現に利益を受けている限度でのみ，Ａに対して求償をすることができる。
オ．判例によれば，ＡのＢに対する債務につき消滅時効が完成した場合において，Ａが時効の利益を放棄したときには，Ｃは，もはや時効の援用をすることができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2014",num:"20",subject:"min",q:"弁済の目的物の供託に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．債務の弁済について利害関係を有する第三者が弁済の提供をしたのに，債権者がその受領を拒む場合には，当該第三者は，債務者の意思に反するときであっても，供託をすることができる。",c2:"２．債務者が債権者を確知することができない場合には，確知することができないことについての過失の有無を問わず，供託をすることができる。",c3:"３．債務者が供託をした場合であっても，債権者が供託物を受け取らない限り，債務は消滅しない。",c4:"４．債務者が供託をした場合，債権者が同意しない限り，債務者は供託物を取り戻すことができない。",c5:"５．供託をした債務者が債権者に対して同時履行の抗弁を主張することができる場合，債権者が供託物を受け取るためには，債務者に対して反対給付をしなければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"15"},{year:"2014",num:"21",subject:"min",q:`弁済及び相殺に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａ名義のＢ銀行に対する預金に係る通帳と印鑑を窃取したＣが，Ａの代理人と称して，Ｂ銀行から預金の払戻しを受けた場合，Ｃは，自己のためにする意思でしたものではなく，債権の準占有者には当たらないので，Ｂ銀行の過失の有無にかかわらず，弁済の効力は生じない。
イ．ＡがＢ銀行に対する定期預金債権を有していたところ，Ｃが，Ａと称して，Ｂ銀行に対し，その定期預金債権を担保とした貸付けの申込みをし，Ｂ銀行は，ＣをＡと誤信したため貸付けに応じた。その後，貸付金債権の履行期に弁済がなかったため，Ｂ銀行がその貸付金債権を自働債権としてその定期預金債権と相殺をした場合において，貸付けの際に，金融機関として負担すべき相当の注意義務を尽くしていたときは，Ｂ銀行は，その相殺をもってＡに対抗することができる。
ウ．債務者の弁済が，債権の準占有者に対する弁済として有効となる場合においては，真の債権者は，弁済を受けた者に対し，不当利得返還請求をすることができない。
エ．ＡがＢに対して取立債務を負っている場合において，その履行期にＢが取立てをしなかったとしても，Ａが口頭の提供をしていないときは，Ａは債務不履行責任を免れない。
オ．Ａは，Ｂに対する債権をＣ及びＤに二重に譲渡し，それぞれの譲渡につきＢに対して確定日付のある証書で通知をしたが，その到達はＣへの譲渡についてのものが先であった場合において，ＢがＤに対してした弁済が効力を生ずるためには，Ｄを真の債権者であると信ずるにつき相当な理由があることを要する。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2014",num:"22",subject:"min",q:"贈与に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．贈与は，自己の財産を無償で相手方に与える意思を表示することにより成立する単独行為である。",c2:"２．書面によらない贈与であれば，履行の終わった部分についても撤回することができる。",c3:"３．贈与者は，贈与した特定物を引き渡すまでの間，善良な管理者の注意をもってその物を保存する義務を負う。",c4:"４．贈与者は，贈与した特定物に瑕疵があった場合，売主と同様の担保責任を負う。",c5:"５．他人の物を目的とする贈与は，贈与者がその物の権利を取得した時からその効力を生ずる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2014",num:"23",subject:"min",q:`売買に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．買主は，目的物の引渡しを先に受けた場合でも，目的物の引渡しを受けた場所において代金を支払わなければならない。
イ．売主は，目的物の引渡しを遅滞している場合でも，引渡しまでは，これを使用し果実を取得することができるが，買主が代金を支払った後は，果実を取得することはできない。
ウ．買主は，買い受けた不動産について抵当権，先取特権又は質権の登記があるときは，抵当権，先取特権又は質権の消滅請求の手続が終わるまで，その代金の支払を拒むことができる。
エ．買主が売主に手付を交付した場合，売主が手付の倍額を償還して契約を解除するためには，口頭により手付の倍額を償還する旨を告げ，その受領を催告すれば足りる。
オ．賃借地上にある建物の売買契約が締結された場合，売主は，その建物の敷地を目的とする賃借権の譲渡につき賃貸人の承諾を得て，敷地の賃借権を買主に移転する義務を負う。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2014",num:"24",subject:"min",q:`使用貸借に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．当事者が返還時期及び使用収益の目的を定めなかった場合，貸主は，相当の期間を定めて返還の催告をしなければ，使用貸借の目的物の返還を求めることはできない。
イ．判例によれば，建物の借主がその建物に課される公租公課に相当する額を全て負担している場合には，特別の事情のない限り，当該建物の貸借関係を使用貸借と認めることはできない。
ウ．貸主は，使用貸借の目的物に瑕疵があることを知っていた場合，その存在を借主に告げていれば，瑕疵担保責任を負わない。
エ．借主は，使用貸借の目的物について，善良な管理者の注意をもって保管する義務を負う。
オ．借主が死亡した場合，その相続人は，使用貸借の目的物を借主として使用収益する地位を承継する。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2014",num:"25",subject:"min",q:"消費貸借に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．判例によれば，利息付きの消費貸借において，借主は，特約のない限り，元本を受け取った日を含めた利息を支払わなければならない。",c2:"２．民法上の消費貸借は，利息に関する約定をしなかった場合，無利息の消費貸借となる。",c3:"３．利息付きの消費貸借において，物に隠れた瑕疵があったときは，貸主は，瑕疵がない物をもってこれに代えなければならない。",c4:"４．消費貸借の予約は，その後に借主が破産手続開始の決定を受けた場合であっても，その効力を失わない。",c5:"５．借主は，契約に定めた時期に先立って返還することができるが，貸主の利益を害することはできない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2014",num:"26",subject:"min",q:"賃貸借契約において敷金が差し入れられていた場合に関する次の１から５までの各記述のうち，判例の趣旨に照らし誤っているものを２個選びなさい。",c1:"１．建物の賃貸借契約において，目的建物の譲受人が賃貸人たる地位を承継した場合，敷金は譲渡人に対する賃貸借契約上の債務があればこれに充当された上で譲受人に承継されるため，賃借人は，賃貸借契約が終了し目的建物を明け渡したときは，譲受人に対し，敷金の返還を請求することができる。",c2:"２．土地の賃貸借契約において，目的土地上の建物の所有権が土地賃借権とともに譲渡され，その土地賃借権の譲渡について賃貸人の承諾がある場合，敷金についての権利関係も土地賃借権とともに移転するため，土地賃借権の譲受人は，契約が終了し目的土地を明け渡したときは，賃貸人に対し，譲渡人が差し入れていた敷金の返還を請求することができる。",c3:"３．建物の賃貸借契約において，契約が終了し目的建物が明け渡された後に敷金の返還請求がされた場合，賃料の未払があるときは，敷金が当然に充当されるため，賃貸人が賃借人に相殺の意思表示をする必要はない。",c4:"４．敷金は賃借人が賃貸借期間中に負担する債務を担保するものであるから，賃借人は，賃料の未払がある場合であっても，差し入れてある敷金をもって賃料債務に充当する旨を主張することにより，敷金の額に満つるまでは，未払賃料の支払を拒むことができる。",c5:"５．建物の賃貸借契約において，敷金返還請求権は，賃貸借契約が終了し目的建物が明け渡された時点において，それまでに生じた被担保債権を控除した残額につき具体的に発生するものであるから，賃貸借契約が終了した後であっても，目的建物が明け渡される前においては，転付命令の対象とはならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"24"},{year:"2014",num:"27",subject:"min",q:`Ａが首輪の付いている飼い主不明の犬を発見し，その不明の飼い主のために犬の世話をした場合に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａが自分の家に犬を連れて帰り，世話をしている場合，犬の飼い主に対して報酬を請求することはできない。
イ．Ａが自分の家に犬を連れて帰り，世話をしている場合，犬の世話について要求される注意義務の程度は自己の財産に対するのと同一の注意で足りる。
ウ．Ａが自分の家に犬を連れて帰り，世話をしていたところ，犬が下駄箱の上に置かれていた花瓶を倒し，壊してしまった。この場合，Ａに過失がなかったとすると，Ａは犬の飼い主に対して損害賠償を請求することができる。
エ．Ａが自分の家に犬を連れて帰り，世話をしていたところ，犬が家の塀を乗り越え，通行人Ｂに怪我をさせた。この場合のＡは，所有の意思を持たないため，動物の占有者としての責任を負わず，ＢがＡに対して損害賠償を請求するには，Ａの過失を立証しなければならない。
オ．Ａは，犬を発見した時，犬が怪我をしていたので，獣医に治療を受けさせ，治療費を支払った。その後，飼い主が犬の返還を求めてきた場合，Ａは，支払った治療費の償還を受けるまで，犬の引渡しを拒むことができる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2014",num:"28",subject:"min",q:`不当利得に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａが公正証書を債務名義としてＢの財産に強制執行をしようとしている場合，Ｂは，その強制執行に係る債務を既に弁済したことを知りつつ，後日返還を請求する旨を留保して，強制執行を避けるためやむを得ずＡに債務の弁済として金員を支払ったときは，Ａに対し，その金員の返還を請求することはできない。
イ．Ａ銀行は，Ｂに帰属している預金を誤ってＣに払い戻したものの，その払戻しについて過失があった場合，その預金について，Ｂへの払戻しをしていないときでも，Ｃに対し，支払った金員の返還を請求することができる。
ウ．債権者Ａが債務者Ｂに対する債権を被担保債権としてＣ所有の不動産の上に抵当権の設定を受けたが，当該抵当権は，Ｂが権限なくＣを代理して設定したものであった場合，その抵当権の実行により不動産の所有権を喪失したＣは，抵当権の実行手続において配当を受けたＡに対し，不当利得の返還を請求することはできない。
エ．債務者Ａが，第三者Ｂから横領した金銭を自己の金銭と識別することができない状態にした上，その金銭で自己の債権者Ｃに対する債務の弁済に充てた場合であっても，社会通念上，Ｂの金銭でＣの利益を図ったと認めるに足りる連結があり，ＣがＡの横領を知り，又は知らなかったことについて重大な過失があるときは，Ｂは，Ｃに対し，不当利得の返還を請求することができる。
オ．ＡがＢに不法な原因のために土地を譲渡し，所有権移転登記をした場合，Ａは，Ｂに対し，不当利得に基づきその返還を請求することができないときであっても，土地の所有権に基づき，所有権移転登記の抹消を請求することができる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2014",num:"29",subject:"min",q:"不法行為に関する次の１から４までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．Ａの前方不注意による自動車の運転によってＢが重傷を負い，Ｂを治療したＣの過失によってＢが死亡した場合において，ＡＣの各行為が共同不法行為となるときであっても，Ｂの死亡という結果の発生に対するＡ及びＣの寄与の割合をそれぞれ確定することができるときは，Ａは，Ｂの死亡による損害の全額を賠償する責任を負わない。",c2:"２．土地の工作物の設置又は保存に瑕疵があることによってＡに損害が生じた場合において，その工作物の占有者であるＢが損害の発生を防止するのに必要な注意をしたときは，その工作物の所有者であるＣが，Ａに対し，その損害を賠償する責任を負う。",c3:"３．複数の加害者であるＡＢの過失と被害者Ｃの過失が競合する１つの交通事故において，その交通事故の原因となった全ての過失の割合を認定することができ，Ａ，Ｂ及びＣの過失割合が順次５：３：２である場合には，ＡＢは，Ｃに対し，連帯して，その損害の８割に相当する額を賠償する責任を負う。",c4:"４．Ａの不法行為により未成年者Ｂが重傷を負った場合において，Ｂが事理弁識能力を有していなかったときであっても，その損害の発生についてＢの親に監督上の過失が認められるときには，Ａは，過失相殺による損害額の減額を主張することができる。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2014",num:"30",subject:"min",q:"Ａ及びＢが婚姻し，Ａの氏を称することにした場合において，その間の子Ｃが満１８歳であった時にＡ及びＢが離婚したことを前提として，次の１から４までの各記述のうち，誤っているものはどれか。",c1:"１．Ａ及びＢの離婚に際し，Ｃの親権者と定められたＢが婚姻前の氏に復した場合に，未成年者であるＣがＢの氏を称するためには，家庭裁判所の許可を得る必要がある。",c2:"２．Ａ及びＢの離婚に際し，Ｃの親権者と定められたＢが，婚姻前の氏に復したことにより，子が父又は母と氏を異にする場合に該当するとして，Ｃが法定の手続に従いＢの氏を称するに至った場合に，Ｃが成年に達した時から法定の期間内にＡの氏に復するためには，家庭裁判所の許可を得る必要はない。",c3:"３．Ａ及びＢの離婚に際し，Ｃの親権者と定められたＢが，Ａとの離婚後にＤと婚姻し，Ｄの氏を称することとした場合，未成年者であるＣは，Ｄの養子となる縁組をしたときに限り，Ｄの氏を称することができる。",c4:"４．Ａ及びＢの離婚当時，Ｅと婚姻してＥの氏を称することとしていたＣは，その後Ｆの養子となる縁組をした場合であっても，Ｆの氏を称することはできない。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2014",num:"31",subject:"min",q:`親権及び未成年後見に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．父又は母による親権の行使が困難又は不相当なことにより子の利益を害するときは，家庭裁判所は，期間を定めることなく親権停止の審判をすることができる。
イ．子の出生前に父母が離婚した場合には，父又は母の請求により，家庭裁判所が親権者を定める。
ウ．未成年後見人が複数いる場合には，共同でその権限を行使するのが原則であるが，家庭裁判所は，その一部の者について，財産に関する権限のみを単独で行使すべきことを定めることができる。
エ．法人は未成年後見人になることができない。
オ．親権を行う者は，自己のためにするのと同一の注意をもって，その管理権を行わなければならない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2014",num:"32",subject:"min",q:`Ａ（３０歳）Ｂ（３０歳）夫婦が，婚姻していないＣ（４２歳）とＤ（４２歳）の間の子Ｅ（４歳）を養子にする場合において，ＣはＥを認知し，ＤはＥの親権者であることを前提として，次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡＢ夫婦がＥとの間で普通養子縁組をする場合においては，Ｄの承諾を得るとともに，家庭裁判所の許可を得る必要があるが，Ｃの同意を得る必要はない。
イ．ＡＢ夫婦とＥとの間で特別養子縁組を成立させるためには，夫婦がともに養親とならなければならず，ＡとＥとの間でのみ特別養子縁組を成立させることはできない。
ウ．ＡＢ夫婦がＥとの間で普通養子縁組をする場合であっても，ＡＢ夫婦がＥの親権者となるためには，親権者の変更について家庭裁判所の許可を得なければならない。
エ．ＡＢ夫婦がＥとの間で普通養子縁組をした場合においては，ＤＥ間の親族関係は存続するが，ＣＥ間の親族関係は終了する。
オ．ＡＢ夫婦とＥとの間で特別養子縁組が成立した場合においては，ＣＥ間及びＤＥ間の親族関係は終了する。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2014",num:"33",subject:"min",q:`相続人と相続の効果に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．代襲相続は，被代襲者が死亡した場合には認められるが，被代襲者が相続欠格又は推定相続人（相続が開始した場合に相続人となるべき者）の廃除によって相続資格を失った場合には認められない。
イ．封印のある自筆証書による遺言書が検認を経ずに開封された場合，相続に関する遺言は無効となる。
ウ．推定相続人の廃除は，遺留分を有する推定相続人についてのみ認められており，被相続人の兄弟姉妹については認められていない。
エ．判例によれば，Ａが死亡し（第１相続），その相続の承認又は放棄をすべき期間中に，Ａの相続人であるＡの子Ｂが死亡した場合（第２相続），Ｂの相続人であるＢの子Ｃは，第２相続の承認又は放棄をすべき期間中に，第１相続と第２相続についてともに相続の承認をすることができるが，第１相続を放棄して，第２相続のみを承認することはできない。
オ．判例によれば，遺言により相続分の指定がされている場合であっても，被相続人の債権者は，法定相続人に対し，法定相続分に従った相続債務の履行を求めることができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2014",num:"34",subject:"min",q:`遺産分割に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．共同相続人の一人であるＡが相続開始前から被相続人の許諾を得て遺産である甲建物において被相続人と同居してきたときは，相続が開始した時から遺産分割が終了するまでの間，引き続きＡに甲建物を無償で使用させる旨の合意があったものと推認され，被相続人の地位を承継した他の相続人らが貸主となり，Ａを借主とする甲建物の使用貸借契約関係が存続することになる。
イ．共同相続人が全員の合意によって遺産分割前に遺産である土地を第三者に売却した場合において，その売買に係る代金債権は，不可分債権である。
ウ．被相続人が所有し，その名義で所有権の登記がされている甲土地を相続人の一人であるＡに相続させる旨の遺言が遺産分割の方法の指定と解される場合，Ａは，登記をしなくても甲土地の所有権の取得を第三者に対抗することができる。
エ．嫡出でない子がいる母の死亡による相続について，その子が遺産の分割を請求しようとする場合において，他の共同相続人らがその子の存在を知らないまま，既に遺産分割の協議を成立させていたときは，その子は，他の共同相続人らに対し，価額のみによる支払の請求権を有する。
オ．遺産分割後に遺産である建物に隠れた瑕疵があったことが判明した場合であっても，当該建物を遺産分割により取得した相続人は，他の相続人に対し，瑕疵担保責任を追及することができない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2014",num:"35",subject:"min",q:`被相続人Ａの遺産は，甲土地（死亡時の価額３０００万円）及び乙建物（死亡時の価額１０００万円）であり，相続債務は存在せず，法定相続人は配偶者Ｂ並びにＡＢ間の子Ｃ及びＤであることを前提として，次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。ただし，特に言及がある場合を除き，相続開始時の貨幣価値への換算並びに特別受益及び寄与分は考えなくてよい。
ア．Ｃが，遺産の維持又は増加につき８００万円相当の特別の寄与をしていた場合，具体的相続分は，Ｂ及びＣがそれぞれ１６００万円，Ｄが８００万円である。
イ．Ａが，死亡する３年前にＤに生計の資本として１０００万円を贈与していた場合，具体的相続分は，Ｂが２５００万円，Ｃが１２５０万円，Ｄが２５０万円である。
ウ．Ａが，死亡する３年前にＣに生計の資本として１０００万円を贈与していたが，遺言で，相続の際には，当該贈与は各自の相続分の算定から除外するように指示していた場合，具体的相続分は，Ｂが２０００万円，Ｃ及びＤがそれぞれ１０００万円である。
エ．Ａが，死亡する３年前にＣに生計の資本として４００万円を贈与し，さらに，遺言で甲土地及び乙建物をＢに相続させるとしていた場合，Ｄは甲土地及び乙建物について遺留分減殺請求をすることができるが，Ｃは遺留分減殺請求をすることができない。
オ．Ａが遺言で甲土地及び乙建物をＣに相続させるとしていた場合において，Ｄが甲土地及び乙建物について遺留分減殺請求権を行使したときは，Ｃは，乙建物についてのみ価額による弁償をすることはできない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2014",num:"36",subject:"min",q:`必要費に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．義務なく他人のために事務の管理を始めた者は，本人のために有益な債務を負担した場合において，その債務が弁済期にあるときは，本人に対し，自己に代わってその弁済をすることを請求することができる。
イ．占有者は，占有物について通常の必要費を支出した場合であっても，果実を取得したときには，回復者にその償還をさせることはできない。
ウ．動産質権者は，継続して占有している質物について通常の必要費を支出した場合であっても，所有者にその償還をさせることはできない。
エ．留置権者は，留置物について通常の必要費を支出した場合には，所有者にその償還をさせることができる。
オ．抵当不動産の第三取得者は，抵当不動産について通常の必要費を支出した場合には，果実を取得したときであっても，抵当不動産の代価から，他の債権者より先にその償還を受けることができる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2014",num:"37",subject:"min",q:`民法と特別法の関係に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．一般社団法人は，法令の規定に従い，定款で定められた目的の範囲内において，権利を有し，義務を負う。
イ．法人が指名債権である金銭債権を譲渡した場合において，当該債権の譲渡につき債権譲渡登記ファイルに譲渡の登記がされたときであっても，その債権の譲渡は，確定日付のある証書によって，譲渡人が債務者に通知をし，又は債務者が承諾をしなければ，債務者以外の第三者に対抗することができない。
ウ．消費者契約（消費者と事業者との間で締結される契約）において，事業者の詐欺により消費者がした意思表示は，取り消すことができる。
エ．建物の賃貸借は，これを登記した場合には，その建物の引渡しがされていないときであっても，その後その建物について物権を取得した者に対し，その効力を生ずる。
オ．製造物（製造又は加工された動産）を業として製造した者は，その引き渡した製造物の欠陥により他人の財産を侵害した場合，故意又は過失がなかったことを証明すれば，それによって生じた損害を賠償する責任を負わない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2014",num:"38",subject:"syo",q:"株式会社を設立する際の定款に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．定款の絶対的記載事項のうち，発行可能株式総数は，登記すべき事項ではない。",c2:"２．支店の所在地は，定款の絶対的記載事項である。",c3:"３．判例によれば，定款に定めのない財産引受けは無効であり，会社の成立後，その財産引受契約を承認する株主総会の特別決議をしても，これによって無効な財産引受契約が有効となるものではない。",c4:"４．定款の認証の手数料は，定款に定めがなくても，成立後の会社が負担する。",c5:"５．公証人による認証を受けた定款を会社の成立後に変更する場合には，改めて公証人による認証を受ける必要はない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"12"},{year:"2014",num:"39",subject:"syo",q:`単元株制度に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．発行済株式の総数が２０万株である会社の単元株式数は，１０００を超えることはできない。
イ．株主は，単元未満株式について，定款に定めがある場合に限り，株主総会において議決権を行使することができる。
ウ．株主は，単元未満株式について，定款に定めがある場合に限り，会社に対してその買取りを請求することができる。
エ．取締役会設置会社でない会社において，単元株式数を減少するには，株主総会の決議が必要である。
オ．種類株式発行会社においては，単元株式数は，株式の種類ごとに定めなければならない。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2014",num:"40",subject:"syo",q:`株式に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．他人の承諾を得てその名義を用いて募集株式の引受けがされた場合には，特段の事情がない限り，その名義の使用を承諾した者が株主となる。
イ．株券発行会社が株券として会社法所定の要件を満たす文書を作成した場合には，その文書は，株主に交付される前であっても，株券としての効力を有する。
ウ．会社の承認を得ないで譲渡制限株式を譲渡担保に供した場合には，その譲渡担保権の設定は，契約当事者間においては有効である。
エ．会社と従業員との間で，従業員の退職に際してはその有する当該会社の譲渡制限株式を会社の指定する者に譲渡する旨の合意をした場合には，その合意は，無効である。
オ．新株発行の無効の訴えにおいて，会社法所定の出訴期間の経過後に新たな無効事由を追加して主張することは，許されない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2014",num:"41",subject:"syo",q:`新株予約権に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．会社は，その発行する新株予約権を引き受ける者の募集をしようとするときは，募集新株予約権と引換えにする金銭の払込みの期日を定めなければならない。
イ．新株予約権は，これを発行した会社の貸借対照表において，負債の部に計上される。
ウ．新株予約権の行使に際し，金銭以外の財産を出資の目的とすることができる。
エ．会社は，その有する自己新株予約権を行使することができない。
オ．募集新株予約権の発行が法令に違反する場合において，既存の新株予約権者が不利益を受けるおそれがあるときは，その新株予約権者は，会社に対し，新株予約権の発行をやめることを請求することができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2014",num:"42",subject:"syo",q:`株主総会に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．株主総会は，会社の本店の所在地において招集しなければならない。
イ．会社法上の公開会社でない取締役会設置会社においては，株主総会の招集通知は，口頭ですることができる。
ウ．譲渡による株式の取得について会社の承認を要する旨の定款の定めは，株主総会の特別決議により，廃止することができる。
エ．取締役がその任務を怠った場合における会社に対する損害賠償責任は，総株主の同意がある場合には，株主総会の決議を経ることなく，これを免除することができる。
オ．株主総会の決議について特別の利害関係を有する者が議長として議事を主宰した場合には，その株主総会の決議は，無効である。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2014",num:"43",subject:"syo",q:`取締役及び取締役会に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．取締役会を構成する取締役は，社外取締役であっても，取締役会に上程された事柄についてだけ監視するにとどまらず，代表取締役による会社の業務執行一般につき，これを監視する職務を有する。
イ．取締役会の開催に当たり，取締役の一部の者に対する招集通知を欠いた場合において，その取締役が出席してもなお決議の結果に影響がないと認めるべき特段の事情があるときは，その決議は有効である。
ウ．取締役会の定足数は，開会時に充足されただけでは足りず，討議及び議決の全過程を通じて維持されなければならない。
エ．代表取締役の解職に関する取締役会の決議については，その決議がその代表取締役に告知されて初めて解職の効果が生ずる。
オ．代表取締役が取締役会の決議を経ないで重要な業務執行に該当する取引をした場合には，特段の事情がない限り，その会社以外の者も，取締役会の決議を経ていないことを理由とするその取引の無効を主張することができる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2014",num:"44",subject:"syo",q:"会社法上の公開会社の代表取締役の行為を監督・是正する手段に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．会社法所定の要件を満たす株主は，代表取締役による会社の業務執行に関し，法令に違反する重大な事実があることを疑うに足りる事由があるときは，会社の業務及び財産の状況を調査させるため，裁判所に対し，検査役の選任の申立てをすることができる。",c2:"２．会社法所定の要件を満たす株主は，取締役に対し，代表取締役を取締役から解任することを議題とすること及びその理由を示して，株主総会の招集を請求することができる。",c3:"３．会社法所定の要件を満たす株主は，代表取締役の職務の執行に関し法令に違反する重大な事実があった場合には，その代表取締役を取締役から解任することを議案とする株主総会が開催されたか否かを問わず，訴えをもってその解任を請求することができる。",c4:"４．会社法所定の要件を満たす株主は，代表取締役が法令に違反する行為をし，その行為によって会社に著しい損害が生ずるおそれがあるときは，その代表取締役に対し，その行為をやめることを請求することができる。",c5:"５．監査役は，代表取締役につき法令に違反する事実があると認めるときは，遅滞なく，その旨を取締役会に報告しなければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"34"},{year:"2014",num:"45",subject:"syo",q:`監査役会設置会社の会計監査人に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．会計監査人の報酬は，定款にその額を定めていないときは，株主総会の決議によって定めなければならない。
イ．会計監査人は，選任後１年以内に終了する事業年度のうち最終のものに関する定時株主総会において別段の決議がされなかったときは，その株主総会において再任されたものとみなされる。
ウ．会計監査人が欠けた場合において，遅滞なく会計監査人が選任されないときは，裁判所は，利害関係人の申立てにより，一時会計監査人の職務を行うべき者を選任することができる。
エ．会計監査人は，取締役が不正の行為をし，又は不正の行為をするおそれがあると認めるときは，遅滞なく，その旨を取締役会に報告しなければならない。
オ．会計監査人は，その職務を行うについて悪意又は重大な過失があったときは，これによって第三者に生じた損害を賠償する責任を負う。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2014",num:"46",subject:"syo",q:"会社法上の公開会社である委員会設置会社の業務執行に関する次の１から５までの各事項のうち，その決定を執行役に委任することができるものを２個選びなさい。",c1:"１．重要な財産の処分",c2:"２．取締役の報酬の決定",c3:"３．株主総会に提出する会計監査人の解任に関する議案の内容の決定",c4:"４．執行役が２名以上ある場合における代表執行役の選定",c5:"５．払込金額が募集株式を引き受ける者に特に有利な金額でない場合における募集株式の発行に係る募集事項の決定",c6:"",c7:"",c8:"",c9:"",c10:"",a:"15"},{year:"2014",num:"47",subject:"syo",q:`株式会社の剰余金の配当に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。なお，この会社の純資産額は，３００万円を下回らないものとする。
ア．判例によれば，株主の会社に対する剰余金配当請求権は，剰余金の配当に関する事項が株主総会又は取締役会の決議によって定められる前においても，株式から分離して，これを第三者に譲渡することができる。
イ．判例によれば，会社は，定款において，剰余金の配当につき，効力発生日から５年を経過しても請求がないときはその支払義務を免れる旨を定めることができない。
ウ．会計監査人設置会社でない会社が，定款の定めに基づき，１事業年度の途中において１回に限り取締役会の決議によって剰余金の配当をする場合には，その配当財産は，金銭でなければならない。
エ．金銭以外の財産を配当財産とする剰余金の配当をするには，当該配当財産に代えて金銭を交付することを会社に対して請求する権利を株主に与えるか否かにかかわらず，株主総会の特別決議によらなければならない。
オ．会社が分配可能額を超えて剰余金の配当をした場合には，会社の債権者は，その債権額を上限として，剰余金の配当を受けた株主に対し，交付を受けた配当財産の帳簿価額に相当する金銭を直接自己に支払うよう請求することができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2014",num:"48",subject:"syo",q:`株式会社の発行する社債に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．社債は，その総額が最終事業年度の末日において会社に現存する純資産額を超える場合であっても，発行することができる。
イ．会社が自己が発行した社債を取得するには，定款に別段の定めがない限り，株主総会の決議によらなければならない。
ウ．判例の趣旨によれば，会社は，弁済期の到来した社債権者に対する金銭債権を自働債権とし，社債権者の会社に対する社債の償還請求権を受働債権として，対当額において相殺をすることができる。
エ．社債権者集会において，社債の全部についてするその支払の猶予に関する事項を可決するには，議決権を有する社債権者の過半数が出席し，かつ，出席した議決権者の議決権の総額の３分の２以上の議決権を有する者の同意がなければならない。
オ．社債権者集会の決議の方法が法令に違反し，又は著しく不公正なときは，社債権者は，訴えをもってその決議の取消しを請求することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2014",num:"49",subject:"syo",q:`組織再編行為に係る契約又は計画が株主総会において承認された場合には，反対株主に，自己の有する株式を公正な価格で買い取ることを会社に請求する権利が認められている。この反対株主の株式買取請求権に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．株式買取請求権は，組織再編行為に無効原因がない場合にも認められる。
イ．当事者の申立てにより，裁判所が株式の価格について決定をしたときは，会社は，裁判所の決定した価格に加え，これに対する当該決定の確定後の年６分の利率により算定した利息をも支払わなければならない。
ウ．組織再編行為に係る契約又は計画を承認する株主総会において議決権を行使することができない株主には，株式買取請求権は認められない。
エ．株式買取請求権を行使した株主は，いつでも，会社の承諾を得ることなく，その株式買取請求を撤回することができる。
オ．株式買取請求権が認められる趣旨は，判例によれば，反対株主に会社からの退出の機会を与えるとともに，退出を選択した株主には，組織再編行為がされなかったとした場合と経済的に同等の状態を確保し，さらに，組織再編による相乗効果その他の企業価値の増加が生ずる場合には，これを適切に分配し得るものとすることにより，反対株主の利益を一定の範囲で保障することにある。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2014",num:"50",subject:"syo",q:`株式会社を当事会社とする組織再編行為と登記に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．吸収合併存続会社は，吸収合併の登記をした日に，吸収合併消滅会社の権利義務を承継する。
イ．吸収合併消滅会社の吸収合併による解散は，吸収合併の登記の後でなければ，これをもって第三者に対抗することができない。
ウ．新設合併設立会社は，その本店の所在地において設立の登記をした日に，新設合併消滅会社の権利義務を承継する。
エ．同一の不動産について，その差押えと吸収分割による権利義務の承継との間の優劣は，不動産の差押えの登記の時と吸収分割承継会社が吸収分割の登記をした時の先後で決する。
オ．株式交換完全子会社の株主は，株式交換の登記がされた日に，株式交換完全親会社の株主となる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2014",num:"51",subject:"syo",q:`株式会社の組織に関する訴えに関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．設立の無効の訴えに係る請求を認容する判決が確定したときは，会社は，清算の目的の範囲内において，清算が結了するまでは存続するものとみなされる。
イ．株主総会の決議が無効であることの確認の訴えは，その決議の日から３か月以内に提起しなければならない。
ウ．自己株式の処分の無効の訴えは，自己株式の処分をした会社及びその処分された株式を現在有する株主を被告として，提起しなければならない。
エ．株式交換の無効の訴えに係る請求を棄却する確定判決は，第三者に対してもその効力を有する。
オ．新株予約権の発行の無効の訴えに係る請求を認容する判決が確定したときは，その新株予約権は，将来に向かってその効力を失う。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2014",num:"52",subject:"syo",q:"個人商人の商号に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．商人の商号は，その商人の氏又は名を含まなければならない。",c2:"２．商人が数種の独立した営業を行うときは，その商人は，その各営業につき異なる商号を使用することができる。",c3:"３．商人は，自己と誤認されるおそれのある名称を不正の目的をもって使用する者がある場合において，その名称の使用によって営業上の利益が侵害されたときであっても，商号の登記をしていない限り，その侵害の停止を請求することができない。",c4:"４．自己の商号を使用して営業を行うことを他人に許諾した商人は，当該商人がその営業を行うものと誤認して当該他人と取引をした者に対し，その取引によって生じた債務を当該他人の財産をもって完済することができない場合に限り，連帯してその債務を弁済する責任を負う。",c5:"５．商人は，その営業を廃止するときは，その商号を譲渡することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"25"},{year:"2014",num:"53",subject:"syo",q:`次のアからオまでの各債権のうち，判例の趣旨によれば商法第５２２条の適用又は準用がないものを組み合わせたものは，後記１から５までのうちどれか。
ア．商行為によって生じた債務の不履行に基づく損害賠償請求権
イ．債権者のためには商行為ではなく，債務者のためにのみ商行為である行為によって生じた債権
ウ．商行為である金銭消費貸借に関し，利息制限法所定の制限を超えて支払われた利息・損害金についての不当利得返還請求権
エ．質屋を営む個人が商人ではない個人の顧客に対して貸付けを行った場合におけるその貸付債権
オ．満期を白地として振り出された約束手形の白地補充権
（参照条文）
商法第５２２条
 商行為によって生じた債権は，この法律に別段の定めがある場合を除き，５年間行使しないときは，時効によって消滅する。ただし，他の法令に５年間より短い時効期間の定めがあるときは，その定めるところによる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2014",num:"54",subject:"syo",q:`商人及び商行為に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。なお，各記述に係る事項について，当事者間に別段の合意はないものとする。
ア．判例によれば，商行為の代理人が本人のためにすることを示さないでこれをした場合において，相手方において，代理人が本人のためにすることを知らなかったときは，代理人は自己のためにその行為をしたものとみなされ，相手方は，本人に対して履行の請求をすることができない。
イ．商人がその営業の範囲内において他人のために金銭の立替えをしたときは，その他人に対し，立替えの日以後の年６分の利率により算定した利息を請求することができる。
ウ．商人がその営業の部類に属する契約の申込みを受けた場合において，その申込みとともに受け取った物品があるときでも，平常取引をする者から申込みを受けたときでなければ，その商人は，その物品を保管する義務を負わない。
エ．判例によれば，保証人がある場合において，保証が債権者にとって商行為であるときは，主たる債務者及び保証人が各別の行為によって債務を負担したときであっても，その債務は，各自が連帯して負担する。
オ．写真の撮影を業とする商人がその営業の部類に属する取引によって商人でない顧客に対して債権を有し，その弁済期が到来している場合において，その商人がその顧客の物を占有しているときは，当該債権がその物に関して生じたものでなくても，その商人は，当該債権の弁済を受けるまで，その物を留置することができる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2014",num:"55",subject:"syo",q:`約束手形に関する次のアからオまでの各規律のうち，約束手形の流通性を高める趣旨によるものとしてふさわしくないものを組み合わせたものは，後記１から５までのうちどれか。
ア．約束手形の振出人は，為替手形の引受人と同一の義務を負う。
イ．約束手形の金額が文字及び数字によって記載された場合において，文字によって記載された金額と数字によって記載された金額とに差異があるときは，文字によって記載された金額が手形金額となる。
ウ．約束手形に偽造の署名がある場合でも，他の署名者の債務は，その効力を妨げられない。
エ．約束手形の取得者には，手形法所定の要件の下で善意取得が認められる。
オ．約束手形の所持人が裏書人に対して遡求権を行使するためには，原則として，満期又はこれに次ぐ２取引日内に振出人に対して支払のための呈示をするなど，手形法所定の要件を満たさなければならない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2014",num:"56",subject:"syo",q:"約束手形の振出人と裏書人の手形法上の地位に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．振出人は，手形に「指図禁止」の文字を記載することができるが，裏書人は，新たな裏書を禁止することはできない。",c2:"２．手形金額を１００万円とする手形が振り出された後に，手形金額が２００万円に変造され，その後，裏書がされた場合には，振出人及び裏書人は，１００万円の限度で手形上の債務を負う。",c3:"３．受取人の記載のない手形について振出人に対し手形上の権利を行使するには，受取人の記載を補充する必要があるが，被裏書人の記載のない手形について裏書人に対し手形上の権利を行使するには，被裏書人の記載を補充する必要はない。",c4:"４．振出人及び裏書人が手形所持人に対して合同して責任を負うときは，手形所持人が振出人に対して手形上の債務の履行を請求しても，裏書人に対しては時効の中断の効力を生じない。",c5:"５．手形上の権利は，振出人に対するものであっても，裏書人に対するものであっても，満期の日から１年間行使しないときは，時効により消滅する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"34"},{year:"2014",num:"57",subject:"mso",q:"当事者に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．訴え又は訴えられることにより判決の名宛人となる者が当事者であるとする考え方によれば，訴訟物として他人の権利を主張する者であっても当事者になることができる。",c2:"２．判例の趣旨によれば，土地の共有者の一人が不実の登記名義を有する者を被告としてその抹消登記手続を求める訴えを提起することはできない。",c3:"３．胎児は，不法行為に基づく損害賠償請求権を訴訟物とするときは，当事者になることができる。",c4:"４．判例の趣旨によれば，土地所有者がその所有権に基づいて土地上の建物の共有者を相手方として建物収去土地明渡しを求める訴えを提起する場合には，建物共有者全員を被告にしなければならない。",c5:"５．解散した法人は，清算の目的の範囲内では存続するとみなされるから，その限度で当事者となることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"24"},{year:"2014",num:"58",subject:"mso",q:"選定当事者に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．訴訟の係属の後，共同の利益を有する多数の原告の中から，全員のために原告となるべき者が選定されたときは，他の原告は，当然に訴訟から脱退する。",c2:"２．選定当事者の選定は，書面で証明しなければならない。",c3:"３．第三者が係属中の訴訟の原告を自己のためにも原告となるべき者として選定した場合には，選定当事者は，その選定者のために請求の追加をすることができる。",c4:"４．複数の選定当事者のうち一部の者が死亡したときは，訴訟手続は中断する。",c5:"５．選定者は，いつでも選定を撤回することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2014",num:"59",subject:"mso",q:"訴訟能力に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．法定代理人によらずに未成年者が提起した訴えにおいて，裁判所が請求を棄却する判決をした場合には，その者が自ら提起した控訴は，不適法である。",c2:"２．訴訟の係属中に当事者につき保佐開始の審判がされても，訴訟手続は中断しない。",c3:"３．未成年者が営業を許された場合であっても，その営業に関して訴訟行為をするには，法定代理人によらなければならない。",c4:"４．未成年者が法定代理人によらずにした訴訟行為は，その者が訴訟係属中に成年に達したときは，当然に行為の時にさかのぼって有効となる。",c5:"５．成年被後見人は，日用品の購入に関する訴えを，法定代理人によらずに提起することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2014",num:"60",subject:"mso",q:"請求の併合に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．配偶者の不貞行為を理由として離婚の訴えを家庭裁判所に提起する場合には，原告は，被告に対する当該不貞行為による慰謝料請求を併合することができる。",c2:"２．土地の所有者が地上建物の所有者に対して建物収去土地明渡しを求める訴えを当該土地の所在地を管轄する裁判所に提起する場合には，原告は，被告に対する貸金返還請求を併合することができない。",c3:"３．土地の明渡請求と当該土地の明渡しまでの賃料に相当する額の損害の賠償請求とが一の訴えでされた場合には，裁判所は，各請求について判決をする必要がある。",c4:"４．消費貸借契約に基づく貸金１００万円の支払請求と，仮に当該契約が無効であるときには不当利得として同額の支払を求める請求とが一の訴えでされた場合において，裁判所は，前者の請求を認容するときは，後者の請求について判決をする必要はない。",c5:"５．不特定物の引渡しの請求とその執行不能の場合における代償請求とが一の訴えでされた場合において，裁判所は，前者の請求を認容するときは，後者の請求について判決をする必要はない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"25"},{year:"2014",num:"61",subject:"mso",q:"訴えの変更に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．判例の趣旨によれば，訴えの変更は，請求の基礎に変更があるときは，相手方が異議を述べなかったときでも許されない。",c2:"２．訴えの変更は，相手方の陳述した事実に基づいてする場合であっても，著しく訴訟手続を遅滞させるときは，許されない。",c3:"３．判例の趣旨によれば，いわゆる訴えの交換的変更においては，旧請求について訴えの取下げ及び相手方の同意又は請求の放棄がなくても，旧請求の訴訟係属は消滅する。",c4:"４．判例の趣旨によれば，ある土地の所有権確認請求訴訟において，原告が初め被告からのその売買による取得を主張し，後にその時効による取得を主張することは，訴えの変更に当たる。",c5:"５．離婚請求に当該婚姻の取消請求を追加することは，請求の基礎の変更にかかわらず，許される。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"25"},{year:"2014",num:"62",subject:"mso",q:"訴状審査に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．訴状の審査は，受訴裁判所が行う。",c2:"２．証拠の引用又は添付の不備は，補正命令の対象となる。",c3:"３．補正命令の対象となる事項については，裁判所書記官に命じて補正を促すことができない。",c4:"４．訴状が被告に送達された後は，訴状を却下することができない。",c5:"５．訴状を却下する命令に対しては，不服を申し立てることができない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2014",num:"63",subject:"mso",q:"受命裁判官に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．裁判長は，合議体の構成員以外の裁判官を受命裁判官として指定することができる。",c2:"２．裁判所は，相当と認めるときは，受命裁判官に命じて，裁判所外において検証をさせることができる。",c3:"３．弁論準備手続を行う受命裁判官は，文書の証拠調べをすることができない。",c4:"４．受命裁判官が証人尋問を行う場合において，裁判所及び裁判長の職務は，その裁判官が行うが，尋問の順序の変更についての異議の裁判は，受訴裁判所が行う。",c5:"５．裁判所は，受命裁判官をして和解を試みさせることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"13"},{year:"2014",num:"64",subject:"mso",q:`当事者の欠席に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．公示送達の方法により訴状及び第一回口頭弁論期日の呼出状が送達された場合において，被告が当該期日に欠席したときは，原告の主張した事実を自白したものとみなす。
イ．最初の弁論準備手続の期日に当事者の一方が欠席した場合には，その当事者があらかじめ提出した準備書面に記載した事項を陳述したものとみなすことができる。
ウ．裁判所は，当事者双方が期日に欠席した場合においても，証人尋問を実施することができる。
エ．判例の趣旨によれば，適法な呼出しを受けた当事者双方が欠席した口頭弁論の期日において弁論を終結し，判決の言渡しのための期日を告知したときは，同期日の呼出状を送達することを要する。
オ．裁判所は，当事者の双方が口頭弁論の期日に欠席した場合において，審理の現状及び当事者の訴訟追行の状況を考慮して相当と認めるときは，終局判決をすることができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2014",num:"65",subject:"mso",q:`訴訟手続における当事者の同意・異議に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．第一審裁判所は，訴訟が法令の定めによりその専属管轄に属する場合においても，当事者の申立て及び相手方の同意があるときは，訴訟の全部又は一部を申立てに係る地方裁判所又は簡易裁判所に移送しなければならない。
イ．当事者が補助参加について異議を述べなければ，補助参加人が参加の理由を疎明する必要はない。
ウ．裁判所は，争点及び証拠の整理をするに当たり，訴訟関係を明瞭にするため必要があると認める場合において，専門的な知見に基づく説明を聴くために専門委員を手続に関与させるときは，当事者の同意を得なければならない。
エ．裁判所は，争点及び証拠の整理を行うため必要があると認める場合において，事件を弁論準備手続に付するときは，当事者の同意を得なければならない。
オ．控訴審において，反訴の提起の相手方が異議を述べないで反訴の本案について弁論をしたときは，反訴の提起に同意したものとみなされる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2014",num:"66",subject:"mso",q:`弁論準備手続に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．弁論準備手続では，相手方が出頭している場合であっても，準備書面に記載していない事実を主張することができない。
イ．弁論準備手続の期日において，証人尋問の採否を決定することができる。
ウ．裁判所及び当事者双方が音声の送受信により同時に通話をすることができる方法によって弁論準備手続の期日における手続を行う場合には，当該期日において和解をすることができない。
エ．弁論準備手続で提出された資料は，当事者が口頭弁論において弁論準備手続の結果を陳述しなければ，これを訴訟資料とすることができない。
オ．弁論準備手続の終結後には，新たな攻撃又は防御の方法を提出することができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2014",num:"67",subject:"mso",q:`調査の嘱託に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．調査の嘱託は，裁判所が職権ですることができる。
イ．判例の趣旨によれば，調査の嘱託の嘱託先が嘱託に応じて書面を裁判所に送付した場合において，裁判所が当該書面を証拠とするには，口頭弁論において提示して当事者に意見陳述の機会を与えれば足り，当事者の援用を要しない。
ウ．調査の嘱託は，個人に対してすることができる。
エ．調査の嘱託の嘱託先が調査に応じない場合には，過料の制裁が科される。
オ．調査の嘱託を釈明処分としてすることはできない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2014",num:"68",subject:"mso",q:"証人尋問又は当事者尋問に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．証人の尋問は，その尋問の申出をした当事者及び他の当事者より先に裁判長がすることはできない。",c2:"２．当事者本人を尋問する場合においてその当事者に宣誓をさせるかどうかは，裁判所の裁量に委ねられている。",c3:"３．裁判所は，当事者本人を尋問する場合においては，その当事者が正当な理由なく期日に出頭しないときでも，その勾引を命ずることはできない。",c4:"４．裁判所は，相当と認める場合において，当事者に異議がないときは，証人の尋問に代え，その証人に書面の提出をさせることができる。",c5:"５．当事者の訴訟代理人を尋問するときは，当事者尋問の規定による。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"15"},{year:"2014",num:"69",subject:"mso",q:"文書の作成者に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．Ａ名義の文書が存在する場合に，その作成者がＡとなるのは，Ａ自らが文書を作成した場合であり，Ａの依頼を受けた使者Ｂが文書を作成した場合の作成者はＢである。",c2:"２．Ａ名義の文書をＢが無断で作成した場合であっても，当該文書がＢを作成者とするものとして提出されたときは，その成立の真正が認められる。",c3:"３．挙証者の相手方が文書の成立の真正につき認否をしなかった場合には，成立に争いがあるものとして扱われる。",c4:"４．債務者とその連帯保証人の署名がある借用証書は，一通の書面であっても，作成者が複数の文書である。",c5:"５．判例の趣旨によれば，相手方が，文書について，挙証者の主張する作成者の意思に基づいて作成されたものであることを認めたときでも，裁判所はそれに拘束されず，当該作成者の意思に基づいて作成されたものではないと判断することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"13"},{year:"2014",num:"70",subject:"mso",q:`Ｘは，Ｙに対し，Ｙの脇見運転による過失を原因とする交通事故により傷害を受け，５００万円の損害を被ったと主張して，不法行為に基づく損害賠償請求として５００万円の支払を求める訴えを提起したところ，Ｙは，Ｘには飛び出してきた不注意があるが，自分にも脇見運転による過失があったことを認めると主張した。Ｘ及びＹからこれ以外の主張がなかったとして，次のアからウまでの裁判所の判決に関する後記１から５までの各記述のうち，判例の趣旨に照らし正しいものはどれか。
ア．裁判所は，証拠調べの結果，ＹがＸに対して５００万円の弁済をしている事実を認めて，Ｘの請求を棄却する判決をした。
イ．裁判所は，証拠調べの結果，不法行為の成立を認めつつ，Ｘの飛び出しの事実を認めて，３００万円の範囲で，Ｘの請求を認容した。
ウ．裁判所は，証拠調べの結果，Ｙの脇見運転による過失は認められないとして，Ｘの請求を棄却した。`,c1:"１．アからウまでのいずれの判決も，弁論主義に反する。",c2:"２．アからウまでのいずれの判決も，弁論主義に反しない。",c3:"３．アの判決は弁論主義に反するが，イ及びウの判決は弁論主義に反しない。",c4:"４．ア及びイの判決は弁論主義に反するが，ウの判決は弁論主義に反しない。",c5:"５．ア及びウの判決は弁論主義に反するが，イの判決は弁論主義に反しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2014",num:"71",subject:"mso",q:`Ｘは，Ｙと締結した自らを注文主とする建物建築請負契約をＹの債務不履行を理由に工事完成前に解除し，Ｙを被告として，総額１０００万円の損害賠償債権のうちの一部であることを明示して４００万円の支払を求める訴えを提起した。この場合における次のアからウまでの各記述について説明した後記１から５までのうち，判例の趣旨に照らし正しいものはどれか。
ア．Ｙから何らの抗弁が提出されることなくＸの請求を全部認容する判決が確定したときは，この確定判決の既判力は，残部の請求に及ばない。
イ．裁判所は，Ｙの債務不履行に基づくＸの１０００万円の損害賠償債権は認められるが，Ｙから提出されたＸに対する売買代金債権４００万円を自働債権とする相殺の抗弁に理由があるとの心証を得たときは，Ｘの請求を棄却すべきである。
ウ．Ｙの債務不履行が認められないとしてＸの請求を棄却する判決が確定したときは，ＸがＹに対し残部の支払を求める訴えを提起することは，特段の事情がない限り，信義則に反して許されない。`,c1:"１．アからウまでの各記述はいずれも正しい。",c2:"２．アの記述は正しくないが，イ及びウの各記述は正しい。",c3:"３．イの記述は正しくないが，ア及びウの各記述は正しい。",c4:"４．ウの記述は正しくないが，ア及びイの各記述は正しい。",c5:"５．ア及びイの各記述は正しくないが，ウの記述は正しい。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2014",num:"72",subject:"mso",q:"訴えの取下げに関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．訴えは，その一部を取り下げることができる。",c2:"２．訴えは，控訴審では取り下げることができない。",c3:"３．訴えの取下げは，相手方が本案について口頭弁論をした後には，その同意なしにすることができない。",c4:"４．訴えの取下げは，和解の期日において口頭ですることができる。",c5:"５．請求を放棄した場合と異なり，訴えを取り下げた場合には，確定判決と同一の効力は生じない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2014",num:"73",subject:"mso",q:"当事者が訴訟外でした合意に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．第一審の管轄裁判所を定める当事者の合意が電磁的記録によってされたときは，その合意は，効力を生じない。",c2:"２．判例の趣旨によれば，原告と被告との間で訴えの取下げの合意が成立したときは，訴訟は，直ちに終了する。",c3:"３．訴訟の管轄をある地方裁判所の専属管轄とする旨の合意がある場合であっても，訴えが他の地方裁判所に提起され，被告が管轄違いの抗弁を提出しないで本案について弁論をしたときは，その地方裁判所は，管轄権を有する。",c4:"４．紛争を特定しないで一切起訴しない旨の合意は，有効である。",c5:"５．当事者双方が，第一審の終局判決の後，共に上告をする権利を留保して控訴をしない旨の合意をしたときは，その合意は，有効である。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"35"},{year:"2014",num:"74",subject:"mso",q:"控訴に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．訴訟費用の負担の裁判に対しては，独立して控訴をすることができない。",c2:"２．控訴が不適法でその不備を補正することができないことが明らかであるときは，第一審裁判所は，決定で，控訴を却下しなければならない。",c3:"３．控訴審の口頭弁論期日において，当事者は，第一審における口頭弁論の結果を陳述しなければならない。",c4:"４．第一審判決がその理由によれば不当である場合においても，他の理由により正当であるときは，控訴裁判所は，控訴を棄却しなければならない。",c5:"５．附帯控訴は，控訴の取下げがあったときは，控訴期間内に提起されたものであっても，その効力を失う。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2014",num:"75",subject:"mso",q:"再審に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．法律により判決に関与することができない裁判官が判決に関与した場合には，当事者が上告によりその事由を主張したときであっても，再審の訴えを提起することができる。",c2:"２．確定判決が前に確定した判決と抵触することを再審事由とする場合には，再審期間の制限はない。",c3:"３．再審の訴えを提起した当事者は，不服の理由を変更することができる。",c4:"４．裁判所は，再審の訴えが不適法である場合には，判決で，これを却下し，再審の事由がない場合には，判決で，再審の請求を棄却しなければならない。",c5:"５．裁判所は，再審の本案の審理及び裁判をする場合において，判決を正当とするときは，再審の請求を棄却しなければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"14"},{year:"2014",num:"1",subject:"kei",q:"刑罰論に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．応報刑論は，産業革命に伴う工業化・都市化によって累犯が増加したことを契機として，支持者が増えた。",c2:"２．応報刑論に対しては，重大な犯罪を犯した者であっても，再犯可能性がなければ刑罰を科すことができなくなるとの批判がある。",c3:"３．応報刑論に対しては，論者が前提としている人間の意思の自由が科学的に証明されていないとの批判がある。",c4:"４．応報刑論に対しては，犯罪を防止するために罪刑の均衡を失した重罰化を招くおそれがあるとの批判がある。",c5:"５．応報刑論に対しては，刑罰と保安処分の区別がなくなるとの批判がある。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2014",num:"2",subject:"kei",q:"窃盗罪に関する次の１から５までの各記述を判例の立場に従って検討し，正しいものを２個選びなさい。",c1:"１．宿泊客が，旅館の貸与した浴衣を自分のものにしようと考え，これを着用したまま，玄関にいた支配人に「ちょっと向かいのポストまで手紙を出してくる。」と告げ，支配人に「いってらっしゃいませ。」と言われて旅館を立ち去った行為には，窃盗罪は成立しない。",c2:"２．送金銀行の手違いで，自己名義の預金口座に誤って入金されたことを知った者が，これを自分のものにしようと考え，同口座のキャッシュカードを用いて現金自動預払機から全額を引き出した行為には，窃盗罪は成立しない。",c3:"３．民家で火災が発生し，消火活動に参加した者が，一人暮らしだった住人の焼死体に付いていた金のネックレスを発見して自分のものにしようと考え，これを取り外して持ち去った行為には，窃盗罪は成立しない。",c4:"４．施錠された友人所有のキャリーバッグを同人から預かり保管していた者が，在中する衣類を自分のものにしようと考え，友人に無断でキャリーバッグの施錠を解き，同衣類を取り出した行為には，窃盗罪は成立しない。",c5:"５．パチスロ機を誤作動させてメダルを窃取することを共謀した者が，実行者の犯行を隠ぺいするため，実行者の隣で通常の遊戯方法によりメダルを取得した場合，そのメダルを被害品とする窃盗罪は成立しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"35"},{year:"2014",num:"3",subject:"kei",q:`次のアからオまでの各記述を判例の立場に従って検討し，正しい場合には１を，誤っている場合には２を選びなさい。
ア．法律を知らなかったとしても，そのことによって，罪を犯す意思がなかったとすることはできないが，情状により，その刑を減軽し，又は免除することができる。
イ．心神喪失又は心神耗弱に該当するかどうかは法律判断であって，専ら裁判所の判断に委ねられており，犯行当時の病状，犯行前の生活状態，犯行の動機・態様等を総合して判断される。
ウ．先天的に耳が聞こえない者の行為については，必要的にその刑を減軽し，又は免除する。
エ．１４歳未満の者であっても，行為の是非善悪を弁識し，その弁識に従って行動する能力が十分に認められる場合があり，そのような者については処罰されることがある。
オ．親告罪について，告訴権者に対して自己の犯罪事実を告げ，その措置に委ねたときは，刑を減軽することができる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"21221"},{year:"2014",num:"4",subject:"kei",q:`賄賂罪についての次の【判旨】に関する後記１から５までの各【記述】のうち，【判旨】の理解として正しいものはどれか。
【判 旨】
甲は，Ａ県警察の警部補としてＡ県警察Ｘ警察署地域課に勤務し，犯罪の捜査等の職務に従事していたものであるが，公正証書原本不実記載等の事件につきＡ県警察Ｙ警察署長に対し告発状を提出していた者から，同事件について，告発状の検討，助言，捜査情報の提供，捜査関係者への働き掛けなどの有利かつ便宜な取り計らいを受けたいとの趣旨の下に供与されるものであることを知りながら，現金の供与を受けたというのである。警察法等の関係法令によれば，Ａ県警察の警察官の犯罪捜査に関する職務権限は，Ａ県警察の管轄区域であるＡ県の全域に及ぶと解されることなどに照らすと，甲が，Ｘ警察署管内の交番に勤務しており，Ｙ警察署刑事課の担当する上記事件の捜査に関与していなかったとしても，甲の上記行為は，その職務に関し賄賂を収受したものであるというべきである。
【記 述】`,c1:"１．この【判旨】は，Ｘ警察署地域課とＹ警察署刑事課とは一般的職務権限を異にするが，同じＡ県警察内であり犯罪捜査という点で職務が密接に関連することから，甲が受けた現金の供与も甲の職務に関するものと認めたものである。",c2:"２．この【判旨】は，職務関連性の判断において，甲が所属するＡ県警察の警察官に対して法令が与えた一般的職務権限に属する職務行為であるか否かを重視している。",c3:"３．この【判旨】は，警察官が捜査情報を漏えいすることはそもそも禁じられているので，これが職務行為や職務密接関連行為に該当することはないと考えている。",c4:"４．この【判旨】は，甲が以前Ｙ警察署刑事課に勤務中に扱った事件に関して，Ｘ警察署地域課に異動になった後に現金の供与を受けたとしても，供与を受けた時点で公務員である以上収賄罪が成立することを認めたものである。",c5:"５．この【判旨】は，当該事件の捜査を担当しているＹ警察署刑事課所属の警察官への働き掛けは，あっせん収賄罪にいう「あっせん」であり，これが職務行為や職務密接関連行為に該当することはないと考えている。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2014",num:"5",subject:"kei",q:`次の【事例】及び【判旨】に関する後記１から５までの各【記述】のうち，正しいものはどれか。
【事 例】
スキューバダイビングの潜水指導者である被告人は，夜間，指導補助者としての経験が極めて浅く夜間潜水の経験も数回の指導補助者と，潜水経験に乏しく技術が未熟で夜間潜水の経験のない受講生を連れて，夜間潜水の講習指導を開始した。被告人は，指導補助者及び受講生と共に潜水を開始し，途中，魚を捕えて受講生に見せた後，再び移動を開始したが，その際，指導補助者と受講生がそのまま自分に付いてくるものと考え，指導補助者に特別の指示を与えることなく，後方を確認しないまま前進した。この間，指導補助者と受講生は，魚の動きに気をとられて被告人の移動に気付かず，海流によって沖に流された。これにより，被告人は指導補助者と受講生を見失い，他方，指導補助者は被告人を探して沖に向かって数十メートル水中移動を行い，受講生もこれに追随した。指導補助者は，受講生の圧縮空気タンク内の空気量が少なくなっていることを確認して一旦海上に浮上したものの，風波のため水面移動が困難であると判断し，受講生に再び水中移動を指示した。これに従った受講生は，自分の空気量を確認しないまま水中移動を続けたため，途中で空気を使い果たしてしまい，パニック状態に陥り，自ら適切な措置を採ることができないまま，でき死するに至った。
【判 旨】
被告人が，夜間潜水の講習指導中，受講生らの動向に注意することなく不用意に移動して受講生らのそばから離れ，同人らを見失うに至った行為は，それ自体が，指導者からの適切な指示，誘導がなければ事態に適応した措置を講ずることができないおそれがあった受講生をして，海中で空気を使い果たし，ひいては適切な措置を講ずることもできないままに，でき死させる結果を引き起こしかねない危険性を持つものであり，被告人を見失った後の指導補助者及び受講生に適切を欠く行動があったことは否定できないが，それは被告人の上記行為から誘発されたものであって，被告人の行為と受講生の死亡との間の因果関係を肯定するに妨げないというべきである。
【記 述】`,c1:"１．【判旨】は，行為時に一般人が認識・予見が可能であった事情及び行為者が特に認識・予見していた事情を考慮して因果関係の有無を判断する見解に立つことを示している。",c2:"２．【判旨】は，被告人の行為と結果発生との間の因果関係の有無を判断するに際し，その間に介在した被害者である受講生の行動と被告人の行為との関係を考慮していない。",c3:"３．【判旨】は，被告人の行為の危険性が結果へと現実化したか否かによって，被告人の行為と結果発生との間の因果関係の有無を判断したものと理解することができる。",c4:"４．【判旨】は，被告人の行為と結果発生との間に条件関係が認められれば，因果関係を肯定することを示している。",c5:"５．【判旨】は，被告人の行為が結果発生の危険性を有するものである場合には，第三者である指導補助者の適切を欠くどのような行為が介在したとしても，その行為は被告人の行為により誘発されたことになるとしている。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2014",num:"6",subject:"kei",q:"各種偽造の罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．偽造通貨行使罪及び偽造有価証券行使罪の「行使」とは，各客体を真正なものとして使用することをいい，例えば，自己に資力があることを証明するために偽造紙幣又は偽造株券を相手に示すことも「行使」に該当する。",c2:"２．偽造通貨，偽造有価証券又は偽造公文書を行使の目的で情を知る者に占有移転した場合には，各客体の交付罪が成立する。",c3:"３．偽造通貨行使罪，偽造有価証券行使罪及び偽造公文書行使罪の各客体は，いずれも行使の目的で作成されたものでなければならない。",c4:"４．偽造通貨又は偽造有価証券を行使して相手から金品をだまし取った場合，詐欺罪は偽造通貨行使罪には吸収されるが，詐欺罪と偽造有価証券行使罪とは牽連犯となる。",c5:"５．偽造通貨又は偽造有価証券を収得した後に，それが偽造されたものであることを知るに至った者が，これを行使した場合には，各客体の収得後知情行使罪が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2014",num:"7",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討し，正しいものを２個選びなさい。",c1:"１．Ａは，ＢがＶを殺害しようとして拳銃で狙っているのを見て，Ｂの発射した弾丸がＶに命中しなかった場合には自らＶを射殺してＢの目的を達成させようと考え，Ｂの知らない間に拳銃を持って付近に待機していたが，Ｂの発射した弾丸がＶに当たってＶが死亡した。この場合，Ａには殺人既遂罪の幇助犯が成立する。",c2:"２．Ａは，Ｂが賭博場を開くことを知って，これを手伝うつもりでＢには告げずに客を誘って賭博場に案内して賭博をさせた。この場合，Ａには賭博場開張図利罪の幇助犯が成立する。",c3:"３．Ａは，ＢがＶを殴打しようとしているときに，Ｂに気付かれずにＶの足を押さえ付けたため，Ｂは，Ｖの顔面を殴打して顔面打撲の傷害を負わせることができた。この場合，Ａには傷害罪の共同正犯が成立する。",c4:"４．Ａは，Ｂにその夫Ｖを殺害させようと考えて，Ｂの知らない間に，Ｖの不倫の現場写真と拳銃をＢの居宅のテーブルに置いておいたところ，それを見たＢがＶに対する殺意を抱き，その拳銃を発砲してＶを殺害した。この場合，Ａには殺人既遂罪の単独正犯が成立する。",c5:"５．Ａは，ＢがＶに致死量に満たない毒入りのコーヒーを渡したのを知って，Ｖを殺害しようと考え，Ｂの知らない間に，Ｂの入れた毒と併せて致死量となる量の毒をそのコーヒーに入れ，その後，Ｖがそのコーヒーを飲んで死亡した。この場合，Ａには殺人既遂罪の単独正犯が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"25"},{year:"2014",num:"8",subject:"kei",q:"次の１から５までの各事例における甲の罪責を判例の立場に従って検討した場合，甲に電子計算機使用詐欺罪が成立するものはどれか。",c1:"１．甲は，電磁的記録部分を偽造したキャッシュカードを使って現金を得ようと考え，これを乙銀行に設置された現金自動預払機に挿入して作動させ，これに保管されていた現金を引き出した。",c2:"２．甲は，消費者金融会社の無人契約機を使い，同無人契約機とオンラインで結ばれているオンラインセンターにいたオペレーター乙に対し，Ｘに成り済まして会員契約を締結した上，同無人契約機を操作して金銭の借入れを申し込み，甲をＸと誤信した乙に同社の電子計算機を操作させ，同社名義の預金口座から甲の管理するＸ名義の預金口座に５０万円を振り込ませた。",c3:"３．甲は，Ａの所有する不動産を勝手に処分するために，Ｘ地方法務局の登記官乙に対し，Ａの所有権登記がある不動産につき自己に所有権が移転した旨内容虚偽の申告をし，乙をして同法務局内の電子計算機に接続されたハードディスクに記録されていた同不動産の登記に関する電磁的記録をその旨書き換えさせた。",c4:"４．甲は，盗んだクレジットカードの名義人乙を装い，インターネットを使用した取引の決済に用いることができる電子マネーの購入手続として，乙の氏名やカード番号等の情報をインターネットを介してクレジットカード会社が使用する電子計算機に送信し，同電子計算機に接続されたハードディスクに乙が電子マネーを購入した旨の電磁的記録を作ってその電子マネーの利用権を取得した。",c5:"５．甲は，自己がインターネット上に開設した天気予報サイトのホームページの閲覧数を増やして広告収入を増やそうと考え，競合会社の電子計算機に接続されたハードディスクに記録されていた同社の天気予報サイトのホームページに関する電磁的記録を書き換えて予報が外れるようにさせたところ，自己の開設したサイトのホームページ閲覧数が増えて広告収入も増えた。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2014",num:"9",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合，誤っているものはどれか。",c1:"１．甲は，電話線を盗む目的で，電柱に架設されていた電話会社所有の電話線を切断しているところを警察官に発見された。甲には窃盗罪の実行の着手が認められる。",c2:"２．甲は，深夜，金品窃取の目的で電器店に侵入し，懐中電灯で真っ暗な店内を照らしたところ，陳列棚に電気器具類があることを認識したが，なるべく現金を盗みたいと思い，歩いてレジの前に至ったところで警備員に発見された。甲には窃盗罪の実行の着手が認められる。",c3:"３．甲は，夜間，一人で歩いていたＶ女を見付け，約５キロメートル先のひとけのない工事現場にＶ女を連れ込んで強姦することを決意し，Ｖ女を殴って失神させた上，近くに停めていたダンプカーの助手席にＶ女を乗せて発進させた。甲には強姦罪の実行の着手が認められる。",c4:"４．甲は，X の住んでいる家を焼損する目的で，これと約５０センチメートル隔てて隣接している木造物置小屋の中のわらや薪に灯油をまいて放火したが，物置小屋の一部を焼損するにとどまった。甲には現住建造物等放火罪の実行の着手が認められる。",c5:"５．甲は，登校中の子供に毒入りジュースを飲ませてこれを殺害する目的で，前日の夜に，夜間は人通りのない通学路に致死量を超える毒を混入させたペットボトル入りのジュースを置いた。甲には殺人罪の実行の着手が認められる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2014",num:"10",subject:"kei",q:`刑法第２３０条の２に関する次の各【見解】についての後記アからオまでの各【記述】を検討し，正しい場合には１を，誤っている場合には２を選びなさい。
【見 解】
Ａ説：刑法第２３０条の２の規定は，名誉毀損罪について真実性の証明がなされたことを処罰阻却事由として定めたものである。
Ｂ説：刑法第２３０条の２の規定は，他人の名誉を毀損する表現の内容が証明可能な程度に真実であることを違法性阻却事由として定めたものである。
【記 述】
ア．Ａ説は，刑法第２３０条の２が真実性の証明に係る立証責任を被告人に負担させていることと整合的であると評価されている。
イ．Ｂ説に対しては，他人の名誉を毀損する表現をした者がその表現内容について真実であると信じた場合には，常に故意がないことになり相当でないという批判が向けられている。
ウ．Ａ説に立つことと，相当な資料・根拠に基づく言論活動について刑法第３５条による違法性阻却の余地を認めることは両立しない。
エ．Ｂ説によれば，他人の名誉を毀損した者が，その表現した事実が証明可能な程度に真実であると誤信し，その誤信したことについて，確実な資料・根拠に照らし相当の理由がある場合には，違法性が阻却されると考えることになる。
オ．Ａ説に対しては，真実の言論について違法性を認める点に疑問があるとの批判が向けられている。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"12221"},{year:"2014",num:"11",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討し，正しいものを２個選びなさい。",c1:"１．甲は，乙に対し，丙の日本刀を盗んでくれば高値で買ってやると申し向け，乙が盗んできた日本刀を買い受けた。甲には，窃盗教唆罪及び盗品等有償譲受け罪が成立し，これらは併合罪となる。",c2:"２．甲は，乙が強盗を行うつもりであることを知りながら，乙に模造拳銃１丁を貸し与えたところ，乙は，２店のコンビニエンスストアで，同模造拳銃を使ってそれぞれ強盗を行った。甲には，２個の強盗幇助罪が成立し，これらは併合罪となる。",c3:"３．甲は，乙を殺害する目的で乙が居住する家に侵入し，乙及び偶然その場に居合わせた丙をそれぞれ殺害した。甲には，乙に対する住居侵入罪及び殺人罪が成立し，これらは牽連犯となり，これと丙に対する殺人罪が併合罪となる。",c4:"４．甲は，強盗の目的で，路上を連れ立って歩いていた乙及び丙に対し，包丁の刃先を両名の方に向けながら「お前ら金を出せ。出さないと殺すぞ。」と言って脅迫し，両名からそれぞれ現金を奪った。甲には，２個の強盗罪が成立し，これらは併合罪となる。",c5:"５．甲は，恐喝の手段として乙を監禁し，乙から現金を喝取した。甲には，監禁罪及び恐喝罪が成立し，これらは併合罪となる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"15"},{year:"2014",num:"12",subject:"kei",q:"刑法第１３０条の住居侵入等の罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．本罪の客体は，人の住居若しくは邸宅，又は人の看守する建造物若しくは艦船である。",c2:"２．刑法第１３０条の規定する「看守」とは，現実に人が監視していることを意味し，単に出入口に鍵をかけてその鍵を保管しただけでは足りない。",c3:"３．集合住宅の１階出入口から各居室の玄関までの共用部分は，刑法第１３０条の規定する「住居」に当たる。",c4:"４．建造物に付属し，その利用に供される囲にょう地は，刑法第１３０条の規定する「建造物」に当たる。",c5:"５．１棟の建物の低層階に商業施設，高層階に住居がそれぞれ存在する場合，当該建物全体が刑法第１３０条の規定する「住居」に当たる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2014",num:"13",subject:"kei",q:`故意に関する次の各【見解】についての後記１から５までの各【記述】のうち，正しいものを２個選びなさい。
【見 解】
Ａ説：故意の有無については，構成要件を基準にして判断すべきであり，殺人罪においては，行為者の認識した事実と発生した事実が，およそ「人を殺す」という点で一致していれば故意が認められる。
Ｂ説：故意の有無については，構成要件を基準にして判断すべきであるが，殺人罪においては，行為者の認識した事実と発生した事実が，「その人を殺す」という点で一致していなければ故意は認められない。
【記 述】`,c1:"１．Ａ説に対しては，客体の錯誤と方法の錯誤の区別が必ずしも明らかではない場合があり，その場合の故意の有無につき，どのように判断するのか明確ではないとの批判がある。",c2:"２．Ｂ説に対しては，故意以外の構成要件該当性は法益主体ごとに判断するのに，故意の有無についてのみ法益主体の相違を問題にしないのは論理的でないとの批判がある。",c3:"３．侵害が生じた客体に錯誤はないが，侵害に至る因果関係に錯誤がある場合の故意の有無について，Ａ説かＢ説かによる差はない。",c4:"４．駅のホームにいた人を甲だと思い，甲を殺そうと考え，電車が近づいてきたときにその人をホームから突き落としてれき死させたところ，その人が甲ではなく，別人の乙であった場合，Ａ説・Ｂ説のいずれによっても，乙に対する殺人罪の故意が認められることになる。",c5:"５．狩猟中，動く物体を見付け，これを日頃から恨みを抱いていた甲だと思い，甲を殺そうと考え，その動く物体を狙って猟銃を発砲し，これに弾丸を命中させたが，実際に弾丸が命中したのは，甲ではなく，甲の飼い犬であった場合，Ａ説によれば器物損壊罪の故意が認められ，Ｂ説によれば同罪の故意が認められないことになる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"34"},{year:"2014",num:"14",subject:"kei",q:"強盗の罪に関する次の１から５までの各記述を判例の立場に従って検討し，正しいものを２個選びなさい。",c1:"１．甲は，金品窃取の目的で乙方内を物色中，金品を手にする前に乙に見付かり，逮捕を免れるため，乙に暴行を加えてその反抗を抑圧し，逃走した。甲には事後強盗未遂罪が成立する。",c2:"２．甲は，金品窃取の目的で乙方の金庫の扉を開けていたところを乙に見付かり，自分が犯人であることを警察に告げられることを防ぐため，乙を殺害し，そのまま逃走した。甲には強盗殺人未遂罪が成立する。",c3:"３．甲は，路上で乙とけんかになり，乙の胸をナイフで刺して殺害したが，そのすぐ後，乙が身に付けていた腕時計に気付き，自分のものにしようと考え，これを持ち去った。甲には強盗殺人既遂罪が成立する。",c4:"４．甲が，金品を奪う目的で，乙に暴行を加えてその反抗を抑圧したところ，乙は，持っていたバッグをその場に放置して逃走したことから，甲は，そのバッグを持ち去った。甲に強盗既遂罪は成立しない。",c5:"５．甲は，深夜，事務所で窃盗をしようと考え，窃盗の際に誰かに発見されたら包丁で脅して逃げるため，これを携帯しながら盗みに入ることができそうな事務所を探して街をはいかいしていたが，悔悟の念を生じたため，盗みに入ることを断念した。甲に強盗予備罪の中止犯は成立しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"15"},{year:"2014",num:"15",subject:"kei",q:`次の【事例】及び各【見解】に関する後記１から５までの各【記述】のうち，誤っているものはどれか。
【事 例】
甲は，乙から裁判の証人として請求されてＸ裁判所から呼出しを受けたところ，証人尋問期日の３日前にその不出頭を懸念した乙から「俺が裁判所まで連れて行くから，証人尋問の日までここにいろ。」と言われ，見張りを付けられてマンションの一室に監禁された。甲は，自己の生命身体に対する危険は感じなかったものの，証人として出廷したくないと思い，同室に放火して騒ぎを起こし，見張りの者が消火に当たっている隙に逃亡しようと考え，同室の壁等に灯油をまいて放火し，同室の一部及びその上階の第三者が住む部屋の一部を焼損させた。
【見 解】
Ａ説：当該避難行為が「やむを得ずにした行為」でなければ緊急避難は認められないが，当該行為が危難を避けるための一つの方法と認められれば，法益権衡の要件を欠いても過剰避難が成立する。
Ｂ説：当該避難行為が「やむを得ずにした行為」でなければ緊急避難は認められないが，「やむを得ずにした行為」でなくとも法益権衡の要件を充たしていれば過剰避難が成立し，また，「やむを得ずにした行為」であって，法益権衡の要件を欠く場合にも過剰避難が成立する。
Ｃ説：当該避難行為が「やむを得ずにした行為」でなければ緊急避難，過剰避難とも認められず，過剰避難は，「やむを得ずにした行為」であって，かつ，法益権衡の要件を欠く場合に成立する。
【記 述】`,c1:"１．【事例】に，更に「事件当時，部屋の窓から逃走するなどして脱出することは可能であった」との事情がある場合，Ａ説からは甲に過剰避難が成立することになる。",c2:"２．【事例】に，更に「事件当時，甲が部屋から脱出する手段はほかになかった」との事情がある場合，Ｂ説からは甲に過剰避難が成立することになる。",c3:"３．【事例】に，更に「事件当時，部屋の窓から逃走するなどして脱出することは可能であった」との事情がある場合，Ｃ説からは甲に過剰避難が成立することになる。",c4:"４．【事例】に，更に「事件当時，部屋の窓から逃走するなどして脱出することは可能であった」との事情がある場合，Ｂ説からは甲には緊急避難の成立も過剰避難の成立も認められない。",c5:"５．【事例】に，更に「事件当時，甲が部屋から脱出する手段はほかになかった」との事情がある場合，Ｃ説からは甲に過剰避難が成立することになる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2014",num:"16",subject:"kei",q:"次の１から５までの各記述のうち，犯人が他人を教唆して自己を隠避させた場合に犯人隠避教唆罪の成立を認める見解の根拠となり得るものを２個選びなさい。",c1:"１．教唆犯の処罰根拠は，正犯者を犯罪に引き込み，有責で処罰される状態に陥れたことにある。",c2:"２．犯人隠避は，隠避させる者に犯人が働き掛けることによって行われるのが通常予定される事態であるから，本来は必要的共犯と理解すべき犯罪類型である。",c3:"３．正犯行為に期待可能性がないのであれば，教唆行為にも期待可能性はない。",c4:"４．犯人自ら逃げ隠れる行為のみが，法律の放任行為として国家による干渉を受けない防御の自由の範囲内にある。",c5:"５．教唆にとどまると可罰的であるのに，より犯情の重い正犯に及ぶと不可罰になるのは相当でない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"14"},{year:"2014",num:"17",subject:"kei",q:`教授Ｘと学生Ｙは，次の【事例】における甲の罪責について後記【会話】のとおり検討している。【会話】中の①から⑤までの（ ）内から適切な語句を選んだ場合，正しいものの組合せは，後記１から５までのうちどれか。
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
学生Ｙ．甲には，窃盗既遂罪の④（キ．幇助犯・ク．教唆犯）のほかに，⑤（ケ．窃盗未遂罪・コ．窃盗既遂罪）の間接正犯が成立すると思います。`,c1:"１．①ア ②エ ③オ ④ク ⑤ケ",c2:"２．①イ ②ウ ③オ ④キ ⑤コ",c3:"３．①ア ②エ ③オ ④ク ⑤コ",c4:"４．①イ ②ウ ③カ ④キ ⑤コ",c5:"５．①ア ②エ ③カ ④キ ⑤ケ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2014",num:"18",subject:"kei",q:"放火等の罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．Ａは，Ｂが居住する家屋に隣接する無人の倉庫に灯油をまいて放火したところ，Ｂ居住の家屋にまで延焼したが，Ａは，Ｂ居住の家屋に延焼することまで予想していなかった。その倉庫がＢ所有のものであった場合，Ａには延焼罪（刑法第１１１条第１項）が成立する。",c2:"２．Ａは，無人の倉庫に放火しようとして，その倉庫に灯油をまいてライターで火をつけたが炎は燃え上がらず，燃焼には至らなかった。その倉庫がＡ所有のものであった場合，Ａには非現住建造物等放火罪（刑法第１０９条第２項）の未遂罪が成立する。",c3:"３．Ａは，無人の倉庫に放火するためにこれに使用するガソリンとライターを持ってその倉庫に向かっていたところ，Ａに不審を抱いた警察官から職務質問を受け，倉庫に放火するには至らなかった。その倉庫がＡ所有のものであった場合，Ａに放火予備罪（刑法第１１３条）は成立しない。",c4:"４．Ａは，Ａ所有の倉庫に放火しようと考え，その倉庫の近くの消火栓から放水できないように同消火栓に工作をしたが，放火するには至らなかった。Ａには消火妨害罪（刑法第１１４条）が成立する。",c5:"５．Ａは，無人の倉庫に灯油をまいて放火し，これを焼損したが，公共の危険は生じなかった。その倉庫が火災保険の付されたＡ所有のものであった場合，Ａに非現住建造物等放火罪（刑法第１０９条第１項）は成立しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2014",num:"19",subject:"kei",q:`次の【事例】及び【判旨】に関する後記１から５までの各【記述】のうち，正しいものを２個選びなさい。
【事 例】
暴力団組長である被告人は，被告人を警護するスワットと呼ばれる複数のボディーガードを配下に持ち，被告人が車両で移動する際には，拳銃及びそれに適合する実包（以下「拳銃等」という。）を携帯したスワットが被告人車両の前後の車両に乗車するなどして，被告人を警護することを常としていた。被告人は，本件犯行時，車両で移動したが，その際，拳銃等を携帯したスワットらが被告人車両の前後の車両に乗車し，被告人車両と隊列を組んで移動するなどして，被告人の警護に当たった。
【判 旨】
被告人は，スワットらに対して拳銃等を携行して警護するように直接指示を下さなくても，スワットらが自発的に被告人を警護するために本件拳銃等を所持していることを確定的に認識しながら，それを当然のこととして受け入れて認容し，そのことをスワットらも承知しており，被告人とスワットらとの間に拳銃等の所持につき黙示的に意思の連絡があった。そして，スワットらは被告人の警護のために本件拳銃等を所持しながら終始被告人の近辺にいて被告人と行動を共にしていたものであり，彼らを指揮命令する権限を有する被告人の地位と彼らによって警護を受けるという被告人の立場を併せ考えれば，実質的には，正に被告人がスワットらに本件拳銃等を所持させていたと評し得る。よって，被告人には，本件拳銃等の所持について，スワットらとの間で，銃砲刀剣類所持等取締法違反の罪の共謀共同正犯が成立する。
【記 述】`,c1:"１．【判旨】の考え方によれば，共謀共同正犯が成立するためには，実行行為者とその背後者の間に明示の意思連絡が常に必要なわけではない。",c2:"２．【判旨】の考え方によれば，およそ実行行為者とその背後者の間に意思連絡がある場合には，背後者について狭義の共犯が成立することはなく，共謀共同正犯が成立することとなる。",c3:"３．【判旨】の考え方によれば，共謀共同正犯が成立するためには，一般に，実行行為を行わない者に実行行為者に対する指揮命令権限が必要である。",c4:"４．【判旨】の考え方によれば，仮に【事例】において，現実には被告人がスワットらの拳銃等の所持を認識・認容していたのに，スワットらは，これらの所持に被告人が気付いていないと思っていた場合でも，被告人には共謀共同正犯が成立することとなる。",c5:"５．【判旨】では，被告人が犯行現場付近にいて犯行と密接な関係を保っていたことや被告人の組織内での地位が，被告人を共同正犯と評価する上での重要な事情として考慮されている。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"15"},{year:"2014",num:"20",subject:"kei",q:`次の【事例】に関する後記アからオまでの各【記述】を判例の立場に従って検討し，正しい場合には１を，誤っている場合には２を選びなさい。
【事 例】
　甲は，知人のＡをだまして，Ａ所有の土地・建物（以下「本件不動産」という。）を時価よりも割安な価格で入手した上，他人に転売してもうけを得ようと考えた。そこで，甲は，Ａに対し，実際にはそのような事実はないのに，「本件不動産は，現在は公表されていないが，大規模な地盤沈下のおそれのある地域にある。」と伝えた上，「公表される前に，俺が買ってやる。」と言った。Ａは，元々，本件不動産を子供に相続させるつもりであり，他人に売り渡すつもりはなかったが，甲の言葉を信じ，低額でも処分しようと思い，某月１日，甲との間で，通常の取引価額の半額程度である２０００万円で本件不動産を売却する旨の売買契約を締結した。そして，甲は，同月３日，本件不動産の自己への所有権移転登記を行うとともに，本件不動産の売買代金として，現金２０００万円をＡに支払い，同月５日，本件不動産の引渡しを受けた。
　その後，甲は，乙との間で本件不動産に関する売買の交渉を行ったが，その過程で，乙は，甲がＡをだまして相当安い価格で本件不動産を入手したことを知った。しかし，乙は，甲から，売買代金として通常の取引価額よりも低額である３０００万円を提示されたことから，同月２０日，甲との間で本件不動産の売買契約を締結し，同日，乙への所有権移転登記を行った。
　一方，甲は，知人の丙に前記売買代金として現金３０００万円を受け取らせ，Ｂ銀行の甲名義の預金口座に直ちに同代金を入金させることとし，同月１８日，その旨を丙に指示した。丙は，それまでの経緯を知らないまま，甲の指示に従い，同月２０日，乙から現金３０００万円を受領した。ところが，丙は，多額の借金を抱えており，Ｂ銀行に向かう途中，「この現金を元に一もうけして借金返済に充てよう。」と考え，競馬場に行き，乙から受領した現金の全額を馬券購入に充てた。すると，総額で１０００万円のもうけが出たので，丙は，同月２１日，現金３０００万円をＢ銀行の甲名義の預金口座に入金し，もうけに相当する現金１０００万円を自己の借金返済に充てて費消した。
【記 述】
ア．甲には，本件不動産の自己への所有権移転登記が完了した時点で，詐欺既遂罪が成立する。
イ．甲が本件不動産の乙への所有権移転登記を行った行為には，横領罪が成立する。
ウ．乙には，本件不動産の自己への所有権移転登記が完了した時点で，詐欺既遂罪の幇助犯が成立する。
エ．乙が本件不動産を譲り受けた行為には，盗品等有償譲受け罪が成立する。
オ．丙は甲に財産上の損害を与えていないので，丙に横領罪は成立しない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"12212"},{year:"2014",num:"21",subject:"kso",q:`次の【事例】において，司法警察員が後記アからオまでの【捜査】を行った場合，あらかじめ令状の発付を受けていなければ適法と評価される余地のないものは幾つあるか。後記１から６までのうちから選びなさい。ただし，判例がある場合には，それに照らして考えるものとする。
【事 例】
司法警察員は，被害者Ｖの殺害死体が発見されたことから，その捜査を開始したところ，Ｖの預金が，同死体の発見された前日にＶのキャッシュカードを用いて銀行の現金自動預払機から払い戻されていたことを把握し，同銀行に設置された防犯カメラを解析した。その結果，Ｖの預金を払い戻した人物の容貌がＶの知人Ａの容貌と類似していることが判明し，司法警察員は，Ａを被疑者として次のアからオまでの【捜査】を実施した。
【捜 査】
ア．Ａに知られずに，公道上を歩行中のＡの容貌を写真撮影した。
イ．Ａに知られずに，Ａの自宅から公道上のごみ集積所に排出されたごみ袋を持ち帰った。
ウ．Ａに知られずに，Ａと取引のある金融機関にＡの負債内容の報告を求め，それを記録した書面の交付を受けた。
エ．Ａの同意に基づいて採取した口腔内細胞を試料として，ＡのＤＮＡ型を検査した。
オ．Ａに対し，Ａの同意に基づいてポリグラフ検査を実施した。`,c1:"１．０個",c2:"２．１個",c3:"３．２個",c4:"４．３個",c5:"５．４個",c6:"６．５個",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2014",num:"22",subject:"kso",q:`次の【記述】は，自動車検問に関する最高裁判所の判例からの引用である。【記述】中の①から③までの（ ）内から適切な語句を選んだ場合，その組合せとして正しいものは，後記１から５までのうちどれか。
【記 述】
「警察法２条１項が『交通の取締』を警察の責務として定めていることに照らすと，交通の安全及び交通秩序の維持などに必要な警察の諸活動は，強制力を伴わない任意手段による限り，一般的に許容されるべきものであるが，それが国民の権利，自由の干渉にわたるおそれのある事項にかかわる場合には，任意手段によるからといって無制限に許されるべきものでないことも同条２項及び①（ａ．刑事訴訟法１８９条 ｂ．警察官職務執行法１条）などの趣旨にかんがみ明らかである。しかしながら，自動車の運転者は，②（ａ．公道において自動車を利用することを許されていること ｂ．警察が犯罪があると思料するときに，捜査するものとされていること）に伴う当然の負担として，合理的に必要な限度で行われる交通の取締に協力すべきものであること，その他現時における交通違反，交通事故の状況などをも考慮すると，警察官が，交通取締の一環として交通違反の多発する地域等の適当な場所において，交通違反の予防，検挙のための自動車検問を実施し，同所を通過する自動車に対して③（ａ．走行の外観上の不審な点の有無及び程度等の諸般の事情を勘案した上 ｂ．走行の外観上の不審な点の有無にかかわりなく）短時分の停止を求めて，運転者などに対し必要な事項についての質問などをすることは，それが相手方の任意の協力を求める形で行われ，自動車の利用者の自由を不当に制約することにならない方法，態様で行われる限り，適法なものと解すべきである。」`,c1:"１．①ａ ②ａ ③ａ",c2:"２．①ａ ②ｂ ③ａ",c3:"３．①ａ ②ｂ ③ｂ",c4:"４．①ｂ ②ａ ③ａ",c5:"５．①ｂ ②ａ ③ｂ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2014",num:"23",subject:"kso",q:`次の【事例】について述べた後記アからオまでの【記述】のうち，正しいものの組合せは，後記１から５までのうちどれか。ただし，判例がある場合には，それに照らして考えるものとする。
【事 例】
司法巡査は，「路上で人がバットで殴られている。」旨の１１０番通報に基づき，事件現場に急行したところ，現場到着時に犯人が逃走していたことから，傷害を負った被害者から被害状況や犯人の服装・体格等を聴取し，犯人の探索を開始した。司法巡査は，事件発生の約３０分後に事件現場から約５００メートル離れた路上において，被害者が供述した犯人の服装・体格と一致する人物甲がバットを持って歩いているのを認め，甲に「ちょっと待って。」と声を掛けて停止を求めた。すると，甲が直ちに逃走を開始したため，司法巡査は甲を追跡し，甲を傷害罪の準現行犯人として逮捕した。甲は，逮捕翌日に，傷害罪により検察官に送致された。
【記 述】
ア．司法巡査は，甲を準現行犯人として逮捕するに当たり，甲に逮捕の理由を告げなければならない。
イ．甲が司法巡査から「ちょっと待って。」と声を掛けられて直ちに逃走を開始したことは，「誰何されて逃走しようとするとき。」（刑事訴訟法第２１２条第２項第４号）に該当する。
ウ．甲の逮捕後，勾留請求前の時点で本件が強盗目的で敢行されたと疑うに足りる相当な理由が生じた場合には，検察官は，強盗致傷罪で勾留を請求することが可能である。
エ．甲を傷害罪で勾留した後，本件が強盗目的で敢行された疑いが生じた場合であっても，強盗目的であったことの捜査のために勾留期間を延長することは許されない。
オ．甲を傷害罪で勾留した後，甲が「強盗目的で事件を起こした。」旨供述した場合には，傷害罪による勾留中に強盗致傷罪で逮捕しても適法である。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2014",num:"24",subject:"kso",q:`逮捕状による逮捕と起訴前の勾留に関する次のアからオまでの各記述のうち，正しい場合には１を，誤っている場合には２を選びなさい。ただし，判例がある場合には，それに照らして考えるものとする。
ア．どちらも，死刑又は無期若しくは長期３年を超える懲役若しくは禁錮に当たる事件であれば，裁判官は，被疑者が身体を拘束されている期間中，いつでも国選弁護人を付すことができる。
イ．どちらも，刑事訴訟法上，不服申立ての手段がない。
ウ．どちらも，保釈は認められない。
エ．どちらも，令状を執行した後，被疑者に対し，直ちに犯罪事実の要旨及び弁護人を選任することができる旨を告げた上，弁解の機会を与えなければならない。
オ．どちらも，司法警察員の請求により裁判官が令状を発付する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"22122"},{year:"2014",num:"25",subject:"kso",q:`次のアからオまでの各記述のうち，誤っているものの組合せは，後記１から５までのうちどれか。
ア．電磁的記録を保管する者その他の電磁的記録を利用する権限を有する者に命じて必要とする電磁的記録を記録媒体に記録させ，又は印刷させた上，当該記録媒体を差し押さえる場合，裁判官の発する令状に，記録させ若しくは印刷させるべき電磁的記録及びこれを記録させ若しくは印刷させるべき者の記載がなされる必要がある。
イ．差し押さえるべき物が電子計算機である場合，当該電子計算機に電気通信回線で接続している記録媒体であって，当該電子計算機で作成若しくは変更した電磁的記録又は当該電子計算機で変更若しくは消去することができることとされている電磁的記録を保管するために使用されていると認めるに足りる状況にあるものから，その電磁的記録を当該電子計算機又は他の記録媒体に複写した上，当該電子計算機又は当該他の記録媒体を差し押さえるときには，裁判官の発する令状に，差し押さえるべき物の記載とは別に，その複写すべきものの範囲の記載がなされる必要はない。
ウ．差し押さえるべき物が電磁的記録に係る記録媒体であるときは，裁判官の発する令状により差押えを実施する者は，その差押えに代えて，差押えを受ける者に差し押さえるべき記録媒体に記録された電磁的記録を他の記録媒体に複写させ，印刷させ，又は移転させた上，当該他の記録媒体を差し押さえる権限を有する。
エ．差し押さえるべき物が電磁的記録に係る記録媒体であるときは，裁判官の発する令状により捜索又は差押えを実施する者は，処分を受ける者に対し，電子計算機の操作その他の必要な協力を求めることができる。
オ．裁判官の発する令状により，電磁的記録を保管する者その他の電磁的記録を利用する権限を有する者に命じて必要とする電磁的記録を記録媒体に記録させ，又は印刷させた上，当該記録媒体を差し押さえる場合，被疑者又は弁護人は，その実施に立ち会う権利を有する。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2014",num:"26",subject:"kso",q:`次のⅠないしⅣの【見解】は，医師が捜査機関の依頼に基づき，人の身体から注射器を用いて血液を採取するに当たり，相手方の意思に反して直接強制して採取するために必要と考えられる令状に関するものである。【見解】に関する後記アからオまでの【記述】のうち，誤っているものの組合せは，後記１から５までのうちどれか。
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
オ．Ⅳの見解に対しては，人の老廃物である尿と血液とを区別して考える必要はないとの批判がある。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2014",num:"27",subject:"kso",q:`次のアからオまでの各記述は，犯罪の捜査に欠くことのできない知識を有すると明らかに認められる者が取調べに対して供述を拒んだため，検察官が刑事訴訟法第２２６条に基づき証人尋問を請求する場合に関する記述である。各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。
ア．検察官は，第１回公判期日後には証人尋問を請求することができない。
イ．検察官が起訴後に証人尋問を請求する場合でも，請求先は裁判所ではなく裁判官である。
ウ．被告人，被疑者及び弁護人は，必ず証人尋問に立ち会う権利を有する。
エ．証人尋問が実施された後，裁判所は，公判期日において，その尋問の結果を記載した書面を取り調べなければならない。
オ．証人は，召喚に応じなくとも，勾引されることがない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2014",num:"28",subject:"kso",q:`公訴に関する次のアからオまでの各記述のうち，正しい場合には１を，誤っている場合には２を選びなさい。
ア．検察官は，公訴を提起するに足りる犯罪の嫌疑が十分にあると思料するときは，必ず公訴を提起しなければならない。
イ．検察官は，第一審の判決があるまで，公訴を取り消すことができる。
ウ．検察官は，告訴のあった事件について，公訴を提起したときは，その旨を告訴人に通知する必要はない。
エ．共犯の１人に対してした公訴の提起による時効の停止は，他の共犯に対してその効力を有する。
オ．公訴事実は，数個の訴因を択一的に記載することは許されない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"21212"},{year:"2014",num:"29",subject:"kso",q:`次の【見解】は，公訴を提起された被告人は誰かを特定する基準に関するものである。後記アからエまでの【事例】のうち，この【見解】によれば甲を被告人として扱うことが可能なものは幾つあるか。後記１から５までのうちから選びなさい。
【見 解】
公訴を提起された被告人は誰かを特定する基準については，起訴状あるいは判決書の表示のみによってではなく，公訴を提起した検察官の意思や，現実に審理の過程において被告人として行動し，取り扱われた者が誰であるかも併せ考えて判定するのが相当である。
【事 例】
ア．窃盗事件の真犯人甲が，現行犯人として逮捕された際に，乙と名のった結果，被疑者欄に「乙」と記載された勾留状により勾留され，勾留中のまま，被告人欄に「乙」と記載された起訴状により地方裁判所に公訴を提起されたが，第１回公判期日の前に，甲が乙と名のっていたことが発覚した。
イ．窃盗事件の真犯人乙が，逮捕・勾留されていない状態で取調べを受け，被告人欄に「乙」と記載された起訴状により地方裁判所に公訴を提起された後，甲は，乙から依頼を受けてその身代わりとして第１回公判期日に出頭したが，人定質問の段階で，身代わりであることが発覚した。
ウ．窃盗事件の真犯人甲が，逮捕・勾留されていない状態で取調べを受けた際に，乙と名のった結果，被告人欄に「乙」と記載された起訴状により地方裁判所に公訴を提起された。同起訴状の謄本を受け取った甲が，第１回公判期日に出頭したが，冒頭手続が終了した後，甲が乙と名のっていたことが発覚した。
エ．窃盗事件の真犯人甲は，逮捕・勾留されていない状態であったことから，乙に身代わりとなることを依頼した。乙が，同事件の被疑者として取調べを受けた結果，被告人欄に「乙」と記載された起訴状により地方裁判所に公訴を提起された。同起訴状の謄本を受け取った乙が，第１回公判期日に出頭したが，同期日の審理が終了した段階で，身代わりであることが発覚した。`,c1:"１．０個",c2:"２．１個",c3:"３．２個",c4:"４．３個",c5:"５．４個",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2014",num:"30",subject:"kso",q:`次の【事例】に関する共同審理について述べた後記アからエまでの【記述】のうち，正しいものは幾つあるか。後記１から５までのうちから選びなさい。ただし，判例がある場合には，それに照らして考えるものとする。
【事 例】
被告人Ａと被告人Ｂは，共謀の上，Ａ方で覚せい剤を所持したとの覚せい剤取締法違反に係る公訴事実で起訴された。公判廷では，Ａは，Ｂと共に犯行に及んだことを認める旨の供述をしているが，Ｂは，自己の関与を否定する旨の供述をしている。検察官は，Ａ方から押収された覚せい剤，同覚せい剤の鑑定書，Ａ方の捜索差押調書等の証拠調べを請求している。
【記 述】
ア．本件では，被告人らの防御が互いに相反しているから，裁判所は，必ず弁論を分離しなければならない。
イ．前記覚せい剤の証拠調べ請求について，Ａの弁護人は「異議なし」との意見を述べ，Ｂの弁護人は「関連性なし」との意見を述べた場合，裁判所はＢとの関係でも同覚せい剤を証拠として採用し，取り調べることが許される。
ウ．Ａの弁護人だけでなく，Ｂの弁護人も，Ａに対し，その供述を求めるための質問をすることができる。
エ．Ｂについては，Ａの公判廷における自白を根拠に有罪とされることがあるが，Ａについては，Ｂとの共同所持の事実の補強証拠が取調べ請求されていないから，このままでは共同所持の事実で有罪とされることはない。`,c1:"１．０個",c2:"２．１個",c3:"３．２個",c4:"４．３個",c5:"５．４個",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2014",num:"31",subject:"kso",q:`弁護人の活動等に関する次の【事例】について述べた後記アからオまでの【記述】のうち，誤っているものの組合せは，後記１から５までのうちどれか。
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
オ．弁護人Ａは，下線部⑥の手紙を受領する以前に，控訴することができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2014",num:"32",subject:"kso",q:`次の【事例】における【Ａの証人尋問】に関して述べた後記アからオまでの【記述】のうち，正しいものの組合せは，後記１から５までのうちどれか。
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
オ．検察官が，Ａの前記検察官調書を刑事訴訟法第３２１条第１項第２号に基づき証拠調べ請求した場合，前記検察官調書は，公判でのＡの証言よりも検察官の取調べにおける供述を信用すべき特別の情況が存しなければ，証拠能力を有しない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2014",num:"33",subject:"kso",q:`次のⅠからⅢまでの【見解】は，刑事訴訟法第３２６条の同意（以下「同意」という。）の性質に関する考え方を述べたものである。これらの【見解】について述べた後記アからオまでの【記述】のうち，正しいものの組合せは，後記１から５までのうちどれか。
【見 解】
Ⅰ．同意は，公判において供述者に対し反対尋問を行う権利を放棄することである。
Ⅱ．同意は，公判において証拠能力を付与する訴訟行為である。
Ⅲ．同意は，原供述時において供述者に対し反対尋問を行うことができなかったこと，あるいは原供述時において裁判所が供述者の供述態度を観察することができなかったことについて，責問権を放棄することである。
【記 述】
ア．Ⅰの見解に対しては，検察官が請求した被告人以外の者の供述調書について，被告人側がこれを同意した上で，その証明力を争うために供述者の証人尋問を請求することができないことになるという批判がある。
イ．Ⅰの見解に対しては，捜索差押手続が違法であっても，同意をすれば，同手続の捜索差押調書は証拠能力を有することになるという批判がある。
ウ．Ⅱの見解に対しては，伝聞法則を反対尋問権の保障の観点からしか理解しておらず，裁判所による供述態度の観察という直接主義の観点が欠落しているという批判がある。
エ．Ⅱの見解に対しては，同意の性質が伝聞証拠が排除される趣旨と関連しなくなり，刑事訴訟法第３２６条が同法第３２０条第１項で排除される伝聞証拠について証拠能力を認める規定となっていることとそぐわないという批判がある。
オ．Ⅲの見解に対しては，刑事訴訟法第３２６条第１項が被告人の供述調書についても規定していることを説明できないという批判がある。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2014",num:"34",subject:"kso",q:`次の学生ＡないしＤの【会話】は，脅迫事件の被害者が脅迫を受けている現場の音声を録音した録音テープを，犯行時の状況を立証するために用いる場合の証拠能力について議論するものである。証拠とすることの同意（刑事訴訟法第３２６条）がない限り，同法第３２１条第３項の要件を満たさなければならないとする見解からの発言をする学生の人数は，後記１から５までのうちどれか。
【会 話】
学生Ａ．この場合の録音テープは，犯罪が行われた現場の状況を録音したもので，現場の状況を音声の面から，つまり聴覚の面から明らかにするというものですよね。
学生Ｂ．その意味では，聴覚と視覚という違いはあるけれど，証拠能力については，現場の状況を視覚の面から明らかにする現場写真と同じように考えていいんじゃないかな。僕は，写真は機械的方法によって現場の状況をそのまま記録するもので，そこに供述の要素は含まれないし，録音でも音声を記録する上での機械的正確さは保障されていると思うね。
学生Ｃ．私は，録音の過程で，録音機器を操作したり，記録された情報を編集したりするというような作為が介在する点を重視すべきだと思います。
学生Ｄ．録音の過程での人の作為による誤りと，人の知覚・記憶・表現に伴う誤りとは，本質的に違うものですよ。
学生Ａ．私は，現場写真にせよ，現場録音の録音テープにせよ，現場の状況を報告するために人の手によって作成されるものであるという性質を持つことを考えるべきだと思います。そうすると，録音テープの作成者が，公判廷で録音テープが真正に作成されたものであることを供述することが，録音テープの証拠能力を認める要件として必要になります。
学生Ｂ．録音テープの作成過程について，現場の状況が正確に録音されているかどうかなどを確認するには，録音をした者の証人尋問をするのが一番有効だろうね。でも，僕の立場からすると，証拠能力の要件は関連性で足りるので，録音者の証人尋問が絶対に必要とまではならないな。
学生Ｃ．私は，録音機器の操作や録音後の編集などによる誤りの危険性があるから，録音者に対する反対尋問による確認がなされることが，必要不可欠だと考えます。
学生Ｄ．それじゃあ，現場の状況が録音されているのが明らかなのに，録音者が誰か分からないときには，問題なんじゃないですか。そもそもＣさんが言っているのは，証拠能力の問題なのかな。`,c1:"１．０人",c2:"２．１人",c3:"３．２人",c4:"４．３人",c5:"５．４人",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2014",num:"35",subject:"kso",q:`被害者参加に関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。
ア．業務上過失致傷の罪の被害者は，同罪に係る被告事件の手続への参加を申し出ることができない。
イ．被害者参加人は，公判前整理手続期日に出席することができる。
ウ．被害者参加人による証人の尋問が許される事項は，情状に関する事項（犯罪事実に関するものを除く。）についての証人の供述の証明力を争うために必要な事項に限られる。
エ．被害者参加人による被告人に対する質問は，刑事訴訟法の規定による意見の陳述をするために必要があると認められる事項に限って許される。
オ．被害者参加人による事実又は法律の適用についての意見は，犯罪事実の認定のための証拠とすることはできないが，刑の量定のための証拠とすることは許される。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2014",num:"36",subject:"kso",q:`地方裁判所における第一審の判決宣告後の勾留に関する次のアからオまでの各記述のうち，正しい場合には１を，誤っている場合には２を選びなさい。
ア．詐欺被告事件で勾留中の被告人につき懲役３年，執行猶予５年の有罪判決が宣告された場合，その判決が確定するまでは，被告人は引き続き勾留される。
イ．業務上横領被告事件で保釈中の被告人につき懲役４年の実刑の有罪判決が宣告された場合，その判決が確定するまでは，被告人の保釈は効力を失わない。
ウ．強盗被告事件で勾留中の被告人につき無罪判決が宣告された場合，その判決が確定するまでは，被告人は引き続き勾留される。
エ．道路交通法違反被告事件で勾留中の被告人につき懲役６月の実刑の有罪判決が宣告された場合，被告人には権利保釈（必要的保釈）の規定の適用はない。
オ．傷害被告事件で勾留中の被告人につき懲役２年の実刑の有罪判決が宣告された後，宣告した裁判所のした被告人の保釈請求を却下する決定に対しては，被告人は高等裁判所に抗告をすることができる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"22211"},{year:"2014",num:"37",subject:"kso",q:`　次のⅠ及びⅡの【見解】は，公判前整理手続において刑事訴訟法第３１６条の１５により証拠開示の対象となる証拠の類型として，「被告人以外の者の供述録取書等であって，検察官が特定の検察官請求証拠により直接証明しようとする事実の有無に関する供述を内容とするもの」を掲げる同条第１項第６号の解釈に関するものである。
　「参考人から『・・・』旨聴き取った。」との捜査官の聴取捜査報告書（以下「本件捜査報告書」という。）が存在し，参考人の「・・・」という供述が「検察官が特定の検察官請求証拠により直接証明しようとする事実の有無に関する」内容のものである場合，この本件捜査報告書が前記の証拠の類型（以下「６号の証拠の類型」という。）に該当するかどうかについて述べた後記アからオまでの【記述】のうち，正しいものの組合せは，後記１から５までのうちどれか。ただし，「供述録取書等」とは，「供述書，供述を録取した書面で供述者の署名若しくは押印のあるもの・・・」（同法第３１６条の１４第２号）をいう。
【見 解】
Ⅰ．「検察官が特定の検察官請求証拠により直接証明しようとする事実の有無に関する供述」は，供述者が直接体験した事実に関する供述に限る。
Ⅱ．「検察官が特定の検察官請求証拠により直接証明しようとする事実の有無に関する供述」には，供述者が直接体験した事実に関する供述のほか，供述者が他者から伝聞した供述も含む。
【記 述】
ア．本件捜査報告書について，参考人の供述を録取した供述録取書であるとの見方に立ち，Ⅰの【見解】を採るならば，同報告書は，「検察官請求証拠により直接証明しようとする事実の有無に関する供述を内容とするもの」といえるが，参考人の署名若しくは押印がない場合には「供述録取書等」に当たらないので，６号の証拠の類型に該当しない。
イ．本件捜査報告書について，参考人の供述を録取した供述録取書であるとの見方に立ち，Ⅰの【見解】を採るならば，同報告書は，「検察官請求証拠により直接証明しようとする事実の有無に関する供述を内容とするもの」といえ，捜査官の署名若しくは押印がある場合には「供述録取書等」に当たるので，６号の証拠の類型に該当する。
ウ．本件捜査報告書について，参考人の供述を聴き取った捜査官の供述書であるとの見方に立ち，Ⅰの【見解】を採るならば，同報告書は，「検察官請求証拠により直接証明しようとする事実の有無に関する供述を内容とするもの」といえ，捜査官の供述書として「供述録取書等」に当たるから，６号の証拠の類型に該当する。
エ．本件捜査報告書について，参考人の供述を録取した供述録取書であるとの見方に立ち，Ⅱの【見解】を採るならば，同報告書は，「検察官請求証拠により直接証明しようとする事実の有無に関する供述を内容とするもの」といえず，参考人の署名若しくは押印がない場合には「供述録取書等」にも当たらないので，６号の証拠の類型に該当しない。
オ．本件捜査報告書について，参考人の供述を聴き取った捜査官の供述書であるとの見方に立ち，Ⅱの【見解】を採るならば，同報告書は，「検察官請求証拠により直接証明しようとする事実の有無に関する供述を内容とするもの」といえ，捜査官の供述書として「供述録取書等」に当たるから，６号の証拠の類型に該当する。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2014",num:"38",subject:"kso",q:`保釈に関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。
ア．保釈の請求をすることができるのは，勾留されている被告人及びその弁護人のみである。
イ．被疑者の国選弁護人は，公訴の提起後に改めて第一審の弁護人として選任されない限り，保釈の請求をすることができない。
ウ．裁判所は，第一審の公判審理中に保釈の請求があったときは，刑事訴訟法第８９条各号所定の事由がある場合を除いて，保釈を許さなければならない。
エ．裁判所は，保釈の請求がない場合又は刑事訴訟法第８９条各号所定の事由がある場合でも，適当と認めるときは職権で保釈を許すことができる。
オ．公訴の提起があった後，第１回公判期日までの保釈に関する裁判は，公訴の提起を受けた裁判所の事件の審判に関与すべき裁判官のみが行う。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2014",num:"39",subject:"kso",q:`外国人（日本国籍を有さず，かつ日本語に通じない者をいう。以下同じ。）の刑事手続に関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。ただし，判例がある場合には，それに照らして考えるものとする。
ア．司法警察員がその所持する逮捕状により外国人である被疑者を逮捕する場合，同被疑者に逮捕状を示さなくても違法ではない。
イ．外国人である被疑者を通訳を介して取り調べる場合，その供述録取書を日本語で作成しても違法ではない。
ウ．外国人である被告人の公判において，検察官及び弁護人に異議がなく，裁判所が許可すれば，同被告人の理解する外国語で公判手続を進めても違法ではない。
エ．外国人である被告人が日本に適法に在留する資格を有しない場合でも，同被告人の保釈を許すことは違法ではない。
オ．外国人である被告人の公判において，判決の言渡しに限っては，通訳を付さずにしても違法ではない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2014",num:"40",subject:"kso",q:`刑事事件の上告審に関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。
ア．高等裁判所がした第一審又は第二審の判決に対しては，憲法の違反があること，憲法の解釈に誤りがあること又は最高裁判所の判例と相反する判断をしたことだけではなく，判決に影響を及ぼすべき重大な事実の誤認があることも，適法な上告理由となる。
イ．高等裁判所が上告審として裁判権を有する場合がある。
ウ．上告審は純粋な法律審であるから，事実の取調べを行うことはできない。
エ．上告裁判所は，判決に影響を及ぼすべき法令の違反があって，原判決を破棄しなければ著しく正義に反すると認めるときは，判決で原判決を破棄することができる。
オ．上告裁判所は，第二審の判決が最高裁判所の判例と相反する判断をした場合において，その判例を変更して原判決を維持するのを相当とするときは，これを破棄しなくともよい。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2013",num:"1",subject:"ken",q:`外国人の人権に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．外国人の政治活動の自由は，我が国の政治的意思決定に影響を及ぼす活動であっても，憲法上保障される。
イ．我が国に在留する外国人には，居住する地方公共団体の長及びその議会の議員に対する選挙権が憲法上保障されていない。
ウ．社会保障の施策において外国人をどのように処遇するかについては，憲法上立法府の裁量に委ねられている。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"211"},{year:"2013",num:"2",subject:"ken",q:`人権保障規定の私人間効力に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．間接効力説は，私人による人権侵害の危険性が増大していることに対応しようとするものであるが，国家権力がなお人権にとっての最大の脅威であることを無視している。
イ．間接効力説は，私法の一般条項に人権価値を充塡しようとするものであるから，充塡の程度により結論が大きく異なり得る。
ウ．直接効力説は，私人間に憲法規範を直接適用するものであるが，国家が私人の自由な活動領域に過度に介入する糸口を与えかねない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"5"},{year:"2013",num:"3",subject:"ken",q:`憲法の明文で規定されていない権利・自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．国民の私生活上の自由は国家権力の行使に対して保護されるべきであるが，指紋は個人の私生活や内心に関する情報ではないので，何人もみだりに指紋の押なつを強制されない自由を有するとまではいえない。
イ．何人も，その承諾なしに，みだりにその容ぼう・姿態を撮影されない自由を有するから，犯罪捜査の必要上，本人の同意や令状がなくとも，警察官が犯人の容ぼう等を撮影することは一定の要件の下で許されるものの，その際に第三者が写らないようにしなければならない。
ウ．住民基本台帳ネットワークシステムにより行政機関が住民の本人確認情報を収集，管理又は利用する行為は，当該住民がこれに同意していなくとも，個人に関する情報をみだりに第三者に開示又は公表されない自由を侵害するものではない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2013",num:"4",subject:"ken",q:`憲法第１４条に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法第１４条第１項は，実質的平等も要請しているから，公務員における女性の比率が低い場合には，国は女性を優先的に公務員に採用するよう憲法上義務付けられる。
イ．憲法第１４条第２項は，明治憲法下における華族制度と類似の制度が復活することを禁止しているから，特権を伴う世襲の身分を法律で新たに設けることは許されない。
ウ．憲法第１４条第３項は，栄典の授与に伴う特権を禁止しているから，社会の様々な領域で功労のあった者に勲章を授ける際に経済的利益を付与することは違憲となる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"212"},{year:"2013",num:"5",subject:"ken",q:`憲法第１９条の保障する思想・良心の自由に関する次のアからウまでの各記述について，bの見解がaの見解の批判となっている場合には１を，そうでない場合には２を選びなさい。
ア．ａ．思想・良心の意味は，人の内心における物の見方ないし考え方であり，事物に対する是非弁別を含む内心一般と捉えるべきである。
ｂ．思想・良心の自由が保障される範囲を広範に捉えることは，その高い価値を低下させ，むしろ，その自由の保障を弱めるものである。
イ．ａ．思想・良心の意味は，人生観，世界観，思想体系，政治的意見などのように人格形成に関連のある内心の活動と捉えるべきである。
ｂ．憲法第１９条は，「思想」と「良心」を併記し，同等にその自由を保障しているのであるから，「思想」と「良心」の概念を区別する必要はない。
ウ．ａ．思想・良心の自由のうち，良心の自由については，信教の自由，とりわけ信仰選択の自由ないし信仰の自由と同じ意味に捉えるべきである。
ｂ．欧米諸国では良心の自由と信教の自由が不可分とされてきた歴史もあるが，日本国憲法は第２０条で信教の自由を保障しており，あえて良心の自由を限定的に解する必要はない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"121"},{year:"2013",num:"6",subject:"ken",q:`表現の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．公務員としての行動に関する批判的論評が公務員の社会的評価を低下させる場合でも，その論評が専ら公益目的でなされ，かつ前提たる事実が主要な点において真実であることの証明があれば，論評としての域を逸脱していない限り，名誉毀損の不法行為は成立しない。
イ．新聞記事において批判を加えられた者が，名誉毀損の不法行為の成否にかかわらず，無料で反論文の掲載を当該新聞に求める権利については，公的事項に関する批判的記事の掲載をちゅうちょさせるおそれがあるので，具体的な法律がない場合には，これを認めることはできない。
ウ．憲法の禁ずる検閲とは，公権力が主体となって，表現物を対象とし，その全部又は一部の発表の禁止を目的として，表現物につき網羅的一般的に，発表前にその内容を審査した上で不適当と認めるものの発表を禁止することを，その特質として備えるものをいう。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"112"},{year:"2013",num:"7",subject:"ken",q:`憲法第２３条の保障する学問の自由に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．学問研究は，真理の探究を目的とするので，それが大学で行われる限り，研究テーマについても，研究を遂行する手段・方法についても，制約されない。
イ．国や地方公共団体が研究助成を行う場合に，応募者の研究内容やこれまでの研究成果への評価に基づいて助成金の額に差異を設けることは，憲法第２３条に違反しない。
ウ．大学の自治の保障は，大学の施設や学生の管理に関する自主的な秩序維持の権能には及ぶが，大学の教授その他の研究者の人事に関する自主的な決定権には及ばない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"6"},{year:"2013",num:"8",subject:"ken",q:`居住・移転の自由の複合的性格に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．居住・移転の自由は，歴史的には，職業選択の自由の当然の前提として自由に住所を定め，他の場所に移動することを認めたところに由来するものである。
イ．居住・移転の自由は，非人道的な自由の拘束状態からの解放を企図する人身の自由の要素を併せ持つものではない。
ウ．居住・移転の自由の保障は，広く知的な接触の機会を得るためにも不可欠であるので，精神的自由の要素も併せ持っている。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"3"},{year:"2013",num:"9",subject:"ken",q:`財産権の保障に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法は，私有財産制と具体的な財産上の権利をともに保障しており，後者には所有権などの物権のほか債権や知的財産権などが含まれる。
イ．財産権の内容は必ず法律によって定めなければならないが，財産権の制約は法律によらずに，政令によることも許される。
ウ．財産権が公務員の故意又は過失による違法な行為によって侵害されたとき，被害者は国又は地方公共団体に対し損失補償を請求できる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"4"},{year:"2013",num:"10",subject:"ken",q:`教育を受ける権利に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法第２６条の規定の背後には，特に，自ら学習することのできない子どもは，その学習要求を充足するために，教育を自己に施すことを大人一般に対して要求する権利を有するという観念が存在する。
イ．教育の具体的方法や内容に関して教師に認められるべき裁量には，おのずから制約がある。自分の考えと異なるとして教科書を使用しないで授業を行ったり，全員に一律の成績評価を行ったりすることは，教師の裁量の範囲内とはいえない。
ウ．憲法は，義務教育の無償を規定している。そこで無償とすることが求められているのは，授業料と教科書代のみであり，文房具代や給食費等就学に必要な一切の費用まで意味するものではない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2013",num:"11",subject:"ken",q:`憲法第３１条が行政手続にも適用されるべきかどうかについて，同条が行政手続にも適用されると解する説，同条が行政手続にも準用あるいは類推適用されると解する説，同条が行政手続には適用されないと解する説がある。これらの見解に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．適用説は，憲法第３１条が要求する適正さが行政手続にも及ぶべきであると説きつつも，その程度は行政作用の性質に応じて異なり得るとする。
イ．準用あるいは類推適用説は，適正手続が求められるのは身体の自由を奪うような刑事手続に準ずる行政処分に限られるとする。
ウ．不適用説は，行政手続の適正さについて，憲法第３１条からはその文言上これを導き出すことはできないが，憲法第１３条など他の規定から導くことは可能であるとする。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"121"},{year:"2013",num:"12",subject:"ken",q:`憲法前文に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．前文は，日本国憲法という法典名の後に置かれているばかりでなく，その内容が憲法制定の目的や憲法の基本原理を含んでいることから，その法的規範性が是認される。
イ．前文は，法律の場合と同じ手続で改正することができるが，前文に抵触する下位規範は，憲法第９８条第１項からして，理論上排除されることになる。
ウ．前文第２段は，「平和のうちに生存する権利」を謳っており，最高裁判所はその裁判規範性を認めている。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"122"},{year:"2013",num:"13",subject:"ken",q:`主権に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８の中から選びなさい。
ア．憲法前文第３段で「自国の主権を維持し」という場合の主権は，対外的な独立性に重点を置いた意味で使われている。
イ．憲法第１条で「主権の存する日本国民の総意」という場合の主権は，国の政治のあり方を最終的に決定する権力又は権威を意味する。
ウ．憲法第９６条第１項の規定する憲法改正手続における国民投票は，国民主権の権力的な契機の表れといえる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"1"},{year:"2013",num:"14",subject:"ken",q:`天皇に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．内閣が総辞職した後に，国会により新たな内閣総理大臣が指名された場合，この新たな内閣総理大臣の任命は，総辞職した内閣の助言と承認により天皇が行うことになる。
イ．天皇も日本国民であることから基本的人権は保障されており，例えば表現の自由や選挙権は保障されるものの，その職務の特殊性から一定の例外があり，例えば被選挙権は認められない。
ウ．内閣の助言と承認は国事行為の実質的決定権を含まないとの立場からは，憲法第６９条の規定する場合以外の衆議院解散の実質的決定権の根拠を，憲法第７条以外に求めざるを得ない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"121"},{year:"2013",num:"15",subject:"ken",q:`政党に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．政党国家とは，政党が国の政治的意思形成過程に重要な役割を果たすようになった現象をいうが，そのような現象は，政党が広く国民と議会を媒介する組織として発達した段階に生じた。
イ．政治過程の腐敗・わい曲を防止し，民主政治の健全な発展を図るため，政党の活動資金の適切性・透明性が確保されるよう法律で規律しても，憲法に抵触することにはならない。
ウ．政党に対する公的助成を行う場合には，法律により，政党の役員・党員等の名簿，活動計画書を提出させた上で政党の設立を許可する制度を設けても，違憲とはならない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2013",num:"16",subject:"ken",q:`国会の運営・活動の原則と例外に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．両議院の会議は公開が原則であり，本会議については傍聴が認められているほか，その記録は公表され，かつ一般に頒布されなければならない。ただし，出席議員の３分の２以上の多数で議決したときは秘密会を開くことができる。
イ．両議院は，それぞれ独立して活動し，独立して意思決定を行うのが原則である。ただし，両議院の議決が異なった場合に必要的又は任意的に開かれる両院協議会は，各議院において選挙された委員によって構成される。
ウ．衆議院が解散されると参議院は同時に閉会となり，国会は機能を停止するのが原則であるが，その例外が参議院の緊急集会である。ただし，そこで採られた措置は，次の国会開会の後１０日以内に衆議院の同意が得られない場合，遡って効力を失う。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"112"},{year:"2013",num:"17",subject:"ken",q:`内閣に関する次のアからウまでの各記述について，正しいものには○を，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．日本国憲法は，国会による内閣総理大臣の指名，内閣の国会に対する連帯責任のほか，衆議院の内閣不信任決議権や衆議院の解散などを定めていることから，議院内閣制を採用していると解される。
イ．国務大臣については，内閣総理大臣が必ず国会議員の中から指名されなければならないのとは異なり，国会議員以外の者を任命することもできるが，その過半数は衆議院議員の中から選ばなければならない。
ウ．衆議院が内閣不信任を決議した場合でも，内閣がこれに対抗して衆議院の解散に踏み切り，その後の総選挙で内閣を支持する与党が過半数の議席を獲得した場合には，内閣は総辞職するか否か自ら決することができる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"4"},{year:"2013",num:"18",subject:"ken",q:`司法権に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．裁判官の罷免に関し弾劾裁判所の裁判の結果に不服がある場合に，最高裁判所に訴えることができるとする法律を制定することは憲法に違反しない。
イ．行政機関の認定した事実はこれを立証する実質的証拠があるときには裁判所を拘束すると定めた法律は，その実質的証拠の有無は裁判所が判断するとの規定があっても憲法に違反する。
ウ．特定の種類の事件だけを扱う裁判所を設置しても，その裁判所の裁判の結果に不服がある場合に，最高裁判所に上訴できるのであれば憲法に違反しない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"221"},{year:"2013",num:"19",subject:"ken",q:`人権制約立法の合憲性審査に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．判例は，精神的自由に対する制約の合憲性を経済的自由に対する制約の合憲性より厳しく審査すべきであるという二重の基準論を採用し，表現活動に対する制約については，表現内容に基づく制約だけでなく，間接的・付随的制約の合憲性についても厳格な審査を及ぼしている。
イ．二重の基準論の一つの根拠として，精神的自由への制約の場合は，民主政の過程自体がゆがめられるから裁判所の積極的な審査が要請されるが，経済的自由への制約の場合は，裁判所は民主的手続の中でなされた立法者の判断の合理性を尊重すべきである，ということが挙げられる。
ウ．裁判所は，合憲性審査に当たり人権制約立法の根拠となる立法事実の存否を審査する必要があるが，その際立法事実についての立法者の判断をどの程度尊重すべきかという問題は，いかなる基準で合憲性を判断するかの問題とは無関係である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"212"},{year:"2013",num:"20",subject:"ken",q:`憲法の最高法規性に関する次のアからウまでの各記述について，正しいものには○を，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法が最高法規であることからすれば，立法その他の国家行為が憲法に反するか否かを判断する権限が司法府に与えられていなければならない。
イ．憲法は授権するのみで授権されることはないため，実定法秩序における法の段階構造を前提にすれば，憲法の最高規範性が導き出される。
ウ．憲法の最高法規性は憲法規範の内容が他の法規範とは質的に異なることから導かれるが，このような意味における最高法規性が一般に実質的最高法規性と呼ばれている。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"5"},{year:"2013",num:"21",subject:"gyo",q:`行政活動と民事法の関係に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．市長Ａが，Ｂ市を代表するとともに相手方Ｃを代理して契約を締結した事例において，最高裁判所の判例によれば，当該契約の締結には双方代理に関する民法第１０８条が類推適用されるが，Ｂ市の議会が双方代理の事情を認識した上でＡによる双方代理行為について追認した場合には，議会の意思に沿ってＢ市にその法律効果は帰属する。
イ．ＤがＥの経営する飲食店においてランチを注文し，Ｄが食事を終えた事例において，Ｅが食品衛生法第５２条第１項に基づく飲食店営業許可を得ていない場合には，無許可営業は原則として当該営業上締結された契約の無効事由となるため，ＤはＥからの飲食代金の支払請求に対し支払を拒否することができる。
（参照条文）食品衛生法
第５１条 都道府県は，飲食店営業その他公衆衛生に与える影響が著しい営業（中略）であつて，政令で定めるものの施設につき，条例で，業種別に，公衆衛生の見地から必要な基準を定めなければならない。
第５２条 前条に規定する営業を営もうとする者は，厚生労働省令で定めるところにより，都道府県知事の許可を受けなければならない。
２，３ （略）
ウ ． 産業廃棄物処理業者Ｆが廃棄物の処理及び清掃に関する法律に基づく産業廃棄物処理施設（以下「施設」という。）の設置許可を県知事Ｇから受けた事例において，施設周辺に居住するＨが施設の操業により健康被害のおそれが生ずることを主張して，施設の操業を差し止めようとする場合には，Ｈは，施設設置許可の取消訴訟を提起することなく，人格権に基づきＦを被告として操業の差止めを求める民事訴訟を適法に提起することができる。
エ．公共用財産である水路が，長年の間事実上公の目的に供用されることなく放置され，公共用財産としての形態，機能を全く喪失した事例において，Ｉが当該水路の土地（以下「本件土地」という。）を２０年以上にわたり水田として利用し，平穏かつ公然と占有を続けてきた場合には，最高裁判所の判例によれば，本件土地について取得時効が成立するが，公用廃止決定がなされていないことから，Ｉが取得できるのは公用制限を伴う本件土地所有権である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1212"},{year:"2013",num:"22",subject:"gyo",q:`建築基準法第６条第１項の定める建築確認及び同法第９条第１項の定める違反是正命令に関し，次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
（参照条文）建築基準法
第６条 建築主は，（中略）建築物を建築しようとする場合（中略）においては，当該工事に着手する前に，その計画が建築基準関係規定（この法律並びにこれに基づく命令及び条例の規定（以下「建築基準法令の規定」という。）その他建築物の敷地，構造又は建築設備に関する法律並びにこれに基づく命令及び条例の規定で政令で定めるものをいう。以下同じ。）に適合するものであることについて，確認の申請書を提出して建築主事の確認を受け，確認済証の交付を受けなければならない。（以下略）
２～１３ （略）
１４ 第１項の確認済証の交付を受けた後でなければ，同項の建築物の建築（中略）の工事は，することができない。
１５ （略）
第９条 特定行政庁は，建築基準法令の規定又はこの法律の規定に基づく許可に付した条件に違反した建築物又は建築物の敷地については，当該建築物の建築主（中略）に対して，当該工事の施工の停止を命じ，又は，相当の猶予期限を付けて，当該建築物の除却，移転，改築，増築，修繕，模様替，使用禁止，使用制限その他これらの規定又は条件に対する違反を是正するために必要な措置をとることを命ずることができる。
２～１５ （略）
第９９条 次の各号のいずれかに該当する者は，１年以下の懲役又は１００万円以下の罰金に処する。
一 第６条第１項（中略）の規定に違反した者
二～十三 （略）
２ （略）
ア．建築主事は，建築主と建築に反対する近隣住民とが一定期間協議することを停止条件として建築確認を行うことができる。
イ．建築確認を受けて建築された建築物について，特定行政庁は，建築確認が取り消され又は無効である場合でなくても，建築物が建築基準法令の規定に違反することを理由に，違反是正命令を行うことができる。
ウ．建築確認を受けて建築された建築物について，近隣住民は，建築確認の取消訴訟又は無効確認訴訟を併合提起しなくても，違反是正命令の義務付け訴訟を適法に提起することができる。
エ．建築確認を受けずに建築を行っても，当該建築物及びその敷地が建築基準関係規定に適合していれば，建築基準法第９９条第１項第１号の定める刑罰を科されない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2112"},{year:"2013",num:"23",subject:"gyo",q:`行政行為の取消し又は撤回に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．行政行為が名宛人にとって利益なものであったときには，当該行政行為を行った行政庁自身が後にこれが当初から違法であったと認識したとしても，取消しを認める旨の明文の規定がない限り，職権をもって当該行政行為を取り消すことはできない。
イ．行政庁が適法に行った行政行為をその後の事情の変化に伴い将来に向かって撤回することができるのは，当該行政行為を行う権限のある行政庁に限られるから，たとえ指揮監督権を有する上級行政庁であっても，当該行政行為の撤回をすることはできない。
ウ．行政庁が適法に行った行政行為をその後の事情の変化に伴い将来に向かって撤回することが許されたとしても，撤回に伴う財産的損害の補償が当然に不要となるとは限らない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"5"},{year:"2013",num:"24",subject:"gyo",q:`行政手続法第１４条第１項本文は，不利益処分をする場合には同時にその理由を名宛人に示さなければならない旨を定めているが，次のアからウまでの各記述について，同項の理由の提示に関する最高裁判所平成２３年６月７日第三小法廷判決（民集６５巻４号２０８１頁）の多数意見の判示内容として，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．行政手続法第１４条第１項本文が理由の提示を要求しているのは，不利益処分の性質に鑑み，行政庁の判断の慎重と合理性を担保してその恣意を抑制するとともに，処分の理由を名宛人に知らせて不服の申立てに便宜を与える趣旨に出たものである。
イ．建築士法による一級建築士に対する懲戒処分の場合，処分基準が定められているとしても，行政手続法第１４条第１項本文が理由の提示を要求している趣旨は，当該処分の根拠である建築士法の法条及びその法条の要件に該当する具体的な事実関係が明らかにされることで十分に達成できるというべきであり，更に進んで，処分基準の内容及び適用関係についてまで明らかにすることを要するものではない。
ウ．建築士法による一級建築士に対する懲戒処分について，公にされている処分基準は，複数の懲戒処分の中から処分内容を選択するための基準として，多様な事例に対応すべくかなり複雑な内容を定めていたのであり，処分の原因となる事実と処分の根拠法条とが示されているだけでは，いかなる理由に基づいてどのような処分基準の適用によって当該処分が選択されたのかを知ることはできないから，処分基準の適用関係が全く示されていない理由提示は，行政手続法第１４条第１項本文の要求する理由提示としては十分でない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"3"},{year:"2013",num:"25",subject:"gyo",q:`行政庁が免許業者に対して不利益処分を行う場合の聴聞手続及び弁明手続に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．弁明は，書面を提出して行うことが原則であるが，行政庁が認める場合には，口頭で行うことができる。
イ．行政庁は，免許取消のための聴聞手続の進行中に免許停止処分とすることが妥当であると判断した場合であっても，免許停止処分を行うことはできず，改めて弁明手続を執ることが必要となる。
ウ．行政庁は，免許停止のための弁明手続の進行中に免許取消処分とすることが妥当であると判断した場合であっても，免許取消処分を行うことはできず，改めて聴聞手続を執ることが必要となる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"3"},{year:"2013",num:"26",subject:"gyo",q:`行政裁量に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．外国人の在留期間の更新の許可に関する法務大臣の「在留期間の更新を適当と認めるに足りる相当の理由」があるかどうかの判断に関し，「法務大臣の裁量権の性質にかんがみ，その判断が全く事実の基礎を欠き又は社会通念上著しく妥当性を欠くことが明らかである場合に限り，裁量権の範囲をこえ又はその濫用があったものとして違法となる」とした最高裁判所の判決は，効果裁量を承認する趣旨であると解されている。
（参照条文）出入国管理及び難民認定法
第２１条 本邦に在留する外国人は，現に有する在留資格を変更することなく，在留期間の更新を受けることができる。
２ 前項の規定により在留期間の更新を受けようとする外国人は，法務省令で定める手続により，法務大臣に対し在留期間の更新を申請しなければならない。
３ 前項の規定による申請があつた場合には，法務大臣は，当該外国人が提出した文書により在留期間の更新を適当と認めるに足りる相当の理由があるときに限り，これを許可することができる。
４ （略）
イ．学校施設の目的外使用許可に関し，「本件中学校及びその周辺の学校や地域に混乱を招き，児童生徒に教育上悪影響を与え，学校教育に支障を来すことが予想されるとの理由で行われた本件不許可処分は，重視すべきでない考慮要素を重視するなど，考慮した事項に対する評価が明らかに合理性を欠いており，他方，当然考慮すべき事項を十分考慮しておらず，その結果，社会通念に照らし著しく妥当性を欠いたものということができる」とした最高裁判所の判決は，学校施設の目的外使用許可の判断が管理者の裁量に委ねられることを前提として，裁量処分をする際の考慮事項に着目した司法審査の在り方を示したものといえる。
ウ．公務員の懲戒処分に関し，裁判所が当該処分の適否を審査するに当たっては，「懲戒権者の裁量権の行使に基づく処分が社会観念上著しく妥当を欠き，裁量権を濫用したと認められる場合に限り違法であると判断すべきものである」とした最高裁判所の判決は，裁判所が行政庁と同一の立場に立ってした判断と行政庁がした判断との間に食い違いがあれば行政庁の判断を違法と判定する方法を採ったものといえる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"6"},{year:"2013",num:"27",subject:"gyo",q:`Ｘがマンションを建築するために，甲市の建築主事Ａに対して建築確認を申請したところ，Ｘの建築計画に反対する付近住民とＸとの間で紛争が発生した。甲市においては，建築紛争が発生した場合は常に建築確認を留保して建築主に話合いを通じた紛争の解決を図るよう建築課職員（以下「職員」という。）において指導する運用を続けてきた。そこで，職員は，Ｘの建築計画が建築基準関係諸規定に適合しているとの審査を終了した後も，Ｘに対して，付近住民との話合いにより紛争を解決するよう口頭で指導した。Ｘは付近住民との間で４か月以上にわたり話合いの機会を１０回以上持ったが，紛争解決には至らなかった。Ｘの建築確認申請から６か月後に，Ｘと付近住民との合意成立を受けて，Ａはようやく建築確認をした。次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。なお，解答に当たっては，甲市では行政手続条例が制定され，行政手続法第４章行政指導と同じ内容の規定が設けられていることを前提としなさい。
ア．最高裁判所の判例によれば，規制的行政指導には根拠規範が原則として必要とされるが，職員は建築基準法における建築確認の根拠規定に基づき，Ｘに対して付近住民との話合いを指導することができる。
イ．建築確認を留保して行う行政指導については，その指針があらかじめ定められなければならず，行政上の支障がない限り，当該指針は公表されなければならない。
ウ．付近住民との話合いを求める行政指導の趣旨及び内容並びに責任者を記載した書面の交付をＸから求められた場合には，職員は行政上の支障がない限り，これを交付しなければならない。
エ．職員が紛争の解決のための話合いをＸに対して求める行政指導は，事実行為であって法的拘束力を有しないことから，Ｘは，当該指導が行われていることを理由に建築確認が遅延させられたのは違法であると主張して，国家賠償法第１条第１項に基づき損害賠償を請求することはできない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2112"},{year:"2013",num:"28",subject:"gyo",q:`Ａ市は，コンビニエンスストアを経営する株式会社Ｂ社との間で，住民に対する住民票の写しの交付を委託する契約（以下「本件契約」という。）を締結した。Ａ市は，Ａ市個人情報保護条例（以下「本件条例」という。）第１０条において，「市は，個人情報の取扱いを伴う事務又は事業を委託するときは，当該契約において，個人情報の適切な取扱いについて受託者が講ずべき措置を明らかにしなければならない」旨を定めている。本件契約及び本件条例に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．本件契約により，Ａ市長は住民に対し住民票の写しを交付する権限の一部をＢ社に委任したことになる。
イ．本件契約には，Ｂ社が個人情報の保護措置を講じているかをＡ市が確認する必要がある場合に，Ｂ社はＡ市の職員によるＢ社の作業所の検査に協力しなければならない旨を定めることができる。
ウ．Ａ市は，本件条例第１０条にいう受託者が個人情報の保護措置を定める契約の条項に違反した場合には刑罰を科される旨を，本件条例中に定めることができる。
エ．Ａ市は，本件条例第１０条にいう受託者が個人情報の保護措置を適切に講じていない場合にはＡ市長が受託者に対し行政処分として是正命令をなし得る旨を，本件条例中に定めることができる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2121"},{year:"2013",num:"29",subject:"gyo",q:`行政機関の保有する情報の公開に関する法律（以下「情報公開法」という。）に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．特定の個人の病歴に関する情報が記録された行政文書の開示請求があった場合，当該行政文書に記録されている情報は不開示情報に該当するので不開示である旨を答えたのでは，そのことだけで当該個人の病歴の存在が明らかになってしまうため，行政機関の長は，当該行政文書の存否を明らかにしないで当該開示請求を拒否することができる。
イ．行政機関の長は，開示請求に係る行政文書に情報公開法第５条各号所定の不開示情報が記録されている場合には，公益上特に必要があると認めるときであっても，当該行政文書を開示することができない。
ウ．行政文書の開示請求に対する不開示決定のうち，当該行政文書を保有していないことを理由とするものについても，行政不服審査法に基づく不服申立てをすることができる。
エ．行政文書の開示請求に対する不開示決定の取消訴訟において，不開示とされた行政文書を目的とする検証を被告に受忍義務を負わせて行うことは原則として許されないが，原告が検証への立会権を放棄した場合には，例外的に許される。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1212"},{year:"2013",num:"30",subject:"gyo",q:`処分の取消しを求める利益に関する次のアからエまでの各記述について，最高裁判所の判例の趣旨に照らし，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．当初の更正処分による税額を減額する再更正処分は，納税者に有利な効果をもたらすものであるから，納税者にその取消しを求める利益はない。
イ．外国人は，我が国に在留する権利や引き続き在留することを要求する権利を保障されているものではないから，在留期間の更新許可申請をした外国人に更新不許可の取消しを求める利益はない。
ウ．市立中学校の教諭に対する同一市内の中学校間の転任処分が，教諭の身分，俸給等に異動を生ぜしめず，客観的，実際的見地からみて勤務場所，勤務内容等に何らの不利益を伴わない場合には，他に特段の事情のない限り，教諭に当該転任処分の取消しを求める利益はない。
エ．自動車運転免許証の有効期間の更新処分は，申請を認容して利益を付する処分であり，更新によって交付される免許証が優良運転者である旨の記載のあるものか一般運転者である旨の記載のあるものかによって当該免許証の有効期間等に差異はないから，一般運転者として扱われ，優良運転者である旨の記載のない免許証を交付されて更新処分を受けた者が，自分は優良運転者に当たるとして当該更新処分の取消しを求める利益はない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1212"},{year:"2013",num:"31",subject:"gyo",q:`医療法に基づく病院開設中止の勧告（以下「中止勧告」という。）が抗告訴訟の対象としての行政処分に当たるかどうかについて判示した最高裁判所平成１７年７月１５日第二小法廷判決（民集５９巻６号１６６１頁）に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．この判決は，中止勧告は行政指導に当たるが，これに従わない場合には事実上病院開設の許可が受けられなくなることを，その処分性を認める根拠の一つとしている。
イ．この判決は，中止勧告に従わないことなどを保険医療機関の指定の拒否事由とする通達があり，中止勧告に従わない場合には相当程度の確実さをもって保険医療機関の指定を受けることができなくなること，その結果，国民皆保険制度の下では，病院の開設自体を断念せざるを得なくなることを考慮して，中止勧告の処分性を認めたものである。
ウ．この判決によれば，中止勧告に処分性が認められ，抗告訴訟の対象とすることができる以上，中止勧告後にされた保険医療機関の指定拒否処分を抗告訴訟の対象とすることはできない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"6"},{year:"2013",num:"32",subject:"gyo",q:`マンションの新築の計画に関し建築基準法上の指定確認検査機関Ａがした建築確認（以下「本件確認」という。）につき，同マンションの敷地の周辺に居住する者がＡを被告としてその取消しを求めて訴訟（以下「本件訴訟」という。）を提起した。本件訴訟において，いわゆる違法性の承継を肯定した最高裁判所平成２１年１２月１７日第一小法廷判決（民集６３巻１０号２６３１頁）の判示したところに従い，本件確認に先立って東京都の特別区の区長Ｂが条例の規定に基づいてした接道義務についての安全認定（以下「先行処分」という。）の違法を主張することができるとされる場合の本件訴訟の審理等に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．本件訴訟において，Ａが本件確認をするに当たり先行処分の適法性につき審査を尽くしたことが認められる場合は，先行処分が違法であることは，本件確認の取消事由とならない。
イ．本件訴訟において，被告であるＡは，先行処分の適法性の審理のために必要があると考えた場合は，裁判所に対し，先行処分をした行政庁である区長Ｂを本件訴訟に参加させることを求める申立てを，適法にすることができる。
ウ．本件訴訟において，本件確認を取り消す判決が確定した場合には，当該判決は，本件確認をしたＡのみを拘束する。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"6"},{year:"2013",num:"33",subject:"gyo",q:`処分の取消しの訴えの審理に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．審査請求前置主義が採用されている場合に，審査請求が不適法として却下されたときは，審査請求前置を満たしたことにはならないが，適法な審査請求がされたにもかかわらず，裁決庁が誤って審査請求を却下した場合には，裁決庁は実体審理の機会を与えられていたのであるから，審査請求人は，直ちに処分の取消しの訴えを提起することができる。
イ．取消訴訟においては，自己の法律上の利益に関係のない違法を理由として取消しを求めることができず，原告がこの制限に触れる主張のみを行っている場合には，訴えが却下されることになる。
ウ．原処分の取消訴訟と原処分についての審査請求を棄却した裁決の取消訴訟とを提起することができる場合，原処分の取消訴訟においては，裁決固有の瑕疵を主張することもできる。
エ．国家公務員法に基づき人事院が行う修正裁決は，懲戒権者の行った懲戒処分を一体として取り消し，人事院において新たな内容の懲戒処分を行うものであるから，修正裁決が出された後において懲戒権者の行った懲戒処分の取消しを求める訴えは，訴えの利益を欠くものとして却下されることになる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1222"},{year:"2013",num:"34",subject:"gyo",q:`最高裁判所平成２４年２月９日第一小法廷判決（民集６６巻２号１８３頁）は，次のような事案における教職員からの訴えについて判断を示しているが，次のアからエまでの各記述について，同判決の判示内容として，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。⑴ 教育委員会は，公立高等学校等の各校長に対し，卒業式等の式典の実施に当たっては国歌斉唱の際に教職員は会場に掲揚された国旗に向かって起立して斉唱するなど所定の実施指針のとおり行うものとすること等を示達する通達を発し，各校長は，同通達を踏まえ，毎年度，卒業式や入学式等の式典に際し，多数の教職員に対し，国歌斉唱の際に国旗に向かって起立して斉唱することを命ずる旨の職務命令（以下「本件職務命令」という。）を発している。⑵ 本件職務命令に従わない教職員については，過去の懲戒処分の対象と同様の非違行為を再び行った場合には処分を加重するという方針の下に，おおむね，その違反が１回目は戒告，２，３回目は減給，４回目以降は停職という処分量定がされ，懲戒処分が反復継続的かつ累積加重的にされる危険があり，また，その違反及びその累積が懲戒処分の処分事由及び加重事由との評価を受けることに伴い，勤務成績の評価を通じた昇給等に係る不利益という行政処分以外の処遇上の不利益が反復継続的かつ累積加重的に発生し拡大する危険がある。
ア．処分の差止めの訴えについて行政事件訴訟法第３７条の４第１項所定の「重大な損害を生ずるおそれ」があると認められるためには，処分がされることにより生ずるおそれのある損害が，処分がされた後に取消訴訟又は無効確認訴訟を提起して執行停止の決定を受けることなどにより容易に救済を受けることができるものではなく，処分がされる前に差止めを命ずる方法によるのでなければ救済を受けることが困難なものであることを要する。
イ．教職員が本件職務命令の違反を理由とする懲戒処分の差止めを求める訴えについては，処分の取消訴訟等を提起して執行停止の決定を受けることにより容易に救済を受けることができるから，前記⑴，⑵などの事情があるからといって，行政事件訴訟法第３７条の４第１項所定の「重大な損害を生ずるおそれ」があるということはできない。
ウ．教職員が本件職務命令に基づく義務の不存在の確認を求める訴えは，本件職務命令の違反を理由としてされる蓋然性のある懲戒処分の差止めの訴えを法定の類型の抗告訴訟として適法に提起することができ，その本案において当該義務の存否が判断の対象となるという事情の下では，上記懲戒処分の予防を目的とするいわゆる無名抗告訴訟としては，他に適当な争訟方法があるものとして，不適法である。
エ．教職員が本件職務命令に基づく義務の不存在の確認を求める訴えは，前記⑴，⑵などの事情の下では，本件職務命令の違反を理由とする行政処分以外の処遇上の不利益の予防を目的とする公法上の法律関係に関する確認の訴えとして，確認の利益がある。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1211"},{year:"2013",num:"35",subject:"gyo",q:`普通地方公共団体であるＡ市の住民であるＸが地方自治法（以下「法」という。）第２４２条の２第１項の規定に基づいて提起する住民訴訟に係る各事例に関する次のアからエまでの各記述（いずれにあっても，各記述に係るもの以外の訴訟要件については問題はないものとする。）について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．Ｘが違法であると主張する公金の支出がされるであろうことが確実となった事例において，Ｘは，対象とする行為が処分に当たる場合に限り，法第２４２条の２第１項第１号の規定に基づき，その差止めを求める住民訴訟を，適法に提起することができる。
イ．Ｘが違法であると主張する公金の支出を内容とする処分がされたが実際の金銭の支払は未了である事例において，Ｘは，法第２４２条の２第１項第２号の規定に基づき当該処分の取消しを求める住民訴訟を適法に提起した場合には，当該処分に係る金銭の支払について，行政事件訴訟法第２５条の規定の適用により，それが当該処分の相手方にされることによりＸの経営する事業が受ける重大な損害を避けるため，執行停止の申立てを，適法にすることができる。
ウ．Ａ市の住民であるＢがその企画する事業についてした法令に基づく許可の申請に対するＡ市の応答が遅れていることをＸが違法であると主張している事例において，上記の不作為がＡ市の財務会計上の行為に関するものではない場合には，Ｘは，法第２４２条の２第１項第３号の規定に基づき，それが違法であることの確認を求める住民訴訟を，適法に提起することはできない。
エ．Ｘが法第２４２条の２第１項第４号本文の規定に基づきＡ市の市長においてＣに対して損害賠償の請求をすることを求める住民訴訟を適法に提起した事例において，損害賠償の請求を命ずる判決が確定した場合には，Ａ市の市長は，Ｃに対して損害賠償金の支払を請求することを義務付けられる。
（参照条文）地方自治法
第２４２条の２ 普通地方公共団体の住民は，前条（注：住民監査請求）第１項の規定による請求をした場合において，同条第４項の規定による監査委員の監査の結果（中略）に不服があるとき（中略）は，裁判所に対し，同条第１項の請求に係る違法な行為又は怠る事実につき，訴えをもつて次に掲げる請求をすることができる。
一 当該執行機関又は職員に対する当該行為の全部又は一部の差止めの請求
二 行政処分たる当該行為の取消し又は無効確認の請求
三 当該執行機関又は職員に対する当該怠る事実の違法確認の請求四 当該職員又は当該行為若しくは怠る事実に係る相手方に損害賠償又は不当利得返還の請求をすることを当該普通地方公共団体の執行機関又は職員に対して求める請求。（以下略）
２～１２ （略）`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2211"},{year:"2013",num:"36",subject:"gyo",q:`仮の救済に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．処分の効力の全部を停止する旨の決定が確定した場合において，当該決定は，第三者に対しても効力を有する。
イ．処分の効力の全部を停止する旨の決定が確定した場合において，相手方は，本案の判決が確定するまでは，事情のいかんにかかわらず，当該決定の取消しを求める申立てを適法にすることができない。
ウ．処分の取消しの訴えの提起があった場合において，当該処分，当該処分の執行又は手続の続行により生ずる重大な損害を避けるため緊急の必要があるときは，裁判所は，申立てにより，仮に行政庁がこれらの停止その他の適切な措置をすべき旨を命ずることができる。
エ．裁判所は，仮の差止めを命ずる決定をする場合は，常にあらかじめ相手方の意見を聴かなければならない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1221"},{year:"2013",num:"37",subject:"gyo",q:`国家賠償法に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らし，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．国家賠償法第２条第１項の営造物の設置又は管理の瑕疵に基づく損害賠償責任は無過失責任であるから，結果発生の回避可能性がなかったとしても，国又は公共団体の責任は否定されない。
イ．未改修河川に要求される安全性は，財政的，技術的，社会的制約等の下で一般に施行されてきた治水事業による河川の改修，整備の過程に対応するいわば過渡的な安全性をもって足りるものとせざるを得ないから，道路の管理の場合とは，管理の瑕疵の有無についての判断基準もおのずから異なる。
ウ．国家賠償法第２条第１項の営造物の設置又は管理の瑕疵とは，営造物が通常有すべき安全性を欠いている状態，すなわち，他人に危害を及ぼす危険性のある状態をいうが，そこにいう危害は，営造物の利用者以外の第三者に対するものを含む。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"5"},{year:"2013",num:"38",subject:"gyo",q:"損失補償請求権として法律構成することが考えられる事案について，損害賠償を認めることにより解決される例がある。こうした例として適切なものを，次の１から５までの中から２個選びなさい。",c1:"１．民間の事業者が村の工場誘致施策に応じて投資した後，村長が交代し，村が事業者に対し代償的措置を執らずに施策を変更した場合に，村が事業者の受けた積極的損害を賠償する不法行為責任を負う例。",c2:"２．国の行政機関が民間の事業者による汚染物質の排出を規制する権限を適切に行使しなかった場合に，国が公害の被害者に対し国家賠償法第１条第１項による賠償責任を負う例。",c3:"３．民間の指定確認検査機関が違法に建築確認を行ったために当該建築物の近隣住民が被害を受けた場合に，当該建築物に係る建築確認事務の帰属する市が国家賠償法第１条第１項による賠償責任を負う例。",c4:"４．市の保健所で受けた予防接種により個人に後遺障害が生じた場合に，接種した医師の過失が一部推定され，市が損害賠償責任を負う例。",c5:"５．国家公務員が勤務場所での事故により死傷した場合に，国が国家公務員に対して負う安全配慮義務の懈怠を理由に損害賠償責任を負う例。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"14"},{year:"2013",num:"39",subject:"gyo",q:`行政不服審査法における教示に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．行政庁は，審査請求や異議申立てをすることができる処分をする場合には，処分を口頭でする場合を除き，処分の相手方に対し，不服申立てをすることができる旨やその期間などを必ず書面で教示しなければならないこととされている。
イ．処分に対して不服申立てをすることができる旨やその期間などについての書面による教示は，処分の名宛人以外の者に対しては，行う必要はないこととされている。
ウ．審査請求をすることができる処分（異議申立てをすることもできる処分を除く。）につき，処分庁が誤って異議申立てをすることができる旨を教示した場合において，当該処分庁に異議申立てがされたときは，異議申立書は審査庁に送付され，初めから審査庁に審査請求がされたものとみなされることとされている。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"3"},{year:"2013",num:"40",subject:"gyo",q:`行政組織と法律との関係に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．権限の委任は法律上定められた処分権限の帰属を変更することから，法律の根拠を必要とするのに対し，専決は，補助機関が処分権限のある行政庁の名義でこれを行使するものであり，処分権限の移譲を伴わないことから，法律の根拠を必要としない。
イ．行政組織に対する立法上の規制を弾力化する目的から，国家行政組織法においては，官房，局及び部の設置は，法律によらずに政令で定めることができるものとされている。
ウ．国が地方公共団体に対して関与を行う場合には，国の関与は，その目的を達成するために必要最小限度のものでなければならないが，法律又はこれに基づく政令の根拠までは必要とされていない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2013",num:"1",subject:"min",q:"次の各記述のうち公序良俗に違反することを根拠とするものは，後記１から４までのうちどれか。",c1:"１．土地の売買契約により，買主が所有権を取得し，その引渡しを受けた後に，売主がその土地に第三者のため地上権の設定登記をした場合には，売主が買主に対して残代金の支払を催告し，その不払を理由に売買契約を解除する旨の意思表示をしても，解除の効力は生じない。",c2:"２．食品の製造業者Ａが，有害性物質甲の混入した食品の販売を法令が禁止していることを知りながら，あえて甲の混入した食品を製造し，これをその混入の事実を知る販売者Ｂに継続的に売り渡す契約を締結した場合，この売買契約は無効であるから，ＢはＡに対してその代金支払の義務を負わない。",c3:"３．消費貸借契約の貸主が積極的に借主の誤信を招くような対応をしたため，借主が期限の利益を喪失していないものと信じて各期の支払を継続し，貸主も借主が誤信していることを知りながらその誤信を解くことなく弁済金を受領し続けたという事情がある場合，貸主は，借主に対し，期限の利益を喪失した旨の主張をすることはできない。",c4:"４．不動産の共同相続人の一人が，単独相続の登記をして，これに抵当権を設定し，その設定登記をしながら，自己の持分を超える部分の抵当権の無効を主張して，その抹消登記手続を請求することはできない。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2013",num:"2",subject:"min",q:`意思表示に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．意思能力が欠けた状態で契約を締結した者は，後見開始の審判を受けていなくても，その契約の無効を主張することができる。
イ．被保佐人が，保佐人の同意を得て，自己の不動産につき第三者との間で売買契約を締結したときは，被保佐人がその売買契約の要素について錯誤に陥っており，かつ，そのことにつき重大な過失がない場合でも，その契約の無効を主張することができない。
ウ．第三者の詐欺によって相手方に対する意思表示をした者は，相手方が第三者による詐欺の事実を知らなかった場合にも，その詐欺によって生じた錯誤が錯誤無効の要件を満たすときは，相手方に対し，その意思表示の無効を主張することができる。
エ．被保佐人は，保証契約を締結する前にその行為をすることについて保佐人の同意を得たときは，自己の判断でその保証契約の締結を取りやめることはできない。
オ．被保佐人と契約を締結しようとする者は，家庭裁判所に対し，利害関係人として，被保佐人に十分な判断能力があることを理由に保佐開始の審判の取消しを請求することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2013",num:"3",subject:"min",q:"単独行為に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．行為能力の制限を理由に取り消すことができる行為について，制限行為能力者の相手方は，その制限行為能力者が行為能力者となった後，その者に対し，１か月以上の期間を定めて，その期間内に追認するかどうかを確答すべき旨の催告をすることができ，その場合に，その者がその期間内に確答を発しないときは，その行為を追認したものとみなされる。",c2:"２．遺贈に停止条件を付した場合において，その条件が遺言者の死亡後に成就したときは，遺贈は，条件が成就した時からその効力を生ずる。",c3:"３．時効によって消滅した債権がその消滅以前に相殺に適するようになっていた場合には，その債権者は，消滅時効が完成した後であっても，相殺をすることができる。",c4:"４．表意者の法定代理人が，詐欺を理由に取り消すことができる法律行為を追認した場合であっても，その追認があったことを表意者本人が知らなかったときは，表意者本人は，その法律行為を取り消すことができる。",c5:"５．代理権を有しない者がした契約の本人による追認は，その契約を相手方が取り消した後は，することができない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2013",num:"4",subject:"min",q:`表見代理に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．本人から登記申請を委任された者が，その権限を越えて，本人を代理して第三者と取引行為をした場合において，その登記申請の権限が本人の私法上の契約による義務を履行するために付与されたものであり，第三者が代理人に権限があると信ずべき正当な理由があるときは，委任された登記申請の権限を基本代理権とする表見代理が成立する。
イ．原材料甲を仕入れる代理権を本人から付与された者が，その代理権を利用して利益を図ろうと考え，本人を代理して第三者から甲を買い受け，これを他に転売しその利益を着服した場合，権限外の行為についての表見代理に関する規定が類推され，第三者は，本人に対し，甲の代金の支払を求めることができる。
ウ．子が父から何らの代理権も与えられていないのに，父の代理人として相手方に対し父所有の不動産を売却した場合，相手方において，子に売買契約を締結する代理権があると信じ，そのように信じたことに正当な理由があるときは，表見代理が成立する。
エ．本人からその所有する不動産に抵当権を設定する代理権を与えられた者が，本人を代理して当該不動産を売却した場合，売買契約の相手方がその権限の逸脱の事実を知り，又はそれを知らないことについて過失があったときでも，転得者が善意無過失であるときは，表見代理が成立する。
オ．夫が，日常の家事の範囲を越えて，妻を代理して法律行為をした場合，相手方において，その行為がその夫婦の日常の家事に関する法律行為に属すると信ずるにつき正当の理由があるときは，権限外の行為についての表見代理に関する規定の趣旨が類推され，妻は夫がした法律行為によって生じた債務について，連帯してその責任を負う。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2013",num:"5",subject:"min",q:`無効に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．人違いその他の事由によって当事者間に縁組をする意思がなく養子縁組がされたときは，その縁組は無効である。
イ．賭博の勝ち負けによって生じた債権が譲渡された場合において，債務者が異議をとどめずに債権譲渡を承諾したとき，債務者は，当該債権の譲受人に対し，当該債権の発生に係る契約の公序良俗違反による無効を主張することができない。
ウ．Ａの所有する土地をＢが錯誤により購入し，Ｂが当該土地を占有するＣに対して所有権に基づき明渡しを求めた場合，Ｂにおいて錯誤による意思表示の無効を主張する意思がないときは，Ｃは，当該土地の売買契約が無効であることを主張して，その明渡しを拒むことはできない。
エ．ＡがＢ所有の動産をＢから何らの代理権も与えられていないのにその代理人としてＣに売却した場合には，Ｂがこれを追認すれば，ＢＣ間の売買契約は契約時にさかのぼって有効となるが，ＡがＢ所有の動産をＢに断りなく自分の物としてＣに売却した場合には，Ｂがこれを追認すると，その追認の時に新たにＡＣ間の売買契約が締結されたものとみなされる。
オ．Ａがその所有する不動産を，一方でＢとの売買契約によりＢへ譲渡し，他方でＣとの売買契約によりＣへ譲渡した場合において，ＡからＣへの所有権移転登記がされたときは，ＡＢ間の売買契約は無効となる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2013",num:"6",subject:"min",q:`消滅時効に関する次のアからエまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から６までのうちどれか。
ア．他人の代理人として契約をした者が無権代理人であり，かつ，本人の追認を得ることができなかった場合において，相手方の選択により無権代理人として履行に代わる損害賠償義務を負うときは，当該損害賠償義務は不法行為による損害賠償責任であるから，無権代理行為の時から３年の時効消滅にかかる。
イ．債務者が消滅時効の完成後に債権者に対して債務を承認した場合において，その後さらに消滅時効の期間が経過したときは，債務者は，その完成した消滅時効を援用することができる。
ウ．特定物売買の目的物に隠れた瑕疵があった場合に，買主が売主に対して有する損害賠償請求権は，買主が瑕疵の存在に気付かなくても，目的物が買主に引き渡された時から１０年の時効消滅にかかる。
エ．不法行為に基づく損害賠償請求権の存在が訴訟上の和解によって確定され，その弁済期が和解の時から１年後とされた場合であっても，その請求権は，その和解が調書に記載された時から１０年の時効消滅にかかる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．ア エ",c4:"４．イ ウ",c5:"５．イ エ",c6:"６．ウ エ",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2013",num:"7",subject:"min",q:`一般社団法人に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．代表理事その他一般社団法人を代表する者を定めていない場合には，各理事は，単独で一般社団法人を代表する。
イ．一般社団法人は，代表者でない者が職務を行うについて第三者に加えた損害を賠償する責任を負うことはない。
ウ．一般社団法人に理事が複数ある場合には，必ず理事会を置かなければならない。
エ．一般社団法人が代表理事を定めた場合には，必ず理事会を置かなければならない。
オ．一般社団法人が理事会を設置した場合には，必ず監事を置かなければならない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2013",num:"8",subject:"min",q:"物権の帰属に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．未成年者との間で売買契約を締結して同人所有の動産を購入した者は，その後に当該売買契約が行為能力の制限を理由に取り消された場合に，売主が未成年であることについて善意無過失であったとしても，即時取得を理由としてその動産の所有権の取得を主張することはできない。",c2:"２．相続人がなく特別縁故者に対する分与もされなかった相続財産のうち，不動産の所有権は，国庫に帰属するが，動産の所有権は，相続開始後に所有の意思をもって占有を始めた者に直ちに帰属する。",c3:"３．他人の動産に工作を加えた者があるときの加工物の所有権は，民法の規定に従って帰属する者が定められ，加工前に所有者と加工者との間で民法の加工に関する規定と異なる合意をしても，その合意の効力は生じない。",c4:"４．土地の共有者の一人が時効によって地役権を取得したときは，他の共有者もこれを取得する。",c5:"５．所有者を異にし，主従の区別のある２個の動産が付合した場合，従たる動産の所有者は，その付合の時における価額の割合に応じてその合成物の共有持分を取得する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"14"},{year:"2013",num:"9",subject:"min",q:"所有権の取得又は移転に関する次の１から５までの各記述のうち，判例の趣旨に照らし正しいものを２個選びなさい。",c1:"１．Ａ所有の不動産を占有するＢが自己の占有に前の占有者Ｃの占有を併せて主張することによってその不動産の所有権を時効により取得したときは，Ａは，Ｃの占有の開始日にさかのぼってその所有権を喪失する。",c2:"２．売主が他人の不動産を売り渡した後にその所有権を取得したときは，買主は，売主がその不動産の所有権を取得した後これを買主に移転する意思を表示した時に，その不動産の所有権を取得する。",c3:"３．詐害行為取消権に基づき不動産の贈与契約を取り消す旨の判決が確定したときは，贈与契約による所有権移転の効果は，贈与契約締結時にさかのぼって消滅する。",c4:"４．不動産の譲渡をもって代物弁済契約がされた場合，所有権移転登記をするまでは，その不動産の所有権が債権者に移転することはない。",c5:"５．相続財産のうち，特定の不動産を特定の相続人に相続させる旨の遺言があった場合，その遺言で相続による承継を当該相続人の意思表示にかからせたなどの特段の事情のない限り，何らの行為を要せずして，その不動産の所有権は，被相続人の死亡の時に直ちに相続により当該相続人に承継される。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"15"},{year:"2013",num:"10",subject:"min",q:`物権変動に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡがＢに甲土地を売却し，所有権移転登記がされた後，Ａは，Ｂの代金不払を理由に売買契約を解除した。その後ＢがＣに甲土地を売却し，所有権移転登記がされた場合，Ａは，Ｃに対し，甲土地の所有権を主張することができない。
イ．ＡがＢ所有の甲土地を占有し，取得時効が完成した後ＢからＡへの所有権移転登記が未了の間に，ＣがＢから甲土地を譲り受けて登記をした場合であっても，Ａがその後さらに占有を継続し，Ｃが登記をした時から再度取得時効の期間が経過したときは，Ａは，Ｃに対し，所有権移転登記をしなくても時効による所有権取得を主張することができる。
ウ．甲土地を含む財産をＡＢＣが共同で相続し，その後Ａのみが相続を放棄した場合，ＢＣがＢＣのみの共有持分登記をする前に，Ａの債権者ＤがＡも共同相続したものとして代位によりＡの共有持分登記をした上，Ａの持分を差し押さえたときは，ＢＣは，Ｄに対し，甲土地がＢＣのみの共有であることを主張することができない。
エ．甲土地がＡからＢ，ＢからＣに順次売却された後，ＡＢ間の売買契約が合意により解除された場合，Ｃは，Ａに対し，所有権移転登記をしなくても甲土地の所有権取得を主張することができる。
オ．Ａは，Ｂに対する債権の担保としてＣが所有する甲土地に抵当権の設定を受け，その登記をしていたが，Ｂから被担保債権全額の弁済を受けたにもかかわらず，Ｂに対する債権をＤに譲渡し，Ｂは，その債権譲渡について異議をとどめないで承諾した。この場合，Ｃは，Ｄに対し，抵当権抹消登記をしなくても抵当権の消滅を主張することができる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2013",num:"11",subject:"min",q:`用益物権に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．地上権は，抵当権の目的とすることができない。
イ．土地の所有者と地上権者との間において，地上権の譲渡を禁ずる旨の特約がある場合であっても，地上権者がその後に第三者との間で地上権を譲渡する旨の契約を締結したときは，その第三者は，地上権を取得することができる。
ウ．地役権者は，承役地の所有者に対し，必ず便益の対価を支払わなければならない。
エ．法定地上権を取得した者は，土地の所有者に対し，地代を支払う義務を負わない。
オ．定期の地代を支払うべき地上権者が引き続き２年以上地代の支払を怠ったときは，土地の所有者は，地上権の消滅を請求することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2013",num:"12",subject:"min",q:`共有に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．共有地について筆界の確定を求める訴えを提起しようとする場合に，一部の共有者が訴えの提起に同調しないときは，その余の共有者は，隣接する土地の所有者と訴えの提起に同調しない共有者とを被告として，上記訴えを提起することができる。
イ．裁判所に請求して共有物の分割をする場合，共有物の現物を分割するか，共有物を競売して売得金を分割する方法のいずれかによらなければならず，共有物を共有者のうちの一人の単独所有又は数人の共有とし，これらの者から他の共有者に対して持分の価格を賠償させる方法によることはできない。
ウ．共有物について賃貸借契約を締結することは，過半数の持分を有する共有者によって可能であるが，賃貸借契約の解除は，共有者全員によってされる必要がある。
エ．ＡＢが共有する土地につき，Ｃが無権限で自己への所有権移転登記をした場合，Ａは，単独で，Ｃに対し，抹消登記手続を請求することができる。
オ．ＡＢが各２分の１の持分で甲土地を共有している場合に，Ｂは，ＡＢ間の協議に基づかずにＡの承認を受けて甲土地を占有するＣに対し，単独で，甲土地の明渡しを求めることはできない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2013",num:"13",subject:"min",q:"担保物権の効力に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．留置権者は，債権の全部の弁済を受けるまでは，留置物の全部についてその権利を行使することができる。",c2:"２．一般の先取特権者は，不動産以外の財産の代価に先立って不動産の代価が配当される場合を除き，まず不動産以外の財産から弁済を受け，なお不足があるのでなければ，不動産から弁済を受けることができない。",c3:"３．質権の目的である債権が金銭債権であるときは，質権者は，その被担保債権の額にかかわらず，当該金銭債権の全額を取り立てることができる。",c4:"４．抵当権の実行としての競売がされる前に抵当権の被担保債権について抵当不動産以外の財産の代価を配当すべき場合には，当該抵当権者以外の債権者は，当該抵当権者に配当すべき金額の供託を請求することができる。",c5:"５．根抵当権の元本の確定後において現に存する債務の額が根抵当権の極度額を超えるときは，他人の債務を担保するため当該根抵当権を設定した者は，その極度額に相当する金額を払い渡し又は供託して，当該根抵当権の消滅請求をすることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2013",num:"14",subject:"min",q:`先取特権に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．不動産売買の先取特権について登記があるときは，その先取特権者は，登記の先後を問わず，抵当権に先立って先取特権を行使することができる。
イ．動産売買の先取特権の目的物が転売され，第三者に引き渡されたときは，先取特権者は，その動産について先取特権を行使することができない。
ウ．雇用関係の先取特権は，給料その他債務者と使用人との間の雇用関係に基づいて生じた債権について存在する。
エ．一般の先取特権者は，不動産について登記をしなくても，不動産売買の先取特権について登記をした者に優先して当該不動産から弁済を受けることができる。
オ．判例によれば，日用品供給の先取特権の債務者は，自然人に限られ，法人は含まれない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2013",num:"15",subject:"min",q:"抵当権に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．債務者が所有する不動産に抵当権の設定登記がされ，これが存続している場合には，債務者は継続的に被担保債権に係る債務の存在を承認していることになるから，その抵当権の被担保債権については消滅時効が進行しない。",c2:"２．債務者が所有する不動産に抵当権が設定され，その登記がされている場合，その債務者が当該不動産を１０年間継続して占有したとしても，その債務者は，抵当権者に対し，抵当権の負担のない所有権を時効により取得したとして，抵当権設定登記の抹消登記手続を請求することはできない。",c3:"３．債務者が所有する同一の不動産について，第一順位の抵当権と第二順位の抵当権が設定され，それぞれその旨の登記がされている場合，第一順位の抵当権の実行としての競売の結果，第一順位の抵当権者のみが配当を受けたときは，第二順位の抵当権は消滅しない。",c4:"４．債務者が所有する同一の不動産について，第一順位の抵当権と第二順位の抵当権が設定され，それぞれその旨の登記がされている場合，第一順位の抵当権の被担保債権に係る債務を債務者が弁済したときは，債務者は，弁済による代位によって第一順位の抵当権を取得する。",c5:"５．債務者が所有する不動産に抵当権が設定されている場合，その被担保債権に係る債務について他の者により併存的債務引受がされたときは，当該債務引受によって生じた債権も，その抵当権の被担保債権となる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2013",num:"16",subject:"min",q:"抵当権の効力に関する次の１から４までの各記述のうち，正しいものはどれか。",c1:"１．Ａがその所有する甲建物をＢに賃貸している場合において，Ａが甲建物にＣのために抵当権を設定したときは，その抵当権の効力は，Ｂが甲建物において使用しているＢ所有の畳に対しても及ぶ。",c2:"２．ＡがＢから建物所有目的で土地を賃借し，その上にＡが建てた甲建物にＣのために抵当権を設定した場合，その抵当権の効力は甲建物の従たる権利である当該土地賃借権にも及び，抵当権実行としての競売がされた時に当該土地賃借権も甲建物の買受人Ｄに移転するから，Ｄは，Ｂの承諾がなくても，Ｂに対し，当該土地賃借権を甲建物の占有権原として主張することができる。",c3:"３．根抵当権者は，確定した元本並びに利息その他の定期金及び債務不履行によって生じた損害の賠償の全部について，極度額を限度として，その根抵当権を行使することができる。",c4:"４．抵当権が設定された土地の上に存する建物については，別段の定めをした場合に限り，土地の抵当権の効力が及ぶ。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2013",num:"17",subject:"min",q:`建物を目的物とする売買契約が締結された後，その引渡期日が到来する前に売主の占有下で当該建物の全部が滅失した場合に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．当該建物の滅失が売主の責めに帰すべき事由による場合，売主は，買主からの建物の引渡請求を拒絶することができる。
イ．当該建物の滅失が買主の責めに帰すべき事由による場合，売主は，買主に対して代金の支払を請求することはできない。
ウ．当該建物の滅失が売主の責めに帰すべき事由による場合，買主は，既に売主に代金を支払っているときは，契約を解除して，その代金の返還を請求することができる。
エ．当該建物の滅失が買主の責めに帰すべき事由による場合，買主は，既に売主に代金を支払っているときでも，その返還を請求することはできない。
オ．当該建物の滅失が不可抗力による場合，売買契約は契約時にさかのぼって無効となるため，買主は，既に売主に代金を支払っているときは，その返還を請求することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2013",num:"18",subject:"min",q:`多数当事者の債権関係に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．相続開始から遺産分割までの間に相続財産である賃貸不動産から生ずる賃料債権は，各共同相続人が，その相続分に応じ，分割債権として確定的に取得する。
イ．債務引受がされた場合には，原債務者及び引受人は分割債務を負う。
ウ．共同不法行為者の一人に対してした債務免除の意思表示は，被害者が他の共同不法行為者に対する債務免除の意思を有していなくても，他の共同不法行為者の利益のためにその効力を生ずる。
エ．連帯債務を負うＡ及びＢに対してそれぞれ１００万円の債権を有するＣは，Ａ及びＢがそれぞれ破産手続開始の決定を受け，各破産手続において配当が行われるときは，それぞれ５０万円の限度で，Ａ及びＢの各破産財団の配当に加入することができる。
オ．被害者が共同不法行為者の一人に対して損害賠償債務の履行を請求しても，他の共同不法行為者の損害賠償債務の消滅時効は中断しない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2013",num:"19",subject:"min",q:`債権者Ａが債務者Ｂに対して有する甲債権をＣとＤに二重譲渡した場合に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。なお，本問では，Ｃに対する債権譲渡を「第一譲渡」といい，Ｄに対する債権譲渡を「第二譲渡」という。
ア．Ａが第一譲渡については確定日付のある証書によらずに通知をしてこれがＢに到達し，第二譲渡については通知をしていない場合に，ＢがＣに対して弁済をすれば，甲債権はこれによって消滅する。
イ．第一譲渡及び第二譲渡のいずれについても，Ａが確定日付のある証書によらずに通知をしてこれらがＢに到達した場合には，これらの通知の到達後に，ＢがＣに対して弁済をしても甲債権は消滅しない。
ウ．Ａが第一譲渡については確定日付のある証書によって通知をしてこれがＢに到達し，第二譲渡については確定日付のある証書によらずに通知をしてこれがＢに到達した場合には，これらの通知の到達後に，ＢがＤに対して弁済をすれば，甲債権はこれによって消滅する。
エ．第一譲渡及び第二譲渡のいずれについても，Ａが確定日付のある証書によって通知をし，これらの通知が同時にＢに到達した場合には，Ｂは，Ｄからの請求に応じなくても債務不履行責任を負うことはない。
オ．第一譲渡及び第二譲渡のいずれについても，Ａが確定日付のある証書によって通知をし，これらの通知が同時にＢに到達した後に，ＢがＣに対して弁済をすれば，甲債権はこれによって消滅する。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2013",num:"20",subject:"min",q:"解除の要件に関する次の１から４までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．解除の要件としての催告は，相手方が履行遅滞に陥った後にしなければならないから，期限の定めのない債務の履行遅滞を理由に契約を解除するには，あらかじめ履行の請求をすることによって当該債務を履行遅滞に陥れた後，改めてその履行の催告をする必要がある。",c2:"２．双務契約上の債務が同時履行の関係に立つ場合において，一方の当事者が相当の期間を定めて催告をしたときは，その当事者は，当該期間中弁済の提供を継続しなければ契約を解除することはできない。",c3:"３．債務者が履行遅滞に陥った後に債権者が不相当な期間を定めて催告をした場合であっても，債務者が履行の催告に応じず，相当な期間が経過した後に解除の意思表示がされたときは，解除の効力が生ずる。",c4:"４．解除の意思表示に条件又は期限を付すことはできないから，債権者が相当な期間を定めて催告をし，当該期間内に履行がないことを停止条件として解除の意思表示をしたとしても，解除の効力は生じない。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2013",num:"21",subject:"min",q:`代位に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．抵当権の被担保債権の一部を弁済した第三者は，その弁済をした価額に応じて抵当権者とともにその抵当権を行使することができ，その抵当権が実行されたときは，当該抵当権者と当該第三者は，当該抵当権者が有する残債権の額と当該第三者が代位によって取得した債権の額に応じ，按分して配当を受ける。
イ．同一の物上保証人が所有する甲土地及び乙土地に第一順位の共同抵当権が設定されている場合において，甲土地の代価のみが先に配当されたときは，甲土地について第二順位の抵当権を有していた者は，当該配当によりその被担保債権の全額について弁済を受けた場合を除き，共同抵当に関する民法の規定に定める限度で，乙土地に設定された第一順位の抵当権を行使することができる。
ウ．物上保証人所有の甲土地と債務者所有の乙土地に第一順位の共同抵当権が設定されている場合，甲土地の代価のみが先に配当され，その被担保債権に係る債務が消滅したときは，物上保証人は，当該債務者に対して有する求償権の範囲内で，乙土地に設定された第一順位の抵当権を行使することができる。
エ．同一の債務につき，保証人がいるとともに，物上保証人所有の甲土地に抵当権が設定されている場合，保証人が保証債務を履行し，債務を消滅させたときは，保証人は，当該債務者に対する求償権の全額について，甲土地に設定された抵当権を行使することができる。
オ．同一の債務につき，保証人がいるとともに，債務者所有の甲土地に抵当権が設定されている場合，債権者が甲土地に設定された抵当権を放棄した後に保証人が保証債務を履行し，債務を消滅させたときは，保証人は，甲土地に設定された抵当権が放棄されていないものとして，その抵当権を行使することができる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2013",num:"22",subject:"min",q:"債務不履行による損害賠償に関する次の１から４までの各記述のうち，正しいものはどれか。",c1:"１．債務不履行による損害賠償は，当事者間で別段の合意がされたかどうかにかかわらず，金銭をもってその額を定める。",c2:"２．金銭債務の不履行による損害賠償については，債務者は，その不履行が不可抗力による場合を除き，その責任を免れない。",c3:"３．当事者が債務不履行について損害賠償の額を予定した場合には，裁判所は，実際の損害額を考慮してこれを増額することができるのみであり，これを減額することはできない。",c4:"４．当事者が債務不履行について損害賠償の額を予定した場合であっても，解除権を行使することは妨げられない。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2013",num:"23",subject:"min",q:`債権の消滅原因に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．判例によれば，土地の賃借人がその土地上の建物を賃貸している場合において，建物の賃借人は，その土地の賃料について，土地の賃借人の意思に反しても弁済をすることができる。
イ．弁済の目的物が供託されたことによって抵当権が消滅した場合には，その供託をした者は，債権者が供託を受諾する前であっても，供託物を取り戻すことができない。
ウ．相殺の意思表示には，条件を付することができる。
エ．判例によれば，債権者が保証人に対して有する保証契約上の債権を自働債権とする相殺は，保証人が検索の抗弁権を有するときであっても，双方の債務が弁済期にあれば，することができる。
オ．債権者は，債務者の承諾がなければ，その債務を免除することができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2013",num:"24",subject:"min",q:`売主の担保責任に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．他人の土地の売買において，売主がその土地を取得して買主に移転することができない場合であっても，契約の時に売主がその土地が自己に属しないことを知らなかったときは，売主は，契約の解除をすることができる。
イ．売買の目的物である建物の一部が契約の時に既に滅失していた場合において，買主がその滅失を知らなかったときは，買主は，その滅失していた部分の割合に応じて代金の減額を請求することができる。
ウ．判例によれば，数量を指示してした土地の売買において数量が超過する場合には，売主は，数量が不足する場合の代金の減額に関する民法の規定の類推適用により，代金の増額を請求することができる。
エ．売買の目的物である土地のために存すると称した地役権が存しなかった場合における買主の契約の解除は，買主が事実を知った時から１年以内にしなければならない。
オ．強制競売の目的物である土地が留置権の目的である場合において，買受人は，そのことを知らず，かつ，そのために買受けをした目的を達することができないときであっても，契約の解除をすることができない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2013",num:"25",subject:"min",q:`Ａは，Ｂとの間で，期間を平成２２年１０月１日から起算して２年とし，賃料を毎月末日に当月分を支払うとの約定で，Ｂ所有の甲建物を賃借する旨の契約を締結し，敷金をＢに交付して，甲建物の引渡しを受けた。その後，Ｂが，Ａに断りなく，甲建物をＣに売却し，その日のうちにＣへの所有権移転登記もされた。この場合に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．甲建物の売却が平成２３年１０月３１日に行われた場合，Ｃは，Ａに対し，平成２３年１１月１日以降の賃料を請求することができる。
イ．甲建物の売却が平成２３年１０月３１日に行われたが，その時点でＡの延滞賃料が発生していた場合，Ｃは，Ａに対し，その延滞賃料を請求することができない。
ウ．甲建物の売却が平成２３年１０月３１日に行われたが，Ａが甲建物について有益費を支出したのがそれ以前の平成２３年９月３０日であった場合には，平成２４年９月３０日に期間満了により賃貸借契約が終了した時点でその価格の増加が現存するときであっても，Ａは，Ｃに対し，その有益費の償還を請求することはできない。
エ．甲建物の売却が平成２３年１０月３１日に行われた後，平成２４年９月３０日に期間満了により賃貸借契約が終了した場合，Ａは，甲建物をＣに明け渡した上で，Ｃに対し，敷金の返還請求権を行使することができる。
オ．平成２４年９月３０日に期間満了により賃貸借契約が終了した後，Ａが甲建物を明け渡す前に甲建物が売却された場合，Ａは，甲建物をＣに明け渡した上で，Ｃに対し，敷金の返還請求権を行使することができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2013",num:"26",subject:"min",q:"委任に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．委任は，受任者からは，やむを得ない事由がなければ解除することができない。",c2:"２．受任者は，委任者の請求があるときは，いつでも委任事務の処理の状況を報告しなければならない。",c3:"３．委任者が死亡した場合でも，委任者の相続人がこれを受任者に通知せず，かつ，受任者が委任者の死亡を知らなかったときは，委任者の相続人は，委任者の死亡による委任の終了を受任者に対抗することができない。",c4:"４．報酬を支払う旨の特約がある場合において，委任が受任者の責めに帰することができない事由によって履行の中途で終了したときは，受任者は，既にした履行の割合に応じて報酬を請求することができる。",c5:"５．受任者は，委任事務を処理するのに必要と認められる債務を負担したときは，委任者に対し，自己に代わってその弁済をすることを請求することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2013",num:"27",subject:"min",q:"寄託に関する次の１から４までの各記述のうち，誤っているものはどれか。",c1:"１．有償の寄託契約において，寄託物を返還する時期について定めがある場合，受寄者は，その期限前であっても，保管料を返還することにより，寄託物を寄託者に返還することができる。",c2:"２．受寄者は，寄託物について権利を主張する第三者から訴えを提起されたときは，遅滞なくその事実を寄託者に通知しなければならない。",c3:"３．有償の寄託契約においても，受寄者が自己の財産に対するのと同一の注意をもって寄託物を保管する義務を負う旨の合意がされた場合には，その合意は有効である。",c4:"４．寄託物の瑕疵によって受寄者に損害が生じた場合，寄託者は，過失なくその瑕疵を知らなかったとき，又は受寄者がこれを知っていたときを除き，その損害を受寄者に賠償しなければならない。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2013",num:"28",subject:"min",q:`組合に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．組合員は，組合の清算前には，組合財産の分割を求めることはできない。
イ．組合契約において，やむを得ない事由があっても任意の脱退を許さない旨を合意した場合，その合意は無効である。
ウ．組合契約において，ある組合員が損失を分担しない旨を合意した場合，その組合員は，他の組合員に対し，当該合意の効力を主張することができる。
エ．組合解散後に死亡した組合員の相続人は，残余財産分配請求権を相続しない。
オ．死亡した組合員の相続人は，残存組合員の全員の意思表示があれば，当該相続人の意思にかかわらず組合員となる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2013",num:"29",subject:"min",q:`役務の提供を目的とする契約に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．雇用契約において期間によって定めた報酬は，その期間を経過した後に，請求することができる。
イ．請負契約において，請負人は，具体的な報酬額の定めがなければ，報酬を請求することができない。
ウ．委任事務を処理するについて費用を要するときは，委任者は，受任者の請求により，その前払をしなければならない。
エ．準委任契約の受任者は，委託事務を履行する前に報酬を請求することができる旨の特約がある場合であっても，委任事務を履行しない限り，委任者に報酬を請求することができない。
オ．商人がその営業の範囲内において寄託を受けた場合には，報酬を受けないときであっても，受寄者は，善良な管理者の注意をもって寄託物を保管する義務を負う。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2013",num:"30",subject:"min",q:"使用者又は注文者の不法行為責任に関する次の１から４までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．法人Ａの使用するＢがその事業の執行について第三者Ｃに損害を与えた場合において，Ａの代表者Ｄが現実にＢの選任監督を担当していなかったときは，Ｄは，Ｃに対し，Ａに代わって事業を監督する者としての責任を負わない。",c2:"２．Ａの使用するＢが，その外形からみてＡの事業の範囲内に属すると認められる行為によって第三者Ｃに損害を与えた場合であっても，Ｂの加害行為がＢの職務権限内で適法に行われたものでないことをＣが知っていたとき，又は知らなかったことについて重大な過失があったときは，Ａは，Ｃに対し，損害賠償の責任を負わない。",c3:"３．Ａの使用するＢがその事業の執行について第三者Ｃに損害を与えた場合において，その損害を賠償する債務をＡがＣに対して弁済したときには，ＡのＢに対する求償権は，発生しない。",c4:"４．Ａとの間で請負契約を締結した請負人Ｂがその仕事について第三者Ｃに損害を与えた場合において，注文又は指図についてＡに過失があったときは，Ａは，Ｃに対し，注文者として損害賠償の責任を負う。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2013",num:"31",subject:"min",q:`Ａ男とＢ女の間の内縁関係に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡがＢに無断で婚姻届を作成して提出した場合，その当時両名に夫婦としての実質的生活関係が存在し，かつ，後にＢが届出の事実を知ってこれを追認したときは，その婚姻は，追認により届出の当初にさかのぼって有効となる。
イ．Ａが内縁関係を正当な理由なく一方的に破棄した場合，Ｂは，Ａに対し，債務不履行を理由として損害賠償を請求することができるが，不法行為を理由として損害賠償を請求することはできない。
ウ．Ｂが内縁継続中に病気療養のためＡと別居している場合において，その間にＢが支出した医療費は，婚姻から生ずる費用に準じてＡＢが分担する。
エ．内縁成立の日から２００日を経過した後又は内縁解消の日から３００日以内にＢが分娩した子のＡに対する認知の訴えにおいては，その子はＡの子と推定されない。
オ．Ｂは，Ａが死亡したときの相続について，Ａと他の女性との間の子であるＣに対し，Ａの配偶者に準ずる相続分を主張することができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2013",num:"32",subject:"min",q:`実親子関係に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．再婚禁止期間内に再婚をした女性が出産した場合において，嫡出の推定に関する民法の規定によりその子の父を定めることができないときは，父を定めることを目的とする訴えにより，裁判所がこれを定める。
イ．嫡出否認の訴えは，子が出生した時から１年を経過すると提起することができない。
ウ．判例によれば，母の夫が服役していた間に母が懐胎したことが明らかな子は夫の子と推定されないから，母も嫡出否認の訴えを提起することができる。
エ．父は，死亡した子でも，その直系卑属があるときに限り，認知することができるが，その直系卑属が成年者であるときは，その承諾を得なければならない。
オ．戸籍法の定めるところにより認知の届出がされた場合であっても，子その他の利害関係人は，認知が真実に反することを理由として認知無効の訴えを提起することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2013",num:"33",subject:"min",q:`後見人に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．未成年者Ａに対し最後に親権を行う者が遺言で未成年者ＢをＡの未成年後見人に指定した場合，Ｂは未成年であってもＡの未成年後見人となる。
イ．成年後見人が選任されている場合においても，家庭裁判所は，必要があると認めるときは，請求により又は職権で，更に成年後見人を選任することができる。
ウ．成年後見人は，正当な事由があるときは，家庭裁判所の許可を得ずにその任務を辞することができる。
エ．未成年後見人は，未成年被後見人の財産を管理し，かつ，その財産に関する法律行為について未成年被後見人を代表するが，未成年被後見人の行為を目的とする債務を生ずべき場合には，未成年被後見人の同意を得なければならない。
オ．成年後見人の配偶者は成年後見監督人となることはできないが，成年後見人の父は成年後見監督人となることができる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2013",num:"34",subject:"min",q:`ＡＢ夫婦の間に子ＣＤがいる場合において，相続に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．判例によれば，Ａの死亡後，遺産の分割前に，Ｃが，Ａの遺産に含まれる特定の土地の持分４分の１を第三者Ｅに売り渡したときは，Ｄは，その価額及び費用を償還して，Ｅから当該持分を取り戻すことができる。
イ．Ａが死亡した場合，Ａが所有していた墳墓の所有権は，Ａの指定に従って祖先の祭祀を主宰すべき者がＣであるときは，Ｃが承継する。
ウ．ＡＢが同時に死亡したが，Ａがその財産の全部を第三者Ｆに遺贈したときは，Ｃは，Ｆに対し，Ａの財産の８分の１に相当する額の限度で，遺贈の減殺を請求することができる。
エ．ＡＢの死亡後Ｃが死亡したが，Ｃには内縁の妻ＧがいてＣの療養看護に努めたときは，家庭裁判所は，Ｇの請求により，Ｃの遺産の全部又は一部をＧに与えることができる。
オ．Ｄには妻Ｈがおり，Ｈは，Ｄとの婚姻後ＡＢと養子縁組をし，その後に死亡したが，Ｈには，第三者Ｉとの間に子Ｊがおり，Ｊが出生したのがＤＨの婚姻の前である場合，Ｈの死亡後にＡが死亡したときは，Ａの相続人は，Ｂ，Ｃ及びＤである。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2013",num:"35",subject:"min",q:`相続の承認及び放棄に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．相続の放棄をした者は，自己のために相続の開始があったことを知った時から３か月以内であっても，これを撤回することはできない。
イ．唯一の相続人が単純承認をした場合，相続人が被相続人に対して有していた貸金債権は，その債権が第三者の権利の目的である場合を除き，混同により消滅する。
ウ．相続人が，自己のために相続が開始した事実を知りながら，限定承認又は相続放棄をする前に相続財産の全部又は一部を処分した場合，当該処分が保存行為に該当するときであっても，単純承認をしたものとみなされる。
エ．相続の放棄をした者は，その放棄によって相続人となった者が相続財産の管理を始めることができるまで，善良な管理者の注意をもって，その財産の管理を継続しなければならない。
オ．限定承認者は，限定承認に関する民法の規定に従って各相続債権者に弁済をした後でなければ，受遺者に弁済をすることができない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2013",num:"36",subject:"min",q:"遺留分に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．贈与の減殺を請求された受贈者は，その返還すべき財産から生じた果実は返還することを要しない。",c2:"２．不相当な対価をもってした建物の売買契約で，当事者双方が遺留分権利者に損害を加えることを知ってしたものについて遺留分権利者がその減殺を請求するときは，遺留分権利者は，相手方に対し，その対価を償還する必要はない。",c3:"３．相続の開始後における遺留分の放棄は，家庭裁判所の許可を得なければ効力を生じない。",c4:"４．遺贈は，遺言者がその遺言に別段の意思を表示したときを除き，その目的の価額の割合に応じて減殺し，贈与は，後の贈与から順次前の贈与に対して減殺する。",c5:"５．共同相続人の一人が遺留分を放棄しても，他の共同相続人の遺留分に影響を及ぼさない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"45"},{year:"2013",num:"37",subject:"syo",q:`株式会社の募集設立に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．設立時募集株式の数を超える数の引受けの申込みがあった場合には，発起人は，各申込者に対し，申込みに係る株式の数の割合に応じて，設立時募集株式を割り当てなければならない。
イ．発起人は，払込みの取扱いをした銀行に対し，設立時募集株式のみならず，発起人が引き受けた設立時発行株式についても，払い込まれた金額に相当する金銭の保管に関する証明書の交付を請求することができる。
ウ．設立の廃止については，創立総会の招集に際して創立総会の目的である事項として定められていなくても，創立総会において，決議をすることができる。
エ．公証人による定款の認証を受けた後に，創立総会の決議により定款を変更した場合には，改めて公証人の認証を受ける必要はない。
オ．株式会社は，定款又は創立総会の決議により定められた設立の効力発生日に成立する。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2013",num:"38",subject:"syo",q:`株式会社の譲渡制限株式に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．会社が，定款を変更して，その発行する全部の株式の内容として，譲渡による当該株式の取得について会社の承認を要する旨の定款の定めを設ける場合には，総株主の同意を得なければならない。
イ．会社は，その発行する一部の株式の内容として，譲渡による当該株式の取得について会社の承認を要する旨の定款の定めを設けることはできない。
ウ．譲渡制限株式の株主が死亡した場合には，その相続人は，当該譲渡制限株式の取得について会社の承認を得ない限り，会社に対し，株主の地位を主張することはできない。
エ．判例の趣旨によれば，取締役会設置会社の唯一の株主がその保有する譲渡制限株式を他に譲渡した場合には，取締役会の決議による承認がないときであっても，その譲渡は，当事者間だけではなく，会社に対する関係においても，有効である。
オ．取締役会設置会社は，定款の定めにより，譲渡による株式の取得についての承認の決定を株主総会の決議によるものとすることができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2013",num:"39",subject:"syo",q:`会社法の禁止する株主の権利の行使に関する利益の供与についての次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．判例によれば，会社から見て好ましくない株主が議決権を行使することを回避する目的で，会社が，自己の計算において，第三者に対してその株主から株式を譲り受けるための対価を供与した場合には，株主の権利の行使に関する利益の供与に該当する。
イ．会社が，自己の計算において，特定の株主に対して無償で財産上の利益の供与をした場合には，その会社は，株主の権利の行使に関する利益の供与をしたものと推定される。
ウ．株主が，自己の計算において，株主総会における議決権の行使に関し，他の株主に対して財産上の利益の供与をした場合には，株主の権利の行使に関する利益の供与に該当する。
エ．取締役が株主の権利の行使に関する利益の供与をした場合には，その利益の供与をすることに関与した他の取締役は，その職務を行うについて注意を怠ったかどうかにかかわらず，会社に対し，供与した利益の価額に相当する額を支払う義務を負う。
オ．会社から株主の権利の行使に関する利益の供与を受けた者が取締役，会計参与，監査役，執行役又は会計監査人でない場合には，その者に対してその利益の返還を求める株主代表訴訟は，提起することができない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2013",num:"40",subject:"syo",q:`社債，株式等の振替に関する法律に規定する振替株式に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。なお，各記述において，振替口座簿は，電磁的記録をもって作成されているものとする。
ア．振替株式に係る株主名簿の名義書換は，振替機関から会社に対し総株主通知がされた場合には行われるが，振替機関から会社に対し個別株主通知がされた場合には行われない。
イ．振替株式の譲渡は，当事者の意思表示のみによってその効力を生ずるが，振替の申請により，振替口座簿中の譲受人の口座における保有欄にその譲渡に係る数の増加の記録がされなければ，会社に対抗することができない。
ウ．振替口座簿中の譲渡人の口座における保有欄に，譲渡人が有する振替株式の数を超過する振替株式の数が誤って記録されていた場合でも，譲受人が譲渡人からその記録に係る全ての振替株式を譲り受ける旨の合意をし，かつ，振替の申請により，譲受人の口座における保有欄にその譲渡に係る数の増加の記録がされたときは，譲受人は，悪意又は重大な過失があるときを除き，その増加の記録に係る権利を取得する。
エ．振替株式の質入れがあった場合には，総株主通知の際に，その振替株式の質入れの事実を会社に知らせないようにすることはできない。
オ．振替株式を発行した会社は，正当な理由があるときは，振替機関に対し，所定の費用を支払って，その備える振替口座簿中の加入者の口座に記録されている事項を証明した書面の交付を請求することができる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2013",num:"41",subject:"syo",q:`株主総会における株主の議決権に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．株主総会の招集の通知は，その株主総会において決議をすることができる事項の全部につき議決権を行使することができない株主に対しては，することを要しない。
イ．株主は，議決権行使書面によって議決権を行使した場合には，その議決権行使に係る議題について株主総会に出席することができない。
ウ．株主は，その有する議決権を統一しないで行使することはできない。
エ．株主総会の決議について特別の利害関係を有する株主は，その決議において，議決権を行使することができない。
オ．株主は，株主総会の議案に賛成する議決権を行使した場合でも，その議案に係る株主総会の決議の取消しの訴えを提起することができる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2013",num:"42",subject:"syo",q:`株主総会の招集及び株主提案権に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．株主が取締役に対し適法に株主総会の招集を請求したにもかかわらず，遅滞なく招集の手続が行われない場合には，その株主は，裁判所の許可を得て，自ら株主総会を招集することができる。
イ．会社法上の公開会社は，株主が取締役に対し一定の事項を株主総会の議題とすることを請求するためには，その請求は株主総会の日の３か月前までにしなければならない旨を定款で定めることができる。
ウ．取締役の選任に関する議案に限り株主総会において議決権を行使することができる旨の定款の定めがある議決権制限株式の株主は，取締役に対し，剰余金の配当を株主総会の議題とすることを請求することができない。
エ．特定の議案につき株主総会において会社法所定の議決権の割合以上の賛成を得られなかった場合には，その日から５年を経過しない限り，株主は，株主総会において，その議案と実質的に同一の議案を提出することができない。
オ．会社は，総株主の議決権の１００分の１以上の議決権を有する株主の同意がある場合に限り，株主総会に係る招集の手続及び決議の方法を調査させるため，その株主総会に先立ち，裁判所に対し，検査役の選任の申立てをすることができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2013",num:"43",subject:"syo",q:`取締役会設置会社の機関に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．取締役を選任する株主総会の決議の定足数は，定款の定めにより，議決権を行使することができる株主の議決権の３分の１とすることができる。
イ．監査役が３人いる場合には，そのうちの２人の同意により，職務を怠った会計監査人を解任することができる。
ウ．判例によれば，代表取締役の解職に関する取締役会の決議について，その代表取締役は，議決に加わることができない。
エ．取締役会の決議は，定款の定めにより，議決に加わることができる取締役の過半数が出席し，その出席取締役の３分の２以上に当たる多数をもって行うこととすることができる。
オ．会社は，定款の定めにより，会計参与を取締役会の決議によって選任するものとすることができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2013",num:"44",subject:"syo",q:`取締役会設置会社（委員会設置会社を除く。）の取締役が行った取引に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．取締役Ａが会社の代表取締役としてＢと取引を行った場合において，Ａを代表取締役に選定した取締役会の決議が無効であったときは，Ａが代表権を有しないことをＢが知らなかったとしても，その取引の効力は，会社には及ばない。
イ．会社から副社長の名称を付された代表権を有しない取締役Ｃが副社長の名称を使用してＤと取引を行った場合において，Ｃが代表権を有しないことを知らなかったことについてＤに重大な過失があるときは，その取引の効力は，会社には及ばない。
ウ．代表取締役が，会社を代表して，取締役会の決議を経ないで，会社の重要な財産であるＥに対する金銭債権をＦに譲渡した場合において，Ｆが取締役会の決議を経ていないことを知っていたときは，Ｅは，Ｆに対し，その債権譲渡の無効を主張することができる。
エ．代表取締役ＧがＨに対して負担する債務について，Ｇが，会社を代表して，取締役会の承認を受けないで，その債務を引き受けた場合において，Ｈが取締役会の承認を受けていないことを知っていたときは，その債務引受けの効力は，会社には及ばない。
オ．代表取締役Ｉが，自己の個人的利益を図る目的で，会社を代表してＪから金銭を借り入れた場合において，ＪがＩの真意を知り得べきであったときは，その借入れの効力は，会社には及ばない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2013",num:"45",subject:"syo",q:"取締役の善管注意義務違反の有無については，取締役の意思決定の過程及び内容に著しい不合理がないかどうかという観点から判断されるべきであり，そのような著しい不合理がなければ取締役の善管注意義務違反はないとすべきであるとの見解がある。次の１から５までの各記述のうち，この見解と整合しないものはどれか。",c1:"１．企業経営には一定のリスクが伴うので，取締役の経営判断に対して事後的又は結果論的な評価をすることにより，取締役を萎縮させるべきではない。",c2:"２．取締役の経営判断は，経営の専門家によるものであるから，尊重されるべきである。",c3:"３．株主は，株主総会において選任した取締役に会社の経営を委ね，取締役は，これを引き受けたのであるから，取締役の経営判断の失敗については，取締役が責任を負うべきである。",c4:"４．取締役が経営判断を行うに当たり弁護士の意見を聴取することは，取締役の意思決定の過程の合理性を裏付ける一要素となり得る。",c5:"５．取締役に善管注意義務違反の責任を余りに広く課すと，取締役となろうとする者がいなくなるという懸念がある。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2013",num:"46",subject:"syo",q:`監査役会設置会社における監査役及び監査役会に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．監査役会は，監査の方針を決定する。
イ．監査役が株主総会の決議の取消しの訴えを提起するには，監査役会の同意を得る必要はない。
ウ．取締役が監査役の選任に関する議案を株主総会に提出するには，監査役会の同意を得なければならない。
エ．株主代表訴訟において，会社が被告である取締役を補助するためその訴訟に参加するには，監査役会の同意を得なければならない。
オ．監査役が子会社の業務及び財産の状況を調査するには，監査役会の同意を得なければならない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2013",num:"47",subject:"syo",q:`株式会社の資本金の額に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．会社を設立する際に作成すべき定款には，資本金の額を記載し，又は記録しなければならない。
イ．会社が資本金の額を減少する場合には，それと同時に株式の発行が行われることにより，その資本金の額の減少の効力が生ずる日後の資本金の額がその日前の資本金の額を下回らないときであっても，その会社の債権者は，その資本金の額の減少について異議を述べることができる。
ウ．取締役会設置会社が資本金の額を減少する場合において，減少する資本金の額の全部を準備金とするときは，その資本金の額の減少については，株主総会決議を要せず，取締役会決議によってこれを行うことができる。
エ．監査役の監査の範囲を会計に関するものに限定する旨の定款の定めがある会社の監査役は，資本金の額の減少の無効の訴えを提起することができない。
オ．会社が資本金の額を減少したときは，その会社は，その本店の所在地のみならず，その支店の所在地においても，変更の登記をしなければならない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2013",num:"48",subject:"syo",q:`持分会社に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．合同会社を設立しようとする場合において，定款で定めた社員の出資の目的が金銭以外の財産であるときは，社員になろうとする者は，裁判所に対し，検査役の選任の申立てをしなければならない。
イ．合同会社の業務を執行するに当たって不正の行為をした社員は，他の社員の全員の同意によって除名することができる。
ウ．合名会社の社員が会社の債務を弁済する責任を負う場合には，その社員は，会社が主張することができる抗弁をもって会社の債権者に対抗することができる。
エ．合資会社は，社員が１人となったときは，解散する。
オ．合名会社は，定款で定めた解散の事由の発生によって解散したときは，総社員の同意によって，会社の財産の処分の方法を定め，清算人を置かないで清算をすることができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2013",num:"49",subject:"syo",q:`株式会社を各当事会社とする吸収合併に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．存続会社は，その親会社の株式を消滅会社の株主に対して合併対価として交付することはできない。
イ．存続会社は，消滅会社の自己株式については，合併対価が金銭であっても，合併対価を割り当てることはできない。
ウ．消滅会社が会社法上の公開会社である場合には，存続会社は，消滅会社の株主に対し，合併対価として存続会社の譲渡制限株式を交付することはできない。
エ．存続会社は，消滅会社の新株予約権の新株予約権者に対し，その有する新株予約権に代えて存続会社の株式を交付することができる。
オ．消滅会社の反対株主は，合併対価として交付を受ける株式の価額が各当事会社の財産の状況その他の事情に照らして相当である場合でも，株式買取請求権を行使することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2013",num:"50",subject:"syo",q:`監査役会設置会社である甲株式会社（以下「甲社」という。）の取締役Ａが甲社に損害を与えたとして，株主Ｂが，甲社に対し，Ａの責任を追及する訴えの提起を請求した場合に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．甲社が会社法上の公開会社でない場合には，Ａの責任を追及する訴えの提起の請求を受ける際に甲社を代表する者は，代表取締役である。
イ．甲社が提起するＡの責任を追及する訴えは，甲社の本店の所在地を管轄する地方裁判所の管轄に専属する。
ウ．甲社が会社法上の公開会社である場合において，甲社がＡの責任を追及する訴えを提起したときは，甲社は，遅滞なく，その旨を公告し，かつ，株主に通知しなければならない。
エ．Ｂが，甲社のために，Ａの責任を追及する訴えを提起した場合において，その訴訟の係属中に，甲社の株式移転によりＢが甲社の株主でなくなったときでも，Ｂがその株式移転により甲社の完全親会社の株主となったときは，Ｂは，原告適格を失わない。
オ．Ｂが甲社のために提起したＡの責任を追及する訴えに係る請求を認容する確定判決の効力は，甲社に対しても及ぶが，その請求を棄却する確定判決の効力は，甲社には及ばない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2013",num:"51",subject:"syo",q:`商業登記に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．株式会社の代表取締役の就任は，その登記の前でも，悪意の第三者に対抗することができる。
イ．株式会社の支配人の退任による代理権の消滅は，その登記の後でも，第三者が正当な事由によってその登記があることを知らなかったときは，その第三者に対抗することができない。
ウ．判例の趣旨によれば，株式会社の代表取締役は，その登記の後でなければ，民事訴訟における当事者である株式会社を代表する権限を有する者とはならない。
エ．判例の趣旨によれば，個人商人が支配人を選任した場合には，その登記の前でも，その支配人と取引をした第三者は，その個人商人に支配人の選任を対抗することができる。
オ．個人商人は，その商号を定めたときは，その登記をしなければならない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2013",num:"52",subject:"syo",q:`商行為に関する規定の適用についての次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．判例の趣旨によれば，会社の行為は，商行為と推定され，これを争う者において，その行為がその会社の事業のためにするものでないことの主張立証責任を負う。
イ．商行為の委任による代理の場合であっても，代理権は，本人の死亡によって消滅する。
ウ．商人が平常取引をする者からその営業の部類に属する契約の申込みを受けた場合において，遅滞なく諾否の通知を発することを怠ったときは，その商人は，その契約の申込みを承諾したものとみなされる。
エ．判例の趣旨によれば，商行為によって生じた債務の不履行による損害賠償債務についての法定利率は，年５分である。
オ．判例の趣旨によれば，会社法第４２３条第１項に基づく株式会社の取締役に対する損害賠償請求権は，商行為によって生じた債権に当たり，その消滅時効期間は，５年である。
（参照条文）会社法
第４２３条 
取締役，会計参与，監査役，執行役又は会計監査人（以下この節において「役員等」という。）は，その任務を怠ったときは，株式会社に対し，これによって生じた損害を賠償する`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2013",num:"53",subject:"syo",q:`陸上における物品の運送契約に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。なお，各記述に係る事項について運送契約上別段の定めはなく，また，運送契約に関して貨物引換証は発行されていないものとする。
ア．運送品の滅失，毀損又は延着の場合における運送契約の債務不履行に基づく運送人の損害賠償責任の消滅時効期間は，運送人に悪意があるときを除き，１年である。
イ．高価品について運送契約が締結される際に，高価品の種類及び価額の明告がされなかった場合には，運送契約の債務不履行による損害賠償の額は，運送品が高価品でなかったとしたときに生ずるであろう損害の額が上限となる。
ウ．運送人に対して運送契約によって生ずる権利を有するのは荷送人であって，荷受人が運送契約によって生ずる権利を取得することはない。
エ．判例によれば，運送人の故意又は過失により運送品が滅失し，荷送人に損害が生じた場合には，荷送人は，運送人に対し，運送契約に基づく債務不履行責任のみを追及することができ，不法行為責任を追及することはできない。
オ．運送人の過失（重大な過失を除く。）によって運送品の全部が滅失した場合には，運送契約の債務不履行による損害賠償の額は，運送品の引渡しがあるべき日における到達地での運送品の価格によって定まる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2013",num:"54",subject:"syo",q:`手形上の記載からは，約束手形の振出しが法人のためにされたものであるとも，代表者個人のためにされたものであるとも解し得る場合には，手形所持人は，法人及び代表者個人のいずれに対しても手形金の請求をすることができるとの見解がある。次のアからオまでの各記述のうち，この見解と整合しないものを組み合わせたものは，後記１から５までのうちどれか。
ア．法人の代表者が法人のために手形行為をする場合の代表機関としての表示は，法人のためにされたものであることを認識し得る程度に手形上記載すれば足りる。
イ．手形上の記載を解釈するに当たっては，一般の社会通念に従ってその記載の趣旨を合理的に判断すべきである。
ウ．手形上，法人名と個人名とが併記されている場合には，法人の代表者である旨の記載がなくても，法人の代表者が法人のために手形行為をする場合の代表機関としての表示と解釈すべきである。
エ．この手形金の請求を受けた者は，その振出しが真実いずれの趣旨でされたかを知っていた直接の相手方に対し，その旨の人的抗弁を主張することができる。
オ．手形上の記載を解釈するに当たっては，手形外の証拠もしんしゃくすることができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2013",num:"55",subject:"syo",q:`小売商Ａと卸売商Ｂは，Ａを買主とし，Ｂを売主とする衣料品の売買契約（以下「本件売買契約」という。）を締結し，その売買代金債務（以下「本件原因債務」という。）の支払を目的として，Ａは，Ｂを受取人とする確定日払の約束手形（以下「本件手形」という。）を振り出した。Ｂは，本件手形を誰にも譲渡していない。この取引におけるＡ・Ｂ間の法律関係に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ｂが，本件売買契約に基づく衣料品の納入に係る債務を履行しないまま，支払呈示期間内に本件手形の支払呈示をした場合でも，Ａは，手形金の支払を拒むことはできない。
イ．判例によれば，本件手形の振出し後に本件原因債務が時効により消滅した場合には，Ａは，これを抗弁として，Ｂに対し，手形金の支払を拒むことができる。
ウ．Ｂが支払呈示期間内に本件手形の支払呈示をすることを怠っても，ＢのＡに対する本件手形上の権利は，消滅しない。
エ．火災によりＢが本件手形を焼失した場合には，Ｂは，Ａに対し，手形金の支払を求めることはできない。
オ．ＡとＢが，本件手形の振出しの際，本件原因債務を消滅させ，本件手形上の権利だけを残すことを合意していた場合において，本件手形上の権利が時効により消滅したときは，Ｂは，Ａに対し，利得償還請求権を取得しない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2013",num:"56",subject:"mso",q:"大阪市に居住するＸが，東京都千代田区に居住するＹに対し，貸金１００万円の返還を求める訴えを提起した。この場合における訴訟の移送に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．Ｘがこの訴えを東京簡易裁判所に提起した場合には，東京簡易裁判所は，相当と認めるときは，申立てにより又は職権で，訴訟を東京地方裁判所に移送することができる。",c2:"２．Ｘがこの訴えを大阪簡易裁判所に提起した後，Ｙから訴訟を東京簡易裁判所に移送する旨の申立てがあり，Ｘが移送に同意した場合であっても，大阪簡易裁判所は，移送により著しく訴訟手続を遅滞させることとなるときは，訴訟を東京簡易裁判所に移送しないことができる。",c3:"３．Ｘがこの訴えを大阪簡易裁判所に提起し，同裁判所が，Ｙの申立てにより，合意された管轄裁判所である名古屋簡易裁判所に訴訟を移送し，この移送の裁判が確定した場合であっても，名古屋簡易裁判所は，Ｘの申立てにより，この管轄の合意が無効であることを理由に，訴訟を大阪簡易裁判所に移送することができる。",c4:"４．この訴訟の管轄を東京地方裁判所とする旨の合意がないにもかかわらず，Ｘがこの訴えを同裁判所に提起した場合であっても，東京地方裁判所は，相当と認めるときは，申立てにより又は職権で，訴訟について自ら審理及び裁判をすることができる。",c5:"５．この訴訟の管轄を東京簡易裁判所の専属管轄とする旨の合意があるにもかかわらず，Ｘがこの訴えを東京地方裁判所に提起した場合には，東京地方裁判所は，相当と認めるときは，Ｙの移送の申立てにより，訴訟について自ら審理及び裁判をすることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2013",num:"57",subject:"mso",q:"訴訟能力に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．成年被後見人が自らした訴訟行為は，取り消すことができる。",c2:"２．婚姻している未成年者は，自ら訴訟行為をすることができる。",c3:"３．未成年者は，人事訴訟においては，意思能力を有する限り，自ら訴訟行為をすることができる。",c4:"４．被保佐人が相手方の提起した訴えにおいて請求原因事実を認める旨の陳述をするには，保佐人の同意を要しない。",c5:"５．家庭裁判所は，被補助人が訴訟行為をするには補助人の同意を要する旨の審判をすることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2013",num:"58",subject:"mso",q:"訴訟承継に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．貸金返還請求訴訟の係属中に，当事者が死亡したときは，その者の相続人は，相続の放棄をしない限り，当事者となる。",c2:"２．貸金返還請求訴訟の係属中に，訴訟物とされている貸金債権を譲り受けた者は，参加承継の申立てをして訴訟を承継する義務を負う。",c3:"３．貸金返還請求訴訟の係属中に，訴訟物とされている貸金債権を譲り受けた者が適法に参加承継をしたときは，その参加は，訴訟の係属の初めにさかのぼって時効の中断の効力を生ずる。",c4:"４．貸金返還請求訴訟の係属中に，訴訟物とされている貸金債権を譲り受けた者が適法に参加承継をしたときは，参加前の原告は，相手方の承諾を得ることなく訴訟から脱退する。",c5:"５．貸金返還請求訴訟の係属中に，訴訟物とされている貸金債権に係る債務を第三者が引き受けたときは，原告は，当該第三者に対して，訴訟引受けの申立てをすることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"24"},{year:"2013",num:"59",subject:"mso",q:"株式会社が訴訟の当事者である場合に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．株式会社がその事業を停止し，その事務所又は営業所が存在しなくなったときは，当該株式会社の普通裁判籍は，代表者その他の主たる業務担当者の住所により定まる。",c2:"２．株式会社に代表者がない場合において，当該株式会社に対し訴えを提起しようとする者は，遅滞のため損害を受けるおそれがあることを疎明して，特別代理人の選任を申し立てることができる。",c3:"３．株式会社に対する送達は，その訴訟において会社を代表すべき者の住所においてしなければ，その効力を有しない。",c4:"４．株式会社を訴訟において代表している代表取締役を尋問するには，当事者本人の尋問の手続によらなければならない。",c5:"５．判決書には，株式会社の代表者を記載しなければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2013",num:"60",subject:"mso",q:"訴訟代理人（訴訟委任に基づく訴訟代理人に限る。以下同じ。）に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．訴訟代理人の権限は，書面で証明しなければならない。",c2:"２．解任による訴訟代理権の消滅は，本人又は解任された訴訟代理人から相手方に通知しなければ，その効力を生じない。",c3:"３．当事者が死亡しても，訴訟代理人の訴訟代理権は消滅しない。",c4:"４．当事者に複数の訴訟代理人がいる場合には，各訴訟代理人は，単独で訴訟行為をすることができない。",c5:"５．訴訟代理人の代理権の存否に疑義が生じたときは，裁判所は，職権で調査をしなければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2013",num:"61",subject:"mso",q:"送達に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．訴状の当事者欄に記載された被告の住所に送達を受けるべき場所と記されていた場合には，書類を差し置くことができる。",c2:"２．送達場所において，送達を受けるべき者が正当な理由なく送達書類の受領を拒否したときは，送達場所の届出としての効力が生ずる。",c3:"３．判例の趣旨によれば，妻が夫に無断で夫を連帯保証人として銀行から借入れをし，銀行が夫に対し保証債務履行請求訴訟を提起した場合において，訴状を夫の住所地で送達するときは，同居中の妻がこれを受領しても，補充送達として有効である。",c4:"４．書留郵便に付する送達がされたときは，書類の発送の時に，送達があったものとみなされる。",c5:"５．反訴状の送達は，本訴の期日に出頭した原告に対しては，裁判所書記官が自らすることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2013",num:"62",subject:"mso",q:`次のアからオまでの各記述のうち，訴訟手続が中断しない場合の組合せとして正しいものは，後記１から５までのうちどれか。ただし，いずれの場合も当事者に訴訟委任に基づく訴訟代理人はないものとする。
ア．当事者である破産管財人が解任された場合
イ．当事者が支配人によって訴訟追行している場合において，当該支配人が辞任したとき
ウ．当事者が法人でない社団であって代表者の定めがある場合において，当該代表者が辞任したとき
エ．被告が訴訟上の特別代理人によって訴訟追行している場合において，当該特別代理人が改任されたとき
オ．複数の選定当事者のうちの一人が死亡した場合`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2013",num:"63",subject:"mso",q:`Ｘは，甲土地を前所有者であるＡから買い受けたところ，Ｙが同土地を占有しているとして，Ｙに対し，所有権に基づく甲土地の明渡しを求める訴えを提起した。これに対し，Ｙが次のアからオまでの各主張をした場合において，その主張がＸの請求原因に対する抗弁を含まないものの組合せとして正しいものは，後記１から５までのうちどれか。
ア．Ｘが甲土地をＡから買い受けたことはなく，甲土地は，現在もＡが所有している。
イ．Ｘは，甲土地をＡから買い受けた後，Ｂに売り渡した。
ウ．Ｘは，甲土地をＡから買い受けたが，Ｙも，甲土地をＡから買い受けた上で自らに対する所有権移転登記を経由した。
エ．Ｙの占有は，Ｘが甲土地を買い受ける前から，同土地をＡから無償で借り受けていることに基づく。
オ．Ｙの占有は，Ｘが甲土地を買い受けた後，同土地をＸから賃借していることに基づく。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2013",num:"64",subject:"mso",q:`口頭弁論の終結に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．終結した口頭弁論を再開した場合には，裁判官が代わっていない場合であっても，弁論の更新の手続を要する。
イ．訴えを不適法であるとして却下する判決をする場合には，口頭弁論を経たときであっても，口頭弁論を終結する必要はない。
ウ．口頭弁論の終結後においてする和解の期日に，口頭弁論終結時の裁判官以外の裁判官が関与することは許される。
エ．第一審の口頭弁論の終結後に当事者から書証として提出された文書は，第一審判決の資料とすることはできないが，控訴審において第一審の口頭弁論の結果が陳述された場合には，訴訟記録につづられていれば，当該文書も証拠として控訴審における判決の資料となる。
オ．反訴を提起することができるのは，本訴の事実審の口頭弁論の終結に至るまでである。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2013",num:"65",subject:"mso",q:"準備書面に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．準備書面は，記載した事項につき相手方が準備するのに必要な期間をおいて，裁判所を通じて相手方に送達しなければならない。",c2:"２．相手方が口頭弁論期日に出頭した場合には，準備書面に記載のない事項でも陳述することができる。",c3:"３．準備書面は，裁判所に提出されただけでは，判決の基礎とすることができない。",c4:"４．口頭弁論は，簡易裁判所においても，書面で準備しなければならない。",c5:"５．当事者は，裁判長が定めた期間内に提出しなかった準備書面を，口頭弁論期日において陳述することができない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"23"},{year:"2013",num:"66",subject:"mso",q:"職権証拠調べの可否に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．裁判所は，管轄の原因事実について，職権で，証拠調べをすることができる。",c2:"２．裁判所は，当事者が訴訟において引用した文書を自ら所持するときは，証拠調べのため，職権で，その提出を命ずることができる。",c3:"３．裁判所は，訴訟の係属中，職権で，証拠保全をすることができる。",c4:"４．裁判所は，検証をするに当たり，職権で，鑑定を命ずることができる。",c5:"５．裁判所は，人事訴訟においては，職権で，証拠調べをすることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2013",num:"67",subject:"mso",q:"民事訴訟における宣誓又は証言若しくは陳述の拒絶に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．少額訴訟においては，証人の尋問は，宣誓をさせないですることができる。",c2:"２．鑑定人は，宣誓をしなければならない。",c3:"３．１６歳未満の者を証人として尋問する場合には，宣誓をさせることができない。",c4:"４．証人は，証人自身が刑事訴追を受けるおそれがある事項について，証言を拒絶することができる。",c5:"５．当事者本人を尋問する場合において，その当事者が，正当な理由なく陳述を拒んだときは，罰金又は過料の制裁を受ける。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2013",num:"68",subject:"mso",q:`私文書の成立に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。なお，各記述におけるＡはいずれも被告であり，かつ，私人であるとする。
ア．Ａ名義で事件の経過を記載した報告書は，Ａの意思に基づいて作成されたことが認められれば，その内容が真実であると推定される。
イ．作成者をＡとして提出されたが，Ａの署名も押印もない文書につき，裁判所は，他の証拠を併せて考慮することにより，その文書がＡの意思に基づいて作成されたと認定することができる。
ウ．作成者をＡとして提出された借用証書につき，Ａが借主欄に署名したことは認められるが，署名後に金額欄の記載が改ざんされたとＡが主張する場合には，当該借用証書は，真正に成立したものと推定されない。
エ．判例の趣旨によれば，Ａの氏名が記された印影が私文書中に顕出されている場合には，その文書は，Ａを作成者として真正に成立したものと推定される。
オ．作成者をＡとして提出された文書にＡの署名がある場合には，押印がないときであっても，その文書は，真正に成立したものと推定される。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2013",num:"69",subject:"mso",q:`処分権主義に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．訴訟物が特定されない訴状は，裁判長の命令にもかかわらず原告がその不備を補正しないときは，裁判長の命令により却下される。
イ．原告が給付判決を求めている場合において，訴訟物とされている請求権の履行期が到来していないことが明らかになったときは，裁判所は，当該請求権の存在を確認する判決をすることができる。
ウ．家屋明渡請求訴訟において，留置権の抗弁が認められるときは，裁判所は，当該留置権により担保される債権の弁済を受けることと引換えに家屋の引渡しを命ずる。
エ．債務の全額である１００万円についての不存在確認を求める訴訟において，裁判所は，当該債務の一部である１０万円の債務が存在すると認めるときは，１００万円のうち１０万円を超える債務の不存在を確認し，その余の請求を棄却する。
オ．共有物分割の訴えにおいて，原告が分割の方法として共有物の現物を分割することを求めているときは，裁判所は，当該共有物を競売してその売得金で分割する内容の判決をすることができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2013",num:"70",subject:"mso",q:"確定判決の既判力に関する次の１から５までの各記述のうち，判例の趣旨に照らし誤っているものを２個選びなさい。",c1:"１．貸金返還請求訴訟において，被告がその債務につき消滅時効が完成していたのに援用の意思表示をしないまま口頭弁論が終結し，請求認容判決が確定した場合であっても，被告は，その後にした時効の援用の効果を請求異議の事由として主張することができる。",c2:"２．貸金返還請求訴訟において，被告が原告に対する反対債権を有し相殺適状にあったのに相殺の意思表示をしないまま口頭弁論が終結し，請求認容判決が確定した場合であっても，被告は，その後にした相殺の意思表示の効果を請求異議の事由として主張することができる。",c3:"３．売買による所有権の取得を請求原因として買主が提起した所有権確認訴訟において，売主である被告が詐欺を理由として当該売買契約の取消しをすることができたのにこれをしないまま口頭弁論が終結し，請求認容判決が確定した場合であっても，被告は，自己の所有権の確認を求める後訴において当該売買契約の取消しを主張して買主の所有権の取得を争うことができる。",c4:"４．土地の賃貸人から提起された建物収去土地明渡請求訴訟において，賃借人である被告が建物買取請求権を行使しないまま口頭弁論が終結し，請求認容判決が確定した場合であっても，被告は，その後にした建物買取請求権の行使の効果を請求異議の事由として主張することができる。",c5:"５．将来の賃料相当額の損害金請求を認容する判決が確定した場合であっても，その後，土地価格の昂騰等の事情によって当該判決の認容額が不相当となったときは，原告は，後訴により，当該認容額と適正賃料額との差額に相当する損害金の支払を求めることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"13"},{year:"2013",num:"71",subject:"mso",q:"仮執行宣言に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．財産上の請求に関する判決であって手形又は小切手による金銭の支払及びそれに附帯する法定利率による損害賠償の請求に関するもの以外のものについては，裁判所は，当事者の申立てがなければ，仮執行宣言をすることができない。",c2:"２．裁判所は，判決に仮執行宣言を付すときは，申立てにより又は職権で，担保を立てて仮執行を免れることができることを宣言することができる。",c3:"３．仮執行宣言は，本案判決を変更する判決の言渡しにより，仮執行宣言を取り消す裁判をしなくても，変更の限度においてその効力を失う。",c4:"４．判例の趣旨によれば，貸金返還請求訴訟において，債権者が，仮執行宣言付きの第一審判決に基づく強制執行によって弁済を受けた場合には，控訴裁判所は，その弁済の事実をしん酌して第一審判決を取り消し，請求を棄却すべきである。",c5:"５．控訴裁判所は，第一審判決について不服の申立てがない部分に限り，当事者の申立てにより，決定で，仮執行宣言をすることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"14"},{year:"2013",num:"72",subject:"mso",q:"訴訟上の和解に関する次の１から５までの各記述のうち，判例の趣旨に照らし正しいものを２個選びなさい。",c1:"１．訴訟上の和解をするためには訴訟が適法に係属していることが必要であるから，重複する訴えの場合には，前訴が取り下げられない限り，後訴において訴訟上の和解をすることはできない。",c2:"２．訴訟上の和解には，当事者以外の第三者も加わることができるが，そのためには訴訟参加の手続を経ることを要する。",c3:"３．成立した訴訟上の和解について当事者の一方が錯誤無効を主張して和解の効力を争うためには，和解が無効であることの確認を求める別訴を提起しなければならない。",c4:"４．裁判所は，訴訟の係属後であれば，第１回口頭弁論期日前であっても，和解を試みることができる。",c5:"５．筆界（境界）確定の訴えにおいて，筆界を定める効果を有する内容の和解をすることはできない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"45"},{year:"2013",num:"73",subject:"mso",q:"控訴に関する次の１から５までの各記述のうち，判例の趣旨に照らし正しいものを２個選びなさい。",c1:"１．被告が第一審で請求棄却を求めた場合において，訴えを却下する判決が言い渡されたときは，被告には控訴の利益が認められない。",c2:"２．第一審判決が予備的相殺の抗弁を認めて原告の請求を棄却したのに対し，原告が控訴し，被告が控訴も附帯控訴もしない場合において，控訴裁判所が原告の請求債権はそもそも存在しないと判断するときは，控訴裁判所は，第一審判決を維持し，控訴を棄却しなければならない。",c3:"３．裁判所は，控訴審の第一回口頭弁論期日において初めて提出された攻撃又は防御の方法を，時機に後れたものとして却下することはできない。",c4:"４．一部請求であることを明示した訴えにおいて全部勝訴した原告は，被告が控訴をしたときは，附帯控訴により残部について請求を拡張することができる。",c5:"５．控訴審が原判決を取り消し，事件を原審に差し戻す判決をした場合には，それにより事件が原裁判所に移審するため，当該差戻判決に対して上告をすることはできない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"24"},{year:"2013",num:"74",subject:"mso",q:"上告審に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．最高裁判所は，上告理由や上告受理の申立ての理由において上告人が主張していない限り，判決に影響を及ぼすことが明らかな法令の違反が認められる場合であっても，原判決を破棄することはできない。",c2:"２．最高裁判所への上告も，高等裁判所への上告も，判決に憲法の解釈の誤りがあることその他憲法の違反がある場合のほか，重大な手続違反（絶対的上告理由）がある場合に限り，許される。",c3:"３．上告裁判所が，上告状，上告理由書，答弁書その他の書類を調査して上告に理由がないと判断したときは，口頭弁論を開かずに，上告棄却の判決をすることができる。",c4:"４．最高裁判所は，上告受理決定をする場合であっても，上告受理の申立ての理由中に重要でないと認めるものがあるときは，これを排除することができる。",c5:"５．判例の趣旨によれば，上告受理の申立てに対して附帯上告をし，又は上告に対して附帯上告受理の申立てをすることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"34"},{year:"2013",num:"1",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．法人事業主は，その従業者が法人の業務に関して行った犯罪行為について，両罰規定が定められている場合には，選任監督上の過失がなくても刑事責任を負う。",c2:"２．法人事業主を両罰規定により処罰するためには，現実に犯罪行為を行った従業者も処罰されなければならない。",c3:"３．法人事業主が処罰される場合には，その代表者も処罰される。",c4:"４．刑法各則に規定された行為の主体には，法人は含まれない。",c5:"５．刑法各則に規定された行為の客体には，法人は含まれない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2013",num:"2",subject:"kei",q:"監禁の罪に関する次の１から５までの各記述を判例の立場に従って検討し，正しいものを２個選びなさい。",c1:"１．甲は，自己が経営する飲食店で住み込みの従業員として違法に働かせていたＡ女が逃げたことから，これを連れ戻すため，Ａ女に対し，「お母さんが病気で入院していると連絡があった。これからその病院に連れて行くから，車に乗れ。」と嘘を言い，これを信じたＡ女を自己の運転する普通乗用自動車に乗車させて約１２キロメートル走行した。甲に監禁罪は成立しない。",c2:"２．甲は，身の代金取得の目的で７歳の子供Ａを拐取し，さらに，Ａの手足をロープで縛って逃げることができないようにして自室に閉じ込め，その間にＡの親に電話をかけて身の代金を要求した。甲に監禁罪は成立しない。",c3:"３．甲は，知人のＡ女をＡ女宅に送るため，自己が運転する原動機付自転車の後部荷台に乗せて走行していたが，途中でＡ女を強姦しようと考え，なおも走行を続けた。その後，甲の意図に気付いたＡ女が「降ろして。」と叫んだが，甲は，これを無視して，そのまま約１キロメートルの間，同車を疾走させた。甲には監禁罪が成立する。",c4:"４．甲は，自己の所属する暴力団の配下組員Ａに指を詰めさせることとし，嫌がるＡを無理やり普通乗用自動車に乗せて組事務所に連行し，約１時間半にわたってＡを監視したが，その間に，組事務所内において，Ａの左腕を押さえ付け，包丁でＡの小指を切断した。甲には監禁致傷罪が成立する。",c5:"５．甲は，通行中のＡ女を殴るなどして無理やり自己が運転する普通乗用自動車に乗せて同車を疾走させて連れ回そうと考え，同車を停めて運転席から降り，路上でＡ女に近づき，Ａ女を同車に連れ込むために，Ａ女の顔面を殴打して加療約２週間を要する顔面挫傷の傷害を負わせたが，Ａ女が甲に捕まえられることなく逃げたため，Ａ女を同車に乗せることはできなかった。甲に監禁致傷罪は成立しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"35"},{year:"2013",num:"3",subject:"kei",q:`次のアからオまでの各記述を判例の立場に従って検討した場合，正しいものの組合せは，後記１から５までのうちどれか。
ア．甲は，医師免許を有していなかったが，女性乙に対し，医学的に必要とされる措置をとることなく豊胸手術を行った。女性乙が豊胸手術に伴う身体傷害につきあらかじめ甲に対して承諾していた場合，甲に傷害罪（刑法第２０４条）は成立しない。
イ．甲は，民事訴訟の証拠調べの期日において，証人として宣誓の上，虚偽の陳述をした。原告乙及び被告丙の双方とも甲が虚偽の陳述をすることにつきあらかじめ甲に対して承諾していた場合，甲に偽証罪（刑法第１６９条）は成立しない。
ウ．甲は，重病の母親乙の首をロープで絞めて殺害した。乙が殺害につきあらかじめ甲に対して承諾していた場合，甲に殺人罪（刑法第１９９条）は成立しない。
エ．甲は，１２歳の女児乙の同意を得て，女児乙に対してわいせつな行為を行った。甲に準強制わいせつ罪（刑法第１７８条第１項）は成立しない。
オ．甲は，交通違反の取締りを受けた際，警察官に対し，乙の氏名を名乗り，交通事件原票の供述書欄に乙名義で署名押印した。乙が名義使用につきあらかじめ甲に対して承諾していた場合，甲に有印私文書偽造罪（刑法第１５９条第１項）は成立しない。`,c1:"１．ア イ",c2:"２．イ ウ",c3:"３．ウ エ",c4:"４．エ オ",c5:"５．オ ア",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2013",num:"4",subject:"kei",q:`次のアからオまでの各事例における甲の罪責について判例の立場に従って検討し，甲に窃盗罪が成立する場合には１を，成立しない場合には２を選びなさい。
ア．甲は，夜道を歩いていた際，乙が路上で倒れて急死したのを目撃し，乙が死亡しているのを認識した上で，乙の上着ポケットに入っていた財布を自分のものにしようと考え，これを取り出して自分のかばんにしまった。
イ．甲は，乙を強姦した直後，警察に通報されないよう乙の携帯電話を破壊するため，乙の持っていたかばんから，乙に気付かれないうちに乙の携帯電話を取り出してその場で破壊した。
ウ．甲は，自然湖であるＡ湖内で，同湖の一部を区切って錦鯉を養殖している乙のいけすから逃げ出した錦鯉２０匹を発見し，乙が養殖していた錦鯉であると認識しながら，これを自分のものにするため捕獲し，第三者に売却した。
エ．甲は，乙から鍵の掛かった乙の手提げ金庫を預かって保管していたが，同金庫の在中物を自分のものにしようと考え，同金庫を破壊し，中に入っていた乙の宝石を取り出し，第三者に売却した。
オ．甲は，Ａ駅行きの満員電車に乗っていた際，隣の席に座っていた乙がかばんを忘れたままＢ駅で下車したのを目撃し，乙のかばんとその中身を自分のものにしようと考え，次のＣ駅で乙のかばんを持って下車し，自宅に持ち帰った。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"22212"},{year:"2013",num:"5",subject:"kei",q:"責任能力に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．心神喪失とは，精神の障害により，行為の是非を弁識する能力及びこの弁識に従って行動する能力が欠けている場合をいう。",c2:"２．心神耗弱とは，精神の障害により，行為の是非を弁識する能力が欠けている若しくは著しく減退している場合，又はこの弁識に従って行動する能力が欠けている若しくは著しく減退している場合をいう。",c3:"３．１３歳であるが，行為の是非を弁識する能力及びこの弁識に従って行動する能力に欠けるところがない場合，責任能力が認められる。",c4:"４．精神鑑定により心神喪失と鑑定された場合には，裁判所は，被告人の責任能力を認めることはできない。",c5:"５．精神の障害がなければ，心神喪失は認められない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2013",num:"6",subject:"kei",q:"文書偽造の罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．甲は，Ａ公立高校を中途退学した乙から「父親に見せて安心させたい。それ以外には使わないからＡ公立高校の卒業証書を作ってくれ。」と頼まれ，乙の父親に呈示させる目的で，Ａ公立高校校長丙名義の卒業証書を丙に無断で作成した。甲には公文書偽造罪は成立しない。",c2:"２．甲は，自己の所有する土地の登記記録を改ざんしようと考え，法務局の担当登記官である乙にその情を打ち明けて記録の改ざんを依頼し，乙に登記簿の磁気ディスクに内容虚偽の記録をしてもらった。甲には電磁的公正証書原本不実記録罪，同供用罪の共同正犯が成立する。",c3:"３．甲は，行使の目的で，高齢のため視力が衰え文字の判読が十分にできない乙に対し，公害反対の署名であると偽り，その旨誤信した乙に，甲を貸主，乙を借主とする１００万円の借用証書の借主欄に署名押印させた。甲には私文書偽造罪が成立する。",c4:"４．甲と乙は，警察署に提出する目的で，県立病院の医師丙に内容虚偽の診断書を作成させる旨共謀し，甲が丙にこれを依頼したが，丙に断られたため，甲は，乙に相談することなく自ら県立病院医師丙名義で内容虚偽の診断書を作成した。乙には虚偽診断書作成罪の共同正犯が成立する。",c5:"５．甲は，行使の目的で，正規の国際運転免許証を発給する権限のない民間団体乙名義で，外観が正規の国際運転免許証に酷似する文書を作成した。甲は，乙からその文書の作成権限を与えられていたが，乙に正規の国際運転免許証を発給する権限がないことは知っていた。甲には私文書偽造罪は成立しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2013",num:"7",subject:"kei",q:`刑法第６５条に関する次のⅠないしⅢの各【見解】についての後記１から５までの各【記述】のうち，誤っているものはどれか。
【見 解】
Ⅰ．刑法第６５条第１項は真正身分犯の成立及び科刑についての規定であり，同条第２項は不真正身分犯の成立及び科刑についての規定である。
Ⅱ．刑法第６５条第１項は身分が違法性に関係する場合についての規定であり，同条第２項は身分が責任に関係する場合についての規定である。
Ⅲ．刑法第６５条第１項は真正身分犯・不真正身分犯を通じて共犯の成立についての規定であり，同条第２項は不真正身分犯の科刑についての規定である。
【記 述】`,c1:"１．Ⅰの見解に対しては，真正身分犯が身分を連帯的に作用させ，不真正身分犯が身分を個別的に作用させることの実質的根拠が明らかでないとの批判がある。",c2:"２．Ⅱの見解に対しては，身分が違法性に関係する場合と身分が責任に関係する場合を区別することは困難であるとの批判がある。",c3:"３．Ⅲの見解は，刑法第６５条第１項が「共犯とする」と規定し，同条第２項が「通常の刑を科する」と規定していることを根拠の一つとしている。",c4:"４．Ⅰの見解に立った場合，甲が愛人である乙を唆して，乙が介護していた乙の老母の生存に必要な保護をやめさせた事例では，甲には保護責任者遺棄罪の教唆犯が成立し，科刑は単純遺棄罪の刑となる。",c5:"５．Ⅲの見解に立ちつつ，常習賭博罪における常習性が身分に含まれると解した場合，賭博の非常習者である甲が賭博の常習者乙を唆して，乙に賭博をさせた事例では，甲には常習賭博罪の教唆犯が成立し，科刑は単純賭博罪の刑となる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2013",num:"8",subject:"kei",q:"犯人蔵匿等の罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，誤っているものはどれか。",c1:"１．甲は，窃盗事件を犯して逃亡中の乙を自宅にかくまったが，かくまった時点では，既にその窃盗事件の公訴時効が完成していた。甲には，犯人蔵匿罪は成立しない。",c2:"２．甲は，強盗事件を犯して逃亡中の乙の所在を知っていたが，その所在を警察官に尋ねられた際，その質問に答えなかった。甲には，犯人隠避罪が成立する。",c3:"３．甲は，強盗事件を犯した息子乙を逮捕から免れさせるため，乙に逃走資金を与えた。甲には，犯人隠避罪が成立する。",c4:"４．甲は，自動車運転過失致死事件の被告人として裁判を受けていた乙が保釈中であることを知りながら，乙を逃亡させるため，乙にその資金を与えた。甲には，犯人隠避罪が成立する。",c5:"５．甲は，強姦事件を犯して逃亡中，告訴権者からの告訴がない時点で，友人乙に強姦事件を犯して逃げているのでかくまってほしい旨依頼して乙宅に一晩かくまってもらった。甲には，犯人蔵匿罪の教唆犯が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2013",num:"9",subject:"kei",q:`刑罰に関する次のアからオまでの各記述を検討し，正しい場合には１を，誤っている場合には２を選びなさい。
ア．自由刑には，懲役，禁錮及び労役場留置が含まれる。
イ．財産刑には，罰金，没収及び追徴が含まれる。
ウ．有期の懲役又は禁錮は，１月以上１５年以下であり，これを加重する場合においては３０年にまで上げることができる。
エ．有期の懲役又は禁錮を減軽する場合においては１月未満に下げることができる。
オ．懲役は，受刑者を刑事施設に拘置して所定の作業を行わせる刑罰であり，禁錮は，受刑者を刑事施設に拘置する刑罰である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"22211"},{year:"2013",num:"10",subject:"kei",q:`次の【事案及び判旨】に関する後記１から５までの各【記述】のうち，判旨の理解として誤っているものはどれか。
【事案及び判旨】
精神科の医師である甲が，犯行時１６歳の少年Ａが犯した殺人罪に関する保護事件が係属している家庭裁判所からＡの精神鑑定を命ぜられた際，鑑定資料として家庭裁判所から交付されたＡの捜査機関に対する供述調書の謄本を新聞記者に閲覧させたため，Ａが甲を秘密漏示罪で告訴した事案につき，裁判所は，甲の行為は秘密漏示罪に該当し，訴訟条件にも欠けるところはない旨判示し，甲に有罪判決を言い渡した。
【記 述】`,c1:"１．この判旨は，甲が医師の身分を有していることを前提に秘密漏示罪の成立を認めたものである。",c2:"２．この判旨は，裁判手続等において後に公開される可能性のある事項であっても，秘密漏示罪における「人の秘密」として保護の対象になり得ると考えている。",c3:"３．この判旨は，甲が医師の業務としてＡの精神鑑定を行ったことを前提に秘密漏示罪の成立を認めたものである。",c4:"４．この判旨は，秘密漏示罪における「人の秘密」について，Ａの秘密ではなく，甲に鑑定を命じた家庭裁判所の秘密であると考えている。",c5:"５．この判旨からは，秘密漏示罪の「人の秘密」の主体が，自然人のみならず，法人・団体を含むかどうかは必ずしも明らかではない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2013",num:"11",subject:"kei",q:`次の【事例】及び【判旨】に関する後記１から５までの各【記述】のうち，正しいものはどれか。
【事 例】
甲は，手の平で患部をたたいてエネルギーを患者に通すことにより自己治癒力を高めるとの独自の治療を施す特別の能力を有すると称していたが，その能力を信奉していたＡから，脳内出血を発症した親族Ｂの治療を頼まれ，意識障害があり継続的な点滴等の入院治療が必要な状態にあったＢを入院中の病院から遠く離れた甲の寄宿先ホテルの部屋に連れてくるようＡに指示した上，実際に連れてこられたＢの様子を見て，そのままでは死亡する危険があることを認識しながら，上記独自の治療を施すにとどまり，点滴や痰の除去等Ｂの生命維持に必要な医療措置を受けさせないままＢを約１日間放置した結果，Ｂを痰による気道閉塞に基づく窒息により死亡させた。
【判 旨】
甲は，自己の責めに帰すべき事由によりＢの生命に具体的な危険を生じさせた上，Ｂが運び込まれたホテルにおいて，甲を信奉するＡから，重篤な状態にあったＢに対する手当てを全面的に委ねられた立場にあったものと認められる。その際，甲は，Ｂの重篤な状態を認識し，これを自らが救命できるとする根拠はなかったのであるから，直ちにＢの生命を維持するために必要な医療措置を受けさせる義務を負っていたものというべきである。それにもかかわらず，未必的な殺意をもって，上記医療措置を受けさせないまま放置してＢを死亡させた甲には，不作為による殺人罪が成立する。
【記 述】`,c1:"１．Ａが甲に対してその特別の能力に基づく治療を行うことを真摯に求めていたという事情があれば，甲にはその治療を行うことについてのみ作為義務が認められるから，この判旨の立場からも殺人罪の成立は否定される。",c2:"２．判旨の立場によれば，この事例で甲に患者に対する未必的な殺意が認められなければ，重過失致死罪が成立するにとどまる。",c3:"３．判旨は，不作為犯が成立するためには，作為義務違反に加え，既発の状態を積極的に利用する意図が必要であると考えている。",c4:"４．判旨は，Ａが甲の指示を受けてＢを病院から搬出した時点で，甲に殺人罪の実行の着手を認めたものと解される。",c5:"５．判旨は，先行行為についての甲の帰責性と甲による引受行為の存在を根拠に，甲のＢに対する殺人罪の作為義務を認めたものと解される。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2013",num:"12",subject:"kei",q:"強盗の罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，誤っているものはどれか。",c1:"１．甲は，乙に対し，金品を奪うために，反抗を抑圧するに足りる程度の暴行を加え，その反抗を抑圧して乙から財布を奪ったが，乙は財布を奪われたことに気付かなかった。甲には強盗既遂罪が成立する。",c2:"２．甲は，乙宅で財布を窃取し，誰からも追跡されることなく，約２キロメートル離れた場所まで徒歩で移動した後，窃取した財布の中を見たが，予想していたよりも現金が少なかったことから，再び窃盗を行う目的で乙宅に戻り，玄関を開けたところ，帰宅していた乙に発見され，逮捕を免れるために，乙に対し，反抗を抑圧するに足りる程度の暴行を加えた。甲には事後強盗既遂罪は成立しない。",c3:"３．甲は，電車内で乗客のポケットから財布を窃取した直後，その犯行状況を目撃して甲を逮捕しようとした警察官乙に対し，逮捕を免れるために，反抗を抑圧するに足りる程度の暴行を加えたが，乙に逮捕された。甲には事後強盗未遂罪が成立する。",c4:"４．甲は，空き巣を行う目的で乙宅に侵入したところ，たまたま留守番をしていた乙の甥である１０歳の丙に発見され，金品を奪うために，丙に対し，反抗を抑圧するに足りる程度の暴行を加え，その反抗を抑圧して寝室のタンス内にあった乙名義の預金通帳と印鑑を奪った。甲には強盗既遂罪が成立する。",c5:"５．甲は，飲食店において，代金を支払う意思及び能力がないのに，店長乙をだまして酒食を注文し，飲食した後，代金の支払いを免れるために，乙に対し，反抗を抑圧するに足りる程度の暴行を加え，その反抗を抑圧して逃走し，代金請求を免れた。甲には強盗既遂罪が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2013",num:"13",subject:"kei",q:"正当防衛に関する次の１から５までの各記述を判例の立場に従って検討し，誤っているものを２個選びなさい。",c1:"１．正当防衛について侵害の急迫性を要件としているのは，予期された侵害を避けるべき義務を課する趣旨ではないが，単に予期された侵害を避けなかったというにとどまらず，その機会を利用し積極的に相手に対して加害行為をする意思で侵害に臨んだときは，侵害の急迫性の要件を欠く結果，そのような侵害に対する反撃行為に正当防衛が認められることはない。",c2:"２．憎悪や怒りの念を抱いて侵害者に対する反撃行為に及んだ場合には，防衛の意思を欠く結果，防衛のための行為と認められることはない。",c3:"３．相手からの侵害が，それに先立つ自らの攻撃によって触発されたものである場合には，不正の行為により自ら侵害を招いたことになるから，相手からの侵害が急迫性を欠く結果，これに対する反撃行為に正当防衛が認められることはない。",c4:"４．刑法第３６条にいう「権利」には，生命，身体，自由のみならず名誉や財産といった個人的法益が含まれるので，自己の財産権への侵害に対して相手の身体の安全を侵害する反撃行為に及んでも正当防衛となり得る。",c5:"５．正当防衛における「やむを得ずにした」とは，急迫不正の侵害に対する反撃行為が，自己又は他人の権利を防衛する手段として必要最小限度のものであること，すなわち反撃行為が侵害に対する防衛手段として相当性を有するものであることを意味し，反撃行為が防衛手段として相当性を有する以上，その反撃行為により生じた結果がたまたま侵害されようとした法益より大であっても，その反撃行為が正当防衛でなくなるものではない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"23"},{year:"2013",num:"14",subject:"kei",q:`放火の罪に関する次のアからオまでの各記述を判例の立場に従って検討し，正しい場合には１を，誤っている場合には２を選びなさい。
ア．「放火」とは，目的物の焼損を惹起させる行為をいい，媒介物を介して目的物に点火する場合には，媒介物に点火することも含まれる。
イ．「焼損」とは，火力により目的物の重要部分が焼失し，その本来の効用が失われた状態をいう。
ウ．「建造物」とは，家屋その他これに類する工作物であって，土地に定着し，人の起居出入に適する構造を有するものをいう。
エ．「建造物」には，家屋の和室に敷かれている畳も含まれる。
オ．「現に人が住居に使用し」の「人」には，犯人が含まれる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"12122"},{year:"2013",num:"15",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合，誤っているものはどれか。",c1:"１．罰則を定めた特別法の法条に，過失行為を処罰する旨の明文の規定がない場合であっても，当該特別法の目的から，罰則を定めた法条に過失行為を処罰する趣旨が包含されていると認められるときには，同法条が刑法第３８条第１項ただし書に規定される特別の規定となり，過失による行為を処罰することが可能である。",c2:"２．業務上過失致死傷罪の「業務」とは，社会生活上の地位に基づいて反復継続して行われ，または，反復継続して行う意思をもって行われる行為であり，他人の生命・身体等に危害を加えるおそれがあるものをいう。",c3:"３．重過失致死傷罪の「重過失」とは，行為者としてわずかな注意を払えば，結果発生を予見することができ，結果の発生を回避できた場合をいう。",c4:"４．複数の行為者につき，行為者共同の注意義務が観念でき，行為者がその共同の注意義務に違反し，共同の注意義務違反と発生した結果との間に因果関係が認められる場合には，過失犯の共同正犯が成立し得る。",c5:"５．過失行為を行った者を監督すべき地位にある者の過失の有無を判断する際には，信頼の原則は適用されない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2013",num:"16",subject:"kei",q:`次のアからオまでの各事例における甲の罪責について判例の立場に従って検討し，甲に公務執行妨害罪が成立する場合には１を，成立しない場合には２を選びなさい。
ア．甲は，県議会の議事が紛糾し，議長乙が休憩を宣言して壇上から降りようとした際，乙の顔面をげんこつで殴った。
イ．甲は，日本国内にある外国の大使館の職員乙がその大使館の業務に従事していた際，乙の腹部を足で蹴った。
ウ．甲は，警察官乙から捜索差押許可状に基づき自宅の捜索を受け，覚せい剤入りの注射器を差し押さえられた際，乙の眼前で同注射器を足で踏み付けて壊した。
エ．甲は，無許可のデモ行進に参加していた際，これを解散させようとした警察官乙に向かって石を１回投げ，その石は乙の頭部付近をかすめたが，乙には命中しなかった。
オ．甲は，執行官から確定判決に基づき居室明渡しの強制執行を受けていた際，執行官の補助者であった民間人乙の頭部を棒で殴った。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"12111"},{year:"2013",num:"17",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．甲は，生活費欲しさから強盗を計画し，１２歳の長男乙に対し，Ｖから現金を強取するよう指示した。乙は，甲の指示に従い，Ｖに刃物を突き付けて現金を強取した。乙が是非善悪の判断能力を有していたか否か，甲の指示により意思を抑圧されていたか否かにかかわらず，甲には強盗罪の間接正犯が成立する。",c2:"２．甲は，通常の判断能力がないＶの殺害を計画し，Ｖに対し，首をつっても仮死状態になるだけであり，必ず生き返るとだまして，Ｖに首をつらせて窒息死させた。甲には自殺関与罪が成立する。",c3:"３．甲と乙は，自分たちのことを日頃ばかにするＶを懲らしめてやろうと思い，Ｖに傷害を負わせる旨共謀した。そして，甲と乙は，それぞれ，Ｖに対し，日頃の恨みを言いながら，その身体を殴り付けた。Ｖは，これに応答して甲らを罵った。すると，乙は，Ｖの発言に腹を立て，殺意をもって，隠し持っていたナイフでＶを刺し殺した。乙に殺人罪が成立する場合，甲には，Ｖに対する殺意がなくても殺人罪の共同正犯が成立する。",c4:"４．甲は，Ｖ宅に石を投げ付け窓ガラスを割り始めた。これをたまたま見た乙は，自分も窓ガラスを割りたいと思い，甲に気が付かれないよう，Ｖ宅に石を投げ付け，甲が割った窓ガラスとは別の窓ガラスを割った。甲と乙には器物損壊罪の共同正犯は成立しない。",c5:"５．女性である甲は，甲の男友達である乙との間で，乙がＶを強姦する旨共謀した。その後，甲がＶを誘い出してＶの体を押さえ付け，乙がＶを強姦した。乙に強姦罪が成立する場合でも，甲には強姦罪の共同正犯は成立しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2013",num:"18",subject:"kei",q:"横領の罪に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．横領罪の「占有」とは，物に対して事実上の支配力を有する状態をいい，物に対して法律上の支配力を有する状態を含まない。",c2:"２．株式会社の代表取締役には，同社の所有物について，横領罪の「占有」は認められない。",c3:"３．横領罪の「物」は，窃盗罪における「財物」と同義であり，不動産は横領罪の客体とはならない。",c4:"４．法人の金員を管理する者が，同法人の金員を支出した場合，同支出が商法その他関係法令に照らして違法であっても，横領罪の「不法領得の意思」が認められないことがある。",c5:"５．業務上横領罪の「業務」には，社会生活上の地位に基づいて反復継続して行われる事務であれば，いかなる事務も含まれる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2013",num:"19",subject:"kei",q:`次の【事例】及び【見解】に関する後記１から５までの各【記述】のうち，正しいものはどれか。
【事 例】
Ａは，殺意をもって，Ｂを狙い，けん銃を発射したところ，その弾丸がＢを貫き，たまたまＢの背後を通行中のＣにも命中したが，Ｂ，Ｃ共に死亡しなかった。なお，Ａは，けん銃を発射した時点で，Ｃの存在を認識していなかった。
【見 解】
犯罪の故意があるとするには，罪となるべき事実の認識を必要とするものであるが，犯人が認識した罪となるべき事実と現実に発生した事実とが必ずしも具体的に一致することを要するものではなく，両者が法定の範囲内において一致することをもって足りる。人を殺す意思のもとに殺害行為に出た以上，犯人の認識しなかった人に対してその結果が発生した場合にも，その結果について殺人の故意があり，Ｂに対する所為についてはもちろんのこと，Ｃに対する所為についても殺人未遂罪が成立し，両罪は観念的競合となる。
【記 述】`,c1:"１．この【見解】によれば，甲が殺意をもって，乙を狙い，けん銃を発射したところ，弾丸が乙に命中したが，乙は死亡せず，乙を貫通した弾丸が甲が予期しなかった丙に命中して丙が死亡した場合，甲には，丙に対する殺人既遂罪が成立するが，乙に対する犯罪は成立しない。",c2:"２．この【見解】によれば，甲が殺意をもって，乙を狙い，けん銃を発射したところ，弾丸が乙に命中して乙が死亡し，乙を貫通した弾丸が甲が予期しなかった丙にも命中して丙も死亡した場合，甲には，乙に対する殺人既遂罪，丙に対する過失致死罪が成立する。",c3:"３．この【見解】に対しては，殺人罪は被害者ごとに成立する犯罪であるから，被害者の個別性は構成要件的に重要な事実であるとの批判がある。",c4:"４．この【見解】に対しては，いわゆる客体の錯誤の場合と方法の錯誤の場合とで故意の有無について結論が異なるのは不合理であるとの批判がある。",c5:"５．この【見解】に対しては，１人を殺す故意しかないのに，１人を殺した場合より処断刑が重くなるのは妥当ではないとの批判がある。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2013",num:"20",subject:"kei",q:`次の【事例】における甲の罪責に関する後記１から５までの各【記述】を判例の立場に従って検討し，正しいものを２個選びなさい。
【事 例】
甲は，深夜，帰宅しようと歩いていたところ，道端に見ず知らずのＡが重傷を負って倒れているのを見付けた。甲は，周囲にＡ以外の誰もおらず，Ａには意識があるものの，動ける状態ではなかったことから，これに乗じて，Ａの傍らに落ちていたＡのかばんの中から金品を持ち去って自分のものにしようと考え，Ａに対し，「もらっていくよ。」と言って，同かばんからＡの財布を取り出して自分のかばんの中に入れた上，Ａを救護することなくそのまま放置してその場を立ち去った。甲は，自宅に戻り，Ａの財布の中を見たところ，現金約１万円のほか，①大きさや重さは五百円硬貨と同じであるものの，中央に穴が開けられ，模様もない円形の金属片１０枚，②クレジットカードと同じ大きさであるものの，外観上何ら印刷が施されておらず，４桁の数字が手書きで書かれ，磁気ストライプらしき黒いテープが貼られているプラスチック製の白色カード１枚を見付けた。甲は，①の金属片はＡが自動販売機等で商品を購入する際などに使うつもりで持っていたものだろうと考え，同金属片１０枚を１本１００円の缶ジュースの自動販売機に順次投入して購入ボタンを押し，出てきたジュース１０本と釣銭合計４０００円を自分のものにした。また，②の白色カードは，他人のクレジットカードの磁気情報をコピーして不正に作成されたカードであったが，甲は，そのことを認識した上，同カードに書かれた４桁の数字がその暗証番号に違いないと考え，後日同カードを現金自動預払機に挿入して現金を引き出すつもりで，同カードを自宅に保管しておいた。
【記 述】`,c1:"１．甲が上記重傷を負ったＡを放置して立ち去った行為には，単純遺棄罪が成立する。",c2:"２．甲が上記Ａの財布を自分のかばんに入れて持ち去った行為には，窃盗罪が成立する。",c3:"３．甲が上記金属片を自動販売機に投入した行為には，偽造通貨行使罪が成立する。",c4:"４．甲が上記金属片を自動販売機に投入してジュースと釣銭を得た行為には，電子計算機使用詐欺罪が成立する。",c5:"５．甲が上記白色カードを自宅に保管しておいた行為には，不正電磁的記録カード所持罪が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"25"},{year:"2013",num:"21",subject:"kso",q:"捜査機関の権限に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．検察官は，司法警察員の取調べに際して任意の供述をした犯行の目撃者が，公判期日においては前にした供述と異なる供述をするおそれがあり，かつ，その者の供述が犯罪の証明に欠くことができないと認められる場合には，第１回公判期日前に限り，裁判官にその者の証人尋問を請求することができる。",c2:"２．司法警察員は，告訴を受けた事件に関する書類及び証拠物について，当該事件について犯罪の嫌疑がないものと思料するときは，検察官に送付しないことができる。",c3:"３．検察官は，司法警察員から送致を受けた事件であっても，捜査の必要があると思料するときは，自ら，捜索差押許可状の発付を受けて，捜索差押えを行うことができる。",c4:"４．司法警察員は，少年の被疑事件について捜査を遂げた結果，罰金以下の刑に当たる犯罪の嫌疑があるものと思料するときは，これを検察官ではなく家庭裁判所に送致しなければならない。",c5:"５．司法巡査は，犯罪の捜査について必要があるときは，犯罪の被害者の出頭を求め，これを取り調べることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2013",num:"22",subject:"kso",q:`告訴に関する次のアからオまでの各記述のうち，誤っているものの組合せは，後記１から５までのうちどれか。ただし，判例がある場合には，それに照らして考えるものとする。
ア．被害者が死亡したときは，被害者の明示の意思に反しない限り，その兄弟姉妹が告訴をすることができる。
イ．親告罪の告訴期間を起算する基準となる「犯人を知った」とは，犯人が誰であるかを知ることをいい，告訴権者において，犯人の住所氏名などの詳細を知る必要はないが，少なくとも犯人の何人たるかを特定し得る程度に認識することを要する。
ウ．告訴の取消しは，代理人によりこれをすることができない。
エ．被害者の司法警察員に対する供述調書であっても，犯罪事実を申告し，犯人の処罰を求める旨の意思の表示がされていれば，告訴調書として有効である。
オ．告訴は，書面でこれをしなければならない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2013",num:"23",subject:"kso",q:`次のアからオまでの各手続のうち，その手続に関して裁判官の裁判が必要となるものの組合せは，後記１から５までのうちどれか。
ア．私人が，窃盗行為に及んだ者を現行犯逮捕する場合
イ．司法警察員が，殺人を犯したことを疑うに足りる充分な理由がある者を緊急逮捕する場合
ウ．検察官が，逮捕状に基づき逮捕された者を司法警察員から受け取った後，勾留請求せずに釈放する場合
エ．殺人の事実で勾留中に起訴された者につき，同じ事実で引き続き勾留する場合
オ．窃盗の事実で逮捕中に起訴された者につき，同じ事実で勾留する場合`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2013",num:"24",subject:"kso",q:`次の【事例】について述べた後記アからオまでの【記述】のうち，正しい場合には１を，誤っている場合には２を選びなさい。ただし，判例がある場合には，それに照らして考えるものとする。
【事 例】
司法警察員は，甲が自宅において覚せい剤を密売しているとの被疑事実により，甲の逮捕状及び甲宅に対する捜索差押許可状の発付を得て，甲宅に赴いた。甲宅には，甲の妻Ａのみが在宅していたことから，司法警察員は，①Ａに前記捜索差押許可状を呈示した上で，甲宅に立ち入り，Ａを立会人として捜索を実施し，覚せい剤や電子計量器などを差し押さえた。更に捜索を進めたところ，甲宅リビングルームのテーブル上に，甲が野球賭博を開張していたことを示すノートが発見されたことから，司法警察員はＡにノートの提出を求めた。ノートは甲の所有物であったが，②Ａは司法警察員にノートを任意に提出し，司法警察員がこれを領置した。捜索終了後，その日のうちに，司法警察員は甲が帰宅した旨の情報を得たことから，直ちに甲宅に赴き，③玄関から甲宅に立ち入り，在宅していた甲に逮捕状を示して通常逮捕した。翌日，Ａは，甲の了解を得ずに前記ノートを提出したことを後悔し，④司法警察員に対してノートの還付を請求した。
【記 述】
ア．下線部①につき，覚せい剤や電子計量器などが甲の所有物である場合には，甲に捜索差押許可状を呈示していない以上，司法警察員がこれらの物を差し押さえることは違法である。
イ．下線部①につき，仮にＡが不在であり，甲宅に誰も在宅していなかった場合でも，立会人なくして捜索することは違法である。
ウ．下線部②につき，任意提出を行うことができる者は，所有者又は所持者に限られるところ，所持者とは自己のために当該物件を占有する者であるから，司法警察員がＡからノートを領置したことは違法である。
エ．下線部③につき，既に甲宅に対する捜索が終わった後であるから，甲宅に立ち入るためには，甲又はＡの了解が必要である。
オ．下線部④につき，任意提出物を領置した場合には，提出者から還付を請求されると直ちに還付する必要がある。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"21222"},{year:"2013",num:"25",subject:"kso",q:`令状主義に関する次のアからオまでの各記述のうち，正しいものの個数を，後記１から６までの中から選びなさい。ただし，判例がある場合には，それに照らして考えるものとする。
ア．捜査機関が，犯罪の証拠物として被疑者の体内に存在する尿を強制的に採取するには，捜索差押令状を必要とするが，人権の侵害にわたるおそれがある点では，検証の方法としての身体検査と共通の性質を有しているので，「裁判官は，身体の検査に関し，適当と認める条件を附することができる」旨の規定が前記捜索差押令状に準用される。
イ．捜査機関は，身体を拘束されていない被疑者を採尿場所に任意に同行することが事実上不可能であると認められる場合，採尿することを許可する捜索差押令状の効力として，採尿に適する最寄りの場所まで被疑者を連行することができ，その際，必要最小限度の有形力を行使することができる。
ウ．身体検査令状に関する「裁判官は，身体の検査に関し，適当と認める条件を附することができる」旨の規定は，その規定する条件の付加が強制処分の範囲，程度を減縮させる方向に作用するので，身体検査令状以外の検証許可状にもその準用を肯定することができる。
エ．捜査機関は，強盗殺人事件に関し，被疑者が犯人である疑いを持つ合理的理由が存在する場合，検証許可状がなくても，犯人の特定のための重要な判断に必要な証拠資料を入手する手段として，これに必要な限度において，公道上を歩いている被疑者の容貌等を撮影することができる。
オ．捜査機関が，捜査目的で宅配業者が保管している宅配便荷物に荷送人や荷受人の承諾を得ることなく，エックス線を照射して内容物の射影を観察するには，検証許可状を必要とする。`,c1:"１．０個",c2:"２．１個",c3:"３．２個",c4:"４．３個",c5:"５．４個",c6:"６．５個",c7:"",c8:"",c9:"",c10:"",a:"6"},{year:"2013",num:"26",subject:"kso",q:"精神鑑定に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．検察官は，医師に被疑者の精神状態の鑑定を嘱託した場合，裁判官に被疑者の鑑定留置を請求しなければならない。",c2:"２．検察官から被疑者の精神状態の鑑定を嘱託された医師は，鑑定留置状により留置された被疑者については，医療器具が整備された病院においてであれば，裁判官の許可がなくても，血液を採取した上で血液検査を実施するなどの必要な身体検査を強制的に実施することができる。",c3:"３．裁判所は，裁判員裁判対象事件につき，公判前整理手続において被告人の精神状態の鑑定を行うことを決定した場合，当該鑑定の結果の報告がなされるまでに相当の期間を要すると認めるときは，公判前整理手続において鑑定の手続（鑑定の経過及び結果の報告を除く。）を行う旨の決定をすることができる。",c4:"４．裁判所は，精神鑑定のため鑑定留置中の被告人についても，適当と認めるときは，職権で保釈を許すことができる。",c5:"５．裁判所は，被告人の精神状態の鑑定を命じた鑑定人が作成した「鑑定の経過及び結果を記載した書面」については，検察官が証拠とすることに同意しない場合でも，被告人が証拠とすることに同意すれば，直ちに証拠とすることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2013",num:"27",subject:"kso",q:`次のアからオまでの場合のうち，刑事訴訟法の規定上，被疑者の弁護人又は被告人の弁護人が立会いを求めることができるものの組合せは，後記１から５までのうちどれか。
ア．警察官が，裁判官により発せられた捜索許可状に基づき，被疑者方を捜索する場合
イ．裁判官が，検察官からの勾留請求を受け，被疑者に対し，勾留質問をする場合
ウ．裁判官が，勾留されている被疑者につき，公開の法廷において，勾留の理由を開示する場合
エ．裁判官が，刑事訴訟法第２２６条に基づいて，検察官の請求により，犯罪の捜査に欠くことのできない知識を有すると明らかに認められる者につき，第１回公判期日前に証人尋問を行う場合
オ．裁判所が，起訴された被告事件の犯行現場を検証する場合`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2013",num:"28",subject:"kso",q:`次のⅠないしⅢの【見解】は，公訴時効の根拠に関してのものである。【見解】に関する後記アからオまでの【記述】のうち，誤っているものの組合せは，後記１から５までのうちどれか。
【見 解】
Ⅰ．時間の経過により犯罪行為の可罰性が消滅するので，訴追の対象としない。
Ⅱ．時間の経過により証拠が散逸し，公正な審理を行うことができなくなるので，訴追の対象としない。
Ⅲ．時間の経過により長期間訴追されなかったという被告人の法的地位の安定を図る必要があるので，訴追の対象としない。
【記 述】
ア．Ⅰの見解に対しては，刑の軽重により，公訴時効が異なることを説明できないとの批判がある。
イ．Ⅰの見解に対しては，公訴時効完成後に公訴が提起された場合の判決が免訴という形式裁判であることを説明できないとの批判がある。
ウ．Ⅱの見解に対しては，犯人が国外にいる場合に公訴時効がその進行を停止することを説明できないとの批判がある。
エ．Ⅱの見解に対しては，法改正により，公訴時効の期間が延長された場合，特別の定めを置かない限り，既に行われた犯罪行為に対し，新法を適用することができないとの批判がある。
オ．Ⅲの見解に対しては，被告人の法的地位の安定は，正当な利益ないし権利といえるものではなく，公訴時効制度があることによる反射的利益にすぎないとの批判がある。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2013",num:"29",subject:"kso",q:`保釈に関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。
ア．裁判所は，犯罪の性質や情状によっては，保証金額を定めずに保釈を許可することができる。
イ．裁判員裁判対象事件は，刑事訴訟法第８９条第１号の「死刑又は無期若しくは短期１年以上の懲役若しくは禁錮に当たる罪」に該当するから，保釈は認められない。
ウ．保釈が許可されても，保証金（又はこれに代えることを許された有価証券，保証書）が納付されなければ，被告人は釈放されない。
エ．裁判所は，保釈中に被告人が他の罪を犯した場合，保釈を取り消さなければならない。
オ．勾留されている被告人やその弁護人のみならず，被告人の配偶者や直系の親族も，保釈の請求をすることができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2013",num:"30",subject:"kso",q:`次の【事例】について述べた後記アからオまでの【記述】のうち，正しいものの組合せは，後記１から５までのうちどれか。
【事 例】
検察官は，Ｖを被害者とする傷害罪により甲を起訴したが，凶器を特定することができなかったことから，起訴状には，「Ｖの足を刃物様の物で１回突き刺した」旨記載し，裁判所においては，合議体で審理及び裁判をする旨の決定がなされた。検察官の起訴状朗読の後，弁護人は，裁判長に対し，「刃物様の物」がいかなる凶器であるのか検察官に釈明を求めるように申し立てたが，①裁判長は，その必要がないと判断して釈明を求めなかった。証拠調べ手続において，検察官は，目撃者の供述を録取した検察官調書の証拠調べを請求したが，弁護人が同意しなかったことから，目撃者の証人尋問を請求し，裁判所もこれを取り調べる旨の決定をした。目撃者に対する主尋問においては，②検察官の尋問に対して弁護人が異議を申し立てることがあった。結局，目撃者は，記憶が減退してしまったとして検察官調書の記載内容と実質的に異なった供述をしたので，検察官が，検察官調書を刑事訴訟法第３２１条第１項第２号に基づき証拠調べ請求した。③弁護人は，検察官調書における供述を信用すべき特別の情況がない旨意見を述べたが，裁判所は，検察官調書を取り調べる旨の決定をした。
【記 述】
ア．下線部①につき，裁判長が釈明を求めなかったことについての異議申立ては，法令の違反があることを理由とする場合に限られる。
イ．下線部②につき，検察官の尋問に対する異議申立ては，法令の違反があることを理由とする場合に限られる。
ウ．下線部②につき，裁判長は，弁護人の異議申立てに対して判断するに当たり，他の裁判官との合議を経る必要がない。
エ．下線部③につき，弁護人は，検察官調書の証拠調べをする決定に不服がある場合には，直ちに抗告する必要がある。
オ．下線部③につき，裁判所は，仮に検察官からの証拠調べ請求を却下する場合であっても，弁護人の意見を聴く必要がある。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2013",num:"31",subject:"kso",q:`第一審の被告人質問に関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。
ア．被告人質問については，証拠調べの最終の段階で行うこととされており，検察官の立証が終了する前に被告人質問を実施することは許されない。
イ．被告人質問を実施するためには証拠調べの請求や決定を必要としない。
ウ．被告人質問を開始するに当たっては，あらかじめ被告人に供述する意思の有無を確かめなければ違法な手続となる。
エ．被告人質問においては，まず弁護人が質問し，次いで検察官が質問をするという順番によらなければならない。
オ．当事者の質問終了後，裁判長が被告人に対し質問をしなかったとしても，訴訟手続の法令違反の問題は生じない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2013",num:"32",subject:"kso",q:`次のⅠ，Ⅱの【見解】は，犯行を否認する甲を有罪とするに当たり，甲と共に犯行を行った旨自白する乙の供述につき，補強証拠を要するか否かに関するものである。【見解】に関する後記アからオまでの【記述】のうち，誤っているものの組合せは，後記１から５までのうちどれか。
【見 解】
Ⅰ．甲を有罪とするには，乙の供述につき補強証拠を要する。
Ⅱ．甲を有罪とするには，乙の供述につき補強証拠を要しない。
【記 述】
ア．Ⅱの見解に対しては，他に補強証拠がない限り，否認した甲は有罪，自白した乙は無罪になり，事実を合一的に確定できないという批判がある。
イ．自白の証明力の過大評価を防止するという刑事訴訟法第３１９条第２項の規定の趣旨からすれば，本人の自白と共犯者の自白を区別する理由がないと考えると，Ⅰの見解に結び付く。
ウ．本人の自白は，証明力が過大に評価される点に危険があるが，共犯者の自白は，被告人の引き込みや責任転嫁をする点に危険があり，その危険は異なると考えると，Ⅰの見解に結び付く。
エ．刑事訴訟法第３１９条第２項の規定は，自由心証主義の例外であるから限定的に解すべきであると考えると，Ⅱの見解に結び付く。
オ．共犯者である乙の自白は，甲の公判においては，反対尋問による吟味を経ることになるため証明力が高いと考えると，Ⅰの見解に結び付く。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2013",num:"33",subject:"kso",q:`次の【事例】について述べた後記アからオまでの【記述】のうち，正しい場合には１を，誤っている場合には２を選びなさい。
【事 例】
甲及び乙は，共謀の上，平成２４年１２月５日午前１時頃，Ｈ市内のコンビニエンスストア「Ｔ」において，同店店員Ｖから現金１０万円を強取したとしてＨ地方裁判所に起訴され，併合審理されることとなった。この審理において，Ｖ，甲の妻Ａ及び知人Ｂに対する証人尋問が行われたところ，Ｖは，「２人組の犯人が店から出て行く際，犯人の１人がもう１人の犯人に対し，『①甲，早く逃げるぞ。』と言っていた。」旨を証言した。次に，Ａは，「平成２４年１２月８日午後３時頃，自宅において，甲から『②３日前の午前１時頃，乙と一緒に，Ｈ市内のコンビニエンスストア「Ｔ」で，果物ナイフを店員に突き付けて現金１０万円を奪ってきた。見付からないと思っていたが，乙が捕まった。ひょっとしたら，乙が自分のことを話すかもしれない。そうなると，警察が来るだろう。頼む。③３日前の午前１時頃には，俺が自宅で寝ていたということにして欲しい。』と言われた。」旨を証言した。次に，Ｂは，「平成２４年１２月４日，甲から，『④明日の午前１時頃，Ｈ市内のコンビニエンスストアで強盗をしないか。』と言われたが，断った。」旨を証言した。また，乙に対する被告人質問において，乙は，「甲と一緒に強盗をした際，甲が店員に『⑤金を出せ。出さないと殺すぞ。』と言っていた。」旨を供述した。
【記 述】
ア．下線部①の発言は，要証事実を「犯行後，犯人の１人が逃走を呼び掛けた相手が甲と呼ばれていたこと」とした場合，伝聞証拠ではない。
イ．下線部②の発言は，要証事実を「甲が乙と一緒に強盗を実行したこと」とした場合，伝聞証拠ではない。
ウ．下線部③の発言は，要証事実を「甲がＡに甲のアリバイ作りに協力するよう依頼したこと」とした場合，伝聞証拠ではない。
エ．下線部④の発言は，要証事実を「甲がＢに強盗を実行することを持ち掛けたこと」とした場合，伝聞証拠ではない。
オ．下線部⑤の発言は，要証事実を「甲がＶを脅迫したこと」とした場合，伝聞証拠ではない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"12111"},{year:"2013",num:"34",subject:"kso",q:`次の【見解】は，実体的には常習特殊窃盗罪を構成する窃盗行為が刑法第２３５条の窃盗罪（以下「単純窃盗罪」という。）として起訴され（以下「前訴」という。），判決が確定した後，その判決の宣告前に犯されていた余罪の窃盗行為（実体的には確定判決を経由した窃盗行為と共に一つの常習特殊窃盗罪を構成するもの）が，前同様に単純窃盗罪として起訴された場合（以下「後訴」という。）に，前訴の確定判決の一事不再理効が後訴に及ぶかという点に関するものである。後記１から５までの【記述】のうち，【見解】と同じ立場から論じているものはどれか。
【見 解】
訴因制度を採用した現行刑事訴訟法の下においては，少なくとも第一次的には訴因が審判の対象であると解されること，犯罪の証明なしとする無罪の確定判決も一事不再理効を有することに加え，常習特殊窃盗罪の性質や一罪を構成する行為の一部起訴も適法になし得ることなどに鑑みると，前訴の訴因と後訴の訴因との間の公訴事実の単一性についての判断は，基本的には，前訴及び後訴の各訴因のみを基準としてこれらを比較対照することにより行うのが相当である。本件においては，前訴及び後訴の訴因が共に単純窃盗罪であって，両訴因を通じて常習性の発露という面は全く訴因として訴訟手続に上程されておらず，両訴因の相互関係を検討するに当たり，常習性の発露という要素を考慮すべき契機は存在しないのであるから，ここに常習特殊窃盗罪による一罪という観点を持ち込むことは，相当でないというべきである。
【記 述】
（参照条文）
盗犯等の防止及び処分に関する法律
第２条
 常習トシテ左ノ各号ノ方法ニ依リ刑法第２３５条，第２３６条，第２３８条若ハ第２３９条ノ罪又ハ其ノ未遂罪ヲ犯シタル者ニ対シ窃盗ヲ以テ論ズベキトキハ３年以上，強盗ヲ以テ論ズベキトキハ７年以上ノ有期懲役ニ処ス
一 凶器ヲ携帯シテ犯シタルトキ
二 二人以上現場ニ於テ共同シテ犯シタルトキ
三 門戸牆壁等ヲ踰越損壊シ又ハ鎖鑰ヲ開キ人ノ住居又ハ人ノ看守スル邸宅，建造物若ハ艦船ニ侵入シテ犯シタルトキ
四 夜間人ノ住居又ハ人ノ看守スル邸宅，建造物若ハ艦船ニ侵入シテ犯シタルトキ`,c1:"１．単純窃盗として起訴された以上，訴因を動かす権限のない裁判所としては，訴因の範囲において審判すべきである。",c2:"２．裁判所は訴因を超えて事実を認定し有罪判決をすることは許されないが，免訴や公訴棄却といった形式裁判をする場合に関する限り訴因に拘束されることはないと解すべきである。",c3:"３．両訴因間における公訴事実の単一性の有無を判断するに当たり，いずれの訴因の記載内容にもなっていないところの犯行の常習性という要素について証拠により心証形成をし，両者は常習特殊窃盗として包括的一罪を構成するから公訴事実の単一性を肯定できる場合には，前訴の確定判決の一事不再理効が後訴にも及ぶとすべきである。",c4:"４．実体に合わせて訴因が変更されれば免訴となるが，そうでなければ有罪判決になるということになり，検察官の選択によって両極端の結果を生じさせるのは，不合理である。",c5:"５．訴因は有罪を求めて検察官により提示された審判の対象であり，訴因を超えて有罪判決をすることは，被告人の防御権を侵害するから許されないが，これに対し，確定判決の有無という訴訟条件の存否は職権調査事項である上，その結果免訴判決がなされても，被告人の防御権を侵害するおそれは全くないから，訴因に拘束力を認める理由も必要性も存しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2013",num:"35",subject:"kso",q:`次の【記述】は，前科証拠の証拠能力に関する最高裁判所の判例を要約したものである。【記述】中の①から③までの（ ）内から適切な語句を選んだ場合，その組合せとして正しいものは，後記１から５までのうちどれか。
【記 述】
前科も一つの事実であり，前科証拠は，一般的には犯罪事実について，様々な面で証拠としての価値（①（ａ．法律的関連性 ｂ．自然的関連性））を有している。反面，前科，特に同種前科については，被告人の犯罪性向といった実証的根拠の乏しい人格評価につながりやすく，そのために事実認定を誤らせるおそれがあり，また，これを回避し，同種前科の証明力を合理的な推論の範囲に限定するため，当事者が前科の内容に立ち入った攻撃防御を行う必要が生ずるなど，その取調べに付随して②（ａ．争点が拡散する ｂ．不当な不意打ちになる）おそれもある。したがって，前科証拠は，単に証拠としての価値があるかどうか，言い換えれば，（①）があるかどうかのみによって証拠能力の有無が決せられるものではなく，前科証拠によって証明しようとする事実について，実証的根拠の乏しい人格評価によって誤った事実認定に至るおそれがないと認められるときに初めて証拠とすることが許されると解するべきである。本件のように，前科証拠を被告人と犯人の同一性の証明に用いる場合についていうならば，前科に係る犯罪事実が③（ａ．顕著な特徴 ｂ．相当の重大性）を有し，かつ，それが起訴に係る犯罪事実と相当程度類似することから，それ自体で両者の犯人が同一であることを合理的に推認させるようなものであって，初めて証拠として採用できるものというべきである。`,c1:"１．①ａ ②ａ ③ａ",c2:"２．①ａ ②ｂ ③ａ",c3:"３．①ａ ②ｂ ③ｂ",c4:"４．①ｂ ②ａ ③ａ",c5:"５．①ｂ ②ａ ③ｂ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2013",num:"36",subject:"kso",q:`量刑において起訴されていない犯罪事実，すなわち余罪をどう扱うべきかに関し，「量刑は，被告人の性格，経歴及び犯罪の動機，目的，方法等全ての事情を考慮して，裁判所が処断刑の範囲内において，適当に決定すべきものであるから，その量刑のための一情状として，いわゆる余罪をも考慮することは，必ずしも禁じられるところではない。」との見解がある。次のアからオまでの各記述のうち，この見解に対する批判になり得ないものの組合せは，後記１から５までのうちどれか。
ア．起訴された犯罪事実のほかに，起訴されていない犯罪事実を余罪として認定し，実質上これを処罰する趣旨で量刑資料として考慮し，被告人を重く処罰することとの区別が実際には困難な場合がある。
イ．余罪が考慮できないと，犯罪に至らない不当な行状などが情状事実に含まれることと均衡を失する。
ウ．余罪は被告人が犯した別の犯罪事実であるから，情状事実である犯罪傾向の有力な間接事実となる。
エ．刑事裁判手続において犯罪事実の認定手続と量刑手続とは区分されていないため，量刑資料である余罪が犯罪事実の認定に不当な影響を及ぼすおそれがある。
オ．余罪も犯罪事実であるため，その認定に当たっては，起訴された犯罪事実に準じた手続保障を求めるべきであるが，量刑のための一情状だとすると厳格な証明を要しないことになる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2013",num:"37",subject:"kso",q:`公判前整理手続に関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。
ア．裁判所は，被告人に弁護人がなければ公判前整理手続を行うことができない。
イ．裁判所は，訴因の変更を許すことができない。
ウ．裁判所は，証拠調べをする決定をすることができる。
エ．検察官は，証明予定事実を記載した書面について，裁判所への提出を免除される場合がある。
オ．被告人又は弁護人は，取調べを請求した証拠について，検察官に対し，開示する必要がない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2013",num:"38",subject:"kso",q:`被害者等（被害者又は被害者が死亡した場合若しくはその心身に重大な故障がある場合におけるその配偶者，直系の親族若しくは兄弟姉妹をいう。以下同じ。）による意見陳述に関する次のアからオまでの各記述のうち，誤っているものの組合せは，後記１から５までのうちどれか。
ア．刑事訴訟法第２９２条の２第１項による意見の陳述と刑事訴訟法第３１６条の３８第１項による意見の陳述のいずれの場合であっても，その申出は，あらかじめ検察官にしなければならない。
イ．裁判所は，審理の状況その他の事情を考慮して，相当でないと認めるときは，刑事訴訟法第２９２条の２第１項による意見の陳述の場合には，意見の陳述に代え意見を記載した書面を提出させることができるが，刑事訴訟法第３１６条の３８第１項による意見の陳述の場合には，意見の陳述に代え意見を記載した書面を提出させることはできない。
ウ．刑事訴訟法第２９２条の２第１項による意見の陳述と刑事訴訟法第３１６条の３８第１項による意見の陳述のいずれの場合であっても，その陳述は，犯罪事実の認定のための証拠とはならない。
エ．刑事訴訟法第２９２条の２第１項による意見の陳述と刑事訴訟法第３１６条の３８第１項による意見の陳述のいずれの場合であっても，その陳述は，量刑資料にはなり得る。
オ．刑事訴訟法第２９２条の２第１項による意見の陳述では，法律の適用についての意見を述べることはできないから，被害者等は，被告人が受けるべき刑罰について，「法律上，なし得る限りの最も重い刑罰に処してください。」と述べてはならない。
（参照条文）刑事訴訟法
第２９２条の２第１項　裁判所は，被害者等又は当該被害者の法定代理人から，被害に関する心情その他の被告事件に関する意見の陳述の申出があるときは，公判期日において，その意見を陳述させるものとする。
第３１６条の３８第１項　裁判所は，被害者参加人又はその委託を受けた弁護士から，事実又は法律の適用について意見を陳述することの申出がある場合において，審理の状況，申出をした者の数その他の事情を考慮し，相当と認めるときは，公判期日において，第２９３条第１項の規定による検察官の意見の陳述の後に，訴因として特定された事実の範囲内で，申出をした者がその意見を陳述することを許すものとする。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2013",num:"39",subject:"kso",q:`控訴に関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。ただし，判例がある場合には，それに照らして考えるものとする。
ア．控訴裁判所は，事後審なので，原判決の言渡し後に生じた刑の量定に影響を及ぼすべき情状について取り調べることはできない。
イ．簡易裁判所がした刑事第一審の判決に対する控訴については，地方裁判所ではなく，高等裁判所が裁判権を有する。
ウ．控訴裁判所は，被告人のみが控訴をした事件について，原判決の認定した事実に誤認があると認める場合には，それより被告人に不利益な事実を認定することができる場合もある。
エ．控訴審では，第一審の公判手続に関する規定が準用されるので，被告人は，公判期日において，控訴趣意書に基づき自ら弁論をすることができる。
オ．第一審における弁護人は，判決の宣告により弁護人の選任の効力が失われるので，被告人のため控訴をすることができず，控訴をするには改めて弁護人として選任される必要がある。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2013",num:"40",subject:"kso",q:"略式手続に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．略式命令を受けた者又は検察官は，その告知を受けた日から１４日以内に正式裁判の請求をすることができる。",c2:"２．検察官は，略式命令の請求に際し，被疑者に対し，あらかじめ，略式手続を理解させるために必要な事項を説明し，通常の規定に従い審判を受けることができる旨を告げた上，略式手続によることについて異議がないかどうかを確かめなければならない。",c3:"３．被疑者は，略式手続によることについて異議がないときは，書面でその旨を明らかにしなければならない。",c4:"４．地方裁判所は，検察官の請求により，その管轄に属する事件について，公判前，略式命令で，１００万円以下の罰金又は科料を科することができる。",c5:"５．略式命令の告知があったときは，勾留状は，その効力を失う。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2012",num:"1",subject:"ken",q:`幸福追求権の内容については，「公共の福祉に反しない限り一般的に自由を拘束されないという一般的自由権をその内容とする。」という一般的行為自由説に対し，「個人の人格的生存に不可欠な利益を内容とする権利の総体である。」という人格的利益説がある。これら二つの見解に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．裁判所が「新しい人権」を明確な基準なしに憲法上の権利として承認することになると，裁判所の主観的な判断によって権利が創設されるおそれがある。その点，人格的利益説は，「新しい人権」の承認について種々の要素を考慮して慎重に決定することを求める見解といえる。
イ．一般的行為自由説は，公権力による制約に対して人権保障の範囲を広げる見解であるのに対し，人格的利益説は，不可欠性という厳しい要件の下で人権保障の範囲を決するので，人権保障の範囲が狭くなりすぎるおそれがある。
ウ．一般的行為自由説は，公共の福祉に反しない範囲で人権を認め，更にこれに対する公共の福祉による制約を認めるので，かえって人権保障を弱めるおそれがあるが，人格的利益説は，人権の範囲を絞った上で公共の福祉による制約を否定するので，結局人権保障に資する。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2012",num:"2",subject:"ken",q:`いわゆる砂川政教分離（空知太神社）訴訟判決（最高裁判所平成２２年１月２０日大法廷判決，民集６４巻１号１頁）に関する次のアからウまでの各記述について，当該判決の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．国公有地が無償で宗教的施設の敷地としての用に供されるといっても，当該施設の性格や来歴，無償提供に至る経緯，利用の態様には様々なものがあり得るのであって，これらの事情のいかんが政教分離原則との関係を考えるに当たって重要な考慮要素とされるべきである。
イ．無償提供された国公有地上に存在する宗教的施設の宗教性を判断するに当たっては，当該宗教的施設に対する一般人の評価を抽象的に観念するのではなく，当該施設が存在する地元住民の一般的評価を検討することが重要である。
ウ．宗教的施設に対する国公有地の無償提供が憲法第８９条に違反し違憲と判断される場合には，このような違憲状態を解消するための手段として，使用貸借契約の解除までは必要ないが，当該土地上に存在する宗教的施設の撤去が必要である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"122"},{year:"2012",num:"3",subject:"ken",q:`出版物の頒布等の仮処分による事前差止めの許否等をめぐる北方ジャーナル事件判決（最高裁判所昭和６１年６月１１日大法廷判決，民集４０巻４号８７２頁）に関する次のアからウまでの各記述について，当該判決の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．裁判所の事前差止めは，思想内容等の表現物につき，その発表の禁止を目的として，対象となる表現物の内容を網羅的一般的に審査する性質を有するものではあるが，裁判所という司法機関により行われるものであるから，憲法第２１条第２項前段の「検閲」には当たらない。
イ．裁判所の事前差止めは，表現行為が公共の利害に関する事項の場合は原則として許されないが，表現内容が真実でなく，又はそれが専ら公益を図る目的のものでないことが明白で，かつ，被害者が重大で著しく回復困難な損害を被るおそれがあるときは，例外的に許される。
ウ．公共の利害に関する事項についての表現行為に対し事前差止めを命ずる仮処分命令を発する際には，口頭弁論又は債務者の審尋を行い，表現内容の真実性等の主張立証の機会を与えることが原則として必要である。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"5"},{year:"2012",num:"4",subject:"ken",q:`取材の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．報道のための取材の自由も憲法第２１条の精神に照らし十分尊重に値するが，取材の自由といっても，何らの制約を受けないものではなく，公正な裁判の実現という憲法上の要請があるときは，ある程度の制約を受けることがあることは否定できない。
イ．報道機関が専ら報道目的で撮影したビデオテープを，裁判所の提出命令によって提出させる場合よりも裁判官が発付した令状に基づき検察事務官が差し押さえる場合の方が，取材の自由に対する制約の許否に関して，より慎重な審査を必要とする。
ウ．編集の上，既に放映されたビデオテープのマザーテープの差押えにより報道機関が受ける不利益は，このビデオテープの放映が不可能となり報道の機会が奪われるという不利益ではなく，将来の取材の自由が妨げられるおそれがあるという不利益にとどまる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"3"},{year:"2012",num:"5",subject:"ken",q:`職業の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．職業活動の自由についても精神的自由についても，国の積極的な社会経済政策のために規制することが許されるのは同様であるが，前者の自由を規制する場合には立法府の裁量的判断が広く認められる点が異なる。
イ．憲法第２２条第１項が「公共の福祉に反しない限り」という留保を伴っているのは，職業活動は社会的相互関連性が大きく，精神的自由と比較して公権力による規制の要請が強いことを強調するためである。
ウ．職業の許可制は自由に対する強力な制限であるから，その合憲性を肯定し得るためには，原則として重要な公共の利益のために必要かつ合理的な措置であることを要する。ただし，この要請は，個々の許可条件の合憲性判断においてまで求められるものではない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"212"},{year:"2012",num:"6",subject:"ken",q:`居住・移転の自由に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。なお，関連判例がある場合には，正誤は当該判例の趣旨に照らして判断しなさい。
ア．一定の伝染病の感染を防止するという目的から，都道府県知事が患者を強制的に隔離することは，居住・移転の自由における人身の自由の側面に向けられた直接的な規制といえるが，このような規制は，居住・移転の自由に対する必要な制約として是認される。
イ．転出入の際に市町村長への届出義務を課することは，居住・移転の自由におけるプライバシー権の側面に対する間接的な制約であるといえるが，住民の利便の増進に役立つものであり，制約を償うに足りる公共の利益が認められるので，このような制約は許される。
ウ．市町村長は，原則として転入届を受理しなければならない。ただし，市町村には住民の安全を確保する義務があるので，地域の秩序が破壊され住民の生命や身体の安全が害される危険性が高度に認められる場合には，転入届を受理しないことも許される。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"112"},{year:"2012",num:"7",subject:"ken",q:`森林法共有林分割制限事件判決（最高裁判所昭和６２年４月２２日大法廷判決，民集４１巻３号４０８頁）に関する次のアからウまでの各記述について，当該判決の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法第２９条は，私有財産制度を保障しているのみでなく，国民の個々の財産権につきこれを基本的人権として保障しているが，それ自体に内在する制約があるほか，社会全体の利益を図るための規制により制約を受ける。
イ．財産権規制の目的には，社会政策及び経済政策上の積極的なものから，安全の保障や秩序の維持等の消極的なものまで種々様々なものがあり得るが，森林法の共有林分割請求権を制限する規定は積極目的による規制である。
ウ．財産権規制の目的が公共の福祉に合致しないことが明らかであるか，規制手段が規制目的を達成する手段として必要性や合理性に欠けていることが明らかであって，立法府の判断が合理的裁量の範囲を超えるものとなる場合に限り，当該規制立法は違憲となる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"3"},{year:"2012",num:"8",subject:"ken",q:`次の見解は，憲法第２５条の第１項と第２項との関係について論じたものである。この見解に対する論評としてなされた次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。「憲法第２５条第１項は，健康で文化的な最低限度の生活を営む国民の権利を定めており，同条第２項は，国民が健康で文化的な最低限度の生活を上回る生活を営むことのできるような施策をなすべき国の責務を定めている。したがって，同条第１項による健康で文化的な最低限度の生活の水準については，具体的な事情の下では一定の基準が確保されている必要があるが，同条第２項による施策の内容は，立法府の裁量に委ねられているものである。」
ア．この見解によると，一般的に，憲法第２５条第１項に基づいて一定の給付を請求する具体的権利が認められる。
イ．この見解によると，憲法第２５条第１項により保障される権利への侵害の有無が問題になった場合には，より厳格度を高めた司法審査が行われ得る。
ウ．この見解によると，憲法第２５条第１項により保障される権利を具体的に実現するために，同条第２項に基づいて国の各種の施策が実施されることになる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"212"},{year:"2012",num:"9",subject:"ken",q:`被告人の権利に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．いわゆるビデオリンク方式を採用することによって被告人は自ら尋問することができないが，それは証人が受ける精神的圧迫を回避するためであり，弁護人は尋問できるのであるから，被告人の証人審問権を侵害しているとはいえない。
イ．即決裁判手続は，争いがなく明白かつ軽微な事件について，簡易かつ迅速に公判の審理及び裁判を行うことにより，手続の合理化や効率化を図るものであり，一般の事件と異なる上訴制限を定めることに合理的理由があるから，裁判を受ける権利を侵害しているとはいえない。
ウ．ある事件の刑事確定訴訟記録の閲覧請求に対し，刑事確定訴訟記録法の条項に基づいて不許可としても，憲法第２１条，第８２条の規定は刑事確定訴訟記録の閲覧を権利として要求できることまで認めたものではないから，憲法には違反しない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"5"},{year:"2012",num:"10",subject:"ken",q:`郵便法違憲判決（最高裁判所平成１４年９月１１日大法廷判決，民集５６巻７号１４３９頁）に関する次のアからウまでの各記述について，当該判決の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法第１７条は，公務員の不法行為による国又は公共団体の損害賠償責任を免除又は制限する法律が立法権の裁量を逸脱したものである場合には，これを違憲無効とする効力を持つ規定である。
イ．書留郵便物について，郵便業務従事者の故意又は重大な過失によって損害が生じた場合に，国の損害賠償責任を全面的に免除する立法は違憲無効であるが，法律で国が負担すべき賠償額に一定の制限を付することは許される。
ウ．特別送達郵便物について，郵便業務従事者の故意又は重大な過失によって損害が生じた場合に，国の損害賠償責任を免除又は制限する立法は違憲無効であるが，軽過失にとどまる場合には，国の損害賠償責任を免除又は制限することも許される。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"4"},{year:"2012",num:"11",subject:"ken",q:`国民の義務に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法第２６条第２項前段は，国民がその保護する子女に普通教育を受けさせる義務を負うことを定めている。これは，同条第１項が保障する子どもの教育を受ける権利の保障に対応したものであって，子ども自身に教育を受ける義務を負わせるものではない。
イ．憲法第２７条第１項は，国民の勤労の義務を定めている。したがって，憲法第１８条で禁止されている「その意に反する苦役」に至らないものであれば，法律の定めにより，刑罰をもって勤労を強制することも許される。
ウ．憲法第３０条は，国民の納税義務を定めている。この規定は，国家の存立に不可欠な財政を支えるという国民としての当然の義務を確認するとともに，その義務の具体化には法律の定めが必要であるとしたものである。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"3"},{year:"2012",num:"12",subject:"ken",q:`天皇又は皇室に関する次のアからエまでの各記述について，正しいもの二つの組合せを，後記１から６までの中から選びなさい。
ア．天皇は，精神若しくは身体の疾患又は事故があるときは，国事行為を委任することができる。この場合には，摂政が天皇の名で国事行為を行う。
イ．皇室に財産を譲り渡し，又は皇室が財産を譲り受け，若しくは賜与することは国会の議決に基づかなければならない，というのが憲法の定める原則である。
ウ．皇位の継承について，大日本帝国憲法は，「皇男子孫之ヲ継承ス」と定めていたが，日本国憲法は，男系男子主義までも求めるものではない。
エ．国務大臣の任免，法律の定めるその他の官吏の任免の認証は，天皇の国事行為とされている。認証は，これらの行為の効力要件である。`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．イとウ",c5:"５．イとエ",c6:"６．ウとエ",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2012",num:"13",subject:"ken",q:`選挙制度に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．小選挙区制の下では，二大政党化への傾向が生じ，そのいずれかの政党が議会の過半数を占め，政権が安定する可能性が高くなる。他方で，議席に反映されない死票が多くなり，国民の間に存在する少数者の意思が議会に反映されにくくなる。
イ．比例代表制の下では，死票が比較的少なく，有権者の様々な意思が議会に反映されやすくなる。他方で，一つの政党が議会の過半数を占めることが相対的に困難となり，小党分立を招き，政権が不安定になるおそれがある。
ウ．いわゆる中選挙区制の下では，一つの政党が議会の過半数を占め，政権が安定する可能性が高くなる。他方で，同一政党から複数の候補者が同一選挙区に立候補する結果，小選挙区制と比べて死票が生ずる確率が高くなる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"112"},{year:"2012",num:"14",subject:"ken",q:`次のaの①及び②は憲法第９条第１項についての見解であり，bの③及び④は同条第２項についての見解である。また，次のアからウまでの各記述は，それらの見解を組み合わせて考えた場合に，憲法第９条による戦争放棄の範囲等がどのように帰結されるかを述べたものである。アからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
a．①．第１項は，戦争と，武力による威嚇又は武力の行使を，国際紛争を解決するための手段として放棄したものであり，自衛目的によるものは放棄していない。
②．およそ戦争とは全て国際紛争解決の手段として行われるものであり，その目的のいかんを問わず，戦争と，武力による威嚇又は武力の行使は，第１項により一切放棄されている。
b．③．「前項の目的を達するため」とは，第１項による戦争放棄の目的を達するためという意味であり，第２項はそのための戦力の保持を禁止したものである。
④．「前項の目的を達するため」とは，戦争を放棄するに至った動機を一般的に示すものであり，第２項は一切の戦力の保持を禁止したものである。
ア．①及び③の見解を前提とすると，自衛のための戦争は認められるので，そのための戦力保持は許されることになる。
イ．①及び④の見解を前提とすると，一切の戦力の保持が禁止される結果として，自衛のための戦争も放棄されることになる。
ウ．②及び④の見解を前提とすると，侵略戦争はもとより，自衛のための戦争も認められず，そのための戦力の保持も一切許されないことになる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"1"},{year:"2012",num:"15",subject:"ken",q:`衆議院の優越に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．衆議院と参議院を比較すると，衆議院の方が議員の任期が短く，また解散により必要な場合には民意を問える地位にある点で，相対的に見て，その時々の民意をより反映しているといえることが衆議院優越の根拠であると解される。
イ．衆議院が可決した法律案を参議院が可決しなかった場合には，衆議院が出席議員の３分の２以上の多数で再び可決して法律として成立させることができるが，衆議院の再議決の前には両院協議会を開くことが憲法上求められている。
ウ．憲法は条約について，内閣が締結権を有するとしながらも，国会による承認を経ることを求めている。その際には，案件を先に衆議院に提出しなければならず，また議決についても，法律案の場合よりも衆議院の強い優越性が認められている。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"122"},{year:"2012",num:"16",subject:"ken",q:`憲法第７３条が列挙する内閣の事務に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．日本国憲法は，大日本帝国憲法が天皇大権としていた恩赦を内閣の権能とした。恩赦は立法権及び司法権の作用を行政権者の判断で変動させるものであるので，憲法が定める恩赦の各種類の内容と手続について法律で定めることが必要である。
イ．内閣は外交関係を処理するが，これは，法律の執行という行政権の通常の作用とは異なる権限を内閣に帰属させたものである。外交関係の処理に関する事務には，条約の締結以外の外交交渉，外交使節の任免，外交文書の作成などが含まれる。
ウ．内閣が締結する条約とは，名称を問わず，広く文書による国家間の合意をいう。したがって，私法上の契約の性質を持つ国家間の合意文書も，条約の委任に基づく国家間の合意文書も，事前に，時宜によっては事後に国会の承認を経ることが必要となる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"112"},{year:"2012",num:"17",subject:"ken",q:`司法権に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア.「板まんだら」事件判決（最三小判昭和５６年４月７日）は，宗教上の教義や信仰に関わる紛争について裁判所は厳に中立を保つべきであるとして，これらの事項が訴訟の前提問題に含まれている場合には，当該訴訟は法律上の争訟に当たらないとしたものである。
イ．苫米地事件判決（最大判昭和３５年６月８日）は，法律上の争訟の要件が満たされる事案であっても，高度の政治性を有する国家行為に関しては，実際的必要性の観点から，裁判所が司法判断を下すのを自制すべきであるとしたものである。
ウ．警察法改正無効事件判決（最大判昭和３７年３月７日）は，警察法改正が衆参両院において議決を経たとされ，適法な手続で公布されている以上，裁判所は両院の自主性を尊重すべきであり，議事手続に関する事実を審理してその有効無効を判断すべきでないとしたものである。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"221"},{year:"2012",num:"18",subject:"ken",q:`違憲判決の方法に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．選挙権の平等に反する定数配分規定を是正するための合理的期間が経過したにもかかわらず，現行規定のままで選挙が施行された場合，判決確定により直ちに当該選挙を無効とすることが相当でないとみられるときは，選挙を無効とするがその効果は一定期間経過後に初めて発生するという内容の判決をすることも許される。
イ．国籍法第３条第１項を全体として違憲無効とせず，同項の規定の一部である準正要件を違憲無効とすることで，日本国民である父と日本国民でない母との間に出生し，かつ，その後に父から認知された子は，準正要件を除いた所定の要件を満たすときには，日本国籍の取得が認められる。
ウ．公務員の政治的行為の禁止を定める国家公務員法第１０２条第１項及び人事院規則１４－７それ自体は憲法第２１条に違反しないとしても，当該公務員の行為のもたらす弊害が軽微なものについてまで一律に罰則を適用することは，必要最小限の域を超えるものであって，憲法第２１条及び第３１条に違反する。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"6"},{year:"2012",num:"19",subject:"ken",q:`条例に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．ある事項を条例によって規制する結果として，地域ごとに取扱いに差異が生じることがあり得る。憲法が各地方公共団体の条例制定権を認める以上，このような地域ごとの差異は憲法自らが容認しているといえる。
イ．市町村が行う国民健康保険の保険料方式での強制徴収は租税に類似する性質を有するので，条例で定める賦課要件の明確性の程度は，憲法第８４条において要求される明確性の程度と同等のものが求められる。
ウ．憲法が地方公共団体の条例制定権を認めており，かつ，地方議会によって議決される条例は法律と実質的に同視できるものであるので，法律の授権がなくても，ある行為について条例で刑罰を定めてこれを規制することは許される。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"122"},{year:"2012",num:"20",subject:"ken",q:`憲法と条約の効力関係をめぐる憲法優位説に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法優位説の論拠の一つは，条約優位説がもたらす結果に対する批判である。それは，条約締結要件が憲法改正手続よりも緩やかであるので，条約によって実質的に憲法を改正することも可能になることへの批判である。
イ．憲法優位説によれば，条約締結権を定めている憲法の規定は，どの機関が条約締結を担うのか，またどのような手続を必要とするのかについて定めたものであって，条約の効力の根拠を定めたものではない。
ウ．憲法優位説の中にも，条約の違憲審査を控えるべきであるとする考え方がある。それは，憲法第８１条の文言に条約が含まれていないことや憲法第９８条第２項が条約の誠実遵守を宣言していることを根拠とする。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"121"},{year:"2012",num:"21",subject:"gyo",q:`次の【文章Ⅰ】の空欄Ａ及びＢに補充すべき語句を，それぞれ【語群Ⅰ】に掲げる１から５までの中から選びなさい。また，【文章Ⅱ】の空欄Ｃ及びＤに補充すべき語句を，それぞれ【語群Ⅱ】に掲げる１から５までの中から選びなさい。
【文章Ⅰ】 
普通地方公共団体が，既に具体的な金銭債権として発生している国民の重要な権利に関し，法令に違反してその行使を積極的に妨げるような一方的かつ統一的な取扱いをし，その行使を著しく困難にさせた場合，当該普通地方公共団体が当該権利の消滅時効を主張することは，【Ａ】に反し許されない。このような場合には，当該普通地方公共団体による時効の主張を許さないこととしても，地方自治法第２３６条第２項の趣旨に含まれる【Ｂ】に反しない。
（参照条文）地方自治法
第２３６条 （略）
２ 金銭の給付を目的とする普通地方公共団体の権利の時効による消滅については，法律に特別の定めがある場合を除くほか，時効の援用を要せず，また，その利益を放棄することができないものとする。普通地方公共団体に対する権利で，金銭の給付を目的とするものについても，また同様とする。
３，４ （略）
【語群Ⅰ】
１．比例原則
２．平等原則
３．信義則
４．法律の留保の原則
５．説明責任の原則
【文章Ⅱ】 
租税法規に適合する課税処分を，【Ｃ】の適用により違法なものとして取り消すには，租税法規の適用における【Ｄ】の要請を犠牲にしてもなお，当該課税処分に係る課税を免れさせなければ正義に反するといえるような特別の事情が存しなければならない。そして，特別の事情が存するかどうかの判断に当たっては，少なくとも，税務官庁が納税者に対し【Ｃ】の適用を根拠付けるような公的見解を表示していたかどうかを，考慮しなければならない。
【語群Ⅱ】
１．比例原則
２．平等原則
３．信義則
４．侵害留保原理
５．適正手続の原則`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3232"},{year:"2012",num:"22",subject:"gyo",q:`建築基準法が同法所定の接道義務について条例による制限の付加を認めていることを受け，東京都建築安全条例（以下｢条例｣という。）は，接道義務を厳格化している。条例の定める安全認定（以下「安全認定」という。）は，接道義務の例外を認めるための制度であり，接道要件を満たしていない建築物の計画であっても，適法に安全認定を受けていれば，建築確認申請手続において，接道義務の違反がないものとして扱われることとなる。安全認定が行われた上で建築確認がされている場合に，建築確認の取消訴訟において安全認定の違法を主張することの可否について判断を示した最高裁判所の判決（最高裁判所平成２１年１２月１７日第一小法廷判決，民集６３巻１０号２６３１頁）に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．この判決は，安全認定に処分性が認められないことを前提として，建築確認の取消訴訟において安全認定の違法を主張することができるとしたものである。
イ．この判決は，周辺住民には安全認定の取消訴訟の原告適格が認められないことを考慮して，建築確認の取消訴訟において安全認定の違法を主張することができるとしたものである。
ウ．この判決は，建築確認における接道要件充足の有無の判断と，安全認定における安全上の支障の有無の判断は，避難又は通行の安全の確保という同一の目的を達成するために行われるものであることを考慮して，建築確認の取消訴訟において安全認定の違法を主張することができるとしたものである。
エ．この判決は，安全認定の適否を争うための手続的保障がこれを争おうとする者に十分に与えられているというのは困難であることを考慮して，建築確認の取消訴訟において安全認定の違法を主張することができるとしたものである。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2211"},{year:"2012",num:"23",subject:"gyo",q:`次の文章は，調理師甲とその相談を受けている弁護士乙との会話である。次のアからウまでの下線部の各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
甲 「私は，調理師法に基づく調理師の免許（以下「免許」という。）を知事から受けて，レストランのシェフをしていますが，そのレストランで生じた食中毒事故を理由に，知事によって免許を取り消されそうになって，困っています。数日前に，知事からこの件についての書類が来ていますので，見てください。」
乙 「これは，行政手続法（以下「法」という。）による聴聞の通知ですね。免許の取消しを阻止するため，聴聞でどのような主張をすべきか検討しましょう。その前提として情報収集が必要ですが，いい方法があります。甲さんの免許の取消しについて，法による聴聞の通知があったわけですから，(ア)<u>甲さんには，法に基づく文書等の閲覧の権利が生じており，知事に対し，本件に関する調査結果などの資料の閲覧を求めることができます。</u>」
甲 「そのようなことができるとは知りませんでした。ところで，聴聞に出ていくことができるのは私だけでしょうか。」
乙 「(イ)<u>法によれば，不利益処分の名宛人となるべき者やその代理人は，聴聞の期日に出頭して意見を述べたりすることができますが，それ以外の利害関係者が聴聞手続に参加することは認められていません。</u>」
甲 「分かりました。それから，少し先の話になりますが，聴聞でいろいろ意見を述べても，結局免許取消処分がされてしまった場合，どうしたらいいでしょうか。」
乙 「調理師法は，不服申立前置主義を採っていませんので，免許取消処分に対して直ちに訴訟を起こすことができます。そのほか，行政不服審査法により，知事への異議申立てをすることも考えられるのですが，(ウ)<u>法は，聴聞を経てされた処分については，事前手続の保障が手厚いことから，不服申立てを制限していますので，甲さんが異議申立てをすることはできません。</u>」`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"3"},{year:"2012",num:"24",subject:"gyo",q:`甲は，たばこ事業法に基づき，営業所の自動販売機に成人識別装置を装備することを条件に製造たばこの小売販売業の許可処分を受けたが，同装置を装備しなかったため，財務大臣は，同法に基づき甲の小売販売業許可処分を取り消した。以上の事実関係を前提に，行政手続法に関する次のアからウまでの各記述について，法令に照らし，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。なお，アからウまでの各記述は，行政手続法の定める適用除外には当たらない場面であり，たばこ事業法には，行政手続法の全部又は一部の適用を除外する規定は存在しない。
ア．財務大臣は，甲に対する小売販売業の許可処分を行う際にその理由を提示しなければならない。
イ．財務大臣は，小売販売業の許可申請に対する処分をするまでに通常要すべき標準的な処理期間を定めたときは，これを公にしておかなければならない。
ウ．財務大臣は，小売販売業許可取消処分について処分基準を定めたときは，これを公にしておかなければならない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"6"},{year:"2012",num:"25",subject:"gyo",q:`行政裁量に関する次のアからエまでの各記述について，法令又は最高裁判所の判例に照らし，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．社会保障給付の申請に対する処分について法令により行政裁量が認められる場合において，裁判所が一定の処分をすべき旨を命ずる判決をするためには，その処分をしないことが裁量権の範囲を超え，又はその濫用となると認められることが必要である。
イ．不利益処分について法令により行政裁量が認められる場合において，裁判所が一定の処分をしてはならない旨を命ずる判決をするためには，その処分をすることが裁量権の範囲を超え，又はその濫用となると認められることが必要である。
ウ．公務員の懲戒処分について法令により行政裁量が認められる場合において，裁判所は，懲戒権者と同一の立場に立って懲戒処分をすべきであったか，又はいかなる処分を選択すべきであったかについて判断し，その結果が懲戒権者の行った懲戒処分と異なるときは，その処分を取り消すことができる。
エ．工場排水の規制処分について法令により行政裁量が認められる場合において，裁判所が処分権限不行使の違法を理由とする国家賠償請求を認容するためには，処分権限の不行使が，その権限を定めた法令の趣旨，目的やその権限の性質等に照らし，具体的事情の下において，許容される限度を逸脱して著しく合理性を欠くと認められることが必要である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1121"},{year:"2012",num:"26",subject:"gyo",q:"Ａ市は，行政手続条例に，行政指導に関して次の１から５までの内容の規定を設けようとしている。この中から，行政手続法に同様の規定が置かれているものを２個選びなさい。ただし，１から５までの文中にある「条例」は，「法律」と読み替えるものとする。",c1:"１．行政指導に携わる者は，当該行政機関の任務又は所掌事務の範囲を逸脱してはならない。",c2:"２．申請の取下げ又は内容の変更を求める行政指導を行う場合には，原則として，行政指導の相手方に対し，行政指導の趣旨及び内容を記載した書面を交付しなければならない。",c3:"３．条例の定めるところにより，行政指導の相手方が行政指導に従わなかった旨を公表する場合には，原則として，行政指導の相手方に意見を述べる機会を与えなければならない。",c4:"４．行政指導指針を定めようとする場合には，原則として，広く一般の意見を求める意見公募手続を採らなければならない。",c5:"５．行政指導の相手方は，行政指導が本条例に違反することを理由に，行政指導をした行政機関に対し，行政指導の中止その他必要な措置を採るように求めることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"14"},{year:"2012",num:"27",subject:"gyo",q:`行政指導に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．行政指導は，相手方の任意の協力によって一定の行政目的を実現するものであって，法律にその具体的根拠規定がない場合に行われるものである。
イ．行政指導とは，指導，勧告，助言その他の行為であって処分に該当しないものをいうから，行政指導が国家賠償法第１条第１項にいう「公権力の行使」に当たることはない。
ウ．法律に許可の条件に違反した場合には許可を取り消すことができるとの規定がある場合に，許可を受けた相手方が条件に違反する行為をしていることが明らかとなったため，処分行政庁は，条件違反の是正を求める行政指導をした。ところが，相手方はこれに従う意思のない旨を表明したため，処分行政庁は，許可を取り消した。この場合の許可の取消しは，行政指導に従わなかったことを理由とする不利益な取扱いには当たらない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2012",num:"28",subject:"gyo",q:`次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．最高裁判所の判例によれば，新規に大規模マンションの建設を予定している住宅分譲業者ＡがＢ市に給水申込みをした事案において，Ｂ市が水道事業者として正常な企業努力をしているにもかかわらず近い将来において水不足が生ずることが確実に予見される場合には，水道法第１５条第１項にいう「正当の理由」が認められることから，Ｂ市はＡの給水契約の申込みを拒否することができる。
（参照条文）水道法
第１５条 水道事業者は，事業計画に定める給水区域内の需要者から給水契約の申込みを受けたときは，正当の理由がなければ，これを拒んではならない。
２，３ （略）
イ．最高裁判所の判例によれば，Ｃ市が特定の市立保育所を廃止する条例（以下｢条例｣という。）を制定した場合において，廃止される保育所で保育を受けている児童及びその保護者は，保育の実施期間満了まで当該保育所で保育を受けることを期待し得る法的地位を条例により違法に侵害されたと主張して，条例制定行為に対する取消訴訟を適法に提起することができる。
ウ．Ｄ市は，産業廃棄物処理業者Ｅとの間で公害防止協定を締結する場合には，当該協定において，必要があると認めるときは，Ｄ市職員をしてＥの所有する処理施設に実力で立ち入らせ，検査を行わせることができる旨を定めることができる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2012",num:"29",subject:"gyo",q:`行政代執行法による代執行に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．市が所有する土地に権原なく工作物が設置された場合，市長は，当該土地の所有権に基づき代執行により当該工作物を除却することができる。
イ．市が庁舎の一部屋の使用許可を市の職員組合に与えていたが，当該使用許可の期限が経過した後も組合員が立ち退かない場合，同部屋からの組合員の退去について代執行をすることはできない。
ウ．行政罰は，間接的に行政上の義務の履行を確保する機能を果たすことから，行政罰が適用できる場合，代執行以外の手段によってその履行を確保することが困難とはいえないため，代執行をすることはできない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ×",c6:"６．ア× イ× ウ○",c7:"７．ア× イ○ ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"5"},{year:"2012",num:"30",subject:"gyo",q:`行政機関の保有する情報の公開に関する法律（以下「情報公開法」という。）に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．開示請求を受けた行政機関の長は，当該開示請求があった日から３０日以内に当該開示請求に係る行政文書の全部若しくは一部を開示する旨の決定又は開示をしない旨の決定をしなければならず，この期間の延長は認められていない。
イ．開示請求に対し，行政機関の長が，当該開示請求に係る行政文書の存否を明らかにしないで，当該開示請求を拒否することができるのは，当該行政文書が存在しているか否かを答えるだけで，個人に関する情報（事業を営む個人の当該事業に関する情報を除く。）に係る不開示情報を開示することとなるときに限られる。
ウ．開示請求に係る行政文書に，公にすることにより，犯罪の予防，鎮圧又は捜査，公訴の維持，刑の執行その他の公共の安全と秩序の維持に支障を及ぼすおそれがあると行政機関の長が認めることにつき相当の理由がある情報が記録されている場合には，当該行政機関の長は，当該行政文書の開示を拒むことができる。
エ．自然人に限らず，法人であっても，情報公開法の定めるところにより，行政機関の長に対し，当該行政機関の保有する行政文書の開示を請求することができる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2211"},{year:"2012",num:"31",subject:"gyo",q:`処分性に関する次のアからウまでの各記述について，最高裁判所の判例に照らし，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．市町村の長が住民基本台帳法に基づき同法所定の氏名等の事項を住民票に記載する行為には，処分性が認められるから，出生した子につき住民票の記載を求める親からの申出に対し市町村の長がした当該記載をしない旨の応答には，処分性が認められるものといえる。
イ．国有普通財産の払下げは，売渡申請書の提出及びこれに対する払下許可の形式が採られており，国が優越的地位に立って私人との間の法律関係を定めるものであるから，処分性が認められるものといえる。
ウ．過大に登録免許税を納付して登記等を受けた者が，登録免許税法に基づいて，登記機関に対し税務署長への還付通知を行うよう請求した事例において，登記機関が当該請求を拒否する旨の通知を行った場合，当該拒否通知は，登記等を受けた者に対して簡易迅速に還付を受ける手続を利用することができる地位を否定する法的効果を有するから，処分性が認められるものといえる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2012",num:"32",subject:"gyo",q:`抗告訴訟における判決の効力に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．処分の取消判決が確定した場合，処分行政庁は，判決の拘束力により当該処分を取り消さなければならない。
イ．義務付け訴訟において請求を認容する判決が確定した場合，当該処分がされたのと同様の効果が生ずる。
ウ．課税処分を取り消す判決が確定した場合，当該課税処分を前提とする滞納処分としての差押処分がそのまま維持されることはない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2012",num:"33",subject:"gyo",q:`処分の取消しの訴えの審理に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．処分の取消しの訴えにおいて，原告は，処分に関係する一切の違法を理由として取消しを求めることができる。
イ．処分の取消しの訴えにおいて，裁判所は，訴訟関係を明瞭にするため，必要があると認めるときは，処分の理由を明らかにする資料であって当該処分をした行政庁が保有するものの全部又は一部の提出を求める釈明処分をすることができる。
ウ．処分の取消しの訴えにおいて，裁判所が職権ですることができる証拠調べの対象は，訴訟要件に関するものに限られない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"5"},{year:"2012",num:"34",subject:"gyo",q:`行政事件訴訟法第３条第２項以下に定める法定抗告訴訟に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．生活保護開始申請を却下された者は，保護の実施機関において生活保護を開始しないことが裁量権の範囲の逸脱又は濫用に当たるといえるならば，却下処分の取消しの訴えに代えて，生活保護開始決定の義務付けの訴えを適法に提起することができる。
イ．建築基準法令に違反した建築物の敷地の隣地所有者は，当該建築物が倒壊する危険があるのに特定行政庁が違反是正措置としての処分をしないのは違法であるとして，不作為の違法確認の訴えを適法に提起することができる。
ウ．差止めの訴えを提起することができるのは，行政庁が一定の処分又は裁決をしてはならない旨を命ずることを求めるにつき法律上の利益を有する者に限られる。
エ．取消訴訟と義務付け訴訟が併合して提起されている場合，両訴訟の弁論及び裁判は，分離しないでしなければならないから，裁判所は，両訴訟に係る判決を同時にしなければならない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2212"},{year:"2012",num:"35",subject:"gyo",q:`普通地方公共団体であるＡ市においては，観光の振興のために，宗教法人Ｂの主宰により長年にわたり行われている行事と提携する事業が企画されたが，Ａ市の住民であるＸは，この事業の内容については政教分離の原則等との関係で慎重に検討すべき問題があると考えている。このような場合において，Ｘが地方自治法（以下「法」という。）第２４２条の２第１項の規定に基づいて提起する住民訴訟に係る各事例に関する次のアからエまでの各記述（いずれにあっても，各記述に係るもの以外の訴訟要件については問題はなく，権限の委任についての定めもないものとする。）について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．Ａ市の市長Ｃが宗教法人Ｂの主宰する行事に特定の日時に出席することが予定されている事例において，Ｘは，当該出席行為に伴う公金の支出その他の法の定める財務会計上の行為について，法第２４２条の２第１項第１号の規定に基づき，その差止めを求める住民訴訟を，適法に提起することができる。
イ．問題とされる事業に関して公金の支出を内容とする処分がされた事例において，Ｘは，当該\f処分の取消しを求めるにつき法律上の利益を有する者に当たるか否かにかかわらず，法第２４２条の２第１項第２号の規定に基づき，その取消しを求める住民訴訟を，適法に提起することができる。
ウ．Ａ市から町内会Ｄが貸付けを受けていた土地の上に宗教法人Ｂの礼拝の施設が存在する事例において，Ｘは，法第２４２条の２第１項第３号の規定に基づき，市長Ｃが町内会Ｄに上記の施設が存在する状態の解消を求めること等の当該土地の管理を怠る事実の違法確認を求める住民訴訟を，適法に提起することができる。
エ．町内会ＤがＡ市から貸付けを受けていた土地の貸付料の支払を滞っていた事例において，Ｘは，法第２４２条の２第１項第４号本文の規定に基づき，市長Ｃが町内会Ｄに契約による債務の履行としての貸付料の支払を請求することを求める住民訴訟を，適法に提起することができる。
（参照条文）地方自治法第２４２条の２ 
普通地方公共団体の住民は，前条（注：住民監査請求）第１項の規定による請求をした場合において，同条第４項の規定による監査委員の監査の結果（中略）に不服があるとき（中略）は，裁判所に対し，同条第１項の請求に係る違法な行為又は怠る事実につき，訴えをもつて次に掲げる請求をすることができる。
一 当該執行機関又は職員に対する当該行為の全部又は一部の差止めの請求
二 行政処分たる当該行為の取消し又は無効確認の請求
三 当該執行機関又は職員に対する当該怠る事実の違法確認の請求
四 当該職員又は当該行為若しくは怠る事実に係る相手方に損害賠償又は不当利得返還の請求をすることを当該普通地方公共団体の執行機関又は職員に対して求める請求。
（以下略）
２～１２ （略）`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1112"},{year:"2012",num:"36",subject:"gyo",q:`処分の効力，処分の執行又は手続の続行の全部又は一部の停止（以下「執行停止」という。）に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．執行停止の決定をする場合においては，本案の訴えが提起されていなければならないが，当該訴えが適法であるか否かは問題とならない。
イ．執行停止は，処分，処分の執行又は手続の続行により生ずる重大な損害を避けるため他に適当な方法がないときに限り，することができる。
ウ．処分の効力の停止は，処分の執行又は手続の続行の停止によって目的を達することができる場合には，することができない。
エ．民事保全法に規定する仮処分をもっては，裁判所は，処分の執行停止を命ずることはできない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2211"},{year:"2012",num:"37",subject:"gyo",q:`次のアからウまでの各記述の下線部について，最高裁判所の判例に照らし，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．固定資産税の納税者は，固定資産税の登録価格について不服がある場合，地方税法に基づく審査の申出及びその決定に対する取消しの訴えによってのみ争うことができるとされている。したがって，当該納税者がこれら手続を経ることなく，登録価格が過大であったとして，国家賠償法に基づき固定資産税の過納金相当額の損害賠償請求をすることはできない。
イ．不動産の強制競売事件における執行裁判所の処分については，民事執行法に定める救済の手続により是正することができる。こうした手続が予定されているから，執行裁判所自らその処分を是正すべき場合等特別の事情がある場合を除き，権利者がその手続による救済を求めることを怠ったため損害が生じたとしても，国家賠償法に基づき損害賠償請求をすることはできない。
ウ．犯罪の被害者は，公訴提起により利益を受けることから，検察官の不起訴処分の違法を理由として，国家賠償法に基づき損害賠償請求をすることができる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"6"},{year:"2012",num:"38",subject:"gyo",q:`損失補償に関する次のアからエまでの各記述について，法令又は最高裁判所の判例に照らし，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．Ａが所有する一団の土地の一部が収用された事例において，残地部分が不整形になり，その価格が収用前に比べて減少した場合には，起業者はＡに対して，残地に関する損失を補償しなければならない。
イ．ある土地が道路用地として収用され，道路が建設された結果，道路面とその隣接地との間に高低差が生じた事例において，隣接地の所有者Ｂが高低差を解消するために通路の設置を余儀なくされた場合には，Ｂは起業者に対して，通路設置に要した費用の補償を請求することができる。
ウ．Ｃの土地が収用される事例において，権利取得裁決により起業者はＣの所有する土地を取得することから，事業認定の時点ではなく，当該裁決の時点における土地取引価格を基準として，Ｃが近傍において被収用地と同等の代替地を取得することができるだけの補償金額が，算定されなければならない。
エ．自己の所有する土地を収用されたＤは，権利取得裁決に定められた補償額を不服として増額請求訴訟を提起して勝訴した場合には，正当な補償額と裁決で定められた補償額との差額のみならず，その差額に対する，裁決で定められた権利取得の時期からその支払済みに至るまでの民法所定の法定利率相当額を請求することができる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1121"},{year:"2012",num:"39",subject:"gyo",q:`次のアからエまでの各記述について，行政不服審査法（以下「法」という。）に照らし，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．法は，公権力の行使に当たる事実上の行為で，その内容が継続的性質を有しないものも，「処分」に含まれると定めている。
イ．審査請求は，建築基準法に基づいて設置される建築審査会のような，独立して職権を行使する第三者機関に対して行われる不服申立てを意味する。
ウ．ある処分について異議申立て及び審査請求をすることができる場合につき，法は，自由選択主義を採用しているので，当該処分に不服のある者は，異議申立てについての決定を経た後で審査請求をすることも，直ちに審査請求をすることもできる。
エ．審査請求に理由があるときは，審査庁は，原則として，審査請求の全部又は一部を認容する裁決をしなければならないが，例外として，事情裁決によって当該審査請求を棄却することができる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2221"},{year:"2012",num:"40",subject:"gyo",q:`都道府県知事が自治事務又は法定受託事務として，法律を根拠に私人に対し行政処分を行う場合に関する次のアからエまでの各記述について，法令に照らし，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。なお，本問にいう「法律」には，当該法律に基づく政令も含まれるものとする。
ア．処分の根拠となる法律が特に都道府県の自治事務とする旨を定めているときに限り，処分を行う事務は，都道府県の自治事務とされる。
イ．処分を行うことが都道府県の自治事務である場合，及び法定受託事務である場合のいずれにおいても，国が都道府県の事務処理について関与をするに際しては，法律の根拠が必要である。
ウ．処分を行うことが都道府県の自治事務である場合，及び法定受託事務である場合のいずれにおいても，私人が処分の取消しを求める訴えの被告は，都道府県である。
エ．処分を行うことが都道府県の自治事務である場合において，法律が定める処分の基準を，都道府県は条例により変更することができる旨が，地方自治法に定められている。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2112"},{year:"2012",num:"1",subject:"min",q:`行為能力に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．精神上の障害により事理を弁識する能力が不十分である者は，自ら補助開始の審判を請求することができない。
イ．成年被後見人が認知をする場合，成年後見人の同意は不要である。
ウ．保佐人の同意を得なければならない行為について，被保佐人の利益を害するおそれがないにもかかわらず保佐人が同意をしないとき，被保佐人は，家庭裁判所に対し，保佐人の同意に代わる許可を請求することができる。
エ．被補助人について後見開始の審判をする場合，家庭裁判所は，その者に係る補助開始の審判を取り消さずに後見開始の審判をすることができる。
オ．精神上の障害により事理を弁識する能力が不十分である者について，家庭裁判所は，同意権も代理権も付与されない補助人を選任することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2012",num:"2",subject:"min",q:"制限行為能力者に関する次の１から４までの各記述のうち，正しいものはどれか。",c1:"１．制限行為能力者のした契約について，制限行為能力者及びその法定代理人が取消権を有するときは，契約の相手方も取消権を有する。",c2:"２．契約を締結した成年者がその後に後見開始の審判を受けたとき，成年後見人は，その契約の当時，既にその成年者につき後見開始の事由が存在していたことを証明して，その成年者のした契約を取り消すことができる。",c3:"３．未成年者は，その契約を取り消すことができることを知って契約を締結したときでも，その契約を取り消すことができる。",c4:"４．制限行為能力者が，自己を行為能力者であると信じさせるために相手方に対して詐術を用いて法律行為をした場合は，その法律行為の要素に錯誤があるときでも，錯誤による無効を主張することはできない。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2012",num:"3",subject:"min",q:"錯誤に関する次の１から５までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．意思表示の相手方が表意者の錯誤を認識していた場合であっても，表意者において錯誤に陥ったことについて重大な過失があったときは，表意者は，錯誤による無効を主張することができない。",c2:"２．売買の目的物に隠れた瑕疵があり，この点について買主が錯誤に陥っていた場合は，錯誤の規定に優先して，瑕疵担保責任の規定が適用されることになる。",c3:"３．裁判上の和解は，裁判所の関与の下にされるものであるから，これについて錯誤による無効を主張することはできない。",c4:"４．表意者に対して債権を有する者は，その債権を保全する必要がある場合，表意者がその意思表示の要素に関し錯誤のあることを認めているときは，その意思表示の無効を主張し，その結果生ずる表意者の債権を代位行使することができる。",c5:"５．意思表示の動機に錯誤があった場合，その意思表示の錯誤による無効を主張するためには，その動機が表示されていれば足り，その動機が法律行為の内容となっている必要はない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2012",num:"4",subject:"min",q:`任意代理に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．代理人に対して意思表示をした者が，本人に対する意思表示であることを示したときは，代理人において本人のために受領することを示さなくても，その意思表示は本人に対して効力を生ずる。
イ．代理権は，代理人が後見開始の審判を受けたときは消滅する。
ウ．意思表示の効力がある事情を知っていたことによって影響を受けるべき場合，その事実の有無は，本人の選択に従い，本人又は代理人のいずれかについて決する。
エ．代理権を有しない者がした契約を本人が追認する場合，その契約の効力は，別段の意思表示がない限り，追認をした時から将来に向かって生ずる。
オ．代理人が本人の指名に従って復代理人を選任した場合は，その選任及び監督について本人に対して責任を負わないが，その復代理人が不誠実であることを知りながら，その旨を本人に通知し又は復代理人を解任することを怠ったときは，本人に対して責任を負う。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2012",num:"5",subject:"min",q:"無権代理に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．Ａは，見知らぬ他人であるＢ宅に侵入し，Ｂの印章と登記関係の書類を盗み出し，それを用いて，ＢがＡにＢ所有の甲不動産を売却する代理権を与えた旨の委任状を偽造し，Ｂの代理人として，Ｃに対して甲不動産を売却する契約を締結した。この場合において，ＣがＡに代理権がないことについて善意無過失であっても，表見代理は成立しない。",c2:"２．判例によれば，Ａの親権者Ｂは，Ｃから金銭を借り入れるに当たり，Ａを代理してＡ所有の不動産にＣのＢに対する債権を担保するために抵当権を設定することはできないし，その設定行為を追認することもできない。",c3:"３．代理権を有しない者が代理行為として契約をした場合，その契約の時に代理権のないことを知っていた相手方は，本人が追認をする以前でもこれを取り消すことができない。",c4:"４．無権代理人が本人の追認を得ることができなかったときは，代理権の不存在につき善意無過失の相手方は，無権代理人に損害賠償を請求することができる。",c5:"５．判例によれば，ＡがＢに代理権を与えないまま「Ａ」という名称の使用を許し，ＢがＡの取引であるように見える外形を作り出して取引をした場合，この取引の効果がＡに帰属することはない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2012",num:"6",subject:"min",q:`条件，期限及び期間の計算に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．条件が成就しないことが法律行為の時に既に確定していた場合，その条件が解除条件であるときは無条件の法律行為となり，その条件が停止条件であるときは無効な法律行為となる。
イ．不法な条件を付した法律行為は無効であるが，不法な行為をしないことを条件とする法律行為は有効である。
ウ．条件の付された権利は，その条件の成否が未定である間は，相続することができない。
エ．判例によれば，不法行為による損害の賠償を請求する債権の消滅時効の期間の計算については，被害者が損害及び加害者を知った時が午前零時でない限り，初日は算入しない。
オ．契約の一方当事者に債務不履行があった場合において，催告期間内に履行しなければ契約を解除する旨の意思表示を他方当事者がしたときは，その催告期間内に履行がなければ，改めて解除の意思表示をしなくても，解除の効果は発生する。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2012",num:"7",subject:"min",q:`消滅時効に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．単独で金銭債務を負う債務者が死亡し，複数の相続人がいる場合，遺産分割によってその金銭債務を負う者が決定するまでの間は，その債務について消滅時効は中断する。
イ．ＡのＢに対する金銭債権を担保するためＣ所有の不動産に抵当権が設定された場合，その抵当権に基づく担保不動産競売の開始決定がされ，その決定正本が裁判所からＢに送達されたときは，ＡのＢに対する債権の消滅時効は中断する。
ウ．主たる債務の消滅時効期間が１０年である場合，連帯保証人が主たる債務の履行期から７年を経過した日に保証債務の履行として弁済をしても，主たる債務の履行期から１０年が経過したときは，主たる債務が時効により消滅するので，弁済をした連帯保証人は，主たる債務者に対して求償権を行使することができない。
エ．ＡとＢが連帯債務を負う場合において，Ａが全部の負担部分を有するときは，Ｂが債権者に対して債務を承認しても，Ａの債務について消滅時効は中断せず，その消滅時効が完成すれば，Ｂも債務を免れる。
オ．ＡとＢが夫婦の場合，Ａが自己の単独名義でＣと日常の家事に関して契約を締結して債務を負ったとき，ＣのＡに対する債権の裁判上の請求により，ＣのＢに対する債権の消滅時効も中断する。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2012",num:"8",subject:"min",q:"法律上の要件としての善意又は悪意に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．相続開始の１年前の日より前にされた贈与は，それがされた当時に当事者双方が遺留分権利者に損害を加えることを知っていたとき，その価額が遺留分算定の基礎となる財産の価額に算入される。",c2:"２．Ａが所有する不動産をＢが占有する場合において，Ｂが，１０年間の占有を継続したことを理由として，この不動産の所有権を時効により取得するためには，Ｂは，占有を開始した時に善意無過失であればよく，その後にＢが悪意になっても，Ｂの時効取得の成否に影響しない。",c3:"３．善意の占有者が本権の訴えにおいて敗訴したときは，その訴え提起の時から悪意の占有者とみなされる。",c4:"４．判例によれば，Ａが所有する不動産を７年間継続して占有したＢから，この不動産を買い受けて引渡しを受けたＣが更に４年間継続して占有する場合において，Ｃが，１０年間の占有を継続したことを理由として，この不動産の所有権を時効により取得するためには，Ｂが占有を開始した時に善意であれば，Ｃの占有開始時にＣが善意である必要はない。",c5:"５．Ａに対する債権者Ｂが，ＡからＣへの不動産の贈与を詐害行為を理由に転得者Ｄを被告とし て取り消す場合，その請求が認められるためには，その贈与がＢを害することを，ＡＣ間の贈 与の当時，Ｄが知っていたことが必要である。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2012",num:"9",subject:"min",q:"物権と債権の対比に関する次の１から５までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．債権は時効により消滅することがあるが，物権は時効により消滅することはない。",c2:"２．建物の引渡しを受けた建物賃借人は，その建物の使用を妨害された場合，占有権に基づいて妨害排除を求めることはできるが，賃借権に基づいて妨害排除を求めることはできない。",c3:"３．物権は一筆の土地の一部についても成立することがあるが，債権も一筆の土地の一部を目的として成立することがある。",c4:"４．債権は別の債権を目的とすることができるが，物権は債権を目的とすることはできない。",c5:"５．物権は時効により取得することができるが，債権は時効により取得することはできない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2012",num:"10",subject:"min",q:"引渡しの方法に関する次の１から５までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．Ａは，Ｂから動産甲を買い受け，占有改定の方法で引渡しを受けたが，その後，Ｂは，動産甲をＣに奪われてしまった。この場合，Ａは，所有権に基づいてＣに対して動産甲の返還を請求することができるのみでなく，Ｃに対して占有回収の訴えを起こすことができる。",c2:"２．Ａは，Ｂから動産甲を買い受け，占有改定の方法で引渡しを受けたが，その後，Ｂは，動産甲をＣにも売却し，現実に引き渡した。この場合，Ｃは，ＢのＡに対する動産甲の売却について善意無過失でなくても，動産甲の所有権取得をＡに対抗することができる。",c3:"３．Ａは，Ｂから借用して占有していた動産甲をＢから買い受けた。この場合，Ａは，Ｂに動産甲をいったん返還した上でＢから改めて動産甲の現実の引渡しを受けない限り，その所有権の取得を第三者に対抗することはできない。",c4:"４．Ａは，Ｂに対する債権を担保するため，Ｂとの間で，Ｂ所有の動産甲に質権の設定を受けた。この場合，指図による占有移転により動産甲の引渡しを受けたのみでは，質権の効力は生じない。",c5:"５．Ａは，Ｂが第三者に寄託している動産甲をＢから買い受け，自ら受寄者に対し，以後Ａのために動産甲を占有することを命じ，受寄者がこれを承諾したときは，Ａは，動産甲の占有権を取得する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2012",num:"11",subject:"min",q:"物権的請求権に関する次の１から５までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．所有権に基づく物権的請求権は，所有権から派生する権利であるから，所有権と独立に物権的請求権のみを譲渡することはできないが，所有権とは別に消滅時効にかかる場合がある。",c2:"２．建物の賃貸借契約が終了したとき，建物の所有者である賃貸人は，賃借人に対し，賃貸借契約の終了に基づいて建物の返還を求めることはできるが，所有権に基づいて建物の返還を請求することはできない。",c3:"３．Ａは，Ｂ所有の土地に何らの権原なく建物を建て，この建物をＣに賃貸した。この場合，建物を占有しているのはＣであるから，Ｂは，Ａに対して，建物を収去して土地を明け渡すことを請求することはできない。",c4:"４．畑として使用されてきた土地をＡ，Ｂ及びＣが持分３分の１ずつで共有していたところ，第三者が，Ａの承諾を得て，その土地を造成して宅地にしようとした。この場合，Ｃは，単独で，その第三者に対し，共有持分権に基づく物権的請求権の行使として，土地全体について造成行為の禁止を求めることができる。",c5:"５．ＡがＢに対して所有権に基づく妨害排除請求権を行使するには，Ｂに事理を弁識する能力があることは必要でないが，妨害状態が発生したことについてＢに故意又は過失があることが必要である。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2012",num:"12",subject:"min",q:"地上権に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．甲土地を所有するＡがＢのために甲土地を目的とする地上権を設定してその旨の登記がされ，Ｂの地上権を目的とする抵当権が設定されていた場合でも，その後，ＢがＡから甲土地の所有権を取得したときは，地上権は消滅する。",c2:"２．甲土地を所有するＡがＢ及びＣのために甲土地を目的とする地上権を設定してその旨の登記がされ，その地上権をＢ及びＣが準共有している場合でも，その後，ＢがＡから甲土地の所有権を取得したときは，地上権は消滅する。",c3:"３．既に抵当権が設定されている甲土地を所有するＡがＢのために甲土地を目的とする地上権を設定してその旨の登記がされた場合，その後，ＢがＡから甲土地の所有権を取得したときは，地上権は消滅する。",c4:"４．甲土地を所有するＡがＢのために甲土地を目的とする地上権を設定してその旨の登記がされたが，ＢのＡに対する地代支払債務について未払があった場合，その後，ＢがＡから甲土地の所有権を取得したときは，その未払債務は消滅する。",c5:"５．甲土地を所有するＡがＢのために甲土地を目的とする地上権を設定してその旨の登記がされ，Ｂが甲土地上に乙建物を建ててＣに賃貸したときは，その後，ＢがＡから甲土地の所有権を取得したときでも，地上権は消滅しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2012",num:"13",subject:"min",q:"用益物権に関する次の１から５までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．入会団体の構成員は，入会権の目的となっている山林原野の使用収益を妨げる者がいる場合には，別段の慣習がない限り，単独で，その者に対し，妨害排除を請求することができる。",c2:"２．借地借家法にいう借地権には，建物の所有を目的とする地上権も含まれる。",c3:"３．建物が存する土地を目的として，先順位の甲抵当権及びこれと抵当権者を異にする後順位の乙抵当権が設定された後，甲抵当権が被担保債権の弁済により消滅し，その後，乙抵当権の実行により土地と地上建物の所有者を異にするに至った場合において，当該土地と建物が，甲抵当権の設定時には同一の所有者に属していなかったとしても，乙抵当権の設定時に同一の所有者に属していたときは，法定地上権が成立する。",c4:"４．要役地の所有者が，他人所有の土地を承役地とする通行地役権を時効により取得するために は，自ら通路を開設して継続的に通行の用に供することが必要である。",c5:"５．通行地役権の承役地がＡに譲渡された場合において，譲渡の時に要役地の所有者Ｂによって 承役地が継続的に通路として使用されていることがその位置，形状，構造等の物理的状況からして客観的に明らかであったとしても，Ａが通行地役権の存在を認識していなかったときは， Ａは，通行地役権につき，地役権設定登記の不存在を主張する正当な利益を有する第三者に当たる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2012",num:"14",subject:"min",q:`留置権及び抵当権に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．留置権は，他人の物の占有者に認められる権利であるから，留置権者が目的物を第三者に賃貸した場合には，目的物の賃貸について所有者の同意を得ていても，留置権は消滅する。
イ．留置権者が目的物の占有を奪われた場合，留置権者が占有回収の訴えを提起して勝訴し，現実の占有を回復すれば，留置権は消滅しない。
ウ．抵当権者は，目的物が第三者の行為により滅失した場合，物上代位により，その第三者に対して所有者が有する損害賠償請求権から優先弁済を受けることができるのに対し，留置権者は，目的物が第三者の行為により滅失した場合には，損害賠償請求権に物上代位権を行使することができない。
エ．抵当権は，債権の弁済がないときに目的物を換価して優先弁済を受ける権利であるから，抵当権者は，目的物の競売を申し立てることができるが，留置権は，債権の弁済を受けるまで目的物を留置する権利にすぎないから，留置権者は，目的物の競売を申し立てることはできない。
オ．留置権においては，目的物の留置自体により被担保債権の権利行使がされていることになるから，債権者が目的物を占有している限り，被担保債権が時効消滅することはない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2012",num:"15",subject:"min",q:"抵当権の効力に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．抵当権は，その担保する債権について不履行があったときは，その後に生じた抵当不動産の果実に及ぶ。",c2:"２．借地上の建物が抵当権の目的となっている場合，建物の敷地利用権である借地権にも抵当権の効力が及ぶ。",c3:"３．抵当権の被担保債権について主たる債務者となっている者は，抵当権消滅請求を行うことができないが，その債務の連帯保証人は，抵当権消滅請求を行うことができる。",c4:"４．建物に設定された抵当権が実行された場合において，抵当権の設定登記後であって競売手続の開始前からその建物の引渡しを受けて占有し使用している者が存在するときは，その建物の占有者は，買受人による建物買受けの時から６か月間，買受人に対する使用の対価を支払うことなく建物の明渡しを猶予される。",c5:"５．更地に抵当権が設定された後，その土地の上に第三者が建物を築造したとき，抵当権者は，その土地とともにその建物を競売することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"34"},{year:"2012",num:"16",subject:"min",q:"根抵当権に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．手形上又は小切手上の請求権を根抵当権の被担保債権と定める場合においても，第三者が振り出し，債務者が裏書した手形上又は小切手上の請求権を根抵当権の被担保債権とすることはできない。",c2:"２．根抵当権の元本の確定前に根抵当権者から債権を取得した者は，その債権について当該根抵当権を行使することはできない。",c3:"３．元本確定前において根抵当権の担保すべき債権の範囲及び債務者についての変更は，後順位抵当権者がいる場合は，その承諾を得なければすることができない。",c4:"４．元本確定前に根抵当権者が死亡して相続が開始した場合において，根抵当権者の相続人と根抵当権の設定者との間でその根抵当権を承継する相続人を合意しなかったときは，その根抵当権の担保すべき元本は，根抵当権者の相続開始の時に確定する。",c5:"５．元本確定後の根抵当権は，極度額を限度として，元本のほか，利息及び遅延損害金がある場合には，２年を超える利息及び遅延損害金についても行使することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"13"},{year:"2012",num:"17",subject:"min",q:"担保物権についての特約に関する次の１から４までの各記述のうち，正しいものはどれか。",c1:"１．動産の売主と買主との間で，売買の目的物を買主が第三者に転売して引き渡したときでも，売主はその目的物に先取特権を行使することができる旨の特約がある場合において，買主がその目的物を転売して転買主にこれを引き渡したときは，売主は，転買主が占有している目的物について，その特約について転買主が悪意であるときでも，先取特権を行使することはできない。",c2:"２．動産質権において，質権者と質権設定者との間で，被担保債権の利息はその質権によって担保されないとの特約がされた場合においても，利息は，質権の被担保債権に含まれる。",c3:"３．不動産質権者は，質権の目的物を使用及び収益をすることができ，質権者と質権設定者との間の特約で，その使用収益権を排除することはできない。",c4:"４．建物が存する土地について抵当権が設定された場合において，その抵当権者と抵当権設定者との特約で，その土地上の建物にも抵当権の効力を及ぼすことができる旨の合意がされたときは，その土地の抵当権は，土地の上に存するその建物にも及ぶ。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2012",num:"18",subject:"min",q:"履行の強制に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．売買契約の目的である建設機械の引渡しを受けた買主が代金を支払わないとき，売主は，買主に対し，遅延の期間に応じ，債務の履行を確保するために相当と認める一定の額の金銭を自己に支払うべき旨を裁判所に請求することができる。",c2:"２．合意により午後９時以降はピアノを弾かないという債務を隣人に対して負担している者が，午後９時以降にピアノを弾くことを繰り返しているとき，この隣人は，当該ピアノの使用禁止及びその競売を裁判所に申し立てることができる。",c3:"３．小麦１００キログラムの売買契約で，代金の前払を受けた売主が物品を引き渡さないとき，買主は，売主の費用で同種，同量及び同等の小麦を第三者に調達させることを裁判所に請求することができる。",c4:"４．賃貸人が賃借人に対して賃貸建物を引き渡さないとき，賃借人は，賃貸人に対し，遅延の期間に応じ，債務の履行を確保するために相当と認める一定の額の金銭を自己に支払うべき旨を裁判所に請求することができる。",c5:"５．多額の債務を負う者が死亡し，共同相続が開始した場合において，相続人の一人が相続放棄をしないとき，他の共同相続人は, この相続人を被告として相続放棄の意思表示をすべき旨の訴えを提起することができ，これを命ずる判決が確定すれば，被告となった相続人は，判決確定の時に相続放棄をしたものとみなされる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2012",num:"19",subject:"min",q:"債権者代位権に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．ＡがＢに対して有している売買代金債権をＡの債権者ＣがＡに代わって行使し，売買代金の支払を求めて訴えを提起した場合において，この請求を認容する判決が確定すれば，このＡのＢに対する売買代金債権は，弁済により消滅したものとみなされる。",c2:"２．判例によれば，債権者が代位権の行使に着手した事実を債務者が知ったとしても，債務者は，債権者から代位の通知を受けない間は，代位権行使の対象となった権利を自ら行使することができる。",c3:"３．債務者の権利を代位行使する債権者は，債務者の代理人としてではなく，自己の名で当該権利を行使するものであり，自己の財産におけるのと同一の注意をもって権利を行使すれば足りる。",c4:"４．判例によれば，離婚に伴う財産分与請求権は，審判によりその具体的内容が確定したときは，財産分与を受ける者の債権者が債権者代位の目的とすることができる。",c5:"５．債務者に対して複数の債権者がいる場合において，このうちの一人が債務者の有する金銭債権を代位行使するときは，代位行使することができる金銭債権の額は，複数の債権者が有する債権の総額に占める代位債権者の債権の額の割合に応じて算出された額を限度とする。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2012",num:"20",subject:"min",q:`貸金等根保証契約（一定の範囲に属する不特定の債務を主たる債務とし，その債務の範囲に金銭の貸渡し又は手形の割引を受けることにより負担する債務が含まれ，保証人が自然人である保証契約）に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．貸金等根保証契約は，書面でしなければ，その効力を生じない。
イ．貸金等根保証契約の締結の日から３年を経過したときは，保証人は，主たる債務の元本の確定を請求することができる。
ウ．貸金等根保証契約は，極度額を定めなければ，その効力を生じない。
エ．貸金等根保証契約における主たる債務の元本は，保証人に対し債権者が金銭債権についての強制執行を申し立てた場合には，これに基づき強制執行が開始されたときに限り，確定する。
オ．貸金等根保証契約における主たる債務の元本は，主たる債務者が死亡した場合でも当然には確定しない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2012",num:"21",subject:"min",q:"債権譲渡に関する次の１から５までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．譲渡禁止特約のある指名債権について，譲受人が特約の存在を知り，又は重大な過失により特約の存在を知らないでこれを譲り受けた場合でも，その後，債務者が債権の譲渡について承諾を与えたときは，債権譲渡は譲渡の時にさかのぼって有効となるが，第三者の権利を害することはできない。",c2:"２．指名債権の譲受人が，債権者代位権により，譲渡人に代位して債務者に債権譲渡の通知をしたとしても，その債権譲渡を債務者に対抗することはできない。",c3:"３．同一の債権に対する債権譲渡と債権差押えとの間の優劣は，債権譲渡についての第三者対抗要件が具備された時と債権差押命令が当該債権の債務者に送達された時の先後で決する。",c4:"４．Ａ法人がＢに対する金銭債権をＣに譲渡し，その債権の譲渡につき債権譲渡登記ファイルに譲渡の登記がされた場合であっても，Ａからの債権譲渡通知がＢに到達しておらず，かつ，Ｂがその債権譲渡を承諾していないときは，Ｃは，Ｂに対して自己が債権者であることを主張することができない。",c5:"５．譲渡禁止特約が付された債権であっても差押えをすることはできるが，その差押債権者が譲渡禁止特約につき悪意であるときは，当該債権の債務者は差押債権者に対して譲渡禁止特約をもって対抗することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2012",num:"22",subject:"min",q:"債務の消滅に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．建物賃貸借契約の終了について争いがあり，賃貸人が賃料の受領を拒んでいるときは，賃借人は，賃借人の住所地の供託所又は賃貸人の住所地の供託所に賃料を供託することができる。",c2:"２．判例によれば，金銭消費貸借契約を締結して１０００万円を借り受けた債務者が，貸主との間で，金銭を支払う代わりに債務者所有の１０００万円相当の土地を譲り渡す合意をしたときは，この合意の性質を代物弁済又は更改のいずれと解しても，合意成立の時点で旧債務は消滅する。",c3:"３．ＡのＢに対する債権を担保するため，Ｂ所有の土地に抵当権が設定された後，ＣのＢに対する債権を担保するためにその土地に後順位抵当権が設定された場合において，ＡがＢを単独で相続したときは，Ａの抵当権は消滅する。",c4:"４．債務者が１個又は数個の債務について元本のほか利息及び費用を支払うべき場合において，弁済をする者がその債務の全部を消滅させるのに足りない給付をしたときは，順次に費用，利息及び元本に充当される。",c5:"５．債権者が債務者に対して債務の免除をする場合には，債務者の同意がなければ，免除の効果は発生しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"34"},{year:"2012",num:"23",subject:"min",q:"求償権に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．保証人が主たる債務者の委託を受けて保証をした場合において，過失なく債権者に弁済をすべき旨の裁判の言渡しを受けたときは，その保証人は，主たる債務者に対して求償権を有する。",c2:"２．判例によれば，債務者Ａの委託を受けてＡの債務を担保するため抵当権を設定したＢは，当該抵当権の被担保債権の弁済期が到来したとしても，Ａに対し，あらかじめ求償権を行使することができない。",c3:"３．連帯債務者であるＡが債権者Ｂに対する自己の債権をもってする相殺が可能であった場合において，他の連帯債務者ＣがＡに通知しないで債権者Ｂに弁済をしたとき，Ａは，Ｃからの求償を拒むことができる。",c4:"４．連帯債務者Ａ，Ｂ及びＣのうち，Ａが債権者から債務の全額につき免除を受けた場合，Ａは，Ｂ及びＣに対し，各自の負担部分について求償権を取得する。",c5:"５．判例によれば，Ａが，使用者であるＢの事業の執行について，Ｃとの共同の不法行為によって他人に損害を加えた場合において，ＣがＡとの過失割合によって定められる自己の負担部分を超えて被害者に損害を賠償したときは，Ｃは，Ｂに過失がなくても，Ａの負担部分について，Ｂに求償することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2012",num:"24",subject:"min",q:`同時履行の抗弁に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．売買契約が詐欺を理由として取り消された場合において，相互に返還されるべき給付は，同時履行の関係にある。
イ．金銭消費貸借契約に基づく貸金債務の弁済と当該債務の担保のためにされた抵当権設定登記の抹消登記手続は，同時履行の関係にある。
ウ．土地の売買契約における売主の所有権移転登記義務と買主の代金支払義務は，同時履行の関係にある。
エ．建物の賃借人が造作買取請求権の行使をした場合，賃貸人の造作代金支払債務と賃借人の建物引渡債務は，同時履行の関係にある。
オ．有償寄託において，寄託者の報酬支払債務と受寄者の目的物返還債務は，同時履行の関係にある。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2012",num:"25",subject:"min",q:"消費貸借に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．消費貸借は，金銭でない物を目的としてすることができる。",c2:"２．無利息の金銭消費貸借は，書面でしなければ，その効力を生じない。",c3:"３．返還の時期が暦日である確定期限で定められた場合，貸主が目的物の返還を請求する訴訟において，原告は，その期限の到来を主張する必要があるが，暦日の到来は顕著な事実であるから証明することを要しない。",c4:"４．判例によれば，消費貸借により貸し渡された金銭の返還義務を目的として準消費貸借をすることは許されない。",c5:"５．消費貸借の予約は，その後に当事者の一方が破産手続開始の決定を受けたときは，その効力を失う。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"24"},{year:"2012",num:"26",subject:"min",q:`転貸借に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．土地の賃借人が賃貸人の承諾を得て当該土地を転貸したときは，原賃貸借の賃貸人と賃借人との間で原賃貸借を合意解除しても，これをもって転借人に対抗することができない。
イ．建物の賃借人が賃貸人の承諾を得て当該建物を転貸した場合において，原賃貸借が賃借人（転貸人）の賃料不払を理由とする解除により終了したときは，転貸借は，原賃貸借の賃貸人が転借人に対して当該建物の返還を請求した時に，転貸人の転借人に対する債務の履行不能により終了する。
ウ．建物所有を目的とする土地賃貸借の賃借人が，その土地上に建築した建物を第三者に譲渡しようとする場合において，その第三者が土地の転借をしても原賃貸借の賃貸人に不利となるおそれがないにもかかわらず，当該賃貸人がその転貸を承諾しないときは，裁判所は，原賃貸借の賃借人の申立てにより，承諾に代わる許可を与えることができる。
エ．建物所有を目的とする土地賃貸借の賃借人が，当該土地上に建物を建築し，土地の賃貸人の承諾なくして当該建物を第三者に賃貸し，使用収益させることは，土地の無断転貸に該当する。
オ．無断転貸を理由とする解除権は，原賃貸借の賃貸人が転貸借契約が締結されたことを知った時から１０年を経過したときは，時効によって消滅する。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2012",num:"27",subject:"min",q:`請負に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．請負が請負人の責めに帰することができない事由によって履行の中途で終了したときは，請負人は，既にした履行の割合に応じて報酬を請求することができる。
イ．請負人が仕事を完成しない間は，注文者は，いつでも損害を賠償して契約の解除をすることができる。
ウ．注文者が死亡したときは，請負契約は終了する。
エ．請負における仕事の目的物に瑕疵がある場合であっても，注文者は，その瑕疵が重要でなく，その修補に過分の費用を要するときは，瑕疵の修補を請求することができない。
オ．仕事を完成して目的物を引き渡すことを内容とする請負において，注文者による瑕疵修補の請求は，目的物を引き渡した時から１年以内にしなければならない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2012",num:"28",subject:"min",q:"契約の終了に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．無利息の金銭消費貸借において，当事者が返還の時期を定めなかったときは，借主は，いつでも貸金を返還して契約を終了させることができる。",c2:"２．使用貸借は，借主の死亡によって終了する。",c3:"３．賃貸借が解除されたときは，その賃貸借は，契約の時にさかのぼって効力を失う。",c4:"４．組合の存続期間を定めた場合であっても，組合員が死亡したときは，その相続人は，組合を脱退することができる。",c5:"５．無償の寄託において，当事者が寄託物の返還の時期を定めなかったときは，受寄者は，いつでも寄託物を返還して契約を終了させることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"34"},{year:"2012",num:"29",subject:"min",q:"不法行為に関する次の１から５までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．未成年者に対し不法行為に基づく損害賠償を請求する訴訟において，原告は，行為の当時その者に責任能力があったことを主張立証しなければならない。",c2:"２．未成年者が責任能力を有する場合であっても，監督義務者の義務違反と未成年者の不法行為によって生じた結果との間に相当因果関係が認められるときは，監督義務者に対して不法行為に基づく損害賠償を請求することができる。",c3:"３．不法行為により死亡した被害者の父又は母は，加害者に対し，自己が被った精神的苦痛に基づく損害の賠償を請求することはできない。",c4:"４．交通事故の被害者である幼児に過失がなかったときは，その父又は母に過失があったとしても，それを理由として賠償額が減額されることはない。",c5:"５．暴行を受けて傷害を負った被害者が損害賠償を請求する場合において，被害者の治療を行った医師に診療上の過失があり，そのために被害者の症状が悪化したときであっても，暴行を加えた者と医師は，被害者に対し連帯して損害を賠償する責任を負うことはない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2012",num:"30",subject:"min",q:"ＡのＢに対する訴訟に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．ＡＢ間に成立した保証が連帯保証ではない場合に，債権者Ａが保証人Ｂに対し保証債務の履行を請求する訴訟において，Ａは，主たる債務者に催告をしたことを請求原因として主張立証しなければならない。",c2:"２．ＡＢ間に成立した請負が仕事の目的物の引渡しを要するものである場合に，請負人Ａが注文者Ｂに対し報酬を請求する訴訟において，Ａは，仕事の目的物を引き渡したことを請求原因として主張立証しなければならない。",c3:"３．ＡがＢに対し動産の売買代金を請求する訴訟において，Ａは，目的動産の引渡しを提供したことを請求原因として主張立証しなければならない。",c4:"４．判例によれば，ＡがＢに対し貸金の返還を請求する訴訟において，Ａとの動産の売買に基づく代金債権をもってする相殺を主張するＢは，目的動産の引渡しを提供したことを主張立証しなければならない。",c5:"５．判例によれば，Ａが，Ｂに対し遺留分減殺請求権を行使した上で，被相続人からＢが受けた贈与の目的物の返還を請求する訴訟において，Ｂが贈与の目的物の価額を弁償する旨の意思表示をしたときは，Ａの請求は棄却される。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2012",num:"31",subject:"min",q:`ＡとＢの婚姻に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡがＢの父母の養子である場合，Ａ，Ｂ，同人らの親族又は検察官は，ＡとＢの婚姻が近親者間の婚姻であることを理由として，その取消しを家庭裁判所に請求することができない。
イ．ＡとＢは共に２０歳未満で婚姻したが，ＢにはＣとの間の嫡出でない未成年の子Ｄがいる場合，Ａは，２０歳に達していなくとも，婚姻により，Ｂとともに，Ｄの親権者となる。
ウ．Ａが成年被後見人である場合，事理を弁識する能力を一時回復している間は，成年後見人の同意を得ればＢと婚姻することができる。
エ．判例によれば，ＡとＢが，両名間の子Ｃに嫡出である子の身分を得させるための便法として，後日離婚することを合意した上で婚姻の届出をしたにすぎず，真に社会観念上夫婦であると認められる関係の設定を欲する効果意思がなかった場合には，婚姻の効力は生じない。
オ．ＡがＢと婚姻した場合，Ａの父母であるＣとＤは，Ｂの兄Ｅと３親等の姻族になる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2012",num:"32",subject:"min",q:"認知に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．遺言による認知は，遺言執行者が認知の届出をした時から効力を生ずる。",c2:"２．未成年である子が意思能力を有している場合であっても，その父は，子の承諾なく認知することができる。",c3:"３．未成年である子を認知するには，その母の承諾を得る必要はない。",c4:"４．嫡出でない子は，その父が認知と同時に届け出ることにより，父の氏を称することができる。",c5:"５．嫡出でない子の母は，その子が成年に達した後も，認知の訴えを提起することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"23"},{year:"2012",num:"33",subject:"min",q:`養子に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．配偶者のある者が１５歳未満の者と縁組をする場合，配偶者とともにする必要はないが，配偶者の同意を得なければならない。
イ．１５歳未満の者は，その者の法定代理人が本人に代わってする承諾又は家庭裁判所の許可があれば縁組をすることができる。
ウ．１５歳未満の養子の協議上の離縁は，離縁後にその養子の法定代理人となるべき者と養親との協議によって行う。
エ．強迫によって協議上の離縁の意思表示をした者は，いつでも家庭裁判所にその取消しを請求することができる。
オ．縁組の当事者の一方が死亡した後に生存当事者が離縁をしようとするときは，家庭裁判所の許可を得て，これをすることができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2012",num:"34",subject:"min",q:`親権及び子の財産の管理権に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．父が長期間海外にいて事実上親権を行うことができないときは，母が単独で親権を行うことができる。
イ．子の出生前に父母が協議上の離婚をするときは，その協議で，その一方を，子の出生後の親権者と定めなければならない。
ウ．遺言者が特定の財産を未成年者に遺贈するとともに，その遺言で，受遺者に対して親権を行う父母のうち父には当該財産を管理させない旨の意思を表示した場合，遺贈の効力発生後，父は遺贈された財産の管理権を有しない。
エ．親権を行う父又は母は，やむを得ない事由があるときは，家庭裁判所の許可を得て，親権又は管理権を辞することができる。
オ．特別養子縁組に係る養子は，未成年である間は養親の親権に服するが，実方の父母の相続人としての地位を失わない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2012",num:"35",subject:"min",q:"甲建物を所有していたＡが死亡し，Ａには子Ｂ，Ｃ及びＤがいるが，遺産分割は未了である場合，次の１から５までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．ＢがＣ及びＤに無断で甲建物についてＢへの所有権移転登記をした上でこれを第三者Ｅに売り，Ｅへの所有権移転登記をした場合，Ｃ及びＤは，Ｅに対し，それぞれの持分権を対抗することができない。",c2:"２．ＢがＡの死亡後新たに甲建物で居住を開始し，Ｃ及びＤに甲建物を使用させない場合，Ｃ及びＤは，甲建物に現実に居住する意思がないときでも，Ｂに対し，持分の割合に応じた使用料相当額を不当利得として返還請求することができる。",c3:"３．遺産分割がされる前であっても，甲建物について，Ｂ，Ｃ及びＤの法定相続分に応じた持分の割合により，相続を原因とする所有権移転登記をすることができる。",c4:"４．第三者ＥがＢから甲建物の共有持分権を譲り受けた場合，ＥがＣ及びＤとの共有関係の解消のためにとるべき裁判手続は，共有物分割訴訟である。",c5:"５．Ｂが遺産分割協議書を偽造して甲建物についてＢへの所有権移転登記をした場合は，Ｃ及びＤがその事実を知った時から５年以上経過後に当該登記の是正を請求するときでも，Ｂは，相続回復請求権の５年の短期消滅時効が完成したことを主張することができない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2012",num:"36",subject:"min",q:`遺言に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．公正証書によってする遺言は，２人以上の者が同一の証書ですることができる。
イ．特定遺贈の受遺者がする遺贈の放棄は，家庭裁判所に申述することを要しない。
ウ．遺贈は，その目的物が遺言書作成の時において遺言者の財産に属しなかったときは，その効力を有しない。
エ．疾病その他の事由により死亡の危急に迫った者が，法定の人数の証人の立会いをもって，その１人に遺言の趣旨を口授する方式でした遺言は，遺言者が普通の方式によって遺言をすることができるようになった時から６か月間生存するときは，その効力を生じない。
オ．遺言の証人になった者は，その遺言の遺言執行者になることができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2012",num:"37",subject:"syo",q:`株式会社の設立に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．会社の本店の所在地は，設立する際の定款で定めなければならない。
イ．会社の公告方法は，設立する際の定款で定めなければならない。
ウ．設立時募集株式の引受人が所定の期日又は期間内に設立時募集株式の払込金額の全額の払込みをしなかった場合には，その引受人は，その払込みをすることにより設立時募集株式の株主となる権利を失う。
エ．会社がその子会社を設立するには，発起設立又は募集設立のいずれかの方法によらなければならない。
オ．会社の設立を無効とする判決が確定したときは，その会社は，当初から存在しなかったことになる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2012",num:"38",subject:"syo",q:`次のアからオまでの各事項のうち，会社法上の公開会社において定款で定めることができないものを組み合わせたものは，後記１から５までのうちどれか。
ア．会社は，相続その他の一般承継により会社の譲渡制限株式を取得した者に対し，その株式を会社に売り渡すことを請求することができる旨
イ．会社は，必要と認める場合には，株主総会の特別決議に基づき，その親会社の株式を取得することができる旨
ウ．単元未満株主は，その有する単元未満株式について，株主代表訴訟を提起する権利を有しないこととする旨
エ．ある種類の株式の内容として，その種類の株式の種類株主を構成員とする種類株主総会において取締役を選任することとする旨
オ．会社法に規定する事項以外の一定の事項について，種類株主総会で決議をすることができる旨`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2012",num:"39",subject:"syo",q:`株式の譲渡に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．株券発行会社が株券の発行を不当に遅滞し，信義則に照らし，株券発行前にされた株式の譲渡の効力を否定するのを相当としない状況に至った場合において，株主が意思表示のみによって株式を譲渡したときは，その譲渡は，会社に対しても，その効力を有する。
イ．譲渡制限株式について，会社の承認を得ないで譲渡がされた場合，その譲渡は，譲渡当事者間において，その効力を有しない。
ウ．株式の譲渡について，会社に対し適法に株主名簿の名義書換請求がされたにもかかわらず，会社の過失により名義書換が行われなかったときは，会社は，株主名簿の名義書換のないことを理由として，株式の譲渡を否定することができない。
エ．株式の譲渡に関する株主名簿の名義書換が会社の都合で遅れている場合には，会社は，その譲渡を認め譲受人を株主として取り扱うことができない。
オ．株券発行会社の株式について，その会社の剰余金の配当の基準日より前に株券が交付されて譲渡されたが，その基準日までに株主名簿の名義書換請求がされずに譲渡人が配当金を受領したときは，譲渡人は，譲受人に対し，受領した配当金相当額の金員について不当利得返還義務を負わない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2012",num:"40",subject:"syo",q:`自己株式に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．株式会社は，自己株式について，株主総会における議決権を有しない。
イ．株式会社は，自己株式について，剰余金の配当をすることができない。
ウ．株式会社は，自己株式の取得価額を貸借対照表の資産の部に計上しなければならない。
エ．自己株式を消却することにより，資本金の額は，減少する。
オ．自己株式を消却することにより，発行可能株式総数は，減少する。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2012",num:"41",subject:"syo",q:`会社法上の公開会社である大会社の株主総会に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．取締役会は，書面による議決権行使と電磁的方法による議決権行使のいずれもすることができる旨を定めた場合には，株主が同一の議案につき両方の方法により重複してそれぞれの内容が異なる議決権の行使をしたときの取扱いに関する事項を定めることができる。
イ．会社は，定款の定めにより，剰余金の配当に関する株主総会決議の定足数を排除することができない。
ウ．株主総会においては，その決議によって，取締役がその株主総会に提出し，又は提供した資料を調査する者を選任することができる。
エ．株主総会においてその延期の決議があった場合，後日開催されるその株主総会につき，改めて株主に対する招集通知を発しなければならない。
オ．会計監査人は，定時株主総会において出席を求める決議があったときは，その株主総会に出席して意見を述べなければならない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2012",num:"42",subject:"syo",q:`取締役会設置会社（委員会設置会社を除く。）の取締役の報酬等に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。なお，各記述について，定款には，報酬等に関する事項の定めがないものとする。
ア．判例によれば，取締役が死亡した場合の弔慰金の支給は，それが在職中の職務執行の対価であるときは，株主総会の決議によらなければならない。
イ．判例によれば，株主総会の決議に基づいて取締役の報酬の額が具体的に定められた場合でも，その後，株主総会がその取締役の報酬を無報酬とする旨の決議をしたときは，その取締役は，これに同意しなくても報酬を請求することができなくなる。
ウ．判例によれば，株主総会の決議で取締役全員の報酬の総額を定め，その具体的な配分は，取締役会の決定に委ねることができる。
エ．会社が，取締役に対し，その報酬等としていわゆるストック・オプションとしての新株予約権を付与する場合には，株主総会の決議によることを要しない。
オ．会社が会社法上の公開会社である場合には，事業報告により，その事業年度に係る取締役ごとの個別の報酬の額を明らかにしなければならない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2012",num:"43",subject:"syo",q:`取締役会設置会社でない株式会社において，Ａ及びＢの２名が取締役に選任され，Ａが代表取締役に選定されている場合に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ｂが自己のために会社と取引をするときは，Ａの同意を受けなければならない。
イ．会社は，定款によって，取締役の任期を選任後５年以内に終了する事業年度のうち最終のものに関する定時株主総会の終結の時までと定めることができる。
ウ．Ａは，単独で，株主総会の日時及び場所等の株主総会の招集事項を決定することができる。
エ．会社は，Ａがその職務を行うについて第三者に損害を加えたときは，その損害を賠償する責任を負う。
オ．会社の定款には，代表取締役は株主総会の決議によって取締役の中から定めるとの規定があり，それに基づいてＡが代表取締役に選定されている場合において，Ａが取締役にとどまりつつ代表取締役を辞任したときは，Ｂは，当然に会社を代表する権限を有する。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2012",num:"44",subject:"syo",q:`株式会社の取締役又は代表取締役とその登記に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．代表取締役が退任してその代表権を喪失し，退任の登記がされたときは，その後その者が会社の代表者として第三者とした取引については，民法第１１２条の規定は，適用されない。
イ．代表取締役が会社を代表して約束手形を振り出した場合であっても，代表取締役の就任につき登記がされていないときは，その代表取締役が個人として手形上の責任を負う。
ウ．取締役でないのに取締役として就任の登記をされた者が故意又は過失によりその登記につき承諾を与えていたときは，その者は，自己が取締役でないことをもって善意の第三者に対抗することができない。
エ．代表取締役でない者が，自ら会社の代表者として代表取締役の就任の登記の申請をしたことにより，その旨の登記がされたときは，その会社は，その登記を自らの申請に基づく登記と同視するのを相当とするような特段の事情がない限り，善意の第三者に対しても，その者が代表取締役でないことを対抗することができる。
オ．取締役を退任したにもかかわらずその旨の登記がされていない場合には，退任した取締役は，過失により退任の登記がされていないことを知らなかったためこれを放置していたときであっても，善意の第三者に対し，自己が取締役でないことを対抗することができない。
（参照条文）民法
第１１２条 代理権の消滅は，善意の第三者に対抗することができない。ただし，第三者が過失によってその事実を知らなかったときは，この限りでない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2012",num:"45",subject:"syo",q:`株式会社における取締役，監査役及び会計監査人の責任に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．取締役が取締役会の承認を得て自己のために行った会社との取引によって会社に損害が生じた場合，その取締役会において異議を述べなかった監査役は，その任務を怠ったものと推定される。
イ．監査役は，その職務を行うについて悪意又は重大な過失があったときは，これによって第三者に生じた損害を賠償する責任を負う。
ウ．会計監査人がその任務を怠った場合における会社に対する損害賠償責任は，株主総会の決議をもってその全部を免除することができる。
エ．分配可能額を超えて金銭による剰余金の配当がされた場合，その配当に係る議案を株主総会に提案した取締役は，その職務を行うにつき注意を怠らなかったことを証明した場合を除き，配当額に相当する金銭を会社に対し支払う義務を負う。
オ．会社がその計算において株主の権利の行使に関し財産上の利益の供与をした場合，それに関与した取締役は，自らその財産上の利益の供与をしたときを除き，その職務を行うにつき注意を怠らなかったことを証明することにより，その供与した利益の価額に相当する額を会社に対し支払う義務を免れる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2012",num:"46",subject:"syo",q:`株式会社の計算に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．会社が資本金の額を減少する場合には，その会社の債権者は，その会社に対し，これについて異議を述べることができる。
イ．資本金の額の減少の無効は，訴えをもってのみ主張することができる。
ウ．会社が準備金の額を減少する場合において，その減少額の全部を資本金とするときは，その会社の債権者は，その会社に対し，準備金の額の減少について異議を述べることができない。
エ．取締役会設置会社が剰余金の額を減少する場合において，その減少額の全部を準備金とするときは，取締役会の決議によって剰余金の額の減少をすることができる。
オ．会社が剰余金の処分として任意積立金の積立てをする場合には，定時株主総会の決議によらなければならない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2012",num:"47",subject:"syo",q:`株式会社を消滅会社とする吸収合併と株式会社を譲渡会社とする事業譲渡に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．吸収合併及び事業譲渡のいずれにおいても，その相手方は，会社でなければならない。
イ．吸収合併の場合には，消滅会社はそれによって当然に解散するが，事業譲渡の場合には，譲渡会社はその事業の全部を譲渡してもそれによって当然には解散しない。
ウ．吸収合併の場合には，合併対価として交付される財産の種類は限定されないが，事業譲渡の場合には，事業の対価として交付される財産の種類は金銭に限られる。
エ．吸収合併の場合には，消滅会社の債務は個々の債権者の同意なくして存続会社に承継されるが，事業譲渡の場合には，譲渡の相手方が譲渡会社の債務を免責的に引き受けるためには，個々の債権者の同意を得なければならない。
オ．吸収合併及び事業譲渡は，いずれも，訴えによらなければその無効を主張することができない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2012",num:"48",subject:"syo",q:`株式交換に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．株式交換完全子会社の株主に対して交付される対価が金銭のみである場合には，株式交換完全親会社の債権者は，その株式交換について異議を述べることができる。
イ．株式会社が株式交換をするために株主総会の決議による承認を要しない場合には，株主は，会社に対し，自己の有する株式を公正な価格で買い取ることを請求することができない。
ウ．委員会設置会社にあっては，株主総会の決議による承認を要しない株式交換契約について，その内容の決定を執行役に委任することができる。
エ．株式交換完全子会社が種類株式発行会社であるときは，その会社の発行する種類の株式の内容に応じ，ある種類の株式の株主に対しては対価を交付しないこととすることができる。
オ．株式交換完全子会社は，株式交換の効力が生じた日から２週間以内に，その本店の所在地において，株式交換による変更の登記をしなければならない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2012",num:"49",subject:"syo",q:`株主代表訴訟に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．会社法上の公開会社の場合，株主代表訴訟を提起することができるのは，総株主の議決権の１００分の３以上の議決権を６か月前から引き続き有する株主又は発行済株式総数の１００分の３以上の数の株式を６か月前から引き続き有する株主である。
イ．株主代表訴訟においては，退任した取締役を被告とすることができる。
ウ．株主代表訴訟の提起が悪意によるものであると認められるときは，裁判所は，被告の申立てにより又は職権で，訴えを提起した株主に対し，相当の担保を立てるべきことを命ずることができる。
エ．株主代表訴訟においては，総株主の同意を得た場合に限り，取締役の責任を免除する内容の訴訟上の和解をすることができる。
オ．株主代表訴訟を提起した株主がその訴訟の係属中にその有する株式を売却して株主でなくなったときは，その者は，訴訟を追行することができない。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2012",num:"50",subject:"syo",q:`商慣習に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．商慣習が民法上の強行規定に優先して適用されることはない。
イ．商事に関しては，商法に定めがない事項について商慣習があれば, それに従う。
ウ．契約当事者が商法上の任意規定と異なる慣習に従う旨の合意をしている場合には，それが単なる「事実たる慣習」にすぎないときでも，その慣習が商法上の任意規定に優先する。
エ．商慣習が法的確信にまで高まっている場合でも，その適用を求める当事者は，訴訟において，その存在及び内容について証明責任を負う。
オ．判例の趣旨に照らせば，商慣習が商法上の強行規定に優先して適用される場合がある。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2012",num:"51",subject:"syo",q:`個人商人Ａが甲商店の商号で乙市内において営む営業を個人商人Ｂに譲渡した場合に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。ただし，Ａ及びＢは，小商人ではないものとし，また，ＡとＢとは，Ａの営業によって生じたＣに対する債務（以下「Ｃ債務」という。）及びＡの営業によって生じたＤに対する債権（以下「Ｄ債権」という。）につき，その譲渡の対象としない旨を合意していたものとする。
ア．Ａは，同一の営業をしない旨の特約をした場合であっても，営業譲渡の日から３０年を経過すれば，乙市内において同一の営業をすることができる。
イ．ＡがＢに対し営業とともに甲商店の商号を譲渡した場合，商号の譲渡は，登記をしなければ，第三者に対抗することができない。
ウ．Ｂは，甲商店の商号を引き続き使用するときは，譲り受けた財産の価額を限度として，Ｃ債務を弁済する責任を負う。
エ．Ｂが甲商店の商号を引き続き使用しない場合において，Ａの営業によって生じた債務を引き受ける旨の広告をしたことによりＢが負担するＣ債務を弁済する責任は，その広告をした日から２年を経過すれば，消滅する。
オ．Ｂが甲商店の商号を引き続き使用するときは，ＤがＢに対してしたＤ債権に係る債務の弁済は，Ｄが善意でかつ重大な過失がないときは，その効力を有する。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2012",num:"52",subject:"syo",q:`商人間の売買契約に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．売買契約が特定の日時に履行しなければ契約をした目的を達することができない性質のものであっても，当事者の一方が履行をしないでその日時を経過したことを理由に相手方がその契約の効力を失わせるためには，解除の意思表示をしなければならない。
イ．判例によれば，売買契約の目的物の瑕疵に関する通知義務を定めた商法の規定は, 不特定物の場合にも適用される。
ウ．判例によれば，売買契約の目的物に生じていた瑕疵が直ちに発見することのできないものである場合には，受領後６か月以内にその瑕疵を発見して直ちに通知を発すれば，その瑕疵を理由とする損害賠償請求権について，瑕疵担保責任に関する民法上の除斥期間の規定は，適用されなくなる。
エ．買主が売買の目的物の受領を拒んだ場合には，売買契約は，直ちに解除されたものとみなされる。
オ．売買契約の売主及び買主の営業所が異なる市町村内にある場合には，買主が売買の目的物に瑕疵があることを理由にその売買契約を解除したときであっても，買主は，その目的物を売主に送り返すことを要しない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2012",num:"53",subject:"syo",q:`匿名組合員及び合資会社の有限責任社員に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。なお，各記述に係る匿名組合契約又は合資会社の定款には，特約又は別段の定めがないものとする。
ア．匿名組合員及び合資会社の有限責任社員は，金銭その他の財産のみをその出資の目的とすることができる。
イ．匿名組合員及び合資会社の有限責任社員は，営業者又は合資会社の業務を執行することができる。
ウ．匿名組合員及び合資会社の有限責任社員は，重要な事由があるときは，いつでも，裁判所の許可を得て，営業者又は合資会社の業務及び財産の状況を検査することができる。
エ．匿名組合員及び合資会社の有限責任社員は，出資が損失によって減少したときは，その損失が塡補された後でなければ，利益の配当を請求することができない。
オ．匿名組合員及び合資会社の有限責任社員が出資した財産は，営業者又は合資会社に属する。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2012",num:"54",subject:"syo",q:"手形は，主として「信用の手段」として規律され，小切手は，主として「支払の手段」として規律されている。次の１から５までの各記述のうち，このことと関係がないものはどれか。",c1:"１．約束手形の振出人は，第一次的な支払義務を負うが，小切手の振出人は，支払人が支払拒絶をしたことを条件とする支払義務を負うにとどまる。",c2:"２．小切手においては，支払人が銀行その他の金融機関に限られ，かつ，振出人は，その支払人の下に小切手の支払に充てられるべき資金を有していなければならないが，為替手形においては，そのような制約はない。",c3:"３．為替手形においては，支払人が引受けをすることができるが，小切手においては，支払人が引受けをすることはできない。",c4:"４．手形においては，満期の定め方として一覧払のほかに確定日払，日附後定期払及び一覧後定期払も認められるが，小切手においては，一覧払しか認められない。",c5:"５．小切手の支払呈示期間は，原則として振出日の日付から１０日内とされているが，一覧払手形の支払呈示期間は，原則として振出日の日付から１年内とされている。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2012",num:"55",subject:"syo",q:`　ＡがＢを受取人として振り出した約束手形を，Ｂは，白地式裏書によってＣに譲渡し，Ｃは，この手形をそのままの状態で金庫で保管していた。Ｃの金庫からこの手形を盗み出したＤは，記名式裏書によってこれをＥに譲渡した。Ｅは，この手形を取得する際，Ｄが権利者であると重過失なく信じていた。Ｅは，この手形を記名式裏書によってＦに譲渡した。現在の所持人は，Ｆである。この手形の裏書欄の状況を簡略化して示したものが【図】である。
　この手形に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
　　【図】
　　　第１裏書　　Ｂ → （白地）
　　　第２裏書　　Ｄ → Ｅ
　　　第３裏書　　Ｅ → Ｆ
ア．この手形には，裏書の連続が認められる。
イ．Ｆが，この手形をＥから取得した際，ＤがＣから盗取したものであることを知っていた場合，Ａは，Ｄによる盗取の事実とＦの悪意を証明することにより，Ｆに対する手形金の支払を拒むことができる。
ウ．Ｃは，盗難の時から２年間，この手形がＣから盗まれたことを証明することにより，Ｆに対し，この手形の返還を請求することができる。
エ．この手形が金庫から盗み出されたことにつき，Ｃに重過失があった場合でも，Ｃは，この手形について遡求義務を負うことはない。
オ．判例によれば，Ｄは，この手形について遡求義務を負うことはない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2012",num:"56",subject:"mso",q:"訴状の送達に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．裁判長が補正を命じても訴状の送達をすることができない場合には，その訴状は，命令で，却下される。",c2:"２．訴えの提起による時効中断の効力は，訴状が被告に送達された時に生ずる。",c3:"３．訴状の送達は，被告本人に直接交付して行うべきものであり，それができない場合には，公示送達の方法によらなければならない。",c4:"４．訴状が被告に送達された後は，その訴状に不備があっても，命令で訴状を却下することはできない。",c5:"５．訴状において契約解除の意思表示をしようとする場合においても，その訴状の送達が公示送達の方法によってされたときは，契約解除の意思表示が被告に到達したことにはならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"14"},{year:"2012",num:"57",subject:"mso",q:`管轄に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．被告が第一審裁判所において管轄違いの抗弁を提出するとともに本案について弁論をした場合には，応訴管轄は生じない。
イ．職分管轄については，当事者双方の合意によって異なる管轄裁判所を定める余地はない。
ウ．裁判所は，訴訟についてその裁判所の専属管轄とする旨の合意がある場合には，訴訟の著しい遅滞を避けるためであっても，その訴訟を他の管轄裁判所に移送することはできない。
エ．訴えが地方裁判所に提起された後に，請求の減縮により訴額が１４０万円を超えないこととなった場合において，被告の申立てがあるときは，地方裁判所は，決定で，その訴えに係る訴訟を簡易裁判所に移送しなければならない。
オ．簡易裁判所は，被告が反訴で地方裁判所の管轄に属する請求をした場合において，相手方の申立てがあるときは，決定で，本訴及び反訴を地方裁判所に移送しなければならない。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2012",num:"58",subject:"mso",q:"当事者に関する次の１から５までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．債務者の債権を差し押さえた差押債権者は，第三債務者に対する取立訴訟の原告となることができる。",c2:"２．特定不動産の受遺者が，遺言の執行として当該不動産の所有権移転登記手続を求める訴えを提起する場合において，遺言執行者がいるときは，相続人ではなく遺言執行者を被告としなければならない。",c3:"３．民法上の組合において，組合規約により自己の名で組合財産を管理し対外的業務を執行する権限を与えられた組合員は，組合財産に関する訴訟の当事者となることができる。",c4:"４．株式会社の支配人は，当該株式会社のために，その事業に関する訴訟の当事者となることができる。",c5:"５．認知の訴えにおいて，被告とすべき父が死亡している場合には，検察官をその訴えの被告としなければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2012",num:"59",subject:"mso",q:"当事者の欠席及び死亡に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．当事者双方が最初にすべき口頭弁論の期日に欠席した場合には，訴状に記載された事項及び答弁書に記載された事項がそれぞれ陳述されたものとみなされる。",c2:"２．当事者双方が弁論準備手続の期日に欠席した場合において，１か月以内にいずれの当事者からも期日指定の申立てがされないときは，訴えの取下げがあったものとみなされる。",c3:"３．被告が口頭弁論終結後に死亡した場合には，被告に訴訟代理人がいるときを除き，訴訟手続は中断し，裁判所は，受継がされるまで判決を言い渡すことができない。",c4:"４．判決の言渡しは，当事者双方が判決の言渡期日に欠席した場合においても，することができる。",c5:"５．請求を棄却する第一審判決の送達を受けた日の翌日に原告が死亡した場合には，原告に訴訟代理人がいるときを除き，訴訟手続は中断し，控訴期間は進行を停止する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"13"},{year:"2012",num:"60",subject:"mso",q:"直接主義に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．合議体を構成する３人の裁判官のうちの１人が交代した場合には，当事者は，従前の口頭弁論の結果を陳述しなければならない。",c2:"２．合議体を構成する３人の裁判官のうちの２人が交代した場合において，当事者の申出があるときは，裁判所は，裁判官の交代前に尋問した証人を再度尋問しなければならない。",c3:"３．裁判所は，当事者に異議がないときは，受命裁判官に裁判所外で証人の尋問をさせることができる。",c4:"４．判決の言渡しをする裁判官は，当該判決の基本となる口頭弁論に関与した裁判官でなければならない。",c5:"５．当事者は，控訴審において，第一審の口頭弁論の結果を陳述しなければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2012",num:"61",subject:"mso",q:`口頭弁論に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．裁判所は，数個の独立した攻撃又は防御の方法が提出されている場合において，特定の攻撃又は防御の方法に審理を集中したいときは，弁論の制限をすることができる。
イ．口頭弁論の期日のうち証人尋問の期日については，その公開を停止することができない。
ウ．証人及び当事者本人の尋問は，できる限り，争点及び証拠の整理が終了した後に集中して行わなければならない。
エ．弁論準備手続において主張された事実は，弁論準備手続の結果を当事者が口頭弁論で陳述することによって訴訟資料となる。
オ．裁判所は，当事者の申立てがない限り，終結した口頭弁論の再開を命ずることができない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2012",num:"62",subject:"mso",q:"弁論準備手続に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．裁判所は，当事者の同意がなければ，事件を弁論準備手続に付することができない。",c2:"２．弁論準備手続は，当事者双方が立ち会うことができる期日において行う。",c3:"３．裁判所は，弁論準備手続の期日においては，文書の証拠調べをすることができない。",c4:"４．弁論準備手続においては，当事者双方が期日に出頭することができない場合であっても，裁判所及び当事者双方が音声の送受信により同時に通話をすることができる方法によって，期日における手続を行うことができる。",c5:"５．裁判所は，弁論準備手続を終結するに当たり，その後の証拠調べにより証明すべき事実を当事者との間で確認するものとされている。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"25"},{year:"2012",num:"63",subject:"mso",q:`自白及びその撤回に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものは幾つあるか。後記１から５までのうちから選びなさい。
ア．当事者が証拠として提出した契約書について，相手方がその成立の真正を認める旨の陳述をした場合には，裁判所は，証拠によっても当該契約書の成立の真正を否定することができない。
イ．口頭弁論の期日において相手方の主張した事実を争うことを明らかにしなかった当事者は，次回以降の期日において当該事実を争うことができない。
ウ．自白の撤回は，第三者の刑事上罰すべき行為によって自白をした場合にもすることができる。
エ．自白の撤回は，時機に後れたものとして却下されることはない。
オ．自己に不利益な陳述をした当事者は，相手方がその陳述を援用する前においても，当該陳述を撤回することができない。`,c1:"１．１個",c2:"２．２個",c3:"３．３個",c4:"４．４個",c5:"５．５個",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2012",num:"64",subject:"mso",q:"次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．第三者の営業秘密に関する事項について訴えの提起前における照会をすることができるのは,相手方がこれに回答することをその第三者が承諾した場合に限る。",c2:"２．訴訟の係属中にする当事者照会は，相手方の職業の秘密として証言を拒絶することができる事項と同様の事項についてもすることができる。",c3:"３．裁判所は，訴えの提起前における証拠収集の処分として，文書送付の嘱託や，専門的な知識経験に基づく意見の陳述の嘱託をすることができる。",c4:"４．証拠保全の手続において証人尋問がされた場合には，当事者がその証人について口頭弁論における尋問の申出をしたときでも，裁判所は，その尋問をする必要はない。",c5:"５．裁判所は，訴えが提起された場合の立証に必要であることが明らかな証拠となるべきものについて，申立人がこれを自ら収集することが困難であると認められるときでなければ，訴えの提起前における証拠収集の処分をすることができない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"24"},{year:"2012",num:"65",subject:"mso",q:`証拠調べの実施に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．鑑定に必要な学識経験を有する者は，鑑定人となることができないものを除き，鑑定をする義務を負う。
イ．当事者本人を尋問する場合において，その当事者が正当な理由なく出頭しないときは，裁判所は，勾引を命ずることができる。
ウ．裁判所は，第三者に対し，検証の目的の提示を命ずることができ，その第三者が正当な理由なくこの命令に従わないときは，過料に処する。
エ．文書送付の嘱託の申立ては，登記事項証明書など当事者が法令により正本又は謄本の交付を求めることができる文書については，することができない。
オ．証人は，自己の配偶者に著しい利害関係のある事項について尋問を受ける場合にも，宣誓をする義務を負う。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2012",num:"66",subject:"mso",q:`文書提出命令に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．文書提出命令の申立ては，その対象となった文書について証拠調べの必要性を欠くことを理由として却下することはできない。
イ．公務員の職務上の秘密に関する文書については，当該文書の提出によって公務の遂行に著しい支障を生ずるおそれがあることを理由としてその提出を拒むことができる。
ウ．判例によれば，株式会社の社内文書で外部の者への開示が予定されていないものであっても,その文書を開示することにより当該株式会社に看過し難い不利益を生ずるおそれがないときには，文書提出命令の対象となる。
エ．判例によれば，刑事事件に係る訴訟に関する書類は，文書提出命令の対象となることはない。
オ．いわゆるインカメラ手続を実施した結果，提出義務がないとして文書提出命令の申立てを却下した裁判所は，当該文書を閲読しなかったものとして本案についての心証を形成しなければならない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2012",num:"67",subject:"mso",q:`Ｘは，甲土地をＡ時点とその２０年後のＢ時点のいずれにおいても占有していたから，両時点の間，甲土地の占有を継続し，甲土地を時効取得したと主張して，甲土地の登記名義人であるＹに対し，所有権に基づき所有権移転登記手続を求める訴えを提起した。これに対し，Ｙが甲土地の占有に関して次のア又はイの主張をし，Ｘ及びＹから他の主張はされなかったものとする。これらア又はイの主張がされた各場合について，Ｙが請求棄却の判決を得るために裁判官に抱かせることが必要な心証の説明として，後記１から４までの各記述のうち，判例の趣旨に照らし正しいものはどれか。
ア．Ａ時点ではＸが占有していたが，Ｂ時点ではＹが占有していた。
イ．Ｘは，Ａ時点でもＢ時点でも占有していたが，両時点の間のＣ時点ではＹが占有しており，Ｘは，継続して占有していなかった。`,c1:"１．Ｙは，アの主張をする場合にはＢ時点でＹが占有していた事実について，イの主張をする場合にはＣ時点でＹが占有していた事実について，いずれも裁判官に確信を抱かせる必要がある。",c2:"２．Ｙは，アの主張をする場合にはＢ時点でＹが占有していた事実について裁判官に確信を抱かせる必要があるが，イの主張をする場合にはＡＢ両時点の間Ｘが継続して占有していた事実について裁判官に真偽不明の心証を抱かせれば足りる。",c3:"３．Ｙは，アの主張をする場合にはＢ時点でＸが占有していた事実について裁判官に真偽不明の心証を抱かせれば足りるが，イの主張をする場合にはＣ時点でＹが占有していた事実について裁判官に確信を抱かせる必要がある。",c4:"４．Ｙは，アの主張をする場合にはＢ時点でＸが占有していた事実について，イの主張をする場合にはＡＢ両時点の間Ｘが継続して占有していた事実について，いずれも裁判官に真偽不明の心証を抱かせれば足りる。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2012",num:"68",subject:"mso",q:`ＸがＹに対し，絵画の売買代金の支払を求める訴えを提起した場合において，次のアからオまでのＹの各陳述のうち，当該訴えの請求原因に対する抗弁となり得るものを組み合わせたものは，後記１から５までのうちどれか。
ア．その絵画は，Ａから買ったものであり，代金もＡに支払っています。
イ．その絵画は，Ｘから買ったものですが，まだ，引渡しを受けていません。
ウ．その絵画は，ＸからＢが買い，Ｂから私が買ったものです。
エ．その絵画は，Ｘから買ったものですが，既にＸには代金全額を支払いました。
オ．その絵画は，Ｘから贈与されたものです。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2012",num:"69",subject:"mso",q:`訴えの取下げ及び控訴の取下げに関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．判決が確定した後でも，相手方の同意を得れば，訴えを取り下げることができる。
イ．本案について終局判決があった後に訴えを取り下げた場合でも，相手方の同意があれば，同一の訴えを提起することができる。
ウ．本訴の取下げ後に被告が反訴を取り下げるときは，相手方が反訴の本案について口頭弁論をした後においても，相手方の同意を要しない。
エ．実親子関係の不存在の確認の訴えについても，訴えを取り下げることができる。
オ．控訴人は，控訴審の終局判決があった後においても，当該判決が確定するまでは，控訴を取り下げることができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2012",num:"70",subject:"mso",q:"判決の確定に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．第一審判決が原告の請求の一部を認容し，その余を棄却するものであった場合には，当事者双方が控訴せず，いずれの控訴期間も満了した時に，第一審判決は確定する。",c2:"２．控訴審で控訴棄却の判決がされたときは，その確定とともに第一審判決も確定する。",c3:"３．控訴権を有する全ての当事者が控訴権を放棄したときは，控訴期間の満了前であっても，第一審判決は確定する。",c4:"４．判例の趣旨によれば，通常共同訴訟において，共同訴訟人の一人が控訴したときは，他の共同訴訟人についても判決の確定が遮断される。",c5:"５．上告審の終局判決は，その言渡しとともに確定する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2012",num:"71",subject:"mso",q:"判決の効力に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．給付訴訟において請求を棄却する判決は，確認判決である。",c2:"２．形成訴訟において請求を認容する判決には，遡及して形成の効果を生ずるものと，将来に向かってのみ形成の効果を生ずるものとがある。",c3:"３．債務不存在確認訴訟において請求を認容する判決が確定すると，当該債務に係る被告の債権が存在しないことが既判力をもって確定される。",c4:"４．土地の所有権確認訴訟において請求を棄却する判決が確定したときは，原告が当該土地の所有権を有しないことが既判力をもって確定されるが，被告がその土地の所有権を有することが確定されることはない。",c5:"５．離婚判決が確定しても，当該判決に基づき戸籍法上の届出がされなければ，婚姻解消の効果は生じない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2012",num:"72",subject:"mso",q:"複数請求訴訟に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．請求の予備的併合及び選択的併合においては，弁論を分離することは許されない。",c2:"２．判例によれば，建物所有権に基づき建物明渡しを求める訴えを提起した原告が，請求を土地所有権に基づく建物収去土地明渡請求に変更することは，この訴えの変更が当該建物の所有権が自己に帰属する旨の被告の陳述に基づいてされた場合であっても，認められない。",c3:"３．中間確認の訴えは，その確認の請求につき他の裁判所の専属管轄とする旨の合意がある場合には，許されない。",c4:"４．反訴の提起後に本訴が取り下げられた場合には，本訴の訴訟資料を反訴の判決の基礎とすることはできない。",c5:"５．判例によれば，控訴審における訴えの変更に対して相手方が異議なく応訴した場合には，請求の基礎に変更があるときであっても，当該訴えの変更は許される。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"15"},{year:"2012",num:"73",subject:"mso",q:`控訴に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．控訴状に控訴の理由の記載がない場合において，控訴人が最高裁判所規則で定める期間内に控訴裁判所に控訴理由書を提出しないときは，控訴裁判所は，決定で，控訴を却下しなければならない。
イ．貸金３００万円の返還請求を全部認容した第一審判決に対し，被告が１００万円の部分のみを不服として控訴した場合には，その余の部分については，控訴期間の満了により，第一審判決が確定する。
ウ．控訴審の審判の対象は，裁判所が職権で調査すべき事項を除き，不服申立ての範囲に限定される。
エ．控訴審において提出することができる攻撃又は防御の方法は，第一審の口頭弁論終結後に生じた事由に関するものに限られない。
オ．控訴裁判所は，第一審判決を取り消す場合には，事件を第一審裁判所に差し戻さず，自判をすることができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2012",num:"74",subject:"mso",q:`少額訴訟に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．同一の簡易裁判所において同一の年に少額訴訟による審理及び裁判を求めることができる回数については，制限はない。
イ．少額訴訟においては，反訴を提起することができない。
ウ．少額訴訟においては，証拠調べは，即時に取り調べることができる証拠に限ってすることができる。
エ．被告は，最初にすべき口頭弁論の期日において弁論をした後であっても，訴訟を通常の手続に移行させる旨の申述をすることができる。
オ．少額訴訟の終局判決に対しては，控訴をすることができない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2012",num:"1",subject:"kei",q:"次の１から５までの各事例における甲の罪責について判例の立場に従って検討した場合，甲に窃盗罪が成立しないものはどれか。",c1:"１．甲は，コンビニエンスストアでレジ係のアルバイトをしていたが，店長の乙が短時間外出していた間に，商品棚からたばこ１カートンを取り出して自分のバッグに入れ，アルバイト終了後店外へ持ち出し，これを自分のものにした。",c2:"２．甲は，旅館に宿泊した際，旅館内にある共同浴場の脱衣場で，他の宿泊客が置き忘れた時計を見付けたので，脱衣場から持ち出し，これを自分のものにした。",c3:"３．甲は，深夜，路上を歩いていたところ，見知らぬ乙と丙が殴り合いのけんかをしていたので，これを見ていると，乙がナイフを取り出して丙を刺し殺した。甲は，乙が走り去った直後，死亡した丙の上着のポケット内に入っていた現金入りの財布を持ち去り，これを自分のものにした。",c4:"４．甲は，乙から封かんされた現金１０万円入りの封筒を渡されて丙に届けるように依頼され，丙方に向かって歩き始めたが，途中で封筒内の現金が欲しくなり，封を開いて封筒に入っていた現金のうち２万円を取り出してこれを自分のものにした後，残りの現金が入った封筒を丙に交付した。",c5:"５．甲は，乙が他の者から盗んできた宝石を乙所有の自動車の中に置いているのを知っていたところ，ある日，同車が無施錠で駐車されているのに気付き，同車内から同宝石を持ち去り，これを自分のものにした。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2012",num:"2",subject:"kei",q:`次のアからオまでの各記述を判例の立場に従って検討し，甲に（ ）内の犯罪の共同正犯が成立する場合には１を，教唆犯又は幇助犯が成立する場合には２を，間接正犯が成立する場合には３を選びなさい。
ア．甲は，甲の所属する暴力団事務所にＶを連行し，同事務所において３日間，Ｖを逃走できないように見張って監禁し，その後，同じ暴力団に所属する乙に対して「お前が俺に代わって見張れ。」と言った。乙は，これを了承し，４日目から前記事務所においてＶを逃走できないように見張って監禁した。５日目に乙が居眠りをした隙に，Ｖは，前記事務所の窓から外に飛び降りて逃げ出したが，飛び降りた際，右足首を骨折した。（監禁致傷罪）
イ．甲は，乙が自宅で賭博場を開張して利益を得ていることを知り，乙の役に立とうと考え，乙に連絡することなく，乙の開張する賭博場にＡ及びＢを誘引し，賭博をさせた。（賭博場開張図利罪）
ウ．甲は，常日頃暴行を加えて自己の意のままに従わせていた実子の乙（１３歳）に対し，Ｖが管理するさい銭箱から現金を盗んでくるように命じ，乙は，是非善悪の識別能力及び識別に従って行動を制御する能力を有していたが，甲の命令に従わなければまた暴力を振るわれると畏怖し，意思を抑圧された状態で，前記さい銭箱から現金を盗んだ。（窃盗罪）
エ．甲は，知人乙から，交際相手であるＶを殺害したいので青酸カリを入手してほしいと依頼され，自らもＶに恨みを抱いていたことから，青酸カリを準備して乙に交付した。乙は，甲から青酸カリを受領した後，実行行為に出る前にＶ殺害を思いとどまり，警察署に出頭した。（殺人予備罪）
オ．甲は，乙から，乙がＶ方に強盗に入る際に外で見張りをしてほしいと頼まれ，利益を折半する約束でこれを承諾し，乙と共にＶ方に赴いた。甲がＶ方の外で見張りをしている間に，乙はＶ方に侵入した。その後，甲は，不安になり，携帯電話で乙に「やっぱり嫌だ。俺は逃げる。」と告げた上，その場から逃走した。乙は，甲の逃走を認識した後，Ｖ方内にいたＶを発見し，同人に包丁を突き付けてその反抗を抑圧した上，現金を強取した。（強盗罪）`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"12311"},{year:"2012",num:"3",subject:"kei",q:`次の【事例】及び【判旨】に関する後記１から５までの各【記述】のうち，正しいものを２個選びなさい。
【事 例】
甲は，自動車内でＶにクロロホルムを吸引させて失神させた上，約２キロメートル離れた港までＶを運び，自動車ごと海中に転落させて溺死させようという計画の下，Ｖにクロロホルムを吸引させた。甲は，Ｖが動かなくなったので，計画どおりＶが失神したものと考え，港に運んで自動車ごと海中に転落させた。Ｖの遺体の司法解剖の結果，甲の計画とは異なり，Ｖは溺死ではなく，海中への転落前にクロロホルムの吸引により死亡していたことが判明した。
【判 旨】
甲の殺害計画は，クロロホルムを吸引させてＶを失神させた上（以下「第１行為」という。），その失神状態を利用してＶを港まで運び，自動車ごと海中に転落させ（以下「第２行為」という。），溺死させるというものであって，第１行為は第２行為を確実かつ容易に行うために必要不可欠なものであったといえること，第１行為に成功した場合，それ以降の殺害計画を遂行する上で障害となるような特段の事情が存しなかったと認められることや，第１行為と第２行為との間の時間的場所的近接性などに照らすと，第１行為は第２行為に密接な行為であり，甲が第１行為を開始した時点で既に殺人に至る客観的な危険性が明らかに認められるから，その時点において殺人罪の実行の着手があったものと解するのが相当である。
【記 述】`,c1:"１．ダンプカーに女性を引きずり込んで数キロメートル離れた人気のない場所まで連れて行き姦淫しようという計画の下，抵抗する女性をダンプカーに引きずり込んだ上，計画どおり姦淫したが，引きずり込もうとした段階で加えた暴行により同女が負傷したという事例において強姦致傷罪の成立を認める見解は，実行の着手時期に関してこの判旨の考え方と矛盾する。",c2:"２．この判旨は，甲がＶにクロロホルムを吸引させた場所と殺害計画を実行しようとしていた港との距離が約２キロメートルの距離にあったということを，実行の着手時期を決する上で考慮している。",c3:"３．この判旨が第１行為を開始した時点で殺人罪の実行の着手を認めたのは，第１行為自体によってＶの死の結果が生じることを甲が認識・認容していたことを前提としている。",c4:"４．この判旨の立場に立てば，甲が第１行為によってＶが死亡していることに気付き，自動車ごとＶを海中に転落させる行為に及ばなかった場合でも，甲に殺人既遂罪が成立する。",c5:"５．この判旨の立場に立てば，第１行為を行ってもそれ以降の殺害計画を遂行する上で障害となるような特段の事情が存在していたような場合には，甲に殺人未遂罪と重過失致死罪が成立することになる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"24"},{year:"2012",num:"4",subject:"kei",q:`次のアからオまでの各記述を判例の立場に従って検討した場合，甲に乙又は乙社に対する脅迫罪が成立するものの組合せは，後記１から７までのうちどれか。
ア．甲は，乙に対し，乙の妻の実兄である丙を殺害する旨告知し，乙は丙が殺されるかもしれない旨畏怖した。
イ．甲は，乙株式会社総務課長丙に対して，乙社の商品不買運動を行って乙社の営業活動を妨害する旨告知し，丙は，乙社の営業活動が妨害されるかもしれない旨畏怖した。
ウ．甲は，インターネット上の掲示板に乙が匿名で行った書き込みに対し，同掲示板に「そんな投稿をするやつには天罰が下る。」旨の書き込みを行い，これを閲読した乙は，小心者だったことから，何か悪いことが起こるかもしれない旨畏怖した。
エ．甲は，口論の末，乙に対し，「ぶっ殺すぞ。」と怒号した。この様子を見ていた周囲の人たちは，甲が本当に乙を殺害するのではないかと恐れたが，乙は剛胆であったため畏怖しなかった。
オ．甲は，単身生活の乙に対し，「乙宅を爆破する。」旨記載した手紙を投函し，同手紙は乙方に配達されたが，同手紙には差出人が記載されていなかったことから，不審に思った乙は同手紙を開封しないまま廃棄した。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．ア エ",c4:"４．イ エ",c5:"５．イ オ",c6:"６．ウ エ",c7:"７．ウ オ",c8:"",c9:"",c10:"",a:"3"},{year:"2012",num:"5",subject:"kei",q:`教授と学生Ａ及びＢは次の【会話】のとおり議論している。【会話】中の①から⑤までの（ ）内に，後記アからケまでの【語句群】から適切な語句を入れた場合，正しいものの組合せは，後記１から５までのうちどれか。
【会 話】
教 授：犯人が被害者の住居に侵入した上で被害者を殺害した場合の住居侵入罪と殺人罪の罪数関係や，犯人が被害者の住居に侵入した上で被害者のお金を盗んだ場合の住居侵入罪と窃盗罪の罪数関係は，判例ではどうなるかな。
学生Ａ：（①）です。
教 授：それでは，犯人が被害者の住居に侵入した上で，被害者を殺害し，その後に被害者のお金を盗もうと思い立って，現実にお金を盗んだ場合の住居侵入罪，殺人罪，窃盗罪の罪数関係は，判例ではどうなるかな。
学生Ｂ：住居侵入罪と殺人罪が（①），住居侵入罪と窃盗罪が（①）となり，全体として（②）になります。
教 授：そうだね。このような場合をかすがい現象と言っているんだ。それでは，犯人が路上で被害者を殺害し，その後に被害者のお金を盗もうと思い立ち，お金を盗んだ場合における殺人罪と窃盗罪の罪数関係は，判例ではどうなるかな。
学生Ａ：（③）です。
教 授：住居侵入罪の法定刑の上限は懲役３年，窃盗罪の法定刑の上限は懲役１０年，殺人罪で有期懲役刑を選択した場合の法定刑の上限は懲役２０年だけど，判例の立場によれば，前科のない犯人が被害者の住居に侵入した上で，被害者を殺害し，その後に被害者のお金を盗もうと思い立ち，お金を盗んだ事案における処断刑の上限は，それぞれの罪について有期懲役刑を選択した場合にはどうなるだろう。
学生Ｂ：（④）です。
教 授：それでは，判例の立場で，前科のない犯人が路上で被害者を殺害し，その後に被害者のお金を盗もうと思い立ち，お金を盗んだ事案の処断刑の上限は，それぞれの罪について有期懲役刑を選択した場合にはどうなるかな。
学生Ａ：（⑤）です。
【語句群】
ア．併合罪
イ．牽連犯
ウ．観念的競合
エ．科刑上一罪
オ．包括一罪
カ．懲役２０年
キ．懲役２５年
ク．懲役３０年
ケ．懲役４０年
`,c1:"１．①イ ②エ ③ア ④カ ⑤ク",c2:"２．①イ ②エ ③ア ④カ ⑤ケ",c3:"３．①イ ②オ ③イ ④ケ ⑤カ",c4:"４．①ウ ②エ ③ア ④ク ⑤キ",c5:"５．①ウ ②オ ③イ ④ケ ⑤ク",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2012",num:"6",subject:"kei",q:`詐欺罪又は恐喝罪に関する次のアからオまでの各記述を判例の立場に従って検討し，誤っているものを全て選んだ場合の組合せは，後記１から７までのうちどれか。
ア．甲は，交通事故を装い保険会社から保険金をだまし取ろうと企て，自己の運転する自動車を道路脇の電柱に衝突させて自ら怪我をした。この場合，甲には，自動車を電柱に衝突させた時点で，詐欺未遂罪が成立する。
イ．甲は，警察官でないのに警察官を装い，窃盗犯人である乙に対し，「警察の者だが，取り調べる必要があるから差し出せ。」などと虚偽の事実を申し向けて盗品の提出を求め，これに応じなければ直ちに警察署に連行するかもしれないような態度を示したところ，乙は，逮捕されるかもしれないと畏怖した結果，甲に盗品を交付した。この場合，甲には，恐喝既遂罪が成立する。
ウ．甲は，無銭宿泊を企て，宿泊代金を支払う意思も能力もないのに，これらがあるように装い，民宿を営む乙に対し，宿泊を申し込んだところ，乙は，他の民宿から甲が無銭宿泊の常習者であることを聞いていたため，甲に宿泊代金支払の意思も能力もないことが分かったが，甲に憐憫の情を抱き，甲を宿泊させた。この場合，甲には，詐欺未遂罪が成立するにとどまる。
エ．甲は，通行中の乙から現金を喝取することを企て，乙に対し，反抗を抑圧するに至らない程度の脅迫を加えたところ，乙は，甲の脅迫により畏怖し，甲が乙の上着の内ポケットに手を入れて財布を抜き取ることを黙認した。この場合，甲には，恐喝未遂罪が成立するにとどまる。
オ．甲は，偽札を作る意思がないのに，乙に対し，一緒に偽札を作ることを持ちかけた上，偽札を作る機材の購入資金にすると嘘を言って資金の提供を求め，その旨誤信した乙から同資金として現金の交付を受けた。この場合，甲には，詐欺未遂罪も，詐欺既遂罪も成立しない。`,c1:"１．アイウ",c2:"２．アエオ",c3:"３．アオ",c4:"４．イウ",c5:"５．イオ",c6:"６．エ",c7:"７．エオ",c8:"",c9:"",c10:"",a:"2"},{year:"2012",num:"7",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討し，誤っているものを２個選びなさい。",c1:"１．甲は，Ａを川の中に突き落として溺死させようと思い，橋の側端に立っていたＡを突き飛ばしたところ，Ａは落下する途中で橋脚に頭部を強打して即死した。甲には殺人既遂罪が成立する。",c2:"２．甲は，乙に対し，Ａを殺害するよう唆したところ，乙は，その旨決意し，夜道で待ち伏せした上，歩いてきた男をＡだと思って包丁で刺し殺したが，実際には，その男はＢであった。甲には殺人既遂罪の教唆犯が成立する。",c3:"３．甲は，隣人Ａの居宅の玄関前に置いてあった自転車を，Ａの所有物と認識して持ち去ったが，実際には，同自転車は無主物だった。甲には遺失物等横領罪が成立する。",c4:"４．甲は，駐車場に駐車中のＡ所有の自動車を見て，Ａに対する腹いせに傷つけてやろうと思って石を投げたが，狙いがそれて，その隣に駐車中のＢ所有の自動車に石が当たってフロントガラスが割れた。甲には器物損壊罪が成立する。",c5:"５．甲は，乙との間で，Ａに暴行を加えることを共謀したところ，乙は，Ａに対して暴行を加えている最中に興奮のあまり殺意を生じ，Ａを殺害してしまった。甲には傷害罪の共同正犯が成立するにとどまる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"35"},{year:"2012",num:"8",subject:"kei",q:"信用毀損罪又は名誉毀損罪に関する次の１から５までの各記述を判例の立場に従って検討し，正しいものを２個選びなさい。",c1:"１．甲は，スーパーマーケットＶに嫌がらせをする目的で，誰でも閲覧できるインターネット上の掲示板に「Ｖで買ったオレンジジュースに異物が混入していた。」旨の嘘の書き込みをした。甲には信用毀損罪は成立しない。",c2:"２．教授甲は，数百人が出席している講演会で，日頃意見の対立するＶ教授がＸ県出身であったことから，誰のことを言っているかは分からないようにしつつ，「Ｘ県人は頭が悪い。」と述べた。甲には名誉毀損罪が成立する。",c3:"３．甲は，以前交際していたＶ女が別の男性と婚約したことを知り，腹いせに，Ｖ女の両親に宛てて，「Ｖ女には他にも数人男がいる。Ｖ女の好色は目に余る。」などと嘘の事実を記載した手紙を匿名で郵送した。甲には名誉毀損罪は成立しない。",c4:"４．甲は，インターネット上の書き込みを信じ，特段の調査をすることなく，誰でも閲覧できるインターネット上の掲示板に「ラーメン店Ｖの経営母体は暴力団Ｘである。」旨の真実に反する書き込みをした。甲には名誉毀損罪は成立しない。",c5:"５．甲は，かつて甲をいじめたＶが破産したことを知り，仕返しをするため，「Ｖは破産者である。」と書かれたビラを多数人に配布した。甲には信用毀損罪は成立しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"35"},{year:"2012",num:"9",subject:"kei",q:"緊急避難に関する次の１から５までの各記述を判例の立場に従って検討し，正しいものを２個選びなさい。",c1:"１．緊急避難の要件である「現在の危難」は，人の行為によるものに限られないから，自然災害もこれに含まれる。",c2:"２．緊急避難が成立するのは，避難行為により避けようとした害が避難行為から生じた害の程度を超える場合に限られ，前者と後者が同等の場合には成立しない。",c3:"３．緊急避難の要件である「現在の危難」が認められる場合であっても，第三者の正当な利益を侵害することは認められないから，現在の危難を避けるために第三者の法益を侵害したときには，緊急避難は成立しない。",c4:"４．緊急避難の要件である「現在の危難」は，正当防衛の要件の「急迫不正の侵害」とは異なり，法益に対する侵害が現実に存在することを意味し，侵害が差し迫っているだけでは足りない。",c5:"５．避難行為から生じた害が避難行為により避けようとした害の程度を超えるが，危難を回避する方法がその避難行為以外に存在しなかった場合には，過剰避難が成立し得る。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"15"},{year:"2012",num:"10",subject:"kei",q:`犯人蔵匿罪又は犯人隠避罪に関する次のアからオまでの各記述を判例の立場に従って検討した場合，正しいものの組合せは，後記１から７までのうちどれか。
ア．甲は，窃盗罪を犯して逃走中の友人乙及び丙をその事情を知りながら自宅にかくまった。その時点で，警察は，乙に対する捜査を開始していたが，丙が乙の共犯であることについては把握していなかった。甲には，乙をかくまったことについて犯人蔵匿罪が成立するが，丙をかくまったことについて同罪は成立しない。
イ．甲は，乙が強制執行妨害目的財産損壊罪を犯したことを認識した上で乙をかくまったが，同罪の刑が罰金以上であることを知らなかった。甲には犯人蔵匿罪が成立する。
ウ．甲は，殺人罪を犯して逮捕勾留された乙に依頼され，乙の身代わり犯人として警察署に出頭し，自己が犯人であるという嘘の申告をした。甲には犯人隠避罪が成立する。
エ．甲は，強盗罪を犯した後，友人乙に事情を話して唆し，自己を隠避させた。甲には犯人隠避罪の教唆犯は成立しない。
オ．甲は，乙につき，傷害罪で逮捕状が発付されていることを知りながら，乙をかくまった。その後，乙は犯罪の嫌疑が不十分であるという理由で不起訴処分となった場合，甲には犯人蔵匿罪は成立しない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ エ",c6:"６．ウ オ",c7:"７．エ オ",c8:"",c9:"",c10:"",a:"3"},{year:"2012",num:"11",subject:"kei",q:`次の【事例】に引き続く事情に関する後記アからオまでの各【記述】を判例の立場に従って検討し，甲に殺人未遂罪の中止犯が成立する場合には１を，成立しない場合には２を選びなさい。
【事 例】
甲は，殺意をもって，乙の頭部目掛けて包丁で１回切り付けたが，乙は，これを左腕で防いだため，左前腕部切創の傷害を負った。
【記 述】
ア．乙の負った傷害は，全治約２週間の左前腕部切創にとどまり，生命に危険のある状態には至らなかった。甲は，更に乙に切り付けようとしたが，通行人が近づいてくるのを認めて，自己の犯行が発覚すると思い，その場から逃走した。
イ．乙は，前記左前腕部切創に起因する出血のため，早期に治療を受けなければ出血性ショックにより死亡する危険のある状態となった。甲は，乙に致命傷を与えたと思い，その場を立ち去ろうとしたが，乙から「助けてくれ。」と懇願されたため，憐憫の情を催し，通行人に「あそこに怪我人がいるから，あとはよろしく。」とだけ告げて立ち去った。乙は，その通行人が手配した救急車によって病院に搬送されて治療を受けた結果，死亡するに至らなかった。
ウ．乙の負った傷害は，全治約２週間の左前腕部切創にとどまり，生命に危険のある状態には至らなかった。しかし，甲は，乙に致命傷を与えたものと信じ込み，その場を立ち去った。
エ．乙の負った傷害は，全治約２週間の左前腕部切創にとどまり，生命に危険のある状態には至らなかった。甲は，更に乙に切り付けようとしたが，乙から「助けてくれ。」と懇願されたため，憐憫の情を催し，そのままその場から立ち去った。
オ．乙は，前記左前腕部切創に起因する出血のため，早期に治療を受けなければ出血性ショックにより死亡する危険のある状態となった。甲は，更に乙に切り付けようとしたが，乙から「助けてくれ。」と懇願されたため，憐憫の情を催し，乙を病院に搬送して治療を受けさせたが，乙は治療の甲斐なく出血性ショックにより死亡した。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"22212"},{year:"2012",num:"12",subject:"kei",q:"汚職の罪に関する次の１から５までの各記述を判例の立場に従って検討し，誤っているものを２個選びなさい。",c1:"１．収賄罪における「職務」とは，賄賂を収受する公務員の一般的な職務権限に属するとともに，本人が現に具体的に担当している事務であることを要する。",c2:"２．あっせん収賄罪が成立するためには，公務員が積極的にその地位を利用してあっせんすることは必要ではないが，少なくとも公務員としての立場であっせんすることを要し，単なる私人としての行為では足りない。",c3:"３．第三者供賄罪において，賄賂の供与を受ける第三者は，自然人に限られない。",c4:"４．公務員が一般的職務権限を異にする他の部署に異動した後に，前の職務に関して賄賂を収受した場合でも，収受の当時において公務員である以上，収賄罪は成立する。",c5:"５．刑法上，賄賂の目的物は，有体物に限られないが，財産上の利益でなければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"15"},{year:"2012",num:"13",subject:"kei",q:`責任能力に関する次のアからオまでの各記述を判例の立場に従って検討した場合，誤っているものの個数を後記１から５までの中から選びなさい。
ア．犯行時に１４歳未満であっても，公訴を提起する時点で１４歳に達していれば，刑事責任能力が認められる。
イ．犯行時に成年に達していても，犯行時の知能程度が１２歳程度であった場合には，刑事未成年者に関する刑法第４１条が準用される。
ウ．犯行時に心神耗弱の状態にあったと認められれば，刑が任意的に減軽される。
エ．犯行時に事物の是非善悪を弁識する能力が著しく減退していても，行動を制御する能力が十分に保たれていれば，完全責任能力が認められることがある。
オ．飲酒当初から飲酒後に自動車を運転する意思があり，実際に酩酊したまま運転した場合，運転時に飲酒の影響により心神耗弱の状態であっても，完全責任能力が認められることがある。`,c1:"１．１個",c2:"２．２個",c3:"３．３個",c4:"４．４個",c5:"５．５個",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2012",num:"14",subject:"kei",q:`住居侵入罪又は建造物侵入罪に関する次のアからオまでの各記述を判例の立場に従って検討した場合，正しいものの組合せは，後記１から５までのうちどれか。
ア．甲は，父親乙と居住していた実家から長期間家出していたが，強盗の目的で，共犯者丙と一緒に，深夜，乙方内に入った。丙には住居侵入罪が成立するが，甲には住居侵入罪は成立しない。
イ．甲は，乙が現に住んでいるアパートの居室内にのぞき目的で入ったが，同居室は乙の家賃の滞納により既に賃貸借契約が解除されていた。甲には住居侵入罪が成立する。
ウ．甲は，門塀が設けられるとともに，看守者が置かれ出入りが制限されている工場の敷地内に窃盗の目的で立ち入ったが，工場の建物に入る前に逮捕された。甲には建造物侵入未遂罪が成立するにとどまる。
エ．甲は，強盗の目的で乙方に行き，その意図を隠した上，玄関前で「こんばんは。」と挨拶したところ，乙が「お入り。」と答えたので乙方内に入った。甲には住居侵入罪は成立しない。
オ．甲は，交通違反の取締りに当たる捜査車両の車種やナンバーをのぞき見るため，外部からの立入りが制限され，内部をのぞき見ることができない構造になっている警察署の高さ約３メートル，幅３０センチメートルのコンクリート塀の上に登り，その上部に立って中庭を見たが，塀から降りて中庭に立ち入る意思はなかった。甲には建造物侵入罪が成立する。`,c1:"１．ア イ",c2:"２．イ ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2012",num:"15",subject:"kei",q:`次の【事例】に関する後記１から５までの各【記述】を判例の立場に従って検討し，誤っているものを２個選びなさい。
【事 例】
　甲と乙は，Ｖ経営の食料品店で買った弁当を食べたら食中毒になった旨の嘘を言って因縁を付けてＶを脅迫するとともに，同人に軽度の暴行を加え，これらの暴行・脅迫により同人を畏怖させて，損害賠償金の名目で５０万円を支払わせ，これを分配することを計画した。乙は，計画に従い，同店に行き，Ｖに対し，「この店の弁当を食べたら食中毒になった。店の営業を続けたければ５０万円払え。払わないと，この店の弁当で食中毒になったと書いたビラをばらまくぞ。」と語気鋭く申し向けた上，Ｖの額を手の平で軽くたたいた。Ｖは，これをよけようとした際，バランスを崩して転倒し，全治約１週間を要する後頭部打撲の怪我を負った。
　Ｖは，乙が食中毒になったことは嘘であると気付いたが，乙の要求に応じないと，更に暴力を振るわれたり，店を中傷するビラをまかれるかもしれないと畏怖し，手持ちの現金３０万円を乙に渡し，残りの２０万円は翌日支払うことで乙を納得させた。
　乙は，同店を出て，甲と会い，前記経緯を説明した上，Ｖから受け取った３０万円のうち１５万円を分け前として甲に渡した。
　乙は，翌日，同店を訪れてＶから残りの２０万円を受け取ろうとしたが，通報を受けた警察官が同店近くにいたので，２０万円の受取は断念した。
　乙は，甲に事前に相談することなく，腹いせに，「Ｖ経営の食料品店で買った弁当を食べた客が食中毒になった。」という虚偽の事実が書かれたビラを多数の者に配った。
　なお，甲は，乙がＶに怪我を負わせることや前記ビラを配ることを予想していなかった。
【記 述】`,c1:"１．Ｖに怪我を負わせたことについて，甲には，傷害罪は成立しない。",c2:"２．Ｖに怪我を負わせたことについて，乙には，傷害罪が成立する。",c3:"３．Ｖに３０万円を交付させたことについて，甲及び乙には，恐喝既遂罪が成立する。",c4:"４．虚偽のビラを配ったことについて，甲には，信用毀損罪も業務妨害罪も成立しない。",c5:"５．乙から１５万円を受け取ったことについて，甲には，盗品等無償譲受け罪が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"15"},{year:"2012",num:"16",subject:"kei",q:`次の【事例】及び【判旨】に関する後記アからエまでの各【記述】を検討し，正しい場合には１を，誤っている場合には２を選びなさい。
【事 例】
甲は，友人乙及び丙女と深夜歩道上で雑談していたところ，通り掛かったＶから因縁を付けられ，Ｖが丙女の髪をつかんで引きずるなどの暴行を加えたため，乙と共に，丙女への暴行をやめさせるためにＶの顔面を殴るなどした（以下，甲と乙が共にＶの顔面を殴るなどした行為を「第１行為」という。）。Ｖは，一旦丙女への暴行をやめたものの，その後も甲らに悪態をついたため，更に乙においてＶの顔面を殴ったところ（以下，乙がＶの顔面を殴った行為を「第２行為」という。），Ｖが転倒して重傷を負った。第２行為の際，甲はＶに対し暴行を加えることも，乙の行為を制止することもなかった。
【判 旨】
相手方の侵害に対し，複数人が共同して防衛行為としての暴行に及び，相手からの侵害が終了した後に，なおも一部の者が暴行を続けた場合において，侵害現在時における暴行が正当防衛と認められる場合には，侵害終了後の暴行については，侵害現在時における防衛行為としての暴行の共同意思から離脱したかではなく，新たに共謀が成立したかどうかを検討すべきであり，共謀の成立が認められるときに初めて侵害現在時及び侵害終了後の一連の行為を全体として考察し，防衛行為の相当性を検討すべきであるところ，甲に関しては，第１行為については正当防衛が成立し，第２行為については乙との間に新たに共謀が成立したとは認められないのであるから，第１行為と第２行為とを一連一体のものとして総合評価する余地はない。
【記 述】
ア．この判旨は，甲らによる第１行為が正当防衛に当たることから，第１行為と第２行為とを一体のものとして考慮するためには，第２行為についての新たな共謀が必要だと考えている。
イ．この判旨は，甲らによる第１行為が正当防衛に当たることから，甲が乙による第２行為を防止する措置を講じなかったにもかかわらず，甲に共謀関係からの離脱を認めたものである。
ウ．共同正犯について「構成要件に該当する違法な行為を共謀することによって成立する」と考える見解に立つと，この事例における甲の罪責について，この判旨と結論において一致することはない。
エ．この判旨の立場からは，甲に第２行為についての新たな共謀が認められる場合には，甲に過剰防衛が成立する余地はない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1222"},{year:"2012",num:"17",subject:"kei",q:"放火罪に関する次の１から５までの各記述を判例の立場に従って検討し，正しいものを２個選びなさい。",c1:"１．甲は，日頃恨みを持っていたＶの所有する自動車が止めてある駐車場に出向き，同車にガソリンをかけて火をつけ，同車を焼損させたところ，同駐車場に駐車されていた第三者が所有する自動車１０台に延焼する危険が生じたものの，駐車場が住宅地から離れていたため，住宅その他の建物に延焼する危険は生じなかった。甲には建造物等以外放火既遂罪は成立しない。",c2:"２．甲は，周囲に他の住宅のない場所に空家を所有する乙から，同家屋に付された火災保険金をだまし取る計画を持ちかけられ，これに応じることとし，同家屋に立て掛けてあった薪に灯油をかけて火をつけたところ，火は同家屋の取り外し可能な雨戸に燃え移ったが，たまたま降り出した激しい雨によって鎮火した。甲には他人所有非現住建造物等放火未遂罪が成立するにとどまる。",c3:"３．甲は，深夜，本殿・祭具庫・社務所・守衛詰所が木造の回廊で接続され，一部に火を放てば他の部分に延焼する可能性がある構造の神社の祭具庫壁付近にガソリンをまいてこれに火をつけた。その結果，無人の祭具庫は全焼したものの，Ｖらが現在する社務所・守衛詰所には，火は燃え移らなかった。甲には現住建造物等放火既遂罪が成立する。",c4:"４．甲は，日頃恨みを持っていたＶが居住するマンション内部に設置されたエレベーターのかご内に，ガソリンを染み込ませて点火した新聞紙を投げ入れて放火し，エレベーターのかごの内部を焼損させた。甲には現住建造物等放火未遂罪が成立するにとどまる。",c5:"５．甲は，妻所有の一戸建て木造家屋に妻と二人で暮らしていたところ，ある日，同家屋内において，口論の末に激高して妻を殺害し，その直後に犯跡を隠すため，同家屋に火をつけて全焼させたが，周囲の住宅には燃え移らなかった。甲には現住建造物等放火既遂罪が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"23"},{year:"2012",num:"18",subject:"kei",q:`次の【事例及び裁判所の判断】に関する後記１から５までの各【記述】のうち，誤っているものはどれか。
【事例及び裁判所の判断】
被告人ら複数名が，被害者に対し，マンションの居室内において，長時間にわたって激しい暴行を加えたところ，被害者が，隙を見て同居室から逃走した上，被告人らに極度の恐怖感を抱き，その追跡から逃れるため，逃走を開始してから約１０分後，上記マンションから約８００メートル離れた高速道路内に進入し，疾走してきた自動車に衝突されて死亡したという傷害致死被告事件において，裁判所は，「被害者が逃走しようとして高速道路に進入したことは，危険な行為ではあるが，被害者は，被告人らの激しい暴行を受けて極度の恐怖感を抱き，必死に逃走を図る過程で，とっさにそのような行動を選択したものと認められ，その行動が，被告人らの暴行から逃れる方法として，著しく不自然，不相当であったとはいえない。そうすると，被害者が高速道路に進入して死亡したのは，被告人らの暴行に起因するものと評価することができるから，被告人らの暴行と被害者の死亡との間の因果関係は肯定することができる。」旨の判断を示した。
【記 述】`,c1:"１．この裁判所の考え方によれば，上記事例において，高速道路内に進入する以外に被害者にとって容易にとり得る他の安全な逃走経路があり，そのことを被害者が認識していたにもかかわらず，あえて被害者が高速道路に進入した場合には，因果関係を否定する判断に結び付きやすいといえる。",c2:"２．この裁判所の考え方は，被告人らの行為の危険性が現実化したか否かという観点から，逃走した被害者の行動が，被告人らの暴行による心理的・物理的な影響に基づくか否かを検討することによって，因果関係の存否を判断しているものと評価することも可能である。",c3:"３．この裁判所の考え方によれば，上記事例において，被告人らが被害者に加えた暴行が短時間かつ軽微なもので，被害者も強い恐怖感を抱かなかった場合には，因果関係を否定する判断に結び付きやすいといえる。",c4:"４．この裁判所の考え方は，被告人らの行為と被害者の死亡の結果との間に事実的なつながり（条件関係）が存在することを前提にした上で，被告人らの行為の後に被害者による危険な逃走行為が介在した場合における因果関係の存否を判断していると評価することも可能である。",c5:"５．この裁判所の考え方によれば，上記事例において，被害者が暴行を受けたマンションの居室から逃げ出し，同マンションに面した一般道路に慌てて飛び出したところ，自動車に衝突されて死亡したという場合であれば，因果関係を否定する判断に結び付きやすいといえる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2012",num:"19",subject:"kei",q:"次の１から５までの各記述のうち，事後強盗の予備行為に強盗予備罪の成立を認める見解の根拠となり得るものを２個選びなさい。",c1:"１．窃盗の実行に着手した後，財物窃取前に被害者に発見されたため，同人に暴行・脅迫を加えて財物を強取するいわゆる居直り強盗の場合と，事後強盗の場合を，予備段階で区別するのは実際上困難であり，両者の処罰に差異を設けることは妥当でない。",c2:"２．条文の配置上，事後強盗罪の処罰規定が強盗予備罪の処罰規定の後に規定されていることを考慮すべきである。",c3:"３．実質的に窃盗の予備を処罰することになる。",c4:"４．事後強盗罪に関する刑法第２３８条は，「強盗として論ずる。」と規定している。",c5:"５．事後強盗罪は，窃盗犯人であることを身分とする身分犯であり，身分犯の予備行為は，身分者でなければ行うことができない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"14"},{year:"2012",num:"20",subject:"kei",q:`没収と追徴に関する次の【記述】中の①から⑧までの（ ）内に，後記アからシまでの 【語句群】から適切な語句を入れた場合，正しいものの組合せは，後記１から５までのうちどれか。
【記 述】
「刑法第１９条により没収の対象とされているのは，例えば，犯罪を組成した物として（①），犯罪行為の用に供した物として（②），犯罪行為によって生じた物として（③），犯罪によって得た物として（④）がある。同条は，任意的な没収を定めた規定であるが，刑法上，必要的没収となるものとしては，（⑤）がある。没収は，罰金，（⑥）と並ぶ財産刑の一種であり，（⑦）を言い渡す場合に付加して言い渡すことができるものである。これに対し，追徴は，没収が不能となった場合に認められる（⑧）である。」
【語句群】
ア．殺人に使用された包丁
イ．賭博に勝って得た金品
ウ．文書偽造罪における偽造文書
エ．偽造文書行使罪における偽造文書
オ．犯罪行為の報酬として得た金銭
カ．収受した賄賂
キ．過料
ク．科料
ケ．自由刑
コ．主刑
サ．換刑処分
シ．付加刑`,c1:"１．①ウ ②ア ③エ ④カ ⑤オ ⑥ク ⑦ケ ⑧シ",c2:"２．①ウ ②エ ③イ ④オ ⑤ア ⑥キ ⑦コ ⑧サ",c3:"３．①エ ②ア ③ウ ④イ ⑤カ ⑥ク ⑦コ ⑧サ",c4:"４．①エ ②ア ③ウ ④オ ⑤カ ⑥ク ⑦コ ⑧シ",c5:"５．①カ ②エ ③ウ ④イ ⑤オ ⑥キ ⑦ケ ⑧シ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2012",num:"21",subject:"kso",q:`次のⅠ及びⅡの【見解】は，逮捕状が発付されている被疑事実についての緊急逮捕の可否に関するものである。次のアからオまでの【記述】のうち，Ⅰの見解について述べたものには１を，Ⅱの見解について述べたものには２を選びなさい。
【見 解】
Ⅰ．緊急逮捕は許されない。
Ⅱ．緊急逮捕の要件さえ備わっていれば，緊急逮捕も許される。
【記 述】
ア．この見解に対しては，二重逮捕の危険を生ぜしめるのではないかという批判がある。
イ．逮捕後にできる限り速やかに逮捕状を示すことができないことが予想されれば，逮捕状の緊急執行は相当でないから，この見解によれば，手元に逮捕状を有しない司法警察員がいわゆる指名手配の対象となっている被疑者を発見したとしても，被疑者を直ちに逮捕できないこともあり得る。
ウ．この見解は，現行法上逮捕状が裁判官の命令状とは解し難いことや，捜査官が逮捕状により逮捕の執行を義務付けられているわけではないことを根拠としている。
エ．逮捕状の緊急執行の場合，遅くとも勾留請求のときまでに逮捕状を被疑者に呈示する必要があるが，逮捕後の逮捕状の呈示が遅れた結果，法定の制限時間内に勾留請求ができなかったとしても，例外的に刑事訴訟法第２０６条により制限時間不遵守の免責を受け得る余地があるから，この見解に立ったとしても，実際上の不都合はない。
オ．この見解に立ったとしても，いわゆる指名手配の対象となっている被疑者に関しては，逮捕状の発付を数通受けて要所に送付しておけば，被疑者を発見した場合に直ちに逮捕できないという結果を回避し得る。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"21211"},{year:"2012",num:"22",subject:"kso",q:`被疑者の勾留に関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。
ア．裁判官は，被疑者の勾留期間の延長をする旨の裁判をする際，被疑者に対し被疑事件を告げこれに関する陳述を聴く手続を行わなければならない。
イ．裁判官が，検察官から勾留の請求があった翌日に，被疑者を勾留する旨の裁判をした場合でも，検察官は，勾留の請求をした日から１０日以内に公訴を提起しないときは，勾留期間の延長が認められた場合を除き，直ちに被疑者を釈放しなければならない。
ウ．裁判官は，検察官から勾留期間を１０日間延長する請求があった場合でも，その延長期間を５日間とする裁判をすることができる。
エ．少年の被疑者については，勾留することができない。
オ．検察官は，適当と認めるときは，検察官自らの裁量により，勾留の執行を停止することができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2012",num:"23",subject:"kso",q:`捜査機関が行う写真等の撮影に関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。ただし，判例がある場合には，それに照らして考えるものとする。
ア．何人もみだりにその容貌・姿態を撮影されない自由を有しているから，公道を歩行中の人に対する警察官による容貌等の写真撮影は，撮影される本人の同意がなく，また裁判官の令状がない場合には，現に犯罪が行われ若しくは行われた後間がないと認められる場合であって，証拠保全の必要性及び緊急性があり，その撮影が一般的に許容される限度を超えない相当な方法をもって行われるとき以外は許されない。
イ．身体の拘束を受けている被疑者は，既に身体の拘束という強制処分を受けている以上，ある程度の処分は別個の令状なくして許されるから，身体検査令状の発付を受けることなく，被疑者を全裸にしてその身体を写真撮影することができる。
ウ．捜査機関が，捜査の必要のため，宅配便業者の了解を得て，その運送過程下にある宅配便荷物を借り受けた上，荷送人や荷受人の承諾を得ることなく，これに外部からエックス線を照射して内容物の射影を撮影する行為は，宅配便荷物の外部から照射したエックス線の射影により内容物の形状や材質をうかがい知ることができるにとどまるから，プライバシー等の侵害の程度が大きいとはいえない上，占有者である宅配便業者の承諾を得て行っているものであるから，検査対象を不審な宅配便荷物に限定して行う場合には，任意捜査として許容される。
エ．捜査官が被疑者に犯行状況を再現させた結果を記録した実況見分調書で，立証趣旨を「犯行状況」とする書面の写真部分については，弁護人が証拠とすることについて同意しなかった場合であっても，刑事訴訟法第３２１条第３項所定の要件のほか，同法第３２２条第１項所定の要件を満たせば証拠能力が認められる。
オ．捜査機関は，捜索差押許可状による捜索差押えの際に，捜索差押えに付随する処分として，捜索差押許可状を立会人に示している状況や，捜索の現場で差し押さえるべき物が発見された状況を写真撮影することができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2012",num:"24",subject:"kso",q:`告訴に関する次のアからオまでの各記述のうち，判例に照らして，誤っているものの組合せは，後記１から５までのうちどれか。
ア．弟甲から宝石を盗まれたとして同居していない姉Ａが告訴した。捜査の結果，甲が宝石と一緒に現金を盗んでいたことが判明したが，Ａは追加の告訴をしなかった。この場合，検察官が宝石と現金を窃取した事実で甲を起訴しても，親告罪について告訴のない事実を起訴したことにならない。
イ．弟甲から宝石を盗まれたとして同居していない姉Ａが告訴したが，後に告訴を取り消した。捜査の結果，甲が宝石と一緒に現金を盗んでいたことが判明したため，Ａはこの現金を窃取した事実を告訴した。この場合，検察官が現金を窃取した事実で甲を起訴しても，親告罪について告訴のない事実を起訴したことにならない。
ウ．弟甲から宝石を盗まれたとして同居していない姉Ａが告訴した。捜査の結果，甲が宝石と一緒にＡと同居している妹Ｂからも現金を盗んでいたことが判明したが，Ｂは告訴しなかった。この場合，検察官が宝石と現金を窃取した事実で甲を起訴しても，親告罪について告訴のない事実を起訴したことにならない。
エ．胸を触られ強姦されそうになったことは許せない旨の強姦未遂の告訴を被害者から受けて捜査をした結果，強制わいせつの事実が判明した場合，被害者による強姦未遂の告訴は，それより軽い強制わいせつの事実を当然包含しているから，検察官が強制わいせつの事実で起訴しても，親告罪について告訴のない事実を起訴したことにならない。
オ．深夜無理やり自動車に連れ込まれ強姦されそうになったことは許せない旨の強姦未遂の告訴を被害者から受けて捜査をした結果，わいせつ目的略取未遂の事実が判明した場合，強姦未遂罪とわいせつ目的略取未遂罪は，観念的競合又は牽連犯の関係に立ち，一方が他方を包含する関係にないが，被害者による強姦未遂の告訴があれば，検察官がわいせつ目的略取未遂のみの事実で起訴しても，親告罪について告訴のない事実を起訴したことにならない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2012",num:"25",subject:"kso",q:`次のアからオまでの各記述のうち，検察官の権限として認められていないものは幾つあるか。後記１から６までのうちから選びなさい。ただし，判例がある場合には，それに照らして考えるものとする。
ア．被疑者を緊急逮捕すること
イ．殺人事件の被疑者につき，公訴を提起しないこと
ウ．起訴された被告事件のみで勾留されている被告人と弁護人との接見に関し，その日時，場所及び時間を指定すること
エ．有罪判決に対して控訴すること
オ．刑の執行を指揮すること`,c1:"１．０個",c2:"２．１個",c3:"３．２個",c4:"４．３個",c5:"５．４個",c6:"６．５個",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2012",num:"26",subject:"kso",q:`検察官の公訴に関する次のアからオまでの各記述のうち，誤っているものの組合せは，後記１から５までのうちどれか。ただし，判例がある場合には，それに照らして考えるものとする。
ア．犯人の性格，年齢及び境遇，犯罪の軽重及び情状並びに犯罪後の情況により訴追を必要としないときは，公訴を提起しないことができる。
イ．検察官は，立証の難易等諸般の事情を考慮し，一罪を構成する行為の一部を起訴することができる。
ウ．公訴の取消しは，公判期日における冒頭手続終了後にあっては，被告人の同意を得なければその効力を生じない。
エ．公訴の取消しによる公訴棄却の決定が確定したときは，犯罪事実につき新たに重要な証拠を発見した場合であっても，同一事件について更に公訴を提起することはできない。
オ．検察官が公訴の提起と同時にする即決裁判手続の申立ては，即決裁判手続によることについての被疑者の同意がなければ，これをすることができない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2012",num:"27",subject:"kso",q:`保釈に関する次のアからオまでの各記述を検討し，正しい場合には１を，誤っている場合には２を選びなさい。
ア．裁判所は，保釈を許す場合だけでなく，保釈の請求を却下する場合にも，検察官の意見を聴かなければならない。
イ．定まった住居を有する被告人が，逃亡すると疑うに足りる相当な理由があるということのみを理由に勾留されている場合，被告人から保釈の請求があったときは，裁判所は保釈を許さなければならない。
ウ．裁判所は保釈を許す場合，保釈保証金の没取という威嚇以外の手段により被告人の出頭を確保することができると考えるときは，保証金額を定めないことができる。
エ．裁判所は，勾留されている被疑者から保釈の請求があった場合には，捜査機関からの出頭要請に応じることや被害者等との接触禁止など適当な条件を付して，保釈を許すことができる。
オ．保釈中の被告人に対して懲役４年の刑に処する判決の宣告があったときであっても，判決が確定しなければ，被告人を刑事施設に収容することはできない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"12222"},{year:"2012",num:"28",subject:"kso",q:`証拠調べに関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。
ア．裁判員裁判において，被告人又は弁護人は，証拠により証明すべき事実その他の事実上及び法律上の主張があるときには，検察官の立証が終了した後被告人側の立証を始めるに当たり，冒頭陳述によりその主張を明らかにしなければならない。
イ．公判期日において検察官が証拠書類又は証拠物の取調べを請求する場合には，あらかじめ被告人又は弁護人に閲覧する機会を与えなければならず，弁護人が証拠書類又は証拠物の取調べを請求する場合には，あらかじめ検察官に閲覧する機会を与えなければならない。
ウ．弁護人から鑑定の請求があった場合，裁判所は，これを採用するか却下するかについて参考にするため，検察官に，刑事訴訟法第３２６条の同意をするかどうか聴かなければならない。
エ．証拠調べの請求は，証拠と証明すべき事実との関係を具体的に明示して行わなければならず，裁判所は，その関係が明らかにされていないときは，証拠調べの請求を却下することができる。
オ．地方裁判所の証拠決定について法令の違反があるときは，これに不服がある当事者から，審理の終結を待たず，高等裁判所に対して不服申立てをすることができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2012",num:"29",subject:"kso",q:`次の【事例】は，甲に対する強盗殺人被告事件の公判前整理手続におけるやり取りである。このやり取りに関する後記アからオまでの【記述】のうち，正しいものの組合せは，後記１から５までのうちどれか。
【事 例】
裁判長：それでは，甲に対する強盗殺人被告事件に関する第１回の公判前整理手続を開始します。本期日においては，被告人が公判前整理手続に出頭しています。被告人，名前と生年月日を言ってください。
被告人：甲です。昭和３７年１０月１０日生まれです。
裁判長：被告人は，終始沈黙し，又は個々の質問に対し陳述を拒むことができます①。分かりましたか。
被告人：はい。分かりました。
裁判長：検察官からは，裁判所に対し，あらかじめ証明予定事実記載書面が提出され②，併せて，証拠等関係カード記載の証拠の取調べ請求がされています。検察官，証明予定事実と請求証拠については，これらの書面のとおりでよろしいですか。
検察官：はい。
裁判長：弁護人は，検察官からこれらの書面を受け取っていますか。
弁護人：はい。あらかじめ送付を受けました③。
裁判長：請求証拠について開示を受けましたか。
弁護人：はい。証拠の開示を受けております④。
裁判長：弁護人，刑事訴訟法第３１６条の１５に規定する類型証拠の開示を受けていますか。
弁護人：幾つか証拠の開示を受けていますが，弁護人としては，一部の類型については更に刑事訴訟法第３１６条の１５に規定する類型証拠の開示を求めたいと考えています⑤。
【記 述】
ア．①については，裁判所は，刑事訴訟法上，被告人を出頭させて公判前整理手続をする場合に，被告人に対し告知しなければならない。
イ．②については，検察官は，刑事訴訟法上，裁判所に対し，証明予定事実記載書面の提出をしなくてもよい。
ウ．③については，検察官は，刑事訴訟法上，弁護人に対し，証明予定事実記載書面の送付をしなくてもよい。
エ．④については，検察官は，刑事訴訟法上，弁護人に対し，取調べ請求に係る証拠書類や証拠物を閲覧し，かつ，謄写する機会を与えなければならない。
オ．⑤については，弁護人は，刑事訴訟法第３１６条の１５に規定する類型証拠の開示請求をするに当たり，具体的に主張を明示しなければならない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2012",num:"30",subject:"kso",q:`犯罪の証明に関する次のアからオまでの各記述のうち，誤っているものの組合せは，後記１から５までのうちどれか。ただし，判例がある場合には，それに照らして考えるものとする。
ア．裁判所は，被告事件について犯罪の証明があったときは，同事件について刑を免除するときを除き，判決で刑の言渡しをしなければならない。
イ．刑事裁判の有罪認定に当たって必要とされる「合理的な疑いを差し挟む余地のない程度の立証」とは，反対事実が存在する疑いを全く残さない場合をいうものではなく，抽象的な可能性としては反対事実が存在するとの疑いをいれる余地があっても，健全な社会常識に照らして，その疑いに合理性がないと一般的に判断される場合には，有罪認定を可能とする趣旨である。
ウ．裁判員の関与する判断に関しては，証拠の証明力は，それぞれの裁判官及び裁判員の自由な判断に委ねる。
エ．一般的に，情況証拠は，直接証拠に比べて証明力が低く，情況証拠により事実認定を行う場合は，直接証拠により事実認定を行う場合と比べてより慎重な判断が求められることから，反対事実の存在の可能性を許さないほどの確実性がなければならない。
オ．略式手続においては，書面審理による迅速な判断が要求されることから，犯罪の証明は証拠の優越で足りる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2012",num:"31",subject:"kso",q:`次の教授と学生Ａ及びＢの【会話】は，刑事訴訟法第３１９条第１項に関するものである。①から⑧までの（ ）内に入る適切な語句を後記ａからｋまでの【語句群】から一つずつ選んで入れた場合，組合せとして正しいものは，後記１から５までのうちどれか。なお，①から⑧までの（ ）内にはそれぞれ異なる語句が入る。
【会 話】
教 授：刑事訴訟法第３１９条第１項は，「任意にされたものでない疑のある自白は，これを証拠とすることができない」と規定していて，任意性のない自白の（①）を否定していますが，その根拠についてはどんな考え方があるかね。
学生Ａ：まず，一つ目として，任意性のない自白は，その内容が（②）おそれがあり，誤判防止のため排除されるべきとする説があります。教 授：この説に対しては，任意性のない自白でも，その内容が（③）と認められれば，証拠として許容される可能性があるのではないかという批判があるね。ほかにどんな考え方があるかな。
学生Ｂ：二つ目として，任意性のない自白は，（④）等を保障するため排除されるべきとする説があります。でも，この説については，（⑤）に関する事実認定が困難ではないかという批判があります。
教 授：三つ目として，一つ目の説と二つ目の説を統合した考え方もあるね。
学生Ａ：四つ目として，任意性のない自白は，（⑥）により得られた結果として排除されるべきとする説もあります。この説は，先ほどの三つの説と違い，（⑦）側から（⑧）側に視点を移して，取調べ方法を問題にするものです。
学生Ｂ：この説については，（⑥）により得られた自白の全てが刑事訴訟法第３１９条第１項により排除されるという結論になりやすく，規定の文言上無理があるという批判があります。
【語句群】
ａ．被告人
ｂ．取調官
ｃ．違法な手続
ｄ．虚偽ではない
ｅ．虚偽である
ｆ．黙秘権
ｇ．自由心証主義
ｈ．証明力
ｉ．証拠能力
ｊ．供述者の主観的な心理状態 
ｋ．客観的な取調べ状況`,c1:"１．①ｉ ④ｆ",c2:"２．②ｅ ④ｇ",c3:"３．③ｄ ⑤ｋ",c4:"４．⑤ｊ ⑦ｂ",c5:"５．⑥ｃ ⑧ａ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2012",num:"32",subject:"kso",q:`次の【事例】に関する甲を有罪とするのに必要な甲の自白の補強証拠について述べた後記アからオまでの【記述】のうち，正しいものの組合せは，後記１から５までのうちどれか。ただし，判例がある場合には，それに照らして考えるものとする。なお，甲の自白及び各証拠について，その証拠能力及び証明力には問題はないものとする。
【事 例】
甲は，平成２３年４月３日，Ｈ警察署を訪れ，同署司法警察員Ｘに対し，「乙と一緒にＶ１を殺害する計画を立てた。その計画は，乙がＶ１をＨ市内の岸壁に呼び出し，私が普通乗用自動車を運転してＶ１を跳ね飛ばして殺害し，Ｖ１の死体を海に捨てるというものであった。実際，私は，この計画どおり，平成２３年２月３日午後９時頃，前記岸壁において，普通乗用自動車を運転し，乙が呼び出したＶ１を跳ね飛ばして殺害し，乙と一緒にＶ１の死体を海に捨てた。ちなみに，私は，これまで，一度も運転免許を取得したことがない。また，私は，平成２２年１２月８日，Ｈ市内にあるアパートの一室に侵入して現金１０万円と時計１個を盗んだ。その後に確認したところ，私が盗みに入ったアパートの住人はＶ２だと分かった。」などと，道路交通法違反（無免許運転），殺人，死体遺棄，住居侵入，窃盗の罪を自白した。そこで，司法警察員Ｘは，この自白を内容とする供述調書を作成した。その後，甲は，平成２３年４月５日，司法警察員Ｘに述べたことと同じ内容を記載した知人Ａ宛ての手紙を作成した上，これをＡに郵送した。
【記 述】
ア．甲を道路交通法違反（無免許運転）の罪で有罪とするには，甲が無免許であることについての補強証拠が必要不可欠であり，この証拠がない限り，甲を道路交通法違反（無免許運転）の罪で有罪とする余地はない。
イ．甲を殺人，死体遺棄の罪で有罪とするには，Ｖ１の死体を写真撮影した写真撮影報告書等Ｖ１の死体の発見を前提とする補強証拠が必要不可欠であり，Ｖ１の死体を発見できなかった場合には，甲を殺人，死体遺棄の罪で有罪とする余地はない。
ウ．甲を殺人，死体遺棄の罪で有罪とするためには，Ａに郵送された手紙以外の補強証拠が必要不可欠であり，甲の供述調書及びＡに郵送された手紙以外の証拠がない場合には，甲を殺人，死体遺棄の罪で有罪とする余地はない。
エ．甲を住居侵入，窃盗の罪で有罪とするには，平成２３年４月３日より前にＶ２が前記被害を届けていることについての補強証拠が必要不可欠であり，前記甲の自白を端緒に捜査を開始した結果，Ｖ２が前記被害に気付いて被害を届けた場合，甲を住居侵入，窃盗の罪で有罪とする余地はない。
オ．甲を現金１０万円及び時計１個を窃取した旨の窃盗の罪で有罪とするには，Ｖ２が被害直後に現金１０万円と時計１個を窃取された旨の被害を届けていた場合であっても，被害金品の所在又は使途についての補強証拠が必要不可欠であり，たとえ，甲から押収した被害に係る時計１個が証拠として存在しても，被害に係る現金１０万円の使途を全て明らかにする補強証拠がない限り，甲を現金１０万円及び時計１個を窃取した旨の窃盗の罪で有罪とする余地はない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2012",num:"33",subject:"kso",q:`次の【記述】は，酒酔い・酒気帯び鑑識カードの証拠能力に関する最高裁判所の判例を要約したものである。【記述】中の①から③までの()内から適切な語句を選んだ場合，その組合せとして正しいものは，後記１から５までのうちどれか。
【記 述】
本件「化学判定」欄は，甲警察署巡査Ａが被疑者の呼気を通した飲酒検知管の着色度を観察して比色表と対照した検査結果を検知管の示度として記入したものであり，また，被疑者の外部的状態に関する記載のある欄は，同巡査が被疑者の言語，動作，酒臭，外貌，態度等の外部的状態に関する所定の項目につき観察した結果を所定の評語に印を付ける方法によって記入したものであって，本件「酒酔い・酒気帯び鑑識カード」のうち以上の部分は，同巡査が，被疑者の酒酔いの程度を判断するための資料として，被疑者の状態につき前記のような検査，観察により認識した結果を記載したものであるから，紙面下段の調査の日時の記載，同巡査の記名押印とあいまって，①（ａ．刑事訴訟法第３２１条第３項にいう「検証の結果を記載した書面」 ｂ．刑事訴訟法第３２１条第４項にいう「鑑定の経過及び結果を記載した書面」）に当たるものと解するのが相当である。（中略）「外観による判定」欄の記載は，同巡査が被疑者の外部的状態を観察した結果を記載したものであるから，②（ａ．検証 ｂ．鑑定）の結果を記載したものと認められる。（中略）本件「酒酔い・酒気帯び鑑識カード」のうち被疑者との問答の記載のある欄は，同巡査が所定の項目につき質問をしてこれに対する被疑者の応答を簡単に記載したものであり，③（ａ．被疑者が作成した供述書として刑事訴訟法第３２２条第１項の書面 ｂ．同巡査作成の捜査報告書たる性質のものとして刑事訴訟法第３２１条第１項第３号の書面）に当たるものと解するのが相当である。`,c1:"１．①ａ ②ａ ③ａ",c2:"２．①ａ ②ａ ③ｂ",c3:"３．①ａ ②ｂ ③ａ",c4:"４．①ｂ ②ｂ ③ｂ",c5:"５．①ｂ ②ｂ ③ａ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2012",num:"34",subject:"kso",q:"鑑定に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．当事者の一方が鑑定を請求した場合，裁判所が鑑定を決定するについては，相手方又はその弁護人に意見を述べる機会を与えなければならない。",c2:"２．裁判所は，選任した鑑定人に鑑定を命ずるに先立ってその尋問を行うが，尋問を行うための召喚に当該鑑定人が応じないときは勾引することができる。",c3:"３．鑑定人には，鑑定をする前に，宣誓をさせなければならない。",c4:"４．鑑定人に鑑定の経過及び結果を報告させるに当たっては，鑑定書により報告させる方法のほか，口頭で報告させる方法も認められている。",c5:"５．鑑定人作成の鑑定書を取り調べた後，鑑定の過程について説明を求めるため，当該鑑定人を証人として尋問することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2012",num:"35",subject:"kso",q:`主尋問後に証人が所在不明になるなどの事情により反対尋問を経ていない証人の証言の証拠能力に関する次のアからオまでの各記述のうち，誤っているものの組合せは，後記１から５までのうちどれか。
ア．伝聞証拠とは，反対尋問を経ていない供述証拠であることを強調すると，反対尋問を受けておらず，伝聞証拠に当たることになるから，前記証言の証拠能力を否定する見解に結び付く。
イ．「公判期日における供述に代えて書面を証拠とし，又は公判期日外における他の者の供述を内容とする供述を証拠とすることはできない」という刑事訴訟法第３２０条第１項の文言を言葉どおりに解釈すると，前記証言の証拠能力を否定する見解に結び付く。
ウ．裁判官が証人の証言態度等を直接観察していることを重視すると，前記証言の証拠能力を否定する見解に結び付く。
エ．証人は，宣誓をしており，偽証罪による制裁という威嚇がある下での供述であることを重視すると，前記証言の証拠能力を肯定する見解に結び付く。
オ．前記証言が伝聞証拠に当たらないとの見解に立っても，反対尋問が実施できなくなった事情について証人申請をした当事者の責めに帰すべき理由がある場合には，手続的正義に反し，証拠能力が否定されると考えることも可能である。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2012",num:"36",subject:"kso",q:`次のアからオまでの各手続のうち，殺人被告事件の手続への参加を許可された同事件の被害者の配偶者が，公判期日において行うことが認められないものの組合せは，後記１から５までのうちどれか。
ア．裁判所の許可を受けて証拠の取調べを請求すること
イ．被告人の更生可能性について述べた証人の供述の証明力を争うために必要な事項について，裁判所の許可を受けて当該証人を尋問すること
ウ．裁判所の許可を受けて，犯行の動機について被告人に質問をすること
エ．裁判所に対し，強盗殺人罪の訴因への変更を請求すること
オ．検察官が懲役１５年が相当であるとの意見を述べた後，裁判所の許可を受けて，「本件被告事件については無期懲役が相当である。」との意見を述べること`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2012",num:"37",subject:"kso",q:`次の【事例】に関する裁判について述べた後記アからオまでの【記述】のうち，誤っているものの組合せは，後記１から５までのうちどれか。
【事 例】
　外国人である甲，乙，丙，丁及び戊は，共謀の上，平成２３年４月１日，Ｈ県Ｉ市内において，被害者Ｖに対し，その顔面を多数回殴打するなどの暴行を加えてバッグ１個を強取したとして強盗罪によりＨ地方裁判所に起訴された。ちなみに，甲，乙，丙，丁及び戊は，いずれも，家庭裁判所に送致されることなく，成人として起訴された。その後，同年７月１日に開かれた第１回公判期日において，乙，丙，丁及び戊については，成人であることに間違いないことが確認されたが，甲については，１８歳であることが判明した。また，同公判において，結審した。
　裁判所は，甲，乙及び丙については，強盗罪の共同正犯である旨の心証を抱いたが，丁については，「公訴事実記載のとおり，甲，乙及び丙と共にＶに対してその顔面を多数回殴打するなどの暴行を加えたことに間違いない。しかし，これは，Ｖを痛めつけるために行ったものであり，Ｖからバッグ１個を奪うためではない。Ｖからバッグ１個等財物を奪う話は誰からも聞いたこともない。」との丁の公判廷での供述のとおり，強盗罪の共謀までは認められず，前記強盗の手段である暴行につき，甲，乙及び丙と共に実行行為に関与したものとして共同暴行（暴力行為等処罰に関する法律第１条違反）の共同正犯にとどまる旨の心証を抱いた。さらに，戊については，犯罪の証明がない旨の心証を抱いた。
【記 述】
ア．裁判所は，少年であることが判明した甲については，決定をもって，事件を家庭裁判所に移送しなければならない。
イ．裁判所は，乙につき，有罪の言渡しをするには，罪となるべき事実のみならず，証拠の標目及び法令の適用を示さなければならない。
ウ．裁判所は，丙につき，有罪の言渡しをするには，宣告により判決を告知する必要があり，宣告をせずに判決書謄本を丙に交付するだけでは，丙に判決を告知したことにはならない。
エ．裁判所は，丁につき，強盗罪の訴因から暴力行為等処罰に関する法律違反の罪の訴因に変更する手続を採っていないことから，有罪の言渡しをする余地はない。
オ．裁判所は，戊につき，無罪の言渡しをする場合には，決定ではなく，判決でしなければならない。
（参照条文）暴力行為等処罰に関する法律
第１条
 団体若ハ多衆ノ威力ヲ示シ，団体若ハ多衆ヲ仮装シテ威力ヲ示シ又ハ兇器ヲ示シ若ハ数人共同シテ刑法（明治４０年法律第４５号）第２０８条，第２２２条又ハ第２６１条ノ罪ヲ犯シタル者ハ３年以下ノ懲役又ハ３０万円以下ノ罰金ニ処ス`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2012",num:"38",subject:"kso",q:"準抗告に関する次の１から５までの各記述のうち，正しいものはどれか。ただし，判例がある場合には，それに照らして考えるものとする。",c1:"１．被疑者又は弁護人は，逮捕状を発付した裁判に対して準抗告をすることができる。",c2:"２．検察官は，地方裁判所の裁判官がした勾留請求を却下する裁判に対して高等裁判所に準抗告をすることができる。",c3:"３．被疑者又は弁護人は，司法警察員が録取した供述録取書の内容に不服がある場合，これに被疑者が署名したことの取消しを求める準抗告をすることができる。",c4:"４．被疑者又は弁護人は，捜査機関が，捜索差押許可状に記載された「差し押さえるべき物」に該当しない印鑑を写真撮影した場合，これにより得られたネガ及び写真の廃棄又は引渡しを求める準抗告をすることができない。",c5:"５．被告人又は弁護人は，第１回公判期日後の保釈請求を却下する裁判に対して準抗告をすることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2012",num:"39",subject:"kso",q:`次のアからオまでの各記述のうち，刑事訴訟法の規定上，対象となっている事件の法定刑の軽重による差異が設けられていないものの組合せは，後記１から５までのうちどれか。
ア．現行犯人を逮捕することができる要件
イ．被疑者を勾留することができる要件
ウ．告訴をすることができる者の範囲
エ．公訴時効が完成する期間
オ．公判期日において，被害に関する心情その他被告事件に関する意見を陳述したい旨の申出ができる被害者の範囲`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2012",num:"40",subject:"kso",q:`被疑者，被告人及び弁護人の権利に関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。
ア．被疑者，被告人又は弁護人は，あらかじめ証拠を保全しておかなければその証拠を使用することが困難な事情があるときは，第１回の公判期日前に限り，裁判官に押収，捜索，検証，証人の尋問又は鑑定の処分を請求することができる。
イ．公判前整理手続期日には，被告人は，裁判所の許可がなければ出頭することができない。
ウ．検察官から取調べ請求がなされた証拠に対して同意又は不同意の意見を述べるのは，弁護人のみが有する権利である。
エ．被告人甲の弁護人は，裁判長に告げて，共同審理を受けている被告人乙の供述を求めることができるが，甲が乙の供述を求めることはできない。
オ．控訴審では，被告人自身が弁論をすることはできず，控訴趣意書を被告人が差し出した場合でも，それに基づく弁論は弁護人が行う。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2011",num:"1",subject:"ken",q:`東京都管理職選考受験資格確認等請求事件判決（最高裁判所平成１７年１月２６日大法廷判決，民集５９巻１号１２８頁）に関する次のアからウまでの各記述について，当該判決の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．普通地方公共団体は，職員に採用した在留外国人について，国籍を理由として，給与等の勤務条件につき差別的取扱いをしてはならないが，合理的な理由に基づいて日本国民と異なる取扱いをすることまで許されないとするものではない。
イ．普通地方公共団体が，公権力行使等地方公務員の職とこれに昇任するために経るべき職とを包含する一体的な管理職の任用制度を構築した上で，日本国民である職員に限って管理職に昇任できる措置を執ることは，憲法第１４条第１項に違反しない。
ウ．日本国との平和条約に基づき日本の国籍を離脱した者等の出入国管理に関する特例法に定める特別永住者は，居住する地方公共団体の自治の担い手であり，地方公共団体の管理職への昇任を制限するには，一般の在留外国人とは異なる理由が必要である。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2011",num:"2",subject:"ken",q:`いわゆる特別権力関係論に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．特別権力関係論によれば，公権力と特別な関係にある者に対して公権力が包括的な支配権を有し，公権力は法律の根拠なく人権を制限することができ，それについて裁判所の審査は及ばない。
イ．特別権力関係が成立する場合としては，法律の規定に基づくものと本人の同意に基づくものとがある。前者の例として挙げられていたのは受刑者の在監関係と公務員の在勤関係であり，後者の例として挙げられていたのは国公立学生の在学関係であった。
ウ．特別権力関係論には，本質的な問題がある。それは，特別権力関係に属する者が一般国民としての地位に何らかの修正を受ける点で共通の特色を持つにとどまるにもかかわらず，権力服従性という形式的要素によって包括し，人権制約を一般的・観念的に許容する点である。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"3"},{year:"2011",num:"3",subject:"ken",q:`プライバシーに関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．「宴のあと」事件判決（東京地判昭和３９年９月２８日）は，いわゆるプライバシー権は私生活をみだりに公開されないという法的保障ないし権利であるとし，公開を欲するか否かについては，本人の感受性を基準にして判断するとした。
イ．京都府学連事件判決（最大判昭和４４年１２月２４日）は，個人の私生活上の自由として，何人もその承諾なしにみだりにその容貌・姿態を撮影されない自由を有するとし，警察官が正当な理由もないのに個人の容貌等を撮影することは，憲法第１３条の趣旨に反するとした。
ウ．講演会参加者名簿提出事件判決（最二小判平成１５年９月１２日)は，大学が学生から収集した参加申込者の学籍番号，氏名，住所及び電話番号は，プライバシーに係る情報として法的保護の対象となるとし，個人の人格的な権利利益を損なうおそれがあるものであるとした。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"5"},{year:"2011",num:"4",subject:"ken",q:`衆議院議員定数不均衡訴訟判決（最高裁判所昭和５１年４月１４日大法廷判決，民集３０巻３号２２３頁）に関する次のアからウまでの各記述について，当該判決の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法第１４条第１項に定める法の下の平等は，選挙権に関しては，国民は全て政治的価値において平等であるべきとする徹底した平等化を志向するものであり，選挙権の内容，すなわち各選挙人の投票の価値の平等も，憲法が要求するところである。
イ．議員定数配分に際しては，人口比例の原則が最も重要かつ基本的な基準ではあるが，投票価値の平等は，国会が正当に考慮することのできる他の政策的な目的ないし理由との関連において調和的に実現されるべきものであり，国会の裁量権の行使の際における考慮要素にとどまる。
ウ．投票価値の不平等が，国会において通常考慮し得る諸般の要素をしんしゃくしてもなお，一般的に合理性を有するものとは考えられない程度に達し，かつ，合理的期間内における是正が憲法上要求されているのに行われない場合，当該選挙は違憲無効となる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"4"},{year:"2011",num:"5",subject:"ken",q:`憲法第１９条に関する次のアからウまでの各記述のうち，ａは最高裁判所の判例を要約したものであり，ｂはその批判として書かれたものである。ｂがａの批判となっている場合には１を，ｂがａの批判となっていない場合には２を選びなさい。
ア．ａ．謝罪広告を新聞紙に掲載すべきことを命ずることは，憲法第１９条が保障する良心の自由を侵害するものではない。
ｂ．憲法第１９条の「良心」には道徳的反省や誠実さは含まれないので，単に事態の真相を告白し，陳謝の意を表明する程度の強制は認められる。
イ．ａ．内申書に記載されたのは事実である外部的行為であり，それによってその者の思想，信条を了知し得るものではない。
ｂ．思想，信条とその者の外部的行為の間の密接な関係を認めた三菱樹脂事件判決（最大判昭和４８年１２月１２日）の趣旨と相違する。
ウ．ａ．本件における使用者による労働者の政党所属調査は，社会的に許容し得る限界を超えて労働者の思想の自由を侵害した違法行為であるということはできない。
ｂ．労働者の思想信条は，これを理由とする労働条件の差別的取扱いの有無にかかわらず，それ自体において憲法第１９条に即して尊重されるべきである。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"211"},{year:"2011",num:"6",subject:"ken",q:`政教分離に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．県知事の大嘗祭への参列は，日本国及び日本国民統合の象徴である天皇に対する社会的儀礼を尽くすことを目的とするものであり，その効果も，特定の宗教に対する援助，助長，促進又は圧迫，干渉等にはならず，政教分離規定に反しない。
イ．靖国神社及び護国神社は，憲法第８９条にいう「宗教上の組織若しくは団体」に該当することは明らかであり，国又は機関が靖国神社や護国神社に玉串料等として公金を支出すれば，直ちに違憲となる。
ウ．町会は，地域住民によって構成される町内会組織であって，宗教的活動を目的とする団体ではなく，町会が地蔵像の維持管理を行う行為も宗教的色彩の希薄な伝統的習俗行事にとどまるから，市が地蔵像建立のために市有地を町会に無償提供した行為は，政教分離規定に反しない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"121"},{year:"2011",num:"7",subject:"ken",q:`表現の自由の制約の合憲性をめぐる判断枠組みに関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．広告物が貼付されている場所の性質，周囲の状況，広告物の数量や形状，貼付の仕方等を総合的に考慮し，地域の美観風致の侵害の程度と当該広告物に表れた表現の持つ価値とを比較衡量してその規制の合憲性を判断すべきである。
イ．裁判官による積極的な政治運動の禁止の目的は，裁判官の独立及び中立・公正の確保に対する国民の信頼の維持，そして司法と立法・行政とのあるべき関係を規律することであるので，その要請は，一般職の国家公務員に対する政治的行為の禁止の要請よりも強いものというべきである。
ウ．問題となっている写真集のわいせつ性については，芸術など性的刺激を緩和させる要素の存在，問題となっている各写真の写真集に占める比重，作者に対する当該分野の評論家からの評価，その表現手法等の観点から，写真集を全体としてみて判断すべきである。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"211"},{year:"2011",num:"8",subject:"ken",q:`財産権の制限と補償の要否に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法第２９条第３項にいう「公共のために用ひる」とは，公共の福祉のための必要に基づいて公共施設のための用地買収など公共事業を目的として行う場合に限られないが，特定の個人が受益者となる場合は，これに当たらない。
イ．憲法第２９条第３項にいう「正当な補償」とは，その当時の経済状態において成立すると考えられる取引価格に基づき，合理的に算出された相当な額をいうが，かかる補償は，対象となる私有財産の収用ないし供与と同時に履行されなければならない。
ウ．憲法第２９条の規定に照らせば，法律で一旦定められた財産権の内容を事後の法律で変更し，特段の補償を行わないものとしても，それが公共の福祉に適合するようにされたものである限り，これをもって違憲ということはできない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"221"},{year:"2011",num:"9",subject:"ken",q:`旭川学力テスト事件判決（最高裁判所昭和５１年５月２１日大法廷判決，刑集３０巻５号６１５頁）に関する次のアからウまでの各記述について，当該判決の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．国民各自は，一個の人間として，また一市民として，成長，発達し，自己の人格を完成，実現するために必要な学習する固有の権利を有し，特に，子どもは，そのための教育を自己に施すことを大人一般に対して要求する権利を有する。
イ．個人の基本的自由を認め，その人格の独立を国政上尊重すべきものとしている憲法の下においては，子どもが自由かつ独立の人格として成長することを妨げるような国家的介入は，許されない。
ウ．子どもの教育は，専ら子どもの利益のために，教育を与える者の責務として行われるべきものであるから，教育の内容及び方法については，その実施に当たる教師が，教育専門家としての立場から，決定し遂行すべきものである。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2011",num:"10",subject:"ken",q:`労働基本権に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．最高裁判所の判例の趣旨によれば，公務員の労働基本権の制限については，制度上整備された代償措置が講じられていることがその合憲性の根拠とされているから，人事院勧告実施の凍結に抗議して行われた争議行為は適法である。
イ．外国人の享有する人権の範囲について，その人権の性質に応じて個別的に判断されるとする考えによれば，参政権や社会権などはその範囲外であり，したがって，外国人には労働基本権の適用がない。
ウ．最高裁判所の判例の趣旨によれば，労働組合には組合員に対する統制権が認められるが，公職選挙において，組合がその統一候補以外の組合員の立候補に対し，統制違反を理由に組合員としての権利を停止する処分をすることは許されない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2011",num:"11",subject:"ken",q:`国家賠償請求権に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．国又は公共団体の行為が，いわゆる非権力的な管理作用に属する場合は，大日本帝国憲法下でも判例上民法第７０９条以下の規定による不法行為責任がある程度まで認められていた。それゆえ，日本国憲法第１７条の意義は，権力作用に属する不法行為との関係で国家無答責の原則を否定し，国家の賠償責任を明記した点にあるということができる。
イ．日本国憲法第１７条は，国又は公共団体に対し損害賠償を求める権利について，「法律の定めるところにより」として，その法律による具体化を予定している。これは公務員のどのような行為によりいかなる要件で賠償責任を負うかを全面的に立法府の裁量判断に委ねる趣旨であるから，このような法律の定めが同条に反することはないと解される。
ウ．最高裁判所は，かつて，例え立法の内容が憲法に違反するものであっても国会議員の立法行為は国家賠償法第１条第１項の適用上当然に違法の評価を受けるものではないとしていた。しかし，最高裁判所は，その後判例を変更し，国会で議決された法律が違憲であれば国家賠償法上も違法の評価を受けることになるという立場を採るに至った。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"122"},{year:"2011",num:"12",subject:"ken",q:`憲法第３１条に関する次のアからウまでの各記述について，ａの見解からｂの見解が導き出せる場合には１を，導き出せない場合には２を選びなさい。
ア．ａ．憲法第３１条は，文字どおり，刑罰を科する場合には，法律で定める手続によらなければならないという要求のみを規定したものである。
ｂ．条例は地方公共団体が制定する自主立法であるから，刑罰を科する場合の手続を条例で定めることも許される。
イ．ａ．憲法第３１条は，刑罰を科する場合の手続が法律で定められなければならないということと，手続が適正なものでなければならないということを規定したものである。
ｂ．憲法第３１条は，罪刑法定主義を定めた規定ではなく，その根拠は憲法の別の条文に求めなければならない。
ウ．ａ．憲法第３１条は，刑罰を科する場合の手続の法定とその適正のみならず，実体の法定とその適正をも要求する規定である。
ｂ．処罰の必要性及び合理性，罪刑の均衡を要求する根拠は，憲法第３１条に求められる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"211"},{year:"2011",num:"13",subject:"ken",q:`憲法の概念に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．国家統治の基本を定めた法としての憲法を「固有の意味の憲法」と呼び，そのうち国家権力を制限して国民の権利を保障するという思想に基づくものを特に「立憲的意味の憲法」と呼んで，その余の「固有の意味の憲法」と区別することがある。この区別は，憲法の内容に着目した区別であり，憲法の存在形式とは無関係である。
イ．憲法という名前で呼ばれる成文の法典（憲法典）を「形式的意味の憲法」と呼び，「実質的意味の憲法」と区別することがある。この区別の意義は，本来憲法典に書かれるべきことが書かれないことがあり，逆に，本来憲法の内容となるべきでないものが憲法典の中に書かれることがあるという点に注意を促すことにあるといえる。
ウ．憲法改正に法律の改正より困難な手続が要求される憲法を「硬性憲法」，法律の改正と同じ手続でよいものを「軟性憲法」として区別することがある。憲法の最高法規性は，憲法が「硬性憲法」として，国法秩序において最も強い形式的効力を持つ点に求められるのであって，憲法がいかなる基本価値を体現しているかということとは関係がない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2011",num:"14",subject:"ken",q:`主権に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法の国民主権の原理における国民とは，最高裁判所の判例が示すところによれば，主権が日本国民に存するとする憲法前文及び第１条の規定に照らして，日本国の国籍を有する者を意味するものとされる。
イ．主権という言葉は多義的であり，国民主権，国家主権のほかに，国家権力（統治権）そのものを意味する場合もあって，憲法第９条第１項及び第４１条で使われている「国権」とは，この国家権力そのものを表すものとして使われている。
ウ．国民主権原理を宣明する憲法では，国民の代表者を選定する選挙制度は民主主義の根幹を成すものである。憲法改正における国民投票は国民主権の具体化といえるものであるから，その投票権者の要件を公職選挙法が定める選挙権者の要件と異なって定める法律は，違憲である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"112"},{year:"2011",num:"15",subject:"ken",q:`比例代表制度の下における国会議員の政党間の移動に関する次のアからウまでの各記述について，ｂの見解が a の見解の根拠となっている場合には１を，そうでない場合には２を選びなさい。
ア．ａ．比例代表制によって選出された国会議員が当該政党の所属でなくなった場合，当該議員は議席を喪失する。
ｂ．実際には有権者は選挙において政党を重視しており，全国民の代表であることも公的役割を担う政党への所属を前提としている。
イ．ａ．比例代表制によって選出された国会議員が当該政党の所属でなくなった場合でも，当該議員は議席を喪失しない。
ｂ．比例代表制はあくまでも議員の選出方法に過ぎず，一旦選出されれば個々の議員は全国民の代表である。
ウ．ａ．比例代表制によって選出された国会議員が自発的に当該政党の所属でなくなった場合に限り，当該議員は議席を喪失する。
ｂ．比例代表選出の国会議員であっても，政党から自由に意思を形成できる全国民の代表である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"112"},{year:"2011",num:"16",subject:"ken",q:`内閣及び内閣総理大臣に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法第６６条第３項は，内閣は行政権の行使について国会に対し連帯して責任を負う旨規定しているが，個々の国務大臣がその所管事項について単独の責任を負うことが否定されているわけではない。
イ．憲法第７０条は，内閣総理大臣が欠けたときは内閣は総辞職をしなければならないと規定しているところ，「内閣総理大臣が欠けたとき」とは，死亡のほか除名により国会議員の地位を失った場合に限られる。
ウ．憲法第７３条第１号が内閣の法律執行義務を規定しているので，内閣は，ある法律が憲法に違反すると判断した場合でも，その法律を執行しなければならず，その法律を廃止する案を国会に提出することもできない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"4"},{year:"2011",num:"17",subject:"ken",q:`司法に関する次のアからエまでの各記述について，正しいもの二つの組合せを，後記の１から６までの中から選びなさい。
ア．最高裁判所裁判官の国民審査は，最高裁判所の判例の趣旨に照らせば，内閣の任命を国民が確認する意味を含むので，白票は罷免を可とするものとして扱われてはならない。
イ．日本国憲法は特別裁判所の設置を明文で禁止しているが，弾劾裁判所は，憲法上の例外である。
ウ．現行法を改正して最高裁判所を頂点とした二審制となる審級制度を導入することは，違憲である。
エ．憲法上の直接的な明文の規定はないが，司法権の独立の観点から，最高裁判所及び下級裁判所が司法行政権を担っていると解されている。`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．イとウ",c5:"５．イとエ",c6:"６．ウとエ",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2011",num:"18",subject:"ken",q:`違憲審査制に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法第８１条は，当事者間の具体的な権利義務ないし法律関係の存否に関する争訟事件を解決するのに必要な限度で，裁判所に違憲審査権を付与した規定である。したがって，裁判所にはいわゆる客観訴訟において違憲審査を行う権限はない。
イ．憲法は国の最高法規であってこれに反する法律命令等はその効力を有さず，裁判官は憲法及び法律に拘束され，憲法を尊重擁護する義務を負う。したがって，最高裁判所に限らず下級裁判所の裁判官も違憲審査の権限を有する。
ウ．憲法第８１条が「一切の法律，命令，規則又は処分」という場合の「処分」とは，統治機関の行為の意味である。したがって，これには行政機関の行政処分のみならず，裁判所の判決も含まれる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"5"},{year:"2011",num:"19",subject:"ken",q:`旭川市国民健康保険条例事件判決（最高裁判所平成１８年３月１日大法廷判決，民集６０巻２号５８７頁）に関する次のアからウまでの各記述について，当該判決の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．租税は，国民に対して直接負担を求めるものであるから，課税をするに当たっては，必ず国民の同意を得なければならない。したがって，租税を創設し，改廃する場合だけでなく，課税要件と賦課及び徴収の手続についても，全て法律に基づいて定められる必要がある。
イ．憲法第８４条は，直接的には，租税について法律による規律の在り方を定めるものであるが，国，地方公共団体等が賦課徴収する租税以外の公課であっても，その性質に応じて，法律又は法律の範囲内で制定された条例によって適正な規律がなされるべきである。
ウ．憲法第８４条の定める「租税」とは，国又は地方公共団体が，その課税権に基づいて，その使用する経費に充当するために，強制的に徴収する金銭給付のことをいい，市町村が行う国民健康保険の保険料の徴収には憲法第８４条の趣旨は及ばない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"212"},{year:"2011",num:"20",subject:"ken",q:`条例に関する次のアからウまでの各記述について，ａの見解からｂの見解が導き出せる場合には１を，導き出せない場合には２を選びなさい。
ア．ａ．地方公共団体の制定する条例は，憲法が定める「地方自治の本旨」に基づき，憲法により制定する権能を定められた自治立法である。
ｂ．条例により，住民の基本的人権に制限を課すことも可能であるが，憲法第１４条に照らし，このような制限が地域による差別を生ずることは憲法上許されない。
イ．ａ．地方自治法は，政策に関する住民投票制度を規定していないが，憲法の定める「地方自治の本旨」からして，地方公共団体が住民投票を行うことは認められる。
ｂ．条例で住民投票制度を設け，「首長は，事務の執行に当たり，その結果を尊重するものとする」と定めた場合，首長には，住民投票の結果に従うべき法的義務がある。
ウ．ａ．条例が法律に違反するかどうかは，それぞれの趣旨，目的，内容及び効果を比較し，両者の内容に矛盾抵触するところがあるかどうかによって決するべきである。
ｂ．地方公共団体が，法律と同一目的で同一の汚染物質について，条例でより厳しい排出基準を定めたとしても，その条例が直ちに法律に違反するとは言えない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"221"},{year:"2011",num:"21",subject:"gyo",q:`次の文章は，Ａ省の国家公務員甲乙２名の会話である。アからウまでの下線部の各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
甲 「課長から，次期通常国会に提出する交通基本法の法案作成に取り掛かるよう指示された件で，少し相談しましょう。今回の作業では，基本法が一般の法律に比べてどのような特色があるのか，まず，この点から調べないといけませんね。」
乙 「例えば，環境基本法では，環境の保全に関する基本的施策として環境基本計画の策定などが定められています。」
甲 「従来の立法例から判断すると，基本法を定めるのであれば，基本的施策としての基本計画の策定については，その大綱は，法律で定めておく事項であると理解していいですね。」
乙 「（ア)<u>法律の留保原則の中でも，侵害留保の考え方によれば，国の将来の基本的な政策について，その在り方を規定するような事項は，国会の議決によるべきであって，行政に委ねることはできないことになっています。</u>」
甲 「地方自治が重視される時代だから，立法の準備に当たっては，法律が地方公共団体に対して与える影響についても，あらかじめ考えておく必要がありそうですね。」
乙 「最近では，公共交通の利用が困難な市民への対策を内容とした生活交通条例を制定した市も存在するようです。こうした市の条例とこれから準備する法律が抵触した場合，どうなるのでしょう。」
甲 「（イ)<u>法律による行政の原理の内容として，法律の優位原則によれば，法律の定めに対する違反が存在する場合には，法律の効力が条例に優越することになっています。法律に抵触する限りで，市の条例は，無効になります。</u>」
乙 「重要な法律案なので，準備に当たっては，関係各方面の意見を聴かないといけない。昔なら，業界アンケートと根回しで足りたのだろうけれど，今回は対話型行政を心掛けてみましょう。命令等を定めようとする場合に行政手続法で求められている意見公募手続にならって意見を集めようと思いますが，こうした手続が違法になることはないですね。」
甲 「（ウ)<u>行政手続法は，法律案について，意見公募手続と同じ内容の手続で広く一般の意見を求めることまで排除する趣旨を含まないでしょう。</u>」`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2011",num:"22",subject:"gyo",q:`行政行為に関する次のアからエまでの各記述について，最高裁判所の判例の趣旨に照らし，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．行政処分は，たとえ違法であっても，適法に取り消されない限りその効力を有する。
イ．処分庁は，成立時には瑕疵がなかったが後発的な事情の変化により存続させることが妥当でなくなった行政行為について，法令上明文の規定がない限り，その効力を将来にわたり消滅させることができない。
ウ．特許の無効審決が確定する以前には，特許権侵害訴訟を審理する裁判所は，特許に無効理由が存在することが明らかであるか否かについて判断することができない。
エ．審査請求に対する裁決は，特別の規定がない限り，裁決庁自らにおいて取り消すことはできない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2221"},{year:"2011",num:"23",subject:"gyo",q:`行政手続法に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．行政手続法は，国民の権利利益を保護することや行政運営における公正を確保することを目的としたものであって，行政上の意思決定における透明性の向上を図ることまでを目的としていない。
イ．大臣は，省令を定めようとする場合に意見公募手続の実施を義務付けられるほか，省令を定めた後においても，社会経済情勢の変化等を勘案し，必要に応じて，省令の内容を検討し，その適正を確保するよう努めなければならない。
ウ．市町村長を経由して，都道府県知事に対して申請を提出するよう法律が定めている場合，知事が定めるよう努めなければならない標準処理期間には，申請が知事に到達してから申請の処理に通常要する標準的な期間のほか，市町村長に到達してから知事に到達するまでの標準的な期間も含まれる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"5"},{year:"2011",num:"24",subject:"gyo",q:`行政手続法に基づいて国の行政庁が定める審査基準及び処分基準に関し，次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。ただし，適用除外については考慮することを要しない。
ア．審査基準は申請に対する処分の審査手続に関する基準，処分基準は申請に対する処分の内容に関する基準であり，行政庁は，そのいずれをもあらかじめ定めておかなければならない。
イ．行政庁は，審査基準及び処分基準を定めるに当たり，行政手続法に基づく意見公募手続を経なければならない。
ウ．行政庁は，処分基準に従わない行政処分を行うことができないから，裁判所が処分基準に従って行われた行政処分を違法として取り消すためには，処分基準が無効であるか，又は違法として取り消される必要がある。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"6"},{year:"2011",num:"25",subject:"gyo",q:`次の文章は，公立学校施設の目的外使用の許可に関する最高裁判所の判決（最高裁判所平成１８年２月７日第三小法廷判決，民集６０巻２号４０１頁）の判示の一部である。後記アからエまでの各記述について，同判決がこの文章を踏まえてその後に判示している内容として，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。

「地方自治法２３８条の４第４項，学校教育法８５条の上記文言に加えて，学校施設は，一般公衆の共同使用に供することを主たる目的とする道路や公民館等の施設とは異なり，本来学校教育の目的に使用すべきものとして設置され，それ以外の目的に使用することを基本的に制限されている（学校施設令１条，３条）ことからすれば，学校施設の目的外使用を許可するか否かは，原則として，管理者の裁量にゆだねられているものと解するのが相当である。」
（参照条文）地方自治法（平成１８年法律第５３号による改正前のもの）
第２３８条の４ １～３ （略）
４ 行政財産は，その用途又は目的を妨げない限度においてその使用を許可することができる。
５，６ （略）
（参照条文）学校教育法（平成１９年法律第９６号による改正前のもの）
第８５条 学校教育上支障のない限り，（中略）学校の施設を社会教育その他公共のために，利用させることができる。
（参照条文）学校施設の確保に関する政令（上記判示中に「学校施設令」として引かれているもの）
第３条 学校施設は，学校が学校教育の目的に使用する場合を除く外，使用してはならない。但し，左の各号の一に該当する場合は，この限りでない。
一 法律又は法律に基く命令の規定に基いて使用する場合
二 管理者又は学校の長の同意を得て使用する場合
２ 管理者又は学校の長は，前項第二号の同意を与えるには，他の法令の規定に従わなければならない。

ア．管理者は，学校教育上支障があれば使用を許可することができない。
イ．管理者は，学校教育上の支障がないからといって当然に許可しなくてはならないものではなく，行政財産である学校施設の目的及び用途と目的外使用の目的，態様等との関係に配慮した合理的な裁量判断により使用許可をしないこともできる。
ウ．管理者の裁量権の行使が逸脱濫用に当たるか否かの司法審査においては，その判断が裁量権の行使としてされたことを前提とした上で，その判断要素の選択や判断過程に合理性を欠くところがないかを検討し，その判断が，重要な事実の基礎を欠くか，又は社会通念に照らし著しく妥当性を欠くものと認められる場合に限って，裁量権の逸脱又は濫用として違法となるとすべきものである。
エ．従前，同一目的での使用許可申請を物理的支障のない限り許可してきたという運用があったとしても，そのような従前の許可の運用が裁量権濫用に当たるか否かの判断において考慮すべき要素となるということはできない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1112"},{year:"2011",num:"26",subject:"gyo",q:`次の文章は，Ａ町と産業廃棄物処分業者（以下「処分業者」という。）であるＹとが締結した公害防止協定（以下「本件協定」という。）に定められた，Ｙの産業廃棄物処理施設（以下「処理施設」という。）の使用期限を平成１５年１２月３１日とする旨の条項（以下「本件期限条項」という。）に基づき，Ａ町の地位を合併により承継したＸ市がＹに対し，Ｙの処理施設の使用の差止めを求める訴えについて判断を示した最高裁判所平成２１年７月１０日第二小法廷判決の判示の一部である。後記アからエまでの各記述について，それぞれ同判決の考え方に適合する場合には１を，適合しない場合には２を選びなさい。

「規定（注１）は，知事が，処分業者としての適格性や処理施設の要件適合性を判断し，産業廃棄物の処分事業が廃棄物処理法の目的に沿うものとなるように適切に規制できるようにするために設けられたものであり，上記の知事の許可（注２）が，処分業者に対し，許可が効力を有する限り事業や処理施設の使用を継続すべき義務を課すものではないことは明らかである。そして，同法には，処分業者にそのような義務を課す条文は存せず，かえって，処分業者による事業の全部又は一部の廃止，処理施設の廃止については，知事に対する届出で足りる旨規定されているのであるから（中略），処分業者が，公害防止協定において，協定の相手方に対し，その事業や処理施設を将来廃止する旨を約束することは，処分業者自身の自由な判断で行えることであり，その結果，許可が効力を有する期間内に事業や処理施設が廃止されることがあったとしても，同法に何ら抵触するものではない。したがって，（中略）本件期限条項が（中略）廃棄物処理法の趣旨に反するということもできない。」
（注１）廃棄物の処理及び清掃に関する法律（以下「廃棄物処理法」という。）の諸規定を指す。
（注２）廃棄物処理法が定める産業廃棄物処理業の許可及び処理施設の設置許可を指す。

ア．市町村は，処分業者との間で公害防止協定を締結し，法律又は条例に根拠がなくても，協定の定めにより処分業者に対し，公害防止のための義務を課すことができる。
イ．市町村ではなく県が処分業者との間で公害防止協定を締結し，処分業者に対し，県知事が廃棄物処理法に基づいて行った許可が効力を有する期間内に，事業や処理施設を廃止する義務を課すことも，同法に抵触しない。
ウ．Ｙが本件協定の本件期限条項に違反して処理施設の使用を継続した場合，県知事は廃棄物処理法に基づく処理施設の設置許可を撤回することができる。
エ．市町村が処分業者に対し，公害防止協定に基づく義務の履行を求める訴えは，法律上の争訟に当たる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1121"},{year:"2011",num:"27",subject:"gyo",q:`行政代執行法による代執行に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．火薬類取締法第２２条に基づく火薬類の廃棄の義務は，法律に基づいて行政庁が命じるものではなく，法律から直接生じるものであるが，行政庁は，これを代執行の対象にすることができる。（参照条文）火薬類取締法第２２条 製造業者若しくは販売業者が，（中略）許可の取消その他の事由により営業を廃止した場合，火薬類を消費する目的で（中略）火薬類の譲受若しくは輸入の許可を受けた者が，その火薬類を消費し，若しくは消費することを要しなくなつた場合又は（中略）火薬類の消費の許可を受けた者がその許可を取り消された場合において，なお火薬類の残量があるときは，遅滞なくその火薬類を譲り渡し，又は廃棄しなければならない。（以下略）
イ．都市公園内に設置された工作物につき，都市公園法第２７条第１項による除却命令に続いて，行政代執行法第３条第１項による戒告を受けたＸが，当該戒告の取消訴訟を提起した場合において，Ｘは，除却命令が無効であるとしても，これを，戒告の取消しを求めるために主張することはできない。（参照条文）都市公園法第２７条 公園管理者は，次の各号のいずれかに該当する者に対して，（中略）都市公園に存する工作物その他の物件若しくは施設（中略）の改築，移転若しくは除却（中略）を命ずることができる。（以下略）２～１０ （略）
ウ．代執行の終了後においては，代執行に要した費用を義務者から徴収できなくなるおそれがあるときは，行政庁は，代執行をする前に，国税滞納処分の例により，費用を徴収することができる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"4"},{year:"2011",num:"28",subject:"gyo",q:`次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．行政庁による氏名の公表は，個人の名誉，信用等を毀損するおそれがあるから，行政庁は，法律の根拠がなければ公表することはできない。
イ．法律による行政の原理によれば，議会制定法によって義務の履行強制が可能であるから，現行法上，直接強制について，法律のほか条例を根拠規範とすることも許される。
ウ．法律違反に対する行政上の秩序罰としての過料は，違反者に制裁として金銭的負担を科すものであり，刑罰ではないので刑法総則の適用はない。
エ．執行罰としての過料は，刑罰の一種であるから，二重処罰の禁止（憲法第３９条）の規定に照らし，義務が履行されるまで過料を繰り返し科すことは許されない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2212"},{year:"2011",num:"29",subject:"gyo",q:`運転免許証（以下「免許証」という。）の有効期間の更新に当たり，一般運転者（優良運転者又は違反運転者等以外の者）として扱われ，優良運転者である旨の記載のない免許証を交付されて更新処分を受けた者が，当該更新処分中の同人を一般運転者とする部分の取消し等を求めた事案において，訴えの利益の有無について判断を示した最高裁判所平成２１年２月２７日第二小法廷判決（民集６３巻２号２９９頁）の次の判示を読み，後記アからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。

「確かに，免許証の更新処分において交付される免許証が優良運転者である旨の記載のある免許証であるかそれのないものであるかによって，当該免許証の有効期間等が左右されるものではない。また，上記記載のある免許証を交付して更新処分を行うことは，免許証の更新の申請の内容を成す事項ではない。しかしながら，上記のとおり，客観的に優良運転者の要件を満たす者であれば優良運転者である旨の記載のある免許証を交付して行う更新処分を受ける法律上の地位を有することが肯定される以上，一般運転者として扱われ上記記載のない免許証を交付されて免許証の更新処分を受けた者は，上記の法律上の地位を否定されたことを理由として，これを回復するため，同更新処分の取消しを求める訴えの利益を有するというべきものである。」
（注）道路交通法第１０１条の２の２第１項及び第１０８条の２第１項第１１号並びに道路交通法施行規則（平成１８年内閣府令第４号による改正前のもの）第３８条第１２項によれば，免許証の更新の申請等に関する優良運転者の特例として，①免許証の更新を受けようとする者のうち当該更新を受ける日において優良運転者に該当するものは，更新申請書の提出を，住所地を管轄する公安委員会以外の公安委員会を経由して行うことができ，また，②更新時講習は，優良運転者，一般運転者又は違反運転者等の区分に応じて行うものとされているところ，優良運転者に対する講習は，「道路交通の現状及び交通事故の実態」等の講習事項につき教材を用いた講習方法により３０分行うこととされているのに対し，一般運転者に対する講習は，「自動車等の運転について必要な適性」の講習事項が加わり，筆記検査に基づく指導を含む講習方法によって１時間行うこととされている。

ア．本判決は，優良運転者による更新処分の申請の内容について，優良運転者である旨の記載のある免許証を交付して更新処分を行うことを求めるものであると解している。
イ．本判決は，更新処分において一般運転者として扱われ優良運転者である旨の記載のない免許証を交付されることが，優良運転者である旨の記載のある免許証を交付して行う更新処分を受ける法律上の地位を損なう不利益に当たり得ることを認めたものである。
ウ．本判決によれば，優良運転者に区分されるべき者に対して優良運転者である旨の記載のない免許証を交付して更新処分を行うことは，その者の名誉，信用等を損なうものであるから，訴えの利益を根拠付ける不利益に当たることになる。
エ．本判決によっても，申請の段階で一般運転者に区分されたことを知った上で優良運転者である旨の記載のない免許証を交付されて更新処分を受けた者は，同更新処分の取消しを求めることはできず，当該免許証に優良運転者である旨の記載をすることの義務付けを求める訴えを提起すべきことになる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2122"},{year:"2011",num:"30",subject:"gyo",q:`訴えの利益に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らし，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．町営土地改良事業の施行認可処分の取消しを求める訴訟の係属中に，事業計画に係る工事及び換地処分がすべて完了したため，社会通念上事業施行以前の原状に回復することが不可能になったとしても，認可処分の取消しを求める訴えの利益は消滅しない。
イ．退去強制令書の送還部分が執行され，被処分者が強制送還されてしまえば，処分はその目的を達成し，被処分者の退去義務は消滅するが，退去を強制された者の本邦への上陸拒否期間が経過するまでは，退去強制令書発付処分の取消しを求める訴えの利益は消滅しない。
ウ．都市計画法第２９条に基づく開発許可の取消しを求める訴訟の係属中に，許可を受けた開発行為に関する工事が完了し，検査済証が交付されたとしても，当該開発許可が判決で取り消された場合には，違法な開発行為であることが公権的に確定され，その拘束力により都道府県知事等は同法第８１条に基づく違反是正命令を発すべき義務を負うことになるから，開発許可の取消しを求める訴えの利益は消滅しない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2011",num:"31",subject:"gyo",q:`処分の取消しの訴えの出訴期間等に関する次のアからウまでの各記述について，行政事件訴訟法又は最高裁判所の判例に照らし，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．処分に係る通知の書面が当該処分の相手方の住所に郵便により配達された場合には，当該処分の取消しの訴えの出訴期間に係る「処分（中略）があつたことを知つた日」（行政事件訴訟法第１４条第１項）については，反証のない限り，当該書面の配達された日がこれに当たるとされる。
イ．処分につき審査請求をすることができる場合において，適法な審査請求があったときは，処分の取消しの訴えは，その審査請求をした者については，これに対する裁決があったことを知った日から６か月を経過するまでは，処分があったことを知った日から６か月を経過した後であっても，適法に提起することができる。
ウ．法律に当該処分についての審査請求に対する裁決を経た後でなければ処分の取消しの訴えを提起することができない旨の定めがある場合には，審査請求があった日から３か月を経過しても裁決がないときに限り，裁決を経ないで，処分の取消しの訴えを適法に提起することができる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2011",num:"32",subject:"gyo",q:`次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．最高裁判所の判例によれば，所得税の納税申告（通常のいわゆる白色申告）に対する更正処分の取消訴訟において，被告は，当該更正処分の正当性を維持する理由として，更正の段階において考慮されなかった事実を新たに主張することも許される。
イ．飲酒運転を理由とする公務員の懲戒処分の取消訴訟において，当該公務員が処分時以前に公金横領をしていたことが判明したとして，被告がこれを懲戒事由として主張することは許されない。
ウ．最高裁判所の判例によれば，情報公開条例において非開示決定を行うときには，非開示の理由を付記しなければならないと定められている場合に，理由の付記が不十分でありその要件を欠くと判断される以上，後に実施機関により理由の説明がされたとしても，その瑕疵が治癒されたものということはできない。
エ．最高裁判所の判例によれば，情報公開条例において非開示決定を行うときには，非開示の理由を付記しなければならないと定められている場合には，非開示決定取消訴訟において，被告が非開示決定の通知書に付記された理由以外の理由を主張することは許されない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1112"},{year:"2011",num:"33",subject:"gyo",q:`普通地方公共団体であるＡ市においては，公金の支出を内容とする特定の処分をする権限が，市長から総務部長に委任されていた。このような場合において，Ａ市の住民Ｘが地方自治法（以下「法」という。）第２４２条の２第１項の規定に基づいて提起する住民訴訟における被告とすべき者（他の訴訟要件については問題はないものとする。）に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．問題とされる処分がされることが相当の確実さをもって予測される事例において，Ｘは，総務部長Ｂを被告として，法第２４２条の２第１項第１号の規定に基づき処分の差止めを求める住民訴訟を適法に提起することができる。
イ．問題とされる処分が総務部長Ｂにより既にされた事例において，Ｘは，Ａ市を被告として，法第２４２条の２第１項第２号の規定に基づき処分の取消しを求める住民訴訟を適法に提起することができる。
ウ．問題とされる処分が総務部長Ｂにより既にされた事例において，Ｘは，市長Ｃを被告として，法第２４２条の２第１項第４号本文の規定に基づきＢに損害賠償の請求をすることを求める住民訴訟を適法に提起することができる。
エ．問題とされる処分が総務部長Ｂにより既にされた事例において，Ｘは，市長ＣのＢに対する指揮監督上の過失を理由に法第２４２条の２第１項第４号本文の規定に基づきＣに損害賠償の請求をすることを求める住民訴訟を提起するときは，市長以外の職員を被告としなければならない。
（参照条文）地方自治法第２４２条の２ 
普通地方公共団体の住民は，前条第１項の規定による請求をした場合において，同条第４項の規定による監査委員の監査の結果（中略）に不服があるとき（中略）は，裁判所に対し，同条第１項の請求に係る違法な行為又は怠る事実につき，訴えをもつて次に掲げる請求をすることができる。
一 当該執行機関又は職員に対する当該行為の全部又は一部の差止めの請求
二 行政処分たる当該行為の取消し又は無効確認の請求
三 （略）
四 当該職員又は当該行為若しくは怠る事実に係る相手方に損害賠償又は不当利得返還の請求をすることを当該普通地方公共団体の執行機関又は職員に対して求める請求
（以下略）
２～１０ （略）
１１ 第２項から前項までに定めるもののほか，第１項の規定による訴訟については，行政事件訴訟法第４３条の規定の適用があるものとする。
１２ （略）
（参照条文）行政事件訴訟法
第４３条 民衆訴訟（中略）で，処分又は裁決の取消しを求めるものについては，第９条及び第１０条第１項の規定を除き，取消訴訟に関する規定を準用する。
２，３ （略）`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1112"},{year:"2011",num:"34",subject:"gyo",q:`Ａは，自宅の建築を計画し，Ｙ市の建築主事から建築確認（以下「本件建築確認」という。）を受けた。この建築計画地の隣地に自宅を所有して居住しているＸは，本件建築確認に係る取消訴訟の出訴期間経過後に，本件建築確認に係る建築計画は，建築基準関係規定に適合しておらず同計画に係る建築物は倒壊の危険がある旨主張して，本件建築確認につき無効確認訴訟（以下「本件無効確認訴訟」という。）を提起した。次のアからウまでの各記述について，法令又は最高裁判所の判例に照らし，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．無効確認訴訟と国家賠償請求訴訟とは同種の訴訟手続ではないものの，Ｘは，本件無効確認訴訟の提起後に，本件建築確認が違法であることを理由として，それにより生じた損害について，Ｙ市に対する国家賠償法第１条第１項に基づく損害賠償請求に係る訴えを本件無効確認訴訟に併合して適法に提起することができる。
イ．取消判決の第三者効を定めた行政事件訴訟法第３２条第１項は，無効確認訴訟にも準用されるから，本件無効確認訴訟につき認容判決がされた場合，Ｘは，Ａに対して，本件建築確認の効力が無効である旨の主張をすることができる。
ウ．無効な処分の効力につき執行停止を観念することはできないから，Ｘは，本件無効確認訴訟を提起した上で，本件建築確認の処分の効力の停止を申し立てることはできない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"4"},{year:"2011",num:"35",subject:"gyo",q:`仮の救済等に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．執行停止の申立てについては，裁判所は，一定の場合には，相手方の意見を聴かないで，執行停止を命ずる決定をすることができる。
イ．仮の義務付けの申立てについては，裁判所は，一定の場合には，義務付けの訴えの提起がなくても，仮の義務付けを命ずる決定をすることができる。
ウ．仮の差止めの申立てがされた場合，行政庁は，仮の差止めを命ずる決定がされるまでは，対象とされる処分をすることができる。
エ．行政事件訴訟法には，当事者訴訟について，同法第４４条の規定の適用を排除する定めはない。（参照条文）行政事件訴訟法第４４条 行政庁の処分その他公権力の行使に当たる行為については，民事保全法（平成元年法律第９１号）に規定する仮処分をすることができない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2211"},{year:"2011",num:"36",subject:"gyo",q:`次のアからエまでの各記述について，法令又は最高裁判所の判例に照らし，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．検察官が公訴を提起したが裁判で無罪が確定した場合，当該公訴提起は国家賠償法上違法の評価を受ける。
イ．裁判官がした争訟の裁判については，上訴等の訴訟法上の救済方法が存するから，その裁判内容に上訴等の訴訟法上の救済方法によって是正されるべき瑕疵が存在したとしても，国家賠償法上違法の評価を受けることはない。
ウ．公害に係る健康被害の救済に関する特別措置法又は公害健康被害の補償等に関する法律に基づき，水俣病と認定すべき旨の申請を知事に行ったものの，何らの応答処分を相当期間内に受けなかったという場合，申請者としては，不作為の違法確認の訴えを適法に提起することができる。
エ．上記ウの場合において，認定要件を満たす者が被る損害は，認定されることにより解消されることになるから，申請処理の遅延による精神的苦痛について国家賠償法に基づく慰謝料請求は認められない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2212"},{year:"2011",num:"37",subject:"gyo",q:`次の【甲群】に掲げるアからウまでのＸの各損失について，国又は地方公共団体が損失補償は不要であると主張する場合に，それぞれの理由として最も適切なものを，【乙群】に掲げるＡからＦまでの中から選んだ場合の組合せを，後記１から４までの中から選びなさい。
【甲 群】
ア．市が卸売市場を開設する区域内の土地について，地方自治法第２３８条の４第７項によりＸが期間の定めのない使用許可を受けて店舗を営業していたところ，市長が卸売市場を拡幅する計画に伴い使用許可を撤回したために，Ｘが当該店舗で営業できなくなることによる損失
（参照条文）地方自治法第２３８条の４ 
１～６ （略）
７ 行政財産は，その用途又は目的を妨げない限度においてその使用を許可することができる。
８，９ （略）
イ．Ｘが埋設した石油の導管が，近隣に新たに建築物が建築されたために，石油パイプライン事業法に基づく石油パイプライン事業の事業用施設の技術上の基準を定める省令第１３条第１号に違反する状態となり，Ｘが導管の移設工事をしなければならなくなった場合の工事費用
（参照条文）石油パイプライン事業の事業用施設の技術上の基準を定める省令
第１３条 導管を地下に埋設する場合は，次の各号に掲げるところによらなければならない。
一 導管は，その外面から建築物，地下街，隧道その他の告示で定める工作物に対し告示で定める水平距離を有すること。
二～七 （略）
ウ．Ｘが自然公園法第２０条第３項第１号により建築物の新築許可申請をしたところ，県知事が公園地域の風致・景観を維持する上で重大な支障があるとの理由で不許可処分をしたために，Ｘが建築物を建築できないことによる損失
（参照条文）自然公園法
第２０条 環境大臣は国立公園について，都道府県知事は国定公園について，当該公園の風致を維持するため，公園計画に基づいて，その区域（海域を除く。）内に，特別地域を指定することができる。
２ （略）
３ 特別地域（特別保護地区を除く。以下この条において同じ。）内においては，次の各号に掲げる行為は，国立公園にあつては環境大臣の，国定公園にあつては都道府県知事の許可を受けなければ，してはならない。(中略)
一 工作物を新築し，改築し，又は増築すること。
二～十八 （略）
４～９ （略）
【乙 群】
Ａ．警察規制による損失であるから。
Ｂ．公用制限による損失であるから。
Ｃ．地域一帯において土地及び土地利用の現状を変更することの公共性が高いところ，こうした現状変更のための規制による損失であるから。
Ｄ．地域一帯において土地及び土地利用の現状を維持することの公共性が高いところ，こうした現状維持のための規制による損失であるから。Ｅ．土地利用の規制により，利益を受ける者が反面で被ることになる損失であるから。Ｆ．土地の利用権が，付与された当初から一定の公益上の理由により消滅すべきことが予定されていたところ，このように予定されていた権利の消滅による損失であるから。（ア，イ，ウの順とする）`,c1:"１．Ｆ - Ａ – Ｄ",c2:"２．Ｃ - Ｆ – Ｅ",c3:"３．Ｂ - Ｆ – Ａ",c4:"４．Ｃ - Ｅ – Ｄ",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2011",num:"38",subject:"gyo",q:`行政不服審査と行政事件訴訟とは種々の点で異同がある。処分の取消しを求める審査請求と取消訴訟を前提として，次のアからエまでの各記述について，Ａ：審査請求のみに当てはまるもの，Ｂ：取消訴訟のみに当てはまるもの，Ｃ：双方に当てはまるものに分けた場合，法令及び最高裁判所の判例に照らし，正しい組合せを，後記１から４までの中から選びなさい。
ア．処分を取り消すことができるのは処分が違法な場合に限られる。
イ．原則として，処分があったことを知った日の翌日から起算して６０日以内にしなければならないが，やむを得ない理由があるとして救済されることがある。
ウ．処分の取消しを求めるにつき法律上の利益を有する者のみが行えることとされている。
エ．他の不服申立てを前置しなければ適法に行えない場合がある。（ア，イ，ウ，エの順とする）`,c1:"１．Ｃ - Ａ - Ｂ – Ｂ",c2:"２．Ｂ - Ａ - Ｃ – Ｃ",c3:"３．Ｂ - Ｃ - Ｂ – Ｃ",c4:"４．Ｂ - Ａ - Ｂ – Ｃ",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2011",num:"39",subject:"gyo",q:`審議会に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．国家行政組織法第８条の定める合議制の機関は，行政の意思形成過程に学識経験者等の持つ専門知識等を取り入れることを趣旨としていることから，当該機関で審議する政策と利害関係を有する者又はその利益代表者をその構成員として任命することは，同条の趣旨に違反するほか，行政の中立性原則に反し許されない。（参照条文）国家行政組織法第８条 第３条の国の行政機関には，法律の定める所掌事務の範囲内で，法律又は政令の定めるところにより，重要事項に関する調査審議，不服審査その他学識経験を有する者等の合議により処理することが適当な事務をつかさどらせるための合議制の機関を置くことができる。
イ．国家行政組織法第８条は，国の重要な行政施策が法律又は政令に基づく審議会の下で，透明性を保障された手続において審議されるべきであるという趣旨に基づくことから，大臣が私的諮問機関を設置して，重要事項に関する調査審議を当該機関に諮問することは許されない。
ウ．審議会に関して，限られた範囲の委員からの情報収集にとどまるという批判がみられたことから，政策の企画立案等に関する情報を広く国民から直接に収集する手法として，行政手続法において意見公募手続が整備された。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2011",num:"40",subject:"gyo",q:`行政活動は，多様な主体を通じて行われている。次のアからウまでの各記述について，それぞれ①の記載を前提にして，②の記載が正しいものに○を，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．①国民生活及び社会経済の安定等の公共上の見地から確実に実施されることが必要な事務及び事業であって，国が自ら主体となって直接に実施する必要のないものには，民間の主体に委ねた場合には必ずしも実施されないおそれがあるものがある。②このようなものについては，法律の定めるところにより独立行政法人を設立し，その事務を効率的かつ効果的に行わせる場合がある。
イ．①国が本来果たすべき役割に係るものであって，国においてその適正な処理を特に確保する必要があるものについて，法律又はこれに基づく政令において第１号法定受託事務として定め，都道府県，市町村又は特別区に行わせることとする場合がある。②この場合，都道府県等は，国の行政機関として当該事務を行うことになる。
ウ．①指定確認検査機関が建築基準法に基づく建築確認業務を行う場合のように，法律の定めに基づいて私人（法人を含む。以下同じ。）に行政処分を行わせる場合もある。②この場合，行政主体が当該私人との間で委任契約を締結することになる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"4"},{year:"2011",num:"1",subject:"min",q:"詐欺又は強迫による意思表示に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．強迫が認められるためには，表意者が，畏怖を感じ，完全に意思の自由を失ったといえなければならない。",c2:"２．第三者によって強迫がされた場合において，意思表示の相手方がその事実を知らないときは，表意者は，その意思表示を取り消すことができない。",c3:"３．表意者が相手方による虚偽の説明を信じて意思表示をした場合において，相手方に詐欺の故意がないときは，表意者は，民事上の救済を受けることはない。",c4:"４．表意者が相手方の詐欺により意思表示をして契約が成立した場合，その契約によって生ずる相手方の債務が未履行であっても，表意者は，その意思表示を取り消さない限り，詐欺を理由として自らの債務の履行を拒絶することができない。",c5:"５．買主が売主を欺罔して土地の所有権を譲り受けた場合，売主が詐欺による意思表示の取消しをする前に，詐欺の事実を知らないでその土地について抵当権の設定を受けた者がいるときであっても，売主は，その意思表示を取り消すことができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"45"},{year:"2011",num:"2",subject:"min",q:`隔地者に対する意思表示に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．意思表示の効力は，相手方に到達した時に生ずるので，隔地者間の契約が成立するのは，承諾の意思表示が相手方に到達した時である。
イ．制限行為能力者の行為を追認するかどうかの催告に対し，法定代理人が定められた期間内に追認拒絶の通知を発し，期間経過後に到達した場合，追認したものとみなされる。
ウ．判例によれば，Ａに対する意思表示が記載された書面がＡの事務所兼自宅に発送され，その書面が配達された時にＡが買物に出掛けていてたまたま不在であっても，Ａと同居している内縁の妻が受領した場合，意思表示の効力は生ずる。
エ．契約の申込みに対し承諾の意思表示を発した後，到達前に承諾者が死亡した場合，相手方が承諾者死亡の事実を知っていれば契約は成立しない。
オ．承諾期間の定めのある契約の申込みであっても，申込みの到達前又は到達と同時であれば撤回することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2011",num:"3",subject:"min",q:`無権代理に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．本人が無権代理人に対して無権代理行為を追認した場合でも，相手方は，その事実を知らなければ取消権を行使することができる。
イ．無権代理行為の相手方は，本人に対して相当の期間を定めて，その期間内に追認するか否かを催告することができ，本人がその期間内に確答をしないときは，追認したものとみなされる。
ウ．無権代理行為の相手方は，表見代理の主張をしないで，無権代理人に対し履行又は損害賠償の請求をすることができるが，これに対し無権代理人は，表見代理の成立を主張してその責任を免れることができる。
エ．無権代理人が本人を代理して第三者の貸金債務につき本人名義で連帯保証契約を締結した後，本人が追認も追認拒絶もしないまま死亡し，無権代理人が他の者と共に本人を相続した場合，他の共同相続人全員の追認がなくても，無権代理人が本人から相続により承継した部分について，無権代理行為は有効となる。
オ．無権代理人が本人所有の土地に抵当権を設定したため，本人が抵当権設定登記の抹消登記請求訴訟を提起した後死亡し，無権代理人が本人を相続したとしても，無権代理行為は，有効とならない。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2011",num:"4",subject:"min",q:`代理人の権限に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．成年後見人は，成年被後見人の意思を尊重しなければならないが，成年被後見人の財産に関する法律行為を代理するに当たって，成年被後見人の意思に反した場合であっても，無権代理とはならない。
イ．父母が共同して親権を行う場合，父母の一方が，共同の名義で子に代わって法律行為をしたとしても，その行為が他の一方の意思に反していることをその行為の相手方が知っているときは，他の一方は，その行為の効力が生じないことを主張することができる。
ウ．委任による代理人が，やむを得ない事由があるため復代理人を選任した場合には，復代理人はあくまで代理人との法律関係しか有しないので，復代理人の行為が本人のための代理行為となることはない。
エ．判例によれば，親権者が子の財産を第三者に売却する行為を代理するに当たって，親権者がその子に損害を及ぼし，第三者の利益を図る目的を有していたときは，その子の利益に反する行為であるから，無権代理となる。
オ．委任による代理人は，未成年者でもよいが，未成年者のした代理行為は，その法定代理人が取り消すことができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2011",num:"5",subject:"min",q:"取消しに関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．未成年者がその法定代理人の同意を得ないで行った法律行為を取り消す場合において，行為の相手方が確定しているときは，その取消しは，相手方に対する意思表示によって行う。",c2:"２．契約により相手方以外の第三者に対してある給付をすることを約した者が，相手方の詐欺を理由にこれを取り消す場合において，既に第三者が受益の意思表示をしていたときは，その取消しは，その第三者に対する意思表示によって行う。",c3:"３．詐害行為の取消しは，債権者の請求に基づき，裁判所が行う。",c4:"４．婚姻適齢の規定に違反した婚姻の取消しは，各当事者，その親族又は検察官の請求に基づき，家庭裁判所が行う。",c5:"５．負担付遺贈を受けた者がその負担した義務を履行せず，相続人が相当の期間を定めてその履行を催告し，その期間内に履行がない場合には，その負担付遺贈に係る遺言の取消しは，受遺者に対する意思表示によって行う。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"25"},{year:"2011",num:"6",subject:"min",q:"時効の援用に関する次の１から５までの各記述のうち，判例の趣旨に照らし誤っているものを２個選びなさい。",c1:"１．被相続人の占有により取得時効が完成した場合において，その共同相続人の一人は，自己の相続分の限度においてのみ，取得時効を援用することができる。",c2:"２．抵当不動産の第三取得者は，当該抵当権の被担保債権について，その消滅時効を援用することができる。",c3:"３．詐害行為の受益者は，詐害行為取消権を行使する債権者の債権について，その消滅時効を援用することができない。",c4:"４．後順位抵当権者は，先順位抵当権の被担保債権について，その消滅時効を援用することができる。",c5:"５．金銭債権の債権者は，債務者が無資力のときは，他の債権者が当該債務者に対して有する債権について，その消滅時効を，債権者代位権に基づいて援用することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"34"},{year:"2011",num:"7",subject:"min",q:"不動産をめぐる登記に関する権利主張について，次の１から５までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．Ａは，Ｂから袋地（他人の土地に囲まれて公道に通じない土地）を購入したが，当該袋地についての所有権移転登記を経ないうちは，囲繞地（袋地を囲んでいる土地）を所有しているＣに対し，公道に至るため，その囲繞地の通行権を主張することができない。",c2:"２．Ａは，占有権原なく土地上に建物を建築して自己名義で所有権保存登記をした後，これをＢに売り渡したが，所有権移転登記がされる前に，土地所有者であるＣから建物収去土地明渡の請求を受けた。その場合において，Ａは，Ｂに所有権移転登記をしていない以上は，その請求を拒むことができない。",c3:"３．Ａが平穏かつ公然と所有の意思をもってＢ所有の不動産の占有を開始してから５年が経過した時点で，Ｂがその不動産をＣに譲渡してその旨の所有権移転登記がされた場合，Ａは，その後もその不動産について占有を続けて当初の占有の開始時から２２年が経過したときでも，所有権移転登記を有しているＣに対して，当該不動産について時効取得をしたことを主張することができない。",c4:"４．ＡがＢに不動産を譲渡したが，所有権移転登記をしないままに死亡して唯一の相続人であるＣが相続した場合において，Ｂは，Ｃに対し，所有権移転登記をしていない以上は，所有権を主張することができない。",c5:"５．Ａ所有の土地について，その妻Ｂ及び子Ｃが相続を原因として所有権移転登記をしていたが，遺産分割によりＢが単独で所有するとの遺産分割協議が成立した後，子Ｃが不動産登記簿上，自己名義の所有権移転登記があることを奇貨として，遺産分割前の法定相続分をＤに売却した場合において，遺産分割が相続時に遡って効力を生じるから，Ｂは，遺産分割によって取得した持分について登記なくしてＤに主張することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2011",num:"8",subject:"min",q:"Ａが所有する不動産について物権変動があった場合に関する次の１から５までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．Ａがその不動産についてＢのために抵当権を設定し，その後ＡがＣに同一不動産を譲渡した場合，Ｂは，その抵当権設定の登記がなければその抵当権の取得をＣに対抗することができない。",c2:"２．Ａがその不動産をＢに譲渡し，その後ＡがＣに同一不動産について地上権を設定した上でそれに基づいて引渡しをした場合において，Ｂへの所有権移転の登記もＣの地上権設定の登記もないときは，Ｂは，Ｃに対して所有権に基づいて当該不動産の引渡しを請求することができない。",c3:"３．Ａがその土地をＢに賃貸し，Ｂがその土地上に建物を建築して所有権保存登記をした後，ＡがＣに当該土地を譲渡した場合において，当該土地に関する所有権移転登記を受けたＣは，Ｂに対して当該土地の賃料の請求をすることができる。",c4:"４．Ａは，Ｂと通じて，Ａの不動産について有効な売買契約が存在しないにもかかわらず売買を原因とする所有権移転登記をＢに対して行い，その後，この事情について善意無過失であるＣに対してＢが同一不動産を譲渡したが，ＢＣ間の所有権移転登記はされていない。この場合において，さらにその後，ＡがＤに同一不動産を譲渡したときは，Ｃは，所有権の取得をＤに対抗することができる。",c5:"５．Ａがその不動産をＢに譲渡し，その後ＡがＣに同一不動産を譲渡し，さらにＣが同一不動産を転得者Ｄに譲渡し，ＡＣ間及びＣＤ間の所有権移転登記が行われた場合において，ＣがＢとの関係で背信的悪意者に当たるが，Ｄ自身がＢとの関係で背信的悪意者と評価されないときは，Ｄは，所有権の取得をＢに対抗することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2011",num:"9",subject:"min",q:"動産の即時取得に関する次の１から５までの各記述のうち，判例の趣旨に照らし誤っているものを２個選びなさい。",c1:"１．即時取得の規定は，取引の相手方を保護する制度であるが，道路運送車両法による登録を受けている自動車については，その登録が抹消されない限り即時取得の規定の適用はない。",c2:"２．即時取得の規定は，他人の動産を占有していた被相続人の財産を相続により承継する場合には，適用がない。",c3:"３．意思無能力者である取引の相手方からその所有する動産を譲り受けた者も，相手方が意思無能力者であることについて善意無過失であれば，即時取得により当該動産についての所有権を取得する。",c4:"４．売買の目的物である動産について占有改定の方法により当該動産の占有を取得した買主は，売主が無権利者であったとしても，売主が無権利者であることについて善意無過失であれば，即時取得により当該動産についての所有権を取得する。",c5:"５．動産が盗品であることについて善意無過失で競売により取得してこれを占有している者は，被害者から当該盗品の返還請求を受けたとしても，競売代金相当額の支払を被害者から受けるまでは盗品の引渡しを拒むことができ，当該盗品の使用利益相当額を被害者に支払う必要もない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"34"},{year:"2011",num:"10",subject:"min",q:"占有に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．所有者のない動産を所有の意思をもって占有することによって，その占有者は，その動産の所有権を取得する。",c2:"２．占有者が物の占有を奪われたときは，奪われる前のその占有が所有の意思をもってする場合であっても所有の意思をもってする場合でなくても，占有回収の訴えによりその物の返還を請求することができる。",c3:"３．占有者は，善意で，平穏に，かつ，公然と占有するものと推定されるが，所有の意思は推定されない。",c4:"４．権原の性質上占有者に所有の意思がないものとされる場合において，占有者が新たな権原により更に所有の意思をもって占有を始めたときは，その占有の性質は，所有の意思をもってする占有に変更される。",c5:"５．所有の意思をもって物を占有していた被相続人から相続人が相続により占有を承継した場合，被相続人が所有の意思をもって占有していたことをその相続人が知った時に，その相続人の占有は，所有の意思のある占有となる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"35"},{year:"2011",num:"11",subject:"min",q:`費用の償還に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．占有者が占有物から生ずる果実を取得したときは，通常の必要費は，占有者の負担に帰する。
イ．留置権者は，留置物について必要費を支出したときは，所有者に対し，その償還を請求することができる。
ウ．受任者は，委任事務を処理するのに必要と認められる費用を支出したときは，委任者に対し，委任が終了した日以後に，その費用の償還を請求することができる。
エ．受寄者は，受寄物を保管するのに必要と認められる債務を負担したときは，寄託者に対し，自己に代わってその弁済をすることを請求することができ，その債務が弁済期にないときは，寄託者に対し，相当の担保を供させることができる。
オ．事務管理における管理者が本人の意思に反して事務管理をした場合であっても，管理者は，本人のために有益な費用を出したときは，本人に対し，その全額の償還を請求することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2011",num:"12",subject:"min",q:`民法上の留置権と同時履行の抗弁権に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．留置権によって拒絶できる給付の内容は，物の引渡しであるが，同時履行の抗弁権によって拒絶することができる給付の内容は，物の引渡しに限られない。
イ．特定動産の売買契約の売主が目的物の占有を失った場合には，買主からの当該目的物の引渡請求に対し，もはや留置権を行使することはできないが，代金支払との同時履行を主張することはできる。
ウ．留置権を行使されている者は，相当の担保を供してその消滅を請求することができるが，同時履行の抗弁権を行使されている者は，相当の担保を供してその消滅を請求することができない。
エ．物の引渡しを請求する訴訟において被告の同時履行の抗弁が認められた場合は，被告に対して，原告の負う債務の履行との引換給付判決がされることになるが，被告の留置権の抗弁が認められた場合は，請求棄却の判決がされる。
オ．双務契約の当事者の一方が，相手方に対して同時履行の抗弁権を行使することができるときでも，その相手方の債権について債権者代位権を行使する者に対しては，同時履行の抗弁権を行使することができない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2011",num:"13",subject:"min",q:`指名債権を目的とする質権に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．指名債権を質権の目的とする場合において，その債権に証書があるときは，証書を交付しなければ質権設定の効力は生じない。
イ．指名債権である甲債権の質権者は，被担保債権の弁済期が到来するとともに，質権の目的である甲債権の弁済期が到来したときは，甲債権を直接に取り立てることができる。
ウ．譲渡禁止特約のある指名債権を質権の目的とする場合には，その特約につき質権者が悪意であっても，質権設定の効力は妨げられない。
エ．債権者が個人である指名債権を質権の目的とした場合において，その質権設定を質権の目的である債権の債務者以外の第三者に対抗するには，確定日付のある証書による通知又は承諾が必要である。
オ．質権の目的とされた指名債権の債務者が，質権設定につき異議をとどめないで承諾をしたときは，その債務者は，債権者に対抗することができた事由があっても，これを質権者に対抗することができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2011",num:"14",subject:"min",q:"物上代位に関する次の１から５までの各記述のうち，判例の趣旨に照らし正しいものを２個選びなさい。",c1:"１．動産売買の先取特権者は，一般債権者が物上代位権行使の目的となる債権を差し押さえた後は，自らその目的債権を差し押さえて物上代位権を行使することができない。",c2:"２．動産売買の先取特権者は，物上代位権行使の目的となる債権が譲渡され，第三者に対する対抗要件が備えられた後であっても，自らその目的債権を差し押さえて物上代位権を行使することができる。",c3:"３．動産売買の先取特権者は，買主が目的動産を用いて施工した請負工事の請負代金債権に対しては，原則として物上代位権を行使することができないが，請負代金全体に占める当該動産の価値の割合や請負契約における請負人の債務の内容等に照らし，請負代金債権の全部又は一部を動産の転売による代金債権と同視するに足りる特段の事情がある場合には，物上代位権を行使することができる。",c4:"４．抵当権者は，一般債権者が物上代位権行使の目的となる債権を差し押さえて転付命令が第三債務者に送達された後であっても，自らその目的債権を差し押さえて物上代位権を行使することができる。",c5:"５．抵当権者は，物上代位権行使の目的となる債権が譲渡され，第三者に対する対抗要件が備えられた後であっても，自らその目的債権を差し押さえて物上代位権を行使することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"35"},{year:"2011",num:"15",subject:"min",q:`Ａが所有する土地について，Ｂを抵当権者とする抵当権が設定され，その登記がされていた場合に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ｂが抵当権を実行しＣが買受人としてこの土地の所有権を取得した場合，ＣはＡに対してこの土地について所有権に基づいて引渡しを請求することができる。
イ．Ｂのために抵当権設定登記がされた後，抵当権の実行の前に，ＡがＤとの間でこの土地の賃貸借契約を締結しその賃借権が登記された場合において，その後Ｂが抵当権を実行しＣが買受人としてこの土地の所有権を取得したとき，Ｄは，Ｃからのこの土地についての所有権に基づく引渡しの請求に対して，賃貸借契約を理由にして拒むことができる。
ウ．Ｂが抵当権を実行する前に，ＡがＥとの間でこの土地の賃貸借契約を締結した場合において，その後抵当権の被担保債権について不履行があったとき，抵当権の効力は，Ａが賃貸借契約に基づいてＥに対して有する賃料債権で被担保債権について不履行があった後に生じたものに及ぶ。
エ．Ｂが抵当権を実行する前に，ＡがＦとの間でこの土地の売買契約を締結した場合において，ＡＦ間の売買契約で定めた代価を，ＦがＢの請求に応じてＢに支払ったとき，抵当権はＦのために消滅する。
オ．Ｂのために抵当権設定登記がされた後，抵当権の実行の前に，Ａがこの土地の上に建物を築造した場合において，Ｂが土地と共にこの建物を競売したとき，Ｂは抵当権に基づく優先権を土地及び建物の代価について行使することができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2011",num:"16",subject:"min",q:`不動産の譲渡担保に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．債務者である土地の賃借人が，借地上に所有している建物を譲渡担保の目的物とした場合において，譲渡担保権の効力は，土地の賃借権に及ぶので，譲渡担保権者が担保権を実行し，これにより第三者がその建物の所有権を取得したときは，これに伴い土地の賃借権も第三者に譲渡される。
イ．譲渡担保権の設定者は，被担保債権が弁済期を経過した後においては，譲渡担保の目的物についての受戻権を放棄し，譲渡担保権者に対し，譲渡担保の目的物の評価額から被担保債権の額を控除した金額の清算金を請求することができる。
ウ．譲渡担保権によって担保されるべき債権の範囲は，強行法規や公序良俗に反しない限り，設定契約の当事者間において元本，利息及び遅延損害金について自由に定めることができ，抵当権の場合におけるような制限はない。
エ．債務者が債務の履行を遅滞したときは，帰属清算型の譲渡担保であっても，譲渡担保権者は，目的不動産を処分する権限を取得する。
オ．被担保債権の弁済期が到来し，債務者が被担保債権を弁済した後に，譲渡担保権者が目的不動産を第三者に売却した場合には，当該第三者は，被担保債権が弁済されていることについて知らないで，かつ，知らないことに過失がないときに限り，目的不動産の所有権を取得する。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2011",num:"17",subject:"min",q:"債務不履行に関する次の１から５までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．金銭債務者が，不可抗力により，支払期日に支払をすることができなかったときは，当該金銭債務者は，履行遅滞の責任を負わない。",c2:"２．建物の転貸借において，転借人の失火によって当該建物が焼失した場合，転貸借について賃貸人の承諾があれば，転貸人は，賃貸人に対する損害賠償義務を負わない。",c3:"３．生命保険契約を締結していた被保険者が，医師の過失による医療事故によって死亡し，被保険者の相続人が当該生命保険契約により死亡保険金の給付を受けた場合において，その相続人が医師に対して債務不履行を理由に損害賠償を請求したときは，賠償されるべき損害額から当該保険金額が控除される。",c4:"４．特注品の椅子の製造を請け負った請負人が，目的物を完成させて注文者に届けた場合には，注文者がこれを受領しないときでも，請負人は，特段の事由がない限り当該請負契約を解除することができない。",c5:"５．不動産の売買における売主の債務不履行において，特別の事情によって生じる損害については，債務者は，その債務の成立時に当該特別の事情を予見し，又は予見することができた場合に限り，賠償責任を負う。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2011",num:"18",subject:"min",q:"詐害行為取消権に関する次の１から５までの各記述のうち，判例の趣旨に照らし正しいものを２個選びなさい。",c1:"１．不動産の譲渡が詐害行為取消権を主張する債権者の債権成立前にされている場合には，債権成立後に所有権移転登記がされても，当該不動産の譲渡行為及び所有権移転登記は，いずれも詐害行為とはならない。",c2:"２．相続人の債権者は，相続人が無資力であるにもかかわらず相続放棄をした場合には，詐害行為取消権を行使することができる。",c3:"３．受益者が債権者を害すべき事実を知らない場合には，転得者がこれを知っていたとしても，債権者は，転得者に対し詐害行為取消権を行使することはできない。",c4:"４．詐害行為取消権を行使するためには，受益者又は転得者を相手方として訴えを提起すれば足り，債務者を相手方とする必要はない。",c5:"５．不動産の譲渡行為が詐害行為となる場合，詐害行為取消権を行使する債権者は，当該譲渡行為に基づき所有権移転登記を受けた譲受人に対して，直接自己に対する所有権移転登記を求めることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"14"},{year:"2011",num:"19",subject:"min",q:"多数当事者の債権関係に関する次の１から５までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．保証人は，主たる債務者がその有する債権をもって相殺するまでは，債権者に対して相殺を対抗することができない。",c2:"２．連帯債務者の一人が債権者の地位を単独で相続した場合，他の連帯債務者は，依然として連帯債務を負担する。",c3:"３．期限の定めのない貸金債権を共同相続した相続人の一人が，債務者に対して全額の弁済請求をした場合には，債務者は，共同相続人全員に対して履行遅滞の責任を負う。",c4:"４．未成年者が負っている貸金債務を連帯保証した保証人は，債権者との連帯保証契約の時に未成年者であることを知らなかった場合であっても，未成年者のした貸金契約を保証人としての資格で取り消すことはできない。",c5:"５．二人が貸金業者から連帯して１００万円を借り入れた後，当該連帯債務者のうちの一人が成年被後見人であることを理由に当該契約を取り消した場合，他の連帯債務者は，成年被後見人の負担部分の債務を免れる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2011",num:"20",subject:"min",q:"債権譲渡に関する次の１から４までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．指名債権譲渡の予約につき確定日付のある証書により債務者に対して通知がされていれば，その予約が完結された時に，譲受人は，債権譲渡の効力を第三者に対抗することができることになる。",c2:"２．指名債権が二重に譲渡され，各譲渡についての確定日付のある証書による通知が同時に債務者に到達したときは，各譲受人は，債務者に対し，それぞれ譲受債権全額の弁済を請求することができる。",c3:"３．譲渡禁止の特約の存在を知りながら債権を譲り受けた者から，更に当該債権を譲り受けた転得者については，この者が譲渡禁止の特約の存在を知らない場合でも，債務者は，譲渡禁止の特約を対抗することができる。",c4:"４．指名債権の譲受人が，債権者代位権により，譲渡人に代位して債務者に債権譲渡の通知をした場合，その通知は有効である。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2011",num:"21",subject:"min",q:"弁済に関する次の１から４までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．弁済者が履行期に弁済の目的物を提供して受取証書の交付を請求したにもかかわらず，弁済受領者がこれに応じないときは，弁済者は，目的物の引渡しをしなくても，遅滞の責めを負わない。",c2:"２．債権者が債務の弁済として，債務者からその所有に属しない物の交付を受けた場合には，その弁済が有効となることはない。",c3:"３．債権の準占有者に対する弁済は，弁済者が善意であり，かつ，重過失がなかった場合には，有効となる。",c4:"４．受取証書の持参人は，その者の権限についての弁済者の主観的事情にかかわらず，弁済を受領する権限があるものとみなされる。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2011",num:"22",subject:"min",q:`弁済による代位に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．保証人が債権者に弁済をする前に債務者所有の抵当不動産が第三者に譲渡された場合には，保証人は，その後に弁済をしても，その第三者に対して債権者に代位することはできない。
イ．９００万円の主たる債務について二人の連帯保証人がおり，そのうちの一人が物上保証人を兼ねている場合，連帯保証債務のみを負担している者が全額弁済をすると，この者が法定代位する債権額は６００万円である。
ウ．１０００万円の主たる債務に対する連帯保証人と物上保証人が一人ずついたところ，連帯保証人が債権者に弁済をする前に，物上保証の目的不動産が三人の共同相続人により相続され共有となった場合，その後連帯保証人が全額弁済をすると，この者が法定代位する債権額の合計は７５０万円である。
エ．債務者が所有する不動産と物上保証人が所有する不動産に共同抵当権が設定された場合において，後者の不動産が競売されて債権者が被担保債権の一部の満足を受けたときは，物上保証人は，一部代位者として債権者と共に前者の不動産に設定された抵当権を実行することができるが，競落代金の配当においては債権者に劣後する。
オ．保証人が債権者に弁済をした場合，債務者との間であらかじめ求償権につき法定利率を超える利率による遅延損害金を支払う特約をしていたとしても，当該債務者の物上保証人との関係においては，保証人が取得した求償権についての遅延損害金は，法定利率の範囲に限定される。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2011",num:"23",subject:"min",q:`相殺に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．消滅時効期間の経過した債権が，その期間経過以前に債務者の有する反対債権と相殺適状にあった場合には，消滅時効期間の経過した債権を有する債権者は，債務者による消滅時効の援用の前後を問わず，相殺をすることができる。
イ．債務者が受働債権の譲受人に対し相殺をもって対抗することができる場合には，その相殺の意思表示は，受働債権の譲渡人にすれば足りる。
ウ．不法行為に基づく損害賠償債権を自働債権とし，不法行為に基づく損害賠償債権以外の債権を受働債権とする相殺は，許される。
エ．請負人の注文者に対する請負代金債権と，注文者の請負人に対する目的物の瑕疵修補に代わる損害賠償請求権は，同時履行の関係にあるため，注文者及び請負人は，原則として共に相殺することができないが，双方の債権額が等しい場合には例外として相殺をすることができる。
オ．有価証券に表章された金銭債権の債務者は，その債権者に対して有する弁済期にある自己の金銭債権を自働債権とし，有価証券に表章された金銭債権を受働債権として相殺する場合であっても，有価証券の占有を取得する必要はない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2011",num:"24",subject:"min",q:"危険負担に関する次の１から４までの各記述のうち，正しいものはどれか。",c1:"１．Ａは，Ｂから「自分の肖像画を描いてほしい。完成した肖像画と引換えに報酬１００万円を払う。」と頼まれて請け負い，その後，Ｂの肖像画を完成させ，Ａ宅に保管していたところ，引渡期日前に，この肖像画は隣人の失火によって焼失した。この場合，Ｂは，Ａに対して，報酬１００万円を支払わなければならない。",c2:"２．Ａは，Ｂに対して，Ａ所有の中古住宅を代金３０００万円で売却し，Ｂへの所有権移転登記と同時に代金全額を受け取るという約束でＢにこの住宅を引き渡したが，Ｂに引き渡した２日後に，この住宅は隣人の失火によって全焼した。この場合，Ｂは，Ａに対して，代金３０００万円を支払わなければならない。",c3:"３．Ａは，Ｂとの間で，「Ｂが大学を卒業した際には，Ａは，Ａ所有の特定の自動車を１０万円でＢに売り渡す。」という契約をしたが，Ａ宅敷地内の車庫に保管されていたこの自動車は，隣人の失火によって焼失し，その後，Ｂは，大学を卒業した。この場合，Ｂは，Ａに対して，代金１０万円を支払わなければならない。",c4:"４．Ａは，Ｂとの間で，「Ｂが大学を卒業した際には，Ａは，Ａ所有の特定の自動車を１０万円でＢに売り渡す。」という契約をしたが，Ａの失火によってこの自動車は焼失し，その後，Ｂは，大学を卒業した。この場合，Ｂは，この売買契約を解除することはできない。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2011",num:"25",subject:"min",q:`不動産の売買契約における売主の瑕疵担保責任に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．売買の目的物に瑕疵があった場合，買主が瑕疵があることを知らずに目的物を買い受けた以上，隠れた瑕疵といえる。
イ．売買の目的物に隠れた瑕疵があった場合，その瑕疵の存在により契約をした目的を達することができないときは，買主は，契約を解除することができる。
ウ．売買の目的物に隠れた瑕疵があり，買主がそのことを理由に契約を解除することができる場合，買主は，契約を解除するとともに，売主に対して損害賠償を請求することもできる。
エ．買主が売主に対して瑕疵担保責任に基づいて契約の解除又は損害賠償を請求する場合，買主は売買契約が成立した時から１年以内にこれをしなければならない。
オ．中古の建物について強制競売が行われた場合，その建物の買受人は，その建物の元の所有者に対し，その建物に隠れた瑕疵があることを理由として損害賠償を請求することができる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2011",num:"26",subject:"min",q:"売買に関する次の１から４までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．売買代金額が，契約の際に表示された目的物である土地の面積を基礎に決められたにもかかわらず実際にはその面積が不足していた場合，売主は，その面積の表示が契約の目的を達成する上で特段の意味を有しなくても，その土地が表示どおりの面積を有したとすれば買主が得たであろう利益について損害賠償の責めを負う。",c2:"２．他人の土地を買主に移転するという債務が売主の責めに帰すべき事由により履行不能となった場合，目的物である土地を売主が所有していないことを知って売買契約を締結した買主は，売主に対して損害賠償を請求することができる。",c3:"３．買った土地の一部が売主以外の者の所有する土地であり，契約締結時に買主がその事実を知っていた場合において，売主がこれを買主に移転することができないときは，買主は，売主に対して，その不足する部分の割合に応じて代金の減額を請求することはできない。",c4:"４．売買の目的物である土地の実際に有する数量を確保するため，売主が一定の面積を契約において表示し，かつ，この面積を基礎として代金が定められた売買において，実際の面積が超過する場合，売主は，契約締結時にその超過の事実を知らなかったときは，買主に対する意思表示により，超過した部分の割合に応じて代金の増額を請求することができる。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2011",num:"27",subject:"min",q:`Ａを貸主，Ｂを借主とするＡ所有の甲建物の使用貸借契約に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．甲建物に瑕疵があり，Ａがそれを知らなかったことについて過失がある場合には，Ａは，担保責任を負う。
イ．甲建物内の蛍光灯が切れたので，Ｂが新しいものに交換した場合，Ｂは，Ａに対して蛍光灯の代金を請求することができる。
ウ．甲建物についてＢが有益費を支出し，使用貸借契約の終了時に，Ｂがその支出した金額の支払をＡに対して求めた場合，Ａは，Ｂが支出した金額ではなく，Ｂが有益費を支出したことによる甲建物の増価額をＢに支払うことができる。
エ．ＡＢ間の使用貸借契約が，返還の時期は定めていないが，Ｂが他の適当な建物に移るまでのしばらくの間，Ｂが住居として使用することを目的としていた場合において，Ｂが現実に適当な建物を見つけることができなくても，それに必要な期間を経過したときは，Ａは，使用貸借契約の解約をすることができる。
オ．ＡＢ間の使用貸借契約は，Ａの死亡によってその効力を失う。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2011",num:"28",subject:"min",q:"第三者の権利又は法的地位に関する次の１から４までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．譲渡禁止の特約のある債権がその特約につき悪意の者に譲渡され，当該債権の債務者がそれを承諾した場合には，その債権譲渡は遡って有効となるが，その承諾前に譲渡人の債権者である第三者が当該債権を差し押さえていたときは，その第三者の権利を害することができない。",c2:"２．ＡがＢに不動産を売却し，さらにＢがＣに当該不動産を売却した後，ＡＢ間の売買契約をＡが解除した場合において，Ｃが保護されるためには，Ｃは，自己の権利の取得について登記を備えていることを要する。",c3:"３．借地上の建物の賃借人は，その敷地の地代の弁済について法律上の利害関係を有するとはいえないので，借地人の意思に反して，第三者として地代を弁済することはできない。",c4:"４．代理人が本人を売主として権限外の売買契約を締結した場合において，その相手方について権限外の行為の表見代理の要件が充足されているときは，本人は，その相手方からの転得者に対して，当該行為の効果が本人に帰属しないことを主張することができない。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2011",num:"29",subject:"min",q:"不当利得に関する次の１から４までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．ＡがＢからだまし取った金銭で自己の債権者Ｃに弁済した場合，Ｃがこの事実を知らなかったことにつき重大な過失があったとしても，Ｃが受けた弁済による利益は，Ｂとの関係で不当利得にはならない。",c2:"２．Ａは，Ｂに対して債務を負っており，その弁済期前であることを知りながらその債務を全額弁済した場合，Ｂがそれを弁済期までの間に運用して利益を得ていたときは，その利益は，Ａとの関係で不当利得となる。",c3:"３．大麻の密売人Ａは，Ｂに対し，Ａが売るための大麻をＡの所有する土地でＢに栽培させるために，その土地を書面によってＢに贈与し，Ｂに引き渡したが，登記名義はＡのままであった。その後，Ａが大麻を売るのをやめ，Ｂに対して当該土地の引渡請求をした場合には，Ａの請求は認められる。",c4:"４．不法な原因のために，書面によって土地を贈与し，これを受贈者に引き渡した場合において，当事者間で当該贈与契約を解除して当該土地を贈与者に返還する旨の合意をしたときは，この合意は，無効である。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2011",num:"30",subject:"min",q:`不法行為による損害賠償請求権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．胎児の父が他人の不法行為によって死亡した場合，胎児の母は，子の出生前であっても，その代理人として子の固有の慰謝料請求権を行使することができる。
イ．不法行為による生命侵害の場合，被害者が加害者に対して取得した慰謝料請求権は，被害者の相続人に相続される。
ウ．不法行為により身体に被害を受けた者の近親者がその固有の慰謝料を請求することができるのは，被害者がその不法行為によって死亡した場合に限られる。
エ．不法行為による身体傷害の場合，被害者に責任能力が備わっていないときは，その過失を考慮して損害賠償の額を決めることができない。
オ．名誉毀損による慰謝料請求権は，被害者がその請求権を行使する意思を表示した後であっても，具体的な金額が当事者間において客観的に確定する前は，被害者の債権者による代位行使の対象とはならない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2011",num:"31",subject:"min",q:`婚姻又は内縁の解消に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．協議上の離婚は戸籍法の定めるところにより届け出ることによって効力を生じ，判決による離婚は離婚請求を認容する判決が確定した時に効力を生ずる。
イ．裁判所は，離婚の訴えに係る請求を認容する判決において，婚姻により氏を改めた当事者の称すべき氏を定めなければならない。
ウ．婚姻が離婚により終了したときは，姻族関係は当然に終了し，婚姻が夫婦の一方の死亡により終了したときは，姻族関係は，生存配偶者が戸籍法の定める届出により姻族関係終了の意思を表示した時に終了する。
エ．判例によれば，内縁の夫婦関係がその一方により正当の理由なく破棄されたため他の一方が精神的損害を被った場合には，当該他の一方は，不法行為を理由として慰謝料の支払を請求することができる。
オ．判例によれば，内縁の夫婦の一方が死亡したときは，他の一方は，財産分与に関する民法の規定の類推適用により，遺産について財産分与を請求することができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2011",num:"32",subject:"min",q:"親子関係に関する次の１から５までの各記述のうち，判例の趣旨に照らし正しいものを２個選びなさい。",c1:"１．離婚による婚姻解消後３００日以内に出生した子であっても，母とその夫とが離婚に先立ち長期間事実上の離婚をして別居し，全く交渉を絶って，夫婦の実態が失われていた場合には，夫の子と推定されない。",c2:"２．未成年者である父がその子を認知したときは，当該父の法定代理人がこれを取り消すことができる。",c3:"３．母とその嫡出でない子との間の親子関係は，母が認知をしたときに認知の時から発生する。",c4:"４．認知の届出がない場合であっても，父の生前における認知の意思が客観的に明らかであるときは，父が死亡した時に認知の効力が生ずる。",c5:"５．認知の判決が正当な当事者の間で確定している以上，当該判決は第三者に対しても効力を有するから，これに対して再審の手続で争うのは別として，もはや第三者も反対の事実を主張して認知の無効の訴えを提起することはできない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"15"},{year:"2011",num:"33",subject:"min",q:"後見に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．未成年後見及び成年後見は，いずれも，家庭裁判所が後見開始の審判をしたときに開始される。",c2:"２．法人は，成年後見人となることができない。",c3:"３．未成年後見人は，自己のためにするのと同一の注意をもって，後見の事務を行わなければならない。",c4:"４．成年後見人が欠けたときは，家庭裁判所は，成年被後見人若しくはその親族その他の利害関係人の請求により又は職権で，成年後見人を選任する。",c5:"５．未成年者は，後見人となることができない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"45"},{year:"2011",num:"34",subject:"min",q:`遺産分割に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．被相続人は，遺言で，遺産の分割の方法を定めることを第三者に委託することができる。
イ．判例によれば，共同相続が生じたとき，相続財産を構成する金銭は，相続開始と同時に各自の相続分に従い当然に分割され，遺産分割の対象とならない。
ウ．共同相続人間における遺産分割の審判が確定した後に，被相続人を父とする認知の判決が確定し被認知者が相続人となった場合，遺産分割の審判はその効力を失う。
エ．共同相続が生じたとき，各相続人は，他の相続人全員を被告として遺産分割の訴えを提起することができる。
オ．相続の放棄をした者は，その放棄によって相続人となった者が相続財産の管理を始めることができるまで，自己の財産におけるのと同一の注意をもって，その財産の管理を継続しなければならない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2011",num:"35",subject:"min",q:`普通の方式による遺言に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．公正証書遺言及び秘密証書遺言は，公証人がその作成に関与する。
イ．署名することができない者は，公正証書遺言及び秘密証書遺言により遺言をすることができる。
ウ．公正証書遺言を撤回する遺言は，自筆証書遺言でもすることができる。
エ．秘密証書遺言は，その方式に欠けるところがあっても，自筆証書遺言の方式を具備するときは，自筆証書遺言として効力を有する。
オ．自筆証書遺言をするには，遺言者が証書の全文，日付及び氏名を自書し，押印した上で，証書を封じ，封印しなければならない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2011",num:"36",subject:"min",q:"遺留分に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．被相続人の兄弟姉妹は，被相続人の相続において遺留分を有しない。",c2:"２．相続の開始前に家庭裁判所の許可を受けて遺留分を放棄した者は，これにより相続人としての地位を失わない。",c3:"３．数個の贈与が遺留分減殺の対象となるとき，被相続人の別段の意思表示がなければ，贈与の目的物の価格の割合に応じて減殺すべき額を割り付け，各々の贈与を減殺する。",c4:"４．遺留分減殺請求権は裁判外の意思表示で行使することができる。",c5:"５．遺留分減殺の対象となる贈与は，相続人に対してされたものでなければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"35"},{year:"2011",num:"37",subject:"syo",q:`取締役会設置会社（委員会設置会社を除く。）における支配人に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．支配人は，取締役会の決定によって選任する。
イ．支配人の任期は，選任後２年以内に終了する事業年度のうち最終のものに関する定時株主総会の終結の時までである。
ウ．支配人は，会社の許可を受けなくても，他の会社の取締役となることができる。
エ．支配人が自己の利益を図る意図で会社の事業に関する行為をした場合でも，相手方がその意図を知っているときは，その会社は，その行為について責任を負わない。
オ．支配人は，会社の他の使用人を選任することができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2011",num:"38",subject:"syo",q:`株式会社の発起設立に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．設立時取締役は，発起人であることを要しない。
イ．発起人が２名以上ある場合，そのうちの発起人１名が設立時発行株式の全てを引き受け，他の発起人は，設立時発行株式を引き受けないことができる。
ウ．定款で設立時取締役として定められた者は，その定款について公証人の認証を受けた時に，設立時取締役に選任されたものとみなされる。
エ．設立時取締役は，その選任後遅滞なく，設立の手続が法令又は定款に違反していないことを調査しなければならない。
オ．株式会社が発起人となってその事業の全部を現物出資する場合には，現物出資をする会社において株主総会の特別決議を経なければならない。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2011",num:"39",subject:"syo",q:"取得請求権付株式に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．取得請求権付株式の株主は，その取得の対価が金銭である場合において，株式会社に分配可能額がないときは，取得の請求をすることができない。",c2:"２．株式会社が株主の取得の請求によって取得請求権付株式を取得する場合には，その取得について株主総会の決議を経なければならない。",c3:"３．株式会社が株主の取得の請求によって取得請求権付株式を取得した場合には，相当の時期に，取得した自己株式を消却しなければならない。",c4:"４．株式会社が株主の取得の請求によって取得請求権付株式を取得した結果，取得した日の属する事業年度に係る計算書類において欠損が生じた場合でも，その行為に関する職務を行った業務執行者は，その会社に対し，その欠損を塡補する責任を負わない。",c5:"５．優先株式を取得請求権付株式とすることはできるが，その取得の対価を普通株式とすることはできない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2011",num:"40",subject:"syo",q:"株式の分割と株式無償割当ての異同に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．株式の分割により自己株式の数は増えるが，株式無償割当てにより自己株式の数は増えない。",c2:"２．株式の分割により１株に満たない端数が生じ得るが，株式無償割当てにより１株に満たない端数が生ずることはない。",c3:"３．株式の分割により株主の有する株式と異なる種類の株式をその株主に取得させることはできないが，株式無償割当てにより株主の有する株式と異なる種類の株式をその株主に取得させる",c4:"４．株式の分割の場合には，現に２以上の種類の株式を発行していない限り，株主総会の決議によらないで発行可能株式総数を増加する定款変更をすることができるが，株式無償割当ての場合には，株主総会の決議によらなければ発行可能株式総数を増加する定款変更をすることはでことはできる。きない。",c5:"５．株式の分割により自己株式を株主に取得させることはできないが，株式無償割当てにより自己株式を株主に取得させることはできる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2011",num:"41",subject:"syo",q:`次のアからオまでの発行又は処分のうち，金銭が会社に払い込まれることがないため，資金調達方法となり得ないものを組み合わせたものは，後記１から５までのうちどれか。
ア．株式無償割当てによる株式の発行の発行
イ．新株予約権付社債（新株予約権を行使する場合には，必ずその社債が消滅するものに限る。）
ウ．新株予約権の行使に伴う株式の発行
エ．自己株式の処分
オ．取得条項付株式の取得の対価としての株式の発行`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2011",num:"42",subject:"syo",q:`株主総会に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．判例によれば，株式会社が定款をもって株主総会における議決権行使の代理人の資格を会社の株主に限る旨を定めた場合において，株主である法人がその代表者の指揮下にある職員を代理人として株主総会で議決権を行使することは，定款に反し許されない。
イ．大会社においては，株主の数が１０００人未満でも，株主総会を招集する場合には，株主総会に出席しない株主が書面によって議決権を行使することができる旨を定めなければならない。
ウ．会社法上の公開会社においては，株主総会の招集通知は，株主総会の日の２週間前までに株主に対して発しなければならず，定款でこれより短い期間を定めることはできない。
エ．取締役会設置会社においては，取締役の解任が株主総会の目的である事項となっていない場合でも，株主は，その株主総会において，取締役の解任の議案を提出することができる。
オ．取締役は，株主総会において，株主から特定の事項について説明を求められた場合でも，その事項が株主総会の目的である事項に関しないものであるときは，その説明をすることを要しない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2011",num:"43",subject:"syo",q:`種類株式発行会社でない監査役会設置会社における株主の権利に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．会社法所定の要件を満たす株主は，代表取締役が法令に違反する行為をするおそれがある場合において，その行為によって会社に回復することができない損害が生ずるおそれがあるときは，その行為をやめることを請求することができる。
イ．株主が監査役会議事録の閲覧を請求するためには，裁判所の許可を得なければならない。
ウ．株主は，他の株主が提起した株主代表訴訟には，共同訴訟人として参加することができない。
エ．取締役の職務の執行に関し不正の行為があった場合には，会社法所定の要件を満たす株主は，その取締役を解任する旨の議案が株主総会において否決されたかどうかを問わず，その取締役の解任の訴えを提起することができる。
オ．株主総会においてある議案について賛成の議決権を行使した株主は，その議案に係る決議の方法が定款に違反する場合でも，決議取消しの訴えを提起することができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2011",num:"44",subject:"syo",q:`監査役会設置会社において，取締役がその任務を怠ったときに負う会社に対する損害賠償責任の全部の免除又は法定の額を限度とする一部の免除に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。なお，各記述において，取締役の責任を追及する訴えに係る訴訟において和解をする場合は，考慮しないものとする。
ア．責任の全部の免除をするためには，総株主の同意がなければならない。
イ．責任の一部の免除をするためには，取締役が職務を行うにつき善意で，かつ，過失がないときであることが必要である。
ウ．責任の一部の免除に関する議案を取締役が株主総会に提出するためには，監査役の過半数をもって行う決議による監査役会の同意を得なければならない。
エ．取締役会の決議によって責任の一部の免除をするためには，取締役会の決議によって免除することができる旨を定款で定めなければならない。
オ．会社と取引をした取締役の責任の一部の免除をするためには，その取引が自己のためにしたものでないことが必要である。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2011",num:"45",subject:"syo",q:"監査役会設置会社における決議又は報告の省略に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．株主総会の決議については，取締役が株主総会の目的である事項について提案をした場合において，その提案につき株主（その事項について議決権を行使することができるものに限る。）の全員が書面により同意の意思表示をしたときは，その提案を可決する旨の決議があったものとみなされる。",c2:"２．株主総会への報告については，取締役が株主の全員に対して株主総会に報告すべき事項を通知した場合において，その事項を株主総会に報告することを要しないことにつき株主の全員が書面により同意の意思表示をしたときは，その事項の報告があったものとみなされる。",c3:"３．取締役会の決議については，取締役が取締役会の決議の目的である事項について提案をした場合において，その提案につき取締役（その事項について議決に加わることができるものに限る。）の全員が書面により同意の意思表示をしたときは，決議の省略に係る定款の定めがなくても，その提案を可決する旨の決議があったものとみなされる。",c4:"４．監査役会の決議については，監査役が監査役会の決議の目的である事項について提案をした場合において，その提案につき監査役の全員が書面により同意の意思表示をしたときは，決議の省略に係る定款の定めがなくても，その提案を可決する旨の決議があったものとみなされる。",c5:"５．監査役会への報告については，監査役が監査役の全員に対して監査役会に報告すべき事項を通知したときは，その事項を報告することを要しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"34"},{year:"2011",num:"46",subject:"syo",q:`監査役に関する次のアからオまでの各規律のうち，監査役の独立性確保を目的としないものを組み合わせたものは，後記１から５までのうちどれか。
ア．監査役の任期は，定款の定めによって短縮することができないとの規律
イ．監査役会設置会社において，取締役が監査役の選任に関する議案を株主総会に提出するには，監査役会の同意を得なければならないとの規律
ウ．補欠の監査役を選任することができるとの規律
エ．監査役を辞任した者は，辞任後最初に招集される株主総会に出席して，辞任した旨及びその理由を述べることができるとの規律
オ．監査役会の決議は，監査役の過半数をもって行うとの規律`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2011",num:"47",subject:"syo",q:"株式会社が株主総会の決議によって解散した場合に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．その会社が取締役会設置会社であった場合，清算人会を置かなければならない。",c2:"２．その会社は，解散した後，速やかに，債務の弁済をしなければならない。",c3:"３．その会社は，清算が結了するまで，株主総会の特別決議によって，株式会社を継続することができる。",c4:"４．その会社の法人格は，清算が結了しても，その会社が清算結了の登記をするまでは，消滅しない。",c5:"５．その会社が会社法上の公開会社である委員会設置会社であった場合，監査委員が監査役となる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"35"},{year:"2011",num:"48",subject:"syo",q:`合同会社に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．社員になろうとする者は，労務や信用を出資の目的とすることができる。
イ．会社が新たに社員を加入させる場合，定款の変更をしなければならない。
ウ．合同会社が合名会社となるには，組織変更計画を作成しなければならない。
エ．法人は，業務を執行する社員となることができない。
オ．社員は，定款を変更してその出資の価額を減少する場合を除き，会社に対し，出資の払戻しを請求することができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2011",num:"49",subject:"syo",q:`株式会社の新設分割に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．分割会社は，株主総会の普通決議によって，新設分割計画の承認を受けなければならない。
イ．分割会社の債権者が債権者異議手続に従って新設分割について異議を述べた場合でも，新設分割をしてもその債権者を害するおそれがないときは，会社は，その債権者に対し，弁済し，若しくは相当の担保を提供し，又はその債権者に弁済を受けさせることを目的として信託会社等に相当の財産を信託することを要しない。
ウ．設立会社においては，新設分割計画の定めに従って，創立総会を招集しなければならない。
エ．設立会社は，新設分割計画に新設分割がその効力を生ずる日を定めたときは，その日に，成立する。
オ．設立会社は，新設分割によって，その親会社の株式を分割会社から承継することができる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2011",num:"50",subject:"syo",q:`株主総会の決議に係る訴訟に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．株主総会決議無効確認の訴えは，確認の利益を有する限り，誰でも提起することができる。
イ．株主総会の決議の方法が法令に違反した場合，株主総会決議無効確認の訴えを提起することができる。
ウ．株主総会の招集通知の発出に漏れがあった場合，その程度にかかわらず，株主総会決議不存在確認の訴えを提起することはできない。
エ．株主総会決議取消しの訴えの提起があった場合において，株主総会の招集の手続が定款に違反するときでも，裁判所は，その違反する事実が重大でなく，かつ，決議に影響を及ぼさないものであると認めるときは，その訴えに係る請求を棄却することができる。
オ．株主総会決議無効確認の訴えに係る請求を棄却する確定判決は，第三者に対しても，その効力を有する。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2011",num:"51",subject:"syo",q:`次のアからオまでの各事項のうち，株式会社の登記事項とされているものを組み合わせたものは，後記１から５までのうちどれか。
ア．資本金の額
イ．事業年度
ウ．取締役の氏名及び住所
エ．取締役会設置会社であるときは，その旨
オ．監査役会設置会社であるときは，その旨及び監査役のうち常勤監査役であるものについて常勤監査役である旨`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2011",num:"52",subject:"syo",q:`Ａが個人旅行を予定しているＢ（商人ではないものとする。）のために一定の行為を業としてする場合におけるＡの商法上の地位に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡがＢから委託を受けてＢの希望に添うレンタカー契約の締結を媒介する場合，Ａは，Ｂの代理商に該当する。
イ．ＡがＢから委託を受けて自己の名でＢのためにバス会社との間で旅客運送契約を締結する場合，Ａは，いわゆる準問屋に該当する。
ウ．ＡがＢから委託を受けてＢのために宿泊契約の締結を媒介する場合において，Ａが宿泊契約の相手方であるホテル会社からその媒介の委託を受けていないときは，Ａは，仲立人に該当しない。
エ．ＡがＢから委託を受けてＢのためにゴルフバッグを運送する宅配便をあっせんし，Ｂと運送会社との間で物品運送契約が締結された場合，Ａは，運送取扱人に該当する。
オ．Ａが店舗の半分のスペースで旅行の手配に係る業務を営み，残りの半分のスペースで喫茶店を営んでいる場合において，旅程の相談を終えたＢに対しその喫茶店で飲食物を有料で提供するときは，Ａは，場屋の主人に該当する。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2011",num:"53",subject:"syo",q:`交互計算に組み入れた債権を譲渡することができないことは，第三者が交互計算契約の成立を知っていたかどうかにかかわらず，第三者に対抗することができるとの見解がある。次のアからオまでの各記述のうち，この見解の論拠又はそれと親和性を有するものを組み合わせたものは，後記１から５までのうちどれか。
ア．交互計算は，第三者に対する公示手段を有しない。
イ．当事者の意思に基づいて差押禁止財産を作ることは，許容すべきではない。
ウ．交互計算に組み入れた債権を譲渡することができないのは，その債権が交互計算の下における取引により生じたことの当然の結果である。
エ．交互計算に組み入れた債権については，当事者間に譲渡禁止の特約があると考えられる。
オ．第三者の保護は，債権者代位権に基づいて交互計算契約を解除する方法によって図ることができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2011",num:"54",subject:"syo",q:"約束手形の記載事項に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．手形の金額として二つの異なる金額を記載した場合，その手形は，無効となる。",c2:"２．確定日払の手形において，手形金額につき利息を生ずる旨の約定を記載した場合，その手形は，無効となる。",c3:"３．判例によれば，手形の満期として平年の２月２９日を記載した場合，その手形は，無効となる。",c4:"４．手形の金額として毎月末に一定金額ずつ支払う旨の記載をした場合でも，手形金額となる総額が確定していれば，その手形は，無効とはならない。",c5:"５．手形に満期の記載がない場合でも，その手形は，無効とはならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2011",num:"55",subject:"syo",q:`甲は，乙に対する売買代金の支払のために，乙を受取人とする確定日払の約束手形を作成して，乙に交付したところ，これを乙から預かった丙が，甲及び乙の同意なく，受取人乙の記載を抹消して受取人欄を空欄とした。この場合に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．この手形は，丙による受取人乙の記載の抹消により，白地手形となる。
イ．甲の手形金を支払う義務は，丙による受取人乙の記載の抹消により，消滅しない。
ウ．丙が受取人欄に自己の名前を記載して満期に甲に手形金の請求をした場合，甲は，丙に対し，手形金を支払う義務を負わない。
エ．丙が受取人欄に自己の名前を記載して満期前に丁に裏書をした場合において，その裏書が無担保裏書でないときは，丙に対する遡求権が発生する。
オ．手形上の権利が時効により消滅した場合，丙は，利得償還請求権を取得する。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2011",num:"56",subject:"mso",q:`除斥及び忌避に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．裁判所書記官は，忌避の対象にはなるが，除斥の対象とはならない。
イ．裁判官に対する忌避を理由があるとする決定に対しては，不服を申し立てることができない。
ウ．裁判官について忌避の原因があるときは，裁判所は，当事者の申立てがなくても，当該裁判官を職務の執行から排除する旨の決定をする。
エ．裁判官が自らに除斥の原因があることを知らずに合議体の構成員として訴訟手続に関与した場合，除斥の原因のない裁判官によって構成される裁判所が当該手続をやり直す必要がある。
オ．終局判決が確定したときは，その判決に関与した裁判官について除斥の原因があることを理由として，その判決に対し，再審の訴えをもって不服を申し立てることはできない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2011",num:"57",subject:"mso",q:"必要的共同訴訟に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．必要的共同訴訟において共同訴訟人の一人が死亡した場合，その者に訴訟代理人がいるときを除き，訴訟手続は，共同訴訟人の全員について中断する。",c2:"２．必要的共同訴訟の口頭弁論の期日に共同訴訟人の一部が欠席した場合，相手方は，準備書面に記載していない事実を主張することはできない。",c3:"３．必要的共同訴訟の口頭弁論の期日に共同訴訟人の一部が欠席した場合，出頭した共同訴訟人がその期日において自白をしても，欠席した共同訴訟人は，その後の期日において，その自白に係る事実を争うことができる。",c4:"４．必要的共同訴訟において共同訴訟人の一人について上訴期間が経過しても，他の共同訴訟人の上訴期間が経過していなければ，判決は全体として確定しない。",c5:"５．必要的共同訴訟において共同訴訟人の一人が上訴をすれば，共同訴訟人の全員に対する関係で判決の確定が遮断され，当該訴訟は全体として移審する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2011",num:"58",subject:"mso",q:"独立当事者参加に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．独立当事者参加をした者は，原告又は被告の共同訴訟人となる。",c2:"２．独立当事者参加をする者がすることができる請求は，当該請求について別訴を提起したときに原告と被告との間の訴訟事件が係属する裁判所に管轄があるものに限られる。",c3:"３．独立当事者参加について原告又は被告が異議を述べたときは，裁判所は，参加の許否について決定で裁判しなければならない。",c4:"４．独立当事者参加の申出は，第一審の口頭弁論の終結の時までにしなければならない。",c5:"５．独立当事者参加の申出が時機に後れた攻撃防御方法として却下されることはない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2011",num:"59",subject:"mso",q:"補助参加に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．被参加人が訴訟外で解除権を行使したとしても，被参加人が訴訟においてその事実を主張しない限り，補助参加人は，その事実を主張することができない。",c2:"２．貸主Ｘの借主Ｙに対する貸金返還請求訴訟において，Ｙの連帯保証人ＺがＹに補助参加した場合，Ｙが自白をしても，Ｚは，その自白に係る事実を争うことができる。",c3:"３．判例の趣旨によれば，補助参加人がする上告の提起は，被参加人が上告を提起することができる期間内にしなければならない。",c4:"４．Ｘは，その所有する建物をＹに賃貸し，Ｙは，Ｘの承諾を得てその建物をＺに転貸した。その後，Ｘが，Ｙの債務不履行を理由にＹとの建物賃貸借契約を解除したとして，Ｚに対し，建物の明渡しを求める訴えを提起した場合，Ｙは，Ｚに補助参加することができる。",c5:"５．当事者が補助参加について異議を述べた場合，補助参加人は，補助参加を許す旨の裁判が確定するまでの間は，訴訟行為をすることができない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"34"},{year:"2011",num:"60",subject:"mso",q:"当事者の法定代理人及び訴訟代理人（訴訟委任による訴訟代理人に限る。以下同じ。）に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．法定代理人は判決書の必要的記載事項であるが，訴訟代理人は判決書の必要的記載事項ではない。",c2:"２．法定代理人及び訴訟代理人の事実に関する陳述を当事者が直ちに取り消したときは，当該陳述は，その効力を生じない。",c3:"３．法定代理人が数人ある場合であっても，訴訟代理人が数人ある場合であっても，送達は，その一人にすれば足りる。",c4:"４．法定代理人が死亡した場合であっても，訴訟代理人が死亡した場合であっても，訴訟手続は中断する。",c5:"５．法定代理人は当該訴訟において証人となることができないが，訴訟代理人は当該訴訟において証人となることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"24"},{year:"2011",num:"61",subject:"mso",q:"訴状審査に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．訴状審査の結果として訴状に不備があることが判明した場合の補正命令は，裁判所書記官がする。",c2:"２．訴状審査の結果，訴えが不適法でその不備を補正することができないことが判明した場合，裁判長は，直ちに訴えを却下することができる。",c3:"３．訴状審査の結果として訴状が却下された場合であっても，訴えの提起による時効中断の効力が生ずる。",c4:"４．訴状における立証方法に関する記載も，訴状審査の対象となる。",c5:"５．当事者が法人である場合において，訴状にその代表者の記載があるかどうかは，訴状審査の対象となる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2011",num:"62",subject:"mso",q:"中間確認の訴えに関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．地方裁判所における中間確認の訴えは，書面でしなければならない。",c2:"２．中間確認の訴えによって，当事者間に争いがある訴訟要件の存否の確認を求めることはできない。",c3:"３．中間確認の訴えに対する裁判は，中間判決である。",c4:"４．中間確認の訴えを控訴審で提起する場合，相手方の同意は不要である。",c5:"５．他の裁判所の法定の専属管轄に属する請求は，中間確認の訴えの対象とすることができない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2011",num:"63",subject:"mso",q:`Ｘは，Ａから甲土地を買ったと主張して，甲土地を占有しているＹに対し，所有権に基づき甲土地の明渡しを求める訴えを提起したところ，Ｙは，Ａが甲土地を所有していたことは認めるが，Ａから甲土地を買ったのはＸではなくＢであると主張した。Ｙからこれ以外の主張がなかった場合における次のア及びイの裁判所の判決に関する後記１から４までの各記述のうち，判例の趣旨に照らし正しいものはどれか。
ア．裁判所は，証拠調べの結果，Ａから甲土地を買ったのはＸではなくＣであったとの事実を認定して，Ｘの請求を棄却する判決をした。
イ．裁判所は，証拠調べの結果，ＸはＡから甲土地を買った後にこれをＣに売ったとの事実を認定して，Ｘの請求を棄却する判決をした。`,c1:"１．ア及びイの判決は，いずれも弁論主義に反する。",c2:"２．アの判決は弁論主義に反しないが，イの判決は弁論主義に反する。",c3:"３．アの判決は弁論主義に反するが，イの判決は弁論主義に反しない。",c4:"４．ア及びイの判決は，いずれも弁論主義に反しない。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2011",num:"64",subject:"mso",q:`次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．被告が最初にすべき口頭弁論の期日に出頭しなかった場合には，原告が出頭していれば答弁書の陳述を擬制することができるが，原告が最初にすべき口頭弁論の期日に出頭しなかった場合には，被告が出頭していても訴状の陳述を擬制することはできない。
イ．当事者が故意又は重大な過失により時機に後れて提出した攻撃防御方法について，裁判所は，これにより訴訟の完結を遅延させることとなると認めたときは，相手方の申立てがなくても，却下の決定をすることができる。
ウ．当事者が文書提出命令に従わないときは，裁判所の決定により，過料に処されることがある。
エ．当事者照会に対し，相手方が正当な理由なく回答を拒んだときは，裁判所は，照会をした当事者の照会事項に関する主張を真実と認めることができる。
オ．当事者が適切な時期に攻撃防御方法を提出しないことにより訴訟を遅滞させたときは，裁判所は，その当事者に，その勝訴の場合においても，遅滞によって生じた訴訟費用の全部又は一部を負担させることができる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2011",num:"65",subject:"mso",q:"証拠調べに関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．裁判所は，証拠調べをするに当たり，訴訟関係又は証拠調べの結果の趣旨を明瞭にするため必要があると認めるときは，当事者の意見を聴いて，決定で，証拠調べの期日において専門的な知見に基づく説明を聴くために専門委員を手続に関与させることができる。",c2:"２．裁判所は，証拠保全として，文書の証拠調べ及び検証をすることはできるが，証人の尋問をすることはできない。",c3:"３．当事者が訴訟能力を欠く場合は，その当事者本人を尋問することはできない。",c4:"４．証人が正当な理由なく出頭しない場合，裁判所は，受命裁判官又は受託裁判官に裁判所外でその証人の尋問をさせることができる。",c5:"５．裁判所は，職権で当事者本人を尋問することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"15"},{year:"2011",num:"66",subject:"mso",q:`裁判上の陳述に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．所有権に基づく建物明渡請求訴訟の原告が，最初にすべき口頭弁論の期日において，被告との間で当該建物について使用貸借契約を締結したがその契約は終了した旨の陳述をしたのに対し，被告は，請求棄却を求め事実に対する認否は追って行う旨の答弁書を提出し，その期日には出頭しなかった。被告が次の口頭弁論の期日にも出頭しなかった場合，原告は，その期日において，使用貸借契約を締結した旨の陳述を撤回することができる。
イ．原告と被告との間に父子関係があると主張して提起された認知の訴えにおいて，被告が父子関係の存在の事実を認める旨の陳述をしたときは，裁判所は，その陳述に反する事実を認定することができない。
ウ．所有権に基づく建物明渡請求訴訟の原告が，原告本人の尋問において，被告が抗弁として主張した当該建物についての賃貸借契約締結の事実を認める旨の陳述をしたときは，裁判所は，その陳述に反する事実を認定することができない。
エ．判例の趣旨によれば，代理人による契約締結の事実を主張する原告が代理権授与の事実を証明するための証拠として委任状を提出し，被告がその成立の真正を認める旨の陳述をした場合であっても，裁判所は，当該委任状が真正に成立したものではないと認めることができ，被告は，その陳述をいつでも撤回することができる。
オ．所有権に基づく建物明渡請求訴訟の原告が，被告との間で当該建物について使用貸借契約を締結したがその契約は終了した旨の陳述をしたのに対し，被告は，当該建物はもともと自己の所有する建物であったと主張し，口頭弁論の終結に至るまで，原告が陳述した使用貸借契約締結の事実を援用しなかった。この場合，裁判所は，証拠調べの結果，当該使用貸借契約締結の事実が認められるとの心証を得ても，この事実を判決の基礎とすることができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2011",num:"67",subject:"mso",q:"文書の成立に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．公文書の成立の真否について疑いがあるときは，裁判所は，職権で，当該官庁又は公署に照会をすることができる。",c2:"２．法律関係を証する書面の成立の真否を確定するために確認の訴えを提起することはできない。",c3:"３．当事者が文書の成立の真正を筆跡の対照によって証明しようとする場合において，対照をするのに適当な相手方の筆跡がないときは，裁判所は，対照の用に供すべき文字の筆記を相手方に命ずることができる。",c4:"４．私文書は，本人又はその代理人の署名又は押印があるときは，真正に成立したものと推定される。",c5:"５．文書は，その方式及び趣旨により公務員が職務上作成したものと認めるべきときは，真正に成立した公文書とみなされる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"25"},{year:"2011",num:"68",subject:"mso",q:"Ａは，Ｙ会社で工員として勤務していたが，工場で就業中に事故に遭って死亡した。Ａの遺族であるＸは，Ｙ会社を被告として損害賠償を求める訴えを提起したが，事故の状況を立証するため，国の機関である労働基準監督署において保管されている調査報告書の提出を求める文書提出命令の申立てを検討している。この事例に関する次の１から４までの各記述のうち，判例の趣旨に照らし正しいものを２個選びなさい。",c1:"１．労働基準監督官が作成した調査報告書にＹ会社やその関係者の私人の秘密に関する記載があったとしても，これは公務員の職務上の秘密には当たらないので，国には同報告書を提出する義務がある。",c2:"２．労働基準監督官が作成した調査報告書中の調査担当者の意見が公務員の職務上の秘密に当たり，かつ，これが提出されると公務の遂行に著しい支障を生ずるおそれが具体的に存在する場合には，国には同報告書を提出する義務はない。",c3:"３．裁判所は，Ｘが提出を求めている調査報告書が，公務員の職務上の秘密に関する文書か否か，又はその提出により公務の遂行に著しい支障を生ずるおそれがあるか否かの判断をするため必要があると認めるときは，文書の所持者である国にその提示をさせることができる。",c4:"４．調査報告書について文書提出命令が出された場合，Ｙ会社は，証拠調べの必要性がないことを理由として，即時抗告をすることができる。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"23"},{year:"2011",num:"69",subject:"mso",q:"確定判決の効力に関する次の１から５までの各記述のうち，判例の趣旨に照らし正しいものを２個選びなさい。",c1:"１．土地賃貸人から提起された借地上に建物を所有する土地賃借人に対する建物収去土地明渡請求訴訟で請求を認容する判決が確定した場合，賃借人は，その後に提起した請求異議の訴えにおいて，建物買取請求権を行使し，その効果を異議の事由として主張することができる。",c2:"２．金銭消費貸借契約に基づく貸金返還請求訴訟で請求を認容する判決が確定した場合，借主は，その後に提起した請求異議の訴えにおいて，当該貸金返還請求訴訟の事実審の口頭弁論終結前に相殺適状にあった貸主に対する債権を自働債権とし，当該貸金返還請求訴訟に係る貸金債権を受働債権とする相殺の意思表示をし，その効果を異議の事由として主張することができない。",c3:"３．金銭消費貸借契約に基づく貸金返還請求訴訟で請求を認容する判決が確定した場合，借主は，その後に提起した請求異議の訴えにおいて，当該貸金返還請求訴訟の提起前に完成した当該貸金返還請求訴訟に係る貸金債権の消滅時効を援用して，その時効による消滅を異議の事由として主張することができない。",c4:"４．売買契約に基づく土地引渡請求訴訟で請求を認容する判決が確定した場合，売主は，その後に提起した請求異議の訴えにおいて，当該売買契約につき詐欺による取消権を行使し，その効果を異議の事由として主張することができる。",c5:"５．手形の所持人から提起された振出人に対するいわゆる白地手形に基づく手形金請求訴訟において，白地部分が補充されず，請求を棄却する判決が確定した場合，当該手形の所持人は，その後に提起した訴えにおいて，当該白地部分を補充して振出人に対し手形上の権利の存在を主張することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"13"},{year:"2011",num:"70",subject:"mso",q:"訴えの取下げ及び控訴の取下げに関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．判例の趣旨によれば，訴訟外で訴えの取下げの合意がされても，それだけでは，訴えの取下げの効力は生じない。",c2:"２．第一審判決に仮執行宣言が付された後，控訴審において訴えが取り下げられたときは，その仮執行宣言付判決は，その効力を失う。",c3:"３．訴えの取下げも，控訴の取下げも，判決が確定するまで行うことができる。",c4:"４．控訴審において，当事者双方が口頭弁論の期日に欠席した場合において，１か月以内に期日指定の申立てをしないときは，控訴の取下げがあったものとみなされる。",c5:"５．被控訴人が附帯控訴をしているときは，その同意がなければ，控訴の取下げをすることができない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"35"},{year:"2011",num:"71",subject:"mso",q:`請求の放棄及び認諾に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．和解の期日において，請求の放棄をすることはできない。
イ．受命裁判官によって行われている弁論準備手続の期日において，請求の放棄をすることはできない。
ウ．相手方が出頭していない口頭弁論の期日においても，請求の認諾をすることができる。
エ．請求の放棄は，１個の金銭請求の一部についてすることができる。
オ．請求の認諾は，相手方が反対給付を履行することを条件にしてすることができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2011",num:"72",subject:"mso",q:"Ｘは，Ｙに１０００万円を貸し付けたとして，Ｙに対して，そのうち４００万円の貸金の返還を求める訴えを提起した。これに対し，Ｙは，請求棄却の判決を求め，当該貸付けの事実を否認するとともに，消滅時効又は相殺による当該貸金債権の消滅を主張した。この事例に関する次の１から５までの各記述のうち，判例の趣旨に照らし正しいものを２個選びなさい。",c1:"１．第一審裁判所が，ＸのＹに対する貸付けの事実を認めた上で，Ｙの主張する消滅時効を理由にＸの請求を全部棄却した場合，Ｙは，貸付けの事実を認めたことを不服として控訴することができる。",c2:"２．第一審裁判所がＸの請求を全部認容した場合，Ｘは，Ｙに対する請求を１０００万円に拡張するために控訴することができる。",c3:"３．第一審裁判所がＹの主張する相殺を理由にＸの請求を全部棄却した場合，Ｙは，これを不服として控訴することができる。",c4:"４．第一審裁判所がＸの請求を全部認容し，Ｙがこれを不服として控訴した場合，Ｘは，附帯控訴の方式により，請求を１０００万円に拡張することができる。",c5:"５．第一審裁判所が，Ｘの請求を全部認容したが，訴訟費用の一部をＸの負担とした場合，Ｘは，訴訟費用の負担の裁判を不服として控訴することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"34"},{year:"2011",num:"73",subject:"mso",q:"再審に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．控訴審において控訴を棄却する判決が確定した場合には，これに対する再審の訴えは第一審の判決に対してしなければならない。",c2:"２．当事者が控訴により第一審の判決が前に確定した判決と抵触する旨の主張をしたが，控訴が棄却されて，判決が確定した場合には，当該確定判決に対して同一の事由によって再審の訴えを提起することはできない。",c3:"３．再審の訴えを提起した当事者は，再審の訴状に記載した不服の理由を変更することはできない。",c4:"４．再審開始の決定に対しては，不服を申し立てることができない。",c5:"５．再審開始の決定後の再審理の結果，再審の対象となった確定判決が正当であると判断した場合には，裁判所は，改めて同一内容の判決をしなければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2011",num:"74",subject:"mso",q:"Ｘは，薬剤製造販売業者Ｙが販売した医薬品を摂取したため，健康被害が生じたと主張しているが，Ｙは，医薬品と健康被害との間の因果関係を争っている。そこで，Ｘは全国の同様の被害を主張している者に呼び掛けて被害者の会を設立したところ，その会員数は１０００名を超えた。Ｘは，全国の会員らと共にＹを被告として損害賠償を求める訴えを提起することにしている。この事例に関する次の１から４までの各記述のうち，判例の趣旨に照らし正しいものを２個選びなさい。",c1:"１．Ｘらは，Ｙの住所地にかかわらず，Ｘらの住所地を管轄する各地方裁判所に訴えを提起することができるが，裁判所は，訴訟の著しい遅滞を避け，又は当事者間の衡平を図るため必要があると認めるときは，申立てにより又は職権で，訴訟の全部又は一部を他の管轄裁判所に移送することができる。",c2:"２．Ｘらの中には弁護士費用を支払う資力のない者もいる。しかし，弁護士費用は損害としてＹに請求することができるから，裁判所は，訴え提起の手数料や送達費用，鑑定費用等について訴訟上の救助を認めるか否かの判断において，弁護士費用を支払う資力がないことを考慮することはできない。",c3:"３．Ｘらは，Ｙが販売した医薬品によって健康被害が生じたことを，個々の原告ごとに立証しなければならないが，訴訟上の因果関係の立証は，一点の疑義も許されない自然科学的証明ではなく，経験則に照らして全証拠を総合検討し，特定の事実が特定の結果発生を招来した関係を是認し得る高度の蓋然性を証明することであり，その判定は，通常人が疑いを差し挟まない程度に真実性の確信を持ち得るものであることを必要とし，かつ，それで足りるものである。",c4:"４．Ｘらに損害が生じたことは認められても，その損害額の立証が極めて困難であるときは，裁判所は，口頭弁論の全趣旨及び証拠調べの結果に基づき，相当な損害額を認定することができるが，損害額の立証が不十分であるとして請求を棄却することもできる。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"13"},{year:"2011",num:"1",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討し，正しいものを２個選びなさい。",c1:"１．甲は，乙から商品を購入する際，偽造通貨を真正な通貨のように装って乙に代金として交付した。甲には詐欺罪と偽造通貨行使罪が成立し，両罪は観念的競合となる。",c2:"２．甲は，自動販売機に投入して飲料水と釣銭を不正に得る目的で，外国硬貨の周囲を削って５００円硬貨と同じ大きさにした。甲には通貨偽造罪が成立する。",c3:"３．甲は，警察官から道路交通法違反（無免許運転）の疑いで取調べを受けた際，交通事件原票中の供述書欄に，あらかじめ承諾を得ていた実兄乙の名義で署名指印した。甲には有印私文書偽造罪が成立する。",c4:"４．甲は，当選金を得る目的で，外れた宝くじの番号を当選番号に改ざんした。甲には有印私文書変造罪が成立する。",c5:"５．甲は，運転中に警察官に免許証の提示を求められたときに提示するつもりで，偽造された自動車運転免許証を携帯して自動車の運転を開始した。甲には偽造公文書行使罪は成立しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"35"},{year:"2011",num:"2",subject:"kei",q:`次のアからオまでの各事例を判例の立場に従って検討し，（ ）内の甲の行為とＶの死亡との間に因果関係が認められる場合には１を，認められない場合には２を選びなさい。
ア．甲は，深夜，高速道路上で自動車（甲車）を運転中，大型トレーラー（乙車）を運転中の乙とトラブルになり，乙車の進路を妨害した上，追越車線上に乙車を停止させた。甲は，甲車から降り，乙を降車させた上，路上で乙に暴行を加えた後，甲車を運転して立ち去った。乙は，甲が立ち去った後，甲に奪われないためにズボンのポケットにエンジンキーを入れていたのを失念し，乙車を追越車線上に停車させたまま，エンジンキーを探していた。甲が立ち去ってから約５分後，後方から自動車を運転してきたＶは，乙車を発見するのが遅れて自車を追突させ，Ｖはそれにより死亡した。（甲が乙車を追越車線上に停止させた行為）
イ．甲は，人通りの多い路上でＶとけんかになり，Ｖの顔面を殴打したところ，Ｖは路上に転倒し，脳震とうを起こして一時的に意識を失った。甲がＶを放置して逃走した後，日頃からＶに恨みを持っていた乙が通り掛かり，意識を失っているＶの腹部を多数回足で蹴ったところ，Ｖは乙のこの暴行で生じた内臓の出血により死亡した。（甲がＶの顔面を殴打して転倒させた行為）
ウ．甲は，高速道路のパーキングエリアに駐車中の自動車内で，Ｖ女と口論になり，感情が高ぶってＶ女の顔面を平手で１回殴打した。Ｖ女は，腹を立てて一人で帰宅しようと考え，車外に出て，高速道路の本線を横断し，反対車線側に設置された高速バスの停留所に行こうとしたところ，本線上を走行してきた乙運転の自動車にはねられ，全身打撲により死亡した。（甲が車内でＶ女を殴打した行為）
エ．甲は，Ｖを不法に逮捕した上，自動車後部のトランク内にＶを監禁した状態で同車を発進させ，信号待ちのため路上で停車中，居眠り運転をしていた乙が自車を甲の運転する車両に追突させたため，Ｖは追突による全身打撲により死亡した。（甲が運転中の自動車のトランク内にＶを監禁していた行為）
オ．甲は，Ｖの後頸部に割れたビール瓶を突き刺し，Ｖに重篤な頸部の血管損傷等の傷害を負わせたため，Ｖは病院に搬送された。Ｖは，病院で手術を受け，容体が一旦は安定したが，医師からなお予断を許さないから安静を続けるように指示されていたにもかかわらず，医師の指示に従わずに病室内を動き回ったため，当初の傷害の悪化による脳機能障害により死亡した。（甲がＶの後頸部をビール瓶で突き刺した行為）`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"12211"},{year:"2011",num:"3",subject:"kei",q:"次の１から５までの各事例における甲の罪責について判例の立場に従って検討し，乙に対する詐欺罪（刑法第２４６条）が甲に成立しないものを２個選びなさい。",c1:"１．甲は，乙とトランプ賭博を行った際，乙の手札の内容が分かるよう不正な細工を施したトランプカードを用いて乙を負けさせ，乙に１００万円の支払債務を負担させた。",c2:"２．甲は，１５歳の乙がふだんから多額の現金を持ち歩いているのを知っていたことから，同人の知識や思慮が足りないことに乗じて現金を手に入れようと考え，乙に対し，借りた現金を返す意思もないのに返す意思があるように装って１０万円の借金を申し込み，これを誤信した乙から現金１０万円の交付を受けた。",c3:"３．甲は，乙宅の金品を手に入れようと考え，乙宅で乙と歓談中，「火事だ。」と嘘を言い，乙がその旨誤信して外に逃げた隙に乙宅から現金を持ち去った。",c4:"４．甲は，パチンコ店において，通常の方法によってパチンコ台で遊技しているように装って同店従業員乙の目を欺き，特殊な器具を使ってパチンコ台を誤作動させてパチンコ玉を排出させ，その占有を取得した。",c5:"５．甲は，乙に対し，乙の居宅は耐震補強工事をしないと地震の際に危険である旨嘘を言い，その旨乙を誤信させて必要のない工事契約を締結させたが，乙には資金がなかったことから，乙が甲の妻丙が経営する家具店から家具を購入したように仮装して，その購入代金について乙と信販会社との間で立替払契約を締結させ，これに基づき，同信販会社から丙名義の預金口座に工事代金相当額の振込みを受けた。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"34"},{year:"2011",num:"4",subject:"kei",q:`学生Ａと学生Ｂは，次の【事例】について，後記【会話】のとおり議論している。【会話】中の①から⑦の（ ）内に，後記ａからｎまでの【語句群】から適切な語句を入れた場合，（ ）内に入るものの組合せとして正しいものは，後記１から５までのうちどれか。
【事 例】
　甲は，過去数回，飲酒酩酊の上，正常な運転ができない状態で自動車を運転し，物損事故を起こして運転免許取消処分を受けていたが，運転免許を再取得しないまま，自動車の運転を続けていた。
　ある日，甲は，自動車を運転して居酒屋に行き，同居酒屋で飲酒し始めたが，仮に酩酊して正常な運転ができない状態になっても，自動車を運転して帰宅するつもりであった。
　甲は，同居酒屋で日本酒１升を飲み，酩酊して是非善悪の識別能力及びその識別に従って行動を制御する能力を失った状態で，帰宅するために自動車の運転を開始した。しかし，甲は，飲酒酩酊により正常な運転ができなかったため，自車を歩道上に乗り上げさせて歩行中の乙を跳ね飛ばし，乙を死亡させた。
【会 話】
学生Ａ．この事例は，構成要件としては，（①）罪に当てはまりそうだけど，甲は，運転開始時，是非善悪の識別能力及びその識別に従って行動を制御する能力を失った状態だね。
学生Ｂ．そうすると，運転開始時に甲は（②）がなかったことになるから，甲は不可罰になるのだろうか。
学生Ａ．甲が（②）に影響が出ない程度に飲酒して，正常な運転が困難な状態で自動車を運転していたら（①）罪が成立するのに，この事例が不可罰になるなんて納得できないな。
学生Ｂ．こういう場合に，甲の可罰性を根拠付ける理論として，（③）があったね。
学生Ａ．確か「直接結果を惹起した行為の際には（②）がなくても，その原因となった行為の際に完全な（②）があれば，完全な責任が問いうる。」という理論だったよね。
学生Ｂ．この理論の根拠は何だろう。
学生Ａ．（④）を維持しつつ，構成要件該当事実を原因行為まで遡及させる立場と，（④）の例外を認め，責任だけを原因行為時に遡及させる立場があるよね。
学生Ｂ．（②）を欠いた自分を道具として利用すると捉え，（⑤）と同様に考える見解は，前者の立場に分類されるね。
学生Ａ．だけど，甲が乙を自動車ではねた時点で甲自身が道具といえるか問題となる場合として，甲が（⑥）だった場合があるね。
学生Ｂ．確かに，道具といえるか問題があるね。判例は，（⑥）の場合，（③）の理論を（⑦）よね。
【語句群】
ａ．業務上過失致死
ｂ．危険運転致死
ｃ．責任能力
ｄ．行為能力
ｅ．原因において違法な行為
ｆ．原因において自由な行為
ｇ．行為と責任の同時存在の原則
ｈ．罪刑法定主義
ｉ．共謀共同正犯
ｊ．間接正犯
ｋ．心神喪失
ｌ．心神耗弱
ｍ．適用している
ｎ．適用していない`,c1:"１．①ａ ②ｃ ③ｅ ④ｇ ⑤ｊ ⑥ｌ ⑦ｍ",c2:"２．①ａ ②ｄ ③ｆ ④ｇ ⑤ｉ ⑥ｌ ⑦ｎ",c3:"３．①ｂ ②ｃ ③ｆ ④ｇ ⑤ｊ ⑥ｌ ⑦ｍ",c4:"４．①ｂ ②ｃ ③ｆ ④ｈ ⑤ｉ ⑥ｋ ⑦ｎ",c5:"５．①ｂ ②ｄ ③ｅ ④ｇ ⑤ｊ ⑥ｋ ⑦ｍ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2011",num:"5",subject:"kei",q:"次の１から５までの各事例における甲の罪責について，判例の立場に従って検討し，甲に危険運転致傷罪が成立するものを２個選びなさい。",c1:"１．甲は，自動車を運転中，前方の交差点に設置された対面信号機が赤色表示に変わったのに気付かず，時速約５０キロメートルで同交差点に進入したところ，歩行者用信号機の青色表示に従って前方の横断歩道上を歩行していた乙に自車を衝突させ，乙に傷害を負わせた。",c2:"２．甲は，乙を助手席に同乗させて雨の降る山道を自動車で走行中，指定最高速度が時速４０キロメートルであることや，降雨のため路面が滑りやすい状況であることを認識しつつも，対向車もなかったので事故を起こすことはないだろうと思い，時速約１００キロメートルの速度で急カーブに進入したところ，後輪が滑走したために同カーブを曲がりきれず，自車を道路脇の樹木に衝突させ，乙に傷害を負わせた。",c3:"３．甲は，飲酒の影響で歩行が困難な状態であることを認識しながら自動車の運転を開始し，運転開始後も自車が激しく蛇行していることを認識しながらも，運転技術に自信があったので，事故を起こすことはないだろうと思い運転を継続したところ，飲酒の影響により，自車を蛇行させて，道路の右脇を歩行していた乙に衝突させ，乙に傷害を負わせた。",c4:"４．甲は，交通違反を繰り返して自動車運転免許の取消処分を受けていたものの，自動車の運転経験が長く運転技術に自信があったので，事故を起こすことはないだろうと思って自動車の運転を始めたが，運転中脇見をしてハンドル操作を誤り，自車を対向車線に進出させて乙運転の対向車と衝突させ，乙に傷害を負わせた。",c5:"５．甲は，片側１車線の道路を自動車を運転して進行中，時速約５０キロメートルで走行する乙運転の先行車を追い越すに当たり，対向車両が接近しており，追越しを完了させるには乙車の直前に進入する必要があったので，同車の通行を妨害することになるかもしれないと思いつつ，対向車線に自車を進出させて追越しを開始し，乙車の直前に自車を進入させたところ，乙が驚いてハンドルを左に切り，乙車をガードレールに衝突させ，乙に傷害を負わせた。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"23"},{year:"2011",num:"6",subject:"kei",q:"罪数に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．甲は，夜間，車道上にロープを張って，車道を閉塞したところ，自動二輪車を運転して同所を通り掛かった乙がこれに気付かないまま同ロープに引っ掛かり，転倒して負傷した。この場合，甲に乙が負傷をすることについて故意があれば，甲には往来妨害罪と傷害罪が成立し，両罪は牽連犯となる。",c2:"２．甲は，乙を殺害する目的で乙方に侵入し，屋内にいた乙を殺害した上，たまたま屋内に居合わせた丙及び丁も殺害した。この場合，甲には，住居侵入罪並びに乙，丙及び丁に対する殺人罪が成立し，住居侵入罪と乙に対する殺人罪が牽連犯として一罪となり，丙及び丁に対する殺人罪と併合罪になる。",c3:"３．甲は，眼鏡を掛けた乙の顔面を，眼鏡の上から拳で殴打し，眼鏡を損壊するとともに，乙に全治１週間を要する顔面打撲の傷害を負わせた。この場合，甲には傷害罪と器物損壊罪が成立し，両罪は併合罪となる。",c4:"４．甲は，真実は，自己の経営する会社の運転資金に使う目的で，質権を設定するつもりもないのに，乙に対して，「２０００万円をＡ銀行の甲名義預金口座に振り込んでほしい。振り込まれた２０００万円については，見せ金として使用するので，口座から引き出さないし，振込み後，質権も設定する。」などと嘘を言い，これを信じた乙は，Ａ銀行の甲名義預金口座に２０００万円を振り込んだ。その数日後，甲は，同預金に関するＡ銀行名義の質権設定承諾書１通を偽造し，乙に交付した。この場合，甲には詐欺罪，有印私文書偽造及び同行使罪が成立し，これらは牽連犯として一罪となる。",c5:"５．甲は，乙を監禁した上で現金を恐喝しようと企て，乙をマンションの一室に監禁し，暴行・脅迫を加えて現金を脅し取った。この場合，甲には監禁罪と恐喝罪が成立し，両罪は併合罪となる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2011",num:"7",subject:"kei",q:`強盗殺人罪に関する次の【見解】Ａ説ないしＣ説に従って後記【事例】ⅠないしⅢにおける甲の罪責を検討し，後記１から５までの【記述】のうち，正しいものを２個選びなさい。（解答欄は，，順不同）
【見 解】
強盗殺人罪が成立するためには，
Ａ説：殺人行為が強盗の機会に行われなければならないとする。
Ｂ説：殺人行為が強盗の手段でなければならないとする。
Ｃ説：殺人行為が強盗の手段である場合に限らず，事後強盗（刑法第２３８条）類似の状況における殺人行為も含むとする。
【事 例】
Ⅰ．甲は，強盗の目的で，乙に対し，持っていたナイフを突き付け，「金を出せ。出さなかったら殺す。」などと申し向け，反抗を抑圧された乙から現金を奪い取った後，逃走しようとしたが，乙に追跡され，犯行現場から約１０メートル逃げたところで，捕まらないようにするため，殺意をもって乙の胸部を刃物で突き刺し，乙を即死させた。
Ⅱ．甲は，乙所有の自動車１台を窃取し，犯行翌日，同車を犯行場所から約１０キロメートル離れた場所で駐車させ，用事を済ませた後，同車に戻ってきたところを乙に発見され，同車を放置して逃走した。甲は，乙に追跡されたので，捕まらないようにするため，殺意をもって乙の胸部を刃物で突き刺し，乙を即死させた。
Ⅲ．甲は，乙方において，乙をロープで縛り上げた上，乙所有の現金を奪い取った後，乙方から逃走しようとしたが，乙方玄関先において，たまたま乙方を訪問した丙と鉢合わせとなり，丙が悲鳴を上げたことから，犯行の発覚を恐れ，殺意をもって丙の胸部を刃物で突き刺し，丙を即死させた。
【記 述】`,c1:"１．Ａ説によれば，事例Ⅰでは強盗殺人罪が成立する。",c2:"２．Ａ説によれば，事例Ⅲでは強盗殺人罪は成立しない。",c3:"３．Ｂ説によれば，事例Ⅱでは強盗殺人罪は成立しない。",c4:"４．Ｂ説によれば，事例Ⅲでは強盗殺人罪が成立する。",c5:"５．Ｃ説によれば，事例Ⅱでは強盗殺人罪が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"13"},{year:"2011",num:"8",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．甲は，昼間の電車内において，多数の乗客が見ている状態で，恋人の乙が着ていたコートの前を広げさせてその陰部を露出させた場面を写真撮影した。同写真撮影について乙があらかじめ甲に対して承諾していた場合，公然わいせつ罪の違法性が阻却され，甲には同罪の共同正犯は成立しない。",c2:"２．甲は，重病で苦しんでいる妻乙に同情して，同人の首を絞めて窒息死させた。乙の殺害について乙があらかじめ甲に対して承諾していた場合，甲の行為は，いずれの構成要件にも該当せず，犯罪は成立しない。",c3:"３．甲は，乙が保険金をだまし取るのに協力する目的で，乙の右手の親指を包丁で切断した。親指の切断について乙があらかじめ甲に対して承諾していた場合，甲の行為は，傷害罪の構成要件に該当せず，同罪は成立しない。",c4:"４．甲は，１１歳の乙の陰部を指で弄ぶなどのわいせつな行為を行った。わいせつな行為をすることについて乙があらかじめ甲に対して承諾していた場合，甲の行為は，強制わいせつ罪の構成要件に該当せず，同罪は成立しない。",c5:"５．甲は，妊娠している妻乙と話し合った上，薬物を使用して堕胎させた。堕胎について乙があらかじめ甲に対して承諾していた場合，甲の行為は，不同意堕胎罪の構成要件に該当せず，同罪は成立しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2011",num:"9",subject:"kei",q:`次の【事例】における甲の罪責に関する後記１から５までの【記述】を判例の立場に従って検討し，正しいものを２個選びなさい（ただし，事例において，公共の危険は発生したものとする。）。
【事 例】
甲は，乙が所有し単身で居住している木造家屋の玄関前において，同所に駐車中の乙所有の自動二輪車の車体にガソリンをまいた上，新聞紙にライターで点火し，これを同車に投げ付け，同車を炎上させたところ，火が上記家屋に燃え移って全焼した。
【記 述】
`,c1:"１．火が家屋に燃え移ることを甲が認識・認容していなかった場合，同家屋に対する延焼罪が成立する。",c2:"２．甲は，火が家屋に燃え移ることを認識・認容していたが，同家屋は居住する者のいない空き家であって同家屋内には誰もいないものと誤信していた場合，他人所有非現住建造物等放火罪が成立する。",c3:"３．火が家屋に燃え移ること及び同家屋に乙が居住していることを甲が認識・認容していた場合において，甲と乙が，同家屋に掛けられていた火災保険の保険金をだまし取るため，放火することを共謀していたときは，他人所有現住建造物等放火罪が成立する。",c4:"４．火が家屋に燃え移ること及び同家屋に乙が居住していることを甲が認識・認容していた場合において，現実には同家屋内に乙がいたのに，乙は外出中で同家屋内には誰もいないものと甲が誤信していたときは，現住建造物等放火罪が成立する。",c5:"５．甲は，火が家屋に燃え移ることを認識・認容していただけでなく，同家屋内で就寝中の乙が焼け死ぬことを認識・認容していた場合，現実に乙が焼死したときには，現住建造物等放火罪と殺人罪が成立し，後者は前者に吸収される。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"24"},{year:"2011",num:"10",subject:"kei",q:`次のアからオまでの各記述を判例の立場に従って検討し，正しい場合には１を，誤っている場合には２を選びなさい。
ア．甲は，乙を毒殺する目的で毒入り菓子をお歳暮として郵送するため，郵便局の窓口でその菓子を包んだ小包の郵送を申し込んだが，誤って実際には存在しない住所を宛先として記載したために同小包はどこにも配達されずに甲宅に送り返された。この場合，甲には殺人未遂罪が成立する。
イ．甲は，自己が居住する建物に付した火災保険の保険金を保険会社からだまし取る目的で同建物に放火したが，保険金を請求するに至らなかった。この場合，甲には詐欺未遂罪は成立しない。
ウ．甲は，乙の住居内に侵入し，タンスの引き出しを開けるなどして金目の物を探したが，見付けることができないうちに乙に発見された。甲は，逮捕を免れるため，乙に対して包丁を示して脅迫し，屋外に逃走したが，通報により駆けつけた警察官に現場付近で逮捕された。この場合，甲には事後強盗未遂罪が成立する。
エ．甲は，勾留状の執行により拘禁されている未決の被告人であったところ，逃走の目的で拘禁場の換気孔の周辺の壁部分を削り取って損壊したが，いまだ脱出可能な穴を開けるに至らず，逃走行為自体に及ばないうちに検挙された。この場合，甲には加重逃走未遂罪は成立しない。
オ．甲は，他人が居住する建物に放火することを企て，３０分後に発火して導火材を経て同建物に火が燃え移るように設定した時限発火装置を同建物に設置したが，設定した時刻が到来する前に発覚して同装置の発火に至らなかった。この場合，甲には現住建造物等放火未遂罪は成立しない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"21122"},{year:"2011",num:"11",subject:"kei",q:`偽証罪に関する次の【見解】に従って後記１から５までの【記述】を検討し，誤っているものを２個選びなさい。
【見 解】
Ａ説：偽証罪は，宣誓した証人が客観的事実に反する陳述をした場合に成立する。
Ｂ説：偽証罪は，宣誓した証人が自己の記憶に反して陳述をした場合に成立する。
【記 述】`,c1:"１．証人が自己の記憶に反する事実を客観的事実に反すると思いながら陳述したが，それが客観的事実に合致していた場合，Ａ説によれば，偽証罪は成立しない。",c2:"２．上記１の場合，Ｂ説によれば，偽証罪は成立しない。",c3:"３．証人が客観的事実に反しないと思いながら自己の記憶どおりに陳述したが，それが客観的事実に合致していない場合，Ａ説によれば，偽証罪が成立する。",c4:"４．証人が自己の記憶に反する事実を客観的事実に反すると思いながら陳述し，それが客観的事実に合致していない場合，Ａ説によっても，Ｂ説によっても，偽証罪が成立する。",c5:"５．証人が自己の記憶に反する事実を客観的事実に反しないと信じて陳述したが，それが客観的事実に合致していない場合，Ａ説によれば，偽証罪は成立しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"23"},{year:"2011",num:"12",subject:"kei",q:`次の１から５までの各記述のうち，誤っているものはどれか。
（参照条文）刑法
第２３５条 他人の財物を窃取した者は，窃盗の罪とし，１０年以下の懲役又は５０万円以下の罰金に処する。
第２４０条 強盗が，人を負傷させたときは無期又は６年以上の懲役に処し，死亡させたときは死刑又は無期懲役に処する。`,c1:"１．前科のない甲が強盗致傷罪を犯して同罪で起訴された場合，裁判所は，酌量減軽をする事由があれば，甲に対し，懲役３年，５年間執行猶予（保護観察なし）の判決を宣告することができる。",c2:"２．前科のない甲が窃盗罪を犯して同罪で起訴された場合，裁判所は，甲に対し，罰金３０万円の判決を宣告するに当たり，その執行を猶予することができる。",c3:"３．甲は，判決により，懲役２年，３年間執行猶予（保護観察なし）に処せられたが，その後犯した窃盗罪で起訴され，前記執行猶予期間の経過前に判決宣告日を迎えた。この場合，裁判所は，甲に対し，懲役２年，３年間執行猶予（保護観察付き）の判決を宣告することができる。",c4:"４．甲は，判決により，懲役１年，２年間執行猶予（保護観察なし）に処せられたが，その後犯した窃盗罪で前記執行猶予期間の経過前に起訴され，同執行猶予期間経過後に判決宣告日を迎えた。この場合，裁判所は，甲に対して，懲役３年，５年間執行猶予（保護観察付き）の判決を宣告することができる。",c5:"５．懲役刑に処せられた甲が，その執行終了の１年後に犯した窃盗罪で起訴され，執行終了後５年を経過する前に判決の宣告を受ける場合，裁判所は，甲に対して，執行猶予付きの懲役刑を言い渡すことができない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2011",num:"13",subject:"kei",q:"親族間の犯罪に関する次の１から５までの各記述を判例の立場に従って検討し，誤っているものを２個選びなさい。",c1:"１．甲は，同居している甥の乙が盗んできた宝石を，その事情を知りながら，乙から無償で譲り受けた。この場合，甲には盗品等無償譲受け罪が成立するが，その刑は免除される。",c2:"２．甲は，別居している祖父乙から現金を脅し取った。この場合，甲には恐喝罪が成立するが，その刑は免除される。",c3:"３．甲は，別居している乙（５歳）の祖母であり，家庭裁判所によって乙の未成年後見人に選任され，後見人の事務として乙の預金口座を管理していたが，その口座から現金を引き出して自らのために費消した。この場合，甲には業務上横領罪が成立するが，その刑は免除される。",c4:"４．甲は，Ａ株式会社の代表取締役である実父乙が管理するＡ社所有の絵画を窃取した。この場合，甲には窃盗罪が成立し，その刑は免除されない。",c5:"５．甲は，同居している実父乙を被告人とする窃盗事件の公判期日に，証人として出廷し，宣誓の上，乙の利益のために偽証をした。この場合，甲には偽証罪が成立するが，その刑を免除することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"35"},{year:"2011",num:"14",subject:"kei",q:`両罰規定に関する次の【見解】Ａ説ないしＣ説に従って，後記【罰則】の適用に関する後記１から５までの【記述】を検討し，誤っているものを２個選びなさい。
【見 解】
Ａ説：両罰規定は，法人が無過失であっても代表者や従業者の責任が法人に転嫁されることを政策的に認めたものである。
Ｂ説：法人の代表者の違反行為は法人の違反行為であり，法人の従業者の違反行為については，法人の代表者の当該従業者に対する選任監督上の過失が推定され，過失責任に基づき法人が処罰される。
Ｃ説：法人の代表者の違反行為は法人の違反行為であり，法人の従業者の違反行為については，法人の代表者の当該従業者に対する選任監督上の過失が擬制され，過失責任に基づき法人が処罰される。
【罰 則】
出入国管理及び難民認定法第７３条の２第１項
次の各号のいずれかに該当する者は，３年以下の懲役若しくは３００万円以下の罰金に処し，又はこれを併科する。
一 事業活動に関し，外国人に不法就労活動をさせた者
二 （以下略）
同法第７６条の２
法人の代表者又は法人若しくは人の代理人，使用人その他の従業者が，その法人又は人の業務に関して第７３条の２（中略）の罪（中略）を犯したときは，行為者を罰するほか，その法人又は人に対しても，各本条の罰金刑を科する。
【記 述】`,c1:"１．Ａ説によれば，甲社代表取締役乙が，自社の事業活動に関し，外国人に不法就労活動をさせた場合，甲社に出入国管理及び難民認定法違反の罪（同法第７３条の２第１項，第７６条の２，以下「不法就労助長罪」という。）が成立する。",c2:"２．Ａ説によれば，甲社従業者丙が，自社の事業活動に関し，外国人に不法就労活動をさせた場合，甲社に不法就労助長罪が成立する。",c3:"３．Ｂ説によれば，甲社代表取締役乙が，自社の事業活動に関し，外国人に不法就労活動をさせた場合，甲社の乙に対する選任監督上の過失がないことが立証されない限り，甲社に不法就労助長罪が成立する。",c4:"４．Ｂ説によれば，甲社従業者丙が，自社の事業活動に関し，外国人に不法就労活動をさせた場合，甲社代表取締役乙の丙に対する選任監督上の過失がないことが立証されない限り，甲社に不法就労助長罪が成立する。",c5:"５．Ｃ説によれば，甲社従業者丙が，自社の事業活動に関し，外国人に不法就労活動をさせた場合，甲社代表取締役乙の丙に対する選任監督上の過失がないことが立証されない限り，甲社に不法就労助長罪が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"35"},{year:"2011",num:"15",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討し，正しいものを２個選びなさい。",c1:"１．甲は，人通りの多い路上で，不特定多数の通行人を勧誘して客を集めた上，近隣のビルの１室において，外部との出入りを制限した状態で，自らが雇用した男女に全裸で性行為を行わせ，それを６名の客に有料で観覧させて利益を得た。この場合，甲に公然わいせつ罪の共同正犯は成立しない。",c2:"２．甲は，自己の所有するパソコンからわいせつな画像データをサーバーに送信して記憶・蔵置させた上，不特定多数の者が，インターネットを経由して同わいせつ画像データをダウンロードして，パソコンの画面上に再生して閲覧することを可能にした。この場合，閲覧する者において，閲覧の際，画像データのダウンロード等の作業をする必要があったとしても，甲にわいせつ物公然陳列罪が成立する。",c3:"３．甲は，わいせつな映像が録画されたマスターＤＶＤを所持していたが，甲には，同マスターＤＶＤ内に記録されたわいせつな映像を客の注文に応じて他のＤＶＤに複写して販売する意図はあったものの，同マスターＤＶＤ自体を販売する意図はなかった。この場合，甲にわいせつ物販売目的所持罪は成立しない。",c4:"４．甲は，外国で販売する目的で，日本国内においてわいせつな写真を所持した。この場合，甲にわいせつ物販売目的所持罪が成立する。",c5:"５．甲は，わいせつな映像が録画されたＤＶＤを販売する目的で雑誌に広告を出し，申し込んできた複数の客から代金の振込みを受け，宅配便で配送する手続を採ったが，配送するトラックが途中で事故を起こしたため，同ＤＶＤは，客に届かなかった。この場合，甲にわいせつ物販売罪は成立しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"25"},{year:"2011",num:"16",subject:"kei",q:`業務上の占有者による横領行為に非占有者が加功した場合の罪責について，教授及び学生が次の【会話】のとおり議論している。【会話】中の①から⑤までの（ ）内に後記アからキまでの【発言】から適切な語句を入れた場合，正しいものの組合せは，後記１から５までのうちのどれか。
【会 話】
教授．保険会社の保険料集金担当従業員である甲が，同社の従業員ではない知人乙と共謀の上，集金した保険料を横領した事例のように，業務上の占有者に非占有者が加功した場合のそれぞれの罪責について，共犯と身分の観点から，どのようなことが問題になりますか。
学生．業務上横領罪の成否に関して，同罪は，単純横領罪との関係では（①）であり，他方，非占有者との関係では（②）となりますから，特に乙に対して，何罪が成立するのかが問題になります。
教授．判例ではこの事例はどのような結論になりますか。
学生．判例は，（③）としています。
教授．判例の立場に対しては，どのような批判がなされていますか。
学生．非身分者について罪名と科刑の分離を認めるのは妥当でないという批判がなされています。
教授．この点を克服するための考え方としては，どのようなものがありますか。
学生．刑法第６５条第１項は違法身分について規定し，同条第２項は責任身分について規定していると考え，業務上横領罪については，（④）と捉えた上で，この事例では（⑤）とする見解などがあります。
【発 言】
ア．占有の受託者という身分があることによって犯罪行為になる構成的身分犯
イ．業務者という身分があることによって刑が加重・減軽される加減的身分犯
ウ．占有の受託者たる身分は責任身分，業務者たる身分は違法身分
エ．占有の受託者たる身分は違法身分，業務者たる身分は責任身分
オ．刑法第６５条第１項により甲には業務上横領罪が，同条第２項により乙には単純横領罪がそれぞれ成立し，甲及び乙は単純横領罪の範囲で共犯となる
カ．刑法第６５条第１項により甲及び乙は業務上横領罪の共犯となり，同条第２項により乙に対しては単純横領罪の刑を科す
キ．刑法第６５条第１項により甲及び乙は単純横領罪の共犯となり，更に同条第２項により甲については業務上横領罪が成立する`,c1:"１．①ア ②イ ③カ ④ウ ⑤オ",c2:"２．①ア ②イ ③キ ④ウ ⑤オ",c3:"３．①イ ②ア ③オ ④エ ⑤カ",c4:"４．①イ ②ア ③カ ④エ ⑤キ",c5:"５．①イ ②ア ③キ ④ウ ⑤カ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2011",num:"17",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討し，正しいものを２個選びなさい（ただし，甲は，記述４を除いて，当初から，対象物が財産に対する罪に当たる行為によって領得されたものであることを認識していたものとする。）。",c1:"１．甲は，何者かがＡ社事務所から窃取した約束手形をＡ社に買い取らせる交渉を乙に依頼され，Ａ社と買取りの条件を交渉したところ，同手形はＡ社に売却された。この場合，甲には盗品等処分あっせん罪が成立する。",c2:"２．甲は，乙を教唆して丙所有の自動車を窃取させた後，乙に代金を支払って同自動車を買い受け， そ の引渡しを受けた。この場合，甲には，窃盗教唆罪が成立し，盗品等有償譲受け罪は成立しない。",c3:"３．甲は，乙が窃取した丙所有の自動車を乙から買って，乙に代金を支払ったが，乙が検挙されてしまい，乙から同車の引渡しを受けることができなかった。この場合，甲には盗品等有償譲受け罪が成立する。",c4:"４．甲は，乙からパソコンを預かり保管したが，その１か月後，同パソコンは，乙が丙から窃取したものであることを知ったにもかかわらず，乙のために保管を継続した。この場合，甲には盗品等保管罪が成立する。",c5:"５．甲は，１２歳の乙が電器店で窃取した携帯電話機を乙から買い，代金を支払ってその交付を受けた。この場合，甲には盗品等有償譲受け罪は成立しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"14"},{year:"2011",num:"18",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討し，誤っているものを２個選びなさい。",c1:"１．甲は，乙が第三者から盗んできた物を，盗品かもしれないと認識していたが，値段が安いのでそれでも構わないと思って有償で譲り受けた。この場合，甲には盗品等有償譲受け罪は成立しない。",c2:"２．甲は，殺意をもって乙の首を絞め，乙が気絶したのを見て既に窒息死したものと誤信し，乙を海に投げ込んだところ，乙は海中で溺死した。この場合，甲には殺人罪が成立する。",c3:"３．甲は，自己が経営する店において，わいせつな映像を録画したＤＶＤを販売したが，あらかじめ同ＤＶＤの映像を再生してその内容を認識していたものの，この程度ではわいせつ図画に当たらないと考えていた。この場合，甲にはわいせつ図画販売罪が成立しない。",c4:"４．甲は，パチンコ店の従業員乙が運搬していた同店の売上金の入ったかばんを強取するため，乙の後方から，乙の頭部を狙い，殺意をもってけん銃の弾丸を発射したところ，同弾丸は乙の肩を貫通した上，甲が認識していなかった通行人丙の腹部に命中し，乙と丙にそれぞれ傷害を負わせた。この場合，甲には，乙に対する強盗殺人未遂罪，丙に対する強盗殺人未遂罪がそれぞれ成立し，両罪は観念的競合となる。",c5:"５．甲は，乙に対して丙に暴行するよう教唆したところ，乙が丙の頭部を１回殴り，その結果，丙が転倒して地面に頭部を打ち付け，脳挫傷により死亡した。この場合，甲には傷害致死罪の教唆犯が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"13"},{year:"2011",num:"19",subject:"kei",q:`次の【事例】における甲の罪責を判例の立場に従って検討し，後記アからオまでの【罪名】のうち，その罪名に係る犯罪（共犯の場合を含む。）が成立するものには１を，成立しないものには２を選びなさい。
【事 例】
甲は，求人広告を見て乙と会い，乙から，銀行で架空人名義の預金口座を開設し，その預金通帳とキャッシュカードを手に入れて乙に渡すというアルバイトを依頼され，これを引き受けた。その際，甲は，乙から，預金口座を開設する際に身分証明書として呈示するため，甲の顔写真が印刷された架空人Ａ名義の運転免許証を作成する必要があると聞かされたので，甲の顔写真を乙に交付するとともに，甲の知人Ｂの住所をキャッシュカードの送付先として乙に教えた。乙は，不正に入手したＣ名義の真正な運転免許証の顔写真の上から甲の顔写真を貼り付け，氏名をＡ名義に，住所をＢの住所にそれぞれ書き換えるなどの加工を施し，甲の顔写真が貼付されたＡ名義の運転免許証を作成した。同免許証は，一見すると真正なものと見分けがつかないような精巧なものであった。数日後，甲は，乙から，前記運転免許証とＡの姓を刻した印鑑を受け取った。その後，甲は，銀行に行き，口座開設申込書にＡの氏名及びＢの住所等を書いてＡの印鑑を押した上，同銀行窓口係丙に対し，Ａを装い，同申込書を前記運転免許証と一緒に提出して口座開設を申し込んだ。丙は，甲がＡであることを疑うこともなく，かつ，前記運転免許証及び前記口座開設申込書の記載内容が虚偽であると知っていれば口座開設をしなかったのに，これらの内容が真実であるものと誤信し，Ａ名義の口座を開設する手続を行い，即日窓口で預金通帳を甲に交付し，キャッシュカードについては，Ｂの住所地宛てに郵送した。甲は，数日後に郵送されたキャッシュカードをＢから受け取った後，しばらくの間，自宅に通帳とキャッシュカードを保管し，その後，報酬と引換えに，預金通帳とキャッシュカードを乙に交付した。
【罪 名】
ア．有印公文書変造・同行使罪
イ．有印私文書偽造・同行使罪
ウ．詐欺罪
エ．有価証券偽造罪
オ．盗品等保管罪`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"21122"},{year:"2011",num:"20",subject:"kei",q:`次の【事例】の甲に対する刑法の適用に関する後記１から５までの【記述】を判例の立場に従って検討し，正しいものを２個選びなさい。
【事 例】
　甲は，日本国内に居住するＡ国民である。甲は，Ｂ国を訪れた際，同国内に居住する日本国民Ｖ１並びに日本国内に居住する日本国民Ｖ２及び同Ｖ３を殺害しようと考え，Ｂ国において，毒入りの酒（以下「毒入酒」という。）をＶ１方，Ｖ２方及びＶ３方に向けてそれぞれ発送し，その後日本に帰国した。
　Ｖ１宛ての毒入酒は，Ｖ１方に到達し，これをＢ国内で飲酒したＶ１及びその友人であるＢ国民Ｖ４は，それぞれ，同国内で薬物中毒により死亡した。
　Ｖ２宛ての毒入酒は，甲が発送手続の際，誤ってＶ２と同姓の日本国民Ｖ５の住所地を記載したことから，日本国内のＶ５方に配達され，Ｖ５は，Ｖ２宛ての配達物であることに気が付いたが，しばらく保管して誰からも連絡がなかったら自分で飲酒しようと思い，これを自宅に保管していた。
　Ｖ３宛ての毒入酒は，Ｖ３方に到達したが，配送途中の事故により，瓶が割れ，到達時には毒入酒がすべて無くなっていたことから，Ｖ３は，これを飲酒することができなかった。
【記 述】
（参照条文）刑法
第３条の２ この法律は，日本国外において日本国民に対して次に掲げる罪を犯した日本国民以外の者に適用する。
一 （略）
二 第１９９条（殺人）の罪及びその未遂罪
三～六 （略）`,c1:"１．Ｖ１に対する行為について刑法（殺人罪）が適用される。",c2:"２．Ｖ２に対する行為について刑法（殺人未遂罪）が適用される。",c3:"３．Ｖ３に対する行為について刑法（殺人未遂罪）が適用される。",c4:"４．Ｖ４に対する行為について刑法（殺人罪）が適用される。",c5:"５．Ｖ５に対する行為について刑法（殺人未遂罪）が適用される。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"15"},{year:"2011",num:"21",subject:"kso",q:`捜査の端緒に関する次のアからオまでの各記述のうち，誤っているものの組合せは，後記１から５までのうちどれか。
ア．捜査機関が犯罪があると思料するに至った理由を捜査の端緒というが，捜査の端緒には何ら制限がなく，刑事訴訟法に規定されたものに限られない。
イ．検視は，検察官にのみ認められた権限であるが，検察官は，検察事務官又は司法警察員に検視の処分をさせることができる。
ウ．親告罪については，有効な告訴の存在が起訴又は訴訟の条件となっているから，司法警察職員は，告訴がない間は捜査をすることができない。
エ．自首した犯人は，告訴又は告発と同様，自首を取り消すことができる。
オ．司法警察員は，自首を受けたときは，速やかにこれに関する書類及び証拠物を検察官に送付しなければならない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2011",num:"22",subject:"kso",q:`次の【事例】中の(ア)から(オ)までの下線部分につき，告訴として有効となる場合には１を，無効となる場合には２を選びなさい。ただし，判例がある場合には，それに照らして考えるものとする。
【事 例】
Ｖ（平成６年１２月５日生，１５歳）は，平成２２年２月１日，インターネット上で名誉を毀損される被害を受け，すぐに，この被害を母親であるＡに告げた。その際，Ｖは，Ａに，この被害を捜査機関に申告する意思及び犯人の処罰を求める意思がないことを告げた。それにもかかわらず，(ア)同月２日，Ａは，司法警察員Ｘに対し，Ｖが受けた被害を申告して犯人の処罰を求め，この内容を記載した告訴調書を作成してもらった。その後の捜査により，同月１０日，犯人がＡとＶの知人である甲であると判明し，その日のうちに，Ａも司法警察員Ｘから甲が犯人であることを聞いた。そして，その日のうちに，Ａは，Ｖに，犯人が甲である旨を伝えた。その後，Ａは，甲から謝罪を受けたため，同年７月２０日，前記告訴を取り消した。しかし，(イ)Ｖは，犯人が甲であると知った後，次第に甲を処罰してもらいたいという気持ちが高まっていったことから，同年７月３１日，知人の司法巡査Ｙに，口頭で，Ｖが受けた被害を申告して甲の処罰を求めた。これに対し，司法巡査Ｙは，Ｖに，Ｈ警察署長を務める司法警察員Ｚ宛てに告訴状を提出するように求めた。その後，Ｖは，司法巡査Ｙに対して被害を申告して甲の処罰を求めたこと及び司法警察員Ｚ宛てに告訴状を提出するように求められたことをＡに伝えた。そのため，(ウ)Ａは，再度，考えを改め，同年８月５日，司法警察員Ｚ宛てに，Ｖが受けた被害を申告して甲の処罰を求める旨の告訴状を提出した。さらに，(エ)Ｖも，同年８月２０日，司法警察員Ｚ宛てに，Ｖが受けた被害を申告して甲の処罰を求める旨の告訴状を提出した。その後，Ｖの父親であるＢは，同年９月１日に初めてＶが甲から名誉毀損の被害を負わされたことを知った。そして，(オ)Ｂは，同月２日，司法警察員Ｚ宛てに，Ｖが受けた被害を申告して甲の処罰を求める旨の告訴状を提出した。なお，甲にＶを被害者とする名誉毀損罪が成立することに争いはないものとする。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"12221"},{year:"2011",num:"23",subject:"kso",q:`次の【弁解録取書の記載内容】は，殺人を被疑事実とする逮捕状に基づいて司法警察員により逮捕された被疑者甲野太郎の事件に関し，Ｈ警察署司法警察員Ｘが，被疑者の弁解を聴取して作成した弁解録取書の記載内容の抜粋である。この弁解録取書に記載された①から⑤までの司法警察員Ｘの措置に関する後記アからオまでの【記述】のうち，正しいものは幾つあるか。後記１から６までのうちから選びなさい。
【弁解録取書の記載内容】
　本籍，住居，職業，氏名，生年月日欄（省略）
　本職は，平成２３年２月３日午前１０時１０分ころ，Ｈ警察署において，上記の者に対し，①逮捕状記載の犯罪事実の要旨及び②弁護人を選任することができる旨を告げるとともに，
　③１ 引き続き勾留を請求された場合において貧困等の事由により自ら弁護人を選任することができないときは，裁判官に対して弁護人を請求できる旨
　　２ 裁判官に対して弁護人の選任を請求するには資力申告書を提出しなければならない旨
　　３ その資力が基準額以上であるときは，あらかじめ，弁護士会に弁護人の選任の申出をしていなければならない旨
を教示し，さらに，弁護人又は弁護人となろうとする弁護士と接見したいことを申し出れば，直ちにその旨をこれらの者に連絡する旨を告げた上，④弁解の機会を与えたところ，任意次のとおり供述した。
１ 私がＶさんを殺したことは間違いありません。
２ 弁護人をお願いできる権利があることは聞きました。お金がないので，国選でお願いします。
甲 野 太 郎 指印
以上のとおり⑤録取して読み聞かせた上，閲覧させたところ，誤りのないことを申し立て，各葉の欄外に指印した上，末尾に署名・指印した。
前 同 日
司法警察員署名押印欄（省略）
【記 述】
ア．①につき，刑事訴訟法の規定上，司法警察員Ｘは，直ちに犯罪事実の要旨を告げるように求められている。
イ．②につき，刑事訴訟法の規定上，司法警察員Ｘは，弁護人を選任することができる旨を告げるように求められている。
ウ．③につき，刑事訴訟法の規定上，司法警察員Ｘは，③の１から３までの事項を教示するように求められていない。
エ．④につき，刑事訴訟法の規定上，司法警察員Ｘは，被疑者甲野太郎に，弁解の機会を与えるように求められていない。
オ．⑤につき，刑事訴訟法の規定上，司法警察員Ｘは，弁解録取書を作成して，これを読み聞かせた上で，閲覧させることが求められている。`,c1:"１．０個",c2:"２．１個",c3:"３．２個",c4:"４．３個",c5:"５．４個",c6:"６．５個",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2011",num:"24",subject:"kso",q:`捜索・差押えに関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。ただし，判例がある場合には，それに照らして考えるものとする。
ア．人の住居に対する捜索差押許可状の効力は，令状呈示後に同住居に搬入された物品には及ばないから，甲に対する覚せい剤取締法違反被疑事件につき，捜索場所を甲方居室，差し押さえるべき物を覚せい剤等とする捜索差押許可状に基づき，警察官が甲立会いの下に同人方居室を捜索中，甲宛てに届き，甲が受領した宅配便の荷物について，警察官は，甲の承諾を得ることなくこれを開封して中身を確認することはできない。
イ．捜査機関は，人の住居に対する捜索差押許可状の執行中は，何人に対しても，許可を得ないでその場所に出入りすることを禁止することができるから，居住者であっても許可を得ないで住居に立ち入ろうとした場合は，これを制止することができる。
ウ．捜索差押許可状の執行に当たっては，その着手前に，処分を受ける者に対して捜索差押許可状を示さなければならないから，乙に対する覚せい剤取締法違反被疑事件につき，捜索場所を乙方居室，差し押さえるべき物を覚せい剤等とする捜索差押許可状の発付を受けた警察官が，来意を告げることなく，施錠された乙方居室のドアを家主から借り受けた合い鍵で開けて室内に立ち入り，その後に初めて乙に同令状を呈示することは，乙が覚せい剤を洗面所に流すなど差押対象物件を破棄隠匿するおそれがある場合であっても違法となる。
エ．捜索差押許可状には，被疑者の氏名，罪名，差し押さえるべき物，捜索すべき場所，身体若しくは物，有効期間等を記載しなければならないが，特別法違反の罪については，被疑事件を特定するため，罪名のほか，その罰条又は犯罪事実を記載しなければならない。
オ．捜索差押許可状で差し押さえようとしているパソコンの中に，被疑事実に関する情報が記録されている蓋然性が認められる場合において，そのような情報が実際に記録されているかをその場で確認していたのでは記録された情報を損壊される危険があるときは，内容を確認することなしにパソコン自体を差し押さえることができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2011",num:"25",subject:"kso",q:`次の【事例】に関する検察官の処理について述べた後記アからオまでの【記述】のうち，正しい場合には１を，誤っている場合には２を選びなさい。
【事 例】
甲は，平成２２年４月１日午前９時５０分，Ｈ県Ｉ市内において，司法警察員から職務質問を受けた際，所持品の検査に応じ，「窃盗の目的でＶの邸宅に侵入するのに使用するため，ガラス切りを隠して携帯していた」旨を述べてガラス切りを所携のバッグから取り出したものの，住居については，一切答えなかった。そこで，司法警察員は，甲の住居が明らかでない上，甲に軽犯罪法違反（同法第１条第３号違反）に該当する「正当な理由がなくてガラス切りを隠して携帯していた」事実が認められたことから，同日午前１０時，同事実により甲を現行犯逮捕した。その後の捜査により，甲が窃盗を行っていたことも判明したものの，依然として，甲の住居は判明しなかった。司法警察員は，同月３日午前９時３０分，甲の身柄とともに軽犯罪法違反及び窃盗の両事実をＨ区検察庁検察官に送致する手続をした。その後，検察官は，同日午前１０時３０分，送致された甲を受け取った。
【記 述】
ア．検察官は，甲を勾留請求する場合，これを平成２２年４月４日午前１０時３０分までに行えば足りる。
イ．検察官は，軽犯罪法違反の事実のみならず窃盗の事実も併せて甲を勾留請求することができる。
ウ．検察官は，甲につき，逮捕されている軽犯罪法違反の事実のみで略式命令を請求する場合，甲に対し，あらかじめ，略式手続を理解させるために必要な事項を説明し，通常の規定に従い審判を受けることができる旨を告げた上，略式手続によることについて異議がないかどうかを確かめなければならない。
エ．検察官は，平成２２年４月３日，逮捕されている軽犯罪法違反の事実のみで甲を公判請求する場合，勾留状が発付されていないので甲を釈放した上で公判請求しなければならない。
オ．検察官は，平成２２年４月３日，軽犯罪法違反の事実のみならず窃盗の事実も併せて甲を公判請求する場合，簡易裁判所ではなく地方裁判所に対して行うこともできる。
（参照条文）軽犯罪法
第１条 左の各号の一に該当する者は，これを拘留又は科料に処する。
一，二 （略）
三 正当な理由がなくて合かぎ，のみ，ガラス切りその他他人の邸宅又は建物に侵入するのに使用されるような器具を隠して携帯していた者
四～三十四 （略）
（参照条文）裁判所法
第２４条 地方裁判所は，次の事項について裁判権を有する。
一 （略）
二 第１６条第４号の罪及び罰金以下の刑に当たる罪以外の罪に係る訴訟の第一審
三，四 （略）
第３３条 簡易裁判所は，次の事項について第一審の裁判権を有する。
一 （略）
二 罰金以下の刑に当たる罪，選択刑として罰金が定められている罪又は刑法第１８６条，第２５２条若しくは第２５６条の罪に係る訴訟
２，３ （略）`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"21121"},{year:"2011",num:"26",subject:"kso",q:`犯罪捜査のための通信傍受に関する法律（以下「通信傍受法」という。）に関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。
ア．通信傍受法では，傍受令状で通信の傍受をすることができる対象犯罪は限定されており，組織的な賭博場開張等図利の罪は，この対象犯罪に含まれている。
イ．司法警察員が，被疑者から電話において恐喝されていた被害者の同意を得て，その被害者と被疑者との間の電話による通話内容を録音する場合には，裁判官の発する傍受令状を得る必要はない。
ウ．司法警察員は，通信傍受の実施をしている間に行われた通信が，傍受令状に記載された傍受すべき通信に該当するかどうか明らかでない場合には，直ちに当該通信の傍受を停止しなければならない。
エ．司法警察員は，覚せい剤取締法違反の事実を被疑事実とする傍受令状に基づいて，通信傍受の実施をしている間に，その被疑事実とは無関係の殺人を実行する計画について話し合っていると明らかに認められる通信が行われたときは，当該通信の傍受をすることができる。
オ．司法警察員は，通信傍受の実施を終了した場合には，通信の当事者に対し，傍受の実施につき通知しなければならないが，この通知により捜査が妨げられるおそれがあると認めるときはこの通知をしないことができる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2011",num:"27",subject:"kso",q:`即決裁判手続に関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。
ア．検察官は，公訴を提起しようとする強盗事件について，事案が明白であること，証拠調べが速やかに終わると見込まれることその他の事情を考慮し，相当と認めるときは，公訴の提起と同時に，書面により即決裁判手続の申立てをすることができる。
イ．検察官は，即決裁判手続によることについての被疑者の同意がなくても，即決裁判手続の申立てをすることができる。
ウ．即決裁判手続による公判期日については，被告人に弁護人がないときは，これを開くことができない。
エ．裁判所が即決裁判手続において懲役又は禁錮の言渡しをする場合には，その刑の執行猶予の言渡しをしなければならない。
オ．即決裁判手続においてされた判決に対しては，控訴の申立てをすることができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2011",num:"28",subject:"kso",q:`次の【事例】に登場する後記甲，乙，丙，丁及び戊の５名につき，公判請求された公訴事実の全部又は一部について明らかに刑事訴訟法第８９条に規定された権利保釈が認められないものには１を，それ以外のものには２を選びなさい。なお，いずれも，勾留は継続されているものとする。
【事 例】
　甲は，詐欺の罪により懲役８年の刑に処せられ，乙は，強盗致傷の罪により懲役７年の刑に処せられ，丙は，器物損壊の罪により懲役１年の刑に処せられ，いずれも，同じ刑事施設に収容されて顔見知りとなった。甲，乙及び丙は，いずれも平成２１年中に刑の執行を終了し，その後，それぞれＨ市内に住居を定めて生活していた。
　平成２２年７月２日，甲及び乙が甲の自宅で住居不定の丁と一緒に食事をしていたところ，丙がＨ市内に住居を有する戊を連れて遊びに来た。その後，甲，乙，丙，丁及び戊の５名は，雑談をしていたが，その途中，他人の住居に侵入して金品を窃取する旨の謀議が成立した。そして，同日午後１０時，甲，乙，丙，丁及び戊の５名は，Ｈ市内に所在するＶの住居に侵入して金品を窃取したが，Ｖの住居を出たところで，警察官の職務質問を受けて犯行を自白し，住居侵入，窃盗の事実により緊急逮捕された。その後，甲，乙，丙，丁及び戊の５名は，同月３日中にＨ地方検察庁検察官に送致されて勾留を請求された上，緊急逮捕された事実と同一の住居侵入，窃盗の事実により勾留され，同月１２日，勾留された事実と同一の住居侵入，窃盗の事実により公判請求された。
　甲，乙及び丁の３名には余罪がなかったが，丙には，Ｈ市内で連続して車のタイヤをパンクさせた余罪，戊には，知人を包丁で突き刺して傷害を負わせた余罪があった。そのため，丙は，同月１３日，暴力行為等処罰に関する法律第１条の３に違反する事実で逮捕され，同月１４日中にＨ地方検察庁検察官に送致されて勾留請求された上，逮捕された事実と同一の同法律第１条の３に違反する事実により勾留され，同月２３日，勾留された事実と同一の同法律第１条の３に違反する事実により公判請求された。一方，戊は，同年７月１３日，殺人未遂の事実で逮捕され，同月１４日中にＨ地方検察庁検察官に送致されて勾留請求された上，逮捕された事実と同一の殺人未遂の事実により勾留され，同月２３日，殺人未遂の事実ではなく，傷害の事実により公判請求された。
　なお，甲，乙及び丙については，前記前科以外の前科がなく，丁及び戊については，前科がないものとし，甲，乙，丙，丁及び戊のいずれについても，逃亡のおそれは認められるが，「罪証を隠滅すると疑うに足りる相当な理由」及び「被害者その他事件の審判に必要な知識を有すると認められる者若しくはその親族の身体若しくは財産に害を加え又はこれらの者を畏怖させる行為をすると疑うに足りる相当な理由」は認められないものとする。
（参照条文）暴力行為等処罰に関する法律
第１条ノ３ 常習トシテ刑法第２０４条，第２０８条，第２２２条又ハ第２６１条ノ罪ヲ犯シタル者人ヲ傷害シタルモノナルトキハ１年以上１５年以下ノ懲役ニ処シ其ノ他ノ場合ニ在リテハ３月以上５年以下ノ懲役ニ処ス`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"21112"},{year:"2011",num:"29",subject:"kso",q:`訴因に関する次のアからオまでの各記述のうち，誤っているものの組合せは，後記１から５までのうちどれか。ただし，判例がある場合には，それに照らして考えるものとする。
ア．検察官は，第１回の公判期日の前であっても，公訴事実の同一性を害しない限度において，起訴状に記載された訴因の追加，撤回又は変更を裁判所に請求することができる。
イ．起訴状における訴因の記載は，裁判所が行う審判対象の範囲を画定するとともに，被告人の防御の対象を明確にする機能を有するものであり，起訴状における罰条の記載も，訴因をより一層特定させて被告人の防御に遺憾のないようにするため法律上要請されているものであるから，訴因により公訴事実が十分に明確にされ，被告人の防御に実質的な不利益が生じない場合であっても，裁判所が起訴状に記載されていない罰条を適用するためには，罰条変更の手続を経なければならない。
ウ．傷害致死の罪について，「被告人は，平成２２年５月９日午後９時ころ，Ｈ市Ｉ区所在のＪホテル７号室において，Ｖに対し，その頭部等に手段不明の暴行を加え，頭蓋冠，頭蓋底骨折等の傷害を負わせ，よって，そのころ，同所において，頭蓋冠，頭蓋底骨折に基づく外傷性脳障害又は何らかの傷害により死亡させた。」という訴因とすることは，暴行態様，傷害の内容及び死因の表示が概括的なものにとどまるから，検察官において，当時の証拠に基づき，できる限り日時，場所，方法等をもって傷害致死の罪となるべき事実を特定して訴因を明示したものであっても，訴因の特定に欠ける。
エ．検察官において，共謀共同正犯者の存在に言及することなく，被告人が１人で自動二輪車を窃取したという窃盗の訴因で公訴を提起した場合，裁判所が，証拠上，他に実行行為を行っていない共謀共同正犯者が存在するとの心証を得たとしても，被告人１人の行為により犯罪構成要件の全てが満たされたと認めるときは，訴因どおりの犯罪事実を認定することができる。
オ．裁判所は，訴因の追加又は変更により被告人の防御に実質的な不利益を生ずるおそれがあると認めるときは，被告人又は弁護人の請求により，決定で，被告人に十分な防御の準備をさせるため必要な期間公判手続を停止しなければならない。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2011",num:"30",subject:"kso",q:`次の【事例】は，甲に対する殺人被告事件の冒頭手続における法廷でのやり取りである。この法廷でのやり取りに関する後記アからエまでの【記述】のうち，正しいものは幾つあるか。後記１から５までのうちから選びなさい。
【事 例】
裁判長「それでは開廷します。被告人は証言台の前に立ちなさい。」
裁判長「名前は何と言いますか。」
①被告人「甲と言います。」
裁判長「本籍，住所はどこですか。」
被告人「本籍は，Ｈ市Ｉ町１番です。住所も同じです。」
裁判長「職業は何ですか。」
被告人「無職です。」
裁判長「生年月日はいつですか。」
被告人「昭和３０年１月１日です。」
裁判長「それでは，検察官，起訴状を朗読してください。」
検察官「公訴事実。被告人は，平成２０年６月１０日ころ，Ｈ市Ｉ町１番被告人方において，Ｖに対し，殺意をもって，持っていたナイフでその胸部を突き刺し，よって，同日ころ，同所において，同人を胸部刺傷に基づく失血により死亡させて殺害したものである。罪名及び罰条。殺人。刑法第１９９条。」
②裁判長「被告人には黙秘権という権利があります。被告人は終始沈黙し，又は個々の質問に対し陳述を拒むことができます。また，言いたいことを言うことができますが，この公判廷での被告人の陳述は，被告人にとって不利益な証拠とも利益な証拠ともなることを承知してください。」
裁判長「それでは，まず被告人に聞きますが，今，検察官が述べた内容に間違いありませんか。」
③被告人「間違いありません。」
裁判長「弁護人，御意見はいかがですか。」
④弁護人「被告人と同じです。」
裁判長「それでは，これで冒頭手続を終わり，証拠調手続に入ります。」
【記 述】
ア．①は，裁判長が，被告人として出頭している者が起訴状に表示された者と同一であるかどうかを確かめるために行った質問の一環であり，こうした人定質問を行うことは法令上要求されている。
イ．②は，法令上，検察官が，裁判長の訴訟指揮に基づき，起訴状に記載された公訴事実を要約して告げる方法でも行うことができる。
ウ．③は，裁判長が，被告人に対し，言いたいことを言うことができることや，公判廷での陳述が被告人にとって不利益な証拠とも利益な証拠ともなることを告げなくても，法令に違反するものではない。
エ．④は，裁判長が，その訴訟指揮によって，弁護人の意見を確かめるために事実上行ったものであり，法令上要求されているものではない。`,c1:"１．０個",c2:"２．１個",c3:"３．２個",c4:"４．３個",c5:"５．４個",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2011",num:"31",subject:"kso",q:`裁判員の参加する刑事裁判（以下「裁判員裁判」という。）に関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。
ア．裁判員裁判の対象事件として法律で定められた殺人罪に係る事件については，裁判官のみの合議体で取り扱うことはできない。
イ．裁判員裁判においては，裁判官及び裁判員の合議により，事実の認定，法令の解釈，法令の適用及び刑の量定を行う。
ウ．裁判員の参加する合議体の裁判官の員数は３人，裁判員の員数は６人とされているが，公判前整理手続による争点及び証拠の整理において公訴事実について争いがないと認められ，事件の内容その他の事情を考慮して適当と認められるものについては，裁判所は，裁判官１人及び裁判員４人から成る合議体を構成して審理及び裁判をする旨の決定をすることができる。
エ．裁判員裁判の対象事件の被告人が，裁判員の参加する合議体ではなく，裁判官のみの合議体による審理を受けることを申し立てた場合には，地方裁判所は，当該事件を裁判官のみの合議体で取り扱う旨の決定をしなければならない。
オ．裁判員の関与する判断のための評議において，その判断は，構成裁判官及び裁判員の双方の意見を含む合議体の員数の過半数の意見によるので，裁判員のみが被告人を有罪とする意見である場合には，被告人は無罪となる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2011",num:"32",subject:"kso",q:`被害者に対する配慮に関する次のアからオまでの各記述のうち，誤っているものの組合せは，後記１から５までのうちどれか。ただし，判例がある場合には，それに照らして考えるものとする。なお，記述中の証人の遮へい措置は刑事訴訟法第１５７条の３に，ビデオリンク方式は同法第１５７条の４に，それぞれ規定されているものをいう。
ア．裁判所は，強制わいせつ罪に係る事件を取り扱う場合において，当該事件の被害者から申出があるときは，被告人又は弁護人の意見を聴き，相当と認めるときは，被害者特定事項（氏名及び住所その他の当該事件の被害者を特定させることとなる事項）を公開の法廷で明らかにしない旨の決定をすることができるが，この場合において，被害者は，あらかじめ，検察官にこの申出をしなければならない。
イ．公判期日において，被害者の被害に関する心情その他の被告事件に関する意見の陳述がなされた場合，裁判所は，この陳述を犯罪事実の認定のための証拠とすることはできない。
ウ．検察官は，検察官請求に係る証拠書類を弁護人に閲覧する機会を与えるに当たり，被害者特定事項が明らかにされることにより，被害者等の名誉が著しく害されるおそれがあると認めるときは，弁護人に対し，その旨を告げ，起訴状に記載された被害者特定事項を被告人に知られないようにすることを求めることができる。
エ．ビデオリンク方式によった上で被告人から証人の状態を認識できなくする証人の遮へい措置が採られても，映像と音声の受送信を通じてであれ，被告人は，証人の供述を聞くことはでき，自ら尋問することもでき，弁護人による証人の供述態度等の観察は妨げられないのであるから，被告人の証人審問権は侵害されていない。
オ．証人の遮へい措置を採ることができるのは，強制わいせつ等の性犯罪の被害者に限定されないが，ビデオリンク方式による証人尋問が認められるのは，性犯罪の被害者に限定されている。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2011",num:"33",subject:"kso",q:`自由心証主義に関する次のアからオまでの各記述のうち，誤っているものの組合せは，後記１から５までのうちどれか。ただし，判例がある場合には，それに照らして考えるものとする。
ア．裁判員の参加する刑事裁判において，裁判員の関与する判断に関しては，証拠の証明力は，それぞれの裁判官及び裁判員の自由な判断にゆだねる。
イ．憲法第３８条第３項の「何人も，自己に不利益な唯一の証拠が本人の自白である場合には，有罪とされ，又は刑罰を科せられない。」という規定は，自白の証明力に対する自由心証を制限したものである。
ウ．裁判官が，証人の証言の信用性を判断する際には，その証人の公判廷での供述態度を考慮することができる。
エ．経験則は，経験から導き出された事物に関する一般的な法則であるが，一般に承認された科学的法則とは異なり，合理的な判断法則として共有されたものとまではいえないので，裁判官が，経験則に反する心証を形成した上で事実を認定することも許される。
オ．被告人の精神状態に関する精神医学者の意見が鑑定等として証拠となっている場合には，その判断の前提となる生物学的，心理学的要素を裁判所が評価することが困難であるため，その意見のとおりに認定しなければならない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2011",num:"34",subject:"kso",q:`被告人甲が，被害者Ｖ宅において，Ｖを包丁で突き刺して殺害したという事件に関し，後記ａからｆまでの【証拠】についての後記アからオまでの【記述】のうち，正しいものは幾つあるか。後記１から６までのうちから選びなさい。ただし，判例がある場合には，それに照らして考えるものとする。
【証 拠】
ａ．Ｖ宅でＶを包丁で突き刺した旨の甲が作成した供述書
ｂ．事件直前，Ｖ宅を訪ねてきた甲を応接間に通した後，しばらくして，Ｖの叫び声が聞こえ，応接間を確認したところ，倒れているＶを発見した旨のＶの妻Ａの供述を録取した書面
ｃ．Ｖの妻Ａ立会いのもとで，司法警察職員が任意処分として行った検証の結果を記載した書面
ｄ．犯行現場に遺留されていた包丁
ｅ．前記包丁に付着していた血液のＤＮＡ型がＶのものと一致する旨の鑑定の結果を記載した書面
ｆ．甲宅から押収した日記（事件前日の欄に，「Ｖと口論となった挙句，拳で顔面を殴られた。許せない。」と記載のあるもの。）
【記 述】
ア．ａ，ｂ，ｃ及びｅは，証拠書類であるから，その取調べをするについては，朗読又はその要旨を告げる必要があり，ｄ及びｆは，証拠物であるから，その取調べをするについては，示させる必要があるがそれで足り，ｆの記載内容を立証する場合であっても，これを朗読する必要はない。
イ．直接証拠とは，犯罪事実の存在を直接証明する証拠であるから，ａからｆの中で，直接証拠は，ａのみである。
ウ．ａは，甲が体験した事実を，甲自ら記載した書面であるから，伝聞証拠には当たらない。
エ．刑事訴訟法第３２１条第３項の「検証の結果を記載した書面」とは，裁判官の発する令状により行った検証の結果を記載した書面を意味するから，捜査機関が任意処分として行った検証の結果を記載した書面であるｃは，同項の「検証の結果を記載した書面」には該当しない。
オ．ｅは，伝聞証拠ではあるが，刑事訴訟法第３２１条第４項の「鑑定の経過及び結果を記載した書面で鑑定人の作成したもの」に当たるから，鑑定人の証人尋問を経ることなく，証拠とすることができる。`,c1:"１．０個",c2:"２．１個",c3:"３．２個",c4:"４．３個",c5:"５．４個",c6:"６．５個",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2011",num:"35",subject:"kso",q:`刑事訴訟法第３２１条第１項の書面に関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。ただし，判例がある場合には，それに照らして考えるものとする。
ア．公判廷に証人として出廷した者が，捜査段階で検察官に対して供述した内容と相反する供述をしたとき，その者の検察官の面前における供述を録取した書面については，その検察官の面前における供述が特に信用すべき情況の下にされたものであるときでなければ証拠能力は認められない。
イ．刑事訴訟法第３２１条第１項第１号の「裁判官の面前における供述を録取した書面」は，当該事件に関して作成されたものに限られるから，他の事件の公判廷における証人の供述を録取したものは含まれない。
ウ．刑事訴訟法第３２１条第１項の「その供述者が死亡，精神若しくは身体の故障，所在不明若しくは国外にいるため公判準備若しくは公判期日において供述することができないとき」とは，供述不能の制限的な事由ではなく，例示的な事由であるから，証人が，公判期日に証言拒絶権を行使して証言を拒んだときも，これに該当する。
エ．裁判所が証人尋問の決定をした外国人について，証人尋問の実施前に退去強制が行われた場合，その者の検察官に対する供述調書を刑事訴訟法第３２１条第１項第２号前段に基づいて証拠とすることは，許容されないことがある。
オ．被告人には黙秘権の保障があり，かつ，宣誓及び偽証罪の制裁を欠くのであるから，乙を被告人とする贈賄被告事件の公判調書中，被告人としての乙の供述を録取した部分は，甲を被告人とする収賄被告事件において，刑事訴訟法第３２１条第１項第１号の「裁判官の面前における供述を録取した書面」には該当しない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2011",num:"36",subject:"kso",q:`次のⅠ及びⅡの【見解】は，裁判所が公判廷において鑑定を命じた鑑定人によって鑑定書が作成された場合に，その鑑定書を公判廷においてどのような手続により取り調べるのかという問題に関するものである。この見解について述べた後記のアからカまでの【記述】のうち，誤っているものの組合せは，後記１から６までのうちどれか。
【見 解】
Ⅰ．裁判所は，当事者の取調べ請求を待たず，鑑定書を公判廷において取り調べる必要がある。
Ⅱ．裁判所は，鑑定書を公判廷において取り調べるためには，原則として，当事者からその取調べ請求を受ける必要がある。
【記 述】
ア．Ⅱ説は，鑑定書が公判準備における鑑定人の尋問の結果を記載した書面と実質上何ら変わりがないとして，公判準備における証人尋問等の結果を記載した書面の取調べ手続と同様にすべきと考えるものである。
イ．Ⅱ説は，鑑定書の取調べを当事者の意思にかからしめることが証拠調べにおける当事者主義からみて当然のことであると考えるものである。
ウ．Ⅰ説は，裁判所が鑑定書による報告を命じたことにつき，当然その鑑定書の取調べを予定しているものであると考えるものである。
エ．Ⅱ説によれば，鑑定請求をした弁護人が，鑑定書の取調べ請求をする旨の意見を述べた場合，その請求は，鑑定書を取り調べることに同意する旨の意見と解することになる。
オ．Ⅰ説によれば，弁護人及び検察官のいずれもが，鑑定書の取調べ請求をしない旨の意見を述べた場合，裁判所は，職権で，刑事訴訟法第３２１条第４項の手続を履践すべく，鑑定人を証人として尋問する旨の決定をしなければならない。
カ．Ⅱ説によれば，鑑定請求をした弁護人が，鑑定書の取調べ請求をしない旨の意見を述べ，検察官が，鑑定書の取調べ請求をする旨の意見を述べた場合，検察官は，裁判所に鑑定書を取り調べてもらうためには，刑事訴訟法第３２１条第４項の立証手続として鑑定人を証人として尋問する旨の請求をする必要がある。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ カ",c6:"６．オ カ",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2011",num:"37",subject:"kso",q:`第１回の公判期日前の証人尋問に関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。
ア．検察官は，犯罪の捜査に欠くことのできない知識を有すると明らかに認められる者が，取調べに対して出頭又は供述を拒んだ場合には，その者が当該犯罪の被害者であったとしても，第１回の公判期日前に限り，裁判官に証人の尋問を請求することができる。
イ．弁護人は，被告人のアリバイを供述する証人に海外赴任の予定があるなど，あらかじめ証拠を保全しておかなければその証拠を使用することが困難な事情があるときでも，第１回の公判期日前に，裁判官に証人の尋問を請求することはできない。
ウ．検察官は，司法警察員の取調べに対して任意の供述をした犯罪の目撃者が，その供述が犯罪の証明に欠くことができないと認められる場合において，圧迫を受けて公判期日においては前にした供述と異なる供述をするおそれがある場合に限り，第１回の公判期日前に，裁判官に証人の尋問を請求することができる。
エ．裁判官は，検察官の請求による第１回の公判期日前の証人尋問を行う際，被告人，被疑者又は弁護人をその尋問に立ち会わせなければならない。
オ．裁判官は，第１回の公判期日前の証人尋問請求において，召喚に応じない証人に対しては，更にこれを召喚し，又はこれを勾引することができる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2011",num:"38",subject:"kso",q:`次のアからカまでの各手続のうち，被疑者の勾留及び被告人の勾留のいずれについても刑事訴訟法上認められるものは，幾つあるか。後記１から６までのうちから選びなさい。
ア．保釈
イ．勾留の取消し
ウ．勾留理由開示
エ．検察官による勾留請求
オ．弁護人又は弁護人を選任することができる者の依頼により弁護人となろうとする者以外の者との接見等の制限
カ．勾留の執行停止`,c1:"１．１個",c2:"２．２個",c3:"３．３個",c4:"４．４個",c5:"５．５個",c6:"６．６個",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2011",num:"39",subject:"kso",q:`次の【記述】は，控訴審の権限に関して判断を示した最高裁判所決定の要旨である。①から⑦までの（ ）内に後記ａからｉまでの
【語句群】から適切な語句を入れた場合，組合せとして正しいものは後記１から５までのうちどれか。なお，①から⑦までの（ ）内にはそれぞれ異なる語句が入る。
【記 述】
　第一審判決がその理由中において無罪の判断を示した点は，牽連犯ないし包括一罪として起訴された事実の一部なのであるから，右第一審判決に対する控訴提起の効力は，それが被告人からだけの控訴であつても，公訴事実の全部に及び，右の無罪部分を含めたそのすべてが控訴審に移審係属すると解すべきである。そうとすれば，控訴裁判所は右起訴事実の全部の範囲にわたつて（①）を加えることが可能であるとみられないでもない。しかしながら，控訴審が第一審判決について（①）をするにあたり，いかなる限度においてその職権を行使すべきかについては，さらに慎重な検討を要するところである。いうまでもなく，現行刑訴法においては，いわゆる（②）主義が基本原則とされ，（③）主義はその補充的，後見的なものとされているのである。（②）主義の現われとして，現行法は（④）制度をとり，検察官が公訴を提起するには，（⑤）を記載した起訴状を裁判所に提出しなければならず，（⑤）は（④）を明示してこれを記載しなければならないこととし，この（④）につき，当事者の攻撃防御をなさしめるものとしている。（中略）このように，審判の対象設定を原則として（②）の手に委ね，被告人に対する不意打を防止し，（②）の公正な訴訟活動を期待した第一審の訴訟構造の上に立つて，刑事訴訟法はさらに控訴審の性格を原則として（⑥）審たるべきものとしている。すなわち，控訴審は，第一審と同じ立場で事件そのものを審理するのではなく，前記のような（②）の訴訟活動を基礎として形成された第一審判決を対象とし，これに（⑥）的な審査を加えるべきものなのである。そして，その（⑥）審査も当事者の申し立てた控訴趣意を中心としてこれをなすのが建前であつて，（①）はあくまで補充的なものとして理解されなければならない。けだし，前記の第一審における（②）主義と（③）主義との関係は，控訴審においても同様に考えられるべきだからである。
　これを本件についてみるに，本件公訴事実中第一審判決において有罪とされた部分と無罪とされた部分とは牽連犯ないし包括一罪を構成するものであるにしても，その各部分は，それぞれ１個の犯罪構成要件を充足し得るものであり，（④）としても独立し得たものなのである。そして，右のうち無罪とされた部分については，被告人から不服を申し立てる利益がなく，検察官からの控訴申立てもないのであるから，当事者間においては攻防の対象からはずされたものとみることができる。このような部分について，それが理論上は控訴審に移審係属しているからといつて，（⑥）審たる控訴審が（①）を加え有罪の自判をすることは，被告人控訴だけの場合，刑事訴訟法第４０２条により第一審判決の刑より重い刑を言い渡されないことが被告人に保障されているとはいつても，被告人に対し不意打を与えることであるから，前記のような現行刑事訴訟の基本構造，ことに現行控訴審の性格にかんがみるときは，（⑦）として許される限度をこえたものであつて，違法なものといわなければならない。
【語句群】
ａ．職権調査
ｂ．当事者の申立てに基づく調査
ｃ．当事者
ｄ．職権
ｅ．訴因
ｆ．公訴事実
ｇ．事実
ｈ．事後
ｉ．職権の発動`,c1:"１．①ｂ④ｅ",c2:"２．①ａ⑦ｉ",c3:"３．②ｄ⑤ｆ",c4:"４．②ｃ⑥ｇ",c5:"５．③ｃ⑥ｈ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2011",num:"40",subject:"kso",q:`再審に関する次のアからオまでの各記述のうち，判例に照らして，正しいものの組合せは，後記１から５までのうちどれか。
ア．有罪を認めるべき明らかな証拠を新たに発見したときは，無罪の言渡しをした確定判決に対しても再審の請求をすることができる。
イ．検察官は，有罪の言渡しをした確定判決に対して，その言渡しを受けた者の利益のために，再審の請求をすることができない。
ウ．再審事由を定める刑事訴訟法第４３５条第６号に規定する「明らかな証拠」とは，確定判決における事実認定につき合理的な疑いを抱かせ，その認定を覆すに足りる蓋然性のある証拠を意味する。
エ．再審の請求は，刑の執行が終わり，又はその執行を受けることがないようになったときには，これをすることができない。
オ．再審の請求を受けた裁判所は，再審の請求が理由のあるときは再審開始の決定をしなければならないが，その場合には，確定判決による刑の執行を停止することができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2010",num:"1",subject:"ken",q:`人権の享有主体に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．会社が，国民と同様，特定の政党の政策を支持又は反対するなどの政治的行為をなす自由を有するとしても，政治資金の寄附は政治の動向に影響を与えることがあるから，会社の政治資金の寄附は国民による寄附と別異に扱わなければならない。
イ．税理士会は公益法人であり，また，その会員である税理士に実質的に脱退の自由が認められないから，税理士会がする政治資金規正法上の政治団体に対する政治献金は，それが税理士法改正に関わるものであったとしても，税理士会の目的の範囲外の行為と解される。
ウ．出国の自由は外国人にも保障されるが，再入国する自由については，憲法第２２条第２項に基づき，我が国に生活の本拠を持つ外国人に限り，我が国の利益を著しく，かつ，直接に害することのない場合にのみ認められる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"212"},{year:"2010",num:"2",subject:"ken",q:`刑事施設の被収容者の人権に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．刑事施設及びその管理態勢に関する現状を前提とした場合，火災が発生する危険性，火災発生時に被収容者が逃走するおそれ，喫煙中の通謀により罪証隠滅がされるおそれなどを考慮すると，未決拘禁者について喫煙の自由を一般に認めないのはやむを得ない措置というべきである。
イ．未決拘禁者が刑事施設内で特定の新聞を私費により定期購読することを同施設の長が制限する場合，その態様の合憲性については，当該具体的な事情の下で，より制限的でない他の選び得る手段があるかどうかという基準によって判断されるべきである。
ウ．受刑者が国会議員あての請願書の内容を記した手紙を新聞社に送付しようとする場合，刑事施設の長がこれを制限し得るのは，具体的事情の下でそれを許可することが施設内の規律及び秩序の維持等の点において放置できない程度の障害が生ずる相当のがい然性があるときに限られる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア× イ○ ウ○",c5:"５．ア○ イ× ウ×",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"3"},{year:"2010",num:"3",subject:"ken",q:`法の下の平等に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．国民の租税負担を定めるには，国政全般からの総合的政策判断と，極めて専門技術的な判断が必要となるので，租税法の分野における取扱いの区別は，立法目的が正当で，区別の態様が目的との関連で著しく不合理でない限り，憲法第１４条第１項に違反しない。
イ．憲法第１４条第１項後段に列挙された事由は例示的なものであって，必ずしもこれに限る趣旨ではない。また，第１４条第１項は，合理的理由のない区別を禁止する趣旨であるから，事柄の性質に即応して合理的と認められる区別は許される。
ウ．社会保障給付の受給が争われている場合には，法令等の憲法第２５条違反の問題と第１４条第１項違反の問題は一括して審査され，法令等の内容が著しく合理性を欠き明らかに裁量の逸脱，濫用とみざるを得ない場合を除き，違憲とは判断されない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"112"},{year:"2010",num:"4",subject:"ken",q:`信教の自由に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．信仰の表明としてされた特定の行為が他者の権利・利益に対する現実的・具体的害悪を及ぼす場合には，当該行為の基礎となった信仰自体の反社会性を理由に，国家権力が当該信仰を規制することは許される。
イ．信教の自由は，同じ信仰を有する者が集まることによって宗教的団体を結成する自由をも内容として含むものであるが，このような自由は，宗教法人として法人格を取得することまでをも当然に含むものではない。
ウ．自己の信仰と法令上の義務とが衝突していて，仮に法令上の義務を履行することが信仰の否定につながるような場合には，法令上の義務を履行せずに自己の信仰を優先する行動をとっても，法令上の規制や処罰を免れる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"212"},{year:"2010",num:"5",subject:"ken",q:`教科書検定が憲法に違反するか否かに関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．教科書検定が憲法第２１条第２項に違反しないとされるのは，審査が，教科書の誤記や誤植などの客観的に明らかな誤りがあるか，教科書の内容が教育課程の大綱的基準の枠内にあるかなどの点に限定され，かつ，執筆者の思想の内容にわたらない場合に限られる。
イ．教科書検定が教科書執筆者の表現行為を制限することになるとしても，教育の中立・公正，一定水準の確保等の要請にかんがみれば，検定による表現の自由の制約は合理的で必要やむを得ない限度のものであるから，憲法第２１条第１項に違反しない。
ウ．教科書検定は，検定で不合格とされた図書を一般図書として「思想の自由市場」に流通させることを何ら妨げるものではなく，発表禁止目的や発表前の審査等の特質がないから，憲法第２１条第２項の「検閲」には当たらない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"211"},{year:"2010",num:"6",subject:"ken",q:`取材の自由に関連する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．民事訴訟法第１９７条第１項第３号は，「職業の秘密に関する事項について尋問を受ける場合」には，証人は証言を拒否することができるとしており，報道関係者の取材源の秘密は，この「職業の秘密」に当たる。しかし，当該事案において証言拒否が認められるか否かは，さらに比較衡量によって決せられる。
イ．一般人の筆記行為の自由は，報道機関の取材の自由と同様に，憲法第２１条の精神に照らして十分尊重に値する。したがって，一般の傍聴者が法廷でメモを取る行為と司法記者クラブ所属の報道機関の記者が法廷でメモを取る行為とを区別することには，合理的理由を見出すことはできない。
ウ．報道機関の取材の手段・方法が，贈賄，脅迫，強要等の一般の刑罰法令には触れなくても，取材対象者の個人としての人格の尊厳を著しくじゅうりんする等法秩序全体の精神に照らして社会観念上是認することができない態様のものである場合には，国家公務員法との関係では，正当な取材行為の範囲を逸脱し違法性を帯びることになる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"3"},{year:"2010",num:"7",subject:"ken",q:`職業の自由を規制する目的に関する次のアからウまでの各記述について，それぞれ「あなたのため」というパターナリズムに基づく規制である場合には１を，それ以外の理由に基づく規制である場合には２を選びなさい。
ア．公衆浴場を自由に開設できるようにすると，公衆浴場が濫立し，浴場経営に無用の競争を生じさせ，ひいては浴場の衛生設備が低下することなどが考えられる。それゆえ，公衆浴場の濫立を防止するため，公衆浴場の適正配置を開設の許可要件とする。
イ．過度の飲酒は，自らの健康を害し，生命を失うこともあり得るが，飲酒量を自己でコントロールすることは難しい。それゆえ，飲酒者の過度の飲酒を防止するため，酒類を提供する飲食店における客一人当たりの酒類販売量を制限する。
ウ．喫煙は，喫煙者に肺がん等の疾患をもたらし，社会医療費上昇の一因となっている。それゆえ，医療保険制度を通じた国庫補助金の支払等社会医療費の増加抑制のため，テレビにおけるたばこの広告を全面的に禁止する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"212"},{year:"2010",num:"8",subject:"ken",q:`学問の自由に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．下級裁判所の裁判例の趣旨によれば，文部科学大臣は，国立大学法人の学長の任命に関し，その者を任命することが不適当と認められるときには，国立大学法人の申出を拒否することができる。なぜなら，学長人事は大学の自治とは無関係であるからである。
イ．最高裁判所の判例によれば，憲法第２３条は大学における学術研究活動の自由を保障し，国民一般の学問の自由は憲法第１９条及び第２１条によって保障される。なぜなら，大学が学術の中心であり，深く真理を探究することが大学の本質であるからである。
ウ．最高裁判所の判例によれば，憲法第２３条は，狭義の学問の自由ばかりでなく，大学の自治を制度的に保障する。なぜなら，大学における学問の自由を保障するために，大学の自治が伝統的に認められているからである。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2010",num:"9",subject:"ken",q:`財産権の制限に関する①及び②の最高裁判所の判決に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
① 共有森林分割制限を定める森林法の規定を違憲であると判断した判決（最高裁判所昭和６２年４月２２日大法廷判決，民集４１巻３号４０８頁）
② 上場会社等の役員又は主要株主による当該会社の株式等に係る短期売買利益返還義務を定める証券取引法（現行金融商品取引法）の規定を合憲であると判断した判決（最高裁判所平成１４年２月１３日大法廷判決，民集５６巻２号３３１頁）
ア．①及び②の判決は，財産権に対して加えられる規制が憲法第２９条第２項に適合するものであるかどうかは，規制の目的，必要性，内容，その規制によって制限される財産権の種類，性質及び制限の程度等を比較衡量して判断すべきであるとする点で共通する。
イ．②の判決は，財産権に対する規制には積極的目的によるものと消極的目的によるものとがあることを明示した上，積極的目的による規制の合憲性をより緩やかに認める考え方を明確にしたものである点で，①の判決と異なる。
ウ．①及び②の判決は，いずれも，財産権に規制を加える立法について規制目的の正当性は認めている。その上で，規制手段の必要性及び合理性に関して，①の判決はこれが認められないと判断したのに対し，②の判決はこれが認められると判断したものである。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"3"},{year:"2010",num:"10",subject:"ken",q:`憲法第２５条が保障する生存権の裁判規範性に関するプログラム規定説によれば，憲法第２５条は政治的・道義的義務を国に課したものにとどまり，個々の国民に対して具体的権利を保障したものではない。次のアからエまでの各記述のうち，プログラム規定説への批判となるもの二つの組合せを後記１から６までの中から選びなさい。
ア．憲法第２５条第１項は，「健康で文化的な最低限度の生活を営む権利を有する」と規定しており，単なる目標を定めたものではない。
イ．憲法が保障する権利は，自由権的基本権と生存権的基本権とに大別され，両者は権利としての内容，その保障方法，そして法的性格が異なる。
ウ．「健康で文化的な最低限度の生活」の保障を具体的に実現するためには必ず予算を伴うが，予算の配分は国の財政政策の問題である。
エ．「健康で文化的な最低限度の生活」の具体的内容を一般的に決定することはできないが，特定の国における特定の時点においては一応客観的に決定することは可能である。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．ア エ",c4:"４．イ ウ",c5:"５．イ エ",c6:"６．ウ エ",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2010",num:"11",subject:"ken",q:`関税法第１１８条第１項により第三者の所有物を没収することをめぐる最高裁判所の判決（最高裁判所昭和３７年１１月２８日大法廷判決，刑集１６巻１１号１５９３頁）に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．この判決は，所有者たる第三者に告知，弁解，防禦の機会を与えることなく，その所有物を没収することは，適正な法律手続によらないで，財産権を侵害することに外ならず，憲法第３１条，第２９条に違反するものであることを明らかにした。
イ．この判決は，所有者たる第三者を証人として法廷に召喚し，これに対する証人尋問の際に，第三者没収の趣旨を告知し，弁解，防禦の機会を与えていれば，憲法第３１条，第２９条に違反するものではないとした。
ウ．この判決は，第三者の所有にかかる物件につき没収の言渡しがあったからといって，被告人においてこれを違憲無効であると主張することは許されないとして，被告人の上告を棄却した。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"4"},{year:"2010",num:"12",subject:"ken",q:`近代憲法における統治機構の基本原理の一つである権力分立は，現代国家においてその形態が大きく変容している。その現代的変容に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．２０世紀の積極国家・社会国家の要請に伴って行政活動の役割が飛躍的に増大し，行政府が国の基本政策の形成決定に事実上中心的役割を営むようになっている。そのような状況のもとでは，立法府が行政府をどこまでコントロールできるかが問題となる。
イ．議会の多数党が政府を形成する議院内閣制の下では，とりわけ，伝統的な議会と政府の対抗関係は機能不全に陥りがちである。政治部門における権力分立は，むしろ，政府・与党と野党の対抗関係へと機能的に変化する。
ウ．とりわけ第二次世界大戦後，議会が制定する法律自体の合憲性を通常裁判所あるいは憲法裁判所が審査する制度を採用する国が増えている。日本の場合は，最高裁判所だけに違憲審査権が付与されているが，立法府と行政府のすべての行為の合憲性を審査しているわけではない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"112"},{year:"2010",num:"13",subject:"ken",q:`天皇の地位又は権能に関する次のアからウまでの各記述について，明らかに誤っている記述をすべて挙げたものを，後記１から７までの中から選びなさい。
ア．天皇の国事行為に関する最高裁判所の判例によれば，内閣の「助言」とは内閣から天皇への事前の申出であり，「承認」とは天皇の行為が「助言」の趣旨に合致するものであると事後に認めることであって，いずれも閣議により決定しなければならないとされている。
イ．天皇の「象徴としての行為」を認める立場からは，天皇が全国植樹祭に出席すること及び魚類学の研究成果を公表することは，いずれも「象徴としての行為」に該当することとなるので，内閣の助言と承認により行われなければならない。
ウ．天皇に対する刑事訴追の可否については憲法上も法律上も明文の定めがないが，摂政や国事行為の臨時代行の委任を受けた皇族がその在任中あるいはその委任がされている間「訴追されない」とする法律の規定から類推して，天皇に対する刑事訴追は許されないものと解される。`,c1:"１．アイウ",c2:"２．アイ",c3:"３．アウ",c4:"４．イウ",c5:"５．ア",c6:"６．イ",c7:"７．ウ",c8:"",c9:"",c10:"",a:"2"},{year:"2010",num:"14",subject:"ken",q:`下記文章は，参議院議員選挙における議員定数配分規定の違憲性について，次の①ないし③を含む最高裁判所の判決の流れを述べたものである。文中における（ア）から（ウ）までの各記述（それぞれ下線部分）について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
①昭和５８年４月２７日大法廷判決，民集３７巻３号３４５頁（最大較差 １対５．２６倍）
②平成８年９月１１日大法廷判決，民集５０巻８号２２８３頁（最大較差 １対６．５９倍）
③平成２１年９月３０日大法廷判決，民集６３巻７号１５２０頁（最大較差 １対４．８６倍）
記
　①は，憲法が投票価値の平等を要求しているとし，投票価値の著しい不平等状態が生じ，かつ，それが相当期間継続しているにもかかわらず，是正措置を講じないことが国会の裁量権の限界を超えていると判断される場合には違憲となると判示した。その上で，（ア）<u>①は，地方選出議員の地方代表的性格は否定したが，半数改選制，参議院に解散を認めない二院制の本旨といった参議院議員選挙の特殊性を重視して，合憲とした。</u>
　その後，平成４年７月施行の参議院議員選挙において最大較差が１対６．５９倍に及ぶに至り，（イ）<u>②は，違憲の問題が生じる程度の著しい不平等状態が生じているとしたが，是正のための合理的期間は徒過していないとして，合憲とした。</u>
　この②判決の後に施行された選挙は，最大較差が１対５倍前後であり，最高裁判所は著しい不平等状態が生じているという判断をしてこなかったが，較差是正のため国会における不断の努力が求められるなどの指摘がされてきた。
　それらの判決の流れを受け，（ウ）<u>③は，結論的には合憲としつつも，投票価値平等の観点からは大きな不平等が存し較差の縮小を図ることが求められること，そのためには現行の選挙制度の仕組み自体の見直しが必要となり，国会において速やかに適切な検討が行われることが望まれると判示した。</u>`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"5"},{year:"2010",num:"15",subject:"ken",q:`政党に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．日本国憲法には政党にかかわる明文規定はないが，結社の自由が保障され，議院内閣制が採用されていることからすれば，憲法は，国民と議会をつなぐ，言わばパイプ役として，政党の存在を当然予想している。
イ．憲法第５１条は，国会議員の職務の遂行の自由を保障することを目的として，議員の発言の免責特権を定めている。したがって，議員が所属する政党が，議員の院内での表決等を理由に除名処分を行うことは違憲である。
ウ．名簿式比例代表制という選挙方法は，政党が作成した候補者名簿に有権者が投票するので，憲法が保障する直接選挙の原則に反するか否か問題となるが，最高裁判所は，選挙人の総意により当選人が決定される点において，直接選挙の原則に反しないと判示した。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"121"},{year:"2010",num:"16",subject:"ken",q:`内閣の法律案提出権については，内閣法第５条においてこれを認める規定があるものの，これを合憲とする立場と違憲とする立場とがある。次のアからウまでの各記述について，それぞれ合憲とする立場の論拠となる場合には１を，論拠とならない場合には２を選びなさい。
ア．法律制定は，本来内閣の権限に属するものではない。
イ．現代国家では，積極的に国の施策を具体化する政策立法の必要性が高まっている。
ウ. 憲法は，議院内閣制を採用し，国会と内閣との協働を認めている。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"211"},{year:"2010",num:"17",subject:"ken",q:`内閣総理大臣の地位と権能に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．内閣総理大臣が欠けたときは，内閣は総辞職しなければならない。なぜなら，憲法は，内閣総理大臣に「首長」たる地位を与えており，これが欠けた場合には内閣の一体性が失われることになるからである。
イ．内閣総理大臣は，国務大臣の任免権を有するから，その意思に反しても一方的にこれを罷免することはできる。ただし，国務大臣を罷免する場合には，閣議において他の国務大臣の承認を求めなければならない。
ウ．最高裁判所の判例の趣旨によれば，内閣総理大臣は，行政各部に対する指揮監督権を有するので，各国務大臣が所管事項についてする行政指導に対し指示を与えることも内閣総理大臣の権限の範囲内というべきである。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"121"},{year:"2010",num:"18",subject:"ken",q:`司法権の範囲ないし限界に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，正しいものには○を，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．自分の居所から遠く不便となることから地方裁判所及び家庭裁判所の支部を廃止する最高裁判所規則が違憲であるとして，その支部の管轄区域内の居住者が取消しを求める訴えは，法律上の争訟に当たらない。
イ．国家試験における合否の判定は，学問上又は技術上の知識，能力，意見等の優劣，当否の判断を内容とする行為であるから，濫用にわたらない限り当該試験実施機関の裁量に委ねられるべきである。
ウ．衆議院の解散に対する有効無効の判断は，たとえ法律上可能であっても裁判所の審査権の外にあり，主権者たる国民に対して政治的責任を負う政府，国会等の政治部門に任され，最終的には国民の政治判断に委ねられている。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"3"},{year:"2010",num:"19",subject:"ken",q:`予算の法的性格については，法律とは異なる独自の法形式であるとする見解（予算法規範説）と，法律の一種とする見解（予算法律説）がある。これらの見解に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．予算法規範説は，提出権が内閣に属すること，衆議院に先議権があることなどを根拠とする。それに対して，予算法律説は，予算の制定手続が一般の法律と異なるのは憲法第５９条第１項の「憲法に特別の定のある場合」に該当するとする。
イ．国会が予算に対してどこまで修正をなし得るかについて，予算法規範説は修正に制限は存しないとする。それに対して，予算法律説は，予算の同一性を損なうような大修正はできないとする。
ウ．予算は成立したのに，その支出を命ずる法律が制定されない場合について，予算法規範説は，内閣が支出を実行できるとする。それに対して，予算法律説は，内閣が法律案を提出して国会の議決を求めるしかないとする。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"122"},{year:"2010",num:"20",subject:"ken",q:`地方自治に関する次のアからウまでの各記述について，ａはある見解を要約したものであり，ｂはそれぞれの見解から導かれる結論である。ｂがａの結論となるものには○を，結論とならないものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．ａ．地方自治の保障は，いわゆる「制度的保障」を意味し，憲法第９２条にいう「地方自治の本旨」とは，国の法律をもってしても侵すことのできない地方自治制度の核心的部分の保障を意味する。
ｂ．この見解によれば，制度の現状が保障されるので，都道府県を廃止して，道州を導入することは，憲法第９２条に反する。
イ．ａ．「地方自治の本旨」とは，国の全域が法律で定める地方公共団体の区域に区分され，その各区域における公共事務が，多かれ少なかれ国から独立に，その地方公共団体の事務として，その住民の参与によって処理される体制を意味する。
ｂ．この見解によれば，立法政策の当否は別として，市町村だけを地方公共団体としたり，都道府県を統廃合したりすることが，「地方自治の本旨」に反するわけではない。
ウ．ａ．憲法第９２条及び第９４条により，地方公共団体には自治権の一環として課税権が与えられている。地方公共団体の課税権に関する地方自治法第２２３条，地方税法第２条の規定は，それを確認している規定である。
ｂ．この見解によれば，地方公共団体の課税権の税源をどこに求めるか，ある税目を国税とするか地方税とするかなどについての具体化は，法律に委ねられている。
（参照条文）地方自治法
第２２３条 普通地方公共団体は，法律の定めるところにより，地方税を賦課徴収することができる。
（参照条文）地方税法
第２条 地方団体は，この法律の定めるところによつて，地方税を賦課徴収することができる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"6"},{year:"2010",num:"21",subject:"gyo",q:`次の【甲群】に掲げるアの省令及びイの政令の規定の下線を付した部分が，それぞれ（参照条文）として掲げる法律の委任の範囲を超えており無効であると主張しようとする場合に，次の【乙群】に掲げるＡからＣまでの主張のうち，どれが最も適切か。政省令と最も適切な主張との組合せを，後記１から９までの中から選びなさい。
【甲 群】
ア．銃砲刀剣類登録規則第４条第２項 刀剣類の鑑定は，<u>日本刀であつて</u>，次の各号の一に該当するものであるか否かについて行なうものとする。（以下略）

（参照条文）銃砲刀剣類所持等取締法
第１条 この法律は，銃砲，刀剣類等の所持，使用等に関する危害予防上必要な規制について定めるものとする。
第２条 （略）
２ この法律において「刀剣類」とは，刃渡り１５センチメートル以上の刀，やり及びなぎなた，刃渡り５．５センチメートル以上の剣（中略）をいう。
第３条 何人も，次の各号のいずれかに該当する場合を除いては，銃砲又は刀剣類を所持してはならない。
一～五 （略）
六 第１４条の規定による登録を受けたもの（中略）を所持する場合
七～十三 （略）
２～４ （略）
第１４条 都道府県の教育委員会は，（中略）美術品として価値のある刀剣類の登録をするものとする。
２ （略）
３ 第１項の登録は，登録審査委員の鑑定に基いてしなければならない。
４ （略）
５ 第１項の登録の方法，第３項の登録審査委員の任命及び職務，同項の鑑定の基準及び手続その他登録に関し必要な細目は，文部科学省令で定める。

イ．児童扶養手当法施行令第１条の２（平成１０年政令第２２４号による改正前） 法第４条第１項第５号に規定する政令で定める児童は，次の各号のいずれかに該当する児童とする。
一 父（母が児童を懐胎した当時婚姻の届出をしていないが，その母と事実上婚姻関係と同様の事情にあつた者を含む。以下次号において同じ。）が引き続き１年以上遺棄している児童
二 父が法令により引き続き１年以上拘禁されている児童
三 母が婚姻（婚姻の届出をしていないが事実上婚姻関係と同様の事情にある場合を含む。）によらないで懐胎した児童（<u>父から認知された児童を除く</u>。）
四 前号に該当するかどうかが明らかでない児童

（参照条文）児童扶養手当法
第１条 この法律は，父と生計を同じくしていない児童が育成される家庭の生活の安定と自立の促進に寄与するため，当該児童について児童扶養手当を支給し，もつて児童の福祉の増進を図ることを目的とする。
第４条 （前略）都道府県知事等（中略）は，次の各号のいずれかに該当する児童の母がその児童を監護するとき（中略）は，その母（中略）に対し，児童扶養手当（以下「手当」という。）を支給する。
一 父母が婚姻を解消した児童
二 父が死亡した児童
三 父が政令で定める程度の障害の状態にある児童
四 父の生死が明らかでない児童
五 その他前各号に準ずる状態にある児童で政令で定めるもの
２ 前項の規定にかかわらず，手当は，児童が次の各号のいずれかに該当するときは，当該児童については，支給しない。
一～五 （略）
六 父と生計を同じくしているとき。ただし，その者が前項第３号に規定する政令で定める程度の障害の状態にあるときを除く。
七 （略）
３ （略）

【乙 群】
Ａ．政省令への委任を定める法律の規定（以下「委任規定」という。）を文理に即して解釈すると，政省令は法律に違反すると主張する。
Ｂ．法律が政省令を定める行政庁に専門技術的な裁量を認めていることを重視して委任規定を解釈すると，政省令は法律に違反すると主張する。
Ｃ．法律の趣旨目的に適合するように委任規定を解釈すると，政省令は法律に違反すると主張する。`,c1:"１．アＡ イＡ",c2:"２．アＡ イＢ",c3:"３．アＡ イＣ",c4:"４．アＢ イＡ",c5:"５．アＢ イＢ",c6:"６．アＢ イＣ",c7:"７．アＣ イＡ",c8:"８．アＣ イＢ",c9:"９．アＣ イＣ",c10:"",a:"3"},{year:"2010",num:"22",subject:"gyo",q:`行政行為に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．最高裁判所の判例によれば，課税処分のように第三者の保護を考慮する必要のない処分は，明白な瑕疵を有していなくても，当然無効となる場合がある。
イ．道路交通法に基づく自動車運転免許を受けた者が酒気帯び運転等の道路交通法に違反する行為をしたことを理由として，この者の運転免許を取り消す処分は，学問上の「職権取消し」に当たる。
ウ．最高裁判所の判例によれば，特定の者Ａによる個室付浴場の営業を阻止しようとする町が，児童福祉法にいう児童福祉施設の周囲２００メートル以内においては風俗営業等取締法（現在の風俗営業等の規制及び業務の適正化等に関する法律。以下「取締法」という。）によって個室付浴場の営業が禁止されることに着目し，Ａの個室付浴場の開業予定地から２００メートル未満の場所において児童福祉施設の設置の認可申請をした場合において，知事が当該申請を容れて行った認可処分に行政権の濫用に相当する違法性があるものとされるときは，Ａは，当該処分の取消しを求めることなく営業を開始・継続したとしても，他に取締法に違反するところがなければ，取締法違反の罪によって処罰されない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"3"},{year:"2010",num:"23",subject:"gyo",q:`Ａ社は，Ｂ県において，産業廃棄物処理施設の設置を計画し，Ｂ県知事に対して設置許可の申請をして同許可を得た。しかし，周辺住民は，同施設が許可基準を満たしていないにもかかわらず，虚偽の内容の申請書を提出して同許可を受けたと主張し，Ｂ県に同許可を取り消すように求めた結果，Ｂ県知事は，同許可を取り消した。次のアからエまでの各記述について，行政手続法に照らし，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
（参照条文）廃棄物の処理及び清掃に関する法律
第１５条 産業廃棄物処理施設（中略）を設置しようとする者は，当該産業廃棄物処理施設を設置しようとする地を管轄する都道府県知事の許可を受けなければならない。
２～６ （略）
第１５条の３ 都道府県知事は，次の各号のいずれかに該当するときは，当該産業廃棄物処理施設に係る第１５条第１項の許可を取り消さなければならない。
一，二 （略）
三 不正の手段により第１５条第１項の許可又は第１５条の２の５第１項の変更の許可を受けたとき。
２ 都道府県知事は，前条第１号（注：施設の構造等が技術上の基準等に適合していないと認めるとき），第２号（注：設置者の能力が基準に適合していないと認めるとき）又は第４号（注：設置者が当該許可に付した条件に違反したとき）のいずれかに該当するときは，当該産業廃棄物処理施設に係る第１５条第１項の許可を取り消すことができる。

ア．産業廃棄物処理施設の設置許可は，周辺住民にとっては不利益処分であるため，Ｂ県知事は，処分の理由を公示しなければならない。
イ．Ｂ県知事は，産業廃棄物処理施設の設置許可の取消しをするかどうかについて判断するために必要とされる基準を定めておかなければならないから，これを定めないまま取消処分をすれば，違法事由となる。
ウ．Ｂ県知事は，Ａ社について，聴聞の手続を執らなければならず，聴聞を行うに当たっては，聴聞を行うべき期日までに相当な期間を置いて，Ａ社に対し，予定される不利益処分の内容及び根拠となる法令の条項，不利益処分の原因となる事実，聴聞の期日及び場所，聴聞に関する事務を所掌する組織の名称及び所在地を書面により通知しなければならないが，周辺住民の意見を聴く公聴会を開催する義務はない。
エ．聴聞手続の主宰者は，公正な第三者でなければならず，Ｂ県知事が指名するＢ県の職員は，聴聞手続を主宰することができない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2212"},{year:"2010",num:"24",subject:"gyo",q:`行政裁量に関する次のアからエまでの各記述について，最高裁判所の判例に照らし，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．都市計画法に基づいて都市施設の規模，配置等に関する事項を定めるに当たっては，当該都市施設に関する諸般の事情を総合的に考慮した上で，政策的，技術的な見地から判断することが不可欠であるが，このような決定をする行政庁に広範な裁量までは認められていない。
イ．公立学校の校長が学生に対し原級留置処分又は退学処分を行うかどうかの判断は，校長の合理的な教育的裁量にゆだねられるべきものである。しかし，退学処分は，学生の身分をはく奪する重大な措置であることなどからすると，当該学生を学外に排除することが教育上やむを得ないと認められる場合に限って退学処分を選択すべきであり，その要件の認定につき他の処分の選択に比較して特に慎重な配慮を要するものである。
ウ．道路運送法（平成１２年法律第８６号による改正前のもの）第９条第２項第１号は，運賃の設定及び変更の認可基準の一として，「能率的な経営の下における適正な原価を償い，かつ，適正な利潤を含むものであること。」との基準を定めているが，その趣旨は，一般旅客自動車運送事業の有する公共性ないし公益性にかんがみ，安定した事業経営の確立を図るとともに，利用者に対するサービスの低下を防止することを目的としたものである。同号の基準は抽象的，概括的なものであり，同基準に適合するか否かは，行政庁の専門技術的な知識経験と公益上の判断を必要とするから，ある程度の裁量的要素があることを否定することはできない。
エ．地方公務員法第２８条所定の分限制度は，公務の能率の維持及びその適正な運営の確保の目的から同条に定めるような処分権限を任命権者に認めるとともに，他方，公務員の身分保障の見地からその処分権限を発動し得る場合を限定したものである。分限制度のこのような趣旨・目的に照らし，かつ，同条に掲げる処分事由が被処分者の行動，態度，性格，状態等に関する一定の評価を内容として定められていることを考慮すると，同条に基づく分限処分については，任命権者にある程度の裁量権が認められている。
（参照条文）地方公務員法
第２８条 職員が，左の各号の一に該当する場合においては，その意に反して，これを降任し，又は免職することができる。
一 勤務実績が良くない場合
二 心身の故障のため，職務の遂行に支障があり，又はこれに堪えない場合
三 前二号に規定する場合の外，その職に必要な適格性を欠く場合
四 職制若しくは定数の改廃又は予算の減少により廃職又は過員を生じた場合
２～４ （略）`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2111"},{year:"2010",num:"25",subject:"gyo",q:`行政指導に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．行政指導が口頭でされた場合で，相手方からその趣旨や内容，責任者を記載した書面の交付を求められたときは，行政手続法上，当該行政指導に携わる者は，それを交付しなければならない。しかし，災害発生時に緊急避難を勧告する場合のように，相手方に対しその場において完了する行為を求める行政指導については，書面の交付義務はない。
イ．行政指導は，助言・指導といった非権力的な手段で国民に働きかけ，協力を求めるという形で行われることが多いが，行政手続法は，行政指導そのものを権力的手段，具体的には同法にいう処分に当たる行為をもって行うことも例外的に許容している。
ウ．法律上，勧告の相手方が勧告に従わないときは，その旨及びその勧告の内容を公表することができると規定されている場合には，当該規定に基づいて当該勧告等を公表したとしても，行政手続法第３２条第２項違反の問題が生ずることはない。
（参照条文）行政手続法
第３２条 （略）
２ 行政指導に携わる者は，その相手方が行政指導に従わなかったことを理由として，不利益な取扱いをしてはならない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"3"},{year:"2010",num:"26",subject:"gyo",q:`行政計画に関する次のアからエまでの各記述について，法令に照らし，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．都市計画は，第一種低層住居専用地域の指定など，将来の土地利用の在り方に関し必要な事項を定めるものであるから，道路，公園といった施設を整備する目的で策定されることはない。
イ．市街化区域と市街化調整区域の区分のように，都市計画の内容が私人の土地利用に対して建築制限をもたらす場合には，法律による行政の原理によれば，当該都市計画には法律の根拠を要する。
ウ．都市計画の策定に当たっては多様な利害が考慮に入れられるべきであるが，行政手続法によれば，同法の定める意見公募手続の実施までは必要とされていない。
エ．都市計画は健康で文化的な都市環境を確保すべきことを基本理念としており，公害防止計画の定められた都市においては，都市計画は当該公害防止計画に適合したものでなければならない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2111"},{year:"2010",num:"27",subject:"gyo",q:`Ａ市は，道路法所定の道路管理者として，国の所有する土地を借り受け，これを市道（以下「本件道路」という。）として管理している。Ｂは，その自宅前の本件道路上に屋台用の軽トラックを置き，周囲に杭を打つなどして交通妨害行為を繰り返している。この場合において，次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
（参照条文）道路法
第７１条 道路管理者は，次の各号のいずれかに該当する者に対して，この法律又はこの法律に基づく命令の規定によつて与えた許可若しくは承認を取り消し，その効力を停止し，若しくはその条件を変更し，又は行為若しくは工事の中止，道路（中略）に存する工作物その他の物件の改築，移転，除却若しくは当該工作物その他の物件により生ずべき損害を予防するために必要な施設をすること若しくは道路を原状に回復することを命ずることができる。
一 この法律若しくはこの法律に基づく命令の規定又はこれらの規定に基づく処分に違反している者
二，三 （略）
２～７ （略）

ア．国は，Ｂに対して，所有権に基づく物権的請求権を有するから，かかるＢの妨害を除去する義務を対象として，行政代執行法に基づき，代執行をすることができる。
イ．Ａ市が，道路法第７１条に基づき，監督処分として本件道路上の軽トラック，杭の撤去及び道路の原状回復を命じた場合，その命令に係る義務は，行政代執行法に基づく代執行の対象となる。
ウ．Ｂの妨害行為について罰則の適用があるとすれば，これにより，行政代執行法第２条の「他の手段によつてその履行を確保することが困難」であるという要件を欠くことになる。
エ．Ｂの妨害行為に対し，行政代執行法に基づく代執行ができるとした場合，代執行に要した費用を回収するには，民事裁判手続による必要がある。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2122"},{year:"2010",num:"28",subject:"gyo",q:`行政上の強制執行及び即時強制に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．行政上の直接強制は，行政行為中に内包されている義務を執行するものであって，新たな義務を課すものではないから，個別の法律の根拠を必要としない。
イ．行政上の即時強制として行われた継続的性質を有する事実行為の違法を主張し，その差止めや原状回復等を求めるには，民事訴訟の手続によるのであって，行政不服審査法による救済手続によることはできない。
ウ．行政上の即時強制は，行政上の義務の不履行がある場合に，直接，義務者の身体又は財産に実力を加え，義務の内容を実現する作用である。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"8"},{year:"2010",num:"29",subject:"gyo",q:`行政機関の保有する情報の公開に関する法律（以下「情報公開法」という。）に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．行政機関の長は，開示請求時点において保有していない行政文書を開示請求に応ずるために作成する義務を負わない。
イ．情報公開法は，開示請求の対象である行政文書につき，決裁，供覧等の事案処理手続の終了を要件としていないが，職員の個人的なメモは，開示請求の対象に含まれない。
ウ．情報公開法は，公務員等の職務遂行に係る情報のうち，当該公務員等の職及び当該職務遂行の内容に係る部分については，これを開示することとしている。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"111"},{year:"2010",num:"30",subject:"gyo",q:`食品会社であるＸが，食品を輸入しようとしたところ，検疫所長Ｙから食品衛生法（平成１５年法律第５５号による改正前のもの。以下「法」という。）第６条に違反する旨の通知（以下「本件通知」という。）を受けたため，その取消しを求めた事案において，本件通知が抗告訴訟の対象となる処分に当たるかどうかについて判断を示した最高裁判所平成１６年４月２６日第一小法廷判決（民集５８巻４号９８９頁）の次の判示を読み，後記アからオまでの各記述について，誤っているもの二つの組合せを後記１から10までの中から選びなさい。

「食品衛生法違反通知書による本件通知は，法１６条に根拠を置くものであり，厚生労働大臣の委任を受けたＹが，Ｘに対し，本件食品について，法６条の規定に違反すると認定し，したがって輸入届出の手続が完了したことを証する食品等輸入届出済証を交付しないと決定したことを通知する趣旨のものということができる。そして，本件通知により，Ｘは，本件食品について，関税法７０条２項の「検査の完了又は条件の具備」を税関に証明し，その確認を受けることができなくなり，その結果，同条３項により輸入の許可も受けられなくなるのであり，（中略）関税法基本通達に基づく通関実務の下で，輸入申告書を提出しても受理されずに返却されることとなるのである。」
（参照条文）食品衛生法（平成１５年法律第５５号による改正前のもの）
第６条 人の健康を損なうおそれのない場合として厚生労働大臣が薬事・食品衛生審議会の意見を聴いて定める場合を除いては，添加物（天然香料及び一般に食品として飲食に供されている物であつて添加物として使用されるものを除く。）並びにこれを含む製剤及び食品は，これを販売し，又は販売の用に供するために，製造し，輸入し，加工し，使用し，貯蔵し，若しくは陳列してはならない。
第１６条
 販売の用に供し，又は営業上使用する食品，添加物，器具又は容器包装を輸入しようとする者は，厚生労働省令の定めるところにより，そのつど厚生労働大臣に届け出なければならない。
（参照条文）関税法
第６７条 貨物を輸出し，又は輸入しようとする者は，政令で定めるところにより，当該貨物の品名並びに数量及び価格（中略）その他必要な事項を税関長に申告し，貨物につき必要な検査を経て，その許可を受けなければならない。
第７０条 （略）
２ 他の法令の規定により輸出又は輸入に関して検査又は条件の具備を必要とする貨物については，第６７条（輸出又は輸入の許可）の検査その他輸出申告又は輸入申告に係る税関の審査の際，当該法令の規定による検査の完了又は条件の具備を税関に証明し，その確認を受けなければならない。
３ 第１項の証明がされず，又は前項の確認を受けられない貨物については，輸出又は輸入を許可しない。

ア．この判決は，行政庁の行為は，法律の根拠を有しない場合であっても抗告訴訟の対象となる処分に当たり得ることを明らかにしたものである。
イ．この判決によれば，法第１６条は，「届け出なければならない」と規定しているが，厚生労働大臣に法第６条違反の有無を認定判断する権限を付与していることになる。
ウ．この判決は，検疫所長による本件通知に法的効力を認めたものである。
エ．この判決によれば，税関長は，本件通知の時点で，関税法第７０条第３項に基づき輸入を許可しないという処分をしたことになる。
オ．この判決の考え方に立っても，輸入申告に対する税関長の拒否行為について取消訴訟を提起することは許されると解し得るが，同訴訟においては，法第１６条の届出の対象となる食品等が法第６条に適合するか否かについては争うことができないとされる可能性がある。`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:" ４．アとオ",c5:"５．イとウ",c6:"６．イとエ",c7:" ７．イとオ",c8:"８．ウとエ",c9:"９．ウとオ",c10:"10．エとオ",a:"3"},{year:"2010",num:"31",subject:"gyo",q:`裁判所による行政裁量の統制に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．地方自治法第２３８条の４第７項は，地方公共団体の行政財産の管理者が，行政財産の用途又は目的を妨げる場合にはその使用を許可してはならない旨を定めているが，行政財産の使用を許可するために考慮すべき事項は定めていない。したがって，最高裁判所の判例によれば，裁判所が，地方公共団体の行政財産の管理者が考慮すべき事項を考慮していないことを理由に挙げて，同項による使用不許可処分を違法と判断することはできない。
（参照条文）地方自治法
第２３８条の４ 
１～６ （略）
７ 行政財産は，その用途又は目的を妨げない限度においてその使用を許可することができる。
８，９ （略）
イ．最高裁判所の判例によれば，裁判所は，地方公共団体が判断の過程において考慮すべき事情を考慮していないことを理由に挙げて，地方公共団体による都市施設に関する都市計画の決定の内容が社会通念に照らし著しく妥当性を欠き違法であると判断することができる。
ウ．行政処分を行う行政庁に裁量が法律上認められているにもかかわらず，行政庁が裁量の余地はないと判断して行政処分を行った場合，行政庁が裁量権を行使したわけではない。したがって，この場合において，裁判所が，行政庁が裁量権の行使に当たり考慮すべき事項を考慮していないことを理由に挙げて，行政処分を違法と判断することはできない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"6"},{year:"2010",num:"32",subject:"gyo",q:`次の【甲群】に掲げるアからウまでの各事例における原告が訴訟行為をするとした場合，次の【乙群】に掲げるＡからＤまでの手続のうち，どれが最も適切か。各事例と最も適切な手続の組合せを，後記１から10までの中から選びなさい。
【甲 群】
ア．処分の取消しの訴えにおいて，出訴期間についての理解に誤りがあったため，原告が，損害賠償請求に改めようとする事例
イ．処分の取消しの訴えにおいて，処分の際の教示の不備により処分をした行政庁の所属する公共団体についての理解に誤りがあったため，原告が，被告を改めようとする事例
ウ．裁決の取消しの訴えにおいて，裁決の通知を受けた日から６か月を経過した後に，原告が，原処分についても取消しを求めようとする事例
【乙 群】
Ａ．行政事件訴訟法第１５条第１項の規定に基づく被告の変更
Ｂ．行政事件訴訟法第１９条第１項の規定に基づく請求の追加的併合
Ｃ．行政事件訴訟法第２１条第１項の規定に基づく処分又は裁決に係る事務の帰属する国等に対する他の請求への訴えの変更
Ｄ．民事訴訟法第１４３条の規定の例による訴えの変更（行政事件訴訟法第７条及び第１９条第２項）
（参照条文）行政事件訴訟法
第７条 行政事件訴訟に関し，この法律に定めがない事項については，民事訴訟の例による。
第１５条 取消訴訟において，原告が故意又は重大な過失によらないで被告とすべき者を誤つたときは，裁判所は，原告の申立てにより，決定をもつて，被告を変更することを許すことができる。
２～７ （略）
第１９条 原告は，取消訴訟の口頭弁論の終結に至るまで，関連請求に係る訴えをこれに併合して提起することができる。（以下略）
２ 前項の規定は，取消訴訟について民事訴訟法（平成８年法律第１０９号）第１４３条の規定の例によることを妨げない。
第２０条 前条第１項前段の規定により，処分の取消しの訴えをその処分についての審査請求を棄却した裁決の取消しの訴えに併合して提起する場合には（中略），その提起があつたときは，出訴期間の遵守については，処分の取消しの訴えは，裁決の取消しの訴えを提起した時に提起されたものとみなす。
第２１条 裁判所は，取消訴訟の目的たる請求を当該処分又は裁決に係る事務の帰属する国又は公共団体に対する損害賠償その他の請求に変更することが相当であると認めるときは，請求の基礎に変更がない限り，口頭弁論の終結に至るまで，原告の申立てにより，決定をもつて，訴えの変更を許すことができる。
２～５ （略）
（参照条文）民事訴訟法
第１４３条 原告は，請求の基礎に変更がない限り，口頭弁論の終結に至るまで，請求又は請求の原因を変更することができる。（以下略）
２～４ （略）`,c1:"１．アＡ イＢ ウＣ",c2:"２．アＢ イＣ ウＤ",c3:"３．アＣ イＡ ウＤ",c4:"４．アＢ イＤ ウＡ",c5:"５．アＣ イＢ ウＡ",c6:"６．アＤ イＡ ウＣ",c7:"７．アＣ イＡ ウＢ",c8:"８．アＤ イＢ ウＣ",c9:"９．アＡ イＤ ウＢ",c10:"10．アＤ イＣ ウＢ",a:"7"},{year:"2010",num:"33",subject:"gyo",q:`Ａ県は，同県内にダムの建設を計画し，事業を開始したが，建設予定地内の土地の買収に応じない地権者Ｂらがいたため，土地収用法に基づく土地の収用を行うこととし，国土交通大臣に対して同法に基づく事業の認定申請をしたところ，同大臣は，事業認定の要件を満たすとして同事業の認定（以下「本件事業認定」という。）をした。次のアからエまでの各記述について，行政事件訴訟法に照らし，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．建設予定地内の地権者は，本件事業認定の名あて人ではないから，出訴期間の制限はなく，本件事業認定の日から１年を経過した後でも，適法に本件事業認定の取消訴訟を提起することができる。
イ．Ａ県の申立てがあれば，裁判所は，同県を訴訟に参加させることができるが，職権で同県を訴訟に参加させることはできない。
ウ．本件の事業に公益性があるか否か，Ｂらにどのような不利益があるのかなど本件事業認定の適法性を基礎付ける事実関係は，事実審の口頭弁論終結時の事情に基づいて判断されなければならない。
エ．裁判所は，本件事業認定が違法であっても，本件事業認定を取り消すことにより公の利益に著しい障害を生ずる場合において，原告の受ける損害の程度，その損害の賠償又は防止の程度及び方法その他一切の事情を考慮した上，本件事業認定を取り消すことが公共の福祉に適合しないと認めるときは，請求を棄却することができ，この場合には，当該判決の主文において，本件事業認定が違法であることを宣言しなければならない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2221"},{year:"2010",num:"34",subject:"gyo",q:`地方公共団体の所有する土地をＡが権原なく使用していることが判明していながら長期にわたり理由なく放置されている事案において，住民が住民監査請求及び住民訴訟の制度（地方自治法第２４２条以下）を利用しようとするときに関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．違法又は不当に「公金の賦課若しくは徴収若しくは財産の管理を怠る事実」があると認められるとして住民監査請求をしようとする場合，住民は，一定の数の他の住民とともに，これをする必要がある。
イ．地方自治法には，違法又は不当に「公金の賦課若しくは徴収若しくは財産の管理を怠る事実」があると認められるとして適法な住民監査請求がされた場合については，住民訴訟を提起することができる期間に関する規定はない。
ウ．地方公共団体の長又は関係する権限を有する職員について違法又は不当に「公金の賦課若しくは徴収若しくは財産の管理を怠る事実」があると認められるとして適法な住民監査請求がされた場合，これをした住民は，長又は当該職員を被告として，当該怠る事実の違法確認の請求をする住民訴訟を提起することができる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2010",num:"35",subject:"gyo",q:`免許を受けることが法律上必要とされる職業に就いている者に対して，その法律の規定に基づき一定期間の業務の停止の処分がされた事案において，処分を受けた者がその後の間もない時期に行政事件訴訟法（以下「法」という。）第２５条の規定に基づく執行停止の申立てをしようとするときに関する次のアからエまでの各記述について，法令又は最高裁判所の判例の趣旨に照らし，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．上記の処分については，処分がされた時にさかのぼって効力の停止を求めることができる。
イ．法第２５条第２項の「重大な損害」が生ずるか否かの判断に当たっては，上記の処分を受けた者の社会的信用の低下等を考慮することも否定されない。
ウ．上記の処分の取消しを求める本案の終局判決の言渡しよりも前に処分の期間が経過することが確実であるならば，法第２５条第２項の「重大な損害を避けるため緊急の必要があるとき」との要件が当然に満たされる。
エ．法第２５条第４項の「公共の福祉に重大な影響を及ぼすおそれがあるとき」との要件については，相手方（被申立人）において疎明をする責任を負う。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2121"},{year:"2010",num:"36",subject:"gyo",q:`株式会社Ａは，建築基準法第６条の２第１項にいう指定を受けた指定確認検査機関であり，その従業員であるＢを確認検査員に選任している。Ｃ市内に建築する計画の建築物について，Ｂの実施する確認（以下「本件確認」という。）がされ，同建築物に関する完了検査が終了したが，同建築物の周辺に居住するＤは，同建築物が建築されたことによって生命，身体の安全等が害されたなどと主張している。なお，Ｃ市には建築主事が置かれている。この場合において，国家賠償に関する次のアからエまでの各記述について，法令又は最高裁判所の判例の趣旨に照らし，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
（参照条文）建築基準法
第６条 建築主は，第１号から第３号までに掲げる建築物を建築しようとする場合（中略）においては，当該工事に着手する前に，その計画が建築基準関係規定（この法律並びにこれに基づく命令及び条例の規定（以下「建築基準法令の規定」という。）その他建築物の敷地，構造又は建築設備に関する法律並びにこれに基づく命令及び条例の規定で政令で定めるものをいう。以下同じ。）に適合するものであることについて，確認の申請書を提出して建築主事の確認を受け，確認済証の交付を受けなければならない。（以下略）
２～１５ （略）
第６条の２ 前条第１項各号に掲げる建築物の計画（中略）が建築基準関係規定に適合するものであることについて，（中略）国土交通大臣又は都道府県知事が指定した者の確認を受け，国土交通省令で定めるところにより確認済証の交付を受けたときは，当該確認は前条第１項の規定による確認と，当該確認済証は同項の確認済証とみなす。
２～１２ （略）
第７７条の２４ 指定確認検査機関は，確認検査を行うときは，確認検査員に確認検査を実施させなければならない。
２～４ （略）
ア．株式会社Ａの確認は，国家賠償法第１条第１項の「公権力の行使」には当たらない。
イ．Ｂは，株式会社Ａの従業員であるが，国家賠償法第１条第１項の「公務員」に当たる場合がある。
ウ．本件確認につきＢに故意又は過失があっても，Ｃ市に株式会社Ａに対する監督義務違反がない場合は，Ｄは，国家賠償法第１条第１項に基づく賠償を受けられない。
エ．Ｄが，建築工事の着工前に本件確認の取消訴訟を提起していたが，建築物に関する完了検査終了後，これを国家賠償請求訴訟に訴えを変更するとした場合，Ｃ市は，行政事件訴訟法第２１条第１項の「事務の帰属する国又は公共団体」に当たる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2121"},{year:"2010",num:"37",subject:"gyo",q:`国家賠償法に関する次のアからエまでの各記述について，最高裁判所の判例に照らし，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．国又は公共団体の公務員による一連の職務上の行為の過程において他人に被害を生ぜしめた場合において，それが具体的にどの公務員のどのような違法行為によるものであるかを特定することができなくても，当該一連の行為のうちのいずれかに行為者の故意又は過失による違法行為があったのでなければ当該被害が生ずることはなかったであろうと認められ，かつ，それがどの行為であるにせよこれによる被害につき行為者の属する国又は公共団体が法律上賠償の責任を負うべき関係が存在するときは，国又は公共団体は，加害行為不特定の故をもって損害賠償責任を免れることはできないと解されるが，この法理が肯定されるのは，それらの一連の行為を組成する各行為のいずれもが国又は同一の公共団体の公務員の職務上の行為に当たる場合に限られる。
イ．ある事項に関する法律解釈につき異なる見解が対立し，実務上の取扱いも分かれていて，そのいずれについても相当の根拠が認められる場合に，公務員がその一方の見解を正当と解しこれに立脚して公務を遂行したときは，後にその執行が違法と判断されたからといって，直ちに当該公務員に過失があったものとはいえない。
ウ．国会議員の立法行為は，本質的に政治的なものであって，その性質上法的規制の対象になじまないものであるから，制定された法律の内容が国民に憲法上保障されている権利を違法に侵害するものであることが明白な場合などには，例外的に国会議員の立法行為が国家賠償法上違法であるとの評価を受けることもあり得るが，立法の不作為についてまで国家賠償法上違法であるとの評価を受けることはない。
エ．国家賠償法第３条第１項所定の公の営造物の設置費用の負担者とは，当該営造物の設置費用につき法律上の負担義務を負う者を意味するから，公の営造物の設置者である地方公共団体に対しその営造物の設置費用に充てるための補助金を交付したにすぎない国が，当該営造物の設置費用の負担者として同項に基づく損害賠償責任を負うことはない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1122"},{year:"2010",num:"38",subject:"gyo",q:`損失補償に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．収用事業として整備された道路が供用され，通行車両による騒音や振動などで，沿道住民が特別の犠牲を負った場合には，最高裁判所の判例によれば，当該住民に対する損失補償が必要である。
イ．予防接種により重篤な後遺障害をもたらす事故が発生した場合には，伝染病から社会を防衛するという公共目的のために特定個人が特別の犠牲を被ったことから，予防接種により被害を受けた者に対して，最高裁判所は損失補償による救済を認めている。
ウ．火災の際の消防活動において，消防団長が，延焼のおそれはないが消火のために緊急の必要があるとして建築物を破壊した場合，そのために損害を受けた当該建築物の所有者は，損失補償を請求することができる。
エ. 都市計画に用途地域が定められたことにより，土地利用規制を受けることになった者は，都市の整備という公共的利益のために自己の土地所有権に対して特別の犠牲を負うことから，都市計画を定めた地方公共団体に対して損失補償を請求することができる旨の規定が, 法律で置かれている。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2212"},{year:"2010",num:"39",subject:"gyo",q:`行政不服審査法に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．行政不服審査法においては，簡易迅速な手続による国民の権利利益の救済を図ることのみならず，行政の適正な運営を確保することもその目的とされているから，審査請求の審理が開始した以降は，原則として，審査請求人が審査請求を取り下げることはできない。
イ．行政不服審査法においては，行政庁の不作為についての不服申立てをするに当たって，当該不作為庁に上級行政庁がある場合であっても，当該不作為庁に対する異議申立てをすることができるものとされている。
ウ．行政不服審査法においては，手続の簡易迅速性を確保するという観点から，審査請求及び異議申立てについての審理は書面によるものとされ，審査請求人又は異議申立人が口頭で意見を述べる機会は保障されていない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"6"},{year:"2010",num:"40",subject:"gyo",q:`行政組織に関する次のアからウまでの各記述について，法令に照らし，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．Ａ省とＢ省の間で所掌事務の範囲をめぐり紛争が生じた場合には，各省設置法で定められた事務配分をめぐり法的紛争が生じていることから，それぞれの行政機関は裁判所に提訴することができる。
イ．飲食店営業に関して東京都新宿区長Ｃの有する許可権限が同区職員である保健所長Ｄに委任された場合であっても，当該権限の行使につき，ＣはＤに対して指揮監督をすることができる。
ウ．知事が担任する法定受託事務に対し大臣が是正の指示を行った場合において，当該知事は，国地方係争処理委員会に対して審査の申出をすることができ，審査の結果に不服があるときは，裁判所に提訴することができる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"5"},{year:"2010",num:"1",subject:"min",q:`未成年者に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．未成年者は，その法定代理人が目的を定めないで処分を許した財産を自由に処分することができる。
イ．意思表示の相手方が意思表示を受けた時に未成年者であったときは，その意思表示は効力を生じない。
ウ．未成年者は，養親となることができない。
エ．未成年者は，遺言をすることができない。
オ．未成年者Ａの子に対する親権は，Ａの親権者がＡに代わって行使する。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2010",num:"2",subject:"min",q:`Ａから動産甲を購入する旨の契約を締結したＢが，契約締結時に代金のうち一部を支払い，その後，残代金の弁済を提供して動産甲の引渡しを求めたにもかかわらずＡがこれに応ぜず，それから相当期間が経過した後にＡがその住所を去って行方が分からなくなった場合に関する次のアからエまでの各記述のうち，正しいものを組み合わせたものは，後記１から６までのうちどれか。
ア．Ａがその財産の管理人を置かないで行方不明になった場合において，家庭裁判所は，Ｂの請求により，Ａの財産の管理について必要な処分を命ずることができる。
イ．Ｂは，債権者を確知することができないとの理由により，残代金を供託してその債務を免れることができる。
ウ．ＢがＡとの売買契約を解除する旨の意思表示は，公示の方法によってすることができるが，ＢがＡの所在を知らないことについて過失があったときは，公示による意思表示は到達の効力を生じない。
エ．Ａがその住所を去った後国外にいた場合，Ａの債務不履行を理由とする動産甲に係る売買契約の解除権の消滅時効は，その国外にいる期間その進行を停止する。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．ア エ",c4:"４．イ ウ",c5:"５．イ エ",c6:"６．ウ エ",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2010",num:"3",subject:"min",q:`取消しに関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．第三者の強迫によって不動産の売却を承諾した者は，売買の相手方が強迫の事実を知らなかった場合には，その承諾を取り消すことができない。
イ．相手方の詐欺によって不動産の売却を承諾した者は，その承諾を取り消す前に善意の第三者がその不動産を譲り受けて登記を備えた場合において，取消しをその第三者に対抗することができない。
ウ．民法上の詐欺に該当しない場合であっても，事業者が不動産の売買契約の締結について勧誘をするに際し，重要事項について事実と異なることを告げたことにより，消費者がその内容が事実であるとの誤認をして契約の申込みをしたときは，消費者は，その申込みを取り消すことができる。
エ．未成年の時における不動産の売買により代金債務を負担した者は，成年に達した後にその代金を支払った場合であっても，売買の当時未成年者であったことを理由としてその売買を取り消すことができる。
オ．取り消された行為は，初めから無効であったものとみなされるのが原則であるが，婚姻及び養子縁組の取消しは，いずれも将来に向かってのみその効力を生ずる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2010",num:"4",subject:"min",q:`催告に関する次のアからエまでの各記述のうち，正しいものは，後記１から５までのうちどれか。
ア．被保佐人の締結した契約について，相手方が被保佐人に対して１か月以上の期間を定めて，保佐人の追認を得るべき旨の催告をしたにもかかわらず，被保佐人がその期間内にその追認を得た旨の通知を発しないときは，以後，その相手方は被保佐人が締結した契約であることを理由に契約を取り消されることはない。
イ．売買の一方の予約における完結の意思表示について期間を定めなかったときに，予約者が相手方に対し，相当の期間を定めて，売買を完結するかどうかを確答すべき旨の催告をしたにもかかわらず確答がなかったときは，予約者は，相手方に対し，売買契約の履行を請求することはできない。
ウ．債務不履行責任を負う契約当事者が，相手方に対し契約を解除するかどうかを確答すべき旨の催告をしたにもかかわらず確答がなかったときは，以後，その当事者は，相手方から損害賠償の請求を受けることはない。
エ．無権代理人の締結した契約について，相手方が本人に対して，相当の期間を定めて，追認するかどうかを確答すべき旨の催告をしたにもかかわらず確答がなかったときは，その相手方は，本人に対して，契約の履行を請求することができる。`,c1:"１．ア",c2:"２．イ",c3:"３．ウ",c4:"４．エ",c5:"５．正しいものはない",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2010",num:"5",subject:"min",q:`条件及び期限に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．判例によれば，条件の成就によって利益を受ける者が故意に条件を成就させた場合には，相手方は，条件が成就していないものとみなすことができる。
イ．相殺の意思表示には，期限を付することはできるが，条件を付することはできない。
ウ．金銭債務の債務者が担保を提供する義務を負う場合において，担保を提供しないときは，債務者は，期限の利益を主張することができない。
エ．相当の期間を定めて催告をするのと同時に，その期間内に履行されないことを停止条件として解除の意思表示をしても，その解除は無効である。
オ．停止条件付の法律行為は，その条件が単に債務者の意思のみに係るときは，無効である。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2010",num:"6",subject:"min",q:`消滅時効の中断に関する次のアからエまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から６までのうちどれか。
ア．ＡがＢに対して有する債権をＣが連帯保証し，Ｃに対するＡの連帯保証債権を担保するため，Ｄが物上保証人になった場合において，ＡがＤに対して担保不動産競売を申し立て，その手続が進行することは，Ｂの主債務の消滅時効の中断事由に該当する。
イ．物上保証人に対する担保不動産競売の申立てにより，執行裁判所が競売開始決定をし，これが債務者に送達された場合には，債権者の債務者に対する被担保債権について消滅時効は中断する。
ウ．強制競売の手続において執行力のある債務名義の正本を有する債権者がする配当要求は，差押えに準ずるものとして，配当要求に係る債権につき時効中断の効力を生ずる。
エ．強制競売の手続において催告を受けた抵当権者がする債権の届出は，破産手続参加に準ずるものとして，その届出に係る債権につき時効中断の効力を生ずる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．ア エ",c4:"４．イ ウ",c5:"５．イ エ",c6:"６．ウ エ",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2010",num:"7",subject:"min",q:`占有に関する次のアからエまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から６までのうちどれか。
ア．占有主体に変更があって承継された二個以上の占有が併せて主張された場合は，占有者の善意無過失は，最初の占有者の占有開始時に判定される。
イ．他主占有の相続人が独自の占有に基づく取得時効の成立を主張する場合，その占有が所有の意思に基づくものでないことについて，取得時効の成立を争う者が主張立証しなければならない。
ウ．権利能力なき社団の占有する不動産を，法人格を取得した以降，当該法人が引き継いで占有している場合には，当該不動産の時効取得について，その法人格取得の日を起算点として主張することはできない。
エ．他人の所有地上の建物に居住している者がその敷地を占有する権原については，その者がその権原の主張立証責任を負う。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．ア エ",c4:"４．イ ウ",c5:"５．イ エ",c6:"６．ウ エ",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2010",num:"8",subject:"min",q:`差止請求権等の他人に対し行為を請求する権利に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．裁判所は，他人のプライバシーを侵害した者に対し，被害者の請求により，損害賠償に代え，プライバシーを保護するのに適当な処分を命ずることができる。
イ．隣地の竹木の枝が境界線を越えるときは，自らその枝を切除することはできるが，その竹木の所有者に，その枝を切除させることはできない。
ウ．一般財団法人の理事が専ら法人の業務として管理している物を他人が侵奪した場合において，その他人に対し占有回収の訴えを提起して返還を請求することができる者は，その一般財団法人であり，理事個人ではない。
エ．親権者の下で監護されている幼児で意思能力のないものを連れ去り，その子を不当に拘束している者に対しては，人身保護法に基づく救済を請求することができる。
オ．通行のために設定された地役権を有する者は，承役地のうち通路として開設された部分に物件を置いて通行を困難にする者に対し，通路である土地の部分の明渡しを請求することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2010",num:"9",subject:"min",q:`付合と従物に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．土地を使用する権原のない者が作物の種をまき，これを自ら育てた場合には，生育中の作物の所有権は，種をまいた者に帰属する。
イ．所有者を異にする数個の動産が結合して，損傷することなく分離することができなくなった場合には，その合成物の所有権は，主たる動産の所有者に帰属する。
ウ．ガソリンスタンドが営まれている借地上の店舗用建物に設定された抵当権が実行された場合において，競売手続によりその所有権を取得した者は，抵当権設定当時に存した地下タンクの所有権をも取得する。
エ．建物の賃借人は，賃貸人の承諾を得て建物に増築を行っても，増築部分が取引上の独立性を有しない場合には，当該増築部分の所有権を取得しない。
オ．付合した動産について主従の区別をすることができないときは，各動産の所有者のうち一人又は数人の請求により，裁判所がその所有者を定める。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2010",num:"10",subject:"min",q:`共有に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．共有者全員が賃貸人となり共有物を目的とする賃貸借契約が締結された場合，その賃貸借契約を解除するには，共有者全員が解除権を行使しなければならない。
イ．Ａ，Ｂ及びＣが共有者である共有不動産についての裁判による分割において，ＡとＢが原告となり，Ｃを被告として分割請求をした場合，Ｃの持分の限度で現物を分割し，残りの部分をＡとＢの共有とする方法は許される。
ウ．組合財産である不動産について，所有権を有しないにもかかわらず登記簿上その所有者としての登記が行われている者に対して，組合員の一人が単独で登記の抹消を請求することはできない。
エ．被相続人が遺言をしないで死亡したことにより相続人の共有となった財産の分割は，裁判所が判決手続によって行うことができない。
オ．要役地の共有者の一人のために時効の中断がある場合であっても，他の共有者との関係では，消滅時効は進行する。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2010",num:"11",subject:"min",q:"質権に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．質権者は，質物の所有者の承諾がなくても，質物をさらに質入れすることができる。",c2:"２．動産質は，引渡しがなければ効力を生じないことから，同一の動産について，複数の質権が設定されることはない。",c3:"３．不動産質権者は，不動産を使用収益することができるから，当事者間で特約をしても利息を請求することはできない。",c4:"４．法人を債権者とする指名債権の債権質については，確定日付のある証書をもってする通知又は承諾によってのみ，債務者以外の第三者に対する対抗要件を具備することができる。",c5:"５．動産質の質権者が第三者に占有を奪われた場合，質権に基づいて返還請求をすることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2010",num:"12",subject:"min",q:"ＡのＢに対する１０００万円の債権を担保するために甲土地及び乙土地に第一順位の抵当権が設定された場合に関する次の１から４までの各記述のうち，判例の趣旨に照らし誤っているものを２個選びなさい。なお，各記述において，競売の結果として債権者に配当することが可能な金額は，甲土地及び乙土地のいずれについてもそれぞれ１０００万円であり，また，各債権者が有する債権の利息及び損害金は考慮しないものとする。",c1:"１．甲土地及び乙土地をＢが所有し，甲土地にＣが１０００万円の債権を担保するために第二順位の抵当権の設定を受けている場合，甲土地及び乙土地が同時に競売されたときは，Ｃは１０００万円の配当を受けることができる。",c2:"２．甲土地及び乙土地をＢが所有し，甲土地にＣが１０００万円の債権を担保するために第二順位の抵当権の設定を，乙土地にＤが１０００万円の債権を担保するために第二順位の抵当権の設定をそれぞれ受けている場合，甲土地のみが競売されたときは，その後の乙土地の競売の際に，Ｃ及びＤはそれぞれ５００万円の配当を受けることができる。",c3:"３．甲土地をＢが，乙土地をＥが所有し，甲土地にＣが１０００万円の債権を担保するために第二順位の抵当権の設定を，乙土地にＤが１０００万円の債権を担保するために第二順位の抵当権の設定をそれぞれ受けている場合，甲土地のみが競売されたときは，その後の乙土地の競売の際に，Ｃは配当を受けることができず，Ｄは１０００万円の配当を受けることができる。",c4:"４．甲土地をＢが，乙土地をＥが所有し，甲土地にＣが１０００万円の債権を担保するために第二順位の抵当権の設定を，乙土地にＤが１０００万円の債権を担保するために第二順位の抵当権の設定をそれぞれ受けている場合，乙土地のみが競売されたときは，その後の甲土地の競売の際に，Ｃは１０００万円の配当を受けることができ，Ｄは配当を受けることができない。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"14"},{year:"2010",num:"13",subject:"min",q:"ＡがＢに対し有する甲債権を担保するため，Ｂが所有する乙土地を目的とする第一順位の抵当権が設定されてその旨が登記され，また，Ｃが保証人となった場合に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．乙土地について第二順位の抵当権の設定を受けその旨の登記をしているＤに対しＡが抵当権の順位を譲渡する場合において，その旨をＡが債権譲渡の対抗要件に関する規定に従いＢに通知したときには，Ｄは，Ｃに対し抵当権の順位の譲渡を受けたことを対抗することができる。",c2:"２．Ｂに対して債権を有するＥに対しＡが抵当権を譲渡する場合において，その旨をＡが債権譲渡の対抗要件に関する規定に従いＢに通知したときには，Ｅは，Ｃに対し抵当権の譲渡を受けたことを対抗することができる。",c3:"３．Ｄに対しＡが抵当権の順位を譲渡したにもかかわらずその旨の登記がされていない場合において，Ａが乙土地の抵当権をＥに譲渡してその旨の登記をしたときには，Ｅは，Ｄに対し抵当権の譲渡を受けたことを対抗することができる。",c4:"４．ＣがＡに対し保証債務の全額を弁済して乙土地のＡの抵当権に代位の登記をしたときには，その後，Ｂが乙土地をＦに譲渡してその旨の登記がされても，Ｃは，乙土地にＡが有していた抵当権を行使することができる。",c5:"５．Ａが，Ｂに対し有する甲債権をＧに譲渡し，その旨をＢに通知した場合において，Ｇから保証債務の履行を請求する訴訟を提起されたＣは，Ｃに対する債権譲渡の通知がされるまで保証債務を弁済しない旨の抗弁を提出して請求棄却の判決を得ることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2010",num:"14",subject:"min",q:`債権の目的に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．特定物の引渡しを目的とする債権の債務者は，その引渡しをするまで，自己の財産に対するのと同一の注意をもって，その物を保存すべき義務を負う。
イ．外国の通貨で債権額を指定したときであっても，債務者は，外国の通貨でなく日本の通貨で弁済をすることができる。
ウ．弁済期が到来した利息債権は，元本債権から分離して譲渡することができない。
エ．債権の目的が数個の給付の中から選択によって定まるときは，その選択権は，特約のない限り，債権者に帰属する。
オ．債権の目的が２個の給付の中から選択によって定まる場合に，選択権を有しない当事者の過失によらないで，その給付の一方が後に至って不能となったときは，債権の目的は他方に特定する。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2010",num:"15",subject:"min",q:`債権の効力に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．債務者が債務を弁済しない場合に，債権者がその債務の履行を請求する訴えを提起しないという当事者間の合意は，無効である。
イ．債務者が債務を弁済しない場合に，債権者がその債務に係る強制執行をしないという当事者間の合意は，無効である。
ウ．組合の債務者は，その債務と組合員に対する債権とを相殺することができない。
エ．ある債務の消滅時効の完成後に，債務者がそのことを知らずにその債務を弁済したときは，債務者は，不当利得として弁済金相当額の返還を請求することができる。
オ．限定承認をした相続人に相続債務の支払を命ずる判決には，相続財産の限度で支払を命ずる旨の留保をしなければならない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2010",num:"16",subject:"min",q:`安全配慮義務に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．使用者が労働者に対して負担する安全配慮義務に違反したことを理由として損害賠償を請求する訴訟においては，損害賠償を請求する者が，使用者の義務内容を特定し，かつ，義務違反に該当する事実を主張立証する責任を負う。
イ．安全配慮義務に違反したことを理由として損害賠償を請求する場合には，使用者が負う損害賠償債務は，請求を受けた日が経過した時から遅滞に陥る。
ウ．安全配慮義務は，使用者が労働者の生命及び健康等の安全を確保する包括的な義務であるから，使用者の履行補助者が道路交通法に基づいて負うべき注意義務に違反した場合には，その注意義務違反を理由として，使用者の安全配慮義務違反が認められる。
エ．労働者の勤務場所に第三者が侵入して労働者に危害を加えた場合には，その第三者による故意の加害行為が介在していることから，使用者は，安全配慮義務違反による損害賠償責任を負うことはない。
オ．安全配慮義務は，特別な社会的接触の関係に入った当事者間において信義則上認められるものであるから，元請企業が下請企業を用いる場合には，元請企業は，下請企業に雇用される労働者に対しても，安全配慮義務を負うことがある。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2010",num:"17",subject:"min",q:"損害賠償に関する次の１から５までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．弁済期の定めのない金銭消費貸借契約から発生した貸金債権は，貸主が相当の期間を定めずに催告をしても，相当の期間を経過した時から遅滞に陥る。",c2:"２．善意の不当利得者の返還債務は，債務者が履行の請求を受けた日が経過した時から遅滞に陥る。",c3:"３．不法行為と相当因果関係に立つ損害である弁護士費用の損害賠償請求権は，弁護士費用を支出した日が経過した時から遅滞に陥る。",c4:"４．受任者は，委任事務を処理するため自己に過失なく損害を受けたときは，委任者に対し，その賠償を請求することができる。",c5:"５．不動産の売買契約において，その財産権移転義務が売主の責めに帰すべき事由により履行不能となった場合には，買主は，契約を解除することなく填補賠償を請求することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2010",num:"18",subject:"min",q:`保証に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．不動産の売買契約における売主の債務を保証することはできない。
イ．貸金等根保証契約においては，元本の確定期日を定めた場合であっても，極度額を定めなければ，その効力を生じない。
ウ．身元保証人たる地位は，身元保証人が死亡した場合には相続されない。
エ．賃貸借契約において賃借人が賃貸人に対して負う債務を期間の定めなく保証した保証人は，保証契約の成立後相当の期間が経過したときは，保証契約を将来に向けて解約することができる。
オ．賃貸借契約において賃借人が賃貸人に対して負う債務を期間の定めなく保証した保証人は，賃貸借契約の存続期間中に賃借人が死亡し，その相続人が賃貸借契約上の地位を承継したときは，その承継後に生じた賃借人の債務につき責めを負わない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2010",num:"19",subject:"min",q:`債権の譲渡及び契約上の地位の移転についての主張立証責任に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．無断転貸を理由に賃貸借契約を解除して，賃借人に対し目的物の返還を求める賃貸人は，転貸借につき自らが承諾をしていないことを主張立証する必要はない。
イ．譲渡禁止特約付債権が譲渡され，譲受人が債務者に対し譲渡債権の履行を請求する場合，譲受人は，自己が譲渡禁止特約を知らなかったことを主張立証しなければならない。
ウ．自己所有建物を賃貸して賃借人に引き渡していた者がこの建物を譲渡した場合において，建物の譲受人が賃借人に対し賃料の支払を求めるとき，建物の譲受人は，建物所有権移転登記を了していれば，賃貸人の地位の移転につき賃借人の承諾があったことを主張立証する必要はない。
エ．債権が二重に譲渡されたが，債務者がいずれの譲受人にも弁済していない場合において，譲受人の一人が債務者に対し譲受債権の履行を請求するとき，この譲受人は，競合する債権譲渡よりも前に自己への譲渡につき債権譲渡の第三者に対する対抗要件を具備したことを主張立証しなければならない。
オ．債権の譲受人が債務者に対して譲受債権の履行を請求してきたときに，債務者がこれを拒むためには，債権譲渡の通知がなくその承諾もないことを主張立証する必要はない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2010",num:"20",subject:"min",q:"債務の引受けに関する次の１から５までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．免責的債務引受は，債権者，債務者及び引受人の三者の合意によらなければ，効力を生じない。",c2:"２．主たる債務について免責的債務引受がされた場合には，保証債務は存続する。",c3:"３．債権者と引受人との間の合意による併存的債務引受は，債務者の意思に反してすることはできない。",c4:"４．債務者と引受人との間の合意により併存的債務引受がされた場合には，債権者が受益の意思を表示した時に，債権者の引受人に対する債権が発生する。",c5:"５．併存的債務引受がされた場合には，引受人は，引受けに係る債務の消滅時効期間が債務引受までに満了したとしても，その時効を援用することができない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2010",num:"21",subject:"min",q:"弁済の提供に関する次の１から５までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．金銭債務の債務者が弁済のため債権者に提供した額が債務の額にわずかに不足する場合であっても，債務の全額を提供していない以上，弁済の提供の効力が生ずることはない。",c2:"２．金銭債務の債務者が現金を債権者の住所に持参して受領を催告したにもかかわらず，債権者がその受領を拒絶した場合には，債権者の面前に現金を提示しなくても，現実の提供となる。",c3:"３．弁済の準備ができない経済状態にあるため口頭の提供をすることができない債務者は，債権者が弁済を受領しない意思が明確な場合であっても，弁済の提供をしないことによる債務不履行の責任を免れない。",c4:"４．金銭債務の債務者が債務の弁済期に現実の提供をしたが，債権者がその受領を拒絶した場合には，債務者は，提供後の遅延損害金の支払義務を負わない。",c5:"５．債務者が金銭債務の弁済のために債務者個人が振り出した小切手を提供しても，債務の本旨に従った弁済の提供とならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2010",num:"22",subject:"min",q:"贈与に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．書面によらない贈与の受贈者は，贈与者に対して贈与の履行を求めることができない。",c2:"２．特定物を受贈者の負担なく贈与する場合において，目的物に瑕疵があることを贈与者が知らずに贈与したときには，その瑕疵について贈与者は担保責任を負わない。",c3:"３．判例によれば，書面によらない不動産の贈与において，受贈者に登記を移転すれば，引渡しが未了でも，贈与者は贈与を撤回することができない。",c4:"４．判例によれば，贈与において，受贈者にあてた書面がなければ，贈与者は書面によらない贈与として，これを撤回することができる。",c5:"５．死因贈与は，贈与者の単独の行為によってすることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"23"},{year:"2010",num:"23",subject:"min",q:`賃貸借契約に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．賃借人が，賃貸借の目的物について，目的物を通常の使用収益に適する状態で保存するために必要な費用を支出した場合は，賃貸人に対し，賃貸借の終了を待ってその償還を請求することができる。
イ．判例によれば，賃貸借の目的物が譲渡され，その譲受人が賃貸人たる地位を承継した場合において，その承継前に，賃借人が従前の賃貸人に対して賃貸借契約上の未履行の債務を負担していたときには，敷金は従前の賃貸人に対する上記債務の弁済に充当され，残額があれば，その返還債務が譲受人に承継される。
ウ．賃借権が譲渡され，これについて賃貸人の承諾がある場合には，賃貸借関係が同一の内容で譲受人に移転し，従前の賃借人が賃貸人に対して負っていた目的物の保管義務違反による損害賠償債務も当然に譲受人に移転する。
エ．期間の定めのない賃貸借は，いつでも解約の申入れをすることができ，これによって賃貸借は直ちに終了する。
オ．動産の賃借人が，その所有者である賃貸人の承諾を得てこれを転借人に転貸していたところ，賃借人と賃貸人との間の賃貸借の期間が満了し，同賃貸借が更新されなかった場合，賃貸人は転借人に対して，所有権に基づいて目的物の返還を請求することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2010",num:"24",subject:"min",q:`Ａが所有する土地をＡから建物所有目的で賃借したＢが，同土地上に自ら建築して所有する建物をＣに賃貸して引き渡した場合に関する次のアからエまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から６までのうちどれか。
ア．ＢがＣに対し建物を賃貸することをＡが承諾していない場合において，Ａは，この建物賃貸がＢのＡに対する背信行為でないと認められる特別の事情のあるときを除き，Ｃに対し建物の明渡しを請求することができる。
イ．ＡとＢが土地の賃貸借を解除する旨の合意をした場合において，Ａは，特別の事情のない限り，Ｃに対し土地の賃貸借の終了を主張することができない。
ウ．ＡがＢの賃料不払を理由に土地の賃貸借を解除した場合において，Ｃは，Ａが土地の賃料の支払をＣに対し催告しなかったことを理由に，土地の賃貸借の終了を否定することができない。
エ．Ａが土地の賃料の支払をＣに対し催告した場合において，Ｃは，Ｂの意思に反するときは，この催告に応じて賃料を支払うことができない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．ア エ",c4:"４．イ ウ",c5:"５．イ エ",c6:"６．ウ エ",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2010",num:"25",subject:"min",q:"請負契約に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．請負契約は，報酬額が具体的に定められていない場合であっても，報酬額の決定方法が定められていれば成立する。",c2:"２．判例によれば，請負人が注文者に対して報酬請求をしたのに対して，注文者が目的物の瑕疵修補に代わる損害賠償請求権を自働債権とする相殺の意思表示をした場合，注文者は，請負人に対する相殺後の報酬債務について，相殺適状時から履行遅滞による責任を負う。",c3:"３．請負人が注文者に対して報酬請求をした場合に，仕事の目的物に瑕疵があり，注文者が瑕疵の修補を請求したときは，注文者は，報酬の支払を拒むことができる。",c4:"４．判例によれば，建築請負の仕事の目的物である建物に重大な瑕疵があるためにこれを建て替えざるを得ない場合には，注文者は，請負人に対し，建物の建替えに要する費用相当額を損害としてその賠償を請求することができる。",c5:"５．判例によれば，請負人が仕事を完成しない間は，注文者はいつでも損害を賠償して契約の解除をすることができるが，仕事の内容が可分であり，既にその一部が完成し，完成部分が注文者にとって有益なものである場合には，注文者は，未完成部分に限り契約の解除をすることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2010",num:"26",subject:"min",q:`委任契約に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．委任者と受任者との間で報酬を支払う旨の合意がされた場合であっても，委任事務の履行の中途において，受任者が委任契約を解除したときは，受任者は，報酬の支払を請求することができない。
イ．受任者は，委任事務を処理するのに必要と認められる費用を支出したときは，委任者に対し，その費用及び支出の日以後におけるその利息の償還を請求することができる。
ウ．受任者が，委任事務を処理するに当たって，金銭その他の物を受け取ったときは，直ちにこれを委任者に引き渡さなければならない。
エ．受任者が委任事務を処理するために善良な管理者の注意をもって支出した費用は，それが，後日の結果からみて必要ではなかった場合であっても，委任者に対しその償還を請求することができる。
オ．任意後見契約は，公正証書に限らず，その他の書面によってもすることができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2010",num:"27",subject:"min",q:"契約当事者間で債務の履行を請求する訴訟において請求原因として主張立証すべき事実に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．不動産の売買契約に基づき代金の支払を請求する訴訟においては，売買契約が締結されたこと及び代金債権の履行期の定めを請求原因として主張立証しなければならない。",c2:"２．不動産の売買契約に基づき目的物の引渡しを請求する訴訟においては，売買契約が締結されたこと及び同契約の締結当時目的物の所有権が売主に帰属していたことを請求原因として主張立証しなければならない。",c3:"３．動産の賃貸借契約の終了に基づき目的物の返還を請求する訴訟においては，賃貸借契約の締結，これに基づく目的物の引渡し及び賃貸借契約の終了原因事実を請求原因として主張立証しなければならない。",c4:"４．委任契約に基づき受任者が費用の前払を請求する訴訟においては，委任契約が締結されたこと及び委任の報酬の定めを請求原因として主張立証しなければならない。",c5:"５．請負契約に基づき報酬の支払を請求する訴訟においては，請負契約が締結されたこと及び仕事の目的物の引渡しを要するときはこれを引き渡したことを請求原因として主張立証しなければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2010",num:"28",subject:"min",q:"不当利得に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．不当利得における悪意の受益者は，その受けた利益に利息を付して返還しなければならず，なお損害があるときはその賠償の責任も負う。",c2:"２．債務が存在しないにもかかわらず，その事実を知り，又は過失により知らないで，債務の弁済として給付をした者は，その給付したものの返還を請求することができない。",c3:"３．債務者は，錯誤により弁済期にあると誤信して，弁済期にない自己の債務の弁済として給付をした場合には，その給付の返還を請求することができる。",c4:"４．第三者による弁済も有効であるから，錯誤により他人の債務を弁済した場合であっても，その弁済をした者は，債権者に対して返還を請求することはできない。",c5:"５．判例によれば，強行法規に違反する給付は，不法な原因のために給付をしたものとして，返還を請求することができない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2010",num:"29",subject:"min",q:`Ａは自転車を運転して歩道上を走行中，前方不注視により，歩行者Ｂに衝突し，Ｂが負傷した。この事例に関する次のアからエまでの各記述のうち，誤っているものを組み合わせたものは，後記１から６までのうちどれか。
ア．Ａが５歳の幼児である場合，ＡはＢに対して損害賠償義務を負うことはなく，Ａの親権者であるＣが，Ａに対する監督義務を怠らなかったとき及びその義務を怠らなくても損害が生ずべきであったときを除き，Ｂに対して損害賠償義務を負う。
イ．判例によれば，Ａが１４歳の中学生である場合，ＡはＢに対して損害賠償義務を負い，Ａの親権者であるＣはＢに対して損害賠償義務を負うことはない。
ウ．判例によれば，ＡがＤ社の従業員であり，Ｄ社の業務中に自転車を運転していた場合，Ｄ社がＢに対して損害額全額を賠償したときは，Ｄ社はＡに対して信義則上相当と認められる限度において求償することができる。
エ．ＢがＡに対し損害賠償請求をする場合，Ａの過失を主張立証する必要はないが，Ｂの損害の発生及びその額を主張立証する必要がある。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．ア エ",c4:"４．イ ウ",c5:"５．イ エ",c6:"６．ウ エ",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2010",num:"30",subject:"min",q:`次のアからオまでの各権利のうち，形成権としての性質を有するものを組み合わせたものは，後記１から５までのうちどれか。
ア．根抵当権の元本が確定した後の極度額減額請求権
イ．建物の所有を目的とする土地の賃貸借における賃料減額請求権
ウ．建物の賃貸借が終了した後の敷金返還請求権
エ．動産が付合したときの従たる動産の所有者が有する償金請求権
オ．表見相続人に対する真正相続人の相続回復請求権`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2010",num:"31",subject:"min",q:`親族に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．妻の親と夫の親とは姻族である。
イ．直系血族及び兄弟姉妹は，互いに扶養する義務があり，家庭裁判所は，特別の事情があるときは，３親等内の親族間においても扶養の義務を負わせることができる。
ウ．配偶者は，１親等の姻族である。
エ．精神上の障害により事理を弁識する能力を欠く常況にある者については，その者の４親等の親族は，家庭裁判所に後見開始の審判の申立てをすることができる。
オ．直系血族及び３親等内の傍系血族の間では，婚姻することができないので，養子と養親の実子は婚姻することができない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2010",num:"32",subject:"min",q:`養子縁組に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．養子となるべき者が尊属又は年長者であるときは，これを養子とすることはできない。
イ．未成年者を養子とする養子縁組は，自己又は配偶者の直系卑属を養子とする場合を除き，家庭裁判所の許可の審判があった時に成立する。
ウ．配偶者のある者が養子となる縁組をするには，配偶者とともに縁組をする場合又は配偶者がその意思を表示することができない場合を除き，その配偶者の同意を得なければならない。
エ．養子縁組をした養子に子がある場合，養子縁組の日から，養子の子と養親との間において血族間におけるのと同一の親族関係を生ずる。
オ．特別養子縁組の養親となる夫婦の一方のみが２５歳に達していない場合は，その者が２０歳に達していれば，夫婦が共に特別養子縁組の養親となることができる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2010",num:"33",subject:"min",q:`未成年であるＡの母はＢであり，父はＣであるが，ＢがＡの親権者であり，ＢとＣは婚姻をしていない場合に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＢがＡの監護に関して第三者と法律行為をしたときに，Ｃは，これによって生じた債務について，連帯してその責任を負う。
イ．Ａが単独で第三者と法律行為をしたがＣがこれを追認したときは，Ｂは，当該法律行為を取り消すことができない。
ウ．ＡがＣを殺害しようとしたために刑に処せられた場合において，Ａは，Ｃの相続人となることができない。
エ．ＤがＡを殺害した場合において，Ｂ及びＣは，Ｄに対し，それにより被った精神的損害の賠償を請求することができる。
オ．家庭裁判所は，Ｂの意思に反しない場合において，Ａの利益のため必要があると認めるときは，Ａの親族の請求によって，ＢとともにＣを親権者と定める審判をすることができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2010",num:"34",subject:"min",q:"相続人に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．被相続人の兄弟姉妹が相続人となるべき場合，兄弟姉妹のうち相続の開始以前に死亡した者についてはその者の子が代襲して相続人となり，代襲者も相続の開始以前に死亡したときは代襲者の子が相続人となる。",c2:"２．相続の放棄をした者の子は，放棄をした者を代襲して相続人となる。",c3:"３．判例によれば，相続に関する被相続人の遺言書を破棄した者は，破棄が相続に関する不当な利益を得ることを目的とするものでない場合であっても，相続人となることができない。",c4:"４．遺言で推定相続人を廃除する意思が表示された場合は，遺言執行者は，遺言が効力を生じた後遅滞なく家庭裁判所に推定相続人の廃除を請求しなければならない。",c5:"５．相続放棄の申述が家庭裁判所に受理された場合でも，相続の放棄に無効原因があるときは，後日に訴訟において無効であることを主張することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"45"},{year:"2010",num:"35",subject:"min",q:`Ａには妻Ｂとの間に子としてＣとＤがいて，Ｃには妻Ｅとの間に子としてＦとＧがいる場合において，Ａが死亡したときの相続に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａが死亡した時，Ｃは既に７年間生死が明らかでなく，Ａの死亡後Ｅの請求により家庭裁判所が失踪の宣告をし，この審判が確定した場合には，Ａの相続人はＢＤＦＧである。
イ．Ｄが成年に達した後に第三者の養子となっていた場合には，Ａの相続人はＢＣである。
ウ．ＡはＣＦとともに同一の事故で死亡したが，これらのうちの一人が他の者の死亡後になお生存していたことが明らかでない場合には，Ａの相続人はＢＤＧである。
エ．Ａが死亡する前にＥを祖先の祭祀を主宰すべき者に指定し，Ｅがこれを承諾していた場合には，Ａの相続人はＢＣＤＥである。
オ．Ａの請求により家庭裁判所がＣを廃除する審判をし，この審判がＡの生前に確定していた場合には，Ａの相続人はＢＤである。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2010",num:"36",subject:"min",q:"遺言に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．公証人が遺言者に遺言能力があることを認めて公正証書遺言を作成した場合，相続人は，遺言能力がなかったことを理由として公正証書遺言の無効を主張することができない。",c2:"２．公正証書遺言以外の遺言書について検認がされた場合，相続人は，遺言を無効とする事由があることを主張することができない。",c3:"３．遺言は遺言者の死亡の時からその効力を生ずるものであり，停止条件を付した遺言をすることはできない。",c4:"４．受遺者が負担付遺贈の放棄をしたときは，遺言者がその遺言に別段の意思を表示したときを除き，負担の利益を受けるべき者が自ら受遺者となることができる。",c5:"５．判例によれば，遺言執行者がある場合には，相続人は遺言の執行を妨げるべき行為をすることができず，これに違反して相続人が遺贈の目的物についてした処分行為は無効である。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"45"},{year:"2010",num:"37",subject:"syo",q:"株式会社の募集設立に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．発起人以外の者であっても，募集の広告に自己の氏名及び株式会社の設立を賛助する旨を記載することを承諾したものは，発起人とみなされ，発起人の責任に関する会社法の規定の適用を受ける。",c2:"２．設立時取締役を選任する創立総会の決議は，当該創立総会において議決権を行使することができる設立時株主の議決権の過半数であって，出席した当該設立時株主の議決権の過半数をもって行う。",c3:"３．委員会設置会社を設立する場合には，創立総会の決議によって設立時執行役を選任しなければならない。",c4:"４．定款は，公証人の認証を受けた後であっても，創立総会の決議によって変更することができる。",c5:"５．発起人によって払込みの取扱いの場所として定められた銀行は，払い込まれた金額に相当する金銭の保管に関する証明書を発起人に交付した場合，当該証明書の記載が事実と異なることをもって成立後の株式会社に対抗することができない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"23"},{year:"2010",num:"38",subject:"syo",q:"株式に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．株式会社が株式の併合を行う場合，株主総会に先立って株式の併合に反対する旨を当該株式会社に対し通知し，かつ，当該株主総会において当該株式の併合に反対した株主は，当該株式会社に対し，自己の有する株式を公正な価格で買い取ることを請求することができる。",c2:"２．種類株式発行会社が株式無償割当てを行う場合，ある種類の株式の株主に対して，他の種類の株式を割り当てることができる。",c3:"３．判例によれば，甲が乙に対して株式を譲渡した後，乙が株主名簿の名義書換をしていない間に，甲が株式の分割により新株式を取得し，第三者に当該新株式を売却した場合，甲が乙に対して売却代金相当額の金員の不当利得返還義務を負うことはない。",c4:"４．発行済株式の総数１０万株の株式会社が単元株制度を採用する場合，１単元の株式の数は，５００を超えることができない。",c5:"５．株式会社を存続会社及び消滅会社とする吸収合併に際して吸収合併消滅株式会社の株主に吸収合併存続株式会社の株式を交付する場合において，吸収合併存続株式会社が当該吸収合併消滅株式会社の株主に対して交付しなければならない株式の数に１株に満たない端数があるときは，吸収合併存続株式会社は，その端数を切り捨てることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"24"},{year:"2010",num:"39",subject:"syo",q:`新株予約権に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．会社法上の公開会社がいわゆるストック・オプションとして募集新株予約権と引換えに金銭の払込みを要しないで募集新株予約権を発行するには，募集事項の決定を株主総会の特別決議によってしなければならない。
イ．募集に応じて募集新株予約権の引受けの申込みをした者は，募集新株予約権の払込金額の全額を払い込まなくても，割当日に，発行会社から割り当てられた募集新株予約権の新株予約権者となる。
ウ．新株予約権は，当該新株予約権を行使することができる期間が経過した場合には，消却の手続を経ることなく，消滅する。
エ．新株予約権付社債について新株予約権発行無効の訴えに係る請求を認容する判決が確定した場合，当該新株予約権付社債についての社債のみは，なお有効に存続する。
オ．株式会社を存続会社及び消滅会社とする吸収合併において，吸収合併消滅株式会社が発行した新株予約権の内容として，合併をする場合には当該新株予約権の新株予約権者に合併後存続する株式会社の新株予約権を交付することとする旨が定められていたときは，その定めに従い，当該吸収合併消滅株式会社が発行した新株予約権の新株予約権者に吸収合併存続株式会社の新株予約権が交付される。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2010",num:"40",subject:"syo",q:"株式，新株予約権及び株式会社の発行する社債の異同に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．株券，新株予約権証券及び社債券は，非訟事件手続法に定める公示催告手続によって無効とすることができる。",c2:"２．株券，新株予約権証券又は社債券の発行されていない株式，新株予約権又は社債（振替株式，振替新株予約権又は振替社債を除く。）の譲渡は，その株式，新株予約権又は社債を取得した者の氏名又は名称及び住所を株主名簿，新株予約権原簿又は社債原簿に記載し，又は記録しなければ，株式会社その他の第三者に対抗することができない。",c3:"３．株式，新株予約権又は社債が２以上の者の共有に属するときは，共有者は，当該株式，新株予約権又は社債についての権利を行使する者１人を定め，株式会社に対し，その者の氏名又は名称を通知しなければ，株式会社が同意しない限り，当該権利を行使することができない。",c4:"４．株式，新株予約権又は社債の発行に当たり，募集事項の決定の内容として定める募集株式，募集新株予約権又は募集社債の払込金額がこれらを引き受ける者に特に有利な金額であるときは，取締役は，募集事項の決定を行う株主総会において，当該募集をすることを必要とする理由を説明しなければならない。",c5:"５．清算株式会社も，募集株式，募集新株予約権又は募集社債の発行をすることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"14"},{year:"2010",num:"41",subject:"syo",q:`株式会社（清算株式会社を除く。）の機関に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．監査役会設置会社は，取締役会を置かなければならない。
イ．会計監査人設置会社は，当該会計監査人設置会社が委員会設置会社である場合を除き，監査役会を置かなければならない。
ウ．会社法上の公開会社でない大会社は，会計監査人を置かなければならない。
エ．会社法上の公開会社である大会社は，取締役会を置かなければならず，かつ，当該大会社が委員会設置会社である場合を除き，監査役会も置かなければならない。
オ．委員会設置会社は，大会社であることを要しないが，会社法上の公開会社でなければならない。`,c1:"１．ア オ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2010",num:"42",subject:"syo",q:"株主総会の決議要件に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。なお，各記述は，株主総会において決議を要する場合であることを前提とし，かつ，各記述に係る株式会社の定款には，別段の定めがないものとする。",c1:"１．取締役（累積投票によって選任された取締役を除く。）の解任の決議と，監査役の解任の決議とは，決議要件が同じである。",c2:"２．事業の全部の譲渡に係る契約の承認の決議と，吸収分割株式会社においてする吸収分割契約の承認の決議とは，決議要件が同じである。",c3:"３．会社の解散の決議と，吸収合併消滅株式会社においてする吸収合併契約の承認の決議とは，決議要件が同じである。",c4:"４．株式の併合をしようとするときの決議と，株式の分割をしようとするときの決議とは，決議要件が同じである。",c5:"５．株式会社の発行する全部の株式の内容として譲渡による当該株式の取得について当該株式会社の承認を要する旨の定款の定めを設ける定款変更の決議と，会社法上の公開会社でない株式会社において，剰余金配当を受ける権利に関する事項について，株主ごとに異なる取扱いを行う旨の定款の定めを設ける定款変更の決議とは，決議要件が同じである。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"23"},{year:"2010",num:"43",subject:"syo",q:"取締役会設置会社の取締役に対する金銭の貸付けに関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．金銭の貸付けを受けた取締役が弁済期限までに弁済せず，株式会社に損害が生じた場合において，当該貸付けに関する取締役会の承認の決議に賛成した他の取締役が当該株式会社に対して損害を賠償する責任は，当該取締役が職務を行うにつき善意で，かつ，重大な過失がないときは，株主総会の特別決議によって一定の限度で免除することができる。",c2:"２．金銭の貸付けが取締役会の承認を受けずにされた場合には，株式会社は，金銭の貸付けを受けた取締役に対して，当該貸付けに係る契約の無効を主張することができる。",c3:"３．金銭の貸付けを受けた取締役が弁済期限までに弁済せず，株式会社に損害が生じた場合において，当該貸付けに関する取締役会の承認の決議に賛成した他の取締役は，その任務を怠ったものと推定される。",c4:"４．判例によれば，株式会社の取締役が当該株式会社の全株式を所有し，当該株式会社の営業が実質上当該取締役の個人経営のものにすぎないときであっても，当該株式会社が当該取締役に対して金銭の貸付けをするためには，当該貸付けに関する取締役会の承認が必要である。",c5:"５．金銭の貸付けを受けた取締役が弁済期限までに弁済せず，株式会社に損害が生じた場合において，当該貸付けを決定した代表取締役は，職務を行うにつき責めに帰することができない事由によるものであることを証明しても，当該株式会社に対して損害を賠償する責任を免れることができない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"45"},{year:"2010",num:"44",subject:"syo",q:`監査役会設置会社の監査役及び委員会設置会社の監査委員の異同に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．監査役及び監査委員は，いずれも，自己のために株式会社の事業の部類に属する取引をしようとするときは，当該取引につき取締役会の承認を受けることを要しない。
イ．監査役が取締役に対して法令に違反する行為をやめることを請求するためには，監査役会の承認を受けることを要しないが，監査委員が執行役に対して法令に違反する行為をやめることを請求するためには，監査委員会の承認を受けなければならない。
ウ．監査役会設置会社が監査役に対して訴えを提起する場合には，代表取締役が当該監査役会設置会社を代表し，委員会設置会社が監査委員に対して訴えを提起する場合には，株主総会で当該訴えについて当該委員会設置会社を代表する者を定めたときはその者が，当該定めがないときは取締役会の定める者が，当該委員会設置会社を代表する。
エ．監査役を辞任した者及び監査委員を辞任した者は，いずれも，辞任後最初に招集される株主総会に出席して，辞任した旨及びその理由を述べることができる。
オ．監査役はその職務を行うため必要があるときは，また，監査委員会が選定する監査委員は監査委員会の職務を執行するため必要があるときは，いずれも，子会社に対して事業の報告を求めることができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2010",num:"45",subject:"syo",q:"社外取締役，社外監査役及び会計監査人の異同に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．社外取締役，社外監査役及び会計監査人は，いずれも，その会社に対する損害賠償責任について，定款の定めに基づく責任限定契約を会社と締結することができる。",c2:"２．社外取締役，社外監査役及び会計監査人は，いずれも，常勤であることを要しない。",c3:"３．社外取締役，社外監査役及び会計監査人は，いずれも，取締役会に出席し，必要があると認めるときは，意見を述べなければならない。",c4:"４．社外取締役，社外監査役及び会計監査人（監査法人を除く。）は，いずれも，会社の親会社である委員会設置会社の監査委員を兼ねることができる。",c5:"５．社外取締役，社外監査役及び会計監査人は，いずれも，会社の子会社の会計参与（公認会計士に限る。）を兼ねることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"35"},{year:"2010",num:"46",subject:"syo",q:"委員会設置会社における計算書類及び事業報告並びにこれらの附属明細書並びに連結計算書類に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．委員会設置会社が作成しなければならない各事業年度に係る計算書類は，貸借対照表，損益計算書，株主資本等変動計算書及び個別注記表である。",c2:"２．計算書類及び事業報告並びにこれらの附属明細書は，いずれも，監査委員会及び会計監査人の監査を受けなければならない。",c3:"３．定時株主総会の招集の通知に際しては，取締役会の承認を受けた計算書類及び事業報告のみならず，これらの附属明細書並びに監査委員会の監査報告及び会計監査報告も，株主に対して提供されなければならない。",c4:"４．取締役会の承認を受けた計算書類についての会計監査報告の内容に無限定適正意見に係る事項が含まれていれば，監査委員会の監査報告の内容にかかわらず，当該計算書類は定時株主総会の承認を受けることを要しない。",c5:"５．各事業年度に係る連結計算書類を作成した委員会設置会社においては，当該連結計算書類の内容及びその監査の結果は定時株主総会に報告されなければならないが，当該連結計算書類は定時株主総会の承認を受けることを要しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"15"},{year:"2010",num:"47",subject:"syo",q:"株式会社を各当事会社とする合併に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．株主総会の決議による承認を要しない合併契約を除き，委員会設置会社の取締役会は，その決議によって，執行役に当該合併契約の内容の決定を委任することができない。",c2:"２．新設合併において，新設合併設立株式会社は，合併契約に定められた新設合併がその効力を生ずる日から２週間以内に，新設合併設立株式会社の設立の登記をしなければならない。",c3:"３．吸収合併において，吸収合併存続株式会社の反対株主が当該吸収合併存続株式会社に対し会社法所定の手続に従って自己の有する株式を公正な価格で買い取ることを請求した場合，当該株式買取請求の意思表示が当該吸収合併存続株式会社に到達した時に，当該株式買取請求に係る株式の買取りは，その効力を生ずる。",c4:"４．新設合併において，新設合併設立株式会社の株式が１株も発行されないことは，あり得ない。",c5:"５．吸収合併において，吸収合併消滅株式会社の反対株主が当該吸収合併消滅株式会社に対し会社法所定の手続に従って自己の有する株式を公正な価格で買い取ることを請求した場合，当該反対株主は，吸収合併契約に定められた吸収合併がその効力を生ずる日から３０日以内に，裁判所に対し，価格の決定の申立てをすることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"14"},{year:"2010",num:"48",subject:"syo",q:"吸収分割に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．吸収分割株式会社は，その事業に関して有する権利義務の全部を吸収分割承継株式会社に承継させた場合には，吸収分割がその効力を生ずる日に解散したものとみなされる。",c2:"２．吸収分割株式会社の反対株主は，吸収分割株式会社に対し，会社法所定の手続に従って，自己の有する株式を公正な価格で買い取ることを請求することができるが，吸収分割の無効の訴えを提起することはできない。",c3:"３．吸収分割承継株式会社が吸収分割株式会社の特別支配会社であるいわゆる略式分割においては，当該略式分割が法令又は定款に違反する場合であって，吸収分割株式会社の株主が不利益を受けるおそれがあるときであっても，当該株主は，当該吸収分割株式会社に対し，当該略式分割をやめることを請求することができない。",c4:"４．吸収分割の無効は，吸収分割の効力が生じた日から６か月以内に，吸収分割の無効の訴えをもってのみ，主張することができる。",c5:"５．吸収分割は，吸収分割の無効の訴えに係る請求を認容する判決が確定したときには，吸収分割の効力が生じた日にさかのぼってその効力を失う。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2010",num:"49",subject:"syo",q:`株主代表訴訟に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．株主は，株式会社に著しい損害が生ずるおそれがある場合には，株式会社に対する提訴請求をすることなく，直ちに株主代表訴訟を提起することができる。
イ．株主代表訴訟は，株式会社の本店の所在地を管轄する地方裁判所のほか，会社法上の公開会社にあっては，当該株主代表訴訟を提起する株主の普通裁判籍の所在地を管轄する地方裁判所にも提起することができる。
ウ．株式会社が取締役を補助するために株主代表訴訟に参加することは，できない。
エ．判例によれば，取締役が株式会社との取引によって負担することになった債務についての責任は，株主代表訴訟により追及することができる。
オ．株主代表訴訟を提起した株主が敗訴した場合であっても，悪意があったときを除き，当該株主は，株式会社に対し，これによって生じた損害を賠償する義務を負わない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2010",num:"50",subject:"syo",q:`会社の公告に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．株式会社は，定款で公告方法を定めなければならない。
イ．公告方法は，株式会社については，官報に掲載する方法，時事に関する事項を掲載する日刊新聞紙に掲載する方法又は電子公告のいずれかの方法に限られているが，持分会社については，当該持分会社の本店の公衆の見やすい場所に掲示する方法によることができる。
ウ．吸収合併において，吸収合併消滅株式会社が吸収合併の公告を，官報のほか，定款の定めに従い電子公告によりするときは，知れている債権者に対する各別の催告は，することを要しない。
エ．株式会社が電子公告を公告方法とする旨を定める場合においては，事故その他やむを得ない事由によって電子公告による公告をすることができない場合の公告方法として，官報に掲載する方法又は時事に関する事項を掲載する日刊新聞紙に掲載する方法のいずれかを定めることができる。
オ．株式会社は，電子公告を公告方法とする場合には，定時株主総会の終結後遅滞なくしなければならない貸借対照表の公告において，その要旨を公告することで足りる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2010",num:"51",subject:"syo",q:"商業帳簿に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．商人は，営業時間内に債権者から請求を受けたときは，商業帳簿の謄本を交付しなければない。",c2:"２．商人は，商業帳簿を正確に作成しなければならないが，その作成の時期に制約はない。",c3:"３．商人は，商業帳簿として，会計帳簿のほか，貸借対照表及び損益計算書を作成しなければならならない。",c4:"４．商人は，帳簿閉鎖の時から１０年間，その商業帳簿を保存しなければならない。",c5:"５．商人は，営業年度が終了した後遅滞なく，貸借対照表を公告しなければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2010",num:"52",subject:"syo",q:"仲立営業に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．商行為以外の行為の媒介をすることを業とする民事仲立人は，当事者間で行為が成立したときは，当事者の氏名又は商号，行為の年月日及びその要領を記載した書面を各当事者に交付しなければならない。",c2:"２．仲立人の報酬は，最初に行為の媒介を依頼した者が負担する。",c3:"３．仲立人は，別段の意思表示や慣習がない限り，その媒介している行為について当事者のために支払を受けることができない。",c4:"４．仲立人は，その媒介する行為に関して見本を受け取った場合でも，それを保管する義務を負わない。",c5:"５．仲立人は，その媒介する行為が当事者間に成立する前に，報酬を請求することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2010",num:"53",subject:"syo",q:"運送営業に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．湖上を航行する遊覧船の事業者が顧客と締結する契約には，商法第２編第８章に定める運送営業に関する規定は，適用されない。",c2:"２．判例によれば，運送人は，運送品の全部が運送人の過失により滅失した場合には，荷送人又は荷受人に損害が全く生じなかったとしても，引渡しがあるべき日における到達地の価格によって定まる額の賠償責任を負う。",c3:"３．判例によれば，宅配便の運送約款で運送人の荷受人に対する責任の限度額を定めたときは，当該定めは，運送人の荷受人に対する債務不履行に基づく責任には適用されるが，運送人の荷受人に対する不法行為に基づく責任には適用されない。",c4:"４．判例によれば，高価品の運送を委託した荷送人は，当該高価品の種類及び価額を明告しなかったとしても，当該高価品が，容積重量とも相当巨大であって，高価であることが一見明瞭な品種である場合には，その滅失につき運送人に対し損害賠償を請求することができる。",c5:"５．旅客運送人は，旅客から無償で預かった手荷物が旅客運送人の従業員の過失によって毀損したとしても，当該従業員に対する監督を怠っていなければ，損害賠償の責任を負わない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2010",num:"54",subject:"syo",q:`約束手形の偽造及び変造に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．偽造手形の振出行為を振出人とされた本人が追認した場合，当該振出行為は，当初より本人に効力を生ずる。
イ．偽造手形が振り出された場合，受取人が偽造者に本人名義で手形を振り出す権限があると信じるにつき正当な理由がなくても，受取人から当該手形の裏書譲渡を受けた第三者が，偽造者にこのような権限があると信じるにつき正当な理由があれば，当該第三者は，本人に手形債務の請求をすることができる。
ウ．約束手形が偽造されたことを知ってこれを取得した手形所持人に対しては，偽造者は，手形上の責任を負わない。
エ．約束手形の支払期日が変造された場合においては，手形所持人が原文言を立証することができないときは，原文言が判明しないことの不利益は，手形所持人に帰する。
オ．約束手形の受取人欄の記載が変造された場合，手形面上，変造後の受取人から現在の手形所持人へ順次連続した裏書の記載があるときであっても，変造前の記載に従えば裏書が連続していなければ，現在の手形所持人が，当該約束手形の適法な所持人と推定されることはない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2010",num:"55",subject:"syo",q:"手形債権の消滅時効に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．裏書人の他の裏書人及び振出人に対する手形上の請求権は，その裏書人が手形を受け戻した日又は手形金請求の訴えを受けた日のいずれかの日から６月をもって，時効に罹る。",c2:"２．判例によれば，債務の支払のために手形の交付を受けた債権者が債務者に対し手形金請求の訴えを提起したときは，原因債権についても，消滅時効の中断の効力が生ずる。",c3:"３．手形所持人の約束手形の振出人に対する手形債権の消滅時効が中断された場合，その手形保証人に対する手形債権についても，消滅時効の中断の効力が生ずる。",c4:"４．判例によれば，受取人白地の手形による手形金請求の訴えを提起した場合でも，同訴訟の提起時に，手形債権について消滅時効の中断の効力が生ずる。",c5:"５．判例によれば，約束手形の所持人と裏書人との間において裏書人の手形上の債務につき支払猶予の特約がされた場合には，手形所持人の当該裏書人に対する手形上の請求権の消滅時効は，当該猶予期間が満了した時から進行する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2010",num:"56",subject:"mso",q:`筆界（境界）確定の訴えに関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．甲地の所有者Ｘが甲地に隣接する乙地の所有者Ｙに対し，甲地と乙地の筆界（境界）確定の訴えを提起した場合に，Ｙが甲地のうち筆界の全部に接する部分を時効取得したときには，筆界の両側の土地がＹの所有に帰することになるから，Ｘは原告適格を喪失する。
イ．Ｘ所有の甲地とＹ１及びＹ２が共有する乙地が隣接する場合に，Ｘが甲地と乙地の筆界（境界）確定の訴えを提起するときには，必ず共有者Ｙ１及びＹ２の両者を被告としなければならない。
ウ．所有権に基づく土地明渡請求訴訟の係属中に，原告が被告に対し，原告の所有地とそれに隣接する被告の所有地との筆界（境界）確定を求めて追加的に提起した訴えは，土地明渡請求訴訟に関する中間確認の訴えには当たらない。
エ．筆界（境界）確定の訴えの控訴審においては，不利益変更禁止の原則の適用はない。
オ．筆界（境界）確定の訴えにおいて，両当事者が隣接する土地の間にある溝の中央線を筆界とする旨を合意した場合には，裁判所は当該合意に従って筆界（境界）を定めなければならない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2010",num:"57",subject:"mso",q:`裁判所書記官に関する次のアからオまでの各記述について，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．裁判所書記官には，支払督促を発する権限がある。
イ．裁判所書記官は，自ら訴状を審査し，不備があれば補正を命ずることができる。
ウ．訴訟記録の閲覧の請求は，裁判所書記官に対して行う。
エ．当事者が負担すべき訴訟費用の額は，第一審裁判所の裁判所書記官が定める。
オ．当事者が，訴訟の係属中，相手方に対し，主張又は立証を準備するために必要な事項について，書面で回答するよう，書面で照会をする手続は，裁判所書記官を通じて行う。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2010",num:"58",subject:"mso",q:"裁判所の管轄に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．１００万円の請負代金請求と４０万円の売買代金請求とを併合して提起する訴えについては，簡易裁判所に事物管轄がある。",c2:"２．事物管轄に関して管轄違いがある場合には，被告が，第一審裁判所で管轄違いの抗弁を提出せずに本案について弁論をしたときでも，応訴管轄は生じない。",c3:"３．土地の賃貸借契約書に合意管轄の条項がある場合，当該土地の所有者である賃貸人が当該土地の無断転借人に対して当該土地の明渡しを求める訴えには，合意管轄の効力は及ばない。",c4:"４．移送の申立てを却下した決定に対しては，不服を申し立てることができない。",c5:"５．管轄権の存否に疑いがある場合には，裁判所は，職権で証拠調べをすることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"24"},{year:"2010",num:"59",subject:"mso",q:`訴状を却下する命令に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．訴状に，被告である株式会社の代表者の記載がない場合，相当の期間を定めてその期間に不備を補正すべきことを命じた上でなければ，訴状を却下することはできない。
イ．原告が，訴えの提起の手数料を納付しない場合，直ちに訴状を却下することができる。
ウ．訴状を却下する命令が確定した場合，原告は，その不備を補正した上で，再度訴えを提起することは妨げられない。
エ．提訴期間が法律で定められている事件の訴えが，提訴期間経過後に提起された場合，直ちに訴状を却下することができる。
オ．訴えが提起された場合，被告にも判決を受ける利益があるから，訴状を却下する命令を発するためには，被告の意見を聴かなければならない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2010",num:"60",subject:"mso",q:"公示送達に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．公示送達は，当事者の住所，居所その他送達をすべき場所が知れない場合にのみ認められる。",c2:"２．公示送達は，訴状及び期日呼出状についてのみ行うことができ，判決書の送達は公示送達によることができない。",c3:"３．公示送達は，外国においてすべき送達については用いることができない。",c4:"４．公示送達は，裁判所の掲示場に掲示して行い，掲示と同時に送達の効力が生じる。",c5:"５．公示送達による呼出しを受けた者が，口頭弁論期日に欠席したときは，出頭した相手方当事者の主張した事実を自白したものとみなされることはない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2010",num:"61",subject:"mso",q:"準備的口頭弁論と弁論準備手続との比較に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．準備的口頭弁論には，受訴裁判所の構成員全員が関与しなければならないが，弁論準備手続は，受命裁判官に行わせることができる。",c2:"２．弁論準備手続の結果は，その後の口頭弁論において陳述されなければならないが，準備的口頭弁論の結果は，陳述される必要がない。",c3:"３．準備的口頭弁論の期日においても，弁論準備手続の期日においても，両当事者を呼び出して立会いの機会を与えなければならない。",c4:"４．準備的口頭弁論の期日においても，弁論準備手続の期日においても，検証物の証拠調べをすることができる。",c5:"５．準備的口頭弁論の期日においても，弁論準備手続の期日においても，釈明処分として当事者本人の出頭を命ずることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2010",num:"62",subject:"mso",q:`次の【事例】を前提とし，自白の効力に関する後記１から４までの各記述のうち，判例の趣旨に照らし誤っているものを２個選びなさい。
【事 例】
Ｘは，Ａ所有の建物をＡから買い受けたと主張して，当該建物を占有しているＹを被告として，所有権に基づき建物の明渡しを求める訴えを提起した。`,c1:"１．Ｙが抗弁として，Ｘとの間で当該建物について使用貸借契約を締結した旨を主張し，Ｘがこれを認める旨を陳述した場合，Ｙの同意があっても，Ｘは，当該陳述を撤回することができない。",c2:"２．Ｙが抗弁として，Ａとの間で当該建物について，賃料１か月１０万円とする賃貸借契約を締結した旨を主張した場合において，Ｘが，賃貸借契約締結の事実は否認しつつ，ＹがＡに毎月１０万円の金員を支払っていたとのＹの主張部分は認める旨を陳述したときであっても，裁判所は，ＹのＡに対する金員の支払の事実を判決の基礎としなくてもよい。",c3:"３．ＹがＡを賃貸人，Ｙを賃借人とする賃貸借契約書を提出して書証の申出をした場合において，Ｘが，当該契約書は真正に成立したことを認める旨を陳述したときは，裁判所は，当該契約書が真正に成立しなかったと認めることはできない。",c4:"４．Ｙが抗弁として，Ａとの間で当該建物について賃貸借契約を締結した旨を主張し，Ｘがこれを認める旨を陳述した場合，裁判所は，賃貸借契約締結の事実が存在することを判決の基礎としなければならない。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"13"},{year:"2010",num:"63",subject:"mso",q:"証拠調べに関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．裁判所は，事案の解明に必要であると認めるときは，個人に対しても調査を嘱託することができる。",c2:"２．鑑定人が口頭で鑑定意見を述べる場合，当該鑑定人の意見陳述後の質問は，鑑定の申出をした当事者，相手方当事者，裁判長の順に行うのが原則である。",c3:"３．当事者本人の尋問をする場合において，当該当事者が宣誓をした上で虚偽の陳述をしたときは，裁判所は，制裁として尋問事項に関する相手方当事者の主張を真実と認めることができる。",c4:"４．裁判所外で検証を行った場合，検証の結果を証拠資料とするには，口頭弁論期日において，検証調書を書証として取り調べなければならない。",c5:"５．当事者を異にする事件について口頭弁論が併合された場合において，併合前に尋問をした証人について，併合後に再尋問をしたときであっても，併合前の当該証人の証言は，証拠資料となる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2010",num:"64",subject:"mso",q:`自由心証主義に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．自由心証主義は，職権探知主義による訴訟には適用されない。
イ．裁判官は，特定の事実が特定の結果発生を招来した関係について，高度の蓋然性があるとの心証を抱いたときは，因果関係を認定することができる。
ウ．一方の当事者が提出した証拠を取り調べた結果は，他方の当事者がこれを援用しなくても，他方の当事者にとって有利な事実の認定に用いることができる。
エ．裁判官は，自己の判断で経験則を取捨選択して事実認定を行うことができ，取捨選択の当不当が上告理由となることはない。
オ．事実認定において，証拠調べの結果よりも口頭弁論の全趣旨を優先することは許されない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2010",num:"65",subject:"mso",q:"訴えの取下げに関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．上告審においては，訴えを取り下げることができない。",c2:"２．原告側の固有必要的共同訴訟においては，原告の一人による訴えの取下げは効力を生じない。",c3:"３．判例によれば，詐欺脅迫等明らかに刑事上罰すべき被告の行為により訴えの取下げがされるに至った場合であっても，当該訴えの取下げは有効である。",c4:"４．裁判所は，訴えの取下げの有効性について，職権で調査しなければならない。",c5:"５．判例によれば，訴訟外で訴えを取り下げる旨の合意が成立し，被告がその合意の存在を主張立証した場合，裁判所は，請求棄却の判決をしなければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"24"},{year:"2010",num:"66",subject:"mso",q:"請求の認諾に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．訴訟委任による訴訟代理人は，特別の委任を受けなければ，請求の認諾をすることができない。",c2:"２．賃貸借契約終了を理由とする建物明渡請求訴訟において，被告が，約定賃料の２年分に相当する金額の立退料の支払と引換えであれば建物を明け渡してもよい旨を陳述したときは，請求の認諾が成立する。",c3:"３．婚姻無効確認の訴えにおいては，請求の認諾は許されない。",c4:"４．給付請求の認諾が調書に記載されたときは，その記載には執行力が認められる。",c5:"５．請求の認諾をする旨の書面を期日外で裁判所に提出した被告が，口頭弁論，弁論準備手続又は和解の期日に出頭しないときは，裁判所は，その旨の陳述がされたものとみなすことができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2010",num:"67",subject:"mso",q:"判決に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．受訴裁判所が合議体である場合において，判決についての評議が終了した後に，評議に関与した裁判官の一部が判決書に署名押印することができなくなっても，判決の成立は妨げられない。",c2:"２．当事者が主張した主要事実であっても，それが請求を明らかにするものでなく，また，主文が正当であることを示すために必要な主張でもなければ，判決書に摘示しなくてもよい。",c3:"３．判決に法令違反があるときは，裁判所は，いつでも更正決定をすることができる。",c4:"４．判決の理由に食違いがあることは，絶対的上告理由に当たる。",c5:"５．請求の一部について判断を脱漏した判決に対して控訴が提起された後は，第一審裁判所は，脱漏部分について追加判決をすることができない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"35"},{year:"2010",num:"68",subject:"mso",q:"東京都目黒区に住所を有するＸは，自ら自動車を運転して横浜市内の交差点に差し掛かったところ，静岡市に住所を有するＹの運転する自動車と衝突する交通事故に遭った。そこで，Ｘは，Ｙを被告として，不法行為に基づく損害賠償を求める訴えを提起した。この事例に関する次の１から４までの各記述のうち，判例の趣旨に照らし正しいものを２個選びなさい。",c1:"１．Ｘは，２５０万円の支払を求める訴えを静岡地方裁判所，横浜地方裁判所又は東京地方裁判所に提起することができる。",c2:"２．Ｘが慰謝料の支払のみを求める場合，Ｘは，請求の趣旨として「被告は，原告に対し，裁判所が相当と認める金額を支払え。」と記載すれば足りる。",c3:"３．Ｘが，５０万円の治療費及び２００万円の精神的損害が発生したとして，２５０万円の損害賠償を求めた場合において，証拠調べの結果，６０万円の治療費，１００万円の精神的損害が発生したと認定したときは，裁判所は，Ｙに１５０万円の支払を命じるにとどめなければならない。",c4:"４．事故の発生について自己に２割の過失があったと考えたＸが，３００万円の損害の一部請求である旨を明示して２４０万円の損害賠償を求めた場合において，裁判所が，Ｘには３００万円の損害が発生していること及びＸに５割の過失があることを認定するときは，裁判所は，Ｙに１５０万円の支払を命じなければならない。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"14"},{year:"2010",num:"69",subject:"mso",q:"反訴に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．判例によれば，反訴請求が本訴請求又はこれに対する防御方法と関連しない場合には，反訴は不適法である。",c2:"２．判例によれば，土地の占有に基づく占有保持の訴えが係属している場合，被告は，所有権に基づく土地明渡しを求める反訴を提起することができる。",c3:"３．本訴の係属する裁判所とは別の裁判所を専属管轄とする旨の合意がある請求については，これを反訴の目的とすることはできない。",c4:"４．判例によれば，控訴審において第一審で認められた防御方法に基づいて反訴を提起する場合，相手方の同意は不要である。",c5:"５．少額訴訟において，交通事故の損害賠償請求がされたときは，被告は，同一事故に基づく損害賠償請求の反訴を提起することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"35"},{year:"2010",num:"70",subject:"mso",q:"選定当事者に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．選定当事者の選定は，訴訟の係属前においてもすることができる。",c2:"２．選定当事者が当事者となった訴訟の確定判決の既判力は，選定者にも及ぶ。",c3:"３．選定当事者が訴訟の係属中に死亡したときは，その相続人が選定当事者の地位を承継する。",c4:"４．弁護士以外の者を選定当事者に選定する場合であっても，裁判所の許可は必要でない。",c5:"５．固有必要的共同訴訟の係属中において，共同訴訟人の一部がその中から選定当事者を選定することは許される。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2010",num:"71",subject:"mso",q:"独立当事者参加に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．独立当事者参加の申出は，原告及び被告双方を相手方としなければならず，当事者の一方のみを相手方とすることは許されない。",c2:"２．独立当事者参加がされた訴訟においては，原告，被告又は参加人の一人について中断の事由が生ずると，すべての者との関係において訴訟手続が中断する。",c3:"３．判例によれば，上告審における独立当事者参加の申出は，許されない。",c4:"４．独立当事者参加がされた訴訟において原告が脱退した場合，原告と被告との間の請求との関係で訴訟係属は遡及的に消滅し，原告が脱退前にした主張立証は，以後の訴訟における裁判資料とならない。",c5:"５．判例によれば，債権者が債務者に対する甲債権を被保全債権とし，債務者が第三債務者に対して有する乙債権に基づく金銭の支払を求めて債権者代位訴訟を提起した場合，債務者が債権者に対し甲債権の不存在を主張し，第三債務者に対し乙債権に基づく自己への金銭の支払を求めて独立当事者参加をすることは許されない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"23"},{year:"2010",num:"72",subject:"mso",q:"訴訟の承継に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．貸金返還請求訴訟の係属中に，原告が死亡し相続人が訴訟を承継した場合，訴え提起による時効中断の効力は承継人に及ぶ。",c2:"２．貸金返還請求訴訟の係属中に，訴訟の目的である貸金債務について，第三者による免責的債務引受けが行われたため，原告の申立てに基づき，当該第三者に訴訟を引き受けさせる旨の決定がされ，原告が当該第三者に対する請求を定立した場合には，その後の訴訟は被告側の必要的共同訴訟となる。",c3:"３．土地所有権に基づく建物収去土地明渡請求訴訟の係属中に，建物が被告から第三者に譲渡された場合，裁判所は，原告の申立てがあっても，当該第三者に訴訟を引き受けさせることができない。",c4:"４．判例によれば，土地賃貸借契約の終了を理由とする建物収去土地明渡請求訴訟の係属中に，第三者が被告から建物の一部を賃借し，当該建物の一部及び建物敷地の占有を承継した場合，裁判所は，原告の申立てがあっても，当該第三者に訴訟を引き受けさせることができない。",c5:"５．貸金返還請求訴訟の係属中に，貸金債権が原告から第三者に譲渡された場合，裁判所は，被告の申立てにより，当該第三者に訴訟を引き受けさせることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"15"},{year:"2010",num:"73",subject:"mso",q:"控訴に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．二つの請求が併合されている訴訟において，第一審裁判所がそのうちの一つの請求について判決をした場合には，当事者は，残りの請求についての判決を待たなければ，控訴を提起することができない。",c2:"２．判例によれば，第一審裁判所が，訴えを不適法として却下するとの判決をした場合には，請求棄却の判決を求めた被告は，控訴の利益を有する。",c3:"３．請求を一部認容した第一審判決に対し，原告が控訴を提起した場合，控訴裁判所は，訴訟要件がないと判断すれば，不利益変更禁止の原則にかかわらず，訴えを却下することができる。",c4:"４．判例によれば，請求の客観的予備的併合の訴訟で，主位的請求を棄却して予備的請求を認容した第一審判決に対して被告のみが控訴を提起した場合でも，控訴裁判所は主位的請求の当否を判断することができる。",c5:"５．控訴裁判所は，訴えを不適法として却下した第一審判決を取り消す場合，第一審裁判所において本案の審理が尽くされていれば，事件を第一審裁判所に差し戻さなくてもよい。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"14"},{year:"2010",num:"74",subject:"mso",q:`上告の手続に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．最高裁判所に上告がされた場合において，上告人が主張している事由が上告理由に該当しないことが明らかなとき，最高裁判所は，決定で，当該上告を棄却することができる。
イ．最高裁判所への上告は，判決に憲法解釈の誤りがあることその他憲法の違反がある場合のほか，判決に影響を及ぼすことが明らかな法令の違反がある場合に限り許される。
ウ．請求を全部認容する旨の控訴審の判決に対して上告がされた場合，被上告人は，請求を拡張するため，附帯上告をすることができる。
エ．上告裁判所は，職権調査事項を除いて，原判決において適法に確定された事実に拘束される。
オ．高等裁判所が上告審としてした終局判決に対しては，憲法違反を理由として最高裁判所に対して更に不服を申し立てることができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2010",num:"1",subject:"kei",q:`次の【事例】に関する後記アからオまでの各【記述】を判例の立場に従って検討し，正しい場合には１を，誤っている場合には２を選びなさい。
【事 例】
甲は，知人である乙の家に遊びに行った際，乙の書斎の机の引き出し内に乙名義のキャッシュカード及びその暗証番号を記したメモがあるのを見付けた。甲は，乙の気付かないうちに同カードを使って預金を下ろしても，短時間で元の場所に戻しておけば発覚することはないだろうと考え，同カードを乙宅から持ち出した。その後，甲は，同カードを使って近くの金融機関の現金自動預払機から現金５０万円の払戻しを受けた上，乙宅に戻り，同カードを持ち出してから約１０分後に前記引き出し内に同カードを戻した。その際，甲は，同引き出し内に約２０万円分の偽造通貨があるのに気付き，これを乙宅から持ち出した。その日の夜，甲は，その偽造通貨を真正の通貨と偽ってホテルでの宿泊代金の支払に使うこととし，Ａホテルの従業員丙に宿泊を申し込み，偽造通貨であることを秘したまま，その偽造通貨で宿泊代金をあらかじめ支払って宿泊した。丙は，偽造通貨であることに気付いていれば，甲を宿泊させることはなかった。また，甲は，Ａホテルに宿泊中にマッサージチェアに偽造通貨を投入してマッサージを受け，さらに，自己が宿泊している客室備付けのドライヤーを自宅で使おうと思い，これを勝手に持ち帰った。
【記 述】
ア．甲が乙名義のキャッシュカードを持ち出した行為については，窃盗罪は成立しない。
イ．甲が乙名義のキャッシュカードを使用して現金５０万円の払戻しを受けた行為については，窃盗罪が成立する。
ウ．甲が偽造通貨で宿泊代金を丙に支払って宿泊した行為については，偽造通貨行使罪及び詐欺罪が成立し，両罪は牽連犯となる。
エ．甲がマッサージチェアに偽造通貨を投入した行為については，偽造通貨行使罪は成立しない。
オ．甲がドライヤーを持ち帰った行為については，横領罪が成立する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"21222"},{year:"2010",num:"2",subject:"kei",q:"不作為犯に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．真正不作為犯と不真正不作為犯との違いは，刑罰法規そのものが構成要件要素として明文で不作為を規定しているか否かにある。",c2:"２．作為義務を不真正不作為犯の成立要件とすることにより，結果の発生を回避し得る作為をしなかった複数の者の中から不作為犯の主体となり得ない者を除外することができる。",c3:"３．不作為とは「一定の作為をしないこと」を意味するから，他人の住居内で居住者から退去要求を受けた場合になすべき「一定の作為」が「住居から退去すること」だとすると，「その住居内に居座ること」も「その住居内で財物を窃取すること」も不作為である。",c4:"４．不真正不作為犯を認める見解に対しては，「無から有は生じない」から因果関係が認められないという批判があり得るが，期待された作為を行っていたら結果の発生が避けられたであろうという場合には因果関係が認められるとの反論が可能である。",c5:"５．不真正不作為犯の成立要件としての作為義務を認めるためには不作為者が結果発生の原因となる先行行為を行えば足りるとする見解に対しては，故意又は過失によって人に傷害を与えた者が，その後殺意をもってその人を救助せずに放置して死亡させた事案において，不作為による殺人罪が認められる範囲が狭くなり過ぎるとの批判が可能である。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2010",num:"3",subject:"kei",q:"窃盗罪の実行の着手に関する次の１から５までの各記述における甲の行為を判例の立場に従って検討し，誤っているものを２個選びなさい。",c1:"１．甲は，乙がズボンのポケットに財布を入れるのを見て，同財布をすり取ろうとして同ポケットに手を差し伸べ，ポケットの外側に触れた。この場合，財布に触っていないので，窃盗罪の実行の着手は認められない。",c2:"２．甲は，電柱に架設されている電話線を盗もうと考え，電柱に登って切断用具を電話線に当て，その切断を始めたが，警察官に発見されたため，電話線の被膜を傷付けただけにとどまった。この場合，電話線を切断していなくても，窃盗罪の実行の着手が認められる。",c3:"３．甲は，乙所有の自動車を運転して盗み出すため，不正に入手した同自動車のスペアキーを使い，駐車場に駐車してある同自動車の運転席のドアを開けた。この場合，運転席に乗り込む前でも，窃盗罪の実行の着手が認められる。",c4:"４．甲は，金品を盗もうと考え，深夜，無人の店舗内において，懐中電灯で真暗な店内を照らしたところ，食品類が積んであることが分かったが，なるべく現金を盗みたいと思い，現金がある精算レジに近づいた。この場合，未だレジ内を物色していないので，窃盗罪の実行の着手は認められない。",c5:"５．甲は，不正に取得した乙名義のキャッシュカードを使用して同人の預金口座から現金を引き出そうと考え，同カードを銀行の現金自動預払機に挿入し，暗証番号を入力した。甲は，同カードの正しい暗証番号を知っていたが，その入力を誤ったため払戻しを受けることができなかった場合でも，窃盗罪の実行の着手が認められる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"14"},{year:"2010",num:"4",subject:"kei",q:"正当防衛に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．相手方による侵害を予期している者が，その侵害から自己の権利を防衛するには侵害に先んじて相手方に加害行為をすることが効果的な状況において，相手方による侵害が間近に押し迫る前に加害行為をした場合，正当防衛が成立する余地はない。",c2:"２．相手方による侵害を予期していた者が，それを避けずにその侵害に臨み，予期された侵害に対し反撃した場合，正当防衛が成立する余地はない。",c3:"３．相手方を挑発して相手方による侵害を自ら招いた者が，それに対し反撃した場合，正当防衛が成立する余地はない。",c4:"４．いわゆるけんか闘争状態にある者が，相手方に対して加害行為をした場合，正当防衛が成立する余地はない。",c5:"５．相手方による侵害に対し反撃した者が，その侵害から予想された被害よりも大きい被害を相手方に与えた場合，正当防衛が成立する余地はない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2010",num:"5",subject:"kei",q:`次の【事例】に引き続く甲の行為に関する下記アからオまでの各【記述】を判例の立場に従って検討し，甲に（ ）内の犯罪が成立する場合には１を，成立しない場合には２を選びなさい。
【事 例】
甲は，人通りの少ない道路を通行中，知人の乙が見知らぬ丙を「金を出せ。」と言いながらロープで縛り上げ，丙を道路脇の草むらの中に連れ込むのを偶然目撃した。
【記 述】
ア．甲が，草むらをのぞくと，乙が丙の上着のポケットを探って所持金を奪おうとしていた。甲は，後で乙から口止め料をもらおうと考え，あえて何もせずにその場から立ち去った。乙は，甲にのぞかれたことに気付かないまま，丙の所持金を奪った。（強盗罪の従犯）
イ．甲が，乙が立ち去ったのを見届けてから草むらの中に入ったところ，丙が縛られたままでいたので，甲は，丙が身に付けていた腕時計を奪った。（強盗罪の共同正犯）
ウ．甲は，警察官が近付いてきたので，そのことを乙に知らせるために草むらに行ったところ，丙から奪った現金を着衣のポケットにしまった乙が，草むらから出ようとしていた。甲が乙を草むら内に押し戻して警察官をやり過ごしたため，乙の犯行はその場で発覚せずに済んだ。（強盗罪の従犯）
エ．甲は，草むらの中に入り，同所で，丙の所持金を奪って山分けすることを乙と合意した。その上で，乙が緩んでいたロープをきつく縛り直した後，甲は，丙の所持金をその上着のポケットから奪った。（強盗罪の共同正犯）
オ．甲が，草むらをのぞくと，乙が丙の上着のポケットを探って所持金を奪おうとしていた。甲が，乙に気付かれることなく草むらから道路に戻ろうとしたところ，付近住民の丁が，野草摘みのため草むらに入ろうとしていた。甲が，後で乙から分け前を得るため，丁に「スズメバチの巣があるから危ない。」と嘘を言って丁を追い払ったため，その間に乙は丙の所持金を奪うことができた。（強盗罪の従犯）`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"22211"},{year:"2010",num:"6",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討し，誤っているものを２個選びなさい。",c1:"１．甲が，Ａを脅迫する意図でＡ宅に宛てて「お前の家に火をつけてやる。」と記載した手紙を郵送したところ，同手紙が誤ってＡ宅の隣のＢ宅に配達され，Ｂがこの手紙を読んで畏怖した。甲には，Ｂに対する脅迫罪が成立する。",c2:"２．甲が，乙に対し，Ａの弱みに付け込んでＡから現金を喝取するように唆したところ，乙は，その旨決意し，深夜，公園にいるＢをＡと誤認して，現金を喝取しようとしてＢを脅迫したが，人違いのため現金を喝取できず，その直後，Ａを上記公園に呼び出し，Ａから現金を喝取した。甲には，Ａに対する恐喝既遂罪の教唆犯とＢに対する恐喝未遂罪の教唆犯が成立する。",c3:"３．甲は，１２歳のＡを１５歳と誤信し，Ａに対して暴行・脅迫を加えずにわいせつな行為をした。甲には，強制わいせつ罪が成立する。",c4:"４．甲が，乙に対し，Ａに暴行を加えるように唆したところ，乙は，その旨決意し，Ａに暴行を加えたが，暴行を加えているうちに傷害の故意を生じ，その後の暴行による傷害が致命傷となってＡは死亡した。甲には，傷害致死罪の教唆犯が成立する。",c5:"５．甲は，Ａが甲に射殺されることに同意したため，Ａに対し，殺意をもってけん銃を発射したが，銃弾は，Ａに当たらずにＡの頭部をかすめ，Ａの背後にいて甲がその存在を認識しておらず，甲に射殺されることに同意していなかったＢに命中して同人を死亡させた。甲には，Ａに対する同意殺人未遂罪とＢに対する殺人既遂罪が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"35"},{year:"2010",num:"7",subject:"kei",q:"次の１から５までの各記述は，甲の占有する自転車を窃取した疑いで警察官の取調べを受けた被疑者の供述であるが，これらを判例の立場に従って検討した場合，その供述の内容が窃盗罪の成立を否定する主張となるものを２個選びなさい。",c1:"１．「この自転車を自宅に持ち帰って分解し，売れそうな部品を中古部品屋に売却しようと思っていた。」",c2:"２．「この自転車は，河原に捨ててあったので，通勤で使うために自宅に持ち帰ったものだ。」",c3:"３．「駅に行く必要があったので，約３０分ほどこの自転車に乗り，駅に着いたら駅前に乗り捨てるつもりだった。」",c4:"４．「この自転車は，私が甲に貸してあったもので，甲が約束の期限を過ぎても返さないので，甲のいないすきに甲宅から自宅に持ち帰ったものだ。」",c5:"５．「この自転車は，甲に対する嫌がらせのため自宅の物置に隠しておこうと持ち帰ったものだ。」",c6:"",c7:"",c8:"",c9:"",c10:"",a:"25"},{year:"2010",num:"8",subject:"kei",q:`次のアからオまでの各事例における甲の罪責について，判例の立場に従って検討し，（ ）内の犯罪が既遂になる場合には１を，未遂にとどまる場合には２を，既遂にも未遂にもならない場合には３を選びなさい。
ア．甲は，行使の目的をもって一万円札を偽造しようとしたが，印刷機器の操作を間違えたため，出来上がったものは，一般人が一見して真正の通貨と誤認するには至らない程度のものであった。（通貨偽造罪）
イ．甲は，乙方応接間で乙と雑談中，乙が部屋を出たすきに隣室にある金目の物を探して窃取しようと思い立ち，乙に対し，「お茶が欲しい。」と言って，乙を台所に行かせたが，乙の娘が応接間に入ってきたため，隣室に行くことができなかった。（窃盗罪）
ウ．甲は，通行中の女性乙に自動車内で暴行を加えて姦淫する目的で，激しく抵抗する乙を自動車内に引きずり込み，数キロメートル離れた河原まで自動車を走行させたが，乙がすきを見て逃走したため，姦淫できなかった。（強姦罪）
エ．甲は，深夜，強盗の目的で会社事務所に入り込み，一人で勤務していた事務員乙を縛り上げ，持参したボストンバッグに同事務所に設置された金庫内の現金を詰め込んで手に持ち，同事務所の出入口から外に出ようとしたところ，駆けつけた警察官に同事務所内で逮捕された。（強盗罪）
オ．甲は，乙から現金を喝取する目的で，現金の交付を要求する脅迫状を乙宅に郵送したが，乙が不在中に同脅迫状を受け取って読んだ乙の妻が直ちに警察に届け出たため，甲は現金を取得できなかった。（恐喝罪）`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"23212"},{year:"2010",num:"9",subject:"kei",q:"背任罪の構成要件に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．「自己若しくは第三者の利益を図る目的」の「利益」とは，経済的利益のことをいい，社会的地位や信用等の身分上の利益を含まない。",c2:"２．「自己若しくは第三者の利益を図る目的」があるというためには，主として自己又は第三者の利益を図る目的があれば足りるが，これと本人の利益を図る目的とが併存している場合は含まない。",c3:"３．「他人のためにその事務を処理する者」の「事務」は，法律行為たる事務に限らず，事実行為たる事務を含む。",c4:"４．「財産上の損害」は，経済的見地から把握されるべきものであるから，返済の可能性が著しく低い無担保貸付けについては，その債務不履行が確定しなければ損害が発生したとはいえない。",c5:"５．「本人に損害を加える目的」があるというためには，加害の点につき意欲ないし積極的認容が必要である。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2010",num:"10",subject:"kei",q:"中止犯に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．強盗予備罪について中止犯が成立し得る。",c2:"２．犯罪を共同して実行する旨の共謀が成立した後に，共犯関係からの離脱が認められる場合，離脱者には，常に中止犯が成立する。",c3:"３．行為者が，幼児を山中に連れて行き置き去りにしたが，その後，後悔して山中に戻り，衰弱した幼児を病院に運び込んで医師の治療を受けさせ，これにより幼児の容体が快復した場合には，遺棄罪の中止犯が成立し得る。",c4:"４．中止犯が成立するには，必ずしも行為者が単独で結果発生を防止する必要はない。",c5:"５．中止犯が成立する場合，必ずその刑が免除される。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2010",num:"11",subject:"kei",q:`次のアからオまでの各記述を判例の立場に従って検討し，甲に（ ）内の犯罪が成立する場合には１を，成立しない場合には２を選びなさい。
ア．甲は，質権者乙の委託を受けて質物である高級腕時計を保管していたが，乙に無断で，これを，質権の被担保債権の債務者で同腕時計の所有者でもある丙に返した。（委託物横領罪）
イ．甲は，出資金名目で金をだまし取ろうと考え，乙に対し，架空の投資案件を持ちかけたところ，乙は，甲の話が嘘であることに気付いたものの，甲が金に困っているのに同情して現金を甲に渡した。（詐欺既遂罪）
ウ．甲は，乙社に勤務し，同社の取引先からの集金業務に従事していたところ，取引先から現金５０万円を集金した後，これを自己の借金の返済に充てようと思い付き，上司に「集金の途中でひったくりに遭った。」と嘘の報告をし，５０万円を同社に納めるのを免れた。（業務上横領罪）
エ．甲は，偽札を作る意思がないのに，乙に対し，一緒に偽札を作ることを持ちかけた上，偽札を作る機材の購入資金にすると嘘を言って資金の提供を求め，その旨誤信した乙から同資金として現金の交付を受けた。（詐欺既遂罪）
オ．甲は，乙社の出張所に一人で勤務し，所長として同出張所の電気機器の使用・管理や光熱費の支払事務などを任されていた。甲は，毎夜，趣味の夜釣りをするため，乙社の承諾を得ずに，同出張所のコンセントに自己の集魚灯の電源コードを差し込んで電気を使用した。（業務上横領罪）`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"22112"},{year:"2010",num:"12",subject:"kei",q:"共犯に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．殺人の故意を有する者と傷害の故意を有する者との間では，共同正犯が成立する余地はない。",c2:"２．刑法第６０条にいう「犯罪」には，教唆犯・従犯も含まれるので，共同して教唆・幇助行為に及んだ者には教唆犯・従犯の共同正犯が成立し得る。",c3:"３．成人が刑事未成年者に指示して犯罪を行わせた場合，成人と刑事未成年者との間で共同正犯が成立することはなく，成人に間接正犯が成立するにすぎない。",c4:"４．刑法第６５条にいう「身分」は，犯人の一身的な継続的属性に限られる。",c5:"５．窃盗の共謀に基づき実行行為を分担することとなった者が，財物を強取した後，実行行為を分担しなかった共犯者にその旨話し，同人がこれを了承して上記財物をもらい受けた。この場合，実行行為を分担しなかった共犯者にも強盗の共同正犯が成立し得る。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2010",num:"13",subject:"kei",q:"略取誘拐罪に関する次の１から５までの各記述を判例の立場に従って検討し，正しいものを２個選びなさい。",c1:"１．略取誘拐罪において，略取誘拐の手段としての暴行脅迫や欺罔誘惑は，被拐取者に対してなされる必要がある。",c2:"２．営利目的等略取誘拐罪にいう「結婚の目的」の「結婚」には，法律婚のみならず事実婚も含まれる。",c3:"３．身の代金目的略取誘拐罪にいう近親者その他被拐取者の「安否を憂慮する者」は，被拐取者の安否を親身になって憂慮するのが社会通念上当然とみられる特別な関係が被拐取者との間にある者に限らず，同情から被拐取者の安否を気遣うにすぎない第三者も含む。",c4:"４．共同親権者の一人が，他の共同親権者の監護下にある未成年の子を略取する行為については，未成年者略取罪は成立し得ない。",c5:"５．身の代金目的略取誘拐罪の犯人が，被拐取者を安全な場所に解放した場合，その解放の時期が当該犯人に対する公訴の提起前であれば，その刑は減軽される。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"25"},{year:"2010",num:"14",subject:"kei",q:"責任能力に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．責任能力の有無・程度は，行為者の犯行当時の精神状態だけではなく，行為者の犯行前の生活状況，犯行の動機・態様等のほか，被害者やその遺族の処罰感情も含む諸事情を総合的に考慮して判断される。",c2:"２．相手を包丁で突き刺した時点では行為者に責任能力が存在するが，その相手が死亡した時点では責任能力が存在しない場合，行為者に死亡の結果について刑事責任を問うことはできない。",c3:"３．１３歳の少年であっても，故意の犯罪行為により被害者を死亡させた場合においては，事件の重大性等の諸般の事情を考慮し，刑罰が科されることがある。",c4:"４．アルコールの影響により正常な運転が困難な状態で自動車を走行させて人を負傷させた危険運転致傷事件の行為者については，この類型の危険運転致傷罪が運転者の飲酒酩酊を前提としているにもかかわらず，責任能力が否定されることがある。",c5:"５．犯行当時の行為者が，心神喪失状態にあった場合は処罰されないが，心神耗弱状態にあった場合は必ずその刑が減軽又は免除される。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2010",num:"15",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか（ただし，甲は，「行使の目的」又は「人の財産上の事務処理を誤らせる目的」を有するものとする。）。",c1:"１．司法警察員甲が，参考人乙に対する事情聴取を行ったところ，乙は客観的事実と異なる供述をした。甲は，同供述が客観的事実と異なることが分かったものの，乙の供述をそのまま録取した供述調書を作成し，これに自ら作成者として署名押印した。甲には，虚偽公文書作成罪が成立する。",c2:"２．甲は，乙所有の建物の売買契約書を会員制クラブの入会申込書であると偽って乙に示し，乙をしてその旨誤信させてその売主欄に署名押印させた。甲には，有印私文書偽造罪の間接正犯が成立する。",c3:"３．甲は，内容虚偽の旅券申請書を作成して旅券の交付を申請し，旅券の交付を受けた。甲には，詐欺罪が成立するので，免状等不実記載罪は成立しない。",c4:"４．市立病院に勤務する公務員である医師甲が，同病院の医師として同病院の患者が裁判所に提出するための診断書を作成するに当たり，同診断書に虚偽の病名を記載した。医師である甲には，虚偽診断書等作成罪が成立するので，虚偽公文書作成罪は成立しない。",c5:"５．甲は，乙から詐取した携帯電話機に保存された電子マネーを使って商品を購入し，同電話機に保存された電子マネーの残高を減少させた。甲には，支払用カード電磁的記録不正作出罪が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2010",num:"16",subject:"kei",q:"次の１から５までの各記述における甲の罪責を判例の立場に従って検討し，正しいものを２個選びなさい。",c1:"１．甲は，乙が丙の住居及び丁の住居に侵入することを決意しているのを知り，乙に対し，侵入用具としてドライバー１本を貸与し，その翌日，乙はこれを利用して丙の住居及び丁の住居にそれぞれ侵入した。甲には，２個の住居侵入罪の従犯が成立し，両罪は観念的競合となる。",c2:"２．甲は，乙方から絵画を盗み，自宅に持ち帰ったが，その後売却先が見付からなかったため，その絵画を破り捨てた。甲には，窃盗罪と器物損壊罪が成立し，両罪は併合罪となる。",c3:"３．甲は，自己が経営する店において，１週間のうちに，同店を訪れた複数の客に対し，いずれも同じ題名・内容のわいせつ図画に該当するＤＶＤを数回にわたって販売した。甲には，わい せつ図画販売罪の一罪が成立する。",c4:"４．甲は，自己の運転する自動車を脇見運転により通行人乙に衝突させて同人を死亡させた上，慌ててその場から逃走しようとして安全確認を怠って自車をＵターンさせたため，折から対向車線を走行してきた丙運転の自動車に自車を衝突させて同人に傷害を負わせた。甲には，自動車運転過失致死罪と自動車運転過失傷害罪が成立し，両罪は観念的競合となる。",c5:"５．甲は，郵便局の窓口で，偽造された郵便貯金払戻請求書１通を，不正に入手した他人名義の貯金通帳とともに郵便局員乙に提出して貯金の払戻しを請求し，これを正当な払戻請求と誤信した乙から貯金の払戻しを受けた。甲には，詐欺罪の一罪のみが成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"13"},{year:"2010",num:"17",subject:"kei",q:"次の１から５までの各記述における甲の罪責を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．甲は，殺人事件の被疑者として逮捕状が発付されている乙が犯人ではないと信じ，乙に隠れ家を提供して同人をかくまったが，その後，発見逮捕された乙が真犯人であることが明らかとなり，同人に対する有罪判決が確定した。甲は乙が犯人ではないと誤信していたので，甲に犯人蔵匿罪は成立しない。",c2:"２．甲は，傷害事件で勾留されている乙の起訴を免れさせるために，丙に対し，乙の身代わり犯人となるように唆し，これにより丙は，警察に出頭して上記傷害事件の真犯人は自分である旨虚偽の事実を申告した。乙は既に拘束されているので，甲に犯人隠避教唆罪は成立しない。",c3:"３．甲は，被告人乙の刑事裁判を有利に運ぶために，同人に不利益な事実を知っている証人予定者の丙を人里離れた山中の別荘に監禁した。人的証拠も「証拠」に該当するので，甲に証拠隠滅罪が成立する。",c4:"４．甲は，親友乙が丙を殺害した事実を知り，乙の罪を免れさせようと考え，捜査機関が同事実の存在を知る前に，自殺する旨の記載のある丙名義の遺書を作成して丙の遺族に送付した。捜査機関は未だ捜査を開始していないので，甲に証拠偽造罪は成立しない。",c5:"５．甲は，殺人事件の被疑者として警察に追われていたため，知人乙にその事情を打ち明けて同人所有の別荘に住まわせてくれるように依頼し，これを承諾した乙から同別荘の鍵を受け取って同別荘に身を隠した。犯人自身に逃げ隠れしないことを期待できないので，甲に犯人蔵匿教唆罪は成立しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2010",num:"18",subject:"kei",q:`次のアからオまでの各記述における甲の罪責を判例の立場に従って検討した場合，誤っているものの個数を後記１から５までの中から選びなさい。
ア．甲が，財物奪取の意思で乙に脅迫を加えてその反抗を抑圧し，同人のポケットから財物を奪ったが，財物を奪われたことに乙が気付かなかった場合，強盗既遂罪（刑法第２３６条第１項）は成立しない。
イ．甲が，財物奪取の意思で乙の頭部を強打して意識を喪失させた上で乙の財物を奪った場合，昏酔強盗既遂罪（刑法第２３９条）が成立する。
ウ．甲が，乙から財物をだまし取って財物の占有を確保した後に，だまされたことに気付いた乙から上記財物の返還を要求され，その返還を免れるため，乙に対し，暴行を加えて財物の取戻し行為を抑圧した場合，強盗既遂罪（刑法第２３６条第１項）が成立する。
エ．甲が，乙を殺害した後に初めて財物奪取の意思を生じ，乙が身に付けていた腕時計をその場で奪った場合，強盗殺人既遂罪（刑法第２４０条後段）が成立する。
オ．甲が，財物奪取の意思で乙宅に乙の留守中に侵入し，乙の甥でたまたま留守番をしていた丙（１５歳）に対し，暴行を加えてその反抗を抑圧し，タンス内から乙が所有し管理する衣類を奪った場合，強盗既遂罪（刑法第２３６条第１項）は成立しない。`,c1:"１．１個",c2:"２．２個",c3:"３．３個",c4:"４．４個",c5:"５．５個",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2010",num:"19",subject:"kei",q:"次の１から５までの各記述のうち，正しいものを２個選びなさい（ただし，甲には，刑の減免事由及び各記述に記載された以外の前科はないものとする。）。",c1:"１．甲は，併合罪関係にあるＡ罪（法定刑は５年以下の懲役）とＢ罪（法定刑は２０万円以下の罰金）を犯して両罪で起訴された。この場合，裁判所は，甲に対し，懲役２年及び罰金１０万円の判決を言い渡すことができる。",c2:"２．甲は，併合罪関係にあるＡ罪（法定刑は１０年以下の懲役）とＢ罪（法定刑は３年以下の懲役）を犯して両罪で起訴された。この場合，裁判所は，甲に対し，懲役１５年の判決を言い渡すことができる。",c3:"３．甲は，判決により懲役２年，３年間執行猶予（保護観察なし）に処せられ，同判決が確定してから１年後，Ａ罪（法定刑は３年以下の懲役）を犯して同罪で起訴され，同年中に判決宣告日を迎えた。この場合，裁判所は，甲に対し，懲役１年，３年間執行猶予（保護観察なし）の判決を言い渡すことができる。",c4:"４．甲は，判決により懲役３年，５年間執行猶予（保護観察なし）に処せられ，同判決は確定した。その１年後，甲は，Ａ罪（法定刑は５年以下の懲役）を犯して同罪で起訴され，裁判所は，その半年後，甲に対し，懲役１０月の判決を言い渡し，同判決は直ちに確定した。この場合，甲に対する執行猶予の言渡しは取り消さなければならない。",c5:"５．甲は，判決により懲役２年，４年間執行猶予（保護観察付き）に処せられ，同判決は確定し，その後執行猶予が取り消されることはなかった。同判決の確定から５年後，甲は，Ａ罪（法定刑は５年以下の懲役）を犯して同罪で起訴された。この場合，裁判所は，甲に対し，懲役７年６月の判決を言い渡すことができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"14"},{year:"2010",num:"20",subject:"kei",q:`次の【事例】における甲の罪責を判例の立場に従って検討し，後記アからエまでの【罪名】のうち，その罪名に係る犯罪が成立する場合には１を，成立しない場合には２を選びなさい。
【事 例】
甲は，乙及びその妻子全員が１週間の旅行に出ていて留守であると聞いていた乙宅に，窃盗の目的で侵入し，金庫を開けたところ，乙の妻子は旅行中だったものの，一人で在宅していた乙に発見され，「泥棒」と叫ばれた。甲は，捕まっては大変だと思い，乙にナイフを突き付け，「静かにしろ。」と言ったところ，乙は，慌てて逃げ出そうとして転倒し，暖炉の角に頭部をぶつけた結果，脳内出血を起こして死亡した。甲は，乙の死亡を確認した上，金庫の中にあった多量の宝石と多額の現金を奪った後，犯行の痕跡を消し去ろうと考えて乙宅に火を放ち，乙宅は全焼した。その後，甲は，上記宝石を丙に売却することとしたが，その際，上記事情を知る丁に依頼して，丁が運転する自動車に乗り，丁と一緒に同宝石を丙宅まで運搬した。
【罪 名】
ア．強盗致死罪
イ．証拠隠滅罪
ウ．非現住建造物等放火罪
エ．盗品等運搬罪`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1222"},{year:"2010",num:"21",subject:"kso",q:`捜査機関が行った捜査に関する次のアからキまでの各記述のうち，違法となるものの組合せは，後記１から７までのうちどれか。
ア．司法巡査が，器物損壊被疑事件の被疑者を現行犯人として逮捕した後，留置の必要がないと考え，すぐに釈放した。
イ．検察事務官が，検察官の指揮を受け，詐欺被疑事件の被疑者を呼び出して，その取調べを行った。
ウ．司法警察員が，変死の疑いのある死体につき，検察官から命じられて検視を行った。
エ．検察官が，被疑者の身体の拘束がないまま警察から送致を受けた窃盗被疑事件につき，罪証隠滅のおそれがあるとして，裁判官から逮捕状の発付を受けて被疑者を逮捕した。
オ．司法巡査が，裁判官が発付した逮捕状により，被疑者を逮捕した。
カ．検察事務官が，裁判官が発付した捜索差押許可状により，被疑者の居宅を捜索した。
キ．司法巡査が，裁判官に対し被疑者の逮捕状の発付を請求した。`,c1:"１．ア オ",c2:"２．ア キ",c3:"３．イ エ",c4:"４．イ カ",c5:"５．ウ エ",c6:"６．ウ カ",c7:"７．オ キ",c8:"",c9:"",c10:"",a:"2"},{year:"2010",num:"22",subject:"kso",q:`次の【記述】は，被疑者甲に係る殺人被疑事件の捜査手続に関するものである。【記述】中の①から⑦までの()内から適切な語句を選んだ場合，その組合せとして正しいものは，後記１から５までのうちどれか。
【記 述】
　Ｈ警察署の司法警察員警部Ｘは，殺人被疑事件につき，逮捕状に基づいて，平成２１年５月６日午後３時４５分，被疑者甲を逮捕した。司法警察員警部Ｘは，被疑者甲を検察官に送致するに当たり，同月①（ａ．７日・ｂ．８日）②（ａ．午後３時４５分・ｂ．午前３時４５分）までに検察官に③（ａ．送致する・ｂ．送致した上で受け取らせる）手続をすることが必要であるが，司法警察員警部Ｘは，同月７日午前９時，その手続を終えた。
　その後，被疑者甲を受け取ったＧ地方検察庁検察官Ｙは，④（ａ．接見・ｂ．弁解）の機会を与え，留置の必要があると認めたときは，検察官が被疑者を受け取った時から⑤（ａ．２４時間・ｂ．３６時間）以内かつ逮捕の時から⑥（ａ．４８時間・ｂ．７２時間）以内に勾留を請求しなければならないが，検察官Ｙは，所定の手続を経て，留置の必要があると認め，同月７日午後２時，Ｇ地方裁判所裁判官に勾留を請求した。
　Ｇ地方裁判所裁判官Ｚは，同月８日午前９時，被疑者甲につき，勾留質問を行い，同日午後零時３０分に，勾留状を発付した。検察官Ｙは，同日午後１時３０分に，その勾留状を執行したが，勾留期間は，同月⑦（ａ．１６日・ｂ．１７日）までである。`,c1:"１．ａ－②③⑤ｂ－①④⑥⑦",c2:"２．ａ－①③⑦ｂ－②④⑤⑥",c3:"３．ａ－②③⑤⑦ｂ－①④⑥",c4:"４．ａ－①②③④ｂ－⑤⑥⑦",c5:"５．ａ－②⑤⑦ｂ－①③④⑥",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2010",num:"23",subject:"kso",q:`次の【事例】に関する後記アからカまでの【記述】のうち，誤っているものの組合せは，後記１から６までのうちどれか。
【事 例】
司法警察員Ｘは，被疑者甲に係る大麻取締法違反（大麻所持）被疑事件に関し，被疑者甲が一人で居住するアパートの居室を捜索すべき場所とし，大麻及び大麻吸引具を差し押さえるべき物とする捜索差押許可状に基づき，その居室を捜索した。その際，被疑者甲は，その居室にいた。司法警察員Ｘは，その捜索において，大麻及び大麻吸引具を発見することができなかったが，ポーチに入った覚せい剤様の白色結晶や，血液の混じったような液体が入った注射器を発見した。そのため，司法警察員Ｘは，（①）前記白色結晶につき，覚せい剤の予試験を実施したところ，覚せい剤であるとの試験結果が得られた。そこで，司法警察員Ｘは，（②）被疑者甲を覚せい剤取締法違反の被疑事実で逮捕し，（③）前記白色結晶を押収するとともに，（④）前記ポーチ及び前記注射器を押収した。また，司法警察員Ｘは，（⑤）被疑者甲が任意に尿を提出したので，これを押収した。さらに，司法警察員Ｘは，採血を拒否した被疑者甲の血液型を明らかにするため，被疑者甲をＨ病院に連れて行き，（⑥）Ｈ病院の医師Ｙをして，被疑者甲の採血をさせた。
【記 述】
ア．下線部①について，被疑者甲が予試験の実施に同意をしていれば，司法警察員Ｘは，裁判官による令状の発付を受けなくても，覚せい剤の予試験を実施できる。
イ．下線部②について，被疑者を逮捕するに当たり，司法警察員Ｘは，裁判官による令状の発付を受ける必要がない。
ウ．下線部③について，白色結晶を押収するに当たり，司法警察員Ｘは，裁判官による令状の発付を受ける必要がない。
エ．下線部④について，ポーチ及び注射器を押収するに当たり，司法警察員Ｘは，裁判官による令状の発付を受ける必要がある。
オ．下線部⑤について，被疑者甲が任意に尿を提出しなかった場合でも，司法警察員Ｘは，捜索差押許可状の発付を受けて，医師をして被疑者甲から強制的に採尿をさせることができる。
カ．下線部⑥について，医師Ｙをして被疑者甲の採血をさせるには，司法警察員Ｘは，裁判官による令状の発付を受けなくても，医師Ｙに鑑定嘱託をして，被疑者甲の採血をさせることができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ カ",c5:"５．エ オ",c6:"６．エ カ",c7:"",c8:"",c9:"",c10:"",a:"6"},{year:"2010",num:"24",subject:"kso",q:`次のⅠ及びⅡの【見解】は，刑事訴訟法第２２０条第１項第２号及び同条第３項において，被疑者を逮捕する場合において必要があるときは，「逮捕の現場」で令状を必要とせずに捜索・差押えをすることができるとされている根拠に関する考え方を述べたものである。これらの【見解】のいずれかを前提に，後記アからオまでの【記述】のうち，誤っているものの組合せは，後記１から５までのうちどれか。
【見 解】
Ⅰ．逮捕の現場には証拠の存在する蓋然性が一般的に高いため，裁判官による事前の令状審査を行う必要性がない。
Ⅱ．逮捕の際には被逮捕者により証拠が隠滅されるおそれが高いため，これを防止して証拠を保全する緊急の必要性がある。
【記 述】
ア．Ⅰの考え方に立つと，「逮捕の現場」は，令状が発付されたとしたら捜索が可能である範囲，すなわち，逮捕の場所と同一の管理権が及ぶ範囲内の場所と考えられる。
イ．Ⅰの考え方に立っても，捜索・差押えの対象は，逮捕の理由とされた被疑事実に関する証拠物に限られる。
ウ．Ⅰの考え方に立つと，被逮捕者の身体を捜索する場合，被逮捕者を逮捕した現場で直ちに捜索を実施することが適当でないときであっても，捜索の実施に適する最寄りの場所まで連行して捜索することはできない。
エ．Ⅱの考え方に立つと，「逮捕の現場」は，被逮捕者が証拠を隠滅することが可能である被逮捕者の手が届くなどの事実的支配が及ぶ範囲内の場所と考えられる。
オ．Ⅱの考え方に立っても，被逮捕者をその住居で逮捕してから警察署まで連行した上，その後に逮捕の現場として同住居を捜索することができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2010",num:"25",subject:"kso",q:`以下のアからカまでの【乙の活動】は，次の【事例】において，甲が逮捕された直後，甲から弁護人として選任された乙の活動についてのものである。【乙の活動】のうち，法令上の根拠がないものは幾つあるか。後記１から７までのうちから選びなさい。
【事 例】
甲は，殺人被疑事件の被疑者として，Ｈ地方裁判所の裁判官が発付した逮捕状に基づき，Ｇ警察署司法警察員に逮捕され，Ｇ警察署の留置施設に留置された。甲は，乙を弁護人に選任した。その後，甲は，引き続き，Ｈ地方裁判所の裁判官が発付した勾留状に基づきＧ警察署の留置施設に勾留された。また，その際，甲は，同じ裁判官により，刑事訴訟法第８１条に基づいて，公訴が提起されるまでの間，接見等を禁じられた。乙は，甲と接見しようとしたところ，検察官により，捜査のため必要があるとして，接見の日時，場所及び時間を指定された。さらに甲は，同じ裁判官により，１０日間の勾留期間の延長がされた後，殺人被疑事件につき，Ｈ地方裁判所に起訴され，Ｊ刑事施設に移されて引き続き勾留された。
【乙の活動】
ア．逮捕状発付の裁判に対する準抗告
イ．Ｈ地方裁判所の裁判官に対する甲の逮捕の理由の開示請求
ウ．Ｇ警察署の留置施設に勾留されている被疑者甲との接見
エ．検察官の接見指定に対する準抗告
オ．勾留期間の延長の裁判に対する準抗告
カ．起訴後における甲の勾留の取消請求`,c1:"１．０個",c2:"２．１個",c3:"３．２個",c4:"４．３個",c5:"５．４個",c6:"６．５個",c7:"７．６個",c8:"",c9:"",c10:"",a:"3"},{year:"2010",num:"26",subject:"kso",q:`接見交通権に関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。ただし，判例がある場合には，それに照らして考えるものとする。
ア．接見交通権は，身体の拘束を受けている被疑者が弁護人と相談し，その助言を受けるなど弁護人から援助を受ける機会を確保する目的で設けられたものであり，憲法の保障に由来するものであって，弁護人の重要な固有権である。
イ．弁護人を選任することができる者の依頼により弁護人となろうとする者と被疑者との逮捕直後の初回の接見は，これを速やかに行うことが被疑者の防御の準備のために特に重要であるので，被疑者が取調べ中であっても，即座に取調べを中断して，接見させなければならない。
ウ．身体の拘束を受けている被疑者については，逃亡のおそれや罪証隠滅のおそれがあることから，検察官は，第１回の公判期日まで，弁護人との接見の日時，場所及び時間を指定することができる。
エ．検察官が庁舎内に接見設備のある部屋等が存在しないことを理由として接見の申出を拒否したにもかかわらず，弁護人がなお検察庁の庁舎内における即時の接見を求め，即時に接見する必要性が認められる場合には，検察官は，いわゆる秘密交通権が十分に保障されないような態様の短時間の面会接見であってもよいかどうかという点につき，弁護人の意向を確かめ，弁護人がそのような面会接見であっても差し支えないとの意向を示したときは，面会接見ができるように特別の配慮をすべき義務がある。
オ．弁護人は，接見交通権を有しているので，被疑者と立会人なくして接見することができるが，物の授受については，意思や情報の伝達とは関係ないので，被疑者と物の授受をすることはできない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2010",num:"27",subject:"kso",q:`保釈に関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。
ア．裁判所は，保釈を許す決定又は保釈の請求を却下する決定をするには，検察官の意見を聴かなければならない。
イ．裁判所は，検察官の請求がなくても，被告人が逃亡し又は逃亡すると疑うに足りる相当な理由があるときには，保釈を取り消すことができる。
ウ．裁判所は，被告人から保釈の請求があった場合において，被告人が罪証を隠滅すると疑うに足りる相当な理由があるときは，保釈を許すことができない。
エ．裁判所は，被告人に対して窃盗罪により懲役に処する実刑判決の宣告があった後，保釈の請求があったときは，被告人が罪証を隠滅すると疑うに足りる相当な理由がない以上，保釈を許さなければならない。
オ．裁判所は，保釈を許す場合において，被告人に対し，被害者との接触を禁止する旨の条件を付することができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2010",num:"28",subject:"kso",q:`検察官による起訴・不起訴の判断に関する次の１から５までの各記述のうち，違法となるものは幾つあるか。後記１から６までのうちから選びなさい。
１．司法警察員から強盗の罪名で送致された被疑事件について，検察官において，捜査の結果，強盗致傷罪に該当するものと判断した場合に，強盗致傷の罪名で起訴すること
２．検察官が不起訴にした自動車運転過失致死被疑事件について，検察審査会が公訴を提起しない処分を不当とする議決をしたが，検察官において，捜査の結果，起訴を猶予すべき事情が認められると判断した場合に，再度不起訴にすること
３．司法警察員から強姦の罪名で送致された被疑事件について，被害者の告訴があり，その告訴が取り消されなかったが，検察官において，起訴を猶予すべき事情が認められると判断した場合に，不起訴にすること
４．家庭裁判所が刑事処分を相当と認めて検察官に送致した殺人被疑事件について，検察官において，傷害致死罪に該当するものと判断した場合に，傷害致死の罪名で起訴すること
５．有罪判決が確定した詐欺事件と牽連犯の関係にある私文書偽造被疑事件について，詐欺事件と同時に審理できた事情が認められたが，検察官において，処罰を求める必要があると判断した場合に，私文書偽造の罪名で起訴すること`,c1:"１．０個",c2:"２．１個",c3:"３．２個",c4:"４．３個",c5:"５．４個",c6:"６．５個",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2010",num:"29",subject:"kso",q:`公判前整理手続に関する次のアからオまでの各記述のうち，誤っているものの組合せは，後記１から５までのうちどれか。
ア．裁判所は，裁判員の参加する合議体で取り扱うべき事件については，必ず公判前整理手続に付さなければならない。
イ．検察官は，公判前整理手続においては，訴因の変更を請求することはできない。
ウ．裁判長は，被告人を出頭させて公判前整理手続をする場合には，被告人が出頭する最初の公判前整理手続期日において，まず，被告人に対し，終始沈黙し，又は個々の質問に対し陳述を拒むことができる旨を告知しなければならない。
エ．被告人又は弁護人は，公判前整理手続において取調べを請求した証拠については，検察官から開示の請求がなくても，検察官に対して，開示をしなければならない。
オ．裁判所は，被告人又は弁護人が，公判前整理手続が終わった後に証拠調べを請求した証拠のうち，やむを得ない事由によって公判前整理手続において請求することができなかったと認められるものについては，職権で証拠調べをしなければならない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2010",num:"30",subject:"kso",q:`被害者参加に関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。
ア．被害者参加人として刑事事件の手続への参加を許されるのは，当該事件の被害者又は被害者が死亡した場合におけるその配偶者，直系の親族若しくは兄弟姉妹に限られる。
イ．被害者参加人又はその委託を受けた弁護士は，公判期日に出席することができるが，裁判所は，審理の状況，被害者参加人又はその委託を受けた弁護士の数その他の事情を考慮して，相当でないと認めるときは，公判期日の全部又は一部への出席を許さないことができる。
ウ．裁判所は，証人を尋問する場合において，被害者参加人又はその委託を受けた弁護士から，その者がその証人を尋問することの申出があるときは，被告人又は弁護人の意見を聴き，相当と認めるときは，犯罪事実又は情状に関する事項についての証人の供述の証明力を争うために必要な事項について，申出をした者がその証人を尋問することを許すことができる。
エ．被害者参加人又はその委託を受けた弁護士は，裁判所の許可を得て，公判期日において，検察官の意見の陳述の後に，訴因として特定された事実の範囲内で，事実又は法律の適用について意見を陳述することができる。
オ．被害者参加人又はその委託を受けた弁護士は，第一審の判決に不服があるときは，これに対して控訴をすることができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2010",num:"31",subject:"kso",q:`次のアからケまでの【訴訟行為】は，被告人が捜査公判段階で一貫して犯罪事実を認め，かつ，公判前整理手続を経ていない窃盗被告事件の証拠調手続に関するものである。この【訴訟行為】を並べたＡからＥまでの【順序】のうち，適法なものの組合せは，後記１から５までのうちどれか。
【訴訟行為】
ア．検察官による「被告人の供述調書」及び「被告人の戸籍謄本」の要旨の告知
イ．検察官による「被害届」，「被害者の供述調書」及び「犯行現場の実況見分調書」の要旨の告知
ウ．検察官による冒頭陳述
エ．検察官による「被告人の供述調書」及び「被告人の戸籍謄本」の証拠調べの請求
オ．検察官による「被害届」，「被害者の供述調書」及び「犯行現場の実況見分調書」の証拠調べの請求
カ．検察官の請求証拠に対し，「同意する」との弁護人の意見
キ．「被告人の供述調書」及び「被告人の戸籍謄本」の裁判所への提出
ク．「被害届」，「被害者の供述調書」及び「犯行現場の実況見分調書」の裁判所への提出
ケ．裁判所による証拠調べの決定
【順 序】
Ａ．ウ→オ→エ→イ→ア→ク→キ→カ→ケ
Ｂ．ウ→エ→カ→ケ→ア→キ→オ→カ→ケ→イ→ク
Ｃ．ウ→オ→カ→ケ→イ→ク→エ→カ→ケ→ア→キ
Ｄ．ウ→オ→エ→カ→ケ→イ→ア→ク→キ
Ｅ．ウ→オ→エ→ク→キ→カ→ケ→イ→ア`,c1:"１．Ａ Ｂ",c2:"２．Ａ Ｅ",c3:"３．Ｂ Ｃ",c4:"４．Ｃ Ｄ",c5:"５．Ｄ Ｅ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2010",num:"32",subject:"kso",q:`証人尋問に関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。
ア．証人を尋問する場合，必ず宣誓をさせなければならない。
イ．証人には，その実験した事実により推測した事項を供述させることはできないが，鑑定人には同事項を供述させることができる。
ウ．何人も，自己の配偶者が刑事訴追を受け，又は有罪判決を受けるおそれのある証言を拒むことはできない。
エ．被告人が正当な理由がなく召喚に応じないおそれがあるときは，これを勾引することができるが，召喚を受けた証人については，正当な理由がなく出頭しないおそれがあるだけでは勾引することはできない。
オ．医師は，業務上委託を受けたため知り得た事実で他人の秘密に関するものについては証言を拒むことができるが，本人が承諾した場合は，証言を拒絶することはできない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2010",num:"33",subject:"kso",q:`次の【事例】における【Ｋの証人尋問】中の（１）から（４）までの下線部分にそれぞれ対応する後記１から４までの各記述につき，正しい場合には１を，誤っている場合には２を選びなさい。
【事 例】
被告人甲は，運転していた普通乗用自動車を歩行中のＶに衝突させて傷害を負わせ，前方不注視の過失による自動車運転過失致傷罪で起訴された。第１回公判期日において，甲の弁護人は，事故直後に犯行現場で実施された実況見分に甲が立ち会ったことは争わないものの，前方不注視の過失の有無を争い，検察官から事前に開示されていた同実況見分に係る実況見分調書について不同意の意見を述べた。そこで，検察官は，その作成者である司法警察員Ｋの証人尋問を請求し，裁判所の採用決定を経て，次のとおりＫの証人尋問を行った。
【Ｋの証人尋問】
検察官． 証人は，本件当時，○○警察署交通課に警部補として勤務していましたね。
Ｋ．はい。
検察官． 証人は，平成×年×月×日，本件犯行現場で現場の状況に関する実況見分を行いましたか。
Ｋ．はい。
検察官． 証人は，実況見分の経過と結果を書面にしましたか。
Ｋ．はい。
検察官． （１）検察官請求に係るＫ作成の実況見分調書を示します。証人が作成した実況見分調書は，これですか。
Ｋ．（２）はい。この実況見分調書は，私が自分で作成したものに間違いありません。
検察官． 実況見分調書に添付された現場の写真を示します。この写真は，証人が撮影しましたか。
Ｋ．（３）いいえ。私が，部下のＬ巡査部長に命じて撮影させました。
検察官． （４）その実況見分には，被告人を立ち会わせましたね。
Ｋ．はい。
検察官． 実況見分の際，被告人は，何か言っていませんでしたか。
Ｋ．確か，被告人がよそ見をしてしまったなどと言って，何度も繰り返して謝っていました。
（以下省略）
１．（１）の尋問は，書面に関しその成立，同一性その他これに準ずる事項について証人を尋問する場合において必要があるときに該当するので，実況見分調書の証拠調べが未了であっても，同調書を示して尋問することができる。
２．（２）の証言は，実況見分調書の作成者であるＫが，公判期日において証人として尋問を受け，その真正に作成されたものであることを供述したときに該当するので，実況見分調書を証拠とするには，この証言で足りる。
３．（３）の証言によると，写真の撮影をＫがしていないので，写真を証拠とするためには，撮影者であるＬ巡査部長を証人尋問して，事件との関連性を立証しなければならない。
４．（４）の尋問は，主尋問における誘導尋問であるので許されない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1222"},{year:"2010",num:"34",subject:"kso",q:`以下のⅠからⅢまでの【結論】は，次の①から③までの【設問】に関するものであり，後記アからオまでの【記述】は，【結論】を導く根拠又は批判を示したものである。判例の立場を示した組合せは，後記１から５までのうちどれか。
【設 問】
①．犯罪事実に関する証拠が共犯者の自白しかなく，被告人が犯罪事実を否認している場合，被告人を有罪とすることが許されるか。
②．共犯者の自白だけでなく，被告人も犯罪事実を認めている場合，共犯者の自白で被告人の自白を補強して被告人を有罪とすることが許されるか。
③．犯罪事実に関する証拠が共犯者２名の自白しかなく，被告人が犯罪事実を否認している場合，被告人を有罪とすることが許されるか。
【結 論】
Ⅰ．①ないし③のいずれの場合も，被告人を有罪とすることが許されない。
Ⅱ．①の場合には，被告人を有罪とすることが許されないが，②と③の場合は，被告人を有罪とすることが許される。
Ⅲ．①ないし③のいずれの場合も，被告人を有罪とすることが許される。
【記 述】
ア．憲法第３８条第３項が「本人の自白」を唯一の証拠として有罪とすることを禁止しているのは，架空の犯罪事実が被告人本人の自白のみによって認定される危険と弊害を防止するためのものであり，自白の証明力に対する自由心証を制限したものである。
イ．共犯者の供述を証拠とすることの危険性を最大限に重視すべきである。
ウ．共犯者の犯罪事実に関する供述は，その共犯者が被告人本人と共同審理を受けていると否とにかかわらず，被告人本人に対する関係においては，証人の供述と本質を異にするものではない。
エ．他に補強証拠がない場合，自白した共犯者が無罪となり，否認した被告人が有罪となる。
オ．共犯者に対しては反対尋問が可能であり，反対尋問を経ない本人の自白より反対尋問を経た共犯者の自白が証明力が強いのは当然である。`,c1:"１．Ⅰ－(根拠) イエ －（批判）アウオ",c2:"２．Ⅱ－(根拠) イウオ－（批判）アエ",c3:"３．Ⅱ－(根拠) アエオ－（批判）イウ",c4:"４．Ⅲ－(根拠) イウ －（批判）アエオ",c5:"５．Ⅲ－(根拠) アウオ－（批判）イエ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2010",num:"35",subject:"kso",q:`公判期日における裁判官，検察官及び弁護人等との間のやり取りに関する次のアからオまでの各記述中の下線部について，刑事訴訟法第３０９条第１項に定める証拠調べに関する異議に当たるものについては１を，同条第２項に定める裁判長の処分に対する異議に当たるものについては２を選びなさい。
ア．弁護人 裁判長，ただいま検察官が朗読した起訴状記載の公訴事実のうち，共謀の日時及び場所について検察官に対する釈明を求めます。
裁判長 現段階では求釈明の必要はないと考えます。
弁護人 異議あり。釈明権の不行使は裁量の範囲を逸脱しており違法と考えます。
イ．検察官 証人は，犯人を目撃しましたか。
証 人 はい。黒っぽいジャンパーを着た若い感じの男でした。
検察官 犯人の年格好は被告人と比べてどうですか。
弁護人 異議あり。誘導尋問です。
ウ．検察官 被告人に対する処罰について，証人から裁判所に述べておきたいことはありますか。
証 人 できるだけ長く刑務所に入れてほしいと思います。
被告人 何が刑務所だよ。ばか言ってるんじゃないよ。覚えてろよ。
裁判長 被告人が勝手に発言することを禁じます。
弁護人 異議あり。ただいまの発言禁止の措置は，著しく不相当で権限の濫用に当たり違法と考えます。
エ．裁判長 検察官から刑事訴訟法３２１条１項２号後段書面として請求があった甲４号証は，特信性が認められないので却下します。
検察官 異議あり。ただいまの却下決定は，特信性の判断を誤っており違法であると考えます。
オ．検察官 あなたの話では，事件のあった日には，いろいろと用事があって，現場には行っていないのですね。
被告人 そうです。
検察官 あなたがその日にどこにいたのか，もう一度言ってもらえませんか。
裁判長 既にした尋問と重複するので質問を変えてください。
検察官 異議あり。質問には正当な理由があるので，尋問を制限したのは違法であると考えます。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"21211"},{year:"2010",num:"36",subject:"kso",q:"判決の言渡しに関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．有罪の言渡しをするには，罪となるべき事実，証拠の標目及び法令の適用を示さなければならず，法律上犯罪の成立を妨げる理由又は刑の加重減免の理由となる事実が主張されたときは，これに対する判断を示さなければならない。",c2:"２．刑の言渡しをしたときは，被告人が貧困のため訴訟費用を納付することのできないことが明らかであるときを除き，被告人に訴訟費用の全部又は一部を負担させなければならない。",c3:"３．裁判長は，判決の宣告をした後，被告人に対し，その将来について適当な訓戒をすることができる。",c4:"４．有罪の判決の宣告をする場合には，被告人に対し，上訴期間及び上訴申立書を差し出すべき裁判所を告知しなければならない。",c5:"５．被告事件について犯罪の証明がないときは，判決で無罪の言渡しをしなければならないが，被告事件が罪とならないときは，判決で公訴を棄却しなければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2010",num:"37",subject:"kso",q:`次のⅠ及びⅡの【見解】は，管轄の有無を判断する基準についての考え方を述べたものである。これらの【見解】のいずれかを前提に，後記【事例】において，裁判所がどのような判決を言い渡すことになるかについて述べた後記アからカまでの【記述】のうち，正しいものの組合せは，後記１から６までのうちどれか。
【見 解】
Ⅰ．起訴状に記載された訴因並びに罪名及び罰条により判断する。
Ⅱ．裁判所が心証を形成した事実により判断する。
【事 例】
検察官は，故意に被害者を殴打してその結果死亡させた事実で，被告人を傷害致死罪によりＸ地方裁判所に起訴したが，Ｘ地方裁判所は，公判審理の途中で，被告人が過って被害者を死亡させた事実しか認定できず，過失致死罪が成立するとの心証を形成した。なお，傷害致死罪の管轄は，地方裁判所に，また，過失致死罪の管轄は，簡易裁判所にだけある。
【記 述】
ア．Ⅰの考え方では，検察官が過失致死罪に訴因を変更しない場合には，Ｘ地方裁判所において，傷害致死罪につき，無罪の判決を言い渡すことになる。
イ．Ⅰの考え方では，検察官が過失致死罪に訴因を変更しない場合には，Ｘ地方裁判所において，管轄違いの判決を言い渡すことになる。
ウ．Ⅰの考え方では，Ｘ地方裁判所が検察官による過失致死罪への訴因の変更を許可した場合には，Ｘ地方裁判所において，管轄違いの判決を言い渡すことになる。
エ．Ⅱの考え方では，Ｘ地方裁判所が検察官による過失致死罪への訴因の変更を許可した場合には，Ｘ地方裁判所において，過失致死罪につき，有罪の判決を言い渡すことになる。
オ．Ⅱの考え方では，検察官が過失致死罪に訴因を変更しない場合には，Ｘ地方裁判所において，管轄違いの判決を言い渡すことになる。
カ．Ⅱの考え方では，検察官が過失致死罪に訴因を変更しない場合には，Ｘ地方裁判所において，傷害致死罪につき，無罪の判決を言い渡すことになる。`,c1:"１．アウオ",c2:"２．アウカ",c3:"３．アエカ",c4:"４．イウオ",c5:"５．イエオ",c6:"６．イエカ",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2010",num:"38",subject:"kso",q:`刑事手続の各段階における前科の扱いに関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。ただし，判例がある場合には，それに照らして考えるものとする。
ア．常習累犯窃盗罪のように前科が構成要件の一部を構成している場合や，常習賭博罪のように構成要件としての常習性を認定する場合でなければ，被告人の同種前科をもって，犯罪事実を立証することは許されない。
イ．累犯加重の理由となる前科については，適法な証拠調べをした証拠によらなければ認定することはできない。
ウ．勾留中の被告人について保釈の請求があった場合，その許否を決するに当たっては，勾留状に記載された事実以外の犯罪事実を考慮してはならず，被告人の前科を考慮することは許されない。
エ．起訴状には，裁判官に事件につき予断を生ぜしめるおそれのある内容を引用してはならないから，常習累犯窃盗罪のように前科が構成要件の一部を構成している場合でなければ，起訴状に被告人の前科を記載することは許されない。
オ．検察官は，執行猶予中の被疑者が再度その前科と同種の犯罪に及んだ場合であっても，犯罪の軽重及び情状等を考慮して，公訴を提起しないことができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2010",num:"39",subject:"kso",q:`刑事手続の各段階における弁護人の関与に関する次のアからオまでの各記述のうち，誤っているものの組合せは，後記１から５までのうちどれか。
ア．長期３年を超える懲役に当たる事件について身体を拘束されていない被疑者が，貧困により弁護人を選任することができないときは，裁判官は，その請求により，被疑者のため弁護人を付さなければならない。
イ．第１回の公判期日前に，検察官の請求により，犯罪の捜査に欠くことのできない知識を有すると明らかに認められる者の証人尋問を行う場合，裁判官は，被疑者又は被告人に弁護人が選任されているときは，当該弁護人を証人尋問に立ち会わせなければならない。
ウ．証拠調べが終わった後の弁護人の意見陳述は権利であるから，裁判所がその機会を与えることなく弁論を終結することは違法となる。
エ．裁判所は，被告人に弁護人が選任されていなければ，公判前整理手続を行うことができない。
オ．原審において適法に選任された弁護人は，被告人の明示した意思に反しなければ，被告人のため上訴をすることができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2010",num:"40",subject:"kso",q:"少年事件に関する次の１から６までの各記述につき，誤っているものはどれか。",c1:"１．検察官は，少年被疑事件について捜査を遂げた結果，犯罪の嫌疑があるものと思料するときは，家庭裁判所から逆送を受けた場合を除いて，全件を家庭裁判所に送致しなければならない。",c2:"２．家庭裁判所の少年審判は，非行事実につき争いがある場合には，成人の刑事事件と同様に，伝聞法則の適用がある。",c3:"３．家庭裁判所は，死刑，懲役又は禁錮に当たる罪の事件について，調査の結果，その罪質及び情状に照らして刑事処分を相当と認めるときは，決定をもって，これを検察官に送致しなければならない。",c4:"４．少年の刑事事件につき，少年に対して長期３年以上の有期の懲役又は禁錮をもって処断すべきときは，その刑の範囲内において，長期と短期を定めてこれを言い渡す。",c5:"５．家庭裁判所の審判に付された少年又は少年のとき犯した罪により公訴を提起された者については，氏名，年齢，職業，住居，容ぼう等によりその者が当該事件の本人であることを推知することができるような記事又は写真を新聞紙その他の出版物に掲載してはならない。",c6:"６．故意の犯罪行為により被害者を死亡させた罪，死刑又は無期若しくは短期２年以上の懲役若しくは禁錮に当たる罪の事件において，その非行事実を認定するための審判の手続に検察官が関与する必要があると認めるときは，家庭裁判所は，審判に検察官を出席させることができる。",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2009",num:"1",subject:"ken",q:`人権の享有主体に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法第３章の人権規定は，法人についても性質上可能な限り適用される。精神的自由権には，自然人にのみ認められているものと法人にも認められているものがある。信教の自由は，自然人である個人の内面の自由であるから，法人には適用されない。
イ．憲法第３章の人権規定は，権利の性質上日本国民のみを対象としていると解されるものを除き，我が国に在留する外国人に対しても等しく及ぶ。国家から干渉されない自由である自由権は，その性質上いずれも日本国民と同様に保障される。
ウ．憲法第３章の人権規定は，未成年者にも当然適用される。もっとも，人権の性質によっては，社会の構成員として成熟した人間を主として対象としており，それに至らない未成年者に対しては，その保障の範囲や程度が異なることがある。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2009",num:"2",subject:"ken",q:`私人間における人権保障に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．国が行政の主体としてでなく私人と対等の立場から私人との間で個々的に締結する私法上の契約は，国の統治行動の場合と同一の基準や観念によってこれを律することはできないのであり，私人間の利害関係の公平な調整を目的とする私法の適用を受けるだけである。
イ．大学は学生を規律する包括的権能を有するが，特に，建学の精神に基づく独自の伝統と教育方針を有する私立大学においては，政治活動を目的とする学外の団体に学生が加入することについて届出制あるいは許可制を採ることで，これを規制することも社会通念上不合理なものといえない。
ウ．企業者は，憲法第２２条，第２９条等において保障されている経済活動の自由の一環として契約締結の自由を有するから，特定の思想，信条を有する者をそのゆえをもって雇い入れることを拒むことができる。ただし，労働者の採否決定に際し，労働者の思想，信条を調査し，その者からこれらに関連する事項についての申告を求めることは公序良俗に反し違法である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"212"},{year:"2009",num:"3",subject:"ken",q:`民法第９００条第４号ただし書前段をめぐる最高裁判所の決定（最高裁判所平成７年７月５日大法廷決定，民集４９巻７号１７８９頁）に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．法定相続分の嫡出性に基づく別異の取扱いの合憲性に関して，多数意見は当該取扱いが「著しく不合理」であるか否かを検討する。それに対し，反対意見は，そもそも，立法目的と手段との間の合理的関連性の存否を審査すべきだとする。
イ．多数意見によれば，法定相続分の嫡出性に基づく別異の取扱いは民法が採る法律婚主義から生じるものであって，不合理な区別ではない。それに対し，反対意見によれば，生まれてきた子供には何の責任もないし，自らの意思や努力によって変えることができない属性に基づく差別である。
ウ．多数意見は，相続制度が総合的な立法政策によるものであることと法定相続分規定の補充性を理由に，相続制度の法定に関する広い立法裁量を帰結する。それに対し，反対意見は，立法裁量にも憲法上の限界があるとした上で，そのような限界として個人の尊厳を挙げる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"211"},{year:"2009",num:"4",subject:"ken",q:`選挙権及び被選挙権に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．選挙権は，国政への参加を国民に保障する権利という面と，選挙人としての地位に基づいて公務員の選挙に関与する公務という面の両者を合わせ持つという考え方によると，選挙権も公務としての特殊な性格に基づく必要最小限度の制限を受けることになり，選挙犯罪者が一定期間選挙権を行使できないことはその例といえる。
イ．選挙権は，国政への参加を国民に保障する権利という面のみを有し，選挙人としての地位に基づいて公務員の選挙に関与する公務という面を否定する考え方によると，選挙犯罪者が一定期間選挙権を行使できないことは，選挙の公正確保を目的とした必要最小限度の制限といえるかどうかが問題となる。
ウ．立候補の自由について，最高裁判所は，選挙権の自由な行使と表裏の関係にあり，自由かつ公正な選挙を維持する上で極めて重要であることを認めつつ，憲法が立候補の自由について明文では規定していないので，立候補の自由は憲法の保障する基本的人権とまではいえないと判示した。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2009",num:"5",subject:"ken",q:`市立小学校の校長が音楽専科の教諭に対し，入学式における国歌斉唱の際に「君が代」のピアノ伴奏を行うよう命じた職務命令が，憲法第１９条に違反しないとした最高裁判所の判決（最高裁判所平成１９年２月２７日第三小法廷判決，民集６１巻１号２９１頁）に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．この判決は，校長の職務命令が，「君が代」について当該教諭が有する歴史観ないし世界観それ自体を直接否定するものであることを認めつつも，公務員は全体の奉仕者であって，思想・良心の自由も職務の公共性に由来する内在的制約を受けるから，上記職務命令が当該教諭の思想・良心の自由を制約するものであっても受忍すべきであるとした。
イ．この判決は，「君が代」のピアノ伴奏の強制により制約される当該教諭の思想・良心の自由と，「君が代」の伴奏が録音テープで行われることによって損なわれる入学式進行の秩序・規律とを，具体的に比較衡量した上で，「君が代」をテープ伴奏にすることによる違和感は看過し難いから，校長の職務命令が不合理とはいえないとした。
ウ．この判決は，入学式の国歌斉唱の際に「君が代」のピアノ伴奏をする行為は，音楽専科の教諭にとって通常想定され期待されるものであり，当該教諭が特定の思想を有するということを外部に表明する行為であると評価することは困難であって，校長の職務命令は当該教諭に対し特定の思想を持つことを強制したり禁止したりするものではないとした。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2009",num:"6",subject:"ken",q:`信教の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．宗教上の教義に基づき高等学校における剣道の実技に参加しなかった生徒がいる場合に，学校側がその生徒の信教の自由を理由として参加したのと同様の評価をすることは，一部の生徒について特定の宗教に基づいて有利な取扱いをすることになる。このことは，ひいてはその宗教を信仰しない他の生徒の信教の自由を侵害することになりかねない。
イ．信教の自由の保障は，何人も他者の信仰に基づく行為に対して，それが強制や不利益の付与を伴うことにより自己の信教の自由を妨害するものでない限り寛容であることを要請しているものというべきである。このことは，死去した配偶者の追慕，慰霊等に関する場合においても同様である。
ウ．患者が，輸血を受けることは宗教上の信念に反するとして，輸血を伴う医療行為を拒否するとの明確な意思を有している場合には，その意思決定をする権利は尊重されなければならない。医師としては，手術の際に輸血以外には救命手段がないと判断したときは輸血するとの方針を採っていることを患者に説明し，手術を受けるか否かをその意思決定にゆだねるべきである。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"211"},{year:"2009",num:"7",subject:"ken",q:`政教分離原則に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．日本国憲法が政教分離規定を設けたのは，戦前の信教の自由の保障が不完全なものであったことや，各種の宗教が多元的，重層的に発達，併存してきているという我が国の事情を考慮して，信教の自由の確実な保障のためには国家と宗教との結び付きを排除する必要があると考えられたためである。
イ．国家と宗教とのかかわり合いが憲法上許容される限度は，国家の行為の目的と効果を考慮して定められる。例えば，ある市が建築工事の無事安全等を神式で祈願する地鎮祭のための費用を公金から支出する場合，行為の目的は，その儀式に対する一般人の評価を考慮せず，市の関係者がどういう意図で支出を行ったかで判断すべきである。
ウ．憲法第２０条第１項後段にいう「宗教団体」とは，特定の宗教の信仰，礼拝又は普及等の宗教的活動を行うことを本来の目的とする組織ないし団体を指す。したがって，例えば戦没者遺族の相互扶助・福祉向上と英霊の顕彰を主たる目的とする団体が行う宗教的行事に対し，ある市が援助を与えたとしても，その援助は目的効果基準を用いるまでもなく合憲である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"122"},{year:"2009",num:"8",subject:"ken",q:`次のアからウは，表現の自由の価値に関する文章である。ａはある見解を要約したものであり，ｂはそれぞれの見解に対する批判である。ｂがａに対する批判となり得る場合には１を，批判となり得ない場合には２を選びなさい。
ア．ａ．表現の自由が有する自己実現あるいは自己充足の価値を重視し，表現の自由の目的は個人の自律の保護にあり，表現の自由は思想・情報の送り手を保護する楯であると解する見解がある。
ｂ．しかし，自己実現あるいは自己充足の価値を重視するこの見解によれば，商業広告のような営利的言論は，個人の自己充足とは無関係であるとして，憲法が保障する表現の自由に含まれないことになる。
イ．ａ．表現の自由が有する自己統治の価値を最高度に重視し，民主主義の観点から表現の自由の絶対的保障を主張しつつ，表現の自由として憲法上の保障を受けるのは「公共的利害にかかわる事柄」のみであるとする見解がある。
ｂ．しかし，表現の自由の絶対的保障を帰結するこの見解によれば，例えば性的言論は，「公共的利害にかかわる事柄」ではないとして，憲法上の保障を受けない言論とされるおそれがある。
ウ．ａ．表現の自由が有する真理到達機能を重視し，真理の最上のテストは市場の競争において自らを容認させる思想の力であり，その競争で最後に残った意見が真理であるとする見解がある。
ｂ．しかし，この見解は，「思想の自由市場」が必ずしも自由とは言い難い現実からして問題が残る。また，仮に「市場」が完全に機能しているとしても，最後に残った意見が真理であることを立証することは，不可能である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"211"},{year:"2009",num:"9",subject:"ken",q:`酒類販売の免許制が憲法第２２条第１項に適合するか否かについて判示した最高裁判所の判決（最高裁判所平成４年１２月１５日第三小法廷判決，民集４６巻９号２８２９頁）に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．この判決は，許可制の場合には重要な公共の利益のために必要かつ合理的措置であることを要するとする一方で，租税法の制定に当たっては立法府の政策的・技術的な裁量的判断が尊重されるべきであるとして，許可制の必要性と合理性についての立法府の判断が政策的・技術的裁量の範囲を逸脱した著しく不合理なものでない限り，合憲であるとした。
イ．この判決は，酒類販売の免許制は，酒類が致酔性を有する嗜好品であることから，酒類の無秩序な販売による国民の健康安全に対する弊害を防止するために必要な規制であるとしつつ，消費者への酒税の円滑な転嫁のため，これを阻害するおそれのある酒類販売業者を酒類の流通過程から排除するための規制でもあるとして，規制の目的を複合的なものと判断した。
ウ．この判決は，酒類販売の免許制は，経済的弱者保護という意味での積極目的による規制とは異なるとした上で，免許の許否が実際に既存の酒類販売業者の権益を擁護するような運用になっているか否かに着目すべきであるが，そのような運用がなされていない限り酒税法の立法目的を明らかに逸脱するものであるとはいえず，合憲であるとした。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"122"},{year:"2009",num:"10",subject:"ken",q:`大学の自治に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．大学構内の施設を利用した集会であっても，実社会の政治的社会的な活動が行われている限り，その集会が一般に公開されているか否かを問わず，警察官は，警備情報の収集のため自由に集会の場に立ち入ることができる。
イ．大学構内への警察官の立入りは，大学側の許諾又は了解の下に行うことを原則とすべきであるが，裁判官の発する令状に基づいて犯罪捜査のために立ち入る場合には，大学側の許諾又は了解を得る必要がない。
ウ．大学における研究と教育は，大学が国家権力等による干渉を排し，組織体としての自律性を保障されることなしには全うすることが不可能であるから，学問の自由と不可分のものとして大学の自治も保障される。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"5"},{year:"2009",num:"11",subject:"ken",q:`労働基本権に関する次のアからウまでの各記述について，正しいものには○，誤っているものには×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．憲法第２８条にいう「勤労者」の中に公務員も含まれるが，その職務の性質上，国民全体の利益の保障という見地から公務員の労働基本権の制約は認められる。ただし，労働三権のすべてが否定されている職種は存在しない。
イ．労働基本権は，それを制限する立法その他の国家行為を国に対して禁止するという点で，自由権としての性格を有する。労働組合法第１条第２項の定める争議行為の刑事免責は，このような制限の禁止の具体化といえる。
ウ．労働基本権は，その権利保障の具体化，実効化のために立法その他によって一定の措置を執るべき責務が国に課せられているという点で，社会権としての性格を有する。労働組合法における労働委員会等に関する規定は，このような責務を具体化したものといえる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"5"},{year:"2009",num:"12",subject:"ken",q:`憲法保障に関する次のアからエまでの各記述について，明らかに誤っているもの二つの組合せを，後記１から６までの中から選びなさい。
ア．重大な人権侵害等の国家の圧政に対しては，合法的な救済手段が尽きてもなお抵抗する権利が存在するとの考えは，市民革命期に大きな影響力を持った。ただし，実定憲法によって人権保障のための諸制度が整備された段階では，抵抗権の主たる意義は，立憲主義を支える基本理念であることに求められる。
イ．付随的違憲審査制は，個人の権利保護を主たる目的とする私権保障型の憲法裁判制度であり，客観的な憲法秩序の保障を主目的とする抽象的違憲審査制とは制度趣旨が異なる。したがって，付随的違憲審査制の訴訟で主張できるのは，訴訟当事者の権利に限られる。
ウ．憲法は基本的に国家権力を拘束する規範であるが，国民の中で憲法に敵対的な民意が形成されると，国家権力に憲法を遵守させることが困難になる。それゆえ，憲法の基本的価値に反する表現活動等の自由は認めるべきではないとの考え方が成り立ち，日本国憲法もこのような立場を採用している。
エ．国家緊急権を肯定する立場によれば，戦争・内乱や大規模な自然災害といった非常事態の際には，国家の存立を維持するために憲法秩序を一時停止することが可能である。ただし，日本国憲法が国家緊急権について規定していないことは，立憲主義に対する例外を認めることへの慎重な姿勢を示している。`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．イとウ",c5:"５．イとエ",c6:"６．ウとエ",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2009",num:"13",subject:"ken",q:`法解釈の方法の一つとして，文理解釈がある。それは，条文の文言の辞書的意味や条文の文法的構造等に基づいて条文を解釈する方法である。文理解釈は，憲法解釈における一つの方法でもある。次のアからウまでの各記述について，文理解釈によって導くことのできる見解である場合には１を，文理解釈によっては導くことのできない見解である場合には２を選びなさい。
ア．日本国憲法において外国人の人権が保障されていることを否定する見解
イ．行政手続への憲法第３１条の適用あるいは準用を否定する見解
ウ．政教分離原則における目的効果論`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"112"},{year:"2009",num:"14",subject:"ken",q:`国会が国の唯一の立法機関であること（憲法第４１条）に関する次のアからエまでの各記述について，明らかに誤っているもの二つの組合せを，後記１から６までの中から選びなさい。
ア．最高裁判所規則制定権は，国会だけが実質的意味の立法を制定できることに対する憲法が定める例外であるから，裁判所の内部規律や司法事務処理に関する事項については最高裁判所規則で定めなければならず，裁判所法もそうした事項について定めていない。
イ．憲法第４１条にいう「立法」を国民に義務を課しあるいは権利を制限する法規範の定立と解するならば，栄典はそれを授与された者に利益を与えるにすぎないから，栄典制度を政令で定めても違憲とはいえない。
ウ．国会が国の唯一の立法機関であることは，立法に対する他の国家機関の関与を必要としないことを意味するが，例外として，一の地方公共団体のみに適用される特別法については，当該地方公共団体の住民の権利義務に直接影響がある場合に限り，その団体の住民投票による同意を必要とする。
エ．憲法は，国の行政組織について法律で定めるべきことを明示していない。一般には，国の行政組織の基本は法律で定めるべきであるが，各省庁の組織の細部については政令で定めることができると解されている。`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．イとウ",c5:"５．イとエ",c6:"６．ウとエ",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2009",num:"15",subject:"ken",q:`衆議院解散権に関する次のアからエまでの各記述について，正しいもの二つの組合せを，後記１から６までの中から選びなさい。
ア．憲法第７条で挙げられた国事行為はもともと形式的・儀礼的行為であるから，同条により内閣の衆議院解散権を根拠付けることはできないという説によれば，解散は衆議院が自律的に決定したときにのみ可能であるということになる。
イ．内閣が衆議院解散を決定できるのは憲法第６９条所定の場合に限るという説によれば，解散は新たな政治問題が生じた場合に国民の判断を求める制度であるということになる。
ウ．日本国憲法は議院内閣制を採っていると理解できるから，この制度の本質からして内閣には自由な解散権が認められるという説に対しては，議院内閣制の概念は一義的ではないという批判がなされている。
エ．現在の実務は，内閣の自由な衆議院解散権を憲法第７条で根拠付けているが，最高裁判所は，これが妥当な憲法解釈であるか否かについて判断を示していない。`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．イとウ",c5:"５．イとエ",c6:"６．ウとエ",c7:"",c8:"",c9:"",c10:"",a:"6"},{year:"2009",num:"16",subject:"ken",q:`次の文章は，最高裁判所平成１０年１２月１日大法廷決定（民集５２巻９号１７６１頁）の中で，裁判官に対する懲戒と憲法第８２条第１項との関係について論じた部分を要約したものである。次のアからウまでの各記述につき，この見解に対する批判となり得る場合には○を，批判となり得ない場合には×を付した場合の組合せを，後記１から８までの中から選びなさい。

「憲法第８２条第１項は，裁判の対審及び判決は公開の法廷で行わなければならない旨を規定しているが，右規定にいう『裁判』とは，現行法が裁判所の権限に属するものとしている事件について裁判所が裁判という形式をもってする判断作用ないし法律行為のすべてを指すのではなく，そのうちの固有の意味における司法権の作用に属するもの，すなわち，裁判所が当事者の意思いかんにかかわらず終局的に事実を確定し当事者の主張する実体的権利義務の存否を確定することを目的と- 8 -\fする純然たる訴訟事件についての裁判のみを指すものと解すべきである。そして，裁判官に対する懲戒は，裁判所が裁判という形式をもってすることとされているが，一般の公務員に対する懲戒と同様，その実質においては裁判官に対する行政処分の性質を有するものであるから，裁判官に懲戒を課する作用は，固有の意味における司法権の作用ではなく，懲戒の裁判は，純然たる訴訟事件についての裁判には当たらないことが明らかである。したがって，分限事件については憲法第８２条第１項の適用はないものというべきである。」

ア．裁判官に対する懲戒の裁判が行政処分の実質を有するとすれば，被処分者は裁判を受ける権利に基づきそれに対し不服の裁判を提起することができ，その裁判の対審及び判決は公開法廷で行われなければならない。
イ．裁判官に対する懲戒の裁判を非公開にすることは，裁判官の身分保障の弱体化を招き，司法権の独立が侵害されるおそれがある。
ウ．裁判官に対する懲戒の裁判が，固有の意味における司法権の作用ではないとしても，これを公開することで裁判の公正・中立に対する国民の信頼が確保されることを見過ごしている。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"1"},{year:"2009",num:"17",subject:"ken",q:`次のアからウは，憲法第８９条後段にいう「公の支配」に関する文章である。ａはある見解を要約したものであり，ｂはそれぞれの見解に対する批判である。ｂがａに対する批判となり得る場合には１を，批判となり得ない場合には２を選びなさい。
ア．ａ．「公の支配」とは，国又は地方公共団体がその事業の根本的な方向に重大な影響を及ぼし得るような権力を有することをいう。
ｂ．この見解は，私学の自主性確保を重視するものであるが，現行法の私学助成が違憲となり現実的ではない上，「公の支配」に属する教育事業に公金を支出することを禁じていない憲法第８９条後段と矛盾する。
イ．ａ．「公の支配」に属する事業とは，国家の支配の下に特に法的その他の規律を受けている事業をいう。
ｂ．この見解は，私学助成の現実的な必要性から，「公の支配」の要件を緩和するものであり，憲法第８９条後段を空文化してしまう。
ウ．ａ．「公の支配」の解釈は，憲法第１４条，第２３条，第２５条，第２６条など他の憲法条項との体系的解釈によるべきである。
ｂ．この見解は，現行法の私学助成を合憲とするものであるが，体系的解釈によっては学校法人への助成を正当化することにはならない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"211"},{year:"2009",num:"18",subject:"ken",q:`条例と法律の関係に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．憲法第９２条に照らせば，地方自治の本旨に基づいて行われるべき地方公共団体による地方税の賦課徴収については，住民の代表である議会が民主的な手続により制定する条例に基づいて行ったとしても，行政権による専断的な課税を防止するという趣旨を害しない。したがって，憲法第８４条にいう「法律」には条例が含まれる。
イ．憲法第９４条により，地方公共団体が条例を制定するには法律の根拠を必要とする。条例制定権の一般的な根拠を提供するのが「普通地方公共団体は，法令に違反しない限りにおいて第２条第２項の事務に関し，条例を制定することができる」と規定する地方自治法第１４条第１項の規定である。
ウ．憲法第３１条により刑罰及びこれを科す手続は「法律」で定める必要があるが，この「法律」には，法律に限らず，その授権を受けた下位法令も含まれる。そして，条例は住民の代表である議会が制定する自主立法として法律に類するから，法律が相当程度具体的に限定して授権している場合には，条例により刑罰及びこれを科す手続を定めることができる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"122"},{year:"2009",num:"19",subject:"ken",q:`次のアからウは，憲法改正手続に関する文章である。ａはある見解を要約したものであり，ｂはそれぞれの見解に対する批判である。ｂがａに対する批判となり得る場合には１を，批判となり得ない場合には２を選びなさい。
ア．ａ．国会が憲法改正を発議するには，「各議院の総議員の３分の２以上の賛成」を必要とする。そこでいう「総議員」とは，議員の法定数を意味する。
ｂ．憲法改正の議決を厳重にするという趣旨では一定の合理性があるが，欠員に相当する数を常に反対投票をしたものと同じに扱う点で合理性に欠ける。
イ．ａ．法律案提出権は内閣に認められるとしても，憲法改正と法律制定の場合とを同一に論じることはできないので，憲法改正の発案権は内閣にはない。
ｂ．憲法改正の発案権を内閣に認めても，国会の意思決定に直ちに影響を及ぼすわけではないし，国会の自主的審議権が必然的に害されるとはいえない。
ウ．ａ．国民の承認を得るためには，国民投票において「その過半数の賛成」を必要とする。そこでいう「過半数の賛成」とは，有効投票の過半数を意味する。
ｂ．書き損ない等の理由で無効とされてしまう投票をすべて反対投票と数えるのは，不合理である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"112"},{year:"2009",num:"20",subject:"ken",q:`条約に対する違憲審査に関する次のアからエまでの各記述について，明らかに誤っているもの二つの組合せを，後記１から６までの中から選びなさい。
ア．日本国憲法と条約の関係についての条約優位説によっても，憲法第８１条の「法律」や「規則又は処分」という文言の解釈次第では，条約そのものが違憲審査の対象となり得る。
イ．日本国憲法と条約の関係についての憲法優位説は，条約そのものが違憲審査の対象となるか否かにつき，肯定説及び否定説のいずれとも結び付く。
ウ．砂川事件判決（最高裁判所昭和３４年１２月１６日大法廷判決，刑集１３巻１３号３２２５頁）の採る見解は，条約そのものについて一般的に違憲審査の対象となるとする立場と結び付き得る。
エ．条約が違憲審査の対象となるとする見解によれば，条約を違憲とする判決によって当該条約の国内法的効力及び国際法的効力のいずれもが失われることになる。`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．イとウ",c5:"５．イとエ",c6:"６．ウとエ",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2009",num:"21",subject:"gyo",q:`次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．法律による行政の原理の下においては，国が補助金の交付を行う場合には，法律によって補助金交付の根拠を定めなければならず，補助金等に係る予算の執行の適正化に関する法律がこれを定めている。
イ．厚生労働大臣は，隔離を要する疾病が発生した場合には，厚生労働省設置法第４条第４号，第１９号に基づき，隔離を要する疾病に罹患した患者について，強制隔離の措置を執ることができる。
（参照条文）厚生労働省設置法
第４条 厚生労働省は，前条の任務を達成するため，次に掲げる事務をつかさどる。
一～三 （略）
四 原因の明らかでない公衆衛生上重大な危害が生じ，又は生じるおそれがある緊急の事態への対処に関すること。
五～十八 （略）
十九 感染症の発生及びまん延の防止並びに港及び飛行場における検疫に関すること。
二十～百十一 （略）
２ （略）
ウ．民法第１７７条は，本来，私人間の法律関係を規律するものであるから，公権力の行使や公の行政活動については，これが直接適用されることはない。
エ．行政機関が定立する定めであっても，国民の権利義務に直接関係しない行政規則は，行政機関が法律の根拠なくして定立することができる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2221"},{year:"2009",num:"22",subject:"gyo",q:`行政手続法に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．地方公共団体の機関が定める命令等については，その根拠となる規定が法律に置かれている場合には，行政手続法第６章（意見公募手続等）の規定が適用される。
イ．申請に対する処分について，行政庁は審査基準を定めるよう努めなければならず，審査基準を定めるに当たっては，許認可等の性質に照らしてできる限り具体的なものとしなければならない。
ウ．聴聞手続を公正なものとするため，聴聞の当事者やその者の一定範囲の親族等は，当該聴聞の主宰者とはなり得ないと規定されている。
エ．聴聞の主宰者は，不利益処分の原因となる事実に対する当事者等の主張に理由があるかどうかについての意見を記載した報告書を作成し，行政庁に提出するが，処分権限を有するのは行政庁であるから，行政庁は，不利益処分の決定をする際に，当該報告書に記載された主宰者の意見を参酌することを要しない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2212"},{year:"2009",num:"23",subject:"gyo",q:`Ａ市では，職員の非違行為の類型とそれに対して課されるべき懲戒処分の種別及び程度を規定した内部基準（地方公務員法第２９条第１項第１号にいう条例，規則又は規程のいずれにも該当しないもの。以下「本件基準」という。）を定めているが，Ａ市市長は，職員Ｘに対し，本件基準よりも厳しい懲戒処分（以下「本件処分」という。）を行った。そこで，Ｘは，本件処分の取消訴訟を提起した。この事例に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
（参照条文）地方公務員法
第２９条 職員が次の各号の一に該当する場合においては，これに対し懲戒処分として戒告，減給，停職又は免職の処分をすることができる。
一 この法律若しくは第５７条に規定する特例を定めた法律又はこれに基く条例，地方公共団体の規則若しくは地方公共団体の機関の定める規程に違反した場合
二 職務上の義務に違反し，又は職務を怠つた場合
三 全体の奉仕者たるにふさわしくない非行のあつた場合
２～４ （略）

ア．最高裁判所の判例によれば，公務員に対する懲戒処分は，当該処分が社会観念上著しく妥当を欠き，裁量権の範囲を超え，又は濫用したと認められる場合に違法となるものと解されている。
イ．行政規則の中には，いかなる場合にいかなる処分を行うかを行政法規が行政庁の判断にゆだねている場合において当該裁量権の行使の仕方を定めるもの（裁量基準）が存在するとされるが，本件基準はこれに該当する。
ウ．最高裁判所の判例によれば，行政機関が裁量基準を定めたにもかかわらず，その基準に違背する処分をした場合，当該処分は，裁量権の範囲を超え，又は濫用したものとして，原則として違法となるものと解されている。
エ．裁判所は行政規則には拘束されないとの見解を採ると，本件処分が本件基準よりも厳しいものであるという事情は，本件処分の違法性に関する受訴裁判所の判断に影響することはない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1122"},{year:"2009",num:"24",subject:"gyo",q:`行政指導に関する次のアからウまでの各記述について，法令に照らし，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．国土交通大臣が，その所掌事務について，全日本トラック協会のような関係業界団体の長に対して発する通達は，国家行政組織法第１４条第２項の通達には該当せず，行政指導であると解される。（参照条文）国家行政組織法第１４条 （略）２ 各省大臣，各委員会及び各庁の長官は，その機関の所掌事務について，命令又は示達するため，所管の諸機関及び職員に対し，訓令又は通達を発することができる。
イ．行政庁が建築基準法違反の建築物に対して除却を命ずることができる場合に，行政庁が自主的な除却を求める行政指導を行うことなく除却命令を発するのは違法である。
ウ．ある市では生活保護の不正受給対策として，申請書を提出しようとした者に対して，まず窓口指導を行い，生活保護法の定める保護を必要とする見込みの低い者に対しては申請書を返戻して審査に入らない運用をしているが，窓口指導に従わない意思を明確にしている者に対しても申請書を返戻するのは，行政手続法第７条に反し違法である。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"3"},{year:"2009",num:"25",subject:"gyo",q:`税務調査等に関する次のアからウまでの各記述について，法令又は最高裁判所の判例に照らし，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．税務調査としての質問検査権の行使により犯則事件が探知され，それが端緒となって犯則調査に移行したとしても，一般的に質問検査権を犯則事件の調査あるいは捜査のための手段として行使することにはならない。
イ．犯則事件によって収集された資料は，刑事手続に準じた強制力を伴う手続によって収集されたものであるから，これを課税処分のための資料として利用することは，許されない。
ウ．収税官吏は，調査のため必要がある場合には，国税犯則取締法第１条の規定に基づき，調査に際し，実力を行使し，調査の相手方の抵抗を排して必要な措置を行うことができる。
（参照条文）国税犯則取締法
第１条 収税官吏ハ国税（関税及噸税ヲ除ク以下同シ）ニ関スル犯則事件（以下犯則事件ト称ス）ヲ調査スル為必要アルトキハ犯則嫌疑者若ハ参考人ニ対シ質問シ，犯則嫌疑者ノ所持スル物件，帳簿，書類等ヲ検査シ又ハ此等ノ者ニ於テ任意ニ提出シタル物ヲ領置スルコトヲ得２ 収税官吏ハ犯則事件ヲ調査スル為必要アルトキハ参考人ノ所持スル物件，帳簿，書類等ヲ検査スルコトヲ得`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"4"},{year:"2009",num:"26",subject:"gyo",q:`道路交通法（以下「法」という。）に基づく交通反則通告制度に関する後記条文について述べた次のアからエまでの各記述について，最高裁判所の判例に照らし，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．法第１２５条第１項に定める反則行為は，本来犯罪を構成する行為であり，その成否は刑事手続において審判されるべきものであるが，法は，大量の違反事件を迅速に処理する目的から，交通反則通告制度を設けている。
イ．法第１２７条第１項に定める反則金の納付を通告する手続は，行政手続である。
ウ．法第１２７条第１項の規定による通告があった場合，これを受けた者は反則金を支払う法的義務を負うことになる。
エ．法第１２７条第１項の規定による通告を受けた者は，当該通告の理由となった反則行為の不成立を主張しようとするのであれば，反則金を納付せず，後に公訴が提起されたときに，これによって開始された刑事手続において裁判所の審判を求めるべきである。
（参照条文）道路交通法
第１２５条 この章（注１）において「反則行為」とは，前章（注２）の罪に当たる行為のうち別表第二の上欄に掲げるものであつて，車両等（中略）の運転者がしたものをいい，その種別は，政令で定める。
（注１）第９章「反則行為に関する処理手続の特例」を指す。
（注２）第８章「罰則」を指す。
２ この章において「反則者」とは，反則行為をした者であつて，次の各号のいずれかに該当する者以外のものをいう。
一～三 （略）
３ この章において「反則金」とは，反則者がこの章の規定の適用を受けようとする場合に国に納付すべき金銭をいい，その額は，別表第二に定める金額の範囲内において，反則行為の種別に応じ政令で定める。
第１２６条 警察官は，反則者があると認めるときは，次に掲げる場合を除き，その者に対し，速やかに，反則行為となるべき事実の要旨及び当該反則行為が属する反則行為の種別並びにその者が次条第１項前段の規定による通告を受けるための出頭の期日及び場所を書面で告知するものとする。（以下略）
一，二 （略）
２ （略）
３ 警察官は，第１項の規定による告知をしたときは，当該告知に係る反則行為が行われた地を管轄する都道府県警察の警察本部長に速やかにその旨を報告しなければならない。（以下略）
４ （略）
第１２７条 警察本部長は，前条第３項又は第４項の報告を受けた場合において，当該報告に係る告知を受けた者が当該告知に係る種別に属する反則行為をした反則者であると認めるときは，その者に対し，理由を明示して当該反則行為が属する種別に係る反則金の納付を書面で通告するものとする。（以下略）
２，３ （略）
第１２８条 前条第１項又は第２項後段の規定による通告に係る反則金（中略）の納付は，当該通告を受けた日の翌日から起算して１０日以内（中略）に，政令で定めるところにより，国に対してしなければならない。
２ 前項の規定により反則金を納付した者は，当該通告の理由となつた行為に係る事件について，公訴を提起されず，又は家庭裁判所の審判に付されない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1121"},{year:"2009",num:"27",subject:"gyo",q:`Ａ市では，風俗営業等の規制及び業務の適正化等に関する法律（以下「風営法」という。）の規制の及ばない，新たな形態の性風俗営業により，生活環境，教育環境に悪影響が出ていることから，良好な生活環境の維持形成と青少年の健全育成を目的に，ホテル等建築の適正化に関する条例（以下「条例」という。）を制定することを検討している。当該条例では，条例に違反したホテルの建築に着手した者に対して，Ａ市市長が中止を命ずることができる旨の規定を置くとともに, 中止命令の実効性を確保するための規定を設ける予定である。当該規定に基づく次のアからエまでの各措置のうち，法令又は最高裁判所の判例に照らし，適法になし得る余地のないものの個数を, 後記１から５までの中から選びなさい（なお，解答に当たり，条例は旅館業法，風営法に矛盾抵触しないことを前提とすること）。
ア．中止命令に従わない場合には，中止命令に従わない者に対して罰金２０万円を科するものとすること
イ．中止命令に従わない場合には，Ａ市職員が建築工事現場の入口を封鎖することができるものとすること
ウ．中止命令に従わない場合には，Ａ市が建築続行禁止の仮処分を申し立てることができるものとすること
エ．中止命令に従わない場合には，Ａ市市長が除却を命ずることができるものとして，行政代執行法に基づく行政代執行を可能にすること`,c1:"１．１個",c2:"２．２個",c3:"３．３個",c4:"４．４個",c5:"５．０個",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2009",num:"28",subject:"gyo",q:`行政機関の保有する情報の公開に関する法律（以下「公開法」という。）及び行政機関の保有する個人情報の保護に関する法律（以下「保護法」という。）に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．公開法に基づく開示請求に係る行政文書に，第三者の個人情報などの不開示情報が記録されている場合であっても，行政機関の長は，公益上特に開示の必要性があると認める場合には，開示請求者に対し当該行政文書を開示することも許される。
イ．開示請求者本人の個人情報については，公開法に基づく開示請求であっても，保護法に基づく開示請求であっても，開示される情報の範囲は異ならない。
ウ．保護法は，個人情報保護の見地から，行政機関の長が，あらかじめ定めた利用目的以外の目的のために保有個人情報を利用することを全面的に禁止している。
エ．公開法及び保護法に基づく開示決定等については，いわゆる不服申立前置の制度が採用されるとともに，当該不服申立てについて判断する行政機関の長は，情報公開・個人情報保護審査会等に対し諮問しなければならないものとされ，不服申立手続における適正な判断を担保する措置が講じられている。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1222"},{year:"2009",num:"29",subject:"gyo",q:`次の文章は，知事Ｙがした医療法（平成１８年法律第８４号による改正前のもの。以下「法」という。）第７条に基づく病院の開設許可（以下「本件開設許可」という。）について，同病院の開設地の市又はその付近において医療施設を開設し医療行為をする医師等であるＸ（上告人）らがその取消しを求めた事案について判断を示した最高裁判所平成１９年１０月１９日第二小法廷判決の判示の一部である。この判決に関する後記アからエまでの各記述について，明らかに誤っているものの個数を，後記１から５までの中から選びなさい。

「法は，（中略）病院の開設許可については，その申請に係る施設の構造設備及びその有する人員が（中略）厚生労働省令の定める要件に適合するときは許可を与えなければならないこと（７条４項），営利を目的として病院を開設しようとする者に対しては許可を与えないことができること（同条５項）を定めており，許可の要件を定めるこれらの規定は，病院開設の許否の判断に当たり，当該病院の開設地の付近で医療施設を開設している者等（以下「他施設開設者」という。）の利益を考慮することを予定していないことが明らかである。」
「法の目的を定める法１条及び医師等の責務を定める法１条の４の規定からも，病院開設の許可に関する法の規定が他施設開設者の利益を保護すべきものとする趣旨を含むことを読み取ることはできず，そのほか，上告人らが本件開設許可の取消しを求める法律上の利益を有すると解すべき根拠は見いだせない。」
（参照条文）医療法
第１条 この法律は，病院，診療所及び助産所の開設及び管理に関し必要な事項並びにこれらの施設の整備を推進するために必要な事項を定めること等により，医療を提供する体制の確保を図り，もつて国民の健康の保持に寄与することを目的とする。
第１条の４ 医師，歯科医師，薬剤師，看護師その他の医療の担い手は，第１条の２に規定する理念に基づき，医療を受ける者に対し，良質かつ適切な医療を行うよう努めなければならない。
２～４ （略）
第７条 病院を開設しようとするとき（中略）は，開設地の都道府県知事（中略）の許可を受けなければならない。
２，３ （略）
４ 都道府県知事（中略）は，前三項の許可の申請があつた場合において，その申請に係る施設の構造設備及びその有する人員が（中略）厚生労働省令の定める要件に適合するときは，前三項の許可を与えなければならない。
５ 営利を目的として，病院，診療所又は助産所を開設しようとする者に対しては，前項の規定にかかわらず，第１項の許可を与えないことができる。

ア．この判決は，Ｘらの原告適格について，本件開設許可の根拠となる規定の趣旨にかかわらず，Ｘらの利益が保護すべきものであるかどうかによって判断すべきであるとの考え方に基づいている。
イ．この判決の考え方によれば，一般に，事業等の許可に関する限り，当該許可の名あて人たる事業者と競争関係に立つ事業者には当該許可の取消しを求める原告適格がないことになる。
ウ．この判決は，関係法令の趣旨に照らし，医療計画の策定の目的は，良質かつ適切な医療を効率的に提供する体制を確保することにあることから，他施設開設者の利益を保護する趣旨を含むものであるということを前提に，Ｘらの原告適格について判断したものである。
エ．この判決は，Ｘらが，本件開設許可により，自己の権利若しくは法律上保護された利益を侵害され，又は必然的に侵害されるおそれのある者には該当しないとの判断を示したものである。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2009",num:"30",subject:"gyo",q:`最高裁判所平成２０年９月１０日大法廷判決（以下「本判決」という。）は，土地区画整理法に基づく土地区画整理事業計画の決定が抗告訴訟の対象となる行政処分に当たると判断したが，本判決に関する次のアからエまでの各記述について，誤っているものの個数を，後記１から５までの中から選びなさい。
ア．最高裁判所の従来の判例は，言わば事業の青写真たるにすぎない一般的抽象的な単なる計画にとどまるなどとして土地区画整理事業計画の決定の処分性を否定していたが，本判決は，事業計画の決定に伴う法的効果が一般的抽象的なものにすぎなくとも抗告訴訟の対象となる行政処分に当たるとして判例を変更した。
イ．都市計画法に基づき都市計画決定の一つとしてされる工業地域指定の決定の処分性を否定した最高裁判所の判例があるが，本判決の理由に従えば，同指定の決定についても，当該地域内において建築物の建築が制約されるという法的効果が発生するから，処分性が肯定されることになる。
ウ．土地改良法に基づく国営又は都道府県営の土地改良事業の事業計画の決定について行政上の不服申立てが認められていることを根拠の一つとして，市町村営の土地改良事業に関し都道府県知事が行う事業施行の認可の処分性を認めた最高裁判所の判例があるが，本判決も，土地区画整理事業計画の決定に行政上の不服申立てが認められていることを理由に処分性を認めた。
エ．都市再開発法に基づく第二種市街地再開発事業の施行地区内の土地の所有者等は，特段の事情のない限り，自己の所有地等が収用されるべき地位に立たされるなど，その法的地位に直接的な影響を受けるとして，当該事業に係る事業計画の決定の処分性を認めた最高裁判所の判例があるが，本判決も，土地区画整理事業の事業計画の施行地区内の宅地所有者等の法的地位に直接的な影響を及ぼすとの理由で同事業計画の決定の処分性を認めた。`,c1:"１．１個",c2:"２．２個",c3:"３．３個",c4:"４．４個",c5:"５．０個",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2009",num:"31",subject:"gyo",q:`処分性に関する次のアからウまでの各記述について，最高裁判所の判例に照らし，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．公共施設の管理権限を有する行政機関が都市計画法に基づく開発行為の許可を申請しようとする者に対して同法第３２条第１項の同意を拒否する行為は，公共施設の適正な管理上当該開発行為を行うことは相当でない旨の公法上の判断を表示する行為といえるところ，この同意が得られなければ，公共施設に影響を与える開発行為を適法に行うことができないことからすると，上記の同意を拒否する行為は，それ自体が開発行為を禁止し，又は制限する効果を持つものといえるから，国民の権利ないし法律上の地位に直接影響を及ぼすものとして，処分性が認められるものといえる。
（参照条文）都市計画法
第３０条 前条第１項又は第２項の許可（以下「開発許可」という。）を受けようとする者は，（中略）次に掲げる事項を記載した申請書を都道府県知事に提出しなければならない。
一～五 （略）
２ 前項の申請書には，第３２条第１項に規定する同意を得たことを証する書面（中略）を添付しなければならない。
第３２条 開発許可を申請しようとする者は，あらかじめ，開発行為に関係がある公共施設の管理者と協議し，その同意を得なければならない。
２，３ （略）
第３３条 都道府県知事は，開発許可の申請があつた場合において，当該申請に係る開発行為が，次に掲げる基準（中略）に適合しており，かつ，その申請の手続がこの法律又はこの法律に基づく命令の規定に違反していないと認めるときは，開発許可をしなければならない。
一～十四 （略）
２～８ （略）
イ．市町村長が住民票に住民基本台帳法所定の事項を記載する行為は，元来，いわゆる公証行為であり，それ自体によって新たに国民の権利義務を形成し，又はその範囲を確定する法的効果を有するものではないが，同法及び公職選挙法の規定によれば，住民票に特定の住民の氏名等を記載する行為は，その者が当該市町村の選挙人名簿に登録されるか否かを決定付けるものであって，その者は選挙人名簿に登録されない限り原則として投票することができないのであるから，同行為には法的効果が与えられているといえる。そして，住民票上，住民の氏名等の記載と世帯主との続柄の記載とが一体となっていることからすると，住民票に世帯主との続柄を記載する行為についても，処分性が認められるものといえる。
ウ．地方公共団体の水道事業に関して，水道料金の値上げを内容とする「水道事業給水条例」が制定された場合，水道需要者は，同条例の施行によって，その後にされる個別的行政処分を経ることなく，同条例に従って値上げされた水道料金の支払義務を負わされることになるから，同条例の制定行為には，処分性が認められるものといえる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"8"},{year:"2009",num:"32",subject:"gyo",q:`行政事件訴訟の判決に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．処分の取消判決には，行政事件訴訟法に基づき認められた効力として，第三者効及び拘束力がある。
イ．最高裁判所の判例によれば，既判力の客観的効果は一般に訴訟物に及ぶと解されており，処分の取消判決がされた場合には，当該処分が違法であることが既判力をもって確定するから，当該処分の違法を理由とする国家賠償請求訴訟において当該処分をしたことに違法がない旨を主張することは，許されないものとされている。
ウ．申請者に欠格事由Ａがあるとしてされた申請を拒否する処分が判決によって取り消された場合であっても，処分後に，申請者が欠格事由Ａに該当することになったときは，改めて申請を拒否する処分をすることが許される。
エ．処分又は裁決が違法ではあるが，これを取り消すことにより公の利益に著しい障害を生ずる場合において，原告が受ける損害の程度，その損害の賠償又は防止の程度及び方法その他一切の事情を考慮して，請求を棄却する事情判決の制度は，いわゆる定数訴訟等に関する最高裁判所の判例によって，初めて認められた制度である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1212"},{year:"2009",num:"33",subject:"gyo",q:"行政事件訴訟に関する次の文章中，アからエまでの下線部の各記述について，誤っているものの個数を，後記１から５までの中から選びなさい。行政事件訴訟法第７条は，行政事件訴訟に関し，この法律に定めがない事項については，民事訴訟の例によると規定している。したがって，（ア）<u>取消訴訟においても，当事者の自白には拘束力があると解されている。</u>もっとも，取消訴訟は，処分が適法にされているか否かという公益に関係する事項を対象とするため，（イ）<u>行政事件訴訟法は，釈明についての特則を設けるとともに，当事者において主張しない事実をしんしゃくすることができることと，職権で証拠調べをすることができることを規定する</u>ほか，（ウ）<u>訴訟の結果により権利を害される第三者の訴訟参加や処分をした行政庁以外の行政庁の訴訟参加の規定を設けている。</u>また，処分権主義を徹底することは相当でないため，（エ）<u>取消訴訟においては，請求の認諾や放棄はできず，和解や訴えの取下げもできないと解されている。</u>",c1:"１．１個",c2:"２．２個",c3:"３．３個",c4:"４．４個",c5:"５．０個",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2009",num:"34",subject:"gyo",q:`次の文章は，ある法科大学院の学生甲乙２名の会話である。アからエまでの各発言のうち誤っているものの個数を，後記１から５までの中から選びなさい。
甲 「昨日テレビで，Ａ市の有力者Ｘが，Ａ市の市有地を無断で使っている疑いがあるというニュースを見たよ。」
乙 「前からうわさになっていたよね。昨日のニュースでは，Ｘは，Ａ市から５年以上前から借りていると言っているらしいね。賃料はだいぶ安いようだけど。」
甲 「君はＡ市に住んでいるから，住民監査請求をすることができるんじゃないか。」乙 ア．「そうだね。Ｘの言い分を前提としても，賃料が安すぎるという問題は，住民監査請求の対象に含まれるね。」
甲 「外に要件はなかったかな。」
乙 イ．「住民監査請求には期間制限があるよね。」
甲 「いずれにしても，住民監査請求を経ないと住民訴訟を起こすことはできないね。」
乙 「他の住民が既に住民監査請求をしていて，監査結果が出ていたらどうなるのかな。」
甲 ウ．「その場合は，別個に住民監査請求をする必要はなく，住民訴訟を起こせると思うよ。」
乙 「住民訴訟では，だれに何を求めることになるんだろう。」
甲 エ．「Ａ市の市長が，極端に安い賃料でＸに市有地を貸したというのであれば，市長個人を被告として，Ａ市に損害賠償を支払えという訴訟を提起することができるよね。」
乙 「４号請求だね。実務上も一番多いらしいね。」`,c1:"１．１個",c2:"２．２個",c3:"３．３個",c4:"４．４個",c5:"５．０個",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2009",num:"35",subject:"gyo",q:`Ｘは，マンション建設を計画し，Ｙ県知事に対し，都市計画法第２９条の開発行為の許可を求める申請をした。ところが，その建設予定地は，急傾斜地であり，同開発行為によってがけ崩れがあれば直接的な被害を受けることが予想される近接地に居住しているＺは，同開発行為が同法第３３条第１項第７号の開発許可基準を満たしていないと考えている。次のアからエまでの各記述について，法令又は最高裁判所の判例に照らし，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
（参照条文）都市計画法
第３３条 都道府県知事は，開発許可の申請があつた場合において，当該申請に係る開発行為が，次に掲げる基準（中略）に適合しており，かつ，その申請の手続がこの法律又はこの法律に基づく命令の規定に違反していないと認めるときは，開発許可をしなければならない。
一～六 （略）
七 地盤の沈下，崖崩れ，出水その他による災害を防止するため，開発区域内の土地について，地盤の改良，擁壁又は排水施設の設置その他安全上必要な措置が講ぜられるように設計が定められていること。（以下略）
八～十四 （略）
２～８ （略）
ア．Ｘは，Ｙ県知事が相当の期間内に申請に対する許否の決定をしない場合，不作為の違法確認の訴えを提起することもできるし，これを提起しないで開発許可処分の義務付けの訴えを提起することもできる。
イ．差止めの訴えは，行政庁が一定の処分又は裁決をしてはならない旨を命ずることを求めるにつき法律上の利益を有する者に限り，提起することができるが，Ｚには，Ｙ県知事のＸに対す- 20 -\fる開発許可処分の差止めを求める法律上の利益が認められる。
ウ．ＸがＹ県を被告として提起した開発許可処分の義務付けの訴えに係る請求が認容され，Ｙ県知事が同許可処分をした場合，原則として，Ｚにも同義務付け判決の効力が及び，Ｚは，同許可処分の違法性を主張することができなくなる。
エ．ＸがＹ県を被告として不作為の違法確認の訴えと開発許可処分の義務付けの訴えを提起した場合，裁判所は，Ｘ，Ｙ県若しくはＺの申立てにより又は職権で，決定をもって，Ｚを訴訟に参加させることができる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2121"},{year:"2009",num:"36",subject:"gyo",q:`次のアからエまでの各事例におけるＸが行政事件訴訟法上の仮の救済を求めるとした場合，各事例について最も適切と考えられる仮の救済の申立てを，それぞれ後記１から４までの中から一つ選びなさい。
ア．出入国管理及び難民認定法に定める退去強制事由に該当するとされた外国人Ｘが，入国管理局の主任審査官から退去強制令書の発付を受けた事例
イ．市立の高等学校の校長が，身体に障害を有する入学希望者Ｘに対し，同校の全課程を無事に履修する見通しがないとして，その入学を不許可とした事例
ウ．市議会議員選挙が近々予定されている時期に，市長が，同市の住民基本台帳に住民として記載されているＸは，生活の本拠でない場所を住所として届け出ているとして，職権により，Ｘの住民票を消除しようとしている事例
エ．パチンコ店を経営するＸが，公安委員会から，風俗営業等の規制及び業務の適正化等に関する法律に基づく営業許可の取消しを受けた事例

１．処分の執行の停止の申立て
２．処分の効力の停止の申立て
３．仮の義務付けの申立て
４．仮の差止めの申立て`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1342"},{year:"2009",num:"37",subject:"gyo",q:`国家賠償法第２条に関する次のアからウまでの各記述について，最高裁判所の判例に照らし，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．市が管理する道路に設置された防護柵から幼児が転落した事故において，当該防護柵は，その材質，高さその他その構造に徴し，通行時における転落防止の目的からみてその安全性に欠けるところがなく，当該事故が通常予測することのできない被害者の行動に起因するものであったといえる場合には，当該事故につき，市が営造物の設置管理者としての責任を負うことはない。
イ．点字ブロック等のように，新たに開発された視力障害者用の安全設備を駅に設置しなかったことが当該駅のホームに係る設置又は管理の瑕疵に該当するか否かを判断するに当たっては，視力障害者の事故発生の危険性の程度，その事故を防止するために当該安全設備を設置する必要性の程度及び当該安全設備の設置の困難性等の諸般の事情を総合考慮することを要するが，その際，当該安全設備が全国ないし当該地域における駅のホーム等に普及しているかどうかについてまで考慮する必要はない。
ウ．国家賠償法第２条第１項の営造物の設置又は管理の瑕疵とは，営造物が通常有すべき安全性を欠いていることをいい，そこにいう安全性の欠如とは，当該営造物を構成する物的施設自体に存する物理的，外形的な欠陥ないし不備によって一般的にその利用者に危害を生ぜしめる危険性があることを意味するから，このような危険性ではなく，その営造物が供用目的に沿って利用されることとの関連においてその利用者以外の第三者に危害を生ぜしめる危険性があるというだけでは，国家賠償法第２条第１項の営造物の設置又は管理の瑕疵があるとはいえない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"4"},{year:"2009",num:"38",subject:"gyo",q:`損失補償に関する次のアからウまでの各記述について，法令又は最高裁判所の判例に照らし，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア．土地収用法（以下「法」という。）第７１条に基づく補償金の額の決定に際しては，事業認定の告示の時から権利取得裁決の時までに近傍類地の取引価格に変動が生ずることがあり，その変動率は必ずしも法第７１条による修正率と一致するとはいえないから，被収用者は，収用の前後を通じて被収用者の有する財産価値を等しくさせるような補償を常に受けられるものとはいえないが，憲法第２９条第３項にいう「正当な補償」とは，その当時の経済状態において成立すると考えられる価格に基づき合理的に算出された相当な額をいうのであって，必ずしも常に上記の価格と完全に一致することを要するものではないから，法第７１条の規定は憲法第２９条第３項に違反するものではない。（参照条文）土地収用法第７１条 収用する土地又はその土地に関する所有権以外の権利に対する補償金の額は，近傍類地の取引価格等を考慮して算定した事業の認定の告示の時における相当な価格に，権利取得裁決の時までの物価の変動に応ずる修正率を乗じて得た額とする。
イ．土地収用に伴い，被収用地で営まれていた営業を一時休止せざるを得なくなった場合，営業の休止がなければ得られていたはずの収益は，土地収用法上損失補償の対象になる。
ウ．都市計画決定に基づく都市計画道路の区域内に土地及び建物を所有している者が，当該都市計画に係る事業が決定から６０年以上にわたって着手されないことにより，その間，当該土地への建築物の建築につき都市計画法第５３条の建築制限を受けてきた場合には，そのような長期間の建築制限による損失は，通常，一般的に当然に受忍すべきものとされる制限の範囲を超えた特別の犠牲に当たるから，憲法第２９条第３項の損失補償を必要とする。
（参照条文）都市計画法
第５３条 都市計画施設の区域又は市街地開発事業の施行区域内において建築物の建築をしようとする者は，国土交通省令で定めるところにより，都道府県知事の許可を受けなければならない。ただし，次に掲げる行為については，この限りでない。
一～五 （略）
２，３ （略）`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"6"},{year:"2009",num:"39",subject:"gyo",q:`Ｘの夫Ａは，勤務中にくも膜下出血を起こし死亡した。Ｘは，Ａの発症は，過重な労働が原因と考え，所轄の労働基準監督署長に対して遺族補償給付の支給を請求したが，同署長は，業務起因性が認められないとして不支給の決定をした。次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
（参照条文）労働者災害補償保険法
第３８条 保険給付に関する決定に不服のある者は，労働者災害補償保険審査官に対して審査請求をし，その決定に不服のある者は，労働保険審査会に対して再審査請求をすることができる。
２，３ （略）
第４０条 第３８条第１項に規定する処分の取消しの訴えは，当該処分についての再審査請求に対する労働保険審査会の裁決を経た後でなければ，提起することができない。（以下略）
一，二 （略）
ア．Ｘは，労働基準監督署長の不支給決定を不服として，同署長に対し，異議申立てをすることができる。
イ．労働者災害補償保険審査官に対する審査請求がされた後は，労働基準監督署長は，自らした不支給決定を取り消し，改めて支給決定をすることはできない。
ウ．労働基準監督署長の保険給付に関する決定，審査請求に対する労働者災害補償保険審査官の決定，再審査請求に対する労働保険審査会の裁決は，いずれも抗告訴訟の対象とすることができる。
エ．労働者災害補償保険審査官は，Ｘの審査請求を棄却し，労働保険審査会は，Ｘの再審査請求を棄却した。Ｘは，Ａの死亡に業務起因性がないとした労働基準監督署長の不支給決定の違法を理由として，労働保険審査会の裁決の取消しを求めることができない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2211"},{year:"2009",num:"40",subject:"gyo",q:`行政組織に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア．行政庁とは，国や地方公共団体の意思を決定し，対外的に表示する権限を有した機関であり，各省大臣，都道府県知事，市町村長など，独任制である点に特色をもつ。
イ．国家行政組織法第８条に基づく審議会の中には，調査審議し，不服審査を行う機関が存在するが，その議決が行政庁を法的に拘束することはない。
ウ．独立行政法人は，国から独立した法人格を有する主体として設立されたものであるが，国民に対し説明責任を負うことは国の行政機関の場合と何ら変わるところはないので，何人も独立行政法人の保有する法人文書の開示を請求することができる。
エ．国土交通大臣の指定を受けた指定確認検査機関が建築確認を行った場合には，当該建築確認に関し，指定確認検査機関は行政庁に当たる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2211"},{year:"2009",num:"1",subject:"min",q:"行為能力に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．負担のない贈与をする旨の申込みを受けた未成年者が法定代理人の同意を得ないでした承諾は，取り消すことができない。",c2:"２．未成年者が，法定代理人から営業の許可を得た後，法定代理人の同意を得ないで当該営業に関しない行為をした場合には，その行為は取り消すことができない。",c3:"３．成年被後見人がした行為であっても，日用品の購入は，取り消すことができない。",c4:"４．被保佐人が保佐人の同意を得ることを要する行為をその同意を得ないでした場合には，保佐人は，その行為を追認することはできるが，その行為を取り消すことはできない。",c5:"５．後見開始の審判は本人が請求することはできないが，保佐開始の審判は本人も請求することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"13"},{year:"2009",num:"2",subject:"min",q:"法人の剰余金又は残余財産に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．株主に剰余金の配当を受ける権利及び残余財産の分配を受ける権利の全部を与えない旨の株式会社の定款の定めは，その効力を有しない。",c2:"２．社員に残余財産の分配を受ける権利を与える旨の一般社団法人の定款の定めは，その効力を有しない。",c3:"３．一般社団法人の社員総会は，社員に剰余金を分配する旨の決議をすることができない。",c4:"４．解散をして清算をすることになった一般社団法人の残余財産の帰属が定款で定まらない場合において，その一般社団法人の社員総会は，その残余財産を社員に分配する旨の決議をすることができない。",c5:"５．設立者に残余財産の分配を受ける権利を与える旨の一般財団法人の定款の定めは，その効力を有しない。 ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2009",num:"3",subject:"min",q:"果実に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．善意の占有者は，占有物から生ずる果実を取得するが，強迫によって占有をしている者は，果実を返還する義務を負い，果実を既に消費している場合には果実の代価を償還する義務を負う。",c2:"２．売主は，目的物の引渡しを遅滞している場合でも，引渡しまで果実を収取することができる。",c3:"３．受遺者は，遺言者がその遺言に別段の意思を表示しない限り，遺贈の履行を請求することができる時から果実を取得する。",c4:"４．不動産質権者は，質権の目的物である不動産の用法に従いこれを使用することができるが，不動産から生じた果実を取得することはできない。",c5:"５．Ａが，Ｃに賃料毎月月末支払の約定で賃貸している家屋を，月の途中でＢに贈与した場合，ＡＢ間に特段の合意がなければ，当該月の賃料は日割りによってＡ及びＢに分配される。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2009",num:"4",subject:"min",q:`虚偽表示に当たる法律行為がされた場合における次のアからオまでの者のうち，判例の趣旨に照らし「相手方と通じてした虚偽の意思表示の無効を対抗することができない第三者」に該当するものを組み合わせたものは，後記１から５までのうちどれか。
ア．虚偽の意思表示により目的物を譲り受けた者からその目的物について抵当権の設定を受けた者
イ．土地の賃借人が所有する地上建物を他に仮装譲渡した場合の土地賃貸人
ウ．財産の仮装譲渡を受けた者の相続人
エ．虚偽の意思表示により譲り受けた目的物を差し押さえた仮装譲受人の一般債権者
オ．土地の仮装譲受人から当該土地上の建物を賃借した者`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2009",num:"5",subject:"min",q:"錯誤に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．婚姻の相手が人違いである場合は，そのことに重大な過失があっても，婚姻の無効を主張することができる。",c2:"２．判例によれば，錯誤による意思表示の表意者に重大な過失があった場合には，表意者は無効を主張することができないが，相手方は無効を主張することができる。",c3:"３．債務者でない者が錯誤によって債務の弁済をした場合において，債権者が善意で担保を放棄したときは，弁済をした者は，重大な過失がなくても返還の請求をすることができない。",c4:"４．錯誤により無効な契約であっても，表意者がその行為の無効であることを知って追認をしたときは，行為の時にさかのぼってその効力を生ずる。",c5:"５．判例によれば，家庭裁判所が相続放棄の申述を受理した後は，相続放棄について錯誤による無効を主張することはできない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"13"},{year:"2009",num:"6",subject:"min",q:`代理に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．代理権消滅後にその代理権を越えて代理行為を行った場合には，表見代理は成立しない。
イ．夫婦の日常家事に関する相互の代理権を基礎として権限外の行為の表見代理は成立しないが，相手方においてその夫婦の日常の家事に関する法律行為と信ずるにつき正当の理由のあるときに限り，権限外の行為についての表見代理の規定の趣旨が類推適用される。
ウ．代理権授与の表示による表見代理が成立するためには，相手方が，代理人と称する者が代理権を有すると信じ，かつ，そのように信じたことについて無過失であったことを，その相手方において主張立証しなければならない。
エ．本人が無権代理行為の追認を拒絶した場合には，その後無権代理人が本人を相続したとしても，無権代理行為が有効になるものではない。
オ．無権代理人が本人を共同相続した場合においては，無権代理人の相続分の限度で無権代理行為は当然に有効になる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2009",num:"7",subject:"min",q:"所有権に基づく物権的請求権に関する次の１から５までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．所有権に基づく返還請求権を行使する相手方の占有は，直接占有でなければならず，間接占有であってはならない。",c2:"２．所有権に基づく妨害排除請求権は，所有権の行使を妨害する他人が自己の行為の責任を弁識する能力を欠く状態にある場合，その他人を相手方として行使することができない。",c3:"３．土地の所有権を有するが，その所有権の取得を第三者に対抗することができない者は，その土地を権原なく占有する者に対して，所有権に基づく物権的請求権を行使することができない。",c4:"４．Ａが所有する土地上にその土地を利用する権原なくＢが建物を所有し，Ｃがその建物をＢＣ間の賃貸借契約に基づいて占有する場合，Ａは所有権に基づく物権的請求権として，Ｂに対して建物収去土地明渡しを求めることができ，Ｃに対して建物退去土地明渡しを求めることができる。",c5:"５．Ａが所有する物について，Ｂが物の占有ではない方法によって所有権の行使を妨げる場合，ＡがＢに対して所有権に基づき妨害の除去又は停止を請求することができるのは，Ｂの妨害によりＡが重大にして著しく回復困難な損害を被るときに限られる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2009",num:"8",subject:"min",q:`占有に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．占有権は代理人によっても取得することができるが，代理人による占有の効果は本人に帰属するから，代理人自身は，占有物について独立の占有権を取得することができない。
イ．家屋の所有者が，その家屋の隣家に居住し，常に出入口を監視して容易に他人の侵入を制止できる状況にあるとしても，その所有者がその家屋に錠をかけて鍵を所持し，又は標札や貼紙によって占有中であることを示さなければ，家屋を占有するものとはいえない。
ウ．占有者が占有物について行使する権利は適法に有するものと推定されるが，土地の所有者から占有者に対する土地明渡請求訴訟において，占有者が当該土地に賃借権を有すると主張しても，占有者が賃借権を有し，その賃借権に基づき土地を占有する事実は推定されず，占有者は，賃借権を取得し，その賃借権に基づき土地を占有する事実を立証する必要がある。
エ．占有回収の訴えにおける損害賠償請求が認められるためには，相手方に故意又は過失のあることが必要である。
オ. 占有回収の訴えは，占有を奪われた時から１年以内に提起しなければならない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2009",num:"9",subject:"min",q:"動産の占有権の譲渡に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．動産の所有者であって寄託者であるＡが，その受寄者であるＢに対して，以後第三者Ｃのために動産を占有することを命じ，Ｃがそれを承諾したときは，Ｃは動産の占有権を取得する。",c2:"２．動産の所有者であって賃貸人であるＡが，その賃借人として引渡しを受けているＢとの間で売買契約を締結した場合，占有権を譲渡する旨のＡとＢの意思表示によって，Ａは動産の占有権を失う。",c3:"３．動産の所有者であって寄託者であるＡの承諾を得て，受寄者であるＢが，その動産について第三者Ｃとの間で寄託契約を締結して引渡しをした場合，Ｂは動産の占有権を失う。",c4:"４．動産の所有者であって自ら動産を占有するＡが，Ｂとの間で売買契約を締結し，同時にＢを使用貸主，Ａを使用借主とする使用貸借契約を締結した場合，以後Ｂのために占有する旨のＡの意思表示によって，Ｂは動産の占有権を取得する。",c5:"５．動産の所有者であって賃貸人であるＡの承諾を得て，賃借人であるＢが，その賃借権を第三者Ｃに譲渡し，動産を引き渡した場合，Ｂは動産の占有権を失う。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2009",num:"10",subject:"min",q:"相隣関係に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．隣接する土地の一方の所有者は，他方の土地の所有者に対し，共同の費用で境界標を設置することに協力するよう請求することができ，その協力の結果設置された境界標は共有に属するものと推定される。",c2:"２．建物を建築する際に境界線から５０センチメートル以上の距離を保つ必要がある場合であっても，建築に着手してから１年を経過し，又は建物が完成した後は，隣地の所有者は建物の変更を請求することができず，損害賠償のみを請求することができる。",c3:"３．隣接する土地の一方の所有者がその所有地上の建物を改修する場合，必要な範囲内で隣地の使用を隣人に請求することができるが，隣人の承諾がなければ，その住家に立ち入ることはできない。",c4:"４．判例によれば，袋地（他人の土地に囲まれて公道に通じない土地）を買い受けた者は，所有権移転登記をしなければ，囲繞地（袋地を囲んでいる土地）の所有者に対し，公道に至るため囲繞地を通行する権利を有することを主張することができない。",c5:"５．甲土地を所有するＡが，同土地を袋地である乙土地と袋地でない丙土地に分筆した上，乙土地をＢに売った場合には，Ｂは，丙土地についてのみ，公道に至るための通行権を有する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2009",num:"11",subject:"min",q:`不動産の物権変動に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＡとＢを共同相続人とする相続において，Ａは相続財産に属する甲不動産を遺産分割協議により取得したが，当該遺産分割後その旨の登記をする前に，Ｂの債権者Ｃの代位によって法定相続分に従った相続の登記がされ，ＣがＢの法定相続分に係る持分に対し仮差押えをし，その旨の登記がされた。この場合，Ａは，Ｃに対し法定相続分を超える権利の取得を対抗することができない。
イ．ＡがＢの詐欺によりＢに対し甲不動産を売り渡し，甲不動産の所有権移転登記がされた。その後，ＡはＢの詐欺を理由に当該売買契約を取り消したが，Ｂはその取消し後に甲不動産をＣに売り渡し，その所有権移転登記がされた。この場合，Ａは，登記をしなくてもＣに対し，所有権の復帰を対抗することができる。
ウ．ＡがＢに甲不動産を売り渡した後，Ｂの債務不履行を理由に当該売買契約を解除して甲不動産の所有権がＡに復帰した場合，Ａは，その旨の登記をしなければ，当該解除後にＢから甲不動産を取得したＣに対し，所有権の復帰を対抗することができない。
エ．Ａは時効により甲不動産の所有権を取得したが，時効完成前に，旧所有者ＢがＣに対し甲不動産を売り渡し，その所有権移転登記がされた。この場合，Ａは，Ｃに対し所有権の取得を対抗することができる。
オ．Ａは被相続人Ｂの相続について相続放棄をしたが，相続財産である未登記の甲不動産について，Ａの債権者Ｃが代位によって法定相続分に従って所有権保存登記をした上，Ａの持分に対する仮差押えをし，その旨の登記がされた。この場合，Ａによる相続放棄は，Ｃに対して効力を生じない。`,c1:"１．ア イ ウ",c2:"２．ア イ オ",c3:"３．ア ウ エ",c4:"４．イ エ オ",c5:"５．ウ エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2009",num:"12",subject:"min",q:"留置権に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．留置権は，担保されるべき債権の債権者が目的物を占有していなければ成立せず，仮に占有していても，その占有が不法行為によって始まった場合には成立しない。",c2:"２．留置権は，担保されるべき債権が弁済期にないときは，成立しない。",c3:"３．留置権者は，目的物から優先弁済を受けることはできないが，目的物から生じた果実からは優先弁済を受けることができる。",c4:"４．留置権者は，留置権の目的物が第三者に譲渡された場合でも，目的物に関して生じた債権の全部の弁済を受けるまでは，当該第三者に対して留置権を主張することができる。",c5:"５．留置権者は，目的物の滅失によって債務者が受けるべき金銭その他の物に対して物上代位をすることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2009",num:"13",subject:"min",q:`先取特権及び質権に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．建物の賃貸人が有する不動産賃貸の先取特権は，賃借人がその建物に備え付けた動産について存在する。
イ．一般の先取特権を有する債権者は，債務者がその所有物の代償として支払を受けた金銭についても，先取特権を行使することができる。
ウ．質権は，譲り渡すことができない物についても設定することができる。
エ．不動産及び動産を目的とする質権設定契約は，目的物の引渡しによって効力を生ずるが，この引渡しは，簡易の引渡し又は指図による占有移転でもよい。
オ．質権により担保される債権の弁済期後であっても，質権者と質権設定者は，債務の弁済として質物を質権者に取得させることを合意することができない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2009",num:"14",subject:"min",q:"Ａは，Ｂのために，ＡがＣに対して有する指名債権である金銭債権を目的として，質権を設定し，Ｃに対して質権の設定を通知した。この事例に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．目的債権が保証債務によって担保されている場合，Ｂの質権の効力は，その保証債権に及ぶ。",c2:"２．Ａは，第三者に対して目的債権を譲渡することができない。",c3:"３．Ｃは，質権の設定の通知を受けるより前にＡから目的債権について債務の一部の免除を受けていたときは，目的債権の一部が消滅したことをＢに対して主張することができる。",c4:"４．Ａは，目的債権の消滅時効中断のために必要があるときは，Ｃを被告として，債権存在確認の訴えを提起することができる。",c5:"５．Ｂは，被担保債権及び目的債権が弁済期にある場合，被担保債権額の範囲内でＣから目的債権を直接取り立て，被担保債権に充当することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2009",num:"15",subject:"min",q:"法定地上権に関する次の１から５までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．Ａが所有する土地に，その更地としての評価に基づき，Ｂのための抵当権が設定され，続けて，土地上にＡ所有の建物が建てられた後，抵当権が実行された結果，Ｃが土地の所有者になった場合，土地に建物のための法定地上権は成立しない。",c2:"２．Ａが所有する土地上に，土地の使用借主であるＤが所有する建物が建てられ，続けて，土地にＢのための抵当権が設定され，さらに，Ｄが死亡したためＤの単独相続人であるＡが建物を相続した後，抵当権が実行された結果，Ｃが土地の所有者になった場合，土地に建物のための法定地上権は成立しない。",c3:"３．Ａが所有する土地上に，Ａ所有の建物が建てられ，続けて，土地と建物にＢのための抵当権が共同抵当として設定された後，土地の抵当権のみが実行された結果，Ｃが土地の所有者になった場合，土地に建物のための法定地上権が成立する。",c4:"４．Ａが所有する土地上に，Ａ所有の建物が建てられ，続けて，土地にＢのための抵当権が設定され，さらに，ＡがＤに対し建物を譲渡するとともに，ＡＤ間で土地の賃貸借契約が締結された後，抵当権が実行された結果，Ｃが土地の所有者になった場合，土地に建物のための法定地上権が成立する。",c5:"５．Ａが所有する土地上に，Ａ所有の甲建物が建てられ，続けて，土地と甲建物にＢのための抵当権が共同抵当として設定され，さらに，甲建物が取り壊されて同土地上にＡ所有の乙建物が新しく建築された後，乙建物に抵当権が設定されないまま，土地の抵当権が実行された結果，Ｃが土地の所有者になった場合，土地に乙建物のための法定地上権が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2009",num:"16",subject:"min",q:`Ａは，その所有する不動産を目的として，Ａの債権者であるＢのために譲渡担保権を設定し，所有権移転登記をした。この事例に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ａが弁済期に債務を弁済しないため，Ｂが目的不動産を第三者に譲渡し所有権移転登記がされた場合，譲受人がいわゆる背信的悪意者であるときは，Ａは残債務を弁済して目的不動産を受け戻し，譲受人に対し，所有権の回復を主張することができる。
イ．Ａが弁済期に債務を弁済し，譲渡担保権が消滅した後に，Ｂが目的不動産を第三者に譲渡した場合，譲受人がいわゆる背信的悪意者でない限り，Ａは，登記をしなければ不動産の所有権を譲受人に対抗することができない。
ウ．譲渡担保が帰属清算型の場合は，清算金の有無及びその額は，ＢがＡに対し，清算金の支払若しくはその提供をした時，又は目的不動産の適正評価額が債務額を上回らない旨を通知した時を基準として確定される。
エ．Ｂが，譲渡担保権の実行として，Ａに対し目的不動産の引渡しを求める訴えを提起したのに対し，Ａが清算金の支払と引換えにその履行をすべき旨を主張したときは，特段の事情のある場合を除き，Ｂの請求は，Ａへの清算金の支払と引換えにのみ認容される。
オ．目的不動産が，Ａが第三者から賃借する土地上の建物であり，Ｂが当該建物の引渡しを受けて現実に使用収益をする場合であっても，いまだ譲渡担保権が実行されておらず，Ａによる受戻権の行使が可能な状態にあれば，敷地について賃借権の譲渡又は転貸は生じていないから，土地賃貸人は，賃借権の無断譲渡又は無断転貸を理由として土地賃貸借契約の解除をすることができない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2009",num:"17",subject:"min",q:"履行不能に関する次の１から５までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．債務者は，損害賠償義務を免れるために，履行不能が自己の責めに帰することができない事由によるものであることを主張立証しなければならない。",c2:"２．債務者の責めに帰すべき事由による履行遅滞が生じた後に，債務者の責めに帰することができない事由によって債務の履行が不能になった場合，債務者は履行不能による損害につき賠償責任を負わない。",c3:"３．不動産売買契約において，移転登記と引渡しをする約定の期日前に，売主が目的不動産を第三者に売却して当該第三者への所有権移転登記がされた場合，買主は履行不能を理由として直ちに契約を解除することができる。",c4:"４．他人の権利を目的とする売買の売主が，その責めに帰すべき事由によって，当該権利を取得してこれを買主に移転することができない場合には，買主が売買契約当時当該権利が売主に属しないことを知っていて，売主に対して担保責任としての損害賠償請求ができないときでも，履行不能を理由として損害賠償請求をすることができる。",c5:"５．履行不能を生じさせたのと同一の原因によって，債務者が履行の目的物の代償と考えられる利益を取得した場合，債権者は，履行不能により受けた損害を限度として，債務者に対し，その利益の償還を請求することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2009",num:"18",subject:"min",q:"債権者代位権に関する次の１から５までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．ＡがＢのＣに対する債権の譲渡を受けた場合，ＡはＢに代位して債権譲渡の通知をＣに対してすることができる。",c2:"２．Ｃに名誉を侵害されたＢがＣに対して慰謝料の支払を求めて交渉した後，Ｃが一定額の慰謝料の支払を約する合意が成立したときは，Ｂの債権者ＡがＢに代位してＣに対して慰謝料の支払を求めることができる。",c3:"３．被相続人の遺言ですべての遺産を相続した法定相続人Ｃに対して，他の法定相続人Ｂが遺留分減殺請求権を行使しないためこれが時効消滅する危険があるときは，Ｂの債権者Ａは遺留分減殺請求権を代位して行使することができる。",c4:"４．ＡのＢに対する債権がＢの所有地の賃借権である場合，Ａは，Ｂが無資力でなければ，その土地の不法占拠者Ｃに対する物権的請求権を代位行使することができない。",c5:"５．ＢがＣを認知した場合，Ｂの推定相続人であるＡは，Ｂに代位してその認知を取り消すことができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2009",num:"19",subject:"min",q:`保証に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 解除による原状回復義務は本来の債務とは同一性のない別個の債務であると解しても，契約解除による原状回復義務が保証債務の範囲に含まれるか否かは保証契約における当事者の意思解釈の問題であると考えると，特定物の売買契約における売主のための保証人は，売主の債務不履行により契約が解除された場合における原状回復義務についても保証の責任を負うと解することは可能である。
イ. 保証人が検索の抗弁権を行使するためには，主たる債務者に弁済の資力があること及び主たる債務者の財産が執行の容易なものであることを証明する必要がある。
ウ. 「保証人は，主たる債務者の債権による相殺をもって債権者に対抗することができる。」という民法の規定について，保証人に主たる債務者の債権をもって相殺する権限を与えたものと考えると，保証人は，対当額について保証債務の履行を拒絶する抗弁権を有すると解することになる。
エ. 保証人が主たる債務者の委託を受けて保証をした場合であって，債権者に弁済をすべき旨の裁判の言渡しを受けたとき，又は主たる債務者に代わって弁済をし，その他自己の財産をもって債務を消滅させるべき行為をしたときは，そのいずれのときでも保証人に過失がないときに限り，その保証人は主たる債務者に対して求償権を有する。
オ. 連帯保証債務は，保証債務のもつ補充性を奪って，債権者の権利を強化するため，保証人が主たる債務者と連帯して債務を負担することを特約することによって成立する債務であると考えると，保証人が一人である場合において，債権者が保証債務の履行を求めるときは，連帯の約定は，請求原因で主張立証する必要はなく，催告又は検索の抗弁に対する再抗弁となる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2009",num:"20",subject:"min",q:"指名債権譲渡の承諾に関する次の１から５までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．譲渡禁止特約のある債権について債権譲渡がされた場合であっても，債務者が譲渡を承諾すれば，債権譲渡は有効になる。",c2:"２．債務者が譲渡人又は譲受人のいずれかに対して債権譲渡を承諾した場合，譲受人は，その譲渡を債務者に対抗することができる。",c3:"３．未完成仕事部分に関する請負報酬金債権の譲渡について，債務者が異議をとどめない承諾をすれば，譲受人がその債権が未完成仕事部分に関する請負報酬金債権であることを知っていたとしても，債務者は，その債権の譲渡後に生じた仕事完成義務不履行を理由とする当該請負契約の解除をもって譲受人に対抗することができない。",c4:"４．債務者は，債務の弁済をしていたとしても，その債権の譲渡に異議をとどめない承諾をした場合，譲受人に対しては債務の履行を拒むことはできないが，譲渡人に対しては弁済金の返還を請求することができる。",c5:"５．抵当不動産の第三取得者が被担保債権の弁済をしたことによって抵当権が消滅した後に，被担保債権の債権者が当該債権を第三者に譲渡し，債務者が異議をとどめずにその債権譲渡を承諾しても，第三取得者に対する関係においては，抵当権の効力は復活しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2009",num:"21",subject:"min",q:"弁済に関する次の１から５までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．弁済を受領する権限のない者に対する弁済は，債権の準占有者に対する弁済として有効になる場合を除き，債権者に対し効力を有しない。",c2:"２．商人間の売買契約において，買主が，慣習により定まる取引時間でない時刻に弁済の提供をし，売主が任意に弁済を受領したときは，それが弁済期日内であれば，買主は，遅滞の責任を負わない。",c3:"３．貸金債権について債権に関する証書がある場合において，借主は，債務の全部を弁済しようとするときに，その証書の返還と引換えに弁済をするべき旨を主張することができる。",c4:"４．支払の差止めを受けた第三債務者が自己の債権者に弁済をしたときは，差押債権者は，その受けた損害の限度においても，更に弁済をすべき旨を第三債務者に請求することができない。",c5:"５．弁済の費用について別段の意思表示がないときは，その費用は債権者の負担となるが，債務者が住所の移転その他の行為によって弁済の費用を増加させたときは，その増加額は，債務者の負担となる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2009",num:"22",subject:"min",q:"相殺に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．判例によれば，受働債権の履行について確定期限がある場合，弁済期が到来しないと相殺は不可能であるから，相殺をすることができるのは，その確定期限到来後である。",c2:"２．債権が差し押さえられた場合，債務者は，差し押さえられた債権を自働債権とし，第三債務者が債務者に対して有する債権を受働債権として，相殺をすることができる。",c3:"３．相殺適状が生じてから相殺の意思表示がされるまでの間に一方の債権が譲渡されたとき，他方の債権の債権者は，譲渡された債権を受働債権として相殺をすることができない。",c4:"４．判例によれば，受働債権が差し押さえられても，差押え前から自働債権となる債権を第三債務者が有していた場合，第三債務者は，それらの債権の弁済期の先後を問わず，相殺適状に達すれば，相殺をすることができる。",c5:"５．自働債権が時効によって消滅している場合には相殺をすることができないが，相手方は時効利益を放棄して相殺をすることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2009",num:"23",subject:"min",q:`Ａ（東京在住）は，友人の美術品愛好家Ｂ（京都在住）が所有する複数の掛け軸のうち掛け軸「甲」を手に入れたいと考えた。そこで，ＡはＢに対し，４月１日，そのための手紙を出し，この手紙は４月３日にＢに届いた（以下これを「本件手紙」という。）。この場合において，ＡＢ間の甲の売買契約の成否及びその時期に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。なお，日付は，本問において，すべて同じ年のものである。
ア．本件手紙が「甲などお手持ちの掛け軸について，お譲りくださるお気持ちはありませんでしょうか。」というものであり，これに対し，Ｂが４月４日，「１００万円でよろしければ甲をお譲りします。」という返事の手紙を出し，この手紙が４月６日にＡに届いたところ，ＡがＢに，４月７日，「甲を１００万円でお譲りくださるとのこと，ありがとうございます。」という手紙を出し，この手紙が４月９日にＢに届いた場合，甲の売買契約は４月４日に成立する。
イ．本件手紙が「甲を１００万円でお譲りください。」というものであり，これに対し，Ｂが４月４日，「１００万円で甲をお譲りします。」という返事の手紙を出し，この手紙が４月６日にＡに届いた場合，甲の売買契約が４月６日に成立する。
ウ．本件手紙は「甲を１００万円でお譲りください。」というものであり，これに対し，Ｂが４月４日，「１２０万円でよろしければ甲をお譲りします。」という返事の手紙を出し，この手紙が４月６日にＡに届いたところ，ＡがＢに，４月７日，「それでは１２０万円で甲をお譲りください。」という手紙を出し，この手紙が４月９日にＢに届いた場合，甲の売買契約が４月７日に成立する。
エ．本件手紙は「甲を１００万円でお譲りください。」というもので，４月３日午後３時にＢに届いたが，Ａは，本件手紙を投函した後，気が変わり，４月３日午後９時に，「本件手紙が届くかと思いますが，事情により，甲をお譲り願う件はなかったことにしてください。」という内容の文書をファクシミリでＢに送信し，当該ファクシミリ文書は同日時にＢ宅に届いた。しかし，Ｂは，４月４日，「１００万円で甲をお譲りします。」という返事の手紙を出し，この手紙が４月６日にＡに届いた場合，甲の売買契約が４月４日に成立する。
オ．本件手紙は「甲を１００万円でお譲りください。」というものであったが，Ａは，手紙を投函した後，気が変わり，４月２日午後９時，「本件手紙が届くかと思いますが，事情により，甲をお譲り願う件はなかったことにしてください。」という内容の文書をファクシミリでＢに送信し，当該ファクシミリ文書は同日時にＢ宅に届いた。その翌日である４月３日，本件手紙がＢに届いた。しかし，Ｂは，４月５日，「１００万円で甲をお譲りします。」という返事の手紙を出し，この手紙が４月７日にＡに届いた場合，甲の売買契約が４月５日に成立する。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2009",num:"24",subject:"min",q:`契約と書面との関係に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．贈与者と受贈者はいずれも，書面によらない贈与を撤回することができる。ただし，履行の終わった部分については，この限りでない。
イ．委任契約は，諾成契約であるから，口頭の合意があれば成立する。しかし，委任契約の成立を第三者に主張するためには，書面によらなければならない。
ウ．判例によると，死因贈与の贈与者は，いつでも，その全部又は一部を撤回することができるが，その撤回は，遺言の方式に従ってしなければならない。
エ．抵当権設定契約は，抵当権者と抵当目的物の所有権を有する抵当権設定者の合意があれば，書面によらず，かつ，設定登記がされなくても，成立する。
オ．保証人は，書面によらない保証契約を撤回することができる。ただし，履行の終わった部分については，この限りでない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2009",num:"25",subject:"min",q:"利益を受ける者の意思の尊重に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．契約により，当事者の一方（債務者）が第三者に対してある給付をすることを約束したときは，その第三者は，債務者に対し，直接にその給付を請求する権利を有する。第三者が債務者に対し，その契約の利益を享受する意思を表示したときは，第三者の権利は，前記契約が成立した時にさかのぼって発生する。",c2:"２．遺贈義務者が受遺者に対し，相当の期間を定めて，その期間内に遺贈の承認又は放棄をすべき旨の催告をした場合，受遺者がその期間内に遺贈義務者に対してその意思を表示しないときは，遺贈を承認したものとみなされる。",c3:"３．義務なく他人のために事務の管理を始めた者は，その事務管理が本人の意思に反するものであるときは，本人のために有益な費用を支出したとしても，本人に対し，その償還を請求することができない。",c4:"４．利害関係を有しない第三者は，債務者の意思に反して，その債務の弁済をすることができない。",c5:"５．利害関係を有しない第三者は，債務者の意思に反して，その債務の保証をすることができない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"24"},{year:"2009",num:"26",subject:"min",q:`契約の解除に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．建物の建築請負契約において，仕事の目的物である建物に瑕疵があり，そのために契約した目的を達することができないときは，注文者は，そのことを理由として契約の解除をすることができる。
イ．委任契約が受任者の利益のためにも締結された場合であっても，委任者は，やむを得ない事由があるときには，契約を解除することができる。
ウ．組合契約の解除の効力は，将来に向かってのみ生ずる。
エ．履行遅滞による契約の解除をするに先立ち，期間を定めて履行の催告をしたが，その期間が不相当に短かった場合であっても，催告時と解除時の間に相当な期間が経過していれば，解除は有効である。
オ．動産の売買契約が締結され，売買代金の一部が支払われた後で，当該売買契約が売主の債務不履行を理由に解除された場合，売主は，買主の損害を賠償する義務を負うが，受領した売買代金の一部を返還するに当たっては，その受領の時からの利息を付す必要はない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2009",num:"27",subject:"min",q:`Ａが所有する甲不動産について，Ｂを売主とし，Ｃを買主とする売買契約が成立した場合に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．ＢＣ間の売買契約が成立した当時からＡに甲不動産を他に譲渡する意思がなく，したがってＢにおいて甲不動産を取得しＣに移転することができないような場合であっても，なおその売買契約は有効に成立する。
イ．甲不動産の引渡しと引換えに代金をＢに支払ったＣが，ＢがＡから甲不動産の所有権を取得することができないことから売買契約を解除した場合において，Ｃは，Ａからの不動産引渡請求に対し留置権を主張し，Ｂから代金相当額の返還を受けるまで甲不動産を留置することができる。
ウ．Ｂが甲不動産をＡから取得してこれをＣに移転することができたにもかかわらず，Ｃ自らＡと交渉して甲不動産を直接取得したことから，ＢがＡから甲不動産の所有権を取得することができなくなったときは，Ｃは，他人の権利の売買における売主の担保責任の規定に基づき甲不動産の売買契約を解除することができない。
エ．甲不動産の所有権は売買契約成立時にＢからＣに移転するが，ＢがＡから所有権を取得することができないため売買契約が解除された場合は，甲不動産の所有権はＣからＡに直接復帰する。
オ．ＢＣ間の売買契約成立時に甲不動産の所有権がＡに帰属することをＣが知らなかった場合には，Ｃに売買契約の要素に関する錯誤があり，同契約は効力を有しないから，Ｂは，Ａから所有権を取得してＣに移転する義務を負わない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2009",num:"28",subject:"min",q:"借地借家法の適用を受ける不動産賃貸借契約の終了及び更新に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．判例によれば，土地の賃借人が賃料の支払を遅滞したときは賃貸人は催告を要せずに土地の賃貸借契約を解除することができる旨の特約は，借地借家法の強行規定に反し無効である。",c2:"２．土地の賃貸借契約の存続期間が満了する前に当該土地上の建物が滅失し，再築をしないで賃借人が土地の使用を継続する場合，賃貸人が遅滞なく異議を述べないと契約が更新したものとみなされる。",c3:"３．判例によれば，賃貸人が期間の定めのない建物賃貸借契約について解約申入れを行い，その後，解約申入れの時に申し出ていた立退料等の金員の増額を申し出た場合においても，この増額に係る金員を参酌して当該解約申入れの正当事由を判断することができる。",c4:"４．期間の定めのある建物賃貸借契約の期間が満了した後，賃借人が使用を継続し，賃貸人が異議を述べなかったときは，賃貸借契約は従前と同じ期間で更新される。",c5:"５．住宅の所有を目的とする存続期間３０年の借地権について存続期間が満了し，契約の更新がないときは，賃借人は，賃貸人に対し当該借地上に権原により建築した建物を時価で買い取るべきことを請求することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"35"},{year:"2009",num:"29",subject:"min",q:`建物建築工事の請負契約に係る完成建物の所有権の帰属について，材料を提供する者が請負人であっても原始的に注文者に帰属するとする見解があるが，次のアからオまでの各記述のうち，この見解の論拠として適切でないものを組み合わせたものは，後記１から５までのうちどれか。
ア．不動産工事の先取特権の規定が民法に設けられている。
イ．建物建築工事において完成建物の引渡しを受けていない注文者の債権者がその建物に対し強制執行をすることができることになるのは，妥当でない。
ウ．建物建築工事において，建築確認を注文者が申請し，注文者の名義で所有権保存登記を行うという実態がある。
エ．建物は土地と別個の不動産であるから，建築された建物はその敷地に付合しない。
オ．建物建築工事の請負契約において，請負人が建物の所有権を取得するとしても，請負人には敷地利用権がない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2009",num:"30",subject:"min",q:`Ａが所有し運転するタクシーに，Ｂが所有し運転する自家用車が衝突する交通事故が発生し，ＡＢ所有の各車両が損傷するとともに歩行者Ｃが負傷した。当該交通事故により，Ａには５０万円の損害が，Ｂには８０万円の損害が，Ｃには１００万円の損害が，それぞれ生じ，当該交通事故及びＣの負傷についての過失割合はＡが２割で，Ｂが８割であり，また，Ｃの負傷にはＣの過失がないものとして，次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．Ｃは，その損害額である１００万円全額を，Ａに対しても，Ｂに対しても請求することができる。
イ．ＣがＡに対して事故後３年以内に損害賠償を請求する訴訟を提起した場合，同訴訟の提起は，ＢのＣに対する損害賠償債務についても消滅時効を中断する。
ウ．Ｂは，その損害額である８０万円のうち１６万円の損害賠償請求権を自働債権として，ＢのＡに対する損害賠償債務と相殺することができる。
エ．ＣがＡに対して損害賠償債務全額を免除したときでも，Ｃは，Ｂの債務を免除する意思を有していなければ，Ｂに対し１００万円全額を請求することができる。
オ．ＡがＣに対し５０万円を賠償したとき，Ａは，Ｂに対し４０万円を求償することができる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2009",num:"31",subject:"min",q:`民法第７２４条に関する次の１から５までの各記述のうち，判例の趣旨に照らし誤っているものを２個選びなさい。
（参照条文）民法
第７２４条 不法行為による損害賠償の請求権は，被害者又はその法定代理人が損害及び加害者を知った時から３年間行使しないときは，時効によって消滅する。不法行為の時から２０年を経過 したときも，同様とする。`,c1:"１．民法第７２４条後段の規定は，不法行為による損害賠償請求権の除斥期間を定めたものである。",c2:"２．民法第７２４条にいう被害者が損害を知った時とは，被害者が損害の発生を現実に認識した時をいう。",c3:"３．不法行為の被害者が不法行為の時から２０年を経過する前６か月内において，当該不法行為を原因とする精神上の障害により事理を弁識する能力を欠く常況にあるのに法定代理人を有しなかった場合には，その後，後見開始の審判を受け，成年後見人が選任された時から，民法第７２４条後段の期間が新たに進行する。",c4:"４．不法占拠により日々発生する損害については，加害行為がやんだ時から消滅時効が進行するのではなく，それぞれの損害を知った時から別個に消滅時効が進行する。",c5:"５．民法第７２４条前段及び同条後段の各期間経過による法的効果は，いずれも当事者が主張しなければ，裁判所はこれを考慮することができない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"35"},{year:"2009",num:"32",subject:"min",q:`婚姻の取消しに関する次のアからエまでの各記述のうち，誤っているものはどれか。
ア．未成年の子は，父母の同意がなければ婚姻することはできないから，父母は，同意のないことを理由に婚姻の取消しを請求することができる。
イ．婚姻適齢に達しない者がした婚姻でも，その者が婚姻適齢に達したときは，当該婚姻の取消しを請求することはできない。
ウ．再婚禁止期間内にした婚姻は，女が再婚後に懐胎したときは，取消しを請求することができない。
エ．検察官は，当事者双方が存命中は，婚姻適齢違反の婚姻の取消しを請求することができる。`,c1:"１．ア",c2:"２．イ",c3:"３．ウ",c4:"４．エ",c5:"５．誤っているものはない",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2009",num:"33",subject:"min",q:`利益相反行為に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．親が自分が代表取締役をする会社の債務について，親権を行う子に保証をさせた場合は，利益相反行為にならない。
イ．父母が共同で親権を行う子の所有する不動産を，父の債務の担保に供するためには，特別代理人を選任して，その特別代理人と母が共同で子の代理をする。
ウ．被保佐人と，その保佐人が親権を行う未成年の子との利益相反行為については，保佐人は臨時保佐人の選任を家庭裁判所に請求しなければならない。
エ．父の相続に当たり，母が数人の子の親権者として遺産分割の協議をした場合，母が取得する財産はないとする遺産分割であれば，利益相反行為にならない。
オ．後見監督人がある場合でも，後見人と被後見人との利益相反行為については特別代理人を選任しなければならない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2009",num:"34",subject:"min",q:"民法上の後見に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．成年後見人になる者は必ず家庭裁判所の選任によるが，未成年後見人になる者は必ずしも家庭裁判所が選任するとは限らない。",c2:"２．成年後見人は，正当な事由があるときは，家庭裁判所の許可を得てその任務を辞することができるが，未成年後見人は，正当な事由があっても，家庭裁判所の許可を得てその任務を辞することはできない。",c3:"３．家庭裁判所は，成年後見人を解任することができるが，未成年後見人を解任することはできない。",c4:"４．家庭裁判所は，成年後見人には被後見人の財産から相当な報酬を与えることができるが，未成年後見人には報酬を与えることはできない。",c5:"５．成年後見人の配偶者は後見監督人になることができるが，未成年後見人の配偶者は後見監督人になることはできない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2009",num:"35",subject:"min",q:"相続による権利義務の承継に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．使用貸借の借主が死亡すると，その相続人は使用借主となる。",c2:"２．定期の給付を目的とする贈与は，たとえ書面でなされたとしても，贈与者の死亡によって効力を失う。",c3:"３．被相続人が有していた占有権は，相続人が相続財産について事実的支配をしないと，相続されない。",c4:"４．系譜，祭具及び墳墓の所有権は，氏を同じくする者のうち慣習に従い祖先の祭祀を主宰すべき者が相続する。",c5:"５．被相続人が買主の詐欺により不動産を売り渡したが，その売買契約を取り消さずに死亡したときは，相続人は，これを取り消すことができない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2009",num:"36",subject:"min",q:"共有者の一人が死亡し，相続人の不存在が確定し，清算手続が終了した場合，その共有持分は他の共有者に帰属するとする見解（甲説）と，特別縁故者に対する財産分与の対象となり，この分与がされない場合に初めて他の共有者に帰属するとする見解（乙説）がある。次の１から５までの記述を，甲説の説明又は根拠に親しむものと，乙説の説明又は根拠に親しむものとに分けた場合，前者に属するものはどれか。",c1:"１．相続財産が共有持分である場合とそうでない場合とで，区別して扱う合理的な理由はない。",c2:"２．相続財産が共有持分である場合であっても，それを相続債権者の弁済のために換価して弁済した場合と，そのような事情がなく換価しなかった場合とで，区別して扱う合理的な理由はない。",c3:"３．個別の事案に応じて，他の共有者と特別縁故者とのいずれを保護すべきかについての家庭裁判所の判断を通じて，具体的妥当性を図ることができるようにすべきである。",c4:"４．特別縁故者に対する財産分与の制度は，遺贈又は死因贈与の制度の補完である。",c5:"５．共有関係は，完全な財産権が他の共有持分によって制約されているにすぎず，共有者間には，当該共有財産に関し相互連帯的な特別関係があるといえる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2009",num:"37",subject:"syo",q:"株式会社の設立に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．発起設立において，発起人は，公証人の認証を受けた定款で定められて選任されたものとみなされた設立時取締役を会社の成立の時よりも前に解任することができない。",c2:"２．募集設立において，会社の成立の時における検査役の調査を経ていない財産引受けの目的財産の価額が定款に記載され，又は記録された価額に著しく不足するときは，発起人は，その職務を行うについて注意を怠らなかったことを証明した場合でも，当該不足額を支払う義務を免れることができない。",c3:"３．募集設立において，会社法上の公開会社の設立時取締役の選任は，創立総会の決議によって行わなければならない。",c4:"４．設立時募集株式の引受人は，出資の履行期日又は期間内に出資に係る金銭の払込み又は金銭以外の財産の給付をしなければ，株主となることができない。",c5:"５．委員会設置会社でない会社の設立手続に重大な瑕疵があるときは，株主，取締役，会社債権者，監査役又は清算人は，会社の成立の日から１年以内に，設立の無効の訴えを提起することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"23"},{year:"2009",num:"38",subject:"syo",q:`株式に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．株式が２以上の者の共有に属するときは，共有者は，当該株式についての権利を行使する者一人を定め，会社の同意を得なければ，当該株式についての権利を行使することができない。
イ．子会社は，無償で取得する場合については，その親会社である株式会社の株式を取得することが禁じられていない。
ウ．判例によれば，株式譲受人から名義書換請求があったのに，会社が過失によりその書換えをしなかった場合には，会社は，その株式譲受人を株主として取り扱わなければならない。
エ．取締役会設置会社において，発行可能株式総数を超えることとなる株式の分割をしようとするときは，株主総会の特別決議により，発行可能株式総数の増加に係る定款の変更をしなければならない。
オ．会社がその発行する株式を引き受ける者の募集において株主に株式の割当てを受ける権利を与える場合には，当該会社は，自己株式について募集株式の割当てを受ける権利を有しない。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2009",num:"39",subject:"syo",q:"異なる種類の株式に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．種類株式発行会社において単元株制度を採用する場合には，その単元株式数は，株式の種類ごとに定めなければならない。",c2:"２．種類株式発行会社とは，内容の異なる２以上の種類の株式を発行する会社をいい，その旨を定款で定めていれば足り，現に２以上の種類の株式を発行していることを要しない。",c3:"３．委員会設置会社においては，当該種類の株式の種類株主を構成員とする種類株主総会において取締役を選任することを内容とする種類の株式を発行することができない。",c4:"４．株式会社は，定款に定めることにより，株主総会のあらゆる決議事項について議決権を行使することができない種類の株式を発行することができる。",c5:"５．取得請求権付株式の株主は，会社に対し，当該会社に分配可能額がなくとも，当該取得請求権付株式を取得することを請求することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2009",num:"40",subject:"syo",q:`新株予約権に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．新株予約権者は，会社の承諾を得て，募集新株予約権の払込金額の払込みに代えて，当該会社に対する債権をもって相殺することができる。
イ．新株予約権の発行が法令又は定款に違反する場合において，株主が不利益を受けるおそれがあるときは，株主は，新株予約権者に対し，当該新株予約権の行使をやめることを請求することができる。
ウ．新株予約権付社債に付された新株予約権は，当該新株予約権についての社債が消滅したときを除き，新株予約権単独で譲渡することができない。
エ．株式会社は，自己の新株予約権を取得することができない。
オ．募集新株予約権の行使に際して出資される財産の価額が当該募集新株予約権の発行時の株価より著しく低い場合には，その募集事項の決定は，株主総会の特別決議によらなければならない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2009",num:"41",subject:"syo",q:`取締役会設置会社における株主総会に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．株主総会の招集通知を受けなかった株主は，当該株主総会に出席しても，議決権を行使することができない。
イ．株主総会に出席しない株主が書面によって議決権を行使することができることとする旨を定めた場合，会社法上の公開会社でない会社であっても，株主総会の招集通知の発出の日から株主総会の日までの期間を１週間に短縮することはできない。
ウ．株主総会の招集通知は，書面で，又は電磁的方法によりしなければならない。
エ．株主総会において議決権を行使することができる株主の数が１０００人以上である場合であっても，定款に定めがない限り，株主総会に出席しない株主は，書面によって議決権を行使することができない。
オ．株主総会に先立って議決権行使書面をあらかじめ会社に提出した株主は，当該株主総会に出席して議決権を行使することができない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2009",num:"42",subject:"syo",q:`取締役の競業取引又は利益相反取引に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．判例によれば，取締役会設置会社において，取締役と会社との間の取引が株主全員の合意によってされた場合には，利益相反取引としての取締役会の承認を受けることを要しない。
イ．判例によれば，株式会社の事業の部類に属する取引に当たるか否かを判断する場合には，株式会社が現に行っている事業との市場での競合性を基準として判断し，仕入先の競合を考慮する必要はない。
ウ．取締役が自己のために取締役会設置会社でない会社と取引をしようとするときに承認を受けなければならない株主総会の決議は，特別決議ではなく，普通決議である。
エ．取締役会設置会社の取締役が取締役会の承認を受けて会社の事業の部類に属する取引をしたときは，その取引によって当該会社に損害が生じても，当該取締役は，会社に対する損害賠償責任を負わない。
オ．取締役会設置会社の取締役が会社の事業と同じ種類の事業を行っている他の株式会社の業務執行者に就任するためには，当該取締役会設置会社の取締役会の承認を受けなければならない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2009",num:"43",subject:"syo",q:`特別取締役に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．特別取締役以外の取締役は，特別取締役による取締役会を招集することができる。
イ．特別取締役による議決の定めは，取締役会で定めれば足り，定款で定めることを要しない。
ウ．特別取締役による議決の定めがある場合は，監査役は，特別取締役による取締役会に出席することを要しない。
エ．特別取締役の互選によって定められた者は，特別取締役による取締役会の決議があったときは，遅滞なく，当該決議の内容を特別取締役以外の取締役に報告しなければならない。
オ．委員会設置会社においては，特別取締役の制度は認められておらず，取締役会は，その決議によって，重要な財産の処分の決定を執行役に委任することができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2009",num:"44",subject:"syo",q:`取締役会設置会社における監査役に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．会社法上の公開会社でない大会社は，監査役会を置くことを要しないが，定款の定めによって，監査役会を置くことができる。
イ．監査役が２人以上ある場合には，監査役は，いつでも，監査役の全員の同意により，会計監査人を解任することができる。
ウ．監査役会においては，招集通知の発出を要せず，書面決議は認められていない。
エ．委員会設置会社でない会計監査人設置会社は，監査役を置くことを要しないが，定款の定めによって，監査役を置くことができる。
オ．取締役が監査役の全員に対して監査役会に報告すべき事項を通知したときは，当該事項を監査役会に報告することを要しない。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2009",num:"45",subject:"syo",q:"会計監査人に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．会計監査人は，いつでも，辞任することができる。",c2:"２．定時株主総会において会計監査人の出席を求める決議があったときは，会計監査人は，定時株主総会に出席して意見を述べなければならない。",c3:"３．監査役会設置会社において一時会計監査人の職務を行うべき者を監査役会が選任したときは，その報酬も，監査役会が定める。",c4:"４．監査役設置会社が会計監査人に対して責任を追及する訴えを提起する場合には，当該訴えについては，監査役が監査役設置会社を代表する。",c5:"５．取締役は，監査役会設置会社において会計監査人の報酬を定める場合には，監査役会の同意を得なければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"34"},{year:"2009",num:"46",subject:"syo",q:"持分会社に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．合資会社において，会社の成立の時までに社員が出資の全額を履行する必要はないし，社員による出資の払戻しの請求も可能である。",c2:"２．合名会社の社員は，会社の財産に対する強制執行がその効を奏しなかった場合は，連帯して，会社の債務を弁済する責任を負うが，社員が，当該会社に弁済をする資力があり，かつ，強制執行が容易であることを証明したときは，その責任を負わない。",c3:"３．合同会社の社員が負う責任は，間接有限責任である。",c4:"４．合資会社の社員は，他の社員の全員の承諾がなければ，その持分の全部又は一部を他人に譲渡することができない。",c5:"５．合名会社の社員は，信用又は労務を出資することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2009",num:"47",subject:"syo",q:"社債の発行に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．委員会設置会社が社債を発行する場合，取締役会は，社債を引き受ける者の募集に関する重要な事項の決定を執行役に委任することができる。",c2:"２．社債を発行するときは，会社は，社債券を発行しなければならない。",c3:"３．募集社債は，一定の日までにその総額について引受けの申込みがなかったときは，引受けの申込みがあった額においても，成立しない。",c4:"４．会社は，社債を発行する場合には，各社債の金額を問わず，社債管理者を定め，社債権者のために，社債の管理を行うことを委託しなければならない。",c5:"５．同一の種類の社債においては，各社債の金額は，均一であるか，又は最低額をもって整除することができるものでなければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2009",num:"48",subject:"syo",q:"吸収合併又は吸収分割に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．吸収合併において，吸収合併消滅株式会社の株主に対して吸収合併存続株式会社の株式を交付しない合併は，認められていない。",c2:"２．吸収分割後吸収分割株式会社に対して債務の履行を請求することができる吸収分割株式会社の債権者は，分割対価である株式（これに準ずるものを含む。）を吸収分割株式会社の株主に全部取得条項付種類株式の取得対価又は剰余金の配当として分配する場合でない限り，その吸収分割について異議を述べることができない。",c3:"３．吸収合併消滅株式会社と吸収合併存続株式会社の各株主総会で特別決議による承認を得ることができれば，吸収合併存続株式会社が吸収合併消滅株式会社の債務を承継しないこととすることができる。",c4:"４．吸収分割により吸収分割承継株式会社に承継させる資産の帳簿価額の合計額が法定の額を超えないものとして吸収分割株式会社の株主総会の承認を受けないで吸収分割が行われる場合には，当該吸収分割株式会社の株主には，反対株主の株式買取請求権が認められないが，当該吸収分割承継株式会社の株主には，反対株主の株式買取請求権が認められる。",c5:"５．吸収合併の効力は，吸収合併存続会社が本店の所在地において変更の登記をすることにより生ずる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"24"},{year:"2009",num:"49",subject:"syo",q:"会社関係訴訟に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．株主総会の決議の方法が定款に違反する場合は，当該決議の取消しの原因となるにとどまるが，株主総会の決議の方法が法令に違反する場合は，当該決議の無効の原因となる。",c2:"２．取締役を解任する旨の議案が株主総会において否決された場合の当該取締役の解任の訴えは，当該株主総会の日から３０日以内に限り，提起することができる。",c3:"３．判例によれば，取締役会設置会社においては，株主総会の招集通知に記載のない事項を当該株主総会で決議したときは，当該決議は無効となる。",c4:"４．株式会社の役員の解任の訴えは，当該株式会社のみが被告となり，解任の対象となる役員は被告とならない。",c5:"５．取締役の全員について，任期が満了して株主総会で再任されなかった場合，当該株主総会の取締役の選任に関する決議に取消しの事由があっても，その再任されなかった者は，当該決議の取消しの訴えを提起することはできない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2009",num:"50",subject:"syo",q:"代理商に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．代理商は，取引の代理をしたことによって生じた債権の弁済期が到来しているときは，当事者が別段の意思表示をしていない限り，その弁済を受けるまでは，当該取引によって占有するに至った物以外の物であっても，商人のために当該代理商が占有する物を留置することができる。",c2:"２．代理商は，取引の代理をした場合においては，商人の請求があるときに限り，遅滞なく，その旨の通知を発しなければならない。",c3:"３．代理商は，契約の期間を定めなかったときは，いつでも，その代理商契約を解除することができる。",c4:"４．代理商は，商人の許可を受けなければ，自ら営業を行うことができない。",c5:"５．物品の販売又はその媒介の委託を受けた代理商は，売買契約成立後，当該売買契約の目的物に瑕疵がある旨の買主からの通知を受ける権限を有する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"15"},{year:"2009",num:"51",subject:"syo",q:"商人に関する次の１から５までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．営業を行っていなかった個人が映画館を買い受けて経営する目的で特にそのことを説明せずに当該目的を知らない信用協同組合からその手付金相当額の金銭を借り受けた場合，その金銭消費貸借契約に基づく返還請求権の消滅時効期間は，１０年である。",c2:"２．宅地建物取引業者は，買主からの委託によって土地の売買の媒介をした場合であって，売主からの委託によるものでなく，かつ，売主のためにする意思をもってしたものでないときでも，当該売主に対し，相当な報酬を請求することができる。",c3:"３．商人が使用人を雇用することは，附属的商行為と推定される。",c4:"４．商行為の代理人が本人のためにすることを示さないでこれを行い，かつ，相手方が本人のためにすることを過失なく知らなかった場合において，相手方が代理人との法律関係を主張したときは，本人は，相手方に対し，本人相手方間の法律関係を主張することができない。",c5:"５．個人である質屋営業者の金員貸付行為は，商行為に当たらない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2009",num:"52",subject:"syo",q:"商人間の売買に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．判例によれば，商人間の売買において，買主が目的物に直ちに発見することのできない瑕疵があることを目的物受領後６か月以内に発見し，直ちに売主に対してその旨の通知を発したとしても，買主は，売主に対し，代金の減額を請求することはできない。",c2:"２．商人間の売買において，売主がお歳暮用商品である目的物を当該お歳暮の期間内に買主に引き渡さなかった場合には，たとえ売主が同時履行の抗弁権を行使して商品引渡債務を履行しなかったときであっても，買主は，当該売買契約の解除をしたものとみなされる。",c3:"３．判例によれば，商人間の不特定物の売買において，買主が目的物に直ちに発見することのできない瑕疵があることを目的物受領後６か月以内に発見したときは，直ちに売主に対してその旨の通知を発しなければ，買主は，売主に対し，瑕疵のない目的物を引き渡すように請求する完全履行請求権を行使することができなくなる。",c4:"４．商人間の売買において，買主がその目的物の受領を拒んだために売主が相当の期間を定めて催告した後に競売に付した場合において，売主が買主に対してその旨の通知を遅滞なく発しなかったときは，当該競売は無効となる。",c5:"５．商人間の売買において，目的物の瑕疵が隠れていたため，買主が目的物受領後６か月以内に当該瑕疵があることを発見できなかったときは，買主は，当該瑕疵を発見した後，直ちに売主に対してその旨の通知を発すれば，当該売買契約の解除の請求をすることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"45"},{year:"2009",num:"53",subject:"syo",q:"場屋の主人（場屋営業者）の責任に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．客の携帯品について損害賠償の責任を負わない旨を告示したとしても，その責任を免れることができない。",c2:"２．客から寄託を受けた物品の全部滅失の場合の責任は，客が場屋を去った時から１年を経過したとき，時効によって消滅する。",c3:"３．その営業の範囲内において無報酬で寄託を受けたときは，自己の財産に対するのと同一の注意をもって，寄託物を保管する義務を負う。",c4:"４．客から寄託を受けた物品を滅失したときは，自己又はその使用人に過失がないことを証明することにより，その責任を免れることができる。",c5:"５．高価品については，客がその種類及び価額を明告して寄託したのでなければ，その物品の滅失によって生じた損害を賠償する責任を負わない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"34"},{year:"2009",num:"54",subject:"syo",q:"「為替手形ノ占有者ガ裏書ノ連続ニ依リ其ノ権利ヲ証明スルトキハ之ヲ適法ノ所持人ト看做ス」と規定する手形法第１６条第１項の解釈に関し，手形の所持人は，たとえ当該手形が裏書の連続を欠くため形式的資格を有しなくても，裏書の連続が中断している箇所について実質的な権利移転の事実を証明すれば，裏書の連続が架橋され，手形上の権利を行使することができるとする見解がある。手形の裏書に関する次の１から５までの各記述のうち，この見解と矛盾するものはどれか。",c1:"１．手形の所持人たる資格を有するには，裏書のある手形にあっては，その裏書が外観上連続することを要し，その真正であることを要しない。",c2:"２．裏書により，手形上の権利はすべて被裏書人に移転する。",c3:"３．手形法第１６条第１項は，要件事実として，振出人から現所持人までの裏書記載全体を対象として，そこに連続があるかどうかを要求している。",c4:"４．手形法第１６条第１項が「看做ス」としているのは，「推定する」の意味である。",c5:"５．裏書の連続の効果は，個々の裏書の有する資格授与的効力の集積である。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2009",num:"55",subject:"syo",q:`約束手形の振出人が負う手形金支払債務の発生時期について，次のＡからＤまでの見解がある。
Ａ見解 振出人が手形要件を満たした証券を作成し，それを受取人に交付することによって，振出人と受取人の間に手形債務負担に関する契約が成立し，手形金支払債務が発生する。
Ｂ見解 振出人が手形要件を満たした証券を作成し，それを受取人に交付するという単独行為によって，手形金支払債務が発生する。
Ｃ見解 振出人が手形要件を満たした証券を作成し，他人に交付するために手放すという単独行為によって，手形金支払債務が発生する。
Ｄ見解 振出人が手形要件を満たした証券を作成することによって，手形金支払債務が発生する。
これらの見解に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。`,c1:"１．甲が手形要件を満たした証券を作成して乙に寄託していたところ，乙が勝手にその裏書人欄に署名して事情を知らない丙に交付した場合，Ｃ見解又はＤ見解のいずれによったとしても，丙は，手形法第１７条に規定する人的抗弁の切断によって保護が図られることになる。",c2:"２．甲が乙から脅され，その意思に基づかずに，手形要件を満たした証券を作成し，これを手渡した場合，Ａ見解からＤ見解までのいずれによったとしても，甲が手形金支払債務を負うことはない。",c3:"３．甲が乙に対して約束手形を振り出した際に乙が未成年者であった場合，Ａ見解とＣ見解のいずれによったとしても，甲が乙に対して手形金支払債務を負うかどうかの結論は，異ならない。",c4:"４．甲が乙に対して交付するつもりで手形要件を満たした証券を作成し，保管していたところ，丙に盗取された場合，Ａ見解又はＢ見解のいずれによったとしても，丙から善意で手形の譲渡を受けた丁が善意取得をすることはない。",c5:"５．甲が乙に対して交付するつもりで手形要件を満たした証券を作成し，乙あてに郵送したが，事故により乙に届かなかった場合，Ａ見解からＣ見解までのいずれによったとしても，甲は手形金支払債務を負わないが，Ｄ見解によったときは，負うことになる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"24"},{year:"2009",num:"56",subject:"mso",q:"除斥及び忌避に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．判例によれば，裁判官は，前審において口頭弁論を指揮し，証拠調べをした場合であっても，その裁判の評決に加わったことがなければ，その事件の上訴審において，職務の執行から除斥されない。",c2:"２．当事者が忌避の原因のある裁判官の面前において弁論をし，又は弁論準備手続において申述をしたときは，たとえ忌避の原因があることを知らなかったとしても，その裁判官を忌避することができない。",c3:"３．合議体の構成員である裁判官の除斥については，その裁判官の所属する裁判所が，決定で，裁判をする。",c4:"４．除斥又は忌避の申立てがあったときは，急速を要する行為を除いて，その申立てについての決定が確定するまで訴訟手続を停止しなければならない。",c5:"５．忌避の原因のある裁判官が行った訴訟行為は，忌避の裁判の有無にかかわらず無効であり，その裁判官が終局判決に関与したことは，上告の理由及び再審の事由に該当する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"25"},{year:"2009",num:"57",subject:"mso",q:`移送に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．訴訟の著しい遅滞を避け，又は当事者間の衡平を図るための移送は，被告の申立てによることなく，裁判所が職権ですることはできない。
イ．簡易裁判所に係属する本訴に対し，本訴被告が反訴で地方裁判所の管轄に属する請求をした場合において，本訴原告の申立てがあるときは，簡易裁判所は，本訴及び反訴を地方裁判所に移送しなければならない。
ウ．確定した移送の裁判は，移送を受けた裁判所を拘束するが，移送決定の確定後に新たな事由が生じたときは，移送を受けた裁判所は，更に事件を他の裁判所に移送することができる。
エ．当事者が専属的合意管轄を定めた場合には，法定管轄のある他の裁判所に訴えを提起することは管轄違いであるから，訴えの提起を受けた裁判所は，当事者が合意した裁判所に訴訟を移送しなければならない。
オ．裁判所の管轄は，訴えの提起の時を標準として定められるから，５０万円の損害賠償を求める訴えを簡易裁判所に提起した後に，請求額を１５０万円に拡張した場合でも，簡易裁判所は訴訟を地方裁判所に移送する必要はない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2009",num:"58",subject:"mso",q:`株式会社の代表者に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．株式会社の代表者の記載は訴状の必要的記載事項であり，これを欠く場合には，補正されない限り，訴状が却下される。
イ．株式会社の登記簿上の代表者が，代表者として訴訟を追行した場合において，株式会社が敗訴判決を受けたとき，判例によれば，株式会社は，代表権限がなかったことを理由として再審の訴えを提起することはできない。
ウ．株式会社に対する送達は，その代表者に対してされる。
エ．株式会社の代表者の交替があった場合には相手方への通知が必要であるが，判例によれば，相手方がその交替の事実を知っている場合には，通知は不要である。
オ．株式会社の代表権限のない者がした訴訟行為も，代表権がある者の追認があれば，訴訟行為の時にさかのぼってその効力を生じる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2009",num:"59",subject:"mso",q:"次の１から５までの各記述のうち，訴え却下の判決をすべき場合に当たらないものを２個選びなさい。",c1:"１．選定当事者による訴訟において，選定当事者の全員が死亡した場合",c2:"２．入会権の確認訴訟において，入会村落の構成員のうち一部の者が当事者となっていない場合",c3:"３．原告による訴えの取下げの効力が争われ，裁判所が有効な訴えの取下げがあったと判断した場合",c4:"４．訴え提起の手数料の納付額の不足が訴状送達後に明らかになり，裁判所が原告に不足分の納付を命じたが，原告がこれに従わない場合",c5:"５．債権者が債権者代位権に基づき第三債務者に対して売買代金の支払を求める訴えを提起した後に，債務者が第三債務者に対して同一の売買代金の支払を求める訴えを別訴として提起した場合",c6:"",c7:"",c8:"",c9:"",c10:"",a:"13"},{year:"2009",num:"60",subject:"mso",q:`訴えの利益に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．確定した給付判決がある場合でも，時効中断のために訴えの提起以外に適当な方法がないときは，当該給付判決の対象となった給付請求権について再度訴えを提起する利益が認められる。
イ．重婚を理由とする後婚の取消訴訟の係属中に，後婚が離婚によって解消された場合でも，後婚の取消しを求める形成訴訟についての訴えの利益は依然として存在する。
ウ．物の給付を請求し得る債権者が，本来の給付の請求と執行不能の場合における履行に代わる損害賠償の請求を一の訴えでする場合，損害賠償請求は将来の給付を求めるものであるが，あらかじめ請求をする必要があるものと認められる。
エ ．Ａ所有の建物について，Ｂが所有権保存登記をし，更にＢからＣへ，ＣからＤへ所有権移転登記が経由された場合において，ＡがＤに対し所有権移転登記の抹消登記手続を求める訴えを提起し請求を棄却する判決が確定したときは，Ａが新たにＢ及びＣに対し所有権保存登記及び所有権移転登記の各抹消登記手続を求める訴えを提起したとしても，その各請求を認容する判決によってＢ及びＣ名義の各登記を抹消することはできないから，ＡのＢ及びＣに対する各請求は，訴えの利益を欠く。
オ ．特定の財産が特別受益財産に当たることの確認を求める訴えは，相続分又は遺留分をめぐる紛争を直接かつ抜本的に解決することになるから，確認の利益を有する。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2009",num:"61",subject:"mso",q:`申立事項と判決事項に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．原告が提起した貸金１０００万円の返還を求める訴えについて，弁済期の未到来のため給付判決をすることができない場合には，原告が訴えを変更しないときであっても，裁判所は，これに代えて１０００万円の貸金債権の存在を確認する判決をすることができる。
イ．原告が平成２０年９月２５日に貸し付けた１０００万円の貸金の返還を求める訴訟において，審理の結果，被告がその貸金を返還したものの，同年１２月１４日に原告が貸し付けた２０００万円の貸金はまだ返還していないことが明らかになったときは，裁判所は，原告が求めた１０００万円の支払の限度で，請求を認容する判決をすることができる。
ウ．原告が提起した不動産の所有権に基づく所有権移転登記の全部抹消登記手続を求める訴えについて，裁判所は，その不動産が原告及び被告の共有関係にあると認めたときは，実質的な一部抹消登記手続として，原告の共有持分に応じた更正登記手続を命じる判決をすることができる。
エ．５０万円を超えて貸金債務が存在しないことの確認を求める訴えについて，裁判所は，５０万円を超えて債務が存在すると認めた場合には，貸金残額の存否ないしその限度を明確に判断することなく，直ちに請求を棄却する判決をすることができる。
オ．少額訴訟において，裁判所は，原告が５０万円の支払を求める場合であっても，被告の資力その他の事情を考慮して特に必要があると認めるときは，５０万円を５回に分けて毎月１０万円ずつ支払うことを命じ，この分割払の定めによる期限の利益を失うことなく支払をしたときは，訴え提起後の遅延損害金の支払義務を免除する旨の判決をすることができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2009",num:"62",subject:"mso",q:"当事者の欠席に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．最初にすべき口頭弁論の期日に当事者双方が出頭しなかったときは，裁判所は，事案の内容に照らして相当と認めるときに限り，当事者が提出した訴状，答弁書及び準備書面に記載した事項を陳述したものとみなすことができる。",c2:"２．口頭弁論の期日に，請求を認諾する旨の準備書面を提出した被告が出頭せず，原告のみが出頭した場合には，裁判所は，請求を認諾する旨の陳述がされたものとみなすことができない。",c3:"３．当事者双方が，２回連続して口頭弁論の期日に出頭しなかった場合において，１週間以内に期日指定の申立てをしないときは，訴えの取下げがあったものとみなされる。",c4:"４．当事者の一方が口頭弁論の期日に出頭しなかった場合においては，裁判所が，審理の現状及び当事者の訴訟追行の状況を考慮して相当と認めるときであっても，出頭した当事者から申出がない限り，終局判決をすることができない。",c5:"５．控訴審において最初にすべき口頭弁論の期日に控訴人のみが出頭し，被控訴人が欠席した場合には，裁判所は，被控訴人が提出した準備書面を陳述したものとみなすことができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"45"},{year:"2009",num:"63",subject:"mso",q:"弁論準備手続に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．裁判所は，事件を弁論準備手続に付するときは，当事者の意見を聴かなければならない。",c2:"２．裁判所は，弁論準備手続の期日において，文書の証拠調べをすることができ，また，証拠の申出に関する裁判，文書提出命令の申立てについての裁判，補助参加の申出についての裁判など，口頭弁論の期日外ですることができる裁判をすることができる。",c3:"３．弁論準備手続は，当事者双方が立ち会うことができる期日において行われるが，公開の手続ではないことから，裁判所は当事者が申し出た者以外の者の傍聴を許すことはできない。",c4:"４．裁判所は，弁論準備手続を終結するに当たり，その後の証拠調べにより証明すべき事実を当事者との間で確認しなければならない。",c5:"５．弁論準備手続の終結後に攻撃又は防御の方法を提出した当事者は，相手方の求めがあるときは，相手方に対し，弁論準備手続の終結前にこれを提出することができなかった理由を説明しなければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2009",num:"64",subject:"mso",q:"文書提出命令に関する次の１から５までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．文書提出命令の申立てをする場合においては，文書の表示及び趣旨を明らかにしてしなければならないが，それが著しく困難なときは，申立人の申出があれば，裁判所は，文書提出命令の申立てに理由がないことが明らかな場合を除き，文書の所持者に対し，当該文書の表示及び趣旨を明らかにすることを求めることができる。",c2:"２．銀行の貸出稟議書は，専ら銀行内部の利用に供する目的で作成され，外部に開示することが予定されていない文書であって，開示されると銀行内部における自由な意見の表明に支障を来し銀行の自由な意思形成が阻害されるおそれがあるものとして，特段の事情がない限り，専ら文書の所持者の利用に供するための文書に該当することから，所持者はその提出を拒むことができる。",c3:"３．文書提出命令が申し立てられた場合において，文書に取り調べる必要がないと認める部分があり，又は提出の義務があると認めることができない部分があるときは，裁判所は，その部分を除いて，提出を命ずることができる。",c4:"４．証拠調べの必要性を欠くことを理由として文書提出命令の申立てを却下する決定に対しては，その必要性があることを理由として独立に不服の申立てをすることはできない。",c5:"５．本案訴訟の原告が申し立て，文書の所持者である第三者に対してされた文書提出命令に対し，本案訴訟の被告は不服の申立てをすることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2009",num:"65",subject:"mso",q:`人証に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア．証人は，裁判長の許可を受けた場合を除き，書類に基づいて陳述することはできない。
イ．裁判所は，宣誓の趣旨を理解することができない者については，これを証人として尋問することはできない。
ウ．裁判所は，証人が正当な理由なく出頭しない場合には，受命裁判官又は受託裁判官に裁判所外で証人の尋問をさせることができる。
エ．訴訟において株式会社である原告を代表する代表取締役を尋問するときは，当該代表取締役は，証人として出頭し，宣誓をする義務を負う。
オ．証人の尋問は，その尋問の申出をした当事者，他の当事者，裁判長の順序で行うが，裁判長は，適当と認める場合には，当事者の意見を聴いて，その順序を変更することができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2009",num:"66",subject:"mso",q:"推定等の効果に関する次の１から５までの各記述のうち，判例の趣旨に照らし誤っているものを２個選びなさい。",c1:"１．土地の時効取得を原因とする所有権移転登記手続請求訴訟において，原告が占有開始の時に善意であったか悪意であったかが争点とされた場合には，占有者は善意で占有をするものと推定されるから，被告は，原告の悪意につき立証責任を負う。",c2:"２．偽造された売買契約書に基づき原告から被告に対し土地の所有権移転登記がされたことを理由とする所有権移転登記抹消登記手続請求訴訟において，原告から被告への所有権の移転の有無が争点とされた場合には，現在の不動産登記の名義人は所有者であると推定されるから，原告は，被告への所有権の移転がなかったことにつき立証責任を負う。",c3:"３．賃貸借契約の期間満了に基づく自動車返還請求訴訟において，民法上の黙示の更新の有無が争点とされた場合には，賃貸人が賃借人による使用継続の事実を知りながら異議を述べないと賃貸借契約を更新したものと推定されるから，原告は，自ら異議を述べたことにつき立証責任を負う。",c4:"４．賃貸借契約の期間満了に基づく建物明渡請求訴訟において，借地借家法上の法定更新の有無が争点とされた場合には，期間満了前の一定の時期に更新拒絶通知をしないと賃貸借契約を更新したものとみなされるから，原告は，請求原因として更新拒絶通知をしたことを主張する必要があり，更新の合意が成立しなかった旨の再抗弁は，主張自体失当である。",c5:"５．売買契約に基づく代金支払請求訴訟において，買主の委任状が偽造されたものかどうかが争点とされた場合には，委任状に被告の印章による印影があると当該印影は被告の意思に基づいて顕出されたものと推定されるが，被告は，印章が盗まれた事実を立証して反証に成功すれば，この推定を覆すことができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"23"},{year:"2009",num:"67",subject:"mso",q:`訴訟上の和解に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア．裁判所は，第１回口頭弁論期日においても和解を試みることができる。
イ．弁論準備手続の期日においては，当事者の一方がその期日に出頭していない場合であっても，いわゆる電話会議システムを利用する方法によって和解をすることができる。
ウ．訴訟上の和解では，当事者は，当該訴訟の訴訟物に加えて訴訟物以外の権利又は法律関係についても和解をすることができる。
エ．訴訟上の和解が成立し，その内容が調書に記載されると，その調書の記載は確定判決と同一の効力を有するから，判例によれば，和解を締結する過程で意思表示の瑕疵があったとしても，当事者は，再審の事由がない限り，和解の無効や取消しを主張することができない。
オ．和解の内容として，第三者を利害関係人に加えた上で，原告が被告に対し，請求に係る債務の履行について期限の猶予を与えるとともに，当該第三者が原告に対し，被告の債務を保証することは許されない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2009",num:"68",subject:"mso",q:"判決の効力に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．ＸがＹを被告として，建物収去土地明渡しを求める訴えを提起し，Ｘの請求を認容する判決が確定した場合，その後にＹからその建物を譲り受けたＺに対して，確定判決の既判力は及ばない。",c2:"２．ＸがＹを被告として，建物収去土地明渡しを求める訴えを提起し，Ｘの請求を認容する判決が確定した場合，訴訟係属前にその建物につきＹとの間において使用貸借契約を締結し，占有を継続しているＺに対して，確定判決の既判力は及ばない。",c3:"３．ＸがＹを被告として，貸金返還を求める訴えを提起し，その係属中にＸからその貸金債権の譲渡を受けたと主張するＺが独立当事者参加によりこの訴訟に参加し，Ｘが適法に訴訟から脱退した場合には，確定判決の効力はＸに及ばない。",c4:"４．ＸがＹ会社を被告として，損害賠償を求める訴えを提起し，Ｘの請求を認容する判決が確定した後，Ｙ会社が新たに設立したＺ会社にＹ会社の資産を移転した場合であって，法人格の濫用であるとしてＺ会社の法人格が否認されるときには，判例によれば，確定判決の既判力がＺに及ぶ。",c5:"５．ＸがＹを被告として，ＸＹ間の通謀虚偽表示によりＹの所有名義に登記されていた土地について，真正な登記名義回復のため所有権移転登記手続を求める訴えを提起し，Ｘの請求を認容する判決が確定した。その直後，同確定判決について善意無過失のＺが，競売手続により当該土地を取得し，所有権移転登記を経たとしても，判例によれば，Ｚは前訴の口頭弁論終結後のＹの承継人であるから，Ｘは前訴の確定判決に基づき，Ｚに対する承継執行文の付与を受けて当該土地の所有名義をＸ名義に回復することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2009",num:"69",subject:"mso",q:"次の１から５までの各記述のうち，判例の趣旨に照らし，前訴確定判決の既判力が後訴の請求に関する判断に作用しないものを２個選びなさい。",c1:"１．被告の相殺の抗弁を認めて，原告の売買代金請求を棄却する前訴判決が確定した後に，前訴の原告が，前訴と同一の売買契約に基づく代金の支払を求めて提起した後訴",c2:"２．取得時効を認めて，甲土地が原告の所有であることを確認する前訴判決が確定した後に，前訴の被告が時効の中断を主張して，前訴の原告に対して，甲土地が前訴の被告の所有であることの確認を求めて提起した後訴",c3:"３．売買契約によって被告から甲土地を取得したことを理由に，原告の所有権移転登記手続請求を認める前訴判決が確定した後に，前訴の被告が前訴の原告に対して，当該売買契約に錯誤があったとして，甲土地が前訴の被告の所有であることの確認を求めて提起した後訴",c4:"４．被告から絵画を買い受けたことを理由として，当該絵画の原告への引渡しを命じる前訴判決が確定した後に，前訴の被告が，詐欺を理由とする売買契約の取消しを主張して，前訴確定判決について提起した請求異議の訴え",c5:"５．交通事故による受傷に関して口頭弁論終結時までに支出した治療費につき損害賠償を命じる前訴判決が確定した後，前訴の原告が，前訴の口頭弁論終結時には医学的に予想できなかった後遺症が現れ，手術を余儀なくされたとして，当該手術による治療費についての損害賠償を求めて提起した後訴",c6:"",c7:"",c8:"",c9:"",c10:"",a:"35"},{year:"2009",num:"70",subject:"mso",q:"訴訟物である権利関係について変更することなく，請求の趣旨に表示された求める救済の範囲（金銭請求であれば請求額）を減少させることを請求の減縮と呼ぶ。この請求の減縮の性質については議論があるが，請求の減縮は訴えの一部取下げであるという見解に立った場合，次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．請求の減縮は，事実審の口頭弁論終結前でなければすることができない。",c2:"２．控訴審で請求の減縮をした場合には，第一審判決は，減縮された部分について，当然にその効力を失う。",c3:"３．請求の減縮は，控訴審でする場合においても，相手方の同意がなければその効力を生じない。",c4:"４．請求の減縮をした部分については,訴えの提起による時効中断の効力は遡及的に消滅する。",c5:"５．固有必要的共同訴訟において，共同原告のうち一人がした請求の減縮は，判例によれば，その効力を生じない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2009",num:"71",subject:"mso",q:"訴訟承継に関する次の１から４までの各記述のうち，正しいものはどれか。",c1:"１．被承継人の相手方は，承継人に対し，承継したものが義務であっても権利であっても訴訟引受けの申立てをすることができるが，申立ての時期は事実審の口頭弁論終結前に限られる。",c2:"２．参加承継の場合，承継人は独立当事者参加の形式で参加の申出をすることから，被承継人と承継人との間に争いがないときであっても，相手方に加えて被承継人に対しても請求を立てなければならない。",c3:"３．参加承継後の訴訟の審理は必要的共同訴訟の手続によるのに対し，引受承継後の訴訟の審理は，通常共同訴訟と同様の手続によるので，前者においては弁論の分離，一部判決が禁止されるのに対し，後者においてはそれらが許容される。",c4:"４．参加承継においては参加があれば被承継人は相手方の承諾を得ずに訴訟から脱退できるが，引受承継においては引受決定がされても，被承継人が訴訟から脱退するには相手方の承諾が必要である。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2009",num:"72",subject:"mso",q:"共同訴訟に関する次の１から５までの各記述のうち，判例の趣旨に照らし誤っているものを２個選びなさい。",c1:"１．債権者が，主たる債務者と連帯保証人の両者を共同被告として，主たる債務と保証債務の履行を求める訴訟においては，主たる債務者による，主たる債務の存否に関する主張は連帯保証人に影響を及ぼさない。",c2:"２．土地の工作物の占有者及び所有者を共同被告とする，その工作物の瑕疵を理由とする損害賠償請求訴訟において，原告の申出があれば，その弁論及び裁判は分離することができなくなる。",c3:"３．土地の共有者が提起する筆界の確定を求める訴えは，類似必要的共同訴訟であるから，これに同調しない共有者がいるときは，これを共同被告として訴えを提起することが許される。",c4:"４．土地所有権に基づく建物収去土地明渡しを請求する訴訟の係属中，建物所有者である被告が死亡した場合，訴訟代理人がいない限り訴訟手続は中断するが，その後，共同相続人の一部の者が訴訟手続を受継したとき，受継した者との間だけで審理，判決することは許されない。",c5:"５．共同相続人が，他の共同相続人のうちの一人のみを被告とし，遺産分割の前提として，被告が被相続人の遺言書を隠匿又は破棄した行為が相続欠格事由に当たることを理由に，相続人の地位を有しないことの確認を求める訴えは不適法である。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"34"},{year:"2009",num:"73",subject:"mso",q:"控訴審に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．控訴の提起は，控訴期間内に，控訴裁判所に控訴状を提出して行う。",c2:"２．原告の請求を一部認容する第一審判決に対し，被告が控訴すれば，原告は自らの控訴権が消滅した後でも，附帯控訴をすることによって，請求棄却部分についてその取消しを求めることができる。",c3:"３．控訴審での口頭弁論は，当事者が第一審判決の変更を求める限度においてのみ，これをする。",c4:"４．予備的相殺の抗弁を容れて原告の請求を棄却した第一審判決に対して，原告が控訴し，被告が控訴も附帯控訴もしない場合，控訴裁判所が，原告の訴求債権はそもそも存在しないと判断するときは，原判決を取り消し，改めて原告の請求を棄却すべきである。",c5:"５．控訴人は，控訴審の終局判決の後に控訴を取り下げることはできない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"14"},{year:"2009",num:"74",subject:"mso",q:`次の【事例】を前提とし，要件事実に関する次の１から５までの各記述のうち，誤っているものはどれか。
【事 例】
　Ａは，かつて世話になったことのある知人Ｂに対し，平成１１年１月５日，自己が所有する甲絵画を，代金２００万円で売却し，同日，これをＢに引き渡したが，いまだに代金が支払われていないとして，平成２１年３月１日，Ｂに対し，代金２００万円の支払を求める訴えを地方裁判所に提起した（以下，Ａが主張する売買契約を「本件売買契約」という。）。
　これに対して，Ｂは，Ａが主張するとおりの売買契約を締結して甲絵画を受け取ったのは事実であり，その際，代金の支払期限は定められなかったものの，平成１１年１月１０日に代金を既にＡに支払済みであり，仮にその弁済の事実が認められないとしても，Ａが訴求する売買代金請求権は，既に時効消滅していると主張し，前記訴訟の第１回口頭弁論期日（平成２１年４月３日）において時効を援用した。
　Ａは，Ｂの弁済の事実を否認するとともに，Ｂの消滅時効の主張については，第２回口頭弁論期日において，Ｂに対し，かねてから再三にわたり代金の支払を求めていたところ，平成２０年１月５日，Ｂは，Ａから代金の支払を催促された際，Ａに対し，１か月間支払を待ってほしいと要請したと主張したが，Ｂはその主張事実を否認した。`,c1:"１．ＡのＢに対する請求は，訴訟物としては，平成１１年１月５日にＡとＢとの間で締結された甲絵画を代金２００万円で売る旨の売買契約に基づくＡのＢに対する代金２００万円の支払請求権と特定することができる。",c2:"２．Ａが訴訟で請求原因として主張しなければならない要件事実は，「Ａは，Ｂに対し，平成１１年１月５日，甲絵画を，代金２００万円で売り，これを即日，Ｂに引き渡した。」である。",c3:"３．Ｂの弁済の主張は抗弁であるが，その要件事実は，「Ｂは，Ａに対し，平成１１年１月１０日，本件売買契約に基づく代金支払債務の履行として２００万円を支払った。」である。",c4:"４．Ｂの消滅時効の主張は抗弁であるが，その要件事実は，「平成２１年１月５日は経過した。Ｂは，Ａに対し，平成２１年４月３日の第１回口頭弁論期日において，時効を援用するとの意思表示をした。」である。",c5:"５．Ｂが，平成２０年１月５日，Ａから代金の支払を催促された際，支払を１か月間待ってほしいと要請したとのＡの主張は，時効中断事由である債務の承認に該当する事実を主張するものであり，消滅時効の抗弁に対する再抗弁となる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2008",num:"1",subject:"ken",q:`諸種の憲法概念に関する次のアからエまでの各記述について，明らかに誤っているもの二つの組合せを，後記１から６までの中から選びなさい 
ア. 憲法概念は，その存在様式によって区分することができる。憲法という法形式をとって存在している法を「形式的意味の憲法」と呼び，法形式にかかわらず国家の組織や作用に関する基本的な規範を「実質的意味の憲法」と呼ぶ。後者の概念からすれば，国会法や公職選挙法の一部の規定は憲法法源としての意味を持つことになる。
イ. 形式的意味の憲法の効力は他の法規範よりも優越する。今日多くの国では，この優越性を現実に保障するため裁判所による違憲審査制を採用しているが，法令の合憲性について議会が最終的に判断するという制度が憲法の形式的優位性と矛盾するとはいえない。
ウ. 憲法の内容に着目すると「固有の意味の憲法」と「立憲的意味の憲法」を区別することができる。「権利の保障が確保されず，権力の分立が定められていない社会は，すべて憲法を持つものではない」という１７８９年のフランス人権宣言の有名な一節は，前者の趣旨を示したものである。
エ. 形式的意味の憲法にはいかなる内容を盛り込むことも可能であるが，歴史的には立憲主義の成文化を求める動きが憲法典の普及を促進した。日本国憲法はこの経緯を踏まえ，憲法の形式的優位性の実質的根拠を示すため，第１０章「最高法規」中に公務員の憲法尊重擁護義務を定める第９９条を置いている。`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．イとウ",c5:"５．イとエ",c6:"６．ウとエ",c7:"",c8:"",c9:"",c10:"",a:"6"},{year:"2008",num:"2",subject:"ken",q:`公務員の政治活動に対する制約に関する次のアからウまでの各記述について，猿払事件判決（最高裁判所昭和４９年１１月６日大法廷判決，刑集２８巻９号３９３頁）に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい 。
ア. 国家公務員の政治的中立性を損うおそれのある政治的行為を禁止することは，強い政治性を有する意見表明そのものを制約する規制であるが，行政の中立的運営とこれに対する国民の信頼の確保という国民全体の共同利益のためであれば，特定の内容の表現を禁止することも許される。
イ. 国家公務員法第１０２条第１項は国家公務員に禁止される政治的行為の具体的定めを広く人事院規則に委任しているが，一般に公務員の政治的中立性を損うおそれのある政治的行為を禁じることは許されるのであり，同条同項はそのような行動類型の定めを委任するものであって，委任の限界を超えることにはならない。
ウ. 国家公務員の具体的な政治的行為を処罰することの合憲性判断に当たっては，当該公務員の職務内容や問題となる行為の内容などを総合的に考慮すべきである。例えば機械的労務の提供を職務とする者の政治的行為により公務員の政治的中立性が害されるおそれは小さいが，他方，行われた行為が選挙に際しての特定政党への支援活動という政治的偏向の強いものであれば，結局処罰は合憲と判断される。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"212"},{year:"2008",num:"3",subject:"ken",q:`「公共の福祉」に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. 憲法第１３条の「公共の福祉」は，人権の外にあって，すべての人権を制約する一般的な原理であり，憲法第２２条，第２９条が特に「公共の福祉」を掲げたのは，特別な意味を有しないという見解がある。しかし，このような見解では，「公共の福祉」が極めて抽象的な概念であるだけに，人権制限が容易に肯定されるおそれが生じ，ひいては「公共の福祉」が明治憲法の法律の留保のような機能を実質的に果たすおそれがある。
イ. 「公共の福祉」によって制約される人権は経済的自由権と社会権に限られ，その他の権利・自由には内在的制約が存在するにとどまり，憲法第１３条は公共の福祉に反しない限り個人に権利・自由を尊重しなければならないという，言わば国家の心構えを表明したものであるという見解がある。しかし，このように同条の法規範性を否定する見解は，プライバシー権などの「新しい人権」を憲法上の人権として基礎付ける根拠を失わせる。
ウ. すべての人権に論理必然的に内在する「公共の福祉」は，人権相互間に生じる矛盾・衝突の調節を図るための実質的公平の原理であり，例えば，社会権を実質的に保障するために自由権を制約する場合には必要な限度の規制が認められるという見解がある。しかし，この見解では，憲法第２２条，第２９条の「公共の福祉」が，結局，国の経済的・社会的政策という意味でとらえられることになり，広汎な裁量論の下で経済的自由権と社会権の保障が不十分になるおそれがある。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"112"},{year:"2008",num:"4",subject:"ken",q:`次のアからウまでの各記述について，団体の自律性と構成員の思想の自由に関する最高裁判所の判例の趣旨に照らして，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい 
ア. どの政党又は候補者を支持するかは投票の自由と表裏をなすべきものであり，組合員各自が自主的に決定すべき事柄である。しかし，労働組合には脱退の自由があるので，労働組合が総選挙に際し特定の政党の立候補者を支援する資金のための臨時組合費の負担を組合員に強制することは，許される。
イ. 政治資金規正法上の政治団体に寄附するか否かは選挙における投票の自由と表裏をなし，会員各人が個人的な政治思想等に基づいて自主的に決定すべき事柄である。会員に脱退の自由のない強制加入団体である税理士会が，上記の寄附のために特別会費の納入を会員に強制することは，許されない。
ウ. 大震災で被災した他県の司法書士会へ復興支援拠出金寄附のための負担金の徴収は，司法書士会の目的の範囲を逸脱するものではない。司法書士会が強制加入団体であることを考慮しても，本件会員の政治的又は宗教的立場や思想信条の自由を害するものではなく，会員の協力義務を否定すべき特段の事情があるとは認められない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"5"},{year:"2008",num:"5",subject:"ken",q:`次の文章は，街路樹への広告物掲出を禁止する県条例の違憲審査の基準について論じたものである。次のアからウまでの各記述につき，この見解に対する批判となり得る場合には１を，批判となり得ない場合には２を選びなさい。

「この県条例の目的とするところは，美観風致の維持と公衆への危害の防止であって，表現の内容はその関知するところではなく，広告物が政治的表現であると，営利的表現であると，その他いかなる表現であるとを問わず，その目的からみて規制を必要とする場合に，一定の抑制を加えるものである。もし本条例が思想や政治的な意見情報の伝達に係る表現の内容を主たる規制対象とするものであれば，憲法上厳格な基準によって審査されるが，本条例は，表現の内容と全くかかわりなしに，美観風致の維持等の目的から屋外広告物の掲出の場所や方法について一律に規制しているものである。この場合に，表現の内容を主たる規制対象とする場合と同じように厳格な基準を適用することは，必ずしも相当ではない。」

ア. 表現の時，場所，方法について規制することによって実際上特定の内容を持つ表現だけを規制するような場合でも，緩やかな審査基準が適用されることになる。
イ. 表現の時，場所，方法について一律に規制する場合は，表現内容に対する規制の場合と比較して，規制者による恣意的な表現抑圧の危険が相対的に低いはずである。
ウ. 表現者にとって，特定の時，場所，方法で表現することと表現の内容とが同程度に重要である場合が少なくないことを見過ごしている。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"121"},{year:"2008",num:"6",subject:"ken",q:`宗教法人法に基づくオウム真理教に対する裁判所の解散命令は，憲法第２０条第１項に違反しないとした最高裁判所の決定（最高裁判所平成８年１月３０日第一小法廷決定，民集５０巻１号１９９頁）に関する次のアからエまでの各記述について，正しいもの二つの組合せを，後記１から６までの中から選びなさい。 
ア. この決定は，解散命令の制度は専ら宗教法人の世俗的側面を対象とし，かつ，専ら世俗的目的によるものであって，宗教団体や信者の精神的・宗教的側面に容かいする意図によるものではないとした。
イ. この決定は，解散命令の制度は信者の宗教上の行為を禁止したり制限したりする法的効果を一切伴わないのであるから，信者の宗教上の行為に何らの支障も生じさせるものではないとした。
ウ. この決定は，当該宗教法人に対する解散命令は，宗教法人法第８１条の規定に基づき，裁判所の司法審査によって発せられたものであるから，その手続の適正も担保されているとした。
エ. この決定は，宗教上の行為の自由は，内心における信仰の自由が最大限尊重されるべきものであるのとは異なって，公共の福祉の観点からする合理的な制約に服するべきものであるとした。`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．イとウ",c5:"５．イとエ",c6:"６．ウとエ",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2008",num:"7",subject:"ken",q:`生存権の法的性格に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。 
ア. プログラム規定説によれば，憲法第２５条第１項は，国民の生存を確保すべき政治的・道義的義務を国に課したにとどまり，個々の国民に対して権利を保障したものではない。しかし，「健康で文化的な最低限度の生活」を保障するための受給請求権が生活保護法などの法律で定められれば，その受給請求権は憲法上の権利として認められる。
イ. 抽象的権利説によれば，憲法第２５条第１項は，国に立法や予算を通じて生存権を実現すべき法的義務を課している。しかし，当該条文を直接の根拠にして「健康で文化的な最低限度の生活」の保障を請求する権利まで保障するものではなく，その請求権は，生存権を具体化する法律によって初めて具体的な権利となる。
ウ. 具体的権利説を言葉どおりにとらえれば，憲法第２５条第１項は，それを直接の根拠にして「健康で文化的な最低限度の生活」を確保するための具体的請求権を保障する規定ということになりそうである。しかし，具体的権利説といわれている見解は，必ずしも憲法のみを根拠に裁判所に具体的な給付請求ができるということまで主張するものではない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"211"},{year:"2008",num:"8",subject:"ken",q:`学校教育に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. 国は，必要かつ相当と認められる範囲において，教育内容について決定する権能を有し，教育の目的を遂行するに必要な諸条件を整備確立するため，教育の内容や方法について遵守すべき基準を設定できる。しかし，それは，教育における機会均等の確保と全国的な一定水準の維持という目的のために必要かつ合理的と認められる大綱的なものにとどめられるべきである。
イ. 高等学校教育においても，国は，教育の内容及び方法について遵守すべき基準を定立する必要があるが，教科書を使用しなければならないとする学校教育法の規定は，高等学校については訓示規定と解される。なぜなら，高等学校においては，生徒の側に学校を選択する余地や教育内容を批判する能力が相当程度あり，教育の具体的な内容や方法については，教師の裁量も尊重する必要があるからである。
ウ. 憲法第２６条第２項後段の義務教育の無償の規定は，直接には，普通教育の対価を徴収しないこと，すなわち，授業料の不徴収を定める趣旨である。ただし，教科書，学用品等の授業料以外の費用については，国の財政等の事情を考慮して立法により無償と定められた場合に，その限度で，同項の義務教育の無償の内容となる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"122"},{year:"2008",num:"9",subject:"ken",q:`人身の自由に関する次のアからウまでの各記述について，最高裁判所の判例の趣旨に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. 迅速な裁判を一般的に保障する憲法第３７条第１項は，それ自体が裁判規範性を有するものではないので，現実にこの保障に明らかに反し，迅速な裁判を受ける被告人の権利が害されたと認められる事態が生じた場合には，これに対処すべき法律上の規定があるときに限ってその審理を打ち切ることができる。
イ. 道路交通法上の警察官の呼気検査は，飲酒運転を防止するために運転者から呼気を採取してアルコール保有の程度を調査するものであって，その者から供述を得ようとするものではないから，これを拒んだ者を処罰する旨の規定は，憲法第３８条第１項に違反しない。
ウ. 憲法第３９条前段は，何人も，実行の時に適法であった行為については刑事上の責任を問われない旨を規定しているが，行為の時に最高裁判所の判例が示していた法解釈に従えば無罪となるべき行為を処罰することは，同規定に違反するものではない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"211"},{year:"2008",num:"10",subject:"ken",q:`憲法第４０条に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. 抑留又は拘禁の上，起訴された者が無罪となった場合，刑事補償に加えて国家賠償も請求することができるが，後者が公務員の故意・過失を要件とするのに対して，前者はそれらを要件としない。
イ. 最高裁判所の判例によれば，抑留又は拘禁の理由となった被疑事実が不起訴となった場合には，憲法第４０条の補償問題は生じないが，実質上は無罪となった事実についての抑留又は拘禁と認められるものがあるときは，その部分は刑事補償の対象となり得る。
ウ. 最高裁判所の判例によれば，刑事訴訟法上の手続における無罪の確定裁判に限らず，少年審判手続における不処分決定事件でも，非行事実が認められないことを理由とする不処分決定である場合には，憲法第４０条の「無罪の裁判」に含まれる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"112"},{year:"2008",num:"11",subject:"ken",q:`国民の義務に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤って。いる場合には２を選びなさい。
ア. 大日本帝国憲法と異なり，国民主権と基本的人権の保障を旨とする日本国憲法において課される国民の義務は，国家への全面的な服従義務を意味するものではなく，憲法の基本原理と調和する限りにおいて認められるものである。
イ. 憲法が国民に職業選択の自由と財産権を保障するとともに，その意に反する苦役を禁止している以上，勤労の義務を規定した憲法第２７条第１項は，道徳的・精神的な規定にすぎず，これに法的意味を認めることはできない。
ウ. 憲法第３０条は国民の納税義務を定めているが，国際法や条約に基づいて免除される場合を除き，法律の定めるところにより，我が国に居住する外国籍の者から徴税することは違憲ではない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"121"},{year:"2008",num:"12",subject:"ken",q:`国民主権の観念における権力性の契機と正当性の契機に関する次のアからウまでの各記述について，それぞれ理論的に成立するものには１を，成立し難いものには２を選びなさい。
ア. 国民主権の観念は，本来，君主主権との対抗関係の下で生成し，主張されてきたものである。このような経緯を踏まえると，国民主権の担い手は，抽象的なものではないし，特別の資格を持った君主でもないことになる。
イ. 主権の権力性の契機において，主権の主体である国民は有権者（選挙権者の総体）を指す。しかし，国民を有権者ととらえることは，必ずしも憲法が直接民主主義を採用しているという結論を帰結するわけではない。
ウ. 主権の正当性の契機において，主権の主体である国民は全国民（国籍保持者の総体）を指す。国民を全国民ととらえると，国民主権の原理は，命令的委任に拘束された国民代表制を要請することになる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"112"},{year:"2008",num:"13",subject:"ken",q:`次のアからウまでの各記述について，政党に関する最高裁判所の判例の趣旨に照らして，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア. 憲法は政党につき明文で規定していないが，政党は国民の政治意思を国政に実現させる最も- 6 -\f有効な媒体であり，議会制民主主義は政党を無視してはその円滑な運用を期待することはできない。したがって，政党は議会制民主主義を支える不可欠の要素といえる。
イ. 国民には，政党を結成し，政党に加入し，若しくは政党を脱退する自由が保障されている。他方，政党は，政治上の信条や意見を共通にするものが任意に結成する団体であるから，党員に対して政治的忠誠を要求し，一定の統制を施すことができる。
ウ. 法律上の権利義務関係をめぐる争訟であっても，政党の除名処分の有効性が紛争の前提問題となっている場合には，宗教上の教義や信仰の対象に関する価値判断が前提問題となっている場合と同様，裁判所の審査権は及ばない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2008",num:"14",subject:"ken",q:`天皇の国事行為に関する次のアからエまでの各記述について，明らかに誤っているもの二つの組合せを，後記１から６までの中から選びなさい。
ア. 天皇は内閣の指名に基づいて最高裁判所長官を任命するが，内閣は，最高裁判所長官の指名及びその任命に関する助言と承認を１回の閣議で行うことはできない。
イ. 天皇は国会を召集するが，内閣の助言と承認が国事行為の実質的決定権を含むという立場からすると，憲法第７条の規定により内閣が召集に関する決定権を有することになる。
ウ. 天皇は栄典を授与するが，憲法は，恩赦の認証と異なり，栄典の授与自体が天皇の国事行為であるとしており，栄典の授与の認証を国事行為とはしていない。
エ. 天皇は国会の開会式に参列するが，その際の「おことば」は天皇の象徴としての行為であるとする立場からすると，「おことば」について内閣の補佐は不要である。`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．イとウ",c5:"５．イとエ",c6:"６．ウとエ",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2008",num:"15",subject:"ken",q:`国政調査権に関する次のアからエまでの各記述について，明らかに誤っているもの二つの組合せを，後記１から６までの中から選びなさい。
ア. ある刑事事件の係属中に，当該事件で審理されている事実と同一の事実について調査することは，それが立法目的又は行政監督目的で行われるものであっても許されない。
イ. ある罪に関する法改正の要否に関連して，犯罪捜査や公訴提起の状況等，その罪についての検察権の一般的な運用状況について調査することは許される。
ウ. 特定の個人の犯罪行為を発見し，これを処罰するのに必要な証拠を収集するためだけに国政調査権を行使することは，たとえその個人が現職の国会議員であったとしても許されない。
エ. 団体の規制に関する法改正の要否に関連して，議院における証人の宣誓及び証言等に関する法律に基づき証人として出頭したある団体の代表者は，その個人的な信条を明らかにするように尋問された場合でも，証言を拒むことは許されない。`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．イとウ",c5:"５．イとエ",c6:"６．ウとエ",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2008",num:"16",subject:"ken",q:`内閣及び内閣総理大臣に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア. 議院内閣制に関する責任本質説は，内閣の国会に対する連帯責任，衆議院の内閣不信任決議権，内閣の衆議院解散権を，議院内閣制の必須の要素としている。
イ. 内閣は憲法第７３条第１号により法律を誠実に執行する義務を負うが，他方，憲法第９９条により憲法尊重擁護義務をも負うので，内閣が違憲と解する法律が成立した場合には，一時的であれば，その執行を停止することができる。
ウ. 内閣総理大臣は国務大臣の任免権，国務大臣の訴追に対する同意権及び予算の作成・提出権を有するが，これらはすべて内閣総理大臣の専権事項であるので，閣議にかけて決定する必要はない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"8"},{year:"2008",num:"17",subject:"ken",q:`司法権に関する次のアからエまでの各記述について，正しいもの二つの組合せを，後記１から６までの中から選びなさい。
ア. 憲法第７６条第１項に規定される「司法権」については，民事及び刑事事件の裁判権を指し，性質上本来行政権の作用に属する行政裁判は，法律上特に定める権限として裁判所の権限とされたものである。
イ. 憲法第７６条第３項は，裁判官は「この憲法及び法律にのみ拘束される」と規定しているが，ここにいう「法律」には，国会によって制定される法律はもとより，政令や条例も含まれる。
ウ. 司法権独立の原則の一内容として，司法権が立法権及び行政権から独立して自主的に活動することがあるが，これを担保するものとして，例えば，憲法第７７条の最高裁判所の規則制定権や，憲法第８０条の最高裁判所による下級裁判所裁判官の指名権が定められている。
エ. 憲法第８１条は「最高裁判所は，一切の法律，命令，規則又は処分が憲法に適合するかしないかを決定する権限を有する終審裁判所である」と規定しているが，最高裁判所の判例によれば，仮にこの規定がないとすると，最高裁判所に違憲立法審査権を認める余地はない。`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．イとウ",c5:"５．イとエ",c6:"６．ウとエ",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2008",num:"18",subject:"ken",q:`予算及び決算に関する次のアからエまでの各記述について，正しいもの二つの組合せを，後記１から６までの中から選びなさい。
ア. 一会計年度の期間については憲法上明文の規定はないが，国会の常会が毎年召集すべきこととされており，また，決算について毎年会計検査院が検査することとされていることから，憲法は会計年度を１年とすることを予定していると考えられる。
イ. 予算は，一会計年度における国の財政行為の準則であり，政府の行為を規律する法規範であるから，国の歳入が歳入予算に定められた金額を超えると見込まれる場合には，内閣は，補正予算を作成・提出し，国会の承認を得た上で徴収することになる。
ウ. 国の収入支出の決算は，次の年度に国会に提出され，審査がなされるが，既になされた支出が適正であったかどうかの事後審査であるから，国会が修正を加えることはできず，また，不承認の議決がなされても，既になされた収入支出に何ら影響を及ぼさない。
エ. 内閣は，国会及び国民に対し，定期に，少くとも毎年一回，国の財政状況について報告しなければならないが，国会に対しては，毎会計年度予算及び決算を提出しているから，この報告に関しては，成立した予算及び決算を国民に対して報告すれば足りる。`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．イとウ",c5:"５．イとエ",c6:"６．ウとエ",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2008",num:"19",subject:"ken",q:`地方自治に関する次のアからウまでの各記述について，それぞれ正しい場合には１を，誤ってい。る場合には２を選びなさい。
ア. 憲法第９２条は地方公共団体の組織及び運営に関する事項については法律でこれを定めることとしているから，法律で地方公共団体そのものを廃止することは許されないが，地方議会を諮問機関とすることは必ずしも違憲ということはできない。
イ. 憲法第９３条第２項は地方公共団体の長，議会の議員を住民が直接選挙することを定めているにとどまり，地方自治法に定める議会の解散請求や議員，長の解職請求の制度それ自体は憲法上の要請ということはできない。
ウ. 憲法第９４条は地方公共団体の条例制定権を定めており，地方公共団体は，広義の自治事務に該当する事務であれば，条例により住民の基本的人権に制約を課することも許されるのであって，このこと自体を直ちに違憲ということはできない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"211"},{year:"2008",num:"20",subject:"ken",q:`憲法改正の限界については，理論上限界があるという立場（限界説）と限界がないという立場（無限界説）があるが，次のアからエまでの各記述のうち，限界説からの記述二つの組合せを，後記１から６までの中から選びなさい。 
ア. 憲法制定時の規範・価値によって将来の世代を拘束するのは不当である。
イ. 憲法の妥当性の根拠は，基本的人権の保障を含む根本規範である。
ウ. 憲法規範には実定化された自然法規範が含まれており，それは実定化されても自然法規範としての性質を失わない。
エ. 憲法規範中に価値序列や階層性を認めることはできない。`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．イとウ",c5:"５．イとエ",c6:"６．ウとエ",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2008",num:"21",subject:"gyo",q:`国家賠償法第１条第１項の違法性に関する次のアからウまでの各記述について，最高裁判所の判例に照らし，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア. 規制権限の不行使は，当該権限を定めた法令の趣旨，目的や，その権限の性質等に照らし，具体的事情の下において，その不行使が許容される限度を逸脱して著しく合理性を欠くと認められるときは，違法となるものと解するのが相当である。
イ. 警察官が，交通法規等に違反して車両で逃走する者をパトカーで追跡する職務の執行中に，逃走車両の走行により第三者が身体等に重大な損害を被った場合，当該追跡行為は，上記第三者との関係では違法な職務執行といわざるを得ない。
ウ. 税務署長のする所得税の更正は，所得金額を過大に認定していたとしても，そのことから直ちに国家賠償法第１条第１項にいう違法があったとの評価を受けるものではない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"3"},{year:"2008",num:"22",subject:"gyo",q:`損失補償に関する次のアからエまでの各記述について，法令又は最高裁判所の判例に照らし，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. 収用委員会の裁決のうち損失の補償に不服がある被収用者は，起業者を被告として，正当な補償額と裁決に定められていた補償額との差額の給付を求める訴えを提起するとともに，収用委員会を被告として，裁決の取消しを求める訴えを提起することが必要である。
イ. 土地収用法が補償を義務付けている「通常受ける損失」(同法第８８条)とは，客観的社会的にみて収用に基づき被収用者が当然に受けるであろうと考えられる経済的・財産的な損失をいうと解するのが相当であるから，経済的価値でない特殊な価値については補償の対象とはならない。
（参照条文）土地収用法
第８８条 第７１条，第７２条，第７４条，第７５条，第７７条，第８０条及び第８０条の２に規定する損失の補償の外，離作料，営業上の損失，建物の移転による賃貸料の損失その他土地を収用し，又は使用することに因つて土地所有者又は関係人が通常受ける損失は，補償しなければならない。
ウ. 行政財産たる土地につき使用許可によって与えられた使用権は，それが期間の定めのない場合であれば，当該行政財産本来の用途又は目的上の必要を生じたときはその時点において原則として消滅すべきものであり，また，権利自体にこのような制約が内在しているものとして付与されているものとみるのが相当であるから，上記の必要が生じたことを理由として許可を撤回する場合，補償が必要となることはない。
エ. 土地収用法による補償金額は「相当な価格」（同法第７１条）等の不確定概念をもって定められているので，補償の範囲及びその額の決定については，収用委員会の合理的な裁量にゆだねられているものと解される。
（参照条文）土地収用法
第７１条 収用する土地又はその土地に関する所有権以外の権利に対する補償金の額は，近傍類地の取引価格等を考慮して算定した事業の認定の告示の時における相当な価格に，権利取得裁決の時までの物価の変動に応ずる修正率を乗じて得た額とする。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2122"},{year:"2008",num:"23",subject:"gyo",q:`次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. 行政は，国民の代表によって作られた法律に従って行われなければならないのが原則であるが，行政上の法律関係においても，慣習法の適用が排除されるわけではない。
イ. 最高裁判所の判例によれば，民事上の法律関係を規律する原理として生まれた信義誠実の原則は，租税法律主義が妥当する租税法律関係については適用されないと解されている。
ウ. 国家における行政組織のうち，少なくともその基本構造については，国会が定めるべきものと解されている。
エ. 最高裁判所の判例によれば，職員が通達を違法と考えた場合，その通達に沿った上司の命令に服従すべき義務はなく，服従拒否を理由とする懲戒処分は違法になると解されている。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1212"},{year:"2008",num:"24",subject:"gyo",q:`行政裁量に関する次のアからエまでの各記述について，法令又は最高裁判所の判例に照らし，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. 出入国管理及び難民認定法第２６条第１項が外国人の再入国許可に関して許可の判断基準を特に規定していないのは，再入国の許否の判断を法務大臣の裁量に任せ，その裁量権の範囲を広範なものとする趣旨であると解されている。
（参照条文）出入国管理及び難民認定法
第２６条 法務大臣は，本邦に在留する外国人（中略）がその在留期間（在留期間の定めのない者にあつては，本邦に在留し得る期間）の満了の日以前に本邦に再び入国する意図をもつて出国しようとするときは，法務省令で定める手続により，その者の申請に基づき，再入国の許可を与えることができる。この場合において，法務大臣は，その者の申請に基づき，相当と認めるときは，当該許可を数次再入国の許可とすることができる。
２～７ (略)
イ. 国家公務員法第８２条第１項の定める懲戒処分について懲戒権者に裁量が認められる理由の一つは，懲戒処分の決定に当たっては，公務員の非行の原因，動機，性質等のほか，当該公務員の行為の前後における態度，処分歴，選択する処分が他の公務員や社会に及ぼす影響など，諸般の事情が総合的に考慮される必要があり，こうした判断は平素から庁内事情に通じ，部下職員の指揮監督に当たる者に任せるのでなければ適切な結果を期待できないことにある。
（参照条文）国家公務員法
第８２条 職員が，次の各号のいずれかに該当する場合においては，これに対し懲戒処分として，免職，停職，減給又は戒告の処分をすることができる。
一 この法律若しくは国家公務員倫理法又はこれらの法律に基づく命令（国家公務員倫理法第５条第３項の規定に基づく訓令及び同条第４項の規定に基づく規則を含む に。）違反した場合
二 職務上の義務に違反し，又は職務を怠つた場合
三 国民全体の奉仕者たるにふさわしくない非行のあつた場合
２ （略）
ウ. 違法建築物に対する除却を命ずる権限の行使を求めて隣地所有者が義務付け訴訟を提起する場合，権限行使の不作為の違法確認訴訟を併合提起した上で，当該権限を行使しないことが裁量権の範囲を超え，又は濫用になることを主張しなければならない。
（参照条文）建築基準法
第９条 特定行政庁は，建築基準法令の規定又はこの法律の規定に基づく許可に付した条件に違反した建築物又は建築物の敷地については，当該建築物の建築主，当該建築物に関する工事の請負人（請負工事の下請人を含む。）若しくは現場管理者又は当該建築物若しくは建築物の敷地の所有者，管理者若しくは占有者に対して，当該工事の施工の停止を命じ 又は 相当の猶予期限を付けて，当該建築物の除却，移転，改築，増築，修繕，模様替，使用禁止，使用制限その他これらの規定又は条件に対する違反を是正するために必要な措置をとることを命ずることができる。
２～１５ （略）
エ. 地方公務員法第２８条第１項に基づく分限処分には，降任と免職とがあるが，両者は，職に必要な適格性を判断するという点において共通するので，降任の場合と免職の場合とで裁量的判断を加える余地に差異はない。
（参照条文）地方公務員法
第２８条 職員が，左の各号の一に該当する場合においては，その意に反して，これを降任し，又は免職することができる。
一 勤務実績が良くない場合
二 心身の故障のため，職務の遂行に支障があり，又はこれに堪えない場合
三 前二号に規定する場合の外，その職に必要な適格性を欠く場合
四 職制若しくは定数の改廃又は予算の減少により廃職又は過員を生じた場合
２～４ （略）`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1122"},{year:"2008",num:"25",subject:"gyo",q:`行政指導に関する次のアからエまでの各記述について，明らかに誤っているものの個数を，後記１から５までの中から選びなさい。
ア. 最高裁判所の判例によれば，建築確認申請に係る行政指導の相手方が確認処分を留保されたままでの行政指導には応じられないとの意思を真摯かつ明確に表明して建築確認申請に直ちに応答すべきことを求めた場合には，それ以後の確認処分の留保は原則として違法の評価を受ける。
イ. 最高裁判所の判例によれば，ある行政機関の行為が，これを規定する法律において相手方が任意に従うことを期待してされる行政指導として定められている場合には，抗告訴訟の対象となる行政処分に当たると解されることはない。
ウ. 行政指導は，多様な行政需要に臨機に対応するためにされる事実的行為であるから，条理上も，行政機関に行政指導についての作為義務が生ずることはない。
エ. 行政指導は，相手方の任意の協力を求めるものであるから，法律に根拠がなく，かつ，その行政機関の任務又は所掌事務の範囲を超えるものであっても，その行政機関が行政サービスの目的で行うものである限り，行うことが許される。`,c1:"１．１個",c2:"２．２個",c3:"３．３個",c4:"４．４個",c5:"５．０個",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2008",num:"26",subject:"gyo",q:`通達に関する次のアからウまでの各記述について，法令又は最高裁判所の判例に照らし，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア. 国家行政組織法第１４条第２項は，「各省大臣 各委員会及び各庁の長官は，その機関の所掌事務について，命令又は示達するため，所管の諸機関及び職員に対し，訓令又は通達を発することができる。」と定めているが，これは通達発令権限を有する行政機関を限定する趣旨ではないから，局長や部長といった内部部局の長も通達を発することが許される。
イ. パチンコ球遊器について約１０年間にわたり非課税の取扱いが続いた後に，法定の課税対象物品に該当する旨の通達が発せられた場合，通達の内容が法律の正しい解釈に合致するとしても，通達が発せられた後にされる課税処分は，非課税の継続に寄せられた納税者の信頼を損なうものであり，違法である。
ウ. 墓地，埋葬等に関する法律第１３条に関して，他の宗教団体信者であることだけを理由とする埋葬拒否は「正当の理由」によるものとは認められないと解釈した通達について，この解釈を誤りと考える寺院は，通達に従わず，同条違反を理由に起訴された後に，刑事訴訟で通達の適法性を争うことができるが，それでは公訴を提起され，有罪判決を受ける危険を負わざるを得ないため，取消訴訟で当該通達の適法性を争うことができる。
（参照条文）墓地，埋葬等に関する法律
第１３条 墓地，納骨堂又は火葬場の管理者は，埋葬，埋蔵，収蔵又は火葬の求めを受けたときは，正当の理由がなければこれを拒んではならない。
第２１条 左の各号の一に該当する者は，これを千円以下の罰金又は拘留若しくは科料に処する。
一 第３条，第４条，第５条第１項又は第１２条から第１７条までの規定に違反した者
二 （略）`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"4"},{year:"2008",num:"27",subject:"gyo",q:`法人税法（平成１３年法律第１２９号による改正前のもの。以下同じ。）上の質問検査権に関する最高裁判所平成１６年１月２０日第二小法廷決定（刑集５８巻１号２６頁）の次の判示を読み，後記アからエまでの各記述について，明らかに同決定の考え方と整合しないもの二つの組合せを，後記１から６までの中から選びなさい。
　法人税法「１５６条によると，同法１５３条（中略）に規定する質問又は検査の権限は，犯罪の証拠資料を取得収集し，保全するためなど，犯則事件の調査あるいは捜査のための手段として行使することは許されないと解するのが相当である。しかしながら，上記質問又は検査の権限の行使に当たって，取得収集される証拠資料が後に犯則事件の証拠として利用されることが想定できたとしても，そのことによって直ちに，上記質問又は検査の権限が犯則事件の調査あるいは捜査のための手段として行使されたことにはならないというべきである 。」
（参照条文）法人税法
第１５３条 国税庁の当該職員又は法人の納税地の所轄税務署若しくは所轄国税局の当該職員は，法人税に関する調査について必要があるときは，法人に質問し，又はその帳簿書類その他の物件を検査することができる。
第１５６条 前三条の規定による質問又は検査の権限は，犯罪捜査のために認められたものと解してはならない。

ア. 税務調査を行うための質問検査権の制度は，刑罰を背景とした間接強制による証拠資料の収集を可能にしているとしても，刑事責任追及のための資料の取得収集に直接結び付く作用を一般的に有する手続として認められたものではなく，租税の公平確実な賦課徴収のために必要な資料を収集することを目的とする手続であって，必要性，合理性が肯定できるから，憲法第３５条及び第３８条の趣旨に反するものではない。
イ. 法人税法第１５６条に違反した質問検査権の行使であるかどうかの判断に当たっては，その質問検査権を行使した主体の主観的な意図は考慮すべきではない。
ウ. 犯則調査は，一種の行政手続であって刑事手続（司法手続）ではないから，その実質が租税犯の捜査としての機能を有するものであっても，法人税法第１５６条にいう「犯罪捜査」に含まれない。
エ. 税務調査によって事案の内容を把握することにより，犯則調査に移行する可能性があることを認識しながら，質問調査権を行使したにとどまる場合は，必ずしも，法人税法第１５６条によって禁止されている質問検査権を犯則調査のための手段として行使する場合に当たらない。`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．イとウ",c5:"５．イとエ",c6:"６．ウとエ",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2008",num:"28",subject:"gyo",q:`最高裁判所平成４年１０月２９日第一小法廷判決（民集４６巻７号１１７４頁・伊方原発訴訟判決）に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア. この判決は，原子炉設置許可処分の違法性に関する司法審査の方式として，裁判所が処分要件について行政庁と同一の立場に立って判断を行い，それと行政庁の判断とを比較して，行政庁の判断の適否を審査するという方式を採用している。
イ. この判決は，原子炉設置許可処分について，処分要件を満たした場合に，処分をするかどうか，するとしてどのような内容の処分をするかという点について，行政庁の裁量を認めたものである。
ウ. この判決は，原子炉設置許可処分の取消訴訟においては，原子炉施設の安全審査に関する資料をすべて行政庁の側が保持していることなどの点を考慮すると，行政庁の側がその判断に不合理な点がないことの主張，立証責任を負うべきものとしている。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"8"},{year:"2008",num:"29",subject:"gyo",q:`次のアからエは，Ａ欄に掲げる各行政処分についてＢ欄に掲げる各手続等に係る行政手続法の定めが適用されることを示したものである。それぞれ正しい場合には１を，誤っている場合には２を選びなさい。ただし，いずれの行政処分についても，同法の規定が原則どおり適用されるものとする。
Ａ欄　Ｂ欄
ア　営業許可申請に対する不許可処分　弁明の機会の付与、審査基準の設定
イ　営業許可の職権による取消処分　聴聞、理由の提示
ウ　職権による営業停止処分　理由の提示、標準処理期間の設定
エ　職権による法人の役員の解任命令　聴聞、命令等制定手続`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2122"},{year:"2008",num:"30",subject:"gyo",q:`Ａは，国有地である河川区域内の土地について行政庁Ｂから河川法第２４条の占用許可を受けていたが，同法第２６条第１項の許可を受けることなく当該土地上に工作物を設置した。次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. Ｂが占用許可を取り消すことにより，Ａは占用権原を喪失するから，Ｂは，河川法第７５条第１項の規定により当該工作物の除却を命ずるまでもなく，行政代執行法に基づく代執行により当該工作物を除却することができる。
イ. Ａが，Ｂとの間で，所定の期限までに当該工作物を撤去することを約したが，同期限までに撤去しなかった場合，Ｂは，行政代執行法に基づく代執行により，当該工作物を除却することができる。
ウ. Ｂが，行政代執行法に基づく代執行により当該工作物を除却することができる場合であっても，国は，当該土地の所有権に基づいて工作物収去土地明渡しを求める民事訴訟を提起し，確定判決を得て民事執行により当該工作物を撤去することができる。
エ. Ｂは，河川法第７５条第１項により当該工作物の除却を命じたが，Ａが当該工作物を撤去しない場合，危険が切迫しているため，撤去行為の急速な実施について緊急の必要があり，戒告及び代執行令書による通知手続を執る暇がないときは，これらの手続を経ないで代執行をすることができる。
（参照条文）河川法
第２４条 河川区域内の土地（中略）を占用しようとする者は，国土交通省令で定めるところにより，河川管理者の許可を受けなければならない。
第２６条 河川区域内の土地において工作物を新築し，改築し，又は除却しようとする者は，国土交通省令で定めるところにより，河川管理者の許可を受けなければならない。（以下略）
２～５ （略）
第７５条 河川管理者は，次の各号のいずれかに該当する者に対して，この法律若しくはこの法律に基づく政令若しくは都道府県の条例の規定によつて与えた許可若しくは承認を取り消し，（中略），又は工事その他の行為の中止 工作物の改築若しくは除却（中略 ）その他の措置をとること若しくは河川を原状に回復することを命ずることができる。
一 この法律若しくはこの法律に基づく政令若しくは都道府県の条例の規定若しくはこれらの規定に基づく処分に違反した者 ，（以下略） 
二，三 （略）
２～１０ （略）`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2211"},{year:"2008",num:"31",subject:"gyo",q:`行政機関の保有する情報の公開に関する法律（以下「情報公開法」という。）に関する次のアからウまでの各記述について，法令又は最高裁判所の判例に照らし，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア. 情報公開法は，特定の個人を識別できる情報（以下「個人識別情報」という。）を不開示情報として規定しているところ，これは，個人識別情報に係る個人のプライバシー等の権利利益を保護する趣旨であるから，開示請求人自身に関する個人識別情報については，本人が開示請求をしている場合には，その者の権利利益が害されるおそれはないため，上記不開示情報には当たらない。
イ. 情報公開法は，法人等に関する情報であって，公にすることによって当該法人等の正当な利益を害するおそれがあるものを不開示情報として規定しているところ，これは，当該情報に関する法人等の正当な利益を保護する趣旨であるから，上記のおそれがある情報が記録されている行政文書については，これを開示することができる場合はない。
ウ. 法人等を代表する者がその職務として行った行為であっても，その者にとっては自己の社会的活動としての側面を有し，個人にかかわりのあるものであることは否定できないから，当該行為に関する情報によって上記の者を特定することができる場合には，原則として，個人識別情報としての不開示情報に該当する。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"8"},{year:"2008",num:"32",subject:"gyo",q:`次のＡからＥの空欄に入れるべき語句を【語群】の中から選び，順に並べた場合の組合せとして正しいものを後記１から６までの中から選びなさい。
行政事件訴訟法第２条は，行政事件訴訟とは，〔Ａ〕，〔Ｂ〕，〔Ｃ〕及び〔Ｄ〕をいうと定めている。課税処分を受けた納税者がその取消しを求める訴えは〔Ａ〕であり，土地収用法に基づく収用委員会の裁決のうち損失の補償に関する訴えは〔Ｂ〕であり，普通地方公共団体の住民が，市に対して不法行為を行った者に対して市長が損害賠償請求権を行使しないことの違法確認を求める訴えは，〔Ｃ〕であり 〔Ｅ〕は 〔Ｄ〕である。
【語 群】
ａ. 抗告訴訟
ｂ. 処分の取消しの訴え
ｃ. 裁決の取消しの訴え
ｄ. 不作為の違法確認の訴え
ｅ. 当事者訴訟
ｆ. 住民訴訟
ｇ. 民衆訴訟
ｈ. 選挙訴訟
ｉ. 機関訴訟
ｊ. 選挙の効力に関する訴え
ｋ. 職務執行命令訴訟
（Ａ，Ｂ，Ｃ，Ｄ，Ｅの順とする 。）`,c1:"１．ｂ - ｃ - ｄ - ｈ – ｊ",c2:"２．ａ - ｅ - ｆ - ｈ – ｊ",c3:" ３．ｂ - ｃ - ｆ - ｉ – ｋ",c4:"４．ａ - ｅ - ｇ - ｈ – ｊ",c5:"５．ａ - ｅ - ｇ - ｉ – ｋ",c6:"６．ｂ - ｅ - ｄ - ｉ – ｊ",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2008",num:"33",subject:"gyo",q:`最高裁判所の判決において処分性を否定されているものを次の【甲群】の行為の中から三つ選んだ上，当該行為の処分性が否定される理由の骨子を次の【乙群】の中からそれぞれ一つ選び，当該行為の選択が正しく，かつ，その理由との結び付きが最も適切となる組合せを作ったとき，【乙群】の中で，その組合せに用いられないこととなる理由二つの組合せを，後記の１から１０までの中から選びなさい。
 【甲 群】
ア. 全国新幹線鉄道整備法の規定に基づく運輸大臣の日本鉄道建設公団に対する新幹線工事実施計画の認可
イ. 農地法の規定に基づく農林水産大臣による買収土地の旧所有者に対する売払い
ウ. 関税定率法の規定に基づく税関長の輸入業者に対する輸入禁制品該当の通知
エ. 道路交通法の規定に基づく警察本部長の反則者に対する反則金の納付通告
【乙 群】
Ａ. 当該行為によって相手方に義務を課するものではなく，その内容の適否は，他の手続で争うことが予定されていること
Ｂ. 一連の行政過程における中間段階の行為にすぎないこと
Ｃ. 上級行政機関の下級行政機関に対する監督手段として行われるもので，行政組織内の内部的行為にすぎないこと
Ｄ. 私法上の行為にすぎないこと
Ｅ. 相手方に対してする法律所定の事由に当たることについての観念の通知にすぎないこと`,c1:"１．Ａ－Ｂ",c2:"２．Ａ－Ｃ",c3:"３．Ａ－Ｄ",c4:"４．Ａ－Ｅ",c5:"５．Ｂ－Ｃ",c6:"６．Ｂ－Ｄ",c7:"７．Ｂ－Ｅ",c8:"８．Ｃ－Ｄ",c9:"９．Ｃ－Ｅ",c10:"10．Ｄ－Ｅ",a:"7"},{year:"2008",num:"34",subject:"gyo",q:`訴えの利益に関する次のアからウまでの各記述について，法令又は最高裁判所の判例に照らし，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア. 受刑者に対する懲罰処分として１０日間の閉居罰が執行され，これが終了した場合であっても，当該受刑者の仮出所の決定に当たって，当該懲罰処分を受けたことが事実上考慮される余地があるから，その取消しを求める訴えの利益は失われない。
イ. 免職処分を受けた公務員が，その後公職の選挙に立候補した場合には，公職選挙法第９０条によりその届出の日に公務員の職を辞したものとみなされ，当該免職処分が取り消されたとしても同人が公務員たる地位を回復することはないから，その取消しを求める訴えの利益は失われる。
（参照条文）公職選挙法
第９０条（前略）公務員が，（中略）届出により公職の候補者となつたときは，当該公務員の退職に関する法令の規定にかかわらず，その届出の日に当該公務員たることを辞したものとみなす。
ウ. ある県の公文書公開条例に基づく公文書の公開請求について非公開決定を受けた者が同決定の取消しを求める訴訟において，当該公文書が書証として提出された場合であっても，同人には，同条例に基づき公文書の公開を請求して，所定の手続により請求に係る公文書を閲覧し，又は写しの交付を受けることを求める法律上の利益があるから，上記非公開決定の取消しを求める訴えの利益は失われない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2008",num:"35",subject:"gyo",q:`次のアからエまでの教授と学生との間の問答における学生の答えについて，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. 教授：今日は，マンション建築に係る建築確認について，周辺住民から提起された建築確認取消訴訟を例に挙げて，取消訴訟の手続等に関して勉強してみよう。
まず，建築確認について，建築基準法に違反する点があれば，周辺住民は，だれでもその取消訴訟を提起できるのかな。
学生：周辺住民ならだれでも取消訴訟を提起できるわけではないと思います。建築確認について，建ぺい率や容積率，高度制限に違反するような違法がある場合に，当該マンション建築によって，日照を妨げられるなど，具体的な被害を受けるおそれのある者には原告適格が認められる余地がありますが，単に周辺住民というだけでは，幾ら建築確認に建築基準法に違反する点があっても取消訴訟の提起は無理だと思います。
イ. 教授：取消訴訟は，その訴えを提起すべき期間に，何らかの制限があったかな。
学生：これは，行政訴訟の常識です。取消訴訟は，処分や裁決があったことを知った日から６箇月を経過したとき，又は処分や裁決の日から１年を経過したときは，どんな理由があるにせよ，提起することができないことになっています。これを出訴期間といい，出訴期間を徒過した取消訴訟は，訴えを却下されることになるので，周辺住民は，このことに気を付ける必要があります。
ウ. 教授：周辺住民からの建築確認の取消訴訟において，もしも，これが取り消されることになると，建築確認を受けたマンション建築業者は，当該訴訟の当事者にならないままに，建築確認の効力が失われて，不測の損害を被ることになりかねないが，このような業者の保護は，どのように図られることになるのかな。
学生：マンション建築業者は，訴訟の結果により権利を害される場合は，裁判所に申し立てて当該訴訟に参加することができますし，裁判所も，職権で当該業者を当該訴訟に参加させることができます。
エ. 教授：建築確認の取消訴訟の係属中に，問題のマンションの建築工事が完了した場合は，建築確認の取消しを求める意味がなくなってしまうように思うが，このような場合にも訴えの利益はあるのかな。
学生：建築確認が違法であるとして判決でそれが取り消されれば，その判決の拘束力によって，行政庁は，建築物に関する完了検査についての検査済証の交付を拒否することや違反是正命令を発することを義務付けられますから，建築工事が完了しても，建築確認の取消しを求める訴えの利益は失われないと思います。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1212"},{year:"2008",num:"36",subject:"gyo",q:`次のアからエまでの各訴訟について，それぞれ行政事件訴訟法第４条の「公法上の法律関係に関する確認の訴えその他の公法上の法律関係に関する訴訟」に分類される場合には１を，そうでない場合には２を選びなさい。
ア. 薬局の開設を登録制から許可制に改めた薬事法の改正が憲法に違反するとして，旧法に基づく登録をして薬局を開設していた者が，国を被告として提起する，新法に基づく許可を受けなくても薬局の開設ができる権利があることの確認を求める訴訟
イ. 土地収用法に基づく収用委員会の権利取得裁決が無効であることを前提として，従前の土地所有者が，起業者を被告として提起する，当該土地の所有権を有することの確認を求める訴訟
ウ. 出生の届出をしたが，出生による国籍取得の要件を満たさないとして戸籍に登載されなかった者が，国を被告として提起する，日本国籍を有することの確認を求める訴訟
エ. ある特許に無効事由があるとして特許無効審判の請求をしたが，同請求は成立しないとの審決を受けた者が，同審判の被請求人である特許権者を被告として提起する，同審決の取消しを求める訴訟
（参照条文）特許法
第１２３条 特許が次の各号のいずれかに該当するときは，その特許を無効にすることについて特許無効審判を請求することができる 。（以下略）
一～八 （略）
２～４ （略）
第１７８条 
審決に対する訴え（中略）は，東京高等裁判所の専属管轄とする。
２～６ （略）
第１７９条 前条第１項の訴えにおいては，特許庁長官を被告としなければならない。ただし，特許無効審判（中略）の審決に対するものにあつては，その審判（中略）の請求人又は被請求人を被告としなければならない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1212"},{year:"2008",num:"37",subject:"gyo",q:`無効等確認訴訟に関する次のアからウまでの各記述について，最高裁判所の判例に照らし，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア. 課税処分を受けた納税者は，当該課税処分に係る税金をいまだ納付していないため滞納処分を受けるおそれがあるときは，課税処分の無効を前提とする債務不存在確認訴訟等を提起することができるとしても，課税処分の無効等確認訴訟の原告適格を有する。
イ. 原子炉設置許可処分がされた原子力発電所の周辺住民は，人格権に基づいて原子炉設置等の差止めを求める民事訴訟を提起することができるから，当該原子炉設置許可処分の無効等確認訴訟の原告適格を有しない。
ウ. 土地改良事業の換地処分を受けた者は，照応原則（換地と従前地がその用途・地積等の点で見合ったものでなければならないという原則）違反を理由に当該処分の無効を主張して争う場合，当該処分の無効を前提とする従前地の所有権確認訴訟等を提起することができるとしても，当該処分の無効等確認訴訟の原告適格を有する。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"3"},{year:"2008",num:"38",subject:"gyo",q:`行政事件訴訟法上の仮の救済制度に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア. 執行停止の申立ては，本案訴訟を提起した後でなければ申し立てることができないとされているが，仮の差止めの申立ては，処分がされることにより生ずる償うことのできない損害を避けるため緊急の必要がある場合にされるものであるから，本案訴訟の提起は申立ての要件とされていない。
イ. 仮の差止めの申立ての制度は，許可申請に対する不許可処分が予想される場合に，申請者が当該不許可処分を仮に差し止めることによって損害の発生を防止することができるようにすることなどを念頭に置いて，国民の権利利益の保護を拡充する目的で設けられたものである。
ウ. 執行停止について内閣総理大臣の異議の制度があるのと同様に，仮の差止めにおいても内閣総理大臣の異議の制度が設けられている。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2008",num:"39",subject:"gyo",q:`住民訴訟に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア. 住民訴訟は 当該普通地方公共団体の住民である者に特に出訴を認めた客観訴訟であるから，，原告が，口頭弁論終結時までに当該普通地方公共団体から転出したときは，訴えは不適法になる。
イ. 住民訴訟は，当該普通地方公共団体の住民である者に，違法な財務会計行為を是正する権能を特に認めた客観訴訟であるから，違法な財務会計行為が行われた当時，当該普通地方公共団体の住民であったことが，訴えの適法要件になる。
ウ. 住民訴訟を提起した住民が，訴訟の係属中に死亡したときは，その住民の相続人が訴訟を承継することができる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"4"},{year:"2008",num:"40",subject:"gyo",q:`行政不服審査法に関する次のアからエまでの各記述について，法令又は最高裁判所の判例に照らし，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. 不服申立ての対象に行政庁の不作為は含まれない。
イ. 行政不服審査においては，行政事件訴訟とは異なり，処分の名あて人以外の者による不服申立ては認められない。
ウ. 処分庁の上級行政庁である審査庁は，営業免許取消処分に対する審査請求に理由があると認めるときは，原処分を営業停止処分に変更する裁決をすることができる。
エ. 原処分を適法と認めて審査請求を棄却する裁決があった場合，当該裁決は処分庁を拘束するから，処分庁は原処分を取り消したり，変更したりすることができない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2212"},{year:"2008",num:"1",subject:"min",q:`信義誠実の原則又は権利濫用禁止の原則に関する次のアからオまでの各記述のうち，権利濫用禁止の原則について述べているものを組み合わせたものは 後記１から５までのうちどれか。
ア. 国は，公務員に対して，その生命及び健康等を危険から保護するように配慮すべき義務を負う。
イ. 解除権を有する者が長期にわたりこれを行使せず，相手方においてその権利はもはや行使されないものと信頼すべき正当の事由を有するに至ったという特段の事情がある場合には，解除権の行使は許されない。
ウ. 動産売買における引渡場所について，買主が売主に問い合わせをすれば知ることが容易であった場合には，問い合わせを怠った買主は，遅滞の責任を免れない。
エ. 妨害により所有権が侵害されても，生じた損失が軽微であり，妨害を除去することが著しく困難で，多大の費用を要する場合には，不当な利益を獲得する目的で妨害の除去を求めることは許されない。
オ. 権利の行使であっても 社会観念上被害者が認容しなければならない程度を超える場合には，不法行為が成立する。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2008",num:"2",subject:"min",q:`未成年者に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか 
ア. 未成年者は代理人になれない。
イ. 未成年者に対して親権を行う者がいないときは，後見が開始する。
ウ. 未成年者が他人に損害を与えた場合には，未成年者は不法行為責任を負わず，その監督義務者が不法行為責任を負う。
エ. 未成年者が婚姻をするには，法定代理人の同意を得なくてはならない。
オ. 未成年者であっても，許可された特定の営業に関しては，行為能力を有する。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2008",num:"3",subject:"min",q:"行為能力に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．共に１８歳の夫婦が自分たちだけで決めて行った離婚は，取り消すことができない。",c2:"２．成年被後見人が，後見人の同意を得ずに電気料金を支払った行為は，取り消すことができない。",c3:"３．被保佐人が，保佐人の同意を得ずに，貸付金の弁済を受けた行為は，取り消すことができる。",c4:"４．補助開始の審判がされる場合においても，補助人は当然に代理権を付与されるわけではない。",c5:"５．被保佐人が取り消すことができる行為を行った場合，その相手方は，被保佐人に対して，保佐人の追認を得るべき旨の催告をすることができるが，保佐人に直接追認するか否かの回答を求める催告をすることはできない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2008",num:"4",subject:"min",q:"権利能力なき社団に関する次の１から５までの各記述のうち，判例の趣旨に照らし誤っているものを２個選びなさい ",c1:"１．権利能力なき社団の成立要件は，団体としての組織を備え，多数決の原理が行われ，構成員の変更にかかわらず団体そのものが存続し，その組織において代表の方法，総会の運営，財産の管理等団体としての主要な点が確定していることである。",c2:"２．権利能力なき社団が取得した不動産については，権利能力なき社団名義で所有権の登記をすることはできず，権利能力なき社団の代表者たる肩書を付した代表者名義で所有権の登記をすることができるにすぎない。",c3:"３．代表者の定めのある権利能力なき社団は，その名において訴え，又は訴えられることができる。",c4:"４．権利能力なき社団の財産は，その構成員に総有的に帰属するから，構成員の一人に対して金銭債権を有する債権者は，当該構成員の有する総有持分に限りこれを差し押さえることができる。",c5:"５．権利能力なき社団はその代表者により社団の名で取引をすることができるが，その取引により社団が負担した債務については，構成員各自は取引の相手方に対して直接には個人的債務ないし責任を負わない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"24"},{year:"2008",num:"5",subject:"min",q:`錯誤に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか 
ア. 第三者が表意者に対する債権を保全する必要がある場合において，表意者が要素の錯誤を認めているときは，表意者自らは無効を主張する意思がなくても，その第三者は，意思表示の無効を主張することができる。
イ. 和解契約において，代物弁済の目的とした商品の性質に瑕疵があり，和解契約の要素に錯誤がある場合，瑕疵担保責任の規定の適用は排除され，錯誤無効の主張も，和解契約の確定効に反し許されない。
ウ. 重過失ある表意者が自ら錯誤を理由とする無効を主張し得ない以上，相手方又は第三者は，その無効を主張することができない。
エ. 協議離婚に伴う財産分与契約において，分与者は，自己に譲渡所得税が課されることを知らず，課税されないとの理解を当然の前提とし，かつ，その旨を黙示的に表示していた場合であっても，財産分与契約の無効を主張することはできない。
オ. 他に連帯保証人があるとの債務者の説明を誤信して連帯保証契約を結んだ者は，特にその旨を表示し保証契約の内容としたのでなければ，錯誤無効を主張することができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2008",num:"6",subject:"min",q:"民法上の代理に関する次の１から５までの各記述のうち 誤っているものはどれか。",c1:"１．代理人が本人のためにすることを示さないでした意思表示であっても，代理人が本人のためにすることを相手方において知ることができた場合には，意思表示は本人に帰属する。",c2:"２．自己契約及び双方代理は，債務の履行行為及び本人があらかじめ許諾した行為を除き原則として効力を生じないが，本人の保護のための制度であるから，無権代理行為として，本人が追認すれば有効になる。",c3:"３．代理人が自己又は第三者のために代理権を濫用しても，それが客観的に代理権の範囲にあり，相手方が代理人の意図を知らず，知らないことに過失がないときは，代理人がした意思表示は本人に帰属する。",c4:"４．何らの代理権がない者が代理人と称してした契約であっても，相手方が代理人と称した者に当該契約を締結する権限があると信じ，そのように信じたことにつき正当な理由がある場合には，本人に対してその効力を生じる。",c5:"５．復代理人は，本人の代理人であって代理人の代理人ではないから，復代理人が代理行為をするに当たっては，本人のためにすることを示せば十分である。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2008",num:"7",subject:"min",q:`時効に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 土地の継続的な用益という外形的事実が存在し，かつ，それが賃借の意思に基づくことが客観的に表現されているときは，土地賃借権の時効取得が可能である。
イ. 債務につき消滅時効が完成した後に，債務者が債務の承認をした以上，時効完成の事実を知らなかったときでも，以後その完成した消滅時効を援用することは許されない。
ウ. 取得時効を主張する時効援用権者は，占有を開始した以後の任意の時点を時効の起算点として選択することができる。
エ. 相続人が，被相続人の死亡により，相続財産の占有を承継したばかりでなく，新たに相続財産を事実上支配することによって占有を開始して，その占有に所有の意思があるとみられる場合においては，被相続人の占有が所有の意思のないものであったときでも，相続人は新権原により所有の意思をもって占有を始めたものといえる。
オ. 債務者兼抵当権設定者である原告が債務の不存在を理由として提起した抵当権設定登記の抹消登記手続請求訴訟において，債権者兼抵当権者である被告が請求棄却の判決を求め，被担保債権の存在を主張したとしても，その債権につき裁判上の請求に準ずる消滅時効中断の効力は生じない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2008",num:"8",subject:"min",q:"Ｘが所有権に基づき占有者Ｙに対し土地の引渡しを請求した場合，判例の趣旨に照らしＹが引渡しを拒絶することができるものは，次の１から５までのうちどれか。",c1:"１．土地を所有し占有するＹが税金対策のために登記名義をＡとしていたところ，Ｘは，Ａが真実の所有者であると過失なく信じ，Ａから同土地を買い受けて移転登記を受けた。",c2:"２．土地を所有し占有するＹからＡへ，ＡからＸへと同土地が順次売買され，それぞれ代金の支払も了した。",c3:"３．土地を所有し占有するＹは，Ａに対し，同土地を売却して移転登記を行ったが，この売買にはＡによる詐欺があったので，ＹはＡに対して取消しの意思表示をした。その直後，Ａは，同土地をＸに売却して移転登記を行った。",c4:"４．ＸがＹの代理人としてＡから土地を買い受け，Ｙが同土地を所有し占有するようになったが ，登記名義はＡのままであった。その直後，Ｘは，Ａから同土地を買い受けて移転登記を受けた 。",c5:"５．Ａの父はＹに土地を売却し引き渡したが，移転登記をする前に急死してしまった。その後，この土地を単独で相続したＡが，Ｘに対して同土地を売却して移転登記を行った。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2008",num:"9",subject:"min",q:`不動産をめぐる権利主張において登記の要否が問題となる場面に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア. Ａが所有する甲土地の上に権原なく乙建物を所有しているＢに対し，Ａから甲土地を譲り受けたＣは，ＡからＣへの所有権移転登記をしなければ，甲土地の所有権を主張して乙建物の収去を請求することができない。
イ. Ａが所有する甲土地の上に権原なく乙建物を所有しているＢから乙建物を譲り受けたＤに対し，Ａは，ＤがＢからの乙建物の所有権移転登記を経由していない場合，Ｄが乙建物の所有者であることを主張して乙建物の収去を請求することができない。
ウ. Ａが所有する甲土地の上に建物所有目的の賃借権の設定を受けたＥに対し，Ａから甲土地を譲り受けたＣは，ＡからＣへの所有権移転登記をしなければ，Ｅに対し賃料の支払を請求することができない。
エ. Ａが，その所有する甲土地をＦに遺贈する旨の遺言をして死亡した場合において，Ａの唯一の相続人である配偶者から甲土地を贈与されたＧに対し，Ｆは，所有権移転登記をしなくても， 甲土地の所有権取得を対抗することができる。
オ. 甲土地を所有するＡが遺言をしないで死亡したことによりＡの配偶者と子ＨがＡの相続人となった場合において，Ａの配偶者から甲土地を買ったＩに対し，Ｈは，相続登記をしなくても， 甲土地について有する法定相続分に応じた持分の帰属を主張することができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2008",num:"10",subject:"min",q:`甲土地を所有するＡが甲土地を占有するＢに対し所有権に基づき甲土地の明渡しを請求する訴訟においてＢが主張する抗弁の要件事実に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア. Ｂは，甲土地を無償で借りる旨をＡと合意した事実を主張立証すれば，請求棄却の判決を得ることができる。
イ. Ｂは，甲土地を賃借する旨をＡと合意し，それに基づきＡから甲土地の引渡しを受けた事実を主張立証すれば，請求棄却の判決を得ることができる。
ウ. Ｂは，甲土地に地上権の設定を受ける旨をＡと合意し，それに基づき地上権設定登記をした事実を主張立証すれば，請求棄却の判決を得ることができる。
エ. Ｂは，甲土地について地上権設定登記を受けた事実を主張立証した場合においても，それにより適法に地上権の設定があったことは推定されず，請求棄却の判決を得ることができない。
オ. 甲土地の造成工事をしたＢは，この工事に基づく請負代金債権の弁済がない事実を主張立証すれば，請求棄却の判決を得ることができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2008",num:"11",subject:"min",q:"Ａ，Ｂ及びＣが各３分の１の持分で甲土地を共有している場合に関する次の１から５までの各記述のうち，判例の趣旨に照らし誤っているものはどれか ",c1:"１．第三者が甲土地を無断で資材置場として使用している場合 Ａは単独でその第三者に対して，，甲土地全部の明渡しを請求することができる。",c2:"２．甲土地が山林である場合，ＡとＢが合意すれば，開発のために甲土地上の樹木全部を伐採することができる。",c3:"３．Ａ，Ｂ及びＣが共同して甲土地を第三者に賃貸している場合，第三者がその賃料の支払を怠ったときの賃貸借契約の解除は，ＡとＢとですることができる。",c4:"４．Ａは，Ｃの持分について第三者への不実の持分移転登記がされている場合には，単独でその持分移転登記の抹消登記手続を請求することができる。",c5:"５．Ａが単独で甲土地全部を占有している場合でも，Ｂ及びＣは，その共有持分が過半数を超えることを理由としては，Ａに対して甲土地の明渡しを請求することはできない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2008",num:"12",subject:"min",q:"動産についての留置権と質権に関する次の１から５までの各記述のうち，誤っているものを２個，選びなさい。 ",c1:"１．留置権者が留置物の占有を継続していても，その被担保債権の消滅時効は進行するが，質権者が質物の占有を継続していれば，その被担保債権の消滅時効は中断する。",c2:"２．質権は，留置権とは異なり，約定担保物権であるから，約定があれば，質権設定者を代理人としてその者に占有させることにより，これを設定することができる。",c3:"３．留置権は，質権と異なり，目的物が滅失した場合，これに代わって債務者が取得する物には効力が及ばず，消滅する。",c4:"４．留置権と質権は，不可分性により，いずれも被担保債権の一部の弁済を受けただけでは消滅しないが，留置権については，債務者が相当の担保を提供して留置権の消滅を請求することができる。",c5:"５．留置権者は債務者の同意があれば，また，質権者は質権設定者の同意があれば，いずれもそれぞれ担保物を賃貸することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"12"},{year:"2008",num:"13",subject:"min",q:`買戻特約付売買の買主から目的不動産につき抵当権の設定を受けた者は，抵当権に基づく物上代位権の行使として，買戻権の行使により買主が取得した買戻代金債権を差し押さえることができるとする見解がある。この見解に関する次のアからエまでの各記述のうち，当該見解の論拠とすることができないものを組み合わせたものは，後記１から６までのうちどれか 
ア. 買戻権は留保された解除権であるところ，法定解除の法的構成ないし効果に関する直接効果説の立場に従えば，解除（買戻権の行使）によって売買契約は遡及的に消滅し，買戻特約の登記後にされた処分はすべて効力を失うのであって，買主が目的不動産上に設定した担保物権も初めからなかったことになる。
イ. 買戻特約の登記に後れて目的不動産に抵当権の設定を受けた抵当権者は，買戻代金債権についてあらかじめ質権ないし譲渡担保権の設定を受けることができる。
ウ. 買戻代金は，実質的には買戻権の行使による目的不動産の所有権の復帰についての対価と見ることができ，目的不動産の価値変形物として，目的物の売却又は滅失により債務者が受けるべき金銭に当たるといって差し支えない。
エ. 買戻特約の登記に後れて目的不動産に設定された抵当権は，買戻しによる目的不動産の所有権の買戻権者への復帰に伴って消滅するが，抵当権設定者である買主やその債権者等との関係においては，買戻権行使時まで抵当権が有効に存在していたことによって生じた法的効果までが買戻しによって覆滅されることはないと解すべきである。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．ア エ",c4:"４．イ ウ",c5:"５．イ エ",c6:"６．ウ エ",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2008",num:"14",subject:"min",q:`Ａが土地所有者Ｂから賃借した土地上に所有している甲建物についてＣのために抵当権を設定した場合に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか 
ア. Ａ及びＢは，土地賃貸借契約を合意解除した。この合意解除に基づいて土地賃貸借契約が終了したことを，ＢはＣに対抗することができない。
イ. Ａの不在期間中に，Ｄが甲建物を不法に占有した場合，Ｄが不法占有することにより，抵当不動産の交換価値の実現が妨げられ抵当権者の優先弁済請求権の行使が困難となるような状態にあるときは，ＣはＡのＤに対する妨害排除請求権を代位行使して，Ｄに対して直接自己に甲建物を明け渡すよう求めることができる。
ウ. ＡがＢに対し，甲建物を売り渡した後，抵当権が実行され，甲建物をＥが買い受けた場合，法定地上権は成立しない。
エ. ＡがＦに対して，抵当権の実行としての競売手続を妨害する目的で甲建物を賃貸した場合，その占有により抵当不動産の交換価値の実現が妨げられて抵当権者の優先弁済請求権の行使が困難となるような状態のときでも，Ｃは抵当権に基づく妨害排除請求権を行使してＦに対し直接自己に甲建物の明渡しを求めることはできない。
オ. Ａは，甲建物に対する抵当権設定後，長期にわたりＢに対する賃料の支払を怠った。土地賃借権は，従たる権利として抵当権の目的となっているから，Ｂは土地賃貸借契約を解除することができない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2008",num:"15",subject:"min",q:`注意義務に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか 
ア. 質権者は，善良な管理者の注意をもって質物を占有しなければならない。
イ. 無償受寄者は，善良な管理者の注意をもって寄託物を保管しなければならない。
ウ. 株式会社の社外取締役は，善良な管理者の注意をもって任務を遂行しなければならない。
エ. 限定承認をした相続人は，相続債権者及び受遺者への弁済を終わるまで，善良な管理者の注意をもって相続財産を管理しなければならない。
オ. 親権者は，善良な管理者の注意をもって子の財産を管理しなければならない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2008",num:"16",subject:"min",q:`債権者代位権と詐害行為取消権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか 
ア. 債権者代位権を行使するためには，代位行使する権利よりも前に被保全債権が成立している必要はないが，詐害行為取消権を行使するためには，取消しの対象となる詐害行為は，被保全債権発生の後になされたものであることが必要である。
イ. 詐害行為の成立には，債務者がその債権者を害することを知って法律行為をしたことを要するが，必ずしも害することを意図してしたことを要しない。
ウ. 債権者が債務者に対する金銭債権に基づき債務者の第三債務者に対する金銭債権を代位行使することができるのは，自己の債権額の範囲内に限られる。
エ. 詐害行為取消権は，訴訟において，抗弁としても行使することができる。
オ. 法律行為の時に債権者を害する状態であれば，その後の事情によって債権者を害さないこととなっているとしても，詐害行為取消権を行使することができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2008",num:"17",subject:"min",q:`次の【見解】を有する裁判所が，次の【事案】について，詐害行為取消しを認容すべきとの判断に至った場合，Ｙに命ずべき給付等の内容として正しいものは 後記１から５までのうちどれか。
【見 解】
共同で抵当権の目的とされた不動産の全部又は一部の売買契約が詐害行為に該当する場合において，詐害行為の後に弁済によって抵当権が消滅したときは，詐害行為の目的不動産の価額から当該不動産が負担すべき抵当権の被担保債権の額を控除した残額の限度で売買契約を取り消し，その価格による賠償を命ずるべきであり，価格賠償の額は，詐害行為の目的不動産の価額から，共同抵当の目的とされた各不動産の価額に応じて抵当権の被担保債権額を案分して詐害行為の目的不動産について得られた額を控除した額である。
【事 案】
債務超過にあったＡは，その所有する甲土地（時価４０００万円）乙土地（時価１０００万円）及び丙土地（時価１０００万円）をＹに廉価で売り渡した。上記売買当時，甲土地及び乙土地にはＢ信用金庫の共同抵当権が設定されていたが，上記売買後その被担保債権３０００万円が全額弁済され，当該抵当権の設定登記は抹消された。その後，Ａの債権者（債権額３５００万円）Ｘは，詐害行為取消権に基づいて上記売買契約を取り消し，所有権移転登記の抹消登記手続等を求めた。`,c1:"１．甲土地の売買については２０００万円の限度で，乙土地の売買については５００万円の限度で取り消し，丙土地の売買については全部を取り消して，Ｙに対し２５００万円の価格賠償及び丙土地の現物返還を命ずる。",c2:"２．乙土地及び丙土地の各売買について全部を取り消して，Ｙに対しこれらの土地の現物返還を命ずる。",c3:"３．甲土地，乙土地及び丙土地の各売買について全部を取り消して，Ｙに対しこれらの土地の現物返還を命ずる。",c4:"４．甲土地の売買については１０００万円の限度で取り消し，乙土地及び丙土地の各売買については全部を取り消して，Ｙに対し１０００万円の価格賠償並びに乙土地及び丙土地の現物返還を命ずる。",c5:"５．甲土地の売買については１６００万円の限度で，乙土地の売買については４００万円の限度で取り消し，丙土地の売買については全部を取り消して，Ｙに対し２０００万円の価格賠償及び丙土地の現物返還を命ずる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2008",num:"18",subject:"min",q:`保証（連帯保証を除く）に関する次のアからオまでの各記述のうち，誤っているものを組み合わ。せたものは，後記１から５までのうちどれか。
ア. 保証契約は，書面でしなければ効力を生ぜず，電磁的記録によってされたときは，書面によってされたものとみなされる。
イ. 保証人に対する履行の請求による時効の中断は，主たる債務者に対しても効力を生ずる。
ウ. 保証人が債権者との間で保証債務についての違約金を約定した場合には，保証人の負担は，主たる債務者の負担より重くなることがある。
エ. 主たる債務者の委託を受けて保証をした者は，主たる債務が弁済期にあるときは，自ら弁済をする前であっても主たる債務者に対して求償権を行使することができる。
オ. 金銭消費貸借上の債務を主たる債務とする法人間の根保証契約において，極度額の定めがないときは，その根保証契約は効力を生じない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2008",num:"19",subject:"min",q:`弁済の目的物の供託（以下「弁済供託」という。）に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア. 弁済供託は，債権者が弁済の受領を拒むとき，債権者が弁済を受領することができないとき，又は債務者が過失なく債権者を確知することができないときに，することができる。
イ. 弁済供託がされた債務は，債権者が供託物を受領した時に消滅する。
ウ. 債務者は，弁済供託をした後は，債権者の同意がなければ供託物を取り戻すことができない。
エ. 金銭又は有価証券の弁済供託をするには，債務の履行地の供託所にしなければならない。
オ. 債務者以外の者は，弁済供託をすることができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2008",num:"20",subject:"min",q:`相殺に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 自働債権及び受働債権がともに不法行為による損害賠償債権の場合，いずれの当事者からも相殺をすることができない。
イ. 建物賃借人Ａは，賃貸人Ｂに対する賃料債務を消滅させるため，Ａを売主，Ｂを買主とする動産の売買における引渡債務の履行を提供しなくても，履行期にあるその売買代金債権を自働債権として相殺をすることができる。
ウ. 賃貸借契約が賃料不払のため適法に解除された場合であっても，その後，賃借人の相殺の意思表示により賃料債務がさかのぼって消滅したときは，解除も遡及的に効力を失う。
エ. 時効により消滅した他人の債権を譲り受け，これを自働債権として相殺をすることは許されない。
オ. 相殺契約においては，両債権が同種の目的を有することは必要ではない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2008",num:"21",subject:"min",q:`売主Ｘと買主Ｙとの間の売買契約において手付が交付された場合に関する次のアからエまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から６までのうちどれか。
ア. ＸＹ間の売買契約書に，違約をした場合には手付の没収又は倍返しをするという約定があったとしても，それだけでは手付による解除を排除する意思表示があったとはいえない。
イ. Ｙが手付を放棄して売買契約を解除したと訴訟において主張するためには，ＹがＸとの間で売買契約に付随して解約手付の趣旨で手付金を交付する合意をしたことを主張する必要がある。
ウ. Ｙが手付を放棄して契約を解除した場合，Ｘ及びＹに損害賠償義務は生じない。
エ. Ｘが手付による解除の抗弁を訴訟において主張する場合，Ｙは，ＸとＹが解除権の留保をしない旨の合意をしたこと，又は，Ｘ若しくはＹがＸの解除の意思表示に先立ち履行に着手したことを再抗弁とすることができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．ア エ",c4:"４．イ ウ",c5:"５．イ エ",c6:"６．ウ エ",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2008",num:"22",subject:"min",q:"売買契約に基づき売買代金の支払を請求する場合に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．原告は，請求原因において被告との間で売買契約を締結したことを主張する必要があるが，売買契約締結当時，その目的物が原告の所有であったことを主張する必要はない。",c2:"２．法律行為の附款である条件をそれが付された法律行為の成立要件とは区別される可分なものと考える見解に立った場合，売買契約に停止条件が付されているときは，停止条件が成就したことが再抗弁となる。",c3:"３．法律行為の附款である期限をそれが付された法律行為の成立要件とは区別されない不可分なものと考える見解に立った場合，売買契約に弁済期が定められているときは，弁済期が到来していないことが抗弁となる。",c4:"４．被告が抗弁として同時履行の抗弁を主張した場合，原告は，代金支払を目的物引渡しの先履行とする旨の合意があったことを再抗弁として主張することができる。",c5:"５．被告が抗弁として同時履行の抗弁を主張した場合，原告は，目的物引渡しにつき，その履行の提供をしたことを再抗弁として主張することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"35"},{year:"2008",num:"23",subject:"min",q:"準消費貸借契約に関する次の１から５までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．旧債務に付着していた同時履行の抗弁権が消滅するか否かは，準消費貸借契約を締結した当事者において，新旧債務の同一性を維持する意思があるか否かによって決定される。",c2:"２．旧債務の消滅時効期間が２年間である場合，準消費貸借契約の成立によって発生する新債務の消滅時効期間は，準消費貸借契約の締結が商行為に該当するとしても２年間である。",c3:"３．将来において発生する金銭債務を目的としても，準消費貸借契約は成立する。",c4:"４．既存の消費貸借契約上の債務を旧債務としても，準消費貸借契約は成立する。",c5:"５．準消費貸借契約は，目的とされた旧債務が存在しないときにはその効力を生じない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2008",num:"24",subject:"min",q:"賃貸借契約に関する次の１から５までの各記述のうち 誤っているものを２個選びなさい。",c1:"１．賃貸借契約は有償契約であり，賃料を伴う点で使用貸借と区別することができるから，借主が金銭を支払うことを約束して契約を締結すれば，その額の多寡にかかわらず賃貸借契約が成立する。",c2:"２．判例の趣旨に照らすならば，不動産の賃借人が賃貸借について対抗要件を具備した場合には，賃借物を権原なく占有する第三者に対し，賃借権に基づき妨害排除請求権を行使することができる。",c3:"３．建物所有を目的とする土地の賃借人が，当該土地上に建物を建築した後，賃貸人の承諾を得ずに建物を第三者に賃貸し，第三者が実際に建物の使用を開始した場合には，土地の賃貸人は，土地の賃借人に対し，土地の無断転貸を理由として土地の賃貸借契約を解除することができる。",c4:"４．賃貸借契約の目的物である建物の全部が，契約成立後に不可抗力によって滅失したときは，賃貸借契約は履行不能により終了する。",c5:"５．建物の賃借人が 賃貸人が修繕すべき屋根からの雨漏りを自ら費用を出して修繕したときは，，賃貸人に対して，直ちに修繕費用全額の償還を請求することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"13"},{year:"2008",num:"25",subject:"min",q:"敷金の取扱いに関する次の１から５までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．建物賃貸借契約において，当該建物の所有権移転に伴い賃貸人たる地位に承継があった場合には，旧賃貸人に差し入れられた敷金は，未払賃料債務があればこれに当然充当され，残額についてその権利義務関係が新賃貸人に承継される。",c2:"２．建物賃貸借における敷金は，賃貸借終了後建物明渡義務履行までに生ずる賃料相当額の損害金債権その他賃貸借契約により賃貸人が賃借人に対して取得する一切の債権を担保するものであり，敷金返還請求権は，賃貸借終了後建物明渡完了の時においてそれまでに生じた上記の一切の被担保債権を控除しなお残額がある場合に，その残額につき具体的に発生する。",c3:"３．土地賃借権が賃貸人の承諾を得て旧賃借人から新賃借人に移転された場合であっても，敷金に関する敷金交付者の権利義務関係は，敷金交付者において賃貸人との間で敷金をもって新賃借人の債務の担保とすることを約し又は新賃借人に対して敷金返還請求権を譲渡するなど特段の事情のない限り，新賃借人に承継されない。",c4:"４．敷金が授受された賃貸借契約に係る賃料債権につき抵当権者が物上代位権を行使してこれを差し押さえた場合において，当該賃貸借契約が終了し，目的物が明け渡されたとしても，それまでに生じた賃料債権が，敷金の充当によって消滅することはない。",c5:"５．建物賃貸借終了に伴う賃借人の建物明渡債務と賃貸人の敷金返還債務とは，特別の約定のない限り，同時履行の関係に立たず，賃貸人は，賃借人から建物明渡しを受けた後に敷金残額を返還すれば足りる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2008",num:"26",subject:"min",q:"民法上の契約における報酬に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．雇用契約は有償契約であり，報酬の支払時期は，後払いが原則であるが，前払の特約を結ぶこともできる。",c2:"２．請負契約は有償契約であり，報酬は，目的物の引渡しを要するときはその引渡しと引換えに，物の引渡しを要しないときは仕事の完成と引換えに，支払わなければならない。",c3:"３．委任契約は無償契約を原則とするが，特約があれば，受任者は委任者に対して報酬を請求することができる。",c4:"４．寄託契約において報酬の合意をした場合，寄託が不可抗力によって履行の中途で終了したときは，受寄者は，既にした履行の割合に応じて報酬を請求することができる。",c5:"５．労働者は，その有する報酬債権の担保として，使用者の総財産について先取特権を有する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2008",num:"27",subject:"min",q:`民法上の組合に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア. 組合の業務執行を委任する場合，業務執行者は組合員の中から選ばなければならない。
イ. 組合員は，除名された場合であっても，持分の払戻しを受けることができる。
ウ. 組合員は，組合の債権者に対し，互いに連帯して債務を履行する責任を負う。
エ. 組合員が死亡した場合，組合員たる地位は相続により承継される。
オ. 組合員は清算前に組合財産の分割を求めることができず，また，組合員が組合財産についての持分を処分しても，その処分を組合に対抗することができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2008",num:"28",subject:"min",q:`不法行為に基づく損害賠償を請求した場合の被告の抗弁に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 原告が責任無能力者を監督する法定の義務を負う者を被告として，民法第７１４条第１項の責任無能力者の監督義務者の責任に基づいて損害賠償を請求した場合，被告は，監督義務を怠らなかったことを抗弁として主張することができる。
イ. 原告が責任無能力者を監督する法定の義務を負う者を被告として，民法第７１４条第１項の責任無能力者の監督義務者の責任に基づいて損害賠償を請求した場合，被告は，監督義務者のほかに代理監督者がいることを抗弁として主張することができる。
ウ. 原告がＡの不法行為責任の成立を前提とした上でＡの使用者を被告として，民法第７１５条第１項の使用者の責任に基づいて損害賠償を請求した場合，被告は，Ａの選任監督上相当と認められる注意義務を尽くしたことを抗弁として主張することができる。
エ. 原告がＡの不法行為責任の成立を前提とした上でＡの代理監督者を被告として，民法第７１５条第２項の代理監督者の責任に基づいて損害賠償を請求した場合，被告は，Ａの選任監督上相当と認められる注意義務を尽くしたとしてもＡの加害行為の発生を避けられなかったことを抗弁として主張することができる。
オ. 原告が土地の所有者を被告として，民法第７１７条第１項ただし書の土地の工作物等の所有者の責任に基づいて損害賠償を請求した場合，被告は，結果の発生を防止するために必要な注意義務を尽くしたことを抗弁として主張することはできないが，自己の責任無能力を抗弁として主張することはできる。`,c1:"１．ア ウ",c2:"２．イ エ",c3:"３．イ オ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2008",num:"29",subject:"min",q:`不法行為における過失相殺に関する次のアからエまでの各記述のうち，判例の趣旨に照らし誤っているものはどれか 
ア. 夫が妻を同乗させて運転する自動車と第三者が運転する自動車とが，第三者と夫の双方の過失が競合して衝突したため，負傷した妻が第三者に対し損害賠償を請求した場合には，特段の事情のない限り，第三者の賠償額を定めるにつき夫の過失を被害者側の過失として斟酌することができる。
イ. 被害者が未成年である場合，その過失を斟酌するには，被害者たる未成年者に行為の責任を弁識する能力が必要である。
ウ. 被害者が幼児である場合における被害者側の過失とは，被害者と身分上ないしは生活関係上一体をなすとみられるような関係にある者の過失をいうのであり，両親より幼児の監護を委託された保育園の被用者の過失は含まれない。
エ. 身体に対する加害行為と発生した損害との間に相当因果関係がある場合において，その損害が加害行為のみによって通常発生する程度や範囲を超えるものであり，かつ，その損害の拡大について被害者の心因的要因が寄与しているときは，損害賠償額を定めるにつき，過失相殺の規定を類推適用して，損害の拡大に寄与した被害者の心因的要因を斟酌することができる。`,c1:"１．ア",c2:"２．イ",c3:"３．ウ",c4:"４．エ",c5:"５．誤っているものはない",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2008",num:"30",subject:"min",q:`重大な過失に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア. 建物の賃借人が失火によりその建物を焼失させ，その返還義務を履行できなくなった場合，賃借人は，故意がなく，かつ，重大な過失がなければ，賃貸人に対し損害賠償責任を負わない 。
イ. 心裡留保の場合，相手方が表意者の真意を知らなかったとしても，知らないことについて重大な過失がなければ，その意思表示は有効である。
ウ. 被用者のした取引行為が，その行為の外形からみて，使用者の事業の範囲内に属するものと認められる場合であっても，その行為が被用者の職務権限内において適法に行われたものでなく，かつ，その行為の相手方がその事情を知りながら，又は，重大な過失によりそれを知らないで，取引をしたときは，取引の相手方である被害者は，使用者に対し，その損害の賠償を請求することができない。
エ. 債権の譲渡禁止特約がある場合，債権の譲受人が，その特約の存在を知らなかったとしても，これについて重大な過失があるときは，その債権を取得することができない。
オ. 債権の準占有者に対する弁済がその効力を有するのは，弁済者が善意であり，かつ，重大な過失がなかった場合である。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2008",num:"31",subject:"min",q:"内縁配偶者と第三者との関係に関する次の１から５までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．建物賃借人Ａの内縁の妻Ｂは，Ａが死亡した場合，Ａの相続人と並んで同建物の共同賃借人となるので，同建物に居住する権利を主張することができる。",c2:"２．不法行為による生命侵害の場合，被害者Ａの配偶者Ｂは，Ｂに対する加害者の故意過失を証明することなく，固有の慰謝料を請求することができるが，被害者Ｃの内縁配偶者Ｄは，Ｄに対する加害者の故意過失を証明した場合に限り，慰謝料を請求することができる。",c3:"３．不法行為による生命侵害の場合，被害者Ａの扶養を受けていた内縁配偶者Ｂは，Ａに相続人（Ａの兄弟）がいる場合であっても，ＢがＡから受けることができた将来の扶養利益の喪失を損害として，加害者に対し，その賠償を請求することができる。",c4:"４．内縁夫婦が夫婦共有名義の建物に同居していたところ，内縁の夫Ａが死亡した場合，建物にそのまま居住し続ける内縁の妻Ｂは，Ａの相続人からの建物使用に係る不当利得返還請求を拒絶することができない。",c5:"５．内縁夫婦ＡＢの一方Ｂと日常の家事に関する取引をした第三者は，ＢにＡの代理権があることを主張して，Ａにその取引に基づく債務の履行を請求することができない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2008",num:"32",subject:"min",q:"実親子関係に関する次の１から５までの各記述のうち 誤っているものはどれか。",c1:"１．未認知の１８歳の子が婚姻した後，父が子を認知するためには，子の承諾が必要である。",c2:"２．父に認知された子が父と母の婚姻によって準正された後，その婚姻が重婚を理由に取り消されても，子は嫡出子の身分を失わない。",c3:"３．父が胎児を認知するためには，母の承諾が必要であるが，父が認知しない場合は，母は胎児を代理して認知の訴えを提起することができる。",c4:"４．未成年者が認知をする場合でも，法定代理人の同意は不要である。",c5:"５．夫が，婚姻外でもうけた子を妻の子として嫡出子出生届をしたとき，嫡出否認の訴えによって父子関係を争うことはできない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2008",num:"33",subject:"min",q:"養子縁組に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．夫の氏を称する婚姻をしている夫婦が共同して養親となった場合において，養子は養父とのみ離縁することができるが，縁氏の続称を選択した場合を除き，離縁によって縁組前の氏に復する。",c2:"２．父がその死の直前に遺言により１４歳の少年を認知したとき，その父の親は，少年の母の承諾のみによって少年を養子にすることができる。",c3:"３．離縁は，離縁時に養子がまだ１８歳であっても，家庭裁判所の許可は不要であり，養親と養子の離縁後にその法定代理人となるべき者との協議ですることができる。",c4:"４．特別養子縁組の離縁は，民法の定める事由が存在する場合に，養子，養親，実父母又は検察官の請求により，家庭裁判所が行う。",c5:"５．特別養子縁組の養親となる者は配偶者のある者でなければならず，夫婦の一方は必ず他の一方と同時に養親にならなければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2008",num:"34",subject:"min",q:"相続の対象に関する次の１から５までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．使用貸借の借主が死亡した場合，相続人が使用借権を相続する。",c2:"２．賃貸借契約に基づく賃借人の債務を保証した者の相続人は，相続開始後に生じた賃料債務について履行をする責任を負わない。",c3:"３．不法行為による生命侵害の慰謝料請求権は，被害者が生前に請求の意思を表明していなければ，相続人には承継されない。",c4:"４．被相続人が第三者から与えられていた代理権は，相続人に承継されない。",c5:"５．相続人は，被相続人の占有についての善意・悪意の地位を当然に承継する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2008",num:"35",subject:"min",q:`遺言に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 公正証書によって遺言をするには，少なくとも一人の証人の立会いがなければならない。
イ. 成年に達した者でなければ遺言をすることはできない。
ウ. 子に建物を遺贈する旨の遺言をした遺言者が，その後，配偶者にその建物を贈与した場合，その建物の遺贈に関する部分については，遺言を撤回したものとみなされる。
エ. 推定相続人Ａの配偶者と子は遺言の証人になることができないが，Ａの兄弟姉妹は遺言の証人となることができる。
オ. 公正証書による遺言を除き，遺言書の保管者は，相続の開始を知った後，遅滞なく，これを家庭裁判所に提出して，その検認を請求しなければならない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2008",num:"36",subject:"syo",q:"株式会社の規律に関する次の１から５までの各記述のうち，会社債権者の保護を目的としないものはどれか。 ",c1:"１．株式会社は，純資産額が３００万円を下回る場合には，剰余金の配当をすることができないものとされている。",c2:"２．株式会社は，一定の期間，計算書類を本店に備え置かなければならないものとされている。",c3:"３．株式会社による自己の株式の取得は，一定の場合を除き，対価として交付する財産の帳簿価額が分配可能額を超えない範囲内でのみ，行うことができるものとされている。",c4:"４．会社法上の公開会社は，第三者割当ての方法により特に有利な金額で募集株式を発行する場合，株主総会の特別決議によって募集事項を定めなければならないものとされている。",c5:"５．会計監査人設置会社においては，計算書類は，会計監査人の監査を受けなければならないものとされている。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2008",num:"37",subject:"syo",q:`株式会社の設立に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア. 判例によれば，設立費用に属する取引については性質上当然に成立後の会社に帰属し，会社が定款記載の設立費用の額を超えて弁済した場合，当該会社は，その超過額について発起人に求償することができる。
イ. 発起設立の場合において，発起人は，払込みの取扱いをした銀行に対し，払い込まれた金額に相当する金銭の保管に関する証明書の交付を請求することができる。
ウ. 発起人は，自らが行った現物出資の目的財産の価額が定款に定めた額に著しく不足する場合でも，職務を行うについて注意を怠らなかったことを証明すれば，会社に対して当該不足額を支払う義務を免れることができる。
エ. 設立を無効とする判決が確定しても，判決の効力には遡及効はなく，当該会社について清算手続が開始されることになる。
オ. 会社が発行することのできる株式の総数は，公証人の認証を受ける時に定款に記載され，又は記録されている必要はないが，会社成立の時までには定款で定めなければならない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2008",num:"38",subject:"syo",q:"株式の譲渡に関する次の１から５までの各記述のうち 誤っているものはどれか。",c1:"１．譲渡制限株式の株主から当該株式の譲渡について承認を求められた場合において，会社が当該株式を自ら取得することを通知したときは，当該通知を受けた当該株主が改めてこれを承諾した時に当該株式の売買契約が成立する。",c2:"２．会社は，発行する株式の全部又は一部の株式の内容として，譲渡による当該株式の取得について当該会社の承認を要する旨の定めを設けることができる。",c3:"３．会社法上の公開会社でない株券発行会社において，株券が発行されていないときは，株式を譲渡しようとする株主は，会社に対し，株券の発行を請求する必要がある。",c4:"４．株券発行会社の譲渡制限株式の譲渡について，株式取得者は，会社に対し，当該株式に係る株券を提示して，当該株式を取得したことについて承認をするか否かの決定をすることを請求することができる。",c5:"５．譲渡制限株式の譲渡について，会社がこれを承認しない旨の決定をするときは当該会社又は指定買取人が買い取ることを会社に対して請求した株主は，指定を受けた旨及び買い取る対象株式の数の通知を指定買取人から受けたときは，その後は，指定買取人の同意を得た場合に限り，その請求を撤回することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2008",num:"39",subject:"syo",q:"自己の株式の取得に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．取得請求権付株式の取得について，会社が取得の対価として交付する当該会社の他の株式以外の財産の帳簿価額が分配可能額を超えてはならないという規律は，設けられていない。",c2:"２．取締役会設置会社は，市場において行う取引により当該会社の株式を取得することを取締役会の決議によって定めることができる旨を定款で定めることができる。",c3:"３．会社は，株主に株式の割当てを受ける権利を与えて募集株式の割当てをする場合には，自己株式に対して募集株式の割当てをすることができる。",c4:"４．内容の異なる２以上の種類の株式を発行している会社は，株主総会の決議により，そのうち１の種類の株式だけを取得することができる。",c5:"５．自己の株式の取得が行われた場合，貸借対照表上は，取得の対価として交付された財産の帳簿価額相当額が純資産の部（株主資本）から控除される形で表示される。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"13"},{year:"2008",num:"40",subject:"syo",q:`株主総会に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 会社法上の公開会社でない取締役会設置会社においては，株主総会に出席しない株主が書面又は電磁的方法によって議決権を行使することができることとする旨を定めたときを除き，株主総会の招集通知は，当該株主総会の日の１週間前までに，発しなければならない。
イ. 会社は，株主総会に係る招集の手続及び決議の方法を調査させるため，当該株主総会に先立ち，裁判所に対し，検査役の選任の申立てをすることができる。
ウ. 株主総会は，定款に別段の定めがある場合を除き，本店の所在地又はこれに隣接する地に招集しなければならない。
エ. 株主は，株主総会において，自らが議決権を行使することができない事項については，当該株主総会の目的である事項につき議案を提出することができない。
オ. 株主総会で株主から特定の事項について説明を求められた場合において，当該事項について説明をするために調査をすることが必要であるときは，当該株主が株主総会の日より相当の期間前に当該事項を当該会社に通知していたとしても，取締役は，当該株主総会において，説明をする必要はない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2008",num:"41",subject:"syo",q:`取締役に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 親会社の代表取締役は，その子会社である株式会社の社外取締役となることができない。
イ. 取締役の報酬として金銭でないものについてその具体的な内容を定める議案を株主総会に提出した取締役は，当該株主総会において，当該内容を相当とする理由を説明しなければならない。
ウ. 委員会設置会社でない会社法上の公開会社の取締役の任期は，選任後２年以内に終了する事業年度のうち最終のものに関する定時株主総会の終結の時までであり，定款又は株主総会の決議によってその任期を短縮することはできるが，これを伸長することはできない。
エ. 取締役を解任する株主総会の決議は，定款に別段の定めがない限り，議決権を行使することができる株主の議決権の過半数を有する株主が出席し，出席した当該株主の議決権の３分の２以上に当たる多数をもって行わなければならない。
オ. 株主総会の決議により取締役が解任された場合において，当該決議に取消事由が存するときは，当該決議の取消しにより取締役となる者は，当該決議の日から３か月以内に，訴えをもって当該決議の取消しを請求することができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2008",num:"42",subject:"syo",q:`甲株式会社は，資本金の額が３億円の取締役会設置会社である。甲株式会社には，Ａ，Ｂ，Ｃ，Ｄ，Ｅ及びＦの６名の取締役が置かれ，代表取締役にはＡが選定されている。甲株式会社に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア. 判例によれば，代表取締役Ａの解職の議案が提出されている取締役会において，Ａは，その議決に加わることができない。
イ. 甲株式会社の取締役会で特定の決議がされた場合において，当該決議に参加したＤが当該取締役会の議事録に異議をとどめなかったときは， Ｄは，その決議に賛成したものと推定される。
ウ. 重要な財産の処分及び譲受け並びに多額の借財についての取締役会の決議につき，Ａ，Ｂ及びＣの３名による決議をもって行うことができる旨を取締役会で定める場合，この３名のうち１名は社外取締役でなければならない。
エ. 甲株式会社は，定款の定めにより，取締役会の決議の定足数を議決に加わることのできる取締役の３分の１以上とすることができる。
オ. 甲株式会社の取締役会は，取締役の職務の執行が法令及び定款に適合することを確保するための体制の整備の決定をＡに委任することができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2008",num:"43",subject:"syo",q:`監査役又は監査役会に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア. 株式会社の監査役は，当該会社の子会社の取締役を兼ねることができない。
イ. 監査役会設置会社においては，監査役は，３人以上で，その過半数は，社外監査役でなければならない。
ウ. 監査役会設置会社において，取締役が会計監査人の報酬を定める場合には，監査役会の同意を得なければならない。
エ. 監査役は，正当な理由がない限り，株主総会の特別決議によっても，解任することができない。
オ. 監査役会において会社の業務及び財産の状況の調査の方法の決定をした場合，監査役は，その権限の行使に当たり，当該決定に従わなければならない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2008",num:"44",subject:"syo",q:`会計参与に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 会計参与は，公認会計士若しくは監査法人又は税理士若しくは税理士法人でなければならない。
イ. 監査役設置会社及び委員会設置会社でない株式会社において，会計参与は，その職務を行うに際して取締役の職務の執行に関し不正の行為又は法令若しくは定款に違反する重大な事実があることを発見したときは，遅滞なく，これを株主に報告しなければならない。
ウ. 株式会社の取締役は，当該会社の親会社の会計参与となることができる。
エ. 会計参与も，株主代表訴訟の対象となる。
オ. 委員会設置会社でない株式会社において，会計参与は，計算書類及びその附属明細書の作成に際し，代表取締役と意見が一致しないときは，その旨を当該計算書類又は附属明細書に記載することができる。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2008",num:"45",subject:"syo",q:`委員会設置会社に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 取締役は，執行役を兼ねることはできるが，使用人を兼ねることはできない。
イ. 指名委員会は，株主総会に提出する取締役及び執行役の選任及び解任に関する議案の内容を決定する。
ウ. 監査委員は，だれでも，監査委員会の職務を執行するため必要があるときは，当該委員会設置会社の子会社に対して事業の報告を求め，又はその子会社の業務及び財産の状況の調査をすることができる。
エ. 執行役が一人しか置かれていないときは，その執行役が代表執行役となる。
オ. 報酬委員会は，取締役及び執行役の個人別の報酬の内容を決定する。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2008",num:"46",subject:"syo",q:"株式会社の計算に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．資本準備金の額の減少の手続に瑕疵がある場合，その無効は，会社法が定める会社の組織に関する行為の無効の訴えをもってのみ，主張することができる。",c2:"２．資本準備金は，欠損てん補のためにその額を減少することができる。",c3:"３．剰余金の配当の制限の基準となる分配可能額の算定に当たっては，最終事業年度の末日後の剰余金の変動も含められることがある。",c4:"４．資本金の額は，登記事項ではない。",c5:"５．設立に際して株主となる者が当該株式会社に対して払込み又は給付をした財産の額のうち資本金として計上しないこととした額は，資本準備金として計上しなければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"14"},{year:"2008",num:"47",subject:"syo",q:"株式会社における事業の譲渡に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．事業の全部の譲渡が行われる場合においては，譲渡をする会社が譲受けをする会社の特別支配会社であるときであっても，譲受けをする会社において，株主総会の決議による承認を受けなければならない。",c2:"２．事業の全部の譲渡をしても，当該譲渡をした会社は，当然には消滅しない。",c3:"３．事業の譲受けをした会社が当該譲受けに係る財産の移転につき第三者に対抗するには，個々の財産についての対抗要件を具備しなければならない。",c4:"４．事業の譲渡において 当該事業に含まれる特定の債務を承継しない旨を事業譲渡契約で定め，，この事業譲渡を承認する株主総会の決議があった場合，当該債務は承継されない。",c5:"５．事業の譲渡においては，事業の全部の譲受けをする場合を除き，譲受けをする会社の株主には，株式買取請求権は認められていない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2008",num:"48",subject:"syo",q:`社債に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか 
ア. 合名会社は，社債を発行することができる。
イ. 社債管理者は，社債権者のために，公平かつ誠実に社債の管理を行わなければならない。
ウ. 社債権者集会の決議は，裁判所の認可を受けなければ，その効力を生じない。
エ. 社債管理者は，社債に係る債権の実現を保全するために必要があるときは，裁判所の許可を得て，裁判上の行為をすることができる。
オ. 募集社債の総額が最終事業年度の末日における貸借対照表上の純資産額を超える社債の発行をするためには，株主総会の決議によらなければならない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2008",num:"49",subject:"syo",q:"個人の商人（小商人に当たる者を除く。）の商号に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。 ",c1:"１．商号は，営業とともにする場合には譲渡することができるが，営業を廃止する場合には譲渡することができない。",c2:"２．他人が登記した商号は，同じ市町村内において，同一の営業のために登記することはできない。",c3:"３．商号の譲渡は，その登記をしなくとも，悪意の第三者に対抗することができる。",c4:"４．不正の目的をもって，他の商人であると誤認されるおそれのある商号を使用している者があるときは，これにより営業上の利益を侵害されるおそれがある商人は，その名称を商号として登記していなくとも，その者に対し，その侵害の予防を請求することができる。",c5:"５．商号は，相続の目的となる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"45"},{year:"2008",num:"50",subject:"syo",q:`個人の商人が選任する支配人に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか 
ア. 支配人は，営業所のうち支店に置かれるものであり，本店に置くことはできない。
イ. 支配人は，弁護士でなくとも，商人に代わってその営業に関する裁判上の行為をする権限を有する。
ウ. 支配人は，商人の許可を受けないで，自ら営業を行うことや他の商人の使用人となることができない。
エ. 支配人を選任したものの，その登記をしていない場合は，商人は，その支配人が当該商人のためにすることを示して行った取引の相手方に対し，当該取引が有効であると主張することができない。
オ. 判例によれば，営業所としての実質がない場所を営業所と称し，そこに置いた使用人に支配人類似の名称を付している場合には，この使用人は表見支配人に該当する。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2008",num:"51",subject:"syo",q:`商行為によって生じた債務に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 当該債務を数人の者が負担する場合であっても，その債務が一人のために商行為となる行為によって負担したものであるときは，当該債務は，連帯債務とはならない。
イ. 当該債務が附属的商行為によって生じたものであっても，商法に別段の定めがある場合及び他の法令に５年間より短い時効期間の定めがある場合を除き，債権者が５年間行使しないときは，当該債務に係る債権は，時効によって消滅する。
ウ. 判例によれば，当該債務が商行為によって生じた債務である限り，その債務者又は債権者のいずれのために商行為となるものであるかを問わず，その債務に関する法定利率は，年６分である。
エ. 当該債務に係る債権が指図債権であっても，取引の性質又は当事者の意思表示によってその履行をすべき場所が定まらない限り，債権者の現在の営業所で履行しなければならない。
オ. 当該債務が商人間における金銭の消費貸借によって生じたものであるときは，貸主は，約定をしなくとも，当該債務につき，法定利率による利息を請求することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2008",num:"52",subject:"syo",q:`匿名組合に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 匿名組合契約は，有償，双務の諾成契約である。
イ. 匿名組合員の出資は，すべて営業者の財産に属し，契約当事者の共有財産となるものではない。
ウ. 匿名組合契約においては，匿名組合員に対して利益の分配をしない特約をすることは許されないが，匿名組合員が損失の負担をしない特約は可能である。
エ. 匿名組合員は，労務をその出資の目的とすることができる。
オ. 匿名組合契約は，匿名組合員又は営業者が死亡し，又は破産手続開始の決定を受けたことにより，終了する。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2008",num:"53",subject:"syo",q:`為替手形，約束手形及び小切手に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア. 為替手形においては，支払人が引受けをした場合に主たる債務者となるが，小切手においては，支払人が引受けをすることは禁止されており，主たる債務者はいない。
イ. 為替手形及び約束手形の満期は，一覧払，一覧後定期払，日附後定期払及び確定日払の４種類があるが，小切手の満期は，一覧払及び確定日払に限られる。
ウ. 為替手形及び小切手は，他人に支払を委託する証券であり，支払人が不可欠であるが，約束手形は，自ら支払を約束する証券であるから，支払人は存在しない。
エ. 為替手形及び約束手形については，受取人を記載しない無記名式は許されないが，小切手については，無記名式も許され，指図式小切手とみなされる。
オ. 約束手形については，第三者方払は振出人の住所地以外とすることが可能であるが，為替手形及び小切手については，第三者方払は支払人の住所地以外とすることはできない。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2008",num:"54",subject:"syo",q:"約束手形に関する次の１から５までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．乙が代理権を有しないにもかかわらず「甲代理人乙」名義で約束手形を振り出した場合，手形所持人は，乙に対し，甲に表見代理が成立するときであっても，手形法が定める無権代理人の責任を追及することができる。",c2:"２．乙が何ら権限を有しないにもかかわらず「甲」名義で約束手形を振り出した場合，乙は，手形所持人に対し，手形法が定める無権代理人の責任の規定の類推適用により，責任を負う。",c3:"３．甲が乙に自己の名称を使用して営業をすることを許諾していた場合において，乙が甲の名称を使用して営業をすることがなかったときは，甲は，許諾した営業の範囲内と認められる営業のために乙が「甲」名義で振り出した約束手形につき，責任を負わない。",c4:"４．甲株式会社の代表取締役乙が約束手形の裏書欄に「甲株式会社」と記載し，会社印を押印しただけで，乙の自署又は記名捺印がない場合，当該裏書は，甲株式会社の裏書としての効力を生じない。",c5:"５．甲株式会社の代表取締役乙が約束手形を振り出した場合において，その振出人の記載が甲株式会社のためにする旨の表示であるとも 乙個人のためにする表示であるとも解し得るときは，，真実の趣旨を知らない受取人は，甲及び乙のいずれに対しても手形金の請求をすることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2008",num:"55",subject:"mso",q:"訴訟物に関する次の１から４までの各記述のうち，判例の趣旨に照らし正しいものを２個選びなさい。",c1:"１．Ｘが，Ｙの１個の不法行為によりＸの身体に傷害を負ったとして，それによって生じた損害の賠償を一つの訴えによって求めた場合に，Ｘが損害項目として治療費，逸失利益及び慰謝料を主張しているときは，損害項目ごとに訴訟物を異にする。",c2:"２．賃貸人Ｘが，賃借人Ｙに対し，賃貸借契約の終了に基づく目的物の返還を求める訴えを提起した場合に，Ｘが賃貸借契約終了原因として，Ｙの賃料不払による解除及びＹの用法違反による解除を主張しているときは，訴訟物は１個である。",c3:"３．貸主Ｘが，借主Ｙに対し，貸金債権及びその利息債権を請求する訴えを提起したときは，訴訟物は複数である。",c4:"４．Ｘが，Ｙに対して１０００万円の支払を求める訴えを提起した場合に，Ｘが「Ｙに対して１０００万円を貸し付けた。仮に借り受けたのがＹではなくＡであったとしても，ＹはＡの返還債務につき保証したので いずれにせよ１０００万円の支払義務がある と主張しているとき。」，は，給付義務が１個であるから，訴訟物は１個である。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"23"},{year:"2008",num:"56",subject:"mso",q:"形式的形成訴訟に関する次の１から５までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．共有物分割の訴えは，どのような要件事実に基づいて判断すべきかが法律上規定されていない形式的形成の訴えであるから，共有物分割の訴えにおいては，訴訟上の和解をすることができない。",c2:"２．共有物分割の訴えにおいて，当事者全員が現物分割を主張していても，裁判所は，目的物を競売してその代金を分割することを命じることができる。",c3:"３．筆界（境界）確定の訴えにおいて，審理の結果，証拠上筆界が明らかにならなかった場合には，裁判所は，請求棄却判決をする。",c4:"４．筆界（境界）確定の訴えにおいて，被告が原告の請求を認諾する意思表示をしている場合であっても，裁判所は，直ちに認諾により訴訟を終了させることはできないが，証拠調べをした結果，裁判所も原告の主張する境界が相当であるとの心証に至った場合には，認諾により訴訟を終了させることができる。",c5:"５．筆界（境界）確定の訴えにおいて，第一審判決を不服として第一審被告が控訴した場合，不利益変更禁止の原則により，控訴審裁判所は，第一審判決を第一審原告に有利に変更することはできない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2008",num:"57",subject:"mso",q:"遺言執行者の訴訟上の地位に関する次の１から４までの各記述のうち，判例の趣旨に照らし正しいものを２個選びなさい。",c1:"１．特定不動産の受遺者が，遺言の執行として当該不動産の所有権移転登記手続を求める訴えを提起するときは，相続人ではなく遺言執行者を被告とすべきである。",c2:"２．遺言の執行として受遺者に対し遺贈による所有権移転登記がされている場合において，相続人が当該所有権移転登記の抹消登記手続を求める訴えを提起するときは，遺言執行者を被告とすべきである。",c3:"３．特定の不動産を特定の相続人に相続させる旨の遺言がされている場合において，当該不動産を賃借していると主張する者が賃借権の確認を求める訴えを提起するときは，遺言書に当該不動産の管理及び相続人への引渡しを遺言執行者の職務とする旨の記載があるなどの特段の事情のない限り，遺言執行者ではなく，当該相続人を被告とすべきである。",c4:"４．相続人が遺言の無効を主張して，相続財産について自己が持分権を有することの確認を求める訴えを提起するときは，遺言執行者を被告とすることは許されない。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"13"},{year:"2008",num:"58",subject:"mso",q:"Ａは，Ｂ，Ｃ，Ｄ及びＥを共同被告として，Ｑ地方裁判所に訴えを提起した。Ｂ及びＣは，住所が分かっている。Ｄは，住所，居所，営業所及び事務所のいずれも不明であるが，Ｆの事務所で雇われていることが分かっている。Ｅは，未成年者であり，母Ｇとは同居しているが，父Ｈは単身赴任先に住所がある。この事件について，送達に関する次の１から５までの各記述のうち，誤っているものはどれか 。",c1:"１．Ａは，Ｑ地方裁判所の管轄区域外にある友人Ｉ宅を，Ｑ地方裁判所に送達場所として届け出た。Ａに対する第１回口頭弁論期日の呼出状の送達は，友人Ｉ宅においてする。",c2:"２．Ｂは，Ｊを被告として訴えている別件訴訟の原告として，和解期日に出席するためＱ地方裁判所に出頭した。裁判所書記官は，Ｂに対し，自ら訴状の送達をすることができる。",c3:"３．郵便の業務に従事する者は，Ｃの住所において，Ｃが不在である場合，同居の妻Ｋに訴状を交付することができる。",c4:"４．Ｄに対する訴状の送達は，Ｆの事務所においてすることができる。",c5:"５．Ｅに対する訴状の送達は，父Ｈに対し，Ｈの住所地においてするとともに，母Ｇに対し，Ｇの住所地においてしなければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2008",num:"59",subject:"mso",q:"管轄に関する次の１から５までの各記述のうち，正しいものはどれか。なお，次の１から５までの各記述において，Ｘは名古屋市に，Ｙは東京都千代田区に，Ｚは大阪市にそれぞれ住所を有するものとする。また ，当事者間には管轄又は義務履行地に関する特段の合意はないものとする。",c1:"１．Ｙに対し５００万円の貸金返還請求権を有しているＸは，ＹのＺに対する同額の請負代金債権を代位行使し，Ｚに対し，同額の支払を求める訴えを名古屋地方裁判所に提起することができる。",c2:"２．Ｘが，千葉市において所有する建物をＹに代金１０００万円で譲渡したが，Ｙが代金を支払わない場合，ＸはＹに対する売買代金の支払を求める訴えを千葉地方裁判所に提起することができる。",c3:"３．Ｘが，京都市においてＹが製造販売した毒性のある食物を同市で摂取し，大阪市において発病した場合，Ｘは，Ｙを被告とする不法行為に基づく損害賠償請求の訴えを大阪地方裁判所に提起することができる。",c4:"４．Ｘは，東京都千代田区において建物甲を，大阪市において建物乙をそれぞれ所有しているところ，建物甲に居住する賃借人Ｙ及び建物乙に居住する賃借人Ｚに対し，その所有権に基づき，それぞれが占有する各建物の明渡しを請求する場合，Ｘは，Ｙ及びＺを被告として，東京地方裁判所に訴えを提起することができる。",c5:"５．Ｘが所有する静岡市所在の土地に，Ｙのために抵当権設定登記が経由されている場合，Ｘは ，Ｙを被告とする当該抵当権設定登記の抹消登記手続を求める訴えを提起するときは，静岡地方裁判所に提起しなければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2008",num:"60",subject:"mso",q:"訴訟委任に基づく訴訟代理人に関する次の１から４までの各記述のうち，正しいものを２個選びなさい ",c1:"１．訴訟委任に基づく訴訟代理人の資格は，弁護士に限られるから，簡易裁判所の事件であっても，弁護士でない者を訴訟代理人とすることは許されない。",c2:"２．判例によれば，弁護士が，弁護士法第２５条第１号の，相手方の協議を受けて賛助し，又はその依頼を承諾した事件については，その職務を行ってはならないとの規定に違反して，訴訟行為を行った場合には，相手方当事者は，当該訴訟行為に異議を述べ，裁判所に対し，排除を求めることができる。",c3:"３．訴訟の当事者が死亡した場合でも，当該当事者に訴訟代理人がいるときは，訴訟手続は中断しない。",c4:"４．当事者が委任した弁護士を解任した場合，直ちに訴訟代理権の消滅の効果が生じ，本人又は代理人から相手方にこれを通知する必要はない。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"23"},{year:"2008",num:"61",subject:"mso",q:"準備的口頭弁論に関する次の１から５までの各記述のうち 正しいものはどれか。",c1:"１．準備的口頭弁論の期日は，当事者の一方だけを呼び出して行うことができる。",c2:"２．準備的口頭弁論は，受命裁判官に命じて行わせることができない。",c3:"３．準備的口頭弁論の期日を傍聴するためには，裁判所の許可が必要である。",c4:"４．準備的口頭弁論の期日においては，文書の証拠調べをすることができない。",c5:"５．当事者は，準備的口頭弁論終了後の最初の口頭弁論期日において，準備的口頭弁論の結果を陳述しなければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2008",num:"62",subject:"mso",q:"専門委員に関する次の１から５までの各記述のうち 正しいものはどれか。",c1:"１．口頭弁論又は弁論準備手続の期日において，専門委員が，書面又は口頭により専門的知見に基づく説明をする場合，裁判所は，専門委員がした説明について，当事者に意見を述べる機会を与える必要はない。",c2:"２．口頭弁論又は弁論準備手続の期日において，専門委員が，書面又は口頭により説明をした場合，裁判所は，その結果を証拠資料として用いることはできない。",c3:"３．証人尋問の期日において，専門委員を手続に関与させる場合，専門委員は，当事者の同意を得ずに証人に直接に問いを発することができる。",c4:"４．当事者双方が専門委員を手続に関与させる決定の取消しを求めた場合において，裁判所は，取消しが相当であると認めたときに限り，この決定を取り消すことができる。",c5:"５．口頭弁論又は弁論準備手続の期日において，専門委員が，書面又は口頭により専門的知見に基づく説明をする場合，裁判所は，専門委員に宣誓をさせなければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2008",num:"63",subject:"mso",q:`攻撃防御方法に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア. 当事者が故意により時機に後れて提出した攻撃防御方法については，これにより訴訟の完結を遅延させることとならない場合でも，裁判所はこれを却下することができる。
イ. 実体法上の形成権を訴訟上行使する旨の主張は，時機に後れた攻撃防御方法の却下の対象とならない。
ウ. 攻撃防御方法の提出が時機に後れたと判断される場合，裁判所は，それが唯一の証拠方法であっても却下することができる。
エ. 控訴審において初めて提出した攻撃防御方法が時機に後れたものかどうかは，第一審以来の訴訟手続の経過を勘案して判断すべきである。
オ. 請求の原因に関する中間判決がなされた場合，中間判決に接着する口頭弁論終結前に存在していた事実であっても，これを主張しなかったことにつき相当の理由があることの証明があったときは，当該審級においてその事実を主張して中間判決で示された判断を争うことが許される。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2008",num:"64",subject:"mso",q:`証明と疎明に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 主要事実を立証するためには証明が必要であるが，間接事実を立証するには疎明で足りる。
イ. 疎明のための証拠方法には人証も含まれる。
ウ. 民事保全法上の保全命令の発令要件の立証は，疎明で足りる。
エ. 疎明も，民事訴訟法の定める証拠調べの手続に従わなければならない。
オ. 訴訟要件に関する抗弁の一つである仲裁契約の立証は，疎明で足りる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2008",num:"65",subject:"mso",q:"Ｘは，甲土地上に設置されているブロック塀の一部が突然倒壊して頭部に当たり負傷したことから，甲土地を占有するＹ又は甲土地を所有するＺのいずれかが，Ｘに生じた損害を賠償すべきであるとして，Ｙ及びＺを共同被告として訴えを提起し，同時審判の申出をした。この訴訟に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．Ｚは，Ｙが甲土地を占有しているとして，ＹＺ間で締結された賃貸借契約に係る賃貸借契約書を書証として提出した。この場合，裁判所は，ＸのＹに対する請求の関係で当該賃貸借契約書を証拠として利用することができる。",c2:"２．Ｙは，甲土地のブロック塀の一部が倒壊し，Ｘに当たったとのＸの主張事実を認めた。この場合，Ｙの自白は，Ｚを拘束しない。",c3:"３．Ｘは，Ｙに対する訴えのみを取り下げることができない。",c4:"４．裁判所が，Ｙに対する請求を棄却し，Ｚに対する請求を認容する１個の判決をした場合において，Ｚのみが控訴したときは，この判決中，ＸのＹに対する請求を棄却した部分は確定する。",c5:"５．裁判所が，Ｙに対する請求を棄却し，Ｚに対する請求を認容する１個の判決をした場合において，Ｘ及びＺが控訴したところ，各控訴事件が同一の裁判所に係属したときは，両事件の弁論及び裁判は，併合して行わなければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2008",num:"66",subject:"mso",q:"Ｘは，甲土地を所有するＡから，甲土地を買い受けたと主張して，これを占有しているＹに対し，所有権に基づいて甲土地の明渡しを求める訴えを提起した。この訴訟に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい 。",c1:"１．Ｙにおいて，Ｘが甲土地を所有していることを認めた場合，権利自白として自白の拘束力を認める見解によれば，Ｘは，請求原因事実として，甲土地をＡから買い受けたことについて立証する必要がない。",c2:"２．Ｘは，請求原因事実として，甲土地の所有権の取得原因事実を主張立証しなければならないが，その場合，判例の趣旨に照らせば，Ｘが甲土地につきＡと売買契約を締結したことに加えて，当該売買契約に基づく所有権移転登記を具備したことについて主張立証責任を負う。",c3:"３．Ｙは，Ｘとの間で甲土地につき賃貸借契約を締結したと主張している。これに対し，Ｘは，同人の息子がＹとの賃貸借契約をＸに無断で契約したものであるとして，争いたいと考えている。この場合，判例によれば，賃貸借契約締結の事実についての主張立証責任は，占有権原を主張するＹにあるのであり，Ｘにおいて，息子がＹと甲土地につき賃貸借契約を締結したことの主張立証責任を負うものではない。",c4:"４．Ｙは，Ｘと甲土地につき賃貸借契約を締結したと主張しているところ，Ｘは，この事実は否定できないが，再抗弁として，この賃貸借契約は，賃料不払により解除されたと主張したいと考えている。この場合，判例によれば，Ｘは，法定解除権の発生要件として，所定の期限までに賃料を支払わなかった事実について主張立証責任を負う。",c5:"５．Ｙは，Ｘが甲土地を取得した後にこれをＢに売却したのでＸは甲土地の所有者ではなくなった旨主張したいと考えている。この場合，判例によれば，Ｙは，ＸがＢとの間で売買契約を締結したことを主張立証すれば足り，売買代金が支払われた事実については主張立証責任を負わない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"24"},{year:"2008",num:"67",subject:"mso",q:"文書に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．判例によれば，訴え提起後に挙証者自身が作成した文書は，実質的に相手方の反対尋問の機会を奪うことになるので，証拠能力が認められない。",c2:"２．作成名義人による署名がある私文書は，形式的証拠力が事実上推定され，相手方の反証によりこの推定が覆されなければ実質的証拠力が法律上推定される。",c3:"３．訴訟において相手方の主張を争うのは自由であるから，当事者が，相手方提出の文書が真正に成立したものであることを知りながら，その成立を争ったとしても，何らの制裁を受けることはない。",c4:"４．別件訴訟において行われた証人尋問の調書の写しは，これを証拠とすることを認めると，相手方の反対尋問の機会を奪うだけでなく，直接主義の原則に反することになるので，その証人の尋問を行うことが困難な場合であっても，書証として提出することはできない。",c5:"５．裁判所が当事者からの申立てを採用して行った文書送付嘱託に基づき，文書所持者から裁判所に送付された文書についても，相手方がその成立を争った場合には，その成立が真正であることを証明しなければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2008",num:"68",subject:"mso",q:"証拠調べに関する次の１から５までの各記述のうち 正しいものはどれか。",c1:"１．証拠の申出は，裁判所に対する訴訟行為であるから，口頭弁論又は弁論準備手続の期日においてしなければならない。",c2:"２．証人尋問期日に当事者の一方が欠席した場合，交互尋問をすることができないので，証人尋問をすることは許されない。",c3:"３．裁判所外で証拠調べをするときも，直接主義の要請から，受訴裁判所の構成員全員がこれに関与しなければならない。",c4:"４．集中証拠調べの対象となる証拠調べは，証人及び当事者本人の尋問であるから，文書や検証物の取調べは，集中証拠調べの期日より前に行うのが原則である。",c5:"５．証拠保全は，あらかじめ証拠調べをしておく必要性がある場合のための制度であるから，訴訟手続において証拠調べができるようになった訴え提起後は，証拠保全をすることができない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2008",num:"69",subject:"mso",q:"ＸはＹに対して，甲土地の所有権の確認を求める訴えを提起し，その判決が確定したとする（以下この判決を「前訴判決」という 。）。次の１から４までの各記述のうち，正しいものを２個選びなさい。 ",c1:"１．前訴判決がＸの請求棄却であったとする。ＸがＹに対して甲土地の所有権の確認を求める後訴を提起することは，前訴判決の既判力に触れるので却下される。",c2:"２．前訴判決がＸの請求棄却であり，その理由がＹが甲土地の所有者であるという判断に基づいていたとする。ＹのＸに対する甲土地の所有権の確認を求める後訴でＸが前訴判決基準時におけるＹの所有権を争うことは，いわゆる一物一権主義により既判力によって妨げられる。",c3:"３．前訴判決がＸの請求認容であったとする。ＸがＹに対して甲土地の所有権の確認を再度求める後訴は，前訴判決の既判力に抵触するとの理由で却下されることはない。",c4:"４．前訴判決がＸの請求認容であったとする。その後Ｘから甲土地を借り受けたＺが債権者代位権の行使としてＹに対して甲土地の引渡しを求めたときには，Ｙは前訴判決基準時におけるＸの所有権の存在と矛盾しない攻撃防御方法のみ提出できる。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"34"},{year:"2008",num:"70",subject:"mso",q:"請求の放棄又は認諾に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．請求の放棄は，原告が訴訟外で請求に理由のないことを認めている場合にも成立し，そのことを被告が訴訟において証明したときは，放棄調書の作成により訴訟が終了する。",c2:"２．請求の放棄をするには，被告が本案について口頭弁論をした後であっても，被告の同意を必要としない。",c3:"３．共同相続人の一人が，他の共同相続人全員に対し，甲財産が遺産に属することの確認を求める訴えを提起した場合，判例の趣旨によれば，被告ら全員が認諾しなければ，認諾の効力は生じない。",c4:"４．人事訴訟である離縁の訴えにおいても，請求の放棄及び認諾は許される。",c5:"５．売買代金支払請求事件において，被告が，同時履行の抗弁を主張しつつ，原告の請求を認めた場合，同時履行の抗弁の付着した認諾が成立し，認諾調書の作成により訴訟は終了する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"15"},{year:"2008",num:"71",subject:"mso",q:`補助参加に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア. 補助参加人は，参加後は証人になることはできない。
イ. 判決が確定した後でも，補助参加の申出とともに再審の訴えを提起することができる。
ウ. 補助参加人がする訴訟行為は，被参加人に有利なものであっても，効力を生じないことがある。
エ. 補助参加の参加の理由が，友情に基づき応援したいというものである場合は，裁判所は，当事者の異議がなくても，参加を許さない旨の裁判をすることができる。
オ. 補助参加の申出は，参加的効力が及ぶ被参加人の同意がなければ，取り下げることができない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2008",num:"72",subject:"mso",q:`再審に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア. 再審の訴えには，判決の確定を防止する効果はないが，移審の効果はある。
イ. 判例によれば，再審事由については限定列挙主義がとられているので，これを類推適用することは許されない。
ウ. 当事者が再審事由を控訴審において主張したが，これが容れられず控訴棄却判決が確定した場合でも，当該再審事由がある限り再審の訴えを提起することは許される。
エ. 判例によれば，口頭弁論終結後の承継人として既判力の拡張を受ける者は，特定承継の場合も含めて，再審の訴えの原告適格を有する。
オ. 決定又は命令に対しても再審の申立てが許される場合がある。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2008",num:"73",subject:"mso",q:"民事訴訟法における異議に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．裁判長の釈明権の行使に対して不服がある当事者は，受訴裁判所に対して異議を申し立てることができる。",c2:"２．裁判所書記官の処分に対する異議の申立てについては，その裁判所書記官の所属する裁判所が裁判をする。",c3:"３．少額訴訟の終局判決に対して不服がある当事者は，異議を申し立てることも控訴をすることもできる。",c4:"４．手形訴訟の認容判決に対して不服のある当事者は，異議を申し立てることができ，その場合，事件は控訴審に係属することになる。",c5:"５．支払督促に対して適法な督促異議の申立てがあったときは，第一審裁判所に訴えの提起があったものとみなされる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"34"},{year:"2008",num:"1",subject:"kei",q:`次の【事例】について，後記ＡからＣまでの各【見解】を採って，甲の行為と乙の死亡の間に因果関係があるかどうかを検討した場合，因果関係を認める【見解】として正しいものは，後記１から５までのうちどれか。
【事 例】
甲が乙に対して激しい暴行を加え，そのまま放置すれば１日後には死亡するような脳内出血の傷害を負わせ，その場を立ち去った。その直後に，乙は通行人に発見され，救急車で病院に搬送されることとなったが，その途中で救急車が大型トラックと衝突し，乙は，この事故により１時間後に内臓破裂のため死亡した。
【見 解】
Ａ. 予測不可能な介在事情によって死期が早められなかったと認められるときに限り，実行行為と死亡の結果との間に因果関係が認められる。
Ｂ. 予測不可能な介在事情によって死期が早められたとしても，被害者の死因が，実行行為により形成された傷害によって死亡したであろう場合の死因と同一であるときには，実行行為と死亡の結果との間に因果関係が認められる。
Ｃ. 予測不可能な介在事情によって死期が早められたとしても，実行行為と死亡の結果との間に条件関係があるときには，実行行為と死亡の結果との間に因果関係が認められる。`,c1:"１．Ａ Ｂ Ｃ",c2:"２．Ａ Ｂ",c3:"３．Ｂ Ｃ",c4:"４．Ａ",c5:"５．Ｃ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2008",num:"2",subject:"kei",q:"次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．甲は，自己が経営する書店においてわいせつ図画である写真誌を販売するに当たり，当該写真誌をビニールで包装して，わいせつ性のない表紙だけが閲覧できるようにして陳列していた。この場合，甲には，わいせつ図画販売目的所持罪は成立しない。",c2:"２．甲は，人通りの多い道路上で，自己の陰部を露出させたが，偶然にも，通行人はだれもそれに気付かなかった。この場合，甲には，公然わいせつ罪は成立しない。",c3:"３．書籍の通信販売業を営んでいた甲は，日本語で書かれたわいせつ文書である小説を，外国語で書かれているかのように装って複数の外国人に販売したが，これを購入した顧客はいずれも日本語の読解能力に乏しかったため，その小説の内容を理解することができなかった。この場合，甲には，わいせつ文書販売罪は成立しない。",c4:"４．甲は，友人の乙が誕生日を迎えることを知り，わいせつ図画であるＤＶＤ１枚を購入した上，これをお祝いとして乙にプレゼントした。この場合，甲には，わいせつ図画頒布罪は成立しない。",c5:"５．甲は，公園内において，多くの人が見ている前で，乙に対し，その衣服全部をはぎ取るなどして強いてわいせつな行為をした。この場合，甲には，強制わいせつ罪が成立するが，公然わいせつ罪は成立しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2008",num:"3",subject:"kei",q:`正当防衛（刑法第３６条第１項）の成立要件に関する次のアからオまでの各記述を判例の立場に従って検討した場合，正しいものの組合せは，後記１から５までのうちどれか。
ア. 正当防衛は，不正の侵害に対して成立するから，正当防衛行為に対する正当防衛は成立し得ない。
イ. 正当防衛は，急迫の侵害に対して成立するから，反撃行為を行った者が侵害を予期していた場合には正当防衛は成立し得ない。
ウ. やむを得ずにした行為として正当防衛が成立するには，防衛行為が侵害に対する防衛手段として相当性を有するものであることを要するから，防衛行為によって生じた害が避けようとした害の程度を超えた場合には正当防衛は成立し得ない。
エ. 正当防衛は，不正の侵害に対して成立するから，加害者の過失行為に対しては正当防衛は成立し得ない。
オ. 急迫不正の侵害がないのにあると誤信して，防衛の意思で反撃行為を行った場合には正当防衛は成立し得ない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2008",num:"4",subject:"kei",q:`甲は，友人の乙から，同人が殺人を犯したことを打ち明けられていたが，ある日，乙が路上で警察官丙の職務質問を受けているのを見て，乙が殺人事件で逮捕されようとしているものと思い，その逮捕を免れさせようと考えた。次のアからオまでの甲の行為について，公務執行妨害罪が成立するものの組合せとして正しいものは，後記１から５までのうちどれか。
ア. 甲は，丙が付近道路に止めていたパトカーの発進を阻止するため，自己が運転していた自動車を，同パトカーが発進することの障害となる位置に移動して駐車させた。このため，丙は，職務質問後，乙を直ちに最寄りの警察署に任意同行することができなかった。
イ. 甲は，丙に対し，こぶし大の石１個を投げたが，丙の頭部をかすめたにすぎず，職務質問に現実の支障は発生しなかった。
ウ. 甲は，職務質問を受けている乙の左手をつかんで引っ張り，その場から走って逃走したところ，これを追いかけた丙が，走りながら，乙の右手をつかもうとして手を伸ばしたが，乙の右手をつかめずにバランスを崩して道路上に転倒した。
エ. 甲は，丙の注意をそらすため，道を尋ねるふりをして丙に話しかけ，そのすきに乙を逃走させた。
オ. 甲は，乙を逃走させるため，丙の背部をいきなり足で蹴って転倒させたが，乙は観念していたので逃走しなかった。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2008",num:"5",subject:"kei",q:`次の【事例】に関する後記アからオまでの各【記述】を判例の立場に従って検討した場合，正しいものの組合せは，後記１から５までのうちどれか。
【事 例】
甲と乙が，丙に対して同時に１発ずつけん銃を発射し，そのうち１発は丙の頭部をかすめたものの命中せず，もう１発が丙の頭部に命中し，それにより丙は死亡した。丙の頭部に命中した銃弾が甲乙いずれのけん銃から発射されたものであるかは判明しなかった。
【記 述】
ア. 甲と乙が，共同して丙を殺害する意思をもってけん銃を発射した場合，甲及び乙には殺人既遂罪の共同正犯は成立せず，殺人未遂罪の共同正犯が成立する。
イ. 甲は，乙がけん銃を発射することを知り，乙と共同して丙を殺害する意思で自らもけん銃を発射したが，乙は，甲がけん銃を発射することも丙を殺害しようとしていることも知らないまま，自分一人で丙を殺害する意思をもってけん銃を発射した場合，甲には殺人罪の共同正犯が成立し，乙には殺人未遂罪の単独犯が成立する。
ウ. 甲と乙は，互いに何ら意思の連絡なく，それぞれ丙を殺害する意思をもってけん銃を発射した場合，甲乙にはそれぞれ殺人未遂罪の単独犯が成立する。
エ. 甲は，丙を殺害する意思をもって，乙に対し，「あれはマネキン人形だ。一緒に射撃しよう。」とうそを言ったところ，乙はこれを鵜呑みにしてよく確認もせず丙をマネキン人形と誤信し，甲と共にけん銃を発射した場合，甲には殺人罪の単独犯が成立し，乙には重過失致死罪の単独犯が成立する。
オ. 甲と乙が，共同して丙に傷害を負わせる意思をもってけん銃を発射した場合，甲及び乙には傷害致死罪の共同正犯が成立する。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2008",num:"6",subject:"kei",q:`次の【事例】における甲の罪責について，「甲には犯人隠避教唆罪及び証拠偽造教唆罪が成立し，両罪は観念的競合となる。」との結論に達した場合，後記アからオまでの【論点と見解】のうち，この結論を導くための論拠となり得ないものの組合せは，後記１から５までのうちどれか。
【事 例】
甲は，東京都内の銀行で強盗を行ってその後逃走したが，警察の捜査が自己に及んでいることを知り，アリバイ証人を作って自己の刑事責任を免れようと企て，知人の乙に対して，上記犯行の時刻ころ，乙と一緒に大阪市内にいたことにしてほしいと依頼して，その旨承諾させ，同人をして，甲の依頼に沿う内容虚偽の上申書を作成させた上，これを甲の強盗事件を捜査していた警察署の警察官に提出させた。
【論点と見解】
ア. 犯人隠避罪の「隠避」の意味について，蔵匿以外の方法により官憲の発見逮捕を免れさせる一切の行為をいうが，犯人の逃走を容易にさせることによって官憲による犯人の身柄の確保を妨げる行為に限り，官憲による犯人の特定作用を妨げ，その結果として犯人の身柄の確保を妨げる行為は含まないとする見解
イ. 証拠偽造罪の「証拠」の意味について，参考人の虚偽供述は，「証拠」に含まれるが，文書化されたものに限るとする見解
ウ. 証拠偽造罪の「偽造」の意味について，文書偽造罪と同様，作成名義を偽る場合に限るとする見解
エ. 証拠偽造教唆罪の成否について，被教唆者・教唆者以外の者の刑事事件に関する証拠を偽造するように教唆し，これが実行された場合に限って成立するとする見解
オ. 犯人隠避罪と証拠偽造罪の罪数関係について，両者の保護法益は，広義においては国家の刑事司法作用を保護するものであるが，前者は犯人の確保の観点から，後者は適正な証拠の収集の観点から，それぞれこれを妨害する行為を処罰するものであって，保護法益が異なることを重視する見解`,c1:"１．ア イ ウ",c2:"２．ア ウ エ",c3:"３．ア エ オ",c4:"４．イ ウ オ",c5:"５．イ エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2008",num:"7",subject:"kei",q:`次のアからオまでの各記述を判例の立場に従って検討した場合，正しいものの組合せは，後記１から５までのうちどれか。
ア. 甲は，乙が所有する木造家屋に乙が現在しているものと思って，同家屋に放火し，これを全焼させたが，実際には同家屋はだれも現在していない空き家であった。この場合，甲には現住建造物等放火罪が成立するが，その刑は非現住建造物等放火罪の刑による。
イ. 甲は，男性の乙が，酩酊して暴れ回る女性の丙を取り押さえているのを目撃し，乙が丙に対し無理矢理わいせつ行為に及ぼうとしているものと誤信し，丙を助けるため，乙の腹部をゴルフクラブで数回強く殴打するなどの暴行を加えて重傷を負わせた。甲の暴行の程度が，甲が認識した急迫不正の侵害に対する防衛行為としての相当性を超えていた場合，甲には傷害罪は成立しない。
ウ. 甲は，乙に対する殺意をもって，乙の背後からけん銃を発射したところ，乙は赤ん坊の丙を抱いており，銃弾が乙の身体を貫通した後，丙にも命中して，乙及び丙の両名を死亡させた。甲が，乙に抱かれている丙の存在を認識していなかった場合でも，甲には乙及び丙に対する殺人罪が成立する。
エ. 甲は，公務員乙がその法令上の職務Ａを執行するに当たり，乙が執行している職務がそれとは別の法令上の乙の職務Ｂであると誤信して乙の顔面を手拳で殴る暴行を加えた。乙の執行する職務が職務Ｂでなく職務Ａであると分かっていれば，甲は上記暴行には及ばなかったという事情があった場合でも，甲には公務執行妨害罪が成立する。
オ. 甲は，客観的にはわいせつな文書を，その意味内容は理解したものの，その程度の性的描写であれば刑法上の「わいせつな文書」には該当しないと判断し，同文書を販売した。この場合，甲にはわいせつ文書販売罪は成立しない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2008",num:"8",subject:"kei",q:`甲の罪責についての次の１から５までの各記述を判例の立場に従って検討し，正しい場合には１を，誤っている場合には２を選びなさい。
１. 甲は，乙から，乙がＡ大学の入学試験を受けるに当たり，いわゆる替え玉になって受験してほしい旨依頼されてこれを引き受け，乙に成り済ましてＡ大学の入学試験を受け，乙名義で答案を作成して提出した。大学の入学試験の答案は，私文書偽造罪の客体になるが，甲は作成名義人乙に依頼されて乙名義で答案を作成したのであるから，甲には有印私文書偽造罪は成立しない。
２. 甲は，運転免許証を持っていなかったが，身分証明書として利用しようと考え，某県公安委員会が発行した乙の運転免許証の写真を甲の写真に変えた。他人の運転免許証の写真を自己のものに変えることは，文書の本質的部分に変更を加えるものであるから，運転免許証の他の部分に変更を加えていなくても，甲には有印公文書偽造罪が成立する。
３. 甲は，外国籍の女性乙に長期滞在資格を取得させるため婚姻を偽装しようと考え，甲を夫とし乙を妻として婚姻する旨の内容虚偽の婚姻届を作成し，情を知らない市役所の係員に提出した。同係員は，同婚姻届を受理し，甲の戸籍の原本として用いられる電磁的記録に甲と乙が婚姻した旨の記録をし，これを同市役所の事務処理に用いられる状態においた。甲は，公務員に対し虚偽の申立てをして，権利義務に関する公正証書の原本として用いられる電磁的記録に不実の記録をさせ，原本としての用に供したのであるから，甲には電磁的公正証書原本不実記録罪，同供用罪が成立する。
４. 医師である甲は，乙に依頼され，同人が保険会社に提出する診断書に，同人が肺結核に罹患した事実はないのに，同人が肺結核に罹患している旨記載した。医師である甲が，保険会社に提出する診断書に虚偽の記載をしたのであるから，甲には虚偽診断書作成罪が成立する。
５. 甲は，乙に１００万円を貸したが，乙が甲に借用証を渡さなかったので，乙が返済しなかった場合に証拠として使おうと考え，乙に無断で乙の氏名を記載し，乙名義の１００万円の借用証を作成した。文書の内容が真実であるから，甲には有印私文書偽造罪は成立しない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"21122"},{year:"2008",num:"9",subject:"kei",q:`次の【事例】について，学生Ａ及びＢが後記【会話】のとおり議論している。【会話】中の①から③までの（ ）内に入る学生Ａの発言として正しいものを後記【発言】から選んだ場合，正しいものの組合せは，後記１から５までのうちどれか。
【事 例】
甲は，乙を殺害しようと考えたが，しらふでは殺害行為に及ぶ勇気がなかったので，多量の飲酒により自己を心神喪失状態に陥れて隣室で就寝中の乙を刺殺しようと考え，手元に包丁を用意して飲酒を開始し，計画どおり自己が飲酒のため心神喪失になった状態で乙の胸部を包丁で突き刺して殺害した。
【会 話】
Ａ. 甲の行為は，自己の責任能力のない状態を道具として利用する一種の間接正犯であって，自己を心神喪失状態に陥れる飲酒行為が殺人の実行行為であり，したがって，飲酒行為時に責任能力が認められる以上，甲には殺人罪が成立すると思う。
Ｂ. ただ，君のように考えると，仮に，甲が自己の心神耗弱状態を利用して乙を殺害する意思で殊更その状態に陥り，計画どおり乙を殺害した場合には，刑を減軽せざるを得ず，本件のように心神喪失状態で殺害した場合には完全な刑事責任が認められることとの不均衡が生じないだろうか。
Ａ. （ ① ）
Ｂ. 君の考えでは，甲が酔いつぶれて眠り込んでしまった場合にも殺人未遂罪が成立してしまうことになるが，それでは処罰範囲が広がりすぎるのではないか。
Ａ. （ ② ）
Ｂ. 責任能力は責任の要件ではあっても責任非難それ自体ではないのだから，実行行為を心神喪失時の行為と解しつつ，それより前の責任能力のあったときの意思態度について非難可能性が認められれば，行為全体について完全な責任を負わせても一向に構わないと思う。
Ａ. （ ③ ）
【発 言】
ア. 責任能力は単に意思決定能力にすぎないものではなく，行動制御能力でもあるのだから，責任能力は，やはり実行行為に対する同時的コントロールの問題と解すべきであって，実行行為時に存在すべきものではないのか。
イ. 本事例のような故意の作為犯についてはそう思えるかもしれないが，過失犯や不作為犯のように，実行行為の定型性が弱い場合には，飲酒行為に構成要件該当性を認めても問題はないと思う。それよりも，君のように実行行為の時点で心神喪失状態に陥っていても，甲に完全な刑事責任を負わせることの方が問題ではないか。
ウ. 私の立場からは，あたかも身分のない故意ある道具の利用の場合と規範的意味において同じように考え，心神耗弱状態を利用した場合にも原因において自由な行為の理論を認めることができると思う。`,c1:"１．①ア ②イ ③ウ ",c2:"２．①ウ ②ア ③イ",c3:"３．①ア ②ウ ③イ",c4:"４．①ウ ②イ ③ア",c5:"５．①イ ②ア ③ウ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2008",num:"10",subject:"kei",q:`次のアからオまでの各記述を判例の立場に従って検討した場合，正しいものの組合せは，後記１から５までのうちどれか。
ア. 甲は，乙所有の自動車に放火してこれを焼損し，公共の危険を発生させた。甲には同自動車を焼損する意思しかなく，付近の建造物に延焼させる意思はなかったが，乙が住居として使用する乙所有の木造家屋に火が燃え移って同家屋が全焼した。この場合，甲には延焼罪が成立する。
イ. 甲は，乙が住居として使用する乙所有の木造家屋に延焼させる意思で，同家屋に隣接し，だれも住居として使用せず，だれも現在しない丙所有の家屋に放火してこれを全焼させたが，上記乙所有の家屋には燃え移らなかった。この場合，甲には現住建造物等放火未遂罪が成立する。
ウ. 甲は，甲がその家族と共に住居として使用する甲所有の木造家屋に放火して半焼させたが，隣家に燃え移る危険は発生しなかった。この場合，甲には現住建造物等放火罪が成立する。
エ. 甲は，乙所有の自動車に放火してこれを焼損させたが，公共の危険は発生しなかった。この場合，甲には建造物等以外放火罪が成立する。
オ. 甲は，多数人が住居として使用する乙所有の集合住宅一棟を全焼させる意思で，同住宅のうち，だれも現在しない空き部屋に放火した。他の住居部分に燃え移る可能性はあったが，甲が放火した空き部屋の床及び天井の大部分が燃焼した時点で消火されたため，他の住居部分は燃焼しなかった。この場合，甲には現住建造物等放火未遂罪が成立するにとどまる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2008",num:"11",subject:"kei",q:`次のアからオまでの各事例における甲の罪責について，判例の立場に従って検討し，（ ）内の犯罪が既遂になる場合は１を，未遂にとどまる場合は２を，既遂にも未遂にもならない場合は３を選びなさい。
ア. 甲は，所持金を全く有しておらず，タクシー料金を支払うつもりはないのに，乙運転のタクシーに乗車したが，乙は，目的地に向けてしばらく走行するうちに，甲の不審な挙動から無賃乗車ではないかと疑い，甲を降車させたため，甲は目的地に到着できなかった。（詐欺罪）
イ. 甲は，所持金を全く有していなかったが，窃取した他人名義のクレジットカードを持っていたので，代金を支払わずに同カードを使用して飲食店で食事をしようと考え，乙の経営する食堂に入り，飲食物を注文しこれを飲食した後，代金を請求した乙に対し，同カードを手渡したが，既に同カードの名義人から紛失届が出ていたため，同カードを使うことができなかった。（詐欺罪）
ウ. 甲は，深夜，コンビニエンスストアでおにぎりを万引きして店外に出たところ，これに気付いた店員乙に呼び止められたので，逮捕を免れるため，路上に落ちていた角材で乙を殴るなど同人の反抗を抑圧するに足りる程度の暴行を加えたが，たまたま通り掛かった通行人に取り押さえられ，逮捕を免れることができなかった。（事後強盗罪）
エ. 甲は，乙が万引きするのを目撃したことを奇貨として，乙から現金を脅し取ろうと考え，乙にあてて，「万引きをしたのを警察に知られたくなかったら，３０万円持ってこい。」などと記載した文書を郵送したところ，乙は同文書を受け取ったが，封を開ける前に誤って捨ててしまったため，甲は現金を手に入れることができなかった。（恐喝罪）
オ. 甲は，乙を自宅に招いて毒入りの菓子を食べさせて毒殺しようと考え，菓子に致死量の毒薬を混入し，乙に自宅に招待する旨の電話をしたが，乙が多忙を理由にこれを断ったため，乙を殺害することができなかった。（殺人罪）`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"11123"},{year:"2008",num:"12",subject:"kei",q:`次のアからオまでの各事例における甲の罪責を検討した場合，危険運転致死罪が成立するものの組合せとして正しいものは，後記１から５までのうちどれか。
ア. 甲は，自動車の運転免許を取得したことも運転経験もなく，ハンドル，ブレーキ等の運転装置を操作する初歩的な技能もなかったのに自動車を走行させたため，自車を対向車線に進入させ，対向車に衝突させて同車の運転者を死亡させた。
イ. 甲は，自動車を運転中に交通違反を犯し，パトカーに追跡されて逃走中，赤色信号に気付かずに交差点に進入したため，青色信号に従って左方道路から同交差点に進入してきた自動二輪車に自車を衝突させ，同二輪車の運転者を死亡させた。
ウ. 甲は，自動車を運転中，携帯電話でメールを送信する操作に気をとられ，自車が対向車線に進入しているのに気付かずに進行したため，自車を対向車に衝突させて同車の運転者を死亡させた。
エ. 甲は，覚せい剤を使用した後，自動車の運転を開始したが，運転中，覚せい剤の影響により正常な運転が困難な状態になったのに，それを認識しながらあえて運転を続けたため，自車を電柱に激突させ，同乗者を死亡させた。
オ. 甲は，自動車を運転中，長距離運転の過労から眠気を覚えたにもかかわらず，その状態のままあえて運転を続けたため，運転中に眠り込んでしまい，自車を進路左前方の歩道に進入させ，歩道上の歩行者に衝突させて同人を死亡させた。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2008",num:"13",subject:"kei",q:`学生Ａ，Ｂは，不能犯の成否の判断基準に関する次のⅠ，Ⅱの【見解】のいずれかを採って後記【事例】について後記【会話】のとおり議論している。【会話】中の①から⑦までの（ ）内から適切な語句を選んだ場合，後記１から５までのうち誤りを含むものはどれか。
【見 解】
Ⅰ. 行為当時に一般人が認識し得た事情を基礎とし，一般人を基準に結果発生の具体的危険性があるか否かの判断による。
Ⅱ. 行為当時に存在したすべての客観的事情を基礎とし，結果発生の具体的危険性があるか否かの判断による。
【事 例】
甲は，健康な乙を毒殺するため，薬品棚から取り出した毒薬のラベルが付いた容器に入った粉を毒薬と認識してその水溶液を乙に多量に注射したが，同粉は，ラベルに表示された毒薬ではなくブドウ糖であったため乙は死亡しなかった。
【会 話】
Ａ. 私は，甲の罪責については，①（ａ. 毒薬・ｂ. ブドウ糖）の水溶液を注射する行為が危険であるかどうかを判断し，甲には殺人未遂罪が成立②（ｃ. する・ｄ. しない）と考える。
Ｂ. しかし，Ａ君の見解だと，特定の食物の摂取によりショック死しかねないアレルギー体質を有する乙を，そのことを知った甲が，当該食物を乙に食べさせて殺害しようとした事案で，一般人が乙の体質を認識し得なかった場合には，③（ｅ. 行為当時に存在した全事情を基礎として・ｆ. 行為当時に一般人が認識し得た事情を基礎として）判断することになるから，未遂犯が成立しないこととなり，常識に反する。
Ａ. そのような場合，私の立場でも，④（ｇ. 行為時に行為者が特に認識していた事情・ｈ. 事後的に明らかになった全事情）を考慮すべきと考えるので，Ｂ君の言う事案でも未遂犯の成立を認めることができる。それよりも，Ｂ君の立場を理論的に徹底すれば，結果が不発生に終わった事案は，ほとんど常に⑤（ｉ. 不能犯・ｊ. 未遂犯）となってしまうのではないか。
Ｂ. いや，私の立場であっても，事後的・科学的見地から，実際に存在した事実のほかにどのような事実があれば結果が発生し得たかを検討し，そのような事実が行為時に存在し得る可能性の程度を危険判断に取り込むべきと考える。したがって，前記【事例】でも，単に，⑥（ｋ.ブドウ糖・ｌ. 毒薬）を健康な乙に注射することの危険性を判断するのではなく，毒薬のラベルの付いた容器内にブドウ糖が入っていた原因・経緯なども考慮すべきだ。例えば，その原因・経緯が極めてまれで異常だったという事情は，不能犯を⑦（ｍ. 肯定・ｎ. 否定）する方向に働くと考える。`,c1:"１．①ａ，②ｃ",c2:"２．③ｆ",c3:"３．④ｇ，⑤ｉ",c4:"４．⑥ｋ",c5:"５．⑦ｍ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2008",num:"14",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．甲は，丁寧に手入れがなされていたＶの長髪を，同人が寝ている間に無断で切って短くした。甲には傷害罪が成立する。",c2:"２．甲が，Ｖを多数回にわたって手拳で殴打したり足蹴にしたりする暴行を加え，その場を立ち去った直後，偶然通り掛かった乙が，倒れているＶに対し，更に手拳で殴打したり足蹴にしたりする暴行を加えた。これらの暴行による傷害によってＶは死亡したが，その死因となった傷害が，甲乙いずれの暴行によって生じたものであるか判明しなかった。この場合，甲乙それぞれに傷害罪が成立するにとどまる。",c3:"３．甲は，傷害を負わせる意思なくＶの顔面を手拳で殴打したが，甲の意に反して当該殴打によってＶが傷害を負った場合，甲には傷害罪は成立しない。",c4:"４．甲は，Ｖに精神的ストレスを与えて精神に障害を生じさせようと考え，１か月間にわたり，１時間おきにＶに無言電話をかけ続けた。Ｖに何ら精神の障害が生じなかった場合，甲には暴行罪が成立する。",c5:"５．甲は，Ｖに下痢の症状を起こさせようと考え，腐敗した食品を食べさせたところ，Ｖは，これによって下痢の症状を起こしたが，数時間安静にするうちに完治した。甲には傷害罪が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2008",num:"15",subject:"kei",q:"身分犯の共犯に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．刑法第６５条第１項は，真正身分犯の成立及び科刑について規定し，同条第２項は，不真正身分犯の成立及び科刑について規定していると解する見解に立ちつつ，常習賭博罪における常習性も身分に含まれると解すると，賭博の非常習者甲が賭博の常習者乙を教唆して賭博をさせた場合，乙には常習賭博罪が成立し，甲には同罪の教唆犯が成立する。",c2:"２．刑法第６５条について前記１と同様の見解に立ちつつ，事後強盗罪は「窃盗」という身分を有する者だけが法益を侵害し得る身分犯であって，他の犯罪の加重類型ではないと解すると，窃盗犯人甲が，逃走中，追跡してきた被害者乙に対し，逮捕を免れるため，乙の反抗を抑圧するに足りる程度の暴行を加えた際，その事情を知った丙が，甲の暴行行為を幇助した場合，丙が窃盗行為に全く関与していなかったとしても，丙には事後強盗罪の幇助犯が成立し，その刑が科される。",c3:"３．刑法第６５条について前記１と同様の見解に立ちつつ，目的犯における目的も身分に含まれると解すると，営利の目的を有する甲が，成人乙を買い受けるに際し，かかる目的を有しない丙がこれを幇助した場合，甲には営利人身買い受け罪が成立し，丙には人身買い受け罪の幇助犯が成立する。",c4:"４．刑法第６５条第１項は，真正身分犯及び不真正身分犯を通じて共犯の成立について規定し，同条第２項は不真正身分犯の科刑について規定していると解する見解によれば，財物の非占有者甲が，財物を業務上占有する乙を教唆して当該財物を横領させた場合，甲には業務上横領罪の教唆犯が成立し，単純横領罪の刑が科せられる。",c5:"５．刑法第６５条第２項の「身分のない者には通常の刑を科する」の意義について，身分に応じて，加重又は減軽された身分犯が成立すると解する見解によれば，未成年者乙の保護責任者である実母の甲が，保護責任者でない甲の内縁の夫丙を教唆して乙を山中に遺棄させた場合，甲には保護責任者遺棄罪の教唆犯が成立し，丙には単純遺棄罪が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2008",num:"16",subject:"kei",q:`次の【見解】に従って，後記１から５までの各記述を検討した場合，誤っているものはどれか。
【見 解】
Ａ. 器物損壊罪の「損壊」とは，物の効用を害する一切の行為をいう。信書隠匿罪は，物の「損壊」のうち，信書の「隠匿」を軽く処罰する規定である。信書を「隠匿」した場合には，信書隠匿罪が成立する。
Ｂ. 器物損壊罪の「損壊」とは，物の効用を害する一切の行為をいう。信書隠匿罪は，信書の「損壊」を軽く処罰する規定である。信書を「損壊」した場合には，信書隠匿罪が成立する。
Ｃ. 器物損壊罪の「損壊」とは，物の効用を害する行為のうち，物の全部又は一部を物理的に破壊するものをいう。信書隠匿罪は，信書の「隠匿」を処罰する規定である。信書を「隠匿」した場合には，信書隠匿罪が成立する。`,c1:"１．Ａの見解によれば，他人の信書を隠した場合には，信書隠匿罪が成立する。",c2:"２．Ｂの見解によれば，他人の信書を隠した場合には，器物損壊罪が成立する。",c3:"３．Ｂの見解によれば，他人の信書を破った場合には，信書隠匿罪が成立する。",c4:"４．Ｃの見解によれば，他人の信書を破った場合には，器物損壊罪が成立する。",c5:"５．Ｃの見解によれば，他人の宝石を隠した場合には，器物損壊罪は成立しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2008",num:"17",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．甲は，乙を教唆して丙所有の骨董品を盗むことを決意させ，乙にこれを実行させた後，同人が丙から盗んだ骨董品を買い受けた。甲には，窃盗教唆罪及び盗品等有償譲受け罪が成立し，両罪は併合罪となる。",c2:"２．甲は，脇見しながら自動車を運転したため，自車前方で信号待ちのため停車していた乙運転の自動車に気付くのが遅れ，同車に自車を追突させ，その衝撃で乙運転の自動車を前方に押し出し，同車の前方に停車中の丙運転の自動車に追突させ，これにより乙が死亡し，丙は傷害を負った。甲には，乙に対する自動車運転過失致死罪及び丙に対する自動車運転過失傷害罪が成立し，両罪は併合罪となる。",c3:"３．甲は，乙を殺害する目的で，乙の住居に侵入し，同住居内で乙を殺害した。甲には，住居侵入罪及び殺人罪が成立し，両罪は併合罪となる。",c4:"４．甲は，自宅で乙を殺害し，その死体を遠方の山林に埋めた。甲には，殺人罪及び死体遺棄罪が成立し，両罪は牽連犯となる。",c5:"５．甲は，乙から同人名義のクレジットカードを窃取し，Ａデパートにおいて，店員に対し，乙に成り済まして同クレジットカードを呈示して商品の購入方を申し込んだが，同店員に盗難カードであることを見破られたため，商品を手に入れることができなかった。甲には，窃盗罪及び詐欺未遂罪が成立し，両罪は牽連犯となる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2008",num:"18",subject:"kei",q:`横領罪（刑法第２５２条第１項）に関する次のアからオまでの各記述を判例の立場に従って検討した場合，誤っているものの組合せは，後記１から５までのうちどれか。
ア. 甲が，乙から賃借している同人所有の骨董品について，その売却代金を自己の借金の返済に充てるつもりで乙に無断で丙にその買取りを求めた場合，甲の行為は不法領得の意思が外部的に発現したといえるから，丙が買受けの意思表示をしなくても甲には横領罪が成立する。
イ. 甲が，自己が所有し，登記簿上も自己が所有権者となっている土地を乙に売却し，その売買代金の受領を終え，当該土地の所有権が乙に移転した後，乙がその移転登記を完了する前に，甲が，事情を知った丙に当該土地を売却し，丙がその移転登記を完了した場合には，丙が当該土地の所有権の取得を乙に対抗できるか否かにかかわらず，甲には横領罪が成立する。
ウ. 甲は，１９歳の乙と同人所有の絵画の売買契約を締結し当該絵画の引渡しを受けたが，乙が親権者の同意がないことを理由に同契約を取り消した。甲はこれを知りながら，乙に無断で当該絵画を丙に売却して丙に引き渡した場合，甲乙間の売買契約が初めから無効であったものとみなされるため，甲と乙の間に委託信任関係は存在しないこととなるから，甲には横領罪は成立しない。
エ. 甲が，不在中の自宅に誤って配達された他人あての贈答品の高級食材を食べてしまった場合，甲の当該食材に対する占有は委託信任関係に基づくものではないので，甲には横領罪は成立しない。
オ. 甲が，自己が所有し，登記簿上も自己が所有権者となっている土地を乙に売却し，その売買代金の受領を終え，当該土地の所有権が乙に移転した後，乙がその移転登記を完了する前に，甲が，当該土地に自己を債務者とし丙を抵当権者とする抵当権を設定し，その設定登記を完了したとしても，抵当権が実行されない限り当該土地に関する乙の所有権は影響を受けないから，甲には横領罪は成立しない。`,c1:"１．ア イ オ",c2:"２．ア ウ",c3:"３．イ ウ エ",c4:"４．イ エ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2008",num:"19",subject:"kei",q:"次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．禁錮以上の刑に処せられてその執行を猶予され，猶予の期間中保護観察に付された者が，同期間中に罪を犯し，１年以下の懲役刑の言渡しを受ける場合には，情状に特に酌量すべきものがあるときに限り，その刑の執行を猶予することができる。",c2:"２．刑の執行猶予の言渡しを受けた者が，猶予の期間内に更に罪を犯し，１００万円の罰金に処せられたときは，同期間が経過するまでは刑の執行猶予の言渡しを取り消すことができる。",c3:"３．牽連犯について有期の懲役又は禁錮に処するとき，その刑は，その最も重い罪について定めた刑の長期にその二分の一を加えたものを長期とする。",c4:"４．懲役に処せられた者がその執行を終わった日から５年以内に更に罪を犯し，その者を有期懲役に処するとき，その刑は，その罪について定めた刑の長期にその二分の一を加えたものを長期とする。",c5:"５．心神耗弱者の行為は，情状により，その刑を減軽することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2008",num:"20",subject:"kei",q:"次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．甲は，盗んだ銀行キャッシュカードを現金自動預払機に挿入して現金を払い戻し，これを手に入れた。この場合，甲は人を欺いていないから，甲に詐欺罪は成立しないが，人の事務処理に使用する電子計算機に不正な指令を与えて財産権の得喪・変更に係る不実の電磁的記録を作り，財産上の利益を得たといえるから，甲に電子計算機使用詐欺罪が成立する。",c2:"２．甲は，乙所有の土地を甲が乙から買い受けた事実がないのに，登記申請に必要な書類を偽造して登記官に提出し，当該土地につき乙から甲への所有権移転登記をさせた。この場合，不動産の占有が甲に移ったといえるから，甲に詐欺罪が成立する。",c3:"３．甲は，架空人である乙名義でＸ銀行Ｙ支店に預金口座を開設しようと企て，乙に成り済まして預金口座を開設し，乙名義の預金通帳の交付を受けた。この場合，預金通帳は口座開設に伴って発行される証書にすぎないので，甲に詐欺罪は成立しない。",c4:"４．甲は，架空人である丙名義で預金口座を開設した上，乙に対し，「あなたの息子が交通事故を起こし，直ちに示談のお金が必要である。」とうそを言って，自ら通帳・印鑑を所持する上記口座に乙をして現金を振り込ませた。この場合，甲は，いまだ他人名義の口座に振込みを受けたにすぎないので，甲には詐欺未遂罪が成立するにとどまる。",c5:"５．甲は，生活費に窮したため，返済する意思がないのに，知人の乙に，「故郷にいる自分の父親が亡くなった。故郷に帰るお金がないので貸してほしい。」旨のうそを言って金員の借入れを申し込んだところ，乙は，そのうそを見破り，甲に返済の意思がないことを察したが，憐憫の情から，甲に現金を手渡した。この場合，乙は錯誤に陥っていないので，甲には詐欺未遂罪が成立するにとどまる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2008",num:"21",subject:"kso",q:`次のアからキまでの各事項のうち，法定刑によって法律上当然にその結論が異なることにはならないものの組合せは，後記１から５までのうちどれか。
ア. 被疑者の国選弁護人選任請求権の有無
イ. 検察官による起訴猶予の可否
ウ. 簡易裁判所が専属的に管轄権を有する事件であるか否か
エ. 必要的弁護事件であるか否か
オ. 保釈保証金の没取決定の可否
カ. 公判前整理手続に付する決定の可否
キ. 第一審の公判期日における被告人の出頭義務の有無`,c1:"１．ア エ キ",c2:"２．ア オ カ",c3:"３．イ ウ キ",c4:"４．イ オ カ",c5:"５．ウ エ カ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2008",num:"22",subject:"kso",q:`任意捜査と強制捜査の区別に関する次の【記述】の①から⑬までの（ ）内には，「任意」又は「強制」のいずれかの語句が入る。②，④，⑦及び⑪の（ ）内に入る語句の組合せとして正しいものは，後記１から６までのうちどれか。
【記 述】
　刑事訴訟法は，何が強制捜査であるのかについての定義を示していないため，その定義をめぐって学説は分かれており，まず，被疑者の逮捕，捜索差押えのような物理的な実力の行使を伴う捜査が（①）捜査の典型であるとされてきたことから，物理的な実力の行使を伴う場合に限るとする説と，それに加えて人に義務を負わせるものも含むとする説とが対立し，後説が従来の通説であった。そして，いかなる場合が人に義務を負わせるものに当たるかの判断基準については，間接強制を伴う場合に限るという考え方と，義務の履行を強制する手段の有無を問わないという考え方に分かれていた。前者の考え方によると，同法第１９７条第２項の公務所に対する照会は，（②）捜査，同法第２２６条の第一回公判期日前の証人尋問は，（③）捜査ということになる。ところが，科学技術の発達が犯罪捜査に応用されるようになると，例えば，通信の当事者のいずれの同意も得ないで電気通信の傍受を行うといった対象者に対する物理的な実力行使や義務付けを伴わない捜査手法が現れてきた。前記各説によると，こうした捜査手法は（④）捜査であることになるが，この結論には大きな疑問がある。また，逆に，例えば，相手方を呼び止めるため，腕に軽く手を掛ける行為のように，物理的な実力が用いられたからといって直ちに（⑤）捜査だとすることが適切か疑わしい場合もある。
　その後，物理的な実力によると否とを問わず，個人の権利や法益を侵害するものはすべて（⑥）捜査であるという学説が現れた。この学説によると，街頭で公然と行動している人を写真に撮る捜査は，対象者に「みだりに容ぼうを撮影されない自由」が認められるので，（⑦）捜査に該当することになろう。この学説が物理的な実力の行使あるいは人に義務を負わせるという判断基準から脱却しようとした点は正鵠を射ているが，刑事訴訟法の（⑧）捜査に関する要件や手続はかなり厳格であるので，およそ何らかの権利や利益が侵害されればすべて（⑨）捜査であるというのは妥当ではなく，やはり，そのような厳格な要件や手続によって保護する必要があるほど重要な権利や利益の制約を伴う場合に初めて（⑩）捜査であると考えるべきであろう。こう考えれば，街頭で公然と行動している人を写真に撮る捜査と，住居内の普通では外から見えないような場所にいる人物を高性能の望遠レンズや赤外線フィルムを用いて密かに写真に撮る捜査が，同じ写真撮影でありながら制約される権利や利益の重要性に違いがあるとして，前者を（⑪）捜査，後者を（⑫）捜査とする結論を導くことが可能となり，この結論は常識にも合致する。そして，このように解したとしても，（⑬）捜査は，制約される権利や利益の重要性と当該捜査の必要性・緊急性を比較衡量し，相当と認められる限度でのみ許容されるのであるから，権利や利益の保護に欠けるわけではないのである。`,c1:"１．②強制 ④任意 ⑦任意 ⑪任意",c2:"２．②任意 ④任意 ⑦強制 ⑪強制",c3:"３．②強制 ④強制 ⑦任意 ⑪強制",c4:"４．②強制 ④強制 ⑦任意 ⑪任意",c5:"５．②任意 ④任意 ⑦強制 ⑪任意",c6:"６．②任意 ④強制 ⑦強制 ⑪強制",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2008",num:"23",subject:"kso",q:`告訴の効力に関する次のアからエまでの各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。
ア. Ｖは，自己の所有する自転車が損壊されたとして，甲を器物損壊の罪で告訴した。捜査の結果，真犯人は乙であり，甲は事件と無関係であることが判明した。この場合，Ｖの告訴の効力は乙に対して及ぶ。
イ. Ｖ１は，月刊誌に自己の名誉を毀損する記事が掲載されたとして，同月刊誌の編集責任者甲を名誉毀損の罪で告訴した。捜査の結果，甲に，前記記事によるＶ１及びその愛人Ｖ２に対する名誉毀損の事実が認められた場合，Ｖ１の告訴の効力は，甲のＶ２に対する名誉毀損の事実にも及ぶ。
ウ. Ｖは，甲から住居侵入及びこれと科刑上一罪の関係にある強制わいせつの被害を受けたが，甲を住居侵入の罪に限定して告訴した。この場合，Ｖの告訴の効力は，強制わいせつの事実には及ばない。
エ. Ｖは，自宅から自己の所有する宝石が盗まれたとして，親族でない甲を窃盗の罪で告訴した。捜査の結果，甲がＶの別居中の弟乙とともに窃盗に及んだことが判明した場合，Ｖの告訴の効力は，乙に対しても及ぶ。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2008",num:"24",subject:"kso",q:`緊急逮捕に関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。なお，死体遺棄罪（刑法第１９０条）の法定刑は，３年以下の懲役である。
ア. 強盗殺人罪の被疑者が警察署に自ら出頭して自首した場合，被疑者を警察署内に待たせておいてその間に通常逮捕のための逮捕状を求めることができるので，緊急逮捕が許されることはない。
イ. 緊急逮捕の要件としての罪を犯したことを疑うに足りる「充分な理由」とは，通常逮捕の場合における「相当な理由」よりは一層高度な嫌疑をいい，具体的には，公訴を提起するに足りる程度の嫌疑があることをいう。
ウ. 死体遺棄罪の幇助は，「死刑又は無期若しくは長期３年以上の懲役若しくは禁錮にあたる罪」に該当しないので，これによる緊急逮捕は許されない。
エ. 緊急逮捕状を発するには，逮捕後直ちに裁判官の逮捕状を求める手続がなされたことのほか，逮捕時における緊急逮捕の要件及び逮捕状発付時における通常逮捕の要件の双方を満たしていることが必要である。
オ. 緊急逮捕の要件としての罪を犯したことを疑うに足りる「充分な理由」があるか否かの判断においては，逮捕後に生じた状況を資料とすることは許されない。`,c1:"１．ア イ",c2:"２．イ ウ",c3:"３．ウ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2008",num:"25",subject:"kso",q:"勾留の要件に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．被疑者が，住民票記載の住所について，所有権，賃借権などのそこに居住する正当な権原を有している場合には，現実にどこで起臥寝食しているかにかかわらず，住民票記載の住所が「定まつた住居」に当たる。",c2:"２．「罪証を隠滅すると疑うに足りる相当な理由がある」といえるためには，被疑者において主観的に証拠を隠滅しようという意図があれば足り，証拠隠滅行為がなされた場合に，罪証隠滅の効果が生じ得るものであることは必要ではない。",c3:"３．「罪証を隠滅すると疑うに足りる相当な理由がある」における罪証隠滅行為とは，必ずしも被疑者が自らこれを実行する場合に限られるものではなく，被疑者が第三者に命じたり，指示したりして，その第三者に罪証隠滅行為をさせる場合も含まれる。",c4:"４．相当年数同じ会社に勤務している被疑者と，日雇として短期間で勤務先を転々と変えている被疑者を比較した場合，「逃亡し又は逃亡すると疑うに足りる相当な理由があるとき」の判断に差異は生じない。",c5:"５．罪責が重大であることは，「逃亡し又は逃亡すると疑うに足りる相当な理由」を肯定する方向に働く事情であるが，被疑者に同種前科があることを「逃亡し又は逃亡すると疑うに足りる相当な理由」を肯定する方向に考慮することは許されない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2008",num:"26",subject:"kso",q:"勾留理由開示に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．被告人の勾留については，勾留の理由の開示を請求することはできない。",c2:"２．勾留の理由の開示は，公開の法廷でこれをしなければならない。",c3:"３．勾留の理由の開示は，勾留の基礎となっている犯罪事実と，勾留されている者が罪を犯したことを疑うに足りる相当な理由を告げれば足りる。",c4:"４．被疑者は，勾留の理由を開示する期日において，勾留の理由についての意見を述べることはできない。",c5:"５．勾留の執行停止により釈放されている被疑者であっても，勾留の理由の開示を請求することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2008",num:"27",subject:"kso",q:`身体の検査，捜索等に関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から６までのうちどれか。ただし，判例がある場合には，それに照らして考えるものとする。
ア. 身体検査令状により身体の検査をすることができる対象は，被疑者に限られており，被疑者以外の者の身体の検査をすることはできない。
イ. 身体の拘束を受けている被疑者の指紋又は足型を採取するには，被疑者を裸にしない場合であっても，身体検査令状によらなければならない。
ウ. 身体検査令状により女子の身体を検査する場合には，医師又は成年の女子をこれに立ち会わせなければならない。
エ. 強制採尿のための捜索差押令状には，強制採尿は医師をして医学的に相当と認められる方法により行わせなければならない旨の条件の記載が不可欠である。
オ. 身柄を拘束されていない被疑者を採尿場所へ任意に同行することが事実上不可能であると認められる場合には，強制採尿のための捜索差押令状の効力として，採尿に適する最寄りの場所まで被疑者を連行することができる。`,c1:"１．ア イ ウ",c2:"２．ア イ エ",c3:"３．ア ウ エ",c4:"４．イ ウ エ",c5:"５．イ ウ オ",c6:"６．ウ エ オ",c7:"",c8:"",c9:"",c10:"",a:"6"},{year:"2008",num:"28",subject:"kso",q:`公訴の提起前における押収及び捜索に関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。
ア. 被疑者以外の者の身体，物又は住居その他の場所については，押収すべき物の存在を認めるに足りる状況のある場合に限り，捜索をすることができる。
イ. 甲の自宅における捜索差押許可状の執行中は，甲の同居の親族に対しても，許可を得ないで甲の自宅に出入りすることを禁止することができる。
ウ. 捜索差押許可状には，犯罪事実の要旨を記載しなければならない。
エ. 殺人事件の犯人が公道上の犯行現場に遺留した凶器を押収するには，差押許可状が必要である。
オ. 捜査機関に対し，証拠物を任意に提出することができる者は，当該証拠物の所有者に限られる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2008",num:"29",subject:"kso",q:"第一回の公判期日前に行われる証人尋問に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．被告人，被疑者又は弁護人は，あらかじめ証拠を保全しておかなければその証拠を使用することが困難な事情があるときは，第一回の公判期日前に限り，裁判官に証人の尋問を請求することができる。",c2:"２．犯罪の捜査に欠くことのできない知識を有すると明らかに認められる被疑者以外の者が，取調べに対して，出頭又は供述を拒んだ場合には，第一回の公判期日前に限り，検察官は，裁判官にその者の証人尋問を請求することができる。",c3:"３．取調べに際して任意の供述をした被疑者以外の者が，公判期日においては前にした供述と異なる供述をするおそれがあり，かつ，その者の供述が犯罪の証明に欠くことができないと認められる場合には，第一回の公判期日前に限り，検察官は，裁判官にその者の証人尋問を請求することができる。",c4:"４．第一回の公判期日前に行われる証人尋問により作成された証人尋問調書は，刑事訴訟法第３２１条第１項第１号の「裁判官の面前における供述を録取した書面」に該当する。",c5:"５．裁判官は，検察官の請求による第一回の公判期日前の証人尋問を行う際，被告人，被疑者又は弁護人をその尋問に立ち会わせなければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2008",num:"30",subject:"kso",q:`弁護に関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から６までのうちどれか。ただし，判例がある場合には，それに照らして考えるものとする。
ア. 被告人に氏名を記載することができない合理的な理由がないのに，被告人の署名のない弁護人選任届によってした弁護人の選任は無効である。
イ. 公訴の提起前にした弁護人の選任は，第一審においてその効力を有しないので，公訴の提起後，改めて弁護人の選任をしなければならない。
ウ. 公訴の提起後における弁護人の選任は，審級ごとにこれをしなければならない。
エ. 必要的弁護事件において，弁護人が出頭しないときは，職権で弁護人を付することができるものの，弁護人が出頭しないおそれがあるにとどまるときは，職権で弁護人を付することはできない。
オ. 裁判官は，殺人被疑事件で在宅のまま取調べを受けている被疑者からの国選弁護人選任の請求があった場合，被疑者のため弁護人を付さなければならない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"６．エ オ",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2008",num:"31",subject:"kso",q:"公訴の提起に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．公訴の提起は，実務上，起訴状を提出して行うのが通例であるが，緊急やむを得ない場合には，口頭によることもできる。",c2:"２．起訴状には，被告人の氏名を記載しなければならないので，被告人の氏名が判明しない場合には，公訴を提起することはできない。",c3:"３．公訴の提起と同時に略式命令の請求をする場合であっても，起訴状一本主義の適用があるので，検察官は，略式命令の請求と同時に，略式命令をするために必要があると思料する書類及び証拠物を裁判所に差し出すことはできない。",c4:"４．起訴状の公訴事実は，訴因を明示してこれを記載しなければならず，罪名は，適用すべき罰条を示してこれを記載しなければならないところ，数個の訴因及び罰条は，予備的に又は択一的にこれを記載することができる。",c5:"５．告訴又は告発がなされた事件については，当該告訴又は告発が取り消されない限り，検察官は，公訴を提起するに足りる犯罪の嫌疑がないと思料する場合を除き，公訴を提起しなければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2008",num:"32",subject:"kso",q:`公判前整理手続に関する次のアからオまでの各記述につき，正しい場合には１を，誤っている場合には２を選びなさい。
ア. 公判前整理手続においては，証拠調べの請求をさせるだけでなく，証拠調べをする決定又は証拠調べの請求を却下する決定をすることができる。
イ. 検察官は，事件が公判前整理手続に付されたときは，公判期日において証拠により証明しようとする事実を記載した書面を，裁判所に提出し，及び被告人又は弁護人に送付しなければならない。
ウ. 被告人は，事件が公判前整理手続に付されたときは，事件の争点及び証拠を整理するために公判前整理手続期日に出頭しなければならず，被告人が出頭しないときは，その手続を行うことができない。
エ. 検察官及び被告人又は弁護人は，公判前整理手続が終わった後には，やむを得ない事由によって当該公判前整理手続において請求することができなかった証拠のうち，情状に関するものに限って，その証拠調べを請求することができる。
オ. 公判前整理手続に付された事件については，被告人又は弁護人は，証拠により証明すべき事実その他の事実上及び法律上の主張があるときは，証拠調べのはじめに行われる検察官の冒頭陳述に引き続き，これを明らかにしなければならない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"11221"},{year:"2008",num:"33",subject:"kso",q:`検察官は，ハンマーを凶器とする傷害被告事件の証拠として，犯行を目撃したＷの検察官に対する供述調書及び犯行に使用されたとされるハンマーの証拠調べを請求した。この場合に関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。
ア. ハンマーには伝聞法則は適用されないから，裁判所は，弁護人の意見を聴かずに，ハンマーを証拠として採用するか否かを決定することができる。
イ. Ｗの証人尋問が行われ，刑事訴訟法第３２１条第１項第２号後段の規定により，Ｗの証言と相反する供述が録取されたＷの検察官に対する供述調書の証拠調べが請求された場合，裁判所は，証拠能力の有無を判断するためであっても，その採用決定をする前に，同供述調書を見ることはできない。
ウ. Ｗの証人尋問が行われ，Ｗの証言と相反する供述が録取されたＷの検察官に対する供述調書が刑事訴訟法第３２１条第１項第２号後段の規定により証拠として採用された場合であっても，Ｗの証言は証拠能力を有する。
エ. ハンマーの証拠調べの方法は，ハンマーを裁判所と訴訟関係人が認識できる状態にすることである。
オ. ハンマーがいまだ証拠として採用されていない段階でＷの証人尋問が行われた場合，Ｗに対するハンマーを示しての尋問が許されることはない。`,c1:"１．ア イ",c2:"２．イ オ",c3:"３．ウ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2008",num:"34",subject:"kso",q:`次のアからエまでの【方法】は，検察官が，共犯者として併合審理を受けている甲及び乙の関係で，目撃者Ｗの検察官に対する供述調書の証拠調べを請求したのに対し，甲の弁護人はその供述調書を証拠とすることに同意したが，乙の弁護人はこれを不同意とした場合に考えられる審理の進め方である。後記【発言】は，学生ＡないしＤが，【方法】のいずれかについて発言したものであるが，【発言】と【方法】を対応させた場合，その組合せとして最も適切なものは，後記１から５までのうちどれか。
【方 法】
ア. 弁論を分離し，甲，乙の審理を別個に進行させることとし，甲の審理で供述調書を採用決定して取り調べ，後日，乙の審理で証人Ｗを尋問する方法
イ. 併合審理のまま，まず，甲の関係では，供述調書を採用決定して取り調べ，次に，乙の関係では，証人Ｗを尋問する方法
ウ. 併合審理のまま，甲の関係では，供述調書の採用決定はするが，その証拠調べは，乙の関係では，証人Ｗを尋問する方法での証人Ｗの尋問終了後に行う方法
エ. 併合審理のまま，甲の関係では，供述調書の採用決定を留保した上で，甲及び乙の関係で証人Ｗを尋問し，その結果，証言内容が供述調書と同じ内容である場合には，甲の関係では，検察官に供述調書の証拠調べ請求の撤回を勧告するか，その請求を却下し，証言内容が供述調書と相反する内容である場合には，甲の関係では，刑事訴訟法第３２６条第１項により供述調書を採用決定して取り調べ，乙の関係では，同法第３２１条第１項第２号後段の適用の可否を検討する方法
【発 言】
学生Ａ. この方法は，裁判官が先に伝聞証拠で心証を形成してしまうのではないかという不安に配慮している上，何を証拠とするかについて当事者の意向を反映させることができるが，同一手続内における事実認定の合一的確定の要請に反するおそれがある。
学生Ｂ. この方法は，裁判官が先に伝聞証拠で心証を形成してしまうのではないかという不安が残るという問題に加え，同一手続内における事実認定の合一的確定の要請に反するおそれもあるが，何を証拠とするかについて当事者の意向を反映させることができる。
学生Ｃ. この方法は，同一手続内で二つの事実認定が不整合になるという問題は回避できるものの，引き続き同一の裁判官による審理がなされるという運用であれば，先に伝聞証拠で心証を形成してしまうのではないかという不安は解消されない。
学生Ｄ. この方法は，一方の被告人からみれば，供述調書の内容より証言の方が有利になるとは限らないという点に対する配慮が足りない。`,c1:"１．学生Ａア　学生Ｂウ　学生Ｃイ　学生Ｄエ",c2:"２．学生Ａイ　学生Ｂエ　学生Ｃア　学生Ｄウ",c3:"３．学生Ａウ　学生Ｂイ　学生Ｃア　学生Ｄエ",c4:"４．学生Ａエ　学生Ｂア　学生Ｃウ　学生Ｄイ",c5:"５．学生Ａエ　学生Ｂウ　学生Ｃイ　学生Ｄア",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2008",num:"35",subject:"kso",q:"証人尋問に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．証人には，自己の直接体験した事実だけでなく，その体験した事実により推測した事項を供述させることができる。",c2:"２．証人尋問は公開の法廷で行わなければならないので，裁判所は，公判期日外において，裁判所外で証人を尋問することはできない。",c3:"３．６歳の幼児は，その年齢だけによって，体験した事実を認識，記憶し，かつ，その事実を表現する能力に欠けているといえるので，証人としてこれを尋問することはできない。",c4:"４．検察官は，あらかじめ供述調書の証拠調べを請求しておかなければ，その供述者の証人尋問を請求することはできない。",c5:"５．宣誓した証人は，自己が刑事訴追を受けるおそれのある証言を拒むことはできないものの，その証言した内容が自己の刑事裁判で証拠とされることはない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2008",num:"36",subject:"kso",q:`証人の保護に関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から５までのうちどれか。なお，記述中の証人への付添いは刑事訴訟法第１５７条の２，証人の遮へいは同法第１５７条の３，ビデオリンク方式による証人尋問は同法第１５７条の４に，それぞれ規定されているものをいう。
ア. 証人への付添いは，証人の精神的負担の軽減を目的とするものであるので，被害者が証人である場合に限定されている。
イ. 証人に付き添うこととされた者は，その証人の供述中，裁判官若しくは訴訟関係人の尋問若しくは証人の供述を妨げ，又はその供述の内容に不当な影響を与えるような言動をしてはならない。
ウ. 証人の遮へいについては，被告人と証人との間で遮へい措置を採ることはできるが，裁判の公開という憲法上の要請があるので，傍聴人と証人との間で遮へい措置を採ることはできない。
エ. ビデオリンク方式による証人尋問の対象は，強姦罪等の性犯罪の被害者に限定されているので，暴力団員による恐喝事件の被害者は対象とならない。
オ. 被告人から証人の状態を認識することができないようにするための遮へい措置については，弁護人が出頭している場合に限り，採ることができる。`,c1:"１．ア ウ",c2:"２．イ エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2008",num:"37",subject:"kso",q:`次のⅠ及びⅡの【見解】は，常習一罪などの実体法上一罪の関係にある数個の可罰的行為についての勾留の効力に関する考え方を述べたものである。これらの【見解】のいずれかを前提に，後記【事例】における権利保釈の除外事由に関する判断について述べた後記アからカまでの【記述】のうち，正しいものの組合せは，後記１から５までのうちどれか。
【見 解】
Ⅰ. 一罪の一部を構成する可罰的行為についての勾留の効力は，起訴の有無にかかわらず，当然に他の部分に及ぶ。
Ⅱ. 一罪の一部を構成する可罰的行為についての勾留の効力は，起訴の有無にかかわらず，他の部分に及ばない。
【事 例】
甲は，平成○○年３月１０日（ａ事件）に甲が経理係長として勤務する株式会社Ｖ所有の現金１００万円を横領したという業務上横領事件で，同年５月１日，逮捕され，引き続き勾留された上，勾留中のまま起訴された。甲には，同年３月１２日（ｂ事件）と同年４月１５日（ｃ事件）に，同様に株式会社Ｖ所有の現金各２００万円を横領したという業務上横領の余罪があり，これらの事件はいまだ起訴されていない。ａ事件の第一回公判期日前である同年６月１日，甲の弁護人から，保釈請求がなされた。なお，ａ事件とｂ事件は包括一罪の関係にあり，これらとｃ事件は併合罪の関係にある。
【記 述】
ア. Ⅰの考え方に立ったとき，ａ事件に関して，甲が罪証を隠滅すると疑うに足りる相当な理由がなくても，ｂ事件に関して，それがある場合には，権利保釈は認められない。
イ. Ⅰの考え方に立ったとき，ａ事件に関して，甲が罪証を隠滅すると疑うに足りる相当な理由がなくても，ｃ事件に関して，それがある場合には，権利保釈は認められない。
ウ. Ⅰの考え方に立ったとき，甲が常習としてａ事件を犯したものであるか否かを判断するために，ｃ事件の存在を考慮することは許されない。
エ. Ⅱの考え方に立ったとき，ａ事件に関して，甲が罪証を隠滅すると疑うに足りる相当な理由がなければ，ｂ事件に関して，それがある場合であっても，この点を理由として権利保釈が否定されることはない。
オ. Ⅱの考え方に立ったとき，ａ事件に関して，甲が罪証を隠滅すると疑うに足りる相当な理由がなければ，ｃ事件に関して，それがある場合であっても，この点を理由として権利保釈が否定されることはない。
カ. Ⅱの考え方に立ったとき，甲が常習としてａ事件を犯したものであるか否かを判断するために，ｂ事件の存在を考慮することは許されない。`,c1:"１．ア ウ カ",c2:"２．ア エ オ",c3:"３．ア オ カ",c4:"４．イ エ オ",c5:"５．ウ エ カ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2008",num:"38",subject:"kso",q:`刑事訴訟法第３２６条第１項の「同意」に関する次のアからエまでの各記述につき，正しい場合には１を，誤っている場合には２を選びなさい。
ア. 弁護人は，独立して訴訟行為をすることができるので，被告人の明示の意思に反しても，書面又は供述を証拠とすることに同意することができる。
イ. 書面又は供述が意味内容において分割可能な場合には，その一部を同意し，その他の部分を不同意とすることができる。
ウ. 書面又は供述を証拠とすることの同意は，第一審の判決が宣告されるまでは，いつでも撤回することができる。
エ. 第一審において，書面又は供述を証拠とすることに同意した場合，その効果は，第一審にしか及ばないので，控訴審では，その書面又は供述を不同意とすることができる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2122"},{year:"2008",num:"39",subject:"kso",q:"被告人の死亡を理由とする公訴棄却決定が確定した場合であっても，新たに発見された証拠によって，その公訴棄却決定が被告人作出の内容虚偽の証拠に基づくものであったことが明白となったときは，再起訴を妨げるものではないとの結論を採る場合，次の１から５までの各記述のうち，この結論の論拠となり得ないものはどれか。",c1:"１．刑事訴訟法が公訴棄却事由として定める「被告人が死亡したとき」とは，被告人の死亡ではなく，被告人の死亡の証拠がある場合の意味である。",c2:"２．被告人の死亡による公訴棄却決定は，非終局的な決定であるため，確定裁判の効力が生じない。",c3:"３．再起訴禁止による利益を受けるためには，被告人にその利益を要求できる資格が必要であると解すべきである。",c4:"４．被告人の死亡による公訴棄却決定は，訴訟続行が無意味となるため訴訟を打ち切る点において，心神喪失を理由とする公判手続の停止と同性質のものである。",c5:"５．再起訴禁止の効力が及ばなくなる事情の変更とは，新証拠の発見ではなく，被告人の死亡という事実自体の変化でなければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2008",num:"40",subject:"kso",q:`再審事由を定める刑事訴訟法第４３５条第６号は，「明らかな証拠をあらたに発見したとき」と規定して，いわゆる証拠の明白性と新規性の要件を定めているが，証拠の明白性に関する次のアからエまでの各記述のうち，判例に照らして，正しいものの組合せは，後記１から４までのうちどれか。
ア. 「明らかな証拠」とは，有罪等の確定判決を覆し無罪等の事実認定に到達する高度の蓋然性のある証拠を意味する。
イ. 「明らかな証拠」とは，確定判決における事実認定につき合理的な疑いを抱かせ，その認定を覆すに足りる蓋然性のある証拠を意味する。
ウ. 証拠の明白性は，申立てに係る証拠のみを単独に評価する孤立的な方法によって判断すべきである。
エ. 証拠の明白性は，もし申立てに係る証拠が確定判決を下した裁判所の審理中に提出されていたとするならば，果たしてその確定判決においてなされたような事実認定に到達したであろうかどうかという観点から，当の証拠と他の全証拠と総合的に評価して判断すべきである。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ エ",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2007",num:"1",subject:"ken",q:`次の文章は，「法の支配」に関するものである。ＡからＤまでの各空欄に，後記１から８までの中から適切なものを補充して，文章を完成させなさい。
「法の支配」の原理は，中世における「古き良き法」の優位の思想から生まれ，英米法の根幹として発展してきた。古典的には 「法の支配」とは専断的な国家権力の支配，すなわち 「【Ａ】支配」を排斥し，権力を法で拘束することによって，国民の権利・自由を擁護することを目的とする原理である。
「法の支配」の原理にいう「法」の観念が問題となる。それは，議会が一定の手続に従って制定したという形式的要件だけではなく，その内容が「理にかなっている」ものでなければならないという実質的要件を含む観念である。法の支配という場合の「法」とは，【Ｂ】の思想と固く結びついているのであり，権威主義的な法概念ではなく，民主主義的な法概念である。
日本国憲法も 法の支配 の原理に立脚しているといえる。それは 憲法の最高法規性の明確化，【Ｃ】人権の保障，適正手続の保障，【Ｄ】に見られるような司法権の拡大強化，そして裁判所の違憲審査権の確立からみて明らかである。

１. 神の
２. 憲法第７６条第２項後段の行政機関による裁判の全面的禁止
３. 憲法第１１条及び第９７条に規定されているように，理念として「不可侵」である
４. 権力分立
５. 人の
６. 憲法第７６条第２項前段の特別裁判所の設置の禁止
７. 基本的人権
８. 憲法第１２条に規定されているように「常に公共の福祉のためにこれを利用する責任を負ふ」`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5736"},{year:"2007",num:"2",subject:"ken",q:`障害福祉年金の受給資格について国籍要件を課すことは，憲法第１４条第１項，第２５条に違反しないとした最高裁判所の判決（最高裁判所平成元年３月２日第一小法廷判決，判例時報１３６３号６８頁）に関する次のアからエまでの各記述について，正しいもの二つの組合せを，後記１から６までの中から選びなさい。
ア. この判決は，在留外国人に対する社会保障に関し，定住外国人か否かを区別しつつ，限られた財源の下では，福祉的給付を行うに当たり自国民を定住外国人より優先的に扱うことも許されるとした。
イ. この判決は，障害福祉年金の給付に関し，廃疾の認定日に日本国民でない者に受給資格を認めないことは憲法第１４条第１項に反しないとしたが，これは，同項の規定の趣旨は外国人に対しても及ぶとする考え方と矛盾しない。
ウ. この判決は，障害福祉年金の受給資格について国籍要件を課すことは憲法に違反しないと判示する一方，在留外国人に対する社会保障上の施策として，将来的には法律を改正して国籍要件を撤廃するのが望ましいとの判断を示した。
エ. この判決は，社会保障上の施策において在留外国人をどのように処遇するかは，立法府の広い裁量に委ねられており，国は特別の条約の存しない限り，その政治的判断によりこれを決定できるという考え方を前提としている。`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．イとウ",c5:"５．イとエ",c6:"６．ウとエ",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2007",num:"3",subject:"ken",q:`私人間における人権保障に関する次のアからエまでの各記述について，明らかに誤っているもの二つの組合せを，後記１から６までの中から選びなさい。
ア. 憲法は，国家対国民の関係を規律する法であるから，憲法の人権規定は，特段の定めのある場合を除いて私人間においては適用されないとする説は，国家と社会を分離する自由主義的国家論と，人権はすべての法秩序に妥当すべき価値であるとの考え方を理論的背景としていると指摘されている。
イ. 憲法の人権規定は，私人間においても直接適用されるとする説に対しては，私法の国家化をもたらし，私的自治の原則及び契約自由の原則の否定にならないか，国家権力に対抗するという人権の本質を変質ないし希薄化する結果を招くおそれがあるのではないかと指摘されている。
ウ. 市民社会の自律的作用を尊重すべきであることから，民法第９０条の公序良俗規定等の私法の一般条項を媒介として，憲法の人権規定を私人間において間接的に適用するとする説に対しては，資本主義の高度化に伴い，国家類似の組織を有し，国家類似の機能を行使する社会的権力の登場による人権侵害の危険性と可能性が増大していることを看過していると指摘されている。
エ. 私人相互間の社会的力関係から，一方が他方に優越し，事実上後者が前者の意思に服従せざるを得ない場合，憲法の人権規定を，私人間においても適用ないし類推適用するとする説に対しては，こうした関係は法的裏付けないしは基礎を欠く単なる社会的事実としての力の優越関係にすぎず，国又は公共団体の支配が権力の法的独占に基づいて行われる場合とは性質上の相違があると指摘されている。`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．イとウ",c5:"５．イとエ",c6:"６．ウとエ",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2007",num:"4",subject:"ken",q:`幸福追求権に関する次のアからエまでの各記述について，正しいもの二つの組合せを，後記１から６までの中から選びなさい。
ア. 学説における支配的見解は，幸福追求権の具体的権利性を肯定する。最高裁判所も，京都府学連事件判決において，憲法第１３条が保障するプライバシーの権利の一つとして，何人も，その承諾なしに，みだりにその容貌・姿態を撮影されない自由を有するものというべきである，と判示した。
イ. 学説における支配的見解は，幸福追求権を包括的基本権と把握する。しかし，実際に，幸福追求権からどのような具体的権利が導き出されるかについては，見解が分かれる。明文で規定されていない権利・自由で，最高裁判所が認めているのは ，ア. で挙げた権利・自由以外では，前科をみだりに公開されない自由だけである。
ウ. 学説における一般的自由説は，包括的基本権である幸福追求権の内容について「人格的生存」にとって不可欠という要件で限定しない。しかし，一般的自由説を採ることは，当該自由や権利の保障の程度という点で「人格」との関連性を考慮することと必ずしも矛盾しない。
エ. 学説における人格的利益説の場合，どのような権利・自由が「人格的生存にとって不可欠な利益」であるかは 必ずしも明らかでない。例えば，自己決定権としての髪型の自由について，人格的利益説を採る論者の間でも「人格的生存にとって不可欠な利益」であるか否か，見解が分かれる。`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．イとウ",c5:"５．イとエ",c6:"６．ウとエ",c7:"",c8:"",c9:"",c10:"",a:"6"},{year:"2007",num:"5",subject:"ken",q:`法の下の平等に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. 地方公共団体が売春の取締りについて各別に条例を制定する結果，その取扱いに差異を生じることがあっても，憲法第１４条第１項に反しないとした判決（最高裁判所昭和３３年１０月１５日大法廷判決）の多数意見は，憲法が認めた地方公共団体の条例制定権の尊重を論拠とするものである。
イ. 非嫡出子の相続分について定める民法第９００条第４号ただし書は憲法第１４条第１項に反しないとした決定（最高裁判所平成７年７月５日大法廷決定）の多数意見が用いた判断枠組は，立法目的が重要なものであるか否か，その目的と手段との間に事実上の実質的関連性が認められるか否かを審査するものである。
ウ. 尊属殺に関する削除前の刑法第２００条は憲法第１４条第１項に反するとした判決（最高裁判所昭和４８年４月４日大法廷判決）の多数意見の内容に着目すると，仮に，刑法が定める執行猶予の要件が緩和され，所定の減軽を経て執行猶予を付することが可能になれば，削除前の刑法第２００条は違憲ではないと解する余地がある。
エ. 女性のみに再婚禁止期間を定める民法第７３３条の立法趣旨は，父性推定の重複の回避と父子関係をめぐる紛争の防止にあるという判例（最高裁判所平成７年１２月５日第三小法廷判決）の理解からすると，立法当時に比べて父子関係の立証がはるかに容易になっている現状の下でも，立法目的の合理性を肯定することは可能である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1211"},{year:"2007",num:"6",subject:"ken",q:`政教分離原則に関する次のアからエまでの各記述について，最高裁判所の判例に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. 憲法の政教分離規定は，国家と宗教との完全な分離を実現することが実際上不可能であることを前提として，国家が宗教的に中立であることを求めるのではなく，国家と宗教とのかかわり合いが我が国の社会的・文化的諸条件に照らして，相当な限度を超えると判断される場合にこれを許さないとする趣旨である。
イ. 憲法第２０条第２項の狭義の信教の自由とは異なり，同条第３項による保障には限界があるが，同項にいう「宗教的活動」に含まれない宗教上の行為であっても，国及びその機関がそれへの参加を強制すれば，第２０条第２項に違反することになると解される。
ウ. 国及びその機関の行為が憲法第２０条第３項にいう「宗教的活動」に当たるか否かを検討するに当たっては，当該行為の外形的側面を考慮するのではなく，行為者の意図，目的，一般人に与える効果，影響等，諸般の事情を考慮し，社会通念に従って判断しなければならない。
エ. 神社自体がその境内において挙行する恒例の祭祀に際して地方公共団体が玉串料等を奉納することは，建築主が主催して建築現場において土地の平安堅固，工事の無事安全等を祈願するために行う儀式である起工式の場合とは異なり，既に慣習化した社会的儀礼にすぎないものになっているとはいえない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2121"},{year:"2007",num:"7",subject:"ken",q:`次の文章は，いわゆる泉佐野市市民会館事件判決（最高裁判所平成７年３月７日第三小法廷，民集４９巻３号６８７頁）の判示を要約したものである。後記の小問１及び２に答えなさい。
集会の用に供される公共施設の管理者は，施設をその集会のために利用させることによって，他の基本的人権が侵害され，公共の福祉が損なわれる危険がある場合には，その利用を拒否することができる。そして，制限が必要かつ合理的なものとして肯認されるかどうかは，基本的には，基本的自由としての集会の自由の重要性と，当該集会が開かれることによって侵害されることのある他の基本的人権の内容や侵害の発生の危険性の程度等を較量して決せられるべきものである。ただし，（ａ）<u>この較量をするに当たっては，集会の自由の制約は，基本的人権のうち精神的自由を制約するものであるから，経済的自由の制約における以上に厳格な基準の下になされなければならない。</u>それゆえ，本件会館条例が会館の使用を許可してはならない事由として規定している「公の秩序をみだすおそれがある場合」とは，広義の表現を採っているとはいえ，本件会館における集会の自由を保障することの重要性よりも，本件会館で集会が開かれることによって，人の生命，身体又は財産が侵害され，公共の安全が損なわれる危険を回避し，防止することの必要性が優越する場合をいうものと限定して解すべきであり，その危険性の程度としては，単に危険な事態を生ずる蓋然性があるというだけでは足りず，明らかな差し迫った危険の発生が具体的に予見されることが必要であると解するのが相当である。（ｂ）<u>このように限定して解する限り 当該規制は，他の基本的人権に対する侵害を回避し，防止するために必要かつ合理的なものとして，憲法第２１条に違反するものではない。</u>
＜小問１＞ 下線部（ａ）に関連する次の１から３までの見解のうち，明らかに誤っているものを選びなさい。
１. 経済的自由は，精神的自由と同様に，自己実現にとって不可欠であるだけでなく，人間生活の基盤をなす重要なものである。
２. 精神的自由といえども，それを保障するためには殺人や傷害といった犯罪行為を取り締まる法制度が必要であるから，経済的自由と性格が異なるものではない。
３. 精神的自由は民主主義過程の維持保全にとって不可欠な権利であるが，自己実現に役立つわけではない。
＜小問２＞ 下線部（ｂ）と同じ法律解釈の方法をとった最高裁判所の判決を次の１から３までの中から選びなさい。
１. 「主要食糧の政府に対する売渡を為さざることを煽動したる者」を処罰する食糧緊急措置令の規定が憲法第２１条に違反しないとした判決。
２. 「選挙に関し，投票を得若しくは得しめ又は得しめない目的をもって戸別訪問をすること」を処罰する公職選挙法の規定が憲法第２１条に違反しないとした判決。
３. 「風俗を害すべき書籍，図画，彫刻物その他の物品」を輸入禁制品として掲げる関税定率法の規定が憲法第２１条に違反しないとした判決。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"33"},{year:"2007",num:"8",subject:"ken",q:`居住・移転の自由に関する次の文章の空欄アからオまでに，後記ａからｊまでの各文から適切なものを選択して文章を完成させる場合の正しい組合せを，後記１から６までの中から選びなさい。
憲法第２２条は，職業選択の自由とともに，居住・移転の自由を保障している。この自由は，自己の住所又は居所を自由に決定し，また，自己の欲する場所へ自由に移動することを内容とする。居住・移転の自由は，【ア】。それゆえ，居住・移転の自由は，かかる歴史的背景に基づいて，経済的自由の一つに数えられてきたのである。しかし，この自由は，【イ】。また，現代社会においては，【ウ】。居住・移転の自由の中に海外渡航の自由が含まれるかどうかについては議論の存するところである。判例・多数説は，【エ】が，幸福追求権の一つと解する説もある。日本に在留する外国人には【オ】。
ａ. 封建時代には厳しく制限されていたものであるが，それが近代社会に至って確立することにより，資本主義経済の基礎的条件が整えられることになった
ｂ. 出国の自由はあるが，再入国の自由については争いがある
ｃ. 外国への移住は外国に定住するための海外渡航であるから，その中に一時的な外国への旅行である海外渡航も含まれると解する
ｄ. 身体の拘束を解く意義を有するため，人身の自由の一環としてとらえることも可能である
ｅ. 居住・移転の自由は人間らしい生活の基礎をなすものとされ，その生存権的基本権という側面が強く意識されるようになっている
ｆ. 近代立憲主義の萌芽期から認められていた最も古い人権の一つであるが，自明の自由と解されたために憲法には明示的に規定されないことが多かった
ｇ. 再入国の自由はあるが，入国の自由については争いがある
ｈ. 広く知的な接触の機会を得るためにも居住・移転の自由が不可欠であるとされ，この自由が精神的自由の要素を併せ持つことが説かれるに至っている
ｉ. 個人の自由意思で国籍を離脱することが認められる以上，一時的な海外渡航の自由も当然に認められると解する
ｊ. 本来人間存在の根源にかかわる自由であるという意味においては，人権というよりも公序としてとらえられるべきものである
（ア，イ，ウ，エ，オの順とする）`,c1:"１．ｆ – ｄ – ｈ – ｉ – ｂ ",c2:"２．ｆ – ｄ – ｈ – ｃ – ｂ ",c3:"３．ａ – ｄ – ｈ – ｃ – ｂ",c4:"４．ａ – ｊ – ｅ – ｃ – ｇ ",c5:"５．ａ – ｊ – ｅ – ｉ – ｇ ",c6:"６．ｆ – ｊ – ｅ – ｉ – ｇ",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2007",num:"9",subject:"ken",q:`学問の自由に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤って。いる場合には２を選びなさい。 
ア. 学問の自由を保障した憲法第２３条の規定は，支配的見解によれば，大学における教授その他の研究者の学問研究の自由，学問研究成果の発表の自由及び教授の自由の保障に限定されており，国民一般の学問的活動の自由を保障するものとは解されていない。
イ. 最高裁判所の判例によれば，教科書検定制度は，普通教育の場で教科用図書として用いるための図書を作成する目的でつくられた規制であって，それは教科書の形態における研究結果の発表を著しく制限するから，学問の自由を保障した憲法第２３条に反する。
ウ. 真理の探究を目的とする学問研究の自由は，憲法第１９条の保障する思想の自由の一部を構成するが，研究活動が必ずしも内面的精神活動に限定されないことからすれば，学問研究の自由を思想の自由と同様の絶対的な自由と見ることはできない。
エ. 最高裁判所の判例によれば，学問の自由は教授の自由を含み，普通教育における教師に対しても一定の範囲における教授の自由が保障されるが，大学教育と異なり普通教育においては教師に完全な教授の自由は認められない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2211"},{year:"2007",num:"10",subject:"ken",q:`生存権に関する次のアからウまでの各記述について，最高裁判所の判例に照らして，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア. 憲法第２５条第２項は事前の積極的防貧施策をなすべき国の努力義務を定め，第１項は第２項の防貧施策の実施にかかわらずなお落ちこぼれた者に対し，「最低限度の生活」を確保するため事後的救貧施策をなすべき国の責務を定めている。したがって，第１項にかかわる生活保護の受給資格等が争われる事案は，国民年金法による障害福祉年金の受給制限が争われる第２項に関する事案よりも厳格な司法審査が行われる。
イ. 憲法上の人権規定の趣旨を具体化する立法が不備な場合に，国民が直接憲法に基づいて具体的な請求をなし得るかどうかは，人権規定により異なる。法律に補償に関する規定が欠けていても直接憲法第２９条第３項を根拠にして損失補償請求権が認められることがあるのに対して，生存権の場合は，憲法第２５条は個々の国民に対し具体的権利を付与していないから，直接同条に基づき具体的な給付請求をすることはできない。
ウ. 憲法第２５条の趣旨を立法により実現することについては，多方面にわたる複雑多様な，しかも高度の専門技術的な考察とそれに基づいた政策的判断を必要とする。したがって，憲法第２５条の規定の趣旨にこたえて具体的にどのような立法措置を講ずるかの選択決定は，立法府の広い裁量に委ねられるが，それが著しく合理性を欠き明らかに裁量の逸脱・濫用と見ざるを得ないような場合には裁判所が審査判断するのであるから，憲法第２５条は裁判規範性を持つといえる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"5"},{year:"2007",num:"11",subject:"ken",q:`公務員の労働基本権についての判例の動向に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. 一切の公務員の団体交渉権及び争議権を否認する昭和２３年政令第２０１号の合憲性が争われた弘前機関区事件判決（最高裁判所昭和２８年４月８日大法廷判決）において，最高裁判所は，憲法第１３条の「公共の福祉」論と憲法第１５条第２項の「全体の奉仕者」論を根拠にして，公務員の労働基本権の一律禁止を合憲とした。
イ. 公共企業体等労働関係法における争議権規制の合憲性が争われた全逓東京中郵事件判決（最高裁判所昭和４１年１０月２６日大法廷判決）において，最高裁判所は，公務員の労働基本権を原則として保障し，比較衡量論に基づき，その制限が著しく合理性を欠き，立法府の裁量を明らかに逸脱しているか否かにより合憲性を判断するアプローチを採用した。
ウ. 地方公務員法の規制をめぐる都教組事件判決（最高裁判所昭和４４年４月２日大法廷判決）と国家公務員法の規制をめぐる全司法仙台事件判決（最高裁判所昭和４４年４月２日大法廷判決）において，最高裁判所は，全逓東京中郵事件判決を継承しつつ，さらに，争議行為をあおる等の行為に対する刑事罰について，合憲限定解釈を行った。
エ. 国家公務員法の規制をめぐる全農林警職法事件（最高裁判所昭和４８年４月２５日大法廷判決）において，最高裁判所は，全逓東京中郵事件判決を変更する旨述べ，「公務員の地位の特殊性と職務の公共性」論，公務員の勤務条件に関する「財政民主主義」論を根拠にして，公務員の争議行為の一律禁止を合憲とした。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1212"},{year:"2007",num:"12",subject:"ken",q:`政党に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. 日本国憲法において，政党について直接規定する条文はない。憲法第２１条第１項の言論の自由の中で，政党を新たに設立する自由，政党に加入する自由，そして政党を脱退する自由が保障されている。
イ. 政党を憲法で直接規定することには，問題もある。なぜなら，それによって，政党の公的機関性が強まり，「戦う民主主義」の名の下に，法律によって党内民主主義を規制したり，反民主主義政党を排除したりするおそれも出てくるからである。
ウ. 国民と議会を媒介する組織として政党が発達しており，政党が国家意思の形成に事実上主導的な役割を演じる「政党国家」現象が生じている。そのような状況においては，政党の数と構造が政治体制の在り方を左右するといえる。
エ. 法律上は，政党法を始めとして，政治資金規正法，政党助成法，政党交付金の交付を受ける政党等に対する法人格の付与に関する法律，公職選挙法などの法律で，それぞれの法律の目的に応じて政党に関する規定が置かれている。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2112"},{year:"2007",num:"13",subject:"ken",q:`憲法第９条に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア. 政府は，憲法第９条第２項は自衛のために必要な最小限度の実力，すなわち自衛力の保持を禁じていないという立場をとっている。その論拠は，同条第１項は「国際紛争を解決する手段として」の戦争，すなわち侵略戦争を放棄するものであることと，同条第２項冒頭の「前項の目的を達するため」という文言からして，同条項における「戦力」の不保持は侵略戦争の放棄という目的にとって必要な限りのものであるということである。
イ. 最高裁判所は，自衛隊機の離着陸の差止めが求められた訴訟において，当該飛行場の設置及び航空機の配備・運用が違法か否かは，自衛隊の組織・活動の合法性に関する判断に左右されるのであるから，主権国としての我が国の存立の基礎に極めて重大な関係を持つ高度に政治的な問題であり，純司法的な機能を使命とする司法裁判所の審査には原則としてなじまず，法律上の争訟に当たらないと判示した。
ウ. 憲法第９条についての政府の解釈によれば，同条によって集団的自衛権の行使が禁じられており，個別的自衛権の行使に当たらないような武力の行使は許されないが，武力の行使に当たらない武器の使用は許される。いわゆるＰＫＯ等協力法などの自衛隊の海外派遣を認める法律においては，このような解釈を前提として，自衛隊員による自衛隊員等の生命，身体を防衛するための必要最小限の武器の使用が認められている。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2007",num:"14",subject:"ken",q:`国会の会期制に関する次のアからオまでの各記述について，正しいもの二つの組合せを，後記１から10までの中から選びなさい。
ア. 憲法は，会期制を採用しているが，会期の長さを特定しているわけではないので，国会法で常会の会期を１年間と定めることは可能である。
イ. 憲法には，会期延長に関する規定はないが，国会法はこれについて定め，常会，臨時会及び特別会の会期延長の議決について，衆議院の優越を認めている。
ウ. 憲法上，国会の会期を開始させる召集の実質的決定権は内閣にあると解されるが，臨時会については，内閣は，いずれかの議院の総議員の４分の１以上の要求があれば，その召集を決定しなければならない。
エ. 憲法は，「会期不継続の原則」を採用しているが，議院の議決によって継続審査に付された案件はその例外としているから，一院で議決された議案は，継続審査に付された後，他院でも議決されれば成立する。
オ. 憲法は，会期制を前提として「一事不再議の原則」を規定しているが，その例外として，法律案について衆議院が再議決することを認めている。`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．アとオ",c5:"５．イとウ",c6:"６．イとエ",c7:"７．イとオ",c8:"８．ウとエ",c9:"９．ウとオ",c10:"10．エとオ",a:"5"},{year:"2007",num:"15",subject:"ken",q:`内閣に関する次のアからエまでの各記述について，正しいもの二つの組合せを，後記１から６までの中から選びなさい。
ア. 内閣は，内閣総理大臣及びその他の国務大臣により構成される合議体である。国務大臣の任命は天皇により認証されるが，認証は効力要件ではないから，内閣総理大臣が国務大臣を任命した時点で，合議体としての内閣が成立する。
イ. 憲法第７２条は，内閣総理大臣が内閣を代表して行政各部の指揮監督を行うと規定しているが，行政各部の指揮監督は，本来，内閣の権限である。したがって，内閣は，行政各部の行為についても，国会に対して連帯して政治責任を負う。
ウ. 憲法第７３条は「他の一般行政事務の外」に内閣が行うものとして，第１号ないし第７号で重要な行政事務を列挙している。憲法上，同条以外に，内閣が行政事務を行う一般的権限を有することを示す規定はない。
エ. 憲法第７３条第６号が定める内閣の政令制定権について，憲法の規定を直接実施する政令は認められないとの立場によると，政令の種類は，法律の委任に基づく委任命令，法律の執行の細目を定める執行命令，既存の法律に代替する内容を定める代行命令に限定され，法律に定めのない事項を定める独立命令は認められないことになる。`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．イとウ",c5:"５．イとエ",c6:"６．ウとエ",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2007",num:"16",subject:"ken",q:`司法に関する次のアからエまでの各記述について，明らかに誤っているもの二つの組合せを，後記１から６までの中から選びなさい。
ア. 憲法第７６条第２項後段の規定からすると，裁判所の裁判の前審として，行政機関が行政処分についての審査請求や異議申立てに対して裁決ないし決定を下すことは許されるが，裁判所がそこで認定された事実に絶対的に拘束される旨定めることは許されない。
イ. 憲法第７７条第１項は，最高裁判所が「弁護士に関する事項」についても規則で定める権限を有すると規定しているが，これによると，弁護士の資格・職務・身分を，法律ではなく，最高裁判所規則で定めることも許される。
ウ. 最高裁判所の裁判官は，憲法第７９条第２項に定める国民審査の結果によって罷免される場合があるほか，憲法第７８条に定める「公の弾劾」により罷免される場合があるが，それ以外の方法で罷免することは許されない。
エ. 裁判官の定年は，憲法第７９条第５項，第８０条第１項により，法律で定められることになっているが，法律で定められた年齢を引き下げ，その年齢に達しているすべての裁判官を退官させることは，憲法第７８条の趣旨に照らして許されない。`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．イとウ",c5:"５．イとエ",c6:"６．ウとエ",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2007",num:"17",subject:"ken",q:`次の文章は，選挙権行使の保障に関する最高裁判所の二つの判決に関するものである。ＡからＤまでの各空欄に，後記１から６までの中から適切なものを補充して 文章を完成させなさい。なお ，同じ記号には，同じ文章が入るものとする。
選挙権行使の保障に関し問題となるものとして，在宅投票制度や在外選挙制度がある。最高裁判所は，在宅投票制度を廃止し，その後復活しないことの違憲性が争われた訴訟において，立法不作為を含む立法内容の違憲性と国家賠償法第１条第１項との関係について【Ａ】旨述べた上，同項の適用上どのような場合に国会議員の立法活動が違法の評価を受けるかについて【Ｂ】旨判示した。
最高裁判所は，その後，在外選挙制度の違憲性が争われた訴訟において，まず，在外選挙制度の憲法適合性について【Ｃ】 旨判断し，さらに，国会議員の立法活動が国家賠償法第１条第１項の適用上違法の評価を受けるかについて，【Ａ】旨述べた上で【Ｄ】旨判示した。
１. 国会議員は国民に対して違憲の立法をしない法的義務を負っており，立法内容が違憲の場合，国会議員の立法又は立法不作為は原則として国家賠償法第１条第１項の適用上違法となる
２. 国家賠償法第１条第１項の適用上違法となるかどうかは，国会議員の立法過程における行動が個別の国民に対して負う職務上の法的義務に違背したかどうかの問題であり，当該立法内容の違憲性の問題とは区別される
３. 立法内容が憲法の一義的な文言に違反しているにもかかわらずあえて当該立法を行うような，容易に想定し難い例外的な場合でない限り，国家賠償法第１条第１項の適用上違法の評価を受けない
４. 立法内容が国民に憲法上保障された権利を違法に侵害することが明白な場合や，国民に憲法上保障された権利行使の機会を確保するには所要の立法措置が必要不可欠で，それが明白なのに，国会が正当な理由なく長期にわたってこれを怠る場合などには，例外的に，国家賠償法第１条第１項の規定の適用上，違法の評価を受ける
５. 在外国民に国政選挙での投票を認めないことは憲法に違反しており，平成１０年の公職選挙法改正で在外選挙制度が創設されたが，その対象が衆議院と参議院の比例代表選挙に限られていた点で，従前の違憲状態が継続していた
６. 平成１０年の公職選挙法改正で在外選挙制度が創設されたが，その対象が衆議院と参議院の比例代表選挙に限られている点で，遅くとも本判決言渡し後に初めて行われる衆議院議員の総選挙又は参議院議員の通常選挙の時点において，憲法に違反する`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2364"},{year:"2007",num:"18",subject:"ken",q:`市町村の国民健康保険条例に保険料率などの具体的規定がないことと租税法律主義を定めた憲法第８４条との関係について判示した最高裁判所の判決 最高裁判所平成１８年３月１日大法廷判決（，民集６０巻２号５８７頁）に関する次のアからエまでの各記述について，正しいもの二つの組合せを，後記１から６までの中から選びなさい。
ア. この判決は，国又は地方公共団体が課税権に基づき，その経費に充てるための資金を調達する目的をもって，特別の給付に対する反対給付としてでなく，一定の要件に該当するすべての者に対して課する金銭給付は，その形式のいかんにかかわらず，憲法第８４条に規定する租税に当たるというべきであるとした。
イ. この判決は，国民健康保険の保険料は租税ではないから憲法第８４条が直接適用されることはないが，国又は地方公共団体が賦課徴収する租税以外の公課であっても，賦課徴収の強制の度合いなどの点において租税に類似する性質を有するものについては，憲法第８４条の趣旨が及ぶと解すべきであるとした。
ウ. この判決は，憲法第８４条の趣旨に照らせば，市町村が行う国民健康保険の保険料についても，条例において賦課要件をどの程度明確に定めておく必要があるかは，専ら国民健康保険が強制加入とされ，保険料が強制徴収される点を考慮して決定されるべきであるとした。
エ. この判決は，保険料率算定の基礎となる賦課総額の算定基準及び賦課総額に基づく保険料率の算定方法が賦課期日までに明らかにされているとしても，具体的な各年度の保険料率をそれぞれ各年度の賦課期日後に告示するとすれば，憲法第８４条に反し，許されないこととなるとした。`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．イとウ",c5:"５．イとエ",c6:"６．ウとエ",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2007",num:"19",subject:"ken",q:`地方自治に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤ってい。る場合には２を選びなさい。
ア. 憲法第９４条は，地方公共団体の権能として条例制定権を定めているが，同条にいう「条例」には，民主的議決機関である地方公共団体の議会が制定する条例だけでなく，地方公共団体の長が制定する規則も含まれる。
イ. 憲法第９３条第２項は，地方公共団体の長及び議会の議員のほか，「法律の定めるその他の吏員」についても地方公共団体の住民が直接これを選挙すると定めているから，選挙管理委員会の委員を公選とすべきことも同項に基づく憲法上の要請である。
ウ. 憲法第９５条は，特別法の住民投票について定めているが，同条の「一の地方公共団体」は，一つの地方公共団体という意味ではなく，特定の地方公共団体という意味であり，かつ，既に国法上の地方公共団体と認められているものであることを要する。
エ. 憲法第９２条は，地方自治の基本原則について定めているが，地方公共団体の長に対する住民による条例の制定又は改廃についての直接請求制度を設けることは，地方自治の本旨の一内容である団体自治を実現するものとして認められる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1212"},{year:"2007",num:"20",subject:"ken",q:`条約に関する次のアからオまでの各記述について，明らかに誤っているもの三つの組合せを，後記１から10までの中から選びなさい。
ア. 憲法は，条約の締結方式については直接規定していないが，批准書の認証を天皇の国事行為としていることから，批准による締結を予定しており，いかなる条約であっても，締結には，署名のみでなく批准書の交換・寄託を要する。
イ. 締結について国会の承認を要する条約は，広く国家間の合意をいい，条約，協約，協定，議定書，憲章など名称のいかんを問わないが，国家間の合意であっても，既存の条約を執行するために必要な技術的・細目的な協定等は，必ずしも国会の承認を得る必要はない。
ウ. 条約締結の国会承認については，衆議院の優越が認められており，両議院が異なる議決をした場合で，両院協議会を開いても意見が一致しないときは，衆議院の議決が国会の議決となるが，衆議院は，両院協議会の開催を拒むことができる。
エ. 条約は，法律などと同様，憲法上，公布することとされているが，国家間の合意という性質上，締結により効力が発生しているので，公布は，事実上内容を周知させるために行われるにすぎず，施行とは無関係である。
オ. 憲法第９８条第２項にいう「日本国が締結した条約」は，日本国と外国との間の文書による合意を広く含むが，日本国が外国の国有の土地を賃借する契約のように，両当事者が純然たる私人の立場で結んだものは含まない。`,c1:"１．ア イ ウ",c2:"２．ア イ エ",c3:"３．ア イ オ",c4:"４．ア ウ エ",c5:"５．ア ウ オ",c6:"６．ア エ オ",c7:"７．イ ウ エ",c8:"８．イ ウ オ",c9:"９．イ エ オ",c10:"10．ウ エ オ",a:"4"},{year:"2007",num:"21",subject:"gyo",q:`国家賠償法に関する次のアからウまでの各記述について，最高裁判所の判例に照らし，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア. 国の公権力の行使に当たる公務員が，その職務を行うについて，軽過失によって違法に他人に損害を与えた場合には，その被害者に対しては国のみが責任を負うが，当該公務員に故意又は重過失がある場合には，国及び当該公務員のいずれもが被害者に対し直接に責任を負う。
イ. 国家賠償法第２条第１項の責任は無過失責任であるから，被告である国又は公共団体において，損害の発生が不可抗力によるものであることを立証しても，同項の責任を免れることはできない。
ウ. 国家賠償法第２条第１項の営造物の設置又は管理の瑕疵とは，利用者にとって営造物が通常有すべき安全性を欠いている状態をいうのであって，同項の規定は当該営造物の利用者以外の者に対しては適用されない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"8"},{year:"2007",num:"22",subject:"gyo",q:`損失補償について判示した最高裁判所の判決に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア. 旧河川附近地制限令上の河川附近地に指定された民有地において無許可で砂利を採取した行為につき，同令違反として事業者が起訴された事件において，河川附近地制限令は損失補償の規定が置かれていないため憲法第２９条第３項に違反するとした被告人の主張は，損失補償が必要な場合でも直接同項に基づき国に対してそれを請求できる可能性があるので，失当であるとされた。
イ. 都市計画街路予定地内にあることにより建築制限を受けていた土地の収用に際しての損失補償金額の多寡が争われた事件において，損失補償金額の算定に当たっては，建築制限を受けていた土地であるとしてその評価をすべきではなく，建築制限を受けていないものと想定してそれをすべきである，とされた。
ウ. 道路管理者である地方公共団体が地下横断歩道を設置した結果，自己所有の地下埋設ガソリンタンクが消防法の規定に違反する状態となって移転を余儀なくされた所有者が，損失補償を請求した事件において，ガソリンタンクのような危険物であっても，適法に設置できていた施設が地方公共団体の上記行為に伴い移転の必要を生じたときは，移転に必要であった費用は道路法第７０条に規定された損失補償の対象となる，とされた。
（参照条文）道路法
（道路の新設又は改築に伴う損失の補償）
第７０条 土地収用法第９３条第１項の規定による場合の外，道路を新設し，又は改築したことに因り，当該道路に面する土地について，通路，みぞ，かき，さくその他の工作物を新築し，増築し，修繕し，若しくは移転し，又は切土若しくは盛土をするやむを得ない必要があると認められる場合においては，道路管理者は，これらの工事をすることを必要とする者（中略）の請求により，これに要する費用の全部又は一部を補償しなければならない。 (以下略)`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2007",num:"23",subject:"gyo",q:`行政庁相互の関係に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア. 上級行政庁は，その一般的な指揮監督権に基づき，法律の特別の根拠がなくとも，下級行政庁の権限を当該下級行政庁に代わって自ら行使することができる。
イ. 法律の規定に基づいて権限の委任が上級行政庁から下級行政庁に対して行われた場合，当該権限が受任行政庁に完全に移るため，当該権限の行使に関する限り，両者の間には指揮監督関係は存在しない。
ウ. 上級行政庁の下級行政庁に対する指揮監督権には，一般に，下級行政庁の行った違法・不当な行為の取消し又は停止を当該下級行政庁に命ずる権限も含まれる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2007",num:"24",subject:"gyo",q:`行政法上の諸原則に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. 行政には自らの活動を各種の手段を通じて国民に説明する責務があるとする説明責任の原則は，アカウンタビリティ(accountability)の原則と呼ばれることに示されているように，アメリカに固有な制度に由来するものであり，我が国の法令の目的規定等において明文で掲げられた例はない。
イ. 地方自治法第２条第１４項は，行政活動は経済性，効率性等の見地から適切なものでなければならないとの原則を明文化したものである。しかし，この原則は行政内部にのみ妥当するものであるから，専門の機関である監査委員等のみがその統制を行うことができ，住民訴訟等において裁判所が同原則の違反を統制することは許されない。
（参照条文）地方自治法
第２条第１４項 地方公共団体は，その事務を処理するに当つては，住民の福祉の増進に努めるとともに，最少の経費で最大の効果を挙げるようにしなければならない。
ウ. 地方公共団体の企業誘致施策が変更されたことによる損害の賠償を誘致の相手方の企業が請求した事件について，最高裁判所は，特定の者に対する行政の具体的勧誘を伴った場合であって，求められた活動が長期にわたる施策の継続を前提として初めてこれに投入する資金・労力に相応する効果を生じ得るものであるときには，代償的措置を講ずることなく施策を変更することは，それがやむを得ない客観的事情によるのでない限り，信頼関係を不当に破壊するものとして違法性を帯びる，と判断した。
エ. ある産業廃棄物処理施設の建設計画があることを知った地方公共団体が，規制対象事業場に認定された処理施設について一定区域内におけるその操業を禁止する水源保護条例を制定した上で，当該処理施設を規制対象事業場に認定した事例において，最高裁判所は，認定前における事業者との協議の規定が条例に盛り込まれていたことなどに照らすならば，当該地方公共団体には，事業者と十分に協議し，水源保護の目的にかなうよう事業内容を改めるなどの指導をして，その地位を不当に害することのないよう配慮する義務がある，と判断した。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2211"},{year:"2007",num:"25",subject:"gyo",q:`Ａは喫茶店を営業しようと思い，食品衛生法の規定に従い行政庁Ｂに営業許可の申請をした。次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. その営業場所の付近には既に喫茶店が多数あり，過当競争になるおそれがある。この場合，Ｂは，過当競争のおそれを理由として申請を拒否することはできない。
イ. その営業場所の近くに中学校があり，その校長及び生徒の父母らは，生徒が下校時に立ち寄るおそれがあるとして，喫茶店の開店に反対する陳情をＢに行っている。Ｂはこのような事情を理由として申請を拒否することができる。
ウ. Ｂは，許可を与えるに際して，「提供するメニューの料金については事前にＢの承認を得なければならない」という附款を付することができる。
エ. Ａの申請書には偽りがあり，本来，許可基準を満たさないものであった。営業許可を与えた直後にそのことに気が付いたＢは，当初から許可基準を満たしていなかったことを理由として営業許可を取り消し，その旨をＡに通知した。これは学問上の「撤回」に当たる。
（参照条文）食品衛生法
第１条 この法律は，食品の安全性の確保のために公衆衛生の見地から必要な規制その他の措置を講ずることにより，飲食に起因する衛生上の危害の発生を防止し，もつて国民の健康の保護を図ることを目的とする。
第５１条 都道府県は，飲食店営業その他公衆衛生に与える影響が著しい営業（食鳥処理の事業の規制及び食鳥検査に関する法律第２条第５号に規定する食鳥処理の事業を除く。）であつて，政令で定めるものの施設につき，条例で，業種別に，公衆衛生の見地から必要な基準を定めなければならない。
第５２条 前条に規定する営業を営もうとする者は，厚生労働省令で定めるところにより，都道府県知事の許可を受けなければならない。
② 前項の場合において，都道府県知事は，その営業の施設が前条の規定による基準に合うと認めるときは，許可をしなければならない。（以下略）
③ 都道府県知事は，第１項の許可に５年を下らない有効期間その他の必要な条件を付けることができる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1222"},{year:"2007",num:"26",subject:"gyo",q:`行政事件訴訟法第３条第２項にいう「行政庁の処分その他公権力の行使に当たる行為」に関する次のアからエまでの各記述について，最高裁判所の判例に照らし，明らかに誤りであるものの個数を，後記１から４までの中から選びなさい。
ア. 国又は地方公共団体に属する機関がする行為でなければならない。
イ. 相手方の権利を制限し，又は義務を課する行為でなければならない。
ウ. 行政手続法にいう「不利益処分」又は「申請に対する処分」に該当する行為でなければならない。
エ. 国又は地方公共団体以外の者を名宛人とする行為でなければならない。`,c1:"１．１個",c2:"２．２個",c3:"３．３個",c4:"４．４個",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2007",num:"27",subject:"gyo",q:`行政指導に関する次のアからエまでの各記述について，最高裁判所の判例に照らし，明らかに誤りであるものの個数を，後記１から５までの中から選びなさい。
ア. 税関長が輸入業者に対してした，輸入書籍が関税定率法（当時）所定の輸入禁制品に該当するとの通知は，その法律上の性質において税関長の判断の結果の表明，すなわち観念の通知であって，行政指導にすぎず，抗告訴訟の対象とはならない。
イ. 行政機関は，行政指導をすることができる旨を規定した明文の規定がない場合であっても，行政機関の任務ないし所掌事務の範囲内において，一定の行政目的を実現するために行政指導をすることができる。
ウ. 建築主事が，建築主に対する行政指導がされていることを理由として，建築基準法所定の期間を経過してもなお建築確認処分を留保することは，当然に違法である。
エ. 行政指導は，法的拘束力がなく，国民の権利利益に直接の影響を及ぼすものではないが，国家賠償法第１条の「公権力の行使」として違法とされる場合がある。`,c1:"１．１個",c2:"２．２個",c3:"３．３個",c4:"４．４個",c5:"５．０個",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2007",num:"28",subject:"gyo",q:`Ａは，公衆浴場法の許可を行政庁Ｂから得て公衆浴場を経営している。あるとき，Ｂの職員ＣがＡの公衆浴場に現れ，公衆浴場法第６条第１項に基づく立入検査を実施するとＡに告げた。次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. Ａは，Ｃに対し，裁判官の発した令状の提示を求めることができ，令状の提示がない場合にはＣの立入りを拒否することができる。
イ. Ａが，立入検査は必要ないと主張してＣの立入りを阻止した場合，Ｃは最小限度の実力を行使してＡを屋外に排除し，立入りを実現することができる。
ウ. 公衆浴場法には，「第６条第１項の規定に基づく立入検査の権限は犯罪捜査のために認められたものと解してはならない」という趣旨の規定はない。したがって，この立入検査の権限は犯罪捜査のために用いてよい。
エ. 後日，ＡはＢから営業に関する報告をするように求められた。Ａは，ありのままを報告すると，売上げが明らかになって課税面で不利益を受ける可能性があると考えた。この場合，最高裁判所の判例によれば，Ａは憲法第３８条第１項に基づき報告を拒否できる。
（参照条文）公衆浴場法
第３条 営業者は，公衆浴場について，換気，採光，照明，保温及び清潔その他入浴者の衛生及び風紀に必要な措置を講じなければならない。
２（略）
第６条 都道府県知事は，必要があると認めるときは，営業者その他の関係者から必要な報告を求め，又は当該吏員に公衆浴場に立ち入り，第２条第４項の規定により付した条件の遵守若しくは第３条第１項の規定による措置の実施の状況を検査させることができる。
２ 当該吏員が前項の規定により立入検査をする場合においては，その身分を示す証票を携帯し，且つ，関係人の請求があるときは，これを呈示しなければならない。
第９条 第６条第１項の規定による報告をせず，若しくは虚偽の報告をし，又は当該吏員の立入検査を拒み，妨げ，若しくは忌避した者は，これを２千円以下の罰金に処する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2222"},{year:"2007",num:"29",subject:"gyo",q:`次のアからエまでの記述の中から，現在の法令及び最高裁判所の判例に照らして正しいものを選びなさい。
ア. 国の行政機関において一定の個人を名宛人として不利益処分をするかどうかを判断するために，当該個人に関する情報を本人以外の者から取得しようとするときは，あらかじめ本人の同意を得ることが原則として必要とされている。
イ. 個人の信仰，病歴その他一般に他人に知られたくない一定種類の情報であって特定の個人を識別できるものについて，行政機関の保有する個人情報の保護に関する法律は，国の行政機関は特別の法律の定めがなければそれを保有してはならないものとしている。
ウ. 国税に関し，ある者に対する犯則調査によって得られた資料をその者に対する課税処分のために用いることは，違法である。
エ. 行政機関の保有する個人情報の保護に関する法律によれば，国の行政機関は，自らが特定した利用目的の達成に必要な範囲を超えて個人情報を保有してはならないとされている。`,c1:"１．ア",c2:"２．イ",c3:"３．ウ",c4:"４．エ",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2007",num:"30",subject:"gyo",q:`行政手続法第６章（意見公募手続等）に関する次のアからエまでの各記述について，明らかに誤りであるものの個数を，後記１から５までの中から選びなさい。
ア. 意見公募手続の規定は，行政機関が行政指導指針を定める場合には適用がない。
イ. 命令等が制定された場合において，当該命令等につき利害関係を有し，意見公募手続において意見を提出していた者は，当該命令等に対する不服申立てをすることができる。
ウ. 意見公募手続の対象には，一定の大規模施設の設置計画なども含まれるため，同手続の導入により，行政計画の策定手続が整備された。
エ. 意見公募手続の規定は，行政上の規制に係る命令等を対象としており，行政上の給付に係る命令等を定める場合には適用がない。`,c1:"１．１個",c2:"２．２個",c3:"３．３個",c4:"４．４個",c5:"５．０個",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2007",num:"31",subject:"gyo",q:`行政代執行法による代執行に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. 代執行をなすためには，原則として，相当の履行期限を定め，その期限までに履行されないときは，代執行をなすべき旨を，予め戒告しなければならない。
イ. 営業停止処分を受けたにもかかわらずなお営業を続けている者に対しては，当該営業を停止させるための手段として，代執行を用いることが可能である。
ウ. 代執行に要した費用の支払を義務者に命じても義務者が従わないときは，国税滞納処分の例により，これを徴収することができる。
エ. 代執行による履行確保の対象となる義務は，法律に基づくものに限られ，法律の委任に基づく条例による処分によって課される義務については，代執行を行うことはできない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1212"},{year:"2007",num:"32",subject:"gyo",q:`Ａは，自己所有建物の増築について建築基準法による確認を受けたが，その内容と異なり建築基準法令の規定に違反する工事を行ったとして，Ｂ県知事から工事停止命令を受け，その後，更に違反建築部分についての除却命令を受けた。しかし，Ａは，これらの命令に従わないで建築を続行している。隣地の自宅に居住するＣは，上記工事により，自宅とその敷地への日照がほとんど遮断され，通風も悪くなり，生活条件が著しく悪化する被害を受けるに至ったと主張している。この場合において，次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア. Ｂ県知事が，Ａに対し，違反建築部分の除却についての代執行の戒告をした場合において，Ａは，戒告に不服があるときは，代執行の実施を阻止するために戒告についての取消訴訟を提起することができる。
イ. Ａが代執行の違法を主張してその実施を阻止するための取消訴訟を提起していた場合において，Ｂ県知事が代執行を実施してそれが終了し，原状回復が不可能となったときでも，代執行により被った損害について金銭的な賠償を求める必要があるから，その取消訴訟に係る訴えの利益は失われない。
ウ. Ｂ県知事が代執行を行わず，Ａが増築工事を完了させた場合において，Ｃが，Ｂ県に対し，知事が代執行を実施しなかったという不作為による損害の賠償を求めて提訴したとしても，代執行をするかどうかは知事の広範な裁量に委ねられているから，その不作為が違法と判断される余地はない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"4"},{year:"2007",num:"33",subject:"gyo",q:`行政機関の保有する情報の公開に関する法律（以下「情報公開法」という。）及び地方公共団体の情報公開条例においては，国の行政機関や地方公共団体の長等の機関が保有する一定の文書（行政文書又は公文書などと呼ばれる。）の閲覧等を求める権利として，いわゆる開示請求権の制度が定められている。このことに関して述べた次のアからオまでの各記述の中から，適切なものを選びなさい。 
ア. 情報公開法及び多くの情報公開条例においては，開示請求の対象は，決裁又は供覧の手続が終了した文書に限定されている。
イ. 情報公開法及び多くの情報公開条例においては，開示請求権者は日本国籍を有する者に限定されている。
ウ. 情報公開法及び多くの情報公開条例においては，請求に係る文書の閲覧等ができなければ自らの権利又は利益が害されるおそれがあることを示すことが，開示請求が認められるための要件とされている。
エ. 情報公開条例を定めていない地方公共団体においては 情報公開法が直接に適用されるため，，結果的にすべての地方公共団体において開示請求権制度が存在していることになる。
オ. 情報公開条例においては，当該地方公共団体の長等が法律に基づいて行う行政処分に関する文書であっても，当該地方公共団体が保有するものであれば，開示請求権制度の対象とすることができる。`,c1:"１．ア",c2:"２．イ",c3:"３．ウ",c4:"４．エ",c5:"５．オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2007",num:"34",subject:"gyo",q:`自動車運転免許に係る処分についての訴えの利益に関して述べた次のアからウまでの各記述の中から，最高裁判所の判例に照らして正しいものを選びなさい。
ア. 運転免許効力停止処分についてその効力停止期間が経過したときは，当該処分が前歴となって道路交通法上不利益を受けるおそれがあるとしても，処分の取消しを求める訴えの利益は失われる。
イ. 運転免許取消処分の取消訴訟の係属中に運転免許証の有効期間が経過したときは，もはや運転免許証の更新を受けることができないから，処分の取消しを求める訴えの利益は失われる。
ウ. 運転免許効力停止処分の前歴があることにより，名誉，感情，信用等を損なう可能性が継続して存在するとしても，それは処分がもたらす事実上の効果にすぎないものであるから，処分の取消しを求める訴えの利益があることの根拠とするのは相当でない。`,c1:"１．ア",c2:"２．イ",c3:"３．ウ",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2007",num:"35",subject:"gyo",q:`最高裁判所平成１７年１２月７日大法廷判決（小田急線連続立体交差事業認可処分取消請求事件）の次の判示を読み，同判決に関する後記アからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
「都市計画事業の認可に関する同法（注，都市計画法）の規定は，その趣旨及び目的にかんがみれば，事業地の周辺地域に居住する住民に対し，違法な事業に起因する騒音，振動等によってこのような健康又は生活環境に係る著しい被害を受けないという具体的利益を保護しようとするものと解されるところ，前記のような被害の内容，性質，程度等に照らせば，この具体的利益は，一般的公益の中に吸収解消させることが困難なものといわざるを得ない。」
ア. 都市計画事業の認可の取消訴訟における「処分の相手方以外の者」の原告適格の判断に当たって，「都市計画事業の認可に関する都市計画法の規定の趣旨及び目的」は，都市計画法の文言に基づいて解釈されなければならず，他の法令を参酌してはならない。
イ. 都市計画事業の認可の取消訴訟における「処分の相手方以外の者」の原告適格が認められるためには，「都市計画事業の認可の制度を通して保護しようとしている利益」が，公益的見地からのみならず，「個々人の個別的利益」としても保護されているものであることが必要である。
ウ. 都市計画事業の事業地の周辺地域に居住する者については，都市計画事業の認可が告示されることによって権利の制限を受ける事業地内の不動産につき権利を有していなくても，違法な事業に起因して侵害される利益の内容及び性質並びにその侵害の態様及び程度によっては，認可の取消訴訟における原告適格が認められることがある。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"5"},{year:"2007",num:"36",subject:"gyo",q:`行政事件訴訟において，処分又は裁決を取り消す判決の効力に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア. 処分をした理由を示すことが要求されている処分が，取消訴訟の判決により，十分な理由が示されていないことだけを理由として取り消されたとき，処分をした行政庁は，取消判決の拘束力により，判決で不十分であると指摘された理由の示し方を改めて，同一内容の処分をしなければならない。
イ. 酒酔い運転をして事故を起こしたことを理由としてされた国家公務員に対する懲戒処分が，取消訴訟の判決により，そのような事故は起こしていなかったとして取り消されたとき，処分をした行政庁は，その公務員に，そのころ，無断欠勤を繰り返していた職務義務違反があったとして，改めて懲戒処分をすることができる。
ウ. 課税処分をした税務署長が，その税の滞納処分として納税義務者の財産を差し押さえていたときに，その課税処分が取消訴訟の判決により取り消され，それが確定したときは，税務署長は，滞納処分を続行してはならない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"5"},{year:"2007",num:"37",subject:"gyo",q:`行政事件訴訟法上の取消訴訟に関する次のアからエまでの各記述について，法令及び最高裁判所の判例に照らし，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. 取消訴訟においては，行政処分の違法一般が審理の対象となるから，原告は，自己の法律上の利益に関係のない違法を理由として取消しを求めることもできる。
イ. 国家公務員に対する停職の懲戒処分がされた後，その処分について人事院に対する審査請求がされ，人事院が処分の内容を減給に修正する裁決をした場合には，原処分ではなく，裁決の取消しを求めなければならない。
（参照条文）国家公務員法
第９２条第１項 …（前略）…調査の結果，処分を行うべき事由のあることが判明したときは，人事院は，その処分を承認し，又はその裁量により修正しなければならない。
ウ. 国家公務員に対する懲戒処分の取消訴訟において，国家公務員法上の懲戒事由があると認められる場合，裁判所は，懲戒権者と同一の立場に立って懲戒処分をすべきであったかどうか又はいかなる処分を選択すべきであったかについて判断し，その結果と懲戒処分とを比較してその軽重を論ずべきものではなく，その処分が社会観念上著しく妥当を欠き，裁量権を濫用したか否かについて判断すべきである。
エ. 取消訴訟における行政処分の違法判断の基準時は，行政処分がされた時点であると解すべきであるから，処分の適法性の判断に用いられる科学的，専門技術的知見も，処分当時のものに限定される。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2212"},{year:"2007",num:"38",subject:"gyo",q:`行政事件訴訟の類型に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. 行政事件訴訟法が，抗告訴訟として，処分の取消しの訴え，裁決の取消しの訴え，無効等確認の訴え，不作為の違法確認の訴え，義務付けの訴え及び差止めの訴えを列挙しているのは，抗告訴訟として許容されるものをこの６類型に限定する趣旨である。
イ. 公務員の俸給請求訴訟や，国籍確認訴訟は，公法上の法律関係に関する訴訟であって，当事者訴訟に分類することができる。
ウ. 民衆訴訟は，自己の法律上の利益にかかわらない資格で提起するものであるから，処分の取消しを求めるものであっても，取消訴訟の原告適格に関する規定は準用されない。
エ. 機関訴訟とは，国又は公共団体の機関相互間における権限の存否又はその行使に関する紛争についての訴訟であり，法律に定める場合において，法律に定める者に限り，提起することができる。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2111"},{year:"2007",num:"39",subject:"gyo",q:`仮の救済に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。 
ア. 取消訴訟において裁判所が執行停止をする場合，処分の効力，処分の執行又は手続の続行の全部又は一部の停止をすることができるにとどまるのに対し，審査請求においては，審査庁は執行停止としてその他の措置をすることができる場合もある。
イ. 行政処分の無効を前提とする民事訴訟においては，民事保全法に規定する仮処分の利用が制限される場合がある。
ウ. 公立高校の入学を拒否された場合，入学不許可処分の取消訴訟と入学許可処分を求める義務付け訴訟を提起するとともに，仮に入学許可処分をすべき旨を命じるよう求める申立てをすることができる。
エ. 内閣総理大臣の異議は，裁判所が執行停止の決定を行う前にこれを述べなければならず，いったん執行停止の決定がなされた後はもはやこれを述べることは許されない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1112"},{year:"2007",num:"40",subject:"gyo",q:`行政不服審査及び行政事件訴訟に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. 行政不服審査法には，学校において教育の目的を達成するために学生等に対して行われる処分について，不服申立てを排除する趣旨の規定があるが，行政事件訴訟法には，そのような規定はない。
イ. 行政不服審査においては，違法性のみならず不当性を理由としても処分を取り消すことができるのに対し，行政事件訴訟においては，裁判所が不当性を理由として処分を取り消すことはできない。
ウ. 行政事件訴訟においては，裁判所は判決で原告の不利益に処分を変更することができないのに対し，異議申立てに対する決定においては，行政の適法性確保の観点から，処分庁は異議申立人の不利益に処分を変更することもできる。
エ. 審査請求の不服申立期間（処分があったことを知った日を基準として起算されるもの）が経過した場合であっても やむを得ない理由があるときは審査請求をすることができるのに対し，，取消訴訟の出訴期間（処分があったことを知った日を基準として起算されるもの）が経過した場合には，もはやその訴えを提起し得る余地はない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1122"},{year:"2007",num:"1",subject:"min",q:"意思表示に関する次の１から５までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．隔地者に対する解除の意思表示は，相手方が了知したときにその効力を生ずる。",c2:"２．意思表示の動機の錯誤は，その動機が相手方に表示されて法律行為の内容となり，もしその錯誤がなかったならばその意思表示をしなかったであろうと認められる場合に要素の錯誤となるが，表意者に過失があったときには，表意者は錯誤による無効を主張することができない。",c3:"３．第三者の強迫によって意思表示をした場合 意思表示の相手方が強迫の事実を知っているか，知らなかったことについて過失があった場合に限り，表意者は，強迫を理由としてその意思表示を取り消すことができる。，",c4:"４．表示と内心の意思とが異なる意味に解されることを表意者自身が知りながらそのことを告げないで意思表示をした場合，それがたとえ婚姻に関するものであっても，意思表示の相手方を保護するため，その意思表示は無効とならない。",c5:"５．当事者が相談の上で売買契約を偽装した場合，買主の相続人が偽装の事実を知らなかったとしても，売主はこの者に対して意思表示の無効を主張することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2007",num:"2",subject:"min",q:"双方代理又は利益相反行為に関する次の１から５までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．不動産の売買契約に基づく所有権移転登記申請手続について，司法書士が売主及び買主の双方を代理することは，双方代理の禁止に関する規定に違反しない。",c2:"２．共同相続人の一人が他の共同相続人の全部又は一部の者の後見をしている場合，後見人が被後見人全員を代理してする相続の放棄は，後見人自らが相続の放棄をした後にされたときは，後見人と被後見人との間において利益相反行為に当たらない。",c3:"３．親権者が未成年の子を代理して子の所有する不動産を第三者の債務の担保に供する行為は，親権者による利益相反行為に当たる。",c4:"４．未成年の子と親権者である父母の一方に利益相反関係があるときは，利益相反関係のない親権者と家庭裁判所で選任された特別代理人とが共同して子のための代理行為をなすべきである。",c5:"５．親権者が共同相続人である数人の子を代理して遺産分割の協議をすることは，仮に親権者において数人の子のいずれに対しても衡平を欠く意図がなく，親権者の代理行為の結果，数人の子の間に利害対立が現実化されていなかったとしても，利益相反行為に当たる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2007",num:"3",subject:"min",q:`Ａは，Ｂとの間で，Ｂ所有の不動産を代金１０００万円で購入する旨の契約を締結した。この事例に関する次のアからエまでの各記述のうち，誤っているものはどれか。
ア. Ａが契約時に未成年であった場合，Ａが成年に達した後，ＢがＡに対して１か月の期間内にＡの行為を追認するか否かを確答すべきことを催告し，Ａがこの期間内に確答を発しなかったときは，Ａの行為を追認したものとみなされる。
イ. Ａが被保佐人であった場合，ＢがＡに対して１か月の期間内にＡの保佐人Ｃの追認を得るように催告し，Ａがこの期間内にその追認を得た旨の通知を発しないときは，Ａの行為を取り消したものとみなされる。
ウ. Ａが本人Ｃを無権代理して契約を締結した場合，ＢがＣに対し，相当の期間を定めて，その期間内にＡの行為を追認するか否かを確答すべきことを催告し，Ｃがこの期間内に確答をしないときは，追認を拒絶したものとみなされる。
エ. Ａが成年被後見人であった場合，ＢがＡの成年後見人Ｃに対して１か月の期間内にＡの行為を追認するか否かを確答すべきことを催告し，Ｃがこの期間内に確答を発しなかったときは，Ａの行為を取り消したものとみなされる。`,c1:"１．ア",c2:"２．イ",c3:"３．ウ",c4:"４．エ",c5:"５．誤っているものはない",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2007",num:"4",subject:"min",q:`条件及び期限に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 「１００万円借りるが出世したら返す」という約束をした場合，出世しないことが確定したときには，借主は返還義務を免れる。
イ. 停止条件付売買契約において，条件の成否が確定する前に故意に目的物を毀損した売主は，期待権を侵害された買主に対して損害賠償責任を負う。
ウ. 条件が成就することによって利益を受ける当事者が，不正な手段を用いて条件を成就させたとしても，条件は成就しなかったものとみなされる。
エ. 有償の金銭消費寄託契約においては，当事者の双方が期限の利益を有する。
オ. 現在の配偶者との離婚を条件として他人との間で婚姻の予約をした場合，この条件は無効であるから，無条件で婚姻の予約が行われたものとみなされる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2007",num:"5",subject:"min",q:"取得時効に関する次の１から５までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．他人の物を占有することが取得時効の要件であるので，所有権に基づいて不動産を占有していた場合には，取得時効は成立しない。",c2:"２．取得時効が成立するためには，占有が時効期間中継続していることが必要であり，侵奪行為によって目的物の占有が失われた場合には，その後，占有回収の訴えによってその占有を回復しても，取得時効は中断する。",c3:"３．占有者がその占有開始時に目的物について他人の物であることを知らず，かつ，そのことについて過失がなくても，その後，占有継続中に他人の物であることを知った場合には，悪意の占有者として時効期間が計算される。",c4:"４．所有権以外の財産権についても時効取得は可能であるが，財産権のうち債権に関しては占有を観念できないので，時効取得することはない。",c5:"５．Ａ所有の不動産についてＢの取得時効が完成した後，ＡからＣに譲渡がなされＣが対抗要件を備えたとしても，Ｂは，その後も引き続き当該不動産の占有を継続し，時効取得に必要な期間が経過すれば，新たに当該不動産を時効取得できる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2007",num:"6",subject:"min",q:`消滅時効に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 確定期限の定めのある債権の消滅時効は，その期限が到来した時から進行する。
イ. 不確定期限の定めのある債権の消滅時効は，債務者が期限の到来を知った時から進行する。
ウ. 債務不履行による損害賠償請求権の消滅時効は，本来の債務の履行を請求することができる時から進行する。
エ. 割賦払債務について，債務者が割賦金の支払を怠ったときは債権者の請求により直ちに残債務全額を弁済すべき旨の約定がある場合には，債務者が割賦金の支払を怠った時から，残債務全額についての消滅時効が進行する。
オ. 留置権者が留置物の占有を継続している間であっても，その被担保債権についての消滅時効は進行する。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2007",num:"7",subject:"min",q:"次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．判例によれば，建物は，屋根瓦を葺き荒壁を塗り床及び天井を張る等して初めて独立した不動産となる。",c2:"２．建物の増築部分は，既存建物の従物である。",c3:"３．家具の所有者ＡがＢに賃貸中の当該家具をＣに売却した場合，特約がなければ，Ｃは，直ちにその所有権を取得するから，Ｂに対する賃料債権も，Ｃが売買契約時に取得することになる。",c4:"４．一筆の土地を贈与する契約において，物権行為の独自性を認める立場では，２つの法律行為が存在することになる。",c5:"５．判例によれば，物の売買契約を結ぶ以前の段階において，将来の売買代金債権を売却し，対抗要件を備えることは可能である。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"45"},{year:"2007",num:"8",subject:"min",q:`相続と登記に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 被相続人Ａから相続開始前に甲不動産を買い受けたＸは，Ａの唯一の相続人Ｂの債権者ＹがＢに代位して甲につきＢの相続登記をした上で甲を差し押さえた場合，登記がなくても，甲の所有権取得をＹに対抗することができる。
イ. 被相続人Ａから甲不動産をＢと共に共同相続したＸが，遺産分割によって甲の所有権全部を取得したとしても，Ｂの債権者ＹがＢに代位して甲につきＢ及びＸの共同相続登記をした上でＢの持分を差し押さえた場合，Ⅹは，自己の権利の取得をＹに対抗することができない。
ウ. 被相続人Ａから遺贈によって甲不動産の所有権を取得したＸは，Ａの唯一の相続人Ｂが甲をＹに売却し，Ｙが所有権移転登記を備えた場合，遺贈があった事実を知らず所有権取得登記を備える機会がなかったとしても，Ｙに対し，甲の所有権取得を対抗することができない。
エ. 被相続人Ａから甲不動産をＢと共に共同相続したＸは，Ｂが甲を単独相続した旨の登記をした上でＹに売却し，Ｙが所有権移転登記を備えた場合，Ｙに対し，この所有権移転登記の全部抹消を求めることができる。
オ. 「甲不動産はＸに相続させる」旨の被相続人Ａの遺言により，Ａの死亡時にⅩが所有権を取得した甲につき，共同相続人Ｂの債権者ＹがＢに代位してＢ及びＸの法定相続分により共同相続登記をした上でＢの持分を差し押さえた場合，Ⅹは，甲の所有権取得をＹに対抗することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2007",num:"9",subject:"min",q:"動産物権変動と動産の即時取得に関する次の１から５までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．動産の譲受人は，占有改定を受けることにより，その所有権の取得を第三者に対抗することができる。",c2:"２．動産の寄託者がこれを譲渡した場合において，寄託者が受寄者に対し以後譲受人のためにその動産を占有することを命じ，譲受人がこれを承諾したときは，譲受人は，その所有権の取得を第三者に対抗することができる。",c3:"３．占有者から動産を譲り受けてその占有を取得した者は，即時取得を主張するために，自己に過失がないことを立証しなければならない。",c4:"４．占有改定により占有を取得した者は，動産の即時取得を主張することができない。",c5:"５．登録を受けている自動車については，動産の即時取得の規定は適用されない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2007",num:"10",subject:"min",q:`民法の規定にある「本権の訴え」の概念について，次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア. 一般先取特権は，物を占有する権利を含まない物権であるから，それに基づく本権の訴えとして返還請求権を行使することはできない。
イ. 留置権は，物を占有する権利を含む物権であるから，それに基づく本権の訴えとして返還請求権を行使することができる。
ウ. 「本権」とは物権であるから，本権の訴えとして賃借権に基づく返還請求権を行使することはできない。
エ. 地上権者は，本権の訴えとして地上権に基づく返還請求権を行使することができることが原則であるが，土地の所有者に対し返還請求権を行使することはできない。
オ. 土地を賃貸して賃借人に引き渡した所有者は 第三者が土地の占有を侵奪した場合において，占有の訴えにより土地の返還を請求することができるほか，本権の訴えとして所有権に基づいても返還を請求することができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2007",num:"11",subject:"min",q:"不動産物権変動に関する次の１から５までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．ＡからＢ，ＢからＣへ土地が順次売却された後，ＡＢ間の売買契約が合意解除された場合，Ｃは，所有権移転登記を経由していなくても，その所有権の取得をＡに対し主張することができる。",c2:"２．Ａは，Ｂの詐欺により，その所有する土地をＢに売り渡し，所有権移転登記をした場合，Ａが売買契約を取り消す意思表示をした後，ＢがこれをＣに転売し登記を経由したとしても，Ｃは，Ａに対し，所有権の取得を対抗することができない。",c3:"３．ＡがＢの所有する未登記建物を買い受け，その後その建物についてＢ名義の所有権保存登記がなされた後，ＢがＣにこれを売却しその旨の登記をした場合，Ａは，Ｃに対しその所有権を取得したことを対抗することができない。",c4:"４．Ａがその所有する建物をＢに賃貸し，Ｂに引き渡した後，ＡがＣに建物を売り渡した場合，Ｃがその所有権移転登記を経由しなくとも，Ｂは，Ｃからの賃料の支払請求を拒むことができない。",c5:"５．Ａ，Ｂ及びＣが土地を共有している場合，Ａからその持分を譲り受けたＤは，その持分の取得につき登記を経由しないでＢ及びＣに対抗することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2007",num:"12",subject:"min",q:"民法に定める担保物権に関する次の１から５までの各記述のうち 正しいものはどれか。",c1:"１．留置権，質権及び抵当権には，いずれも物上代位性が認められている。",c2:"２．留置権，先取特権及び質権は，いずれも，それが担保している債権が譲渡されれば，債権譲受人に移転する。",c3:"３．不動産先取特権，不動産質権及び抵当権の順位は，登記の先後によって決まる。",c4:"４．性質上譲渡できない債権の上に質権を設定する契約をした場合，譲渡できないことについて質権者が善意であるか悪意であるかを問わず，その質権設定契約は無効である。",c5:"５．動産先取特権を有する者は，その目的物が第三者に売却され，引き渡された場合であっても，第三者が，その動産が動産先取特権の目的であることを知っているときは，その動産について先取特権を行使することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2007",num:"13",subject:"min",q:`担保物権の効力に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア. 民法上の留置権者は，物に関して生じた債権の全部が弁済されるまでは，その物を留置することができる。
イ. 雇用関係の先取特権は，定期に支払われる給料を担保するが，使用人が退職する際に支払われるべき退職金を担保しない。
ウ. 不動産質権は，担保する債権の元本のほか，利息その他の定期金のうち満期となった最後の２年分に限り，それらを担保する。
エ. 根抵当権でない抵当権は，担保する債権の元本のほか，利息その他の定期金のうち満期となった最後の２年分に限り，それらを担保する。
オ. 元本の確定した根抵当権は，確定した元本のほか，利息その他の定期金のうち満期となった最後の２年分について，極度額を限度として担保する。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2007",num:"14",subject:"min",q:"物上代位に関する次の１から５までの各記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．動産売買の先取特権を有する者は，債務者が第三者に先取特権の目的物を売却した場合，その転売代金債権について，物上代位権を行使することができる。",c2:"２．動産売買の先取特権を有する者は，物上代位権行使の目的である債権について，一般債権者が差押えをした後であっても，物上代位権を行使することができる。",c3:"３．抵当権に基づく物上代位の目的債権が譲渡され，第三者に対する対抗要件が備えられた場合であっても，それより前に抵当権が設定され，第三者に対する対抗要件が備えられていたならば，抵当権者は，自ら目的債権を差し押さえて物上代位権を行使することができる。",c4:"４．抵当権者は，抵当不動産の賃借人を所有者と同視することを相当とする場合を除き，その賃借人が取得する転貸賃料債権について物上代位権を行使することができない。",c5:"５．抵当権者が，物上代位権を行使して，抵当不動産の賃貸借契約に基づく未払の賃料債権の全額を差し押えた場合，当該不動産の賃借人と賃貸人の間で敷金が授受されていて，かつ，賃貸借契約が終了し，賃借人が不動産を明け渡したとしても，敷金は未払の賃料に充当されない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2007",num:"15",subject:"min",q:`根抵当権でない抵当権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 将来発生するかどうか不確実な債権について抵当権の設定登記がなされた場合，抵当権設定者は，被担保債権の不存在を理由として，抵当権者に対して，抵当権設定登記の抹消を求めることができる。
イ. 金銭消費貸借契約に基づく貸金債権について抵当権の設定登記がなされたが，結局元本が交付されなかった場合，抵当権設定者は，被担保債権の不存在を理由として，抵当権者に対して抵当権設定登記の抹消を求めることができる。
ウ. 金銭消費貸借契約に基づく貸金債権について抵当権の設定登記がなされたが，その金銭消費貸借契約が公序良俗に違反するとともに，貸金の交付が不法原因給付に当たる場合，抵当権設定者は，抵当権者に対して，抵当権設定登記の抹消を求めることができる。
エ. 債務者Ａ所有の不動産上にＹが第一順位，Ｘが第二順位の抵当権の設定を受け，それぞれ設定登記を行った後，ＡがＹに対する被担保債権をいったん弁済し，その後ＹがＡに同額の新たな貸付を行い，抹消されていなかった第一順位の登記を合意の上新たな貸付債権の担保として流用することにした場合，Ｘは，Ｙの抵当権設定登記の抹消を求めることができない。
オ. Ｘが所有する甲不動産について，Ｙに対して抵当権を設定して金銭を借り入れるとともに，Ａが，ＸのＹに対する借入れ債務を担保するため，Ｙとの間で連帯保証契約を結んだ場合，Ａが借入れ債務を全額弁済したとしても，Ｘは，Ｙに対して，抵当権設定登記の抹消を求めることはできない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2007",num:"16",subject:"min",q:"抵当権の法律関係に関する次の１から５までの各記述のうち 誤っているものはどれか。",c1:"１．抵当権が設定された建物を，抵当権者に対抗することができない賃貸借に基づいて使用する者は，競売手続開始前から使用していれば，建物の買受人が買い受けた時から６か月を経過するまでは，その建物の買受人への引渡しを猶予される。",c2:"２．登記をした賃貸借は，その登記前に登記をした抵当権を有するすべての者が同意をすれば，その同意をした抵当権者に対抗することができる。",c3:"３．土地に抵当権が設定された当時，その土地に建物が築造されていた場合，その建物の所有者が，その土地を占有するについて抵当権者に対抗することができる権利を有しないとしても，抵当権者は，土地とともに建物を競売することはできない。",c4:"４．抵当権が設定された不動産について，地上権の設定を受けた者は，抵当権消滅請求をすることができない。",c5:"５．被担保債権の債務不履行後に，抵当不動産の所有者が，その後に生じた果実を収受しても，不当利得にはならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2007",num:"17",subject:"min",q:"契約上の債務の不履行の場合における当該債務の履行の強制に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．履行の強制を求めるとともに，損害賠償を請求できる場合がある。",c2:"２．履行の強制を求めることができず，損害賠償の請求のみできる場合がある。",c3:"３．代替執行が可能なときには，間接強制を求めることはできない。",c4:"４．履行の強制を求めることも，損害賠償の請求もできない場合がある。",c5:"５．意思表示を命ずる確定判決の執行は間接強制による。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"35"},{year:"2007",num:"18",subject:"min",q:`次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア. 建物賃借人は，賃貸人に代位して，建物の不法占拠者に対し，直接自己に対してその明渡しをなすべきことを請求することができる。
イ. 抵当権者は，抵当不動産の所有者に対して有する抵当不動産を適切に維持又は保存するよう求める請求権を保全するためであっても，所有者の不法占拠者に対する妨害排除請求権を代位行使することはできない。
ウ. 債権者代位権は，保存行為に当たる場合を除き，債権者の債権が弁済期にないときは，訴訟を提起して行使しなければならない。
エ. 債権者代位権の行使は，債務者が自ら権利を行使しない場合に限り許されるから，債務者自らがその権利を行使するに当たり，不十分，不適当であっても，債権者が重ねて債権者代位権を行使することはできない。
オ. 建物賃借人は，その賃借権を保全するために，建物の賃貸人である借地権者が土地賃貸人に対して有する建物買取請求権を代位行使することができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2007",num:"19",subject:"min",q:`詐害行為取消権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア. 不動産の引渡請求権者は，債務者が目的不動産を第三者に対して贈与し，所有権移転登記をして無資力になった場合は，当該贈与契約を詐害行為として取り消すことができ，当該第三者に対し，直接自己への所有権移転登記を求めることができる。
イ. 共同相続人の間で成立した遺産分割協議は，詐害行為取消権行使の対象となり得る。
ウ. 債務者と受益者との間の不動産売買契約が債権者の債権発生前にされた場合であっても，その所有権移転登記が債権者の債権発生後になされたときは，当該売買契約は，詐害行為取消権行使の対象となり得る。
エ. 離婚に伴う財産分与は詐害行為取消権行使の対象となることはないが，離婚に伴う慰謝料支払の合意は詐害行為取消権行使の対象となることがある。
オ. 不動産が債務者から受益者へ，受益者から転得者へと順次譲渡された場合において，債権者が，債務者の一般財産を回復させるため，受益者を被告として，債務者と受益者との間の譲渡行為を詐害行為として取り消すときは，価格賠償を請求しなければならない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2007",num:"20",subject:"min",q:`弁済による代位に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 後順位抵当権者は，先順位抵当権者の被担保債権を代位弁済したときは，債権者に代位して先順位抵当権を取得する。
イ. 債務者が設定した抵当権の目的である不動産の第三取得者は，保証人に対して債権者に代位しない。
ウ. 代位弁済者が弁済による代位によって取得した担保権を実行する場合において，その被担保債権は，代位弁済者の債務者に対する求償権である。
エ. 代位弁済をした保証人が原債権を行使してその給付を請求する場合には，保証人は，主たる債務者に対する求償権の成立及びその内容について主張立証することを要しない。
オ. 一つの債権の一部につき代位弁済がされた場合，その債権を被担保債権とする抵当権の実行による競売代金の配当については，代位弁済者は債権者に劣後する。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2007",num:"21",subject:"min",q:`次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 債権の譲渡禁止特約の存在を知ってその債権を譲り受けた者は当該債権を取得し得ないから，その者からの債権譲受人も当該債権を取得し得ない。
イ. 譲渡質入禁止特約のある債権について，質権者がその特約の存在を知らないときは，質権は有効に成立する。
ウ. 債権の譲渡禁止特約の存在を知ってその債権を譲り受けた者だけでなく，同特約の存在を知らないことにつき重大な過失のある譲受人も，譲渡によってその債権を取得し得ない。
エ. 譲渡禁止特約のある債権を差し押えて，その転付命令を得た債権者が，差押え前に同特約の存在することを知っていたとしても，転付命令の効力は否定されない。
オ. ＡのＢに対する債権につき譲渡禁止特約が存在することを知って，ＣがＡからその債権を譲り受けた後，Ｂが承諾をすれば，ＡＣ間の債権譲渡は，Ｂの承諾の時から有効になる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2007",num:"22",subject:"min",q:`Ａは，Ｂに対し甲動産を売却したが，Ｂが代金を支払わないので，Ａは，その支払を求めて訴えを提起した。この事例に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. Ｂが，甲動産の引渡しと代金支払との同時履行の抗弁権を行使するためには，Ｂは，甲動産の引渡しの履行期が到来していること及びＡがＢに甲動産を引き渡していないことを主張しなければならない。
イ. Ｂの同時履行の抗弁は，ＢがＡに対し，Ａが甲動産の引渡しをするまで代金の支払を拒絶することを主張して行使しなければならない。
ウ. Ａが，Ｂの同時履行の抗弁に対し，ＡＢ間において代金支払の１０日後に甲動産を引き渡す旨の合意をしたことを主張しても，再抗弁にならない。
エ. Ａが，Ｂの同時履行の抗弁に対し，訴え提起前に到来した甲動産の引渡しの履行期に，甲動産の引渡しの準備をし，取りに来るようにＢに電話で伝えたことを主張しても，再抗弁にならない。
オ. Ｂによる同時履行の抗弁の主張が認められる場合，Ｂは，Ａに対し，Ａから甲動産の引渡しを受けるのと引換えに代金を支払うべき旨が，判決主文に記載されなければならない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2007",num:"23",subject:"min",q:`履行遅滞による契約解除のための催告に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア. 金銭債務の履行の催告においては，必ずしも金額を明示する必要はない。
イ. 催告に当たっては，債務者に対して，債務の履行を促し，履行がなければ解除する旨を通知することを要する。
ウ. 催告に当たり債権者が指定した履行の場所が不明確であったときは，この催告の効力が認められることはない。
エ. 賃貸人が，賃貸借契約の終了を原因とする賃貸借目的物の返還を請求しつつ，仮に賃貸借契約が存続しているとすれば一定額の賃料を支払うべき旨を催告しても この催告は無効である。
オ. 履行すべき相当の期間を定めない催告も有効であり，催告の後，客観的に見て相当な期間を，経過すれば解除権が発生する。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2007",num:"24",subject:"min",q:"Ａは その所有する甲土地をＢに売却する契約（以下「本契約」という。）を結び ＢはＡに手付を交付した。Ａ又はＢが手付により解除することができるかどうかに関する次の１から４までの各記述のうち，判例の趣旨に照らし正しいものはどれか 。",c1:"１．Ａが解除する場合，Ａが手付の倍額をＢに提供しなくても，本契約を手付により解除する旨の通知がＢに到達した時，解除の効果が発生する。",c2:"２．甲土地は乙土地の一部であったが Ａが乙土地から甲土地を分筆する登記手続をしたときは，，Ｂは，本契約を手付により解除することはできない。",c3:"３．Ｂが手付のほか内金をＡに支払った後に，Ｂが本契約を手付により解除する場合，Ｂは，Ａに対し内金の返還を請求することはできない。",c4:"４．Ａが本契約を結んだ翌日，甲土地の売却代金を購入代金に充てる資金計画の下で，Ｃの所有する土地をＣから購入する契約を結んだ場合，Ｂは，本契約を手付により解除することはできない。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2007",num:"25",subject:"min",q:"借地借家法の適用を受ける不動産賃貸借に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．期間の定めがない土地の賃貸借契約において，賃貸人は，１年前の解約申入れにより，契約を終了させることができる。",c2:"２．当事者が土地の賃貸借契約を締結した後に，この契約を最初に更新する場合にあっては，その期間は更新の日から１０年とされるが，当事者がこれより長い期間を定めることは妨げられない。",c3:"３．期間の定めがある建物の賃貸借契約が法定更新された場合には，従前の契約と同一の条件及び期間で契約を更新したものとみなされる。",c4:"４．期間の定めがない建物の賃貸借契約において，賃貸人は，正当の事由があるか否かにかかわらず，６か月前の解約申入れにより，契約を終了させることができる。",c5:"５．期間の定めがある建物の賃貸借契約をする場合においては，公正証書による等書面によって契約をするときに限り，契約の更新がないこととする旨を定めることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2007",num:"26",subject:"min",q:`委任の終了に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 受任者の利益のためにもなされた委任において，委任者は，やむを得ない事由がなくても，委任者が委任を解除する権利自体を放棄したものと解されない事情があるときは，委任を解除することができる。
イ. 委任は，受任者が破産手続開始の決定を受けたことによって終了するが，委任者が同決定を受けたことによっては終了しない。
ウ. 委任は，受任者が後見開始の審判を受けたことによって終了する。
エ. 委任者の死亡によっても委任は終了しないという合意は，有効である。
オ. 委任の終了事由は，相手方に通知しなければ，相手方がその事由を知っているか否かを問わず，これをもってその相手方に対抗することができない。`,c1:"１．ア エ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2007",num:"27",subject:"min",q:`不当利得に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 利益を受けたこと及び損失が発生したことについては，不当利得の返還請求をする者が主張立証しなければならない。
イ. 金銭の交付によって生じた不当利得の利益が現存しないことについては，不当利得返還請求権の消滅を主張する者が主張立証しなければならない。
ウ. 建物賃借人Ａとの間の請負契約に基づき，請負人Ｂが建物の修繕工事をした場合において，Ａが請負代金を支払わないまま無資力になったときは，建物の所有者Ｃは，法律上の原因なくして利益を受けたことになる。
エ. ＡがＢから騙取した金銭によりＡの債権者Ｃに対して債務を弁済した場合，Ｃが騙取の事実を知っていたかどうかにかかわらず，Ｃの金銭の取得には法律上の原因がある。
オ. 不動産の共有者は，当該不動産を単独で占有することができる権原がないのに単独で占有している他の共有者に対し，持分割合に応じて賃料相当額の不当利得返還請求をすることができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2007",num:"28",subject:"min",q:"不法原因給付に関する次の１から５までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．不法原因給付というためには，当事者が給付の不法性を認識しているか又は認識の可能性があることが必要である。",c2:"２．強行法規に違反してされた給付は，不法原因給付である。",c3:"３．給付者に不法な原因がある場合には，受益者により大きい不法な原因があるときでも，給付者から受益者に対する給付物返還請求が認められることはない。",c4:"４．登記された建物の所有者がその建物を不法な原因によって贈与し，引き渡した場合であっても，当該贈与契約に基づく所有権移転登記を経由していないときは，受贈者は贈与者からの当該建物の明渡請求を拒むことができない。",c5:"５．不法な原因により給付したものを返還する合意が締結された場合でも，給付者は，受益者に対して給付したものの返還を求めることはできない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2007",num:"29",subject:"min",q:`不法行為による損害賠償債権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア. 不法行為による損害賠償債務は，不法行為の時に履行遅滞に陥る。
イ. 交通事故による受傷の当時医学的に通常予想できなかった後遺症が後日生じた場合であっても，後遺症の治療費の損害賠償債権の消滅時効は，被害者又はその法定代理人が当該事故による傷害と加害者を知った時から起算される。
ウ. 双方の過失に起因する同一の交通事故によって生じた物的損害についての損害賠償債権相互間において，いずれの側からも相殺することは許されない。
エ. 不法行為による損害賠償債務の不履行に基づく遅延損害金債権は，遅延損害金債権が発生した時から１０年間行使しないことにより，時効消滅する。
オ. 不法行為による損害賠償債権の２０年の期間制限については，加害行為が終了してから相当の期間が経過した後に損害が発生する場合であっても，加害行為の時から起算される。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2007",num:"30",subject:"min",q:"事務管理に関する次の１から５までの各記述のうち 誤っているものを２個選びなさい。",c1:"１．本人の意思に反していても事務管理が成立することがあり，その場合には，管理者は，本人が現に利益を受けている限度においてのみ，本人のために支出した費用の償還を請求することができる。",c2:"２．管理者は その事務が終了した時に 本人に対して相当の額の報酬を請求することができる。",c3:"３．管理者は，本人の身体，名誉又は財産に対する急迫の危害を免れさせるために事務管理をしたときを除き，善良な管理者の注意をもって事務を処理する義務を負う。",c4:"４．管理者が本人の名でした法律行為の効果は，本人に帰属する。",c5:"５．管理者は，その事務が終了した後は，本人に対して，遅滞なくその経過及び結果を報告しなければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"24"},{year:"2007",num:"31",subject:"min",q:`離婚に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア. 夫婦の共有財産は，離婚の時から２年以内に分割しなければならない。
イ. 婚姻によって氏を改めた夫又は妻が，離婚後にも婚姻中に称していた氏を続けて称するためには，離婚の時に届出をする必要がある。
ウ. 夫婦に未成年の子がいる場合には，子の監護をすべき者その他監護について必要な事項に関する協議が調わない限り，協議離婚はできない。
エ. 財産分与に関する協議が調わなくても，協議離婚はできる。
オ. 共同親権に服する子のいる父母が裁判上の離婚をする場合には，裁判所が父母の一方を親権者と定める。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2007",num:"32",subject:"min",q:"後見に関する次の１から５までの各記述のうち 誤っているものを２個選びなさい。",c1:"１．未成年者に対して親権を行う者がないときは，家庭裁判所が職権で未成年後見人を選任する。",c2:"２．家庭裁判所は，精神上の障害により事理を弁識する能力を欠く常況にある者について，後見開始の審判をするときは，併せて成年後見人を選任する。",c3:"３．後見人は，善良な管理者の注意をもって，被後見人の財産を管理する義務を負う。",c4:"４．未成年後見人が選任されている場合においても，家庭裁判所は，必要があると認めるときは，更に未成年後見人を追加して選任することができる。",c5:"５．後見監督人がいない場合，後見人は，自己と被後見人との利益が相反する行為について，被後見人のために特別代理人の選任を家庭裁判所に請求しなければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"14"},{year:"2007",num:"33",subject:"min",q:"相続の承認と放棄に関する次の１から５までの各記述のうち 誤っているものはどれか。",c1:"１．共同相続人に強迫されて相続放棄をした場合は，放棄を取り消すことができるが，追認することができる時から６か月以内に家庭裁判所に申述して取り消さなくてはならない。",c2:"２．熟慮期間中の相続人は，固有財産におけるのと同一の注意をもって，相続財産を管理しなければならない。",c3:"３．相続人Ａが相続放棄をしたことにより相続人となったＢが相続の承認をした場合であっても，Ｂの承認後にＡが相続財産を費消した場合には，Ａは単純承認をしたものとみなされる。",c4:"４．限定承認者は，相続債権者に弁済した後でなければ，受遺者に弁済することができない。",c5:"５．相続人が数人あるときは，限定承認は，相続人全員が共同してしなくてはならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2007",num:"34",subject:"min",q:"相続人が複数存在する場合における遺産分割前の遺産に関する次の１から５までの各記述のうち，判例の趣旨に照らし正しいものを２個選びなさい。",c1:"１．遺産である貸金債権は相続人全員が共同してのみ行使することができる。",c2:"２．不動産の引渡義務を相続した場合，いずれの相続人も当該不動産の引渡義務を負う。",c3:"３．遺産である不動産を単独で占有する相続人に対して，他の相続人は，自己の持分の価額が過半数であることを理由に，その明渡しを請求することができる。",c4:"４．遺産である不動産につき，各相続人は自己の持分を処分することはできない。",c5:"５．ＡとＢが連帯して債務を負っており，Ａが死亡した場合，Ａの連帯債務はＡの相続人間で当然に分割され，各相続人はその相続分に応じて承継し，その承継した範囲においてＢとともに連帯債務者となる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"25"},{year:"2007",num:"35",subject:"min",q:"遺留分に関する次の１から５までの各記述のうち 正しいものを２個選びなさい。",c1:"１．遺留分権利者が数人あるときは，全員で共同して遺留分減殺請求権を行使する必要がある。",c2:"２．遺留分減殺請求権は，相続の開始を知った時から１年以内に行使しなければ時効消滅する。",c3:"３．判例によれば，共同相続人の１人に対する婚姻のための財産の贈与については，それが相続開始の１年前の日より前に行われた贈与であっても，特段の事情のない限り，他の共同相続人は遺留分減殺請求権を行使できる。",c4:"４．遺留分権利者は，相続開始前には遺留分を放棄することができないが，相続開始後は遺留分を放棄できる。",c5:"５．被相続人が全財産を第三者に遺贈し，相続人が被相続人の両親のみであった場合，両親の遺留分はそれぞれ６分の１である。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"35"},{year:"2007",num:"36",subject:"syo",q:"株式会社，合同会社及び民法上の組合（ 以下「会社等」という。）の比較に関する次の１から４までの各記述のうち，正しいものを２個選びなさい。なお，「構成員」とは，株式会社にあっては株主を，合同会社にあっては社員を，民法上の組合にあっては組合員をそれぞれ指すものとし，また，各記述について，定款又は組合契約には特別の定めがないものとする。",c1:"１．「構成員は，出資の限度でのみ責任を負う。」 という説明は，株式会社及び合同会社には当てはまるが，民法上の組合には当てはまらない。",c2:"２．「会社等の常務は，その完了前に他の構成員が異議を述べない限り，各構成員が単独で行うことができる。」という説明は，株式会社，合同会社及び民法上の組合のいずれにも当てはまらない。",c3:"３．「定款又は組合契約を変更するには，構成員の全員の同意が必要である。」という説明は，合同会社及び民法上の組合には当てはまるが，株式会社には当てはまらない。",c4:"４．「構成員が１人になった場合であっても，会社等は存続することができる。」という説明は株式会社には当てはまるが，合同会社及び民法上の組合には当てはまらない。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"13"},{year:"2007",num:"37",subject:"syo",q:`次のアからオまでの各記述のうち，株式会社は定款所定の目的の範囲内でのみ権利能力を有するという考え方に対する批判として，ふさわしくないものを組み合わせたものは，後記１から５までのうちどれか。
ア. 株式会社が新規の事業を行うためには，その都度定款変更が必要となって煩雑である。
イ. 株式会社の目的は登記されるが，取引相手方が取引のたびに会社の目的を確認することを期待することはできない。
ウ. 株式会社は，ある取引が会社に有利な場合にはその無効を主張せず，会社に不利な場合に目的の範囲外のものであるという理由をもってその無効を主張することができることとなり，不都合である。
エ. 取締役に過大な責任を負わせることとなって酷である。
オ. 取引相手方がある行為が目的の範囲内のものであるかどうかを的確に判断することは困難である。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2007",num:"38",subject:"syo",q:`株式会社の設立に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア. 募集設立の場合，発起人は，自ら株式を引き受けてはならず，株主の募集を行って申込人に株式を割り当てなければならない。
イ. 設立する会社が会社法上の公開会社である場合には，設立に際して発行可能株式総数の４分の１以上の株式を発行しなければならないが，設立する会社が会社法上の公開会社でない場合には，この限りではない。
ウ. 判例によれば，定款に記載しないで行われた財産引受けは，特段の事情のない限り無効であるが，会社がこれを追認すればさかのぼって有効となる。
エ. 設立時募集株式の引受人は，会社の成立後又は創立総会若しくは種類創立総会において議決権を行使した後は，錯誤を理由として設立時発行株式の引受けの無効を主張することはできない。
オ. 会社の設立の登記があっても，定款の絶対的記載又は記録事項が欠けている場合や定款の認証がない場合には，瑕疵が重大であるため，会社は不存在となり，誰でもいつでも会社が存在しないことを主張することができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2007",num:"39",subject:"syo",q:`募集株式の発行に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 会社法上の公開会社でない取締役会設置会社が募集株式を発行する場合には，株主に株式の割当てを受ける権利を与えるときであって，かつ，定款に決定機関を取締役会とする定めがあるときを除き，株主総会の特別決議を要する。
イ. 株式会社が，株主割当ての方法で募集株式の発行をしようとしている場合において，割当ての基準日を設けるときは，基準日に株主名簿に記載され，又は記録されている株主に割当てを受ける権利が与えられることになり，株券発行会社にあっては，その旨の公告が原則として必要になるが，各株主に個々に通知をすれば，それをもって当該公告に代えることができる。
ウ. 募集株式の引受人が会社に対する債権を有する場合であっても，出資の履行義務について，当該引受人側から当該債権を自働債権とする相殺を主張することはできない。
エ. 募集事項として募集株式と引換えにする金銭の払込み又は現物出資財産の給付の期日が定められている場合において，当該期日に出資の履行をしなかった募集株式の引受人は，当該出資の履行をすることにより募集株式の株主となる権利を法律上当然に失うものではない。
オ. 新株発行不存在確認の訴えについては，出訴期間の制限はない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2007",num:"40",subject:"syo",q:`単元株に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア. 単元株制度を廃止する旨の定款変更は，株主総会決議によらないで行うことができる。
イ. 株主は，単元未満株式について，議決権を行使することはできないが，株主提案権を行使することはできる。
ウ. 株主は，単元未満株式について，定款に定めがあるときに限り，会社に対してその買取りを請求することができる。
エ. 株主は，単元未満株式について，定款に定めがあるときに限り，会社に対して自己が有する単元未満株式の数と併せて単元株式数となる数の株式の売渡しを請求することができる。
オ. 種類株式発行会社において単元株制度を採用するときは，各種類株式に係る単元株式数は，同じ数でなければならない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2007",num:"41",subject:"syo",q:"株式会社（清算株式会社を除く。）における機関設計に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．株式会社には，取締役を必ず置かなければならない。",c2:"２．会社法上の公開会社には，取締役会を必ず置かなければならない。",c3:"３．取締役会を置いた場合には，監査役又は委員会（指名委員会，監査委員会及び報酬委員会をいう。以下同じ。）のいずれかを必ず置かなければならない。",c4:"４．取締役会を置かない場合には，監査役会及び委員会のいずれも置くことができない。",c5:"５．大会社には，会計監査人を必ず置かなければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2007",num:"42",subject:"syo",q:`取締役会設置会社の取締役に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア. 委員会設置会社の取締役の確定した額の金銭による報酬については，報酬委員会において個人別の額を決定しなければならない。
イ. 取締役が取締役会の承認を受けずに競業取引を行った場合には，当該取引は無効であるが，当該取引の相手方が取締役会の承認を受けていないことにつき善意でかつ重大な過失がないときは，会社は，無効であることを当該相手方に対抗することができない。
ウ. 取締役が株主の権利行使に関して利益を供与した場合には，当該取締役は，その職務を行うについて注意を怠らなかったことを証明したとしてもなお，供与した利益の価額に相当する額を会社に対し支払う義務を負う。
エ. 取締役が自己のために株式会社と取引をし，それによって当該株式会社に損害が生じた場合には，当該取締役は，任務を怠ったことが当該取締役の責めに帰することができない事由によるものであることを証明することにより，当該取引に係る任務懈怠責任を免れることができる。
オ. 会社が取締役に対して訴えを提起する場合には，監査役設置会社であるか否かを問わず，被告となる取締役以外の取締役が会社を代表する。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2007",num:"43",subject:"syo",q:`一定の法定期間内本店に備え置かれなければならない次のアからオまでのもののうち，それらが書面をもって作成されている場合において，法定の備置期間内における営業時間内に，裁判所の許可を得ることなく，株主及び会社債権者が当該書面又はその写しの閲覧請求権を行使することができるものを組み合わせたものは，後記１から５までのうちどれか。
ア. 書面による議決権行使として会社に提出された議決権行使書面
イ. 株主総会議事録
ウ. 取締役会議事録
エ. 委員会設置会社における各委員会の議事録
オ. 計算書類及び事業報告並びにこれらの附属明細書`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2007",num:"44",subject:"syo",q:`株式会社の監査役に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア. 監査役の選任決議について，累積投票の制度が認められる。
イ. 監査役は，定款に別段の定めがある場合を除き，議決権を行使することができる株主の議決権の過半数を有する株主が出席し，出席した当該株主の議決権の過半数をもって行う株主総会決議で解任される。
ウ. 会社は，定款の定めにより，社外監査役が職務を行うにつき善意でかつ重大な過失がないときは，会社に対する責任について，定款で定めた額の範囲内であらかじめ会社が定めた額と最低責任限度額とのいずれか高い額を限度とする旨の契約を，当該社外監査役と締結することができる。
エ. 監査役設置会社の監査役は，その職務を行うため必要があるときは，当該監査役設置会社の子会社の業務及び財産の状況を調査することができるが，当該子会社は，正当な理由があるときは，その調査を拒むことができる。
オ. 会社は，定款の定めにより，当該会社の監査役の任期を，選任後２年以内に終了する事業年度のうち最終のものに関する定時株主総会の終結の時までとすることができる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2007",num:"45",subject:"syo",q:`株式会社の計算に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 株式会社は，その純資産額が３００万円を下回る場合には，株主に対し，剰余金の配当をすることができない。
イ. 株式の無償割当てにより株式が発行された場合には，新たに資本金は計上されない。
ウ. 剰余金の分配の財源とするために資本準備金の額を減少することはできない。
エ. 資本準備金の額の減少をする場合において，減少する資本準備金の額の全部を資本金とするときは，債権者保護手続を経ることを要しない。
オ. 取締役会設置会社にあっては，取締役会の決議により，その他資本剰余金の額を減少して資本準備金の額を増額することができる。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2007",num:"46",subject:"syo",q:"会社法第４２９条第１項に基づく取締役の第三者に対する責任に関する次の１から５までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．辞任後も辞任の登記が未了であることによりその者がなお取締役であると信じて会社と取引をした第三者に対し，辞任した取締役は，登記申請権者である当該会社の代表者に対し辞任登記を申請しないで不実の登記を残存させることについて黙示に承諾をしていた場合には，責任を負う。",c2:"２．取締役の第三者に対する責任が発生するためには，第三者に対する加害についての悪意又は重過失が要件となる。",c3:"３．取締役の第三者に対する責任は会社法の定める法定責任であるから，その遅延損害金の利率は年６分である。",c4:"４．取締役の第三者に対する責任は不法行為責任ではないから，賠償すべき損害額を算定するに当たり，第三者に過失があったとしても，過失相殺をすることはできない。",c5:"５．取締役が悪意又は重大な過失となる放漫経営をし，当該放漫経営により倒産した会社に対する債権を回収することができなくなる損害を被った会社債権者は，当該取締役の責任を追及することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2007",num:"47",subject:"syo",q:"株式会社を存続会社及び消滅会社とする吸収合併に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．反対株主として株式買取請求をした株主は，その後いつでも自由にその請求を撤回することができる。",c2:"２．反対株主として株式買取請求をすることができる者は，合併についての株主総会決議につき議決権を行使することができる株主に限られない。",c3:"３．合併により消滅会社の権利義務は存続会社に包括的に承継されるので，消滅会社が発行していた新株予約権を，存続会社が承継しないものとすることはできない。",c4:"４．吸収合併の効力は，合併の登記の日に生ずる。",c5:"５．合併当事者の一方が特別支配会社であるいわゆる略式合併において，合併についての株主総会決議が不要とされる会社の株主の一定数が異議を申し出た場合には，株主総会決議を不要とすることはできない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2007",num:"48",subject:"syo",q:`株主総会における瑕疵ある決議についての訴訟に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは 後記１から５までのうちどれか。
ア. 株主総会決議無効確認の訴えは，決議の内容が法令又は定款に違反する場合に，提起することができる。
イ. 株主総会決議取消しの訴えが適法に提起された後に原告である株主につき相続があった場合には，その相続人が原告の地位を承継する。
ウ. 計算書類承認の株主総会決議の取消訴訟の係属中に，翌期以後の計算書類が承認された場合であっても，原告が勝訴すれば決議がさかのぼって無効になることから，その後にその議案につき再決議がされたなどの特別の事情のない限り，訴えの利益は失われない。
エ. 取締役選任の株主総会決議の取消訴訟において，当該決議により選任された取締役は，被告である会社の共同訴訟人として共同訴訟参加をすることはできないが，当該会社を補助するため共同訴訟的補助参加をすることはできる。
オ. 株主総会決議の無効確認訴訟においては，裁判所は，法令違反の事実が重大ではなく，かつ ，決議に影響を及ぼさないと認められるときは，請求を棄却することができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2007",num:"49",subject:"syo",q:"商業登記に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．一種又は数種の営業を許可された未成年者が営業を行う場合には，登記をしなければならない。",c2:"２．小商人には商業登記の規定が適用されない。",c3:"３．商号は一定の場合に譲渡することができ，その場合における譲渡の効力は当事者間の契約により生ずるが，当該譲渡を第三者に対抗するには，登記が必要である。",c4:"４．営業譲渡がされ，譲受人が譲渡人の商号を引き続き使用する場合には，譲渡人の当該営業によって生じた債務を引き受けなかった譲受人も，営業譲渡後遅滞なく譲渡人の債務を弁済する責任を負わない旨を登記しない限り，当該債務を弁済する責任を免れることができない。",c5:"５．複数の支配人が代理権を共同で行使すべき旨の制限を設けたとしても，それを登記することはできない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2007",num:"50",subject:"syo",q:`Ａ株式会社がＢ信用金庫の組合員である場合についての次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア. Ｂ信用金庫がＡ株式会社に対し事業資金を融資するために消費貸借契約を締結した場合においては，Ｂ信用金庫のＡ株式会社に対する元利金支払請求権の消滅時効期間は５年である。
イ. Ｂ信用金庫がＡ株式会社に対し事業資金を融資するために消費貸借契約を締結した場合において，Ｂ信用金庫に対するＡ株式会社の債務を商人でないＣ（自然人）が保証した場合には，当該保証は連帯保証となる。
ウ. Ｂ信用金庫がＡ株式会社から第三者振出しの約束手形の取立委任を受けて占有しているときは，Ｂ信用金庫は，Ｂ信用金庫がＡ株式会社に対し事業資金を融資するために締結した消費貸借契約に基づくＡ株式会社に対する元利金支払請求権を被担保債権として，この約束手形について商事留置権を有する。
エ. Ｂ信用金庫は，営業的商行為としての銀行取引を営業としてする者であるから，商人である。
オ. Ｂ信用金庫とＡ株式会社との間に当座勘定取引が行われているときは，当該取引は商法にいう交互計算契約に該当し，いわゆる交互計算不可分の原則の適用がある。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2007",num:"51",subject:"syo",q:`Ａの販売する商品をＢが買い付けるに当たりＣが関与する法的形態についての次のアからオまで，の各記述のうち 正しいものを組み合わせたものは 後記１から５までのうちどれか。
ア. ＣがＡから販売委託を受けた問屋である場合には，売買契約はＡ・Ｂ間に成立する。
イ. ＣがＡから委託を受けた仲立人である場合には，売買契約はＣ・Ｂ間に成立する。
ウ. 判例によれば，Ｂにとって買付けが商行為である場合には，ＣがＢから商品買付けの契約締結代理権を付与されていたが，ＣがＡに対してＢを代理して契約を締結する旨を表示しなかったときであっても，売買契約はＡ・Ｂ間に成立し，Ａ・Ｃ間に契約が成立することはない。
エ. ＣがＡから委託を受けた媒介代理商である場合には，売買契約はＡ・Ｂ間に成立する。
オ. ＣがＡから委託を受けた締約代理商であり，その旨をＢに明示して契約する場合には，売買契約はＡ・Ｂ間に成立する。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2007",num:"52",subject:"syo",q:`約束手形に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 確定日払の約束手形の所持人は，支払をすべき日に支払のために適法に当該手形を呈示しなければ，裏書人に対する遡求権を失う。
イ. 約束手形の振出人は，満期前にあっては，所持人からの約束手形金の支払を拒むことができる。
ウ. 約束手形の振出しについて手形要件が満たされず，振出しが無効である場合には，当該手形にされた裏書も無効となる。
エ. 約束手形は，一覧払でも振り出すことができる。
オ. 判例によれば，満期が白地の約束手形が振り出された場合において，白地が補充されないまま補充権を行使し得べき時から３年が経過したときは，白地補充権は時効により消滅する。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2007",num:"53",subject:"mso",q:`ＸとＹとの間の売買代金の支払のため，Ｙを振出人とし，Ｘを受取人とする約束手形が振り出され，満期後，ＸがＹに対する約束手形金請求の手形訴訟を提起した。その訴状の請求原因の項には，第１項「被告Ｙは，別紙手形目録記載の約束手形１通を振り出した。」，第２項「原告Ｘは，前項の手形を所持している。」との記載があり，第１回口頭弁論期日において，Ｘは，これを陳述した。この場合におけるＸ及びＹの主張に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか 。
ア. Ｘの手形金請求が認容されるためには，Ｘは，更にＸＹ間の売買契約の成立及びその代金支払のため約束手形が振り出された旨を請求原因として主張しなければならない。
イ. Ｘの手形金請求が認容されるためには，Ｘは，更に手形の満期に支払場所で呈示をした旨を請求原因として主張することを要しない。
ウ. Ｘは，訴状記載の請求原因の主張で，手形満期日から支払済みまでの手形法所定年６分の割合による利息の支払も請求することができる。
エ. Ｙは，この手形訴訟において，Ｘの債務不履行に基づく売買契約の解除の抗弁を主張することができない。
オ. 別紙手形目録の記載上，振出日欄が空欄であるときは，Ｘの手形金請求は認容されない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2007",num:"54",subject:"mso",q:"夫婦の同居を命じる審判に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．夫婦の同居を命じる審判は，判例によれば，同居の時期，場所，態様等について具体的内容を定めるものとして，本質的に非訟事件の裁判である。",c2:"２．夫婦の同居を命じる審判の手続は，非公開である。",c3:"３．夫婦の同居を命じる審判の手続においては，職権探知主義により審理が行われる。",c4:"４．判例によれば，同居の時期，場所，態様等について具体的内容を定める夫婦の同居を命じる審判の確定後は，もはや訴えにより同居義務自体の不存在の確認を求めることはできない。",c5:"５．同居の時期，場所，態様等について具体的内容を定める夫婦の同居を命じる審判が確定すれば，強制執行によってその内容を実現することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"45"},{year:"2007",num:"55",subject:"mso",q:"売買契約書中に，当該契約に関する紛争についてＡ裁判所に専属管轄があると定める合意管轄条項がある場合の訴えに関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．訴えがＢ裁判所に提起され，被告が管轄違いの抗弁を提出しないで本案について弁論をした場合であっても，Ｂ裁判所は，当該訴訟をＡ裁判所に移送しなければならない。",c2:"２．訴えがＡ裁判所に提起された場合であっても，事件の証人が法定管轄のあるＢ裁判所の管轄，区域内に集中しており，訴訟の著しい遅滞を避ける必要があると認めるときには，Ａ裁判所は当該訴訟をＢ裁判所に移送することができる。",c3:"３．債権者代位権に基づいて，売主の債権者が買主に対して売買代金の支払を求める訴えを提起する場合，売主の債権者に対しても管轄の合意の効力が及ぶ。",c4:"４．買主の債務不履行のため売主が売買契約を解除した場合には，解除により管轄の合意の効力も失われるので，売主は，解除を理由とする目的物の返還を求める訴えを法定管轄のあるＢ裁判所に提起することができる。",c5:"５．未成年者があらかじめ法定代理人の同意を得た上で売買契約を締結した場合には，管轄の合意は有効であり，法定代理人による追認の対象とはならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"23"},{year:"2007",num:"56",subject:"mso",q:`責問権に関する次のアからオまでの各記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 裁判官が代わった場合において，従前の口頭弁論の結果が陳述されなかったときでも，当事者が遅滞なく異議を述べないときは，責問権を喪失する。
イ. 宣誓を必要とする証人を宣誓させずに証人尋問を行った場合でも，当事者が遅滞なく異議を述べないときは，責問権を喪失する。
ウ. 証人として尋問すべき者を当事者本人として尋問した場合でも，当事者が遅滞なく異議を述べないときは，責問権を喪失する。
エ. 訴えの変更が書面によらないでされ 又は訴えの変更の書面が被告に送達されなかった場合，，その違反は，被告の責問権の喪失によって治癒されるものではない。
オ. 人事訴訟において，対審の公開停止のための要件がないにもかかわらず，公開を停止した場合，その違反は，当事者の責問権の喪失によって治癒されるものではない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2007",num:"57",subject:"mso",q:`上告審に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 上告裁判所は，当事者適格の有無を判断するに当たり，原判決において適法に確定した事実に拘束される。
イ. 最高裁判所は，原判決に最高裁判所の判例と相反する判断がある事件について，申立てにより，決定で，上告審として事件を受理することができる。
ウ. 上告裁判所は，上告を理由があると認める場合，口頭弁論を開かなければならない。
エ. 最高裁判所への上告の提起は，上告状を最高裁判所に提出してしなければならない。
オ. 判例によれば，上告裁判所によって破棄差戻しがされた後の原審が，差戻し前の原判決と同一の認定事実の下で，破棄理由で誤りとされた法律的見解とは別個の法律的見解に立って，差戻し前の原判決と同一の結論の判決をすることは，破棄判決の拘束力に違反しない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2007",num:"58",subject:"mso",q:`相殺に関する次のアからオまでの各記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア. ＡのＢに対する売買代金の支払を求める訴訟において，ＢがＡに対する貸金債権の一部をもって相殺する旨の抗弁を主張したところ，自働債権の成立が認められず，請求を認容する判決が確定した。その後，Ｂが同一の貸金債権のうち相殺をもって対抗した額を超える部分について訴えを提起して，その支払を請求することは，前訴判決の既判力により妨げられる。
イ. ＡのＢに対する売買代金の支払を求める訴訟において敗訴判決を受けたＢが，請求異議訴訟において，Ａに対する貸金債権による相殺を主張したところ，自働債権の存在が認められず，請求を棄却する判決が確定した。その後，Ｂが同一の貸金債権について訴えの提起をして，その支払を請求することは，請求異議訴訟における判決の既判力により妨げられない。
ウ. ＡのＢに対する売買代金の支払を求める訴訟において，ＢがＡに対する貸金債権をもって相殺する旨の抗弁を主張している場合，ＡがＢに対する請負代金債権をもって当該貸金債権と訴訟上相殺する旨の再抗弁を主張することは許される。
エ. ＢのＡに対する貸金債権の支払を求める訴訟において，Ｂの訴えを却下する判決が確定した後，ＡのＢに対する売買代金の支払を求める訴訟において，Ｂが前訴と同一の貸金債権をもって相殺する旨の抗弁を主張することは，前訴判決の既判力により妨げられない。
オ. ＢのＡに対する貸金債権の支払を求める訴訟の係属中に，ＡのＢに対する売買代金の支払を求める別訴が提起された場合，当該別訴において，Ｂが同一の貸金債権をもって相殺する旨の抗弁を主張することは許されない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2007",num:"59",subject:"mso",q:"同一の訴訟手続において複数の請求を審判対象とする場合に関する次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．同一の相手方に対し 貸金債権と それとは無関係に成立した売買代金債権とを有する者は，，当初から一の訴えでこれらの貸金の返還及び売買代金の支払を求めることができる。",c2:"２．訴えの変更及び反訴の提起は，攻撃防御方法の提出ではないので，訴訟手続を著しく遅滞させることになることを理由に不適法とされることはない。",c3:"３．被告が訴えの変更に同意した場合，判例によれば，当該訴えの変更は，請求の基礎の同一性がないことを理由に不適法とされることはない。",c4:"４．売買代金請求に加え，売買が無効と判断される場合に備えて売買の目的物の返還請求を予備的に併合する訴訟において，裁判所が売買代金請求を認容するときは，目的物返還請求を棄却する必要はない。",c5:"５．判例によれば，主位的請求を棄却し，予備的請求を認容した第一審判決に対して，被告のみが控訴し，原告が控訴も附帯控訴もしなかった場合でも，主位的請求に関する部分も控訴審の審判対象となる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"25"},{year:"2007",num:"60",subject:"mso",q:"訴えの取下げに関する次の１から５までの各記述のうち 正しいものを２個選びなさい。",c1:"１．処分権主義が制限される人事訴訟においては，訴えの取下げは許されない。",c2:"２．被告が訴えの却下を求めて準備書面を提出した後に原告が訴えの取下げをしたときは，被告の同意を得なければ，取下げの効力を生じない。",c3:"３．契約の相手方の代理人の代理権が否定される場合に備えて，原告が相手方本人とその代理人を共同被告として訴えを提起し，同時審判の申出をした場合でも，一方に対する訴えのみを取り下げることはできる。",c4:"４．控訴審の口頭弁論の期日に当事者双方が出頭せず，その後，１か月以内に期日指定の申立てもしなかったときは，第一審原告が訴えを取り下げたものとみなされる。",c5:"５．第一審で勝訴した原告が控訴審で訴えを取り下げたときは，同一の訴えを再び提起することはできないが，取下げ後にその訴えの提起を必要とする新たな事情が生じた場合は，再訴が許されることがある。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"35"},{year:"2007",num:"61",subject:"mso",q:"ＹはＡに建物新築工事を注文した。Ａはこれを請け負い，同建物の左官工事についてはＸがＡから下請けした。建物は完成してＹに引き渡されたものの，ＡのＹに対する請負代金債権（以下「甲債権」という。）についても，ＸのＡに対する下請工事代金債権（以下「乙債権」という。）についても弁済がなされないまま，Ａが経営に行き詰まり，無資力となった。そこで，Ｘは，Ａから乙債権について弁済を受けられないとして，債権者代位権に基づき，Ｙを被告として甲債権について支払を求める訴えを提起した。この訴訟に関する次の１から５までの各記述のうち，正しいものを２個選びなさい 。",c1:"１．Ｙは，ＹがＸに対して有する債権をもって甲債権と相殺すると主張し，そのことをＸの請求に対する抗弁とすることはできない。",c2:"２．判例によれば，Ｘが債権者代位権の行使に着手した事実をＡに通知するか又はＡがこれを了知した後でも，Ａは当事者適格を失わず，Ｘの共同訴訟人として本件訴訟に共同訴訟参加をすることができる。",c3:"３．乙債権が全額支払済みであることが明らかになった場合，裁判所は，Ｘの請求を棄却しなければならない。",c4:"４．判例によれば，Ａが，Ｘに対しては乙債権の弁済を理由にその不存在の確認を求め，Ｙに対しては甲債権についての支払を求めて，本件訴訟に独立当事者参加をすることは，重複起訴禁止の趣旨に照らして許されない。",c5:"５．乙債権が第三者弁済によって消滅していたが，そのことが明らかにならないまま甲債権が存在しないとしてＸの請求を棄却する判決が確定した。その後，上記の第三者弁済の事実が明らかになったときは，Ａは，前訴判決の既判力に妨げられることなく，Ｙに対して訴えを提起して甲債権についての支払を請求することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"15"},{year:"2007",num:"62",subject:"mso",q:`訴訟能力に関する次のアからオまでの各記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 訴訟能力を欠く者がした訴訟行為は，これを有するに至った当事者又は法定代理人の追認により，行為の時にさかのぼってその効力を生ずる。
イ. 訴状を送達したところ被告に訴訟能力が欠けていることが明らかになったときは，裁判所は，期間を定めてその補正を命じなければならない。
ウ. 原告に訴訟能力が欠けていることを理由とする訴え却下判決に対して原告が控訴した場合において，控訴裁判所が訴訟能力が欠けているとの判断に達したときは，訴訟能力を欠く者のした控訴であるから，同裁判所は，控訴を不適法なものとして却下しなければならない。
エ. 原告に訴訟能力が欠けていることを理由とする訴え却下判決に対して原告が控訴した場合において，控訴裁判所が訴訟能力があるとの判断に達したときは，同裁判所は，第一審判決を取り消して，自ら本案について判決をしなければならない。
オ. 第一審において，被告に訴訟能力が欠けていることを看過して請求棄却判決が言い渡された場合には，勝訴している被告の法定代理人は，本人に訴訟能力がないことを理由として控訴することはできない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2007",num:"63",subject:"mso",q:"当事者のした自白の効力に関する次の１から４までの各記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．株主Ｘ１が提起した取締役Ｙの責任を追及する訴訟に株主Ｘ２が共同訴訟参加をした場合において，Ｘ１がＹの主張した抗弁事実について自白をしたとき，この事実をＸ２が争えば，Ｘ１の自白はその効力を生ずることはない。",c2:"２．ＸがＹを被告として提起した土地の所有権確認及び明渡しを求める訴訟の係属中，Ｚが，ＸとＹとを共同被告として同一土地の所有権確認及び明渡しを求めて別訴を提起したところ，これらすべての訴訟手続の口頭弁論が併合された。この場合において，Ｘの主張した請求原因事実についてＹが自白をしたとき，この事実をＺが争えば，Ｙの自白はその効力を生ずることはない。",c3:"３．ＸがＹを被告として提起した保証債務の履行を求める訴訟の係属中，この訴訟に主債務者Ｚが補助参加した場合において，Ｙが主債務の発生原因事実について自白をしたとき，この事実をＺが争えば，Ｙの自白はその効力を生ずることはない。",c4:"４．Ｘは，土地の所有者Ｙ１と占有者Ｙ２とを共同被告として提起した土地工作物責任に基づく損害賠償請求訴訟において，同時審判の申出をした。この場合において，Ｙ１がＸの主張した請求原因事実について自白をしたとき，この事実をＹ２が争えば，Ｙ１の自白はその効力を生ずることはない。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2007",num:"64",subject:"mso",q:"証拠に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．厳格な証明においては，要証事実について高度の蓋然性をもって証明する必要があるが，自由な証明においては，厳格な証明よりも低い証明度で足りる。",c2:"２．疎明は，即時に取り調べることができる証拠によってしなければならない。",c3:"３．第三者が所持する文書については，文書提出命令の申立てをすることはできないが，文書送付の嘱託を申し立てることはできる。",c4:"４．証拠保全の申立てを認める決定に対しては不服申立てをすることができないが，却下する決定に対しては抗告をすることができる。",c5:"５．原告となろうとする者は，被告となるべき者が所持する文書について，特に必要がある場合に限り，訴え提起前の証拠収集の処分として，裁判所に対して文書提出命令を申し立てることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"24"},{year:"2007",num:"65",subject:"mso",q:"当事者本人等の尋問に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．当事者本人を尋問する場合において，その当事者本人が正当な理由なく出頭しないときは，勾引することができる。",c2:"２．当事者本人の法定代理人を尋問するときは，当事者本人の尋問に関する規定に従って行われる。",c3:"３．当事者本人を尋問する場合において，当事者本人が正当な理由なく宣誓を拒んだときは，裁判所は，尋問事項に関する相手方の主張を真実と認めることができる。",c4:"４．証人及び当事者本人の尋問を行うときは，まず当事者本人を先に尋問する。ただし，適当と認めるときは，当事者の意見を聴いて，まず証人の尋問をすることができる。",c5:"５．当事者は，自己の当事者本人の尋問を申し立てることができるが，相手方当事者本人の尋問を申し立てることはできない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"23"},{year:"2007",num:"66",subject:"mso",q:"訴状に関する次の１から５までの各記述のうち 誤っているものはどれか。",c1:"１．自然人を被告とする場合，通常は氏名と住所を訴状に記載して被告を特定するが，特定し得るのであれば，氏名の代わりに通称名を用いることができる。",c2:"２．損害賠償請求訴訟については，損害額の算定が容易でない場合があるから，請求の趣旨に具体的金額を記載することに代え，裁判所が相当と認める金額の支払を求める旨の記載をすることができる。",c3:"３．貸金返還請求訴訟の訴状に，弁済期の合意や弁済期の到来の事実の記載がなくても，契約当事者，貸付日及び貸付金額を記載することによって請求が特定されれば，補正を命じた上での訴状却下命令をすることはできない。",c4:"４．簡易裁判所に対する訴えの提起においては，請求の原因に代えて，紛争の要点を明らかにすれば足りる。",c5:"５．訴状には，立証を要する事由ごとに，当該事実に関連する事実で重要なもの及び証拠を記載しなければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2007",num:"67",subject:"mso",q:"訴訟手続の中断に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。なお，１から４までの各記述においては，原告，被告とも訴訟代理人を選任していなかったものとする。",c1:"１．土地所有者Ｘが，土地上の建物を共有して土地を占有しているＹ１及びＹ２に対し提起した建物収去土地明渡請求訴訟において，Ｙ１が訴訟係属中に死亡した場合，ＸＹ１間の訴訟手続は中断するが，ＸＹ２間の訴訟手続は中断しない。",c2:"２．土地所有者Ｘが，土地上の建物を所有して土地を占有しているＹに対し提起した建物収去土地明渡請求訴訟において，Ｙが訴訟係属中に当該建物をＺに譲渡した場合，訴訟手続は中断する。",c3:"３．土地所有者Ｘが，土地上の建物を所有して土地を占有しているＹ株式会社に対し提起した建物収去土地明渡請求訴訟において，Ｙ社が訴訟係属中に別の株式会社と合併し，新設会社Ｚ株式会社を設立した場合，訴訟手続は中断しない。",c4:"４．土地所有者Ｘが，土地上の建物を所有して土地を占有しているＹ株式会社に対し提起した建物収去土地明渡請求訴訟において，Ｙ社の唯一の代表取締役が訴訟係属中に死亡した場合，訴訟手続は中断する。",c5:"５．土地所有者Ｘが，土地上の建物を所有して土地を占有しているＹに対し提起した建物収去土地明渡請求訴訟において，Ｙが訴訟代理人を選任して応訴していたところ，当該訴訟代理人が死亡した場合，新たな訴訟代理人が選任されるまで訴訟手続は中断する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"14"},{year:"2007",num:"68",subject:"mso",q:`判決の効力に関する次のアからオまでの各記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア. Ｘが，甲土地をＹから買い受けたとして，Ｙを被告とする所有権確認請求訴訟を提起し，Ｘの敗訴判決が確定した後，Ｘが再びＹを被告として甲土地について所有権確認を求める訴えを提起し，前訴の口頭弁論終結前に甲土地を所有者であるＺから相続により取得していたと主張することは，既判力により妨げられない。
イ. ＸのＹに対する乙土地の所有権確認請求訴訟において，Ｘから乙土地を譲り受けたとするＺが乙土地の所有権を有するものとして独立当事者参加をしてきたため，ＸがＹ及びＺの同意を得て訴訟から脱退したときは，確定判決の効力はＸに及ばない。
ウ. ＸのＹに対する自動車引渡請求訴訟において，Ｘの勝訴判決が確定した場合には，Ｙからの依頼を受けて自動車を保管しているＺについては，請求の目的物の所持者として，ＸとＹとの間の確定判決の効力が及ぶ。
エ. ＸのＹに対する保証債務履行請求訴訟において，主債務者ＺがＹを補助するため当該訴訟に参加したものの，Ｚが補助参加した時点においては，既に主債務はＺの弁済により消滅した旨のＹの主張が時機に後れた防御方法であるとして却下されていたため，自己の弁済の主張をＺができないまま，Ｙの敗訴判決が確定した。この場合，Ｚは，Ｙからの求償訴訟において，Ｚには前訴の判決の効力が及ばないとして，自己の弁済を主張することができる。
オ. Ｙ株式会社の株主Ｘが，Ｙ株式会社の設立無効の訴えを提起し，その訴訟においてＸの勝訴判決が確定したとしても，ＸＹ間の訴訟に参加していなかった他の株主Ｚには確定判決の効力は及ばない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2007",num:"69",subject:"mso",q:"Ｘは，Ｙと婚姻関係にあるが，Ｙの不貞行為を原因として，離婚の訴えを提起した。この事案に関する次の１から５までの各記述のうち，正しいものを２個選びなさい。",c1:"１．Ｙが口頭弁論において，Ｘが主張した不貞行為の事実の存在を認めた場合であっても，裁判所は，証拠調べの結果，不貞行為の事実の存在は認められないとの判断をすることができる。",c2:"２．Ｙが成年被後見人であり，Ｘが成年後見人に選任されているときは，Ｙは，意思能力を有していても，特別代理人又は成年後見監督人によらなければ，訴訟行為をすることができない。",c3:"３．Ｙの不貞行為の事実については，裁判所は，職権で証拠を収集してその有無を認定すべきであり，当該事実が真偽不明であるという状況は生じないので，証明責任が働くことはない。",c4:"４．ＸとＹは，訴訟上の和解により離婚をすることができる。",c5:"５．Ｘの請求を認容する判決と，これを棄却する判決とは，いずれも形成判決である。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"14"},{year:"2007",num:"70",subject:"mso",q:"Ｘは，「甲建物は，かつてＡが所有していたが，同人が死亡し，同人の子で唯一の相続人であるＸが相続した。しかるに，Ｙは何らの権原もなく，同建物を占有している。」と主張し，同建物の所有権に基づいて，Ｙに対して，同建物の明渡しを求める訴えを提起した。この事案に関する次の１から４までの各記述のうち，正しいものを２個選びなさい 。",c1:"１．Ｙは，「Ｘが甲建物を所有していることは否認する。元所有者のＡは，生前Ｙに甲建物を売却した。」と主張した。裁判所は 証拠調べの結果，ＡはＹではなく，Ｂに同建物を売却したと認めた場合でも，Ｂへの売買がされているのでＸは同建物を所有していないとの理由で，Ｘの請求を棄却することはできない。",c2:"２．Ｙは，「元所有者のＡは，生前Ｙに甲建物を賃貸し，同建物を引き渡した。」と主張した。Ｘは，このＹの主張を否認し，「ＡはＹに 甲建物を，期間の定めなくＹの居住のため無償で利用させる旨約束して，これを引き渡したが，Ｙの居住の目的に従った使用収益をするのに足りる期間は経過した。」と主張した。Ｙは，このＸの主張を全部否認した。裁判所は，証拠調べの結果，ＡＹ間において使用貸借契約が成立したが，Ｘの主張する期間の経過は認められないと判断した場合，Ｙの使用借権の存在を理由として，Ｘの請求を棄却することができる。",c3:"３．Ｙは，「Ｘが甲建物を所有していることは認めるが，Ｘは，元所有者のＣから買い受けたものである。Ｘは，Ｙに同建物を賃貸し，引き渡した。」と主張した。裁判所は，証拠調べの結果，Ｘは，同建物を元所有者のＣから買い受けたものであり，Ａから相続したものではないと認めた場合には，ＸＹ間の建物賃貸借が認められないと判断したときでも，Ｘの請求を認容することはできない。",c4:"４．Ｙは，「ＸがＡから甲建物を相続したことは認めるが，Ｘは，Ｄに対して同建物を売却し，ＹはＤから同建物を買い受けた。」と主張した。裁判所は，証拠調べの結果，ＸがＤに対して同建物を売却したことは認められるが，ＤからＹへの売却については認められないと判断した場合には，Ｘの請求を棄却することはできない。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"12"},{year:"2007",num:"1",subject:"kei",q:`判例の立場に従って次の【事例】の甲の罪責について検討した場合，後記１から５までの各記述のうち，正しいものはどれか。
【事例】
　甲は，女子中学生を自動車に乗車させるなどしてホテルの一室に連行し，睡眠薬を服用させて熟睡させた上，同女にわいせつな行為をすることを企て，自動車を運転中に見かけた女子中学生乙(１４歳)に対し声を掛け， 「君のお母さんが交通事故に遭って病院に運ばれた。私は病院から頼まれて君を迎えに来た。お母さんのいる病院まで連れて行ってあげるから車に乗って。」と虚偽の事実を述べた。甲の言葉を信じた乙が甲運転車両の後部座席に乗車すると，甲は，同車を運転して同所から約１０キロメートルの地点にあるホテルＡに向かった。甲は，同車を走行中，信号待ちをしている間にあらかじめ用意しておいた缶飲料を開け，密かに睡眠薬を混入させた上「飲むと落ち着くよ。」と述べて乙に手渡した。乙は，甲から手渡された睡眠薬入りの缶飲料を飲むと間もなく眠り込んだ。
　甲は，乙を自動車に乗車させてから約３０分後にホテルＡに到着すると，眠り込んだままの同女を抱きかかえて同ホテルの一室に連れ込み，ベッドに横たえた上で部屋の出入口ドアを施錠したところ，同女が目を覚ました。乙は，母親が入院している病院ではなくホテルの一室に自分が連れ込まれていることに気付き，室外に逃げ出すため出入口ドアに近づこうとした。甲は，わいせつな行為を乙が熟睡している間にすることで犯行の発覚を免れようと計画していたことから，同女が目を覚ました以上わいせつな行為は断念せざるを得ないが，捕まらずに逃げるために，当分の間同女を室内にとどめて人と接触させないようにしなければならないと考えた。そこで，甲は，出入口ドアの前に立ちふさがり，乙が出入口ドアに近づくのを妨げるとともに，同女に対し「部屋の中で大人しくしていろ。外には見張りがいるので逃げようとしても無駄だ。勝手に部屋から出ようとしたら痛い目に遭わせてやる。」と述べて同女を脅した上で，同女を残して１人で部屋を出て，そのまま自動車を運転してホテルＡから立ち去った。
　乙は，甲に脅されたため，勝手に室外に出ると暴力を振るわれるのではないかと恐れて室内にとどまっていたが，目を覚ましてから約１時間後に意を決して出入口ドアを開けたところ見張りなどいないことに気付き，室外に出て同ホテルのフロントに助けを求めた。`,c1:"１．未成年者誘拐罪（刑法第２２４条 ，わいせつ目的誘拐罪（刑法第２２５条 ，監禁罪（刑法））第２２０条）及び脅迫罪（刑法第２２２条第１項）が成立する。",c2:"２．わいせつ目的誘拐罪，監禁罪及び準強制わいせつ未遂罪（刑法第１７９条，第１７８条第１項）が成立する。",c3:"３．未成年者誘拐罪，監禁罪及び準強制わいせつ未遂罪が成立する。",c4:"４．わいせつ目的誘拐罪，脅迫罪及び準強制わいせつ未遂罪が成立する。",c5:"５．未成年者誘拐罪及び監禁罪が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2007",num:"2",subject:"kei",q:`次の【事例】について，甲及び丙の行為がいずれも傷害罪の構成要件に該当するとした上で，後記の【見解】ⅠないしⅣを採って検討した場合，後記１から５までの各記述のうち，正しいものはどれか 。
【事 例】
　甲は，自分に向けてけん銃を構えた乙から，「そこで腕を縛られて座っている丙の右腕をバットで殴って骨折させろ。そうでないとお前を射殺する。」と告げられたので，やむを得ず乙の指示に従って丙の右腕を目掛けてバットを振り下ろしたところ，丙は，殴打されるのを避けるためにやむを得ず，バットを持った甲の右腕を蹴り上げた。甲は，丙に蹴られたため右腕を骨折し，丙は，甲が振り下ろしたバットが軽く接触したにとどまったため，右腕に軽い打撲傷を負ったものの，骨折は免れた。
【見 解】
Ⅰ. 刑法第３７条第１項は，違法性阻却事由を定めたものである。ただし，形式的に同条同項の要件を充たす場合でも，犯罪者に利用されるなど，行為者が不法を行う側に立っているようなときは，同条同項の適用は認められない。
Ⅱ. 刑法第３７条第１項は，違法性阻却事由を定めたものである。犯罪者に利用されるなど，行為者が不法を行う側に立っていたとしても，同条同項の要件を充たす場合には，同条同項の適用は認められる。
Ⅲ. 刑法第３７条第１項は，原則として違法性阻却事由を定めたものであるが，被侵害法益と保全法益とが同価値である場合は責任阻却事由を定めたものである。ただし，形式的に同条同項の要件を充たす場合でも，犯罪者に利用されるなど，行為者が不法を行う側に立っているようなときは，同条同項の適用を認めるべきではない。
Ⅳ. 刑法第３７条第１項は，原則として違法性阻却事由を定めたものであるが，被侵害法益と保全法益とが同価値である場合は責任阻却事由を定めたものである。犯罪者に利用されるなど，行為者が不法を行う側に立っていたとしても，同条同項の要件を充たす場合には，同条同項の適用を認めてよい。`,c1:"１．Ⅰの立場によれば，甲の行為も丙の行為も違法性が阻却される。",c2:"２．Ⅱの立場によれば，甲の行為も丙の行為も違法性が阻却される。",c3:"３．Ⅲの立場によれば，甲の行為も丙の行為も責任が阻却され得るにとどまる。",c4:"４．Ⅳの立場によれば，甲の行為も丙の行為も違法性が阻却される。",c5:"５．Ⅳの立場によれば，甲の行為も丙の行為も責任が阻却され得るにとどまる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2007",num:"3",subject:"kei",q:`教授と学生Ａ及びＢが，刑法第１１０条の建造物等以外放火罪の成立要件である「公共の危険」に関する議論をしている。次の発言 中の①から⑤までのその組合せとして正しいものは，後記１から５までのうちどれか。
教 授. 刑法第１１０条第１項に規定される建造物等以外放火罪は，条文上「公共の危険」の発生を要求していますが，Ａさんは，この「公共の危険」の内容について，どのように考えますか。
学生Ａ. 私は「公共の危険」とは，① ａ. 現住建造物等又は他人所有の非現住建造物等に対する延焼の危険・ｂ. 現住建造物等又は他人所有の非現住建造物等に限定せず，不特定又は多数の人の生命，身体又は財産に対する危険）をいうと理解しています。」 
教 授. Ａさんの考え方は，判例の立場と同じですね。
学生Ａ. はい，そうです。
学生Ｂ. 私は，判例の立場には反対しています。Ａさんの考え方だと，例えば，犯人が小さなゴミ箱１個に放火した際，たまたまその横に置き忘れられていた不特定人の小さな物品１個に延焼の危険が発生しても「公共の危険」が発生したとされかねず 不当な結果にならないでしょうか。
学生Ａ. 私の立場に立っても，各事案ごとの具体的状況の中で火災に基づく危険の拡大作用が認められるかどうかを判断することになると思います。
教 授. 次に，建造物等以外放火罪が成立するためには「公共の危険」の認識が必要かどうかについて議論しましょう。
学生Ｂ. 私は，「公共の危険」の認識は，②（ｃ. 必要・ｄ. 不要）と考えます。なぜなら，③（ｅ. 刑法第１１０条の条文の文言が「よって公共の危険を生じさせた」となっている・ｆ. 責任主義の原則から考えて結果的責任は否定されるべきである）からです。
学生Ａ. しかし，あなたの考えでは，④（ｇ. 実際上，現住建造物等放火罪又は他人の所有の非現住建造物等放火罪の未必の故意が認められてしまう・ｈ. 基本犯が不可罰である行為の結果的加重犯を認めることになる）という問題が生じませんか。
学生Ｂ. 私の立場でも，刑法第１１０条における「公共の危険」の認識内容について，延焼の危険の認識と区別することは可能だと考えます。
教 授. この点に関するあなたの考え方は，判例と同じですか。
学生Ｂ. 私は，判例に⑤（ｉ. 賛成・ｊ. 反対）する立場です。`,c1:"１．①ａ②ｄ③ｆ④ｈ⑤ｉ",c2:"２．①ａ②ｄ③ｅ④ｇ⑤ｊ",c3:"３．①ｂ②ｃ③ｅ④ｈ⑤ｊ",c4:"４．①ｂ②ｄ③ｅ④ｇ⑤ｉ",c5:"５．①ｂ②ｃ③ｆ④ｇ⑤ｊ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2007",num:"4",subject:"kei",q:"刑法上の過失に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．行為者が構成要件的結果発生の認容を欠く場合を認識のない過失といい，その認容がある場合を認識のある過失という。",c2:"２．業務上過失傷害罪について通常の過失傷害罪より重い法定刑が定められているのは，業務上の過失が通常の過失より重大な結果を引き起こすことが多いためであるから，生じた結果が軽微な場合は業務上過失傷害罪は成立せず，過失傷害罪が成立し得るにとどまる。",c3:"３．重過失とは，注意義務違反の程度が著しい場合をいい，行為者としてわずかな注意を用いることによって結果を予見でき，かつ，結果の発生を回避することができる場合の過失をいう。",c4:"４．被害者が不適切な行動に出ないことを信頼するに足る事情があり，その被害者の不適切な行動によって結果が発生した場合は，過失相殺が適用されるから，行為者の注意義務違反の程度が著しい場合であっても重過失が認められることはない。",c5:"５．構成要件的結果を惹起させた直接行為者について，これを監督すべき立場にある監督者の過失を，監督過失という。監督過失を認めるには，直接行為者に構成要件的結果発生の予見可能性があれば足り，監督者にはその予見可能性は必要とされていない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2007",num:"5",subject:"kei",q:`盗品等に関する罪についての次のアからオまでの各記述を判例の立場に従って検討した場合，誤っているものの組合せは，後記１から５までのうちどれか。
ア. 甲は，乙がＡを欺いて，乙の不動産に設定していたＡの抵当権の設定登記を抹消させたことを知りながら，乙の不動産を譲り受けた。この場合，甲には盗品等有償譲受け罪が成立する。
イ. 甲は，購入した絵画について，購入後盗品であることを知ったが，そのまま自宅の応接間に飾り続けた。この場合，甲には盗品等保管罪は成立しない。
ウ. 甲は，乙から，乙が盗んだ時計の処分に困り，盗んだ時計を誰かに無償で譲りたいとの相談を受け，時計を欲しがっていたＡを乙に紹介した。この場合，甲が乙からあっせん料をもらったとしても，甲には盗品等有償処分あっせん罪は成立しない。
エ. 甲は，丙が窃取して乙に売却したつぼを，これが盗品であることを知りながら，乙から購入した。この場合，丙の窃盗行為について公訴時効が成立していれば，甲には盗品等有償譲受け罪は成立しない。
オ. 甲は，乙がＡに賃貸していた車を，賃貸借契約期間中であるにもかかわらず，乙が合鍵で勝手に引き上げてきてしまったものであることを知りながら，これを乙から借り受けて自己の車庫に保管した。この場合，車の所有権が乙にあったとしても甲には盗品等保管罪が成立する。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2007",num:"6",subject:"kei",q:`次の【記述】の中の①から⑤までの（ ）内に，狭義の共犯（教唆犯及び幇助犯）が成立するための要件に関する後記のＡからＤまでの各見解 から適切なものを入れた場合内に入るものの組合せとして正しいものは，後記１から５までのうちどれか。なお，一つの（ ）内に二つ以上の見解が入る場合もある。
【記述】
　（①）とする見解によれば，１２歳の乙が，甲に唆されたことにより，Ｖ方から現金を盗んだという事例では 甲に窃盗罪の教唆犯が成立する可能性があるが (②)とする見解によると 甲に窃盗罪の教唆犯が成立する余地がないことになる。また，甲が，故意のない乙を唆して，ある故意犯に当たる行為を実行させた場合 故意が構成要件の要素であるとすれば (③)とする見解に立たない限り，甲には教唆犯は成立しないことになる。さらに，乙とＶが殴り合っているのを発見した甲が，かねてからＶに対する反感を持っていたことから，乙をしてＶに怪我を負わせる意図で乙に木刀を渡したところ，乙がその木刀でＶを殴って怪我を負わせたが，実は乙はＶから突然襲われてやむを得ず殴り合いになったもので 乙には正当防衛が成立するという事案の場合，（④) とする見解に立てば 甲には傷害罪の幇助犯が成立する可能性があるが (⑤)とする見解に立つと，甲には傷害罪の幇助犯は成立しないことになる。
【見 解】
Ａ. 共犯者の固有の行為としての教唆・幇助行為があれば足り，被教唆者・被幇助者が犯罪を実行したか否かは問わない。
Ｂ. 正犯が一定の行為を行ったことを要するが，その内容としては，正犯の行為が構成要件に該当すれば足りる。
Ｃ. 正犯が一定の行為を行ったことを要するが，その内容としては，正犯の行為が構成要件に該当し，かつ，違法であることを要する。
Ｄ. 正犯が一定の行為を行ったことを要するが，その内容としては，正犯の行為が構成要件，違法性及び責任を備えていなければならない。`,c1:"１．①Ａ，Ｂ，Ｃ ②Ｄ ③Ａ ④Ａ，Ｂ ⑤Ｃ，Ｄ",c2:"２．①Ｂ，Ｃ，Ｄ ②Ａ ③Ｄ ④B, C, D ⑤A",c3:"３．①Ａ，Ｂ ②C, D ③A ④B, C, D ⑤A",c4:"４．①Ａ，Ｂ，Ｃ ②Ｄ ③A ④C, D ⑤A, B",c5:"５．①Ａ，Ｂ ②Ｃ，Ｄ ③Ｄ ④A, B ⑤C, D",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2007",num:"7",subject:"kei",q:`次のアからオまでの各記述について 判例の立場に従って，その組合せとして正しいものは，後記１から５までのうちどれか。
ア. 甲は，Ａが被疑者として捜査の対象となっている殺人未遂事件に関し，Ａの部下でＡと被害者との関係について知っているＢがいずれは参考人として警察の取調べを受けることを予期しつつ，Ｂを隠匿した。この場合 （ａ. 犯人隠避罪が成立する・ｂ. 証拠隠滅罪が成立する 。）
イ. 甲は，汚職の罪で逃走中の友人Ｃから頼まれて，Ｃに対し，Ｃの留守宅の様子や家族の安否のほか 警察の捜査状況を教えた。この場合 (ｃ. 犯人隠避罪が成立する・ｄ. 不可罰である)。
ウ. 暴力団幹部である甲は 自己の犯した業務上過失致死事件について 配下の組員Ｄに命じて，Ｄを自己の身代わり犯人として警察に出頭させた この場合 (ｅ. 不可罰である・ｆ. 犯人隠避教唆罪が成立する 。）
エ. 甲は，自己が被告人となっている公職選挙法違反事件の証人となったＥに対し宣誓の上で虚偽の陳述をするように依頼し 依頼どおりに虚偽の陳述をさせた。この場合 (ｇ. 不可罰である・ｈ. 偽証教唆罪が成立する)。
オ. 甲は，自己が被告人となっている横領事件で有利な判決を得る目的から，事件と無関係のＦに対し，被害を弁償していないのに，弁償金を受領した旨の被害者名義の領収証を作るように依頼し これを作成させた この場合(ｉ. 証拠偽造教唆罪が成立する・ｊ. 犯人隠避教唆罪が成立する )。`,c1:"１．アａ イｃ ウｆ エｈ オｉ",c2:"２．アａ イｄ ウｆ エｇ オｉ",c3:"３．アｂ イｃ ウｅ エｈ オｊ",c4:"４．アｂ イｃ ウｆ エｈ オｉ",c5:"５．アｂ イｄ ウｅ エｇ オｊ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2007",num:"8",subject:"kei",q:"刑罰に関する次の１から５までの各記述のうち 誤っているものはどれか。",c1:"１．殺人と傷害の併合罪を犯した者について，殺人につき有期懲役刑，傷害につき懲役刑をそれぞれ選択した場合，処断刑は，５年以上３０年以下の懲役となる。",c2:"２．窃盗の正犯を幇助した者について，懲役刑を選択した場合，処断刑は，１月以上５年以下の懲役となる。",c3:"３．強盗致傷を犯した者について，有期懲役刑を選択して酌量減軽した場合，処断刑は，３年以上１０年以下の懲役となる。",c4:"４．前に禁錮以上の刑に処せられたことがあってもその執行を猶予された者が，１年以下の懲役又は禁錮の言渡しを受け，情状に特に酌量すべきものがあるときは，その執行を猶予することができる場合がある。",c5:"５．刑の執行猶予の期間内に更に罪を犯して禁錮以上の刑に処せられ，その刑について執行猶予の言渡しがないときは，猶予の言渡しを取り消さなければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2007",num:"9",subject:"kei",q:"［汚職の罪］に関する次の１から５までの各記述を判例の立場に従って検討した場合，誤っているものはどれか。",c1:"１．公務員が賄賂を受け取って，他の公務員の職務について働き掛けを行った場合，違法な行為の働き掛けがあったときにのみあっせん収賄罪が成立し，他の公務員の裁量判断に不当な影響を及ぼす程度では同罪は成立しない。",c2:"２．収賄罪において賄賂と対価関係に立つ行為は，法令上公務員の一般的職務権限に属する行為であれば足り，公務員が具体的事情の下においてその行為を適法に行うことができたかどうかは，問うところではない。",c3:"３．公務員が自己に代わって債務を弁済してもらったことが賄賂になる場合のように，賄賂として収受した無形の利益についてはおよそ没収の対象とはならないが 金銭に換算可能であれば，その価額は追徴しなければならない。，",c4:"４．公務員が賄賂として関係業者から借金をした場合，借金という形をとっても実は金銭の贈与を受ける趣旨であれば，当該金銭は没収の対象となるが，本当に借金したにすぎない場合には刑法第１９７条の５の規定によっては，受領した金銭を没収することはできない。",c5:"５．公務員が職務上知り得た秘密を漏らすことに関し，請託を受けて賄賂を収受したものの，実際には秘密を漏らさなかった場合には，受託収賄罪が成立するが，秘密を漏らした場合には，加重収賄罪が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2007",num:"10",subject:"kei",q:`次の【事例】における甲の自首の成否に関し，後記アからオまでの各記述を判例の立場に従って№検討し 正しい場合には１を 誤っている場合には２を選びなさい。
【事 例】
甲は 空腹を感じたが所持金がなかったことから 飲食店Ａにおいて無銭飲食をした。そして，同店店主乙から飲食代金の支払を請求されるや，乙に対し 「金はない 」と言いながら所携のナイフを乙に突き付けて脅迫し，乙がひるんだすきにその場から逃走した。しかし，この先も生活費が手に入る見込みがなかった甲は，いっそのこと刑務所で服役して飢えをしのごうと考え直し，付近の警察署に出頭するため，上記ナイフを手に持ったまま同署の前まで歩いていった。捜査機関は，この時点でいまだ甲による上記無銭飲食の事実を認識していなかったが，同署の警察官Ｘは，ナイフを手に持った甲の姿を見て不審者と認め，甲に対する職務質問を開始した。甲は，その職務質問に対し，警察官Ｘに無銭飲食の事実を告げ，ナイフも提出した。
ア. 自首が成立するためには，犯人が反省悔悟に出たものであることを要するから，甲のようないわゆる刑務所志願を目的とする場合には，自首は成立しない。
イ. 自首は自ら進んで自発的に行う必要があるから，甲のように警察官から職務質問を受け，その質問に答えて犯罪事実を申告した場合には，およそ自首は成立しない。
ウ. 仮に，乙の通報により捜査機関に犯罪事実が発覚し，犯人のおよその年齢・人相・服装・体格が判明していた場合には 犯人が甲であることが発覚していなくても 自首は成立しない。
エ. 仮に，捜査機関に犯罪事実及び甲が犯人であることが発覚しており，甲の所在だけが不明であった場合には，自首は成立しない。
オ. 甲が，ナイフを突き付けたのは無銭飲食をした後逃走するためであり，そのような行為が強盗という罪に当たるとは思わなかったと申告している場合には，自首は成立しない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"22212"},{year:"2007",num:"11",subject:"kei",q:"［業務妨害罪］に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．業務妨害罪における業務は，職業その他社会生活上の地位に基づいて継続して行う事務又は事業であり，経済的に収入を得る目的のものであることを要しないから，運転免許を取得した者が娯楽のために行う自動車の運転も本罪の業務に含まれる。",c2:"２．威力業務妨害罪が成立するには，現実に執行中の業務の執行を妨害した結果が発生したことを要し，被害者に業務を中止させあるいは不能にさせたことが必要である。",c3:"３．弁当屋に電話をかけ，弁当を受け取る意思もなく，代金を支払う意思もないのに，偽名を名のって弁当１００個を注文し，これを架空の住所まで配達することを依頼して，同弁当屋の店員に弁当１００個を作らせ，配達に赴かせた場合，偽計業務妨害罪が成立する。",c4:"４．県議会の審議中，傍聴席において，大声を上げながら椅子を叩くなどして審議を中断させた場合，妨害の対象となったのは公務であるから，威力業務妨害罪ではなく公務執行妨害罪が成立する。",c5:"５．自己の勤務する会社の上司に恨みを持ち，同人の事務机の引き出し内に犬の死がいを入れておいて同人にこれを発見させ，畏怖させた行為は，これにより同人の当日の各種決裁事務等の執行が不可能になったとしても「威力を用いた」とはいえないから 威力業務妨害罪には当たらない",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2007",num:"12",subject:"kei",q:"因果関係に関する次の１から５までの各記述を判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．不作為犯における不作為と結果との間に刑法上の因果関係を認めるためには，不作為の後に結果の発生が認められることで足り，期待される作為をなしていたとすれば結果を避け得たことが合理的な疑いを超える程度に確実であったことまでは必要とされない。",c2:"２．甲がＶを殴打したところ，Ｖには重篤な心臓疾患があったため，その疾患と相まってＶが死亡した場合，Ｖ自身が同疾患の存在を認識していない限り，甲の殴打とＶの死亡の結果との間に因果関係を肯定することはできない。",c3:"３．甲がＶの腹部をナイフで突き刺して内臓損傷の重傷を負わせたところ，Ｖは救急病院に搬送されて緊急手術を受け，術後，いったん容体は安定した。ところが，意識を回復したＶが，医師の指示に従わずに暴れたため，治療の効果が失われ，上記内臓損傷により死亡した。この場合，治療の効果が失われたのはＶの落ち度によるのであるから，Ｖの内臓損傷がそれ自体死亡の結果をもたらし得るものであっても，甲の刺突行為とＶの死亡の結果との間の因果関係を肯定することはできない。",c4:"４．甲及び乙が木刀と野球のバットでＶを執拗に殴打し，辛うじて逃走したＶを更に殴打すべく追跡したところ，Ｖは，追跡を逃れようとビルの屋上に逃げ，更に約１メートル離れた隣のビルの屋上に飛び移ろうとして地上に落下して死亡した場合には，Ｖは自ら危険な行動を行っている以上，甲及び乙による殴打，追跡とＶの死亡の結果との間に因果関係を肯定することはできない。",c5:"５．甲が自動車を運転中，自転車に乗ったＶを跳ね飛ばして自動車の屋根に跳ね上げ意識を喪失させたが，Ｖに気付かないまま自動車の運転を続けるうち，自動車の同乗者がＶに気付き，走行中の自動車の屋根からＶを引きずり降ろして路上に転倒させた。その結果，Ｖは頭部に傷害を負って死亡したが，Ｖの死因である傷害が自動車との衝突の際に生じたものか，路上へ転落した際に生じたものかは不明であった。この場合，同乗者の行為は経験上普通に予想できるところではないから，甲の行為とＶの死亡の結果との間に因果関係を肯定することはできない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2007",num:"13",subject:"kei",q:`学生ＡないしＥは，次の【事例】における乙に対する横領罪の成否について，後記【発言】のとおりの意見を述べた。乙に対する横領罪の成立を肯定する意見を述べた学生を選んだ場合，その組合せとして正しいものは，後記１から５までのうちどれか 。
【事例】
乙は，甲から，公務員丙に対し甲所有の宝石を賄賂として贈ることを依頼されてその宝石の交付を受けたが，その後，この宝石を売却してその代金を自己の用途に費消しようと考え，この宝石を売却した。
【発 言】
学生Ａ. 民法第７０８条にいう「給付」とは，終局的利益を与えるもの，すなわち所有権付与を意味し，甲が贈賄の目的に基づいて乙に宝石を寄託することは不法原因給付には当たらない。
学生Ｂ. 民法と刑法とでは目的が異なる。この事例では，委託者甲の側に保護に値する利益があるかどうかという視点から考えるべきであり，窃盗犯人の占有する盗品の窃取を処罰すべきであることとの均衡も考慮すべきである。
学生Ｃ. 甲から乙への宝石の交付は民法第７０８条の不法原因給付に当たるから，不法原因給付物である宝石の所有権は，甲が乙に対し宝石の返還を請求できないことの反射的効果として乙に帰属するに至った。
学生Ｄ. 横領罪の目的物は単に犯人の占有する他人の物であることを要件としているにすぎず，必ずしも物の給付者において民法上その返還を請求することができることを要件としていない。
学生Ｅ. 私の考えと反対の考え方を採ると，民法上宝石の返還義務のない者に宝石の返還を強制することとなり，全体としての法秩序の統一性を破ることになる。
（参照条文）民法
第７０８条 不法な原因のために給付をした者は，その給付したものの返還を請求することができない。ただし，不法な原因が受益者についてのみ存したときは，この限りでない。`,c1:"１．Ａ，Ｄ",c2:"２．Ｂ，Ｃ，Ｅ",c3:"３．Ａ，Ｂ，Ｃ",c4:"４．Ａ，Ｂ，Ｄ",c5:"５．Ｃ，Ｄ，Ｅ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2007",num:"14",subject:"kei",q:`次のアからエまでの各事例の甲の罪責について，判例の立場に従って検討し，それぞれａないし。ｃから正しいものを選んだ場合 その組合せとして正しいものは 後記１から５までのうちどれか。
ア. 甲は，乙の経営する商店において偽造の１万円札を使用しようと考え，同店において，情を知らない乙に対し，価格１万円の商品の購入を申し込み，代金として偽造の１万円札を渡して同商品を得た。
ａ. 詐欺罪と偽造通貨行使罪が成立し，両罪は観念的競合となる。
ｂ. 詐欺罪が成立し，偽造通貨行使罪は詐欺罪に吸収される。
ｃ. 偽造通貨行使罪が成立し，詐欺罪は偽造通貨行使罪に吸収される。
イ. 甲は，自動車を運転中，前方不注視の過失により，同車を歩行者乙に衝突させ，乙に傷害を負わせたが，路上に転倒している乙を見て，自己の犯行の発覚を防ぐため乙を殺害しようと考え，同人を同車両で轢過し，死亡させた。
ａ. 業務上過失傷害罪と殺人罪が成立し，両罪は併合罪となる。
ｂ. 業務上過失傷害罪と殺人罪との包括一罪となる。
ｃ. 業務上過失致死罪が成立する。
ウ. 甲は，制服の警察官乙から職務質問を受けたが，質問されたことを不愉快に感じ，乙の顔面を手拳で殴打して傷害を負わせた。
ａ. 公務執行妨害罪と傷害罪が成立し，両罪は牽連犯になる。
ｂ. 公務執行妨害罪と傷害罪が成立し，両罪は観念的競合になる。
ｃ. 公務執行妨害罪と傷害罪が成立し，両罪は併合罪になる。
エ. 甲は，殺意をもって，女性乙の頸部をひもで絞めながら強姦し，同女を死亡させた。
ａ. 強姦致死罪と殺人罪が成立し，両罪は観念的競合となる。
ｂ. 強姦致死罪のみが成立する。
ｃ. 強姦罪と殺人罪が成立し，両罪は観念的競合となる。`,c1:"１．アａ イｂ ウｃ エａ",c2:"２．アｂ イｂ ウａ エｃ",c3:"３．アｂ イｃ ウａ エｂ",c4:"４．アｃ イａ ウｂ エａ",c5:"５．アｃ イａ ウｂ エｃ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2007",num:"15",subject:"kei",q:`次の【事例】の甲の罪責について正しいものは 後記１から５までのうちどれか。
【事 例】
甲は，夜間，普通乗用自動車を運転し，人通りが少ない一方通行の狭い道路を進行中，右前方を歩いている女性乙がショルダーバッグを左肩に掛けているのを認め，同バッグを奪い取ろうと考え，同車で乙を追い抜きざま，運転席窓から右手を出して同バッグをつかんで引っ張った。乙は，同バッグを引っ張られた勢いで路上に転倒したものの，同バッグを奪われまいとして，そのさげひもから手を離さなかったので，甲は，乙から同バッグを奪い取るため，乙の身体を同バッグごと引きずることを認識しながらそのまま加速して運転を続けた。甲は，約２０メートルにわたって乙の身体を引きずったが，乙は，同バッグから手を離さなければ，同車の車輪に巻き込まれたり，道路脇の壁に衝突するなどして重傷を負いかねないという危険を感じ，やむなくそのさげひもから手を離し，甲は，同バッグをつかんだまま同車で逃走した。乙は，前記のとおり路上を引きずられたことにより，約２週間の加療を要する右足関節捻挫等の傷害を負った。`,c1:"１．事後強盗（刑法第２３８条）が人を負傷させたものとして，強盗致傷罪が成立する。",c2:"２．強盗致傷罪は成立せず，窃盗罪と傷害罪が成立する。",c3:"３．強盗（刑法第２３６条第１項）が人を負傷させたものとして，強盗致傷罪が成立する。",c4:"４．強盗罪のみが成立する。",c5:"５．窃盗罪と業務上過失傷害罪が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2007",num:"16",subject:"kei",q:`次のアからオまでの各記述について，判例の立場に従って検討し，甲に（ ）内の罪が成立するものは○，成立しないものは×とした場合，各記述と○・×の組合せとして正しいものは，後記１から５までのうちどれか 。
ア. 甲は，乙にわいせつな行為をすることについての乙の承諾がないのに，これがあると誤信して 乙が１０歳であることを知りながら 乙に対してわいせつな行為を行った 。(１３歳未満の者に対する強制わいせつ罪）。
イ. 甲は，乙を殺害することについての乙の承諾がないのに，これがあると誤信して，乙の首をひもで絞めて殺害した （同意殺人罪）。
ウ. 甲は，乙の居宅に入ることについての乙の承諾がないのに，これがあると誤信して，乙が単身居住する乙の居宅に入った （住居侵入罪）。
エ. 甲は，乙に傷害を負わせることについての乙の承諾がないのに，これがあると誤信して，過失による事故を装って保険金を詐取するため，甲の運転する自動車を乙に衝突させ，乙に傷害を負わせた （傷害罪）。
オ. 甲は 交通違反の取締りを受けた際に乙の氏名を名乗ることについての乙の承諾がないのに，これがあると誤信して，交通違反を警察官に現認された際，乙の氏名を名乗り，交通反則切符の供述書に乙の名義で署名押印した （有印私文書偽造罪）。`,c1:"１．ア○ イ× ウ× エ× オ×",c2:"２．ア× イ○ ウ× エ× オ○",c3:"３．ア○ イ○ ウ× エ○ オ○",c4:"４．ア○ イ○ ウ× エ× オ○",c5:"５．ア× イ× ウ○ エ○ オ×",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2007",num:"17",subject:"kei",q:`次の【事例】のアからオまでの行為について，判例の立場に従って，後記の【結論】のⅠないしⅢに分類した場合【事例】と【結論】の組合せとして正しいものは 後記１から５までのうちどれか。
ア. 市議会議員選挙に際し，特定の候補者を当選させるため，後日その候補者の氏名を記載して投票の中に混入し同候補者の得票数を増加させる目的をもって，投票所管理者の保管する市議会議員選挙の投票用紙を持ち出した行為
イ. 自己が振り出した小切手を呈示されてその支払を請求された際，その支払を拒むため，相手方からその小切手を取り上げ，着衣のポケットに突っ込んでそのまま返還しなかった行為
ウ. 支払督促の債権者が，支払督促正本の送達に際し，支払督促の債務者を装い郵便配達員を欺いて支払督促正本を受領することにより，送達が適式にされたものとして支払督促の効力を生じさせ，債務者から督促異議申立の機会を奪ったまま確定させて，その財産を不正に差し押さえようとし，支払督促正本はそのまま廃棄するつもりで，郵便配達員からその交付を受け，その後同支払督促正本を廃棄した行為
エ. 銀行強盗の犯人が，犯行後逃走しようとし，銀行前の駐車場に止めてあった他人所有の自動車に乗り込み，適当な場所まで逃走した後は乗り捨てるか，あるいは崖下等に転落させる意思で，同自動車を運転してその場から走り去った行為
オ. 自己が勤務する会社のパソコンのハードディスクに記録されていたデータを自分の趣味に利用しようとし，会社内で，自己の所有するフロッピーディスクに同データをコピーした行為
【結 論】
Ⅰ. 毀棄隠匿罪に当たる。
Ⅱ. 領得罪に当たる。
Ⅲ. 毀棄隠匿罪にも領得罪にも当たらない。`,c1:"１．アⅡ イⅠ ウⅠ エⅡ オⅢ",c2:"２．アⅢ イⅠ ウⅠ エⅡ オⅢ",c3:"３．アⅡ イⅡ ウⅠ エⅡ オⅡ",c4:"４．アⅠ イⅢ ウⅡ エⅢ オⅡ",c5:"５．アⅠ イⅡ ウⅢ エⅢ オⅢ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2007",num:"18",subject:"kei",q:`次の 事例 に関する後記１から５までの各記述のうち 誤っているものはどれか。
【事 例】
自動車を運転していた際に交通事故を起こした甲について，精神鑑定の結果，事故当時，統合失調症に罹患し 心神耗弱の状態にあったとの鑑定意見が出されたが 裁判所は「被告人が 統合失調症に罹患し，交通事故当時病的体験の出没があったとしても，その職業，社会生活における通常の適応が維持し得，病勢がいまだ被告人の人格，行動を圧倒し，対社会的適応を逸脱しないだけの統覚能力を保持し得る人格状態にあり，しかも，上記事故が被告人のハンドル操作の不適切を過失内容とし，事故自体がその病的体験と直接的あるいは不可避的因果関係があるとは認め難いなどの事情の下においては，被告人は心神喪失ないし心神耗弱の状態にはなく，当該事故に関する業務上過失致死傷罪についての責任能力がある」旨の判断を示した。`,c1:"１．この裁判所の判断は，この事例における責任能力の判断に当たり，精神の障害という生物学的要素と，弁識能力・制御能力という心理学的要素の両方をともに基準とする混合的方法によることを前提としている。，",c2:"２．この事例における責任能力の判断方法に対しては，犯行と精神の障害との因果関係が明らかである場合に限って責任能力を否定することになり，心神喪失ないし心神耗弱を認める場合が不当に制限されるおそれがあるとの批判が可能である。",c3:"３．この裁判所の判断は，同じ精神の障害の状態にありながら，ある行為については完全な責任能力を認め，他の行為については完全な責任能力を認めないという部分的責任能力を肯定する見解を前提とするものとの評価が可能である。",c4:"４．甲の精神鑑定を行った鑑定人（精神科医）は，甲は統合失調症に罹患し，本件事故当時心神耗弱の状態にあったとの鑑定意見を述べているが 精神科医の鑑定意見と異なるからといって，この裁判所の判断が誤りであるとはいえない。，",c5:"５．責任能力については，個々の行為から離れて一般的に判断できる行為者の属性であるとする見解と，個々の行為ごとに個別的に判断できる行為の属性であるとする見解とがあるが，この裁判所の判断は，前者の見解に基づくものと考えられる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2007",num:"19",subject:"kei",q:`次のアからオまでの各記述について，甲に（ ）内の犯罪が成立する場合には１を，成立しない場合には２を選びなさい。
ア. 甲は，自ら不正に作成した偽造有印公文書である自動車運転免許証を携帯して自動車を運転中，制限速度違反を警察官Ｘに現認され，自動車運転免許証の提示を求められたので，どのみち免許証の偽造が発覚するであろうとあきらめ，偽造したものである旨申告して前記偽造に係る自動車運転免許証をＸに提示した （偽造有印公文書行使未遂罪）。
イ. 甲は，Ａとのタレント契約交渉に際し，甲経営の会社の資産や経営状況を疑っていたＡを安心させてその信用を確保するため，別のタレント用の支度金だと言って，自ら不正に作成した偽造小切手を真正なものとしてＡに見せた （偽造有価証券行使罪）。
ウ. 甲は，遊び仲間のＢにクレジットカードの借用を申し込まれたところ，見栄を張りたい気持ちから断れないままにこれを承諾したが，実際にはカードは所有しておらず，そのため，自ら不正に作成した自己名義の偽造クレジットカードを真正なクレジットカードとしてＢに貸し渡した （不正電磁的記録カード貸渡し罪）。
エ. 甲は，事務所として使用しているマンションの家主に対し，滞納している家賃を確実に返済できることを証明してその信用を得るための手立てとして，甲がＣ社に対して多額の債権を有していることを示すべく，自ら不正に作成した偽造有印私文書であり，貸主甲，借主Ｃ社とする両者名義の金銭消費貸借契約書を，真正な文書として司法書士Ｄに示し，同契約書に基づく公正証書の作成の代理嘱託を同人に依頼した （偽造有印私文書行使罪）。
オ. 甲は，約束手形を偽造してこれを割引に出して利益を得ようと考え，自ら不正に作成したＥ社の振出しに係る約束手形１通を割引依頼のためにＦに呈示したが，Ｆは，既に上記約束手形が偽造であることを甲の友人Ｇから聞いて知っていたため 割引依頼を断った(偽造有価証券行使罪）。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"21112"},{year:"2007",num:"20",subject:"kei",q:`次の【見解】ⅠないしⅢに従って，後記の【記述】アないしウについて正誤を検討した場合，後記１から５までのうち，正しいものはどれか。
【見解】
Ⅰ. 行為者が正当防衛に当たる事実があると誤信した場合には故意が否定され，過失犯が成立し得るにとどまる。違法性の意識の有無は故意の成立とは無関係であるが，違法性の意識の可能性がなければ，責任を肯定することはできない。
Ⅱ. 行為者が正当防衛に当たる事実があると誤信した場合には故意が否定され，過失犯が成立し得るにとどまる。違法性の意識は故意の要件であり，違法性の意識が認められない場合には故意が否定される。
Ⅲ. 行為者が正当防衛に当たる事実があると誤信した場合であっても，故意は否定されないが，誤信についてやむを得ない事情があった場合には責任が否定される。違法性の意識の有無は故意の成立とは無関係であるが，違法性の意識の可能性がなければ，責任を肯定することはできない。
【記 述】
ア. 行為者は 実際には正当防衛に該当する事実が存在しないのに これが存在すると誤信した。この誤信にやむを得ない理由があった場合，行為者に犯罪は成立しない。
イ. 行為者は 実際には正当防衛に該当する事実が存在しないのに これが存在すると誤信した。この誤信が不注意によるものであった場合 行為者に故意犯は成立せず 過失犯が成立し得る。
ウ. 行為者は，事実に関する誤信はなかったものの，正当防衛の成立要件について誤解していたため，正当防衛が成立しないのに，成立すると誤信した。この誤信にやむを得ない理由があったとはいえない場合，行為者に故意犯は成立しない。`,c1:"１．【見解】Ⅰに従うと 【記述】アは誤りである。 ",c2:"２．【見解】Ⅰに従うと 【記述】ウは正しい。 ",c3:"３．【見解】Ⅱに従うと 【記述】イは誤りである。 ",c4:"４．【見解】Ⅱに従うと 【記述】ウは正しい。 ",c5:"５．【見解】Ⅲに従うと 【記述】アは誤りである。 ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2007",num:"21",subject:"kso",q:`後記 文章 は 捜査の端緒について述べたものである これを読んで 次の 【小問１】及び 【小問２】に答えなさい。
【小問１】
【文章】中の①から⑤までの（ ）内内に入る適切な語句を後記【語句群】から一つずつ選び出し，①から⑤の順に並べた場合，正しいものは，後記【小問１の選択肢群】の１から６までのうちどれか。なお，同じ数字の（ ）内には同じ語句が入るものとする 。
【小問２】
【文章】中の（ア）から（オ）までの下線部分の各記述のうち，正しいものの組合せは，後記【小問２の選択肢群】の１から５までのうちどれか。
 【文 章】
　刑事訴訟法第１８９条第２項は 「司法警察職員は （①）があると思料するときは，犯人及び証拠を捜査するものとする と定めている この (①) があると思料するに至った原因を捜査の端緒という。刑事訴訟法は，捜査の端緒として，現行犯逮捕 （②) ，告訴，告発，請求及び自首を挙げているが，捜査の端緒をこれらに制限しているわけではなく，被害者又は第三者の申告，警察官職務執行法第２条第１項の定める(③)のほか 新聞 雑誌 投書など いやしくも (① ）に関係ありと認められる事由がある限り(ア) 広く社会の諸事象から捜査の端緒を得ることが許される。
　そのうちの（②）とは，人の死亡が（①）に起因するかどうかを判断するため，五官の作用により死体の状況を見分する処分をいい 捜査前の処分であって 捜査そのものではない 。(イ) これを行うに当たっては，令状なくして住居内の捜索・検証にわたる処分は行えないものの，死因の確認のためには 注射器を用いて体内から血液を採取したり 腹部等を切開することもできる。また 刑事訴訟法第２２９条第１項において 変死者又は変死の疑のある死体があるときは そ，の所在地を管轄する地方検察庁又は区検察庁の検察官は （②）をしなければならない 」とされ。ているが，検察官は，いわゆる代行（②）として（④）に（②）させることもできる。
　次に，告訴とは （①）の被害者その他一定の者が，捜査機関に対して （①）事実を申告し，その訴追を求める意思表示である。告訴の方式については，告訴の受理権者である（⑤）にしなければならず (ウ) 一定の親告罪で定められている告訴期間との関係で その告訴がなされた日付を特定する必要があるため，口頭による告訴は認められておらず，書面でしなければならないとされている。 また( エ) 告訴は 被害者の訴追を求める意思表示を確認する必要があるため，被害者本人が告訴しなければならず，被害者の代理人により告訴をすることはできない。なお，（オ）被害者が死亡するなどして親告罪について告訴をすることができる者がない場合には，検察官は，利害関係人の申立てにより告訴をすることができる者を指定することができる。
【語句群】
ａ. 職務質問
ｂ. 事件
ｃ. 医師
ｄ. 任意同行
ｅ. 司法巡査
ｆ. 検視
ｇ. 検察事務官又は司法警察員
ｈ. 解剖
ｉ. 検察官又は司法警察員
ｊ. 犯罪
【小問１の選択肢群】
１．ｊｆａｇｉ
２．ｂｆａｇｅ
３．ｂｈｄｃｅ
４．ｊｈｄｃｉ
５．ｊｆａｃｉ
６．ｂｈｄｇｅ
【小問２の選択肢群】 
１．ア ウ 
２．ア オ 
３．イ エ 
４．ウ エ 
５．イ オ`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"12"},{year:"2007",num:"22",subject:"kso",q:"勾留に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．刑事訴訟法第６０条第１項第２号に定める「罪証を隠滅すると疑うに足りる相当な理由があるとき」の「罪証」とは，犯罪の成否に関する証拠を意味するので，犯罪の成立自体については，既に証拠が収集されていて証拠隠滅の余地がなく，犯罪の動機に関する証拠にのみ隠滅のおそれがある場合には，同号の要件を満たすことはない。",c2:"２．被疑者の勾留の期間は，勾留の請求をした日から１０日間であるが，裁判官は，やむを得ない事由があると認めるときは，検察官の請求により，１回に限り，その期間を延長することができる。",c3:"３．検察官は 逮捕勾留されていない被疑者について公訴を提起する際 勾留請求権に基づいて裁判官にその勾留を請求することができる。",c4:"４．第一審裁判所が犯罪の証明がないことを理由として無罪の判決を言い渡した場合であっても，控訴裁判所は，記録等の調査により，前記無罪判決の理由の検討を経た上でもなお罪を犯したことを疑うに足りる相当な理由があると認めるときは，勾留の理由があり，かつ，控訴審における適正 迅速な審理のためにも勾留の必要性があると認める限り その審理の段階を問わず被告人を勾留することができる。",c5:"５．少年の刑事事件については，その健全な育成を期するという見地から，定まった住居を有する少年の被疑者を勾留することはできない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2007",num:"23",subject:"kso",q:`次の１から５までの【見解】は，令状によらない差押え等を規定した刑事訴訟法第２２０条第１項の「逮捕する場合」の解釈に関するものである。後記【発言】は，学生ＡないしＥが，１から５までのいずれかの【見解】を採って，ほかの学生の【見解】について発言したものである。学生ＡないしＥの【見解】は，それぞれ１から５までのうちどれか。なお，同じ【見解】を採っている学生は存しない。 
【見 解】
１. 現実に逮捕したことを要する。
２. 逮捕に着手したことを要するが，逮捕に成功したかどうかは問わない。
３. 被疑者が現場に存在し，直ちに逮捕に着手し得る状態にあることを要する。
４. 被疑者が現場に存在しなくとも，時間的に接着して逮捕されれば足りる。
５. 被疑者が現場に存在しなくとも，逮捕が見込まれる状態にあれば足り，結果的に逮捕に着手されたかどうかは問わない。
【発 言】
学生Ａ. Ｃ君の見解は，判例の立場と同じだけれど，それでは，事後的な逮捕の成否により捜索差押えの適法性が左右されることになり，不合理だ。
学生Ｂ. Ｄ君の見解は，私の見解と同様に基準が明確になり，濫用防止に優れている点は理解できるが 刑事訴訟法が「逮捕した場合」ではなく「逮捕する場合」と規定している文理から離れているという問題がある。
学生Ｃ. Ｅ君の見解は，被疑者がいないまま，結局，最後まで逮捕に着手しなかった場合であっても「逮捕する場合」に当たるということになるので 文理から離れすぎていて妥当でない。
学生Ｄ. Ａ君の見解は，逮捕の着手すらない時点から無令状の捜索差押えができることになり，不当だ。
学生Ｅ. Ｂ君の見解は，逮捕の着手に先立って，被疑者らによる証拠の破壊等を防止する必要が生じることもあるという捜査の実情に対する配慮が欠けていて，硬直的な見解である。`,c1:"１．現実に逮捕したことを要する。",c2:"２．逮捕に着手したことを要するが，逮捕に成功したかどうかは問わない。",c3:"３．被疑者が現場に存在し，直ちに逮捕に着手し得る状態にあることを要する。",c4:"４．被疑者が現場に存在しなくとも，時間的に接着して逮捕されれば足りる。",c5:"５．被疑者が現場に存在しなくとも，逮捕が見込まれる状態にあれば足り，結果的に逮捕に着手されたかどうかは問わない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"32415"},{year:"2007",num:"24",subject:"kso",q:`次のⅠからⅢまでの【見解】は，実体法上一罪の関係にある数個の可罰的行為の逮捕勾留に関する考え方を述べたものである。これらの【見解】のいずれかを前提に，後記【事例】における逮捕勾留の適法性について述べた後記アからカまでの【記述】のうち，正しいものの組合せは，後記１から５までのうちどれか なお「常習特殊窃盗」とは 盗犯等の防止及び処分に関する法律第２条違反の罪をいう。
Ⅰ. 一罪の範囲では，１回の逮捕勾留しか許されない。
Ⅱ. 勾留の裁判の時点において同時に裁判することが可能であった一罪の範囲では，１回の逮捕勾留しか許されない。
Ⅲ. 現実に実行された個々の可罰的行為ごとに１回の逮捕勾留が許される。
【事 例】
甲は，平成○○年３月１５日（①事件）と４月１日（②事件）に，それぞれ財物を窃取したところ，②事件について，４月１０日に逮捕され，４月１２日に勾留された後，５月１日，常習特殊窃盗の罪で起訴された 甲は 同事件の公判中に保釈されたが 保釈中の５月２０日（③事件）に財物を窃取した。①事件及び③事件は，５月１日に起訴された②事件と実体法上一罪の関係にある。捜査機関は，６月１日，①事件及び③事件について甲の逮捕勾留を検討している。
【記 述】
ア. Ⅰの考え方に立ったとき，①事件について逮捕勾留することは，許されることがある。
イ. Ⅰの考え方に立ったとき，③事件について逮捕勾留することは，常に許される。
ウ. Ⅱの考え方に立ったとき，①事件について逮捕勾留することは，常に許される。
エ. Ⅱの考え方に立ったとき，③事件について逮捕勾留することは，常に許される。
オ. Ⅲの考え方に立ったとき，①事件について逮捕勾留することは，常に許される。
カ. Ⅲの考え方に立ったとき，③事件について逮捕勾留することは，許されないことがある。
（参照条文）盗犯等の防止及び処分に関する法律
第二条 常習トシテ左ノ各号ノ方法ニ依リ刑法第二百三十五条，第二百三十六条，第二百三十八条若ハ第二百三十九条ノ罪又ハ其ノ未遂罪ヲ犯シタル者ニ対シ窃盗ヲ以テ論ズベキトキハ三年以上，強盗ヲ以テ論ズベキトキハ七年以上ノ有期懲役ニ処ス
一 兇器ヲ携帯シテ犯シタルトキ
二 二人以上現場ニ於テ共同シテ犯シタルトキ
三 門戸牆壁等ヲ踰越損壊シ又ハ鎖鑰ヲ開キ人ノ住居又ハ人ノ看守スル邸宅，建造物若ハ艦船ニ侵入シテ犯シタルトキ
四 夜間人ノ住居又ハ人ノ看守スル邸宅，建造物若ハ艦船ニ侵入シテ犯シタルトキ
`,c1:"１．ア イ",c2:"２．イ ウ",c3:"３．ウ エ",c4:"４．エ オ",c5:"５．エ カ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2007",num:"25",subject:"kso",q:`刑事訴訟法第３９条第３項は 「検察官 検察事務官又は司法警察職員 中略 は 捜査のため必要があるときは，公訴の提起前に限り，第１項の接見又は授受に関し，その日時，場所及び時間を指定することができる。但し，その指定は，被疑者が防禦の準備をする権利を不当に制限するようなものであつてはならない」と規定する この規定に関する次のアからオまでの各記述について，判例に照らして正しいものの組合せは，後記１から８までのうちどれか 。
ア. 勾留中の被疑者の弁護人から接見の申出を受けた司法警察職員が，接見のための日時等の指定につき権限のある捜査機関である検察官に連絡し，それに対する具体的措置について指示を受ける等の手続を採る間，弁護人を待機させることは，合理的な範囲内にとどまる限り許される。
イ. 捜査機関が弁護人から接見の申出を受けた時点において，現に被疑者の身柄を用いていない場合は，間近い時に被疑者を立ち会わせて実況見分を行う確実な予定があり，弁護人の申出に沿った接見を認めたのでは実況見分を予定どおりに開始できなくなるおそれがあっても，同条第３項にいう「捜査のため必要があるとき」に当たることはない。
ウ. 起訴後勾留中の被告人が，同時に余罪の被疑者として逮捕又は勾留中であり，その余罪について，同条第３項にいう「捜査のため必要があるとき」に当たる場合は，被告事件について防御権の不当な制限にわたらない限り 捜査機関は 被告人と被告事件の弁護人との接見に関し，その日時等を指定することが許される。
エ. 捜査機関が被疑者と弁護人との接見の日時等を指定する場合，その方法は，捜査機関の合理的裁量にゆだねられるが，弁護人に対する書面の交付による方法は許されない。
オ. 弁護人を選任することができる者の依頼により弁護人となろうとする者と被疑者との逮捕直後の初回の接見は，これを速やかに行うことが被疑者の防御の準備のために特に重要であるから，捜査機関は，同条第３項にいう「捜査のため必要があるとき」に当たる場合であっても，接見の日時等を指定することが許されることはない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．ア エ",c4:"４．イ ウ",c5:"５．イ オ",c6:"６．ウ エ",c7:"７．ウ オ",c8:"８．エ オ",c9:"",c10:"",a:"2"},{year:"2007",num:"26",subject:"kso",q:`起訴状一本主義に関する次のアからオまでの各記述のうち，正しいものは幾つあるか。後記１から６までのうちから選びなさい 。
ア. 起訴状一本主義は，裁判官が被告人の罪責について予断を抱くことなく第一回公判期日に臨んで初めて「公平な裁判所」の理念が実現されるという考えに基づくものであるので，当事者主義とは無関係である。
イ. 公訴事実中の被告人の前科の記載は，裁判官に事件につき予断を生ぜしめるおそれのある事項に該当するので，前科を誇示してした恐喝などのように前科が犯罪の実行行為の一部となっている場合であっても，公訴事実中に前科を記載することは許されない。
ウ. 恐喝の手段として送付された脅迫状の全文を恐喝罪の公訴事実に引用するのは，起訴状一本主義に反する証拠の引用に該当するので許されることはない。
エ. 起訴状には，裁判官に事件につき予断を生ぜしめるおそれのある書類その他の物を添付してはならないとされているので，略式命令を請求する場合に，その請求と同時に検察官が立証に必要があると思料する書類を裁判所に差し出すことは許されない。
オ. 起訴状には，裁判官に事件につき予断を生ぜしめるおそれのある書類その他の物を添付することを禁止しているので，検察官が被告人を勾留中のまま公訴提起する際に，起訴状の提出と同時に，被告人の逮捕状や勾留状をその裁判所の裁判官に差し出すことは許されない。`,c1:"１．０個",c2:"２．１個",c3:"３．２個",c4:"４．３個",c5:"５．４個",c6:"６．５個",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2007",num:"27",subject:"kso",q:`次のⅠからⅢまでの【見解】は，被告人の特定に関する基準について述べたものである。これらの【見解】のいずれかを前提に，後記【事例】について，検察官から刑の執行猶予の言渡しの取消しを請求された裁判所の採るべき対応として正しいものは 後記１から６までのうちどれか。
【見 解】
Ⅰ. 検察官が実際に起訴しようとした者が，だれであるかを基準とする。
Ⅱ. 起訴状に被告人として氏名を表示された者が，だれであるかを基準とする。
Ⅲ. 現に公判廷において被告人として行動した者が，だれであるかを基準とする。
【事 例】
　甲は，強盗罪で懲役刑の実刑判決を受けて刑務所に服役し，その刑の執行を終えた。その後，甲は，無銭飲食による詐欺事件（①事件）を起こして逮捕勾留されたが，その際，身上等を知る乙の氏名等を詐称したため，検察官は，乙の氏名等を詐称している甲を犯人と考えて，その勾留中に，起訴状の被告人を乙と表示して詐欺罪で起訴した。裁判所は，乙の氏名等を詐称している甲を公判期日に出頭させて審理した上，懲役刑に処するとともに，その刑の執行を猶予する旨の判決を宣告し，同判決は確定した。
　さらに，甲は，自動車運転による業務上過失傷害事件（②事件）を起こして身柄不拘束で警察官の取調べを受けたが，その際，身上等を知る丙の氏名等を詐称した。甲から打ち明けられて事情を知った丙が，甲に代わって検察庁に出頭し検察官の取調べを受けたため，検察官は，丙を犯人と考えて，在宅のまま，起訴状の被告人を丙と表示して業務上過失傷害罪で起訴した。裁判所は，丙を公判期日に出頭させて審理した上，禁錮刑に処するとともに，その刑の執行を猶予する旨の判決を宣告し，同判決は確定した。
　その後，甲は，窃盗事件を起こして現行犯逮捕され，同事件の逮捕勾留中も身上等を知る丁の，氏名を詐称したものの 甲を取り調べた検察官が その供述内容に不審を抱き捜査を遂げた結果現在勾留中の被疑者は甲であること，甲は①事件では乙の氏名等を詐称し，②事件では丙の氏名等を詐称していたこと及びいずれの事件の判決の宣告も前記強盗罪の刑の執行を終わった日から５年を経ていなかったことが判明した。このため，検察官は，裁判所に対し，刑法第２６条第３号により，甲に執行猶予の必要的取消事由が存することを理由に，①事件及び②事件における刑の執行猶予の言渡しの取消しを請求した。`,c1:"１．Ⅰの考え方に立てば，①事件は請求を却下し，②事件は執行猶予を取り消すべきである。",c2:"２．Ⅰの考え方に立てば，①事件及び②事件とも請求を却下すべきである。",c3:"３．Ⅱの考え方に立てば，①事件は執行猶予を取り消し，②事件は請求を却下すべきである。",c4:"４．Ⅱの考え方に立てば，①事件及び②事件とも執行猶予を取り消すべきである。",c5:"５．Ⅲの考え方に立てば，①事件は執行猶予を取り消し，②事件は請求を却下すべきである。",c6:"６．Ⅲの考え方に立てば，①事件及び②事件とも執行猶予を取り消すべきである。",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2007",num:"28",subject:"kso",q:"公判前整理手続に関する次の１から５までの各記述のうち 誤っているものはどれか。",c1:"１．裁判所は，充実した公判の審理を継続的，計画的かつ迅速に行うため必要があると認めるときは，検察官及び被告人又は弁護人の意見を聴いて，第一回公判期日前に，決定で，事件の争点及び証拠を整理するための公判準備として，事件を公判前整理手続に付することができる。",c2:"２．公判前整理手続においては 被告人に弁護人がなければその手続を行うことができないので，，被告人に弁護人がないときは，裁判長は，職権で弁護人を付さなければならない。",c3:"３．公判前整理手続は，受訴裁判所が主宰して行うこととされている。",c4:"４．公判前整理手続は，その後の公判における審理や証拠調べの在り方を決定付けるものであるため，公開の法廷で行わなければならない。",c5:"５．公判前整理手続に付された事件については，検察官及び被告人又は弁護人は，やむを得ない事由によって公判前整理手続において請求することができなかったものを除き，当該公判前整理手続が終わった後には，証拠調べを請求することができない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2007",num:"29",subject:"kso",q:`次のアからカまでの各記述は，第一審の公判期日における手続であるが，そのうち冒頭手続において行われるものを選び出した上，その進行順序に従って並べた場合，正しいものは，後記１から８までのうちどれか 。
ア. 裁判長が，被告人及び弁護人に対し，被告事件について陳述する機会を与える。
イ. 検察官が，起訴状を朗読する。
ウ. 検察官が，事件の審判に必要と認めるすべての証拠の取調べを請求する。
エ. 裁判長が，被告人に対し，その人違いでないことを確かめるに足りる事項を問う。
オ. 裁判長が，被告人に対し，終始沈黙し，又は個々の質問に対し陳述を拒むことができる旨その他裁判所の規則で定める被告人の権利を保護するため必要な事項を告げる。
カ. 検察官が，冒頭陳述を行う。`,c1:"１．イエオア",c2:"２．エイオカ",c3:"３．オイアカ",c4:"４．エイオア",c5:"５．オイカウ",c6:"６．エオイア",c7:"７．オエイア",c8:"８．オエイカ",c9:"",c10:"",a:"4"},{year:"2007",num:"30",subject:"kso",q:`次の【事例】における【Ｗの証人尋問】中の（ア）から（エ）までの下線部分にそれぞれ対応する後記アからエまでの【記述】のうち，誤っているものの組合せは，後記１から５までのうちどれか 。
【事例】
　甲は，Ｖに暴行を加えて傷害を負わせ，犯行現場から逃走したが，通りすがりのプロカメラマンＷがその犯行を目撃し，携帯していたカメラでそれを写真撮影した。そのため甲の氏名等が判明し，甲は，Ｖを被害者とする傷害事件で公判請求された。
　甲は 第一回公判期日において「公訴事実記載の日時に現場に行ったことはないし Ｖに暴力を振るったこともない 」旨述べて犯行を否認した。
　検察官は，その他の証拠とともに，弁護人に開示済みの①本件犯行目撃状況等に関するＷの司法警察員に対する供述調書及び②Ｗ撮影に係る写真７枚を添付した司法警察員作成の捜査報告書を証拠調べ請求した。
　これに対し，甲の弁護人は，前記①及び②の証拠について不同意の意見を述べたが，Ｗが当時カメラを携帯していた事実については争わない旨述べた。
　そこで，検察官は，立証趣旨を「本件犯行目撃状況及び前記写真の撮影状況」として，Ｗの証人尋問を請求し，裁判所の採用決定を経て，次のとおりＷの証人尋問を行った。なお，同証人尋問の段階では，前記②の証拠採用決定及び証拠調べはなされていない。
【Ｗの証人尋問】
検察官. （ア）あなたは，プロのカメラマンをしていますね。
Ｗ.はい。
検察官. あなたは，本件犯行の日時である平成○年○月○日午前○時ころ，どこにいましたか。
Ｗ.仕事に行く途中に，事件の現場を通り掛かりました。
検察官. （イ）その時，あなたは，カメラを携帯していましたね。
Ｗ.はい。仕事で必要ですから。
検察官. あなたが現場を通り掛かったとき，何か見ましたか。
Ｗ.後に警察で名前を聞いて知ったＶが暴力を振るわれているのを見ました。
検察官. その時，あなたは，どの地点にいましたか。
Ｗ.△△交差点の南側の信号機のそばです。
検察官. その時，Ｖはどこにいましたか。
Ｗ.私がいたところから３０メートルほど南側の歩道上で私に背を向けて立っていました。
検察官. （ウ）では，その時，甲はその歩道上のどこにいましたか。
Ｗ.Ｖの正面に立っていました。
（中略）
検察官. あなたは，甲がＶに暴力を振るっているのを見て，どうしましたか。
Ｗ.とっさに，カメラを取り出して，その様子を写真に撮りました。
検察官. その後，甲はどうしましたか。
Ｗ.私が写真を撮っていることに気付いた様子で 慌てて 車に乗り込み 走り去りました。
検察官. それを見たあなたはどうしましたか。
Ｗ.逃げた犯人を捕まえるのに役立つと思ったので，その車を写真に撮りました。
検察官. （エ）前記②の捜査報告書添付の写真７枚を示します。これらの写真７枚は，あなたが本件現場で撮影したものですか。
Ｗ.はい。間違いありません。
（以下省略）
【記 述】
ア. この尋問は，主尋問における誘導尋問であるが，証人の身分等で実質的な尋問に入るに先立って明らかにする必要のある準備的な事項に関するものであるので許される。
イ. この尋問は，主尋問における誘導尋問であるので許されない。
ウ. この尋問は，Ｗが，いまだ甲が現場にいた旨を証言していないのに，甲が現場にいたことを前提としており，誤導尋問と呼ばれる相当でない尋問であるので許されない。
エ. この尋問は，Ｗに示した写真７枚が，いまだ証拠調べを終えていないものであるので許されない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2007",num:"31",subject:"kso",q:`起訴状記載の公訴事実の特定に関し，裁判所が検察官に対して求釈明する義務を負うのは，訴因の明示に必要な範囲に限られるとの見解がある。次のアからオまでの各記述のうち，この見解と矛盾するものの組合せとして正しいものは，後記１から６までのうちどれか 。
ア. 訴因の明示に欠けるところはないが，裁判所として被告人の防御の観点から明らかにするこ。とが重要であると考える事項について，裁判所が検察官に求釈明することができる。
イ. 裁判所が求釈明義務に基づいて検察官に対して求釈明したにもかかわらず，検察官がこれに応じない場合は，当事者主義を採る現行法の下では，公訴棄却の判決をせず，そのまま次の手続に進むしかない。
ウ. 裁判所が求釈明義務に基づいて検察官に対して求釈明し，検察官がこれに応じて釈明した場合，検察官が釈明した内容が当然に訴因の内容となるとは限らない。
エ. 裁判所は，訴因の明示にとって補正が必要な事項については，弁護人から求釈明要求がない場合であっても，自ら検察官に対して求釈明しなければならない。
オ. 裁判所は，求釈明する必要がないと考える事項について，弁護人から求釈明要求があった場合，一応，検察官に対して，任意に釈明に応じるかどうかを打診し，検察官がこれに応ずれば釈明を許すことができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．ウ エ",c6:"６．エ オ",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2007",num:"32",subject:"kso",q:"刑事訴訟法第８９条の必要的保釈（権利保釈）に関する次の１から５までの各記述のうち，誤っているものはどれか。",c1:"１．殺人罪で公訴を提起され，同罪で勾留中の被告人甲が保釈を請求した場合，裁判所は，同条による保釈を許可することはできない。",c2:"２．傷害罪で公訴を提起され，同罪で勾留中の被告人甲が保釈を請求したが，甲に殺人罪で有期懲役刑の実刑判決を受けた前科がある場合，裁判所は，同条による保釈を許可することはできない。",c3:"３．傷害罪で公訴を提起され，同罪で勾留中の被告人甲が保釈を請求したが，甲に逃亡すると疑うに足りる相当な理由がある場合，裁判所は，同条による保釈を許可することはできない。",c4:"４．被害者を乙とする傷害罪で公訴を提起され，同罪で勾留中の被告人甲が保釈を請求したが，甲に乙を畏怖させる行為をすると疑うに足りる相当な理由がある場合，裁判所は，同条による保釈を許可することはできない。",c5:"５．傷害罪で公訴を提起され，同罪で勾留中の被告人甲が保釈を請求したが，甲が定まった住居を有しない場合，裁判所は，同条による保釈を許可することはできない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2007",num:"33",subject:"kso",q:"次の１から５までの各記述のうち，判例に照らして正しいものはどれか。",c1:"１．共同被告人は，被告人との関係においては，被告人以外の者であって，被害者その他の純然たる証人とその本質を異にするものではないから，共同被告人の検察官に対する供述調書は，同号にいう「検察官の面前における供述を録取した書面」に当たる。。",c2:"２．証人が公判廷において証言を拒絶した場合は，同号前段の「公判準備若しくは公判期日において供述することができないとき」に当たらない。",c3:"３．既に公判期日において証人として尋問された者に対し，検察官が，後の公判期日に提出することを予定して，その尋問内容と同一事項につき取り調べて作成した供述調書は，その後の公判期日において，その者が前記供述調書の内容と相反する供述をしても，同号後段にいう「前の供述」に当たらない。",c4:"４．退去強制によって出国した外国人の検察官に対する供述調書については，同号前段のその供述者が「国外にいる」という要件を満たすので，常に，事実認定の証拠として許容される。",c5:"５．同号ただし書の「前の供述を信用すべき特別の情況」は，供述がなされた際の外部的な事情のみを判断資料とすべきであり，この「特別の情況」を推知させる事由として，その供述内容を考慮することはできない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2007",num:"34",subject:"kso",q:`次の【事例】における実況見分調書が，立証趣旨を「犯行現場の状況」として，その証拠調べを請求され，刑事訴訟法第３２１条第３項による書面として証拠調べされた場合，後記アからオまでの 記述 のうち 正しいものの組合せは 後記１から５までのうちどれか。
【事 例】
　甲は，午後６時３０分ころ，Ｘ交差点において，自動車を運転中に交通事故を起こして被害者を死亡させた。司法警察員Ｋは，甲を被疑者とする業務上過失致死被疑事件について，犯行現場の状況を明らかにするために，同現場において，事故直後の午後７時から４０分間にわたり，甲を立ち会わせて実況見分を行った。Ｋは，その後，その経過と結果を正確に記載した実況見分調書を作成した。この実況見分調書には，次の（ａ）から（ｅ）までの各記載があり，現場見取図が添付されているが，甲の署名押印はない。
（ａ）. 甲は，同現場交差点南側の街灯を指さして「事故当時，この街灯は点灯していませんでした。」と説明した。
（ｂ） . 甲は 「私が被害者を初めて発見した場所は①地点でした。その時 被害者が立っていた場所は②地点でした 」と説明した。
（ｃ）. Ｋが，①地点と②地点の間の距離を測定したところ，１０. ７メートルであった。
（ｄ）. Ｋが，①地点の運転席に着席した甲の目の高さに視線を置き，②地点方向を見たところ，道路脇に設置された看板の陰になって，②地点の路面は見えなかったが，高さ８０センチメートルを超える部分は見えた。
（ｅ）. 実況見分を実施している間，本件現場付近の人通りは多かった。
【記 述】
ア. この実況見分調書中の（ａ）の記載を，当該街灯が事故当時点灯していなかったという事実の認定に用いることができる。
イ. この実況見分調書中の（ｂ）の記載を，甲が初めて被害者を発見したときに，被害者は②地点に立っていたという事実の認定に用いることができる。
ウ. この実況見分調書中の（ｂ）及び（ｃ）の記載を，甲が初めて被害者を発見した場所として指示した地点とその際に被害者が立っていた場所として指示した地点の間の距離が１０. ７メートルであるという事実の認定に用いることができる。
エ. この実況見分調書中の（ｄ）の記載を，①地点の運転席に着席していた甲からは②地点の路面を見通すことができないという事実の認定に用いることはできない。
オ. この実況見分調書中の（ｅ）の記載を，事故直後の午後７時から４０分間，本件現場付近の人通りは多かったという事実の認定に用いることができる。`,c1:"１．ア イ",c2:"２．イ ウ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2007",num:"35",subject:"kso",q:`「憲法第３８条第２項は 強制 拷問若しくは脅迫による自白又は不当に長く抑留若しくは拘禁された後の自白は，これを証拠とすることができない 」とし，刑事訴訟法第３１９条第１項は 「強制，拷問又は脅迫による自白，不当に長く抑留又は拘禁された後の自白その他任意にされたものでない疑のある自白は これを証拠とすることができない」として 一定の自白について証拠能力を否定している（自白法則 ）。これに関する次の 会話 中の①から⑥までの内に入る適切な記述を後記【記述】から一つずつ選び出し，①から⑥の順に並べた場合，正しいものは，後記１から５までのうちどれか。なお，同じ記述は１回しか用いてはならない 。
【会話】
学生Ａ. 任意性に疑いのある自白の証拠能力を否定する根拠について，私は，内容が虚偽のおそれがあり，その信用性に乏しいからであると考えます。この考えでは，自白を証拠とすることができるかどうかの基準は （①）ということになると考えます。
学生Ｂ. Ａ君の考えでは 任意性に疑いのある自白について (②) という問題があるのではないですか。私は，その根拠について，憲法第３８条第１項の黙秘権の保障を担保するためであると考えます この考えでは 自白を証拠とすることができるかどうかの基準は (③)ということになると考えます。
学生Ｃ. しかし Ｂ君の考えでは (④) という問題があると思います そこで 私は その根拠は，手段の適法性を担保するためであると考えます。この考えでは，自白を証拠とすることができるかどうかの基準は （⑤）ということになると考えます。
学生Ａ. 確かに Ｃ君の考えでは その基準を客観化できるようにも思えますが (⑥) という問題は残るのではないですか。そうすると，結局は，どれか一つの考えを根拠とするのではなく，これら三つの考えを複合的に考えることが妥当ということになるのでしょうか。
【記 述】
ア. 公判廷における自白であったか否か
イ. 違法の程度の認定が困難である
ウ. 黙秘権と自白法則を混同している
エ. 反対尋問権の保障に欠ける
オ. 供述の自由の制約があったか否か
カ. 内容が真実であれば自白を証拠にできる
キ. 自白偏重による誤判防止という趣旨と相容れない
ク. 弁護人が取調べに立ち会ったか否か
ケ. 取調方法が違法であったか否か
コ. 虚偽の自白を誘発するおそれがあったか否か`,c1:"１．アキクウケイ",c2:"２．コカオエクウ",c3:"３．コカオウケイ",c4:"４．コイオキケエ",c5:"５．クカコウオイ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2007",num:"36",subject:"kso",q:`次の【見解】は 自白の補強証拠が必要とされる範囲について述べたものである 見解 中の①と②の（ ）内に入る適切な記述を後記【Ａ群】の１から５までのうちから，また ③と④の内に入る適切な語句を後記【Ｂ群】の１から５までのうちから，それぞれ一つずつ選びなさい。なお，同じ数字の（ ）内には，同じ語句又は記述が入るものとする。
【見解】
　犯罪を構成する事実は，一般に，客観的要件事実，主観的要件事実，被告人と犯人との同一性の三つに分けることができる。自白の補強証拠が必要とされる範囲について，犯罪を構成する事実のうち（①）の全部又は実行行為を含むその主要部分について補強証拠が必要であるとする学説がある これは (①)以外の事実については 自白以外の証拠が存在しない場合が少なくないことも考慮し，明確で実際的な補強の範囲を示そうとしたものといえる。これに対し，判例は，より柔軟に （①）のうち（②）を保障する程度の範囲の事実について補強証拠が存在すれば足りるとしている。
　例えば，貴金属を客体とする盗品有償譲受けの罪について，被告人の全面的な自白と当該貴金属に関する盗難被害届のみが存在し，自白には十分な信用性が認められる場合，前記学説によれば （③）ことになる。他方，この場合，判例によれば （④）ことになる。
【A群】
１．客観的要件事実
２．主観的要件事実
３．被告人と犯人との同一性
４．自白の任意性
５．自白の真実性
【Ｂ 群】
１．当該貴金属が盗品であることについて補強証拠に欠けるから，有罪とすることは許されない
２．被告人が当該貴金属が盗品であることを認識していたことについて補強証拠に欠けるから，有罪とすることは許されない
３．被告人が犯人であることについて補強証拠に欠けるから，有罪とすることは許されない
４．被告人が当該貴金属を有償で譲り受けたことについて補強証拠に欠けるから，有罪とすることは許されない
５．自白全体が架空のものでないとの裏付けがあり，補強証拠に欠けるところはないから，有罪とすることが許される`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1545"},{year:"2007",num:"37",subject:"kso",q:`次のアからカまでの各記述のうち，免訴の言渡しをしなければならない場合の組合せとして正しいものは，後記１から６までのうちどれか。
ア. 殺人罪の訴因について無罪判決が確定した後，被告人の有罪を立証するに十分な新たな証拠が発見されたことから，再度，同一事実につき殺人罪の訴因で起訴がなされたとき
イ. 強制わいせつ事件の唯一の告訴権者である被害者が告訴を取り消した後，同一事実について強制わいせつ罪の訴因で起訴がなされたとき
ウ. 起訴がなされた犯罪について，起訴より前に公訴時効が完成していたことが判明したとき
エ. 公判係属中に，被告人が死亡したとき
オ. 犯行時に１８歳で，いまだ成人に達していない被疑者の刑事事件について，家庭裁判所の刑事処分を相当と認める決定を経ないで起訴がなされたとき
カ. 公訴の取消し後，犯罪事実につき，新たに重要な証拠が発見されていないにもかかわらず，公訴の取消しによる公訴棄却の決定が確定した同一事実について起訴がなされたとき`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ カ",c6:" ６．オ カ",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2007",num:"38",subject:"kso",q:`控訴審に関する次のアからエまでの各記述につき，正しい場合には１を，誤っている場合には２を選びなさい 。
ア. 判例に照らせば，被告人は，免訴を言い渡した原判決に対し無罪を求めて控訴することができる。
イ. 控訴裁判所は，原判決の言渡し後に生じた刑の量定に影響を及ぼすべき情状について取り調べることはできない。
ウ. 簡易裁判所がした刑事に関する第一審の判決に対する控訴については，地方裁判所が裁判権を有する。
エ. 控訴裁判所は 被告人のみが控訴をした事件では 原判決の刑が著しく軽いと認められても，それより重い刑を言い渡すことはできない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2221"},{year:"2007",num:"39",subject:"kso",q:"犯罪捜査のための通信傍受に関する法律 （以下「 通信傍受法」 という。） に関する次の１から４までの各記述のうち，誤っているものはどれか。 ",c1:"１．刑事訴訟法では，令状により，差押え，捜索又は検証をすることができる対象犯罪を限定していないが，通信傍受法では，傍受令状で通信の傍受をすることができる対象犯罪を死刑又は無期若しくは短期１年以上の懲役に当たる刑法上の犯罪に限定している。",c2:"２．差押え，捜索又は検証のための令状には，犯罪事実の要旨及び罰条の記載を要しないが，通信傍受法の傍受令状には，被疑事実の要旨及び罰条を記載しなければならない。",c3:"３．刑事訴訟法では，令状により，差押え，捜索又は検証をすることができる要件として「犯罪の捜査をするについて必要があるとき」と定められているが，通信傍受法では，傍受令状により，通信の傍受をすることができる要件の一つとして「他の方法によっては，犯人を特定し，又は犯行の状況若しくは内容を明らかにすることが著しく困難であるとき と定められている。",c4:"４．刑事訴訟法では，裁判官がした検証に関する裁判の取消し又は変更を請求することはできないが，通信傍受法では，裁判官がした通信の傍受に関する裁判の取消し又は変更を請求することができる。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2006",num:"1",subject:"ken",q:`適正手続の保障に関する次のアからエまでの各記述について，最高裁判所の判例の要約として，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. 刑事裁判において，起訴された犯罪事実のほかに，起訴されていない犯罪事実をいわゆる余罪として認定し，実質上これを処罰する趣旨で量刑の資料に考慮し，これに基づいて被告人を重く処罰することは，不告不理の原則に反し，憲法第３１条に違反する。
イ. 憲法第３１条の定める法定手続の保障は，直接には刑事手続に関するものであるが，行政手続についても同条の保障が及ぶと解すべき場合があり，その場合には行政処分の相手方に事前の告知，弁解，防御の機会を与えることが必要である。
ウ. 憲法第３５条は同法第３３条の場合を除外しているから，少なくとも現行犯の場合に関する限り，法律が司法官憲の発した令状によらずにその犯行の現場において捜索押収等をなし得べきことを規定したからといって，憲法第３５条違反の問題を生じる余地はない。
エ. 法廷等の秩序維持に関する法律による制裁は従来の刑事的行政的処罰のいずれの範ちゅうにも属しないところの，同法によって設定された特殊の処罰であるが，その制裁は，通常の刑事裁判に関して憲法が要求する諸手続の範囲内において，これに準拠して科されるべきものである。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1212"},{year:"2006",num:"2",subject:"ken",q:`日本国憲法における「主権」の概念に関する次のアからエまでの各記述について，誤っているもの二つの組合せを，後記１から６までの中から選びなさい。
ア. 日本国憲法前文には「われらは，いづれの国家も，自国のことのみに専念して他国を無視してはならないのであつて，政治道徳の法則は，普遍的なものであり，この法則に従ふことは，自国の主権を維持し，他国と対等関係に立たうとする各国の責務であると信ずる」とあるが，ここにいう「主権」は「国家の統治権」を意味する。
イ. 国民主権の意義を，国家が支配権力を行使する権威のより所（国家権力の正統性）が国民に由来することと解する立場からすると，国民主権の原理は，国家権力の行使が全国民の名の下で行われるべきことを意味するにとどまり，実際に国家の意思決定に国民の意思が的確に反映されるような仕組みを作ることまでは要請されない。
ウ. ポツダム宣言８項には「日本国ノ主権ハ本州，北海道，九州及四国並ニ吾等ノ決定スル諸小島ニ局限セラルベシ」とあるが，ここにいう「主権」は日本国憲法第１条にいう「主権」の意味とは異なる。
エ. 日本国憲法の国民主権原理が明治憲法の天皇主権の否定として表明されたものだという趣旨からすると，日本国憲法下において，少なくとも天皇は国民ではないことは明らかである。`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．イとウ",c5:"５．イとエ",c6:"６．ウとエ",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2006",num:"3",subject:"ken",q:`私人間における人権保障に関する次のアからエまでの各記述について，最高裁判所の判決の要約として，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. 企業者が特定の思想，信条を有する者をそれゆえに雇い入れることを拒んでも違法ではないのであるから，企業者は入社試験の際に学生運動歴を秘匿していたことを理由に本採用を拒否することもできる。
イ. 女子を男子より５歳若く定年退職させることは，企業経営の上で合理的であるが，必要不可欠とまでは言えないのであるから，女子の定年を男子より低く定めた就業規則の規定は，民法第９０条の規定により無効である。
ウ. 労働組合による統制と組合員が市民又は人間として有する自由や権利とが矛盾衝突する場合，問題とされている具体的な組合活動の内容・性質，これについて組合員に求められる協力の内容・程度・態様等を比較考量して，組合の統制力とその反面としての組合員の協力義務の範囲に合理的な限定を加えるべきである。
エ. 憲法の自由権的基本権の保障規定は，私人相互間の関係について当然に適用ないし類推適用されるものでなく，私立大学には学生を規律する包括的権能が認められるが，私立大学の当該権能は，在学関係設定の目的と関連し，かつ，その内容が社会通念に照らして合理的と認められる範囲においてのみ是認される。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2211"},{year:"2006",num:"4",subject:"ken",q:`憲法第２７条の勤労の権利及び第２８条の労働基本権に関する次のアからオまでの各記述について，最高裁判所の判例の要約として，正しいもの三つの組合せを，後記１から10までの中から選びなさい。
ア. 憲法第２７条の勤労の権利は，これを直接根拠として行政庁に対してその実現を求め得る具体的請求権であるとは解せないものの，立法府が勤労の機会を実質的に確保するため最低限度の立法をしないときには，憲法第２７条に基づいて，立法不作為の違憲確認訴訟を提起できる。
イ. 労働組合の組合員に対する統制権は，労働者の団結権保障の一環として，憲法第２８条の精神に由来するものであるが，労働組合が，公職選挙における統一候補を決定し，組合を挙げて選挙運動を推進している場合であっても，組合の方針に反して立候補した組合員を統制違反として処分することは，労働組合の統制権の限界を超えるものとして，違法といわなければならない。
ウ. 労働組合への加入強制の方式の一つとして採用されているユニオン・ショップ協定のうち，使用者とユニオン・ショップ協定を締結している組合（締結組合）以外の他の組合に加入している者や，締結組合から脱退・除名されたが他の組合に加入し又は新たな組合を結成した者について，使用者の解雇義務を定める部分は，労働者の組合選択の自由や他の組合の団結権を侵害するものであり，民法第９０条の規定により無効と解すべきである。
エ. 憲法は，勤労者の団体行動権を保障しているが，勤労者の争議権の無制限な行使を許容するものではなく，労働争議において使用者側の自由意思をはく奪し又は極度に抑圧し，あるいはその財産に対する支配を阻止し，私有財産制度の基幹を揺るがすような行為をすることは許されない。いわゆる生産管理において，労働者が，権利者の意思を排除して企業経営の権能を行うときは，正当な争議行為とはいえない。
オ. 憲法第２８条の趣旨からすると，正当な争議行為については，刑事責任を問われず，また，民事上の債務不履行ないし不法行為責任を免除されると解され，ストライキを行った場合，それが正当な争議行為であると認定されれば，当該ストライキ期間中の賃金についても使用者側に請求することができる。`,c1:"１．ア イ ウ",c2:"２．ア イ エ",c3:"３．ア イ オ",c4:"４．ア ウ エ",c5:"５．ア ウ オ",c6:"６．ア エ オ",c7:"７．イ ウ エ",c8:"８．イ ウ オ",c9:"９．イ エ オ",c10:"10．ウ エ オ",a:"7"},{year:"2006",num:"5",subject:"ken",q:`「知る権利」に関する次の文章を読み，後記１から３までの小問に答えなさい。
「知る権利」という概念は様々な意味で用いられている。まず，最高裁判所は，(ａ)<u>事実の報道の自由が憲法第２１条の保障の下にあると述べるにあたり，報道機関の報道が国民の「知る権利 に奉仕することを指摘している。</u>また，「知る権利」は，情報を受領する権利を指して用いられることがあるが，最高裁判所の判決は，閲読の自由ないし情報摂取の自由が(ｂ)ことを認めている。さらに，最近では，「知る権利」が政府に対して情報の開示を求める権利を指して用いられることが多い。
なお，マス・メディアに対するアクセス権が，マス・メディアに対する「知る権利」と言われることがある。しかし，アクセス権は，「知る権利」というよりは，市民がマス・メディアを利用して表現行為を行う権利である。(ｃ)<u>このアクセス権に対しては様々な批判があり</u>，権利として一般的に承認されてはいない。
〈小問１〉下線部(ａ)のように述べている最高裁判所の判決を次の１から３までの中から選びなさい。
１．新聞による公職候補者の前科の公表が名誉毀損罪に当たるか否かが争われた事例についての判決
２．公職候補者を厳しく批判する雑誌の刊行，販売，配布等を差し止める仮処分が争われた事例についての判決
３．取材フィルムの提出命令が取材の自由を侵害するとして争われた事例についての判決
〈小問２〉(ｂ)に入るものとして適切なものを次の１から３までの中から選びなさい。
１．表現の自由を保障した憲法第２１条第１項によって保障される
２．表現の自由を保障した憲法第２１条第１項の規定の趣旨，目的から，いわばその派生原理として当然に導かれる
３．表現の自由を保障した憲法第２１条第１項の精神に照らして十分尊重に値する
〈小問３〉下線部(ｃ)のいうところのアクセス権に対する批判として明らかに適切でないものを，次の１から３までの中から選びなさい。
１．アクセス権は，私人であるマス・メディアの作為（意見広告の掲載や反論文の掲載等）を求めるものであるので，国家からの自由であるという表現の自由とは根本的に性格が異なる。
２．マス・メディアによる報道において批判された者に当該メディアを用いて無料で反論することを認めることは，マス・メディアの側の報道を萎縮させ，批判的な報道がされなくなるおそれがある。
３．周波数が有限であることから，放送局に対して公平な放送をするように要求することが憲法上認められるので，新聞によって批判された者の当該新聞に対する反論文掲載請求権はともかく，放送局に対する同様の反論放送請求権を認めることはできない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"323"},{year:"2006",num:"6",subject:"ken",q:`内閣は，Ａ国との間で，相手国から引渡請求を受けた犯罪人を相互に引き渡す義務を課す犯罪人引渡条約を締結した。ところが，内閣が事後にその承認を国会に求めたところ，国会は，引渡義務の対象から自国民が除外されていないことを理由に，引渡義務の対象から自国民を除外するとの条項を付して，その犯罪人引渡条約を承認するとの議決をした。このような事態に関する次のアからカまでの各記述について，明らかに誤っているもの二つの組合せを，後記１から９までの中から選びなさい。
ア. 国会の条約承認手続において両院協議会の手続が認められていることからして，犯罪人引渡条約に新たな条項を付する決議は，国会に認められた権限である。
イ. 条約の締結に際して，内閣が事前に国会の承認を受けることは条約の成立要件であるから，この犯罪人引渡条約は，新たな条項の有無にかかわらず国内法上効力が認められない。
ウ. 新たな条項を付して承認するとの国会の議決は，内閣に対し，新たな条項を含んだ条約の締結交渉を政治的責務として課すことになる。
エ. 条約の内容を確定するのは，内閣の職務に属することであるから，国会が行うことができるのは承認か不承認に限られ，国会は犯罪人引渡条約に新たな条項を加えることは認められていない。
オ. 条約に国会の承認が必要なのは今日の民主国家には共通のことであり，内閣案のとおりに国会の承認を受けることができなかった犯罪人引渡条約は，結局は不承認を意味することになるから国内法としては無効と考えざるを得ない。
カ. 条約は国会の議決を必要とする一種の法律であるから，後法優先の原則により，新たな条項の付された条約は国内法として効力を持つことになる。`,c1:"１．アとウ",c2:"２．イとエ",c3:"３．ウとオ",c4:"４．エとカ",c5:"５．アとエ",c6:"６．イとオ",c7:"７．ウとカ",c8:"８．アとオ",c9:"９．イとカ",c10:"",a:"9"},{year:"2006",num:"7",subject:"ken",q:`次の文章は，職業選択の自由を規制する法令の合憲性判断基準に関するものである。ＡからＤまでの空欄に，後記１から６までの中から適切なものを補充して，文章を完成させなさい。
最高裁判所は，職業選択の自由を規制する法令の合憲性に関して，［Ａ］の判決において，積極的な社会経済政策を実施するための法的規制措置については，立法府がその裁量権を逸脱し，当該法的規制措置が著しく不合理であることが明白な場合に限って，これを違憲として，その効力を否定することができる旨判示した。その後，［Ｂ］の判決では，職業の許可制について合憲性を肯定し得るためには，原則として，重要な公共の利益のために必要かつ合理的な措置であることを要し，それが自由な職業活動が社会公共に対してもたらす弊害を防止するための消極的，警察的措置である場合には，許可制に比べて職業の自由に対するより緩やかな制限である職業活動の内容及び態様に対する規制によっては，その目的を十分に達成することができないと認められることを要する旨判示した。
これらを受けて，職業選択の自由を規制する法令の合憲性審査基準に関して，判例はいわゆる「目的二分論」に立っていると理解した上で，これを基本的に支持する見解がある一方で，規制目的と合憲性審査基準を対応させることについて批判的な見解もある。このような中，最高裁判所は，平成元年に，［Ｃ］において，ある小法廷が，［Ａ］の判決と同様の合憲性審査基準を述べた上で，当該規制は違憲とすべき場合に当たらない旨判示したのに対して，別の小法廷は，そのような審査基準を述べることなく当該規定の合憲性を肯定して，判断手法が分かれた。しかし，平成５年の［Ｄ］についての判決では，その規制目的に言及した上で，［Ａ］の判決を引用して，当該規制は，その目的のために必要かつ合理的な範囲にとどまるものであって，これが著しく不合理であることが明白であるとは認め難く，憲法第２２条第１項に違反するということはできない旨判示した。

１．薬局設置場所が配置の適正を欠くと認められることを都道府県知事による開設不許可事由とした薬事法の規定の合憲性が争われた事案
２．たばこ事業法，同法施行規則及びこれを受けた大蔵大臣依命通達による製造たばこの小売販売業に対する適正配置規制の合憲性が争われた事案
３．公衆浴場設置場所が配置の適正を欠くと認められることを都道府県知事による経営不許可事由とした公衆浴場法の規定の合憲性が争われた事案
４．酒類の販売業を税務署長の免許制とし，その要件を定めている酒税法の規定の合憲性が争われた事案
５．都道府県知事の許可なく小売市場を開設することを禁じた小売商業調整特別措置法の規定の合憲性が争われた事案
６．司法書士及び公共嘱託登記司法書士協会以外の者が他人の嘱託を受けて登記に関する手続の代理業務等を行うことを禁じた司法書士法の規定の合憲性が争われた事案`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5132"},{year:"2006",num:"8",subject:"ken",q:`財政制度に関する次のアからエまでの各記述について，明らかに誤っているもの二つの組合せを，後記１から６までの中から選びなさい。
ア. 日本国憲法は，租税法律主義の例外を設けていないため，「条約中に関税について特別の規定があるときは，当該規定による」と定める関税法第３条ただし書の合憲性が問題となり得るが，憲法第８４条にいう「法律の定める条件による」場合に該当するものとして，憲法違反ではないと解される。
イ. 日本国憲法は，予備費の制度を設け，事前に国会の議決を経るとともに，具体的な支出については，事後的に国会の承諾を得ることを必要としている。そして，国会の承諾が得られない場合には，既に締結された契約は直ちに無効とはされないものの，当該契約を解除する正当な事由があるものと解される。
ウ. 日本国憲法においては，予算発案権は内閣に専属する。しかし，憲法第８３条の趣旨からして，国会は，提出された予算案につき，減額修正，増額修正のいずれもなし得ると解されており，国会法や財政法には，増額修正を想定した規定が置かれている。
エ. 日本国憲法には，予算と法律が不一致の場合に関する規定は設けられていない。年度途中に予算に計上されていない経費を要する法律が成立した場合，内閣は，補正予算，経費流用，予備費などの予算措置を採るべき義務を負い，当該法律の執行が緊急を要するときには，事後に国会の承認を経ることを条件に，これらの予算措置のいずれであっても内閣の責任で選択して執行することができる。`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．イとウ",c5:"５．イとエ",c6:"６．ウとエ",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2006",num:"9",subject:"ken",q:`投票価値の平等に関する次のアからエまでの各記述について，最高裁判所の判例に照らして，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. 議員定数をどのように配分するかは，立法府である国会の権限に属する立法政策の問題であるが，衆議院議員選挙において，選挙区間の投票価値の格差により選挙人の選挙権の享有に極端な不平等を生じさせるような場合には，例外的に，立法府の裁量の範囲を超えるものとして，憲法違反となる。
イ. 衆議院議員選挙において，選挙区間の投票価値の最大格差が３倍を超える場合には，憲法の要求する投票価値の平等に反する程度に至っているといえるが，必ずしもそれだけでは，当該議員定数配分規定が憲法に違反しているということまではできない。
ウ. 参議院議員の選挙区選挙については，地域代表の性質を有するという参議院の特殊性により，投票価値の平等が直接的には要求されないと解されるから，衆議院議員選挙の場合とは異なり，選挙区間における投票価値の格差が５倍を超えるような場合であっても，憲法違反とはならない。
エ. 議員定数配分規定が，憲法の要求する投票価値の平等に反し，違憲であると判断される場合，そのことを理由として当該規定に基づく選挙全体を無効としても，これによって直ちに違憲状態が是正されるわけではなく，かえって憲法の所期するところに適合しない結果を生ずるから，行政事件訴訟法第３１条の定める事情判決の制度を類推して，議席を過小に配分された選挙区の選挙のみを無効とすべきである。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2122"},{year:"2006",num:"10",subject:"ken",q:`憲法第９条に関する次のアからエまでの各記述について，最高裁判所の判例の要約として，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. 憲法第９条は，我が国が主権国として持つ固有の自衛権を否定するものではなく，憲法の平和主義は決して無防備，無抵抗を定めたものではない。
イ. 憲法第９条第２項がその保持を禁止した戦力とは，我が国が主体となってこれに指揮権，管理権を行使し得る戦力をいうものであり，外国の軍隊は，たとえそれが我が国に駐留するとしても，ここにいう戦力には該当しない。
ウ. 憲法第９条が侵略のための陸海空軍その他の戦力の保持を禁じていることは一見明白であるが，自衛のための軍隊その他の戦力の保持を禁じているか否かに関して憲法第９条第２項は一義的に明確な規定と解することはできない。
エ. 憲法第９条の宣明する国際平和主義，戦争の放棄，戦力の不保持などの国家の統治活動に対する規範は，私法的な価値秩序とは本来関係のない公法的な性格を有する規範であるから，それに反する私法上の行為の効力を一律に否定する作用を営むことはない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1121"},{year:"2006",num:"11",subject:"ken",q:`思想・良心の自由に関する次のアからエまでの各記述について，誤っているもの二つの組合せを，後記１から６までの中から選びなさい。
ア. 憲法第１９条の思想・良心の自由は，人の内心における精神活動の自由を保障したものであり，人の内心は何らかの形で外部に表明されない限りだれも知ることができないものであるから，その意味では，思想・良心の自由の保障は絶対的なものである。
イ. 江戸時代の日本においてキリシタンであるか否かを告白させる目的で行われた「踏絵」は，内心における宗教的信条の告白を強制するものであるが，信教の自由を保障している日本国憲法の下では，このような事例に対して憲法第１９条を適用する余地はない。
ウ. 最高裁判所の判例によれば，「単に事態の真相を告白し陳謝の意を表明するに止まる程度」の謝罪広告であれば，これを新聞紙に掲載すべきことを命ずる判決は，被告に屈辱的若しくは苦役的労苦を科し，又は被告の有する倫理的な意思，良心の自由を侵害することを要求するものとは解されない。
エ. 憲法第１９条は，内心の告白を強制されないという意味では「沈黙の自由」を保障したものと解することができるから，「自己に不利益な供述を強要されない」と規定する憲法第３８条第１項は 憲法第１９条との関係では一般法に対する特別法の関係にあると一般に解されている。`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．イとウ",c5:"５．イとエ",c6:"６．ウとエ",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2006",num:"12",subject:"ken",q:`内閣及び内閣総理大臣に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. 憲法は，内閣総理大臣が欠けたときは，内閣は総辞職をしなければならないと定めているが，ここにいう「欠けた」とは，死亡や国会議員たる資格の喪失などを意味し，病気や一時的な生死不明は含まない。
イ. 最高裁判所の判例によれば，内閣総理大臣は，少なくとも内閣の明示の意思に反しない限り，行政各部に対し，随時その所掌事務について一定の方向で処理するよう指導，助言等の指示を与える権限を有する。
ウ. 閣議の決定は，慣例上全員一致でなければならないとされているから，一部の大臣が閣議の決定に参加せず，あくまでもその決定に反対であった場合には，内閣は総辞職しなければならない。
エ. 内閣総理大臣は，内閣を代表して議案を国会に提出し，国務を総理するほか，外交関係について国会に報告することを職務とするが，外交関係の処理と条約の締結は内閣が行うべき事務である。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1122"},{year:"2006",num:"13",subject:"ken",q:`次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア. 憲法第２６条第２項前段は，国民は，「その保護する子女に普通教育を受けさせる義務を負ふ」と定めている。この点，親権者には教育の自由があるから，親権者は，その保護する子女に受けさせる教育内容を決めることができ，子女に学校教育法による普通教育の代わりに，自ら自由に定めた内容による９年間の教育を受けさせることによっても，憲法第２６条第２項前段の義務を果たしたことになる。
イ. 憲法第２７条第１項は，勤労の義務を定めている。憲法第１８条は，「犯罪に因る処罰の場合を除いては，その意に反する苦役に服させられない」と定めているから，国は，犯罪による処罰の場合を除き，国民に「苦役」に当たる労働を強制することはできないが，苦役に当たらない程度のものであれば，犯罪による処罰の場合以外であっても，憲法第２７条第１項を根拠として国民に勤労を強制することができる。
ウ. 憲法第３０条は 納税の義務を定めている。同条は その主体について，「国民は」と規定しているが，この「国民」には内国法人（国内に本店又は主たる事務所を有する法人）も含まれる。また，法律をもってすれば，日本国内に居住する外国人及び外国法人（内国法人以外の法人）に対しても納税の義務を課すことができる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2006",num:"14",subject:"ken",q:`憲法改正に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤ってい。る場合には２を選びなさい。
ア. 国会が発議した憲法改正案は国民の承認を得なければならないが，憲法上は，必ず特別の国民投票が実施されなければならないわけではなく，例えば，参議院議員通常選挙の際に国民の投票を求めることも認められている。
イ. 憲法第９６条第１項は，憲法改正が成立するためには国民投票において「その過半数の賛成」を必要とするとしているが，憲法改正の重要性や硬性憲法であることを重視する場合には，「その過半数の賛成」とは国民投票における有効投票の過半数を意味すると解すべきである。
ウ. 憲法改正権が制度化された制憲権であるという理解からすれば，制憲権が万能である以上，憲法改正には限界はなく，いかなる内容の改正もなし得るということになる。
エ. ポツダム宣言の受諾によって主権の所在が天皇から国民に移ったという，いわゆる八月革命説は，憲法改正には限界があるという立場を採りつつ日本国憲法の制定を正当化しようとするものである。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1221"},{year:"2006",num:"15",subject:"ken",q:`地方公共団体において，日本国民である職員に限って管理職に昇任することができる措置を執ることは，憲法第１４条第１項に違反しないとした最高裁判所の判決（最高裁判所平成１７年１月２６日大法廷判決，民集５９巻１号１２８頁）に関する次のアからエまでの各記述について，正しいもの二つの組合せを，後記１から６までの中から選びなさい。
ア. この判決は，地方公共団体が，在留外国人を職員として採用する場合，その者について，どのような昇任の条件を定めるかは当該地方公共団体の裁量にゆだねられるから，その判断に裁量権の逸脱・濫用がない限り，違法の問題を生じないとした。
イ. この判決は，日本国との平和条約に基づき日本の国籍を離脱した者等の出入国管理に関する特例法に定める「特別永住者」の公務就任権を制限する場合について，一般の在留外国人とは異なる取扱いが求められると解する余地を否定した。
ウ. 憲法が，在留外国人に対し一定の範囲で公務就任権を保障しているか否かについては争いがあるが，この判決は，これを否定する立場に立つことを明らかにしたものである。
エ. この判決は，当該地方公共団体の管理職の中に，住民の権利義務を直接形成し，その範囲を確定するなどの公権力の行使に当たる行為を行い，若しくは普通地方公共団体の重要な施策に関する決定を行い，又はこれらに参画することを職務とするものが含まれていることを前提としている。`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．イとウ",c5:"５．イとエ",c6:"６．ウとエ",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2006",num:"16",subject:"ken",q:"天皇の権能に関する次の１から８までの各記述について，正しいと認められるものを二つ選びなさい。",c1:"１．天皇の国事行為について，それが内閣の助言に基づいてなされた場合には，天皇が責任を問われることはないが，天皇の発案に基づき内閣の承認を受けてなされた場合には，天皇が国事行為の責任を問われることがある。",c2:"２．天皇の権能は，一身に専属し，その国事に関する行為を他に委任することはできない。",c3:"３．天皇は，内閣の助言と承認が不当なものであると判断した場合でも，その助言と承認を拒むことは一切認められていない。",c4:"４．天皇は，憲法で列挙された国事に関する行為以外であっても，国政に関する権能を行使することが認められている場合がある。",c5:"５．憲法が定める天皇の任命行為は，すべて内閣の助言と承認に基づいて行われる。",c6:"６．天皇に衆議院の解散権があるとしても，それが内閣の助言と承認によって行われる以上，国会が天皇の政治責任を追及することは認められない。",c7:"７．天皇による国会開会式の「おことば」を「儀式」に含めて理解する見解に立てば，その行為については内閣による助言と承認は要求されない。",c8:"８．天皇に代わって摂政が置かれる場合は，摂政が自らの名で国事に関する行為を行い，その責任は摂政に帰属する。",c9:"",c10:"",a:"36"},{year:"2006",num:"17",subject:"ken",q:`国会議員の地位と権能に関する次のアからオまでの各記述について，誤っているもの二つの組合せを，後記１から10までの中から選びなさい。
ア. 比例代表選挙において選出された国会議員も全国民の代表であるが，国会法は，比例代表選出議員が，選出された選挙における他の名簿届出政党に所属する者になったときは退職者となると規定している。
イ. 憲法第５０条は，両議院の議員は「法律の定める場合を除いては」国会の会期中逮捕されないと定めており，それを受けて，国会法は，議員が国会の会期中に逮捕され得る場合として，院外における現行犯の場合とその院の許諾のある場合を挙げている。
ウ. 憲法第５１条は，国会議員が「議院で行った演説，討論又は表決について，院外で責任を問はれない」と定めているので，議員が所属する政党が，議員の院内での表決などを理由に除名処分を行うことは憲法上許されないが，政党の除名処分が司法審査の対象とならないため，実際にはそうした憲法第５１条違反の除名処分に法的統制が及ばないことになっている。
エ. 最高裁判所は 議員が院内での質疑等によって個人の名誉を低下させる発言をしたとしても，，国会議員がその付与された権限の趣旨に明らかに背いてこれを行使したものと認め得るような特別の事情がある場合に限り，国家賠償法第１条第１項にいう違法な行為があったとして国の損害賠償責任が認められると判示した。
オ. 国会が国の唯一の立法機関である以上，議員は当然に法案をその所属する議院に提出することができるが，この議員の法案提出につき一定の人数の賛同を得ていることを要求するなどして制限を加えることは憲法上許されないのであって，実際，国会法には議員による法案提出を制限する規定はない。`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．アとオ",c5:"５．イとウ",c6:"６．イとエ",c7:"７．イとオ",c8:"８．ウとエ",c9:"９．ウとオ",c10:"10．エとオ",a:"9"},{year:"2006",num:"18",subject:"ken",q:`次のアからエまでの各記述について，最高裁判所の判例の趣旨に照らし，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. 刑事事件の証人尋問の際に，傍聴人が証人の状態を認識することができないような遮へい措置を採っても，審理が公開されていることに変わりはないから，憲法第８２条第１項及び第３７条第１項に違反しない。
イ. 家庭裁判所は，遺産の分割に関する処分の審判において，その前提となる相続権，相続財産等の権利関係の存否を審理判断することはできず，争いのない権利関係を前提として遺産の分割を具体的に形成決定するなどの処分をなすのであるから，その審判を公開法廷において行わなくとも，憲法第８２条第１項に違反しない。
ウ. 憲法第８２条第１項は，裁判の公開を制度として保障することにより，国民に裁判を傍聴する権利を認め，その一環として傍聴した内容についてメモを取る権利も保障したものというべきであるから，裁判長は，特段の事情のない限り，傍聴人がメモを取ることを禁止してはならない。
エ. 刑事事件の公判廷における写真撮影は，審判の秩序を乱し被告人その他訴訟関係人の正当な利益を不当に害する結果を生ずる恐れがあるため，最高裁判所規則により，裁判長の許可を得なければすることができないものと規定することは，憲法第２１条に違反しない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1221"},{year:"2006",num:"19",subject:"ken",q:`憲法第１７条及び国家賠償法に関する次のアからオまでの各記述について，明らかに誤っているもの二つの組合せを，後記１から10までの中から選びなさい。
ア. 憲法第１７条にいう「不法行為」は，民法上の「不法行為」と同義であると解し，かつ，公権力の行使について損害賠償請求をするには民法以外の特別の法律が必要であるとの見解がある。この見解によれば，国家賠償法第１条を改正し，公務員に故意がある場合にのみ賠償請求権が発生すると定めた場合，当該改正は憲法違反であると解される。
イ. 憲法第１７条を受けて制定された国家賠償法第１条は，公務員の不法行為に基づく国又は公共団体の責任を定めている。論理的には，この責任につき，国又は公共団体の自己責任であると解すると，公務員個人に対する賠償請求権は否定され，他方，代位責任であると解すると，公務員個人に対する賠償請求権は否定されないということになる。
ウ. 憲法第１７条及び国家賠償法第１条にいう「公務員」には，国会議員も含まれると解され，憲法第５１条に定める国会議員の免責特権との関係が問題となる。この点，国家賠償法第１条第１項の適用上，国会議員個々人ではなく，国会自体について，その組織的行為の評価を論ずれば足りると解する立場を採れば，憲法第５１条は，国会の不法行為を理由とする国家賠償責任追及の法的障害とはならない。
エ. 国会議員は，憲法を尊重し擁護する義務を負っているので，違憲の法律を制定してはならないという行為規範の遵守義務が課されている。したがって，国会において議決された法律が違憲であれば，立法過程における国会議員の立法活動の当否にかかわらず，当該立法行為は，国家賠償法第１条第１項の適用上も違法となるとするのが 最高裁判所の基本的な考え方である，。
オ. 憲法第１７条は，「国家無答責の原則」を否定する趣旨の規定であるが，国民に生じたあらゆる損害を国が賠償することまで定めたものではない。例えば，最高裁判所は，内閣等が物価安定という政策目標達成への対応を誤り原告らの郵便貯金を目減りさせたとしても，政府の政治的責任が問われるのは格別，法律上の義務違反ないし違法行為として国家賠償法上の損害賠償責任の問題は生じない旨判示した。`,c1:"１．アとイ",c2:"２．アとウ",c3:"３．アとエ",c4:"４．アとオ",c5:"５．イとウ",c6:"６．イとエ",c7:"７．イとオ",c8:"８．ウとエ",c9:"９．ウとオ",c10:"10．エとオ",a:"6"},{year:"2006",num:"20",subject:"ken",q:`次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア. 地方自治法は，地方公共団体として，普通地方公共団体と特別地方公共団体とを定めている。同法は，一時期，都の特別区について，その区長は特別区の議会が都知事の同意を得てこれを選任するものと定めていたところ，最高裁判所は，特別区は憲法上の地方公共団体には当たらないものと解して，これを合憲としたが，現在の地方自治法では，都の特別区も，都道府県及び市町村と同じく普通地方公共団体とされており，その区長は選挙人の投票により選挙される。
イ. 憲法第９３条第１項は，「地方公共団体には，法律の定めるところにより，その議事機関として議会を設置する」と規定している。したがって，地方自治法で，小規模の普通地方公共団体について，条例で，議会を置かず，選挙権を有する者の総会を設けることができる旨を規定することは，憲法に違反する。
ウ. 憲法が，基礎的な地方公共団体と包括的な地方公共団体からなる２段階構造を保障しているか否かについては，議論がある。これを肯定する立場は，憲法が，制定当時の地方制度，すなわち市町村と都道府県からなる地方制度を前提にして地方自治を保障したことを尊重するものであるが，この立場からしても，都道府県より更に広域の道州のような自治組織を設けることは，必ずしも，憲法に違反すると解すべきことにはならない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"7"},{year:"2006",num:"21",subject:"gyo",q:`国家賠償法第１条に関する次のアからエまでの各記述について，最高裁判所の判例に照らし，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. 同一の地方公共団体に属する公務員による一連の職務行為の過程において他人に損害を生じさせる事態が発生した場合，一連の行為のうちのいずれかに過失による違法行為があったのでなければ当該損害が生ずることはなかったと認められるときは，どの公務員のどのような違法行為によるものかが特定されなくても，当該地方公共団体は，その不特定を理由として損害賠償責任を免れることができない。
イ. 裁判官による争訟の裁判については，当該裁判官に事実認定や法律解釈の誤りがあったとしても，それは上訴等の訴訟法上の救済方法によって是正されるべきものであるから，国家賠償法第１条第１項にいう違法な行為に当たるものとして争うことができるのは，そのような訴訟法上の救済が及ばない瑕疵に限られる。
ウ. 国家賠償法第１条の「その職務を行うについて」に該当するためには，少なくとも公務員が主観的に権限行使の意思をもってする場合であることを要するから，公務員が私利私欲を図る意図をもって職権を濫用し，その結果他人に損害を与えたとしても，当該公務員個人の損害賠償責任が生ずるにとどまり，国又は公共団体が賠償責任を負うことはない。
エ. 宅地建物取引業法は，宅地建物取引業者の不正な行為により個々の取引関係者が被る損害の防止・救済を目的とするものではないから，当該業者に対する行政庁の監督処分権限の不行使が著しく不合理と認められる場合でも，当該権限の不行使は国家賠償法第１条第１項の適用上違法の評価を受けるものではない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1222"},{year:"2006",num:"22",subject:"gyo",q:`最高裁判所平成２年１２月１３日第一小法廷判決（民集４４巻９号１１８６頁・多摩川水害訴訟上告審判決）から引用する次の判示に照らし，後記アからウまでの各記述について正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
「国家賠償法２条１項にいう営造物の設置又は管理の瑕疵とは，営造物が通常有すべき安全性を欠き，他人に危害を及ぼす危険性のある状態をいい，このような瑕疵の存在については，当該営造物の構造，用法，場所的環境及び利用状況等諸般の事情を総合考慮して具体的，個別的に判断すべきものである。ところで，河川は，当初から通常有すべき安全性を有するものとして管理が開始されるものではなく，治水事業を経て，逐次その安全性を高めてゆくことが予定されているものであるから，河川が通常予測し，かつ，回避し得る水害を未然に防止するに足りる安全性を備えるに至っていないとしても，直ちに河川管理に瑕疵があるとすることはできず，河川の備えるべき安全性としては，一般に施行されてきた治水事業の過程における河川の改修，整備の段階に対応する安全性をもって足りるものとせざるを得ない。そして，河川の管理についての瑕疵の有無は，過去に発生した水害の規模，発生の頻度，発生原因，被害の性質，降雨状況，流域の地形その他の自然的条件，土地の利用状況その他の社会的条件，改修を要する緊急性の有無及びその程度等諸般の事情を総合的に考慮し，河川管理における財政的，技術的及び社会的諸制約のもとでの同種・同規模の河川の管理の一般的水準及び社会通念に照らして是認し得る安全性を備えていると認められるかどうかを基準として判断すべきであると解するのが相当である」
ア. 「現に改修中の河川については，河川管理の特質に由来する財政的・技術的・社会的諸制約のもとで一般に施行されてきた治水事業による河川の改修・整備の過程に対応する過渡的安全性で足りる」とする見解は，前記判示によって明確に否定されることとなった。
イ. 「道路への落石を防止するための措置を講じるための費用が多額にのぼり予算措置に困却することがあっても，道路の管理の瑕疵によって生じた損害に対する賠償責任を免れ得ない」とする見解は，前記判示によって明確に否定されることとなった。
ウ. 「河川法に基づく計画に従って改修・整備が完了した河川が備えるべき安全性とは，同計画に定める規模の洪水における流水の通常の作用から予測される災害の発生を防止するに足りる安全性である」とする見解は，前記判示によって明確に否定されることとなった。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"8"},{year:"2006",num:"23",subject:"gyo",q:`行政権限の代理，委任，専決・代決に関する次の記述について，アからエまでの下線部の各記述につき それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
本来の行政庁とは異なる行政機関が権限を行使することが認められる形態として，行政組織法上，代理，委任，専決・代決があると考えられている。
まず，代理とは，本来の行政庁を代理する行政機関が，本来の行政庁を代理して権限を行使することを明らかにして権限を行使することを指す。代理には，法定代理と委任代理とがあり，法定代理とは，行政庁が欠けたとき又は事故があったときに，法律の定めるところに従い，他の行政機関が本来の行政庁のすべての権限を代行することをいう。<u>そして，このような法定代理には，本来の行政庁が予め指定しておいた機関が代理権をもつ場合(指定代理)と，法律の定める機関が代理権を当然に行使する場合(狭義の法定代理)とがある。(ア)</u>
これに対し，権限の委任とは，自己に与えられた権限の一部を他の機関に委任して行わせることをいう。<u>委任をした本来の行政庁が委任を受けた行政機関の直近上級行政庁であるときは，委任をした行政庁は委任を受けた行政機関に対する監督権を保持しているので，委任には法律上の根拠は不要であると解されている。(イ)</u>また，このような場合，当該処分に対する不服申立てとしては，行政不服審査法第５条第１項第１号ただし書等の特別の場合を除き，<u>委任をした本来の行政庁に対する審査請求をすることになる。（ウ ）</u>
権限の代理・委任に対し，<u>行政庁が権限行使に関する事務の処理をその補助機関にゆだねるものの，国民に対する関係では本来の行政庁の名において行われるものとすることがあり，これを専決・代決という。(エ)</u>
（参照条文）行政不服審査法
第５条 行政庁の処分についての審査請求は，次の場合にすることができる。
一 処分庁に上級行政庁があるとき。ただし，処分庁が主任の大臣又は宮内庁長官若しくは外局若しくはこれに置かれる庁の長であるときを除く。
二 前号に該当しない場合であつて，法律（条例に基づく処分については，条例を含む）に審査請求をすることができる旨の定めがあるとき。
２ (略)`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1211"},{year:"2006",num:"24",subject:"gyo",q:`行政機関の種別に関する次の記述について，アからエまでの下線部の各記述につき，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
行政機関には，行政庁，諮問機関・参与機関，執行機関，補助機関等の区別があるとされる。まず，行政庁とは，行政主体の法律上の意思を決定し外部に表示する機関をいう。<u>行政処分等の権限を行使する行政庁として法律上規定されている例としては，内閣府や，法務省等の各省や，東京都，北海道，京都府，沖縄県等の都道府県や，大阪市，横浜市等の市町村等がある。(ア)</u>
行政庁から諮問を受けて意見を具申する機関を諮問機関という。参与機関と異なり，これらの機関の意見に行政庁は必ず従わなければならない訳ではない。法制審議会等の各種審議会が諮問機関の例である。これらの組織は，<u>国家行政組織法上，審議会等として位置付けられ，同法にいう委員会とは区別されている。(イ)</u>国家行政組織上の委員会の例としては，中央労働委員会，公害等調整委員会がある。
行政目的を実現するために，代執行，直接強制，即時強制等の実力を行使する機関を執行機関という。<u>警察官，消防職員，自衛官，海上保安官等がこれに該当する。(ウ)</u>
また，学説上は，行政庁の事務や会計の処理を検査し，これらの処理が適正に行われているかを監査する機関のことを指して，監査機関と呼ぶ考え方もある。<u>国の機関の会計処理等を検査する会計検査院，地方公共団体の財務に関する事務処理等を監査する監査委員等がこれに該当する。(エ)</u>`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2111"},{year:"2006",num:"25",subject:"gyo",q:`行政上の法律関係における権利濫用禁止の原則，信義誠実の原則，信頼関係の法理等の一般的な法原理の適用に関する次のアからウまでの各記述について，最高裁判所の判例に照らして，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア. 私人がその権利を濫用する場面には権利濫用禁止の原則が適用されるが，国又は地方公共団体の行為が問題となったケースについて，権利の濫用ないし行政権の濫用を理由として違法と認定されることはない。
イ. 信義誠実の原則及び信頼保護の原則は行政上の法律関係にも適用される場合があるが，課税関係においては，租税法律主義の厳格な適用による納税者間の平等を犠牲にしてもなお納税者の信頼を保護しなければならない特別の事情がない場合には信頼保護の要請は劣後する。
ウ. 公営住宅法及びこれに基づく条例の規定によれば，公営住宅の事業主体は，公営住宅の入居者を決定するに際しては入居者を選択する自由は認められていないと解されるので，入居後における入居者と事業主体との間の公営住宅の使用関係について，賃貸借契約関係における信頼関係の法理の適用はない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"6"},{year:"2006",num:"26",subject:"gyo",q:`通達の法的性質等に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. 通達は上級機関が関係下級機関・職員に対してその職務権限の行使を指揮する等のために発するものであるから，当該職務権限の行使を規律する法令の中に通達を発することができる旨の規定がない場合には，上級機関はこれを発することはできない。
イ. 裁判所は，法令の解釈適用に際しては，通達に示された法令の解釈に拘束されない。
ウ. 事務処理の全国的な統一のために発せられた通達に反する措置を税務署長が行った場合，その措置は，他の税務署長が通達に準拠して行った措置との関係において，平等原則違反を理由に違法と判断される余地がある。
エ. 複数の行政機関が同一の行政目的を実現するため一定の条件に該当する複数の者に対し行政指導を行う場合に，これらの行政指導に共通してその内容となるべき事項を上級機関の通達により定めることは許される。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2111"},{year:"2006",num:"27",subject:"gyo",q:`水道事業者による給水拒否に関する次のアからウまでの各記述について，最高裁判所の判例に照らし，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア. 水道事業者である地方公共団体が，同地方公共団体が定めた建築指導要綱に基づく行政指導に従わないことを理由に，建築中のマンションにつき給水契約の締結を拒否した場合，それが，当該建築指導要綱を順守させる目的によるときは，水道法第１５条にいう「正当な理由」があり，違法な拒否には当たらない。
イ. 建築基準法に違反して建築確認を取得せずになされた増築部分について，水道事業者である地方公共団体の職員が給水装置新設工事の申込書を返戻した場合，その趣旨が，建築基準法違反の状態を是正して建築確認を受けた上で再度，当該工事の申込みをするよう一応の勧告をするにとどまるものと認められるときであっても，それは申込みに対する違法な拒否に当たる。
ウ. 水道事業者である地方公共団体が，建築予定のマンションについての給水契約締結の申込みを拒否した場合，それが，専ら慢性的な水不足の状況の下で水道水の需要の増加を抑制する目的によるときは，水道法第１５条にいう「正当な理由」がないため，違法な拒否に当たる。
（参照条文）水道法
第１５条第１項 水道事業者は，事業計画に定める給水区域内の需要者から給水契約の申込みを受けたときは，正当な理由がなければ，これを拒んではならない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"8"},{year:"2006",num:"28",subject:"gyo",q:`行政手続法における利害関係人の取扱いに関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア. 行政庁は，聴聞を行うに当たっては，不利益処分の名あて人となるべき者に対し聴聞の通知をすれば足り，それ以外に，当該不利益処分につき利害関係を有する者に対して聴聞の通知をする必要はない。
イ. 行政庁は，申請により求められた許認可等の処分をする場合には，それにより不利益を受ける者がいるときは，その者に対し，当該処分の理由を示さなければならない。
ウ. 行政庁は，申請に対する処分であって，申請者以外の者の利害を考慮すべきことが当該法令において許認可等の要件とされているものを行う場合には，必要に応じ，公聴会の開催その他の適当な方法により当該申請者以外の者の意見を聴く機会を設けるよう努めなければならない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"3"},{year:"2006",num:"29",subject:"gyo",q:`行政庁の裁量に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. 法律の条文において，行政処分をすることが「できる」と規定されている場合，当該条文上の要件が満たされているときに，当該処分をするかしないかの裁量を行政庁に認める趣旨であるとは限らない。
イ. 行政庁が裁量権を行使して行った処分については，当不当の問題が生じるだけであるから，裁判所の審査が及ぶことはない。
ウ. 行政庁が裁量の基準を設けている場合，その基準に従わないでした行政処分であっても，当然に違法ということにはならない。
エ. 法律の条文上，行政庁において，数種類の不利益処分（一定の者に対して直接に義務を課し又はその権利を制限する処分）をすることができると規定されている場合，特定の者に対しどの処分を行うかについて，行政庁に裁量が認められることがある。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1211"},{year:"2006",num:"30",subject:"gyo",q:`行政指導に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤ってい。る場合には２を選びなさい。
ア. 行政指導は，相手の任意の協力を求める行為であるから，行政指導に関して国家賠償法第１条による損害賠償責任が発生することはない。
イ. 法令上「指導」，「勧告」又は「助言」という文言が使われた場合，その行為は，取消訴訟の対象たる「処分その他公権力の行使に当たる行為」には当たらない。
ウ. 行政手続法の行政指導に関する規定は，国の行政機関が行う行政指導に適用されるものであって，地方公共団体の機関が行う行政指導への適用はない。
エ. 行政手続法の行政指導に関する規定は，法令上に根拠規定のある行政指導にのみ適用される。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2212"},{year:"2006",num:"31",subject:"gyo",q:`次のアからウまでの各記述について，法令及び最高裁判所の判例に照らし，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア. 国税犯則取締法第３条第１項は，憲法第３３条の場合を除外して住居，書類及び所持品につき侵入，捜索及び押収を受けることのない権利を保障する憲法第３５条に違反するものではない。
（参照条文）国税犯則取締法
第２条 収税官吏ハ犯則事件ヲ調査スル為必要アルトキハ其ノ所属官署ノ所在地ヲ管轄スル地方裁判所又ハ簡易裁判所ノ裁判官ノ許可ヲ得テ臨検，捜索又ハ差押ヲ為スコトヲ得
② 前項ノ場合ニ於テ急速ヲ要スルトキハ収税官吏ハ臨検スヘキ場所，捜索スヘキ身体若ハ物件又ハ差押ヲ為スヘキ物件ノ所在地ヲ管轄スル地方裁判所又ハ簡易裁判所ノ裁判官ノ許可ヲ得テ前項ノ処分ヲ為スコトヲ得
③から⑤まで （略）
第３条 間接国税ニ関シ現ニ犯則ヲ行ヒ又ハ現ニ犯則ヲ行ヒ終リタル際ニ発覚シタル事件ニ付其ノ証憑ヲ集取スル為必要ニシテ且急速ヲ要シ前条第一項又ハ第二項ノ許可ヲ得ルコト能ハサルトキハ其ノ犯則ノ現場ニ於テ収税官吏ハ同条第一項ノ処分ヲ為スコトヲ得
② （略）
イ. 警察官職務執行法第２条第１項の規定に基づく職務質問に付随して行う所持品検査は，任意手段として許容されるものであるから，所持人の承諾を得てその限度でしか行うことができない。
（参照条文）警察官職務執行法
第２条第１項 警察官は，異常な挙動その他周囲の事情から合理的に判断して何らかの犯罪を犯し，若しくは犯そうとしていると疑うに足りる相当な理由のある者又は既に行われた犯罪について，若しくは犯罪が行われようとしていることについて知つていると認められる者を停止させて質問することができる。
ウ. 所得税法第２３４条第１項の規定による質問や検査は，それにより過少申告の事実が明らかとなり，所得ほ脱事実の発覚につながり得るものであるから，所得税の公平確実な賦課徴収のために必要な資料の収集だけでなく，刑事責任の追及をも目的とする手続であり，自己に不利益な供述を強要されないことを保障する憲法第３８条第１項に反する。
（参照条文）所得税法
第２３４条第１項 国税庁，国税局又は税務署の当該職員は，所得税に関する調査について必要があるときは，次に掲げる者に質問し，又はその者の事業に関する帳簿書類（中略）その他の物件を検査することができる。
一から三まで （略）`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"4"},{year:"2006",num:"32",subject:"gyo",q:`次の文章について，後記語句群アからカまでの中から適切な言葉を選択して空欄Ａ，Ｂ，Ｃに入れて文章を完成させる場合の正しい組合せを，後記１から８までの中から選びなさい。
行政上の強制執行とは 行政上の義務の不履行に関して行政機関が行う，【Ａ】作用ないし手続をいう。それは，【Ｂ】である点において行政罰と区別され，また，義務の不履行を前提とするものである点において，義務の不履行を前提とせずに行政上必要な状態を直接に実現するための強制手段である【Ｃ】と区別される。
【語句群】
空欄Ａについて
ア. 自ら義務者のすべき行為をし又は第三者にこれをさせ，義務の履行があったのと同一の状態を実現する
イ. 強制的に義務を履行させ又は履行があったのと同一の状態を実現する
空欄Ｂについて
ウ. 予想される義務不履行に対する事前の対応手段
エ. 将来に向けて一定の状態を実現するもの
空欄Ｃについて
オ. 即時強制
カ. 直接強制`,c1:"１．Ａア Ｂウ Ｃオ",c2:"２．Ａア Ｂウ Ｃカ",c3:"３．Ａア Ｂエ Ｃオ",c4:"４．Ａア Ｂエ Ｃカ",c5:"５．Ａイ Ｂウ Ｃオ",c6:"６．Ａイ Ｂウ Ｃカ",c7:"７．Ａイ Ｂエ Ｃオ",c8:"８．Ａイ Ｂエ Ｃカ",c9:"",c10:"",a:"7"},{year:"2006",num:"33",subject:"gyo",q:`行政機関の保有する情報の公開に関する法律に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア. 開示請求に係る行政文書が存在しているか否かを答えるだけで不開示情報を開示することとなるときは，行政機関の長は，当該行政文書の存否を明らかにしないで当該開示請求を拒否することができる。
イ. 開示請求に係る行政文書の一部に不開示情報が記録されている場合であっても，不開示情報に当たる部分を容易に区分して除くことができるときは，行政機関の長は，原則として，当該部分を除いた部分について開示しなければならない。
ウ. 開示請求に係る行政文書に開示請求者以外の者の情報が記録されている場合においてそれを開示しようとするときは，行政機関の長は，事前に，当該情報に係る第三者に対し意見書の提出を求め，その意見に従って，開示するか否かの決定を行わなければならない。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2006",num:"34",subject:"gyo",q:`最高裁判所昭和６０年１２月１７日第三小法廷判決（伊達火力発電所訴訟判決）の次の判示に関するアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
「行政処分の取消訴訟は，その取消判決の効力によつて処分の法的効果を遡及的に失わしめ，処分の法的効果として個人に生じている権利利益の侵害状態を解消させ，右権利利益の回復を図ることをその目的とするものであり，行政事件訴訟法９条が処分の取消しを求めるについての法律上の利益といつているのも，このような権利利益の回復を指すものである。したがつて，処分の法的効果として自己の権利利益を侵害され又は必然的に侵害されるおそれのある者に限つて，行政処分の取消訴訟の原告適格を有するものというべきであるが，処分の法律上の影響を受ける権利利益は，処分がその本来的効果として制限を加える権利利益に限られるものではなく，行政法規が個人の権利利益を保護することを目的として行政権の行使に制約を課していることにより保障されている権利利益もこれに当たり，右の制約に違反して処分が行われ行政法規による権利利益の保護を無視されたとする者も，当該処分の取消しを訴求することができると解すべきである。」
ア. この判示は，行政処分の取消訴訟に関し，処分の本来的効果として権利利益を制限される者にのみ原告適格を認め，それ以外の者には原告適格を認めないという立場をとるものである。
イ. この判示によれば 行政庁がある事業者の一定の行為について許可処分をした場合において，，当該行為がされることにより不利益を受ける第三者が存在するとしても，事業者が当該行為を必ず行うとは限らないから，その第三者は，許可処分により自己の権利利益を侵害され又は必然的に侵害されるおそれのある者には当たらず，許可処分の取消訴訟の原告適格は認められない。
ウ. この判示は，法律の規定に基づく処分の効果として権利利益を制限される者はもちろん，法律の規定に基づかない処分により，その効果として重大な権利利益を制限される者にも，当該処分の取消訴訟の原告適格を肯定するという立場をとるものである。
エ. この判示からは，行政庁の許可に基づく事業者の行為によって第三者が不利益を受け，それが処分の法的効果としての権利利益の侵害に当たると解される場合に，その第三者は当該事業者に対してその行為の差止めを訴求することができることから許可処分の取消しを求める法律上の利益を有しないとの結論は導かれない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2221"},{year:"2006",num:"35",subject:"gyo",q:`抗告訴訟の審理に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. 第三者を名あて人とする処分の義務付け判決には第三者効があるとされているので，名あて人となる第三者が当該義務付け判決に基づいてされる処分の適法性を争うには，再審の手続によらなければならない。
イ. ある処分の違法を理由とする国家賠償請求訴訟は民事訴訟であるから，当該処分の取消訴訟に追加的に併合することはできない。
ウ. 税務署長の行った所得税の更正処分の取消訴訟が，東京地方裁判所及び当該税務署長の所在地を管轄する地方裁判所以外の地方裁判所の管轄に属する場合は，合意管轄又は応訴管轄による場合以外にもある。
エ. 行政庁に対して一定の処分を求める旨の法令に基づく申請を拒否された者が，同拒否処分の取消訴訟と当該一定の処分の義務付けの訴えを提起する場合には，両訴えを併合提起しなければならない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2211"},{year:"2006",num:"36",subject:"gyo",q:`土地改良事業の施行認可処分の取消訴訟において，当該事業計画に係る工事及び換地処分がすべて完了したため，社会的，経済的損失の観点からみて，社会通念上，原状回復が不可能である場合であっても，訴えの利益を消滅させるものではないとした最高裁判所平成４年１月２４日第二小法廷判決（民集４６巻１号５４頁）に関する次のアからウまでの各記述について，それぞれ正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア. 本判決は，社会的，経済的損失の観点からみて，社会通念上，原状回復が不可能であるとの事情は，行政事件訴訟法第３１条の事情判決の適用に関して考慮されるべき事柄であって，土地改良事業の施行認可処分の取消訴訟の訴えの利益を消滅させるものではないとしている。
イ. 本判決は，土地改良事業の施行認可処分が取り消されれば，同処分後に行われる換地処分等の一連の手続及び処分の法的効力が影響を受けることを，訴えの利益を根拠付ける理由としている。
ウ. 本判決は，社会通念上，原状回復が法的に不可能となった場合において，原告が採り得る手段は損害賠償請求のみであり，同請求の前提として，土地改良事業の施行認可処分の取消訴訟を提起しておかなければならないことを，訴えの利益を根拠付ける理由としている。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"2"},{year:"2006",num:"37",subject:"gyo",q:`行政事件訴訟法上の差止めの訴えに関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. 一定の処分又は裁決がされることにより重大な損害を生ずるおそれがある場合には，差止めの訴えによる救済の必要性が認められるが，その損害を避けるため他に適当な方法があるときは，例外的に差止めの訴えによる救済の必要性が認められないものとされている。
イ. 行政庁が一定の処分をしようとしている場合に，その処分の差止めの訴えが提起されたときは，当該処分がされてしまうと訴えの利益が失われてしまうことから，差止めの訴えの提起とともに，当該行政庁は当該処分を行うことができなくなるものとされている。
ウ. 行政庁が第三者に対する一定の処分をしようとしている場合に，その処分の差止めの訴えが提起され認容判決がされたときは，当該第三者に対し判決の効力が及ばないと認容判決の意味がないから，その判決には，原則として第三者効があるとされている。
エ. 行政庁が第三者に対する一定の処分をしようとしている場合に，その処分の差止めの訴えが提起され，認容判決がされて確定したときは，関係行政庁は，その判決に拘束されるとされている。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1221"},{year:"2006",num:"38",subject:"gyo",q:`次の文章は，在外日本人選挙権剥奪違法確認等請求事件に関し，衆議院小選挙区選出議員の選挙及び参議院選挙区選出議員の選挙において選挙権を行使する権利を有することの確認を求める訴えの適法性について判断した最高裁判所平成１７年９月１４日大法廷判決の一部分を抜き出したものである。後記語群から適切な言葉を選択して空欄ア，イ，ウに入れて文章を完成させる場合の正しい組合せを，後記１から６までの中から選びなさい。
 「本件の確認請求に係る訴えは，［ア］のうち［イ］と解することができるところ，その内容をみると，公職選挙法附則第８項につき所要の改正がされないと，在外国民である上告人らが，今後直近に実施されることになる衆議院議員の総選挙における小選挙区選出議員の選挙及び参議院議員の通常選挙における選挙区選出議員の選挙において投票をすることができず，選挙権を行使する権利を侵害されることになるので，そのような事態になることを防止するために，同上告人らが，同項が違憲無効であるとして，当該各選挙につき選挙権を行使する権利を有することの確認をあらかじめ求める訴えであると解することができる。
選挙権は，これを行使することができなければ意味がないものといわざるを得ず，侵害を受けた後に争うことによっては権利行使の実質を回復することができない性質のものであるから，その権利の重要性にかんがみると，［ウ］選挙につき選挙権を行使する権利の有無につき争いがある場合にこれを有することの確認を求める訴えについては，それが有効適切な手段であると認められる限り，確認の利益を肯定すべきものである。そして，本件の確認請求に係る訴えは，［イ ］として 上記の内容に照らし，確認の利益を肯定することができるものに当たるというべきである。」
【語 群】
ａ. 無名抗告訴訟
ｂ. 民衆訴訟
ｃ. 公法上の当事者訴訟
ｄ. 公職選挙法上の選挙訴訟
ｅ. 不作為の違法確認の訴え
ｆ. 公法上の法律関係に関する確認の訴え
ｇ. 過去の
ｈ. 具体的な
ｉ. 特定の種類の`,c1:"１．ａ ｆ ｇ",c2:"２．ｂ ｄ ｇ",c3:"３．ｂ ｄ ｉ",c4:"４．ｃ ｅ ｈ",c5:"５．ｃ ｆ ｈ",c6:"６．ｃ ｆ ｇ",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2006",num:"39",subject:"gyo",q:`行政不服審査法に関する次のアからウまでの各記述について，正しいものに○，誤っているものに×を付した場合の組合せを，後記１から８までの中から選びなさい。
ア. 異議申立ては，処分庁又は不作為庁に対して簡易迅速に再考を促す行政不服申立てであり，審査請求をすることができるかどうかにかかわらず常にすることができる。
イ. 審査請求は，処分庁又は不作為庁以外の行政庁に対してする行政不服申立てであり，個別の法律又は条例に審査請求をすることができる旨の定めがなくてもすることができる。
ウ. 再審査請求は，審査請求についての審査庁の裁決に不服のある者が同じ審査庁に対して更に不服を申し立てるものであり，法律又は条例に再審査請求ができる旨の定めがあるときにすることができる。`,c1:"１．ア○ イ○ ウ○",c2:"２．ア○ イ○ ウ×",c3:"３．ア○ イ× ウ○",c4:"４．ア○ イ× ウ×",c5:"５．ア× イ○ ウ○",c6:"６．ア× イ○ ウ×",c7:"７．ア× イ× ウ○",c8:"８．ア× イ× ウ×",c9:"",c10:"",a:"6"},{year:"2006",num:"40",subject:"gyo",q:`行政不服審査法及び行政事件訴訟法の規定に関する次のアからエまでの各記述について，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
ア. 行政事件訴訟法には，取消訴訟の原告適格に関する規定があるが，行政不服審査法には，不服申立適格に関しそれに相当する規定は置かれていない。
イ. 行政事件訴訟法には，差止訴訟に関する規定があるが，行政不服審査法には，不服申立てによって処分の差止めを求めることについての規定は置かれていない。
ウ. 行政事件訴訟法における取消訴訟の出訴期間（処分又は裁決があったことを知った日を基準として算定されるもの）は，行政不服審査法における不服申立期間（処分があったことを知った日を基準として算定されるもの）と同じ日数である。
エ. 処分の際に誤った教示がされた場合の救済の問題に関しては，行政不服審査法には明文の規定があるが，行政事件訴訟法には明文の規定は置かれていない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1121"},{year:"2006",num:"1",subject:"min",q:"売主の担保責任に関する次の１から５までの記述のうち 誤っているものはどれか。",c1:"１．担保責任を免除する特約を結ぶことはできるが，その場合も，目的物について売主が自分で第三者のために設定した権利があったときは，売主は，責任を免れない。",c2:"２．目的物に地上権による制限があった場合の担保責任追及には期間制限があるが，抵当権の行使によって買主が権利を失った場合の担保責任追及には期間制限がない。",c3:"３．強制競売も売買であるから，担保責任は通常の売買と同じように課される。",c4:"４．数量指示売買において数量が多すぎた場合，売主は，民法の担保責任の規定の類推適用を根拠として代金増額を請求することはできない。",c5:"５．代金の一部だけを支払った段階で目的物についての隠れた瑕疵が明らかになり，損害賠償請求が認められる場合には，買主は，残代金の支払について，損害賠償との同時履行の抗弁を主張することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2006",num:"2",subject:"min",q:"事務管理に関する次の１から５までの記述のうち 誤っているものを２個選びなさい。",c1:"１．隣家の垣根を直して自分の家の防犯も図るという場合にも，他人のためにする意思があると認められる。",c2:"２．車にひかれそうになった人を突き飛ばして助けたが，その人の高価な着物が汚損した場合，着物について損害賠償をする必要はない。",c3:"３．管理者は，自己の財産に対するのと同一の注意をもって管理に当たらなければならない。",c4:"４．台風が来て倒れた隣家の垣根を直したが，隣家はその垣根を近くブロック塀にする予定だったという場合，修理箇所が翌週の別の台風でまた倒壊したときは，修理費用の償還請求はできなくなる。",c5:"５．親が，法律上定められた親の権限に基づいて，法定代理人として子の事務を行う場合にも，事務管理は成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"35"},{year:"2006",num:"3",subject:"min",q:"使用者責任に関する次の１から５までの記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．被用者の加害行為が使用者の事業の執行についてされたものであることは，被害者が証明する必要があるが，これはその加害行為が外形からしてあたかも被用者の職務の範囲内とみられる場合を含む。",c2:"２．使用者は，被用者の選任及び監督について相当の注意をしたことを証明した場合，責任を免れる。",c3:"３．使用者は，被用者の加害行為が被用者の職務権限内で適法に行われたものでないこと及び加害行為時に被害者がそのことを知っていたか 知らないことに過失があったことを証明すれば，責任を免れる。，",c4:"４．被用者の加害行為に先立って使用者から代理監督者に監督権限が授与されたことを被害者が証明した場合であっても，代理監督者は，被用者の選任及び監督について相当の注意をしたことを証明すれば，責任を免れる。",c5:"５．責任を負った使用者又は代理監督者は，被用者に対して求償し得るが，被用者がこの求償権を信義則上制限すべきことを基礎付ける事実を証明すれば，この求償権は制限される。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2006",num:"4",subject:"min",q:`代物弁済に関する次のアからオまでの記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 代物弁済は弁済と異なり法律行為であることは明らかであるが，債務消滅の法律効果は弁済と同一であるから，その証明責任は，債務の消滅を主張する側にある。
イ. 金銭をもってする代物弁済による債務消滅の効果を主張する場合，代物弁済の合意が成立したことのほか，金銭の交付や振込み等の主張立証が必要である。
ウ. 代物弁済として譲渡された土地の所有権の移転の効果を主張する場合，当事者の合意を主張立証すれば足り，対抗要件の具備まで主張立証する必要はない。
エ. 既存の金銭債務に関しての約束手形の振出しは，代物弁済と推定される。
オ. 土地をもってする代物弁済による債務消滅の効果を主張する場合，当事者の合意を主張立証すれば足り，対抗要件の具備まで主張立証する必要はない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2006",num:"5",subject:"min",q:`詐害行為取消権に関する次のアからオまでの記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 離婚に伴う慰謝料支払の合意は，その金額が不当に過大な場合には，相当な範囲を超える部分を詐害行為として取り消すことができる。
イ. 相続放棄は，他の相続人を有利にする場合には，詐害行為取消権の対象となる。
ウ. 不動産の贈与を詐害行為として取り消す場合には，債権者の債権額がその不動産の価額に満たないときであっても，贈与の全部を取り消すことができる。
エ. 詐害行為取消訴訟では，詐害行為をした債務者を被告にすることはできない。
オ. 弁済を受けたことにつき詐害行為取消権を行使された者は，自己の債権に係る按分額の支払を拒むことができる。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2006",num:"6",subject:"min",q:`親族関係に関する次のアからエまでの記述のうち，正しいものは，後記１から５までのうちどれか。
ア. 養子は，その養親の実子と婚姻をすることができない。
イ. 夫婦の一方が死亡すれば，生存配偶者の姻族関係は終了する。
ウ. 夫婦の一方は，他方が前婚でもうけた子に対して扶養義務を負うことはない。
エ. 夫婦の一方は，他方の兄弟姉妹の配偶者に対して扶養義務を負うことはない。`,c1:"１．ア",c2:"２．イ",c3:"３．ウ",c4:"４．エ",c5:"５．正しいものはない",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2006",num:"7",subject:"min",q:`代襲相続に関する次のアからオまでの記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 被相続人Ａの子Ｂの養子Ｃは，Ａの代襲相続人となり得ない。
イ. 被相続人Ａの子Ｂの子Ｃは Ａの死亡時に胎児であれば Ａの代襲相続人となる場合がある。
ウ. 被相続人Ａの子Ｂの子Ｃは，Ａの死亡以前にＢが死亡していなくても，Ａの代襲相続人となる場合がある。
エ. 被相続人Ａの配偶者Ｂの子Ｃは，Ａの代襲相続人となり得ない。
オ. 被相続人Ａの父Ｂの父Ｃは，Ａの代襲相続人となる場合がある。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2006",num:"8",subject:"min",q:`親子関係をめぐる訴訟に関する次のアからオまでの記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア. 妻は，夫が嫡出否認の訴えを提起せずに死亡した場合には，嫡出否認の訴えを提起することができる。
イ. 婚姻後２００日以内に生まれ嫡出子として届け出られた子の父子関係は，夫が子の出生を知った時から１年を経過しても争うことができる。
ウ. 認知の訴えは，父の死後も３年間は，検察官を被告として提起することができる。
エ. 嫡出推定が及んでいる子について，他の男性が認知をすることはできないが，子の側から認知の訴えを提起することはできる。
オ. 母子関係の存在を争う第三者は，母と子のどちらか一方が死亡した後は，訴えを提起することができない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2006",num:"9",subject:"min",q:"物権に関する次の１から５までの記述のうち 正しいものを２個選びなさい。",c1:"１．用益物権は，不動産にのみ成立する。",c2:"２．法定の担保物権は存在するが，法定の用益物権は存在しない。",c3:"３．対抗要件を備える必要がない物権の場合には，時間的に先に成立した物権が優先する。",c4:"４．物権法定主義の要請により，法律に規定された登記や引渡し以外には，物権変動の対抗要件は認められない。",c5:"５．法律や判例には，物の集合体に１個の物権を認めるものがある。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"15"},{year:"2006",num:"10",subject:"min",q:"物権的請求権に関する次の１から５までの記述のうち 判例の趣旨に照らし正しいものはどれか。",c1:"１．所有者が占有者に対して占有物の返還を求める場合，原告は，被告の占有が権原に基づかないことを立証する必要はなく，被告が自己に正当な占有権原のあることを立証しなければならない。",c2:"２．物権的請求権は，確定日付のある証書による通知又は承諾を対抗要件として譲渡することができる。",c3:"３．第一順位の抵当権の被担保債権が弁済されて消滅した場合，付従性に基づいて抵当権は当然に消滅するから，第二順位の抵当権者が第一順位の抵当権の登記の抹消を求める必要はなく，その登記の抹消を内容とする物権的請求権は生じない。",c4:"４．建物を所有することによって土地を不法占有している者がいる場合，土地の所有者は建物の所有者を相手に訴えを起こさなければならず，建物の登記名義人がだれかは被告を選ぶ基準とはならない。",c5:"５．抵当権の設定された土地が不法に占有されている場合，抵当権者は，その占有者に対し，抵当権に基づいて妨害の排除を求めることができるばかりでなく，自己に明渡しを求めることもできる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2006",num:"11",subject:"min",q:`Ａは，その所有する甲建物をＢに売る契約を結び，代金の一部を受領した。この事例に関する次のアからオまでの問題のうち，Ｂに所有権が移転しているか否かによって結論が決まるものをすべてあげたものは，後記１から５までのうちどれか。なお，所有権の移転時期を１点に決めることはできず 所有権の移転時期を論ずることに意味はないとする見解は採らないことを前提とする。
ア. ＡＢ間の契約締結前に，Ａが甲建物をＣに賃貸し，引渡しを終えていた場合，ＡＢ間において，ＢはＣに対する賃料をいつから取得することができるか。
イ. ＡＢ間の契約締結後，Ｂが甲建物について引渡しや移転登記を受ける前にＤが不注意で甲建物の一部を壊した場合，ＢはＤに対して修理費相当額の損害賠償を請求することができるか。
ウ. ＡＢ間の契約締結後，Ｅが甲建物をＡから買う契約を結んだ場合，ＢとＥのいずれが最終的に甲建物の所有者となるか。
エ. ＡＢ間の契約締結後，Ｂが甲建物について引渡しや移転登記を受ける前に地震で甲建物が全壊した場合，Ｂは残代金をＡに支払う必要があるか。
オ. ＡＢ間の契約締結後，Ｂが甲建物について引渡しや移転登記を受ける前に，ＡＢのいずれにも無断で甲建物に住み込んだＦがいる場合，Ａ自身がＦに明渡しを求めていても，ＢはＦに対して甲建物を自己に明け渡すように請求することができるか。`,c1:"１．ア イ ウ エ",c2:"２．ア イ オ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2006",num:"12",subject:"min",q:`ＡがＢに対してＡ所有の甲土地を売る契約を結び，Ｂが登記名義人となったが，Ｂの債務不履行を理由にＡがこの売買契約を解除した。一方，ＢはＣに甲土地を転売した。債務不履行を理由とする解除により契約が遡及的に消滅するとする考え方を直接効果説，将来に向かって失効するにすぎないとする考え方を間接効果説と呼ぶとして，次のアからオまでの記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 直接効果説によると，Ｃが解除前に登場した場合，民法第５４５条第１項ただし書によって解除の遡及効が制限される結果，Ｃは登記名義を得れば保護される。
イ. 直接効果説によると，Ｃが解除後に登場した場合，ＡとＣは対抗関係に立つから，Ｃは登記をしなければＡに対抗することができず，Ｂに登記名義が残っていれば，Ａが優先する。，
ウ. ＡがＢとの契約を債務不履行による解除ではなく合意解除した場合 どちらの説に立ってもＡは，登記名義を得なければ，甲土地の所有権の復帰をＣに対抗することができず，この結論は，Ｃの登場時期が解除の前後のいずれであっても同じである。，
エ. 間接効果説によると，解除の前後を問わず，ＡとＣは対抗関係に立ち，民法第５４５条第１項ただし書は注意規定としての意味しかない。
オ. 解除前に登場し登記をしたＣが，Ｂとの間の売買契約締結時にＢの債務不履行を知っていた場合，間接効果説では，原則としてＣが優先するが，直接効果説では，逆にＡが優先する。
（参照条文）民法
第５４５条 当事者の一方がその解除権を行使したときは，各当事者は，その相手方を原状に復させる義務を負う。ただし，第三者の権利を害することはできない。
２，３ （略）`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2006",num:"13",subject:"min",q:"Ａは，その所有する甲土地をＢに売却したが，その直後に重ねて甲土地をＣに売却し，さらにＣは直ちにＤに転売した。甲土地の登記名義は，Ａ・Ｃ・Ｄの合意に基づき，Ａから直接にＤに移転。された この事例に関する次の１から４までの記述のうち 誤っているものはどれか。",c1:"１．Ｂから占有者Ｃに対する所有権に基づく甲土地の明渡請求訴訟において，Ｂの登記具備がＣの対抗要件の抗弁に対する再抗弁であるという考え方を採れば，Ｃが背信的悪意者であるとする主張は，Ｂの登記具備に代わる再抗弁と位置付けられる。",c2:"２．背信的悪意者Ｃにも甲土地の所有権が帰属するという考え方を採れば，ＡからＢとＣに二重譲渡があったことをＤが知っていても，それだけでは，登記をしていないＢは甲土地の所有権取得をＤに対抗することができない。",c3:"３．背信的悪意者Ｃは甲土地の所有権を取得することができないという考え方を採れば，ＤがＡからＢとＣに二重譲渡があったことを知らずに登記をした場合でも，ＢはＤに甲土地の所有権取得を対抗することができる。",c4:"４．Ｂは，本来，Ｃと対抗関係に立つから，登記の効力については重大な利害関係を有するところ，Ｃは対抗要件を備えていないし，ＡからＤへの中間省略登記は無効であるから，Ｂは，ＣにもＤにも対抗することができる。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2006",num:"14",subject:"min",q:`Ａがその所有するギター （以下「甲」という）をＢに貸していたところ 無職のＣが金に困ってＢから甲を盗み，自分の物だと称して友人のＤに売却した。Ｄは，甲がＣの所有物だと過失なく信じて，その引渡しを受けた。この事例についての次のアからオまでの記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. Ａは，ＣＤ間の売買契約を追認すれば，Ｄに代金を請求することができる。
イ. 甲を盗まれたのはＢであるから，Ａは，Ｄに甲の返還を請求することができない。
ウ. Ｂは，盗まれた時から２年以内であれば，Ｄに甲を無償で返還するよう請求することができる。
エ. Ｃが未成年者で，Ｃの親権者がＣＤ間の売買契約を取り消せば，たとえＤが甲を買い受けてから２年が過ぎていても，Ｄは，甲の所有権を取得することができない。
オ. Ｂが盗まれた時から２年間は，Ｄは，甲の所有権を取得することができない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2006",num:"15",subject:"min",q:"根抵当権に関する次の１から５までの記述のうち，正しいものはどれか。",c1:"１．第一順位の根抵当権者は，後順位の担保権者が目的不動産について申し立てた競売手続が開始しても，競売時期の選択について後順位の担保権者より優先するから，元本を確定させず，競売手続を止めることができる。。",c2:"２．根抵当権も元本が確定すれば普通抵当権と同じに扱われるから，被担保債権の利息や損害金のうち根抵当権によって担保される部分は，最後の２年分に限定される。",c3:"３．根抵当権が優先的に弁済を受ける限度は極度額によって定まっており，後順位担保権者や一般債権者は，どのような債権が担保されるのかについては利害関係を有しないから，被担保債権の範囲の限定は，もっぱら抵当権設定者の保護を目的としている。",c4:"４．根抵当権の元本の確定前であっても，弁済期が到来した被担保債権をすべて弁済した第三者は，債務者に対する求償権を確実にするため，根抵当権者に代位して，根抵当権を行使することができる。",c5:"５．元本確定前の根抵当権は，被担保債権とは切り離された極度額の価値支配権であるから，その全部又は一部を譲渡することができるが，債務者や被担保債権も変わり得るから，根抵当権設定者の承諾を得なければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2006",num:"16",subject:"min",q:`甲動産を所有するＡが，これをＢに売り，さらにＢがＣに譲渡したが，ＡがＢから代金の支払を受けていない場合の法律関係に関する次のアからオまでの記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか 。
ア. Ａは，甲動産を占有する場合，Ｃからの甲動産の引渡請求に対し留置権を行使することができる。
イ. 甲動産がＡからＢへ，さらにＢからＣへ売買により引き渡された場合，Ａは，動産売買先取特権の行使として，甲動産を差し押さえることができる。
ウ. ＢからＣへの甲動産の譲渡が売買に基づくものである場合，Ｂに対して破産手続開始の決定がされたときであっても，Ａは，動産売買先取特権の行使として，ＢのＣに対する代金債権を差し押さえることができる。
エ. Ａ・Ｂ間の売買契約において，甲動産の所有権はＢがＡに代金を完済した時にＢへ移転する旨が定められていた場合，Ａは，甲動産をＢがＣに転売することに協力していたときであっても，Ｂに代金を支払って甲動産の引渡しを受けたＣに対し，所有権に基づき甲動産の返還を請求することができる。
オ. ＢからＣへの譲渡がＣの有する債権を担保するためのものである場合，甲動産がＡからＢに現実に引き渡され，さらにＢからＣに占有改定がされたときは，Ａは，動産売買先取特権の行使として，甲動産を差し押さえることができない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2006",num:"17",subject:"min",q:`甲土地の所有権を主張するＡに対し，ｐという時点から長い期間にわたり同土地を占有してきたＢが，訴訟において２０年の時効による所有権の取得を主張する場合，時効の援用の意思表示のほかに，次のアからカまでの事実のうち，民法の規定及び判例を考慮してＢが主張立証しなければならないものをすべて組み合わせたものは，後記１から５までのうちどれか。
ア. ｐ時点においてＢが甲土地を占有していたこと。
イ. ｐ時点から２０年後のｑ時点においてＢが甲土地を占有していたこと。
ウ. ｐ時点から，その２０年後のｑ時点まで，Ｂが甲土地を継続して占有したこと。
エ. ｐ時点における甲土地の所有者がＡであったこと。
オ. ｐ時点におけるＢの占有が自主占有であったこと。
カ. ｐ時点におけるＢの占有が平穏かつ公然のものであったこと。`,c1:"１．ア イ",c2:"２．ア イ エ",c3:"３．ウ オ カ",c4:"４．ア イ オ カ",c5:"５．ウ エ オ カ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2006",num:"18",subject:"min",q:"ＡがＢに土地を賃貸し，Ｂが同土地上に建物を建築して所有する場合において，ＡがＣに同土地を譲渡したときの法律関係に関する次の１から４までの記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．Ｂは，建物の所有権の登記をしているが土地の賃貸借の登記はしていなかった。この場合，Ｃが所有権移転登記を経ていないときは，Ｂは，Ｃに対し賃料支払を拒むことができる。",c2:"２．Ｂは，建物の所有権の登記をしているが土地の賃貸借の登記はしていなかった。この場合，所有権移転登記を経たＣのＢに対する建物収去土地明渡請求は認められる。",c3:"３．Ｂが土地の賃貸借の登記と建物の所有権の登記のいずれもしていなかったが，Ｃは，Ｂの賃借人としての土地利用を知っており，借地権の存在を前提とする低廉な価格で土地を買い，所有権移転登記を経た。この場合，ＣのＢに対する建物収去土地明渡請求は認められる。",c4:"４．Ｂは，土地の賃貸借の登記と建物の所有権の登記のいずれもしていなかったが，建物の登記記録に表題部所有者として登記されていた。この場合，ＣのＢに対する建物収去土地明渡請求は認められる。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2006",num:"19",subject:"min",q:`ＡのＢに対する金銭債権を担保するために，ＢがＣに賃貸している建物を目的とする抵当権が設定された場合におけるＡの物上代位権の行使に関する次のアからオまでの記述のうち，判例の趣旨，に照らし正しいものを組み合わせたものは 後記１から５までのうちどれか。
ア. Ｂの一般債権者ＤがＢのＣに対する賃料債権を差し押さえた後にＡのための抵当権設定登記がされた場合，Ａは，同じ賃料債権を差し押さえて優先弁済を受けることができる。
イ. Ａのために抵当権設定登記がされた後にＣに対する賃料債権がＢからＥに譲渡されてその第三者対抗要件が具備された場合，Ａは，同じ賃料債権を差し押さえて優先弁済を受けることができる。
ウ. Ａのために抵当権設定登記がされた後にＢの一般債権者ＦがＣに対する既発生の賃料債権を差し押さえ，その債権をＦに転付する旨の命令が効力を生じた場合，Ａは，同じ賃料債権を差し押さえて優先弁済を受けることができる。
エ. Ａのために抵当権設定登記がされるより前にＣがＢに対して金銭を貸し付けていた場合，Ａが賃料債権を差し押さえたときは，Ｃは，その貸金債権の弁済期が差押え後に到来するものであっても，当該貸金債権と賃料債権との相殺をもってＡに対抗することができる。
オ. Ｂの承諾を得てＣがＧに建物を転貸した場合，Ａは，建物の賃貸借により生ずる果実であるＣのＧに対する賃料の債権を差し押さえることができる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．イ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2006",num:"20",subject:"min",q:"成年後見制度に関する次の１から５までの記述のうち 誤っているものを２個選びなさい。",c1:"１．成年被後見人が建物の贈与を受けた場合，成年被後見人は，当該贈与契約を取り消すことができない。",c2:"２．成年被後見人が日常生活に関する行為以外の法律行為を行った場合，あらかじめ当該法律行為について成年後見人の同意を得ていたときでも，成年被後見人は，当該法律行為を取り消すことができる。",c3:"３．未成年後見人が選任されている未成年者については，後見開始の審判をして成年後見人を付することはできない。",c4:"４．被保佐人が，貸金返還請求の訴えを提起するには保佐人の同意を要するが，被保佐人を被告として提起された貸金返還請求訴訟に応訴するには保佐人の同意は要しない。",c5:"５．任意後見契約が登記されている場合に後見開始の審判をすることができるのは，本人の利益のために特に必要があると裁判所が認めるときに限られる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"13"},{year:"2006",num:"21",subject:"min",q:"消滅時効に関する次の１から５までの記述のうち 正しいものを２個選びなさい。",c1:"１．ＡのＢに対する売買代金債権について時効期間が経過した後，Ｂが当該代金債務を承認した場合であっても，その債務を被担保債権とする抵当権を設定した物上保証人Ｃは，その債務について消滅時効を援用することができる。",c2:"２．ＡのＢに対する債権について，連帯保証人Ｃが時効期間の経過前にＡに対して承認したときは，時効中断の効力は主債務者Ｂに対しても及ぶ。",c3:"３．商行為によって生じた債権で履行遅滞になったものについて，債務者が分割弁済をする旨の民事調停が成立したときは，当該債権の時効期間は１０年となる。",c4:"４．時効の完成後に，そのことに気付かないで債務を弁済した債務者は，債権者に対して，弁済金を不当利得として返還請求することができる。",c5:"５．ＡがＢから土地を買い受け，所有権移転登記をしないまま２０年が経過してから，ＡがＢに対して所有権に基づき移転登記手続を請求した場合，Ｂは，その登記請求権の消滅時効を援用することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"13"},{year:"2006",num:"22",subject:"min",q:"弁済充当に関する次の１から５までの記述のうち，正しいものはどれか。",c1:"１．両債務とも利息付きの場合，Ａは，Ｂに対して５０万円を支払うと同時に，これを乙債務の元本の弁済に充当することを指定することができる。",c2:"２．ＡがＢに１００万円を支払ったが，弁済の充当指定をしなかったので，Ｂが受領の時にこれを甲債務の弁済に充当する旨をＡに告げた場合，Ａは，直ちに異議を述べて，乙債務の弁済に充当することを指定することができる。",c3:"３．両債務とも無利息であり 甲債務の弁済期が到来しており 乙債務の弁済期が未到来の場合，Ａは，Ｂに１００万円を支払うと同時に，これを乙債務の弁済に充当することを指定することができる。",c4:"４．甲債務の弁済期が到来し，乙債務の弁済期が未到来の場合，ＡがＢに１５０万円を支払ったが，ＡＢともに弁済の充当指定をしなかったときは，甲債務が無利息，乙債務が利息付きであれば，１５０万円全額が乙債務の弁済に充当される。",c5:"５．両債務とも無利息で弁済期の定めがないが，甲債務が乙債務より先に成立した場合，ＡがＢに１５０万円を支払ったが，ＡＢともに弁済の充当指定をしなかったときは，５０万円が甲債務の弁済に，１００万円が乙債務の弁済に充当される。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2006",num:"23",subject:"min",q:`第三者のためにする契約に関する次のアからオまでの記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア. Ａが宝石をＢに売り，その代金をＢがＣに支払うとの契約を締結し，Ｃが受益の意思表示をした場合，ＢがＡの詐欺を理由にこの契約を取り消しても，ＣがＡの詐欺について善意無過失であるときは，Ｂは，詐欺取消しをＣに対抗することはできない。
イ. Ａが宝石をＢに売り，その代金をＢがＣに支払うとの契約を締結し，Ｃが受益の意思表示をした場合，Ａが宝石をＢに引き渡したが，Ｂが代金をＣに支払わないときは，ＣはＢに対して代金を自己に支払うよう請求することができるが，ＡもＢに対して代金をＣに支払うよう請求することができる。
ウ. Ａが宝石をＢに売り，代金は，ＡがＤと連帯してＣに対して負っている借入金債務を弁済するため，ＢがＣに支払うとの契約を締結した場合，既にＤがＣに対する債務を弁済していたときは，Ｃが受益の意思表示をした後であっても，Ａは，Ｂとの契約を合意解除することができる。
エ. Ａが宝石をＢに売り，代金の支払に代えて，ＢがＣに対して有する債権を放棄するとの契約を締結した場合，判例によると，Ｃが受益の意思表示をすれば，ＢのＣに対する債務免除の意思表示を要せずに，Ｃの債務は消滅する。
オ. Ａが自動車をＢから買い，その自動車をＢからＣに引き渡すとの契約を締結した場合，Ｃが引渡しを受けた当該自動車に隠れた瑕疵があったときは，Ｃは，ＡＢ間の売買契約を解除することができる。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2006",num:"24",subject:"min",q:`不動産賃貸借に関する次のアからオまでの記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア. 期間を３年間とする事務所用貸室の賃貸借契約において，賃貸人又は賃借人は期間中いつでも２か月前の予告により契約を解約することができるとの条項がある場合でも，賃貸人は，正当の事由の有無にかかわらず，この条項に従って契約を解約することはできない。
イ. 建物の所有を目的とする土地の賃貸借契約において，期間の定めがないときは，賃貸人は，正当の事由があれば，賃借人に１年前に解約申入れをすることにより，契約を終了させることができる。
ウ. 前妻Ｂとの間に既に独立した子ＣがいるＡが，アパートを賃借して内縁の妻Ｄとともに居住していたが死亡した場合，同アパートの賃借人の権利義務はＤが承継する。
エ. 土地の賃貸人が借地契約の更新拒絶をするためには，正当の事由がなければならないほか，契約期間の満了の１年前から６か月前までの間に賃借人に対して更新をしない旨の通知をしなければならない。
オ. 正当の事由の有無にかかわらず契約の更新がないこととする建物賃貸借契約の類型も認められている。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2006",num:"25",subject:"min",q:`表見代理についての民法の規定に関する次のアからオまでの記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 代理権消滅後の表見代理の規定は，法定代理に適用することはできない。
イ. 権限外の行為の表見代理の規定は，本人から一定の代理権を授与された者が本人自身であると称して権限外の法律行為をした場合に類推適用することができる。
ウ. 権限外の行為の表見代理の規定は，公法上の行為を委託された場合であっても，それが私法上の契約による義務の履行のためのものであるときは，適用することができる。
エ. 第三者に対して他人に代理権を与えた旨を表示した者は，その他人が代理権を与えられていないことを当該第三者が知り又は過失により知らなかったことを証明して，表見代理の責任を免れることができる。
オ. 権限外の行為の表見代理の規定は，自己の利益を図るためにその権限を行使した場合にも適用することができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2006",num:"26",subject:"min",q:"共有物の法律関係に関する次の１から５までの記述のうち，判例の趣旨に照らし誤っているものはどれか。",c1:"１．ＡＢが甲建物を持分各２分の１の割合で共有していた場合，Ａが死亡して相続人も特別縁故者もいないときは，甲建物の所有権はＢに帰属する。",c2:"２．ＡＢがＣ所有の土地上に建物を共有してその土地の所有権を侵害している場合，Ｃが建物収去土地明渡の訴えを提起するときは，ＡＢ双方を被告とする必要がある。",c3:"３．ＡＢが共有する土地について，その土地上に建物を所有して土地の占有を侵害するＣに対し建物収去土地明渡を求める訴えを提起する場合，Ａは，単独で当該訴えを提起することができる。",c4:"４．ＡＢが持分各２分の１の割合で共有している建物を目的とする使用貸借契約について Ａは， 単独でこれを解除することはできない。",c5:"５．ＡＢが共有している建物の管理費用をＡが立て替えた場合，Ａは，Ｂからその共有持分を譲り受けたＣに対し，当該立替金の支払を請求することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2006",num:"27",subject:"min",q:`債務の弁済に関する次のアからオまでの記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。 
ア. 弁済を受領した者は，弁済した者に対し受取証書を交付する義務があるが，その交付は，弁済と同時履行の関係に立つ。
イ. 売主が 売買目的物の引渡しの提供をした上 相当期間を定めて代金の支払を催告した場合，催告期間の経過後，解除権行使前に，買主から弁済の提供を受けたとしても，売主は，これを拒絶して解除権を行使することができる。
ウ. 持参債務の債権者が履行期前に遠方に転居した場合 目的物の運送費は債務者の負担となる。
エ. 売買契約の履行期に買主が履行場所に代金を持参すれば，売主が来なかったために代金を支払うことができなくても，現実の提供があったと認められる。
オ. 特定物の引渡しを目的とする債務が履行不能によって損害賠償債務に変わった場合，債権者の現在の住所において弁済しなければならない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2006",num:"28",subject:"min",q:"保証に関する次の１から４までの記述のうち，正しいものはどれか。",c1:"１．連帯保証契約は書面によらなければ効力を生じないが，単純保証契約であれば書面によらなくても効力を生じる。",c2:"２．継続的売買契約により生じる代金債務を主たる債務とする根保証契約がされた場合，主たる債務の元本，主たる債務に関する違約金，損害賠償その他その債務に従たるすべてのもの及びその保証債務について約定された違約金又は損害賠償の額について，極度額を定めなければ，根保証契約の効力は生じない。",c3:"３．債権者が，主たる債務者の財産について，金銭の支払を目的とする債権についての強制執行を申し立て，その手続の開始決定がされた場合，貸金等根保証契約における主たる債務の元本は，その申立ての時に確定する。",c4:"４．貸金債務を主たる債務とする根保証契約で個人が保証人のものについて，元本の確定期日を契約締結の日から４年を経過した日と定めた場合 元本確定期日は３年を経過した日とされる。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2006",num:"29",subject:"min",q:"ＸがＹに対し履行遅滞に基づく損害賠償を求める訴えを提起した。この場合の主張立証に関する，次の１から５までの記述のうち，誤っているものを２個選びなさい。",c1:"１．履行期にＹが債務の履行をしなかったことをＸが主張立証する必要はないとの見解に立つ場合，履行期に債務の履行をしたとのＹの主張は，Ｘの主張に対する否認となる。",c2:"２．債務の履行は可能であることが常態であるから，履行遅滞に基づく損害賠償請求訴訟では，履行期に履行が可能であったことをＸが主張立証する必要はなく，履行期に履行不能であったことをＹが主張立証しなければならない。",c3:"３．売買代金の履行遅滞に基づく損害賠償請求において，同時履行の抗弁権が存在することが遅滞の違法性を阻却するとの見解に立つ場合，Ｘが請求原因事実として自己の債務の履行又は履行の提供を主張立証しなければならない。",c4:"４．貸金債権の履行遅滞に基づく損害賠償請求において，Ｙは，履行遅滞が自己の責めに帰すべき事由に基づかないことを主張立証したときは，その責任を免れる。",c5:"５．Ｘが，売買代金の履行遅滞に基づき履行期の翌日から年５分の割合による損害賠償を求める場合，損害の発生とその数額を主張立証する必要はない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"14"},{year:"2006",num:"30",subject:"min",q:"ＡがＢに対し金銭債権甲の支払を求める訴えを提起したところ，Ｂは，Ａに対する別の金銭債権乙をもって対当額で相殺する旨の抗弁を主張した。この場合に関する次の１から５までの記述のうち，誤っているものはどれか。",c1:"１．乙が貸金債権である場合 弁済期の合意を消費貸借契約の成立の要件と考える見解に立つと，ＢがＡに対して相殺の抗弁を主張するためには，貸金債権乙の弁済期の合意の存在を主張立証する必要がある。，",c2:"２．Ｂの相殺の抗弁は，金銭債権甲の元本に対する抗弁となるだけでなく，相殺適状を生じた後の金銭債権甲の利息及び遅延損害金に対する抗弁にもなる。",c3:"３．金銭債権甲が不法行為に基づく損害賠償請求権である場合には，Ｂの相殺の抗弁は主張自体失当となる。",c4:"４．Ｂは，口頭弁論期日において相殺の意思表示をした場合，相殺の意思表示をしたことを立証する必要はない。",c5:"５．Ｂが相殺の意思表示に条件を付したことをＡが再抗弁で主張しても，主張自体失当となる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2006",num:"31",subject:"min",q:`次の図のアからエまでには，後記１から４までのいずれかの用語が入る。アからエまでにそれぞれ入るべき用語を選びなさい。
<img src="../../../src/assets/min200631.png">
１．定着物
２．従物
３．不動産に従として付合した物
４．不動産に付加して一体となっている物`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2134"},{year:"2006",num:"32",subject:"min",q:"無効又は取消しに関する次の１から５までの記述のうち，正しいものはどれか。",c1:"１．被保佐人がした行為で取り消すことができるものについて，保佐開始の原因が消滅していない状況において，被保佐人がこれを取り消した場合，当該行為は遡及的に無効となる。",c2:"２．所有権に基づく土地明渡請求訴訟において，被告は，原告の所有権取得行為が原告の錯誤によって無効であることを主張立証すれば，請求棄却判決を得ることができる。",c3:"３．詐欺による意思表示をした者が，相手方から，１か月以上の期間を定めて，その期間内に当該意思表示を追認するかどうかを確答すべき旨の催告を受けた場合，その期間内に確答を発しないときは，その行為を追認したものとみなされる。",c4:"４．仮装の売買契約の売主に対して金銭債権を有する者が善意で売買代金債権を差し押さえて取立訴訟を提起した場合，仮装の買主は，売買契約が虚偽表示であることを証明すれば，請求棄却判決を得ることができる。",c5:"５．強迫を受けてした動産売買契約を取り消した売主は，取消し前に買主から当該動産を善意かつ無過失で買い受けた者に対して 所有権に基づいて 当該動産の返還を求めることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2006",num:"33",subject:"min",q:"無権代理と相続に関する次の１から５までの記述のうち，判例の趣旨に照らし誤っているものを２個選びなさい。",c1:"１．無権代理人が本人の地位を単独相続した場合 本人が追認を拒絶した後に死亡したときでも，，無権代理行為は有効になる。",c2:"２．無権代理人が本人の地位を共同相続した場合，他の共同相続人のだれかが追認をすることに反対すれば，無権代理行為は有効にならない。",c3:"３．本人は，無権代理人の地位を単独相続した場合，無権代理行為の追認を拒絶することができる。",c4:"４．本人は，無権代理人の地位を単独相続した場合，無権代理人の相手方に対する責任を承継する。",c5:"５．無権代理人の地位を相続した後に本人の地位をも相続した第三者は，無権代理行為の追認を拒絶することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"15"},{year:"2006",num:"34",subject:"min",q:"Ａが１億円の財産を残して死亡した。Ａには，離婚した前妻Ｂとの間に子ＣとＤが，その後再婚した妻Ｅとの間に子ＦとＧがいた。Ｆには２０００万円の寄与分があり，また，Ａは，死亡する２年前にＣに対して生計の資本として１０００万円を贈与し，Ｇに１０００万円の遺贈をした。この事例における関係者の具体的相続分の額を記載した次の１から５までのうち 正しいものはどれか。",c1:"１．Ｃが０円，Ｄが2000万円，Ｅが4000万円，Ｆが4000万円，Ｇが０円",c2:"２．Ｃが０円，Ｄが1500万円，Ｅが4000万円，Ｆが3500万円，Ｇが1000万円",c3:"３．Ｃが 125万円，Ｄが1125万円，Ｅが4500万円，Ｆが3125万円，Ｇが 125万円",c4:"４．Ｃが 250万円，Ｄが1250万円，Ｅが5000万円，Ｆが3250万円，Ｇが 250万円",c5:"５．Ｃが1125万円，Ｄが1125万円，Ｅが4500万円，Ｆが3125万円，Ｇが 125万円",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2006",num:"35",subject:"min",q:`親権・監護権に関する次のアからエまでの記述のうち，誤っているものをすべて組み合わせたものは，後記１から５までのうちどれか。
ア. 嫡出でない子は，親権を行使する親の氏を称する。
イ. 協議離婚に際して，夫婦の間に子がある場合には，親権者のほかに監護権者を定めなければならない。
ウ. 父母は，その協議により，嫡出でない子について，一方が親権を，他方が監護権を行使すると定めることができる。
エ. 養子縁組に際して，養子となる者が１５歳未満である場合において監護権者があるときは，親権者の承諾のほかに監護権者の同意が必要である。`,c1:"１．ア イ",c2:"２．ア イ ウ",c3:"３．ア ウ エ",c4:"４．イ エ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2006",num:"36",subject:"syo",q:`商号に関する次のアからオまでの記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 個人商人の営業１個については，商号は１個に限られる。
イ. 商人は，その商号を登記しなければならない。
ウ. 会社でない者は，その商号中に「合名会社」という文字を用いることはできない。
エ. 名板貸しの事実を取引の相手方が知っていたときは，名板貸人の責任は生じない。
オ. 営業を譲り受けた商人が譲渡人の商号を引き続き使用する場合には，その譲受人も，譲渡人の営業によって生じた債務について，譲り受けた財産を限度として，弁済責任を負う。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2006",num:"37",subject:"syo",q:`支配人とその登記に関する次のアからオまでの記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 商人が支配人を解任したにもかかわらずその旨の登記をしていない場合，解任を知らなかった第三者との関係では，当該商人は，解任の事実を対抗することができない。
イ. 判例の趣旨に照らせば，商人が支配人を解任し，その旨の登記をした後は，第三者が正当な事由によってその登記があることを知らなかったときでない限り，当該商人は善意の第三者に対しても解任を対抗することができ，解任された支配人が支配人と称して当該商人をなおも代理して第三者と契約を締結したとしても表見代理が成立する余地はない。
ウ. 商人が支店の使用人であって支配人でないものに支配人の肩書を付与した場合，その者が支配人であると善意かつ無過失で信頼して契約を締結した第三者に対しては，当該商人は，契約の無効を主張することができない。
エ. 商人が支店の使用人であって支配人でないものに支配人の肩書を付与したとしても，当該商人がその者について支配人に選任した旨の登記をしない限りは，当該使用人が表見支配人に当たることはない。
オ. 商人が支配人を選任したが，その旨の登記をしていない場合において，その支配人が当該商人のために第三者と契約を締結したときは，当該商人は，当該選任の事実を知らない第三者に対して契約が有効であることを主張することはできない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2006",num:"38",subject:"syo",q:"会社法が採用している次の１から５までの規律のうち，株主保護を目的とするものでないものはどれか。",c1:"１．定款には，事業目的を記載し，又は記録しなければならない。",c2:"２．取締役の会社に対する責任を免除するには，原則として総株主の同意を要する。",c3:"３．会社が種類株式を発行するには 定款で 株式の内容など一定の事項を定めることを要する。",c4:"４．純資産額が３００万円を下回る場合には，剰余金の配当をすることができない。",c5:"５．取締役会設置会社の取締役が自己又は第三者のために会社と取引をしようとするときは，取締役会の承認を要する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2006",num:"39",subject:"syo",q:"株式会社の設立に関する次の１から５までの記述のうち 誤っているものはどれか。",c1:"１．株式会社が発行することのできる株式の総数は，会社成立時までには定款に定めておかなければならない。",c2:"２．発起人であると発起人以外の株式引受人であるとを問わず，それらの者が株主となるのは，その払込みをした時である。",c3:"３．現物出資財産が不動産であるときは，価額の相当性に関する弁護士の証明と不動産鑑定士の鑑定評価があれば，検査役の調査は不要である。",c4:"４．現物出資財産の価額の相当性について証明をした弁護士は，無過失であったことを証明すれば，不足額のてん補責任を免れる。",c5:"５．判例によれば，定款に定めのない財産引受けは，たとえ会社成立後，株主総会が特別決議をもってこれを承認しても，有効にはならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2006",num:"40",subject:"syo",q:`株主又は株式に関する次のアからオまでの記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 判例によれば，株式会社は，株主名簿名義書換未了の株式譲受人を株主として扱うことができる。
イ. 株式会社が特定の株主に対して無償で財産上の利益を供与したときは，当該株式会社は，株主の権利の行使に関し財産上の利益の供与をしたものとみなされる。
ウ. 株券を発行している会社における株式の譲渡は，株主名簿の書換えをしなければ，第三者に対抗することができない。
エ. 株式に係る株券を発行するには，その旨を定款に定めなければならない。
オ. 取締役会設置会社においては，株式の分割は，取締役会の決議によって行うことができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2006",num:"41",subject:"syo",q:`株式又は持分の譲渡に関する次のアからオまでの記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 合名会社の社員は，定款に別段の定めがない限り，他の社員の全員の承諾がなければ，その持分を他人に譲渡することができない。
イ. 合資会社における業務を執行しない有限責任社員は，定款に別段の定めがない限り，業務を執行する社員の全員の承諾があれば，その持分を他人に譲渡することができる。
ウ. 株式の発行後に定款を変更して当該株式について譲渡を禁止する定めを設けようとするときは，当該株式を有する株主全員の同意を得なければならない。
エ. 株式の譲渡による取得について，株主以外の者が取得することについてのみ会社の承認を要する旨を定款で定めることができる。
オ. 株式の譲渡による取得について，取締役会設置会社では，取締役会ではなく株主総会の承認を要する旨を定款に定めることはできない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2006",num:"42",subject:"syo",q:`自己株式に関する次のアからオまでの記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア. 株式会社が自社の発行した株式を取得したときは，相当の時期にその有する自己株式を消却し，又は処分しなければならない。
イ. 株式会社は，その保有する自己株式について，議決権を有しない。
ウ. 株式会社が株式の分割をするときは，その保有する自己株式の数も当該分割の割合に応じて増加する。
エ. 株式会社は，定款に定めがあるときは，その保有する自己株式について，剰余金の配当をすることができる。
オ. 甲株式会社を存続会社，乙株式会社を消滅会社とする吸収合併をする場合においては，甲株式会社は，その有する乙株式会社の株式についても自社の株式を割り当てることができる。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2006",num:"43",subject:"syo",q:"次の１から５までの記述のうち，株主総会に出席することができる代理人の範囲を株主に限る旨の定款の定めの効力に関する判例の考え方に対する批判としてふさわしいものはどれか。",c1:"１．代理人として議場へ入場させるかどうかについて会社側が恣意的な取扱いをした場合でも，。決議の効力を争えなくなる点で，不合理である。",c2:"２．同日に株主総会が開催される複数の会社の株主となっている法人株主が，株主でない自社の従業員を代理人として総会に出席させることができない点で，不便である。",c3:"３．単元株制度を採用しても株主管理コストの削減につながらず，不経済である。",c4:"４．総会当日の受付担当者が判断に窮する場合があり，不安定である。",c5:"５．総会をかく乱するおそれのある者が議場に入りやすくなる点で，不健全である。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2006",num:"44",subject:"syo",q:"株式会社の取締役に関する次の１から５までの記述のうち，誤っているものはどれか。",c1:"１．会社法上の公開会社においては，定款の定めによっても，取締役の資格を株主に限定することができない。",c2:"２．株主総会における取締役の選任決議の定足数は，定款の定めによっても，議決権を行使することのできる株主の議決権の３分の１を下回ることはできない。",c3:"３．株式会社は，定款において定めれば，株主からの請求があっても，取締役の選任の場合の累積投票を行わないことができる。",c4:"４．株式会社は，破産手続開始の決定を受け，復権していない者を取締役として選任することができる。",c5:"５．株主総会が取締役の解任決議をするには，正当な理由が必要である。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2006",num:"45",subject:"syo",q:`取締役会設置会社における代表取締役の代表行為に関する次のアからオまでの記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 取締役会において代表取締役の代表権に加えた制限は，善意の第三者に対抗することができない。
イ. 会社法の規定に基づき取締役会の決議を経なければならないにもかかわらず，これを経ないで代表取締役が会社を代表して第三者と契約を締結した場合であっても，代表権に加えた内部的制限に反するにすぎず，第三者が善意であれば，その契約は有効となる。
ウ. 代表取締役が自己の利益を図る目的で会社を代表して第三者と契約をした場合には，客観的にはその行為は代表権の範囲内にあるので，当該第三者が代表取締役の目的を知っていたとしても，その契約は有効である。
エ. 代表取締役が会社から買い受けた不動産を第三者に転売した場合において，当該第三者が当該会社と代表取締役との間の売買契約について取締役会の承認を受けていないことを知っていたことを会社が証明したときは，当該第三者は，当該不動産を有効に取得することができない。
オ. 取締役全員の任期が満了したが，会社の内紛で株主総会が開催できず取締役の選任決議ができない場合には，従前の代表取締役は，依然として会社を代表する権限を有する。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2006",num:"46",subject:"syo",q:"監査役設置会社の取締役又は監査役の報酬に関する次の１から５までの記述のうち，正しいものはどれか。",c1:"１．判例によれば，取締役の退職慰労金については，定款又は株主総会決議で取締役に対する支給額の総額を定めることを要する。",c2:"２．判例によれば，使用人兼務取締役については，取締役として受ける報酬に関する事項のみを。株主総会で決議するのでは足りず 使用人分給与についても株主総会で決議することを要する",c3:"３．判例によれば，各取締役の報酬額が具体的に定められた場合，株主総会決議をもってしても，当該取締役の同意なくその報酬額を減額することはできない。",c4:"４．監査役報酬について，株主総会決議では，監査役ごとに報酬額を定めることなく監査役全員に支給する総額のみを定め，各監査役に対する具体的配分は，取締役会の決定に委ねることができる。",c5:"５．低賃料での取締役への社宅の提供は，会社財産を社外に流出させるものではないから，定款又は株主総会決議で定める必要はない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2006",num:"47",subject:"syo",q:`資本金に関する次のアからオまでの記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 株式会社の資本金の額は，定款で定める必要はない。
イ. 設立に際して株主となる者が払い込んだ金額は，その全額を資本金としなければならない。
ウ. 株式会社が保有する自己株式を処分した場合には，処分の対価の額だけ資本金が増加する。
エ. 株式会社が資本金の額を減少する場合には，会社債権者に異議を述べる機会を与えなければならない。
オ. 株式会社が株式分割又は株式併合をしても，資本金の額は変わらない。`,c1:"１．ア イ",c2:"２．ア オ",c3:"３．イ ウ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2006",num:"48",subject:"syo",q:"株式会社の組織再編に関する次の１から５までの記述のうち，誤っているものはどれか。",c1:"１．吸収合併においては，吸収合併消滅会社の債務は当然に吸収合併存続会社に承継されるが，事業譲渡においては，譲渡会社が債権者の承諾を得て譲受会社に免責的債務引受けをさせない限り，譲渡会社の債務は存続する。",c2:"２．事業譲渡において，譲渡会社の事業の一部を譲り受ける場合には，譲受会社においては，株主総会の決議を必要としない。",c3:"３．吸収分割後吸収分割株式会社に対して債務の履行の請求ができない吸収分割株式会社の債権者は，吸収分割株式会社に対し，吸収分割について異議を述べることができる。",c4:"４．株式交換をする場合，株式交換完全子会社となる会社の債権者は，株式交換について異議を述べることができる。",c5:"５．株式交換においては，いずれの当事会社の反対株主も，会社法所定の手続に従って，自己が株主である会社に対し，自己の有する株式を公正な価格で買い取ることを請求することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2006",num:"49",subject:"syo",q:"株主総会決議取消しの訴えに関する次の１から５までの記述のうち，判例の趣旨に照らし誤っているものはどれか。 ",c1:"１．取締役会設置会社の代表取締役が取締役会決議に基づかないで株主総会を招集し，決議がされた場合には，株主は，株主総会決議取消しの訴えを提起することができる。",c2:"２．株主は，他の株主に対する招集手続の瑕疵を理由として，株主総会決議取消しの訴えを提起することができない。",c3:"３．株主総会が定款で定める取締役の員数を超える取締役を選任する決議をした場合には，株主は，株主総会決議取消しの訴えを提起することができる。",c4:"４．株主総会において，招集通知に記載されていない議題について決議がされた場合には，株主は，株主総会決議取消しの訴えを提起することができる。",c5:"５．会社の提案する議題に関して，株主が法定の行使期限までに会社に対し適法に議案を提案したにもかかわらず，会社がその要領を招集通知に記載又は記録しないまま，株主総会決議がされた場合には，株主は，株主総会決議取消しの訴えを提起することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2006",num:"50",subject:"syo",q:`株主総会決議に関する次のアからオまでの記述のうち，判例の趣旨に照らし誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 取締役を選任する株主総会決議が不存在の場合に，当該取締役によって構成される取締役会で選任された代表取締役が，その取締役会の招集決定に基づいて株主総会を招集しても，その株主総会での決議は，いわゆる全員出席総会にあたるなどといった特段の事情がない限り，不存在である。
イ. 取締役選任の株主総会決議取消訴訟が係属中，その決議に基づき選任された取締役が任期満了により退任し，その後の株主総会の決議によって取締役が新たに選任された場合には，特段の事情がない限り，決議取消しの訴えは，訴えの利益を欠く。
ウ. 株主総会決議取消訴訟において，株主総会招集の手続又はその決議の方法に性質，程度から見て重大な瑕疵がある場合であっても，その瑕疵が決議の結果に影響を及ぼさないと認められるときは，裁判所は，決議取消請求を棄却することができる。
エ. 株主総会決議取消しの訴えは，決議の日から３か月以内に提起しなければならず，期間経過後に新たな取消事由を追加して主張することはできない。
オ. 株主以外の者に新株を有利発行する旨の株主総会決議取消訴訟の係属中に，その決議に基づきその第三者に新株が発行されても，決議取消しの訴えの利益は失われない。`,c1:"１．ア ウ",c2:"２．ア エ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2006",num:"51",subject:"syo",q:"会社でない者の行為に関する次の１から５までの記述のうち，誤っているものはどれか。",c1:"１．電器部品の製造・販売業者が製品を販売する行為は，商行為である。",c2:"２．旅館業を営む者が無償で客を送迎することを引き受ける行為は，商行為である。",c3:"３．結婚の媒介を引き受ける行為は，営業としてするときは，商行為となる。",c4:"４．貸金業者による貸付行為は，営業としてするときは，商行為となる。",c5:"５．商人が従業員を雇い入れる行為は，商行為である。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2006",num:"52",subject:"syo",q:"商行為に関する次の１から５までの記述のうち 誤っているものはどれか。",c1:"１．商人間の売買において，その性質上，特定の日時までに履行しなければ契約をした目的を達することができない場合において，当事者の一方が履行をしないでその時期を経過したときは，相手方は，直ちにその履行の請求をした場合を除き，契約を解除したものとみなされる。",c2:"２．商人である対話者の間において契約の申込みを受けた者が直ちに承諾をしなかったときは，その申込みは，その効力を失う。",c3:"３．商行為の委任による代理権は，本人の死亡によっては，消滅しない。",c4:"４．商人が平常取引をする者からその営業の部類に属する契約の申込みを受けた場合において，遅滞なく，契約の申込みに対する諾否の通知を発しないときは，その申込みを拒絶したものとみなされる。",c5:"５．商人がその営業の範囲内において他人のために金銭の立替えをしたときは，当該商人は，当該他人に対して立替えの日以後の商事法定利率による利息を請求することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2006",num:"53",subject:"syo",q:"約束手形の裏書に関する次の１から５までの記述のうち，誤っているものはどれか 解答欄は。",c1:"１．裏書の連続の有無は，ある裏書の被裏書人欄の記載とその直後の裏書の裏書人欄の記載とを比較対照して判断する。",c2:"２．裏書の連続がある場合には，最終の所持人は手形の適法な所持人と推定される。",c3:"３．判例によれば，裏書の被裏書人欄の記載のみの抹消がされた場合には，その裏書は白地式裏書となる。",c4:"４．手形は法律上当然の指図証券であるから，裏書によらない手形の譲渡は無効である。",c5:"５．裏書人として署名して手形を譲渡する者は，適法な手形所持人に対する裏書人としての担保責任を負わない旨の裏書をすることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2006",num:"54",subject:"syo",q:"手形・小切手に関する次の１から５までの記述のうち，正しいものはどれか。",c1:"１．小切手面上に２本の平行線が引かれ 線内に何も書かれていないときは 小切手の支払人は。（，，，支払人の取引先に対してのみ支払うことができる。",c2:"２．確定日払の約束手形の満期として記載されている日の翌日にされた裏書は，指名債権譲渡の効力のみを有する。",c3:"３．利息文句の付された約束手形は，無効である。",c4:"４．約束手形の所持人は，その振出人に対して裏書譲渡することができる。",c5:"５．手形所持人は，手形行為の無権代理人に対して手形上の責任を追及することはできない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2006",num:"55",subject:"mso",q:"ＸがＹに対して貸金の返還を求める訴えを地方裁判所に提起する場合に関する次の１から５までの記述のうち，正しいものを２個選びなさい。",c1:"１．Ｙが未成年者である場合，Ｙの親権者であるＡ及びＢは，訴訟法上も法定代理人となり，共同して代理権を行う。",c2:"２．未成年者Ｙの親権者であるＡ及びＢが死亡したが未成年後見人がいない場合，Ｘは，未成年後見人が選任された後でなければ，Ｙに対する訴えを提起することができない。",c3:"３．Ｘは，裁判所の許可を得て，Ｘの未成年の子Ｃを，訴訟代理人とすることができる。",c4:"４．Ｘが，弁護士のＤ及びＥを訴訟代理人に選任した場合，Ｄ及びＥは各自Ｘを代理する。",c5:"５．ＸＹ間の契約締結時にたまたまＸと一緒にいたＸの未成年の子Ｆ（当時１３歳）は，証人となることができない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"14"},{year:"2006",num:"56",subject:"mso",q:"訴訟外において当事者間に成立した合意に関する次の１から５までの記述のうち，誤っているものを２個選びなさい。",c1:"１．甲請求についてはＡ裁判所の，乙請求についてはＢ裁判所の専属管轄に属する旨の合意がされている場合，原告はＡ裁判所に提起した一の訴えで甲乙両請求につき審判を求めることはできない。",c2:"２．訴えの取下げの合意が成立したにもかかわらず，原告が訴えを取り下げない場合，判例によれば，原告は権利保護の利益を喪失したものとみることができるから，訴えは却下される。",c3:"３．一定の事実を認め争わない旨の合意は，不適法で効力を認められない。",c4:"４．一定の証拠から特定の事実を認定しなければならないとする旨の合意は，不適法で効力を認められない。",c5:"５．第一審終局判決後，当事者双方が共に上告をする権利を留保して控訴をしない旨の合意が成立した場合，当該合意により控訴権が消滅するので，控訴が提起されてもその控訴は不適法である。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"13"},{year:"2006",num:"57",subject:"mso",q:"甲土地は，もともとＡが所有していた。Ｘは，Ａの唯一の相続人として，甲土地の所有権を相続により取得したと主張しているが，ＹはＡから，ＺはＸから，それぞれ甲土地を買い受けたと主張している。この事例に関する次の１から５までの記述のうち，正しいものを２個選びなさい。",c1:"１．甲土地につきＡからＹに所有権移転登記がされているので，ＸはＹに対して甲土地の所有権の確認と移転登記の抹消登記手続を求める訴えを提起したとする。この場合，Ｚは，Ｙに対しては所有権の確認とＡからＹへの所有権移転登記の抹消登記手続を求め，Ｘに対しては所有権の確認と相続登記をした上での所有権移転登記手続を求めて，ＸＹ間の訴訟に独立当事者参加をすることができるので，これに代わる別訴を提起することは許されない。",c2:"２．Ｚが上記１の独立当事者参加をした場合，ＹがＡから甲土地を購入した事実をＸが自白しても，Ｚがその事実を争っている限り，Ｚに対して自白の効力が及ばないのみならず，Ｘに対しても自白としての効力は認められない。",c3:"３．甲土地につき，ＡからＸ，ＸからＺへと所有権移転登記がされているので，Ｙは，Ｘ及びＺを共同被告として，Ｘに対しては所有権移転登記手続を求め，Ｚに対しては所有権移転登記の抹消登記手続を求める訴えを提起したとする。この訴訟において，ＹがＡから甲土地を購入した事実をＸが自白しても，Ｚがその事実を争っている限り，Ｚに対して自白の効力が及ばないのみならず，Ｘに対しても自白としての効力は認められない。，",c4:"４．上記３の訴訟において Ｙから同時審判の申出があっても 裁判所は 相当と認めるときは，，，弁論及び裁判を分離してすることができる。",c5:"５．Ｙは，上記３の訴えを提起するに当たり，Ｚに対する所有権移転登記抹消登記請求権を被保全権利として，甲土地について，仮差押命令の申立てをすることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"24"},{year:"2006",num:"58",subject:"mso",q:"判決等の効力に関する次の１から５までの記述のうち，判例の趣旨に照らし正しいものを２個選びなさい。",c1:"１．ＸのＹに対する所有権に基づく特定物の引渡請求訴訟において，Ｘに所有権があると認定して，Ｘの請求を認容する判決が確定した後，ＹがＸに対して同一物の所有権確認の訴えを提起した。この場合，Ｙの後訴請求に前訴判決の既判力が及び，後訴請求は退けられる。",c2:"２．約束手形の所持人Ｘが，手形の振出人であるＹ会社に対し，振出日欄白地のまま手形金を請求する訴えを提起し，請求棄却の判決が確定した後，Ｘが白地部分を補充して，再度Ｙに対し手形金を請求する訴えを提起した。この場合，Ｘの後訴請求は，既判力によって妨げられることはない。",c3:"３．ＸのＹに対する１０００万円の貸金返還請求訴訟において，Ｙが限定承認の抗弁を主張し，相続財産の限度で支払えとの判決が確定した後，ＸがＹに相続財産の一部の隠匿があったとして，改めて責任限定のない判決を求めて，同一の訴えを提起した。この場合，Ｘの後訴請求には前訴判決の効力は及ばない。",c4:"４．ＸがＹ会社に対して有する金銭債権についてその支払を命ずる判決が確定した後，当該債務の支払を免れるためＺ会社が設立された。これが法人格濫用に当たる場合，法人格否認の法理により，Ｙ会社の有する債務をＺ会社が履行する義務を負うとしても，Ｙ会社の受けた判決の既判力がＺ会社に及ぶことはない。",c5:"５．ＸのＹに対する所有権に基づく建物収去土地明渡請求訴訟において，訴訟上の和解により，Ｙは建物を収去し，敷地である土地を明け渡すべき義務を負うとされた。その後，Ｙから当該建物を借り受け，その建物の敷地である土地を占有するＺには，Ｚが和解調書の存在を知っていたか否かにかかわらず，当該調書の執行力が及ぶ。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"45"},{year:"2006",num:"59",subject:"mso",q:`次のアからオまでの記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア. 準備的口頭弁論においては，いわゆる電話会議システムの方法を利用することはできない。
イ. 弁論準備手続は，当事者双方が立ち会うことができる期日において行う。
ウ. 弁論準備手続において，文書の証拠調べをすることはできない。
エ. 書面による準備手続においては，いわゆる電話会議システムの方法を利用することはできない。
オ. 進行協議期日において，証拠調べと争点との関係の確認の協議を行った後に，新たな攻撃防御方法を提出した当事者は，相手方の求めがあるときは，相手方に対して，その協議前に提出することができなかった理由を説明しなければならない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2006",num:"60",subject:"mso",q:`文書に関する次のアからオまでの記述のうち，誤っているものを組み合わせたものは，後記１から５までのうちどれか。
ア. 裁判所は，文書提出命令の申立てに係る文書が，挙証者の利益のために作成されたか否かを判断するために必要があると認めるときには，いわゆるインカメラ手続を実施することができる。
イ. 作成名義人による署名がある私文書は，押印がなくても，法律上，真正に成立したものと推定される。
ウ. 私文書に作成名義人の印章による印影がある場合，その印影は，法律上，作成名義人の意思に基づいて顕出されたものと推定される。
エ. 裁判所は，契約書が真正に成立したことが認められたときは，作成名義人が当該契約書に記載されたとおりの契約締結の意思表示をしたことを認めることができる。
オ. 証拠保全も証拠調べであることに変わりはなく，裁判所は，文書の検証に応じない文書の所持者に対し，検証物提示命令を出すことができる。`,c1:"１．ア ウ",c2:"２．ア オ",c3:"３．イ エ",c4:"４．イ オ",c5:"５．ウ エ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2006",num:"61",subject:"mso",q:`判決に関する次のアからオまでの記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア. 被告が口頭弁論期日に欠席し，原告の主張事実を何ら争わない場合でも，裁判所は，判決原本を作成しなければ，請求認容判決を言い渡すことはできない。
イ. 被告が口頭弁論期日に欠席した場合において，裁判所が，審理の現状及び当事者の訴訟追行の状況を考慮して相当と認めるときには，出頭した原告の申出がなくても，終局判決をすることができる。
ウ. 建物収去土地明渡請求訴訟の係属中に，原告が土地所有権についての中間確認の訴えを提起し，原告の請求をいずれも認容する判決がされた場合には，被告は控訴して，この判決のうちの建物収去土地明渡請求についての部分のみならず，所有権確認請求についての部分に対しても不服を申し立てることができる。
エ. 甲建物及び乙建物の明渡しを求める訴訟で，先に裁判をするのに熟した甲建物の明渡請求について弁論を分離してされた請求棄却判決に対しては，独立して上訴することはできない。
オ. 貸金の返還を命ずる仮執行宣言付判決に対して控訴がされた場合，その判決に基づいて第一審原告が貸金の弁済を受けていたとしても，控訴裁判所は，当該弁済の事実を考慮して，第一審原告の貸金返還請求権が消滅したと判断してはならない。`,c1:"１．ア イ",c2:"２．ア エ",c3:"３．イ ウ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2006",num:"62",subject:"mso",q:"金銭債権の数量的一部請求訴訟に関する次の１から５までの記述のうち，判例の趣旨に照らし正しいものはどれか。",c1:"１．明示的一部請求訴訟においては債権全部についての審判が必要とされるので，一部請求部分が棄却された場合には，残額請求は既判力に反し許されない。",c2:"２．明示的一部請求訴訟においては債権全部についての審判が必要とされるので，時効の中断効は債権全部について生じる。",c3:"３．明示的一部請求訴訟において，被告が相殺の抗弁を提出した場合は，一部請求額から反対債権の全額を控除し，控除後の残額があるときはその残額を算定して請求認容額を決めるべきである。",c4:"４．明示的一部請求訴訟において過失相殺がされるべき場合，債権の全額を認定した上で，その全額から過失割合による減額をし，減額後の残額が請求額を超えなければこの残額を認容し，その残額が請求額を超えるときは請求の全額を認容する判決をするべきである。",c5:"５．明示的一部請求の訴えを提起した者が，訴求した債権の残額部分を自働債権として他の訴訟において相殺の抗弁を主張することは，重複する訴えの禁止の趣旨に照らして許されない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2006",num:"63",subject:"mso",q:"民事訴訟の控訴審に関する次の１から５までの記述のうち，誤っているものはどれか。",c1:"１．第一審判決が同一当事者間の数個の請求についてされた１個の判決である場合，その中の一つの請求についてだけ控訴の申立てがあっても，全請求について確定遮断及び移審の効力が生じる。",c2:"２．控訴裁判所は，第一審で提出された資料と控訴審で提出された資料を基礎として，不服申立ての限度で独自に事実認定を行い，審理の結果と第一審判決とを比較する形で，不服の当否を審理する。",c3:"３．攻撃防御方法の提出が時機に後れたかどうかは 第一審及び控訴審を通じて判断されるため，，控訴審の第１回期日に提出されても，時機に後れたものとして却下されることがある。",c4:"４．判例によれば，控訴審において訴えの交換的変更があった場合，新訴については控訴裁判所が事実上第一審裁判所として裁判するのであるから，新訴についての判決の結論が第一審判決の主文と全く同一となっても，控訴棄却の裁判をすべきではない。",c5:"５．主位的請求を認容した判決に対して控訴がされ，控訴裁判所が主位的請求に理由がないと判断した場合に，予備的請求について判断をすることは，相手方の同意がない限り，許されない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2006",num:"64",subject:"mso",q:`訴訟上の和解に関する次のアからオまでの記述のうち，正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア. 訴えの利益を欠く訴訟においてした訴訟上の和解は，無効である。
イ. 当事者双方が裁判所に出頭して合意をする方法以外の方法によっては，訴訟上の和解は成立しない。
ウ. 訴訟代理人が訴訟上の和解をするには，特別の委任を受けることを要する。
エ. 被告が訴訟物に関する原告の主張をすべて認めるが，訴訟費用については当事者の各自の負担とする旨の訴訟上の和解をすることは可能である。
オ. 訴訟上の和解の内容となった私法上の契約が解除された場合，判例によれば，同一の請求の訴えを改めて提起することはできない。`,c1:"３．イ エ",c2:"２．ア オ",c3:"１．ア イ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2006",num:"65",subject:"mso",q:"次の１から４までの記述のうち，正しいものはどれか。",c1:"１．外国の法規を適用すべき事件であっても，裁判所は，当事者が当該外国法の内容及び解釈を立証しない限り，これを適用することができない。",c2:"２．裁判官が他の事件を担当した結果たまたま知っている事実は，当事者が立証しない限り，判決の基礎とすることができない。",c3:"３．当事者が本人尋問の際に自己に不利な事実を認める旨を陳述したとしても，裁判上の自白とはならない。",c4:"４．当事者が裁判所に文書を提出して証拠申出をした後に当該証拠申出が不適法として却下されたとしても，当該文書の記載内容は，弁論の全趣旨として判決の基礎となり得る。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2006",num:"66",subject:"mso",q:`Ａ，Ｂ及びＣは，甲土地を３名で共有している（以下，Ａ，Ｂ及びＣを「Ａら３名」という 。）。この事案に関する次のアからオまでの記述のうち，判例の趣旨に照らし正しいものを組み合わせたものは，後記１から５までのうちどれか。
ア. Ａら３名がＹに対して，甲土地がＡら３名の共有であることの確認を求める訴えを提起した場合において，Ａが訴えを取り下げるとの書面を裁判所に提出し，Ｙがこれに同意したときは，裁判所は，Ｂ及びＣの訴えを不適法として却下しなければならない。
イ. 上記アのＡら３名の訴えが提起された場合において，Ａのみが口頭弁論期日に出頭していたときは，Ｙは，準備書面に記載していない事実を主張することができない。
ウ. 上記アのＡら３名の訴えが提起された場合において，Ａについて訴訟手続の中断の原因があるときは，Ｂ及びＣについても，中断の効力が生じる。
エ. 上記アのＡら３名の訴えが提起された場合において，裁判所がＡ及びＢ並びにＹのみを名宛人とする一部判決をしたときは，Ｃは，この判決に対して，控訴をすることができる。
オ. Ａ及びＢのみが原告となり，Ｙに対して，甲土地がＡら３名の共有であることの確認を求める訴えを提起した場合は，口頭弁論の終結前にＣがこの訴訟に共同訴訟人として参加することは許されず，裁判所は，訴えを不適法として却下しなければならない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．イ オ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2006",num:"67",subject:"mso",q:"訴訟行為に関する次の１から５までの記述のうち，誤っているものを２個選びなさい。",c1:"１．反訴を提起することができるのは，事実審の口頭弁論の終結に至るまでである。",c2:"２．請求の放棄は，上告審においてはすることはできない。",c3:"３．中間確認の訴えは，上告審においては提起することができない。",c4:"４．訴訟上の和解は，上告審においてもすることができる。",c5:"５．同時審判の申出は，第一審の口頭弁論の終結の時までにしなければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"25"},{year:"2006",num:"68",subject:"mso",q:"次の１から５までの各記述のうち，誤っているものを２個選びなさい。",c1:"１．攻撃又は防御の方法でその趣旨が明瞭でないものについて，当事者が必要な釈明をしない場合，裁判所は，その攻撃又は防御の方法を却下することができる。",c2:"２．事件が弁論準備手続に付された場合，当事者が故意又は重大な過失により弁論準備手続の終結までに提出しなかった攻撃又は防御の方法は，口頭弁論において提出することができない。",c3:"３．当事者本人を尋問する場合において，その当事者が，正当な理由なく出頭しないときは，裁判所は，尋問事項に関する相手方の主張を真実と認めることができる。",c4:"４．文書の所持者である第三者が文書提出命令に従わないときは，裁判所は，当該文書の記載に関する文書提出命令を申し立てた当事者の主張を真実と認めることができる。",c5:"５．当事者が，相手方の使用を妨げる目的で提出の義務がある文書を滅失させたときは，裁判所は，当該文書の記載に関する相手方の主張を真実と認めることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"24"},{year:"2006",num:"69",subject:"mso",q:"Ａは，Ｂに対して，貸金の返還を求める訴えを提起していたが，訴訟が第一審に係属している間に死亡した。Ａの相続人は，同人の子であるＣ及びＤの二人である。この事案に関する次の１から５までの記述のうち，正しいものはどれか。なお，１から４までの記述においては，Ａは，訴訟代理人を選任していなかったものとする。",c1:"１．裁判所がＡの死亡の事実を知ったときは，裁判所は，職権で，訴訟手続を中断する旨の決定をしなければならない。",c2:"２．Ｃは，Ａの死亡後，相続の放棄をすることができる間であっても，単独で訴訟手続を受け継ぐことができる。",c3:"３．Ｃ及びＤが訴訟手続の適法な受継の申立てをしたときは，その申立てをした時に，Ｂとの関係でも，中断は解消する。",c4:"４．上記３の申立てがあった場合，訴訟手続の中断中に裁判所がした訴訟行為について，中断解消後にＣ，Ｄ及びＢが責問権を放棄したときは，その訴訟行為は有効となる。",c5:"５．Ａが訴訟代理人を選任していたときは，裁判所が判決の言渡しをした時に訴訟手続が中断する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2006",num:"70",subject:"mso",q:"Ａは，Ｂに対し，金銭債権（以下「甲債権」という。）を有している。この事例に関する次の１から４までの記述のうち，判例の趣旨に照らし誤っているものを２個選びなさい。",c1:"１．Ｂが，甲債権の存否につきＡＢ間に争いがあるとして，Ａに対して甲債権に係る債務の不存在の確認を求める訴えを提起した場合，当該訴えが提起された時点で，甲債権の消滅時効は中断する。",c2:"２．Ａが動産の上に甲債権を担保するための留置権を有しており，Ｂからの当該動産の引渡請求訴訟においてＡが留置権の抗弁を主張した場合でも，その後に甲債権の消滅時効期間が経過すれば，Ｂは，当該訴訟において，同債権の時効消滅を主張することができる。",c3:"３．ＡがＢに対して甲債権以外の債権に基づいて訴えを提起した後，甲債権に基づく金銭の支払請求を追加する旨の請求の変更を行ったときは，請求の変更の書面が裁判所に提出された時に，甲債権の消滅時効は中断する。",c4:"４．ＡのＢに対する甲債権に基づく金銭の支払請求訴訟が二重に係属し，別個に審理されていた場合において，その後，その口頭弁論が併合され，前訴を維持する必要がなくなったとして，Ａが前訴を取り下げ，後訴を追行するときは，前訴の提起によって生じた甲債権の消滅時効の中断の効果は消滅しない。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"12"},{year:"2006",num:"71",subject:"mso",q:"次の１から５までの記述のうち，正しいものを２個選びなさい。",c1:"１．数個の請求についての審判を求める一の訴えを提起するには，その請求の基礎が同一でなければならない。",c2:"２．裁判所が口頭弁論の併合決定をした場合，その決定に不服がある当事者は，即時抗告をすることができる。",c3:"３．離婚の請求と，その離婚請求の原因である事実によって生じた損害の賠償請求とは，家庭裁判所に対する一の訴えですることができる。",c4:"４．物の引渡しを求める請求とその執行不能の場合に備えてその物の価格相当額の支払を求める請求（以下「代償請求」という。）を一の訴えでした場合において，裁判所は，代償請求に法律上の根拠がないと判断したときは，代償請求について判決をする必要はない。",c5:"５．同一の株式会社につき，その設立の無効の訴えに係る訴訟が数個同時に係属するときは，その弁論及び裁判は，併合してしなければならない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"35"},{year:"2006",num:"1",subject:"kei",q:`判例の立場に従って次の【事例】の甲の罪責について検討し，後記のアからオまでの【罪名】のうち，その罪名に係る犯罪が成立する場合には１を，成立しない場合には２を選びなさい。
【事例】
執行猶予中の甲は，居酒屋で飲食中，隣のテーブルの男Ａと口論になり，Ａの顔面をこぶしで殴打して鼻骨骨折等の傷害を負わせたが，店員らに現行犯逮捕され，Ｋ警察署の司法警察員に引き渡された。そして，司法警察員Ｘから，犯罪事実の要旨及び弁護人を選任することができる旨を告げられ，弁解の機会を与えられた。その際，甲は単純な事件なので起訴されることはないと思い，事実関係を争わなかった。そこで，Ｘは「傷害事件を起こしたことは間違いありません。弁解はありません。」などと供述録取書に録取して読み聞かせたところ，甲は間違いない旨を申し立てて署名・指印した。そのとき，Ｘは上司から呼出しを受けたため，供述録取書にＸの署名・押印及び契印をしないまま，取調室前の廊下にいた同僚の司法警察員Ｙに甲の監視を依頼して，取調室から出て行った。
甲がＹに傷害事件の見通しを尋ねたところ，Ｙは「被害者の傷害の程度も重いので，軽く考えない方がいいかもしれない。」 などと答えた。甲はＹの話を聞き，実刑になり刑務所に収容されるかもしれないと思い，憤激のあまり，Ｙに対し「ばか野郎。お前らはうそつきだ」などと怒号し，前記の供述録取書を破り捨てた上，制止するために立ちふさがったＹの顔面をこぶしで殴打して転倒させた。その後，甲はＫ警察署から逃げ出し，隣町に住む友人乙の居宅に逃げ込んだ。
甲は乙に対し，Ａが傷害を負ったことを隠し，単に暴行事件を起こして任意の取調べを受けている際に警察署から逃げ出してきたなどとうそを交えて話した上，かくまってくれるように頼んだところ，乙は甲の話を信じ，自宅の物置小屋に甲をかくまったが，その数時間後，警察官に発見された。
【罪 名】
ア. 証拠隠滅（刑法第１０４条）
イ. 公用文書等毀棄（刑法第２５８条）
ウ. 公務執行妨害（刑法第９５条第１項）
エ. 侮辱（刑法第２３１条）
オ. 犯人蔵匿教唆（刑法第１０３条・第６１条第１項）`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"21121"},{year:"2006",num:"2",subject:"kei",q:"刑法第３７条第１項の緊急避難の法的性格について，学生ＡとＢは，違法性阻却事由説と責任阻却事由説のいずれか異なる見解を採り，「緊急避難に当たる行為に対して正当防衛が成立し得るか。」という問題について議論したところ，学生Ａは「緊急避難は成立し得るが，正当防衛は成立し得ない。」との結論になり，学生Ｂは「正当防衛が成立し得る。」との結論になった。学生Ａが採る見解に関する記述として正しいものは，次の１から５までのうちどれか。",c1:"１．制限従属性説を前提として，この見解を採って検討すると，正犯と従犯の関係で，正犯が緊急避難に当たる行為をした場合，正犯の幇助をした者は不可罰となる。",c2:"２．この見解は，違法性阻却の実質的理由を優越的利益の保護に求める考え方と矛盾する。",c3:"３．この見解によれば，刑法上の緊急避難に当たる行為は，民法上も損害賠償責任を問われることはない。",c4:"４．法益の権衡が緊急避難の要件とされていることは，この見解の根拠となり得ない。",c5:"５．この見解に対しては，学生Ｂが採る見解から「無関係な他人のためにする緊急避難が認められていることを説明できない。」との批判がある。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2006",num:"3",subject:"kei",q:`殺人罪と自殺関与罪に関する次の【記述】中の①から④までの（ ）内に，後記の【語句群】から適切な語句を入れた場合，（ ）内に入るものの組合せとして正しいものは 後記１から５までの，うちどれか。なお，一つの（ ）内に二つ以上の語句が入る場合もある。
【記 述】
「（①） では 被害者に当該行為によって自らが死亡することの認識がないことから，自殺関与罪ではなく 殺人罪が成立する。（②）では，被害者に当該行為によって自らが死亡することの認識はあるものの，当該行為を行う意思決定過程に重大な瑕疵があることから，同様に，自殺関与罪ではなく，殺人罪が成立すると解することができる。ただし，そのうち（③）では，意思決定過程に瑕疵があるとはいえ，被害者が（④）ことから，殺人罪ではなく，自殺関与罪が成立すると解する見解がある。」
【語句群】
Ａ. 心中を望む被害者に対し，追死する意思がないにもかかわらず，これあるように装って欺き，追死するものと誤信させて死を決意させ，被害者自身をして毒薬を服用させ死亡させた事例
Ｂ. 詐言を用いて被害者を欺き，一時仮死状態に陥っても薬品を用いれば再び蘇生できるものと誤信させ，被害者自身に首をつらせて死亡させた事例
Ｃ. 強度の暴行を受けて肉体的にも精神的にも疲弊した状態にある被害者を脅迫して，高さ５０メートルの崖の上まで追い込み，更に暴行を加える態度を示して，逃げ場を失った被害者自身に崖から飛び降りさせて死亡させた事例
Ｄ. 被害者が通常の意思能力を欠き自殺の何であるかを理解せず，しかも命令には何でも服従するのを利用して，被害者自身に首をつらせて死亡させた事例
Ｅ. 死を強制されている
Ｆ. 自ら死を望んでいる`,c1:"１．①Ｄ ②Ａ，Ｂ，Ｃ ③Ｃ ④Ｅ",c2:"２．①Ｄ ②Ａ，Ｂ，Ｃ ③Ａ ④Ｆ",c3:"３．①Ｂ，Ｄ ②Ａ，Ｃ ③Ａ ④Ｅ",c4:"４．①Ｂ，Ｄ ②Ａ，Ｃ ③Ｃ ④Ｅ",c5:"５．①Ｂ，Ｄ ②Ａ，Ｃ ③Ａ ④Ｆ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2006",num:"4",subject:"kei",q:`次の【記述】中のアないしウの《 》内に後記の【見解】ⅠないしⅢから適切なものを，また，同【記述】中の①から⑤までの（ ）内に後記の【語句群】から適切な語句を，それぞれ入れた場合及び，《 》 （ ）内に入るものの組合せとして正しいものは，後記１から５までのうちどれか。
【記 述】
「刑法第６５条第１項及び第２項の解釈について，共犯の従属性を徹底する立場から，《ア》があるが，これに対しては，（①）という批判がある。また 『違法の連帯性，責任の個別性』という原則を強調する立場から，《イ》があるが，これに対しては，（②）という批判がある。さらに，法文の文理に忠実に解釈をする立場から，《ウ》があり，これが判例の考え方であるが，これに対しては，（③）という批判がある。 『賭博の非常習者である甲が，常習者である乙と共同して賭博を実行した。』という事例の甲の罪責を検討すると，《ウ》からは，（④）という結論になるのに対し，《ア》 からは，（⑤）という結論になる。《イ》からは，常習賭博罪という身分犯の性格をどのように考えるかによって結論が変わることになる。」
【見 解】
Ⅰ. 「同条第１項は真正身分犯についての規定であり，同条第２項は不真正身分犯についての規定である。」とする見解
Ⅱ. 「同条第１項は身分が違法性に関係する場合についての規定であり，同条第２項は身分が責任に関係する場合についての規定である。」とする見解
Ⅲ. 「同条第１項は真正身分犯・不真正身分犯を通じて共犯の成立についての規定であり，同条第２項は不真正身分犯の科刑についての規定である。」とする見解
【語句群】
ａ. 違法身分と責任身分を区別することは困難であり，また，違法身分と責任身分が混合している身分犯もある
ｂ. 真正身分犯が身分を連帯的に作用させ，不真正身分犯が身分を個別的に作用させることの実質的根拠を明らかにしていない
ｃ. 犯罪の成立と科刑が分離されることになる
ｄ. 単純賭博罪の共同正犯が成立し，科刑も単純賭博罪の刑による
ｅ. 常習賭博罪の共同正犯が成立し，科刑も常習賭博罪の刑による
ｆ. 常習賭博罪の共同正犯が成立し，科刑は単純賭博罪の刑による
（参照条文）刑法
第６５条 犯人の身分によって構成すべき犯罪行為に加功したときは，身分のない者であっても，共犯とする。２ 身分によって特に刑の軽重があるときは，身分のない者には通常の刑を科する。`,c1:"１．アⅠ−②ｃ⑤ｄ",c2:"２．アⅢ−①ｃ④ｅ",c3:"３．イⅡ−①ｂ⑤ｆ",c4:"４．イⅢ−③ｂ④ｆ",c5:"５．ウⅠ−②ａ④ｄ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2006",num:"5",subject:"kei",q:`判例の立場に従って次のアからオまでの【事例】の甲の行為（乙に対する関係に限る。）について検討し，横領罪と背任罪の成否に関する後記の【結論】ⅠないしⅢに分類した場合，各事例とその結論の組合せとして正しいものは，後記１から５までのうちどれか。なお，横領罪は業務上横領罪を含むものとする。
【事 例】
ア. 甲は，自己の所有する不動産を乙に売却して代金を受領した後，所有権移転登記をしない間に，乙に無断で，借金をしている丙のため，その不動産に抵当権を設定して登記を完了した。
イ. 甲は，乙から，乙がＡに金員を貸し付けて質物として交付を受けたＡ所有の高級腕時計の鑑定を頼まれ，乙のためにその時計を保管していたが，Ａから返還を求められたことに応じ，乙に無断で，その時計をＡに交付した。
ウ. 乙株式会社では，開発したコンピュータプログラムは乙会社の顧客にだけ使用させるとの内規があったにもかかわらず，そのプログラムを自己のＣＤ−ＲＯＭで管理していた乙会社営業課長甲は，内規に違反し，乙会社の顧客ではない知人Ａの依頼に応じ，乙会社に無断で，そのＣＤ−ＲＯＭを社外に持ち出して，プログラムをＡ方のコンピュータに入力した。
エ. Ａは，自己の所有する不動産を乙に売却して代金を受領した後，所有権移転登記をするまでの間に，その不動産を更に甲に売却しようとしたところ，甲は，Ａがその不動産を既に乙に売却済みかもしれないとの未必的な認識を有しながら，この点を確認しないまま，Ａからその不動産を購入して登記を完了した。
オ. 甲は，乙に対する債務の担保として，乙のため，自己の所有する不動産に抵当権を設定したが，抵当権設定登記をしない間に，乙に無断で，借金をしている丙のため，その不動産に一番抵当権を設定して登記を完了した。
【結 論】
Ⅰ. 横領罪が成立する。
Ⅱ. 背任罪が成立し，横領罪は成立しない。
Ⅲ. 横領罪も背任罪も成立しない。`,c1:"１．アⅠ−イⅠ",c2:"２．アⅡ−ウⅢ",c3:"３．イⅢ−エⅡ",c4:"４．ウⅡ−オⅠ",c5:"５．エⅢ−オⅡ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2006",num:"6",subject:"kei",q:`次の【記述】中の①から⑧までの（ ）内に後記の【語句群】から適切な語句を入れた場合，（ ）内に入るものの組合せとして正しいものは，後記１から５までのうちどれか。
【記 述】
「犯罪の終了時期に関し，各犯罪は即成犯，（①）及び（②）に区別される。殺人罪は即成犯であり（③）は（①）であり，（④）は（②）である。ある犯罪が（①）か（②）かの区別は，（⑤）の起算時期や（⑥）の成立範囲に影響があるとされる。この区別の基準について，実行行為を基準にする考え方と法益侵害を基準にする考え方がある。被害者を部屋に閉じ込めた後，行為者が眠ってしまった監禁の事例について，前者の考え方は，被害者を閉じ込めたまま解放しないことを実行行為と評価して継続犯であるとするのに対し 後者の考え方は，（⑦）を理由に継続犯であるとする。さらに，前者の考え方は，傷害罪について，一回の暴行によって傷害を発生させたような一般的な態様の場合は（①）とするが，（⑧）のような特別な態様の場合は，（②）であるとする。」
【語句群】
ａ. 継続犯
ｂ. 状態犯
ｃ. 窃盗罪
ｄ. 監禁罪
ｅ. 刑の時効
ｆ. 公訴時効
ｇ. 間接正犯
ｈ. 共犯
ｉ. 不作為による実行行為が継続していること
ｊ. 被害者の移動の自由が刻々と侵害されていること
ｋ. 身体を動かすたびに傷害を負うように被害者の身体をきつく縄で縛り継続的に傷害を与えた事例
ｌ. 刃物で被害者の手の指を切断し被害者の物をつかむ機能を永続的に侵害した事例`,c1:"１．①ｂ③ｃ⑤ｅ",c2:"２．①ａ④ｄ⑥ｇ",c3:"３．②ａ④ｃ⑦ｉ",c4:"４．③ｃ⑦ｊ⑧ｋ",c5:"５．⑤ｆ⑥ｈ⑧ｌ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2006",num:"7",subject:"kei",q:`文書偽造罪に関する次の【記述】中の①から④までの（ ）内に，後記の【語句群】から適切な語句を入れた場合，（ ）内に入るものの組合せとして正しいものは，後記１から５までのうちどれか。なお，一つの（ ）内に二つ以上の語句が入る場合もある。
【記 述】
「文書偽造の本質は，文書の名義人と作成者との間の人格の同一性を偽る点にあると解される。この点に関し，最高裁判所は 『自己の氏名が弁護士甲と同姓同名であることを利用して，[弁護士甲]の名義で，弁護士としての業務に関連して弁護士資格を有する者が作成した形式 内容の文書を作成した所為は，文書の名義人と作成者の人格の同一性にそごを生じさせたものというべきであり，私文書偽造罪に当たる。』旨判断した。この判断は，文書が弁護士としての業務に関連して弁護士が作成した形式，内容のものであることを，人格の同一性にそごが生じているか否かの重要な判断要素の一つとしたものと考えられる。文書が弁護士としての業務に関連して弁護士が作成した形式，内容のものである場合には，その文書を見る者は，その形式，内容から弁護士が作成した文書であることに重きを置いて，弁護士資格を有しない作成者とは別人格の者を名義人だと理解すると思われるからである。このように考えると（①）のように（②）には文書偽造罪は成立するが，（③）のように（④）には文書偽造罪は成立しないことになる。」
【語句群】
ア. 弁護士資格を有しないＡが，高級ホテルに宿泊するに当たり，見えを張るために，宿泊代金等を全額前払するとともに，「弁護士Ａ」の名義で，ホテルに提出する宿泊者カードを作成した場合
イ. 弁護士資格を有しないＢが，自己の所有する土地を売却するに当たり，売主欄に「弁護士Ｂ」と記載した売買契約書を作成した場合（Ｂに所有権移転登記や土地の引渡しを免れる意思はなく，実際にこれらを履行したものとする。）
ウ. 弁護士資格を有しないＣが，弁護士を装って行った法律相談の報酬を相談者に支払請求するため，「弁護士Ｃ」の名義で業務報酬請求書を作成した場合
エ. 弁護士資格を有しないＤが，弁護士を装って行った和解交渉の経過について依頼者に報告するため，「弁護士Ｄ」の名義で報告書を作成した場合
オ. 肩書が重要な意味を持つ形式，内容の文書を作成した場合
カ. 肩書が特に意味を持たない形式，内容の文書を作成した場合`,c1:"１．①イ，エ ②オ ③ア，ウ ④カ",c2:"２．①ウ，エ ②オ ③ア，イ④カ",c3:"３．①エ ②オ ③ア，イ，ウ ④カ",c4:"４．①エ②カ ③ア，イ，ウ ④オ",c5:"５．①ア，イ ②カ ③ウ，エ④オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2006",num:"8",subject:"kei",q:`故意に関する次の【見解】を採って後記１から５までの各記述を検討した場合，正しいものはどれか。
【見解】
「故意を認めるためには犯罪事実の認識が必要であるが，行為者が認識した犯罪事実と現実に発生した犯罪事実が異なっていても，両者が法定の範囲内において重なり合う限度で，軽い犯罪の故意を認めることができる。」`,c1:"１．甲が誤ってＶに重大な傷害を負わせたところ，Ｖと全く関係のない乙が，甲と何ら意思の連絡なく，まだ生きているＶを既に死亡したものと思って遺棄した場合，乙について死体遺棄罪の成立を肯定することができる。",c2:"２．甲が殺意をもってＶ１をねらいけん銃を発射したところ，Ｖ１に命中した弾丸が更にＶ２にも当たり，Ｖ１及びＶ２が死亡した場合，Ｖ１に結果が発生した以上，Ｖ２に対する殺人罪の成立を肯定する余地はない。",c3:"３．甲が殺意をもってＶをねらいけん銃を発射したところ，甲は弾丸を頭部に命中させて即死させるつもりだったが，頭部には命中せずにＶの下腿部に当たって受傷させ，搬送先の病院で死亡させた場合，殺人罪の成立は否定される。",c4:"４．甲が殺意をもってＶをねらいけん銃を発射したところ，弾丸はＶに命中せずにＶが散歩中に連れていたＶの犬に当たって死なせた場合，器物損壊罪の成立は否定される。",c5:"５．甲が乙に対しＶ宅に空き巣に入るように唆したところ，乙はＶ宅の戸締まりが厳重であったために空き巣に入ることをあきらめて帰宅したが，その途中，乙は，自宅近くでたまたま入ったコンビニエンスストアで急に空腹を覚え，自分で食べるためにパンを万引きした場合，甲について窃盗（既遂）教唆罪の成立を肯定することができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2006",num:"9",subject:"kei",q:`学生ＡとＢは，窃盗罪の保護法益について，「所有権その他の本権である。」とする見解と「占有それ自体である。」とする見解のいずれか異なる見解を採り，次の【事例】Ⅰ及びⅡの甲の行為が窃盗罪の構成要件に該当するか否かを議論したところ，学生Ａは【事例】ⅠとⅡで結論が異なったが，学生Ｂは結論が一致した。各見解に関する後記の【記述】１から５までのうち，正しいものはどれか。
【事例】
Ⅰ. 甲は，その所有するカバンを乙に窃取されたが，その数時間後，偶然，街中で乙を見付け，同人からそのカバンを奪った。
Ⅱ. 甲は，乙が所有者丙から賃貸借契約により借り受けているカバンを，乙から奪った。
【記 述】
（参照条文）刑法
第２４２条 自己の財物であっても，他人が占有し，又は公務所の命令により他人が看守するものであるときは，この章の罪については，他人の財物とみなす。`,c1:`１．学生Ａの採る見解は，Ⅰの事例の甲の行為について，自救行為として違法性が阻却されるから不可罰であると解することになる。これに対し，
学生Ｂの採る見解は，窃盗罪の構成要件該当性を欠くから不可罰であると解することになる。`,c2:"２．学生Ａの採る見解は，「事実としての財産的秩序」を保護しようとするものである。これに対し，学生Ｂの採る見解は，「私法上の正当な権利関係」を保護しようとするものである。",c3:"３．学生Ａの採る見解は，窃盗罪は「他人の財物」を客体とする犯罪であるから，自己の所有物が窃盗罪の客体となることを定めている刑法第２４２条は例外を定めた規定であると解することになる。これに対し，学生Ｂの採る見解は，同条は当然のことを定めた注意的な規定であると解することになる。",c4:"４．いずれの見解も，無関係な第三者が窃盗犯人の所持する盗品を奪った場合のその第三者の行為を窃盗罪の構成要件に該当するとするが，学生Ａの採る見解が，この結論は，窃盗犯人の占有を侵害したから当然であると解するのに対し，学生Ｂの採る見解は，この結論は，窃盗犯人が一度侵害した所有者の所有権をその第三者が再度侵害するからであると解することになる。",c5:"５．最高裁判所の判例の考え方は，学生Ｂの採る見解と異なり，学生Ａの採る見解と同じである。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2006",num:"10",subject:"kei",q:`刑罰に関する次のアからオまでの各記述中の（ ）内から適切な語句を選んだ場合，その組合せとして正しいものは，後記１から５までのうちどれか。
ア. 受刑者の自由をはく奪する刑罰が自由刑であるが，わが国の自由刑は，（ａ. 懲役 禁錮及び勾留・ｂ. 懲役，禁錮及び拘留）である。
イ. 受刑者から一定額の財産をはく奪する刑罰が財産刑であるが，わが国の財産刑は，（ｃ. 罰金及び過料・ｄ. 罰金及び科料）である。
ウ. 有期懲役は，（ｅ. １月以上１５年以下であり，加重する場合は２０年にまで・ｆ. １月以上２０年以下であり，加重する場合は３０年にまで）上げることができる。
エ. 初度の執行猶予を言い渡すことができるのは，宣告刑が，（ｇ. ３年以下の懲役若しくは禁錮又は５０万円以下の罰金・ｈ. ５年以下の懲役若しくは禁錮又は１００万円以下の罰金）の場合である。
オ. 再度の執行猶予の場合，被告人を，（ｉ. 必ず保護観察に付さなければならない・ｊ. 保護観察に付するかどうかは裁判所の裁量である）。`,c1:"１．ａｃｅｇｉ",c2:"２．ａｄｆｈｊ",c3:"３．ｂｃｅｇｊ",c4:"４．ｂｄｅｈｊ",c5:"５．ｂｄｆｇｉ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2006",num:"11",subject:"kei",q:`次の【事例】の甲について，強姦罪（刑法第１７７条）だけではなく強盗罪（刑法第２３６条第１項）の成立を認める見解と明らかに矛盾する記述は，後記１から５までのうちどれか。
【事例】
甲と乙は，Ｖ女を強姦しようと企て，共謀の上，暴行・脅迫を加えてＶ女を姦淫した。その後，乙は，強姦されて抗拒不能の状態になった同女に対し，更に執拗にわいせつ行為をしたが，甲は，見張りをしていた。その際，甲は，足下にＶ女のバッグがあることに気付き，財物奪取の犯意を生じ，乙がわいせつ行為を続けていて甲を見ておらず，また，強姦されたことに加え，執拗にわいせつ行為をされたことによってＶ女が全く反抗できない状態にあることを確認し，バッグ内から現金を取り出して自分のズボンポケットに入れた。
（参照条文）刑法
第１７７条 暴行又は脅迫を用いて１３歳以上の女子を姦淫した者は，強姦の罪とし，３年以上の有期懲役に処する。１３歳未満の女子を姦淫した者も，同様とする。
第１７８条第２項 女子の心神喪失若しくは抗拒不能に乗じ，又は心神を喪失させ，若しくは抗拒不能にさせて，姦淫した者は，前条の例による。`,c1:"１．他の目的による暴行・脅迫で被害者が反抗抑圧状態になった後に財物奪取の犯意を生じ，財物を奪取した事例において，犯意を生じた後，財物奪取の手段となる新たな暴行・脅迫が全くなく，単に反抗抑圧状態に乗じて財物を奪取したにすぎない場合に強盗罪の成立を認めることは，強盗の場合には強姦の場合の準強姦罪（刑法第１７８条第２項）のような規定がないのに，それと同じような行為を強盗罪として処罰することになり，罪刑法定主義に反し許されないと解すべきである。",c2:"２．他の目的による暴行・脅迫で被害者が反抗抑圧状態になった後に財物奪取の犯意を生じ，財物を奪取した事例において，犯意を生じた後，財物奪取の手段となる新たな暴行・脅迫がある場合は強盗罪の成立を認めることができる。ただし，その暴行・脅迫の程度について，一般的に，通常の強盗の場合に比べ軽い程度のもので足りると解すべきではない。",c3:"３．財物奪取の手段となる新たな暴行・脅迫がある場合に強盗罪の成立を認める点において，２の記述と同じである。なお，その暴行・脅迫の程度について，強姦が先行するような事例では，通常の強盗の場合に比べ軽い程度のものでも足りる場合があると解すべきである。ただし，新たな暴行・脅迫があるというためには，財物を奪取した行為者自身がその暴行・脅迫を行う必要があると解すべきである。",c4:"４．本件において，強姦後の乙のわいせつ行為は，強姦の共謀に基づくもので甲も罪責を負うべき共同の暴行行為であると解すべきである。",c5:"５．本件において，仮に，甲が財物奪取の犯意を生じた時点で，Ｖ女が強姦されて意識を失っていた場合には，窃盗罪が成立するにとどまり，強盗罪の成立を認めることはできないと解すべきである。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2006",num:"12",subject:"kei",q:`次のアからオまでの各事例の甲の罪責について，判例の立場に従って（ ）内から適切な語句を選んだ場合，その組合せとして正しいものは，後記１から５までのうちどれか。
ア. 甲は，乙から金員を恐喝しようと企て，乙に暴行を加えて監禁し，暴行により畏怖している乙を脅迫して金員を交付させた。甲には 監禁罪と恐喝罪が成立し，（ａ. 両罪は牽連犯である・ｂ. 両罪は併合罪である）。
イ. 甲は，無免許で普通乗用自動車を運転中，前方不注視の過失により歩行者乙に傷害を負わせる事故を起こした。甲には，道路交通法の無免許運転の罪と業務上過失傷害罪が成立し，（ｃ.両罪は併合罪である・ｄ. 両罪は観念的競合である）。
ウ. 甲は，乙の住居に放火してその建物を全焼させたが，さらに，隣接する丙の住居にも燃え移らせてその建物を半焼させた。甲には，（ｅ. ２個の現住建造物等放火罪が成立し，両罪は併合罪である・ｆ. １個の現住建造物等放火罪が成立する）。
エ. 甲は，通り掛かった乙と丙のうちの乙と肩が触れたことから口論になり，憤激のあまり，その腹部を足で蹴った。この様子を見た丙が文句を言ったので，甲は丙にも憤激し，その顔面をこぶしで殴って傷害を負わせた。甲には，乙に対する暴行罪と丙に対する傷害罪が成立し，（ｇ. 両罪は併合罪である・ｈ. 両罪は包括一罪である）。
オ. 甲は，一緒にいた乙と丙を同時に殺害する目的で，両名に向けて爆弾１個を投げ付けて爆発させ，両名を死亡させた。甲には 乙に対する殺人罪と丙に対する同罪が成立し，（ｉ. 両罪は観念的競合である・ｊ. 両罪は併合罪である）。`,c1:"１．ａｃｆｈｉ",c2:"２．ａｄｆｇｊ",c3:"３．ｂｃｅｇｉ",c4:"４．ｂｃｆｇｉ",c5:"５．ｂｄｅｈｊ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2006",num:"13",subject:"kei",q:`次の【事例】ⅠないしⅢについて，「ある被害者に対する業務上過失致死罪が成立するためには，行為時に，人の死傷の結果を伴う事故発生についての予見可能性とともに，その被害者の存在についての具体的な認識ないし認識可能性が必要か。」という点に関する後記の【見解】ＡないしＣを採って検討した場合，業務上過失致死罪が成立しないとの結論になる組合せを，後記１から５までのうち二つ選びなさい。
【事例】
Ⅰ. トラックの運転手甲は，助手席に１名，後部荷台に２名が同乗しているトラックを運転中，指定最高速度を超える高速度で運転したためハンドル操作を誤り，自車を道路脇の信号柱に衝突させた。そのため，後部荷台に同乗していた２名が同車から振り落とされて死亡したが，助手席の同乗者に被害はなかった。甲は，助手席に同乗者１名がいることは認識していたが，後部荷台に同乗者がいることは全く認識しておらず，認識可能性もなかった。
Ⅱ. トラックの運転手乙は，Ⅰの事例における甲と同様の事故を起こした際，助手席に同乗者１名がいることを認識していたほか，後部荷台に同乗者がいることについても認識可能性があったが，実際に２名が後部荷台に同乗していることは全く認識していなかった。
Ⅲ. トラックの運転手丙は，助手席に１名，後部荷台に２名が同乗しているトラックを運転中，交差点で一時停止をした後，周囲に人や車がいないのを確認した上，信号に従って同車を発進させた。その際，後部荷台に同乗していた２名がたまたま立ち上がろうとしてバランスを崩し，同車から落下して死亡した。丙は，助手席に同乗者１名がいることは認識していたが，後部荷台に同乗者がいることは全く認識しておらず，認識可能性もなかった。なお，丙は，発進の際，助手席の同乗者に衝撃を与えないように十分気を付けていたものであり，実際に助手席の同乗者は衝撃を受けず，被害もなかった。
【見解】
Ａ. 人の死傷の結果を伴う事故発生についての予見可能性は必要だが，被害者については，自車に同乗者がいるという認識ないし認識可能性は不要である。
Ｂ. 事故発生についての予見可能性に関しては見解Ａと同じである。被害者については，自車のどこかに少なくとも１名の同乗者がいるという認識ないし認識可能性があれば足り，そのほかにも同乗者がいるという認識ないし認識可能性までは不要である。
Ｃ. 事故発生についての予見可能性に関しては見解Ａと同じである。被害者については，自車の後部荷台に少なくとも１名の同乗者がいるという認識ないし認識可能性が必要だが，そのほかにも同乗者がいるという認識ないし認識可能性までは不要である。`,c1:"１．Ⅰ−Ａ",c2:"２．Ⅰ−Ｃ",c3:"３．Ⅱ−Ｂ",c4:"４．Ⅱ−Ｃ",c5:"５．Ⅲ−Ａ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"25"},{year:"2006",num:"14",subject:"kei",q:"［汚職の罪］に関する次の１から５までの各記述のうち，判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．市役所の建築課長甲は，人事異動により同じ市役所の保健課長に転任したが，保健課長に就任した後，建設業者乙から，建築課長当時にその職務に関し有利な取り計らいを受けたことの謝礼として現金３０万円を収受した。甲に収賄罪（刑法第１９７条第１項前段）が成立する。",c2:"２．県知事甲は，近く施行される次期県知事選挙に立候補する決意を固めていたが，任期満了前に，土木業者乙から，再選後に知事が執行する県の公共工事の受発注に当たり有利な取り計らいをしてほしい旨の依頼を受け，その謝礼として現金１００万円を収受した。甲に受託収賄罪（刑法第１９７条第１項後段）は成立しない。",c3:"３．市長甲は，乙から，その長女を市役所の職員に採用してほしい旨の依頼を受け，これを引き受けたが，その謝礼として甲の友人丙に現金３００万円を供与するように乙に要求した。乙はその要求どおり丙に３００万円を供与したが，丙は賄賂であることを全く知らなかった。甲に第三者供賄罪（刑法第１９７条の２）は成立しない。",c4:"４．暴力団事件の捜査に従事していた警察官甲は，乙から，同人が所属する暴力団の捜査情報を漏えいしてほしい旨の依頼を受け，その謝礼として現金１００万円を収受したが，結局，甲は乙に捜査情報を漏えいしなかった。甲に加重収賄罪（刑法第１９７条の３第１項）が成立する 。",c5:"５．市役所の職員甲は，Ａ税務署職員乙の幼なじみであったが，Ａ税務署管内に居住する丙に依頼され，公務員の地位を離れ単に旧友として，乙に対し，丙の所得税の過少申告を是認する取り計らいをするようにあっせんし，その謝礼として丙から現金１００万円を収受した。甲にあっせん収賄罪（刑法第１９７条の４）が成立する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2006",num:"15",subject:"kei",q:`次の【事例】の甲の罪責に関する後記の【記述】中の（ ）内から適切な語句を選んだ場合，その組合せとして正しいものは，後記１から５までのうちどれか。
【事例】
甲は，被害者乙に罵倒されたことに憤激し，乙に対し，暴行の故意で，その顔面をこぶしで殴打し，胸腹部を足で蹴る暴行を長時間にわたって継続的に加え，乙に顔面及び胸腹部打撲の傷害を負わせた上，最終的にその腹部を足で蹴った結果，内臓破裂の傷害を負わせて同人を死亡させた。甲は，暴行を開始した当初は責任能力に何ら問題はなかったが，暴行の開始後に飲酒し始め，その後も暴行を継続しながら飲酒し続けたため次第に酩酊し，顔面及び胸腹部打撲の傷害を負わせた時点では責任能力を有していたものの，犯行の途中で病的酩酊になり，乙の腹部を足で蹴って致命傷である内臓破裂の傷害を負わせた時点では，心神喪失の状態になっていた。
【記述】
「傷害致死の実行行為を，致命傷である内臓破裂の傷害を発生させた直接の原因である『乙の腹部を足で蹴った行為』であると解した場合には，行為と責任の同時存在の原則に（ａ. 例外を認めたとしても・ｂ. 例外を認めない限り），傷害致死罪の成立は認められない。これに対し，傷害致死の実行行為を，甲が心神喪失の状態となった原因である『飲酒行為』であると解した場合には，行為と責任の同時存在の原則の（ｃ. 枠内で・ｄ. 例外として）傷害致死罪の成立を認メることが可能である。後者の見解は，（ｅ. 間接正犯・ｆ. 原因において自由な行為）として可罰性を認めるものであるが，この見解を採ると，（ｇ. 間接正犯・ｈ. 原因において自由な行為）において構成要件的結果を惹起することについての認識・予見のほかに，他人を道具として利用することについての認識・予見が必要とされているのと同様，自己を道具として利用することについての認識・予見が必要と解される。この事例において，甲は，飲酒し始めた時点で既に乙に対する憤激から暴行を開始しており，その後も憤激が冷めることなく暴行を継続しながら飲酒し続けているのであるから，自らが心神喪失の状態と（ｉ. なることなく・ｊ. なった後も）乙に対する暴行を継続することについての認識・予見があったと解される場合もあり，その場合には傷害致死罪が成立すると思われる。」`,c1:"１．ａｃｅｈｉ",c2:"２．ａｄｆｇｊ",c3:"３．ｂｃｆｇｊ",c4:"４．ｂｄｅｈｉ",c5:"５．ｂｄｆｇｊ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2006",num:"16",subject:"kei",q:`学生ＡとＢは，侮辱罪と名誉毀損罪について，次のとおり会話している。【発言】中の（ ）内から適切な語句を選んだ場合，その組合せとして正しいものは，後記１から５までのうちどれか。
【発言】
学生Ａ. 私は，侮辱罪の保護法益は，①（ａ. 外部的名誉・ｂ. 名誉感情）であると解し，名誉毀損罪の保護法益と②（ｃ. 同じである・ｄ. 異なる）と考える。
学生Ｂ. 反対である。私は，侮辱罪の保護法益は，③（ｅ. 外部的名誉・ｆ. 名誉感情）であると解する。私のように考えて初めて名誉毀損罪と侮辱罪の法定刑に著しい差があることの説明が可能になると思う。
学生Ａ. いや，その点は，私の見解でも，④（ｇ. 公然性・ｈ. 事実の摘示）の有無の違いという説明が可能である。Ｂさんの見解では，侮辱罪の成立に，⑤（ｉ. 公然性・ｊ. 事実の摘示）が要件とされていることを説明できないと思う。
学生Ｂ. いや 侮辱罪は，（③）を侵害した場合で（⑤）がある場合にのみ処罰する趣旨であるという説明が可能である。
学生Ａ. しかし，Ｂさんの見解を徹底すると，保護法益である（③）を明らかに侵害するような⑥（ｋ. 面前での侮辱行為・ｌ. 公の場所での侮辱行為）でも，侮辱罪の成立が否定されることになり，妥当ではないと思う。保護法益に関するＢさんの考え方には疑問がある。
学生Ｂ. 保護法益に関する考え方の違いは，法人に対する侮辱罪の成否に影響することになるね。
学生Ａ. そのとおりだ。Ｂさんと異なり，私は，法人に対して侮辱罪が⑦（ｍ. 成立する・ｎ.成立しない）と考える。この考え方は，最高裁判所の判例の見解と⑧（ｏ. 同じである・ｐ. 異なる）。`,c1:"１．①ｂ④ｇ⑦ｎ",c2:"２．①ａ⑤ｉ⑧ｏ",c3:"３．②ｃ⑥ｌ⑧ｐ",c4:"４．③ｅ④ｈ⑥ｋ",c5:"５．③ｆ⑤ｊ⑦ｍ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2006",num:"17",subject:"kei",q:"詐欺罪に関する次の１から５までの各記述のうち，判例の立場に従って検討した場合，正しいものはどれか。",c1:"１．覚せい剤を購入すると偽って買付資金名下に金員の交付を受けた場合，相手方には交付した資金の返還請求権がないので，詐欺罪は成立しない。",c2:"２．署名欄を空白にした借用証書を作成して他の文書とともに署名を求め，相手方に借用証書と気付かせずにその署名欄に署名させた場合，相手方に債務を負担させたことになるので，詐欺罪が成立する。",c3:"３．係員に偽りの申立てをして旅券の交付を受けた場合，旅券は財産的価値を欠き財物に当たらないので，詐欺罪は成立しない。",c4:"４．他人から預金通帳と届出印鑑を一時的に預かったにすぎない者が，それを利用して勝手に銀行窓口で銀行員から預金払戻名下に金員の交付を受けた場合，預金の払戻権限がないのにそれがあるように偽っているので，銀行員を相手方とする詐欺罪が成立する。",c5:"５．減量に効果があると偽って健康食品を購入させ代金名下に金員の交付を受けた場合，減量効果が全くなくても，販売価格が適正妥当であれば相手方に経済的損失がないので，詐欺罪は成立しない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2006",num:"18",subject:"kei",q:`因果関係に関する次の【見解】ＡないしＣを採って後記の【事例】Ⅰ及びⅡを検討し，後記のアからエまでの各記述につき，それぞれ正しい場合には１を，誤っている場合には２を選びなさい。
【見解】
因果関係を肯定するためには，
Ａ. その行為がなかったならばその結果が発生しなかったであろうという条件関係が必要であり，それで足りる。
Ｂ. Ａにいう条件関係の存在を前提に，行為当時一般人に認識・予見可能だった事情及び行為者が特に認識・予見していた事情を基礎として，その行為からその結果が生ずることが相当であると認められることが必要である。
Ｃ. Ａにいう条件関係の存在を前提に，行為当時存在したすべての事情及び一般人に予見可能だった行為後の事情を基礎として，その行為からその結果が生ずることが相当であると認められることが必要である。
【事例】
Ⅰ. 甲がＶを後ろから突き飛ばしたところ，Ｖは転倒して頭部打撲の傷害を負った。Ｖは心臓に異常があり，心筋こうそくが起こりやすい状態だったため，転倒により心筋こうそくが起こって死亡した。
Ⅱ. 甲がＶの頭部を鉄パイプで殴打したところ，Ｖは脳挫傷の傷害を負い意識不明の重体になったが，甲はＶを路上に放置したまま立ち去った。その直後，その場所を通り掛かった乙運転の自動車がＶをひいたため，Ｖは内臓破裂により即死した。なお，Ｖは，乙運転の自動車にひかれなくても，翌日には脳挫傷により死亡していたと認められた。
【記述】
ア. Ⅰの事例で，行為当時，一般人はＶに心臓の異常があるという事情を認識・予見することができなかったが，甲はその事情を認識・予見していた場合，Ａ及びＢの見解からは，甲の行為とＶの死亡との間の因果関係が肯定される が ， Ｃの見解からは，因果関係が否定される。
イ. Ⅰの事例で，行為当時，一般人はＶに心臓の異常があるという事情を認識・予見することができなかったし，甲も認識・予見していなかったが，甲はその事情を認識・予見することができた場合，ＡないしＣのいずれの見解からも，甲の行為とＶの死亡との間の因果関係が肯定される。
ウ. Ⅱの事例で，行為当時，一般人はＶが放置された路上が自動車の通行のある場所であるという事情を認識・予見することができたが，甲はその事情を認識・予見することができなかった場合，ＡないしＣのいずれの見解からも，甲の行為とＶの死亡との間の因果関係が肯定される。
エ. Ⅱの事例で，乙の行為に過失があった場合，Ａの見解からは，乙の行為とＶの死亡との間の因果関係が肯定されるが，Ｂ及びＣの見解からは，因果関係が否定される。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2212"},{year:"2006",num:"19",subject:"kei",q:`判例の立場に従って次のアからエまでの各事例の甲の罪責について検討し，正しい場合には１を，誤っている場合には２を選びなさい。
ア. 甲は，木造アパートの空室の壁際に置いてあったダンボール箱に火をつけ，火を板壁に燃え移らせて放火したが，板壁の一部を焼損した時点で，アパートの住民に消し止められた。甲は，そのアパートに人が居住している部屋があることを認識していたが，人が居住する部屋に延焼するかもしれないとは認識しておらず，空室のみを焼損するつもりだった。甲に現住建造物等放火既遂罪が成立する。
イ. 甲は，家屋の居住者全員を殺害した後，証拠を隠滅するためにその家屋を焼失させようと考え，室内の布団に放火したが，布団を焼損した時点で，隣家の住民に消し止められた。甲に非現住建造物等放火未遂罪が成立する。
ウ. 甲は，妻と二人で自宅に居住していたが，甲の意図を知らない妻の旅行中，火災保険金を詐取する目的で自宅に放火して全焼させた。甲は，隣家に延焼することは予期していなかったが，隣家も延焼した。甲に延焼罪が成立する。
エ. 甲は，宿泊していたホテルの部屋に放火しようと考え，窓のカーテンに火をつけたが，カーテンを焼損した時点で，従業員に消し止められた。甲に現住建造物等放火既遂罪が成立する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1122"},{year:"2006",num:"20",subject:"kei",q:`刑法第１条に関する次の【見解】を採って後記１から５までの各記述を検討した場合，誤っているものはどれか。なお，日本国民が被害者である場合を除き，殺人罪に関する国外犯処罰規定はないことを前提とする。
（参照条文）刑法
第１条 この法律は，日本国内において罪を犯したすべての者に適用する。
２ 日本国外にある日本船舶又は日本航空機内において罪を犯した者についても，前項と同様とする。
【見解】
「刑法第１条第１項は，日本国内に犯罪地がある場合に刑法を適用する属地主義の原則を規定しているが，同項の『罪を犯した』とは，犯罪を構成する事実の全部又は一部が生じたことをいう。なお，狭義の共犯の場合，正犯行為が行われた場所が共犯の犯罪地になるほか，共犯行為が行われた場所も共犯の犯罪地になるが，共犯行為が行われた場所は正犯の犯罪地にはならない。」`,c1:"１．外国人（日本の国籍を有しない者をいう。以下同じ。）甲は，日本人乙が日本国内で日本人丙を殺害するために使うことを知りながら，某外国のホテル内で，乙にナイフを貸したが，その後，乙は，日本国内で，そのナイフを使って丙を殺害した。甲に刑法（殺人幇助罪）が適用される。",c2:"２．外国人甲は，日本国内で，外国人乙を殺害するために同人に毒薬を飲ませたが，その後，乙が乗船した某外国船舶が公海を航行中，その船舶内で，乙は，この毒薬の効果により死亡した。甲に刑法（殺人罪）が適用される。",c3:"３．外国人甲は，外国人乙が某外国で外国人丙を殺害するために使うことを知りながら，日本国内で，乙にピストルを貸したが，その後，乙は，某外国のホテル内で，そのピストルを使って丙を殺害した。甲に刑法（殺人幇助罪）は適用されない。",c4:"４．３の事例で，乙に刑法（殺人罪）は適用されない。",c5:"５．外国人甲は，公海の上空を飛行中の日本航空機内で，外国人乙を殺害するために同人に毒薬を飲ませた。その後，その航空機が悪天候のため飛行途中で某外国の飛行場に着陸した際，体調が悪化した乙は同国の病院に搬送され，その病院内で，この毒薬の効果により死亡した。甲に刑法（殺人罪）が適用される。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2006",num:"21",subject:"kso",q:`次の【文章】は，刑事訴訟法の基本構造と審理・判決の対象との関係について述べた一つの見解である。①から⑧までの（ ）内に後記【語句群】から適切な語句を入れた場合，組合せとして正しいものは，後記１から５までのうちどれか。なお 同じ語句を２回以上用いてもよい。
【文章】
いわゆる旧刑事訴訟法（大正１１年法律第７５号。後記昭和２３年法律第１３１号により全面改正。以下「旧法」という。）においても，公訴の提起は検察官の職務であり，検察官が起訴の対象としての犯罪事実を示していた しかし 旧法は，（①）主義の基本構造を採用しており，裁判所には，検察官が起訴状に記載した犯罪事実に限られることなく，これと（②）の同一性のある事実について，起訴状の記載の変更を経ることなく審理・判決する権限と責務があると考えられていた。つまり，起訴状において検察官が示した犯罪事実がそのままの形で審理・判決の対象になるとは限らず，実際に，窃盗の起訴に対して強盗を認定したり，住居侵入の起訴に対して住居侵入・窃盗を認定して，有罪判決をするようなことが行われていた。
これに対し 現行刑事訴訟法（昭和２３年法律第１３１号。以下「現行法」という。）は，（③）主義の基本構造を採用し，訴因の制度を導入した。裁判所には，当事者たる検察官が起訴状に記載した訴因についてのみ，審理・判決する権限と責務があり，起訴状に記載された訴因と（④）の同一性のある事実であっても，検察官が訴因を変更しない限り，裁判所はこれについて審理・判決することはできないと考えられるようになった。実務では，住居侵入・窃盗につき住居侵入の部分を「呑んで」窃盗だけを起訴したり，強盗致傷について傷害が軽微なので単に強盗として起訴するようなことが行われている。これは，（⑤）主義を徹底した現行法の下では，裁判所の認定が検察官の設定した訴因に拘束されて実体的真実との乖離を生じることがあり得ることは，現行法が当然の前提としていると考えられるからである。
裁判所の訴因変更命令に関しては，裁判所にその（⑥）を認めるべき場合があるかどうかが論じられている。裁判所の訴因変更命令は，立証の対象に関する職権行使という点で，立証の過程における職権行使である職権証拠調べと似ているが，職権証拠調べの権限が，真実の解明とともに被告人保護のために用いられるのに対し，訴因変更命令は，特に被告人に利益を与える制度ではないこと，職権証拠調べは当事者の立証活動を排除しないのに対して，訴因変更命令は検察官の設定した審判の対象を修正しようとするものであることからみて，訴因変更命令と現行法の基本構造である（⑦）主義との間には鋭い緊張関係がある。したがって，裁判所に訴因変更命令の（⑧）まで認めるのは適当でない。
【語句群】
ａ. 起訴状一本
ｂ. 被疑事実
ｃ. 直接
ｄ. 当事者
ｅ. 公訴事実
ｆ. 裁量
ｇ. 口頭
ｈ. 義務
ｉ. 職権`,c1:"１．①ｉ③ｄ",c2:"２．①ｃ⑧ｈ",c3:"３．③ａ④ｅ",c4:"４．⑤ｇ⑥ｆ",c5:"５．④ｂ⑧ｈ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2006",num:"22",subject:"kso",q:`告訴に関する次のアからオまでの各記述のうち，誤っているものの組合せは，後記１から５までのうちどれか。
ア. 未成年者を被害者とする強制わいせつについては，その法定代理人である親も告訴をすることができる。
イ. 告訴は，必ず告訴状を提出して行わなければならないので，検察官が，強姦の被害者から，その被害事実に加えて犯人を厳重に処罰してほしい旨録取した供述調書を作成しただけでは，告訴としての効力は認められない。
ウ. 告訴は，公訴の提起があるまでいつでも取り消すことができる。
エ. 親告罪の告訴は，一部の例外を除き，犯人を知った日から６か月を経過したときは，これをすることができない。この例外は極めて限定されており，強姦罪等の性犯罪は含まれない。
オ. 親告罪の告訴を取り消した者は，更に告訴をすることができない。`,c1:"１．ア エ",c2:"２．イ オ",c3:"３．ウ ア",c4:"４．エ イ",c5:"５．オ ウ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2006",num:"23",subject:"kso",q:"逮捕に関する次の１から５までの各記述のうち，正しいものはどれか。",c1:"１．通常逮捕の逮捕状の請求を受けた裁判官は 被疑者が罪を犯したことを疑うに足りる相当な理由があると認めるときは，常に逮捕状を発しなければならない。",c2:"２．司法巡査は，通常逮捕の逮捕状を請求することはできないが，逮捕状により被疑者を逮捕することはできる。",c3:"３．逮捕状により被疑者を逮捕するには，逮捕の着手に先立って必ず逮捕状を被疑者に示さなければならない。",c4:"４．緊急逮捕するに当たって，被疑者に対し告げなければならないのは，被疑事実の要旨だけである。",c5:"５．現行犯人を逮捕した私人は，逮捕の現場で令状によらずに差押えをすることができる。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2006",num:"24",subject:"kso",q:`勾留に関する次のアからエまでの各記述につき，正しい場合には１を，誤っている場合には２を選びなさい。
ア. 勾留状を発するかどうかを判断するのは，被疑者の勾留の場合は裁判官であるが，被告人の勾留の場合は第１回公判期日までの間を除き受訴裁判所である。
イ. 被疑者の勾留の期間は，延長されない限り，検察官が勾留の請求をした日から１０日であるが，被告人の勾留の期間は，延長されない限り，公訴の提起があった日から１か月である。
ウ. 勾留理由の開示は，勾留期間が長期に及ぶ可能性がある被告人の勾留に限って認められている。
エ. 保釈の制度は，被疑者の勾留には存しないが，被告人の勾留には存する。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1221"},{year:"2006",num:"25",subject:"kso",q:`次の【事例】中のアからオまでの下線部分に関して述べた後記【記述】のうち，誤っているものの組合せは，後記１から５までのうちどれか。
【事例】
甲は，平成○年○月５日午後２時３０分，貨物自動車を運転して走行中，進路前方に停止していた乗用自動車の後部に追突し，これに乗車していたＶに怪我を負わせる人身事故を起こした。Ｘ巡査部長らは，指令を受けて現場に到着したところ，甲の顔が赤く，酒の臭いが強く，身体がふらつき，言葉も乱暴であるなど外見上酒に酔っていることがうかがわれたため，その場で，甲に対し，運転免許証を提示するよう求めるとともに，身体に保有するアルコール濃度を検知するための呼気検査に応じるよう求めたが，甲はいずれも拒否した。そこで，<u>Ｘ巡査部長は，同日午後３時，甲に対し，Ｋ警察署への任意同行を求め，甲の背中を手の平で押してパトカーの後部座席に乗り込ませ，自分も甲の隣に乗車した上，Ｙ巡査にパトカーの運転を指示し，甲をＫ警察署に任意同行した。(ア)</u>
Ｘ巡査部長は，同日午後４時から，Ｋ警察署取調室において甲の取調べを開始し，運転免許証を提示し，呼気検査に応じるよう説得したが，<u>甲はいずれも拒否し続けた上，同日午後５時，「トイレに行かせてもらう。」と言うなり，いすから立ち上がろうとした。Ｘ巡査部長は，甲が逃走を図ろうとしたものと思い，甲の左斜め前に立つと，「呼気検査を受けてからでいいではないか。」と告げ，甲の両肩を両手でつかんでいすに座らせた。(イ)</u>
甲が任意に呼気検査に応じる意思はないものと判断されたことから，Ｘ巡査部長の上司であるＺ警部は，同日午後５時３０分，<u>裁判官に対し，甲の血液を採取し身体に保有するアルコール濃度を検知するための鑑定処分許可状及び身体検査令状を請求し，その後，裁判官が発したこれらの令状に基づき甲の血液を採取し鑑定した結果，アルコールが検出された。(ウ)</u>
<u>甲は，アルコールが検出されたことから観念し，運転免許証を提示した上，「飲酒の上運転を開始したところ，酒に酔ったことが原因で居眠りに陥り，このため追突事故を起こした」旨供述し，Ｘ巡査部長が作成した供述調書に署名指印した。(エ)</u>Ｚ警部は，裁判官に対し，飲酒酩酊による居眠りを過失とする業務上過失傷害の罪で甲の逮捕状を請求し，Ｘ巡査部長は，同日午後８時，上記請求に対して裁判官が発した逮捕状により甲を通常逮捕した。
<u>Ｚ警部は，同月７日午後２時３０分，甲を関係書類とともに検察官に送致する手続をし，検察官は，同日午後３時３０分，甲の身柄を受理し，直ちに甲に弁解の機会を与えた上，同月８日午前１１時，裁判官に対し，甲の勾留を請求し，裁判官は，同日午後４時，勾留状を発した。(オ)</u>
【記述】
ア. 甲に対する任意同行が適法であるためには，甲の任意の承諾の下，その意思を制圧することなく行われたことを要する。
イ. 任意捜査であるからといって有形力の行使が全く許されないわけではなく，Ｘ巡査部長の甲に対する行為が許容される場合もある。
ウ. 被疑者に対する鑑定及び身体検査は，直接強制を許容する規定を欠くため，甲の身体に直接強制を加えて血液を採取することは許されない。
エ. 甲に対する任意同行の時点で実質的な逮捕があったと認定された場合，そのことのみで甲の供述調書の証拠能力は当然に否定される。
オ. 甲に対する実質的な逮捕が任意同行開始の時点になされたと考えても，甲の逮捕後の手続について刑事訴訟法が要求する時間的制限は遵守されている。`,c1:"１．ア ウ",c2:"２．イ エ",c3:"３．ウ エ",c4:"４．ウ オ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2006",num:"26",subject:"kso",q:"鑑定に関する次の１から５までの各記述のうち，正しいものを二つ選びなさい。",c1:"１．裁判所から鑑定を命じられた鑑定人も，捜査機関から鑑定を嘱託された鑑定受託者も，故意に虚偽の鑑定をしたときは，虚偽鑑定罪(刑法第１７１条)で処罰されることがある。",c2:"２．鑑定人も鑑定受託者も，自らの意思により辞任することができる。",c3:"３．鑑定人による鑑定を実施する際，必要があるときは，被告人を鑑定留置することができるが，鑑定受託者による鑑定を実施する際にも，同様に，被疑者を鑑定留置することができる。",c4:"４．鑑定人は，特別の許可状なく，墳墓の発掘又は物の破壊等の処分を行うことができるが，鑑定受託者が同様の処分を行う際には，鑑定処分許可状が必要である。",c5:"５．鑑定人は，裁判所から許可を受けて行う身体検査を被検査者が拒んだ場合には，裁判官に対し，被検査者の身体検査を請求することができるが，鑑定受託者は，そのような請求をなし得ない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"35"},{year:"2006",num:"27",subject:"kso",q:`次の【会話】は，学生ＡとＢによる，おとり捜査（捜査機関又はその依頼を受けた捜査協力者が，その身分や意図を相手方に秘して犯罪を実行するように働き掛け，相手方がこれに応じて犯罪の実行に出たところで現行犯逮捕等により検挙する捜査方法をいう。）に関する議論である。この【会話】中の①から⑥までの（ ）内に後記アからクまでの【記述】の中からそれぞれ最も適切なものを選んで当てはめた場合，いずれの（ ）内にも入らない【記述】の組合せは，後記１から５までのうちどれか。なお，同じ【記述】は１回しか用いてはならない。
【会話】
学生Ａ. 私は，おとり捜査は，（①）から，「強制の処分」に当たり，法律に特別の定めがない以上，許されないと思うわ。
学生Ｂ. 「強制の処分」に関する最高裁判所の判例の考え方を前提とすれば，おとり捜査は，（②）から，「強制の処分」には当たらないと考えるべきだよ。
学生Ａ. 百歩譲って任意捜査だとしても，おとり捜査は，本来犯罪を防止すべき捜査機関が詐術的手段を用いて相手方に犯罪を実行させこれを検挙するものだから，（③）という観点からは，おとり捜査を行う必要性や相当性が認められることが，おとり捜査が許されるための要件と考えるべきでしょうね。
学生Ｂ. 必要性や相当性の要件については，おとり捜査が，（④）という観点から考えるべきだと思う。このように考えることによって，第三者が被害者となる殺人や窃盗等についてのおとり捜査が原則として適法とされないことの説明が容易になるのではないかな。
学生Ａ. ところで，（⑤）から，おとり捜査は，例えば，被疑者が既に大麻を所持しているという嫌疑があって，当該所持事犯の捜査の方法として行われるときに限って許されるべきよ。
学生Ｂ.（⑥）から，おとり捜査が許されるのは，既に犯罪が行われている場合に限られないと考えるべきだよ。
【記 述】
ア. 将来発生する高度の蓋然性がある犯罪について，その検挙や証拠収集を目的として捜査を行うことも許される
イ. いわゆる機会提供型であれば許されるが，いわゆる犯意誘発型は許されない
ウ. 捜査の公正さや廉潔性に問題があり得る
エ. その相手方の意思を制圧し，身体，住居，財産等に制約を加えるものではない
オ. 捜査機関等が相手方への働き掛けによって犯罪という法益侵害又はその危険を惹起するものである
カ. 刑事訴訟法の捜査は，既に行われたか又は現に行われつつある犯罪について行われるものである
キ. 捜査の対象となっている犯罪の嫌疑の程度，その重大性，おとり捜査の相手方の犯罪への関与の程度，捜査の困難性等を総合考慮して判断される
ク. 国家の干渉を受けることなく独自に意思決定をする自由を実質的に侵害する行為である`,c1:"１．ア ク",c2:"２．イ エ",c3:"３．ウ オ",c4:"４．カ ウ",c5:"５．キ イ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2006",num:"28",subject:"kso",q:`後記１から５までの【記述】のうち，次の【判例】（最高裁判所平成１３年４月１１日第三小法廷決定・刑集５５巻３号１２７頁）と明らかに矛盾するものはどれか。
【判例】
訴因と認定事実とを対比すると，（中略）犯行の態様と結果に実質的な差異がない上，共謀をした共犯者の範囲にも変わりはなく，そのうちのだれが実行行為者であるかという点が異なるのみである。そもそも，殺人罪の共同正犯の訴因としては，その実行行為者がだれであるかが明示されていないからといって，それだけで直ちに訴因の記載として罪となるべき事実の特定に欠けるものとはいえないと考えられるから，訴因において実行行為者が明示された場合にそれと異なる認定をするとしても，審判対象の画定という見地からは，訴因変更が必要となるとはいえないものと解される。とはいえ，実行行為者がだれであるかは，一般的に，被告人の防御にとって重要な事項であるから，当該訴因の成否について争いがある場合等においては，争点の明確化などのため，検察官において実行行為者を明示するのが望ましいということができ，検察官が訴因においてその実行行為者の明示をした以上，判決においてそれと実質的に異なる認定をするには，原則として，訴因変更手続を要するものと解するのが相当である。しかしながら，実行行為者の明示は，前記のとおり訴因の記載として不可欠な事項ではないから，少なくとも被告人の防御の具体的な状況等の審理の経過に照らし，被告人に不意打ちを与えるものではないと認められ，かつ，判決で認定される事実が訴因に記載された事実と比べて被告人にとってより不利益であるとはいえない場合には，例外的に，訴因変更手続を経ることなく訴因と異なる実行行為者を認定することも違法ではないものと解すべきである。
【記 述】`,c1:"１．訴因は，裁判所に対し，審判の対象を限定するという機能を有するとともに，被告人に対し，防御の範囲を示すという機能を有する。",c2:"２．刑事訴訟法は，訴因変更の要否の基準を直接に定めていないので，訴因制度の趣旨を踏まえつつ，訴因の果たすべき機能から，その基準を導き出すべきである。",c3:"３．裁判所が，訴因の特定に不可欠な事項について，訴因の記載と実質的に異なる事実を認定しようとする場合には，常に訴因変更手続が必要である。",c4:"４．共謀共同正犯の訴因において，共謀の日時，場所等が明示されていなくても，訴因の特定に欠けるところはないという立場に立ち，上記判例の論理に従えば，検察官が共謀の日時，場所を訴因に明示した場合，判決において，それと実質的に異なる認定をするには，必ずしも訴因変更手続を要しない。",c5:"５．殺人の共同正犯の訴因における実行行為者の記載は，訴因の特定に不可欠な事項ではないが，いったん訴因に明示されると，常に訴因としての拘束力を有する。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2006",num:"29",subject:"kso",q:"次の１から４までの各記述のうち，明らかに誤っているものはどれか。",c1:"１．国選弁護人から辞任の申出があっても，裁判所又は裁判長が解任しない限り，弁護人の地位を失うものではない。",c2:"２．被疑者甲の妻は，甲の私選弁護人としてＡ弁護士を選任することができるが，その後甲がＢ弁護士を私選弁護人に選任したとき，Ａ弁護士は直ちに甲の私選弁護人の地位を失う。",c3:"３．第一審で有罪判決を受けた被告人の私選弁護人は，改めて被告人から弁護人に選任されなくても控訴することができる。",c4:"４．弁護人は，被告人の明示の意思に反しても保釈の請求をすることができる。",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2"},{year:"2006",num:"30",subject:"kso",q:`公判前整理手続に関する次のアからオまでの各記述のうち，誤っているものの組合せは，後記１から６までのうちどれか。
ア. 公判前整理手続は，充実した公判の審理を継続的，計画的かつ迅速に行うことを目的とした，事件の争点及び証拠を整理するための公判準備である。
イ. 公判前整理手続に関する規定は，死刑又は無期若しくは短期１年以上の懲役若しくは禁錮に当たる罪に係る事件にのみ適用される。
ウ. 公判前整理手続においては，第１回公判期日前であるにもかかわらず，検察官及び弁護人は，証拠調べの請求を行うことができ，裁判所も証拠調べをする決定又は証拠調べの請求を却下する決定をすることができる。
エ. 予断防止の観点から，公判前整理手続は，事件の審判に関与すべき裁判官以外の裁判官が主宰することとされている。
オ. 公判前整理手続に付された事件において証拠開示をめぐる当事者間の争いが生じた場合には，これを裁判所が決定で裁定し，不服のある当事者は，この決定に対して即時抗告をすることができる。`,c1:"１．ア ウ",c2:"２．イ ウ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"６．エ オ",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2006",num:"31",subject:"kso",q:`被告人甲及び乙に対して別個に公訴提起がなされた後の弁論の併合・分離に関する次のアからエまでの各記述のうち，正しい場合には１を，誤っている場合には２を選びなさい。
ア. 弁論併合前に，甲に対する関係で取調べ済みの証拠は，弁論併合により，その効果として，乙に対する関係でも証拠となる。
イ. 弁論併合後に，検察官が証拠調べ請求し，裁判所に採用されて取り調べられた証拠であっても，甲又は乙の一方に対する関係でのみ証拠となる場合がある。
ウ. 弁論併合後に，検察官が甲及び乙以外の者の検察官面前調書を証拠調べ請求し，甲の弁護人が同意，乙の弁護人が不同意の意見を述べた場合は，弁論を分離しない限り，裁判所は，甲に対する関係でも，この検察官面前調書を証拠として採用し，取調べをすることはできない。
エ. 弁論併合後に，弁論を分離した上で甲を乙に対する被告事件の証人として尋問することは，証人となった甲に黙秘権が認められないにもかかわらず，尋問の結果作成された甲の証人尋問調書は刑事訴訟法第３２２条の要件を満たす限り，甲の被告事件においても証拠能力を取得することとなり，結局甲の黙秘権保障に反する結果となるから，許されない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"2122"},{year:"2006",num:"32",subject:"kso",q:`次の【見解】は，刑事訴訟における当事者の主張・立証活動について述べたものである。後記アからオまでの【記述】のうち，この【見解】の主題を最も適切に述べたものの組合せとして正しいものは，後記１から５までのうちどれか。
【見解】
検察官は，被告人の有罪を求めて公訴を提起することから，その起訴状記載の公訴事実につき証拠を提出して立証する必要がある。他方，被告人及び弁護人において何らの主張・立証を行わず，検察官の立証の効果を弾劾しないならば，結果的に当該公訴事実につき有罪となるおそれがある。
例えば，被害者宅において被害者を殺害して，犯行現場にあった金庫から現金を強取したという強盗殺人事件の公判において，被告人と犯人との同一性に関する証拠が，犯行現場にあった金庫から採取された指紋と被害者宅付近で犯行時刻直後に被告人を目撃した証人の供述であると仮定した場合，検察官が，「金庫から採取された指紋が被告人の指紋と一致する。」ことを立証し，被告人が，この点と証人の供述について争わないならば，被告人が犯行時刻ころ犯行現場にいて金庫に触れたことが推認され，これによって裁判官は，被告人の有罪を心証形成するかもしれない。しかし，被告人が，「犯行当日は 犯行時刻直後ころに被害者宅付近を通り掛かったが，被害者宅には入っていない。被害者宅に入ったのは，事件の１週間前の１回だけで，そのとき，金庫に触れたことがある。」旨主張し，検察官と同程度ではないにしても，その主張する事実の立証を遂げたならば，前記のような推認が覆され，これによって裁判官の心証は白紙に戻るかもしれない。その場合，検察官としては，さらに「金庫から採取された指紋は，犯行時刻に被告人が残したものである。」ことを立証する必要がある。
【記 述】
ア. 刑事訴訟における事実認定は，証拠能力を有し，かつ，適式な証拠調べを経た証拠によってなされなければならない。
イ. 証拠調べの過程で，ある事実の存在が一応証明され，又は，その存在に疑いのある状態が生じれば，これによって不利益を受ける当事者に，その存否について立証の必要が生じることとなる。
ウ. 証拠の取捨選択及び事実の認定は，事実審理に当たる裁判所の専権に属するが，それは経験則に反してはならない。
エ. 訴訟における立証活動の事実上の負担は，裁判官の心証形成の推移に応じて当事者間を移動するものであり，これを立証の負担という。
オ. 証拠調べを経ても証明すべき事実の存否を判断できない場合，これによって不利益を受ける一方当事者の法的地位を挙証責任という。`,c1:"１．ア イ",c2:"２．イ ウ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．エ オ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2006",num:"33",subject:"kso",q:`次の教授と学生ＡないしＣの【会話】は，違法収集証拠の証拠能力についての最高裁判所の判例に関するものである。①から⑥までの( )内に入る適切な語句を後記の【語句群】から一つずつ選んで入れた場合，①，③，④及び⑥の( )内に入る語句の組合せとして正しいものは，後記１から５までのうちどれか。なお，同じ語句を２回以上用いてもよい。
【会話】
教授. 最高裁判所は，昭和５３年９月７日の第一小法廷判決で，捜査に違法があった場合の証拠能力の肯否について，「令状主義の精神を没却するような重大な違法があり，これを証拠として許容することが，将来における違法な捜査の抑制の見地からして相当でないと認められる場合においては，その証拠能力は否定されるものと解すべきである。」と判示していて，「 違法の重大性」と「排除相当性」という二つの要件を示していると思われるが，両者の要件の関係についてどう考えるべきか，みんなで議論してみよう。
学生Ａ. 両者の要件がそろって初めて証拠が排除されるとする説，いずれか一方の要件があれば証拠が排除されるとする説，結局は「違法の重大性」が要件であるとする説などがあります。
学生Ｂ. この判決を素直に読めば，両者の要件がどちらも必要だ，つまり両者を言わば「かつ」の関係にあるものとして考えるのが最高裁判所の立場になるのではないでしょうか。
学生Ｃ. でも，その判決は，事案の結論として証拠能力を肯定するに当たって，「本件証拠物の押収手続の違法は必ずしも重大であるとはいいえないのであり，これを被告人の罪証に供することが，違法な捜査の抑制の見地に立ってみても相当でないとは認めがたいから，本件証拠物の証拠能力はこれを肯定すべきである。」と判示していて，両者の要件を併せて検討しています。これに注目すれば，最高裁判所は，例えば「違法の重大性」がなくても「排除相当性」が認められるので証拠能力を否定すべき場合があると考えている，つまり，両者の要件を（①）の関係にあると考えていると解読する方が説得力があると思います。
教授. この判決は，念のため，あるいは，確認的に，「違法の重大性」も「排除相当性」もない事案だと述べたにすぎないと考えることもできるのではないかね。
学生Ｃ. そもそも違法収集証拠排除法則の根拠であると言われている「司法の廉潔性」と「違法捜査の抑止」という別個独立の根拠が，それぞれ「違法の重大性」と「排除相当性」の要件に反映していると考えられ，両者は，（②）の関係にあると考えるべきだと思います。
教授. ところで，平成１５年２月１４日最高裁判所第二小法廷判決は，「本件逮捕には，逮捕時に逮捕状の呈示がなく，逮捕状の緊急執行もされていないという手続的な違法があるが，それにとどまらず，警察官は，その手続的な違法を糊塗するため，（中略）公判廷において事実と反する証言をしているのであって，本件の経緯全体を通して表れたこのような警察官の態度を総合的に考慮すれば，本件逮捕手続の違法の程度は，令状主義の精神を潜脱し，没却するような重大なものであると評価されてもやむを得ないものといわざるを得ない。そして，このような違法な逮捕に密接に関連する証拠を許容することは，将来における違法捜査抑制の見地からも相当でないと認められるから，その証拠能力を否定すべきである。」と判示していて，公判廷で偽証したことを（③）の要件の中で検討しているよね。
学生Ａ. 捜査行為の違法性判断は（④）に存在した事情を基礎として考えるのが一般的な判断手法です。違法な逮捕後に示された警察官の法軽視の態度からさかのぼって逮捕手続における（⑤）を認めるのはちょっと無理ではないでしょうか。
学生Ｃ. でも，捜査官の捜査行為時における主観的意図を推認する限りで，公判廷で捜査官が虚偽の証言をしたという事情を（⑥）の判断要素の一つにすることは可能だと思います。
【語句群】
ａ. 排除相当性
ｂ. 証言当時
ｃ. 「又は」
ｄ. 軽微な違法性
ｅ. 行為当時
ｆ. 違法捜査の抑止
ｇ. 裁判当時
ｈ. 「かつ」
ｉ. 違法の重大性
ｊ. 司法の廉潔性`,c1:"１．①ｃ③ｉ④ｅ⑥ｉ",c2:"２．①ｃ③ａ④ｅ⑥ｉ",c3:"３．①ｃ③ｄ④ｂ⑥ａ",c4:"４．①ｈ③ｊ④ｇ⑥ｊ",c5:"５．①ｈ③ｉ④ｇ⑥ｉ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"1"},{year:"2006",num:"34",subject:"kso",q:`次の【文章】のアからオまでの（ ）内には後記【語句群】のａからｇまでの語句のいずれか，甲及び乙の《 》内には文章中に記載した①から④までの事情のいずれかが入る。エ及びオに入る適切な語句，甲及び乙に入る適切な事情の組合せとして正しいものは，後記１から８までのうちどれか。なお，アからオまでの（ ）内には，それぞれ異なる語句が入る。
【文章】
（ア）は，伝聞証拠に当たるが，刑事訴訟法は，供述者が公判期日において証人として尋問を受け，その真正に作成されたものであることを供述したときは，証拠とすることができると定めている。この場合，①供述内容が細かな事実に及ぶことが多いため，記憶に基づく口頭報告よりも書面による記録と報告の方が正確性を期し得ること，②専門的学識に基づく供述として一般的に信用性が高いこと，③宣誓の上行われること，④検察官及び弁護人に立会権が認められていることにより公正さが担保されていること，などの事情が考慮されたものといえる。
最高裁判所は （イ）や（ウ）も，同じ要件の下に証拠能力が認められるとしている。（イ）の場合，（ア）について指摘した《甲》と《乙》の事情は当てはまらず，両者の間には（エ）の点で差異があることは否定できないが，刑事訴訟法の明文で（オ）も（ア）と同じ要件の下に証拠能力が認められていることを考慮すれば，最高裁判所の結論も不当とはいえない。しかし，（ウ）の場合には，（ア）と同じ要件の下に証拠能力が認められてよい理由は，主として（ア）について指摘した②の事情が共通することに求めるしかなく，最高裁判所の結論には批判もある。真正に作成されたものであることを供述するとは，内容の正確性についても実質的に反対尋問を受けることと解されていることが，このように緩やかな解釈の背景といえる。
【語句群】
ａ. 私人が依頼した医師作成の診断書
ｂ. 裁判所又は裁判官が命じた鑑定人作成の鑑定書
ｃ. 捜査機関が嘱託した鑑定受託者作成の鑑定書
ｄ. 捜査機関の検証の結果を記載した調書
ｅ. 裁判所の検証の結果を記載した調書
ｆ. 信用性の情況的保障
ｇ. 必要性`,c1:"１．エ−ｆ オ−ａ 甲−① 乙−②",c2:"２．エ−ｆ オ−ａ 甲−③ 乙−④",c3:"３．エ−ｆ オ−ｄ 甲−② 乙−③",c4:"４．エ−ｆ オ−ｄ 甲−③ 乙−④",c5:"５．エ−ｆ オ−ｃ 甲−① 乙−④",c6:"６．エ−ｆ オ−ｅ 甲−② 乙−③",c7:"７．エ−ｇ オ−ｃ 甲−② 乙−④",c8:"８．エ−ｇ オ−ｅ 甲−① 乙−③",c9:"",c10:"",a:"4"},{year:"2006",num:"35",subject:"kso",q:`刑事訴訟法第３２８条にいう「公判準備又は公判期日における被告人，証人その他の者の供述の証明力を争うため」に用いることのできる同法「第３２１条乃至第３２４条の規定により証拠とすることができない書面又は供述」の範囲については，
① 供述をした者の異なった内容の供述を記載した書面又は供述に限定されると解する説
② ①のみに限定されないが，それ以外は，供述の信用性のみに関する純粋の補助事実，例えば供述者の能力及び性格，当事者に対する偏見，当事者との間の利害関係等を立証する証拠に限られると解する説
③ 伝聞証拠でも，限定なく証拠とすることができると解する説
がある。①から③までの各説に立った場合に，次のアからオまでの【事例】中のＡの供述が同法第３２８条により証拠とすることができるか否かに関する後記ａからｅまでの【記述】につき，正しい場合には１を，誤っている場合には２を選びなさい。
【事例】
ア. 犯人を目撃した証人Ｗの「自分が目撃した犯人は白いシャツを着ていた。」旨の証言に対し，Ｗとともに犯人を目撃したＡの「犯人は黒いシャツを着ていた。」旨の司法警察員に対する供述調書により，Ｗの証言の証明力を争うこと
イ. 犯人を目撃した証人Ｗの「被告人甲が犯行現場でＶの胸をナイフで突き刺すのを見た。」旨の証言に対し，証人Ａの「Ｗは，『犯行現場には行ったこともないし，甲の殺害行為を見たこともない。 』と言っていた。」旨の証言により，Ｗの証言の証明力を争うこと
ウ. 犯人を目撃した証人Ｗの「自分の目撃した犯人は被告人甲とは違う人間である。」旨の証言に対し，Ｗの友人Ａの「Ｗは，『甲は，自分が経済的に困窮していたとき，生活費を出してくれるなど何かと面倒を見てくれた。』と言っていた。」旨の証言により，Ｗの証言の証明力を争うこと
エ. 犯人を目撃した証人Ａの「犯人は被告人乙である。」旨の証言が，Ａの司法警察員に対する「犯人が被告人乙だとは断言できない。」旨の供述調書によって証明力が減殺された場合，証言内容と一致する内容のＡの他の供述調書により，減殺された証明力を回復すること
オ. 鑑定人Ｂの「被害者の死因は窒息死である。」旨の供述に対し，「Ｂが解剖時に『被害者の死因は心筋こうそくの可能性もある。』と述べた。」旨の解剖に立ち会ったＢの助手Ａの証言により，Ｂの供述の証明力を争うこと
【記述】
ａ. アは，①から③までのいずれの説を採っても，証拠として許容される。
ｂ. イは，①から③までのいずれの説を採っても，証拠として許容される。
ｃ. ウは，③説のみならず，②説によっても，証拠として許容される。
ｄ. エは，③の説を採った場合でなければ，証拠として許容されることはない。
ｅ. オは，③の説を採った場合でなければ，証拠として許容されることはない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"21122"},{year:"2006",num:"36",subject:"kso",q:`犯罪被害者に関する次のアからエまでの各記述のうち，正しいものの組合せは，後記１から６までのうちどれか。
ア. 犯罪被害者は，事件が確定した後の訴訟記録を閲覧することができるが，事件の確定前の訴訟記録については，閲覧又は謄写することができない。
イ. 犯罪被害者は，自ら申し出て，公判期日において，被害に関する心情その他の被告事件に関する意見の陳述をすることができる。
ウ. 犯罪被害者を証人として尋問する場合において，証人が被告人の面前において供述するときは圧迫を受け精神の平穏を著しく害されるおそれがあると認める場合であって，相当と認めるときは，被告人から証人の状態を認識することができないようにするための措置を採ることができるが，この措置を採ることができるのは弁護人が出頭している場合に限られる。
エ. 犯罪被害者を証人として尋問する場合において，証人を別室に在室させていわゆるビデオリンク方式によって行う証人尋問は，最高裁判所の判例によれば，被告人が証人に面と向かって反対尋問をする権利を奪うもので，憲法第３７条第２項に違反し，許されない。`,c1:"１．ア イ",c2:"２．ア ウ",c3:"３．ア エ",c4:"４．イ ウ",c5:"５．イ エ",c6:"６．ウ エ",c7:"",c8:"",c9:"",c10:"",a:"4"},{year:"2006",num:"37",subject:"kso",q:`次のⅠ及びⅡの【見解】は，一事不再理の効力が及ぶ範囲に関する考え方を述べたものである。これらの【見解】のいずれかを前提に後記【事例】における起訴の適法性について述べた後記１から５までの【記述】のうち，正しいものはどれか。なお，「常習特殊窃盗罪」とは，盗犯等の防止及び処分に関する法律第２条違反の罪をいう。
【見解】
Ⅰ. 一罪の一部を構成する犯罪事実について，前訴において有罪・無罪の判決が言い渡され確定したときは，一罪を構成する残りの犯罪事実のうち，前訴の第一審判決言渡し時までに行われた部分について，確定判決の一事不再理の効力が及ぶ。
Ⅱ. Ⅰの考え方が原則であるが，前訴において同時審判が事実上又は法律上不可能であった部分については，確定判決の一事不再理の効力は及ばない。
【事例】
甲は，平成○○年の３月１日（①）と５月１日（②）に窃盗を行い，７月１０日，②の窃盗の事実で逮捕され，８月１日，同事実について常習特殊窃盗罪で起訴されたが，その後保釈された。甲の公判は，９月８日に弁論が終結し，９月１５日に執行猶予付の有罪判決が言い渡され，９月３０日に確定したが，甲は，保釈後の９月１０日（③），９月２０日（④）にもそれぞれ窃盗を行った。その後，甲は，１２月１日（⑤）に行った窃盗で逮捕され，捜査の結果，⑤のほか①③④の各窃盗の事実が判明するとともに，これらが②の窃盗と常習特殊窃盗罪を構成することも明らかになった。
【記 述】
（参照条文）盗犯等の防止及び処分に関する法律
第二条 常習トシテ左ノ各号ノ方法ニ依リ刑法第二百三十五条，第二百三十六条，第二百三十八条若ハ第二百三十九条ノ罪又ハ其ノ未遂罪ヲ犯シタル者ニ対シ窃盗ヲ以テ論ズベキトキハ三年以上，強盗ヲ以テ論ズベキトキハ七年以上ノ有期懲役ニ処ス
一 兇器ヲ携帯シテ犯シタルトキ
二 二人以上現場ニ於テ共同シテ犯シタルトキ
三 門戸牆壁等ヲ踰越損壊シ又ハ鎖鑰ヲ開キ人ノ住居又ハ人ノ看守スル邸宅，建造物若ハ艦船ニ侵入シテ犯シタルトキ
四 夜間人ノ住居又ハ人ノ看守スル邸宅，建造物若ハ艦船ニ侵入シテ犯シタルトキ`,c1:"１．Ⅰの考え方に立ったとき，①の窃盗を単純窃盗として起訴することは許される。",c2:"２．Ⅰの考え方に立ったとき，③の窃盗を単純窃盗として起訴することは許される。",c3:"３．Ⅰの考え方に立ったとき，④⑤の窃盗をそれぞれ単純窃盗として起訴することは許される。",c4:"４．Ⅱの考え方に立ったとしても，①の窃盗を常習特殊窃盗として起訴することが許されることはない。",c5:"５．Ⅱの考え方に立ったとしても，③の窃盗を常習特殊窃盗として起訴することが許されることはない。",c6:"",c7:"",c8:"",c9:"",c10:"",a:"3"},{year:"2006",num:"38",subject:"kso",q:`次の判例（最高裁判所平成１６年２月１６日第二小法廷判決・刑集５８巻２号１３３頁）の【判旨】中の①から⑥までの（ ）内に後記【語句群】から適切な語句を入れた場合，その組合せとして正しいものは，後記１から５までのうちどれか。
 【審理経過】
検察官は，「被告人は，平成○年○月○日，Ｈ市内において，Ｖに対し，ナイフ１本を示すなど，兇器を示して脅迫した。」旨の暴力行為等処罰に関する法律違反事件１件（以下，同公訴事実を「本件公訴事実」という。）を起訴した。
第一審は，本件公訴事実について，被告人を無罪とする旨理由中で説示した上，「被告人は，業務その他正当な理由による場合でないのに，平成○年○月○日，Ｈ市内において，ナイフ１本を携帯した。」旨の銃砲刀剣類所持等取締法違反の事実（以下「本件犯罪事実」という。）を認定し，被告人を罰金１０万円に処し，本件公訴事実には本件犯罪事実の主張も含まれているので，訴因変更の手続は不要である旨判示した。
被告人は，第一審判決中の有罪部分について控訴を申し立てたが，検察官は，控訴を申し立てなかった。
原審は，「本件公訴事実と併合罪の関係にあって起訴されていない本件犯罪事実を認定し有罪の判決をした第一審判決には，刑事訴訟法第３７８条第３号後段の審判の請求を受けない事件について判決をした違法があるから，破棄を免れない。」旨の弁護人の控訴趣意をいれるとともに，職権調査の結果によれば，本件公訴事実について被告人を無罪とする旨主文で言い渡していない第一審判決には，同号前段の審判の請求を受けた事件について判決をしなかった違法もあると認められる旨判示して，第一審判決中の有罪部分を破棄し本件を第一審裁判所に差し戻した。
これに対し，被告人は，上告を申し立てた。
【判旨】
原判決が，第一審判決には刑事訴訟法第３７８条第３号前段及び後段の違法があるとしてこれを破棄した点は正当であるが，本件を第一審裁判所に差し戻した点は，是認することができない。
上記【審理経過】でみたとおり，第一審判決は，罪数に関する法解釈を誤り，（①）である同号前段及び後段の違法を犯していたのに，検察官は控訴せず，被告人は，本件公訴事実について第一審判決の理由中で無罪とされ不服を申し立てる利益がなかったことから，第一審判決中の有罪部分である本件犯罪事実についてのみ同号後段の違法を理由に控訴を申し立てたが，本件公訴事実は，被告人の控訴申立てに伴い，法律上当然に原審に（②）係属するところとなったのである。このような訴訟の経過にかんがみると，被告人の控訴申立てを契機として，原審裁判所が，職権により本件公訴事実について調査を加え，同号前段の違法がある旨指摘して第一審判決を破棄するにとどまらず，本件公訴事実を（③）とする余地があるものとして第一審裁判所に差し戻し，あるいは自ら（③）の判決をすることは，職権の発動の限界を超えるものであって許されないというべきである。そうすると，本件公訴事実については，第一審判決の（④）の結論に従うほかないのであるから，原審裁判所としては，本件を第一審裁判所に差し戻すのではなく，（⑤）して被告人に対し（④）を言い渡すべきであったといわねばならない。
また，本件犯罪事実は，公訴提起がなかったにもかかわらず，第一審裁判所がこれを認定して有罪の判決をしたため，上記控訴申立てに伴い事実上原審に係属するに至ったものであるから，本件犯罪事実については，公訴提起の手続がその規定に違反したため無効である場合に準じて，（⑥）を言い渡すべきであったと解される。
したがって，原判決は，上記の点において判決に影響を及ぼすべき法令の違反があり，これを破棄しなければ著しく正義に反すると認められる。
【語句群】
ａ. 公訴棄却
ｂ. 免訴
ｃ. 管轄違い
ｄ. 移送
ｅ. 移審
ｆ. 有罪
ｇ. 無罪
ｈ. 破棄
ｉ. 自判
ｊ. 差戻
ｋ. 相対的控訴理由
ｌ. 絶対的控訴理由`,c1:"１．ｂｄｆｇｉｋ",c2:"２．ｂｅｆｇｊｋ",c3:"３．ａｄｆｇｈｋ",c4:"４．ａｅｆｇｈｌ",c5:"５．ａｅｆｇｉｌ",c6:"",c7:"",c8:"",c9:"",c10:"",a:"5"},{year:"2006",num:"39",subject:"kso",q:`次のアからオまでの場合における不服申立ての可否・方法について，それぞれ正しいものを後記１から３までのうちから選びなさい。
ア. 被疑者甲は，任意同行後の取調べで犯行を自白して緊急逮捕され，逮捕状が発付されたが，緊急逮捕に先行する任意同行の過程に違法があったことを理由に，逮捕状発付の取消しを求めたい。
イ. 被疑者甲は，逮捕後，検察官の勾留請求に基づいて発付された勾留状により勾留されたが，先行する逮捕手続に違法があったことを理由に，勾留状発付の取消しを求めたい。
ウ. 逮捕後の留置中に起訴され，起訴当日発付された勾留状により勾留された被告人甲は，逃亡のおそれを認めた判断に誤りがあるとして，勾留状発付の取消しを求めたい。
エ. 被告人甲は，第１回公判期日後，保釈の請求をしたところ，請求が却下されたため，その取消しと請求認容の裁判を求めたい。
オ. 被告人甲は，第１回公判期日後，逃亡のおそれがあるとして勾留状が発付され勾留されたが，犯罪の嫌疑がないことを理由に，勾留状発付の取消しを求めたい。
１．準抗告が可能である。
２．抗告が可能である。
３．現行法上不服申立ては許されない。`,c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",c10:"",a:"31123"},{year:"2006",num:"40",subject:"kso",q:`略式手続に関する次のアからオまでの各記述のうち，正しいものの組合せは，後記１から６までのうちどれか。
ア. 簡易裁判所は，検察官の請求により，その管轄に属する事件について，略式命令で，１年以下の懲役若しくは禁錮，罰金又は科料を科することができる。
イ. 検察官が略式命令を請求する場合は，公訴の提起と同時に，書面でこれをしなければならない。
ウ. 被疑者が略式手続によることについて異議がないことは書面で明らかにされなければならない。
エ. 簡易裁判所は，略式命令の請求を受けた事件について罰金又は科料を科する場合，その刑の執行を猶予することはできない。
オ. 略式命令を受けた者又は検察官は，その内容に不服のある場合は，その告知を受けた日から１４日以内に，略式命令をした簡易裁判所の上級審である地方裁判所に対して正式裁判の請求をすることができる。`,c1:"１．ア イ",c2:"２．イ ウ",c3:"３．イ エ",c4:"４．ウ エ",c5:"５．ウ オ",c6:"６．エ オ",c7:"",c8:"",c9:"",c10:"",a:"2"}];function qn(e){return Array.isArray?Array.isArray(e):z1(e)==="[object Array]"}const sy=1/0;function uy(e){if(typeof e=="string")return e;let c=e+"";return c=="0"&&1/e==-sy?"-0":c}function ly(e){return e==null?"":uy(e)}function sn(e){return typeof e=="string"}function N1(e){return typeof e=="number"}function ry(e){return e===!0||e===!1||iy(e)&&z1(e)=="[object Boolean]"}function D1(e){return typeof e=="object"}function iy(e){return D1(e)&&e!==null}function wc(e){return e!=null}function iu(e){return!e.trim().length}function z1(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const oy="Incorrect 'index' type",dy=e=>`Invalid value for key ${e}`,fy=e=>`Pattern length exceeds max of ${e}.`,my=e=>`Missing ${e} property in key`,vy=e=>`Property 'weight' in key '${e}' must be a positive integer`,xi=Object.prototype.hasOwnProperty;class yy{constructor(c){this._keys=[],this._keyMap={};let n=0;c.forEach(t=>{let a=H1(t);n+=a.weight,this._keys.push(a),this._keyMap[a.id]=a,n+=a.weight}),this._keys.forEach(t=>{t.weight/=n})}get(c){return this._keyMap[c]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function H1(e){let c=null,n=null,t=null,a=1,s=null;if(sn(e)||qn(e))t=e,c=Vi(e),n=Bu(e);else{if(!xi.call(e,"name"))throw new Error(my("name"));const u=e.name;if(t=u,xi.call(e,"weight")&&(a=e.weight,a<=0))throw new Error(vy(u));c=Vi(u),n=Bu(u),s=e.getFn}return{path:c,id:n,weight:a,src:t,getFn:s}}function Vi(e){return qn(e)?e:e.split(".")}function Bu(e){return qn(e)?e.join("."):e}function by(e,c){let n=[],t=!1;const a=(s,u,l)=>{if(wc(s))if(!u[l])n.push(s);else{let r=u[l];const o=s[r];if(!wc(o))return;if(l===u.length-1&&(sn(o)||N1(o)||ry(o)))n.push(ly(o));else if(qn(o)){t=!0;for(let i=0,d=o.length;i<d;i+=1)a(o[i],u,l+1)}else u.length&&a(o,u,l+1)}};return a(e,sn(c)?c.split("."):c,0),t?n:n[0]}const hy={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},gy={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,c)=>e.score===c.score?e.idx<c.idx?-1:1:e.score<c.score?-1:1},jy={location:0,threshold:.6,distance:100},qy={useExtendedSearch:!1,getFn:by,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var ke={...gy,...hy,...jy,...qy};const ky=/[^ ]+/g;function py(e=1,c=3){const n=new Map,t=Math.pow(10,c);return{get(a){const s=a.match(ky).length;if(n.has(s))return n.get(s);const u=1/Math.pow(s,.5*e),l=parseFloat(Math.round(u*t)/t);return n.set(s,l),l},clear(){n.clear()}}}class Wl{constructor({getFn:c=ke.getFn,fieldNormWeight:n=ke.fieldNormWeight}={}){this.norm=py(n,3),this.getFn=c,this.isCreated=!1,this.setIndexRecords()}setSources(c=[]){this.docs=c}setIndexRecords(c=[]){this.records=c}setKeys(c=[]){this.keys=c,this._keysMap={},c.forEach((n,t)=>{this._keysMap[n.id]=t})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,sn(this.docs[0])?this.docs.forEach((c,n)=>{this._addString(c,n)}):this.docs.forEach((c,n)=>{this._addObject(c,n)}),this.norm.clear())}add(c){const n=this.size();sn(c)?this._addString(c,n):this._addObject(c,n)}removeAt(c){this.records.splice(c,1);for(let n=c,t=this.size();n<t;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(c,n){return c[this._keysMap[n]]}size(){return this.records.length}_addString(c,n){if(!wc(c)||iu(c))return;let t={v:c,i:n,n:this.norm.get(c)};this.records.push(t)}_addObject(c,n){let t={i:n,$:{}};this.keys.forEach((a,s)=>{let u=a.getFn?a.getFn(c):this.getFn(c,a.path);if(wc(u)){if(qn(u)){let l=[];const r=[{nestedArrIndex:-1,value:u}];for(;r.length;){const{nestedArrIndex:o,value:i}=r.pop();if(wc(i))if(sn(i)&&!iu(i)){let d={v:i,i:o,n:this.norm.get(i)};l.push(d)}else qn(i)&&i.forEach((d,f)=>{r.push({nestedArrIndex:f,value:d})})}t.$[s]=l}else if(sn(u)&&!iu(u)){let l={v:u,n:this.norm.get(u)};t.$[s]=l}}}),this.records.push(t)}toJSON(){return{keys:this.keys,records:this.records}}}function U1(e,c,{getFn:n=ke.getFn,fieldNormWeight:t=ke.fieldNormWeight}={}){const a=new Wl({getFn:n,fieldNormWeight:t});return a.setKeys(e.map(H1)),a.setSources(c),a.create(),a}function Sy(e,{getFn:c=ke.getFn,fieldNormWeight:n=ke.fieldNormWeight}={}){const{keys:t,records:a}=e,s=new Wl({getFn:c,fieldNormWeight:n});return s.setKeys(t),s.setIndexRecords(a),s}function Za(e,{errors:c=0,currentLocation:n=0,expectedLocation:t=0,distance:a=ke.distance,ignoreLocation:s=ke.ignoreLocation}={}){const u=c/e.length;if(s)return u;const l=Math.abs(t-n);return a?u+l/a:l?1:u}function _y(e=[],c=ke.minMatchCharLength){let n=[],t=-1,a=-1,s=0;for(let u=e.length;s<u;s+=1){let l=e[s];l&&t===-1?t=s:!l&&t!==-1&&(a=s-1,a-t+1>=c&&n.push([t,a]),t=-1)}return e[s-1]&&s-t>=c&&n.push([t,s-1]),n}const st=32;function Cy(e,c,n,{location:t=ke.location,distance:a=ke.distance,threshold:s=ke.threshold,findAllMatches:u=ke.findAllMatches,minMatchCharLength:l=ke.minMatchCharLength,includeMatches:r=ke.includeMatches,ignoreLocation:o=ke.ignoreLocation}={}){if(c.length>st)throw new Error(fy(st));const i=c.length,d=e.length,f=Math.max(0,Math.min(t,d));let v=s,y=f;const b=l>1||r,k=b?Array(d):[];let g;for(;(g=e.indexOf(c,y))>-1;){let A=Za(c,{currentLocation:g,expectedLocation:f,distance:a,ignoreLocation:o});if(v=Math.min(A,v),y=g+i,b){let q=0;for(;q<i;)k[g+q]=1,q+=1}}y=-1;let p=[],j=1,P=i+d;const w=1<<i-1;for(let A=0;A<i;A+=1){let q=0,_=P;for(;q<_;)Za(c,{errors:A,currentLocation:f+_,expectedLocation:f,distance:a,ignoreLocation:o})<=v?q=_:P=_,_=Math.floor((P-q)/2+q);P=_;let x=Math.max(1,f-_+1),V=u?d:Math.min(f+_,d)+i,C=Array(V+2);C[V+1]=(1<<A)-1;for(let N=V;N>=x;N-=1){let Q=N-1,F=n[e.charAt(Q)];if(b&&(k[Q]=+!!F),C[N]=(C[N+1]<<1|1)&F,A&&(C[N]|=(p[N+1]|p[N])<<1|1|p[N+1]),C[N]&w&&(j=Za(c,{errors:A,currentLocation:Q,expectedLocation:f,distance:a,ignoreLocation:o}),j<=v)){if(v=j,y=Q,y<=f)break;x=Math.max(1,2*f-y)}}if(Za(c,{errors:A+1,currentLocation:f,expectedLocation:f,distance:a,ignoreLocation:o})>v)break;p=C}const I={isMatch:y>=0,score:Math.max(.001,j)};if(b){const A=_y(k,l);A.length?r&&(I.indices=A):I.isMatch=!1}return I}function wy(e){let c={};for(let n=0,t=e.length;n<t;n+=1){const a=e.charAt(n);c[a]=(c[a]||0)|1<<t-n-1}return c}class W1{constructor(c,{location:n=ke.location,threshold:t=ke.threshold,distance:a=ke.distance,includeMatches:s=ke.includeMatches,findAllMatches:u=ke.findAllMatches,minMatchCharLength:l=ke.minMatchCharLength,isCaseSensitive:r=ke.isCaseSensitive,ignoreLocation:o=ke.ignoreLocation}={}){if(this.options={location:n,threshold:t,distance:a,includeMatches:s,findAllMatches:u,minMatchCharLength:l,isCaseSensitive:r,ignoreLocation:o},this.pattern=r?c:c.toLowerCase(),this.chunks=[],!this.pattern.length)return;const i=(f,v)=>{this.chunks.push({pattern:f,alphabet:wy(f),startIndex:v})},d=this.pattern.length;if(d>st){let f=0;const v=d%st,y=d-v;for(;f<y;)i(this.pattern.substr(f,st),f),f+=st;if(v){const b=d-st;i(this.pattern.substr(b),b)}}else i(this.pattern,0)}searchIn(c){const{isCaseSensitive:n,includeMatches:t}=this.options;if(n||(c=c.toLowerCase()),this.pattern===c){let y={isMatch:!0,score:0};return t&&(y.indices=[[0,c.length-1]]),y}const{location:a,distance:s,threshold:u,findAllMatches:l,minMatchCharLength:r,ignoreLocation:o}=this.options;let i=[],d=0,f=!1;this.chunks.forEach(({pattern:y,alphabet:b,startIndex:k})=>{const{isMatch:g,score:p,indices:j}=Cy(c,y,b,{location:a+k,distance:s,threshold:u,findAllMatches:l,minMatchCharLength:r,includeMatches:t,ignoreLocation:o});g&&(f=!0),d+=p,g&&j&&(i=[...i,...j])});let v={isMatch:f,score:f?d/this.chunks.length:1};return f&&t&&(v.indices=i),v}}class Un{constructor(c){this.pattern=c}static isMultiMatch(c){return Ii(c,this.multiRegex)}static isSingleMatch(c){return Ii(c,this.singleRegex)}search(){}}function Ii(e,c){const n=e.match(c);return n?n[1]:null}class xy extends Un{constructor(c){super(c)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(c){const n=c===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Vy extends Un{constructor(c){super(c)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(c){const t=c.indexOf(this.pattern)===-1;return{isMatch:t,score:t?0:1,indices:[0,c.length-1]}}}class Iy extends Un{constructor(c){super(c)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(c){const n=c.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Ay extends Un{constructor(c){super(c)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(c){const n=!c.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,c.length-1]}}}class Ey extends Un{constructor(c){super(c)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(c){const n=c.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[c.length-this.pattern.length,c.length-1]}}}class Py extends Un{constructor(c){super(c)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(c){const n=!c.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,c.length-1]}}}class K1 extends Un{constructor(c,{location:n=ke.location,threshold:t=ke.threshold,distance:a=ke.distance,includeMatches:s=ke.includeMatches,findAllMatches:u=ke.findAllMatches,minMatchCharLength:l=ke.minMatchCharLength,isCaseSensitive:r=ke.isCaseSensitive,ignoreLocation:o=ke.ignoreLocation}={}){super(c),this._bitapSearch=new W1(c,{location:n,threshold:t,distance:a,includeMatches:s,findAllMatches:u,minMatchCharLength:l,isCaseSensitive:r,ignoreLocation:o})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(c){return this._bitapSearch.searchIn(c)}}class Y1 extends Un{constructor(c){super(c)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(c){let n=0,t;const a=[],s=this.pattern.length;for(;(t=c.indexOf(this.pattern,n))>-1;)n=t+s,a.push([t,n-1]);const u=!!a.length;return{isMatch:u,score:u?0:1,indices:a}}}const Ru=[xy,Y1,Iy,Ay,Py,Ey,Vy,K1],Ai=Ru.length,Ty=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,$y="|";function My(e,c={}){return e.split($y).map(n=>{let t=n.trim().split(Ty).filter(s=>s&&!!s.trim()),a=[];for(let s=0,u=t.length;s<u;s+=1){const l=t[s];let r=!1,o=-1;for(;!r&&++o<Ai;){const i=Ru[o];let d=i.isMultiMatch(l);d&&(a.push(new i(d,c)),r=!0)}if(!r)for(o=-1;++o<Ai;){const i=Ru[o];let d=i.isSingleMatch(l);if(d){a.push(new i(d,c));break}}}return a})}const By=new Set([K1.type,Y1.type]);class Ry{constructor(c,{isCaseSensitive:n=ke.isCaseSensitive,includeMatches:t=ke.includeMatches,minMatchCharLength:a=ke.minMatchCharLength,ignoreLocation:s=ke.ignoreLocation,findAllMatches:u=ke.findAllMatches,location:l=ke.location,threshold:r=ke.threshold,distance:o=ke.distance}={}){this.query=null,this.options={isCaseSensitive:n,includeMatches:t,minMatchCharLength:a,findAllMatches:u,ignoreLocation:s,location:l,threshold:r,distance:o},this.pattern=n?c:c.toLowerCase(),this.query=My(this.pattern,this.options)}static condition(c,n){return n.useExtendedSearch}searchIn(c){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:t,isCaseSensitive:a}=this.options;c=a?c:c.toLowerCase();let s=0,u=[],l=0;for(let r=0,o=n.length;r<o;r+=1){const i=n[r];u.length=0,s=0;for(let d=0,f=i.length;d<f;d+=1){const v=i[d],{isMatch:y,indices:b,score:k}=v.search(c);if(y){if(s+=1,l+=k,t){const g=v.constructor.type;By.has(g)?u=[...u,...b]:u.push(b)}}else{l=0,s=0,u.length=0;break}}if(s){let d={isMatch:!0,score:l/s};return t&&(d.indices=u),d}}return{isMatch:!1,score:1}}}const Ou=[];function Oy(...e){Ou.push(...e)}function Lu(e,c){for(let n=0,t=Ou.length;n<t;n+=1){let a=Ou[n];if(a.condition(e,c))return new a(e,c)}return new W1(e,c)}const bs={AND:"$and",OR:"$or"},Fu={PATH:"$path",PATTERN:"$val"},Nu=e=>!!(e[bs.AND]||e[bs.OR]),Ly=e=>!!e[Fu.PATH],Fy=e=>!qn(e)&&D1(e)&&!Nu(e),Ei=e=>({[bs.AND]:Object.keys(e).map(c=>({[c]:e[c]}))});function G1(e,c,{auto:n=!0}={}){const t=a=>{let s=Object.keys(a);const u=Ly(a);if(!u&&s.length>1&&!Nu(a))return t(Ei(a));if(Fy(a)){const r=u?a[Fu.PATH]:s[0],o=u?a[Fu.PATTERN]:a[r];if(!sn(o))throw new Error(dy(r));const i={keyId:Bu(r),pattern:o};return n&&(i.searcher=Lu(o,c)),i}let l={children:[],operator:s[0]};return s.forEach(r=>{const o=a[r];qn(o)&&o.forEach(i=>{l.children.push(t(i))})}),l};return Nu(e)||(e=Ei(e)),t(e)}function Ny(e,{ignoreFieldNorm:c=ke.ignoreFieldNorm}){e.forEach(n=>{let t=1;n.matches.forEach(({key:a,norm:s,score:u})=>{const l=a?a.weight:null;t*=Math.pow(u===0&&l?Number.EPSILON:u,(l||1)*(c?1:s))}),n.score=t})}function Dy(e,c){const n=e.matches;c.matches=[],wc(n)&&n.forEach(t=>{if(!wc(t.indices)||!t.indices.length)return;const{indices:a,value:s}=t;let u={indices:a,value:s};t.key&&(u.key=t.key.src),t.idx>-1&&(u.refIndex=t.idx),c.matches.push(u)})}function zy(e,c){c.score=e.score}function Hy(e,c,{includeMatches:n=ke.includeMatches,includeScore:t=ke.includeScore}={}){const a=[];return n&&a.push(Dy),t&&a.push(zy),e.map(s=>{const{idx:u}=s,l={item:c[u],refIndex:u};return a.length&&a.forEach(r=>{r(s,l)}),l})}class Ut{constructor(c,n={},t){this.options={...ke,...n},this.options.useExtendedSearch,this._keyStore=new yy(this.options.keys),this.setCollection(c,t)}setCollection(c,n){if(this._docs=c,n&&!(n instanceof Wl))throw new Error(oy);this._myIndex=n||U1(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(c){wc(c)&&(this._docs.push(c),this._myIndex.add(c))}remove(c=()=>!1){const n=[];for(let t=0,a=this._docs.length;t<a;t+=1){const s=this._docs[t];c(s,t)&&(this.removeAt(t),t-=1,a-=1,n.push(s))}return n}removeAt(c){this._docs.splice(c,1),this._myIndex.removeAt(c)}getIndex(){return this._myIndex}search(c,{limit:n=-1}={}){const{includeMatches:t,includeScore:a,shouldSort:s,sortFn:u,ignoreFieldNorm:l}=this.options;let r=sn(c)?sn(this._docs[0])?this._searchStringList(c):this._searchObjectList(c):this._searchLogical(c);return Ny(r,{ignoreFieldNorm:l}),s&&r.sort(u),N1(n)&&n>-1&&(r=r.slice(0,n)),Hy(r,this._docs,{includeMatches:t,includeScore:a})}_searchStringList(c){const n=Lu(c,this.options),{records:t}=this._myIndex,a=[];return t.forEach(({v:s,i:u,n:l})=>{if(!wc(s))return;const{isMatch:r,score:o,indices:i}=n.searchIn(s);r&&a.push({item:s,idx:u,matches:[{score:o,value:s,norm:l,indices:i}]})}),a}_searchLogical(c){const n=G1(c,this.options),t=(l,r,o)=>{if(!l.children){const{keyId:d,searcher:f}=l,v=this._findMatches({key:this._keyStore.get(d),value:this._myIndex.getValueForItemAtKeyId(r,d),searcher:f});return v&&v.length?[{idx:o,item:r,matches:v}]:[]}const i=[];for(let d=0,f=l.children.length;d<f;d+=1){const v=l.children[d],y=t(v,r,o);if(y.length)i.push(...y);else if(l.operator===bs.AND)return[]}return i},a=this._myIndex.records,s={},u=[];return a.forEach(({$:l,i:r})=>{if(wc(l)){let o=t(n,l,r);o.length&&(s[r]||(s[r]={idx:r,item:l,matches:[]},u.push(s[r])),o.forEach(({matches:i})=>{s[r].matches.push(...i)}))}}),u}_searchObjectList(c){const n=Lu(c,this.options),{keys:t,records:a}=this._myIndex,s=[];return a.forEach(({$:u,i:l})=>{if(!wc(u))return;let r=[];t.forEach((o,i)=>{r.push(...this._findMatches({key:o,value:u[i],searcher:n}))}),r.length&&s.push({idx:l,item:u,matches:r})}),s}_findMatches({key:c,value:n,searcher:t}){if(!wc(n))return[];let a=[];if(qn(n))n.forEach(({v:s,i:u,n:l})=>{if(!wc(s))return;const{isMatch:r,score:o,indices:i}=t.searchIn(s);r&&a.push({score:o,key:c,value:s,idx:u,norm:l,indices:i})});else{const{v:s,n:u}=n,{isMatch:l,score:r,indices:o}=t.searchIn(s);l&&a.push({score:r,key:c,value:s,norm:u,indices:o})}return a}}Ut.version="6.6.2";Ut.createIndex=U1;Ut.parseIndex=Sy;Ut.config=ke;Ut.parseQuery=G1;Oy(Ry);function Wt(e){switch(e){case"ken":return"憲法";case"gyo":return"行政法";case"min":return"民法";case"syo":return"商法";case"mso":return"民事訴訟法";case"kei":return"刑法";case"kso":return"刑事訴訟法"}}const Uy={data(){return{word:"",results:[]}},methods:{search(){var e={threshold:.3,includeMatches:!0,keys:["q","c1","c2","c3","c4","c5"]},c=new Ut(ha,e);this.results=c.search(this.word)},highlight(e,c){console.log(c);const n=[];let t=0;for(let a=0;a<c.length;a++){let s=e.slice(t,c[a][0])+'<span style="font-weight:bold; background-color:yellow;">',u=e.slice(c[a][0],c[a][1]+1)+"</span>";if(n.push(s,u),t=c[a][1]+1,a==c.length-1){let l=e.slice(c[a][1]+1);n.push(l)}}return n.join("")},onClick(e){let c=this.$router.resolve({name:"tantou",params:{subject:e.subject,year:e.year,qNum:e.num}});window.open(c.href,"_blank")},subjectFull(e){return Wt(e)}}},Wy=He("h1",null,"司法試験過去問題集・検索",-1),Ky=He("thead",null,[He("tr",null,[He("th",null," 科目 "),He("th",null," 年度 "),He("th",null," 問題番号 "),He("th",null," 問題 ")])],-1),Yy=["onClick"],Gy=["innerHTML"];function Xy(e,c,n,t,a,s){const u=xe("v-text-field"),l=xe("v-table");return Ae(),Qe("main",null,[Wy,m(u,{modelValue:a.word,"onUpdate:modelValue":[c[0]||(c[0]=r=>a.word=r),s.search],density:"compact",variant:"solo",label:"検索","append-inner-icon":"mdi-magnify","single-line":""},null,8,["modelValue","onUpdate:modelValue"]),m(l,null,{default:ge(()=>[Ky,He("tbody",null,[(Ae(!0),Qe(me,null,an(a.results,r=>(Ae(),Qe("tr",{key:r.refIndex,class:"tr-link",onClick:o=>s.onClick(r.item)},[He("td",null,zc(s.subjectFull(r.item.subject)),1),He("td",null,zc(r.item.year),1),He("td",null,zc(r.item.num),1),He("td",{innerHTML:s.highlight(r.item.q,r.matches[0].indices)},null,8,Gy)],8,Yy))),128))])]),_:1})])}const Qy=Xc(Uy,[["render",Xy]]),Zy={data(){return{open:[],subjects:["ken","gyo","min","syo","mso","kei","kso"]}},methods:{subjectFull(e){return Wt(e)},years(e){return["gyo","syo","mso","kso"].includes(e)?["2014","2013","2012","2011","2010","2009","2008","2007","2006"]:["2023","2022","2021","2020","2019","2018","2017","2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006"]},qNum(e,c){return e=="gyo"&&["2014","2013","2012","2011","2010","2009","2008","2007","2006"].includes(c)?21:e=="syo"&&c==2014?38:e=="syo"&&["2013","2012","2011","2010","2009"].includes(c)?37:e=="syo"&&["2008","2007","2006"].includes(c)?36:e=="mso"&&c==2014?57:e=="mso"&&["2013","2012","2011","2010","2009"].includes(c)?56:e=="mso"&&["2008","2006"].includes(c)?55:e=="mso"&&c==2007?53:e=="kso"&&["2014","2013","2012","2011","2010","2009","2008","2007","2006"].includes(c)?21:1}}},Jy=He("h1",null,"司法試験過去問題集・短答",-1);function eb(e,c,n,t,a,s){const u=xe("v-list-item"),l=xe("v-list-group"),r=xe("v-list");return Ae(),Qe("main",null,[Jy,m(r,{opened:a.open,"onUpdate:opened":c[0]||(c[0]=o=>a.open=o)},{default:ge(()=>[(Ae(!0),Qe(me,null,an(a.subjects,o=>(Ae(),kc(l,{value:o},{activator:ge(({props:i})=>[m(u,se(i,{title:s.subjectFull(o)}),null,16,["title"])]),default:ge(()=>[(Ae(!0),Qe(me,null,an(s.years(o),i=>(Ae(),kc(u,{title:i,to:"/tantou/"+o+"/"+i+"/"+s.qNum(o,i)},null,8,["title","to"]))),256))]),_:2},1032,["value"]))),256))]),_:1},8,["opened"])])}const cb=Xc(Zy,[["render",eb]]);const nb={props:{datum:{},subject:"",num:"",year:""},computed:{title(){return Wt(this.subject)+this.year+"年第"+this.num+"問"},filteredQ(){return this.datum.q.replace(/\n/g,`

`)}}};function tb(e,c,n,t,a,s){const u=xe("v-card-text"),l=xe("v-card");return Ae(),kc(l,{title:s.title,variant:"outlined"},{default:ge(()=>[m(u,{class:"q",innerHTML:s.filteredQ},null,8,["innerHTML"])]),_:1},8,["title"])}const X1=Xc(nb,[["render",tb],["__scopeId","data-v-bfaea5c9"]]);const ab={emits:["showAnswer"],props:{datum:{}},data(){return{toggle_multiple:[],toggle1:"",toggle2:"",toggle3:"",toggle4:"",toggle5:""}},computed:{filteredChoices(){return Object.keys(this.datum).filter(e=>e.startsWith("c")).filter(e=>this.datum[e]!="").map(e=>this.datum[e])}},methods:{hankaku2Zenkaku(e){return e.replace(/[０-９]/g,function(c){return String.fromCharCode(c.charCodeAt(0)-65248)})},getResult(e){let c="";typeof e=="object"?(c=Object.values(e).map(a=>a+1).reduce((a,s)=>a+String(s)).slice(0,this.datum.a.length),this.toggle_multiple=[],this.toggle1="",this.toggle2="",this.toggle3="",this.toggle4="",this.toggle5=""):c=e.substr(0,1);const n=this.hankaku2Zenkaku(c)==this.datum.a;this.$emit("showAnswer",n)},setToggle(e){return"toggle"+String(e)},getTheNumberOfChoices(e,c,n){return e=="gyo"&&c=="2012"&&n=="21"||e=="kso"&&c=="2007"&&n=="23"||e=="kso"&&c=="2007"&&n=="36"?5:e=="gyo"&&c=="2009"&&n=="36"||e=="min"&&c=="2006"&&n=="31"?4:e=="ken"&&c=="2007"&&n=="1"?8:e=="ken"&&c=="2007"&&n=="7"||e=="ken"&&c=="2006"&&n=="5"||e=="kso"&&c=="2006"&&n=="39"?3:e=="ken"&&c=="2007"&&n=="17"||e=="kso"&&c=="2007"&&n=="21"||e=="ken"&&c=="2006"&&n=="7"?6:2}}};function sb(e,c,n,t,a,s){const u=xe("v-btn"),l=xe("v-item"),r=xe("v-col"),o=xe("v-row"),i=xe("v-container"),d=xe("v-item-group");return n.datum.a.length>2||n.datum.subject=="ken"&&n.datum.year==2007&&n.datum.num==7||n.datum.subject=="kso"&&n.datum.year==2007&&n.datum.num==21?(Ae(),Qe(me,{key:0},[(Ae(!0),Qe(me,null,an(n.datum.a.length,f=>(Ae(),Qe("div",null,[m(d,{modelValue:e.$data["toggle"+f],"onUpdate:modelValue":v=>e.$data["toggle"+f]=v,mandatory:"","selected-class":"bg-grey"},{default:ge(()=>[m(i,null,{default:ge(()=>[m(o,null,{default:ge(()=>[(Ae(!0),Qe(me,null,an(s.getTheNumberOfChoices(n.datum.subject,n.datum.year,n.datum.num),v=>(Ae(),kc(r,{cols:"1"},{default:ge(()=>[m(l,null,{default:ge(({selectedClass:y,toggle:b})=>[m(u,{class:Nn(y),onClick:b},{default:ge(()=>[Oe(zc(v),1)]),_:2},1032,["class","onClick"])]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:2},1032,["modelValue","onUpdate:modelValue"])]))),256)),m(u,{onClick:c[0]||(c[0]=f=>s.getResult([a.toggle1,a.toggle2,a.toggle3,a.toggle4,a.toggle5]))},{default:ge(()=>[Oe("解答確認")]),_:1})],64)):n.datum.a.length==2?(Ae(),Qe(me,{key:1},[m(i,null,{default:ge(()=>[m(d,{modelValue:a.toggle_multiple,"onUpdate:modelValue":c[1]||(c[1]=f=>a.toggle_multiple=f),multiple:"","selected-class":"bg-grey"},{default:ge(()=>[(Ae(!0),Qe(me,null,an(s.filteredChoices,f=>(Ae(),kc(l,null,{default:ge(({selectedClass:v,toggle:y})=>[m(o,{align:"center"},{default:ge(()=>[m(r,{cols:"1"},{default:ge(()=>[m(u,{class:Nn(v),onClick:y},{default:ge(()=>[Oe(zc(f.substr(0,2)),1)]),_:2},1032,["class","onClick"])]),_:2},1024),m(r,{cols:"11",class:"choice"},{default:ge(()=>[Oe(zc(f.substr(2)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1},8,["modelValue"])]),_:1}),m(u,{onClick:c[2]||(c[2]=f=>s.getResult(a.toggle_multiple))},{default:ge(()=>[Oe("解答確認")]),_:1})],64)):(Ae(),kc(i,{key:2},{default:ge(()=>[(Ae(!0),Qe(me,null,an(s.filteredChoices,f=>(Ae(),kc(o,{align:"center"},{default:ge(()=>[m(r,{cols:"1"},{default:ge(()=>[m(u,{onClick:v=>s.getResult(f)},{default:ge(()=>[Oe(zc(f.split("．")[0]+"．"),1)]),_:2},1032,["onClick"])]),_:2},1024),m(r,{cols:"11",class:"choice"},{default:ge(()=>[Oe(zc(f.split("．")[1]),1)]),_:2},1024)]),_:2},1024))),256))]),_:1}))}const Q1=Xc(ab,[["render",sb],["__scopeId","data-v-a60a3253"]]);const ub={props:{datum:{},show:Boolean,correct:Boolean}},lb={class:"result"},rb={key:0,style:{color:"red"}},ib={key:1,style:{color:"blue"}},ob={class:"answer"};function db(e,c,n,t,a,s){return Ae(),Qe("div",{class:Nn({hide:!n.show})},[He("div",lb,[n.correct?(Ae(),Qe("p",rb,"○　正解")):(Ae(),Qe("p",ib,"×　不正解"))]),He("p",ob,"正解："+zc(n.datum.a),1)],2)}const Z1=Xc(ub,[["render",db],["__scopeId","data-v-73dba6f6"]]),fb={props:{questions:[],subject:"",year:""}};function mb(e,c,n,t,a,s){const u=xe("v-list-item"),l=xe("v-list"),r=xe("v-navigation-drawer");return Ae(),kc(r,{permanent:"",width:"150"},{default:ge(()=>[m(l,{nav:""},{default:ge(()=>[(Ae(!0),Qe(me,null,an(n.questions,o=>(Ae(),kc(u,{title:"第"+o+"問",to:"/tantou/"+n.subject+"/"+n.year+"/"+o,ref_for:!0,ref:"question"},null,8,["title","to"]))),256))]),_:1})]),_:1})}const vb=Xc(fb,[["render",mb]]),yb={components:{QuestionComponent:X1,ChoicesComponent:Q1,ResultComponent:Z1,LeftSidebarQuestionsComponent:vb},data(){return{num:this.$route.params.qNum,subject:this.$route.params.subject,year:this.$route.params.year,datum:{},correct:!1,show:!1,questions:[]}},created(){const e=ha.filter(n=>n.subject==this.subject&&n.year==this.year),c=Number(e[0].num);this.questions=this.range(c,c+e.length),this.datum=ha.filter(n=>n.subject==this.subject&&n.year==this.year&&n.num==this.num)[0]},computed:{breadcrumbs(){return[{text:"司法試験過去問題集",disabled:!1,to:{name:"home"}},{text:"短答",disabled:!1,to:{name:"tantouTop"}},{text:Wt(this.subject),disabled:!1,to:{name:"tantouTop"}},{text:this.year+"年",disabled:!1,to:{name:"tantou",params:{subject:this.subject,qNum:1}}},{text:"第"+this.num+"問",disabled:!1,to:{name:"tantou",params:{subject:this.subject,qNum:this.num}}}]}},beforeRouteUpdate(e,c,n){this.num=e.params.qNum,this.subject=e.params.subject,this.year=e.params.year,this.datum=ha.filter(t=>t.subject==e.params.subject&&t.year==e.params.year&&t.num==e.params.qNum)[0],this.correct=!1,this.show=!1,window.scrollTo(0,0),n()},methods:{prevQ(){this.$router.push({name:"tantou",params:{qNum:Number(this.num)-1}})},nextQ(){this.$router.push({name:"tantou",params:{qNum:Number(this.num)+1}})},showAnswer(e){this.correct=e,this.show=!0,window.scrollBy(0,1e3)},range(e,c){let n=[];for(let t=e;t<c;t++)n.push(t);return n}}},bb=He("h1",null,"司法試験過去問題集・短答",-1);function hb(e,c,n,t,a,s){const u=xe("LeftSidebarQuestionsComponent"),l=xe("v-breadcrumbs"),r=xe("QuestionComponent"),o=xe("ChoicesComponent"),i=xe("ResultComponent"),d=xe("v-btn"),f=xe("v-main"),v=xe("v-layout");return Ae(),kc(v,null,{default:ge(()=>[m(u,{questions:a.questions,subject:a.subject,year:a.year},null,8,["questions","subject","year"]),m(f,null,{default:ge(()=>[bb,m(l,{items:s.breadcrumbs,divider:">"},null,8,["items"]),m(r,{datum:a.datum,subject:a.subject,num:a.num,year:a.year},null,8,["datum","subject","num","year"]),m(o,{datum:a.datum,onShowAnswer:s.showAnswer},null,8,["datum","onShowAnswer"]),m(i,{datum:a.datum,show:a.show,correct:a.correct},null,8,["datum","show","correct"]),m(d,{onClick:s.prevQ},{default:ge(()=>[Oe("前の問題")]),_:1},8,["onClick"]),Oe("　"),m(d,{onClick:s.nextQ},{default:ge(()=>[Oe("次の問題")]),_:1},8,["onClick"])]),_:1})]),_:1})}const gb=Xc(yb,[["render",hb]]);const jb={emits:["getRandomQuestion","updateToggles"],data(){return{subjects:["ken","gyo","min","syo","mso","kei","kso"],years:["2023","2022","2021","2020","2019","2018","2017","2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006"],toggle_subjects:[0,1,2,3,4,5,6],toggle_years:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]}},created(){this.update(),this.$emit("getRandomQuestion",this.toggle_subjects,this.toggle_years)},methods:{transformSubject(e){return Wt(e)},update(){this.$emit("updateToggles",this.toggle_subjects,this.toggle_years)},checkSubjects(){this.toggle_subjects=[0,1,2,3,4,5,6],this.update()},clearSubjects(){this.toggle_subjects=[]},checkYears(){this.toggle_years=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],this.update()},clearYears(){this.toggle_years=[]}}},J1=e=>(j0("data-v-e5b951a0"),e=e(),q0(),e),qb=J1(()=>He("h4",{style:{"margin-left":"10px","margin-top":"10px"}},"科目選択",-1)),kb=J1(()=>He("h4",{style:{"margin-left":"10px","margin-top":"10px"}},"年度選択",-1));function pb(e,c,n,t,a,s){const u=xe("v-btn"),l=xe("v-item"),r=xe("v-item-group"),o=xe("v-navigation-drawer");return Ae(),Qe(me,null,[m(o,{permanent:"",width:"100"},{default:ge(()=>[qb,m(u,{class:"all-button",color:"grey-lighten-2",onClick:s.checkSubjects},{default:ge(()=>[Oe("全て選択")]),_:1},8,["onClick"]),m(u,{class:"all-button",color:"grey-lighten-2",onClick:s.clearSubjects},{default:ge(()=>[Oe("全て解除")]),_:1},8,["onClick"]),m(r,{modelValue:a.toggle_subjects,"onUpdate:modelValue":[c[0]||(c[0]=i=>a.toggle_subjects=i),s.update],multiple:"","selected-class":"bg-grey"},{default:ge(()=>[(Ae(!0),Qe(me,null,an(a.subjects,i=>(Ae(),kc(l,null,{default:ge(({selectedClass:d,toggle:f})=>[m(u,{class:Nn(["all-button",d]),onClick:f,style:{width:"100%"}},{default:ge(()=>[Oe(zc(s.transformSubject(i)),1)]),_:2},1032,["class","onClick"])]),_:2},1024))),256))]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1}),m(o,{style:{"margin-left":"5px"},permanent:"",width:"100"},{default:ge(()=>[kb,m(u,{class:"all-button",color:"grey-lighten-2",onClick:s.checkYears},{default:ge(()=>[Oe("全て選択")]),_:1},8,["onClick"]),m(u,{class:"all-button",color:"grey-lighten-2",onClick:s.clearYears},{default:ge(()=>[Oe("全て解除")]),_:1},8,["onClick"]),m(r,{modelValue:a.toggle_years,"onUpdate:modelValue":[c[1]||(c[1]=i=>a.toggle_years=i),s.update],multiple:"","selected-class":"bg-grey"},{default:ge(()=>[(Ae(!0),Qe(me,null,an(a.years,i=>(Ae(),kc(l,null,{default:ge(({selectedClass:d,toggle:f})=>[m(u,{class:Nn(["all-button",d]),onClick:f,style:{width:"100%"}},{default:ge(()=>[Oe(zc(i),1)]),_:2},1032,["class","onClick"])]),_:2},1024))),256))]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1})],64)}const Sb=Xc(jb,[["render",pb],["__scopeId","data-v-e5b951a0"]]),_b={components:{QuestionComponent:X1,ChoicesComponent:Q1,ResultComponent:Z1,LeftSidebarRandomComponent:Sb},data(){return{num:1,subject:"ken",year:2023,datum:{},correct:!1,show:!1,subjects:["ken","gyo","min","syo","mso","kei","kso"],years:["2023","2022","2021","2020","2019","2018","2017","2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006"],oldYears:["2014","2013","2012","2011","2010","2009","2008","2007","2006"],toggle_subjects:[],toggle_years:[]}},methods:{showAnswer(e){this.correct=e,this.show=!0,window.scrollBy(0,1e3)},transformSubject(e){return Wt(e)},randomQuestion(){try{this.getRandomQuestion(this.toggle_subjects,this.toggle_years)}catch{alert("エラーが発生しました。リロードします。"),this.$router.go({path:this.$router.currentRoute.path,force:!0})}},getRandomQuestion(e,c){this.correct=!1,this.show=!1;let n=e.map(u=>this.subjects[u]),t=c.map(u=>this.years[u]);this.subject=n[Math.floor(Math.random()*n.length)],["gyo","syo","mso","kso"].includes(this.subject)&&(t=t.filter(u=>u<2014)),this.year=t[Math.floor(Math.random()*t.length)];const s=ha.filter(u=>u.subject==this.subject&&u.year==this.year);this.datum=s[Math.floor(Math.random()*s.length)],this.num=this.datum.num},updateToggles(e,c){this.toggle_subjects=e,this.toggle_years=c}}},Cb=He("h1",null,"司法試験過去問題集・ランダム",-1),wb=He("br",null,null,-1);function xb(e,c,n,t,a,s){const u=xe("LeftSidebarRandomComponent"),l=xe("QuestionComponent"),r=xe("ChoicesComponent"),o=xe("ResultComponent"),i=xe("v-btn"),d=xe("v-main"),f=xe("v-layout");return Ae(),kc(f,null,{default:ge(()=>[m(u,{onGetRandomQuestion:s.getRandomQuestion,onUpdateToggles:s.updateToggles},null,8,["onGetRandomQuestion","onUpdateToggles"]),m(d,null,{default:ge(()=>[Cb,wb,m(l,{datum:a.datum,subject:a.subject,num:a.num,year:a.year},null,8,["datum","subject","num","year"]),m(r,{datum:a.datum,onShowAnswer:s.showAnswer},null,8,["datum","onShowAnswer"]),m(o,{datum:a.datum,show:a.show,correct:a.correct},null,8,["datum","show","correct"]),m(i,{onClick:s.randomQuestion},{default:ge(()=>[Oe("ランダムに1問出題")]),_:1},8,["onClick"])]),_:1})]),_:1})}const Vb=Xc(_b,[["render",xb]]),Ib=Gv({history:dv("/shihoushiken/"),routes:[{path:"/",name:"home",component:ay},{path:"/search",name:"search",component:Qy},{path:"/random",name:"random",component:Vb},{path:"/tantou",name:"tantouTop",component:cb},{path:"/tantou/:subject/:year/:qNum",name:"tantou",component:gb}]});function Pi(e,c,n){Ab(e,c),c.set(e,n)}function Ab(e,c){if(c.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Eb(e,c,n){var t=ed(e,c,"set");return Pb(e,t,n),n}function Pb(e,c,n){if(c.set)c.set.call(e,n);else{if(!c.writable)throw new TypeError("attempted to set read only private field");c.value=n}}function Jn(e,c){var n=ed(e,c,"get");return Tb(e,n)}function ed(e,c,n){if(!c.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return c.get(e)}function Tb(e,c){return c.get?c.get.call(e):c.value}function cd(e,c,n){const t=c.length-1;if(t<0)return e===void 0?n:e;for(let a=0;a<t;a++){if(e==null)return n;e=e[c[a]]}return e==null||e[c[t]]===void 0?n:e[c[t]]}function vt(e,c){if(e===c)return!0;if(e instanceof Date&&c instanceof Date&&e.getTime()!==c.getTime()||e!==Object(e)||c!==Object(c))return!1;const n=Object.keys(e);return n.length!==Object.keys(c).length?!1:n.every(t=>vt(e[t],c[t]))}function Du(e,c,n){return e==null||!c||typeof c!="string"?n:e[c]!==void 0?e[c]:(c=c.replace(/\[(\w+)\]/g,".$1"),c=c.replace(/^\./,""),cd(e,c.split("."),n))}function tn(e,c,n){if(c==null)return e===void 0?n:e;if(e!==Object(e)){if(typeof c!="function")return n;const a=c(e,n);return typeof a>"u"?n:a}if(typeof c=="string")return Du(e,c,n);if(Array.isArray(c))return cd(e,c,n);if(typeof c!="function")return n;const t=c(e,n);return typeof t>"u"?n:t}function un(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:e},(n,t)=>c+t)}function le(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(e==null||e===""))return isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${c}`:void 0}function zu(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function $b(e){return e==null?void 0:e.$el}const Ti=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16}),Hu=Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function nd(e){return Object.keys(e)}function Kt(e,c,n){const t=Object.create(null),a=Object.create(null);for(const s in e)c.some(u=>u instanceof RegExp?u.test(s):u===s)&&!(n!=null&&n.some(u=>u===s))?t[s]=e[s]:a[s]=e[s];return[t,a]}function mn(e,c){const n={...e};return c.forEach(t=>delete n[t]),n}function yt(e){return Kt(e,["class","style","id",/^data-/])}function $c(e){return e==null?[]:Array.isArray(e)?e:[e]}function fc(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(c,Math.min(n,e))}function $i(e){const c=e.toString().trim();return c.includes(".")?c.length-c.indexOf(".")-1:0}function Mi(e,c){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return e+n.repeat(Math.max(0,c-e.length))}function Mb(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let t=0;for(;t<e.length;)n.push(e.substr(t,c)),t+=c;return n}function Bi(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3;if(e<c)return`${e} B`;const n=c===1024?["Ki","Mi","Gi"]:["k","M","G"];let t=-1;for(;Math.abs(e)>=c&&t<n.length-1;)e/=c,++t;return`${e.toFixed(1)} ${n[t]}B`}function kn(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const t={};for(const a in e)t[a]=e[a];for(const a in c){const s=e[a],u=c[a];if(zu(s)&&zu(u)){t[a]=kn(s,u,n);continue}if(Array.isArray(s)&&Array.isArray(u)&&n){t[a]=n(s,u);continue}t[a]=u}return t}function Ln(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(Ln.cache.has(e))return Ln.cache.get(e);const c=e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return Ln.cache.set(e,c),c}Ln.cache=new Map;function ga(e,c){if(!c||typeof c!="object")return[];if(Array.isArray(c))return c.map(n=>ga(e,n)).flat(1);if(Array.isArray(c.children))return c.children.map(n=>ga(e,n)).flat(1);if(c.component){if(Object.getOwnPropertySymbols(c.component.provides).includes(e))return[c.component];if(c.component.subTree)return ga(e,c.component.subTree).flat(1)}return[]}var Ja=new WeakMap,St=new WeakMap;class Bb{constructor(c){Pi(this,Ja,{writable:!0,value:[]}),Pi(this,St,{writable:!0,value:0}),this.size=c}push(c){Jn(this,Ja)[Jn(this,St)]=c,Eb(this,St,(Jn(this,St)+1)%this.size)}values(){return Jn(this,Ja).slice(Jn(this,St)).concat(Jn(this,Ja).slice(0,Jn(this,St)))}}function Rb(e){return"touches"in e?{clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}:{clientX:e.clientX,clientY:e.clientY}}function Kl(e){const c=uc({}),n=h(e);return Gc(()=>{for(const t in n.value)c[t]=n.value[t]},{flush:"sync"}),El(c)}function hs(e,c){return e.includes(c)}const Ob=/^on[^a-z]/,Lb=e=>Ob.test(e),ln=()=>[Function,Array];function Ri(e,c){return c="on"+_n(c),!!(e[c]||e[`${c}Once`]||e[`${c}Capture`]||e[`${c}OnceCapture`]||e[`${c}CaptureOnce`])}function Yl(e){for(var c=arguments.length,n=new Array(c>1?c-1:0),t=1;t<c;t++)n[t-1]=arguments[t];if(Array.isArray(e))for(const a of e)a(...n);else typeof e=="function"&&e(...n)}function Gl(e){const c=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map(n=>`${n}:not([tabindex="-1"]):not([disabled])`).join(", ");return[...e.querySelectorAll(c)]}function td(e,c){var a,s,u;const n=Gl(e),t=n.indexOf(document.activeElement);if(!c)e.contains(document.activeElement)||(a=n[0])==null||a.focus();else if(c==="first")(s=n[0])==null||s.focus();else if(c==="last")(u=n.at(-1))==null||u.focus();else{let l,r=t;const o=c==="next"?1:-1;do r+=o,l=n[r];while((!l||l.offsetParent==null)&&r<n.length&&r>=0);l?l.focus():td(e,c==="next"?"first":"last")}}const ad=["top","bottom"],Fb=["start","end","left","right"];function Uu(e,c){let[n,t]=e.split(" ");return t||(t=hs(ad,n)?"start":hs(Fb,n)?"top":"center"),{side:Wu(n,c),align:Wu(t,c)}}function Wu(e,c){return e==="start"?c?"right":"left":e==="end"?c?"left":"right":e}function ou(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function du(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function Oi(e){return{side:e.align,align:e.side}}function Li(e){return hs(ad,e.side)?"y":"x"}class $t{constructor(c){let{x:n,y:t,width:a,height:s}=c;this.x=n,this.y=t,this.width=a,this.height=s}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Fi(e,c){return{x:{before:Math.max(0,c.left-e.left),after:Math.max(0,e.right-c.right)},y:{before:Math.max(0,c.top-e.top),after:Math.max(0,e.bottom-c.bottom)}}}function Xl(e){const c=e.getBoundingClientRect(),n=getComputedStyle(e),t=n.transform;if(t){let a,s,u,l,r;if(t.startsWith("matrix3d("))a=t.slice(9,-1).split(/, /),s=+a[0],u=+a[5],l=+a[12],r=+a[13];else if(t.startsWith("matrix("))a=t.slice(7,-1).split(/, /),s=+a[0],u=+a[3],l=+a[4],r=+a[5];else return new $t(c);const o=n.transformOrigin,i=c.x-l-(1-s)*parseFloat(o),d=c.y-r-(1-u)*parseFloat(o.slice(o.indexOf(" ")+1)),f=s?c.width/s:e.offsetWidth+1,v=u?c.height/u:e.offsetHeight+1;return new $t({x:i,y:d,width:f,height:v})}else return new $t(c)}function lt(e,c,n){if(typeof e.animate>"u")return{finished:Promise.resolve()};let t;try{t=e.animate(c,n)}catch{return{finished:Promise.resolve()}}return typeof t.finished>"u"&&(t.finished=new Promise(a=>{t.onfinish=()=>{a(t)}})),t}function sd(e,c,n){if(n&&(c={__isVue:!0,$parent:n,$options:c}),c){if(c.$_alreadyWarned=c.$_alreadyWarned||[],c.$_alreadyWarned.includes(e))return;c.$_alreadyWarned.push(e)}return`[Vuetify] ${e}`+(c?zb(c):"")}function Fn(e,c,n){const t=sd(e,c,n);t!=null&&console.warn(t)}function Ku(e,c,n){const t=sd(e,c,n);t!=null&&console.error(t)}const Nb=/(?:^|[-_])(\w)/g,Db=e=>e.replace(Nb,c=>c.toUpperCase()).replace(/[-_]/g,"");function fu(e,c){if(e.$root===e)return"<Root>";const n=typeof e=="function"&&e.cid!=null?e.options:e.__isVue?e.$options||e.constructor.options:e||{};let t=n.name||n._componentTag;const a=n.__file;if(!t&&a){const s=a.match(/([^/\\]+)\.vue$/);t=s==null?void 0:s[1]}return(t?`<${Db(t)}>`:"<Anonymous>")+(a&&c!==!1?` at ${a}`:"")}function zb(e){if(e.__isVue&&e.$parent){const c=[];let n=0;for(;e;){if(c.length>0){const t=c[c.length-1];if(t.constructor===e.constructor){n++,e=e.$parent;continue}else n>0&&(c[c.length-1]=[t,n],n=0)}c.push(e),e=e.$parent}return`

found in

`+c.map((t,a)=>`${a===0?"---> ":" ".repeat(5+a*2)}${Array.isArray(t)?`${fu(t[0])}... (${t[1]} recursive calls)`:fu(t)}`).join(`
`)}else return`

(found in ${fu(e)})`}const Hb=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],Ub=e=>e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055,Wb=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],Kb=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function ud(e){const c=Array(3),n=Ub,t=Hb;for(let a=0;a<3;++a)c[a]=Math.round(fc(n(t[a][0]*e[0]+t[a][1]*e[1]+t[a][2]*e[2]))*255);return{r:c[0],g:c[1],b:c[2]}}function Ql(e){let{r:c,g:n,b:t}=e;const a=[0,0,0],s=Kb,u=Wb;c=s(c/255),n=s(n/255),t=s(t/255);for(let l=0;l<3;++l)a[l]=u[l][0]*c+u[l][1]*n+u[l][2]*t;return a}const gs=.20689655172413793,Yb=e=>e>gs**3?Math.cbrt(e):e/(3*gs**2)+4/29,Gb=e=>e>gs?e**3:3*gs**2*(e-4/29);function ld(e){const c=Yb,n=c(e[1]);return[116*n-16,500*(c(e[0]/.95047)-n),200*(n-c(e[2]/1.08883))]}function rd(e){const c=Gb,n=(e[0]+16)/116;return[c(n+e[1]/500)*.95047,c(n),c(n-e[2]/200)*1.08883]}function Ni(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}function rt(e){if(typeof e=="number")return(isNaN(e)||e<0||e>16777215)&&Fn(`'${e}' is not a valid hex color`),{r:(e&16711680)>>16,g:(e&65280)>>8,b:e&255};if(typeof e=="string"){let c=e.startsWith("#")?e.slice(1):e;[3,4].includes(c.length)?c=c.split("").map(t=>t+t).join(""):[6,8].includes(c.length)||Fn(`'${e}' is not a valid hex(a) color`);const n=parseInt(c,16);return(isNaN(n)||n<0||n>4294967295)&&Fn(`'${e}' is not a valid hex(a) color`),md(c)}else throw new TypeError(`Colors can only be numbers or strings, recieved ${e==null?e:e.constructor.name} instead`)}function Rs(e){const{h:c,s:n,v:t,a}=e,s=l=>{const r=(l+c/60)%6;return t-t*n*Math.max(Math.min(r,4-r,1),0)},u=[s(5),s(3),s(1)].map(l=>Math.round(l*255));return{r:u[0],g:u[1],b:u[2],a}}function Zl(e){if(!e)return{h:0,s:1,v:1,a:1};const c=e.r/255,n=e.g/255,t=e.b/255,a=Math.max(c,n,t),s=Math.min(c,n,t);let u=0;a!==s&&(a===c?u=60*(0+(n-t)/(a-s)):a===n?u=60*(2+(t-c)/(a-s)):a===t&&(u=60*(4+(c-n)/(a-s)))),u<0&&(u=u+360);const l=a===0?0:(a-s)/a,r=[u,l,a];return{h:r[0],s:r[1],v:r[2],a:e.a}}function id(e){const{h:c,s:n,v:t,a}=e,s=t-t*n/2,u=s===1||s===0?0:(t-s)/Math.min(s,1-s);return{h:c,s:u,l:s,a}}function od(e){const{h:c,s:n,l:t,a}=e,s=t+n*Math.min(t,1-t),u=s===0?0:2-2*t/s;return{h:c,s:u,v:s,a}}function Xb(e){let{r:c,g:n,b:t,a}=e;return a===void 0?`rgb(${c}, ${n}, ${t})`:`rgba(${c}, ${n}, ${t}, ${a})`}function dd(e){return Xb(Rs(e))}function es(e){const c=Math.round(e).toString(16);return("00".substr(0,2-c.length)+c).toUpperCase()}function fd(e){let{r:c,g:n,b:t,a}=e;return`#${[es(c),es(n),es(t),a!==void 0?es(Math.round(a*255)):""].join("")}`}function md(e){e=bd(e);let[c,n,t,a]=Mb(e,2).map(s=>parseInt(s,16));return a=a===void 0?a:a/255,{r:c,g:n,b:t,a}}function vd(e){const c=md(e);return Zl(c)}function yd(e){return fd(Rs(e))}function bd(e){return e.startsWith("#")&&(e=e.slice(1)),e=e.replace(/([^0-9a-f])/gi,"F"),(e.length===3||e.length===4)&&(e=e.split("").map(c=>c+c).join("")),e.length!==6&&(e=Mi(Mi(e,6),8,"F")),e}function Qb(e,c){const n=ld(Ql(e));return n[0]=n[0]+c*10,ud(rd(n))}function Zb(e,c){const n=ld(Ql(e));return n[0]=n[0]-c*10,ud(rd(n))}function Yu(e){const c=rt(e);return Ql(c)[1]}function Jb(e,c){const n=Yu(e),t=Yu(c),a=Math.max(n,t),s=Math.min(n,t);return(a+.05)/(s+.05)}function he(e,c){return n=>Object.keys(e).reduce((t,a)=>{const u=typeof e[a]=="object"&&e[a]!=null&&!Array.isArray(e[a])?e[a]:{type:e[a]};return n&&a in n?t[a]={...u,default:n[a]}:t[a]=u,c&&!t[a].source&&(t[a].source=c),t},{})}const ne=he({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component");function zn(e,c){let n;function t(){n=pl(),n.run(()=>c.length?c(()=>{n==null||n.stop(),t()}):c())}ae(e,a=>{a&&!n?t():a||(n==null||n.stop(),n=void 0)},{immediate:!0}),Ic(()=>{n==null||n.stop()})}const Ia=Symbol.for("vuetify:defaults");function eh(e){return $(e)}function Jl(){const e=Ee(Ia);if(!e)throw new Error("[Vuetify] Could not find defaults instance");return e}function nc(e,c){const n=Jl(),t=$(e),a=h(()=>{if(dc(c==null?void 0:c.disabled))return n.value;const u=dc(c==null?void 0:c.scoped),l=dc(c==null?void 0:c.reset),r=dc(c==null?void 0:c.root);let o=kn(t.value,{prev:n.value});if(u)return o;if(l||r){const i=Number(l||1/0);for(let d=0;d<=i&&!(!o||!("prev"in o));d++)o=o.prev;return o}return o.prev?kn(o.prev,o):o});return Ge(Ia,a),a}function ch(e,c){var n,t;return typeof((n=e.props)==null?void 0:n[c])<"u"||typeof((t=e.props)==null?void 0:t[Ln(c)])<"u"}function nh(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Jl();const t=rc("useDefaults");if(c=c??t.type.name??t.type.__name,!c)throw new Error("[Vuetify] Could not determine component name");const a=h(()=>{var r;return(r=n.value)==null?void 0:r[e._as??c]}),s=new Proxy(e,{get(r,o){var d,f,v,y;const i=Reflect.get(r,o);return o==="class"||o==="style"?[(d=a.value)==null?void 0:d[o],i].filter(b=>b!=null):typeof o=="string"&&!ch(t.vnode,o)?((f=a.value)==null?void 0:f[o])??((y=(v=n.value)==null?void 0:v.global)==null?void 0:y[o])??i:i}}),u=Al();Gc(()=>{if(a.value){const r=Object.entries(a.value).filter(o=>{let[i]=o;return i.startsWith(i[0].toUpperCase())});r.length&&(u.value=Object.fromEntries(r))}});function l(){zn(u,()=>{var r;nc(kn(((r=uh(Ia))==null?void 0:r.value)??{},u.value))})}return{props:s,provideSubDefaults:l}}function Bc(e){if(e._setup=e._setup??e.setup,!e.name)return Fn("The component is missing an explicit name, unable to generate default prop value"),e;if(e._setup){e.props=he(e.props??{},Ln(e.name))();const c=Object.keys(e.props);e.filterProps=function(t){return Kt(t,c,["class","style"])},e.props._as=String,e.setup=function(t,a){const s=Jl();if(!s.value)return e._setup(t,a);const{props:u,provideSubDefaults:l}=nh(t,t._as??e.name,s),r=e._setup(u,a);return l(),r}}return e}function W(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return c=>(e?Bc:Bl)(c)}function Qc(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return W()({name:n??_n(Mc(e.replace(/__/g,"-"))),props:{tag:{type:String,default:c},...ne()},setup(t,a){let{slots:s}=a;return()=>{var u;return dn(t.tag,{class:[e,t.class],style:t.style},(u=s.default)==null?void 0:u.call(s))}}})}function hd(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const c=e.getRootNode();return c!==document&&c.getRootNode({composed:!0})!==document?null:c}const Aa="cubic-bezier(0.4, 0, 0.2, 1)",th="cubic-bezier(0.0, 0, 0.2, 1)",ah="cubic-bezier(0.4, 0, 1, 1)";function rc(e,c){const n=$s();if(!n)throw new Error(`[Vuetify] ${e} ${c||"must be called from inside a setup function"}`);return n}function wn(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const c=rc(e).type;return Ln((c==null?void 0:c.aliasName)||(c==null?void 0:c.name))}let gd=0,rs=new WeakMap;function yc(){const e=rc("getUid");if(rs.has(e))return rs.get(e);{const c=gd++;return rs.set(e,c),c}}yc.reset=()=>{gd=0,rs=new WeakMap};function jd(e){for(;e;){if(er(e))return e;e=e.parentElement}return document.scrollingElement}function js(e,c){const n=[];if(c&&e&&!c.contains(e))return n;for(;e&&(er(e)&&n.push(e),e!==c);)e=e.parentElement;return n}function er(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const c=window.getComputedStyle(e);return c.overflowY==="scroll"||c.overflowY==="auto"&&e.scrollHeight>e.clientHeight}const Je=typeof window<"u",cr=Je&&"IntersectionObserver"in window,sh=Je&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),Gu=Je&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports("selector(:focus-visible)");function uh(e){const{provides:c}=rc("injectSelf");if(c&&e in c)return c[e]}function lh(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function X(e){const c=rc("useRender");c.render=e}function Se(e,c,n){let t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:d=>d,a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:d=>d;const s=rc("useProxiedModel"),u=$(e[c]!==void 0?e[c]:n),l=Ln(c),o=h(l!==c?()=>{var d,f,v,y;return e[c],!!(((d=s.vnode.props)!=null&&d.hasOwnProperty(c)||(f=s.vnode.props)!=null&&f.hasOwnProperty(l))&&((v=s.vnode.props)!=null&&v.hasOwnProperty(`onUpdate:${c}`)||(y=s.vnode.props)!=null&&y.hasOwnProperty(`onUpdate:${l}`)))}:()=>{var d,f;return e[c],!!((d=s.vnode.props)!=null&&d.hasOwnProperty(c)&&((f=s.vnode.props)!=null&&f.hasOwnProperty(`onUpdate:${c}`)))});zn(()=>!o.value,()=>{ae(()=>e[c],d=>{u.value=d})});const i=h({get(){const d=e[c];return t(o.value?d:u.value)},set(d){const f=a(d),v=Ce(o.value?e[c]:u.value);v===f||t(v)===d||(u.value=f,s==null||s.emit(`update:${c}`,f))}});return Object.defineProperty(i,"externalValue",{get:()=>o.value?e[c]:u.value}),i}const rh={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},Di="$vuetify.",zi=(e,c)=>e.replace(/\{(\d+)\}/g,(n,t)=>String(c[+t])),qd=(e,c,n)=>function(t){for(var a=arguments.length,s=new Array(a>1?a-1:0),u=1;u<a;u++)s[u-1]=arguments[u];if(!t.startsWith(Di))return zi(t,s);const l=t.replace(Di,""),r=e.value&&n.value[e.value],o=c.value&&n.value[c.value];let i=Du(r,l,null);return i||(Fn(`Translation key "${t}" not found in "${e.value}", trying fallback locale`),i=Du(o,l,null)),i||(Ku(`Translation key "${t}" not found in fallback`),i=t),typeof i!="string"&&(Ku(`Translation key "${t}" has a non-string value`),i=t),zi(i,s)};function kd(e,c){return(n,t)=>new Intl.NumberFormat([e.value,c.value],t).format(n)}function mu(e,c,n){const t=Se(e,c,e[c]??n.value);return t.value=e[c]??n.value,ae(n,a=>{e[c]==null&&(t.value=n.value)}),t}function pd(e){return c=>{const n=mu(c,"locale",e.current),t=mu(c,"fallback",e.fallback),a=mu(c,"messages",e.messages);return{name:"vuetify",current:n,fallback:t,messages:a,t:qd(n,t,a),n:kd(n,t),provide:pd({current:n,fallback:t,messages:a})}}}function ih(e){const c=$((e==null?void 0:e.locale)??"en"),n=$((e==null?void 0:e.fallback)??"en"),t=$({en:rh,...e==null?void 0:e.messages});return{name:"vuetify",current:c,fallback:n,messages:t,t:qd(c,n,t),n:kd(c,n),provide:pd({current:c,fallback:n,messages:t})}}const oh={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1},Lt=Symbol.for("vuetify:locale");function dh(e){return e.name!=null}function fh(e){const c=e!=null&&e.adapter&&dh(e==null?void 0:e.adapter)?e==null?void 0:e.adapter:ih(e),n=vh(c,e);return{...c,...n}}function Rc(){const e=Ee(Lt);if(!e)throw new Error("[Vuetify] Could not find injected locale instance");return e}function mh(e){const c=Ee(Lt);if(!c)throw new Error("[Vuetify] Could not find injected locale instance");const n=c.provide(e),t=yh(n,c.rtl,e),a={...n,...t};return Ge(Lt,a),a}function vh(e,c){const n=$((c==null?void 0:c.rtl)??oh),t=h(()=>n.value[e.current.value]??!1);return{isRtl:t,rtl:n,rtlClasses:h(()=>`v-locale--is-${t.value?"rtl":"ltr"}`)}}function yh(e,c,n){const t=h(()=>n.rtl??c.value[e.current.value]??!1);return{isRtl:t,rtl:c,rtlClasses:h(()=>`v-locale--is-${t.value?"rtl":"ltr"}`)}}function xn(){const e=Ee(Lt);if(!e)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:e.isRtl,rtlClasses:e.rtlClasses}}function bh(e){let c=[];const n=[],t=Sd(e),a=_d(e);for(let s=0;s<t.getDay();s++)c.push(null);for(let s=1;s<=a.getDate();s++){const u=new Date(e.getFullYear(),e.getMonth(),s);c.push(u),c.length===7&&(n.push(c),c=[])}for(let s=c.length;s<7;s++)c.push(null);return n.push(c),n}function Sd(e){return new Date(e.getFullYear(),e.getMonth(),1)}function _d(e){return new Date(e.getFullYear(),e.getMonth()+1,0)}function hh(e){if(e==null)return null;if(e instanceof Date)return e;if(typeof e=="string"){const c=Date.parse(e);if(!isNaN(c))return new Date(c)}return null}const gh={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:0,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:0,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0},Hi=new Date(2e3,0,2);function jh(e){const c=gh[e.slice(-2).toUpperCase()];return un(7).map(n=>{const t=new Date(Hi);return t.setDate(Hi.getDate()+c+n),new Intl.DateTimeFormat(e,{weekday:"long"}).format(t)})}function qh(e,c,n){const t=new Date(e);let a={};switch(c){case"fullDateWithWeekday":a={weekday:"long",day:"numeric",month:"long",year:"numeric"};break;case"normalDateWithWeekday":a={weekday:"short",day:"numeric",month:"short",year:"numeric"};break;case"keyboardDate":a={};break;case"monthAndDate":a={month:"long",day:"numeric"};break;case"monthAndYear":a={month:"long",year:"numeric"};break;default:a={timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,a).format(t)}function kh(e,c){const n=new Date(e);return n.setDate(n.getDate()+c),n}function ph(e,c){const n=new Date(e);return n.setMonth(n.getMonth()+c),n}function Sh(e){return e.getFullYear()}function _h(e){return e.getMonth()}function Ch(e){return new Date(e.getFullYear(),0,1)}function wh(e){return new Date(e.getFullYear(),11,31)}function vu(e){return new Date(e,0,1)}function xh(e){let c=e.getFullYear(),n=vu(c);if(e<n)c=c-1,n=vu(c);else{const s=vu(c+1);e>=s&&(c=c+1,n=s)}const t=Math.abs(e.getTime()-n.getTime()),a=Math.ceil(t/(1e3*60*60*24));return Math.floor(a/7)+1}function Vh(e,c){return Cd(e,c[0])&&Ah(e,c[1])}function Ih(e){const c=new Date(e);return c instanceof Date&&!isNaN(c.getTime())}function Cd(e,c){return e.getTime()>c.getTime()}function Ah(e,c){return e.getTime()<c.getTime()}function Eh(e,c){return e.getTime()===c.getTime()}function Ph(e,c){return e.getDate()===c.getDate()&&e.getMonth()===c.getMonth()&&e.getFullYear()===c.getFullYear()}function Th(e,c){return e.getMonth()===c.getMonth()&&e.getFullYear()===c.getFullYear()}function $h(e,c,n){const t=new Date(e),a=new Date(c);return n==="month"?t.getMonth()-a.getMonth()+(t.getFullYear()-a.getFullYear())*12:Math.floor((t.getTime()-a.getTime())/(1e3*60*60*24))}function Mh(e,c){const n=new Date(e);return n.setFullYear(c),n}class Bh{constructor(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"en";this.locale=c}date(c){return hh(c)}addDays(c,n){return kh(c,n)}addMonths(c,n){return ph(c,n)}getWeekArray(c){return bh(c)}startOfMonth(c){return Sd(c)}endOfMonth(c){return _d(c)}format(c,n){return qh(c,n,this.locale)}isEqual(c,n){return Eh(c,n)}isValid(c){return Ih(c)}isWithinRange(c,n){return Vh(c,n)}isAfter(c,n){return Cd(c,n)}isSameDay(c,n){return Ph(c,n)}isSameMonth(c,n){return Th(c,n)}setYear(c,n){return Mh(c,n)}getDiff(c,n,t){return $h(c,n,t)}getWeek(c){return xh(c)}getWeekdays(){return jh(this.locale)}getYear(c){return Sh(c)}getMonth(c){return _h(c)}startOfYear(c){return Ch(c)}endOfYear(c){return wh(c)}}const Ui=Symbol.for("vuetify:date-adapter");function Rh(e){return e??{adapter:Bh}}const Os=["sm","md","lg","xl","xxl"],Xu=Symbol.for("vuetify:display"),Wi={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},Oh=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Wi;return kn(Wi,e)};function Ki(e){return Je&&!e?window.innerWidth:0}function Yi(e){return Je&&!e?window.innerHeight:0}function Gi(e){const c=Je&&!e?window.navigator.userAgent:"ssr";function n(y){return!!c.match(y)}const t=n(/android/i),a=n(/iphone|ipad|ipod/i),s=n(/cordova/i),u=n(/electron/i),l=n(/chrome/i),r=n(/edge/i),o=n(/firefox/i),i=n(/opera/i),d=n(/win/i),f=n(/mac/i),v=n(/linux/i);return{android:t,ios:a,cordova:s,electron:u,chrome:l,edge:r,firefox:o,opera:i,win:d,mac:f,linux:v,touch:sh,ssr:c==="ssr"}}function Lh(e,c){const{thresholds:n,mobileBreakpoint:t}=Oh(e),a=$(Yi(c)),s=Al(Gi(c)),u=uc({}),l=$(Ki(c));function r(){a.value=Yi(),l.value=Ki()}function o(){r(),s.value=Gi()}return Gc(()=>{const i=l.value<n.sm,d=l.value<n.md&&!i,f=l.value<n.lg&&!(d||i),v=l.value<n.xl&&!(f||d||i),y=l.value<n.xxl&&!(v||f||d||i),b=l.value>=n.xxl,k=i?"xs":d?"sm":f?"md":v?"lg":y?"xl":"xxl",g=typeof t=="number"?t:n[t],p=l.value<g;u.xs=i,u.sm=d,u.md=f,u.lg=v,u.xl=y,u.xxl=b,u.smAndUp=!i,u.mdAndUp=!(i||d),u.lgAndUp=!(i||d||f),u.xlAndUp=!(i||d||f||v),u.smAndDown=!(f||v||y||b),u.mdAndDown=!(v||y||b),u.lgAndDown=!(y||b),u.xlAndDown=!b,u.name=k,u.height=a.value,u.width=l.value,u.mobile=p,u.mobileBreakpoint=t,u.platform=s.value,u.thresholds=n}),Je&&window.addEventListener("resize",r,{passive:!0}),{...El(u),update:o,ssr:!!c}}function bt(){const e=Ee(Xu);if(!e)throw new Error("Could not find Vuetify display injection");return e}const Fh={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"},Nh={component:e=>dn(tr,{...e,class:"mdi"})},qe=[String,Function,Object,Array],Qu=Symbol.for("vuetify:icons"),Ls=he({icon:{type:qe},tag:{type:String,required:!0}},"icon"),Zu=W()({name:"VComponentIcon",props:Ls(),setup(e,c){let{slots:n}=c;return()=>{const t=e.icon;return m(e.tag,null,{default:()=>{var a;return[e.icon?m(t,null,null):(a=n.default)==null?void 0:a.call(n)]}})}}}),nr=Bc({name:"VSvgIcon",inheritAttrs:!1,props:Ls(),setup(e,c){let{attrs:n}=c;return()=>m(e.tag,se(n,{style:null}),{default:()=>[m("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(e.icon)?e.icon.map(t=>Array.isArray(t)?m("path",{d:t[0],"fill-opacity":t[1]},null):m("path",{d:t},null)):m("path",{d:e.icon},null)])]})}}),Dh=Bc({name:"VLigatureIcon",props:Ls(),setup(e){return()=>m(e.tag,null,{default:()=>[e.icon]})}}),tr=Bc({name:"VClassIcon",props:Ls(),setup(e){return()=>m(e.tag,{class:e.icon},null)}}),zh={svg:{component:nr},class:{component:tr}};function Hh(e){return kn({defaultSet:"mdi",sets:{...zh,mdi:Nh},aliases:Fh},e)}const Uh=e=>{const c=Ee(Qu);if(!c)throw new Error("Missing Vuetify Icons provide!");return{iconData:h(()=>{var r;const t=dc(e);if(!t)return{component:Zu};let a=t;if(typeof a=="string"&&(a=a.trim(),a.startsWith("$")&&(a=(r=c.aliases)==null?void 0:r[a.slice(1)])),!a)throw new Error(`Could not find aliased icon "${t}"`);if(Array.isArray(a))return{component:nr,icon:a};if(typeof a!="string")return{component:Zu,icon:a};const s=Object.keys(c.sets).find(o=>typeof a=="string"&&a.startsWith(`${o}:`)),u=s?a.slice(s.length+1):a;return{component:c.sets[s??c.defaultSet].component,icon:u}})}},_t=2.4,Xi=.2126729,Qi=.7151522,Zi=.072175,Wh=.55,Kh=.58,Yh=.57,Gh=.62,cs=.03,Ji=1.45,Xh=5e-4,Qh=1.25,Zh=1.25,eo=.078,co=12.82051282051282,ns=.06,no=.001;function to(e,c){const n=(e.r/255)**_t,t=(e.g/255)**_t,a=(e.b/255)**_t,s=(c.r/255)**_t,u=(c.g/255)**_t,l=(c.b/255)**_t;let r=n*Xi+t*Qi+a*Zi,o=s*Xi+u*Qi+l*Zi;if(r<=cs&&(r+=(cs-r)**Ji),o<=cs&&(o+=(cs-o)**Ji),Math.abs(o-r)<Xh)return 0;let i;if(o>r){const d=(o**Wh-r**Kh)*Qh;i=d<no?0:d<eo?d-d*co*ns:d-ns}else{const d=(o**Gh-r**Yh)*Zh;i=d>-no?0:d>-eo?d-d*co*ns:d+ns}return i*100}const Ea=Symbol.for("vuetify:theme"),Pe=he({theme:String},"theme"),ra={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-variant":"#BDBDBD","on-surface-variant":"#424242",primary:"#BB86FC","primary-darken-1":"#3700B3",secondary:"#03DAC5","secondary-darken-1":"#03DAC5",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}};function Jh(){var n,t;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ra;if(!e)return{...ra,isDisabled:!0};const c={};for(const[a,s]of Object.entries(e.themes??{})){const u=s.dark||a==="dark"?(n=ra.themes)==null?void 0:n.dark:(t=ra.themes)==null?void 0:t.light;c[a]=kn(u,s)}return kn(ra,{...e,themes:c})}function eg(e){const c=uc(Jh(e)),n=$(c.defaultTheme),t=$(c.themes),a=h(()=>{const i={};for(const[d,f]of Object.entries(t.value)){const v=i[d]={...f,colors:{...f.colors}};if(c.variations)for(const y of c.variations.colors){const b=v.colors[y];if(b)for(const k of["lighten","darken"]){const g=k==="lighten"?Qb:Zb;for(const p of un(c.variations[k],1))v.colors[`${y}-${k}-${p}`]=fd(g(rt(b),p))}}for(const y of Object.keys(v.colors)){if(/^on-[a-z]/.test(y)||v.colors[`on-${y}`])continue;const b=`on-${y}`,k=rt(v.colors[y]),g=Math.abs(to(rt(0),k)),p=Math.abs(to(rt(16777215),k));v.colors[b]=p>Math.min(g,50)?"#fff":"#000"}}return i}),s=h(()=>a.value[n.value]),u=h(()=>{const i=[];s.value.dark&&et(i,":root",["color-scheme: dark"]),et(i,":root",ao(s.value));for(const[y,b]of Object.entries(a.value))et(i,`.v-theme--${y}`,[`color-scheme: ${b.dark?"dark":"normal"}`,...ao(b)]);const d=[],f=[],v=new Set(Object.values(a.value).flatMap(y=>Object.keys(y.colors)));for(const y of v)/^on-[a-z]/.test(y)?et(f,`.${y}`,[`color: rgb(var(--v-theme-${y})) !important`]):(et(d,`.bg-${y}`,[`--v-theme-overlay-multiplier: var(--v-theme-${y}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${y})) !important`,`color: rgb(var(--v-theme-on-${y})) !important`]),et(f,`.text-${y}`,[`color: rgb(var(--v-theme-${y})) !important`]),et(f,`.border-${y}`,[`--v-border-color: var(--v-theme-${y})`]));return i.push(...d,...f),i.map((y,b)=>b===0?y:`    ${y}`).join("")});function l(){return{style:[{children:u.value,id:"vuetify-theme-stylesheet",nonce:c.cspNonce||!1}]}}function r(i){const d=i._context.provides.usehead;if(d)if(d.push){const v=d.push(l);ae(u,()=>{v.patch(l)})}else Je?(d.addHeadObjs(h(l)),Gc(()=>d.updateDOM())):d.addHeadObjs(l());else{let y=function(){if(!c.isDisabled){if(typeof document<"u"&&!v){const b=document.createElement("style");b.type="text/css",b.id="vuetify-theme-stylesheet",c.cspNonce&&b.setAttribute("nonce",c.cspNonce),v=b,document.head.appendChild(v)}v&&(v.innerHTML=u.value)}};var f=y;let v=Je?document.getElementById("vuetify-theme-stylesheet"):null;ae(u,y,{immediate:!0})}}const o=h(()=>c.isDisabled?void 0:`v-theme--${n.value}`);return{install:r,isDisabled:c.isDisabled,name:n,themes:t,current:s,computedThemes:a,themeClasses:o,styles:u,global:{name:n,current:s}}}function $e(e){rc("provideTheme");const c=Ee(Ea,null);if(!c)throw new Error("Could not find Vuetify theme injection");const n=h(()=>e.theme??(c==null?void 0:c.name.value)),t=h(()=>c.isDisabled?void 0:`v-theme--${n.value}`),a={...c,name:n,themeClasses:t};return Ge(Ea,a),a}function wd(){rc("useTheme");const e=Ee(Ea,null);if(!e)throw new Error("Could not find Vuetify theme injection");return e}function et(e,c,n){e.push(`${c} {
`,...n.map(t=>`  ${t};
`),`}
`)}function ao(e){const c=e.dark?2:1,n=e.dark?1:2,t=[];for(const[a,s]of Object.entries(e.colors)){const u=rt(s);t.push(`--v-theme-${a}: ${u.r},${u.g},${u.b}`),a.startsWith("on-")||t.push(`--v-theme-${a}-overlay-multiplier: ${Yu(s)>.18?c:n}`)}for(const[a,s]of Object.entries(e.variables)){const u=typeof s=="string"&&s.startsWith("#")?rt(s):void 0,l=u?`${u.r}, ${u.g}, ${u.b}`:void 0;t.push(`--v-${a}: ${l??s}`)}return t}function on(e){const c=$(),n=$();if(Je){const t=new ResizeObserver(a=>{e==null||e(a,t),a.length&&(n.value=a[0].contentRect)});jc(()=>{t.disconnect()}),ae(c,(a,s)=>{s&&(t.unobserve(s),n.value=void 0),a&&t.observe(a)},{flush:"post"})}return{resizeRef:c,contentRect:Ba(n)}}const qs=Symbol.for("vuetify:layout"),xd=Symbol.for("vuetify:layout-item"),so=1e3,Vd=he({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Yt=he({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function cg(){const e=Ee(qs);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Gt(e){const c=Ee(qs);if(!c)throw new Error("[Vuetify] Could not find injected layout");const n=e.id??`layout-item-${yc()}`,t=rc("useLayoutItem");Ge(xd,{id:n});const a=$(!1);u1(()=>a.value=!0),s1(()=>a.value=!1);const{layoutItemStyles:s,layoutItemScrimStyles:u}=c.register(t,{...e,active:h(()=>a.value?!1:e.active.value),id:n});return jc(()=>c.unregister(n)),{layoutItemStyles:s,layoutRect:c.layoutRect,layoutItemScrimStyles:u}}const ng=(e,c,n,t)=>{let a={top:0,left:0,right:0,bottom:0};const s=[{id:"",layer:{...a}}];for(const u of e){const l=c.get(u),r=n.get(u),o=t.get(u);if(!l||!r||!o)continue;const i={...a,[l.value]:parseInt(a[l.value],10)+(o.value?parseInt(r.value,10):0)};s.push({id:u,layer:i}),a=i}return s};function Id(e){const c=Ee(qs,null),n=h(()=>c?c.rootZIndex.value-100:so),t=$([]),a=uc(new Map),s=uc(new Map),u=uc(new Map),l=uc(new Map),r=uc(new Map),{resizeRef:o,contentRect:i}=on(),d=h(()=>{const I=new Map,A=e.overlaps??[];for(const q of A.filter(_=>_.includes(":"))){const[_,x]=q.split(":");if(!t.value.includes(_)||!t.value.includes(x))continue;const V=a.get(_),C=a.get(x),M=s.get(_),N=s.get(x);!V||!C||!M||!N||(I.set(x,{position:V.value,amount:parseInt(M.value,10)}),I.set(_,{position:C.value,amount:-parseInt(N.value,10)}))}return I}),f=h(()=>{const I=[...new Set([...u.values()].map(q=>q.value))].sort((q,_)=>q-_),A=[];for(const q of I){const _=t.value.filter(x=>{var V;return((V=u.get(x))==null?void 0:V.value)===q});A.push(..._)}return ng(A,a,s,l)}),v=h(()=>!Array.from(r.values()).some(I=>I.value)),y=h(()=>f.value[f.value.length-1].layer),b=h(()=>({"--v-layout-left":le(y.value.left),"--v-layout-right":le(y.value.right),"--v-layout-top":le(y.value.top),"--v-layout-bottom":le(y.value.bottom),...v.value?void 0:{transition:"none"}})),k=h(()=>f.value.slice(1).map((I,A)=>{let{id:q}=I;const{layer:_}=f.value[A],x=s.get(q),V=a.get(q);return{id:q,..._,size:Number(x.value),position:V.value}})),g=I=>k.value.find(A=>A.id===I),p=rc("createLayout"),j=$(!1);vc(()=>{j.value=!0}),Ge(qs,{register:(I,A)=>{let{id:q,order:_,position:x,layoutSize:V,elementSize:C,active:M,disableTransitions:N,absolute:Q}=A;u.set(q,_),a.set(q,x),s.set(q,V),l.set(q,M),N&&r.set(q,N);const H=ga(xd,p==null?void 0:p.vnode).indexOf(I);H>-1?t.value.splice(H,0,q):t.value.push(q);const D=h(()=>k.value.findIndex(z=>z.id===q)),J=h(()=>n.value+f.value.length*2-D.value*2),R=h(()=>{const z=x.value==="left"||x.value==="right",fe=x.value==="right",oe=x.value==="bottom",B={[x.value]:0,zIndex:J.value,transform:`translate${z?"X":"Y"}(${(M.value?0:-110)*(fe||oe?-1:1)}%)`,position:Q.value||n.value!==so?"absolute":"fixed",...v.value?void 0:{transition:"none"}};if(!j.value)return B;const T=k.value[D.value];if(!T)throw new Error(`[Vuetify] Could not find layout item "${q}"`);const O=d.value.get(q);return O&&(T[O.position]+=O.amount),{...B,height:z?`calc(100% - ${T.top}px - ${T.bottom}px)`:C.value?`${C.value}px`:void 0,left:fe?void 0:`${T.left}px`,right:fe?`${T.right}px`:void 0,top:x.value!=="bottom"?`${T.top}px`:void 0,bottom:x.value!=="top"?`${T.bottom}px`:void 0,width:z?C.value?`${C.value}px`:void 0:`calc(100% - ${T.left}px - ${T.right}px)`}}),K=h(()=>({zIndex:J.value-1}));return{layoutItemStyles:R,layoutItemScrimStyles:K,zIndex:J}},unregister:I=>{u.delete(I),a.delete(I),s.delete(I),l.delete(I),r.delete(I),t.value=t.value.filter(A=>A!==I)},mainRect:y,mainStyles:b,getLayoutItem:g,items:k,layoutRect:i,rootZIndex:n});const P=h(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),w=h(()=>({zIndex:n.value,position:c?"relative":void 0,overflow:c?"hidden":void 0}));return{layoutClasses:P,layoutStyles:w,getLayoutItem:g,items:k,layoutRect:i,layoutRef:o}}function Ad(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:c,...n}=e,t=kn(c,n),{aliases:a={},components:s={},directives:u={}}=t,l=eh(t.defaults),r=Lh(t.display,t.ssr),o=eg(t.theme),i=Hh(t.icons),d=fh(t.locale),f=Rh(t.date);return{install:y=>{for(const b in u)y.directive(b,u[b]);for(const b in s)y.component(b,s[b]);for(const b in a)y.component(b,Bc({...a[b],name:b,aliasName:a[b].name}));if(o.install(y),y.provide(Ia,l),y.provide(Xu,r),y.provide(Ea,o),y.provide(Qu,i),y.provide(Lt,d),y.provide(Ui,f),Je&&t.ssr)if(y.$nuxt)y.$nuxt.hook("app:suspense:resolve",()=>{r.update()});else{const{mount:b}=y;y.mount=function(){const k=b(...arguments);return Fe(()=>r.update()),y.mount=b,k}}yc.reset(),y.mixin({computed:{$vuetify(){return uc({defaults:Ct.call(this,Ia),display:Ct.call(this,Xu),theme:Ct.call(this,Ea),icons:Ct.call(this,Qu),locale:Ct.call(this,Lt),date:Ct.call(this,Ui)})}}})},defaults:l,display:r,theme:o,icons:i,locale:d,date:f}}const tg="3.2.2";Ad.version=tg;function Ct(e){var t,a;const c=this.$,n=((t=c.parent)==null?void 0:t.provides)??((a=c.vnode.appContext)==null?void 0:a.provides);if(n&&e in n)return n[e]}const ag=W()({name:"VApp",props:{...ne(),...Vd({fullHeight:!0}),...Pe()},setup(e,c){let{slots:n}=c;const t=$e(e),{layoutClasses:a,layoutStyles:s,getLayoutItem:u,items:l,layoutRef:r}=Id(e),{rtlClasses:o}=xn();return X(()=>{var i;return m("div",{ref:r,class:["v-application",t.themeClasses.value,a.value,o.value,e.class],style:[s.value,e.style]},[m("div",{class:"v-application__wrap"},[(i=n.default)==null?void 0:i.call(n)])])}),{getLayoutItem:u,items:l,theme:t}}});const Be=W(!1)({name:"VDefaultsProvider",props:{defaults:Object,disabled:Boolean,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,c){let{slots:n}=c;const{defaults:t,disabled:a,reset:s,root:u,scoped:l}=El(e);return nc(t,{reset:s,root:u,scoped:l,disabled:a}),()=>{var r;return(r=n.default)==null?void 0:r.call(n)}}});function Ac(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"center center",n=arguments.length>2?arguments[2]:void 0;return W()({name:e,props:{disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:n},origin:{type:String,default:c}},setup(t,a){let{slots:s}=a;const u={onBeforeEnter(l){l.style.transformOrigin=t.origin},onLeave(l){if(t.leaveAbsolute){const{offsetTop:r,offsetLeft:o,offsetWidth:i,offsetHeight:d}=l;l._transitionInitialStyles={position:l.style.position,top:l.style.top,left:l.style.left,width:l.style.width,height:l.style.height},l.style.position="absolute",l.style.top=`${r}px`,l.style.left=`${o}px`,l.style.width=`${i}px`,l.style.height=`${d}px`}t.hideOnLeave&&l.style.setProperty("display","none","important")},onAfterLeave(l){if(t.leaveAbsolute&&(l!=null&&l._transitionInitialStyles)){const{position:r,top:o,left:i,width:d,height:f}=l._transitionInitialStyles;delete l._transitionInitialStyles,l.style.position=r||"",l.style.top=o||"",l.style.left=i||"",l.style.width=d||"",l.style.height=f||""}}};return()=>{const l=t.group?R2:rn;return dn(l,{name:t.disabled?"":e,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:u},s.default)}}})}function Ed(e,c){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return W()({name:e,props:{mode:{type:String,default:n},disabled:Boolean},setup(t,a){let{slots:s}=a;return()=>dn(rn,{name:t.disabled?"":e,css:!t.disabled,...t.disabled?{}:c},s.default)}})}function Pd(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=Mc(`offset-${n}`);return{onBeforeEnter(u){u._parent=u.parentNode,u._initialStyle={transition:u.style.transition,overflow:u.style.overflow,[n]:u.style[n]}},onEnter(u){const l=u._initialStyle;u.style.setProperty("transition","none","important"),u.style.overflow="hidden";const r=`${u[t]}px`;u.style[n]="0",u.offsetHeight,u.style.transition=l.transition,e&&u._parent&&u._parent.classList.add(e),requestAnimationFrame(()=>{u.style[n]=r})},onAfterEnter:s,onEnterCancelled:s,onLeave(u){u._initialStyle={transition:"",overflow:u.style.overflow,[n]:u.style[n]},u.style.overflow="hidden",u.style[n]=`${u[t]}px`,u.offsetHeight,requestAnimationFrame(()=>u.style[n]="0")},onAfterLeave:a,onLeaveCancelled:a};function a(u){e&&u._parent&&u._parent.classList.remove(e),s(u)}function s(u){const l=u._initialStyle[n];u.style.overflow=u._initialStyle.overflow,l!=null&&(u.style[n]=l),delete u._initialStyle}}const Fs=W()({name:"VDialogTransition",props:{target:Object},setup(e,c){let{slots:n}=c;const t={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,s){var f;await new Promise(v=>requestAnimationFrame(v)),await new Promise(v=>requestAnimationFrame(v)),a.style.visibility="";const{x:u,y:l,sx:r,sy:o,speed:i}=lo(e.target,a),d=lt(a,[{transform:`translate(${u}px, ${l}px) scale(${r}, ${o})`,opacity:0},{}],{duration:225*i,easing:th});(f=uo(a))==null||f.forEach(v=>{lt(v,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*i,easing:Aa})}),d.finished.then(()=>s())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,s){var f;await new Promise(v=>requestAnimationFrame(v));const{x:u,y:l,sx:r,sy:o,speed:i}=lo(e.target,a);lt(a,[{},{transform:`translate(${u}px, ${l}px) scale(${r}, ${o})`,opacity:0}],{duration:125*i,easing:ah}).finished.then(()=>s()),(f=uo(a))==null||f.forEach(v=>{lt(v,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*i,easing:Aa})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?m(rn,se({name:"dialog-transition"},t,{css:!1}),n):m(rn,{name:"dialog-transition"},n)}});function uo(e){var n;const c=(n=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:n.children;return c&&[...c]}function lo(e,c){const n=e.getBoundingClientRect(),t=Xl(c),[a,s]=getComputedStyle(c).transformOrigin.split(" ").map(g=>parseFloat(g)),[u,l]=getComputedStyle(c).getPropertyValue("--v-overlay-anchor-origin").split(" ");let r=n.left+n.width/2;u==="left"||l==="left"?r-=n.width/2:(u==="right"||l==="right")&&(r+=n.width/2);let o=n.top+n.height/2;u==="top"||l==="top"?o-=n.height/2:(u==="bottom"||l==="bottom")&&(o+=n.height/2);const i=n.width/t.width,d=n.height/t.height,f=Math.max(1,i,d),v=i/f||0,y=d/f||0,b=t.width*t.height/(window.innerWidth*window.innerHeight),k=b>.12?Math.min(1.5,(b-.12)*10+1):1;return{x:r-(a+t.left),y:o-(s+t.top),sx:v,sy:y,speed:k}}const sg=Ac("fab-transition","center center","out-in"),ug=Ac("dialog-bottom-transition"),lg=Ac("dialog-top-transition"),Ju=Ac("fade-transition"),Td=Ac("scale-transition"),rg=Ac("scroll-x-transition"),ig=Ac("scroll-x-reverse-transition"),og=Ac("scroll-y-transition"),dg=Ac("scroll-y-reverse-transition"),fg=Ac("slide-x-transition"),mg=Ac("slide-x-reverse-transition"),ar=Ac("slide-y-transition"),vg=Ac("slide-y-reverse-transition"),Ns=Ed("expand-transition",Pd()),sr=Ed("expand-x-transition",Pd("",!0));const Oc=he({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Lc(e){return{dimensionStyles:h(()=>({height:le(e.height),maxHeight:le(e.maxHeight),maxWidth:le(e.maxWidth),minHeight:le(e.minHeight),minWidth:le(e.minWidth),width:le(e.width)}))}}function yg(e){return{aspectStyles:h(()=>{const c=Number(e.aspectRatio);return c?{paddingBottom:String(1/c*100)+"%"}:void 0})}}const $d=W()({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...ne(),...Oc()},setup(e,c){let{slots:n}=c;const{aspectStyles:t}=yg(e),{dimensionStyles:a}=Lc(e);return X(()=>{var s;return m("div",{class:["v-responsive",e.class],style:[a.value,e.style]},[m("div",{class:"v-responsive__sizer",style:t.value},null),(s=n.additional)==null?void 0:s.call(n),n.default&&m("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}});function bg(e,c){if(!cr)return;const n=c.modifiers||{},t=c.value,{handler:a,options:s}=typeof t=="object"?t:{handler:t,options:{}},u=new IntersectionObserver(function(){var d;let l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;const o=(d=e._observe)==null?void 0:d[c.instance.$.uid];if(!o)return;const i=l.some(f=>f.isIntersecting);a&&(!n.quiet||o.init)&&(!n.once||i||o.init)&&a(i,l,r),i&&n.once?Md(e,c):o.init=!0},s);e._observe=Object(e._observe),e._observe[c.instance.$.uid]={init:!1,observer:u},u.observe(e)}function Md(e,c){var t;const n=(t=e._observe)==null?void 0:t[c.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[c.instance.$.uid])}const Oa={mounted:bg,unmounted:Md},Vn=he({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),Wc=(e,c)=>{let{slots:n}=c;const{transition:t,...a}=e,{component:s=rn,...u}=typeof t=="object"?t:{};return dn(s,se(typeof t=="string"?{name:t}:u,a),n)},Xt=W()({name:"VImg",directives:{intersect:Oa},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...ne(),...Vn()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,c){let{emit:n,slots:t}=c;const a=$(""),s=$(),u=$(e.eager?"loading":"idle"),l=$(),r=$(),o=h(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),i=h(()=>o.value.aspect||l.value/r.value||0);ae(()=>e.src,()=>{d(u.value!=="idle")}),ae(i,(q,_)=>{!q&&_&&s.value&&k(s.value)}),Ps(()=>d());function d(q){if(!(e.eager&&q)&&!(cr&&!q&&!e.eager)){if(u.value="loading",o.value.lazySrc){const _=new Image;_.src=o.value.lazySrc,k(_,null)}o.value.src&&Fe(()=>{var _,x;if(n("loadstart",((_=s.value)==null?void 0:_.currentSrc)||o.value.src),(x=s.value)!=null&&x.complete){if(s.value.naturalWidth||v(),u.value==="error")return;i.value||k(s.value,null),f()}else i.value||k(s.value),y()})}}function f(){var q;y(),u.value="loaded",n("load",((q=s.value)==null?void 0:q.currentSrc)||o.value.src)}function v(){var q;u.value="error",n("error",((q=s.value)==null?void 0:q.currentSrc)||o.value.src)}function y(){const q=s.value;q&&(a.value=q.currentSrc||q.src)}let b=-1;function k(q){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const x=()=>{clearTimeout(b);const{naturalHeight:V,naturalWidth:C}=q;V||C?(l.value=C,r.value=V):!q.complete&&u.value==="loading"&&_!=null?b=window.setTimeout(x,_):(q.currentSrc.endsWith(".svg")||q.currentSrc.startsWith("data:image/svg+xml"))&&(l.value=1,r.value=1)};x()}const g=h(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),p=()=>{var x;if(!o.value.src||u.value==="idle")return null;const q=m("img",{class:["v-img__img",g.value],src:o.value.src,srcset:o.value.srcset,alt:e.alt,sizes:e.sizes,ref:s,onLoad:f,onError:v},null),_=(x=t.sources)==null?void 0:x.call(t);return m(Wc,{transition:e.transition,appear:!0},{default:()=>[We(_?m("picture",{class:"v-img__picture"},[_,q]):q,[[fn,u.value==="loaded"]])]})},j=()=>m(Wc,{transition:e.transition},{default:()=>[o.value.lazySrc&&u.value!=="loaded"&&m("img",{class:["v-img__img","v-img__img--preload",g.value],src:o.value.lazySrc,alt:e.alt},null)]}),P=()=>t.placeholder?m(Wc,{transition:e.transition,appear:!0},{default:()=>[(u.value==="loading"||u.value==="error"&&!t.error)&&m("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,w=()=>t.error?m(Wc,{transition:e.transition,appear:!0},{default:()=>[u.value==="error"&&m("div",{class:"v-img__error"},[t.error()])]}):null,I=()=>e.gradient?m("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,A=$(!1);{const q=ae(i,_=>{_&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{A.value=!0})}),q())})}return X(()=>We(m($d,{class:["v-img",{"v-img--booting":!A.value},e.class],style:[{width:le(e.width==="auto"?l.value:e.width)},e.style],aspectRatio:i.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>m(me,null,[m(p,null,null),m(j,null,null),m(I,null,null),m(P,null,null),m(w,null,null)]),default:t.default}),[[Sc("intersect"),{handler:d,options:e.options},null,{once:!0}]])),{currentSrc:a,image:s,state:u,naturalWidth:l,naturalHeight:r}}}),_e=he({tag:{type:String,default:"div"}},"tag"),Bd=he({text:String,...ne(),..._e()},"v-toolbar-title"),ur=W()({name:"VToolbarTitle",props:Bd(),setup(e,c){let{slots:n}=c;return X(()=>{const t=!!(n.default||n.text||e.text);return m(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var a;return[t&&m("div",{class:"v-toolbar-title__placeholder"},[n.text?n.text():e.text,(a=n.default)==null?void 0:a.call(n)])]}})}),{}}}),Ec=he({border:[Boolean,Number,String]},"border");function Fc(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:wn();return{borderClasses:h(()=>{const t=Ye(e)?e.value:e.border,a=[];if(t===!0||t==="")a.push(`${c}--border`);else if(typeof t=="string"||t===0)for(const s of String(t).split(" "))a.push(`border-${s}`);return a})}}const tc=he({elevation:{type:[Number,String],validator(e){const c=parseInt(e);return!isNaN(c)&&c>=0&&c<=24}}},"elevation");function ic(e){return{elevationClasses:h(()=>{const n=Ye(e)?e.value:e.elevation,t=[];return n==null||t.push(`elevation-${n}`),t})}}const ze=he({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function Ke(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:wn();return{roundedClasses:h(()=>{const t=Ye(e)?e.value:e.rounded,a=[];if(t===!0||t==="")a.push(`${c}--rounded`);else if(typeof t=="string"||t===0)for(const s of String(t).split(" "))a.push(`rounded-${s}`);return a})}}function lr(e){return Kl(()=>{const c=[],n={};return e.value.background&&(Ni(e.value.background)?n.backgroundColor=e.value.background:c.push(`bg-${e.value.background}`)),e.value.text&&(Ni(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):c.push(`text-${e.value.text}`)),{colorClasses:c,colorStyles:n}})}function mc(e,c){const n=h(()=>({text:Ye(e)?e.value:c?e[c]:null})),{colorClasses:t,colorStyles:a}=lr(n);return{textColorClasses:t,textColorStyles:a}}function ec(e,c){const n=h(()=>({background:Ye(e)?e.value:c?e[c]:null})),{colorClasses:t,colorStyles:a}=lr(n);return{backgroundColorClasses:t,backgroundColorStyles:a}}const hg=[null,"prominent","default","comfortable","compact"],Rd=he({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>hg.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Ec(),...ne(),...tc(),...ze(),..._e({tag:"header"}),...Pe()},"v-toolbar"),el=W()({name:"VToolbar",props:Rd(),setup(e,c){var f;let{slots:n}=c;const{backgroundColorClasses:t,backgroundColorStyles:a}=ec(Y(e,"color")),{borderClasses:s}=Fc(e),{elevationClasses:u}=ic(e),{roundedClasses:l}=Ke(e),{themeClasses:r}=$e(e),o=$(!!(e.extended||(f=n.extension)!=null&&f.call(n))),i=h(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),d=h(()=>o.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return nc({VBtn:{variant:"text"}}),X(()=>{var k;const v=!!(e.title||n.title),y=!!(n.image||e.image),b=(k=n.extension)==null?void 0:k.call(n);return o.value=!!(e.extended||b),m(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},t.value,s.value,u.value,l.value,r.value,e.class],style:[a.value,e.style]},{default:()=>[y&&m("div",{key:"image",class:"v-toolbar__image"},[n.image?m(Be,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},n.image):m(Xt,{key:"image-img",cover:!0,src:e.image},null)]),m(Be,{defaults:{VTabs:{height:le(i.value)}}},{default:()=>{var g,p,j;return[m("div",{class:"v-toolbar__content",style:{height:le(i.value)}},[n.prepend&&m("div",{class:"v-toolbar__prepend"},[(g=n.prepend)==null?void 0:g.call(n)]),v&&m(ur,{key:"title",text:e.title},{text:n.title}),(p=n.default)==null?void 0:p.call(n),n.append&&m("div",{class:"v-toolbar__append"},[(j=n.append)==null?void 0:j.call(n)])])]}}),m(Be,{defaults:{VTabs:{height:le(d.value)}}},{default:()=>[m(Ns,null,{default:()=>[o.value&&m("div",{class:"v-toolbar__extension",style:{height:le(d.value)}},[b])]})]})]})}),{contentHeight:i,extensionHeight:d}}}),gg=he({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function jg(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:n}=c;let t=0;const a=$(null),s=$(0),u=$(0),l=$(0),r=$(!1),o=$(!1),i=h(()=>Number(e.scrollThreshold)),d=h(()=>fc((i.value-s.value)/i.value||0)),f=()=>{const v=a.value;!v||n&&!n.value||(t=s.value,s.value="window"in v?v.pageYOffset:v.scrollTop,o.value=s.value<t,l.value=Math.abs(s.value-i.value))};return ae(o,()=>{u.value=u.value||s.value}),ae(r,()=>{u.value=0}),vc(()=>{ae(()=>e.scrollTarget,v=>{var b;const y=v?document.querySelector(v):window;if(!y){Fn(`Unable to locate element with identifier ${v}`,$s());return}y!==a.value&&((b=a.value)==null||b.removeEventListener("scroll",f),a.value=y,a.value.addEventListener("scroll",f,{passive:!0}))},{immediate:!0})}),jc(()=>{var v;(v=a.value)==null||v.removeEventListener("scroll",f)}),n&&ae(n,f,{immediate:!0}),{scrollThreshold:i,currentScroll:s,currentThreshold:l,isScrollActive:r,scrollRatio:d,isScrollingUp:o,savedScroll:u}}function ht(){const e=$(!1);return vc(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:h(()=>e.value?void 0:{transition:"none !important"}),isBooted:Ba(e)}}const qg=W()({name:"VAppBar",props:{scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Rd(),...Yt(),...gg(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:n}=c;const t=$(),a=Se(e,"modelValue"),s=h(()=>{var j;const p=new Set(((j=e.scrollBehavior)==null?void 0:j.split(" "))??[]);return{hide:p.has("hide"),inverted:p.has("inverted"),collapse:p.has("collapse"),elevate:p.has("elevate"),fadeImage:p.has("fade-image")}}),u=h(()=>{const p=s.value;return p.hide||p.inverted||p.collapse||p.elevate||p.fadeImage||!a.value}),{currentScroll:l,scrollThreshold:r,isScrollingUp:o,scrollRatio:i}=jg(e,{canScroll:u}),d=h(()=>e.collapse||s.value.collapse&&(s.value.inverted?i.value>0:i.value===0)),f=h(()=>e.flat||s.value.elevate&&(s.value.inverted?l.value>0:l.value===0)),v=h(()=>s.value.fadeImage?s.value.inverted?1-i.value:i.value:void 0),y=h(()=>{var P,w;if(s.value.hide&&s.value.inverted)return 0;const p=((P=t.value)==null?void 0:P.contentHeight)??0,j=((w=t.value)==null?void 0:w.extensionHeight)??0;return p+j});function b(){s.value.hide?s.value.inverted?a.value=l.value>r.value:a.value=o.value||l.value<r.value:a.value=!0}ae(l,b,{immediate:!0}),ae(s,b);const{ssrBootStyles:k}=ht(),{layoutItemStyles:g}=Gt({id:e.name,order:h(()=>parseInt(e.order,10)),position:Y(e,"location"),layoutSize:y,elementSize:$(void 0),active:a,absolute:Y(e,"absolute")});return X(()=>{const[p]=el.filterProps(e);return m(el,se({ref:t,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...g.value,"--v-toolbar-image-opacity":v.value,height:void 0,...k.value},e.style]},p,{collapse:d.value,flat:f.value}),n)}),{}}});const kg=[null,"default","comfortable","compact"],ac=he({density:{type:String,default:"default",validator:e=>kg.includes(e)}},"density");function bc(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:wn();return{densityClasses:h(()=>`${c}--density-${e.density}`)}}const pg=["elevated","flat","tonal","outlined","text","plain"];function gt(e,c){return m(me,null,[e&&m("span",{key:"overlay",class:`${c}__overlay`},null),m("span",{key:"underlay",class:`${c}__underlay`},null)])}const Nc=he({color:String,variant:{type:String,default:"elevated",validator:e=>pg.includes(e)}},"variant");function jt(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:wn();const n=h(()=>{const{variant:s}=dc(e);return`${c}--variant-${s}`}),{colorClasses:t,colorStyles:a}=lr(h(()=>{const{variant:s,color:u}=dc(e);return{[["elevated","flat"].includes(s)?"background":"text"]:u}}));return{colorClasses:t,colorStyles:a,variantClasses:n}}const Od=he({divided:Boolean,...Ec(),...ne(),...ac(),...tc(),...ze(),..._e(),...Pe(),...Nc()},"v-btn-group"),cl=W()({name:"VBtnGroup",props:Od(),setup(e,c){let{slots:n}=c;const{themeClasses:t}=$e(e),{densityClasses:a}=bc(e),{borderClasses:s}=Fc(e),{elevationClasses:u}=ic(e),{roundedClasses:l}=Ke(e);nc({VBtn:{height:"auto",color:Y(e,"color"),density:Y(e,"density"),flat:!0,variant:Y(e,"variant")}}),X(()=>m(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},t.value,s.value,a.value,u.value,l.value,e.class],style:e.style},n))}}),Qt=he({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Zt=he({value:null,disabled:Boolean,selectedClass:String},"group-item");function Jt(e,c){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const t=rc("useGroupItem");if(!t)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const a=yc();Ge(Symbol.for(`${c.description}:id`),a);const s=Ee(c,null);if(!s){if(!n)return s;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${c.description}`)}const u=Y(e,"value"),l=h(()=>s.disabled.value||e.disabled);s.register({id:a,value:u,disabled:l},t),jc(()=>{s.unregister(a)});const r=h(()=>s.isSelected(a)),o=h(()=>r.value&&[s.selectedClass.value,e.selectedClass]);return ae(r,i=>{t.emit("group:selected",{value:i})}),{id:a,isSelected:r,toggle:()=>s.select(a,!r.value),select:i=>s.select(a,i),selectedClass:o,value:u,disabled:l,group:s}}function qt(e,c){let n=!1;const t=uc([]),a=Se(e,"modelValue",[],f=>f==null?[]:Ld(t,$c(f)),f=>{const v=_g(t,f);return e.multiple?v:v[0]}),s=rc("useGroup");function u(f,v){const y=f,b=Symbol.for(`${c.description}:id`),g=ga(b,s==null?void 0:s.vnode).indexOf(v);g>-1?t.splice(g,0,y):t.push(y)}function l(f){if(n)return;r();const v=t.findIndex(y=>y.id===f);t.splice(v,1)}function r(){const f=t.find(v=>!v.disabled);f&&e.mandatory==="force"&&!a.value.length&&(a.value=[f.id])}vc(()=>{r()}),jc(()=>{n=!0});function o(f,v){const y=t.find(b=>b.id===f);if(!(v&&(y!=null&&y.disabled)))if(e.multiple){const b=a.value.slice(),k=b.findIndex(p=>p===f),g=~k;if(v=v??!g,g&&e.mandatory&&b.length<=1||!g&&e.max!=null&&b.length+1>e.max)return;k<0&&v?b.push(f):k>=0&&!v&&b.splice(k,1),a.value=b}else{const b=a.value.includes(f);if(e.mandatory&&b)return;a.value=v??!b?[f]:[]}}function i(f){if(e.multiple&&Fn('This method is not supported when using "multiple" prop'),a.value.length){const v=a.value[0],y=t.findIndex(g=>g.id===v);let b=(y+f)%t.length,k=t[b];for(;k.disabled&&b!==y;)b=(b+f)%t.length,k=t[b];if(k.disabled)return;a.value=[t[b].id]}else{const v=t.find(y=>!y.disabled);v&&(a.value=[v.id])}}const d={register:u,unregister:l,selected:a,select:o,disabled:Y(e,"disabled"),prev:()=>i(t.length-1),next:()=>i(1),isSelected:f=>a.value.includes(f),selectedClass:h(()=>e.selectedClass),items:h(()=>t),getItemIndex:f=>Sg(t,f)};return Ge(c,d),d}function Sg(e,c){const n=Ld(e,[c]);return n.length?e.findIndex(t=>t.id===n[0]):-1}function Ld(e,c){const n=[];for(let t=0;t<e.length;t++){const a=e[t];a.value!=null?c.find(s=>vt(s,a.value))!=null&&n.push(a.id):c.includes(t)&&n.push(a.id)}return n}function _g(e,c){const n=[];for(let t=0;t<e.length;t++){const a=e[t];c.includes(a.id)&&n.push(a.value!=null?a.value:t)}return n}const rr=Symbol.for("vuetify:v-btn-toggle"),Cg=W()({name:"VBtnToggle",props:{...Od(),...Qt()},emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:n}=c;const{isSelected:t,next:a,prev:s,select:u,selected:l}=qt(e,rr);return X(()=>{const[r]=cl.filterProps(e);return m(cl,se({class:["v-btn-toggle",e.class]},r,{style:e.style}),{default:()=>{var o;return[(o=n.default)==null?void 0:o.call(n,{isSelected:t,next:a,prev:s,select:u,selected:l})]}})}),{next:a,prev:s,select:u}}});const wg=["x-small","small","default","large","x-large"],In=he({size:{type:[String,Number],default:"default"}},"size");function ea(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:wn();return Kl(()=>{let n,t;return hs(wg,e.size)?n=`${c}--size-${e.size}`:e.size&&(t={width:le(e.size),height:le(e.size)}),{sizeClasses:n,sizeStyles:t}})}const xg=he({color:String,start:Boolean,end:Boolean,icon:qe,...ne(),...In(),..._e({tag:"i"}),...Pe()},"v-icon"),Ue=W()({name:"VIcon",props:xg(),setup(e,c){let{attrs:n,slots:t}=c;const a=$(),{themeClasses:s}=$e(e),{iconData:u}=Uh(h(()=>a.value||e.icon)),{sizeClasses:l}=ea(e),{textColorClasses:r,textColorStyles:o}=mc(Y(e,"color"));return X(()=>{var d,f;const i=(d=t.default)==null?void 0:d.call(t);return i&&(a.value=(f=i.filter(v=>v.type===Ra&&v.children&&typeof v.children=="string")[0])==null?void 0:f.children),m(u.value.component,{tag:e.tag,icon:u.value.icon,class:["v-icon","notranslate",s.value,l.value,r.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[l.value?void 0:{fontSize:le(e.size),height:le(e.size),width:le(e.size)},o.value,e.style],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>[i]})}),{}}});function ir(e,c){const n=$(),t=$(!1);if(cr){const a=new IntersectionObserver(s=>{e==null||e(s,a),t.value=!!s.find(u=>u.isIntersecting)},c);jc(()=>{a.disconnect()}),ae(n,(s,u)=>{u&&(a.unobserve(u),t.value=!1),s&&a.observe(s)},{flush:"post"})}return{intersectionRef:n,isIntersecting:t}}const or=W()({name:"VProgressCircular",props:{bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...ne(),...In(),..._e({tag:"div"}),...Pe()},setup(e,c){let{slots:n}=c;const t=20,a=2*Math.PI*t,s=$(),{themeClasses:u}=$e(e),{sizeClasses:l,sizeStyles:r}=ea(e),{textColorClasses:o,textColorStyles:i}=mc(Y(e,"color")),{textColorClasses:d,textColorStyles:f}=mc(Y(e,"bgColor")),{intersectionRef:v,isIntersecting:y}=ir(),{resizeRef:b,contentRect:k}=on(),g=h(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),p=h(()=>Number(e.width)),j=h(()=>r.value?Number(e.size):k.value?k.value.width:Math.max(p.value,32)),P=h(()=>t/(1-p.value/j.value)*2),w=h(()=>p.value/j.value*P.value),I=h(()=>le((100-g.value)/100*a));return Gc(()=>{v.value=s.value,b.value=s.value}),X(()=>m(e.tag,{ref:s,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":y.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},u.value,l.value,o.value,e.class],style:[r.value,i.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:g.value},{default:()=>[m("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${P.value} ${P.value}`},[m("circle",{class:["v-progress-circular__underlay",d.value],style:f.value,fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":w.value,"stroke-dasharray":a,"stroke-dashoffset":0},null),m("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":w.value,"stroke-dasharray":a,"stroke-dashoffset":I.value},null)]),n.default&&m("div",{class:"v-progress-circular__content"},[n.default({value:g.value})])]})),{}}});const nl=Symbol("rippleStop"),Vg=80;function ro(e,c){e.style.transform=c,e.style.webkitTransform=c}function tl(e){return e.constructor.name==="TouchEvent"}function Fd(e){return e.constructor.name==="KeyboardEvent"}const Ig=function(e,c){var d;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=0,a=0;if(!Fd(e)){const f=c.getBoundingClientRect(),v=tl(e)?e.touches[e.touches.length-1]:e;t=v.clientX-f.left,a=v.clientY-f.top}let s=0,u=.3;(d=c._ripple)!=null&&d.circle?(u=.15,s=c.clientWidth/2,s=n.center?s:s+Math.sqrt((t-s)**2+(a-s)**2)/4):s=Math.sqrt(c.clientWidth**2+c.clientHeight**2)/2;const l=`${(c.clientWidth-s*2)/2}px`,r=`${(c.clientHeight-s*2)/2}px`,o=n.center?l:`${t-s}px`,i=n.center?r:`${a-s}px`;return{radius:s,scale:u,x:o,y:i,centerX:l,centerY:r}},ks={show(e,c){var v;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((v=c==null?void 0:c._ripple)!=null&&v.enabled))return;const t=document.createElement("span"),a=document.createElement("span");t.appendChild(a),t.className="v-ripple__container",n.class&&(t.className+=` ${n.class}`);const{radius:s,scale:u,x:l,y:r,centerX:o,centerY:i}=Ig(e,c,n),d=`${s*2}px`;a.className="v-ripple__animation",a.style.width=d,a.style.height=d,c.appendChild(t);const f=window.getComputedStyle(c);f&&f.position==="static"&&(c.style.position="relative",c.dataset.previousPosition="static"),a.classList.add("v-ripple__animation--enter"),a.classList.add("v-ripple__animation--visible"),ro(a,`translate(${l}, ${r}) scale3d(${u},${u},${u})`),a.dataset.activated=String(performance.now()),setTimeout(()=>{a.classList.remove("v-ripple__animation--enter"),a.classList.add("v-ripple__animation--in"),ro(a,`translate(${o}, ${i}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const c=e.getElementsByClassName("v-ripple__animation");if(c.length===0)return;const n=c[c.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const t=performance.now()-Number(n.dataset.activated),a=Math.max(250-t,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var l;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((l=n.parentNode)==null?void 0:l.parentNode)===e&&e.removeChild(n.parentNode)},300)},a)}};function Nd(e){return typeof e>"u"||!!e}function Pa(e){const c={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[nl])){if(e[nl]=!0,tl(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(c.center=n._ripple.centered||Fd(e),n._ripple.class&&(c.class=n._ripple.class),tl(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{ks.show(e,n,c)},n._ripple.showTimer=window.setTimeout(()=>{var t;(t=n==null?void 0:n._ripple)!=null&&t.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},Vg)}else ks.show(e,n,c)}}function io(e){e[nl]=!0}function xc(e){const c=e.currentTarget;if(c!=null&&c._ripple){if(window.clearTimeout(c._ripple.showTimer),e.type==="touchend"&&c._ripple.showTimerCommit){c._ripple.showTimerCommit(),c._ripple.showTimerCommit=null,c._ripple.showTimer=window.setTimeout(()=>{xc(e)});return}window.setTimeout(()=>{c._ripple&&(c._ripple.touched=!1)}),ks.hide(c)}}function Dd(e){const c=e.currentTarget;c!=null&&c._ripple&&(c._ripple.showTimerCommit&&(c._ripple.showTimerCommit=null),window.clearTimeout(c._ripple.showTimer))}let Ta=!1;function zd(e){!Ta&&(e.keyCode===Ti.enter||e.keyCode===Ti.space)&&(Ta=!0,Pa(e))}function Hd(e){Ta=!1,xc(e)}function Ud(e){Ta&&(Ta=!1,xc(e))}function Wd(e,c,n){const{value:t,modifiers:a}=c,s=Nd(t);if(s||ks.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=a.center,e._ripple.circle=a.circle,zu(t)&&t.class&&(e._ripple.class=t.class),s&&!n){if(a.stop){e.addEventListener("touchstart",io,{passive:!0}),e.addEventListener("mousedown",io);return}e.addEventListener("touchstart",Pa,{passive:!0}),e.addEventListener("touchend",xc,{passive:!0}),e.addEventListener("touchmove",Dd,{passive:!0}),e.addEventListener("touchcancel",xc),e.addEventListener("mousedown",Pa),e.addEventListener("mouseup",xc),e.addEventListener("mouseleave",xc),e.addEventListener("keydown",zd),e.addEventListener("keyup",Hd),e.addEventListener("blur",Ud),e.addEventListener("dragstart",xc,{passive:!0})}else!s&&n&&Kd(e)}function Kd(e){e.removeEventListener("mousedown",Pa),e.removeEventListener("touchstart",Pa),e.removeEventListener("touchend",xc),e.removeEventListener("touchmove",Dd),e.removeEventListener("touchcancel",xc),e.removeEventListener("mouseup",xc),e.removeEventListener("mouseleave",xc),e.removeEventListener("keydown",zd),e.removeEventListener("keyup",Hd),e.removeEventListener("dragstart",xc),e.removeEventListener("blur",Ud)}function Ag(e,c){Wd(e,c,!1)}function Eg(e){delete e._ripple,Kd(e)}function Pg(e,c){if(c.value===c.oldValue)return;const n=Nd(c.oldValue);Wd(e,c,n)}const Wn={mounted:Ag,unmounted:Eg,updated:Pg};const oo={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Kn=he({location:String},"location");function Yn(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:t}=xn();return{locationStyles:h(()=>{if(!e.location)return{};const{side:s,align:u}=Uu(e.location.split(" ").length>1?e.location:`${e.location} center`,t.value);function l(o){return n?n(o):0}const r={};return s!=="center"&&(c?r[oo[s]]=`calc(100% - ${l(s)}px)`:r[s]=0),u!=="center"?c?r[oo[u]]=`calc(100% - ${l(u)}px)`:r[u]=0:(s==="center"?r.top=r.left="50%":r[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",r.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),r})}}const dr=W()({name:"VProgressLinear",props:{absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...ne(),...Kn({location:"top"}),...ze(),..._e(),...Pe()},emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:n}=c;const t=Se(e,"modelValue"),{isRtl:a}=xn(),{themeClasses:s}=$e(e),{locationStyles:u}=Yn(e),{textColorClasses:l,textColorStyles:r}=mc(e,"color"),{backgroundColorClasses:o,backgroundColorStyles:i}=ec(h(()=>e.bgColor||e.color)),{backgroundColorClasses:d,backgroundColorStyles:f}=ec(e,"color"),{roundedClasses:v}=Ke(e),{intersectionRef:y,isIntersecting:b}=ir(),k=h(()=>parseInt(e.max,10)),g=h(()=>parseInt(e.height,10)),p=h(()=>parseFloat(e.bufferValue)/k.value*100),j=h(()=>parseFloat(t.value)/k.value*100),P=h(()=>a.value!==e.reverse),w=h(()=>e.indeterminate?"fade-transition":"slide-x-transition"),I=h(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function A(q){if(!y.value)return;const{left:_,right:x,width:V}=y.value.getBoundingClientRect(),C=P.value?V-q.clientX+(x-V):q.clientX-_;t.value=Math.round(C/V*k.value)}return X(()=>m(e.tag,{ref:y,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&b.value,"v-progress-linear--reverse":P.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},v.value,s.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?le(g.value):0,"--v-progress-linear-height":le(g.value),...u.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:j.value,onClick:e.clickable&&A},{default:()=>[e.stream&&m("div",{key:"stream",class:["v-progress-linear__stream",l.value],style:{...r.value,[P.value?"left":"right"]:le(-g.value),borderTop:`${le(g.value/2)} dotted`,opacity:I.value,top:`calc(50% - ${le(g.value/4)})`,width:le(100-p.value,"%"),"--v-progress-linear-stream-to":le(g.value*(P.value?1:-1))}},null),m("div",{class:["v-progress-linear__background",o.value],style:[i.value,{opacity:I.value,width:le(e.stream?p.value:100,"%")}]},null),m(rn,{name:w.value},{default:()=>[e.indeterminate?m("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(q=>m("div",{key:q,class:["v-progress-linear__indeterminate",q,d.value],style:f.value},null))]):m("div",{class:["v-progress-linear__determinate",d.value],style:[f.value,{width:le(j.value,"%")}]},null)]}),n.default&&m("div",{class:"v-progress-linear__content"},[n.default({value:j.value,buffer:p.value})])]})),{}}}),fr=he({loading:[Boolean,String]},"loader");function Ds(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:wn();return{loaderClasses:h(()=>({[`${c}--loading`]:e.loading}))}}function mr(e,c){var t;let{slots:n}=c;return m("div",{class:`${e.name}__loader`},[((t=n.default)==null?void 0:t.call(n,{color:e.color,isActive:e.active}))||m(dr,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const Tg=["static","relative","fixed","absolute","sticky"],ca=he({position:{type:String,validator:e=>Tg.includes(e)}},"position");function na(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:wn();return{positionClasses:h(()=>e.position?`${c}--${e.position}`:void 0)}}function Yd(){var e,c;return(c=(e=rc("useRouter"))==null?void 0:e.proxy)==null?void 0:c.$router}function La(e,c){const n=M0("RouterLink"),t=h(()=>!!(e.href||e.to)),a=h(()=>(t==null?void 0:t.value)||Ri(c,"click")||Ri(e,"click"));if(typeof n=="string")return{isLink:t,isClickable:a,href:Y(e,"href")};const s=e.to?n.useLink(e):void 0;return{isLink:t,isClickable:a,route:s==null?void 0:s.route,navigate:s==null?void 0:s.navigate,isActive:s&&h(()=>{var u,l;return e.exact?(u=s.isExactActive)==null?void 0:u.value:(l=s.isActive)==null?void 0:l.value}),href:h(()=>e.to?s==null?void 0:s.route.value.href:e.href)}}const Fa=he({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let yu=!1;function $g(e,c){let n=!1,t,a;Je&&(Fe(()=>{window.addEventListener("popstate",s),t=e==null?void 0:e.beforeEach((u,l,r)=>{yu?n?c(r):r():setTimeout(()=>n?c(r):r()),yu=!0}),a=e==null?void 0:e.afterEach(()=>{yu=!1})}),Ic(()=>{window.removeEventListener("popstate",s),t==null||t(),a==null||a()}));function s(u){var l;(l=u.state)!=null&&l.replaced||(n=!0,setTimeout(()=>n=!1))}}function Mg(e,c){ae(()=>{var n;return(n=e.isActive)==null?void 0:n.value},n=>{e.isLink.value&&n&&c&&Fe(()=>{c(!0)})},{immediate:!0})}const vr=he({active:{type:Boolean,default:void 0},symbol:{type:null,default:rr},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:qe,appendIcon:qe,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},text:String,...Ec(),...ne(),...ac(),...Oc(),...tc(),...Zt(),...fr(),...Kn(),...ca(),...ze(),...Fa(),...In(),..._e({tag:"button"}),...Pe(),...Nc({variant:"elevated"})},"v-btn"),gc=W()({name:"VBtn",directives:{Ripple:Wn},props:vr(),emits:{"group:selected":e=>!0},setup(e,c){let{attrs:n,slots:t}=c;const{themeClasses:a}=$e(e),{borderClasses:s}=Fc(e),{colorClasses:u,colorStyles:l,variantClasses:r}=jt(e),{densityClasses:o}=bc(e),{dimensionStyles:i}=Lc(e),{elevationClasses:d}=ic(e),{loaderClasses:f}=Ds(e),{locationStyles:v}=Yn(e),{positionClasses:y}=na(e),{roundedClasses:b}=Ke(e),{sizeClasses:k,sizeStyles:g}=ea(e),p=Jt(e,e.symbol,!1),j=La(e,n),P=h(()=>{var _;return e.active!==void 0?e.active:j.isLink.value?(_=j.isActive)==null?void 0:_.value:p==null?void 0:p.isSelected.value}),w=h(()=>(p==null?void 0:p.disabled.value)||e.disabled),I=h(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),A=h(()=>{if(e.value!==void 0)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function q(_){var x;w.value||((x=j.navigate)==null||x.call(j,_),p==null||p.toggle())}return Mg(j,p==null?void 0:p.select),X(()=>{var N,Q;const _=j.isLink.value?"a":e.tag,x=!!(e.prependIcon||t.prepend),V=!!(e.appendIcon||t.append),C=!!(e.icon&&e.icon!==!0),M=(p==null?void 0:p.isSelected.value)&&(!j.isLink.value||((N=j.isActive)==null?void 0:N.value))||!p||((Q=j.isActive)==null?void 0:Q.value);return We(m(_,{type:_==="a"?void 0:"button",class:["v-btn",p==null?void 0:p.selectedClass.value,{"v-btn--active":P.value,"v-btn--block":e.block,"v-btn--disabled":w.value,"v-btn--elevated":I.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},a.value,s.value,M?u.value:void 0,o.value,d.value,f.value,y.value,b.value,k.value,r.value,e.class],style:[M?l.value:void 0,i.value,v.value,g.value,e.style],disabled:w.value||void 0,href:j.href.value,onClick:q,value:A.value},{default:()=>{var F;return[gt(!0,"v-btn"),!e.icon&&x&&m("span",{key:"prepend",class:"v-btn__prepend"},[t.prepend?m(Be,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},t.prepend):m(Ue,{key:"prepend-icon",icon:e.prependIcon},null)]),m("span",{class:"v-btn__content","data-no-activator":""},[!t.default&&C?m(Ue,{key:"content-icon",icon:e.icon},null):m(Be,{key:"content-defaults",disabled:!C,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var H;return[((H=t.default)==null?void 0:H.call(t))??e.text]}})]),!e.icon&&V&&m("span",{key:"append",class:"v-btn__append"},[t.append?m(Be,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},t.append):m(Ue,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&m("span",{key:"loader",class:"v-btn__loader"},[((F=t.loader)==null?void 0:F.call(t))??m(or,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[Sc("ripple"),!w.value&&e.ripple,null]])}),{}}}),Bg=W()({name:"VAppBarNavIcon",props:vr({icon:"$menu",variant:"text"}),setup(e,c){let{slots:n}=c;return X(()=>m(gc,se(e,{class:["v-app-bar-nav-icon"]}),n)),{}}}),Rg=W()({name:"VToolbarItems",props:{...ne(),...Nc({variant:"text"})},setup(e,c){let{slots:n}=c;return nc({VBtn:{color:Y(e,"color"),height:"inherit",variant:Y(e,"variant")}}),X(()=>{var t;return m("div",{class:["v-toolbar-items",e.class],style:e.style},[(t=n.default)==null?void 0:t.call(n)])}),{}}}),Og=W()({name:"VAppBarTitle",props:Bd(),setup(e,c){let{slots:n}=c;return X(()=>m(ur,se(e,{class:"v-app-bar-title"}),n)),{}}});const Gd=Qc("v-alert-title"),Lg=["success","info","warning","error"],Fg=W()({name:"VAlert",props:{border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:qe,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>Lg.includes(e)},...ne(),...ac(),...Oc(),...tc(),...Kn(),...ca(),...ze(),..._e(),...Pe(),...Nc({variant:"flat"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,c){let{emit:n,slots:t}=c;const a=Se(e,"modelValue"),s=h(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),u=h(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:l}=$e(e),{colorClasses:r,colorStyles:o,variantClasses:i}=jt(u),{densityClasses:d}=bc(e),{dimensionStyles:f}=Lc(e),{elevationClasses:v}=ic(e),{locationStyles:y}=Yn(e),{positionClasses:b}=na(e),{roundedClasses:k}=Ke(e),{textColorClasses:g,textColorStyles:p}=mc(Y(e,"borderColor")),{t:j}=Rc(),P=h(()=>({"aria-label":j(e.closeLabel),onClick(w){a.value=!1,n("click:close",w)}}));return()=>{const w=!!(t.prepend||s.value),I=!!(t.title||e.title),A=!!(e.text||t.text),q=!!(t.close||e.closable);return a.value&&m(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},l.value,r.value,d.value,v.value,b.value,k.value,i.value,e.class],style:[o.value,f.value,y.value,e.style],role:"alert"},{default:()=>{var _,x;return[gt(!1,"v-alert"),e.border&&m("div",{key:"border",class:["v-alert__border",g.value],style:p.value},null),w&&m("div",{key:"prepend",class:"v-alert__prepend"},[t.prepend?m(Be,{key:"prepend-defaults",disabled:!s.value,defaults:{VIcon:{density:e.density,icon:s.value,size:e.prominent?44:28}}},t.prepend):m(Ue,{key:"prepend-icon",density:e.density,icon:s.value,size:e.prominent?44:28},null)]),m("div",{class:"v-alert__content"},[I&&m(Gd,{key:"title"},{default:()=>{var V;return[((V=t.title)==null?void 0:V.call(t))??e.title]}}),A&&(((_=t.text)==null?void 0:_.call(t))??e.text),(x=t.default)==null?void 0:x.call(t)]),t.append&&m("div",{key:"append",class:"v-alert__append"},[t.append()]),q&&m("div",{key:"close",class:"v-alert__close"},[t.close?m(Be,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var V;return[(V=t.close)==null?void 0:V.call(t,{props:P.value})]}}):m(gc,se({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},P.value),null)])]}})}}});function Xd(e){const{t:c}=Rc();function n(t){let{name:a}=t;const s={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[a],u=e[`onClick:${a}`],l=u&&s?c(`$vuetify.input.${s}`,e.label??""):void 0;return m(Ue,{icon:e[`${a}Icon`],"aria-label":l,onClick:u},null)}return{InputIcon:n}}const ta=W()({name:"VLabel",props:{text:String,clickable:Boolean,...ne(),...Pe()},setup(e,c){let{slots:n}=c;return X(()=>{var t;return m("label",{class:["v-label",{"v-label--clickable":e.clickable},e.class],style:e.style},[e.text,(t=n.default)==null?void 0:t.call(n)])}),{}}}),da=W()({name:"VFieldLabel",props:{floating:Boolean,...ne()},setup(e,c){let{slots:n}=c;return X(()=>m(ta,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},n)),{}}}),zs=he({focused:Boolean,"onUpdate:focused":ln()},"focus");function Gn(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:wn();const n=Se(e,"focused"),t=h(()=>({[`${c}--focused`]:n.value}));function a(){n.value=!0}function s(){n.value=!1}return{focusClasses:t,isFocused:n,focus:a,blur:s}}const Ng=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],Hs=he({appendInnerIcon:qe,bgColor:String,clearable:Boolean,clearIcon:{type:qe,default:"$clear"},active:Boolean,color:String,baseColor:String,dirty:Boolean,disabled:Boolean,error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:qe,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>Ng.includes(e)},"onClick:clear":ln(),"onClick:appendInner":ln(),"onClick:prependInner":ln(),...ne(),...fr(),...ze(),...Pe()},"v-field"),Na=W()({name:"VField",inheritAttrs:!1,props:{id:String,...zs(),...Hs()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,c){let{attrs:n,emit:t,slots:a}=c;const{themeClasses:s}=$e(e),{loaderClasses:u}=Ds(e),{focusClasses:l,isFocused:r,focus:o,blur:i}=Gn(e),{InputIcon:d}=Xd(e),{roundedClasses:f}=Ke(e),v=h(()=>e.dirty||e.active),y=h(()=>!e.singleLine&&!!(e.label||a.label)),b=yc(),k=h(()=>e.id||`input-${b}`),g=h(()=>`${k.value}-messages`),p=$(),j=$(),P=$(),{backgroundColorClasses:w,backgroundColorStyles:I}=ec(Y(e,"bgColor")),{textColorClasses:A,textColorStyles:q}=mc(h(()=>e.error||e.disabled?void 0:v.value&&r.value?e.color:e.baseColor));ae(v,V=>{if(y.value){const C=p.value.$el,M=j.value.$el;requestAnimationFrame(()=>{const N=Xl(C),Q=M.getBoundingClientRect(),F=Q.x-N.x,H=Q.y-N.y-(N.height/2-Q.height/2),D=Q.width/.75,J=Math.abs(D-N.width)>1?{maxWidth:le(D)}:void 0,R=getComputedStyle(C),K=getComputedStyle(M),z=parseFloat(R.transitionDuration)*1e3||150,fe=parseFloat(K.getPropertyValue("--v-field-label-scale")),oe=K.getPropertyValue("color");C.style.visibility="visible",M.style.visibility="hidden",lt(C,{transform:`translate(${F}px, ${H}px) scale(${fe})`,color:oe,...J},{duration:z,easing:Aa,direction:V?"normal":"reverse"}).finished.then(()=>{C.style.removeProperty("visibility"),M.style.removeProperty("visibility")})})}},{flush:"post"});const _=h(()=>({isActive:v,isFocused:r,controlRef:P,blur:i,focus:o}));function x(V){V.target!==document.activeElement&&V.preventDefault()}return X(()=>{var F,H,D;const V=e.variant==="outlined",C=a["prepend-inner"]||e.prependInnerIcon,M=!!(e.clearable||a.clear),N=!!(a["append-inner"]||e.appendInnerIcon||M),Q=a.label?a.label({label:e.label,props:{for:k.value}}):e.label;return m("div",se({class:["v-field",{"v-field--active":v.value,"v-field--appended":N,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":C,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!Q,[`v-field--variant-${e.variant}`]:!0},s.value,w.value,l.value,u.value,f.value,e.class],style:[I.value,q.value,e.style],onClick:x},n),[m("div",{class:"v-field__overlay"},null),m(mr,{name:"v-field",active:!!e.loading,color:e.error?"error":e.color},{default:a.loader}),C&&m("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&m(d,{key:"prepend-icon",name:"prependInner"},null),(F=a["prepend-inner"])==null?void 0:F.call(a,_.value)]),m("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&y.value&&m(da,{key:"floating-label",ref:j,class:[A.value],floating:!0,for:k.value},{default:()=>[Q]}),m(da,{ref:p,for:k.value},{default:()=>[Q]}),(H=a.default)==null?void 0:H.call(a,{..._.value,props:{id:k.value,class:"v-field__input","aria-describedby":g.value},focus:o,blur:i})]),M&&m(sr,{key:"clear"},{default:()=>[We(m("div",{class:"v-field__clearable",onMousedown:J=>{J.preventDefault(),J.stopPropagation()}},[a.clear?a.clear():m(d,{name:"clear"},null)]),[[fn,e.dirty]])]}),N&&m("div",{key:"append",class:"v-field__append-inner"},[(D=a["append-inner"])==null?void 0:D.call(a,_.value),e.appendInnerIcon&&m(d,{key:"append-icon",name:"appendInner"},null)]),m("div",{class:["v-field__outline",A.value]},[V&&m(me,null,[m("div",{class:"v-field__outline__start"},null),y.value&&m("div",{class:"v-field__outline__notch"},[m(da,{ref:j,floating:!0,for:k.value},{default:()=>[Q]})]),m("div",{class:"v-field__outline__end"},null)]),["plain","underlined"].includes(e.variant)&&y.value&&m(da,{ref:j,floating:!0,for:k.value},{default:()=>[Q]})])])}),{controlRef:P}}});function yr(e){const c=Object.keys(Na.props).filter(n=>!Lb(n)&&n!=="class"&&n!=="style");return Kt(e,c)}const Qd=W()({name:"VMessages",props:{active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...ne(),...Vn({transition:{component:ar,leaveAbsolute:!0,group:!0}})},setup(e,c){let{slots:n}=c;const t=h(()=>$c(e.messages)),{textColorClasses:a,textColorStyles:s}=mc(h(()=>e.color));return X(()=>m(Wc,{transition:e.transition,tag:"div",class:["v-messages",a.value,e.class],style:[s.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&t.value.map((u,l)=>m("div",{class:"v-messages__message",key:`${l}-${t.value}`},[n.message?n.message({message:u}):u]))]})),{}}}),Zd=Symbol.for("vuetify:form"),Dg=he({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form");function zg(e){const c=Se(e,"modelValue"),n=h(()=>e.disabled),t=h(()=>e.readonly),a=$(!1),s=$([]),u=$([]);async function l(){const i=[];let d=!0;u.value=[],a.value=!0;for(const f of s.value){const v=await f.validate();if(v.length>0&&(d=!1,i.push({id:f.id,errorMessages:v})),!d&&e.fastFail)break}return u.value=i,a.value=!1,{valid:d,errors:u.value}}function r(){s.value.forEach(i=>i.reset()),c.value=null}function o(){s.value.forEach(i=>i.resetValidation()),u.value=[],c.value=null}return ae(s,()=>{let i=0,d=0;const f=[];for(const v of s.value)v.isValid===!1?(d++,f.push({id:v.id,errorMessages:v.errorMessages})):v.isValid===!0&&i++;u.value=f,c.value=d>0?!1:i===s.value.length?!0:null},{deep:!0}),Ge(Zd,{register:i=>{let{id:d,validate:f,reset:v,resetValidation:y}=i;s.value.some(b=>b.id===d)&&Fn(`Duplicate input name "${d}"`),s.value.push({id:d,validate:f,reset:v,resetValidation:y,isValid:null,errorMessages:[]})},unregister:i=>{s.value=s.value.filter(d=>d.id!==i)},update:(i,d,f)=>{const v=s.value.find(y=>y.id===i);v&&(v.isValid=d,v.errorMessages=f)},isDisabled:n,isReadonly:t,isValidating:a,items:s,validateOn:Y(e,"validateOn")}),{errors:u,isDisabled:n,isReadonly:t,isValidating:a,items:s,validate:l,reset:r,resetValidation:o}}function Us(){return Ee(Zd,null)}const Jd=he({disabled:Boolean,error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:Boolean,rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...zs()},"validation");function ef(e){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:wn(),n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:yc();const t=Se(e,"modelValue"),a=h(()=>e.validationValue===void 0?t.value:e.validationValue),s=Us(),u=$([]),l=$(!0),r=h(()=>!!($c(t.value===""?null:t.value).length||$c(a.value===""?null:a.value).length)),o=h(()=>!!(e.disabled||s!=null&&s.isDisabled.value)),i=h(()=>!!(e.readonly||s!=null&&s.isReadonly.value)),d=h(()=>e.errorMessages.length?$c(e.errorMessages).slice(0,Math.max(0,+e.maxErrors)):u.value),f=h(()=>e.error||d.value.length?!1:e.rules.length&&l.value?null:!0),v=$(!1),y=h(()=>({[`${c}--error`]:f.value===!1,[`${c}--dirty`]:r.value,[`${c}--disabled`]:o.value,[`${c}--readonly`]:i.value})),b=h(()=>e.name??dc(n));Ps(()=>{s==null||s.register({id:b.value,validate:j,reset:g,resetValidation:p})}),jc(()=>{s==null||s.unregister(b.value)});const k=h(()=>e.validateOn||(s==null?void 0:s.validateOn.value)||"input");vc(()=>s==null?void 0:s.update(b.value,f.value,d.value)),zn(()=>k.value==="input",()=>{ae(a,()=>{if(a.value!=null)j();else if(e.focused){const P=ae(()=>e.focused,w=>{w||j(),P()})}})}),zn(()=>k.value==="blur",()=>{ae(()=>e.focused,P=>{P||j()})}),ae(f,()=>{s==null||s.update(b.value,f.value,d.value)});function g(){p(),t.value=null}function p(){l.value=!0,u.value=[]}async function j(){const P=[];v.value=!0;for(const w of e.rules){if(P.length>=+(e.maxErrors??1))break;const A=await(typeof w=="function"?w:()=>w)(a.value);if(A!==!0){if(typeof A!="string"){console.warn(`${A} is not a valid value. Rule functions must return boolean true or a string.`);continue}P.push(A)}}return u.value=P,v.value=!1,l.value=!1,u.value}return{errorMessages:d,isDirty:r,isDisabled:o,isReadonly:i,isPristine:l,isValid:f,isValidating:v,reset:g,resetValidation:p,validate:j,validationClasses:y}}const An=he({id:String,appendIcon:qe,prependIcon:qe,hideDetails:[Boolean,String],hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":ln(),"onClick:append":ln(),...ne(),...ac(),...Jd()},"v-input"),lc=W()({name:"VInput",props:{...An()},emits:{"update:modelValue":e=>!0},setup(e,c){let{attrs:n,slots:t,emit:a}=c;const{densityClasses:s}=bc(e),{InputIcon:u}=Xd(e),l=yc(),r=h(()=>e.id||`input-${l}`),o=h(()=>`${r.value}-messages`),{errorMessages:i,isDirty:d,isDisabled:f,isReadonly:v,isPristine:y,isValid:b,isValidating:k,reset:g,resetValidation:p,validate:j,validationClasses:P}=ef(e,"v-input",r),w=h(()=>({id:r,messagesId:o,isDirty:d,isDisabled:f,isReadonly:v,isPristine:y,isValid:b,isValidating:k,reset:g,resetValidation:p,validate:j})),I=h(()=>i.value.length>0?i.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages);return X(()=>{var V,C,M,N;const A=!!(t.prepend||e.prependIcon),q=!!(t.append||e.appendIcon),_=I.value.length>0,x=!e.hideDetails||e.hideDetails==="auto"&&(_||!!t.details);return m("div",{class:["v-input",`v-input--${e.direction}`,s.value,P.value,e.class],style:e.style},[A&&m("div",{key:"prepend",class:"v-input__prepend"},[(V=t.prepend)==null?void 0:V.call(t,w.value),e.prependIcon&&m(u,{key:"prepend-icon",name:"prepend"},null)]),t.default&&m("div",{class:"v-input__control"},[(C=t.default)==null?void 0:C.call(t,w.value)]),q&&m("div",{key:"append",class:"v-input__append"},[e.appendIcon&&m(u,{key:"append-icon",name:"append"},null),(M=t.append)==null?void 0:M.call(t,w.value)]),x&&m("div",{class:"v-input__details"},[m(Qd,{id:o.value,active:_,messages:I.value},{message:t.message}),(N=t.details)==null?void 0:N.call(t,w.value)])])}),{reset:g,resetValidation:p,validate:j}}});const Ws=W()({name:"VCounter",functional:!0,props:{active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...ne(),...Vn({transition:{component:ar}})},setup(e,c){let{slots:n}=c;const t=h(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return X(()=>m(Wc,{transition:e.transition},{default:()=>[We(m("div",{class:["v-counter",e.class],style:e.style},[n.default?n.default({counter:t.value,max:e.max,value:e.value}):t.value]),[[fn,e.active]])]})),{}}}),bu=Symbol("Forwarded refs");function hu(e,c){let n=e;for(;n;){const t=Reflect.getOwnPropertyDescriptor(n,c);if(t)return t;n=Object.getPrototypeOf(n)}}function Zc(e){for(var c=arguments.length,n=new Array(c>1?c-1:0),t=1;t<c;t++)n[t-1]=arguments[t];return e[bu]=n,new Proxy(e,{get(a,s){if(Reflect.has(a,s))return Reflect.get(a,s);if(!(typeof s=="symbol"||s.startsWith("__"))){for(const u of n)if(u.value&&Reflect.has(u.value,s)){const l=Reflect.get(u.value,s);return typeof l=="function"?l.bind(u.value):l}}},has(a,s){if(Reflect.has(a,s))return!0;if(typeof s=="symbol"||s.startsWith("__"))return!1;for(const u of n)if(u.value&&Reflect.has(u.value,s))return!0;return!1},getOwnPropertyDescriptor(a,s){var l;const u=Reflect.getOwnPropertyDescriptor(a,s);if(u)return u;if(!(typeof s=="symbol"||s.startsWith("__"))){for(const r of n){if(!r.value)continue;const o=hu(r.value,s)??("_"in r.value?hu((l=r.value._)==null?void 0:l.setupState,s):void 0);if(o)return o}for(const r of n){const o=r.value&&r.value[bu];if(!o)continue;const i=o.slice();for(;i.length;){const d=i.shift(),f=hu(d.value,s);if(f)return f;const v=d.value&&d.value[bu];v&&i.push(...v)}}}}})}const Hg=["color","file","time","date","datetime-local","week","month"],Ks=he({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"},modelModifiers:Object,...An(),...Hs()},"v-text-field"),mt=W()({name:"VTextField",directives:{Intersect:Oa},inheritAttrs:!1,props:Ks(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,c){let{attrs:n,emit:t,slots:a}=c;const s=Se(e,"modelValue"),{isFocused:u,focus:l,blur:r}=Gn(e),o=h(()=>typeof e.counterValue=="function"?e.counterValue(s.value):(s.value??"").toString().length),i=h(()=>{if(n.maxlength)return n.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function d(w,I){var A,q;!e.autofocus||!w||(q=(A=I[0].target)==null?void 0:A.focus)==null||q.call(A)}const f=$(),v=$(),y=$(),b=h(()=>Hg.includes(e.type)||e.persistentPlaceholder||u.value||e.active);function k(){var w;y.value!==document.activeElement&&((w=y.value)==null||w.focus()),u.value||l()}function g(w){t("mousedown:control",w),w.target!==y.value&&(k(),w.preventDefault())}function p(w){k(),t("click:control",w)}function j(w){w.stopPropagation(),k(),Fe(()=>{s.value=null,Yl(e["onClick:clear"],w)})}function P(w){var A;const I=w.target;if(s.value=I.value,(A=e.modelModifiers)!=null&&A.trim&&["text","search","password","tel","url"].includes(e.type)){const q=[I.selectionStart,I.selectionEnd];Fe(()=>{I.selectionStart=q[0],I.selectionEnd=q[1]})}}return X(()=>{const w=!!(a.counter||e.counter||e.counterValue),I=!!(w||a.details),[A,q]=yt(n),[{modelValue:_,...x}]=lc.filterProps(e),[V]=yr(e);return m(lc,se({ref:f,modelValue:s.value,"onUpdate:modelValue":C=>s.value=C,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)},e.class],style:e.style},A,x,{focused:u.value}),{...a,default:C=>{let{id:M,isDisabled:N,isDirty:Q,isReadonly:F,isValid:H}=C;return m(Na,se({ref:v,onMousedown:g,onClick:p,"onClick:clear":j,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},V,{id:M.value,active:b.value||Q.value,dirty:Q.value||e.dirty,disabled:N.value,focused:u.value,error:H.value===!1}),{...a,default:D=>{let{props:{class:J,...R}}=D;const K=We(m("input",se({ref:y,value:s.value,onInput:P,autofocus:e.autofocus,readonly:F.value,disabled:N.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:k,onBlur:r},R,q),null),[[Sc("intersect"),{handler:d},null,{once:!0}]]);return m(me,null,[e.prefix&&m("span",{class:"v-text-field__prefix"},[e.prefix]),a.default?m("div",{class:J,"data-no-activator":""},[a.default(),K]):jn(K,{class:J}),e.suffix&&m("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:I?C=>{var M;return m(me,null,[(M=a.details)==null?void 0:M.call(a,C),w&&m(me,null,[m("span",null,null),m(Ws,{active:e.persistentCounter||u.value,value:o.value,max:i.value},a.counter)])])}:void 0})}),Zc({},f,v,y)}});const cf=Symbol.for("vuetify:selection-control-group"),br=he({color:String,disabled:Boolean,error:Boolean,id:String,inline:Boolean,falseIcon:qe,trueIcon:qe,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,modelValue:null,type:String,valueComparator:{type:Function,default:vt},...Pe(),...ac()},"v-selection-control-group"),nf=W()({name:"VSelectionControlGroup",props:{defaultsTarget:{type:String,default:"VSelectionControl"},...ne(),...br()},emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:n}=c;const t=Se(e,"modelValue"),a=yc(),s=h(()=>e.id||`v-selection-control-group-${a}`),u=h(()=>e.name||s.value),l=new Set;return Ge(cf,{modelValue:t,forceUpdate:()=>{l.forEach(r=>r())},onForceUpdate:r=>{l.add(r),Ic(()=>{l.delete(r)})}}),nc({[e.defaultsTarget]:{color:Y(e,"color"),disabled:Y(e,"disabled"),density:Y(e,"density"),error:Y(e,"error"),inline:Y(e,"inline"),modelValue:t,multiple:h(()=>!!e.multiple||e.multiple==null&&Array.isArray(t.value)),name:u,falseIcon:Y(e,"falseIcon"),trueIcon:Y(e,"trueIcon"),readonly:Y(e,"readonly"),ripple:Y(e,"ripple"),type:Y(e,"type"),valueComparator:Y(e,"valueComparator")}}),X(()=>{var r;return m("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(r=n.default)==null?void 0:r.call(n)])}),{}}}),Ys=he({label:String,trueValue:null,falseValue:null,value:null,...ne(),...br()},"v-selection-control");function Ug(e){const c=Ee(cf,void 0),{densityClasses:n}=bc(e),t=Se(e,"modelValue"),a=h(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),s=h(()=>e.falseValue!==void 0?e.falseValue:!1),u=h(()=>!!e.multiple||e.multiple==null&&Array.isArray(t.value)),l=h({get(){const d=c?c.modelValue.value:t.value;return u.value?d.some(f=>e.valueComparator(f,a.value)):e.valueComparator(d,a.value)},set(d){if(e.readonly)return;const f=d?a.value:s.value;let v=f;u.value&&(v=d?[...$c(t.value),f]:$c(t.value).filter(y=>!e.valueComparator(y,a.value))),c?c.modelValue.value=v:t.value=v}}),{textColorClasses:r,textColorStyles:o}=mc(h(()=>l.value&&!e.error&&!e.disabled?e.color:void 0)),i=h(()=>l.value?e.trueIcon:e.falseIcon);return{group:c,densityClasses:n,trueValue:a,falseValue:s,model:l,textColorClasses:r,textColorStyles:o,icon:i}}const Ft=W()({name:"VSelectionControl",directives:{Ripple:Wn},inheritAttrs:!1,props:Ys(),emits:{"update:modelValue":e=>!0},setup(e,c){let{attrs:n,slots:t}=c;const{group:a,densityClasses:s,icon:u,model:l,textColorClasses:r,textColorStyles:o,trueValue:i}=Ug(e),d=yc(),f=h(()=>e.id||`input-${d}`),v=$(!1),y=$(!1),b=$();a==null||a.onForceUpdate(()=>{b.value&&(b.value.checked=l.value)});function k(j){v.value=!0,(!Gu||Gu&&j.target.matches(":focus-visible"))&&(y.value=!0)}function g(){v.value=!1,y.value=!1}function p(j){e.readonly&&a&&Fe(()=>a.forceUpdate()),l.value=j.target.checked}return X(()=>{var I,A;const j=t.label?t.label({label:e.label,props:{for:f.value}}):e.label,[P,w]=yt(n);return m("div",se({class:["v-selection-control",{"v-selection-control--dirty":l.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":v.value,"v-selection-control--focus-visible":y.value,"v-selection-control--inline":e.inline},s.value,e.class]},P,{style:e.style}),[m("div",{class:["v-selection-control__wrapper",r.value],style:o.value},[(I=t.default)==null?void 0:I.call(t),We(m("div",{class:["v-selection-control__input"]},[u.value&&m(Ue,{key:"icon",icon:u.value},null),m("input",se({ref:b,checked:l.value,disabled:e.disabled,id:f.value,onBlur:g,onFocus:k,onInput:p,"aria-disabled":e.readonly,type:e.type,value:i.value,name:e.name,"aria-checked":e.type==="checkbox"?l.value:void 0},w),null),(A=t.input)==null?void 0:A.call(t,{model:l,textColorClasses:r,textColorStyles:o,props:{onFocus:k,onBlur:g,id:f.value}})]),[[Sc("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),j&&m(ta,{for:f.value,clickable:!0},{default:()=>[j]})])}),{isFocused:v,input:b}}}),tf=he({indeterminate:Boolean,indeterminateIcon:{type:qe,default:"$checkboxIndeterminate"},...Ys({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"v-checkbox-btn"),Nt=W()({name:"VCheckboxBtn",props:tf(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,c){let{slots:n}=c;const t=Se(e,"indeterminate"),a=Se(e,"modelValue");function s(r){t.value&&(t.value=!1)}const u=h(()=>e.indeterminate?e.indeterminateIcon:e.falseIcon),l=h(()=>e.indeterminate?e.indeterminateIcon:e.trueIcon);return X(()=>m(Ft,se(e,{modelValue:a.value,"onUpdate:modelValue":[r=>a.value=r,s],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:u.value,trueIcon:l.value,"aria-checked":e.indeterminate?"mixed":void 0}),n)),{}}}),Wg=W()({name:"VCheckbox",inheritAttrs:!1,props:{...An(),...mn(tf(),["inline"])},emits:{"update:focused":e=>!0},setup(e,c){let{attrs:n,slots:t}=c;const{isFocused:a,focus:s,blur:u}=Gn(e),l=yc(),r=h(()=>e.id||`checkbox-${l}`);return X(()=>{const[o,i]=yt(n),[d,f]=lc.filterProps(e),[v,y]=Nt.filterProps(e);return m(lc,se({class:["v-checkbox",e.class]},o,d,{id:r.value,focused:a.value,style:e.style}),{...t,default:b=>{let{id:k,messagesId:g,isDisabled:p,isReadonly:j}=b;return m(Nt,se(v,{id:k.value,"aria-describedby":g.value,disabled:p.value,readonly:j.value},i,{onFocus:s,onBlur:u}),t)}})}),{}}});const Kg=he({start:Boolean,end:Boolean,icon:qe,image:String,...ne(),...ac(),...ze(),...In(),..._e(),...Pe(),...Nc({variant:"flat"})},"v-avatar"),Hn=W()({name:"VAvatar",props:Kg(),setup(e,c){let{slots:n}=c;const{themeClasses:t}=$e(e),{colorClasses:a,colorStyles:s,variantClasses:u}=jt(e),{densityClasses:l}=bc(e),{roundedClasses:r}=Ke(e),{sizeClasses:o,sizeStyles:i}=ea(e);return X(()=>m(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,a.value,l.value,r.value,o.value,u.value,e.class],style:[s.value,i.value,e.style]},{default:()=>{var d;return[e.image?m(Xt,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?m(Ue,{key:"icon",icon:e.icon},null):(d=n.default)==null?void 0:d.call(n),gt(!1,"v-avatar")]}})),{}}});const af=Symbol.for("vuetify:v-chip-group"),Yg=W()({name:"VChipGroup",props:{column:Boolean,filter:Boolean,valueComparator:{type:Function,default:vt},...ne(),...Qt({selectedClass:"v-chip--selected"}),..._e(),...Pe(),...Nc({variant:"tonal"})},emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:n}=c;const{themeClasses:t}=$e(e),{isSelected:a,select:s,next:u,prev:l,selected:r}=qt(e,af);return nc({VChip:{color:Y(e,"color"),disabled:Y(e,"disabled"),filter:Y(e,"filter"),variant:Y(e,"variant")}}),X(()=>m(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},t.value,e.class],style:e.style},{default:()=>{var o;return[(o=n.default)==null?void 0:o.call(n,{isSelected:a,select:s,next:u,prev:l,selected:r.value})]}})),{}}}),Da=W()({name:"VChip",directives:{Ripple:Wn},props:{activeClass:String,appendAvatar:String,appendIcon:qe,closable:Boolean,closeIcon:{type:qe,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:qe,ripple:{type:Boolean,default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:ln(),onClickOnce:ln(),...Ec(),...ne(),...ac(),...tc(),...Zt(),...ze(),...Fa(),...In(),..._e({tag:"span"}),...Pe(),...Nc({variant:"tonal"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,c){let{attrs:n,emit:t,slots:a}=c;const{t:s}=Rc(),{borderClasses:u}=Fc(e),{colorClasses:l,colorStyles:r,variantClasses:o}=jt(e),{densityClasses:i}=bc(e),{elevationClasses:d}=ic(e),{roundedClasses:f}=Ke(e),{sizeClasses:v}=ea(e),{themeClasses:y}=$e(e),b=Se(e,"modelValue"),k=Jt(e,af,!1),g=La(e,n),p=h(()=>e.link!==!1&&g.isLink.value),j=h(()=>!e.disabled&&e.link!==!1&&(!!k||e.link||g.isClickable.value)),P=h(()=>({"aria-label":s(e.closeLabel),onClick(A){b.value=!1,t("click:close",A)}}));function w(A){var q;t("click",A),j.value&&((q=g.navigate)==null||q.call(g,A),k==null||k.toggle())}function I(A){(A.key==="Enter"||A.key===" ")&&(A.preventDefault(),w(A))}return()=>{const A=g.isLink.value?"a":e.tag,q=!!(e.appendIcon||e.appendAvatar),_=!!(q||a.append),x=!!(a.close||e.closable),V=!!(a.filter||e.filter)&&k,C=!!(e.prependIcon||e.prependAvatar),M=!!(C||a.prepend),N=!k||k.isSelected.value;return b.value&&We(m(A,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":j.value,"v-chip--filter":V,"v-chip--pill":e.pill},y.value,u.value,N?l.value:void 0,i.value,d.value,f.value,v.value,o.value,k==null?void 0:k.selectedClass.value,e.class],style:[N?r.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:g.href.value,tabindex:j.value?0:void 0,onClick:w,onKeydown:j.value&&!p.value&&I},{default:()=>{var Q;return[gt(j.value,"v-chip"),V&&m(sr,{key:"filter"},{default:()=>[We(m("div",{class:"v-chip__filter"},[a.filter?We(m(Be,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},null),[[Sc("slot"),a.filter,"default"]]):m(Ue,{key:"filter-icon",icon:e.filterIcon},null)]),[[fn,k.isSelected.value]])]}),M&&m("div",{key:"prepend",class:"v-chip__prepend"},[a.prepend?m(Be,{key:"prepend-defaults",disabled:!C,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},a.prepend):m(me,null,[e.prependIcon&&m(Ue,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&m(Hn,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),((Q=a.default)==null?void 0:Q.call(a,{isSelected:k==null?void 0:k.isSelected.value,selectedClass:k==null?void 0:k.selectedClass.value,select:k==null?void 0:k.select,toggle:k==null?void 0:k.toggle,value:k==null?void 0:k.value.value,disabled:e.disabled}))??e.text,_&&m("div",{key:"append",class:"v-chip__append"},[a.append?m(Be,{key:"append-defaults",disabled:!q,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},a.append):m(me,null,[e.appendIcon&&m(Ue,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&m(Hn,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),x&&m("div",se({key:"close",class:"v-chip__close"},P.value),[a.close?m(Be,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},a.close):m(Ue,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[Sc("ripple"),j.value&&e.ripple,null]])}}});const sf=W()({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...ne(),...Pe()},setup(e,c){let{attrs:n}=c;const{themeClasses:t}=$e(e),{textColorClasses:a,textColorStyles:s}=mc(Y(e,"color")),u=h(()=>{const l={};return e.length&&(l[e.vertical?"maxHeight":"maxWidth"]=le(e.length)),e.thickness&&(l[e.vertical?"borderRightWidth":"borderTopWidth"]=le(e.thickness)),l});return X(()=>m("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},t.value,a.value,e.class],style:[u.value,s.value,e.style],"aria-orientation":!n.role||n.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${n.role||"separator"}`},null)),{}}}),al=Symbol.for("vuetify:list");function uf(){const e=Ee(al,{hasPrepend:$(!1),updateHasPrepend:()=>null}),c={hasPrepend:$(!1),updateHasPrepend:n=>{n&&(c.hasPrepend.value=n)}};return Ge(al,c),e}function lf(){return Ee(al,null)}const Gg={open:e=>{let{id:c,value:n,opened:t,parents:a}=e;if(n){const s=new Set;s.add(c);let u=a.get(c);for(;u!=null;)s.add(u),u=a.get(u);return s}else return t.delete(c),t},select:()=>null},rf={open:e=>{let{id:c,value:n,opened:t,parents:a}=e;if(n){let s=a.get(c);for(t.add(c);s!=null&&s!==c;)t.add(s),s=a.get(s);return t}else t.delete(c);return t},select:()=>null},Xg={open:rf.open,select:e=>{let{id:c,value:n,opened:t,parents:a}=e;if(!n)return t;const s=[];let u=a.get(c);for(;u!=null;)s.push(u),u=a.get(u);return new Set(s)}},hr=e=>{const c={select:n=>{let{id:t,value:a,selected:s}=n;if(t=Ce(t),e&&!a){const u=Array.from(s.entries()).reduce((l,r)=>{let[o,i]=r;return i==="on"?[...l,o]:l},[]);if(u.length===1&&u[0]===t)return s}return s.set(t,a?"on":"off"),s},in:(n,t,a)=>{let s=new Map;for(const u of n||[])s=c.select({id:u,value:!0,selected:new Map(s),children:t,parents:a});return s},out:n=>{const t=[];for(const[a,s]of n.entries())s==="on"&&t.push(a);return t}};return c},of=e=>{const c=hr(e);return{select:t=>{let{selected:a,id:s,...u}=t;s=Ce(s);const l=a.has(s)?new Map([[s,a.get(s)]]):new Map;return c.select({...u,id:s,selected:l})},in:(t,a,s)=>{let u=new Map;return t!=null&&t.length&&(u=c.in(t.slice(0,1),a,s)),u},out:(t,a,s)=>c.out(t,a,s)}},Qg=e=>{const c=hr(e);return{select:t=>{let{id:a,selected:s,children:u,...l}=t;return a=Ce(a),u.has(a)?s:c.select({id:a,selected:s,children:u,...l})},in:c.in,out:c.out}},Zg=e=>{const c=of(e);return{select:t=>{let{id:a,selected:s,children:u,...l}=t;return a=Ce(a),u.has(a)?s:c.select({id:a,selected:s,children:u,...l})},in:c.in,out:c.out}},Jg=e=>{const c={select:n=>{let{id:t,value:a,selected:s,children:u,parents:l}=n;t=Ce(t);const r=new Map(s),o=[t];for(;o.length;){const d=o.shift();s.set(d,a?"on":"off"),u.has(d)&&o.push(...u.get(d))}let i=l.get(t);for(;i;){const d=u.get(i),f=d.every(y=>s.get(y)==="on"),v=d.every(y=>!s.has(y)||s.get(y)==="off");s.set(i,f?"on":v?"off":"indeterminate"),i=l.get(i)}return e&&!a&&Array.from(s.entries()).reduce((f,v)=>{let[y,b]=v;return b==="on"?[...f,y]:f},[]).length===0?r:s},in:(n,t,a)=>{let s=new Map;for(const u of n||[])s=c.select({id:u,value:!0,selected:new Map(s),children:t,parents:a});return s},out:(n,t)=>{const a=[];for(const[s,u]of n.entries())u==="on"&&!t.has(s)&&a.push(s);return a}};return c},$a=Symbol.for("vuetify:nested"),df={id:$(),root:{register:()=>null,unregister:()=>null,parents:$(new Map),children:$(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:$(new Set),selected:$(new Map),selectedValues:$([])}},e3=he({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),c3=e=>{let c=!1;const n=$(new Map),t=$(new Map),a=Se(e,"opened",e.opened,d=>new Set(d),d=>[...d.values()]),s=h(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return Zg(e.mandatory);case"leaf":return Qg(e.mandatory);case"independent":return hr(e.mandatory);case"single-independent":return of(e.mandatory);case"classic":default:return Jg(e.mandatory)}}),u=h(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return Xg;case"single":return Gg;case"multiple":default:return rf}}),l=Se(e,"selected",e.selected,d=>s.value.in(d,n.value,t.value),d=>s.value.out(d,n.value,t.value));jc(()=>{c=!0});function r(d){const f=[];let v=d;for(;v!=null;)f.unshift(v),v=t.value.get(v);return f}const o=rc("nested"),i={id:$(),root:{opened:a,selected:l,selectedValues:h(()=>{const d=[];for(const[f,v]of l.value.entries())v==="on"&&d.push(f);return d}),register:(d,f,v)=>{f&&d!==f&&t.value.set(d,f),v&&n.value.set(d,[]),f!=null&&n.value.set(f,[...n.value.get(f)||[],d])},unregister:d=>{if(c)return;n.value.delete(d);const f=t.value.get(d);if(f){const v=n.value.get(f)??[];n.value.set(f,v.filter(y=>y!==d))}t.value.delete(d),a.value.delete(d)},open:(d,f,v)=>{o.emit("click:open",{id:d,value:f,path:r(d),event:v});const y=u.value.open({id:d,value:f,opened:new Set(a.value),children:n.value,parents:t.value,event:v});y&&(a.value=y)},openOnSelect:(d,f,v)=>{const y=u.value.select({id:d,value:f,selected:new Map(l.value),opened:new Set(a.value),children:n.value,parents:t.value,event:v});y&&(a.value=y)},select:(d,f,v)=>{o.emit("click:select",{id:d,value:f,path:r(d),event:v});const y=s.value.select({id:d,value:f,selected:new Map(l.value),children:n.value,parents:t.value,event:v});y&&(l.value=y),i.root.openOnSelect(d,f,v)},children:n,parents:t}};return Ge($a,i),i.root},ff=(e,c)=>{const n=Ee($a,df),t=Symbol(yc()),a=h(()=>e.value??t),s={...n,id:a,open:(u,l)=>n.root.open(a.value,u,l),openOnSelect:(u,l)=>n.root.openOnSelect(a.value,u,l),isOpen:h(()=>n.root.opened.value.has(a.value)),parent:h(()=>n.root.parents.value.get(a.value)),select:(u,l)=>n.root.select(a.value,u,l),isSelected:h(()=>n.root.selected.value.get(Ce(a.value))==="on"),isIndeterminate:h(()=>n.root.selected.value.get(a.value)==="indeterminate"),isLeaf:h(()=>!n.root.children.value.get(a.value)),isGroupActivator:n.isGroupActivator};return!n.isGroupActivator&&n.root.register(a.value,n.id.value,c),jc(()=>{!n.isGroupActivator&&n.root.unregister(a.value)}),c&&Ge($a,s),s},n3=()=>{const e=Ee($a,df);Ge($a,{...e,isGroupActivator:!0})},t3=Bc({name:"VListGroupActivator",setup(e,c){let{slots:n}=c;return n3(),()=>{var t;return(t=n.default)==null?void 0:t.call(n)}}}),a3=he({activeColor:String,color:String,collapseIcon:{type:qe,default:"$collapse"},expandIcon:{type:qe,default:"$expand"},prependIcon:qe,appendIcon:qe,fluid:Boolean,subgroup:Boolean,value:null,...ne(),..._e()},"v-list-group"),sl=W()({name:"VListGroup",props:{title:String,...a3()},setup(e,c){let{slots:n}=c;const{isOpen:t,open:a,id:s}=ff(Y(e,"value"),!0),u=h(()=>`v-list-group--id-${String(s.value)}`),l=lf(),{isBooted:r}=ht();function o(v){a(!t.value,v)}const i=h(()=>({onClick:o,class:"v-list-group__header",id:u.value})),d=h(()=>t.value?e.collapseIcon:e.expandIcon),f=h(()=>({VListItem:{active:t.value,activeColor:e.activeColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&d.value,appendIcon:e.appendIcon||!e.subgroup&&d.value,title:e.title,value:e.value}}));return X(()=>m(e.tag,{class:["v-list-group",{"v-list-group--prepend":l==null?void 0:l.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":t.value},e.class],style:e.style},{default:()=>[n.activator&&m(Be,{defaults:f.value},{default:()=>[m(t3,null,{default:()=>[n.activator({props:i.value,isOpen:t.value})]})]}),m(Wc,{transition:{component:Ns},disabled:!r.value},{default:()=>{var v;return[We(m("div",{class:"v-list-group__items",role:"group","aria-labelledby":u.value},[(v=n.default)==null?void 0:v.call(n)]),[[fn,t.value]])]}})]})),{}}});const mf=Qc("v-list-item-subtitle"),vf=Qc("v-list-item-title"),pn=W()({name:"VListItem",directives:{Ripple:Wn},props:{active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:qe,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:qe,ripple:{type:Boolean,default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:ln(),onClickOnce:ln(),...Ec(),...ne(),...ac(),...Oc(),...tc(),...ze(),...Fa(),..._e(),...Pe(),...Nc({variant:"text"})},emits:{click:e=>!0},setup(e,c){let{attrs:n,slots:t,emit:a}=c;const s=La(e,n),u=h(()=>e.value??s.href.value),{select:l,isSelected:r,isIndeterminate:o,isGroupActivator:i,root:d,parent:f,openOnSelect:v}=ff(u,!1),y=lf(),b=h(()=>{var H;return e.active!==!1&&(e.active||((H=s.isActive)==null?void 0:H.value)||r.value)}),k=h(()=>e.link!==!1&&s.isLink.value),g=h(()=>!e.disabled&&e.link!==!1&&(e.link||s.isClickable.value||e.value!=null&&!!y)),p=h(()=>e.rounded||e.nav),j=h(()=>({color:b.value?e.activeColor??e.color:e.color,variant:e.variant}));ae(()=>{var H;return(H=s.isActive)==null?void 0:H.value},H=>{H&&f.value!=null&&d.open(f.value,!0),H&&v(H)},{immediate:!0});const{themeClasses:P}=$e(e),{borderClasses:w}=Fc(e),{colorClasses:I,colorStyles:A,variantClasses:q}=jt(j),{densityClasses:_}=bc(e),{dimensionStyles:x}=Lc(e),{elevationClasses:V}=ic(e),{roundedClasses:C}=Ke(p),M=h(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),N=h(()=>({isActive:b.value,select:l,isSelected:r.value,isIndeterminate:o.value}));function Q(H){var D;a("click",H),!(i||!g.value)&&((D=s.navigate)==null||D.call(s,H),e.value!=null&&l(!r.value,H))}function F(H){(H.key==="Enter"||H.key===" ")&&(H.preventDefault(),Q(H))}return X(()=>{const H=k.value?"a":e.tag,D=!y||r.value||b.value,J=t.title||e.title,R=t.subtitle||e.subtitle,K=!!(e.appendAvatar||e.appendIcon),z=!!(K||t.append),fe=!!(e.prependAvatar||e.prependIcon),oe=!!(fe||t.prepend);return y==null||y.updateHasPrepend(oe),We(m(H,{class:["v-list-item",{"v-list-item--active":b.value,"v-list-item--disabled":e.disabled,"v-list-item--link":g.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!oe&&(y==null?void 0:y.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&b.value},P.value,w.value,D?I.value:void 0,_.value,V.value,M.value,C.value,q.value,e.class],style:[D?A.value:void 0,x.value,e.style],href:s.href.value,tabindex:g.value?0:void 0,onClick:Q,onKeydown:g.value&&!k.value&&F},{default:()=>{var B;return[gt(g.value||b.value,"v-list-item"),oe&&m("div",{key:"prepend",class:"v-list-item__prepend"},[t.prepend?m(Be,{key:"prepend-defaults",disabled:!fe,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var T;return[(T=t.prepend)==null?void 0:T.call(t,N.value)]}}):m(me,null,[e.prependAvatar&&m(Hn,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&m(Ue,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),m("div",{class:"v-list-item__content","data-no-activator":""},[J&&m(vf,{key:"title"},{default:()=>{var T;return[((T=t.title)==null?void 0:T.call(t,{title:e.title}))??e.title]}}),R&&m(mf,{key:"subtitle"},{default:()=>{var T;return[((T=t.subtitle)==null?void 0:T.call(t,{subtitle:e.subtitle}))??e.subtitle]}}),(B=t.default)==null?void 0:B.call(t,N.value)]),z&&m("div",{key:"append",class:"v-list-item__append"},[t.append?m(Be,{key:"append-defaults",disabled:!K,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var T;return[(T=t.append)==null?void 0:T.call(t,N.value)]}}):m(me,null,[e.appendIcon&&m(Ue,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&m(Hn,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])]}}),[[Sc("ripple"),g.value&&e.ripple]])}),{}}}),yf=W()({name:"VListSubheader",props:{color:String,inset:Boolean,sticky:Boolean,title:String,...ne(),..._e()},setup(e,c){let{slots:n}=c;const{textColorClasses:t,textColorStyles:a}=mc(Y(e,"color"));return X(()=>{const s=!!(n.default||e.title);return m(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},t.value,e.class],style:[{textColorStyles:a},e.style]},{default:()=>{var u;return[s&&m("div",{class:"v-list-subheader__text"},[((u=n.default)==null?void 0:u.call(n))??e.title])]}})}),{}}}),bf=W()({name:"VListChildren",props:{items:Array},setup(e,c){let{slots:n}=c;return uf(),()=>{var t,a;return((t=n.default)==null?void 0:t.call(n))??((a=e.items)==null?void 0:a.map(s=>{var v,y;let{children:u,props:l,type:r,raw:o}=s;if(r==="divider")return((v=n.divider)==null?void 0:v.call(n,{props:l}))??m(sf,l,null);if(r==="subheader")return((y=n.subheader)==null?void 0:y.call(n,{props:l}))??m(yf,l,{default:n.subheader});const i={subtitle:n.subtitle?b=>{var k;return(k=n.subtitle)==null?void 0:k.call(n,{...b,item:o})}:void 0,prepend:n.prepend?b=>{var k;return(k=n.prepend)==null?void 0:k.call(n,{...b,item:o})}:void 0,append:n.append?b=>{var k;return(k=n.append)==null?void 0:k.call(n,{...b,item:o})}:void 0,default:n.default?b=>{var k;return(k=n.default)==null?void 0:k.call(n,{...b,item:o})}:void 0,title:n.title?b=>{var k;return(k=n.title)==null?void 0:k.call(n,{...b,item:o})}:void 0},[d,f]=sl.filterProps(l);return u?m(sl,se({value:l==null?void 0:l.value},d),{activator:b=>{let{props:k}=b;return n.header?n.header({props:{...l,...k}}):m(pn,se(l,k),i)},default:()=>m(bf,{items:u},n)}):n.item?n.item(l):m(pn,l,i)}))}}}),hf=he({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"item");function It(e,c){const n=tn(c,e.itemTitle,c),t=e.returnObject?c:tn(c,e.itemValue,n),a=tn(c,e.itemChildren),s=e.itemProps===!0?typeof c=="object"&&c!=null&&!Array.isArray(c)?"children"in c?Kt(c,["children"])[1]:c:void 0:tn(c,e.itemProps),u={title:n,value:t,...s};return{title:String(u.title??""),value:u.value,props:u,children:Array.isArray(a)?gf(e,a):void 0,raw:c}}function gf(e,c){const n=[];for(const t of c)n.push(It(e,t));return n}function gr(e){const c=h(()=>gf(e,e.items));function n(a){return a.map(s=>c.value.find(l=>vt(s,l.value))??It(e,s))}function t(a){return a.map(s=>{let{props:u}=s;return u.value})}return{items:c,transformIn:n,transformOut:t}}function s3(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function u3(e,c){const n=tn(c,e.itemType,"item"),t=s3(c)?c:tn(c,e.itemTitle),a=tn(c,e.itemValue,void 0),s=tn(c,e.itemChildren),u=e.itemProps===!0?Kt(c,["children"])[1]:tn(c,e.itemProps),l={title:t,value:a,...u};return{type:n,title:l.title,value:l.value,props:l,children:n==="item"&&s?jf(e,s):void 0,raw:c}}function jf(e,c){const n=[];for(const t of c)n.push(u3(e,t));return n}function l3(e){return{items:h(()=>jf(e,e.items))}}const Gs=W()({name:"VList",props:{activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...e3({selectStrategy:"single-leaf",openStrategy:"list"}),...Ec(),...ne(),...ac(),...Oc(),...tc(),itemType:{type:String,default:"type"},...hf(),...ze(),..._e(),...Pe(),...Nc({variant:"text"})},emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,c){let{slots:n}=c;const{items:t}=l3(e),{themeClasses:a}=$e(e),{backgroundColorClasses:s,backgroundColorStyles:u}=ec(Y(e,"bgColor")),{borderClasses:l}=Fc(e),{densityClasses:r}=bc(e),{dimensionStyles:o}=Lc(e),{elevationClasses:i}=ic(e),{roundedClasses:d}=Ke(e),{open:f,select:v}=c3(e),y=h(()=>e.lines?`v-list--${e.lines}-line`:void 0),b=Y(e,"activeColor"),k=Y(e,"color");uf(),nc({VListGroup:{activeColor:b,color:k},VListItem:{activeClass:Y(e,"activeClass"),activeColor:b,color:k,density:Y(e,"density"),disabled:Y(e,"disabled"),lines:Y(e,"lines"),nav:Y(e,"nav"),variant:Y(e,"variant")}});const g=$(!1),p=$();function j(q){g.value=!0}function P(q){g.value=!1}function w(q){var _;!g.value&&!(q.relatedTarget&&((_=p.value)!=null&&_.contains(q.relatedTarget)))&&A()}function I(q){if(p.value){if(q.key==="ArrowDown")A("next");else if(q.key==="ArrowUp")A("prev");else if(q.key==="Home")A("first");else if(q.key==="End")A("last");else return;q.preventDefault()}}function A(q){if(p.value)return td(p.value,q)}return X(()=>m(e.tag,{ref:p,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},a.value,s.value,l.value,r.value,i.value,y.value,d.value,e.class],style:[u.value,o.value,e.style],role:"listbox","aria-activedescendant":void 0,onFocusin:j,onFocusout:P,onFocus:w,onKeydown:I},{default:()=>[m(bf,{items:t.value},n)]})),{open:f,select:v,focus:A}}}),r3=Qc("v-list-img"),i3=W()({name:"VListItemAction",props:{start:Boolean,end:Boolean,...ne(),..._e()},setup(e,c){let{slots:n}=c;return X(()=>m(e.tag,{class:["v-list-item-action",{"v-list-item-action--start":e.start,"v-list-item-action--end":e.end},e.class],style:e.style},n)),{}}}),o3=W()({name:"VListItemMedia",props:{start:Boolean,end:Boolean,...ne(),..._e()},setup(e,c){let{slots:n}=c;return X(()=>m(e.tag,{class:["v-list-item-media",{"v-list-item-media--start":e.start,"v-list-item-media--end":e.end},e.class],style:e.style},n)),{}}});const qf=he({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function kf(e,c){const n={},t=a=>()=>{if(!Je)return Promise.resolve(!0);const s=a==="openDelay";return n.closeDelay&&window.clearTimeout(n.closeDelay),delete n.closeDelay,n.openDelay&&window.clearTimeout(n.openDelay),delete n.openDelay,new Promise(u=>{const l=parseInt(e[a]??0,10);n[a]=window.setTimeout(()=>{c==null||c(s),u(s)},l)})};return{runCloseDelay:t("closeDelay"),runOpenDelay:t("openDelay")}}const ul=Symbol.for("vuetify:v-menu"),d3=he({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...qf()},"v-overlay-activator");function f3(e,c){let{isActive:n,isTop:t}=c;const a=$();let s=!1,u=!1,l=!0;const r=h(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),o=h(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!r.value),{runOpenDelay:i,runCloseDelay:d}=kf(e,j=>{j===(e.openOnHover&&s||r.value&&u)&&!(e.openOnHover&&n.value&&!t.value)&&(n.value!==j&&(l=!0),n.value=j)}),f={click:j=>{j.stopPropagation(),a.value=j.currentTarget||j.target,n.value=!n.value},mouseenter:j=>{var P;(P=j.sourceCapabilities)!=null&&P.firesTouchEvents||(s=!0,a.value=j.currentTarget||j.target,i())},mouseleave:j=>{s=!1,d()},focus:j=>{Gu&&!j.target.matches(":focus-visible")||(u=!0,j.stopPropagation(),a.value=j.currentTarget||j.target,i())},blur:j=>{u=!1,j.stopPropagation(),d()}},v=h(()=>{const j={};return o.value&&(j.click=f.click),e.openOnHover&&(j.mouseenter=f.mouseenter,j.mouseleave=f.mouseleave),r.value&&(j.focus=f.focus,j.blur=f.blur),j}),y=h(()=>{const j={};if(e.openOnHover&&(j.mouseenter=()=>{s=!0,i()},j.mouseleave=()=>{s=!1,d()}),e.closeOnContentClick){const P=Ee(ul,null);j.click=()=>{n.value=!1,P==null||P.closeParents()}}return j}),b=h(()=>{const j={};return e.openOnHover&&(j.mouseenter=()=>{l&&(s=!0,l=!1,i())},j.mouseleave=()=>{s=!1,d()}),j});ae(t,j=>{j&&(e.openOnHover&&!s&&(!r.value||!u)||r.value&&!u&&(!e.openOnHover||!s))&&(n.value=!1)});const k=$();Gc(()=>{k.value&&Fe(()=>{const j=k.value;a.value=$b(j)?j.$el:j})});const g=rc("useActivator");let p;return ae(()=>!!e.activator,j=>{j&&Je?(p=pl(),p.run(()=>{m3(e,g,{activatorEl:a,activatorEvents:v})})):p&&p.stop()},{flush:"post",immediate:!0}),Ic(()=>{p==null||p.stop()}),{activatorEl:a,activatorRef:k,activatorEvents:v,contentEvents:y,scrimEvents:b}}function m3(e,c,n){let{activatorEl:t,activatorEvents:a}=n;ae(()=>e.activator,(r,o)=>{if(o&&r!==o){const i=l(o);i&&u(i)}r&&Fe(()=>s())},{immediate:!0}),ae(()=>e.activatorProps,()=>{s()}),Ic(()=>{u()});function s(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l(),o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;r&&(Object.entries(a.value).forEach(i=>{let[d,f]=i;r.addEventListener(d,f)}),Object.keys(o).forEach(i=>{o[i]==null?r.removeAttribute(i):r.setAttribute(i,o[i])}))}function u(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:l(),o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;r&&(Object.entries(a.value).forEach(i=>{let[d,f]=i;r.removeEventListener(d,f)}),Object.keys(o).forEach(i=>{r.removeAttribute(i)}))}function l(){var i,d;let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,o;if(r)if(r==="parent"){let f=(d=(i=c==null?void 0:c.proxy)==null?void 0:i.$el)==null?void 0:d.parentNode;for(;f.hasAttribute("data-no-activator");)f=f.parentNode;o=f}else typeof r=="string"?o=document.querySelector(r):"$el"in r?o=r.$el:o=r;return t.value=(o==null?void 0:o.nodeType)===Node.ELEMENT_NODE?o:null,t.value}}const Xs=he({eager:Boolean},"lazy");function jr(e,c){const n=$(!1),t=h(()=>n.value||e.eager||c.value);ae(c,()=>n.value=!0);function a(){e.eager||(n.value=!1)}return{isBooted:n,hasContent:t,onAfterLeave:a}}function gu(e,c){return{x:e.x+c.x,y:e.y+c.y}}function v3(e,c){return{x:e.x-c.x,y:e.y-c.y}}function fo(e,c){if(e.side==="top"||e.side==="bottom"){const{side:n,align:t}=e,a=t==="left"?0:t==="center"?c.width/2:t==="right"?c.width:t,s=n==="top"?0:n==="bottom"?c.height:n;return gu({x:a,y:s},c)}else if(e.side==="left"||e.side==="right"){const{side:n,align:t}=e,a=n==="left"?0:n==="right"?c.width:n,s=t==="top"?0:t==="center"?c.height/2:t==="bottom"?c.height:t;return gu({x:a,y:s},c)}return gu({x:c.width/2,y:c.height/2},c)}const pf={static:h3,connected:j3},y3=he({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in pf},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"v-overlay-location-strategies");function b3(e,c){const n=$({}),t=$();Je&&(zn(()=>!!(c.isActive.value&&e.locationStrategy),s=>{var u,l;ae(()=>e.locationStrategy,s),Ic(()=>{t.value=void 0}),typeof e.locationStrategy=="function"?t.value=(u=e.locationStrategy(c,e,n))==null?void 0:u.updateLocation:t.value=(l=pf[e.locationStrategy](c,e,n))==null?void 0:l.updateLocation}),window.addEventListener("resize",a,{passive:!0}),Ic(()=>{window.removeEventListener("resize",a),t.value=void 0}));function a(s){var u;(u=t.value)==null||u.call(t,s)}return{contentStyles:n,updateLocation:t}}function h3(){}function g3(e,c){const n=Xl(e);return c?n.x+=parseFloat(e.style.right||0):n.x-=parseFloat(e.style.left||0),n.y-=parseFloat(e.style.top||0),n}function j3(e,c,n){lh(e.activatorEl.value)&&Object.assign(n.value,{position:"fixed"});const{preferredAnchor:a,preferredOrigin:s}=Kl(()=>{const y=Uu(c.location,e.isRtl.value),b=c.origin==="overlap"?y:c.origin==="auto"?ou(y):Uu(c.origin,e.isRtl.value);return y.side===b.side&&y.align===du(b).align?{preferredAnchor:Oi(y),preferredOrigin:Oi(b)}:{preferredAnchor:y,preferredOrigin:b}}),[u,l,r,o]=["minWidth","minHeight","maxWidth","maxHeight"].map(y=>h(()=>{const b=parseFloat(c[y]);return isNaN(b)?1/0:b})),i=h(()=>{if(Array.isArray(c.offset))return c.offset;if(typeof c.offset=="string"){const y=c.offset.split(" ").map(parseFloat);return y.length<2&&y.push(0),y}return typeof c.offset=="number"?[c.offset,0]:[0,0]});let d=!1;const f=new ResizeObserver(()=>{d&&v()});ae([e.activatorEl,e.contentEl],(y,b)=>{let[k,g]=y,[p,j]=b;p&&f.unobserve(p),k&&f.observe(k),j&&f.unobserve(j),g&&f.observe(g)},{immediate:!0}),Ic(()=>{f.disconnect()});function v(){if(d=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>d=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const y=e.activatorEl.value.getBoundingClientRect(),b=g3(e.contentEl.value,e.isRtl.value),k=js(e.contentEl.value),g=12;k.length||(k.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(b.x+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),b.y+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const p=k.reduce((V,C)=>{const M=C.getBoundingClientRect(),N=new $t({x:C===document.documentElement?0:M.x,y:C===document.documentElement?0:M.y,width:C.clientWidth,height:C.clientHeight});return V?new $t({x:Math.max(V.left,N.left),y:Math.max(V.top,N.top),width:Math.min(V.right,N.right)-Math.max(V.left,N.left),height:Math.min(V.bottom,N.bottom)-Math.max(V.top,N.top)}):N},void 0);p.x+=g,p.y+=g,p.width-=g*2,p.height-=g*2;let j={anchor:a.value,origin:s.value};function P(V){const C=new $t(b),M=fo(V.anchor,y),N=fo(V.origin,C);let{x:Q,y:F}=v3(M,N);switch(V.anchor.side){case"top":F-=i.value[0];break;case"bottom":F+=i.value[0];break;case"left":Q-=i.value[0];break;case"right":Q+=i.value[0];break}switch(V.anchor.align){case"top":F-=i.value[1];break;case"bottom":F+=i.value[1];break;case"left":Q-=i.value[1];break;case"right":Q+=i.value[1];break}return C.x+=Q,C.y+=F,C.width=Math.min(C.width,r.value),C.height=Math.min(C.height,o.value),{overflows:Fi(C,p),x:Q,y:F}}let w=0,I=0;const A={x:0,y:0},q={x:!1,y:!1};let _=-1;for(;;){if(_++>10){Ku("Infinite loop detected in connectedLocationStrategy");break}const{x:V,y:C,overflows:M}=P(j);w+=V,I+=C,b.x+=V,b.y+=C;{const N=Li(j.anchor),Q=M.x.before||M.x.after,F=M.y.before||M.y.after;let H=!1;if(["x","y"].forEach(D=>{if(D==="x"&&Q&&!q.x||D==="y"&&F&&!q.y){const J={anchor:{...j.anchor},origin:{...j.origin}},R=D==="x"?N==="y"?du:ou:N==="y"?ou:du;J.anchor=R(J.anchor),J.origin=R(J.origin);const{overflows:K}=P(J);(K[D].before<=M[D].before&&K[D].after<=M[D].after||K[D].before+K[D].after<(M[D].before+M[D].after)/2)&&(j=J,H=q[D]=!0)}}),H)continue}M.x.before&&(w+=M.x.before,b.x+=M.x.before),M.x.after&&(w-=M.x.after,b.x-=M.x.after),M.y.before&&(I+=M.y.before,b.y+=M.y.before),M.y.after&&(I-=M.y.after,b.y-=M.y.after);{const N=Fi(b,p);A.x=p.width-N.x.before-N.x.after,A.y=p.height-N.y.before-N.y.after,w+=N.x.before,b.x+=N.x.before,I+=N.y.before,b.y+=N.y.before}break}const x=Li(j.anchor);return Object.assign(n.value,{"--v-overlay-anchor-origin":`${j.anchor.side} ${j.anchor.align}`,transformOrigin:`${j.origin.side} ${j.origin.align}`,top:le(ju(I)),left:e.isRtl.value?void 0:le(ju(w)),right:e.isRtl.value?le(ju(-w)):void 0,minWidth:le(x==="y"?Math.min(u.value,y.width):u.value),maxWidth:le(mo(fc(A.x,u.value===1/0?0:u.value,r.value))),maxHeight:le(mo(fc(A.y,l.value===1/0?0:l.value,o.value)))}),{available:A,contentBox:b}}return ae(()=>[a.value,s.value,c.offset,c.minWidth,c.minHeight,c.maxWidth,c.maxHeight],()=>v()),Fe(()=>{const y=v();if(!y)return;const{available:b,contentBox:k}=y;k.height>b.y&&requestAnimationFrame(()=>{v(),requestAnimationFrame(()=>{v()})})}),{updateLocation:v}}function ju(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function mo(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ll=!0;const ps=[];function q3(e){!ll||ps.length?(ps.push(e),rl()):(ll=!1,e(),rl())}let vo=-1;function rl(){cancelAnimationFrame(vo),vo=requestAnimationFrame(()=>{const e=ps.shift();e&&e(),ps.length?rl():ll=!0})}const is={none:null,close:S3,block:_3,reposition:C3},k3=he({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in is}},"v-overlay-scroll-strategies");function p3(e,c){if(!Je)return;let n;Gc(async()=>{n==null||n.stop(),c.isActive.value&&e.scrollStrategy&&(n=pl(),await Fe(),n.active&&n.run(()=>{var t;typeof e.scrollStrategy=="function"?e.scrollStrategy(c,e,n):(t=is[e.scrollStrategy])==null||t.call(is,c,e,n)}))}),Ic(()=>{n==null||n.stop()})}function S3(e){function c(n){e.isActive.value=!1}Sf(e.activatorEl.value??e.contentEl.value,c)}function _3(e,c){var u;const n=(u=e.root.value)==null?void 0:u.offsetParent,t=[...new Set([...js(e.activatorEl.value,c.contained?n:void 0),...js(e.contentEl.value,c.contained?n:void 0)])].filter(l=>!l.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,s=(l=>er(l)&&l)(n||document.documentElement);s&&e.root.value.classList.add("v-overlay--scroll-blocked"),t.forEach((l,r)=>{l.style.setProperty("--v-body-scroll-x",le(-l.scrollLeft)),l.style.setProperty("--v-body-scroll-y",le(-l.scrollTop)),l.style.setProperty("--v-scrollbar-offset",le(a)),l.classList.add("v-overlay-scroll-blocked")}),Ic(()=>{t.forEach((l,r)=>{const o=parseFloat(l.style.getPropertyValue("--v-body-scroll-x")),i=parseFloat(l.style.getPropertyValue("--v-body-scroll-y"));l.style.removeProperty("--v-body-scroll-x"),l.style.removeProperty("--v-body-scroll-y"),l.style.removeProperty("--v-scrollbar-offset"),l.classList.remove("v-overlay-scroll-blocked"),l.scrollLeft=-o,l.scrollTop=-i}),s&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function C3(e,c,n){let t=!1,a=-1,s=-1;function u(l){q3(()=>{var i,d;const r=performance.now();(d=(i=e.updateLocation).value)==null||d.call(i,l),t=(performance.now()-r)/(1e3/60)>2})}s=(typeof requestIdleCallback>"u"?l=>l():requestIdleCallback)(()=>{n.run(()=>{Sf(e.activatorEl.value??e.contentEl.value,l=>{t?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{u(l)})})):u(l)})})}),Ic(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(s),cancelAnimationFrame(a)})}function Sf(e,c){const n=[document,...js(e)];n.forEach(t=>{t.addEventListener("scroll",c,{passive:!0})}),Ic(()=>{n.forEach(t=>{t.removeEventListener("scroll",c)})})}function _f(){if(!Je)return $(!1);const{ssr:e}=bt();if(e){const c=$(!1);return vc(()=>{c.value=!0}),c}else return $(!0)}function za(){const c=rc("useScopeId").vnode.scopeId;return{scopeId:c?{[c]:""}:void 0}}const yo=Symbol.for("vuetify:stack"),ia=uc([]);function w3(e,c,n){const t=rc("useStack"),a=!n,s=Ee(yo,void 0),u=uc({activeChildren:new Set});Ge(yo,u);const l=$(+c.value);zn(e,()=>{var d;const i=(d=ia.at(-1))==null?void 0:d[1];l.value=i?i+10:+c.value,a&&ia.push([t.uid,l.value]),s==null||s.activeChildren.add(t.uid),Ic(()=>{if(a){const f=Ce(ia).findIndex(v=>v[0]===t.uid);ia.splice(f,1)}s==null||s.activeChildren.delete(t.uid)})});const r=$(!0);a&&Gc(()=>{var d;const i=((d=ia.at(-1))==null?void 0:d[0])===t.uid;setTimeout(()=>r.value=i)});const o=h(()=>!u.activeChildren.size);return{globalTop:Ba(r),localTop:o,stackStyles:h(()=>({zIndex:l.value}))}}function x3(e){return{teleportTarget:h(()=>{const n=e.value;if(n===!0||!Je)return;const t=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(t==null)return;let a=t.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",t.appendChild(a)),a})}}function V3(){return!0}function Cf(e,c,n){if(!e||wf(e,n)===!1)return!1;const t=hd(c);if(typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&t.host===e.target)return!1;const a=(typeof n.value=="object"&&n.value.include||(()=>[]))();return a.push(c),!a.some(s=>s==null?void 0:s.contains(e.target))}function wf(e,c){return(typeof c.value=="object"&&c.value.closeConditional||V3)(e)}function I3(e,c,n){const t=typeof n.value=="function"?n.value:n.value.handler;c._clickOutside.lastMousedownWasOutside&&Cf(e,c,n)&&setTimeout(()=>{wf(e,n)&&t&&t(e)},0)}function bo(e,c){const n=hd(e);c(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&c(n)}const xf={mounted(e,c){const n=a=>I3(a,e,c),t=a=>{e._clickOutside.lastMousedownWasOutside=Cf(a,e,c)};bo(e,a=>{a.addEventListener("click",n,!0),a.addEventListener("mousedown",t,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[c.instance.$.uid]={onClick:n,onMousedown:t}},unmounted(e,c){e._clickOutside&&(bo(e,n=>{var s;if(!n||!((s=e._clickOutside)!=null&&s[c.instance.$.uid]))return;const{onClick:t,onMousedown:a}=e._clickOutside[c.instance.$.uid];n.removeEventListener("click",t,!0),n.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[c.instance.$.uid])}};function A3(e){const{modelValue:c,color:n,...t}=e;return m(rn,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&m("div",se({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},t),null)]})}const Ha=he({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3},...d3(),...ne(),...Oc(),...Xs(),...y3(),...k3(),...Pe(),...Vn()},"v-overlay"),Sn=W()({name:"VOverlay",directives:{ClickOutside:xf},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Ha()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,c){let{slots:n,attrs:t,emit:a}=c;const s=Se(e,"modelValue"),u=h({get:()=>s.value,set:J=>{J&&e.disabled||(s.value=J)}}),{teleportTarget:l}=x3(h(()=>e.attach||e.contained)),{themeClasses:r}=$e(e),{rtlClasses:o,isRtl:i}=xn(),{hasContent:d,onAfterLeave:f}=jr(e,u),v=ec(h(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:y,localTop:b,stackStyles:k}=w3(u,Y(e,"zIndex"),e._disableGlobalStack),{activatorEl:g,activatorRef:p,activatorEvents:j,contentEvents:P,scrimEvents:w}=f3(e,{isActive:u,isTop:b}),{dimensionStyles:I}=Lc(e),A=_f(),{scopeId:q}=za();ae(()=>e.disabled,J=>{J&&(u.value=!1)});const _=$(),x=$(),{contentStyles:V,updateLocation:C}=b3(e,{isRtl:i,contentEl:x,activatorEl:g,isActive:u});p3(e,{root:_,contentEl:x,activatorEl:g,isActive:u,updateLocation:C});function M(J){a("click:outside",J),e.persistent?D():u.value=!1}function N(){return u.value&&y.value}Je&&ae(u,J=>{J?window.addEventListener("keydown",Q):window.removeEventListener("keydown",Q)},{immediate:!0});function Q(J){J.key==="Escape"&&y.value&&(e.persistent?D():u.value=!1)}const F=Yd();zn(()=>e.closeOnBack,()=>{$g(F,J=>{y.value&&u.value?(J(!1),e.persistent?D():u.value=!1):J()})});const H=$();ae(()=>u.value&&(e.absolute||e.contained)&&l.value==null,J=>{if(J){const R=jd(_.value);R&&R!==document.scrollingElement&&(H.value=R.scrollTop)}});function D(){e.noClickAnimation||x.value&&lt(x.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:Aa})}return X(()=>{var J;return m(me,null,[(J=n.activator)==null?void 0:J.call(n,{isActive:u.value,props:se({ref:p},eu(j.value),e.activatorProps)}),A.value&&m(c2,{disabled:!l.value,to:l.value},{default:()=>[d.value&&m("div",se({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":u.value,"v-overlay--contained":e.contained},r.value,o.value,e.class],style:[k.value,{top:le(H.value)},e.style],ref:_},q,t),[m(A3,se({color:v,modelValue:u.value&&!!e.scrim},eu(w.value)),null),m(Wc,{appear:!0,persisted:!0,transition:e.transition,target:g.value,onAfterLeave:()=>{f(),a("afterLeave")}},{default:()=>{var R;return[We(m("div",se({ref:x,class:["v-overlay__content",e.contentClass],style:[I.value,V.value]},eu(P.value),e.contentProps),[(R=n.default)==null?void 0:R.call(n,{isActive:u})]),[[fn,u.value],[Sc("click-outside"),{handler:M,closeConditional:N,include:()=>[g.value]}]])]}})])]})])}),{activatorEl:g,animateClick:D,contentEl:x,globalTop:y,localTop:b,updateLocation:C}}}),Qs=W()({name:"VMenu",props:{id:String,...mn(Ha({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:Fs}}),["absolute"])},emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:n}=c;const t=Se(e,"modelValue"),{scopeId:a}=za(),s=yc(),u=h(()=>e.id||`v-menu-${s}`),l=$(),r=Ee(ul,null),o=$(0);Ge(ul,{register(){++o.value},unregister(){--o.value},closeParents(){setTimeout(()=>{o.value||(t.value=!1,r==null||r.closeParents())},40)}}),ae(t,f=>{f?r==null||r.register():r==null||r.unregister()});function i(){r==null||r.closeParents()}const d=h(()=>se({"aria-haspopup":"menu","aria-expanded":String(t.value),"aria-owns":u.value},e.activatorProps));return X(()=>{const[f]=Sn.filterProps(e);return m(Sn,se({ref:l,class:["v-menu",e.class],style:e.style},f,{modelValue:t.value,"onUpdate:modelValue":v=>t.value=v,absolute:!0,activatorProps:d.value,"onClick:outside":i},a),{activator:n.activator,default:function(){for(var v=arguments.length,y=new Array(v),b=0;b<v;b++)y[b]=arguments[b];return m(Be,{root:!0},{default:()=>{var k;return[(k=n.default)==null?void 0:k.call(n,...y)]}})}})}),Zc({id:u,ΨopenChildren:o},l)}}),qr=he({chips:Boolean,closableChips:Boolean,eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:qe,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,valueComparator:{type:Function,default:vt},...hf({itemChildren:!1})},"v-select"),E3=W()({name:"VSelect",props:{...qr(),...mn(Ks({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...Vn({transition:{component:Fs}})},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,c){let{slots:n}=c;const{t}=Rc(),a=$(),s=$(),u=Se(e,"menu"),l=h({get:()=>u.value,set:V=>{var C;u.value&&!V&&((C=s.value)!=null&&C.ΨopenChildren)||(u.value=V)}}),{items:r,transformIn:o,transformOut:i}=gr(e),d=Se(e,"modelValue",[],V=>o($c(V)),V=>{const C=i(V);return e.multiple?C:C[0]??null}),f=Us(),v=h(()=>d.value.map(V=>r.value.find(C=>e.valueComparator(C.value,V.value))||V)),y=h(()=>v.value.map(V=>V.props.value)),b=$(!1);let k="",g;const p=h(()=>e.hideSelected?r.value.filter(V=>!v.value.some(C=>C===V)):r.value),j=$();function P(V){e.openOnClear&&(l.value=!0)}function w(){e.hideNoData&&!r.value.length||e.readonly||f!=null&&f.isReadonly.value||(l.value=!l.value)}function I(V){var F,H,D,J;if(e.readonly||f!=null&&f.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(V.key)&&V.preventDefault(),["Enter","ArrowDown"," "].includes(V.key)&&(l.value=!0),["Escape","Tab"].includes(V.key)&&(l.value=!1),V.key==="ArrowDown"?(F=j.value)==null||F.focus("next"):V.key==="ArrowUp"?(H=j.value)==null||H.focus("prev"):V.key==="Home"?(D=j.value)==null||D.focus("first"):V.key==="End"&&((J=j.value)==null||J.focus("last"));const C=1e3;function M(R){const K=R.key.length===1,z=!R.ctrlKey&&!R.metaKey&&!R.altKey;return K&&z}if(e.multiple||!M(V))return;const N=performance.now();N-g>C&&(k=""),k+=V.key.toLowerCase(),g=N;const Q=r.value.find(R=>R.title.toLowerCase().startsWith(k));Q!==void 0&&(d.value=[Q])}function A(V){if(e.multiple){const C=y.value.findIndex(M=>e.valueComparator(M,V.value));if(C===-1)d.value=[...d.value,V];else{const M=[...d.value];M.splice(C,1),d.value=M}}else d.value=[V],l.value=!1}function q(V){var C;(C=j.value)!=null&&C.$el.contains(V.relatedTarget)||(l.value=!1)}function _(V){b.value=!0}function x(V){var C;V.relatedTarget==null&&((C=a.value)==null||C.focus())}return X(()=>{const V=!!(e.chips||n.chip),C=!!(!e.hideNoData||p.value.length||n.prepend||n.append||n["no-data"]),M=d.value.length>0,[N]=mt.filterProps(e),Q=M||!b.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return m(mt,se({ref:a},N,{modelValue:d.value.map(F=>F.props.value).join(", "),"onUpdate:modelValue":F=>{F==null&&(d.value=[])},focused:b.value,"onUpdate:focused":F=>b.value=F,validationValue:d.externalValue,dirty:M,class:["v-select",{"v-select--active-menu":l.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":d.value.length},e.class],style:e.style,appendInnerIcon:e.menuIcon,readonly:!0,placeholder:Q,"onClick:clear":P,"onMousedown:control":w,onBlur:q,onKeydown:I}),{...n,default:()=>m(me,null,[m(Qs,se({ref:s,modelValue:l.value,"onUpdate:modelValue":F=>l.value=F,activator:"parent",contentClass:"v-select__content",eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition},e.menuProps),{default:()=>[C&&m(Gs,{ref:j,selected:y.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:F=>F.preventDefault(),onFocusin:_,onFocusout:x},{default:()=>{var F,H,D;return[!p.value.length&&!e.hideNoData&&(((F=n["no-data"])==null?void 0:F.call(n))??m(pn,{title:t(e.noDataText)},null)),(H=n["prepend-item"])==null?void 0:H.call(n),p.value.map((J,R)=>{var K;return n.item?(K=n.item)==null?void 0:K.call(n,{item:J,index:R,props:se(J.props,{onClick:()=>A(J)})}):m(pn,se({key:R},J.props,{onClick:()=>A(J)}),{prepend:z=>{let{isSelected:fe}=z;return m(me,null,[e.multiple&&!e.hideSelected?m(Nt,{modelValue:fe,ripple:!1,tabindex:"-1"},null):void 0,J.props.prependIcon&&m(Ue,{icon:J.props.prependIcon},null)])}})}),(D=n["append-item"])==null?void 0:D.call(n)]}})]}),v.value.map((F,H)=>{var R;function D(K){K.stopPropagation(),K.preventDefault(),A(F)}const J={"onClick:close":D,onMousedown(K){K.preventDefault(),K.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0};return m("div",{key:F.value,class:"v-select__selection"},[V?n.chip?m(Be,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:F.title}}},{default:()=>{var K;return[(K=n.chip)==null?void 0:K.call(n,{item:F,index:H,props:J})]}}):m(Da,se({key:"chip",closable:e.closableChips,size:"small",text:F.title},J),null):((R=n.selection)==null?void 0:R.call(n,{item:F,index:H}))??m("span",{class:"v-select__selection-text"},[F.title,e.multiple&&H<v.value.length-1&&m("span",{class:"v-select__selection-comma"},[Oe(",")])])])})])})}),Zc({isFocused:b,menu:l,select:A},a)}}),P3=(e,c,n)=>e==null||c==null?-1:e.toString().toLocaleLowerCase().indexOf(c.toString().toLocaleLowerCase()),Vf=he({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function T3(e,c,n){var l;const t=[],a=(n==null?void 0:n.default)??P3,s=n!=null&&n.filterKeys?$c(n.filterKeys):!1,u=Object.keys((n==null?void 0:n.customKeyFilter)??{}).length;if(!(e!=null&&e.length))return t;e:for(let r=0;r<e.length;r++){const o=e[r],i={},d={};let f=-1;if(c&&!(n!=null&&n.noFilter)){if(typeof o=="object"){const b=s||Object.keys(o);for(const k of b){const g=tn(o,k,o),p=(l=n==null?void 0:n.customKeyFilter)==null?void 0:l[k];if(f=p?p(g,c,o):a(g,c,o),f!==-1&&f!==!1)p?i[k]=f:d[k]=f;else if((n==null?void 0:n.filterMode)==="every")continue e}}else f=a(o,c,o),f!==-1&&f!==!1&&(d.title=f);const v=Object.keys(d).length,y=Object.keys(i).length;if(!v&&!y||(n==null?void 0:n.filterMode)==="union"&&y!==u&&!v||(n==null?void 0:n.filterMode)==="intersection"&&(y!==u||!v))continue}t.push({index:r,matches:{...d,...i}})}return t}function If(e,c,n,t){const a=h(()=>typeof(n==null?void 0:n.value)!="string"&&typeof(n==null?void 0:n.value)!="number"?"":String(n.value)),s=$([]),u=$(new Map);Gc(()=>{s.value=[],u.value=new Map;const r=dc(c);T3(r,a.value,{customKeyFilter:e.customKeyFilter,default:e.customFilter,filterKeys:dc(t==null?void 0:t.filterKeys)??e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}).forEach(i=>{let{index:d,matches:f}=i;const v=r[d];s.value.push(v),u.value.set(v.value,f)})});function l(r){return u.value.get(r.value)}return{filteredItems:s,filteredMatches:u,getMatches:l}}function $3(e,c,n){if(c==null)return e;if(Array.isArray(c))throw new Error("Multiple matches is not implemented");return typeof c=="number"&&~c?m(me,null,[m("span",{class:"v-autocomplete__unmask"},[e.substr(0,c)]),m("span",{class:"v-autocomplete__mask"},[e.substr(c,n)]),m("span",{class:"v-autocomplete__unmask"},[e.substr(c+n)])]):e}const M3=W()({name:"VAutocomplete",props:{search:String,...Vf({filterKeys:["title"]}),...qr(),...mn(Ks({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...Vn({transition:!1})},emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,c){let{slots:n}=c;const{t}=Rc(),a=$(),s=$(!1),u=$(!0),l=$(),r=Se(e,"menu"),o=h({get:()=>r.value,set:R=>{var K;r.value&&!R&&((K=l.value)!=null&&K.ΨopenChildren)||(r.value=R)}}),i=$(-1),d=h(()=>{var R;return(R=a.value)==null?void 0:R.color}),{items:f,transformIn:v,transformOut:y}=gr(e),{textColorClasses:b,textColorStyles:k}=mc(d),g=Se(e,"search",""),p=Se(e,"modelValue",[],R=>v($c(R)),R=>{const K=y(R);return e.multiple?K:K[0]??null}),j=Us(),{filteredItems:P,getMatches:w}=If(e,f,h(()=>u.value?void 0:g.value)),I=h(()=>p.value.map(R=>f.value.find(K=>e.valueComparator(K.value,R.value))||R)),A=h(()=>e.hideSelected?P.value.filter(R=>!I.value.some(K=>K.value===R.value)):P.value),q=h(()=>I.value.map(R=>R.props.value)),_=h(()=>I.value[i.value]),x=$();function V(R){e.openOnClear&&(o.value=!0),g.value=""}function C(){e.hideNoData&&!f.value.length||e.readonly||j!=null&&j.isReadonly.value||(o.value=!0)}function M(R){var fe,oe,B,T;if(e.readonly||j!=null&&j.isReadonly.value)return;const K=a.value.selectionStart,z=q.value.length;if((i.value>-1||["Enter","ArrowDown","ArrowUp"].includes(R.key))&&R.preventDefault(),["Enter","ArrowDown"].includes(R.key)&&(o.value=!0),["Escape"].includes(R.key)&&(o.value=!1),["Enter","Escape","Tab"].includes(R.key)&&(u.value=!0),R.key==="ArrowDown"?(fe=x.value)==null||fe.focus("next"):R.key==="ArrowUp"&&((oe=x.value)==null||oe.focus("prev")),!!e.multiple){if(["Backspace","Delete"].includes(R.key)){if(i.value<0){R.key==="Backspace"&&!g.value&&(i.value=z-1);return}const O=i.value;_.value&&J(_.value),i.value=O>=z-1?z-2:O}if(R.key==="ArrowLeft"){if(i.value<0&&K>0)return;const O=i.value>-1?i.value-1:z-1;I.value[O]?i.value=O:(i.value=-1,a.value.setSelectionRange((B=g.value)==null?void 0:B.length,(T=g.value)==null?void 0:T.length))}if(R.key==="ArrowRight"){if(i.value<0)return;const O=i.value+1;I.value[O]?i.value=O:(i.value=-1,a.value.setSelectionRange(0,0))}}}function N(R){g.value=R.target.value}function Q(){s.value&&(u.value=!0)}function F(R){s.value=!0}function H(R){var K;R.relatedTarget==null&&((K=a.value)==null||K.focus())}const D=$(!1);function J(R){if(e.multiple){const K=q.value.findIndex(z=>e.valueComparator(z,R.value));if(K===-1)p.value=[...p.value,R];else{const z=[...p.value];z.splice(K,1),p.value=z}}else p.value=[R],D.value=!0,n.selection||(g.value=R.title),o.value=!1,u.value=!0,Fe(()=>D.value=!1)}return ae(s,R=>{var K;R?(D.value=!0,g.value=e.multiple||n.selection?"":String(((K=I.value.at(-1))==null?void 0:K.props.title)??""),u.value=!0,Fe(()=>D.value=!1)):(!e.multiple&&!g.value&&(p.value=[]),o.value=!1,g.value="")}),ae(g,R=>{!s.value||D.value||(R&&(o.value=!0),u.value=!R)}),X(()=>{const R=!!(e.chips||n.chip),K=!!(!e.hideNoData||A.value.length||n.prepend||n.append||n["no-data"]),z=p.value.length>0,[fe]=mt.filterProps(e);return m(mt,se({ref:a},fe,{modelValue:g.value,"onUpdate:modelValue":oe=>{oe==null&&(p.value=[])},focused:s.value,"onUpdate:focused":oe=>s.value=oe,validationValue:p.externalValue,dirty:z,onInput:N,class:["v-autocomplete",{"v-autocomplete--active-menu":o.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selecting-index":i.value>-1,[`v-autocomplete--${e.multiple?"multiple":"single"}`]:!0,"v-autocomplete--selection-slot":!!n.selection},e.class],style:e.style,appendInnerIcon:e.menuIcon,readonly:e.readonly,placeholder:z?void 0:e.placeholder,"onClick:clear":V,"onMousedown:control":C,onKeydown:M}),{...n,default:()=>m(me,null,[m(Qs,se({ref:l,modelValue:o.value,"onUpdate:modelValue":oe=>o.value=oe,activator:"parent",contentClass:"v-autocomplete__content",eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:Q},e.menuProps),{default:()=>[K&&m(Gs,{ref:x,selected:q.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:oe=>oe.preventDefault(),onFocusin:F,onFocusout:H},{default:()=>{var oe,B,T;return[!A.value.length&&!e.hideNoData&&(((oe=n["no-data"])==null?void 0:oe.call(n))??m(pn,{title:t(e.noDataText)},null)),(B=n["prepend-item"])==null?void 0:B.call(n),A.value.map(O=>{var re;return((re=n.item)==null?void 0:re.call(n,{item:O,props:se(O.props,{onClick:()=>J(O)})}))??m(pn,se({key:O.value},O.props,{onClick:()=>J(O)}),{prepend:ie=>{let{isSelected:Ve}=ie;return m(me,null,[e.multiple&&!e.hideSelected?m(Nt,{modelValue:Ve,ripple:!1,tabindex:"-1"},null):void 0,O.props.prependIcon&&m(Ue,{icon:O.props.prependIcon},null)])},title:()=>{var ie,Ve;return u.value?O.title:$3(O.title,(ie=w(O))==null?void 0:ie.title,((Ve=g.value)==null?void 0:Ve.length)??0)}})}),(T=n["append-item"])==null?void 0:T.call(n)]}})]}),I.value.map((oe,B)=>{var re;function T(ie){ie.stopPropagation(),ie.preventDefault(),J(oe)}const O={"onClick:close":T,onMousedown(ie){ie.preventDefault(),ie.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0};return m("div",{key:oe.value,class:["v-autocomplete__selection",B===i.value&&["v-autocomplete__selection--selected",b.value]],style:B===i.value?k.value:{}},[R?n.chip?m(Be,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:oe.title}}},{default:()=>{var ie;return[(ie=n.chip)==null?void 0:ie.call(n,{item:oe,index:B,props:O})]}}):m(Da,se({key:"chip",closable:e.closableChips,size:"small",text:oe.title},O),null):((re=n.selection)==null?void 0:re.call(n,{item:oe,index:B}))??m("span",{class:"v-autocomplete__selection-text"},[oe.title,e.multiple&&B<I.value.length-1&&m("span",{class:"v-autocomplete__selection-comma"},[Oe(",")])])])})])})}),Zc({isFocused:s,isPristine:u,menu:o,search:g,filteredItems:P,select:J},a)}});const B3=W()({name:"VBadge",inheritAttrs:!1,props:{bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:qe,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...ne(),...Kn({location:"top end"}),...ze(),..._e(),...Pe(),...Vn({transition:"scale-rotate-transition"})},setup(e,c){const{backgroundColorClasses:n,backgroundColorStyles:t}=ec(Y(e,"color")),{roundedClasses:a}=Ke(e),{t:s}=Rc(),{textColorClasses:u,textColorStyles:l}=mc(Y(e,"textColor")),{themeClasses:r}=wd(),{locationStyles:o}=Yn(e,!0,i=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(i)?+(e.offsetY??0):["left","right"].includes(i)?+(e.offsetX??0):0));return X(()=>{const i=Number(e.content),d=!e.max||isNaN(i)?e.content:i<=+e.max?i:`${e.max}+`,[f,v]=Kt(c.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return m(e.tag,se({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},v,{style:e.style}),{default:()=>{var y,b;return[m("div",{class:"v-badge__wrapper"},[(b=(y=c.slots).default)==null?void 0:b.call(y),m(Wc,{transition:e.transition},{default:()=>{var k,g;return[We(m("span",se({class:["v-badge__badge",r.value,n.value,a.value,u.value],style:[t.value,l.value,e.inline?{}:o.value],"aria-atomic":"true","aria-label":s(e.label,i),"aria-live":"polite",role:"status"},f),[e.dot?void 0:c.slots.badge?(g=(k=c.slots).badge)==null?void 0:g.call(k):e.icon?m(Ue,{icon:e.icon},null):d]),[[fn,e.modelValue]])]}})])]}})}),{}}});const Af=W()({name:"VBannerActions",props:{color:String,density:String,...ne()},setup(e,c){let{slots:n}=c;return nc({VBtn:{color:e.color,density:e.density,variant:"text"}}),X(()=>{var t;return m("div",{class:["v-banner-actions",e.class],style:e.style},[(t=n.default)==null?void 0:t.call(n)])}),{}}}),Ef=Qc("v-banner-text"),R3=W()({name:"VBanner",props:{avatar:String,color:String,icon:qe,lines:String,stacked:Boolean,sticky:Boolean,text:String,...Ec(),...ne(),...ac(),...Oc(),...tc(),...Kn(),...ca(),...ze(),..._e(),...Pe()},setup(e,c){let{slots:n}=c;const{borderClasses:t}=Fc(e),{densityClasses:a}=bc(e),{mobile:s}=bt(),{dimensionStyles:u}=Lc(e),{elevationClasses:l}=ic(e),{locationStyles:r}=Yn(e),{positionClasses:o}=na(e),{roundedClasses:i}=Ke(e),{themeClasses:d}=$e(e),f=Y(e,"color"),v=Y(e,"density");nc({VBannerActions:{color:f,density:v}}),X(()=>{const y=!!(e.text||n.text),b=!!(e.avatar||e.icon),k=!!(b||n.prepend);return m(e.tag,{class:["v-banner",{"v-banner--stacked":e.stacked||s.value,"v-banner--sticky":e.sticky,[`v-banner--${e.lines}-line`]:!!e.lines},t.value,a.value,l.value,o.value,i.value,d.value,e.class],style:[u.value,r.value,e.style],role:"banner"},{default:()=>{var g;return[k&&m("div",{key:"prepend",class:"v-banner__prepend"},[n.prepend?m(Be,{key:"prepend-defaults",disabled:!b,defaults:{VAvatar:{color:f.value,density:v.value,icon:e.icon,image:e.avatar}}},n.prepend):m(Hn,{key:"prepend-avatar",color:f.value,density:v.value,icon:e.icon,image:e.avatar},null)]),m("div",{class:"v-banner__content"},[y&&m(Ef,{key:"text"},{default:()=>{var p;return[((p=n.text)==null?void 0:p.call(n))??e.text]}}),(g=n.default)==null?void 0:g.call(n)]),n.actions&&m(Af,{key:"actions"},n.actions)]}})})}});const O3=W()({name:"VBottomNavigation",props:{bgColor:String,color:String,grow:Boolean,mode:{type:String,validator:e=>!e||["horizontal","shift"].includes(e)},height:{type:[Number,String],default:56},active:{type:Boolean,default:!0},...Ec(),...ne(),...ac(),...tc(),...ze(),...Yt({name:"bottom-navigation"}),..._e({tag:"header"}),...Qt({modelValue:!0,selectedClass:"v-btn--selected"}),...Pe()},emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:n}=c;const{themeClasses:t}=wd(),{borderClasses:a}=Fc(e),{backgroundColorClasses:s,backgroundColorStyles:u}=ec(Y(e,"bgColor")),{densityClasses:l}=bc(e),{elevationClasses:r}=ic(e),{roundedClasses:o}=Ke(e),{ssrBootStyles:i}=ht(),d=h(()=>Number(e.height)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0)),f=Y(e,"active"),{layoutItemStyles:v}=Gt({id:e.name,order:h(()=>parseInt(e.order,10)),position:h(()=>"bottom"),layoutSize:h(()=>f.value?d.value:0),elementSize:d,active:f,absolute:Y(e,"absolute")});return qt(e,rr),nc({VBtn:{color:Y(e,"color"),density:Y(e,"density"),stacked:h(()=>e.mode!=="horizontal"),variant:"text"}},{scoped:!0}),X(()=>m(e.tag,{class:["v-bottom-navigation",{"v-bottom-navigation--active":f.value,"v-bottom-navigation--grow":e.grow,"v-bottom-navigation--shift":e.mode==="shift"},t.value,s.value,a.value,l.value,r.value,o.value,e.class],style:[u.value,v.value,{height:le(d.value),transform:`translateY(${le(f.value?0:100,"%")})`},i.value,e.style]},{default:()=>[n.default&&m("div",{class:"v-bottom-navigation__content"},[n.default()])]})),{}}});const Pf=W()({name:"VBreadcrumbsDivider",props:{divider:[Number,String],...ne()},setup(e,c){let{slots:n}=c;return X(()=>{var t;return m("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[((t=n==null?void 0:n.default)==null?void 0:t.call(n))??e.divider])}),{}}}),Tf=W()({name:"VBreadcrumbsItem",props:{active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...ne(),...Fa(),..._e({tag:"li"})},setup(e,c){let{slots:n,attrs:t}=c;const a=La(e,t),s=h(()=>{var o;return e.active||((o=a.isActive)==null?void 0:o.value)}),u=h(()=>s.value?e.activeColor:e.color),{textColorClasses:l,textColorStyles:r}=mc(u);return X(()=>{const o=a.isLink.value?"a":e.tag;return m(o,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":s.value,"v-breadcrumbs-item--disabled":e.disabled,"v-breadcrumbs-item--link":a.isLink.value,[`${e.activeClass}`]:s.value&&e.activeClass},l.value,e.class],style:[r.value,e.style],href:a.href.value,"aria-current":s.value?"page":void 0,onClick:a.navigate},{default:()=>{var i;return[((i=n.default)==null?void 0:i.call(n))??e.title]}})}),{}}}),L3=W()({name:"VBreadcrumbs",props:{activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:qe,items:{type:Array,default:()=>[]},...ne(),...ac(),...ze(),..._e({tag:"ul"})},setup(e,c){let{slots:n}=c;const{backgroundColorClasses:t,backgroundColorStyles:a}=ec(Y(e,"bgColor")),{densityClasses:s}=bc(e),{roundedClasses:u}=Ke(e);nc({VBreadcrumbsDivider:{divider:Y(e,"divider")},VBreadcrumbsItem:{activeClass:Y(e,"activeClass"),activeColor:Y(e,"activeColor"),color:Y(e,"color"),disabled:Y(e,"disabled")}});const l=h(()=>e.items.map(r=>typeof r=="string"?{item:{title:r},raw:r}:{item:r,raw:r}));return X(()=>{const r=!!(n.prepend||e.icon);return m(e.tag,{class:["v-breadcrumbs",t.value,s.value,u.value,e.class],style:[a.value,e.style]},{default:()=>{var o;return[r&&m("div",{key:"prepend",class:"v-breadcrumbs__prepend"},[n.prepend?m(Be,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},n.prepend):m(Ue,{key:"prepend-icon",start:!0,icon:e.icon},null)]),l.value.map((i,d,f)=>{let{item:v,raw:y}=i;return m(me,null,[m(Tf,se({key:v.title,disabled:d>=f.length-1},v),{default:n.title?()=>{var b;return(b=n.title)==null?void 0:b.call(n,{item:y,index:d})}:void 0}),d<f.length-1&&m(Pf,null,{default:n.divider?()=>{var b;return(b=n.divider)==null?void 0:b.call(n,{item:y,index:d})}:void 0})])}),(o=n.default)==null?void 0:o.call(n)]}})}),{}}});const $f=W()({name:"VCardActions",props:ne(),setup(e,c){let{slots:n}=c;return nc({VBtn:{variant:"text"}}),X(()=>{var t;return m("div",{class:["v-card-actions",e.class],style:e.style},[(t=n.default)==null?void 0:t.call(n)])}),{}}}),Mf=Qc("v-card-subtitle"),Bf=Qc("v-card-title"),Rf=W()({name:"VCardItem",props:{appendAvatar:String,appendIcon:qe,prependAvatar:String,prependIcon:qe,subtitle:String,title:String,...ne(),...ac()},setup(e,c){let{slots:n}=c;return X(()=>{var o;const t=!!(e.prependAvatar||e.prependIcon),a=!!(t||n.prepend),s=!!(e.appendAvatar||e.appendIcon),u=!!(s||n.append),l=!!(e.title||n.title),r=!!(e.subtitle||n.subtitle);return m("div",{class:["v-card-item",e.class],style:e.style},[a&&m("div",{key:"prepend",class:"v-card-item__prepend"},[n.prepend?m(Be,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},n.prepend):t&&m(Hn,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),m("div",{class:"v-card-item__content"},[l&&m(Bf,{key:"title"},{default:()=>{var i;return[((i=n.title)==null?void 0:i.call(n))??e.title]}}),r&&m(Mf,{key:"subtitle"},{default:()=>{var i;return[((i=n.subtitle)==null?void 0:i.call(n))??e.subtitle]}}),(o=n.default)==null?void 0:o.call(n)]),u&&m("div",{key:"append",class:"v-card-item__append"},[n.append?m(Be,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},n.append):s&&m(Hn,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Of=Qc("v-card-text"),F3=W()({name:"VCard",directives:{Ripple:Wn},props:{appendAvatar:String,appendIcon:qe,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:qe,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...Ec(),...ne(),...ac(),...Oc(),...tc(),...fr(),...Kn(),...ca(),...ze(),...Fa(),..._e(),...Pe(),...Nc({variant:"elevated"})},setup(e,c){let{attrs:n,slots:t}=c;const{themeClasses:a}=$e(e),{borderClasses:s}=Fc(e),{colorClasses:u,colorStyles:l,variantClasses:r}=jt(e),{densityClasses:o}=bc(e),{dimensionStyles:i}=Lc(e),{elevationClasses:d}=ic(e),{loaderClasses:f}=Ds(e),{locationStyles:v}=Yn(e),{positionClasses:y}=na(e),{roundedClasses:b}=Ke(e),k=La(e,n),g=h(()=>e.link!==!1&&k.isLink.value),p=h(()=>!e.disabled&&e.link!==!1&&(e.link||k.isClickable.value));return X(()=>{const j=g.value?"a":e.tag,P=!!(t.title||e.title),w=!!(t.subtitle||e.subtitle),I=P||w,A=!!(t.append||e.appendAvatar||e.appendIcon),q=!!(t.prepend||e.prependAvatar||e.prependIcon),_=!!(t.image||e.image),x=I||q||A,V=!!(t.text||e.text);return We(m(j,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":p.value},a.value,s.value,u.value,o.value,d.value,f.value,y.value,b.value,r.value,e.class],style:[l.value,i.value,v.value,e.style],href:k.href.value,onClick:p.value&&k.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var C;return[_&&m("div",{key:"image",class:"v-card__image"},[t.image?m(Be,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):m(Xt,{key:"image-img",cover:!0,src:e.image},null)]),m(mr,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:t.loader}),x&&m(Rf,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:t.item,prepend:t.prepend,title:t.title,subtitle:t.subtitle,append:t.append}),V&&m(Of,{key:"text"},{default:()=>{var M;return[((M=t.text)==null?void 0:M.call(t))??e.text]}}),(C=t.default)==null?void 0:C.call(t),t.actions&&m($f,null,{default:t.actions}),gt(p.value,"v-card")]}}),[[Sc("ripple"),p.value&&e.ripple]])}),{}}});const N3=e=>{const{touchstartX:c,touchendX:n,touchstartY:t,touchendY:a}=e,s=.5,u=16;e.offsetX=n-c,e.offsetY=a-t,Math.abs(e.offsetY)<s*Math.abs(e.offsetX)&&(e.left&&n<c-u&&e.left(e),e.right&&n>c+u&&e.right(e)),Math.abs(e.offsetX)<s*Math.abs(e.offsetY)&&(e.up&&a<t-u&&e.up(e),e.down&&a>t+u&&e.down(e))};function D3(e,c){var t;const n=e.changedTouches[0];c.touchstartX=n.clientX,c.touchstartY=n.clientY,(t=c.start)==null||t.call(c,{originalEvent:e,...c})}function z3(e,c){var t;const n=e.changedTouches[0];c.touchendX=n.clientX,c.touchendY=n.clientY,(t=c.end)==null||t.call(c,{originalEvent:e,...c}),N3(c)}function H3(e,c){var t;const n=e.changedTouches[0];c.touchmoveX=n.clientX,c.touchmoveY=n.clientY,(t=c.move)==null||t.call(c,{originalEvent:e,...c})}function U3(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const c={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:n=>D3(n,c),touchend:n=>z3(n,c),touchmove:n=>H3(n,c)}}function W3(e,c){var l;const n=c.value,t=n!=null&&n.parent?e.parentElement:e,a=(n==null?void 0:n.options)??{passive:!0},s=(l=c.instance)==null?void 0:l.$.uid;if(!t||!s)return;const u=U3(c.value);t._touchHandlers=t._touchHandlers??Object.create(null),t._touchHandlers[s]=u,nd(u).forEach(r=>{t.addEventListener(r,u[r],a)})}function K3(e,c){var s,u;const n=(s=c.value)!=null&&s.parent?e.parentElement:e,t=(u=c.instance)==null?void 0:u.$.uid;if(!(n!=null&&n._touchHandlers)||!t)return;const a=n._touchHandlers[t];nd(a).forEach(l=>{n.removeEventListener(l,a[l])}),delete n._touchHandlers[t]}const kr={mounted:W3,unmounted:K3},Lf=Symbol.for("vuetify:v-window"),Ff=Symbol.for("vuetify:v-window-group"),Nf=he({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{default:"force"},...ne(),..._e(),...Pe()},"v-window"),Df=W()({name:"VWindow",directives:{Touch:kr},props:Nf(),emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:n}=c;const{themeClasses:t}=$e(e),{isRtl:a}=xn(),{t:s}=Rc(),u=qt(e,Ff),l=$(),r=h(()=>a.value?!e.reverse:e.reverse),o=$(!1),i=h(()=>{const P=e.direction==="vertical"?"y":"x",I=(r.value?!o.value:o.value)?"-reverse":"";return`v-window-${P}${I}-transition`}),d=$(0),f=$(void 0),v=h(()=>u.items.value.findIndex(P=>u.selected.value.includes(P.id)));ae(v,(P,w)=>{const I=u.items.value.length,A=I-1;I<=2?o.value=P<w:P===A&&w===0?o.value=!0:P===0&&w===A?o.value=!1:o.value=P<w}),Ge(Lf,{transition:i,isReversed:o,transitionCount:d,transitionHeight:f,rootRef:l});const y=h(()=>e.continuous||v.value!==0),b=h(()=>e.continuous||v.value!==u.items.value.length-1);function k(){y.value&&u.prev()}function g(){b.value&&u.next()}const p=h(()=>{const P=[],w={icon:a.value?e.nextIcon:e.prevIcon,class:`v-window__${r.value?"right":"left"}`,onClick:u.prev,ariaLabel:s("$vuetify.carousel.prev")};P.push(y.value?n.prev?n.prev({props:w}):m(gc,w,null):m("div",null,null));const I={icon:a.value?e.prevIcon:e.nextIcon,class:`v-window__${r.value?"left":"right"}`,onClick:u.next,ariaLabel:s("$vuetify.carousel.next")};return P.push(b.value?n.next?n.next({props:I}):m(gc,I,null):m("div",null,null)),P}),j=h(()=>e.touch===!1?e.touch:{...{left:()=>{r.value?k():g()},right:()=>{r.value?g():k()},start:w=>{let{originalEvent:I}=w;I.stopPropagation()}},...e.touch===!0?{}:e.touch});return X(()=>We(m(e.tag,{ref:l,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},t.value,e.class],style:e.style},{default:()=>{var P,w;return[m("div",{class:"v-window__container",style:{height:f.value}},[(P=n.default)==null?void 0:P.call(n,{group:u}),e.showArrows!==!1&&m("div",{class:"v-window__controls"},[p.value])]),(w=n.additional)==null?void 0:w.call(n,{group:u})]}}),[[Sc("touch"),j.value]])),{group:u}}}),Y3=W()({name:"VCarousel",props:{color:String,cycle:Boolean,delimiterIcon:{type:qe,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...Nf({continuous:!0,mandatory:"force",showArrows:!0})},emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:n}=c;const t=Se(e,"modelValue"),{t:a}=Rc(),s=$();let u=-1;ae(t,r),ae(()=>e.interval,r),ae(()=>e.cycle,o=>{o?r():window.clearTimeout(u)}),vc(l);function l(){!e.cycle||!s.value||(u=window.setTimeout(s.value.group.next,+e.interval>0?+e.interval:6e3))}function r(){window.clearTimeout(u),window.requestAnimationFrame(l)}return X(()=>m(Df,{ref:s,modelValue:t.value,"onUpdate:modelValue":o=>t.value=o,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:le(e.height)},e.style],continuous:!0,mandatory:"force",showArrows:e.showArrows},{default:n.default,additional:o=>{let{group:i}=o;return m(me,null,[!e.hideDelimiters&&m("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[i.items.value.length>0&&m(Be,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[i.items.value.map((d,f)=>{const v={id:`carousel-item-${d.id}`,"aria-label":a("$vuetify.carousel.ariaLabel.delimiter",f+1,i.items.value.length),class:[i.isSelected(d.id)&&"v-btn--active"],onClick:()=>i.select(d.id,!0)};return n.item?n.item({props:v,item:d}):m(gc,se(d,v),null)})]})]),e.progress&&m(dr,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(i.getItemIndex(t.value)+1)/i.items.value.length*100},null)])},prev:n.prev,next:n.next})),{}}}),zf=W()({name:"VWindowItem",directives:{Touch:kr},props:{reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...ne(),...Zt(),...Xs()},emits:{"group:selected":e=>!0},setup(e,c){let{slots:n}=c;const t=Ee(Lf),a=Jt(e,Ff),{isBooted:s}=ht();if(!t||!a)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const u=$(!1),l=h(()=>t.isReversed.value?e.reverseTransition!==!1:e.transition!==!1);function r(){!u.value||!t||(u.value=!1,t.transitionCount.value>0&&(t.transitionCount.value-=1,t.transitionCount.value===0&&(t.transitionHeight.value=void 0)))}function o(){var y;u.value||!t||(u.value=!0,t.transitionCount.value===0&&(t.transitionHeight.value=le((y=t.rootRef.value)==null?void 0:y.clientHeight)),t.transitionCount.value+=1)}function i(){r()}function d(y){u.value&&Fe(()=>{!l.value||!u.value||!t||(t.transitionHeight.value=le(y.clientHeight))})}const f=h(()=>{const y=t.isReversed.value?e.reverseTransition:e.transition;return l.value?{name:typeof y!="string"?t.transition.value:y,onBeforeEnter:o,onAfterEnter:r,onEnterCancelled:i,onBeforeLeave:o,onAfterLeave:r,onLeaveCancelled:i,onEnter:d}:!1}),{hasContent:v}=jr(e,a.isSelected);return X(()=>m(Wc,{transition:f.value,disabled:!s.value},{default:()=>{var y;return[We(m("div",{class:["v-window-item",a.selectedClass.value,e.class],style:e.style},[v.value&&((y=n.default)==null?void 0:y.call(n))]),[[fn,a.isSelected.value]])]}})),{}}}),G3=W()({name:"VCarouselItem",inheritAttrs:!1,props:{value:null,...ne()},setup(e,c){let{slots:n,attrs:t}=c;X(()=>m(zf,{class:["v-carousel-item",e.class],style:e.style,value:e.value},{default:()=>[m(Xt,t,n)]}))}});const X3=Qc("v-code");const Hf=he({color:String,...Ec(),...ne(),...Oc(),...tc(),...Kn(),...ca(),...ze(),..._e(),...Pe()},"v-sheet"),il=W()({name:"VSheet",props:{...Hf()},setup(e,c){let{slots:n}=c;const{themeClasses:t}=$e(e),{backgroundColorClasses:a,backgroundColorStyles:s}=ec(Y(e,"color")),{borderClasses:u}=Fc(e),{dimensionStyles:l}=Lc(e),{elevationClasses:r}=ic(e),{locationStyles:o}=Yn(e),{positionClasses:i}=na(e),{roundedClasses:d}=Ke(e);return X(()=>m(e.tag,{class:["v-sheet",t.value,a.value,u.value,r.value,i.value,d.value,e.class],style:[s.value,l.value,o.value,e.style]},n)),{}}});const Q3=Bc({name:"VColorPickerCanvas",props:{color:{type:Object},disabled:Boolean,dotSize:{type:[Number,String],default:10},height:{type:[Number,String],default:150},width:{type:[Number,String],default:300},...ne()},emits:{"update:color":e=>!0,"update:position":e=>!0},setup(e,c){let{emit:n}=c;const t=$(!1),a=$(!1),s=$({x:0,y:0}),u=h(()=>{const{x:g,y:p}=s.value,j=parseInt(e.dotSize,10)/2;return{width:le(e.dotSize),height:le(e.dotSize),transform:`translate(${le(g-j)}, ${le(p-j)})`}}),l=$(),r=$(parseFloat(e.width)),o=$(parseFloat(e.height)),{resizeRef:i}=on(g=>{var P;if(!((P=i.value)!=null&&P.offsetParent))return;const{width:p,height:j}=g[0].contentRect;r.value=p,o.value=j});function d(g,p,j){const{left:P,top:w,width:I,height:A}=j;s.value={x:fc(g-P,0,I),y:fc(p-w,0,A)}}function f(g){e.disabled||!l.value||d(g.clientX,g.clientY,l.value.getBoundingClientRect())}function v(g){g.preventDefault(),!e.disabled&&(t.value=!0,window.addEventListener("mousemove",y),window.addEventListener("mouseup",b),window.addEventListener("touchmove",y),window.addEventListener("touchend",b))}function y(g){if(e.disabled||!l.value)return;t.value=!0;const p=Rb(g);d(p.clientX,p.clientY,l.value.getBoundingClientRect())}function b(){window.removeEventListener("mousemove",y),window.removeEventListener("mouseup",b),window.removeEventListener("touchmove",y),window.removeEventListener("touchend",b)}ae(s,()=>{var j,P;if(a.value){a.value=!1;return}if(!l.value)return;const{x:g,y:p}=s.value;n("update:color",{h:((j=e.color)==null?void 0:j.h)??0,s:fc(g,0,r.value)/r.value,v:1-fc(p,0,o.value)/o.value,a:((P=e.color)==null?void 0:P.a)??1})});function k(){var w;if(!l.value)return;const g=l.value,p=g.getContext("2d");if(!p)return;const j=p.createLinearGradient(0,0,g.width,0);j.addColorStop(0,"hsla(0, 0%, 100%, 1)"),j.addColorStop(1,`hsla(${((w=e.color)==null?void 0:w.h)??0}, 100%, 50%, 1)`),p.fillStyle=j,p.fillRect(0,0,g.width,g.height);const P=p.createLinearGradient(0,0,0,g.height);P.addColorStop(0,"hsla(0, 0%, 100%, 0)"),P.addColorStop(1,"hsla(0, 0%, 0%, 1)"),p.fillStyle=P,p.fillRect(0,0,g.width,g.height)}return ae(()=>{var g;return(g=e.color)==null?void 0:g.h},k,{immediate:!0}),ae(()=>[r.value,o.value],(g,p)=>{k(),s.value={x:s.value.x*g[0]/p[0],y:s.value.y*g[1]/p[1]}},{flush:"post"}),ae(()=>e.color,()=>{if(t.value){t.value=!1;return}a.value=!0,s.value=e.color?{x:e.color.s*r.value,y:(1-e.color.v)*o.value}:{x:0,y:0}},{deep:!0,immediate:!0}),vc(()=>k()),X(()=>m("div",{ref:i,class:["v-color-picker-canvas",e.class],style:e.style,onClick:f,onMousedown:v,onTouchstart:v},[m("canvas",{ref:l,width:r.value,height:o.value},null),e.color&&m("div",{class:["v-color-picker-canvas__dot",{"v-color-picker-canvas__dot--disabled":e.disabled}],style:u.value},null)])),{}}});function it(e,c){return c.every(n=>e.hasOwnProperty(n))}function Uf(e){if(!e)return null;let c=null;if(typeof e=="string"){const n=bd(e);c=vd(n)}return typeof e=="object"&&(it(e,["r","g","b"])?c=Zl(e):it(e,["h","s","l"])?c=od(e):it(e,["h","s","v"])&&(c=e)),c}function Z3(e,c){if(c){const{a:n,...t}=e;return t}return e}function J3(e,c){if(c==null||typeof c=="string"){const n=yd(e);return e.a===1?n.slice(0,7):n}if(typeof c=="object"){let n;return it(c,["r","g","b"])?n=Rs(e):it(c,["h","s","l"])?n=id(e):it(c,["h","s","v"])&&(n=e),Z3(n,!it(c,["a"])&&e.a===1)}return e}const ja={h:0,s:0,v:1,a:1},ol={inputProps:{type:"number",min:0},inputs:[{label:"R",max:255,step:1,getValue:e=>Math.round(e.r),getColor:(e,c)=>({...e,r:Number(c)})},{label:"G",max:255,step:1,getValue:e=>Math.round(e.g),getColor:(e,c)=>({...e,g:Number(c)})},{label:"B",max:255,step:1,getValue:e=>Math.round(e.b),getColor:(e,c)=>({...e,b:Number(c)})},{label:"A",max:1,step:.01,getValue:e=>{let{a:c}=e;return c?Math.round(c*100)/100:1},getColor:(e,c)=>({...e,a:Number(c)})}],to:Rs,from:Zl};var Co;const e4={...ol,inputs:(Co=ol.inputs)==null?void 0:Co.slice(0,3)},dl={inputProps:{type:"number",min:0},inputs:[{label:"H",max:360,step:1,getValue:e=>Math.round(e.h),getColor:(e,c)=>({...e,h:Number(c)})},{label:"S",max:1,step:.01,getValue:e=>Math.round(e.s*100)/100,getColor:(e,c)=>({...e,s:Number(c)})},{label:"L",max:1,step:.01,getValue:e=>Math.round(e.l*100)/100,getColor:(e,c)=>({...e,l:Number(c)})},{label:"A",max:1,step:.01,getValue:e=>{let{a:c}=e;return c?Math.round(c*100)/100:1},getColor:(e,c)=>({...e,a:Number(c)})}],to:id,from:od},c4={...dl,inputs:dl.inputs.slice(0,3)},Wf={inputProps:{type:"text"},inputs:[{label:"HEXA",getValue:e=>e,getColor:(e,c)=>c}],to:yd,from:vd},n4={...Wf,inputs:[{label:"HEX",getValue:e=>e.slice(0,7),getColor:(e,c)=>c}]},ot={rgb:e4,rgba:ol,hsl:c4,hsla:dl,hex:n4,hexa:Wf},t4=e=>{let{label:c,...n}=e;return m("div",{class:"v-color-picker-edit__input"},[m("input",n,null),m("span",null,[c])])},a4=Bc({name:"VColorPickerEdit",props:{color:Object,disabled:Boolean,mode:{type:String,default:"rgba",validator:e=>Object.keys(ot).includes(e)},modes:{type:Array,default:()=>Object.keys(ot),validator:e=>Array.isArray(e)&&e.every(c=>Object.keys(ot).includes(c))},...ne()},emits:{"update:color":e=>!0,"update:mode":e=>!0},setup(e,c){let{emit:n}=c;const t=h(()=>e.modes.map(s=>({...ot[s],name:s}))),a=h(()=>{var l;const s=t.value.find(r=>r.name===e.mode);if(!s)return[];const u=e.color?s.to(e.color):null;return(l=s.inputs)==null?void 0:l.map(r=>{let{getValue:o,getColor:i,...d}=r;return{...s.inputProps,...d,disabled:e.disabled,value:u&&o(u),onChange:f=>{const v=f.target;v&&n("update:color",s.from(i(u??ja,v.value)))}}})});return X(()=>{var s;return m("div",{class:["v-color-picker-edit",e.class],style:e.style},[(s=a.value)==null?void 0:s.map(u=>m(t4,u,null)),t.value.length>1&&m(gc,{icon:"$unfold",size:"x-small",variant:"plain",onClick:()=>{const u=t.value.findIndex(l=>l.name===e.mode);n("update:mode",t.value[(u+1)%t.value.length].name)}},null)])}),{}}});const pr=Symbol.for("vuetify:v-slider");function fl(e,c,n){const t=n==="vertical",a=c.getBoundingClientRect(),s="touches"in e?e.touches[0]:e;return t?s.clientY-(a.top+a.height/2):s.clientX-(a.left+a.width/2)}function s4(e,c){return"touches"in e&&e.touches.length?e.touches[0][c]:"changedTouches"in e&&e.changedTouches.length?e.changedTouches[0][c]:e[c]}const Kf=he({disabled:Boolean,error:Boolean,readonly:Boolean,max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:0},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:e=>typeof e=="boolean"||e==="always"},thumbSize:{type:[Number,String],default:20},showTicks:{type:[Boolean,String],default:!1,validator:e=>typeof e=="boolean"||e==="always"},ticks:{type:[Array,Object]},tickSize:{type:[Number,String],default:2},color:String,trackColor:String,trackFillColor:String,trackSize:{type:[Number,String],default:4},direction:{type:String,default:"horizontal",validator:e=>["vertical","horizontal"].includes(e)},reverse:Boolean,...ze(),...tc({elevation:2})},"slider"),Yf=e=>{const c=h(()=>parseFloat(e.min)),n=h(()=>parseFloat(e.max)),t=h(()=>+e.step>0?parseFloat(e.step):0),a=h(()=>Math.max($i(t.value),$i(c.value)));function s(u){if(t.value<=0)return u;const l=fc(u,c.value,n.value),r=c.value%t.value,o=Math.round((l-r)/t.value)*t.value+r;return parseFloat(Math.min(o,n.value).toFixed(a.value))}return{min:c,max:n,step:t,decimals:a,roundValue:s}},Gf=e=>{let{props:c,steps:n,onSliderStart:t,onSliderMove:a,onSliderEnd:s,getActiveThumb:u}=e;const{isRtl:l}=xn(),r=Y(c,"reverse"),o=h(()=>{let T=l.value?"rtl":"ltr";return c.reverse&&(T=T==="rtl"?"ltr":"rtl"),T}),{min:i,max:d,step:f,decimals:v,roundValue:y}=n,b=h(()=>parseInt(c.thumbSize,10)),k=h(()=>parseInt(c.tickSize,10)),g=h(()=>parseInt(c.trackSize,10)),p=h(()=>(d.value-i.value)/f.value),j=Y(c,"disabled"),P=h(()=>c.direction==="vertical"),w=h(()=>c.error||c.disabled?void 0:c.thumbColor??c.color),I=h(()=>c.error||c.disabled?void 0:c.trackColor??c.color),A=h(()=>c.error||c.disabled?void 0:c.trackFillColor??c.color),q=$(!1),_=$(0),x=$(),V=$();function C(T){var U;const O=c.direction==="vertical",re=O?"top":"left",ie=O?"height":"width",Ve=O?"clientY":"clientX",{[re]:ve,[ie]:S}=(U=x.value)==null?void 0:U.$el.getBoundingClientRect(),E=s4(T,Ve);let L=Math.min(Math.max((E-ve-_.value)/S,0),1)||0;return(O||o.value==="rtl")&&(L=1-L),y(i.value+L*(d.value-i.value))}const M=T=>{s({value:C(T)}),q.value=!1,_.value=0},N=T=>{V.value=u(T),V.value&&(V.value.focus(),q.value=!0,V.value.contains(T.target)?_.value=fl(T,V.value,c.direction):(_.value=0,a({value:C(T)})),t({value:C(T)}))},Q={passive:!0,capture:!0};function F(T){a({value:C(T)})}function H(T){T.stopPropagation(),T.preventDefault(),M(T),window.removeEventListener("mousemove",F,Q),window.removeEventListener("mouseup",H)}function D(T){var O;M(T),window.removeEventListener("touchmove",F,Q),(O=T.target)==null||O.removeEventListener("touchend",D)}function J(T){var O;N(T),window.addEventListener("touchmove",F,Q),(O=T.target)==null||O.addEventListener("touchend",D,{passive:!1})}function R(T){T.preventDefault(),N(T),window.addEventListener("mousemove",F,Q),window.addEventListener("mouseup",H,{passive:!1})}const K=T=>{const O=(T-i.value)/(d.value-i.value)*100;return fc(isNaN(O)?0:O,0,100)},z=Y(c,"showTicks"),fe=h(()=>z.value?c.ticks?Array.isArray(c.ticks)?c.ticks.map(T=>({value:T,position:K(T),label:T.toString()})):Object.keys(c.ticks).map(T=>({value:parseFloat(T),position:K(parseFloat(T)),label:c.ticks[T]})):p.value!==1/0?un(p.value+1).map(T=>{const O=i.value+T*f.value;return{value:O,position:K(O)}}):[]:[]),oe=h(()=>fe.value.some(T=>{let{label:O}=T;return!!O})),B={activeThumbRef:V,color:Y(c,"color"),decimals:v,disabled:j,direction:Y(c,"direction"),elevation:Y(c,"elevation"),hasLabels:oe,horizontalDirection:o,isReversed:r,min:i,max:d,mousePressed:q,numTicks:p,onSliderMousedown:R,onSliderTouchstart:J,parsedTicks:fe,parseMouseMove:C,position:K,readonly:Y(c,"readonly"),rounded:Y(c,"rounded"),roundValue:y,showTicks:z,startOffset:_,step:f,thumbSize:b,thumbColor:w,thumbLabel:Y(c,"thumbLabel"),ticks:Y(c,"ticks"),tickSize:k,trackColor:I,trackContainerRef:x,trackFillColor:A,trackSize:g,vertical:P};return Ge(pr,B),B},ml=W()({name:"VSliderThumb",directives:{Ripple:Wn},props:{focused:Boolean,max:{type:Number,required:!0},min:{type:Number,required:!0},modelValue:{type:Number,required:!0},position:{type:Number,required:!0},ripple:{type:Boolean,default:!0},...ne()},emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:n,emit:t}=c;const a=Ee(pr);if(!a)throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");const{thumbColor:s,step:u,vertical:l,disabled:r,thumbSize:o,thumbLabel:i,direction:d,readonly:f,elevation:v,isReversed:y,horizontalDirection:b,mousePressed:k,decimals:g}=a,{textColorClasses:p,textColorStyles:j}=mc(s),{pageup:P,pagedown:w,end:I,home:A,left:q,right:_,down:x,up:V}=Hu,C=[P,w,I,A,q,_,x,V],M=h(()=>u.value?[1,2,3]:[1,5,10]);function N(F,H){if(!C.includes(F.key))return;F.preventDefault();const D=u.value||.1,J=(e.max-e.min)/D;if([q,_,x,V].includes(F.key)){const K=(b.value==="rtl"?[q,V]:[_,V]).includes(F.key)?1:-1,z=F.shiftKey?2:F.ctrlKey?1:0;H=H+K*D*M.value[z]}else if(F.key===A)H=e.min;else if(F.key===I)H=e.max;else{const R=F.key===w?1:-1;H=H-R*D*(J>100?J/10:10)}return Math.max(e.min,Math.min(e.max,H))}function Q(F){const H=N(F,e.modelValue);H!=null&&t("update:modelValue",H)}return X(()=>{const F=le(l.value||y.value?100-e.position:e.position,"%"),{elevationClasses:H}=ic(h(()=>r.value?void 0:v.value));return m("div",{class:["v-slider-thumb",{"v-slider-thumb--focused":e.focused,"v-slider-thumb--pressed":e.focused&&k.value},e.class],style:[{"--v-slider-thumb-position":F,"--v-slider-thumb-size":le(o.value)},e.style],role:"slider",tabindex:r.value?-1:0,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.modelValue,"aria-readonly":f.value,"aria-orientation":d.value,onKeydown:f.value?void 0:Q},[m("div",{class:["v-slider-thumb__surface",p.value,H.value],style:{...j.value}},null),We(m("div",{class:["v-slider-thumb__ripple",p.value],style:j.value},null),[[Sc("ripple"),e.ripple,null,{circle:!0,center:!0}]]),m(Td,{origin:"bottom center"},{default:()=>{var D;return[We(m("div",{class:"v-slider-thumb__label-container"},[m("div",{class:["v-slider-thumb__label"]},[m("div",null,[((D=n["thumb-label"])==null?void 0:D.call(n,{modelValue:e.modelValue}))??e.modelValue.toFixed(u.value?g.value:1)])])]),[[fn,i.value&&e.focused||i.value==="always"]])]}})])}),{}}});const Xf=W()({name:"VSliderTrack",props:{start:{type:Number,required:!0},stop:{type:Number,required:!0},...ne()},emits:{},setup(e,c){let{slots:n}=c;const t=Ee(pr);if(!t)throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");const{color:a,horizontalDirection:s,parsedTicks:u,rounded:l,showTicks:r,tickSize:o,trackColor:i,trackFillColor:d,trackSize:f,vertical:v,min:y,max:b}=t,{roundedClasses:k}=Ke(l),{backgroundColorClasses:g,backgroundColorStyles:p}=ec(d),{backgroundColorClasses:j,backgroundColorStyles:P}=ec(i),w=h(()=>`inset-${v.value?"block-end":"inline-start"}`),I=h(()=>v.value?"height":"width"),A=h(()=>({[w.value]:"0%",[I.value]:"100%"})),q=h(()=>e.stop-e.start),_=h(()=>({[w.value]:le(e.start,"%"),[I.value]:le(q.value,"%")})),x=h(()=>r.value?(v.value?u.value.slice().reverse():u.value).map((C,M)=>{var F;const N=v.value?"bottom":"margin-inline-start",Q=C.value!==y.value&&C.value!==b.value?le(C.position,"%"):void 0;return m("div",{key:C.value,class:["v-slider-track__tick",{"v-slider-track__tick--filled":C.position>=e.start&&C.position<=e.stop,"v-slider-track__tick--first":C.value===y.value,"v-slider-track__tick--last":C.value===b.value}],style:{[N]:Q}},[(C.label||n["tick-label"])&&m("div",{class:"v-slider-track__tick-label"},[((F=n["tick-label"])==null?void 0:F.call(n,{tick:C,index:M}))??C.label])])}):[]);return X(()=>m("div",{class:["v-slider-track",k.value,e.class],style:[{"--v-slider-track-size":le(f.value),"--v-slider-tick-size":le(o.value),direction:v.value?void 0:s.value},e.style]},[m("div",{class:["v-slider-track__background",j.value,{"v-slider-track__background--opacity":!!a.value||!d.value}],style:{...A.value,...P.value}},null),m("div",{class:["v-slider-track__fill",g.value],style:{..._.value,...p.value}},null),r.value&&m("div",{class:["v-slider-track__ticks",{"v-slider-track__ticks--always-show":r.value==="always"}]},[x.value])])),{}}}),vl=W()({name:"VSlider",props:{...zs(),...Kf(),...An(),modelValue:{type:[Number,String],default:0}},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,start:e=>!0,end:e=>!0},setup(e,c){let{slots:n,emit:t}=c;const a=$(),s=Yf(e),u=Se(e,"modelValue",void 0,w=>{const I=typeof w=="string"?parseFloat(w):w??s.min.value;return s.roundValue(I)}),{min:l,max:r,mousePressed:o,roundValue:i,onSliderMousedown:d,onSliderTouchstart:f,trackContainerRef:v,position:y,hasLabels:b,readonly:k}=Gf({props:e,steps:s,onSliderStart:()=>{t("start",u.value)},onSliderEnd:w=>{let{value:I}=w;const A=i(I);u.value=A,t("end",A)},onSliderMove:w=>{let{value:I}=w;return u.value=i(I)},getActiveThumb:()=>{var w;return(w=a.value)==null?void 0:w.$el}}),{isFocused:g,focus:p,blur:j}=Gn(e),P=h(()=>y(u.value));return X(()=>{const[w,I]=lc.filterProps(e),A=!!(e.label||n.label||n.prepend);return m(lc,se({class:["v-slider",{"v-slider--has-labels":!!n["tick-label"]||b.value,"v-slider--focused":g.value,"v-slider--pressed":o.value,"v-slider--disabled":e.disabled},e.class],style:e.style},w,{focused:g.value}),{...n,prepend:A?q=>{var _,x;return m(me,null,[((_=n.label)==null?void 0:_.call(n,q))??e.label?m(ta,{id:q.id.value,class:"v-slider__label",text:e.label},null):void 0,(x=n.prepend)==null?void 0:x.call(n,q)])}:void 0,default:q=>{let{id:_,messagesId:x}=q;return m("div",{class:"v-slider__container",onMousedown:k.value?void 0:d,onTouchstartPassive:k.value?void 0:f},[m("input",{id:_.value,name:e.name||_.value,disabled:e.disabled,readonly:e.readonly,tabindex:"-1",value:u.value},null),m(Xf,{ref:v,start:0,stop:P.value},{"tick-label":n["tick-label"]}),m(ml,{ref:a,"aria-describedby":x.value,focused:g.value,min:l.value,max:r.value,modelValue:u.value,"onUpdate:modelValue":V=>u.value=V,position:P.value,elevation:e.elevation,onFocus:p,onBlur:j},{"thumb-label":n["thumb-label"]})])}})}),{}}}),u4=Bc({name:"VColorPickerPreview",props:{color:{type:Object},disabled:Boolean,hideAlpha:Boolean,...ne()},emits:{"update:color":e=>!0},setup(e,c){let{emit:n}=c;return X(()=>{var t,a;return m("div",{class:["v-color-picker-preview",{"v-color-picker-preview--hide-alpha":e.hideAlpha},e.class],style:e.style},[m("div",{class:"v-color-picker-preview__dot"},[m("div",{style:{background:dd(e.color??ja)}},null)]),m("div",{class:"v-color-picker-preview__sliders"},[m(vl,{class:"v-color-picker-preview__track v-color-picker-preview__hue",modelValue:(t=e.color)==null?void 0:t.h,"onUpdate:modelValue":s=>n("update:color",{...e.color??ja,h:s}),step:0,min:0,max:360,disabled:e.disabled,thumbSize:14,trackSize:8,trackFillColor:"white",hideDetails:!0},null),!e.hideAlpha&&m(vl,{class:"v-color-picker-preview__track v-color-picker-preview__alpha",modelValue:((a=e.color)==null?void 0:a.a)??1,"onUpdate:modelValue":s=>n("update:color",{...e.color??ja,a:s}),step:1/256,min:0,max:1,disabled:e.disabled,thumbSize:14,trackSize:8,trackFillColor:"white",hideDetails:!0},null)])])}),{}}});const l4=Object.freeze({base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"}),r4=Object.freeze({base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"}),i4=Object.freeze({base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"}),o4=Object.freeze({base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"}),d4=Object.freeze({base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"}),f4=Object.freeze({base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"}),m4=Object.freeze({base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"}),v4=Object.freeze({base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"}),y4=Object.freeze({base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"}),b4=Object.freeze({base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"}),h4=Object.freeze({base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"}),g4=Object.freeze({base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"}),j4=Object.freeze({base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"}),q4=Object.freeze({base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"}),k4=Object.freeze({base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"}),p4=Object.freeze({base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"}),S4=Object.freeze({base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"}),_4=Object.freeze({base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"}),C4=Object.freeze({base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"}),w4=Object.freeze({black:"#000000",white:"#ffffff",transparent:"#ffffff00"}),x4=Object.freeze({red:l4,pink:r4,purple:i4,deepPurple:o4,indigo:d4,blue:f4,lightBlue:m4,cyan:v4,teal:y4,green:b4,lightGreen:h4,lime:g4,yellow:j4,amber:q4,orange:k4,deepOrange:p4,brown:S4,blueGrey:_4,grey:C4,shades:w4});function V4(e){return Object.keys(e).map(c=>{const n=e[c];return n.base?[n.base,n.darken4,n.darken3,n.darken2,n.darken1,n.lighten1,n.lighten2,n.lighten3,n.lighten4,n.lighten5]:[n.black,n.white,n.transparent]})}const I4=Bc({name:"VColorPickerSwatches",props:{swatches:{type:Array,default:()=>V4(x4)},disabled:Boolean,color:Object,maxHeight:[Number,String],...ne()},emits:{"update:color":e=>!0},setup(e,c){let{emit:n}=c;return X(()=>m("div",{class:["v-color-picker-swatches",e.class],style:[{maxHeight:le(e.maxHeight)},e.style]},[m("div",null,[e.swatches.map(t=>m("div",{class:"v-color-picker-swatches__swatch"},[t.map(a=>{const s=Uf(a);return m("div",{class:"v-color-picker-swatches__color",onClick:()=>s&&n("update:color",s)},[m("div",{style:{background:a}},[e.color&&vt(e.color,s)?m(Ue,{size:"x-small",icon:"$success",color:Jb(a,"#FFFFFF")>2?"white":"black"},null):void 0])])})]))])])),{}}}),A4=Bc({name:"VColorPicker",props:{canvasHeight:{type:[String,Number],default:150},disabled:Boolean,dotSize:{type:[Number,String],default:10},hideCanvas:Boolean,hideSliders:Boolean,hideInputs:Boolean,mode:{type:String,default:"rgba",validator:e=>Object.keys(ot).includes(e)},modes:{type:Array,default:()=>Object.keys(ot),validator:e=>Array.isArray(e)&&e.every(c=>Object.keys(ot).includes(c))},showSwatches:Boolean,swatches:Array,swatchesMaxHeight:{type:[Number,String],default:150},modelValue:{type:[Object,String]},...mn(Hf({width:300}),["height","location","minHeight","maxHeight","minWidth","maxWidth"])},emits:{"update:modelValue":e=>!0,"update:mode":e=>!0},setup(e){const c=Se(e,"mode"),n=$(null),t=Se(e,"modelValue",void 0,s=>{let u=Uf(s);return u?(n.value&&(u={...u,h:n.value.h},n.value=null),u):null},s=>s?J3(s,e.modelValue):null),a=s=>{t.value=s,n.value=s};return vc(()=>{e.modes.includes(c.value)||(c.value=e.modes[0])}),nc({VSlider:{color:void 0,trackColor:void 0,trackFillColor:void 0}}),X(()=>{const[s]=il.filterProps(e);return m(il,se({rounded:e.rounded,elevation:e.elevation,theme:e.theme,class:["v-color-picker",e.class],style:[{"--v-color-picker-color-hsv":dd({...t.value??ja,a:1})},e.style]},s,{maxWidth:e.width}),{default:()=>[!e.hideCanvas&&m(Q3,{key:"canvas",color:t.value,"onUpdate:color":a,disabled:e.disabled,dotSize:e.dotSize,width:e.width,height:e.canvasHeight},null),(!e.hideSliders||!e.hideInputs)&&m("div",{key:"controls",class:"v-color-picker__controls"},[!e.hideSliders&&m(u4,{key:"preview",color:t.value,"onUpdate:color":a,hideAlpha:!c.value.endsWith("a"),disabled:e.disabled},null),!e.hideInputs&&m(a4,{key:"edit",modes:e.modes,mode:c.value,"onUpdate:mode":u=>c.value=u,color:t.value,"onUpdate:color":a,disabled:e.disabled},null)]),e.showSwatches&&m(I4,{key:"swatches",color:t.value,"onUpdate:color":a,maxHeight:e.swatchesMaxHeight,swatches:e.swatches,disabled:e.disabled},null)]})}),{}}});function E4(e,c,n){if(c==null)return e;if(Array.isArray(c))throw new Error("Multiple matches is not implemented");return typeof c=="number"&&~c?m(me,null,[m("span",{class:"v-combobox__unmask"},[e.substr(0,c)]),m("span",{class:"v-combobox__mask"},[e.substr(c,n)]),m("span",{class:"v-combobox__unmask"},[e.substr(c+n)])]):e}const P4=W()({name:"VCombobox",props:{delimiters:Array,...Vf({filterKeys:["title"]}),...qr({hideNoData:!0,returnObject:!0}),...mn(Ks({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...Vn({transition:!1})},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:search":e=>!0,"update:menu":e=>!0},setup(e,c){var K;let{emit:n,slots:t}=c;const{t:a}=Rc(),s=$(),u=$(!1),l=$(!0),r=$(),o=Se(e,"menu"),i=h({get:()=>o.value,set:z=>{var fe;o.value&&!z&&((fe=r.value)!=null&&fe.ΨopenChildren)||(o.value=z)}}),d=$(-1);let f=!1;const v=h(()=>{var z;return(z=s.value)==null?void 0:z.color}),{items:y,transformIn:b,transformOut:k}=gr(e),{textColorClasses:g,textColorStyles:p}=mc(v),j=Se(e,"modelValue",[],z=>b($c(z)),z=>{const fe=k(z);return e.multiple?fe:fe[0]??null}),P=Us(),w=$(e.multiple?"":((K=j.value[0])==null?void 0:K.title)??""),I=h({get:()=>w.value,set:z=>{var fe;if(w.value=z,e.multiple||(j.value=[It(e,z)]),z&&e.multiple&&((fe=e.delimiters)!=null&&fe.length)){const oe=z.split(new RegExp(`(?:${e.delimiters.join("|")})+`));oe.length>1&&(oe.forEach(B=>{B=B.trim(),B&&D(It(e,B))}),w.value="")}z||(d.value=-1),l.value=!z}});ae(w,z=>{f?Fe(()=>f=!1):u.value&&!i.value&&(i.value=!0),n("update:search",z)}),ae(j,z=>{var fe;e.multiple||(w.value=((fe=z[0])==null?void 0:fe.title)??"")});const{filteredItems:A,getMatches:q}=If(e,y,h(()=>l.value?void 0:I.value)),_=h(()=>j.value.map(z=>y.value.find(fe=>e.valueComparator(fe.value,z.value))||z)),x=h(()=>e.hideSelected?A.value.filter(z=>!_.value.some(fe=>fe.value===z.value)):A.value),V=h(()=>_.value.map(z=>z.props.value)),C=h(()=>_.value[d.value]),M=$();function N(z){f=!0,e.openOnClear&&(i.value=!0)}function Q(){e.hideNoData&&!y.value.length||e.readonly||P!=null&&P.isReadonly.value||(i.value=!0)}function F(z){var B,T;if(e.readonly||P!=null&&P.isReadonly.value)return;const fe=s.value.selectionStart,oe=V.value.length;if((d.value>-1||["Enter","ArrowDown","ArrowUp"].includes(z.key))&&z.preventDefault(),["Enter","ArrowDown"].includes(z.key)&&(i.value=!0),["Escape"].includes(z.key)&&(i.value=!1),["Enter","Escape","Tab"].includes(z.key)&&(l.value=!0),z.key==="ArrowDown"?(B=M.value)==null||B.focus("next"):z.key==="ArrowUp"&&((T=M.value)==null||T.focus("prev")),!!e.multiple){if(["Backspace","Delete"].includes(z.key)){if(d.value<0){z.key==="Backspace"&&!I.value&&(d.value=oe-1);return}const O=d.value;C.value&&D(C.value),d.value=O>=oe-1?oe-2:O}if(z.key==="ArrowLeft"){if(d.value<0&&fe>0)return;const O=d.value>-1?d.value-1:oe-1;_.value[O]?d.value=O:(d.value=-1,s.value.setSelectionRange(I.value.length,I.value.length))}if(z.key==="ArrowRight"){if(d.value<0)return;const O=d.value+1;_.value[O]?d.value=O:(d.value=-1,s.value.setSelectionRange(0,0))}z.key==="Enter"&&I.value&&(D(It(e,I.value)),I.value="")}}function H(){u.value&&(l.value=!0)}function D(z){if(e.multiple){const fe=V.value.findIndex(oe=>e.valueComparator(oe,z.value));if(fe===-1)j.value=[...j.value,z];else{const oe=[...j.value];oe.splice(fe,1),j.value=oe}I.value=""}else j.value=[z],w.value=z.title,Fe(()=>{i.value=!1,l.value=!0})}function J(z){u.value=!0}function R(z){var fe;z.relatedTarget==null&&((fe=s.value)==null||fe.focus())}return ae(A,z=>{!z.length&&e.hideNoData&&(i.value=!1)}),ae(u,z=>{if(z)d.value=-1;else{if(i.value=!1,!e.multiple||!I.value)return;j.value=[...j.value,It(e,I.value)],I.value=""}}),X(()=>{const z=!!(e.chips||t.chip),fe=!!(!e.hideNoData||x.value.length||t.prepend||t.append||t["no-data"]),oe=j.value.length>0,[B]=mt.filterProps(e);return m(mt,se({ref:s},B,{modelValue:I.value,"onUpdate:modelValue":[T=>I.value=T,T=>{T==null&&(j.value=[])}],focused:u.value,"onUpdate:focused":T=>u.value=T,validationValue:j.externalValue,dirty:oe,class:["v-combobox",{"v-combobox--active-menu":i.value,"v-combobox--chips":!!e.chips,"v-combobox--selecting-index":d.value>-1,[`v-combobox--${e.multiple?"multiple":"single"}`]:!0},e.class],style:e.style,appendInnerIcon:e.items.length?e.menuIcon:void 0,readonly:e.readonly,placeholder:oe?void 0:e.placeholder,"onClick:clear":N,"onMousedown:control":Q,onKeydown:F}),{...t,default:()=>m(me,null,[m(Qs,se({ref:r,modelValue:i.value,"onUpdate:modelValue":T=>i.value=T,activator:"parent",contentClass:"v-combobox__content",eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:H},e.menuProps),{default:()=>[fe&&m(Gs,{ref:M,selected:V.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:T=>T.preventDefault(),onFocusin:J,onFocusout:R},{default:()=>{var T,O,re;return[!x.value.length&&!e.hideNoData&&(((T=t["no-data"])==null?void 0:T.call(t))??m(pn,{title:a(e.noDataText)},null)),(O=t["prepend-item"])==null?void 0:O.call(t),x.value.map(ie=>{var Ve;return((Ve=t.item)==null?void 0:Ve.call(t,{item:ie,props:se(ie.props,{onClick:()=>D(ie)})}))??m(pn,se({key:ie.value},ie.props,{onClick:()=>D(ie)}),{prepend:ve=>{let{isSelected:S}=ve;return m(me,null,[e.multiple&&!e.hideSelected?m(Nt,{modelValue:S,ripple:!1,tabindex:"-1"},null):void 0,ie.props.prependIcon&&m(Ue,{icon:ie.props.prependIcon},null)])},title:()=>{var ve,S;return l.value?ie.title:E4(ie.title,(ve=q(ie))==null?void 0:ve.title,((S=I.value)==null?void 0:S.length)??0)}})}),(re=t["append-item"])==null?void 0:re.call(t)]}})]}),_.value.map((T,O)=>{var Ve;function re(ve){ve.stopPropagation(),ve.preventDefault(),D(T)}const ie={"onClick:close":re,onMousedown(ve){ve.preventDefault(),ve.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0};return m("div",{key:T.value,class:["v-combobox__selection",O===d.value&&["v-combobox__selection--selected",g.value]],style:O===d.value?p.value:{}},[z?t.chip?m(Be,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:T.title}}},{default:()=>{var ve;return[(ve=t.chip)==null?void 0:ve.call(t,{item:T,index:O,props:ie})]}}):m(Da,se({key:"chip",closable:e.closableChips,size:"small",text:T.title},ie),null):((Ve=t.selection)==null?void 0:Ve.call(t,{item:T,index:O}))??m("span",{class:"v-combobox__selection-text"},[T.title,e.multiple&&O<_.value.length-1&&m("span",{class:"v-combobox__selection-comma"},[Oe(",")])])])})])})}),Zc({isFocused:u,isPristine:l,menu:i,search:I,selectionIndex:d,filteredItems:A,select:D},s)}});const T4=W()({name:"VDialog",props:{fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...Ha({origin:"center center",scrollStrategy:"block",transition:{component:Fs},zIndex:2400})},emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:n}=c;const t=Se(e,"modelValue"),{scopeId:a}=za(),s=$();function u(r){var d,f;const o=r.relatedTarget,i=r.target;if(o!==i&&((d=s.value)!=null&&d.contentEl)&&((f=s.value)!=null&&f.globalTop)&&![document,s.value.contentEl].includes(i)&&!s.value.contentEl.contains(i)){const v=Gl(s.value.contentEl);if(!v.length)return;const y=v[0],b=v[v.length-1];o===y?b.focus():y.focus()}}Je&&ae(()=>t.value&&e.retainFocus,r=>{r?document.addEventListener("focusin",u):document.removeEventListener("focusin",u)},{immediate:!0}),ae(t,async r=>{var o,i;await Fe(),r?(o=s.value.contentEl)==null||o.focus({preventScroll:!0}):(i=s.value.activatorEl)==null||i.focus({preventScroll:!0})});const l=h(()=>se({"aria-haspopup":"dialog","aria-expanded":String(t.value)},e.activatorProps));return X(()=>{const[r]=Sn.filterProps(e);return m(Sn,se({ref:s,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},r,{modelValue:t.value,"onUpdate:modelValue":o=>t.value=o,"aria-modal":"true",activatorProps:l.value,role:"dialog"},a),{activator:n.activator,default:function(){for(var o=arguments.length,i=new Array(o),d=0;d<o;d++)i[d]=arguments[d];return m(Be,{root:!0},{default:()=>{var f;return[(f=n.default)==null?void 0:f.call(n,...i)]}})}})}),Zc({},s)}});const Ma=Symbol.for("vuetify:v-expansion-panel"),$4=["default","accordion","inset","popout"],M4=W()({name:"VExpansionPanels",props:{color:String,variant:{type:String,default:"default",validator:e=>$4.includes(e)},readonly:Boolean,...ne(),...Qt(),..._e(),...Pe()},emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:n}=c;qt(e,Ma);const{themeClasses:t}=$e(e),a=h(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return nc({VExpansionPanel:{color:Y(e,"color")},VExpansionPanelTitle:{readonly:Y(e,"readonly")}}),X(()=>m(e.tag,{class:["v-expansion-panels",t.value,a.value,e.class],style:e.style},n)),{}}}),Qf=he({color:String,expandIcon:{type:qe,default:"$expand"},collapseIcon:{type:qe,default:"$collapse"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean},"v-expansion-panel-title"),Zf=W()({name:"VExpansionPanelTitle",directives:{Ripple:Wn},props:{...ne(),...Qf()},setup(e,c){let{slots:n}=c;const t=Ee(Ma);if(!t)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:a,backgroundColorStyles:s}=ec(e,"color"),u=h(()=>({collapseIcon:e.collapseIcon,disabled:t.disabled.value,expanded:t.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return X(()=>{var l;return We(m("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":t.isSelected.value},a.value,e.class],style:[s.value,e.style],type:"button",tabindex:t.disabled.value?-1:void 0,disabled:t.disabled.value,"aria-expanded":t.isSelected.value,onClick:e.readonly?void 0:t.toggle},[m("span",{class:"v-expansion-panel-title__overlay"},null),(l=n.default)==null?void 0:l.call(n,u.value),!e.hideActions&&m("span",{class:"v-expansion-panel-title__icon"},[n.actions?n.actions(u.value):m(Ue,{icon:t.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[Sc("ripple"),e.ripple]])}),{}}}),Jf=W()({name:"VExpansionPanelText",props:{...ne(),...Xs()},setup(e,c){let{slots:n}=c;const t=Ee(Ma);if(!t)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:a,onAfterLeave:s}=jr(e,t.isSelected);return X(()=>m(Ns,{onAfterLeave:s},{default:()=>{var u;return[We(m("div",{class:["v-expansion-panel-text",e.class],style:e.style},[n.default&&a.value&&m("div",{class:"v-expansion-panel-text__wrapper"},[(u=n.default)==null?void 0:u.call(n)])]),[[fn,t.isSelected.value]])]}})),{}}}),B4=W()({name:"VExpansionPanel",props:{title:String,text:String,bgColor:String,...ne(),...tc(),...Zt(),...Xs(),...ze(),..._e(),...Qf()},emits:{"group:selected":e=>!0},setup(e,c){let{slots:n}=c;const t=Jt(e,Ma),{backgroundColorClasses:a,backgroundColorStyles:s}=ec(e,"bgColor"),{elevationClasses:u}=ic(e),{roundedClasses:l}=Ke(e),r=h(()=>(t==null?void 0:t.disabled.value)||e.disabled),o=h(()=>t.group.items.value.reduce((f,v,y)=>(t.group.selected.value.includes(v.id)&&f.push(y),f),[])),i=h(()=>{const f=t.group.items.value.findIndex(v=>v.id===t.id);return!t.isSelected.value&&o.value.some(v=>v-f===1)}),d=h(()=>{const f=t.group.items.value.findIndex(v=>v.id===t.id);return!t.isSelected.value&&o.value.some(v=>v-f===-1)});return Ge(Ma,t),X(()=>{const f=!!(n.text||e.text),v=!!(n.title||e.title);return m(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":t.isSelected.value,"v-expansion-panel--before-active":i.value,"v-expansion-panel--after-active":d.value,"v-expansion-panel--disabled":r.value},l.value,a.value,e.class],style:[s.value,e.style],"aria-expanded":t.isSelected.value},{default:()=>{var y;return[m("div",{class:["v-expansion-panel__shadow",...u.value]},null),v&&m(Zf,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[n.title?n.title():e.title]}),f&&m(Jf,{key:"text",eager:e.eager},{default:()=>[n.text?n.text():e.text]}),(y=n.default)==null?void 0:y.call(n)]}})}),{}}});const R4=W()({name:"VFileInput",inheritAttrs:!1,props:{chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(e)},...An({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>$c(e).every(c=>c!=null&&typeof c=="object")},...Hs({clearable:!0})},emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,c){let{attrs:n,emit:t,slots:a}=c;const{t:s}=Rc(),u=Se(e,"modelValue"),{isFocused:l,focus:r,blur:o}=Gn(e),i=h(()=>typeof e.showSize!="boolean"?e.showSize:void 0),d=h(()=>(u.value??[]).reduce((q,_)=>{let{size:x=0}=_;return q+x},0)),f=h(()=>Bi(d.value,i.value)),v=h(()=>(u.value??[]).map(q=>{const{name:_="",size:x=0}=q;return e.showSize?`${_} (${Bi(x,i.value)})`:_})),y=h(()=>{var _;const q=((_=u.value)==null?void 0:_.length)??0;return e.showSize?s(e.counterSizeString,q,f.value):s(e.counterString,q)}),b=$(),k=$(),g=$(),p=h(()=>l.value||e.active);function j(){var q;g.value!==document.activeElement&&((q=g.value)==null||q.focus()),l.value||r()}function P(q){I(q)}function w(q){t("mousedown:control",q)}function I(q){var _;(_=g.value)==null||_.click(),t("click:control",q)}function A(q){q.stopPropagation(),j(),Fe(()=>{u.value=[],Yl(e["onClick:clear"],q)})}return ae(u,q=>{(!Array.isArray(q)||!q.length)&&g.value&&(g.value.value="")}),X(()=>{const q=!!(a.counter||e.counter),_=!!(q||a.details),[x,V]=yt(n),[{modelValue:C,...M}]=lc.filterProps(e),[N]=yr(e);return m(lc,se({ref:b,modelValue:u.value,"onUpdate:modelValue":Q=>u.value=Q,class:["v-file-input",e.class],style:e.style,"onClick:prepend":P},x,M,{focused:l.value}),{...a,default:Q=>{let{id:F,isDisabled:H,isDirty:D,isReadonly:J,isValid:R}=Q;return m(Na,se({ref:k,"prepend-icon":e.prependIcon,onMousedown:w,onClick:I,"onClick:clear":A,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},N,{id:F.value,active:p.value||D.value,dirty:D.value,disabled:H.value,focused:l.value,error:R.value===!1}),{...a,default:K=>{var oe;let{props:{class:z,...fe}}=K;return m(me,null,[m("input",se({ref:g,type:"file",readonly:J.value,disabled:H.value,multiple:e.multiple,name:e.name,onClick:B=>{B.stopPropagation(),j()},onChange:B=>{if(!B.target)return;const T=B.target;u.value=[...T.files??[]]},onFocus:j,onBlur:o},fe,V),null),m("div",{class:z},[!!((oe=u.value)!=null&&oe.length)&&(a.selection?a.selection({fileNames:v.value,totalBytes:d.value,totalBytesReadable:f.value}):e.chips?v.value.map(B=>m(Da,{key:B,size:"small",color:e.color},{default:()=>[B]})):v.value.join(", "))])])}})},details:_?Q=>{var F,H;return m(me,null,[(F=a.details)==null?void 0:F.call(a,Q),q&&m(me,null,[m("span",null,null),m(Ws,{active:!!((H=u.value)!=null&&H.length),value:y.value},a.counter)])])}:void 0})}),Zc({},b,k,g)}});const O4=W()({name:"VFooter",props:{app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...Ec(),...ne(),...tc(),...Yt(),...ze(),..._e({tag:"footer"}),...Pe()},setup(e,c){let{slots:n}=c;const{themeClasses:t}=$e(e),{backgroundColorClasses:a,backgroundColorStyles:s}=ec(Y(e,"color")),{borderClasses:u}=Fc(e),{elevationClasses:l}=ic(e),{roundedClasses:r}=Ke(e),o=$(32),{resizeRef:i}=on(v=>{v.length&&(o.value=v[0].target.clientHeight)}),d=h(()=>e.height==="auto"?o.value:parseInt(e.height,10)),{layoutItemStyles:f}=Gt({id:e.name,order:h(()=>parseInt(e.order,10)),position:h(()=>"bottom"),layoutSize:d,elementSize:h(()=>e.height==="auto"?void 0:d.value),active:h(()=>e.app),absolute:Y(e,"absolute")});return X(()=>m(e.tag,{ref:i,class:["v-footer",t.value,a.value,u.value,l.value,r.value,e.class],style:[s.value,e.app?f.value:void 0,e.style]},n)),{}}}),L4=W()({name:"VForm",props:{...ne(),...Dg()},emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,c){let{slots:n,emit:t}=c;const a=zg(e),s=$();function u(r){r.preventDefault(),a.reset()}function l(r){const o=r,i=a.validate();o.then=i.then.bind(i),o.catch=i.catch.bind(i),o.finally=i.finally.bind(i),t("submit",o),o.defaultPrevented||i.then(d=>{var v;let{valid:f}=d;f&&((v=s.value)==null||v.submit())}),o.preventDefault()}return X(()=>{var r;return m("form",{ref:s,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:u,onSubmit:l},[(r=n.default)==null?void 0:r.call(n,a)])}),Zc(a,s)}});const F4=W()({name:"VContainer",props:{fluid:{type:Boolean,default:!1},...ne(),..._e()},setup(e,c){let{slots:n}=c;return X(()=>m(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},e.class],style:e.style},n)),{}}}),em=(()=>Os.reduce((e,c)=>(e[c]={type:[Boolean,String,Number],default:!1},e),{}))(),cm=(()=>Os.reduce((e,c)=>{const n="offset"+_n(c);return e[n]={type:[String,Number],default:null},e},{}))(),nm=(()=>Os.reduce((e,c)=>{const n="order"+_n(c);return e[n]={type:[String,Number],default:null},e},{}))(),ho={col:Object.keys(em),offset:Object.keys(cm),order:Object.keys(nm)};function N4(e,c,n){let t=e;if(!(n==null||n===!1)){if(c){const a=c.replace(e,"");t+=`-${a}`}return e==="col"&&(t="v-"+t),e==="col"&&(n===""||n===!0)||(t+=`-${n}`),t.toLowerCase()}}const D4=["auto","start","end","center","baseline","stretch"],z4=W()({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...em,offset:{type:[String,Number],default:null},...cm,order:{type:[String,Number],default:null},...nm,alignSelf:{type:String,default:null,validator:e=>D4.includes(e)},...ne(),..._e()},setup(e,c){let{slots:n}=c;const t=h(()=>{const a=[];let s;for(s in ho)ho[s].forEach(l=>{const r=e[l],o=N4(s,l,r);o&&a.push(o)});const u=a.some(l=>l.startsWith("v-col-"));return a.push({"v-col":!u||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),a});return()=>{var a;return dn(e.tag,{class:[t.value,e.class],style:e.style},(a=n.default)==null?void 0:a.call(n))}}}),Sr=["start","end","center"],tm=["space-between","space-around","space-evenly"];function _r(e,c){return Os.reduce((n,t)=>{const a=e+_n(t);return n[a]=c(),n},{})}const H4=[...Sr,"baseline","stretch"],am=e=>H4.includes(e),sm=_r("align",()=>({type:String,default:null,validator:am})),U4=[...Sr,...tm],um=e=>U4.includes(e),lm=_r("justify",()=>({type:String,default:null,validator:um})),W4=[...Sr,...tm,"stretch"],rm=e=>W4.includes(e),im=_r("alignContent",()=>({type:String,default:null,validator:rm})),go={align:Object.keys(sm),justify:Object.keys(lm),alignContent:Object.keys(im)},K4={align:"align",justify:"justify",alignContent:"align-content"};function Y4(e,c,n){let t=K4[e];if(n!=null){if(c){const a=c.replace(e,"");t+=`-${a}`}return t+=`-${n}`,t.toLowerCase()}}const G4=W()({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:am},...sm,justify:{type:String,default:null,validator:um},...lm,alignContent:{type:String,default:null,validator:rm},...im,...ne(),..._e()},setup(e,c){let{slots:n}=c;const t=h(()=>{const a=[];let s;for(s in go)go[s].forEach(u=>{const l=e[u],r=Y4(s,u,l);r&&a.push(r)});return a.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),a});return()=>{var a;return dn(e.tag,{class:["v-row",t.value,e.class],style:e.style},(a=n.default)==null?void 0:a.call(n))}}}),X4=Qc("flex-grow-1","div","VSpacer"),Q4=W()({name:"VHover",props:{disabled:Boolean,modelValue:{type:Boolean,default:void 0},...qf()},emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:n}=c;const t=Se(e,"modelValue"),{runOpenDelay:a,runCloseDelay:s}=kf(e,u=>!e.disabled&&(t.value=u));return()=>{var u;return(u=n.default)==null?void 0:u.call(n,{isHovering:t.value,props:{onMouseenter:a,onMouseleave:s}})}}});const om=Symbol.for("vuetify:v-item-group"),Z4=W()({name:"VItemGroup",props:{...ne(),...Qt({selectedClass:"v-item--selected"}),..._e(),...Pe()},emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:n}=c;const{themeClasses:t}=$e(e),{isSelected:a,select:s,next:u,prev:l,selected:r}=qt(e,om);return()=>m(e.tag,{class:["v-item-group",t.value,e.class],style:e.style},{default:()=>{var o;return[(o=n.default)==null?void 0:o.call(n,{isSelected:a,select:s,next:u,prev:l,selected:r.value})]}})}}),J4=W()({name:"VItem",props:Zt(),emits:{"group:selected":e=>!0},setup(e,c){let{slots:n}=c;const{isSelected:t,select:a,toggle:s,selectedClass:u,value:l,disabled:r}=Jt(e,om);return()=>{var o;return(o=n.default)==null?void 0:o.call(n,{isSelected:t.value,selectedClass:u.value,select:a,toggle:s,value:l.value,disabled:r.value})}}});const e5=Qc("v-kbd");const c5=W()({name:"VLayout",props:{...ne(),...Vd()},setup(e,c){let{slots:n}=c;const{layoutClasses:t,layoutStyles:a,getLayoutItem:s,items:u,layoutRef:l}=Id(e);return X(()=>{var r;return m("div",{ref:l,class:[t.value,e.class],style:[a.value,e.style]},[(r=n.default)==null?void 0:r.call(n)])}),{getLayoutItem:s,items:u}}});const n5=W()({name:"VLayoutItem",props:{position:{type:String,required:!0},size:{type:[Number,String],default:300},modelValue:Boolean,...ne(),...Yt()},setup(e,c){let{slots:n}=c;const{layoutItemStyles:t}=Gt({id:e.name,order:h(()=>parseInt(e.order,10)),position:Y(e,"position"),elementSize:Y(e,"size"),layoutSize:Y(e,"size"),active:Y(e,"modelValue"),absolute:Y(e,"absolute")});return()=>{var a;return m("div",{class:["v-layout-item",e.class],style:[t.value,e.style]},[(a=n.default)==null?void 0:a.call(n)])}}}),t5=W()({name:"VLazy",directives:{intersect:Oa},props:{modelValue:Boolean,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},...ne(),...Oc(),..._e(),...Vn({transition:"fade-transition"})},emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:n}=c;const{dimensionStyles:t}=Lc(e),a=Se(e,"modelValue");function s(u){a.value||(a.value=u)}return X(()=>We(m(e.tag,{class:["v-lazy",e.class],style:[t.value,e.style]},{default:()=>[a.value&&m(Wc,{transition:e.transition,appear:!0},{default:()=>{var u;return[(u=n.default)==null?void 0:u.call(n)]}})]}),[[Sc("intersect"),{handler:s,options:e.options},null]])),{}}});const a5=W()({name:"VLocaleProvider",props:{locale:String,fallbackLocale:String,messages:Object,rtl:{type:Boolean,default:void 0},...ne()},setup(e,c){let{slots:n}=c;const{rtlClasses:t}=mh(e);return X(()=>{var a;return m("div",{class:["v-locale-provider",t.value,e.class],style:e.style},[(a=n.default)==null?void 0:a.call(n)])}),{}}});const s5=W()({name:"VMain",props:{scrollable:Boolean,...ne(),..._e({tag:"main"})},setup(e,c){let{slots:n}=c;const{mainStyles:t}=cg(),{ssrBootStyles:a}=ht();return X(()=>m(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[t.value,a.value,e.style]},{default:()=>{var s,u;return[e.scrollable?m("div",{class:"v-main__scroller"},[(s=n.default)==null?void 0:s.call(n)]):(u=n.default)==null?void 0:u.call(n)]}})),{}}});function u5(e){let{rootEl:c,isSticky:n,layoutItemStyles:t}=e;const a=$(!1),s=$(0),u=h(()=>{const o=typeof a.value=="boolean"?"top":a.value;return[n.value?{top:"auto",bottom:"auto",height:void 0}:void 0,a.value?{[o]:le(s.value)}:{top:t.value.top}]});vc(()=>{ae(n,o=>{o?window.addEventListener("scroll",r,{passive:!0}):window.removeEventListener("scroll",r)},{immediate:!0})}),jc(()=>{document.removeEventListener("scroll",r)});let l=0;function r(){const o=l>window.scrollY?"up":"down",i=c.value.getBoundingClientRect(),d=parseFloat(t.value.top??0),f=window.scrollY-Math.max(0,s.value-d),v=i.height+Math.max(s.value,d)-window.scrollY-window.innerHeight;i.height<window.innerHeight-d?(a.value="top",s.value=d):o==="up"&&a.value==="bottom"||o==="down"&&a.value==="top"?(s.value=window.scrollY+i.top,a.value=!0):o==="down"&&v<=0?(s.value=0,a.value="bottom"):o==="up"&&f<=0&&(s.value=i.top+f,a.value="top"),l=window.scrollY}return{isStuck:a,stickyStyles:u}}const l5=100,r5=20;function jo(e){const c=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*c}function qo(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let c=0;for(let n=e.length-1;n>0;n--){if(e[n].t===e[n-1].t)continue;const t=jo(c),a=(e[n].d-e[n-1].d)/(e[n].t-e[n-1].t);c+=(a-t)*Math.abs(a),n===e.length-1&&(c*=.5)}return jo(c)*1e3}function i5(){const e={};function c(a){Array.from(a.changedTouches).forEach(s=>{(e[s.identifier]??(e[s.identifier]=new Bb(r5))).push([a.timeStamp,s])})}function n(a){Array.from(a.changedTouches).forEach(s=>{delete e[s.identifier]})}function t(a){var o;const s=(o=e[a])==null?void 0:o.values().reverse();if(!s)throw new Error(`No samples for touch id ${a}`);const u=s[0],l=[],r=[];for(const i of s){if(u[0]-i[0]>l5)break;l.push({t:i[0],d:i[1].clientX}),r.push({t:i[0],d:i[1].clientY})}return{x:qo(l),y:qo(r),get direction(){const{x:i,y:d}=this,[f,v]=[Math.abs(i),Math.abs(d)];return f>v&&i>=0?"right":f>v&&i<=0?"left":v>f&&d>=0?"down":v>f&&d<=0?"up":o5()}}}return{addMovement:c,endTouch:n,getVelocity:t}}function o5(){throw new Error}function d5(e){let{isActive:c,isTemporary:n,width:t,touchless:a,position:s}=e;vc(()=>{window.addEventListener("touchstart",g,{passive:!0}),window.addEventListener("touchmove",p,{passive:!1}),window.addEventListener("touchend",j,{passive:!0})}),jc(()=>{window.removeEventListener("touchstart",g),window.removeEventListener("touchmove",p),window.removeEventListener("touchend",j)});const u=h(()=>["left","right"].includes(s.value)),{addMovement:l,endTouch:r,getVelocity:o}=i5();let i=!1;const d=$(!1),f=$(0),v=$(0);let y;function b(w,I){return(s.value==="left"?w:s.value==="right"?document.documentElement.clientWidth-w:s.value==="top"?w:s.value==="bottom"?document.documentElement.clientHeight-w:wt())-(I?t.value:0)}function k(w){let I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const A=s.value==="left"?(w-v.value)/t.value:s.value==="right"?(document.documentElement.clientWidth-w-v.value)/t.value:s.value==="top"?(w-v.value)/t.value:s.value==="bottom"?(document.documentElement.clientHeight-w-v.value)/t.value:wt();return I?Math.max(0,Math.min(1,A)):A}function g(w){if(a.value)return;const I=w.changedTouches[0].clientX,A=w.changedTouches[0].clientY,q=25,_=s.value==="left"?I<q:s.value==="right"?I>document.documentElement.clientWidth-q:s.value==="top"?A<q:s.value==="bottom"?A>document.documentElement.clientHeight-q:wt(),x=c.value&&(s.value==="left"?I<t.value:s.value==="right"?I>document.documentElement.clientWidth-t.value:s.value==="top"?A<t.value:s.value==="bottom"?A>document.documentElement.clientHeight-t.value:wt());(_||x||c.value&&n.value)&&(i=!0,y=[I,A],v.value=b(u.value?I:A,c.value),f.value=k(u.value?I:A),r(w),l(w))}function p(w){const I=w.changedTouches[0].clientX,A=w.changedTouches[0].clientY;if(i){if(!w.cancelable){i=!1;return}const _=Math.abs(I-y[0]),x=Math.abs(A-y[1]);(u.value?_>x&&_>3:x>_&&x>3)?(d.value=!0,i=!1):(u.value?x:_)>3&&(i=!1)}if(!d.value)return;w.preventDefault(),l(w);const q=k(u.value?I:A,!1);f.value=Math.max(0,Math.min(1,q)),q>1?v.value=b(u.value?I:A,!0):q<0&&(v.value=b(u.value?I:A,!1))}function j(w){if(i=!1,!d.value)return;l(w),d.value=!1;const I=o(w.changedTouches[0].identifier),A=Math.abs(I.x),q=Math.abs(I.y);(u.value?A>q&&A>400:q>A&&q>3)?c.value=I.direction===({left:"right",right:"left",top:"down",bottom:"up"}[s.value]||wt()):c.value=f.value>.5}const P=h(()=>d.value?{transform:s.value==="left"?`translateX(calc(-100% + ${f.value*t.value}px))`:s.value==="right"?`translateX(calc(100% - ${f.value*t.value}px))`:s.value==="top"?`translateY(calc(-100% + ${f.value*t.value}px))`:s.value==="bottom"?`translateY(calc(100% - ${f.value*t.value}px))`:wt(),transition:"none"}:void 0);return{isDragging:d,dragProgress:f,dragStyles:P}}function wt(){throw new Error}const f5=["start","end","left","right","top","bottom"],m5=W()({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>f5.includes(e)},sticky:Boolean,...Ec(),...ne(),...tc(),...Yt(),...ze(),..._e({tag:"nav"}),...Pe()},emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,c){let{attrs:n,emit:t,slots:a}=c;const{isRtl:s}=xn(),{themeClasses:u}=$e(e),{borderClasses:l}=Fc(e),{backgroundColorClasses:r,backgroundColorStyles:o}=ec(Y(e,"color")),{elevationClasses:i}=ic(e),{mobile:d}=bt(),{roundedClasses:f}=Ke(e),v=Yd(),y=Se(e,"modelValue",null,D=>!!D),{ssrBootStyles:b}=ht(),k=$(),g=$(!1),p=h(()=>e.rail&&e.expandOnHover&&g.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),j=h(()=>Wu(e.location,s.value)),P=h(()=>!e.permanent&&(d.value||e.temporary)),w=h(()=>e.sticky&&!P.value&&j.value!=="bottom");e.expandOnHover&&e.rail!=null&&ae(g,D=>t("update:rail",!D)),e.disableResizeWatcher||ae(P,D=>!e.permanent&&Fe(()=>y.value=!D)),!e.disableRouteWatcher&&v&&ae(v.currentRoute,()=>P.value&&(y.value=!1)),ae(()=>e.permanent,D=>{D&&(y.value=!0)}),Ps(()=>{e.modelValue!=null||P.value||(y.value=e.permanent||!d.value)});const{isDragging:I,dragProgress:A,dragStyles:q}=d5({isActive:y,isTemporary:P,width:p,touchless:Y(e,"touchless"),position:j}),_=h(()=>{const D=P.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):p.value;return I.value?D*A.value:D}),{layoutItemStyles:x,layoutItemScrimStyles:V}=Gt({id:e.name,order:h(()=>parseInt(e.order,10)),position:j,layoutSize:_,elementSize:p,active:h(()=>y.value||I.value),disableTransitions:h(()=>I.value),absolute:h(()=>e.absolute||w.value&&typeof C.value!="string")}),{isStuck:C,stickyStyles:M}=u5({rootEl:k,isSticky:w,layoutItemStyles:x}),N=ec(h(()=>typeof e.scrim=="string"?e.scrim:null)),Q=h(()=>({...I.value?{opacity:A.value*.2,transition:"none"}:void 0,...V.value}));nc({VList:{bgColor:"transparent"}});function F(){g.value=!0}function H(){g.value=!1}return X(()=>{const D=a.image||e.image;return m(me,null,[m(e.tag,se({ref:k,onMouseenter:F,onMouseleave:H,class:["v-navigation-drawer",`v-navigation-drawer--${j.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":g.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":P.value,"v-navigation-drawer--active":y.value,"v-navigation-drawer--sticky":w.value},u.value,r.value,l.value,i.value,f.value,e.class],style:[o.value,x.value,q.value,b.value,M.value,e.style]},n),{default:()=>{var J,R,K,z;return[D&&m("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?(J=a.image)==null?void 0:J.call(a,{image:e.image}):m("img",{src:e.image,alt:""},null)]),a.prepend&&m("div",{class:"v-navigation-drawer__prepend"},[(R=a.prepend)==null?void 0:R.call(a)]),m("div",{class:"v-navigation-drawer__content"},[(K=a.default)==null?void 0:K.call(a)]),a.append&&m("div",{class:"v-navigation-drawer__append"},[(z=a.append)==null?void 0:z.call(a)])]}}),m(rn,{name:"fade-transition"},{default:()=>[P.value&&(I.value||y.value)&&!!e.scrim&&m("div",{class:["v-navigation-drawer__scrim",N.backgroundColorClasses.value],style:[Q.value,N.backgroundColorStyles.value],onClick:()=>y.value=!1},null)]})])}),{isStuck:C}}}),v5=Bc({name:"VNoSsr",setup(e,c){let{slots:n}=c;const t=_f();return()=>{var a;return t.value&&((a=n.default)==null?void 0:a.call(n))}}});function y5(){const e=$([]);r1(()=>e.value=[]);function c(n,t){e.value[t]=n}return{refs:e,updateRef:c}}const b5=W()({name:"VPagination",props:{activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:qe,default:"$first"},prevIcon:{type:qe,default:"$prev"},nextIcon:{type:qe,default:"$next"},lastIcon:{type:qe,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...Ec(),...ne(),...ac(),...tc(),...ze(),...In(),..._e({tag:"nav"}),...Pe(),...Nc({variant:"text"})},emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,c){let{slots:n,emit:t}=c;const a=Se(e,"modelValue"),{t:s,n:u}=Rc(),{isRtl:l}=xn(),{themeClasses:r}=$e(e),{width:o}=bt(),i=$(-1);nc(void 0,{scoped:!0});const{resizeRef:d}=on(q=>{if(!q.length)return;const{target:_,contentRect:x}=q[0],V=_.querySelector(".v-pagination__list > *");if(!V)return;const C=x.width,M=V.offsetWidth+parseFloat(getComputedStyle(V).marginRight)*2;i.value=b(C,M)}),f=h(()=>parseInt(e.length,10)),v=h(()=>parseInt(e.start,10)),y=h(()=>e.totalVisible?parseInt(e.totalVisible,10):i.value>=0?i.value:b(o.value,58));function b(q,_){const x=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((q-_*x)/_).toFixed(2)))}const k=h(()=>{if(f.value<=0||isNaN(f.value)||f.value>Number.MAX_SAFE_INTEGER)return[];if(y.value<=1)return[a.value];if(f.value<=y.value)return un(f.value,v.value);const q=y.value%2===0,_=q?y.value/2:Math.floor(y.value/2),x=q?_:_+1,V=f.value-_;if(x-a.value>=0)return[...un(Math.max(1,y.value-1),v.value),e.ellipsis,f.value];if(a.value-V>=(q?1:0)){const C=y.value-1,M=f.value-C+v.value;return[v.value,e.ellipsis,...un(C,M)]}else{const C=Math.max(1,y.value-3),M=C===1?a.value:a.value-Math.ceil(C/2)+v.value;return[v.value,e.ellipsis,...un(C,M),e.ellipsis,f.value]}});function g(q,_,x){q.preventDefault(),a.value=_,x&&t(x,_)}const{refs:p,updateRef:j}=y5();nc({VPaginationBtn:{color:Y(e,"color"),border:Y(e,"border"),density:Y(e,"density"),size:Y(e,"size"),variant:Y(e,"variant"),rounded:Y(e,"rounded"),elevation:Y(e,"elevation")}});const P=h(()=>k.value.map((q,_)=>{const x=V=>j(V,_);if(typeof q=="string")return{isActive:!1,key:`ellipsis-${_}`,page:q,props:{ref:x,ellipsis:!0,icon:!0,disabled:!0}};{const V=q===a.value;return{isActive:V,key:q,page:u(q),props:{ref:x,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:V?e.activeColor:e.color,ariaCurrent:V,ariaLabel:s(V?e.currentPageAriaLabel:e.pageAriaLabel,q),onClick:C=>g(C,q)}}}})),w=h(()=>{const q=!!e.disabled||a.value<=v.value,_=!!e.disabled||a.value>=v.value+f.value-1;return{first:e.showFirstLastPage?{icon:l.value?e.lastIcon:e.firstIcon,onClick:x=>g(x,v.value,"first"),disabled:q,ariaLabel:s(e.firstAriaLabel),ariaDisabled:q}:void 0,prev:{icon:l.value?e.nextIcon:e.prevIcon,onClick:x=>g(x,a.value-1,"prev"),disabled:q,ariaLabel:s(e.previousAriaLabel),ariaDisabled:q},next:{icon:l.value?e.prevIcon:e.nextIcon,onClick:x=>g(x,a.value+1,"next"),disabled:_,ariaLabel:s(e.nextAriaLabel),ariaDisabled:_},last:e.showFirstLastPage?{icon:l.value?e.firstIcon:e.lastIcon,onClick:x=>g(x,v.value+f.value-1,"last"),disabled:_,ariaLabel:s(e.lastAriaLabel),ariaDisabled:_}:void 0}});function I(){var _;const q=a.value-v.value;(_=p.value[q])==null||_.$el.focus()}function A(q){q.key===Hu.left&&!e.disabled&&a.value>+e.start?(a.value=a.value-1,Fe(I)):q.key===Hu.right&&!e.disabled&&a.value<v.value+f.value-1&&(a.value=a.value+1,Fe(I))}return X(()=>m(e.tag,{ref:d,class:["v-pagination",r.value,e.class],style:e.style,role:"navigation","aria-label":s(e.ariaLabel),onKeydown:A,"data-test":"v-pagination-root"},{default:()=>[m("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&m("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[n.first?n.first(w.value.first):m(gc,se({_as:"VPaginationBtn"},w.value.first),null)]),m("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[n.prev?n.prev(w.value.prev):m(gc,se({_as:"VPaginationBtn"},w.value.prev),null)]),P.value.map((q,_)=>m("li",{key:q.key,class:["v-pagination__item",{"v-pagination__item--is-active":q.isActive}],"data-test":"v-pagination-item"},[n.item?n.item(q):m(gc,se({_as:"VPaginationBtn"},q.props),{default:()=>[q.page]})])),m("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[n.next?n.next(w.value.next):m(gc,se({_as:"VPaginationBtn"},w.value.next),null)]),e.showFirstLastPage&&m("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[n.last?n.last(w.value.last):m(gc,se({_as:"VPaginationBtn"},w.value.last),null)])])]})),{}}});function h5(e){return Math.floor(Math.abs(e))*Math.sign(e)}const g5=W()({name:"VParallax",props:{scale:{type:[Number,String],default:.5},...ne()},setup(e,c){let{slots:n}=c;const{intersectionRef:t,isIntersecting:a}=ir(),{resizeRef:s,contentRect:u}=on(),{height:l}=bt(),r=$();Gc(()=>{var v;t.value=s.value=(v=r.value)==null?void 0:v.$el});let o;ae(a,v=>{v?(o=jd(t.value),o=o===document.scrollingElement?document:o,o.addEventListener("scroll",f,{passive:!0}),f()):o.removeEventListener("scroll",f)}),jc(()=>{o==null||o.removeEventListener("scroll",f)}),ae(l,f),ae(()=>{var v;return(v=u.value)==null?void 0:v.height},f);const i=h(()=>1-fc(+e.scale));let d=-1;function f(){a.value&&(cancelAnimationFrame(d),d=requestAnimationFrame(()=>{var w;const v=((w=r.value)==null?void 0:w.$el).querySelector(".v-img__img");if(!v)return;const y=o instanceof Document?document.documentElement.clientHeight:o.clientHeight,b=o instanceof Document?window.scrollY:o.scrollTop,k=t.value.getBoundingClientRect().top+b,g=u.value.height,p=k+(g-y)/2,j=h5((b-p)*i.value),P=Math.max(1,(i.value*(y-g)+g)/g);v.style.setProperty("transform",`translateY(${j}px) scale(${P})`)}))}return X(()=>m(Xt,{class:["v-parallax",{"v-parallax--active":a.value},e.class],style:e.style,ref:r,cover:!0,onLoadstart:f,onLoad:f},n)),{}}}),j5=W()({name:"VRadio",props:{...Ys({falseIcon:"$radioOff",trueIcon:"$radioOn"})},setup(e,c){let{slots:n}=c;return X(()=>m(Ft,se(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),n)),{}}});const q5=W()({name:"VRadioGroup",inheritAttrs:!1,props:{height:{type:[Number,String],default:"auto"},...An(),...mn(br(),["multiple"]),trueIcon:{type:qe,default:"$radioOn"},falseIcon:{type:qe,default:"$radioOff"},type:{type:String,default:"radio"}},emits:{"update:modelValue":e=>!0},setup(e,c){let{attrs:n,slots:t}=c;const a=yc(),s=h(()=>e.id||`radio-group-${a}`),u=Se(e,"modelValue");return X(()=>{const[l,r]=yt(n),[o,i]=lc.filterProps(e),[d,f]=Ft.filterProps(e),v=t.label?t.label({label:e.label,props:{for:s.value}}):e.label;return m(lc,se({class:["v-radio-group",e.class],style:e.style},l,o,{modelValue:u.value,"onUpdate:modelValue":y=>u.value=y,id:s.value}),{...t,default:y=>{let{id:b,messagesId:k,isDisabled:g,isReadonly:p}=y;return m(me,null,[v&&m(ta,{id:b.value},{default:()=>[v]}),m(nf,se(d,{id:b.value,"aria-describedby":k.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:g.value,readonly:p.value,"aria-labelledby":v?b.value:void 0,multiple:!1},r,{modelValue:u.value,"onUpdate:modelValue":j=>u.value=j}),t)])}})}),{}}}),k5=W()({name:"VRangeSlider",props:{...zs(),...An(),...Kf(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,end:e=>!0,start:e=>!0},setup(e,c){let{slots:n,emit:t}=c;const a=$(),s=$(),u=$();function l(q){if(!a.value||!s.value)return;const _=fl(q,a.value.$el,e.direction),x=fl(q,s.value.$el,e.direction),V=Math.abs(_),C=Math.abs(x);return V<C||V===C&&_<0?a.value.$el:s.value.$el}const r=Yf(e),o=Se(e,"modelValue",void 0,q=>q!=null&&q.length?q.map(_=>r.roundValue(_)):[0,0]),{activeThumbRef:i,hasLabels:d,max:f,min:v,mousePressed:y,onSliderMousedown:b,onSliderTouchstart:k,position:g,trackContainerRef:p}=Gf({props:e,steps:r,onSliderStart:()=>{t("start",o.value)},onSliderEnd:q=>{var V;let{value:_}=q;const x=i.value===((V=a.value)==null?void 0:V.$el)?[_,o.value[1]]:[o.value[0],_];o.value=x,t("end",x)},onSliderMove:q=>{var C,M,N,Q;let{value:_}=q;const[x,V]=o.value;!e.strict&&x===V&&x!==v.value&&(i.value=_>x?(C=s.value)==null?void 0:C.$el:(M=a.value)==null?void 0:M.$el,(N=i.value)==null||N.focus()),i.value===((Q=a.value)==null?void 0:Q.$el)?o.value=[Math.min(_,V),V]:o.value=[x,Math.max(x,_)]},getActiveThumb:l}),{isFocused:j,focus:P,blur:w}=Gn(e),I=h(()=>g(o.value[0])),A=h(()=>g(o.value[1]));return X(()=>{const[q,_]=lc.filterProps(e),x=!!(e.label||n.label||n.prepend);return m(lc,se({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!n["tick-label"]||d.value,"v-slider--focused":j.value,"v-slider--pressed":y.value,"v-slider--disabled":e.disabled},e.class],style:e.style,ref:u},q,{focused:j.value}),{...n,prepend:x?V=>{var C,M;return m(me,null,[((C=n.label)==null?void 0:C.call(n,V))??e.label?m(ta,{class:"v-slider__label",text:e.label},null):void 0,(M=n.prepend)==null?void 0:M.call(n,V)])}:void 0,default:V=>{var N,Q;let{id:C,messagesId:M}=V;return m("div",{class:"v-slider__container",onMousedown:b,onTouchstartPassive:k},[m("input",{id:`${C.value}_start`,name:e.name||C.value,disabled:e.disabled,readonly:e.readonly,tabindex:"-1",value:o.value[0]},null),m("input",{id:`${C.value}_stop`,name:e.name||C.value,disabled:e.disabled,readonly:e.readonly,tabindex:"-1",value:o.value[1]},null),m(Xf,{ref:p,start:I.value,stop:A.value},{"tick-label":n["tick-label"]}),m(ml,{ref:a,"aria-describedby":M.value,focused:j&&i.value===((N=a.value)==null?void 0:N.$el),modelValue:o.value[0],"onUpdate:modelValue":F=>o.value=[F,o.value[1]],onFocus:F=>{var H,D,J,R;P(),i.value=(H=a.value)==null?void 0:H.$el,o.value[0]===o.value[1]&&o.value[1]===v.value&&F.relatedTarget!==((D=s.value)==null?void 0:D.$el)&&((J=a.value)==null||J.$el.blur(),(R=s.value)==null||R.$el.focus())},onBlur:()=>{w(),i.value=void 0},min:v.value,max:o.value[1],position:I.value},{"thumb-label":n["thumb-label"]}),m(ml,{ref:s,"aria-describedby":M.value,focused:j&&i.value===((Q=s.value)==null?void 0:Q.$el),modelValue:o.value[1],"onUpdate:modelValue":F=>o.value=[o.value[0],F],onFocus:F=>{var H,D,J,R;P(),i.value=(H=s.value)==null?void 0:H.$el,o.value[0]===o.value[1]&&o.value[0]===f.value&&F.relatedTarget!==((D=a.value)==null?void 0:D.$el)&&((J=s.value)==null||J.$el.blur(),(R=a.value)==null||R.$el.focus())},onBlur:()=>{w(),i.value=void 0},min:o.value[0],max:f.value,position:A.value},{"thumb-label":n["thumb-label"]})])}})}),{}}});const p5=W()({name:"VRating",props:{name:String,itemAriaLabel:{type:String,default:"$vuetify.rating.ariaLabel.item"},activeColor:String,color:String,clearable:Boolean,disabled:Boolean,emptyIcon:{type:qe,default:"$ratingEmpty"},fullIcon:{type:qe,default:"$ratingFull"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,modelValue:{type:[Number,String],default:0},itemLabels:Array,itemLabelPosition:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},ripple:Boolean,...ne(),...ac(),...In(),..._e(),...Pe()},emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:n}=c;const{t}=Rc(),{themeClasses:a}=$e(e),s=Se(e,"modelValue"),u=h(()=>fc(parseFloat(s.value),0,+e.length)),l=h(()=>un(Number(e.length),1)),r=h(()=>l.value.flatMap(b=>e.halfIncrements?[b-.5,b]:[b])),o=$(-1),i=h(()=>r.value.map(b=>{const k=e.hover&&o.value>-1,g=u.value>=b,p=o.value>=b,P=(k?p:g)?e.fullIcon:e.emptyIcon,w=e.activeColor??e.color,I=g||p?w:e.color;return{isFilled:g,isHovered:p,icon:P,color:I}})),d=h(()=>[0,...r.value].map(b=>{function k(){o.value=b}function g(){o.value=-1}function p(){e.disabled||e.readonly||(s.value=u.value===b&&e.clearable?0:b)}return{onMouseenter:e.hover?k:void 0,onMouseleave:e.hover?g:void 0,onClick:p}})),f=h(()=>e.name??`v-rating-${yc()}`);function v(b){var q,_;let{value:k,index:g,showStar:p=!0}=b;const{onMouseenter:j,onMouseleave:P,onClick:w}=d.value[g+1],I=`${f.value}-${String(k).replace(".","-")}`,A={color:(q=i.value[g])==null?void 0:q.color,density:e.density,disabled:e.disabled,icon:(_=i.value[g])==null?void 0:_.icon,ripple:e.ripple,size:e.size,variant:"plain"};return m(me,null,[m("label",{for:I,class:{"v-rating__item--half":e.halfIncrements&&k%1>0,"v-rating__item--full":e.halfIncrements&&k%1===0},onMouseenter:j,onMouseleave:P,onClick:w},[m("span",{class:"v-rating__hidden"},[t(e.itemAriaLabel,k,e.length)]),p?n.item?n.item({...i.value[g],props:A,value:k,index:g,rating:u.value}):m(gc,A,null):void 0]),m("input",{class:"v-rating__hidden",name:f.value,id:I,type:"radio",value:k,checked:u.value===k,tabindex:-1,readonly:e.readonly,disabled:e.disabled},null)])}function y(b){return n["item-label"]?n["item-label"](b):b.label?m("span",null,[b.label]):m("span",null,[Oe(" ")])}return X(()=>{var k;const b=!!((k=e.itemLabels)!=null&&k.length)||n["item-label"];return m(e.tag,{class:["v-rating",{"v-rating--hover":e.hover,"v-rating--readonly":e.readonly},a.value,e.class],style:e.style},{default:()=>[m(v,{value:0,index:-1,showStar:!1},null),l.value.map((g,p)=>{var j,P;return m("div",{class:"v-rating__wrapper"},[b&&e.itemLabelPosition==="top"?y({value:g,index:p,label:(j=e.itemLabels)==null?void 0:j[p]}):void 0,m("div",{class:"v-rating__item"},[e.halfIncrements?m(me,null,[m(v,{value:g-.5,index:p*2},null),m(v,{value:g,index:p*2+1},null)]):m(v,{value:g,index:p},null)]),b&&e.itemLabelPosition==="bottom"?y({value:g,index:p,label:(P=e.itemLabels)==null?void 0:P[p]}):void 0])})]})}),{}}});function ko(e){const n=Math.abs(e);return Math.sign(e)*(n/((1/.501-2)*(1-n)+1))}function po(e){let{selectedElement:c,containerSize:n,contentSize:t,isRtl:a,currentScrollOffset:s,isHorizontal:u}=e;const l=u?c.clientWidth:c.clientHeight,r=u?c.offsetLeft:c.offsetTop,o=a&&u?t-r-l:r,i=n+s,d=l+o,f=l*.4;return o<=s?s=Math.max(o-f,0):i<=d&&(s=Math.min(s-(i-d-f),t-n)),s}function S5(e){let{selectedElement:c,containerSize:n,contentSize:t,isRtl:a,isHorizontal:s}=e;const u=s?c.clientWidth:c.clientHeight,l=s?c.offsetLeft:c.offsetTop,r=a&&s?t-l-u/2-n/2:l+u/2-n/2;return Math.min(t-n,Math.max(0,r))}const dm=Symbol.for("vuetify:v-slide-group"),fm=he({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:dm},nextIcon:{type:qe,default:"$next"},prevIcon:{type:qe,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...ne(),..._e(),...Qt({selectedClass:"v-slide-group-item--active"})},"v-slide-group"),yl=W()({name:"VSlideGroup",props:fm(),emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:n}=c;const{isRtl:t}=xn(),{mobile:a}=bt(),s=qt(e,e.symbol),u=$(!1),l=$(0),r=$(0),o=$(0),i=h(()=>e.direction==="horizontal"),{resizeRef:d,contentRect:f}=on(),{resizeRef:v,contentRect:y}=on(),b=h(()=>s.selected.value.length?s.items.value.findIndex(R=>R.id===s.selected.value[0]):-1),k=h(()=>s.selected.value.length?s.items.value.findIndex(R=>R.id===s.selected.value[s.selected.value.length-1]):-1);if(Je){let R=-1;ae(()=>[s.selected.value,f.value,y.value,i.value],()=>{cancelAnimationFrame(R),R=requestAnimationFrame(()=>{if(f.value&&y.value){const K=i.value?"width":"height";r.value=f.value[K],o.value=y.value[K],u.value=r.value+1<o.value}if(b.value>=0&&v.value){const K=v.value.children[k.value];b.value===0||!u.value?l.value=0:e.centerActive?l.value=S5({selectedElement:K,containerSize:r.value,contentSize:o.value,isRtl:t.value,isHorizontal:i.value}):u.value&&(l.value=po({selectedElement:K,containerSize:r.value,contentSize:o.value,isRtl:t.value,currentScrollOffset:l.value,isHorizontal:i.value}))}})})}const g=$(!1);let p=0,j=0;function P(R){const K=i.value?"clientX":"clientY";j=(t.value&&i.value?-1:1)*l.value,p=R.touches[0][K],g.value=!0}function w(R){if(!u.value)return;const K=i.value?"clientX":"clientY",z=t.value&&i.value?-1:1;l.value=z*(j+p-R.touches[0][K])}function I(R){const K=o.value-r.value;l.value<0||!u.value?l.value=0:l.value>=K&&(l.value=K),g.value=!1}function A(){d.value&&(d.value[i.value?"scrollLeft":"scrollTop"]=0)}const q=$(!1);function _(R){if(q.value=!0,!(!u.value||!v.value)){for(const K of R.composedPath())for(const z of v.value.children)if(z===K){l.value=po({selectedElement:z,containerSize:r.value,contentSize:o.value,isRtl:t.value,currentScrollOffset:l.value,isHorizontal:i.value});return}}}function x(R){q.value=!1}function V(R){var K;!q.value&&!(R.relatedTarget&&((K=v.value)!=null&&K.contains(R.relatedTarget)))&&M()}function C(R){v.value&&(i.value?R.key==="ArrowRight"?M(t.value?"prev":"next"):R.key==="ArrowLeft"&&M(t.value?"next":"prev"):R.key==="ArrowDown"?M("next"):R.key==="ArrowUp"&&M("prev"),R.key==="Home"?M("first"):R.key==="End"&&M("last"))}function M(R){var K,z,fe,oe,B;if(v.value)if(!R)(K=Gl(v.value)[0])==null||K.focus();else if(R==="next"){const T=(z=v.value.querySelector(":focus"))==null?void 0:z.nextElementSibling;T?T.focus():M("first")}else if(R==="prev"){const T=(fe=v.value.querySelector(":focus"))==null?void 0:fe.previousElementSibling;T?T.focus():M("last")}else R==="first"?(oe=v.value.firstElementChild)==null||oe.focus():R==="last"&&((B=v.value.lastElementChild)==null||B.focus())}function N(R){const K=l.value+(R==="prev"?-1:1)*r.value;l.value=fc(K,0,o.value-r.value)}const Q=h(()=>{let R=l.value>o.value-r.value?-(o.value-r.value)+ko(o.value-r.value-l.value):-l.value;l.value<=0&&(R=ko(-l.value));const K=t.value&&i.value?-1:1;return{transform:`translate${i.value?"X":"Y"}(${K*R}px)`,transition:g.value?"none":"",willChange:g.value?"transform":""}}),F=h(()=>({next:s.next,prev:s.prev,select:s.select,isSelected:s.isSelected})),H=h(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!a.value;case!0:return u.value||Math.abs(l.value)>0;case"mobile":return a.value||u.value||Math.abs(l.value)>0;default:return!a.value&&(u.value||Math.abs(l.value)>0)}}),D=h(()=>Math.abs(l.value)>0),J=h(()=>o.value>Math.abs(l.value)+r.value);return X(()=>m(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!i.value,"v-slide-group--has-affixes":H.value,"v-slide-group--is-overflowing":u.value},e.class],style:e.style,tabindex:q.value||s.selected.value.length?-1:0,onFocus:V},{default:()=>{var R,K,z;return[H.value&&m("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!D.value}],onClick:()=>N("prev")},[((R=n.prev)==null?void 0:R.call(n,F.value))??m(Ju,null,{default:()=>[m(Ue,{icon:t.value?e.nextIcon:e.prevIcon},null)]})]),m("div",{key:"container",ref:d,class:"v-slide-group__container",onScroll:A},[m("div",{ref:v,class:"v-slide-group__content",style:Q.value,onTouchstartPassive:P,onTouchmovePassive:w,onTouchendPassive:I,onFocusin:_,onFocusout:x,onKeydown:C},[(K=n.default)==null?void 0:K.call(n,F.value)])]),H.value&&m("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!J.value}],onClick:()=>N("next")},[((z=n.next)==null?void 0:z.call(n,F.value))??m(Ju,null,{default:()=>[m(Ue,{icon:t.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:s.selected,scrollTo:N,scrollOffset:l,focus:M}}}),_5=W()({name:"VSlideGroupItem",props:{...Zt()},emits:{"group:selected":e=>!0},setup(e,c){let{slots:n}=c;const t=Jt(e,dm);return()=>{var a;return(a=n.default)==null?void 0:a.call(n,{isSelected:t.isSelected.value,select:t.select,toggle:t.toggle,selectedClass:t.selectedClass.value})}}});const C5=W()({name:"VSnackbar",props:{multiLine:Boolean,timeout:{type:[Number,String],default:5e3},vertical:Boolean,...Kn({location:"bottom"}),...ca(),...ze(),...Nc(),...Pe(),...mn(Ha({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:n}=c;const t=Se(e,"modelValue"),{locationStyles:a}=Yn(e),{positionClasses:s}=na(e),{scopeId:u}=za(),{themeClasses:l}=$e(e),{colorClasses:r,colorStyles:o,variantClasses:i}=jt(e),{roundedClasses:d}=Ke(e),f=$();ae(t,y),ae(()=>e.timeout,y),vc(()=>{t.value&&y()});let v=-1;function y(){window.clearTimeout(v);const k=Number(e.timeout);!t.value||k===-1||(v=window.setTimeout(()=>{t.value=!1},k))}function b(){window.clearTimeout(v)}return X(()=>{const[k]=Sn.filterProps(e);return m(Sn,se({ref:f,class:["v-snackbar",{"v-snackbar--active":t.value,"v-snackbar--multi-line":e.multiLine&&!e.vertical,"v-snackbar--vertical":e.vertical},s.value,e.class],style:e.style},k,{modelValue:t.value,"onUpdate:modelValue":g=>t.value=g,contentProps:se({class:["v-snackbar__wrapper",l.value,r.value,d.value,i.value],style:[a.value,o.value],onPointerenter:b,onPointerleave:y},k.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0},u),{default:()=>[gt(!1,"v-snackbar"),n.default&&m("div",{class:"v-snackbar__content",role:"status","aria-live":"polite"},[n.default()]),n.actions&&m(Be,{defaults:{VBtn:{variant:"text",ripple:!1}}},{default:()=>[m("div",{class:"v-snackbar__actions"},[n.actions()])]})],activator:n.activator})}),Zc({},f)}});const w5=W()({name:"VSwitch",inheritAttrs:!1,props:{indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...An(),...Ys()},emits:{"update:focused":e=>!0,"update:modelValue":()=>!0,"update:indeterminate":e=>!0},setup(e,c){let{attrs:n,slots:t}=c;const a=Se(e,"indeterminate"),s=Se(e,"modelValue"),{loaderClasses:u}=Ds(e),{isFocused:l,focus:r,blur:o}=Gn(e),i=h(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),d=yc(),f=h(()=>e.id||`switch-${d}`);function v(){a.value&&(a.value=!1)}return X(()=>{const[y,b]=yt(n),[k,g]=lc.filterProps(e),[p,j]=Ft.filterProps(e),P=$();function w(I){var A,q;I.stopPropagation(),I.preventDefault(),(q=(A=P.value)==null?void 0:A.input)==null||q.click()}return m(lc,se({class:["v-switch",{"v-switch--inset":e.inset},{"v-switch--indeterminate":a.value},u.value,e.class],style:e.style},y,k,{id:f.value,focused:l.value}),{...t,default:I=>{let{id:A,messagesId:q,isDisabled:_,isReadonly:x,isValid:V}=I;return m(Ft,se({ref:P},p,{modelValue:s.value,"onUpdate:modelValue":[C=>s.value=C,v],id:A.value,"aria-describedby":q.value,type:"checkbox","aria-checked":a.value?"mixed":void 0,disabled:_.value,readonly:x.value,onFocus:r,onBlur:o},b),{...t,default:()=>m("div",{class:"v-switch__track",onClick:w},null),input:C=>{let{textColorClasses:M,textColorStyles:N}=C;return m("div",{class:["v-switch__thumb",M.value],style:N.value},[e.loading&&m(mr,{name:"v-switch",active:!0,color:V.value===!1?void 0:i.value},{default:Q=>t.loader?t.loader(Q):m(or,{active:Q.isActive,color:Q.color,indeterminate:!0,size:"16",width:"2"},null)})])}})}})}),{}}});const x5=W()({name:"VSystemBar",props:{color:String,height:[Number,String],window:Boolean,...ne(),...tc(),...Yt(),...ze(),..._e(),...Pe()},setup(e,c){let{slots:n}=c;const{themeClasses:t}=$e(e),{backgroundColorClasses:a,backgroundColorStyles:s}=ec(Y(e,"color")),{elevationClasses:u}=ic(e),{roundedClasses:l}=Ke(e),{ssrBootStyles:r}=ht(),o=h(()=>e.height??(e.window?32:24)),{layoutItemStyles:i}=Gt({id:e.name,order:h(()=>parseInt(e.order,10)),position:$("top"),layoutSize:o,elementSize:o,active:h(()=>!0),absolute:Y(e,"absolute")});return X(()=>m(e.tag,{class:["v-system-bar",{"v-system-bar--window":e.window},t.value,a.value,u.value,l.value,e.class],style:[s.value,i.value,r.value,e.style]},n)),{}}});const mm=Symbol.for("vuetify:v-tabs"),vm=W()({name:"VTab",props:{fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...mn(vr({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},setup(e,c){let{slots:n,attrs:t}=c;const{textColorClasses:a,textColorStyles:s}=mc(e,"sliderColor"),u=h(()=>e.direction==="horizontal"),l=$(!1),r=$(),o=$();function i(d){var v,y;let{value:f}=d;if(l.value=f,f){const b=(y=(v=r.value)==null?void 0:v.$el.parentElement)==null?void 0:y.querySelector(".v-tab--selected .v-tab__slider"),k=o.value;if(!b||!k)return;const g=getComputedStyle(b).color,p=b.getBoundingClientRect(),j=k.getBoundingClientRect(),P=u.value?"x":"y",w=u.value?"X":"Y",I=u.value?"right":"bottom",A=u.value?"width":"height",q=p[P],_=j[P],x=q>_?p[I]-j[I]:p[P]-j[P],V=Math.sign(x)>0?u.value?"right":"bottom":Math.sign(x)<0?u.value?"left":"top":"center",M=(Math.abs(x)+(Math.sign(x)<0?p[A]:j[A]))/Math.max(p[A],j[A]),N=p[A]/j[A],Q=1.5;lt(k,{backgroundColor:[g,""],transform:[`translate${w}(${x}px) scale${w}(${N})`,`translate${w}(${x/Q}px) scale${w}(${(M-1)/Q+1})`,""],transformOrigin:Array(3).fill(V)},{duration:225,easing:Aa})}}return X(()=>{const[d]=gc.filterProps(e);return m(gc,se({symbol:mm,ref:r,class:["v-tab",e.class],style:e.style,tabindex:l.value?0:-1,role:"tab","aria-selected":String(l.value),active:!1,block:e.fixed,maxWidth:e.fixed?300:void 0,rounded:0},d,t,{"onGroup:selected":i}),{default:()=>{var f;return[((f=n.default)==null?void 0:f.call(n))??e.text,!e.hideSlider&&m("div",{ref:o,class:["v-tab__slider",a.value],style:s.value},null)]}})}),{}}});function V5(e){return e?e.map(c=>typeof c=="string"?{title:c,value:c}:c):[]}const I5=W()({name:"VTabs",props:{alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...fm({mandatory:"force"}),...ac(),..._e()},emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:n}=c;const t=Se(e,"modelValue"),a=h(()=>V5(e.items)),{densityClasses:s}=bc(e),{backgroundColorClasses:u,backgroundColorStyles:l}=ec(Y(e,"bgColor"));return nc({VTab:{color:Y(e,"color"),direction:Y(e,"direction"),stacked:Y(e,"stacked"),fixed:Y(e,"fixedTabs"),sliderColor:Y(e,"sliderColor"),hideSlider:Y(e,"hideSlider")}}),X(()=>{const[r]=yl.filterProps(e);return m(yl,se(r,{modelValue:t.value,"onUpdate:modelValue":o=>t.value=o,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},s.value,u.value,e.class],style:[{"--v-tabs-height":le(e.height)},l.value,e.style],role:"tablist",symbol:mm}),{default:()=>[n.default?n.default():a.value.map(o=>m(vm,se(o,{key:o.title}),null))]})}),{}}});const A5=W()({name:"VTable",props:{fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...ne(),...ac(),..._e(),...Pe()},setup(e,c){let{slots:n}=c;const{themeClasses:t}=$e(e),{densityClasses:a}=bc(e);return X(()=>m(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!n.top,"v-table--has-bottom":!!n.bottom,"v-table--hover":e.hover},t.value,a.value,e.class],style:e.style},{default:()=>{var s,u,l;return[(s=n.top)==null?void 0:s.call(n),n.default?m("div",{class:"v-table__wrapper",style:{height:le(e.height)}},[m("table",null,[n.default()])]):(u=n.wrapper)==null?void 0:u.call(n),(l=n.bottom)==null?void 0:l.call(n)]}})),{}}});const E5=W()({name:"VTextarea",directives:{Intersect:Oa},inheritAttrs:!1,props:{autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...An(),...Hs()},emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,c){let{attrs:n,emit:t,slots:a}=c;const s=Se(e,"modelValue"),{isFocused:u,focus:l,blur:r}=Gn(e),o=h(()=>typeof e.counterValue=="function"?e.counterValue(s.value):(s.value||"").toString().length),i=h(()=>{if(n.maxlength)return n.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function d(_,x){var V,C;!e.autofocus||!_||(C=(V=x[0].target)==null?void 0:V.focus)==null||C.call(V)}const f=$(),v=$(),y=$(""),b=$(),k=h(()=>e.persistentPlaceholder||u.value||e.active);function g(){var _;b.value!==document.activeElement&&((_=b.value)==null||_.focus()),u.value||l()}function p(_){g(),t("click:control",_)}function j(_){t("mousedown:control",_)}function P(_){_.stopPropagation(),g(),Fe(()=>{s.value="",Yl(e["onClick:clear"],_)})}function w(_){var V;const x=_.target;if(s.value=x.value,(V=e.modelModifiers)!=null&&V.trim){const C=[x.selectionStart,x.selectionEnd];Fe(()=>{x.selectionStart=C[0],x.selectionEnd=C[1]})}}const I=$();function A(){e.autoGrow&&Fe(()=>{if(!I.value||!v.value)return;const _=getComputedStyle(I.value),x=getComputedStyle(v.value.$el),V=parseFloat(_.getPropertyValue("--v-field-padding-top"))+parseFloat(_.getPropertyValue("--v-input-padding-top"))+parseFloat(_.getPropertyValue("--v-field-padding-bottom")),C=I.value.scrollHeight,M=parseFloat(_.lineHeight),N=Math.max(parseFloat(e.rows)*M+V,parseFloat(x.getPropertyValue("--v-input-control-height"))),Q=parseFloat(e.maxRows)*M+V||1/0;y.value=le(fc(C??0,N,Q))})}vc(A),ae(s,A),ae(()=>e.rows,A),ae(()=>e.maxRows,A),ae(()=>e.density,A);let q;return ae(I,_=>{_?(q=new ResizeObserver(A),q.observe(I.value)):q==null||q.disconnect()}),jc(()=>{q==null||q.disconnect()}),X(()=>{const _=!!(a.counter||e.counter||e.counterValue),x=!!(_||a.details),[V,C]=yt(n),[{modelValue:M,...N}]=lc.filterProps(e),[Q]=yr(e);return m(lc,se({ref:f,modelValue:s.value,"onUpdate:modelValue":F=>s.value=F,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)},e.class],style:e.style},V,N,{focused:u.value}),{...a,default:F=>{let{isDisabled:H,isDirty:D,isReadonly:J,isValid:R}=F;return m(Na,se({ref:v,style:{"--v-textarea-control-height":y.value},onClick:p,onMousedown:j,"onClick:clear":P,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},Q,{active:k.value||D.value,dirty:D.value||e.dirty,disabled:H.value,focused:u.value,error:R.value===!1}),{...a,default:K=>{let{props:{class:z,...fe}}=K;return m(me,null,[e.prefix&&m("span",{class:"v-text-field__prefix"},[e.prefix]),We(m("textarea",se({ref:b,class:z,value:s.value,onInput:w,autofocus:e.autofocus,readonly:J.value,disabled:H.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:g,onBlur:r},fe,C),null),[[Sc("intersect"),{handler:d},null,{once:!0}]]),e.autoGrow&&We(m("textarea",{class:[z,"v-textarea__sizer"],"onUpdate:modelValue":oe=>s.value=oe,ref:I,readonly:!0,"aria-hidden":"true"},null),[[z2,s.value]]),e.suffix&&m("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:x?F=>{var H;return m(me,null,[(H=a.details)==null?void 0:H.call(a,F),_&&m(me,null,[m("span",null,null),m(Ws,{active:e.persistentCounter||u.value,value:o.value,max:i.value},a.counter)])])}:void 0})}),Zc({},f,v,b)}});const P5=W()({name:"VThemeProvider",props:{withBackground:Boolean,...ne(),...Pe(),..._e()},setup(e,c){let{slots:n}=c;const{themeClasses:t}=$e(e);return()=>{var a;return e.withBackground?m(e.tag,{class:["v-theme-provider",t.value,e.class],style:e.style},{default:()=>{var s;return[(s=n.default)==null?void 0:s.call(n)]}}):(a=n.default)==null?void 0:a.call(n)}}});const T5=W()({name:"VTimeline",props:{align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineInset:{type:[String,Number],default:0},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...ne(),...ac(),..._e(),...Pe()},setup(e,c){let{slots:n}=c;const{themeClasses:t}=$e(e),{densityClasses:a}=bc(e);nc({VTimelineDivider:{lineColor:Y(e,"lineColor")},VTimelineItem:{density:Y(e,"density"),lineInset:Y(e,"lineInset")}});const s=h(()=>{const l=e.side?e.side:e.density!=="default"?"end":null;return l&&`v-timeline--side-${l}`}),u=h(()=>{const l=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return l;case"start":return l[0];case"end":return l[1];default:return null}});return X(()=>m(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,u.value,{"v-timeline--inset-line":!!e.lineInset},t.value,a.value,s.value,e.class],style:[{"--v-timeline-line-thickness":le(e.lineThickness)},e.style]},n)),{}}}),$5=W()({name:"VTimelineDivider",props:{dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:qe,iconColor:String,lineColor:String,...ne(),...ze(),...In(),...tc()},setup(e,c){let{slots:n}=c;const{sizeClasses:t,sizeStyles:a}=ea(e,"v-timeline-divider__dot"),{backgroundColorStyles:s,backgroundColorClasses:u}=ec(Y(e,"dotColor")),{roundedClasses:l}=Ke(e,"v-timeline-divider__dot"),{elevationClasses:r}=ic(e),{backgroundColorClasses:o,backgroundColorStyles:i}=ec(Y(e,"lineColor"));return X(()=>m("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot},e.class],style:e.style},[m("div",{class:["v-timeline-divider__before",o.value],style:i.value},null),!e.hideDot&&m("div",{key:"dot",class:["v-timeline-divider__dot",r.value,l.value,t.value],style:a.value},[m("div",{class:["v-timeline-divider__inner-dot",u.value,l.value],style:s.value},[n.default?m(Be,{key:"icon-defaults",disabled:!e.icon,defaults:{VIcon:{color:e.iconColor,icon:e.icon,size:e.size}}},n.default):m(Ue,{key:"icon",color:e.iconColor,icon:e.icon,size:e.size},null)])]),m("div",{class:["v-timeline-divider__after",o.value],style:i.value},null)])),{}}}),M5=W()({name:"VTimelineItem",props:{density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:qe,iconColor:String,lineInset:[Number,String],...ne(),...Oc(),...tc(),...ze(),...In(),..._e()},setup(e,c){let{slots:n}=c;const{dimensionStyles:t}=Lc(e),a=$(0),s=$();return ae(s,u=>{var l;u&&(a.value=((l=u.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:l.getBoundingClientRect().width)??0)},{flush:"post"}),X(()=>{var u,l;return m("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot},e.class],style:[{"--v-timeline-dot-size":le(a.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${le(e.lineInset)})`:le(0)},e.style]},[m("div",{class:"v-timeline-item__body",style:t.value},[(u=n.default)==null?void 0:u.call(n)]),m($5,{ref:s,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:n.icon}),e.density!=="compact"&&m("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((l=n.opposite)==null?void 0:l.call(n))])])}),{}}});const B5=W()({name:"VTooltip",props:{id:String,text:String,...mn(Ha({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:n}=c;const t=Se(e,"modelValue"),{scopeId:a}=za(),s=yc(),u=h(()=>e.id||`v-tooltip-${s}`),l=$(),r=h(()=>e.location.split(" ").length>1?e.location:e.location+" center"),o=h(()=>e.origin==="auto"||e.origin==="overlap"||e.origin.split(" ").length>1||e.location.split(" ").length>1?e.origin:e.origin+" center"),i=h(()=>e.transition?e.transition:t.value?"scale-transition":"fade-transition"),d=h(()=>se({"aria-describedby":u.value},e.activatorProps));return X(()=>{const[f]=Sn.filterProps(e);return m(Sn,se({ref:l,class:["v-tooltip",e.class],style:e.style,id:u.value},f,{modelValue:t.value,"onUpdate:modelValue":v=>t.value=v,transition:i.value,absolute:!0,location:r.value,origin:o.value,persistent:!0,role:"tooltip",activatorProps:d.value,_disableGlobalStack:!0},a),{activator:n.activator,default:function(){var k;for(var v=arguments.length,y=new Array(v),b=0;b<v;b++)y[b]=arguments[b];return((k=n.default)==null?void 0:k.call(n,...y))??e.text}})}),Zc({},l)}}),R5=W()({name:"VValidation",props:{...Jd()},emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:n}=c;const t=ef(e,"validation");return()=>{var a;return(a=n.default)==null?void 0:a.call(n,t)}}});const O5=W()({name:"VVirtualScrollItem",props:{dynamicHeight:Boolean,...ne()},emits:{"update:height":e=>!0},setup(e,c){let{emit:n,slots:t}=c;const{resizeRef:a,contentRect:s}=on();zn(()=>e.dynamicHeight,()=>{ae(()=>{var l;return(l=s.value)==null?void 0:l.height},l=>{l!=null&&n("update:height",l)})});function u(){e.dynamicHeight&&s.value&&n("update:height",s.value.height)}Rl(u),X(()=>{var l;return m("div",{ref:e.dynamicHeight?a:void 0,class:["v-virtual-scroll__item",e.class],style:e.style},[(l=t.default)==null?void 0:l.call(t)])})}}),So=-1,_o=1,L5=W()({name:"VVirtualScroll",props:{items:{type:Array,default:()=>[]},itemHeight:[Number,String],...ne(),...Oc()},setup(e,c){let{slots:n}=c;const t=$(0),a=$(e.itemHeight),s=h({get:()=>parseInt(a.value??0,10),set(_){a.value=_}}),u=$(),{resizeRef:l,contentRect:r}=on();Gc(()=>{l.value=u.value});const o=bt(),i=new Map;let d=un(e.items.length).map(()=>s.value);const f=h(()=>{var _;return Math.max(12,Math.ceil((((_=r.value)==null?void 0:_.height)??o.height.value)/s.value*1.7+1))});function v(_,x){s.value=Math.max(s.value,x),d[_]=x,i.set(e.items[_],x)}function y(_){return d.slice(0,_).reduce((x,V)=>x+(V||s.value),0)}function b(_){const x=e.items.length;let V=0,C=0;for(;C<_&&V<x;)C+=d[V++]||s.value;return V-1}let k=0;function g(){if(!u.value||!r.value)return;const _=r.value.height,x=u.value.scrollTop,V=x<k?So:_o,C=b(x+_/2),M=Math.round(f.value/3);V===So&&C<=t.value+M*2-1?t.value=fc(C-M,0,e.items.length):V===_o&&C>=t.value+M*2-1&&(t.value=fc(C-M,0,e.items.length-f.value)),k=u.value.scrollTop}function p(_){if(!u.value)return;const x=y(_);u.value.scrollTop=x}const j=h(()=>e.items.map((_,x)=>({raw:_,index:x}))),P=h(()=>Math.min(e.items.length,t.value+f.value)),w=h(()=>j.value.slice(t.value,P.value)),I=h(()=>y(t.value)),A=h(()=>y(e.items.length)-y(P.value)),{dimensionStyles:q}=Lc(e);return vc(()=>{s.value||(s.value=d.slice(t.value,P.value).reduce((_,x)=>_+x,0)/f.value)}),ae(()=>e.items.length,()=>{d=un(e.items.length).map(()=>s.value),i.forEach((_,x)=>{const V=e.items.indexOf(x);V===-1?i.delete(x):d[V]=_})}),X(()=>m("div",{ref:u,class:["v-virtual-scroll",e.class],onScroll:g,style:[q.value,e.style]},[m("div",{class:"v-virtual-scroll__container",style:{paddingTop:le(I.value),paddingBottom:le(A.value)}},[w.value.map(_=>m(O5,{key:_.index,dynamicHeight:!e.itemHeight,"onUpdate:height":x=>v(_.index,x)},{default:()=>{var x;return[(x=n.default)==null?void 0:x.call(n,{item:_.raw,index:_.index})]}}))])])),{scrollToIndex:p}}}),F5=Object.freeze(Object.defineProperty({__proto__:null,VAlert:Fg,VAlertTitle:Gd,VApp:ag,VAppBar:qg,VAppBarNavIcon:Bg,VAppBarTitle:Og,VAutocomplete:M3,VAvatar:Hn,VBadge:B3,VBanner:R3,VBannerActions:Af,VBannerText:Ef,VBottomNavigation:O3,VBreadcrumbs:L3,VBreadcrumbsDivider:Pf,VBreadcrumbsItem:Tf,VBtn:gc,VBtnGroup:cl,VBtnToggle:Cg,VCard:F3,VCardActions:$f,VCardItem:Rf,VCardSubtitle:Mf,VCardText:Of,VCardTitle:Bf,VCarousel:Y3,VCarouselItem:G3,VCheckbox:Wg,VCheckboxBtn:Nt,VChip:Da,VChipGroup:Yg,VClassIcon:tr,VCode:X3,VCol:z4,VColorPicker:A4,VCombobox:P4,VComponentIcon:Zu,VContainer:F4,VCounter:Ws,VDefaultsProvider:Be,VDialog:T4,VDialogBottomTransition:ug,VDialogTopTransition:lg,VDialogTransition:Fs,VDivider:sf,VExpandTransition:Ns,VExpandXTransition:sr,VExpansionPanel:B4,VExpansionPanelText:Jf,VExpansionPanelTitle:Zf,VExpansionPanels:M4,VFabTransition:sg,VFadeTransition:Ju,VField:Na,VFieldLabel:da,VFileInput:R4,VFooter:O4,VForm:L4,VHover:Q4,VIcon:Ue,VImg:Xt,VInput:lc,VItem:J4,VItemGroup:Z4,VKbd:e5,VLabel:ta,VLayout:c5,VLayoutItem:n5,VLazy:t5,VLigatureIcon:Dh,VList:Gs,VListGroup:sl,VListImg:r3,VListItem:pn,VListItemAction:i3,VListItemMedia:o3,VListItemSubtitle:mf,VListItemTitle:vf,VListSubheader:yf,VLocaleProvider:a5,VMain:s5,VMenu:Qs,VMessages:Qd,VNavigationDrawer:m5,VNoSsr:v5,VOverlay:Sn,VPagination:b5,VParallax:g5,VProgressCircular:or,VProgressLinear:dr,VRadio:j5,VRadioGroup:q5,VRangeSlider:k5,VRating:p5,VResponsive:$d,VRow:G4,VScaleTransition:Td,VScrollXReverseTransition:ig,VScrollXTransition:rg,VScrollYReverseTransition:dg,VScrollYTransition:og,VSelect:E3,VSelectionControl:Ft,VSelectionControlGroup:nf,VSheet:il,VSlideGroup:yl,VSlideGroupItem:_5,VSlideXReverseTransition:mg,VSlideXTransition:fg,VSlideYReverseTransition:vg,VSlideYTransition:ar,VSlider:vl,VSnackbar:C5,VSpacer:X4,VSvgIcon:nr,VSwitch:w5,VSystemBar:x5,VTab:vm,VTable:A5,VTabs:I5,VTextField:mt,VTextarea:E5,VThemeProvider:P5,VTimeline:T5,VTimelineItem:M5,VToolbar:el,VToolbarItems:Rg,VToolbarTitle:ur,VTooltip:B5,VValidation:R5,VVirtualScroll:L5,VWindow:Df,VWindowItem:zf},Symbol.toStringTag,{value:"Module"}));function N5(e,c){const n=c.modifiers||{},t=c.value,{once:a,immediate:s,...u}=n,l=!Object.keys(u).length,{handler:r,options:o}=typeof t=="object"?t:{handler:t,options:{attributes:(u==null?void 0:u.attr)??l,characterData:(u==null?void 0:u.char)??l,childList:(u==null?void 0:u.child)??l,subtree:(u==null?void 0:u.sub)??l}},i=new MutationObserver(function(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],f=arguments.length>1?arguments[1]:void 0;r==null||r(d,f),a&&ym(e,c)});s&&(r==null||r([],i)),e._mutate=Object(e._mutate),e._mutate[c.instance.$.uid]={observer:i},i.observe(e,o)}function ym(e,c){var n;(n=e._mutate)!=null&&n[c.instance.$.uid]&&(e._mutate[c.instance.$.uid].observer.disconnect(),delete e._mutate[c.instance.$.uid])}const D5={mounted:N5,unmounted:ym};function z5(e,c){var a,s;const n=c.value,t={passive:!((a=c.modifiers)!=null&&a.active)};window.addEventListener("resize",n,t),e._onResize=Object(e._onResize),e._onResize[c.instance.$.uid]={handler:n,options:t},(s=c.modifiers)!=null&&s.quiet||n()}function H5(e,c){var a;if(!((a=e._onResize)!=null&&a[c.instance.$.uid]))return;const{handler:n,options:t}=e._onResize[c.instance.$.uid];window.removeEventListener("resize",n,t),delete e._onResize[c.instance.$.uid]}const U5={mounted:z5,unmounted:H5};function bm(e,c){const{self:n=!1}=c.modifiers??{},t=c.value,a=typeof t=="object"&&t.options||{passive:!0},s=typeof t=="function"||"handleEvent"in t?t:t.handler,u=n?e:c.arg?document.querySelector(c.arg):window;u&&(u.addEventListener("scroll",s,a),e._onScroll=Object(e._onScroll),e._onScroll[c.instance.$.uid]={handler:s,options:a,target:n?void 0:u})}function hm(e,c){var s;if(!((s=e._onScroll)!=null&&s[c.instance.$.uid]))return;const{handler:n,options:t,target:a=e}=e._onScroll[c.instance.$.uid];a.removeEventListener("scroll",n,t),delete e._onScroll[c.instance.$.uid]}function W5(e,c){c.value!==c.oldValue&&(hm(e,c),bm(e,c))}const K5={mounted:bm,unmounted:hm,updated:W5},Y5=Object.freeze(Object.defineProperty({__proto__:null,ClickOutside:xf,Intersect:Oa,Mutate:D5,Resize:U5,Ripple:Wn,Scroll:K5,Touch:kr},Symbol.toStringTag,{value:"Module"})),G5=Ad({components:F5,directives:Y5}),Cr=W2(Jv);Cr.use(Ib);Cr.use(G5);Cr.mount("#app");

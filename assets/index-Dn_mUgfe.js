(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function pa(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const le={},Un=[],pt=()=>{},Dp=()=>!1,nr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),_a=t=>t.startsWith("onUpdate:"),Ae=Object.assign,ga=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},kp=Object.prototype.hasOwnProperty,X=(t,e)=>kp.call(t,e),U=Array.isArray,$n=t=>sr(t)==="[object Map]",Mu=t=>sr(t)==="[object Set]",j=t=>typeof t=="function",ye=t=>typeof t=="string",Zt=t=>typeof t=="symbol",ue=t=>t!==null&&typeof t=="object",Lu=t=>(ue(t)||j(t))&&j(t.then)&&j(t.catch),Fu=Object.prototype.toString,sr=t=>Fu.call(t),Mp=t=>sr(t).slice(8,-1),Bu=t=>sr(t)==="[object Object]",ma=t=>ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ys=pa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ir=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Lp=/-(\w)/g,zt=ir(t=>t.replace(Lp,(e,n)=>n?n.toUpperCase():"")),Fp=/\B([A-Z])/g,On=ir(t=>t.replace(Fp,"-$1").toLowerCase()),Uu=ir(t=>t.charAt(0).toUpperCase()+t.slice(1)),$r=ir(t=>t?`on${Uu(t)}`:""),Gt=(t,e)=>!Object.is(t,e),Hr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},$u=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Bp=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let $l;const Hu=()=>$l||($l=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ya(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ye(s)?jp(s):ya(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(ye(t)||ue(t))return t}const Up=/;(?![^(]*\))/g,$p=/:([^]+)/,Hp=/\/\*[^]*?\*\//g;function jp(t){const e={};return t.replace(Hp,"").split(Up).forEach(n=>{if(n){const s=n.split($p);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function va(t){let e="";if(ye(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const s=va(t[n]);s&&(e+=s+" ")}else if(ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Wp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qp=pa(Wp);function ju(t){return!!t||t===""}const Wu=t=>!!(t&&t.__v_isRef===!0),ba=t=>ye(t)?t:t==null?"":U(t)||ue(t)&&(t.toString===Fu||!j(t.toString))?Wu(t)?ba(t.value):JSON.stringify(t,qu,2):String(t),qu=(t,e)=>Wu(e)?qu(t,e.value):$n(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[jr(s,r)+" =>"]=i,n),{})}:Mu(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>jr(n))}:Zt(e)?jr(e):ue(e)&&!U(e)&&!Bu(e)?String(e):e,jr=(t,e="")=>{var n;return Zt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Me;class Vu{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Me,!e&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Me;try{return Me=this,e()}finally{Me=n}}}on(){Me=this}off(){Me=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Ku(t){return new Vu(t)}function zu(){return Me}function Vp(t,e=!1){Me&&Me.cleanups.push(t)}let re;const Wr=new WeakSet;class Gu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Me&&Me.active&&Me.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Wr.has(this)&&(Wr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ju(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Hl(this),Qu(this);const e=re,n=rt;re=this,rt=!0;try{return this.fn()}finally{Xu(this),re=e,rt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ca(e);this.deps=this.depsTail=void 0,Hl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Wr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){wo(this)&&this.run()}get dirty(){return wo(this)}}let Yu=0,Fn;function Ju(t){t.flags|=8,t.next=Fn,Fn=t}function Ea(){Yu++}function wa(){if(--Yu>0)return;let t;for(;Fn;){let e=Fn,n;for(;e;)e.flags&1||(e.flags&=-9),e=e.next;for(e=Fn,Fn=void 0;e;){if(n=e.next,e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Qu(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Xu(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Ca(s),Kp(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function wo(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Zu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Zu(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Os))return;t.globalVersion=Os;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!wo(t)){t.flags&=-3;return}const n=re,s=rt;re=t,rt=!0;try{Qu(t);const i=t.fn(t._value);(e.version===0||Gt(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{re=n,rt=s,Xu(t),t.flags&=-3}}function Ca(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s),!n.subs&&n.computed){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Ca(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Kp(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let rt=!0;const ef=[];function en(){ef.push(rt),rt=!1}function tn(){const t=ef.pop();rt=t===void 0?!0:t}function Hl(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=re;re=void 0;try{e()}finally{re=n}}}let Os=0;class zp{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Sa{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!re||!rt||re===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==re)n=this.activeLink=new zp(re,this),re.deps?(n.prevDep=re.depsTail,re.depsTail.nextDep=n,re.depsTail=n):re.deps=re.depsTail=n,tf(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=re.depsTail,n.nextDep=void 0,re.depsTail.nextDep=n,re.depsTail=n,re.deps===n&&(re.deps=s)}return n}trigger(e){this.version++,Os++,this.notify(e)}notify(e){Ea();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{wa()}}}function tf(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)tf(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const xi=new WeakMap,mn=Symbol(""),Co=Symbol(""),xs=Symbol("");function De(t,e,n){if(rt&&re){let s=xi.get(t);s||xi.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new Sa),i.target=t,i.map=s,i.key=n),i.track()}}function Tt(t,e,n,s,i,r){const o=xi.get(t);if(!o){Os++;return}const a=l=>{l&&l.trigger()};if(Ea(),e==="clear")o.forEach(a);else{const l=U(t),c=l&&ma(n);if(l&&n==="length"){const u=Number(s);o.forEach((f,d)=>{(d==="length"||d===xs||!Zt(d)&&d>=u)&&a(f)})}else switch(n!==void 0&&a(o.get(n)),c&&a(o.get(xs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(mn)),$n(t)&&a(o.get(Co)));break;case"delete":l||(a(o.get(mn)),$n(t)&&a(o.get(Co)));break;case"set":$n(t)&&a(o.get(mn));break}}wa()}function Gp(t,e){const n=xi.get(t);return n&&n.get(e)}function Dn(t){const e=$(t);return e===t?e:(De(e,"iterate",xs),Ze(t)?e:e.map(Oe))}function rr(t){return De(t=$(t),"iterate",xs),t}const Yp={__proto__:null,[Symbol.iterator](){return qr(this,Symbol.iterator,Oe)},concat(...t){return Dn(this).concat(...t.map(e=>U(e)?Dn(e):e))},entries(){return qr(this,"entries",t=>(t[1]=Oe(t[1]),t))},every(t,e){return Et(this,"every",t,e,void 0,arguments)},filter(t,e){return Et(this,"filter",t,e,n=>n.map(Oe),arguments)},find(t,e){return Et(this,"find",t,e,Oe,arguments)},findIndex(t,e){return Et(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Et(this,"findLast",t,e,Oe,arguments)},findLastIndex(t,e){return Et(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Et(this,"forEach",t,e,void 0,arguments)},includes(...t){return Vr(this,"includes",t)},indexOf(...t){return Vr(this,"indexOf",t)},join(t){return Dn(this).join(t)},lastIndexOf(...t){return Vr(this,"lastIndexOf",t)},map(t,e){return Et(this,"map",t,e,void 0,arguments)},pop(){return us(this,"pop")},push(...t){return us(this,"push",t)},reduce(t,...e){return jl(this,"reduce",t,e)},reduceRight(t,...e){return jl(this,"reduceRight",t,e)},shift(){return us(this,"shift")},some(t,e){return Et(this,"some",t,e,void 0,arguments)},splice(...t){return us(this,"splice",t)},toReversed(){return Dn(this).toReversed()},toSorted(t){return Dn(this).toSorted(t)},toSpliced(...t){return Dn(this).toSpliced(...t)},unshift(...t){return us(this,"unshift",t)},values(){return qr(this,"values",Oe)}};function qr(t,e,n){const s=rr(t),i=s[e]();return s!==t&&!Ze(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const Jp=Array.prototype;function Et(t,e,n,s,i,r){const o=rr(t),a=o!==t&&!Ze(t),l=o[e];if(l!==Jp[e]){const f=l.apply(t,r);return a?Oe(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,Oe(f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,s);return a&&i?i(u):u}function jl(t,e,n,s){const i=rr(t);let r=n;return i!==t&&(Ze(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,Oe(a),l,t)}),i[e](r,...s)}function Vr(t,e,n){const s=$(t);De(s,"iterate",xs);const i=s[e](...n);return(i===-1||i===!1)&&Na(n[0])?(n[0]=$(n[0]),s[e](...n)):i}function us(t,e,n=[]){en(),Ea();const s=$(t)[e].apply(t,n);return wa(),tn(),s}const Qp=pa("__proto__,__v_isRef,__isVue"),nf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Zt));function Xp(t){Zt(t)||(t=String(t));const e=$(this);return De(e,"has",t),e.hasOwnProperty(t)}class sf{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?f_:lf:r?af:of).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=U(e);if(!i){let l;if(o&&(l=Yp[n]))return l;if(n==="hasOwnProperty")return Xp}const a=Reflect.get(e,n,he(e)?e:s);return(Zt(n)?nf.has(n):Qp(n))||(i||De(e,"get",n),r)?a:he(a)?o&&ma(n)?a:a.value:ue(a)?i?cf(a):vt(a):a}}class rf extends sf{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const l=bn(r);if(!Ze(s)&&!bn(s)&&(r=$(r),s=$(s)),!U(e)&&he(r)&&!he(s))return l?!1:(r.value=s,!0)}const o=U(e)&&ma(n)?Number(n)<e.length:X(e,n),a=Reflect.set(e,n,s,he(e)?e:i);return e===$(i)&&(o?Gt(s,r)&&Tt(e,"set",n,s):Tt(e,"add",n,s)),a}deleteProperty(e,n){const s=X(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Tt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Zt(n)||!nf.has(n))&&De(e,"has",n),s}ownKeys(e){return De(e,"iterate",U(e)?"length":mn),Reflect.ownKeys(e)}}class Zp extends sf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const e_=new rf,t_=new Zp,n_=new rf(!0);const Ta=t=>t,or=t=>Reflect.getPrototypeOf(t);function fi(t,e,n=!1,s=!1){t=t.__v_raw;const i=$(t),r=$(e);n||(Gt(e,r)&&De(i,"get",e),De(i,"get",r));const{has:o}=or(i),a=s?Ta:n?Oa:Oe;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function di(t,e=!1){const n=this.__v_raw,s=$(n),i=$(t);return e||(Gt(t,i)&&De(s,"has",t),De(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function hi(t,e=!1){return t=t.__v_raw,!e&&De($(t),"iterate",mn),Reflect.get(t,"size",t)}function Wl(t,e=!1){!e&&!Ze(t)&&!bn(t)&&(t=$(t));const n=$(this);return or(n).has.call(n,t)||(n.add(t),Tt(n,"add",t,t)),this}function ql(t,e,n=!1){!n&&!Ze(e)&&!bn(e)&&(e=$(e));const s=$(this),{has:i,get:r}=or(s);let o=i.call(s,t);o||(t=$(t),o=i.call(s,t));const a=r.call(s,t);return s.set(t,e),o?Gt(e,a)&&Tt(s,"set",t,e):Tt(s,"add",t,e),this}function Vl(t){const e=$(this),{has:n,get:s}=or(e);let i=n.call(e,t);i||(t=$(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Tt(e,"delete",t,void 0),r}function Kl(){const t=$(this),e=t.size!==0,n=t.clear();return e&&Tt(t,"clear",void 0,void 0),n}function pi(t,e){return function(s,i){const r=this,o=r.__v_raw,a=$(o),l=e?Ta:t?Oa:Oe;return!t&&De(a,"iterate",mn),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function _i(t,e,n){return function(...s){const i=this.__v_raw,r=$(i),o=$n(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Ta:e?Oa:Oe;return!e&&De(r,"iterate",l?Co:mn),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Lt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function s_(){const t={get(r){return fi(this,r)},get size(){return hi(this)},has:di,add:Wl,set:ql,delete:Vl,clear:Kl,forEach:pi(!1,!1)},e={get(r){return fi(this,r,!1,!0)},get size(){return hi(this)},has:di,add(r){return Wl.call(this,r,!0)},set(r,o){return ql.call(this,r,o,!0)},delete:Vl,clear:Kl,forEach:pi(!1,!0)},n={get(r){return fi(this,r,!0)},get size(){return hi(this,!0)},has(r){return di.call(this,r,!0)},add:Lt("add"),set:Lt("set"),delete:Lt("delete"),clear:Lt("clear"),forEach:pi(!0,!1)},s={get(r){return fi(this,r,!0,!0)},get size(){return hi(this,!0)},has(r){return di.call(this,r,!0)},add:Lt("add"),set:Lt("set"),delete:Lt("delete"),clear:Lt("clear"),forEach:pi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=_i(r,!1,!1),n[r]=_i(r,!0,!1),e[r]=_i(r,!1,!0),s[r]=_i(r,!0,!0)}),[t,n,e,s]}const[i_,r_,o_,a_]=s_();function Ia(t,e){const n=e?t?a_:o_:t?r_:i_;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(X(n,i)&&i in s?n:s,i,r)}const l_={get:Ia(!1,!1)},c_={get:Ia(!1,!0)},u_={get:Ia(!0,!1)};const of=new WeakMap,af=new WeakMap,lf=new WeakMap,f_=new WeakMap;function d_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function h_(t){return t.__v_skip||!Object.isExtensible(t)?0:d_(Mp(t))}function vt(t){return bn(t)?t:Aa(t,!1,e_,l_,of)}function p_(t){return Aa(t,!1,n_,c_,af)}function cf(t){return Aa(t,!0,t_,u_,lf)}function Aa(t,e,n,s,i){if(!ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=h_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function It(t){return bn(t)?It(t.__v_raw):!!(t&&t.__v_isReactive)}function bn(t){return!!(t&&t.__v_isReadonly)}function Ze(t){return!!(t&&t.__v_isShallow)}function Na(t){return t?!!t.__v_raw:!1}function $(t){const e=t&&t.__v_raw;return e?$(e):t}function Ra(t){return!X(t,"__v_skip")&&Object.isExtensible(t)&&$u(t,"__v_skip",!0),t}const Oe=t=>ue(t)?vt(t):t,Oa=t=>ue(t)?cf(t):t;function he(t){return t?t.__v_isRef===!0:!1}function nt(t){return __(t,!1)}function __(t,e){return he(t)?t:new g_(t,e)}class g_{constructor(e,n){this.dep=new Sa,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:$(e),this._value=n?e:Oe(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Ze(e)||bn(e);e=s?e:$(e),Gt(e,n)&&(this._rawValue=e,this._value=s?e:Oe(e),this.dep.trigger())}}function Ut(t){return he(t)?t.value:t}const m_={get:(t,e,n)=>e==="__v_raw"?t:Ut(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return he(i)&&!he(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function uf(t){return It(t)?t:new Proxy(t,m_)}function y_(t){const e=U(t)?new Array(t.length):{};for(const n in t)e[n]=ff(t,n);return e}class v_{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Gp($(this._object),this._key)}}class b_{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function E_(t,e,n){return he(t)?t:j(t)?new b_(t):ue(t)&&arguments.length>1?ff(t,e,n):nt(t)}function ff(t,e,n){const s=t[e];return he(s)?s:new v_(t,e,n)}class w_{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Sa(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Os-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&re!==this)return Ju(this),!0}get value(){const e=this.dep.track();return Zu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function C_(t,e,n=!1){let s,i;return j(t)?s=t:(s=t.get,i=t.set),new w_(s,i,n)}const gi={},Pi=new WeakMap;let un;function S_(t,e=!1,n=un){if(n){let s=Pi.get(n);s||Pi.set(n,s=[]),s.push(t)}}function T_(t,e,n=le){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:l}=n,c=O=>i?O:Ze(O)||i===!1||i===0?jt(O,1):jt(O);let u,f,d,g,_=!1,v=!1;if(he(t)?(f=()=>t.value,_=Ze(t)):It(t)?(f=()=>c(t),_=!0):U(t)?(v=!0,_=t.some(O=>It(O)||Ze(O)),f=()=>t.map(O=>{if(he(O))return O.value;if(It(O))return c(O);if(j(O))return l?l(O,2):O()})):j(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){en();try{d()}finally{tn()}}const O=un;un=u;try{return l?l(t,3,[g]):t(g)}finally{un=O}}:f=pt,e&&i){const O=f,M=i===!0?1/0:i;f=()=>jt(O(),M)}const E=zu(),x=()=>{u.stop(),E&&ga(E.effects,u)};if(r&&e){const O=e;e=(...M)=>{O(...M),x()}}let P=v?new Array(t.length).fill(gi):gi;const D=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(e){const M=u.run();if(i||_||(v?M.some((fe,de)=>Gt(fe,P[de])):Gt(M,P))){d&&d();const fe=un;un=u;try{const de=[M,P===gi?void 0:v&&P[0]===gi?[]:P,g];l?l(e,3,de):e(...de),P=M}finally{un=fe}}}else u.run()};return a&&a(D),u=new Gu(f),u.scheduler=o?()=>o(D,!1):D,g=O=>S_(O,!1,u),d=u.onStop=()=>{const O=Pi.get(u);if(O){if(l)l(O,4);else for(const M of O)M();Pi.delete(u)}},e?s?D(!0):P=u.run():o?o(D.bind(null,!0),!0):u.run(),x.pause=u.pause.bind(u),x.resume=u.resume.bind(u),x.stop=x,x}function jt(t,e=1/0,n){if(e<=0||!ue(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,he(t))jt(t.value,e,n);else if(U(t))for(let s=0;s<t.length;s++)jt(t[s],e,n);else if(Mu(t)||$n(t))t.forEach(s=>{jt(s,e,n)});else if(Bu(t)){for(const s in t)jt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&jt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qs(t,e,n,s){try{return s?t(...s):t()}catch(i){ar(i,e,n)}}function gt(t,e,n,s){if(j(t)){const i=Qs(t,e,n,s);return i&&Lu(i)&&i.catch(r=>{ar(r,e,n)}),i}if(U(t)){const i=[];for(let r=0;r<t.length;r++)i.push(gt(t[r],e,n,s));return i}}function ar(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||le;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(r){en(),Qs(r,null,10,[t,l,c]),tn();return}}I_(t,n,i,s,o)}function I_(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}let Ps=!1,So=!1;const Le=[];let dt=0;const Hn=[];let $t=null,Ln=0;const df=Promise.resolve();let xa=null;function Xs(t){const e=xa||df;return t?e.then(this?t.bind(this):t):e}function A_(t){let e=Ps?dt+1:0,n=Le.length;for(;e<n;){const s=e+n>>>1,i=Le[s],r=Ds(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function Pa(t){if(!(t.flags&1)){const e=Ds(t),n=Le[Le.length-1];!n||!(t.flags&2)&&e>=Ds(n)?Le.push(t):Le.splice(A_(e),0,t),t.flags|=1,hf()}}function hf(){!Ps&&!So&&(So=!0,xa=df.then(_f))}function N_(t){U(t)?Hn.push(...t):$t&&t.id===-1?$t.splice(Ln+1,0,t):t.flags&1||(Hn.push(t),t.flags|=1),hf()}function zl(t,e,n=Ps?dt+1:0){for(;n<Le.length;n++){const s=Le[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Le.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function pf(t){if(Hn.length){const e=[...new Set(Hn)].sort((n,s)=>Ds(n)-Ds(s));if(Hn.length=0,$t){$t.push(...e);return}for($t=e,Ln=0;Ln<$t.length;Ln++){const n=$t[Ln];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}$t=null,Ln=0}}const Ds=t=>t.id==null?t.flags&2?-1:1/0:t.id;function _f(t){So=!1,Ps=!0;try{for(dt=0;dt<Le.length;dt++){const e=Le[dt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Qs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;dt<Le.length;dt++){const e=Le[dt];e&&(e.flags&=-2)}dt=0,Le.length=0,pf(),Ps=!1,xa=null,(Le.length||Hn.length)&&_f()}}let st=null,gf=null;function Di(t){const e=st;return st=t,gf=t&&t.type.__scopeId||null,e}function R_(t,e=st,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&tc(-1);const r=Di(e);let o;try{o=t(...i)}finally{Di(r),s._d&&tc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ln(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(en(),gt(l,n,8,[t.el,a,t,e]),tn())}}const O_=Symbol("_vte"),x_=t=>t.__isTeleport;function Da(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Da(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function nn(t,e){return j(t)?Ae({name:t.name},e,{setup:t}):t}function mf(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function To(t,e,n,s,i=!1){if(U(t)){t.forEach((_,v)=>To(_,e&&(U(e)?e[v]:e),n,s,i));return}if(vs(s)&&!i)return;const r=s.shapeFlag&4?Ba(s.component):s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===le?a.refs={}:a.refs,f=a.setupState,d=$(f),g=f===le?()=>!1:_=>X(d,_);if(c!=null&&c!==l&&(ye(c)?(u[c]=null,g(c)&&(f[c]=null)):he(c)&&(c.value=null)),j(l))Qs(l,a,12,[o,u]);else{const _=ye(l),v=he(l);if(_||v){const E=()=>{if(t.f){const x=_?g(l)?f[l]:u[l]:l.value;i?U(x)&&ga(x,r):U(x)?x.includes(r)||x.push(r):_?(u[l]=[r],g(l)&&(f[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else _?(u[l]=o,g(l)&&(f[l]=o)):v&&(l.value=o,t.k&&(u[t.k]=o))};o?(E.id=-1,Ke(E,n)):E()}}}const vs=t=>!!t.type.__asyncLoader,yf=t=>t.type.__isKeepAlive;function P_(t,e){vf(t,"a",e)}function D_(t,e){vf(t,"da",e)}function vf(t,e,n=xe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(lr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)yf(i.parent.vnode)&&k_(s,e,n,i),i=i.parent}}function k_(t,e,n,s){const i=lr(e,t,s,!0);ur(()=>{ga(s[e],i)},n)}function lr(t,e,n=xe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{en();const a=Zs(n),l=gt(e,n,t,o);return a(),tn(),l});return s?i.unshift(r):i.push(r),r}}const Pt=t=>(e,n=xe)=>{(!hr||t==="sp")&&lr(t,(...s)=>e(...s),n)},M_=Pt("bm"),cr=Pt("m"),L_=Pt("bu"),F_=Pt("u"),B_=Pt("bum"),ur=Pt("um"),U_=Pt("sp"),$_=Pt("rtg"),H_=Pt("rtc");function j_(t,e=xe){lr("ec",t,e)}const W_=Symbol.for("v-ndc");function bf(t,e,n,s){let i;const r=n,o=U(t);if(o||ye(t)){const a=o&&It(t);let l=!1;a&&(l=!Ze(t),t=rr(t)),i=new Array(t.length);for(let c=0,u=t.length;c<u;c++)i[c]=e(l?Oe(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,r)}else if(ue(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=e(t[u],u,l,r)}}else i=[];return i}const Io=t=>t?Bf(t)?Ba(t):Io(t.parent):null,bs=Ae(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Io(t.parent),$root:t=>Io(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ka(t),$forceUpdate:t=>t.f||(t.f=()=>{Pa(t.update)}),$nextTick:t=>t.n||(t.n=Xs.bind(t.proxy)),$watch:t=>dg.bind(t)}),Kr=(t,e)=>t!==le&&!t.__isScriptSetup&&X(t,e),q_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Kr(s,e))return o[e]=1,s[e];if(i!==le&&X(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&X(c,e))return o[e]=3,r[e];if(n!==le&&X(n,e))return o[e]=4,n[e];Ao&&(o[e]=0)}}const u=bs[e];let f,d;if(u)return e==="$attrs"&&De(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==le&&X(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,X(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Kr(i,e)?(i[e]=n,!0):s!==le&&X(s,e)?(s[e]=n,!0):X(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==le&&X(t,o)||Kr(e,o)||(a=r[0])&&X(a,o)||X(s,o)||X(bs,o)||X(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:X(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Gl(t){return U(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ao=!0;function V_(t){const e=ka(t),n=t.proxy,s=t.ctx;Ao=!1,e.beforeCreate&&Yl(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:g,updated:_,activated:v,deactivated:E,beforeDestroy:x,beforeUnmount:P,destroyed:D,unmounted:O,render:M,renderTracked:fe,renderTriggered:de,errorCaptured:W,serverPrefetch:G,expose:me,inheritAttrs:Je,components:lt,directives:Mt,filters:os}=e;if(c&&K_(c,s,null),o)for(const z in o){const se=o[z];j(se)&&(s[z]=se.bind(n))}if(i){const z=i.call(n,n);ue(z)&&(t.data=vt(z))}if(Ao=!0,r)for(const z in r){const se=r[z],on=j(se)?se.bind(n,n):j(se.get)?se.get.bind(n,n):pt,ci=!j(se)&&j(se.set)?se.set.bind(n):pt,an=be({get:on,set:ci});Object.defineProperty(s,z,{enumerable:!0,configurable:!0,get:()=>an.value,set:ct=>an.value=ct})}if(a)for(const z in a)Ef(a[z],s,n,z);if(l){const z=j(l)?l.call(n):l;Reflect.ownKeys(z).forEach(se=>{X_(se,z[se])})}u&&Yl(u,t,"c");function ge(z,se){U(se)?se.forEach(on=>z(on.bind(n))):se&&z(se.bind(n))}if(ge(M_,f),ge(cr,d),ge(L_,g),ge(F_,_),ge(P_,v),ge(D_,E),ge(j_,W),ge(H_,fe),ge($_,de),ge(B_,P),ge(ur,O),ge(U_,G),U(me))if(me.length){const z=t.exposed||(t.exposed={});me.forEach(se=>{Object.defineProperty(z,se,{get:()=>n[se],set:on=>n[se]=on})})}else t.exposed||(t.exposed={});M&&t.render===pt&&(t.render=M),Je!=null&&(t.inheritAttrs=Je),lt&&(t.components=lt),Mt&&(t.directives=Mt),G&&mf(t)}function K_(t,e,n=pt){U(t)&&(t=No(t));for(const s in t){const i=t[s];let r;ue(i)?"default"in i?r=Es(i.from||s,i.default,!0):r=Es(i.from||s):r=Es(i),he(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Yl(t,e,n){gt(U(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ef(t,e,n,s){let i=s.includes(".")?kf(n,s):()=>n[s];if(ye(t)){const r=e[t];j(r)&&wi(i,r)}else if(j(t))wi(i,t.bind(n));else if(ue(t))if(U(t))t.forEach(r=>Ef(r,e,n,s));else{const r=j(t.handler)?t.handler.bind(n):e[t.handler];j(r)&&wi(i,r,t)}}function ka(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>ki(l,c,o,!0)),ki(l,e,o)),ue(e)&&r.set(e,l),l}function ki(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&ki(t,r,n,!0),i&&i.forEach(o=>ki(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=z_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const z_={data:Jl,props:Ql,emits:Ql,methods:ms,computed:ms,beforeCreate:ke,created:ke,beforeMount:ke,mounted:ke,beforeUpdate:ke,updated:ke,beforeDestroy:ke,beforeUnmount:ke,destroyed:ke,unmounted:ke,activated:ke,deactivated:ke,errorCaptured:ke,serverPrefetch:ke,components:ms,directives:ms,watch:Y_,provide:Jl,inject:G_};function Jl(t,e){return e?t?function(){return Ae(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function G_(t,e){return ms(No(t),No(e))}function No(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ke(t,e){return t?[...new Set([].concat(t,e))]:e}function ms(t,e){return t?Ae(Object.create(null),t,e):e}function Ql(t,e){return t?U(t)&&U(e)?[...new Set([...t,...e])]:Ae(Object.create(null),Gl(t),Gl(e??{})):e}function Y_(t,e){if(!t)return e;if(!e)return t;const n=Ae(Object.create(null),t);for(const s in e)n[s]=ke(t[s],e[s]);return n}function wf(){return{app:null,config:{isNativeTag:Dp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let J_=0;function Q_(t,e){return function(s,i=null){j(s)||(s=Ae({},s)),i!=null&&!ue(i)&&(i=null);const r=wf(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:J_++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Dg,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&j(u.install)?(o.add(u),u.install(c,...f)):j(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const g=c._ceVNode||J(s,i);return g.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),f&&e?e(g,u):t(g,u,d),l=!0,c._container=u,u.__vue_app__=c,Ba(g.component)}},onUnmount(u){a.push(u)},unmount(){l&&(gt(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=yn;yn=c;try{return u()}finally{yn=f}}};return c}}let yn=null;function X_(t,e){if(xe){let n=xe.provides;const s=xe.parent&&xe.parent.provides;s===n&&(n=xe.provides=Object.create(s)),n[t]=e}}function Es(t,e,n=!1){const s=xe||st;if(s||yn){const i=yn?yn._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&j(e)?e.call(s&&s.proxy):e}}function Z_(){return!!(xe||st||yn)}const Cf={},Sf=()=>Object.create(Cf),Tf=t=>Object.getPrototypeOf(t)===Cf;function eg(t,e,n,s=!1){const i={},r=Sf();t.propsDefaults=Object.create(null),If(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:p_(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function tg(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=$(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(fr(t.emitsOptions,d))continue;const g=e[d];if(l)if(X(r,d))g!==r[d]&&(r[d]=g,c=!0);else{const _=zt(d);i[_]=Ro(l,a,_,g,t,!1)}else g!==r[d]&&(r[d]=g,c=!0)}}}else{If(t,e,i,r)&&(c=!0);let u;for(const f in a)(!e||!X(e,f)&&((u=On(f))===f||!X(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=Ro(l,a,f,void 0,t,!0)):delete i[f]);if(r!==a)for(const f in r)(!e||!X(e,f))&&(delete r[f],c=!0)}c&&Tt(t.attrs,"set","")}function If(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ys(l))continue;const c=e[l];let u;i&&X(i,u=zt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:fr(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=$(n),c=a||le;for(let u=0;u<r.length;u++){const f=r[u];n[f]=Ro(i,l,f,c[f],t,!X(c,f))}}return o}function Ro(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=X(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&j(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Zs(i);s=c[n]=l.call(null,e),u()}}else s=l;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===On(n))&&(s=!0))}return s}const ng=new WeakMap;function Af(t,e,n=!1){const s=n?ng:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!j(t)){const u=f=>{l=!0;const[d,g]=Af(f,e,!0);Ae(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ue(t)&&s.set(t,Un),Un;if(U(r))for(let u=0;u<r.length;u++){const f=zt(r[u]);Xl(f)&&(o[f]=le)}else if(r)for(const u in r){const f=zt(u);if(Xl(f)){const d=r[u],g=o[f]=U(d)||j(d)?{type:d}:Ae({},d),_=g.type;let v=!1,E=!0;if(U(_))for(let x=0;x<_.length;++x){const P=_[x],D=j(P)&&P.name;if(D==="Boolean"){v=!0;break}else D==="String"&&(E=!1)}else v=j(_)&&_.name==="Boolean";g[0]=v,g[1]=E,(v||X(g,"default"))&&a.push(f)}}const c=[o,a];return ue(t)&&s.set(t,c),c}function Xl(t){return t[0]!=="$"&&!ys(t)}const Nf=t=>t[0]==="_"||t==="$stable",Ma=t=>U(t)?t.map(ht):[ht(t)],sg=(t,e,n)=>{if(e._n)return e;const s=R_((...i)=>Ma(e(...i)),n);return s._c=!1,s},Rf=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Nf(i))continue;const r=t[i];if(j(r))e[i]=sg(i,r,s);else if(r!=null){const o=Ma(r);e[i]=()=>o}}},Of=(t,e)=>{const n=Ma(e);t.slots.default=()=>n},xf=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},ig=(t,e,n)=>{const s=t.slots=Sf();if(t.vnode.shapeFlag&32){const i=e._;i?(xf(s,e,n),n&&$u(s,"_",i,!0)):Rf(e,s)}else e&&Of(t,e)},rg=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=le;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:xf(i,e,n):(r=!e.$stable,Rf(e,i)),o=e}else e&&(Of(t,e),o={default:1});if(r)for(const a in i)!Nf(a)&&o[a]==null&&delete i[a]},Ke=vg;function og(t){return ag(t)}function ag(t,e){const n=Hu();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:g=pt,insertStaticContent:_}=t,v=(h,p,y,C=null,b=null,w=null,N=void 0,A=null,I=!!p.dynamicChildren)=>{if(h===p)return;h&&!fs(h,p)&&(C=ui(h),ct(h,b,w,!0),h=null),p.patchFlag===-2&&(I=!1,p.dynamicChildren=null);const{type:S,ref:L,shapeFlag:R}=p;switch(S){case dr:E(h,p,y,C);break;case ks:x(h,p,y,C);break;case Yr:h==null&&P(p,y,C,N);break;case Qe:lt(h,p,y,C,b,w,N,A,I);break;default:R&1?M(h,p,y,C,b,w,N,A,I):R&6?Mt(h,p,y,C,b,w,N,A,I):(R&64||R&128)&&S.process(h,p,y,C,b,w,N,A,I,ls)}L!=null&&b&&To(L,h&&h.ref,w,p||h,!p)},E=(h,p,y,C)=>{if(h==null)s(p.el=a(p.children),y,C);else{const b=p.el=h.el;p.children!==h.children&&c(b,p.children)}},x=(h,p,y,C)=>{h==null?s(p.el=l(p.children||""),y,C):p.el=h.el},P=(h,p,y,C)=>{[h.el,h.anchor]=_(h.children,p,y,C,h.el,h.anchor)},D=({el:h,anchor:p},y,C)=>{let b;for(;h&&h!==p;)b=d(h),s(h,y,C),h=b;s(p,y,C)},O=({el:h,anchor:p})=>{let y;for(;h&&h!==p;)y=d(h),i(h),h=y;i(p)},M=(h,p,y,C,b,w,N,A,I)=>{p.type==="svg"?N="svg":p.type==="math"&&(N="mathml"),h==null?fe(p,y,C,b,w,N,A,I):G(h,p,b,w,N,A,I)},fe=(h,p,y,C,b,w,N,A)=>{let I,S;const{props:L,shapeFlag:R,transition:k,dirs:B}=h;if(I=h.el=o(h.type,w,L&&L.is,L),R&8?u(I,h.children):R&16&&W(h.children,I,null,C,b,zr(h,w),N,A),B&&ln(h,null,C,"created"),de(I,h,h.scopeId,N,C),L){for(const ie in L)ie!=="value"&&!ys(ie)&&r(I,ie,null,L[ie],w,C);"value"in L&&r(I,"value",null,L.value,w),(S=L.onVnodeBeforeMount)&&ft(S,C,h)}B&&ln(h,null,C,"beforeMount");const Y=lg(b,k);Y&&k.beforeEnter(I),s(I,p,y),((S=L&&L.onVnodeMounted)||Y||B)&&Ke(()=>{S&&ft(S,C,h),Y&&k.enter(I),B&&ln(h,null,C,"mounted")},b)},de=(h,p,y,C,b)=>{if(y&&g(h,y),C)for(let w=0;w<C.length;w++)g(h,C[w]);if(b){let w=b.subTree;if(p===w||Lf(w.type)&&(w.ssContent===p||w.ssFallback===p)){const N=b.vnode;de(h,N,N.scopeId,N.slotScopeIds,b.parent)}}},W=(h,p,y,C,b,w,N,A,I=0)=>{for(let S=I;S<h.length;S++){const L=h[S]=A?Ht(h[S]):ht(h[S]);v(null,L,p,y,C,b,w,N,A)}},G=(h,p,y,C,b,w,N)=>{const A=p.el=h.el;let{patchFlag:I,dynamicChildren:S,dirs:L}=p;I|=h.patchFlag&16;const R=h.props||le,k=p.props||le;let B;if(y&&cn(y,!1),(B=k.onVnodeBeforeUpdate)&&ft(B,y,p,h),L&&ln(p,h,y,"beforeUpdate"),y&&cn(y,!0),(R.innerHTML&&k.innerHTML==null||R.textContent&&k.textContent==null)&&u(A,""),S?me(h.dynamicChildren,S,A,y,C,zr(p,b),w):N||se(h,p,A,null,y,C,zr(p,b),w,!1),I>0){if(I&16)Je(A,R,k,y,b);else if(I&2&&R.class!==k.class&&r(A,"class",null,k.class,b),I&4&&r(A,"style",R.style,k.style,b),I&8){const Y=p.dynamicProps;for(let ie=0;ie<Y.length;ie++){const ee=Y[ie],We=R[ee],Re=k[ee];(Re!==We||ee==="value")&&r(A,ee,We,Re,b,y)}}I&1&&h.children!==p.children&&u(A,p.children)}else!N&&S==null&&Je(A,R,k,y,b);((B=k.onVnodeUpdated)||L)&&Ke(()=>{B&&ft(B,y,p,h),L&&ln(p,h,y,"updated")},C)},me=(h,p,y,C,b,w,N)=>{for(let A=0;A<p.length;A++){const I=h[A],S=p[A],L=I.el&&(I.type===Qe||!fs(I,S)||I.shapeFlag&70)?f(I.el):y;v(I,S,L,null,C,b,w,N,!0)}},Je=(h,p,y,C,b)=>{if(p!==y){if(p!==le)for(const w in p)!ys(w)&&!(w in y)&&r(h,w,p[w],null,b,C);for(const w in y){if(ys(w))continue;const N=y[w],A=p[w];N!==A&&w!=="value"&&r(h,w,A,N,b,C)}"value"in y&&r(h,"value",p.value,y.value,b)}},lt=(h,p,y,C,b,w,N,A,I)=>{const S=p.el=h?h.el:a(""),L=p.anchor=h?h.anchor:a("");let{patchFlag:R,dynamicChildren:k,slotScopeIds:B}=p;B&&(A=A?A.concat(B):B),h==null?(s(S,y,C),s(L,y,C),W(p.children||[],y,L,b,w,N,A,I)):R>0&&R&64&&k&&h.dynamicChildren?(me(h.dynamicChildren,k,y,b,w,N,A),(p.key!=null||b&&p===b.subTree)&&Pf(h,p,!0)):se(h,p,y,L,b,w,N,A,I)},Mt=(h,p,y,C,b,w,N,A,I)=>{p.slotScopeIds=A,h==null?p.shapeFlag&512?b.ctx.activate(p,y,C,N,I):os(p,y,C,b,w,N,I):li(h,p,I)},os=(h,p,y,C,b,w,N)=>{const A=h.component=Ag(h,C,b);if(yf(h)&&(A.ctx.renderer=ls),Ng(A,!1,N),A.asyncDep){if(b&&b.registerDep(A,ge,N),!h.el){const I=A.subTree=J(ks);x(null,I,p,y)}}else ge(A,h,p,y,b,w,N)},li=(h,p,y)=>{const C=p.component=h.component;if(mg(h,p,y))if(C.asyncDep&&!C.asyncResolved){z(C,p,y);return}else C.next=p,C.update();else p.el=h.el,C.vnode=p},ge=(h,p,y,C,b,w,N)=>{const A=()=>{if(h.isMounted){let{next:R,bu:k,u:B,parent:Y,vnode:ie}=h;{const qe=Df(h);if(qe){R&&(R.el=ie.el,z(h,R,N)),qe.asyncDep.then(()=>{h.isUnmounted||A()});return}}let ee=R,We;cn(h,!1),R?(R.el=ie.el,z(h,R,N)):R=ie,k&&Hr(k),(We=R.props&&R.props.onVnodeBeforeUpdate)&&ft(We,Y,R,ie),cn(h,!0);const Re=Gr(h),et=h.subTree;h.subTree=Re,v(et,Re,f(et.el),ui(et),h,b,w),R.el=Re.el,ee===null&&yg(h,Re.el),B&&Ke(B,b),(We=R.props&&R.props.onVnodeUpdated)&&Ke(()=>ft(We,Y,R,ie),b)}else{let R;const{el:k,props:B}=p,{bm:Y,m:ie,parent:ee,root:We,type:Re}=h,et=vs(p);if(cn(h,!1),Y&&Hr(Y),!et&&(R=B&&B.onVnodeBeforeMount)&&ft(R,ee,p),cn(h,!0),k&&Fl){const qe=()=>{h.subTree=Gr(h),Fl(k,h.subTree,h,b,null)};et&&Re.__asyncHydrate?Re.__asyncHydrate(k,h,qe):qe()}else{We.ce&&We.ce._injectChildStyle(Re);const qe=h.subTree=Gr(h);v(null,qe,y,C,h,b,w),p.el=qe.el}if(ie&&Ke(ie,b),!et&&(R=B&&B.onVnodeMounted)){const qe=p;Ke(()=>ft(R,ee,qe),b)}(p.shapeFlag&256||ee&&vs(ee.vnode)&&ee.vnode.shapeFlag&256)&&h.a&&Ke(h.a,b),h.isMounted=!0,p=y=C=null}};h.scope.on();const I=h.effect=new Gu(A);h.scope.off();const S=h.update=I.run.bind(I),L=h.job=I.runIfDirty.bind(I);L.i=h,L.id=h.uid,I.scheduler=()=>Pa(L),cn(h,!0),S()},z=(h,p,y)=>{p.component=h;const C=h.vnode.props;h.vnode=p,h.next=null,tg(h,p.props,C,y),rg(h,p.children,y),en(),zl(h),tn()},se=(h,p,y,C,b,w,N,A,I=!1)=>{const S=h&&h.children,L=h?h.shapeFlag:0,R=p.children,{patchFlag:k,shapeFlag:B}=p;if(k>0){if(k&128){ci(S,R,y,C,b,w,N,A,I);return}else if(k&256){on(S,R,y,C,b,w,N,A,I);return}}B&8?(L&16&&as(S,b,w),R!==S&&u(y,R)):L&16?B&16?ci(S,R,y,C,b,w,N,A,I):as(S,b,w,!0):(L&8&&u(y,""),B&16&&W(R,y,C,b,w,N,A,I))},on=(h,p,y,C,b,w,N,A,I)=>{h=h||Un,p=p||Un;const S=h.length,L=p.length,R=Math.min(S,L);let k;for(k=0;k<R;k++){const B=p[k]=I?Ht(p[k]):ht(p[k]);v(h[k],B,y,null,b,w,N,A,I)}S>L?as(h,b,w,!0,!1,R):W(p,y,C,b,w,N,A,I,R)},ci=(h,p,y,C,b,w,N,A,I)=>{let S=0;const L=p.length;let R=h.length-1,k=L-1;for(;S<=R&&S<=k;){const B=h[S],Y=p[S]=I?Ht(p[S]):ht(p[S]);if(fs(B,Y))v(B,Y,y,null,b,w,N,A,I);else break;S++}for(;S<=R&&S<=k;){const B=h[R],Y=p[k]=I?Ht(p[k]):ht(p[k]);if(fs(B,Y))v(B,Y,y,null,b,w,N,A,I);else break;R--,k--}if(S>R){if(S<=k){const B=k+1,Y=B<L?p[B].el:C;for(;S<=k;)v(null,p[S]=I?Ht(p[S]):ht(p[S]),y,Y,b,w,N,A,I),S++}}else if(S>k)for(;S<=R;)ct(h[S],b,w,!0),S++;else{const B=S,Y=S,ie=new Map;for(S=Y;S<=k;S++){const Ve=p[S]=I?Ht(p[S]):ht(p[S]);Ve.key!=null&&ie.set(Ve.key,S)}let ee,We=0;const Re=k-Y+1;let et=!1,qe=0;const cs=new Array(Re);for(S=0;S<Re;S++)cs[S]=0;for(S=B;S<=R;S++){const Ve=h[S];if(We>=Re){ct(Ve,b,w,!0);continue}let ut;if(Ve.key!=null)ut=ie.get(Ve.key);else for(ee=Y;ee<=k;ee++)if(cs[ee-Y]===0&&fs(Ve,p[ee])){ut=ee;break}ut===void 0?ct(Ve,b,w,!0):(cs[ut-Y]=S+1,ut>=qe?qe=ut:et=!0,v(Ve,p[ut],y,null,b,w,N,A,I),We++)}const Bl=et?cg(cs):Un;for(ee=Bl.length-1,S=Re-1;S>=0;S--){const Ve=Y+S,ut=p[Ve],Ul=Ve+1<L?p[Ve+1].el:C;cs[S]===0?v(null,ut,y,Ul,b,w,N,A,I):et&&(ee<0||S!==Bl[ee]?an(ut,y,Ul,2):ee--)}}},an=(h,p,y,C,b=null)=>{const{el:w,type:N,transition:A,children:I,shapeFlag:S}=h;if(S&6){an(h.component.subTree,p,y,C);return}if(S&128){h.suspense.move(p,y,C);return}if(S&64){N.move(h,p,y,ls);return}if(N===Qe){s(w,p,y);for(let R=0;R<I.length;R++)an(I[R],p,y,C);s(h.anchor,p,y);return}if(N===Yr){D(h,p,y);return}if(C!==2&&S&1&&A)if(C===0)A.beforeEnter(w),s(w,p,y),Ke(()=>A.enter(w),b);else{const{leave:R,delayLeave:k,afterLeave:B}=A,Y=()=>s(w,p,y),ie=()=>{R(w,()=>{Y(),B&&B()})};k?k(w,Y,ie):ie()}else s(w,p,y)},ct=(h,p,y,C=!1,b=!1)=>{const{type:w,props:N,ref:A,children:I,dynamicChildren:S,shapeFlag:L,patchFlag:R,dirs:k,cacheIndex:B}=h;if(R===-2&&(b=!1),A!=null&&To(A,null,y,h,!0),B!=null&&(p.renderCache[B]=void 0),L&256){p.ctx.deactivate(h);return}const Y=L&1&&k,ie=!vs(h);let ee;if(ie&&(ee=N&&N.onVnodeBeforeUnmount)&&ft(ee,p,h),L&6)Pp(h.component,y,C);else{if(L&128){h.suspense.unmount(y,C);return}Y&&ln(h,null,p,"beforeUnmount"),L&64?h.type.remove(h,p,y,ls,C):S&&!S.hasOnce&&(w!==Qe||R>0&&R&64)?as(S,p,y,!1,!0):(w===Qe&&R&384||!b&&L&16)&&as(I,p,y),C&&kl(h)}(ie&&(ee=N&&N.onVnodeUnmounted)||Y)&&Ke(()=>{ee&&ft(ee,p,h),Y&&ln(h,null,p,"unmounted")},y)},kl=h=>{const{type:p,el:y,anchor:C,transition:b}=h;if(p===Qe){xp(y,C);return}if(p===Yr){O(h);return}const w=()=>{i(y),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(h.shapeFlag&1&&b&&!b.persisted){const{leave:N,delayLeave:A}=b,I=()=>N(y,w);A?A(h.el,w,I):I()}else w()},xp=(h,p)=>{let y;for(;h!==p;)y=d(h),i(h),h=y;i(p)},Pp=(h,p,y)=>{const{bum:C,scope:b,job:w,subTree:N,um:A,m:I,a:S}=h;Zl(I),Zl(S),C&&Hr(C),b.stop(),w&&(w.flags|=8,ct(N,h,p,y)),A&&Ke(A,p),Ke(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},as=(h,p,y,C=!1,b=!1,w=0)=>{for(let N=w;N<h.length;N++)ct(h[N],p,y,C,b)},ui=h=>{if(h.shapeFlag&6)return ui(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const p=d(h.anchor||h.el),y=p&&p[O_];return y?d(y):p};let Ur=!1;const Ml=(h,p,y)=>{h==null?p._vnode&&ct(p._vnode,null,null,!0):v(p._vnode||null,h,p,null,null,null,y),p._vnode=h,Ur||(Ur=!0,zl(),pf(),Ur=!1)},ls={p:v,um:ct,m:an,r:kl,mt:os,mc:W,pc:se,pbc:me,n:ui,o:t};let Ll,Fl;return{render:Ml,hydrate:Ll,createApp:Q_(Ml,Ll)}}function zr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function cn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function lg(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Pf(t,e,n=!1){const s=t.children,i=e.children;if(U(s)&&U(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Ht(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Pf(o,a)),a.type===dr&&(a.el=o.el)}}function cg(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Df(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Df(e)}function Zl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ug=Symbol.for("v-scx"),fg=()=>Es(ug);function Ei(t,e){return La(t,null,e)}function wi(t,e,n){return La(t,e,n)}function La(t,e,n=le){const{immediate:s,deep:i,flush:r,once:o}=n,a=Ae({},n);let l;if(hr)if(r==="sync"){const d=fg();l=d.__watcherHandles||(d.__watcherHandles=[])}else if(!e||s)a.once=!0;else{const d=()=>{};return d.stop=pt,d.resume=pt,d.pause=pt,d}const c=xe;a.call=(d,g,_)=>gt(d,c,g,_);let u=!1;r==="post"?a.scheduler=d=>{Ke(d,c&&c.suspense)}:r!=="sync"&&(u=!0,a.scheduler=(d,g)=>{g?d():Pa(d)}),a.augmentJob=d=>{e&&(d.flags|=4),u&&(d.flags|=2,c&&(d.id=c.uid,d.i=c))};const f=T_(t,e,a);return l&&l.push(f),f}function dg(t,e,n){const s=this.proxy,i=ye(t)?t.includes(".")?kf(s,t):()=>s[t]:t.bind(s,s);let r;j(e)?r=e:(r=e.handler,n=e);const o=Zs(this),a=La(i,r.bind(s),n);return o(),a}function kf(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const hg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${zt(e)}Modifiers`]||t[`${On(e)}Modifiers`];function pg(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||le;let i=n;const r=e.startsWith("update:"),o=r&&hg(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>ye(u)?u.trim():u)),o.number&&(i=n.map(Bp)));let a,l=s[a=$r(e)]||s[a=$r(zt(e))];!l&&r&&(l=s[a=$r(On(e))]),l&&gt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,gt(c,t,6,i)}}function Mf(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!j(t)){const l=c=>{const u=Mf(c,e,!0);u&&(a=!0,Ae(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ue(t)&&s.set(t,null),null):(U(r)?r.forEach(l=>o[l]=null):Ae(o,r),ue(t)&&s.set(t,o),o)}function fr(t,e){return!t||!nr(e)?!1:(e=e.slice(2).replace(/Once$/,""),X(t,e[0].toLowerCase()+e.slice(1))||X(t,On(e))||X(t,e))}function Gr(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:g,ctx:_,inheritAttrs:v}=t,E=Di(t);let x,P;try{if(n.shapeFlag&4){const O=i||s,M=O;x=ht(c.call(M,O,u,f,g,d,_)),P=a}else{const O=e;x=ht(O.length>1?O(f,{attrs:a,slots:o,emit:l}):O(f,null)),P=e.props?a:_g(a)}}catch(O){ws.length=0,ar(O,t,1),x=J(ks)}let D=x;if(P&&v!==!1){const O=Object.keys(P),{shapeFlag:M}=D;O.length&&M&7&&(r&&O.some(_a)&&(P=gg(P,r)),D=Cn(D,P,!1,!0))}return n.dirs&&(D=Cn(D,null,!1,!0),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&Da(D,n.transition),x=D,Di(E),x}const _g=t=>{let e;for(const n in t)(n==="class"||n==="style"||nr(n))&&((e||(e={}))[n]=t[n]);return e},gg=(t,e)=>{const n={};for(const s in t)(!_a(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function mg(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?ec(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==s[d]&&!fr(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?ec(s,o,c):!0:!!o;return!1}function ec(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!fr(n,r))return!0}return!1}function yg({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Lf=t=>t.__isSuspense;function vg(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):N_(t)}const Qe=Symbol.for("v-fgt"),dr=Symbol.for("v-txt"),ks=Symbol.for("v-cmt"),Yr=Symbol.for("v-stc"),ws=[];let Ge=null;function En(t=!1){ws.push(Ge=t?null:[])}function bg(){ws.pop(),Ge=ws[ws.length-1]||null}let Ms=1;function tc(t){Ms+=t,t<0&&Ge&&(Ge.hasOnce=!0)}function Eg(t){return t.dynamicChildren=Ms>0?Ge||Un:null,bg(),Ms>0&&Ge&&Ge.push(t),t}function wn(t,e,n,s,i,r){return Eg(Wt(t,e,n,s,i,r,!0))}function Vn(t){return t?t.__v_isVNode===!0:!1}function fs(t,e){return t.type===e.type&&t.key===e.key}const Ff=({key:t})=>t??null,Ci=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ye(t)||he(t)||j(t)?{i:st,r:t,k:e,f:!!n}:t:null);function Wt(t,e=null,n=null,s=0,i=null,r=t===Qe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ff(e),ref:e&&Ci(e),scopeId:gf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:st};return a?(Fa(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=ye(n)?8:16),Ms>0&&!o&&Ge&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ge.push(l),l}const J=wg;function wg(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===W_)&&(t=ks),Vn(t)){const a=Cn(t,e,!0);return n&&Fa(a,n),Ms>0&&!r&&Ge&&(a.shapeFlag&6?Ge[Ge.indexOf(t)]=a:Ge.push(a)),a.patchFlag=-2,a}if(Pg(t)&&(t=t.__vccOpts),e){e=Cg(e);let{class:a,style:l}=e;a&&!ye(a)&&(e.class=va(a)),ue(l)&&(Na(l)&&!U(l)&&(l=Ae({},l)),e.style=ya(l))}const o=ye(t)?1:Lf(t)?128:x_(t)?64:ue(t)?4:j(t)?2:0;return Wt(t,e,n,s,i,o,r,!0)}function Cg(t){return t?Na(t)||Tf(t)?Ae({},t):t:null}function Cn(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?Dt(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Ff(c),ref:e&&e.ref?n&&r?U(r)?r.concat(Ci(e)):[r,Ci(e)]:Ci(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Cn(t.ssContent),ssFallback:t.ssFallback&&Cn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&Da(u,l.clone(u)),u}function Sg(t=" ",e=0){return J(dr,null,t,e)}function ht(t){return t==null||typeof t=="boolean"?J(ks):U(t)?J(Qe,null,t.slice()):Vn(t)?Ht(t):J(dr,null,String(t))}function Ht(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Cn(t)}function Fa(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Fa(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Tf(e)?e._ctx=st:i===3&&st&&(st.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:st},n=32):(e=String(e),s&64?(n=16,e=[Sg(e)]):n=8);t.children=e,t.shapeFlag|=n}function Dt(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=va([e.class,s.class]));else if(i==="style")e.style=ya([e.style,s.style]);else if(nr(i)){const r=e[i],o=s[i];o&&r!==o&&!(U(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function ft(t,e,n,s=null){gt(t,e,7,[n,s])}const Tg=wf();let Ig=0;function Ag(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Tg,r={uid:Ig++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Vu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Af(s,i),emitsOptions:Mf(s,i),emit:null,emitted:null,propsDefaults:le,inheritAttrs:s.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=pg.bind(null,r),t.ce&&t.ce(r),r}let xe=null,Mi,Oo;{const t=Hu(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Mi=e("__VUE_INSTANCE_SETTERS__",n=>xe=n),Oo=e("__VUE_SSR_SETTERS__",n=>hr=n)}const Zs=t=>{const e=xe;return Mi(t),t.scope.on(),()=>{t.scope.off(),Mi(e)}},nc=()=>{xe&&xe.scope.off(),Mi(null)};function Bf(t){return t.vnode.shapeFlag&4}let hr=!1;function Ng(t,e=!1,n=!1){e&&Oo(e);const{props:s,children:i}=t.vnode,r=Bf(t);eg(t,s,r,e),ig(t,i,n);const o=r?Rg(t,e):void 0;return e&&Oo(!1),o}function Rg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,q_);const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?xg(t):null,r=Zs(t);en();const o=Qs(s,t,0,[t.props,i]);if(tn(),r(),Lu(o)){if(vs(t)||mf(t),o.then(nc,nc),e)return o.then(a=>{sc(t,a,e)}).catch(a=>{ar(a,t,0)});t.asyncDep=o}else sc(t,o,e)}else Uf(t,e)}function sc(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ue(e)&&(t.setupState=uf(e)),Uf(t,n)}let ic;function Uf(t,e,n){const s=t.type;if(!t.render){if(!e&&ic&&!s.render){const i=s.template||ka(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Ae(Ae({isCustomElement:r,delimiters:a},o),l);s.render=ic(i,c)}}t.render=s.render||pt}{const i=Zs(t);en();try{V_(t)}finally{tn(),i()}}}const Og={get(t,e){return De(t,"get",""),t[e]}};function xg(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Og),slots:t.slots,emit:t.emit,expose:e}}function Ba(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(uf(Ra(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in bs)return bs[n](t)},has(e,n){return n in e||n in bs}})):t.proxy}function Pg(t){return j(t)&&"__vccOpts"in t}const be=(t,e)=>C_(t,e,hr);function mi(t,e,n){const s=arguments.length;return s===2?ue(e)&&!U(e)?Vn(e)?J(t,null,[e]):J(t,e):J(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Vn(n)&&(n=[n]),J(t,e,n))}const Dg="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xo;const rc=typeof window<"u"&&window.trustedTypes;if(rc)try{xo=rc.createPolicy("vue",{createHTML:t=>t})}catch{}const $f=xo?t=>xo.createHTML(t):t=>t,kg="http://www.w3.org/2000/svg",Mg="http://www.w3.org/1998/Math/MathML",wt=typeof document<"u"?document:null,oc=wt&&wt.createElement("template"),Lg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?wt.createElementNS(kg,t):e==="mathml"?wt.createElementNS(Mg,t):n?wt.createElement(t,{is:n}):wt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>wt.createTextNode(t),createComment:t=>wt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>wt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{oc.innerHTML=$f(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=oc.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Fg=Symbol("_vtc");function Bg(t,e,n){const s=t[Fg];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ac=Symbol("_vod"),Ug=Symbol("_vsh"),$g=Symbol(""),Hg=/(^|;)\s*display\s*:/;function jg(t,e,n){const s=t.style,i=ye(n);let r=!1;if(n&&!i){if(e)if(ye(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Si(s,a,"")}else for(const o in e)n[o]==null&&Si(s,o,"");for(const o in n)o==="display"&&(r=!0),Si(s,o,n[o])}else if(i){if(e!==n){const o=s[$g];o&&(n+=";"+o),s.cssText=n,r=Hg.test(n)}}else e&&t.removeAttribute("style");ac in t&&(t[ac]=r?s.display:"",t[Ug]&&(s.display="none"))}const lc=/\s*!important$/;function Si(t,e,n){if(U(n))n.forEach(s=>Si(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Wg(t,e);lc.test(n)?t.setProperty(On(s),n.replace(lc,""),"important"):t[s]=n}}const cc=["Webkit","Moz","ms"],Jr={};function Wg(t,e){const n=Jr[e];if(n)return n;let s=zt(e);if(s!=="filter"&&s in t)return Jr[e]=s;s=Uu(s);for(let i=0;i<cc.length;i++){const r=cc[i]+s;if(r in t)return Jr[e]=r}return e}const uc="http://www.w3.org/1999/xlink";function fc(t,e,n,s,i,r=qp(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(uc,e.slice(6,e.length)):t.setAttributeNS(uc,e,n):n==null||r&&!ju(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Zt(n)?String(n):n)}function dc(t,e,n,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?$f(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const o=i==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?t.type==="checkbox"?"on":"":String(n);(o!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let r=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=ju(n):n==null&&o==="string"?(n="",r=!0):o==="number"&&(n=0,r=!0)}try{t[e]=n}catch{}r&&t.removeAttribute(e)}function qg(t,e,n,s){t.addEventListener(e,n,s)}function Vg(t,e,n,s){t.removeEventListener(e,n,s)}const hc=Symbol("_vei");function Kg(t,e,n,s,i=null){const r=t[hc]||(t[hc]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=zg(e);if(s){const c=r[e]=Jg(s,i);qg(t,a,c,l)}else o&&(Vg(t,a,o,l),r[e]=void 0)}}const pc=/(?:Once|Passive|Capture)$/;function zg(t){let e;if(pc.test(t)){e={};let s;for(;s=t.match(pc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):On(t.slice(2)),e]}let Qr=0;const Gg=Promise.resolve(),Yg=()=>Qr||(Gg.then(()=>Qr=0),Qr=Date.now());function Jg(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;gt(Qg(s,n.value),e,5,[s])};return n.value=t,n.attached=Yg(),n}function Qg(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const _c=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Xg=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Bg(t,s,o):e==="style"?jg(t,n,s):nr(e)?_a(e)||Kg(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Zg(t,e,s,o))?(dc(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&fc(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ye(s))?dc(t,zt(e),s):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),fc(t,e,s,o))};function Zg(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&_c(e)&&j(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return _c(e)&&ye(n)?!1:e in t}const em=Ae({patchProp:Xg},Lg);let gc;function tm(){return gc||(gc=og(em))}const Hf=(...t)=>{const e=tm().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=sm(s);if(!i)return;const r=e._component;!j(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,nm(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function nm(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function sm(t){return ye(t)?document.querySelector(t):t}var im=!1;/*!
 * pinia v2.2.4
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let jf;const pr=t=>jf=t,Wf=Symbol();function Po(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Cs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Cs||(Cs={}));function rm(){const t=Ku(!0),e=t.run(()=>nt({}));let n=[],s=[];const i=Ra({install(r){pr(i),i._a=r,r.provide(Wf,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!im?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const qf=()=>{};function mc(t,e,n,s=qf){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&zu()&&Vp(i),i}function kn(t,...e){t.slice().forEach(n=>{n(...e)})}const om=t=>t(),yc=Symbol(),Xr=Symbol();function Do(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];Po(i)&&Po(s)&&t.hasOwnProperty(n)&&!he(s)&&!It(s)?t[n]=Do(i,s):t[n]=s}return t}const am=Symbol();function lm(t){return!Po(t)||!t.hasOwnProperty(am)}const{assign:Bt}=Object;function cm(t){return!!(he(t)&&t.effect)}function um(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=y_(n.state.value[t]);return Bt(u,r,Object.keys(o||{}).reduce((f,d)=>(f[d]=Ra(be(()=>{pr(n);const g=n._s.get(t);return o[d].call(g,g)})),f),{}))}return l=Vf(t,c,e,n,s,!0),l}function Vf(t,e,n={},s,i,r){let o;const a=Bt({actions:{}},n),l={deep:!0};let c,u,f=[],d=[],g;const _=s.state.value[t];!r&&!_&&(s.state.value[t]={}),nt({});let v;function E(W){let G;c=u=!1,typeof W=="function"?(W(s.state.value[t]),G={type:Cs.patchFunction,storeId:t,events:g}):(Do(s.state.value[t],W),G={type:Cs.patchObject,payload:W,storeId:t,events:g});const me=v=Symbol();Xs().then(()=>{v===me&&(c=!0)}),u=!0,kn(f,G,s.state.value[t])}const x=r?function(){const{state:G}=n,me=G?G():{};this.$patch(Je=>{Bt(Je,me)})}:qf;function P(){o.stop(),f=[],d=[],s._s.delete(t)}const D=(W,G="")=>{if(yc in W)return W[Xr]=G,W;const me=function(){pr(s);const Je=Array.from(arguments),lt=[],Mt=[];function os(z){lt.push(z)}function li(z){Mt.push(z)}kn(d,{args:Je,name:me[Xr],store:M,after:os,onError:li});let ge;try{ge=W.apply(this&&this.$id===t?this:M,Je)}catch(z){throw kn(Mt,z),z}return ge instanceof Promise?ge.then(z=>(kn(lt,z),z)).catch(z=>(kn(Mt,z),Promise.reject(z))):(kn(lt,ge),ge)};return me[yc]=!0,me[Xr]=G,me},O={_p:s,$id:t,$onAction:mc.bind(null,d),$patch:E,$reset:x,$subscribe(W,G={}){const me=mc(f,W,G.detached,()=>Je()),Je=o.run(()=>wi(()=>s.state.value[t],lt=>{(G.flush==="sync"?u:c)&&W({storeId:t,type:Cs.direct,events:g},lt)},Bt({},l,G)));return me},$dispose:P},M=vt(O);s._s.set(t,M);const de=(s._a&&s._a.runWithContext||om)(()=>s._e.run(()=>(o=Ku()).run(()=>e({action:D}))));for(const W in de){const G=de[W];if(he(G)&&!cm(G)||It(G))r||(_&&lm(G)&&(he(G)?G.value=_[W]:Do(G,_[W])),s.state.value[t][W]=G);else if(typeof G=="function"){const me=D(G,W);de[W]=me,a.actions[W]=G}}return Bt(M,de),Bt($(M),de),Object.defineProperty(M,"$state",{get:()=>s.state.value[t],set:W=>{E(G=>{Bt(G,W)})}}),s._p.forEach(W=>{Bt(M,o.run(()=>W({store:M,app:s._a,pinia:s,options:a})))}),_&&r&&n.hydrate&&n.hydrate(M.$state,_),c=!0,u=!0,M}function Kf(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(a,l){const c=Z_();return a=a||(c?Es(Wf,null):null),a&&pr(a),a=jf,a._s.has(s)||(r?Vf(s,e,i,a):um(s,i,a)),a._s.get(s)}return o.$id=s,o}function zf(t){{t=$(t);const e={};for(const n in t){const s=t[n];(he(s)||It(s))&&(e[n]=E_(t,n))}return e}}const fm=t=>t.split(":",2).join(":"),dm=t=>t.reduce((e,n)=>(e[fm(n.time)]={...n},e),{}),vc=Kf("task-store",()=>{const t=nt();return{table:t,initTable:async n=>{t.value={titles:["Time",n.user_name],fields:Object.entries(dm(n.tasks??[])).sort((s,i)=>s[0].localeCompare(i[0]))}}}}),Gf=Kf("useNotificationStore",()=>{const t=nt(localStorage.getItem("notification")),e=be(()=>t.value==="true"),n=i=>{t.value=i,localStorage.setItem("notification",t.value)};return{notificationAvailable:e,showModalForNotification:()=>{localStorage.getItem("notification")||n(confirm("Do you agree to the notifications?")?"true":"false")}}}),hm=["value"],pm=nn({__name:"TableField",props:{id:{},description:{},time:{}},emits:["update-task"],setup(t,{emit:e}){const n=t,s=e,i=r=>{var o;s("update-task",n.id,(o=r==null?void 0:r.target)==null?void 0:o.value,n.time)};return(r,o)=>(En(),wn("td",null,[Wt("input",{type:"text",placeholder:"Assign a task...",value:r.description,onChange:i},null,40,hm)]))}}),_m=nn({__name:"TableTitles",props:{titles:{}},setup(t){return(e,n)=>(En(!0),wn(Qe,null,bf(e.titles,(s,i)=>(En(),wn("th",{key:i},ba(s),1))),128))}}),gm=nn({__name:"TableRows",props:{fields:{}},emits:["update-task"],setup(t){return(e,n)=>(En(!0),wn(Qe,null,bf(e.fields,(s,i)=>{var r,o,a;return En(),wn("tr",{key:i},[Wt("td",null,ba(s[0]),1),J(Ut(pm),{id:(r=s[1])==null?void 0:r.id,description:(o=s[1])==null?void 0:o.description,time:(a=s[1])==null?void 0:a.time,onUpdateTask:n[0]||(n[0]=(l,c,u)=>e.$emit("update-task",l,c,u))},null,8,["id","description","time"])])}),128))}});function Yf(t,e){return function(){return t.apply(e,arguments)}}const{toString:mm}=Object.prototype,{getPrototypeOf:Ua}=Object,_r=(t=>e=>{const n=mm.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),at=t=>(t=t.toLowerCase(),e=>_r(e)===t),gr=t=>e=>typeof e===t,{isArray:Zn}=Array,Ls=gr("undefined");function ym(t){return t!==null&&!Ls(t)&&t.constructor!==null&&!Ls(t.constructor)&&Ye(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Jf=at("ArrayBuffer");function vm(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Jf(t.buffer),e}const bm=gr("string"),Ye=gr("function"),Qf=gr("number"),mr=t=>t!==null&&typeof t=="object",Em=t=>t===!0||t===!1,Ti=t=>{if(_r(t)!=="object")return!1;const e=Ua(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},wm=at("Date"),Cm=at("File"),Sm=at("Blob"),Tm=at("FileList"),Im=t=>mr(t)&&Ye(t.pipe),Am=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Ye(t.append)&&((e=_r(t))==="formdata"||e==="object"&&Ye(t.toString)&&t.toString()==="[object FormData]"))},Nm=at("URLSearchParams"),[Rm,Om,xm,Pm]=["ReadableStream","Request","Response","Headers"].map(at),Dm=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ei(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let s,i;if(typeof t!="object"&&(t=[t]),Zn(t))for(s=0,i=t.length;s<i;s++)e.call(null,t[s],s,t);else{const r=n?Object.getOwnPropertyNames(t):Object.keys(t),o=r.length;let a;for(s=0;s<o;s++)a=r[s],e.call(null,t[a],a,t)}}function Xf(t,e){e=e.toLowerCase();const n=Object.keys(t);let s=n.length,i;for(;s-- >0;)if(i=n[s],e===i.toLowerCase())return i;return null}const hn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Zf=t=>!Ls(t)&&t!==hn;function ko(){const{caseless:t}=Zf(this)&&this||{},e={},n=(s,i)=>{const r=t&&Xf(e,i)||i;Ti(e[r])&&Ti(s)?e[r]=ko(e[r],s):Ti(s)?e[r]=ko({},s):Zn(s)?e[r]=s.slice():e[r]=s};for(let s=0,i=arguments.length;s<i;s++)arguments[s]&&ei(arguments[s],n);return e}const km=(t,e,n,{allOwnKeys:s}={})=>(ei(e,(i,r)=>{n&&Ye(i)?t[r]=Yf(i,n):t[r]=i},{allOwnKeys:s}),t),Mm=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Lm=(t,e,n,s)=>{t.prototype=Object.create(e.prototype,s),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Fm=(t,e,n,s)=>{let i,r,o;const a={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),r=i.length;r-- >0;)o=i[r],(!s||s(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Ua(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Bm=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const s=t.indexOf(e,n);return s!==-1&&s===n},Um=t=>{if(!t)return null;if(Zn(t))return t;let e=t.length;if(!Qf(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},$m=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Ua(Uint8Array)),Hm=(t,e)=>{const s=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=s.next())&&!i.done;){const r=i.value;e.call(t,r[0],r[1])}},jm=(t,e)=>{let n;const s=[];for(;(n=t.exec(e))!==null;)s.push(n);return s},Wm=at("HTMLFormElement"),qm=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,s,i){return s.toUpperCase()+i}),bc=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Vm=at("RegExp"),ed=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),s={};ei(n,(i,r)=>{let o;(o=e(i,r,t))!==!1&&(s[r]=o||i)}),Object.defineProperties(t,s)},Km=t=>{ed(t,(e,n)=>{if(Ye(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const s=t[n];if(Ye(s)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},zm=(t,e)=>{const n={},s=i=>{i.forEach(r=>{n[r]=!0})};return Zn(t)?s(t):s(String(t).split(e)),n},Gm=()=>{},Ym=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,Zr="abcdefghijklmnopqrstuvwxyz",Ec="0123456789",td={DIGIT:Ec,ALPHA:Zr,ALPHA_DIGIT:Zr+Zr.toUpperCase()+Ec},Jm=(t=16,e=td.ALPHA_DIGIT)=>{let n="";const{length:s}=e;for(;t--;)n+=e[Math.random()*s|0];return n};function Qm(t){return!!(t&&Ye(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Xm=t=>{const e=new Array(10),n=(s,i)=>{if(mr(s)){if(e.indexOf(s)>=0)return;if(!("toJSON"in s)){e[i]=s;const r=Zn(s)?[]:{};return ei(s,(o,a)=>{const l=n(o,i+1);!Ls(l)&&(r[a]=l)}),e[i]=void 0,r}}return s};return n(t,0)},Zm=at("AsyncFunction"),ey=t=>t&&(mr(t)||Ye(t))&&Ye(t.then)&&Ye(t.catch),nd=((t,e)=>t?setImmediate:e?((n,s)=>(hn.addEventListener("message",({source:i,data:r})=>{i===hn&&r===n&&s.length&&s.shift()()},!1),i=>{s.push(i),hn.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Ye(hn.postMessage)),ty=typeof queueMicrotask<"u"?queueMicrotask.bind(hn):typeof process<"u"&&process.nextTick||nd,m={isArray:Zn,isArrayBuffer:Jf,isBuffer:ym,isFormData:Am,isArrayBufferView:vm,isString:bm,isNumber:Qf,isBoolean:Em,isObject:mr,isPlainObject:Ti,isReadableStream:Rm,isRequest:Om,isResponse:xm,isHeaders:Pm,isUndefined:Ls,isDate:wm,isFile:Cm,isBlob:Sm,isRegExp:Vm,isFunction:Ye,isStream:Im,isURLSearchParams:Nm,isTypedArray:$m,isFileList:Tm,forEach:ei,merge:ko,extend:km,trim:Dm,stripBOM:Mm,inherits:Lm,toFlatObject:Fm,kindOf:_r,kindOfTest:at,endsWith:Bm,toArray:Um,forEachEntry:Hm,matchAll:jm,isHTMLForm:Wm,hasOwnProperty:bc,hasOwnProp:bc,reduceDescriptors:ed,freezeMethods:Km,toObjectSet:zm,toCamelCase:qm,noop:Gm,toFiniteNumber:Ym,findKey:Xf,global:hn,isContextDefined:Zf,ALPHABET:td,generateString:Jm,isSpecCompliantForm:Qm,toJSONObject:Xm,isAsyncFn:Zm,isThenable:ey,setImmediate:nd,asap:ty};function H(t,e,n,s,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),s&&(this.request=s),i&&(this.response=i,this.status=i.status?i.status:null)}m.inherits(H,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:m.toJSONObject(this.config),code:this.code,status:this.status}}});const sd=H.prototype,id={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{id[t]={value:t}});Object.defineProperties(H,id);Object.defineProperty(sd,"isAxiosError",{value:!0});H.from=(t,e,n,s,i,r)=>{const o=Object.create(sd);return m.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),H.call(o,t.message,e,n,s,i),o.cause=t,o.name=t.name,r&&Object.assign(o,r),o};const ny=null;function Mo(t){return m.isPlainObject(t)||m.isArray(t)}function rd(t){return m.endsWith(t,"[]")?t.slice(0,-2):t}function wc(t,e,n){return t?t.concat(e).map(function(i,r){return i=rd(i),!n&&r?"["+i+"]":i}).join(n?".":""):e}function sy(t){return m.isArray(t)&&!t.some(Mo)}const iy=m.toFlatObject(m,{},null,function(e){return/^is[A-Z]/.test(e)});function yr(t,e,n){if(!m.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=m.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,E){return!m.isUndefined(E[v])});const s=n.metaTokens,i=n.visitor||u,r=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&m.isSpecCompliantForm(e);if(!m.isFunction(i))throw new TypeError("visitor must be a function");function c(_){if(_===null)return"";if(m.isDate(_))return _.toISOString();if(!l&&m.isBlob(_))throw new H("Blob is not supported. Use a Buffer instead.");return m.isArrayBuffer(_)||m.isTypedArray(_)?l&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function u(_,v,E){let x=_;if(_&&!E&&typeof _=="object"){if(m.endsWith(v,"{}"))v=s?v:v.slice(0,-2),_=JSON.stringify(_);else if(m.isArray(_)&&sy(_)||(m.isFileList(_)||m.endsWith(v,"[]"))&&(x=m.toArray(_)))return v=rd(v),x.forEach(function(D,O){!(m.isUndefined(D)||D===null)&&e.append(o===!0?wc([v],O,r):o===null?v:v+"[]",c(D))}),!1}return Mo(_)?!0:(e.append(wc(E,v,r),c(_)),!1)}const f=[],d=Object.assign(iy,{defaultVisitor:u,convertValue:c,isVisitable:Mo});function g(_,v){if(!m.isUndefined(_)){if(f.indexOf(_)!==-1)throw Error("Circular reference detected in "+v.join("."));f.push(_),m.forEach(_,function(x,P){(!(m.isUndefined(x)||x===null)&&i.call(e,x,m.isString(P)?P.trim():P,v,d))===!0&&g(x,v?v.concat(P):[P])}),f.pop()}}if(!m.isObject(t))throw new TypeError("data must be an object");return g(t),e}function Cc(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(s){return e[s]})}function $a(t,e){this._pairs=[],t&&yr(t,this,e)}const od=$a.prototype;od.append=function(e,n){this._pairs.push([e,n])};od.toString=function(e){const n=e?function(s){return e.call(this,s,Cc)}:Cc;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function ry(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ad(t,e,n){if(!e)return t;const s=n&&n.encode||ry,i=n&&n.serialize;let r;if(i?r=i(e,n):r=m.isURLSearchParams(e)?e.toString():new $a(e,n).toString(s),r){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+r}return t}class Sc{constructor(){this.handlers=[]}use(e,n,s){return this.handlers.push({fulfilled:e,rejected:n,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){m.forEach(this.handlers,function(s){s!==null&&e(s)})}}const ld={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},oy=typeof URLSearchParams<"u"?URLSearchParams:$a,ay=typeof FormData<"u"?FormData:null,ly=typeof Blob<"u"?Blob:null,cy={isBrowser:!0,classes:{URLSearchParams:oy,FormData:ay,Blob:ly},protocols:["http","https","file","blob","url","data"]},Ha=typeof window<"u"&&typeof document<"u",Lo=typeof navigator=="object"&&navigator||void 0,uy=Ha&&(!Lo||["ReactNative","NativeScript","NS"].indexOf(Lo.product)<0),fy=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",dy=Ha&&window.location.href||"http://localhost",hy=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ha,hasStandardBrowserEnv:uy,hasStandardBrowserWebWorkerEnv:fy,navigator:Lo,origin:dy},Symbol.toStringTag,{value:"Module"})),$e={...hy,...cy};function py(t,e){return yr(t,new $e.classes.URLSearchParams,Object.assign({visitor:function(n,s,i,r){return $e.isNode&&m.isBuffer(n)?(this.append(s,n.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},e))}function _y(t){return m.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function gy(t){const e={},n=Object.keys(t);let s;const i=n.length;let r;for(s=0;s<i;s++)r=n[s],e[r]=t[r];return e}function cd(t){function e(n,s,i,r){let o=n[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=r>=n.length;return o=!o&&m.isArray(i)?i.length:o,l?(m.hasOwnProp(i,o)?i[o]=[i[o],s]:i[o]=s,!a):((!i[o]||!m.isObject(i[o]))&&(i[o]=[]),e(n,s,i[o],r)&&m.isArray(i[o])&&(i[o]=gy(i[o])),!a)}if(m.isFormData(t)&&m.isFunction(t.entries)){const n={};return m.forEachEntry(t,(s,i)=>{e(_y(s),i,n,0)}),n}return null}function my(t,e,n){if(m.isString(t))try{return(e||JSON.parse)(t),m.trim(t)}catch(s){if(s.name!=="SyntaxError")throw s}return(0,JSON.stringify)(t)}const ti={transitional:ld,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const s=n.getContentType()||"",i=s.indexOf("application/json")>-1,r=m.isObject(e);if(r&&m.isHTMLForm(e)&&(e=new FormData(e)),m.isFormData(e))return i?JSON.stringify(cd(e)):e;if(m.isArrayBuffer(e)||m.isBuffer(e)||m.isStream(e)||m.isFile(e)||m.isBlob(e)||m.isReadableStream(e))return e;if(m.isArrayBufferView(e))return e.buffer;if(m.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){if(s.indexOf("application/x-www-form-urlencoded")>-1)return py(e,this.formSerializer).toString();if((a=m.isFileList(e))||s.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return yr(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return r||i?(n.setContentType("application/json",!1),my(e)):e}],transformResponse:[function(e){const n=this.transitional||ti.transitional,s=n&&n.forcedJSONParsing,i=this.responseType==="json";if(m.isResponse(e)||m.isReadableStream(e))return e;if(e&&m.isString(e)&&(s&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?H.from(a,H.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:$e.classes.FormData,Blob:$e.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};m.forEach(["delete","get","head","post","put","patch"],t=>{ti.headers[t]={}});const yy=m.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),vy=t=>{const e={};let n,s,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),s=o.substring(i+1).trim(),!(!n||e[n]&&yy[n])&&(n==="set-cookie"?e[n]?e[n].push(s):e[n]=[s]:e[n]=e[n]?e[n]+", "+s:s)}),e},Tc=Symbol("internals");function ds(t){return t&&String(t).trim().toLowerCase()}function Ii(t){return t===!1||t==null?t:m.isArray(t)?t.map(Ii):String(t)}function by(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=n.exec(t);)e[s[1]]=s[2];return e}const Ey=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function eo(t,e,n,s,i){if(m.isFunction(s))return s.call(this,e,n);if(i&&(e=n),!!m.isString(e)){if(m.isString(s))return e.indexOf(s)!==-1;if(m.isRegExp(s))return s.test(e)}}function wy(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,s)=>n.toUpperCase()+s)}function Cy(t,e){const n=m.toCamelCase(" "+e);["get","set","has"].forEach(s=>{Object.defineProperty(t,s+n,{value:function(i,r,o){return this[s].call(this,e,i,r,o)},configurable:!0})})}class He{constructor(e){e&&this.set(e)}set(e,n,s){const i=this;function r(a,l,c){const u=ds(l);if(!u)throw new Error("header name must be a non-empty string");const f=m.findKey(i,u);(!f||i[f]===void 0||c===!0||c===void 0&&i[f]!==!1)&&(i[f||l]=Ii(a))}const o=(a,l)=>m.forEach(a,(c,u)=>r(c,u,l));if(m.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(m.isString(e)&&(e=e.trim())&&!Ey(e))o(vy(e),n);else if(m.isHeaders(e))for(const[a,l]of e.entries())r(l,a,s);else e!=null&&r(n,e,s);return this}get(e,n){if(e=ds(e),e){const s=m.findKey(this,e);if(s){const i=this[s];if(!n)return i;if(n===!0)return by(i);if(m.isFunction(n))return n.call(this,i,s);if(m.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=ds(e),e){const s=m.findKey(this,e);return!!(s&&this[s]!==void 0&&(!n||eo(this,this[s],s,n)))}return!1}delete(e,n){const s=this;let i=!1;function r(o){if(o=ds(o),o){const a=m.findKey(s,o);a&&(!n||eo(s,s[a],a,n))&&(delete s[a],i=!0)}}return m.isArray(e)?e.forEach(r):r(e),i}clear(e){const n=Object.keys(this);let s=n.length,i=!1;for(;s--;){const r=n[s];(!e||eo(this,this[r],r,e,!0))&&(delete this[r],i=!0)}return i}normalize(e){const n=this,s={};return m.forEach(this,(i,r)=>{const o=m.findKey(s,r);if(o){n[o]=Ii(i),delete n[r];return}const a=e?wy(r):String(r).trim();a!==r&&delete n[r],n[a]=Ii(i),s[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return m.forEach(this,(s,i)=>{s!=null&&s!==!1&&(n[i]=e&&m.isArray(s)?s.join(", "):s)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const s=new this(e);return n.forEach(i=>s.set(i)),s}static accessor(e){const s=(this[Tc]=this[Tc]={accessors:{}}).accessors,i=this.prototype;function r(o){const a=ds(o);s[a]||(Cy(i,o),s[a]=!0)}return m.isArray(e)?e.forEach(r):r(e),this}}He.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);m.reduceDescriptors(He.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(s){this[n]=s}}});m.freezeMethods(He);function to(t,e){const n=this||ti,s=e||n,i=He.from(s.headers);let r=s.data;return m.forEach(t,function(a){r=a.call(n,r,i.normalize(),e?e.status:void 0)}),i.normalize(),r}function ud(t){return!!(t&&t.__CANCEL__)}function es(t,e,n){H.call(this,t??"canceled",H.ERR_CANCELED,e,n),this.name="CanceledError"}m.inherits(es,H,{__CANCEL__:!0});function fd(t,e,n){const s=n.config.validateStatus;!n.status||!s||s(n.status)?t(n):e(new H("Request failed with status code "+n.status,[H.ERR_BAD_REQUEST,H.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Sy(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Ty(t,e){t=t||10;const n=new Array(t),s=new Array(t);let i=0,r=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=s[r];o||(o=c),n[i]=l,s[i]=c;let f=r,d=0;for(;f!==i;)d+=n[f++],f=f%t;if(i=(i+1)%t,i===r&&(r=(r+1)%t),c-o<e)return;const g=u&&c-u;return g?Math.round(d*1e3/g):void 0}}function Iy(t,e){let n=0,s=1e3/e,i,r;const o=(c,u=Date.now())=>{n=u,i=null,r&&(clearTimeout(r),r=null),t.apply(null,c)};return[(...c)=>{const u=Date.now(),f=u-n;f>=s?o(c,u):(i=c,r||(r=setTimeout(()=>{r=null,o(i)},s-f)))},()=>i&&o(i)]}const Li=(t,e,n=3)=>{let s=0;const i=Ty(50,250);return Iy(r=>{const o=r.loaded,a=r.lengthComputable?r.total:void 0,l=o-s,c=i(l),u=o<=a;s=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:r,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},Ic=(t,e)=>{const n=t!=null;return[s=>e[0]({lengthComputable:n,total:t,loaded:s}),e[1]]},Ac=t=>(...e)=>m.asap(()=>t(...e)),Ay=$e.hasStandardBrowserEnv?function(){const e=$e.navigator&&/(msie|trident)/i.test($e.navigator.userAgent),n=document.createElement("a");let s;function i(r){let o=r;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return s=i(window.location.href),function(o){const a=m.isString(o)?i(o):o;return a.protocol===s.protocol&&a.host===s.host}}():function(){return function(){return!0}}(),Ny=$e.hasStandardBrowserEnv?{write(t,e,n,s,i,r){const o=[t+"="+encodeURIComponent(e)];m.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),m.isString(s)&&o.push("path="+s),m.isString(i)&&o.push("domain="+i),r===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Ry(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Oy(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function dd(t,e){return t&&!Ry(e)?Oy(t,e):e}const Nc=t=>t instanceof He?{...t}:t;function Sn(t,e){e=e||{};const n={};function s(c,u,f){return m.isPlainObject(c)&&m.isPlainObject(u)?m.merge.call({caseless:f},c,u):m.isPlainObject(u)?m.merge({},u):m.isArray(u)?u.slice():u}function i(c,u,f){if(m.isUndefined(u)){if(!m.isUndefined(c))return s(void 0,c,f)}else return s(c,u,f)}function r(c,u){if(!m.isUndefined(u))return s(void 0,u)}function o(c,u){if(m.isUndefined(u)){if(!m.isUndefined(c))return s(void 0,c)}else return s(void 0,u)}function a(c,u,f){if(f in e)return s(c,u);if(f in t)return s(void 0,c)}const l={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u)=>i(Nc(c),Nc(u),!0)};return m.forEach(Object.keys(Object.assign({},t,e)),function(u){const f=l[u]||i,d=f(t[u],e[u],u);m.isUndefined(d)&&f!==a||(n[u]=d)}),n}const hd=t=>{const e=Sn({},t);let{data:n,withXSRFToken:s,xsrfHeaderName:i,xsrfCookieName:r,headers:o,auth:a}=e;e.headers=o=He.from(o),e.url=ad(dd(e.baseURL,e.url),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(m.isFormData(n)){if($e.hasStandardBrowserEnv||$e.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[c,...u]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...u].join("; "))}}if($e.hasStandardBrowserEnv&&(s&&m.isFunction(s)&&(s=s(e)),s||s!==!1&&Ay(e.url))){const c=i&&r&&Ny.read(r);c&&o.set(i,c)}return e},xy=typeof XMLHttpRequest<"u",Py=xy&&function(t){return new Promise(function(n,s){const i=hd(t);let r=i.data;const o=He.from(i.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=i,u,f,d,g,_;function v(){g&&g(),_&&_(),i.cancelToken&&i.cancelToken.unsubscribe(u),i.signal&&i.signal.removeEventListener("abort",u)}let E=new XMLHttpRequest;E.open(i.method.toUpperCase(),i.url,!0),E.timeout=i.timeout;function x(){if(!E)return;const D=He.from("getAllResponseHeaders"in E&&E.getAllResponseHeaders()),M={data:!a||a==="text"||a==="json"?E.responseText:E.response,status:E.status,statusText:E.statusText,headers:D,config:t,request:E};fd(function(de){n(de),v()},function(de){s(de),v()},M),E=null}"onloadend"in E?E.onloadend=x:E.onreadystatechange=function(){!E||E.readyState!==4||E.status===0&&!(E.responseURL&&E.responseURL.indexOf("file:")===0)||setTimeout(x)},E.onabort=function(){E&&(s(new H("Request aborted",H.ECONNABORTED,t,E)),E=null)},E.onerror=function(){s(new H("Network Error",H.ERR_NETWORK,t,E)),E=null},E.ontimeout=function(){let O=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const M=i.transitional||ld;i.timeoutErrorMessage&&(O=i.timeoutErrorMessage),s(new H(O,M.clarifyTimeoutError?H.ETIMEDOUT:H.ECONNABORTED,t,E)),E=null},r===void 0&&o.setContentType(null),"setRequestHeader"in E&&m.forEach(o.toJSON(),function(O,M){E.setRequestHeader(M,O)}),m.isUndefined(i.withCredentials)||(E.withCredentials=!!i.withCredentials),a&&a!=="json"&&(E.responseType=i.responseType),c&&([d,_]=Li(c,!0),E.addEventListener("progress",d)),l&&E.upload&&([f,g]=Li(l),E.upload.addEventListener("progress",f),E.upload.addEventListener("loadend",g)),(i.cancelToken||i.signal)&&(u=D=>{E&&(s(!D||D.type?new es(null,t,E):D),E.abort(),E=null)},i.cancelToken&&i.cancelToken.subscribe(u),i.signal&&(i.signal.aborted?u():i.signal.addEventListener("abort",u)));const P=Sy(i.url);if(P&&$e.protocols.indexOf(P)===-1){s(new H("Unsupported protocol "+P+":",H.ERR_BAD_REQUEST,t));return}E.send(r||null)})},Dy=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let s=new AbortController,i;const r=function(c){if(!i){i=!0,a();const u=c instanceof Error?c:this.reason;s.abort(u instanceof H?u:new es(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,r(new H(`timeout ${e} of ms exceeded`,H.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(r):c.removeEventListener("abort",r)}),t=null)};t.forEach(c=>c.addEventListener("abort",r));const{signal:l}=s;return l.unsubscribe=()=>m.asap(a),l}},ky=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let s=0,i;for(;s<n;)i=s+e,yield t.slice(s,i),s=i},My=async function*(t,e){for await(const n of Ly(t))yield*ky(n,e)},Ly=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:s}=await e.read();if(n)break;yield s}}finally{await e.cancel()}},Rc=(t,e,n,s)=>{const i=My(t,e);let r=0,o,a=l=>{o||(o=!0,s&&s(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await i.next();if(c){a(),l.close();return}let f=u.byteLength;if(n){let d=r+=f;n(d)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),i.return()}},{highWaterMark:2})},vr=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",pd=vr&&typeof ReadableStream=="function",Fy=vr&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),_d=(t,...e)=>{try{return!!t(...e)}catch{return!1}},By=pd&&_d(()=>{let t=!1;const e=new Request($e.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),Oc=64*1024,Fo=pd&&_d(()=>m.isReadableStream(new Response("").body)),Fi={stream:Fo&&(t=>t.body)};vr&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Fi[e]&&(Fi[e]=m.isFunction(t[e])?n=>n[e]():(n,s)=>{throw new H(`Response type '${e}' is not supported`,H.ERR_NOT_SUPPORT,s)})})})(new Response);const Uy=async t=>{if(t==null)return 0;if(m.isBlob(t))return t.size;if(m.isSpecCompliantForm(t))return(await new Request($e.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(m.isArrayBufferView(t)||m.isArrayBuffer(t))return t.byteLength;if(m.isURLSearchParams(t)&&(t=t+""),m.isString(t))return(await Fy(t)).byteLength},$y=async(t,e)=>{const n=m.toFiniteNumber(t.getContentLength());return n??Uy(e)},Hy=vr&&(async t=>{let{url:e,method:n,data:s,signal:i,cancelToken:r,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:c,headers:u,withCredentials:f="same-origin",fetchOptions:d}=hd(t);c=c?(c+"").toLowerCase():"text";let g=Dy([i,r&&r.toAbortSignal()],o),_;const v=g&&g.unsubscribe&&(()=>{g.unsubscribe()});let E;try{if(l&&By&&n!=="get"&&n!=="head"&&(E=await $y(u,s))!==0){let M=new Request(e,{method:"POST",body:s,duplex:"half"}),fe;if(m.isFormData(s)&&(fe=M.headers.get("content-type"))&&u.setContentType(fe),M.body){const[de,W]=Ic(E,Li(Ac(l)));s=Rc(M.body,Oc,de,W)}}m.isString(f)||(f=f?"include":"omit");const x="credentials"in Request.prototype;_=new Request(e,{...d,signal:g,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:s,duplex:"half",credentials:x?f:void 0});let P=await fetch(_);const D=Fo&&(c==="stream"||c==="response");if(Fo&&(a||D&&v)){const M={};["status","statusText","headers"].forEach(G=>{M[G]=P[G]});const fe=m.toFiniteNumber(P.headers.get("content-length")),[de,W]=a&&Ic(fe,Li(Ac(a),!0))||[];P=new Response(Rc(P.body,Oc,de,()=>{W&&W(),v&&v()}),M)}c=c||"text";let O=await Fi[m.findKey(Fi,c)||"text"](P,t);return!D&&v&&v(),await new Promise((M,fe)=>{fd(M,fe,{data:O,headers:He.from(P.headers),status:P.status,statusText:P.statusText,config:t,request:_})})}catch(x){throw v&&v(),x&&x.name==="TypeError"&&/fetch/i.test(x.message)?Object.assign(new H("Network Error",H.ERR_NETWORK,t,_),{cause:x.cause||x}):H.from(x,x&&x.code,t,_)}}),Bo={http:ny,xhr:Py,fetch:Hy};m.forEach(Bo,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const xc=t=>`- ${t}`,jy=t=>m.isFunction(t)||t===null||t===!1,gd={getAdapter:t=>{t=m.isArray(t)?t:[t];const{length:e}=t;let n,s;const i={};for(let r=0;r<e;r++){n=t[r];let o;if(s=n,!jy(n)&&(s=Bo[(o=String(n)).toLowerCase()],s===void 0))throw new H(`Unknown adapter '${o}'`);if(s)break;i[o||"#"+r]=s}if(!s){const r=Object.entries(i).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?r.length>1?`since :
`+r.map(xc).join(`
`):" "+xc(r[0]):"as no adapter specified";throw new H("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return s},adapters:Bo};function no(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new es(null,t)}function Pc(t){return no(t),t.headers=He.from(t.headers),t.data=to.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),gd.getAdapter(t.adapter||ti.adapter)(t).then(function(s){return no(t),s.data=to.call(t,t.transformResponse,s),s.headers=He.from(s.headers),s},function(s){return ud(s)||(no(t),s&&s.response&&(s.response.data=to.call(t,t.transformResponse,s.response),s.response.headers=He.from(s.response.headers))),Promise.reject(s)})}const md="1.7.7",ja={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{ja[t]=function(s){return typeof s===t||"a"+(e<1?"n ":" ")+t}});const Dc={};ja.transitional=function(e,n,s){function i(r,o){return"[Axios v"+md+"] Transitional option '"+r+"'"+o+(s?". "+s:"")}return(r,o,a)=>{if(e===!1)throw new H(i(o," has been removed"+(n?" in "+n:"")),H.ERR_DEPRECATED);return n&&!Dc[o]&&(Dc[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(r,o,a):!0}};function Wy(t,e,n){if(typeof t!="object")throw new H("options must be an object",H.ERR_BAD_OPTION_VALUE);const s=Object.keys(t);let i=s.length;for(;i-- >0;){const r=s[i],o=e[r];if(o){const a=t[r],l=a===void 0||o(a,r,t);if(l!==!0)throw new H("option "+r+" must be "+l,H.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new H("Unknown option "+r,H.ERR_BAD_OPTION)}}const Uo={assertOptions:Wy,validators:ja},Ft=Uo.validators;class vn{constructor(e){this.defaults=e,this.interceptors={request:new Sc,response:new Sc}}async request(e,n){try{return await this._request(e,n)}catch(s){if(s instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const r=i.stack?i.stack.replace(/^.+\n/,""):"";try{s.stack?r&&!String(s.stack).endsWith(r.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+r):s.stack=r}catch{}}throw s}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Sn(this.defaults,n);const{transitional:s,paramsSerializer:i,headers:r}=n;s!==void 0&&Uo.assertOptions(s,{silentJSONParsing:Ft.transitional(Ft.boolean),forcedJSONParsing:Ft.transitional(Ft.boolean),clarifyTimeoutError:Ft.transitional(Ft.boolean)},!1),i!=null&&(m.isFunction(i)?n.paramsSerializer={serialize:i}:Uo.assertOptions(i,{encode:Ft.function,serialize:Ft.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=r&&m.merge(r.common,r[n.method]);r&&m.forEach(["delete","get","head","post","put","patch","common"],_=>{delete r[_]}),n.headers=He.concat(o,r);const a=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(l=l&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let u,f=0,d;if(!l){const _=[Pc.bind(this),void 0];for(_.unshift.apply(_,a),_.push.apply(_,c),d=_.length,u=Promise.resolve(n);f<d;)u=u.then(_[f++],_[f++]);return u}d=a.length;let g=n;for(f=0;f<d;){const _=a[f++],v=a[f++];try{g=_(g)}catch(E){v.call(this,E);break}}try{u=Pc.call(this,g)}catch(_){return Promise.reject(_)}for(f=0,d=c.length;f<d;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=Sn(this.defaults,e);const n=dd(e.baseURL,e.url);return ad(n,e.params,e.paramsSerializer)}}m.forEach(["delete","get","head","options"],function(e){vn.prototype[e]=function(n,s){return this.request(Sn(s||{},{method:e,url:n,data:(s||{}).data}))}});m.forEach(["post","put","patch"],function(e){function n(s){return function(r,o,a){return this.request(Sn(a||{},{method:e,headers:s?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}vn.prototype[e]=n(),vn.prototype[e+"Form"]=n(!0)});class Wa{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(r){n=r});const s=this;this.promise.then(i=>{if(!s._listeners)return;let r=s._listeners.length;for(;r-- >0;)s._listeners[r](i);s._listeners=null}),this.promise.then=i=>{let r;const o=new Promise(a=>{s.subscribe(a),r=a}).then(i);return o.cancel=function(){s.unsubscribe(r)},o},e(function(r,o,a){s.reason||(s.reason=new es(r,o,a),n(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=s=>{e.abort(s)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Wa(function(i){e=i}),cancel:e}}}function qy(t){return function(n){return t.apply(null,n)}}function Vy(t){return m.isObject(t)&&t.isAxiosError===!0}const $o={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries($o).forEach(([t,e])=>{$o[e]=t});function yd(t){const e=new vn(t),n=Yf(vn.prototype.request,e);return m.extend(n,vn.prototype,e,{allOwnKeys:!0}),m.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return yd(Sn(t,i))},n}const ve=yd(ti);ve.Axios=vn;ve.CanceledError=es;ve.CancelToken=Wa;ve.isCancel=ud;ve.VERSION=md;ve.toFormData=yr;ve.AxiosError=H;ve.Cancel=ve.CanceledError;ve.all=function(e){return Promise.all(e)};ve.spread=qy;ve.isAxiosError=Vy;ve.mergeConfig=Sn;ve.AxiosHeaders=He;ve.formToJSON=t=>cd(m.isHTMLForm(t)?new FormData(t):t);ve.getAdapter=gd.getAdapter;ve.HttpStatusCode=$o;ve.default=ve;var kc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=function(t,e){if(!t)throw ts(e)},ts=function(t){return new Error("Firebase Database ("+vd.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ky=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},qa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,f=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(d=64)),s.push(n[u],n[f],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ky(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||f==null)throw new zy;const d=r<<2|a>>4;if(s.push(d),c!==64){const g=a<<4&240|c>>2;if(s.push(g),f!==64){const _=c<<6&192|f;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class zy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ed=function(t){const e=bd(t);return qa.encodeByteArray(e,!0)},Bi=function(t){return Ed(t).replace(/\./g,"")},Ho=function(t){try{return qa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gy(t){return wd(void 0,t)}function wd(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Yy(n)||(t[n]=wd(t[n],e[n]));return t}function Yy(t){return t!=="__proto__"}/**
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
 */function Jy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Qy=()=>Jy().__FIREBASE_DEFAULTS__,Xy=()=>{if(typeof process>"u"||typeof kc>"u")return;const t=kc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Zy=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ho(t[1]);return e&&JSON.parse(e)},Cd=()=>{try{return Qy()||Xy()||Zy()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ev=t=>{var e,n;return(n=(e=Cd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},tv=t=>{const e=ev(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Sd=()=>{var t;return(t=Cd())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function nv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Bi(JSON.stringify(n)),Bi(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Td(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(sv())}function iv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Id(){return vd.NODE_ADMIN===!0}function Ad(){try{return typeof indexedDB=="object"}catch{return!1}}function Nd(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function rv(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov="FirebaseError";class ns extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ov,Object.setPrototypeOf(this,ns.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Er.prototype.create)}}class Er{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?av(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ns(i,a,s)}}function av(t,e){return t.replace(lv,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const lv=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t){return JSON.parse(t)}function Ee(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Fs(Ho(r[0])||""),n=Fs(Ho(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},cv=function(t){const e=Rd(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},uv=function(t){const e=Rd(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Kn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Mc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ui(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function jo(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Lc(r)&&Lc(o)){if(!jo(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Lc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)s[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const d=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let f=0;f<80;f++){f<40?f<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):f<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[f]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Va(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,T(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},wr=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function sn(t){return t&&t._delegate?t._delegate:t}class Rt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const fn="[DEFAULT]";/**
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
 */class pv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new br;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gv(e))try{this.getOrInitializeService({instanceIdentifier:fn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fn){return this.instances.has(e)}getOptions(e=fn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:_v(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=fn){return this.component?this.component.multipleInstances?e:fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _v(t){return t===fn?void 0:t}function gv(t){return t.instantiationMode==="EAGER"}/**
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
 */class mv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const yv={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},vv=ae.INFO,bv={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},Ev=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=bv[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Od{constructor(e){this.name=e,this._logLevel=vv,this._logHandler=Ev,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const wv=(t,e)=>e.some(n=>t instanceof n);let Fc,Bc;function Cv(){return Fc||(Fc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sv(){return Bc||(Bc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xd=new WeakMap,Wo=new WeakMap,Pd=new WeakMap,so=new WeakMap,Ka=new WeakMap;function Tv(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(At(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&xd.set(n,t)}).catch(()=>{}),Ka.set(e,t),e}function Iv(t){if(Wo.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Wo.set(t,e)}let qo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Pd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return At(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Av(t){qo=t(qo)}function Nv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(io(this),e,...n);return Pd.set(s,e.sort?e.sort():[e]),At(s)}:Sv().includes(t)?function(...e){return t.apply(io(this),e),At(xd.get(this))}:function(...e){return At(t.apply(io(this),e))}}function Rv(t){return typeof t=="function"?Nv(t):(t instanceof IDBTransaction&&Iv(t),wv(t,Cv())?new Proxy(t,qo):t)}function At(t){if(t instanceof IDBRequest)return Tv(t);if(so.has(t))return so.get(t);const e=Rv(t);return e!==t&&(so.set(t,e),Ka.set(e,t)),e}const io=t=>Ka.get(t);function Cr(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=At(o);return s&&o.addEventListener("upgradeneeded",l=>{s(At(o.result),l.oldVersion,l.newVersion,At(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}function ro(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",s=>e(s.oldVersion,s)),At(n).then(()=>{})}const Ov=["get","getKey","getAll","getAllKeys","count"],xv=["put","add","delete","clear"],oo=new Map;function Uc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(oo.get(e))return oo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=xv.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ov.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return oo.set(e,r),r}Av(t=>({...t,get:(e,n,s)=>Uc(e,n)||t.get(e,n,s),has:(e,n)=>!!Uc(e,n)||t.has(e,n)}));/**
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
 */class Pv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Dv(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Dv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vo="@firebase/app",$c="0.10.12";/**
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
 */const Ot=new Od("@firebase/app"),kv="@firebase/app-compat",Mv="@firebase/analytics-compat",Lv="@firebase/analytics",Fv="@firebase/app-check-compat",Bv="@firebase/app-check",Uv="@firebase/auth",$v="@firebase/auth-compat",Hv="@firebase/database",jv="@firebase/data-connect",Wv="@firebase/database-compat",qv="@firebase/functions",Vv="@firebase/functions-compat",Kv="@firebase/installations",zv="@firebase/installations-compat",Gv="@firebase/messaging",Yv="@firebase/messaging-compat",Jv="@firebase/performance",Qv="@firebase/performance-compat",Xv="@firebase/remote-config",Zv="@firebase/remote-config-compat",eb="@firebase/storage",tb="@firebase/storage-compat",nb="@firebase/firestore",sb="@firebase/vertexai-preview",ib="@firebase/firestore-compat",rb="firebase",ob="10.14.0";/**
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
 */const Ko="[DEFAULT]",ab={[Vo]:"fire-core",[kv]:"fire-core-compat",[Lv]:"fire-analytics",[Mv]:"fire-analytics-compat",[Bv]:"fire-app-check",[Fv]:"fire-app-check-compat",[Uv]:"fire-auth",[$v]:"fire-auth-compat",[Hv]:"fire-rtdb",[jv]:"fire-data-connect",[Wv]:"fire-rtdb-compat",[qv]:"fire-fn",[Vv]:"fire-fn-compat",[Kv]:"fire-iid",[zv]:"fire-iid-compat",[Gv]:"fire-fcm",[Yv]:"fire-fcm-compat",[Jv]:"fire-perf",[Qv]:"fire-perf-compat",[Xv]:"fire-rc",[Zv]:"fire-rc-compat",[eb]:"fire-gcs",[tb]:"fire-gcs-compat",[nb]:"fire-fst",[ib]:"fire-fst-compat",[sb]:"fire-vertex","fire-js":"fire-js",[rb]:"fire-js-all"};/**
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
 */const $i=new Map,lb=new Map,zo=new Map;function Hc(t,e){try{t.container.addComponent(e)}catch(n){Ot.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Yt(t){const e=t.name;if(zo.has(e))return Ot.debug(`There were multiple attempts to register component ${e}.`),!1;zo.set(e,t);for(const n of $i.values())Hc(n,t);for(const n of lb.values())Hc(n,t);return!0}function Sr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const cb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qt=new Er("app","Firebase",cb);/**
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
 */class ub{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qt.create("app-deleted",{appName:this._name})}}/**
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
 */const fb=ob;function Dd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ko,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw qt.create("bad-app-name",{appName:String(i)});if(n||(n=Sd()),!n)throw qt.create("no-options");const r=$i.get(i);if(r){if(jo(n,r.options)&&jo(s,r.config))return r;throw qt.create("duplicate-app",{appName:i})}const o=new mv(i);for(const l of zo.values())o.addComponent(l);const a=new ub(n,s,o);return $i.set(i,a),a}function kd(t=Ko){const e=$i.get(t);if(!e&&t===Ko&&Sd())return Dd();if(!e)throw qt.create("no-app",{appName:t});return e}function _t(t,e,n){var s;let i=(s=ab[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ot.warn(a.join(" "));return}Yt(new Rt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const db="firebase-heartbeat-database",hb=1,Bs="firebase-heartbeat-store";let ao=null;function Md(){return ao||(ao=Cr(db,hb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Bs)}catch(n){console.warn(n)}}}}).catch(t=>{throw qt.create("idb-open",{originalErrorMessage:t.message})})),ao}async function pb(t){try{const n=(await Md()).transaction(Bs),s=await n.objectStore(Bs).get(Ld(t));return await n.done,s}catch(e){if(e instanceof ns)Ot.warn(e.message);else{const n=qt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ot.warn(n.message)}}}async function jc(t,e){try{const s=(await Md()).transaction(Bs,"readwrite");await s.objectStore(Bs).put(e,Ld(t)),await s.done}catch(n){if(n instanceof ns)Ot.warn(n.message);else{const s=qt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ot.warn(s.message)}}}function Ld(t){return`${t.name}!${t.options.appId}`}/**
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
 */const _b=1024,gb=30*24*60*60*1e3;class mb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vb(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Wc();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=gb}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Ot.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wc(),{heartbeatsToSend:s,unsentEntries:i}=yb(this._heartbeatsCache.heartbeats),r=Bi(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Ot.warn(n),""}}}function Wc(){return new Date().toISOString().substring(0,10)}function yb(t,e=_b){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),qc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class vb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ad()?Nd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await pb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return jc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function qc(t){return Bi(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function bb(t){Yt(new Rt("platform-logger",e=>new Pv(e),"PRIVATE")),Yt(new Rt("heartbeat",e=>new mb(e),"PRIVATE")),_t(Vo,$c,t),_t(Vo,$c,"esm2017"),_t("fire-js","")}bb("");var Vc={};const Kc="@firebase/database",zc="1.0.8";/**
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
 */let Fd="";function Eb(t){Fd=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ee(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Fs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return bt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new wb(e)}}catch{}return new Cb},pn=Bd("localStorage"),Sb=Bd("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new Od("@firebase/database"),Tb=function(){let t=1;return function(){return t++}}(),Ud=function(t){const e=hv(t),n=new dv;n.update(e);const s=n.digest();return qa.encodeByteArray(s)},ni=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ni.apply(null,s):typeof s=="object"?e+=Ee(s):e+=s,e+=" "}return e};let Ss=null,Gc=!0;const Ib=function(t,e){T(!e,"Can't turn on custom loggers persistently."),jn.logLevel=ae.VERBOSE,Ss=jn.log.bind(jn)},Ie=function(...t){if(Gc===!0&&(Gc=!1,Ss===null&&Sb.get("logging_enabled")===!0&&Ib()),Ss){const e=ni.apply(null,t);Ss(e)}},si=function(t){return function(...e){Ie(t,...e)}},Go=function(...t){const e="FIREBASE INTERNAL ERROR: "+ni(...t);jn.error(e)},xt=function(...t){const e=`FIREBASE FATAL ERROR: ${ni(...t)}`;throw jn.error(e),new Error(e)},je=function(...t){const e="FIREBASE WARNING: "+ni(...t);jn.warn(e)},Ab=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&je("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},za=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Nb=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},zn="[MIN_NAME]",Tn="[MAX_NAME]",xn=function(t,e){if(t===e)return 0;if(t===zn||e===Tn)return-1;if(e===zn||t===Tn)return 1;{const n=Yc(t),s=Yc(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Rb=function(t,e){return t===e?0:t<e?-1:1},hs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ee(e))},Ga=function(t){if(typeof t!="object"||t===null)return Ee(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ee(e[s]),n+=":",n+=Ga(t[e[s]]);return n+="}",n},$d=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ne(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Hd=function(t){T(!za(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let f="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),f=f+d}return f.toLowerCase()},Ob=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},xb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Pb(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Db=new RegExp("^-?(0*)\\d{1,10}$"),kb=-2147483648,Mb=2147483647,Yc=function(t){if(Db.test(t)){const e=Number(t);if(e>=kb&&e<=Mb)return e}return null},ss=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw je("Exception was thrown by user callback.",n),e},Math.floor(0))}},Lb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ts=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Fb{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){je(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ie("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',je(e)}}class Ai{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ai.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya="5",jd="v",Wd="s",qd="r",Vd="f",Kd=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,zd="ls",Gd="p",Yo="ac",Yd="websocket",Jd="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=pn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&pn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Ub(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Xd(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let s;if(e===Yd)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Jd)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ub(t)&&(n.ns=t.namespace);const i=[];return Ne(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(){this.counters_={}}incrementCounter(e,n=1){bt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Gy(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo={},co={};function Ja(t){const e=t.toString();return lo[e]||(lo[e]=new $b),lo[e]}function Hb(t,e){const n=t.toString();return co[n]||(co[n]=e()),co[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&ss(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="start",Wb="close",qb="pLPCommand",Vb="pRTLPCB",Zd="id",eh="pw",th="ser",Kb="cb",zb="seg",Gb="ts",Yb="d",Jb="dframe",nh=1870,sh=30,Qb=nh-sh,Xb=25e3,Zb=3e4;class Bn{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=si(e),this.stats_=Ja(n),this.urlFn=l=>(this.appCheckToken&&(l[Yo]=this.appCheckToken),Xd(n,Jd,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new jb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Zb)),Nb(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Qa((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Jc)this.id=a,this.password=l;else if(o===Wb)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Jc]="t",s[th]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Kb]=this.scriptTagHolder.uniqueCallbackIdentifier),s[jd]=Ya,this.transportSessionId&&(s[Wd]=this.transportSessionId),this.lastSessionId&&(s[zd]=this.lastSessionId),this.applicationId&&(s[Gd]=this.applicationId),this.appCheckToken&&(s[Yo]=this.appCheckToken),typeof location<"u"&&location.hostname&&Kd.test(location.hostname)&&(s[qd]=Vd);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Bn.forceAllow_=!0}static forceDisallow(){Bn.forceDisallow_=!0}static isAvailable(){return Bn.forceAllow_?!0:!Bn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Ob()&&!xb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ee(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ed(n),i=$d(s,Qb);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Jb]="t",s[Zd]=e,s[eh]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ee(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Qa{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Tb(),window[qb+this.uniqueCallbackIdentifier]=e,window[Vb+this.uniqueCallbackIdentifier]=n,this.myIFrame=Qa.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ie("frame writing exception"),a.stack&&Ie(a.stack),Ie(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ie("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Zd]=this.myID,e[eh]=this.myPW,e[th]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+sh+s.length<=nh;){const o=this.pendingSegs.shift();s=s+"&"+zb+i+"="+o.seg+"&"+Gb+i+"="+o.ts+"&"+Yb+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Xb)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ie("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE=16384,tE=45e3;let Hi=null;typeof MozWebSocket<"u"?Hi=MozWebSocket:typeof WebSocket<"u"&&(Hi=WebSocket);class tt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=si(this.connId),this.stats_=Ja(n),this.connURL=tt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[jd]=Ya,typeof location<"u"&&location.hostname&&Kd.test(location.hostname)&&(o[qd]=Vd),n&&(o[Wd]=n),s&&(o[zd]=s),i&&(o[Yo]=i),r&&(o[Gd]=r),Xd(e,Yd,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,pn.set("previous_websocket_failure",!0);try{let s;Id(),this.mySock=new Hi(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){tt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Hi!==null&&!tt.forceDisallow_}static previouslyFailed(){return pn.isInMemoryStorage||pn.get("previous_websocket_failure")===!0}markConnectionHealthy(){pn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Fs(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ee(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=$d(n,eE);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(tE))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}tt.responsesRequiredToBeHealthy=2;tt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Bn,tt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=tt&&tt.isAvailable();let s=n&&!tt.previouslyFailed();if(e.webSocketOnly&&(n||je("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[tt];else{const i=this.transports_=[];for(const r of Us.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Us.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Us.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=6e4,sE=5e3,iE=10*1024,rE=100*1024,uo="t",Qc="d",oE="s",Xc="r",aE="e",Zc="o",eu="a",tu="n",nu="p",lE="h";class cE{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=si("c:"+this.id+":"),this.transportManager_=new Us(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ts(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>rE?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>iE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(uo in e){const n=e[uo];n===eu?this.upgradeIfSecondaryHealthy_():n===Xc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Zc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=hs("t",e),s=hs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:nu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:eu,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:tu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=hs("t",e),s=hs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=hs(uo,e);if(Qc in e){const s=e[Qc];if(n===lE){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===tu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===oE?this.onConnectionShutdown_(s):n===Xc?this.onReset_(s):n===aE?Go("Server Error: "+s):n===Zc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Go("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ya!==s&&je("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Ts(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(nE))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ts(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(sE))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:nu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(pn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends rh{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Td()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ji}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su=32,iu=768;class te{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Q(){return new te("")}function V(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Jt(t){return t.pieces_.length-t.pieceNum_}function ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new te(t.pieces_,e)}function Xa(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function uE(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function $s(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function oh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new te(e,0)}function pe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof te)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new te(n,0)}function K(t){return t.pieceNum_>=t.pieces_.length}function Fe(t,e){const n=V(t),s=V(e);if(n===null)return e;if(n===s)return Fe(ce(t),ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function fE(t,e){const n=$s(t,0),s=$s(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=xn(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Za(t,e){if(Jt(t)!==Jt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Xe(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Jt(t)>Jt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class dE{constructor(e,n){this.errorPrefix_=n,this.parts_=$s(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=wr(this.parts_[s]);ah(this)}}function hE(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=wr(e),ah(t)}function pE(t){const e=t.parts_.pop();t.byteLength_-=wr(e),t.parts_.length>0&&(t.byteLength_-=1)}function ah(t){if(t.byteLength_>iu)throw new Error(t.errorPrefix_+"has a key path longer than "+iu+" bytes ("+t.byteLength_+").");if(t.parts_.length>su)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+su+") or object contains a cycle "+dn(t))}function dn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el extends rh{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new el}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=1e3,_E=60*5*1e3,ru=30*1e3,gE=1.3,mE=3e4,yE="server_kill",ou=3;class Nt extends ih{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Nt.nextPersistentConnectionId_++,this.log_=si("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ps,this.maxReconnectDelay_=_E,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Id())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");el.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ji.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ee(r)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new br,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Nt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&bt(e,"w")){const s=Kn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();je(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||uv(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ru)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=cv(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ee(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Go("Unrecognized action received from server: "+Ee(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ps,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ps,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>mE&&(this.reconnectDelay_=ps),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*gE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Nt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(f){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ie("getToken() completed but was canceled"):(Ie("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=d&&d.token,a=new cE(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{je(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(yE)},r))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&je(f),l())}}}interrupt(e){Ie("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ie("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Mc(this.interruptReasons_)&&(this.reconnectDelay_=ps,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Ga(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new te(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ie("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ou&&(this.reconnectDelay_=ru,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ie("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ou&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Fd.replace(/\./g,"-")]=1,Td()?e["framework.cordova"]=1:iv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ji.getInstance().currentlyOnline();return Mc(this.interruptReasons_)&&e}}Nt.nextPersistentConnectionId_=0;Nt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new q(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new q(zn,e),i=new q(zn,n);return this.compare(s,i)!==0}minPost(){return q.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yi;class lh extends Tr{static get __EMPTY_NODE(){return yi}static set __EMPTY_NODE(e){yi=e}compare(e,n){return xn(e.name,n.name)}isDefinedOn(e){throw ts("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return q.MIN}maxPost(){return new q(Tn,yi)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new q(e,yi)}toString(){return".key"}}const Wn=new lh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ce{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ce.RED,this.left=i??Ue.EMPTY_NODE,this.right=r??Ue.EMPTY_NODE}copy(e,n,s,i,r){return new Ce(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ue.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ue.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ce.RED=!0;Ce.BLACK=!1;class vE{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ce(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ue{constructor(e,n=Ue.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ue(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ce.BLACK,null,null))}remove(e){return new Ue(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ce.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new vi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new vi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new vi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new vi(this.root_,null,this.comparator_,!0,e)}}Ue.EMPTY_NODE=new vE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(t,e){return xn(t.name,e.name)}function tl(t,e){return xn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jo;function EE(t){Jo=t}const ch=function(t){return typeof t=="number"?"number:"+Hd(t):"string:"+t},uh=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&bt(e,".sv"),"Priority must be a string or number.")}else T(t===Jo||t.isEmpty(),"priority of unexpected type.");T(t===Jo||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let au;class we{constructor(e,n=we.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),uh(this.priorityNode_)}static set __childrenNodeConstructor(e){au=e}static get __childrenNodeConstructor(){return au}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new we(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return K(e)?this:V(e)===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:we.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=V(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(T(s!==".priority"||Jt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,we.__childrenNodeConstructor.EMPTY_NODE.updateChild(ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ch(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Hd(this.value_):e+=this.value_,this.lazyHash_=Ud(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===we.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof we.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=we.VALUE_TYPE_ORDER.indexOf(n),r=we.VALUE_TYPE_ORDER.indexOf(s);return T(i>=0,"Unknown leaf type: "+n),T(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}we.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fh,dh;function wE(t){fh=t}function CE(t){dh=t}class SE extends Tr{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?xn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return q.MIN}maxPost(){return new q(Tn,new we("[PRIORITY-POST]",dh))}makePost(e,n){const s=fh(e);return new q(n,new we("[PRIORITY-POST]",s))}toString(){return".priority"}}const _e=new SE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE=Math.log(2);class IE{constructor(e){const n=r=>parseInt(Math.log(r)/TE,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Wi=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let f,d;if(u===0)return null;if(u===1)return f=t[l],d=n?n(f):f,new Ce(d,f.node,Ce.BLACK,null,null);{const g=parseInt(u/2,10)+l,_=i(l,g),v=i(g+1,c);return f=t[g],d=n?n(f):f,new Ce(d,f.node,Ce.BLACK,_,v)}},r=function(l){let c=null,u=null,f=t.length;const d=function(_,v){const E=f-_,x=f;f-=_;const P=i(E+1,x),D=t[E],O=n?n(D):D;g(new Ce(O,D.node,v,null,P))},g=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const v=l.nextBitIsOne(),E=Math.pow(2,l.count-(_+1));v?d(E,Ce.BLACK):(d(E,Ce.BLACK),d(E,Ce.RED))}return u},o=new IE(t.length),a=r(o);return new Ue(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fo;const Mn={};class St{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return T(Mn&&_e,"ChildrenNode.ts has not been loaded"),fo=fo||new St({".priority":Mn},{".priority":_e}),fo}get(e){const n=Kn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ue?n:null}hasIndex(e){return bt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==Wn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(q.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Wi(s,e.getCompare()):a=Mn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new St(u,c)}addToIndexes(e,n){const s=Ui(this.indexes_,(i,r)=>{const o=Kn(this.indexSet_,r);if(T(o,"Missing index implementation for "+r),i===Mn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(q.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Wi(a,o.getCompare())}else return Mn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new q(e.name,a))),l.insert(e,e.node)}});return new St(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ui(this.indexes_,i=>{if(i===Mn)return i;{const r=n.get(e.name);return r?i.remove(new q(e.name,r)):i}});return new St(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _s;class F{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&uh(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return _s||(_s=new F(new Ue(tl),null,St.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_s}updatePriority(e){return this.children_.isEmpty()?this:new F(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?_s:n}}getChild(e){const n=V(e);return n===null?this:this.getImmediateChild(n).getChild(ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new q(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?_s:this.priorityNode_;return new F(i,o,r)}}updateChild(e,n){const s=V(e);if(s===null)return n;{T(V(e)!==".priority"||Jt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ce(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(_e,(o,a)=>{n[o]=a.val(e),s++,r&&F.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ch(this.getPriority().val())+":"),this.forEachChild(_e,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Ud(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new q(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new q(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,q.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,q.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ii?-1:0}withIndex(e){if(e===Wn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new F(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Wn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(_e),i=n.getIterator(_e);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Wn?null:this.indexMap_.get(e.toString())}}F.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class AE extends F{constructor(){super(new Ue(tl),F.EMPTY_NODE,St.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return F.EMPTY_NODE}isEmpty(){return!1}}const ii=new AE;Object.defineProperties(q,{MIN:{value:new q(zn,F.EMPTY_NODE)},MAX:{value:new q(Tn,ii)}});lh.__EMPTY_NODE=F.EMPTY_NODE;we.__childrenNodeConstructor=F;EE(ii);CE(ii);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE=!0;function Se(t,e=null){if(t===null)return F.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new we(n,Se(e))}if(!(t instanceof Array)&&NE){const n=[];let s=!1;if(Ne(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Se(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new q(o,l)))}}),n.length===0)return F.EMPTY_NODE;const r=Wi(n,bE,o=>o.name,tl);if(s){const o=Wi(n,_e.getCompare());return new F(r,Se(e),new St({".priority":o},{".priority":_e}))}else return new F(r,Se(e),St.Default)}else{let n=F.EMPTY_NODE;return Ne(t,(s,i)=>{if(bt(t,s)&&s.substring(0,1)!=="."){const r=Se(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Se(e))}}wE(Se);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE extends Tr{constructor(e){super(),this.indexPath_=e,T(!K(e)&&V(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?xn(e.name,n.name):r}makePost(e,n){const s=Se(e),i=F.EMPTY_NODE.updateChild(this.indexPath_,s);return new q(n,i)}maxPost(){const e=F.EMPTY_NODE.updateChild(this.indexPath_,ii);return new q(Tn,e)}toString(){return $s(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE extends Tr{compare(e,n){const s=e.node.compareTo(n.node);return s===0?xn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return q.MIN}maxPost(){return q.MAX}makePost(e,n){const s=Se(e);return new q(n,s)}toString(){return".value"}}const xE=new OE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(t){return{type:"value",snapshotNode:t}}function Gn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Hs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function js(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function PE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Hs(n,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Gn(n,s)):o.trackChildChange(js(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(_e,(i,r)=>{n.hasChild(i)||s.trackChildChange(Hs(i,r))}),n.isLeafNode()||n.forEachChild(_e,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(js(i,r,o))}else s.trackChildChange(Gn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?F.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e){this.indexedFilter_=new nl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ws.getStartPost_(e),this.endPost_=Ws.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new q(n,s))||(s=F.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=F.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(F.EMPTY_NODE);const r=this;return n.forEachChild(_e,(o,a)=>{r.matches(new q(o,a))||(i=i.updateImmediateChild(o,F.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ws(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new q(n,s))||(s=F.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=F.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=F.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(F.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,F.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const f=this.index_.getCompare();o=(d,g)=>f(g,d)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const l=new q(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,l);if(u&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(js(n,s,f)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Hs(n,f));const v=a.updateImmediateChild(n,F.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Gn(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Hs(c.name,c.node)),r.trackChildChange(Gn(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,F.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:zn}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Tn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_e}copy(){const e=new sl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function kE(t){return t.loadsAllData()?new nl(t.getIndex()):t.hasLimit()?new DE(t):new Ws(t)}function lu(t){const e={};if(t.isDefault())return e;let n;if(t.index_===_e?n="$priority":t.index_===xE?n="$value":t.index_===Wn?n="$key":(T(t.index_ instanceof RE,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ee(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ee(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ee(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ee(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ee(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function cu(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==_e&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi extends ih{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=si("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=qi.getListenId_(e,s),a={};this.listens_[o]=a;const l=lu(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let f=u;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(r,f,!1,s),Kn(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=qi.getListenId_(e,n);delete this.listens_[s]}get(e){const n=lu(e._queryParams),s=e._path.toString(),i=new br;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+fv(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Fs(a.responseText)}catch{je("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&je("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(){this.rootNode_=F.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(){return{value:null,children:new Map}}function ph(t,e,n){if(K(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=V(e);t.children.has(s)||t.children.set(s,Vi());const i=t.children.get(s);e=ce(e),ph(i,e,n)}}function Qo(t,e,n){t.value!==null?n(e,t.value):LE(t,(s,i)=>{const r=new te(e.toString()+"/"+s);Qo(i,r,n)})}function LE(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ne(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=10*1e3,BE=30*1e3,UE=5*60*1e3;class $E{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new FE(e);const s=uu+(BE-uu)*Math.random();Ts(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ne(e,(i,r)=>{r>0&&bt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Ts(this.reportStats_.bind(this),Math.floor(Math.random()*2*UE))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(it||(it={}));function il(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function rl(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ol(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=it.ACK_USER_WRITE,this.source=il()}operationForChild(e){if(K(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new te(e));return new Ki(Q(),n,this.revert)}}else return T(V(this.path)===e,"operationForChild called for unrelated child."),new Ki(ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n){this.source=e,this.path=n,this.type=it.LISTEN_COMPLETE}operationForChild(e){return K(this.path)?new qs(this.source,Q()):new qs(this.source,ce(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=it.OVERWRITE}operationForChild(e){return K(this.path)?new In(this.source,Q(),this.snap.getImmediateChild(e)):new In(this.source,ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=it.MERGE}operationForChild(e){if(K(this.path)){const n=this.children.subtree(new te(e));return n.isEmpty()?null:n.value?new In(this.source,Q(),n.value):new Yn(this.source,Q(),n)}else return T(V(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Yn(this.source,ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(K(e))return this.isFullyInitialized()&&!this.filtered_;const n=V(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function jE(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(PE(o.childName,o.snapshotNode))}),gs(t,i,"child_removed",e,s,n),gs(t,i,"child_added",e,s,n),gs(t,i,"child_moved",r,s,n),gs(t,i,"child_changed",e,s,n),gs(t,i,"value",e,s,n),i}function gs(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>qE(t,a,l)),o.forEach(a=>{const l=WE(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function WE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function qE(t,e,n){if(e.childName==null||n.childName==null)throw ts("Should only compare child_ events.");const s=new q(e.childName,e.snapshotNode),i=new q(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(t,e){return{eventCache:t,serverCache:e}}function Is(t,e,n,s){return Ir(new Qt(e,n,s),t.serverCache)}function _h(t,e,n,s){return Ir(t.eventCache,new Qt(e,n,s))}function zi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function An(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ho;const VE=()=>(ho||(ho=new Ue(Rb)),ho);class oe{constructor(e,n=VE()){this.value=e,this.children=n}static fromObject(e){let n=new oe(null);return Ne(e,(s,i)=>{n=n.set(new te(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Q(),value:this.value};if(K(e))return null;{const s=V(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ce(e),n);return r!=null?{path:pe(new te(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(K(e))return this;{const n=V(e),s=this.children.get(n);return s!==null?s.subtree(ce(e)):new oe(null)}}set(e,n){if(K(e))return new oe(n,this.children);{const s=V(e),r=(this.children.get(s)||new oe(null)).set(ce(e),n),o=this.children.insert(s,r);return new oe(this.value,o)}}remove(e){if(K(e))return this.children.isEmpty()?new oe(null):new oe(null,this.children);{const n=V(e),s=this.children.get(n);if(s){const i=s.remove(ce(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new oe(null):new oe(this.value,r)}else return this}}get(e){if(K(e))return this.value;{const n=V(e),s=this.children.get(n);return s?s.get(ce(e)):null}}setTree(e,n){if(K(e))return n;{const s=V(e),r=(this.children.get(s)||new oe(null)).setTree(ce(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new oe(this.value,o)}}fold(e){return this.fold_(Q(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(pe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Q(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(K(e))return null;{const r=V(e),o=this.children.get(r);return o?o.findOnPath_(ce(e),pe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Q(),n)}foreachOnPath_(e,n,s){if(K(e))return this;{this.value&&s(n,this.value);const i=V(e),r=this.children.get(i);return r?r.foreachOnPath_(ce(e),pe(n,i),s):new oe(null)}}foreach(e){this.foreach_(Q(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(pe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.writeTree_=e}static empty(){return new ot(new oe(null))}}function As(t,e,n){if(K(e))return new ot(new oe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Fe(i,e);return r=r.updateChild(o,n),new ot(t.writeTree_.set(i,r))}else{const i=new oe(n),r=t.writeTree_.setTree(e,i);return new ot(r)}}}function Xo(t,e,n){let s=t;return Ne(n,(i,r)=>{s=As(s,pe(e,i),r)}),s}function fu(t,e){if(K(e))return ot.empty();{const n=t.writeTree_.setTree(e,new oe(null));return new ot(n)}}function Zo(t,e){return Pn(t,e)!=null}function Pn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Fe(n.path,e)):null}function du(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(_e,(s,i)=>{e.push(new q(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new q(s,i.value))}),e}function Vt(t,e){if(K(e))return t;{const n=Pn(t,e);return n!=null?new ot(new oe(n)):new ot(t.writeTree_.subtree(e))}}function ea(t){return t.writeTree_.isEmpty()}function Jn(t,e){return gh(Q(),t.writeTree_,e)}function gh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(T(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=gh(pe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(pe(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(t,e){return bh(e,t)}function KE(t,e,n,s,i){T(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=As(t.visibleWrites,e,n)),t.lastWriteId=s}function zE(t,e,n,s){T(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Xo(t.visibleWrites,e,n),t.lastWriteId=s}function GE(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function YE(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&JE(a,s.path)?i=!1:Xe(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return QE(t),!0;if(s.snap)t.visibleWrites=fu(t.visibleWrites,s.path);else{const a=s.children;Ne(a,l=>{t.visibleWrites=fu(t.visibleWrites,pe(s.path,l))})}return!0}else return!1}function JE(t,e){if(t.snap)return Xe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Xe(pe(t.path,n),e))return!0;return!1}function QE(t){t.visibleWrites=mh(t.allWrites,XE,Q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function XE(t){return t.visible}function mh(t,e,n){let s=ot.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Xe(n,o)?(a=Fe(n,o),s=As(s,a,r.snap)):Xe(o,n)&&(a=Fe(o,n),s=As(s,Q(),r.snap.getChild(a)));else if(r.children){if(Xe(n,o))a=Fe(n,o),s=Xo(s,a,r.children);else if(Xe(o,n))if(a=Fe(o,n),K(a))s=Xo(s,Q(),r.children);else{const l=Kn(r.children,V(a));if(l){const c=l.getChild(ce(a));s=As(s,Q(),c)}}}else throw ts("WriteRecord should have .snap or .children")}}return s}function yh(t,e,n,s,i){if(!s&&!i){const r=Pn(t.visibleWrites,e);if(r!=null)return r;{const o=Vt(t.visibleWrites,e);if(ea(o))return n;if(n==null&&!Zo(o,Q()))return null;{const a=n||F.EMPTY_NODE;return Jn(o,a)}}}else{const r=Vt(t.visibleWrites,e);if(!i&&ea(r))return n;if(!i&&n==null&&!Zo(r,Q()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Xe(c.path,e)||Xe(e,c.path))},a=mh(t.allWrites,o,e),l=n||F.EMPTY_NODE;return Jn(a,l)}}}function ZE(t,e,n){let s=F.EMPTY_NODE;const i=Pn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(_e,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Vt(t.visibleWrites,e);return n.forEachChild(_e,(o,a)=>{const l=Jn(Vt(r,new te(o)),a);s=s.updateImmediateChild(o,l)}),du(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Vt(t.visibleWrites,e);return du(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function ew(t,e,n,s,i){T(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=pe(e,n);if(Zo(t.visibleWrites,r))return null;{const o=Vt(t.visibleWrites,r);return ea(o)?i.getChild(n):Jn(o,i.getChild(n))}}function tw(t,e,n,s){const i=pe(e,n),r=Pn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Vt(t.visibleWrites,i);return Jn(o,s.getNode().getImmediateChild(n))}else return null}function nw(t,e){return Pn(t.visibleWrites,e)}function sw(t,e,n,s,i,r,o){let a;const l=Vt(t.visibleWrites,e),c=Pn(l,Q());if(c!=null)a=c;else if(n!=null)a=Jn(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],f=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let g=d.getNext();for(;g&&u.length<i;)f(g,s)!==0&&u.push(g),g=d.getNext();return u}else return[]}function iw(){return{visibleWrites:ot.empty(),allWrites:[],lastWriteId:-1}}function Gi(t,e,n,s){return yh(t.writeTree,t.treePath,e,n,s)}function al(t,e){return ZE(t.writeTree,t.treePath,e)}function hu(t,e,n,s){return ew(t.writeTree,t.treePath,e,n,s)}function Yi(t,e){return nw(t.writeTree,pe(t.treePath,e))}function rw(t,e,n,s,i,r){return sw(t.writeTree,t.treePath,e,n,s,i,r)}function ll(t,e,n){return tw(t.writeTree,t.treePath,e,n)}function vh(t,e){return bh(pe(t.treePath,e),t.writeTree)}function bh(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,js(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Hs(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Gn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,js(s,e.snapshotNode,i.oldSnap));else throw ts("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Eh=new aw;class cl{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Qt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ll(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:An(this.viewCache_),r=rw(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lw(t){return{filter:t}}function cw(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function uw(t,e,n,s,i){const r=new ow;let o,a;if(n.type===it.OVERWRITE){const c=n;c.source.fromUser?o=ta(t,e,c.path,c.snap,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!K(c.path),o=Ji(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===it.MERGE){const c=n;c.source.fromUser?o=dw(t,e,c.path,c.children,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=na(t,e,c.path,c.children,s,i,a,r))}else if(n.type===it.ACK_USER_WRITE){const c=n;c.revert?o=_w(t,e,c.path,s,i,r):o=hw(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===it.LISTEN_COMPLETE)o=pw(t,e,n.path,s,r);else throw ts("Unknown operation type: "+n.type);const l=r.getChanges();return fw(e,o,l),{viewCache:o,changes:l}}function fw(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=zi(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(hh(zi(e)))}}function wh(t,e,n,s,i,r){const o=e.eventCache;if(Yi(s,n)!=null)return e;{let a,l;if(K(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=An(e),u=c instanceof F?c:F.EMPTY_NODE,f=al(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),f,r)}else{const c=Gi(s,An(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=V(n);if(c===".priority"){T(Jt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const f=hu(s,n,u,l);f!=null?a=t.filter.updatePriority(u,f):a=o.getNode()}else{const u=ce(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=hu(s,n,o.getNode(),l);d!=null?f=o.getNode().getImmediateChild(c).updateChild(u,d):f=o.getNode().getImmediateChild(c)}else f=ll(s,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,u,i,r):a=o.getNode()}}return Is(e,a,o.isFullyInitialized()||K(n),t.filter.filtersNodes())}}function Ji(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(K(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),g,null)}else{const g=V(n);if(!l.isCompleteForPath(n)&&Jt(n)>1)return e;const _=ce(n),E=l.getNode().getImmediateChild(g).updateChild(_,s);g===".priority"?c=u.updatePriority(l.getNode(),E):c=u.updateChild(l.getNode(),g,E,_,Eh,null)}const f=_h(e,c,l.isFullyInitialized()||K(n),u.filtersNodes()),d=new cl(i,f,r);return wh(t,f,n,i,d,a)}function ta(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new cl(i,e,r);if(K(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Is(e,c,!0,t.filter.filtersNodes());else{const f=V(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Is(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=ce(n),g=a.getNode().getImmediateChild(f);let _;if(K(d))_=s;else{const v=u.getCompleteChild(f);v!=null?Xa(d)===".priority"&&v.getChild(oh(d)).isEmpty()?_=v:_=v.updateChild(d,s):_=F.EMPTY_NODE}if(g.equals(_))l=e;else{const v=t.filter.updateChild(a.getNode(),f,_,d,u,o);l=Is(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function pu(t,e){return t.eventCache.isCompleteForChild(e)}function dw(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=pe(n,l);pu(e,V(u))&&(a=ta(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=pe(n,l);pu(e,V(u))||(a=ta(t,a,u,c,i,r,o))}),a}function _u(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function na(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;K(n)?c=s:c=new oe(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((f,d)=>{if(u.hasChild(f)){const g=e.serverCache.getNode().getImmediateChild(f),_=_u(t,g,d);l=Ji(t,l,new te(f),_,i,r,o,a)}}),c.children.inorderTraversal((f,d)=>{const g=!e.serverCache.isCompleteForChild(f)&&d.value===null;if(!u.hasChild(f)&&!g){const _=e.serverCache.getNode().getImmediateChild(f),v=_u(t,_,d);l=Ji(t,l,new te(f),v,i,r,o,a)}}),l}function hw(t,e,n,s,i,r,o){if(Yi(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(K(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ji(t,e,n,l.getNode().getChild(n),i,r,a,o);if(K(n)){let c=new oe(null);return l.getNode().forEachChild(Wn,(u,f)=>{c=c.set(new te(u),f)}),na(t,e,n,c,i,r,a,o)}else return e}else{let c=new oe(null);return s.foreach((u,f)=>{const d=pe(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),na(t,e,n,c,i,r,a,o)}}function pw(t,e,n,s,i){const r=e.serverCache,o=_h(e,r.getNode(),r.isFullyInitialized()||K(n),r.isFiltered());return wh(t,o,n,s,Eh,i)}function _w(t,e,n,s,i,r){let o;if(Yi(s,n)!=null)return e;{const a=new cl(s,e,i),l=e.eventCache.getNode();let c;if(K(n)||V(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Gi(s,An(e));else{const f=e.serverCache.getNode();T(f instanceof F,"serverChildren would be complete if leaf node"),u=al(s,f)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=V(n);let f=ll(s,u,e.serverCache);f==null&&e.serverCache.isCompleteForChild(u)&&(f=l.getImmediateChild(u)),f!=null?c=t.filter.updateChild(l,u,f,ce(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,F.EMPTY_NODE,ce(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Gi(s,An(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Yi(s,Q())!=null,Is(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new nl(s.getIndex()),r=kE(s);this.processor_=lw(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(F.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(F.EMPTY_NODE,a.getNode(),null),u=new Qt(l,o.isFullyInitialized(),i.filtersNodes()),f=new Qt(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ir(f,u),this.eventGenerator_=new HE(this.query_)}get query(){return this.query_}}function mw(t){return t.viewCache_.serverCache.getNode()}function yw(t){return zi(t.viewCache_)}function vw(t,e){const n=An(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!K(e)&&!n.getImmediateChild(V(e)).isEmpty())?n.getChild(e):null}function gu(t){return t.eventRegistrations_.length===0}function bw(t,e){t.eventRegistrations_.push(e)}function mu(t,e,n){const s=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function yu(t,e,n,s){e.type===it.MERGE&&e.source.queryId!==null&&(T(An(t.viewCache_),"We should always have a full cache before handling merges"),T(zi(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=uw(t.processor_,i,e,n,s);return cw(t.processor_,r.viewCache),T(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Ch(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Ew(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(_e,(r,o)=>{s.push(Gn(r,o))}),n.isFullyInitialized()&&s.push(hh(n.getNode())),Ch(t,s,n.getNode(),e)}function Ch(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return jE(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qi;class Sh{constructor(){this.views=new Map}}function ww(t){T(!Qi,"__referenceConstructor has already been defined"),Qi=t}function Cw(){return T(Qi,"Reference.ts has not been loaded"),Qi}function Sw(t){return t.views.size===0}function ul(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return T(r!=null,"SyncTree gave us an op for an invalid query."),yu(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(yu(o,e,n,s));return r}}function Th(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Gi(n,i?s:null),l=!1;a?l=!0:s instanceof F?(a=al(n,s),l=!1):(a=F.EMPTY_NODE,l=!1);const c=Ir(new Qt(a,l,!1),new Qt(s,i,!1));return new gw(e,c)}return o}function Tw(t,e,n,s,i,r){const o=Th(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),bw(o,n),Ew(o,n)}function Iw(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Xt(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(mu(c,n,s)),gu(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(mu(l,n,s)),gu(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Xt(t)&&r.push(new(Cw())(e._repo,e._path)),{removed:r,events:o}}function Ih(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Kt(t,e){let n=null;for(const s of t.views.values())n=n||vw(s,e);return n}function Ah(t,e){if(e._queryParams.loadsAllData())return Nr(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Nh(t,e){return Ah(t,e)!=null}function Xt(t){return Nr(t)!=null}function Nr(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xi;function Aw(t){T(!Xi,"__referenceConstructor has already been defined"),Xi=t}function Nw(){return T(Xi,"Reference.ts has not been loaded"),Xi}let Rw=1;class vu{constructor(e){this.listenProvider_=e,this.syncPointTree_=new oe(null),this.pendingWriteTree_=iw(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ow(t,e,n,s,i){return KE(t.pendingWriteTree_,e,n,s,i),i?is(t,new In(il(),e,n)):[]}function xw(t,e,n,s){zE(t.pendingWriteTree_,e,n,s);const i=oe.fromObject(n);return is(t,new Yn(il(),e,i))}function _n(t,e,n=!1){const s=GE(t.pendingWriteTree_,e);if(YE(t.pendingWriteTree_,e)){let r=new oe(null);return s.snap!=null?r=r.set(Q(),!0):Ne(s.children,o=>{r=r.set(new te(o),!0)}),is(t,new Ki(s.path,r,n))}else return[]}function ri(t,e,n){return is(t,new In(rl(),e,n))}function Pw(t,e,n){const s=oe.fromObject(n);return is(t,new Yn(rl(),e,s))}function Dw(t,e){return is(t,new qs(rl(),e))}function kw(t,e,n){const s=fl(t,n);if(s){const i=dl(s),r=i.path,o=i.queryId,a=Fe(r,e),l=new qs(ol(o),a);return hl(t,r,l)}else return[]}function Zi(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Nh(o,e))){const l=Iw(o,e,n,s);Sw(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(r,(d,g)=>Xt(g));if(u&&!f){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const g=Fw(d);for(let _=0;_<g.length;++_){const v=g[_],E=v.query,x=Dh(t,v);t.listenProvider_.startListening(Ns(E),Vs(t,E),x.hashFn,x.onComplete)}}}!f&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Ns(e),null):c.forEach(d=>{const g=t.queryToTagMap.get(Rr(d));t.listenProvider_.stopListening(Ns(d),g)}))}Bw(t,c)}return a}function Rh(t,e,n,s){const i=fl(t,s);if(i!=null){const r=dl(i),o=r.path,a=r.queryId,l=Fe(o,e),c=new In(ol(a),l,n);return hl(t,o,c)}else return[]}function Mw(t,e,n,s){const i=fl(t,s);if(i){const r=dl(i),o=r.path,a=r.queryId,l=Fe(o,e),c=oe.fromObject(n),u=new Yn(ol(a),l,c);return hl(t,o,u)}else return[]}function sa(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,g)=>{const _=Fe(d,i);r=r||Kt(g,_),o=o||Xt(g)});let a=t.syncPointTree_.get(i);a?(o=o||Xt(a),r=r||Kt(a,Q())):(a=new Sh,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=F.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const v=Kt(_,Q());v&&(r=r.updateImmediateChild(g,v))}));const c=Nh(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Rr(e);T(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const g=Uw();t.queryToTagMap.set(d,g),t.tagToQueryMap.set(g,d)}const u=Ar(t.pendingWriteTree_,i);let f=Tw(a,e,n,u,r,l);if(!c&&!o&&!s){const d=Ah(a,e);f=f.concat($w(t,e,d))}return f}function Oh(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Fe(o,e),c=Kt(a,l);if(c)return c});return yh(i,e,r,n,!0)}function Lw(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const f=Fe(c,n);s=s||Kt(u,f)});let i=t.syncPointTree_.get(n);i?s=s||Kt(i,Q()):(i=new Sh,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Qt(s,!0,!1):null,a=Ar(t.pendingWriteTree_,e._path),l=Th(i,e,a,r?o.getNode():F.EMPTY_NODE,r);return yw(l)}function is(t,e){return xh(e,t.syncPointTree_,null,Ar(t.pendingWriteTree_,Q()))}function xh(t,e,n,s){if(K(t.path))return Ph(t,e,n,s);{const i=e.get(Q());n==null&&i!=null&&(n=Kt(i,Q()));let r=[];const o=V(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=vh(s,o);r=r.concat(xh(a,l,c,u))}return i&&(r=r.concat(ul(i,t,s,n))),r}}function Ph(t,e,n,s){const i=e.get(Q());n==null&&i!=null&&(n=Kt(i,Q()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=vh(s,o),u=t.operationForChild(o);u&&(r=r.concat(Ph(u,a,l,c)))}),i&&(r=r.concat(ul(i,t,s,n))),r}function Dh(t,e){const n=e.query,s=Vs(t,n);return{hashFn:()=>(mw(e)||F.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?kw(t,n._path,s):Dw(t,n._path);{const r=Pb(i,n);return Zi(t,n,null,r)}}}}function Vs(t,e){const n=Rr(e);return t.queryToTagMap.get(n)}function Rr(t){return t._path.toString()+"$"+t._queryIdentifier}function fl(t,e){return t.tagToQueryMap.get(e)}function dl(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new te(t.substr(0,e))}}function hl(t,e,n){const s=t.syncPointTree_.get(e);T(s,"Missing sync point for query tag that we're tracking");const i=Ar(t.pendingWriteTree_,e);return ul(s,n,i,null)}function Fw(t){return t.fold((e,n,s)=>{if(n&&Xt(n))return[Nr(n)];{let i=[];return n&&(i=Ih(n)),Ne(s,(r,o)=>{i=i.concat(o)}),i}})}function Ns(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Nw())(t._repo,t._path):t}function Bw(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Rr(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Uw(){return Rw++}function $w(t,e,n){const s=e._path,i=Vs(t,e),r=Dh(t,n),o=t.listenProvider_.startListening(Ns(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)T(!Xt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,f)=>{if(!K(c)&&u&&Xt(u))return[Nr(u).query];{let d=[];return u&&(d=d.concat(Ih(u).map(g=>g.query))),Ne(f,(g,_)=>{d=d.concat(_)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Ns(u),Vs(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new pl(n)}node(){return this.node_}}class _l{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=pe(this.path_,e);return new _l(this.syncTree_,n)}node(){return Oh(this.syncTree_,this.path_)}}const Hw=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},bu=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return jw(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Ww(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},jw=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},Ww=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&T(!1,"Unexpected increment value: "+s);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},kh=function(t,e,n,s){return gl(e,new _l(n,t),s)},qw=function(t,e,n){return gl(t,new pl(e),n)};function gl(t,e,n){const s=t.getPriority().val(),i=bu(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=bu(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new we(a,Se(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new we(i))),o.forEachChild(_e,(a,l)=>{const c=gl(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function yl(t,e){let n=e instanceof te?e:new te(e),s=t,i=V(n);for(;i!==null;){const r=Kn(s.node.children,i)||{children:{},childCount:0};s=new ml(i,s,r),n=ce(n),i=V(n)}return s}function rs(t){return t.node.value}function Mh(t,e){t.node.value=e,ia(t)}function Lh(t){return t.node.childCount>0}function Vw(t){return rs(t)===void 0&&!Lh(t)}function Or(t,e){Ne(t.node.children,(n,s)=>{e(new ml(n,t,s))})}function Fh(t,e,n,s){n&&!s&&e(t),Or(t,i=>{Fh(i,e,!0,s)}),n&&s&&e(t)}function Kw(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function oi(t){return new te(t.parent===null?t.name:oi(t.parent)+"/"+t.name)}function ia(t){t.parent!==null&&zw(t.parent,t.name,t)}function zw(t,e,n){const s=Vw(n),i=bt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,ia(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ia(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw=/[\[\].#$\/\u0000-\u001F\u007F]/,Yw=/[\[\].#$\u0000-\u001F\u007F]/,po=10*1024*1024,vl=function(t){return typeof t=="string"&&t.length!==0&&!Gw.test(t)},Bh=function(t){return typeof t=="string"&&t.length!==0&&!Yw.test(t)},Jw=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Bh(t)},Qw=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!za(t)||t&&typeof t=="object"&&bt(t,".sv")},bl=function(t,e,n){const s=n instanceof te?new dE(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+dn(s));if(typeof e=="function")throw new Error(t+"contains a function "+dn(s)+" with contents = "+e.toString());if(za(e))throw new Error(t+"contains "+e.toString()+" "+dn(s));if(typeof e=="string"&&e.length>po/3&&wr(e)>po)throw new Error(t+"contains a string greater than "+po+" utf8 bytes "+dn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ne(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!vl(o)))throw new Error(t+" contains an invalid key ("+o+") "+dn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);hE(s,o),bl(t,a,s),pE(s)}),i&&r)throw new Error(t+' contains ".value" child '+dn(s)+" in addition to actual children.")}},Xw=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=$s(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!vl(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(fE);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&Xe(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Zw=function(t,e,n,s){const i=Va(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Ne(e,(o,a)=>{const l=new te(o);if(bl(i,a,pe(n,l)),Xa(l)===".priority"&&!Qw(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),Xw(i,r)},Uh=function(t,e,n,s){if(!Bh(n))throw new Error(Va(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},eC=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Uh(t,e,n)},tC=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!vl(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Jw(n))throw new Error(Va(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function El(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Za(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function $h(t,e,n){El(t,n),Hh(t,s=>Za(s,e))}function mt(t,e,n){El(t,n),Hh(t,s=>Xe(s,e)||Xe(e,s))}function Hh(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(sC(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function sC(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Ss&&Ie("event: "+n.toString()),ss(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC="repo_interrupt",rC=25;class oC{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new nC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Vi(),this.transactionQueueTree_=new ml,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function aC(t,e,n){if(t.stats_=Ja(t.repoInfo_),t.forceRestClient_||Lb())t.server_=new qi(t.repoInfo_,(s,i,r,o)=>{Eu(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>wu(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ee(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Nt(t.repoInfo_,e,(s,i,r,o)=>{Eu(t,s,i,r,o)},s=>{wu(t,s)},s=>{cC(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Hb(t.repoInfo_,()=>new $E(t.stats_,t.server_)),t.infoData_=new ME,t.infoSyncTree_=new vu({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=ri(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Cl(t,"connected",!1),t.serverSyncTree_=new vu({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);mt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function lC(t){const n=t.infoData_.getNode(new te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function wl(t){return Hw({timestamp:lC(t)})}function Eu(t,e,n,s,i){t.dataUpdateCount++;const r=new te(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Ui(n,c=>Se(c));o=Mw(t.serverSyncTree_,r,l,i)}else{const l=Se(n);o=Rh(t.serverSyncTree_,r,l,i)}else if(s){const l=Ui(n,c=>Se(c));o=Pw(t.serverSyncTree_,r,l)}else{const l=Se(n);o=ri(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ks(t,r)),mt(t.eventQueue_,a,o)}function wu(t,e){Cl(t,"connected",e),e===!1&&dC(t)}function cC(t,e){Ne(e,(n,s)=>{Cl(t,n,s)})}function Cl(t,e,n){const s=new te("/.info/"+e),i=Se(n);t.infoData_.updateSnapshot(s,i);const r=ri(t.infoSyncTree_,s,i);mt(t.eventQueue_,s,r)}function jh(t){return t.nextWriteId_++}function uC(t,e,n){const s=Lw(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=Se(i).withIndex(e._queryParams.getIndex());sa(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=ri(t.serverSyncTree_,e._path,r);else{const a=Vs(t.serverSyncTree_,e);o=Rh(t.serverSyncTree_,e._path,r,a)}return mt(t.eventQueue_,e._path,o),Zi(t.serverSyncTree_,e,n,null,!0),r},i=>(xr(t,"get for query "+Ee(e)+" failed: "+i),Promise.reject(new Error(i))))}function fC(t,e,n,s){xr(t,"update",{path:e.toString(),value:n});let i=!0;const r=wl(t),o={};if(Ne(n,(a,l)=>{i=!1,o[a]=kh(pe(e,a),Se(l),t.serverSyncTree_,r)}),i)Ie("update() called with empty data.  Don't do anything."),Cu(t,s,"ok",void 0);else{const a=jh(t),l=xw(t.serverSyncTree_,e,o,a);El(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const f=c==="ok";f||je("update at "+e+" failed: "+c);const d=_n(t.serverSyncTree_,a,!f),g=d.length>0?Ks(t,e):e;mt(t.eventQueue_,g,d),Cu(t,s,c,u)}),Ne(n,c=>{const u=zh(t,pe(e,c));Ks(t,u)}),mt(t.eventQueue_,e,[])}}function dC(t){xr(t,"onDisconnectEvents");const e=wl(t),n=Vi();Qo(t.onDisconnect_,Q(),(i,r)=>{const o=kh(i,r,t.serverSyncTree_,e);ph(n,i,o)});let s=[];Qo(n,Q(),(i,r)=>{s=s.concat(ri(t.serverSyncTree_,i,r));const o=zh(t,i);Ks(t,o)}),t.onDisconnect_=Vi(),mt(t.eventQueue_,Q(),s)}function hC(t,e,n){let s;V(e._path)===".info"?s=sa(t.infoSyncTree_,e,n):s=sa(t.serverSyncTree_,e,n),$h(t.eventQueue_,e._path,s)}function pC(t,e,n){let s;V(e._path)===".info"?s=Zi(t.infoSyncTree_,e,n):s=Zi(t.serverSyncTree_,e,n),$h(t.eventQueue_,e._path,s)}function _C(t){t.persistentConnection_&&t.persistentConnection_.interrupt(iC)}function xr(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ie(n,...e)}function Cu(t,e,n,s){e&&ss(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Wh(t,e,n){return Oh(t.serverSyncTree_,e,n)||F.EMPTY_NODE}function Sl(t,e=t.transactionQueueTree_){if(e||Pr(t,e),rs(e)){const n=Vh(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&gC(t,oi(e),n)}else Lh(e)&&Or(e,n=>{Sl(t,n)})}function gC(t,e,n){const s=n.map(c=>c.currentWriteId),i=Wh(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const f=Fe(e,u.path);r=r.updateChild(f,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{xr(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const f=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(_n(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&f.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Pr(t,yl(t.transactionQueueTree_,e)),Sl(t,t.transactionQueueTree_),mt(t.eventQueue_,e,u);for(let d=0;d<f.length;d++)ss(f[d])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{je("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}Ks(t,e)}},o)}function Ks(t,e){const n=qh(t,e),s=oi(n),i=Vh(t,n);return mC(t,i,s),s}function mC(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Fe(n,l.path);let u=!1,f;if(T(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,f=l.abortReason,i=i.concat(_n(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=rC)u=!0,f="maxretry",i=i.concat(_n(t.serverSyncTree_,l.currentWriteId,!0));else{const d=Wh(t,l.path,o);l.currentInputSnapshot=d;const g=e[a].update(d.val());if(g!==void 0){bl("transaction failed: Data returned ",g,l.path);let _=Se(g);typeof g=="object"&&g!=null&&bt(g,".priority")||(_=_.updatePriority(d.getPriority()));const E=l.currentWriteId,x=wl(t),P=qw(_,d,x);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=P,l.currentWriteId=jh(t),o.splice(o.indexOf(E),1),i=i.concat(Ow(t.serverSyncTree_,l.path,P,l.currentWriteId,l.applyLocally)),i=i.concat(_n(t.serverSyncTree_,E,!0))}else u=!0,f="nodata",i=i.concat(_n(t.serverSyncTree_,l.currentWriteId,!0))}mt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(f),!1,null))))}Pr(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)ss(s[a]);Sl(t,t.transactionQueueTree_)}function qh(t,e){let n,s=t.transactionQueueTree_;for(n=V(e);n!==null&&rs(s)===void 0;)s=yl(s,n),e=ce(e),n=V(e);return s}function Vh(t,e){const n=[];return Kh(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Kh(t,e,n){const s=rs(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Or(e,i=>{Kh(t,i,n)})}function Pr(t,e){const n=rs(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Mh(e,n.length>0?n:void 0)}Or(e,s=>{Pr(t,s)})}function zh(t,e){const n=oi(qh(t,e)),s=yl(t.transactionQueueTree_,e);return Kw(s,i=>{_o(t,i)}),_o(t,s),Fh(s,i=>{_o(t,i)}),n}function _o(t,e){const n=rs(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(_n(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Mh(e,void 0):n.length=r+1,mt(t.eventQueue_,oi(e),i);for(let o=0;o<s.length;o++)ss(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function vC(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):je(`Invalid query segment '${n}' in query '${t}'`)}return e}const Su=function(t,e){const n=bC(t),s=n.namespace;n.domain==="firebase.com"&&xt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&xt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Ab();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Qd(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new te(n.pathString)}},bC=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(u,f)),u<f&&(i=yC(t.substring(u,f)));const d=vC(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ee(this.snapshot.exportVal())}}class wC{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return K(this._path)?null:Xa(this._path)}get ref(){return new kt(this._repo,this._path)}get _queryIdentifier(){const e=cu(this._queryParams),n=Ga(e);return n==="{}"?"default":n}get _queryObject(){return cu(this._queryParams)}isEqual(e){if(e=sn(e),!(e instanceof Tl))return!1;const n=this._repo===e._repo,s=Za(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+uE(this._path)}}class kt extends Tl{constructor(e,n){super(e,n,new sl,!1)}get parent(){const e=oh(this._path);return e===null?null:new kt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class zs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new te(e),s=ra(this.ref,e);return new zs(this._node.getChild(n),s,_e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new zs(i,ra(this.ref,s),_e)))}hasChild(e){const n=new te(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function CC(t,e){return t=sn(t),t._checkNotDeleted("ref"),ra(t._root,e)}function ra(t,e){return t=sn(t),V(t._path)===null?eC("child","path",e):Uh("child","path",e),new kt(t._repo,pe(t._path,e))}function SC(t,e){Zw("update",e,t._path);const n=new br;return fC(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function TC(t){t=sn(t);const e=new Gh(()=>{}),n=new Dr(e);return uC(t._repo,t,n).then(s=>new zs(s,new kt(t._repo,t._path),t._queryParams.getIndex()))}class Dr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new EC("value",this,new zs(e.snapshotNode,new kt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new wC(this,e,n):null}matches(e){return e instanceof Dr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function IC(t,e,n,s,i){const r=new Gh(n,void 0),o=new Dr(r);return hC(t._repo,t,o),()=>pC(t._repo,t,o)}function AC(t,e,n,s){return IC(t,"value",e)}ww(kt);Aw(kt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC="FIREBASE_DATABASE_EMULATOR_HOST",oa={};let RC=!1;function OC(t,e,n,s){t.repoInfo_=new Qd(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function xC(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||xt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ie("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Su(r,i),a=o.repoInfo,l;typeof process<"u"&&Vc&&(l=Vc[NC]),l?(r=`http://${l}?ns=${a.namespace}`,o=Su(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new Bb(t.name,t.options,e);tC("Invalid Firebase Database URL",o),K(o.path)||xt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=DC(a,t,c,new Fb(t.name,n));return new kC(u,t)}function PC(t,e){const n=oa[e];(!n||n[t.key]!==t)&&xt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),_C(t),delete n[t.key]}function DC(t,e,n,s){let i=oa[e.name];i||(i={},oa[e.name]=i);let r=i[t.toURLString()];return r&&xt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new oC(t,RC,n,s),i[t.toURLString()]=r,r}class kC{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(aC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new kt(this._repo,Q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(PC(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&xt("Cannot call "+e+" on a deleted database.")}}function MC(t=kd(),e){const n=Sr(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=tv("database");s&&LC(n,...s)}return n}function LC(t,e,n,s={}){t=sn(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&xt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&xt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Ai(Ai.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:nv(s.mockUserToken,t.app.options.projectId);r=new Ai(o)}OC(i,e,n,r)}/**
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
 */function FC(t){Eb(fb),Yt(new Rt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return xC(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),_t(Kc,zc,t),_t(Kc,zc,"esm2017")}Nt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Nt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};FC();var BC="firebase",UC="10.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t(BC,UC,"app");const $C={apiKey:"AIzaSyBg4vVrlcQiiYaBoN4RxVZNC-NNib1yKMQ",authDomain:"myapp-9c0d3.firebaseapp.com",projectId:"myapp-9c0d3",storageBucket:"myapp-9c0d3.appspot.com",messagingSenderId:"721166739682",appId:"1:721166739682:web:5838f60a79104768fc16bb",databaseURL:"https://myapp-9c0d3-default-rtdb.firebaseio.com/"},Yh=Dd($C),HC=MC(Yh),ai={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Qn={LIGHT:"light",DARK:"dark",COLORED:"colored",AUTO:"auto"},Be={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},jC={BOUNCE:"bounce",SLIDE:"slide",FLIP:"flip",ZOOM:"zoom",NONE:"none"},Jh={dangerouslyHTMLString:!1,multiple:!0,position:ai.TOP_RIGHT,autoClose:5e3,transition:"bounce",hideProgressBar:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,className:"",bodyClassName:"",style:{},progressClassName:"",progressStyle:{},role:"alert",theme:"light"},WC={rtl:!1,newestOnTop:!1,toastClassName:""},Qh={...Jh,...WC};({...Jh,type:Be.DEFAULT});var Z=(t=>(t[t.COLLAPSE_DURATION=300]="COLLAPSE_DURATION",t[t.DEBOUNCE_DURATION=50]="DEBOUNCE_DURATION",t.CSS_NAMESPACE="Toastify",t))(Z||{}),aa=(t=>(t.ENTRANCE_ANIMATION_END="d",t))(aa||{});const qC={enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0},VC={enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0},KC={enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"},zC={enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"},Tu="Toastify--animate Toastify__none-enter";function Xh(t,e=!1){var n;let s=qC;if(!t||typeof t=="string")switch(t){case"flip":s=zC;break;case"zoom":s=KC;break;case"slide":s=VC;break}else s=t;if(e)s.enter=Tu;else if(s.enter===Tu){const i=(n=s.exit.split("__")[1])==null?void 0:n.split("-")[0];s.enter=`Toastify--animate Toastify__${i}-enter`}return s}function GC(t){return t.containerId||String(t.position)}const kr="will-unmount";function YC(t=ai.TOP_RIGHT){return!!document.querySelector(`.${Z.CSS_NAMESPACE}__toast-container--${t}`)}function JC(t=ai.TOP_RIGHT){return`${Z.CSS_NAMESPACE}__toast-container--${t}`}function QC(t,e,n=!1){const s=[`${Z.CSS_NAMESPACE}__toast-container`,`${Z.CSS_NAMESPACE}__toast-container--${t}`,n?`${Z.CSS_NAMESPACE}__toast-container--rtl`:null].filter(Boolean).join(" ");return qn(e)?e({position:t,rtl:n,defaultClassName:s}):`${s} ${e||""}`}function XC(t){var e;const{position:n,containerClassName:s,rtl:i=!1,style:r={}}=t,o=Z.CSS_NAMESPACE,a=JC(n),l=document.querySelector(`.${o}`),c=document.querySelector(`.${a}`),u=!!c&&!((e=c.className)!=null&&e.includes(kr)),f=l||document.createElement("div"),d=document.createElement("div");d.className=QC(n,s,i),d.dataset.testid=`${Z.CSS_NAMESPACE}__toast-container--${n}`,d.id=GC(t);for(const g in r)if(Object.prototype.hasOwnProperty.call(r,g)){const _=r[g];d.style[g]=_}return l||(f.className=Z.CSS_NAMESPACE,document.body.appendChild(f)),u||f.appendChild(d),d}function la(t){var e,n,s;const i=typeof t=="string"?t:((e=t.currentTarget)==null?void 0:e.id)||((n=t.target)==null?void 0:n.id),r=document.getElementById(i);r&&r.removeEventListener("animationend",la,!1);try{Gs[i].unmount(),(s=document.getElementById(i))==null||s.remove(),delete Gs[i],delete Te[i]}catch{}}const Gs=vt({});function ZC(t,e){const n=document.getElementById(String(e));n&&(Gs[n.id]=t)}function ca(t,e=!0){const n=String(t);if(!Gs[n])return;const s=document.getElementById(n);s&&s.classList.add(kr),e?(tS(t),s&&s.addEventListener("animationend",la,!1)):la(n),yt.items=yt.items.filter(i=>i.containerId!==t)}function eS(t){for(const e in Gs)ca(e,t);yt.items=[]}function Zh(t,e){const n=document.getElementById(t.toastId);if(n){let s=t;s={...s,...Xh(s.transition)};const i=s.appendPosition?`${s.exit}--${s.position}`:s.exit;n.className+=` ${i}`,e&&e(n)}}function tS(t){for(const e in Te)if(e===t)for(const n of Te[e]||[])Zh(n)}function nS(t){const e=Xn().find(n=>n.toastId===t);return e==null?void 0:e.containerId}function Il(t){return document.getElementById(t)}function sS(t){const e=Il(t.containerId);return e&&e.classList.contains(kr)}function Iu(t){var e;const n=Vn(t.content)?$(t.content.props):null;return n??$((e=t.data)!=null?e:{})}function iS(t){return t?yt.items.filter(e=>e.containerId===t).length>0:yt.items.length>0}function rS(){if(yt.items.length>0){const t=yt.items.shift();Ni(t==null?void 0:t.toastContent,t==null?void 0:t.toastProps)}}const Te=vt({}),yt=vt({items:[]});function Xn(){const t=$(Te);return Object.values(t).reduce((e,n)=>[...e,...n],[])}function oS(t){return Xn().find(e=>e.toastId===t)}function Ni(t,e={}){if(sS(e)){const n=Il(e.containerId);n&&n.addEventListener("animationend",ua.bind(null,t,e),!1)}else ua(t,e)}function ua(t,e={}){const n=Il(e.containerId);n&&n.removeEventListener("animationend",ua.bind(null,t,e),!1);const s=Te[e.containerId]||[],i=s.length>0;if(!i&&!YC(e.position)){const r=XC(e),o=Hf(TS,e);o.mount(r),ZC(o,r.id)}i&&!e.updateId&&(e.position=s[0].position),Xs(()=>{e.updateId?ze.update(e):ze.add(t,e)})}const ze={add(t,e){const{containerId:n=""}=e;n&&(Te[n]=Te[n]||[],Te[n].find(s=>s.toastId===e.toastId)||setTimeout(()=>{var s,i;e.newestOnTop?(s=Te[n])==null||s.unshift(e):(i=Te[n])==null||i.push(e),e.onOpen&&e.onOpen(Iu(e))},e.delay||0))},remove(t){if(t){const e=nS(t);if(e){const n=Te[e];let s=n.find(i=>i.toastId===t);Te[e]=n.filter(i=>i.toastId!==t),!Te[e].length&&!iS(e)&&ca(e,!1),rS(),Xs(()=>{s!=null&&s.onClose&&(s.onClose(Iu(s)),s=void 0)})}}},update(t={}){const{containerId:e=""}=t;if(e&&t.updateId){Te[e]=Te[e]||[];const n=Te[e].find(r=>r.toastId===t.toastId),s=(n==null?void 0:n.position)!==t.position||(n==null?void 0:n.transition)!==t.transition,i={...t,disabledEnterTransition:!s,updateId:void 0};ze.dismissForce(t==null?void 0:t.toastId),setTimeout(()=>{ne(i.content,i)},t.delay||0)}},clear(t,e=!0){t?ca(t,e):eS(e)},dismissCallback(t){var e;const n=(e=t.currentTarget)==null?void 0:e.id,s=document.getElementById(n);s&&(s.removeEventListener("animationend",ze.dismissCallback,!1),setTimeout(()=>{ze.remove(n)}))},dismiss(t){if(t){const e=Xn();for(const n of e)if(n.toastId===t){Zh(n,s=>{s.addEventListener("animationend",ze.dismissCallback,!1)});break}}},dismissForce(t){if(t){const e=Xn();for(const n of e)if(n.toastId===t){const s=document.getElementById(t);s&&(s.remove(),s.removeEventListener("animationend",ze.dismissCallback,!1),ze.remove(t));break}}}},ep=vt({}),er=vt({});function tp(){return Math.random().toString(36).substring(2,9)}function aS(t){return typeof t=="number"&&!isNaN(t)}function fa(t){return typeof t=="string"}function qn(t){return typeof t=="function"}function Mr(...t){return Dt(...t)}function Ri(t){return typeof t=="object"&&(!!(t!=null&&t.render)||!!(t!=null&&t.setup)||typeof(t==null?void 0:t.type)=="object")}function lS(t={}){ep[`${Z.CSS_NAMESPACE}-default-options`]=t}function cS(){return ep[`${Z.CSS_NAMESPACE}-default-options`]||Qh}function uS(){return document.documentElement.classList.contains("dark")?"dark":"light"}var Oi=(t=>(t[t.Enter=0]="Enter",t[t.Exit=1]="Exit",t))(Oi||{});const np={containerId:{type:[String,Number],required:!1,default:""},clearOnUrlChange:{type:Boolean,required:!1,default:!0},disabledEnterTransition:{type:Boolean,required:!1,default:!1},dangerouslyHTMLString:{type:Boolean,required:!1,default:!1},multiple:{type:Boolean,required:!1,default:!0},limit:{type:Number,required:!1,default:void 0},position:{type:String,required:!1,default:ai.TOP_LEFT},bodyClassName:{type:String,required:!1,default:""},autoClose:{type:[Number,Boolean],required:!1,default:!1},closeButton:{type:[Boolean,Function,Object],required:!1,default:void 0},transition:{type:[String,Object],required:!1,default:"bounce"},hideProgressBar:{type:Boolean,required:!1,default:!1},pauseOnHover:{type:Boolean,required:!1,default:!0},pauseOnFocusLoss:{type:Boolean,required:!1,default:!0},closeOnClick:{type:Boolean,required:!1,default:!0},progress:{type:Number,required:!1,default:void 0},progressClassName:{type:String,required:!1,default:""},toastStyle:{type:Object,required:!1,default(){return{}}},progressStyle:{type:Object,required:!1,default(){return{}}},role:{type:String,required:!1,default:"alert"},theme:{type:String,required:!1,default:Qn.AUTO},content:{type:[String,Object,Function],required:!1,default:""},toastId:{type:[String,Number],required:!1,default:""},data:{type:[Object,String],required:!1,default(){return{}}},type:{type:String,required:!1,default:Be.DEFAULT},icon:{type:[Boolean,String,Number,Object,Function],required:!1,default:void 0},delay:{type:Number,required:!1,default:void 0},onOpen:{type:Function,required:!1,default:void 0},onClose:{type:Function,required:!1,default:void 0},onClick:{type:Function,required:!1,default:void 0},isLoading:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},toastClassName:{type:String,required:!1,default:""},updateId:{type:[String,Number],required:!1,default:""}},fS={autoClose:{type:[Number,Boolean],required:!0},isRunning:{type:Boolean,required:!1,default:void 0},type:{type:String,required:!1,default:Be.DEFAULT},theme:{type:String,required:!1,default:Qn.AUTO},hide:{type:Boolean,required:!1,default:void 0},className:{type:[String,Function],required:!1,default:""},controlledProgress:{type:Boolean,required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:void 0},isIn:{type:Boolean,required:!1,default:void 0},progress:{type:Number,required:!1,default:void 0},closeToast:{type:Function,required:!1,default:void 0}},dS=nn({name:"ProgressBar",props:fS,setup(t,{attrs:e}){const n=nt(),s=be(()=>t.hide?"true":"false"),i=be(()=>({...e.style||{},animationDuration:`${t.autoClose===!0?5e3:t.autoClose}ms`,animationPlayState:t.isRunning?"running":"paused",opacity:t.hide||t.autoClose===!1?0:1,transform:t.controlledProgress?`scaleX(${t.progress})`:"none"})),r=be(()=>[`${Z.CSS_NAMESPACE}__progress-bar`,t.controlledProgress?`${Z.CSS_NAMESPACE}__progress-bar--controlled`:`${Z.CSS_NAMESPACE}__progress-bar--animated`,`${Z.CSS_NAMESPACE}__progress-bar-theme--${t.theme}`,`${Z.CSS_NAMESPACE}__progress-bar--${t.type}`,t.rtl?`${Z.CSS_NAMESPACE}__progress-bar--rtl`:null].filter(Boolean).join(" ")),o=be(()=>`${r.value} ${(e==null?void 0:e.class)||""}`),a=()=>{n.value&&(n.value.onanimationend=null,n.value.ontransitionend=null)},l=()=>{t.isIn&&t.closeToast&&t.autoClose!==!1&&(t.closeToast(),a())},c=be(()=>t.controlledProgress?null:l),u=be(()=>t.controlledProgress?l:null);return Ei(()=>{n.value&&(a(),n.value.onanimationend=c.value,n.value.ontransitionend=u.value)}),()=>J("div",{ref:n,role:"progressbar","aria-hidden":s.value,"aria-label":"notification timer",class:o.value,style:i.value},null)}}),hS=nn({name:"CloseButton",inheritAttrs:!1,props:{theme:{type:String,required:!1,default:Qn.AUTO},type:{type:String,required:!1,default:Qn.LIGHT},ariaLabel:{type:String,required:!1,default:"close"},closeToast:{type:Function,required:!1,default:void 0}},setup(t){return()=>J("button",{class:`${Z.CSS_NAMESPACE}__close-button ${Z.CSS_NAMESPACE}__close-button--${t.theme}`,type:"button",onClick:e=>{e.stopPropagation(),t.closeToast&&t.closeToast(e)},"aria-label":t.ariaLabel},[J("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},[J("path",{"fill-rule":"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"},null)])])}}),Lr=({theme:t,type:e,path:n,...s})=>J("svg",Dt({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${e})`},s),[J("path",{d:n},null)]);function pS(t){return J(Lr,Dt(t,{path:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}),null)}function _S(t){return J(Lr,Dt(t,{path:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}),null)}function gS(t){return J(Lr,Dt(t,{path:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}),null)}function mS(t){return J(Lr,Dt(t,{path:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}),null)}function yS(){return J("div",{class:`${Z.CSS_NAMESPACE}__spinner`},null)}const da={info:_S,warning:pS,success:gS,error:mS,spinner:yS},vS=t=>t in da;function bS({theme:t,type:e,isLoading:n,icon:s}){let i;const r={theme:t,type:e};return n?i=da.spinner():s===!1?i=void 0:Ri(s)?i=$(s):qn(s)?i=s(r):Vn(s)?i=Cn(s,r):fa(s)||aS(s)?i=s:vS(e)&&(i=da[e](r)),i}const ES=()=>{};function wS(t,e,n=Z.COLLAPSE_DURATION){const{scrollHeight:s,style:i}=t,r=n;requestAnimationFrame(()=>{i.minHeight="initial",i.height=s+"px",i.transition=`all ${r}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,r)})})}function CS(t){const e=nt(!1),n=nt(!1),s=nt(!1),i=nt(Oi.Enter),r=vt({...t,appendPosition:t.appendPosition||!1,collapse:typeof t.collapse>"u"?!0:t.collapse,collapseDuration:t.collapseDuration||Z.COLLAPSE_DURATION}),o=r.done||ES,a=be(()=>r.appendPosition?`${r.enter}--${r.position}`:r.enter),l=be(()=>r.appendPosition?`${r.exit}--${r.position}`:r.exit),c=be(()=>t.pauseOnHover?{onMouseenter:E,onMouseleave:v}:{});function u(){const P=a.value.split(" ");d().addEventListener(aa.ENTRANCE_ANIMATION_END,v,{once:!0});const D=M=>{const fe=d();M.target===fe&&(fe.dispatchEvent(new Event(aa.ENTRANCE_ANIMATION_END)),fe.removeEventListener("animationend",D),fe.removeEventListener("animationcancel",D),i.value===Oi.Enter&&M.type!=="animationcancel"&&fe.classList.remove(...P))},O=()=>{const M=d();M.classList.add(...P),M.addEventListener("animationend",D),M.addEventListener("animationcancel",D)};t.pauseOnFocusLoss&&g(),O()}function f(){if(!d())return;const P=()=>{const O=d();O.removeEventListener("animationend",P),r.collapse?wS(O,o,r.collapseDuration):o()},D=()=>{const O=d();i.value=Oi.Exit,O&&(O.className+=` ${l.value}`,O.addEventListener("animationend",P))};n.value||(s.value?P():setTimeout(D))}function d(){return t.toastRef.value}function g(){document.hasFocus()||E(),window.addEventListener("focus",v),window.addEventListener("blur",E)}function _(){window.removeEventListener("focus",v),window.removeEventListener("blur",E)}function v(){(!t.loading.value||t.isLoading===void 0)&&(e.value=!0)}function E(){e.value=!1}function x(P){P&&(P.stopPropagation(),P.preventDefault()),n.value=!1}return Ei(f),Ei(()=>{const P=Xn();n.value=P.findIndex(D=>D.toastId===r.toastId)>-1}),Ei(()=>{t.isLoading!==void 0&&(t.loading.value?E():v())}),cr(u),ur(()=>{t.pauseOnFocusLoss&&_()}),{isIn:n,isRunning:e,hideToast:x,eventHandlers:c}}const SS=nn({name:"ToastItem",inheritAttrs:!1,props:np,setup(t){const e=nt(),n=be(()=>!!t.isLoading),s=be(()=>t.progress!==void 0&&t.progress!==null),i=be(()=>bS(t)),r=be(()=>[`${Z.CSS_NAMESPACE}__toast`,`${Z.CSS_NAMESPACE}__toast-theme--${t.theme}`,`${Z.CSS_NAMESPACE}__toast--${t.type}`,t.rtl?`${Z.CSS_NAMESPACE}__toast--rtl`:void 0,t.toastClassName||""].filter(Boolean).join(" ")),{isRunning:o,isIn:a,hideToast:l,eventHandlers:c}=CS({toastRef:e,loading:n,done:()=>{ze.remove(t.toastId)},...Xh(t.transition,t.disabledEnterTransition),...t});return()=>J("div",Dt({id:t.toastId,class:r.value,style:t.toastStyle||{},ref:e,"data-testid":`toast-item-${t.toastId}`,onClick:u=>{t.closeOnClick&&l(),t.onClick&&t.onClick(u)}},c.value),[J("div",{role:t.role,"data-testid":"toast-body",class:`${Z.CSS_NAMESPACE}__toast-body ${t.bodyClassName||""}`},[i.value!=null&&J("div",{"data-testid":`toast-icon-${t.type}`,class:[`${Z.CSS_NAMESPACE}__toast-icon`,t.isLoading?"":`${Z.CSS_NAMESPACE}--animate-icon ${Z.CSS_NAMESPACE}__zoom-enter`].join(" ")},[Ri(i.value)?mi($(i.value),{theme:t.theme,type:t.type}):qn(i.value)?i.value({theme:t.theme,type:t.type}):i.value]),J("div",{"data-testid":"toast-content"},[Ri(t.content)?mi($(t.content),{toastProps:$(t),closeToast:l,data:t.data}):qn(t.content)?t.content({toastProps:$(t),closeToast:l,data:t.data}):t.dangerouslyHTMLString?mi("div",{innerHTML:t.content}):t.content])]),(t.closeButton===void 0||t.closeButton===!0)&&J(hS,{theme:t.theme,closeToast:u=>{u.stopPropagation(),u.preventDefault(),l()}},null),Ri(t.closeButton)?mi($(t.closeButton),{closeToast:l,type:t.type,theme:t.theme}):qn(t.closeButton)?t.closeButton({closeToast:l,type:t.type,theme:t.theme}):null,J(dS,{className:t.progressClassName,style:t.progressStyle,rtl:t.rtl,theme:t.theme,isIn:a.value,type:t.type,hide:t.hideProgressBar,isRunning:o.value,autoClose:t.autoClose,controlledProgress:s.value,progress:t.progress,closeToast:t.isLoading?void 0:l},null)])}});let Rs=0;function sp(){typeof window>"u"||(Rs&&window.cancelAnimationFrame(Rs),Rs=window.requestAnimationFrame(sp),er.lastUrl!==window.location.href&&(er.lastUrl=window.location.href,ze.clear()))}const TS=nn({name:"ToastifyContainer",inheritAttrs:!1,props:np,setup(t){const e=be(()=>t.containerId),n=be(()=>Te[e.value]||[]),s=be(()=>n.value.filter(i=>i.position===t.position));return cr(()=>{typeof window<"u"&&t.clearOnUrlChange&&window.requestAnimationFrame(sp)}),ur(()=>{typeof window<"u"&&Rs&&(window.cancelAnimationFrame(Rs),er.lastUrl="")}),()=>J(Qe,null,[s.value.map(i=>{const{toastId:r=""}=i;return J(SS,Dt({key:r},i),null)})])}});let go=!1;function ip(){const t=[];return Xn().forEach(e=>{const n=document.getElementById(e.containerId);n&&!n.classList.contains(kr)&&t.push(e)}),t}function IS(t){const e=ip().length,n=t??0;return n>0&&e+yt.items.length>=n}function AS(t){IS(t.limit)&&!t.updateId&&yt.items.push({toastId:t.toastId,containerId:t.containerId,toastContent:t.content,toastProps:t})}function rn(t,e,n={}){if(go)return;n=Mr(cS(),{type:e},$(n)),(!n.toastId||typeof n.toastId!="string"&&typeof n.toastId!="number")&&(n.toastId=tp()),n={...n,content:t,containerId:n.containerId||String(n.position)};const s=Number(n==null?void 0:n.progress);return s<0&&(n.progress=0),s>1&&(n.progress=1),n.theme==="auto"&&(n.theme=uS()),AS(n),er.lastUrl=window.location.href,n.multiple?yt.items.length?n.updateId&&Ni(t,n):Ni(t,n):(go=!0,ne.clearAll(void 0,!1),setTimeout(()=>{Ni(t,n)},0),setTimeout(()=>{go=!1},390)),n.toastId}const ne=(t,e)=>rn(t,Be.DEFAULT,e);ne.info=(t,e)=>rn(t,Be.DEFAULT,{...e,type:Be.INFO});ne.error=(t,e)=>rn(t,Be.DEFAULT,{...e,type:Be.ERROR});ne.warning=(t,e)=>rn(t,Be.DEFAULT,{...e,type:Be.WARNING});ne.warn=ne.warning;ne.success=(t,e)=>rn(t,Be.DEFAULT,{...e,type:Be.SUCCESS});ne.loading=(t,e)=>rn(t,Be.DEFAULT,Mr(e,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1}));ne.dark=(t,e)=>rn(t,Be.DEFAULT,Mr(e,{theme:Qn.DARK}));ne.remove=t=>{t?ze.dismiss(t):ze.clear()};ne.clearAll=(t,e)=>{Xs(()=>{ze.clear(t,e)})};ne.isActive=t=>{let e=!1;return e=ip().findIndex(n=>n.toastId===t)>-1,e};ne.update=(t,e={})=>{setTimeout(()=>{const n=oS(t);if(n){const s=$(n),{content:i}=s,r={...s,...e,toastId:e.toastId||t,updateId:tp()},o=r.render||i;delete r.render,rn(o,r.type,r)}},0)};ne.done=t=>{ne.update(t,{isLoading:!1,progress:1})};ne.promise=NS;function NS(t,{pending:e,error:n,success:s},i){var r,o,a;let l;const c={...i||{},autoClose:!1};e&&(l=fa(e)?ne.loading(e,c):ne.loading(e.render,{...c,...e}));const u={autoClose:(r=i==null?void 0:i.autoClose)!=null?r:!0,closeOnClick:(o=i==null?void 0:i.closeOnClick)!=null?o:!0,closeButton:(a=i==null?void 0:i.autoClose)!=null?a:null,isLoading:void 0,draggable:null,delay:100},f=(g,_,v)=>{if(_==null){ne.remove(l);return}const E={type:g,...u,...i,data:v},x=fa(_)?{render:_}:_;return l?ne.update(l,{...E,...x,isLoading:!1}):ne(x.render,{...E,...x,isLoading:!1}),v},d=qn(t)?t():t;return d.then(g=>{f("success",s,g)}).catch(g=>{f("error",n,g)}),d}ne.POSITION=ai;ne.THEME=Qn;ne.TYPE=Be;ne.TRANSITIONS=jC;const RS={install(t,e={}){OS(e)}};typeof window<"u"&&(window.Vue3Toastify=RS);function OS(t={}){const e=Mr(Qh,t);lS(e)}ve.create({baseURL:void 0,headers:{"Content-Type":"application/json"}});const xS=t=>{const e=CC(HC,"/"),{notificationAvailable:n}=zf(Gf());return AC(e,i=>{t(i.val()),n.value&&ne("The tasks have been changed",{theme:"light",type:"info",position:"top-center",autoClose:3e3,transition:"slide",dangerouslyHTMLString:!0})}),{updateTask:(i,r)=>{const o={};let a;TC(e).then(l=>{if(a=l.val().tasks.findIndex(u=>u.id===i),typeof a=="number"&&a>=0)return o[`/tasks/${a}/description`]=r,SC(e,o)})}}},PS={key:0},DS={key:1,class:"table"},kS=nn({__name:"App",setup(t){const{table:e}=zf(vc()),{initTable:n}=vc(),{showModalForNotification:s}=Gf(),{updateTask:i}=xS(n);return cr(()=>s()),(r,o)=>{var a,l;return Ut(e)?(En(),wn("table",PS,[Wt("thead",null,[Wt("tr",null,[J(Ut(_m),{titles:((a=Ut(e))==null?void 0:a.titles)??[]},null,8,["titles"])])]),Wt("tbody",null,[J(Ut(gm),{fields:((l=Ut(e))==null?void 0:l.fields)??[],onUpdateTask:o[0]||(o[0]=(c,u)=>Ut(i)(c,u))},null,8,["fields"])])])):(En(),wn("main",DS,o[1]||(o[1]=[Wt("p",null,"Load table...",-1)])))}}});let bi;window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),bi=t;const e=document.getElementById("installButton");e.style.display="block",e.addEventListener("click",()=>{e.style.display="none",bi.prompt(),bi.userChoice.then(n=>{n.outcome==="accepted"?console.log("Пользователь принял установку PWA"):console.log("Пользователь отказался от установки PWA"),bi=null})})});const rp="@firebase/installations",Al="0.6.9";/**
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
 */const op=1e4,ap=`w:${Al}`,lp="FIS_v2",MS="https://firebaseinstallations.googleapis.com/v1",LS=60*60*1e3,FS="installations",BS="Installations";/**
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
 */const US={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Nn=new Er(FS,BS,US);function cp(t){return t instanceof ns&&t.code.includes("request-failed")}/**
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
 */function up({projectId:t}){return`${MS}/projects/${t}/installations`}function fp(t){return{token:t.token,requestStatus:2,expiresIn:HS(t.expiresIn),creationTime:Date.now()}}async function dp(t,e){const s=(await e.json()).error;return Nn.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function hp({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function $S(t,{refreshToken:e}){const n=hp(t);return n.append("Authorization",jS(e)),n}async function pp(t){const e=await t();return e.status>=500&&e.status<600?t():e}function HS(t){return Number(t.replace("s","000"))}function jS(t){return`${lp} ${t}`}/**
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
 */async function WS({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=up(t),i=hp(t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:lp,appId:t.appId,sdkVersion:ap},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await pp(()=>fetch(s,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:fp(c.authToken)}}else throw await dp("Create Installation",l)}/**
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
 */function _p(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function qS(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const VS=/^[cdef][\w-]{21}$/,ha="";function KS(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=zS(t);return VS.test(n)?n:ha}catch{return ha}}function zS(t){return qS(t).substr(0,22)}/**
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
 */function Fr(t){return`${t.appName}!${t.appId}`}/**
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
 */const gp=new Map;function mp(t,e){const n=Fr(t);yp(n,e),GS(n,e)}function yp(t,e){const n=gp.get(t);if(n)for(const s of n)s(e)}function GS(t,e){const n=YS();n&&n.postMessage({key:t,fid:e}),JS()}let gn=null;function YS(){return!gn&&"BroadcastChannel"in self&&(gn=new BroadcastChannel("[Firebase] FID Change"),gn.onmessage=t=>{yp(t.data.key,t.data.fid)}),gn}function JS(){gp.size===0&&gn&&(gn.close(),gn=null)}/**
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
 */const QS="firebase-installations-database",XS=1,Rn="firebase-installations-store";let mo=null;function Nl(){return mo||(mo=Cr(QS,XS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Rn)}}})),mo}async function tr(t,e){const n=Fr(t),i=(await Nl()).transaction(Rn,"readwrite"),r=i.objectStore(Rn),o=await r.get(n);return await r.put(e,n),await i.done,(!o||o.fid!==e.fid)&&mp(t,e.fid),e}async function vp(t){const e=Fr(t),s=(await Nl()).transaction(Rn,"readwrite");await s.objectStore(Rn).delete(e),await s.done}async function Br(t,e){const n=Fr(t),i=(await Nl()).transaction(Rn,"readwrite"),r=i.objectStore(Rn),o=await r.get(n),a=e(o);return a===void 0?await r.delete(n):await r.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&mp(t,a.fid),a}/**
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
 */async function Rl(t){let e;const n=await Br(t.appConfig,s=>{const i=ZS(s),r=eT(t,i);return e=r.registrationPromise,r.installationEntry});return n.fid===ha?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function ZS(t){const e=t||{fid:KS(),registrationStatus:0};return bp(e)}function eT(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Nn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=tT(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:nT(t)}:{installationEntry:e}}async function tT(t,e){try{const n=await WS(t,e);return tr(t.appConfig,n)}catch(n){throw cp(n)&&n.customData.serverCode===409?await vp(t.appConfig):await tr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function nT(t){let e=await Au(t.appConfig);for(;e.registrationStatus===1;)await _p(100),e=await Au(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Rl(t);return s||n}return e}function Au(t){return Br(t,e=>{if(!e)throw Nn.create("installation-not-found");return bp(e)})}function bp(t){return sT(t)?{fid:t.fid,registrationStatus:0}:t}function sT(t){return t.registrationStatus===1&&t.registrationTime+op<Date.now()}/**
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
 */async function iT({appConfig:t,heartbeatServiceProvider:e},n){const s=rT(t,n),i=$S(t,n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:ap,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await pp(()=>fetch(s,a));if(l.ok){const c=await l.json();return fp(c)}else throw await dp("Generate Auth Token",l)}function rT(t,{fid:e}){return`${up(t)}/${e}/authTokens:generate`}/**
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
 */async function Ol(t,e=!1){let n;const s=await Br(t.appConfig,r=>{if(!Ep(r))throw Nn.create("not-registered");const o=r.authToken;if(!e&&lT(o))return r;if(o.requestStatus===1)return n=oT(t,e),r;{if(!navigator.onLine)throw Nn.create("app-offline");const a=uT(r);return n=aT(t,a),a}});return n?await n:s.authToken}async function oT(t,e){let n=await Nu(t.appConfig);for(;n.authToken.requestStatus===1;)await _p(100),n=await Nu(t.appConfig);const s=n.authToken;return s.requestStatus===0?Ol(t,e):s}function Nu(t){return Br(t,e=>{if(!Ep(e))throw Nn.create("not-registered");const n=e.authToken;return fT(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function aT(t,e){try{const n=await iT(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await tr(t.appConfig,s),n}catch(n){if(cp(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await vp(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await tr(t.appConfig,s)}throw n}}function Ep(t){return t!==void 0&&t.registrationStatus===2}function lT(t){return t.requestStatus===2&&!cT(t)}function cT(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+LS}function uT(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function fT(t){return t.requestStatus===1&&t.requestTime+op<Date.now()}/**
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
 */async function dT(t){const e=t,{installationEntry:n,registrationPromise:s}=await Rl(e);return s?s.catch(console.error):Ol(e).catch(console.error),n.fid}/**
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
 */async function hT(t,e=!1){const n=t;return await pT(n),(await Ol(n,e)).token}async function pT(t){const{registrationPromise:e}=await Rl(t);e&&await e}/**
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
 */function _T(t){if(!t||!t.options)throw yo("App Configuration");if(!t.name)throw yo("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw yo(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function yo(t){return Nn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp="installations",gT="installations-internal",mT=t=>{const e=t.getProvider("app").getImmediate(),n=_T(e),s=Sr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},yT=t=>{const e=t.getProvider("app").getImmediate(),n=Sr(e,wp).getImmediate();return{getId:()=>dT(n),getToken:i=>hT(n,i)}};function vT(){Yt(new Rt(wp,mT,"PUBLIC")),Yt(new Rt(gT,yT,"PRIVATE"))}vT();_t(rp,Al);_t(rp,Al,"esm2017");/**
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
 */const bT="/firebase-messaging-sw.js",ET="/firebase-cloud-messaging-push-scope",Cp="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",wT="https://fcmregistrations.googleapis.com/v1",Sp="google.c.a.c_id",CT="google.c.a.c_l",ST="google.c.a.ts",TT="google.c.a.e";var Ru;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Ru||(Ru={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Ys;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Ys||(Ys={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function IT(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),s=atob(n),i=new Uint8Array(s.length);for(let r=0;r<s.length;++r)i[r]=s.charCodeAt(r);return i}/**
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
 */const vo="fcm_token_details_db",AT=5,Ou="fcm_token_object_Store";async function NT(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(r=>r.name).includes(vo))return null;let e=null;return(await Cr(vo,AT,{upgrade:async(s,i,r,o)=>{var a;if(i<2||!s.objectStoreNames.contains(Ou))return;const l=o.objectStore(Ou),c=await l.index("fcmSenderId").get(t);if(await l.clear(),!!c){if(i===2){const u=c;if(!u.auth||!u.p256dh||!u.endpoint)return;e={token:u.fcmToken,createTime:(a=u.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:Ct(u.vapidKey)}}}else if(i===3){const u=c;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:Ct(u.auth),p256dh:Ct(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:Ct(u.vapidKey)}}}else if(i===4){const u=c;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:Ct(u.auth),p256dh:Ct(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:Ct(u.vapidKey)}}}}}})).close(),await ro(vo),await ro("fcm_vapid_details_db"),await ro("undefined"),RT(e)?e:null}function RT(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const OT="firebase-messaging-database",xT=1,Js="firebase-messaging-store";let bo=null;function Tp(){return bo||(bo=Cr(OT,xT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Js)}}})),bo}async function PT(t){const e=Ip(t),s=await(await Tp()).transaction(Js).objectStore(Js).get(e);if(s)return s;{const i=await NT(t.appConfig.senderId);if(i)return await xl(t,i),i}}async function xl(t,e){const n=Ip(t),i=(await Tp()).transaction(Js,"readwrite");return await i.objectStore(Js).put(e,n),await i.done,e}function Ip({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Pe=new Er("messaging","Messaging",DT);/**
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
 */async function kT(t,e){const n=await Dl(t),s=Ap(e),i={method:"POST",headers:n,body:JSON.stringify(s)};let r;try{r=await(await fetch(Pl(t.appConfig),i)).json()}catch(o){throw Pe.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(r.error){const o=r.error.message;throw Pe.create("token-subscribe-failed",{errorInfo:o})}if(!r.token)throw Pe.create("token-subscribe-no-token");return r.token}async function MT(t,e){const n=await Dl(t),s=Ap(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(s)};let r;try{r=await(await fetch(`${Pl(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw Pe.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(r.error){const o=r.error.message;throw Pe.create("token-update-failed",{errorInfo:o})}if(!r.token)throw Pe.create("token-update-no-token");return r.token}async function LT(t,e){const s={method:"DELETE",headers:await Dl(t)};try{const r=await(await fetch(`${Pl(t.appConfig)}/${e}`,s)).json();if(r.error){const o=r.error.message;throw Pe.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw Pe.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Pl({projectId:t}){return`${wT}/projects/${t}/registrations`}async function Dl({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Ap({p256dh:t,auth:e,endpoint:n,vapidKey:s}){const i={web:{endpoint:n,auth:e,p256dh:t}};return s!==Cp&&(i.web.applicationPubKey=s),i}/**
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
 */const FT=7*24*60*60*1e3;async function BT(t){const e=await $T(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Ct(e.getKey("auth")),p256dh:Ct(e.getKey("p256dh"))},s=await PT(t.firebaseDependencies);if(s){if(HT(s.subscriptionOptions,n))return Date.now()>=s.createTime+FT?UT(t,{token:s.token,createTime:Date.now(),subscriptionOptions:n}):s.token;try{await LT(t.firebaseDependencies,s.token)}catch(i){console.warn(i)}return xu(t.firebaseDependencies,n)}else return xu(t.firebaseDependencies,n)}async function UT(t,e){try{const n=await MT(t.firebaseDependencies,e),s=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await xl(t.firebaseDependencies,s),n}catch(n){throw n}}async function xu(t,e){const s={token:await kT(t,e),createTime:Date.now(),subscriptionOptions:e};return await xl(t,s),s.token}async function $T(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:IT(e)})}function HT(t,e){const n=e.vapidKey===t.vapidKey,s=e.endpoint===t.endpoint,i=e.auth===t.auth,r=e.p256dh===t.p256dh;return n&&s&&i&&r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return jT(e,t),WT(e,t),qT(e,t),e}function jT(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const s=e.notification.body;s&&(t.notification.body=s);const i=e.notification.image;i&&(t.notification.image=i);const r=e.notification.icon;r&&(t.notification.icon=r)}function WT(t,e){e.data&&(t.data=e.data)}function qT(t,e){var n,s,i,r,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(i=(s=e.fcmOptions)===null||s===void 0?void 0:s.link)!==null&&i!==void 0?i:(r=e.notification)===null||r===void 0?void 0:r.click_action;a&&(t.fcmOptions.link=a);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(t.fcmOptions.analyticsLabel=l)}/**
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
 */function VT(t){return typeof t=="object"&&!!t&&Sp in t}/**
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
 */Np("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Np("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Np(t,e){const n=[];for(let s=0;s<t.length;s++)n.push(t.charAt(s)),s<e.length&&n.push(e.charAt(s));return n.join("")}/**
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
 */function KT(t){if(!t||!t.options)throw Eo("App Configuration Object");if(!t.name)throw Eo("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const s of e)if(!n[s])throw Eo(s);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Eo(t){return Pe.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e,n,s){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=KT(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:s}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GT(t){try{t.swRegistration=await navigator.serviceWorker.register(bT,{scope:ET}),t.swRegistration.update().catch(()=>{})}catch(e){throw Pe.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YT(t,e){if(!e&&!t.swRegistration&&await GT(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Pe.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JT(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=Cp)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rp(t,e){if(!navigator)throw Pe.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Pe.create("permission-blocked");return await JT(t,e==null?void 0:e.vapidKey),await YT(t,e==null?void 0:e.serviceWorkerRegistration),BT(t)}/**
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
 */async function QT(t,e,n){const s=XT(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(s,{message_id:n[Sp],message_name:n[CT],message_time:n[ST],message_device_time:Math.floor(Date.now()/1e3)})}function XT(t){switch(t){case Ys.NOTIFICATION_CLICKED:return"notification_open";case Ys.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZT(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Ys.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(Pu(n)):t.onMessageHandler.next(Pu(n)));const s=n.data;VT(s)&&s[TT]==="1"&&await QT(t,n.messageType,s)}const Du="@firebase/messaging",ku="0.12.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=t=>{const e=new zT(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>ZT(e,n)),e},tI=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:s=>Rp(e,s)}};function nI(){Yt(new Rt("messaging",eI,"PUBLIC")),Yt(new Rt("messaging-internal",tI,"PRIVATE")),_t(Du,ku),_t(Du,ku,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sI(){try{await Nd()}catch{return!1}return typeof window<"u"&&Ad()&&rv()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(t,e){if(!navigator)throw Pe.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(t=kd()){return sI().then(e=>{if(!e)throw Pe.create("unsupported-browser")},e=>{throw Pe.create("indexed-db-unsupported")}),Sr(sn(t),"messaging").getImmediate()}async function oI(t,e){return t=sn(t),Rp(t,e)}function aI(t,e){return t=sn(t),iI(t,e)}nI();const Op=rI(Yh);oI(Op,{vapidKey:"BJ-Cy91acaJ1K7efR3RltkE29snJH-ygssGHtqnyRPtnJNdMYUmkOw-uPu3mraS3Hw5MtqU4ajk4AmnktYnGyew"}).then(t=>{t?console.log("FCM Token:",t):console.log("No registration token available.")}).catch(t=>{console.log("An error occurred while retrieving token.",t)});aI(Op,t=>{console.log(t)});"serviceWorker"in navigator&&navigator.serviceWorker.register("/firebase-messaging-sw.js").then(t=>{console.log("Service Worker registered with scope:",t.scope)}).catch(t=>{console.log("Service Worker registration failed:",t)});const lI=Hf(kS);lI.use(rm()).mount("#app");

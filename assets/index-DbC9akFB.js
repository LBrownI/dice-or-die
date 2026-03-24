const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GameView-GHCDIk5Y.js","assets/GameView-kDMvABhc.css","assets/LoginView-B_S3Tbqb.js","assets/LoginView-D383ssg5.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Vc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ht={},Ir=[],Hn=()=>{},Km=()=>!1,ra=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Gc=t=>t.startsWith("onUpdate:"),Lt=Object.assign,Wc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Zm=Object.prototype.hasOwnProperty,at=(t,e)=>Zm.call(t,e),Ve=Array.isArray,Nr=t=>sa(t)==="[object Map]",sh=t=>sa(t)==="[object Set]",qe=t=>typeof t=="function",Rt=t=>typeof t=="string",Oi=t=>typeof t=="symbol",vt=t=>t!==null&&typeof t=="object",oh=t=>(vt(t)||qe(t))&&qe(t.then)&&qe(t.catch),ah=Object.prototype.toString,sa=t=>ah.call(t),Jm=t=>sa(t).slice(8,-1),lh=t=>sa(t)==="[object Object]",Xc=t=>Rt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ds=Vc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Qm=/-(\w)/g,Mn=oa(t=>t.replace(Qm,(e,n)=>n?n.toUpperCase():"")),eg=/\B([A-Z])/g,dr=oa(t=>t.replace(eg,"-$1").toLowerCase()),aa=oa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ua=oa(t=>t?`on${aa(t)}`:""),Ri=(t,e)=>!Object.is(t,e),Ro=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ll=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Ul=t=>{const e=parseFloat(t);return isNaN(e)?t:e},tg=t=>{const e=Rt(t)?Number(t):NaN;return isNaN(e)?t:e};let Ou;const la=()=>Ou||(Ou=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ca(t){if(Ve(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Rt(i)?sg(i):ca(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Rt(t)||vt(t))return t}const ng=/;(?![^(]*\))/g,ig=/:([^]+)/,rg=/\/\*[^]*?\*\//g;function sg(t){const e={};return t.replace(rg,"").split(ng).forEach(n=>{if(n){const i=n.split(ig);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Li(t){let e="";if(Rt(t))e=t;else if(Ve(t))for(let n=0;n<t.length;n++){const i=Li(t[n]);i&&(e+=i+" ")}else if(vt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const og="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ag=Vc(og);function ch(t){return!!t||t===""}const uh=t=>!!(t&&t.__v_isRef===!0),_t=t=>Rt(t)?t:t==null?"":Ve(t)||vt(t)&&(t.toString===ah||!qe(t.toString))?uh(t)?_t(t.value):JSON.stringify(t,fh,2):String(t),fh=(t,e)=>uh(e)?fh(t,e.value):Nr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[Ia(i,s)+" =>"]=r,n),{})}:sh(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ia(n))}:Oi(e)?Ia(e):vt(e)&&!Ve(e)&&!lh(e)?String(e):e,Ia=(t,e="")=>{var n;return Oi(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gt;class dh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Gt,!e&&Gt&&(this.index=(Gt.scopes||(Gt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Gt;try{return Gt=this,e()}finally{Gt=n}}}on(){++this._on===1&&(this.prevScope=Gt,Gt=this)}off(){this._on>0&&--this._on===0&&(Gt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function hh(t){return new dh(t)}function ph(){return Gt}function lg(t,e=!1){Gt&&Gt.cleanups.push(t)}let pt;const Na=new WeakSet;class mh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Gt&&Gt.active&&Gt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Na.has(this)&&(Na.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||_h(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bu(this),vh(this);const e=pt,n=Rn;pt=this,Rn=!0;try{return this.fn()}finally{xh(this),pt=e,Rn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)jc(e);this.deps=this.depsTail=void 0,Bu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Na.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Il(this)&&this.run()}get dirty(){return Il(this)}}let gh=0,hs,ps;function _h(t,e=!1){if(t.flags|=8,e){t.next=ps,ps=t;return}t.next=hs,hs=t}function $c(){gh++}function qc(){if(--gh>0)return;if(ps){let e=ps;for(ps=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;hs;){let e=hs;for(hs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function vh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function xh(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),jc(i),cg(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function Il(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Sh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Sh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ms)||(t.globalVersion=Ms,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Il(t))))return;t.flags|=2;const e=t.dep,n=pt,i=Rn;pt=t,Rn=!0;try{vh(t);const r=t.fn(t._value);(e.version===0||Ri(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{pt=n,Rn=i,xh(t),t.flags&=-3}}function jc(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)jc(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function cg(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Rn=!0;const yh=[];function ai(){yh.push(Rn),Rn=!1}function li(){const t=yh.pop();Rn=t===void 0?!0:t}function Bu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=pt;pt=void 0;try{e()}finally{pt=n}}}let Ms=0;class ug{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Yc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!pt||!Rn||pt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==pt)n=this.activeLink=new ug(pt,this),pt.deps?(n.prevDep=pt.depsTail,pt.depsTail.nextDep=n,pt.depsTail=n):pt.deps=pt.depsTail=n,Mh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=pt.depsTail,n.nextDep=void 0,pt.depsTail.nextDep=n,pt.depsTail=n,pt.deps===n&&(pt.deps=i)}return n}trigger(e){this.version++,Ms++,this.notify(e)}notify(e){$c();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{qc()}}}function Mh(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Mh(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Vo=new WeakMap,rr=Symbol(""),Nl=Symbol(""),Es=Symbol("");function Wt(t,e,n){if(Rn&&pt){let i=Vo.get(t);i||Vo.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Yc),r.map=i,r.key=n),r.track()}}function ti(t,e,n,i,r,s){const o=Vo.get(t);if(!o){Ms++;return}const a=l=>{l&&l.trigger()};if($c(),e==="clear")o.forEach(a);else{const l=Ve(t),c=l&&Xc(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===Es||!Oi(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Es)),e){case"add":l?c&&a(o.get("length")):(a(o.get(rr)),Nr(t)&&a(o.get(Nl)));break;case"delete":l||(a(o.get(rr)),Nr(t)&&a(o.get(Nl)));break;case"set":Nr(t)&&a(o.get(rr));break}}qc()}function fg(t,e){const n=Vo.get(t);return n&&n.get(e)}function pr(t){const e=nt(t);return e===t?e:(Wt(e,"iterate",Es),Sn(t)?e:e.map(Bt))}function ua(t){return Wt(t=nt(t),"iterate",Es),t}const dg={__proto__:null,[Symbol.iterator](){return Fa(this,Symbol.iterator,Bt)},concat(...t){return pr(this).concat(...t.map(e=>Ve(e)?pr(e):e))},entries(){return Fa(this,"entries",t=>(t[1]=Bt(t[1]),t))},every(t,e){return $n(this,"every",t,e,void 0,arguments)},filter(t,e){return $n(this,"filter",t,e,n=>n.map(Bt),arguments)},find(t,e){return $n(this,"find",t,e,Bt,arguments)},findIndex(t,e){return $n(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return $n(this,"findLast",t,e,Bt,arguments)},findLastIndex(t,e){return $n(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return $n(this,"forEach",t,e,void 0,arguments)},includes(...t){return Oa(this,"includes",t)},indexOf(...t){return Oa(this,"indexOf",t)},join(t){return pr(this).join(t)},lastIndexOf(...t){return Oa(this,"lastIndexOf",t)},map(t,e){return $n(this,"map",t,e,void 0,arguments)},pop(){return es(this,"pop")},push(...t){return es(this,"push",t)},reduce(t,...e){return zu(this,"reduce",t,e)},reduceRight(t,...e){return zu(this,"reduceRight",t,e)},shift(){return es(this,"shift")},some(t,e){return $n(this,"some",t,e,void 0,arguments)},splice(...t){return es(this,"splice",t)},toReversed(){return pr(this).toReversed()},toSorted(t){return pr(this).toSorted(t)},toSpliced(...t){return pr(this).toSpliced(...t)},unshift(...t){return es(this,"unshift",t)},values(){return Fa(this,"values",Bt)}};function Fa(t,e,n){const i=ua(t),r=i[e]();return i!==t&&!Sn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const hg=Array.prototype;function $n(t,e,n,i,r,s){const o=ua(t),a=o!==t&&!Sn(t),l=o[e];if(l!==hg[e]){const f=l.apply(t,s);return a?Bt(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,Bt(f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function zu(t,e,n,i){const r=ua(t);let s=n;return r!==t&&(Sn(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,Bt(a),l,t)}),r[e](s,...i)}function Oa(t,e,n){const i=nt(t);Wt(i,"iterate",Es);const r=i[e](...n);return(r===-1||r===!1)&&Jc(n[0])?(n[0]=nt(n[0]),i[e](...n)):r}function es(t,e,n=[]){ai(),$c();const i=nt(t)[e].apply(t,n);return qc(),li(),i}const pg=Vc("__proto__,__v_isRef,__isVue"),Eh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Oi));function mg(t){Oi(t)||(t=String(t));const e=nt(this);return Wt(e,"has",t),e.hasOwnProperty(t)}class bh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?Tg:Rh:s?wh:Ah).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ve(e);if(!r){let l;if(o&&(l=dg[n]))return l;if(n==="hasOwnProperty")return mg}const a=Reflect.get(e,n,wt(e)?e:i);return(Oi(n)?Eh.has(n):pg(n))||(r||Wt(e,"get",n),s)?a:wt(a)?o&&Xc(n)?a:a.value:vt(a)?r?Ph(a):Ns(a):a}}class Th extends bh{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=Ui(s);if(!Sn(i)&&!Ui(i)&&(s=nt(s),i=nt(i)),!Ve(e)&&wt(s)&&!wt(i))return l?!1:(s.value=i,!0)}const o=Ve(e)&&Xc(n)?Number(n)<e.length:at(e,n),a=Reflect.set(e,n,i,wt(e)?e:r);return e===nt(r)&&(o?Ri(i,s)&&ti(e,"set",n,i):ti(e,"add",n,i)),a}deleteProperty(e,n){const i=at(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&ti(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Oi(n)||!Eh.has(n))&&Wt(e,"has",n),i}ownKeys(e){return Wt(e,"iterate",Ve(e)?"length":rr),Reflect.ownKeys(e)}}class gg extends bh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const _g=new Th,vg=new gg,xg=new Th(!0);const Fl=t=>t,Ks=t=>Reflect.getPrototypeOf(t);function Sg(t,e,n){return function(...i){const r=this.__v_raw,s=nt(r),o=Nr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Fl:e?Go:Bt;return!e&&Wt(s,"iterate",l?Nl:rr),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Zs(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function yg(t,e){const n={get(r){const s=this.__v_raw,o=nt(s),a=nt(r);t||(Ri(r,a)&&Wt(o,"get",r),Wt(o,"get",a));const{has:l}=Ks(o),c=e?Fl:t?Go:Bt;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Wt(nt(r),"iterate",rr),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=nt(s),a=nt(r);return t||(Ri(r,a)&&Wt(o,"has",r),Wt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=nt(a),c=e?Fl:t?Go:Bt;return!t&&Wt(l,"iterate",rr),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Lt(n,t?{add:Zs("add"),set:Zs("set"),delete:Zs("delete"),clear:Zs("clear")}:{add(r){!e&&!Sn(r)&&!Ui(r)&&(r=nt(r));const s=nt(this);return Ks(s).has.call(s,r)||(s.add(r),ti(s,"add",r,r)),this},set(r,s){!e&&!Sn(s)&&!Ui(s)&&(s=nt(s));const o=nt(this),{has:a,get:l}=Ks(o);let c=a.call(o,r);c||(r=nt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Ri(s,u)&&ti(o,"set",r,s):ti(o,"add",r,s),this},delete(r){const s=nt(this),{has:o,get:a}=Ks(s);let l=o.call(s,r);l||(r=nt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&ti(s,"delete",r,void 0),c},clear(){const r=nt(this),s=r.size!==0,o=r.clear();return s&&ti(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Sg(r,t,e)}),n}function Kc(t,e){const n=yg(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(at(n,r)&&r in i?n:i,r,s)}const Mg={get:Kc(!1,!1)},Eg={get:Kc(!1,!0)},bg={get:Kc(!0,!1)};const Ah=new WeakMap,wh=new WeakMap,Rh=new WeakMap,Tg=new WeakMap;function Ag(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wg(t){return t.__v_skip||!Object.isExtensible(t)?0:Ag(Jm(t))}function Ns(t){return Ui(t)?t:Zc(t,!1,_g,Mg,Ah)}function Ch(t){return Zc(t,!1,xg,Eg,wh)}function Ph(t){return Zc(t,!0,vg,bg,Rh)}function Zc(t,e,n,i,r){if(!vt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=wg(t);if(s===0)return t;const o=r.get(t);if(o)return o;const a=new Proxy(t,s===2?i:n);return r.set(t,a),a}function Ci(t){return Ui(t)?Ci(t.__v_raw):!!(t&&t.__v_isReactive)}function Ui(t){return!!(t&&t.__v_isReadonly)}function Sn(t){return!!(t&&t.__v_isShallow)}function Jc(t){return t?!!t.__v_raw:!1}function nt(t){const e=t&&t.__v_raw;return e?nt(e):t}function Qc(t){return!at(t,"__v_skip")&&Object.isExtensible(t)&&Ll(t,"__v_skip",!0),t}const Bt=t=>vt(t)?Ns(t):t,Go=t=>vt(t)?Ph(t):t;function wt(t){return t?t.__v_isRef===!0:!1}function Le(t){return Dh(t,!1)}function Rg(t){return Dh(t,!0)}function Dh(t,e){return wt(t)?t:new Cg(t,e)}class Cg{constructor(e,n){this.dep=new Yc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:nt(e),this._value=n?e:Bt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Sn(e)||Ui(e);e=i?e:nt(e),Ri(e,n)&&(this._rawValue=e,this._value=i?e:Bt(e),this.dep.trigger())}}function zt(t){return wt(t)?t.value:t}const Pg={get:(t,e,n)=>e==="__v_raw"?t:zt(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return wt(r)&&!wt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Lh(t){return Ci(t)?t:new Proxy(t,Pg)}function Dg(t){const e=Ve(t)?new Array(t.length):{};for(const n in t)e[n]=Ug(t,n);return e}class Lg{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return fg(nt(this._object),this._key)}}function Ug(t,e,n){const i=t[e];return wt(i)?i:new Lg(t,e,n)}class Ig{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Yc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ms-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&pt!==this)return _h(this,!0),!0}get value(){const e=this.dep.track();return Sh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ng(t,e,n=!1){let i,r;return qe(t)?i=t:(i=t.get,r=t.set),new Ig(i,r,n)}const Js={},Wo=new WeakMap;let Yi;function Fg(t,e=!1,n=Yi){if(n){let i=Wo.get(n);i||Wo.set(n,i=[]),i.push(t)}}function Og(t,e,n=ht){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=x=>r?x:Sn(x)||r===!1||r===0?ni(x,1):ni(x);let u,f,d,h,g=!1,v=!1;if(wt(t)?(f=()=>t.value,g=Sn(t)):Ci(t)?(f=()=>c(t),g=!0):Ve(t)?(v=!0,g=t.some(x=>Ci(x)||Sn(x)),f=()=>t.map(x=>{if(wt(x))return x.value;if(Ci(x))return c(x);if(qe(x))return l?l(x,2):x()})):qe(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){ai();try{d()}finally{li()}}const x=Yi;Yi=u;try{return l?l(t,3,[h]):t(h)}finally{Yi=x}}:f=Hn,e&&r){const x=f,P=r===!0?1/0:r;f=()=>ni(x(),P)}const m=ph(),p=()=>{u.stop(),m&&m.active&&Wc(m.effects,u)};if(s&&e){const x=e;e=(...P)=>{x(...P),p()}}let E=v?new Array(t.length).fill(Js):Js;const b=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const P=u.run();if(r||g||(v?P.some((R,D)=>Ri(R,E[D])):Ri(P,E))){d&&d();const R=Yi;Yi=u;try{const D=[P,E===Js?void 0:v&&E[0]===Js?[]:E,h];E=P,l?l(e,3,D):e(...D)}finally{Yi=R}}}else u.run()};return a&&a(b),u=new mh(f),u.scheduler=o?()=>o(b,!1):b,h=x=>Fg(x,!1,u),d=u.onStop=()=>{const x=Wo.get(u);if(x){if(l)l(x,4);else for(const P of x)P();Wo.delete(u)}},e?i?b(!0):E=u.run():o?o(b.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function ni(t,e=1/0,n){if(e<=0||!vt(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,wt(t))ni(t.value,e,n);else if(Ve(t))for(let i=0;i<t.length;i++)ni(t[i],e,n);else if(sh(t)||Nr(t))t.forEach(i=>{ni(i,e,n)});else if(lh(t)){for(const i in t)ni(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&ni(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fs(t,e,n,i){try{return i?t(...i):t()}catch(r){fa(r,e,n)}}function Pn(t,e,n,i){if(qe(t)){const r=Fs(t,e,n,i);return r&&oh(r)&&r.catch(s=>{fa(s,e,n)}),r}if(Ve(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Pn(t[s],e,n,i));return r}}function fa(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ht;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(s){ai(),Fs(s,null,10,[t,l,c]),li();return}}Bg(t,n,r,i,o)}function Bg(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const Yt=[];let Fn=-1;const Fr=[];let yi=null,Pr=0;const Uh=Promise.resolve();let Xo=null;function eu(t){const e=Xo||Uh;return t?e.then(this?t.bind(this):t):e}function zg(t){let e=Fn+1,n=Yt.length;for(;e<n;){const i=e+n>>>1,r=Yt[i],s=bs(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function tu(t){if(!(t.flags&1)){const e=bs(t),n=Yt[Yt.length-1];!n||!(t.flags&2)&&e>=bs(n)?Yt.push(t):Yt.splice(zg(e),0,t),t.flags|=1,Ih()}}function Ih(){Xo||(Xo=Uh.then(Fh))}function kg(t){Ve(t)?Fr.push(...t):yi&&t.id===-1?yi.splice(Pr+1,0,t):t.flags&1||(Fr.push(t),t.flags|=1),Ih()}function ku(t,e,n=Fn+1){for(;n<Yt.length;n++){const i=Yt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Yt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Nh(t){if(Fr.length){const e=[...new Set(Fr)].sort((n,i)=>bs(n)-bs(i));if(Fr.length=0,yi){yi.push(...e);return}for(yi=e,Pr=0;Pr<yi.length;Pr++){const n=yi[Pr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}yi=null,Pr=0}}const bs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Fh(t){try{for(Fn=0;Fn<Yt.length;Fn++){const e=Yt[Fn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Fs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Fn<Yt.length;Fn++){const e=Yt[Fn];e&&(e.flags&=-2)}Fn=-1,Yt.length=0,Nh(),Xo=null,(Yt.length||Fr.length)&&Fh()}}let Zt=null,Oh=null;function $o(t){const e=Zt;return Zt=t,Oh=t&&t.type.__scopeId||null,e}function nu(t,e=Zt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Ju(-1);const s=$o(e);let o;try{o=t(...r)}finally{$o(s),i._d&&Ju(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Hu(t,e){if(Zt===null)return t;const n=ga(Zt),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=ht]=e[r];s&&(qe(s)&&(s={mounted:s,updated:s}),s.deep&&ni(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function ki(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ai(),Pn(l,n,8,[t.el,a,t,e]),li())}}const Hg=Symbol("_vte"),Bh=t=>t.__isTeleport,Mi=Symbol("_leaveCb"),Qs=Symbol("_enterCb");function zh(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Os(()=>{t.isMounted=!0}),ru(()=>{t.isUnmounting=!0}),t}const mn=[Function,Array],kh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:mn,onEnter:mn,onAfterEnter:mn,onEnterCancelled:mn,onBeforeLeave:mn,onLeave:mn,onAfterLeave:mn,onLeaveCancelled:mn,onBeforeAppear:mn,onAppear:mn,onAfterAppear:mn,onAppearCancelled:mn},Hh=t=>{const e=t.subTree;return e.component?Hh(e.component):e},Vg={name:"BaseTransition",props:kh,setup(t,{slots:e}){const n=pp(),i=zh();return()=>{const r=e.default&&iu(e.default(),!0);if(!r||!r.length)return;const s=Vh(r),o=nt(t),{mode:a}=o;if(i.isLeaving)return Ba(s);const l=Vu(s);if(!l)return Ba(s);let c=Ts(l,o,i,n,f=>c=f);l.type!==Kt&&lr(l,c);let u=n.subTree&&Vu(n.subTree);if(u&&u.type!==Kt&&!Ji(l,u)&&Hh(n).type!==Kt){let f=Ts(u,o,i,n);if(lr(u,f),a==="out-in"&&l.type!==Kt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},Ba(s);a==="in-out"&&l.type!==Kt?f.delayLeave=(d,h,g)=>{const v=Gh(i,u);v[String(u.key)]=u,d[Mi]=()=>{h(),d[Mi]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function Vh(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Kt){e=n;break}}return e}const Gg=Vg;function Gh(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Ts(t,e,n,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:h,onAfterLeave:g,onLeaveCancelled:v,onBeforeAppear:m,onAppear:p,onAfterAppear:E,onAppearCancelled:b}=e,x=String(t.key),P=Gh(n,t),R=(y,M)=>{y&&Pn(y,i,9,M)},D=(y,M)=>{const I=M[1];R(y,M),Ve(y)?y.every(F=>F.length<=1)&&I():y.length<=1&&I()},L={mode:o,persisted:a,beforeEnter(y){let M=l;if(!n.isMounted)if(s)M=m||l;else return;y[Mi]&&y[Mi](!0);const I=P[x];I&&Ji(t,I)&&I.el[Mi]&&I.el[Mi](),R(M,[y])},enter(y){let M=c,I=u,F=f;if(!n.isMounted)if(s)M=p||c,I=E||u,F=b||f;else return;let H=!1;const J=y[Qs]=ae=>{H||(H=!0,ae?R(F,[y]):R(I,[y]),L.delayedLeave&&L.delayedLeave(),y[Qs]=void 0)};M?D(M,[y,J]):J()},leave(y,M){const I=String(t.key);if(y[Qs]&&y[Qs](!0),n.isUnmounting)return M();R(d,[y]);let F=!1;const H=y[Mi]=J=>{F||(F=!0,M(),J?R(v,[y]):R(g,[y]),y[Mi]=void 0,P[I]===t&&delete P[I])};P[I]=t,h?D(h,[y,H]):H()},clone(y){const M=Ts(y,e,n,i,r);return r&&r(M),M}};return L}function Ba(t){if(da(t))return t=Ii(t),t.children=null,t}function Vu(t){if(!da(t))return Bh(t.type)&&t.children?Vh(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&qe(n.default))return n.default()}}function lr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,lr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function iu(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Dt?(o.patchFlag&128&&r++,i=i.concat(iu(o.children,e,a))):(e||o.type!==Kt)&&i.push(a!=null?Ii(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Wh(t,e){return qe(t)?Lt({name:t.name},e,{setup:t}):t}function Xh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ms(t,e,n,i,r=!1){if(Ve(t)){t.forEach((g,v)=>ms(g,e&&(Ve(e)?e[v]:e),n,i,r));return}if(gs(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ms(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?ga(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ht?a.refs={}:a.refs,f=a.setupState,d=nt(f),h=f===ht?()=>!1:g=>at(d,g);if(c!=null&&c!==l&&(Rt(c)?(u[c]=null,h(c)&&(f[c]=null)):wt(c)&&(c.value=null)),qe(l))Fs(l,a,12,[o,u]);else{const g=Rt(l),v=wt(l);if(g||v){const m=()=>{if(t.f){const p=g?h(l)?f[l]:u[l]:l.value;r?Ve(p)&&Wc(p,s):Ve(p)?p.includes(s)||p.push(s):g?(u[l]=[s],h(l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else g?(u[l]=o,h(l)&&(f[l]=o)):v&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,un(m,n)):m()}}}la().requestIdleCallback;la().cancelIdleCallback;const gs=t=>!!t.type.__asyncLoader,da=t=>t.type.__isKeepAlive;function Wg(t,e){$h(t,"a",e)}function Xg(t,e){$h(t,"da",e)}function $h(t,e,n=Ot){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ha(e,i,n),n){let r=n.parent;for(;r&&r.parent;)da(r.parent.vnode)&&$g(i,e,n,r),r=r.parent}}function $g(t,e,n,i){const r=ha(e,t,i,!0);su(()=>{Wc(i[e],r)},n)}function ha(t,e,n=Ot,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{ai();const a=Bs(n),l=Pn(e,n,t,o);return a(),li(),l});return i?r.unshift(s):r.push(s),s}}const ui=t=>(e,n=Ot)=>{(!ws||t==="sp")&&ha(t,(...i)=>e(...i),n)},qg=ui("bm"),Os=ui("m"),jg=ui("bu"),qh=ui("u"),ru=ui("bum"),su=ui("um"),Yg=ui("sp"),Kg=ui("rtg"),Zg=ui("rtc");function Jg(t,e=Ot){ha("ec",t,e)}const Qg="components";function e_(t,e){return n_(Qg,t,!0,e)||t}const t_=Symbol.for("v-ndc");function n_(t,e,n=!0,i=!1){const r=Zt||Ot;if(r){const s=r.type;{const a=G_(s,!1);if(a&&(a===e||a===Mn(e)||a===aa(Mn(e))))return s}const o=Gu(r[t]||s[t],e)||Gu(r.appContext[t],e);return!o&&i?s:o}}function Gu(t,e){return t&&(t[e]||t[Mn(e)]||t[aa(Mn(e))])}function kr(t,e,n,i){let r;const s=n,o=Ve(t);if(o||Rt(t)){const a=o&&Ci(t);let l=!1,c=!1;a&&(l=!Sn(t),c=Ui(t),t=ua(t)),r=new Array(t.length);for(let u=0,f=t.length;u<f;u++)r[u]=e(l?c?Go(Bt(t[u])):Bt(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(vt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}const Ol=t=>t?mp(t)?ga(t):Ol(t.parent):null,_s=Lt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ol(t.parent),$root:t=>Ol(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Yh(t),$forceUpdate:t=>t.f||(t.f=()=>{tu(t.update)}),$nextTick:t=>t.n||(t.n=eu.bind(t.proxy)),$watch:t=>b_.bind(t)}),za=(t,e)=>t!==ht&&!t.__isScriptSetup&&at(t,e),i_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(za(i,e))return o[e]=1,i[e];if(r!==ht&&at(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&at(c,e))return o[e]=3,s[e];if(n!==ht&&at(n,e))return o[e]=4,n[e];Bl&&(o[e]=0)}}const u=_s[e];let f,d;if(u)return e==="$attrs"&&Wt(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ht&&at(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,at(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return za(r,e)?(r[e]=n,!0):i!==ht&&at(i,e)?(i[e]=n,!0):at(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==ht&&at(t,o)||za(e,o)||(a=s[0])&&at(a,o)||at(i,o)||at(_s,o)||at(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:at(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Wu(t){return Ve(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Bl=!0;function r_(t){const e=Yh(t),n=t.proxy,i=t.ctx;Bl=!1,e.beforeCreate&&Xu(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:g,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:E,destroyed:b,unmounted:x,render:P,renderTracked:R,renderTriggered:D,errorCaptured:L,serverPrefetch:y,expose:M,inheritAttrs:I,components:F,directives:H,filters:J}=e;if(c&&s_(c,i,null),o)for(const ie in o){const G=o[ie];qe(G)&&(i[ie]=G.bind(n))}if(r){const ie=r.call(n,n);vt(ie)&&(t.data=Ns(ie))}if(Bl=!0,s)for(const ie in s){const G=s[ie],ve=qe(G)?G.bind(n,n):qe(G.get)?G.get.bind(n,n):Hn,ye=!qe(G)&&qe(G.set)?G.set.bind(n):Hn,Ce=Et({get:ve,set:ye});Object.defineProperty(i,ie,{enumerable:!0,configurable:!0,get:()=>Ce.value,set:Be=>Ce.value=Be})}if(a)for(const ie in a)jh(a[ie],i,n,ie);if(l){const ie=qe(l)?l.call(n):l;Reflect.ownKeys(ie).forEach(G=>{Co(G,ie[G])})}u&&Xu(u,t,"c");function X(ie,G){Ve(G)?G.forEach(ve=>ie(ve.bind(n))):G&&ie(G.bind(n))}if(X(qg,f),X(Os,d),X(jg,h),X(qh,g),X(Wg,v),X(Xg,m),X(Jg,L),X(Zg,R),X(Kg,D),X(ru,E),X(su,x),X(Yg,y),Ve(M))if(M.length){const ie=t.exposed||(t.exposed={});M.forEach(G=>{Object.defineProperty(ie,G,{get:()=>n[G],set:ve=>n[G]=ve})})}else t.exposed||(t.exposed={});P&&t.render===Hn&&(t.render=P),I!=null&&(t.inheritAttrs=I),F&&(t.components=F),H&&(t.directives=H),y&&Xh(t)}function s_(t,e,n=Hn){Ve(t)&&(t=zl(t));for(const i in t){const r=t[i];let s;vt(r)?"default"in r?s=yn(r.from||i,r.default,!0):s=yn(r.from||i):s=yn(r),wt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Xu(t,e,n){Pn(Ve(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function jh(t,e,n,i){let r=i.includes(".")?lp(n,i):()=>n[i];if(Rt(t)){const s=e[t];qe(s)&&or(r,s)}else if(qe(t))or(r,t.bind(n));else if(vt(t))if(Ve(t))t.forEach(s=>jh(s,e,n,i));else{const s=qe(t.handler)?t.handler.bind(n):e[t.handler];qe(s)&&or(r,s,t)}}function Yh(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>qo(l,c,o,!0)),qo(l,e,o)),vt(e)&&s.set(e,l),l}function qo(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&qo(t,s,n,!0),r&&r.forEach(o=>qo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=o_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const o_={data:$u,props:qu,emits:qu,methods:us,computed:us,beforeCreate:qt,created:qt,beforeMount:qt,mounted:qt,beforeUpdate:qt,updated:qt,beforeDestroy:qt,beforeUnmount:qt,destroyed:qt,unmounted:qt,activated:qt,deactivated:qt,errorCaptured:qt,serverPrefetch:qt,components:us,directives:us,watch:l_,provide:$u,inject:a_};function $u(t,e){return e?t?function(){return Lt(qe(t)?t.call(this,this):t,qe(e)?e.call(this,this):e)}:e:t}function a_(t,e){return us(zl(t),zl(e))}function zl(t){if(Ve(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function qt(t,e){return t?[...new Set([].concat(t,e))]:e}function us(t,e){return t?Lt(Object.create(null),t,e):e}function qu(t,e){return t?Ve(t)&&Ve(e)?[...new Set([...t,...e])]:Lt(Object.create(null),Wu(t),Wu(e??{})):e}function l_(t,e){if(!t)return e;if(!e)return t;const n=Lt(Object.create(null),t);for(const i in e)n[i]=qt(t[i],e[i]);return n}function Kh(){return{app:null,config:{isNativeTag:Km,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let c_=0;function u_(t,e){return function(i,r=null){qe(i)||(i=Lt({},i)),r!=null&&!vt(r)&&(r=null);const s=Kh(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:c_++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:X_,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&qe(u.install)?(o.add(u),u.install(c,...f)):qe(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||At(i,r);return h.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),t(h,u,d),l=!0,c._container=u,u.__vue_app__=c,ga(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Pn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=sr;sr=c;try{return u()}finally{sr=f}}};return c}}let sr=null;function Co(t,e){if(Ot){let n=Ot.provides;const i=Ot.parent&&Ot.parent.provides;i===n&&(n=Ot.provides=Object.create(i)),n[t]=e}}function yn(t,e,n=!1){const i=Ot||Zt;if(i||sr){let r=sr?sr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&qe(e)?e.call(i&&i.proxy):e}}function f_(){return!!(Ot||Zt||sr)}const Zh={},Jh=()=>Object.create(Zh),Qh=t=>Object.getPrototypeOf(t)===Zh;function d_(t,e,n,i=!1){const r={},s=Jh();t.propsDefaults=Object.create(null),ep(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Ch(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function h_(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=nt(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(pa(t.emitsOptions,d))continue;const h=e[d];if(l)if(at(s,d))h!==s[d]&&(s[d]=h,c=!0);else{const g=Mn(d);r[g]=kl(l,a,g,h,t,!1)}else h!==s[d]&&(s[d]=h,c=!0)}}}else{ep(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!at(e,f)&&((u=dr(f))===f||!at(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=kl(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!at(e,f))&&(delete s[f],c=!0)}c&&ti(t.attrs,"set","")}function ep(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ds(l))continue;const c=e[l];let u;r&&at(r,u=Mn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:pa(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=nt(n),c=a||ht;for(let u=0;u<s.length;u++){const f=s[u];n[f]=kl(r,l,f,c[f],t,!at(c,f))}}return o}function kl(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=at(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qe(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=Bs(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===dr(n))&&(i=!0))}return i}const p_=new WeakMap;function tp(t,e,n=!1){const i=n?p_:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!qe(t)){const u=f=>{l=!0;const[d,h]=tp(f,e,!0);Lt(o,d),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return vt(t)&&i.set(t,Ir),Ir;if(Ve(s))for(let u=0;u<s.length;u++){const f=Mn(s[u]);ju(f)&&(o[f]=ht)}else if(s)for(const u in s){const f=Mn(u);if(ju(f)){const d=s[u],h=o[f]=Ve(d)||qe(d)?{type:d}:Lt({},d),g=h.type;let v=!1,m=!0;if(Ve(g))for(let p=0;p<g.length;++p){const E=g[p],b=qe(E)&&E.name;if(b==="Boolean"){v=!0;break}else b==="String"&&(m=!1)}else v=qe(g)&&g.name==="Boolean";h[0]=v,h[1]=m,(v||at(h,"default"))&&a.push(f)}}const c=[o,a];return vt(t)&&i.set(t,c),c}function ju(t){return t[0]!=="$"&&!ds(t)}const ou=t=>t[0]==="_"||t==="$stable",au=t=>Ve(t)?t.map(On):[On(t)],m_=(t,e,n)=>{if(e._n)return e;const i=nu((...r)=>au(e(...r)),n);return i._c=!1,i},np=(t,e,n)=>{const i=t._ctx;for(const r in t){if(ou(r))continue;const s=t[r];if(qe(s))e[r]=m_(r,s,i);else if(s!=null){const o=au(s);e[r]=()=>o}}},ip=(t,e)=>{const n=au(e);t.slots.default=()=>n},rp=(t,e,n)=>{for(const i in e)(n||!ou(i))&&(t[i]=e[i])},g_=(t,e,n)=>{const i=t.slots=Jh();if(t.vnode.shapeFlag&32){const r=e.__;r&&Ll(i,"__",r,!0);const s=e._;s?(rp(i,e,n),n&&Ll(i,"_",s,!0)):np(e,i)}else e&&ip(t,e)},__=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=ht;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:rp(r,e,n):(s=!e.$stable,np(e,r)),o=e}else e&&(ip(t,e),o={default:1});if(s)for(const a in r)!ou(a)&&o[a]==null&&delete r[a]},un=D_;function v_(t){return x_(t)}function x_(t,e){const n=la();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=Hn,insertStaticContent:g}=t,v=(w,C,S,ne=null,K=null,j=null,te=void 0,oe=null,ee=!!C.dynamicChildren)=>{if(w===C)return;w&&!Ji(w,C)&&(ne=O(w),Be(w,K,j,!0),w=null),C.patchFlag===-2&&(ee=!1,C.dynamicChildren=null);const{type:Q,ref:Me,shapeFlag:T}=C;switch(Q){case ma:m(w,C,S,ne);break;case Kt:p(w,C,S,ne);break;case Ha:w==null&&E(C,S,ne,te);break;case Dt:F(w,C,S,ne,K,j,te,oe,ee);break;default:T&1?P(w,C,S,ne,K,j,te,oe,ee):T&6?H(w,C,S,ne,K,j,te,oe,ee):(T&64||T&128)&&Q.process(w,C,S,ne,K,j,te,oe,ee,ce)}Me!=null&&K?ms(Me,w&&w.ref,j,C||w,!C):Me==null&&w&&w.ref!=null&&ms(w.ref,null,j,w,!0)},m=(w,C,S,ne)=>{if(w==null)i(C.el=a(C.children),S,ne);else{const K=C.el=w.el;C.children!==w.children&&c(K,C.children)}},p=(w,C,S,ne)=>{w==null?i(C.el=l(C.children||""),S,ne):C.el=w.el},E=(w,C,S,ne)=>{[w.el,w.anchor]=g(w.children,C,S,ne,w.el,w.anchor)},b=({el:w,anchor:C},S,ne)=>{let K;for(;w&&w!==C;)K=d(w),i(w,S,ne),w=K;i(C,S,ne)},x=({el:w,anchor:C})=>{let S;for(;w&&w!==C;)S=d(w),r(w),w=S;r(C)},P=(w,C,S,ne,K,j,te,oe,ee)=>{C.type==="svg"?te="svg":C.type==="math"&&(te="mathml"),w==null?R(C,S,ne,K,j,te,oe,ee):y(w,C,K,j,te,oe,ee)},R=(w,C,S,ne,K,j,te,oe)=>{let ee,Q;const{props:Me,shapeFlag:T,transition:_,dirs:U}=w;if(ee=w.el=o(w.type,j,Me&&Me.is,Me),T&8?u(ee,w.children):T&16&&L(w.children,ee,null,ne,K,ka(w,j),te,oe),U&&ki(w,null,ne,"created"),D(ee,w,w.scopeId,te,ne),Me){for(const $ in Me)$!=="value"&&!ds($)&&s(ee,$,null,Me[$],j,ne);"value"in Me&&s(ee,"value",null,Me.value,j),(Q=Me.onVnodeBeforeMount)&&Un(Q,ne,w)}U&&ki(w,null,ne,"beforeMount");const k=S_(K,_);k&&_.beforeEnter(ee),i(ee,C,S),((Q=Me&&Me.onVnodeMounted)||k||U)&&un(()=>{Q&&Un(Q,ne,w),k&&_.enter(ee),U&&ki(w,null,ne,"mounted")},K)},D=(w,C,S,ne,K)=>{if(S&&h(w,S),ne)for(let j=0;j<ne.length;j++)h(w,ne[j]);if(K){let j=K.subTree;if(C===j||up(j.type)&&(j.ssContent===C||j.ssFallback===C)){const te=K.vnode;D(w,te,te.scopeId,te.slotScopeIds,K.parent)}}},L=(w,C,S,ne,K,j,te,oe,ee=0)=>{for(let Q=ee;Q<w.length;Q++){const Me=w[Q]=oe?Ei(w[Q]):On(w[Q]);v(null,Me,C,S,ne,K,j,te,oe)}},y=(w,C,S,ne,K,j,te)=>{const oe=C.el=w.el;let{patchFlag:ee,dynamicChildren:Q,dirs:Me}=C;ee|=w.patchFlag&16;const T=w.props||ht,_=C.props||ht;let U;if(S&&Hi(S,!1),(U=_.onVnodeBeforeUpdate)&&Un(U,S,C,w),Me&&ki(C,w,S,"beforeUpdate"),S&&Hi(S,!0),(T.innerHTML&&_.innerHTML==null||T.textContent&&_.textContent==null)&&u(oe,""),Q?M(w.dynamicChildren,Q,oe,S,ne,ka(C,K),j):te||G(w,C,oe,null,S,ne,ka(C,K),j,!1),ee>0){if(ee&16)I(oe,T,_,S,K);else if(ee&2&&T.class!==_.class&&s(oe,"class",null,_.class,K),ee&4&&s(oe,"style",T.style,_.style,K),ee&8){const k=C.dynamicProps;for(let $=0;$<k.length;$++){const V=k[$],xe=T[V],he=_[V];(he!==xe||V==="value")&&s(oe,V,xe,he,K,S)}}ee&1&&w.children!==C.children&&u(oe,C.children)}else!te&&Q==null&&I(oe,T,_,S,K);((U=_.onVnodeUpdated)||Me)&&un(()=>{U&&Un(U,S,C,w),Me&&ki(C,w,S,"updated")},ne)},M=(w,C,S,ne,K,j,te)=>{for(let oe=0;oe<C.length;oe++){const ee=w[oe],Q=C[oe],Me=ee.el&&(ee.type===Dt||!Ji(ee,Q)||ee.shapeFlag&198)?f(ee.el):S;v(ee,Q,Me,null,ne,K,j,te,!0)}},I=(w,C,S,ne,K)=>{if(C!==S){if(C!==ht)for(const j in C)!ds(j)&&!(j in S)&&s(w,j,C[j],null,K,ne);for(const j in S){if(ds(j))continue;const te=S[j],oe=C[j];te!==oe&&j!=="value"&&s(w,j,oe,te,K,ne)}"value"in S&&s(w,"value",C.value,S.value,K)}},F=(w,C,S,ne,K,j,te,oe,ee)=>{const Q=C.el=w?w.el:a(""),Me=C.anchor=w?w.anchor:a("");let{patchFlag:T,dynamicChildren:_,slotScopeIds:U}=C;U&&(oe=oe?oe.concat(U):U),w==null?(i(Q,S,ne),i(Me,S,ne),L(C.children||[],S,Me,K,j,te,oe,ee)):T>0&&T&64&&_&&w.dynamicChildren?(M(w.dynamicChildren,_,S,K,j,te,oe),(C.key!=null||K&&C===K.subTree)&&sp(w,C,!0)):G(w,C,S,Me,K,j,te,oe,ee)},H=(w,C,S,ne,K,j,te,oe,ee)=>{C.slotScopeIds=oe,w==null?C.shapeFlag&512?K.ctx.activate(C,S,ne,te,ee):J(C,S,ne,K,j,te,ee):ae(w,C,ee)},J=(w,C,S,ne,K,j,te)=>{const oe=w.component=B_(w,ne,K);if(da(w)&&(oe.ctx.renderer=ce),z_(oe,!1,te),oe.asyncDep){if(K&&K.registerDep(oe,X,te),!w.el){const ee=oe.subTree=At(Kt);p(null,ee,C,S)}}else X(oe,w,C,S,K,j,te)},ae=(w,C,S)=>{const ne=C.component=w.component;if(C_(w,C,S))if(ne.asyncDep&&!ne.asyncResolved){ie(ne,C,S);return}else ne.next=C,ne.update();else C.el=w.el,ne.vnode=C},X=(w,C,S,ne,K,j,te)=>{const oe=()=>{if(w.isMounted){let{next:T,bu:_,u:U,parent:k,vnode:$}=w;{const Pe=op(w);if(Pe){T&&(T.el=$.el,ie(w,T,te)),Pe.asyncDep.then(()=>{w.isUnmounted||oe()});return}}let V=T,xe;Hi(w,!1),T?(T.el=$.el,ie(w,T,te)):T=$,_&&Ro(_),(xe=T.props&&T.props.onVnodeBeforeUpdate)&&Un(xe,k,T,$),Hi(w,!0);const he=Ku(w),Ee=w.subTree;w.subTree=he,v(Ee,he,f(Ee.el),O(Ee),w,K,j),T.el=he.el,V===null&&P_(w,he.el),U&&un(U,K),(xe=T.props&&T.props.onVnodeUpdated)&&un(()=>Un(xe,k,T,$),K)}else{let T;const{el:_,props:U}=C,{bm:k,m:$,parent:V,root:xe,type:he}=w,Ee=gs(C);Hi(w,!1),k&&Ro(k),!Ee&&(T=U&&U.onVnodeBeforeMount)&&Un(T,V,C),Hi(w,!0);{xe.ce&&xe.ce._def.shadowRoot!==!1&&xe.ce._injectChildStyle(he);const Pe=w.subTree=Ku(w);v(null,Pe,S,ne,w,K,j),C.el=Pe.el}if($&&un($,K),!Ee&&(T=U&&U.onVnodeMounted)){const Pe=C;un(()=>Un(T,V,Pe),K)}(C.shapeFlag&256||V&&gs(V.vnode)&&V.vnode.shapeFlag&256)&&w.a&&un(w.a,K),w.isMounted=!0,C=S=ne=null}};w.scope.on();const ee=w.effect=new mh(oe);w.scope.off();const Q=w.update=ee.run.bind(ee),Me=w.job=ee.runIfDirty.bind(ee);Me.i=w,Me.id=w.uid,ee.scheduler=()=>tu(Me),Hi(w,!0),Q()},ie=(w,C,S)=>{C.component=w;const ne=w.vnode.props;w.vnode=C,w.next=null,h_(w,C.props,ne,S),__(w,C.children,S),ai(),ku(w),li()},G=(w,C,S,ne,K,j,te,oe,ee=!1)=>{const Q=w&&w.children,Me=w?w.shapeFlag:0,T=C.children,{patchFlag:_,shapeFlag:U}=C;if(_>0){if(_&128){ye(Q,T,S,ne,K,j,te,oe,ee);return}else if(_&256){ve(Q,T,S,ne,K,j,te,oe,ee);return}}U&8?(Me&16&&Te(Q,K,j),T!==Q&&u(S,T)):Me&16?U&16?ye(Q,T,S,ne,K,j,te,oe,ee):Te(Q,K,j,!0):(Me&8&&u(S,""),U&16&&L(T,S,ne,K,j,te,oe,ee))},ve=(w,C,S,ne,K,j,te,oe,ee)=>{w=w||Ir,C=C||Ir;const Q=w.length,Me=C.length,T=Math.min(Q,Me);let _;for(_=0;_<T;_++){const U=C[_]=ee?Ei(C[_]):On(C[_]);v(w[_],U,S,null,K,j,te,oe,ee)}Q>Me?Te(w,K,j,!0,!1,T):L(C,S,ne,K,j,te,oe,ee,T)},ye=(w,C,S,ne,K,j,te,oe,ee)=>{let Q=0;const Me=C.length;let T=w.length-1,_=Me-1;for(;Q<=T&&Q<=_;){const U=w[Q],k=C[Q]=ee?Ei(C[Q]):On(C[Q]);if(Ji(U,k))v(U,k,S,null,K,j,te,oe,ee);else break;Q++}for(;Q<=T&&Q<=_;){const U=w[T],k=C[_]=ee?Ei(C[_]):On(C[_]);if(Ji(U,k))v(U,k,S,null,K,j,te,oe,ee);else break;T--,_--}if(Q>T){if(Q<=_){const U=_+1,k=U<Me?C[U].el:ne;for(;Q<=_;)v(null,C[Q]=ee?Ei(C[Q]):On(C[Q]),S,k,K,j,te,oe,ee),Q++}}else if(Q>_)for(;Q<=T;)Be(w[Q],K,j,!0),Q++;else{const U=Q,k=Q,$=new Map;for(Q=k;Q<=_;Q++){const Ie=C[Q]=ee?Ei(C[Q]):On(C[Q]);Ie.key!=null&&$.set(Ie.key,Q)}let V,xe=0;const he=_-k+1;let Ee=!1,Pe=0;const fe=new Array(he);for(Q=0;Q<he;Q++)fe[Q]=0;for(Q=U;Q<=T;Q++){const Ie=w[Q];if(xe>=he){Be(Ie,K,j,!0);continue}let Ne;if(Ie.key!=null)Ne=$.get(Ie.key);else for(V=k;V<=_;V++)if(fe[V-k]===0&&Ji(Ie,C[V])){Ne=V;break}Ne===void 0?Be(Ie,K,j,!0):(fe[Ne-k]=Q+1,Ne>=Pe?Pe=Ne:Ee=!0,v(Ie,C[Ne],S,null,K,j,te,oe,ee),xe++)}const Re=Ee?y_(fe):Ir;for(V=Re.length-1,Q=he-1;Q>=0;Q--){const Ie=k+Q,Ne=C[Ie],Se=Ie+1<Me?C[Ie+1].el:ne;fe[Q]===0?v(null,Ne,S,Se,K,j,te,oe,ee):Ee&&(V<0||Q!==Re[V]?Ce(Ne,S,Se,2):V--)}}},Ce=(w,C,S,ne,K=null)=>{const{el:j,type:te,transition:oe,children:ee,shapeFlag:Q}=w;if(Q&6){Ce(w.component.subTree,C,S,ne);return}if(Q&128){w.suspense.move(C,S,ne);return}if(Q&64){te.move(w,C,S,ce);return}if(te===Dt){i(j,C,S);for(let T=0;T<ee.length;T++)Ce(ee[T],C,S,ne);i(w.anchor,C,S);return}if(te===Ha){b(w,C,S);return}if(ne!==2&&Q&1&&oe)if(ne===0)oe.beforeEnter(j),i(j,C,S),un(()=>oe.enter(j),K);else{const{leave:T,delayLeave:_,afterLeave:U}=oe,k=()=>{w.ctx.isUnmounted?r(j):i(j,C,S)},$=()=>{T(j,()=>{k(),U&&U()})};_?_(j,k,$):$()}else i(j,C,S)},Be=(w,C,S,ne=!1,K=!1)=>{const{type:j,props:te,ref:oe,children:ee,dynamicChildren:Q,shapeFlag:Me,patchFlag:T,dirs:_,cacheIndex:U}=w;if(T===-2&&(K=!1),oe!=null&&(ai(),ms(oe,null,S,w,!0),li()),U!=null&&(C.renderCache[U]=void 0),Me&256){C.ctx.deactivate(w);return}const k=Me&1&&_,$=!gs(w);let V;if($&&(V=te&&te.onVnodeBeforeUnmount)&&Un(V,C,w),Me&6)_e(w.component,S,ne);else{if(Me&128){w.suspense.unmount(S,ne);return}k&&ki(w,null,C,"beforeUnmount"),Me&64?w.type.remove(w,C,S,ce,ne):Q&&!Q.hasOnce&&(j!==Dt||T>0&&T&64)?Te(Q,C,S,!1,!0):(j===Dt&&T&384||!K&&Me&16)&&Te(ee,C,S),ne&&Qe(w)}($&&(V=te&&te.onVnodeUnmounted)||k)&&un(()=>{V&&Un(V,C,w),k&&ki(w,null,C,"unmounted")},S)},Qe=w=>{const{type:C,el:S,anchor:ne,transition:K}=w;if(C===Dt){se(S,ne);return}if(C===Ha){x(w);return}const j=()=>{r(S),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(w.shapeFlag&1&&K&&!K.persisted){const{leave:te,delayLeave:oe}=K,ee=()=>te(S,j);oe?oe(w.el,j,ee):ee()}else j()},se=(w,C)=>{let S;for(;w!==C;)S=d(w),r(w),w=S;r(C)},_e=(w,C,S)=>{const{bum:ne,scope:K,job:j,subTree:te,um:oe,m:ee,a:Q,parent:Me,slots:{__:T}}=w;Yu(ee),Yu(Q),ne&&Ro(ne),Me&&Ve(T)&&T.forEach(_=>{Me.renderCache[_]=void 0}),K.stop(),j&&(j.flags|=8,Be(te,w,C,S)),oe&&un(oe,C),un(()=>{w.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},Te=(w,C,S,ne=!1,K=!1,j=0)=>{for(let te=j;te<w.length;te++)Be(w[te],C,S,ne,K)},O=w=>{if(w.shapeFlag&6)return O(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const C=d(w.anchor||w.el),S=C&&C[Hg];return S?d(S):C};let re=!1;const ue=(w,C,S)=>{w==null?C._vnode&&Be(C._vnode,null,null,!0):v(C._vnode||null,w,C,null,null,null,S),C._vnode=w,re||(re=!0,ku(),Nh(),re=!1)},ce={p:v,um:Be,m:Ce,r:Qe,mt:J,mc:L,pc:G,pbc:M,n:O,o:t};return{render:ue,hydrate:void 0,createApp:u_(ue)}}function ka({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Hi({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function S_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function sp(t,e,n=!1){const i=t.children,r=e.children;if(Ve(i)&&Ve(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ei(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&sp(o,a)),a.type===ma&&(a.el=o.el),a.type===Kt&&!a.el&&(a.el=o.el)}}function y_(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function op(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:op(e)}function Yu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const M_=Symbol.for("v-scx"),E_=()=>yn(M_);function or(t,e,n){return ap(t,e,n)}function ap(t,e,n=ht){const{immediate:i,deep:r,flush:s,once:o}=n,a=Lt({},n),l=e&&i||!e&&s!=="post";let c;if(ws){if(s==="sync"){const h=E_();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Hn,h.resume=Hn,h.pause=Hn,h}}const u=Ot;a.call=(h,g,v)=>Pn(h,u,g,v);let f=!1;s==="post"?a.scheduler=h=>{un(h,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(h,g)=>{g?h():tu(h)}),a.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=Og(t,e,a);return ws&&(c?c.push(d):l&&d()),d}function b_(t,e,n){const i=this.proxy,r=Rt(t)?t.includes(".")?lp(i,t):()=>i[t]:t.bind(i,i);let s;qe(e)?s=e:(s=e.handler,n=e);const o=Bs(this),a=ap(r,s.bind(i),n);return o(),a}function lp(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const T_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Mn(e)}Modifiers`]||t[`${dr(e)}Modifiers`];function A_(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ht;let r=n;const s=e.startsWith("update:"),o=s&&T_(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>Rt(u)?u.trim():u)),o.number&&(r=n.map(Ul)));let a,l=i[a=Ua(e)]||i[a=Ua(Mn(e))];!l&&s&&(l=i[a=Ua(dr(e))]),l&&Pn(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Pn(c,t,6,r)}}function cp(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!qe(t)){const l=c=>{const u=cp(c,e,!0);u&&(a=!0,Lt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(vt(t)&&i.set(t,null),null):(Ve(s)?s.forEach(l=>o[l]=null):Lt(o,s),vt(t)&&i.set(t,o),o)}function pa(t,e){return!t||!ra(e)?!1:(e=e.slice(2).replace(/Once$/,""),at(t,e[0].toLowerCase()+e.slice(1))||at(t,dr(e))||at(t,e))}function Ku(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:g,inheritAttrs:v}=t,m=$o(t);let p,E;try{if(n.shapeFlag&4){const x=r||i,P=x;p=On(c.call(P,x,u,f,h,d,g)),E=a}else{const x=e;p=On(x.length>1?x(f,{attrs:a,slots:o,emit:l}):x(f,null)),E=e.props?a:w_(a)}}catch(x){vs.length=0,fa(x,t,1),p=At(Kt)}let b=p;if(E&&v!==!1){const x=Object.keys(E),{shapeFlag:P}=b;x.length&&P&7&&(s&&x.some(Gc)&&(E=R_(E,s)),b=Ii(b,E,!1,!0))}return n.dirs&&(b=Ii(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&lr(b,n.transition),p=b,$o(m),p}const w_=t=>{let e;for(const n in t)(n==="class"||n==="style"||ra(n))&&((e||(e={}))[n]=t[n]);return e},R_=(t,e)=>{const n={};for(const i in t)(!Gc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function C_(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Zu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!pa(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Zu(i,o,c):!0:!!o;return!1}function Zu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!pa(n,s))return!0}return!1}function P_({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const up=t=>t.__isSuspense;function D_(t,e){e&&e.pendingBranch?Ve(t)?e.effects.push(...t):e.effects.push(t):kg(t)}const Dt=Symbol.for("v-fgt"),ma=Symbol.for("v-txt"),Kt=Symbol.for("v-cmt"),Ha=Symbol.for("v-stc"),vs=[];let fn=null;function Ge(t=!1){vs.push(fn=t?null:[])}function L_(){vs.pop(),fn=vs[vs.length-1]||null}let As=1;function Ju(t,e=!1){As+=t,t<0&&fn&&e&&(fn.hasOnce=!0)}function fp(t){return t.dynamicChildren=As>0?fn||Ir:null,L_(),As>0&&fn&&fn.push(t),t}function Je(t,e,n,i,r,s){return fp(de(t,e,n,i,r,s,!0))}function Ai(t,e,n,i,r){return fp(At(t,e,n,i,r,!0))}function jo(t){return t?t.__v_isVNode===!0:!1}function Ji(t,e){return t.type===e.type&&t.key===e.key}const dp=({key:t})=>t??null,Po=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Rt(t)||wt(t)||qe(t)?{i:Zt,r:t,k:e,f:!!n}:t:null);function de(t,e=null,n=null,i=0,r=null,s=t===Dt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&dp(e),ref:e&&Po(e),scopeId:Oh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Zt};return a?(lu(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Rt(n)?8:16),As>0&&!o&&fn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&fn.push(l),l}const At=U_;function U_(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===t_)&&(t=Kt),jo(t)){const a=Ii(t,e,!0);return n&&lu(a,n),As>0&&!s&&fn&&(a.shapeFlag&6?fn[fn.indexOf(t)]=a:fn.push(a)),a.patchFlag=-2,a}if(W_(t)&&(t=t.__vccOpts),e){e=I_(e);let{class:a,style:l}=e;a&&!Rt(a)&&(e.class=Li(a)),vt(l)&&(Jc(l)&&!Ve(l)&&(l=Lt({},l)),e.style=ca(l))}const o=Rt(t)?1:up(t)?128:Bh(t)?64:vt(t)?4:qe(t)?2:0;return de(t,e,n,i,r,o,s,!0)}function I_(t){return t?Jc(t)||Qh(t)?Lt({},t):t:null}function Ii(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?N_(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&dp(c),ref:e&&e.ref?n&&s?Ve(s)?s.concat(Po(e)):[s,Po(e)]:Po(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Dt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ii(t.ssContent),ssFallback:t.ssFallback&&Ii(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&lr(u,l.clone(u)),u}function hp(t=" ",e=0){return At(ma,null,t,e)}function Tt(t="",e=!1){return e?(Ge(),Ai(Kt,null,t)):At(Kt,null,t)}function On(t){return t==null||typeof t=="boolean"?At(Kt):Ve(t)?At(Dt,null,t.slice()):jo(t)?Ei(t):At(ma,null,String(t))}function Ei(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ii(t)}function lu(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ve(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),lu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Qh(e)?e._ctx=Zt:r===3&&Zt&&(Zt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else qe(e)?(e={default:e,_ctx:Zt},n=32):(e=String(e),i&64?(n=16,e=[hp(e)]):n=8);t.children=e,t.shapeFlag|=n}function N_(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Li([e.class,i.class]));else if(r==="style")e.style=ca([e.style,i.style]);else if(ra(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ve(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Un(t,e,n,i=null){Pn(t,e,7,[n,i])}const F_=Kh();let O_=0;function B_(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||F_,s={uid:O_++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new dh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:tp(i,r),emitsOptions:cp(i,r),emit:null,emitted:null,propsDefaults:ht,inheritAttrs:i.inheritAttrs,ctx:ht,data:ht,props:ht,attrs:ht,slots:ht,refs:ht,setupState:ht,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=A_.bind(null,s),t.ce&&t.ce(s),s}let Ot=null;const pp=()=>Ot||Zt;let Yo,Hl;{const t=la(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Yo=e("__VUE_INSTANCE_SETTERS__",n=>Ot=n),Hl=e("__VUE_SSR_SETTERS__",n=>ws=n)}const Bs=t=>{const e=Ot;return Yo(t),t.scope.on(),()=>{t.scope.off(),Yo(e)}},Qu=()=>{Ot&&Ot.scope.off(),Yo(null)};function mp(t){return t.vnode.shapeFlag&4}let ws=!1;function z_(t,e=!1,n=!1){e&&Hl(e);const{props:i,children:r}=t.vnode,s=mp(t);d_(t,i,s,e),g_(t,r,n||e);const o=s?k_(t,e):void 0;return e&&Hl(!1),o}function k_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,i_);const{setup:i}=n;if(i){ai();const r=t.setupContext=i.length>1?V_(t):null,s=Bs(t),o=Fs(i,t,0,[t.props,r]),a=oh(o);if(li(),s(),(a||t.sp)&&!gs(t)&&Xh(t),a){if(o.then(Qu,Qu),e)return o.then(l=>{ef(t,l)}).catch(l=>{fa(l,t,0)});t.asyncDep=o}else ef(t,o)}else gp(t)}function ef(t,e,n){qe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:vt(e)&&(t.setupState=Lh(e)),gp(t)}function gp(t,e,n){const i=t.type;t.render||(t.render=i.render||Hn);{const r=Bs(t);ai();try{r_(t)}finally{li(),r()}}}const H_={get(t,e){return Wt(t,"get",""),t[e]}};function V_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,H_),slots:t.slots,emit:t.emit,expose:e}}function ga(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Lh(Qc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _s)return _s[n](t)},has(e,n){return n in e||n in _s}})):t.proxy}function G_(t,e=!0){return qe(t)?t.displayName||t.name:t.name||e&&t.__name}function W_(t){return qe(t)&&"__vccOpts"in t}const Et=(t,e)=>Ng(t,e,ws);function cu(t,e,n){const i=arguments.length;return i===2?vt(e)&&!Ve(e)?jo(e)?At(t,null,[e]):At(t,e):At(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&jo(n)&&(n=[n]),At(t,e,n))}const X_="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Vl;const tf=typeof window<"u"&&window.trustedTypes;if(tf)try{Vl=tf.createPolicy("vue",{createHTML:t=>t})}catch{}const _p=Vl?t=>Vl.createHTML(t):t=>t,$_="http://www.w3.org/2000/svg",q_="http://www.w3.org/1998/Math/MathML",ei=typeof document<"u"?document:null,nf=ei&&ei.createElement("template"),j_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?ei.createElementNS($_,t):e==="mathml"?ei.createElementNS(q_,t):n?ei.createElement(t,{is:n}):ei.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>ei.createTextNode(t),createComment:t=>ei.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ei.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{nf.innerHTML=_p(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=nf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},fi="transition",ts="animation",Hr=Symbol("_vtc"),vp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},xp=Lt({},kh,vp),Y_=t=>(t.displayName="Transition",t.props=xp,t),K_=Y_((t,{slots:e})=>cu(Gg,Sp(t),e)),Vi=(t,e=[])=>{Ve(t)?t.forEach(n=>n(...e)):t&&t(...e)},rf=t=>t?Ve(t)?t.some(e=>e.length>1):t.length>1:!1;function Sp(t){const e={};for(const F in t)F in vp||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,g=Z_(r),v=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:E,onEnterCancelled:b,onLeave:x,onLeaveCancelled:P,onBeforeAppear:R=p,onAppear:D=E,onAppearCancelled:L=b}=e,y=(F,H,J,ae)=>{F._enterCancelled=ae,xi(F,H?u:a),xi(F,H?c:o),J&&J()},M=(F,H)=>{F._isLeaving=!1,xi(F,f),xi(F,h),xi(F,d),H&&H()},I=F=>(H,J)=>{const ae=F?D:E,X=()=>y(H,F,J);Vi(ae,[H,X]),sf(()=>{xi(H,F?l:s),Nn(H,F?u:a),rf(ae)||of(H,i,v,X)})};return Lt(e,{onBeforeEnter(F){Vi(p,[F]),Nn(F,s),Nn(F,o)},onBeforeAppear(F){Vi(R,[F]),Nn(F,l),Nn(F,c)},onEnter:I(!1),onAppear:I(!0),onLeave(F,H){F._isLeaving=!0;const J=()=>M(F,H);Nn(F,f),F._enterCancelled?(Nn(F,d),Gl()):(Gl(),Nn(F,d)),sf(()=>{F._isLeaving&&(xi(F,f),Nn(F,h),rf(x)||of(F,i,m,J))}),Vi(x,[F,J])},onEnterCancelled(F){y(F,!1,void 0,!0),Vi(b,[F])},onAppearCancelled(F){y(F,!0,void 0,!0),Vi(L,[F])},onLeaveCancelled(F){M(F),Vi(P,[F])}})}function Z_(t){if(t==null)return null;if(vt(t))return[Va(t.enter),Va(t.leave)];{const e=Va(t);return[e,e]}}function Va(t){return tg(t)}function Nn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Hr]||(t[Hr]=new Set)).add(e)}function xi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Hr];n&&(n.delete(e),n.size||(t[Hr]=void 0))}function sf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let J_=0;function of(t,e,n,i){const r=t._endId=++J_,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=yp(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,d),s()},d=h=>{h.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,d)}function yp(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),r=i(`${fi}Delay`),s=i(`${fi}Duration`),o=af(r,s),a=i(`${ts}Delay`),l=i(`${ts}Duration`),c=af(a,l);let u=null,f=0,d=0;e===fi?o>0&&(u=fi,f=o,d=s.length):e===ts?c>0&&(u=ts,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?fi:ts:null,d=u?u===fi?s.length:l.length:0);const h=u===fi&&/\b(transform|all)(,|$)/.test(i(`${fi}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:h}}function af(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>lf(n)+lf(t[i])))}function lf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Gl(){return document.body.offsetHeight}function Q_(t,e,n){const i=t[Hr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const cf=Symbol("_vod"),ev=Symbol("_vsh"),tv=Symbol(""),nv=/(^|;)\s*display\s*:/;function iv(t,e,n){const i=t.style,r=Rt(n);let s=!1;if(n&&!r){if(e)if(Rt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Do(i,a,"")}else for(const o in e)n[o]==null&&Do(i,o,"");for(const o in n)o==="display"&&(s=!0),Do(i,o,n[o])}else if(r){if(e!==n){const o=i[tv];o&&(n+=";"+o),i.cssText=n,s=nv.test(n)}}else e&&t.removeAttribute("style");cf in t&&(t[cf]=s?i.display:"",t[ev]&&(i.display="none"))}const uf=/\s*!important$/;function Do(t,e,n){if(Ve(n))n.forEach(i=>Do(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=rv(t,e);uf.test(n)?t.setProperty(dr(i),n.replace(uf,""),"important"):t[i]=n}}const ff=["Webkit","Moz","ms"],Ga={};function rv(t,e){const n=Ga[e];if(n)return n;let i=Mn(e);if(i!=="filter"&&i in t)return Ga[e]=i;i=aa(i);for(let r=0;r<ff.length;r++){const s=ff[r]+i;if(s in t)return Ga[e]=s}return e}const df="http://www.w3.org/1999/xlink";function hf(t,e,n,i,r,s=ag(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(df,e.slice(6,e.length)):t.setAttributeNS(df,e,n):n==null||s&&!ch(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Oi(n)?String(n):n)}function pf(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?_p(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=ch(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function Dr(t,e,n,i){t.addEventListener(e,n,i)}function sv(t,e,n,i){t.removeEventListener(e,n,i)}const mf=Symbol("_vei");function ov(t,e,n,i,r=null){const s=t[mf]||(t[mf]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=av(e);if(i){const c=s[e]=uv(i,r);Dr(t,a,c,l)}else o&&(sv(t,a,o,l),s[e]=void 0)}}const gf=/(?:Once|Passive|Capture)$/;function av(t){let e;if(gf.test(t)){e={};let i;for(;i=t.match(gf);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):dr(t.slice(2)),e]}let Wa=0;const lv=Promise.resolve(),cv=()=>Wa||(lv.then(()=>Wa=0),Wa=Date.now());function uv(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Pn(fv(i,n.value),e,5,[i])};return n.value=t,n.attached=cv(),n}function fv(t,e){if(Ve(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const _f=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,dv=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?Q_(t,i,o):e==="style"?iv(t,n,i):ra(e)?Gc(e)||ov(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):hv(t,e,i,o))?(pf(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&hf(t,e,i,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Rt(i))?pf(t,Mn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),hf(t,e,i,o))};function hv(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&_f(e)&&qe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return _f(e)&&Rt(n)?!1:e in t}const Mp=new WeakMap,Ep=new WeakMap,Ko=Symbol("_moveCb"),vf=Symbol("_enterCb"),pv=t=>(delete t.props.mode,t),mv=pv({name:"TransitionGroup",props:Lt({},xp,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=pp(),i=zh();let r,s;return qh(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!Sv(r[0].el,n.vnode.el,o)){r=[];return}r.forEach(_v),r.forEach(vv);const a=r.filter(xv);Gl(),a.forEach(l=>{const c=l.el,u=c.style;Nn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=c[Ko]=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",f),c[Ko]=null,xi(c,o))};c.addEventListener("transitionend",f)}),r=[]}),()=>{const o=nt(t),a=Sp(o);let l=o.tag||Dt;if(r=[],s)for(let c=0;c<s.length;c++){const u=s[c];u.el&&u.el instanceof Element&&(r.push(u),lr(u,Ts(u,a,i,n)),Mp.set(u,u.el.getBoundingClientRect()))}s=e.default?iu(e.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&lr(u,Ts(u,a,i,n))}return At(l,null,s)}}}),gv=mv;function _v(t){const e=t.el;e[Ko]&&e[Ko](),e[vf]&&e[vf]()}function vv(t){Ep.set(t,t.el.getBoundingClientRect())}function xv(t){const e=Mp.get(t),n=Ep.get(t),i=e.left-n.left,r=e.top-n.top;if(i||r){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",t}}function Sv(t,e,n){const i=t.cloneNode(),r=t[Hr];r&&r.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(i);const{hasTransform:o}=yp(i);return s.removeChild(i),o}const xf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Ve(e)?n=>Ro(e,n):e};function yv(t){t.target.composing=!0}function Sf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Xa=Symbol("_assign"),yf={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t[Xa]=xf(r);const s=i||r.props&&r.props.type==="number";Dr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=Ul(a)),t[Xa](a)}),n&&Dr(t,"change",()=>{t.value=t.value.trim()}),e||(Dr(t,"compositionstart",yv),Dr(t,"compositionend",Sf),Dr(t,"change",Sf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:r,number:s}},o){if(t[Xa]=xf(o),t.composing)return;const a=(s||t.type==="number")&&!/^0\d/.test(t.value)?Ul(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||r&&t.value.trim()===l)||(t.value=l))}},Mv=["ctrl","shift","alt","meta"],Ev={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Mv.some(n=>t[`${n}Key`]&&!e.includes(n))},zs=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=Ev[e[o]];if(a&&a(r,e))return}return t(r,...s)})},bv=Lt({patchProp:dv},j_);let Mf;function Tv(){return Mf||(Mf=v_(bv))}const Av=(...t)=>{const e=Tv().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Rv(i);if(!r)return;const s=e._component;!qe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,wv(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function wv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Rv(t){return Rt(t)?document.querySelector(t):t}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let bp;const _a=t=>bp=t,Tp=Symbol();function Wl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var xs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(xs||(xs={}));function Cv(){const t=hh(!0),e=t.run(()=>Le({}));let n=[],i=[];const r=Qc({install(s){_a(r),r._a=s,s.provide(Tp,r),s.config.globalProperties.$pinia=r,i.forEach(o=>n.push(o)),i=[]},use(s){return this._a?n.push(s):i.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const Ap=()=>{};function Ef(t,e,n,i=Ap){t.push(e);const r=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),i())};return!n&&ph()&&lg(r),r}function mr(t,...e){t.slice().forEach(n=>{n(...e)})}const Pv=t=>t(),bf=Symbol(),$a=Symbol();function Xl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],r=t[n];Wl(r)&&Wl(i)&&t.hasOwnProperty(n)&&!wt(i)&&!Ci(i)?t[n]=Xl(r,i):t[n]=i}return t}const Dv=Symbol();function Lv(t){return!Wl(t)||!Object.prototype.hasOwnProperty.call(t,Dv)}const{assign:Si}=Object;function Uv(t){return!!(wt(t)&&t.effect)}function Iv(t,e,n,i){const{state:r,actions:s,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=r?r():{});const u=Dg(n.state.value[t]);return Si(u,s,Object.keys(o||{}).reduce((f,d)=>(f[d]=Qc(Et(()=>{_a(n);const h=n._s.get(t);return o[d].call(h,h)})),f),{}))}return l=wp(t,c,e,n,i,!0),l}function wp(t,e,n={},i,r,s){let o;const a=Si({actions:{}},n),l={deep:!0};let c,u,f=[],d=[],h;const g=i.state.value[t];!s&&!g&&(i.state.value[t]={}),Le({});let v;function m(L){let y;c=u=!1,typeof L=="function"?(L(i.state.value[t]),y={type:xs.patchFunction,storeId:t,events:h}):(Xl(i.state.value[t],L),y={type:xs.patchObject,payload:L,storeId:t,events:h});const M=v=Symbol();eu().then(()=>{v===M&&(c=!0)}),u=!0,mr(f,y,i.state.value[t])}const p=s?function(){const{state:y}=n,M=y?y():{};this.$patch(I=>{Si(I,M)})}:Ap;function E(){o.stop(),f=[],d=[],i._s.delete(t)}const b=(L,y="")=>{if(bf in L)return L[$a]=y,L;const M=function(){_a(i);const I=Array.from(arguments),F=[],H=[];function J(ie){F.push(ie)}function ae(ie){H.push(ie)}mr(d,{args:I,name:M[$a],store:P,after:J,onError:ae});let X;try{X=L.apply(this&&this.$id===t?this:P,I)}catch(ie){throw mr(H,ie),ie}return X instanceof Promise?X.then(ie=>(mr(F,ie),ie)).catch(ie=>(mr(H,ie),Promise.reject(ie))):(mr(F,X),X)};return M[bf]=!0,M[$a]=y,M},x={_p:i,$id:t,$onAction:Ef.bind(null,d),$patch:m,$reset:p,$subscribe(L,y={}){const M=Ef(f,L,y.detached,()=>I()),I=o.run(()=>or(()=>i.state.value[t],F=>{(y.flush==="sync"?u:c)&&L({storeId:t,type:xs.direct,events:h},F)},Si({},l,y)));return M},$dispose:E},P=Ns(x);i._s.set(t,P);const D=(i._a&&i._a.runWithContext||Pv)(()=>i._e.run(()=>(o=hh()).run(()=>e({action:b}))));for(const L in D){const y=D[L];if(wt(y)&&!Uv(y)||Ci(y))s||(g&&Lv(y)&&(wt(y)?y.value=g[L]:Xl(y,g[L])),i.state.value[t][L]=y);else if(typeof y=="function"){const M=b(y,L);D[L]=M,a.actions[L]=y}}return Si(P,D),Si(nt(P),D),Object.defineProperty(P,"$state",{get:()=>i.state.value[t],set:L=>{m(y=>{Si(y,L)})}}),i._p.forEach(L=>{Si(P,o.run(()=>L({store:P,app:i._a,pinia:i,options:a})))}),g&&s&&n.hydrate&&n.hydrate(P.$state,g),c=!0,u=!0,P}/*! #__NO_SIDE_EFFECTS__ */function uu(t,e,n){let i;const r=typeof e=="function";i=r?n:e;function s(o,a){const l=f_();return o=o||(l?yn(Tp,null):null),o&&_a(o),o=bp,o._s.has(t)||(r?wp(t,e,i,o):Iv(t,i,o)),o._s.get(t)}return s.$id=t,s}const Rp=uu("ui",()=>{const t=Le([]);function e(n){const i=Date.now()+Math.random(),r={...n,notificationId:i};t.value.push(r),setTimeout(()=>{const s=t.value.findIndex(o=>o.notificationId===i);s!==-1&&t.value.splice(s,1)},5e3)}return{achievementQueue:t,showAchievement:e}}),dn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},Nv={class:"notification-card"},Fv={class:"text-content"},Ov={class:"name"},Bv={__name:"AchievementNotification",props:{achievement:{type:Object,required:!0}},setup(t){return(e,n)=>(Ge(),Je("div",Nv,[n[1]||(n[1]=de("div",{class:"icon"},"🏆",-1)),de("div",Fv,[n[0]||(n[0]=de("div",{class:"title"},"Achievement Unlocked!",-1)),de("div",Ov,_t(t.achievement.name),1)])]))}},zv=dn(Bv,[["__scopeId","data-v-141bf3dc"]]),kv={class:"notifier-container"},Hv={__name:"AchievementNotifier",setup(t){const e=Rp();return(n,i)=>(Ge(),Je("div",kv,[At(gv,{name:"slide-fade",tag:"div"},{default:nu(()=>[(Ge(!0),Je(Dt,null,kr(zt(e).achievementQueue,r=>(Ge(),Ai(zv,{key:r.notificationId,achievement:r},null,8,["achievement"]))),128))]),_:1})]))}},Vv=dn(Hv,[["__scopeId","data-v-1acbcba4"]]),Gv={id:"app-layout"},Wv={class:"main-content"},Xv={__name:"App",setup(t){return(e,n)=>{const i=e_("router-view");return Ge(),Je("div",Gv,[de("main",Wv,[At(i)]),At(Vv)])}}},$v=dn(Xv,[["__scopeId","data-v-7cc635c0"]]),qv="modulepreload",jv=function(t){return"/"+t},Tf={},Af=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let o=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=o(n.map(c=>{if(c=jv(c),c in Tf)return;Tf[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":qv,u||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),u)return new Promise((h,g)=>{d.addEventListener("load",h),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Lr=typeof document<"u";function Cp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Yv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Cp(t.default)}const ot=Object.assign;function qa(t,e){const n={};for(const i in e){const r=e[i];n[i]=Dn(r)?r.map(t):t(r)}return n}const Ss=()=>{},Dn=Array.isArray,Pp=/#/g,Kv=/&/g,Zv=/\//g,Jv=/=/g,Qv=/\?/g,Dp=/\+/g,e0=/%5B/g,t0=/%5D/g,Lp=/%5E/g,n0=/%60/g,Up=/%7B/g,i0=/%7C/g,Ip=/%7D/g,r0=/%20/g;function fu(t){return encodeURI(""+t).replace(i0,"|").replace(e0,"[").replace(t0,"]")}function s0(t){return fu(t).replace(Up,"{").replace(Ip,"}").replace(Lp,"^")}function $l(t){return fu(t).replace(Dp,"%2B").replace(r0,"+").replace(Pp,"%23").replace(Kv,"%26").replace(n0,"`").replace(Up,"{").replace(Ip,"}").replace(Lp,"^")}function o0(t){return $l(t).replace(Jv,"%3D")}function a0(t){return fu(t).replace(Pp,"%23").replace(Qv,"%3F")}function l0(t){return t==null?"":a0(t).replace(Zv,"%2F")}function Rs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const c0=/\/$/,u0=t=>t.replace(c0,"");function ja(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=p0(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:Rs(o)}}function f0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function wf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function d0(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Vr(e.matched[i],n.matched[r])&&Np(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Vr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Np(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!h0(t[n],e[n]))return!1;return!0}function h0(t,e){return Dn(t)?Rf(t,e):Dn(e)?Rf(e,t):t===e}function Rf(t,e){return Dn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function p0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const di={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Cs;(function(t){t.pop="pop",t.push="push"})(Cs||(Cs={}));var ys;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ys||(ys={}));function m0(t){if(!t)if(Lr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),u0(t)}const g0=/^[^#]+#/;function _0(t,e){return t.replace(g0,"#")+e}function v0(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const va=()=>({left:window.scrollX,top:window.scrollY});function x0(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=v0(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Cf(t,e){return(history.state?history.state.position-e:-1)+t}const ql=new Map;function S0(t,e){ql.set(t,e)}function y0(t){const e=ql.get(t);return ql.delete(t),e}let M0=()=>location.protocol+"//"+location.host;function Fp(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),wf(l,"")}return wf(n,t)+i+r}function E0(t,e,n,i){let r=[],s=[],o=null;const a=({state:d})=>{const h=Fp(t,location),g=n.value,v=e.value;let m=0;if(d){if(n.value=h,e.value=d,o&&o===g){o=null;return}m=v?d.position-v.position:0}else i(h);r.forEach(p=>{p(n.value,g,{delta:m,type:Cs.pop,direction:m?m>0?ys.forward:ys.back:ys.unknown})})};function l(){o=n.value}function c(d){r.push(d);const h=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return s.push(h),h}function u(){const{history:d}=window;d.state&&d.replaceState(ot({},d.state,{scroll:va()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Pf(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?va():null}}function b0(t){const{history:e,location:n}=window,i={value:Fp(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:M0()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(h){console.error(h),n[u?"replace":"assign"](d)}}function o(l,c){const u=ot({},e.state,Pf(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=ot({},r.value,e.state,{forward:l,scroll:va()});s(u.current,u,!0);const f=ot({},Pf(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function T0(t){t=m0(t);const e=b0(t),n=E0(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=ot({location:"",base:t,go:i,createHref:_0.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function A0(t){return typeof t=="string"||t&&typeof t=="object"}function Op(t){return typeof t=="string"||typeof t=="symbol"}const Bp=Symbol("");var Df;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Df||(Df={}));function Gr(t,e){return ot(new Error,{type:t,[Bp]:!0},e)}function qn(t,e){return t instanceof Error&&Bp in t&&(e==null||!!(t.type&e))}const Lf="[^/]+?",w0={sensitive:!1,strict:!1,start:!0,end:!0},R0=/[.+*?^${}()[\]/\\]/g;function C0(t,e){const n=ot({},w0,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let h=40+(n.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(R0,"\\$&"),h+=40;else if(d.type===1){const{value:g,repeatable:v,optional:m,regexp:p}=d;s.push({name:g,repeatable:v,optional:m});const E=p||Lf;if(E!==Lf){h+=10;try{new RegExp(`(${E})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${g}" (${E}): `+x.message)}}let b=v?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;f||(b=m&&c.length<2?`(?:/${b})`:"/"+b),m&&(b+="?"),r+=b,h+=20,m&&(h+=-8),v&&(h+=-20),E===".*"&&(h+=-50)}u.push(h)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const h=u[d]||"",g=s[d-1];f[g.name]=h&&g.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of d)if(h.type===0)u+=h.value;else if(h.type===1){const{value:g,repeatable:v,optional:m}=h,p=g in c?c[g]:"";if(Dn(p)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const E=Dn(p)?p.join("/"):p;if(!E)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=E}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function P0(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function zp(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=P0(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(Uf(i))return 1;if(Uf(r))return-1}return r.length-i.length}function Uf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const D0={type:0,value:""},L0=/[a-zA-Z0-9_]/;function U0(t){if(!t)return[[]];if(t==="/")return[[D0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:L0.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function I0(t,e,n){const i=C0(U0(t.path),n),r=ot(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function N0(t,e){const n=[],i=new Map;e=Of({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,d,h){const g=!h,v=Nf(f);v.aliasOf=h&&h.record;const m=Of(e,f),p=[v];if("alias"in f){const x=typeof f.alias=="string"?[f.alias]:f.alias;for(const P of x)p.push(Nf(ot({},v,{components:h?h.record.components:v.components,path:P,aliasOf:h?h.record:v})))}let E,b;for(const x of p){const{path:P}=x;if(d&&P[0]!=="/"){const R=d.record.path,D=R[R.length-1]==="/"?"":"/";x.path=d.record.path+(P&&D+P)}if(E=I0(x,d,m),h?h.alias.push(E):(b=b||E,b!==E&&b.alias.push(E),g&&f.name&&!Ff(E)&&o(f.name)),kp(E)&&l(E),v.children){const R=v.children;for(let D=0;D<R.length;D++)s(R[D],E,h&&h.children[D])}h=h||E}return b?()=>{o(b)}:Ss}function o(f){if(Op(f)){const d=i.get(f);d&&(i.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const d=B0(f,n);n.splice(d,0,f),f.record.name&&!Ff(f)&&i.set(f.record.name,f)}function c(f,d){let h,g={},v,m;if("name"in f&&f.name){if(h=i.get(f.name),!h)throw Gr(1,{location:f});m=h.record.name,g=ot(If(d.params,h.keys.filter(b=>!b.optional).concat(h.parent?h.parent.keys.filter(b=>b.optional):[]).map(b=>b.name)),f.params&&If(f.params,h.keys.map(b=>b.name))),v=h.stringify(g)}else if(f.path!=null)v=f.path,h=n.find(b=>b.re.test(v)),h&&(g=h.parse(v),m=h.record.name);else{if(h=d.name?i.get(d.name):n.find(b=>b.re.test(d.path)),!h)throw Gr(1,{location:f,currentLocation:d});m=h.record.name,g=ot({},d.params,f.params),v=h.stringify(g)}const p=[];let E=h;for(;E;)p.unshift(E.record),E=E.parent;return{name:m,path:v,params:g,matched:p,meta:O0(p)}}t.forEach(f=>s(f));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function If(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Nf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:F0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function F0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Ff(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function O0(t){return t.reduce((e,n)=>ot(e,n.meta),{})}function Of(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function B0(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;zp(t,e[s])<0?i=s:n=s+1}const r=z0(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function z0(t){let e=t;for(;e=e.parent;)if(kp(e)&&zp(t,e)===0)return e}function kp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function k0(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Dp," "),o=s.indexOf("="),a=Rs(o<0?s:s.slice(0,o)),l=o<0?null:Rs(s.slice(o+1));if(a in e){let c=e[a];Dn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Bf(t){let e="";for(let n in t){const i=t[n];if(n=o0(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Dn(i)?i.map(s=>s&&$l(s)):[i&&$l(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function H0(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Dn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const V0=Symbol(""),zf=Symbol(""),xa=Symbol(""),du=Symbol(""),jl=Symbol("");function ns(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function bi(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(Gr(4,{from:n,to:e})):d instanceof Error?l(d):A0(d)?l(Gr(2,{from:e,to:d})):(o&&i.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function Ya(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Cp(l)){const u=(l.__vccOpts||l)[e];u&&s.push(bi(u,n,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=Yv(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const h=(f.__vccOpts||f)[e];return h&&bi(h,n,i,o,a,r)()}))}}return s}function kf(t){const e=yn(xa),n=yn(du),i=Et(()=>{const l=zt(t.to);return e.resolve(l)}),r=Et(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Vr.bind(null,u));if(d>-1)return d;const h=Hf(l[c-2]);return c>1&&Hf(u)===h&&f[f.length-1].path!==h?f.findIndex(Vr.bind(null,l[c-2])):d}),s=Et(()=>r.value>-1&&q0(n.params,i.value.params)),o=Et(()=>r.value>-1&&r.value===n.matched.length-1&&Np(n.params,i.value.params));function a(l={}){if($0(l)){const c=e[zt(t.replace)?"replace":"push"](zt(t.to)).catch(Ss);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Et(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function G0(t){return t.length===1?t[0]:t}const W0=Wh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:kf,setup(t,{slots:e}){const n=Ns(kf(t)),{options:i}=yn(xa),r=Et(()=>({[Vf(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Vf(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&G0(e.default(n));return t.custom?s:cu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),X0=W0;function $0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function q0(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Dn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Hf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Vf=(t,e,n)=>t??e??n,j0=Wh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=yn(jl),r=Et(()=>t.route||i.value),s=yn(zf,0),o=Et(()=>{let c=zt(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Et(()=>r.value.matched[o.value]);Co(zf,Et(()=>o.value+1)),Co(V0,a),Co(jl,r);const l=Le();return or(()=>[l.value,a.value,t.name],([c,u,f],[d,h,g])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!Vr(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return Gf(n.default,{Component:d,route:c});const h=f.props[u],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=cu(d,ot({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Gf(n.default,{Component:m,route:c})||m}}});function Gf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Y0=j0;function K0(t){const e=N0(t.routes,t),n=t.parseQuery||k0,i=t.stringifyQuery||Bf,r=t.history,s=ns(),o=ns(),a=ns(),l=Rg(di);let c=di;Lr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=qa.bind(null,O=>""+O),f=qa.bind(null,l0),d=qa.bind(null,Rs);function h(O,re){let ue,ce;return Op(O)?(ue=e.getRecordMatcher(O),ce=re):ce=O,e.addRoute(ce,ue)}function g(O){const re=e.getRecordMatcher(O);re&&e.removeRoute(re)}function v(){return e.getRoutes().map(O=>O.record)}function m(O){return!!e.getRecordMatcher(O)}function p(O,re){if(re=ot({},re||l.value),typeof O=="string"){const S=ja(n,O,re.path),ne=e.resolve({path:S.path},re),K=r.createHref(S.fullPath);return ot(S,ne,{params:d(ne.params),hash:Rs(S.hash),redirectedFrom:void 0,href:K})}let ue;if(O.path!=null)ue=ot({},O,{path:ja(n,O.path,re.path).path});else{const S=ot({},O.params);for(const ne in S)S[ne]==null&&delete S[ne];ue=ot({},O,{params:f(S)}),re.params=f(re.params)}const ce=e.resolve(ue,re),ze=O.hash||"";ce.params=u(d(ce.params));const w=f0(i,ot({},O,{hash:s0(ze),path:ce.path})),C=r.createHref(w);return ot({fullPath:w,hash:ze,query:i===Bf?H0(O.query):O.query||{}},ce,{redirectedFrom:void 0,href:C})}function E(O){return typeof O=="string"?ja(n,O,l.value.path):ot({},O)}function b(O,re){if(c!==O)return Gr(8,{from:re,to:O})}function x(O){return D(O)}function P(O){return x(ot(E(O),{replace:!0}))}function R(O){const re=O.matched[O.matched.length-1];if(re&&re.redirect){const{redirect:ue}=re;let ce=typeof ue=="function"?ue(O):ue;return typeof ce=="string"&&(ce=ce.includes("?")||ce.includes("#")?ce=E(ce):{path:ce},ce.params={}),ot({query:O.query,hash:O.hash,params:ce.path!=null?{}:O.params},ce)}}function D(O,re){const ue=c=p(O),ce=l.value,ze=O.state,w=O.force,C=O.replace===!0,S=R(ue);if(S)return D(ot(E(S),{state:typeof S=="object"?ot({},ze,S.state):ze,force:w,replace:C}),re||ue);const ne=ue;ne.redirectedFrom=re;let K;return!w&&d0(i,ce,ue)&&(K=Gr(16,{to:ne,from:ce}),Ce(ce,ce,!0,!1)),(K?Promise.resolve(K):M(ne,ce)).catch(j=>qn(j)?qn(j,2)?j:ye(j):G(j,ne,ce)).then(j=>{if(j){if(qn(j,2))return D(ot({replace:C},E(j.to),{state:typeof j.to=="object"?ot({},ze,j.to.state):ze,force:w}),re||ne)}else j=F(ne,ce,!0,C,ze);return I(ne,ce,j),j})}function L(O,re){const ue=b(O,re);return ue?Promise.reject(ue):Promise.resolve()}function y(O){const re=se.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(O):O()}function M(O,re){let ue;const[ce,ze,w]=Z0(O,re);ue=Ya(ce.reverse(),"beforeRouteLeave",O,re);for(const S of ce)S.leaveGuards.forEach(ne=>{ue.push(bi(ne,O,re))});const C=L.bind(null,O,re);return ue.push(C),Te(ue).then(()=>{ue=[];for(const S of s.list())ue.push(bi(S,O,re));return ue.push(C),Te(ue)}).then(()=>{ue=Ya(ze,"beforeRouteUpdate",O,re);for(const S of ze)S.updateGuards.forEach(ne=>{ue.push(bi(ne,O,re))});return ue.push(C),Te(ue)}).then(()=>{ue=[];for(const S of w)if(S.beforeEnter)if(Dn(S.beforeEnter))for(const ne of S.beforeEnter)ue.push(bi(ne,O,re));else ue.push(bi(S.beforeEnter,O,re));return ue.push(C),Te(ue)}).then(()=>(O.matched.forEach(S=>S.enterCallbacks={}),ue=Ya(w,"beforeRouteEnter",O,re,y),ue.push(C),Te(ue))).then(()=>{ue=[];for(const S of o.list())ue.push(bi(S,O,re));return ue.push(C),Te(ue)}).catch(S=>qn(S,8)?S:Promise.reject(S))}function I(O,re,ue){a.list().forEach(ce=>y(()=>ce(O,re,ue)))}function F(O,re,ue,ce,ze){const w=b(O,re);if(w)return w;const C=re===di,S=Lr?history.state:{};ue&&(ce||C?r.replace(O.fullPath,ot({scroll:C&&S&&S.scroll},ze)):r.push(O.fullPath,ze)),l.value=O,Ce(O,re,ue,C),ye()}let H;function J(){H||(H=r.listen((O,re,ue)=>{if(!_e.listening)return;const ce=p(O),ze=R(ce);if(ze){D(ot(ze,{replace:!0,force:!0}),ce).catch(Ss);return}c=ce;const w=l.value;Lr&&S0(Cf(w.fullPath,ue.delta),va()),M(ce,w).catch(C=>qn(C,12)?C:qn(C,2)?(D(ot(E(C.to),{force:!0}),ce).then(S=>{qn(S,20)&&!ue.delta&&ue.type===Cs.pop&&r.go(-1,!1)}).catch(Ss),Promise.reject()):(ue.delta&&r.go(-ue.delta,!1),G(C,ce,w))).then(C=>{C=C||F(ce,w,!1),C&&(ue.delta&&!qn(C,8)?r.go(-ue.delta,!1):ue.type===Cs.pop&&qn(C,20)&&r.go(-1,!1)),I(ce,w,C)}).catch(Ss)}))}let ae=ns(),X=ns(),ie;function G(O,re,ue){ye(O);const ce=X.list();return ce.length?ce.forEach(ze=>ze(O,re,ue)):console.error(O),Promise.reject(O)}function ve(){return ie&&l.value!==di?Promise.resolve():new Promise((O,re)=>{ae.add([O,re])})}function ye(O){return ie||(ie=!O,J(),ae.list().forEach(([re,ue])=>O?ue(O):re()),ae.reset()),O}function Ce(O,re,ue,ce){const{scrollBehavior:ze}=t;if(!Lr||!ze)return Promise.resolve();const w=!ue&&y0(Cf(O.fullPath,0))||(ce||!ue)&&history.state&&history.state.scroll||null;return eu().then(()=>ze(O,re,w)).then(C=>C&&x0(C)).catch(C=>G(C,O,re))}const Be=O=>r.go(O);let Qe;const se=new Set,_e={currentRoute:l,listening:!0,addRoute:h,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:v,resolve:p,options:t,push:x,replace:P,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:X.add,isReady:ve,install(O){const re=this;O.component("RouterLink",X0),O.component("RouterView",Y0),O.config.globalProperties.$router=re,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>zt(l)}),Lr&&!Qe&&l.value===di&&(Qe=!0,x(r.location).catch(ze=>{}));const ue={};for(const ze in di)Object.defineProperty(ue,ze,{get:()=>l.value[ze],enumerable:!0});O.provide(xa,re),O.provide(du,Ch(ue)),O.provide(jl,l);const ce=O.unmount;se.add(O),O.unmount=function(){se.delete(O),se.size<1&&(c=di,H&&H(),H=null,l.value=di,Qe=!1,ie=!1),ce()}}};function Te(O){return O.reduce((re,ue)=>re.then(()=>y(ue)),Promise.resolve())}return _e}function Z0(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>Vr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Vr(c,l))||r.push(l))}return[n,i,r]}function J0(){return yn(xa)}function ER(t){return yn(du)}const Q0="/assets/soundtrack/main_menu.wav";function Hp(t,e){return function(){return t.apply(e,arguments)}}const{toString:ex}=Object.prototype,{getPrototypeOf:hu}=Object,{iterator:Sa,toStringTag:Vp}=Symbol,ya=(t=>e=>{const n=ex.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Ln=t=>(t=t.toLowerCase(),e=>ya(e)===t),Ma=t=>e=>typeof e===t,{isArray:Yr}=Array,Ps=Ma("undefined");function tx(t){return t!==null&&!Ps(t)&&t.constructor!==null&&!Ps(t.constructor)&&tn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Gp=Ln("ArrayBuffer");function nx(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Gp(t.buffer),e}const ix=Ma("string"),tn=Ma("function"),Wp=Ma("number"),Ea=t=>t!==null&&typeof t=="object",rx=t=>t===!0||t===!1,Lo=t=>{if(ya(t)!=="object")return!1;const e=hu(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Vp in t)&&!(Sa in t)},sx=Ln("Date"),ox=Ln("File"),ax=Ln("Blob"),lx=Ln("FileList"),cx=t=>Ea(t)&&tn(t.pipe),ux=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||tn(t.append)&&((e=ya(t))==="formdata"||e==="object"&&tn(t.toString)&&t.toString()==="[object FormData]"))},fx=Ln("URLSearchParams"),[dx,hx,px,mx]=["ReadableStream","Request","Response","Headers"].map(Ln),gx=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ks(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),Yr(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,t[a],a,t)}}function Xp(t,e){e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const tr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,$p=t=>!Ps(t)&&t!==tr;function Yl(){const{caseless:t}=$p(this)&&this||{},e={},n=(i,r)=>{const s=t&&Xp(e,r)||r;Lo(e[s])&&Lo(i)?e[s]=Yl(e[s],i):Lo(i)?e[s]=Yl({},i):Yr(i)?e[s]=i.slice():e[s]=i};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&ks(arguments[i],n);return e}const _x=(t,e,n,{allOwnKeys:i}={})=>(ks(e,(r,s)=>{n&&tn(r)?t[s]=Hp(r,n):t[s]=r},{allOwnKeys:i}),t),vx=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),xx=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Sx=(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&hu(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},yx=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},Mx=t=>{if(!t)return null;if(Yr(t))return t;let e=t.length;if(!Wp(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Ex=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&hu(Uint8Array)),bx=(t,e)=>{const i=(t&&t[Sa]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},Tx=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},Ax=Ln("HTMLFormElement"),wx=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),Wf=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Rx=Ln("RegExp"),qp=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};ks(n,(r,s)=>{let o;(o=e(r,s,t))!==!1&&(i[s]=o||r)}),Object.defineProperties(t,i)},Cx=t=>{qp(t,(e,n)=>{if(tn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(tn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Px=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return Yr(t)?i(t):i(String(t).split(e)),n},Dx=()=>{},Lx=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function Ux(t){return!!(t&&tn(t.append)&&t[Vp]==="FormData"&&t[Sa])}const Ix=t=>{const e=new Array(10),n=(i,r)=>{if(Ea(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[r]=i;const s=Yr(i)?[]:{};return ks(i,(o,a)=>{const l=n(o,r+1);!Ps(l)&&(s[a]=l)}),e[r]=void 0,s}}return i};return n(t,0)},Nx=Ln("AsyncFunction"),Fx=t=>t&&(Ea(t)||tn(t))&&tn(t.then)&&tn(t.catch),jp=((t,e)=>t?setImmediate:e?((n,i)=>(tr.addEventListener("message",({source:r,data:s})=>{r===tr&&s===n&&i.length&&i.shift()()},!1),r=>{i.push(r),tr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",tn(tr.postMessage)),Ox=typeof queueMicrotask<"u"?queueMicrotask.bind(tr):typeof process<"u"&&process.nextTick||jp,Bx=t=>t!=null&&tn(t[Sa]),Z={isArray:Yr,isArrayBuffer:Gp,isBuffer:tx,isFormData:ux,isArrayBufferView:nx,isString:ix,isNumber:Wp,isBoolean:rx,isObject:Ea,isPlainObject:Lo,isReadableStream:dx,isRequest:hx,isResponse:px,isHeaders:mx,isUndefined:Ps,isDate:sx,isFile:ox,isBlob:ax,isRegExp:Rx,isFunction:tn,isStream:cx,isURLSearchParams:fx,isTypedArray:Ex,isFileList:lx,forEach:ks,merge:Yl,extend:_x,trim:gx,stripBOM:vx,inherits:xx,toFlatObject:Sx,kindOf:ya,kindOfTest:Ln,endsWith:yx,toArray:Mx,forEachEntry:bx,matchAll:Tx,isHTMLForm:Ax,hasOwnProperty:Wf,hasOwnProp:Wf,reduceDescriptors:qp,freezeMethods:Cx,toObjectSet:Px,toCamelCase:wx,noop:Dx,toFiniteNumber:Lx,findKey:Xp,global:tr,isContextDefined:$p,isSpecCompliantForm:Ux,toJSONObject:Ix,isAsyncFn:Nx,isThenable:Fx,setImmediate:jp,asap:Ox,isIterable:Bx};function Ye(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r,this.status=r.status?r.status:null)}Z.inherits(Ye,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Z.toJSONObject(this.config),code:this.code,status:this.status}}});const Yp=Ye.prototype,Kp={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Kp[t]={value:t}});Object.defineProperties(Ye,Kp);Object.defineProperty(Yp,"isAxiosError",{value:!0});Ye.from=(t,e,n,i,r,s)=>{const o=Object.create(Yp);return Z.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),Ye.call(o,t.message,e,n,i,r),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const zx=null;function Kl(t){return Z.isPlainObject(t)||Z.isArray(t)}function Zp(t){return Z.endsWith(t,"[]")?t.slice(0,-2):t}function Xf(t,e,n){return t?t.concat(e).map(function(r,s){return r=Zp(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function kx(t){return Z.isArray(t)&&!t.some(Kl)}const Hx=Z.toFlatObject(Z,{},null,function(e){return/^is[A-Z]/.test(e)});function ba(t,e,n){if(!Z.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=Z.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,m){return!Z.isUndefined(m[v])});const i=n.metaTokens,r=n.visitor||u,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&Z.isSpecCompliantForm(e);if(!Z.isFunction(r))throw new TypeError("visitor must be a function");function c(g){if(g===null)return"";if(Z.isDate(g))return g.toISOString();if(Z.isBoolean(g))return g.toString();if(!l&&Z.isBlob(g))throw new Ye("Blob is not supported. Use a Buffer instead.");return Z.isArrayBuffer(g)||Z.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,v,m){let p=g;if(g&&!m&&typeof g=="object"){if(Z.endsWith(v,"{}"))v=i?v:v.slice(0,-2),g=JSON.stringify(g);else if(Z.isArray(g)&&kx(g)||(Z.isFileList(g)||Z.endsWith(v,"[]"))&&(p=Z.toArray(g)))return v=Zp(v),p.forEach(function(b,x){!(Z.isUndefined(b)||b===null)&&e.append(o===!0?Xf([v],x,s):o===null?v:v+"[]",c(b))}),!1}return Kl(g)?!0:(e.append(Xf(m,v,s),c(g)),!1)}const f=[],d=Object.assign(Hx,{defaultVisitor:u,convertValue:c,isVisitable:Kl});function h(g,v){if(!Z.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+v.join("."));f.push(g),Z.forEach(g,function(p,E){(!(Z.isUndefined(p)||p===null)&&r.call(e,p,Z.isString(E)?E.trim():E,v,d))===!0&&h(p,v?v.concat(E):[E])}),f.pop()}}if(!Z.isObject(t))throw new TypeError("data must be an object");return h(t),e}function $f(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function pu(t,e){this._pairs=[],t&&ba(t,this,e)}const Jp=pu.prototype;Jp.append=function(e,n){this._pairs.push([e,n])};Jp.toString=function(e){const n=e?function(i){return e.call(this,i,$f)}:$f;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function Vx(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Qp(t,e,n){if(!e)return t;const i=n&&n.encode||Vx;Z.isFunction(n)&&(n={serialize:n});const r=n&&n.serialize;let s;if(r?s=r(e,n):s=Z.isURLSearchParams(e)?e.toString():new pu(e,n).toString(i),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class qf{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Z.forEach(this.handlers,function(i){i!==null&&e(i)})}}const em={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Gx=typeof URLSearchParams<"u"?URLSearchParams:pu,Wx=typeof FormData<"u"?FormData:null,Xx=typeof Blob<"u"?Blob:null,$x={isBrowser:!0,classes:{URLSearchParams:Gx,FormData:Wx,Blob:Xx},protocols:["http","https","file","blob","url","data"]},mu=typeof window<"u"&&typeof document<"u",Zl=typeof navigator=="object"&&navigator||void 0,qx=mu&&(!Zl||["ReactNative","NativeScript","NS"].indexOf(Zl.product)<0),jx=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Yx=mu&&window.location.href||"http://localhost",Kx=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:mu,hasStandardBrowserEnv:qx,hasStandardBrowserWebWorkerEnv:jx,navigator:Zl,origin:Yx},Symbol.toStringTag,{value:"Module"})),Xt={...Kx,...$x};function Zx(t,e){return ba(t,new Xt.classes.URLSearchParams,Object.assign({visitor:function(n,i,r,s){return Xt.isNode&&Z.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function Jx(t){return Z.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Qx(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function tm(t){function e(n,i,r,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&Z.isArray(r)?r.length:o,l?(Z.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a):((!r[o]||!Z.isObject(r[o]))&&(r[o]=[]),e(n,i,r[o],s)&&Z.isArray(r[o])&&(r[o]=Qx(r[o])),!a)}if(Z.isFormData(t)&&Z.isFunction(t.entries)){const n={};return Z.forEachEntry(t,(i,r)=>{e(Jx(i),r,n,0)}),n}return null}function eS(t,e,n){if(Z.isString(t))try{return(e||JSON.parse)(t),Z.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Hs={transitional:em,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=Z.isObject(e);if(s&&Z.isHTMLForm(e)&&(e=new FormData(e)),Z.isFormData(e))return r?JSON.stringify(tm(e)):e;if(Z.isArrayBuffer(e)||Z.isBuffer(e)||Z.isStream(e)||Z.isFile(e)||Z.isBlob(e)||Z.isReadableStream(e))return e;if(Z.isArrayBufferView(e))return e.buffer;if(Z.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return Zx(e,this.formSerializer).toString();if((a=Z.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return ba(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(n.setContentType("application/json",!1),eS(e)):e}],transformResponse:[function(e){const n=this.transitional||Hs.transitional,i=n&&n.forcedJSONParsing,r=this.responseType==="json";if(Z.isResponse(e)||Z.isReadableStream(e))return e;if(e&&Z.isString(e)&&(i&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?Ye.from(a,Ye.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Xt.classes.FormData,Blob:Xt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Z.forEach(["delete","get","head","post","put","patch"],t=>{Hs.headers[t]={}});const tS=Z.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),nS=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!n||e[n]&&tS[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},jf=Symbol("internals");function is(t){return t&&String(t).trim().toLowerCase()}function Uo(t){return t===!1||t==null?t:Z.isArray(t)?t.map(Uo):String(t)}function iS(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const rS=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Ka(t,e,n,i,r){if(Z.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!Z.isString(e)){if(Z.isString(i))return e.indexOf(i)!==-1;if(Z.isRegExp(i))return i.test(e)}}function sS(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function oS(t,e){const n=Z.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}let nn=class{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(a,l,c){const u=is(l);if(!u)throw new Error("header name must be a non-empty string");const f=Z.findKey(r,u);(!f||r[f]===void 0||c===!0||c===void 0&&r[f]!==!1)&&(r[f||l]=Uo(a))}const o=(a,l)=>Z.forEach(a,(c,u)=>s(c,u,l));if(Z.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(Z.isString(e)&&(e=e.trim())&&!rS(e))o(nS(e),n);else if(Z.isObject(e)&&Z.isIterable(e)){let a={},l,c;for(const u of e){if(!Z.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[c=u[0]]=(l=a[c])?Z.isArray(l)?[...l,u[1]]:[l,u[1]]:u[1]}o(a,n)}else e!=null&&s(n,e,i);return this}get(e,n){if(e=is(e),e){const i=Z.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return iS(r);if(Z.isFunction(n))return n.call(this,r,i);if(Z.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=is(e),e){const i=Z.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||Ka(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(o){if(o=is(o),o){const a=Z.findKey(i,o);a&&(!n||Ka(i,i[a],a,n))&&(delete i[a],r=!0)}}return Z.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||Ka(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return Z.forEach(this,(r,s)=>{const o=Z.findKey(i,s);if(o){n[o]=Uo(r),delete n[s];return}const a=e?sS(s):String(s).trim();a!==s&&delete n[s],n[a]=Uo(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return Z.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&Z.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[jf]=this[jf]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=is(o);i[a]||(oS(r,o),i[a]=!0)}return Z.isArray(e)?e.forEach(s):s(e),this}};nn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);Z.reduceDescriptors(nn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});Z.freezeMethods(nn);function Za(t,e){const n=this||Hs,i=e||n,r=nn.from(i.headers);let s=i.data;return Z.forEach(t,function(a){s=a.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function nm(t){return!!(t&&t.__CANCEL__)}function Kr(t,e,n){Ye.call(this,t??"canceled",Ye.ERR_CANCELED,e,n),this.name="CanceledError"}Z.inherits(Kr,Ye,{__CANCEL__:!0});function im(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new Ye("Request failed with status code "+n.status,[Ye.ERR_BAD_REQUEST,Ye.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function aS(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function lS(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[s];o||(o=c),n[r]=l,i[r]=c;let f=s,d=0;for(;f!==r;)d+=n[f++],f=f%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),c-o<e)return;const h=u&&c-u;return h?Math.round(d*1e3/h):void 0}}function cS(t,e){let n=0,i=1e3/e,r,s;const o=(c,u=Date.now())=>{n=u,r=null,s&&(clearTimeout(s),s=null),t.apply(null,c)};return[(...c)=>{const u=Date.now(),f=u-n;f>=i?o(c,u):(r=c,s||(s=setTimeout(()=>{s=null,o(r)},i-f)))},()=>r&&o(r)]}const Zo=(t,e,n=3)=>{let i=0;const r=lS(50,250);return cS(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=o-i,c=r(l),u=o<=a;i=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},Yf=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},Kf=t=>(...e)=>Z.asap(()=>t(...e)),uS=Xt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Xt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Xt.origin),Xt.navigator&&/(msie|trident)/i.test(Xt.navigator.userAgent)):()=>!0,fS=Xt.hasStandardBrowserEnv?{write(t,e,n,i,r,s){const o=[t+"="+encodeURIComponent(e)];Z.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),Z.isString(i)&&o.push("path="+i),Z.isString(r)&&o.push("domain="+r),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function dS(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function hS(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function rm(t,e,n){let i=!dS(e);return t&&(i||n==!1)?hS(t,e):e}const Zf=t=>t instanceof nn?{...t}:t;function cr(t,e){e=e||{};const n={};function i(c,u,f,d){return Z.isPlainObject(c)&&Z.isPlainObject(u)?Z.merge.call({caseless:d},c,u):Z.isPlainObject(u)?Z.merge({},u):Z.isArray(u)?u.slice():u}function r(c,u,f,d){if(Z.isUndefined(u)){if(!Z.isUndefined(c))return i(void 0,c,f,d)}else return i(c,u,f,d)}function s(c,u){if(!Z.isUndefined(u))return i(void 0,u)}function o(c,u){if(Z.isUndefined(u)){if(!Z.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,f){if(f in e)return i(c,u);if(f in t)return i(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u,f)=>r(Zf(c),Zf(u),f,!0)};return Z.forEach(Object.keys(Object.assign({},t,e)),function(u){const f=l[u]||r,d=f(t[u],e[u],u);Z.isUndefined(d)&&f!==a||(n[u]=d)}),n}const sm=t=>{const e=cr({},t);let{data:n,withXSRFToken:i,xsrfHeaderName:r,xsrfCookieName:s,headers:o,auth:a}=e;e.headers=o=nn.from(o),e.url=Qp(rm(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(Z.isFormData(n)){if(Xt.hasStandardBrowserEnv||Xt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[c,...u]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...u].join("; "))}}if(Xt.hasStandardBrowserEnv&&(i&&Z.isFunction(i)&&(i=i(e)),i||i!==!1&&uS(e.url))){const c=r&&s&&fS.read(s);c&&o.set(r,c)}return e},pS=typeof XMLHttpRequest<"u",mS=pS&&function(t){return new Promise(function(n,i){const r=sm(t);let s=r.data;const o=nn.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=r,u,f,d,h,g;function v(){h&&h(),g&&g(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let m=new XMLHttpRequest;m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout;function p(){if(!m)return;const b=nn.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),P={data:!a||a==="text"||a==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:b,config:t,request:m};im(function(D){n(D),v()},function(D){i(D),v()},P),m=null}"onloadend"in m?m.onloadend=p:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(p)},m.onabort=function(){m&&(i(new Ye("Request aborted",Ye.ECONNABORTED,t,m)),m=null)},m.onerror=function(){i(new Ye("Network Error",Ye.ERR_NETWORK,t,m)),m=null},m.ontimeout=function(){let x=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const P=r.transitional||em;r.timeoutErrorMessage&&(x=r.timeoutErrorMessage),i(new Ye(x,P.clarifyTimeoutError?Ye.ETIMEDOUT:Ye.ECONNABORTED,t,m)),m=null},s===void 0&&o.setContentType(null),"setRequestHeader"in m&&Z.forEach(o.toJSON(),function(x,P){m.setRequestHeader(P,x)}),Z.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),a&&a!=="json"&&(m.responseType=r.responseType),c&&([d,g]=Zo(c,!0),m.addEventListener("progress",d)),l&&m.upload&&([f,h]=Zo(l),m.upload.addEventListener("progress",f),m.upload.addEventListener("loadend",h)),(r.cancelToken||r.signal)&&(u=b=>{m&&(i(!b||b.type?new Kr(null,t,m):b),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const E=aS(r.url);if(E&&Xt.protocols.indexOf(E)===-1){i(new Ye("Unsupported protocol "+E+":",Ye.ERR_BAD_REQUEST,t));return}m.send(s||null)})},gS=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let i=new AbortController,r;const s=function(c){if(!r){r=!0,a();const u=c instanceof Error?c:this.reason;i.abort(u instanceof Ye?u:new Kr(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,s(new Ye(`timeout ${e} of ms exceeded`,Ye.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),t=null)};t.forEach(c=>c.addEventListener("abort",s));const{signal:l}=i;return l.unsubscribe=()=>Z.asap(a),l}},_S=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,r;for(;i<n;)r=i+e,yield t.slice(i,r),i=r},vS=async function*(t,e){for await(const n of xS(t))yield*_S(n,e)},xS=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},Jf=(t,e,n,i)=>{const r=vS(t,e);let s=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await r.next();if(c){a(),l.close();return}let f=u.byteLength;if(n){let d=s+=f;n(d)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),r.return()}},{highWaterMark:2})},Ta=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",om=Ta&&typeof ReadableStream=="function",SS=Ta&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),am=(t,...e)=>{try{return!!t(...e)}catch{return!1}},yS=om&&am(()=>{let t=!1;const e=new Request(Xt.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),Qf=64*1024,Jl=om&&am(()=>Z.isReadableStream(new Response("").body)),Jo={stream:Jl&&(t=>t.body)};Ta&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Jo[e]&&(Jo[e]=Z.isFunction(t[e])?n=>n[e]():(n,i)=>{throw new Ye(`Response type '${e}' is not supported`,Ye.ERR_NOT_SUPPORT,i)})})})(new Response);const MS=async t=>{if(t==null)return 0;if(Z.isBlob(t))return t.size;if(Z.isSpecCompliantForm(t))return(await new Request(Xt.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(Z.isArrayBufferView(t)||Z.isArrayBuffer(t))return t.byteLength;if(Z.isURLSearchParams(t)&&(t=t+""),Z.isString(t))return(await SS(t)).byteLength},ES=async(t,e)=>{const n=Z.toFiniteNumber(t.getContentLength());return n??MS(e)},bS=Ta&&(async t=>{let{url:e,method:n,data:i,signal:r,cancelToken:s,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:c,headers:u,withCredentials:f="same-origin",fetchOptions:d}=sm(t);c=c?(c+"").toLowerCase():"text";let h=gS([r,s&&s.toAbortSignal()],o),g;const v=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let m;try{if(l&&yS&&n!=="get"&&n!=="head"&&(m=await ES(u,i))!==0){let P=new Request(e,{method:"POST",body:i,duplex:"half"}),R;if(Z.isFormData(i)&&(R=P.headers.get("content-type"))&&u.setContentType(R),P.body){const[D,L]=Yf(m,Zo(Kf(l)));i=Jf(P.body,Qf,D,L)}}Z.isString(f)||(f=f?"include":"omit");const p="credentials"in Request.prototype;g=new Request(e,{...d,signal:h,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:i,duplex:"half",credentials:p?f:void 0});let E=await fetch(g,d);const b=Jl&&(c==="stream"||c==="response");if(Jl&&(a||b&&v)){const P={};["status","statusText","headers"].forEach(y=>{P[y]=E[y]});const R=Z.toFiniteNumber(E.headers.get("content-length")),[D,L]=a&&Yf(R,Zo(Kf(a),!0))||[];E=new Response(Jf(E.body,Qf,D,()=>{L&&L(),v&&v()}),P)}c=c||"text";let x=await Jo[Z.findKey(Jo,c)||"text"](E,t);return!b&&v&&v(),await new Promise((P,R)=>{im(P,R,{data:x,headers:nn.from(E.headers),status:E.status,statusText:E.statusText,config:t,request:g})})}catch(p){throw v&&v(),p&&p.name==="TypeError"&&/Load failed|fetch/i.test(p.message)?Object.assign(new Ye("Network Error",Ye.ERR_NETWORK,t,g),{cause:p.cause||p}):Ye.from(p,p&&p.code,t,g)}}),Ql={http:zx,xhr:mS,fetch:bS};Z.forEach(Ql,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const ed=t=>`- ${t}`,TS=t=>Z.isFunction(t)||t===null||t===!1,lm={getAdapter:t=>{t=Z.isArray(t)?t:[t];const{length:e}=t;let n,i;const r={};for(let s=0;s<e;s++){n=t[s];let o;if(i=n,!TS(n)&&(i=Ql[(o=String(n)).toLowerCase()],i===void 0))throw new Ye(`Unknown adapter '${o}'`);if(i)break;r[o||"#"+s]=i}if(!i){const s=Object.entries(r).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(ed).join(`
`):" "+ed(s[0]):"as no adapter specified";throw new Ye("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return i},adapters:Ql};function Ja(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Kr(null,t)}function td(t){return Ja(t),t.headers=nn.from(t.headers),t.data=Za.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),lm.getAdapter(t.adapter||Hs.adapter)(t).then(function(i){return Ja(t),i.data=Za.call(t,t.transformResponse,i),i.headers=nn.from(i.headers),i},function(i){return nm(i)||(Ja(t),i&&i.response&&(i.response.data=Za.call(t,t.transformResponse,i.response),i.response.headers=nn.from(i.response.headers))),Promise.reject(i)})}const cm="1.10.0",Aa={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Aa[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const nd={};Aa.transitional=function(e,n,i){function r(s,o){return"[Axios v"+cm+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new Ye(r(o," has been removed"+(n?" in "+n:"")),Ye.ERR_DEPRECATED);return n&&!nd[o]&&(nd[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};Aa.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function AS(t,e,n){if(typeof t!="object")throw new Ye("options must be an object",Ye.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new Ye("option "+s+" must be "+l,Ye.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Ye("Unknown option "+s,Ye.ERR_BAD_OPTION)}}const Io={assertOptions:AS,validators:Aa},In=Io.validators;let ar=class{constructor(e){this.defaults=e||{},this.interceptors={request:new qf,response:new qf}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=r.stack?r.stack.replace(/^.+\n/,""):"";try{i.stack?s&&!String(i.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+s):i.stack=s}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=cr(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&Io.assertOptions(i,{silentJSONParsing:In.transitional(In.boolean),forcedJSONParsing:In.transitional(In.boolean),clarifyTimeoutError:In.transitional(In.boolean)},!1),r!=null&&(Z.isFunction(r)?n.paramsSerializer={serialize:r}:Io.assertOptions(r,{encode:In.function,serialize:In.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Io.assertOptions(n,{baseUrl:In.spelling("baseURL"),withXsrfToken:In.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&Z.merge(s.common,s[n.method]);s&&Z.forEach(["delete","get","head","post","put","patch","common"],g=>{delete s[g]}),n.headers=nn.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(l=l&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let u,f=0,d;if(!l){const g=[td.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,c),d=g.length,u=Promise.resolve(n);f<d;)u=u.then(g[f++],g[f++]);return u}d=a.length;let h=n;for(f=0;f<d;){const g=a[f++],v=a[f++];try{h=g(h)}catch(m){v.call(this,m);break}}try{u=td.call(this,h)}catch(g){return Promise.reject(g)}for(f=0,d=c.length;f<d;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=cr(this.defaults,e);const n=rm(e.baseURL,e.url,e.allowAbsoluteUrls);return Qp(n,e.params,e.paramsSerializer)}};Z.forEach(["delete","get","head","options"],function(e){ar.prototype[e]=function(n,i){return this.request(cr(i||{},{method:e,url:n,data:(i||{}).data}))}});Z.forEach(["post","put","patch"],function(e){function n(i){return function(s,o,a){return this.request(cr(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}ar.prototype[e]=n(),ar.prototype[e+"Form"]=n(!0)});let wS=class um{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new Kr(s,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new um(function(r){e=r}),cancel:e}}};function RS(t){return function(n){return t.apply(null,n)}}function CS(t){return Z.isObject(t)&&t.isAxiosError===!0}const ec={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ec).forEach(([t,e])=>{ec[e]=t});function fm(t){const e=new ar(t),n=Hp(ar.prototype.request,e);return Z.extend(n,ar.prototype,e,{allOwnKeys:!0}),Z.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return fm(cr(t,r))},n}const Ct=fm(Hs);Ct.Axios=ar;Ct.CanceledError=Kr;Ct.CancelToken=wS;Ct.isCancel=nm;Ct.VERSION=cm;Ct.toFormData=ba;Ct.AxiosError=Ye;Ct.Cancel=Ct.CanceledError;Ct.all=function(e){return Promise.all(e)};Ct.spread=RS;Ct.isAxiosError=CS;Ct.mergeConfig=cr;Ct.AxiosHeaders=nn;Ct.formToJSON=t=>tm(Z.isHTMLForm(t)?new FormData(t):t);Ct.getAdapter=lm.getAdapter;Ct.HttpStatusCode=ec;Ct.default=Ct;const{Axios:AR,AxiosError:wR,CanceledError:RR,isCancel:CR,CancelToken:PR,VERSION:DR,all:LR,Cancel:UR,isAxiosError:IR,spread:NR,toFormData:FR,AxiosHeaders:OR,HttpStatusCode:BR,formToJSON:zR,getAdapter:kR,mergeConfig:HR}=Ct,Ft=Ct.create({baseURL:void 0,headers:{"Content-Type":"application/json"}}),PS=[{id:"first_boss",name:"I shall pass!",description:"Defeat your first boss."},{id:"first_bribe",name:"The Temptation",description:"Bribe your first boss."},{id:"pouch_full",name:"No Room for More",description:"Have your Dice Pouch full."},{id:"roll_100",name:"Roller!",description:"Roll a die 100 times."},{id:"money_500",name:"Kilos on Your Pockets",description:"Have more than $500 in one run."},{id:"clear_run",name:"Area Cleared!",description:"End a run defeating all bosses."},{id:"perfect_run",name:"Glorious Victory!",description:"End a run defeating all bosses perfectly."},{id:"bribe_all",name:"Master of Persuasion",description:"Bribe all bosses in a single run."}],wi=uu("auth",()=>{const t=Le(null),e=Le(localStorage.getItem("token")||null),n=Le([]);e.value&&(Ft.defaults.headers.common.Authorization=`Bearer ${e.value}`);const i=Et(()=>!!e.value),r=Et(()=>t.value);function s(f){var v,m,p;if(!f){t.value=null;return}const d=((v=t.value)==null?void 0:v.achievements)||{},h=f.achievements||{},g=Rp();for(const E in h)if((m=h[E])!=null&&m.unlocked&&!((p=d[E])!=null&&p.unlocked)){const b=PS.find(x=>x.id===E);b&&g.showAchievement(b)}t.value=f}async function o(){try{const f=await Ft.get("/users/profiles");n.value=f.data}catch(f){console.error("Failed to fetch usernames:",f)}}async function a(f,d){var h,g;try{const v=await Ft.post("/users/login",{username:f,password:d}),{token:m,user:p}=v.data;return localStorage.setItem("token",m),e.value=m,Ft.defaults.headers.common.Authorization=`Bearer ${m}`,s(p),{success:!0}}catch(v){return console.error("Login failed:",v),{success:!1,message:((g=(h=v.response)==null?void 0:h.data)==null?void 0:g.message)||"Login failed"}}}async function l(f,d){var h,g;try{return await Ft.post("/users/register",{username:f,password:d}),await o(),{success:!0}}catch(v){return console.error("Registration failed:",v),{success:!1,message:((g=(h=v.response)==null?void 0:h.data)==null?void 0:g.message)||"Registration failed"}}}function c(){localStorage.removeItem("token"),e.value=null,t.value=null,delete Ft.defaults.headers.common.Authorization}async function u(){if(e.value)try{const f=await Ft.get("/users/me");s(f.data)}catch(f){console.error("Failed to fetch current user:",f),f.response&&f.response.status===401&&c()}}return{user:t,token:e,allUsernames:n,isAuthenticated:i,currentUser:r,fetchAllUsernames:o,login:a,register:l,logout:c,fetchCurrentUser:u,_setCurrentUser:s}});function DS(t){return new Promise(e=>setTimeout(e,t))}const dm=uu("game",()=>{const t=Le(null),e=Le(null),n=Le(0),i=Le(0),r=Le(1),s=Le(1),o=Le(null),a=Le([]),l=Le(15),c=Le(0),u=Le(0),f=Le([]),d=Le(!1),h=Le("rolling"),g=Le(null),v=Le(1),m=Le(!1),p=Le(1e3),E=Le(300),b=Le(0),x=Le(!1),P=Le(null),R=Le(null),D=Le(!1),L=Le(!1),y=Le(""),M=Le("knight"),I=Le("blue"),F=Le(null),H=Le([]),J=Le(null),ae=Le(null),X=Le(null),ie=Le(!1),G=Le(!1),ve=Le(0),ye=Le(0),Ce=Le(0),Be=Le(0),Qe=Le(0),se=Le(0),_e=Le(!1),Te=Le({isActive:!1,isUsedInEncounter:!1}),O=Et(()=>`${a.value.length}/${l.value}`),re=Et(()=>{switch(v.value){case 0:return"Instant";case 1:return"Normal";case 2:return"Faster";default:return"Unknown"}});async function ue(){var _;try{L.value=!1,console.log("Pinia: Requesting new game from server…");const U=wi(),k={playerCharacter:M.value,playerSkin:I.value,animationSpeedMultiplier:v.value,userId:(_=U.currentUser)==null?void 0:_._id},$=await Ft.post("/api/game/start",k);return this.$patch($.data),L.value=!0,console.log("Pinia: New game created, board is ready!"),$.data}catch(U){console.error("Pinia: Failed to create game",U)}}async function ce(_){try{L.value=!1,console.log(`Pinia: Loading game state for session: ${_}`);const U=await Ft.get(`/api/game/${_}`);this.$patch(U.data),L.value=!0,console.log("Pinia: Game state loaded, board is ready!")}catch(U){console.error("Pinia: Failed to load game state",U)}}async function ze(){if(e.value)try{const _={playerPosition:n.value,playerMoney:i.value,playerLap:r.value,playerStage:s.value,lastDiceRoll:o.value,reservedDice:a.value,maxDiceInBag:l.value,boardRows:c.value,boardCols:u.value,boardSquares:f.value,isGameOver:d.value,gamePhase:h.value,choiceDetails:g.value,animationSpeedMultiplier:v.value,isAnimating:m.value,diceRollAnimationBaseDuration:p.value,playerStepBaseDuration:E.value,lastPlayerPositionBeforeThisMove:b.value,totalRolls:ye.value,bossesDefeated:Be.value,diceObtained:Ce.value,perfectBossDefeats:Qe.value,bribesBosses:se.value,inMinionFight:G.value,lastDamageTaken:ve.value};await Ft.put(`/api/game/${e.value}`,_)}catch(_){console.error("Pinia: Failed to save game",_)}}async function w(_){if(t.value)try{const U=await Ft.post(`/api/game/${t.value}/speed`,{multiplier:_});v.value=U.data.animationSpeedMultiplier,y.value=v.value===0?"Speed: instant":v.value===2?"Speed: fast":"Speed: normal"}catch(U){console.error("Pinia: no se pudo cambiar la velocidad",U)}}function C(_){return v.value===0?0:_/v.value}function S(_){J.value=_,ie.value=!0,setTimeout(()=>ie.value=!1,1e3)}async function ne(_=-1){var U,k,$;if(!(!t.value||m.value)){m.value=!0;try{const V=await Ft.post(`/api/game/${t.value}/roll`,{reservedDieIndex:_,skillState:Te.value}),{updatedState:xe,updatedUser:he}=V.data;if(he&&wi()._setCurrentUser(he),R.value=(U=xe.lastDiceRoll)==null?void 0:U.value,D.value=!0,setTimeout(()=>{D.value=!1},1e3),xe.gamePhase==="boss_encounter"&&S((k=xe.lastDiceRoll)==null?void 0:k.value),($=V.data.movementPath)!=null&&$.length)for(const Ee of V.data.movementPath)n.value=Ee,await DS(C(E.value));this.$patch(xe),G.value=xe.gamePhase==="minion_encounter",G.value||(ve.value=0)}catch(V){console.error("Pinia: Failed to roll dice",V)}finally{m.value=!1}}}async function K(_){if(t.value)try{const U=await Ft.post(`/api/game/${t.value}/skill/toggle`,{isActive:_});this.$patch(U.data)}catch(U){console.error("Pinia: Failed to toggle skill",U)}}async function j(_={}){var U,k;if(!(!t.value||Te.value.isUsedInEncounter))try{const $=await Ft.post(`/api/game/${t.value}/skill/use`,{..._,skillState:Te.value}),{updatedState:V,updatedUser:xe}=$.data;xe&&wi()._setCurrentUser(xe),this.$patch(V)}catch($){console.error("Pinia: Failed to use skill.",$),(k=(U=$.response)==null?void 0:U.data)!=null&&k.message&&alert($.response.data.message)}}async function te(_){if(!t.value)return console.error("No active game session!");try{const U=await Ft.post(`/api/game/${t.value}/choice`,{chosenOption:_});this.$patch(U.data)}catch(U){console.error("Pinia: Failed to make choice",U)}}async function oe(){if(!(!t.value||h.value!=="boss_encounter"))try{const _=await Ft.post(`/api/game/${t.value}/bribe`),{updatedState:U,updatedUser:k}=_.data;k&&wi()._setCurrentUser(k),U&&this.$patch(U)}catch(_){_.response&&_.response.data.message?alert(_.response.data.message):console.error("Pinia: Failed to pay bribe",_)}}function ee(_){var he,Ee;if(!_||!f.value.length){P.value=null;return}const U=["normal","d20","reverse_random"],k=(Ee=(he=_.type)==null?void 0:he.toLowerCase)==null?void 0:Ee.call(he);if(!_.value||U.includes(k)){P.value=null;return}const $=k.includes("reverse")?-_.value:_.value,V=f.value.length,xe=(n.value+$+V)%V;P.value=xe}function Q(){P.value=null}async function Me(){var _,U;if(!(!t.value||h.value!=="minion_encounter"))try{const k=await Ft.post(`/api/game/${t.value}/flee`);this.$patch(k.data)}catch(k){console.error("Pinia: Failed to flee minion",k),(U=(_=k.response)==null?void 0:_.data)!=null&&U.message&&alert(k.response.data.message)}}async function T(_){if(t.value)try{I.value=_,await Ft.post(`/api/game/${t.value}/skin`,{playerSkin:_}),y.value="Player skin updated!"}catch(U){console.error("Pinia: Failed to update player skin",U)}}return{_id:t,sessionId:e,playerPosition:n,playerMoney:i,playerLap:r,playerStage:s,lastDiceRoll:o,reservedDice:a,maxDiceInBag:l,boardRows:c,boardCols:u,boardSquares:f,isGameOver:d,gamePhase:h,choiceDetails:g,animationSpeedMultiplier:v,isAnimating:m,diceRollAnimationBaseDuration:p,playerStepBaseDuration:E,lastPlayerPositionBeforeThisMove:b,assetsLoaded:x,highlightedTargetSquare:P,lastGeneralRoll:R,boardIsReady:L,gameMessage:y,currentBoss:F,currentDiceThrows:H,showBossRollAnimation:ie,showGeneralRollAnimation:D,bossLastRoll:J,currentBossHP:ae,currentBossMaxHP:X,totalRolls:ye,diceObtained:Ce,bossesDefeated:Be,perfectBossDefeats:Qe,bribesBosses:se,showSummaryModal:_e,playerCharacter:M,playerSkin:I,skillState:Te,inMinionFight:G,lastDamageTaken:ve,diceBagCapacityDisplay:O,currentSpeedText:re,createGame:ue,loadGame:ce,saveGame:ze,rollDice:ne,playerMakesChoice:te,payBossBribe:oe,setAnimationSpeed:w,toggleSkill:K,useSkill:j,getAnimationDelay:C,highlightSquareForDie:ee,clearHighlightedSquare:Q,fleeMinion:Me,updatePlayerSkin:T}});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gu="178",LS=0,id=1,US=2,hm=1,IS=2,Qn=3,Ni=0,rn=1,ii=2,Pi=0,Or=1,rd=2,sd=3,od=4,NS=5,Qi=100,FS=101,OS=102,BS=103,zS=104,kS=200,HS=201,VS=202,GS=203,tc=204,nc=205,WS=206,XS=207,$S=208,qS=209,jS=210,YS=211,KS=212,ZS=213,JS=214,ic=0,rc=1,sc=2,Wr=3,oc=4,ac=5,lc=6,cc=7,pm=0,QS=1,ey=2,Di=0,ty=1,ny=2,iy=3,ry=4,sy=5,oy=6,ay=7,mm=300,Xr=301,$r=302,uc=303,fc=304,wa=306,dc=1e3,nr=1001,hc=1002,Cn=1003,ly=1004,eo=1005,zn=1006,Qa=1007,ir=1008,Gn=1009,gm=1010,_m=1011,Ds=1012,_u=1013,ur=1014,ri=1015,Vs=1016,vu=1017,xu=1018,Ls=1020,vm=35902,xm=1021,Sm=1022,wn=1023,Us=1026,Is=1027,ym=1028,Su=1029,Mm=1030,yu=1031,Mu=1033,No=33776,Fo=33777,Oo=33778,Bo=33779,pc=35840,mc=35841,gc=35842,_c=35843,vc=36196,xc=37492,Sc=37496,yc=37808,Mc=37809,Ec=37810,bc=37811,Tc=37812,Ac=37813,wc=37814,Rc=37815,Cc=37816,Pc=37817,Dc=37818,Lc=37819,Uc=37820,Ic=37821,zo=36492,Nc=36494,Fc=36495,Em=36283,Oc=36284,Bc=36285,zc=36286,cy=3200,uy=3201,fy=0,dy=1,Ti="",_n="srgb",qr="srgb-linear",Qo="linear",ft="srgb",gr=7680,ad=519,hy=512,py=513,my=514,bm=515,gy=516,_y=517,vy=518,xy=519,ld=35044,cd="300 es",si=2e3,ea=2001;class Zr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ko=Math.PI/180,kc=180/Math.PI;function Gs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function tt(t,e,n){return Math.max(e,Math.min(n,t))}function Sy(t,e){return(t%e+e)%e}function el(t,e,n){return(1-n)*t+n*e}function rs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function en(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class it{constructor(e=0,n=0){it.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ws{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],h=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=h,e[n+2]=g,e[n+3]=v;return}if(f!==v||l!==d||c!==h||u!==g){let m=1-a;const p=l*d+c*h+u*g+f*v,E=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const P=Math.sqrt(b),R=Math.atan2(P,p*E);m=Math.sin(m*R)/P,a=Math.sin(a*R)/P}const x=a*E;if(l=l*m+d*x,c=c*m+h*x,u=u*m+g*x,f=f*m+v*x,m===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],h=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*h-c*d,e[n+1]=l*g+u*d+c*f-a*h,e[n+2]=c*g+u*h+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),h=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-n;return this._w=h*o+n*this._w,this._x=h*i+n*this._x,this._y=h*r+n*this._y,this._z=h*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,n=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ud.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ud.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this.z=tt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this.z=tt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return tl.copy(this).projectOnVector(e),this.sub(tl)}reflect(e){return this.sub(tl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tl=new W,ud=new Ws;class Ke{constructor(e,n,i,r,s,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],v=r[0],m=r[3],p=r[6],E=r[1],b=r[4],x=r[7],P=r[2],R=r[5],D=r[8];return s[0]=o*v+a*E+l*P,s[3]=o*m+a*b+l*R,s[6]=o*p+a*x+l*D,s[1]=c*v+u*E+f*P,s[4]=c*m+u*b+f*R,s[7]=c*p+u*x+f*D,s[2]=d*v+h*E+g*P,s[5]=d*m+h*b+g*R,s[8]=d*p+h*x+g*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,g=n*f+i*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=h*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(nl.makeScale(e,n)),this}rotate(e){return this.premultiply(nl.makeRotation(-e)),this}translate(e,n){return this.premultiply(nl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nl=new Ke;function Tm(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ta(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function yy(){const t=ta("canvas");return t.style.display="block",t}const fd={};function Br(t){t in fd||(fd[t]=!0,console.warn(t))}function My(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function Ey(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function by(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const dd=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hd=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ty(){const t={enabled:!0,workingColorSpace:qr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ft&&(r.r=oi(r.r),r.g=oi(r.g),r.b=oi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ft&&(r.r=zr(r.r),r.g=zr(r.g),r.b=zr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ti?Qo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Br("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Br("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[qr]:{primaries:e,whitePoint:i,transfer:Qo,toXYZ:dd,fromXYZ:hd,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:dd,fromXYZ:hd,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),t}const st=Ty();function oi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function zr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let _r;class Ay{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{_r===void 0&&(_r=ta("canvas")),_r.width=e.width,_r.height=e.height;const r=_r.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=_r}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ta("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=oi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(oi(n[i]/255)*255):n[i]=oi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wy=0;class Eu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=Gs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(il(r[o].image)):s.push(il(r[o]))}else s=il(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function il(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Ay.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ry=0;const rl=new W;class Jt extends Zr{constructor(e=Jt.DEFAULT_IMAGE,n=Jt.DEFAULT_MAPPING,i=nr,r=nr,s=zn,o=ir,a=wn,l=Gn,c=Jt.DEFAULT_ANISOTROPY,u=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=Gs(),this.name="",this.source=new Eu(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rl).x}get height(){return this.source.getSize(rl).y}get depth(){return this.source.getSize(rl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dc:e.x=e.x-Math.floor(e.x);break;case nr:e.x=e.x<0?0:1;break;case hc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dc:e.y=e.y-Math.floor(e.y);break;case nr:e.y=e.y<0?0:1;break;case hc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=mm;Jt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,n=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const b=(c+1)/2,x=(h+1)/2,P=(p+1)/2,R=(u+d)/4,D=(f+v)/4,L=(g+m)/4;return b>x&&b>P?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=R/i,s=D/i):x>P?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=R/r,s=L/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=D/s,r=L/s),this.set(i,r,s,n),this}let E=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(f-v)/E,this.z=(d-u)/E,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this.z=tt(this.z,e.z,n.z),this.w=tt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this.z=tt(this.z,e,n),this.w=tt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cy extends Zr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new Jt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Eu(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fr extends Cy{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Am extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Py extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xs{constructor(e=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bn):bn.fromBufferAttribute(s,o),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),to.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),to.copy(i.boundingBox)),to.applyMatrix4(e.matrixWorld),this.union(to)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ss),no.subVectors(this.max,ss),vr.subVectors(e.a,ss),xr.subVectors(e.b,ss),Sr.subVectors(e.c,ss),hi.subVectors(xr,vr),pi.subVectors(Sr,xr),Gi.subVectors(vr,Sr);let n=[0,-hi.z,hi.y,0,-pi.z,pi.y,0,-Gi.z,Gi.y,hi.z,0,-hi.x,pi.z,0,-pi.x,Gi.z,0,-Gi.x,-hi.y,hi.x,0,-pi.y,pi.x,0,-Gi.y,Gi.x,0];return!sl(n,vr,xr,Sr,no)||(n=[1,0,0,0,1,0,0,0,1],!sl(n,vr,xr,Sr,no))?!1:(io.crossVectors(hi,pi),n=[io.x,io.y,io.z],sl(n,vr,xr,Sr,no))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const jn=[new W,new W,new W,new W,new W,new W,new W,new W],bn=new W,to=new Xs,vr=new W,xr=new W,Sr=new W,hi=new W,pi=new W,Gi=new W,ss=new W,no=new W,io=new W,Wi=new W;function sl(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Wi.fromArray(t,s);const a=r.x*Math.abs(Wi.x)+r.y*Math.abs(Wi.y)+r.z*Math.abs(Wi.z),l=e.dot(Wi),c=n.dot(Wi),u=i.dot(Wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Dy=new Xs,os=new W,ol=new W;class Ra{constructor(e=new W,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Dy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;os.subVectors(e,this.center);const n=os.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(os,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ol.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(os.copy(e.center).add(ol)),this.expandByPoint(os.copy(e.center).sub(ol))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Yn=new W,al=new W,ro=new W,mi=new W,ll=new W,so=new W,cl=new W;class wm{constructor(e=new W,n=new W(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Yn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,n),Yn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){al.copy(e).add(n).multiplyScalar(.5),ro.copy(n).sub(e).normalize(),mi.copy(this.origin).sub(al);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ro),a=mi.dot(this.direction),l=-mi.dot(ro),c=mi.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const v=1/u;f*=v,d*=v,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(al).addScaledVector(ro,d),h}intersectSphere(e,n){Yn.subVectors(e.center,this.origin);const i=Yn.dot(this.direction),r=Yn.dot(Yn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,n,i,r,s){ll.subVectors(n,e),so.subVectors(i,e),cl.crossVectors(ll,so);let o=this.direction.dot(cl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,e);const l=a*this.direction.dot(so.crossVectors(mi,so));if(l<0)return null;const c=a*this.direction.dot(ll.cross(mi));if(c<0||l+c>o)return null;const u=-a*mi.dot(cl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,n,i,r,s,o,a,l,c,u,f,d,h,g,v,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,h,g,v,m)}set(e,n,i,r,s,o,a,l,c,u,f,d,h,g,v,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/yr.setFromMatrixColumn(e,0).length(),s=1/yr.setFromMatrixColumn(e,1).length(),o=1/yr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,h=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=h+g*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=g+h*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,v=c*f;n[0]=d+v*a,n[4]=g*a-h,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=h*a-g,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,v=c*f;n[0]=d-v*a,n[4]=-o*f,n[8]=g+h*a,n[1]=h+g*a,n[5]=o*u,n[9]=v-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=g*c-h,n[8]=d*c+v,n[1]=l*f,n[5]=v*c+d,n[9]=h*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=v-d*f,n[8]=g*f+h,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*f+g,n[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,h=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+v,n[5]=o*u,n[9]=h*f-g,n[2]=g*f-h,n[6]=a*u,n[10]=v*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ly,e,Uy)}lookAt(e,n,i){const r=this.elements;return ln.subVectors(e,n),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),gi.crossVectors(i,ln),gi.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),gi.crossVectors(i,ln)),gi.normalize(),oo.crossVectors(ln,gi),r[0]=gi.x,r[4]=oo.x,r[8]=ln.x,r[1]=gi.y,r[5]=oo.y,r[9]=ln.y,r[2]=gi.z,r[6]=oo.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],v=i[6],m=i[10],p=i[14],E=i[3],b=i[7],x=i[11],P=i[15],R=r[0],D=r[4],L=r[8],y=r[12],M=r[1],I=r[5],F=r[9],H=r[13],J=r[2],ae=r[6],X=r[10],ie=r[14],G=r[3],ve=r[7],ye=r[11],Ce=r[15];return s[0]=o*R+a*M+l*J+c*G,s[4]=o*D+a*I+l*ae+c*ve,s[8]=o*L+a*F+l*X+c*ye,s[12]=o*y+a*H+l*ie+c*Ce,s[1]=u*R+f*M+d*J+h*G,s[5]=u*D+f*I+d*ae+h*ve,s[9]=u*L+f*F+d*X+h*ye,s[13]=u*y+f*H+d*ie+h*Ce,s[2]=g*R+v*M+m*J+p*G,s[6]=g*D+v*I+m*ae+p*ve,s[10]=g*L+v*F+m*X+p*ye,s[14]=g*y+v*H+m*ie+p*Ce,s[3]=E*R+b*M+x*J+P*G,s[7]=E*D+b*I+x*ae+P*ve,s[11]=E*L+b*F+x*X+P*ye,s[15]=E*y+b*H+x*ie+P*Ce,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*h-i*l*h)+v*(+n*l*h-n*c*d+s*o*d-r*o*h+r*c*u-s*l*u)+m*(+n*c*f-n*a*h-s*o*f+i*o*h+s*a*u-i*c*u)+p*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],v=e[13],m=e[14],p=e[15],E=f*m*c-v*d*c+v*l*h-a*m*h-f*l*p+a*d*p,b=g*d*c-u*m*c-g*l*h+o*m*h+u*l*p-o*d*p,x=u*v*c-g*f*c+g*a*h-o*v*h-u*a*p+o*f*p,P=g*f*l-u*v*l-g*a*d+o*v*d+u*a*m-o*f*m,R=n*E+i*b+r*x+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/R;return e[0]=E*D,e[1]=(v*d*s-f*m*s-v*r*h+i*m*h+f*r*p-i*d*p)*D,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*p+i*l*p)*D,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*h-i*l*h)*D,e[4]=b*D,e[5]=(u*m*s-g*d*s+g*r*h-n*m*h-u*r*p+n*d*p)*D,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*p-n*l*p)*D,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*h+n*l*h)*D,e[8]=x*D,e[9]=(g*f*s-u*v*s-g*i*h+n*v*h+u*i*p-n*f*p)*D,e[10]=(o*v*s-g*a*s+g*i*c-n*v*c-o*i*p+n*a*p)*D,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*h-n*a*h)*D,e[12]=P*D,e[13]=(u*v*r-g*f*r+g*i*d-n*v*d-u*i*m+n*f*m)*D,e[14]=(g*a*r-o*v*r-g*i*l+n*v*l+o*i*m-n*a*m)*D,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*D,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,g=s*f,v=o*u,m=o*f,p=a*f,E=l*c,b=l*u,x=l*f,P=i.x,R=i.y,D=i.z;return r[0]=(1-(v+p))*P,r[1]=(h+x)*P,r[2]=(g-b)*P,r[3]=0,r[4]=(h-x)*R,r[5]=(1-(d+p))*R,r[6]=(m+E)*R,r[7]=0,r[8]=(g+b)*D,r[9]=(m-E)*D,r[10]=(1-(d+v))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=yr.set(r[0],r[1],r[2]).length();const o=yr.set(r[4],r[5],r[6]).length(),a=yr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Tn.copy(this);const c=1/s,u=1/o,f=1/a;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=u,Tn.elements[5]*=u,Tn.elements[6]*=u,Tn.elements[8]*=f,Tn.elements[9]*=f,Tn.elements[10]*=f,n.setFromRotationMatrix(Tn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=si){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let h,g;if(a===si)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ea)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=si){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),d=(n+e)*c,h=(i+r)*u;let g,v;if(a===si)g=(o+s)*f,v=-2*f;else if(a===ea)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const yr=new W,Tn=new yt,Ly=new W(0,0,0),Uy=new W(1,1,1),gi=new W,oo=new W,ln=new W,pd=new yt,md=new Ws;class ci{constructor(e=0,n=0,i=0,r=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return pd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pd,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return md.setFromEuler(this),this.setFromQuaternion(md,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class Rm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Iy=0;const gd=new W,Mr=new Ws,Kn=new yt,ao=new W,as=new W,Ny=new W,Fy=new Ws,_d=new W(1,0,0),vd=new W(0,1,0),xd=new W(0,0,1),Sd={type:"added"},Oy={type:"removed"},Er={type:"childadded",child:null},ul={type:"childremoved",child:null};class kt extends Zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=Gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new W,n=new ci,i=new Ws,r=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Ke}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Mr.setFromAxisAngle(e,n),this.quaternion.multiply(Mr),this}rotateOnWorldAxis(e,n){return Mr.setFromAxisAngle(e,n),this.quaternion.premultiply(Mr),this}rotateX(e){return this.rotateOnAxis(_d,e)}rotateY(e){return this.rotateOnAxis(vd,e)}rotateZ(e){return this.rotateOnAxis(xd,e)}translateOnAxis(e,n){return gd.copy(e).applyQuaternion(this.quaternion),this.position.add(gd.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(_d,e)}translateY(e){return this.translateOnAxis(vd,e)}translateZ(e){return this.translateOnAxis(xd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ao.copy(e):ao.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(as,ao,this.up):Kn.lookAt(ao,as,this.up),this.quaternion.setFromRotationMatrix(Kn),r&&(Kn.extractRotation(r.matrixWorld),Mr.setFromRotationMatrix(Kn),this.quaternion.premultiply(Mr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sd),Er.child=e,this.dispatchEvent(Er),Er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Oy),ul.child=e,this.dispatchEvent(ul),ul.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sd),Er.child=e,this.dispatchEvent(Er),Er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,e,Ny),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,Fy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}kt.DEFAULT_UP=new W(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new W,Zn=new W,fl=new W,Jn=new W,br=new W,Tr=new W,yd=new W,dl=new W,hl=new W,pl=new W,ml=new bt,gl=new bt,_l=new bt;class xn{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),An.subVectors(e,n),r.cross(An);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){An.subVectors(r,n),Zn.subVectors(i,n),fl.subVectors(e,n);const o=An.dot(An),a=An.dot(Zn),l=An.dot(fl),c=Zn.dot(Zn),u=Zn.dot(fl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return ml.setScalar(0),gl.setScalar(0),_l.setScalar(0),ml.fromBufferAttribute(e,n),gl.fromBufferAttribute(e,i),_l.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ml,s.x),o.addScaledVector(gl,s.y),o.addScaledVector(_l,s.z),o}static isFrontFacing(e,n,i,r){return An.subVectors(i,n),Zn.subVectors(e,n),An.cross(Zn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),An.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return xn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return xn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;br.subVectors(r,i),Tr.subVectors(s,i),dl.subVectors(e,i);const l=br.dot(dl),c=Tr.dot(dl);if(l<=0&&c<=0)return n.copy(i);hl.subVectors(e,r);const u=br.dot(hl),f=Tr.dot(hl);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(br,o);pl.subVectors(e,s);const h=br.dot(pl),g=Tr.dot(pl);if(g>=0&&h<=g)return n.copy(s);const v=h*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Tr,a);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return yd.subVectors(s,r),a=(f-u)/(f-u+(h-g)),n.copy(r).addScaledVector(yd,a);const p=1/(m+v+d);return o=v*p,a=d*p,n.copy(i).addScaledVector(br,o).addScaledVector(Tr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},lo={h:0,s:0,l:0};function vl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class lt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=Sy(e,1),n=tt(n,0,1),i=tt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=vl(o,s,e+1/3),this.g=vl(o,s,e),this.b=vl(o,s,e-1/3)}return st.colorSpaceToWorking(this,r),this}setStyle(e,n=_n){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=_n){const i=Cm[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return st.workingToColorSpace(Vt.copy(this),e),Math.round(tt(Vt.r*255,0,255))*65536+Math.round(tt(Vt.g*255,0,255))*256+Math.round(tt(Vt.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.workingToColorSpace(Vt.copy(this),n);const i=Vt.r,r=Vt.g,s=Vt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=st.workingColorSpace){return st.workingToColorSpace(Vt.copy(this),n),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=_n){st.workingToColorSpace(Vt.copy(this),e);const n=Vt.r,i=Vt.g,r=Vt.b;return e!==_n?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+n,_i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(_i),e.getHSL(lo);const i=el(_i.h,lo.h,n),r=el(_i.s,lo.s,n),s=el(_i.l,lo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new lt;lt.NAMES=Cm;let By=0;class $s extends Zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=Gs(),this.name="",this.type="Material",this.blending=Or,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tc,this.blendDst=nc,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ad,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gr,this.stencilZFail=gr,this.stencilZPass=gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Or&&(i.blending=this.blending),this.side!==Ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==tc&&(i.blendSrc=this.blendSrc),this.blendDst!==nc&&(i.blendDst=this.blendDst),this.blendEquation!==Qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ad&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bu extends $s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=pm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new W,co=new it;let zy=0;class Vn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zy++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ld,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)co.fromBufferAttribute(this,n),co.applyMatrix3(e),this.setXY(n,co.x,co.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=rs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=rs(n,this.array)),n}setX(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=rs(n,this.array)),n}setY(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=rs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=rs(n,this.array)),n}setW(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ld&&(e.usage=this.usage),e}}class Pm extends Vn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Dm extends Vn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class sn extends Vn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let ky=0;const gn=new yt,xl=new kt,Ar=new W,cn=new Xs,ls=new Xs,Nt=new W;class Wn extends Zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=Gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tm(e)?Dm:Pm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,n,i){return gn.makeTranslation(e,n,i),this.applyMatrix4(gn),this}scale(e,n,i){return gn.makeScale(e,n,i),this.applyMatrix4(gn),this}lookAt(e){return xl.lookAt(e),xl.updateMatrix(),this.applyMatrix4(xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new sn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ra);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ls.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(cn.min,ls.min),cn.expandByPoint(Nt),Nt.addVectors(cn.max,ls.max),cn.expandByPoint(Nt)):(cn.expandByPoint(ls.min),cn.expandByPoint(ls.max))}cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Nt.fromBufferAttribute(a,c),l&&(Ar.fromBufferAttribute(e,c),Nt.add(Ar)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new W,l[L]=new W;const c=new W,u=new W,f=new W,d=new it,h=new it,g=new it,v=new W,m=new W;function p(L,y,M){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,y),f.fromBufferAttribute(i,M),d.fromBufferAttribute(s,L),h.fromBufferAttribute(s,y),g.fromBufferAttribute(s,M),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const I=1/(h.x*g.y-g.x*h.y);isFinite(I)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(I),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(I),a[L].add(v),a[y].add(v),a[M].add(v),l[L].add(m),l[y].add(m),l[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let L=0,y=E.length;L<y;++L){const M=E[L],I=M.start,F=M.count;for(let H=I,J=I+F;H<J;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const b=new W,x=new W,P=new W,R=new W;function D(L){P.fromBufferAttribute(r,L),R.copy(P);const y=a[L];b.copy(y),b.sub(P.multiplyScalar(P.dot(y))).normalize(),x.crossVectors(R,y);const I=x.dot(l[L])<0?-1:1;o.setXYZW(L,b.x,b.y,b.z,I)}for(let L=0,y=E.length;L<y;++L){const M=E[L],I=M.start,F=M.count;for(let H=I,J=I+F;H<J;H+=3)D(e.getX(H+0)),D(e.getX(H+1)),D(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,c=new W,u=new W,f=new W;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=n.count;d<h;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?h=l[v]*a.data.stride+a.offset:h=l[v]*u;for(let p=0;p<u;p++)d[g++]=c[h++]}return new Vn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Wn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Md=new yt,Xi=new wm,uo=new Ra,Ed=new W,fo=new W,ho=new W,po=new W,Sl=new W,mo=new W,bd=new W,go=new W;class kn extends kt{constructor(e=new Wn,n=new bu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){mo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Sl.fromBufferAttribute(f,e),o?mo.addScaledVector(Sl,u):mo.addScaledVector(Sl.sub(n),u))}n.add(mo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),uo.copy(i.boundingSphere),uo.applyMatrix4(s),Xi.copy(e.ray).recast(e.near),!(uo.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(uo,Ed)===null||Xi.origin.distanceToSquared(Ed)>(e.far-e.near)**2))&&(Md.copy(s).invert(),Xi.copy(e.ray).applyMatrix4(Md),!(i.boundingBox!==null&&Xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Xi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],E=Math.max(m.start,h.start),b=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let x=E,P=b;x<P;x+=3){const R=a.getX(x),D=a.getX(x+1),L=a.getX(x+2);r=_o(this,p,e,i,c,u,f,R,D,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const E=a.getX(m),b=a.getX(m+1),x=a.getX(m+2);r=_o(this,o,e,i,c,u,f,E,b,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],E=Math.max(m.start,h.start),b=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let x=E,P=b;x<P;x+=3){const R=x,D=x+1,L=x+2;r=_o(this,p,e,i,c,u,f,R,D,L),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const E=m,b=m+1,x=m+2;r=_o(this,o,e,i,c,u,f,E,b,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Hy(t,e,n,i,r,s,o,a){let l;if(e.side===rn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ni,a),l===null)return null;go.copy(a),go.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(go);return c<n.near||c>n.far?null:{distance:c,point:go.clone(),object:t}}function _o(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,fo),t.getVertexPosition(l,ho),t.getVertexPosition(c,po);const u=Hy(t,e,n,i,fo,ho,po,bd);if(u){const f=new W;xn.getBarycoord(bd,fo,ho,po,f),r&&(u.uv=xn.getInterpolatedAttribute(r,a,l,c,f,new it)),s&&(u.uv1=xn.getInterpolatedAttribute(s,a,l,c,f,new it)),o&&(u.normal=xn.getInterpolatedAttribute(o,a,l,c,f,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new W,materialIndex:0};xn.getNormal(fo,ho,po,d.normal),u.face=d,u.barycoord=f}return u}class qs extends Wn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(u,3)),this.setAttribute("uv",new sn(f,2));function g(v,m,p,E,b,x,P,R,D,L,y){const M=x/D,I=P/L,F=x/2,H=P/2,J=R/2,ae=D+1,X=L+1;let ie=0,G=0;const ve=new W;for(let ye=0;ye<X;ye++){const Ce=ye*I-H;for(let Be=0;Be<ae;Be++){const Qe=Be*M-F;ve[v]=Qe*E,ve[m]=Ce*b,ve[p]=J,c.push(ve.x,ve.y,ve.z),ve[v]=0,ve[m]=0,ve[p]=R>0?1:-1,u.push(ve.x,ve.y,ve.z),f.push(Be/D),f.push(1-ye/L),ie+=1}}for(let ye=0;ye<L;ye++)for(let Ce=0;Ce<D;Ce++){const Be=d+Ce+ae*ye,Qe=d+Ce+ae*(ye+1),se=d+(Ce+1)+ae*(ye+1),_e=d+(Ce+1)+ae*ye;l.push(Be,Qe,_e),l.push(Qe,se,_e),G+=6}a.addGroup(h,G,y),h+=G,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function jr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function jt(t){const e={};for(let n=0;n<t.length;n++){const i=jr(t[n]);for(const r in i)e[r]=i[r]}return e}function Vy(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Lm(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const Gy={clone:jr,merge:jt};var Wy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends $s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wy,this.fragmentShader=Xy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jr(e.uniforms),this.uniformsGroups=Vy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Um extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=si}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new W,Td=new it,Ad=new it;class vn extends Um{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=kc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kc*2*Math.atan(Math.tan(ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,n){return this.getViewBounds(e,Td,Ad),n.subVectors(Ad,Td)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ko*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const wr=-90,Rr=1;class $y extends kt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vn(wr,Rr,e,n);r.layers=this.layers,this.add(r);const s=new vn(wr,Rr,e,n);s.layers=this.layers,this.add(s);const o=new vn(wr,Rr,e,n);o.layers=this.layers,this.add(o);const a=new vn(wr,Rr,e,n);a.layers=this.layers,this.add(a);const l=new vn(wr,Rr,e,n);l.layers=this.layers,this.add(l);const c=new vn(wr,Rr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ea)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Im extends Jt{constructor(e=[],n=Xr,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qy extends fr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Im(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new qs(5,5,5),s=new Fi({name:"CubemapFromEquirect",uniforms:jr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Pi});s.uniforms.tEquirect.value=n;const o=new kn(r,s),a=n.minFilter;return n.minFilter===ir&&(n.minFilter=zn),new $y(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class vo extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jy={type:"move"};class yl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jy)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new vo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Yy extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ml=new W,Ky=new W,Zy=new Ke;class Ki{constructor(e=new W(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ml.subVectors(i,n).cross(Ky.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ml),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Zy.getNormalMatrix(e),r=this.coplanarPoint(Ml).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $i=new Ra,Jy=new it(.5,.5),xo=new W;class Tu{constructor(e=new Ki,n=new Ki,i=new Ki,r=new Ki,s=new Ki,o=new Ki){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=si){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],h=r[8],g=r[9],v=r[10],m=r[11],p=r[12],E=r[13],b=r[14],x=r[15];if(i[0].setComponents(l-s,d-c,m-h,x-p).normalize(),i[1].setComponents(l+s,d+c,m+h,x+p).normalize(),i[2].setComponents(l+o,d+u,m+g,x+E).normalize(),i[3].setComponents(l-o,d-u,m-g,x-E).normalize(),i[4].setComponents(l-a,d-f,m-v,x-b).normalize(),n===si)i[5].setComponents(l+a,d+f,m+v,x+b).normalize();else if(n===ea)i[5].setComponents(a,f,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),$i.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(e){$i.center.set(0,0,0);const n=Jy.distanceTo(e.center);return $i.radius=.7071067811865476+n,$i.applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(xo.x=r.normal.x>0?e.max.x:e.min.x,xo.y=r.normal.y>0?e.max.y:e.min.y,xo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nm extends $s{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const na=new W,ia=new W,wd=new yt,cs=new wm,So=new Ra,El=new W,Rd=new W;class Qy extends kt{constructor(e=new Wn,n=new Nm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)na.fromBufferAttribute(n,r-1),ia.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=na.distanceTo(ia);e.setAttribute("lineDistance",new sn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),So.copy(i.boundingSphere),So.applyMatrix4(r),So.radius+=s,e.ray.intersectsSphere(So)===!1)return;wd.copy(r).invert(),cs.copy(e.ray).applyMatrix4(wd);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=h,m=g-1;v<m;v+=c){const p=u.getX(v),E=u.getX(v+1),b=yo(this,e,cs,l,p,E,v);b&&n.push(b)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(h),p=yo(this,e,cs,l,v,m,g-1);p&&n.push(p)}}else{const h=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=h,m=g-1;v<m;v+=c){const p=yo(this,e,cs,l,v,v+1,v);p&&n.push(p)}if(this.isLineLoop){const v=yo(this,e,cs,l,g-1,h,g-1);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function yo(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(na.fromBufferAttribute(a,r),ia.fromBufferAttribute(a,s),n.distanceSqToSegment(na,ia,El,Rd)>i)return;El.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(El);if(!(c<e.near||c>e.far))return{distance:c,point:Rd.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const Cd=new W,Pd=new W;class eM extends Qy{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Cd.fromBufferAttribute(n,r),Pd.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Cd.distanceTo(Pd);e.setAttribute("lineDistance",new sn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tM extends Jt{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fm extends Jt{constructor(e,n,i=ur,r,s,o,a=Cn,l=Cn,c,u=Us,f=1){if(u!==Us&&u!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Eu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Au extends Wn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new sn(s,3)),this.setAttribute("normal",new sn(s.slice(),3)),this.setAttribute("uv",new sn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const b=new W,x=new W,P=new W;for(let R=0;R<n.length;R+=3)h(n[R+0],b),h(n[R+1],x),h(n[R+2],P),l(b,x,P,E)}function l(E,b,x,P){const R=P+1,D=[];for(let L=0;L<=R;L++){D[L]=[];const y=E.clone().lerp(x,L/R),M=b.clone().lerp(x,L/R),I=R-L;for(let F=0;F<=I;F++)F===0&&L===R?D[L][F]=y:D[L][F]=y.clone().lerp(M,F/I)}for(let L=0;L<R;L++)for(let y=0;y<2*(R-L)-1;y++){const M=Math.floor(y/2);y%2===0?(d(D[L][M+1]),d(D[L+1][M]),d(D[L][M])):(d(D[L][M+1]),d(D[L+1][M+1]),d(D[L+1][M]))}}function c(E){const b=new W;for(let x=0;x<s.length;x+=3)b.x=s[x+0],b.y=s[x+1],b.z=s[x+2],b.normalize().multiplyScalar(E),s[x+0]=b.x,s[x+1]=b.y,s[x+2]=b.z}function u(){const E=new W;for(let b=0;b<s.length;b+=3){E.x=s[b+0],E.y=s[b+1],E.z=s[b+2];const x=m(E)/2/Math.PI+.5,P=p(E)/Math.PI+.5;o.push(x,1-P)}g(),f()}function f(){for(let E=0;E<o.length;E+=6){const b=o[E+0],x=o[E+2],P=o[E+4],R=Math.max(b,x,P),D=Math.min(b,x,P);R>.9&&D<.1&&(b<.2&&(o[E+0]+=1),x<.2&&(o[E+2]+=1),P<.2&&(o[E+4]+=1))}}function d(E){s.push(E.x,E.y,E.z)}function h(E,b){const x=E*3;b.x=e[x+0],b.y=e[x+1],b.z=e[x+2]}function g(){const E=new W,b=new W,x=new W,P=new W,R=new it,D=new it,L=new it;for(let y=0,M=0;y<s.length;y+=9,M+=6){E.set(s[y+0],s[y+1],s[y+2]),b.set(s[y+3],s[y+4],s[y+5]),x.set(s[y+6],s[y+7],s[y+8]),R.set(o[M+0],o[M+1]),D.set(o[M+2],o[M+3]),L.set(o[M+4],o[M+5]),P.copy(E).add(b).add(x).divideScalar(3);const I=m(P);v(R,M+0,E,I),v(D,M+2,b,I),v(L,M+4,x,I)}}function v(E,b,x,P){P<0&&E.x===1&&(o[b]=E.x-1),x.x===0&&x.z===0&&(o[b]=P/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Au(e.vertices,e.indices,e.radius,e.details)}}const Mo=new W,Eo=new W,bl=new W,bo=new xn;class nM extends Wn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(ko*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),d={},h=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:m,c:p}=bo;if(v.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),bo.getNormal(bl),f[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,f[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,f[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let E=0;E<3;E++){const b=(E+1)%3,x=f[E],P=f[b],R=bo[u[E]],D=bo[u[b]],L=`${x}_${P}`,y=`${P}_${x}`;y in d&&d[y]?(bl.dot(d[y].normal)<=s&&(h.push(R.x,R.y,R.z),h.push(D.x,D.y,D.z)),d[y]=null):L in d||(d[L]={index0:c[E],index1:c[b],normal:bl.clone()})}}for(const g in d)if(d[g]){const{index0:v,index1:m}=d[g];Mo.fromBufferAttribute(a,v),Eo.fromBufferAttribute(a,m),h.push(Mo.x,Mo.y,Mo.z),h.push(Eo.x,Eo.y,Eo.z)}this.setAttribute("position",new sn(h,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class wu extends Au{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new wu(e.radius,e.detail)}}class Ca extends Wn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,h=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const E=p*d-o;for(let b=0;b<c;b++){const x=b*f-s;g.push(x,-E,0),v.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<a;E++){const b=E+c*p,x=E+c*(p+1),P=E+1+c*(p+1),R=E+1+c*p;h.push(b,x,R),h.push(x,P,R)}this.setIndex(h),this.setAttribute("position",new sn(g,3)),this.setAttribute("normal",new sn(v,3)),this.setAttribute("uv",new sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ca(e.width,e.height,e.widthSegments,e.heightSegments)}}class iM extends $s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rM extends $s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Om extends kt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Tl=new yt,Dd=new W,Ld=new W;class sM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tu,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Dd.setFromMatrixPosition(e.matrixWorld),n.position.copy(Dd),Ld.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Ld),n.updateMatrixWorld(),Tl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Tl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Bm extends Um{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class oM extends sM{constructor(){super(new Bm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class aM extends Om{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new oM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class lM extends Om{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class cM extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Ud(t,e,n,i){const r=uM(i);switch(n){case xm:return t*e;case ym:return t*e/r.components*r.byteLength;case Su:return t*e/r.components*r.byteLength;case Mm:return t*e*2/r.components*r.byteLength;case yu:return t*e*2/r.components*r.byteLength;case Sm:return t*e*3/r.components*r.byteLength;case wn:return t*e*4/r.components*r.byteLength;case Mu:return t*e*4/r.components*r.byteLength;case No:case Fo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Oo:case Bo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case mc:case _c:return Math.max(t,16)*Math.max(e,8)/4;case pc:case gc:return Math.max(t,8)*Math.max(e,8)/2;case vc:case xc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Sc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case yc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Mc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ec:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case bc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case wc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Cc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Pc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Dc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Lc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Uc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ic:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case zo:case Nc:case Fc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Em:case Oc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Bc:case zc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function uM(t){switch(t){case Gn:case gm:return{byteLength:1,components:1};case Ds:case _m:case Vs:return{byteLength:2,components:1};case vu:case xu:return{byteLength:2,components:4};case ur:case _u:case ri:return{byteLength:4,components:1};case vm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zm(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function fM(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],v=f[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const v=f[h];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var dM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_M=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,yM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,MM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,EM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,TM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,AM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,UM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,IM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,NM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,FM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,OM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,BM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VM="gl_FragColor = linearToOutputTexel( gl_FragColor );",GM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,XM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$M=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,YM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_E=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ME=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,EE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,RE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,PE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,DE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,IE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,NE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,OE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,HE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$E=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,YE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,KE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ZE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,QE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ib=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ob=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ub=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,db=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_b=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ab=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Db=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ub=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ib=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ob=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:dM,alphahash_pars_fragment:hM,alphamap_fragment:pM,alphamap_pars_fragment:mM,alphatest_fragment:gM,alphatest_pars_fragment:_M,aomap_fragment:vM,aomap_pars_fragment:xM,batching_pars_vertex:SM,batching_vertex:yM,begin_vertex:MM,beginnormal_vertex:EM,bsdfs:bM,iridescence_fragment:TM,bumpmap_pars_fragment:AM,clipping_planes_fragment:wM,clipping_planes_pars_fragment:RM,clipping_planes_pars_vertex:CM,clipping_planes_vertex:PM,color_fragment:DM,color_pars_fragment:LM,color_pars_vertex:UM,color_vertex:IM,common:NM,cube_uv_reflection_fragment:FM,defaultnormal_vertex:OM,displacementmap_pars_vertex:BM,displacementmap_vertex:zM,emissivemap_fragment:kM,emissivemap_pars_fragment:HM,colorspace_fragment:VM,colorspace_pars_fragment:GM,envmap_fragment:WM,envmap_common_pars_fragment:XM,envmap_pars_fragment:$M,envmap_pars_vertex:qM,envmap_physical_pars_fragment:rE,envmap_vertex:jM,fog_vertex:YM,fog_pars_vertex:KM,fog_fragment:ZM,fog_pars_fragment:JM,gradientmap_pars_fragment:QM,lightmap_pars_fragment:eE,lights_lambert_fragment:tE,lights_lambert_pars_fragment:nE,lights_pars_begin:iE,lights_toon_fragment:sE,lights_toon_pars_fragment:oE,lights_phong_fragment:aE,lights_phong_pars_fragment:lE,lights_physical_fragment:cE,lights_physical_pars_fragment:uE,lights_fragment_begin:fE,lights_fragment_maps:dE,lights_fragment_end:hE,logdepthbuf_fragment:pE,logdepthbuf_pars_fragment:mE,logdepthbuf_pars_vertex:gE,logdepthbuf_vertex:_E,map_fragment:vE,map_pars_fragment:xE,map_particle_fragment:SE,map_particle_pars_fragment:yE,metalnessmap_fragment:ME,metalnessmap_pars_fragment:EE,morphinstance_vertex:bE,morphcolor_vertex:TE,morphnormal_vertex:AE,morphtarget_pars_vertex:wE,morphtarget_vertex:RE,normal_fragment_begin:CE,normal_fragment_maps:PE,normal_pars_fragment:DE,normal_pars_vertex:LE,normal_vertex:UE,normalmap_pars_fragment:IE,clearcoat_normal_fragment_begin:NE,clearcoat_normal_fragment_maps:FE,clearcoat_pars_fragment:OE,iridescence_pars_fragment:BE,opaque_fragment:zE,packing:kE,premultiplied_alpha_fragment:HE,project_vertex:VE,dithering_fragment:GE,dithering_pars_fragment:WE,roughnessmap_fragment:XE,roughnessmap_pars_fragment:$E,shadowmap_pars_fragment:qE,shadowmap_pars_vertex:jE,shadowmap_vertex:YE,shadowmask_pars_fragment:KE,skinbase_vertex:ZE,skinning_pars_vertex:JE,skinning_vertex:QE,skinnormal_vertex:eb,specularmap_fragment:tb,specularmap_pars_fragment:nb,tonemapping_fragment:ib,tonemapping_pars_fragment:rb,transmission_fragment:sb,transmission_pars_fragment:ob,uv_pars_fragment:ab,uv_pars_vertex:lb,uv_vertex:cb,worldpos_vertex:ub,background_vert:fb,background_frag:db,backgroundCube_vert:hb,backgroundCube_frag:pb,cube_vert:mb,cube_frag:gb,depth_vert:_b,depth_frag:vb,distanceRGBA_vert:xb,distanceRGBA_frag:Sb,equirect_vert:yb,equirect_frag:Mb,linedashed_vert:Eb,linedashed_frag:bb,meshbasic_vert:Tb,meshbasic_frag:Ab,meshlambert_vert:wb,meshlambert_frag:Rb,meshmatcap_vert:Cb,meshmatcap_frag:Pb,meshnormal_vert:Db,meshnormal_frag:Lb,meshphong_vert:Ub,meshphong_frag:Ib,meshphysical_vert:Nb,meshphysical_frag:Fb,meshtoon_vert:Ob,meshtoon_frag:Bb,points_vert:zb,points_frag:kb,shadow_vert:Hb,shadow_frag:Vb,sprite_vert:Gb,sprite_frag:Wb},be={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Bn={basic:{uniforms:jt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:jt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new lt(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:jt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:jt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:jt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new lt(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:jt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:jt([be.points,be.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:jt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:jt([be.common,be.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:jt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:jt([be.sprite,be.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:jt([be.common,be.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:jt([be.lights,be.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Bn.physical={uniforms:jt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const To={r:0,b:0,g:0},qi=new ci,Xb=new yt;function $b(t,e,n,i,r,s,o){const a=new lt(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function g(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?n:e).get(x)),x}function v(b){let x=!1;const P=g(b);P===null?p(a,l):P&&P.isColor&&(p(P,1),x=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(b,x){const P=g(x);P&&(P.isCubeTexture||P.mapping===wa)?(u===void 0&&(u=new kn(new qs(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:jr(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,D,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),qi.copy(x.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Xb.makeRotationFromEuler(qi)),u.material.toneMapped=st.getTransfer(P.colorSpace)!==ft,(f!==P||d!==P.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,f=P,d=P.version,h=t.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new kn(new Ca(2,2),new Fi({name:"BackgroundMaterial",uniforms:jr(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=st.getTransfer(P.colorSpace)!==ft,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(f!==P||d!==P.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,f=P,d=P.version,h=t.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,x){b.getRGB(To,Lm(t)),i.buffers.color.setClear(To.r,To.g,To.b,x,o)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,x=1){a.set(b),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:v,addToRenderList:m,dispose:E}}function qb(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(M,I,F,H,J){let ae=!1;const X=f(H,F,I);s!==X&&(s=X,c(s.object)),ae=h(M,H,F,J),ae&&g(M,H,F,J),J!==null&&e.update(J,t.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,x(M,I,F,H),J!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function f(M,I,F){const H=F.wireframe===!0;let J=i[M.id];J===void 0&&(J={},i[M.id]=J);let ae=J[I.id];ae===void 0&&(ae={},J[I.id]=ae);let X=ae[H];return X===void 0&&(X=d(l()),ae[H]=X),X}function d(M){const I=[],F=[],H=[];for(let J=0;J<n;J++)I[J]=0,F[J]=0,H[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:H,object:M,attributes:{},index:null}}function h(M,I,F,H){const J=s.attributes,ae=I.attributes;let X=0;const ie=F.getAttributes();for(const G in ie)if(ie[G].location>=0){const ye=J[G];let Ce=ae[G];if(Ce===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(Ce=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(Ce=M.instanceColor)),ye===void 0||ye.attribute!==Ce||Ce&&ye.data!==Ce.data)return!0;X++}return s.attributesNum!==X||s.index!==H}function g(M,I,F,H){const J={},ae=I.attributes;let X=0;const ie=F.getAttributes();for(const G in ie)if(ie[G].location>=0){let ye=ae[G];ye===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor));const Ce={};Ce.attribute=ye,ye&&ye.data&&(Ce.data=ye.data),J[G]=Ce,X++}s.attributes=J,s.attributesNum=X,s.index=H}function v(){const M=s.newAttributes;for(let I=0,F=M.length;I<F;I++)M[I]=0}function m(M){p(M,0)}function p(M,I){const F=s.newAttributes,H=s.enabledAttributes,J=s.attributeDivisors;F[M]=1,H[M]===0&&(t.enableVertexAttribArray(M),H[M]=1),J[M]!==I&&(t.vertexAttribDivisor(M,I),J[M]=I)}function E(){const M=s.newAttributes,I=s.enabledAttributes;for(let F=0,H=I.length;F<H;F++)I[F]!==M[F]&&(t.disableVertexAttribArray(F),I[F]=0)}function b(M,I,F,H,J,ae,X){X===!0?t.vertexAttribIPointer(M,I,F,J,ae):t.vertexAttribPointer(M,I,F,H,J,ae)}function x(M,I,F,H){v();const J=H.attributes,ae=F.getAttributes(),X=I.defaultAttributeValues;for(const ie in ae){const G=ae[ie];if(G.location>=0){let ve=J[ie];if(ve===void 0&&(ie==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),ie==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor)),ve!==void 0){const ye=ve.normalized,Ce=ve.itemSize,Be=e.get(ve);if(Be===void 0)continue;const Qe=Be.buffer,se=Be.type,_e=Be.bytesPerElement,Te=se===t.INT||se===t.UNSIGNED_INT||ve.gpuType===_u;if(ve.isInterleavedBufferAttribute){const O=ve.data,re=O.stride,ue=ve.offset;if(O.isInstancedInterleavedBuffer){for(let ce=0;ce<G.locationSize;ce++)p(G.location+ce,O.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let ce=0;ce<G.locationSize;ce++)m(G.location+ce);t.bindBuffer(t.ARRAY_BUFFER,Qe);for(let ce=0;ce<G.locationSize;ce++)b(G.location+ce,Ce/G.locationSize,se,ye,re*_e,(ue+Ce/G.locationSize*ce)*_e,Te)}else{if(ve.isInstancedBufferAttribute){for(let O=0;O<G.locationSize;O++)p(G.location+O,ve.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let O=0;O<G.locationSize;O++)m(G.location+O);t.bindBuffer(t.ARRAY_BUFFER,Qe);for(let O=0;O<G.locationSize;O++)b(G.location+O,Ce/G.locationSize,se,ye,Ce*_e,Ce/G.locationSize*O*_e,Te)}}else if(X!==void 0){const ye=X[ie];if(ye!==void 0)switch(ye.length){case 2:t.vertexAttrib2fv(G.location,ye);break;case 3:t.vertexAttrib3fv(G.location,ye);break;case 4:t.vertexAttrib4fv(G.location,ye);break;default:t.vertexAttrib1fv(G.location,ye)}}}}E()}function P(){L();for(const M in i){const I=i[M];for(const F in I){const H=I[F];for(const J in H)u(H[J].object),delete H[J];delete I[F]}delete i[M]}}function R(M){if(i[M.id]===void 0)return;const I=i[M.id];for(const F in I){const H=I[F];for(const J in H)u(H[J].object),delete H[J];delete I[F]}delete i[M.id]}function D(M){for(const I in i){const F=i[I];if(F[M.id]===void 0)continue;const H=F[M.id];for(const J in H)u(H[J].object),delete H[J];delete F[M.id]}}function L(){y(),o=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:y,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function jb(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];n.update(h,i,1)}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v]*d[v];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Yb(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==wn&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const L=D===Vs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Gn&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==ri&&!L)}function l(D){if(D==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),E=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),b=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:P,maxSamples:R}}function Kb(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ki,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const E=s?0:i,b=E*4;let x=p.clippingState||null;l.value=x,x=u(g,d,b,h);for(let P=0;P!==b;++P)x[P]=n[P];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=h+v*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,x=h;b!==v;++b,x+=4)o.copy(f[b]).applyMatrix4(E,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Zb(t){let e=new WeakMap;function n(o,a){return a===uc?o.mapping=Xr:a===fc&&(o.mapping=$r),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===uc||a===fc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new qy(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Ur=4,Id=[.125,.215,.35,.446,.526,.582],er=20,Al=new Bm,Nd=new lt;let wl=null,Rl=0,Cl=0,Pl=!1;const Zi=(1+Math.sqrt(5))/2,Cr=1/Zi,Fd=[new W(-Zi,Cr,0),new W(Zi,Cr,0),new W(-Cr,0,Zi),new W(Cr,0,Zi),new W(0,Zi,-Cr),new W(0,Zi,Cr),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],Jb=new W;class Od{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=Jb}=s;wl=this._renderer.getRenderTarget(),Rl=this._renderer.getActiveCubeFace(),Cl=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wl,Rl,Cl),this._renderer.xr.enabled=Pl,e.scissorTest=!1,Ao(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xr||e.mapping===$r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wl=this._renderer.getRenderTarget(),Rl=this._renderer.getActiveCubeFace(),Cl=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Vs,format:wn,colorSpace:qr,depthBuffer:!1},r=Bd(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bd(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qb(s)),this._blurMaterial=eT(s,e,n)}return r}_compileMaterial(e){const n=new kn(this._lodPlanes[0],e);this._renderer.compile(n,Al)}_sceneToCubeUV(e,n,i,r,s){const l=new vn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Nd),f.toneMapping=Di,f.autoClear=!1;const g=new bu({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),v=new kn(new qs,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(Nd),m=!0);for(let E=0;E<6;E++){const b=E%3;b===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[E],s.y,s.z)):b===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[E]));const x=this._cubeSize;Ao(r,b*x,E>2?x:0,x,x),f.setRenderTarget(r),m&&f.render(v,l),f.render(e,l)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Xr||e.mapping===$r;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new kn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ao(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Al)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Fd[(r-s-1)%Fd.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new kn(this._lodPlanes[r],c),d=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*er-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):er;m>er&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${er}`);const p=[];let E=0;for(let D=0;D<er;++D){const L=D/v,y=Math.exp(-L*L/2);p.push(y),D===0?E+=y:D<m&&(E+=2*y)}for(let D=0;D<p.length;D++)p[D]=p[D]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;const x=this._sizeLods[r],P=3*x*(r>b-Ur?r-b+Ur:0),R=4*(this._cubeSize-x);Ao(n,P,R,3*x,2*x),l.setRenderTarget(n),l.render(f,Al)}}function Qb(t){const e=[],n=[],i=[];let r=t;const s=t-Ur+1+Id.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ur?l=Id[o-t+Ur-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,v=3,m=2,p=1,E=new Float32Array(v*g*h),b=new Float32Array(m*g*h),x=new Float32Array(p*g*h);for(let R=0;R<h;R++){const D=R%3*2/3-1,L=R>2?0:-1,y=[D,L,0,D+2/3,L,0,D+2/3,L+1,0,D,L,0,D+2/3,L+1,0,D,L+1,0];E.set(y,v*g*R),b.set(d,m*g*R);const M=[R,R,R,R,R,R];x.set(M,p*g*R)}const P=new Wn;P.setAttribute("position",new Vn(E,v)),P.setAttribute("uv",new Vn(b,m)),P.setAttribute("faceIndex",new Vn(x,p)),e.push(P),r>Ur&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Bd(t,e,n){const i=new fr(t,e,n);return i.texture.mapping=wa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ao(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function eT(t,e,n){const i=new Float32Array(er),r=new W(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function zd(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function kd(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Ru(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===uc||l===fc,u=l===Xr||l===$r;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new Od(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(n===null&&(n=new Od(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function nT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Br("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function iT(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],t.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,g=f.attributes.position;let v=0;if(h!==null){const E=h.array;v=h.version;for(let b=0,x=E.length;b<x;b+=3){const P=E[b+0],R=E[b+1],D=E[b+2];d.push(P,R,R,D,D,P)}}else if(g!==void 0){const E=g.array;v=g.version;for(let b=0,x=E.length/3-1;b<x;b+=3){const P=b+0,R=b+1,D=b+2;d.push(P,R,R,D,D,P)}}else return;const m=new(Tm(d)?Dm:Pm)(d,1);m.version=v;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function rT(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){t.drawElements(i,h,s,d*o),n.update(h,i,1)}function c(d,h,g){g!==0&&(t.drawElementsInstanced(i,h,s,d*o,g),n.update(h,i,g))}function u(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];n.update(m,i,1)}function f(d,h,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,h[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,v,0,g);let p=0;for(let E=0;E<g;E++)p+=h[E]*v[E];n.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function sT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function oT(t,e,n){const i=new WeakMap,r=new bt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let y=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();const h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let b=0;h===!0&&(b=1),g===!0&&(b=2),v===!0&&(b=3);let x=a.attributes.position.count*b,P=1;x>e.maxTextureSize&&(P=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const R=new Float32Array(x*P*4*f),D=new Am(R,x,P,f);D.type=ri,D.needsUpdate=!0;const L=b*4;for(let M=0;M<f;M++){const I=m[M],F=p[M],H=E[M],J=x*P*4*M;for(let ae=0;ae<I.count;ae++){const X=ae*L;h===!0&&(r.fromBufferAttribute(I,ae),R[J+X+0]=r.x,R[J+X+1]=r.y,R[J+X+2]=r.z,R[J+X+3]=0),g===!0&&(r.fromBufferAttribute(F,ae),R[J+X+4]=r.x,R[J+X+5]=r.y,R[J+X+6]=r.z,R[J+X+7]=0),v===!0&&(r.fromBufferAttribute(H,ae),R[J+X+8]=r.x,R[J+X+9]=r.y,R[J+X+10]=r.z,R[J+X+11]=H.itemSize===4?r.w:1)}}d={count:f,texture:D,size:new it(x,P)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let h=0;for(let v=0;v<c.length;v++)h+=c[v];const g=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function aT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const km=new Jt,Hd=new Fm(1,1),Hm=new Am,Vm=new Py,Gm=new Im,Vd=[],Gd=[],Wd=new Float32Array(16),Xd=new Float32Array(9),$d=new Float32Array(4);function Jr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Vd[r];if(s===void 0&&(s=new Float32Array(r),Vd[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ut(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Pa(t,e){let n=Gd[e];n===void 0&&(n=new Int32Array(e),Gd[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function lT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function cT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function uT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ut(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function fT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function dT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Ut(n,i))return;$d.set(i),t.uniformMatrix2fv(this.addr,!1,$d),It(n,i)}}function hT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Ut(n,i))return;Xd.set(i),t.uniformMatrix3fv(this.addr,!1,Xd),It(n,i)}}function pT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Ut(n,i))return;Wd.set(i),t.uniformMatrix4fv(this.addr,!1,Wd),It(n,i)}}function mT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function gT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function _T(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function vT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function xT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ST(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function yT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function MT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function ET(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Hd.compareFunction=bm,s=Hd):s=km,n.setTexture2D(e||s,r)}function bT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Vm,r)}function TT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Gm,r)}function AT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Hm,r)}function wT(t){switch(t){case 5126:return lT;case 35664:return cT;case 35665:return uT;case 35666:return fT;case 35674:return dT;case 35675:return hT;case 35676:return pT;case 5124:case 35670:return mT;case 35667:case 35671:return gT;case 35668:case 35672:return _T;case 35669:case 35673:return vT;case 5125:return xT;case 36294:return ST;case 36295:return yT;case 36296:return MT;case 35678:case 36198:case 36298:case 36306:case 35682:return ET;case 35679:case 36299:case 36307:return bT;case 35680:case 36300:case 36308:case 36293:return TT;case 36289:case 36303:case 36311:case 36292:return AT}}function RT(t,e){t.uniform1fv(this.addr,e)}function CT(t,e){const n=Jr(e,this.size,2);t.uniform2fv(this.addr,n)}function PT(t,e){const n=Jr(e,this.size,3);t.uniform3fv(this.addr,n)}function DT(t,e){const n=Jr(e,this.size,4);t.uniform4fv(this.addr,n)}function LT(t,e){const n=Jr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function UT(t,e){const n=Jr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function IT(t,e){const n=Jr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function NT(t,e){t.uniform1iv(this.addr,e)}function FT(t,e){t.uniform2iv(this.addr,e)}function OT(t,e){t.uniform3iv(this.addr,e)}function BT(t,e){t.uniform4iv(this.addr,e)}function zT(t,e){t.uniform1uiv(this.addr,e)}function kT(t,e){t.uniform2uiv(this.addr,e)}function HT(t,e){t.uniform3uiv(this.addr,e)}function VT(t,e){t.uniform4uiv(this.addr,e)}function GT(t,e,n){const i=this.cache,r=e.length,s=Pa(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||km,s[o])}function WT(t,e,n){const i=this.cache,r=e.length,s=Pa(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Vm,s[o])}function XT(t,e,n){const i=this.cache,r=e.length,s=Pa(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Gm,s[o])}function $T(t,e,n){const i=this.cache,r=e.length,s=Pa(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Hm,s[o])}function qT(t){switch(t){case 5126:return RT;case 35664:return CT;case 35665:return PT;case 35666:return DT;case 35674:return LT;case 35675:return UT;case 35676:return IT;case 5124:case 35670:return NT;case 35667:case 35671:return FT;case 35668:case 35672:return OT;case 35669:case 35673:return BT;case 5125:return zT;case 36294:return kT;case 36295:return HT;case 36296:return VT;case 35678:case 36198:case 36298:case 36306:case 35682:return GT;case 35679:case 36299:case 36307:return WT;case 35680:case 36300:case 36308:case 36293:return XT;case 36289:case 36303:case 36311:case 36292:return $T}}class jT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=wT(n.type)}}class YT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=qT(n.type)}}class KT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Dl=/(\w+)(\])?(\[|\.)?/g;function qd(t,e){t.seq.push(e),t.map[e.id]=e}function ZT(t,e,n){const i=t.name,r=i.length;for(Dl.lastIndex=0;;){const s=Dl.exec(i),o=Dl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){qd(n,c===void 0?new jT(a,t,e):new YT(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new KT(a),qd(n,f)),n=f}}}class Ho{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);ZT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function jd(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const JT=37297;let QT=0;function eA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Yd=new Ke;function tA(t){st._getMatrix(Yd,st.workingColorSpace,t);const e=`mat3( ${Yd.elements.map(n=>n.toFixed(4))} )`;switch(st.getTransfer(t)){case Qo:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Kd(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+eA(t.getShaderSource(e),o)}else return r}function nA(t,e){const n=tA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function iA(t,e){let n;switch(e){case ty:n="Linear";break;case ny:n="Reinhard";break;case iy:n="Cineon";break;case ry:n="ACESFilmic";break;case oy:n="AgX";break;case ay:n="Neutral";break;case sy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const wo=new W;function rA(){st.getLuminanceCoefficients(wo);const t=wo.x.toFixed(4),e=wo.y.toFixed(4),n=wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fs).join(`
`)}function oA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function aA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function fs(t){return t!==""}function Zd(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jd(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hc(t){return t.replace(lA,uA)}const cA=new Map;function uA(t,e){let n=Ze[e];if(n===void 0){const i=cA.get(e);if(i!==void 0)n=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hc(n)}const fA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qd(t){return t.replace(fA,dA)}function dA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function eh(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===hm?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===IS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function pA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Xr:case $r:e="ENVMAP_TYPE_CUBE";break;case wa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case $r:e="ENVMAP_MODE_REFRACTION";break}return e}function gA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case pm:e="ENVMAP_BLENDING_MULTIPLY";break;case QS:e="ENVMAP_BLENDING_MIX";break;case ey:e="ENVMAP_BLENDING_ADD";break}return e}function _A(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function vA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=hA(n),c=pA(n),u=mA(n),f=gA(n),d=_A(n),h=sA(n),g=oA(s),v=r.createProgram();let m,p,E=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(fs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(fs).join(`
`),p.length>0&&(p+=`
`)):(m=[eh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),p=[eh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Di?"#define TONE_MAPPING":"",n.toneMapping!==Di?Ze.tonemapping_pars_fragment:"",n.toneMapping!==Di?iA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,nA("linearToOutputTexel",n.outputColorSpace),rA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(fs).join(`
`)),o=Hc(o),o=Zd(o,n),o=Jd(o,n),a=Hc(a),a=Zd(a,n),a=Jd(a,n),o=Qd(o),a=Qd(a),n.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===cd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===cd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=E+m+o,x=E+p+a,P=jd(r,r.VERTEX_SHADER,b),R=jd(r,r.FRAGMENT_SHADER,x);r.attachShader(v,P),r.attachShader(v,R),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function D(I){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(v).trim(),H=r.getShaderInfoLog(P).trim(),J=r.getShaderInfoLog(R).trim();let ae=!0,X=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ae=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,P,R);else{const ie=Kd(r,P,"vertex"),G=Kd(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+F+`
`+ie+`
`+G)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(H===""||J==="")&&(X=!1);X&&(I.diagnostics={runnable:ae,programLog:F,vertexShader:{log:H,prefix:m},fragmentShader:{log:J,prefix:p}})}r.deleteShader(P),r.deleteShader(R),L=new Ho(r,v),y=aA(r,v)}let L;this.getUniforms=function(){return L===void 0&&D(this),L};let y;this.getAttributes=function(){return y===void 0&&D(this),y};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,JT)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=QT++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=R,this}let xA=0;class SA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new yA(e),n.set(e,i)),i}}class yA{constructor(e){this.id=xA++,this.code=e,this.usedTimes=0}}function MA(t,e,n,i,r,s,o){const a=new Rm,l=new SA,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,I,F,H){const J=F.fog,ae=H.geometry,X=y.isMeshStandardMaterial?F.environment:null,ie=(y.isMeshStandardMaterial?n:e).get(y.envMap||X),G=ie&&ie.mapping===wa?ie.image.height:null,ve=g[y.type];y.precision!==null&&(h=r.getMaxPrecision(y.precision),h!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const ye=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Ce=ye!==void 0?ye.length:0;let Be=0;ae.morphAttributes.position!==void 0&&(Be=1),ae.morphAttributes.normal!==void 0&&(Be=2),ae.morphAttributes.color!==void 0&&(Be=3);let Qe,se,_e,Te;if(ve){const ct=Bn[ve];Qe=ct.vertexShader,se=ct.fragmentShader}else Qe=y.vertexShader,se=y.fragmentShader,l.update(y),_e=l.getVertexShaderID(y),Te=l.getFragmentShaderID(y);const O=t.getRenderTarget(),re=t.state.buffers.depth.getReversed(),ue=H.isInstancedMesh===!0,ce=H.isBatchedMesh===!0,ze=!!y.map,w=!!y.matcap,C=!!ie,S=!!y.aoMap,ne=!!y.lightMap,K=!!y.bumpMap,j=!!y.normalMap,te=!!y.displacementMap,oe=!!y.emissiveMap,ee=!!y.metalnessMap,Q=!!y.roughnessMap,Me=y.anisotropy>0,T=y.clearcoat>0,_=y.dispersion>0,U=y.iridescence>0,k=y.sheen>0,$=y.transmission>0,V=Me&&!!y.anisotropyMap,xe=T&&!!y.clearcoatMap,he=T&&!!y.clearcoatNormalMap,Ee=T&&!!y.clearcoatRoughnessMap,Pe=U&&!!y.iridescenceMap,fe=U&&!!y.iridescenceThicknessMap,Re=k&&!!y.sheenColorMap,Ie=k&&!!y.sheenRoughnessMap,Ne=!!y.specularMap,Se=!!y.specularColorMap,$e=!!y.specularIntensityMap,N=$&&!!y.transmissionMap,Ae=$&&!!y.thicknessMap,pe=!!y.gradientMap,Ue=!!y.alphaMap,me=y.alphaTest>0,le=!!y.alphaHash,Fe=!!y.extensions;let je=Di;y.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(je=t.toneMapping);const mt={shaderID:ve,shaderType:y.type,shaderName:y.name,vertexShader:Qe,fragmentShader:se,defines:y.defines,customVertexShaderID:_e,customFragmentShaderID:Te,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:ce,batchingColor:ce&&H._colorsTexture!==null,instancing:ue,instancingColor:ue&&H.instanceColor!==null,instancingMorph:ue&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:O===null?t.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:qr,alphaToCoverage:!!y.alphaToCoverage,map:ze,matcap:w,envMap:C,envMapMode:C&&ie.mapping,envMapCubeUVHeight:G,aoMap:S,lightMap:ne,bumpMap:K,normalMap:j,displacementMap:d&&te,emissiveMap:oe,normalMapObjectSpace:j&&y.normalMapType===dy,normalMapTangentSpace:j&&y.normalMapType===fy,metalnessMap:ee,roughnessMap:Q,anisotropy:Me,anisotropyMap:V,clearcoat:T,clearcoatMap:xe,clearcoatNormalMap:he,clearcoatRoughnessMap:Ee,dispersion:_,iridescence:U,iridescenceMap:Pe,iridescenceThicknessMap:fe,sheen:k,sheenColorMap:Re,sheenRoughnessMap:Ie,specularMap:Ne,specularColorMap:Se,specularIntensityMap:$e,transmission:$,transmissionMap:N,thicknessMap:Ae,gradientMap:pe,opaque:y.transparent===!1&&y.blending===Or&&y.alphaToCoverage===!1,alphaMap:Ue,alphaTest:me,alphaHash:le,combine:y.combine,mapUv:ze&&v(y.map.channel),aoMapUv:S&&v(y.aoMap.channel),lightMapUv:ne&&v(y.lightMap.channel),bumpMapUv:K&&v(y.bumpMap.channel),normalMapUv:j&&v(y.normalMap.channel),displacementMapUv:te&&v(y.displacementMap.channel),emissiveMapUv:oe&&v(y.emissiveMap.channel),metalnessMapUv:ee&&v(y.metalnessMap.channel),roughnessMapUv:Q&&v(y.roughnessMap.channel),anisotropyMapUv:V&&v(y.anisotropyMap.channel),clearcoatMapUv:xe&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&v(y.sheenRoughnessMap.channel),specularMapUv:Ne&&v(y.specularMap.channel),specularColorMapUv:Se&&v(y.specularColorMap.channel),specularIntensityMapUv:$e&&v(y.specularIntensityMap.channel),transmissionMapUv:N&&v(y.transmissionMap.channel),thicknessMapUv:Ae&&v(y.thicknessMap.channel),alphaMapUv:Ue&&v(y.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(j||Me),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ae.attributes.uv&&(ze||Ue),fog:!!J,useFog:y.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:re,skinning:H.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Be,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:je,decodeVideoTexture:ze&&y.map.isVideoTexture===!0&&st.getTransfer(y.map.colorSpace)===ft,decodeVideoTextureEmissive:oe&&y.emissiveMap.isVideoTexture===!0&&st.getTransfer(y.emissiveMap.colorSpace)===ft,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ii,flipSided:y.side===rn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Fe&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&y.extensions.multiDraw===!0||ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return mt.vertexUv1s=c.has(1),mt.vertexUv2s=c.has(2),mt.vertexUv3s=c.has(3),c.clear(),mt}function p(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)M.push(I),M.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(E(M,y),b(M,y),M.push(t.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function E(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function b(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const M=g[y.type];let I;if(M){const F=Bn[M];I=Gy.clone(F.uniforms)}else I=y.uniforms;return I}function P(y,M){let I;for(let F=0,H=u.length;F<H;F++){const J=u[F];if(J.cacheKey===M){I=J,++I.usedTimes;break}}return I===void 0&&(I=new vA(t,M,y,s),u.push(I)),I}function R(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function D(y){l.remove(y)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:P,releaseProgram:R,releaseShaderCache:D,programs:u,dispose:L}}function EA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function bA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function th(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function nh(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,h,g,v,m){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},t[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=v,p.group=m),e++,p}function a(f,d,h,g,v,m){const p=o(f,d,h,g,v,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):n.push(p)}function l(f,d,h,g,v,m){const p=o(f,d,h,g,v,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):n.unshift(p)}function c(f,d){n.length>1&&n.sort(f||bA),i.length>1&&i.sort(d||th),r.length>1&&r.sort(d||th)}function u(){for(let f=e,d=t.length;f<d;f++){const h=t[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function TA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new nh,t.set(i,[o])):r>=s.length?(o=new nh,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function AA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new lt};break;case"SpotLight":n={position:new W,direction:new W,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new lt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":n={color:new lt,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function wA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let RA=0;function CA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function PA(t){const e=new AA,n=wA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,s=new yt,o=new yt;function a(c){let u=0,f=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let h=0,g=0,v=0,m=0,p=0,E=0,b=0,x=0,P=0,R=0,D=0;c.sort(CA);for(let y=0,M=c.length;y<M;y++){const I=c[y],F=I.color,H=I.intensity,J=I.distance,ae=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=F.r*H,f+=F.g*H,d+=F.b*H;else if(I.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(I.sh.coefficients[X],H);D++}else if(I.isDirectionalLight){const X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ie=I.shadow,G=n.get(I);G.shadowIntensity=ie.intensity,G.shadowBias=ie.bias,G.shadowNormalBias=ie.normalBias,G.shadowRadius=ie.radius,G.shadowMapSize=ie.mapSize,i.directionalShadow[h]=G,i.directionalShadowMap[h]=ae,i.directionalShadowMatrix[h]=I.shadow.matrix,E++}i.directional[h]=X,h++}else if(I.isSpotLight){const X=e.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(F).multiplyScalar(H),X.distance=J,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,i.spot[v]=X;const ie=I.shadow;if(I.map&&(i.spotLightMap[P]=I.map,P++,ie.updateMatrices(I),I.castShadow&&R++),i.spotLightMatrix[v]=ie.matrix,I.castShadow){const G=n.get(I);G.shadowIntensity=ie.intensity,G.shadowBias=ie.bias,G.shadowNormalBias=ie.normalBias,G.shadowRadius=ie.radius,G.shadowMapSize=ie.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=ae,x++}v++}else if(I.isRectAreaLight){const X=e.get(I);X.color.copy(F).multiplyScalar(H),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=X,m++}else if(I.isPointLight){const X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){const ie=I.shadow,G=n.get(I);G.shadowIntensity=ie.intensity,G.shadowBias=ie.bias,G.shadowNormalBias=ie.normalBias,G.shadowRadius=ie.radius,G.shadowMapSize=ie.mapSize,G.shadowCameraNear=ie.camera.near,G.shadowCameraFar=ie.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=ae,i.pointShadowMatrix[g]=I.shadow.matrix,b++}i.point[g]=X,g++}else if(I.isHemisphereLight){const X=e.get(I);X.skyColor.copy(I.color).multiplyScalar(H),X.groundColor.copy(I.groundColor).multiplyScalar(H),i.hemi[p]=X,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const L=i.hash;(L.directionalLength!==h||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==E||L.numPointShadows!==b||L.numSpotShadows!==x||L.numSpotMaps!==P||L.numLightProbes!==D)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=x+P-R,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=D,L.directionalLength=h,L.pointLength=g,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=E,L.numPointShadows=b,L.numSpotShadows=x,L.numSpotMaps=P,L.numLightProbes=D,i.version=RA++)}function l(c,u){let f=0,d=0,h=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const b=c[p];if(b.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(b.isSpotLight){const x=i.spot[h];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(b.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function ih(t){const e=new PA(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function DA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new ih(t),e.set(r,[a])):s>=o.length?(a=new ih(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const LA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function IA(t,e,n){let i=new Tu;const r=new it,s=new it,o=new bt,a=new iM({depthPacking:uy}),l=new rM,c={},u=n.maxTextureSize,f={[Ni]:rn,[rn]:Ni,[ii]:ii},d=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:LA,fragmentShader:UA}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Wn;g.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new kn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hm;let p=this.type;this.render=function(R,D,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const y=t.getRenderTarget(),M=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Pi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const H=p!==Qn&&this.type===Qn,J=p===Qn&&this.type!==Qn;for(let ae=0,X=R.length;ae<X;ae++){const ie=R[ae],G=ie.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const ve=G.getFrameExtents();if(r.multiply(ve),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ve.x),r.x=s.x*ve.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ve.y),r.y=s.y*ve.y,G.mapSize.y=s.y)),G.map===null||H===!0||J===!0){const Ce=this.type!==Qn?{minFilter:Cn,magFilter:Cn}:{};G.map!==null&&G.map.dispose(),G.map=new fr(r.x,r.y,Ce),G.map.texture.name=ie.name+".shadowMap",G.camera.updateProjectionMatrix()}t.setRenderTarget(G.map),t.clear();const ye=G.getViewportCount();for(let Ce=0;Ce<ye;Ce++){const Be=G.getViewport(Ce);o.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),F.viewport(o),G.updateMatrices(ie,Ce),i=G.getFrustum(),x(D,L,G.camera,ie,this.type)}G.isPointLightShadow!==!0&&this.type===Qn&&E(G,L),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(y,M,I)};function E(R,D){const L=e.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new fr(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(D,null,L,d,v,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(D,null,L,h,v,null)}function b(R,D,L,y){let M=null;const I=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)M=I;else if(M=L.isPointLight===!0?l:a,t.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const F=M.uuid,H=D.uuid;let J=c[F];J===void 0&&(J={},c[F]=J);let ae=J[H];ae===void 0&&(ae=M.clone(),J[H]=ae,D.addEventListener("dispose",P)),M=ae}if(M.visible=D.visible,M.wireframe=D.wireframe,y===Qn?M.side=D.shadowSide!==null?D.shadowSide:D.side:M.side=D.shadowSide!==null?D.shadowSide:f[D.side],M.alphaMap=D.alphaMap,M.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,M.map=D.map,M.clipShadows=D.clipShadows,M.clippingPlanes=D.clippingPlanes,M.clipIntersection=D.clipIntersection,M.displacementMap=D.displacementMap,M.displacementScale=D.displacementScale,M.displacementBias=D.displacementBias,M.wireframeLinewidth=D.wireframeLinewidth,M.linewidth=D.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=t.properties.get(M);F.light=L}return M}function x(R,D,L,y,M){if(R.visible===!1)return;if(R.layers.test(D.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Qn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const H=e.update(R),J=R.material;if(Array.isArray(J)){const ae=H.groups;for(let X=0,ie=ae.length;X<ie;X++){const G=ae[X],ve=J[G.materialIndex];if(ve&&ve.visible){const ye=b(R,ve,y,M);R.onBeforeShadow(t,R,D,L,H,ye,G),t.renderBufferDirect(L,null,H,ye,R,G),R.onAfterShadow(t,R,D,L,H,ye,G)}}}else if(J.visible){const ae=b(R,J,y,M);R.onBeforeShadow(t,R,D,L,H,ae,null),t.renderBufferDirect(L,null,H,ae,R,null),R.onAfterShadow(t,R,D,L,H,ae,null)}}const F=R.children;for(let H=0,J=F.length;H<J;H++)x(F[H],D,L,y,M)}function P(R){R.target.removeEventListener("dispose",P);for(const L in c){const y=c[L],M=R.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const NA={[ic]:rc,[sc]:lc,[oc]:cc,[Wr]:ac,[rc]:ic,[lc]:sc,[cc]:oc,[ac]:Wr};function FA(t,e){function n(){let N=!1;const Ae=new bt;let pe=null;const Ue=new bt(0,0,0,0);return{setMask:function(me){pe!==me&&!N&&(t.colorMask(me,me,me,me),pe=me)},setLocked:function(me){N=me},setClear:function(me,le,Fe,je,mt){mt===!0&&(me*=je,le*=je,Fe*=je),Ae.set(me,le,Fe,je),Ue.equals(Ae)===!1&&(t.clearColor(me,le,Fe,je),Ue.copy(Ae))},reset:function(){N=!1,pe=null,Ue.set(-1,0,0,0)}}}function i(){let N=!1,Ae=!1,pe=null,Ue=null,me=null;return{setReversed:function(le){if(Ae!==le){const Fe=e.get("EXT_clip_control");le?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),Ae=le;const je=me;me=null,this.setClear(je)}},getReversed:function(){return Ae},setTest:function(le){le?O(t.DEPTH_TEST):re(t.DEPTH_TEST)},setMask:function(le){pe!==le&&!N&&(t.depthMask(le),pe=le)},setFunc:function(le){if(Ae&&(le=NA[le]),Ue!==le){switch(le){case ic:t.depthFunc(t.NEVER);break;case rc:t.depthFunc(t.ALWAYS);break;case sc:t.depthFunc(t.LESS);break;case Wr:t.depthFunc(t.LEQUAL);break;case oc:t.depthFunc(t.EQUAL);break;case ac:t.depthFunc(t.GEQUAL);break;case lc:t.depthFunc(t.GREATER);break;case cc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ue=le}},setLocked:function(le){N=le},setClear:function(le){me!==le&&(Ae&&(le=1-le),t.clearDepth(le),me=le)},reset:function(){N=!1,pe=null,Ue=null,me=null,Ae=!1}}}function r(){let N=!1,Ae=null,pe=null,Ue=null,me=null,le=null,Fe=null,je=null,mt=null;return{setTest:function(ct){N||(ct?O(t.STENCIL_TEST):re(t.STENCIL_TEST))},setMask:function(ct){Ae!==ct&&!N&&(t.stencilMask(ct),Ae=ct)},setFunc:function(ct,En,Xn){(pe!==ct||Ue!==En||me!==Xn)&&(t.stencilFunc(ct,En,Xn),pe=ct,Ue=En,me=Xn)},setOp:function(ct,En,Xn){(le!==ct||Fe!==En||je!==Xn)&&(t.stencilOp(ct,En,Xn),le=ct,Fe=En,je=Xn)},setLocked:function(ct){N=ct},setClear:function(ct){mt!==ct&&(t.clearStencil(ct),mt=ct)},reset:function(){N=!1,Ae=null,pe=null,Ue=null,me=null,le=null,Fe=null,je=null,mt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,h=[],g=null,v=!1,m=null,p=null,E=null,b=null,x=null,P=null,R=null,D=new lt(0,0,0),L=0,y=!1,M=null,I=null,F=null,H=null,J=null;const ae=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ie=0;const G=t.getParameter(t.VERSION);G.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=ie>=1):G.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=ie>=2);let ve=null,ye={};const Ce=t.getParameter(t.SCISSOR_BOX),Be=t.getParameter(t.VIEWPORT),Qe=new bt().fromArray(Ce),se=new bt().fromArray(Be);function _e(N,Ae,pe,Ue){const me=new Uint8Array(4),le=t.createTexture();t.bindTexture(N,le),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Fe=0;Fe<pe;Fe++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(Ae,0,t.RGBA,1,1,Ue,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(Ae+Fe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return le}const Te={};Te[t.TEXTURE_2D]=_e(t.TEXTURE_2D,t.TEXTURE_2D,1),Te[t.TEXTURE_CUBE_MAP]=_e(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[t.TEXTURE_2D_ARRAY]=_e(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Te[t.TEXTURE_3D]=_e(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),O(t.DEPTH_TEST),o.setFunc(Wr),K(!1),j(id),O(t.CULL_FACE),S(Pi);function O(N){u[N]!==!0&&(t.enable(N),u[N]=!0)}function re(N){u[N]!==!1&&(t.disable(N),u[N]=!1)}function ue(N,Ae){return f[N]!==Ae?(t.bindFramebuffer(N,Ae),f[N]=Ae,N===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Ae),N===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Ae),!0):!1}function ce(N,Ae){let pe=h,Ue=!1;if(N){pe=d.get(Ae),pe===void 0&&(pe=[],d.set(Ae,pe));const me=N.textures;if(pe.length!==me.length||pe[0]!==t.COLOR_ATTACHMENT0){for(let le=0,Fe=me.length;le<Fe;le++)pe[le]=t.COLOR_ATTACHMENT0+le;pe.length=me.length,Ue=!0}}else pe[0]!==t.BACK&&(pe[0]=t.BACK,Ue=!0);Ue&&t.drawBuffers(pe)}function ze(N){return g!==N?(t.useProgram(N),g=N,!0):!1}const w={[Qi]:t.FUNC_ADD,[FS]:t.FUNC_SUBTRACT,[OS]:t.FUNC_REVERSE_SUBTRACT};w[BS]=t.MIN,w[zS]=t.MAX;const C={[kS]:t.ZERO,[HS]:t.ONE,[VS]:t.SRC_COLOR,[tc]:t.SRC_ALPHA,[jS]:t.SRC_ALPHA_SATURATE,[$S]:t.DST_COLOR,[WS]:t.DST_ALPHA,[GS]:t.ONE_MINUS_SRC_COLOR,[nc]:t.ONE_MINUS_SRC_ALPHA,[qS]:t.ONE_MINUS_DST_COLOR,[XS]:t.ONE_MINUS_DST_ALPHA,[YS]:t.CONSTANT_COLOR,[KS]:t.ONE_MINUS_CONSTANT_COLOR,[ZS]:t.CONSTANT_ALPHA,[JS]:t.ONE_MINUS_CONSTANT_ALPHA};function S(N,Ae,pe,Ue,me,le,Fe,je,mt,ct){if(N===Pi){v===!0&&(re(t.BLEND),v=!1);return}if(v===!1&&(O(t.BLEND),v=!0),N!==NS){if(N!==m||ct!==y){if((p!==Qi||x!==Qi)&&(t.blendEquation(t.FUNC_ADD),p=Qi,x=Qi),ct)switch(N){case Or:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case rd:t.blendFunc(t.ONE,t.ONE);break;case sd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case od:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Or:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case rd:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case sd:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case od:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}E=null,b=null,P=null,R=null,D.set(0,0,0),L=0,m=N,y=ct}return}me=me||Ae,le=le||pe,Fe=Fe||Ue,(Ae!==p||me!==x)&&(t.blendEquationSeparate(w[Ae],w[me]),p=Ae,x=me),(pe!==E||Ue!==b||le!==P||Fe!==R)&&(t.blendFuncSeparate(C[pe],C[Ue],C[le],C[Fe]),E=pe,b=Ue,P=le,R=Fe),(je.equals(D)===!1||mt!==L)&&(t.blendColor(je.r,je.g,je.b,mt),D.copy(je),L=mt),m=N,y=!1}function ne(N,Ae){N.side===ii?re(t.CULL_FACE):O(t.CULL_FACE);let pe=N.side===rn;Ae&&(pe=!pe),K(pe),N.blending===Or&&N.transparent===!1?S(Pi):S(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);const Ue=N.stencilWrite;a.setTest(Ue),Ue&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),oe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?O(t.SAMPLE_ALPHA_TO_COVERAGE):re(t.SAMPLE_ALPHA_TO_COVERAGE)}function K(N){M!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),M=N)}function j(N){N!==LS?(O(t.CULL_FACE),N!==I&&(N===id?t.cullFace(t.BACK):N===US?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):re(t.CULL_FACE),I=N}function te(N){N!==F&&(X&&t.lineWidth(N),F=N)}function oe(N,Ae,pe){N?(O(t.POLYGON_OFFSET_FILL),(H!==Ae||J!==pe)&&(t.polygonOffset(Ae,pe),H=Ae,J=pe)):re(t.POLYGON_OFFSET_FILL)}function ee(N){N?O(t.SCISSOR_TEST):re(t.SCISSOR_TEST)}function Q(N){N===void 0&&(N=t.TEXTURE0+ae-1),ve!==N&&(t.activeTexture(N),ve=N)}function Me(N,Ae,pe){pe===void 0&&(ve===null?pe=t.TEXTURE0+ae-1:pe=ve);let Ue=ye[pe];Ue===void 0&&(Ue={type:void 0,texture:void 0},ye[pe]=Ue),(Ue.type!==N||Ue.texture!==Ae)&&(ve!==pe&&(t.activeTexture(pe),ve=pe),t.bindTexture(N,Ae||Te[N]),Ue.type=N,Ue.texture=Ae)}function T(){const N=ye[ve];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function _(){try{t.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function U(){try{t.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function k(){try{t.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{t.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function V(){try{t.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{t.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{t.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{t.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{t.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{t.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(N){Qe.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Qe.copy(N))}function Ie(N){se.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),se.copy(N))}function Ne(N,Ae){let pe=c.get(Ae);pe===void 0&&(pe=new WeakMap,c.set(Ae,pe));let Ue=pe.get(N);Ue===void 0&&(Ue=t.getUniformBlockIndex(Ae,N.name),pe.set(N,Ue))}function Se(N,Ae){const Ue=c.get(Ae).get(N);l.get(Ae)!==Ue&&(t.uniformBlockBinding(Ae,Ue,N.__bindingPointIndex),l.set(Ae,Ue))}function $e(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},ve=null,ye={},f={},d=new WeakMap,h=[],g=null,v=!1,m=null,p=null,E=null,b=null,x=null,P=null,R=null,D=new lt(0,0,0),L=0,y=!1,M=null,I=null,F=null,H=null,J=null,Qe.set(0,0,t.canvas.width,t.canvas.height),se.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:O,disable:re,bindFramebuffer:ue,drawBuffers:ce,useProgram:ze,setBlending:S,setMaterial:ne,setFlipSided:K,setCullFace:j,setLineWidth:te,setPolygonOffset:oe,setScissorTest:ee,activeTexture:Q,bindTexture:Me,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:U,texImage2D:Pe,texImage3D:fe,updateUBOMapping:Ne,uniformBlockBinding:Se,texStorage2D:he,texStorage3D:Ee,texSubImage2D:k,texSubImage3D:$,compressedTexSubImage2D:V,compressedTexSubImage3D:xe,scissor:Re,viewport:Ie,reset:$e}}function OA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return h?new OffscreenCanvas(T,_):ta("canvas")}function v(T,_,U){let k=1;const $=Me(T);if(($.width>U||$.height>U)&&(k=U/Math.max($.width,$.height)),k<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const V=Math.floor(k*$.width),xe=Math.floor(k*$.height);f===void 0&&(f=g(V,xe));const he=_?g(V,xe):f;return he.width=V,he.height=xe,he.getContext("2d").drawImage(T,0,0,V,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+V+"x"+xe+")."),he}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){t.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function b(T,_,U,k,$=!1){if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let V=_;if(_===t.RED&&(U===t.FLOAT&&(V=t.R32F),U===t.HALF_FLOAT&&(V=t.R16F),U===t.UNSIGNED_BYTE&&(V=t.R8)),_===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(V=t.R8UI),U===t.UNSIGNED_SHORT&&(V=t.R16UI),U===t.UNSIGNED_INT&&(V=t.R32UI),U===t.BYTE&&(V=t.R8I),U===t.SHORT&&(V=t.R16I),U===t.INT&&(V=t.R32I)),_===t.RG&&(U===t.FLOAT&&(V=t.RG32F),U===t.HALF_FLOAT&&(V=t.RG16F),U===t.UNSIGNED_BYTE&&(V=t.RG8)),_===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(V=t.RG8UI),U===t.UNSIGNED_SHORT&&(V=t.RG16UI),U===t.UNSIGNED_INT&&(V=t.RG32UI),U===t.BYTE&&(V=t.RG8I),U===t.SHORT&&(V=t.RG16I),U===t.INT&&(V=t.RG32I)),_===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(V=t.RGB8UI),U===t.UNSIGNED_SHORT&&(V=t.RGB16UI),U===t.UNSIGNED_INT&&(V=t.RGB32UI),U===t.BYTE&&(V=t.RGB8I),U===t.SHORT&&(V=t.RGB16I),U===t.INT&&(V=t.RGB32I)),_===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(V=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(V=t.RGBA16UI),U===t.UNSIGNED_INT&&(V=t.RGBA32UI),U===t.BYTE&&(V=t.RGBA8I),U===t.SHORT&&(V=t.RGBA16I),U===t.INT&&(V=t.RGBA32I)),_===t.RGB&&U===t.UNSIGNED_INT_5_9_9_9_REV&&(V=t.RGB9_E5),_===t.RGBA){const xe=$?Qo:st.getTransfer(k);U===t.FLOAT&&(V=t.RGBA32F),U===t.HALF_FLOAT&&(V=t.RGBA16F),U===t.UNSIGNED_BYTE&&(V=xe===ft?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&(V=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(V=t.RGB5_A1)}return(V===t.R16F||V===t.R32F||V===t.RG16F||V===t.RG32F||V===t.RGBA16F||V===t.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function x(T,_){let U;return T?_===null||_===ur||_===Ls?U=t.DEPTH24_STENCIL8:_===ri?U=t.DEPTH32F_STENCIL8:_===Ds&&(U=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ur||_===Ls?U=t.DEPTH_COMPONENT24:_===ri?U=t.DEPTH_COMPONENT32F:_===Ds&&(U=t.DEPTH_COMPONENT16),U}function P(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Cn&&T.minFilter!==zn?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function R(T){const _=T.target;_.removeEventListener("dispose",R),L(_),_.isVideoTexture&&u.delete(_)}function D(T){const _=T.target;_.removeEventListener("dispose",D),M(_)}function L(T){const _=i.get(T);if(_.__webglInit===void 0)return;const U=T.source,k=d.get(U);if(k){const $=k[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&y(T),Object.keys(k).length===0&&d.delete(U)}i.remove(T)}function y(T){const _=i.get(T);t.deleteTexture(_.__webglTexture);const U=T.source,k=d.get(U);delete k[_.__cacheKey],o.memory.textures--}function M(T){const _=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(_.__webglFramebuffer[k]))for(let $=0;$<_.__webglFramebuffer[k].length;$++)t.deleteFramebuffer(_.__webglFramebuffer[k][$]);else t.deleteFramebuffer(_.__webglFramebuffer[k]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[k])}else{if(Array.isArray(_.__webglFramebuffer))for(let k=0;k<_.__webglFramebuffer.length;k++)t.deleteFramebuffer(_.__webglFramebuffer[k]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let k=0;k<_.__webglColorRenderbuffer.length;k++)_.__webglColorRenderbuffer[k]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[k]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const U=T.textures;for(let k=0,$=U.length;k<$;k++){const V=i.get(U[k]);V.__webglTexture&&(t.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(U[k])}i.remove(T)}let I=0;function F(){I=0}function H(){const T=I;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),I+=1,T}function J(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function ae(T,_){const U=i.get(T);if(T.isVideoTexture&&ee(T),T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){const k=T.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(U,T,_);return}}n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+_)}function X(T,_){const U=i.get(T);if(T.version>0&&U.__version!==T.version){Te(U,T,_);return}n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+_)}function ie(T,_){const U=i.get(T);if(T.version>0&&U.__version!==T.version){Te(U,T,_);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+_)}function G(T,_){const U=i.get(T);if(T.version>0&&U.__version!==T.version){O(U,T,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+_)}const ve={[dc]:t.REPEAT,[nr]:t.CLAMP_TO_EDGE,[hc]:t.MIRRORED_REPEAT},ye={[Cn]:t.NEAREST,[ly]:t.NEAREST_MIPMAP_NEAREST,[eo]:t.NEAREST_MIPMAP_LINEAR,[zn]:t.LINEAR,[Qa]:t.LINEAR_MIPMAP_NEAREST,[ir]:t.LINEAR_MIPMAP_LINEAR},Ce={[hy]:t.NEVER,[xy]:t.ALWAYS,[py]:t.LESS,[bm]:t.LEQUAL,[my]:t.EQUAL,[vy]:t.GEQUAL,[gy]:t.GREATER,[_y]:t.NOTEQUAL};function Be(T,_){if(_.type===ri&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===zn||_.magFilter===Qa||_.magFilter===eo||_.magFilter===ir||_.minFilter===zn||_.minFilter===Qa||_.minFilter===eo||_.minFilter===ir)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,ve[_.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,ve[_.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,ve[_.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,ye[_.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,ye[_.minFilter]),_.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,Ce[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Cn||_.minFilter!==eo&&_.minFilter!==ir||_.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Qe(T,_){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",R));const k=_.source;let $=d.get(k);$===void 0&&($={},d.set(k,$));const V=J(_);if(V!==T.__cacheKey){$[V]===void 0&&($[V]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,U=!0),$[V].usedTimes++;const xe=$[T.__cacheKey];xe!==void 0&&($[T.__cacheKey].usedTimes--,xe.usedTimes===0&&y(_)),T.__cacheKey=V,T.__webglTexture=$[V].texture}return U}function se(T,_,U){return Math.floor(Math.floor(T/U)/_)}function _e(T,_,U,k){const V=T.updateRanges;if(V.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,U,k,_.data);else{V.sort((fe,Re)=>fe.start-Re.start);let xe=0;for(let fe=1;fe<V.length;fe++){const Re=V[xe],Ie=V[fe],Ne=Re.start+Re.count,Se=se(Ie.start,_.width,4),$e=se(Re.start,_.width,4);Ie.start<=Ne+1&&Se===$e&&se(Ie.start+Ie.count-1,_.width,4)===Se?Re.count=Math.max(Re.count,Ie.start+Ie.count-Re.start):(++xe,V[xe]=Ie)}V.length=xe+1;const he=t.getParameter(t.UNPACK_ROW_LENGTH),Ee=t.getParameter(t.UNPACK_SKIP_PIXELS),Pe=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let fe=0,Re=V.length;fe<Re;fe++){const Ie=V[fe],Ne=Math.floor(Ie.start/4),Se=Math.ceil(Ie.count/4),$e=Ne%_.width,N=Math.floor(Ne/_.width),Ae=Se,pe=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(t.UNPACK_SKIP_ROWS,N),n.texSubImage2D(t.TEXTURE_2D,0,$e,N,Ae,pe,U,k,_.data)}T.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,he),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ee),t.pixelStorei(t.UNPACK_SKIP_ROWS,Pe)}}function Te(T,_,U){let k=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(k=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(k=t.TEXTURE_3D);const $=Qe(T,_),V=_.source;n.bindTexture(k,T.__webglTexture,t.TEXTURE0+U);const xe=i.get(V);if(V.version!==xe.__version||$===!0){n.activeTexture(t.TEXTURE0+U);const he=st.getPrimaries(st.workingColorSpace),Ee=_.colorSpace===Ti?null:st.getPrimaries(_.colorSpace),Pe=_.colorSpace===Ti||he===Ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let fe=v(_.image,!1,r.maxTextureSize);fe=Q(_,fe);const Re=s.convert(_.format,_.colorSpace),Ie=s.convert(_.type);let Ne=b(_.internalFormat,Re,Ie,_.colorSpace,_.isVideoTexture);Be(k,_);let Se;const $e=_.mipmaps,N=_.isVideoTexture!==!0,Ae=xe.__version===void 0||$===!0,pe=V.dataReady,Ue=P(_,fe);if(_.isDepthTexture)Ne=x(_.format===Is,_.type),Ae&&(N?n.texStorage2D(t.TEXTURE_2D,1,Ne,fe.width,fe.height):n.texImage2D(t.TEXTURE_2D,0,Ne,fe.width,fe.height,0,Re,Ie,null));else if(_.isDataTexture)if($e.length>0){N&&Ae&&n.texStorage2D(t.TEXTURE_2D,Ue,Ne,$e[0].width,$e[0].height);for(let me=0,le=$e.length;me<le;me++)Se=$e[me],N?pe&&n.texSubImage2D(t.TEXTURE_2D,me,0,0,Se.width,Se.height,Re,Ie,Se.data):n.texImage2D(t.TEXTURE_2D,me,Ne,Se.width,Se.height,0,Re,Ie,Se.data);_.generateMipmaps=!1}else N?(Ae&&n.texStorage2D(t.TEXTURE_2D,Ue,Ne,fe.width,fe.height),pe&&_e(_,fe,Re,Ie)):n.texImage2D(t.TEXTURE_2D,0,Ne,fe.width,fe.height,0,Re,Ie,fe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){N&&Ae&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ue,Ne,$e[0].width,$e[0].height,fe.depth);for(let me=0,le=$e.length;me<le;me++)if(Se=$e[me],_.format!==wn)if(Re!==null)if(N){if(pe)if(_.layerUpdates.size>0){const Fe=Ud(Se.width,Se.height,_.format,_.type);for(const je of _.layerUpdates){const mt=Se.data.subarray(je*Fe/Se.data.BYTES_PER_ELEMENT,(je+1)*Fe/Se.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,me,0,0,je,Se.width,Se.height,1,Re,mt)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,me,0,0,0,Se.width,Se.height,fe.depth,Re,Se.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,me,Ne,Se.width,Se.height,fe.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?pe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,me,0,0,0,Se.width,Se.height,fe.depth,Re,Ie,Se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,me,Ne,Se.width,Se.height,fe.depth,0,Re,Ie,Se.data)}else{N&&Ae&&n.texStorage2D(t.TEXTURE_2D,Ue,Ne,$e[0].width,$e[0].height);for(let me=0,le=$e.length;me<le;me++)Se=$e[me],_.format!==wn?Re!==null?N?pe&&n.compressedTexSubImage2D(t.TEXTURE_2D,me,0,0,Se.width,Se.height,Re,Se.data):n.compressedTexImage2D(t.TEXTURE_2D,me,Ne,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?pe&&n.texSubImage2D(t.TEXTURE_2D,me,0,0,Se.width,Se.height,Re,Ie,Se.data):n.texImage2D(t.TEXTURE_2D,me,Ne,Se.width,Se.height,0,Re,Ie,Se.data)}else if(_.isDataArrayTexture)if(N){if(Ae&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ue,Ne,fe.width,fe.height,fe.depth),pe)if(_.layerUpdates.size>0){const me=Ud(fe.width,fe.height,_.format,_.type);for(const le of _.layerUpdates){const Fe=fe.data.subarray(le*me/fe.data.BYTES_PER_ELEMENT,(le+1)*me/fe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,le,fe.width,fe.height,1,Re,Ie,Fe)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Re,Ie,fe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ne,fe.width,fe.height,fe.depth,0,Re,Ie,fe.data);else if(_.isData3DTexture)N?(Ae&&n.texStorage3D(t.TEXTURE_3D,Ue,Ne,fe.width,fe.height,fe.depth),pe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Re,Ie,fe.data)):n.texImage3D(t.TEXTURE_3D,0,Ne,fe.width,fe.height,fe.depth,0,Re,Ie,fe.data);else if(_.isFramebufferTexture){if(Ae)if(N)n.texStorage2D(t.TEXTURE_2D,Ue,Ne,fe.width,fe.height);else{let me=fe.width,le=fe.height;for(let Fe=0;Fe<Ue;Fe++)n.texImage2D(t.TEXTURE_2D,Fe,Ne,me,le,0,Re,Ie,null),me>>=1,le>>=1}}else if($e.length>0){if(N&&Ae){const me=Me($e[0]);n.texStorage2D(t.TEXTURE_2D,Ue,Ne,me.width,me.height)}for(let me=0,le=$e.length;me<le;me++)Se=$e[me],N?pe&&n.texSubImage2D(t.TEXTURE_2D,me,0,0,Re,Ie,Se):n.texImage2D(t.TEXTURE_2D,me,Ne,Re,Ie,Se);_.generateMipmaps=!1}else if(N){if(Ae){const me=Me(fe);n.texStorage2D(t.TEXTURE_2D,Ue,Ne,me.width,me.height)}pe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Re,Ie,fe)}else n.texImage2D(t.TEXTURE_2D,0,Ne,Re,Ie,fe);m(_)&&p(k),xe.__version=V.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function O(T,_,U){if(_.image.length!==6)return;const k=Qe(T,_),$=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+U);const V=i.get($);if($.version!==V.__version||k===!0){n.activeTexture(t.TEXTURE0+U);const xe=st.getPrimaries(st.workingColorSpace),he=_.colorSpace===Ti?null:st.getPrimaries(_.colorSpace),Ee=_.colorSpace===Ti||xe===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Pe=_.isCompressedTexture||_.image[0].isCompressedTexture,fe=_.image[0]&&_.image[0].isDataTexture,Re=[];for(let le=0;le<6;le++)!Pe&&!fe?Re[le]=v(_.image[le],!0,r.maxCubemapSize):Re[le]=fe?_.image[le].image:_.image[le],Re[le]=Q(_,Re[le]);const Ie=Re[0],Ne=s.convert(_.format,_.colorSpace),Se=s.convert(_.type),$e=b(_.internalFormat,Ne,Se,_.colorSpace),N=_.isVideoTexture!==!0,Ae=V.__version===void 0||k===!0,pe=$.dataReady;let Ue=P(_,Ie);Be(t.TEXTURE_CUBE_MAP,_);let me;if(Pe){N&&Ae&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ue,$e,Ie.width,Ie.height);for(let le=0;le<6;le++){me=Re[le].mipmaps;for(let Fe=0;Fe<me.length;Fe++){const je=me[Fe];_.format!==wn?Ne!==null?N?pe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe,0,0,je.width,je.height,Ne,je.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe,$e,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe,0,0,je.width,je.height,Ne,Se,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe,$e,je.width,je.height,0,Ne,Se,je.data)}}}else{if(me=_.mipmaps,N&&Ae){me.length>0&&Ue++;const le=Me(Re[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ue,$e,le.width,le.height)}for(let le=0;le<6;le++)if(fe){N?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Re[le].width,Re[le].height,Ne,Se,Re[le].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,$e,Re[le].width,Re[le].height,0,Ne,Se,Re[le].data);for(let Fe=0;Fe<me.length;Fe++){const mt=me[Fe].image[le].image;N?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe+1,0,0,mt.width,mt.height,Ne,Se,mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe+1,$e,mt.width,mt.height,0,Ne,Se,mt.data)}}else{N?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ne,Se,Re[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,$e,Ne,Se,Re[le]);for(let Fe=0;Fe<me.length;Fe++){const je=me[Fe];N?pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe+1,0,0,Ne,Se,je.image[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Fe+1,$e,Ne,Se,je.image[le])}}}m(_)&&p(t.TEXTURE_CUBE_MAP),V.__version=$.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function re(T,_,U,k,$,V){const xe=s.convert(U.format,U.colorSpace),he=s.convert(U.type),Ee=b(U.internalFormat,xe,he,U.colorSpace),Pe=i.get(_),fe=i.get(U);if(fe.__renderTarget=_,!Pe.__hasExternalTextures){const Re=Math.max(1,_.width>>V),Ie=Math.max(1,_.height>>V);$===t.TEXTURE_3D||$===t.TEXTURE_2D_ARRAY?n.texImage3D($,V,Ee,Re,Ie,_.depth,0,xe,he,null):n.texImage2D($,V,Ee,Re,Ie,0,xe,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),oe(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,k,$,fe.__webglTexture,0,te(_)):($===t.TEXTURE_2D||$>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,k,$,fe.__webglTexture,V),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(T,_,U){if(t.bindRenderbuffer(t.RENDERBUFFER,T),_.depthBuffer){const k=_.depthTexture,$=k&&k.isDepthTexture?k.type:null,V=x(_.stencilBuffer,$),xe=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=te(_);oe(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,V,_.width,_.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,V,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,V,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,T)}else{const k=_.textures;for(let $=0;$<k.length;$++){const V=k[$],xe=s.convert(V.format,V.colorSpace),he=s.convert(V.type),Ee=b(V.internalFormat,xe,he,V.colorSpace),Pe=te(_);U&&oe(_)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,Ee,_.width,_.height):oe(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Pe,Ee,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,Ee,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ce(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const k=i.get(_.depthTexture);k.__renderTarget=_,(!k.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ae(_.depthTexture,0);const $=k.__webglTexture,V=te(_);if(_.depthTexture.format===Us)oe(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0,V):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,$,0);else if(_.depthTexture.format===Is)oe(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0,V):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function ze(T){const _=i.get(T),U=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const k=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),k){const $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,k.removeEventListener("dispose",$)};k.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=k}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");const k=T.texture.mipmaps;k&&k.length>0?ce(_.__webglFramebuffer[0],T):ce(_.__webglFramebuffer,T)}else if(U){_.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[k]),_.__webglDepthbuffer[k]===void 0)_.__webglDepthbuffer[k]=t.createRenderbuffer(),ue(_.__webglDepthbuffer[k],T,!1);else{const $=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,V=_.__webglDepthbuffer[k];t.bindRenderbuffer(t.RENDERBUFFER,V),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,V)}}else{const k=T.texture.mipmaps;if(k&&k.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),ue(_.__webglDepthbuffer,T,!1);else{const $=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,V=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,V),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,V)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function w(T,_,U){const k=i.get(T);_!==void 0&&re(k.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&ze(T)}function C(T){const _=T.texture,U=i.get(T),k=i.get(_);T.addEventListener("dispose",D);const $=T.textures,V=T.isWebGLCubeRenderTarget===!0,xe=$.length>1;if(xe||(k.__webglTexture===void 0&&(k.__webglTexture=t.createTexture()),k.__version=_.version,o.memory.textures++),V){U.__webglFramebuffer=[];for(let he=0;he<6;he++)if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[he]=[];for(let Ee=0;Ee<_.mipmaps.length;Ee++)U.__webglFramebuffer[he][Ee]=t.createFramebuffer()}else U.__webglFramebuffer[he]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let he=0;he<_.mipmaps.length;he++)U.__webglFramebuffer[he]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(xe)for(let he=0,Ee=$.length;he<Ee;he++){const Pe=i.get($[he]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=t.createTexture(),o.memory.textures++)}if(T.samples>0&&oe(T)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let he=0;he<$.length;he++){const Ee=$[he];U.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[he]);const Pe=s.convert(Ee.format,Ee.colorSpace),fe=s.convert(Ee.type),Re=b(Ee.internalFormat,Pe,fe,Ee.colorSpace,T.isXRRenderTarget===!0),Ie=te(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,Re,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,U.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),ue(U.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(V){n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture),Be(t.TEXTURE_CUBE_MAP,_);for(let he=0;he<6;he++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ee=0;Ee<_.mipmaps.length;Ee++)re(U.__webglFramebuffer[he][Ee],T,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee);else re(U.__webglFramebuffer[he],T,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(_)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(xe){for(let he=0,Ee=$.length;he<Ee;he++){const Pe=$[he],fe=i.get(Pe);n.bindTexture(t.TEXTURE_2D,fe.__webglTexture),Be(t.TEXTURE_2D,Pe),re(U.__webglFramebuffer,T,Pe,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,0),m(Pe)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,k.__webglTexture),Be(he,_),_.mipmaps&&_.mipmaps.length>0)for(let Ee=0;Ee<_.mipmaps.length;Ee++)re(U.__webglFramebuffer[Ee],T,_,t.COLOR_ATTACHMENT0,he,Ee);else re(U.__webglFramebuffer,T,_,t.COLOR_ATTACHMENT0,he,0);m(_)&&p(he),n.unbindTexture()}T.depthBuffer&&ze(T)}function S(T){const _=T.textures;for(let U=0,k=_.length;U<k;U++){const $=_[U];if(m($)){const V=E(T),xe=i.get($).__webglTexture;n.bindTexture(V,xe),p(V),n.unbindTexture()}}}const ne=[],K=[];function j(T){if(T.samples>0){if(oe(T)===!1){const _=T.textures,U=T.width,k=T.height;let $=t.COLOR_BUFFER_BIT;const V=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=i.get(T),he=_.length>1;if(he)for(let Pe=0;Pe<_.length;Pe++)n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const Ee=T.texture.mipmaps;Ee&&Ee.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Pe=0;Pe<_.length;Pe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=t.STENCIL_BUFFER_BIT)),he){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,xe.__webglColorRenderbuffer[Pe]);const fe=i.get(_[Pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,fe,0)}t.blitFramebuffer(0,0,U,k,0,0,U,k,$,t.NEAREST),l===!0&&(ne.length=0,K.length=0,ne.push(t.COLOR_ATTACHMENT0+Pe),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ne.push(V),K.push(V),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,K)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ne))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let Pe=0;Pe<_.length;Pe++){n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,xe.__webglColorRenderbuffer[Pe]);const fe=i.get(_[Pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function te(T){return Math.min(r.maxSamples,T.samples)}function oe(T){const _=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ee(T){const _=o.render.frame;u.get(T)!==_&&(u.set(T,_),T.update())}function Q(T,_){const U=T.colorSpace,k=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||U!==qr&&U!==Ti&&(st.getTransfer(U)===ft?(k!==wn||$!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),_}function Me(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=F,this.setTexture2D=ae,this.setTexture2DArray=X,this.setTexture3D=ie,this.setTextureCube=G,this.rebindTextures=w,this.setupRenderTarget=C,this.updateRenderTargetMipmap=S,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=re,this.useMultisampledRTT=oe}function BA(t,e){function n(i,r=Ti){let s;const o=st.getTransfer(r);if(i===Gn)return t.UNSIGNED_BYTE;if(i===vu)return t.UNSIGNED_SHORT_4_4_4_4;if(i===xu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===vm)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===gm)return t.BYTE;if(i===_m)return t.SHORT;if(i===Ds)return t.UNSIGNED_SHORT;if(i===_u)return t.INT;if(i===ur)return t.UNSIGNED_INT;if(i===ri)return t.FLOAT;if(i===Vs)return t.HALF_FLOAT;if(i===xm)return t.ALPHA;if(i===Sm)return t.RGB;if(i===wn)return t.RGBA;if(i===Us)return t.DEPTH_COMPONENT;if(i===Is)return t.DEPTH_STENCIL;if(i===ym)return t.RED;if(i===Su)return t.RED_INTEGER;if(i===Mm)return t.RG;if(i===yu)return t.RG_INTEGER;if(i===Mu)return t.RGBA_INTEGER;if(i===No||i===Fo||i===Oo||i===Bo)if(o===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===No)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===No)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pc||i===mc||i===gc||i===_c)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===pc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===mc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_c)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vc||i===xc||i===Sc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===vc||i===xc)return o===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Sc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===yc||i===Mc||i===Ec||i===bc||i===Tc||i===Ac||i===wc||i===Rc||i===Cc||i===Pc||i===Dc||i===Lc||i===Uc||i===Ic)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===yc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ec)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ac)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Cc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Lc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Uc)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ic)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zo||i===Nc||i===Fc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===zo)return o===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Em||i===Oc||i===Bc||i===zc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===zo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Oc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ls?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const zA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Jt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Fi({vertexShader:zA,fragmentShader:kA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new kn(new Ca(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VA extends Zr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const v=new HA,m=n.getContextAttributes();let p=null,E=null;const b=[],x=[],P=new it;let R=null;const D=new vn;D.viewport=new bt;const L=new vn;L.viewport=new bt;const y=[D,L],M=new cM;let I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let _e=b[se];return _e===void 0&&(_e=new yl,b[se]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(se){let _e=b[se];return _e===void 0&&(_e=new yl,b[se]=_e),_e.getGripSpace()},this.getHand=function(se){let _e=b[se];return _e===void 0&&(_e=new yl,b[se]=_e),_e.getHandSpace()};function H(se){const _e=x.indexOf(se.inputSource);if(_e===-1)return;const Te=b[_e];Te!==void 0&&(Te.update(se.inputSource,se.frame,c||o),Te.dispatchEvent({type:se.type,data:se.inputSource}))}function J(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",ae);for(let se=0;se<b.length;se++){const _e=x[se];_e!==null&&(x[se]=null,b[se].disconnect(_e))}I=null,F=null,v.reset(),e.setRenderTarget(p),h=null,d=null,f=null,r=null,E=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){s=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(se){if(r=se,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",J),r.addEventListener("inputsourceschange",ae),m.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,O=null,re=null;m.depth&&(re=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Te=m.stencil?Is:Us,O=m.stencil?Ls:ur);const ue={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(ue),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new fr(d.textureWidth,d.textureHeight,{format:wn,type:Gn,depthTexture:new Fm(d.textureWidth,d.textureHeight,O,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,Te),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),E=new fr(h.framebufferWidth,h.framebufferHeight,{format:wn,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Qe.setContext(r),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ae(se){for(let _e=0;_e<se.removed.length;_e++){const Te=se.removed[_e],O=x.indexOf(Te);O>=0&&(x[O]=null,b[O].disconnect(Te))}for(let _e=0;_e<se.added.length;_e++){const Te=se.added[_e];let O=x.indexOf(Te);if(O===-1){for(let ue=0;ue<b.length;ue++)if(ue>=x.length){x.push(Te),O=ue;break}else if(x[ue]===null){x[ue]=Te,O=ue;break}if(O===-1)break}const re=b[O];re&&re.connect(Te)}}const X=new W,ie=new W;function G(se,_e,Te){X.setFromMatrixPosition(_e.matrixWorld),ie.setFromMatrixPosition(Te.matrixWorld);const O=X.distanceTo(ie),re=_e.projectionMatrix.elements,ue=Te.projectionMatrix.elements,ce=re[14]/(re[10]-1),ze=re[14]/(re[10]+1),w=(re[9]+1)/re[5],C=(re[9]-1)/re[5],S=(re[8]-1)/re[0],ne=(ue[8]+1)/ue[0],K=ce*S,j=ce*ne,te=O/(-S+ne),oe=te*-S;if(_e.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(oe),se.translateZ(te),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),re[10]===-1)se.projectionMatrix.copy(_e.projectionMatrix),se.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const ee=ce+te,Q=ze+te,Me=K-oe,T=j+(O-oe),_=w*ze/Q*ee,U=C*ze/Q*ee;se.projectionMatrix.makePerspective(Me,T,_,U,ee,Q),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function ve(se,_e){_e===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(_e.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(r===null)return;let _e=se.near,Te=se.far;v.texture!==null&&(v.depthNear>0&&(_e=v.depthNear),v.depthFar>0&&(Te=v.depthFar)),M.near=L.near=D.near=_e,M.far=L.far=D.far=Te,(I!==M.near||F!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,F=M.far),D.layers.mask=se.layers.mask|2,L.layers.mask=se.layers.mask|4,M.layers.mask=D.layers.mask|L.layers.mask;const O=se.parent,re=M.cameras;ve(M,O);for(let ue=0;ue<re.length;ue++)ve(re[ue],O);re.length===2?G(M,D,L):M.projectionMatrix.copy(D.projectionMatrix),ye(se,M,O)};function ye(se,_e,Te){Te===null?se.matrix.copy(_e.matrixWorld):(se.matrix.copy(Te.matrixWorld),se.matrix.invert(),se.matrix.multiply(_e.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(_e.projectionMatrix),se.projectionMatrixInverse.copy(_e.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=kc*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(se){l=se,d!==null&&(d.fixedFoveation=se),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=se)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let Ce=null;function Be(se,_e){if(u=_e.getViewerPose(c||o),g=_e,u!==null){const Te=u.views;h!==null&&(e.setRenderTargetFramebuffer(E,h.framebuffer),e.setRenderTarget(E));let O=!1;Te.length!==M.cameras.length&&(M.cameras.length=0,O=!0);for(let ce=0;ce<Te.length;ce++){const ze=Te[ce];let w=null;if(h!==null)w=h.getViewport(ze);else{const S=f.getViewSubImage(d,ze);w=S.viewport,ce===0&&(e.setRenderTargetTextures(E,S.colorTexture,S.depthStencilTexture),e.setRenderTarget(E))}let C=y[ce];C===void 0&&(C=new vn,C.layers.enable(ce),C.viewport=new bt,y[ce]=C),C.matrix.fromArray(ze.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(ze.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(w.x,w.y,w.width,w.height),ce===0&&(M.matrix.copy(C.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),O===!0&&M.cameras.push(C)}const re=r.enabledFeatures;if(re&&re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const ce=f.getDepthInformation(Te[0]);ce&&ce.isValid&&ce.texture&&v.init(e,ce,r.renderState)}}for(let Te=0;Te<b.length;Te++){const O=x[Te],re=b[Te];O!==null&&re!==void 0&&re.update(O,_e,c||o)}Ce&&Ce(se,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),g=null}const Qe=new zm;Qe.setAnimationLoop(Be),this.setAnimationLoop=function(se){Ce=se},this.dispose=function(){}}}const ji=new ci,GA=new yt;function WA(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Lm(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,E,b,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,E,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),b=E.envMap,x=E.envMapRotation;b&&(m.envMap.value=b,ji.copy(x),ji.x*=-1,ji.y*=-1,ji.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),m.envMapRotation.value.setFromMatrix4(GA.makeRotationFromEuler(ji)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=b*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function XA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){const x=b.program;i.uniformBlockBinding(E,x)}function c(E,b){let x=r[E.id];x===void 0&&(g(E),x=u(E),r[E.id]=x,E.addEventListener("dispose",m));const P=b.program;i.updateUBOMapping(E,P);const R=e.render.frame;s[E.id]!==R&&(d(E),s[E.id]=R)}function u(E){const b=f();E.__bindingPointIndex=b;const x=t.createBuffer(),P=E.__size,R=E.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,P,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,x),x}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const b=r[E.id],x=E.uniforms,P=E.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let R=0,D=x.length;R<D;R++){const L=Array.isArray(x[R])?x[R]:[x[R]];for(let y=0,M=L.length;y<M;y++){const I=L[y];if(h(I,R,y,P)===!0){const F=I.__offset,H=Array.isArray(I.value)?I.value:[I.value];let J=0;for(let ae=0;ae<H.length;ae++){const X=H[ae],ie=v(X);typeof X=="number"||typeof X=="boolean"?(I.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,F+J,I.__data)):X.isMatrix3?(I.__data[0]=X.elements[0],I.__data[1]=X.elements[1],I.__data[2]=X.elements[2],I.__data[3]=0,I.__data[4]=X.elements[3],I.__data[5]=X.elements[4],I.__data[6]=X.elements[5],I.__data[7]=0,I.__data[8]=X.elements[6],I.__data[9]=X.elements[7],I.__data[10]=X.elements[8],I.__data[11]=0):(X.toArray(I.__data,J),J+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(E,b,x,P){const R=E.value,D=b+"_"+x;if(P[D]===void 0)return typeof R=="number"||typeof R=="boolean"?P[D]=R:P[D]=R.clone(),!0;{const L=P[D];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return P[D]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function g(E){const b=E.uniforms;let x=0;const P=16;for(let D=0,L=b.length;D<L;D++){const y=Array.isArray(b[D])?b[D]:[b[D]];for(let M=0,I=y.length;M<I;M++){const F=y[M],H=Array.isArray(F.value)?F.value:[F.value];for(let J=0,ae=H.length;J<ae;J++){const X=H[J],ie=v(X),G=x%P,ve=G%ie.boundary,ye=G+ve;x+=ve,ye!==0&&P-ye<ie.storage&&(x+=P-ye),F.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=ie.storage}}}const R=x%P;return R>0&&(x+=P-R),E.__size=x,E.__cache={},this}function v(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(const E in r)t.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class $A{constructor(e={}){const{canvas:n=yy(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const E=[],b=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let P=!1;this._outputColorSpace=_n;let R=0,D=0,L=null,y=-1,M=null;const I=new bt,F=new bt;let H=null;const J=new lt(0);let ae=0,X=n.width,ie=n.height,G=1,ve=null,ye=null;const Ce=new bt(0,0,X,ie),Be=new bt(0,0,X,ie);let Qe=!1;const se=new Tu;let _e=!1,Te=!1;const O=new yt,re=new yt,ue=new W,ce=new bt,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let w=!1;function C(){return L===null?G:1}let S=i;function ne(A,B){return n.getContext(A,B)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${gu}`),n.addEventListener("webglcontextlost",Ue,!1),n.addEventListener("webglcontextrestored",me,!1),n.addEventListener("webglcontextcreationerror",le,!1),S===null){const B="webgl2";if(S=ne(B,A),S===null)throw ne(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let K,j,te,oe,ee,Q,Me,T,_,U,k,$,V,xe,he,Ee,Pe,fe,Re,Ie,Ne,Se,$e,N;function Ae(){K=new nT(S),K.init(),Se=new BA(S,K),j=new Yb(S,K,e,Se),te=new FA(S,K),j.reverseDepthBuffer&&d&&te.buffers.depth.setReversed(!0),oe=new sT(S),ee=new EA,Q=new OA(S,K,te,ee,j,Se,oe),Me=new Zb(x),T=new tT(x),_=new fM(S),$e=new qb(S,_),U=new iT(S,_,oe,$e),k=new aT(S,U,_,oe),Re=new oT(S,j,Q),Ee=new Kb(ee),$=new MA(x,Me,T,K,j,$e,Ee),V=new WA(x,ee),xe=new TA,he=new DA(K),fe=new $b(x,Me,T,te,k,h,l),Pe=new IA(x,k,j),N=new XA(S,oe,j,te),Ie=new jb(S,K,oe),Ne=new rT(S,K,oe),oe.programs=$.programs,x.capabilities=j,x.extensions=K,x.properties=ee,x.renderLists=xe,x.shadowMap=Pe,x.state=te,x.info=oe}Ae();const pe=new VA(x,S);this.xr=pe,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const A=K.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=K.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(A){A!==void 0&&(G=A,this.setSize(X,ie,!1))},this.getSize=function(A){return A.set(X,ie)},this.setSize=function(A,B,q=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=A,ie=B,n.width=Math.floor(A*G),n.height=Math.floor(B*G),q===!0&&(n.style.width=A+"px",n.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(X*G,ie*G).floor()},this.setDrawingBufferSize=function(A,B,q){X=A,ie=B,G=q,n.width=Math.floor(A*q),n.height=Math.floor(B*q),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(Ce)},this.setViewport=function(A,B,q,Y){A.isVector4?Ce.set(A.x,A.y,A.z,A.w):Ce.set(A,B,q,Y),te.viewport(I.copy(Ce).multiplyScalar(G).round())},this.getScissor=function(A){return A.copy(Be)},this.setScissor=function(A,B,q,Y){A.isVector4?Be.set(A.x,A.y,A.z,A.w):Be.set(A,B,q,Y),te.scissor(F.copy(Be).multiplyScalar(G).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(A){te.setScissorTest(Qe=A)},this.setOpaqueSort=function(A){ve=A},this.setTransparentSort=function(A){ye=A},this.getClearColor=function(A){return A.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor(...arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha(...arguments)},this.clear=function(A=!0,B=!0,q=!0){let Y=0;if(A){let z=!1;if(L!==null){const ge=L.texture.format;z=ge===Mu||ge===yu||ge===Su}if(z){const ge=L.texture.type,we=ge===Gn||ge===ur||ge===Ds||ge===Ls||ge===vu||ge===xu,Oe=fe.getClearColor(),De=fe.getClearAlpha(),We=Oe.r,Xe=Oe.g,ke=Oe.b;we?(g[0]=We,g[1]=Xe,g[2]=ke,g[3]=De,S.clearBufferuiv(S.COLOR,0,g)):(v[0]=We,v[1]=Xe,v[2]=ke,v[3]=De,S.clearBufferiv(S.COLOR,0,v))}else Y|=S.COLOR_BUFFER_BIT}B&&(Y|=S.DEPTH_BUFFER_BIT),q&&(Y|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ue,!1),n.removeEventListener("webglcontextrestored",me,!1),n.removeEventListener("webglcontextcreationerror",le,!1),fe.dispose(),xe.dispose(),he.dispose(),ee.dispose(),Me.dispose(),T.dispose(),k.dispose(),$e.dispose(),N.dispose(),$.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Pu),pe.removeEventListener("sessionend",Du),Bi.stop()};function Ue(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const A=oe.autoReset,B=Pe.enabled,q=Pe.autoUpdate,Y=Pe.needsUpdate,z=Pe.type;Ae(),oe.autoReset=A,Pe.enabled=B,Pe.autoUpdate=q,Pe.needsUpdate=Y,Pe.type=z}function le(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Fe(A){const B=A.target;B.removeEventListener("dispose",Fe),je(B)}function je(A){mt(A),ee.remove(A)}function mt(A){const B=ee.get(A).programs;B!==void 0&&(B.forEach(function(q){$.releaseProgram(q)}),A.isShaderMaterial&&$.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,q,Y,z,ge){B===null&&(B=ze);const we=z.isMesh&&z.matrixWorld.determinant()<0,Oe=Wm(A,B,q,Y,z);te.setMaterial(Y,we);let De=q.index,We=1;if(Y.wireframe===!0){if(De=U.getWireframeAttribute(q),De===void 0)return;We=2}const Xe=q.drawRange,ke=q.attributes.position;let et=Xe.start*We,ut=(Xe.start+Xe.count)*We;ge!==null&&(et=Math.max(et,ge.start*We),ut=Math.min(ut,(ge.start+ge.count)*We)),De!==null?(et=Math.max(et,0),ut=Math.min(ut,De.count)):ke!=null&&(et=Math.max(et,0),ut=Math.min(ut,ke.count));const Mt=ut-et;if(Mt<0||Mt===1/0)return;$e.setup(z,Y,Oe,q,De);let gt,dt=Ie;if(De!==null&&(gt=_.get(De),dt=Ne,dt.setIndex(gt)),z.isMesh)Y.wireframe===!0?(te.setLineWidth(Y.wireframeLinewidth*C()),dt.setMode(S.LINES)):dt.setMode(S.TRIANGLES);else if(z.isLine){let He=Y.linewidth;He===void 0&&(He=1),te.setLineWidth(He*C()),z.isLineSegments?dt.setMode(S.LINES):z.isLineLoop?dt.setMode(S.LINE_LOOP):dt.setMode(S.LINE_STRIP)}else z.isPoints?dt.setMode(S.POINTS):z.isSprite&&dt.setMode(S.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Br("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))dt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const He=z._multiDrawStarts,St=z._multiDrawCounts,rt=z._multiDrawCount,on=De?_.get(De).bytesPerElement:1,hr=ee.get(Y).currentProgram.getUniforms();for(let an=0;an<rt;an++)hr.setValue(S,"_gl_DrawID",an),dt.render(He[an]/on,St[an])}else if(z.isInstancedMesh)dt.renderInstances(et,Mt,z.count);else if(q.isInstancedBufferGeometry){const He=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,St=Math.min(q.instanceCount,He);dt.renderInstances(et,Mt,St)}else dt.render(et,Mt)};function ct(A,B,q){A.transparent===!0&&A.side===ii&&A.forceSinglePass===!1?(A.side=rn,A.needsUpdate=!0,Ys(A,B,q),A.side=Ni,A.needsUpdate=!0,Ys(A,B,q),A.side=ii):Ys(A,B,q)}this.compile=function(A,B,q=null){q===null&&(q=A),p=he.get(q),p.init(B),b.push(p),q.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),A!==q&&A.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const Y=new Set;return A.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ge=z.material;if(ge)if(Array.isArray(ge))for(let we=0;we<ge.length;we++){const Oe=ge[we];ct(Oe,q,z),Y.add(Oe)}else ct(ge,q,z),Y.add(ge)}),p=b.pop(),Y},this.compileAsync=function(A,B,q=null){const Y=this.compile(A,B,q);return new Promise(z=>{function ge(){if(Y.forEach(function(we){ee.get(we).currentProgram.isReady()&&Y.delete(we)}),Y.size===0){z(A);return}setTimeout(ge,10)}K.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let En=null;function Xn(A){En&&En(A)}function Pu(){Bi.stop()}function Du(){Bi.start()}const Bi=new zm;Bi.setAnimationLoop(Xn),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(A){En=A,pe.setAnimationLoop(A),A===null?Bi.stop():Bi.start()},pe.addEventListener("sessionstart",Pu),pe.addEventListener("sessionend",Du),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(B),B=pe.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,B,L),p=he.get(A,b.length),p.init(B),b.push(p),re.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),se.setFromProjectionMatrix(re),Te=this.localClippingEnabled,_e=Ee.init(this.clippingPlanes,Te),m=xe.get(A,E.length),m.init(),E.push(m),pe.enabled===!0&&pe.isPresenting===!0){const ge=x.xr.getDepthSensingMesh();ge!==null&&Da(ge,B,-1/0,x.sortObjects)}Da(A,B,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ve,ye),w=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,w&&fe.addToRenderList(m,A),this.info.render.frame++,_e===!0&&Ee.beginShadows();const q=p.state.shadowsArray;Pe.render(q,A,B),_e===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,z=m.transmissive;if(p.setupLights(),B.isArrayCamera){const ge=B.cameras;if(z.length>0)for(let we=0,Oe=ge.length;we<Oe;we++){const De=ge[we];Uu(Y,z,A,De)}w&&fe.render(A);for(let we=0,Oe=ge.length;we<Oe;we++){const De=ge[we];Lu(m,A,De,De.viewport)}}else z.length>0&&Uu(Y,z,A,B),w&&fe.render(A),Lu(m,A,B);L!==null&&D===0&&(Q.updateMultisampleRenderTarget(L),Q.updateRenderTargetMipmap(L)),A.isScene===!0&&A.onAfterRender(x,A,B),$e.resetDefaultState(),y=-1,M=null,b.pop(),b.length>0?(p=b[b.length-1],_e===!0&&Ee.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Da(A,B,q,Y){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||se.intersectsSprite(A)){Y&&ce.setFromMatrixPosition(A.matrixWorld).applyMatrix4(re);const we=k.update(A),Oe=A.material;Oe.visible&&m.push(A,we,Oe,q,ce.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||se.intersectsObject(A))){const we=k.update(A),Oe=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ce.copy(A.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),ce.copy(we.boundingSphere.center)),ce.applyMatrix4(A.matrixWorld).applyMatrix4(re)),Array.isArray(Oe)){const De=we.groups;for(let We=0,Xe=De.length;We<Xe;We++){const ke=De[We],et=Oe[ke.materialIndex];et&&et.visible&&m.push(A,we,et,q,ce.z,ke)}}else Oe.visible&&m.push(A,we,Oe,q,ce.z,null)}}const ge=A.children;for(let we=0,Oe=ge.length;we<Oe;we++)Da(ge[we],B,q,Y)}function Lu(A,B,q,Y){const z=A.opaque,ge=A.transmissive,we=A.transparent;p.setupLightsView(q),_e===!0&&Ee.setGlobalState(x.clippingPlanes,q),Y&&te.viewport(I.copy(Y)),z.length>0&&js(z,B,q),ge.length>0&&js(ge,B,q),we.length>0&&js(we,B,q),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function Uu(A,B,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new fr(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?Vs:Gn,minFilter:ir,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const ge=p.state.transmissionRenderTarget[Y.id],we=Y.viewport||I;ge.setSize(we.z*x.transmissionResolutionScale,we.w*x.transmissionResolutionScale);const Oe=x.getRenderTarget(),De=x.getActiveCubeFace(),We=x.getActiveMipmapLevel();x.setRenderTarget(ge),x.getClearColor(J),ae=x.getClearAlpha(),ae<1&&x.setClearColor(16777215,.5),x.clear(),w&&fe.render(q);const Xe=x.toneMapping;x.toneMapping=Di;const ke=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),_e===!0&&Ee.setGlobalState(x.clippingPlanes,Y),js(A,q,Y),Q.updateMultisampleRenderTarget(ge),Q.updateRenderTargetMipmap(ge),K.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let ut=0,Mt=B.length;ut<Mt;ut++){const gt=B[ut],dt=gt.object,He=gt.geometry,St=gt.material,rt=gt.group;if(St.side===ii&&dt.layers.test(Y.layers)){const on=St.side;St.side=rn,St.needsUpdate=!0,Iu(dt,q,Y,He,St,rt),St.side=on,St.needsUpdate=!0,et=!0}}et===!0&&(Q.updateMultisampleRenderTarget(ge),Q.updateRenderTargetMipmap(ge))}x.setRenderTarget(Oe,De,We),x.setClearColor(J,ae),ke!==void 0&&(Y.viewport=ke),x.toneMapping=Xe}function js(A,B,q){const Y=B.isScene===!0?B.overrideMaterial:null;for(let z=0,ge=A.length;z<ge;z++){const we=A[z],Oe=we.object,De=we.geometry,We=we.group;let Xe=we.material;Xe.allowOverride===!0&&Y!==null&&(Xe=Y),Oe.layers.test(q.layers)&&Iu(Oe,B,q,De,Xe,We)}}function Iu(A,B,q,Y,z,ge){A.onBeforeRender(x,B,q,Y,z,ge),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),z.onBeforeRender(x,B,q,Y,A,ge),z.transparent===!0&&z.side===ii&&z.forceSinglePass===!1?(z.side=rn,z.needsUpdate=!0,x.renderBufferDirect(q,B,Y,z,A,ge),z.side=Ni,z.needsUpdate=!0,x.renderBufferDirect(q,B,Y,z,A,ge),z.side=ii):x.renderBufferDirect(q,B,Y,z,A,ge),A.onAfterRender(x,B,q,Y,z,ge)}function Ys(A,B,q){B.isScene!==!0&&(B=ze);const Y=ee.get(A),z=p.state.lights,ge=p.state.shadowsArray,we=z.state.version,Oe=$.getParameters(A,z.state,ge,B,q),De=$.getProgramCacheKey(Oe);let We=Y.programs;Y.environment=A.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(A.isMeshStandardMaterial?T:Me).get(A.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,We===void 0&&(A.addEventListener("dispose",Fe),We=new Map,Y.programs=We);let Xe=We.get(De);if(Xe!==void 0){if(Y.currentProgram===Xe&&Y.lightsStateVersion===we)return Fu(A,Oe),Xe}else Oe.uniforms=$.getUniforms(A),A.onBeforeCompile(Oe,x),Xe=$.acquireProgram(Oe,De),We.set(De,Xe),Y.uniforms=Oe.uniforms;const ke=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ke.clippingPlanes=Ee.uniform),Fu(A,Oe),Y.needsLights=$m(A),Y.lightsStateVersion=we,Y.needsLights&&(ke.ambientLightColor.value=z.state.ambient,ke.lightProbe.value=z.state.probe,ke.directionalLights.value=z.state.directional,ke.directionalLightShadows.value=z.state.directionalShadow,ke.spotLights.value=z.state.spot,ke.spotLightShadows.value=z.state.spotShadow,ke.rectAreaLights.value=z.state.rectArea,ke.ltc_1.value=z.state.rectAreaLTC1,ke.ltc_2.value=z.state.rectAreaLTC2,ke.pointLights.value=z.state.point,ke.pointLightShadows.value=z.state.pointShadow,ke.hemisphereLights.value=z.state.hemi,ke.directionalShadowMap.value=z.state.directionalShadowMap,ke.directionalShadowMatrix.value=z.state.directionalShadowMatrix,ke.spotShadowMap.value=z.state.spotShadowMap,ke.spotLightMatrix.value=z.state.spotLightMatrix,ke.spotLightMap.value=z.state.spotLightMap,ke.pointShadowMap.value=z.state.pointShadowMap,ke.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.currentProgram=Xe,Y.uniformsList=null,Xe}function Nu(A){if(A.uniformsList===null){const B=A.currentProgram.getUniforms();A.uniformsList=Ho.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function Fu(A,B){const q=ee.get(A);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Wm(A,B,q,Y,z){B.isScene!==!0&&(B=ze),Q.resetTextureUnits();const ge=B.fog,we=Y.isMeshStandardMaterial?B.environment:null,Oe=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:qr,De=(Y.isMeshStandardMaterial?T:Me).get(Y.envMap||we),We=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Xe=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),ke=!!q.morphAttributes.position,et=!!q.morphAttributes.normal,ut=!!q.morphAttributes.color;let Mt=Di;Y.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Mt=x.toneMapping);const gt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,dt=gt!==void 0?gt.length:0,He=ee.get(Y),St=p.state.lights;if(_e===!0&&(Te===!0||A!==M)){const $t=A===M&&Y.id===y;Ee.setState(Y,A,$t)}let rt=!1;Y.version===He.__version?(He.needsLights&&He.lightsStateVersion!==St.state.version||He.outputColorSpace!==Oe||z.isBatchedMesh&&He.batching===!1||!z.isBatchedMesh&&He.batching===!0||z.isBatchedMesh&&He.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&He.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&He.instancing===!1||!z.isInstancedMesh&&He.instancing===!0||z.isSkinnedMesh&&He.skinning===!1||!z.isSkinnedMesh&&He.skinning===!0||z.isInstancedMesh&&He.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&He.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&He.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&He.instancingMorph===!1&&z.morphTexture!==null||He.envMap!==De||Y.fog===!0&&He.fog!==ge||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Ee.numPlanes||He.numIntersection!==Ee.numIntersection)||He.vertexAlphas!==We||He.vertexTangents!==Xe||He.morphTargets!==ke||He.morphNormals!==et||He.morphColors!==ut||He.toneMapping!==Mt||He.morphTargetsCount!==dt)&&(rt=!0):(rt=!0,He.__version=Y.version);let on=He.currentProgram;rt===!0&&(on=Ys(Y,B,z));let hr=!1,an=!1,Qr=!1;const xt=on.getUniforms(),hn=He.uniforms;if(te.useProgram(on.program)&&(hr=!0,an=!0,Qr=!0),Y.id!==y&&(y=Y.id,an=!0),hr||M!==A){te.buffers.depth.getReversed()?(O.copy(A.projectionMatrix),Ey(O),by(O),xt.setValue(S,"projectionMatrix",O)):xt.setValue(S,"projectionMatrix",A.projectionMatrix),xt.setValue(S,"viewMatrix",A.matrixWorldInverse);const Qt=xt.map.cameraPosition;Qt!==void 0&&Qt.setValue(S,ue.setFromMatrixPosition(A.matrixWorld)),j.logarithmicDepthBuffer&&xt.setValue(S,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&xt.setValue(S,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,an=!0,Qr=!0)}if(z.isSkinnedMesh){xt.setOptional(S,z,"bindMatrix"),xt.setOptional(S,z,"bindMatrixInverse");const $t=z.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),xt.setValue(S,"boneTexture",$t.boneTexture,Q))}z.isBatchedMesh&&(xt.setOptional(S,z,"batchingTexture"),xt.setValue(S,"batchingTexture",z._matricesTexture,Q),xt.setOptional(S,z,"batchingIdTexture"),xt.setValue(S,"batchingIdTexture",z._indirectTexture,Q),xt.setOptional(S,z,"batchingColorTexture"),z._colorsTexture!==null&&xt.setValue(S,"batchingColorTexture",z._colorsTexture,Q));const pn=q.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&Re.update(z,q,on),(an||He.receiveShadow!==z.receiveShadow)&&(He.receiveShadow=z.receiveShadow,xt.setValue(S,"receiveShadow",z.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(hn.envMap.value=De,hn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(hn.envMapIntensity.value=B.environmentIntensity),an&&(xt.setValue(S,"toneMappingExposure",x.toneMappingExposure),He.needsLights&&Xm(hn,Qr),ge&&Y.fog===!0&&V.refreshFogUniforms(hn,ge),V.refreshMaterialUniforms(hn,Y,G,ie,p.state.transmissionRenderTarget[A.id]),Ho.upload(S,Nu(He),hn,Q)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ho.upload(S,Nu(He),hn,Q),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&xt.setValue(S,"center",z.center),xt.setValue(S,"modelViewMatrix",z.modelViewMatrix),xt.setValue(S,"normalMatrix",z.normalMatrix),xt.setValue(S,"modelMatrix",z.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const $t=Y.uniformsGroups;for(let Qt=0,La=$t.length;Qt<La;Qt++){const zi=$t[Qt];N.update(zi,on),N.bind(zi,on)}}return on}function Xm(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function $m(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(A,B,q){const Y=ee.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),ee.get(A.texture).__webglTexture=B,ee.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,B){const q=ee.get(A);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0};const qm=S.createFramebuffer();this.setRenderTarget=function(A,B=0,q=0){L=A,R=B,D=q;let Y=!0,z=null,ge=!1,we=!1;if(A){const De=ee.get(A);if(De.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(S.FRAMEBUFFER,null),Y=!1;else if(De.__webglFramebuffer===void 0)Q.setupRenderTarget(A);else if(De.__hasExternalTextures)Q.rebindTextures(A,ee.get(A.texture).__webglTexture,ee.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ke=A.depthTexture;if(De.__boundDepthTexture!==ke){if(ke!==null&&ee.has(ke)&&(A.width!==ke.image.width||A.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(A)}}const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(we=!0);const Xe=ee.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xe[B])?z=Xe[B][q]:z=Xe[B],ge=!0):A.samples>0&&Q.useMultisampledRTT(A)===!1?z=ee.get(A).__webglMultisampledFramebuffer:Array.isArray(Xe)?z=Xe[q]:z=Xe,I.copy(A.viewport),F.copy(A.scissor),H=A.scissorTest}else I.copy(Ce).multiplyScalar(G).floor(),F.copy(Be).multiplyScalar(G).floor(),H=Qe;if(q!==0&&(z=qm),te.bindFramebuffer(S.FRAMEBUFFER,z)&&Y&&te.drawBuffers(A,z),te.viewport(I),te.scissor(F),te.setScissorTest(H),ge){const De=ee.get(A.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+B,De.__webglTexture,q)}else if(we){const De=ee.get(A.texture),We=B;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,De.__webglTexture,q,We)}else if(A!==null&&q!==0){const De=ee.get(A.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,De.__webglTexture,q)}y=-1},this.readRenderTargetPixels=function(A,B,q,Y,z,ge,we,Oe=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=ee.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(De=De[we]),De){te.bindFramebuffer(S.FRAMEBUFFER,De);try{const We=A.textures[Oe],Xe=We.format,ke=We.type;if(!j.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-Y&&q>=0&&q<=A.height-z&&(A.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+Oe),S.readPixels(B,q,Y,z,Se.convert(Xe),Se.convert(ke),ge))}finally{const We=L!==null?ee.get(L).__webglFramebuffer:null;te.bindFramebuffer(S.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(A,B,q,Y,z,ge,we,Oe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=ee.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(De=De[we]),De)if(B>=0&&B<=A.width-Y&&q>=0&&q<=A.height-z){te.bindFramebuffer(S.FRAMEBUFFER,De);const We=A.textures[Oe],Xe=We.format,ke=We.type;if(!j.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,et),S.bufferData(S.PIXEL_PACK_BUFFER,ge.byteLength,S.STREAM_READ),A.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+Oe),S.readPixels(B,q,Y,z,Se.convert(Xe),Se.convert(ke),0);const ut=L!==null?ee.get(L).__webglFramebuffer:null;te.bindFramebuffer(S.FRAMEBUFFER,ut);const Mt=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await My(S,Mt,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,et),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,ge),S.deleteBuffer(et),S.deleteSync(Mt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,B=null,q=0){const Y=Math.pow(2,-q),z=Math.floor(A.image.width*Y),ge=Math.floor(A.image.height*Y),we=B!==null?B.x:0,Oe=B!==null?B.y:0;Q.setTexture2D(A,0),S.copyTexSubImage2D(S.TEXTURE_2D,q,0,0,we,Oe,z,ge),te.unbindTexture()};const jm=S.createFramebuffer(),Ym=S.createFramebuffer();this.copyTextureToTexture=function(A,B,q=null,Y=null,z=0,ge=null){ge===null&&(z!==0?(Br("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=z,z=0):ge=0);let we,Oe,De,We,Xe,ke,et,ut,Mt;const gt=A.isCompressedTexture?A.mipmaps[ge]:A.image;if(q!==null)we=q.max.x-q.min.x,Oe=q.max.y-q.min.y,De=q.isBox3?q.max.z-q.min.z:1,We=q.min.x,Xe=q.min.y,ke=q.isBox3?q.min.z:0;else{const pn=Math.pow(2,-z);we=Math.floor(gt.width*pn),Oe=Math.floor(gt.height*pn),A.isDataArrayTexture?De=gt.depth:A.isData3DTexture?De=Math.floor(gt.depth*pn):De=1,We=0,Xe=0,ke=0}Y!==null?(et=Y.x,ut=Y.y,Mt=Y.z):(et=0,ut=0,Mt=0);const dt=Se.convert(B.format),He=Se.convert(B.type);let St;B.isData3DTexture?(Q.setTexture3D(B,0),St=S.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Q.setTexture2DArray(B,0),St=S.TEXTURE_2D_ARRAY):(Q.setTexture2D(B,0),St=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,B.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,B.unpackAlignment);const rt=S.getParameter(S.UNPACK_ROW_LENGTH),on=S.getParameter(S.UNPACK_IMAGE_HEIGHT),hr=S.getParameter(S.UNPACK_SKIP_PIXELS),an=S.getParameter(S.UNPACK_SKIP_ROWS),Qr=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,gt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,gt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,We),S.pixelStorei(S.UNPACK_SKIP_ROWS,Xe),S.pixelStorei(S.UNPACK_SKIP_IMAGES,ke);const xt=A.isDataArrayTexture||A.isData3DTexture,hn=B.isDataArrayTexture||B.isData3DTexture;if(A.isDepthTexture){const pn=ee.get(A),$t=ee.get(B),Qt=ee.get(pn.__renderTarget),La=ee.get($t.__renderTarget);te.bindFramebuffer(S.READ_FRAMEBUFFER,Qt.__webglFramebuffer),te.bindFramebuffer(S.DRAW_FRAMEBUFFER,La.__webglFramebuffer);for(let zi=0;zi<De;zi++)xt&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,ee.get(A).__webglTexture,z,ke+zi),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,ee.get(B).__webglTexture,ge,Mt+zi)),S.blitFramebuffer(We,Xe,we,Oe,et,ut,we,Oe,S.DEPTH_BUFFER_BIT,S.NEAREST);te.bindFramebuffer(S.READ_FRAMEBUFFER,null),te.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(z!==0||A.isRenderTargetTexture||ee.has(A)){const pn=ee.get(A),$t=ee.get(B);te.bindFramebuffer(S.READ_FRAMEBUFFER,jm),te.bindFramebuffer(S.DRAW_FRAMEBUFFER,Ym);for(let Qt=0;Qt<De;Qt++)xt?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,pn.__webglTexture,z,ke+Qt):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,pn.__webglTexture,z),hn?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,$t.__webglTexture,ge,Mt+Qt):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,$t.__webglTexture,ge),z!==0?S.blitFramebuffer(We,Xe,we,Oe,et,ut,we,Oe,S.COLOR_BUFFER_BIT,S.NEAREST):hn?S.copyTexSubImage3D(St,ge,et,ut,Mt+Qt,We,Xe,we,Oe):S.copyTexSubImage2D(St,ge,et,ut,We,Xe,we,Oe);te.bindFramebuffer(S.READ_FRAMEBUFFER,null),te.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else hn?A.isDataTexture||A.isData3DTexture?S.texSubImage3D(St,ge,et,ut,Mt,we,Oe,De,dt,He,gt.data):B.isCompressedArrayTexture?S.compressedTexSubImage3D(St,ge,et,ut,Mt,we,Oe,De,dt,gt.data):S.texSubImage3D(St,ge,et,ut,Mt,we,Oe,De,dt,He,gt):A.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,ge,et,ut,we,Oe,dt,He,gt.data):A.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,ge,et,ut,gt.width,gt.height,dt,gt.data):S.texSubImage2D(S.TEXTURE_2D,ge,et,ut,we,Oe,dt,He,gt);S.pixelStorei(S.UNPACK_ROW_LENGTH,rt),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,on),S.pixelStorei(S.UNPACK_SKIP_PIXELS,hr),S.pixelStorei(S.UNPACK_SKIP_ROWS,an),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Qr),ge===0&&B.generateMipmaps&&S.generateMipmap(St),te.unbindTexture()},this.copyTextureToTexture3D=function(A,B,q=null,Y=null,z=0){return Br('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,B,q,Y,z)},this.initRenderTarget=function(A){ee.get(A).__webglFramebuffer===void 0&&Q.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Q.setTextureCube(A,0):A.isData3DTexture?Q.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Q.setTexture2DArray(A,0):Q.setTexture2D(A,0),te.unbindTexture()},this.resetState=function(){R=0,D=0,L=null,te.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),n.unpackColorSpace=st._getUnpackColorSpace()}}const qA={__name:"D20Die3D",setup(t){const e=Le(null);let n,i,r,s,o,a,l=!1,c=0,u=0;function f(){const x=document.createElement("canvas");x.width=1024,x.height=64;const P=x.getContext("2d");P.fillStyle="#fff",P.fillRect(0,0,1024,64),P.textAlign="center",P.textBaseline="middle",P.fillStyle="#000",P.font="bold 20px Arial";const R=1024/20,D=R*.5;for(let L=0;L<20;L++)P.fillText((L+1).toString(),D+R*L,64/2);return new tM(x)}function d(E=1){const b=new wu(E,0),x=[];for(let R=0;R<20;R++){const D=(.067+R)/20,L=.25,y=(.933+R)/20,M=.25,I=(.5+R)/20;x.push([D,L],[y,M],[I,1])}const P=[];for(let R=0;R<x.length;R++)P.push(x[R][0],x[R][1]);return b.setAttribute("uv",new sn(P,2)),b}function h(){const E=f();return new bu({map:E,color:14737632})}function g(){!l&&s&&(s.rotation.y+=.008,s.rotation.x+=.003),n.render(i,r),o=requestAnimationFrame(g)}function v(E){l=!0,c=E.clientX,u=E.clientY}function m(){l=!1}function p(E){if(!l)return;const b=(E.clientX-c)*.01,x=(E.clientY-u)*.01;s.rotation.y+=b,s.rotation.x+=x,c=E.clientX,u=E.clientY}return Os(()=>{i=new Yy,r=new vn(40,1,.1,100),r.position.set(0,0,3.5),n=new $A({alpha:!0,antialias:!0}),n.setSize(120,120),n.setClearColor(0,0),e.value.appendChild(n.domElement);const E=new lM(16777215,.7);i.add(E);const b=new aM(16777215,.7);b.position.set(2,2,3),i.add(b);const x=d(1),P=h();s=new kn(x,P),i.add(s);const R=new nM(x);a=new eM(R,new Nm({color:0})),s.add(a),g(),n.domElement.addEventListener("pointerdown",v),window.addEventListener("pointerup",m),window.addEventListener("pointermove",p)}),ru(()=>{var b,x;cancelAnimationFrame(o),(b=n==null?void 0:n.dispose)==null||b.call(n),(x=i==null?void 0:i.clear)==null||x.call(i);const E=n==null?void 0:n.domElement;E&&E.removeEventListener("pointerdown",v),window.removeEventListener("pointerup",m),window.removeEventListener("pointermove",p)}),(E,b)=>(Ge(),Je("div",{ref_key:"container",ref:e,class:"d20-3d-canvas"},null,512))}},jA=dn(qA,[["__scopeId","data-v-1b83e24a"]]),YA={class:"cs-modal"},KA={class:"hero-grid"},ZA=["onClick"],JA=["src","alt"],QA={class:"hero-name"},ew={key:0,class:"skins-section"},tw={class:"skins-row"},nw=["onClick"],iw={class:"cs-buttons"},rw={__name:"CharacterSelectorModal",props:{modelValueCharacter:String,modelValueSkin:String,characters:Array},emits:["update:character","update:skin","confirm","cancel"],setup(t,{emit:e}){const n=t,i=e,r=Le(n.modelValueCharacter),s=Le(n.modelValueSkin);or(()=>n.modelValueCharacter,u=>r.value=u),or(()=>n.modelValueSkin,u=>s.value=u);const o=Et(()=>{const u=n.characters.find(f=>f.id===r.value);return u?u.skins:[]});function a(u){r.value=u,o.value.includes(s.value)||(s.value=o.value[0])}function l(u,f="blue"){return`/assets/images/characters/${u}/${u}_${f}.png`}function c(){i("update:character",r.value),i("update:skin",s.value),i("confirm")}return(u,f)=>(Ge(),Je("div",{class:"cs-overlay",onClick:f[1]||(f[1]=zs(d=>u.$emit("cancel"),["self"]))},[de("div",YA,[f[3]||(f[3]=de("h2",{class:"cs-title"},"Choose Your Hero",-1)),de("div",KA,[(Ge(!0),Je(Dt,null,kr(t.characters,d=>(Ge(),Je("div",{key:d.id,class:Li(["hero-card",{selected:d.id===r.value}]),onClick:h=>a(d.id)},[de("img",{src:l(d.id),alt:d.name,class:"hero-thumb"},null,8,JA),de("span",QA,_t(d.name),1)],10,ZA))),128))]),At(K_,{name:"fade"},{default:nu(()=>[r.value?(Ge(),Je("div",ew,[f[2]||(f[2]=de("h3",{class:"cs-subtitle"},"Choose Color",-1)),de("div",tw,[(Ge(!0),Je(Dt,null,kr(o.value,d=>(Ge(),Je("button",{key:d,class:Li(["skin-dot",{picked:d===s.value}]),style:ca({backgroundImage:`url(${l(r.value,d)})`}),onClick:h=>s.value=d},null,14,nw))),128))])])):Tt("",!0)]),_:1}),de("div",iw,[de("button",{class:"cs-btn primary",onClick:c},"Confirm"),de("button",{class:"cs-btn",onClick:f[0]||(f[0]=d=>u.$emit("cancel"))},"Cancel")])])]))}},sw=dn(rw,[["__scopeId","data-v-7f651a01"]]),ow={class:"options-modal-content"},aw={class:"options-group"},lw={key:0,class:"options-group"},cw={key:1,class:"options-group"},uw={class:"actions-group"},fw={__name:"OptionsModal",props:{context:{type:String,default:"in-game"}},emits:["close","new-run","main-menu","show-stats","change-skin"],setup(t,{emit:e}){const n=e,i=dm();function r(){const s=i.animationSpeedMultiplier===1?2:i.animationSpeedMultiplier===2?0:1;i.setAnimationSpeed(s)}return(s,o)=>(Ge(),Je("div",{class:"options-modal-overlay",onClick:o[5]||(o[5]=zs(a=>n("close"),["self"]))},[de("div",ow,[o[9]||(o[9]=de("h2",{class:"modal-title"},"Options",-1)),de("div",aw,[o[6]||(o[6]=de("label",null,"Game Speed",-1)),de("button",{class:"option-button",onClick:r}," Speed: "+_t(zt(i).animationSpeedMultiplier===0?"Instant":zt(i).animationSpeedMultiplier===2?"Fast":"Normal"),1)]),t.context==="in-game"?(Ge(),Je("div",lw,[o[7]||(o[7]=de("label",null,"Statistics",-1)),de("button",{class:"option-button",onClick:o[0]||(o[0]=a=>n("show-stats")),disabled:""},"View Statistics")])):Tt("",!0),t.context==="in-game"?(Ge(),Je("div",cw,[o[8]||(o[8]=de("label",null,"Appearance",-1)),de("button",{class:"option-button",onClick:o[1]||(o[1]=a=>n("change-skin"))},"Change Skin")])):Tt("",!0),de("div",uw,[t.context==="in-game"?(Ge(),Je(Dt,{key:0},[de("button",{class:"action-button primary",onClick:o[2]||(o[2]=a=>n("new-run"))},"New Run"),de("button",{class:"action-button",onClick:o[3]||(o[3]=a=>n("main-menu"))},"Main Menu")],64)):Tt("",!0),de("button",{class:"action-button secondary",onClick:o[4]||(o[4]=a=>n("close"))},"Back")])])]))}},dw=dn(fw,[["__scopeId","data-v-3c4ac659"]]),hw={class:"profile-modal-content"},pw={class:"profile-list-container"},mw=["onClick"],gw={class:"profile-name"},_w={class:"profile-stats"},vw={key:0,class:"form-container"},xw={key:0},Sw={key:1},yw={class:"actions-group"},Mw=8,Ew={__name:"ProfileModal",emits:["close","login-success"],setup(t,{emit:e}){const n=e,i=wi(),r=Le("list"),s=Le(""),o=Le({username:"",password:""}),a=Le(""),l=Le("");Os(()=>{i.fetchAllUsernames()});function c(d){s.value=d,r.value="login",o.value.username=d,o.value.password="",a.value=""}async function u(){const d=await i.login(s.value,o.value.password);d.success?(l.value="success",a.value="Login successful!",setTimeout(()=>{n("login-success"),n("close")},1e3)):(l.value="error",a.value=d.message)}async function f(){const d=await i.register(o.value.username,o.value.password);d.success?(l.value="success",a.value="Account created! You can now log in.",r.value="list",o.value={username:"",password:""}):(l.value="error",a.value=d.message)}return(d,h)=>(Ge(),Je("div",{class:"profile-modal-overlay",onClick:h[4]||(h[4]=zs(g=>d.$emit("close"),["self"]))},[de("div",hw,[h[7]||(h[7]=de("h2",{class:"modal-title"},"Select or Create a Profile",-1)),de("div",pw,[de("button",{class:"profile-item create-new",onClick:h[0]||(h[0]=g=>r.value="register")},h[5]||(h[5]=[de("div",{class:"profile-icon"},"➕",-1),de("div",{class:"profile-name"},"Create New",-1)])),(Ge(!0),Je(Dt,null,kr(zt(i).allUsernames,g=>(Ge(),Je("button",{key:g._id,class:Li(["profile-item",{selected:s.value===g.username}]),onClick:v=>c(g.username)},[h[6]||(h[6]=de("div",{class:"profile-icon"},"👤",-1)),de("div",gw,_t(g.username),1),de("div",_w,[de("div",null,"🏆 "+_t(g.totalWins||0),1),de("div",null,"⭐ "+_t(g.unlockedAchievements||0)+"/"+_t(Mw),1)])],10,mw))),128))]),r.value==="login"||r.value==="register"?(Ge(),Je("div",vw,[r.value==="login"?(Ge(),Je("h3",xw,"Login as "+_t(s.value),1)):Tt("",!0),r.value==="register"?(Ge(),Je("h3",Sw,"Create New Profile")):Tt("",!0),r.value==="register"?Hu((Ge(),Je("input",{key:2,"onUpdate:modelValue":h[1]||(h[1]=g=>o.value.username=g),type:"text",placeholder:"Username",class:"input-field"},null,512)),[[yf,o.value.username]]):Tt("",!0),Hu(de("input",{"onUpdate:modelValue":h[2]||(h[2]=g=>o.value.password=g),type:"password",placeholder:"Password",class:"input-field"},null,512),[[yf,o.value.password]]),a.value?(Ge(),Je("div",{key:3,class:Li(["message",l.value])},_t(a.value),3)):Tt("",!0),r.value==="login"?(Ge(),Je("button",{key:4,onClick:u,class:"action-button"},"Login")):Tt("",!0),r.value==="register"?(Ge(),Je("button",{key:5,onClick:f,class:"action-button"}," Create Account ")):Tt("",!0)])):Tt("",!0),de("div",yw,[de("button",{class:"action-button secondary",onClick:h[3]||(h[3]=g=>d.$emit("close"))},"Back")])])]))}},bw=dn(Ew,[["__scopeId","data-v-9af9ca09"]]),Tw={class:"icon"},Aw={class:"details"},ww={class:"name"},Rw={class:"description"},Cw={key:0,class:"date"},Pw={__name:"AchievementItem",props:{achievement:{type:Object,required:!0}},setup(t){const e=t,n=Et(()=>e.achievement.date?new Date(e.achievement.date).toLocaleDateString():"");return(i,r)=>(Ge(),Je("div",{class:Li(["achievement-item",{unlocked:t.achievement.unlocked}])},[de("div",Tw,_t(t.achievement.unlocked?"🏆":"🔒"),1),de("div",Aw,[de("h4",ww,_t(t.achievement.name),1),de("p",Rw,_t(t.achievement.description),1),t.achievement.unlocked&&t.achievement.date?(Ge(),Je("p",Cw," Unlocked: "+_t(n.value),1)):Tt("",!0)])],2))}},Dw=dn(Pw,[["__scopeId","data-v-838d2c5a"]]),Lw={class:"achievements-section"},Uw={class:"achievements-grid"},Iw={__name:"AchievementsList",props:{achievements:{type:Array,required:!0},total:{type:Number,required:!0}},setup(t){const e=t,n=Et(()=>e.achievements.filter(i=>i.unlocked).length);return(i,r)=>(Ge(),Je("div",Lw,[de("h2",null,"Achievements ("+_t(n.value)+" / "+_t(t.total)+")",1),de("div",Uw,[(Ge(!0),Je(Dt,null,kr(t.achievements,s=>(Ge(),Ai(Dw,{key:s.id,achievement:s},null,8,["achievement"]))),128))])]))}},Nw=dn(Iw,[["__scopeId","data-v-47f98c51"]]),Fw={class:"modal-content"},Ow={class:"dice-stats-grid"},Bw={class:"die-name"},zw={class:"die-count"},kw={key:0,class:"no-stats"},Hw={__name:"DiceStatsModal",props:{diceStats:{type:Object,default:()=>({})}},setup(t){const e=t,n=Et(()=>e.diceStats?Object.entries(e.diceStats).sort((i,r)=>r[1]-i[1]):[]);return(i,r)=>(Ge(),Je("div",{class:"modal-overlay",onClick:r[1]||(r[1]=zs(s=>i.$emit("close"),["self"]))},[de("div",Fw,[r[2]||(r[2]=de("h2",null,"Dice Stats",-1)),de("div",Ow,[(Ge(!0),Je(Dt,null,kr(n.value,([s,o])=>(Ge(),Je("div",{key:s,class:"dice-stat-item"},[de("span",Bw,_t(s),1),de("span",zw,_t(o)+" times",1)]))),128)),n.value.length===0?(Ge(),Je("div",kw,"No dice rolled yet!")):Tt("",!0)]),de("button",{onClick:r[0]||(r[0]=s=>i.$emit("close")),class:"close-button"},"Close")])]))}},Vw=dn(Hw,[["__scopeId","data-v-9734d4d4"]]),Gw={class:"statistics-section"},Ww={class:"stats-grid"},Xw={class:"stat-item"},$w={class:"stat-value"},qw={class:"stat-item"},jw={class:"stat-value"},Yw={class:"stat-item"},Kw={class:"stat-value"},Zw={class:"stat-item"},Jw={class:"stat-value"},Qw={class:"stat-item"},eR={class:"stat-value"},tR={class:"stat-item"},nR={class:"stat-value"},iR={__name:"PlayerStats",props:{stats:{type:Object,required:!0}},setup(t){const e=Le(!1);return(n,i)=>(Ge(),Je(Dt,null,[de("div",Gw,[i[8]||(i[8]=de("h2",null,"Statistics",-1)),de("div",Ww,[de("div",Xw,[de("div",$w,_t(t.stats.totalWins||0),1),i[2]||(i[2]=de("div",{class:"stat-label"},"Total Wins",-1))]),de("div",qw,[de("div",jw,_t(t.stats.totalDiceRolled||0),1),i[3]||(i[3]=de("div",{class:"stat-label"},"Dice Rolled",-1))]),de("div",Yw,[de("div",Kw,_t(t.stats.totalBossesDefeated||0),1),i[4]||(i[4]=de("div",{class:"stat-label"},"Bosses Defeated",-1))]),de("div",Zw,[de("div",Jw,_t(t.stats.totalBribedBosses||0),1),i[5]||(i[5]=de("div",{class:"stat-label"},"Bosses Bribed",-1))]),de("div",Qw,[de("div",eR,_t(t.stats.totalPerfectDefeats||0),1),i[6]||(i[6]=de("div",{class:"stat-label"},"Perfect Defeats",-1))]),de("div",tR,[de("div",nR,"$"+_t(t.stats.maxMoneyInRun||0),1),i[7]||(i[7]=de("div",{class:"stat-label"},"Max Money in a Run",-1))])]),de("button",{onClick:i[0]||(i[0]=r=>e.value=!0),class:"dice-stats-button"},"View Dice Stats")]),e.value?(Ge(),Ai(Vw,{key:0,"dice-stats":t.stats.diceStats,onClose:i[1]||(i[1]=r=>e.value=!1)},null,8,["dice-stats"])):Tt("",!0)],64))}},rR=dn(iR,[["__scopeId","data-v-3c6d0e7b"]]),sR={class:"modal-content"},oR={key:0},aR={class:"collection-menu"},lR={key:1},cR={key:2},uR={__name:"CollectionModal",emits:["close"],setup(t){const e=wi(),n=Le("main"),i=[{id:"first_boss",name:"I shall pass!",description:"Defeat your first boss."},{id:"first_bribe",name:"The Temptation",description:"Bribe your first boss."},{id:"pouch_full",name:"No Room for More",description:"Have your Dice Pouch full."},{id:"roll_100",name:"Roller!",description:"Roll a die 100 times."},{id:"money_500",name:"Kilos on Your Pockets",description:"Have more than $500 in one run."},{id:"clear_run",name:"Area Cleared!",description:"End a run defeating all bosses."},{id:"perfect_run",name:"Glorious Victory!",description:"End a run defeating all bosses perfectly."},{id:"bribe_all",name:"Master of Persuasion",description:"Bribe all bosses in a single run."}],r=i.length,s=Et(()=>{var a;const o=((a=e.currentUser)==null?void 0:a.achievements)||{};return i.map(l=>{var c,u;return{...l,unlocked:((c=o[l.id])==null?void 0:c.unlocked)||!1,date:(u=o[l.id])==null?void 0:u.date}})});return(o,a)=>(Ge(),Je("div",{class:"modal-overlay",onClick:a[5]||(a[5]=zs(l=>o.$emit("close"),["self"]))},[de("div",sR,[n.value==="main"?(Ge(),Je("div",oR,[a[7]||(a[7]=de("h2",{class:"modal-title"},"Collection",-1)),de("div",aR,[de("button",{onClick:a[0]||(a[0]=l=>n.value="achievements")},"Achievements"),de("button",{onClick:a[1]||(a[1]=l=>n.value="stats")},"Statistics"),a[6]||(a[6]=de("button",{disabled:""},"Encyclopedia",-1))])])):Tt("",!0),n.value==="achievements"?(Ge(),Je("div",lR,[de("button",{class:"back-button",onClick:a[2]||(a[2]=l=>n.value="main")},"← Back"),At(Nw,{achievements:s.value,total:zt(r)},null,8,["achievements","total"])])):Tt("",!0),n.value==="stats"?(Ge(),Je("div",cR,[de("button",{class:"back-button",onClick:a[3]||(a[3]=l=>n.value="main")},"← Back"),At(rR,{stats:zt(e).currentUser.stats},null,8,["stats"])])):Tt("",!0),de("button",{class:"close-button",onClick:a[4]||(a[4]=l=>o.$emit("close"))},"Close")])]))}},fR=dn(uR,[["__scopeId","data-v-5cc37228"]]),dR={class:"main-menu-bg"},hR={class:"main-menu-container"},pR={class:"main-menu-header"},mR={class:"main-menu-buttons-grid"},gR={class:"main-buttons"},_R={class:"side-buttons"},vR=["disabled"],xR={__name:"HomeView",setup(t){const e=J0(),n=dm(),i=wi(),r=Le(null),s=Le(!1),o=Le(!1),a=Le(!1),l=Le(!1),c=[{id:"knight",name:"Knight",skins:["blue","green","red","black"]},{id:"thief",name:"Thief",skins:["blue","green","purple","red"]},{id:"wizard",name:"Wizard",skins:["blue","green","purple","red"]}],u=Et(()=>i.isAuthenticated&&i.currentUser?i.currentUser.username:"[None]");async function f(){s.value=!1;try{const d=await n.createGame();d&&d._id&&(r.value&&r.value.pause(),e.push({name:"Game",params:{sessionId:d._id}}))}catch(d){console.error("Could not start a new game after character selection:",d)}}return Os(()=>{r.value&&(r.value.volume=.7,r.value.play().catch(()=>{}))}),su(()=>{r.value&&r.value.pause()}),(d,h)=>(Ge(),Je("div",dR,[de("div",hR,[de("div",pR,[At(jA,{class:"d20-side"}),h[10]||(h[10]=de("h1",{class:"main-menu-title"},[de("span",null,"DICE OR "),de("span",{class:"red-die"},"DIE")],-1))]),de("div",mR,[de("div",gR,[de("button",{class:"menu-btn play-btn",onClick:h[0]||(h[0]=g=>s.value=!0)},"PLAY")]),de("div",_R,[de("button",{class:"menu-btn profile-btn",onClick:h[1]||(h[1]=g=>a.value=!0)}," Profile: "+_t(u.value),1),de("button",{class:"menu-btn options-btn",onClick:h[2]||(h[2]=g=>o.value=!0)}," Options "),de("button",{class:"menu-btn collection-btn",disabled:!zt(i).isAuthenticated,onClick:h[3]||(h[3]=g=>l.value=!0)}," Collection ",8,vR)])]),de("audio",{ref_key:"mainMenuAudio",ref:r,autoplay:"",loop:"",hidden:""},h[11]||(h[11]=[de("source",{src:Q0,type:"audio/wav"},null,-1),hp(" Your browser does not support the audio element. ")]),512)]),s.value?(Ge(),Ai(sw,{key:0,character:zt(n).playerCharacter,"onUpdate:character":h[4]||(h[4]=g=>zt(n).playerCharacter=g),skin:zt(n).playerSkin,"onUpdate:skin":h[5]||(h[5]=g=>zt(n).playerSkin=g),characters:c,onConfirm:f,onCancel:h[6]||(h[6]=g=>s.value=!1)},null,8,["character","skin"])):Tt("",!0),a.value?(Ge(),Ai(bw,{key:1,onClose:h[7]||(h[7]=g=>a.value=!1)})):Tt("",!0),o.value?(Ge(),Ai(dw,{key:2,context:"main-menu",onClose:h[8]||(h[8]=g=>o.value=!1)})):Tt("",!0),l.value?(Ge(),Ai(fR,{key:3,onClose:h[9]||(h[9]=g=>l.value=!1)})):Tt("",!0)]))}},SR=dn(xR,[["__scopeId","data-v-2e5bb7ba"]]),yR=[{path:"/",name:"Home",component:SR},{path:"/game/:sessionId",name:"Game",component:()=>Af(()=>import("./GameView-GHCDIk5Y.js"),__vite__mapDeps([0,1]))},{path:"/login",name:"Login",component:()=>Af(()=>import("./LoginView-B_S3Tbqb.js"),__vite__mapDeps([2,3]))}],MR=K0({history:T0("/"),routes:yR}),Cu=Av($v);Cu.use(Cv());Cu.use(MR);const rh=wi();rh.isAuthenticated&&rh.fetchCurrentUser();Cu.mount("#app");export{sw as C,Dt as F,dw as O,gv as T,dn as _,Je as a,de as b,Et as c,Le as d,Tt as e,At as f,nu as g,ca as h,zt as i,Ai as j,J0 as k,zs as l,Os as m,Li as n,Ge as o,su as p,K_ as q,kr as r,ER as s,_t as t,dm as u,Hu as v,or as w,yf as x,Ft as y};

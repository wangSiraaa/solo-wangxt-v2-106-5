(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Lu(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ft={},kr=[],Ei=()=>{},wd=()=>!1,Qo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),el=n=>n.startsWith("onUpdate:"),hn=Object.assign,Iu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},hg=Object.prototype.hasOwnProperty,wt=(n,e)=>hg.call(n,e),lt=Array.isArray,Mr=n=>Ra(n)==="[object Map]",nr=n=>Ra(n)==="[object Set]",Th=n=>Ra(n)==="[object Date]",ft=n=>typeof n=="function",qt=n=>typeof n=="string",Ai=n=>typeof n=="symbol",It=n=>n!==null&&typeof n=="object",Rd=n=>(It(n)||ft(n))&&ft(n.then)&&ft(n.catch),Cd=Object.prototype.toString,Ra=n=>Cd.call(n),fg=n=>Ra(n).slice(8,-1),Pd=n=>Ra(n)==="[object Object]",Uu=n=>qt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ta=Lu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),tl=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},dg=/-\w/g,si=tl(n=>n.replace(dg,e=>e.slice(1).toUpperCase())),pg=/\B([A-Z])/g,jr=tl(n=>n.replace(pg,"-$1").toLowerCase()),Dd=tl(n=>n.charAt(0).toUpperCase()+n.slice(1)),Tl=tl(n=>n?`on${Dd(n)}`:""),xi=(n,e)=>!Object.is(n,e),Ao=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ld=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},nl=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Ah;const il=()=>Ah||(Ah=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Nu(n){if(lt(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=qt(i)?vg(i):Nu(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(qt(n)||It(n))return n}const mg=/;(?![^(]*\))/g,gg=/:([^]+)/,_g=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function vg(n){const e={};return n.replace(_g,t=>t.startsWith("/*")?"":t).split(mg).forEach(t=>{if(t){const i=t.split(gg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function on(n){let e="";if(qt(n))e=n;else if(lt(n))for(let t=0;t<n.length;t++){const i=on(n[t]);i&&(e+=i+" ")}else if(It(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const xg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sg=Lu(xg);function Id(n){return!!n||n===""}function yg(n,e,t){if(n.length!==e.length)return!1;let i=!0;for(let r=0;i&&r<n.length;r++)i=ir(n[r],e[r],t);return i}function wh(n,e,t){if(n.size!==e.size)return!1;const i=Array.from(e),r=new Uint8Array(i.length);for(const s of n){let a=-1;for(let o=0;o<i.length;o++)if(!r[o]&&ir(s,i[o],t)){a=o;break}if(a<0)return!1;r[a]=1}return!0}function Mg(n,e,t){let i=Mr(n),r=Mr(e);if(i||r||(i=nr(n),r=nr(e),i||r))return i&&r?wh(n,e,t):!1;const s=Object.keys(n).length,a=Object.keys(e).length;if(s!==a)return!1;for(const o in n){const l=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!ir(n[o],e[o],t))return!1}return String(n)===String(e)}function Rh(n,e,t,i){t||(t=[new Map,new Map]);const[r,s]=t;if(r.has(n)||s.has(e))return r.get(n)===e&&s.get(e)===n;r.set(n,e),s.set(e,n);const a=i(n,e,t);return r.delete(n),s.delete(e),a}function ir(n,e,t){if(n===e)return!0;let i=Th(n),r=Th(e);return i||r?i&&r?n.getTime()===e.getTime():!1:(i=Ai(n),r=Ai(e),i||r?n===e:(i=lt(n),r=lt(e),i||r?i&&r?Rh(n,e,t,yg):!1:(i=It(n),r=It(e),i||r?!i||!r?!1:Rh(n,e,t,Mg):String(n)===String(e))))}function Fu(n,e){return n.findIndex(t=>ir(t,e))}const Ud=n=>!!(n&&n.__v_isRef===!0),ze=n=>qt(n)?n:n==null?"":lt(n)||It(n)&&(n.toString===Cd||!ft(n.toString))?Ud(n)?ze(n.value):JSON.stringify(n,Nd,2):String(n),Nd=(n,e)=>Ud(e)?Nd(n,e.value):Mr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Al(i,s)+" =>"]=r,t),{})}:nr(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Al(t))}:Ai(e)?Al(e):It(e)&&!lt(e)&&!Pd(e)?String(e):e,Al=(n,e="")=>{var t;return Ai(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ln;class bg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&ln&&(ln.active?(this.parent=ln,this.index=(ln.scopes||(ln.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const r=this.scopes.slice();for(e=0,t=r.length;e<t;e++)r[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=ln;try{return ln=this,e()}finally{ln=t}}}on(){++this._on===1&&(this.prevScope=ln,ln=this)}off(){if(this._on>0&&--this._on===0){if(ln===this)ln=this.prevScope;else{let e=ln;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(t=0,i=r.length;t<i;t++)r[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Eg(){return ln}let Ot;const wl=new WeakSet;class Fd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ln&&(ln.active?ln.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wl.has(this)&&(wl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Bd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ch(this),zd(this);const e=Ot,t=ai;Ot=this,ai=!0;try{return this.fn()}finally{Vd(this),Ot=e,ai=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)zu(e);this.deps=this.depsTail=void 0,Ch(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ac(this)&&this.run()}get dirty(){return Ac(this)}}let Od=0,na,ia;function Bd(n,e=!1){if(n.flags|=8,e){n.next=ia,ia=n;return}n.next=na,na=n}function Ou(){Od++}function Bu(){if(--Od>0)return;if(ia){let e=ia;for(ia=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;na;){let e=na;for(na=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function zd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Vd(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),zu(i),Tg(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Ac(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(kd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function kd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===fa)||(n.globalVersion=fa,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Ac(n))))return;n.flags|=2;const e=n.dep,t=Ot,i=ai;Ot=n,ai=!0;try{zd(n);const r=n.fn(n._value);(e.version===0||xi(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ot=t,ai=i,Vd(n),n.flags&=-3}}function zu(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)zu(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Tg(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let ai=!0;const Hd=[];function rr(){Hd.push(ai),ai=!1}function sr(){const n=Hd.pop();ai=n===void 0?!0:n}function Ch(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ot;Ot=void 0;try{e()}finally{Ot=t}}}let fa=0;class Ag{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Vu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ot||!ai||Ot===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ot)t=this.activeLink=new Ag(Ot,this),Ot.deps?(t.prevDep=Ot.depsTail,Ot.depsTail.nextDep=t,Ot.depsTail=t):Ot.deps=Ot.depsTail=t,Gd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Ot.depsTail,t.nextDep=void 0,Ot.depsTail.nextDep=t,Ot.depsTail=t,Ot.deps===t&&(Ot.deps=i)}return t}trigger(e){this.version++,fa++,this.notify(e)}notify(e){Ou();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Bu()}}}function Gd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Gd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const wc=new WeakMap,Xr=Symbol(""),Rc=Symbol(""),da=Symbol("");function pn(n,e,t){if(ai&&Ot){let i=wc.get(n);i||wc.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Vu),r.map=i,r.key=t),r.track()}}function $i(n,e,t,i,r,s){const a=wc.get(n);if(!a){fa++;return}const o=l=>{l&&l.trigger()};if(Ou(),e==="clear")a.forEach(o);else{const l=lt(n),c=l&&Uu(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===da||!Ai(h)&&h>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(da)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Xr)),Mr(n)&&o(a.get(Rc)));break;case"delete":l||(o(a.get(Xr)),Mr(n)&&o(a.get(Rc)));break;case"set":Mr(n)&&o(a.get(Xr));break}}Bu()}function Qr(n){const e=At(n);return e===n||(pn(e,"iterate",da),qn(n))?e:wi(n)?br(n)?e.map(t=>Er(Yn(t))):e.map(Er):e.map(Yn)}function rl(n){return pn(n=At(n),"iterate",da),n}function gi(n,e){return wi(n)?Er(br(n)?Yn(e):e):Yn(e)}const wg={__proto__:null,[Symbol.iterator](){return Rl(this,Symbol.iterator,n=>gi(this,n))},concat(...n){return Qr(this).concat(...n.map(e=>lt(e)?Qr(e):e))},entries(){return Rl(this,"entries",n=>(n[1]=gi(this,n[1]),n))},every(n,e){return Fi(this,"every",n,e,void 0,arguments)},filter(n,e){return Fi(this,"filter",n,e,t=>t.map(i=>gi(this,i)),arguments)},find(n,e){return Fi(this,"find",n,e,t=>gi(this,t),arguments)},findIndex(n,e){return Fi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Fi(this,"findLast",n,e,t=>gi(this,t),arguments)},findLastIndex(n,e){return Fi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Fi(this,"forEach",n,e,void 0,arguments)},includes(...n){return Cl(this,"includes",n)},indexOf(...n){return Cl(this,"indexOf",n)},join(n){return Qr(this).join(n)},lastIndexOf(...n){return Cl(this,"lastIndexOf",n)},map(n,e){return Fi(this,"map",n,e,void 0,arguments)},pop(){return zs(this,"pop")},push(...n){return zs(this,"push",n)},reduce(n,...e){return Ph(this,"reduce",n,e)},reduceRight(n,...e){return Ph(this,"reduceRight",n,e)},shift(){return zs(this,"shift")},some(n,e){return Fi(this,"some",n,e,void 0,arguments)},splice(...n){return zs(this,"splice",n)},toReversed(){return Qr(this).toReversed()},toSorted(n){return Qr(this).toSorted(n)},toSpliced(...n){return Qr(this).toSpliced(...n)},unshift(...n){return zs(this,"unshift",n)},values(){return Rl(this,"values",n=>gi(this,n))}};function Rl(n,e,t){const i=rl(n),r=i[e]();return i!==n&&!qn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const Rg=Array.prototype;function Fi(n,e,t,i,r,s){const a=rl(n),o=a!==n&&!qn(n),l=a[e];if(l!==Rg[e]){const f=l.apply(n,s);return o?Yn(f):f}let c=t;a!==n&&(o?c=function(f,h){return t.call(this,gi(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function Ph(n,e,t,i){const r=rl(n),s=r!==n&&!qn(n);let a=t,o=!1;r!==n&&(s?(o=i.length===0,a=function(c,u,f){return o&&(o=!1,c=gi(n,c)),t.call(this,c,gi(n,u),f,n)}):t.length>3&&(a=function(c,u,f){return t.call(this,c,u,f,n)}));const l=r[e](a,...i);return o?gi(n,l):l}function Cl(n,e,t){const i=At(n);pn(i,"iterate",da);const r=i[e](...t);return(r===-1||r===!1)&&Gu(t[0])?(t[0]=At(t[0]),i[e](...t)):r}function zs(n,e,t=[]){rr(),Ou();const i=At(n)[e].apply(n,t);return Bu(),sr(),i}const Cg=Lu("__proto__,__v_isRef,__isVue"),Wd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ai));function Pg(n){Ai(n)||(n=String(n));const e=At(this);return pn(e,"has",n),e.hasOwnProperty(n)}class Xd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Vg:Kd:s?Yd:qd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=lt(e);if(!r){let l;if(a&&(l=wg[t]))return l;if(t==="hasOwnProperty")return Pg}const o=Reflect.get(e,t,gn(e)?e:i);if((Ai(t)?Wd.has(t):Cg(t))||(r||pn(e,"get",t),s))return o;if(gn(o)){const l=a&&Uu(t)?o:o.value;return r&&It(l)?Pc(l):l}return It(o)?r?Pc(o):vs(o):o}}class $d extends Xd{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=lt(e)&&Uu(t);if(!this._isShallow){const c=wi(s);if(!qn(i)&&!wi(i)&&(s=At(s),i=At(i)),!a&&gn(s)&&!gn(i))return c||(s.value=i),!0}const o=a?Number(t)<e.length:wt(e,t),l=Reflect.set(e,t,i,gn(e)?e:r);return e===At(r)&&l&&(o?xi(i,s)&&$i(e,"set",t,i):$i(e,"add",t,i)),l}deleteProperty(e,t){const i=wt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&$i(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Ai(t)||!Wd.has(t))&&pn(e,"has",t),i}ownKeys(e){return pn(e,"iterate",lt(e)?"length":Xr),Reflect.ownKeys(e)}}class Dg extends Xd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Lg=new $d,Ig=new Dg,Ug=new $d(!0);const Cc=n=>n,ka=n=>Reflect.getPrototypeOf(n);function Ng(n,e,t){return function(...i){const r=this.__v_raw,s=At(r),a=Mr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?Cc:e?Er:Yn;return!e&&pn(s,"iterate",l?Rc:Xr),hn(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function Ha(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Fg(n,e){const t={get(r){const s=this.__v_raw,a=At(s),o=At(r);n||(xi(r,o)&&pn(a,"get",r),pn(a,"get",o));const{has:l}=ka(a),c=e?Cc:n?Er:Yn;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&pn(At(r),"iterate",Xr),r.size},has(r){const s=this.__v_raw,a=At(s),o=At(r);return n||(xi(r,o)&&pn(a,"has",r),pn(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=At(o),c=e?Cc:n?Er:Yn;return!n&&pn(l,"iterate",Xr),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return hn(t,n?{add:Ha("add"),set:Ha("set"),delete:Ha("delete"),clear:Ha("clear")}:{add(r){const s=At(this),a=ka(s),o=At(r),l=!e&&!qn(r)&&!wi(r)?o:r;return a.has.call(s,l)||xi(r,l)&&a.has.call(s,r)||xi(o,l)&&a.has.call(s,o)||(s.add(l),$i(s,"add",l,l)),this},set(r,s){!e&&!qn(s)&&!wi(s)&&(s=At(s));const a=At(this),{has:o,get:l}=ka(a);let c=o.call(a,r);c||(r=At(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?xi(s,u)&&$i(a,"set",r,s):$i(a,"add",r,s),this},delete(r){const s=At(this),{has:a,get:o}=ka(s);let l=a.call(s,r);l||(r=At(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&$i(s,"delete",r,void 0),c},clear(){const r=At(this),s=r.size!==0,a=r.clear();return s&&$i(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Ng(r,n,e)}),t}function ku(n,e){const t=Fg(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(wt(t,r)&&r in i?t:i,r,s)}const Og={get:ku(!1,!1)},Bg={get:ku(!1,!0)},zg={get:ku(!0,!1)};const qd=new WeakMap,Yd=new WeakMap,Kd=new WeakMap,Vg=new WeakMap;function kg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vs(n){return wi(n)?n:Hu(n,!1,Lg,Og,qd)}function Hg(n){return Hu(n,!1,Ug,Bg,Yd)}function Pc(n){return Hu(n,!0,Ig,zg,Kd)}function Hu(n,e,t,i,r){if(!It(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const s=r.get(n);if(s)return s;const a=kg(fg(n));if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function br(n){return wi(n)?br(n.__v_raw):!!(n&&n.__v_isReactive)}function wi(n){return!!(n&&n.__v_isReadonly)}function qn(n){return!!(n&&n.__v_isShallow)}function Gu(n){return n?!!n.__v_raw:!1}function At(n){const e=n&&n.__v_raw;return e?At(e):n}function Gg(n){return!wt(n,"__v_skip")&&Object.isExtensible(n)&&Ld(n,"__v_skip",!0),n}const Yn=n=>It(n)?vs(n):n,Er=n=>It(n)?Pc(n):n;function gn(n){return n?n.__v_isRef===!0:!1}function Yt(n){return Zd(n,!1)}function Oi(n){return Zd(n,!0)}function Zd(n,e){return gn(n)?n:new Wg(n,e)}class Wg{constructor(e,t){this.dep=new Vu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:At(e),this._value=t?e:Yn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||qn(e)||wi(e);e=i?e:At(e),xi(e,t)&&(this._rawValue=e,this._value=i?e:Yn(e),this.dep.trigger())}}function Hn(n){return gn(n)?n.value:n}const Xg={get:(n,e,t)=>e==="__v_raw"?n:Hn(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return gn(r)&&!gn(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Jd(n){return br(n)?n:new Proxy(n,Xg)}class $g{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Vu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=fa-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ot!==this)return Bd(this,!0),!0}get value(){const e=this.dep.track();return kd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function qg(n,e,t=!1){let i,r;return ft(n)?i=n:(i=n.get,r=n.set),new $g(i,r,t)}const Ga={},Oo=new WeakMap;let Vr;function Yg(n,e=!1,t=Vr){if(t){let i=Oo.get(t);i||Oo.set(t,i=[]),i.push(n)}}function Kg(n,e,t=Ft){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=y=>r?y:qn(y)||r===!1||r===0?qi(y,1):qi(y);let u,f,h,d,_=!1,M=!1;if(gn(n)?(f=()=>n.value,_=qn(n)):br(n)?(f=()=>c(n),_=!0):lt(n)?(M=!0,_=n.some(y=>br(y)||qn(y)),f=()=>n.map(y=>{if(gn(y))return y.value;if(br(y))return c(y);if(ft(y))return l?l(y,2):y()})):ft(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){rr();try{h()}finally{sr()}}const y=Vr;Vr=u;try{return l?l(n,3,[d]):n(d)}finally{Vr=y}}:f=Ei,e&&r){const y=f,w=r===!0?1/0:r;f=()=>qi(y(),w)}const m=Eg(),p=()=>{u.stop(),m&&m.active&&Iu(m.effects,u)};if(s&&e){const y=e;e=(...w)=>{const A=y(...w);return p(),A}}let T=M?new Array(n.length).fill(Ga):Ga;const D=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const w=u.run();if(y||r||_||(M?w.some((A,F)=>xi(A,T[F])):xi(w,T))){h&&h();const A=Vr;Vr=u;try{const F=[w,T===Ga?void 0:M&&T[0]===Ga?[]:T,d];T=w,l?l(e,3,F):e(...F)}finally{Vr=A}}}else u.run()};return o&&o(D),u=new Fd(f),u.scheduler=a?()=>a(D,!1):D,d=y=>Yg(y,!1,u),h=u.onStop=()=>{const y=Oo.get(u);if(y){if(l)l(y,4);else for(const w of y)w();Oo.delete(u)}},e?i?D(!0):T=u.run():a?a(D.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function qi(n,e=1/0,t){if(e<=0||!It(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,gn(n))qi(n.value,e,t);else if(lt(n))for(let i=0;i<n.length;i++)qi(n[i],e,t);else if(nr(n)||Mr(n))n.forEach(i=>{qi(i,e,t)});else if(Pd(n)){for(const i in n)qi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&qi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ca(n,e,t,i){try{return i?n(...i):n()}catch(r){sl(r,e,t)}}function li(n,e,t,i){if(ft(n)){const r=Ca(n,e,t,i);return r&&Rd(r)&&r.catch(s=>{sl(s,e,t)}),r}if(lt(n)){const r=[];for(let s=0;s<n.length;s++)r.push(li(n[s],e,t,i));return r}}function sl(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ft;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){rr(),Ca(s,null,10,[n,l,c]),sr();return}}Zg(n,t,r,i,a)}function Zg(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Mn=[];let mi=-1;const xs=[];let xr=null,ds=0;const jd=Promise.resolve();let Bo=null;function Wu(n){const e=Bo||jd;return n?e.then(this?n.bind(this):n):e}function Jg(n){let e=mi+1,t=Mn.length;for(;e<t;){const i=e+t>>>1,r=Mn[i],s=pa(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Xu(n){if(!(n.flags&1)){const e=pa(n),t=Mn[Mn.length-1];!t||!(n.flags&2)&&e>=pa(t)?Mn.push(n):Mn.splice(Jg(e),0,n),n.flags|=1,Qd()}}function Qd(){Bo||(Bo=jd.then(tp))}function jg(n){if(!lt(n))xr&&n.id===-1?xr.splice(ds+1,0,n):n.flags&1||(xs.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)xs.push(n[e]);Qd()}function Dh(n,e,t=mi+1){for(;t<Mn.length;t++){const i=Mn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Mn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ep(n){if(xs.length){const e=[...new Set(xs)].sort((t,i)=>pa(t)-pa(i));if(xs.length=0,xr){for(let t=0;t<e.length;t++)xr.push(e[t]);return}for(xr=e,ds=0;ds<xr.length;ds++){const t=xr[ds];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}xr=null,ds=0}}const pa=n=>n.id==null?n.flags&2?-1:1/0:n.id;function tp(n){try{for(mi=0;mi<Mn.length;mi++){const e=Mn[mi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ca(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;mi<Mn.length;mi++){const e=Mn[mi];e&&(e.flags&=-2)}mi=-1,Mn.length=0,ep(),Bo=null,(Mn.length||xs.length)&&tp()}}let $n=null,np=null;function zo(n){const e=$n;return $n=n,np=n&&n.type.__scopeId||null,e}function Qg(n,e=$n,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Hh(-1);const s=zo(e),a=$r.length;let o;try{o=n(...r)}finally{for(let l=$r.length;l>a;l--)Ap();zo(s),i._d&&Hh(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Jt(n,e){if($n===null)return n;const t=ul($n),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=Ft]=e[r];s&&(ft(s)&&(s={mounted:s,updated:s}),s.deep&&qi(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function Dr(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(rr(),li(l,t,8,[n.el,o,n,e]),sr())}}function e_(n,e){if(bn){let t=bn.provides;const i=bn.parent&&bn.parent.provides;i===t&&(t=bn.provides=Object.create(i)),t[n]=e}}function wo(n,e,t=!1){const i=j_();if(i||Ss){let r=Ss?Ss._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ft(e)?e.call(i&&i.proxy):e}}const t_=Symbol.for("v-scx"),n_=()=>wo(t_);function Hr(n,e,t){return ip(n,e,t)}function ip(n,e,t=Ft){const{immediate:i,deep:r,flush:s,once:a}=t,o=hn({},t),l=e&&i||!e&&s!=="post";let c;if(_a){if(s==="sync"){const d=n_();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Ei,d.resume=Ei,d.pause=Ei,d}}const u=bn;o.call=(d,_,M)=>li(d,u,_,M);let f=!1;s==="post"?o.scheduler=d=>{Pn(d,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(d,_)=>{_?d():Xu(d)}),o.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=Kg(n,e,o);return _a&&(c?c.push(h):l&&h()),h}function i_(n,e,t){const i=this.proxy,r=qt(n)?n.includes(".")?rp(i,n):()=>i[n]:n.bind(i,i);let s;ft(e)?s=e:(s=e.handler,t=e);const a=Pa(this),o=ip(r,s.bind(i),t);return a(),o}function rp(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const r_=Symbol("_vte"),al=n=>n.__isTeleport,Pl=Symbol("_leaveCb");function s_(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==ar){e=t;break}}return e}function sp(n){if(!qu(n))return al(n.type)&&n.children?s_(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&ft(t.default))return t.default()}}function $u(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;$u(al(t.type)&&sp(t)||t,e)}else n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function a_(n,e){return ft(n)?hn({name:n.name},e,{setup:n}):n}function ap(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Lh(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Vo=new WeakMap;function ra(n,e,t,i,r=!1){if(lt(n)){n.forEach((M,m)=>ra(M,e&&(lt(e)?e[m]:e),t,i,r));return}if(sa(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ra(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?ul(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===Ft?o.refs={}:o.refs,f=o.setupState,h=At(f),d=f===Ft?wd:M=>Lh(u,M)?!1:wt(h,M),_=(M,m)=>!(m&&Lh(u,m));if(c!=null&&c!==l){if(Ih(e),qt(c))u[c]=null,d(c)&&(f[c]=null);else if(gn(c)){const M=e;_(c,M.k)&&(c.value=null),M.k&&(u[M.k]=null)}}if(ft(l))Ca(l,o,12,[a,u]);else{const M=qt(l),m=gn(l);if(M||m){const p=()=>{if(n.f){const T=M?d(l)?f[l]:u[l]:_()||!n.k?l.value:u[n.k];if(r)lt(T)&&Iu(T,s);else if(lt(T))T.includes(s)||T.push(s);else if(M)u[l]=[s],d(l)&&(f[l]=u[l]);else{const D=[s];_(l,n.k)&&(l.value=D),n.k&&(u[n.k]=D)}}else M?(u[l]=a,d(l)&&(f[l]=a)):m&&(_(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const T=()=>{p(),Vo.delete(n)};T.id=-1,Vo.set(n,T),Pn(T,t)}else Ih(n),p()}}}function Ih(n){const e=Vo.get(n);e&&(e.flags|=8,Vo.delete(n))}il().requestIdleCallback;il().cancelIdleCallback;const sa=n=>!!n.type.__asyncLoader,qu=n=>n.type.__isKeepAlive;function o_(n,e){op(n,"a",e)}function l_(n,e){op(n,"da",e)}function op(n,e,t=bn){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(ol(e,i,t),t){let r=t.parent;for(;r&&r.parent;)qu(r.parent.vnode)&&c_(i,e,t,r),r=r.parent}}function c_(n,e,t,i){const r=ol(e,n,i,!0);lp(()=>{Iu(i[e],r)},t)}function ol(n,e,t=bn,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{rr();const o=Pa(t),l=li(e,t,n,a);return o(),sr(),l});return i?r.unshift(s):r.push(s),s}}const cr=n=>(e,t=bn)=>{(!_a||n==="sp")&&ol(n,(...i)=>e(...i),t)},u_=cr("bm"),Dc=cr("m"),h_=cr("bu"),f_=cr("u"),d_=cr("bum"),lp=cr("um"),p_=cr("sp"),m_=cr("rtg"),g_=cr("rtc");function __(n,e=bn){ol("ec",n,e)}const v_=Symbol.for("v-ndc");function Lr(n,e,t,i){let r;const s=t,a=lt(n);if(a||qt(n)){const o=a&&br(n);let l=!1,c=!1;o&&(l=!qn(n),c=wi(n),n=rl(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?Er(Yn(n[u])):Yn(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(It(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const Lc=n=>n?Pp(n)?ul(n):Lc(n.parent):null,aa=hn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Lc(n.parent),$root:n=>Lc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>up(n),$forceUpdate:n=>n.f||(n.f=()=>{Xu(n.update)}),$nextTick:n=>n.n||(n.n=Wu.bind(n.proxy)),$watch:n=>i_.bind(n)}),Dl=(n,e)=>n!==Ft&&!n.__isScriptSetup&&wt(n,e),x_={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Dl(i,e))return a[e]=1,i[e];if(r!==Ft&&wt(r,e))return a[e]=2,r[e];if(wt(s,e))return a[e]=3,s[e];if(t!==Ft&&wt(t,e))return a[e]=4,t[e];Ic&&(a[e]=0)}}const c=aa[e];let u,f;if(c)return e==="$attrs"&&pn(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==Ft&&wt(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,wt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Dl(r,e)?(r[e]=t,!0):i!==Ft&&wt(i,e)?(i[e]=t,!0):wt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==Ft&&o[0]!=="$"&&wt(n,o)||Dl(e,o)||wt(s,o)||wt(i,o)||wt(aa,o)||wt(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:wt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Uh(n){return lt(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ic=!0;function S_(n){const e=up(n),t=n.proxy,i=n.ctx;Ic=!1,e.beforeCreate&&Nh(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:_,activated:M,deactivated:m,beforeDestroy:p,beforeUnmount:T,destroyed:D,unmounted:y,render:w,renderTracked:A,renderTriggered:F,errorCaptured:S,serverPrefetch:L,expose:B,inheritAttrs:G,components:ne,directives:se,filters:k}=e;if(c&&y_(c,i,null),a)for(const j in a){const me=a[j];ft(me)&&(i[j]=me.bind(t))}if(r){const j=r.call(t,t);It(j)&&(n.data=vs(j))}if(Ic=!0,s)for(const j in s){const me=s[j],ue=ft(me)?me.bind(t,t):ft(me.get)?me.get.bind(t,t):Ei,xe=!ft(me)&&ft(me.set)?me.set.bind(t):Ei,ge=ni({get:ue,set:xe});Object.defineProperty(i,j,{enumerable:!0,configurable:!0,get:()=>ge.value,set:Ie=>ge.value=Ie})}if(o)for(const j in o)cp(o[j],i,t,j);if(l){const j=ft(l)?l.call(t):l;Reflect.ownKeys(j).forEach(me=>{e_(me,j[me])})}u&&Nh(u,n,"c");function ce(j,me){lt(me)?me.forEach(ue=>j(ue.bind(t))):me&&j(me.bind(t))}if(ce(u_,f),ce(Dc,h),ce(h_,d),ce(f_,_),ce(o_,M),ce(l_,m),ce(__,S),ce(g_,A),ce(m_,F),ce(d_,T),ce(lp,y),ce(p_,L),lt(B))if(B.length){const j=n.exposed||(n.exposed={});B.forEach(me=>{Object.defineProperty(j,me,{get:()=>t[me],set:ue=>t[me]=ue,enumerable:!0})})}else n.exposed||(n.exposed={});w&&n.render===Ei&&(n.render=w),G!=null&&(n.inheritAttrs=G),ne&&(n.components=ne),se&&(n.directives=se),L&&ap(n)}function y_(n,e,t=Ei){lt(n)&&(n=Uc(n));for(const i in n){const r=n[i];let s;It(r)?"default"in r?s=wo(r.from||i,r.default,!0):s=wo(r.from||i):s=wo(r),gn(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Nh(n,e,t){li(lt(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function cp(n,e,t,i){let r=i.includes(".")?rp(t,i):()=>t[i];if(qt(n)){const s=e[n];ft(s)&&Hr(r,s)}else if(ft(n))Hr(r,n.bind(t));else if(It(n))if(lt(n))n.forEach(s=>cp(s,e,t,i));else{const s=ft(n.handler)?n.handler.bind(t):e[n.handler];ft(s)&&Hr(r,s,n)}}function up(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>ko(l,c,a,!0)),ko(l,e,a)),It(e)&&s.set(e,l),l}function ko(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&ko(n,s,t,!0),r&&r.forEach(a=>ko(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=M_[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const M_={data:Fh,props:Oh,emits:Oh,methods:Ks,computed:Ks,beforeCreate:Sn,created:Sn,beforeMount:Sn,mounted:Sn,beforeUpdate:Sn,updated:Sn,beforeDestroy:Sn,beforeUnmount:Sn,destroyed:Sn,unmounted:Sn,activated:Sn,deactivated:Sn,errorCaptured:Sn,serverPrefetch:Sn,components:Ks,directives:Ks,watch:E_,provide:Fh,inject:b_};function Fh(n,e){return e?n?function(){return hn(ft(n)?n.call(this,this):n,ft(e)?e.call(this,this):e)}:e:n}function b_(n,e){return Ks(Uc(n),Uc(e))}function Uc(n){if(lt(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Sn(n,e){return n?[...new Set([].concat(n,e))]:e}function Ks(n,e){return n?hn(Object.create(null),n,e):e}function Oh(n,e){return n?lt(n)&&lt(e)?[...new Set([...n,...e])]:hn(Object.create(null),Uh(n),Uh(e??{})):e}function E_(n,e){if(!n)return e;if(!e)return n;const t=hn(Object.create(null),n);for(const i in e)t[i]=Sn(n[i],e[i]);return t}function hp(){return{app:null,config:{isNativeTag:wd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let T_=0;function A_(n,e){return function(i,r=null){ft(i)||(i=hn({},i)),r!=null&&!It(r)&&(r=null);const s=hp(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:T_++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:rv,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&ft(u.install)?(a.add(u),u.install(c,...f)):ft(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Ji(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,ul(d.component)}},onUnmount(u){o.push(u)},unmount(){l&&(li(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Ss;Ss=c;try{return u()}finally{Ss=f}}};return c}}let Ss=null;const w_=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${si(e)}Modifiers`]||n[`${jr(e)}Modifiers`];function R_(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Ft;let r=t;const s=e.startsWith("update:"),a=s&&w_(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>qt(u)?u.trim():u)),a.number&&(r=r.map(nl)));let o,l=i[o=Tl(e)]||i[o=Tl(si(e))];!l&&s&&(l=i[o=Tl(jr(e))]),l&&li(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,li(c,n,6,r)}}const C_=new WeakMap;function fp(n,e,t=!1){const i=t?C_:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!ft(n)){const l=c=>{const u=fp(c,e,!0);u&&(o=!0,hn(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(It(n)&&i.set(n,null),null):(lt(s)?s.forEach(l=>a[l]=null):hn(a,s),It(n)&&i.set(n,a),a)}function ll(n,e){return!n||!Qo(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),wt(n,e[0].toLowerCase()+e.slice(1))||wt(n,jr(e))||wt(n,e))}function Bh(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:_,inheritAttrs:M}=n,m=zo(n);let p,T;try{if(t.shapeFlag&4){const y=r||i,w=y;p=_i(c.call(w,y,u,f,d,h,_)),T=o}else{const y=e;p=_i(y.length>1?y(f,{attrs:o,slots:a,emit:l}):y(f,null)),T=e.props?o:P_(o)}}catch(y){$r.length=0,sl(y,n,1),p=Ji(ar)}let D=p;if(T&&M!==!1){const y=Object.keys(T),{shapeFlag:w}=D;y.length&&w&7&&(s&&y.some(el)&&(T=D_(T,s)),D=bs(D,T,!1,!0))}if(t.dirs&&(D=bs(D,null,!1,!0),D.dirs=D.dirs?D.dirs.concat(t.dirs):t.dirs),t.transition){const y=al(D.type)&&sp(D)||D;$u(y,t.transition)}return p=D,zo(m),p}const P_=n=>{let e;for(const t in n)(t==="class"||t==="style"||Qo(t))&&((e||(e={}))[t]=n[t]);return e},D_=(n,e)=>{const t={};for(const i in n)(!el(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function L_(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?zh(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(dp(a,i,h)&&!ll(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?zh(i,a,c):!0:!!a;return!1}function zh(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(dp(e,n,s)&&!ll(t,s))return!0}return!1}function dp(n,e,t){const i=n[t],r=e[t];return t==="style"&&It(i)&&It(r)?!ir(i,r):i!==r}function I_({vnode:n,parent:e,suspense:t},i){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.suspense.vnode.el=r.el=i,n=r),r===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const pp={},mp=()=>Object.create(pp),gp=n=>Object.getPrototypeOf(n)===pp;function U_(n,e,t,i=!1){const r={},s=mp();n.propsDefaults=Object.create(null),_p(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Hg(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function N_(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=At(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ll(n.emitsOptions,h))continue;const d=e[h];if(l)if(wt(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const _=si(h);r[_]=Nc(l,o,_,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{_p(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!wt(e,f)&&((u=jr(f))===f||!wt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Nc(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!wt(e,f))&&(delete s[f],c=!0)}c&&$i(n.attrs,"set","")}function _p(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(ta(l))continue;const c=e[l];let u;r&&wt(r,u=si(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:ll(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=At(t),c=o||Ft;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Nc(r,l,f,c[f],n,!wt(c,f))}}return a}function Nc(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=wt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ft(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Pa(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===jr(t))&&(i=!0))}return i}const F_=new WeakMap;function vp(n,e,t=!1){const i=t?F_:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!ft(n)){const u=f=>{l=!0;const[h,d]=vp(f,e,!0);hn(a,h),d&&o.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return It(n)&&i.set(n,kr),kr;if(lt(s))for(let u=0;u<s.length;u++){const f=si(s[u]);Vh(f)&&(a[f]=Ft)}else if(s)for(const u in s){const f=si(u);if(Vh(f)){const h=s[u],d=a[f]=lt(h)||ft(h)?{type:h}:hn({},h),_=d.type;let M=!1,m=!0;if(lt(_))for(let p=0;p<_.length;++p){const T=_[p],D=ft(T)&&T.name;if(D==="Boolean"){M=!0;break}else D==="String"&&(m=!1)}else M=ft(_)&&_.name==="Boolean";d[0]=M,d[1]=m,(M||wt(d,"default"))&&o.push(f)}}const c=[a,o];return It(n)&&i.set(n,c),c}function Vh(n){return n[0]!=="$"&&!ta(n)}const Yu=n=>n==="_"||n==="_ctx"||n==="$stable",Ku=n=>lt(n)?n.map(_i):[_i(n)],O_=(n,e,t)=>{if(e._n)return e;const i=Qg((...r)=>Ku(e(...r)),t);return i._c=!1,i},xp=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Yu(r))continue;const s=n[r];if(ft(s))e[r]=O_(r,s,i);else if(s!=null){const a=Ku(s);e[r]=()=>a}}},Sp=(n,e)=>{const t=Ku(e);n.slots.default=()=>t},yp=(n,e,t)=>{for(const i in e)(t||!Yu(i))&&(n[i]=e[i])},B_=(n,e,t)=>{const i=n.slots=mp();if(n.vnode.shapeFlag&32){const r=e._;r?(yp(i,e,t),t&&Ld(i,"_",r,!0)):xp(e,i)}else e&&Sp(n,e)},z_=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=Ft;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:yp(r,e,t):(s=!e.$stable,xp(e,r)),a=e}else e&&(Sp(n,e),a={default:1});if(s)for(const o in r)!Yu(o)&&a[o]==null&&delete r[o]},Pn=W_;function V_(n){return k_(n)}function k_(n,e){const t=il();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Ei,insertStaticContent:_}=n,M=(R,O,U,W=null,X=null,H=null,te=void 0,de=null,fe=!!O.dynamicChildren)=>{if(R===O)return;R&&!Vs(R,O)&&(W=_e(R),Ie(R,X,H,!0),R=null),O.patchFlag===-2&&(fe=!1,O.dynamicChildren=null),O.dynamicChildren&&R&&R.dynamicChildren&&R.dynamicChildren.hasOnce&&(O.dynamicChildren===kr&&(O.dynamicChildren=[]),O.dynamicChildren.hasOnce=!0);const{type:re,ref:Re,shapeFlag:C}=O;switch(re){case cl:m(R,O,U,W);break;case ar:p(R,O,U,W);break;case Il:R==null&&T(O,U,W,te);break;case Nt:ne(R,O,U,W,X,H,te,de,fe);break;default:C&1?w(R,O,U,W,X,H,te,de,fe):C&6?se(R,O,U,W,X,H,te,de,fe):(C&64||C&128)&&re.process(R,O,U,W,X,H,te,de,fe,qe)}Re!=null&&X?ra(Re,R&&R.ref,H,O||R,!O):Re==null&&R&&R.ref!=null&&ra(R.ref,null,H,R,!0)},m=(R,O,U,W)=>{if(R==null)i(O.el=o(O.children),U,W);else{const X=O.el=R.el;O.children!==R.children&&c(X,O.children)}},p=(R,O,U,W)=>{R==null?i(O.el=l(O.children||""),U,W):O.el=R.el},T=(R,O,U,W)=>{[R.el,R.anchor]=_(R.children,O,U,W,R.el,R.anchor)},D=({el:R,anchor:O},U,W)=>{let X;for(;R&&R!==O;)X=h(R),i(R,U,W),R=X;i(O,U,W)},y=({el:R,anchor:O})=>{let U;for(;R&&R!==O;)U=h(R),r(R),R=U;r(O)},w=(R,O,U,W,X,H,te,de,fe)=>{if(O.type==="svg"?te="svg":O.type==="math"&&(te="mathml"),R==null)A(O,U,W,X,H,te,de,fe);else{const re=R.el&&R.el._isVueCE?R.el:null;try{re&&re._beginPatch(),L(R,O,X,H,te,de,fe)}finally{re&&re._endPatch()}}},A=(R,O,U,W,X,H,te,de)=>{let fe,re;const{props:Re,shapeFlag:C,transition:Te,dirs:Ue}=R;if(fe=R.el=a(R.type,H,Re&&Re.is,Re),C&8?u(fe,R.children):C&16&&S(R.children,fe,null,W,X,Ll(R,H),te,de),Ue&&Dr(R,null,W,"created"),F(fe,R,R.scopeId,te,W),Re){for(const g in Re)g!=="value"&&!ta(g)&&s(fe,g,null,Re[g],H,W);"value"in Re&&s(fe,"value",null,Re.value,H),(re=Re.onVnodeBeforeMount)&&hi(re,W,R)}Ue&&Dr(R,null,W,"beforeMount");const E=H_(X,Te);E&&Te.beforeEnter(fe),i(fe,O,U),((re=Re&&Re.onVnodeMounted)||E||Ue)&&Pn(()=>{try{re&&hi(re,W,R),E&&Te.enter(fe),Ue&&Dr(R,null,W,"mounted")}finally{}},X)},F=(R,O,U,W,X)=>{if(U&&d(R,U),W)for(let H=0;H<W.length;H++)d(R,W[H]);if(X){let H=X.subTree;if(O===H||Tp(H.type)&&(H.ssContent===O||H.ssFallback===O)){const te=X.vnode;F(R,te,te.scopeId,te.slotScopeIds,X.parent)}}},S=(R,O,U,W,X,H,te,de,fe=0)=>{for(let re=fe;re<R.length;re++){const Re=R[re]=de?Wi(R[re]):_i(R[re]);M(null,Re,O,U,W,X,H,te,de)}},L=(R,O,U,W,X,H,te)=>{const de=O.el=R.el;let{patchFlag:fe,dynamicChildren:re,dirs:Re}=O;fe|=R.patchFlag&16;const C=R.props||Ft,Te=O.props||Ft;let Ue;if(U&&Ir(U,!1),(Ue=Te.onVnodeBeforeUpdate)&&hi(Ue,U,O,R),Re&&Dr(O,R,U,"beforeUpdate"),U&&Ir(U,!0),re&&(!R.dynamicChildren||R.dynamicChildren.length!==re.length)&&(fe=0,te=!1,re=null),(C.innerHTML&&Te.innerHTML==null||C.textContent&&Te.textContent==null)&&u(de,""),re?B(R.dynamicChildren,re,de,U,W,Ll(O,X),H):te||me(R,O,de,null,U,W,Ll(O,X),H,!1),fe>0){if(fe&16)G(de,C,Te,U,X);else if(fe&2&&C.class!==Te.class&&s(de,"class",null,Te.class,X),fe&4&&s(de,"style",C.style,Te.style,X),fe&8){const E=O.dynamicProps;for(let g=0;g<E.length;g++){const N=E[g],J=C[N],ie=Te[N];(ie!==J||N==="value")&&s(de,N,J,ie,X,U)}}fe&1&&R.children!==O.children&&u(de,O.children)}else!te&&re==null&&G(de,C,Te,U,X);((Ue=Te.onVnodeUpdated)||Re)&&Pn(()=>{Ue&&hi(Ue,U,O,R),Re&&Dr(O,R,U,"updated")},W)},B=(R,O,U,W,X,H,te)=>{for(let de=0;de<O.length;de++){const fe=R[de],re=O[de],Re=fe.el&&(fe.type===Nt||!Vs(fe,re)||fe.shapeFlag&198)?f(fe.el):U;M(fe,re,Re,null,W,X,H,te,!0)}},G=(R,O,U,W,X)=>{if(O!==U){if(O!==Ft)for(const H in O)!ta(H)&&!(H in U)&&s(R,H,O[H],null,X,W);for(const H in U){if(ta(H))continue;const te=U[H],de=O[H];te!==de&&H!=="value"&&s(R,H,de,te,X,W)}"value"in U&&s(R,"value",O.value,U.value,X)}},ne=(R,O,U,W,X,H,te,de,fe)=>{const re=O.el=R?R.el:o(""),Re=O.anchor=R?R.anchor:o("");let{patchFlag:C,dynamicChildren:Te,slotScopeIds:Ue}=O;Ue&&(de=de?de.concat(Ue):Ue),R==null?(i(re,U,W),i(Re,U,W),S(O.children||[],U,Re,X,H,te,de,fe)):C>0&&C&64&&Te&&R.dynamicChildren&&R.dynamicChildren.length===Te.length?(B(R.dynamicChildren,Te,U,X,H,te,de),(O.key!=null||X&&O===X.subTree)&&Mp(R,O,!0)):me(R,O,U,Re,X,H,te,de,fe)},se=(R,O,U,W,X,H,te,de,fe)=>{O.slotScopeIds=de,R==null?O.shapeFlag&512?X.ctx.activate(O,U,W,te,fe):k(O,U,W,X,H,te,fe):Q(R,O,fe)},k=(R,O,U,W,X,H,te)=>{const de=R.component=J_(R,W,X);if(qu(R)&&(de.ctx.renderer=qe),Q_(de,!1,te),de.asyncDep){if(X&&X.registerDep(de,ce,te),!R.el){const fe=de.subTree=Ji(ar);p(null,fe,O,U),R.placeholder=fe.el}}else ce(de,R,O,U,X,H,te)},Q=(R,O,U)=>{const W=O.component=R.component;if(L_(R,O,U))if(W.asyncDep&&!W.asyncResolved){O.el=R.el,j(W,O,U);return}else W.next=O,W.update();else O.el=R.el,W.vnode=O},ce=(R,O,U,W,X,H,te)=>{const de=()=>{if(R.isMounted){let{next:C,bu:Te,u:Ue,parent:E,vnode:g}=R;{const Pe=bp(R);if(Pe){C&&(C.el=g.el,j(R,C,te)),Pe.asyncDep.then(()=>{Pn(()=>{R.isUnmounted||re()},X)});return}}let N=C,J;Ir(R,!1),C?(C.el=g.el,j(R,C,te)):C=g,Te&&Ao(Te),(J=C.props&&C.props.onVnodeBeforeUpdate)&&hi(J,E,C,g),Ir(R,!0);const ie=Bh(R),ve=R.subTree;R.subTree=ie,M(ve,ie,f(ve.el),_e(ve),R,X,H),C.el=ie.el,N===null&&I_(R,ie.el),Ue&&Pn(Ue,X),(J=C.props&&C.props.onVnodeUpdated)&&Pn(()=>hi(J,E,C,g),X)}else{let C;const{el:Te,props:Ue}=O,{bm:E,m:g,parent:N,root:J,type:ie}=R,ve=sa(O);Ir(R,!1),E&&Ao(E),!ve&&(C=Ue&&Ue.onVnodeBeforeMount)&&hi(C,N,O),Ir(R,!0);{J.ce&&J.ce._hasShadowRoot()&&J.ce._injectChildStyle(ie,R.parent?R.parent.type:void 0);const Pe=R.subTree=Bh(R);M(null,Pe,U,W,R,X,H),O.el=Pe.el}if(g&&Pn(g,X),!ve&&(C=Ue&&Ue.onVnodeMounted)){const Pe=O;Pn(()=>hi(C,N,Pe),X)}(O.shapeFlag&256||N&&sa(N.vnode)&&N.vnode.shapeFlag&256)&&R.a&&Pn(R.a,X),R.isMounted=!0,O=U=W=null}};R.scope.on();const fe=R.effect=new Fd(de);R.scope.off();const re=R.update=fe.run.bind(fe),Re=R.job=fe.runIfDirty.bind(fe);Re.i=R,Re.id=R.uid,fe.scheduler=()=>Xu(Re),Ir(R,!0),re()},j=(R,O,U)=>{O.component=R;const W=R.vnode.props;R.vnode=O,R.next=null,N_(R,O.props,W,U),z_(R,O.children,U),rr(),Dh(R),sr()},me=(R,O,U,W,X,H,te,de,fe=!1)=>{const re=R&&R.children,Re=R?R.shapeFlag:0,C=O.children,{patchFlag:Te,shapeFlag:Ue}=O;if(Te>0){if(Te&128){xe(re,C,U,W,X,H,te,de,fe);return}else if(Te&256){ue(re,C,U,W,X,H,te,de,fe);return}}Ue&8?(Re&16&&st(re,X,H),C!==re&&u(U,C)):Re&16?Ue&16?xe(re,C,U,W,X,H,te,de,fe):st(re,X,H,!0):(Re&8&&u(U,""),Ue&16&&S(C,U,W,X,H,te,de,fe))},ue=(R,O,U,W,X,H,te,de,fe)=>{R=R||kr,O=O||kr;const re=R.length,Re=O.length,C=Math.min(re,Re);let Te;for(Te=0;Te<C;Te++){const Ue=O[Te]=fe?Wi(O[Te]):_i(O[Te]);M(R[Te],Ue,U,null,X,H,te,de,fe)}re>Re?st(R,X,H,!0,!1,C):S(O,U,W,X,H,te,de,fe,C)},xe=(R,O,U,W,X,H,te,de,fe)=>{let re=0;const Re=O.length;let C=R.length-1,Te=Re-1;for(;re<=C&&re<=Te;){const Ue=R[re],E=O[re]=fe?Wi(O[re]):_i(O[re]);if(Vs(Ue,E))M(Ue,E,U,null,X,H,te,de,fe);else break;re++}for(;re<=C&&re<=Te;){const Ue=R[C],E=O[Te]=fe?Wi(O[Te]):_i(O[Te]);if(Vs(Ue,E))M(Ue,E,U,null,X,H,te,de,fe);else break;C--,Te--}if(re>C){if(re<=Te){const Ue=Te+1,E=Ue<Re?O[Ue].el:W;for(;re<=Te;)M(null,O[re]=fe?Wi(O[re]):_i(O[re]),U,E,X,H,te,de,fe),re++}}else if(re>Te)for(;re<=C;)Ie(R[re],X,H,!0),re++;else{const Ue=re,E=re,g=new Map;for(re=E;re<=Te;re++){const Ce=O[re]=fe?Wi(O[re]):_i(O[re]);Ce.key!=null&&g.set(Ce.key,re)}let N,J=0;const ie=Te-E+1;let ve=!1,Pe=0;const ae=new Array(ie);for(re=0;re<ie;re++)ae[re]=0;for(re=Ue;re<=C;re++){const Ce=R[re];if(J>=ie){Ie(Ce,X,H,!0);continue}let He;if(Ce.key!=null)He=g.get(Ce.key);else for(N=E;N<=Te;N++)if(ae[N-E]===0&&Vs(Ce,O[N])){He=N;break}He===void 0?Ie(Ce,X,H,!0):(ae[He-E]=re+1,He>=Pe?Pe=He:ve=!0,M(Ce,O[He],U,null,X,H,te,de,fe),J++)}const Se=ve?G_(ae):kr;for(N=Se.length-1,re=ie-1;re>=0;re--){const Ce=E+re,He=O[Ce],Z=O[Ce+1],P=Ce+1<Re?Z.el||Ep(Z):W;ae[re]===0?M(null,He,U,P,X,H,te,de,fe):ve&&(N<0||re!==Se[N]?ge(He,U,P,2):N--)}}},ge=(R,O,U,W,X=null)=>{const{el:H,type:te,transition:de,children:fe,shapeFlag:re}=R;if(re&6){ge(R.component.subTree,O,U,W);return}if(re&128){R.suspense.move(O,U,W);return}if(re&64){te.move(R,O,U,qe);return}if(te===Nt){i(H,O,U);for(let C=0;C<fe.length;C++)ge(fe[C],O,U,W);i(R.anchor,O,U);return}if(te===Il){D(R,O,U);return}if(W!==2&&re&1&&de)if(W===0)de.persisted&&!H[Pl]?i(H,O,U):(de.beforeEnter(H),i(H,O,U),Pn(()=>de.enter(H),X));else{const{leave:C,delayLeave:Te,afterLeave:Ue}=de,E=()=>{R.ctx.isUnmounted?r(H):i(H,O,U)},g=()=>{const N=H._isLeaving||!!H[Pl];H._isLeaving&&H[Pl](!0),de.persisted&&!N?E():C(H,()=>{E(),Ue&&Ue()})};Te?Te(H,E,g):g()}else i(H,O,U)},Ie=(R,O,U,W=!1,X=!1)=>{const{type:H,props:te,ref:de,children:fe,dynamicChildren:re,shapeFlag:Re,patchFlag:C,dirs:Te,cacheIndex:Ue,memo:E}=R;if((C===-2||re&&re.hasOnce)&&(X=!1),de!=null&&(rr(),ra(de,null,U,R,!0),sr()),Ue!=null&&(!R.ctx||R.ctx===O)&&(O.renderCache[Ue]=void 0),Re&256){O.ctx.deactivate(R);return}const g=Re&1&&Te,N=!sa(R);let J;if(N&&(J=te&&te.onVnodeBeforeUnmount)&&hi(J,O,R),Re&6)rt(R.component,U,W);else{if(Re&128){R.suspense.unmount(U,W);return}g&&Dr(R,null,O,"beforeUnmount"),Re&64?R.type.remove(R,O,U,qe,W):re&&!re.hasOnce&&(H!==Nt||C>0&&C&64)?st(re,O,U,!1,!0):(H===Nt&&C&384||!X&&Re&16)&&st(fe,O,U),W&&Be(R)}const ie=E!=null&&Ue==null;(N&&(J=te&&te.onVnodeUnmounted)||g||ie)&&Pn(()=>{J&&hi(J,O,R),g&&Dr(R,null,O,"unmounted"),ie&&(R.el=null)},U)},Be=R=>{const{type:O,el:U,anchor:W,transition:X}=R;if(O===Nt){nt(U,W);return}if(O===Il){y(R),X&&!X.persisted&&X.afterLeave&&X.afterLeave();return}const H=()=>{r(U),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(R.shapeFlag&1&&X&&!X.persisted){const{leave:te,delayLeave:de}=X,fe=()=>te(U,H);de?de(R.el,H,fe):fe()}else H()},nt=(R,O)=>{let U;for(;R!==O;)U=h(R),r(R),R=U;r(O)},rt=(R,O,U)=>{const{bum:W,scope:X,job:H,subTree:te,um:de,m:fe,a:re}=R;kh(fe),kh(re),W&&Ao(W),X.stop(),H?(H.flags|=8,Ie(te,R,O,U)):R.vnode.el&&te&&(te.transition=R.vnode.transition,Ie(te,R,O,U)),de&&Pn(de,O),Pn(()=>{R.isUnmounted=!0},O)},st=(R,O,U,W=!1,X=!1,H=0)=>{for(let te=H;te<R.length;te++)Ie(R[te],O,U,W,X)},_e=R=>{if(R.shapeFlag&6)return _e(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const O=h(R.anchor||R.el),U=O&&O[r_];return U?h(U):O};let he=!1;const Ee=(R,O,U)=>{let W;R==null?O._vnode&&(Ie(O._vnode,null,null,!0),W=O._vnode.component):M(O._vnode||null,R,O,null,null,null,U),O._vnode=R,he||(he=!0,Dh(W),ep(),he=!1)},qe={p:M,um:Ie,m:ge,r:Be,mt:k,mc:S,pc:me,pbc:B,n:_e,o:n};return{render:Ee,hydrate:void 0,createApp:A_(Ee)}}function Ll({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ir({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function H_(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Mp(n,e,t=!1){const i=n.children,r=e.children;if(lt(i)&&lt(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Wi(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&Mp(a,o)),o.type===cl&&(o.patchFlag===-1&&(o=r[s]=Wi(o)),o.el=a.el),o.type===ar&&!o.el&&(o.el=a.el)}}function G_(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function bp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:bp(e)}function kh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Ep(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Ep(e.subTree):null}const Tp=n=>n.__isSuspense;function W_(n,e){e&&e.pendingBranch?lt(n)?e.effects.push(...n):e.effects.push(n):jg(n)}const Nt=Symbol.for("v-fgt"),cl=Symbol.for("v-txt"),ar=Symbol.for("v-cmt"),Il=Symbol.for("v-stc"),$r=[];let On=null;function at(n=!1){$r.push(On=n?null:[])}function Ap(){$r.pop(),On=$r[$r.length-1]||null}let ma=1;function Hh(n,e=!1){ma+=n,n<0&&On&&e&&(On.hasOnce=!0)}function wp(n){return n.dynamicChildren=ma>0?On||kr:null,Ap(),ma>0&&On&&On.push(n),n}function ot(n,e,t,i,r,s){return wp(Y(n,e,t,i,r,s,!0))}function X_(n,e,t,i,r){return wp(Ji(n,e,t,i,r,!0))}function Rp(n){return n?n.__v_isVNode===!0:!1}function Vs(n,e){return n.type===e.type&&n.key===e.key}const Cp=({key:n})=>n??null,Ro=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?qt(n)||gn(n)||ft(n)?{i:$n,r:n,k:e,f:!!t}:n:null);function Y(n,e=null,t=null,i=0,r=null,s=n===Nt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Cp(e),ref:e&&Ro(e),scopeId:np,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:$n};return o?(Ho(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=qt(t)?8:16),ma>0&&!a&&On&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&On.push(l),l}const Ji=$_;function $_(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===v_)&&(n=ar),Rp(n)){const o=bs(n,e,!0);return t&&Ho(o,t),ma>0&&!s&&On&&(o.shapeFlag&6?On[On.indexOf(n)]=o:On.push(o)),o.patchFlag=-2,o}if(iv(n)&&(n=n.__vccOpts),e){e=q_(e);let{class:o,style:l}=e;o&&!qt(o)&&(e.class=on(o)),It(l)&&(Gu(l)&&!lt(l)&&(l=hn({},l)),e.style=Nu(l))}const a=qt(n)?1:Tp(n)?128:al(n)?64:It(n)?4:ft(n)?2:0;return Y(n,e,t,i,r,a,s,!0)}function q_(n){return n?Gu(n)||gp(n)?hn({},n):n:null}function bs(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?Y_(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Cp(c),ref:e&&e.ref?t&&s?lt(s)?s.concat(Ro(e)):[s,Ro(e)]:Ro(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Nt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&bs(n.ssContent),ssFallback:n.ssFallback&&bs(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&$u(u,l.clone(u)),u}function ct(n=" ",e=0){return Ji(cl,null,n,e)}function kt(n="",e=!1){return e?(at(),X_(ar,null,n)):Ji(ar,null,n)}function _i(n){return n==null||typeof n=="boolean"?Ji(ar):lt(n)?Ji(Nt,null,n.slice()):Rp(n)?Wi(n):Ji(cl,null,String(n))}function Wi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:bs(n)}function Ho(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(lt(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ho(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!gp(e)?e._ctx=$n:r===3&&$n&&($n.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(ft(e)){if(i&65){Ho(n,{default:e});return}e={default:e,_ctx:$n},t=32}else e=String(e),i&64?(t=16,e=[ct(e)]):t=8;n.children=e,n.shapeFlag|=t}function Y_(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=on([e.class,i.class]));else if(r==="style")e.style=Nu([e.style,i.style]);else if(Qo(r)){const s=e[r],a=i[r];a&&s!==a&&!(lt(s)&&s.includes(a))?e[r]=s?[].concat(s,a):a:a==null&&s==null&&!el(r)&&(e[r]=a)}else r!==""&&(e[r]=i[r])}return e}function hi(n,e,t,i=null){li(n,e,7,[t,i])}const K_=hp();let Z_=0;function J_(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||K_,s={uid:Z_++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new bg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vp(i,r),emitsOptions:fp(i,r),emit:null,emitted:null,propsDefaults:Ft,inheritAttrs:i.inheritAttrs,ctx:Ft,data:Ft,props:Ft,attrs:Ft,slots:Ft,refs:Ft,setupState:Ft,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=R_.bind(null,s),n.ce&&n.ce(s),s}let bn=null;const j_=()=>bn||$n;let Go,ga;{const n=il(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Go=e("__VUE_INSTANCE_SETTERS__",t=>bn=t),ga=e("__VUE_SSR_SETTERS__",t=>_a=t)}const Pa=n=>{const e=bn;return Go(n),n.scope.on(),()=>{n.scope.off(),Go(e)}},Gh=()=>{bn&&bn.scope.off(),Go(null)};function Pp(n){return n.vnode.shapeFlag&4}let _a=!1;function Q_(n,e=!1,t=!1){e&&ga(e);const{props:i,children:r}=n.vnode,s=Pp(n);U_(n,i,s,e),B_(n,r,t||e);const a=s?ev(n,e):void 0;return e&&ga(!1),a}function ev(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,x_);const{setup:i}=t;if(i){rr();const r=n.setupContext=i.length>1?nv(n):null,s=Pa(n),a=Ca(i,n,0,[n.props,r]),o=Rd(a);if(sr(),s(),(o||n.sp)&&!sa(n)&&ap(n),o){if(a.then(Gh,Gh),e)return a.then(l=>{ga(!0);try{Wh(n,l,e)}finally{ga(!1)}}).catch(l=>{sl(l,n,0)});n.asyncDep=a}else Wh(n,a)}else Dp(n)}function Wh(n,e,t){ft(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:It(e)&&(n.setupState=Jd(e)),Dp(n)}function Dp(n,e,t){const i=n.type;n.render||(n.render=i.render||Ei);{const r=Pa(n);rr();try{S_(n)}finally{sr(),r()}}}const tv={get(n,e){return pn(n,"get",""),n[e]}};function nv(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,tv),slots:n.slots,emit:n.emit,expose:e}}function ul(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Jd(Gg(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in aa)return aa[t](n)},has(e,t){return t in e||t in aa}})):n.proxy}function iv(n){return ft(n)&&"__vccOpts"in n}const ni=(n,e)=>qg(n,e,_a),rv="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Fc;const Xh=typeof window<"u"&&window.trustedTypes;if(Xh)try{Fc=Xh.createPolicy("vue",{createHTML:n=>n})}catch{}const Lp=Fc?n=>Fc.createHTML(n):n=>n,sv="http://www.w3.org/2000/svg",av="http://www.w3.org/1998/Math/MathML",Gi=typeof document<"u"?document:null,$h=Gi&&Gi.createElement("template"),ov={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Gi.createElementNS(sv,n):e==="mathml"?Gi.createElementNS(av,n):t?Gi.createElement(n,{is:t}):Gi.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Gi.createTextNode(n),createComment:n=>Gi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Gi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{$h.innerHTML=Lp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=$h.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},lv=Symbol("_vtc");function cv(n,e,t){const i=n[lv];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const qh=Symbol("_vod"),uv=Symbol("_vsh"),hv=Symbol(""),fv=/(?:^|;)\s*display\s*:/;function dv(n,e,t){const i=n.style,r=qt(t);let s=!1;if(t&&!r){if(e)if(qt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Zs(i,o,"")}else for(const a in e)t[a]==null&&Zs(i,a,"");for(const a in t){a==="display"&&(s=!0);const o=t[a];o!=null?mv(n,a,!qt(e)&&e?e[a]:void 0,o)||Zs(i,a,o):Zs(i,a,"")}}else if(r){if(e!==t){const a=i[hv];a&&(t+=";"+a),i.cssText=t,s=fv.test(t)}}else e&&n.removeAttribute("style");qh in n&&(n[qh]=s?i.display:"",n[uv]&&(i.display="none"))}const Wa=/\s*!important$/;function Zs(n,e,t){if(lt(t))t.forEach(i=>Zs(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))Wa.test(t)?n.setProperty(e,t.replace(Wa,""),"important"):n.setProperty(e,t);else{const i=pv(n,e);Wa.test(t)?n.setProperty(jr(i),t.replace(Wa,""),"important"):n[i]=t}}const Yh=["Webkit","Moz","ms"],Ul={};function pv(n,e){const t=Ul[e];if(t)return t;let i=si(e);if(i!=="filter"&&i in n)return Ul[e]=i;i=Dd(i);for(let r=0;r<Yh.length;r++){const s=Yh[r]+i;if(s in n)return Ul[e]=s}return e}function mv(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&qt(i)&&t===i}const Kh="http://www.w3.org/1999/xlink";function Zh(n,e,t,i,r,s=Sg(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Kh,e.slice(6,e.length)):n.setAttributeNS(Kh,e,t):t==null||s&&!Id(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Ai(t)?String(t):t)}function Jh(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Lp(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Id(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function Sr(n,e,t,i){n.addEventListener(e,t,i)}function gv(n,e,t,i){n.removeEventListener(e,t,i)}const jh=Symbol("_vei");function _v(n,e,t,i,r=null){const s=n[jh]||(n[jh]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=Sv(e);if(i){const c=s[e]=bv(i,r);Sr(n,o,c,l)}else a&&(gv(n,o,a,l),s[e]=void 0)}}const vv=/(Once|Passive|Capture)$/,xv=/^on:?(?:Once|Passive|Capture)$/;function Sv(n){let e,t;for(;(t=n.match(vv))&&!xv.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):jr(n.slice(2)),e]}let Nl=0;const yv=Promise.resolve(),Mv=()=>Nl||(yv.then(()=>Nl=0),Nl=Date.now());function bv(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const r=t.value;if(lt(r)){const s=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{s.call(i),i._stopped=!0};const a=r.slice(),o=[i];for(let l=0;l<a.length&&!i._stopped;l++){const c=a[l];c&&li(c,e,5,o)}}else li(r,e,5,[i])};return t.value=n,t.attached=Mv(),t}const Qh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Ev=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?cv(n,i,a):e==="style"?dv(n,t,i):Qo(e)?el(e)||_v(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Tv(n,e,i,a))?(Jh(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Zh(n,e,i,a,s,e!=="value")):n._isVueCE&&(Av(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!qt(i)))?Jh(n,si(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Zh(n,e,i,a))};function Tv(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Qh(e)&&ft(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Qh(e)&&qt(t)?!1:e in n}function Av(n,e){const t=n._def.props;if(!t)return!1;const i=si(e);return Array.isArray(t)?t.some(r=>si(r)===i):Object.keys(t).some(r=>si(r)===i)}const Es=n=>{const e=n.props["onUpdate:modelValue"]||!1;return lt(e)?t=>Ao(e,t):e};function wv(n){n.target.composing=!0}function ef(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const yi=Symbol("_assign"),Xa=Symbol("_initialValue");function Fl(n,e,t){return e&&(n=n.trim()),t&&(n=nl(n)),n}const jn={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n.parentNode&&(n.type==="text"?n[Xa]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[Xa]=n.defaultValue.replace(/\r\n?/g,`
`))),n[yi]=Es(r);const s=i||r.props&&r.props.type==="number";Sr(n,e?"change":"input",a=>{a.target.composing||n[yi](Fl(n.value,t,s))}),(t||s)&&Sr(n,"change",()=>{n.value=Fl(n.value,t,s)}),e||(Sr(n,"compositionstart",wv),Sr(n,"compositionend",ef),Sr(n,"change",ef))},mounted(n,{value:e,modifiers:{trim:t,number:i}}){const r=e??"",s=n[Xa];delete n[Xa],s!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==s?n[yi](Fl(n.value,t,i)):n.value=r},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},a){if(n[yi]=Es(a),n.composing)return;const o=(s||n.type==="number")&&!/^0\d/.test(n.value)?nl(n.value):n.value,l=e??"";if(o===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l)}},Ur={deep:!0,created(n,e,t){n[yi]=Es(t),Sr(n,"change",()=>{const i=n._modelValue,r=va(n),s=n.checked,a=n[yi];if(lt(i)){const o=Fu(i,r),l=o!==-1;if(s&&!l)a(i.concat(r));else if(!s&&l){const c=[...i];c.splice(o,1),a(c)}}else if(nr(i)){const o=new Set(i);s?o.add(r):o.delete(r),a(o)}else a(Ip(n,s))})},mounted:tf,beforeUpdate(n,e,t){n[yi]=Es(t),tf(n,e,t)}};function tf(n,{value:e,oldValue:t},i){n._modelValue=e;let r;if(lt(e))r=Fu(e,i.props.value)>-1;else if(nr(e))r=e.has(i.props.value);else{if(e===t)return;r=ir(e,Ip(n,!0))}n.checked!==r&&(n.checked=r)}const Rv={deep:!0,created(n,{value:e,modifiers:{number:t}},i){n._modelValue=e,Sr(n,"change",()=>{const r=Array.prototype.filter.call(n.options,l=>l.selected).map(l=>t?nl(va(l)):va(l)),s=n.multiple,a=s?nr(n._modelValue)?new Set(r):r:r[0],o=n._pendingValue=[s,s?lt(a)?r.slice():r:a];try{n[yi](a)}finally{Wu(()=>{n._pendingValue===o&&(n._pendingValue=void 0)})}}),n[yi]=Es(i)},mounted(n,{value:e}){nf(n,e)},beforeUpdate(n,{value:e},t){n._modelValue=e,n[yi]=Es(t)},updated(n,{value:e}){const t=n._pendingValue;n._pendingValue=void 0,(!t||t[0]!==n.multiple||!Cv(e,t[1],t[0]))&&nf(n,e)}};function Cv(n,e,t){if(!t||lt(n))return ir(n,e);if(nr(n)){if(n.size!==e.length)return!1;for(const i of e)if(!n.has(i))return!1;return!0}return!1}function nf(n,e){const t=n.multiple,i=lt(e);if(!(t&&!i&&!nr(e))){for(let r=0,s=n.options.length;r<s;r++){const a=n.options[r],o=va(a);if(t)if(i){const l=typeof o;l==="string"||l==="number"?a.selected=e.some(c=>String(c)===String(o)):a.selected=Fu(e,o)>-1}else a.selected=e.has(o);else if(ir(va(a),e)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function va(n){return"_value"in n?n._value:n.value}function Ip(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const Pv=hn({patchProp:Ev},ov);let rf;function Dv(){return rf||(rf=V_(Pv))}const Lv=((...n)=>{const e=Dv().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Uv(i);if(!r)return;const s=e._component;!ft(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,Iv(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function Iv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Uv(n){return qt(n)?document.querySelector(n):n}const dr=Math.PI/180,$a={haStar:1,cStar:.25,rhoFStar:.38};function Nv(n,e){return{x:n*(Math.sin(e)-e*Math.cos(e)),y:n*(Math.cos(e)+e*Math.sin(e))}}function Fv(n){return Math.tan(n)-n}function sf(n,e){const t=n/e;return Math.sqrt(Math.max(0,t*t-1))}function af(n,e){const t=Math.cos(e),i=Math.sin(e);return{x:n.x*t-n.y*i,y:n.x*i+n.y*t}}function Js(n,e){return{x:n*Math.cos(e),y:n*Math.sin(e)}}function Ov(n,e,t,i){const r=[];for(let s=0;s<=i;s++){const a=e+(t-e)*s/i;r.push(Js(n,a))}return r}function Yi(n,e=16){const{z:t,module:i,alpha:r}=n,s=i*t/2,a=s*Math.cos(r),o=s+$a.haStar*i,l=s-($a.haStar+$a.cStar)*i,c=Math.PI*i,u=c*Math.cos(r),f=Math.PI*i/2,h=2*Math.PI/t,d=a>l,_=Fv(r),M=Math.PI/(2*t)+_,m=sf(o,a),p=Math.atan(m),T=m-Math.atan(m),D=Math.PI/(2*t)+_-T,y=2*o*D,w=D<=0,A=2/(Math.sin(r)*Math.sin(r)),F=t<A,S=he=>({x:-he.x,y:he.y}),L=d?0:sf(l,a),B=(he,Ee,qe,Oe)=>{const R=[];for(let O=0;O<=Oe;O++){const U=Ee+(qe-Ee)*O/Oe,W=af(Nv(a,U),M);R.push(he===1?S(W):W)}return R},G=6,ne=he=>{const Ee=-he,qe=Math.PI/2+Ee*M,Oe=B(he,L,L,1);if(!d)return{j:Oe[0],jAngle:Math.atan2(Oe[0].y,Oe[0].x),fillet:[],flankLo:null};const R=Math.PI/2+Ee*(h/2),O=(a*a-l*l)/(2*l),U=Math.abs(qe-R),W=Math.sin(U),X=W<1?l*W/(1-W):1/0,H=Math.max(0,Math.min($a.rhoFStar*i,O*.999,X*.999)),te=l+H,de=Math.asin(Math.min(1,H/te)),fe=he===1?qe-de:qe+de,re=Js(te,fe),Re=Js(l,fe),C=Math.sqrt(Math.max(0,te*te-H*H)),Te=Js(C,qe),Ue=Math.atan2(Re.y-re.y,Re.x-re.x);let g=Math.atan2(Te.y-re.y,Te.x-re.x)-Ue;for(;g>Math.PI;)g-=2*Math.PI;for(;g<-Math.PI;)g+=2*Math.PI;g=Math.abs(g)*-he;const N=[];for(let J=0;J<=G;J++){const ie=Ue+g*J/G;N.push({x:re.x+H*Math.cos(ie),y:re.y+H*Math.sin(ie)})}return{j:Re,jAngle:fe,fillet:N,flankLo:Oe[0]}},se=ne(1),k=ne(-1),Q=B(1,L,m,e),ce=B(-1,L,m,e),j=Q[e],me=ce[e],ue=Math.atan2(j.y,j.x),xe=Math.atan2(me.y,me.x),ge=[];ge.push(...se.fillet),se.flankLo&&ge.push(se.flankLo),ge.push(...Q.slice(1));let Ie=xe-ue;for(;Ie>Math.PI;)Ie-=2*Math.PI;for(;Ie<-Math.PI;)Ie+=2*Math.PI;const Be=Math.max(4,Math.ceil(Math.abs(Ie)/h*24));ge.push(...Ov(o,ue,ue+Ie,Be).slice(1));for(let he=e-1;he>=0;he--)ge.push(ce[he]);k.flankLo&&(ge.push(k.flankLo),ge.push(k.fillet[k.fillet.length-1])),ge.push(...k.fillet.slice(0,-1).reverse());const nt=[],rt=6,st=he=>{const Ee=nt[nt.length-1];(!Ee||Math.hypot(he.x-Ee.x,he.y-Ee.y)>1e-10)&&nt.push(he)};for(let he=0;he<t;he++){const Ee=he*h,qe=ge.map(O=>af(O,Ee)),Oe=k.jAngle+Ee,R=se.jAngle+(he+1)*h;for(const O of qe.slice(0,-1))st(O);for(let O=1;O<=rt;O++){const U=Oe+(R-Oe)*O/rt;st(Js(l,U))}}if(nt.length>1){const he=nt[0],Ee=nt[nt.length-1];Math.hypot(he.x-Ee.x,he.y-Ee.y)<1e-10&&nt.pop()}const _e=Array.from({length:t},(he,Ee)=>Math.PI/2+Ee*h);return{input:n,pitchR:s,baseR:a,addendumR:o,dedendumR:l,baseAboveRoot:d,circularPitch:c,basePitch:u,toothThickness:f,beta:M,taTip:m,zMinValue:A,undercut:F,alphaTip:p,tipThickness:y,pointed:w,toothProfile:ge,outline:nt,toothCenterAngles:_e,jAngleRight:se.jAngle,jAngleLeft:k.jAngle}}function qa(n,e,t,i){const r=Math.cos(i),s=Math.sin(i);return n.map(a=>({x:e+a.x*r-a.y*s,y:t+a.x*s+a.y*r}))}function of(n){const e=[];return(!Number.isFinite(n.z)||n.z<4||Math.abs(n.z-Math.round(n.z))>1e-9)&&e.push("齿数必须为 ≥4 的整数"),(!(n.module>0)||!Number.isFinite(n.module))&&e.push("模数必须 > 0"),(!(n.alpha>0)||n.alpha>=Math.PI/2)&&e.push("压力角必须在 (0°, 90°) 内"),n.faceWidth>0||e.push("齿宽必须 > 0"),e}function Oc(n){const{g1:e,g2:t,centerDistance:i}=n,r=e.pitchR+t.pitchR,s=e.input.alpha,a=Math.min(1,Math.max(-1,r*Math.cos(s)/i)),o=Math.acos(a),l=e.baseR/Math.cos(o),c=t.baseR/Math.cos(o),u=i-r,f=Ie=>Math.tan(Ie)-Ie,h=2*i*(f(o)-f(s)),d=h*Math.cos(o),_=i-e.addendumR-t.dedendumR,M=i-t.addendumR-e.dedendumR,m=Math.abs(e.basePitch-t.basePitch),p=m<1e-6,T=[],D=i<e.addendumR+t.addendumR;D&&T.push("中心距小于两齿顶圆半径之和，齿顶圆交叉，必然实体干涉"),(_<0||M<0)&&T.push("存在齿顶与对方齿根圆交叉（顶隙为负）"),Math.abs(u)>1e-9&&(u>0?T.push(`非标准中心距（+${u.toFixed(3)} mm）：有侧隙安装，啮合角增大，不再是无侧隙啮合`):T.push("中心距小于标准值：无侧隙空间，齿面相互挤压（仅教学演示干涉）")),p||T.push(`两轮基节不等（差 ${m.toFixed(4)} mm），不能正确啮合`);const y={x:l,y:0},w=Math.sin(o),A=Math.cos(o),F=-l*w,S={x:y.x+F*w,y:y.y+F*A},L=c*w,B={x:y.x+L*w,y:y.y+L*A},G=(Ie,Be)=>{const nt=y.x-Ie,rt=y.y,st=2*(nt*w+rt*A),_e=nt*nt+rt*rt-Be*Be,he=st*st-4*_e;if(he<0)return[];const Ee=Math.sqrt(he);return[(-st-Ee)/2,(-st+Ee)/2]},ne=G(0,e.addendumR),k=G(i,t.addendumR).filter(Ie=>Ie<=1e-9),Q=ne.filter(Ie=>Ie>=-1e-9),ce=k.length?Math.max(...k):F,j=Q.length?Math.min(...Q):L,me={x:y.x+ce*w,y:y.y+ce*A},ue={x:y.x+j*w,y:y.y+j*A},xe=Math.max(0,j-ce),ge=xe/e.basePitch;return{a0:r,a:i,alphaPrime:o,pitchR1:l,pitchR2:c,deltaA:u,backlashTangential:Math.max(0,h),backlashNormal:Math.max(0,d),clearance12:_,clearance21:M,basePitchMatch:p,basePitchDiff:m,addendumOverlap:D,actionLine:{p0:me,p1:ue},tangentLine:{p0:S,p1:B},pitchPoint:y,pathOfContact:xe,contactRatio:ge,ok:p&&!D,warnings:T}}function Ol(n,e,t,i){const r=n.alphaPrime,s=Math.sin(r),a=Math.cos(r),o=Math.tan(r)+i/e.baseR,l=Math.tan(r)-i/t.baseR,c=o-Math.atan(o),u=l-Math.atan(l),f=Math.PI/2+e.beta-c,h=Math.PI/2+t.beta-u,d=Math.atan2(i*a,n.pitchR1+i*s),_=Math.atan2(i*a,-n.pitchR2+i*s),M=d-f,m=_-h;return{phi1:M,phi2:m,t1:o,t2:l}}function Bl(n,e,t,i){const r=t.alphaPrime,s=Math.sin(r),a=Math.cos(r);let o=0;for(let h=0;h<30;h++){const d=Math.tan(r)+o/n.baseR,_=d-Math.atan(d),M=Math.PI/2+n.beta-_,p=Math.atan2(o*a,t.pitchR1+o*s)-M-i;if(o-=p/(1/n.baseR),Math.abs(p)<1e-12)break}const l=Math.tan(r)-o/e.baseR,c=l-Math.atan(l),u=Math.PI/2+e.beta-c;return Math.atan2(o*a,-t.pitchR2+o*s)-u}const Bv="modulepreload",zv=function(n,e){return new URL(n,e).href},lf={},Vv=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){let a=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=l?.nonce||l?.getAttribute("nonce");r=a(t.map(u=>{if(u=zv(u,i),u in lf)return;lf[u]=!0;const f=u.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(!!i)for(let M=o.length-1;M>=0;M--){const m=o[M];if(m.href===u&&(!f||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${h}`))return;const _=document.createElement("link");if(_.rel=f?"stylesheet":Bv,f||(_.as="script"),_.crossOrigin="",_.href=u,c&&_.setAttribute("nonce",c),document.head.appendChild(_),f)return new Promise((M,m)=>{_.addEventListener("load",M),_.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};async function kv(n={}){var e,t=n,i=!!globalThis.window,r=!!globalThis.WorkerGlobalScope,s=globalThis.process?.versions?.node&&globalThis.process?.type!="renderer";if(s){const{createRequire:x}=await Vv(()=>import("./__vite-browser-external-BIHI7g3E.js"),[],import.meta.url);var a=x(import.meta.url)}var o=import.meta.url,l="";function c(x){return t.locateFile?t.locateFile(x,l):l+x}var u,f;if(s){var h=a("fs");o.startsWith("file:")&&(l=a("path").dirname(a("url").fileURLToPath(o))+"/"),f=x=>{x=m(x)?new URL(x):x;var v=h.readFileSync(x);return v},u=async(x,v=!0)=>{x=m(x)?new URL(x):x;var I=h.readFileSync(x,v?void 0:"utf8");return I},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2)}else if(i||r){try{l=new URL(".",o).href}catch{}r&&(f=x=>{var v=new XMLHttpRequest;return v.open("GET",x,!1),v.responseType="arraybuffer",v.send(null),new Uint8Array(v.response)}),u=async x=>{if(m(x))return new Promise((I,V)=>{var ee=new XMLHttpRequest;ee.open("GET",x,!0),ee.responseType="arraybuffer",ee.onload=()=>{if(ee.status==200||ee.status==0&&ee.response){I(ee.response);return}V(ee.status)},ee.onerror=V,ee.send(null)});var v=await fetch(x,{credentials:"same-origin"});if(v.ok)return v.arrayBuffer();throw new Error(v.status+" : "+v.url)}}console.log.bind(console);var d=console.error.bind(console),_,M=!1,m=x=>x.startsWith("file://"),p,T,D,y,w,A,F,S,L,B,G,ne,se=!1;function k(){var x=za.buffer;D=new Int8Array(x),w=new Int16Array(x),t.HEAPU8=y=new Uint8Array(x),A=new Uint16Array(x),F=new Int32Array(x),S=new Uint32Array(x),L=new Float32Array(x),B=new Float64Array(x),G=new BigInt64Array(x),ne=new BigUint64Array(x)}function Q(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)Oe(t.preRun.shift());_e(qe)}function ce(){se=!0,Bs.E()}function j(){if(t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)Ee(t.postRun.shift());_e(he)}function me(x){t.onAbort?.(x),x="Aborted("+x+")",d(x),M=!0,x+=". Build with -sASSERTIONS for more info.";var v=new WebAssembly.RuntimeError(x);throw T?.(v),v}var ue;function xe(){return t.locateFile?c("clipper2z.wasm"):new URL(""+new URL("clipper2z-Cj78y2Ub.wasm",import.meta.url).href,import.meta.url).href}function ge(x){if(x==ue&&_)return new Uint8Array(_);if(f)return f(x);throw"both async and sync fetching of the wasm failed"}async function Ie(x){if(!_)try{var v=await u(x);return new Uint8Array(v)}catch{}return ge(x)}async function Be(x,v){try{var I=await Ie(x),V=await WebAssembly.instantiate(I,v);return V}catch(ee){d(`failed to asynchronously prepare wasm: ${ee}`),me(ee)}}async function nt(x,v,I){if(!x&&!m(v)&&!s)try{var V=fetch(v,{credentials:"same-origin"}),ee=await WebAssembly.instantiateStreaming(V,I);return ee}catch(Me){d(`wasm streaming compile failed: ${Me}`),d("falling back to ArrayBuffer instantiation")}return Be(v,I)}function rt(){var x={a:ig};return x}async function st(){function x(Me,be){return Bs=Me.exports,ng(Bs),k(),Bs}function v(Me){return x(Me.instance)}var I=rt();if(t.instantiateWasm)return new Promise((Me,be)=>{t.instantiateWasm(I,(Ae,Ne)=>{Me(x(Ae))})});ue??=xe();var V=await nt(_,ue,I),ee=v(V);return ee}var _e=x=>{for(;x.length>0;)x.shift()(t)},he=[],Ee=x=>he.push(x),qe=[],Oe=x=>qe.push(x);class R{constructor(v){this.excPtr=v,this.ptr=v-24}set_type(v){S[this.ptr+4>>2]=v}get_type(){return S[this.ptr+4>>2]}set_destructor(v){S[this.ptr+8>>2]=v}get_destructor(){return S[this.ptr+8>>2]}set_caught(v){v=v?1:0,D[this.ptr+12]=v}get_caught(){return D[this.ptr+12]!=0}set_rethrown(v){v=v?1:0,D[this.ptr+13]=v}get_rethrown(){return D[this.ptr+13]!=0}init(v,I){this.set_adjusted_ptr(0),this.set_type(v),this.set_destructor(I)}set_adjusted_ptr(v){S[this.ptr+16>>2]=v}get_adjusted_ptr(){return S[this.ptr+16>>2]}}var O=0,U=(x,v,I)=>{var V=new R(x);throw V.init(v,I),O=x,O},W=()=>me(""),X={},H=x=>{for(;x.length;){var v=x.pop(),I=x.pop();I(v)}};function te(x){return this.fromWireType(S[x>>2])}var de={},fe={},re={},Re=class extends Error{constructor(v){super(v),this.name="InternalError"}},C=x=>{throw new Re(x)},Te=(x,v,I)=>{x.forEach(Ae=>re[Ae]=v);function V(Ae){var Ne=I(Ae);Ne.length!==x.length&&C("Mismatched type converter count");for(var it=0;it<x.length;++it)ie(x[it],Ne[it])}var ee=new Array(v.length),Me=[],be=0;v.forEach((Ae,Ne)=>{fe.hasOwnProperty(Ae)?ee[Ne]=fe[Ae]:(Me.push(Ae),de.hasOwnProperty(Ae)||(de[Ae]=[]),de[Ae].push(()=>{ee[Ne]=fe[Ae],++be,be===Me.length&&V(ee)}))}),Me.length===0&&V(ee)},Ue=x=>{var v=X[x];delete X[x];var I=v.rawConstructor,V=v.rawDestructor,ee=v.fields,Me=ee.map(be=>be.getterReturnType).concat(ee.map(be=>be.setterArgumentType));Te([x],Me,be=>{var Ae={};return ee.forEach((Ne,it)=>{var tt=Ne.fieldName,Tt=be[it],Wt=be[it].optional,Mt=Ne.getter,Xt=Ne.getterContext,an=be[it+ee.length],Jn=Ne.setter,wn=Ne.setterContext;Ae[tt]={read:Ni=>Tt.fromWireType(Mt(Xt,Ni)),write:(Ni,xn)=>{var Va=[];Jn(wn,Ni,an.toWireType(Va,xn)),H(Va)},optional:Wt}}),[{name:v.name,fromWireType:Ne=>{var it={};for(var tt in Ae)it[tt]=Ae[tt].read(Ne);return V(Ne),it},toWireType:(Ne,it)=>{for(var tt in Ae)if(!(tt in it)&&!Ae[tt].optional)throw new TypeError(`Missing field: "${tt}"`);var Tt=I();for(tt in Ae)Ae[tt].write(Tt,it[tt]);return Ne!==null&&Ne.push(V,Tt),Tt},readValueFromPointer:te,destructorFunction:V}]})},E=x=>{for(var v="";;){var I=y[x++];if(!I)return v;v+=String.fromCharCode(I)}},g=class extends Error{constructor(v){super(v),this.name="BindingError"}},N=x=>{throw new g(x)};function J(x,v,I={}){var V=v.name;if(x||N(`type "${V}" must have a positive integer typeid pointer`),fe.hasOwnProperty(x)){if(I.ignoreDuplicateRegistrations)return;N(`Cannot register type '${V}' twice`)}if(fe[x]=v,delete re[x],de.hasOwnProperty(x)){var ee=de[x];delete de[x],ee.forEach(Me=>Me())}}function ie(x,v,I={}){return J(x,v,I)}var ve=(x,v,I)=>{switch(v){case 1:return I?V=>D[V]:V=>y[V];case 2:return I?V=>w[V>>1]:V=>A[V>>1];case 4:return I?V=>F[V>>2]:V=>S[V>>2];case 8:return I?V=>G[V>>3]:V=>ne[V>>3];default:throw new TypeError(`invalid integer width (${v}): ${x}`)}},Pe=(x,v,I,V,ee)=>{v=E(v);const Me=V===0n;let be=Ae=>Ae;if(Me){const Ae=I*8;be=Ne=>BigInt.asUintN(Ae,Ne),ee=be(ee)}ie(x,{name:v,fromWireType:be,toWireType:(Ae,Ne)=>(typeof Ne=="number"&&(Ne=BigInt(Ne)),Ne),readValueFromPointer:ve(v,I,!Me),destructorFunction:null})},ae=(x,v,I,V)=>{v=E(v),ie(x,{name:v,fromWireType:function(ee){return!!ee},toWireType:function(ee,Me){return Me?I:V},readValueFromPointer:function(ee){return this.fromWireType(y[ee])},destructorFunction:null})},Se=x=>({count:x.count,deleteScheduled:x.deleteScheduled,preservePointerOnDelete:x.preservePointerOnDelete,ptr:x.ptr,ptrType:x.ptrType,smartPtr:x.smartPtr,smartPtrType:x.smartPtrType}),Ce=x=>{function v(I){return I.$$.ptrType.registeredClass.name}N(v(x)+" instance already deleted")},He=!1,Z=x=>{},P=x=>{x.smartPtr?x.smartPtrType.rawDestructor(x.smartPtr):x.ptrType.registeredClass.rawDestructor(x.ptr)},$=x=>{x.count.value-=1;var v=x.count.value===0;v&&P(x)},De=x=>globalThis.FinalizationRegistry?(He=new FinalizationRegistry(v=>{$(v.$$)}),De=v=>{var I=v.$$,V=!!I.smartPtr;if(V){var ee={$$:I};He.register(v,ee,v)}return v},Z=v=>He.unregister(v),De(x)):(De=v=>v,x),$e=()=>{let x=z.prototype;Object.assign(x,{isAliasOf(I){if(!(this instanceof z)||!(I instanceof z))return!1;var V=this.$$.ptrType.registeredClass,ee=this.$$.ptr;I.$$=I.$$;for(var Me=I.$$.ptrType.registeredClass,be=I.$$.ptr;V.baseClass;)ee=V.upcast(ee),V=V.baseClass;for(;Me.baseClass;)be=Me.upcast(be),Me=Me.baseClass;return V===Me&&ee===be},clone(){if(this.$$.ptr||Ce(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var I=De(Object.create(Object.getPrototypeOf(this),{$$:{value:Se(this.$$)}}));return I.$$.count.value+=1,I.$$.deleteScheduled=!1,I},delete(){this.$$.ptr||Ce(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&N("Object already scheduled for deletion"),Z(this),$(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||Ce(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&N("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const v=Symbol.dispose;v&&(x[v]=x.delete)};function z(){}var Le=(x,v)=>Object.defineProperty(v,"name",{value:x}),ye={},Ve=(x,v,I)=>{if(x[v].overloadTable===void 0){var V=x[v];x[v]=function(...ee){return x[v].overloadTable.hasOwnProperty(ee.length)||N(`Function '${I}' called with an invalid number of arguments (${ee.length}) - expects one of (${x[v].overloadTable})!`),x[v].overloadTable[ee.length].apply(this,ee)},x[v].overloadTable=[],x[v].overloadTable[V.argCount]=V}},Ge=(x,v,I)=>{t.hasOwnProperty(x)?((I===void 0||t[x].overloadTable!==void 0&&t[x].overloadTable[I]!==void 0)&&N(`Cannot register public name '${x}' twice`),Ve(t,x,x),t[x].overloadTable.hasOwnProperty(I)&&N(`Cannot register multiple overloads of a function with the same number of arguments (${I})!`),t[x].overloadTable[I]=v):(t[x]=v,t[x].argCount=I)},we=48,et=57,Qe=x=>{x=x.replace(/[^a-zA-Z0-9_]/g,"$");var v=x.charCodeAt(0);return v>=we&&v<=et?`_${x}`:x};function Dt(x,v,I,V,ee,Me,be,Ae){this.name=x,this.constructor=v,this.instancePrototype=I,this.rawDestructor=V,this.baseClass=ee,this.getActualType=Me,this.upcast=be,this.downcast=Ae,this.pureVirtualFunctions=[]}var _t=(x,v,I)=>{for(;v!==I;)v.upcast||N(`Expected null or instance of ${I.name}, got an instance of ${v.name}`),x=v.upcast(x),v=v.baseClass;return x},vn=x=>{if(x===null)return"null";var v=typeof x;return v==="object"||v==="array"||v==="function"?x.toString():""+x};function zn(x,v){if(v===null)return this.isReference&&N(`null is not a valid ${this.name}`),0;v.$$||N(`Cannot pass "${vn(v)}" as a ${this.name}`),v.$$.ptr||N(`Cannot pass deleted object as a pointer of type ${this.name}`);var I=v.$$.ptrType.registeredClass,V=_t(v.$$.ptr,I,this.registeredClass);return V}function vl(x,v){var I;if(v===null)return this.isReference&&N(`null is not a valid ${this.name}`),this.isSmartPointer?(I=this.rawConstructor(),x!==null&&x.push(this.rawDestructor,I),I):0;(!v||!v.$$)&&N(`Cannot pass "${vn(v)}" as a ${this.name}`),v.$$.ptr||N(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&v.$$.ptrType.isConst&&N(`Cannot convert argument of type ${v.$$.smartPtrType?v.$$.smartPtrType.name:v.$$.ptrType.name} to parameter type ${this.name}`);var V=v.$$.ptrType.registeredClass;if(I=_t(v.$$.ptr,V,this.registeredClass),this.isSmartPointer)switch(v.$$.smartPtr===void 0&&N("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:v.$$.smartPtrType===this?I=v.$$.smartPtr:N(`Cannot convert argument of type ${v.$$.smartPtrType?v.$$.smartPtrType.name:v.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:I=v.$$.smartPtr;break;case 2:if(v.$$.smartPtrType===this)I=v.$$.smartPtr;else{var ee=v.clone();I=this.rawShare(I,Ye.toHandle(()=>ee.delete())),x!==null&&x.push(this.rawDestructor,I)}break;default:N("Unsupporting sharing policy")}return I}function xl(x,v){if(v===null)return this.isReference&&N(`null is not a valid ${this.name}`),0;v.$$||N(`Cannot pass "${vn(v)}" as a ${this.name}`),v.$$.ptr||N(`Cannot pass deleted object as a pointer of type ${this.name}`),v.$$.ptrType.isConst&&N(`Cannot convert argument of type ${v.$$.ptrType.name} to parameter type ${this.name}`);var I=v.$$.ptrType.registeredClass,V=_t(v.$$.ptr,I,this.registeredClass);return V}var Ls=(x,v,I)=>{if(v===I)return x;if(I.baseClass===void 0)return null;var V=Ls(x,v,I.baseClass);return V===null?null:I.downcast(V)},Is={},Sl=(x,v)=>{for(v===void 0&&N("ptr should not be undefined");x.baseClass;)v=x.upcast(v),x=x.baseClass;return v},Ia=(x,v)=>(v=Sl(x,v),Is[v]),Rr=(x,v)=>{(!v.ptrType||!v.ptr)&&C("makeClassHandle requires ptr and ptrType");var I=!!v.smartPtrType,V=!!v.smartPtr;return I!==V&&C("Both smartPtrType and smartPtr must be specified"),v.count={value:1},De(Object.create(x,{$$:{value:v,writable:!0}}))};function Ii(x){var v=this.getPointee(x);if(!v)return this.destructor(x),null;var I=Ia(this.registeredClass,v);if(I!==void 0){if(I.$$.count.value===0)return I.$$.ptr=v,I.$$.smartPtr=x,I.clone();var V=I.clone();return this.destructor(x),V}function ee(){return this.isSmartPointer?Rr(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:v,smartPtrType:this,smartPtr:x}):Rr(this.registeredClass.instancePrototype,{ptrType:this,ptr:x})}var Me=this.registeredClass.getActualType(v),be=ye[Me];if(!be)return ee.call(this);var Ae;this.isConst?Ae=be.constPointerType:Ae=be.pointerType;var Ne=Ls(v,this.registeredClass,Ae.registeredClass);return Ne===null?ee.call(this):this.isSmartPointer?Rr(Ae.registeredClass.instancePrototype,{ptrType:Ae,ptr:Ne,smartPtrType:this,smartPtr:x}):Rr(Ae.registeredClass.instancePrototype,{ptrType:Ae,ptr:Ne})}var Us=()=>{Object.assign(Cr.prototype,{getPointee(x){return this.rawGetPointee&&(x=this.rawGetPointee(x)),x},destructor(x){this.rawDestructor?.(x)},readValueFromPointer:te,fromWireType:Ii})};function Cr(x,v,I,V,ee,Me,be,Ae,Ne,it,tt){this.name=x,this.registeredClass=v,this.isReference=I,this.isConst=V,this.isSmartPointer=ee,this.pointeeType=Me,this.sharingPolicy=be,this.rawGetPointee=Ae,this.rawConstructor=Ne,this.rawShare=it,this.rawDestructor=tt,!ee&&v.baseClass===void 0?V?(this.toWireType=zn,this.destructorFunction=null):(this.toWireType=xl,this.destructorFunction=null):this.toWireType=vl}var Ns=(x,v,I)=>{t.hasOwnProperty(x)||C("Replacing nonexistent public symbol"),t[x].overloadTable!==void 0&&I!==void 0?t[x].overloadTable[I]=v:(t[x]=v,t[x].argCount=I)},Pr=[],Ua=x=>{var v=Pr[x];return v||(Pr[x]=v=xh.get(x)),v},tn=(x,v,I=!1)=>{x=E(x);function V(){var Me=Ua(v);return Me}var ee=V();return typeof ee!="function"&&N(`unknown function pointer with signature ${x}: ${v}`),ee};class Na extends Error{}var Fs=x=>{var v=vh(x),I=E(v);return fr(v),I},ur=(x,v)=>{var I=[],V={};function ee(Me){if(!V[Me]&&!fe[Me]){if(re[Me]){re[Me].forEach(ee);return}I.push(Me),V[Me]=!0}}throw v.forEach(ee),new Na(`${x}: `+I.map(Fs).join([", "]))},yl=(x,v,I,V,ee,Me,be,Ae,Ne,it,tt,Tt,Wt)=>{tt=E(tt),Me=tn(ee,Me),Ae&&=tn(be,Ae),it&&=tn(Ne,it),Wt=tn(Tt,Wt);var Mt=Qe(tt);Ge(Mt,function(){ur(`Cannot construct ${tt} due to unbound types`,[V])}),Te([x,v,I],V?[V]:[],Xt=>{Xt=Xt[0];var an,Jn;V?(an=Xt.registeredClass,Jn=an.instancePrototype):Jn=z.prototype;var wn=Le(tt,function(...El){if(Object.getPrototypeOf(this)!==Ni)throw new g(`Use 'new' to construct ${tt}`);if(xn.constructor_body===void 0)throw new g(`${tt} has no accessible constructor`);var Eh=xn.constructor_body[El.length];if(Eh===void 0)throw new g(`Tried to invoke ctor of ${tt} with invalid number of parameters (${El.length}) - expected (${Object.keys(xn.constructor_body).toString()}) parameters instead!`);return Eh.apply(this,El)}),Ni=Object.create(Jn,{constructor:{value:wn}});wn.prototype=Ni;var xn=new Dt(tt,wn,Ni,Wt,an,Me,Ae,it);xn.baseClass&&(xn.baseClass.__derivedClasses??=[],xn.baseClass.__derivedClasses.push(xn));var Va=new Cr(tt,xn,!0,!1,!1),Mh=new Cr(tt+"*",xn,!1,!1,!1),bh=new Cr(tt+" const*",xn,!1,!0,!1);return ye[x]={pointerType:Mh,constPointerType:bh},Ns(Mt,wn),[Va,Mh,bh]})},Os=(x,v)=>{for(var I=[],V=0;V<x;V++)I.push(S[v+V*4>>2]);return I};function Fa(x){for(var v=1;v<x.length;++v)if(x[v]!==null&&x[v].destructorFunction===void 0)return!0;return!1}function Oa(x,v,I,V){var ee=Fa(x),Me=x.length-2,be=[],Ae=["fn"];v&&Ae.push("thisWired");for(var Ne=0;Ne<Me;++Ne)be.push(`arg${Ne}`),Ae.push(`arg${Ne}Wired`);be=be.join(","),Ae=Ae.join(",");var it=`return function (${be}) {
`;ee&&(it+=`var destructors = [];
`);var tt=ee?"destructors":"null",Tt=["humanName","throwBindingError","invoker","fn","runDestructors","fromRetWire","toClassParamWire"];v&&(it+=`var thisWired = toClassParamWire(${tt}, this);
`);for(var Ne=0;Ne<Me;++Ne){var Wt=`toArg${Ne}Wire`;it+=`var arg${Ne}Wired = ${Wt}(${tt}, arg${Ne});
`,Tt.push(Wt)}if(it+=(I||V?"var rv = ":"")+`invoker(${Ae});
`,ee)it+=`runDestructors(destructors);
`;else for(var Ne=v?1:2;Ne<x.length;++Ne){var Mt=Ne===1?"thisWired":"arg"+(Ne-2)+"Wired";x[Ne].destructorFunction!==null&&(it+=`${Mt}_dtor(${Mt});
`,Tt.push(`${Mt}_dtor`))}return I&&(it+=`var ret = fromRetWire(rv);
return ret;
`),it+=`}
`,new Function(Tt,it)}function b(x,v,I,V,ee,Me){var be=v.length;be<2&&N("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var Ae=v[1]!==null&&I!==null,Ne=Fa(v),it=!v[0].isVoid,tt=v[0],Tt=v[1],Wt=[x,N,V,ee,H,tt.fromWireType.bind(tt),Tt?.toWireType.bind(Tt)],Mt=2;Mt<be;++Mt){var Xt=v[Mt];Wt.push(Xt.toWireType.bind(Xt))}if(!Ne)for(var Mt=Ae?1:2;Mt<v.length;++Mt)v[Mt].destructorFunction!==null&&Wt.push(v[Mt].destructorFunction);var Jn=Oa(v,Ae,it,Me)(...Wt);return Le(x,Jn)}var q=(x,v,I,V,ee,Me)=>{var be=Os(v,I);ee=tn(V,ee),Te([],[x],Ae=>{Ae=Ae[0];var Ne=`constructor ${Ae.name}`;if(Ae.registeredClass.constructor_body===void 0&&(Ae.registeredClass.constructor_body=[]),Ae.registeredClass.constructor_body[v-1]!==void 0)throw new g(`Cannot register multiple constructors with identical number of parameters (${v-1}) for class '${Ae.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return Ae.registeredClass.constructor_body[v-1]=()=>{ur(`Cannot construct ${Ae.name} due to unbound types`,be)},Te([],be,it=>(it.splice(1,0,null),Ae.registeredClass.constructor_body[v-1]=b(Ne,it,null,ee,Me),[])),[]})},pe=x=>{x=x.trim();const v=x.indexOf("(");return v===-1?x:x.slice(0,v)},le=(x,v,I,V,ee,Me,be,Ae,Ne,it)=>{var tt=Os(I,V);v=E(v),v=pe(v),Me=tn(ee,Me,Ne),Te([],[x],Tt=>{Tt=Tt[0];var Wt=`${Tt.name}.${v}`;v.startsWith("@@")&&(v=Symbol[v.substring(2)]),Ae&&Tt.registeredClass.pureVirtualFunctions.push(v);function Mt(){ur(`Cannot call ${Wt} due to unbound types`,tt)}var Xt=Tt.registeredClass.instancePrototype,an=Xt[v];return an===void 0||an.overloadTable===void 0&&an.className!==Tt.name&&an.argCount===I-2?(Mt.argCount=I-2,Mt.className=Tt.name,Xt[v]=Mt):(Ve(Xt,v,Wt),Xt[v].overloadTable[I-2]=Mt),Te([],tt,Jn=>{var wn=b(Wt,Jn,Tt,Me,be,Ne);return Xt[v].overloadTable===void 0?(wn.argCount=I-2,Xt[v]=wn):Xt[v].overloadTable[I-2]=wn,[]}),[]})},oe=(x,v,I)=>(x instanceof Object||N(`${I} with invalid "this": ${x}`),x instanceof v.registeredClass.constructor||N(`${I} incompatible with "this" of type ${x.constructor.name}`),x.$$.ptr||N(`cannot call emscripten binding method ${I} on deleted object`),_t(x.$$.ptr,x.$$.ptrType.registeredClass,v.registeredClass)),We=(x,v,I,V,ee,Me,be,Ae,Ne,it)=>{v=E(v),ee=tn(V,ee),Te([],[x],tt=>{tt=tt[0];var Tt=`${tt.name}.${v}`,Wt={get(){ur(`Cannot access ${Tt} due to unbound types`,[I,be])},enumerable:!0,configurable:!0};return Ne?Wt.set=()=>ur(`Cannot access ${Tt} due to unbound types`,[I,be]):Wt.set=Mt=>N(Tt+" is a read-only property"),Object.defineProperty(tt.registeredClass.instancePrototype,v,Wt),Te([],Ne?[I,be]:[I],Mt=>{var Xt=Mt[0],an={get(){var wn=oe(this,tt,Tt+" getter");return Xt.fromWireType(ee(Me,wn))},enumerable:!0};if(Ne){Ne=tn(Ae,Ne);var Jn=Mt[1];an.set=function(wn){var Ni=oe(this,tt,Tt+" setter"),xn=[];Ne(it,Ni,Jn.toWireType(xn,wn)),H(xn)}}return Object.defineProperty(tt.registeredClass.instancePrototype,v,an),[]}),[]})},Ke=[],ke=[0,1,,1,null,1,!0,1,!1,1],Je=x=>{x>9&&--ke[x+1]===0&&(ke[x]=void 0,Ke.push(x))},Ye={toValue:x=>(x||N(`Cannot use deleted val. handle = ${x}`),ke[x]),toHandle:x=>{switch(x){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const v=Ke.pop()||ke.length;return ke[v]=x,ke[v+1]=1,v}}}},dt={name:"emscripten::val",fromWireType:x=>{var v=Ye.toValue(x);return Je(x),v},toWireType:(x,v)=>Ye.toHandle(v),readValueFromPointer:te,destructorFunction:null},mt=x=>ie(x,dt),je=(x,v,I)=>{switch(v){case 1:return I?function(V){return this.fromWireType(D[V])}:function(V){return this.fromWireType(y[V])};case 2:return I?function(V){return this.fromWireType(w[V>>1])}:function(V){return this.fromWireType(A[V>>1])};case 4:return I?function(V){return this.fromWireType(F[V>>2])}:function(V){return this.fromWireType(S[V>>2])};default:throw new TypeError(`invalid integer width (${v}): ${x}`)}},bt=(x,v,I,V)=>{v=E(v);function ee(){}ee.values={},ie(x,{name:v,constructor:ee,fromWireType:function(Me){return this.constructor.values[Me]},toWireType:(Me,be)=>be.value,readValueFromPointer:je(v,I,V),destructorFunction:null}),Ge(v,ee)},zt=(x,v)=>{var I=fe[x];return I===void 0&&N(`${v} has unknown type ${Fs(x)}`),I},Ut=(x,v,I)=>{var V=zt(x,"enum");v=E(v);var ee=V.constructor,Me=Object.create(V.constructor.prototype,{value:{value:I},constructor:{value:Le(`${V.name}_${v}`,function(){})}});ee.values[I]=Me,ee[v]=Me},Rt=(x,v)=>{switch(v){case 4:return function(I){return this.fromWireType(L[I>>2])};case 8:return function(I){return this.fromWireType(B[I>>3])};default:throw new TypeError(`invalid float width (${v}): ${x}`)}},nn=(x,v,I)=>{v=E(v),ie(x,{name:v,fromWireType:V=>V,toWireType:(V,ee)=>ee,readValueFromPointer:Rt(v,I),destructorFunction:null})},Ze=(x,v,I,V,ee,Me,be,Ae)=>{var Ne=Os(v,I);x=E(x),x=pe(x),ee=tn(V,ee,be),Ge(x,function(){ur(`Cannot call ${x} due to unbound types`,Ne)},v-1),Te([],Ne,it=>{var tt=[it[0],null].concat(it.slice(1));return Ns(x,b(x,tt,null,ee,Me,be),v-1),[]})},sn=(x,v,I,V,ee)=>{v=E(v);const Me=V===0;let be=Ne=>Ne;if(Me){var Ae=32-8*I;be=Ne=>Ne<<Ae>>>Ae,ee=be(ee)}ie(x,{name:v,fromWireType:be,toWireType:(Ne,it)=>it,readValueFromPointer:ve(v,I,V!==0),destructorFunction:null})},vt=(x,v,I)=>{var V=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],ee=V[v];function Me(be){var Ae=S[be>>2],Ne=S[be+4>>2];return new ee(D.buffer,Ne,Ae)}I=E(I),ie(x,{name:I,fromWireType:Me,readValueFromPointer:Me},{ignoreDuplicateRegistrations:!0})},An=(x,v,I,V)=>{if(!(V>0))return 0;for(var ee=I,Me=I+V-1,be=0;be<x.length;++be){var Ae=x.codePointAt(be);if(Ae<=127){if(I>=Me)break;v[I++]=Ae}else if(Ae<=2047){if(I+1>=Me)break;v[I++]=192|Ae>>6,v[I++]=128|Ae&63}else if(Ae<=65535){if(I+2>=Me)break;v[I++]=224|Ae>>12,v[I++]=128|Ae>>6&63,v[I++]=128|Ae&63}else{if(I+3>=Me)break;v[I++]=240|Ae>>18,v[I++]=128|Ae>>12&63,v[I++]=128|Ae>>6&63,v[I++]=128|Ae&63,be++}}return v[I]=0,I-ee},Vn=(x,v,I)=>An(x,y,v,I),ci=x=>{for(var v=0,I=0;I<x.length;++I){var V=x.charCodeAt(I);V<=127?v++:V<=2047?v+=2:V>=55296&&V<=57343?(v+=4,++I):v+=3}return v},Ui=globalThis.TextDecoder&&new TextDecoder,Et=(x,v,I,V)=>{var ee=v+I;if(V)return ee;for(;x[v]&&!(v>=ee);)++v;return v},Vt=(x,v=0,I,V)=>{var ee=Et(x,v,I,V);if(ee-v>16&&x.buffer&&Ui)return Ui.decode(x.subarray(v,ee));for(var Me="";v<ee;){var be=x[v++];if(!(be&128)){Me+=String.fromCharCode(be);continue}var Ae=x[v++]&63;if((be&224)==192){Me+=String.fromCharCode((be&31)<<6|Ae);continue}var Ne=x[v++]&63;if((be&240)==224?be=(be&15)<<12|Ae<<6|Ne:be=(be&7)<<18|Ae<<12|Ne<<6|x[v++]&63,be<65536)Me+=String.fromCharCode(be);else{var it=be-65536;Me+=String.fromCharCode(55296|it>>10,56320|it&1023)}}return Me},ui=(x,v,I)=>x?Vt(y,x,v,I):"",Lt=(x,v)=>{v=E(v),ie(x,{name:v,fromWireType(I){var V=S[I>>2],ee=I+4,Me;return Me=ui(ee,V,!0),fr(I),Me},toWireType(I,V){V instanceof ArrayBuffer&&(V=new Uint8Array(V));var ee,Me=typeof V=="string";Me||ArrayBuffer.isView(V)&&V.BYTES_PER_ELEMENT==1||N("Cannot pass non-string to std::string"),Me?ee=ci(V):ee=V.length;var be=bl(4+ee+1),Ae=be+4;return S[be>>2]=ee,Me?Vn(V,Ae,ee+1):y.set(V,Ae),I!==null&&I.push(fr,be),be},readValueFromPointer:te,destructorFunction(I){fr(I)}})},Zn=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,hr=(x,v,I)=>{var V=x>>1,ee=Et(A,V,v/2,I);if(ee-V>16&&Zn)return Zn.decode(A.subarray(V,ee));for(var Me="",be=V;be<ee;++be){var Ae=A[be];Me+=String.fromCharCode(Ae)}return Me},Ba=(x,v,I)=>{if(I??=2147483647,I<2)return 0;I-=2;for(var V=v,ee=I<x.length*2?I/2:x.length,Me=0;Me<ee;++Me){var be=x.charCodeAt(Me);w[v>>1]=be,v+=2}return w[v>>1]=0,v-V},Um=x=>x.length*2,Nm=(x,v,I)=>{for(var V="",ee=x>>2,Me=0;!(Me>=v/4);Me++){var be=S[ee+Me];if(!be&&!I)break;V+=String.fromCodePoint(be)}return V},Fm=(x,v,I)=>{if(I??=2147483647,I<4)return 0;for(var V=v,ee=V+I-4,Me=0;Me<x.length;++Me){var be=x.codePointAt(Me);if(be>65535&&Me++,F[v>>2]=be,v+=4,v+4>ee)break}return F[v>>2]=0,v-V},Om=x=>{for(var v=0,I=0;I<x.length;++I){var V=x.codePointAt(I);V>65535&&I++,v+=4}return v},Bm=(x,v,I)=>{I=E(I);var V,ee,Me;v===2?(V=hr,ee=Ba,Me=Um):(V=Nm,ee=Fm,Me=Om),ie(x,{name:I,fromWireType:be=>{var Ae=S[be>>2],Ne=V(be+4,Ae*v,!0);return fr(be),Ne},toWireType:(be,Ae)=>{typeof Ae!="string"&&N(`Cannot pass non-string to C++ string type ${I}`);var Ne=Me(Ae),it=bl(4+Ne+v);return S[it>>2]=Ne/v,ee(Ae,it+4,Ne+v),be!==null&&be.push(fr,it),it},readValueFromPointer:te,destructorFunction(be){fr(be)}})},zm=(x,v,I,V,ee,Me)=>{X[x]={name:E(v),rawConstructor:tn(I,V),rawDestructor:tn(ee,Me),fields:[]}},Vm=(x,v,I,V,ee,Me,be,Ae,Ne,it)=>{X[x].fields.push({fieldName:E(v),getterReturnType:I,getter:tn(V,ee),getterContext:Me,setterArgumentType:be,setter:tn(Ae,Ne),setterContext:it})},km=(x,v)=>{v=E(v),ie(x,{isVoid:!0,name:v,fromWireType:()=>{},toWireType:(I,V)=>{}})},Ml=[],Hm=x=>{var v=Ml.length;return Ml.push(x),v},Gm=(x,v)=>{for(var I=new Array(x),V=0;V<x;++V)I[V]=zt(S[v+V*4>>2],`parameter ${V}`);return I},Wm=(x,v,I)=>{var V=[],ee=x(V,I);return V.length&&(S[v>>2]=Ye.toHandle(V)),ee},Xm={},_h=x=>{var v=Xm[x];return v===void 0?E(x):v},$m=(x,v,I)=>{var V=8,[ee,...Me]=Gm(x,v),be=ee.toWireType.bind(ee),Ae=Me.map(Mt=>Mt.readValueFromPointer.bind(Mt));x--;var Ne={toValue:Ye.toValue},it=Ae.map((Mt,Xt)=>{var an=`argFromPtr${Xt}`;return Ne[an]=Mt,`${an}(args${Xt?"+"+Xt*V:""})`}),tt;switch(I){case 0:tt="toValue(handle)";break;case 2:tt="new (toValue(handle))";break;case 3:tt="";break;case 1:Ne.getStringOrSymbol=_h,tt="toValue(handle)[getStringOrSymbol(methodName)]";break}tt+=`(${it})`,ee.isVoid||(Ne.toReturnWire=be,Ne.emval_returnValue=Wm,tt=`return emval_returnValue(toReturnWire, destructorsRef, ${tt})`),tt=`return function (handle, methodName, destructorsRef, args) {
  ${tt}
  }`;var Tt=new Function(Object.keys(Ne),tt)(...Object.values(Ne)),Wt=`methodCaller<(${Me.map(Mt=>Mt.name)}) => ${ee.name}>`;return Hm(Le(Wt,Tt))},qm=(x,v)=>(x=Ye.toValue(x),v=Ye.toValue(v),Ye.toHandle(x[v])),Ym=x=>{x>9&&(ke[x+1]+=1)},Km=(x,v,I,V,ee)=>Ml[x](v,I,V,ee),Zm=x=>Ye.toHandle(_h(x)),Jm=x=>{var v=Ye.toValue(x);H(v),Je(x)},jm=()=>2147483648,Qm=(x,v)=>Math.ceil(x/v)*v,eg=x=>{var v=za.buffer.byteLength,I=(x-v+65535)/65536|0;try{return za.grow(I),k(),1}catch{}},tg=x=>{var v=y.length;x>>>=0;var I=jm();if(x>I)return!1;for(var V=1;V<=4;V*=2){var ee=v*(1+.2/V);ee=Math.min(ee,x+100663296);var Me=Math.min(I,Qm(Math.max(x,ee),65536)),be=eg(Me);if(be)return!0}return!1};if($e(),Us(),t.noExitRuntime&&t.noExitRuntime,t.print&&t.print,t.printErr&&(d=t.printErr),t.wasmBinary&&(_=t.wasmBinary),t.arguments&&t.arguments,t.thisProgram&&t.thisProgram,t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();var vh,bl,fr,za,xh;function ng(x){vh=x.F,bl=x.H,fr=x.I,za=x.D,xh=x.G}var ig={h:U,x:W,v:Ue,u:Pe,B:ae,e:yl,g:q,a:le,f:We,z:mt,n:bt,c:Ut,t:nn,b:Ze,i:sn,d:vt,A:Lt,q:Bm,w:zm,p:Vm,C:km,l:$m,m:Je,r:qm,o:Ym,k:Km,s:Zm,j:Jm,y:tg};function rg(){Q();function x(){t.calledRun=!0,!M&&(ce(),p?.(t),t.onRuntimeInitialized?.(),j())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),x()},1)):x()}var Bs;Bs=await st(),rg();function sg(x){if(x.length%2!=0)throw"MakePath64: intArray.length must be even";const v=x.length/2,I=new BigInt64Array(v*3);for(let ee=0,Me=0;ee<x.length;ee+=2,Me+=3){const be=x[ee],Ae=x[ee+1];I[Me]=typeof be=="bigint"?be:BigInt(be),I[Me+1]=typeof Ae=="bigint"?Ae:BigInt(Ae)}let V=new t.Path64;return V.assign(I),V}t.MakePath64=sg;function ag(x){if(x.length%3!=0)throw"MakePathZ64: intArray.length must be multiple of 3";const v=new BigInt64Array(x.length);for(let V=0;V<x.length;V++){const ee=x[V];v[V]=typeof ee=="bigint"?ee:BigInt(ee)}let I=new t.Path64;return I.assign(v),I}t.MakePathZ64=ag;function og(x){if(x.length%2!=0)throw"MakePathD: intArray.length must be even";const v=x.length/2,I=new Float64Array(v*3);for(let ee=0,Me=0;ee<x.length;ee+=2,Me+=3)I[Me]=x[ee],I[Me+1]=x[ee+1];let V=new t.PathD;return V.assign(I),V}t.MakePathD=og;function lg(x){if(x.length%3!=0)throw"MakePathZD: intArray.length must be multiple of 3";const v=x instanceof Float64Array?x:Float64Array.from(x);let I=new t.PathD;return I.assign(v),I}t.MakePathZD=lg;function Sh(x){const v=x.view(),I=new BigInt64Array(v.length);for(let ee=0;ee<v.length;ee++)I[ee]=BigInt(Math.round(v[ee]));let V=new t.Path64;return V.assign(I),V}t.PathDToPath64=Sh;function yh(x){const v=x.view(),I=new Float64Array(v.length);for(let ee=0;ee<v.length;ee++)I[ee]=Number(v[ee]);let V=new t.PathD;return V.assign(I),V}t.Path64ToPathD=yh;function cg(x){let v=new t.PathsD;for(let I=0;I<x.size();I++){const V=x.get(I);let ee=yh(V);v.push_back(ee),ee.delete(),V.delete()}return v}t.Paths64ToPathsD=cg;function ug(x){let v=new t.Paths64;for(let I=0;I<x.size();I++){const V=x.get(I);let ee=Sh(V);v.push_back(ee),ee.delete(),V.delete()}return v}return t.PathsDToPaths64=ug,se?e=t:e=new Promise((x,v)=>{p=x,T=v}),e}let zl=null;function Hv(){return zl||(zl=kv()),zl}function Gv(n,e){const t=[];for(const i of e)t.push(i.x,i.y);return n.MakePathD(t)}function cf(n,e){const t=n.PathsD,i=new t;for(const r of e)r.length>=3&&i.push_back(Gv(n,r));return i}function Wv(n){const e=n.size(),t=[];for(let i=0;i<e;i++){const r=n.get(i);t.push({x:r.x,y:r.y})}return t}function Xv(n){const e=[],t=n.size();for(let i=0;i<t;i++)e.push(Wv(n.get(i)));return e}async function uf(n,e){const t=await Hv(),i=cf(t,n),r=cf(t,e),a=t.IntersectD(i,r,t.FillRule.NonZero,6),o=Math.abs(t.AreaPathsD(a));return{regions:Xv(a),area:o,intersects:o>1e-8}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zu="186",ji={ROTATE:0,DOLLY:1,PAN:2},ms={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$v=0,hf=1,qv=2,Co=1,Yv=2,js=3,qr=0,Dn=1,Si=2,Qi=0,oa=1,ff=2,df=3,pf=4,Kv=5,ps=100,Zv=101,Jv=102,jv=103,Qv=104,e0=200,t0=201,n0=202,i0=203,Up=204,Np=205,r0=206,s0=207,a0=208,o0=209,l0=210,c0=211,u0=212,h0=213,f0=214,Bc=0,zc=1,Vc=2,xa=3,kc=4,Hc=5,Gc=6,Wc=7,Fp=0,d0=1,p0=2,Ti=0,Op=1,Bp=2,zp=3,Vp=4,kp=5,Hp=6,Gp=7,Wp=300,Yr=301,Ts=302,Vl=303,kl=304,hl=306,Xc=1e3,Ki=1001,$c=1002,cn=1003,m0=1004,Ya=1005,mn=1006,Hl=1007,Gr=1008,Fn=1009,Xp=1010,$p=1011,Sa=1012,Ju=1013,Ri=1014,Mi=1015,Ci=1016,ju=1017,Qu=1018,ya=1020,qp=35902,Yp=35899,Kp=1021,Zp=1022,ri=1023,or=1026,Wr=1027,Jp=1028,eh=1029,Kr=1030,th=1031,nh=1033,Po=33776,Do=33777,Lo=33778,Io=33779,qc=35840,Yc=35841,Kc=35842,Zc=35843,Jc=36196,jc=37492,Qc=37496,eu=37488,tu=37489,Wo=37490,nu=37491,iu=37808,ru=37809,su=37810,au=37811,ou=37812,lu=37813,cu=37814,uu=37815,hu=37816,fu=37817,du=37818,pu=37819,mu=37820,gu=37821,_u=36492,vu=36494,xu=36495,Su=36283,yu=36284,Xo=36285,Mu=36286,g0=3200,bu=0,_0=1,yr="",Wn="srgb",$o="srgb-linear",qo="linear",Ct="srgb",Gl=7680,v0=519,x0=512,S0=513,y0=514,ih=515,M0=516,b0=517,rh=518,E0=519,T0=35044,mf="300 es",bi=2e3,Ma=2001;function A0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Yo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function w0(){const n=Yo("canvas");return n.style.display="block",n}const gf={};function _f(...n){const e="THREE."+n.shift();console.log(e,...n)}function jp(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ut(...n){n=jp(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function yt(...n){n=jp(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ys(...n){const e=n.join(" ");e in gf||(gf[e]=!0,ut(...n))}function R0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const C0={[Bc]:zc,[Vc]:Gc,[kc]:Wc,[xa]:Hc,[zc]:Bc,[Gc]:Vc,[Wc]:kc,[Hc]:xa};class wr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],la=Math.PI/180,Eu=180/Math.PI;function Cs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function gt(n,e,t){return Math.max(e,Math.min(t,n))}function P0(n,e){return(n%e+e)%e}function Wl(n,e,t){return(1-t)*n+t*e}function ks(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Rn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const D0={DEG2RAD:la};class Fe{static{Fe.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[a+0],d=s[a+1],_=s[a+2],M=s[a+3];if(f!==M||l!==h||c!==d||u!==_){let m=l*h+c*d+u*_+f*M;m<0&&(h=-h,d=-d,_=-_,M=-M,m=-m);let p=1-o;if(m<.9995){const T=Math.acos(m),D=Math.sin(T);p=Math.sin(p*T)/D,o=Math.sin(o*T)/D,l=l*p+h*o,c=c*p+d*o,u=u*p+_*o,f=f*p+M*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+_*o,f=f*p+M*o;const T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],d=s[a+2],_=s[a+3];return e[t]=o*_+u*f+l*d-c*h,e[t+1]=l*_+u*h+c*f-o*d,e[t+2]=c*_+u*d+o*h-l*f,e[t+3]=u*_-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),d=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{static{K.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xl.copy(this).projectOnVector(e),this.sub(Xl)}reflect(e){return this.sub(Xl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xl=new K,vf=new Tr;class ht{static{ht.prototype.isMatrix3=!0}constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],_=i[8],M=r[0],m=r[3],p=r[6],T=r[1],D=r[4],y=r[7],w=r[2],A=r[5],F=r[8];return s[0]=a*M+o*T+l*w,s[3]=a*m+o*D+l*A,s[6]=a*p+o*y+l*F,s[1]=c*M+u*T+f*w,s[4]=c*m+u*D+f*A,s[7]=c*p+u*y+f*F,s[2]=h*M+d*T+_*w,s[5]=h*m+d*D+_*A,s[8]=h*p+d*y+_*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,_=t*f+i*h+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=f*M,e[1]=(r*c-u*i)*M,e[2]=(o*i-r*a)*M,e[3]=h*M,e[4]=(u*t-r*l)*M,e[5]=(r*s-o*t)*M,e[6]=d*M,e[7]=(i*l-c*t)*M,e[8]=(a*t-i*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($l.makeScale(e,t)),this}rotate(e){return ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($l.makeRotation(-e)),this}translate(e,t){return ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($l.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $l=new ht,xf=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sf=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function L0(){const n={enabled:!0,workingColorSpace:$o,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ct&&(r.r=er(r.r),r.g=er(r.g),r.b=er(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ct&&(r.r=Ms(r.r),r.g=Ms(r.g),r.b=Ms(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===yr?qo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ys("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ys("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[$o]:{primaries:e,whitePoint:i,transfer:qo,toXYZ:xf,fromXYZ:Sf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:e,whitePoint:i,transfer:Ct,toXYZ:xf,fromXYZ:Sf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),n}const xt=L0();function er(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ms(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let es;class I0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{es===void 0&&(es=Yo("canvas")),es.width=e.width,es.height=e.height;const r=es.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=es}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=er(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(er(t[i]/255)*255):t[i]=er(t[i]);return{data:t,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let U0=0;class sh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Cs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ql(r[a].image)):s.push(ql(r[a]))}else s=ql(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ql(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?I0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let N0=0;const Yl=new K;class En extends wr{constructor(e=En.DEFAULT_IMAGE,t=En.DEFAULT_MAPPING,i=Ki,r=Ki,s=mn,a=Gr,o=ri,l=Fn,c=En.DEFAULT_ANISOTROPY,u=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=Cs(),this.name="",this.source=new sh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yl).x}get height(){return this.source.getSize(Yl).y}get depth(){return this.source.getSize(Yl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ut(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ut(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xc:e.x=e.x-Math.floor(e.x);break;case Ki:e.x=e.x<0?0:1;break;case $c:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xc:e.y=e.y-Math.floor(e.y);break;case Ki:e.y=e.y<0?0:1;break;case $c:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Wp;En.DEFAULT_ANISOTROPY=1;class Ht{static{Ht.prototype.isVector4=!0}constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+M)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(c+1)/2,y=(d+1)/2,w=(p+1)/2,A=(u+h)/4,F=(f+M)/4,S=(_+m)/4;return D>y&&D>w?D<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(D),r=A/i,s=F/i):y>w?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=S/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=F/s,r=S/s),this.set(i,r,s,t),this}let T=Math.sqrt((m-_)*(m-_)+(f-M)*(f-M)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(f-M)/T,this.z=(h-u)/T,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class F0 extends wr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ht(0,0,e,t),this.scissorTest=!1,this.viewport=new Ht(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new En(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new sh(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends F0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Qp extends En{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class O0 extends En{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Bt{static{Bt.prototype.isMatrix4=!0}constructor(e,t,i,r,s,a,o,l,c,u,f,h,d,_,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,h,d,_,M,m)}set(e,t,i,r,s,a,o,l,c,u,f,h,d,_,M,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/ts.setFromMatrixColumn(e,0).length(),s=1/ts.setFromMatrixColumn(e,1).length(),a=1/ts.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,_=o*u,M=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+_*c,t[5]=h-M*c,t[9]=-o*l,t[2]=M-h*c,t[6]=_+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,_=c*u,M=c*f;t[0]=h+M*o,t[4]=_*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-_,t[6]=M+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,_=c*u,M=c*f;t[0]=h-M*o,t[4]=-a*f,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*u,t[9]=M-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,_=o*u,M=o*f;t[0]=l*u,t[4]=_*c-d,t[8]=h*c+M,t[1]=l*f,t[5]=M*c+h,t[9]=d*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,_=o*l,M=o*c;t[0]=l*u,t[4]=M-h*f,t[8]=_*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+_,t[10]=h-M*f}else if(e.order==="XZY"){const h=a*l,d=a*c,_=o*l,M=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+M,t[5]=a*u,t[9]=d*f-_,t[2]=_*f-d,t[6]=o*u,t[10]=M*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(B0,e,z0)}lookAt(e,t,i){const r=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),pr.crossVectors(i,In),pr.lengthSq()===0&&(Math.abs(i.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),pr.crossVectors(i,In)),pr.normalize(),Ka.crossVectors(In,pr),r[0]=pr.x,r[4]=Ka.x,r[8]=In.x,r[1]=pr.y,r[5]=Ka.y,r[9]=In.y,r[2]=pr.z,r[6]=Ka.z,r[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],_=i[2],M=i[6],m=i[10],p=i[14],T=i[3],D=i[7],y=i[11],w=i[15],A=r[0],F=r[4],S=r[8],L=r[12],B=r[1],G=r[5],ne=r[9],se=r[13],k=r[2],Q=r[6],ce=r[10],j=r[14],me=r[3],ue=r[7],xe=r[11],ge=r[15];return s[0]=a*A+o*B+l*k+c*me,s[4]=a*F+o*G+l*Q+c*ue,s[8]=a*S+o*ne+l*ce+c*xe,s[12]=a*L+o*se+l*j+c*ge,s[1]=u*A+f*B+h*k+d*me,s[5]=u*F+f*G+h*Q+d*ue,s[9]=u*S+f*ne+h*ce+d*xe,s[13]=u*L+f*se+h*j+d*ge,s[2]=_*A+M*B+m*k+p*me,s[6]=_*F+M*G+m*Q+p*ue,s[10]=_*S+M*ne+m*ce+p*xe,s[14]=_*L+M*se+m*j+p*ge,s[3]=T*A+D*B+y*k+w*me,s[7]=T*F+D*G+y*Q+w*ue,s[11]=T*S+D*ne+y*ce+w*xe,s[15]=T*L+D*se+y*j+w*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],M=e[7],m=e[11],p=e[15],T=l*d-c*h,D=o*d-c*f,y=o*h-l*f,w=a*d-c*u,A=a*h-l*u,F=a*f-o*u;return t*(M*T-m*D+p*y)-i*(_*T-m*w+p*A)+r*(_*D-M*w+p*F)-s*(_*y-M*A+m*F)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],M=e[13],m=e[14],p=e[15],T=t*o-i*a,D=t*l-r*a,y=t*c-s*a,w=i*l-r*o,A=i*c-s*o,F=r*c-s*l,S=u*M-f*_,L=u*m-h*_,B=u*p-d*_,G=f*m-h*M,ne=f*p-d*M,se=h*p-d*m,k=T*se-D*ne+y*G+w*B-A*L+F*S;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/k;return e[0]=(o*se-l*ne+c*G)*Q,e[1]=(r*ne-i*se-s*G)*Q,e[2]=(M*F-m*A+p*w)*Q,e[3]=(h*A-f*F-d*w)*Q,e[4]=(l*B-a*se-c*L)*Q,e[5]=(t*se-r*B+s*L)*Q,e[6]=(m*y-_*F-p*D)*Q,e[7]=(u*F-h*y+d*D)*Q,e[8]=(a*ne-o*B+c*S)*Q,e[9]=(i*B-t*ne-s*S)*Q,e[10]=(_*A-M*y+p*T)*Q,e[11]=(f*y-u*A-d*T)*Q,e[12]=(o*L-a*G-l*S)*Q,e[13]=(t*G-i*L+r*S)*Q,e[14]=(M*D-_*w-m*T)*Q,e[15]=(u*w-f*D+h*T)*Q,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,_=s*f,M=a*u,m=a*f,p=o*f,T=l*c,D=l*u,y=l*f,w=i.x,A=i.y,F=i.z;return r[0]=(1-(M+p))*w,r[1]=(d+y)*w,r[2]=(_-D)*w,r[3]=0,r[4]=(d-y)*A,r[5]=(1-(h+p))*A,r[6]=(m+T)*A,r[7]=0,r[8]=(_+D)*F,r[9]=(m-T)*F,r[10]=(1-(h+M))*F,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=ts.set(r[0],r[1],r[2]).length();const o=ts.set(r[4],r[5],r[6]).length(),l=ts.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Qn.copy(this);const c=1/a,u=1/o,f=1/l;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=u,Qn.elements[5]*=u,Qn.elements[6]*=u,Qn.elements[8]*=f,Qn.elements[9]*=f,Qn.elements[10]*=f,t.setFromRotationMatrix(Qn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=bi,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let _,M;if(l)_=s/(a-s),M=a*s/(a-s);else if(o===bi)_=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===Ma)_=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=bi,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),d=-(i+r)/(i-r);let _,M;if(l)_=1/(a-s),M=a/(a-s);else if(o===bi)_=-2/(a-s),M=-(a+s)/(a-s);else if(o===Ma)_=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ts=new K,Qn=new Bt,B0=new K(0,0,0),z0=new K(1,1,1),pr=new K,Ka=new K,In=new K,yf=new Bt,Mf=new Tr;class Ar{constructor(e=0,t=0,i=0,r=Ar.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return yf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mf.setFromEuler(this),this.setFromQuaternion(Mf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ar.DEFAULT_ORDER="XYZ";class ah{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let V0=0;const bf=new K,ns=new Tr,Bi=new Bt,Za=new K,Hs=new K,k0=new K,H0=new Tr,Ef=new K(1,0,0),Tf=new K(0,1,0),Af=new K(0,0,1),wf={type:"added"},G0={type:"removed"},is={type:"childadded",child:null},Kl={type:"childremoved",child:null};class un extends wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=Cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new K,t=new Ar,i=new Tr,r=new K(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Bt},normalMatrix:{value:new ht}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,t){return ns.setFromAxisAngle(e,t),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(Ef,e)}rotateY(e){return this.rotateOnAxis(Tf,e)}rotateZ(e){return this.rotateOnAxis(Af,e)}translateOnAxis(e,t){return bf.copy(e).applyQuaternion(this.quaternion),this.position.add(bf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ef,e)}translateY(e){return this.translateOnAxis(Tf,e)}translateZ(e){return this.translateOnAxis(Af,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Za.copy(e):Za.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(Hs,Za,this.up):Bi.lookAt(Za,Hs,this.up),this.quaternion.setFromRotationMatrix(Bi),r&&(Bi.extractRotation(r.matrixWorld),ns.setFromRotationMatrix(Bi),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(yt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wf),is.child=e,this.dispatchEvent(is),is.child=null):yt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(G0),Kl.child=e,this.dispatchEvent(Kl),Kl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wf),is.child=e,this.dispatchEvent(is),is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,e,k0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,H0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}un.DEFAULT_UP=new K(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class gs extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const W0={type:"move"};class Zl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,i),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(W0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new gs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const em={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},Ja={h:0,s:0,l:0};function Jl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class St{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=xt.workingColorSpace){if(e=P0(e,1),t=gt(t,0,1),i=gt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Jl(a,s,e+1/3),this.g=Jl(a,s,e),this.b=Jl(a,s,e-1/3)}return xt.colorSpaceToWorking(this,r),this}setStyle(e,t=Wn){function i(s){s!==void 0&&parseFloat(s)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ut("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wn){const i=em[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return xt.workingToColorSpace(dn.copy(this),e),Math.round(gt(dn.r*255,0,255))*65536+Math.round(gt(dn.g*255,0,255))*256+Math.round(gt(dn.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(dn.copy(this),t);const i=dn.r,r=dn.g,s=dn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=Wn){xt.workingToColorSpace(dn.copy(this),e);const t=dn.r,i=dn.g,r=dn.b;return e!==Wn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+t,mr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(mr),e.getHSL(Ja);const i=Wl(mr.h,Ja.h,t),r=Wl(mr.s,Ja.s,t),s=Wl(mr.l,Ja.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new St;St.NAMES=em;class X0 extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ar,this.environmentIntensity=1,this.environmentRotation=new Ar,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ei=new K,zi=new K,jl=new K,Vi=new K,rs=new K,ss=new K,Rf=new K,Ql=new K,ec=new K,tc=new K,nc=new Ht,ic=new Ht,rc=new Ht;class Xn{constructor(e=new K,t=new K,i=new K){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ei.subVectors(e,t),r.cross(ei);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ei.subVectors(r,t),zi.subVectors(i,t),jl.subVectors(e,t);const a=ei.dot(ei),o=ei.dot(zi),l=ei.dot(jl),c=zi.dot(zi),u=zi.dot(jl),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-d-_,_,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vi.x),l.addScaledVector(a,Vi.y),l.addScaledVector(o,Vi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return nc.setScalar(0),ic.setScalar(0),rc.setScalar(0),nc.fromBufferAttribute(e,t),ic.fromBufferAttribute(e,i),rc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(nc,s.x),a.addScaledVector(ic,s.y),a.addScaledVector(rc,s.z),a}static isFrontFacing(e,t,i,r){return ei.subVectors(i,t),zi.subVectors(e,t),ei.cross(zi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ei.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),ei.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Xn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;rs.subVectors(r,i),ss.subVectors(s,i),Ql.subVectors(e,i);const l=rs.dot(Ql),c=ss.dot(Ql);if(l<=0&&c<=0)return t.copy(i);ec.subVectors(e,r);const u=rs.dot(ec),f=ss.dot(ec);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(rs,a);tc.subVectors(e,s);const d=rs.dot(tc),_=ss.dot(tc);if(_>=0&&d<=_)return t.copy(s);const M=d*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(ss,o);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return Rf.subVectors(s,r),o=(f-u)/(f-u+(d-_)),t.copy(r).addScaledVector(Rf,o);const p=1/(m+M+h);return a=M*p,o=h*p,t.copy(i).addScaledVector(rs,a).addScaledVector(ss,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Da{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ti):ti.fromBufferAttribute(s,a),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ja.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ja.copy(i.boundingBox)),ja.applyMatrix4(e.matrixWorld),this.union(ja)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),Qa.subVectors(this.max,Gs),as.subVectors(e.a,Gs),os.subVectors(e.b,Gs),ls.subVectors(e.c,Gs),gr.subVectors(os,as),_r.subVectors(ls,os),Nr.subVectors(as,ls);let t=[0,-gr.z,gr.y,0,-_r.z,_r.y,0,-Nr.z,Nr.y,gr.z,0,-gr.x,_r.z,0,-_r.x,Nr.z,0,-Nr.x,-gr.y,gr.x,0,-_r.y,_r.x,0,-Nr.y,Nr.x,0];return!sc(t,as,os,ls,Qa)||(t=[1,0,0,0,1,0,0,0,1],!sc(t,as,os,ls,Qa))?!1:(eo.crossVectors(gr,_r),t=[eo.x,eo.y,eo.z],sc(t,as,os,ls,Qa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ki=[new K,new K,new K,new K,new K,new K,new K,new K],ti=new K,ja=new Da,as=new K,os=new K,ls=new K,gr=new K,_r=new K,Nr=new K,Gs=new K,Qa=new K,eo=new K,Fr=new K;function sc(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Fr.fromArray(n,s);const o=r.x*Math.abs(Fr.x)+r.y*Math.abs(Fr.y)+r.z*Math.abs(Fr.z),l=e.dot(Fr),c=t.dot(Fr),u=i.dot(Fr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Kt=new K,to=new Fe;let $0=0;class tr extends wr{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=T0,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)to.fromBufferAttribute(this,t),to.applyMatrix3(e),this.setXY(t,to.x,to.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ks(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Rn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ks(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ks(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ks(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ks(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),i=Rn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),i=Rn(i,this.array),r=Rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),i=Rn(i,this.array),r=Rn(r,this.array),s=Rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class tm extends tr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class nm extends tr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Zt extends tr{constructor(e,t,i){super(new Float32Array(e),t,i)}}const q0=new Da,Ws=new K,ac=new K;class fl{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):q0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);const t=Ws.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ws,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ac.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add(ac)),this.expandByPoint(Ws.copy(e.center).sub(ac))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Y0=0;const kn=new Bt,oc=new un,cs=new K,Un=new Da,Xs=new Da,rn=new K;class _n extends wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=Cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(A0(e)?nm:tm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ht().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,i){return kn.makeTranslation(e,t,i),this.applyMatrix4(kn),this}scale(e,t,i){return kn.makeScale(e,t,i),this.applyMatrix4(kn),this}lookAt(e){return oc.lookAt(e),oc.updateMatrix(),this.applyMatrix4(oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Zt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Da);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Un.setFromBufferAttribute(s),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Xs.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(Un.min,Xs.min),Un.expandByPoint(rn),rn.addVectors(Un.max,Xs.max),Un.expandByPoint(rn)):(Un.expandByPoint(Xs.min),Un.expandByPoint(Xs.max))}Un.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)rn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(rn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)rn.fromBufferAttribute(o,c),l&&(cs.fromBufferAttribute(e,c),rn.add(cs)),r=Math.max(r,i.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new tr(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let S=0;S<i.count;S++)o[S]=new K,l[S]=new K;const c=new K,u=new K,f=new K,h=new Fe,d=new Fe,_=new Fe,M=new K,m=new K;function p(S,L,B){c.fromBufferAttribute(i,S),u.fromBufferAttribute(i,L),f.fromBufferAttribute(i,B),h.fromBufferAttribute(s,S),d.fromBufferAttribute(s,L),_.fromBufferAttribute(s,B),u.sub(c),f.sub(c),d.sub(h),_.sub(h);const G=1/(d.x*_.y-_.x*d.y);isFinite(G)&&(M.copy(u).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(G),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(G),o[S].add(M),o[L].add(M),o[B].add(M),l[S].add(m),l[L].add(m),l[B].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let S=0,L=T.length;S<L;++S){const B=T[S],G=B.start,ne=B.count;for(let se=G,k=G+ne;se<k;se+=3)p(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const D=new K,y=new K,w=new K,A=new K;function F(S){w.fromBufferAttribute(r,S),A.copy(w);const L=o[S];D.copy(L),D.sub(w.multiplyScalar(w.dot(L))).normalize(),y.crossVectors(A,L);const G=y.dot(l[S])<0?-1:1;a.setXYZW(S,D.x,D.y,D.z,G)}for(let S=0,L=T.length;S<L;++S){const B=T[S],G=B.start,ne=B.count;for(let se=G,k=G+ne;se<k;se+=3)F(e.getX(se+0)),F(e.getX(se+1)),F(e.getX(se+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new tr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new K,s=new K,a=new K,o=new K,l=new K,c=new K,u=new K,f=new K;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),M=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?d=l[M]*o.data.stride+o.offset:d=l[M]*u;for(let p=0;p<u;p++)h[_++]=c[d++]}return new tr(h,u,f)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _n,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lc=new K,K0=new K,Z0=new ht;class Xi{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=lc.subVectors(i,t).cross(K0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(lc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Z0.getNormalMatrix(e),r=this.coplanarPoint(lc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let J0=0;class Ps extends wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=Cs(),this.name="",this.type="Material",this.blending=oa,this.side=qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Up,this.blendDst=Np,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=v0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gl,this.stencilZFail=Gl,this.stencilZPass=Gl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ut(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ut(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new St().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Xi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Fe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Fe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Hi=new K,cc=new K,no=new K,io=new K;class dl{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){cc.copy(e).add(t).multiplyScalar(.5),no.copy(t).sub(e).normalize(),io.copy(this.origin).sub(cc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(no),o=io.dot(this.direction),l=-io.dot(no),c=io.lengthSq(),u=Math.abs(1-a*a);let f,h,d,_;if(u>0)if(f=a*l-o,h=a*o-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const M=1/u;f*=M,h*=M,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(cc).addScaledVector(no,h),d}intersectSphere(e,t){if(e.radius<0)return null;Hi.subVectors(e.center,this.origin);const i=Hi.dot(this.direction),r=Hi.dot(Hi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,h=e.y-a.y,d=e.z-a.z,_=t.x-a.x,M=t.y-a.y,m=t.z-a.z,p=i.x-a.x,T=i.y-a.y,D=i.z-a.z,y=Math.abs(l),w=Math.abs(c),A=Math.abs(u);let F,S,L,B,G,ne,se,k,Q,ce,j,me;if(y>=w&&y>=A?(L=l,ne=f,Q=_,me=p,l>=0?(F=c,S=u,B=h,G=d,se=M,k=m,ce=T,j=D):(F=u,S=c,B=d,G=h,se=m,k=M,ce=D,j=T)):w>=A?(L=c,ne=h,Q=M,me=T,c>=0?(F=u,S=l,B=d,G=f,se=m,k=_,ce=D,j=p):(F=l,S=u,B=f,G=d,se=_,k=m,ce=p,j=D)):(L=u,ne=d,Q=m,me=D,u>=0?(F=l,S=c,B=f,G=h,se=_,k=M,ce=p,j=T):(F=c,S=l,B=h,G=f,se=M,k=_,ce=T,j=p)),L===0)return null;const ue=F/L,xe=S/L,ge=1/L,Ie=B-ue*ne,Be=G-xe*ne,nt=se-ue*Q,rt=k-xe*Q,st=ce-ue*me,_e=j-xe*me,he=st*rt-_e*nt,Ee=Ie*_e-Be*st,qe=nt*Be-rt*Ie;if(r){if(he<0||Ee<0||qe<0)return null}else if((he<0||Ee<0||qe<0)&&(he>0||Ee>0||qe>0))return null;const Oe=he+Ee+qe;if(Oe===0)return null;const R=ge*(he*ne+Ee*Q+qe*me);return(Oe>0?R<0:R>0)?null:this.at(R/Oe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ca extends Ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ar,this.combine=Fp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Cf=new Bt,Or=new dl,ro=new fl,Pf=new K,so=new K,ao=new K,oo=new K,uc=new K,lo=new K,Df=new K,co=new K;class Bn extends un{constructor(e=new _n,t=new ca){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){lo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(uc.fromBufferAttribute(f,e),a?lo.addScaledVector(uc,u):lo.addScaledVector(uc.sub(t),u))}t.add(lo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ro.copy(i.boundingSphere),ro.applyMatrix4(s),Or.copy(e.ray).recast(e.near),!(ro.containsPoint(Or.origin)===!1&&(Or.intersectSphere(ro,Pf)===null||Or.origin.distanceToSquared(Pf)>(e.far-e.near)**2))&&(Cf.copy(s).invert(),Or.copy(e.ray).applyMatrix4(Cf),!(i.boundingBox!==null&&Or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Or)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=h.length;_<M;_++){const m=h[_],p=a[m.materialIndex],T=Math.max(m.start,d.start),D=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=T,w=D;y<w;y+=3){const A=o.getX(y),F=o.getX(y+1),S=o.getX(y+2);r=uo(this,p,e,i,c,u,f,A,F,S),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let m=_,p=M;m<p;m+=3){const T=o.getX(m),D=o.getX(m+1),y=o.getX(m+2);r=uo(this,a,e,i,c,u,f,T,D,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,M=h.length;_<M;_++){const m=h[_],p=a[m.materialIndex],T=Math.max(m.start,d.start),D=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=T,w=D;y<w;y+=3){const A=y,F=y+1,S=y+2;r=uo(this,p,e,i,c,u,f,A,F,S),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let m=_,p=M;m<p;m+=3){const T=m,D=m+1,y=m+2;r=uo(this,a,e,i,c,u,f,T,D,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function j0(n,e,t,i,r,s,a,o){let l;if(e.side===Dn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===qr,o),l===null)return null;co.copy(o),co.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(co);return c<t.near||c>t.far?null:{distance:c,point:co.clone(),object:n}}function uo(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,so),n.getVertexPosition(l,ao),n.getVertexPosition(c,oo);const u=j0(n,e,t,i,so,ao,oo,Df);if(u){const f=new K;Xn.getBarycoord(Df,so,ao,oo,f),r&&(u.uv=Xn.getInterpolatedAttribute(r,o,l,c,f,new Fe)),s&&(u.uv1=Xn.getInterpolatedAttribute(s,o,l,c,f,new Fe)),a&&(u.normal=Xn.getInterpolatedAttribute(a,o,l,c,f,new K),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new K,materialIndex:0};Xn.getNormal(so,ao,oo,h.normal),u.face=h,u.barycoord=f}return u}class Q0 extends En{constructor(e=null,t=1,i=1,r,s,a,o,l,c=cn,u=cn,f,h){super(null,a,o,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Br=new fl,ex=new Fe(.5,.5),ho=new K;class oh{constructor(e=new Xi,t=new Xi,i=new Xi,r=new Xi,s=new Xi,a=new Xi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=bi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],_=s[8],M=s[9],m=s[10],p=s[11],T=s[12],D=s[13],y=s[14],w=s[15];if(r[0].setComponents(c-a,d-u,p-_,w-T).normalize(),r[1].setComponents(c+a,d+u,p+_,w+T).normalize(),r[2].setComponents(c+o,d+f,p+M,w+D).normalize(),r[3].setComponents(c-o,d-f,p-M,w-D).normalize(),i)r[4].setComponents(l,h,m,y).normalize(),r[5].setComponents(c-l,d-h,p-m,w-y).normalize();else if(r[4].setComponents(c-l,d-h,p-m,w-y).normalize(),t===bi)r[5].setComponents(c+l,d+h,p+m,w+y).normalize();else if(t===Ma)r[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){Br.center.set(0,0,0);const t=ex.distanceTo(e.center);return Br.radius=.7071067811865476+t,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ho.x=r.normal.x>0?e.max.x:e.min.x,ho.y=r.normal.y>0?e.max.y:e.min.y,ho.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Uo extends Ps{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ko=new K,Zo=new K,Lf=new Bt,$s=new dl,fo=new fl,hc=new K,If=new K;class lh extends un{constructor(e=new _n,t=new Uo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ko.fromBufferAttribute(t,r-1),Zo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ko.distanceTo(Zo);e.setAttribute("lineDistance",new Zt(i,1))}else ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fo.copy(i.boundingSphere),fo.applyMatrix4(r),fo.radius+=s,e.ray.intersectsSphere(fo)===!1)return;Lf.copy(r).invert(),$s.copy(e.ray).applyMatrix4(Lf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let M=d,m=_-1;M<m;M+=c){const p=u.getX(M),T=u.getX(M+1),D=po(this,e,$s,l,p,T,M);D&&t.push(D)}if(this.isLineLoop){const M=u.getX(_-1),m=u.getX(d),p=po(this,e,$s,l,M,m,_-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let M=d,m=_-1;M<m;M+=c){const p=po(this,e,$s,l,M,M+1,M);p&&t.push(p)}if(this.isLineLoop){const M=po(this,e,$s,l,_-1,d,_-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function po(n,e,t,i,r,s,a){const o=n.geometry.attributes.position;if(Ko.fromBufferAttribute(o,r),Zo.fromBufferAttribute(o,s),t.distanceSqToSegment(Ko,Zo,hc,If)>i)return;hc.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(hc);if(!(c<e.near||c>e.far))return{distance:c,point:If.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}const Uf=new K,Nf=new K;class tx extends lh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Uf.fromBufferAttribute(t,r),Nf.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Uf.distanceTo(Nf);e.setAttribute("lineDistance",new Zt(i,1))}else ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nx extends lh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class im extends En{constructor(e=[],t=Yr,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ba extends En{constructor(e,t,i=Ri,r,s,a,o=cn,l=cn,c,u=or,f=1){if(u!==or&&u!==Wr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class ix extends ba{constructor(e,t=Ri,i=Yr,r,s,a=cn,o=cn,l,c=or){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class rm extends En{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class La extends _n{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(f,2));function _(M,m,p,T,D,y,w,A,F,S,L){const B=y/F,G=w/S,ne=y/2,se=w/2,k=A/2,Q=F+1,ce=S+1;let j=0,me=0;const ue=new K;for(let xe=0;xe<ce;xe++){const ge=xe*G-se;for(let Ie=0;Ie<Q;Ie++){const Be=Ie*B-ne;ue[M]=Be*T,ue[m]=ge*D,ue[p]=k,c.push(ue.x,ue.y,ue.z),ue[M]=0,ue[m]=0,ue[p]=A>0?1:-1,u.push(ue.x,ue.y,ue.z),f.push(Ie/F),f.push(1-xe/S),j+=1}}for(let xe=0;xe<S;xe++)for(let ge=0;ge<F;ge++){const Ie=h+ge+Q*xe,Be=h+ge+Q*(xe+1),nt=h+(ge+1)+Q*(xe+1),rt=h+(ge+1)+Q*xe;l.push(Ie,Be,rt),l.push(Be,nt,rt),me+=6}o.addGroup(d,me,L),d+=me,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}const mo=new K,go=new K,fc=new K,_o=new Xn;class rx extends _n{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(la*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),h={},d=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:M,b:m,c:p}=_o;if(M.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),_o.getNormal(fc),f[0]=`${Math.round(M.x*r)},${Math.round(M.y*r)},${Math.round(M.z*r)}`,f[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,f[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let T=0;T<3;T++){const D=(T+1)%3,y=f[T],w=f[D],A=_o[u[T]],F=_o[u[D]],S=`${y}_${w}`,L=`${w}_${y}`;L in h&&h[L]?(fc.dot(h[L].normal)<=s&&(d.push(A.x,A.y,A.z),d.push(F.x,F.y,F.z)),h[L]=null):S in h||(h[S]={index0:c[T],index1:c[D],normal:fc.clone()})}}for(const _ in h)if(h[_]){const{index0:M,index1:m}=h[_];mo.fromBufferAttribute(o,M),go.fromBufferAttribute(o,m),d.push(mo.x,mo.y,mo.z),d.push(go.x,go.y,go.z)}this.setAttribute("position",new Zt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Di{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ut("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const u=i[r],h=i[r+1]-u,d=(a-u)/h;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new Fe:new K);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new K,r=[],s=[],a=[],o=new K,l=new Bt;for(let d=0;d<=e;d++){const _=d/e;r[d]=this.getTangentAt(_,new K)}s[0]=new K,a[0]=new K;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(gt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,_))}a[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(gt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],d*_)),a[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ch extends Di{constructor(e=0,t=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Fe){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class sx extends ch{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function uh(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,f){let h=(a-s)/c-(o-s)/(c+u)+(o-a)/u,d=(o-a)/u-(l-a)/(u+f)+(l-o)/f;h*=u,d*=u,r(a,o,h,d)},calc:function(s){const a=s*s,o=a*s;return n+e*s+t*a+i*o}}}const Ff=new K,Of=new K,dc=new uh,pc=new uh,mc=new uh;class ax extends Di{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new K){const i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(Of.subVectors(r[0],r[1]).add(r[0]),c=Of);const f=r[o%s],h=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(Ff.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ff),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),d),M=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);M<1e-4&&(M=1),_<1e-4&&(_=M),m<1e-4&&(m=M),dc.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,_,M,m),pc.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,_,M,m),mc.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,_,M,m)}else this.curveType==="catmullrom"&&(dc.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),pc.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),mc.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(dc.calc(l),pc.calc(l),mc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new K().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Bf(n,e,t,i,r){const s=(i-e)*.5,a=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*n+t}function ox(n,e){const t=1-n;return t*t*e}function lx(n,e){return 2*(1-n)*n*e}function cx(n,e){return n*n*e}function ua(n,e,t,i){return ox(n,e)+lx(n,t)+cx(n,i)}function ux(n,e){const t=1-n;return t*t*t*e}function hx(n,e){const t=1-n;return 3*t*t*n*e}function fx(n,e){return 3*(1-n)*n*n*e}function dx(n,e){return n*n*n*e}function ha(n,e,t,i,r){return ux(n,e)+hx(n,t)+fx(n,i)+dx(n,r)}class sm extends Di{constructor(e=new Fe,t=new Fe,i=new Fe,r=new Fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Fe){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ha(e,r.x,s.x,a.x,o.x),ha(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class px extends Di{constructor(e=new K,t=new K,i=new K,r=new K){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new K){const i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ha(e,r.x,s.x,a.x,o.x),ha(e,r.y,s.y,a.y,o.y),ha(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class am extends Di{constructor(e=new Fe,t=new Fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Fe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mx extends Di{constructor(e=new K,t=new K){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new K){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class om extends Di{constructor(e=new Fe,t=new Fe,i=new Fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Fe){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(ua(e,r.x,s.x,a.x),ua(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gx extends Di{constructor(e=new K,t=new K,i=new K){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new K){const i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(ua(e,r.x,s.x,a.x),ua(e,r.y,s.y,a.y),ua(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lm extends Di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Fe){const i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return i.set(Bf(o,l.x,c.x,u.x,f.x),Bf(o,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Fe().fromArray(r))}return this}}var Tu=Object.freeze({__proto__:null,ArcCurve:sx,CatmullRomCurve3:ax,CubicBezierCurve:sm,CubicBezierCurve3:px,EllipseCurve:ch,LineCurve:am,LineCurve3:mx,QuadraticBezierCurve:om,QuadraticBezierCurve3:gx,SplineCurve:lm});class _x extends Di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Tu[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Tu[r.type]().fromJSON(r))}return this}}class zf extends _x{constructor(e){super(),this.type="Path",this.currentPoint=new Fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new am(this.currentPoint.clone(),new Fe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new om(this.currentPoint.clone(),new Fe(e,t),new Fe(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){const o=new sm(this.currentPoint.clone(),new Fe(e,t),new Fe(i,r),new Fe(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new lm(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){const c=new ch(e,t,i,r,s,a,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Jo extends zf{constructor(e){super(e),this.uuid=Cs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new zf().fromJSON(r))}return this}}function vx(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=cm(n,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(i&&(s=bx(n,e,s,t)),n.length>80*t){o=n[0],l=n[1];let u=o,f=l;for(let h=t;h<r;h+=t){const d=n[h],_=n[h+1];d<o&&(o=d),_<l&&(l=_),d>u&&(u=d),_>f&&(f=_)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return Ea(s,a,t,o,l,c,0),a}function cm(n,e,t,i,r){let s;if(r===Ux(n,e,t,i)>0)for(let a=e;a<t;a+=i)s=Vf(a/i|0,n[a],n[a+1],s);else for(let a=t-i;a>=e;a-=i)s=Vf(a/i|0,n[a],n[a+1],s);return s&&As(s,s.next)&&(Aa(s),s=s.next),s}function Zr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(As(t,t.next)||Gt(t.prev,t,t.next)===0)){if(Aa(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ea(n,e,t,i,r,s,a){if(!n)return;!a&&s&&Rx(n,i,r,s);let o=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(s?Sx(n,i,r,s):xx(n)){e.push(l.i,n.i,c.i),Aa(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=yx(Zr(n),e),Ea(n,e,t,i,r,s,2)):a===2&&Mx(n,e,t,i,r,s):Ea(Zr(n),e,t,i,r,s,1);break}}}function xx(n){const e=n.prev,t=n,i=n.next;if(Gt(e,t,i)>=0)return!1;const r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,u=Math.min(r,s,a),f=Math.min(o,l,c),h=Math.max(r,s,a),d=Math.max(o,l,c);let _=i.next;for(;_!==e;){if(_.x>=u&&_.x<=h&&_.y>=f&&_.y<=d&&Qs(r,o,s,l,a,c,_.x,_.y)&&Gt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Sx(n,e,t,i){const r=n.prev,s=n,a=n.next;if(Gt(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,f=s.y,h=a.y,d=Math.min(o,l,c),_=Math.min(u,f,h),M=Math.max(o,l,c),m=Math.max(u,f,h),p=Au(d,_,e,t,i),T=Au(M,m,e,t,i);let D=n.prevZ,y=n.nextZ;for(;D&&D.z>=p&&y&&y.z<=T;){if(D.x>=d&&D.x<=M&&D.y>=_&&D.y<=m&&D!==r&&D!==a&&Qs(o,u,l,f,c,h,D.x,D.y)&&Gt(D.prev,D,D.next)>=0||(D=D.prevZ,y.x>=d&&y.x<=M&&y.y>=_&&y.y<=m&&y!==r&&y!==a&&Qs(o,u,l,f,c,h,y.x,y.y)&&Gt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;D&&D.z>=p;){if(D.x>=d&&D.x<=M&&D.y>=_&&D.y<=m&&D!==r&&D!==a&&Qs(o,u,l,f,c,h,D.x,D.y)&&Gt(D.prev,D,D.next)>=0)return!1;D=D.prevZ}for(;y&&y.z<=T;){if(y.x>=d&&y.x<=M&&y.y>=_&&y.y<=m&&y!==r&&y!==a&&Qs(o,u,l,f,c,h,y.x,y.y)&&Gt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function yx(n,e){let t=n;do{const i=t.prev,r=t.next.next;!As(i,r)&&hm(i,t,t.next,r)&&Ta(i,r)&&Ta(r,i)&&(e.push(i.i,t.i,r.i),Aa(t),Aa(t.next),t=n=r),t=t.next}while(t!==n);return Zr(t)}function Mx(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Dx(a,o)){let l=fm(a,o);a=Zr(a,a.next),l=Zr(l,l.next),Ea(a,e,t,i,r,s,0),Ea(l,e,t,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function bx(n,e,t,i){const r=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*i,l=s<a-1?e[s+1]*i:n.length,c=cm(n,o,l,i,!1);c===c.next&&(c.steiner=!0),r.push(Px(c))}r.sort(Ex);for(let s=0;s<r.length;s++)t=Tx(r[s],t);return t}function Ex(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function Tx(n,e){const t=Ax(n,e);if(!t)return e;const i=fm(t,n);return Zr(i,i.next),Zr(t,t.next)}function Ax(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,a;if(As(n,t))return t;do{if(As(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>s&&(s=f,a=t.x<t.next.x?t:t.next,f===i))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&um(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){const f=Math.abs(r-t.y)/(i-t.x);Ta(t,n)&&(f<u||f===u&&(t.x>a.x||t.x===a.x&&wx(a,t)))&&(a=t,u=f)}t=t.next}while(t!==o);return a}function wx(n,e){return Gt(n.prev,n,e.prev)<0&&Gt(e.next,n,n.next)<0}function Rx(n,e,t,i){let r=n;do r.z===0&&(r.z=Au(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Cx(r)}function Cx(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(r=i,i=i.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=a}s.nextZ=null,t*=2}while(e>1);return n}function Au(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Px(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function um(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function Qs(n,e,t,i,r,s,a,o){return!(n===a&&e===o)&&um(n,e,t,i,r,s,a,o)}function Dx(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Lx(n,e)&&(Ta(n,e)&&Ta(e,n)&&Ix(n,e)&&(Gt(n.prev,n,e.prev)||Gt(n,e.prev,e))||As(n,e)&&Gt(n.prev,n,n.next)>0&&Gt(e.prev,e,e.next)>0)}function Gt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function As(n,e){return n.x===e.x&&n.y===e.y}function hm(n,e,t,i){const r=xo(Gt(n,e,t)),s=xo(Gt(n,e,i)),a=xo(Gt(t,i,n)),o=xo(Gt(t,i,e));return!!(r!==s&&a!==o||r===0&&vo(n,t,e)||s===0&&vo(n,i,e)||a===0&&vo(t,n,i)||o===0&&vo(t,e,i))}function vo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function xo(n){return n>0?1:n<0?-1:0}function Lx(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&hm(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ta(n,e){return Gt(n.prev,n,n.next)<0?Gt(n,e,n.next)>=0&&Gt(n,n.prev,e)>=0:Gt(n,e,n.prev)<0||Gt(n,n.next,e)<0}function Ix(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function fm(n,e){const t=wu(n.i,n.x,n.y),i=wu(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Vf(n,e,t,i){const r=wu(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Aa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function wu(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ux(n,e,t,i){let r=0;for(let s=e,a=t-i;s<t;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}class Nx{static triangulate(e,t,i=2){return vx(e,t,i)}}class Zi{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Zi.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];kf(e),Hf(i,e);let a=e.length;t.forEach(kf);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Hf(i,t[l]);const o=Nx.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function kf(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Hf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class hh extends _n{constructor(e=new Jo([new Fe(.5,.5),new Fe(-.5,.5),new Fe(-.5,-.5),new Fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Zt(r,3)),this.setAttribute("uv",new Zt(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:d-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:Fx;let D,y=!1,w,A,F,S;if(p){D=p.getSpacedPoints(u),y=!0,h=!1;const U=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(u,U),A=new K,F=new K,S=new K}h||(m=0,d=0,_=0,M=0);const L=o.extractPoints(c);let B=L.shape;const G=L.holes;if(!Zi.isClockWise(B)){B=B.reverse();for(let U=0,W=G.length;U<W;U++){const X=G[U];Zi.isClockWise(X)&&(G[U]=X.reverse())}}function se(U){const X=10000000000000001e-36;let H=U[0];for(let te=1;te<=U.length;te++){const de=te%U.length,fe=U[de],re=fe.x-H.x,Re=fe.y-H.y,C=re*re+Re*Re,Te=Math.max(Math.abs(fe.x),Math.abs(fe.y),Math.abs(H.x),Math.abs(H.y)),Ue=X*Te*Te;if(C<=Ue){U.splice(de,1),te--;continue}H=fe}}se(B),G.forEach(se);const k=G.length,Q=B;for(let U=0;U<k;U++){const W=G[U];B=B.concat(W)}function ce(U,W,X){return W||yt("ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(W,X)}const j=B.length;function me(U,W,X){let H,te,de;const fe=U.x-W.x,re=U.y-W.y,Re=X.x-U.x,C=X.y-U.y,Te=fe*fe+re*re,Ue=fe*C-re*Re;if(Math.abs(Ue)>Number.EPSILON){const E=Math.sqrt(Te),g=Math.sqrt(Re*Re+C*C),N=W.x-re/E,J=W.y+fe/E,ie=X.x-C/g,ve=X.y+Re/g,Pe=((ie-N)*C-(ve-J)*Re)/(fe*C-re*Re);H=N+fe*Pe-U.x,te=J+re*Pe-U.y;const ae=H*H+te*te;if(ae<=2)return new Fe(H,te);de=Math.sqrt(ae/2)}else{let E=!1;fe>Number.EPSILON?Re>Number.EPSILON&&(E=!0):fe<-Number.EPSILON?Re<-Number.EPSILON&&(E=!0):Math.sign(re)===Math.sign(C)&&(E=!0),E?(H=-re,te=fe,de=Math.sqrt(Te)):(H=fe,te=re,de=Math.sqrt(Te/2))}return new Fe(H/de,te/de)}const ue=[];for(let U=0,W=Q.length,X=W-1,H=U+1;U<W;U++,X++,H++)X===W&&(X=0),H===W&&(H=0),ue[U]=me(Q[U],Q[X],Q[H]);const xe=[];let ge,Ie=ue.concat();for(let U=0,W=k;U<W;U++){const X=G[U];ge=[];for(let H=0,te=X.length,de=te-1,fe=H+1;H<te;H++,de++,fe++)de===te&&(de=0),fe===te&&(fe=0),ge[H]=me(X[H],X[de],X[fe]);xe.push(ge),Ie=Ie.concat(ge)}let Be;if(m===0)Be=Zi.triangulateShape(Q,G);else{const U=[],W=[];for(let X=0;X<m;X++){const H=X/m,te=d*Math.cos(H*Math.PI/2),de=_*Math.sin(H*Math.PI/2)+M;for(let fe=0,re=Q.length;fe<re;fe++){const Re=ce(Q[fe],ue[fe],de);Ee(Re.x,Re.y,-te),H===0&&U.push(Re)}for(let fe=0,re=k;fe<re;fe++){const Re=G[fe];ge=xe[fe];const C=[];for(let Te=0,Ue=Re.length;Te<Ue;Te++){const E=ce(Re[Te],ge[Te],de);Ee(E.x,E.y,-te),H===0&&C.push(E)}H===0&&W.push(C)}}Be=Zi.triangulateShape(U,W)}const nt=Be.length,rt=_+M;for(let U=0;U<j;U++){const W=h?ce(B[U],Ie[U],rt):B[U];y?(F.copy(w.normals[0]).multiplyScalar(W.x),A.copy(w.binormals[0]).multiplyScalar(W.y),S.copy(D[0]).add(F).add(A),Ee(S.x,S.y,S.z)):Ee(W.x,W.y,0)}for(let U=1;U<=u;U++)for(let W=0;W<j;W++){const X=h?ce(B[W],Ie[W],rt):B[W];y?(F.copy(w.normals[U]).multiplyScalar(X.x),A.copy(w.binormals[U]).multiplyScalar(X.y),S.copy(D[U]).add(F).add(A),Ee(S.x,S.y,S.z)):Ee(X.x,X.y,f/u*U)}for(let U=m-1;U>=0;U--){const W=U/m,X=d*Math.cos(W*Math.PI/2),H=_*Math.sin(W*Math.PI/2)+M;for(let te=0,de=Q.length;te<de;te++){const fe=ce(Q[te],ue[te],H);Ee(fe.x,fe.y,f+X)}for(let te=0,de=G.length;te<de;te++){const fe=G[te];ge=xe[te];for(let re=0,Re=fe.length;re<Re;re++){const C=ce(fe[re],ge[re],H);y?Ee(C.x,C.y+D[u-1].y,D[u-1].x+X):Ee(C.x,C.y,f+X)}}}st(),_e();function st(){const U=r.length/3;if(h){let W=0,X=j*W;for(let H=0;H<nt;H++){const te=Be[H];qe(te[2]+X,te[1]+X,te[0]+X)}W=u+m*2,X=j*W;for(let H=0;H<nt;H++){const te=Be[H];qe(te[0]+X,te[1]+X,te[2]+X)}}else{for(let W=0;W<nt;W++){const X=Be[W];qe(X[2],X[1],X[0])}for(let W=0;W<nt;W++){const X=Be[W];qe(X[0]+j*u,X[1]+j*u,X[2]+j*u)}}i.addGroup(U,r.length/3-U,0)}function _e(){const U=r.length/3;let W=0;he(Q,W),W+=Q.length;for(let X=0,H=G.length;X<H;X++){const te=G[X];he(te,W),W+=te.length}i.addGroup(U,r.length/3-U,1)}function he(U,W){let X=U.length;for(;--X>=0;){const H=X;let te=X-1;te<0&&(te=U.length-1);for(let de=0,fe=u+m*2;de<fe;de++){const re=j*de,Re=j*(de+1),C=W+H+re,Te=W+te+re,Ue=W+te+Re,E=W+H+Re;Oe(C,Te,Ue,E)}}}function Ee(U,W,X){l.push(U),l.push(W),l.push(X)}function qe(U,W,X){R(U),R(W),R(X);const H=r.length/3,te=T.generateTopUV(i,r,H-3,H-2,H-1);O(te[0]),O(te[1]),O(te[2])}function Oe(U,W,X,H){R(U),R(W),R(H),R(W),R(X),R(H);const te=r.length/3,de=T.generateSideWallUV(i,r,te-6,te-3,te-2,te-1);O(de[0]),O(de[1]),O(de[3]),O(de[1]),O(de[2]),O(de[3])}function R(U){r.push(l[U*3+0]),r.push(l[U*3+1]),r.push(l[U*3+2])}function O(U){s.push(U.x),s.push(U.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Ox(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];i.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Tu[r.type]().fromJSON(r)),new hh(i,e.options)}}const Fx={generateTopUV:function(n,e,t,i,r){const s=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new Fe(s,a),new Fe(o,l),new Fe(c,u)]},generateSideWallUV:function(n,e,t,i,r,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],h=e[r*3],d=e[r*3+1],_=e[r*3+2],M=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new Fe(a,1-l),new Fe(c,1-f),new Fe(h,1-_),new Fe(M,1-p)]:[new Fe(o,1-l),new Fe(u,1-f),new Fe(d,1-_),new Fe(m,1-p)]}};function Ox(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class pl extends _n{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,d=[],_=[],M=[],m=[];for(let p=0;p<u;p++){const T=p*h-a;for(let D=0;D<c;D++){const y=D*f-s;_.push(y,-T,0),M.push(0,0,1),m.push(D/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){const D=T+c*p,y=T+c*(p+1),w=T+1+c*(p+1),A=T+1+c*p;d.push(D,y,A),d.push(y,w,A)}this.setIndex(d),this.setAttribute("position",new Zt(_,3)),this.setAttribute("normal",new Zt(M,3)),this.setAttribute("uv",new Zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pl(e.width,e.height,e.widthSegments,e.heightSegments)}}class fh extends _n{constructor(e=new Jo([new Fe(0,.5),new Fe(-.5,-.5),new Fe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],r=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(s,3)),this.setAttribute("uv",new Zt(a,2));function c(u){const f=r.length/3,h=u.extractPoints(t);let d=h.shape;const _=h.holes;Zi.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=_.length;m<p;m++){const T=_[m];Zi.isClockWise(T)===!0&&(_[m]=T.reverse())}const M=Zi.triangulateShape(d,_);for(let m=0,p=_.length;m<p;m++){const T=_[m];d=d.concat(T)}for(let m=0,p=d.length;m<p;m++){const T=d[m];r.push(T.x,T.y,0),s.push(0,0,1),a.push(T.x,T.y)}for(let m=0,p=M.length;m<p;m++){const T=M[m],D=T[0]+f,y=T[1]+f,w=T[2]+f;i.push(D,y,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Bx(t,e)}static fromJSON(e,t){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];i.push(a)}return new fh(i,e.curveSegments)}}function Bx(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}class jo extends _n{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new K,h=new K,d=[],_=[],M=[],m=[];for(let p=0;p<=i;p++){const T=[],D=p/i,y=a+D*o,w=e*Math.cos(y),A=Math.sqrt(e*e-w*w);let F=0;p===0&&a===0?F=.5/t:p===i&&l===Math.PI&&(F=-.5/t);for(let S=0;S<=t;S++){const L=S/t,B=r+L*s;f.x=-A*Math.cos(B),f.y=w,f.z=A*Math.sin(B),_.push(f.x,f.y,f.z),h.copy(f).normalize(),M.push(h.x,h.y,h.z),m.push(L+F,1-D),T.push(c++)}u.push(T)}for(let p=0;p<i;p++)for(let T=0;T<t;T++){const D=u[p][T+1],y=u[p][T],w=u[p+1][T],A=u[p+1][T+1];(p!==0||a>0)&&d.push(D,y,A),(p!==i-1||l<Math.PI)&&d.push(y,w,A)}this.setIndex(d),this.setAttribute("position",new Zt(_,3)),this.setAttribute("normal",new Zt(M,3)),this.setAttribute("uv",new Zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ws(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(Gf(r))r.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Gf(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function yn(n){const e={};for(let t=0;t<n.length;t++){const i=ws(n[t]);for(const r in i)e[r]=i[r]}return e}function Gf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function zx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function dm(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const Vx={clone:ws,merge:yn};var kx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends Ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kx,this.fragmentShader=Hx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=zx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new St().setHex(r.value);break;case"v2":this.uniforms[i].value=new Fe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new K().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ht().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ht().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Bt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Gx extends Pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wx extends Ps{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bu,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ar,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xx extends Ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=g0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $x extends Ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class pm extends un{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const gc=new Bt,Wf=new K,Xf=new K;class qx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.mapType=Fn,this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oh,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Wf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wf),Xf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){gc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(gc,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Ma||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(gc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const So=new K,yo=new Tr,fi=new K;class mm extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(So,yo,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(So,yo,fi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(So,yo,fi),fi.x===1&&fi.y===1&&fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(So,yo,fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const vr=new K,$f=new Fe,qf=new Fe;class ii extends mm{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Eu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(la*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Eu*2*Math.atan(Math.tan(la*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,t){return this.getViewBounds(e,$f,qf),t.subVectors(qf,$f)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(la*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ml extends mm{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Yx extends qx{constructor(){super(new ml(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kx extends pm{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new Yx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Zx extends pm{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const us=-90,hs=1;class Jx extends un{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ii(us,hs,e,t);r.layers=this.layers,this.add(r);const s=new ii(us,hs,e,t);s.layers=this.layers,this.add(s);const a=new ii(us,hs,e,t);a.layers=this.layers,this.add(a);const o=new ii(us,hs,e,t);o.layers=this.layers,this.add(o);const l=new ii(us,hs,e,t);l.layers=this.layers,this.add(l);const c=new ii(us,hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class jx extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Yf=new Bt;class Qx{constructor(e,t,i=0,r=1/0){this.ray=new dl(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new ah,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):yt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Yf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yf),this}intersectObject(e,t=!0,i=[]){return Ru(e,this,i,t),i.sort(Kf),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Ru(e[r],this,i,t);return i.sort(Kf),i}}function Kf(n,e){return n.distance-e.distance}function Ru(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)Ru(s[a],e,t,!0)}}class Zf{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class gm{static{gm.prototype.isMatrix2=!0}constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}}class eS extends wr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Jf(n,e,t,i){const r=tS(i);switch(t){case Kp:return n*e;case Jp:return n*e/r.components*r.byteLength;case eh:return n*e/r.components*r.byteLength;case Kr:return n*e*2/r.components*r.byteLength;case th:return n*e*2/r.components*r.byteLength;case Zp:return n*e*3/r.components*r.byteLength;case ri:return n*e*4/r.components*r.byteLength;case nh:return n*e*4/r.components*r.byteLength;case Po:case Do:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Lo:case Io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yc:case Zc:return Math.max(n,16)*Math.max(e,8)/4;case qc:case Kc:return Math.max(n,8)*Math.max(e,8)/2;case Jc:case jc:case eu:case tu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Qc:case Wo:case nu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case iu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ru:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case su:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case au:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ou:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case lu:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case cu:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case uu:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case hu:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case fu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case du:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case pu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case mu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case gu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case _u:case vu:case xu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Su:case yu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Xo:case Mu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tS(n){switch(n){case Fn:case Xp:return{byteLength:1,components:1};case Sa:case $p:case Ci:return{byteLength:2,components:1};case ju:case Qu:return{byteLength:2,components:4};case Ri:case Ju:case Mi:return{byteLength:4,components:1};case qp:case Yp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zu}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zu);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _m(){let n=null,e=!1,t=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function nS(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,_)=>d.start-_.start);let h=0;for(let d=1;d<f.length;d++){const _=f[h],M=f[d];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++h,f[h]=M)}f.length=h+1;for(let d=0,_=f.length;d<_;d++){const M=f[d];n.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var iS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rS=`#ifdef USE_ALPHAHASH
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
#endif`,sS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cS=`#ifdef USE_AOMAP
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
#endif`,uS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hS=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,fS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gS=`#ifdef USE_IRIDESCENCE
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
#endif`,_S=`#ifdef USE_BUMPMAP
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
#endif`,vS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ES=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,TS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,AS=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,wS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,RS=`vec3 transformedNormal = objectNormal;
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
#endif`,CS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IS="gl_FragColor = linearToOutputTexel( gl_FragColor );",US=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,FS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,OS=`#ifdef USE_ENVMAP
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
#endif`,BS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,VS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,HS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WS=`#ifdef USE_GRADIENTMAP
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
}`,XS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$S=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YS=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,KS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ZS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ey=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,ty=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ny=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ry=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sy=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ay=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ly=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dy=`#if defined( USE_POINTS_UV )
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
#endif`,py=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,my=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_y=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xy=`#ifdef USE_MORPHTARGETS
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
#endif`,Sy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,My=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,by=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ey=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ty=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ay=`#ifdef USE_NORMALMAP
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
#endif`,wy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ry=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Py=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ly=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Iy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ny=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Oy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,By=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Vy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,ky=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Hy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Gy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wy=`#ifdef USE_SKINNING
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
#endif`,Xy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$y=`#ifdef USE_SKINNING
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
#endif`,qy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ky=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jy=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jy=`#ifdef USE_TRANSMISSION
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
#endif`,Qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rM=`uniform sampler2D t2D;
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
}`,sM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cM=`#include <common>
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
}`,uM=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hM=`#define DISTANCE
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
}`,fM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,dM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mM=`uniform float scale;
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
}`,gM=`uniform vec3 diffuse;
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
}`,_M=`#include <common>
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
}`,vM=`uniform vec3 diffuse;
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
}`,xM=`#define LAMBERT
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
}`,SM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,yM=`#define MATCAP
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
}`,MM=`#define MATCAP
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
}`,bM=`#define NORMAL
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
}`,EM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TM=`#define PHONG
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
}`,AM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,wM=`#define STANDARD
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
}`,RM=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,CM=`#define TOON
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
}`,PM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,DM=`uniform float size;
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
}`,LM=`uniform vec3 diffuse;
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
}`,IM=`#include <common>
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
}`,UM=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,NM=`uniform float rotation;
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
}`,FM=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:iS,alphahash_pars_fragment:rS,alphamap_fragment:sS,alphamap_pars_fragment:aS,alphatest_fragment:oS,alphatest_pars_fragment:lS,aomap_fragment:cS,aomap_pars_fragment:uS,batching_pars_vertex:hS,batching_vertex:fS,begin_vertex:dS,beginnormal_vertex:pS,bsdfs:mS,iridescence_fragment:gS,bumpmap_pars_fragment:_S,clipping_planes_fragment:vS,clipping_planes_pars_fragment:xS,clipping_planes_pars_vertex:SS,clipping_planes_vertex:yS,color_fragment:MS,color_pars_fragment:bS,color_pars_vertex:ES,color_vertex:TS,common:AS,cube_uv_reflection_fragment:wS,defaultnormal_vertex:RS,displacementmap_pars_vertex:CS,displacementmap_vertex:PS,emissivemap_fragment:DS,emissivemap_pars_fragment:LS,colorspace_fragment:IS,colorspace_pars_fragment:US,envmap_fragment:NS,envmap_common_pars_fragment:FS,envmap_pars_fragment:OS,envmap_pars_vertex:BS,envmap_physical_pars_fragment:KS,envmap_vertex:zS,fog_vertex:VS,fog_pars_vertex:kS,fog_fragment:HS,fog_pars_fragment:GS,gradientmap_pars_fragment:WS,lightmap_pars_fragment:XS,lights_lambert_fragment:$S,lights_lambert_pars_fragment:qS,lights_pars_begin:YS,lights_toon_fragment:ZS,lights_toon_pars_fragment:JS,lights_phong_fragment:jS,lights_phong_pars_fragment:QS,lights_physical_fragment:ey,lights_physical_pars_fragment:ty,lights_fragment_begin:ny,lights_fragment_maps:iy,lights_fragment_end:ry,lightprobes_pars_fragment:sy,logdepthbuf_fragment:ay,logdepthbuf_pars_fragment:oy,logdepthbuf_pars_vertex:ly,logdepthbuf_vertex:cy,map_fragment:uy,map_pars_fragment:hy,map_particle_fragment:fy,map_particle_pars_fragment:dy,metalnessmap_fragment:py,metalnessmap_pars_fragment:my,morphinstance_vertex:gy,morphcolor_vertex:_y,morphnormal_vertex:vy,morphtarget_pars_vertex:xy,morphtarget_vertex:Sy,normal_fragment_begin:yy,normal_fragment_maps:My,normal_pars_fragment:by,normal_pars_vertex:Ey,normal_vertex:Ty,normalmap_pars_fragment:Ay,clearcoat_normal_fragment_begin:wy,clearcoat_normal_fragment_maps:Ry,clearcoat_pars_fragment:Cy,iridescence_pars_fragment:Py,opaque_fragment:Dy,packing:Ly,premultiplied_alpha_fragment:Iy,project_vertex:Uy,dithering_fragment:Ny,dithering_pars_fragment:Fy,roughnessmap_fragment:Oy,roughnessmap_pars_fragment:By,shadowmap_pars_fragment:zy,shadowmap_pars_vertex:Vy,shadowmap_vertex:ky,shadowmask_pars_fragment:Hy,skinbase_vertex:Gy,skinning_pars_vertex:Wy,skinning_vertex:Xy,skinnormal_vertex:$y,specularmap_fragment:qy,specularmap_pars_fragment:Yy,tonemapping_fragment:Ky,tonemapping_pars_fragment:Zy,transmission_fragment:Jy,transmission_pars_fragment:jy,uv_pars_fragment:Qy,uv_pars_vertex:eM,uv_vertex:tM,worldpos_vertex:nM,background_vert:iM,background_frag:rM,backgroundCube_vert:sM,backgroundCube_frag:aM,cube_vert:oM,cube_frag:lM,depth_vert:cM,depth_frag:uM,distance_vert:hM,distance_frag:fM,equirect_vert:dM,equirect_frag:pM,linedashed_vert:mM,linedashed_frag:gM,meshbasic_vert:_M,meshbasic_frag:vM,meshlambert_vert:xM,meshlambert_frag:SM,meshmatcap_vert:yM,meshmatcap_frag:MM,meshnormal_vert:bM,meshnormal_frag:EM,meshphong_vert:TM,meshphong_frag:AM,meshphysical_vert:wM,meshphysical_frag:RM,meshtoon_vert:CM,meshtoon_frag:PM,points_vert:DM,points_frag:LM,shadow_vert:IM,shadow_frag:UM,sprite_vert:NM,sprite_frag:FM},Xe={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},vi={basic:{uniforms:yn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:yn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new St(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:yn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:yn([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:yn([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new St(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:yn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:yn([Xe.points,Xe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:yn([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:yn([Xe.common,Xe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:yn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:yn([Xe.sprite,Xe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:yn([Xe.common,Xe.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:yn([Xe.lights,Xe.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};vi.physical={uniforms:yn([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Mo={r:0,b:0,g:0},OM=new Bt,vm=new ht;vm.set(-1,0,0,0,1,0,0,0,1);function BM(n,e,t,i,r,s){const a=new St(0);let o=r===!0?0:1,l,c,u=null,f=0,h=null;function d(T){let D=T.isScene===!0?T.background:null;if(D&&D.isTexture){const y=T.backgroundBlurriness>0;D=e.get(D,y)}return D}function _(T){let D=!1;const y=d(T);y===null?m(a,o):y&&y.isColor&&(m(y,1),D=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||D)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(T,D){const y=d(D);y&&(y.isCubeTexture||y.mapping===hl)?(c===void 0&&(c=new Bn(new La(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:ws(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,A,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(OM.makeRotationFromEuler(D.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(vm),c.material.toneMapped=xt.getTransfer(y.colorSpace)!==Ct,(u!==y||f!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Bn(new pl(2,2),new Pi({name:"BackgroundMaterial",uniforms:ws(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:qr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,l.material.toneMapped=xt.getTransfer(y.colorSpace)!==Ct,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,h=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,D){T.getRGB(Mo,dm(n)),t.buffers.color.setClear(Mo.r,Mo.g,Mo.b,D,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,D=1){a.set(T),o=D,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,m(a,o)},render:_,addToRenderList:M,dispose:p}}function zM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(G,ne,se,k,Q){let ce=!1;const j=f(G,k,se,ne);s!==j&&(s=j,c(s.object)),ce=d(G,k,se,Q),ce&&_(G,k,se,Q),Q!==null&&e.update(Q,n.ELEMENT_ARRAY_BUFFER),(ce||a)&&(a=!1,y(G,ne,se,k),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return n.createVertexArray()}function c(G){return n.bindVertexArray(G)}function u(G){return n.deleteVertexArray(G)}function f(G,ne,se,k){const Q=k.wireframe===!0;let ce=i[ne.id];ce===void 0&&(ce={},i[ne.id]=ce);const j=G.isInstancedMesh===!0?G.id:0;let me=ce[j];me===void 0&&(me={},ce[j]=me);let ue=me[se.id];ue===void 0&&(ue={},me[se.id]=ue);let xe=ue[Q];return xe===void 0&&(xe=h(l()),ue[Q]=xe),xe}function h(G){const ne=[],se=[],k=[];for(let Q=0;Q<t;Q++)ne[Q]=0,se[Q]=0,k[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ne,enabledAttributes:se,attributeDivisors:k,object:G,attributes:{},index:null}}function d(G,ne,se,k){const Q=s.attributes,ce=ne.attributes;let j=0;const me=se.getAttributes();for(const ue in me)if(me[ue].location>=0){const ge=Q[ue];let Ie=ce[ue];if(Ie===void 0&&(ue==="instanceMatrix"&&G.instanceMatrix&&(Ie=G.instanceMatrix),ue==="instanceColor"&&G.instanceColor&&(Ie=G.instanceColor)),ge===void 0||ge.attribute!==Ie||Ie&&ge.data!==Ie.data)return!0;j++}return s.attributesNum!==j||s.index!==k}function _(G,ne,se,k){const Q={},ce=ne.attributes;let j=0;const me=se.getAttributes();for(const ue in me)if(me[ue].location>=0){let ge=ce[ue];ge===void 0&&(ue==="instanceMatrix"&&G.instanceMatrix&&(ge=G.instanceMatrix),ue==="instanceColor"&&G.instanceColor&&(ge=G.instanceColor));const Ie={};Ie.attribute=ge,ge&&ge.data&&(Ie.data=ge.data),Q[ue]=Ie,j++}s.attributes=Q,s.attributesNum=j,s.index=k}function M(){const G=s.newAttributes;for(let ne=0,se=G.length;ne<se;ne++)G[ne]=0}function m(G){p(G,0)}function p(G,ne){const se=s.newAttributes,k=s.enabledAttributes,Q=s.attributeDivisors;se[G]=1,k[G]===0&&(n.enableVertexAttribArray(G),k[G]=1),Q[G]!==ne&&(n.vertexAttribDivisor(G,ne),Q[G]=ne)}function T(){const G=s.newAttributes,ne=s.enabledAttributes;for(let se=0,k=ne.length;se<k;se++)ne[se]!==G[se]&&(n.disableVertexAttribArray(se),ne[se]=0)}function D(G,ne,se,k,Q,ce,j){j===!0?n.vertexAttribIPointer(G,ne,se,Q,ce):n.vertexAttribPointer(G,ne,se,k,Q,ce)}function y(G,ne,se,k){M();const Q=k.attributes,ce=se.getAttributes(),j=ne.defaultAttributeValues;for(const me in ce){const ue=ce[me];if(ue.location>=0){let xe=Q[me];if(xe===void 0&&(me==="instanceMatrix"&&G.instanceMatrix&&(xe=G.instanceMatrix),me==="instanceColor"&&G.instanceColor&&(xe=G.instanceColor)),xe!==void 0){const ge=xe.normalized,Ie=xe.itemSize,Be=e.get(xe);if(Be===void 0)continue;const nt=Be.buffer,rt=Be.type,st=Be.bytesPerElement,_e=rt===n.INT||rt===n.UNSIGNED_INT||xe.gpuType===Ju;if(xe.isInterleavedBufferAttribute){const he=xe.data,Ee=he.stride,qe=xe.offset;if(he.isInstancedInterleavedBuffer){for(let Oe=0;Oe<ue.locationSize;Oe++)p(ue.location+Oe,he.meshPerAttribute);G.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Oe=0;Oe<ue.locationSize;Oe++)m(ue.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let Oe=0;Oe<ue.locationSize;Oe++)D(ue.location+Oe,Ie/ue.locationSize,rt,ge,Ee*st,(qe+Ie/ue.locationSize*Oe)*st,_e)}else{if(xe.isInstancedBufferAttribute){for(let he=0;he<ue.locationSize;he++)p(ue.location+he,xe.meshPerAttribute);G.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let he=0;he<ue.locationSize;he++)m(ue.location+he);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let he=0;he<ue.locationSize;he++)D(ue.location+he,Ie/ue.locationSize,rt,ge,Ie*st,Ie/ue.locationSize*he*st,_e)}}else if(j!==void 0){const ge=j[me];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(ue.location,ge);break;case 3:n.vertexAttrib3fv(ue.location,ge);break;case 4:n.vertexAttrib4fv(ue.location,ge);break;default:n.vertexAttrib1fv(ue.location,ge)}}}}T()}function w(){L();for(const G in i){const ne=i[G];for(const se in ne){const k=ne[se];for(const Q in k){const ce=k[Q];for(const j in ce)u(ce[j].object),delete ce[j];delete k[Q]}}delete i[G]}}function A(G){if(i[G.id]===void 0)return;const ne=i[G.id];for(const se in ne){const k=ne[se];for(const Q in k){const ce=k[Q];for(const j in ce)u(ce[j].object),delete ce[j];delete k[Q]}}delete i[G.id]}function F(G){for(const ne in i){const se=i[ne];for(const k in se){const Q=se[k];if(Q[G.id]===void 0)continue;const ce=Q[G.id];for(const j in ce)u(ce[j].object),delete ce[j];delete Q[G.id]}}}function S(G){for(const ne in i){const se=i[ne],k=G.isInstancedMesh===!0?G.id:0,Q=se[k];if(Q!==void 0){for(const ce in Q){const j=Q[ce];for(const me in j)u(j[me].object),delete j[me];delete Q[ce]}delete se[k],Object.keys(se).length===0&&delete i[ne]}}}function L(){B(),a=!0,s!==r&&(s=r,c(s.object))}function B(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:B,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:S,releaseStatesOfProgram:F,initAttributes:M,enableAttribute:m,disableUnusedAttributes:T}}function VM(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function kM(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(F){return!(F!==ri&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(F){const S=F===Ci&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Fn&&F!==Mi&&!S&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(ut("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),D=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:D,maxFragmentUniforms:y,maxSamples:w,samples:A}}function HM(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Xi,o=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,M=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const T=s?0:i,D=T*4;let y=p.clippingState||null;l.value=y,y=u(_,h,D,d);for(let w=0;w!==D;++w)y[w]=t[w];p.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,_){const M=f!==null?f.length:0;let m=null;if(M!==0){if(m=l.value,_!==!0||m===null){const p=d+M*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let D=0,y=d;D!==M;++D,y+=4)a.copy(f[D]).applyMatrix4(T,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}const _s=4,GM=6,WM=20,XM=256,qs=new ml,jf=new St;let _c=null,vc=0,xc=0,Sc=!1;const $M=new K,zr=new K;class Qf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=$M}=s;_c=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=td(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_c,vc,xc),this._renderer.xr.enabled=Sc,e.scissorTest=!1,fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yr||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_c=this._renderer.getRenderTarget(),vc=this._renderer.getActiveCubeFace(),xc=this._renderer.getActiveMipmapLevel(),Sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Ci,format:ri,colorSpace:$o,depthBuffer:!1},r=ed(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ed(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=qM(s)),this._blurMaterial=KM(s,e,t),this._ggxMaterial=YM(s,e,t)}return r}_compileMaterial(e){const t=new Bn(new _n,e);this._renderer.compile(t,qs)}_sceneToCubeUV(e,t,i,r,s){const l=new ii(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(jf),f.toneMapping=Ti,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bn(new La,new ca({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,m=M.material;let p=!1;const T=e.background;T?T.isColor&&(m.color.copy(T),e.background=null,p=!0):(m.color.copy(jf),p=!0);for(let D=0;D<6;D++){const y=D%3;y===0?(l.up.set(0,c[D],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[D],s.y,s.z)):y===1?(l.up.set(0,0,c[D]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[D],s.z)):(l.up.set(0,c[D],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[D]));const w=this._cubeSize;fs(r,y*w,D>2?w:0,w,w),f.setRenderTarget(r),p&&f.render(M,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Yr||e.mapping===Ts;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=td());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;fs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,qs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,d=f*h,{_lodMax:_}=this,M=this._sizeLods[i],m=3*M*(i>_-_s?i-_+_s:0),p=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=_-t,fs(s,m,p,3*M,2*M),r.setRenderTarget(s),r.render(o,qs),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,fs(e,m,p,3*M,2*M),r.setRenderTarget(e),r.render(o,qs)}_blur(e,t,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,t,i,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[r],f=3*u*(r>this._lodMax-_s?r-this._lodMax+_s:0),h=4*(this._cubeSize-u);fs(t,f,h,3*u,2*u),a.setRenderTarget(t),a.render(l,qs)}}function qM(n){const e=[],t=[];let i=n;const r=n-_s+1+GM;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,_=new Float32Array(d*h*f),M=new Float32Array(d*h*f);for(let p=0;p<f;p++){const T=p%3*2/3-1,D=p>2?0:-1,y=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];_.set(y,d*h*p);for(let w=0;w<h;w++){const A=u[w*2]*2-1,F=u[w*2+1]*2-1;p===0?zr.set(1,F,A):p===1?zr.set(-A,1,-F):p===2?zr.set(-A,F,1):p===3?zr.set(-1,F,-A):p===4?zr.set(-A,-1,F):zr.set(A,F,-1),zr.toArray(M,(p*h+w)*d)}}const m=new _n;m.setAttribute("position",new tr(_,d)),m.setAttribute("outputDirection",new tr(M,d)),t.push(new Bn(m,null)),i>_s&&i--}return{lodMeshes:t,sizeLods:e}}function ed(n,e,t){const i=new oi(n,e,t);return i.texture.mapping=hl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function YM(n,e,t){return new Pi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:XM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function KM(n,e,t){return new Pi({name:"SphericalGaussianBlur",defines:{SAMPLES:WM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:gl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function td(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gl(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function nd(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function gl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class xm extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new im(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new La(5,5,5),s=new Pi({name:"CubemapFromEquirect",uniforms:ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dn,blending:Qi});s.uniforms.tEquirect.value=t;const a=new Bn(r,s),o=t.minFilter;return t.minFilter===Gr&&(t.minFilter=mn),new Jx(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function ZM(n){let e=new WeakMap,t=new WeakMap,i=null;function r(h,d=!1){return h==null?null:d?a(h):s(h)}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Vl||d===kl)if(e.has(h)){const _=e.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const M=new xm(_.height);return M.fromEquirectangularTexture(n,h),e.set(h,M),h.addEventListener("dispose",c),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,_=d===Vl||d===kl,M=d===Yr||d===Ts;if(_||M){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new Qf(n)),m=_?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const T=h.image;return _&&T&&T.height>0||M&&T&&l(T)?(i===null&&(i=new Qf(n)),m=_?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===Vl?h.mapping=Yr:d===kl&&(h.mapping=Ts),h}function l(h){let d=0;const _=6;for(let M=0;M<_;M++)h[M]!==void 0&&d++;return d===_}function c(h){const d=h.target;d.removeEventListener("dispose",c);const _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function JM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ys("WebGLRenderer: "+i+" extension not supported."),r}}}function jM(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,_=f.attributes.position;let M=0;if(_===void 0)return;if(d!==null){const T=d.array;M=d.version;for(let D=0,y=T.length;D<y;D+=3){const w=T[D+0],A=T[D+1],F=T[D+2];h.push(w,A,A,F,F,w)}}else{const T=_.array;M=_.version;for(let D=0,y=T.length/3-1;D<y;D+=3){const w=D+0,A=D+1,F=D+2;h.push(w,A,A,F,F,w)}}const m=new(_.count>=65535?nm:tm)(h,1);m.version=M;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function QM(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,h){n.drawElements(i,h,s,f*a),t.update(h,i,1)}function c(f,h,d){d!==0&&(n.drawElementsInstanced(i,h,s,f*a,d),t.update(h,i,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,d);let M=0;for(let m=0;m<d;m++)M+=h[m];t.update(M,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function eb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:yt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function tb(n,e,t){const i=new WeakMap,r=new Ht;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let L=function(){F.dispose(),i.delete(o),o.removeEventListener("dispose",L)};h!==void 0&&h.texture.dispose();const d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let D=0;d===!0&&(D=1),_===!0&&(D=2),M===!0&&(D=3);let y=o.attributes.position.count*D,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const A=new Float32Array(y*w*4*f),F=new Qp(A,y,w,f);F.type=Mi,F.needsUpdate=!0;const S=D*4;for(let B=0;B<f;B++){const G=m[B],ne=p[B],se=T[B],k=y*w*4*B;for(let Q=0;Q<G.count;Q++){const ce=Q*S;d===!0&&(r.fromBufferAttribute(G,Q),A[k+ce+0]=r.x,A[k+ce+1]=r.y,A[k+ce+2]=r.z,A[k+ce+3]=0),_===!0&&(r.fromBufferAttribute(ne,Q),A[k+ce+4]=r.x,A[k+ce+5]=r.y,A[k+ce+6]=r.z,A[k+ce+7]=0),M===!0&&(r.fromBufferAttribute(se,Q),A[k+ce+8]=r.x,A[k+ce+9]=r.y,A[k+ce+10]=r.z,A[k+ce+11]=se.itemSize===4?r.w:1)}}h={count:f,texture:F,size:new Fe(y,w)},i.set(o,h),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];const _=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function nb(n,e,t,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const ib={[Op]:"LINEAR_TONE_MAPPING",[Bp]:"REINHARD_TONE_MAPPING",[zp]:"CINEON_TONE_MAPPING",[Vp]:"ACES_FILMIC_TONE_MAPPING",[Hp]:"AGX_TONE_MAPPING",[Gp]:"NEUTRAL_TONE_MAPPING",[kp]:"CUSTOM_TONE_MAPPING"};function rb(n,e,t,i,r,s){const a=new oi(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new _n;c.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Zt([0,2,0,0,2,0],2));const u=new Gx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Bn(c,u),h=new ml(-1,1,1,-1,0,1);let d=null,_=null,M=!1,m,p=null,T=[],D=!1;this.setSize=function(y,w){a.setSize(y,w),o!==null&&o.setSize(y,w),l!==null&&l.setSize(y,w);for(let A=0;A<T.length;A++){const F=T[A];F.setSize&&F.setSize(y,w)}},this.setEffects=function(y){T=y,D=T.length>0&&T[0].isRenderPass===!0;const w=a.width,A=a.height;T.length>0&&o===null&&(o=new oi(w,A,{type:Ci,depthBuffer:!1,stencilBuffer:!1}),l=new oi(w,A,{type:Ci,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<T.length;F++){const S=T[F];S.setSize&&S.setSize(w,A)}},this.begin=function(y,w){if(M||y.toneMapping===Ti&&T.length===0)return!1;if(p=w,w!==null){const A=w.width,F=w.height;(a.width!==A||a.height!==F)&&this.setSize(A,F)}return D===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=Ti,!0},this.hasRenderPass=function(){return D},this.end=function(y,w){y.toneMapping=m,M=!0;let A=a,F=o;for(let S=0;S<T.length;S++){const L=T[S];L.enabled!==!1&&(L.render(y,F,A,w),L.needsSwap!==!1&&(A=F,F=F===o?l:o))}if(d!==y.outputColorSpace||_!==y.toneMapping){d=y.outputColorSpace,_=y.toneMapping,u.defines={},xt.getTransfer(d)===Ct&&(u.defines.SRGB_TRANSFER="");const S=ib[_];S&&(u.defines[S]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=A.texture,y.setRenderTarget(p),y.render(f,h),p=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const Sm=new En,Cu=new ba(1,1),ym=new Qp,Mm=new O0,bm=new im,id=[],rd=[],sd=new Float32Array(16),ad=new Float32Array(9),od=new Float32Array(4);function Ds(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=id[r];if(s===void 0&&(s=new Float32Array(r),id[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function en(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function _l(n,e){let t=rd[e];t===void 0&&(t=new Int32Array(e),rd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function sb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ab(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2fv(this.addr,e),en(t,e)}}function ob(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;n.uniform3fv(this.addr,e),en(t,e)}}function lb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4fv(this.addr,e),en(t,e)}}function cb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;od.set(i),n.uniformMatrix2fv(this.addr,!1,od),en(t,i)}}function ub(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;ad.set(i),n.uniformMatrix3fv(this.addr,!1,ad),en(t,i)}}function hb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;sd.set(i),n.uniformMatrix4fv(this.addr,!1,sd),en(t,i)}}function fb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function db(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2iv(this.addr,e),en(t,e)}}function pb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;n.uniform3iv(this.addr,e),en(t,e)}}function mb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4iv(this.addr,e),en(t,e)}}function gb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function _b(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2uiv(this.addr,e),en(t,e)}}function vb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;n.uniform3uiv(this.addr,e),en(t,e)}}function xb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4uiv(this.addr,e),en(t,e)}}function Sb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Cu.compareFunction=t.isReversedDepthBuffer()?rh:ih,s=Cu):s=Sm,t.setTexture2D(e||s,r)}function yb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Mm,r)}function Mb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||bm,r)}function bb(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ym,r)}function Eb(n){switch(n){case 5126:return sb;case 35664:return ab;case 35665:return ob;case 35666:return lb;case 35674:return cb;case 35675:return ub;case 35676:return hb;case 5124:case 35670:return fb;case 35667:case 35671:return db;case 35668:case 35672:return pb;case 35669:case 35673:return mb;case 5125:return gb;case 36294:return _b;case 36295:return vb;case 36296:return xb;case 35678:case 36198:case 36298:case 36306:case 35682:return Sb;case 35679:case 36299:case 36307:return yb;case 35680:case 36300:case 36308:case 36293:return Mb;case 36289:case 36303:case 36311:case 36292:return bb}}function Tb(n,e){n.uniform1fv(this.addr,e)}function Ab(n,e){const t=Ds(e,this.size,2);n.uniform2fv(this.addr,t)}function wb(n,e){const t=Ds(e,this.size,3);n.uniform3fv(this.addr,t)}function Rb(n,e){const t=Ds(e,this.size,4);n.uniform4fv(this.addr,t)}function Cb(n,e){const t=Ds(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Pb(n,e){const t=Ds(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Db(n,e){const t=Ds(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Lb(n,e){n.uniform1iv(this.addr,e)}function Ib(n,e){n.uniform2iv(this.addr,e)}function Ub(n,e){n.uniform3iv(this.addr,e)}function Nb(n,e){n.uniform4iv(this.addr,e)}function Fb(n,e){n.uniform1uiv(this.addr,e)}function Ob(n,e){n.uniform2uiv(this.addr,e)}function Bb(n,e){n.uniform3uiv(this.addr,e)}function zb(n,e){n.uniform4uiv(this.addr,e)}function Vb(n,e,t){const i=this.cache,r=e.length,s=_l(t,r);Qt(i,s)||(n.uniform1iv(this.addr,s),en(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Cu:a=Sm;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function kb(n,e,t){const i=this.cache,r=e.length,s=_l(t,r);Qt(i,s)||(n.uniform1iv(this.addr,s),en(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Mm,s[a])}function Hb(n,e,t){const i=this.cache,r=e.length,s=_l(t,r);Qt(i,s)||(n.uniform1iv(this.addr,s),en(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||bm,s[a])}function Gb(n,e,t){const i=this.cache,r=e.length,s=_l(t,r);Qt(i,s)||(n.uniform1iv(this.addr,s),en(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ym,s[a])}function Wb(n){switch(n){case 5126:return Tb;case 35664:return Ab;case 35665:return wb;case 35666:return Rb;case 35674:return Cb;case 35675:return Pb;case 35676:return Db;case 5124:case 35670:return Lb;case 35667:case 35671:return Ib;case 35668:case 35672:return Ub;case 35669:case 35673:return Nb;case 5125:return Fb;case 36294:return Ob;case 36295:return Bb;case 36296:return zb;case 35678:case 36198:case 36298:case 36306:case 35682:return Vb;case 35679:case 36299:case 36307:return kb;case 35680:case 36300:case 36308:case 36293:return Hb;case 36289:case 36303:case 36311:case 36292:return Gb}}class Xb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Eb(t.type)}}class $b{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wb(t.type)}}class qb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const yc=/(\w+)(\])?(\[|\.)?/g;function ld(n,e){n.seq.push(e),n.map[e.id]=e}function Yb(n,e,t){const i=n.name,r=i.length;for(yc.lastIndex=0;;){const s=yc.exec(i),a=yc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ld(t,c===void 0?new Xb(o,n,e):new $b(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new qb(o),ld(t,f)),t=f}}}class No{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Yb(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function cd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Kb=37297;let Zb=0;function Jb(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const ud=new ht;function jb(n){xt._getMatrix(ud,xt.workingColorSpace,n);const e=`mat3( ${ud.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(n)){case qo:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function hd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Jb(n.getShaderSource(e),o)}else return s}function Qb(n,e){const t=jb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const eE={[Op]:"Linear",[Bp]:"Reinhard",[zp]:"Cineon",[Vp]:"ACESFilmic",[Hp]:"AgX",[Gp]:"Neutral",[kp]:"Custom"};function tE(n,e){const t=eE[e];return t===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const bo=new K;function nE(){xt.getLuminanceCoefficients(bo);const n=bo.x.toFixed(4),e=bo.y.toFixed(4),t=bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function rE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function sE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ea(n){return n!==""}function fd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pu(n){return n.replace(aE,lE)}const oE=new Map;function lE(n,e){let t=pt[e];if(t===void 0){const i=oE.get(e);if(i!==void 0)t=pt[i],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Pu(t)}const cE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pd(n){return n.replace(cE,uE)}function uE(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function md(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const hE={[Co]:"SHADOWMAP_TYPE_PCF",[js]:"SHADOWMAP_TYPE_VSM"};function fE(n){return hE[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const dE={[Yr]:"ENVMAP_TYPE_CUBE",[Ts]:"ENVMAP_TYPE_CUBE",[hl]:"ENVMAP_TYPE_CUBE_UV"};function pE(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":dE[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const mE={[Ts]:"ENVMAP_MODE_REFRACTION"};function gE(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":mE[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _E={[Fp]:"ENVMAP_BLENDING_MULTIPLY",[d0]:"ENVMAP_BLENDING_MIX",[p0]:"ENVMAP_BLENDING_ADD"};function vE(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":_E[n.combine]||"ENVMAP_BLENDING_NONE"}function xE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function SE(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=fE(t),c=pE(t),u=gE(t),f=vE(t),h=xE(t),d=iE(t),_=rE(s),M=r.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ea).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ea).join(`
`),p.length>0&&(p+=`
`)):(m=[md(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),p=[md(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?pt.tonemapping_pars_fragment:"",t.toneMapping!==Ti?tE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,Qb("linearToOutputTexel",t.outputColorSpace),nE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ea).join(`
`)),a=Pu(a),a=fd(a,t),a=dd(a,t),o=Pu(o),o=fd(o,t),o=dd(o,t),a=pd(a),o=pd(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===mf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const D=T+m+a,y=T+p+o,w=cd(r,r.VERTEX_SHADER,D),A=cd(r,r.FRAGMENT_SHADER,y);r.attachShader(M,w),r.attachShader(M,A),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function F(G){if(n.debug.checkShaderErrors){const ne=r.getProgramInfoLog(M)||"",se=r.getShaderInfoLog(w)||"",k=r.getShaderInfoLog(A)||"",Q=ne.trim(),ce=se.trim(),j=k.trim();let me=!0,ue=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(me=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,M,w,A);else{const xe=hd(r,w,"vertex"),ge=hd(r,A,"fragment");yt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Q+`
`+xe+`
`+ge)}else Q!==""?ut("WebGLProgram: Program Info Log:",Q):(ce===""||j==="")&&(ue=!1);ue&&(G.diagnostics={runnable:me,programLog:Q,vertexShader:{log:ce,prefix:m},fragmentShader:{log:j,prefix:p}})}r.deleteShader(w),r.deleteShader(A),S=new No(r,M),L=sE(r,M)}let S;this.getUniforms=function(){return S===void 0&&F(this),S};let L;this.getAttributes=function(){return L===void 0&&F(this),L};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=r.getProgramParameter(M,Kb)),B},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zb++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=w,this.fragmentShader=A,this}let yE=0;class ME{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new bE(e),t.set(e,i)),i}}class bE{constructor(e){this.id=yE++,this.code=e,this.usedTimes=0}}function EE(n){return n===Kr||n===Wo||n===Xo}function TE(n,e,t,i,r,s){const a=new ah,o=new ME,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function M(S,L,B,G,ne,se){const k=G.fog,Q=ne.geometry,ce=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?G.environment:null,j=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,me=e.get(S.envMap||ce,j),ue=me&&me.mapping===hl?me.image.height:null,xe=d[S.type];S.precision!==null&&(h=i.getMaxPrecision(S.precision),h!==S.precision&&ut("WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const ge=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ie=ge!==void 0?ge.length:0;let Be=0;Q.morphAttributes.position!==void 0&&(Be=1),Q.morphAttributes.normal!==void 0&&(Be=2),Q.morphAttributes.color!==void 0&&(Be=3);let nt,rt,st,_e;if(xe){const Dt=vi[xe];nt=Dt.vertexShader,rt=Dt.fragmentShader}else{nt=S.vertexShader,rt=S.fragmentShader;const Dt=o.getVertexShaderStage(S),_t=o.getFragmentShaderStage(S);o.update(S,Dt,_t),st=Dt.id,_e=_t.id}const he=n.getRenderTarget(),Ee=n.state.buffers.depth.getReversed(),qe=ne.isInstancedMesh===!0,Oe=ne.isBatchedMesh===!0,R=!!S.map,O=!!S.matcap,U=!!me,W=!!S.aoMap,X=!!S.lightMap,H=!!S.bumpMap&&S.wireframe===!1,te=!!S.normalMap,de=!!S.displacementMap,fe=!!S.emissiveMap,re=!!S.metalnessMap,Re=!!S.roughnessMap,C=S.anisotropy>0,Te=S.clearcoat>0,Ue=S.dispersion>0,E=S.retroreflectivity>0,g=S.iridescence>0,N=S.sheen>0,J=S.transmission>0,ie=C&&!!S.anisotropyMap,ve=Te&&!!S.clearcoatMap,Pe=Te&&!!S.clearcoatNormalMap,ae=Te&&!!S.clearcoatRoughnessMap,Se=g&&!!S.iridescenceMap,Ce=g&&!!S.iridescenceThicknessMap,He=N&&!!S.sheenColorMap,Z=N&&!!S.sheenRoughnessMap,P=!!S.specularMap,$=!!S.specularColorMap,De=!!S.specularIntensityMap,$e=J&&!!S.transmissionMap,z=J&&!!S.thicknessMap,Le=!!S.gradientMap,ye=!!S.alphaMap,Ve=S.alphaTest>0,Ge=!!S.alphaHash,we=!!S.extensions;let et=Ti;S.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(et=n.toneMapping);const Qe={shaderID:xe,shaderType:S.type,shaderName:S.name,vertexShader:nt,fragmentShader:rt,defines:S.defines,customVertexShaderID:st,customFragmentShaderID:_e,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:Oe,batchingColor:Oe&&ne._colorsTexture!==null,instancing:qe,instancingColor:qe&&ne.instanceColor!==null,instancingMorph:qe&&ne.morphTexture!==null,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:xt.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:R,matcap:O,envMap:U,envMapMode:U&&me.mapping,envMapCubeUVHeight:ue,aoMap:W,lightMap:X,bumpMap:H,normalMap:te,displacementMap:de,emissiveMap:fe,normalMapObjectSpace:te&&S.normalMapType===_0,normalMapTangentSpace:te&&S.normalMapType===bu,packedNormalMap:te&&S.normalMapType===bu&&EE(S.normalMap.format),metalnessMap:re,roughnessMap:Re,anisotropy:C,anisotropyMap:ie,clearcoat:Te,clearcoatMap:ve,clearcoatNormalMap:Pe,clearcoatRoughnessMap:ae,dispersion:Ue,retroreflection:E,iridescence:g,iridescenceMap:Se,iridescenceThicknessMap:Ce,sheen:N,sheenColorMap:He,sheenRoughnessMap:Z,specularMap:P,specularColorMap:$,specularIntensityMap:De,transmission:J,transmissionMap:$e,thicknessMap:z,gradientMap:Le,opaque:S.transparent===!1&&S.blending===oa&&S.alphaToCoverage===!1,alphaMap:ye,alphaTest:Ve,alphaHash:Ge,combine:S.combine,mapUv:R&&_(S.map.channel),aoMapUv:W&&_(S.aoMap.channel),lightMapUv:X&&_(S.lightMap.channel),bumpMapUv:H&&_(S.bumpMap.channel),normalMapUv:te&&_(S.normalMap.channel),displacementMapUv:de&&_(S.displacementMap.channel),emissiveMapUv:fe&&_(S.emissiveMap.channel),metalnessMapUv:re&&_(S.metalnessMap.channel),roughnessMapUv:Re&&_(S.roughnessMap.channel),anisotropyMapUv:ie&&_(S.anisotropyMap.channel),clearcoatMapUv:ve&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:He&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Z&&_(S.sheenRoughnessMap.channel),specularMapUv:P&&_(S.specularMap.channel),specularColorMapUv:$&&_(S.specularColorMap.channel),specularIntensityMapUv:De&&_(S.specularIntensityMap.channel),transmissionMapUv:$e&&_(S.transmissionMap.channel),thicknessMapUv:z&&_(S.thicknessMap.channel),alphaMapUv:ye&&_(S.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(te||C),vertexNormals:!!Q.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!Q.attributes.uv&&(R||ye),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||Q.attributes.normal===void 0&&te===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ee,skinning:ne.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:Be,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:se.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:et,decodeVideoTexture:R&&S.map.isVideoTexture===!0&&xt.getTransfer(S.map.colorSpace)===Ct,decodeVideoTextureEmissive:fe&&S.emissiveMap.isVideoTexture===!0&&xt.getTransfer(S.emissiveMap.colorSpace)===Ct,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Si,flipSided:S.side===Dn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:we&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&S.extensions.multiDraw===!0||Oe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Qe.vertexUv1s=l.has(1),Qe.vertexUv2s=l.has(2),Qe.vertexUv3s=l.has(3),l.clear(),Qe}function m(S){const L=[];if(S.shaderID?L.push(S.shaderID):(L.push(S.customVertexShaderID),L.push(S.customFragmentShaderID)),S.defines!==void 0)for(const B in S.defines)L.push(B),L.push(S.defines[B]);return S.isRawShaderMaterial===!1&&(p(L,S),T(L,S),L.push(n.outputColorSpace)),L.push(S.customProgramCacheKey),L.join()}function p(S,L){S.push(L.precision),S.push(L.outputColorSpace),S.push(L.envMapMode),S.push(L.envMapCubeUVHeight),S.push(L.mapUv),S.push(L.alphaMapUv),S.push(L.lightMapUv),S.push(L.aoMapUv),S.push(L.bumpMapUv),S.push(L.normalMapUv),S.push(L.displacementMapUv),S.push(L.emissiveMapUv),S.push(L.metalnessMapUv),S.push(L.roughnessMapUv),S.push(L.anisotropyMapUv),S.push(L.clearcoatMapUv),S.push(L.clearcoatNormalMapUv),S.push(L.clearcoatRoughnessMapUv),S.push(L.iridescenceMapUv),S.push(L.iridescenceThicknessMapUv),S.push(L.sheenColorMapUv),S.push(L.sheenRoughnessMapUv),S.push(L.specularMapUv),S.push(L.specularColorMapUv),S.push(L.specularIntensityMapUv),S.push(L.transmissionMapUv),S.push(L.thicknessMapUv),S.push(L.combine),S.push(L.fogExp2),S.push(L.sizeAttenuation),S.push(L.morphTargetsCount),S.push(L.morphAttributeCount),S.push(L.numSunLights),S.push(L.numDirLights),S.push(L.numPointLights),S.push(L.numSpotLights),S.push(L.numSpotLightMaps),S.push(L.numHemiLights),S.push(L.numRectAreaLights),S.push(L.numSunLightShadows),S.push(L.numDirLightShadows),S.push(L.numPointLightShadows),S.push(L.numSpotLightShadows),S.push(L.numSpotLightShadowsWithMaps),S.push(L.numLightProbes),S.push(L.shadowMapType),S.push(L.toneMapping),S.push(L.numClippingPlanes),S.push(L.numClipIntersection),S.push(L.depthPacking)}function T(S,L){a.disableAll(),L.instancing&&a.enable(0),L.instancingColor&&a.enable(1),L.instancingMorph&&a.enable(2),L.matcap&&a.enable(3),L.envMap&&a.enable(4),L.normalMapObjectSpace&&a.enable(5),L.normalMapTangentSpace&&a.enable(6),L.clearcoat&&a.enable(7),L.iridescence&&a.enable(8),L.alphaTest&&a.enable(9),L.vertexColors&&a.enable(10),L.vertexAlphas&&a.enable(11),L.vertexUv1s&&a.enable(12),L.vertexUv2s&&a.enable(13),L.vertexUv3s&&a.enable(14),L.vertexTangents&&a.enable(15),L.anisotropy&&a.enable(16),L.alphaHash&&a.enable(17),L.batching&&a.enable(18),L.dispersion&&a.enable(19),L.retroreflection&&a.enable(24),L.batchingColor&&a.enable(20),L.gradientMap&&a.enable(21),L.packedNormalMap&&a.enable(22),L.vertexNormals&&a.enable(23),S.push(a.mask),a.disableAll(),L.fog&&a.enable(0),L.useFog&&a.enable(1),L.flatShading&&a.enable(2),L.logarithmicDepthBuffer&&a.enable(3),L.reversedDepthBuffer&&a.enable(4),L.skinning&&a.enable(5),L.morphTargets&&a.enable(6),L.morphNormals&&a.enable(7),L.morphColors&&a.enable(8),L.premultipliedAlpha&&a.enable(9),L.shadowMapEnabled&&a.enable(10),L.doubleSided&&a.enable(11),L.flipSided&&a.enable(12),L.useDepthPacking&&a.enable(13),L.dithering&&a.enable(14),L.transmission&&a.enable(15),L.sheen&&a.enable(16),L.opaque&&a.enable(17),L.pointsUvs&&a.enable(18),L.decodeVideoTexture&&a.enable(19),L.decodeVideoTextureEmissive&&a.enable(20),L.alphaToCoverage&&a.enable(21),L.numLightProbeGrids>0&&a.enable(22),L.hasPositionAttribute&&a.enable(23),S.push(a.mask)}function D(S){const L=d[S.type];let B;if(L){const G=vi[L];B=Vx.clone(G.uniforms)}else B=S.uniforms;return B}function y(S,L){let B=u.get(L);return B!==void 0?++B.usedTimes:(B=new SE(n,L,S,r),c.push(B),u.set(L,B)),B}function w(S){if(--S.usedTimes===0){const L=c.indexOf(S);c[L]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function A(S){o.remove(S)}function F(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:D,acquireProgram:y,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:F}}function AE(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function wE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function gd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function _d(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,_,M,m,p){let T=n[e];return T===void 0?(T={id:h.id,object:h,geometry:d,material:_,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:m,group:p},n[e]=T):(T.id=h.id,T.object=h,T.geometry=d,T.material=_,T.materialVariant=a(h),T.groupOrder=M,T.renderOrder=h.renderOrder,T.z=m,T.group=p),e++,T}function l(h,d,_,M,m,p,T){T.reversedDepth===!0&&(m=-m);const D=o(h,d,_,M,m,p);_.transmission>0?i.push(D):_.transparent===!0?r.push(D):t.push(D)}function c(h,d,_,M,m,p){const T=o(h,d,_,M,m,p);_.transmission>0?i.unshift(T):_.transparent===!0?r.unshift(T):t.unshift(T)}function u(h,d){t.length>1&&t.sort(h||wE),i.length>1&&i.sort(d||gd),r.length>1&&r.sort(d||gd)}function f(){for(let h=e,d=n.length;h<d;h++){const _=n[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function RE(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new _d,n.set(i,[a])):r>=s.length?(a=new _d,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function CE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new K,color:new St};break;case"SpotLight":t={position:new K,direction:new K,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new St,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new St,groundColor:new St};break;case"RectAreaLight":t={color:new St,position:new K,halfWidth:new K,halfHeight:new K};break}return n[e.id]=t,t}}}function PE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let DE=0;function LE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function IE(n){const e=new CE,t=PE(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new K);const r=new K,s=new Bt,a=new Bt;function o(c){let u=0,f=0,h=0;for(let ne=0;ne<9;ne++)i.probe[ne].set(0,0,0);let d=0,_=0,M=0,m=0,p=0,T=0,D=0,y=0,w=0,A=0,F=0,S=0,L=0,B=0;c.sort(LE);for(let ne=0,se=c.length;ne<se;ne++){const k=c[ne],Q=k.color,ce=k.intensity,j=k.distance;let me=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Kr?me=k.shadow.map.texture:me=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)u+=Q.r*ce,f+=Q.g*ce,h+=Q.b*ce;else if(k.isLightProbe){for(let ue=0;ue<9;ue++)i.probe[ue].addScaledVector(k.sh.coefficients[ue],ce);B++}else if(k.isSunLight){const ue=e.get(k);if(ue.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const xe=k.shadow,ge=t.get(k);ge.shadowIntensity=xe.intensity,ge.shadowBias=xe.bias,ge.shadowNormalBias=xe.normalBias,ge.shadowRadius=xe.radius,ge.shadowMapSize.copy(xe.mapSize).multiply(xe.getFrameExtents()),i.sunShadow[_]=ge,i.sunShadowMap[_]=me;const Ie=xe.getViewportCount();for(let Be=0;Be<Ie;Be++)i.sunShadowMatrix[M+Be]=xe.getMatrix(Be),i.sunShadowCascade[M+Be]=xe._cascadeData[Be];M+=Ie,_++}i.sun[d]=ue,d++}else if(k.isDirectionalLight){const ue=e.get(k);if(ue.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const xe=k.shadow,ge=t.get(k);ge.shadowIntensity=xe.intensity,ge.shadowBias=xe.bias,ge.shadowNormalBias=xe.normalBias,ge.shadowRadius=xe.radius,ge.shadowMapSize=xe.mapSize,i.directionalShadow[m]=ge,i.directionalShadowMap[m]=me,i.directionalShadowMatrix[m]=k.shadow.matrix,w++}i.directional[m]=ue,m++}else if(k.isSpotLight){const ue=e.get(k);ue.position.setFromMatrixPosition(k.matrixWorld),ue.color.copy(Q).multiplyScalar(ce),ue.distance=j,ue.coneCos=Math.cos(k.angle),ue.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ue.decay=k.decay,i.spot[T]=ue;const xe=k.shadow;if(k.map&&(i.spotLightMap[S]=k.map,S++,xe.updateMatrices(k),k.castShadow&&L++),i.spotLightMatrix[T]=xe.matrix,k.castShadow){const ge=t.get(k);ge.shadowIntensity=xe.intensity,ge.shadowBias=xe.bias,ge.shadowNormalBias=xe.normalBias,ge.shadowRadius=xe.radius,ge.shadowMapSize=xe.mapSize,i.spotShadow[T]=ge,i.spotShadowMap[T]=me,F++}T++}else if(k.isRectAreaLight){const ue=e.get(k);ue.color.copy(Q).multiplyScalar(ce),ue.halfWidth.set(k.width*.5,0,0),ue.halfHeight.set(0,k.height*.5,0),i.rectArea[D]=ue,D++}else if(k.isPointLight){const ue=e.get(k);if(ue.color.copy(k.color).multiplyScalar(k.intensity),ue.distance=k.distance,ue.decay=k.decay,k.castShadow){const xe=k.shadow,ge=t.get(k);ge.shadowIntensity=xe.intensity,ge.shadowBias=xe.bias,ge.shadowNormalBias=xe.normalBias,ge.shadowRadius=xe.radius,ge.shadowMapSize=xe.mapSize,ge.shadowCameraNear=xe.camera.near,ge.shadowCameraFar=xe.camera.far,i.pointShadow[p]=ge,i.pointShadowMap[p]=me,i.pointShadowMatrix[p]=k.shadow.matrix,A++}i.point[p]=ue,p++}else if(k.isHemisphereLight){const ue=e.get(k);ue.skyColor.copy(k.color).multiplyScalar(ce),ue.groundColor.copy(k.groundColor).multiplyScalar(ce),i.hemi[y]=ue,y++}}D>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Xe.LTC_FLOAT_1,i.rectAreaLTC2=Xe.LTC_FLOAT_2):(i.rectAreaLTC1=Xe.LTC_HALF_1,i.rectAreaLTC2=Xe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const G=i.hash;(G.sunLength!==d||G.directionalLength!==m||G.pointLength!==p||G.spotLength!==T||G.rectAreaLength!==D||G.hemiLength!==y||G.numSunShadows!==_||G.numDirectionalShadows!==w||G.numPointShadows!==A||G.numSpotShadows!==F||G.numSpotMaps!==S||G.numLightProbes!==B)&&(i.sun.length=d,i.directional.length=m,i.spot.length=T,i.rectArea.length=D,i.point.length=p,i.hemi.length=y,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=F,i.spotShadowMap.length=F,i.spotLightMatrix.length=F+S-L,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=B,G.sunLength=d,G.directionalLength=m,G.pointLength=p,G.spotLength=T,G.rectAreaLength=D,G.hemiLength=y,G.numSunShadows=_,G.numDirectionalShadows=w,G.numPointShadows=A,G.numSpotShadows=F,G.numSpotMaps=S,G.numLightProbes=B,i.version=DE++)}function l(c,u){let f=0,h=0,d=0,_=0,M=0,m=0;const p=u.matrixWorldInverse;for(let T=0,D=c.length;T<D;T++){const y=c[T];if(y.isSunLight){const w=i.sun[f];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(p),f++}else if(y.isDirectionalLight){const w=i.directional[h];w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),h++}else if(y.isSpotLight){const w=i.spot[_];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(p),_++}else if(y.isRectAreaLight){const w=i.rectArea[M];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){const w=i.point[d];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){const w=i.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function vd(n){const e=new IE(n),t=[],i=[],r=[];function s(h){f.camera=h,t.length=0,i.length=0,r.length=0}function a(h){t.push(h)}function o(h){i.push(h)}function l(h){r.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function UE(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new vd(n),e.set(r,[o])):s>=a.length?(o=new vd(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const NE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,OE=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],BE=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],xd=new Bt,Ys=new K,Mc=new K;function zE(n,e,t){let i=new oh;const r=new Fe,s=new Fe,a=new Ht,o=new Xx,l=new $x,c={},u=t.maxTextureSize,f={[qr]:Dn,[Dn]:qr,[Si]:Si},h=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:NE,fragmentShader:FE}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new _n;_.setAttribute("position",new tr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Bn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Co;let p=this.type;this.render=function(A,F,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===Yv&&(ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Co);const L=n.getRenderTarget(),B=n.getActiveCubeFace(),G=n.getActiveMipmapLevel(),ne=n.state;ne.setBlending(Qi),ne.buffers.depth.getReversed()===!0?ne.buffers.color.setClear(0,0,0,0):ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const se=p!==this.type;se&&F.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(Q=>Q.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,Q=A.length;k<Q;k++){const ce=A[k],j=ce.shadow;if(j===void 0){ut("WebGLShadowMap:",ce,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const me=j.getFrameExtents();r.multiply(me),s.copy(j.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/me.x),r.x=s.x*me.x,j.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/me.y),r.y=s.y*me.y,j.mapSize.y=s.y));const ue=n.state.buffers.depth.getReversed();if(j.camera._reversedDepth=ue,j.map===null||se===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===js){if(ce.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new oi(r.x,r.y,{format:Kr,type:Ci,minFilter:mn,magFilter:mn,generateMipmaps:!1}),j.map.texture.name=ce.name+".shadowMap",j.map.depthTexture=new ba(r.x,r.y,Mi),j.map.depthTexture.name=ce.name+".shadowMapDepth",j.map.depthTexture.format=or,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=cn,j.map.depthTexture.magFilter=cn}else ce.isPointLight?(j.map=new xm(r.x),j.map.depthTexture=new ix(r.x,Ri)):(j.map=new oi(r.x,r.y),j.map.depthTexture=new ba(r.x,r.y,Ri)),j.map.depthTexture.name=ce.name+".shadowMap",j.map.depthTexture.format=or,this.type===Co?(j.map.depthTexture.compareFunction=ue?rh:ih,j.map.depthTexture.minFilter=mn,j.map.depthTexture.magFilter=mn):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=cn,j.map.depthTexture.magFilter=cn);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==r.x||j.map.height!==r.y)&&j.map.setSize(r.x,r.y);const xe=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();ce.isPointLight!==!0&&j.updateMatrices(ce,S);for(let ge=0;ge<xe;ge++){const Ie=j.getCamera(ge);if(ce.isPointLight){const Be=j.camera,nt=j.matrix,rt=ce.distance||Be.far;rt!==Be.far&&(Be.far=rt,Be.updateProjectionMatrix()),Ys.setFromMatrixPosition(ce.matrixWorld),Be.position.copy(Ys),Mc.copy(Be.position),Mc.add(OE[ge]),Be.up.copy(BE[ge]),Be.lookAt(Mc),Be.updateMatrixWorld(),nt.makeTranslation(-Ys.x,-Ys.y,-Ys.z),xd.multiplyMatrices(Be.projectionMatrix,Be.matrixWorldInverse),j._frustum.setFromProjectionMatrix(xd,Be.coordinateSystem,Be.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)n.setRenderTarget(j.map,ge),n.clear();else{ge===0&&(n.setRenderTarget(j.map),n.clear());const Be=j.getViewport(ge);a.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),ne.viewport(a)}i=j.getFrustum(ge),y(F,S,Ie,ce,this.type)}j.isPointLightShadow!==!0&&this.type===js&&T(j,S),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(L,B,G)};function T(A,F){const S=e.update(M);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null?A.mapPass=new oi(r.x,r.y,{format:Kr,type:Ci}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(F,null,S,h,M,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(F,null,S,d,M,null)}function D(A,F,S,L){let B=null;const G=S.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(G!==void 0)B=G;else if(B=S.isPointLight===!0?l:o,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const ne=B.uuid,se=F.uuid;let k=c[ne];k===void 0&&(k={},c[ne]=k);let Q=k[se];Q===void 0&&(Q=B.clone(),k[se]=Q,F.addEventListener("dispose",w)),B=Q}if(B.visible=F.visible,B.wireframe=F.wireframe,L===js?B.side=F.shadowSide!==null?F.shadowSide:F.side:B.side=F.shadowSide!==null?F.shadowSide:f[F.side],B.alphaMap=F.alphaMap,B.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,B.map=F.map,B.clipShadows=F.clipShadows,B.clippingPlanes=F.clippingPlanes,B.clipIntersection=F.clipIntersection,B.displacementMap=F.displacementMap,B.displacementScale=F.displacementScale,B.displacementBias=F.displacementBias,B.wireframeLinewidth=F.wireframeLinewidth,B.linewidth=F.linewidth,S.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const ne=n.properties.get(B);ne.light=S}return B}function y(A,F,S,L,B){if(A.visible===!1)return;if(A.layers.test(F.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&B===js)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,A.matrixWorld);const se=e.update(A),k=A.material;if(Array.isArray(k)){const Q=se.groups;for(let ce=0,j=Q.length;ce<j;ce++){const me=Q[ce],ue=k[me.materialIndex];if(ue&&ue.visible){const xe=D(A,ue,L,B);A.onBeforeShadow(n,A,F,S,se,xe,me),n.renderBufferDirect(S,null,se,xe,A,me),A.onAfterShadow(n,A,F,S,se,xe,me)}}}else if(k.visible){const Q=D(A,k,L,B);A.onBeforeShadow(n,A,F,S,se,Q,null),n.renderBufferDirect(S,null,se,Q,A,null),A.onAfterShadow(n,A,F,S,se,Q,null)}}const ne=A.children;for(let se=0,k=ne.length;se<k;se++)y(ne[se],F,S,L,B)}function w(A){A.target.removeEventListener("dispose",w);for(const S in c){const L=c[S],B=A.target.uuid;B in L&&(L[B].dispose(),delete L[B])}}}function VE(n,e){function t(){let z=!1;const Le=new Ht;let ye=null;const Ve=new Ht(0,0,0,0);return{setMask:function(Ge){ye!==Ge&&!z&&(n.colorMask(Ge,Ge,Ge,Ge),ye=Ge)},setLocked:function(Ge){z=Ge},setClear:function(Ge,we,et,Qe,Dt){Dt===!0&&(Ge*=Qe,we*=Qe,et*=Qe),Le.set(Ge,we,et,Qe),Ve.equals(Le)===!1&&(n.clearColor(Ge,we,et,Qe),Ve.copy(Le))},reset:function(){z=!1,ye=null,Ve.set(-1,0,0,0)}}}function i(){let z=!1,Le=!1,ye=null,Ve=null,Ge=null;return{setReversed:function(we){if(Le!==we){const et=e.get("EXT_clip_control");we?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),Le=we;const Qe=Ge;Ge=null,this.setClear(Qe)}},getReversed:function(){return Le},setTest:function(we){we?he(n.DEPTH_TEST):Ee(n.DEPTH_TEST)},setMask:function(we){ye!==we&&!z&&(n.depthMask(we),ye=we)},setFunc:function(we){if(Le&&(we=C0[we]),Ve!==we){switch(we){case Bc:n.depthFunc(n.NEVER);break;case zc:n.depthFunc(n.ALWAYS);break;case Vc:n.depthFunc(n.LESS);break;case xa:n.depthFunc(n.LEQUAL);break;case kc:n.depthFunc(n.EQUAL);break;case Hc:n.depthFunc(n.GEQUAL);break;case Gc:n.depthFunc(n.GREATER);break;case Wc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ve=we}},setLocked:function(we){z=we},setClear:function(we){Ge!==we&&(Ge=we,Le&&(we=1-we),n.clearDepth(we))},reset:function(){z=!1,ye=null,Ve=null,Ge=null,Le=!1}}}function r(){let z=!1,Le=null,ye=null,Ve=null,Ge=null,we=null,et=null,Qe=null,Dt=null;return{setTest:function(_t){z||(_t?he(n.STENCIL_TEST):Ee(n.STENCIL_TEST))},setMask:function(_t){Le!==_t&&!z&&(n.stencilMask(_t),Le=_t)},setFunc:function(_t,vn,zn){(ye!==_t||Ve!==vn||Ge!==zn)&&(n.stencilFunc(_t,vn,zn),ye=_t,Ve=vn,Ge=zn)},setOp:function(_t,vn,zn){(we!==_t||et!==vn||Qe!==zn)&&(n.stencilOp(_t,vn,zn),we=_t,et=vn,Qe=zn)},setLocked:function(_t){z=_t},setClear:function(_t){Dt!==_t&&(n.clearStencil(_t),Dt=_t)},reset:function(){z=!1,Le=null,ye=null,Ve=null,Ge=null,we=null,et=null,Qe=null,Dt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h={},d=new WeakMap,_=[],M=null,m=!1,p=null,T=null,D=null,y=null,w=null,A=null,F=null,S=new St(0,0,0),L=0,B=!1,G=null,ne=null,se=null,k=null,Q=null;const ce=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,me=0;const ue=n.getParameter(n.VERSION);ue.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(ue)[1]),j=me>=1):ue.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),j=me>=2);let xe=null,ge={};const Ie=n.getParameter(n.SCISSOR_BOX),Be=n.getParameter(n.VIEWPORT),nt=new Ht().fromArray(Ie),rt=new Ht().fromArray(Be);function st(z,Le,ye,Ve){const Ge=new Uint8Array(4),we=n.createTexture();n.bindTexture(z,we),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let et=0;et<ye;et++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(Le,0,n.RGBA,1,1,Ve,0,n.RGBA,n.UNSIGNED_BYTE,Ge):n.texImage2D(Le+et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ge);return we}const _e={};_e[n.TEXTURE_2D]=st(n.TEXTURE_2D,n.TEXTURE_2D,1),_e[n.TEXTURE_CUBE_MAP]=st(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[n.TEXTURE_2D_ARRAY]=st(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_e[n.TEXTURE_3D]=st(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(n.DEPTH_TEST),a.setFunc(xa),H(!1),te(hf),he(n.CULL_FACE),W(Qi);function he(z){u[z]!==!0&&(n.enable(z),u[z]=!0)}function Ee(z){u[z]!==!1&&(n.disable(z),u[z]=!1)}function qe(z,Le){return h[z]!==Le?(n.bindFramebuffer(z,Le),h[z]=Le,z===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Le),z===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Le),!0):!1}function Oe(z,Le){let ye=_,Ve=!1;if(z){ye=d.get(Le),ye===void 0&&(ye=[],d.set(Le,ye));const Ge=z.textures;if(ye.length!==Ge.length||ye[0]!==n.COLOR_ATTACHMENT0){for(let we=0,et=Ge.length;we<et;we++)ye[we]=n.COLOR_ATTACHMENT0+we;ye.length=Ge.length,Ve=!0}}else ye[0]!==n.BACK&&(ye[0]=n.BACK,Ve=!0);Ve&&n.drawBuffers(ye)}function R(z){return M!==z?(n.useProgram(z),M=z,!0):!1}const O={[ps]:n.FUNC_ADD,[Zv]:n.FUNC_SUBTRACT,[Jv]:n.FUNC_REVERSE_SUBTRACT};O[jv]=n.MIN,O[Qv]=n.MAX;const U={[e0]:n.ZERO,[t0]:n.ONE,[n0]:n.SRC_COLOR,[Up]:n.SRC_ALPHA,[l0]:n.SRC_ALPHA_SATURATE,[a0]:n.DST_COLOR,[r0]:n.DST_ALPHA,[i0]:n.ONE_MINUS_SRC_COLOR,[Np]:n.ONE_MINUS_SRC_ALPHA,[o0]:n.ONE_MINUS_DST_COLOR,[s0]:n.ONE_MINUS_DST_ALPHA,[c0]:n.CONSTANT_COLOR,[u0]:n.ONE_MINUS_CONSTANT_COLOR,[h0]:n.CONSTANT_ALPHA,[f0]:n.ONE_MINUS_CONSTANT_ALPHA};function W(z,Le,ye,Ve,Ge,we,et,Qe,Dt,_t){if(z===Qi){m===!0&&(Ee(n.BLEND),m=!1);return}if(m===!1&&(he(n.BLEND),m=!0),z!==Kv){if(z!==p||_t!==B){if((T!==ps||w!==ps)&&(n.blendEquation(n.FUNC_ADD),T=ps,w=ps),_t)switch(z){case oa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ff:n.blendFunc(n.ONE,n.ONE);break;case df:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case pf:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:yt("WebGLState: Invalid blending: ",z);break}else switch(z){case oa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ff:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case df:yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pf:yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:yt("WebGLState: Invalid blending: ",z);break}D=null,y=null,A=null,F=null,S.set(0,0,0),L=0,p=z,B=_t}return}Ge=Ge||Le,we=we||ye,et=et||Ve,(Le!==T||Ge!==w)&&(n.blendEquationSeparate(O[Le],O[Ge]),T=Le,w=Ge),(ye!==D||Ve!==y||we!==A||et!==F)&&(n.blendFuncSeparate(U[ye],U[Ve],U[we],U[et]),D=ye,y=Ve,A=we,F=et),(Qe.equals(S)===!1||Dt!==L)&&(n.blendColor(Qe.r,Qe.g,Qe.b,Dt),S.copy(Qe),L=Dt),p=z,B=!1}function X(z,Le){z.side===Si?Ee(n.CULL_FACE):he(n.CULL_FACE);let ye=z.side===Dn;Le&&(ye=!ye),H(ye),z.blending===oa&&z.transparent===!1?W(Qi):W(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),s.setMask(z.colorWrite);const Ve=z.stencilWrite;o.setTest(Ve),Ve&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),fe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):Ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function H(z){G!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),G=z)}function te(z){z!==$v?(he(n.CULL_FACE),z!==ne&&(z===hf?n.cullFace(n.BACK):z===qv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ee(n.CULL_FACE),ne=z}function de(z){z!==se&&(j&&n.lineWidth(z),se=z)}function fe(z,Le,ye){z?(he(n.POLYGON_OFFSET_FILL),(k!==Le||Q!==ye)&&(k=Le,Q=ye,a.getReversed()&&(Le=-Le),n.polygonOffset(Le,ye))):Ee(n.POLYGON_OFFSET_FILL)}function re(z){z?he(n.SCISSOR_TEST):Ee(n.SCISSOR_TEST)}function Re(z){z===void 0&&(z=n.TEXTURE0+ce-1),xe!==z&&(n.activeTexture(z),xe=z)}function C(z,Le,ye){ye===void 0&&(xe===null?ye=n.TEXTURE0+ce-1:ye=xe);let Ve=ge[ye];Ve===void 0&&(Ve={type:void 0,texture:void 0},ge[ye]=Ve),(Ve.type!==z||Ve.texture!==Le)&&(xe!==ye&&(n.activeTexture(ye),xe=ye),n.bindTexture(z,Le||_e[z]),Ve.type=z,Ve.texture=Le)}function Te(){const z=ge[xe];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Ue(){try{n.compressedTexImage2D(...arguments)}catch(z){yt("WebGLState:",z)}}function E(){try{n.compressedTexImage3D(...arguments)}catch(z){yt("WebGLState:",z)}}function g(){try{n.texSubImage2D(...arguments)}catch(z){yt("WebGLState:",z)}}function N(){try{n.texSubImage3D(...arguments)}catch(z){yt("WebGLState:",z)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(z){yt("WebGLState:",z)}}function ie(){try{n.compressedTexSubImage3D(...arguments)}catch(z){yt("WebGLState:",z)}}function ve(){try{n.texStorage2D(...arguments)}catch(z){yt("WebGLState:",z)}}function Pe(){try{n.texStorage3D(...arguments)}catch(z){yt("WebGLState:",z)}}function ae(){try{n.texImage2D(...arguments)}catch(z){yt("WebGLState:",z)}}function Se(){try{n.texImage3D(...arguments)}catch(z){yt("WebGLState:",z)}}function Ce(z){return f[z]!==void 0?f[z]:n.getParameter(z)}function He(z,Le){f[z]!==Le&&(n.pixelStorei(z,Le),f[z]=Le)}function Z(z){nt.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),nt.copy(z))}function P(z){rt.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),rt.copy(z))}function $(z,Le){let ye=c.get(Le);ye===void 0&&(ye=new WeakMap,c.set(Le,ye));let Ve=ye.get(z);Ve===void 0&&(Ve=n.getUniformBlockIndex(Le,z.name),ye.set(z,Ve))}function De(z,Le){const Ve=c.get(Le).get(z);l.get(Le)!==Ve&&(n.uniformBlockBinding(Le,Ve,z.__bindingPointIndex),l.set(Le,Ve))}function $e(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},xe=null,ge={},h={},d=new WeakMap,_=[],M=null,m=!1,p=null,T=null,D=null,y=null,w=null,A=null,F=null,S=new St(0,0,0),L=0,B=!1,G=null,ne=null,se=null,k=null,Q=null,nt.set(0,0,n.canvas.width,n.canvas.height),rt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:he,disable:Ee,bindFramebuffer:qe,drawBuffers:Oe,useProgram:R,setBlending:W,setMaterial:X,setFlipSided:H,setCullFace:te,setLineWidth:de,setPolygonOffset:fe,setScissorTest:re,activeTexture:Re,bindTexture:C,unbindTexture:Te,compressedTexImage2D:Ue,compressedTexImage3D:E,texImage2D:ae,texImage3D:Se,pixelStorei:He,getParameter:Ce,updateUBOMapping:$,uniformBlockBinding:De,texStorage2D:ve,texStorage3D:Pe,texSubImage2D:g,texSubImage3D:N,compressedTexSubImage2D:J,compressedTexSubImage3D:ie,scissor:Z,viewport:P,reset:$e}}function kE(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(E,g){return _?new OffscreenCanvas(E,g):Yo("canvas")}function m(E,g,N){let J=1;const ie=Ue(E);if((ie.width>N||ie.height>N)&&(J=N/Math.max(ie.width,ie.height)),J<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const ve=Math.floor(J*ie.width),Pe=Math.floor(J*ie.height);h===void 0&&(h=M(ve,Pe));const ae=g?M(ve,Pe):h;return ae.width=ve,ae.height=Pe,ae.getContext("2d").drawImage(E,0,0,ve,Pe),ut("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ve+"x"+Pe+")."),ae}else return"data"in E&&ut("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),E;return E}function p(E){return E.generateMipmaps}function T(E){n.generateMipmap(E)}function D(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(E,g,N,J,ie,ve=!1){if(E!==null){if(n[E]!==void 0)return n[E];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Pe;J&&(Pe=e.get("EXT_texture_norm16"),Pe||ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ae=g;if(g===n.RED&&(N===n.FLOAT&&(ae=n.R32F),N===n.HALF_FLOAT&&(ae=n.R16F),N===n.UNSIGNED_BYTE&&(ae=n.R8),N===n.UNSIGNED_SHORT&&Pe&&(ae=Pe.R16_EXT),N===n.SHORT&&Pe&&(ae=Pe.R16_SNORM_EXT)),g===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(ae=n.R8UI),N===n.UNSIGNED_SHORT&&(ae=n.R16UI),N===n.UNSIGNED_INT&&(ae=n.R32UI),N===n.BYTE&&(ae=n.R8I),N===n.SHORT&&(ae=n.R16I),N===n.INT&&(ae=n.R32I)),g===n.RG&&(N===n.FLOAT&&(ae=n.RG32F),N===n.HALF_FLOAT&&(ae=n.RG16F),N===n.UNSIGNED_BYTE&&(ae=n.RG8),N===n.UNSIGNED_SHORT&&Pe&&(ae=Pe.RG16_EXT),N===n.SHORT&&Pe&&(ae=Pe.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(ae=n.RG8UI),N===n.UNSIGNED_SHORT&&(ae=n.RG16UI),N===n.UNSIGNED_INT&&(ae=n.RG32UI),N===n.BYTE&&(ae=n.RG8I),N===n.SHORT&&(ae=n.RG16I),N===n.INT&&(ae=n.RG32I)),g===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(ae=n.RGB8UI),N===n.UNSIGNED_SHORT&&(ae=n.RGB16UI),N===n.UNSIGNED_INT&&(ae=n.RGB32UI),N===n.BYTE&&(ae=n.RGB8I),N===n.SHORT&&(ae=n.RGB16I),N===n.INT&&(ae=n.RGB32I)),g===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(ae=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(ae=n.RGBA16UI),N===n.UNSIGNED_INT&&(ae=n.RGBA32UI),N===n.BYTE&&(ae=n.RGBA8I),N===n.SHORT&&(ae=n.RGBA16I),N===n.INT&&(ae=n.RGBA32I)),g===n.RGB&&(N===n.UNSIGNED_SHORT&&Pe&&(ae=Pe.RGB16_EXT),N===n.SHORT&&Pe&&(ae=Pe.RGB16_SNORM_EXT),N===n.UNSIGNED_INT_5_9_9_9_REV&&(ae=n.RGB9_E5),N===n.UNSIGNED_INT_10F_11F_11F_REV&&(ae=n.R11F_G11F_B10F)),g===n.RGBA){const Se=ve?qo:xt.getTransfer(ie);N===n.FLOAT&&(ae=n.RGBA32F),N===n.HALF_FLOAT&&(ae=n.RGBA16F),N===n.UNSIGNED_BYTE&&(ae=Se===Ct?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT&&Pe&&(ae=Pe.RGBA16_EXT),N===n.SHORT&&Pe&&(ae=Pe.RGBA16_SNORM_EXT),N===n.UNSIGNED_SHORT_4_4_4_4&&(ae=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(ae=n.RGB5_A1)}return(ae===n.R16F||ae===n.R32F||ae===n.RG16F||ae===n.RG32F||ae===n.RGBA16F||ae===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function w(E,g){let N;return E?g===null||g===Ri||g===ya?N=n.DEPTH24_STENCIL8:g===Mi?N=n.DEPTH32F_STENCIL8:g===Sa&&(N=n.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ri||g===ya?N=n.DEPTH_COMPONENT24:g===Mi?N=n.DEPTH_COMPONENT32F:g===Sa&&(N=n.DEPTH_COMPONENT16),N}function A(E,g){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==cn&&E.minFilter!==mn?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function F(E){const g=E.target;g.removeEventListener("dispose",F),L(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&f.delete(g)}function S(E){const g=E.target;g.removeEventListener("dispose",S),G(g)}function L(E){const g=i.get(E);if(g.__webglInit===void 0)return;const N=E.source,J=d.get(N);if(J){const ie=J[g.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&B(E),Object.keys(J).length===0&&d.delete(N)}i.remove(E)}function B(E){const g=i.get(E);n.deleteTexture(g.__webglTexture);const N=E.source,J=d.get(N);delete J[g.__cacheKey],a.memory.textures--}function G(E){const g=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(g.__webglFramebuffer[J]))for(let ie=0;ie<g.__webglFramebuffer[J].length;ie++)n.deleteFramebuffer(g.__webglFramebuffer[J][ie]);else n.deleteFramebuffer(g.__webglFramebuffer[J]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[J])}else{if(Array.isArray(g.__webglFramebuffer))for(let J=0;J<g.__webglFramebuffer.length;J++)n.deleteFramebuffer(g.__webglFramebuffer[J]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let J=0;J<g.__webglColorRenderbuffer.length;J++)g.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[J]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const N=E.textures;for(let J=0,ie=N.length;J<ie;J++){const ve=i.get(N[J]);ve.__webglTexture&&(n.deleteTexture(ve.__webglTexture),a.memory.textures--),i.remove(N[J])}i.remove(E)}let ne=0;function se(){ne=0}function k(){return ne}function Q(E){ne=E}function ce(){const E=ne;return E>=r.maxTextures&&ut("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+r.maxTextures),ne+=1,E}function j(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function me(E,g){const N=i.get(E);if(E.isVideoTexture&&C(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&N.__version!==E.version){const J=E.image;if(J===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(N,E,g);return}}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+g)}function ue(E,g){const N=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){Ee(N,E,g);return}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+g)}function xe(E,g){const N=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){Ee(N,E,g);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+g)}function ge(E,g){const N=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&N.__version!==E.version){qe(N,E,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+g)}const Ie={[Xc]:n.REPEAT,[Ki]:n.CLAMP_TO_EDGE,[$c]:n.MIRRORED_REPEAT},Be={[cn]:n.NEAREST,[m0]:n.NEAREST_MIPMAP_NEAREST,[Ya]:n.NEAREST_MIPMAP_LINEAR,[mn]:n.LINEAR,[Hl]:n.LINEAR_MIPMAP_NEAREST,[Gr]:n.LINEAR_MIPMAP_LINEAR},nt={[x0]:n.NEVER,[E0]:n.ALWAYS,[S0]:n.LESS,[ih]:n.LEQUAL,[y0]:n.EQUAL,[rh]:n.GEQUAL,[M0]:n.GREATER,[b0]:n.NOTEQUAL};function rt(E,g){if(g.type===Mi&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===mn||g.magFilter===Hl||g.magFilter===Ya||g.magFilter===Gr||g.minFilter===mn||g.minFilter===Hl||g.minFilter===Ya||g.minFilter===Gr)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,Ie[g.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Ie[g.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Ie[g.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,Be[g.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,Be[g.minFilter]),g.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,nt[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===cn||g.minFilter!==Ya&&g.minFilter!==Gr||g.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function st(E,g){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",F));const J=g.source;let ie=d.get(J);ie===void 0&&(ie={},d.set(J,ie));const ve=j(g);if(ve!==E.__cacheKey){ie[ve]===void 0&&(ie[ve]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,N=!0),ie[ve].usedTimes++;const Pe=ie[E.__cacheKey];Pe!==void 0&&(ie[E.__cacheKey].usedTimes--,Pe.usedTimes===0&&B(g)),E.__cacheKey=ve,E.__webglTexture=ie[ve].texture}return N}function _e(E,g,N){return Math.floor(Math.floor(E/N)/g)}function he(E,g,N,J){const ve=E.updateRanges;if(ve.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,N,J,g.data);else{ve.sort((He,Z)=>He.start-Z.start);let Pe=0;for(let He=1;He<ve.length;He++){const Z=ve[Pe],P=ve[He],$=Z.start+Z.count,De=_e(P.start,g.width,4),$e=_e(Z.start,g.width,4);P.start<=$+1&&De===$e&&_e(P.start+P.count-1,g.width,4)===De?Z.count=Math.max(Z.count,P.start+P.count-Z.start):(++Pe,ve[Pe]=P)}ve.length=Pe+1;const ae=t.getParameter(n.UNPACK_ROW_LENGTH),Se=t.getParameter(n.UNPACK_SKIP_PIXELS),Ce=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let He=0,Z=ve.length;He<Z;He++){const P=ve[He],$=Math.floor(P.start/4),De=Math.ceil(P.count/4),$e=$%g.width,z=Math.floor($/g.width),Le=De,ye=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(n.UNPACK_SKIP_ROWS,z),t.texSubImage2D(n.TEXTURE_2D,0,$e,z,Le,ye,N,J,g.data)}E.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ae),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ce)}}function Ee(E,g,N){let J=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(J=n.TEXTURE_3D);const ie=st(E,g),ve=g.source;t.bindTexture(J,E.__webglTexture,n.TEXTURE0+N);const Pe=i.get(ve);if(ve.version!==Pe.__version||ie===!0){if(t.activeTexture(n.TEXTURE0+N),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const ye=xt.getPrimaries(xt.workingColorSpace),Ve=g.colorSpace===yr?null:xt.getPrimaries(g.colorSpace),Ge=g.colorSpace===yr||ye===Ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let Se=m(g.image,!1,r.maxTextureSize);Se=Te(g,Se);const Ce=s.convert(g.format,g.colorSpace),He=s.convert(g.type);let Z=y(g.internalFormat,Ce,He,g.normalized,g.colorSpace,g.isVideoTexture);rt(J,g);let P;const $=g.mipmaps,De=g.isVideoTexture!==!0,$e=Pe.__version===void 0||ie===!0,z=ve.dataReady,Le=A(g,Se);if(g.isDepthTexture)Z=w(g.format===Wr,g.type),$e&&(De?t.texStorage2D(n.TEXTURE_2D,1,Z,Se.width,Se.height):t.texImage2D(n.TEXTURE_2D,0,Z,Se.width,Se.height,0,Ce,He,null));else if(g.isDataTexture)if($.length>0){De&&$e&&t.texStorage2D(n.TEXTURE_2D,Le,Z,$[0].width,$[0].height);for(let ye=0,Ve=$.length;ye<Ve;ye++)P=$[ye],De?z&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,P.width,P.height,Ce,He,P.data):t.texImage2D(n.TEXTURE_2D,ye,Z,P.width,P.height,0,Ce,He,P.data);g.generateMipmaps=!1}else De?($e&&t.texStorage2D(n.TEXTURE_2D,Le,Z,Se.width,Se.height),z&&he(g,Se,Ce,He)):t.texImage2D(n.TEXTURE_2D,0,Z,Se.width,Se.height,0,Ce,He,Se.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){De&&$e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Z,$[0].width,$[0].height,Se.depth);for(let ye=0,Ve=$.length;ye<Ve;ye++)if(P=$[ye],g.format!==ri)if(Ce!==null)if(De){if(z)if(g.layerUpdates.size>0){const Ge=Jf(P.width,P.height,g.format,g.type);for(const we of g.layerUpdates){const et=P.data.subarray(we*Ge/P.data.BYTES_PER_ELEMENT,(we+1)*Ge/P.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,we,P.width,P.height,1,Ce,et)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,P.width,P.height,Se.depth,Ce,P.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ye,Z,P.width,P.height,Se.depth,0,P.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?z&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,P.width,P.height,Se.depth,Ce,He,P.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ye,Z,P.width,P.height,Se.depth,0,Ce,He,P.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{De&&$e&&t.texStorage2D(n.TEXTURE_2D,Le,Z,$[0].width,$[0].height);for(let ye=0,Ve=$.length;ye<Ve;ye++)P=$[ye],g.format!==ri?Ce!==null?De?z&&t.compressedTexSubImage2D(n.TEXTURE_2D,ye,0,0,P.width,P.height,Ce,P.data):t.compressedTexImage2D(n.TEXTURE_2D,ye,Z,P.width,P.height,0,P.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?z&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,P.width,P.height,Ce,He,P.data):t.texImage2D(n.TEXTURE_2D,ye,Z,P.width,P.height,0,Ce,He,P.data)}else if(g.isDataArrayTexture)if(De){if($e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Z,Se.width,Se.height,Se.depth),z)if(g.layerUpdates.size>0){const ye=Jf(Se.width,Se.height,g.format,g.type);for(const Ve of g.layerUpdates){const Ge=Se.data.subarray(Ve*ye/Se.data.BYTES_PER_ELEMENT,(Ve+1)*ye/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ve,Se.width,Se.height,1,Ce,He,Ge)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Ce,He,Se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Z,Se.width,Se.height,Se.depth,0,Ce,He,Se.data);else if(g.isData3DTexture)De?($e&&t.texStorage3D(n.TEXTURE_3D,Le,Z,Se.width,Se.height,Se.depth),z&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Ce,He,Se.data)):t.texImage3D(n.TEXTURE_3D,0,Z,Se.width,Se.height,Se.depth,0,Ce,He,Se.data);else if(g.isFramebufferTexture){if($e)if(De)t.texStorage2D(n.TEXTURE_2D,Le,Z,Se.width,Se.height);else{let ye=Se.width,Ve=Se.height;for(let Ge=0;Ge<Le;Ge++)t.texImage2D(n.TEXTURE_2D,Ge,Z,ye,Ve,0,Ce,He,null),ye>>=1,Ve>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){const ye=n.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),Se.parentNode!==ye){ye.appendChild(Se),f.add(g),ye.onpaint=Ve=>{const Ge=Ve.changedElements;for(const we of f)Ge.includes(we.image)&&(we.needsUpdate=!0)},ye.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Se);else{const Ge=n.RGBA,we=n.RGBA,et=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ge,we,et,Se)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if($.length>0){if(De&&$e){const ye=Ue($[0]);t.texStorage2D(n.TEXTURE_2D,Le,Z,ye.width,ye.height)}for(let ye=0,Ve=$.length;ye<Ve;ye++)P=$[ye],De?z&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Ce,He,P):t.texImage2D(n.TEXTURE_2D,ye,Z,Ce,He,P);g.generateMipmaps=!1}else if(De){if($e){const ye=Ue(Se);t.texStorage2D(n.TEXTURE_2D,Le,Z,ye.width,ye.height)}z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ce,He,Se)}else t.texImage2D(n.TEXTURE_2D,0,Z,Ce,He,Se);p(g)&&T(J),Pe.__version=ve.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function qe(E,g,N){if(g.image.length!==6)return;const J=st(E,g),ie=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+N);const ve=i.get(ie);if(ie.version!==ve.__version||J===!0){t.activeTexture(n.TEXTURE0+N);const Pe=xt.getPrimaries(xt.workingColorSpace),ae=g.colorSpace===yr?null:xt.getPrimaries(g.colorSpace),Se=g.colorSpace===yr||Pe===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ce=g.isCompressedTexture||g.image[0].isCompressedTexture,He=g.image[0]&&g.image[0].isDataTexture,Z=[];for(let we=0;we<6;we++)!Ce&&!He?Z[we]=m(g.image[we],!0,r.maxCubemapSize):Z[we]=He?g.image[we].image:g.image[we],Z[we]=Te(g,Z[we]);const P=Z[0],$=s.convert(g.format,g.colorSpace),De=s.convert(g.type),$e=y(g.internalFormat,$,De,g.normalized,g.colorSpace),z=g.isVideoTexture!==!0,Le=ve.__version===void 0||J===!0,ye=ie.dataReady;let Ve=A(g,P);rt(n.TEXTURE_CUBE_MAP,g);let Ge;if(Ce){z&&Le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ve,$e,P.width,P.height);for(let we=0;we<6;we++){Ge=Z[we].mipmaps;for(let et=0;et<Ge.length;et++){const Qe=Ge[et];g.format!==ri?$!==null?z?ye&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,et,0,0,Qe.width,Qe.height,$,Qe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,et,$e,Qe.width,Qe.height,0,Qe.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,et,0,0,Qe.width,Qe.height,$,De,Qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,et,$e,Qe.width,Qe.height,0,$,De,Qe.data)}}}else{if(Ge=g.mipmaps,z&&Le){Ge.length>0&&Ve++;const we=Ue(Z[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ve,$e,we.width,we.height)}for(let we=0;we<6;we++)if(He){z?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,Z[we].width,Z[we].height,$,De,Z[we].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,$e,Z[we].width,Z[we].height,0,$,De,Z[we].data);for(let et=0;et<Ge.length;et++){const Dt=Ge[et].image[we].image;z?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,et+1,0,0,Dt.width,Dt.height,$,De,Dt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,et+1,$e,Dt.width,Dt.height,0,$,De,Dt.data)}}else{z?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,$,De,Z[we]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,$e,$,De,Z[we]);for(let et=0;et<Ge.length;et++){const Qe=Ge[et];z?ye&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,et+1,0,0,$,De,Qe.image[we]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,et+1,$e,$,De,Qe.image[we])}}}p(g)&&T(n.TEXTURE_CUBE_MAP),ve.__version=ie.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Oe(E,g,N,J,ie,ve){const Pe=s.convert(N.format,N.colorSpace),ae=s.convert(N.type),Se=y(N.internalFormat,Pe,ae,N.normalized,N.colorSpace),Ce=i.get(g),He=i.get(N);if(He.__renderTarget=g,!Ce.__hasExternalTextures){const Z=Math.max(1,g.width>>ve),P=Math.max(1,g.height>>ve);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,ve,Se,Z,P,g.depth,0,Pe,ae,null):t.texImage2D(ie,ve,Se,Z,P,0,Pe,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Re(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,ie,He.__webglTexture,0,re(g)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,ie,He.__webglTexture,ve),t.bindFramebuffer(n.FRAMEBUFFER,null)}function R(E,g,N){if(n.bindRenderbuffer(n.RENDERBUFFER,E),g.depthBuffer){const J=g.depthTexture,ie=J&&J.isDepthTexture?J.type:null,ve=w(g.stencilBuffer,ie),Pe=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Re(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re(g),ve,g.width,g.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,re(g),ve,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ve,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pe,n.RENDERBUFFER,E)}else{const J=g.textures;for(let ie=0;ie<J.length;ie++){const ve=J[ie],Pe=s.convert(ve.format,ve.colorSpace),ae=s.convert(ve.type),Se=y(ve.internalFormat,Pe,ae,ve.normalized,ve.colorSpace);Re(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re(g),Se,g.width,g.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,re(g),Se,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Se,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function O(E,g,N){const J=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ie=i.get(g.depthTexture);if(ie.__renderTarget=g,(!ie.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),J){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,g.depthTexture.addEventListener("dispose",F)),ie.__webglTexture===void 0){ie.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),rt(n.TEXTURE_CUBE_MAP,g.depthTexture);const Ce=s.convert(g.depthTexture.format),He=s.convert(g.depthTexture.type);let Z;g.depthTexture.format===or?Z=n.DEPTH_COMPONENT24:g.depthTexture.format===Wr&&(Z=n.DEPTH24_STENCIL8);for(let P=0;P<6;P++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,Z,g.width,g.height,0,Ce,He,null)}}else me(g.depthTexture,0);const ve=ie.__webglTexture,Pe=re(g),ae=J?n.TEXTURE_CUBE_MAP_POSITIVE_X+N:n.TEXTURE_2D,Se=g.depthTexture.format===Wr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===or)Re(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Se,ae,ve,0,Pe):n.framebufferTexture2D(n.FRAMEBUFFER,Se,ae,ve,0);else if(g.depthTexture.format===Wr)Re(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Se,ae,ve,0,Pe):n.framebufferTexture2D(n.FRAMEBUFFER,Se,ae,ve,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function U(E){const g=i.get(E),N=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){const J=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),J){const ie=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,J.removeEventListener("dispose",ie)};J.addEventListener("dispose",ie),g.__depthDisposeCallback=ie}g.__boundDepthTexture=J}if(E.depthTexture&&!g.__autoAllocateDepthBuffer)if(N)for(let J=0;J<6;J++)O(g.__webglFramebuffer[J],E,J);else{const J=E.texture.mipmaps;J&&J.length>0?O(g.__webglFramebuffer[0],E,0):O(g.__webglFramebuffer,E,0)}else if(N){g.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[J]),g.__webglDepthbuffer[J]===void 0)g.__webglDepthbuffer[J]=n.createRenderbuffer(),R(g.__webglDepthbuffer[J],E,!1);else{const ie=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=g.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,ve)}}else{const J=E.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),R(g.__webglDepthbuffer,E,!1);else{const ie=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ve),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,ve)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function W(E,g,N){const J=i.get(E);g!==void 0&&Oe(J.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&U(E)}function X(E){const g=E.texture,N=i.get(E),J=i.get(g);E.addEventListener("dispose",S);const ie=E.textures,ve=E.isWebGLCubeRenderTarget===!0,Pe=ie.length>1;if(Pe||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=g.version,a.memory.textures++),ve){N.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[ae]=[];for(let Se=0;Se<g.mipmaps.length;Se++)N.__webglFramebuffer[ae][Se]=n.createFramebuffer()}else N.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let ae=0;ae<g.mipmaps.length;ae++)N.__webglFramebuffer[ae]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(Pe)for(let ae=0,Se=ie.length;ae<Se;ae++){const Ce=i.get(ie[ae]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&Re(E)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ae=0;ae<ie.length;ae++){const Se=ie[ae];N.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[ae]);const Ce=s.convert(Se.format,Se.colorSpace),He=s.convert(Se.type),Z=y(Se.internalFormat,Ce,He,Se.normalized,Se.colorSpace,E.isXRRenderTarget===!0),P=re(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,P,Z,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,N.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),R(N.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ve){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),rt(n.TEXTURE_CUBE_MAP,g);for(let ae=0;ae<6;ae++)if(g.mipmaps&&g.mipmaps.length>0)for(let Se=0;Se<g.mipmaps.length;Se++)Oe(N.__webglFramebuffer[ae][Se],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Se);else Oe(N.__webglFramebuffer[ae],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);p(g)&&T(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let ae=0,Se=ie.length;ae<Se;ae++){const Ce=ie[ae],He=i.get(Ce);let Z=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Z=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Z,He.__webglTexture),rt(Z,Ce),Oe(N.__webglFramebuffer,E,Ce,n.COLOR_ATTACHMENT0+ae,Z,0),p(Ce)&&T(Z)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ae=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,J.__webglTexture),rt(ae,g),g.mipmaps&&g.mipmaps.length>0)for(let Se=0;Se<g.mipmaps.length;Se++)Oe(N.__webglFramebuffer[Se],E,g,n.COLOR_ATTACHMENT0,ae,Se);else Oe(N.__webglFramebuffer,E,g,n.COLOR_ATTACHMENT0,ae,0);p(g)&&T(ae),t.unbindTexture()}E.depthBuffer&&U(E)}function H(E){const g=E.textures;for(let N=0,J=g.length;N<J;N++){const ie=g[N];if(p(ie)){const ve=D(E),Pe=i.get(ie).__webglTexture;t.bindTexture(ve,Pe),T(ve),t.unbindTexture()}}}const te=[],de=[];function fe(E){if(E.samples>0){if(Re(E)===!1){const g=E.textures,N=E.width,J=E.height;let ie=n.COLOR_BUFFER_BIT;const ve=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=i.get(E),ae=g.length>1;if(ae)for(let Ce=0;Ce<g.length;Ce++)t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Se=E.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ce=0;Ce<g.length;Ce++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ce]);const He=i.get(g[Ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,He,0)}n.blitFramebuffer(0,0,N,J,0,0,N,J,ie,n.NEAREST),l===!0&&(te.length=0,de.length=0,te.push(n.COLOR_ATTACHMENT0+Ce),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(te.push(ve),de.push(ve),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,de)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let Ce=0;Ce<g.length;Ce++){t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ce]);const He=i.get(g[Ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,He,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){const g=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function re(E){return Math.min(r.maxSamples,E.samples)}function Re(E){const g=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function C(E){const g=a.render.frame;u.get(E)!==g&&(u.set(E,g),E.update())}function Te(E,g){const N=E.colorSpace,J=E.format,ie=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==$o&&N!==yr&&(xt.getTransfer(N)===Ct?(J!==ri||ie!==Fn)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):yt("WebGLTextures: Unsupported texture color space:",N)),g}function Ue(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=ce,this.resetTextureUnits=se,this.getTextureUnits=k,this.setTextureUnits=Q,this.setTexture2D=me,this.setTexture2DArray=ue,this.setTexture3D=xe,this.setTextureCube=ge,this.rebindTextures=W,this.setupRenderTarget=X,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=U,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=Re,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function HE(n,e){function t(i,r=yr){let s;const a=xt.getTransfer(r);if(i===Fn)return n.UNSIGNED_BYTE;if(i===ju)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Qu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Yp)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Xp)return n.BYTE;if(i===$p)return n.SHORT;if(i===Sa)return n.UNSIGNED_SHORT;if(i===Ju)return n.INT;if(i===Ri)return n.UNSIGNED_INT;if(i===Mi)return n.FLOAT;if(i===Ci)return n.HALF_FLOAT;if(i===Kp)return n.ALPHA;if(i===Zp)return n.RGB;if(i===ri)return n.RGBA;if(i===or)return n.DEPTH_COMPONENT;if(i===Wr)return n.DEPTH_STENCIL;if(i===Jp)return n.RED;if(i===eh)return n.RED_INTEGER;if(i===Kr)return n.RG;if(i===th)return n.RG_INTEGER;if(i===nh)return n.RGBA_INTEGER;if(i===Po||i===Do||i===Lo||i===Io)if(a===Ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Po)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Do)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Po)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Do)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Lo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Io)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qc||i===Yc||i===Kc||i===Zc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===qc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jc||i===jc||i===Qc||i===eu||i===tu||i===Wo||i===nu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Jc||i===jc)return a===Ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Qc)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===eu)return s.COMPRESSED_R11_EAC;if(i===tu)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Wo)return s.COMPRESSED_RG11_EAC;if(i===nu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===iu||i===ru||i===su||i===au||i===ou||i===lu||i===cu||i===uu||i===hu||i===fu||i===du||i===pu||i===mu||i===gu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===iu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ru)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===su)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===au)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ou)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===du)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gu)return a===Ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_u||i===vu||i===xu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===_u)return a===Ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Su||i===yu||i===Xo||i===Mu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Su)return s.COMPRESSED_RED_RGTC1_EXT;if(i===yu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ya?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const GE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WE=`
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

}`;class XE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new rm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Pi({vertexShader:GE,fragmentShader:WE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bn(new pl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $E extends wr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const M=typeof XRWebGLBinding<"u",m=new XE,p={},T=t.getContextAttributes();let D=null,y=null;const w=[],A=[],F=new Fe;let S=null,L=null;const B=new ii;B.viewport=new Ht;const G=new ii;G.viewport=new Ht;const ne=[B,G],se=new jx;let k=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(_e){let he=w[_e];return he===void 0&&(he=new Zl,w[_e]=he),he.getTargetRaySpace()},this.getControllerGrip=function(_e){let he=w[_e];return he===void 0&&(he=new Zl,w[_e]=he),he.getGripSpace()},this.getHand=function(_e){let he=w[_e];return he===void 0&&(he=new Zl,w[_e]=he),he.getHandSpace()};function ce(_e){const he=A.indexOf(_e.inputSource);if(he===-1)return;const Ee=w[he];Ee!==void 0&&(Ee.update(_e.inputSource,_e.frame,c||a),Ee.dispatchEvent({type:_e.type,data:_e.inputSource}))}function j(){r.removeEventListener("select",ce),r.removeEventListener("selectstart",ce),r.removeEventListener("selectend",ce),r.removeEventListener("squeeze",ce),r.removeEventListener("squeezestart",ce),r.removeEventListener("squeezeend",ce),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",me);for(let _e=0;_e<w.length;_e++){const he=A[_e];he!==null&&(A[_e]=null,w[_e].disconnect(he))}k=null,Q=null,m.reset();for(const _e in p)delete p[_e];if(e.setRenderTarget(D),d=null,h=null,f=null,r=null,y=null,st.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(F.width,F.height,!1),L!==null){const _e=L.camera;_e.fov=L.fov,_e.zoom=L.zoom,_e.updateProjectionMatrix(),L=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(_e){s=_e,i.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(_e){o=_e,i.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(_e){c=_e},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(_e){if(r=_e,r!==null){if(D=e.getRenderTarget(),r.addEventListener("select",ce),r.addEventListener("selectstart",ce),r.addEventListener("selectend",ce),r.addEventListener("squeeze",ce),r.addEventListener("squeezestart",ce),r.addEventListener("squeezeend",ce),r.addEventListener("end",j),r.addEventListener("inputsourceschange",me),T.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(F),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,qe=null,Oe=null;T.depth&&(Oe=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=T.stencil?Wr:or,qe=T.stencil?ya:Ri);const R={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(R),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new oi(h.textureWidth,h.textureHeight,{format:ri,type:Fn,depthTexture:new ba(h.textureWidth,h.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const Ee={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,Ee),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new oi(d.framebufferWidth,d.framebufferHeight,{format:ri,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),st.setContext(r),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function me(_e){for(let he=0;he<_e.removed.length;he++){const Ee=_e.removed[he],qe=A.indexOf(Ee);qe>=0&&(A[qe]=null,w[qe].disconnect(Ee))}for(let he=0;he<_e.added.length;he++){const Ee=_e.added[he];let qe=A.indexOf(Ee);if(qe===-1){for(let R=0;R<w.length;R++)if(R>=A.length){A.push(Ee),qe=R;break}else if(A[R]===null){A[R]=Ee,qe=R;break}if(qe===-1)break}const Oe=w[qe];Oe&&Oe.connect(Ee)}}const ue=new K,xe=new K;function ge(_e,he,Ee){ue.setFromMatrixPosition(he.matrixWorld),xe.setFromMatrixPosition(Ee.matrixWorld);const qe=ue.distanceTo(xe),Oe=he.projectionMatrix.elements,R=Ee.projectionMatrix.elements,O=Oe[14]/(Oe[10]-1),U=Oe[14]/(Oe[10]+1),W=(Oe[9]+1)/Oe[5],X=(Oe[9]-1)/Oe[5],H=(Oe[8]-1)/Oe[0],te=(R[8]+1)/R[0],de=O*H,fe=O*te,re=qe/(-H+te),Re=re*-H;if(he.matrixWorld.decompose(_e.position,_e.quaternion,_e.scale),_e.translateX(Re),_e.translateZ(re),_e.matrixWorld.compose(_e.position,_e.quaternion,_e.scale),_e.matrixWorldInverse.copy(_e.matrixWorld).invert(),Oe[10]===-1)_e.projectionMatrix.copy(he.projectionMatrix),_e.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const C=O+re,Te=U+re,Ue=de-Re,E=fe+(qe-Re),g=W*U/Te*C,N=X*U/Te*C;_e.projectionMatrix.makePerspective(Ue,E,g,N,C,Te),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert()}}function Ie(_e,he){he===null?_e.matrixWorld.copy(_e.matrix):_e.matrixWorld.multiplyMatrices(he.matrixWorld,_e.matrix),_e.matrixWorldInverse.copy(_e.matrixWorld).invert()}this.updateCamera=function(_e){if(r===null)return;let he=_e.near,Ee=_e.far;m.texture!==null&&(m.depthNear>0&&(he=m.depthNear),m.depthFar>0&&(Ee=m.depthFar)),se.near=G.near=B.near=he,se.far=G.far=B.far=Ee,(k!==se.near||Q!==se.far)&&(r.updateRenderState({depthNear:se.near,depthFar:se.far}),k=se.near,Q=se.far),se.layers.mask=_e.layers.mask|6,B.layers.mask=se.layers.mask&-5,G.layers.mask=se.layers.mask&-3;const qe=_e.parent,Oe=se.cameras;Ie(se,qe);for(let R=0;R<Oe.length;R++)Ie(Oe[R],qe);Oe.length===2?ge(se,B,G):se.projectionMatrix.copy(B.projectionMatrix),L===null&&_e.isPerspectiveCamera&&(L={camera:_e,fov:_e.fov,zoom:_e.zoom}),Be(_e,se,qe)};function Be(_e,he,Ee){Ee===null?_e.matrix.copy(he.matrixWorld):(_e.matrix.copy(Ee.matrixWorld),_e.matrix.invert(),_e.matrix.multiply(he.matrixWorld)),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.updateMatrixWorld(!0),_e.projectionMatrix.copy(he.projectionMatrix),_e.projectionMatrixInverse.copy(he.projectionMatrixInverse),_e.isPerspectiveCamera&&(_e.fov=Eu*2*Math.atan(1/_e.projectionMatrix.elements[5]),_e.zoom=1)}this.getCamera=function(){return se},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(_e){l=_e,h!==null&&(h.fixedFoveation=_e),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=_e)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(se)},this.getCameraTexture=function(_e){return p[_e]};let nt=null;function rt(_e,he){if(u=he.getViewerPose(c||a),_=he,u!==null){const Ee=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let qe=!1;Ee.length!==se.cameras.length&&(se.cameras.length=0,qe=!0);for(let U=0;U<Ee.length;U++){const W=Ee[U];let X=null;if(d!==null)X=d.getViewport(W);else{const te=f.getViewSubImage(h,W);X=te.viewport,U===0&&(e.setRenderTargetTextures(y,te.colorTexture,te.depthStencilTexture),e.setRenderTarget(y))}let H=ne[U];H===void 0&&(H=new ii,H.layers.enable(U),H.viewport=new Ht,ne[U]=H),H.matrix.fromArray(W.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(W.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(X.x,X.y,X.width,X.height),U===0&&(se.matrix.copy(H.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale)),qe===!0&&se.cameras.push(H)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){f=i.getBinding();const U=f.getDepthInformation(Ee[0]);U&&U.isValid&&U.texture&&m.init(U,r.renderState)}if(Oe&&Oe.includes("camera-access")&&M){e.state.unbindTexture(),f=i.getBinding();for(let U=0;U<Ee.length;U++){const W=Ee[U].camera;if(W){let X=p[W];X||(X=new rm,p[W]=X);const H=f.getCameraImage(W);X.sourceTexture=H}}}}for(let Ee=0;Ee<w.length;Ee++){const qe=A[Ee],Oe=w[Ee];qe!==null&&Oe!==void 0&&Oe.update(qe,he,c||a)}nt&&nt(_e,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),_=null}const st=new _m;st.setAnimationLoop(rt),this.setAnimationLoop=function(_e){nt=_e},this.dispose=function(){}}}const qE=new Bt,Em=new ht;Em.set(-1,0,0,0,1,0,0,0,1);function YE(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,dm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,T,D,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),M(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,T,D):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Dn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Dn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),D=T.envMap,y=T.envMapRotation;D&&(m.envMap.value=D,m.envMapRotation.value.setFromMatrix4(qE.makeRotationFromEuler(y)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Em),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,D){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=D*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Dn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function KE(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){const A=w.program;i.uniformBlockBinding(y,A)}function c(y,w){let A=r[y.id];A===void 0&&(m(y),A=u(y),r[y.id]=A,y.addEventListener("dispose",T));const F=w.program;i.updateUBOMapping(y,F);const S=e.render.frame;s[y.id]!==S&&(h(y),s[y.id]=S)}function u(y){const w=f();y.__bindingPointIndex=w;const A=n.createBuffer(),F=y.__size,S=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,F,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,A),A}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const w=r[y.id],A=y.uniforms,F=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let S=0,L=A.length;S<L;S++){const B=A[S];if(Array.isArray(B))for(let G=0,ne=B.length;G<ne;G++)d(B[G],S,G,F);else d(B,S,0,F)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,w,A,F){if(M(y,w,A,F)===!0){const S=y.__offset,L=y.value;if(Array.isArray(L)){let B=0;for(let G=0;G<L.length;G++){const ne=L[G],se=p(ne);_(ne,y.__data,B),typeof ne!="number"&&typeof ne!="boolean"&&!ne.isMatrix3&&!ArrayBuffer.isView(ne)&&(B+=se.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(L,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,y.__data)}}function _(y,w,A){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,A)}function M(y,w,A,F){const S=y.value,L=w+"_"+A;if(F[L]===void 0)return typeof S=="number"||typeof S=="boolean"?F[L]=S:ArrayBuffer.isView(S)?F[L]=S.slice():F[L]=S.clone(),!0;{const B=F[L];if(typeof S=="number"||typeof S=="boolean"){if(B!==S)return F[L]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(B.equals(S)===!1)return B.copy(S),!0}}return!1}function m(y){const w=y.uniforms;let A=0;const F=16;for(let L=0,B=w.length;L<B;L++){const G=Array.isArray(w[L])?w[L]:[w[L]];for(let ne=0,se=G.length;ne<se;ne++){const k=G[ne],Q=Array.isArray(k.value)?k.value:[k.value];for(let ce=0,j=Q.length;ce<j;ce++){const me=Q[ce],ue=p(me),xe=A%F,ge=xe%ue.boundary,Ie=xe+ge;A+=ge,Ie!==0&&F-Ie<ue.storage&&(A+=F-Ie),k.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=A,A+=ue.storage}}}const S=A%F;return S>0&&(A+=F-S),y.__size=A,y.__cache={},this}function p(y){const w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):ut("WebGLRenderer: Unsupported uniform value type.",y),w}function T(y){const w=y.target;w.removeEventListener("dispose",T);const A=a.indexOf(w.__bindingPointIndex);a.splice(A,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function D(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:D}}const ZE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let di=null;function JE(){return di===null&&(di=new Q0(ZE,16,16,Kr,Ci),di.name="DFG_LUT",di.minFilter=mn,di.magFilter=mn,di.wrapS=Ki,di.wrapT=Ki,di.generateMipmaps=!1,di.needsUpdate=!0),di}class jE{constructor(e={}){const{canvas:t=w0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Fn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const M=d,m=new Set([nh,th,eh]),p=new Set([Fn,Ri,Sa,ya,ju,Qu]),T=new Uint32Array(4),D=new Int32Array(4),y=new K;let w=null,A=null;const F=[],S=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let G=!1,ne=null,se=null,k=null,Q=null;this._outputColorSpace=Wn;let ce=0,j=0,me=null,ue=-1,xe=null;const ge=new Ht,Ie=new Ht;let Be=null;const nt=new St(0);let rt=0,st=t.width,_e=t.height,he=1,Ee=null,qe=null;const Oe=new Ht(0,0,st,_e),R=new Ht(0,0,st,_e);let O=!1;const U=new oh;let W=!1,X=!1;const H=new Bt,te=new K,de=new Ht,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function Re(){return me===null?he:1}let C=i;function Te(b,q){return t.getContext(b,q)}let Ue,E,g,N,J,ie,ve,Pe,ae,Se,Ce,He,Z,P,$,De,$e,z,Le,ye,Ve,Ge,we;try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zu}`),t.addEventListener("webglcontextlost",Dt,!1),t.addEventListener("webglcontextrestored",_t,!1),t.addEventListener("webglcontextcreationerror",vn,!1),C===null){const q="webgl2";if(C=Te(q,b),C===null)throw Te(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}et()}catch(b){throw t.removeEventListener("webglcontextlost",Dt,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",vn,!1),yt("WebGLRenderer: "+b.message),b}function et(){Ue=new JM(C),Ue.init(),Ve=new HE(C,Ue),E=new kM(C,Ue,e,Ve),g=new VE(C,Ue),E.reversedDepthBuffer&&h&&g.buffers.depth.setReversed(!0),se=C.createFramebuffer(),k=C.createFramebuffer(),Q=C.createFramebuffer(),N=new eb(C),J=new AE,ie=new kE(C,Ue,g,J,E,Ve,N),ve=new ZM(B),Pe=new nS(C),Ge=new zM(C,Pe),ae=new jM(C,Pe,N,Ge),Se=new nb(C,ae,Pe,Ge,N),z=new tb(C,E,ie),$=new HM(J),Ce=new TE(B,ve,Ue,E,Ge,$),He=new YE(B,J),Z=new RE,P=new UE(Ue),$e=new BM(B,ve,g,Se,_,l),De=new zE(B,Se,E),we=new KE(C,N,E,g),Le=new VM(C,Ue,N),ye=new QM(C,Ue,N),N.programs=Ce.programs,B.capabilities=E,B.extensions=Ue,B.properties=J,B.renderLists=Z,B.shadowMap=De,B.state=g,B.info=N}M!==Fn&&(L=new rb(M,t.width,t.height,o,r,s));const Qe=new $E(B,C);this.xr=Qe,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const b=Ue.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ue.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(b){b!==void 0&&(he=b,this.setSize(st,_e,!1))},this.getSize=function(b){return b.set(st,_e)},this.setSize=function(b,q,pe=!0){if(Qe.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}st=b,_e=q,t.width=Math.floor(b*he),t.height=Math.floor(q*he),pe===!0&&(t.style.width=b+"px",t.style.height=q+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,b,q)},this.getDrawingBufferSize=function(b){return b.set(st*he,_e*he).floor()},this.setDrawingBufferSize=function(b,q,pe){st=b,_e=q,he=pe,t.width=Math.floor(b*pe),t.height=Math.floor(q*pe),this.setViewport(0,0,b,q)},this.setEffects=function(b){if(M===Fn){yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let q=0;q<b.length;q++)if(b[q].isOutputPass===!0){ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ge)},this.getViewport=function(b){return b.copy(Oe)},this.setViewport=function(b,q,pe,le){b.isVector4?Oe.set(b.x,b.y,b.z,b.w):Oe.set(b,q,pe,le),g.viewport(ge.copy(Oe).multiplyScalar(he).round())},this.getScissor=function(b){return b.copy(R)},this.setScissor=function(b,q,pe,le){b.isVector4?R.set(b.x,b.y,b.z,b.w):R.set(b,q,pe,le),g.scissor(Ie.copy(R).multiplyScalar(he).round())},this.getScissorTest=function(){return O},this.setScissorTest=function(b){g.setScissorTest(O=b)},this.setOpaqueSort=function(b){Ee=b},this.setTransparentSort=function(b){qe=b},this.getClearColor=function(b){return b.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(b=!0,q=!0,pe=!0){let le=0;if(b){let oe=!1;if(me!==null){const We=me.texture.format;oe=m.has(We)}if(oe){const We=me.texture.type,Ke=p.has(We),ke=$e.getClearColor(),Je=$e.getClearAlpha(),Ye=ke.r,dt=ke.g,mt=ke.b;Ke?(T[0]=Ye,T[1]=dt,T[2]=mt,T[3]=Je,C.clearBufferuiv(C.COLOR,0,T)):(D[0]=Ye,D[1]=dt,D[2]=mt,D[3]=Je,C.clearBufferiv(C.COLOR,0,D))}else le|=C.COLOR_BUFFER_BIT}q&&(le|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),pe&&(le|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&C.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),ne=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Dt,!1),t.removeEventListener("webglcontextrestored",_t,!1),t.removeEventListener("webglcontextcreationerror",vn,!1),$e.dispose(),Z.dispose(),P.dispose(),J.dispose(),ve.dispose(),Se.dispose(),Ge.dispose(),we.dispose(),Ce.dispose(),Qe.dispose(),Qe.removeEventListener("sessionstart",Ia),Qe.removeEventListener("sessionend",Rr),Ii.stop()};function Dt(b){b.preventDefault(),_f("WebGLRenderer: Context Lost."),G=!0}function _t(){_f("WebGLRenderer: Context Restored."),G=!1;const b=N.autoReset,q=De.enabled,pe=De.autoUpdate,le=De.needsUpdate,oe=De.type;et(),N.autoReset=b,De.enabled=q,De.autoUpdate=pe,De.needsUpdate=le,De.type=oe}function vn(b){yt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function zn(b){const q=b.target;q.removeEventListener("dispose",zn),vl(q)}function vl(b){xl(b),J.remove(b)}function xl(b){const q=J.get(b).programs;q!==void 0&&(q.forEach(function(pe){Ce.releaseProgram(pe)}),b.isShaderMaterial&&Ce.releaseShaderCache(b))}this.renderBufferDirect=function(b,q,pe,le,oe,We){q===null&&(q=fe);const Ke=oe.isMesh&&oe.matrixWorld.determinantAffine()<0,ke=yl(b,q,pe,le,oe);g.setMaterial(le,Ke);let Je=pe.index,Ye=1;if(le.wireframe===!0){if(Je=ae.getWireframeAttribute(pe),Je===void 0)return;Ye=2}const dt=pe.drawRange,mt=pe.attributes.position;let je=dt.start*Ye,bt=(dt.start+dt.count)*Ye;We!==null&&(je=Math.max(je,We.start*Ye),bt=Math.min(bt,(We.start+We.count)*Ye)),Je!==null?(je=Math.max(je,0),bt=Math.min(bt,Je.count)):mt!=null&&(je=Math.max(je,0),bt=Math.min(bt,mt.count));const zt=bt-je;if(zt<0||zt===1/0)return;Ge.setup(oe,le,ke,pe,Je);let Ut,Rt=Le;if(Je!==null&&(Ut=Pe.get(Je),Rt=ye,Rt.setIndex(Ut)),oe.isMesh)le.wireframe===!0?(g.setLineWidth(le.wireframeLinewidth*Re()),Rt.setMode(C.LINES)):Rt.setMode(C.TRIANGLES);else if(oe.isLine){let nn=le.linewidth;nn===void 0&&(nn=1),g.setLineWidth(nn*Re()),oe.isLineSegments?Rt.setMode(C.LINES):oe.isLineLoop?Rt.setMode(C.LINE_LOOP):Rt.setMode(C.LINE_STRIP)}else oe.isPoints?Rt.setMode(C.POINTS):oe.isSprite&&Rt.setMode(C.TRIANGLES);if(oe.isBatchedMesh)if(Ue.get("WEBGL_multi_draw"))Rt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{const nn=oe._multiDrawStarts,Ze=oe._multiDrawCounts,sn=oe._multiDrawCount,vt=Je?Pe.get(Je).bytesPerElement:1,An=J.get(le).currentProgram.getUniforms();for(let Vn=0;Vn<sn;Vn++)An.setValue(C,"_gl_DrawID",Vn),Rt.render(nn[Vn]/vt,Ze[Vn])}else if(oe.isInstancedMesh)Rt.renderInstances(je,zt,oe.count);else if(pe.isInstancedBufferGeometry){const nn=pe._maxInstanceCount!==void 0?pe._maxInstanceCount:1/0,Ze=Math.min(pe.instanceCount,nn);Rt.renderInstances(je,zt,Ze)}else Rt.render(je,zt)};function Ls(b,q,pe,le){ne!==null&&b.isNodeMaterial&&ne.setObject(le,b),W===!0&&$.setState(b,pe,!1),b.transparent===!0&&b.side===Si&&b.forceSinglePass===!1?(b.side=Dn,b.needsUpdate=!0,tn(b,q,le),b.side=qr,b.needsUpdate=!0,tn(b,q,le),b.side=Si):tn(b,q,le)}this.compile=function(b,q,pe=null){pe===null&&(pe=b),ne!==null&&ne.renderStart(b,q,pe),A=P.get(pe),A.init(q),S.push(A),pe.traverseVisible(function(oe){oe.isLight&&oe.layers.test(q.layers)&&(A.pushLight(oe),oe.castShadow&&A.pushShadow(oe))}),b!==pe&&b.traverseVisible(function(oe){oe.isLight&&oe.layers.test(q.layers)&&(A.pushLight(oe),oe.castShadow&&A.pushShadow(oe))}),A.setupLights(),ne!==null&&ne.updateLights(A.state.lightsArray),X=this.localClippingEnabled,W=$.init(this.clippingPlanes,X),W===!0&&$.setGlobalState(this.clippingPlanes,q),ne!==null&&De.render(A.state.shadowsArray,pe,q);const le=new Set;return b.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;const We=oe.material;if(We)if(Array.isArray(We))for(let Ke=0;Ke<We.length;Ke++){const ke=We[Ke];Ls(ke,pe,q,oe),le.add(ke)}else Ls(We,pe,q,oe),le.add(We)}),A=S.pop(),ne!==null&&ne.renderEnd(),le},this.compileAsync=function(b,q,pe=null){const le=this.compile(b,q,pe);return new Promise(oe=>{function We(){if(le.forEach(function(Ke){const Je=J.get(Ke).currentProgram;(Je===void 0||Je.isReady())&&le.delete(Ke)}),le.size===0){oe(b);return}setTimeout(We,10)}Ue.get("KHR_parallel_shader_compile")!==null?We():setTimeout(We,10)})};let Is=null;function Sl(b){Is&&Is(b)}function Ia(){Ii.stop()}function Rr(){Ii.start()}const Ii=new _m;Ii.setAnimationLoop(Sl),typeof self<"u"&&Ii.setContext(self),this.setAnimationLoop=function(b){Is=b,Qe.setAnimationLoop(b),b===null?Ii.stop():Ii.start()},Qe.addEventListener("sessionstart",Ia),Qe.addEventListener("sessionend",Rr),this.render=function(b,q){if(q!==void 0&&q.isCamera!==!0){yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;ne!==null&&ne.renderStart(b,q);const pe=Qe.enabled===!0&&Qe.isPresenting===!0,le=L!==null&&(me===null||pe)&&L.begin(B,me);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Qe.enabled===!0&&Qe.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Qe.cameraAutoUpdate===!0&&Qe.updateCamera(q),q=Qe.getCamera()),b.isScene===!0&&b.onBeforeRender(B,b,q,me),A=P.get(b,S.length),A.init(q),A.state.textureUnits=ie.getTextureUnits(),S.push(A),H.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),U.setFromProjectionMatrix(H,bi,q.reversedDepth),X=this.localClippingEnabled,W=$.init(this.clippingPlanes,X),w=Z.get(b,F.length),w.init(),F.push(w),Qe.enabled===!0&&Qe.isPresenting===!0){const Ke=B.xr.getDepthSensingMesh();Ke!==null&&Us(Ke,q,-1/0,B.sortObjects)}Us(b,q,0,B.sortObjects),w.finish(),ne!==null&&ne.updateLights(A.state.lightsArray),B.sortObjects===!0&&w.sort(Ee,qe),re=Qe.enabled===!1||Qe.isPresenting===!1||Qe.hasDepthSensing()===!1,re&&$e.addToRenderList(w,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),W===!0&&$.beginShadows();const oe=A.state.shadowsArray;if(De.render(oe,b,q),W===!0&&$.endShadows(),(le&&L.hasRenderPass())===!1){const Ke=w.opaque,ke=w.transmissive;if(A.setupLights(),q.isArrayCamera){const Je=q.cameras;if(ke.length>0)for(let Ye=0,dt=Je.length;Ye<dt;Ye++){const mt=Je[Ye];Ns(Ke,ke,b,mt)}re&&$e.render(b);for(let Ye=0,dt=Je.length;Ye<dt;Ye++){const mt=Je[Ye];Cr(w,b,mt,mt.viewport)}}else ke.length>0&&Ns(Ke,ke,b,q),re&&$e.render(b),Cr(w,b,q)}me!==null&&j===0&&(ie.updateMultisampleRenderTarget(me),ie.updateRenderTargetMipmap(me)),le&&L.end(B),b.isScene===!0&&b.onAfterRender(B,b,q),Ge.resetDefaultState(),ue=-1,xe=null,S.pop(),S.length>0?(A=S[S.length-1],ie.setTextureUnits(A.state.textureUnits),W===!0&&$.setGlobalState(B.clippingPlanes,A.state.camera)):A=null,F.pop(),F.length>0?w=F[F.length-1]:w=null,ne!==null&&ne.renderEnd()};function Us(b,q,pe,le){if(b.visible===!1)return;if(b.layers.test(q.layers)){if(b.isGroup)pe=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(q);else if(b.isLightProbeGrid)A.pushLightProbeGrid(b);else if(b.isLight)A.pushLight(b),b.castShadow&&A.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(U)){le&&de.setFromMatrixPosition(b.matrixWorld).applyMatrix4(H);const Ke=Se.update(b),ke=b.material;ke.visible&&w.push(b,Ke,ke,pe,de.z,null,q)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(U))){const Ke=Se.update(b),ke=b.material;if(le&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),de.copy(b.boundingSphere.center)):(Ke.boundingSphere===null&&Ke.computeBoundingSphere(),de.copy(Ke.boundingSphere.center)),de.applyMatrix4(b.matrixWorld).applyMatrix4(H)),Array.isArray(ke)){const Je=Ke.groups;for(let Ye=0,dt=Je.length;Ye<dt;Ye++){const mt=Je[Ye],je=ke[mt.materialIndex];je&&je.visible&&w.push(b,Ke,je,pe,de.z,mt,q)}}else ke.visible&&w.push(b,Ke,ke,pe,de.z,null,q)}}const We=b.children;for(let Ke=0,ke=We.length;Ke<ke;Ke++)Us(We[Ke],q,pe,le)}function Cr(b,q,pe,le){const{opaque:oe,transmissive:We,transparent:Ke}=b;A.setupLightsView(pe),W===!0&&$.setGlobalState(B.clippingPlanes,pe),le&&g.viewport(ge.copy(le)),oe.length>0&&Pr(oe,q,pe),We.length>0&&Pr(We,q,pe),Ke.length>0&&Pr(Ke,q,pe),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Ns(b,q,pe,le){if((pe.isScene===!0?pe.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[le.id]===void 0){const je=Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[le.id]=new oi(1,1,{generateMipmaps:!0,type:je?Ci:Fn,minFilter:Gr,samples:Math.max(4,E.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xt.workingColorSpace})}const We=A.state.transmissionRenderTarget[le.id],Ke=le.viewport||ge;We.setSize(Ke.z*B.transmissionResolutionScale,Ke.w*B.transmissionResolutionScale);const ke=B.getRenderTarget(),Je=B.getActiveCubeFace(),Ye=B.getActiveMipmapLevel();B.setRenderTarget(We),B.getClearColor(nt),rt=B.getClearAlpha(),rt<1&&B.setClearColor(16777215,.5),B.clear(),re&&$e.render(pe);const dt=B.toneMapping;B.toneMapping=Ti;const mt=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),A.setupLightsView(le),W===!0&&$.setGlobalState(B.clippingPlanes,le),Pr(b,pe,le),ie.updateMultisampleRenderTarget(We),ie.updateRenderTargetMipmap(We),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let bt=0,zt=q.length;bt<zt;bt++){const Ut=q[bt],{object:Rt,geometry:nn,material:Ze,group:sn}=Ut;if(Ze.side===Si&&Rt.layers.test(le.layers)){const vt=Ze.side;Ze.side=Dn,Ze.needsUpdate=!0,Ua(Rt,pe,le,nn,Ze,sn),Ze.side=vt,Ze.needsUpdate=!0,je=!0}}je===!0&&(ie.updateMultisampleRenderTarget(We),ie.updateRenderTargetMipmap(We))}B.setRenderTarget(ke,Je,Ye),B.setClearColor(nt,rt),mt!==void 0&&(le.viewport=mt),B.toneMapping=dt}function Pr(b,q,pe){const le=q.isScene===!0?q.overrideMaterial:null;for(let oe=0,We=b.length;oe<We;oe++){const Ke=b[oe],{object:ke,geometry:Je,group:Ye}=Ke;let dt=Ke.material;dt.allowOverride===!0&&le!==null&&(dt=le),ke.layers.test(pe.layers)&&Ua(ke,q,pe,Je,dt,Ye)}}function Ua(b,q,pe,le,oe,We){ne!==null&&oe.isNodeMaterial&&ne.setObject(b,oe),b.onBeforeRender(B,q,pe,le,oe,We),b.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),oe.onBeforeRender(B,q,pe,le,b,We),oe.transparent===!0&&oe.side===Si&&oe.forceSinglePass===!1?(oe.side=Dn,oe.needsUpdate=!0,B.renderBufferDirect(pe,q,le,oe,b,We),oe.side=qr,oe.needsUpdate=!0,B.renderBufferDirect(pe,q,le,oe,b,We),oe.side=Si):B.renderBufferDirect(pe,q,le,oe,b,We),b.onAfterRender(B,q,pe,le,oe,We)}function tn(b,q,pe){q.isScene!==!0&&(q=fe);const le=J.get(b),oe=A.state.lights,We=A.state.shadowsArray,Ke=oe.state.version,ke=Ce.getParameters(b,oe.state,We,q,pe,A.state.lightProbeGridArray),Je=Ce.getProgramCacheKey(ke);let Ye=le.programs;le.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?q.environment:null,le.fog=q.fog;const dt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;le.envMap=ve.get(b.envMap||le.environment,dt),le.envMapRotation=le.environment!==null&&b.envMap===null?q.environmentRotation:b.envMapRotation,Ye===void 0&&(b.addEventListener("dispose",zn),Ye=new Map,le.programs=Ye);let mt=Ye.get(Je);if(mt!==void 0){if(le.currentProgram===mt&&le.lightsStateVersion===Ke)return Fs(b,ke),mt}else ke.uniforms=Ce.getUniforms(b),ne!==null&&b.isNodeMaterial&&ne.build(b,pe,ke),b.onBeforeCompile(ke,B),mt=Ce.acquireProgram(ke,Je),Ye.set(Je,mt),le.uniforms=ke.uniforms;const je=le.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(je.clippingPlanes=$.uniform),Fs(b,ke),le.needsLights=Fa(b),le.lightsStateVersion=Ke,le.needsLights&&(je.ambientLightColor.value=oe.state.ambient,je.lightProbe.value=oe.state.probe,je.sunLights.value=oe.state.sun,je.sunLightShadows.value=oe.state.sunShadow,je.directionalLights.value=oe.state.directional,je.directionalLightShadows.value=oe.state.directionalShadow,je.spotLights.value=oe.state.spot,je.spotLightShadows.value=oe.state.spotShadow,je.rectAreaLights.value=oe.state.rectArea,je.ltc_1.value=oe.state.rectAreaLTC1,je.ltc_2.value=oe.state.rectAreaLTC2,je.pointLights.value=oe.state.point,je.pointLightShadows.value=oe.state.pointShadow,je.hemisphereLights.value=oe.state.hemi,je.sunShadowMatrix.value=oe.state.sunShadowMatrix,je.sunShadowCascade.value=oe.state.sunShadowCascade,je.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,je.spotLightMatrix.value=oe.state.spotLightMatrix,je.spotLightMap.value=oe.state.spotLightMap,je.pointShadowMatrix.value=oe.state.pointShadowMatrix),le.lightProbeGrid=A.state.lightProbeGridArray.length>0,le.currentProgram=mt,le.uniformsList=null,mt}function Na(b){if(b.uniformsList===null){const q=b.currentProgram.getUniforms();b.uniformsList=No.seqWithValue(q.seq,b.uniforms)}return b.uniformsList}function Fs(b,q){const pe=J.get(b);pe.outputColorSpace=q.outputColorSpace,pe.batching=q.batching,pe.batchingColor=q.batchingColor,pe.instancing=q.instancing,pe.instancingColor=q.instancingColor,pe.instancingMorph=q.instancingMorph,pe.skinning=q.skinning,pe.morphTargets=q.morphTargets,pe.morphNormals=q.morphNormals,pe.morphColors=q.morphColors,pe.morphTargetsCount=q.morphTargetsCount,pe.numClippingPlanes=q.numClippingPlanes,pe.numIntersection=q.numClipIntersection,pe.vertexAlphas=q.vertexAlphas,pe.vertexTangents=q.vertexTangents,pe.toneMapping=q.toneMapping}function ur(b,q){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;y.setFromMatrixPosition(q.matrixWorld);for(let pe=0,le=b.length;pe<le;pe++){const oe=b[pe];if(oe.texture!==null&&oe.boundingBox.containsPoint(y))return oe}return null}function yl(b,q,pe,le,oe){q.isScene!==!0&&(q=fe),ie.resetTextureUnits();const We=q.fog,Ke=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?q.environment:null,ke=me===null?B.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:xt.workingColorSpace,Je=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,Ye=ve.get(le.envMap||Ke,Je),dt=le.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,mt=!!pe.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),je=!!pe.morphAttributes.position,bt=!!pe.morphAttributes.normal,zt=!!pe.morphAttributes.color;let Ut=Ti;le.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Ut=B.toneMapping);const Rt=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,nn=Rt!==void 0?Rt.length:0,Ze=J.get(le),sn=A.state.lights;if(W===!0&&(X===!0||b!==xe)){const Lt=b===xe&&le.id===ue;$.setState(le,b,Lt)}let vt=!1;le.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==sn.state.version||Ze.outputColorSpace!==ke||oe.isBatchedMesh&&Ze.batching===!1||!oe.isBatchedMesh&&Ze.batching===!0||oe.isBatchedMesh&&Ze.batchingColor===!0&&oe._colorsTexture===null||oe.isBatchedMesh&&Ze.batchingColor===!1&&oe._colorsTexture!==null||oe.isInstancedMesh&&Ze.instancing===!1||!oe.isInstancedMesh&&Ze.instancing===!0||oe.isSkinnedMesh&&Ze.skinning===!1||!oe.isSkinnedMesh&&Ze.skinning===!0||oe.isInstancedMesh&&Ze.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&Ze.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&Ze.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&Ze.instancingMorph===!1&&oe.morphTexture!==null||Ze.envMap!==Ye||le.fog===!0&&Ze.fog!==We||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==$.numPlanes||Ze.numIntersection!==$.numIntersection)||Ze.vertexAlphas!==dt||Ze.vertexTangents!==mt||Ze.morphTargets!==je||Ze.morphNormals!==bt||Ze.morphColors!==zt||Ze.toneMapping!==Ut||Ze.morphTargetsCount!==nn||!!Ze.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,Ze.__version=le.version);let An=Ze.currentProgram;vt===!0&&(An=tn(le,q,oe),ne&&le.isNodeMaterial&&ne.onUpdateProgram(le,An,Ze));let Vn=!1,ci=!1,Ui=!1;const Et=An.getUniforms(),Vt=Ze.uniforms;if(g.useProgram(An.program)&&(Vn=!0,ci=!0,Ui=!0),le.id!==ue&&(ue=le.id,ci=!0),Ze.needsLights){const Lt=ur(A.state.lightProbeGridArray,oe);Ze.lightProbeGrid!==Lt&&(Ze.lightProbeGrid=Lt,ci=!0)}if(Vn||xe!==b){g.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Et.setValue(C,"projectionMatrix",b.projectionMatrix),Et.setValue(C,"viewMatrix",b.matrixWorldInverse);const Zn=Et.map.cameraPosition;Zn!==void 0&&Zn.setValue(C,te.setFromMatrixPosition(b.matrixWorld)),E.logarithmicDepthBuffer&&Et.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Et.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),xe!==b&&(xe=b,ci=!0,Ui=!0)}if(Ze.needsLights&&(sn.state.sunShadowMap.length>0&&Et.setValue(C,"sunShadowMap",sn.state.sunShadowMap,ie),sn.state.directionalShadowMap.length>0&&Et.setValue(C,"directionalShadowMap",sn.state.directionalShadowMap,ie),sn.state.spotShadowMap.length>0&&Et.setValue(C,"spotShadowMap",sn.state.spotShadowMap,ie),sn.state.pointShadowMap.length>0&&Et.setValue(C,"pointShadowMap",sn.state.pointShadowMap,ie)),oe.isSkinnedMesh){Et.setOptional(C,oe,"bindMatrix"),Et.setOptional(C,oe,"bindMatrixInverse");const Lt=oe.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),Et.setValue(C,"boneTexture",Lt.boneTexture,ie))}oe.isBatchedMesh&&(Et.setOptional(C,oe,"batchingTexture"),Et.setValue(C,"batchingTexture",oe._matricesTexture,ie),Et.setOptional(C,oe,"batchingIdTexture"),Et.setValue(C,"batchingIdTexture",oe._indirectTexture,ie),Et.setOptional(C,oe,"batchingColorTexture"),oe._colorsTexture!==null&&Et.setValue(C,"batchingColorTexture",oe._colorsTexture,ie));const ui=pe.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&z.update(oe,pe,An),(ci||Ze.receiveShadow!==oe.receiveShadow)&&(Ze.receiveShadow=oe.receiveShadow,Et.setValue(C,"receiveShadow",oe.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&q.environment!==null&&(Vt.envMapIntensity.value=q.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=JE()),ci){if(Et.setValue(C,"toneMappingExposure",B.toneMappingExposure),Ze.needsLights&&Os(Vt,Ui),We&&le.fog===!0&&He.refreshFogUniforms(Vt,We),He.refreshMaterialUniforms(Vt,le,he,_e,A.state.transmissionRenderTarget[b.id]),Ze.needsLights&&Ze.lightProbeGrid){const Lt=Ze.lightProbeGrid;Vt.probesSH.value=Lt.texture,Vt.probesMin.value.copy(Lt.boundingBox.min),Vt.probesMax.value.copy(Lt.boundingBox.max),Vt.probesResolution.value.copy(Lt.resolution)}No.upload(C,Na(Ze),Vt,ie)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(No.upload(C,Na(Ze),Vt,ie),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Et.setValue(C,"center",oe.center),Et.setValue(C,"modelViewMatrix",oe.modelViewMatrix),Et.setValue(C,"normalMatrix",oe.normalMatrix),Et.setValue(C,"modelMatrix",oe.matrixWorld),le.uniformsGroups!==void 0){const Lt=le.uniformsGroups;for(let Zn=0,hr=Lt.length;Zn<hr;Zn++){const Ba=Lt[Zn];we.update(Ba,An),we.bind(Ba,An)}}return An}function Os(b,q){b.ambientLightColor.needsUpdate=q,b.lightProbe.needsUpdate=q,b.sunLights.needsUpdate=q,b.sunLightShadows.needsUpdate=q,b.directionalLights.needsUpdate=q,b.directionalLightShadows.needsUpdate=q,b.pointLights.needsUpdate=q,b.pointLightShadows.needsUpdate=q,b.spotLights.needsUpdate=q,b.spotLightShadows.needsUpdate=q,b.rectAreaLights.needsUpdate=q,b.hemisphereLights.needsUpdate=q}function Fa(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return me},this.setRenderTargetTextures=function(b,q,pe){const le=J.get(b);le.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),J.get(b.texture).__webglTexture=q,J.get(b.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:pe,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,q){const pe=J.get(b);pe.__webglFramebuffer=q,pe.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(b,q=0,pe=0){me=b,ce=q,j=pe;let le=null,oe=!1,We=!1;if(b){const ke=J.get(b);if(ke.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(C.FRAMEBUFFER,ke.__webglFramebuffer),ge.copy(b.viewport),Ie.copy(b.scissor),Be=b.scissorTest,g.viewport(ge),g.scissor(Ie),g.setScissorTest(Be),ue=-1;return}else if(ke.__webglFramebuffer===void 0)ie.setupRenderTarget(b);else if(ke.__hasExternalTextures)ie.rebindTextures(b,J.get(b.texture).__webglTexture,J.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const dt=b.depthTexture;if(ke.__boundDepthTexture!==dt){if(dt!==null&&J.has(dt)&&(b.width!==dt.image.width||b.height!==dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(b)}}const Je=b.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(We=!0);const Ye=J.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ye[q])?le=Ye[q][pe]:le=Ye[q],oe=!0):b.samples>0&&ie.useMultisampledRTT(b)===!1?le=J.get(b).__webglMultisampledFramebuffer:Array.isArray(Ye)?le=Ye[pe]:le=Ye,ge.copy(b.viewport),Ie.copy(b.scissor),Be=b.scissorTest}else ge.copy(Oe).multiplyScalar(he).floor(),Ie.copy(R).multiplyScalar(he).floor(),Be=O;if(pe!==0&&(le=se),g.bindFramebuffer(C.FRAMEBUFFER,le)&&g.drawBuffers(b,le),g.viewport(ge),g.scissor(Ie),g.setScissorTest(Be),oe){const ke=J.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+q,ke.__webglTexture,pe)}else if(We){const ke=q;for(let Je=0;Je<b.textures.length;Je++){const Ye=J.get(b.textures[Je]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Je,Ye.__webglTexture,pe,ke)}}else if(b!==null&&pe!==0){const ke=J.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ke.__webglTexture,pe)}ue=-1};function Oa(b){const q=J.get(b);return(q.__readFormat!==b.format||q.__readType!==b.type)&&(q.__readFormat=b.format,q.__readType=b.type,q.__formatReadable=E.textureFormatReadable(b.format),q.__typeReadable=E.textureTypeReadable(b.type)),q}this.readRenderTargetPixels=function(b,q,pe,le,oe,We,Ke,ke=0){if(!(b&&b.isWebGLRenderTarget)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=J.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ke!==void 0&&(Je=Je[Ke]),Je){g.bindFramebuffer(C.FRAMEBUFFER,Je);try{const Ye=b.textures[ke],dt=Ye.format,mt=Ye.type;b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ke);const je=Oa(Ye);if(je.__formatReadable===!1){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(je.__typeReadable===!1){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=b.width-le&&pe>=0&&pe<=b.height-oe&&C.readPixels(q,pe,le,oe,Ve.convert(dt),Ve.convert(mt),We)}finally{const Ye=me!==null?J.get(me).__webglFramebuffer:null;g.bindFramebuffer(C.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(b,q,pe,le,oe,We,Ke,ke=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=J.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ke!==void 0&&(Je=Je[Ke]),Je)if(q>=0&&q<=b.width-le&&pe>=0&&pe<=b.height-oe){g.bindFramebuffer(C.FRAMEBUFFER,Je);const Ye=b.textures[ke],dt=Ye.format,mt=Ye.type;b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+ke);const je=Oa(Ye);if(je.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(je.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const bt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,bt),C.bufferData(C.PIXEL_PACK_BUFFER,We.byteLength,C.STREAM_READ),C.readPixels(q,pe,le,oe,Ve.convert(dt),Ve.convert(mt),0),C.bindBuffer(C.PIXEL_PACK_BUFFER,null);const zt=me!==null?J.get(me).__webglFramebuffer:null;g.bindFramebuffer(C.FRAMEBUFFER,zt);const Ut=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await R0(C,Ut,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,bt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,We),C.bindBuffer(C.PIXEL_PACK_BUFFER,null),C.deleteBuffer(bt),C.deleteSync(Ut),We}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,q=null,pe=0){const le=Math.pow(2,-pe),oe=Math.floor(b.image.width*le),We=Math.floor(b.image.height*le),Ke=q!==null?q.x:0,ke=q!==null?q.y:0;ie.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,pe,0,0,Ke,ke,oe,We),g.unbindTexture()},this.copyTextureToTexture=function(b,q,pe=null,le=null,oe=0,We=0){let Ke,ke,Je,Ye,dt,mt,je,bt,zt;const Ut=b.isCompressedTexture?b.mipmaps[We]:b.image;if(pe!==null)Ke=pe.max.x-pe.min.x,ke=pe.max.y-pe.min.y,Je=pe.isBox3?pe.max.z-pe.min.z:1,Ye=pe.min.x,dt=pe.min.y,mt=pe.isBox3?pe.min.z:0;else{const Vt=Math.pow(2,-oe);Ke=Math.floor(Ut.width*Vt),ke=Math.floor(Ut.height*Vt),b.isDataArrayTexture?Je=Ut.depth:b.isData3DTexture?Je=Math.floor(Ut.depth*Vt):Je=1,Ye=0,dt=0,mt=0}le!==null?(je=le.x,bt=le.y,zt=le.z):(je=0,bt=0,zt=0);const Rt=Ve.convert(q.format),nn=Ve.convert(q.type);let Ze;q.isData3DTexture?(ie.setTexture3D(q,0),Ze=C.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ie.setTexture2DArray(q,0),Ze=C.TEXTURE_2D_ARRAY):(ie.setTexture2D(q,0),Ze=C.TEXTURE_2D),g.activeTexture(C.TEXTURE0),g.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,q.flipY),g.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),g.pixelStorei(C.UNPACK_ALIGNMENT,q.unpackAlignment);const sn=g.getParameter(C.UNPACK_ROW_LENGTH),vt=g.getParameter(C.UNPACK_IMAGE_HEIGHT),An=g.getParameter(C.UNPACK_SKIP_PIXELS),Vn=g.getParameter(C.UNPACK_SKIP_ROWS),ci=g.getParameter(C.UNPACK_SKIP_IMAGES);g.pixelStorei(C.UNPACK_ROW_LENGTH,Ut.width),g.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ut.height),g.pixelStorei(C.UNPACK_SKIP_PIXELS,Ye),g.pixelStorei(C.UNPACK_SKIP_ROWS,dt),g.pixelStorei(C.UNPACK_SKIP_IMAGES,mt);const Ui=b.isDataArrayTexture||b.isData3DTexture,Et=q.isDataArrayTexture||q.isData3DTexture;if(b.isDepthTexture){const Vt=J.get(b),ui=J.get(q),Lt=J.get(Vt.__renderTarget),Zn=J.get(ui.__renderTarget);g.bindFramebuffer(C.READ_FRAMEBUFFER,Lt.__webglFramebuffer),g.bindFramebuffer(C.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let hr=0;hr<Je;hr++)Ui&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,J.get(b).__webglTexture,oe,mt+hr),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,J.get(q).__webglTexture,We,zt+hr)),C.blitFramebuffer(Ye,dt,Ke,ke,je,bt,Ke,ke,C.DEPTH_BUFFER_BIT,C.NEAREST);g.bindFramebuffer(C.READ_FRAMEBUFFER,null),g.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(oe!==0||b.isRenderTargetTexture||J.has(b)){const Vt=J.get(b),ui=J.get(q);g.bindFramebuffer(C.READ_FRAMEBUFFER,k),g.bindFramebuffer(C.DRAW_FRAMEBUFFER,Q);for(let Lt=0;Lt<Je;Lt++)Ui?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Vt.__webglTexture,oe,mt+Lt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Vt.__webglTexture,oe),Et?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ui.__webglTexture,We,zt+Lt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ui.__webglTexture,We),oe!==0?C.blitFramebuffer(Ye,dt,Ke,ke,je,bt,Ke,ke,C.COLOR_BUFFER_BIT,C.NEAREST):Et?C.copyTexSubImage3D(Ze,We,je,bt,zt+Lt,Ye,dt,Ke,ke):C.copyTexSubImage2D(Ze,We,je,bt,Ye,dt,Ke,ke);g.bindFramebuffer(C.READ_FRAMEBUFFER,null),g.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Et?b.isDataTexture||b.isData3DTexture?C.texSubImage3D(Ze,We,je,bt,zt,Ke,ke,Je,Rt,nn,Ut.data):q.isCompressedArrayTexture?C.compressedTexSubImage3D(Ze,We,je,bt,zt,Ke,ke,Je,Rt,Ut.data):C.texSubImage3D(Ze,We,je,bt,zt,Ke,ke,Je,Rt,nn,Ut):b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,We,je,bt,Ke,ke,Rt,nn,Ut.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,We,je,bt,Ut.width,Ut.height,Rt,Ut.data):C.texSubImage2D(C.TEXTURE_2D,We,je,bt,Ke,ke,Rt,nn,Ut);g.pixelStorei(C.UNPACK_ROW_LENGTH,sn),g.pixelStorei(C.UNPACK_IMAGE_HEIGHT,vt),g.pixelStorei(C.UNPACK_SKIP_PIXELS,An),g.pixelStorei(C.UNPACK_SKIP_ROWS,Vn),g.pixelStorei(C.UNPACK_SKIP_IMAGES,ci),We===0&&q.generateMipmaps&&C.generateMipmap(Ze),g.unbindTexture()},this.initRenderTarget=function(b){J.get(b).__webglFramebuffer===void 0&&ie.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ie.setTextureCube(b,0):b.isData3DTexture?ie.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ie.setTexture2DArray(b,0):ie.setTexture2D(b,0),g.unbindTexture()},this.resetState=function(){ce=0,j=0,me=null,g.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}const Sd={type:"change"},dh={type:"start"},Tm={type:"end"},Eo=new dl,yd=new Xi,QE=Math.cos(70*D0.DEG2RAD),jt=new K,Cn=2*Math.PI,Pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bc=1e-6;class eT extends eS{constructor(e,t=null){super(e,t),this.state=Pt.NONE,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ji.ROTATE,MIDDLE:ji.DOLLY,RIGHT:ji.PAN},this.touches={ONE:ms.ROTATE,TWO:ms.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new Tr,this._lastTargetPosition=new K,this._quat=new Tr().setFromUnitVectors(e.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Zf,this._sphericalDelta=new Zf,this._scale=1,this._panOffset=new K,this._rotateStart=new Fe,this._rotateEnd=new Fe,this._rotateDelta=new Fe,this._panStart=new Fe,this._panEnd=new Fe,this._panDelta=new Fe,this._dollyStart=new Fe,this._dollyEnd=new Fe,this._dollyDelta=new Fe,this._dollyDirection=new K,this._mouse=new Fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=nT.bind(this),this._onPointerDown=tT.bind(this),this._onPointerUp=iT.bind(this),this._onContextMenu=uT.bind(this),this._onMouseWheel=aT.bind(this),this._onKeyDown=oT.bind(this),this._onTouchStart=lT.bind(this),this._onTouchMove=cT.bind(this),this._onMouseDown=rT.bind(this),this._onMouseMove=sT.bind(this),this._interceptControlDown=hT.bind(this),this._interceptControlUp=fT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Pt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Sd),this.update(),this.state=Pt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;jt.copy(t).sub(this.target),jt.applyQuaternion(this._quat),this._spherical.setFromVector3(jt),this.autoRotate&&this.state===Pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Cn:i>Math.PI&&(i-=Cn),r<-Math.PI?r+=Cn:r>Math.PI&&(r-=Cn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(jt.setFromSpherical(this._spherical),jt.applyQuaternion(this._quatInverse),t.copy(this.target).add(jt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=jt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new K(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new K(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=jt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Eo.origin.copy(this.object.position),Eo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Eo.direction))<QE?this.object.lookAt(this.target):(yd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Eo.intersectPlane(yd,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>bc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bc||this._lastTargetPosition.distanceToSquared(this.target)>bc?(this.dispatchEvent(Sd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Cn/60*this.autoRotateSpeed*e:Cn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){jt.setFromMatrixColumn(t,0),jt.multiplyScalar(-e),this._panOffset.add(jt)}_panUp(e,t){this.screenSpacePanning===!0?jt.setFromMatrixColumn(t,1):(jt.setFromMatrixColumn(t,0),jt.crossVectors(this.object.up,jt)),jt.multiplyScalar(e),this._panOffset.add(jt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;jt.copy(r).sub(this.target);let s=jt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Fe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function tT(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function nT(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function iT(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Tm),this.state=Pt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function rT(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ji.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Pt.DOLLY;break;case ji.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Pt.ROTATE}break;case ji.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Pt.PAN}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(dh)}function sT(n){switch(this.state){case Pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function aT(n){this.enabled===!1||this.enableZoom===!1||this.state!==Pt.NONE||(n.preventDefault(),this.dispatchEvent(dh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Tm))}function oT(n){this.enabled!==!1&&this._handleKeyDown(n)}function lT(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ms.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Pt.TOUCH_ROTATE;break;case ms.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Pt.TOUCH_PAN;break;default:this.state=Pt.NONE}break;case 2:switch(this.touches.TWO){case ms.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Pt.TOUCH_DOLLY_PAN;break;case ms.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Pt.TOUCH_DOLLY_ROTATE;break;default:this.state=Pt.NONE}break;default:this.state=Pt.NONE}this.state!==Pt.NONE&&this.dispatchEvent(dh)}function cT(n){switch(this._trackPointer(n),this.state){case Pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Pt.NONE}}function uT(n){this.enabled!==!1&&n.preventDefault()}function hT(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fT(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class dT{renderer;scene;camera;controls;gear1=null;gear2=null;actionLine=null;tangentLine=null;pitchPoint=null;contactMarker=null;interferenceGroup;raycaster=new Qx;container;resizeObs;constructor(e){this.container=e;const t=e.clientWidth||800,i=e.clientHeight||600;this.renderer=new jE({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(t,i),e.appendChild(this.renderer.domElement),this.scene=new X0,this.scene.background=new St(1053464);const r=t/i,s=80;this.camera=new ml(-s*r/2,s*r/2,s/2,-s/2,.1,2e3),this.camera.position.set(0,0,120),this.camera.lookAt(0,0,0),this.controls=new eT(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.mouseButtons={LEFT:ji.ROTATE,MIDDLE:ji.DOLLY,RIGHT:ji.PAN};const a=new Zx(16777215,.65),o=new Kx(16777215,.9);o.position.set(40,60,100),this.scene.add(a,o),this.interferenceGroup=new gs,this.scene.add(this.interferenceGroup),this.resizeObs=new ResizeObserver(()=>this.resize()),this.resizeObs.observe(e),this.animate()}makeCircleLine(e,t,i=.02,r=160){const s=[];for(let l=0;l<=r;l++){const c=l/r*Math.PI*2;s.push(new K(e*Math.cos(c),e*Math.sin(c),i))}const a=new _n().setFromPoints(s),o=new Uo({color:t,transparent:!0,opacity:.8});return new nx(a,o)}buildGearMesh(e,t){const i=new gs,r=new Jo,s=e.outline;r.moveTo(s[0].x,s[0].y);for(let h=1;h<s.length;h++)r.lineTo(s[h].x,s[h].y);r.closePath();const a=e.input.faceWidth,o=new hh(r,{depth:a,bevelEnabled:!1,curveSegments:1});o.translate(0,0,-a/2),o.computeVertexNormals();const l=new Wx({color:t,metalness:.35,roughness:.55}),c=new Bn(o,l);i.add(c);const u=new tx(new rx(o,12),new Uo({color:2239027,transparent:!0,opacity:.5}));i.add(u);const f={pitch:this.makeCircleLine(e.pitchR,4891647,a/2+.02),base:this.makeCircleLine(e.baseR,2605194,a/2+.02),addendum:this.makeCircleLine(e.addendumR,16765286,a/2+.02),dedendum:this.makeCircleLine(e.dedendumR,16748451,a/2+.02)};return Object.values(f).forEach(h=>i.add(h)),{group:i,body:c,refs:f}}setGears(e,t,i){this.gear1&&this.scene.remove(this.gear1.group),this.gear2&&this.scene.remove(this.gear2.group),this.gear1=this.buildGearMesh(e,7252222),this.gear2=this.buildGearMesh(t,16758894),this.scene.add(this.gear1.group,this.gear2.group),this.gear2.group.position.x=i,this.targetCenter(i/2,Math.max(e.addendumR,t.addendumR))}targetCenter(e,t){const i=(this.container.clientWidth||800)/(this.container.clientHeight||600),r=(t*2+40)/2,s=Math.max(r*2,80);this.camera.left=-s*i/2,this.camera.right=s*i/2,this.camera.top=s/2,this.camera.bottom=-s/2,this.camera.updateProjectionMatrix(),this.controls.target.set(e,0,0),this.camera.position.set(e,0,140)}setAngles(e,t){this.gear1&&(this.gear1.group.rotation.z=e),this.gear2&&(this.gear2.group.rotation.z=t)}setMeshOverlay(e,t){if(this.clearOverlay(),!e||!this.gear1||!this.gear2)return;const i=o=>t[o],r=o=>{o.geometry.computeBoundingBox();const l=o.geometry.boundingBox;return l?l.max.z-l.min.z:0},s=r(this.gear1.body),a=r(this.gear2.body);if(this.gear1.refs.pitch.visible=!!i("showPitchCircle"),this.gear2.refs.pitch.visible=!!i("showPitchCircle"),this.gear1.refs.base.visible=!!i("showBaseCircle"),this.gear2.refs.base.visible=!!i("showBaseCircle"),this.gear1.refs.addendum.visible=!!i("showAddendumCircle"),this.gear2.refs.addendum.visible=!!i("showAddendumCircle"),this.gear1.refs.dedendum.visible=!!i("showDedendumCircle"),this.gear2.refs.dedendum.visible=!!i("showDedendumCircle"),i("showActionLine")){const o=Math.max(s,a)/2+1,l=(u,f,h)=>{const d=new _n().setFromPoints([new K(u.x,u.y,o),new K(f.x,f.y,o)]);return new lh(d,new Uo({color:h,transparent:!0,opacity:.9,depthTest:!1}))};this.tangentLine=l(e.tangentLine.p0,e.tangentLine.p1,8950691),this.tangentLine.renderOrder=50,this.actionLine=l(e.actionLine.p0,e.actionLine.p1,3794539),this.actionLine.renderOrder=51,this.scene.add(this.tangentLine,this.actionLine);const c=new jo(.7,16,16);this.pitchPoint=new Bn(c,new ca({color:16777215,depthTest:!1})),this.pitchPoint.position.set(e.pitchPoint.x,e.pitchPoint.y,o),this.pitchPoint.renderOrder=52,this.scene.add(this.pitchPoint)}if(i("showContact")){const o=e.alphaPrime,l=Math.sin(o),c=Math.cos(o),u={x:e.pitchPoint.x+t.contactS*l,y:e.pitchPoint.y+t.contactS*c},f=Math.max(s,a)/2+1.5,h=new jo(1,20,20);this.contactMarker=new Bn(h,new ca({color:16726891,depthTest:!1})),this.contactMarker.position.set(u.x,u.y,f),this.contactMarker.renderOrder=60,this.scene.add(this.contactMarker)}if(t.contactRegions)for(const o of t.contactRegions)for(const l of o){if(l.length<3)continue;const c=new Jo;c.moveTo(l[0].x,l[0].y);for(let d=1;d<l.length;d++)c.lineTo(l[d].x,l[d].y);c.closePath();const u=new fh(c),f=new ca({color:16723285,transparent:!0,opacity:.5,side:Si,depthTest:!1}),h=new Bn(u,f);h.position.z=Math.max(s,a)/2+2,h.renderOrder=999,this.interferenceGroup.add(h)}}clearOverlay(){for(this.actionLine&&(this.scene.remove(this.actionLine),this.actionLine.geometry.dispose(),this.actionLine=null),this.tangentLine&&(this.scene.remove(this.tangentLine),this.tangentLine.geometry.dispose(),this.tangentLine=null),this.pitchPoint&&(this.scene.remove(this.pitchPoint),this.pitchPoint=null),this.contactMarker&&(this.scene.remove(this.contactMarker),this.contactMarker=null);this.interferenceGroup.children.length;)this.interferenceGroup.children.pop().geometry?.dispose()}pick(e,t){return this.raycaster,null}resize(){const e=this.container.clientWidth,t=this.container.clientHeight;if(!e||!t)return;this.renderer.setSize(e,t);const i=e/t,s=(this.camera.top-this.camera.bottom)/1/2;this.camera.left=-s*i,this.camera.right=s*i,this.camera.updateProjectionMatrix()}animate=()=>{requestAnimationFrame(this.animate),this.controls.update(),this.renderer.render(this.scene,this.camera)};dispose(){this.resizeObs.disconnect(),this.controls.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}}const Gn={mm:{id:"mm",label:"mm",factor:1,step:.1,decimals:3},cm:{id:"cm",label:"cm",factor:.1,step:.01,decimals:4},m:{id:"m",label:"m",factor:.001,step:.001,decimals:5},in:{id:"in",label:"in",factor:1/25.4,step:.01,decimals:4}};function Fo(n,e){return n*Gn[e].factor}function Ec(n,e){return n/Gn[e].factor}function pT(n,e){return`${Fo(n,e).toFixed(Gn[e].decimals)} ${Gn[e].label}`}const mT=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function pi(n,e){return n>>>e|n<<32-e}function Am(n){const e=new TextEncoder().encode(n),t=e.length,i=t*8,r=Math.ceil((t+9)/64)*64,s=new Uint8Array(r);s.set(e),s[t]=128;const a=new DataView(s.buffer);a.setUint32(r-8,Math.floor(i/4294967296)),a.setUint32(r-4,i>>>0);let o=1779033703,l=3144134277,c=1013904242,u=2773480762,f=1359893119,h=2600822924,d=528734635,_=1541459225;const M=new Int32Array(64);for(let p=0;p<r;p+=64){for(let B=0;B<16;B++)M[B]=a.getInt32(p+B*4);for(let B=16;B<64;B++){const G=pi(M[B-15],7)^pi(M[B-15],18)^M[B-15]>>>3,ne=pi(M[B-2],17)^pi(M[B-2],19)^M[B-2]>>>10;M[B]=M[B-16]+G+M[B-7]+ne|0}let T=o,D=l,y=c,w=u,A=f,F=h,S=d,L=_;for(let B=0;B<64;B++){const G=pi(A,6)^pi(A,11)^pi(A,25),ne=A&F^~A&S,se=L+G+ne+mT[B]+M[B]|0,k=pi(T,2)^pi(T,13)^pi(T,22),Q=T&D^T&y^D&y,ce=k+Q|0;L=S,S=F,F=A,A=w+se|0,w=y,y=D,D=T,T=se+ce|0}o=o+T|0,l=l+D|0,c=c+y|0,u=u+w|0,f=f+A|0,h=h+F|0,d=d+S|0,_=_+L|0}const m=p=>(p>>>0).toString(16).padStart(8,"0");return m(o)+m(l)+m(c)+m(u)+m(f)+m(h)+m(d)+m(_)}function Rs(n){if(n===null||typeof n=="number"||typeof n=="boolean"||typeof n=="string")return JSON.stringify(n);if(Array.isArray(n))return"["+n.map(Rs).join(",")+"]";if(typeof n=="object"){const e=n;return"{"+Object.keys(e).filter(i=>e[i]!==void 0).sort().map(i=>JSON.stringify(i)+":"+Rs(e[i])).join(",")+"}"}return JSON.stringify(null)}function Nn(n){if(!Number.isFinite(n))return 0;const e=Math.round(n*1e9)/1e9;return e===0?0:e}const gT=2,wm="spur-gear-lab/case";function wa(n){const e=t=>t.map(i=>[Nn(i.x),Nn(i.y)]);return"sha256:"+Am(Rs([e(n.gear1),e(n.gear2)]))}function _T(n){const e=n.interference;return{centerDistance:Nn(n.centerDistance),standardCenter:Nn(n.standardCenter),alphaPrimeDeg:Nn(n.alphaPrimeDeg),contactRatio:Nn(n.contactRatio),backlashTangential:Nn(n.backlashTangential),clearanceMin:Nn(n.clearanceMin),basePitchMatch:n.basePitchMatch,undercut:n.undercut,warnings:n.warnings,interference:e?{phi1:Nn(e.phi1),contactS:Nn(e.contactS),area:Nn(e.area),regions:e.regions.map(t=>t.map(i=>[Nn(i.x),Nn(i.y)]))}:null}}function Du(n){return{v:2,caseId:n.caseId,parents:[...n.parentIds].sort(),note:n.note,params:n.params,outlineHash:n.outlineHash,check:n.check?_T(n.check):null}}function ph(n){return"rev-"+Am(Rs(Du(n)))}function Rm(n,e){return Rs(Du(n))===Rs(Du(e))}function mh(n){const e={schemaVersion:2,caseId:n.caseId,parentIds:[...new Set(n.parentIds)].sort(),createdAt:n.createdAt??Date.now(),note:n.note??"",params:structuredClone(n.params),outlines:n.outlines,outlineHash:wa(n.outlines),check:n.check?structuredClone(n.check):null,migratedFrom:n.migratedFrom};return{...e,id:ph(e)}}function gh(n){const e=[],t=n;if(!t||typeof t!="object")return["修订不是对象"];t.schemaVersion!==2&&e.push("schemaVersion 必须为 2"),(typeof t.caseId!="string"||!t.caseId)&&e.push("缺少 caseId"),(!Array.isArray(t.parentIds)||t.parentIds.some(a=>typeof a!="string"))&&e.push("parentIds 必须是字符串数组"),typeof t.note!="string"&&e.push("缺少备注字段 note");const i=t.params;if(!i||typeof i!="object")e.push("缺少参数快照 params");else{for(const[a,o]of[["gear1",i.gear1],["gear2",i.gear2]]){if(!o||typeof o!="object"){e.push(`缺少 ${a} 参数`);continue}(!(o.z>=4)||Math.abs(o.z-Math.round(o.z))>1e-9)&&e.push(`${a}.z 必须为 ≥4 的整数`),o.module>0||e.push(`${a}.module 必须 > 0`),o.alphaDeg>0&&o.alphaDeg<90||e.push(`${a}.alphaDeg 必须在 (0,90) 内`),o.faceWidth>0||e.push(`${a}.faceWidth 必须 > 0`)}i.centerDistance===null||typeof i.centerDistance=="number"&&i.centerDistance>0||e.push("centerDistance 必须为 null 或正数")}const r=t.outlines,s=a=>Array.isArray(a)&&a.length>=3&&a.every(o=>o&&Number.isFinite(o.x)&&Number.isFinite(o.y));return(!r||!s(r.gear1)||!s(r.gear2))&&e.push("轮廓缺失或点数据非法（修订必须包含完整轮廓）"),(typeof t.outlineHash!="string"||!t.outlineHash.startsWith("sha256:"))&&e.push("缺少轮廓指纹"),e}function Cm(n){const e=gh(n);if(e.length)return{ok:!1,reason:e.join("；")};if(wa(n.outlines)!==n.outlineHash)return{ok:!1,reason:"轮廓指纹与轮廓数据不一致"};const i=ph(n);return i!==n.id?{ok:!1,reason:`修订 id 与内容不符（声称 ${n.id.slice(0,16)}…，实为 ${i.slice(0,16)}…）`}:{ok:!0}}function Pm(n){const e=new Set;for(const i of n)for(const r of i.parentIds)e.add(r);const t=n.map(i=>i.id).filter(i=>!e.has(i));return[...new Set(t)].sort()}function vT(n){const e=new Map(n.map(s=>[s.id,s])),t=new Set,i=[];let r=[...n];for(;r.length;){const s=r.filter(a=>a.parentIds.every(o=>!e.has(o)||t.has(o)));if(!s.length){i.push(...r);break}s.sort((a,o)=>a.createdAt-o.createdAt);for(const a of s)i.push(a),t.add(a.id);r=r.filter(a=>!t.has(a.id))}return i}function Jr(n){return{z:Math.round(n.z),module:n.module,alpha:n.alpha,faceWidth:n.faceWidth}}function Dm(n){const e=Yi(Jr(n.gear1)),t=Yi(Jr(n.gear2));return{gear1:e.outline,gear2:t.outline}}function Lm(n){const e={gear1:{...n.gear1},gear2:{...n.gear2},centerDistance:n.centerDistance??null},t=n.outlines??Dm(e),i=mh({caseId:n.id,parentIds:[],note:n.note??"",params:e,outlines:t,check:null,createdAt:n.createdAt||Date.now(),migratedFrom:1});return{meta:{id:n.id,name:n.name||"未命名案例",unit:n.unit||"mm",createdAt:n.createdAt||Date.now(),updatedAt:n.updatedAt||Date.now(),headIds:[i.id]},revision:i}}function Md(n,e){const t={schemaVersion:2,kind:wm,exportedAt:Date.now(),case:{id:n.id,name:n.name,unit:n.unit},revisions:vT(e)};return JSON.stringify(t,null,2)}const xT=["mm","cm","m","in"];function ST(n){if(!n||typeof n!="object")return null;const e=n,t=a=>typeof a=="number"&&Number.isFinite(a)?a:0,i=a=>Array.isArray(a)&&a.every(o=>o&&Number.isFinite(o.x)&&Number.isFinite(o.y));let r=null;const s=e.interference;return s&&typeof s=="object"&&Number.isFinite(s.area)&&(r={phi1:t(s.phi1),contactS:t(s.contactS),area:t(s.area),regions:Array.isArray(s.regions)?s.regions.filter(i):[]}),{checkedAt:t(e.checkedAt),centerDistance:t(e.centerDistance),standardCenter:t(e.standardCenter),alphaPrimeDeg:t(e.alphaPrimeDeg),contactRatio:t(e.contactRatio),backlashTangential:t(e.backlashTangential),clearanceMin:t(e.clearanceMin),basePitchMatch:e.basePitchMatch===!0,undercut:Array.isArray(e.undercut)?[e.undercut[0]===!0,e.undercut[1]===!0]:[!1,!1],warnings:Array.isArray(e.warnings)?e.warnings.filter(a=>typeof a=="string"):[],interference:r}}function yT(n,e,t){const i=n;if(!i||typeof i!="object")return{error:"修订不是对象",rebuilt:!1};const r=i.params;if(!r||typeof r!="object")return{error:"修订缺少参数快照",rebuilt:!1};let s=i.outlines,a=!1;const o=s&&Array.isArray(s.gear1)&&Array.isArray(s.gear2);if(!o){if(typeof i.outlineHash=="string"&&i.outlineHash.startsWith("sha256:"))return{error:"轮廓缺失但文件带有轮廓指纹（内容不一致，可能已损坏或被截断）",rebuilt:!1};try{s=Dm(r),a=!0}catch(h){return{error:`轮廓缺失且无法由参数重建：${h.message}`,rebuilt:!1}}}const l={schemaVersion:2,id:String(i.id??""),caseId:e,parentIds:Array.isArray(i.parentIds)?i.parentIds.filter(h=>typeof h=="string"):[],createdAt:Number.isFinite(i.createdAt)?i.createdAt:Date.now(),note:typeof i.note=="string"?i.note:"",params:r,outlines:s,outlineHash:o?String(i.outlineHash??""):wa(s),check:ST(i.check),migratedFrom:i.migratedFrom===1?1:void 0},c=gh(l);if(c.length)return{error:c.join("；"),rebuilt:a};if(wa(l.outlines)!==l.outlineHash)return{error:"轮廓指纹与轮廓数据不一致（文件可能已损坏或被篡改）",rebuilt:a};const f=ph(l);return l.id!==f&&(t.push({type:"id-mismatch",caseId:e,claimedId:l.id||"(缺失)",actualId:f,detail:`导入文件声称修订 ${l.id.slice(0,18)}…，但其内容指纹为 ${f.slice(0,18)}…；已按真实指纹保存，不会覆盖同 id 的既有修订`,detectedAt:Date.now(),resolved:!1}),l.id=f),{revision:l,rebuilt:a}}function MT(n){let e;try{e=JSON.parse(n)}catch{return{ok:!1,error:"不是合法的 JSON 文件"}}if(!e||typeof e!="object")return{ok:!1,error:"文件内容不是对象"};const t=e;if(t.schemaVersion===1)try{const{meta:i,revision:r}=Lm(t),s=gh(r);return s.length?{ok:!1,error:"旧案例迁移后校验失败："+s.join("；")}:{ok:!0,caseInfo:{id:i.id,name:i.name,unit:i.unit},revisions:[r],duplicates:[],conflicts:[],migratedFromV1:!0,rebuiltOutlines:t.outlines?0:1}}catch(i){return{ok:!1,error:"旧版案例迁移失败："+i.message}}if(t.schemaVersion===2&&t.kind===wm){const i=t.case??{},r=typeof i.id=="string"&&i.id?i.id:`case-import-${Date.now().toString(36)}`,s={id:r,name:typeof i.name=="string"&&i.name?i.name:"导入的案例",unit:xT.includes(i.unit)?i.unit:"mm"},a=t.revisions;if(!Array.isArray(a)||!a.length)return{ok:!1,error:"导出文件不包含任何修订"};const o=[],l=[],c=[],u=new Set;let f=0;for(const h of a){const{revision:d,error:_,rebuilt:M}=yT(h,r,o);if(_||!d){const m=h?.id;return{ok:!1,error:`修订 ${typeof m=="string"?m.slice(0,18):"?"} 校验失败：${_}`,conflict:{type:"hash-mismatch",caseId:r,claimedId:typeof m=="string"?m:"(未知)",actualId:"",detail:`导入被拒绝：${_}。文件未写入任何内容`,detectedAt:Date.now(),resolved:!1}}}if(M&&f++,u.has(d.id)){c.push(d.id);continue}u.add(d.id),l.push(d)}return{ok:!0,caseInfo:s,revisions:l,duplicates:c,conflicts:o,migratedFromV1:!1,rebuiltOutlines:f}}return{ok:!1,error:`不支持的文件格式（需要 schemaVersion 1 旧案例或 ${gT} 导出文件）`}}const bT="spur-gear-lab",ET=2,Kn="cases",Ln="revisions",lr="conflicts";let To=null;function TT(){return To||(To=new Promise((n,e)=>{const t=indexedDB.open(bT,ET);t.onupgradeneeded=i=>{const r=t.result,s=i.oldVersion,a=t.transaction;if(s<1&&r.createObjectStore(Kn,{keyPath:"id"}).createIndex("updatedAt","updatedAt"),s<2&&(r.createObjectStore(Ln,{keyPath:"id"}).createIndex("caseId","caseId"),r.createObjectStore(lr,{keyPath:"id",autoIncrement:!0}),s===1)){const l=a.objectStore(Kn),c=l.getAll();c.onsuccess=()=>{for(const u of c.result)if(!(!u||u.schemaVersion!==1))try{const{meta:f,revision:h}=Lm(u);l.put(f),a.objectStore(Ln).put(h)}catch(f){console.error("旧案例迁移失败（保留原记录）",u.id,f)}}}},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)}),To)}function Tn(n){return new Promise((e,t)=>{n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}async function Li(n,e,t){const r=(await TT()).transaction(n,e),s=new Promise((o,l)=>{r.oncomplete=()=>o(),r.onerror=()=>l(r.error??new Error("事务失败")),r.onabort=()=>l(r.error??new Error("事务被中止"))});let a;try{a=await t(r)}catch(o){try{r.abort()}catch{}throw s.catch(()=>{}),o}return await s,a}async function AT(n){return Li([Kn],"readonly",e=>Tn(e.objectStore(Kn).get(n)))}async function wT(n){return Li([Ln],"readonly",e=>Tn(e.objectStore(Ln).get(n)))}async function Tc(n){return(await Li([Ln],"readonly",t=>Tn(t.objectStore(Ln).index("caseId").getAll(n)))).sort((t,i)=>t.createdAt-i.createdAt||t.id.localeCompare(i.id))}async function RT(){return Li([Kn,Ln],"readonly",async n=>{const e=await Tn(n.objectStore(Kn).getAll()),t=await Tn(n.objectStore(Ln).getAll()),i=new Map;for(const r of t){const s=i.get(r.caseId)??[];s.push(r),i.set(r.caseId,s)}return e.map(r=>{const s={...r,headIds:Array.isArray(r.headIds)?r.headIds:[]},a=i.get(s.id)??[],o=new Map(a.map(c=>[c.id,c])),l=s.headIds.map(c=>o.get(c)).filter(c=>!!c).sort((c,u)=>c.createdAt-u.createdAt);return{meta:s,heads:l,revisionCount:a.length}}).sort((r,s)=>s.meta.updatedAt-r.meta.updatedAt)})}async function bd(){return(await Li([lr],"readonly",e=>Tn(e.objectStore(lr).getAll()))).sort((e,t)=>t.detectedAt-e.detectedAt)}async function CT(n){await Li([lr],"readwrite",e=>Tn(e.objectStore(lr).delete(n)))}async function PT(n){await Li([lr],"readwrite",e=>Tn(e.objectStore(lr).add(n)))}function DT(){return`case-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}async function Im(n,e){const t=Cm(n);if(!t.ok)throw new Error("修订完整性校验失败："+t.reason);return Li([Kn,Ln],"readwrite",async i=>{const r=i.objectStore(Ln),s=i.objectStore(Kn);let a=!0;const o=await Tn(r.get(n.id));if(o){if(!Rm(o,n))throw new Error(`修订 id 冲突：${n.id.slice(0,18)}… 已存在但内容不同，拒绝覆盖`);a=!1}else r.put(n);const l=await Tn(r.index("caseId").getAll(n.caseId)),c=Pm(l),u=await Tn(s.get(n.caseId)),f={id:n.caseId,name:e.caseName??u?.name??"未命名案例",unit:e.unit??u?.unit??"mm",createdAt:u?.createdAt??Date.now(),updatedAt:Date.now(),headIds:c};return s.put(f),{revision:n,caseId:n.caseId,created:a,heads:c,branched:c.length>1}})}async function LT(n){const e=n.caseId??DT(),t=mh({caseId:e,parentIds:n.parentIds,note:n.note,params:n.params,outlines:n.outlines,check:n.check});return Im(t,{caseName:n.caseName,unit:n.unit})}async function IT(n,e,t){const i=await AT(n);if(!i)throw new Error("案例不存在");if(i.headIds.length<2)throw new Error("当前没有并行分支需要合并");const r=await wT(e);if(!r)throw new Error("基础修订不存在");const s=mh({caseId:n,parentIds:[...i.headIds].sort(),note:t||`合并 ${i.headIds.length} 个分支（基于 ${e.slice(0,12)}…）`,params:r.params,outlines:r.outlines,check:r.check});return Im(s,{})}async function UT(n){const e=MT(n);if(!e.ok){if(e.conflict)try{await PT(e.conflict)}catch{}return{ok:!1,error:e.error,stored:[],duplicates:[],conflicts:e.conflict?[e.conflict]:[]}}return Li([Kn,Ln,lr],"readwrite",async t=>{const i=t.objectStore(Ln),r=t.objectStore(Kn),s=t.objectStore(lr),a=[],o=[...e.duplicates];for(const _ of e.revisions){const M=await Tn(i.get(_.id));if(M){if(!Rm(M,_))throw new Error(`库中已存在 id 相同但内容不同的修订 ${_.id.slice(0,18)}…，导入中止`);o.push(_.id);continue}const m=Cm(_);if(!m.ok)throw new Error("修订完整性校验失败："+m.reason);i.put(_),a.push(_.id)}for(const _ of e.conflicts)s.add(_);const l=e.caseInfo.id,c=await Tn(i.index("caseId").getAll(l)),u=Pm(c),f=await Tn(r.get(l)),h={id:l,name:f?.name??e.caseInfo.name,unit:f?.unit??e.caseInfo.unit,createdAt:f?.createdAt??Date.now(),updatedAt:Date.now(),headIds:u};return r.put(h),{ok:!0,caseId:l,stored:a,duplicates:o,conflicts:e.conflicts,heads:u,migratedFromV1:e.migratedFromV1,rebuiltOutlines:e.rebuiltOutlines}})}async function NT(n){await Li([Kn,Ln],"readwrite",async e=>{const t=e.objectStore(Ln),i=await Tn(t.index("caseId").getAllKeys(n));for(const r of i)t.delete(r);e.objectStore(Kn).delete(n)})}function Ed(n,e){const t=new Blob([n],{type:"application/json"}),i=URL.createObjectURL(t),r=document.createElement("a");r.href=i;const s=(e||"gear-case").replace(/[^\w一-龥-]+/g,"_");r.download=`${s}.json`,r.click(),URL.revokeObjectURL(i)}function Td(n,e){const t=n.params[e],i=Yi(Jr(t));return{z:t.z,module:t.module,alphaDeg:t.alphaDeg,faceWidth:t.faceWidth,pitchD:i.pitchR*2,baseD:i.baseR*2,tipD:i.addendumR*2,rootD:i.dedendumR*2,undercut:i.undercut}}function Ad(n){const e=Yi(Jr(n.params.gear1)),t=Yi(Jr(n.params.gear2)),i=n.params.centerDistance??e.pitchR+t.pitchR,r=Oc({g1:e,g2:t,centerDistance:i});return{g1:Td(n,"gear1"),g2:Td(n,"gear2"),centerDistance:i,standardCenter:r.a0,deltaA:r.deltaA,alphaPrimeDeg:r.alphaPrime*180/Math.PI,contactRatio:r.contactRatio,backlashTangential:r.backlashTangential,clearanceMin:Math.min(r.clearance12,r.clearance21),basePitchMatch:r.basePitchMatch}}function $t(n,e,t,i=1e-9){const r=typeof e=="number"&&typeof t=="number",s=r?t-e:null,a=r?Math.abs(s)>i:e!==t;return{label:n,a:e,b:t,delta:s,changed:a}}function FT(n,e){const t=Ad(n),i=Ad(e);return[$t("齿数 z₁",t.g1.z,i.g1.z,0),$t("齿数 z₂",t.g2.z,i.g2.z,0),$t("模数 m (mm)",t.g1.module,i.g1.module),$t("压力角 α (°)",t.g1.alphaDeg,i.g1.alphaDeg),$t("齿宽 b (mm)",t.g1.faceWidth,i.g1.faceWidth),$t("中心距设定",n.params.centerDistance==null?"标准":n.params.centerDistance,e.params.centerDistance==null?"标准":e.params.centerDistance),$t("分度圆直径 d₁ (mm)",t.g1.pitchD,i.g1.pitchD),$t("分度圆直径 d₂ (mm)",t.g2.pitchD,i.g2.pitchD),$t("基圆直径 d_b1 (mm)",t.g1.baseD,i.g1.baseD),$t("基圆直径 d_b2 (mm)",t.g2.baseD,i.g2.baseD),$t("齿顶圆 d_a1 (mm)",t.g1.tipD,i.g1.tipD),$t("齿顶圆 d_a2 (mm)",t.g2.tipD,i.g2.tipD),$t("齿根圆 d_f1 (mm)",t.g1.rootD,i.g1.rootD),$t("齿根圆 d_f2 (mm)",t.g2.rootD,i.g2.rootD),$t("标准中心距 a₀ (mm)",t.standardCenter,i.standardCenter),$t("实际中心距 a (mm)",t.centerDistance,i.centerDistance),$t("中心距偏差 Δa (mm)",t.deltaA,i.deltaA),$t("啮合角 α′ (°)",t.alphaPrimeDeg,i.alphaPrimeDeg),$t("重合度 ε_α",t.contactRatio,i.contactRatio),$t("圆周侧隙 j_t (mm)",t.backlashTangential,i.backlashTangential),$t("最小顶隙 c (mm)",t.clearanceMin,i.clearanceMin),$t("基节一致",t.basePitchMatch?"是":"否",i.basePitchMatch?"是":"否")]}function OT(n,e){const t=n.check?.interference??null,i=e.check?.interference??null;return{a:t,b:i,deltaArea:t&&i?i.area-t.area:null}}const BT={class:"app"},zT={class:"panel"},VT={class:"units"},kT=["onClick"],HT=["step"],GT=["step"],WT={class:"two"},XT={key:0,class:"err"},$T={key:1,class:"err"},qT={class:"row"},YT={key:0},KT=["step"],ZT={class:"row"},JT=["disabled"],jT=["disabled"],QT=["disabled","min","max"],eA=["disabled"],tA={key:0,class:"report"},nA={class:"row"},iA={class:"row"},rA={class:"row"},sA={class:"row"},aA={class:"row"},oA={class:"row"},lA={class:"samples"},cA={class:"viewport"},uA={class:"readouts"},hA={key:0,class:"dim-grid"},fA={class:"mesh-report"},dA={key:0,class:"warns"},pA={class:"panel right"},mA={class:"row"},gA=["disabled"],_A={class:"row"},vA={class:"wide filebtn"},xA={class:"revstate"},SA={key:0,class:"bad"},yA={key:1,class:"good"},MA={key:0,class:"report"},bA={key:0},EA={class:"caselist"},TA={class:"ci"},AA={class:"dim"},wA={class:"ca"},RA=["onClick"],CA={class:"caselist"},PA=["onClick"],DA={class:"bad"},LA={class:"ca"},IA=["onClick"],UA=["onClick"],NA=["onClick"],FA={key:0,class:"empty"},OA={key:1},BA={key:0,class:"report branchbox"},zA={class:"row"},VA=["value"],kA=["disabled"],HA={class:"revlist"},GA={class:"rv-head"},WA={class:"badges"},XA={key:0,class:"badge head"},$A={key:1,class:"badge cur"},qA={key:2,class:"badge merge"},YA={key:3,class:"badge"},KA={key:4,class:"badge"},ZA={class:"rv-meta"},JA={key:0,class:"rv-meta"},jA={key:1,class:"rv-meta note"},QA={class:"rv-meta dim"},e1={class:"ca"},t1=["onClick"],n1=["onClick"],i1=["onClick"],r1=["onClick"],s1={key:2},a1={class:"rv-meta dim"},o1={class:"rv-meta dim"},l1={class:"difftable"},c1={class:"report"},u1={key:0},h1=["disabled"],f1={key:0,class:"report"},d1=a_({__name:"App",setup(n){const e=Yt("mm"),t=vs({z1:20,z2:40,m:2,alphaDeg:20,faceWidth:10,centerDistance:60,useStandardCenter:!0}),i=Oi(),r=Oi(),s=Oi(),a=vs({g1:[],g2:[]});function o(){const Z={z:Math.round(t.z1),module:t.m,alpha:t.alphaDeg*dr,faceWidth:t.faceWidth},P={z:Math.round(t.z2),module:t.m,alpha:t.alphaDeg*dr,faceWidth:t.faceWidth};if(a.g1=of(Z),a.g2=of(P),a.g1.length||a.g2.length)return;i.value=Yi(Z),r.value=Yi(P);const $=t.useStandardCenter?i.value.pitchR+r.value.pitchR:t.centerDistance;s.value=Oc({g1:i.value,g2:r.value,centerDistance:$})}const l=ni({get:()=>Fo(t.m,e.value),set:Z=>t.m=Ec(Z,e.value)}),c=ni({get:()=>Fo(t.faceWidth,e.value),set:Z=>t.faceWidth=Ec(Z,e.value)}),u=ni({get:()=>Fo(t.centerDistance,e.value),set:Z=>t.centerDistance=Ec(Z,e.value)});Hr(e,()=>{});const f=Yt(!0),h=Yt(0),d=Yt(.25);let _=0;const M=Yt(0),m=vs({showPitchCircle:!0,showBaseCircle:!0,showAddendumCircle:!1,showDedendumCircle:!1,showActionLine:!0,showContact:!0,contactS:0}),p=Yt(null),T=Oi([]),D=Yt(!1);let y=0;const w=Oi(null);async function A(Z){if(!i.value||!r.value||!s.value)return;const P=Z,$=Bl(i.value,r.value,s.value,P),De=[qa(i.value.outline,0,0,P)],$e=[qa(r.value.outline,s.value.a,0,$)],z=++y;D.value=!0;try{const Le=await uf(De,$e);if(z!==y)return;p.value=Le.area,T.value=Le.regions,w.value={phi1:P,contactS:M.value,area:Le.area,regions:Le.regions}}finally{z===y&&(D.value=!1)}}const F=Yt();let S=null;function L(){!S||!s.value||S.setMeshOverlay(s.value,{...m,contactS:M.value,contactRegions:[T.value]})}Dc(()=>{o(),S=new dT(F.value),i.value&&r.value&&s.value&&S.setGears(i.value,r.value,s.value.a);const Z=P=>{const $=Math.min(.05,(P-_)/1e3||0);if(_=P,f.value&&i.value&&r.value&&s.value){h.value+=d.value*$;const De=2*Math.PI/i.value.input.z;h.value=(h.value%De+De)%De;const $e=(h.value-Ol(s.value,i.value,r.value,0).phi1)*i.value.baseR;M.value=B($e)}if(i.value&&r.value&&s.value){const De=Bl(i.value,r.value,s.value,h.value);S.setAngles(h.value,De),m.contactS=M.value,L()}requestAnimationFrame(Z)};requestAnimationFrame(Z)});function B(Z){if(!s.value)return 0;const P=s.value.actionLine,$=s.value.alphaPrime,De=Math.sin($),$e=Math.cos($),z=(P.p0.x-s.value.pitchPoint.x)*De+(P.p0.y-s.value.pitchPoint.y)*$e,Le=(P.p1.x-s.value.pitchPoint.x)*De+(P.p1.y-s.value.pitchPoint.y)*$e;return Z<z?Le-(z-Z)%(Le-z):Z>Le?z+(Z-Le)%(Le-z):Z}const G=Yt(!1);Hr(()=>[t.z1,t.z2,t.m,t.alphaDeg,t.faceWidth,t.useStandardCenter,t.centerDistance],()=>{o(),S&&i.value&&r.value&&s.value&&S.setGears(i.value,r.value,s.value.a),h.value=0,M.value=0,p.value=null,T.value=[],w.value=null,G.value=!0}),Hr(m,L),Hr(M,()=>m.contactS=M.value);function ne(){f.value=!1}function se(){f.value=!0}function k(){f.value||!i.value||!r.value||!s.value||(h.value=Ol(s.value,i.value,r.value,M.value).phi1)}const Q=Oi([]),ce=Oi([]),j=Yt(null),me=Oi([]),ue=Yt("未命名案例"),xe=Yt(""),ge=Yt(""),Ie=Yt(null),Be=Yt(null),nt=ni(()=>Q.value.find(Z=>Z.meta.id===j.value)??null);async function rt(Z=!0){Q.value=await RT(),ce.value=await bd(),Z||(j.value=null),j.value&&(Q.value.some(P=>P.meta.id===j.value)?me.value=await Tc(j.value):(j.value=null,me.value=[]))}Dc(rt);async function st(Z){j.value=Z,me.value=await Tc(Z),Re.value="",C.value="",Te.value=null}function _e(){return{gear1:{z:Math.round(t.z1),module:t.m,alpha:t.alphaDeg*dr,alphaDeg:t.alphaDeg,faceWidth:t.faceWidth},gear2:{z:Math.round(t.z2),module:t.m,alpha:t.alphaDeg*dr,alphaDeg:t.alphaDeg,faceWidth:t.faceWidth},centerDistance:t.useStandardCenter?null:t.centerDistance}}function he(){if(!i.value||!r.value||!s.value)return null;const Z=s.value;return{checkedAt:Date.now(),centerDistance:Z.a,standardCenter:Z.a0,alphaPrimeDeg:Z.alphaPrime/dr,contactRatio:Z.contactRatio,backlashTangential:Z.backlashTangential,clearanceMin:Math.min(Z.clearance12,Z.clearance21),basePitchMatch:Z.basePitchMatch,undercut:[i.value.undercut,r.value.undercut],warnings:[...Z.warnings],interference:w.value}}const Ee=Z=>Z.length>18?Z.slice(0,12)+"…"+Z.slice(-4):Z,qe=Z=>new Date(Z).toLocaleString();async function Oe(Z){if(!i.value||!r.value||!s.value){alert("当前参数不合法，无法保存");return}Z&&await A(h.value);try{const P=await LT({caseId:Ie.value,caseName:ue.value,unit:e.value,parentIds:Be.value?[Be.value]:[],note:xe.value,params:_e(),outlines:{gear1:i.value.outline,gear2:r.value.outline},check:he()});Ie.value=P.caseId,Be.value=P.revision.id,G.value=!1,ge.value=P.created?`已保存修订 ${Ee(P.revision.id)}${P.branched?"；检测到并行分支（已保留全部头）":""}`:`内容与修订 ${Ee(P.revision.id)} 完全相同，未新建`,j.value=P.caseId,await rt()}catch(P){alert("保存失败："+P.message)}}async function R(){if(!i.value||!r.value||!s.value)return;const Z=Be.value;Ie.value=null,await Oe(!1),ge.value=`已分叉为新案例（父修订 ${Z?Ee(Z):"无"}）`}async function O(Z){t.z1=Z.params.gear1.z,t.z2=Z.params.gear2.z,t.m=Z.params.gear1.module,t.alphaDeg=Z.params.gear1.alphaDeg,t.faceWidth=Z.params.gear1.faceWidth,Z.params.centerDistance==null?t.useStandardCenter=!0:(t.useStandardCenter=!1,t.centerDistance=Z.params.centerDistance),xe.value=Z.note;const P=Q.value.find(De=>De.meta.id===Z.caseId)?.meta;P&&(ue.value=P.name,e.value=P.unit),Ie.value=Z.caseId,Be.value=Z.id,o(),S&&i.value&&r.value&&s.value&&S.setGears(i.value,r.value,s.value.a),await Wu(),G.value=!1;const $=i.value&&r.value?wa({gear1:i.value.outline,gear2:r.value.outline})===Z.outlineHash:!1;ge.value=$?`已载入 ${Ee(Z.id)}，几何指纹一致 ✅（修改参数后保存将形成它的后继/分支）`:`已载入 ${Ee(Z.id)}，⚠️ 重建几何与修订指纹不一致（数据可能损坏）`}async function U(Z){confirm("删除该案例及其全部修订？此操作不可恢复。")&&(await NT(Z),Ie.value===Z&&(Ie.value=null,Be.value=null),await rt())}async function W(Z){const P=await Tc(Z.meta.id);Ed(Md(Z.meta,P),Z.meta.name)}async function X(Z){const P=Q.value.find($=>$.meta.id===Z.caseId)?.meta;Ed(Md(P??{id:Z.caseId,name:"导出的修订",unit:e.value},[Z]),`修订-${Ee(Z.id)}`)}async function H(Z){const P=Z.target,$=P.files?.[0];if(!$)return;const De=new FileReader;De.onload=async()=>{try{const $e=await UT(String(De.result));if(!$e.ok)ge.value=`导入被拒绝：${$e.error}`,alert("导入失败："+$e.error);else{const z=[`新存 ${$e.stored.length} 个修订`];$e.duplicates.length&&z.push(`${$e.duplicates.length} 个重复已去重`),$e.conflicts.length&&z.push(`⚠️ ${$e.conflicts.length} 个冲突（见下方冲突列表）`),$e.migratedFromV1&&z.push("旧版案例已自动迁移"),$e.rebuiltOutlines&&z.push(`${$e.rebuiltOutlines} 个修订的轮廓由参数重建`),ge.value="导入完成："+z.join("，"),$e.caseId&&(j.value=$e.caseId)}await rt()}catch($e){alert("导入失败："+$e.message)}},De.readAsText($),P.value=""}async function te(Z){await CT(Z),ce.value=await bd()}const de=Yt(""),fe=Yt("");async function re(){if(!(!j.value||!de.value))try{const Z=await IT(j.value,de.value,fe.value);ge.value=`已合并为修订 ${Ee(Z.revision.id)}，分支收敛为单头`,de.value="",fe.value="",await rt()}catch(Z){alert("合并失败："+Z.message)}}const Re=Yt(""),C=Yt(""),Te=Oi(null),Ue=Yt(!1),E=ni(()=>me.value.find(Z=>Z.id===Re.value)??null),g=ni(()=>me.value.find(Z=>Z.id===C.value)??null),N=ni(()=>E.value&&g.value?FT(E.value,g.value):[]),J=ni(()=>E.value&&g.value?OT(E.value,g.value):null);async function ie(){if(!(!E.value||!g.value||!s.value)){Ue.value=!0,Te.value=null;try{const Z=async De=>{const $e=Yi(Jr(De.params.gear1)),z=Yi(Jr(De.params.gear2)),Le=De.params.centerDistance??$e.pitchR+z.pitchR,ye=Oc({g1:$e,g2:z,centerDistance:Le}),Ve=Ol(ye,$e,z,M.value).phi1,Ge=Bl($e,z,ye,Ve);return(await uf([qa(De.outlines.gear1,0,0,Ve)],[qa(De.outlines.gear2,Le,0,Ge)])).area},[P,$]=await Promise.all([Z(E.value),Z(g.value)]);Te.value={a:P,b:$}}finally{Ue.value=!1}}}const ve=ni(()=>!i.value||!r.value||!s.value?null:{g1:i.value,g2:r.value,mesh:s.value}),Pe=ni(()=>{if(!s.value)return[-30,30];const Z=s.value,P=Math.sin(Z.alphaPrime),$=Math.cos(Z.alphaPrime),De=(Z.actionLine.p0.x-Z.pitchPoint.x)*P+(Z.actionLine.p0.y-Z.pitchPoint.y)*$,$e=(Z.actionLine.p1.x-Z.pitchPoint.x)*P+(Z.actionLine.p1.y-Z.pitchPoint.y)*$;return[Math.floor(De*10)/10,Math.ceil($e*10)/10]});function ae(Z){return pT(Z,e.value)}function Se(Z){return typeof Z=="number"?ae(Z):Z}function Ce(Z){return`${Ee(Z.id)} · ${Z.params.gear1.z}/${Z.params.gear2.z} m=${Z.params.gear1.module} · ${qe(Z.createdAt)}`}function He(Z,P,$=2,De=20){t.z1=Z,t.z2=P,t.m=$,t.alphaDeg=De,t.useStandardCenter=!0}return(Z,P)=>(at(),ot("div",BT,[P[80]||(P[80]=Y("header",null,[Y("h1",null,"直齿圆柱齿轮参数化实验室"),Y("div",{class:"sub"},"外啮合 · 无变位 · 理想刚性 · 渐开线齿廓（教学模型）· 不可变修订")],-1)),Y("main",null,[Y("aside",zT,[Y("section",null,[P[26]||(P[26]=Y("h2",null,"显示单位（不改变实际尺寸）",-1)),Y("div",VT,[(at(!0),ot(Nt,null,Lr(Object.keys(Hn(Gn)),$=>(at(),ot("button",{key:$,class:on({active:e.value===$}),onClick:De=>e.value=$},ze(Hn(Gn)[$].label),11,kT))),128))])]),Y("section",null,[P[30]||(P[30]=Y("h2",null,"齿轮参数",-1)),Y("label",null,[P[27]||(P[27]=ct("压力角 α（度） ",-1)),Jt(Y("input",{type:"number","onUpdate:modelValue":P[0]||(P[0]=$=>t.alphaDeg=$),min:"1",max:"45",step:"0.5"},null,512),[[jn,t.alphaDeg,void 0,{number:!0}]])]),Y("label",null,[ct("模数 m（"+ze(Hn(Gn)[e.value].label)+"） ",1),Jt(Y("input",{type:"number","onUpdate:modelValue":P[1]||(P[1]=$=>l.value=$),step:Hn(Gn)[e.value].step},null,8,HT),[[jn,l.value,void 0,{number:!0}]])]),Y("label",null,[ct("齿宽 b（"+ze(Hn(Gn)[e.value].label)+"） ",1),Jt(Y("input",{type:"number","onUpdate:modelValue":P[2]||(P[2]=$=>c.value=$),step:Hn(Gn)[e.value].step},null,8,GT),[[jn,c.value,void 0,{number:!0}]])]),Y("div",WT,[Y("label",null,[P[28]||(P[28]=ct("齿数 z₁ ",-1)),Jt(Y("input",{type:"number","onUpdate:modelValue":P[3]||(P[3]=$=>t.z1=$),min:"4",step:"1"},null,512),[[jn,t.z1,void 0,{number:!0}]])]),Y("label",null,[P[29]||(P[29]=ct("齿数 z₂ ",-1)),Jt(Y("input",{type:"number","onUpdate:modelValue":P[4]||(P[4]=$=>t.z2=$),min:"4",step:"1"},null,512),[[jn,t.z2,void 0,{number:!0}]])])]),a.g1.length?(at(),ot("div",XT,ze(a.g1.join("；")),1)):kt("",!0),a.g2.length?(at(),ot("div",$T,ze(a.g2.join("；")),1)):kt("",!0)]),Y("section",null,[P[32]||(P[32]=Y("h2",null,"中心距",-1)),Y("label",qT,[Jt(Y("input",{type:"checkbox","onUpdate:modelValue":P[5]||(P[5]=$=>t.useStandardCenter=$)},null,512),[[Ur,t.useStandardCenter]]),P[31]||(P[31]=ct(" 使用标准中心距 a₀ = m(z₁+z₂)/2 ",-1))]),t.useStandardCenter?kt("",!0):(at(),ot("label",YT,[ct("实际中心距 a（"+ze(Hn(Gn)[e.value].label)+"） ",1),Jt(Y("input",{type:"number","onUpdate:modelValue":P[6]||(P[6]=$=>u.value=$),step:Hn(Gn)[e.value].step},null,8,KT),[[jn,u.value,void 0,{number:!0}]])]))]),Y("section",null,[P[35]||(P[35]=Y("h2",null,"运动 / 检查",-1)),Y("div",ZT,[Y("button",{onClick:ne,disabled:!f.value},"暂停",8,JT),Y("button",{onClick:se,disabled:f.value},"继续",8,jT)]),Y("label",null,[P[33]||(P[33]=ct("轮1 角速度（rad/s） ",-1)),Jt(Y("input",{type:"range","onUpdate:modelValue":P[7]||(P[7]=$=>d.value=$),min:"0",max:"1.5",step:"0.01"},null,512),[[jn,d.value,void 0,{number:!0}]])]),Y("label",null,[P[34]||(P[34]=ct("接触点沿啮合线 s（mm，暂停可拖动） ",-1)),Jt(Y("input",{type:"range",disabled:f.value,"onUpdate:modelValue":P[8]||(P[8]=$=>M.value=$),min:Pe.value[0],max:Pe.value[1],step:"0.05",onInput:k},null,40,QT),[[jn,M.value,void 0,{number:!0}]])]),Y("button",{class:"wide",onClick:P[9]||(P[9]=$=>A(h.value)),disabled:f.value||D.value},ze(D.value?"Clipper 求交中…":"在当前帧做局部干涉求交（Clipper2 WASM）"),9,eA),p.value!==null?(at(),ot("div",tA,[ct(" 重叠面积 = "+ze(p.value.toExponential(3))+" mm² ",1),Y("b",{class:on(p.value>1e-6?"bad":"good")},ze(p.value>1e-6?"存在实体干涉 ❗":"当前帧无干涉 ✅"),3)])):kt("",!0)]),Y("section",null,[P[42]||(P[42]=Y("h2",null,"显示选项",-1)),Y("label",nA,[Jt(Y("input",{type:"checkbox","onUpdate:modelValue":P[10]||(P[10]=$=>m.showPitchCircle=$)},null,512),[[Ur,m.showPitchCircle]]),P[36]||(P[36]=ct(" 节圆/分度圆",-1))]),Y("label",iA,[Jt(Y("input",{type:"checkbox","onUpdate:modelValue":P[11]||(P[11]=$=>m.showBaseCircle=$)},null,512),[[Ur,m.showBaseCircle]]),P[37]||(P[37]=ct(" 基圆",-1))]),Y("label",rA,[Jt(Y("input",{type:"checkbox","onUpdate:modelValue":P[12]||(P[12]=$=>m.showAddendumCircle=$)},null,512),[[Ur,m.showAddendumCircle]]),P[38]||(P[38]=ct(" 齿顶圆",-1))]),Y("label",sA,[Jt(Y("input",{type:"checkbox","onUpdate:modelValue":P[13]||(P[13]=$=>m.showDedendumCircle=$)},null,512),[[Ur,m.showDedendumCircle]]),P[39]||(P[39]=ct(" 齿根圆",-1))]),Y("label",aA,[Jt(Y("input",{type:"checkbox","onUpdate:modelValue":P[14]||(P[14]=$=>m.showActionLine=$)},null,512),[[Ur,m.showActionLine]]),P[40]||(P[40]=ct(" 啮合线（理论/实际）",-1))]),Y("label",oA,[Jt(Y("input",{type:"checkbox","onUpdate:modelValue":P[15]||(P[15]=$=>m.showContact=$)},null,512),[[Ur,m.showContact]]),P[41]||(P[41]=ct(" 接触点",-1))])]),Y("section",null,[P[43]||(P[43]=Y("h2",null,"核对样本",-1)),Y("div",lA,[Y("button",{onClick:P[16]||(P[16]=$=>He(20,40))},"20/40 标准"),Y("button",{onClick:P[17]||(P[17]=$=>He(17,17))},"17/17 临界"),Y("button",{onClick:P[18]||(P[18]=$=>He(16,40))},"16/40 根切"),Y("button",{onClick:P[19]||(P[19]=$=>He(12,40))},"12/40 极少齿")])])]),Y("section",cA,[Y("div",{ref_key:"host",ref:F,class:"canvas-host"},null,512),Y("div",uA,[ve.value?(at(),ot("div",hA,[Y("table",null,[Y("thead",null,[Y("tr",null,[P[44]||(P[44]=Y("th",null,null,-1)),Y("th",null,"齿轮 1（z₁="+ze(t.z1)+"）",1),Y("th",null,"齿轮 2（z₂="+ze(t.z2)+"）",1)])]),Y("tbody",null,[Y("tr",null,[P[45]||(P[45]=Y("td",null,"分度圆直径 d",-1)),Y("td",null,ze(ae(ve.value.g1.pitchR*2)),1),Y("td",null,ze(ae(ve.value.g2.pitchR*2)),1)]),Y("tr",null,[P[46]||(P[46]=Y("td",null,"基圆直径 d_b",-1)),Y("td",null,ze(ae(ve.value.g1.baseR*2)),1),Y("td",null,ze(ae(ve.value.g2.baseR*2)),1)]),Y("tr",null,[P[47]||(P[47]=Y("td",null,"齿顶圆 d_a",-1)),Y("td",null,ze(ae(ve.value.g1.addendumR*2)),1),Y("td",null,ze(ae(ve.value.g2.addendumR*2)),1)]),Y("tr",null,[P[48]||(P[48]=Y("td",null,"齿根圆 d_f",-1)),Y("td",null,ze(ae(ve.value.g1.dedendumR*2)),1),Y("td",null,ze(ae(ve.value.g2.dedendumR*2)),1)]),Y("tr",null,[P[49]||(P[49]=Y("td",null,"齿距 p = πm",-1)),Y("td",null,ze(ae(ve.value.g1.circularPitch)),1),Y("td",null,ze(ae(ve.value.g2.circularPitch)),1)]),Y("tr",null,[P[50]||(P[50]=Y("td",null,"基节 p_b",-1)),Y("td",null,ze(ae(ve.value.g1.basePitch)),1),Y("td",null,ze(ae(ve.value.g2.basePitch)),1)]),Y("tr",null,[P[51]||(P[51]=Y("td",null,"齿顶压力角 α_a",-1)),Y("td",null,ze((ve.value.g1.alphaTip/Hn(dr)).toFixed(2))+"°",1),Y("td",null,ze((ve.value.g2.alphaTip/Hn(dr)).toFixed(2))+"°",1)]),Y("tr",null,[Y("td",null,"根切风险 (z<"+ze(ve.value.g1.zMinValue.toFixed(1))+")",1),Y("td",{class:on(ve.value.g1.undercut?"bad":"good")},ze(ve.value.g1.undercut?"根切 ❗":"安全"),3),Y("td",{class:on(ve.value.g2.undercut?"bad":"good")},ze(ve.value.g2.undercut?"根切 ❗":"安全"),3)])])]),Y("div",fA,[P[61]||(P[61]=Y("h3",null,"啮合检查",-1)),Y("div",null,[P[52]||(P[52]=ct("标准中心距 a₀：",-1)),Y("b",null,ze(ae(ve.value.mesh.a0)),1)]),Y("div",null,[P[53]||(P[53]=ct("实际中心距 a：",-1)),Y("b",null,ze(ae(ve.value.mesh.a)),1),ct("（Δa = "+ze(ae(ve.value.mesh.deltaA))+"）",1)]),Y("div",null,[P[54]||(P[54]=ct("啮合角 α′：",-1)),Y("b",null,ze((ve.value.mesh.alphaPrime/Hn(dr)).toFixed(3))+"°",1)]),Y("div",null,[P[55]||(P[55]=ct("节圆半径 r₁′/r₂′：",-1)),Y("b",null,ze(ae(ve.value.mesh.pitchR1))+" / "+ze(ae(ve.value.mesh.pitchR2)),1)]),Y("div",null,[P[56]||(P[56]=ct("实际啮合线长度 g_α：",-1)),Y("b",null,ze(ae(ve.value.mesh.pathOfContact)),1)]),Y("div",null,[P[57]||(P[57]=ct("重合度 ε_α = g_α/p_b：",-1)),Y("b",{class:on(ve.value.mesh.contactRatio<1?"bad":"good")},ze(ve.value.mesh.contactRatio.toFixed(3)),3)]),Y("div",null,[P[58]||(P[58]=ct("圆周/法向侧隙：",-1)),Y("b",null,ze(ae(ve.value.mesh.backlashTangential))+" / "+ze(ae(ve.value.mesh.backlashNormal)),1)]),Y("div",null,[P[59]||(P[59]=ct("顶隙 c：",-1)),Y("b",null,ze(ae(ve.value.mesh.clearance12)),1)]),Y("div",null,[P[60]||(P[60]=ct("基节一致：",-1)),Y("b",{class:on(ve.value.mesh.basePitchMatch?"good":"bad")},ze(ve.value.mesh.basePitchMatch?"是 ✅":"否 ❌"),3)]),ve.value.mesh.warnings.length?(at(),ot("ul",dA,[(at(!0),ot(Nt,null,Lr(ve.value.mesh.warnings,($,De)=>(at(),ot("li",{key:De},"⚠️ "+ze($),1))),128))])):kt("",!0),P[62]||(P[62]=Y("div",{class:"formula"}," 渐开线：x=r_b(sin t−t cos t)，y=r_b(cos t+t sin t)；inv(α)=tanα−α； 啮合要求基节相等 + 相位共法线，且 r_b1·Δφ₁ = −r_b2·Δφ₂（不是只按转速比旋转）。 ",-1))])])):kt("",!0)])]),Y("aside",pA,[Y("section",null,[P[65]||(P[65]=Y("h2",null,"保存修订（不可变）",-1)),Jt(Y("input",{"onUpdate:modelValue":P[20]||(P[20]=$=>ue.value=$),placeholder:"案例名称"},null,512),[[jn,ue.value]]),Jt(Y("textarea",{"onUpdate:modelValue":P[21]||(P[21]=$=>xe.value=$),placeholder:"本次修订备注（可选）",rows:"2"},null,512),[[jn,xe.value]]),Y("div",mA,[Y("button",{onClick:P[22]||(P[22]=$=>Oe(!1))},"保存新修订"),Y("button",{onClick:P[23]||(P[23]=$=>Oe(!0)),disabled:D.value},"干涉检查后保存",8,gA)]),Y("div",{class:"row"},[Y("button",{onClick:R,title:"以当前修订为父，把当前工作状态存到一个新案例"},"另存为新案例（分叉）")]),Y("div",_A,[Y("label",vA,[P[63]||(P[63]=ct("导入 JSON（v1 旧案例自动迁移） ",-1)),Y("input",{type:"file",accept:"application/json,.json",onChange:H,hidden:""},null,32)])]),Y("div",xA,[Be.value?(at(),ot(Nt,{key:0},[P[64]||(P[64]=ct(" 当前基于 ",-1)),Y("code",null,ze(Ee(Be.value)),1),G.value?(at(),ot("span",SA,"· 参数已修改（保存将产生新修订）")):(at(),ot("span",yA,"· 与已存修订一致"))],64)):(at(),ot(Nt,{key:1},[ct("尚未保存：首次保存将创建新案例与根修订")],64))]),ge.value?(at(),ot("div",MA,ze(ge.value),1)):kt("",!0)]),ce.value.length?(at(),ot("section",bA,[Y("h2",null,"⚠️ 导入冲突（"+ze(ce.value.length)+"）",1),Y("ul",EA,[(at(!0),ot(Nt,null,Lr(ce.value,$=>(at(),ot("li",{key:$.id},[Y("div",TA,[Y("b",null,ze($.type==="id-mismatch"?"修订 id 与内容不符":"轮廓指纹不一致"),1),Y("span",null,ze($.detail),1),Y("span",AA,ze(qe($.detectedAt)),1)]),Y("div",wA,[Y("button",{class:"del",onClick:De=>te($.id)},"知道了",8,RA)])]))),128))])])):kt("",!0),Y("section",null,[P[67]||(P[67]=Y("h2",null,"案例库",-1)),Y("ul",CA,[(at(!0),ot(Nt,null,Lr(Q.value,$=>(at(),ot("li",{key:$.meta.id,class:on({selected:$.meta.id===j.value})},[Y("div",{class:"ci clickable",onClick:De=>st($.meta.id)},[Y("b",null,ze($.meta.name),1),Y("span",null,[ct(ze($.revisionCount)+" 个修订 ",1),$.meta.headIds.length>1?(at(),ot(Nt,{key:0},[P[66]||(P[66]=ct(" · ",-1)),Y("b",DA,"🔀 "+ze($.meta.headIds.length)+" 个并行分支",1)],64)):kt("",!0)])],8,PA),Y("div",LA,[$.heads.length?(at(),ot("button",{key:0,onClick:De=>O($.heads[$.heads.length-1]),title:"载入最新分支头"},"载入",8,IA)):kt("",!0),Y("button",{onClick:De=>W($),title:"导出全部修订为 JSON"},"导出",8,UA),Y("button",{class:"del",onClick:De=>U($.meta.id)},"删",8,NA)])],2))),128)),Q.value.length?kt("",!0):(at(),ot("li",FA,"暂无案例"))])]),nt.value?(at(),ot("section",OA,[Y("h2",null,"修订历史（"+ze(me.value.length)+"）",1),nt.value.meta.headIds.length>1?(at(),ot("div",BA,[ct(" 🔀 该案例有 "+ze(nt.value.meta.headIds.length)+" 个并行分支头（来自并发保存或导入），均已保留。 ",1),Y("div",zA,[Jt(Y("select",{"onUpdate:modelValue":P[24]||(P[24]=$=>de.value=$)},[P[68]||(P[68]=Y("option",{value:"",disabled:""},"选择合并后采用的内容…",-1)),(at(!0),ot(Nt,null,Lr(nt.value.heads,$=>(at(),ot("option",{key:$.id,value:$.id},ze(Ce($)),9,VA))),128))],512),[[Rv,de.value]])]),Jt(Y("input",{"onUpdate:modelValue":P[25]||(P[25]=$=>fe.value=$),placeholder:"合并备注（可选）"},null,512),[[jn,fe.value]]),Y("button",{class:"wide",disabled:!de.value,onClick:re},"合并分支（保留全部历史）",8,kA)])):kt("",!0),Y("ul",HA,[(at(!0),ot(Nt,null,Lr([...me.value].reverse(),$=>(at(),ot("li",{key:$.id,class:on({current:$.id===Be.value})},[Y("div",GA,[Y("code",null,ze(Ee($.id)),1),Y("span",WA,[nt.value.meta.headIds.includes($.id)?(at(),ot("b",XA,"头")):kt("",!0),$.id===Be.value?(at(),ot("b",$A,"当前")):kt("",!0),$.parentIds.length>1?(at(),ot("b",qA,"合并")):kt("",!0),$.parentIds.length===0?(at(),ot("b",YA,"根")):kt("",!0),$.migratedFrom?(at(),ot("b",KA,"v"+ze($.migratedFrom)+"迁移",1)):kt("",!0)])]),Y("div",ZA,ze(qe($.createdAt))+" · z "+ze($.params.gear1.z)+"/"+ze($.params.gear2.z)+" · m="+ze($.params.gear1.module)+" · α="+ze($.params.gear1.alphaDeg)+"° · a="+ze($.params.centerDistance==null?"标准":ae($.params.centerDistance)),1),$.check?(at(),ot("div",JA,[ct(" 检查：ε="+ze($.check.contactRatio.toFixed(3))+"，j_t="+ze(ae($.check.backlashTangential))+" ",1),$.check.interference?(at(),ot(Nt,{key:0},[P[69]||(P[69]=ct(" · 干涉面积 ",-1)),Y("b",{class:on($.check.interference.area>1e-6?"bad":"good")},ze($.check.interference.area.toExponential(2))+" mm²",3)],64)):(at(),ot(Nt,{key:1},[ct(" · 未做干涉求交")],64))])):kt("",!0),$.note?(at(),ot("div",jA,"📝 "+ze($.note),1)):kt("",!0),Y("div",QA,[P[70]||(P[70]=ct(" 父：",-1)),$.parentIds.length?(at(),ot(Nt,{key:0},[ct(ze($.parentIds.map(Ee).join("、")),1)],64)):(at(),ot(Nt,{key:1},[ct("（根修订）")],64))]),Y("div",e1,[Y("button",{onClick:De=>O($),title:"载入该修订；之后保存即以它为父（分叉实验）"},"载入/分叉",8,t1),Y("button",{onClick:De=>Re.value=$.id,class:on({active:Re.value===$.id})},"对比A",10,n1),Y("button",{onClick:De=>C.value=$.id,class:on({active:C.value===$.id})},"对比B",10,i1),Y("button",{onClick:De=>X($),title:"仅导出此修订"},"导出",8,r1)])],2))),128))])])):kt("",!0),E.value&&g.value?(at(),ot("section",s1,[P[79]||(P[79]=Y("h2",null,"修订对比",-1)),Y("div",a1,"A = "+ze(Ce(E.value)),1),Y("div",o1,"B = "+ze(Ce(g.value)),1),Y("table",l1,[P[71]||(P[71]=Y("thead",null,[Y("tr",null,[Y("th",null,"项目"),Y("th",null,"A"),Y("th",null,"B"),Y("th",null,"Δ(B−A)")])],-1)),Y("tbody",null,[(at(!0),ot(Nt,null,Lr(N.value,$=>(at(),ot("tr",{key:$.label,class:on({changed:$.changed})},[Y("td",null,ze($.label),1),Y("td",null,ze(Se($.a)),1),Y("td",null,ze(Se($.b)),1),Y("td",null,ze($.delta!==null?Se($.delta):$.changed?"不同":"—"),1)],2))),128))])]),Y("div",c1,[P[74]||(P[74]=Y("div",null,"保存时的干涉结论：",-1)),Y("div",null,[P[72]||(P[72]=ct("A： ",-1)),J.value?.a?(at(),ot(Nt,{key:0},[ct("面积 "+ze(J.value.a.area.toExponential(3))+" mm²（φ₁="+ze(J.value.a.phi1.toFixed(3))+"）",1)],64)):(at(),ot(Nt,{key:1},[ct("未做求交")],64))]),Y("div",null,[P[73]||(P[73]=ct("B： ",-1)),J.value?.b?(at(),ot(Nt,{key:0},[ct("面积 "+ze(J.value.b.area.toExponential(3))+" mm²（φ₁="+ze(J.value.b.phi1.toFixed(3))+"）",1)],64)):(at(),ot(Nt,{key:1},[ct("未做求交")],64))]),J.value?.deltaArea!==null&&J.value?.deltaArea!==void 0?(at(),ot("div",u1," Δ面积 = "+ze(J.value.deltaArea.toExponential(3))+" mm² ",1)):kt("",!0)]),Y("button",{class:"wide",disabled:Ue.value,onClick:ie},ze(Ue.value?"求交中…":`以当前接触点 s=${M.value.toFixed(2)} mm 重算两版干涉`),9,h1),Te.value?(at(),ot("div",f1,[P[75]||(P[75]=ct(" 当前帧重算（用各自保存的轮廓）：",-1)),P[76]||(P[76]=Y("br",null,null,-1)),ct(" A："+ze(Te.value.a.toExponential(3))+" mm² ",1),Y("b",{class:on(Te.value.a>1e-6?"bad":"good")},ze(Te.value.a>1e-6?"干涉":"无干涉"),3),P[77]||(P[77]=Y("br",null,null,-1)),ct(" B："+ze(Te.value.b.toExponential(3))+" mm² ",1),Y("b",{class:on(Te.value.b>1e-6?"bad":"good")},ze(Te.value.b>1e-6?"干涉":"无干涉"),3),P[78]||(P[78]=Y("br",null,null,-1)),ct(" Δ = "+ze((Te.value.b-Te.value.a).toExponential(3))+" mm² ",1)])):kt("",!0)])):kt("",!0)])])]))}});Lv(d1).mount("#app");
